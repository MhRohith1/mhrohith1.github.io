import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  drag,
  select,
} from "d3"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../../util/path"

type GraphBackgroundOptions = {
  depth: number
  removeTags: string[]
  showTags: boolean
}

type BackgroundNode = {
  id: SimpleSlug
  graphId: string
  label: string
  current: boolean
  parent: boolean
  tag: boolean
  radius: number
  anchorX: number
  anchorY: number
  baseAnchorX: number
  baseAnchorY: number
  driftPhase: number
  driftRadiusX: number
  driftRadiusY: number
  velocityPhase: number
  velocityStrength: number
} & SimulationNodeDatum

type BackgroundLink = {
  source: BackgroundNode
  target: BackgroundNode
}

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

let backgroundGraphCleanups: (() => void)[] = []

function cleanupBackgroundGraphs() {
  for (const cleanup of backgroundGraphCleanups) {
    cleanup()
  }
  backgroundGraphCleanups = []
}

function getNeighbours(slug: SimpleSlug, links: SimpleLinkData[], depth: number) {
  const neighbourhood = new Set<SimpleSlug>()
  const queue: { id: SimpleSlug; depth: number }[] = [{ id: slug, depth: 0 }]

  while (queue.length > 0) {
    const { id, depth: currentDepth } = queue.shift()!
    if (neighbourhood.has(id) || currentDepth > depth) continue

    neighbourhood.add(id)
    if (currentDepth === depth) continue

    for (const link of links) {
      if (link.source === id) queue.push({ id: link.target, depth: currentDepth + 1 })
      if (link.target === id) queue.push({ id: link.source, depth: currentDepth + 1 })
    }
  }

  return neighbourhood
}

function getLocalGraph(
  slug: SimpleSlug,
  data: Map<SimpleSlug, ContentDetails>,
  options: GraphBackgroundOptions,
) {
  const links: SimpleLinkData[] = []
  const tags: SimpleSlug[] = []
  const validLinks = new Set(data.keys())

  for (const [source, details] of data.entries()) {
    for (const target of details.links ?? []) {
      if (validLinks.has(target)) {
        links.push({ source, target })
      }
    }

    if (options.showTags) {
      const localTags = details.tags
        .filter((tag) => !options.removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug))

      tags.push(...localTags.filter((tag) => !tags.includes(tag)))

      for (const tag of localTags) {
        links.push({ source, target: tag })
      }
    }
  }

  const neighbourhood =
    options.depth >= 0 ? getNeighbours(slug, links, options.depth) : new Set<SimpleSlug>()

  if (options.depth < 0) {
    validLinks.forEach((id) => neighbourhood.add(id))
    if (options.showTags) tags.forEach((tag) => neighbourhood.add(tag))
  }

  const nodes = [...neighbourhood]
  const localLinks = links.filter(
    (link) => neighbourhood.has(link.source) && neighbourhood.has(link.target),
  )
  return { nodes, links: localLinks }
}

function seededRandom(seed: string) {
  let hash = 2166136261
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }

  return () => {
    hash += 0x6d2b79f5
    let value = hash
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

async function renderBackgroundGraph(container: HTMLElement, fullSlug: FullSlug) {
  container.replaceChildren()

  const cfg = JSON.parse(container.dataset["cfg"] ?? "{}") as Partial<GraphBackgroundOptions>
  const options: GraphBackgroundOptions = {
    depth: cfg.depth ?? 1,
    removeTags: cfg.removeTags ?? [],
    showTags: cfg.showTags ?? true,
  }
  const slug = simplifySlug(fullSlug)
  const data = new Map(
    Object.entries<ContentDetails>(await fetchData).map(([key, value]) => [
      simplifySlug(key as FullSlug),
      value,
    ]),
  )
  const localGraph = getLocalGraph(slug, data, options)
  if (localGraph.nodes.length === 0) return () => {}

  const incoming = new Set(
    localGraph.links.filter((link) => link.target === slug).map((link) => link.source),
  )
  const width = window.innerWidth
  const height = window.innerHeight
  const rng = seededRandom(slug)
  const pagePadding = Math.min(width, height) * 0.08
  const copies = localGraph.nodes.length <= 4 ? 6 : 1
  const nodes: BackgroundNode[] = []
  const links: BackgroundLink[] = []

  for (let copy = 0; copy < copies; copy++) {
    const copyNodes = new Map<SimpleSlug, BackgroundNode>()
    const columns = Math.ceil(Math.sqrt(copies))
    const rows = Math.ceil(copies / columns)
    const column = copy % columns
    const row = Math.floor(copy / columns)
    const clusterWidth = width / columns
    const clusterHeight = height / rows
    const clusterCenterX = clusterWidth * (column + 0.5)
    const clusterCenterY = clusterHeight * (row + 0.5)
    const clusterRadius = Math.min(clusterWidth, clusterHeight) * 0.28

    for (const id of localGraph.nodes) {
      const current = id === slug
      const parent = incoming.has(id)
      const tag = id.startsWith("tags/")
      const label = tag ? "#" + id.substring(5) : (data.get(id)?.title ?? id)
      const angle = rng() * Math.PI * 2
      const distance = copies === 1 ? 0 : clusterRadius * (0.45 + rng() * 0.55)
      const anchorX =
        copies === 1
          ? pagePadding + rng() * Math.max(width - pagePadding * 2, 1)
          : clusterCenterX + Math.cos(angle) * distance
      const anchorY =
        copies === 1
          ? pagePadding + rng() * Math.max(height - pagePadding * 2, 1)
          : clusterCenterY + Math.sin(angle) * distance
      const radius = current ? 8 : parent || tag ? 6 : 5
      const driftRadiusX = copies === 1 ? 0 : clusterWidth * (0.09 + rng() * 0.08)
      const driftRadiusY = copies === 1 ? 0 : clusterHeight * (0.09 + rng() * 0.08)
      const velocityStrength = copies === 1 ? 0 : 0.015 + rng() * 0.025
      const node: BackgroundNode = {
        id,
        graphId: `${copy}:${id}`,
        label,
        current,
        parent,
        tag,
        radius,
        anchorX,
        anchorY,
        baseAnchorX: anchorX,
        baseAnchorY: anchorY,
        driftPhase: rng() * Math.PI * 2,
        driftRadiusX,
        driftRadiusY,
        velocityPhase: rng() * Math.PI * 2,
        velocityStrength,
        x: anchorX,
        y: anchorY,
        vx: (rng() - 0.5) * (copies === 1 ? 0 : 2),
        vy: (rng() - 0.5) * (copies === 1 ? 0 : 2),
      }

      copyNodes.set(id, node)
      nodes.push(node)
    }

    for (const link of localGraph.links) {
      const source = copyNodes.get(link.source)
      const target = copyNodes.get(link.target)
      if (source && target) {
        links.push({ source, target })
      }
    }
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
  svg.setAttribute("width", `${width}`)
  svg.setAttribute("height", `${height}`)
  container.appendChild(svg)

  const rootStyle = getComputedStyle(document.documentElement)
  const secondary = rootStyle.getPropertyValue("--secondary").trim()
  const tertiary = rootStyle.getPropertyValue("--tertiary").trim()
  const gray = rootStyle.getPropertyValue("--gray").trim()
  const lightGray = rootStyle.getPropertyValue("--lightgray").trim()

  const simulation = forceSimulation(nodes)
    .alpha(0.7)
    .alphaDecay(0.006)
    .alphaTarget(copies === 1 ? 0 : 0.16)
    .velocityDecay(copies === 1 ? 0.18 : 0.03)
    .force("charge", forceManyBody().strength(copies === 1 ? -90 : -45))
    .force("center", forceCenter(width / 2, height / 2).strength(0.025))
    .force(
      "x",
      forceX<BackgroundNode>((node) => node.anchorX).strength(copies === 1 ? 0.045 : 0.035),
    )
    .force(
      "y",
      forceY<BackgroundNode>((node) => node.anchorY).strength(copies === 1 ? 0.045 : 0.035),
    )
    .force(
      "link",
      forceLink<BackgroundNode, BackgroundLink>(links)
        .distance(copies === 1 ? 140 : 58)
        .strength(copies === 1 ? 0.18 : 0.34),
    )
    .force("collide", forceCollide<BackgroundNode>((node) => node.radius + 16).iterations(2))

  const linkGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
  const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g")
  svg.append(linkGroup, nodeGroup)
  const linkElements: SVGLineElement[] = []
  const nodeElements: {
    node: BackgroundNode
    group: SVGGElement
    circle: SVGCircleElement
    label: SVGTextElement
  }[] = []

  for (let i = 0; i < links.length; i++) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line.setAttribute("stroke", lightGray)
    line.setAttribute("stroke-width", "1.4")
    linkGroup.appendChild(line)
    linkElements.push(line)
  }

  for (const node of nodes) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g")
    group.setAttribute("class", "graph-background-node")

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("r", `${node.radius}`)
    circle.setAttribute(
      "fill",
      node.current ? secondary : node.parent || node.tag ? tertiary : gray,
    )
    circle.setAttribute("tabindex", "-1")

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text")
    label.textContent = node.label
    label.setAttribute("x", `${node.radius + 7}`)
    label.setAttribute("y", "4")

    group.append(circle, label)
    nodeGroup.appendChild(group)
    nodeElements.push({ node, group, circle, label })
  }

  function setActiveNode(activeNode: BackgroundNode | null) {
    const neighbours = new Set<string>()

    if (activeNode) {
      neighbours.add(activeNode.graphId)
      for (const link of links) {
        if (
          link.source.graphId === activeNode.graphId ||
          link.target.graphId === activeNode.graphId
        ) {
          neighbours.add(link.source.graphId)
          neighbours.add(link.target.graphId)
        }
      }
    }

    for (let i = 0; i < links.length; i++) {
      const link = links[i]
      const active =
        activeNode !== null &&
        (link.source.graphId === activeNode.graphId || link.target.graphId === activeNode.graphId)
      linkElements[i].classList.toggle("active", active)
      linkElements[i].classList.toggle("dimmed", activeNode !== null && !active)
    }

    for (const element of nodeElements) {
      const active = activeNode !== null && neighbours.has(element.node.graphId)
      const hovered = activeNode !== null && element.node.graphId === activeNode.graphId
      element.group.classList.toggle("active", active)
      element.group.classList.toggle("hovered", hovered)
      element.group.classList.toggle("dimmed", activeNode !== null && !active)
    }
  }

  function updateDrift() {
    if (copies === 1) return

    const elapsed = performance.now() / 1000
    for (const node of nodes) {
      node.anchorX =
        node.baseAnchorX +
        Math.sin(elapsed * 0.65 + node.driftPhase) * node.driftRadiusX +
        Math.sin(elapsed * 0.23 + node.driftPhase * 2.1) * node.driftRadiusX * 0.45
      node.anchorY =
        node.baseAnchorY +
        Math.cos(elapsed * 0.52 + node.driftPhase * 1.7) * node.driftRadiusY +
        Math.sin(elapsed * 0.31 + node.driftPhase * 0.8) * node.driftRadiusY * 0.45
      node.vx =
        (node.vx ?? 0) +
        Math.sin(elapsed * 1.35 + node.velocityPhase) * node.velocityStrength +
        Math.sin(elapsed * 2.1 + node.velocityPhase * 1.9) * node.velocityStrength * 0.45
      node.vy =
        (node.vy ?? 0) +
        Math.cos(elapsed * 1.15 + node.velocityPhase * 1.4) * node.velocityStrength +
        Math.sin(elapsed * 1.8 + node.velocityPhase * 0.7) * node.velocityStrength * 0.45

      const speed = Math.hypot(node.vx ?? 0, node.vy ?? 0)
      const maxSpeed = 2.2
      if (speed > maxSpeed) {
        node.vx = ((node.vx ?? 0) / speed) * maxSpeed
        node.vy = ((node.vy ?? 0) / speed) * maxSpeed
      }
    }
  }

  function updatePositions() {
    updateDrift()

    for (let i = 0; i < links.length; i++) {
      const link = links[i]
      const line = linkElements[i]
      line.setAttribute("x1", `${link.source.x}`)
      line.setAttribute("y1", `${link.source.y}`)
      line.setAttribute("x2", `${link.target.x}`)
      line.setAttribute("y2", `${link.target.y}`)
    }

    for (const { node, group } of nodeElements) {
      group.setAttribute("transform", `translate(${node.x}, ${node.y})`)
    }
  }

  simulation.on("tick", updatePositions)
  updatePositions()

  let dragStartTime = 0
  select<SVGGElement, BackgroundNode>(nodeGroup)
    .selectAll<SVGGElement, BackgroundNode>("g")
    .data(nodes)
    .on("pointerenter", (_event, node) => setActiveNode(node))
    .on("pointerleave", () => setActiveNode(null))
    .on("click", (event, node) => {
      if (Date.now() - dragStartTime >= 250) return
      event.preventDefault()
      event.stopPropagation()
      const target = resolveRelative(fullSlug, node.id)
      window.spaNavigate(new URL(target, window.location.toString()))
    })
    .call(
      drag<SVGGElement, BackgroundNode>()
        .on("start", (event, node) => {
          dragStartTime = Date.now()
          setActiveNode(node)
          if (!event.active) simulation.alphaTarget(0.45).restart()
          node.fx = node.x
          node.fy = node.y
        })
        .on("drag", (event, node) => {
          node.fx = event.x
          node.fy = event.y
        })
        .on("end", (event, node) => {
          if (!event.active) simulation.alphaTarget(0.04)
          node.fx = null
          node.fy = null
        }),
    )

  return () => {
    simulation.stop()
    container.replaceChildren()
  }
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url

  async function renderAll() {
    cleanupBackgroundGraphs()
    const containers = document.getElementsByClassName("graph-background")
    for (const container of containers) {
      backgroundGraphCleanups.push(await renderBackgroundGraph(container as HTMLElement, slug))
    }
  }

  await renderAll()

  const handleResize = () => void renderAll()
  const handleThemeChange = () => void renderAll()
  window.addEventListener("resize", handleResize)
  document.addEventListener("themechange", handleThemeChange)
  window.addCleanup(() => {
    window.removeEventListener("resize", handleResize)
    document.removeEventListener("themechange", handleThemeChange)
    cleanupBackgroundGraphs()
  })
})

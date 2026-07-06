import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/graphBackground.inline"
import style from "./styles/graphBackground.scss"

export interface GraphBackgroundOptions {
  depth: number
  removeTags: string[]
  showTags: boolean
}

const defaultOptions: GraphBackgroundOptions = {
  depth: 1,
  removeTags: [],
  showTags: true,
}

export default ((opts?: Partial<GraphBackgroundOptions>) => {
  const GraphBackground: QuartzComponent = () => {
    const options = { ...defaultOptions, ...opts }
    return <div class="graph-background" aria-hidden="true" data-cfg={JSON.stringify(options)} />
  }

  GraphBackground.css = style
  GraphBackground.afterDOMLoaded = script

  return GraphBackground
}) satisfies QuartzComponentConstructor

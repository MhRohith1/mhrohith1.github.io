---
title: The Path Integral Formulation of QM
draft: "false"
description: Description of page. Useful for navigating between links
date: April 24, 2026
---
### Introduction
- The Schrodinger equation is effectively an $F=ma$ approach to QM
- In classical, there is the least action principle and the Lagrangian approach as well: we regard this to be the more powerful approach
	- Every field of physics is brought together nicely using the path integral formalism
- We make an analogous jump in QM
### The Path Integrals
- We know the example of diffraction grating for waves: a wave passes through slits on a grating, and at a particular point on a screen, there can be constructive or destructive interference
- We push this to its absolute limits: we increase the number of gratings to infinity, where each grating has infinitely many slits
	- The summing of waves at each point becomes an integral
		$$
			\text{Wave Amplitude at a point }P = \int_{\text{paths}} e^{i(kx-\omega t - \phi)}
		$$
- Feynman finds some insight: he says that the amplitude of a particle moving from $x_{i}$ to $x_{f}$ is simply given as 
	$$
		\int_{\text{paths}} e^{\frac{i}{\hbar} S[\text{path, }t]}
	$$
- where $S$ is the classical action of a particle undergoing that path
	- So every path contributes nothing except for a pure phase, so how does classical mechanics emerge as a limit? how does the classical path emerge?

### Classical and Quantum Paths
- Suppose we have some classical path from two initial points $x_{0}$ and $x_{1}$
- Let's take the action of the classical path $S_{path}$, and suppose we have some unphysical path with its own action $S_{\text{crazy}}$
- Since the classical path is the minimum of the action principle, making variations and perturbations of the classical path leaves the action relatively unchanged
- on the other hand, making deviations of the crazy path can bring huge changes to the action, especially w.r.t to the quantity $\hbar$.
	- so the phases of the deviations of the crazy are WAY more likely to destructively interfere, while the phases of the deviations from the classical path are more likely to survive

### The Free particle in the Path Integral
- Suppose we have a particle with definite position at $x_{0}$
- After some time $t$, what is the amplitude of the particle in $x_{1}$?
- Classically, for a free particle, the action is just 
	$$
		S=\int \mathcal{L} \, dt = \frac{1}{2}mv^{2}T
	$$
	- where $T=$
- So in the quantum case, we expect the probability amplitude of finding the particle at $x_{1}$ at $t$ to just be 
	$$
		A \propto \exp\left[ \frac{i}{\hbar} \right]
	$$
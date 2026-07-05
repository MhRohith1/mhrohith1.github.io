---
title: Spin Hamiltonian
draft: "false"
description: Description of page. Useful for navigating between links
date: April 4, 2026
---
[[Spin]]
[[Angular momentum]]
### Introduction
- Throughout the early parts of the QM course, we developed an understanding of a position dependent Hamiltonian
- This allowed us to use methods of differential equations to find states / particles that obeyed the system properties
- With the mathematical formalism needed to describe spin, we look to understand whether is a Hamiltonian that can serve to have eigenstates of spin

### Motivation
- In the Stern Gerlach experiment, electrons with no orbital angular momentum where shot through a gradient magnetic field
- This experiment showed that particles deflect both upward and downward from the beam
	- This shows that spin has something to do with magentism and the magnetic field
	- If it didn't, then we would see no splitting of the particles
- Spin is defined to be associated to magnetism by experiment

### Constant Magnetic Field Hamiltonian
- In classical electrodynamics, a current loop serves to act as a magnetic dipole
- the dipole moment of a current loop is
$$
\boldsymbol \mu = I \mathbf A
$$
- We consider an individual charge in a current loop so that 
$$
\begin{align}
	I = \frac{q}T=\frac{q\,v}{2\pi r}&= \frac{q \, \overbrace{v\cdot r}^{L/m}}{2\underbrace{\pi r^2}_A}=\frac{q \vec L}{2m A} \\
	\mu=IA &= \frac{e}{2m}L 
\end{align}
$$
- Here, $I$ is the current (scalar) and $\bf A$ is the area vector $\mathbf A = A \hat{\boldsymbol n}$ 
- This system had corresponding energy
$$
E = -\boldsymbol \mu \cdot \mathbf B
$$
- We quantize the $\mu$ and include a spin term to make it a quantum analog (the classical case has no such "spin")
- This gives us 
$$
\boldsymbol \mu = -\frac{\mu_B}{\hbar}(\vec L + g\vec S)
$$
- where $\mu_B$ is the Bohr Magneton $\mu_B=\frac{e \hbar}{2m}$
	- for an electron, we take $g \approx 2$
- From classical dynamics, we know that since $\mathcal L= K - V$, the Hamiltonian is simply $H = K+V=E$
- we use the expression for the energy above to write
$$
H = -\boldsymbol \mu \cdot \mathbf B
$$
- Indeed, if $\mathbf B = B \, \hat k$ and the particle has only a spin angular momentum, then
$$
H = -\frac{\mu_B}{\hbar} g \, B (\vec S \cdot \hat k) = -\frac{\mu_B}{\hbar} g\, B\, S_z
$$
- The eigenstates of $S_z$ are simply $\ket{z_\pm}$, so that for a Hamiltonian with only a $z$ component of magnetic field, the $\ket{z_\pm}$ states form the eigenstates of that Hamiltonian
- Also observe that if $H=-\frac{\mu_B}{\hbar} g\, B\, S_z$,
$$
\begin{align*}
H\ket{z_\pm} &= -\frac{\mu_B}{\hbar} g\, B\, S_z \ket{z_\pm} \\
&= -\frac{\mu_B}{\hbar} g\, B\, \left(\pm \frac{\hbar}{2}\right) \ket{z_\pm} \\
&= \mp \underbrace{\frac{\mu_B \,g\, B}{2}}_{\text{Energy}}\, \ket{z_\pm}
\end{align*}
$$
### The Stern-Gerlach Experiment
- In the Stern-Gerlach Experiment, two bar magnets were placed closed to each other to produce a non-constant field $\mathbf B=(B_0 + \epsilon z)\, \hat k$ 
- We use $H = -\boldsymbol \mu \cdot \mathbf B$ to write
$$
H=-\frac{\mu_B}{\hbar}g \vec S \cdot (B_0 + \epsilon z) \hat k
$$
- This is simply 
$$
H = \mu_B\,g\,(B_0 + \epsilon z) \,\sigma_z
$$
- Here, $\sigma_z$ is the $z$-Pauli Matrix (this is different from the $S_z$ operator: $S_z=\frac{\hbar}2 \sigma_z$)
- For this hamiltonian, $\ket{z_\pm}$ are still eigenstates, and so they have unique energies
	- First, we act $H$ on $\ket{z_\pm}$ to obtain the energy eigenvalue
$$
	H\ket{z_\pm} = \pm \mu_B \, g (B_0 + \epsilon z) \ket{z_\pm}
$$
	- So the energy of the $\ket{z_\pm}$ states are $\pm \mu_B \, g (B_0 + \epsilon z)$
- The time evolution becomes simple:
$$
\begin{align}
\ket{z_\pm(t)}&= \ket{z_\pm} \exp\left(-i \frac{\pm \mu_B \, g(B_0 + \epsilon z)}{\hbar}t\right) \\
&=\ket{z_\pm} \exp\left(\mp \frac{(\mu_B \,g\,t\,\epsilon )}{\hbar} z\right)\exp\left(\mp \frac{(\mu_B \,g\, B_0)}{\hbar} t\right)
\end{align}
$$
- Note that the first term resembles a plane wave (note that the plane wave has the form $e^{-ikx})$ this plane wave has momentum
$$
p_\pm=\hbar k = \pm \frac{(\mu_B \,g\,t\,\epsilon )}{\hbar}
$$
- So under the Stern-Gerlach Experiment, the particles possess definite momenta, that cause them to deflect (upward for spin-up particle, downward for spin-down particle) under the magnetic field
	- This explains the splitting!
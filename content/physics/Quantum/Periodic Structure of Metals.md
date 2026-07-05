---
title: Periodic Structure of Metals
draft: "false"
description: Description of page. Useful for navigating between links
date: April 17, 2026
---
### Important points:
- ignore electron-electron interactions
- model electron-nucleus interactions through an effective potential
- 1D

Treat each nucleus as residing at intervals of $a$ and that these potentials act as a delta function with constant coefficent $\alpha$. so the potential resembles
$$
	V(x)=\sum_{n=-\infty}^{\infty} \delta(x-na)
$$
and $n \in \mathbb{N}$. this causes the electron to behave like a free particle in between the potentials, so we look for a free particle like solution. however, since the $\delta$ potentials repeat, we look for a self similar solution. Essentially, we pick a value $k \in \mathbb{R}$ and look for a solution satisfying the periodic boundary condition
$$
	\Psi(x+a)=\Psi(x)e^{iqa}
$$
for some $q$. For a given value of $k$, the energy resembles
$$
	E_{k}=\frac{\hbar^2k^2}{2m}.
$$
So in between any given interval, the wave function resembles
$$
	\Psi(x)=A\cos(kx)+B\sin(kx).
$$
For any value on the boundary of an interval, where there is a $\delta$ function, we apply the $\delta$ boundary condition: we demand $\Psi$ continuous with a kink, and that $\Psi'$ discontinuous. this gives us the following:
$$
	\begin{align*}
	\Psi(na-\epsilon)&=\Psi(na+\epsilon)\\
	-\frac{\hbar^{2}}{2m}(\Psi'(\epsilon)-\Psi'(\epsilon))&=\alpha\Psi(0)
	\end{align*}
$$
We use the symmetry of $\Psi$ along the various intervals: we pick $na=0$ to simplify our calculations. At $\epsilon$, $\Psi=B$ and $\Psi'=A\cdot k$. We apply self-similarity at $-\epsilon$ as follows:
$$
	\Psi(-\epsilon)=\Psi(a-\epsilon).
$$
We take that we know $\Psi, \Psi'$ at $x=a-\epsilon$ and we plug this back into the Schrodinger equation above. With that, we get the following relation for $q$:
$$
	\cos(qa)=\cos(z)+\frac{m\alpha a}{\hbar^2} \frac{\sin z}{z}
$$
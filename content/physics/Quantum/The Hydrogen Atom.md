---
title: The Hydrogen Atom & Central Force Motion
draft: "false"
description: Description of page. Useful for navigating between links
date: April 2, 2026
---

### The Schrödinger Equation
- After solving for the time-dependence, we were left with the time independent Schrödinger equation $$H \psi =E\psi$$
- In the 3D problem and under a spherically symmetric potential, the hamiltonian resembles 
$$
H=-\frac{1}{2m}\nabla^2 +V_{\text{eff}}(r)
$$
- where $r=|\boldsymbol r|=\sqrt{x^2+y^2+z^2}$
- For the hydrogen atom, $V_{\text{eff}}(r)$ is given by $$V_{\text{eff}}(r)=-\frac{e^2}{4\pi \epsilon_0r}+\frac{\hbar^2 \ell(\ell+1)}{2mr^2}$$
### Converting to dimensionless units
- We non-dimensionalize the Schrödinger equation $\tilde r=\kappa \, r$ where $$\kappa=\frac{\sqrt{-2mE}}{\hbar}.$$
	- $\kappa$ (really $\frac{1}{\kappa}$) represents how fast the unbound state decays per length: so over one meter, it would decay an amount $1/\kappa$.
	- so $\tilde r$ is like saying "how many decay lengths away from the proton is the electron"
- another non-dimensional quantity 
$$
r_0=\frac{2m}{\hbar^2 \kappa} \frac{e^2}{4\pi \epsilon_0}
$$
- represents the decay at infinity w.r.t the energy of the system. it compares how long the decay length is compared to the Bohr radius $a$. 
- This allows us to get a formula for the energy: 
$$
\begin{equation}
E=-\frac{13.6}{(r_0/2)^2} \text{eV} 
\end{equation}
$$
- So the non-dimsensional radial Schrödinger equation now looks like
$$
\begin{equation}\frac{d^2u}{d\tilde r^2}=u\left[1-\frac{r_0}{\tilde r}+\frac{\ell(\ell+1)}{\tilde r^2}\right]\end{equation}
$$
### Understanding the solutions:
- if $\tilde r \gg 1$, then the electron is far away from the proton, and its wavefunction should resemble exponential decay (there should be a low probability of finding the electron far away from the attractive potential)
	- following the math, we find that if $\tilde r \gg 1$, then $u''\approx u \Rightarrow u \sim e^{-\tilde r}$ 
- if $\tilde r \ll 1$, then the electron is very close to the proton
	- mathematically, this is $u'' \approx \ell(\ell+1) \tilde r^{-2} \Rightarrow u \sim \tilde r^{\ell+1}$
- So we extract this behavior out of $u(\tilde r)$: $u(\tilde r)= \tilde r^{\ell+1} e^{-\tilde r} v(\tilde r)$. 
- Plug this back into (2) and do some algebra to get the following power series:
$$
\begin{align}
\sum_{n=0}^\infty \tilde r^n(a_{n+1}(n+1)(n+2(\ell+1))&+a_n(r_0-2(\ell+1)-2n))=0 \\ a_{n+1}&=a_n\frac{2(n+\ell+1)-r_0}{(n+1)(n+2(\ell+1))}
\end{align}
$$
- the polynomial $v(\tilde r)$ must terminate at some point (otherwise $v(\tilde r) \sim e^{\tilde r}, u(\tilde r) \not\sim e^{-\tilde r}$), so there must exist some $n_{\text{max}}$ such that $a_{n_{\text{max}}}\ne0, a_{n_{\text{max}}+1}=0$. This gives us $$2(n_{\text{max}} +\ell+1)=r_0$$
- Define $n_E:=n_{\text{max}}+\ell+1$ and remember that $r_0$ represents the ratio of the decay length to energy through the Bohr radius. So knowing the maximum term of the polynomial will allow us to to determine the energies through equation (1)

### Energy
- From above, we have $\frac{r_0}{2}=n_E$, so that $E=-\frac{13.6}{n_E^2}$ electron volts
- We also require $n_{\text{max}} \geq 0$, otherwise the resulting radial function is not a valid solution to the Schrödinger equation
- but how does knowing $n_{\text{max}}$ help us with $n_E$? there's whole other variable $\ell$ that the $n_E$ depends on!
	- $n_E$ tells us the energy of the system: for a fixed $n_E$, the energy of the system will remain fixed
	- however, both $n_{\text{max}}$ and $\ell$ are allowed to vary (in a controlled manner) to produce $n_E$.
	- so if $n_E=2$, then $n_\text{max}+\ell=1$,  so we could have $\ell=1, n_{\text{max}}=0$ or $\ell=0, n_{\text{max}}=1$
	- in a way, it describes how particles with different radial and angular components can have the same energy and how a particle with the same energy can have it stored either in the angular (through angular momentum) or in the radial dependence (KE)
### Angular Momentum
- The magnitude of the angular momentum squared depends on $\ell$ in the following manner
$$
L^2=\hbar^2 \ell(\ell+1)
$$
- the $z$-component of the angular momentum depends on $m_\ell$, where $m_\ell \in \{-\ell, -\ell + 1, \ldots, \ell-1, \ell\}$
$$
L_z=\hbar m_\ell
$$

 
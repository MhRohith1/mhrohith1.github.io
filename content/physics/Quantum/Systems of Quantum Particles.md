---
title: Systems of Quantum Particles
draft: "false"
description: Description of page. Useful for navigating between links
date: April 15, 2026
---
### Introduction
- The majority of quantum mechanics focused on studying how single particles behave in different setups
- We now generalize this to consider systems of particles

### Two-particle wavefunction:
- Write
$$
	\Psi(x_{1}, x_{2}, t)= \braket{x_{1}x_{2}|\Psi(t)}
$$
- there are two possible observable positions, one for each particle
- in this way, it can be seen as analogous to 1 particle in 2D
### Distinguishable Particles
- In many ways, distinguishable particles are the easiest case to deal with
- We deal with two different potentials
    - Potential 1: $V(x_1, x_2) = V(|x_1 - x_2|)$ i.e. the potential depends only on the separation between the two particles
        - In this case, switch to the center of mass frame: there are no external forces so that momentum is conserved (translational symmetry) and encode all the dynamics in the relative variable(s)
          $$
          \mu = \frac{m_1m_2}{m_1 + m_2} \qquad x_{\mathrm{CM}} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2} \qquad x_{\mathrm{rel}} = x_1 - x_2
          $$
        - This alters the Hamiltonian from the usual form:
			$$
          H =
          -\frac{\hbar^2}{2m_{\mathrm{tot}}}\frac{\partial^2}{\partial x_{\mathrm{CM}}^2}
          -\frac{\hbar^2}{2\mu}\frac{\partial^2}{\partial x_{\mathrm{rel}}^2}
          + V(x_{\mathrm{rel}})
          $$
        - One can use separation of variables to obtain the energy due to the center of mass and the relative motion
### Non-distinguishable particles
- The interesting case is the case of non-distinguishable particles
- In this case, we can't use $x_{1}$ to denote the position of particle 1 and same for $x_{2}$. instead, we treat this as simply coordinate slots that in no way represent the physical positions of particles 1 or 2
	- So saying particle A (this distinguishing is impossible, but just for understanding's sake) is at $x_{1}$ and particle B is at $x_2$ should be the same as saying particle A is at $x_{2}$ and particle B is at $x_{1}$
	- Mathematically, it's random coordinates to denote the mapping of
		$$
			\Psi:\mathcal{H} \otimes \mathcal{H} \to \mathbb{C}
		$$
- We use the exchange operator
	$$
		P \, \Psi(x_{1}, x_{2}, t)=e^{i \alpha} \Psi(x_{2}, x_{1}, t)
	$$
- The exchange operator has properties
	$$
		P^2=\mathbb 1 \implies e^{i \alpha}=\pm 1
	$$
- if $e^{i\alpha}=1$, then $P\, \Psi=\Psi$ which denotes a boson
- if $e^{i\alpha}=-1$, then $P \Psi = - \Psi$ which denotes a fermion
- Suppose we have an energy eigenstate in the distinguishable case $\Psi(x_{1}, x_{2})=\Psi_{n_{1}} \Psi_{n_{2}}$
	- here, $n_{1}, n_{2}$ denote different energy values
	- In this case, it is clear that $P \Psi \ne \pm \Psi$, so distinguishable particles cannot have this form
- For the indistinguishable case, the bosons and fermions live in different spaces:
	$$
	\begin{align*}
		\Psi_{B}(x_{1}, x_{2}, t) & \in \mathcal{H} \odot \mathcal{H} \\
		\Psi_{F}(x_1, x_{2}, t)  & \in \mathcal{H} \wedge \mathcal{H} \\
	\end{align*}
	$$
- so their states are written as 
	$$
	\begin{align*}
	\Psi_{B, n_{1}, n_{2}}(x_{1}, x_{2}, t)=\alpha_{B}(\Psi_{n_{1}}(x_{1},t)\Psi_{n_{2}}(x_{1}, t) + \Psi_{n_{1}}(x_{2}, t)\Psi_{n_{2}}(x_{1}, t)) \\
	\Psi_{F, n_{1}, n_{2}}(x_{1}, x_{2}, t)=\alpha_{F}(\Psi_{n_{1}}(x_{1},t)\Psi_{n_{2}}(x_{1}, t) - \Psi_{n_{1}}(x_{2}, t)\Psi_{n_{2}}(x_{1}, t))
	\end{align*}
	$$
	- These form the basis vectors of $\mathcal{H} \odot \mathcal{ H}$ and $\mathcal{ H} \wedge \mathcal{H}$ respectively
- **Important note:** see that $\Psi_{F, n_{1}, n_{2}}=0$ if $n_{1}=n_{2}$. This is the famous **Pauli Exclusion Principle**.
- Requiring normalization, we see that $\alpha_{B} = \alpha_{F}=\frac{1}{\sqrt{ 2 }}$

### The quantum force
- What is the quantity $\braket{(x_{1}-x_{2})^2}$ in the case of the distinguishable, boson and fermion case?
	- This is effectively measuring the standard deviation of the separation between the two particles
	- We also note 
		$$
			\braket{(x_{1}-x_{2})^2}=\braket{x_{1}^2}+\braket{x_{2}^2}-2\braket{x_{1}x_{2}}
		$$
- **Distinguishable**
	- the wavefunction here resembles
		$$
			\Psi(x_{1},x_{2})=\Psi_{1}(x_{1})\Psi(x_{2})
		$$
	- Consider just the average $\braket{x_{1}^2}$. this is
		$$
			\begin{align*}
			\int dx_{1}dx_{2} \, x_{1}^{2} \lvert \Psi_{1}(x_{1}) \rvert ^2\lvert \Psi_{2}(x_{2}) \rvert ^2 &= \int \lvert \Psi_{1}(x_{1}) \rvert^2 x_{1}^2 \, dx_{1} \int \lvert \Psi_{2}(x_{2}) \rvert^2dx_{2} \\
			&=\langle x^2 \rangle_{1} \cdot 1 \\
			&= \langle x^2 \rangle_{1}
			\end{align*}
		$$
	- Where the subscript outside the average denotes the expectation value of $x$ (or in this case $x^{2}$) if a 1D particle had wavefunction $\Psi_{1}$
	- Similarly, $\langle x_{2}^2 \rangle$ is just $\langle x^2 \rangle_{2}$
	- Now, we compute $\langle x_{1}x_{2} \rangle$:
		$$
			\begin{align}
			\int dx_{1} dx_{2}\, x_{1} x_{2}\, \lvert \Psi_{1}(x_{1}) \rvert ^2 \lvert \Psi_{2}(x_{2}) \rvert ^2   & = \int x_{1}\lvert \Psi_{1}(x_{1}) \rvert^2 dx_{1} \, \int x_{2} \lvert \Psi_{2}(x_{2}) \rvert^2 dx_{2}   \\
			 & = \langle x \rangle _{1} \langle x \rangle _{2}
			\end{align}
		$$
	- So that in the distinguishable case, $\langle (x_{1}-x_{2})^{2} \rangle_{\text{dist}} = \langle x^2 \rangle_{1} +\langle x^{2} \rangle_{2} -2\langle x \rangle_{1} \langle x \rangle_{2}$
- **Boson**
	- Here, what we end up finding is that $\langle (x_{1}-x_{2})^2 \rangle_{\text{boson}} \leq \langle (x_{1}-x_{2})^2 \rangle_{\text{dist}}$
- **Fermion**
	- Here, we end up finding that $\langle (x_{1}-x_{2})^2 \rangle_{\text{ferm}}\geq \langle (x_{1}-x_{2})^2 \rangle_{\text{dist}}$
- This is the **quantum force**: Fermionic particles are "repelled" from each other while bosons are "attracted" to each other
	- this is not a result of any actual forces, but statistics
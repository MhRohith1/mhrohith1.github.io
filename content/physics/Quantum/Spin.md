---
title: Spin
draft: "false"
description: Description of page. Useful for navigating between links
date: April 2, 2026
---
[[Combining Angular Momenta]]
[[Angular momentum]]

### Introduction
- We saw that general eigenstates of the angular momentum operators allowed for $\ell = \frac{1}{2}$ and other non-integer values
- However, when we look for solutions of the equations
$$
\begin{align}
L^2f(\theta, \varphi)&=\hbar^2\ell(\ell+1)f(\theta, \varphi) \\
L_zf(\theta, \varphi)&=\hbar m_\ell f(\theta, \varphi)
\end{align}
$$
- We found that the only permissible solutions for the above differential equations where the spherical harmonics
- However, the spherical harmonics don't allow for non-integer values of $\ell$, so what do we do?
- The Stern-Gerlach Experiment confirms the existence of angular momentum that do not arise from orbits: a beam of particles that don't orbit anything still deflect when placed under a bar magnet
### Central force motion
- In [[The Hydrogen Atom]], we solved for the radial dependence of the wavefunction
- However, I omitted the angular dependence, which is built into the 3D laplacian
- When we account for the angular dependence and apply separation of variables, we find the angular wavefunctions form the spherical harmonics
$$
Y_\ell^{m_\ell}=\left\{\begin{array}{cc}(-1)^{m_\ell} & m_\ell >0 \\ 1 & m_\ell \leq 0\end{array}\right.\, \sqrt{\frac{(2\ell+1)(\ell - |m_\ell|)!}{4\pi(\ell+m_\ell)!}}P_\ell^{m_\ell}(\cos(\theta)) \, \exp(im_\ell \varphi)
$$
- where $P_\ell^{m_\ell}$ are the associated Legendre functions
- Since there is nothing about angular momentum in the derivation of the spherical harmonics through central force motion, we come to understand the spherical harmonics as representing "motion" in the angular variables
	- Through the angular momentum operators, we came to understand that the spherical harmonics also play role in angular momentum
	- Indeed, we realize that orbital angular momentum and orbital motion are one and the same and intuition carries over from classical mechanics
- But a big weakness of spherical harmonics is that they do not capture the half-integer angular momenta, which must arise from a mechanism that is not represented as motion in the angular variables
### An important note about Spin
- Although both spin (intrinsic angular momentum) and rotational angular momentum arise from looking for eigenstates of the total angular momentum operators, we cannot combine the two of them in a simple manner
	- So if a there is an electron orbiting the hydrogen nucleus in the second excited state with $\ell=1$, then the electron both has rotational and intrinsic angular momentum
	- However, we can't combine the $\ell=\frac{1}{2}$ (intrinsic) and $\ell=1$ (rotational) angular momenta to say that the electron possesses $\ell=\frac{3}{2}$ angular momentum
- Spin is a fundamental property of quantum particles, and to understand it truly we need to look at QFT
	- The electron represents a quantum of the electromagnetic field, and when looking at the spin of the particle that pops out when doing the math, we see a spin-$\frac{1}{2}$ particle
### Notation
- Before, we used $L$ to denote operators related to angular momentum
- Now that we know spin is really different and cannot be treated the same as angular momentum, we split the spin and angular momentum operators as 
$$
\begin{align*}
L^2, \, L_\pm, \, L_z, \, \ell, \, m_\ell &\leftrightarrow \text{Orbital Angular Momentum} \\
S^2, \, S_{\pm}, \, S_z, \, s, \, m_s &\leftrightarrow \text{Spin Angular Momentum} \\
J^2, \, J_{\pm}, \, J_z, \, j, \, m_j &\leftrightarrow \text{Total Angular Momentum}
\end{align*}
$$
- All the equations we derived before hand still hold with these set of "new" operators
### The mathematics
- In the Stern-Gerlach experiment, when we fire neutral silver atoms through a magnetic field, the atoms deflect in *two* separate beams
- the atoms are neutral, so there is no Lorentz force $\boldsymbol F = q(\boldsymbol v \times \boldsymbol B)$, and yet they are still deflecting...how?
	- Moreover, why do they deflect in *two* beams instead of just one?
- Through our calculations with spin, we found that half-integer $j$ values were permissible. For $s=\frac{1}{2}$, we have $m_s \in \{-\frac{1}{2}, \frac{1}{2}\}$ with corresponding $z-$angular momentum $S_{z, -}=-\frac{\hbar}{2}, \, S_{z,+} = \frac{\hbar}{2}.$ 
	- This could explain the two beam deflection!
	- In fact, this does explain it. So we see that silver atoms, that are composed of electrons, have one-half spin, so we call them spin 1/2 particles
	- Moreover, electrons *can't* have any other value for its spin! it must be $-\frac{1}{2}$ or $\frac{1}{2}$
- We upgrade the state function $\braket{x|\psi}=\psi(x)$ as 
$$
\psi(x)=\begin{pmatrix}\psi_+(x) \\ \psi_-(x)\end{pmatrix}=\psi(x)\otimes\underbrace{\begin{pmatrix}\chi_+(x) \\ \chi_-(x)\end{pmatrix}}_{\text{normalized to 1 }\forall x}
$$
- Here, $|\psi_+(x)|^2$ denotes the probability of measuring the particle at position $x$ with spin $+$, and likewise for $-$
	- the total probability for measuring the probability at position $x$ now has to account for both spins as 
$$|\psi(x)|^2=|\psi_+(x)|^2+|\psi_-(x)|^2$$
	- Mathematically, we took $\psi \in \mathcal H \cong L^2$ when we were not treating spin
	- now, we split $\psi$ into the spin-up and spin-down treatment, which yields $\psi \in \mathcal H \otimes \mathbb C^2$
		- It's not all of $\mathbb C^2$, but only those vectors in $\mathbb C^2$ whose norm is one
- Suppose that a state (an electron) is prepared to possess only intrinsic angular momentum (spin)
	- Then, it has $s=\frac{1}2 \Rightarrow S^2=\hbar^2s(s+1)=\frac{3}4 \hbar^2$ and can possess two different values of $m_s \in \{-\frac{1}{2}, \frac{1}2 \} \Rightarrow S_z \in \{-\frac{\hbar}{2}, \frac{\hbar}{2}\}$
- Denote 
$$
\begin{align*}
\ket{z_+}=\begin{pmatrix}1 \\ 0\end{pmatrix} \\
\ket{z_-}=\begin{pmatrix}0 \\ 1\end{pmatrix}
\end{align*}
$$
- as the eigenstates of the $z-$spin operator $S_z \in \text{Mat}_{2 \times 2}(\mathbb C)$ such that 
$$
\begin{align}
	S_z\ket{z_+} = \overbrace{\frac{\hbar}{2}}^{\text{spin for } + \text{ state}} \ket{z_+} \\
	S_z\ket{z_-} = \underbrace{-\frac{\hbar}{2}}_{\text{spin for } - \text{ state}} \ket{z_-}
\end{align}
$$
- We solve for the components of $S_z$. note that in general, the components of a matrix are given as $A_{ij}=\boldsymbol e _i\, A \,\boldsymbol e_j$ in the frame of $\{\boldsymbol e_j\}$
- This gives
$$S_z = \frac{\hbar}{2}\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$$
- We know $S^2 \ket{z_+}=\frac{3}{4}\hbar^2,\, S^2\ket{z_-}=\frac{3}{4}\hbar^2 \ket{z_-}$ i.e. 
$$
S^2=\frac{3}{4}\hbar^2 \mathbf{1}
$$
- We can use the equation $S_-S_+=S_x^2+S_y^2-\hbar S_z$ to get that 
$$
S^2=(S_+S_-+S_z^2-\hbar S_z)=(S_-S_+ + S_z^2+\hbar S_z) 
$$
- this allows us to solve for the raising and lowering operators, and we can use 
$$
S_\pm=S_x \pm i S_y
$$
- to get $S_x$, $S_y$

### The final forms:
- In the $\ket{z_{\pm}}$ basis, the operators have the form 
$$
\begin{align}
	S^2&=\frac{3}{4}\hbar^2 \boldsymbol{1} \\
	S_z = \frac{\hbar}{2}\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix} \quad &\ket{z_+} = \begin{pmatrix}1 \\ 0\end{pmatrix} \quad \ket{z_-} = \begin{pmatrix}0 \\ 1\end{pmatrix} \\
	S_x = \frac{\hbar}{2}\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix} \quad &\ket{x_+} = \frac{1}{\sqrt 2}\begin{pmatrix}1 \\ 1\end{pmatrix} \quad \ket{x_-} = \frac{1}{\sqrt 2} \begin{pmatrix}1 \\ -1\end{pmatrix} \\
	S_y = \frac{\hbar}{2}\begin{pmatrix}0 & i \\ -i & 0\end{pmatrix} \quad &\ket{y_+} = \frac{1}{\sqrt 2}\begin{pmatrix}1 \\ i \end{pmatrix} \quad \ket{y_-} = \frac{1}{\sqrt 2}\begin{pmatrix}1 \\ -i\end{pmatrix} \\
	S_{\hat {\boldsymbol n}}=\hat{\boldsymbol{n}} \cdot \boldsymbol \sigma =& \begin{pmatrix}\sin(\varphi)\sin(\theta) \\ \sin(\theta)\cos(\varphi) \\ \cos(\theta)\end{pmatrix}\cdot \begin{pmatrix}S_x \\ S_y \\ S_z\end{pmatrix} \\
	S_{\hat{\boldsymbol n}} = \frac{\hbar}{2}& \begin{pmatrix}\cos(\theta) & \sin(\theta) e^{-i\varphi} \\ \sin(\theta)e^{i \varphi} & -\cos(\theta) \end{pmatrix} \\
	\ket{\chi_{\hat{\boldsymbol n}+}}=\begin{pmatrix}\cos(\frac{\theta}{2})e^{-i \frac{\varphi}{2}} \\ \sin(\frac{\theta}{2})e^{i \frac{\varphi}{2}}\end{pmatrix} & \quad  \ket{\chi_{\hat{\boldsymbol n}-}}=\begin{pmatrix}\sin(\frac{\theta}{2})e^{-i \frac{\varphi}{2}} \\ -\cos(\frac{\theta}{2})e^{i \frac{\varphi}{2}}\end{pmatrix}
\end{align}
$$

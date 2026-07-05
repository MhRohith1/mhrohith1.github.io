---
title: Angular Momentum
draft: "false"
description: Description of page. Useful for navigating between links
date: April 2, 2026
---

### Angular Momentum
- In classical mechanics, we define $\boldsymbol L = \boldsymbol r \times \boldsymbol p$
- We take the quantum analog component wise: we write the cross product in index notation $L_i = \epsilon_{ijk} \, r_j \, p_k$ to get
	$$
		\begin{align*}
		L_x=y\,p_z-z\,p_y \\
		L_y = z\,p_x-x\,p_z \\
		L_z= x\,p_y-y\,p_x
		\end{align*}
	$$
- We check the commutator of each of these to find that 
	$$
	\begin{align*}
	[L_x, L_y]&=i\hbar L_z \\
	[L_y, L_z]&=i \hbar L_x \\
	[L_x, L_z]&=-i \hbar L_y
	\end{align*}
	$$
	
	- These operators fail to commute
	- Compactly, this can be written as 
		$$
		[L_i, L_j]=\epsilon_{ijk}\, i \hbar L_k
		$$

- We also find that $[L^2, L_x]=[L^2, L_y]=[L^2, L_z]=0$ 

### Eigenstates
- Since $L^2$ commutes with $L_z$, we let $\ket{\lambda, \mu}$ be an eigenstate such that $L^2 \ket{\lambda, \mu}=\lambda\ket{\lambda, \mu}$ and $L_z\ket{\lambda, \mu}=\mu \ket{\lambda, \mu}$ (why is commuting required?)
- We define the ladder operators
$$L_\pm=L_x\pm iL_y$$
- We find that $[L_\pm, L_z]=\pm i \hbar L_z \ne 0$, but $[L^2, L_\pm]=0$ so that $L_\pm$ is compatible with $L^2$
- We evaluate $L_z(L_+\ket{\lambda, \mu})=(\mu+\hbar)L_+\ket{\lambda, \mu}$. This must mean that 
$$
L_+\ket{\lambda, \mu}=\ket{\lambda, \mu+\hbar}
$$
- Similarly, 
	$$
	L_-\ket{\lambda, \mu}=\ket{\lambda, \mu-\hbar}
	$$
	- This means that $L_\pm$ changes only the $z$-component of the angular momentum
- We require that there exist a state such that $L_+ \ket{\lambda, \mu_{\text{max}}}=0$, $L_-\ket{\lambda, \mu_{\text{min}}}=0$
	- Otherwise, $L_z^2 > L^2$
	- We showed above that $L_\pm$ raises states in discrete steps, meaning energy increase or decrease is always by $\hbar$. So there is no state with the property that $L_+ \psi=\psi$ or similarly for $L_-$
	- There is more mathematics to be had, I hope to come back to it later
- Define $\mu_{\text{max}}=\hbar \ell$ for some $\ell$. After some algebra, it can be seen that $L_+L_-=L_x^2+L_y^2+\hbar L_z, \, L_-L_+=L_x^2+L_y^2-\hbar L_z$, so that 
$$
L^2=(L_+L_-+L_z^2-\hbar L_z)=(L_-L_+ + L_z^2+\hbar L_z) 
$$
- We defined $\ket{\lambda, \mu}$ so that $L^2 \ket{\lambda, \mu}=\lambda\ket{\lambda, \mu}$. Applying this definition, we find that
	$$
	\begin{align*}
		(L_+L_-+L_z^2+\hbar L_z)\ket{\lambda, \mu_{\text{max}}}&= \lambda\ket{\lambda, \mu_{\text{max}}} \\
		(L_-L_+ +\mu_{\text{max}}^2 +\hbar \mu_{\text{max}})\ket{\lambda, \mu_{\text{max}}}&=\lambda\ket{\lambda, \mu_{\text{max}}}
	\end{align*}
	$$
	- We also defined that $L_{+}$ acting on $\ket{\lambda, \mu_{\text{max}}}$ returns $0$. 
	- So $\lambda=\mu^2_{\text{max}}+\hbar \mu_{\text{max}}$. Using the fact that we defined $\mu_{\text{max}}=\hbar \ell$, we find that $\lambda=\hbar^2 \ell^2 + \hbar^2 \ell=\hbar^2\ell (\ell+1)$ 
- We also apply $L^2\ket{\lambda, \mu_{\text{min}}}$ to find that 
$$
\begin{align*}
	(L_+L_- +L_z^2 + \hbar L_z)\ket{\lambda, \mu_{\text{min}}}&= \lambda\ket{\lambda, \mu_{\text{min}}} \\
	(0+\mu_{\text{min}}^2-\hbar \mu_{\text{min}})&=\lambda=\hbar^2\ell(\ell+1) \\
	\mu_{\text{min}}(\mu_{\text{min}}-\hbar)&=\hbar^2\ell(\ell+1) \\
	\Rightarrow \mu_{\text{min}}=-\hbar \ell
\end{align*}
$$
- So $\mu_{\text{min}}=-\hbar \ell, \, \mu_{\text{max}}=\hbar \ell$ 
- We also know that there is an integer difference between $\mu_{\text{min}}$ and $\mu_{\text{max}}$, so this tells us $2\ell \in \mathbb{Z} \Rightarrow \ell \in \{0, \frac{1}{2}, 1, \ldots\}$ ($\ell$ cannot be negative because $L^2=\hbar^2\ell(\ell+1) \geq 0$)
	- Also, for a fixed $\ell$, $m \in \{-\ell, -\ell+1, \ldots, 0, 1, \ell-1, \ell\}$
- **Important:** if $[H, L^2]=[H, L_z]=0$ (as is the case with central force motion), then we can label eigenstates with three numbers $\ket{n, \lambda, \mu}$

### Normalization
- Label the state vectors as $\ket{\ell, m_\ell}$, so that $\mu=\hbar m_\ell$ and $\lambda=\hbar^2\ell(\ell+1)$. This also means that $L_+\ket{\ell, m_\ell} = \alpha \ket{\ell, m_\ell+1}$  for some $\alpha$.
- Consider the inner product
$$
\begin{align*}
	\bra{\ell, m_\ell} L_+^\dagger L_+ \ket{\ell, m_\ell}&=|\alpha|^2 \\
	\bra{\ell, m_\ell} L_-L_+ \ket{\ell, m_\ell} &= |\alpha|^2 \\
	\bra{\ell, m_\ell} (L^2-L_z^2-\hbar L_z) \ket{\ell, m_\ell} &= |\alpha|^2\\
	\bra{\ell, m_\ell}(\hbar^2\ell(\ell+1)-\hbar^2m_\ell^2 -\hbar^2m_\ell)\ket{\ell, m_\ell} &= |\alpha|^2 \\
	\Rightarrow (\hbar^2\ell(\ell+1)-\hbar^2m_\ell^2 -\hbar^2m_\ell)&=|\alpha|^2
\end{align*}
$$
- This gives
	$$
	\alpha = \hbar\sqrt{\ell(\ell+1)-m_\ell(m_\ell+1)}=\sqrt{(\ell+m_\ell+1)(\ell-m_\ell)}
	$$
	- we choose the positive value because the wavefunction doesn't flip as the state increases
	- This is the normalization factor for a state with larger angular momentum
- Similarly, we have that $L_-\ket{\ell, m_\ell}=\beta \ket{\ell, m_\ell}$ and
$$
\begin{align*}
\bra{\ell, m_\ell} L_+L_-\ket{\ell, m_\ell}&=|\beta|^2 \\
\bra{\ell, m_\ell} (L^2-L_z^2+\hbar L_z)\ket{\ell, m_\ell} &= |\beta|^2 \\
\bra{\ell, m_\ell}(\hbar^2\ell(\ell+1)-\hbar^2m_\ell^2+\hbar^2m_\ell)\ket{\ell, m_\ell} &= |\beta|^2 \\
(\hbar^2\ell(\ell+1)-\hbar^2m_\ell^2+\hbar^2m_\ell) &= |\beta|^2 \\
\end{align*}
$$
- This gives
$$
\beta=\hbar\sqrt{\ell(\ell+1)-m_\ell(m_\ell-1)}=\sqrt{\ell^2+\ell-m_\ell^2+m_\ell}=\sqrt{(\ell-m_\ell+1)(\ell+m_\ell)}
$$
### Connection to the Spherical Harmonics
- We look for functions that have the property
$$
\begin{align*}
L_zf(\theta,\varphi)&=\hbar m_\ell f(\theta, \varphi) \\
L^2 f(\theta, \varphi) &= \hbar^2 \ell(\ell+1) f(\theta, \varphi)
\end{align*}
$$
- If we write $L_z, \, L^2$ in operator form (using the $\theta, \varphi, \partial_\theta, \partial_\varphi$ as operators) and applying separation of variables, we get that the $\theta$ and $\varphi$ dependence is exactly the same as the Spherical Harmonics!
- However, we saw that $\ell$ can be things like $\frac{1}2$, which are not valid values for the spherical harmonics...this brings us to [[Spin]]!




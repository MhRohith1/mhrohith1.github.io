[[General and Numerical Relativity]]

### Laplace's Equation
- Laplace's Equation is the differential equation $$\nabla^2 u=0$$
- This differential equation is solved using the method of separation of variables...in spherical coordinates!!
	- This is: $$
\nabla^{2} u = \frac{1}{r^{2}}\frac{\partial}{\partial r}\!\left(r^{2}\frac{\partial u}{\partial r}\right) + \frac{1}{r^{2}\sin\theta}\frac{\partial}{\partial \theta}\!\left(\sin\theta\,\frac{\partial u}{\partial \theta}\right) +\frac{1}{r^{2}\sin^{2}\theta}\,\frac{\partial^{2} u}{\partial \phi^{2}}= 0$$
	- By separation of variables, the solutions are the following: $$\begin{align}R(r)&=A_{\ell m}r^\ell + B_{\ell m}r^{-(\ell+1)} \\ \Theta(\theta)&=P^{m}_\ell (\cos(\theta)) \\ \Phi(\phi)&=e^{im\phi}\end{align}$$
		- It must be noted that this is **NOT** an Eigenvalue problem like how separation of variables on the wave equation led to $X''=-\lambda X$. So, we can't say that $(\ell, m)$ correspond to certain eigenvalues. 
	- However, certain conditions can still be placed on $\ell, m$ to yield the following full solution:
	- $$u(r, \theta, \phi)=\sum_{\ell=0}^\infty \sum_{m=-\ell}^{m=\ell}A_{\ell m}r^\ell + B_{\ell m}r^{-(\ell+1)}(P^m_\ell (\cos(\theta)) e^{im\phi})$$
	- The angular terms are combined to give an orthonormal basis called the <u><strong>Spherical Harmonics</strong></u>: $Y^m_\ell:=(P^m_\ell (\cos(\theta)) e^{im\phi})$.
		- $\ell$ is a result of the spherical eigenvalue problem: $\nabla^2_{\theta, \phi} Y^m_\ell = -\ell(\ell+1)Y^m_\ell$, and controls the number of oscillations happening on the surface
		- $m$ sets the $\phi$ dependence

### Spherical Harmonics
- From above, we have that the spherical harmonics are $$Y^m_\ell(\theta,\phi):=P^m_\ell (\cos(\theta)) e^{im\phi}$$
- Since $Y^m_\ell$ takes two angles as input (namely the polar and azimuthal angle), it is said that $Y^m_\ell$ is defined on $S^2$
- This notion can actually be extended: $Y^m_\ell$ forms an <u><i>orthonormal basis</i></u> on the space of functions defined on $S^2$.
	- The inner product is 
 
### Harmonic Functions
- These functions have the property that the value at a point is equal to the average value of the neighborhood around that point
- Mathematically, this is $$V(\boldsymbol r)= \frac{1}{A(B_\boldsymbol r)}\oint_{B_{\boldsymbol r}} V ds$$ where $B_{\boldsymbol r}$ is the open neighborhood around $\boldsymbol r$ and $A(B_\boldsymbol r)$ is the area of the ball centered at $\boldsymbol r$. 
- **If a function satisfies Laplace's equation, it is Harmonic, by definition!**
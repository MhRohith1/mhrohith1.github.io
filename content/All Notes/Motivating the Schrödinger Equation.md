[[quantum physics]]

We are all familiar with the expression $$E=K+V$$where $E$ is the total energy, $K$ is the Kinetic Energy and $V$ is the potential energy of a classical particle. More specifically, if this expression were to denote the energy of a simple, classical particle, then we have $$E=\frac{1}{2}mv^2 + V$$ where $V$ is mostly influenced by the surroundings of the system, like whether the object is in a gravitational field, etc.

What is the analogous version of this in the quantum world?
We from the double slit experiment that electrons and photons can be modeled as traveling waves. These traveling waves can be conveniently written in the form $$\Psi(x,t)=e^{i(kx-\omega t)}$$which relies on Euler's Identity to compactly express the trigonometric functions that denote the traveling waves.
Suppose we are considering a simple photon or electron. The energy of this particle is given by $$E=hf=\hbar \omega$$Similarly, the momentum of this particle is given by $$p=\hbar k$$This identity comes from using $E=mc^2$ and the identity for energy given above.

We need to use the identity $$K=\frac{p^2}{2m}$$
Now, $$\frac{\partial \Psi}{\partial t}=-i\omega \Psi(x,t)$$
Multiply both sides by $i \hbar$, we have $$i \hbar \frac{\partial \Psi}{\partial t}=(i \hbar)(-i\omega \Psi(x,t)) = \hbar \omega \Psi(x,t)=E \Psi(x,t)$$
So the operation $i\hbar \frac{\partial}{\partial t}$ returns the energy of the wave function.
Similarly for momentum, $$\frac{\partial \Psi}{\partial x}=ik \Psi(x,t)$$ Mutliplying by $-i \hbar$, we have $$-i \hbar \frac{\partial \Psi}{\partial x}=(-i \hbar)(ik \Psi(x,t)) = \hbar k \Psi(x,t) = p \Psi(x,t)$$
So the operation $-i \hbar \frac{\partial}{\partial x}$ tells you the momentum of the wave function. To obtain $p^2$ while also maintaining linearity (to avoid $\Psi^2$ terms), we need to apply the above operator twice, $$(-i \hbar)(-i \hbar)\frac{\partial^2}{\partial x^2} = -\hbar^2 \frac{\partial^2}{\partial x^2}$$
Dividing by $2m$ will tell us the kinetic energy of the particle. So, returning to $E=K+V$, we have $$i \hbar \frac{\partial \Psi}{\partial t}=-\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V\cdot \Psi$$
Ta-da! The **Schrödinger Equation**.
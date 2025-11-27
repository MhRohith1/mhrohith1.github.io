[[classical physics]]
[[Lagrangian Dynamics]]

The Lagrangian is a really important physical quantity that comes up *over and over and over again*! This quantity changes from system to system, but all systems *of any type* involve some sort of Lagrangian!
### Examples of Lagrangians:
- In most Classical Dynamics class problems, the Lagrangian is just $L=K-V$, where $K$ denotes kinetic energy and $V$ denotes potential energy
- In Electrodynamics, the Lagrangian can be represented as a rank-2 antisymmetric tensor. in class, we dealt with it as 
$$
L=K-q \boldsymbol{A}(\boldsymbol r, t) \cdot \dot{\boldsymbol{r}} - q \varphi(\boldsymbol r, t)
$$
- In General Relativity, the Einstein-Hilbert action has the Lagrangian
$$
L=\frac{1}{2\kappa} R \sqrt{-g}
$$where $R$ is the Ricci Scalar and $\kappa = 8\pi G c^{-4}$, and $g$ the metric tensor. Minimizing this Lagrangian yields the Einstein Field Equations.

### About the Lagrangian:
- The above examples should illustrate the utility of Lagrangians!
- The Lagrangian is a **functional** on the **tangent bundle** of the configuration manifold $Q$. That means
$$
L:TQ \rightarrow \mathbb{R}
$$
- This means that it takes configuration positions and velocities, and maps it to a real number. This is like how energy also maps positions and velocities to a real number
[[Lagrangian Dynamics]]
[[The Lagrangian]]

As mentioned in the main [[classical physics]] page, the space of configurations forms a smooth manifold, often denoted $Q$. This lends itself to the mathematics of Differential Topology.

### What is a configuration?
- Dr. Burby defined configuration as "time frozen copies" of the system
- Essentially: what are the variables that you need to describe the different states the system can be in?
- For example, 
	- if we had a pendulum, and we observed the system at two different times $t_0$ and $t_1$, we only need to know the angle that the pendulum rod subtended with the vertical to tell where the pendulum was at those times. 
	- So, the configuration space is just $Q= \{\theta \in S^1\} = S^1$. 
	- remember that we rely on two boundary values of $Q$ in Lagrangian dynamics, not the information about it's velocity. If did want to use the initial velocity of the system, then it becomes an initial value problem, which is handled by [[Hamiltonian Formalism]])
	- Example 2: if we had $n$ masses subject to gravity, then we just need to know the vector from some origin to each of those masses at times $t_0$ and $t_1$ to fully describe the configuration of the system
	- in this example, $Q=\left.\{(\vec{x}_1, \vec{x}_2, \ldots, \vec{x}_n) \ \right| \ \vec{x}_i \in \mathbb R^3, 1 \leq i \leq n\} \cong \mathbb R^{3n}$. 

### Smooth Manifolds
- A manifold is simply a shape whose local neighborhoods is homeomorphic to $\mathbb R^n$, where $n$ is the dimension of the manifold
	- A homeomorphism is simply a map between two sets, which are endowed with topologies, that is continuous and has continuous inverse. A special thing to note about homeomorphisms is that they preserve the topology of both domain and co-domain spaces
	- Note that this definition implies bijectivity!
- In our case, this is a *smooth* manifold, which means the local neighborhoods are *diffeomorphic* (smooth ($C^\infty$) homeomorphism) to $\mathbb R^n$.
- The configuration space, $Q$ has smoothness to it: $q\in Q$ can vary as much or as little within the configuration space, so we have smoothness with $\mathbb R^n$ for some $n$. 
- Since $Q$ is a smooth manifold, we immediately get the mathematics of differential topology carrying over: tangent spaces, tangent bundles, differential forms, and the whole deal!
- The velocity of the system is also embedded in the tangent space of the system
	- If the configuration of a system is $q \in Q$, then the velocity of the system at that configuration is $v = \dot q \in T_q(Q)$.  This means that at some configuration, the velocity that the configuration can take is basically any vector in $\mathbb R^n$!
	- more explicitly, there is a **path** (see below) on the manifold, and the time derivative of this path (velocity) is in $T_{\hat q(t)}Q$.

### Paths:
- A configuration is just an arbitrary state of the system. However, we want to solve for the *physical* evolution of the system: what the system actually does
- To do this, we introduce parameterizations of the configuration space: called paths. This path denotes how the system actually evolved over time. 
- In mathematical terms, $\hat q: \mathbb R \rightarrow Q, \hat q \in \mathcal P(Q)$. We also impose the boundary conditions to represent the state of the system at our different observed times: $\hat q(t_0)=a, \hat q(t_1)=b$.
- These are essentially parameterizations of the smooth manifold. 
[[General and Numerical Relativity]]\
[[4 Vectors and Einstein Summation Convention]]\
[[Tensors]]

10/22/25

I'm getting sick and tired of having to find an answer to the same question: "Why the hell are basis vectors placed with indices 'downstairs' while components are placed 'upstairs'?" Here is my attempt at an answer.
### Transforms on Vectors
- To understand this, let's first look at basis vectors. When we write 
$$
A^{\overset{\_}{\alpha}} = \boldsymbol{\Lambda}^{\overset{\_}{\alpha}}_\beta A^\beta
$$
(where $\boldsymbol{\Lambda}$ is the Lorentz transformation), this transformation only acts on the components of the vectors. It does not tell you how the basis vectors themselves transform (we can see this from the superscript on $A^\beta$)
- To ensure that the vector object is the same before and after the Lorentz transform, the basis vectors must transform opposite to the vector components: 
$$
\boldsymbol{e}_\alpha = \boldsymbol{\Lambda}^{\overset{\,\_}\beta}_\alpha \boldsymbol{e}_{\overset{\,\_}{\beta}}
$$
- Notice how the unbarred indices now go on the left hand side, whereas in the case of the vector components, they went on the left side. This is the KEY difference between the two equations (barred indices denote the transformed coordinate space)
- This is a substantial difference between ordinary linear transformations and these tensor transformations. Linear transformations alter the original vector, so the transformed vector is not the same as the original vector
### Connection to the Jacobian
- The Lorentz transformations are "Coordinate transformations": they are the Jacobians that is seen in Vector Calculus
	- So if you were to do a transformation from cartesian to polar coordinates in 2D, you might see the matrix 
$$
\begin{bmatrix}\partial_x r & \partial_y r \\ \partial_x \theta & \partial_y \theta \\ \end{bmatrix}
$$
- to denote the Jacobian (this is actually just the general derivative of the function $(x,y) \mapsto (\sqrt{x^2+y^2}, \arctan(y/x))$.
	- This transformation is applied when I want the components of a vector written in polar coordinates as opposed to cartesian coordinates
	- To think about this, you can just say to yourself "I want to know what happens to the $(r, \theta)$ coordinates if I alter the cartesian $(x,y)$ coordinates a little", which is exactly $\frac{\partial(r,\theta)}{\partial(x,y)}$. 
	- Alternatively, you can think about expressing the polar basis vectors in terms of cartesian coordinates: $$\begin{bmatrix}x \\ y\end{bmatrix}=J\begin{bmatrix}r \\ \theta\end{bmatrix}$$ where $J$ denotes an arbitrary matrix. The polar basis vectors *in polar coordinates* are just $(1,0)$ and $(0,1)$. So 
	$$
	\begin{bmatrix}x \\ y\end{bmatrix}=J\begin{bmatrix}1 \\ 0\end{bmatrix}.
	$$
- Since we want what the polar basis vectors in $(x,y)$ coordinates, $J$ must be 
$$
J=\frac{\partial(x,y)}{\partial(r,\theta)}.
$$
- Component transforms express the vector components in terms of the new basis!
- The inverse Lorentz transform corresponds to the inverse Jacobian. The bases vectors ***MUST*** follow this inverse Jacobian to ensure that the vector overall remains the same over both coordinate systems

### Jacobians and Indices
- It is because the bases vectors and the vector components transform inversely that the vector components and bases vectors are denoted in different indices. There is no special significance in keeping one up and the other one down: the main reason for doing this is to denote that they transform differently
- The general formula is given as 
$$
v^{\mu'}=\frac{\partial x^{\mu'}}{\partial x^{\mu}} v^{\mu}
$$
- and 
$$
\boldsymbol{e}_{\mu'}=\frac{\partial x_{\mu}}{\partial x_{\mu'}}\boldsymbol{e}_{\mu}.
$$
- Note: **Einstein Summation Convention Applies!!!** the dummy variables on the right are implicit sums. So in the case of "cartesian to polar", one should really write it like 
$$
v^{\mu'}=\sum_{\mu=1}^2 \frac{\partial x^{\mu'}}{\partial x^{\mu}} v^\mu
$$
[[General and Numerical Relativity]]\
[[4 Vectors and Einstein Summation Convention]]
###### Tensors form the backbone of general relativity.
- They are mathematical objects, and encapsulate many of the objects studied in linear algebra
- Their exact definition evades me as of Mar 6, 2025, but here is what I know so far
	- They are coordinate invariant: you can transform a tensor from coordinate system to another coordinate system. this will give the tensor different values, while still representing the same thing
	- think of what Dr. Hadani said: 
		- Let $V$ be a vector space, and $\vec{B}_1 = (b_1, b_2, \ldots, b_n)$ an ordered basis of $V$. Then every $v \in V$ can be written in terms of the ordered basis. We can transform this $v$ into an n-dimensional tuple using the coordinate transform $\varphi_1$. So $\varphi_1: V \rightarrow \mathbb{F}^n$. Whatever we get in $\mathbb{F}^n$ reads off the "coordinates" of $v \in V$.
		- we can apply a transformation onto $\vec{B}_1$ to get a different ordered basis $\vec{B}_2$, and we would need to use a different coordinate transform $\varphi_2$ to obtain the coordinate transform in terms of these ordered bases. However, the overall vector $v \in V$ remains just the same
			- this could be an incorrect or partial understanding, so please look into this
	- Similar to above, tensors are the same abstract objects, but can be hit with different coordinate transformations to get different "internal" values (like different components of the vector)

### Tensors as maps
- consider a function $f : \mathbb{R} \rightarrow \mathbb{R}$
- Consider the vector space $\mathbf{F}$ of all such such functions $f$
	- that is, $f \in \mathbf{F}$ (it is easy to show that this forms a vector space)
	- consider the function $v : \mathbf{F} \rightarrow \mathbb{R}$. this is a function that maps a function to a real number
	- now consider the space where $v$ belongs. call this $\mathbf{V}$. Define $v^*$ so that $v^* : \mathbf{V} \rightarrow \mathbb{R}$ (this $v^*$ is called a **functional**). 
	- now consider the space where $v^*$ belongs. Call this space $\mathbf{V}^*$. define $v^{**}$ so that $v^{**} : \mathbf{V}^* \rightarrow \mathbb{R}$.
	- let $v^{**} \in \mathbf{V}^{**}$
		- it may seem like we will repeat this process forever
		- however, we actually stop at this step, because $\mathbf{V}^{**}$ and $\mathbf{V}$ are isomorphic. That is, $\mathbf{V} \cong \mathbf{V}^{**}$
		- so in a sense, $v \in \mathbf{V}$ means $v: \mathbf{V^*} \rightarrow \mathbb{R}$. 
			- this $v$ is called a vector, while $v^*$ is called the dual vector or covector
	- we call $v$ a rank $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ tensor and $v^*$ a rank $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ tensor. 
		- so a vector that takes an input a covector (or a function in $\mathbf{F}$) from the dual space and sends it to $\mathbb{F}$ (or $\mathbb{R}$) has rank $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, while a vector that takes an "ordinary" vector space to the $\mathbb{F}$ is a rank $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ tensor

### Multilinear Algebra
- In more mathematically rigorous language, a tensor is a multilinear form that maps both vectors and covectors to real numbers. 
- Consider a vector space $V$ (if you want, you can think of this vector space as being the tangent space at a point on some manifold). 
	- This $V$ admits a $V^*$, a dual space on $V$.
- a rank $(r,s)$ tensor is a map $\boldsymbol T$ such that 
$$
\boldsymbol T: \underbrace{V \otimes V \otimes \ldots \otimes V }_{s\text{ inputs}} \otimes \underbrace{V^* \otimes V^* \otimes \ldots \otimes V^*}_{r \text{ inputs}} \rightarrow \mathbb R \text{ or } \mathbb C
$$
- This map $\boldsymbol T$ is linear in each of it's arguments *while the others are fixed*: it satisfies the "Linear transformation" definition in each of its arguments
- We define the components of a tensor as what would happen if we inputted basis and dual basis vectors. 
	- this definition makes it clear that even though the tensor components themselves are basis dependent, the tensor is basis *independent*, which is required in GR!!
	- so if I have a rank $(1,2)$ tensor $\Gamma^\mu_{\nu\omicron}: V \otimes V \otimes V^*$, it's $(1,2,3)$ component is $\Gamma^{\mu}_{\nu\omicron} \vec{e}_1 \vec{e}_2 \tilde{\theta^3}$, where $\theta^\nu$ are elements of the dual basis

### Index Notation of Tensors
- In connection to [[4 Vectors and Einstein Summation Convention]], tensors are written (by Weyl's "orgy") as indices
- Representing a tensor is done so with indices:
	- for example, the tensor $$\mathbf{T}^{\alpha \beta \gamma}_{\delta \xi}$$ is a rank $\begin{pmatrix} 3 \\ 2\end{pmatrix}$ tensor. 
		- remember what this means from above. this means that it takes 3 covectors as inputs, as well as 2 vectors, and sends them all to a field $\mathbb{F}$
		- the indices refer to components of the tensor
- you can write this as $$\sum_{\alpha, \beta, \gamma, \delta, \xi} \mathbf{T}^{\alpha \beta \gamma}_{\delta \xi} \, \omega_\alpha \, \omega_\beta \, v^\delta$$
- however, note that ^ doesn't have all the inputs that it needs to send the vectors to $\mathbb{F}$. Instead, because it only has some of the necessary inputs, the output of the above operation will itself be a tensor, based on the number of covectors and vectors given
	- in this case, the output will be a rank $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ tensor, because you have 2 co-vector inputs and 1 vector input, so the rank is  $\begin{pmatrix} 3-2 \\ 2-1\end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ so it is valid to write $$\mathbf{B}_{\xi}^\gamma=\mathbf{T}^{\alpha \beta \gamma}_{\delta \xi} \, \omega_\alpha \, \omega_\beta \, \nu^{\delta}$$
	- see [[4 Vectors and Einstein Summation Convention]], [[Index Notation]] for a more detailed take on indices

### Examples
- The metric tensor $\boldsymbol g$ is a rank $(0,2)$ tensor. An example is the Minkowski metric: $$\eta_{\alpha \beta}A^\alpha B^\beta := \vec{A} \cdot \vec{B}$$
	- although this looks like it acts on vector components, it really acts on vectors themselves. the machinery behind it is being hidden
	- Dual vectors are a rank $(0,1)$ tensor. They are particularly interesting because they provide a way of "slicing" the space that you are currently in!
- The Lorentz transform is a rank $(1,1)$ tensor
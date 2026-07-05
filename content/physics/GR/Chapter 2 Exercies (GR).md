---
title: "Chapter 2 Excises for Bernard Schutz: First Course in GR"
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### Problem 2.11
- Let $\bf{\Lambda_{\beta}^{\overline \alpha}}$ be the matrix of the Lorentz transform from $\mathcal O$ to $\mathcal{\overline O}$, and let $\vec{A}$ be an arbitrary vector with components $\vec{A} \rightarrow (A^{0}, A^{1}, A^{2}, A^{3})$ in frame $\mathcal O$.
### Solution
- First, we note that the Lorentz transform for a velocity boost is given as 
$$
	\bf{\Lambda}_{\beta}^{\overline{\alpha}}=\begin{pmatrix}
	\gamma & -\gamma v & 0 & 0 \\
	-\gamma v & \gamma  & 0 & 0 \\
	0 & 0 & 1 & 0  \\
	0 & 0 & 0 & 1
	\end{pmatrix}
$$
- Therefore, the Inverse Lorentz transformation, which encodes how basis vectors transform is given as 
  $$
  	\boldsymbol{\Lambda}_{\overline{\mu}}^{\nu} = \begin{pmatrix}
	\gamma & \gamma v & 0 & 0 \\
	\gamma v & \gamma & 0 & 0 \\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 1
	\end{pmatrix}
  $$
- i.e. it is the Lorentz transfor with velocity boost $-v$.
- We apply the Lorentz transform on $\vec{A}$ to get the vector $\vec{A}$ in $\mathcal{\overline O}$: 
$$
\begin{align}
  A^{\overline{\alpha}} & =\boldsymbol{\Lambda}_{\beta}^{\overline{\alpha}}A^{\beta}  \\
  A^{\overline{\alpha}}  & = \begin{pmatrix}
	\gamma & -\gamma v & 0 & 0 \\
	-\gamma v & \gamma  & 0 & 0 \\
	0 & 0 & 1 & 0  \\
	0 & 0 & 0 & 1
	\end{pmatrix}A^{\beta}  \\
	A^{\overline{\alpha}} & = \begin{pmatrix}
	\gamma A^{0} -\gamma v A^{1} \\
	-\gamma vA^{0}+\gamma A^{1} \\
	A^{2} \\
	A^{3} 
	\end{pmatrix}
\end{align}
$$
- We look for the product of two Lorentz transforms: 
  $$
	\begin{align} 
	 \boldsymbol{\Lambda}^{\overline \nu}_{\beta}(v)\boldsymbol{\Lambda}^{\alpha}_{\overline \nu}(-v) &= \begin{pmatrix}
	\gamma & -\gamma v & 0 & 0 \\
	-\gamma v & \gamma & 0 & 0 \\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 1
	\end{pmatrix} \begin{pmatrix}
	\gamma  & \gamma v & 0 & 0 \\
	\gamma v & \gamma & 0 & 0 \\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 1
	\end{pmatrix} \\
	\end{align}
  $$
- Since $\boldsymbol{\Lambda}_{\beta}^{\overline \nu}(v)\boldsymbol{\Lambda}_{\overline \nu}^{\alpha}(-v)=\boldsymbol{\Lambda}_{\overline \nu}^{\alpha}(-v)\boldsymbol{\Lambda}^{\overline \nu}_{\beta}(v)$, (they are both just scalars) we exchange the order
- the free index is in the subscript for the first tensor and the superscript for the second tensor
- since the dummy index is what we sum over, we fix the $\beta$ column in the first tensor, and we fix the $\alpha$ row in the second tensor
- for $\beta=\alpha=0$, we have that 
$$
\begin{align}
  \boldsymbol{\Lambda}^{0}_{\overline \nu}(v) \boldsymbol{\Lambda}^{\overline \nu}_{0}(-v)&= \begin{pmatrix}
	\gamma  & \gamma v  & 0 & 0
	\end{pmatrix} \cdot \begin{pmatrix}
	\gamma \\
	-\gamma v  \\
	0  \\
	0
	\end{pmatrix} \\
	&= \gamma^2 -\gamma^2v^2 = \gamma^2(1-v^2) \\
	&=1
\end{align}
$$
- We continue this process: set $\alpha=1, \beta=0$ to get the following:
$$
\begin{align}
   \boldsymbol{\Lambda}_{\overline \nu}^1(-v) \boldsymbol{\Lambda}_{0}^{\overline \nu}(v)&= \begin{pmatrix}
   \gamma v  & \gamma  & 0 & 0
   \end{pmatrix} \cdot \begin{pmatrix}
   \gamma  \\
   -\gamma v  \\
   0 \\
   0
   \end{pmatrix} \\
   & = \gamma^2v-\gamma^2v=0
\end{align}
$$
- Set $\alpha=2, \beta=1$:
$$
\begin{align}
	\boldsymbol{\Lambda}^{2}_{\overline \nu}(-v) \boldsymbol{\Lambda}_{1}^{\overline \nu}(v)&=\begin{pmatrix}
	0 & 0 & 1 & 0
	\end{pmatrix} \cdot \begin{pmatrix}
	-\gamma v  \\
	\gamma \\
	0 \\
	0
	\end{pmatrix} \\
	&= 0
\end{align}
$$
- We repeat this process to recover the Kronecker Delta tensor
- This makes sense conceptually: one is a Lorentz boost of $+v$, while the other is a Lorentz boost of $-v$, and corresponds to how the basis changes in a Lorentz boost of $+v$. they both must undo each other to produce the identity map if they were to preserve vectors

### Problem 2.13
- Consider three observers $\mathcal{O}, \overset{-}{\mathcal{O}}$ and $\overset{\_}{\overset{\_}{\mathcal{O}}}$  defined so that their origins coincide. Suppose $\overset{-}{\mathcal{O}}$ moves with velocity $\boldsymbol{v}$ relative to $\mathcal{O}$ and suppose $\overset{\overset{\_}{\_}}{\mathcal{O}}$ moves with velocity $\boldsymbol{v}'$ relative to $\overset{-}{\mathcal{O}}$.
- Part a): 
	- Consider a vector 
		$$
			\vec{A} \xrightarrow[\mathcal{O}]{} (A^{0}, A^{1}, A^{2}, A^{3})
		$$
	- In the frame of $\overset{\_}{\mathcal{O}}$, this would be 
		$$
			A^{\overset{\_}{\alpha}}=\boldsymbol{\Lambda}^{\alpha'}_{\beta}(\boldsymbol{v}) A^{\beta}
		$$
	- (I dropped the _ because it is too annoying to write)
	- In the frame of $\mathcal{O}''$, this is
		$$
			A^{\alpha''}=\boldsymbol{\Lambda}^{\alpha''}_{\alpha'}\boldsymbol{\Lambda}^{\alpha'}_{\beta}A^{\beta}
		$$
	- Relabelling indices, we indeed find that the Lorentz transform from $\mathcal{O}$ to $\mathcal{O}''$ is 
		$$
			\boldsymbol{\Lambda}^{\alpha''}_{\mu}=\boldsymbol{\Lambda}^{\alpha''}_{\gamma'} \boldsymbol{\Lambda}^{\gamma'}_{\mu}
		$$
- Part b) The upper index of the Lorentz transform denotes summing over a column. therefore, the above equation tells us to fix a specific row and column of the lorentz matrix $\boldsymbol{\Lambda}^{\alpha''}_{\mu}$. then the way you go about calculating the value of this entry is by summing the $\alpha''$ row and the $\mu$ column, which is precisely how matrix multiplication is used to define the entries of the product matrix
- Part c) # TODO!!

### Problem 2.14
- a)
	- This is clearly a boost in the $z$-direction
	- so we have that $\gamma=1.25$ and $-\gamma v=0.75$ for $v$ in the z-direction
	- This is a system of equations:
		$$
			\begin{align}
			\frac{1}{\sqrt{ 1-v^2 }} & =1.25 \\
			\frac{-v}{\sqrt{ 1-v^2 }} &= 0.75 \\
			\implies -v \cdot 1.25  & = 0.75 \\
			v&=-0.6
			\end{align}
		$$
	- This also tells you
		$$
			\gamma=\frac{1}{\sqrt{ 1-v^2 }}=1.25
		$$
### Problem 2.15
- a) 
	- We start with the four velocity in its own MCRF: $\vec{U}=\vec{e}_{0}'$
	- We want to find its components in the $\mathcal{O}$ reference frame using the Lorentz transform
		- Since we are writing the *vector components* in the $\mathcal{O}$ frame from the $\mathcal{O}'$ frame, we perform an *inverse* Lorentz transform
		- We are NOT trying to find what the basis vector $\vec{e}_{0}$ in the $\mathcal{O}$ frame! so don't get confused about the correct Lorentzian transformation to apply
	- So we write
		$$
			\begin{align*}
			U^\alpha &= \boldsymbol{\Lambda}^{\alpha}_{\beta'}(-v)\,U^{\beta'} \\
			U^{\alpha}&=\boldsymbol{\Lambda}^{\alpha}_{0}(-v)\,U^{0}\\
			\end{align*}
		$$
	- from above, we essentially see that the four-velocity in $\mathcal{O}$ just picks out the 1st column of the inverse Lorentz matrix. this makes sense since $\vec{U}$ is just the basis vector with 1 in its first entry and 0 elsewhere
	- therefore
		$$
			\vec{U} \xrightarrow[\mathcal{O}]{} \begin{pmatrix}
			\gamma \\
			\gamma v \\
			0 \\
			0
			\end{pmatrix}
		$$
		- the negative sign in the second entry drops because $-\gamma(-v)=\gamma v$
- b)
	- Suppose a particle has three-velocity $\boldsymbol{v}$ as seen by observer $\mathcal{O}$. We write $\boldsymbol{v}=(v_{x}, v_{y}, v_{z})$ as seen by $\mathcal{O}$. we first note that $\gamma=\frac{1}{\sqrt{ 1-|\boldsymbol{v}|^2 }}$
	- this means that the forward and inverse Lorentz transforms look like 
		$$
			\boldsymbol{\Lambda}^{\alpha'}_{\beta}=\begin{pmatrix}
			\gamma & -\gamma v_{x} & -\gamma v_{y} & -\gamma v_{z} \\
			
			\end{pmatrix}
		$$
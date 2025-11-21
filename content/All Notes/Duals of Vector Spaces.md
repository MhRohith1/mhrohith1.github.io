[[Abstract vector spaces]]
[[DRP - Theoretical Minimum]]

#### The dual of a vector:
- The dual of a vector in 'ket' notation is written as a 'bra' vector
- if $\ket{a} = \begin{pmatrix} \alpha_1 \\ \alpha_2 \end{pmatrix}$, then $\bra{a} = \begin{pmatrix}\alpha_1^* & \alpha_2^* \end{pmatrix}$, where $\alpha_1^*$ denotes complex conjugate.
	- This assumes that the vectors live in the complex vector space
	- Note that $\bra{a}$ and $\ket{a}$ do not live in the same vector space.

#### Rules for Dual vectors:
- Dual Vectors follow these rules:
	- the dual of $\ket{a} + \ket{b}$ is $\bra{a} + \bra{b}$
	- The dual of $z \ \ket{a}$ is $z^* \ \bra{a}$

#### The Inner Product
- The inner product of two vectors is defined as $\braket{a|b}$
	- means inner product of $\bra{a}$ and $\ket{b}$
- defined as $\braket{a|b} = \alpha_1^* \beta_1 + \alpha_2^* \beta_2$
	- special properties: $\braket{a|a} = \alpha_1^* \alpha_1 + \alpha_2^* \alpha_2 \in \mathbb{R}^+$ 
	- this gives the length of the complex vector $a$ (defined as the square root of the inner product)
	- if the inner product is 0, the vectors are said to be orthogonal 

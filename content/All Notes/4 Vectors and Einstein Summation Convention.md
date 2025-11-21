[[General and Numerical Relativity]]
[[Tensors]]
[[Index Notation]]
### What is the 4 vector:
- Very simple!
- The 4 vector is just the vector or tuple used to denote the spacetime coordinates of an event
- Denoted as $\Delta \vec{x}$ 
	- not to be confused with just $\Delta x$

### Important note about Schutz's convention:
- Schutz uses $c=1$, with no dimensions for $c$. He also defines the four vector so that the 0th coordinate, denoted $\Delta t$, also has units of meters!
	- Schutz states "One meter of time is the time it takes light to travel one meter"

Suppose you had the 4 vector
$$\Delta \vec{x} \xrightarrow[\mathcal{O}]{} (\Delta t, \Delta x, \Delta y, \Delta z)$$
This is a 4-vector in the coordinates of $\mathcal{O}$. If we wanted to transform this to the coordinates of $\overset{-}{\mathcal{O}}$ then we have the Lorentz transform

$$\Delta \vec{x} \xrightarrow[\overset{-}{\mathcal{O}}]{} \begin{bmatrix} \gamma & -\gamma v & 0  & 0 \\ -\gamma v & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0  & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} \Delta t \\ \Delta x \\ \Delta y \\ \Delta z\end{bmatrix}$$
If we write out the expression for $\Delta t'$, we have $$\Delta x^{\overset{-}{0}} = \sum_{\beta =0}^{3} \Lambda^{\overset{-}{0}}_{\beta}\Delta x^{\beta}$$
where superscript denotes row of the matrix and subscript denotes column. note that for the 4-vector, the index will always be referred to in the superscript.

This allows us to use the Einstein Summation Convention, removing the sum and making it implicit:
$$\Delta x^{\overset{-}{0}} = \Lambda^{\overset{-}{0}}_{\beta}\Delta x^{\beta}$$
or, over all possible coordinates, as $$\Delta x^{\overset{-}{\alpha}} = \Lambda^{\overset{-}{\alpha}}_{\beta}\Delta x^{\beta}$$
It's important to note that vector components will **ALWAYS** be superscripted, while bases vectors will **ALWAYS** be subscripted. This is in connection to [[Tensors]], [[Index Notation]], where a superscripted index denotes a vector, while subscripted denotes dual vectors. This is a convention that is adopted to work with more advanced tensors. So when we write 
$$A^{\overset{-}{0}}=\Lambda^{\overset{-}{0}}_\beta A^\beta$$
the Lorentz transform acts only on the *components* of the vector $A$, not on the whole vector itself. 


- the $\alpha$ is called a free-index, and $\beta$ a dummy index
	- $\beta$ is called dummy because it is the index over which the sum is being done (think of the dummy variable in an integral)
	- $\alpha$ is called free because it denotes the structure of the answer. in this case, because $\alpha$ appears in the final expression in the superscript, it tells us that the result of carrying through with the sum (also called a contraction) is a vector
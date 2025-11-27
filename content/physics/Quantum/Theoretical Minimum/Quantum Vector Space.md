[[DRP - Theoretical Minimum]]
[[Quantum Dual Space]]

### What is a vector?
- A vector is something that can be written using Dirac notation $\ket{\ a \ }$
	- This is not at all related to vectors in space that “point”
- These vectors live in vector spaces.
	- Does not help to think of these as things that point!
- This is just some abstract mathematical “thing” like “numbers”
- These vectors (called "ket" vectors) can be expressed as a column
	- $\ket{\ a\ } = \pmatrix{\alpha_1 \\ \alpha_2 }$ 
- Each of these 'ket' vectors have "dual vectors"  or "conjugate vectors" called "bra vectors", written as $\bra{\ a \ }$
#### What is a vector space?
- A vector space is a set of all vectors that follow certain rules
	- Rule 1: $\ket{\ a \ } + \ket{\ b\ } = \ket{\ c\ }$ 
		- that is: if two vectors are in the same vector space, they must add to another vector in the same vector space
	- Rule 2: $z \ \ket{\ a\ } = \ket{\ a'\ }$
		- that is: a number can be multiplied by a vector to get a scaled version of that vector
		- again: these vectors don't point!!
		- if $z \in \mathbb{R}$, then the vector space is a "real vector space"
			- this means that if multiplying $\ket{a}$ by a complex number doesn't give a new vector in the same vector space, $\ket{a}$ lives in a real vector space
		- if $z \in \mathbb{C}$, then the vector space is a "complex vector space"
	- Rule 3: There must be a vector that is defined as a “0” vector

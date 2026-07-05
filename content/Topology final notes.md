### Topologies
- Make sure you understand finer and coarser topologies
	- for example, take $\mathbb{R}_{\ell}$ the real-line with the lower limit topology
	- How does this compare to the real-line with the standard-topology?
	- the basis elements of $\mathbb{R}_{\ell}$ are given as 
		$$
			\mathcal{B}_{\ell} = \{ [a, b) \subset \mathbb{R} : a, \, b \in \mathbb{R} \}
		$$
	- while the basis elements of $\mathbb{R}$ with the standard top are
		$$
			\mathcal{B} = \{ (a, b) \subset \mathbb{R}: a, \, b \in \mathbb{R} \}
		$$
	- For some basis element $[a, b) \in \mathcal{B}_{\ell}$, the basis element $(a-1, b) \in \mathcal{B}$ satisfies
		$$
			[a, b) \subset (a-1, b)
		$$
	- this means that $\tau \subset \tau_{\ell}$!
		- notice the reversal of the direction!
		- if the topology admits a finer basis, which is what is meant by $[a, b) \subset (a-1,b)$, then the overall topology must itself be finer i.e. $\tau \subset \tau_{\ell}$.
	- However, there is no basis element $[a,b)$
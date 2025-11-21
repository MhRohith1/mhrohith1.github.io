[[General and Numerical Relativity]]

This file is all about the power method of extrapolating waveforms to infinity, and about how Mayawaves does it

### What is the power method?

### Implementation in Mayawaves:
- the implementation in Mayawaves use $\Psi_4$ to retrieve the strain.
- First, the $\Psi_4$ at a certain radius is extracted using the `radiationbundle` object. This is the pure $\Psi_4$ that is in the simulation
	- This $\Psi_4$ is actually in "real time"
- Next, the $\Psi_4$ is converted to tortoise time. the real and complex parts of the strain are multiplied by the radius of the worldtube (why???)
- Then, the strain is obtained from $\Psi_4$ using the `convert_psi4_to_strain` function, and the amplitude and phase are stored in individual lists
- The above is done for all the different radii
- 
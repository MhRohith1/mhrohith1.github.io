[[General and Numerical Relativity]]
[[Strain]]
### What is the Weyl Tensor
- Describes the force that an object experiences when moving on a curved manifold
- Governs the propgation of gravitational waves through free space
	- This is space that is far enough away from the merger event that you can ignore the effect the masses themselves would have on space time and focus on the waves themselves
- Can be re-written in the "null-tetrad basis"
	- This is part of the Newman Penrose Formalism of the Weyl Tensor
	- This rewriting expresses the tensor as 5 scalars: $\psi_0, \psi_1, \psi_2, \psi_3, \psi_4$
	- Here, $\psi_4$ or $\Psi_4$ describes the rate of change of the strain with respect to time
	- This tells us how the gravitational waves pass through regions of space
	- $\psi_4 = \frac{\partial^2}{\partial t^2}(h_+ - ih_\times)$
		- $h_+$ and $h_\times$ describes the strain of the gravitational wave

### Extrapolation
- $\psi_4$ is what is evolved and calculated by the simulation 
	- the most pure thing that you can analyze from a simulation is this $\psi_4$
- This $\psi_4$ is then manipulated and evolved over time as a part of post-processing
	- strain is something that comes about as a result of $\psi_4$, not the other way around

### Analyzing $\Psi_4$
- ![[Pasted image 20241211213840.png]]
- Sample $\Psi_4$ graph of a simulation
- The real component is given in blue, imaginary in orange
- We can see that as time passes, the gravitational waves get more intense, and that the merger event happens at around $t/M \approx 1500$ 
	- After this, the waves undergo a ringdown affect
	- 
### References:
- https://en.wikipedia.org/wiki/Weyl_tensor
- ChatGPT
- 
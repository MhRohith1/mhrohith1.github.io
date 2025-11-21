[[General and Numerical Relativity]]

### What is a Gauge?
- A gauge is a choice of coordinates that can be made in General Relativity
	- Since spacetime does not depend on the coordinates we impose on it, we can impose a coordinate scheme that is useful to us
- More specifically, they **foliate** the simulation grid
	- Spacetime is a 4D manifold $(t,x,y,z)$
	- To **foliate** is to provide a way to slice the 4D space time into a "stack" of 3D hypersufaces
	- Some schema for foliation lead to stable simulations while other don't.
##### Lapse and Shift:
- **Lapse ($\alpha$)**: Think of lapse as literally "time-lapse"; it sets and controls how space time is foliated in terms of the $\Delta t$ between each spatial hypersurface
- **Shift ($\beta_i$)**: This controls how the spatial coordinates change with each of the spatial hypersurfaces - i.e governs the evolution of space
- A choice of gauge decides how spacetime is foliated and how spatial coordinates change between slices i.e. a choice of gauge is choice for $\alpha$ and $\beta_i$.
### Connection to what Maya/ETK/SXS does:
- Maya (the UT CGP cactus) is built on top of the ETK cactus
- Despite so, they have modified some of the gauges to better collect data that they deem relavent to them
	- Specifically, they use the TwoPunctures thorn (moving puncture gauge ), which sets up the Gauges in such a way that the singularities remain hidden
	- This allows the group to get things that they want to get more easily
- However, this makes it more difficult to do Maya simulations on ETK Cactus as different gauges are used.


### Why care about Gauge?
- As mentioned before, Gauge determines how the evolution of the spacetime is carried out in the simulation
	- This involves the previously mentioned lapse and shift
- Gauge is important because it determines how things like $\Psi_4$, $h_{+}$, $h_{\times}$ among other physical quantities are extracted

### References:
- ChatGPT
- [Improved Moving Punctures Gauge](https://arxiv.org/pdf/1404.6523)
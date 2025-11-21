[[Regimes, Waveforms & Approximations]]
[[NRHybSur3dq8]]
[[General and Numerical Relativity]]
### Motivation: 
- NR is computationally highly accurate but extremely time expensive 
- we want some sort of way to obtain models that are good but quick
	- in this field, there are many data-driven algorithms that can guess what waveforms should look like provided some parameters regarding the system
- in the current landscape, NR is mostly used for getting waveforms near merger
	- 20-ish orbits before merger are simulated and the rest of the data like merger and ringdown are approximated
- the data before the collision are approximated using certain formalisms. the one that i have to focus on now is the EOB (effective one-body) approximations and fitting that to Hector's hybridization scheme

### Key terms:

| Keywords                   | Definitions                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Parameter space            | The space of parameters over which the model is defined (a range of mass ratios, spins, eccentricities and so on)            |
| $q$                        | Mass ratios between the black holes; $q \geq 1$                                                                              |
| $\chi$                     | The spin of the black hole                                                                                                   |
| Hybridization of Waveforms | Stitching together waveforms there were computed using different methods while ensuring that they match                      |
| Surrogate Model            | A model that approximates hybrid waveforms based on certain training data, supplied by NR waveforms, over certain parameters |

### Surrogate models:
- Surrogate models train on NR waveforms
	- these NR waveforms simulate only 20 orbits before merger
	- this is not sufficient for the data that LIGO gathers
- How do they work?
	- first, get a parameter space that you are interested in, so for example $q \in [1,8]$ and $\chi_1, \chi_2 \leq 0.8$.
	- obtain some NR waveforms within this parameter space (this will only have some waveforms, so for example you might have $q\in\{4,4.5,5, 5.5\}$ waveforms with spins $(\chi_1, \chi_2) \in \{(0.2,0.2),(0.2,0.3),(0.3,0.3),(0.4,0.5)\}$ 
	- interpolate these waveforms
		- What this means is to use data-driven techniques (not necessarily ML, just other data-driven techniques) to train the model to predict waveforms for parameters that are not in the NR waveforms
	- this creates a surrogate model for the given parameter space
	- these models are good for the part of the collisions that are actually simulated by NR
		- 20 orbits before merger
		- so we need some other model that works for the parts before 20 orbits before merger
- There are many such surrogate models. the model discussed in this paper is a 3d model (it takes 3 parameters)
	- as a result, they do not take into account for precession, but allows them to push $q$ to $q \leq 8$.

References: https://arxiv.org/pdf/1812.07865

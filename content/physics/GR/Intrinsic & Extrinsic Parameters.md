[[General and Numerical Relativity]]\
[[NRHybSur3dq8]]\
[[Regimes, Waveforms & Approximations]]

## The strain equation
- The general strain equation is given by 
$$
h(t;\iota, \phi_c, \psi)=\sum_{\ell=-2}^{\infty}\sum_{m=-\ell}^{\ell}{h_{\ell m}(t) \ _{-2}Y_{\ell m}(\iota, \phi_c) \ e^{-2i\psi}}
$$
### Strain equation for modes:
- For each individual $(\ell, m)$ mode, the strain is given by 
$$
h_{\ell m}=h_{\ell m}^+-ih_{\ell m}^{\times}
$$
### What are these parameters?
- like how a function takes certain inputs and produces an output depending on those inputs, the BH-BH collision will produce different waveforms based on the inputs given to the simulation
- These parameters are divided into two: intrinsic and extrinsic
###### Intrinsic
- inherent to the system and not dependent on the observer
- $m_1, m_2:$ mass of the first (second) black hole(s)
- $q:$ the relative mass ratio of the two black holes and $q \geq 1$
- $\chi_1$: the spin of the more massive blackhole
- $\chi_2$: the spin of the less massive blackhole
	- these spins have three dimensions to them: $\chi_{1,x}, \chi_{1,y} \ldots \chi_{2,z}$
	- specifically, $\chi$ is a 3D vector referring to an individual black hole's angular momentum
	- note $\chi \in [0,1)$ because the extremal Kerr Limit for spins is 1 (if $\chi$ > 1 then the black hole has no event horizon)
	- another note is that the system's angular momentum is what determines the z-axis, which is relevant for extrinsic parameters
- Eccentricity $e:$ a description of elliptic/eccentric the orbits of the black holes are
	- usually, $e$ is restricted to $e \in [0,0.2]$, with many models (like [[NRHybSur3dq8]]) requiring $e \approx 0$.
###### Extrinsic
- Luminosity distance $D_L$: how far away the source is 
	- like $r$ in a spherical coordinate system
	- units of mega-parsecs (Mpc)
	- one Mpc is $3.8 \times 10^{22} \ m$
- Inclination angle $\iota :$ the angle between the line of sight of the detector and the spin of the binary BH system
	- think of the angular momentum vector of the system as the z-axis in a 3D coordinate space
	- then if the detector is a point in 3D space, then $\iota$ is like the polar angle $\theta$ between the point and the origin
	- $\iota \in [0,\pi]$
- $\psi:$ 
- orbital phase at coalescence $\phi_c:$
- $f_{min}:$ this determines the separation distance between the two black holes
	- the black holes are set up in a point where when the simulation is started, the orbital frequency is what set $f_{min}$ to be
- $f_{max}:$ The maximum frequency at the end point of the simulation
	- this is usually not accounted for in time domain waveforms
- 
###### Conditioning:
- used for post-processing and frequency domain generations of the waveform
- Parameters:
	- ```condition```
	- $\Delta f$: 
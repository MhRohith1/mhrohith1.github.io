[[General and Numerical Relativity]]
[[Intrinsic & Extrinsic Parameters]]

This is related and relevant to the project that I will be working on this summer
- NR (numerical relativity) is useful when we are close to inspiral and merger
- In this case, all we would need to do is simulate the $\Psi_4$ scalar for 10-20 revolutions before merger (?) and this is enough for us to get all the data we need to extrapolate $h$ to $\mathcal{J}^+$
- however, we cannot do this for when the blackholes are far away

How do we treat it here?
- if the black holes are far away, it takes a long time for them to come to the point where NR becomes useful
- NR is still accurate for when the BH are far away, but it would take too long and is unnecessary for this case, as there exist other methods (Post-Newtonian Formalism, among others) to accurately model this scenario
	- if they are far away, you can take the black holes to be point masses (schwarzschild)
- having highly unequal mass ratios also makes it interesting with NR, and a different methodology is used before the NR takes over
- the frequency $f$ of the waveform $h(t)$ varies inversely with the total mass of the system
	- $$f\propto\frac{1}{M}$$
	- you can perform a fourier transform of $h(t)$ and that will give you the curve in frequency space (like $C(k)$ from PHY 315)
		- See [[LIGO Band]]
### My role:
- my role is to extend the computational domain of the wave forms and be able to stitch it together with what NR and LSF generates.
	- LSG is something that Hector worked on and is writing a paper about, and it is useful for approximating waveforms (before NR takes over) on highly uneven mass ratios of black holes
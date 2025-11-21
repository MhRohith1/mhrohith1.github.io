[[Weyl Tensor and Scalar]]

One of the main functionalities of Maywaves is to extrapolate the $\psi_4$ data of a simulation from the simulation files

#### Functions:
- `psi4_real_imag_for_mode`:
	- takes `l=2` and `m=2` parameters and an extrapolation radius, and returns the $\psi_4$ scalar for that radius
	- returns the real and imaginary components of the waveform seperately
	- Has two helper functions: `get_psi4_real_for_mode` and `get_psi4_imag_for_mode`
- `psi4_amp_phase_for_mode`:
	- similar to `psi4_real_imag_for_mode`
	- gets the amplitude and phase of the waveform
- `extrapolate_psi4_to_infinite_radius`:
	- doesn't return anything??? will need to ask Dr. Shoemaker about this

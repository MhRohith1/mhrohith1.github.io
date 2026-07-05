---
title: Capacitively Coupled Plasmas and how they are modeled
draft: "false"
description: Description of page. Useful for navigating between links
date: Jun 24, 2026
---
### Introduction
- We use Particle-in-cell methods to model the plasma as opposed to fluid methods
	- In our case, particle in cell is better because we are interested in modeling individual particles as opposed to bulk methods: etching / deposition is a particle-by-particle process
	- This doesn't mean we model EVERY particle, but we introduce bulk particles that are used to model many particles at once (see [V. Vahedi et. al](https://iopscience.iop.org/article/10.1088/0963-0252/2/4/006/pdf))
- Since this is a low pressure system, the electrons have longer mean free paths and don't behave in a bulk manner
	- This is the main driving factor behind our choice of PIC methods 

### Pressure, Voltage and Uniformity
- Based on [S. Rauf](https://iopscience.iop.org/article/10.1088/1361-6595/abac4a/pdf), increasing the pressure to upwards of 100 mTorr caused the ion and electron density to peak at the electrode edges, while decreasing the pressure caused the ion and electron density to peak towards the center
	- the paper here used a cylindrical electrode as opposed to a rectangular / cartesian electrode

### Monte Carlo Collisions
- Based on [V. Vahedi et. al](https://iopscience.iop.org/article/10.1088/0963-0252/2/4/006/pdf
- ##### Background:
	- PIC is the process that tracks the particles -- collisions of the particles are done using something called "monte carlo collisions"
	- **Definitions**
		- Stochastic Electron Heating: when electrons absorb energies from the electric field (this process is usually not simple and requires intense fields)
		- [Ramsauer effect](https://en.wikipedia.org/wiki/Ramsauer%E2%80%93Townsend_effect): The scattering of low energy electrons via a noble gas. This is a quantum mechanical effect and probabilities are involved
		- Ramsauer Minimum: the minimum probability of low energy electrons scattering from a noble gas. 
	- Experiment showed that argon-RF plasma chambers had very low electron energy than expected due to high-energy electrons being lost to the plasma walls (or losing their energy via collisions)
		- Since the theory deviated from experiment, people wanted new ways to model these collisions
	- PIC codes are good at modeling electron interactions with EM fields and electron-ion collisions, but we need something for charged-neutral particle collisions
		- it is not being able to model these collisions that we saw deviation from theory and experiment in the Argon-RF plasmas
- ##### Monte Carlo
	- "In conventional Monte Carlo schemes, the time or distance between collisions for each particle is calculated using random numbers. This procedure allows for efficient algorithms,especially when the null collision method is also used"
		- collisions are a random process, and how long an electron takes to collide (or how far it travels before colliding) is based on some distribution
		- since we can only model the behavior of a system of electrons (the distribution) and not the individual electrons themselves, random numbers are a good way to mimic reality in the simulation
	- However, conventional monte carlo is incompatible with PIC
		- In PIC, the particles are evolved in a uniform time-step, and there is no way to choose random times
- Another reference: [This is a good article!](https://watermark02.silverchair.com/181101_1_5.0003114.pdf) 
	- 
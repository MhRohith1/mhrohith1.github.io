---
title: Multi-layered Perceptrons and Deep Learning
draft: "false"
description: What is deep learning? what is activation? how do weights work?
date:
---
### The problem:
- Suppose we wanted to predict whether an NBA player is going to win the MVP this season or not
- In this problem, we have *many* different input features: PPG, APG, RPG, Team wins, BPM, OBPM, DBPM, "notoriety" and so on
- We might attempt to use these features alone to predict the probability that someone will win the MVP
### Addressing the MVP
- However, it might be better to use these stats to (essentially feature engineer) make some other metrics that might be better for predicting the MVP candidate
	- this could be something like perceived impact on the floor, impact per winning (Win shares per 48) and other metrics
	- This can then be repeated, with as many stats as needed!
- This is not called feature engineering, but is actually **deep learning**! 

### Notation:
- the input layer is called $a^{[0]}$, and every subsequent layer is denoted $a^{[n]}$
- each neuron from the previous layer sends an activation or a "signal" to each neuron in the next layer
- each neuron has it's own weights and bias term
- if there are $1 \le j$ neurons in the layer, then the activation or signal to that neuron is denoted $a^{[n]}_j = \boldsymbol w^{[n]}_j \cdot \boldsymbol a^{[n-1]} + b^{[n]}_j$ i.e. the $j$-th neuron in the $n$-th layer is given by the dot product of the weights and inputs of the previous layer with some bias term
	- the idea is to mimick the brain to some degree
- This type of layer is called a "Dense" layer
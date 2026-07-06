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
- the input layer is called $\boldsymbol a^{[0]}$, and every subsequent layer is denoted $\boldsymbol a^{[n]}$
- each neuron from the previous layer sends an activation or a "signal" to each neuron in the next layer
- each neuron has it's own weights and bias term
- if there are $1 \le j$ neurons in the layer, then the signal to that neuron is denoted $z^{[n]}_j = \boldsymbol w^{[n]}_j \cdot \boldsymbol a^{[n-1]} + b^{[n]}_j$ i.e. the $j$-th neuron in the $n$-th layer is given by the dot product of the weights and inputs of the previous layer with some bias term
	- the idea is to mimick the brain to some degree
- This signal is then passed through some of activation function, which then becomes the value associated to that unit
	- these functions include sigmoid, ReLU, linear activation, leaky ReLU, and so on
	- This means that $z^{[n]}_j$ is fed into some function $g$, and the resulting output $g(z^{[n]}_j)$ is the activation for $a^{[n]}_j$. 
	- here, $g$ is what is going to be sigmoid or Leaky ReLU or so on
- This type of layer is called a "Dense" layer

### Learning
- Just as how there was a loss function in Linear and Logistic Regression, there is one in Deep Learning as well
- For example, if we were doing a binary classification problem, then we would specify a loss function of "Binary Cross Entropy" (the logarithm dependent function in [[Logistic Regression]]), and a cost function that is the average over all loss functions
- The main difference is that instead of just a layer of vectors and one bias term to tune, there is now a much larger amount of parameters to tune
- For example, if this is a 3 layer neural network with 25, 15, and 10 units in each layer, then $\boldsymbol W^{[1]}=\mathbb R^{(\text{len}\,\boldsymbol a^{[0]}) \times 25}, \boldsymbol W^{[2]}=\mathbb R^{25 \times 15}, \boldsymbol W^{[3]}=\mathbb R^{15 \times 10}$. In laymen's terms, this is saying that the $j$-th column in $\boldsymbol W^{[i]}$ corresponds to the parameters for the $j$-th unit in the $i$-th layer
	- Also, $\boldsymbol b^{[1]}=\mathbb R^{1\times 25}$, and so on
- This means that the final loss function $J$ is a function of all of these $\boldsymbol W^{[i]}$ and $\boldsymbol b^{[i]}$. (tensors!)
	- The model learns the optimal weights and biases through backpropogation:
$$
\begin{align*}
	w_j - \alpha \frac{\partial J}{\partial w_j} &\rightarrow w_j  \\
	b_j - \alpha \frac{\partial J}{\partial b_j} &\rightarrow b_j
\end{align*}
$$

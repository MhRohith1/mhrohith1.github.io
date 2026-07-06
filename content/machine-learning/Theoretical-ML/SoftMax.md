---
title: Multi-Class and Softmax Classification
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### The Activation
- Calculate the activation $z$ as normal: $z_j = \boldsymbol w^{[n]}_j \cdot \boldsymbol a^{[n-1]} + b^{[n]}_j$ as the activation to the $j$-th unit on the last layer
- Instead of using a sigmoid function, we use the softmax function:
$$
a^{[n]}_j=\frac{e^{z_j}}{\sum_{k=1} e^{z_k}}
$$
- This formula tells the probability that is associated with the $j$-th neuron being the correct output: if $z^{[n]}_j$ is large, then there is a large chance that classifying the training example as $j$ is likely correct
- By definition, we have that $0\leq a^{[n]}_j \leq 1$, $\sum_{k=1} a_k^{[n]}=1$. 

### The Loss Function
$$
L= \left\{ \begin{array}{cc}
-\log(a_1) & y_i=1 \\
-\log(a_2) & y_i=2 \\
\vdots \\
-\log(a_j) & y_i=j
\end{array} \right.
$$
- This is the loss function that is used to train the model
- The intuition is that since $0 \le a_j \le 1, \, \log(a_j) \in (-\infty, 0]$. If $y_j=1$ and $a_j \approx 1$, then there is little need to correct the algorithm and the loss is kept small. If $a_j \approx 0$, then it is completely off and needs huge correction

### A note about SoftMax in TensorFlow
- There are two different types of SoftMax loss functions:
	- `SparseCategoricalCrossEntropy()` is the loss function that is used when the class labels range from $0$ to $N$, where $N$ is the number of distinct categories
	- `CategoricalCrossEntropy()` is the loss function used when the data is 'one hot encoded': the true class label is marked with a 1 and the rest marked with a 0. So a sample would look like $\underbrace{[0, 0, 0, 1, \ldots, 0]}_{N}$.
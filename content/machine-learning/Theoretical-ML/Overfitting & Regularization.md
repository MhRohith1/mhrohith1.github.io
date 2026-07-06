---
title: Overfitting & Regularization
draft: "false"
description: A page on Overfitting and how to combat overfitting using regularization
date:
---
### What is overfitting?
- Overfitting is something that happens when the algorithm that you choose (say polynomial regression) has too much power
- essentially, the algorithm has enough flexibility to create a curve or a decision boundary that *perfectly captures* the data
	- This might sound good, but is not ideal
	- A lot of times, data has noise which means that there are deviations from the "correct" curve or decision boundary
	- if you allow the algorithm, then it might just not account for the noise and instead curve around every deviation from the exception
	- ![[noisy-data.png]]
	- in the picture above, we have what appears to be a good boundary. however, if you allow enough power in the algorithm (in this case logistic regression), then it might do something like this:
	- ![[noisy-data-overfit.jpg]]
	- essentially, the algorithm has enough power to fit the noise too!

### The opposite problem: Underfitting
- The opposite problem: you're using an algorithm that doesn't capture the nuanceness of the data!
- Imagine in the above case, you tried to use logistic regression with 
$$
f(\boldsymbol x^i) = \frac{1}{1+e^{-\boldsymbol w \cdot \boldsymbol x + b}}.
$$
- Clearly, a linear boundary is not the best to capture all the nuance of the data! so a linear boundary would underfit the data
### Regularization
- there are many ways to combat overfitting:
	- You can add more training examples
	- You can remove features that may seem irrelevant
	- the most important one is something called regularization
- regularization essentially allows you to still use complicated and nuanced decision boundaries or regression models, but it restricts how big the weights can be
	- in other words, you restrict the influence that nuanced terms have, which forces a more simple decision boundary
- this is done through the following loss function:
$$
J(\boldsymbol w, b) = \frac{1}{2m}\sum_{i=1}^m L(\boldsymbol w, b) + \frac
{1}{2m} ||\boldsymbol w||^2
$$
- having this as our loss function guarantees that the weight parameters don't get too big which will prevent complicated terms from creeping in
	- there is no need to do the same for bias as it doesn't play that much of a role in this case
	- the derivative is
$$
\frac{\partial J}{\partial w_j} = \frac{1}{m} \sum_{i=1}^n \left(L(\boldsymbol w, b) \boldsymbol x^i\right) + \frac{1}{m} w_j
$$
	- there is no change to the derivative of bias term!
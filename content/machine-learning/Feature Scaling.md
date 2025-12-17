---
title: Feature Scaling
draft: "false"
description: Feature Scaling for Machine Learning. How does feature learning work? Advantages?
date:
---

### Motivating feature scaling:
-  A model (like linear regression) is going to learn the parameters (weights and biases) based on the value of the feature
- If, for example, we are looking at prices of houses based on sq. ft. and number of bedrooms, then the sq.ft. feature is going to have large numbers (in the 100s-1000s range) while number of bedrooms is going to be a small, discrete amount
- So a good model will have to adjust the parameters $w_1, w_2$ according to the feature value. in this case, the model would learn to make $w_1$ small because the sq. ft. of a house is a large number, and vice versa for $w_2$. 
- Looking at a contour plot of the loss, we might see that the contours are very narrow in $w_1$ but very wide in $w_2$. This is because making large changes to $w_2$ will have a small effect on the overall model because the second feature (no. of bedrooms) will only take on small quantities
	- this will cause gradient descent to take (a relatively) longer amount of time to fully converge onto the correct loss value
	- This balancing of features is called **fair feature importance**
### What is feature scaling?
- As the name suggests, this is scaling the features of the data set so that the values' ranges are comparable
- the features are usually scaled to be $\boldsymbol x^i_j \in [0,1]$ or $\boldsymbol x_j^i \in [-1,1]$.
- this allows for gradient descent to be faster!
### How to actually do feature scaling?
- There are many ways to do feature scaling
- Max Normalization: dividing by the max to scale it down
	- so if $\underset{i}{\max} \, \boldsymbol x_j^i = 2500$ (the maximum of over all training examples of the $j$-th feature =2500), then we can do
$$
\frac{\boldsymbol x^i_j}{2500} \rightarrow \boldsymbol x^i_j.
$$
- Mean Normalization
	- Instead of computing the max, we compute the mean: if $a \leq \boldsymbol x^i_j < b$, then we do mean normalization as 
$$
\frac{\boldsymbol x^i_j - \mu_j}{b-a} \rightarrow \boldsymbol x^i_j.
$$
- Z-score normalization
	- We use the Gaussian normalization:
$$
\frac{\boldsymbol x_j^i - \mu_j}{\sigma_j} \rightarrow \boldsymbol x^i_j.
$$
where $\sigma_j$ is the standard deviation of the range of values.
$$
\sigma_j = \sqrt{\frac{\sum (\boldsymbol x_j^i - \mu_j)^2}{n-1}}.
$$
- Aim to get the values between $\boldsymbol x^i_j \in [-1,1]$ for each $i,j$.
- **It is important that both the training data and the testing data are normalized!**
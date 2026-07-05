---
title: Understanding Bias and Variance
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### What is Bias and Variance?
- Bias corresponds to underfitting 
- Variance corresponds to overfitting
- How can this be understood?
	- Think of bias as being biased towards what model accurately represents the data. if the data has a complicated pattern, requires complex features to be understood, and we fit just a linear model of one feature, we are being heavily biased towards what model works for the data and are thus causing underfitting
	- On the other hand, if we have a relatively simple pattern within the data but we fit an overly complicated function, the function will be able to fit the pattern. however, even a slight variation from the pattern will suddenly result in a totally different function. this is thus overfitting i.e. high variance
### Intuition
- if a model has a very high error in the training data set, then it is said to have high bias
- if a model's cross validation error is substantially larger than the training set error, then it is said to have high variance
- note that these definitions show that it is possible to have both high variance *and* high bias for the same model

### Addressing Bias and Variance:
How do we know if a model has bias or high variance? How can we address it if it does come up? 
- We know what causes high bias and variance, and also how to determine if a model has bias or variance from the costs
- If a model has high bias, then we can try to make the model more complicated by adding more features (either through feature engineering or through polynomial feature manipulation) and decreasing the regularization constant(s)
	- Intuitively, we know that high bias is caused by being biased towards a type of model that we think will fit the data
	- So we can try and make the model more complicated, which will give it more power to fit the data
- High variance can be addressed by adding more data, increasing regularization constants and reducing the complexity of the model
	- Variance is caused by large, complicated models which fit to the noise of the data as well. so decreasing complexity is a natural step to avoid high variance
- plotting the cost of the training and cross validation data can be a good way to see if there is high bias or variance
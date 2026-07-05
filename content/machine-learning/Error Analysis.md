---
title: Error Analysis
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### Introduction
- There are many steps needed in developing and testing the neural network model
	- these steps are both decisions that we make about the model and decisions that the model itself learns from the data
- throughout these steps, there can be choices that cause errors in the training process
- it is important to diagnose, address and reduce amount of error that a model makes
- this page is going to be focused on reducing the classification error made by models
### Error Analysis
- After selecting the type of model we are using and acquiring data for the problem at hand, we train the model with the given dataset 
	- the model is trained on the training set and evaluated using the cross validation set
- when we evaluate the model using the cross validation set, we note the misclassified data and try to address the issues. this is error analysis
- there are many things that can go wrong with the model, and we need to be able to address each error
### The types of errors
1. We observe a large amount of misclassified examples in both the training and cross validation set
	- this is obviously an example of underfitting. we can address this by making the model more complex somehow (in a deep learning model, we can add more layers and more units. in a linear regression/logistic regression model, we can do feature engineering to obtain more complex features)
2. The model does well on the training set, but the model is very bad on the cross validation test
	- this is obviously overfitting. We can address this by reducing the complexity of the model
3. The model has a large amount of error in the cross validation set
	- more than just saying high bias and/or high variance, it is always worth peeking to what is really going on, and what examples in the cross-validation set the model is erroring on. if there is one specific example in which the model fails, then you can get more data in that specific example and add it to the training set
- 
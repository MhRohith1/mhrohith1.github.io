---
title: Linear Regression
draft: "false"
description: This page is about Linear Regression and Gradient Descent as I learned from Andrew Ng's DeepLearning Specialization course
date:
---

**Gradient Descent** is a commonly used technique in machine learning to optimize a **model** to best predict an outcome variable based on the input features. This technique is used in supervised learning problems
### Problem statement
- Suppose we have a linear model (gradient descent will work well for any model we choose) and we are trying to predict the price of a bag of vegetables given the weight of the bag
- Call the training example (weight) $\boldsymbol x^i$ and the output variable $y^i$, and the value predicted by the linear model $\hat y^i$.

### Loss Function
- The way to test whether the model is any good is to use something called a loss function. For linear regression, the loss function is 
$$
\begin{align}
J(w,b)&=\frac{1}{2m} \sum_{i=1}^m (\hat y^i - y^i)^2 \\
&= \frac{1}{2m} \sum_{i=1}^m (wx^i+b - y^i)^2
\end{align}
$$
- i.e. the average of the error between the predicted and actual outcomes over all the data
- Here, $w$ is the weight variable and $b$ the bias. In a linear model, $\hat y^i = wx^i + b$.
- In vector notation, this is 
$$
\begin{align}
J(\boldsymbol w,b)&=\frac{1}{2m} \sum_{i=1}^m (\hat y^i - y^i)^2 \\
&= \frac{1}{2m} \sum_{i=1}^m (\boldsymbol w \cdot \boldsymbol x^i+b - y^i)^2
\end{align}
$$
where $\boldsymbol w$ is the weights vector and $\boldsymbol x^i$ is the $i$-th training example. To denote the $j$-th feature of the $i$-th training example, we say $\boldsymbol x _j^i$.
### Gradient Descent
- The goal of any linear model then would be minimize this loss function. We do so by taking the derivatives (gradient) with respect to $w$ and $b$. 
- So why do gradient descent, why can't we just do $\nabla_w J=0$ ?  
	- In short: because we won't be able to solve $\nabla_w J=0$. 
	- If we have a many feature system, then it becomes a mess to try an extract an exact solution to that differential equation
	- Linear regression *can* be solved exactly, but requires huge memory and time complexity
	- Other models like logistic regression and neural networks simply don't have closed form solutions!
- So instead, we do 
$$
\begin{align*}
\boldsymbol w-\alpha \nabla_w J &\rightarrow \boldsymbol w\\
b - \alpha \, \frac{\partial}{\partial b}J &\rightarrow b
\end{align*}
$$
for some "learning rate" parameter $\alpha$. 
- if there is only one weight variable, then we can construct a 3D plot of the loss function $J$. this gradient descent algorithm amounts to starting at some point on the plot $(w,b)$, finding the direction of steepest descent, and taking a small step in that direction 
- With the loss function defined above, we have 
$$
\begin{align*}
\boldsymbol w-\alpha \frac{1}{m} \sum_{i=1}^m (\boldsymbol w\cdot \boldsymbol x^i+b-y^i)\boldsymbol x^i &\rightarrow \boldsymbol w \\
b-\alpha \frac{1}{m} \sum_{i=1}^m (\boldsymbol w \cdot \boldsymbol x^i+b-y^i) &\rightarrow b
\end{align*}
$$
as the weight updates for linear gradient descent
- this process is repeated until convergence!
- the quantities $\boldsymbol w$ and $b$ depend per the model, so they are called the **parameters** of the model

### Convergence of Gradient Descent:
- It is best to construct a learning curve to see whether the loss function has converged
- if the loss begins to level off, then we know that it has converged
	- essentially, plotting loss vs. iterations
	- different models and different data sets can require different iterations before converging
- Another way to do so is use the automatic convergence test
	- if the loss decreases by less than some small number $\epsilon$, it can be declared to be convergent

### Identifying the best learning rate:
- if the loss consistently increases or oscillates between increasing and decreasing, then the learning rate is likely too large
- One way to test if gradient descent is working at all is to try a very small $\alpha$. the loss function should still decrease
- 
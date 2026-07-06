---
title: Logistic Regression
draft: "false"
description: Logistic Regression as explained by Andrew Ng
date:
---
### Classification
- [[Linear Regression]] and [[Polynomial Regression]] have their pitfalls: namely that they are only useful for predicting continuous variables
- When we want to predict discrete variables, as is the case in classification (classifying if a tumor is cancerous, classifying if an email is spam, and so on), linear regression and polynomial regression don't work
- Instead, we use **Logistic Regression** which relies on activation functions, to do the trick of classifying

### The Sigmoid activation function
- Consider the function
$$
g(z) = \frac{1}{1+e^{-z}}.
$$
- This function is called the sigmoid or logistic function. It's graph looks like 

![[sigmoid 1.png]]
- What do we do with this function?

### Using logistic regression
- We compute the output as normal: $z = \boldsymbol w \cdot \boldsymbol x^i + b$
- Pass this into the sigmoid activation function
- We will then get a value $g(z)$: if $g(z) \geq 0.5$, then $\hat y^i = 1$. otherwise, $\hat y^i = 0$, where $1$ denotes the success case, and $0$ the failure case

### Decision boundary
- As we can see from the definition of $g(z), g(z) \geq 0.5 \Leftrightarrow z \geq 0$. so if the input $z \geq 0$, then we will classify the training example as $1$. This means that $z=0$ forms the decision boundary of the logistic regression model!
- If (after plotting the data) we see that the data follow a linear boundary, then $z=\boldsymbol w \cdot \boldsymbol x^i + b$ is a good choice for $z$.
- however, if the data follow a different kind of boundary, then we should use a different rule for computing $z$. 
	- for example, if the data have a circular boundary, then we should use $z=\boldsymbol w \cdot \boldsymbol (x^i)^2 + b$
		- this is basically saying: square all the features and use a sort of quadratic regression model
	- adding cross terms and higher order polynomial terms will allow logistic regression to fit any kind of boundary!
	- therefore, 
$$
\begin{equation}
f(\boldsymbol x^i)=\frac{1}{1+e^{-a(\boldsymbol x^i)}}
\end{equation}.
$$
	- here, $a(\boldsymbol x^i)=(\boldsymbol w \cdot \boldsymbol x^i+b)$. However, depending on the decision boundary, $a$ can be modified accordingly! 
### Loss/cost function
- The mean squared loss function in linear regression is not ideal for logistic regression. This is because
$$
\begin{equation}
J(\boldsymbol w, b) = \frac{1}{m} \sum_{i=1}^m \frac{1}2 (f(\boldsymbol x^i) - y^i)^2
\end{equation}
$$
- has many local minima, so gradient descent will get trapped at a local mind and will not be able to reach the true minimum
- If we call the term inside the sum $L(\boldsymbol w, b)$, then we seek to modify $L$ and obtain a "good" loss function for logistic regression
- To motivate this new loss function, we need to remember that $y^i \in \{0,1\}$ and $f(\boldsymbol x^i) \in [0,1]$ as well. With this in mind, we write the loss function as 
$$
\begin{equation}
L(\boldsymbol w, b) = \left\{ \begin{array}{cc}-\log(f(\boldsymbol x^i)), & y^i = 1 \\ -\log(1-f(\boldsymbol x^i)), & y^i=0\end{array}  \right.
\end{equation}
$$
![[logistic_regression_loss.png]]
- We can see that if $f(\boldsymbol x^i) \approx 1$ and $y^i=1$, then $L(\boldsymbol w, b) \approx 0$, which makes sense, because the function is close to predicting the correct value.  Similarly for $y^i =0$ and $L\approx 0$ as well!
- Writing $L$ in one line:
$$
\begin{align}
L(\boldsymbol w, b) &= -y^i \log(f(\boldsymbol x^i)) - (1-y^i)\log(1-f(\boldsymbol x^i)) \\
\Rightarrow J(\boldsymbol w, b) &= \frac{1}{m} \sum_{i=1}^n L(\boldsymbol w, b)
\end{align}
$$
- This cost function is derived from *Maximum Likelihood statistics*!
	- How does the loss function change when you are allowed more than one output category?

### Gradient descent
- From the loss/cost function, we have
$$
\begin{align}
\nabla_w J &= \frac{1}{m} \sum_{i=1}^n (f(\boldsymbol x^i) - y^i)\boldsymbol x^i \\
\frac{\partial J}{\partial b} &= \frac{1}m \sum_{i=1}^n (f(\boldsymbol x^i) - y^i)
\end{align}
$$
- this is the same expression for linear regression!! the only difference is the function $f$ changes between linear and logistic regression
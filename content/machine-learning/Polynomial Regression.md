---
title: Polynomial Regression and Feature Engineering
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### Feature Engineering
- Feature engineering is the engineering of new features based on the already existing features of a dataset
- So if you wanted to predict the price of a piece of land based on the frontage and the depth, we might engineer a new feature called the area, which can be defined as $A =$ frontage $\times$ depth.

### Polynomial Regression
- With this new feature, we can now do polynomial regression. So for example, if we had a size vs price model, then we could engineer a size$^2$ variable, and then make it a linear regression with
$$
f(\boldsymbol x^i) = \boldsymbol w \cdot \boldsymbol x^i + b
$$
- where $\boldsymbol x^i=\begin{bmatrix}\text{size} & \text{size}^2 \end{bmatrix}$. In other words, this is now a quadratic regression:
$$
f(x) = w_1x + w_2x^2+b.
$$

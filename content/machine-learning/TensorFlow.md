---
title: TensorFlow and Deep Learning
draft: "false"
description: Programming with TensorFlow for Deep Learning
date:
---
**TensorFlow** is a library that is used for Deep Learning. Nowadays, it is losing out to PyTorch, but Andrew Ng's course on ML Specialization does use TF and it is good to know, so these are my notes on basic deep learning stuff using TensorFlow.

### Getting Started:
```
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
```
- Keras is a module within TensorFlow that contains a lot of the machinery needed for ML
- Dense is how a layer is defined (Dense does live inside of "layers" module, so that is a way to remember what Dense does)
- Sequential strings together different layers!
### Implementation of [[Logistic Regression]]
```
layer_1 = Dense(units=25, activation='ReLU') 
# activation function can be sigmoid, ReLU, Linear, etc
layer_2 = Dense(units=15, activation='ReLU')
layer_3 = Dense(units=1, activation='sigmoid') # doing it this way is not as optimal

neural_net = Sequential(layer_1, layer_2, layer_3)
neural_net.compile(loss=tensorflow.keras.BinaryCrossEntropy()) # specifies the logarithm loss function from Logistic Regression
neural_net.fit(training_features, training_output, epochs=100)
```
- This is how Binary Classification works with a neural network
- So we first create a layer of 25 units, followed by a layer of 15 units, followed by a layer of just one unit, which is going to be the output unit
- `Sequential` links these layers together
- We specify the type of loss function that we are going to use in the `compile` function
	- In this case, we use the loss from [[Logistic Regression]]
- Once this is done, we fit the model to the training data set!

### Fixes
- Doing `activation='sigmoid'` in the last layer is not as optimal
	- This is because using the sigmoid function $g(z)=\frac{1}{1+e^{-z}}$ requires an intermediate calculation of $z$, and only then computing $g(z)$
	- This makes the model have some rounding errors
- Instead, we do the following:
- ```
  layer_3 = Dense(units=1, activation='linear')
  
  neural_net.compile(loss=tensorflow.keras.BinaryCrossEntropy(from_logits=True))
  model.fit(training_features, training_output, epochs=100)
  logits = model(training_features)
  f_x = tf.nn.sigmoid(logits)
  ```
  where sigmoid is a function that takes the sigmoid of each value in the output `logits` array and returns out a 0 or 1 based on the prediction

### Some points on Normalization
- In linear and logistic regression, you would first split the data into `training_data` and `testing_data` using `sklearn.model_selection.train_test_split`. the training data was then normalized and fed into the algorithm. Then, all you need 
---
title: Tree Ensembles
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### Disadvantages of Decision trees:
- Decision trees have high variance: small changes in the initial data supplied can lead to huge differences in the tree that is constructed
- what's the intuition for this?
	- basically, the tree is built based on the data that it has access to
	- it tries to make pure leaves based on the entire dataset: so the entire dataset actually acts as one datapoint
	- so this is like fitting a complicated deep learning algorithm to...one data point...
	- so if you change the data, you change the tree
- To address, we build many trees and take the average or most common result from each tree (since there are many trees, this is also called a forest!)

### Building the Data
- you engineer the data by doing permutations of the dataset
- you essentially build multiple different datasets, where each dataset is made of a fixed number of elements of the original data, where repeats are allowed
	- this is called sampling with replacement
- a decision tree is trained using each of these different datasets, and the average over all these decision trees is taken when a new datapoint is given
- this type of "forest" building is called Random Forest
- there are other schemes used as well!

### Random Forest and XGBoost
- The method of sampling data with replacement to build decision trees is called **Random Forest**
- There is another method for **XGBoost** or **Gradient Boosting**
	- Suppose you build a tree with a dataset, and then suppose the decision tree misclassified 10 examples 
	- then, what is done is that a dataset is built so that the majority of the dataset contains these misclassified examples
	- training a decision tree on this dataset will allow the model to do well with the misclassified examples
	- this process is repeated until a certain number of trees are established

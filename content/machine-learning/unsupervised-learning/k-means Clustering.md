---
title: k-means Clusteing
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### Unclassified Data
- Deep learning, regression models and decision trees require data that have labels: some value associated to each data point that the models can use to make predictions
- However, there might be data where there are no labels, and it might be up to us to figure out the labels

### Procedure
- Suppose we are given a dataset that has 4 features and we are asked to simply classify the data into categories based on the feature values
	- We don't know before hand how many categories there are in the data!
	- how should we go about doing this?
- start by making something called centroids: these are points that correspond to the center or a definition of a category
	- centroids are usually chosen as random datum within the dataset
- next, repeat the following:
	- compute the "distance" from each datum to each centroid
	- assign the closest cluster to that data point
	- then, compute the average distance from each centroid to the assigned data points. move the cluster by that amount
- eventually, this will result in a cluster zoning near a set of points that correspond to that centroid's category
- when you want to make a prediction, you just compute which centroid the data point is closest to!

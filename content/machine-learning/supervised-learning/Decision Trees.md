---
title: Decision Trees
draft: "false"
description: Description of page. Useful for navigating between links
date:
---
### What are Decision Trees?
- like other ML algorithms, decision trees are algorithms that allow the machines and computers to make inferences about data presented to them
- unlike traditional deep learning architectures, decision trees use a graph / tree architecture to make decisions about target values given an example datum
- for example, if we wanted to classify a fruit as being ripe (or not ripe), then we could consider using decision trees to do so
	- but how does the decision tree work?
### Decision Trees, Nodes, and Information
- Suppose we have a few images of a few fruits, and we are able to extract information such as its age, the type of fruit and where its been kept
- from this information, we want to extract whether or not the fruit is ripe; how might we go about doing that?
	- this question boils down to finding the best feature to split the data by, such that we get closest to an actual prediction of ripe or not ripe
- to decide on which feature to split the data by, we use something called **entropy**, denoted $H$
	- entropy is a measure of how pure (impure) the data is
	- so for example, if there are 20 pieces of data (fruits) with 10 ripe fruit and 10 unripe fruits, then the purity score of this sample is $H(\frac{1}{2})=1$ 
![[entropyfunction.png]]
	Graph of the Entropy Function $H$. the input represents the proportion of the sample that is pure or impure ($p=0$ being completely pure, $p=1$ being completely impure)
- so for example, suppose we have the 10 ripe and 10 unripe fruits (this means the entropy of this sample is $H=1$) and we want to train a decision tree to recognize ripe and unripe fruits
	- so we would try to choose the best feature to split the data by. in our case, we have three features: age, type of fruit, how long its been kept
	- suppose we split by the age feature. this will gave us two branches of the decision tree
		- since age is a continuous feature, we would need to split the data by seeing if the age is greater than or less than a certain amount of time
		- if we were splitting by a discrete feature (such as type of fruit), then we have a simple "yes" or "no" decision to make 
	- if, after splitting, one branch has 12 fruits and the other 8, where 8 out of the 12 fruits are ripe and 3 out of the 8 fruits are ripe in each branch respectively, then we could get a purity score of $H(8/12)$ in the first branch and $H(3/8)$ in the second branch
- we decide if this feature is the best feature to use by seeing the amount the entropy has decreased compared to the previous branch
	- this is done using a weighted scheme as well
	- so the entropy lost (called **information gain**) is calculated as 
$$\underbrace{H\left(\frac{1}{2}\right)}_{\text{previous node}} - \left(\frac{12}{20}\underbrace{H\left(\frac{8}{12}\right)}_{\text{entropy of right branch}} + \frac{8}{20}\underbrace{H\left(\frac{3}{20}\right)}_{\text{entropy of left branch}}\right)$$
- this process is repeated for the other features. the feature that gives the best information gain is chosen as the feature to split the data by
### Overfitting and deciding when to stop
- the process of choosing the right feature and splitting by that feature is repeated until a certain amount when building the decision tree
- this is crucial because if we were to continue building the tree without placing any stopping point, then the tree would overfit the data and would fit to the noise until
- so the process is stopped when
	- there are too little samples in the node
	- the information gain for any of the feature splits are minimal
	- the number of layers in the tree exceeds a certain amount

These are decision trees! Decision trees can be improved by means of [[Tree Ensembles]]!

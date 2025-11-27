
[[Maupertuis-Hamilton's Least Action]]
[[Lagrangian Dynamics]]

### Why Variational Calculus?
- Dr. Burby jumped into variational calculus without really motivating it. 
- Variational calculus **extends** ordinary (multi-variable) calculus to **functionals**!
	- Functionals are functions of functions: they are first seen in the context of vectors (see [[Tensors]]), when elements of the dual space are called "functionals" on the vector space
	- This can be extended to general functions. If there is a function (map) $f: \mathbb R \rightarrow \mathbb R, f \in \boldsymbol F$, then I can define a "function" $S:\boldsymbol F \rightarrow \mathbb R$. This $S$ is called a functional on $\boldsymbol F$.
- This is essential in Lagrangian dynamics, because we seek to **minimize** (derivatives!!!) the action functional (see [[Maupertuis-Hamilton's Least Action Principle]])!

### Definitions
- Variational Calculus is built of something called "infinitesimal variations"
	- The main purpose of these variations is to generalize "infinitesimals" ($dx$) from calculus
- Suppose $f: \mathbb R \rightarrow \mathbb R$, $f\in C^\infty(\mathbb R)$ (infinite differentiability (smoothness) is required later). Define a parameter $\epsilon$, and define another function $f_\epsilon: \mathbb R \rightarrow \mathbb R$ such that $f_0 = f$. Then, the variation of $f$ is defined as $$\delta f := \left.\frac{d}{d\epsilon}f_\epsilon\right|_{\epsilon=0}$$
- This means that if you have a function $f$, you can imagine shifting the function $f$ by some amount. How the values of $f$ change as you make a *really* small change to $f$ defines $\delta f$. 
	- This is similar to how we are interested in how a function changes as you make a small change to it's input. *This time, the input is itself a function*! so we want to make small changes to this function to find minima of functionals!

### Fundamental Theorem of Variational Calculus:
- As there is an FTC, so there exists an FTVC!
- The version presented in class reads as follows:
	- Let $f \in C^\infty(\mathbb R)$. If, $\forall g \in C^\infty(\mathbb R)$ with $\delta g(a)=\delta g(b)=0$, $$\int_a^b f(x) \delta g(x) dx=0$$ then $\forall x \in [a,b], f(x)=0$.
	- This theorem is true even if $\delta g(x) \ne 0$ at $x=a,x=b$, but in classical dynamics, we care about the case that $\delta g(x)$ vanishes at the endpoints.
- However, this misses a lot of the key mathematics going on. 
- The FTVC is really a theorem about denseness of function spaces. 
- A more mathematically rigorous statement might be:
	- Let $f \in L^1([a, b])$. If $\forall g \in C_c^\infty(a,b)$ with $g(a)=0=g(b)$, $$\int_a^b f(x)g(x)=0$$then $\forall x \in [a,b], f(x)=0$.
	- $C_c^\infty(a,b)$ is the space of functions on $(a,b)$ that are smooth with "compact support". This just means that [outside of a compact subset of it's domain, its zero](https://mathworld.wolfram.com/CompactSupport.html). In this case, it must be 0 outside of the compact domain $[a,b]$.
	- The set $C^\infty_c(a,b)$ is dense in $L^p(a,b), 1 \leq p < \infty$. This means that $\overline{C^\infty_c(a,b)}=L^p([a,b])$. So if $f \in L^p([a,b])$ and $\int f \phi = 0$, then $f=0$ everywhere on the domain because $g \in C^\infty_c$ is dense to $L^q$, where $L^q$ is the dual space to $L^p$, with $L^q = (L^p)^*$ when $\frac{1}{p}+\frac{1}{q}=1$.
	- An intuitive way to understand what's happening is that we can pick a $\phi \in C^\infty_c(a,b)$, and $\int f g =0$ for any choice of $g$ we pick. In particular, we can pick a $g$ that "resembles" a Dirac-Delta like spike at some arbitrary value. We can do so for any arbitrary value within the domain of $f$, so $f$ must equal $0$ on its whole domain!
 
# Line Integrals

## Learning Objectives {section:learning-objectives}
- Calculate a scalar line integral along a curve.
- Calculate a vector line integral along an oriented curve in space.
- Use a line integral to compute the work done in moving an object along a curve in a vector field.
- Describe the flux and circulation of a vector field.

We are familiar with single-variable integrals of the form ${\displaystyle \int_{a}^{b}f(x)dx,}$ where the domain of integration is an interval $[a,b].$ Such an interval can be thought of as a curve in the *xy*-plane, since the interval defines a line segment with endpoints $(a,0)$ and $(b,0)$—in other words, a line segment located on the *x*-axis. Suppose we want to integrate over *any* curve in the plane, not just over a line segment on the *x*-axis. Such a task requires a new kind of integral, called a *line integral.*
Line integrals have many applications to engineering and physics. They also allow us to make several useful generalizations of the Fundamental Theorem of Calculus. And, they are closely connected to the properties of vector fields, as we shall see.

## Scalar Line Integrals
A {term:line integral} gives us the ability to integrate multivariable functions and vector fields over arbitrary curves in a plane or in space. There are two types of line integrals: scalar line integrals and vector line integrals. Scalar line integrals are integrals of a scalar function over a curve in a plane or in space. Vector line integrals are integrals of a vector field over a curve in a plane or in space. Let’s look at scalar line integrals first.
A scalar line integral is defined just as a single-variable integral is defined, except that for a scalar line integral, the integrand is a function of more than one variable and the domain of integration is a curve in a plane or in space, as opposed to a curve on the *x*-axis.
For a scalar line integral, we let *C* be a smooth curve in a plane or in space and let $f$ be a function with a domain that includes *C*. We chop the curve into small pieces. For each piece, we choose point *P* in that piece and evaluate $f$ at *P.* (We can do this because all the points in the curve are in the domain of $f.$) We multiply $f(P)$ by the arc length of the piece $\text{Δ}s,$ add the product $f(P)\text{Δ}s$ over all the pieces, and then let the arc length of the pieces shrink to zero by taking a limit. The result is the scalar line integral of the function over the curve.
For a formal description of a scalar line integral, let $C$ be a smooth curve in space given by the parameterization $\textbf{r}(t)=\langle x(t),y(t),z(t)\rangle ,$ $a\le t\le b.$ Let $f(x,y,z)$ be a function with a domain that includes curve $C.$ To define the line integral of the function $f$ over $C,$ we begin as most definitions of an integral begin: we chop the curve into small pieces. Partition the parameter interval $[a,b]$ into *n* subintervals $[{t}_{i-1},{t}_{i}]$ of equal width for $\text{l}\le i\le n,$ where ${t}_{0}=a$ and ${t}_{n}=b$ ([ref:CNX_Calc_Figure_16_02_001]). Let ${t}_{i}^{*}$ be a value in the *i*th interval $[{t}_{i-\text{l}},{t}_{i}].$ Denote the endpoints of $\textbf{r}({t}_{0}),\textbf{r}({t}_{1})\text{,…},\textbf{r}({t}_{n})$ by ${P}_{0}\text{,…},{P}_{n}.$ Points *P<sub>i</sub>* divide curve $C$ into $n$ pieces ${C}_{1},{C}_{2}\text{,…},{C}_{n,}$ with lengths $\text{Δ}{s}_{1},\text{Δ}{s}_{2}\text{,…},\text{Δ}{s}_{n},$ respectively. Let ${P}_{i}^{*}$ denote the endpoint of $\textbf{r}({t}_{i}^{*})$ for $1\le i\le n.$ Now, we evaluate the function $f$ at point ${P}_{i}^{*}$ for $1\le i\le n.$ Note that ${P}_{i}^{*}$ is in piece ${C}_{i},$ and therefore ${P}_{i}^{*}$ is in the domain of $f.$ Multiply $f({P}_{i}^{*})$ by the length $\text{Δ}{s}_{i}$ of ${C}_{i},$ which gives the area of the “sheet” with base ${C}_{i},$ and height $f({P}_{i}^{*}).$ This is analogous to using rectangles to approximate area in a single-variable integral. Now, we form the sum ${\displaystyle \sum_{i=1}^{n} f({P}_{i}^{*})\text{Δ}{s}_{i}}.$ Note the similarity of this sum versus a Riemann sum; in fact, this definition is a generalization of a Riemann sum to arbitrary curves in space. Just as with Riemann sums and integrals of form ${\displaystyle \int_{a}^{b}g(x)dx},$ we define an integral by letting the width of the pieces of the curve shrink to zero by taking a limit. The result is the scalar line integral of $f$ along $C.$

> FIGURE {fig:CNX_Calc_Figure_16_02_001} src=../../media/CNX_Calc_Figure_16_02_001.jpg
> alt: A diagram of a curve in quadrant one. Several points and segments are labeled. Starting at the left, the first points are P_0 and P_1. The segment between them is labeled delta S_1. The next points are P_i-1, P_i, and P_i+1. The segments connecting them are delta S_i and delta S_j+1. Point P_i starred and point P_i+1 starred are located on each segment, respectively. The last two points are P_n-1 and P_n, connected by segment S_n.
> caption: Curve *C* has been divided into *n* pieces, and a point inside each piece has been chosen.

You may have noticed a difference between this definition of a scalar line integral and a single-variable integral. In this definition, the arc lengths $\text{Δ}{s}_{1},\text{Δ}{s}_{2}\text{,…},\text{Δ}{s}_{n}$ aren’t necessarily the same; in the definition of a single-variable integral, the curve in the *x*-axis is partitioned into pieces of equal length. This difference does not have any effect in the limit. As we shrink the arc lengths to zero, their values become close enough that any small difference becomes irrelevant.

:::note [definition] Definition
Let $f$ be a function with a domain that includes the smooth curve $C$ that is parameterized by $\textbf{r}(t)=\langle x(t),y(t),z(t)\rangle ,$ $a\le t\le b.$ The {term:scalar line integral} of $f$ along $C$ is

$$ {\displaystyle \int_{C}f(x,y,z)ds=\lim_{n\to \infty}}{\displaystyle \sum_{i=1}^{n} f({P}_{i}^{*})\text{Δ}{s}_{i}} $$  {eq:fs-id1167793929737}

if this limit exists $({t}_{i}^{*}$ and $\text{Δ}{s}_{i}$ are defined as in the previous paragraphs). If *C* is a planar curve, then *C* can be represented by the parametric equations $x=x(t),y=y(t),$ and $a\le t\le b.$ If *C* is smooth and $f(x,y)$ is a function of two variables, then the scalar line integral of $f$ along *C* is defined similarly as

${\displaystyle \int_{C}f(x,y)ds=\lim_{n\to \infty}}{\displaystyle \sum_{i=1}^{n} f({P}_{i}^{*})\text{Δ}{s}_{i}},$  {eq:fs-id1167793956227}

if this limit exists.
:::
If $f$ is a continuous function on a smooth curve *C*, then ${\displaystyle \int_{C}fds}$ always exists. Since ${\displaystyle \int_{C}fds}$ is defined as a limit of Riemann sums, the continuity of $f$ is enough to guarantee the existence of the limit, just as the integral ${\displaystyle \int_{a}^{b}g(x)dx}$ exists if *g* is continuous over $[a,b].$
Before looking at how to compute a line integral, we need to examine the geometry captured by these integrals. Suppose that $f(x,y)\ge 0$ for all points $(x,y)$ on a smooth planar curve $C.$ Imagine taking curve $C$ and projecting it “up” to the surface defined by $f(x,y),$ thereby creating a new curve ${C}^{'}$ that lies in the graph of $f(x,y)$ ([ref:CNX_Calc_Figure_16_02_002]). Now we drop a “sheet” from ${C}^{'}$ down to the xy-plane. The area of this sheet is ${\displaystyle \int_{C}f(x,y)ds}.$ If $f(x,y)\le 0$ for some points in $C,$ then the value of ${\displaystyle \int_{C}f(x,y)ds}$ is the area above the xy-plane less the area below the xy-plane. (Note the similarity with integrals of the form ${\displaystyle \int_{a}^{b}g(x)dx.})$

> FIGURE {fig:CNX_Calc_Figure_16_02_002} src=../../media/CNX_Calc_Figure_16_02_002.jpg
> alt: A diagram in three dimensions. The original curve C in the (x,y) plane looks like a parabola opening to the left with vertex in quadrant 1. The surface defined by f(x,y) is shown always above the (x,y) plane. A curve on the surface directly above the original curve C is labeled as C’. A blue sheet stretches down from C’ to C.
> caption: The area of the blue sheet is ${\displaystyle \int_{C}f(x,y)ds.}$

From this geometry, we can see that line integral ${\displaystyle \int_{C}f(x,y)ds}$ does not depend on the parameterization $\textbf{r}(t)$ of *C*. As long as the curve is traversed exactly once by the parameterization, the area of the sheet formed by the function and the curve is the same. This same kind of geometric argument can be extended to show that the line integral of a three-variable function over a curve in space does not depend on the parameterization of the curve.

:::example {ex:fs-id1167793501665} Finding the Value of a Line Integral

:::exercise {fs-id1167793501668} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}2ds,}$ where $C$ is the upper half of the unit circle.
SOLUTION:
The integrand is $f(x,y)=2.$ [ref:CNX_Calc_Figure_16_02_003] shows the graph of $f(x,y)=2,$ curve *C*, and the sheet formed by them. Notice that this sheet has the same area as a rectangle with width $\pi$ and length 2. Therefore, ${\displaystyle \int_{C}2ds=2\pi .}$

> FIGURE {fig:CNX_Calc_Figure_16_02_003} src=../../media/CNX_Calc_Figure_16_02_003.jpg
> alt: A graph in three dimensions. There is a flat plane just above the (x,y) plane. The upper half of the unit circle in quadrants 1 and 2 of the (x,y) plane is raised up to form a semicircle sheet into the z-plane.
> caption: The sheet that is formed by the upper half of the unit circle in a plane and the graph of $f(x,y)=2.$

To see that ${\displaystyle \int_{C}2ds=2\pi}$ using the definition of line integral, we let $\textbf{r}(t)$ be a parameterization of *C*. Then, $f(\textbf{r}({t}_{i}))=2$ for any number ${t}_{i}$ in the domain of **r**. Therefore,

$\begin{array}{ll}\int_{C}fds & =\lim_{n\to \infty}\sum_{i=1}^{n} f(\text{r}({t}_{i}^{*}))\text{Δ}{s}_{i} \\ & =\lim_{n\to \infty}\sum_{i=1}^{n} 2\text{Δ}{s}_{i} \\ & =2\lim_{n\to \infty}\sum_{i=1}^{n} \text{Δ}{s}_{i} \\ & =2(\text{length of C}) \\ & =2\pi .\end{array}$  {eq:fs-id1167793370354}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793881276} type= 
PROBLEM:
Find the value of ${\displaystyle \int_{C}(x+y)ds,}$ where $C$ is the curve parameterized by $x=t,$ $y=t,$ $0\le t\le 1.$
SOLUTION:
$\sqrt{2}$
COMMENTARY: Hint
Find the shape formed by *C* and the graph of function $f(x,y)=x+y.$
:::
:::
Note that in a scalar line integral, the integration is done with respect to arc length *s*, which can make a scalar line integral difficult to calculate. To make the calculations easier, we can translate ${\displaystyle \int_{C}fds}$ to an integral with a variable of integration that is *t*.
Let $\textbf{r}(t)=\langle x(t),y(t),z(t)\rangle$ for $a\le t\le b$ be a parameterization of $C.$ Since we are assuming that $C$ is smooth, $\mathbf{{r}^{'}}(t)=\langle {x}^{'}(t),{y}^{'}(t),{z}^{'}(t)\rangle$ is continuous for all $t$ in $[a,b].$ In particular, $x\text{′}(t),y\text{′}(t),$ and $z\text{′}(t)$ exist for all $t$ in $[a,b].$ According to the arc length formula, we have

$\text{length}({C}_{i})=\text{Δ}{s}_{i}={\displaystyle \int_{{t}_{i-1}}^{{t}_{i}}\| \mathbf{{r}^{'}}(t)\|}dt.$  {eq:fs-id1167793897253}

If width $\text{Δ}{t}_{i}={t}_{i}-{t}_{i-1}$ is small, then function ${\displaystyle \int_{{t}_{i-1}}^{{t}_{i}}\| \mathbf{{r}^{'}}(t)\| dt\approx \| {r}^{'}({t}_{i}^{*})\| \text{Δ}{t}_{i},}$ $\| \mathbf{{r}^{'}}(t)\|$ is almost constant over the interval $[{t}_{i-1},{t}_{i}].$ Therefore,

${\displaystyle \int_{{t}_{i-1}}^{{t}_{i}}\| \mathbf{{r}^{'}}(t)\| dt}\approx \| \mathbf{{r}^{'}}({t}_{i}^{*})\| \text{Δ}{t}_{i},$  {eq:fs-id1167793433713}

and we have

$$ {\displaystyle \sum_{i=1}^{n} f(\textbf{r}({t}_{i}^{*}))\text{Δ}{s}_{i}}={\displaystyle \sum_{i=1}^{n} f(\textbf{r}({t}_{i}^{*}))\| \mathbf{{r}^{'}}({t}_{i}^{*})\|}\text{Δ}{t}_{i}. $$  {eq:fs-id1167794213153}

See [ref:CNX_Calc_Figure_16_02_004].

> FIGURE {fig:CNX_Calc_Figure_16_02_004} src=../../media/CNX_Calc_Figure_16_02_004.jpg
> alt: A segment of an increasing concave down curve labeled C. A small segment of the curved is boxed and labeled as delta t_i. In the zoomed-in insert, this boxed segment of the curve is almost linear.
> caption: If we zoom in on the curve enough by making $\text{Δ}{t}_{i}$ very small, then the corresponding piece of the curve is approximately linear.

Note that

$\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f(\textbf{r}({t}_{i}^{*}))}\| \mathbf{{r}^{'}}({t}_{i}^{*})\| \text{Δ}{t}_{i}={\displaystyle \int_{a}^{b}f(\textbf{r}(t))}\| \mathbf{{r}^{'}}(t)\| dt.$  {eq:fs-id1167793915898}

In other words, as the widths of intervals $[{t}_{i-1},{t}_{i}]$ shrink to zero, the sum ${\displaystyle \sum_{i=1}^{n} f(\textbf{r}({t}_{i}^{*}))}\| \mathbf{{r}^{'}}({t}_{i}^{*})\| \text{Δ}{t}_{i}$ converges to the integral ${\displaystyle \int_{a}^{b}f(\textbf{r}(t))}\| \mathbf{{r}^{'}}(t)\| dt.$ Therefore, we have the following theorem.

:::note [theorem] Evaluating a Scalar Line Integral
Let $f$ be a continuous function with a domain that includes the smooth curve $C$ with parameterization $\textbf{r}(t),a\le t\le b.$ Then

$$ {\displaystyle \int_{C}fds={\displaystyle \int_{a}^{b}f(\textbf{r}(t))}\| \mathbf{{r}^{'}}(t)\| dt}. $$  {eq:fs-id1167793886491}

:::
Although we have labeled [ref:fs-id1167794213153] as an equation, it is more accurately considered an approximation because we can show that the left-hand side of [ref:fs-id1167794213153] approaches the right-hand side as $n\to \infty .$ In other words, letting the widths of the pieces shrink to zero makes the right-hand sum arbitrarily close to the left-hand sum. Since

$\| \mathbf{{r}^{'}}(t)\| =\sqrt{{(x'(t))}^{2}+{(y'(t))}^{2}+{(z'(t))}^{2},}$  {eq:fs-id1167793300195}

we obtain the following theorem, which we use to compute scalar line integrals.

:::note [theorem] Scalar Line Integral Calculation
Let $f$ be a continuous function with a domain that includes the smooth curve *C* with parameterization $\textbf{r}(t)=\langle x(t),y(t),z(t)\rangle ,a\le t\le b.$ Then

$$ {\displaystyle \int_{C}f(x,y,z)ds={\displaystyle \int_{a}^{b}f(\textbf{r}(t))\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}+{({z}^{'}(t))}^{2}}}dt.} $$  {eq:fs-id1167793952322}

Similarly,

${\displaystyle \int_{C}f(x,y)ds={\displaystyle \int_{a}^{b}f(\textbf{r}(t))\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}}}dt}$  {eq:fs-id1167793944244}

if *C* is a planar curve and $f$ is a function of two variables.
:::
Note that a consequence of this theorem is the equation $ds=\| \mathbf{{r}^{'}}(t)\| dt.$ In other words, the change in arc length can be viewed as a change in the *t* domain, scaled by the magnitude of vector $\mathbf{{r}^{'}}(t).$

:::example {ex:fs-id1167793276927} Evaluating a Line Integral

:::exercise {fs-id1167793276929} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds,}$ where $C$ is part of the helix parameterized by $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,t\rangle ,$ $0\le t\le 2\pi .$
SOLUTION:
To compute a scalar line integral, we start by converting the variable of integration from arc length *s* to *t*. Then, we can use [ref:fs-id1167793952322] to compute the integral with respect to *t*. Note that $f(\textbf{r}(t))={\text{cos}}^{2}t+{\text{sin}}^{2}t+t=1+t$ and

$\begin{array}{rl}\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}+{({z}^{'}(t))}^{2}} & =\sqrt{{(\text{−}\text{sin}(t))}^{2}+{\text{cos}}^{2}(t)+1} \\ & =\sqrt{2}.\end{array}$  {eq:fs-id1167793936040}

Therefore,

${\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds={\displaystyle \int_{0}^{2\pi}(1+t)\sqrt{2}dt.}}$  {eq:fs-id1167793930425}

Notice that [ref:fs-id1167793952322] translated the original difficult line integral into a manageable single-variable integral. Since

$\begin{array}{rl}{\displaystyle \int_{0}^{2\pi}(1+t)}\sqrt{2}dt & ={[\sqrt{2}t+\frac{\sqrt{2}{t}^{2}}{2}]}_{0}^{2\pi} \\ & =2\sqrt{2}\pi +2\sqrt{2}{\pi}^{2},\end{array}$  {eq:fs-id1167793298528}

we have

${\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds=2\sqrt{2}\pi +2\sqrt{2}{\pi}^{2}}.$  {eq:fs-id1167793633035}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794126213} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds,}$ where *C* is the curve with parameterization $\text{r}(t)=\langle \text{sin}(3t),\text{cos}(3t)\text{,t}\rangle ,0\le t\le 2\pi .$
SOLUTION:
$2\sqrt{10}\pi +2\sqrt{10}{\pi}^{2}$
COMMENTARY: Hint
Use the two-variable version of [ref:fs-id1167793886491].
:::
:::

:::example {ex:fs-id1167793925140} Independence of Parameterization

:::exercise {fs-id1167793925142} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds,}$ where $C$ is part of the helix parameterized by $\textbf{r}(t)=\langle \text{cos}(2t),\text{sin}(2t),2t\rangle ,0\le t\le \pi .$ Notice that this function and curve are the same as in the previous example; the only difference is that the curve has been reparameterized so that time runs twice as fast.
SOLUTION:
As with the previous example, we use [ref:fs-id1167793952322] to compute the integral with respect to *t*. Note that $f(\textbf{r}(t))={\text{cos}}^{2}(2t)+{\text{sin}}^{2}(2t)+2t=2t+1$ and

$\begin{array}{ll}\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}+{(z'(t))}^{2}} & =\sqrt{{(\text{−2sin}(\text{2}t))}^{2}+{(2\text{cos}(\text{2}t))}^{2}+{2}^{2}} \\ & \sqrt{4{\text{sin}}^{2}(2t)+4{\text{cos}}^{2}(2t)+4} \\ & =2\sqrt{2}\end{array}$  {eq:fs-id1167793366060}

so we have

$\begin{array}{rl}{\displaystyle \int_{C}({x}^{2}+{y}^{2}+z)ds} & =2\sqrt{2}{\displaystyle \int_{0}^{\pi}(1+2t)dt} \\ & =2\sqrt{2}{[t+{t}^{2}]}_{0}^{\pi} \\ & =2\sqrt{2}(\pi +{\pi}^{2}).\end{array}$  {eq:fs-id1167793603895}

Notice that this agrees with the answer in the previous example. Changing the parameterization did not change the value of the line integral. Scalar line integrals are independent of parameterization, as long as the curve is traversed exactly once by the parameterization.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793270490} type= 
PROBLEM:
Evaluate line integral ${\displaystyle \int_{C}({x}^{2}+yz)ds},$ where $C$ is the line with parameterization $\textbf{r}(t)=\langle 2t,5t,\text{−}t\rangle ,0\le t\le 10.$ Reparameterize *C* with parameterization $\textbf{s}(t)=\langle 4t,10t,−2t\rangle ,0\le t\le 5,$ recalculate line integral ${\displaystyle \int_{C}({x}^{2}+yz)ds},$ and notice that the change of parameterization had no effect on the value of the integral.
SOLUTION:
Both line integrals equal $-\frac{1000\sqrt{30}}{3}.$
COMMENTARY: Hint
Use [ref:fs-id1167793886491].
:::
:::
Now that we can evaluate line integrals, we can use them to calculate arc length. If $f(x,y,z)=1,$ then

$\begin{array}{ll}\int_{C}f(x,y,z)ds & =\lim_{n\to \infty}\sum_{i=1}^{n} f({P}_{i}^{*})\text{Δ}{s}_{i} \\ & =\lim_{n\to \infty}\sum_{i=1}^{n} \text{Δ}{s}_{i} \\ & =\lim_{n\to \infty}\text{length}(C) \\ & =\text{length}(C).\end{array}$  {eq:fs-id1167793463624}

Therefore, ${\displaystyle \int_{C}1ds}$ is the arc length of $C.$

:::example {ex:fs-id1167793951920} Calculating Arc Length

:::exercise {fs-id1167793951922} type= 
PROBLEM:
A wire has a shape that can be modeled with the parameterization $\text{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,\frac{2}{3}{t}^{3/2}\rangle ,0\le t\le 4\pi .$ Find the length of the wire.
SOLUTION:
The length of the wire is given by ${\displaystyle \int_{C}1ds},$ where *C* is the curve with parameterization **r**. Therefore,

$\begin{array}{rl}\text{The length of the wire} & ={\displaystyle \int_{C}1ds} \\ & ={\displaystyle \int_{0}^{4\pi}\| \mathbf{{r}^{'}}(t)\| dt} \\ & ={\displaystyle \int_{0}^{4\pi}\sqrt{{(\text{−}\text{sin}\;t)}^{2}+{\text{cos}}^{2}t+t}dt} \\ & ={\displaystyle \int_{0}^{4\pi}\sqrt{1+t}dt} \\ & ={[\frac{2{(1+t)}^{3\text{/}2}}{3}]}_{0}^{4\pi} \\ & =\frac{2}{3}({(1+4\pi )}^{3\text{/}2}-1).\end{array}$  {eq:fs-id1167793978488}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793526724} type= 
PROBLEM:
Find the length of a wire with parameterization $\textbf{r}(t)=\langle 3t+1,4-2t,5+2t\rangle ,0\le t\le 4.$
SOLUTION:
$4\sqrt{17}$
COMMENTARY: Hint
Find the line integral of one over the corresponding curve.
:::
:::

## Vector Line Integrals
The second type of line integrals are vector line integrals, in which we integrate along a curve through a vector field. For example, let

$\textbf{F}(x,y,z)=P(x,y,z)\textbf{i}+Q(x,y,z)\textbf{j}+R(x,y,z)\textbf{k}$  {eq:fs-id1167793414168}

be a continuous vector field in ${\mathbb{R}}^{3}$ that represents a force on a particle, and let *C* be a smooth curve in ${\mathbb{R}}^{3}$ contained in the domain of $\textbf{F}.$ How would we compute the work done by $\textbf{F}$ in moving a particle along *C*?
To answer this question, first note that a particle could travel in two directions along a curve: a forward direction and a backward direction. The work done by the vector field depends on the direction in which the particle is moving. Therefore, we must specify a direction along curve *C*; such a specified direction is called an {term:orientation of a curve}. The specified direction is the *positive* direction along *C*; the opposite direction is the *negative* direction along *C*. When *C* has been given an orientation, *C* is called an *oriented curve* ([ref:CNX_Calc_Figure_16_02_005]). The work done on the particle depends on the direction along the curve in which the particle is moving.
A {term:closed curve} is one for which there exists a parameterization $\textbf{r}(t),$ $a\le t\le b,$ such that $\textbf{r}(a)=\textbf{r}(b),$ and the curve is traversed exactly once. In other words, the parameterization is one-to-one on the domain $(a,b).$

> FIGURE {fig:CNX_Calc_Figure_16_02_005} src=../../media/CNX_Calc_Figure_16_02_005.jpg
> alt: Two images, labeled A and B. Image A shows a curve C that is an oriented curve. It is a curve that connects two points; it is a line segment with curves. Image B, on the other hand, is a closed curve. It has no endpoints and completely encloses an area.
> caption: (a) An oriented curve between two points. (b) A closed oriented curve.

Let $\textbf{r}(t)$ be a parameterization of *C* for $a\le t\le b$ such that the curve is traversed exactly once by the particle and the particle moves in the positive direction along *C*. Divide the parameter interval $[a,b]$ into *n* subintervals $[{t}_{i-1},{t}_{i}],0\le i\le n,$ of equal width. Denote the endpoints of $\textbf{r}({t}_{0}),\textbf{r}({t}_{1})\text{,…},\textbf{r}({t}_{n})$ by ${P}_{0}\text{,…},{P}_{n}.$ Points *P<sub>i</sub>* divide *C* into *n* pieces. Denote the length of the piece from *P<sub>i−1</sub>* to *P<sub>i</sub>* by $\text{Δ}{s}_{i}.$ For each *i*, choose a value ${t}_{i}^{*}$ in the subinterval $[{t}_{i-1},{t}_{i}].$ Then, the endpoint of $\textbf{r}({t}_{i}^{*})$ is a point in the piece of *C* between ${P}_{i-1}$ and *P<sub>i</sub>* ([ref:CNX_Calc_Figure_16_02_006]). If $\text{Δ}{s}_{i}$ is small, then as the particle moves from ${P}_{i-1}$ to ${P}_{i}$ along *C*, it moves approximately in the direction of $\textbf{T}({P}_{i}),$ the unit tangent vector at the endpoint of $\textbf{r}({t}_{i}^{*}).$ Let ${P}_{i}^{*}$ denote the endpoint of $\textbf{r}({t}_{i}^{*}).$ Then, the work done by the force vector field in moving the particle from ${P}_{i-1}$ to *P<sub>i</sub>* is $\textbf{F}({P}_{i}^{*})\cdot (\text{Δ}{s}_{i}\textbf{T}({P}_{i}^{*})),$ so the total work done along *C* is

${\displaystyle \sum_{i=1}^{n} \textbf{F}({P}_{i}^{*})\cdot (\text{Δ}{s}_{i}\textbf{T}({P}_{i}^{*}))}={\displaystyle \sum_{i=1}^{n} \textbf{F}({P}_{i}^{*})\cdot \textbf{T}({P}_{i}^{*})}\text{Δ}{s}_{i}.$  {eq:fs-id1167794314569}

> FIGURE {fig:CNX_Calc_Figure_16_02_006} src=../../media/CNX_Calc_Figure_16_02_006.jpg
> alt: An image of a concave down curve – initially increasing, but later decreasing. Several points are labeled along the curve, as are arrowheads along the curve pointing in the direction of increasing P value. The points are: P_0, P_1, P_i-1, P_i starred, P_i, P_n-1, and Pn. Two arrows have their endpoints at P_i. The first is an increasing tangent vector labeled T(P_i starred). The second is labeled F(P_i starred) and points up and to the left.
> caption: Curve *C* is divided into *n* pieces, and a point inside each piece is chosen. The dot product of any tangent vector in the *i*th piece with the corresponding vector **F** is approximated by $\textbf{F}({P}_{i}^{*})\cdot \textbf{T}({P}_{i}^{*}).$

Letting the arc length of the pieces of *C* get arbitrarily small by taking a limit as $n\to \infty$ gives us the work done by the field in moving the particle along *C*. Therefore, the work done by **F** in moving the particle in the positive direction along *C* is defined as

$W={\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds,}$  {eq:fs-id1167793432911}

which gives us the concept of a vector line integral.

:::note [definition] Definition
The {term:vector line integral} of vector field **F** along oriented smooth curve *C* is

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds=}\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} \textbf{F}({P}_{i}^{*})}\cdot \textbf{T}({P}_{i}^{*})\text{Δ}{s}_{i}$  {eq:fs-id1167794097279}

if that limit exists.
:::
With scalar line integrals, neither the orientation nor the parameterization of the curve matters. As long as the curve is traversed exactly once by the parameterization, the value of the line integral is unchanged. With vector line integrals, the orientation of the curve does matter. If we think of the line integral as computing work, then this makes sense: if you hike up a mountain, then the gravitational force of Earth does negative work on you. If you walk down the mountain by the exact same path, then Earth’s gravitational force does positive work on you. In other words, reversing the path changes the work value from negative to positive in this case. Note that if *C* is an oriented curve, then we let −*C* represent the same curve but with opposite orientation.
As with scalar line integrals, it is easier to compute a vector line integral if we express it in terms of the parameterization function **r** and the variable *t*. To translate the integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}$ in terms of *t*, note that unit tangent vector **T** along *C* is given by $\textbf{T}=\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|}$ (assuming $\| \mathbf{{r}^{'}}(t)\| ≠0).$ Since $ds=\| \mathbf{{r}^{'}}(t)\| dt,$ as we saw when discussing scalar line integrals, we have

$\textbf{F}\cdot \textbf{T}ds=\textbf{F}(\textbf{r}(t))\cdot \frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|}\| \mathbf{{r}^{'}}(t)\| dt=\textbf{F}(\textbf{r}(t))\cdot \mathbf{{r}^{'}}(t)dt.$  {eq:fs-id1167793638675}

Thus, we have the following formula for computing vector line integrals:

$$ {\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}={\displaystyle \int_{a}^{b}\textbf{F}(\textbf{r}(t))}\cdot \mathbf{{r}^{'}}(t)dt. $$  {eq:fs-id1167793635294}

Because of [ref:fs-id1167793635294], we often use the notation ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ for the line integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds.}$
If $\textbf{r}(t)=\langle x(t),y(t),z(t)\rangle ,$ then *d***r** denotes vector  differential $\langle {x}^{'}(t),{y}^{'}(t),{z}^{'}(t)\rangle dt.$

:::example {ex:fs-id1167794097200} Evaluating a Vector Line Integral

:::exercise {fs-id1167794097202} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$ where $C$ is the semicircle parameterized by $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,$ $0\le t\le \pi$ and $\textbf{F}=\langle \text{−}y,x\rangle .$
SOLUTION:
We can use [ref:fs-id1167793635294] to convert the variable of integration from *r* to *t*. We then have

$\textbf{F}(\textbf{r}(t))=\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle \;\text{and}\;\mathbf{{r}^{'}}(t)=\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle .$  {eq:fs-id1167793513011}

Therefore,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r} & ={\displaystyle \int_{0}^{\pi}\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle \cdot \langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle dt} \\ & ={\displaystyle \int_{0}^{\pi}{\text{sin}}^{2}t}+{\text{cos}}^{2}tdt \\ & ={\displaystyle \int_{0}^{\pi}1dt}=\pi .\end{array}$  {eq:fs-id1167794020801}

See [ref:CNX_Calc_Figure_16_02_007].

> FIGURE {fig:CNX_Calc_Figure_16_02_007} src=../../media/CNX_Calc_Figure_16_02_007.jpg
> alt: A vector field in two dimensions. The closer the arrows are to the origin, the smaller they are. The further away they are, the longer they are. The arrows surround the origin in a radial pattern. A single curve is plotted and follows the radial pattern in quadrants 1 and 2 over the interval [-1,1]. It is a concave down arch that looks like a downward opening parabola.
> caption: This figure shows curve $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,0\le t\le \pi$ in vector field $\textbf{F}=\langle \text{−}y,x\rangle .$

:::
:::

:::example {ex:fs-id1167793234102} Reversing Orientation

:::exercise {fs-id1167794094405} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$ where $C$ is the semicircle parameterized by $\textbf{r}(t)=\langle \text{cos}\;(t+\pi ),\text{sin}\;t\rangle ,0\le t\le \pi$ and $\textbf{F}=\langle \text{−}y,x\rangle .$
SOLUTION:
Notice that this is the same problem as [ref:fs-id1167794097200], except the orientation of the curve has been reversed. In this example, the parameterization starts at $\textbf{r}(0)=\langle –1,0\rangle$ and ends at $\textbf{r}(\pi )=\langle 1,0\rangle .$ By [ref:fs-id1167793635294],

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r} & ={\displaystyle \int_{0}^{\pi}\langle \text{−}\text{sin}\;t,\text{cos}\;(t+\pi )\rangle \cdot \langle \text{−}\text{sin}\;(t+\pi ),\text{cos}\;t\rangle dt} \\ & ={\displaystyle \int_{0}^{\pi}\langle \text{−}\text{sin}\;t,\text{−}\text{cos}\;t\rangle \cdot \langle \text{sin}\;t,\text{cos}\;t\rangle dt} \\ & ={\displaystyle \int_{0}^{\pi}(\text{−}{\text{sin}}^{2}t-{\text{cos}}^{2}t)dt} \\ & ={\displaystyle \int_{0}^{\pi}−1dt} \\ & =\text{−}\pi .\end{array}$  {eq:fs-id1167793499682}

Notice that this is the negative of the answer in [ref:fs-id1167794097200]. It makes sense that this answer is negative because the orientation of the curve goes against the “flow” of the vector field.
:::
:::
Let *C* be an oriented curve and let −*C* denote the same curve but with the orientation reversed. Then, the previous two examples illustrate the following fact:

${\displaystyle \int_{–C}\textbf{F}\cdot d\textbf{r}=\text{−}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}}.$  {eq:fs-id1167793944043}

That is, reversing the orientation of a curve changes the sign of a line integral.

:::note [checkpoint] 

:::exercise {fs-id1167793402045} type= 
PROBLEM:
Let $\textbf{F}=x\textbf{i}+y\textbf{j}$ be a vector field and let *C* be the curve with parameterization $\langle t,{t}^{2}\rangle$ for $0\le t\le 2.$ Which is greater: ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}$ or ${\displaystyle \int_{\text{−}C}\textbf{F}\cdot \textbf{T}ds}?$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}}ds$
COMMENTARY: Hint
Imagine moving along the path and computing the dot product $\textbf{F}\cdot \textbf{T}$ as you go.
:::
:::
Another standard notation for integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ is ${\displaystyle \int_{C}Pdx+Qdy+Rdz.}$ In this notation, *P*, *Q*, and *R* are functions, and we think of *d***r** as vector $\langle dx,dy,dz\rangle .$ To justify this convention, recall that $d\textbf{r}=\textbf{T}ds=\mathbf{{r}^{'}}(t)dt=\langle \frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\rangle dt.$ Therefore,

$\textbf{F}\cdot d\textbf{r}=\langle P,Q,R\rangle \cdot \langle dx,dy,dz\rangle =Pdx+Qdy+Rdz.$  {eq:fs-id1167793945663}

If $d\textbf{r}=\langle dx,dy,dz\rangle ,$ then $\frac{d\textbf{r}}{dt}=\langle \frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\rangle ,$ which implies that $d\textbf{r}=\langle \frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\rangle dt.$ Therefore

$$ \begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{C}Pdx+Qdy+Rdz} \\ & =\int (P(\textbf{r}(t))\frac{dx}{dt}+Q(\textbf{r}(t))\frac{dy}{dt}+R(\textbf{r}(t))\frac{dz}{dt})dt.\end{array} $$  {eq:fs-id1167794127155}

:::example {ex:fs-id1167793719891} Finding the Value of an Integral of the Form ${\displaystyle \int_{C}Pdx+Qdy+Rdz}$

:::exercise {fs-id1167793719893} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}zdx+xdy+ydz,}$ where *C* is the curve parameterized by $\textbf{r}(t)=\langle {t}^{2},\sqrt{t},t\rangle ,1\le t\le 4.$
SOLUTION:
As with our previous examples, to compute this line integral we should perform a change of variables to write everything in terms of *t*. In this case, [ref:fs-id1167794127155] allows us to make this change:

$\begin{array}{rl}{\displaystyle \int_{C}z}dx+xdy+ydz & ={\displaystyle \int_{1}^{4}(t(2t)+{t}^{2}(\frac{1}{2\sqrt{t}})+\sqrt{t})dt} \\ & ={\displaystyle \int_{1}^{4}(2{t}^{2}+\frac{{t}^{3\text{/}2}}{2}+\sqrt{t})dt} \\ & ={[\frac{2{t}^{3}}{3}+\frac{{t}^{5\text{/}2}}{5}+\frac{2{t}^{3\text{/}2}}{3}]}_{t=1}^{t=4} \\ & =\frac{793}{15}.\end{array}$  {eq:fs-id1167793611942}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793423597} type= 
PROBLEM:
Find the value of ${\displaystyle \int_{C}4xdx+zdy+4{y}^{2}dz,}$ where $C$ is the curve parameterized by $\textbf{r}(t)=\langle 4\;\text{cos}(2t),2\;\text{sin}(2t),3\rangle ,0\le t\le \frac{\pi}{4}.$
SOLUTION:
$−26$
COMMENTARY: Hint
Write the integral in terms of *t* using [ref:fs-id1167793635294].
:::
:::
We have learned how to integrate smooth oriented curves. Now, suppose that *C* is an oriented curve that is not smooth, but can be written as the union of finitely many smooth curves. In this case, we say that *C* is a {term:piecewise smooth curve}. To be precise, curve *C* is piecewise smooth if *C* can be written as a union of *n* smooth curves ${C}_{1},{C}_{2}\text{,…},{C}_{n}$ such that the endpoint of ${C}_{i}$ is the starting point of ${C}_{i+1}$ ([ref:CNX_Calc_Figure_16_02_008]). When curves ${C}_{i}$ satisfy the condition that the endpoint of ${C}_{i}$ is the starting point of ${C}_{i+1},$ we write their union as ${C}_{1}+{C}_{2}+⋯+{C}_{n}.$

> FIGURE {fig:CNX_Calc_Figure_16_02_008} src=../../media/CNX_Calc_Figure_16_02_008.jpg
> alt: Three curves: C_1, C_2, and C_3. One of the endpoints of C_2 is also an endpoint of C_1, and the other endpoint of C_2 is also an end point of C_3. C_1’s and C_3’s other endpoints are not connect to any other curve. C_1 and C_3 appear to be nearly straight lines while C_2 is an increasing concave down curve. There are three arrowheads on each curve segment all pointing in the same direction: C_1 to C_2, C_2 to C_3, and C_3 to its other endpoint.
> caption: The union of ${C}_{1},{C}_{2},{C}_{3}$ is a piecewise smooth curve.

The next theorem summarizes several key properties of vector line integrals.

:::note [theorem] Properties of Vector Line Integrals
Let **F** and **G** be continuous vector fields with domains that include the oriented smooth curve *C*. Then
1. ${\displaystyle \int_{C}(\textbf{F}+\textbf{G})\cdot d\textbf{r}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{C}\textbf{G}\cdot d\textbf{r}}$
2. ${\displaystyle \int_{C}k\textbf{F}\cdot d\textbf{r}}=k{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$ where *k* is a constant
3. ${\displaystyle \int_{\text{−}C}\textbf{F}\cdot d\textbf{r}=}{\displaystyle \text{−}\int_{C}\textbf{F}\cdot d\textbf{r}}$
4. Suppose instead that *C* is a piecewise smooth curve in the domains of **F** and **G**, where $C={C}_{1}+{C}_{2}+⋯+{C}_{n}$ and ${C}_{1},{C}_{2}\text{,…},{C}_{n}$ are smooth curves such that the endpoint of ${C}_{i}$ is the starting point of ${C}_{i+1}.$ Then

$\int_{C}\text{F}\cdot d\text{r}=\int_{{C}_{1}}\text{F}\cdot d\text{r}+\int_{{C}_{2}}\text{F}\cdot d\text{r}+⋯+\int_{{C}_{n}}\text{F}\cdot d\text{r}.$  {eq:fs-id1167793591278}

:::
Notice the similarities between these items and the properties of single-variable integrals. Properties i. and ii. say that line integrals are linear, which is true of single-variable integrals as well. Property iii. says that reversing the orientation of a curve changes the sign of the integral. If we think of the integral as computing the work done on a particle traveling along *C*, then this makes sense. If the particle moves backward rather than forward, then the value of the work done has the opposite sign. This is analogous to the equation ${\displaystyle \int_{a}^{b}f(x)dx=\text{−}{\displaystyle \int_{b}^{a}f(x)dx.}}$ Finally, if $[{a}_{1},{a}_{2}],[{a}_{2},{a}_{3}]\text{,…},[{a}_{n-1},{a}_{n}]$ are intervals, then

${\displaystyle \int_{{a}_{1}}^{{a}_{n}}f(x)dx=}{\displaystyle \int_{{a}_{1}}^{{a}_{2}}f(x)dx}+{\displaystyle \int_{{a}_{2}}^{{a}_{3}}f(x)dx+⋯+{\displaystyle \int_{{a}_{n-1}}^{{a}_{n}}f(x)dx}},$  {eq:fs-id1167793624613}

which is analogous to property iv.

:::example {ex:fs-id1167794143327} Using Properties to Compute a Vector Line Integral

:::exercise {fs-id1167794143329} type= 
PROBLEM:
Find the value of integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}}ds,$ where *C* is the rectangle (oriented counterclockwise) in a plane with vertices $(0,0),(2,0),(2,1),\;\text{and}\;(0,1),$ and where $\textbf{F}=\langle x-2y,y-x\rangle$ ([ref:CNX_Calc_Figure_16_02_009]).

> FIGURE {fig:CNX_Calc_Figure_16_02_009} src=../../media/CNX_Calc_Figure_16_02_009.jpg
> alt: A vector field in two dimensions. The arrows following roughly a 90-degree angle to the origin in quadrants 1 and 3 point to the origin. As the arrows deviate from this angle, they point away from the angle ad become smaller. Above, they point up and to the left, and below, they point down and to the right. A rectangle is drawn in quadrant 1 from 0 to 2 on the x axis and from 0 to 1 on the y axis. C_1 is the base, C_2 is the right leg, C_3 is the top, and C_4 is the left leg.
> caption: Rectangle and vector field for [ref:fs-id1167794143327].

SOLUTION:
Note that curve *C* is the union of its four sides, and each side is smooth. Therefore *C* is piecewise smooth. Let ${C}_{1}$ represent the side from $(0,0)$ to $(2,0),$ let ${C}_{2}$ represent the side from $(2,0)$ to $(2,1),$ let ${C}_{3}$ represent the side from $(2,1)$ to $(0,1),$ and let ${C}_{4}$ represent the side from $(0,1)$ to $(0,0)$ ([ref:CNX_Calc_Figure_16_02_009]). Then,

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}d\textbf{r}}={\displaystyle \int_{{C}_{1}}\textbf{F}\cdot \textbf{T}d\textbf{r}}+{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot \textbf{T}d\textbf{r}}+{\displaystyle \int_{{C}_{3}}\textbf{F}\cdot \textbf{T}d\textbf{r}}+{\displaystyle \int_{{C}_{4}}\textbf{F}\cdot \textbf{T}d\textbf{r}}.$  {eq:fs-id1167793925445}

We want to compute each of the four integrals on the right-hand side using [ref:fs-id1167793952322]. Before doing this, we need a parameterization of each side of the rectangle. Here are four parameterizations (note that they traverse *C* counterclockwise):

$\begin{array}{l}{C}_{1}:\langle t,0\rangle ,0\le t\le 2 \\ {C}_{2}:\langle 2,t\rangle ,0\le t\le 1 \\ {C}_{3}:\langle 2-t,1\rangle ,0\le t\le 2 \\ {C}_{4}:\langle 0,1-t\rangle ,0\le t\le 1.\end{array}$  {eq:fs-id1167794126739}

Therefore,

$\begin{array}{ll}\int_{{C}_{1}}\text{F}\cdot \text{T}d\text{r} & =\int_{0}^{2}\text{F}(\text{r}(t))\cdot {r}^{'}(t)dt \\ & =\int_{0}^{2}\langle t-2(0),0-t\rangle \cdot \langle 1,0\rangle dt=\int_{0}^{2}tdt \\ & ={[\frac{{t}^{2}}{2}]}_{0}^{2}=2.\end{array}$  {eq:fs-id1167793696494}

Notice that the value of this integral is positive, which should not be surprising. As we move along curve *C<sub>1</sub>* from left to right, our movement flows in the general direction of the vector field itself. At any point along *C<sub>1</sub>*, the tangent vector to the curve and the corresponding vector in the field form an angle that is less than 90°. Therefore, the tangent vector and the force vector have a positive dot product all along *C<sub>1</sub>*, and the line integral will have positive value.
The calculations for the three other line integrals are done similarly:

$\begin{array}{rl}{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{0}^{1}\langle 2-2t,t-2\rangle}\cdot \langle 0,1\rangle dt \\ & ={\displaystyle \int_{0}^{1}(t-2)dt} \\ & ={[\frac{{t}^{2}}{2}-2t]}_{0}^{1}=-\frac{3}{2},\end{array}$  {eq:fs-id1167793294460}

$\begin{array}{rl}{\displaystyle \int_{{C}_{3}}\textbf{F}\cdot \textbf{T}ds} & ={\displaystyle \int_{0}^{2}\langle (2-t)-2,1-(2-t)\rangle}\cdot \langle −1,0\rangle dt \\ & ={\displaystyle \int_{0}^{2}tdt}=2,\end{array}$  {eq:fs-id1167793451682}

and

$\begin{array}{rl}{\displaystyle \int_{{C}_{4}}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{0}^{1}\langle −2(1-t),1-t\rangle}\cdot \langle 0,−1\rangle dt \\ & ={\displaystyle \int_{0}^{1}(t-1)dt} \\ & ={[\frac{{t}^{2}}{2}-t]}_{0}^{1}=-\frac{1}{2}.\end{array}$  {eq:fs-id1167793638507}

Thus, we have ${\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r}=2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793375472} type= 
PROBLEM:
Calculate line integral ${\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r},$ where **F** is vector field $\langle {y}^{2},2xy+1\rangle$ and *C* is a triangle with vertices $(0,0),$ $(4,0),$ and $(0,5),$ oriented counterclockwise.
SOLUTION:
0
COMMENTARY: Hint
Write the triangle as a union of its three sides, then calculate three separate line integrals.
:::
:::

## Applications of Line Integrals
Scalar line integrals have many applications. They can be used to calculate the length or mass of a wire, the surface area of a sheet of a given height, or the electric potential of a charged wire given a linear charge density. Vector line integrals are extremely useful in physics. They can be used to calculate the work done on a particle as it moves through a force field, or the flow rate of a fluid across a curve. Here, we calculate the {index:mass of a wire} using a scalar line integral and the work done by a force using a vector line integral.
Suppose that a piece of wire is modeled by curve *C* in space. The mass per unit length (the linear density) of the wire is a continuous function $ρ(x,y,z).$ We can calculate the total mass of the wire using the scalar line integral ${\displaystyle \int_{C}ρ(x,y,z)ds.}$ The reason is that mass is density multiplied by length, and therefore the density of a small piece of the wire can be approximated by $ρ(x*,y*,z*)\text{Δ}s$ for some point $(x*,y*,z*)$ in the piece. Letting the length of the pieces shrink to zero with a limit yields the line integral ${\displaystyle \int_{C}ρ(x,y,z)ds.}$

:::example {ex:fs-id1167793978384} Calculating the Mass of a Wire

:::exercise {fs-id1167793978386} type= 
PROBLEM:
Calculate the mass of a spring in the shape of a curve parameterized by $\langle t,2\;\text{cos}\;t,2\;\text{sin}\;t\rangle ,$ $0\le t\le \frac{\pi}{2},$ with a density function given by $ρ(x,y,z)={e}^{x}+yz$ kg/m ([ref:CNX_Calc_Figure_16_02_010]).

> FIGURE {fig:CNX_Calc_Figure_16_02_010} src=../../media/CNX_Calc_Figure_16_02_010.jpg
> alt: A three dimensional diagram. An increasing, then slightly decreasing concave down curve is drawn from (0,2,0) to (pi/2, 0, 2). The arrow on the curve is pointing to the latter endpoint.
> caption: The wire from [ref:fs-id1167793978384].

SOLUTION:
To calculate the mass of the spring, we must find the value of the scalar line integral ${\displaystyle \int_{C}({e}^{x}+yz)ds},$ where *C* is the given helix. To calculate this integral, we write it in terms of *t* using [ref:fs-id1167793952322]:

$\begin{array}{rl}{\displaystyle \int_{C}{e}^{x}}+yzds & ={\displaystyle \int_{0}^{\pi \text{/}2}(({e}^{t}+4\;\text{cos}\;t\;\text{sin}\;t)\sqrt{1+{(−2\;\text{cos}\;t)}^{2}+{(2\;\text{sin}\;t)}^{2}})dt} \\ & ={\displaystyle \int_{0}^{\pi \text{/}2}(({e}^{t}+4\;\text{cos}\;t\;\text{sin}\;t)\sqrt{5})dt} \\ & =\sqrt{5}{[{e}^{t}+2\;{\text{sin}}^{2}t]}_{t=0}^{t=\pi \text{/}2} \\ & =\sqrt{5}({e}^{\pi \text{/}2}+1).\end{array}$  {eq:fs-id1167794054229}

Therefore, the mass is $\sqrt{5}({e}^{\pi \text{/}2}+1)$ kg.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793568657} type= 
PROBLEM:
Calculate the mass of a spring in the shape of a helix parameterized by $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,t\rangle ,0\le t\le 6\pi ,$ with a density function given by $ρ(x,y,z)=x+y+z$ kg/m.
SOLUTION:
$18\sqrt{2}{\pi}^{2}$ kg
COMMENTARY: Hint
Calculate the line integral of $ρ$ over the curve with parameterization **r**.
:::
:::
When we first defined vector line integrals, we used the concept of work to motivate the definition. Therefore, it is not surprising that calculating the {index:work done by a vector field} representing a force is a standard use of vector line integrals. Recall that if an object moves along curve *C* in force field **F**, then the work required to move the object is given by ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$

:::example {ex:fs-id1167793979078} Calculating Work

:::exercise {fs-id1167793979080} type= 
PROBLEM:
How much work is required to move an object in vector force field $\textbf{F}=\langle yz,xy,xz\rangle$ along path $\textbf{r}(t)=\langle {t}^{2},t,{t}^{4}\rangle ,$ $0\le t\le 1?$ See [ref:CNX_Calc_Figure_16_02_011].
SOLUTION:
Let *C* denote the given path. We need to find the value of ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$ To do this, we use [ref:fs-id1167793635294]:

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r} & ={\displaystyle \int_{0}^{1}(\langle {t}^{5},{t}^{3},{t}^{6}\rangle \cdot \langle 2t,1,4{t}^{3}\rangle )dt} \\ & ={\displaystyle \int_{0}^{1}(2{t}^{6}+{t}^{3}+4{t}^{9})dt} \\ & ={[\frac{2{t}^{7}}{7}+\frac{{t}^{4}}{4}+\frac{2{t}^{10}}{5}]}_{t=0}^{t=1}=\frac{131}{140}.\end{array}$  {eq:fs-id1167793631821}

> FIGURE {fig:CNX_Calc_Figure_16_02_011} src=../../media/CNX_Calc_Figure_16_02_011.jpg
> alt: A three dimensional diagram of the curve and vector field for the example. The curve is an increasing concave up curve starting close to the origin and above the x axis. As the curve goes left above the (x,y) plane, the height also increases. The arrows in the vector field get longer as the z component becomes larger.
> caption: The curve and vector field for [ref:fs-id1167793979078].

:::
:::

## Flux and Circulation
We close this section by discussing two key concepts related to line integrals: flux across a plane curve and circulation along a plane curve. Flux is used in applications to calculate fluid flow across a curve, and the concept of circulation is important for characterizing conservative gradient fields in terms of line integrals. Both these concepts are used heavily throughout the rest of this chapter. The idea of flux is especially important for Green’s theorem, and in higher dimensions for Stokes’ theorem and the divergence theorem.
Let *C* be a plane curve and let **F** be a vector field in the plane. Imagine *C* is a membrane across which fluid flows, but *C* does not impede the flow of the fluid. In other words, *C* is an idealized membrane invisible to the fluid. Suppose **F** represents the velocity field of the fluid. How could we quantify the rate at which the fluid is crossing *C*?
Recall that the line integral of **F** along *C* is ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}$—in other words, the line integral is the dot product of the vector field with the unit tangential vector with respect to arc length. If we replace the unit tangential vector with unit normal vector $\textbf{N}(t)$ and instead compute integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds},$ we determine the flux across *C*. To be precise, the definition of integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}$ is the same as integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds},$ except the **T** in the Riemann sum is replaced with **N**. Therefore, the flux across *C* is defined as

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds=}\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} \textbf{F}({P}_{i}^{*})}\cdot \textbf{N}({P}_{i}^{*})\text{Δ}{s}_{i},$  {eq:fs-id1167794287535}

where ${P}_{i}^{*}$ and $\text{Δ}{s}_{i}$ are defined as they were for integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}.$ Therefore, a flux integral is an integral that is *perpendicular* to a vector line integral, because **N** and **T** are perpendicular vectors.
If **F** is a velocity field of a fluid and *C* is a curve that represents a membrane, then the flux of **F** across *C* is the quantity of fluid flowing across *C* per unit time, or the rate of flow.
More formally, let *C* be a plane curve parameterized by $\textbf{r}(t)=\langle x(t),y(t)\rangle ,$ $a\le t\le b.$ Let $\textbf{n}(t)=\langle {y}^{'}(t),\text{−}{x}^{'}(t)\rangle$ be the vector that is normal to *C* at the endpoint of $\textbf{r}(t)$ and points to the right as we traverse *C* in the positive direction ([ref:CNX_Calc_Figure_16_02_012]). Then, $\textbf{N}(t)=\frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}$ is the unit normal vector to *C* at the endpoint of $\textbf{r}(t)$ that points to the right as we traverse *C*.

:::note [definition] Definition
The {term:flux} of **F** across *C* is line integral ${\displaystyle \int_{C}\textbf{F}\cdot \frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}}ds.$
:::

> FIGURE {fig:CNX_Calc_Figure_16_02_012} src=../../media/CNX_Calc_Figure_16_02_012.jpg
> alt: A simple diagram of an increasing concave down curve C in vector field F, with no coordinate plane. Towards the top of the curve, the normal n is drawn perpendicular to the curve C. Another arrow F is drawn sharing n’s endpoint. This flux points up and to the right at about a 90-degree angle to n. The arrows in the vector field to the left of n are drawn pointing straight up. The arrows after n point in the same direction as the flux.
> caption: The flux of vector field **F** across curve *C* is computed by an integral similar to a vector line integral.

We now give a formula for calculating the flux across a curve. This formula is analogous to the formula used to calculate a vector line integral (see [ref:fs-id1167793635294]).

:::note [theorem] Calculating Flux across a Curve
Let **F** be a vector field and let *C* be a smooth curve with parameterization $\textbf{r}(t)=\langle x(t),y(t)\rangle ,a\le t\le b.$ Let $\textbf{n}(t)=\langle {y}^{'}(t),\text{−}{x}^{'}(t)\rangle .$ The flux of **F** across *C* is

$$ {\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds={\displaystyle \int_{a}^{b}\textbf{F}(\textbf{r}(t))\cdot \textbf{n}(t)dt}} $$  {eq:fs-id1167793671510}

:::

### Proof
The proof of [ref:fs-id1167793671510] is similar to the proof of [ref:fs-id1167793952322]. Before deriving the formula, note that $\| \textbf{n}(t)\| =\| \langle y'(t),\text{−}x'(t)\rangle \| =\sqrt{{(y'(t))}^{2}+{(x'(t))}^{2}}=\| \mathbf{{r}^{'}}(t)\| .$ Therefore,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot \textbf{N}ds & ={\displaystyle \int_{C}\textbf{F}\cdot \frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}ds} \\ & ={\displaystyle \int_{a}^{b}\textbf{F}\cdot \frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}\| \mathbf{{r}^{'}}(t)\| dt} \\ & ={\displaystyle \int_{a}^{b}\textbf{F}(\textbf{r}(t))\cdot \textbf{n}(t)dt}.\end{array}$  {eq:fs-id1167793927682}

□

:::example {ex:fs-id1167793385066} Flux across a Curve

:::exercise {fs-id1167793385068} type= 
PROBLEM:
Calculate the flux of $\textbf{F}=\langle 2x,2y\rangle$ across a unit circle oriented counterclockwise ([ref:CNX_Calc_Figure_16_02_013]).

> FIGURE {fig:CNX_Calc_Figure_16_02_013} src=../../media/CNX_Calc_Figure_16_02_013.jpg
> alt: A unit circle in a vector field in two dimensions. The arrows point away from the origin in a radial pattern. Shorter vectors are near the origin, and longer ones are further away. A unit circle is drawn around the origin to fit the pattern, and arrowheads are drawn on the circle in a counterclockwise manner.
> caption: A unit circle in vector field $\textbf{F}=\langle 2x,2y\rangle .$

SOLUTION:
To compute the flux, we first need a parameterization of the unit circle. We can use the standard parameterization $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,$ $0\le t\le 2\pi .$ The normal vector to a unit circle is $\langle \text{cos}\;t,\text{sin}\;t\rangle .$ Therefore, the flux is

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}}ds & ={\displaystyle \int_{0}^{2\pi}\langle 2\;\text{cos}\;t,2\;\text{sin}\;t\rangle \cdot \langle \text{cos}\;t,\text{sin}\;t\rangle}\;dt \\ & ={\displaystyle \int_{0}^{2\pi}(2\;{\text{cos}}^{2}t+2\;{\text{sin}}^{2}t)}\;dt=2{\displaystyle \int_{0}^{2\pi}({\text{cos}}^{2}t+{\text{sin}}^{2}t)}\;dt \\ & =2{\displaystyle \int_{0}^{2\pi}dt}=4\pi .\end{array}$  {eq:fs-id1167793570818}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794287652} type= 
PROBLEM:
Calculate the flux of $\textbf{F}=\langle x+y,2y\rangle$ across the line segment from $(0,0)$ to $(2,3),$ where the curve is oriented from left to right.
SOLUTION:
3/2
COMMENTARY: Hint
Use [ref:fs-id1167793671510].
:::
:::
Let $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle$ be a two-dimensional vector field. Recall that integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}}ds$ is sometimes written as ${\displaystyle \int_{C}Pdx+Qdy}.$ Analogously, flux ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}$ is sometimes written in the notation ${\displaystyle \int_{C}\text{−}Qdx+Pdy,}$ because the unit normal vector **N** is perpendicular to the unit tangent **T**. Rotating the vector $d\textbf{r}=\langle dx,dy\rangle$ by 90° results in vector $\langle dy,\text{−}dx\rangle .$ Therefore, the line integral in [ref:fs-id1167794143327] can be written as ${\displaystyle \int_{C}−2ydx+2xdy}.$
Now that we have defined flux, we can turn our attention to circulation. The line integral of vector field **F** along an oriented closed curve is called the {term:circulation} of **F** along *C*. Circulation line integrals have their own notation: ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}.$ The circle on the integral symbol denotes that *C* is “circular” in that it has no endpoints. [ref:fs-id1167794097200] shows a calculation of circulation.
To see where the term *circulation* comes from and what it measures, let **v** represent the velocity field of a fluid and let *C* be an oriented closed curve. At a particular point *P*, the closer the direction of **v**(*P*) is to the direction of **T**(*P*), the larger the value of the dot product $\textbf{v}(P)\cdot \textbf{T}(P).$ The maximum value of $\textbf{v}(P)\cdot \textbf{T}(P)$ occurs when the two vectors are pointing in the exact same direction; the minimum value of $\textbf{v}(P)\cdot \textbf{T}(P)$ occurs when the two vectors are pointing in opposite directions. Thus, the value of the circulation ${\displaystyle \int_{C}\textbf{v}\cdot \textbf{T}ds}$ measures the tendency of the fluid to move in the direction of *C*.

:::example {ex:fs-id1167794212210} Calculating Circulation

:::exercise {fs-id1167794212212} type= 
PROBLEM:
Let $\textbf{F}=\langle -y,x\rangle$ be the vector field from [ref:fs-id1167793925140] and let *C* represent the unit circle oriented counterclockwise. Calculate the circulation of **F** along *C*.
SOLUTION:
We use the standard parameterization of the unit circle: $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,0\le t\le 2\pi .$ Then, $\textbf{F}(\textbf{r}(t))=\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle$ and $\mathbf{{r}^{'}}(t)=\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle .$ Therefore, the circulation of **F** along *C* is

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot \textbf{T}ds & ={\displaystyle \int_{0}^{2\pi}\langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle \cdot \langle \text{−}\text{sin}\;t,\text{cos}\;t\rangle dt} \\ & ={\displaystyle \int_{0}^{2\pi}({\text{sin}}^{2}t+{\text{cos}}^{2}t)}\;dt \\ & ={\displaystyle \int_{0}^{2\pi}dt}=2\pi .\end{array}$  {eq:fs-id1167793551233}

Notice that the circulation is positive. The reason for this is that the orientation of *C* “flows” with the direction of **F**. At any point along the circle, the tangent vector and the vector from **F** form an angle of less than 90°, and therefore the corresponding dot product is positive.
:::
:::
In [ref:fs-id1167794212210], what if we had oriented the unit circle clockwise? We denote the unit circle oriented clockwise by $\text{−}C.$ Then

${\displaystyle \int_{\text{−}C}\textbf{F}\cdot \textbf{T}}ds=\text{−}{\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}}ds=−2\pi .$  {eq:fs-id1167793924520}

Notice that the circulation is negative in this case. The reason for this is that the orientation of the curve flows against the direction of **F**.

:::note [checkpoint] 

:::exercise {fs-id1167793491066} type= 
PROBLEM:
Calculate the circulation of $\textbf{F}(x,y)=\langle -\frac{y}{{x}^{2}+{y}^{2}},\frac{x}{{x}^{2}+{y}^{2}}\rangle$ along a unit circle oriented counterclockwise.
SOLUTION:
$2\pi$
COMMENTARY: Hint
Use [ref:fs-id1167793635294].
:::
:::

:::example {ex:fs-id1167793401584} Calculating Work

:::exercise {fs-id1167793401587} type= 
PROBLEM:
Calculate the work done on a particle that traverses circle *C* of radius 2 centered at the origin, oriented counterclockwise, by field $\textbf{F}(x,y)=\langle −2,y\rangle .$ Assume the particle starts its movement at $(1,0).$
SOLUTION:
The work done by **F** on the particle is the circulation of **F** along *C*: ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}.$ We use the parameterization $\textbf{r}(t)=\langle 2\;\text{cos}\;t,2\;\text{sin}\;t\rangle ,0\le t\le 2\pi$ for *C*. Then, $\mathbf{{r}^{'}}(t)=\langle −2\;\text{sin}\;t,2\;\text{cos}\;t\rangle$ and $\textbf{F}(\textbf{r}(t))=\langle −2,2\;\text{sin}\;t\rangle .$ Therefore, the circulation of **F** along *C* is

$\begin{array}{rl}{\displaystyle \int_{C}}\textbf{F}\cdot \textbf{T}ds & ={\displaystyle \int_{0}^{2\pi}\langle −2,2\;\text{sin}\;t\rangle \cdot \langle −2\;\text{sin}\;t,2\;\text{cos}\;t\rangle dt} \\ & ={\displaystyle \int_{0}^{2\pi}(4\;\text{sin}\;t+4\;\text{sin}\;t\;\text{cos}\;t)dt} \\ & ={[−4\;\text{cos}\;t+4\;{\text{sin}}^{2}t]}_{0}^{2\pi} \\ & =(−4\;\text{cos}(2\pi )+2\;{\text{sin}}^{2}(2\pi ))-(−4\;\text{cos}(0)+4\;{\text{sin}}^{2}(0)) \\ & =−4+4=0.\end{array}$  {eq:fs-id1167793463655}

The force field does zero work on the particle.
Notice that the circulation of **F** along *C* is zero. Furthermore, notice that since **F** is the gradient of $f(x,y)=−2x+\frac{{y}^{2}}{2},$ **F** is conservative. We prove in a later section that under certain broad conditions, the circulation of a conservative vector field along a closed curve is zero.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793722684} type= 
PROBLEM:
Calculate the work done by field $\textbf{F}(x,y)=\langle 2x,3y\rangle$ on a particle that traverses the unit circle. Assume the particle begins its movement at $(−1,0).$
SOLUTION:
0
COMMENTARY: Hint
Use [ref:fs-id1167793635294].
:::
:::

## Key Concepts {section:key-concepts}
- Line integrals generalize the notion of a single-variable integral to higher dimensions. The domain of integration in a single-variable integral is a line segment along the *x*-axis, but the domain of integration in a line integral is a curve in a plane or in space.
- If *C* is a curve, then the length of *C* is ${\displaystyle \int_{C}ds}.$
- There are two kinds of line integral: scalar line integrals and vector line integrals. Scalar line integrals can be used to calculate the mass of a wire; vector line integrals can be used to calculate the work done on a particle traveling through a field.
- Scalar line integrals can be calculated using [ref:fs-id1167793952322]; vector line integrals can be calculated using [ref:fs-id1167793635294].
- Two key concepts expressed in terms of line integrals are flux and circulation. Flux measures the rate that a field crosses a given line; circulation measures the tendency of a field to move in the same direction as a given closed curve.

## Key Equations {section:key-equations}

> TABLE {tab:eip-557} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Calculating a scalar line integral** | ${\displaystyle \int_{C}f(x,y,z)ds={\displaystyle \int_{a}^{b}f(\textbf{r}(t))\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}+{({z}^{'}(t))}^{2}}dt}}$ |
| **Calculating a vector line integral** | ${\displaystyle \int_{C}\textbf{F}\cdot dr}={\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}={\displaystyle \int_{a}^{b}\textbf{F}(\textbf{r}(t))\cdot \mathbf{{r}^{'}}(t)dt}$<br> or<br> ${\displaystyle \int_{C}Pdx+Qdy+Rdz}={\displaystyle \int_{a}^{b}(P(\textbf{r}(t))\frac{dx}{dt}+Q(\textbf{r}(t))\frac{dy}{dt}+R(\textbf{r}(t))\frac{dz}{dt})dt}$ |
| **Calculating flux** | ${\displaystyle \int_{C}\textbf{F}\cdot \frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}}\;ds={\displaystyle \int_{a}^{b}\textbf{F}(\textbf{r}(t))\cdot \textbf{n}(t)dt}$ |

##  {section:section-exercises}

:::exercise {fs-id1167793234249} type= 
PROBLEM:
*True or False?* Line integral ${\displaystyle \int_{C}^{}f(x,y)ds}$ is equal to a definite integral if *C* is a smooth curve defined on $[a,b]$ and if function $f$ is continuous on some region that contains curve *C*.
SOLUTION:
True
:::

:::exercise {fs-id1167793452354} type= 
PROBLEM:
*True or False?* Vector functions ${\textbf{r}}_{1}=t\textbf{i}+{t}^{2}\textbf{j},$ $0\le t\le 1,$ and ${\textbf{r}}_{2}=(1-t)\textbf{i}+{(1-t)}^{2}\textbf{j},$ $0\le t\le 1,$ define the same oriented curve.
:::

:::exercise {fs-id1167793688256} type= 
PROBLEM:
*True or False?* ${\displaystyle \int_{\text{−}C}^{}(Pdx+Qdy)={\displaystyle \int_{C}^{}(Pdx-Qdy)}}$
SOLUTION:
False
:::

:::exercise {fs-id1167793566587} type= 
PROBLEM:
*True or False?* A piecewise smooth curve *C* consists of a finite number of smooth curves that are joined together end to end.
:::

:::exercise {fs-id1167793490620} type= 
PROBLEM:
*True or False?* If *C* is given by $x(t)=t\text{,}\;y(t)=t\text{, 0}\le \text{t}\le 1,$ then ${\displaystyle \int_{C}^{}xyds={\displaystyle \int_{0}^{1}{t}^{2}dt}}.$
SOLUTION:
False
:::
For the following exercises, use a computer algebra system (CAS) to evaluate the line integrals over the indicated path.

:::exercise {fs-id1167793829030} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{C}^{}(x+y)ds}$
$C\text{:}\;x=t,y=(1-t)\text{,}\;z=0$ from (0, 1, 0) to (1, 0, 0)
:::

:::exercise {fs-id1167793246898} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{C}^{}(x-y)ds}$
$C\text{:}\;\textbf{r}(t)=4t\textbf{i}+3t\textbf{j}$ when $0\le t\le 2$
SOLUTION:
${\displaystyle \int_{C}^{}(x-y)ds}=10$
:::

:::exercise {fs-id1167793441543} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{C}^{}({x}^{2}+{y}^{2}+{z}^{2})ds}$
$C\text{:}\;\textbf{r}(t)=\text{sin}\;t\textbf{i}+\text{cos}\;t\textbf{j}+8t\textbf{k}$ when $0\le t\le \frac{\pi}{2}$
:::

:::exercise {fs-id1167793750231} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \int_{C}^{}x{y}^{4}ds},$ where *C* is the right half of circle ${x}^{2}+{y}^{2}=16$ and is traversed in the clockwise direction.
SOLUTION:
${\displaystyle \int_{C}^{}x{y}^{4}ds}=\frac{8192}{5}$
:::

:::exercise {fs-id1167794138227} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \int_{C}^{}4{x}^{3}ds},$ where *C* is the line segment from $(−2,−1)$ to (1, 2).
:::
For the following exercises, find the work done.

:::exercise {fs-id1167793613000} type= 
PROBLEM:
Find the work done by vector field $\textbf{F}(x,y,z)=x\textbf{i}+3xy\textbf{j}-(x+z)\textbf{k}$ on a particle moving along a line segment that goes from $(1,4,2)$ to $(0,5,1).$
SOLUTION:
$W=8$
:::

:::exercise {fs-id1167793640203} type= 
PROBLEM:
Find the work done by a person weighing 150 lb walking exactly one revolution up a circular, spiral staircase of radius 3 ft if the person rises 10 ft.
:::

:::exercise {fs-id1167793640233} type= 
PROBLEM:
Find the work done by force field $\textbf{F}(x,y,z)=-\frac{1}{2}x\textbf{i}-\frac{1}{2}y\textbf{j}+\frac{1}{4}\textbf{k}$ on a particle as it moves along the helix $\textbf{r}(t)=\text{cos}\;t\textbf{i}+\text{sin}\;t\textbf{j}+t\textbf{k}$ from point $(1,0,0)$ to point $(−1,0,3\pi ).$
SOLUTION:
$W=\frac{3\pi}{4}$
:::

:::exercise {fs-id1167794121587} type= 
PROBLEM:
Find the work done by vector field $\textbf{F}(x,y)=y\textbf{i}+2x\textbf{j}$ in moving an object along path *C*, the straight line which joins points (1, 0) and (0, 1).
:::

:::exercise {fs-id1167793451270} type= 
PROBLEM:
Find the work done by force $\textbf{F}(x,y)=2y\textbf{i}+3x\textbf{j}+(x+y)\textbf{k}$ in moving an object along curve $\textbf{r}(t)=\text{cos}(t)\textbf{i}+\text{sin}(t)\textbf{j}+\frac{1}{6}\textbf{k},$ where $0\le t\le 2\pi .$
SOLUTION:
$W=\pi$
:::

:::exercise {fs-id1167793634090} type= 
PROBLEM:
Find the mass of a wire in the shape of a circle of radius 2 centered at (3, 4) with linear mass density $ρ(x,y)={y}^{2}.$
:::
For the following exercises, evaluate the line integrals.

:::exercise {fs-id1167793705676} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=−1\textbf{j},$ and *C* is the part of the graph of $y=\frac{1}{2}{x}^{3}-x$ from $(2,2)$ to $(−2,−2).$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=4$
:::

:::exercise {fs-id1167793477547} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{γ}^{}{({x}^{2}+{y}^{2}+{z}^{2})}^{−1}ds},$ where $γ$ is the helix $x=\text{cos}\;t,y=\text{sin}\;t,z=t(0\le t\le T).$
:::

:::exercise {fs-id1167793400578} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}^{}yz\;dx+xz\;dy+xy\;dz}$ over the line segment from $(1,1,1)$ to $(3,2,0).$
SOLUTION:
${\displaystyle \int_{C}^{}yzdx+xzdy+xydz}=−1$
:::

:::exercise {fs-id1167794284370} type= 
PROBLEM:
Let *C* be the line segment from point (0, 1, 1) to point (2, 2, 3). Evaluate line integral ${\displaystyle \int_{C}^{}yds}.$
:::

:::exercise {fs-id1167793544911} type= 
PROBLEM:
**[T]** Use a computer algebra system to evaluate the line integral ${\displaystyle \int_{C}{y}^{2}dx+xdy},$ where *C* is the arc of the parabola $x=4-{y}^{2}$ from (−5, −3) to (0, 2).
SOLUTION:
${\displaystyle \int_{C}^{}({y}^{2})dx+(x)dy}=\frac{245}{6}$
:::

:::exercise {fs-id1167793925228} type= 
PROBLEM:
**[T]** Use a computer algebra system to evaluate the line integral ${\displaystyle \int_{C}^{}(x+3{y}^{2})dy}$ over the path *C* given by $x=2t\text{,}\;y=10t\text{,}$ where $0\le t\le 1.$
:::

:::exercise {fs-id1167793590154} type= 
PROBLEM:
**[T]** Use a CAS to evaluate line integral ${\displaystyle \int_{C}^{}xydx+ydy}$ over path *C* given by $x=2t\text{,}\;y=10t\text{,}$ where $0\le t\le 1.$
SOLUTION:
${\displaystyle \int_{C}^{}xydx+ydy=\frac{190}{3}}$
:::

:::exercise {fs-id1167791542878} type= 
PROBLEM:
Evaluate line integral ${\displaystyle \int_{C}^{}(2x-y)dx+(x+3y)dy},$ where *C* lies along the *x*-axis from $x=0\;\text{to}\;x=5.$
:::

:::exercise {fs-id1167793938055} type= 
PROBLEM:
**[T]** Use a CAS to evaluate ${\displaystyle \int_{C}^{}\frac{y}{2{x}^{2}-{y}^{2}}ds},$ where *C* is $x=t\text{,}\;y=t\text{,}\;1\le t\le 5.$
SOLUTION:
${\displaystyle \int_{C}\frac{y}{2{x}^{2}-{y}^{2}}ds=\sqrt{2}\;\text{ln}\;5}$
:::

:::exercise {fs-id1167793298598} type= 
PROBLEM:
**[T]** Use a CAS to evaluate ${\displaystyle \int_{C}xyds,}$ where *C* is $x={t}^{2},y=4t,0\le t\le 1.$
:::
In the following exercises, find the work done by force field **F** on an object moving along the indicated path.

:::exercise {fs-id1167794296818} type= 
PROBLEM:
$\textbf{F}(x,y)=\text{−}x\textbf{i}-2y\textbf{j}$
$C\text{:}\;y={x}^{3}\;\text{from (0, 0) to (2, 8)}$
SOLUTION:
$W=−66$
:::

:::exercise {fs-id1167793939279} type= 
PROBLEM:
$\textbf{F}(x\text{,}\;y)=2xi+y\textbf{j}$
*C*: counterclockwise around the triangle with vertices (0, 0), (1, 0), and (1, 1)
:::

:::exercise {fs-id1167793451632} type= 
PROBLEM:
$\textbf{F}(x\text{,}\;y\text{,}\;z)=x\textbf{i}+y\textbf{j}-5z\textbf{k}$
$\text{C}\text{:}\;\textbf{r}(t)=2\;\text{cos}\;t\textbf{i}+2\;\text{sin}\;t\textbf{j}+t\textbf{k}\text{,}\;0\le t\le 2\pi$
SOLUTION:
$W=−10{\pi}^{2}$
:::

:::exercise {fs-id1167793498768} type= 
PROBLEM:
Let **F** be vector field $\textbf{F}(x,y)=({y}^{2}+2x{e}^{y}+1)\textbf{i}+(2xy+{x}^{2}{e}^{y}+2y)\textbf{j}.$ Compute the work of integral ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where *C* is the path $\textbf{r}(t)=\text{sin}\;t\textbf{i}+\text{cos}\;t\textbf{j}\text{,}\;0\le t\le \frac{\pi}{2}.$
:::

:::exercise {fs-id1167793515633} type= 
PROBLEM:
Compute the work done by force $\textbf{F}(x,y,z)=2x\textbf{i}+3y\textbf{j}-z\textbf{k}$ along path $\textbf{r}(t)=t\textbf{i}+{t}^{2}\textbf{j}+{t}^{3}\textbf{k},$ where $0\le t\le 1.$
SOLUTION:
$W=2$
:::

:::exercise {fs-id1167794143457} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=\frac{1}{x+y}\textbf{i}+\frac{1}{x+y}\textbf{j}$ and *C* is the segment of the unit circle going counterclockwise from $(1,0)$ to (0, 1).
:::

:::exercise {fs-id1167794054390} type= 
PROBLEM:
Force $\textbf{F}(x,y,z)=zy\textbf{i}+x\textbf{j}+{z}^{2}x\textbf{k}$ acts on a particle that travels from the origin to point (1, 2, 3). Calculate the work done if the particle travels:
a. along the path $(0,0,0)\to (1,0,0)\to (1,2,0)\to (1,2,3)$ along straight-line segments joining each pair of endpoints;
b. along the straight line joining the initial and final points.
c. Is the work the same along the two paths?

> IMAGE {img:fs-id1167793641077} src=../../media/CNX_Calc_Figure_16_02_201.jpg
> alt: A curve and vector field in three dimensions. The curve segments go from (1,2,3) to (0,0,0) to (1,0,0) to (1,2,0), and the arrowheads point to (0,0,0), (1,0,0), and (1,2,0). The surrounding vectors are larger the more the z component increases.

SOLUTION:
a. $W=11;$ b. $W=\frac{39}{4};$ c. No
:::

:::exercise {fs-id1167793641122} type= 
PROBLEM:
Find the work done by vector field $\textbf{F}(x,y,z)=x\textbf{i}+3xy\textbf{j}-(x+z)\textbf{k}$ on a particle moving along a line segment that goes from (1, 4, 2) to (0, 5, 1).
:::

:::exercise {fs-id1167793401442} type= 
PROBLEM:
How much work is required to move an object in vector field $\textbf{F}(x,y)=y\textbf{i}+3x\textbf{j}$ along the upper part of ellipse $\frac{{x}^{2}}{4}+{y}^{2}=1$ from (2, 0) to $(−2,0)?$
SOLUTION:
$W=2\pi$
:::

:::exercise {fs-id1167793611105} type= 
PROBLEM:
A vector field is given by $\textbf{F}(x,y)=(2x+3y)\textbf{i}+(3x+2y)\textbf{j}.$ Evaluate the line integral of the field around a circle of unit radius traversed in a clockwise fashion.
:::

:::exercise {fs-id1167793267536} type= 
PROBLEM:
Evaluate the line integral of scalar function $xy$ along parabolic path $y={x}^{2}$ connecting the origin to point (1, 1).
SOLUTION:
${\displaystyle \int_{C}^{}xyds=\frac{25\sqrt{5}+1}{120}}$
:::

:::exercise {fs-id1167793244285} type= 
PROBLEM:
Find ${\displaystyle \int_{C}^{}{y}^{2}dx+(xy-{x}^{2})dy}$ along *C*: $y=3x$ from (0, 0) to (1, 3).
:::

:::exercise {fs-id1167793513199} type= 
PROBLEM:
Find ${\displaystyle \int_{C}^{}{y}^{2}dx+(xy-{x}^{2})dy}$ along *C*: ${y}^{2}=9x$ from (0, 0) to (1, 3).
SOLUTION:
${\displaystyle \int_{C}^{}{y}^{2}dx+(xy-{x}^{2})dy}=6.15$
:::
For the following exercises, use a CAS to evaluate the given line integrals.

:::exercise {fs-id1167793279328} type= 
PROBLEM:
**[T]** Evaluate $\textbf{F}(x,y,z)={x}^{2}z\textbf{i}+6y\textbf{j}+y{z}^{2}\textbf{k},$ where *C* is represented by $\textbf{r}(t)=t\textbf{i}+{t}^{2}\textbf{j}+\text{ln}\;t\textbf{k}\text{,}\;1\le t\le 3.$
:::

:::exercise {fs-id1167793547321} type= 
PROBLEM:
**[T]** Evaluate line integral ${\displaystyle \int_{γ}^{}x{e}^{y}ds}$ where, $γ$ is the arc of curve $x={e}^{y}$ from $(1,0)$ to $(e,1).$
SOLUTION:
${\displaystyle \int_{γ}^{}x{e}^{y}ds\approx 7.157}$
:::

:::exercise {fs-id1167793590315} type= 
PROBLEM:
**[T]** Evaluate the integral ${\displaystyle \int_{γ}^{}x{y}^{2}ds},$ where $γ$ is a triangle with vertices (0, 1, 2), (1, 0, 3), and $(0,−1,0).$
:::

:::exercise {fs-id1167793545835} type= 
PROBLEM:
**[T]** Evaluate line integral ${\displaystyle \int_{γ}^{}({y}^{2}-xy)ds},$ where $γ$ is curve $y=\text{ln}\;x$ from (1, 0) toward $(e\text{,}\;1).$
SOLUTION:
${\displaystyle \int_{γ}^{}({y}^{2}-xy)dx\approx −1.379}$
:::

:::exercise {fs-id1167793688224} type= 
PROBLEM:
**[T]** Evaluate line integral ${\displaystyle \int_{γ}^{}x{y}^{4}ds},$ where $γ$ is the right half of circle ${x}^{2}+{y}^{2}=16.$
:::

:::exercise {fs-id1167794223657} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y,z)={x}^{2}y\textbf{i}+(x-z)\textbf{j}+xyz\textbf{k}$ and
*C*: $\textbf{r}(t)=t\textbf{i}+{t}^{2}\textbf{j}+2\textbf{k}\text{,}\;0\le t\le 1.$
SOLUTION:
${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}}\approx −1.133$
:::

:::exercise {fs-id1167793386797} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=2x\;\text{sin}(y)\textbf{i}+({x}^{2}\text{cos}(y)-3{y}^{2})\textbf{j}$ and
*C* is any path from $(−1,0)$ to (5, 1).
:::

:::exercise {fs-id1167793442525} type= 
PROBLEM:
Find the line integral of $\textbf{F}(x,y,z)=12{x}^{2}\textbf{i}-5xy\textbf{j}+xz\textbf{k}$ over path *C* defined by $y={x}^{2},$ $z={x}^{3}$ from point (0, 0, 0) to point (2, 4, 8).
SOLUTION:
${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}\approx 22.857}$
:::

:::exercise {fs-id1167794186628} type= 
PROBLEM:
Find the line integral of ${\displaystyle \int_{C}^{}(1+{x}^{2}y)ds},$ where *C* is ellipse $\textbf{r}(t)=2\;\text{cos}\;t\textbf{i}+3\;\text{sin}\;t\textbf{j}$ from $0\le t\le \pi .$
:::
For the following exercises, find the flux.

:::exercise {fs-id1167793545723} type= 
PROBLEM:
Compute the flux of $\textbf{F}={x}^{2}\textbf{i}+y\textbf{j}$ across a line segment from (0, 0) to (1, 2).
SOLUTION:
$\text{flux}=-\frac{1}{3}$
:::

:::exercise {fs-id1167793569457} type= 
PROBLEM:
Let $\textbf{F}=5\textbf{i}$ and let *C* be curve $y=0,0\le x\le 4.$ Find the flux across *C*.
:::

:::exercise {fs-id1167793553836} type= 
PROBLEM:
Let $\textbf{F}=5\textbf{j}$ and let *C* be curve $y=0,0\le x\le 4.$ Find the flux across *C*.
SOLUTION:
$\text{flux}=−20$
:::

:::exercise {fs-id1167793571388} type= 
PROBLEM:
Let $\textbf{F}=\text{−}y\textbf{i}+x\textbf{j}$ and let *C*: $\textbf{r}(t)=\text{cos}\;t\textbf{i}+\text{sin}\;t\textbf{j}$ $(0\le t\le 2\pi ).$ Calculate the flux across *C*.
:::

:::exercise {fs-id1167794124182} type= 
PROBLEM:
Let $\textbf{F}=({x}^{2}+{y}^{3})\textbf{i}+(2xy)\textbf{j}.$ Calculate flux **F** orientated counterclockwise across curve *C*: ${x}^{2}+{y}^{2}=9.$
SOLUTION:
$\text{flux}=0$
:::

:::exercise {fs-id1167794158635} type= 
PROBLEM:
Find the line integral of ${\displaystyle \int_{C}^{}{z}^{2}dx+ydy+2ydz},$ where *C* consists of two parts: ${C}_{1}$ and ${C}_{2}.$ ${C}_{1}$ is the intersection of cylinder ${x}^{2}+{y}^{2}=16$ and plane $z=3$ from (0, 4, 3) to $(−4,0,3).$ ${C}_{2}$ is a line segment from $(−4,0,3)$ to (0, 1, 5).
:::

:::exercise {fs-id1167793637435} type= 
PROBLEM:
A spring is made of a thin wire twisted into the shape of a circular helix $x=2\;\text{cos}\;t\text{,}\;y=2\;\text{sin}\;t\text{,}\;z=t.$ Find the mass of two turns of the spring if the wire has constant mass density.
SOLUTION:
$m=4\pi ρ\sqrt{5}$
:::

:::exercise {fs-id1167793375666} type= 
PROBLEM:
A thin wire is bent into the shape of a semicircle of radius *a*. If the linear mass density at point *P* is directly proportional to its distance from the line through the endpoints, find the mass of the wire.
:::

:::exercise {fs-id1167793957759} type= 
PROBLEM:
An object moves in force field $\textbf{F}(x,y,z)={y}^{2}\textbf{i}+2(x+1)y\textbf{j}$ counterclockwise from point (2, 0) along elliptical path ${x}^{2}+4{y}^{2}=4$ to $(−2,0),$ and back to point (2, 0) along the *x*-axis. How much work is done by the force field on the object?
SOLUTION:
$W=0$
:::

:::exercise {fs-id1167793582800} type= 
PROBLEM:
Find the work done when an object moves in force field $\textbf{F}(x,y,z)=2x\textbf{i}-(x+z)\textbf{j}+(y-x)\textbf{k}$ along the path given by $\textbf{r}(t)={t}^{2}\textbf{i}+({t}^{2}-t)\textbf{j}+3\textbf{k},$ $0\le t\le 1.$
:::

:::exercise {fs-id1167793315974} type= 
PROBLEM:
If an inverse force field **F** is given by $\textbf{F}(x,y,z)=\frac{k}{{\| \textbf{r}\|}^{3}}\textbf{r},$ where *k* is a constant, find the work done by **F** as its point of application moves along the *x*-axis from $A(1,0,0)\;\text{to}\;B(2,0,0).$
SOLUTION:
$W=\frac{k}{2}$
:::

:::exercise {fs-id1167793940527} type= 
PROBLEM:
David and Sandra plan to evaluate line integral ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}}$ along a path in the *xy*-plane from (0, 0) to (1, 1). The force field is $\textbf{F}(x,y)=(x+2y)\textbf{i}+(\text{−}x+{y}^{2})\textbf{j}.$ David chooses the path that runs along the *x*-axis from (0, 0) to (1, 0) and then runs along the vertical line $x=1$ from (1, 0) to the final point (1, 1). Sandra chooses the direct path along the diagonal line $y=x$ from (0, 0) to (1, 1). Whose line integral is larger and by how much?
:::

## Glossary
- {def} **circulation**: the tendency of a fluid to move in the direction of curve *C*. If *C* is a closed curve, then the circulation of **F** along *C* is line integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds,}$ which we also denote ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}$
- {def} **closed curve**: a curve for which there exists a parameterization $\textbf{r}(t),$ $a\le t\le b,$ such that $\textbf{r}(a)=\textbf{r}(b),$ and the curve is traversed exactly once
- {def} **flux**: the rate of a fluid flowing across a curve in a vector field; the flux of vector field **F** across plane curve *C* is line integral ${\displaystyle \int_{C}\textbf{F}\cdot \frac{\textbf{n}(t)}{\| \textbf{n}(t)\|}}\;ds$
- {def} **line integral**: the integral of a function along a curve in a plane or in space
- {def} **orientation of a curve**: the orientation of a curve *C* is a specified direction of *C*
- {def} **piecewise smooth curve**: an oriented curve that is not smooth, but can be written as the union of finitely many smooth curves
- {def} **scalar line integral**: the scalar line integral of a function $f$ along a curve *C* with respect to arc length is the integral ${\displaystyle \int_{C}fds},$ it is the integral of a scalar function $f$ along a curve in a plane or in space; such an integral is defined in terms of a Riemann sum, as is a single-variable integral
- {def} **vector line integral**: the vector line integral of vector field **F** along curve *C* is the integral of the dot product of **F** with unit tangent vector **T** of *C* with respect to arc length, ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds};$ such an integral is defined in terms of a Riemann sum, similar to a single-variable integral

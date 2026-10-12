# Areas between Curves

## Learning Objectives {section:learning-objectives}
- Determine the area of a region between two curves by integrating with respect to the independent variable.
- Find the area of a compound region.
- Determine the area of a region between two curves by integrating with respect to the dependent variable.

In [Introduction to Integration](module:m53623), we developed the concept of the definite integral to calculate the area below a curve on a given interval. In this section, we expand that idea to calculate the area of more complex regions. We start by finding the area between two curves that are functions of $x,$ beginning with the simple case in which one function value is always greater than the other. We then look at cases when the graphs of the functions cross. Last, we consider how to calculate the area between two curves that are functions of $y.$

## Area of a Region between Two Curves
Let $f(x)$ and $g(x)$ be continuous functions over an interval $[a,b]$ such that $f(x)\ge g(x)$ on $[a,b].$ We want to find the area between the graphs of the functions, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_01_001} src=../../media/CNX_Calc_Figure_06_01_001.jpg
> alt: This figure is a graph in the first quadrant. There are two curves on the graph. The higher curve is labeled “f(x)” and the lower curve is labeled “g(x)”. There are two boundaries on the x-axis labeled a and b. There is shaded area between the two curves bounded by lines at x=a and x=b.
> caption: The area between the graphs of two functions, $f(x)$ and $g(x),$ on the interval $[a,b].$

As we did before, we are going to partition the interval on the $x\text{-axis}$ and approximate the area between the graphs of the functions with rectangles. So, for $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of $[a,b].$ Then, for $i=1,2\text{,…},n,$ choose a point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}],$ and on each interval $[{x}_{i-1},{x}_{i}]$ construct a rectangle that extends vertically from $g({x}_{i}^{*})$ to $f({x}_{i}^{*}).$ [ref:CNX_Calc_Figure_06_01_002](a) shows the rectangles when ${x}_{i}^{*}$ is selected to be the left endpoint of the interval and $n=10.$ [ref:CNX_Calc_Figure_06_01_002](b) shows a representative rectangle in detail.

:::note [media-2] 
Use this [calculator](http://www.openstax.org/l/20_CurveCalc) to learn more about the areas between two curves.
:::

> FIGURE {fig:CNX_Calc_Figure_06_01_002} src=../../media/CNX_Calc_Figure_06_01_002.jpg
> alt: This figure has three graphs. The first graph has two curves, one over the other. In between the curves is a rectangle. The top of the rectangle is on the upper curve labeled “f(x*)” and the bottom of the rectangle is on the lower curve and labeled “g(x*)”. The second graph, labeled “(a)”, has two curves on the graph. The higher curve is labeled “f(x)” and the lower curve is labeled “g(x)”. There are two boundaries on the x-axis labeled a and b. There is shaded area between the two curves bounded by lines at x=a and x=b. The third graph, labeled “(b)” has two curves one over the other. The first curve is labeled “f(x*)” and the lower curve is labeled “g(x*)”. There is a shaded rectangle between the two. The width of the rectangle is labeled as “delta x”.
> caption: (a)We can approximate the area between the graphs of two functions, $f(x)$ and $g(x),$ with rectangles. (b) The area of a typical rectangle goes from one curve to the other.

The height of each individual rectangle is $f({x}_{i}^{*})-g({x}_{i}^{*})$ and the width of each rectangle is $\text{Δ}x.$ Adding the areas of all the rectangles, we see that the area between the curves is approximated by

$A\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}[f({x}_{i}^{*})-g({x}_{i}^{*})]\text{Δ}x.$  {eq:fs-id1167794207238}

This is a Riemann sum, so we take the limit as $n\to \infty$ and we get

$A=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}[f({x}_{i}^{*})-g({x}_{i}^{*})]\text{Δ}x={\displaystyle \int_{a}^{b}[f(x)-g(x)]}dx.$  {eq:fs-id1167794160372}

These findings are summarized in the following theorem.

:::note [theorem] Finding the Area between Two Curves
Let $f(x)$ and $g(x)$ be continuous functions such that $f(x)\ge g(x)$ over an interval $[a,b].$ Let $R$ denote the region bounded above by the graph of $f(x),$ below by the graph of $g(x),$ and on the left and right by the lines $x=a$ and $x=b,$ respectively. Then, the area of $R$ is given by

$$ A={{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx. $$  {eq:fs-id1167794293252}

:::
We apply this theorem in the following example.

:::example {ex:fs-id1167793900960} Finding the Area of a Region between Two Curves 1

:::exercise {fs-id1167793361764} type= 
PROBLEM:
If *R* is the region bounded above by the graph of the function $f(x)=x+4$ and below by the graph of the function $g(x)=3-\frac{x}{2}$ over the interval $[1,4],$ find the area of region $R.$
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_01_003} src=../../media/CNX_Calc_Figure_06_01_003.jpg
> alt: This figure is has two linear graphs in the first quadrant. They are the functions f(x) = x+4 and g(x)= 3-x/2. In between these lines is a shaded region, bounded above by f(x) and below by g(x). The shaded area is between x=1 and x=4.
> caption: A region between two curves is shown where one curve is always greater than the other.

We have

$\begin{array}{rl}A & ={{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx \\ & ={\displaystyle \int_{1}^{4}[(x+4)-(3-\frac{x}{2})]dx}={\displaystyle \int_{1}^{4}[\frac{3x}{2}+1]dx} \\ & ={[\frac{3{x}^{2}}{4}+x]\;|}_{1}^{4}=(16-\frac{7}{4})=\frac{57}{4}.\end{array}$  {eq:fs-id1167793372473}

The area of the region is $\frac{57}{4}\;{\text{units}}^{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793940237} type= 
PROBLEM:
If $R$ is the region bounded by the graphs of the functions $f(x)=\frac{x}{2}+5$ and $g(x)=x+\frac{1}{2}$ over the interval $[1,5],$ find the area of region $R.$
SOLUTION:
$12$ units<sup>2</sup>
COMMENTARY: Hint
Graph the functions to determine which function’s graph forms the upper bound and which forms the lower bound, then follow the process used in [ref:fs-id1167793900960].
:::
:::
In [ref:fs-id1167793900960], we defined the interval of interest as part of the problem statement. Quite often, though, we want to define our interval of interest based on where the graphs of the two functions intersect. This is illustrated in the following example.

:::example {ex:fs-id1167793852231} Finding the Area of a Region between Two Curves 2

:::exercise {fs-id1167793479817} type= 
PROBLEM:
If $R$ is the region bounded above by the graph of the function $f(x)=9-{(x\text{/}2)}^{2}$ and below by the graph of the function $g(x)=6-x,$ find the area of region $R.$
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_01_004} src=../../media/CNX_Calc_Figure_06_01_004.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions f(x) = 9-(x/2)^2 and g(x)= 6-x. In between these graphs, an upside down parabola and a line, is a shaded region, bounded above by f(x) and below by g(x).
> caption: This graph shows the region below the graph of $f(x)$ and above the graph of $g(x).$

We first need to compute where the graphs of the functions intersect. Setting $f(x)=g(x),$ we get

$\begin{array}{rll}f(x) & = & g(x) \\ \\ 9-{(\frac{x}{2})}^{2} & = & 6-x \\ 9-\frac{{x}^{2}}{4} & = & 6-x \\ 36-{x}^{2} & = & 24-4x \\ {x}^{2}-4x-12 & = & 0 \\ (x-6)(x+2) & = & 0.\end{array}$  {eq:fs-id1167793607866}

The graphs of the functions intersect when $x=6$ or $x=−2,$ so we want to integrate from $−2$ to $6.$ Since $f(x)\ge g(x)$ for $−2\le x\le 6,$ we obtain

$\begin{array}{rl}A & ={{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx \\ & ={\displaystyle \int_{−2}^{6}[9-{(\frac{x}{2})}^{2}-(6-x)]dx}={\displaystyle \int_{−2}^{6}[3-\frac{{x}^{2}}{4}+x]dx} \\ & ={[3x-\frac{{x}^{3}}{12}+\frac{{x}^{2}}{2}]\;|}_{−2}^{6}=\frac{64}{3}.\end{array}$  {eq:fs-id1167794210350}

The area of the region is $64\text{/}3$ units<sup>2</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794076151} type= 
PROBLEM:
If *R* is the region bounded above by the graph of the function $f(x)=x$ and below by the graph of the function $g(x)={x}^{4},$ find the area of region $R.$
SOLUTION:
$\frac{3}{10}$ unit<sup>2</sup>
COMMENTARY: Hint
Use the process from [ref:fs-id1167793852231].
:::
:::

## Areas of Compound Regions
So far, we have required $f(x)\ge g(x)$ over the entire interval of interest, but what if we want to look at regions bounded by the graphs of functions that cross one another? In that case, we modify the process we just developed by using the absolute value function.

:::note [theorem] Finding the Area of a Region between Curves That Cross
Let $f(x)$ and $g(x)$ be continuous functions over an interval $[a,b].$ Let $R$ denote the region between the graphs of $f(x)$ and $g(x),$ and be bounded on the left and right by the lines $x=a$ and $x=b,$ respectively. Then, the area of $R$ is given by

$A={{\displaystyle \int}}_{a}^{b}|f(x)-g(x)|dx.$  {eq:fs-id1167794162812}

:::
In practice, applying this theorem requires us to break up the interval $[a,b]$ and evaluate several integrals, depending on which of the function values is greater over a given part of the interval. We study this process in the following example.

:::example {ex:fs-id1167793263971} Finding the Area of a Region Bounded by Functions That Cross

:::exercise {fs-id1167793263974} type= 
PROBLEM:
If *R* is the region between the graphs of the functions $f(x)=\text{sin}\;x$ and $g(x)=\text{cos}\;x$ over the interval $[0,\pi ],$ find the area of region $R.$
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_01_005} src=../../media/CNX_Calc_Figure_06_01_005.jpg
> alt: This figure is has two graphs. They are the functions f(x) = sinx and g(x)= cosx. They are both periodic functions that resemble waves. There are two shaded areas between the graphs. The first shaded area is labeled “R1” and has g(x) above f(x). This region begins at the y-axis and stops where the curves intersect. The second region is labeled “R2” and begins at the intersection with f(x) above g(x). The shaded region stops at x=pi.
> caption: The region between two curves can be broken into two sub-regions.

The graphs of the functions intersect at $x=\pi \text{/}4.$ For $x\in [0,\pi \text{/}4],$ $\text{cos}\;x\ge \text{sin}\;x,$ so

$|f(x)-g(x)|=|\text{sin}\;x-\text{cos}\;x|=\text{cos}\;x-\text{sin}\;x.$  {eq:fs-id1167794325185}

On the other hand, for $x\in [\pi \text{/}4,\pi ],$ $\text{sin}\;x\ge \text{cos}\;x,$ so

$|f(x)-g(x)|=|\text{sin}\;x-\text{cos}\;x|=\text{sin}\;x-\text{cos}\;x.$  {eq:fs-id1167794026884}

Then

$\begin{array}{rl}A & ={{\displaystyle \int}}_{a}^{b}|f(x)-g(x)|dx \\ & ={{\displaystyle \int}}_{0}^{\pi}|\text{sin}\;x-\text{cos}\;x|dx={{\displaystyle \int}}_{0}^{\pi \text{/}4}(\text{cos}\;x-\text{sin}\;x)dx+{{\displaystyle \int}}_{\pi \text{/}4}^{\pi}(\text{sin}\;x-\text{cos}\;x)dx \\ & ={[\text{sin}\;x+\text{cos}\;x]\;|}_{0}^{\pi \text{/}4}+{[\text{−}\text{cos}\;x-\text{sin}\;x]\;|}_{\pi \text{/}4}^{\pi} \\ & =(\sqrt{2}-1)+(1+\sqrt{2})=2\sqrt{2}.\end{array}$  {eq:fs-id1167794040502}

The area of the region is $2\sqrt{2}$ units<sup>2</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794121633} type= 
PROBLEM:
If *R* is the region between the graphs of the functions $f(x)=\text{sin}\;x$ and $g(x)=\text{cos}\;x$ over the interval $[\pi \text{/}2,2\pi ],$ find the area of region $R.$
SOLUTION:
$2+2\sqrt{2}$ units<sup>2</sup>
COMMENTARY: Hint
The two curves intersect at $x=(5\pi )\text{/}4.$
:::
:::

:::example {ex:fs-id1167793455088} Finding the Area of a Complex Region

:::exercise {fs-id1167793455090} type= 
PROBLEM:
Consider the region depicted in [ref:CNX_Calc_Figure_06_01_006]. Find the area of $R.$

> FIGURE {fig:CNX_Calc_Figure_06_01_006} src=../../media/CNX_Calc_Figure_06_01_006.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions f(x) = x^2 and g(x)= 2-x. In between these graphs is a shaded region, bounded to the left by f(x) and to the right by g(x). All of which is above the x-axis. The region is labeled R. The shaded area is between x=0 and x=2.
> caption: Two integrals are required to calculate the area of this region.

SOLUTION:
As with [ref:fs-id1167793263971], we need to divide the interval into two pieces. The graphs of the functions intersect at $x=1$ (set $f(x)=g(x)$ and solve for *x*), so we evaluate two separate integrals: one over the interval $[0,1]$ and one over the interval $[1,2].$
Over the interval $[0,1],$ the region is bounded above by $f(x)={x}^{2}$ and below by the *x*-axis, so we have

${A}_{1}={{\displaystyle \int}}_{0}^{1}{x}^{2}dx={\frac{{x}^{3}}{3}\;|}_{0}^{1}=\frac{1}{3}.$  {eq:fs-id1167793564130}

Over the interval $[1,2],$ the region is bounded above by $g(x)=2-x$ and below by the $x\text{-axis,}$ so we have

${A}_{2}={{\displaystyle \int}}_{1}^{2}(2-x)dx={[2x-\frac{{x}^{2}}{2}]\;|}_{1}^{2}=\frac{1}{2}.$  {eq:fs-id1167793372769}

Adding these areas together, we obtain

$A={A}_{1}+{A}_{2}=\frac{1}{3}+\frac{1}{2}=\frac{5}{6}.$  {eq:fs-id1167793619934}

The area of the region is $5\text{/}6$ units<sup>2</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793581452} type= 
PROBLEM:
Consider the region depicted in the following figure. Find the area of $R.$

> IMAGE {img:fs-id1167793936448} src=../../media/CNX_Calc_Figure_06_01_007.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions f(x) = squareroot of x and g(x)= 3/2 – x/2. In between these graphs is a shaded region, bounded to the left by f(x) and to the right by g(x). All of which is above the x-axis. The shaded area is between x=0 and x=3.

SOLUTION:
$\frac{5}{3}$ units<sup>2</sup>
COMMENTARY: Hint
The two curves intersect at $x=1.$
:::
:::

## Regions Defined with Respect to *y*
In [ref:fs-id1167793455088], we had to evaluate two separate integrals to calculate the area of the region. However, there is another approach that requires only one integral. What if we treat the curves as functions of $y,$ instead of as functions of $x?$ Review [ref:CNX_Calc_Figure_06_01_006]. Note that the left graph, shown in red, is represented by the function $y=f(x)={x}^{2}.$ We could just as easily solve this for $x$ and represent the curve by the function $x=v(y)=\sqrt{y}.$ (Note that $x=\text{−}\sqrt{y}$ is also a valid representation of the function $y=f(x)={x}^{2}$ as a function of $y.$ However, based on the graph, it is clear we are interested in the positive square root.) Similarly, the right graph is represented by the function $y=g(x)=2-x,$ but could just as easily be represented by the function $x=u(y)=2-y.$ When the graphs are represented as functions of $y,$ we see the region is bounded on the left by the graph of one function and on the right by the graph of the other function. Therefore, if we integrate with respect to $y,$ we need to evaluate one integral only. Let’s develop a formula for this type of integration.
Let $u(y)$ and $v(y)$ be continuous functions over an interval $[c,d]$ such that $u(y)\ge v(y)$ for all $y\in [c,d].$ We want to find the area between the graphs of the functions, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_01_008} src=../../media/CNX_Calc_Figure_06_01_008.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions v(y) and u(y). In between these graphs is a shaded region, bounded to the left by v(y) and to the right by u(y). The region is labeled R. The shaded area is between the horizontal boundaries of y=c and y=d.
> caption: We can find the area between the graphs of two functions, $u(y)$ and $v(y).$

This time, we are going to partition the interval on the $y\text{-axis}$ and use horizontal rectangles to approximate the area between the functions. So, for $i=0,1,2\text{,…},n,$ let $Q=\{{y}_{i}\}$ be a regular partition of $[c,d].$ Then, for $i=1,2\text{,…},n,$ choose a point ${y}_{i}^{*}\in [{y}_{i-1},{y}_{i}],$ then over each interval $[{y}_{i-1},{y}_{i}]$ construct a rectangle that extends horizontally from $v({y}_{i}^{*})$ to $u({y}_{i}^{*}).$ [ref:CNX_Calc_Figure_06_01_009](a) shows the rectangles when ${y}_{i}^{*}$ is selected to be the lower endpoint of the interval and $n=10.$ [ref:CNX_Calc_Figure_06_01_009](b) shows a representative rectangle in detail.

> FIGURE {fig:CNX_Calc_Figure_06_01_009} src=../../media/CNX_Calc_Figure_06_01_009.jpg
> alt: This figure is has three graphs. The first figure has two curves. They are the functions v(y*) and u(y*). In between these curves is a horizontal rectangle. The second figure labeled “(a)”, is a shaded region, bounded to the left by v(y) and to the right by u(y). The shaded area is between the horizontal boundaries of y=c and y=d. This shaded area is broken into rectangles between the curves. The third figure, labeled “(b)”, is the two curves v(y*) and u(y*). In between the curves is a horizontal rectangle with width delta y.
> caption: (a) Approximating the area between the graphs of two functions, $u(y)$ and $v(y),$ with rectangles. (b) The area of a typical rectangle.

The height of each individual rectangle is $\text{Δ}y$ and the width of each rectangle is $u({y}_{i}^{*})-v({y}_{i}^{*}).$ Therefore, the area between the curves is approximately

$A\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}[u({y}_{i}^{*})-v({y}_{i}^{*})]\text{Δ}y.$  {eq:fs-id1167794181163}

This is a Riemann sum, so we take the limit as $n\to \infty ,$ obtaining

$A=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}[u({y}_{i}^{*})-v({y}_{i}^{*})]\text{Δ}y={\displaystyle \int_{c}^{d}[u(y)-v(y)]dy}.$  {eq:fs-id1167794199197}

These findings are summarized in the following theorem.

:::note [theorem] Finding the Area between Two Curves, Integrating along the *y*-axis
Let $u(y)$ and $v(y)$ be continuous functions such that $u(y)\ge v(y)$ for all $y\in [c,d].$ Let $R$ denote the region bounded on the right by the graph of $u(y),$ on the left by the graph of $v(y),$ and above and below by the lines $y=d$ and $y=c,$ respectively. Then, the area of $R$ is given by

$$ A={{\displaystyle \int}}_{c}^{d}[u(y)-v(y)]dy. $$  {eq:fs-id1167793360849}

:::

:::example {ex:fs-id1167793930320} Integrating with Respect to *y*

:::exercise {fs-id1167793930322} type= 
PROBLEM:
Let’s revisit [ref:fs-id1167793455088], only this time let’s integrate with respect to $y.$ Let $R$ be the region depicted in [ref:CNX_Calc_Figure_06_01_010]. Find the area of $R$ by integrating with respect to $y.$

> FIGURE {fig:CNX_Calc_Figure_06_01_010} src=../../media/CNX_Calc_Figure_06_01_010.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions f(x) = x^2 and g(x)= 2-x. In between these graphs is a shaded region, bounded to the left by f(x) and to the right by g(x). All of which is above the x-axis. The region is labeled R. The shaded area is between x=0 and x=2.
> caption: The area of region $R$ can be calculated using one integral only when the curves are treated as functions of $y.$

SOLUTION:
We must first express the graphs as functions of $y.$ As we saw at the beginning of this section, the curve on the left can be represented by the function $x=v(y)=\sqrt{y},$ and the curve on the right can be represented by the function $x=u(y)=2-y.$
Now we have to determine the limits of integration. The region is bounded below by the *x*-axis, so the lower limit of integration is $y=0.$ The upper limit of integration is determined by the point where the two graphs intersect, which is the point $(1,1),$ so the upper limit of integration is $y=1.$ Thus, we have $[c,d]=[0,1].$
Calculating the area of the region, we get

$\begin{array}{rl}A & ={{\displaystyle \int}}_{c}^{d}[u(y)-v(y)]dy \\ & ={{\displaystyle \int}}_{0}^{1}[(2-y)-\sqrt{y}]dy={[2y-\frac{{y}^{2}}{2}-\frac{2}{3}{y}^{3\text{/}2}]\;|}_{0}^{1} \\ & =\frac{5}{6}.\end{array}$  {eq:fs-id1167793316056}

The area of the region is $5\text{/}6$ units<sup>2</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793668617} type= 
PROBLEM:
Let’s revisit the checkpoint associated with [ref:fs-id1167793455088], only this time, let’s integrate with respect to $y.$ Let $R$ be the region depicted in the following figure. Find the area of $R$ by integrating with respect to $y.$

> IMAGE {img:fs-id1167793455079} src=../../media/CNX_Calc_Figure_06_01_011.jpg
> alt: This figure is has two graphs in the first quadrant. They are the functions f(x) = squareroot of x and g(x)= 3/2 – x/2. In between these graphs is a shaded region, bounded to the left by f(x) and to the right by g(x). All of which is above the x-axis. The shaded area is between x=0 and x=3.

SOLUTION:
$\frac{5}{3}$ units<sup>2</sup>
COMMENTARY: Hint
Follow the process from the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- Just as definite integrals can be used to find the area under a curve, they can also be used to find the area between two curves.
- To find the area between two curves defined by functions, integrate the difference of the functions.
- If the graphs of the functions cross, or if the region is complex, use the absolute value of the difference of the functions. In this case, it may be necessary to evaluate two or more integrals and add the results to find the area of the region.
- Sometimes it can be easier to integrate with respect to *y* to find the area. The principles are the same regardless of which variable is used as the variable of integration.

## Key Equations {section:key-equations}

> TABLE {tab:eip-504} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Area between two curves, integrating on the *x*-axis** | $A={{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx$ |
| **Area between two curves, integrating on the *y*-axis** | $A={{\displaystyle \int}}_{c}^{d}[u(y)-v(y)]dy$ |

##  {section:section-exercises}
For the following exercises, determine the area of the region between the two curves in the given figure by integrating over the $x\text{-axis}\text{.}$

:::exercise {fs-id1167793956497} type= 
PROBLEM:
$y={x}^{2}-3\;\text{and}\;y=1$

> IMAGE {img:fs-id1167794246832} src=../../media/CNX_Calc_Figure_06_01_201.jpg
> alt: This figure is has two graphs. They are the functions f(x) = x^2-3and g(x)=1. In between these graphs is a shaded region, bounded above by g(x) and below by f(x). The shaded area is between x=-2 and x=2.

SOLUTION:
$\frac{32}{3}$
:::

:::exercise {fs-id1167793540984} type= 
PROBLEM:
$y={x}^{2}\;\text{and}\;y=3x+4$

> IMAGE {img:fs-id1167793570054} src=../../media/CNX_Calc_Figure_06_01_202.jpg
> alt: This figure is has two graphs. They are the functions f(x) = x^2 and g(x)= 3x+4. In between these graphs is a shaded region, bounded above by g(x) and below by g(x).

:::
For the following exercises, split the region between the two curves into two smaller regions, then determine the area by integrating over the $x\text{-axis}.$ Note that you will have two integrals to solve.

:::exercise {fs-id1167793499141} type= 
PROBLEM:
$y={x}^{3}$ and $y={x}^{2}+x$

> IMAGE {img:fs-id1167794122407} src=../../media/CNX_Calc_Figure_06_01_203.jpg
> alt: This figure is has two graphs. They are the functions f(x) = x^3 and g(x)= x^2+x. These graphs intersect twice. The regions between the intersections are shaded. The first region is bounded above by f(x) and below by g(x). The second region is bounded above by g(x) and below by f(x).

SOLUTION:
$\frac{13}{12}$
:::

:::exercise {fs-id1167793423487} type= 
PROBLEM:
$y=\text{cos}\;\theta$ and $y=0.5,$ for $0\le \theta \le \pi$

> IMAGE {img:fs-id1167793940354} src=../../media/CNX_Calc_Figure_06_01_204.jpg
> alt: This figure is has two graphs. They are the functions f(theta) = cos(theta) and g(theta)= 0.5. These graphs intersect twice. The regions between the intersections are shaded. The first region is bounded above by f(theta) and below by g(theta). The second region is bounded above by g(theta) and below by f(theta).

:::
For the following exercises, determine the area of the region between the two curves by integrating over the $y\text{-axis}.$

:::exercise {fs-id1167793463068} type= 
PROBLEM:
$x={y}^{2}\;\text{and}\;x=9$

> IMAGE {img:fs-id1167793948177} src=../../media/CNX_Calc_Figure_06_01_205.jpg
> alt: This figure is has two graphs. They are the equations x=y^2 and x=9. The region between the graphs is shaded. It is horizontal, between the y-axis and the line x=9.

SOLUTION:
$36$
:::

:::exercise {fs-id1167793470639} type= 
PROBLEM:
$y=x\;\text{and}\;x={y}^{2}$

> IMAGE {img:fs-id1167793446650} src=../../media/CNX_Calc_Figure_06_01_206.jpg
> alt: This figure is has two graphs. They are the equations y=x and x=y^2. The region between the graphs is shaded, bounded above by x=y^2 and below by y=x.

:::
For the following exercises, graph the equations and shade the area of the region between the curves. Determine its area by integrating over the $x\text{-axis}.$

:::exercise {fs-id1167793637355} type= 
PROBLEM:
$y={x}^{2}\;\text{and}\;y=\text{−}{x}^{2}+18x$
SOLUTION:

> IMAGE {img:fs-id1167794199237} src=../../media/CNX_Calc_Figure_06_01_207.jpg
> alt: This figure is has two graphs. They are the functions f(x)=x^2 and g(x)=-x^2+18x. The region between the graphs is shaded, bounded above by g(x) and below by f(x). It is in the first quadrant.

243 square units
:::

:::exercise {fs-id1167794199254} type= 
PROBLEM:
$y=\frac{1}{x},y=\frac{1}{{x}^{2}},\;\text{and}\;x=3$
:::

:::exercise {fs-id1167793637971} type= 
PROBLEM:
$y=\text{cos}\;x$ and $y={\text{cos}}^{2}x$ on $x=[\text{−}\pi ,\pi ]$
SOLUTION:

> IMAGE {img:fs-id1167793424314} src=../../media/CNX_Calc_Figure_06_01_209.jpg
> alt: This figure is has two graphs. They are the functions y=cos(x) and y=cos^2(x). The graphs are periodic and resemble waves. There are four regions created by intersections of the curves. The areas are shaded.

4
:::

:::exercise {fs-id1167794163651} type= 
PROBLEM:
$y={e}^{x},y={e}^{2x-1},\;\text{and}\;x=0$
:::

:::exercise {fs-id1167793294684} type= 
PROBLEM:
$y={e}^{x},y={e}^{\text{−}x},x=−1\;\text{and}\;x=1$
SOLUTION:

> IMAGE {img:fs-id1167794324579} src=../../media/CNX_Calc_Figure_06_01_211.jpg
> alt: This figure is has two graphs. They are the functions f(x)=e^x and g(x)=e^-x. There are two shaded regions. In the second quadrant the region is bounded by x=-1, g(x) above and f(x) below. The second region is in the first quadrant and is bounded by f(x) above, g(x) below, and x=1.

$\frac{2{(e-1)}^{2}}{e}$
:::

:::exercise {fs-id1167793293855} type= 
PROBLEM:
$y=e,y={e}^{x},\;\text{and}\;y={e}^{\text{−}x}$
:::

:::exercise {fs-id1167793455053} type= 
PROBLEM:
$y=|x|\;\text{and}\;y={x}^{2}$
SOLUTION:

> IMAGE {img:fs-id1167793956412} src=../../media/CNX_Calc_Figure_06_01_213.jpg
> alt: This figure is has two graphs. They are the functions f(x)=x^2 and g(x)=absolute value of x. There are two shaded regions. The first region is in the second quadrant and is between g(x) above and f(x) below. The second region is in the first quadrant and is bounded above by g(x) and below by f(x).

$\frac{1}{3}$
:::
For the following exercises, graph the equations and shade the area of the region between the curves. If necessary, break the region into sub-regions to determine its entire area.

:::exercise {fs-id1167793546880} type= 
PROBLEM:
$y=\text{sin}(\pi x),y=2x,\;\text{and}\;x>0$
:::

:::exercise {fs-id1167793318490} type= 
PROBLEM:
$y=12-x,y=\sqrt{x},\;\text{and}\;y=1$
SOLUTION:

> IMAGE {img:fs-id1167793706110} src=../../media/CNX_Calc_Figure_06_01_215.jpg
> alt: This figure is has three graphs. They are the functions f(x)=squareroot of x, y=12-x, and y=1. The region between the graphs is shaded, bounded above and to the left by f(x), above and to the right by the line y=12-x, and below by the line y=1. It is in the first quadrant.

$\frac{34}{3}$
:::

:::exercise {fs-id1167793626898} type= 
PROBLEM:
$y=\text{sin}\;x$ and $y=\text{cos}\;x$ over $x=[\text{−}\pi ,\pi ]$
:::

:::exercise {fs-id1167793378470} type= 
PROBLEM:
$y={x}^{3}\;\text{and}\;y={x}^{2}-2x$ over $x=[−1,1]$
SOLUTION:

> IMAGE {img:fs-id1167793452514} src=../../media/CNX_Calc_Figure_06_01_217.jpg
> alt: This figure is has two graphs. They are the functions f(x)=x^3 and g(x)=x^2-2x. There are two shaded regions between the graphs. The first region is bounded to the left by the line x=-2, above by g(x) and below by f(x). The second region is bounded above by f(x), below by g(x) and to the right by the line x=2.

$\frac{5}{2}$
:::

:::exercise {fs-id1167793928049} type= 
PROBLEM:
$y={x}^{2}+9\;\text{and}\;y=10+2x$ over $x=[−1,3]$
:::

:::exercise {fs-id1167793455122} type= 
PROBLEM:
$y={x}^{3}+3x$ and $y=4x$
SOLUTION:

> IMAGE {img:fs-id1167793632676} src=../../media/CNX_Calc_Figure_06_01_219.jpg
> alt: This figure is has two graphs. They are the functions f(x)=x^3+3x and g(x)=4x. There are two shaded regions between the graphs. The first region is bounded above by f(x) and below by g(x). The second region is bounded above by g(x), below by f(x).

$\frac{1}{2}$
:::
For the following exercises, graph the equations and shade the area of the region between the curves. Determine its area by integrating over the $y\text{-axis}.$

:::exercise {fs-id1167793298201} type= 
PROBLEM:
$x={y}^{3}\;\text{and}\;x=3y-2$
:::

:::exercise {fs-id1167793956299} type= 
PROBLEM:
$x=2y\;\text{and}\;x={y}^{3}-y$
SOLUTION:

> IMAGE {img:fs-id1167793358328} src=../../media/CNX_Calc_Figure_06_01_221.jpg
> alt: This figure is has two graphs. They are the equations x=2y and x=y^3-y. The graphs intersect in the third quadrant and again in the first quadrant forming two closed regions in between them.

$\frac{9}{2}$
:::

:::exercise {fs-id1167793244345} type= 
PROBLEM:
$x=−3+{y}^{2}\;\text{and}\;x=y-{y}^{2}$
:::

:::exercise {fs-id1167793394824} type= 
PROBLEM:
${y}^{2}=x\;\text{and}\;x=y+2$
SOLUTION:

> IMAGE {img:fs-id1167793423528} src=../../media/CNX_Calc_Figure_06_01_223.jpg
> alt: This figure is has two graphs. They are the equations x=y+2 and y^2=x. The graphs intersect, forming a region in between them

$\frac{9}{2}$
:::

:::exercise {fs-id1167793638664} type= 
PROBLEM:
$x=|y|\;\text{and}\;2x=\text{−}{y}^{2}+2$
:::

:::exercise {fs-id1167793469835} type= 
PROBLEM:
$x=\text{sin}\;y,x=\text{cos}(2y),y=\pi \text{/}2,\text{and}\;y=\text{−}\pi \text{/}2$
SOLUTION:

> IMAGE {img:fs-id1167793562245} src=../../media/CNX_Calc_Figure_06_01_225.jpg
> alt: This figure is has two graphs. They are the equations x=cos(y) and x=sin(y). The graphs intersect, forming two regions bounded above by the line y=pi/2 and below by the line y=-pi/2.

$\frac{3\sqrt{3}}{2}$
:::
For the following exercises, graph the equations and shade the area of the region between the curves. Determine its area by integrating over the *x*-axis or *y*-axis, whichever seems more convenient.

:::exercise {fs-id1167793423469} type= 
PROBLEM:
$x={y}^{4}\text{and}\;x={y}^{5}$
:::

:::exercise {fs-id1167793372408} type= 
PROBLEM:
$y=x{e}^{x},y={e}^{x},x=0,\;\text{and}\;x=1$
SOLUTION:

> IMAGE {img:fs-id1167793473601} src=../../media/CNX_Calc_Figure_06_01_227.jpg
> alt: This figure is has two graphs. They are the equations y=xe^x and y=e^x. The graphs intersect, forming a region in between them in the first quadrant.

$e−2$
:::

:::exercise {fs-id1167793473627} type= 
PROBLEM:
$y={x}^{6}\text{and}\;y={x}^{4}$
:::

:::exercise {fs-id1167794054213} type= 
PROBLEM:
$x={y}^{3}+2{y}^{2}+1\;\text{and}\;x=\text{−}{y}^{2}+1$
SOLUTION:

> IMAGE {img:fs-id1167793479271} src=../../media/CNX_Calc_Figure_06_01_229.jpg
> alt: This figure is has two graphs. They are the equations x=-y^2+1 and x=y^3+2y^2. The graphs intersect, forming two regions in between them.

$\frac{27}{4}$
:::

:::exercise {fs-id1167793479297} type= 
PROBLEM:
$y=|x|\;\text{and}\;y={x}^{2}-1$
:::

:::exercise {fs-id1167794291677} type= 
PROBLEM:
$y=4-3x\;\text{and}\;y=\frac{1}{x}$
SOLUTION:

> IMAGE {img:fs-id1167793504042} src=../../media/CNX_Calc_Figure_06_01_231.jpg
> alt: This figure is has two graphs. They are the equations y=4-3x and y=1/x. The graphs intersect, having region between them shaded. The region is in the first quadrant.

$\frac{4}{3}-\text{ln}(3)$
:::

:::exercise {fs-id1167793499063} type= 
PROBLEM:
$y=\text{sin}\;x,x=\text{−}\pi \text{/}6,x=\pi \text{/}6,\text{and}\;y={\text{cos}}^{3}x$
:::

:::exercise {fs-id1167793473545} type= 
PROBLEM:
$y={x}^{2}-3x+2\;\text{and}\;y={x}^{3}-2{x}^{2}-x+2$
SOLUTION:

> IMAGE {img:fs-id1167793481995} src=../../media/CNX_Calc_Figure_06_01_233.jpg
> alt: This figure is has two graphs. They are the equations y=x^2-3x+2 and y=x^3-2x^2-x+2. The graphs intersect, having region between them shaded.

$\frac{1}{2}$
:::

:::exercise {fs-id1167793469771} type= 
PROBLEM:
$y=2\;{\text{cos}}^{3}(3x),y=−1,x=\frac{\pi}{4},\;\text{and}\;x=-\frac{\pi}{4}$
:::

:::exercise {fs-id1167793978418} type= 
PROBLEM:
$y+{y}^{3}=x\;\text{and}\;2y=x$
SOLUTION:

> IMAGE {img:fs-id1167793636573} src=../../media/CNX_Calc_Figure_06_01_235.jpg
> alt: This figure is has two graphs. They are the equations 2y=x and y+y^3=x. The graphs intersect, forming two regions. The regions are shaded.

$\frac{1}{2}$
:::

:::exercise {fs-id1167793551299} type= 
PROBLEM:
$y=\sqrt{1-{x}^{2}}\;\text{and}\;y={x}^{2}-1$
:::

:::exercise {fs-id1167793545637} type= 
PROBLEM:
$y={\text{cos}}^{−1}x,y={\text{sin}}^{−1}x,x=−1,\;\text{and}\;x=1$
SOLUTION:

> IMAGE {img:fs-id1167793543516} src=../../media/CNX_Calc_Figure_06_01_237.jpg
> alt: This figure is has two graphs. They are the equations y=arccos(x) and y=arcsin (x). The graphs intersect, forming two regions. The first region is bounded to the left by x=-1. The second region is bounded to the right by x=1. Both regions are shaded.

$−2(\sqrt{2}-\pi )$
:::
For the following exercises, find the exact area of the region bounded by the given equations if possible. If you are unable to determine the intersection points analytically, use a calculator to approximate the intersection points with three decimal places and determine the approximate area of the region.

:::exercise {fs-id1167793477066} type= 
PROBLEM:
**[T]** $x={e}^{y}\;\text{and}\;y=x-2$
:::

:::exercise {fs-id1167793952121} type= 
PROBLEM:
**[T]** $y={x}^{2}\;\text{and}\;y=\sqrt{1-{x}^{2}}$
SOLUTION:
$1.067$
:::

:::exercise {fs-id1167793518492} type= 
PROBLEM:
**[T]** $y=3{x}^{2}+8x+9\;\text{and}\;3y=x+24$
:::

:::exercise {fs-id1167793395009} type= 
PROBLEM:
**[T]** $x=\sqrt{4-{y}^{2}}\;\text{and}\;{y}^{2}=1+{x}^{2}$
SOLUTION:
$1.605$
:::

:::exercise {fs-id1167793421237} type= 
PROBLEM:
**[T]** ${x}^{2}={y}^{3}\;\text{and}\;x=3y$
:::

:::exercise {fs-id1167793640024} type= 
PROBLEM:
**[T]** $y={\text{sin}}^{3}x+2,y=\text{tan}\;x,x=−1.5,\;\text{and}\;x=1.5$
SOLUTION:
$7.523$
:::

:::exercise {fs-id1167793485270} type= 
PROBLEM:
**[T]** $y=\sqrt{1-{x}^{2}}\;\text{and}\;{y}^{2}={x}^{2}$
:::

:::exercise {fs-id1167793521340} type= 
PROBLEM:
**[T]** $y=\sqrt{1-{x}^{2}}\;\text{and}\;y={x}^{2}+2x+1$
SOLUTION:
$\frac{3\pi -4}{12}$
:::

:::exercise {fs-id1167793931545} type= 
PROBLEM:
**[T]** $x=4-{y}^{2}\;\text{and}\;x=1+3y+{y}^{2}$
:::

:::exercise {fs-id1167793595212} type= 
PROBLEM:
**[T]** $y=\text{cos}\;x,y={e}^{x},x=\text{−}\pi ,\;\text{and}\;x=0$
SOLUTION:
$1.429$
:::

:::exercise {fs-id1167793221704} type= 
PROBLEM:
The largest triangle with a base on the $x\text{-axis}$ that fits inside the upper half of the unit circle ${y}^{2}+{x}^{2}=1$ is given by $y=1+x$ and $y=1-x.$ See the following figure. What is the area inside the semicircle but outside the triangle?

> IMAGE {img:fs-id1167793634227} src=../../media/CNX_Calc_Figure_06_01_238.jpg
> alt: This figure is has the graph of a circle with center at the origin and radius of 1. There is a triangle inscribed with base on the x-axis from -1 to 1 and the third corner at the point y=1.

:::

:::exercise {fs-id1167793634260} type= 
PROBLEM:
A factory selling cell phones has a marginal cost function $C(x)=0.01{x}^{2}-3x+229,$ where $x$ represents the number of cell phones, $C$ is the marginal cost, in dollars, of selling $x$ phones, and a marginal revenue function given by $R(x)=429-2x$, where $R$ is the revenue, in dollars, earned by selling $x$ cell phonesFind the area between the graphs of these curves and $x=0.$ What does this area represent?
SOLUTION:
$\text{\$}33,333.33$ total profit for $200$ cell phones sold
:::

:::exercise {fs-id1167793627001} type= 
PROBLEM:
An amusement park has a marginal cost function $C(x)=1000{e}^{\text{−}x}+5,$ where $x$ represents the number of tickets sold, and a marginal revenue function given by $R(x)=60-0.1x.$ Find the total profit generated when selling $550$ tickets. Use a calculator to determine intersection points, if necessary, to two decimal places.
:::

:::exercise {fs-id1167794005221} type= 
PROBLEM:
The tortoise versus the hare: The speed of the hare is given by the sinusoidal function $H(t)=1-\text{cos}((\pi t)\text{/}2)$ whereas the speed of the tortoise is $T(t)=0.1032t$ where $t$ is time measured in hours and the speed is measured in miles per hour. Find the area between the curves from time $t=0$ to the first time after one hour when the tortoise and hare are traveling at the same speed. What does it represent? Use a calculator to determine the intersection points, if necessary, accurate to three decimal places.
SOLUTION:
$3.32$ mi represents how far ahead the hare is from the tortoise
:::

:::exercise {fs-id1167793543343} type= 
PROBLEM:
The tortoise versus the hare: The speed of the hare is given by the sinusoidal function $H(t)=(1\text{/}2)-(1\text{/}2)\text{cos}(2\pi t)$ whereas the speed of the tortoise is $T(t)=\sqrt{t},$ where $t$ is time measured in hours and speed is measured in kilometers per hour. If the race is over in $1$ hour, who won the race and by how much? Use a calculator to determine the intersection points, if necessary, accurate to three decimal places.
:::
For the following exercises, find the area between the curves by integrating with respect to $x$ and then with respect to $y.$ Is one method easier than the other? Do you obtain the same answer?

:::exercise {fs-id1167794127463} type= 
PROBLEM:
$y={x}^{2}+2x+1\;\text{and}\;y=\text{−}{x}^{2}-3x+4$
SOLUTION:
$\frac{343}{24}$
:::

:::exercise {fs-id1167793455306} type= 
PROBLEM:
$y={x}^{4}\text{and}\;x={y}^{5}$
:::

:::exercise {fs-id1167793455357} type= 
PROBLEM:
$x={y}^{2}-2\;\text{and}\;x=2y$
SOLUTION:
$4\sqrt{3}$
:::
For the following exercises, solve using calculus, then check your answer with geometry.

:::exercise {fs-id1167793937980} type= 
PROBLEM:
Determine the equations for the sides of the square that touches the unit circle on all four sides, as seen in the following figure. Find the area between the perimeter of this square and the unit circle. Is there another way to solve this without using calculus?

> IMAGE {img:fs-id1167793937990} src=../../media/CNX_Calc_Figure_06_01_239.jpg
> alt: This figure is the graph of a circle centered at the origin with radius of 1. There is a circumscribed square around the circle.

:::

:::exercise {fs-id1167793423271} type= 
PROBLEM:
Find the area between the perimeter of the unit circle and the triangle created from $y=2x+1,y=1-2x$ and $y=-\frac{3}{5},$ as seen in the following figure. Is there a way to solve this without using calculus?

> IMAGE {img:fs-id1167794146796} src=../../media/CNX_Calc_Figure_06_01_240.jpg
> alt: This figure is the graph of a circle centered at the origin with radius of 1. There are three lines intersecting the circle. The lines intersect the circle at three points to form a triangle within the circle.

SOLUTION:
$\pi -\frac{32}{25}$
:::

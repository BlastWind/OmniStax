# Calculating Centers of Mass and Moments of Inertia

## Learning Objectives {section:learning-objectives}
- Use double integrals to locate the center of mass of a two-dimensional object.
- Use double integrals to find the moment of inertia of a two-dimensional object.
- Use triple integrals to locate the center of mass of a three-dimensional object.

We have already discussed a few applications of multiple integrals, such as finding areas, volumes, and the average value of a function over a bounded region. In this section we develop computational techniques for finding the center of mass and moments of inertia of several types of physical objects, using double integrals for a lamina (flat plate) and triple integrals for a three-dimensional object with variable density. The density is usually considered to be a constant number when the lamina or the object is homogeneous; that is, the object has uniform density.

## Center of Mass in Two Dimensions
The center of mass is also known as the center of gravity if the object is in a uniform gravitational field. If the object has uniform density, the center of mass is the geometric center of the object, which is called the centroid. [ref:CNX_Calc_Figure_15_06_001] shows a point $P$ as the center of mass of a lamina. The lamina is perfectly balanced about its center of mass.

> FIGURE {fig:CNX_Calc_Figure_15_06_001} src=../../media/CNX_Calc_Figure_15_06_001.jpg
> alt: A surface is delicately balanced on a fine point.
> caption: A lamina is perfectly balanced on a spindle if the lamina’s center of mass sits on the spindle.

To find the coordinates of the center of mass $P(\overset{\text{−}}{x},\overset{\text{−}}{y})$ of a lamina, we need to find the moment ${M}_{x}$ of the lamina about the $x\text{-axis}$ and the moment ${M}_{y}$ about the $y\text{-axis}\text{.}$ We also need to find the mass $m$ of the lamina. Then

$\overset{\text{−}}{x}=\frac{{M}_{y}}{m}\;\text{and}\;\overset{\text{−}}{y}=\frac{{M}_{x}}{m}.$  {eq:fs-id1167794325351}

Refer to [Moments and Centers of Mass](module:m53649) for the definitions and the methods of single integration to find the center of mass of a one-dimensional object (for example, a thin rod). We are going to use a similar idea here except that the object is a two-dimensional lamina and we use a double integral.
If we allow a constant density function, then $\overset{\text{−}}{x}=\frac{{M}_{y}}{m}\;\text{and}\;\overset{\text{−}}{y}=\frac{{M}_{x}}{m}$ give the *centroid* of the lamina.
Suppose that the lamina occupies a region $R$ in the $xy\text{-plane},$ and let $ρ(x,y)$ be its density (in units of mass per unit area) at any point $(x,y).$ Hence, $ρ(x,y)=\lim_{\text{Δ}A\to 0}\frac{\text{Δ}m}{\text{Δ}A},$ where $\text{Δ}m$ and $\text{Δ}A$ are the mass and area of a small rectangle containing the point $(x,y)$ and the limit is taken as the dimensions of the rectangle go to $0$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_06_002} src=../../media/CNX_Calc_Figure_15_06_002.jpg
> alt: A lamina R is shown on the x y plane with a point (x, y) surrounded by a small rectangle marked Mass = Delta m and Area = Delta A.
> caption: The density of a lamina at a point is the limit of its mass per area in a small rectangle about the point as the area goes to zero.

Just as before, we divide the region $R$ into tiny rectangles ${R}_{ij}$ with area $\text{Δ}A$ and choose $({x}_{ij}^{*},{y}_{ij}^{*})$ as sample points. Then the mass ${m}_{ij}$ of each ${R}_{ij}$ is equal to $ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A$ ([ref:CNX_Calc_Figure_15_06_003]). Let $k$ and $l$ be the number of subintervals in $x$ and $y,$ respectively. Also, note that the shape might not always be rectangular but the limit works anyway, as seen in previous sections.

> FIGURE {fig:CNX_Calc_Figure_15_06_003} src=../../media/CNX_Calc_Figure_15_06_003.jpg
> alt: A lamina is shown on the x y plane with a point (x* sub ij, y* sub ij) surrounded by a small rectangle marked R sub ij.
> caption: Subdividing the lamina into tiny rectangles ${R}_{ij},$ each containing a sample point $({x}_{ij}^{*},{y}_{ij}^{*}).$

Hence, the mass of the lamina is

$$ m=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} {m}_{ij}}}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}ρ(x,y)dA}}}. $$  {eq:fs-id1167793844477}

Let’s see an example now of finding the total mass of a triangular lamina.

:::example {ex:fs-id1167794038223} Finding the Total Mass of a Lamina

:::exercise {fs-id1167794287167} type= 
PROBLEM:
Consider a triangular lamina $R$ with vertices $(0,0),(0,3),$ $(3,0)$ and with density $ρ(x,y)=xy{\;\text{kg/m}}^{2}.$ Find the total mass.
SOLUTION:
A sketch of the region $R$ is always helpful, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_06_004} src=../../media/CNX_Calc_Figure_15_06_004.jpg
> alt: A triangular lamina is shown on the x y plane bounded by the x and y axes and the line x + y = 3. The point (1, 1) is marked and is surrounded by a small squared marked d m = p(x, y) dA.
> caption: A lamina in the $xy\text{-plane}$ with density $ρ(x,y)=xy.$

Using the expression developed for mass, we see that

$\begin{array}{rl}m & ={\displaystyle \iint\limits_{R}dm={\displaystyle \iint\limits_{R}ρ(x,y)}}dA={\displaystyle \int_{x=0}^{x=3} \;{\displaystyle \int_{y=0}^{y=3-x} xy\;dy\;dx={\displaystyle \int_{x=0}^{x=3} [{x\frac{{y}^{2}}{2}|}_{y=0}^{y=3-x}]}}}dx \\ & ={\displaystyle \int_{x=0}^{x=3} \frac{1}{2}}x{(3-x)}^{2}dx={[\frac{9{x}^{2}}{4}-{x}^{3}+\frac{{x}^{4}}{8}]|}_{x=0}^{x=3} \\ & =\frac{27}{8}.\end{array}$  {eq:fs-id1167794047907}

The computation is straightforward, giving the answer $m=\frac{27}{8}\;\text{kg}\text{.}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794029015} type= 
PROBLEM:
Consider the same region $R$ as in the previous example, and use the density function $ρ(x,y)=\sqrt{xy}.$ Find the total mass. *Hint:* Use trigonometric substitution $\sqrt{x}=\sqrt{3}sin\theta$ and then use the power reducing formulas for trigonometric functions.
SOLUTION:
$\frac{9\pi}{8}\;\text{kg}$
:::
:::
Now that we have established the expression for mass, we have the tools we need for calculating moments and centers of mass. The moment ${M}_{x}$ about the $x\text{-axis}$ for $R$ is the limit of the sums of moments of the regions ${R}_{ij}$ about the $x\text{-axis}\text{.}$ Hence

$$ {M}_{x}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{{}_{ij}}^{*})}}{m}_{ij}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{{}_{ij}}^{*})}}ρ({x}_{{}_{ij}}^{*},{y}_{{}_{ij}}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}yρ(x,y)dA}. $$  {eq:fs-id1167793972894}

Similarly, the moment ${M}_{y}$ about the $y\text{-axis}$ for $R$ is the limit of the sums of moments of the regions ${R}_{ij}$ about the $y\text{-axis}\text{.}$ Hence

$$ {M}_{y}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({x}_{{}_{ij}}^{*})}}{m}_{ij}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{{}_{ij}}^{*})}}ρ({x}_{{}_{ij}}^{*},{y}_{{}_{ij}}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}xρ(x,y)dA}. $$  {eq:fs-id1167793956495}

:::example {ex:fs-id1167794122810} Finding Moments

:::exercise {fs-id1167794123060} type= 
PROBLEM:
Consider the same triangular lamina $R$ with vertices $(0,0),(0,3),\;(3,0)$ and with density $ρ(x,y)=xy.$ Find the moments ${M}_{x}$ and ${M}_{y}.$
SOLUTION:
Use double integrals for each moment and compute their values:

${M}_{x}={\displaystyle \iint\limits_{R}yρ(x,y)dA={\displaystyle \int_{x=0}^{x=3} \;{\displaystyle \int_{y=0}^{y=3-x} x{y}^{2}\;dy\;dx}}}=\frac{81}{20},$  {eq:fs-id1167793512907}

${M}_{y}={\displaystyle \iint\limits_{R}xρ(x,y)dA={\displaystyle \int_{x=0}^{x=3} \;{\displaystyle \int_{y=0}^{y=3-x} {x}^{2}\;yd\;y\;dx}}}=\frac{81}{20}.$  {eq:fs-id1167794002786}

The computation is quite straightforward.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793940870} type= 
PROBLEM:
Consider the same lamina $R$ as above, and use the density function $ρ(x,y)=\sqrt{xy}.$ Find the moments ${M}_{x}$ and ${M}_{y}.$
SOLUTION:
${M}_{x}=\frac{81\pi}{64}$ and ${M}_{y}=\frac{81\pi}{64}$
:::
:::
Finally we are ready to restate the expressions for the center of mass in terms of integrals. We denote the *x*-coordinate of the center of mass by $\overset{\text{−}}{x}$ and the *y*-coordinate by $\overset{\text{−}}{y}.$ Specifically,

$$ \overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}xρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}\;\text{and}\;\overset{\text{−}}{y}=\frac{{M}_{x}}{m}\;=\frac{{\displaystyle \iint\limits_{R}yρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}. $$  {eq:fs-id1167793828955}

:::example {ex:fs-id1167793450658} Finding the Center of Mass

:::exercise {fs-id1167793278439} type= 
PROBLEM:
Again consider the same triangular region $R$ with vertices $(0,0),(0,3),$ $(3,0)$ and with density function $ρ(x,y)=xy.$ Find the center of mass.
SOLUTION:
Using the formulas we developed, we have

$\overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}xρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}=\frac{81\text{/}20}{27\text{/}8}=\frac{6}{5},$  {eq:fs-id1167793292486}

$\overset{\text{−}}{y}=\frac{{M}_{x}}{m}=\frac{{\displaystyle \iint\limits_{R}yρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}=\frac{81\text{/}20}{27\text{/}8}=\frac{6}{5}.$  {eq:fs-id1167794004868}

Therefore, the center of mass is the point $(\frac{6}{5},\frac{6}{5}).$
COMMENTARY: Analysis
If we choose the density $ρ(x,y)$ instead to be uniform throughout the region (i.e., constant), such as the value 1 (any constant will do), then we can compute the centroid,

$\begin{array}{l} \\ \\ \\ \\ {x}_{c}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}x\;dA}}{{\displaystyle \iint\limits_{R}dA}}=\frac{9\text{/}2}{9\text{/}2}=1, \\ {y}_{c}=\frac{{M}_{x}}{m}\;=\frac{{\displaystyle \iint\limits_{R}y\;dA}}{{\displaystyle \iint\limits_{R}dA}}=\frac{9\text{/}2}{9\text{/}2}=1.\end{array}$  {eq:fs-id1167794042494}

Notice that the center of mass $(\frac{6}{5},\frac{6}{5})$ is not exactly the same as the centroid $(1,1)$ of the triangular region. This is due to the variable density of $R.$ If the density is constant, then we just use $ρ(x,y)=c$ (constant). This value cancels out from the formulas, so for a constant density, the center of mass coincides with the centroid of the lamina.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793931166} type= 
PROBLEM:
Again use the same region $R$ as above and the density function $ρ(x,y)=\sqrt{xy}.$ Find the center of mass.
SOLUTION:
$\overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{81\pi \text{/}64}{9\pi \text{/}8}=\frac{9}{8}$ and $\overset{\text{−}}{y}=\frac{{M}_{x}}{m}=\frac{81\pi \text{/}64}{9\pi \text{/}8}=\frac{9}{8}.$
:::
:::
Once again, based on the comments at the end of [ref:fs-id1167793450658], we have expressions for the centroid of a region on the plane:

${x}_{c}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}x\;dA}}{{\displaystyle \iint\limits_{R}dA}}\;\text{and}\;{y}_{c}=\frac{{M}_{x}}{m}\;\frac{{\displaystyle \iint\limits_{R}y\;dA}}{{\displaystyle \iint\limits_{R}dA}}.$  {eq:fs-id1167793888063}

We should use these formulas and verify the centroid of the triangular region $R$ referred to in the last three examples.

:::example {ex:fs-id1167794250129} Finding Mass, Moments, and Center of Mass

:::exercise {fs-id1167794250132} type= 
PROBLEM:
Find the mass, moments, and the center of mass of the lamina of density $ρ(x,y)=x+y$ occupying the region $R$ under the curve $y={x}^{2}$ in the interval $0\le x\le 2$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_06_005} src=../../media/CNX_Calc_Figure_15_06_005.jpg
> alt: A lamina R is shown on the x y plane bounded by the x axis, the line x = 2, and the line y = x squared. The corners of the shape are (0, 0), (2, 0), and (2, 4).
> caption: Locating the center of mass of a lamina $R$ with density $ρ(x,y)=x+y.$

SOLUTION:
First we compute the mass $m.$ We need to describe the region between the graph of $y={x}^{2}$ and the vertical lines $x=0$ and $x=2\text{:}$

$\begin{array}{rl}m & ={\displaystyle \iint\limits_{R}dm}={\displaystyle \iint\limits_{R}ρ(x,y)dA={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y={x}^{2}} (x+y)dy\;dx={\displaystyle \int_{x=0}^{x=2} [{xy+\frac{{y}^{2}}{2}|}_{y=0}^{y={x}^{2}}]}}}}dx \\ & ={\displaystyle \int_{x=0}^{x=2} [{x}^{3}+\frac{{x}^{4}}{2}]}dx={[\frac{{x}^{4}}{4}+\frac{{x}^{5}}{10}]|}_{x=0}^{x=2}=\frac{36}{5}.\end{array}$  {eq:fs-id1167793427503}

Now compute the moments ${M}_{x}$ and ${M}_{y}\text{:}$

${M}_{x}={\displaystyle \iint\limits_{R}yρ(x,y)}dA={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y={x}^{2}} y(x+y)dy\;dx=\frac{80}{7}}},$  {eq:fs-id1167794058697}

${M}_{y}={\displaystyle \iint\limits_{R}xρ(x,y)}dA={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y={x}^{2}} x(x+y)dy\;dx=\frac{176}{15}}}.$  {eq:fs-id1167794160462}

Finally, evaluate the center of mass,

$\begin{array}{l} \\ \\ \\ \overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}xρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}=\frac{176\text{/}15}{36\text{/}5}=\frac{44}{27}, \\ \overset{\text{−}}{y}=\frac{{M}_{x}}{m}=\frac{{\displaystyle \iint\limits_{R}yρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}=\frac{80\text{/}7}{36\text{/}5}=\frac{100}{63}.\end{array}$  {eq:fs-id1167793268219}

Hence the center of mass is $(\overset{\text{−}}{x},\overset{\text{−}}{y})=(\frac{44}{27},\frac{100}{63}).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793294395} type= 
PROBLEM:
Calculate the mass, moments, and the center of mass of the region between the curves $y=x$ and $y={x}^{2}$ with the density function $ρ(x,y)=x$ in the interval $0\le x\le 1.$
SOLUTION:
$\overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{1\text{/}20}{1\text{/}12}=\frac{3}{5}$ and $\overset{\text{−}}{y}=\frac{{M}_{x}}{m}=\frac{1\text{/}24}{1\text{/}12}=\frac{1}{2}$
:::
:::

:::example {ex:fs-id1167794094296} Finding a Centroid

:::exercise {fs-id1167793451904} type= 
PROBLEM:
Find the centroid of the region under the curve $y={e}^{x}$ over the interval $1\le x\le 3$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_06_006} src=../../media/CNX_Calc_Figure_15_06_006.jpg
> alt: On the x y plane the curve y = e to the x is shown from x = 0 to x = 3 (3, e cubed). The points (1, 0) and (3, 0) are marked on the x axes. A dashed line rises from (1, 0) marked x = 1; similarly, a solid line rises from (3, 0) marked x = 3.
> caption: Finding a centroid of a region below the curve $y={e}^{x}.$

SOLUTION:
To compute the centroid, we assume that the density function is constant and hence it cancels out:

$\begin{array}{l} \\ \\ \\ \\ {x}_{c}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}x\;dA}}{{\displaystyle \iint\limits_{R}dA}}\;\text{and}\;{y}_{c}=\frac{{M}_{x}}{m}=\frac{{\displaystyle \iint\limits_{R}y\;dA}}{{\displaystyle \iint\limits_{R}dA}}, \\ {x}_{c}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}x\;dA}}{{\displaystyle \iint\limits_{R}dA}}=\frac{{\displaystyle \int_{x=1}^{x=3} \;{\displaystyle \int_{y=0}^{y={e}^{x}} x\;dy\;dx}}}{{\displaystyle \int_{x=1}^{x=3} \;{\displaystyle \int_{y=0}^{y={e}^{x}} dy\;dx}}}=\frac{{\displaystyle \int_{x=1}^{x=3} x{e}^{x}dx}}{{\displaystyle \int_{x=1}^{x=3} {e}^{x}dx}}=\frac{2{e}^{3}}{{e}^{3}-e}=\frac{2{e}^{2}}{{e}^{2}-1}, \\ {y}_{c}=\frac{{M}_{x}}{m}=\frac{{\displaystyle \iint\limits_{R}y\;dA}}{{\displaystyle \iint\limits_{R}dA}}=\frac{{\displaystyle \int_{x=1}^{x=3} \;{\displaystyle \int_{y=0}^{y={e}^{x}} y\;dy\;dx}}}{{\displaystyle \int_{x=1}^{x=3} \;{\displaystyle \int_{y=0}^{y={e}^{x}} dy\;dx}}}=\frac{{\displaystyle \int_{x=1}^{x=3} \frac{{e}^{2x}}{2}dx}}{{\displaystyle \int_{x=1}^{x=3} {e}^{x}dx}}=\frac{\frac{1}{4}{e}^{2}({e}^{4}-1)}{e({e}^{2}-1)}=\frac{1}{4}e({e}^{2}+1).\end{array}$  {eq:fs-id1167793266372}

Thus the centroid of the region is

$({x}_{c},{y}_{c})=(\frac{2{e}^{2}}{{e}^{2}-1},\frac{1}{4}e({e}^{2}+1)).$  {eq:fs-id1167794228261}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794023002} type= 
PROBLEM:
Calculate the centroid of the region between the curves $y=x$ and $y=\sqrt{x}$ with uniform density in the interval $0\le x\le 1.$
SOLUTION:
${x}_{c}=\frac{{M}_{y}}{m}=\frac{1\text{/}15}{1\text{/}6}=\frac{2}{5}\;\text{and}\;{y}_{c}=\frac{{M}_{x}}{m}=\frac{1\text{/}12}{1\text{/}6}=\frac{1}{2}$
:::
:::

## Moments of Inertia
For a clear understanding of how to calculate moments of inertia using double integrals, we need to go back to the general definition of moments and centers of mass in Section 6.6 of Volume 1. The moment of inertia of a particle of mass $m$ about an axis is $m{r}^{2},$ where $r$ is the distance of the particle from the axis. We can see from [ref:CNX_Calc_Figure_15_06_003] that the moment of inertia of the subrectangle ${R}_{ij}$ about the $x\text{-axis}$ is ${({y}_{ij}^{*})}^{2}ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A.$ Similarly, the moment of inertia of the subrectangle ${R}_{ij}$ about the $y\text{-axis}$ is ${({x}_{ij}^{*})}^{2}ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A.$ The moment of inertia is related to the rotation of the mass; specifically, it measures the tendency of the mass to resist a change in rotational motion about an axis.
The moment of inertia ${I}_{x}$ about the $x\text{-axis}$ for the region $R$ is the limit of the sum of moments of inertia of the regions ${R}_{ij}$ about the $x\text{-axis}\text{.}$ Hence

${I}_{x}=\lim_{k,l\to \infty}{{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{ij}^{*})}}}^{2}{m}_{ij}=\lim_{k,l\to \infty}{{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{ij}^{*})}}}^{2}ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}{y}^{2}ρ(x,y)}dA.$  {eq:fs-id1167793292150}

Similarly, the moment of inertia ${I}_{y}$ about the $y\text{-axis}$ for $R$ is the limit of the sum of moments of inertia of the regions ${R}_{ij}$ about the $y\text{-axis}\text{.}$ Hence

${I}_{y}=\lim_{k,l\to \infty}{{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({x}_{ij}^{*})}}}^{2}{m}_{ij}=\lim_{k,l\to \infty}{{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({x}_{ij}^{*})}}}^{2}ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}{x}^{2}ρ(x,y)}dA.$  {eq:fs-id1167793627924}

Sometimes, we need to find the moment of inertia of an object about the origin, which is known as the polar moment of inertia. We denote this by ${I}_{0}$ and obtain it by adding the moments of inertia ${I}_{x}$ and ${I}_{y}.$ Hence

${I}_{0}={I}_{x}+{I}_{y}={\displaystyle \iint\limits_{R}({x}^{2}+{y}^{2})}ρ(x,y)dA.$  {eq:fs-id1167793267236}

All these expressions can be written in polar coordinates by substituting $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ and $dA=r\;dr\;d\theta .$ For example, ${I}_{0}={\displaystyle \iint\limits_{R}{r}^{2}ρ(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta )}dA.$

:::example {ex:fs-id1167793924276} Finding Moments of Inertia for a Triangular Lamina

:::exercise {fs-id1167793924278} type= 
PROBLEM:
Use the triangular region $R$ with vertices $(0,0),(2,2),$ and $(2,0)$ and with density $ρ(x,y)=xy$ as in previous examples. Find the moments of inertia.
SOLUTION:
Using the expressions established above for the moments of inertia, we have

$\begin{array}{rll}{I}_{x} & = & {\displaystyle \iint\limits_{R}{y}^{2}ρ(x,y)}dA={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y=x} x{y}^{3}dy\;dx}}=\frac{8}{3}, \\ {I}_{y} & = & {\displaystyle \iint\limits_{R}{x}^{2}ρ(x,y)}dA={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y=x} {x}^{3}y\;dy\;dx}}=\frac{16}{3}, \\ {I}_{0} & = & {\displaystyle \iint\limits_{R}({x}^{2}+{y}^{2})}ρ(x,y)dA={\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{x} ({x}^{2}+{y}^{2})xy\;dy\;dx}} \\ & = & {I}_{x}+{I}_{y}=8.\end{array}$  {eq:fs-id1167793419960}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794293257} type= 
PROBLEM:
Again use the same region $R$ as above and the density function $ρ(x,y)=\sqrt{xy}.$ Find the moments of inertia.
SOLUTION:
${I}_{x}={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y=x} {y}^{2}\sqrt{xy}\;dy\;dx}}=\frac{64}{35}$ and ${I}_{y}={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y=x} {x}^{2}\sqrt{xy}\;dy\;dx}}=\frac{64}{35}.$ Also, ${I}_{0}={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=0}^{y=x} ({x}^{2}+{y}^{2})\sqrt{xy}\;dy\;dx}}=\frac{128}{35}.$
:::
:::
As mentioned earlier, the moment of inertia of a particle of mass $m$ about an axis is $m{r}^{2}$ where $r$ is the distance of the particle from the axis, also known as the {term:radius of gyration}.
Hence the radii of gyration with respect to the $x\text{-axis,}$ the $y\text{-axis,}$ and the origin are

${R}_{x}=\sqrt{\frac{{I}_{x}}{m}},{R}_{y}=\sqrt{\frac{{I}_{y}}{m}},\text{and}\;{R}_{0}=\sqrt{\frac{{I}_{0}}{m}},$  {eq:fs-id1167793263221}

respectively. In each case, the radius of gyration tells us how far (perpendicular distance) from the axis of rotation the entire mass of an object might be concentrated. The moments of an object are useful for finding information on the balance and torque of the object about an axis, but radii of gyration are used to describe the distribution of mass around its centroidal axis. There are many applications in engineering and physics. Sometimes it is necessary to find the radius of gyration, as in the next example.

:::example {ex:fs-id1167794296453} Finding the Radius of Gyration for a Triangular Lamina

:::exercise {fs-id1167794296455} type= 
PROBLEM:
Consider the same triangular lamina $R$ with vertices $(0,0),(2,2),$ and $(2,0)$ and with density $ρ(x,y)=xy$ as in previous examples. Find the radii of gyration with respect to the $x\text{-axis,}$ the $y\text{-axis,}$ and the origin.
SOLUTION:
If we compute the mass of this region we find that $m=2.$ We found the moments of inertia of this lamina in [ref:fs-id1167794250129]. From these data, the radii of gyration with respect to the $x\text{-axis,}$ $y\text{-axis,}$ and the origin are, respectively,

$\begin{array}{rll}{R}_{x} & = & \sqrt{\frac{{I}_{x}}{m}}=\sqrt{\frac{8\text{/}3}{2}}=\sqrt{\frac{8}{6}}=\frac{2\sqrt{3}}{3}, \\ {R}_{y} & = & \sqrt{\frac{{I}_{y}}{m}}=\sqrt{\frac{16\text{/}3}{2}}=\sqrt{\frac{8}{3}}=\frac{2\sqrt{6}}{3}, \\ {R}_{0} & = & \sqrt{\frac{{I}_{0}}{m}}=\sqrt{\frac{8}{2}}=\sqrt{4}=2.\end{array}$  {eq:fs-id1167793313353}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793371056} type= 
PROBLEM:
Use the same region $R$ from [ref:fs-id1167794296453] and the density function $ρ(x,y)=\sqrt{xy}.$ Find the radii of gyration with respect to the $x\text{-axis,}$ the $y\text{-axis,}$ and the origin.
SOLUTION:
${R}_{x}=\frac{6\sqrt{35}}{35},$ ${R}_{y}=\frac{6\sqrt{35}}{35},$ and ${R}_{0}=\frac{6\sqrt{70}}{35}.$
COMMENTARY: Hint
Follow the steps shown in the previous example.
:::
:::

## Center of Mass and Moments of Inertia in Three Dimensions
All the expressions of double integrals discussed so far can be modified to become triple integrals.

:::note [definition] Definition
If we have a solid object $Q$ with a density function $ρ(x,y,z)$ at any point $(x,y,z)$ in space, then its mass is

$m={\displaystyle \iiint\limits_{Q}ρ(x,y,z)}dV.$  {eq:fs-id1167793376300}

Its moments about the $xy\text{-plane,}$ the $xz\text{-plane,}$ and the $yz\text{-plane}$ are

$\begin{array}{l}{M}_{xy}={\displaystyle \iiint\limits_{Q}zρ(x,y,z)}dV,\;{M}_{xz}={\displaystyle \iiint\limits_{Q}yρ(x,y,z)}dV, \\ {M}_{yz}={\displaystyle \iiint\limits_{Q}xρ(x,y,z)}dV.\end{array}$  {eq:fs-id1167794293234}

If the center of mass of the object is the point $(\overset{\text{−}}{x},\overset{\text{−}}{y},\overset{\text{−}}{z}),$ then

$\overset{\text{−}}{x}=\frac{{M}_{yz}}{m}, \;\overset{\text{−}}{y}=\frac{{M}_{xz}}{m},\overset{\text{−}}{z}=\frac{{M}_{xy}}{m}.$  {eq:fs-id1167793293478}

Also, if the solid object is homogeneous (with constant density), then the center of mass becomes the centroid of the solid. Finally, the moments of inertia about the $yz\text{-plane,}$ the $xz\text{-plane,}$ and the $xy\text{-plane}$ are

$\begin{array}{l} \\ {I}_{x}={\displaystyle \iiint\limits_{Q}({y}^{2}+{z}^{2})}ρ(x,y,z)dV, \\ {I}_{y}={\displaystyle \iiint\limits_{Q}({x}^{2}+{z}^{2})}ρ(x,y,z)dV, \\ {I}_{z}={\displaystyle \iiint\limits_{Q}({x}^{2}+{y}^{2})}ρ(x,y,z)dV.\end{array}$  {eq:fs-id1167793504398}

:::

:::example {ex:fs-id1167793313677} Finding the Mass of a Solid

:::exercise {fs-id1167793313679} type= 
PROBLEM:
Suppose that $Q$ is a solid region bounded by $x+2y+3z=6$ and the coordinate planes and has density $ρ(x,y,z)={x}^{2}yz.$ Find the total mass.
SOLUTION:
The region $Q$ is a tetrahedron ([ref:CNX_Calc_Figure_15_06_007]) meeting the axes at the points $(6,0,0),(0,3,0),$ and $(0,0,2).$ To find the limits of integration, let $z=0$ in the slanted plane $z=\frac{1}{3}(6-x-2y).$ Then for $x$ and $y$ find the projection of $Q$ onto the $xy\text{-plane,}$ which is bounded by the axes and the line $x+2y=6.$ Hence the mass is

$m={\displaystyle \iiint\limits_{Q}ρ(x,y,z)dV={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=1\text{/}2(6-x)} \;{\displaystyle \int_{z=0}^{z=1\text{/}3(6-x-2y)} {x}^{2}yz\;dz\;dy\;dx=\frac{108}{35}\approx 3.086}}}}.$  {eq:fs-id1167793490885}

> FIGURE {fig:CNX_Calc_Figure_15_06_007} src=../../media/CNX_Calc_Figure_15_06_007.jpg
> alt: In x y z space, the solid Q is shown with corners (0, 0, 0), (0, 0, 2), (0, 3, 0), and (6, 0, 0). Alternatively, you could consider the solid as being bounded by the x y, x z, and y z planes and the plane x + 2y + 3z = 6, forming an irregular tetrahedron.
> caption: Finding the mass of a three-dimensional solid $Q.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794284189} type= 
PROBLEM:
Consider the same region $Q$ ([ref:CNX_Calc_Figure_15_06_007]), and use the density function $ρ(x,y,z)=x{y}^{2}z.$ Find the mass.
SOLUTION:
$\frac{54}{35}=1.543$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::

:::example {ex:fs-id1167794155359} Finding the Center of Mass of a Solid

:::exercise {fs-id1167793456286} type= 
PROBLEM:
Suppose $Q$ is a solid region bounded by the plane $x+2y+3z=6$ and the coordinate planes with density $ρ(x,y,z)={x}^{2}yz$ (see [ref:CNX_Calc_Figure_15_06_007]). Find the center of mass using decimal approximation. Use the mass found in [ref:fs-id1167793313677]
SOLUTION:
We have used this tetrahedron before and know the limits of integration, so we can proceed to the computations right away. First, we need to find the moments about the $xy\text{-plane,}$ the $xz\text{-plane,}$ and the $yz\text{-plane:}$

$\begin{array}{l} \\ \\ \\ {M}_{xy}={\displaystyle \iiint\limits_{Q}zρ(x,y,z)}dV={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=1\text{/}2(6-x)} \;{\displaystyle \int_{z=0}^{z=1\text{/}3(6-x-2y)} {x}^{2}y{z}^{2}dz\;dy\;dx=\frac{54}{35}}}}\approx 1.543, \\ {M}_{xz}={\displaystyle \iiint\limits_{Q}yρ(x,y,z)}dV={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=1\text{/}2(6-x)} \;{\displaystyle \int_{z=0}^{z=1\text{/}3(6-x-2y)} {x}^{2}{y}^{2}z\;dz\;dy\;dx=\frac{81}{35}}}}\approx 2.314, \\ {M}_{yz}={\displaystyle \iiint\limits_{Q}xρ(x,y,z)}dV={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=1\text{/}2(6-x)} \;{\displaystyle \int_{z=0}^{z=1\text{/}3(6-x-2y)} {x}^{3}yz\;dz\;dy\;dx=\frac{243}{35}}}}\approx 6.943.\end{array}$  {eq:fs-id1167793886689}

Hence the center of mass is

$\begin{array}{l} \\ \\ \\ \overset{\text{−}}{x}=\frac{{M}_{yz}}{m},\overset{\text{−}}{y}=\frac{{M}_{xz}}{m},\overset{\text{−}}{z}=\frac{{M}_{xy}}{m}, \\ \overset{\text{−}}{x}=\frac{{M}_{yz}}{m}=\frac{243\text{/}35}{108\text{/}35}=\frac{243}{108}=2.25, \\ \overset{\text{−}}{y}=\frac{{M}_{xz}}{m}=\frac{81\text{/}35}{108\text{/}35}=\frac{81}{108}=0.75, \\ \overset{\text{−}}{z}=\frac{{M}_{xy}}{m}=\frac{54\text{/}35}{108\text{/}35}=\frac{54}{108}=0.5.\end{array}$  {eq:fs-id1167793638826}

The center of mass for the tetrahedron $Q$ is the point $(2.25,0.75,0.5).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793514675} type= 
PROBLEM:
Consider the same region $Q$ ([ref:CNX_Calc_Figure_15_06_007]) and use the density function $ρ(x,y,z)=x{y}^{2}z.$ Find the center of mass.
SOLUTION:
$(\frac{3}{2},\frac{9}{8},\frac{1}{2})$
COMMENTARY: Hint
Check that ${M}_{xy}=\frac{27}{35},$ ${M}_{xz}=\frac{243}{140},$ and ${M}_{yz}=\frac{81}{35}.$ Then use $m$ from a previous checkpoint question.
:::
:::
We conclude this section with an example of finding moments of inertia ${I}_{x},{I}_{y},$ and ${I}_{z}.$

:::example {ex:fs-id1167793277667} Finding the Moments of Inertia of a Solid

:::exercise {fs-id1167793277669} type= 
PROBLEM:
Suppose that $Q$ is a solid region and is bounded by $x+2y+3z=6$ and the coordinate planes with density $ρ(x,y,z)={x}^{2}yz$ (see [ref:CNX_Calc_Figure_15_06_007]). Find the moments of inertia of the tetrahedron $Q$ about the $yz\text{-plane,}$ the $xz\text{-plane,}$ and the $xy\text{-plane}\text{.}$
SOLUTION:
Once again, we can almost immediately write the limits of integration and hence we can quickly proceed to evaluating the moments of inertia. Using the formula stated before, the moments of inertia of the tetrahedron $Q$ about the $xy\text{-plane,}$ the $xz\text{-plane,}$ and the $yz\text{-plane}$ are

$\begin{array}{r} \\ {I}_{x}={\displaystyle \iiint\limits_{Q}({y}^{2}+{z}^{2})ρ(x,y,z)dV}, \\ {I}_{y}={\displaystyle \iiint\limits_{Q}({x}^{2}+{z}^{2})ρ(x,y,z)dV},\end{array}$  {eq:fs-id1167793454192}

and

${I}_{z}={\displaystyle \iiint\limits_{Q}({x}^{2}+{y}^{2})ρ(x,y,z)dV}\;\text{with}\;ρ(x,y,z)={x}^{2}yz.$  {eq:fs-id1167793642126}

Proceeding with the computations, we have

$\begin{array}{l} \\ \\ \\ \\ \\ \\ {I}_{x}={\displaystyle \iiint\limits_{Q}({y}^{2}+{z}^{2}){x}^{2}yz\;dV}={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=\frac{1}{2}(6-x)} \;{\displaystyle \int_{z=0}^{z=\frac{1}{3}(6-x-2y)} ({y}^{2}+{z}^{2})}}}{x}^{2}yz\;dz\;dy\;dx=\frac{117}{35}\approx 3.343, \\ {I}_{y}={\displaystyle \iiint\limits_{Q}({x}^{2}+{z}^{2}){x}^{2}yz\;dV}={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=\frac{1}{2}(6-x)} \;{\displaystyle \int_{z=0}^{z=\frac{1}{3}(6-x-2y)} ({x}^{2}+{z}^{2})}}}{x}^{2}yz\;dz\;dy\;dx=\frac{684}{35}\approx 19.543, \\ {I}_{z}={\displaystyle \iiint\limits_{Q}({x}^{2}+{y}^{2}){x}^{2}yz\;dV}={\displaystyle \int_{x=0}^{x=6} \;{\displaystyle \int_{y=0}^{y=\frac{1}{2}(6-x)} \;{\displaystyle \int_{z=0}^{z=\frac{1}{3}(6-x-2y)} ({x}^{2}+{y}^{2})}}}{x}^{2}yz\;dz\;dy\;dx=\frac{729}{35}\approx 20.829.\end{array}$  {eq:fs-id1167793287016}

Thus, the moments of inertia of the tetrahedron $Q$ about the $yz\text{-plane,}$ the $xz\text{-plane,}$ and the $xy\text{-plane}$ are $117\text{/}35,684\text{/}35,\text{and}\;729\text{/}35,$ respectively.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793626483} type= 
PROBLEM:
Consider the same region $Q$ ([ref:CNX_Calc_Figure_15_06_007]), and use the density function $ρ(x,y,z)=x{y}^{2}z.$ Find the moments of inertia about the three coordinate planes.
SOLUTION:
The moments of inertia of the tetrahedron $Q$ about the $yz\text{-plane,}$ the $xz\text{-plane,}$ and the $xy\text{-plane}$ are $99\text{/}35,36\text{/}7,\text{and}\;243\text{/}35,$ respectively.
:::
:::

## Key Concepts {section:key-concepts}
Finding the mass, center of mass, moments, and moments of inertia in double integrals:
- For a lamina $R$ with a density function $ρ(x,y)$ at any point $(x,y)$ in the plane, the mass is $m={\displaystyle \iint\limits_{R}ρ(x,y)dA}.$
- The moments about the $x\text{-axis}$ and $y\text{-axis}$ are

${M}_{x}={\displaystyle \iint\limits_{R}yρ(x,y)}dA\;\text{and}\;{M}_{y}={\displaystyle \iint\limits_{R}xρ(x,y)}dA.$  {eq:fs-id1167793355674}

- The center of mass is given by $\overset{\text{−}}{x}=\frac{{M}_{y}}{m},\overset{\text{−}}{y}=\frac{{M}_{x}}{m}.$
- The center of mass becomes the centroid of the plane when the density is constant.
- The moments of inertia about the $x-\text{axis,}$ $y-\text{axis,}$ and the origin are

${I}_{x}={\displaystyle \iint\limits_{R}{y}^{2}ρ(x,y)dA,}\; \;{I}_{y}={\displaystyle \iint\limits_{R}{x}^{2}ρ(x,y)dA,}\;\text{and}\;{I}_{0}={I}_{x}+{I}_{y}={\displaystyle \iint\limits_{R}({x}^{2}+{y}^{2})ρ(x,y)dA.}$  {eq:fs-id1167793473251}

Finding the mass, center of mass, moments, and moments of inertia in triple integrals:
- For a solid object $Q$ with a density function $ρ(x,y,z)$ at any point $(x,y,z)$ in space, the mass is $m={\displaystyle \iiint\limits_{Q}ρ(x,y,z)dV}.$
- The moments about the $xy\text{-plane,}$ the $xz\text{-plane,}$ and the $yz\text{-plane}$ are

${M}_{xy}={\displaystyle \iiint\limits_{Q}zρ(x,y,z)dV},\;{M}_{xz}={\displaystyle \iiint\limits_{Q}yρ(x,y,z)dV},\;{M}_{yz}={\displaystyle \iiint\limits_{Q}xρ(x,y,z)dV}.$  {eq:fs-id1167793633944}

- The center of mass is given by $\overset{\text{−}}{x}=\frac{{M}_{yz}}{m},\overset{\text{−}}{y}=\frac{{M}_{xz}}{m},\overset{\text{−}}{z}=\frac{{M}_{xy}}{m}.$
- The center of mass becomes the centroid of the solid when the density is constant.
- The moments of inertia about the $yz\text{-plane,}$ the $xz\text{-plane,}$ and the $xy\text{-plane}$ are

$\begin{array}{l} \\ {I}_{x}={\displaystyle \iiint\limits_{Q}({y}^{2}+{z}^{2})ρ(x,y,z)dV,}{I}_{y}={\displaystyle \iiint\limits_{Q}({x}^{2}+{z}^{2})ρ(x,y,z)dV,} \\ {I}_{z}={\displaystyle \iiint\limits_{Q}({x}^{2}+{y}^{2})ρ(x,y,z)dV.}\end{array}$  {eq:fs-id1167793627867}

## Key Equations {section:key-equations}

> TABLE {tab:eip-555} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Mass of a lamina** | $m=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} {m}_{ij}}}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}ρ(x,y)dA}}}$ |
| **Moment about the *x*-axis** | ${M}_{x}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{ij}^{*}){m}_{ij}}}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({y}_{ij}^{*})ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}yρ(x,y)dA}}}$ |
| **Moment about the *y*-axis** | ${M}_{y}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({x}_{ij}^{*}){m}_{ij}}}=\lim_{k,l\to \infty}{\displaystyle \sum_{i=1}^{k} {\displaystyle \sum_{j=1}^{l} ({x}_{ij}^{*})ρ({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A={\displaystyle \iint\limits_{R}xρ(x,y)dA}}}$ |
| **Center of mass of a lamina** | $\overset{\text{−}}{x}=\frac{{M}_{y}}{m}=\frac{{\displaystyle \iint\limits_{R}xρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}$ and $\overset{\text{−}}{y}=\frac{{M}_{x}}{m}=\frac{{\displaystyle \iint\limits_{R}yρ(x,y)dA}}{{\displaystyle \iint\limits_{R}ρ(x,y)dA}}$ |

##  {section:section-exercises}
In the following exercises, the region $R$ occupied by a lamina is shown in a graph. Find the mass of $R$ with the density function $ρ.$

:::exercise {fs-id1167793632714} type= 
PROBLEM:
$R$ is the triangular region with vertices $(0,0),(0,3),$ and $(6,0);ρ(x,y)=xy.$

> IMAGE {img:fs-id1167793275019} src=../../media/CNX_Calc_Figure_15_06_201.jpg
> alt: A right triangle bounded by the x and y axes and the line y = negative x/2 + 3.

SOLUTION:
$\frac{27}{2}$
:::

:::exercise {fs-id1167793275045} type= 
PROBLEM:
$R$ is the triangular region with vertices $(0,0),(1,1),$ $(0,5);ρ(x,y)=x+y.$

> IMAGE {img:fs-id1167794058740} src=../../media/CNX_Calc_Figure_15_06_202.jpg
> alt: A triangle bounded by the y axis, the line x = y, and the line y = negative 4x + 5.

:::

:::exercise {fs-id1167794058767} type= 
PROBLEM:
$R$ is the rectangular region with vertices $(0,0),(0,3),(6,3),$ and $(6,0);$ $ρ(x,y)=\sqrt{xy}.$

> IMAGE {img:fs-id1167793941258} src=../../media/CNX_Calc_Figure_15_06_203.jpg
> alt: A rectangle bounded by the x and y axes and the lines x = 6 and y = 3.

SOLUTION:
$24\sqrt{2}$
:::

:::exercise {fs-id1167793941284} type= 
PROBLEM:
$R$ is the rectangular region with vertices $(0,1),(0,3),(3,3),$ and $(3,1);$ $ρ(x,y)={x}^{2}y.$

> IMAGE {img:fs-id1167793384526} src=../../media/CNX_Calc_Figure_15_06_204.jpg
> alt: A rectangle bounded by the y axis, the lines y = 1 and 3, and the line x = 3.

:::

:::exercise {fs-id1167793927637} type= class=material-set-2 
PROBLEM:
$R$ is the trapezoidal region determined by the lines $y=-\frac{1}{4}x+\frac{5}{2},y=0,y=2,$ and $x=0;$ $ρ(x,y)=3xy.$

> IMAGE {img:fs-id1167794168766} src=../../media/CNX_Calc_Figure_15_06_205.jpg
> alt: A trapezoid bounded by the x and y axes, the line y = 2, and the line y = negative x/4 + 2.5.

SOLUTION:
$76$
:::

:::exercise {fs-id1167793941341} type= class=material-set-2 
PROBLEM:
$R$ is the trapezoidal region determined by the lines $y=0,y=1,y=x,$ and $y=\text{−}x+3;ρ(x,y)=2x+y.$

> IMAGE {img:fs-id1167793233861} src=../../media/CNX_Calc_Figure_15_06_206.jpg
> alt: A trapezoid bounded by the x axis, the line y = 1, the line y = x, and the line y = negative x + 3.

:::

:::exercise {fs-id1167793374994} type= 
PROBLEM:
$R$ is the disk of radius $2$ centered at $(1,2);$ $ρ(x,y)={x}^{2}+{y}^{2}-2x-4y+5.$

> IMAGE {img:fs-id1167794172480} src=../../media/CNX_Calc_Figure_15_06_207.jpg
> alt: A circle with radius 2 centered at (1, 2), which is tangent to the x axis at (1, 0).

SOLUTION:
$8\pi$
:::

:::exercise {fs-id1167793618891} type= 
PROBLEM:
$R$ is the unit disk; $ρ(x,y)=3{x}^{4}+6{x}^{2}{y}^{2}+3{y}^{4}.$

> IMAGE {img:fs-id1167793421998} src=../../media/CNX_Calc_Figure_15_06_208.jpg
> alt: A circle with radius 1 and center the origin.

:::

:::exercise {fs-id1167793422020} type= 
PROBLEM:
$R$ is the region enclosed by the ellipse ${x}^{2}+4{y}^{2}=1;ρ(x,y)=1.$

> IMAGE {img:fs-id1167793581632} src=../../media/CNX_Calc_Figure_15_06_209.jpg
> alt: An ellipse with center the origin, major axis 2, and minor axis 0.5.

SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1167793581658} type= 
PROBLEM:
$R=\{(x,y)|9{x}^{2}+{y}^{2}\le 1,x\ge 0,y\ge 0\};$ $ρ(x,y)=\sqrt{9{x}^{2}+{y}^{2}}.$

> IMAGE {img:fs-id1167793630398} src=../../media/CNX_Calc_Figure_15_06_210.jpg
> alt: The quarter section of an ellipse in the first quadrant with center the origin, major axis 2, and minor axis roughly 0.64.

:::

:::exercise {fs-id1167793376192} type= 
PROBLEM:
$R$ is the region bounded by $y=x,y=\text{−}x,y=x+2,y=\text{−}x+2;$ $ρ(x,y)=1.$

> IMAGE {img:fs-id1167793928565} src=../../media/CNX_Calc_Figure_15_06_211.jpg
> alt: A square with side length square root of 2 rotated 45 degrees, with corners at the origin, (2, 0), (1, 1), and (negative 1, 1).

SOLUTION:
$2$
:::

:::exercise {fs-id1167793927450} type= 
PROBLEM:
$R$ is the region bounded by $y=\frac{1}{x},y=\frac{2}{x},y=1,$ and $y=2;ρ(x,y)=4(x+y).$

> IMAGE {img:fs-id1167793409900} src=../../media/CNX_Calc_Figure_15_06_212.jpg
> alt: A complex region between 2 and 1 that sweeps down and to the right with boundaries y = 1/x and y = 2/x.

:::
In the following exercises, consider a lamina occupying the region $R$ and having the density function $ρ$ given in the preceding group of exercises. Use a computer algebra system (CAS) to answer the following questions.
a. Find the moments ${M}_{x}$ and ${M}_{y}$ about the $x\text{-axis}$ and $y\text{-axis,}$ respectively.
b. Calculate and plot the center of mass of the lamina.
c. **[T]** Use a CAS to locate the center of mass on the graph of $R.$

:::exercise {fs-id1167794076787} type= 
PROBLEM:
**[T]** $R$ is the triangular region with vertices $(0,0),(0,3),$ and $(6,0);ρ(x,y)=xy.$
SOLUTION:
a. ${M}_{x}=\frac{81}{5},{M}_{y}=\frac{162}{5};$ b. $\overset{\text{−}}{x}=\frac{12}{5},\overset{\text{−}}{y}=\frac{6}{5};$
c.

> IMAGE {img:fs-id1167793618246} src=../../media/CNX_Calc_Figure_15_06_213.jpg
> alt: A triangular region R bounded by the x and y axes and the line y = negative x/2 + 3, with a point marked at (12/5, 6/5).

:::

:::exercise {fs-id1167793641939} type= 
PROBLEM:
**[T]** $R$ is the triangular region with vertices $(0,0),(1,1),\text{and}\;(0,5);ρ(x,y)=x+y.$
:::

:::exercise {fs-id1167793925024} type= 
PROBLEM:
**[T]** $R$ is the rectangular region with vertices $(0,0),(0,3),(6,3),\text{and}\;(6,0);$ $ρ(x,y)=\sqrt{xy}.$
SOLUTION:
a. ${M}_{x}=\frac{216\sqrt{2}}{5},{M}_{y}=\frac{432\sqrt{2}}{5};$ b. $\overset{\text{−}}{x}=\frac{18}{5},\overset{\text{−}}{y}=\frac{9}{5};$
c.

> IMAGE {img:fs-id1167793618149} src=../../media/CNX_Calc_Figure_15_06_215.jpg
> alt: A rectangle R bounded by the x and y axes and the lines x = 6 and y = 3 with point marked (18/5, 9/5).

:::

:::exercise {fs-id1167793618162} type= 
PROBLEM:
**[T]** $R$ is the rectangular region with vertices $(0,1),(0,3),(3,3),\text{and}\;(3,1);$ $ρ(x,y)={x}^{2}y.$
:::

:::exercise {fs-id1167793640056} type= 
PROBLEM:
**[T]** $R$ is the trapezoidal region determined by the lines $y=-\frac{1}{4}x+\frac{5}{2},y=0,$ $y=2,\text{and}\;x=0;$ $ρ(x,y)=3xy.$
SOLUTION:
a. ${M}_{x}=\frac{368}{5},{M}_{y}=\frac{1552}{5};$ b. $\overset{\text{−}}{x}=\frac{388}{95},\overset{\text{−}}{y}=\frac{92}{95};$
c.

> IMAGE {img:fs-id1167793421216} src=../../media/CNX_Calc_Figure_15_06_217.jpg
> alt: A trapezoid R bounded by the x and y axes, the line y = 2, and the line y = negative x/4 + 2.5 with the point marked (92/95, 388/95).

:::

:::exercise {fs-id1167793421230} type= 
PROBLEM:
**[T]** $R$ is the trapezoidal region determined by the lines $y=0,y=1,y=x,$ and $y=\text{−}x+3;ρ(x,y)=2x+y.$
:::

:::exercise {fs-id1167793499066} type= 
PROBLEM:
**[T]** $R$ is the disk of radius $2$ centered at $(1,2);$ $ρ(x,y)={x}^{2}+{y}^{2}-2x-4y+5.$
SOLUTION:
a. ${M}_{x}=16\pi ,{M}_{y}=8\pi ;$ b. $\overset{\text{−}}{x}=1,\overset{\text{−}}{y}=2;$
c.

> IMAGE {img:fs-id1167794076383} src=../../media/CNX_Calc_Figure_15_06_219.jpg
> alt: A circle with radius 2 centered at (1, 2), which is tangent to the x axis at (1, 0) and has pointed marked at the center (1, 2).

:::

:::exercise {fs-id1167794076398} type= 
PROBLEM:
**[T]** $R$ is the unit disk; $ρ(x,y)=3{x}^{4}+6{x}^{2}{y}^{2}+3{y}^{4}.$
:::

:::exercise {fs-id1167794050677} type= 
PROBLEM:
**[T]** $R$ is the region enclosed by the ellipse ${x}^{2}+4{y}^{2}=1;ρ(x,y)=1.$
SOLUTION:
a. ${M}_{x}=0,{M}_{y}=0;$ b. $\overset{\text{−}}{x}=0,\overset{\text{−}}{y}=0;$
c.

> IMAGE {img:fs-id1167793580065} src=../../media/CNX_Calc_Figure_15_06_221.jpg
> alt: An ellipse R with center the origin, major axis 2, and minor axis 0.5, with point marked at the origin.

:::

:::exercise {fs-id1167793580080} type= 
PROBLEM:
**[T]** $R=\{(x,y)|9{x}^{2}+{y}^{2}\le 1,x\ge 0,y\ge 0\};$ $ρ(x,y)=\sqrt{9{x}^{2}+{y}^{2}}.$
:::

:::exercise {fs-id1167793372519} type= 
PROBLEM:
**[T]** $R$ is the region bounded by $y=x,y=\text{−}x,y=x+2,$ and $y=\text{−}x+2;$ $ρ(x,y)=1.$
SOLUTION:
a. ${M}_{x}=2,{M}_{y}=0;$ b. $\overset{\text{−}}{x}=0,\overset{\text{−}}{y}=1;$
c.

> IMAGE {img:fs-id1167793423311} src=../../media/CNX_Calc_Figure_15_06_223.jpg
> alt: A square R with side length square root of 2 rotated 45 degrees, with corners at the origin, (2, 0), (1, 1), and (negative 1, 1). A point is marked at (0, 1).

:::

:::exercise {fs-id1167793368848} type= 
PROBLEM:
**[T]** $R$ is the region bounded by $y=\frac{1}{x},$ $y=\frac{2}{x},y=1,\text{and}\;y=2;$ $ρ(x,y)=4(x+y).$
:::
In the following exercises, consider a lamina occupying the region $R$ and having the density function $ρ$ given in the first two groups of Exercises.
a. Find the moments of inertia ${I}_{x},{I}_{y},$ and ${I}_{0}$ about the $x\text{-axis},$ $y\text{-axis},$ and origin, respectively.
b. Find the radii of gyration with respect to the $x\text{-axis},$ $y\text{-axis},$ and origin, respectively.

:::exercise {fs-id1167793275130} type= 
PROBLEM:
$R$ is the triangular region with vertices $(0,0),(0,3),$ and $(6,0);ρ(x,y)=xy.$
SOLUTION:
a. ${I}_{x}=\frac{243}{10},{I}_{y}=\frac{486}{5},\text{and}\;{I}_{0}=\frac{243}{2};$ b. ${R}_{x}=\frac{3\sqrt{5}}{5},{R}_{y}=\frac{6\sqrt{5}}{5},\text{and}\;{R}_{0}=3$
:::

:::exercise {fs-id1167793454820} type= 
PROBLEM:
$R$ is the triangular region with vertices $(0,0),(1,1),$ and $(0,5);ρ(x,y)=x+y.$
:::

:::exercise {fs-id1167793960038} type= 
PROBLEM:
$R$ is the rectangular region with vertices $(0,0),(0,3),(6,3),$ and $(6,0);ρ(x,y)=\sqrt{xy}.$
SOLUTION:
a. ${I}_{x}=\frac{648\sqrt{2}}{7},{I}_{y}=\frac{2592\sqrt{2}}{7},\text{and}\;{I}_{0}=\frac{3240\sqrt{2}}{7};$ b. ${R}_{y}=\frac{3\sqrt{21}}{7},{R}_{x}=\frac{6\sqrt{21}}{7},\text{and}\;{R}_{0}=\frac{3\sqrt{105}}{7}$
:::

:::exercise {fs-id1167793929159} type= 
PROBLEM:
$R$ is the rectangular region with vertices $(0,1),(0,3),(3,3),$ and $(3,1);ρ(x,y)={x}^{2}y.$
:::

:::exercise {fs-id1167793570742} type= 
PROBLEM:
$R$ is the trapezoidal region determined by the lines $y=-\frac{1}{4}x+\frac{5}{2},y=0,y=2,$ and $x=0;ρ(x,y)=3xy.$
SOLUTION:
a. ${I}_{x}=88,{I}_{y}=1560,\text{and}\;{I}_{0}=1648;$ b. ${R}_{x}=\frac{\sqrt{418}}{19},{R}_{y}=\frac{\sqrt{7410}}{19},$ and ${R}_{0}=\frac{2\sqrt{1957}}{19}$
:::

:::exercise {fs-id1167793952148} type= 
PROBLEM:
$R$ is the trapezoidal region determined by the lines $y=0,y=1,y=x,$ and $y=\text{−}x+3;ρ(x,y)=2x+y.$
:::

:::exercise {fs-id1167793911901} type= 
PROBLEM:
$R$ is the disk of radius $2$ centered at $(1,2);$ $ρ(x,y)={x}^{2}+{y}^{2}-2x-4y+5.$
SOLUTION:
a. ${I}_{x}=\frac{128\pi}{3},{I}_{y}=\frac{56\pi}{3},\text{and}\;{I}_{0}=\frac{184\pi}{3};$ b. ${R}_{x}=\frac{4\sqrt{3}}{3},{R}_{y}=\frac{\sqrt{21}}{3},$ and ${R}_{0}=\frac{\sqrt{69}}{3}$
:::

:::exercise {fs-id1167793221722} type= 
PROBLEM:
$R$ is the unit disk; $ρ(x,y)=3{x}^{4}+6{x}^{2}{y}^{2}+3{y}^{4}.$
:::

:::exercise {fs-id1167793547361} type= 
PROBLEM:
$R$ is the region enclosed by the ellipse ${x}^{2}+4{y}^{2}=1;ρ(x,y)=1.$
SOLUTION:
a. ${I}_{x}=\frac{\pi}{32},{I}_{y}=\frac{\pi}{8},\text{and}\;{I}_{0}=\frac{5\pi}{32};$ b. ${R}_{x}=\frac{1}{4},{R}_{y}=\frac{1}{2},\text{and}\;{R}_{0}=\frac{\sqrt{5}}{4}$
:::

:::exercise {fs-id1167793421281} type= 
PROBLEM:
$R=\{(x,y)|9{x}^{2}+{y}^{2}\le 1,x\ge 0,y\ge 0\};ρ(x,y)=\sqrt{9{x}^{2}+{y}^{2}}.$
:::

:::exercise {fs-id1167794222520} type= 
PROBLEM:
$R$ is the region bounded by $y=x,y=\text{−}x,y=x+2,\text{and}\;y=\text{−}x+2;$ $ρ(x,y)=1.$
SOLUTION:
a. ${I}_{x}=\frac{7}{3},{I}_{y}=\frac{1}{3},\text{and}\;{I}_{0}=\frac{8}{3};$ b. ${R}_{x}=\frac{\sqrt{42}}{6},{R}_{y}=\frac{\sqrt{6}}{6},\text{and}\;{R}_{0}=\frac{2\sqrt{3}}{3}$
:::

:::exercise {fs-id1167793637866} type= 
PROBLEM:
$R$ is the region bounded by $y=\frac{1}{x},y=\frac{2}{x},y=1,\text{and}\;y=2;ρ(x,y)=4(x+y).$
:::

:::exercise {fs-id1167794147243} type= 
PROBLEM:
Let $Q$ be the solid unit cube. Find the mass of the solid if its density $ρ$ is equal to the square of the distance of an arbitrary point of $Q$ to the $xy\text{-plane}.$
SOLUTION:
$m=\frac{1}{3}$
:::

:::exercise {fs-id1167793375453} type= 
PROBLEM:
Let $Q$ be the solid unit hemisphere. Find the mass of the solid if its density $ρ$ is equal to the distance of an arbitrary point of $Q$ to the origin.
:::

:::exercise {fs-id1167793375490} type= 
PROBLEM:
The solid $Q$ of constant density $1$ is situated inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=16$ and outside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=1.$ Show that the center of mass of the solid is not located within the solid.
:::

:::exercise {fs-id1167793581977} type= 
PROBLEM:
Find the mass of the solid $Q=\{(x,y,z)|1\le {x}^{2}+{z}^{2}\le 25,y\le 1-{x}^{2}-{z}^{2}\}$ whose density is $ρ(x,y,z)=k,$ where $k>0.$
:::

:::exercise {fs-id1167794204819} type= 
PROBLEM:
**[T]** The solid $Q=\{(x,y,z)|{x}^{2}+{y}^{2}\le 9,0\le z\le 1,x\ge 0,y\ge 0\}$ has density equal to the distance to the $xy\text{-plane}\text{.}$ Use a CAS to answer the following questions.
a. Find the mass of $Q.$
b. Find the moments ${M}_{xy},{M}_{xz},\text{and}\;{M}_{yz}$ about the $xy\text{-plane,}$ $xz\text{-plane,}$ and $yz\text{-plane,}$ respectively.
c. Find the center of mass of $Q.$
d. Graph $Q$ and locate its center of mass.
SOLUTION:
a. $m=\frac{9\pi}{8};$ b. ${M}_{xy}=\frac{3\pi}{4},{M}_{xz}=\frac{9}{2},{M}_{yz}=\frac{9}{2};$ c. $\overset{\text{−}}{x}=\frac{4}{\pi},\overset{\text{−}}{y}=\frac{4}{\pi},\overset{\text{−}}{z}=\frac{2}{3};$ d. the solid $Q$ and its center of mass are shown in the following figure.

> IMAGE {img:fs-id1167793395449} src=../../media/CNX_Calc_Figure_15_06_225.jpg
> alt: A quarter cylinder in the first quadrant with height 1 and radius 3. A point is marked at (9/(2 pi), 9/(2 pi), 2/3).

:::

:::exercise {fs-id1167793395464} type= 
PROBLEM:
Consider the solid $Q=\{(x,y,z)|0\le x\le 1,0\le y\le 2,0\le z\le 3\}$ with the density function $ρ(x,y,z)=x+y+1.$
a. Find the mass of $Q.$
b. Find the moments ${M}_{xy},{M}_{xz},\text{and}\;{M}_{yz}$ about the $xy\text{-plane,}$ $xz\text{-plane,}$ and $yz\text{-plane,}$ respectively.
c. Find the center of mass of $Q.$
:::

:::exercise {fs-id1167793372919} type= 
PROBLEM:
**[T]** The solid $Q$ has the mass given by the triple integral ${\displaystyle \int_{−1}^{1} \;{\displaystyle \int_{0}^{\frac{\pi}{4}} \;{\displaystyle \int_{0}^{1} {r}^{2}dr\;d\theta \;dz}}}.$ Use a CAS to answer the following questions.
a. Show that the center of mass of $Q$ is located in the $xy\text{-plane.}$
b. Graph $Q$ and locate its center of mass.
SOLUTION:
a. $\overset{\text{−}}{x}=\frac{3\sqrt{2}}{2\pi},\overset{\text{−}}{y}=\frac{3(2-\sqrt{2})}{2\pi},\overset{\text{−}}{z}=0;$ b. the solid $Q$ and its center of mass are shown in the following figure.

> IMAGE {img:fs-id1167794210517} src=../../media/CNX_Calc_Figure_15_06_226.jpg
> alt: A wedge from a cylinder in the first quadrant with height 2, radius 1, and angle roughly 45 degrees. A point is marked at (3 times the square root of 2/(2 pi), 3 times (2 minus the square root of 2)/(2 pi), 0).

:::

:::exercise {fs-id1167794210533} type= 
PROBLEM:
The solid $Q$ is bounded by the planes $x+4y+z=8,x=0,y=0,\text{and}\;z=0.$ Its density at any point is equal to the distance to the $xz\text{-plane}\text{.}$ Find the moment of inertia ${I}_{y}$ of the solid about the $xz\text{-plane}\text{.}$
:::

:::exercise {fs-id1167793571543} type= 
PROBLEM:
The solid $Q$ is bounded by the planes $x+y+z=3,$ $x=0,y=0,$ and $z=0.$ Its density is $ρ(x,y,z)=x+ay,$ where $a>0.$ Show that the center of mass of the solid is located in the plane $z=\frac{3}{5}$ for any value of $a.$
:::

:::exercise {fs-id1167793925221} type= 
PROBLEM:
Let $Q$ be the solid situated outside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=z$ and inside the upper hemisphere ${x}^{2}+{y}^{2}+{z}^{2}={R}^{2},$ where $R>1.$ If the density of the solid is $ρ(x,y,z)=\frac{1}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}},$ find $R$ such that the mass of the solid is $\frac{7\pi}{2}.$
:::

:::exercise {fs-id1167793638386} type= 
PROBLEM:
The mass of a solid $Q$ is given by ${\displaystyle \int_{0}^{2\sqrt{2}} \;{\displaystyle \int_{0}^{\sqrt{8-{x}^{2}}} \;{\displaystyle \int_{\sqrt{{x}^{2}+{y}^{2}}}^{\sqrt{16-{x}^{2}-{y}^{2}}} {({x}^{2}+{y}^{2}+{z}^{2})}^{n}}}}dz\;dy\;dx,$ where $n$ is an integer. Determine $n$ such that the mass of the solid is $(2-\sqrt{2})\pi .$
SOLUTION:
$n=−1$
:::

:::exercise {fs-id1167793428903} type= 
PROBLEM:
Let $Q$ be the solid above the cone ${x}^{2}+{y}^{2}={z}^{2}$ and below the sphere ${x}^{2}+{y}^{2}+{z}^{2}-4kz=0.$ Its density is a constant $k>0.$ Find $k$ such that the center of mass of the solid is situated $7$ units from the origin.
:::

:::exercise {fs-id1167793502346} type= 
PROBLEM:
The solid $Q=\{(x,y,z)|0\le {x}^{2}+{y}^{2}\le 16,x\ge 0,y\ge 0,0\le z\le x\}$ has the density $ρ(x,y,z)=k.$ Show that the moment ${M}_{xy}$ about the $xy\text{-plane}$ is half of the moment ${M}_{yz}$ about the $yz\text{-plane}\text{.}$
:::

:::exercise {fs-id1167793393629} type= 
PROBLEM:
The solid $Q$ is bounded by the cylinder ${x}^{2}+{y}^{2}={a}^{2},$ the paraboloid ${b}^{2}-z={x}^{2}+{y}^{2},$ and the $xy\text{-plane,}$ where $0<a<b.$ Find the mass of the solid if its density is given by $ρ(x,y,z)=\sqrt{{x}^{2}+{y}^{2}}.$
:::

:::exercise {fs-id1167793553734} type= 
PROBLEM:
Let $Q$ be a solid of constant density $k,$ where $k>0,$ that is located in the first octant, inside the circular cone ${x}^{2}+{y}^{2}=9{(z-1)}^{2},$ and above the plane $z=0.$ Show that the moment ${M}_{xy}$ about the $xy\text{-plane}$ is the same as the moment ${M}_{yz}$ about the $yz\text{-plane}\text{.}$
:::

:::exercise {fs-id1167793938007} type= 
PROBLEM:
The solid $Q$ has the mass given by the triple integral ${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{{r}^{2}} ({r}^{4}+r)}}}dz\;d\theta \;dr.$
a. Find the density of the solid in rectangular coordinates.
b. Find the moment ${M}_{xy}$ about the $xy\text{-plane}\text{.}$
:::

:::exercise {fs-id1167793379980} type= 
PROBLEM:
The solid $Q$ has the moment of inertia ${I}_{x}$ about the $yz\text{-plane}$ given by the triple integral ${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{\text{−}\sqrt{4-{y}^{2}}}^{\sqrt{4-{y}^{2}}} \;{\displaystyle \int_{\frac{1}{2}({x}^{2}+{y}^{2})}^{\sqrt{{x}^{2}+{y}^{2}}} ({y}^{2}+{z}^{2})}}}({x}^{2}+{y}^{2})dz\;dx\;dy.$
a. Find the density of $Q.$
b. Find the moment of inertia ${I}_{z}$ about the $xy\text{-plane.}$
SOLUTION:
a. $ρ(x,y,z)={x}^{2}+{y}^{2};$ b. $\frac{16\pi}{7}$
:::

:::exercise {fs-id1167793571458} type= 
PROBLEM:
The solid $Q$ has the mass given by the triple integral ${\displaystyle \int_{0}^{\pi \text{/}4} \;{\displaystyle \int_{0}^{2\;\text{sec}\;\theta} \;{\displaystyle \int_{0}^{1} ({r}^{3}\text{cos}\;\theta \;\text{sin}\;\theta +2r)}}}dz\;dr\;d\theta .$
a. Find the density of the solid in rectangular coordinates.
b. Find the moment ${M}_{xz}$ about the $xz\text{-plane.}$
:::

:::exercise {fs-id1167791544431} type= 
PROBLEM:
Let $Q$ be the solid bounded by the $xy\text{-plane},$ the cylinder ${x}^{2}+{y}^{2}={a}^{2},$ and the plane $z=1,$ where $a>1$ is a real number. Find the moment ${M}_{xy}$ of the solid about the $xy\text{-plane}$ if its density given in cylindrical coordinates is $ρ(r,\theta ,z)=\frac{{d}^{2}f}{d{r}^{2}}(r),$ where $f$ is a differentiable function with the first and second derivatives continuous and differentiable on $(0,a).$
SOLUTION:
${M}_{xy}=\pi (f(0)-f(a)+a{f}^{'}(a))$
:::

:::exercise {fs-id1167793432368} type= 
PROBLEM:
A solid $Q$ has a volume given by ${\displaystyle \iint\limits_{D}{\displaystyle \int_{a}^{b} dz\;dA,}}$ where $D$ is the projection of the solid onto the $xy\text{-plane}$ and $a<b$ are real numbers, and its density does not depend on the variable $z.$ Show that its center of mass lies in the plane $z=\frac{a+b}{2}.$
:::

:::exercise {fs-id1167794336028} type= 
PROBLEM:
Consider the solid enclosed by the cylinder ${x}^{2}+{z}^{2}={a}^{2}$ and the planes $y=b$ and $y=c,$ where $a>0$ and $b<c$ are real numbers. The density of $Q$ is given by $ρ(x,y,z)=f'(y),$ where $f$ is a differential function whose derivative is continuous on $(b,c).$ Show that if $f(b)=f(c),$ then the moment of inertia about the $xz\text{-plane}$ of $Q$ is null.
:::

:::exercise {fs-id1167794246458} type= 
PROBLEM:
**[T]** The average density of a solid $Q$ is defined as ${ρ}_{ave}=\frac{1}{V(Q)}{\displaystyle \iiint\limits_{Q}ρ(x,y,z)}dV=\frac{m}{V(Q)},$ where $V(Q)$ and $m$ are the volume and the mass of $Q,$ respectively. If the density of the unit ball centered at the origin is $ρ(x,y,z)={e}^{\text{−}{x}^{2}-{y}^{2}-{z}^{2}},$ use a CAS to find its average density. Round your answer to three decimal places.
:::

:::exercise {fs-id1167794067739} type= 
PROBLEM:
Show that the moments of inertia ${I}_{x},{I}_{y},\text{and}\;{I}_{z}$ about the $yz\text{-plane,}$ $xz\text{-plane,}$ and $xy\text{-plane,}$ respectively, of the unit ball centered at the origin whose density is $ρ(x,y,z)={e}^{\text{−}{x}^{2}-{y}^{2}-{z}^{2}}$ are the same. Round your answer to two decimal places.
SOLUTION:
${I}_{x}={I}_{y}={I}_{z}\simeq 0.84$
:::

## Glossary
- {def} **radius of gyration**: the distance between the rotational axis of the object and the point where the entire mass of the object can be concentrated and have the same moment of inertia

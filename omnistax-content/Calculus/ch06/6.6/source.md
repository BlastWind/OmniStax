# Moments and Centers of Mass

## Learning Objectives {section:learning-objectives}
- Find the center of mass of objects distributed along a line.
- Locate the center of mass of a thin plate.
- Use symmetry to help locate the centroid of a thin plate.
- Apply the theorem of Pappus for volume.

In this section, we consider centers of mass (also called *centroids*, under certain conditions) and moments. The basic idea of the center of mass is the notion of a balancing point. Many of us have seen performers who spin plates on the ends of sticks. The performers try to keep several of them spinning without allowing any of them to drop. If we look at a single plate (without spinning it), there is a sweet spot on the plate where it balances perfectly on the stick. If we put the stick anywhere other than that sweet spot, the plate does not balance and it falls to the ground. (That is why performers spin the plates; the spin helps keep the plates from falling even if the stick is not exactly in the right place.) Mathematically, that sweet spot is called the *center of mass of the plate*.
In this section, we first examine these concepts in a one-dimensional context, then expand our development to consider centers of mass of two-dimensional regions and symmetry. Last, we use centroids to find the volume of certain solids by applying the theorem of Pappus.

## Center of Mass and Moments
Let’s begin by looking at the center of mass in a one-dimensional context. Consider a long, thin wire or rod of negligible mass resting on a fulcrum, as shown in [ref:CNX_Calc_Figure_06_06_001](a). Now suppose we place objects having masses ${m}_{1}$ and ${m}_{2}$ at distances ${d}_{1}$ and ${d}_{2}$ from the fulcrum, respectively, as shown in [ref:CNX_Calc_Figure_06_06_001](b).

> FIGURE {fig:CNX_Calc_Figure_06_06_001} src=../../media/CNX_Calc_Figure_06_06_001.jpg
> alt: This figure has two images. The first image is a horizontal line on top of an equilateral triangle. It represents a rod on a fulcrum. The second image is the same as the first with two squares on the line. They are labeled msub1 and msub2. The distance from msub1 to the fulcrum is dsub1. The distance from msub2 to the fulcrum is dsub2.
> caption: (a) A thin rod rests on a fulcrum. (b) Masses are placed on the rod.

The most common real-life example of a system like this is a playground seesaw, or teeter-totter, with children of different weights sitting at different distances from the center. On a seesaw, if one child sits at each end, the heavier child sinks down and the lighter child is lifted into the air. If the heavier child slides in toward the center, though, the seesaw balances. Applying this concept to the masses on the rod, we note that the masses balance each other if and only if ${m}_{1}{d}_{1}={m}_{2}{d}_{2}.$
In the seesaw example, we balanced the system by moving the masses (children) with respect to the fulcrum. However, we are really interested in systems in which the masses are not allowed to move, and instead we balance the system by moving the fulcrum. Suppose we have two point masses, ${m}_{1}$ and ${m}_{2},$ located on a number line at points ${x}_{1}$ and ${x}_{2},$ respectively ([ref:CNX_Calc_Figure_06_06_002]). The center of mass, $\bar{x},$ is the point where the fulcrum should be placed to make the system balance.

> FIGURE {fig:CNX_Calc_Figure_06_06_002} src=../../media/CNX_Calc_Figure_06_06_002.jpg
> alt: This figure is an image of the x-axis. On the axis there is a point labeled x bar. Also on the axis there is a point xsub1 with a square above it. Inside of the square is the label msub1. There is also a point xsub2 on the axis. Above this point there is a square. Inside of the square is the label msub2.
> caption: The center of mass $\bar{x}$ is the balance point of the system.

Thus, we have

$\begin{array}{lll}{m}_{1}|\bar{x}-{x}_{1}| & = & {m}_{2}|{x}_{2}-\bar{x}| \\ {m}_{1}(\bar{x}-{x}_{1}) & = & {m}_{2}({x}_{2}-\bar{x}) \\ {m}_{1}\bar{x}-{m}_{1}{x}_{1} & = & {m}_{2}{x}_{2}-{m}_{2}\bar{x} \\ \bar{x}({m}_{1}+{m}_{2}) & = & {m}_{1}{x}_{1}+{m}_{2}{x}_{2} \\ \bar{x} & = & \frac{{m}_{1}{x}_{1}+{m}_{2}{x}_{2}}{{m}_{1}+{m}_{2}}.\end{array}$  {eq:fs-id1167793267623}

The expression in the numerator, ${m}_{1}{x}_{1}+{m}_{2}{x}_{2},$ is called the *first moment of the system with respect to the origin.* If the context is clear, we often drop the word *first* and just refer to this expression as the {term:moment} of the system. The expression in the denominator, ${m}_{1}+{m}_{2},$ is the total mass of the system. Thus, the {term:center of mass} of the system is the point at which the total mass of the system could be concentrated without changing the moment.
This idea is not limited just to two point masses. In general, if *n* masses, ${m}_{1},{m}_{2}\text{,…},{m}_{n},$ are placed on a number line at points ${x}_{1},{x}_{2}\text{,…},{x}_{n},$ respectively, then the center of mass of the system is given by

$\bar{x}=\frac{{\displaystyle \sum_{i=1}^{n} {m}_{i}}{x}_{i}}{{\displaystyle \sum_{i=1}^{n} {m}_{i}}}.$  {eq:fs-id1167794296143}

:::note [theorem] Center of Mass of Objects on a Line
Let ${m}_{1},{m}_{2}\text{,…},{m}_{n}$ be point masses placed on a number line at points ${x}_{1},{x}_{2}\text{,…},{x}_{n},$ respectively, and let $m={\displaystyle \sum_{i=1}^{n} {m}_{i}}$ denote the total mass of the system. Then, the moment of the system with respect to the origin is given by

$$ M=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{x}_{i} $$  {eq:fs-id1167793939667}

and the center of mass of the system is given by

$$ \bar{x}=\frac{M}{m}. $$  {eq:fs-id1167794002774}

:::
We apply this theorem in the following example.

:::example {ex:fs-id1167794028004} Finding the Center of Mass of Objects along a Line

:::exercise {fs-id1167793989776} type= 
PROBLEM:
Suppose four point masses are placed on a number line as follows:

$\begin{array}{llll}{m}_{1}=30\;\text{kg,}\;\text{placed at}\;{x}_{1}=−2\;\text{m} & & & {m}_{2}=5\;\text{kg,}\;\text{placed at}\;{x}_{2}=3\;\text{m} \\ {m}_{3}=10\;\text{kg,}\;\text{placed at}\;{x}_{3}=6\;\text{m} & & & {m}_{4}=15\;\text{kg,}\;\text{placed at}\;{x}_{4}=−3\;\text{m}.\end{array}$  {eq:fs-id1167794326988}

Find the moment of the system with respect to the origin and find the center of mass of the system.
SOLUTION:
First, we need to calculate the moment of the system:

$\begin{array}{rl}M & ={\displaystyle \sum_{i=1}^{4} {m}_{i}}{x}_{i} \\ & =−60+15+60-45=−30.\end{array}$  {eq:fs-id1167794037693}

Now, to find the center of mass, we need the total mass of the system:

$\begin{array}{rl}m & ={\displaystyle \sum_{i=1}^{4} {m}_{i}} \\ & =30+5+10+15=60\;\text{kg}\text{.}\end{array}$  {eq:fs-id1167793918541}

Then we have

$\bar{x}=\frac{M}{m}=\frac{−30}{60}=-\frac{1}{2}.$  {eq:fs-id1167794023334}

The center of mass is located 1/2 m to the left of the origin.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794068169} type= 
PROBLEM:
Suppose four point masses are placed on a number line as follows:

$\begin{array}{llll}{m}_{1}=12\;\text{kg,}\;\text{placed at}\;{x}_{1}=−4\;\text{m} & & & {m}_{2}=12\;\text{kg,}\;\text{placed at}\;{x}_{2}=4\;\text{m} \\ {m}_{3}=30\;\text{kg,}\;\text{placed at}\;{x}_{3}=2\;\text{m} & & & {m}_{4}=6\;\text{kg,}\;\text{placed at}\;{x}_{4}=−6\;\text{m}.\end{array}$  {eq:fs-id1167793838320}

Find the moment of the system with respect to the origin and find the center of mass of the system.
SOLUTION:
$M=24,\bar{x}=\frac{2}{5}\;\text{m}$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
We can generalize this concept to find the center of mass of a system of point masses in a plane. Let ${m}_{1}$ be a point mass located at point $({x}_{1},{y}_{1})$ in the plane. Then the moment ${M}_{x}$ of the mass with respect to the *x*-axis is given by ${M}_{x}={m}_{1}{y}_{1}.$ Similarly, the moment ${M}_{y}$ with respect to the *y*-axis is given by ${M}_{y}={m}_{1}{x}_{1}.$ Notice that the *x*-coordinate of the point is used to calculate the moment with respect to the *y*-axis, and vice versa. The reason is that the *x*-coordinate gives the distance from the point mass to the *y*-axis, and the *y*-coordinate gives the distance to the *x*-axis (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_06_003} src=../../media/CNX_Calc_Figure_06_06_003.jpg
> alt: This figure has the x and y axes labeled. There is a point in the first quadrant at (xsub1, ysub1). This point is labeled msub1.
> caption: Point mass ${m}_{1}$ is located at point $({x}_{1},{y}_{1})$ in the plane.

If we have several point masses in the *xy*-plane, we can use the moments with respect to the *x*- and *y*-axes to calculate the *x*- and *y*-coordinates of the center of mass of the system.

:::note [theorem] Center of Mass of Objects in a Plane
Let ${m}_{1},{m}_{2}\text{,…},{m}_{n}$ be point masses located in the *xy*-plane at points $({x}_{1},{y}_{1}),({x}_{2},{y}_{2})\text{,…},({x}_{n},{y}_{n}),$ respectively, and let $m={\displaystyle \sum_{i=1}^{n} {m}_{i}}$ denote the total mass of the system. Then the moments ${M}_{x}$ and ${M}_{y}$ of the system with respect to the *x*- and *y*-axes, respectively, are given by

$$ {M}_{x}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{y}_{i}\;\text{and}\;{M}_{y}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{x}_{i}. $$  {eq:fs-id1167794000383}

Also, the coordinates of the center of mass $(\bar{x},\bar{y})$ of the system are

$$ \bar{x}=\frac{{M}_{y}}{m}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}. $$  {eq:fs-id1167793638645}

:::
The next example demonstrates how to apply this theorem.

:::example {ex:fs-id1167794000228} Finding the Center of Mass of Objects in a Plane

:::exercise {fs-id1167794000230} type= 
PROBLEM:
Suppose three point masses are placed in the *xy*-plane as follows (assume coordinates are given in meters):

$\begin{array}{l}{m}_{1}=2\;\text{kg, placed at}\;(−1,3), \\ {m}_{2}=6\;\text{kg, placed at}\;(1,1), \\ {m}_{3}=4\;\text{kg, placed at}\;(2,−2).\end{array}$  {eq:fs-id1167794055621}

Find the center of mass of the system.
SOLUTION:
First we calculate the total mass of the system:

$m={\displaystyle \sum_{i=1}^{3} {m}_{i}}=2+6+4=12\;\text{kg}\text{.}$  {eq:fs-id1167793926093}

Next we find the moments with respect to the *x*- and *y*-axes:

$\begin{array}{l} \\ \\ {M}_{y}={\displaystyle \sum_{i=1}^{3} {m}_{i}}{x}_{i}=−2+6+8=12, \\ {M}_{x}={\displaystyle \sum_{i=1}^{3} {m}_{i}}{y}_{i}=6+6-8=4.\end{array}$  {eq:fs-id1167793604254}

Then we have

$\bar{x}=\frac{{M}_{y}}{m}=\frac{12}{12}=1\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}=\frac{4}{12}=\frac{1}{3}.$  {eq:fs-id1167793639823}

The center of mass of the system is $(1,1\text{/}3),$ in meters.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794147586} type= 
PROBLEM:
Suppose three point masses are placed on a number line as follows (assume coordinates are given in meters):

$\begin{array}{l}{m}_{1}=5\;\text{kg, placed at}\;(−2,−3), \\ {m}_{2}=3\;\text{kg, placed at}\;(2,3), \\ {m}_{3}=2\;\text{kg, placed at}\;(−3,−2).\end{array}$  {eq:fs-id1167794027904}

Find the center of mass of the system.
SOLUTION:
$(−1,−1)$ m
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Center of Mass of Thin Plates
So far we have looked at systems of point masses on a line and in a plane. Now, instead of having the mass of a system concentrated at discrete points, we want to look at systems in which the mass of the system is distributed continuously across a thin sheet of material. For our purposes, we assume the sheet is thin enough that it can be treated as if it is two-dimensional. Such a sheet is called a {term:lamina}. Next we develop techniques to find the center of mass of a lamina. In this section, we also assume the density of the lamina is constant.
Laminas are often represented by a two-dimensional region in a plane. The geometric center of such a region is called its {term:centroid}. Since we have assumed the density of the lamina is constant, the center of mass of the lamina depends only on the shape of the corresponding region in the plane; it does not depend on the density. In this case, the center of mass of the lamina corresponds to the centroid of the delineated region in the plane. As with systems of point masses, we need to find the total mass of the lamina, as well as the moments of the lamina with respect to the *x*- and *y*-axes.
We first consider a lamina in the shape of a rectangle. Recall that the center of mass of a lamina is the point where the lamina balances. For a rectangle, that point is both the horizontal and vertical center of the rectangle. Based on this understanding, it is clear that the center of mass of a rectangular lamina is the point where the diagonals intersect, which is a result of the {term:symmetry principle}, and it is stated here without proof.

:::note [theorem] The Symmetry Principle
If a region *R* is symmetric about a line *l*, then the centroid of *R* lies on *l*.
:::
Let’s turn to more general laminas. Suppose we have a lamina bounded above by the graph of a continuous function $f(x),$ below by the *x*-axis, and on the left and right by the lines $x=a$ and $x=b,$ respectively, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_004} src=../../media/CNX_Calc_Figure_06_06_004.jpg
> alt: This image is a graph of y=f(x). It is in the first quadrant. Under the curve is a shaded region labeled “R”. The shaded region is bounded to the left at x=a and to the right at x=b.
> caption: A region in the plane representing a lamina.

As with systems of point masses, to find the center of mass of the lamina, we need to find the total mass of the lamina, as well as the moments of the lamina with respect to the *x*- and *y*-axes. As we have done many times before, we approximate these quantities by partitioning the interval $[a,b]$ and constructing rectangles.
For $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of $[a,b].$ Recall that we can choose any point within the interval $[{x}_{i-1},{x}_{i}]$ as our ${x}_{i}^{*}.$ In this case, we want ${x}_{i}^{*}$ to be the *x*-coordinate of the centroid of our rectangles. Thus, for $i=1,2\text{,…},n,$ we select ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}]$ such that ${x}_{i}^{*}$ is the midpoint of the interval. That is, ${x}_{i}^{*}=({x}_{i-1}+{x}_{i})\text{/}2.$ Now, for $i=1,2\text{,…},n,$ construct a rectangle of height $f({x}_{i}^{*})$ on $[{x}_{i-1},{x}_{i}].$ The center of mass of this rectangle is $({x}_{i}^{*},(f({x}_{i}^{*}))\text{/}2),$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_005} src=../../media/CNX_Calc_Figure_06_06_005.jpg
> alt: This figure is a graph of the curve labeled f(x). It is in the first quadrant. Under the curve and above the x-axis there is a vertical shaded rectangle. the height of the rectangle is labeled f(xsubi). Also, xsubi = xsubi – 1 + xsubi/2.
> caption: A representative rectangle of the lamina.

Next, we need to find the total mass of the rectangle. Let $ρ$ represent the density of the lamina (note that $ρ$ is a constant). In this case, $ρ$ is expressed in terms of mass per unit area. Thus, to find the total mass of the rectangle, we multiply the area of the rectangle by $ρ.$ Then, the mass of the rectangle is given by $ρf({x}_{i}^{*})\text{Δ}x.$
To get the approximate mass of the lamina, we add the masses of all the rectangles to get

$m\approx {\displaystyle \sum_{i=1}^{n} ρ}f({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167794136476}

This is a Riemann sum. Taking the limit as $n\to \infty$ gives the exact mass of the lamina:

$m=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} ρ}f({x}_{i}^{*})\text{Δ}x=ρ{{\displaystyle \int}}_{a}^{b}f(x)dx.$  {eq:fs-id1167794222609}

Next, we calculate the moment of the lamina with respect to the *x*-axis. Returning to the representative rectangle, recall its center of mass is $({x}_{i}^{*},(f({x}_{i}^{*}))\text{/}2).$ Recall also that treating the rectangle as if it is a point mass located at the center of mass does not change the moment. Thus, the moment of the rectangle with respect to the *x*-axis is given by the mass of the rectangle, $ρf({x}_{i}^{*})\text{Δ}x,$ multiplied by the distance from the center of mass to the *x*-axis: $(f({x}_{i}^{*}))\text{/}2.$ Therefore, the moment with respect to the *x*-axis of the rectangle is $ρ({[f({x}_{i}^{*})]}^{2}\text{/}2)\text{Δ}x.$ Adding the moments of the rectangles and taking the limit of the resulting Riemann sum, we see that the moment of the lamina with respect to the *x*-axis is

${M}_{x}=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} ρ}\frac{{[f({x}_{i}^{*})]}^{2}}{2}\text{Δ}x=ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx}.$  {eq:fs-id1167793912191}

We derive the moment with respect to the *y*-axis similarly, noting that the distance from the center of mass of the rectangle to the *y*-axis is ${x}_{i}^{*}.$ Then the moment of the lamina with respect to the *y*-axis is given by

${M}_{y}=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}ρ{x}_{i}^{*}f({x}_{i}^{*})\text{Δ}x=ρ{\displaystyle \int_{a}^{b}xf(x)dx}.$  {eq:fs-id1167793506279}

We find the coordinates of the center of mass by dividing the moments by the total mass to give $\bar{x}={M}_{y}\text{/}m\;\text{and}\;\bar{y}={M}_{x}\text{/}m.$ If we look closely at the expressions for ${M}_{x},{M}_{y},\;\text{and}\;m,$ we notice that the constant $ρ$ cancels out when $\bar{x}$ and $\bar{y}$ are calculated.
We summarize these findings in the following theorem.

:::note [theorem] Center of Mass of a Thin Plate in the *xy*-Plane
Let *R* denote a region bounded above by the graph of a continuous function $f(x),$ below by the *x*-axis, and on the left and right by the lines $x=a$ and $x=b,$ respectively. Let $ρ$ denote the density of the associated lamina. Then we can make the following statements:
1. The mass of the lamina is

$$ m=ρ{{\displaystyle \int}}_{a}^{b}f(x)dx. $$  {eq:fs-id1167793888126}

2. The moments ${M}_{x}$ and ${M}_{y}$ of the lamina with respect to the *x*- and *y*-axes, respectively, are

$$ {M}_{x}=ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx}\;\text{and}\;{M}_{y}=ρ{\displaystyle \int_{a}^{b}xf(x)dx}. $$  {eq:fs-id1167794003845}

3. The coordinates of the center of mass $(\bar{x},\bar{y})$ are

$$ \bar{x}=\frac{{M}_{y}}{m}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}. $$  {eq:fs-id1167794218685}

:::
In the next example, we use this theorem to find the center of mass of a lamina.

:::example {ex:fs-id1167793479886} Finding the Center of Mass of a Lamina

:::exercise {fs-id1167793479888} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)=\sqrt{x}$ and below by the *x*-axis over the interval $[0,4].$ Find the centroid of the region.
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_006} src=../../media/CNX_Calc_Figure_06_06_006.jpg
> alt: This figure is the graph of the curve f(x)=squareroot(x). It is an increasing curve in the first quadrant. Under the curve above the x-axis there is a shaded region. It starts at x=0 and is bounded to the right at x=4.
> caption: Finding the center of mass of a lamina.

Since we are only asked for the centroid of the region, rather than the mass or moments of the associated lamina, we know the density constant $ρ$ cancels out of the calculations eventually. Therefore, for the sake of convenience, let’s assume $ρ=1.$
First, we need to calculate the total mass:

$\begin{array}{rl}m & =ρ{{\displaystyle \int}}_{a}^{b}f(x)dx={\displaystyle \int_{0}^{4}\sqrt{x}}\;dx \\ & ={\frac{2}{3}{x}^{3\text{/}2}|}_{0}^{4}=\frac{2}{3}[8-0]=\frac{16}{3}.\end{array}$  {eq:fs-id1167793720137}

Next, we compute the moments:

$\begin{array}{rl}{M}_{x} & =ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx} \\ & ={\displaystyle \int_{0}^{4}\frac{x}{2}dx}={\frac{1}{4}{x}^{2}|}_{0}^{4}=4\end{array}$  {eq:fs-id1167793551987}

and

$\begin{array}{rl}{M}_{y} & =ρ{\displaystyle \int_{a}^{b}xf(x)dx} \\ & ={\displaystyle \int_{0}^{4}x\sqrt{x}dx}={\displaystyle \int_{0}^{4}{x}^{3\text{/}2}}dx \\ & ={\frac{2}{5}{x}^{5\text{/}2}|}_{0}^{4}=\frac{2}{5}[32-0]=\frac{64}{5}.\end{array}$  {eq:fs-id1167793261500}

Thus, we have

$\bar{x}=\frac{{M}_{y}}{m}=\frac{64\text{/}5}{16\text{/}3}=\frac{64}{5}\cdot \frac{3}{16}=\frac{12}{5}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}=\frac{4}{16\text{/}3}=4\cdot \frac{3}{16}=\frac{3}{4}.$  {eq:fs-id1167794077068}

The centroid of the region is $(12\text{/}5,3\text{/}4).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793617560} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)={x}^{2}$ and below by the *x*-axis over the interval $[0,2].$ Find the centroid of the region.
SOLUTION:
The centroid of the region is $(3\text{/}2,6\text{/}5).$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
We can adapt this approach to find centroids of more complex regions as well. Suppose our region is bounded above by the graph of a continuous function $f(x),$ as before, but now, instead of having the lower bound for the region be the *x*-axis, suppose the region is bounded below by the graph of a second continuous function, $g(x),$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_007} src=../../media/CNX_Calc_Figure_06_06_007.jpg
> alt: This figure is a graph of the first quadrant. It has two curves. They are labeled f(x) and g(x). f(x) is above g(x). In between the curves is a shaded region labeled “R”. The shaded region is bounded to the left by x=a and to the right by x=b.
> caption: A region between two functions.

Again, we partition the interval $[a,b]$ and construct rectangles. A representative rectangle is shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_008} src=../../media/CNX_Calc_Figure_06_06_008.jpg
> alt: This figure is a graph of the first quadrant. It has two curves. They are labeled f(x) and g(x). f(x) is above g(x). In between the curves is a shaded rectangle.
> caption: A representative rectangle of the region between two functions.

Note that the centroid of this rectangle is $({x}_{i}^{*},(f({x}_{i}^{*})+g({x}_{i}^{*}))\text{/}2).$ We won’t go through all the details of the Riemann sum development, but let’s look at some of the key steps. In the development of the formulas for the mass of the lamina and the moment with respect to the *y*-axis, the height of each rectangle is given by $f({x}_{i}^{*})-g({x}_{i}^{*}),$ which leads to the expression $f(x)-g(x)$ in the integrands.
In the development of the formula for the moment with respect to the *x*-axis, the moment of each rectangle is found by multiplying the area of the rectangle, $ρ[f({x}_{i}^{*})-g({x}_{i}^{*})]\text{Δ}x,$ by the distance of the centroid from the *x*-axis, $(f({x}_{i}^{*})+g({x}_{i}^{*}))\text{/}2,$ which gives $ρ(1\text{/}2)\{{[f({x}_{i}^{*})]}^{2}-{[g({x}_{i}^{*})]}^{2}\}\text{Δ}x.$ Summarizing these findings, we arrive at the following theorem.

:::note [theorem] Center of Mass of a Lamina Bounded by Two Functions
Let *R* denote a region bounded above by the graph of a continuous function $f(x),$ below by the graph of the continuous function $g(x),$ and on the left and right by the lines $x=a$ and $x=b,$ respectively. Let $ρ$ denote the density of the associated lamina. Then we can make the following statements:
1. The mass of the lamina is

$$ m=ρ{{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx. $$  {eq:fs-id1167793309328}

2. The moments ${M}_{x}$ and ${M}_{y}$ of the lamina with respect to the *x*- and *y*-axes, respectively, are

$$ {M}_{x}=ρ{\displaystyle \int_{a}^{b}\frac{1}{2}({[f(x)]}^{2}-{[g(x)]}^{2})}dx\;\text{and}\;{M}_{y}=ρ{\displaystyle \int_{a}^{b}x[f(x)-g(x)]dx}. $$  {eq:fs-id1167793984368}

3. The coordinates of the center of mass $(\bar{x},\bar{y})$ are

$$ \bar{x}=\frac{{M}_{y}}{m}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}. $$  {eq:fs-id1167793692892}

:::
We illustrate this theorem in the following example.

:::example {ex:fs-id1167793632957} Finding the Centroid of a Region Bounded by Two Functions

:::exercise {fs-id1167793632959} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)=1-{x}^{2}$ and below by the graph of the function $g(x)=x-1.$ Find the centroid of the region.
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_009} src=../../media/CNX_Calc_Figure_06_06_009.jpg
> alt: This figure is a graph. It has two curves. They are labeled f(x)=1-x^2 and g(x)=x-1. In between the curves is a shaded region. The shaded region is bounded to the left by x=a and to the right by x=b.
> caption: Finding the centroid of a region between two curves.

The graphs of the functions intersect at $(−2,−3)$ and $(1,0),$ so we integrate from −2 to 1. Once again, for the sake of convenience, assume $ρ=1.$
First, we need to calculate the total mass:

$\begin{array}{rl}m & =ρ{{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx \\ & ={\displaystyle \int_{−2}^{1}[1-{x}^{2}-(x-1)]}dx={{\displaystyle \int}}_{−2}^{1}(2-{x}^{2}-x)dx \\ & ={[2x-\frac{1}{3}{x}^{3}-\frac{1}{2}{x}^{2}]\;|}_{−2}^{1}=[2-\frac{1}{3}-\frac{1}{2}]-[−4+\frac{8}{3}-2]=\frac{9}{2}.\end{array}$  {eq:fs-id1167794027953}

Next, we compute the moments:

$\begin{array}{rl}{M}_{x} & =ρ{\displaystyle \int_{a}^{b}\frac{1}{2}({[f(x)]}^{2}-{[g(x)]}^{2})}dx \\ & =\frac{1}{2}{\displaystyle \int_{−2}^{1}({(1-{x}^{2})}^{2}-{(x-1)}^{2})dx}=\frac{1}{2}{{\displaystyle \int}}_{−2}^{1}({x}^{4}-3{x}^{2}+2x)dx \\ & =\frac{1}{2}{[\frac{{x}^{5}}{5}-{x}^{3}+{x}^{2}]\;|}_{−2}^{1}=-\frac{27}{10}\end{array}$  {eq:fs-id1167793470756}

and

$\begin{array}{ll}{M}_{y} & =ρ\int_{a}^{b}x[f(x)-g(x)]dx \\ & =\int_{−2}^{1}x[(1-{x}^{2})-(x-1)]dx=\int_{−2}^{1}x[2-{x}^{2}-x]dx \\ =\int_{−2}^{1}(2x-{x}^{3}-{x}^{2})dx & \; \\ & ={[{x}^{2}-\frac{{x}^{4}}{4}-\frac{{x}^{3}}{3}]\;|}_{−2}^{1}=-\frac{9}{4}.\end{array}$  {eq:fs-id1167793886476}

Therefore, we have

$\bar{x}=\frac{{M}_{y}}{m}=-\frac{9}{4}\cdot \frac{2}{9}=-\frac{1}{2}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}=-\frac{27}{10}\cdot \frac{2}{9}=-\frac{3}{5}.$  {eq:fs-id1167793773177}

The centroid of the region is $(\text{−}(1\text{/}2),\text{−}(3\text{/}5)).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793424272} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)=6-{x}^{2}$ and below by the graph of the function $g(x)=3-2x.$ Find the centroid of the region.
SOLUTION:
The centroid of the region is $(1,13\text{/}5).$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## The Symmetry Principle
We stated the symmetry principle earlier, when we were looking at the centroid of a rectangle. The symmetry principle can be a great help when finding centroids of regions that are symmetric. Consider the following example.

:::example {ex:fs-id1167793274939} Finding the Centroid of a Symmetric Region

:::exercise {fs-id1167793274941} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)=4-{x}^{2}$ and below by the *x*-axis. Find the centroid of the region.
SOLUTION:
The region is depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_010} src=../../media/CNX_Calc_Figure_06_06_010.jpg
> alt: This figure is a graph of the function f(x)=4-x^2. It is an upside-down parabola. The region under the parabola above the x-axis is shaded. The curve intersects the x-axis at x=-2 and x=2.
> caption: We can use the symmetry principle to help find the centroid of a symmetric region.

The region is symmetric with respect to the *y*-axis. Therefore, the *x*-coordinate of the centroid is zero. We need only calculate $\bar{y}.$ Once again, for the sake of convenience, assume $ρ=1.$
First, we calculate the total mass:

$\begin{array}{rl}m & =ρ{{\displaystyle \int}}_{a}^{b}f(x)dx \\ & ={\displaystyle \int_{−2}^{2}(4-{x}^{2})}dx \\ & ={[4x-\frac{{x}^{3}}{3}]\;|}_{−2}^{2}=\frac{32}{3}.\end{array}$  {eq:fs-id1167793400814}

Next, we calculate the moments. We only need ${M}_{x}\text{:}$

$\begin{array}{rl}{M}_{x} & =ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx} \\ & =\frac{1}{2}{{\displaystyle \int}}_{−2}^{2}{[4-{x}^{2}]}^{2}dx=\frac{1}{2}{{\displaystyle \int}}_{−2}^{2}(16-8{x}^{2}+{x}^{4})dx \\ & =\frac{1}{2}{[\frac{{x}^{5}}{5}-\frac{8{x}^{3}}{3}+16x]\;|}_{−2}^{2}=\frac{256}{15}.\end{array}$  {eq:fs-id1167793276870}

Then we have

$\bar{y}=\frac{{M}_{x}}{m}=\frac{256}{15}\cdot \frac{3}{32}=\frac{8}{5}.$  {eq:fs-id1167793221728}

The centroid of the region is $(0,8\text{/}5).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793619904} type= 
PROBLEM:
Let *R* be the region bounded above by the graph of the function $f(x)=1-{x}^{2}$ and below by *x*-axis. Find the centroid of the region.
SOLUTION:
The centroid of the region is $(0,2\text{/}5).$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

:::note [project] The Grand Canyon Skywalk
The Grand Canyon Skywalk opened to the public on March 28, 2007. This engineering marvel is a horseshoe-shaped observation platform suspended 4000 ft above the Colorado River on the West Rim of the Grand Canyon. Its crystal-clear glass floor allows stunning views of the canyon below (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_06_011} src=../../media/CNX_Calc_Figure_06_06_011.jpg
> alt: This figure is a picture of the Grand Canyon skywalk. It is a building at the edge of the canyon with a walkway extending out over the canyon
> caption: The Grand Canyon Skywalk offers magnificent views of the canyon. (credit: 10da_ralta, Wikimedia Commons)

The Skywalk is a cantilever design, meaning that the observation platform extends over the rim of the canyon, with no visible means of support below it. Despite the lack of visible support posts or struts, cantilever structures are engineered to be very stable and the Skywalk is no exception. The observation platform is attached firmly to support posts that extend 46 ft down into bedrock. The structure was built to withstand 100-mph winds and an 8.0-magnitude earthquake within 50 mi, and is capable of supporting more than 70,000,000 lb.
One factor affecting the stability of the Skywalk is the center of gravity of the structure. We are going to calculate the center of gravity of the Skywalk, and examine how the center of gravity changes when tourists walk out onto the observation platform.
The observation platform is U-shaped. The legs of the U are 10 ft wide and begin on land, under the visitors’ center, 48 ft from the edge of the canyon. The platform extends 70 ft over the edge of the canyon.
To calculate the center of mass of the structure, we treat it as a lamina and use a two-dimensional region in the *xy*-plane to represent the platform. We begin by dividing the region into three subregions so we can consider each subregion separately. The first region, denoted ${R}_{1},$ consists of the curved part of the U. We model ${R}_{1}$ as a semicircular annulus, with inner radius 25 ft and outer radius 35 ft, centered at the origin (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_06_012} src=../../media/CNX_Calc_Figure_06_06_012.jpg
> alt: This figure is a sketch of the Grand Canyon walkway. It is on the xy coordinate system. The walkway is upside-down “u” shaped. It has been divided into three regions. The first region at the top is labeled “Rsub1”. It is a semi-circle with outer radius of 35 feet and inner radius of 25 feet. The second region is labeled “Rsub2”. It has two rectangles with width of 10 feet each and height of 35 feet. The third region is labeled “Rsub3” and is two rectangles. They have a width of 10 feet and height of 48 feet. These represent the part of the walkway inside of the visitor center.
> caption: We model the Skywalk with three sub-regions.

The legs of the platform, extending 35 ft between ${R}_{1}$ and the canyon wall, comprise the second sub-region, ${R}_{2}.$ Last, the ends of the legs, which extend 48 ft under the visitor center, comprise the third sub-region, ${R}_{3}.$ Assume the density of the lamina is constant and assume the total weight of the platform is 1,200,000 lb (not including the weight of the visitor center; we will consider that later). Use $g=32\;{\text{ft/sec}}^{2}.$
1. Compute the area of each of the three sub-regions. Note that the areas of regions ${R}_{2}$ and ${R}_{3}$ should include the areas of the legs only, not the open space between them. Round answers to the nearest square foot.
2. Determine the mass associated with each of the three sub-regions.
3. Calculate the center of mass of each of the three sub-regions.
4. Now, treat each of the three sub-regions as a point mass located at the center of mass of the corresponding sub-region. Using this representation, calculate the center of mass of the entire platform.
5. Assume the visitor center weighs 2,200,000 lb, with a center of mass corresponding to the center of mass of ${R}_{3}.$ Treating the visitor center as a point mass, recalculate the center of mass of the system. How does the center of mass change?
6. Although the Skywalk was built to limit the number of people on the observation platform to 120, the platform is capable of supporting up to 800 people weighing 200 lb each. If all 800 people were allowed on the platform, and all of them went to the farthest end of the platform, how would the center of gravity of the system be affected? (Include the visitor center in the calculations and represent the people by a point mass located at the farthest edge of the platform, 70 ft from the canyon wall.)
:::

## Theorem of Pappus
This section ends with a discussion of the {term:theorem of Pappus for volume}, which allows us to find the volume of particular kinds of solids by using the centroid. (There is also a theorem of Pappus for surface area, but it is much less useful than the theorem for volume.)

:::note [theorem] Theorem of Pappus for Volume
Let *R* be a region in the plane and let *l* be a line in the plane that does not intersect *R*. Then the volume of the solid of revolution formed by revolving *R* around *l* is equal to the area of *R* multiplied by the distance *d* traveled by the centroid of *R.*
:::

### Proof
We can prove the case when the region is bounded above by the graph of a function $f(x)$ and below by the graph of a function $g(x)$ over an interval $[a,b],$ and for which the axis of revolution is the *y*-axis. In this case, the area of the region is $A={{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx.$ Since the axis of rotation is the *y*-axis, the distance traveled by the centroid of the region depends only on the *x*-coordinate of the centroid, $\bar{x},$ which is

$\bar{x}=\frac{{M}_{y}}{m},$  {eq:fs-id1167793372816}

where

$m=ρ{{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx\;\text{and}\;{M}_{y}=ρ{\displaystyle \int_{a}^{b}x[f(x)-g(x)]dx}.$  {eq:fs-id1167793277642}

Then,

$d=2\pi \frac{ρ{\displaystyle \int_{a}^{b}x[f(x)-g(x)]dx}}{ρ{{\displaystyle \int}}_{a}^{b}[f(x)-g(x)]dx}$  {eq:fs-id1167794165426}

and thus

$d\cdot A=2\pi {\displaystyle \int_{a}^{b}x[f(x)-g(x)]dx}.$  {eq:fs-id1167794138973}

However, using the method of cylindrical shells, we have

$V=2\pi {\displaystyle \int_{a}^{b}x}[f(x)-g(x)]dx.$  {eq:fs-id1167793720003}

So,

$V=d\cdot A$  {eq:fs-id1167793546891}

and the proof is complete.
□

:::example {ex:fs-id1167793385038} Using the Theorem of Pappus for Volume

:::exercise {fs-id1167793385040} type= 
PROBLEM:
Let *R* be a circle of radius 2 centered at $(4,0).$ Use the theorem of Pappus for volume to find the volume of the torus generated by revolving *R* around the *y*-axis.
SOLUTION:
The region and torus are depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_06_013} src=../../media/CNX_Calc_Figure_06_06_013.jpg
> alt: This figure has two graphs. The first is the x y coordinate system with a circle centered on the x-axis at x=4. The radius is 2. The second figure is the x y coordinate system. The circle from the first image has been revolved about the y-axis to form a torus.
> caption: Determining the volume of a torus by using the theorem of Pappus. (a) A circular region *R* in the plane; (b) the torus generated by revolving *R* about the *y*-axis.

The region *R* is a circle of radius 2, so the area of *R* is $A=4\pi$ units<sup>2</sup>. By the symmetry principle, the centroid of *R* is the center of the circle. The centroid travels around the *y*-axis in a circular path of radius 4, so the centroid travels $d=8\pi$ units. Then, the volume of the torus is $A\cdot d=32{\pi}^{2}$ units<sup>3</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793221565} type= 
PROBLEM:
Let *R* be a circle of radius 1 centered at $(3,0).$ Use the theorem of Pappus for volume to find the volume of the torus generated by revolving *R* around the *y*-axis.
SOLUTION:
$6{\pi}^{2}$ units<sup>3</sup>
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- Mathematically, the center of mass of a system is the point at which the total mass of the system could be concentrated without changing the moment. Loosely speaking, the center of mass can be thought of as the balancing point of the system.
- For point masses distributed along a number line, the moment of the system with respect to the origin is $M=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{x}_{i}.$ For point masses distributed in a plane, the moments of the system with respect to the *x*- and *y*-axes, respectively, are ${M}_{x}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{y}_{i}$ and ${M}_{y}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{x}_{i},$ respectively.
- For a lamina bounded above by a function $f(x),$ the moments of the system with respect to the *x*- and *y*-axes, respectively, are ${M}_{x}=ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx}$ and ${M}_{y}=ρ{\displaystyle \int_{a}^{b}xf(x)dx}.$
- The *x*- and *y*-coordinates of the center of mass can be found by dividing the moments around the *y*-axis and around the *x*-axis, respectively, by the total mass. The symmetry principle says that if a region is symmetric with respect to a line, then the centroid of the region lies on the line.
- The theorem of Pappus for volume says that if a region is revolved around an external axis, the volume of the resulting solid is equal to the area of the region multiplied by the distance traveled by the centroid of the region.

## Key Equations {section:key-equations}

> TABLE {tab:eip-509} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Mass of a lamina** | $m=ρ{{\displaystyle \int}}_{a}^{b}f(x)dx$ |
| **Moments of a lamina** | ${M}_{x}=ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx}\;\text{and}\;{M}_{y}=ρ{\displaystyle \int_{a}^{b}xf(x)dx}$ |
| **Center of mass of a lamina** | $\bar{x}=\frac{{M}_{y}}{m}\;\text{and}\;\bar{y}=\frac{{M}_{x}}{m}$ |

##  {section:section-exercises}
For the following exercises, calculate the center of mass for the collection of masses given.

:::exercise {fs-id1167793354968} type= 
PROBLEM:
${m}_{1}=2$ at ${x}_{1}=1$ and ${m}_{2}=4$ at ${x}_{2}=2$
:::

:::exercise {fs-id1167793454741} type= 
PROBLEM:
${m}_{1}=1$ at ${x}_{1}=−1$ and ${m}_{2}=3$ at ${x}_{2}=2$
SOLUTION:
$\frac{5}{4}$
:::

:::exercise {fs-id1167793281523} type= 
PROBLEM:
$m=3$ at $x=0,1,2,6$
:::

:::exercise {fs-id1167793630305} type= 
PROBLEM:
Unit masses at $(x,y)=(1,0),(0,1),(1,1)$
SOLUTION:
$(\frac{2}{3},\frac{2}{3})$
:::

:::exercise {fs-id1167794094435} type= 
PROBLEM:
${m}_{1}=1$ at $(1,0)$ and ${m}_{2}=4$ at $(0,1)$
:::

:::exercise {fs-id1167793958530} type= 
PROBLEM:
${m}_{1}=1$ at $(1,0)$ and ${m}_{2}=3$ at $(2,2)$
SOLUTION:
$(\frac{7}{4},\frac{3}{2})$
:::
For the following exercises, compute the center of mass $\bar{x}.$

:::exercise {fs-id1167793699375} type= 
PROBLEM:
$ρ=1$ for $x\in (−1,3)$
:::

:::exercise {fs-id1167793441562} type= 
PROBLEM:
$ρ={x}^{2}$ for $x\in (0,L)$
SOLUTION:
$\frac{3L}{4}$
:::

:::exercise {fs-id1167793473618} type= 
PROBLEM:
$ρ=1$ for $x\in (0,1)$ and $ρ=2$ for $x\in (1,2)$
:::

:::exercise {fs-id1167793582491} type= 
PROBLEM:
$ρ=\text{sin}\;x$ for $x\in (0,\pi )$
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1167793662158} type= 
PROBLEM:
$ρ=\text{cos}\;x$ for $x\in (0,\frac{\pi}{2})$
:::

:::exercise {fs-id1167793543530} type= 
PROBLEM:
$ρ={e}^{x}$ for $x\in (0,2)$
SOLUTION:
$\frac{{e}^{2}+1}{{e}^{2}-1}$
:::

:::exercise {fs-id1167793368677} type= 
PROBLEM:
$ρ={x}^{3}+x{e}^{\text{−}x}$ for $x\in (0,1)$
:::

:::exercise {fs-id1167793418227} type= 
PROBLEM:
$ρ=x\;\text{sin}\;x$ for $x\in (0,\pi )$
SOLUTION:
$\frac{{\pi}^{2}-4}{\pi}$
:::

:::exercise {fs-id1167794127177} type= 
PROBLEM:
$ρ=\sqrt{x}$ for $x\in (1,4)$
:::

:::exercise {fs-id1167793616388} type= 
PROBLEM:
$ρ=\text{ln}\;x$ for $x\in (1,e)$
SOLUTION:
$\frac{1}{4}(1+{e}^{2})$
:::
For the following exercises, compute the center of mass $(\bar{x},\bar{y}).$ Use symmetry to help locate the center of mass whenever possible.

:::exercise {fs-id1167793455183} type= 
PROBLEM:
$ρ=7$ in the square $0\le x\le 1,$ $0\le y\le 1$
:::

:::exercise {fs-id1167793514575} type= 
PROBLEM:
$ρ=3$ in the triangle with vertices $(0,0),$ $(a,0),$ and $(0,b)$
SOLUTION:
$(\frac{a}{3},\frac{b}{3})$
:::

:::exercise {fs-id1167793420989} type= 
PROBLEM:
$ρ=2$ for the region bounded by $y=\text{cos}(x),$ $y=\text{−}\text{cos}(x),$ $x=-\frac{\pi}{2},$ and $x=\frac{\pi}{2}$
:::
For the following exercises, use a calculator to draw the region, then compute the center of mass $(\bar{x},\bar{y}).$ Use symmetry to help locate the center of mass whenever possible.

:::exercise {fs-id1167793270517} type= 
PROBLEM:
**[T]** The region bounded by $y=\text{cos}(2x),$ $x=-\frac{\pi}{4},$ and $x=\frac{\pi}{4}$
SOLUTION:
$(0,\frac{\pi}{8})$
:::

:::exercise {fs-id1167793978408} type= 
PROBLEM:
**[T]** The region between $y=2{x}^{2},$ $y=0,$ $x=0,$ and $x=1$
:::

:::exercise {fs-id1167794291717} type= 
PROBLEM:
**[T]** The region between $y=\frac{5}{4}{x}^{2}$ and $y=5$
SOLUTION:
$(0,3)$
:::

:::exercise {fs-id1167793504246} type= 
PROBLEM:
**[T]** Region between $y=\sqrt{x},$ $y=\text{ln}(x),$ $x=1,$ and $x=4$
:::

:::exercise {fs-id1167794005214} type= 
PROBLEM:
**[T]** The region bounded by $y=0,$ $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}=1$
SOLUTION:
$(0,\frac{4}{\pi})$
:::

:::exercise {fs-id1167794054236} type= 
PROBLEM:
**[T]** The region bounded by $y=0,$ $x=0,$ and $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}=1$
:::

:::exercise {fs-id1167793561595} type= 
PROBLEM:
**[T]** The region bounded by $y={x}^{2}$ and $y={x}^{4}$ in the first quadrant
SOLUTION:
$(\frac{5}{8},\frac{1}{3})$
:::
For the following exercises, use the theorem of Pappus to determine the volume of the shape.

:::exercise {fs-id1167793445715} type= 
PROBLEM:
Rotating $y=mx$ around the $x$-axis between $x=0$ and $x=1$
:::

:::exercise {fs-id1167793562366} type= 
PROBLEM:
Rotating $y=mx$ around the $y$-axis between $x=0$ and $x=1$
SOLUTION:
$\frac{2m\pi}{3}$
:::

:::exercise {fs-id1167793384860} type= 
PROBLEM:
A general cone created by rotating a triangle with vertices $(0,0),$ $(a,0),$ and $(0,b)$ around the $y$-axis. Does your answer agree with the volume of a cone?
:::

:::exercise {fs-id1167793543469} type= 
PROBLEM:
A general cylinder created by rotating a rectangle with vertices $(0,0),$ $(a,0),(0,b),$ and $(a,b)$ around the $y$-axis. Does your answer agree with the volume of a cylinder?
SOLUTION:
$\pi {a}^{2}b$
:::

:::exercise {fs-id1167793729519} type= 
PROBLEM:
A sphere created by rotating a semicircle with radius $a$ around the $y$-axis. Does your answer agree with the volume of a sphere?
:::
For the following exercises, use a calculator to draw the region enclosed by the curve. Find the area $M$ and the centroid $(\bar{x},\bar{y})$ for the given shapes. Use symmetry to help locate the center of mass whenever possible.

:::exercise {fs-id1167794326056} type= 
PROBLEM:
**[T]** Quarter-circle: $y=\sqrt{1-{x}^{2}},$ $y=0,$ and $x=0$
SOLUTION:
$(\frac{4}{3\pi},\frac{4}{3\pi})$
:::

:::exercise {fs-id1167793401463} type= 
PROBLEM:
**[T]** Triangle: $y=x,$ $y=2-x,$ and $y=0$
:::

:::exercise {fs-id1167794222378} type= 
PROBLEM:
**[T]** Lens: $y={x}^{2}$ and $y=x$
SOLUTION:
$(\frac{1}{2},\frac{2}{5})$
:::

:::exercise {fs-id1167794095311} type= 
PROBLEM:
**[T]** Ring: ${y}^{2}+{x}^{2}=1$ and ${y}^{2}+{x}^{2}=4$
:::

:::exercise {fs-id1167793776878} type= 
PROBLEM:
**[T]** Half-ring: ${y}^{2}+{x}^{2}=1,$ ${y}^{2}+{x}^{2}=4,$ and $y=0$
SOLUTION:
$(0,\frac{28}{9\pi})$
:::

:::exercise {fs-id1167794212245} type= 
PROBLEM:
Find the generalized center of mass in the sliver between $y={x}^{a}$ and $y={x}^{b}$ with $a>b.$ Then, use the Pappus theorem to find the volume of the solid generated when revolving around the *y*-axis.
:::

:::exercise {fs-id1167793604172} type= 
PROBLEM:
Find the generalized center of mass between $y={a}^{2}-{x}^{2},$ $x=0,$ and $y=0.$ Then, use the Pappus theorem to find the volume of the solid generated when revolving around the *y*-axis.
SOLUTION:
Center of mass: $(\frac{3a}{8},\frac{2{a}^{2}}{5}),$ volume: $\frac{\pi {a}^{4}}{2}$
:::

:::exercise {fs-id1167793521468} type= 
PROBLEM:
Find the generalized center of mass between $y=b\;\text{sin}(ax),$ $x=0,$ and $x=\frac{\pi}{a}.$ Then, use the Pappus theorem to find the volume of the solid generated when revolving around the *y*-axis.
:::

:::exercise {fs-id1167793590340} type= 
PROBLEM:
Use the theorem of Pappus to find the volume of a torus (pictured here). Assume that a disk of radius $a$ is positioned with the left end of the circle at $x=b,$ $b>0,$ and is rotated around the *y*-axis.

> IMAGE {img:fs-id1167793705281} src=../../media/CNX_Calc_Figure_06_06_201.jpg
> alt: This figure is a torus. It has inner radius of b. Inside of the torus is a cross section that is a circle. The circle has radius a.

SOLUTION:
Volume: $2{\pi}^{2}{a}^{2}(b+a)$
:::

:::exercise {fs-id1167793705330} type= 
PROBLEM:
Find the center of mass $(\bar{x},\bar{y})$ for a thin wire along the semicircle $y=\sqrt{1-{x}^{2}}$ with unit mass. (*Hint:* Use the theorem of Pappus.)
:::

## Glossary
- {def} **center of mass**: the point at which the total mass of the system could be concentrated without changing the moment
- {def} **centroid**: the centroid of a region is the geometric center of the region; laminas are often represented by regions in the plane; if the lamina has a constant density, the center of mass of the lamina depends only on the shape of the corresponding planar region; in this case, the center of mass of the lamina corresponds to the centroid of the representative region
- {def} **lamina**: a thin sheet of material; laminas are thin enough that, for mathematical purposes, they can be treated as if they are two-dimensional
- {def} **moment**: if *n* masses are arranged on a number line, the moment of the system with respect to the origin is given by $M=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{m}_{i}{x}_{i};$ if, instead, we consider a region in the plane, bounded above by a function $f(x)$ over an interval $[a,b],$ then the moments of the region with respect to the *x*- and *y*-axes are given by ${M}_{x}=ρ{\displaystyle \int_{a}^{b}\frac{{[f(x)]}^{2}}{2}dx}$ and ${M}_{y}=ρ{\displaystyle \int_{a}^{b}xf(x)dx},$ respectively
- {def} **symmetry principle**: the symmetry principle states that if a region *R* is symmetric about a line *l*, then the centroid of *R* lies on *l*
- {def} **theorem of Pappus for volume**: this theorem states that the volume of a solid of revolution formed by revolving a region around an external axis is equal to the area of the region multiplied by the distance traveled by the centroid of the region

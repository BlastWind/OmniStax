# Volumes of Revolution: Cylindrical Shells

## Learning Objectives {section:learning-objectives}
- Calculate the volume of a solid of revolution by using the method of cylindrical shells.
- Compare the different methods for calculating a volume of revolution.

In this section, we examine the method of cylindrical shells, the final method for finding the volume of a solid of revolution. We can use this method on the same kinds of solids as the disk method or the washer method; however, with the disk and washer methods, we integrate along the coordinate axis parallel to the axis of revolution. With the method of cylindrical shells, we integrate along the coordinate axis *perpendicular* to the axis of revolution. The ability to choose which variable of integration we want to use can be a significant advantage with more complicated functions. Also, the specific geometry of the solid sometimes makes the method of using cylindrical shells more appealing than using the washer method. In the last part of this section, we review all the methods for finding volume that we have studied and lay out some guidelines to help you determine which method to use in a given situation.

## The Method of Cylindrical Shells
Again, we are working with a solid of revolution. As before, we define a region $R,$ bounded above by the graph of a function $y=f(x),$ below by the $x\text{-axis,}$ and on the left and right by the lines $x=a$ and $x=b,$ respectively, as shown in [ref:CNX_Calc_Figure_06_03_001](a). We then revolve this region around the *y*-axis, as shown in [ref:CNX_Calc_Figure_06_03_001](b). Note that this is different from what we have done before. Previously, regions defined in terms of functions of $x$ were revolved around the $x\text{-axis}$ or a line parallel to it.

> FIGURE {fig:CNX_Calc_Figure_06_03_001} src=../../media/CNX_Calc_Figure_06_03_001.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is an increasing curve in the first quadrant. The curve is labeled “y=f(x)”. The curve starts on the y-axis at y=a. Under the curve, above the x-axis is a shaded region labeled “R”. The shaded region is bounded on the right by the line x=b. The second graph is a three dimensional solid. It has been created by rotating the shaded region from “a” around the y-axis.
> caption: (a) A region bounded by the graph of a function of $x.$ (b) The solid of revolution formed when the region is revolved around the $y\text{-axis}\text{.}$

As we have done many times before, partition the interval $[a,b]$ using a regular partition, $P=\{{x}_{0},{x}_{1}\text{,…},{x}_{n}\}$ and, for $i=1,2\text{,…},n,$ choose a point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ Then, construct a rectangle over the interval $[{x}_{i-1},{x}_{i}]$ of height $f({x}_{i}^{*})$ and width $\text{Δ}x.$ A representative rectangle is shown in [ref:CNX_Calc_Figure_06_03_002](a). When that rectangle is revolved around the *y*-axis, instead of a disk or a washer, we get a cylindrical shell, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_002} src=../../media/CNX_Calc_Figure_06_03_002.jpg
> alt: This figure has two images. The first is a cylindrical shell, hollow in the middle. It has a vertical axis in the center. There is also a curve that meets the top of the cylinder. The second image is a set of concentric cylinders, one inside of the other forming a nesting of cylinders.
> caption: (a) A representative rectangle. (b) When this rectangle is revolved around the $y\text{-axis},$ the result is a cylindrical shell. (c) When we put all the shells together, we get an approximation of the original solid.

To calculate the volume of this shell, consider [ref:CNX_Calc_Figure_06_03_003].

> FIGURE {fig:CNX_Calc_Figure_06_03_003} src=../../media/CNX_Calc_Figure_06_03_003.jpg
> alt: This figure is a graph in the first quadrant. The curve is increasing and labeled “y=f(x)”. The curve starts on the y-axis at f(x*). Below the curve is a shaded rectangle. The rectangle starts on the x-axis. The width of the rectangle is delta x. The two sides of the rectangle are labeled “xsub(i-1)” and “xsubi”.
> caption: Calculating the volume of the shell.

The shell is a cylinder, so its volume is the cross-sectional area multiplied by the height of the cylinder. The cross-sections are annuli (ring-shaped regions—essentially, circles with a hole in the center), with outer radius ${x}_{i}$ and inner radius ${x}_{i-1}.$ Thus, the cross-sectional area is $\pi {x}_{i}^{2}-\pi {x}_{i-1}^{2}.$ The height of the cylinder is $f({x}_{i}^{*}).$ Then the volume of the shell is

$\begin{array}{rl}{V}_{\text{shell}} & =f({x}_{i}^{*})(\pi {x}_{i}^{2}-\pi {x}_{i-1}^{2}) \\ & =\pi f({x}_{i}^{*})({x}_{i}^{2}-{x}_{i-1}^{2}) \\ & =\pi f({x}_{i}^{*})({x}_{i}+{x}_{i-1})({x}_{i}-{x}_{i-1}) \\ & =2\pi f({x}_{i}^{*})(\frac{{x}_{i}+{x}_{i-1}}{2})({x}_{i}-{x}_{i-1}).\end{array}$  {eq:fs-id1167793272795}

Note that ${x}_{i}-{x}_{i-1}=\text{Δ}x,$ so we have

${V}_{\text{shell}}=2\pi f({x}_{i}^{*})(\frac{{x}_{i}+{x}_{i-1}}{2})\text{Δ}x.$  {eq:fs-id1167793631680}

Furthermore, $\frac{{x}_{i}+{x}_{i-1}}{2}$ is both the midpoint of the interval $[{x}_{i-1},{x}_{i}]$ and the average radius of the shell, and we can approximate this by ${x}_{i}^{*}.$ We then have

${V}_{\text{shell}}\approx 2\pi f({x}_{i}^{*}){x}_{i}^{*}\text{Δ}x.$  {eq:fs-id1167793662486}

Another way to think of this is to think of making a vertical cut in the shell and then opening it up to form a flat plate ([ref:CNX_Calc_Figure_06_03_004]).

> FIGURE {fig:CNX_Calc_Figure_06_03_004} src=../../media/CNX_Calc_Figure_06_03_012.jpg
> alt: This figure has two images. The first is labeled “a” and is of a hollow cylinder around the y-axis. On the front of this cylinder is a vertical line labeled “cut line”. The height of the cylinder is “y=f(x)”. The second figure is labeled “b” and is a shaded rectangular block. The height of the rectangle is “f(x*), the width of the rectangle is “2pix*”, and the thickness of the rectangle is “delta x”.
> caption: (a) Make a vertical cut in a representative shell. (b) Open the shell up to form a flat plate.

In reality, the outer radius of the shell is greater than the inner radius, and hence the back edge of the plate would be slightly longer than the front edge of the plate. However, we can approximate the flattened shell by a flat plate of height $f({x}_{i}^{*}),$ width $2\pi {x}_{i}^{*},$ and thickness $\text{Δ}x$ ([ref:CNX_Calc_Figure_06_03_004]). The volume of the shell, then, is approximately the volume of the flat plate. Multiplying the height, width, and depth of the plate, we get

${V}_{\text{shell}}\approx f({x}_{i}^{*})(2\pi {x}_{i}^{*})\text{Δ}x,$  {eq:fs-id1167794326127}

which is the same formula we had before.
To calculate the volume of the entire solid, we then add the volumes of all the shells and obtain

$V\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}(2\pi {x}_{i}^{*}f({x}_{i}^{*})\text{Δ}x).$  {eq:fs-id1167793624597}

Here we have another Riemann sum, this time for the function $2\pi xf(x).$ Taking the limit as $n\to \infty$ gives us

$V=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}(2\pi {x}_{i}^{*}f({x}_{i}^{*})\text{Δ}x)={\displaystyle \int_{a}^{b}(2\pi xf(x))}dx.$  {eq:fs-id1167794040741}

This leads to the following rule for the {term:method of cylindrical shells.}

:::note [rule] Rule: The Method of Cylindrical Shells
Let $f(x)$ be continuous and nonnegative. Define $R$ as the region bounded above by the graph of $f(x),$ below by the $x\text{-axis},$ on the left by the line $x=a,$ and on the right by the line $x=b.$ Then the volume of the solid of revolution formed by revolving $R$ around the *y*-axis is given by

$$ V={\displaystyle \int_{a}^{b}(2\pi xf(x))}dx. $$  {eq:fs-id1167794054067}

:::
Now let’s consider an example.

:::example {ex:fs-id1167794163662} The Method of Cylindrical Shells 1

:::exercise {fs-id1167793514621} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of $f(x)=1\text{/}x$ and below by the $x\text{-axis}$ over the interval $[1,3].$ Find the volume of the solid of revolution formed by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
First we must graph the region $R$ and the associated solid of revolution, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_005} src=../../media/CNX_Calc_Figure_06_03_004.jpg
> alt: This figure has three images. The first is a solid that has been formed by rotating the curve y=1/x about the y-axis. The solid begins on the x-axis and stops where y=1. The second image is labeled “a” and is the graph of y=1/x in the first quadrant. Under the curve is a shaded region labeled “R”. The region is bounded by the curve, the x-axis, to the left at x=1 and to the right at x=3. The third image is labeled “b” and is half of the solid formed by rotating the shaded region about the y-axis.
> caption: (a) The region $R$ under the graph of $f(x)=1\text{/}x$ over the interval $[1,3].$ (b) The solid of revolution generated by revolving $R$ about the $y\text{-axis}.$

Then the volume of the solid is given by

$\begin{array}{rl}V & ={\displaystyle \int_{a}^{b}(2\pi xf(x))}dx \\ & ={\displaystyle \int_{1}^{3}(2\pi x(\frac{1}{x}))dx} \\ & ={\displaystyle \int_{1}^{3}2}\pi \;dx={2\pi x|}_{1}^{3}=4\pi \;{\text{units}}^{3}\text{.}\end{array}$  {eq:fs-id1167793960217}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793250305} type= 
PROBLEM:
Define *R* as the region bounded above by the graph of $f(x)={x}^{2}$ and below by the *x*-axis over the interval $[1,2].$ Find the volume of the solid of revolution formed by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
$\frac{15\pi}{2}$ units<sup>3</sup>
COMMENTARY: Hint
Use the procedure from [ref:fs-id1167794163662].
:::
:::

:::example {ex:fs-id1167793454737} The Method of Cylindrical Shells 2

:::exercise {fs-id1167793454739} type= 
PROBLEM:
Define *R* as the region bounded above by the graph of $f(x)=2x-{x}^{2}$ and below by the $x\text{-axis}$ over the interval $[0,2].$ Find the volume of the solid of revolution formed by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
First graph the region $R$ and the associated solid of revolution, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_006} src=../../media/CNX_Calc_Figure_06_03_005.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is the curve f(x)=2x-x^2. It is an upside down parabola intersecting the x-axis at the origin ant at x=2. Under the curve the region in the first quadrant is shaded and is labeled “R”. The second figure is a graph of the same curve. On the graph is a solid that is formed by rotation the region from “a” about the y-axis.
> caption: (a) The region $R$ under the graph of $f(x)=2x-{x}^{2}$ over the interval $[0,2].$ (b) The volume of revolution obtained by revolving $R$ about the $y\text{-axis}.$

Then the volume of the solid is given by

$\begin{array}{rl}V & ={\displaystyle \int_{a}^{b}(2\pi xf(x))}dx \\ & ={\displaystyle \int_{0}^{2}(2\pi x(2x-{x}^{2}))}dx=2\pi {\displaystyle \int_{0}^{2}(2{x}^{2}-{x}^{3})}dx \\ & ={2\pi [\frac{2{x}^{3}}{3}-\frac{{x}^{4}}{4}]\;|}_{0}^{2}=\frac{8\pi}{3}\;{\text{units}}^{3}\text{.}\end{array}$  {eq:fs-id1167793944607}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793419121} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of $f(x)=3x-{x}^{2}$ and below by the $x\text{-axis}$ over the interval $[0,2].$ Find the volume of the solid of revolution formed by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
$8\pi$ units<sup>3</sup>
COMMENTARY: Hint
Use the process from [ref:fs-id1167793454737].
:::
:::
As with the disk method and the washer method, we can use the method of cylindrical shells with solids of revolution, revolved around the $x\text{-axis},$ when we want to integrate with respect to $y.$ The analogous rule for this type of solid is given here.

:::note [rule] Rule: The Method of Cylindrical Shells for Solids of Revolution around the *x*-axis
Let $g(y)$ be continuous and nonnegative. Define $Q$ as the region bounded on the right by the graph of $g(y),$ on the left by the $y\text{-axis},$ below by the line $y=c,$ and above by the line $y=d.$ Then, the volume of the solid of revolution formed by revolving $Q$ around the $x\text{-axis}$ is given by

$V={\displaystyle \int_{c}^{d}(2\pi yg(y))}dy.$  {eq:fs-id1167793559101}

:::

:::example {ex:fs-id1167793625602} The Method of Cylindrical Shells for a Solid Revolved around the *x*-axis

:::exercise {fs-id1167793625604} type= 
PROBLEM:
Define $Q$ as the region bounded on the right by the graph of $g(y)=2\sqrt{y}$ and on the left by the $y\text{-axis}$ for $y\in [0,4].$ Find the volume of the solid of revolution formed by revolving $Q$ around the *x*-axis.
SOLUTION:
First, we need to graph the region $Q$ and the associated solid of revolution, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_007} src=../../media/CNX_Calc_Figure_06_03_006.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is the curve g(y)=2squareroot(y). It is an increasing curve in the first quadrant beginning at the origin. Between the y-axis and the curve, there is a shaded region labeled “Q”. The shaded region is bounded above by the line y=4. The second graph is the same curve in “a” and labeled “b”. It also has a solid region that has been formed by rotating the curve in “a” about the x-axis. The solid starts at the y-axis and stops at x=4.
> caption: (a) The region $Q$ to the left of the function $g(y)$ over the interval $[0,4].$ (b) The solid of revolution generated by revolving $Q$ around the $x\text{-axis}.$

Label the shaded region $Q.$ Then the volume of the solid is given by

$\begin{array}{rl}V & ={\displaystyle \int_{c}^{d}(2\pi yg(y))}dy \\ & ={\displaystyle \int_{0}^{4}(2\pi y(2\sqrt{y}))}dy=4\pi {\displaystyle \int_{0}^{4}{y}^{3\text{/}2}}dy \\ & ={4\pi [\frac{2{y}^{5\text{/}2}}{5}]\;|}_{0}^{4}=\frac{256\pi}{5}\;{\text{units}}^{3}\text{.}\end{array}$  {eq:fs-id1167793931838}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793441565} type= 
PROBLEM:
Define $Q$ as the region bounded on the right by the graph of $g(y)=3\text{/}y$ and on the left by the $y\text{-axis}$ for $y\in [1,3].$ Find the volume of the solid of revolution formed by revolving $Q$ around the $x\text{-axis}.$
SOLUTION:
$12\pi$ units<sup>3</sup>
COMMENTARY: Hint
Use the process from [ref:fs-id1167793625602].
:::
:::
For the next example, we look at a solid of revolution for which the graph of a function is revolved around a line other than one of the two coordinate axes. To set this up, we need to revisit the development of the method of cylindrical shells. Recall that we found the volume of one of the shells to be given by

$\begin{array}{rl}{V}_{\text{shell}} & =f({x}_{i}^{*})(\pi {x}_{i}^{2}-\pi {x}_{i-1}^{2}) \\ & =\pi f({x}_{i}^{*})({x}_{i}^{2}-{x}_{i-1}^{2}) \\ & =\pi f({x}_{i}^{*})({x}_{i}+{x}_{i-1})({x}_{i}-{x}_{i-1}) \\ & =2\pi f({x}_{i}^{*})(\frac{{x}_{i}+{x}_{i-1}}{2})({x}_{i}-{x}_{i-1}).\end{array}$  {eq:fs-id1167794146622}

This was based on a shell with an outer radius of ${x}_{i}$ and an inner radius of ${x}_{i-1}.$ If, however, we rotate the region around a line other than the $y\text{-axis},$ we have a different outer and inner radius. Suppose, for example, that we rotate the region around the line $x=\text{−}k,$ where $k$ is some positive constant. Then, the outer radius of the shell is ${x}_{i}+k$ and the inner radius of the shell is ${x}_{i-1}+k.$ Substituting these terms into the expression for volume, we see that when a plane region is rotated around the line $x=\text{−}k,$ the volume of a shell is given by

$\begin{array}{rl}{V}_{\text{shell}} & =2\pi f({x}_{i}^{*})(\frac{({x}_{i}+k)+({x}_{i-1}+k)}{2})(({x}_{i}+k)-({x}_{i-1}+k)) \\ & =2\pi f({x}_{i}^{*})((\frac{{x}_{i}+{x}_{i-1}}{2})+k)\text{Δ}x.\end{array}$  {eq:fs-id1167793421191}

As before, we notice that $\frac{{x}_{i}+{x}_{i-1}}{2}$ is the midpoint of the interval $[{x}_{i-1},{x}_{i}]$ and can be approximated by ${x}_{i}^{*}.$ Then, the approximate volume of the shell is

${V}_{\text{shell}}\approx 2\pi ({x}_{i}^{*}+k)f({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167793355111}

The remainder of the development proceeds as before, and we see that

$V={\displaystyle \int_{a}^{b}(2\pi (x+k)f(x))}dx.$  {eq:fs-id1167793729503}

We could also rotate the region around other horizontal or vertical lines, such as a vertical line in the right half plane. In each case, the volume formula must be adjusted accordingly. Specifically, the $x\text{-term}$ in the integral must be replaced with an expression representing the radius of a shell. To see how this works, consider the following example.

:::example {ex:fs-id1167794326041} A Region of Revolution Revolved around a Line

:::exercise {fs-id1167794326043} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of $f(x)=x$ and below by the $x\text{-axis}$ over the interval $[1,2].$ Find the volume of the solid of revolution formed by revolving $R$ around the line $x=−1.$
SOLUTION:
First, graph the region $R$ and the associated solid of revolution, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_008} src=../../media/CNX_Calc_Figure_06_03_007.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is the line f(x)=x, a diagonal line through the origin. There is a shaded region above the x-axis under the line labeled “R”. This region is bounded to the left by the line x=1 and to the right by the line x=2. There is also the vertical line x=-1 on the graph. The second figure has the same graphs as “a” and is labeled “b”. Also on the graph is a solid formed by rotating the region “R” from the first graph about the line x=-1.
> caption: (a) The region $R$ between the graph of $f(x)$ and the $x\text{-axis}$ over the interval $[1,2].$ (b) The solid of revolution generated by revolving $R$ around the line $x=−1.$

Note that the radius of a shell is given by $x+1.$ Then the volume of the solid is given by

$\begin{array}{rl}V & ={\displaystyle \int_{1}^{2}(2\pi (x+1)f(x))}dx \\ & ={\displaystyle \int_{1}^{2}(2\pi (x+1)x)}dx=2\pi {\displaystyle \int_{1}^{2}({x}^{2}+x)}dx \\ & ={2\pi [\frac{{x}^{3}}{3}+\frac{{x}^{2}}{2}]\;|}_{1}^{2}=\frac{23\pi}{3}\;{\text{units}}^{3}\text{.}\end{array}$  {eq:fs-id1167794095318}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793631745} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of $f(x)={x}^{2}$ and below by the $x\text{-axis}$ over the interval $[0,1].$ Find the volume of the solid of revolution formed by revolving $R$ around the line $x=−2.$
SOLUTION:
$\frac{11\pi}{6}$ units<sup>3</sup>
COMMENTARY: Hint
Use the process from [ref:fs-id1167794326041].
:::
:::
For our final example in this section, let’s look at the volume of a solid of revolution for which the region of revolution is bounded by the graphs of two functions.

:::example {ex:fs-id1167791543275} A Region of Revolution Bounded by the Graphs of Two Functions

:::exercise {fs-id1167791543277} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of the function $f(x)=\sqrt{x}$ and below by the graph of the function $g(x)=1\text{/}x$ over the interval $[1,4].$ Find the volume of the solid of revolution generated by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
First, graph the region $R$ and the associated solid of revolution, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_03_012} src=../../media/CNX_Calc_Figure_06_03_008.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and has two curves. The curves are the graphs of f(x)=squareroot(x) and g(x)=1/x. In the first quadrant the curves intersect at (1,1). In between the curves in the first quadrant there is a shaded region labeled “R”, bounded to the right by the line x=4. The second graph is labeled “b” and is the same as the graphs in “a”. Also on this graph is a solid that has been formed by rotating the region “R” from the figure “a” about the y-axis.
> caption: (a) The region $R$ between the graph of $f(x)$ and the graph of $g(x)$ over the interval $[1,4].$ (b) The solid of revolution generated by revolving $R$ around the $y\text{-axis}.$

Note that the axis of revolution is the $y\text{-axis},$ so the radius of a shell is given simply by $x.$ We don’t need to make any adjustments to the *x*-term of our integrand. The height of a shell, though, is given by $f(x)-g(x),$ so in this case we need to adjust the $f(x)$ term of the integrand. Then the volume of the solid is given by

$\begin{array}{rl}V & ={\displaystyle \int_{1}^{4}(2\pi x(f(x)-g(x)))}dx \\ & ={\displaystyle \int_{1}^{4}(2\pi x(\sqrt{x}-\frac{1}{x}))dx}=2\pi {\displaystyle \int_{1}^{4}({x}^{3\text{/}2}-1)}dx \\ & ={2\pi [\frac{2{x}^{5\text{/}2}}{5}-x]\;|}_{1}^{4}=\frac{94\pi}{5}\;{\text{units}}^{3}.\end{array}$  {eq:fs-id1167793590358}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794223708} type= 
PROBLEM:
Define $R$ as the region bounded above by the graph of $f(x)=x$ and below by the graph of $g(x)={x}^{2}$ over the interval $[0,1].$ Find the volume of the solid of revolution formed by revolving $R$ around the $y\text{-axis}.$
SOLUTION:
$\frac{\pi}{6}$ units<sup>3</sup>
COMMENTARY: Hint
Use the process from [ref:fs-id1167791543275].
:::
:::

## Which Method Should We Use?
We have studied several methods for finding the volume of a solid of revolution, but how do we know which method to use? It often comes down to a choice of which integral is easiest to evaluate. [ref:CNX_Calc_Figure_06_03_009] describes the different approaches for solids of revolution around the $x\text{-axis}.$ It’s up to you to develop the analogous table for solids of revolution around the $y\text{-axis}.$

> FIGURE {fig:CNX_Calc_Figure_06_03_009} src=../../media/CNX_Calc_Figure_06_03_009.jpg
> alt: This figure is a table comparing the different methods for finding volumes of solids of revolution. The columns in the table are labeled “comparison”, “disk method”, “washer method”, and “shell method”. The rows are labeled “volume formula”, “solid”, “interval to partition”, “rectangles”, “typical region”, and “rectangle”. In the disk method column, the formula is given as the definite integral from a to b of pi times [f(x)]^2. The solid has no cavity in the center, the partition is [a,b], rectangles are vertical, and the typical region is a shaded region above the x-axis and below the curve of f(x). In the washer method column, the formula is given as the definite integral from a to b of pi times [f(x)]^2-[g(x)]^2. The solid has a cavity in the center, the partition is [a,b], rectangles are vertical, and the typical region is a shaded region above the curve of g(x) and below the curve of f(x). In the shell method column, the formula is given as the definite integral from c to d of 2pi times yg(y). The solid is with or without a cavity in the center, the partition is [c,d] rectangles are horizontal, and the typical region is a shaded region above the x-axis and below the curve of g(y).
> caption: 

Let’s take a look at a couple of additional problems and decide on the best approach to take for solving them.

:::example {ex:fs-id1167793941036} Selecting the Best Method

:::exercise {fs-id1167793941052} type= 
PROBLEM:
For each of the following problems, select the best method to find the volume of a solid of revolution generated by revolving the given region around the $x\text{-axis},$ and set up the integral to find the volume (do not evaluate the integral).
a. The region bounded by the graphs of $y=x,$ $y=2-x,$ and the $x\text{-axis}.$
b. The region bounded by the graphs of $y=4x-{x}^{2}$ and the $x\text{-axis}.$
SOLUTION:
a. First, sketch the region and the solid of revolution as shown.

> FIGURE {fig:CNX_Calc_Figure_06_03_010} src=../../media/CNX_Calc_Figure_06_03_010.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and has two lines y=x and y=2-x drawn in the first quadrant. The lines intersect at (1,1) and form a triangle above the x-axis. The region that is the triangle is shaded. The second graph is labeled “b” and is the same graphs as “a”. The shaded triangular region in “a” has been rotated around the x-axis to form a solid on the second graph.
> caption: (a) The region $R$ bounded by two lines and the $x\text{-axis}.$ (b) The solid of revolution generated by revolving $R$ about the $x\text{-axis}.$

Looking at the region, if we want to integrate with respect to $x,$ we would have to break the integral into two pieces, because we have different functions bounding the region over $[0,1]$ and $[1,2].$ In this case, using the disk method, we would have

$V={\displaystyle \int_{0}^{1}(\pi {x}^{2})}dx+{\displaystyle \int_{1}^{2}(\pi {(2-x)}^{2})}dx.$  {eq:fs-id1167793255069}

If we used the shell method instead, we would use functions of $y$ to represent the curves, producing

$\begin{array}{rl}V & ={\displaystyle \int_{0}^{1}(2\pi y[(2-y)-y])}dy \\ & ={\displaystyle \int_{0}^{1}(2\pi y[2-2y])}dy.\end{array}$  {eq:fs-id1167793630587}

Neither of these integrals is particularly onerous, but since the shell method requires only one integral, and the integrand requires less simplification, we should probably go with the shell method in this case.
b. First, sketch the region and the solid of revolution as shown.

> FIGURE {fig:CNX_Calc_Figure_06_03_011} src=../../media/CNX_Calc_Figure_06_03_011.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is the curve y=4x-x^2. It is an upside down parabola intersecting the x-axis at the origin and at x=4. The region above the x-axis and below the curve is shaded and labeled “R”. The second graph labeled “b” is the same as in “a”. On this graph the shaded region “R” has been rotated around the x-axis to form a solid.
> caption: (a) The region $R$ between the curve and the $x\text{-axis}.$ (b) The solid of revolution generated by revolving $R$ about the $x\text{-axis}.$

Looking at the region, it would be problematic to define a horizontal rectangle; the region is bounded on the left and right by the same function. Therefore, we can dismiss the method of shells. The solid has no cavity in the middle, so we can use the method of disks. Then

$V={\displaystyle \int_{0}^{4}\pi}{(4x-{x}^{2})}^{2}dx.$  {eq:fs-id1167793286360}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793496052} type= 
PROBLEM:
Select the best method to find the volume of a solid of revolution generated by revolving the given region around the $x\text{-axis},$ and set up the integral to find the volume (do not evaluate the integral): the region bounded by the graphs of $y=2-{x}^{2}$ and $y={x}^{2}.$
SOLUTION:
Use the method of washers; $V={\displaystyle \int_{−1}^{1}\pi}[{(2-{x}^{2})}^{2}-{({x}^{2})}^{2}]dx$
COMMENTARY: Hint
Sketch the region and use [ref:CNX_Calc_Figure_06_03_009] to decide which integral is easiest to evaluate.
:::
:::

## Key Concepts {section:key-concepts}
- The method of cylindrical shells is another method for using a definite integral to calculate the volume of a solid of revolution. This method is sometimes preferable to either the method of disks or the method of washers because we integrate with respect to the other variable. In some cases, one integral is substantially more complicated than the other.
- The geometry of the functions and the difficulty of the integration are the main factors in deciding which integration method to use.

## Key Equations {section:key-equations}

> TABLE {tab:eip-506} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Method of Cylindrical Shells** | $V={\displaystyle \int_{a}^{b}(2\pi xf(x))}dx$ |

##  {section:section-exercises}
For the following exercises, find the volume generated when the region between the two curves is rotated around the given axis. Use both the shell method and the washer method. Use technology to graph the functions and draw a typical slice by hand.

:::exercise {fs-id1167793524762} type= 
PROBLEM:
**[T]** Bounded by the curves $y=3x,x=0,$ and $y=3$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167793524842} type= 
PROBLEM:
**[T]** Bounded by the curves $y=3x,y=0,\;\text{and}\;x=3$ rotated around the $y\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167793957881} src=../../media/CNX_Calc_Figure_06_03_202.jpg
> alt: This figure is a graph in the first quadrant. It is the line y=3x. Under the line and above the x-axis there is a shaded region. The region is bounded to the right at x=3.

$54\pi$ units<sup>3</sup>
:::

:::exercise {fs-id1167793957909} type= 
PROBLEM:
**[T]** Bounded by the curves $y=3x,y=0,\;\text{and}\;y=3$ rotated around the $x\text{-axis}.$
:::

:::exercise {fs-id1167794043039} type= 
PROBLEM:
**[T]** Bounded by the curves $y=3x,y=0,\;\text{and}\;x=3$ rotated around the $x\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167793975946} src=../../media/CNX_Calc_Figure_06_03_204.jpg
> alt: This figure is a graph in the first quadrant. It is the line y=3x. Under the line and above the x-axis there is a shaded region. The region is bounded to the right at x=3.

$81\pi$ units<sup>3</sup>
:::

:::exercise {fs-id1167793975974} type= 
PROBLEM:
**[T]** Bounded by the curves $y=2{x}^{3},y=0,\;\text{and}\;x=2$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167793609848} type= 
PROBLEM:
**[T]** Bounded by the curves $y=2{x}^{3},y=0,\;\text{and}\;x=2$ rotated around the $x\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167793450111} src=../../media/CNX_Calc_Figure_06_03_206.jpg
> alt: This figure is a graph in the first quadrant. It is the increasing curve y=2x^3. Under the curve and above the x-axis there is a shaded region. The region is bounded to the right at x=2.

$\frac{512\pi}{7}$ units<sup>3</sup>
:::
For the following exercises, use shells to find the volumes of the given solids. Note that the rotated regions lie between the curve and the $x\text{-axis}$ and are rotated around the $y\text{-axis}.$

:::exercise {fs-id1167793450164} type= 
PROBLEM:
$y=1-{x}^{2},x=0,\;\text{and}\;x=1$
:::

:::exercise {fs-id1167794095425} type= 
PROBLEM:
$y=5{x}^{3},x=0,\;\text{and}\;x=1$
SOLUTION:
$2\pi$ units<sup>3</sup>
:::

:::exercise {fs-id1167793298281} type= 
PROBLEM:
$y=\frac{1}{x},x=1,\;\text{and}\;x=100$
:::

:::exercise {fs-id1167793298341} type= 
PROBLEM:
$y=\sqrt{1-{x}^{2}},x=0,\;\text{and}\;x=1$
SOLUTION:
$\frac{2\pi}{3}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793594397} type= 
PROBLEM:
$y=\frac{1}{1+{x}^{2}},x=0,\;\text{and}\;x=3$
:::

:::exercise {fs-id1167793250416} type= 
PROBLEM:
$y=\text{sin}{x}^{2},x=0,\;\text{and}\;x=\sqrt{\pi}$
SOLUTION:
$2\pi$ units<sup>3</sup>
:::

:::exercise {fs-id1167793250479} type= 
PROBLEM:
$y=\frac{1}{\sqrt{1-{x}^{2}}},x=0,\;\text{and}\;x=\frac{1}{2}$
:::

:::exercise {fs-id1167794227972} type= 
PROBLEM:
$y=\sqrt{x},x=0,\;\text{and}\;x=1$
SOLUTION:
$\frac{4\pi}{5}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793499788} type= 
PROBLEM:
$y={(1+{x}^{2})}^{3},x=0,\;\text{and}\;x=1$
:::

:::exercise {fs-id1167793568979} type= 
PROBLEM:
$y=5{x}^{3}-2{x}^{4},x=0,\;\text{and}\;x=2$
SOLUTION:
$\frac{64\pi}{3}$ units<sup>3</sup>
:::
For the following exercises, use shells to find the volume generated by rotating the regions between the given curve and $y=0$ around the $x\text{-axis}.$

:::exercise {fs-id1167793566870} type= 
PROBLEM:
$y=\sqrt{1-{x}^{2}},x=0,\;x=1$ and the *x*-axis
:::

:::exercise {fs-id1167793566941} type= 
PROBLEM:
$y={x}^{2},x=0,\;x=2$ and the *x*-axis
SOLUTION:
$\frac{32\pi}{5}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793315990} type= 
PROBLEM:
$y=\frac{{x}^{3}}{2},\;x=0,\;x=2,$ and the *x*-axis
:::

:::exercise {fs-id1167794041952} type= 
PROBLEM:
$y=\frac{2}{{x}^{2}},\;x=1,\;x=2,$ and the *x*-axis
SOLUTION:
$\frac{7\pi}{6}$
:::

:::exercise {fs-id1167794042027} type= 
PROBLEM:
$x=\frac{1}{1+{y}^{2}},y=4$
:::

:::exercise {fs-id1167793511887} type= 
PROBLEM:
$x=\frac{1+{y}^{2}}{y},y=1,\;y=4,$  and the *y*-axis
SOLUTION:
$48\pi$
:::

:::exercise {fs-id1167794095695} type= 
PROBLEM:
$x=\sqrt{4-{y}^{2}}\text{,}x=0\text{,}y=0$
:::

:::exercise {fs-id1167794095754} type= 
PROBLEM:
$x={y}^{3}-2{y}^{2},\;x=0,\;x=9$
SOLUTION:
$\frac{308\pi}{5}$
:::

:::exercise {fs-id1167793545231} type= 
PROBLEM:
$x=\sqrt{y}+1,\;x=1,\;x=3,$  and the *x*-axis
:::

:::exercise {fs-id1167793609310} type= 
PROBLEM:
$x=\sqrt[3]{27y}\text{and}\;x=\frac{3y}{4}$
SOLUTION:
$\frac{512\pi}{7}$
:::
For the following exercises, find the volume generated when the region between the curves is rotated around the given axis.

:::exercise {fs-id1167793472786} type= 
PROBLEM:
$y=3-x,y=0,x=0,\;\text{and}\;x=2$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167793750818} type= 
PROBLEM:
$y={x}^{3},x=0,\;\text{and}\;y=8$ rotated around the $y\text{-axis}.$
SOLUTION:
$\frac{8\pi}{5}$
:::

:::exercise {fs-id1167793750892} type= 
PROBLEM:
$y={x}^{2},y=x,$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167794052647} type= 
PROBLEM:
$y=\sqrt{x},y=0,\;\text{and}\;x=1$ rotated around the line $x=2.$
SOLUTION:
$\frac{28\pi}{15}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793395041} type= 
PROBLEM:
$y=\frac{1}{4-x},x=1,\;x=2\;\text{and}\;y=0$ rotated around the line $x=4.$
:::

:::exercise {fs-id1167793395118} type= 
PROBLEM:
$y=\sqrt{x}\;\text{and}\;y={x}^{2}$ rotated around the $y\text{-axis}.$
SOLUTION:
$\frac{3\pi}{10}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793415143} type= 
PROBLEM:
$y=\sqrt{x}\;\text{and}\;y={x}^{2}$ rotated around the line $x=2.$
:::

:::exercise {fs-id1167793776722} type= 
PROBLEM:
$x={y}^{3},x=\frac{1}{y},x=1,\;\text{and}\;x=2$ rotated around the $x\text{-axis}.$
SOLUTION:
$\pi (\frac{6\cdot {2}^{2/3}}{5}-\frac{11}{10})=\frac{\pi}{10}(12\cdot {2}^{2/3}-11)\approx 2.5286$ units<sup>3</sup>
:::

:::exercise {fs-id1167793776809} type= 
PROBLEM:
$x={y}^{2}\;\text{and}\;y=x$ rotated around the line $y=2.$
:::

:::exercise {fs-id1167793248818} type= 
PROBLEM:
**[T]** Left of $x=\text{sin}(\pi y),$ right of $y=x,$ around the $y\text{-axis}.$
SOLUTION:
$0.9876$ units<sup>3</sup>
:::
For the following exercises, use technology to graph the region. Determine which method you think would be easiest to use to calculate the volume generated when the function is rotated around the specified axis. Then, use your chosen method to find the volume.

:::exercise {fs-id1167793250515} type= 
PROBLEM:
**[T]** $y={x}^{2}$ and $y=4x$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167793250598} type= 
PROBLEM:
**[T]** $y=\text{cos}(\pi x),y=\text{sin}(\pi x),x=\frac{1}{4},\;\text{and}\;x=\frac{5}{4}$ rotated around the $y\text{-axis}.$ This exercise requires advanced technique. You may use technology to perform the integration.
SOLUTION:

> IMAGE {img:fs-id1167793607809} src=../../media/CNX_Calc_Figure_06_03_208.jpg
> alt: This figure is a graph. On the graph are two curves, y=cos(pi times x) and y=sin(pi times x). They are periodic curves resembling waves. The curves intersect in the first quadrant and also the fourth quadrant. The region between the two points of intersection is shaded.

$3\sqrt{2}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793959083} type= 
PROBLEM:
**[T]** $y={x}^{2}-2x,x=2,\;\text{and}\;x=4$ rotated around the $y\text{-axis}.$
:::

:::exercise {fs-id1167794210370} type= 
PROBLEM:
**[T]** $y={x}^{2}-2x,x=2,\;\text{and}\;x=4$ rotated around the $x\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167794210440} src=../../media/CNX_Calc_Figure_06_03_210.jpg
> alt: This figure is a graph in the first quadrant. It is the parabola y=x^2-2x. . Under the curve and above the x-axis there is a shaded region. The region begins at x=2 and is bounded to the right at x=4.

$\frac{496\pi}{15}$ units<sup>3</sup>
:::

:::exercise {fs-id1167794139217} type= 
PROBLEM:
**[T]** $y=3{x}^{3}-2,y=x,\;\text{and}\;x=2$ rotated around the $x\text{-axis}.$
:::

:::exercise {fs-id1167794139320} type= 
PROBLEM:
**[T]** $y=3{x}^{3}-2,y=x,\;\text{and}\;x=2$ rotated around the $y\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167793518919} src=../../media/CNX_Calc_Figure_06_03_212.jpg
> alt: This figure is a graph in the first quadrant. There are two curves on the graph. The first curve is y=3x^2-2 and the second curve is y=x. Between the curves there is a shaded region. The region begins at x=1 and is bounded to the right at x=2.

$\frac{398\pi}{15}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793518951} type= 
PROBLEM:
**[T]** $x=\text{sin}(\pi {y}^{2})$ and $x=\sqrt{2}y$ rotated around the $x\text{-axis}.$
:::

:::exercise {fs-id1167794295715} type= 
PROBLEM:
**[T]** $x={y}^{2},x={y}^{2}-2y+1,\;\text{and}\;x=2$ rotated around the $y\text{-axis}.$
SOLUTION:

> IMAGE {img:fs-id1167793590011} src=../../media/CNX_Calc_Figure_06_03_214.jpg
> alt: This figure is a graph. There are two curves on the graph. The first curve is x=y^2-2y+1 and is a parabola opening to the right. The second curve is x=y^2 and is a parabola opening to the right. Between the curves there is a shaded region. The shaded region is bounded to the right at x=2.

$15.9074$ units<sup>3</sup>
:::
For the following exercises, use the method of shells to approximate the volumes of some common objects, which are pictured in accompanying figures.

:::exercise {fs-id1167793590042} type= class=material-set-2 
PROBLEM:
Use the method of shells to find the volume of a sphere of radius $r.$

> IMAGE {img:fs-id1167793590054} src=../../media/CNX_Calc_Figure_06_03_217.jpg
> alt: This figure has two images. The first is a circle with radius r. The second is a basketball.

:::

:::exercise {fs-id1167793545720} type= class=material-set-2 
PROBLEM:
Use the method of shells to find the volume of a cone with radius $r$ and height $h.$

> IMAGE {img:fs-id1167793545737} src=../../media/CNX_Calc_Figure_06_03_218.jpg
> alt: This figure has two images. The first is an upside-down cone with radius r and height h. The second is an ice cream cone.

SOLUTION:
$\frac{1}{3}\pi {r}^{2}h$ units<sup>3</sup>
:::

:::exercise {fs-id1167793545778} type= class=material-set-2 
PROBLEM:
Use the method of shells to find the volume of an ellipsoid $({x}^{2}\text{/}{a}^{2})+({y}^{2}\text{/}{b}^{2})=1$ rotated around the $x\text{-axis}.$

> IMAGE {img:fs-id1167794091052} src=../../media/CNX_Calc_Figure_06_03_219.jpg
> alt: This figure has two images. The first is an ellipse with a the horizontal distance from the center to the edge and b the vertical distance from the center to the top edge. The second is a watermelon.

:::

:::exercise {fs-id1167794091090} type= class=material-set-2 
PROBLEM:
Use the method of shells to find the volume of a cylinder with radius $r$ and height $h.$

> IMAGE {img:fs-id1167794091107} src=../../media/CNX_Calc_Figure_06_03_220.jpg
> alt: This figure has two images. The first is a cylinder with radius r and height h. The second is a cylindrical candle.

SOLUTION:
$\pi {r}^{2}h$ units<sup>3</sup>
:::

:::exercise {fs-id1167793257582} type= class=material-set-2 
PROBLEM:
Use the method of shells to find the volume of the donut created when the circle ${x}^{2}+{y}^{2}=4$ is rotated around the line $x=4.$

> IMAGE {img:fs-id1167793257621} src=../../media/CNX_Calc_Figure_06_03_221.jpg
> alt: This figure has two images. The first has two ellipses, one inside of the other. The radius of the path between them is 2 units. The second is a doughnut.

:::

:::exercise {fs-id1167793257654} type= class=material-set-2 
PROBLEM:
Consider the region enclosed by the graphs of $y=f(x),y=1+f(x),x=0,y=0,$ and $x=a>0.$ What is the volume of the solid generated when this region is rotated around the $y\text{-axis}?$ Assume that the function is defined over the interval $[0,a].$
SOLUTION:
$\pi {a}^{2}$ units<sup>3</sup>
:::

:::exercise {fs-id1167793385709} type= 
PROBLEM:
Consider the function $y=f(x),$ which decreases from $f(0)=b$ to $f(1)=0.$ Set up the integrals for determining the volume, using both the shell method and the disk method, of the solid generated when this region, with $x=0$ and $y=0,$ is rotated around the $y\text{-axis}.$ Prove that both methods approximate the same volume. Which method is easier to apply? (*Hint:* Since $f(x)$ is one-to-one, there exists an inverse ${f}^{−1}(y).)$
:::

## Glossary
- {def} **method of cylindrical shells**: a method of calculating the volume of a solid of revolution by dividing the solid into nested cylindrical shells; this method is different from the methods of disks or washers in that we integrate with respect to the opposite variable

# Functions of Several Variables

## Learning Objectives {section:learning-objectives}
- Recognize a function of two variables and identify its domain and range.
- Sketch a graph of a function of two variables.
- Sketch several traces or level curves of a function of two variables.
- Recognize a function of three or more variables and identify its level surfaces.

Our first step is to explain what a function of more than one variable is, starting with functions of two independent variables. This step includes identifying the domain and range of such functions and learning how to graph them. We also examine ways to relate the graphs of functions in three dimensions to graphs of more familiar planar functions.

## Functions of Two Variables
The definition of a function of two variables is very similar to the definition for a function of one variable. The main difference is that, instead of mapping values of one variable to values of another variable, we map ordered pairs of variables to another variable.

:::note [definition] Definition
A {term:function of two variables} $z=f(x,y)$ maps each ordered pair $(x,y)$ in a subset $D$ of the real plane ${\mathbb{R}}^{2}$ to a unique real number $z.$ The set $D$ is called the *domain* of the function. The *range* of $f$ is the set of all real numbers $z$ that has at least one ordered pair $(x,y)\in D$ such that $f(x,y)=z$ as shown in the following figure.
:::

> FIGURE {fig:CNX_Calc_Figure_14_01_001} src=../../media/CNX_Calc_Figure_14_01_001.jpg
> alt: A bulbous shape is marked domain and it contains the point (x, y). From this point, there is an arrow marked f that points to a point z on a straight line marked range.
> caption: The domain of a function of two variables consists of ordered pairs $(x,y).$

Determining the domain of a function of two variables involves taking into account any domain restrictions that may exist. Let’s take a look.

:::example {ex:fs-id1167793371525} Domains and Ranges for Functions of Two Variables

:::exercise {fs-id1167794073216} type= 
PROBLEM:
Find the domain and range of each of the following functions:
a. $f(x,y)=3x+5y+2$
b. $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}$
SOLUTION:
a. This is an example of a linear function in two variables. There are no values or combinations of $x$ and $y$ that cause $f(x,y)$ to be undefined, so the domain of $f$ is ${\mathbb{R}}^{2}.$ To determine the range, first pick a value for $z.$ We need to find a solution to the equation $f(x,y)=z,$ or $3x+5y+2=z.$ One such solution can be obtained by first setting $y=0,$ which yields the equation $3x+2=z.$ The solution to this equation is $x=\frac{z-2}{3},$ which gives the ordered pair $(\frac{z-2}{3},0)$ as a solution to the equation $f(x,y)=z$ for any value of $z.$ Therefore, the range of the function is all real numbers, or $\mathbb{R}.$
b. For the function $g(x,y)$ to have a real value, the quantity under the square root must be nonnegative:

$9-{x}^{2}-{y}^{2}\ge 0.$  {eq:fs-id1167793258386}

This inequality can be written in the form

${x}^{2}+{y}^{2}\le 9.$  {eq:fs-id1167794218592}

Therefore, the domain of $g(x,y)$ is $\{(x,y)\in {\mathbb{R}}^{2}|{x}^{2}+{y}^{2}\le 9\}.$ The graph of this set of points can be described as a disk of radius $3$ centered at the origin. The domain includes the boundary circle as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_01_002} src=../../media/CNX_Calc_Figure_14_01_002.jpg
> alt: A circle of radius three with center at the origin. The equation x2 + y2 = 9 is given.
> caption: The domain of the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}$ is a closed disk of radius 3.

To determine the range of $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}$ we start with a point $({x}_{0},{y}_{0})$ on the boundary of the domain, which is defined by the relation ${x}^{2}+{y}^{2}=9.$ It follows that ${x}_{0}^{2}+{y}_{0}^{2}=9$ and

$g({x}_{0},{y}_{0})=\sqrt{9-{x}_{0}^{2}-{y}_{0}^{2}}=\sqrt{9-({x}_{0}^{2}+{y}_{0}^{2})}=\sqrt{9-9}=0.$  {eq:fs-id1167793976388}

If ${x}_{0}^{2}+{y}_{0}^{2}=0$ (in other words, ${x}_{0}={y}_{0}=0),$ then

$g({x}_{0},{y}_{0})=\sqrt{9-{x}_{0}^{2}-{y}_{0}^{2}}=\sqrt{9-({x}_{0}^{2}+{y}_{0}^{2})}=\sqrt{9-0}=3.$  {eq:fs-id1167793300455}

This is the maximum value of the function. Given any value *c* between $0\;\text{and}\;3,$ we can find an entire set of points inside the domain of $g$ such that $g(x,y)=c\text{:}$

$\begin{array}{rll}\sqrt{9-{x}^{2}-{y}^{2}} & = & c \\ 9-{x}^{2}-{y}^{2} & = & {c}^{2} \\ {x}^{2}+{y}^{2} & = & 9-{c}^{2}.\end{array}$  {eq:fs-id1167794030291}

Since $9-{c}^{2}>0,$ this describes a circle of radius $\sqrt{9-{c}^{2}}$ centered at the origin. Any point on this circle satisfies the equation $g(x,y)=c.$ Therefore, the range of this function can be written in interval notation as $[0,3].$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793983759} type= 
PROBLEM:
Find the domain and range of the function $f(x,y)=\sqrt{36-9{x}^{2}-9{y}^{2}}.$
SOLUTION:
The domain is the shaded circle defined by the inequality $9{x}^{2}+9{y}^{2}\le 36,$ which has a circle of radius $2$ as its boundary. The range is $[0,6].$

> IMAGE {img:fs-id1167793444602} src=../../media/CNX_Calc_Figure_14_01_003.jpg
> alt: A circle of radius two with center at the origin. The equation x2 + y2 ≤ 4 is given.

COMMENTARY: Hint
Determine the set of ordered pairs that do not make the radicand negative.
:::
:::

## Graphing Functions of Two Variables
Suppose we wish to graph the function $z=f(x,y).$ This function has two independent variables $(x\;\text{and}\;y)$ and one dependent variable $(z).$ When graphing a function $y=f(x)$ of one variable, we use the Cartesian plane. We are able to graph any ordered pair $(x,y)$ in the plane, and every point in the plane has an ordered pair $(x,y)$ associated with it. With a function of two variables, each ordered pair $(x,y)$ in the domain of the function is mapped to a real number $z.$ Therefore, the graph of the function $f$ consists of ordered triples $(x,y,z).$ The graph of a function $z=(x,y)$ of two variables is called a {term:surface}.
To understand more completely the concept of plotting a set of ordered triples to obtain a surface in three-dimensional space, imagine the $(x,y)$ coordinate system laying flat. Then, every point in the domain of the function $f$ has a unique $z\text{-value}$ associated with it. If $z$ is positive, then the graphed point is located above the $\text{xy}\text{-plane,}$ if $z$ is negative, then the graphed point is located below the $\text{xy}\text{-plane}.$ The set of all the graphed points becomes the two-dimensional surface that is the graph of the function $f.$

:::example {ex:fs-id1167793887390} Graphing Functions of Two Variables

:::exercise {fs-id1167793878353} type= 
PROBLEM:
Create a graph of each of the following functions:
a. $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}$
b. $f(x,y)={x}^{2}+{y}^{2}$
SOLUTION:
a. In [ref:fs-id1167793371525], we determined that the domain of $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}$ is $\{(x,y)\in {\mathbb{R}}^{2}|{x}^{2}+{y}^{2}\le 9\}$ and the range is $\{z\in \mathbb{R}|0\le z\le 3\}.$ When ${x}^{2}+{y}^{2}=9$ we have $g(x,y)=0.$ Therefore any point on the circle of radius $3$ centered at the origin in the $x,y\text{-plane}$ maps to $z=0$ in ${\mathbb{R}}^{3}.$ If ${x}^{2}+{y}^{2}=8,$ then $g(x,y)=1,$ so any point on the circle of radius $2\sqrt{2}$ centered at the origin in the $x,y\text{-plane}$ maps to $z=1$ in ${\mathbb{R}}^{3}.$ As ${x}^{2}+{y}^{2}$ gets closer to zero, the value of *z* approaches 3. When ${x}^{2}+{y}^{2}=0,$ then $g(x,y)=3.$ This is the origin in the $x,y\text{-plane}.$ If ${x}^{2}+{y}^{2}$ is equal to any other value between $0\;\text{and}\;9,$ then $g(x,y)$ equals some other constant between $0\;\text{and}\;3.$ The surface described by this function is a hemisphere centered at the origin with radius $3$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_01_004} src=../../media/CNX_Calc_Figure_14_01_004.jpg
> alt: A hemisphere with center at the origin. The equation z = g(x, y) = the square root of the quantity (9 – x2 – y2) is given.
> caption: Graph of the hemisphere represented by the given function of two variables.

b. This function also contains the expression ${x}^{2}+{y}^{2}.$ Setting this expression equal to various values starting at zero, we obtain circles of increasing radius. The minimum value of $f(x,y)={x}^{2}+{y}^{2}$ is zero (attained when $x=y=0.).$ When $x=0,$ the function becomes $z={y}^{2},$ and when $y=0,$ then the function becomes $z={x}^{2}.$ These are cross-sections of the graph, and are parabolas. Recall from [Introduction to Vectors in Space](module:m53906) that the name of the graph of $f(x,y)={x}^{2}+{y}^{2}$ is a *paraboloid*. The graph of $f$ appears in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_01_005} src=../../media/CNX_Calc_Figure_14_01_005.jpg
> alt: A paraboloid with vertex at the origin. The equation z = f(x, y) = x2 + y2 is given.
> caption: A paraboloid is the graph of the given function of two variables.

:::
:::

:::example {ex:fs-id1167793390029} Nuts and Bolts

:::exercise {fs-id1167793390031} type= 
PROBLEM:
A profit function for a hardware manufacturer is given by

$f(x,y)=16-{(x-3)}^{2}-{(y-2)}^{2},$  {eq:fs-id1167794043351}

where $x$ is the number of nuts sold per month (measured in thousands) and $y$ represents the number of bolts sold per month (measured in thousands). Profit is measured in thousands of dollars. Sketch a graph of this function.
SOLUTION:
This function is a polynomial function in two variables. The domain of $f$ consists of $(x,y)$ coordinate pairs that yield a nonnegative profit:

$\begin{array}{l}16-{(x-3)}^{2}-{(y-2)}^{2}\ge 0 \\ {(x-3)}^{2}+{(y-2)}^{2}\le 16.\end{array}$  {eq:fs-id1167793363804}

This is a disk of radius $4$ centered at $(3,2).$ A further restriction is that both $x\;\text{and}\;y$ must be nonnegative. When $x=3$ and $y=2,$ $f(x,y)=16.$ Note that it is possible for either value to be a noninteger; for example, it is possible to sell $2.5$ thousand nuts in a month. The domain, therefore, contains thousands of points, so we can consider all points within the disk. For any $z<16,$ we can solve the equation $f(x,y)=z\text{:}$

$\begin{array}{rll} \\ 16-{(x-3)}^{2}-{(y-2)}^{2} & = & z \\ {(x-3)}^{2}+{(y-2)}^{2} & = & 16-z.\end{array}$  {eq:fs-id1167793420999}

Since $z<16,$ we know that $16-z>0,$ so the previous equation describes a circle with radius $\sqrt{16-z}$ centered at the point $(3,2).$ Therefore. the range of $f(x,y)$ is $\{z\in \mathbb{R}|z\le 16\}.$ The graph of $f(x,y)$ is also a paraboloid, and this paraboloid points downward as shown.

> FIGURE {fig:CNX_Calc_Figure_14_01_006} src=../../media/CNX_Calc_Figure_14_01_006.jpg
> alt: A paraboloid center seemingly on the positive z axis. The equation z = f(x, y) = 16 – (x – 3)2 – (y – 2)2 is given.
> caption: The graph of the given function of two variables is also a paraboloid.

:::
:::

## Level Curves
If hikers walk along rugged trails, they might use a topographical map that shows how steeply the trails change. A {index:topographical map} contains curved lines called *contour lines*. Each contour line corresponds to the points on the map that have equal elevation ([ref:CNX_Calc_Figure_14_01_007]). A level curve of a function of two variables $f(x,y)$ is completely analogous to a contour line on a topographical map.

> FIGURE {fig:CNX_Calc_Figure_14_01_007} src=../../media/CNX_Calc_Figure_14_01_007.jpg
> alt: This figure consists of two figures marked a and b. Figure a shows a topographic map of Devil’s Tower, which has its lines very close together to indicate the very steep terrain. Figure b shows a picture of Devil’s Tower, which has very steep sides.
> caption: (a) A topographical map of Devil’s Tower, Wyoming. Lines that are close together indicate very steep terrain. (b) A perspective photo of Devil’s Tower shows just how steep its sides are. Notice the top of the tower has the same shape as the center of the topographical map.

:::note [definition] Definition
Given a function $f(x,y)$ and a number $c$ in the range of $f,\;\text{a}$ {term:level curve of a function of two variables} for the value $c$ is defined to be the set of points satisfying the equation $f(x,y)=c.$
:::
Returning to the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}},$ we can determine the level curves of this function. The range of $g$ is the closed interval $[0,3].$ First, we choose any number in this closed interval—say, $c=2.$ The level curve corresponding to $c=2$ is described by the equation

$\sqrt{9-{x}^{2}-{y}^{2}}=2.$  {eq:fs-id1167793377557}

To simplify, square both sides of this equation:

$9-{x}^{2}-{y}^{2}=4.$  {eq:fs-id1167794126146}

Now, multiply both sides of the equation by $−1$ and add $9$ to each side:

${x}^{2}+{y}^{2}=5.$  {eq:fs-id1167794212849}

This equation describes a circle centered at the origin with radius $\sqrt{5}.$ Using values of $c$ between $0\;\text{and}\;3$ yields other circles also centered at the origin. If $c=3,$ then the circle has radius $0,$ so it consists solely of the origin. [ref:CNX_Calc_Figure_14_01_008] is a graph of the level curves of this function corresponding to $c=0,1,2,\;\text{and}\;3.$ Note that in the previous derivation it may be possible that we introduced extra solutions by squaring both sides. This is not the case here because the range of the square root function is nonnegative.

> FIGURE {fig:CNX_Calc_Figure_14_01_008} src=../../media/CNX_Calc_Figure_14_01_008.jpg
> alt: Three concentric circles with center at the origin. The largest circle marked c = 0 has a radius of 3. The medium circle marked c = 1 has a radius slightly less than 3. The smallest circle marked c = 2 has a radius slightly more than 2.
> caption: Level curves of the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}},$ using $c=0,1,2,$ and $3$ $(c=3$ corresponds to the origin).

A graph of the various level curves of a function is called a {term:contour map}.

:::example {ex:fs-id1167793961239} Making a Contour Map

:::exercise {fs-id1167793961241} type= 
PROBLEM:
Given the function $f(x,y)=\sqrt{8+8x-4y-4{x}^{2}-{y}^{2}},$ find the level curve corresponding to $c=0.$ Then create a contour map for this function. What are the domain and range of $f?$
SOLUTION:
To find the level curve for $c=0,$ we set $f(x,y)=0$ and solve. This gives

$0=\sqrt{8+8x-4y-4{x}^{2}-{y}^{2}}.$  {eq:fs-id1167793612585}

We then square both sides and multiply both sides of the equation by $−1\text{:}$

$4{x}^{2}+{y}^{2}-8x+4y-8=0.$  {eq:fs-id1167793373719}

Now, we rearrange the terms, putting the $x$ terms together and the $y$ terms together, and add $8$ to each side:

$4{x}^{2}-8x+{y}^{2}+4y=8.$  {eq:fs-id1167794099173}

Next, we group the pairs of terms containing the same variable in parentheses, and factor $4$ from the first pair:

$4({x}^{2}-2x)+({y}^{2}+4y)=8.$  {eq:fs-id1167793977279}

Then we complete the square in each pair of parentheses and add the correct value to the right-hand side:

$4({x}^{2}-2x+1)+({y}^{2}+4y+4)=8+4(1)+4.$  {eq:fs-id1167793581509}

Next, we factor the left-hand side and simplify the right-hand side:

$4{(x-1)}^{2}+{(y+2)}^{2}=16.$  {eq:fs-id1167794070094}

Last, we divide both sides by $16\text{:}$

$$ \frac{{(x-1)}^{2}}{4}+\frac{{(y+2)}^{2}}{16}=1. $$  {eq:fs-id1167793547522}

This equation describes an ellipse centered at $(1,−2).$ The graph of this ellipse appears in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_01_009} src=../../media/CNX_Calc_Figure_14_01_009.jpg
> alt: An ellipse with center (1, –2), major axis vertical and of length 8, and minor axis horizontal of length 4.
> caption: Level curve of the function $f(x,y)=\sqrt{8+8x-4y-4{x}^{2}-{y}^{2}}$ corresponding to $c=0.$

We can repeat the same derivation for values of $c$ less than $4.$ Then, [ref:fs-id1167793547522] becomes

$\frac{4{(x-1)}^{2}}{16-{c}^{2}}+\frac{{(y+2)}^{2}}{16-{c}^{2}}=1$  {eq:fs-id1167793418306}

for an arbitrary value of $c.$ [ref:CNX_Calc_Figure_14_01_010] shows a contour map for $f(x,y)$ using the values $c=0,1,2,\;\text{and}\;3.$ When $c=4,$ the level curve is the point $(1,−2).$

> FIGURE {fig:CNX_Calc_Figure_14_01_010} src=../../media/CNX_Calc_Figure_14_01_010.jpg
> alt: An series of four concentric ellipses with center (1, –2). The largest one is marked c = 0 and has major axis vertical and of length 8 and minor axis horizontal of length 4. The next smallest one is marked c = 1 and is only slightly smaller. The next two are marked c = 2 and c = 3 and are increasingly smaller. Finally, there is a point marked c = 4 at the center (1, –2).
> caption: Contour map for the function $f(x,y)=\sqrt{8+8x-4y-4{x}^{2}-{y}^{2}}$ using the values $c=0,1,2,3,\text{and}\;4.$

$\begin{array}{l}\text{Domain:}(x,y)\text{inside the ellipse}\frac{{(x-1)}^{2}}{4}+\frac{{(y+2)}^{2}}{16}=1 \\ \text{Range:}[0,4)\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793964400} type= 
PROBLEM:
Find and graph the level curve of the function $g(x,y)={x}^{2}+{y}^{2}-6x+2y$ corresponding to $c=15.$
SOLUTION:
The equation of the level curve can be written as ${(x-3)}^{2}+{(y+1)}^{2}=25,$ which is a circle with radius $5$ centered at $(3,−1).$

> IMAGE {img:fs-id1167793632758} src=../../media/CNX_Calc_Figure_14_01_011.jpg
> alt: An circle of radius 5 with center (3, –1).

COMMENTARY: Hint
First, set $g(x,y)=15$ and then complete the square.
:::
:::
Another useful tool for understanding the {term:graph of a function of two variables} is called a vertical trace. Level curves are always graphed in the $xy\text{-plane,}$ but as their name implies, vertical traces are graphed in the $xz$- or $yz\text{-planes.}$

:::note [definition] Definition
Consider a function $z=f(x,y)$ with domain $D\subseteq {\mathbb{R}}^{2}.$ A {term:vertical trace} of the function can be either the set of points that solves the equation $f(a,y)=z$ for a given constant $x=a$ or $f(x,b)=z$ for a given constant $y=b.$
:::

:::example {ex:fs-id1167793291691} Finding Vertical Traces

:::exercise {fs-id1167793291694} type= 
PROBLEM:
Find vertical traces for the function $f(x,y)=\text{sin}\;x\;\text{cos}\;y$ corresponding to $x=-\frac{\pi}{4},0,\;\text{and}\;\frac{\pi}{4},$ and $y=-\frac{\pi}{4},0,\;\text{and}\;\frac{\pi}{4}.$
SOLUTION:
First set $x=-\frac{\pi}{4}$ in the equation $z=\text{sin}\;x\;\text{cos}\;y\text{:}$

$z=\text{sin}(-\frac{\pi}{4})\text{cos}\;y=-\frac{\sqrt{2}\;\text{cos}\;y}{2}\approx −0.7071\;\text{cos}\;y.$  {eq:fs-id1167793938287}

This describes a cosine graph in the plane $x=-\frac{\pi}{4}.$ The other values of $z$ appear in the following table.

> TABLE {tab:fs-id1167794284852} cols=2
> title: Vertical Traces Parallel to the $xz\text{-Plane}$ for the Function $f(x,y)=\text{sin}\;x\;\text{cos}\;y$
> summary: This table consists of two columns and four rows. The first row is a header row and reads from left to right c and vertical trace for x = c. The first column below the header row reads –π/4, 0, and π/4. The second column reads z = –(square root of 2) cos y all divided by 2, z = 0, and z = (square root of 2) cos y all divided by 2.

| $c$ | *Vertical Trace for* $x=c$ |
| --- | --- |
| $-\frac{\pi}{4}$ | $z=-\frac{\sqrt{2}\;\text{cos}\;y}{2}$ |
| $0$ | $z=0$ |
| $\frac{\pi}{4}$ | $z=\frac{\sqrt{2}\;\text{cos}\;y}{2}$ |

In a similar fashion, we can substitute the $y\text{-values}$ in the equation $f(x,y)$ to obtain the traces in the $yz\text{-plane,}$ as listed in the following table.

> TABLE {tab:fs-id1167794213478} cols=2
> title: Vertical Traces Parallel to the $yz\text{-Plane}$ for the Function $f(x,y)=\text{sin}\;x\;\text{cos}\;y$
> summary: This table consists of two columns and four rows. The first row is a header row and reads from left to right d and vertical trace for y = d. The first column below the header row reads –π/4, 0, and π/4. The second column reads z = –(square root of 2) sin x all divided by 2, z = sin x, and z = (square root of 2) sin x all divided by 2.

| $d$ | *Vertical Trace for* $y=d$ |
| --- | --- |
| $-\frac{\pi}{4}$ | $z=\frac{\sqrt{2}\;\text{sin}\;x}{2}$ |
| $0$ | $z=\text{sin}\;x$ |
| $\frac{\pi}{4}$ | $z=\frac{\sqrt{2}\;\text{sin}\;x}{2}$ |

The three traces in the $xz\text{-plane}$ are cosine functions; the three traces in the $yz\text{-plane}$ are sine functions. These curves appear in the intersections of the surface with the planes $x=-\frac{\pi}{4},x=0,x=\frac{\pi}{4}$ and $y=-\frac{\pi}{4},y=0,y=\frac{\pi}{4}$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_01_012} src=../../media/CNX_Calc_Figure_14_01_014.jpg
> alt: This figure consists of two figures marked a and b. In figure a, a function is given in three dimensions and it is intersected by three parallel x-z planes at y = ±π/4 and 0. In figure b, a function is given in three dimensions and it is intersected by three parallel y-z planes at x = ±π/4 and 0.
> caption: Vertical traces of the function $f(x,y)$ are cosine curves in the $xz\text{-planes}$ (a) and sine curves in the $yz\text{-planes}$ (b).

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793638040} type= 
PROBLEM:
Determine the equation of the vertical trace of the function $g(x,y)=\text{−}{x}^{2}-{y}^{2}+2x+4y-1$ corresponding to $y=3,$ and describe its graph.
SOLUTION:
$z=3-{(x-1)}^{2}.$ This function describes a parabola opening downward in the plane $y=3.$
COMMENTARY: Hint
Set $y=3$ in the equation $z=\text{−}{x}^{2}-{y}^{2}+2x+4y-1$ and complete the square.
:::
:::
Functions of two variables can produce some striking-looking surfaces. The following figure shows two examples.

> FIGURE {fig:CNX_Calc_Figure_14_01_013} src=../../media/CNX_Calc_Figure_14_01_015.jpg
> alt: This figure consists of two figures marked a and b. In figure a, the function f(x, y) = x2 sin y is given; it has some sinusoidal properties by increases as the square along the maximums of the sine function. In figure b, the function f(x, y) = sin(ex) cos(ln y) is given in three dimensions; it decreases gently from the corner nearest (–2, 20) but then seems to bunch up into a series of folds that are parallel to the x and y axes.
> caption: Examples of surfaces representing functions of two variables: (a) a combination of a power function and a sine function and (b) a combination of trigonometric, exponential, and logarithmic functions.

## Functions of More Than Two Variables
So far, we have examined only functions of two variables. However, it is useful to take a brief look at functions of more than two variables. Two such examples are

$f(x,y,z)={x}^{2}-2xy+{y}^{2}+3yz-{z}^{2}+4x-2y+3x-6\;\text{(a polynomial in three variables)}$  {eq:fs-id1167793516790}

and

$g(x,y,t)=({x}^{2}-4xy+{y}^{2})\text{sin}\;t-(3x+5y)\text{cos}\;t.$  {eq:fs-id1167793245201}

In the first function, $(x,y,z)$ represents a point in space, and the function $f$ maps each point in space to a fourth quantity, such as temperature or wind speed. In the second function, $(x,y)$ can represent a point in the plane, and $t$ can represent time. The function might map a point in the plane to a third quantity (for example, pressure) at a given time $t.$ The method for finding the domain of a function of more than two variables is analogous to the method for functions of one or two variables.

:::example {ex:fs-id1167793385918} Domains for Functions of Three Variables

:::exercise {fs-id1167793385920} type= 
PROBLEM:
Find the domain of each of the following functions:
a. $f(x,y,z)=\frac{3x-4y+2z}{\sqrt{9-{x}^{2}-{y}^{2}-{z}^{2}}}$
b. $g(x,y,t)=\frac{\sqrt{2t-4}}{{x}^{2}-{y}^{2}}$
SOLUTION:
a. For the function $f(x,y,z)=\frac{3x-4y+2z}{\sqrt{9-{x}^{2}-{y}^{2}-{z}^{2}}}$ to be defined (and be a real value), two conditions must hold:

1. The denominator cannot be zero.
2. The radicand cannot be negative.

Combining these conditions leads to the inequality

$9-{x}^{2}-{y}^{2}-{z}^{2}>0.$  {eq:fs-id1167793633628}

Moving the variables to the other side and reversing the inequality gives the domain as

$\text{domain}(f)=\{(x,y,z)\in {\mathbb{R}}^{3}|{x}^{2}+{y}^{2}+{z}^{2}<9\},$  {eq:fs-id1167793637930}

which describes a ball of radius $3$ centered at the origin. (*Note*: The surface of the ball is not included in this domain.)
b. For the function $g(x,y,t)=\frac{\sqrt{2t-4}}{{x}^{2}-{y}^{2}}$ to be defined (and be a real value), two conditions must hold:

1. The radicand cannot be negative.
2. The denominator cannot be zero.

Since the radicand cannot be negative, this implies $2t-4\ge 0,$ and therefore that $t\ge 2.$ Since the denominator cannot be zero, ${x}^{2}-{y}^{2}≠0,$ or ${x}^{2}≠{y}^{2},$ Which can be rewritten as $y≠\text{±}x$, which are the equations of two lines passing through the origin. Therefore, the domain of $g$ is

$\text{domain}(g)=\{(x,y,t)|y≠\text{±}x,t\ge 2\}.$  {eq:fs-id1167794095064}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793498998} type= 
PROBLEM:
Find the domain of the function $h(x,y,t)=(3t-6)\sqrt{y-4{x}^{2}+4}.$
SOLUTION:
$\text{domain}(h)=\{(x,y,t)\in {\mathbb{R}}^{3}|y\ge 4{x}^{2}-4\}$
COMMENTARY: Hint
Check for values that make radicands negative or denominators equal to zero.
:::
:::
Functions of two variables have level curves, which are shown as curves in the $xy\text{-plane.}$ However, when the function has three variables, the curves become surfaces, so we can define level surfaces for functions of three variables.

:::note [definition] Definition
Given a function $f(x,y,z)$ and a number $c$ in the range of $f,$ a {term:level surface of a function of three variables} is defined to be the set of points satisfying the equation $f(x,y,z)=c.$
:::

:::example {ex:fs-id1167793478778} Finding a Level Surface

:::exercise {fs-id1167793478780} type= 
PROBLEM:
Find the level surface for the function $f(x,y,z)=4{x}^{2}+9{y}^{2}-{z}^{2}$ corresponding to $c=1.$
SOLUTION:
The level surface is defined by the equation $4{x}^{2}+9{y}^{2}-{z}^{2}=1.$ This equation describes a hyperboloid of one sheet as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_01_014} src=../../media/CNX_Calc_Figure_14_01_013.jpg
> alt: This figure consists of four figures. The first is marked c = 0 and consists of a double cone (that is, two nappes) with their apex at the origin. The second is marked c = 1 and it looks remarkably similar to the first except that there is no apex at which the cones meet: instead, the two nappes are connected. Similarly, the next figure marked c = 2 has the two nappes connect, but this time their connection is larger (that is, the radius of their connection is greater). The final figure marked c = 3 also has the two nappes connect in an even larger fashion.
> caption: A hyperboloid of one sheet with some of its level surfaces.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793960628} type= 
PROBLEM:
Find an equation of the level surface of the function

$g(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}-2x+4y-6z$  {eq:fs-id1167793509922}

corresponding to $c=2,$ and describe the surface, if possible.
SOLUTION:
${(x-1)}^{2}+{(y+2)}^{2}+{(z-3)}^{2}=16$ describes a sphere of radius $4$ centered at the point $(1,−2,3).$
COMMENTARY: Hint
Set $g(x,y,z)=c$ and complete the square.
:::
:::

## Key Concepts {section:key-concepts}
- The graph of a function of two variables is a surface in ${\mathbb{R}}^{3}$ and can be studied using level curves and vertical traces.
- A set of level curves is called a contour map.

## Key Equations {section:key-equations}

> TABLE {tab:eip-544} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Vertical trace** | $f(a,y)=z$ for $x=a$ or $f(x,b)=z$ for $y=b$ |
| **Level surface of a function of three variables** | $f(x,y,z)=c$ |

##  {section:section-exercises}
For the following exercises, evaluate each function at the indicated values.

:::exercise {fs-id1167794067623} type= 
PROBLEM:
$W(x,y)=4{x}^{2}+{y}^{2}.$ Find $W(2,−1),$ $W(−3,6).$
SOLUTION:
$17,72$
:::

:::exercise {fs-id1167793279382} type= 
PROBLEM:
$W(x,y)=4{x}^{2}+{y}^{2}.$ Find $W(2+h,3+h).$
:::

:::exercise {fs-id1167793452862} type= 
PROBLEM:
The volume of a right circular cylinder is calculated by a function of two variables, $V(x,y)=\pi {x}^{2}y,$ where $x$ is the radius of the right circular cylinder and $y$ represents the height of the cylinder. Evaluate $V(2,5)$ and explain what this means.
SOLUTION:
$20\pi .$ This is the volume when the radius is $2$ and the height is $5.$
:::

:::exercise {fs-id1167793928768} type= 
PROBLEM:
An oxygen tank is constructed of a right cylinder of height $y$ and radius $x$ with two hemispheres of radius $x$ mounted on the top and bottom of the cylinder. Express the volume of the tank as a function of two variables, $x\;\text{and}\;y,$ find $V(10,2),$ and explain what this means.
:::
For the following exercises, find the domain of the function.

:::exercise {fs-id1167793514515} type= 
PROBLEM:
$V(x,y)=4{x}^{2}+{y}^{2}$
SOLUTION:
All points in the $xy\text{-plane}$
:::

:::exercise {fs-id1167794139840} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+{y}^{2}-4}$
:::

:::exercise {fs-id1167793420489} type= 
PROBLEM:
$f(x,y)=4\;\text{ln}({y}^{2}-x)$
SOLUTION:
$x<{y}^{2}$
:::

:::exercise {fs-id1167794296633} type= 
PROBLEM:
$g(x,y)=\sqrt{16-4{x}^{2}-{y}^{2}}$
:::

:::exercise {fs-id1167793369344} type= 
PROBLEM:
$z(x,y)={y}^{2}-{x}^{2}$
SOLUTION:
All real ordered pairs in the $xy\text{-plane}$ of the form $(a,b)$
:::

:::exercise {fs-id1167793510320} type= 
PROBLEM:
$f(x,y)=\frac{y+2}{{x}^{2}}$
:::
Find the range of the functions.

:::exercise {fs-id1167793940810} type= 
PROBLEM:
$g(x,y)=\sqrt{16-4{x}^{2}-{y}^{2}}$
SOLUTION:
$\{z|0\le z\le 4\}$
:::

:::exercise {fs-id1167793548553} type= 
PROBLEM:
$V(x,y)=4{x}^{2}+{y}^{2}$
:::

:::exercise {fs-id1167793514716} type= 
PROBLEM:
$z={y}^{2}-{x}^{2}$
SOLUTION:
The set $\mathbb{R}$
:::
For the following exercises, find the level curves of each function at the indicated value of $c$ to visualize the given function.

:::exercise {fs-id1167793640586} type= 
PROBLEM:
$z(x,y)={y}^{2}-{x}^{2},$ $c=1$
:::

:::exercise {fs-id1167793830464} type= 
PROBLEM:
$z(x,y)={y}^{2}-{x}^{2},$ $c=4$
SOLUTION:
${y}^{2}-{x}^{2}=4,$ a hyperbola
:::

:::exercise {fs-id1167794336223} type= 
PROBLEM:
$g(x,y)={x}^{2}+{y}^{2};c=4,c=9$
:::

:::exercise {fs-id1167794097359} type= 
PROBLEM:
$g(x,y)=4-x-y;c=0,4$
SOLUTION:
$4=x+y,$ a line; $x+y=0,$ line through the origin
:::

:::exercise {fs-id1167793275892} type= 
PROBLEM:
$f(x,y)=xy;c=1;c=−1$
:::

:::exercise {fs-id1167793637956} type= 
PROBLEM:
$h(x,y)=2x-y;c=0,−2,2$
SOLUTION:
$\begin{array}{ll}2x-y=0, & 2x-y=−2\end{array},2x-y=2;$ three lines
:::

:::exercise {fs-id1167793931653} type= 
PROBLEM:
$f(x,y)={x}^{2}-y;c=1,2$
:::

:::exercise {fs-id1167794176162} type= 
PROBLEM:
$g(x,y)=\frac{x}{x+y};c=−1,0,2$
SOLUTION:
$\frac{x}{x+y}=−1,\frac{x}{x+y}=0,\frac{x}{x+y}=2$
:::

:::exercise {fs-id1167793932199} type= 
PROBLEM:
$g(x,y)={x}^{3}-y;c=−1,0,2$
:::

:::exercise {fs-id1167793299682} type= 
PROBLEM:
$g(x,y)={e}_{}^{xy};c=\frac{1}{2},3$
SOLUTION:
$\begin{array}{ll}{e}^{xy}=\frac{1}{2}, & {e}^{xy}=3\end{array}$
:::

:::exercise {fs-id1167793473739} type= 
PROBLEM:
$f(x,y)={x}^{2};c=4,9$
:::

:::exercise {fs-id1167793419036} type= 
PROBLEM:
$f(x,y)=xy-x;c=−2,0,2$
SOLUTION:
$\begin{array}{ll}xy-x=−2, & xy-x=0,\end{array}xy-x=2$
:::

:::exercise {fs-id1167794212883} type= 
PROBLEM:
$h(x,y)=\text{ln}({x}^{2}+{y}^{2});c=−1,0,1$
:::

:::exercise {fs-id1167793571189} type= 
PROBLEM:
$g(x,y)=\text{ln}(\frac{y}{{x}^{2}});c=−2,0,2$
SOLUTION:
$\begin{array}{ll}{e}^{−2}{x}^{2}=y, & y={x}^{2},y={e}^{2}{x}^{2}\end{array}$
:::

:::exercise {fs-id1167793514689} type= 
PROBLEM:
$z=f(x,y)=\sqrt{{x}^{2}+{y}^{2}},$ $c=3$
:::

:::exercise {fs-id1167793418297} type= 
PROBLEM:
$f(x,y)=\frac{y+2}{{x}^{2}},$ $c=$ any constant
SOLUTION:
The level curves are parabolas of the form $y=c{x}^{2}-2.$
:::
For the following exercises, find the vertical traces of the functions at the indicated values of $x$ and *y*, and plot the traces.

:::exercise {fs-id1167793547478} type= 
PROBLEM:
$z=4-x-y;x=2$
:::

:::exercise {fs-id1167793617968} type= 
PROBLEM:
$f(x,y)=3x+{y}^{3},x=1$
SOLUTION:
$z=3+{y}^{3},$ a curve in the $zy\text{-plane}$ with rulings parallel to the $x\text{-axis}$

> IMAGE {img:fs-id1167793589375} src=../../media/CNX_Calc_Figure_14_01_202.jpg
> alt: A planar version of the function y3 + 3 with results in the z axis and nothing mattering from the x axis.

:::

:::exercise {fs-id1167793589386} type= 
PROBLEM:
$z=\text{cos}\sqrt{{x}^{2}+{y}^{2}}$ $x=1$
:::
Find the domain of the following functions.

:::exercise {fs-id1167793631490} type= 
PROBLEM:
$z=\sqrt{100-4{x}^{2}-25{y}^{2}}$
SOLUTION:
$\frac{{x}^{2}}{25}+\frac{{y}^{2}}{4}\le 1$
:::

:::exercise {fs-id1167794155238} type= 
PROBLEM:
$z=\text{ln}(x-{y}^{2})$
:::

:::exercise {fs-id1167793219328} type= 
PROBLEM:
$f(x,y,z)=\frac{1}{\sqrt{36-4{x}^{2}-9{y}^{2}-{z}^{2}}}$
SOLUTION:
$\frac{{x}^{2}}{9}+\frac{{y}^{2}}{4}+\frac{{z}^{2}}{36}<1$
:::

:::exercise {fs-id1167793560885} type= 
PROBLEM:
$f(x,y,z)=\sqrt{49-{x}^{2}-{y}^{2}-{z}^{2}}$
:::

:::exercise {fs-id1167793498236} type= 
PROBLEM:
$f(x,y,z)=\sqrt[3]{16-{x}^{2}-{y}^{2}-{z}^{2}}$
SOLUTION:
All points in $xyz\text{-space}$
:::

:::exercise {fs-id1167794212828} type= 
PROBLEM:
$f(x,y)=\text{cos}\sqrt{{x}^{2}+{y}^{2}}$
:::
For the following exercises, plot a graph of the function.

:::exercise {fs-id1167793886682} type= 
PROBLEM:
$z=f(x,y)=\sqrt{{x}^{2}+{y}^{2}}$
SOLUTION:

> IMAGE {img:fs-id1167793957313} src=../../media/CNX_Calc_Figure_14_01_204.jpg
> alt: An upward facing, gently increasing paraboloid.

:::

:::exercise {fs-id1167793957323} type= 
PROBLEM:
$z={x}^{2}+{y}^{2}$
:::

:::exercise {fs-id1167793432478} type= 
PROBLEM:
Use technology to graph $z={x}^{2}y.$
SOLUTION:

> IMAGE {img:fs-id1167793393726} src=../../media/CNX_Calc_Figure_14_01_206.jpg
> alt: A twisted plane with corners at (1, –1, –1), (–1, –1, –1), (–1, 1, 0.5), and (1, 1, 0.5).

:::
Sketch the following by finding the level curves. Verify the graph using technology.

:::exercise {fs-id1167793925824} type= 
PROBLEM:
$f(x,y)=\sqrt{4-{x}^{2}-{y}^{2}}$
:::

:::exercise {fs-id1167793957972} type= 
PROBLEM:
$f(x,y)=2-\sqrt{{x}^{2}+{y}^{2}}$
SOLUTION:

> IMAGE {img:fs-id1167793468455} src=../../media/CNX_Calc_Figure_14_01_208.jpg
> alt: A downward facing, gently decreasing paraboloid.

:::

:::exercise {fs-id1167793450506} type= 
PROBLEM:
$z=1+{e}^{\text{−}{x}^{2}-{y}^{2}}$
:::

:::exercise {fs-id1167793556981} type= 
PROBLEM:
$z=\text{cos}\sqrt{{x}^{2}+{y}^{2}}$
SOLUTION:

> IMAGE {img:fs-id1167793603807} src=../../media/CNX_Calc_Figure_14_01_210.jpg
> alt: A hemisphere in the center with edges then swooping up at the four corners.

:::

:::exercise {fs-id1167793603818} type= 
PROBLEM:
$z={y}^{2}-{x}^{2}$
:::

:::exercise {fs-id1167793589669} type= 
PROBLEM:
Describe the contour lines for several values of $c$ for $z={x}^{2}+{y}^{2}-2x-2y.$
SOLUTION:
The contour lines are circles.
:::
Find the level surface for the functions of three variables and describe it.

:::exercise {fs-id1167793618957} type= 
PROBLEM:
$w(x,y,z)=x-2y+z,c=4$
:::

:::exercise {fs-id1167793411172} type= 
PROBLEM:
$w(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},c=9$
SOLUTION:
${x}^{2}+{y}^{2}+{z}^{2}=9,$ a sphere of radius $3$
:::

:::exercise {fs-id1167793640523} type= 
PROBLEM:
$w(x,y,z)={x}^{2}+{y}^{2}-{z}^{2},c=−4$
:::

:::exercise {fs-id1167793641999} type= 
PROBLEM:
$w(x,y,z)={x}^{2}+{y}^{2}-{z}^{2},c=4$
SOLUTION:
${x}^{2}+{y}^{2}-{z}^{2}=4,$ a hyperboloid of one sheet
:::

:::exercise {fs-id1167793479850} type= 
PROBLEM:
$w(x,y,z)=9{x}^{2}-4{y}^{2}+36{z}^{2},c=0$
:::
For the following exercises, find an equation of the level curve of $f$ that contains the point $P.$

:::exercise {fs-id1167793294163} type= 
PROBLEM:
$f(x,y)=1-4{x}^{2}-{y}^{2},P(0,1)$
SOLUTION:
$4{x}^{2}+{y}^{2}=1,$
:::

:::exercise {fs-id1167793443466} type= 
PROBLEM:
$g(x,y)={y}^{2}\text{arctan}\;x,P(1,2)$
:::

:::exercise {fs-id1167793627414} type= 
PROBLEM:
$g(x,y)={e}^{xy}({x}^{2}+{y}^{2}),P(1,0)$
SOLUTION:
$1={e}^{xy}({x}^{2}+{y}^{2})$
:::

:::exercise {fs-id1167794172790} type= 
PROBLEM:
The strength $E$ of an electric field at point $(x,y,z)$ resulting from an infinitely long charged wire lying along the $z\text{-axis}$ is given by $E(x,y,z)=k\text{/}\sqrt{{x}^{2}+{y}^{2}},$ where $k$ is a positive constant. For simplicity, let $k=1$ and find the equations of the level surfaces for $E=10\;\text{and}\;E=100.$
:::

:::exercise {fs-id1167794291672} type= 
PROBLEM:
A thin plate made of iron is located in the $xy\text{-plane.}$ The temperature $T$ in degrees Celsius at a point $P(x,y)$ is inversely proportional to the square of its distance from the origin. Express $T$ as a function of $x\;\text{and}\;y.$
SOLUTION:
$T(x,y)=\frac{k}{{x}^{2}+{y}^{2}}$
:::

:::exercise {fs-id1167794177169} type= 
PROBLEM:
Refer to the preceding problem. Using the temperature function found there, determine the proportionality constant if the temperature at point $P(1,2)\;is\;50\text{°}\text{C}.$ Use this constant to determine the temperature at point $Q(3,4).$
:::

:::exercise {fs-id1167793638113} type= 
PROBLEM:
Refer to the preceding problem. Find the level curves for $T=40\text{°}\text{C and}\;T=100\text{°}\text{C},$ and describe what the level curves represent.
SOLUTION:
${x}^{2}+{y}^{2}=\frac{k}{40},$ ${x}^{2}+{y}^{2}=\frac{k}{100}.$ The level curves represent circles of radii $\sqrt{10k}\text{/}20$ and $\sqrt{k}\text{/}10$
:::

## Glossary
- {def} **contour map**: a plot of the various level curves of a given function $f(x,y)$
- {def} **function of two variables**: a function $z=f(x,y)$ that maps each ordered pair $(x,y)$ in a subset $D$ of ${\mathbb{R}}^{2}$ to a unique real number $z$
- {def} **graph of a function of two variables**: a set of ordered triples $(x,y,z)$ that satisfies the equation $z=f(x,y)$ plotted in three-dimensional Cartesian space
- {def} **level curve of a function of two variables**: the set of points satisfying the equation $f(x,y)=c$ for some real number $c$ in the range of $f$
- {def} **level surface of a function of three variables**: the set of points satisfying the equation $f(x,y,z)=c$ for some real number $c$ in the range of $f$
- {def} **surface**: the graph of a function of two variables, $z=f(x,y)$
- {def} **vertical trace**: the set of ordered triples $(c,y,z)$ that solves the equation $f(c,y)=z$ for a given constant $x=c$ or the set of ordered triples $(x,d,z)$ that solves the equation $f(x,d)=z$ for a given constant $y=d$

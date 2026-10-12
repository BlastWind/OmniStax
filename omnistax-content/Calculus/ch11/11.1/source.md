# Parametric Equations

## Learning Objectives {section:learning-objectives}
- Plot a curve described by parametric equations.
- Convert the parametric equations of a curve into the form $y=f(x).$
- Recognize the parametric equations of basic curves, such as a line and a circle.
- Recognize the parametric equations of a cycloid.

In this section we examine parametric equations and their graphs. In the two-dimensional coordinate system, parametric equations are useful for describing curves that are not necessarily functions. The parameter is an independent variable that both *x* and *y* depend on, and as the parameter increases, the values of *x* and *y* trace out a path along a plane curve. For example, if the parameter is *t* (a common choice), then *t* might represent time. Then *x* and *y* are defined as functions of time, and $(x(t),y(t))$ can describe the position in the plane of a given object as it moves along a curved path.

## Parametric Equations and Their Graphs
Consider the orbit of Earth around the Sun. Our year lasts approximately 365.25 days, but for this discussion we will use 365 days. On January 1 of each year, the physical location of Earth with respect to the Sun is nearly the same, except for leap years, when the lag introduced by the extra $\frac{1}{4}$ day of orbiting time is built into the calendar. We call January 1 “day 1” of the year. Then, for example, day 31 is January 31, day 59 is February 28, and so on.
The number of the day in a year can be considered a variable that determines Earth’s position in its orbit. As Earth revolves around the Sun, its physical location changes relative to the Sun. After one full year, we are back where we started, and a new year begins. According to Kepler’s laws of planetary motion, the shape of the orbit is elliptical, with the Sun at one focus of the ellipse. We study this idea in more detail in [Conic Sections](module:m53846).

> FIGURE {fig:CNX_Calc_Figure_11_01_001} src=../../media/CNX_Calc_Figure_11_01_001.jpg
> alt: An ellipse with January 1 (t = 1) at the top, April 2 (t = 92) on the left, July 1 (t = 182) on the bottom, and October 1 (t = 274) on the right. The focal points of the ellipse have F2 on the left and the Sun on the right.
> caption: Earth’s orbit around the Sun in one year.

[ref:CNX_Calc_Figure_11_01_001] depicts {index:Earth’s orbit} around the Sun during one year. The point labeled ${F}_{2}$ is one of the foci of the ellipse; the other focus is occupied by the Sun. If we superimpose coordinate axes over this graph, then we can assign ordered pairs to each point on the ellipse ([ref:CNX_Calc_Figure_11_01_002]). Then each *x* value on the graph is a value of position as a function of time, and each *y* value is also a value of position as a function of time. Therefore, each point on the graph corresponds to a value of Earth’s position as a function of time.

> FIGURE {fig:CNX_Calc_Figure_11_01_002} src=../../media/CNX_Calc_Figure_11_01_002.jpg
> alt: An ellipse with January 1 (t = 1) at the top, April 2 (t = 92) on the left, July 1 (t = 182) on the bottom, and October 1 (t = 274) on the right. The focal points of the ellipse have F2 on the left and the Sun on the right. There is a line going from t = 1 to t = 182. There is also a line going from t = 92 to t = 274 that passes through F2 and the Sun. On the upper left side, there is a point marked (x(t), y(t)) with a tangent line pointing down and to the left.
> caption: Coordinate axes superimposed on the orbit of Earth.

We can determine the functions for $x(t)$ and $y(t),$ thereby parameterizing the orbit of Earth around the Sun. The variable $t$ is called an independent parameter and, in this context, represents time relative to the beginning of each year.
A curve in the $(x,y)$ plane can be represented parametrically. The equations that are used to define the curve are called {term:parametric equations}.

:::note [definition] Definition
If *x* and *y* are continuous functions of *t* on an interval *I*, then the equations

$x=x(t)\;\text{and}\;y=y(t)$  {eq:fs-id1169295419559}

are called parametric equations and *t* is called the {term:parameter}. The set of points $(x,y)$ obtained as *t* varies over the interval *I* is called the graph of the parametric equations. The graph of parametric equations is called a {term:parametric curve} or *plane curve*, and is denoted by *C*.
:::
Notice in this definition that *x* and *y* are used in two ways. The first is as functions of the independent variable *t.* As *t* varies over the interval *I*, the functions $x(t)$ and $y(t)$ generate a set of ordered pairs $(x,y).$ This set of ordered pairs generates the graph of the parametric equations. In this second usage, to designate the ordered pairs, *x* and *y* are variables. It is important to distinguish the variables *x* and *y* from the functions $x(t)$ and $y(t).$

:::example {ex:fs-id1169295362672} Graphing a Parametrically Defined Curve

:::exercise {fs-id1169295870973} type= 
PROBLEM:
Sketch the curves described by the following parametric equations:
a. $x(t)=t-1,\;y(t)=2t+4,\;−3\le t\le 2$
b. $x(t)={t}^{2}-3,\;y(t)=2t+1,\;−2\le t\le 3$
c. $x(t)=4\;\text{cos}\;t,\;y(t)=4\;\text{sin}\;t,\;0\le t\le 2\pi$
SOLUTION:
a. To create a graph of this curve, first set up a table of values. Since the independent variable in both $x(t)$ and $y(t)$ is *t*, let *t* appear in the first column. Then $x(t)$ and $y(t)$ will appear in the second and third columns of the table.

> TABLE {tab:fs-id1169295361650} cols=3 class=unnumbered
> summary: This table has three columns and seven rows. The first row is a header row, and it reads from left to right t, x(t), and y(t). Below the header row, in the first column, the values read −3, −2, −1, 0, 1, and 2. In the second column, the values read −4, −3, −2, −1, 0, and 1. In the third column, the values read −2, 0, 2, 4, 6, and 8.

| *t* | $x(t)$ | $y(t)$ |
| --- | --- | --- |
| −3 | −4 | −2 |
| −2 | −3 | 0 |
| −1 | −2 | 2 |
| 0 | −1 | 4 |
| 1 | 0 | 6 |
| 2 | 1 | 8 |

The second and third columns in this table provide a set of points to be plotted. The graph of these points appears in [ref:CNX_Calc_Figure_11_01_003]. The arrows on the graph indicate the {term:orientation} of the graph, that is, the direction that a point moves on the graph as *t* varies from −3 to 2.

> FIGURE {fig:CNX_Calc_Figure_11_01_003} src=../../media/CNX_Calc_Figure_11_01_003.jpg
> alt: A straight line going from (−4, −2) through (−3, 0), (−2, 2), and (0, 6) to (1, 8) with arrow pointed up and to the right. The point (−4, −2) is marked t = −3, the point (−2, 2) is marked t = −1, and the point (1, 8) is marked t = 2. On the graph there are also written three equations: x(t) = t −1, y(t) = 2t + 4, and −3 ≤ t ≤ 2.
> caption: Graph of the plane curve described by the parametric equations in part a.

b. To create a graph of this curve, again set up a table of values.

> TABLE {tab:fs-id1169295730684} cols=3 class=unnumbered
> summary: This table has three columns and seven rows. The first row is a header row, and it reads from left to right t, x(t), and y(t). Below the header row, in the first column, the values read −2, −1, 0, 1, 2, and 3. In the second column, the values read 1, −2, −2, −2, 1, and 6. In the third column, the values read −3, −1, 1, 3, 5, and 7.

| *t* | $x(t)$ | $y(t)$ |
| --- | --- | --- |
| −2 | 1 | −3 |
| −1 | −2 | −1 |
| 0 | −3 | 1 |
| 1 | −2 | 3 |
| 2 | 1 | 5 |
| 3 | 6 | 7 |

The second and third columns in this table give a set of points to be plotted ([ref:CNX_Calc_Figure_11_01_004]). The first point on the graph (corresponding to $t=−2)$ has coordinates $(1,−3),$ and the last point (corresponding to $t=3)$ has coordinates $(6,7).$ As *t* progresses from −2 to 3, the point on the curve travels along a parabola. The direction the point moves is again called the orientation and is indicated on the graph.

> FIGURE {fig:CNX_Calc_Figure_11_01_004} src=../../media/CNX_Calc_Figure_11_01_004.jpg
> alt: A curved line going from (1, −3) through (−3, 1) to (6, 7) with arrow pointing in that order. The point (1, −3) is marked t = −2, the point (−3, 1) is marked t = 0, and the point (6, 7) is marked t = 3. On the graph there are also written three equations: x(t) = t2 − 3, y(t) = 2t + 1, and −2 ≤ t ≤ 3.
> caption: Graph of the plane curve described by the parametric equations in part b.

c. In this case, use multiples of $\pi \text{/}6$ for *t* and create another table of values:

> TABLE {tab:fs-id1169295591562} cols=7 class=unnumbered irregular
> summary: This table has three columns and 14 rows. The first row is a header row, and it reads from left to right t, x(t), and y(t). Below the header row, in the first column, the values read 0, π/6, π/3, π/2, 2π/3, 5π/6, π, 7π/6, 4π/3, 3π/2, 5π/3, 11π/6, and 2π. In the second column, the values read 2 times the square root of 3, which is approximately equal to 3.5, 2, 0, −2, −2 times the square root of 3, which is approximately equal to −3.5, −4, −2 times the square root of 3, which is approximately equal to −3.5, −2, 0, 2, 2 times the square root of 3, which is approximately equal to 3.5, and 5. In the third column, the values read 0, 2, 2 times the square root of 3, which is approximately equal to 3.5, 4, 2 times the square root of 3, which is approximately equal to 3.5, 2, 0, 2, −2 times the square root of 3, which is approximately equal to −3.5, −4, −2 times the square root of 3, which is approximately equal to −3.5, 2, and 0.

| *t* | $x(t)$ | $y(t)$ |  | *t* | $x(t)$ | $y(t)$ |
| 0 | 4 | 0 | {rows=7}  | $\frac{7\pi}{6}$ | $−2\sqrt{3}\approx −3.5$ | 2 |
| $\frac{\pi}{6}$ | $2\sqrt{3}\approx 3.5$ | $2$ | $\frac{4\pi}{3}$ | −2 | $−2\sqrt{3}\approx −3.5$ |
| $\frac{\pi}{3}$ | $2$ | $2\sqrt{3}\approx 3.5$ | $\frac{3\pi}{2}$ | 0 | −4 |
| $\frac{\pi}{2}$ | 0 | 4 | $\frac{5\pi}{3}$ | 2 | $−2\sqrt{3}\approx −3.5$ |
| $\frac{2\pi}{3}$ | −2 | $2\sqrt{3}\approx 3.5$ | $\frac{11\pi}{6}$ | $2\sqrt{3}\approx 3.5$ | 2 |
| $\frac{5\pi}{6}$ | $−2\sqrt{3}\approx −3.5$ | 2 | $2\pi$ | 4 | 0 |
| $\pi$ | −4 | 0 |  |  |  |

The graph of this plane curve appears in the following graph.

> FIGURE {fig:CNX_Calc_Figure_11_01_005} src=../../media/CNX_Calc_Figure_11_01_005.jpg
> alt: A circle with radius 4 centered at the origin is graphed with arrow going counterclockwise. The point (4, 0) is marked t = 0, the point (0, 4) is marked t = π/2, the point (−4, 0) is marked t = π, and the point (0, −4) is marked t = 3π/2. On the graph there are also written three equations: x(t) = 4 cos(t), y(t) = 4 sin(t), and 0 ≤ t ≤ 2π.
> caption: Graph of the plane curve described by the parametric equations in part c.

This is the graph of a circle with radius 4 centered at the origin, with a counterclockwise orientation. The starting point and ending points of the curve both have coordinates $(4,0).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169293200600} type= 
PROBLEM:
Sketch the curve described by the parametric equations

$x(t)=3t+2,\;y(t)={t}^{2}-1,\;−3\le t\le 2.$  {eq:fs-id1169295431091}

SOLUTION:

> IMAGE {img:fs-id1169295446712} src=../../media/CNX_Calc_Figure_11_01_006.jpg
> alt: A curved line going from (−7, 8) through (−1, 0) and (2, −1) to (8, 3) with arrow going in that order. The point (−7, 8) is marked t = −3, the point (2, −1) is marked t = 0, and the point (8, 3) is marked t = 2. On the graph there are also written three equations: x(t) = 3t + 2, y(t) = t2 − 1, and −3 ≤ t ≤ 2.

COMMENTARY: Hint
Make a table of values for $x(t)$ and $y(t)$ using *t* values from −3 to 2.
:::
:::

## Eliminating the Parameter
To better understand the graph of a curve represented parametrically, it is useful to rewrite the two equations as a single equation relating the variables *x* and *y.* Then we can apply any previous knowledge of equations of curves in the plane to identify the curve. For example, the equations describing the plane curve in [ref:fs-id1169295362672]b. are

$x(t)={t}^{2}-3,\;y(t)=2t+1,\;−2\le t\le 3.$  {eq:fs-id1169295565020}

Solving the second equation for *t* gives

$t=\frac{y-1}{2}.$  {eq:fs-id1169293137841}

This can be substituted into the first equation:

$x={(\frac{y-1}{2})}^{2}-3=\frac{{y}^{2}-2y+1}{4}-3=\frac{{y}^{2}-2y-11}{4}.$  {eq:fs-id1169293130361}

This equation describes *x* as a function of *y.* These steps give an example of *eliminating the parameter*. The graph of this function is a parabola opening to the right. Recall that the plane curve started at $(1,−3)$ and ended at $(6,7).$ These terminations were due to the restriction on the parameter *t.*

:::example {ex:fs-id1169295694719} Eliminating the Parameter

:::exercise {fs-id1169293393055} type= 
PROBLEM:
Eliminate the parameter for each of the plane curves described by the following parametric equations and describe the resulting graph.
a. $x(t)=\sqrt{2t+4},\;y(t)=2t+1,\;−2\le t\le 6$
b. $x(t)=4\;\text{cos}\;t,\;y(t)=3\;\text{sin}\;t,\;0\le t\le 2\pi$
SOLUTION:
a. To eliminate the parameter, we can solve either of the equations for *t.* For example, solving the first equation for *t* gives

$\begin{array}{rll}x & = & \sqrt{2t+4} \\ {x}^{2} & = & 2t+4 \\ {x}^{2}-4 & = & 2t \\ t & = & \frac{{x}^{2}-4}{2}.\end{array}$  {eq:fs-id1169293390065}

Note that when we square both sides it is important to observe that $x\ge 0.$ Substituting $t=\frac{{x}^{2}-4}{2}$ this into $y(t)$ yields

$\begin{array}{rll}y(t) & = & 2t+1 \\ y & = & 2(\frac{{x}^{2}-4}{2})+1 \\ y & = & {x}^{2}-4+1 \\ y & = & {x}^{2}-3.\end{array}$  {eq:fs-id1169293387312}

This is the equation of a parabola opening upward. There is, however, a domain restriction because of the limits on the parameter *t*. When $t=−2,$ $x=\sqrt{2(−2)+4}=0,$ and when $t=6,$ $x=\sqrt{2(6)+4}=4.$ The graph of this plane curve follows.

> FIGURE {fig:CNX_Calc_Figure_11_01_007} src=../../media/CNX_Calc_Figure_11_01_007.jpg
> alt: A curved line going from (−3, 0) through (2, 1) to (4, 13) with arrow going in that order. The point (−3, 0) is marked t = −2, the point (2, 1) is marked t = 0, the point (2 times the square root of 2, 5) is marked t = 2, the point (3 times the square root of 2, 9) is marked t = 4, and the point (4, 13) is marked t = 6. On the graph there are also written three equations: x(t) = square root of the quantity (2t + 4), y(t) = 2t + 1, and −2 ≤ t ≤ 6.
> caption: Graph of the plane curve described by the parametric equations in part a.

b. Sometimes it is necessary to be a bit creative in eliminating the parameter. The parametric equations for this example are

$x(t)=4\;\text{cos}\;t\;\text{and}\;y(t)=3\;\text{sin}\;t.$  {eq:fs-id1169295773361}

Solving either equation for *t* directly is not advisable because sine and cosine are not one-to-one functions. However, dividing the first equation by 4 and the second equation by 3 (and suppressing the *t*) gives us

$\text{cos}\;t=\frac{x}{4}\;\text{and}\;\text{sin}\;t=\frac{y}{3}.$  {eq:fs-id1169295447894}

Now use the Pythagorean identity ${\text{cos}}^{2}t+{\text{sin}}^{2}t=1$ and replace the expressions for $\text{sin}\;t$ and $\text{cos}\;t$ with the equivalent expressions in terms of *x* and *y*. This gives

$\begin{array}{rll}{(\frac{x}{4})}^{2}+{(\frac{y}{3})}^{2} & = & 1 \\ \frac{{x}^{2}}{16}+\frac{{y}^{2}}{9} & = & 1.\end{array}$  {eq:fs-id1169295591977}

This is the equation of a horizontal ellipse centered at the origin, with semimajor axis 4 and semiminor axis 3 as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_11_01_008} src=../../media/CNX_Calc_Figure_11_01_008.jpg
> alt: An ellipse with major axis horizontal and of length 8 and with minor radius vertical and of length 6 that is centered at the origin with arrow going counterclockwise. The point (4, 0) is marked t = 0, the point (0, 3) is marked t = π/2, the point (−4, 0) is marked t = π, and the point (0, −3) is marked t = 3π/2. On the graph there are also written three equations: x(t) = 4 cos(t), y(t) = 3 sin(t), and 0 ≤ t ≤ 2π.
> caption: Graph of the plane curve described by the parametric equations in part b.

As *t* progresses from $0$ to $2\pi ,$ a point on the curve traverses the ellipse once, in a counterclockwise direction. Recall from the section opener that the orbit of Earth around the Sun is also elliptical. This is a perfect example of using parameterized curves to model a real-world phenomenon.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169295362512} type= 
PROBLEM:
Eliminate the parameter for the plane curve defined by the following parametric equations and describe the resulting graph.

$x(t)=2+\frac{3}{t},\;y(t)=t-1,\;2\le t\le 6$  {eq:fs-id1169295555115}

SOLUTION:
$x=2+\frac{3}{y+1},$ or $y=−1+\frac{3}{x-2}.$ This equation describes a portion of a rectangular hyperbola centered at $(2,−1).$

> IMAGE {img:fs-id1169295354478} src=../../media/CNX_Calc_Figure_11_01_009.jpg
> alt: A curved line going from (3.5, 1) to (2.5, 5) with arrow going in that order. The point (3.5, 1) is marked t = 2 and the point (2.5, 5) is marked t = 6. On the graph there are also written three equations: x(t) = 2 + 3/t, y(t) = t − 1, and 2 ≤ t ≤ 6.

COMMENTARY: Hint
Solve one of the equations for *t* and substitute into the other equation.
:::
:::
So far we have seen the method of eliminating the parameter, assuming we know a set of parametric equations that describe a plane curve. What if we would like to start with the equation of a curve and determine a pair of parametric equations for that curve? This is certainly possible, and in fact it is possible to do so in many different ways for a given curve. The process is known as {term:parameterization of a curve}.

:::example {ex:fs-id1169295460500} Parameterizing a Curve

:::exercise {fs-id1169295398174} type= 
PROBLEM:
Find two different pairs of parametric equations to represent the graph of $y=2{x}^{2}-3.$
SOLUTION:
First, it is always possible to parameterize a curve by defining $x(t)=t,$ then replacing *x* with *t* in the equation for $y(t).$ This gives the parameterization

$x(t)=t,\;y(t)=2{t}^{2}-3.$  {eq:fs-id1169295409716}

Since there is no restriction on the domain in the original graph, there is no restriction on the values of *t.*
We have complete freedom in the choice for the second parameterization. For example, we can choose $x(t)=3t-2.$ The only thing we need to check is that there are no restrictions imposed on *x*; that is, the range of $x(t)$ is all real numbers. This is the case for $x(t)=3t-2.$ Now since $y=2{x}^{2}-3,$ we can substitute $x(t)=3t-2$ for *x.* This gives

$\begin{array}{rl}y(t) & =2{(3t-2)}^{2}-3 \\ & =2(9{t}^{2}-12t+4)-3 \\ & =18{t}^{2}-24t+8-3 \\ & =18{t}^{2}-24t+5.\end{array}$  {eq:fs-id1169295558068}

Therefore, a second parameterization of the curve can be written as

$x(t)=3t-2\;\text{and}\;y(t)=18{t}^{2}-24t+5.$  {eq:fs-id1169293401744}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169295461542} type= 
PROBLEM:
Find two different sets of parametric equations to represent the graph of $y={x}^{2}+2x.$
SOLUTION:
One possibility is $x(t)=t,\;y(t)={t}^{2}+2t.$ Another possibility is $x(t)=2t-3,\;y(t)={(2t-3)}^{2}+2(2t-3)=4{t}^{2}-8t+3.$
There are, in fact, an infinite number of possibilities.
COMMENTARY: Hint
Follow the steps in [ref:fs-id1169295460500]. Remember we have freedom in choosing the parameterization for $x(t).$
:::
:::

## Cycloids and Other Parametric Curves
Imagine going on a bicycle ride through the country. The tires stay in contact with the road and rotate in a predictable pattern. Now suppose a very determined ant is tired after a long day and wants to get home. So he hangs onto the side of the tire and gets a free ride. The path that this ant travels down a straight road is called a {term:cycloid} ([ref:CNX_Calc_Figure_11_01_010]). A cycloid generated by a circle (or bicycle wheel) of radius *a* is given by the parametric equations

$x(t)=a(t-\text{sin}\;t),\;y(t)=a(1-\text{cos}\;t).$  {eq:fs-id1169293253842}

To see why this is true, consider the path that the center of the wheel takes. The center moves along the *x*-axis at a constant height equal to the radius of the wheel. If the radius is *a*, then the coordinates of the center can be given by the equations

$x(t)=at,\;y(t)=a$  {eq:fs-id1169293199698}

for any value of $t.$ Next, consider the ant, which rotates around the center along a circular path. If the bicycle is moving from left to right then the wheels are rotating in a clockwise direction. A possible parameterization of the circular motion of the ant (relative to the center of the wheel) is given by

$x(t)=\text{−}a\;\text{sin}\;t,\;y(t)=\text{−}a\;\text{cos}\;t.$  {eq:fs-id1169293390280}

(The negative sign is needed to reverse the orientation of the curve. If the negative sign were not there, we would have to imagine the wheel rotating counterclockwise.) Adding these equations together gives the equations for the cycloid.

$x(t)=a(t-\text{sin}\;t),\;y(t)=a(1-\text{cos}\;t).$  {eq:fs-id1169293339997}

> FIGURE {fig:CNX_Calc_Figure_11_01_010} src=../../media/CNX_Calc_Figure_11_01_010.jpg
> alt: A series of circles with center marked and a point on the circle drawing out a curve as if the circle was rolling along a plane. The shape made seems to be half an ellipse with height the diameter of the original circle and with major axis the circumference of the circle.
> caption: A wheel traveling along a road without slipping; the point on the edge of the wheel traces out a cycloid.

Now suppose that the bicycle wheel doesn’t travel along a straight road but instead moves along the inside of a larger wheel, as in [ref:CNX_Calc_Figure_11_01_011]. In this graph, the green circle is traveling around the blue circle in a counterclockwise direction. A point on the edge of the green circle traces out the red graph, which is called a {index:hypocycloid}.

> FIGURE {fig:CNX_Calc_Figure_11_01_011} src=../../media/CNX_Calc_Figure_11_01_011.jpg
> alt: Two circles are drawn both with center at the origin and with radii 3 and 4, respectively; the circle with radius 3 has an arrow pointing in the counterclockwise direction. There is a third circle drawn with center on the circle with radius 3 and touching the circle with radius 4 at one point. That is, this third circle has radius 1. A point is drawn on this third circle, and if it were to roll along the other two circles, it would draw out a four pointed star with points at (4, 0), (0, 4), (−4, 0), and (0, −4). On the graph there are also written two equations: x(t) = 3 cos(t) + cos(3t) and y(t) = 3 sin(t) – sin(3t).
> caption: Graph of the hypocycloid described by the parametric equations shown.

The general parametric equations for a hypocycloid are

$\begin{array}{l} \\ \\ x(t)=(a-b)\;\text{cos}\;t+b\;\text{cos}(\frac{a-b}{b})\;t \\ y(t)=(a-b)\;\text{sin}\;t-b\;\text{sin}(\frac{a-b}{b})\;t.\end{array}$  {eq:fs-id1169295554630}

These equations are a bit more complicated, but the derivation is somewhat similar to the equations for the cycloid. In this case we assume the radius of the larger circle is *a* and the radius of the smaller circle is *b.* Then the center of the wheel travels along a circle of radius $a-b.$ This fact explains the first term in each equation above. The period of the second trigonometric function in both $x(t)$ and $y(t)$ is equal to $\frac{2\pi b}{a-b}.$
The ratio $\frac{a}{b}$ is related to the number of {term:cusps} on the graph (cusps are the corners or pointed ends of the graph), as illustrated in [ref:CNX_Calc_Figure_11_01_012]. This ratio can lead to some very interesting graphs, depending on whether or not the ratio is rational. [ref:CNX_Calc_Figure_11_01_011] corresponds to $a=4$ and $b=1.$ The result is a hypocycloid with four cusps. [ref:CNX_Calc_Figure_11_01_012] shows some other possibilities. The last two hypocycloids have irrational values for $\frac{a}{b}.$ In these cases the hypocycloids have an infinite number of cusps, so they never return to their starting point. These are examples of what are known as {term:space-filling curves}.

> FIGURE {fig:CNX_Calc_Figure_11_01_012} src=../../media/CNX_Calc_Figure_11_01_013.jpg
> alt: A series of hypocycloids is given. The first is a three pointed star marked a/b = 3. The second is a four pointed star marked a/b = 4. The third is a five pointed star marked a/b = 5. None of these first three figures has lines that cross each other. The fourth figure is a five pointed star but this one has lines which cross each other and looks like the star that children first learn to draw; it is marked a/b = 5/3. A similar sort of star with seven points is next and is marked a/b = 7/3. Then a similar star with eight points is next and is marked a/b = 8/3. The next figure is a complicated series of curves that ultimately creates a small rosette in the middle; this is marked a/b = π. Lastly, there is an even more complicated series of curves that creates a large rosette with sharper florets marked a/b = the square root of 2.
> caption: Graph of various hypocycloids corresponding to different values of $a\text{/}b.$

:::note [project] The Witch of Agnesi
Many plane curves in mathematics are named after the people who first investigated them, like the folium of Descartes or the spiral of Archimedes. However, perhaps the strangest name for a curve is the {index:witch of Agnesi}. Why a witch?
Maria Gaetana Agnesi (1718–1799) was one of the few recognized women mathematicians of eighteenth-century Italy. She wrote a popular book on analytic geometry, published in 1748, which included an interesting curve that had been studied by Fermat in 1630. The mathematician Guido Grandi showed in 1703 how to construct this curve, which he later called the “versoria,” a Latin term for a rope used in sailing. Agnesi used the Italian term for this rope, “versiera,” but in Latin, this same word means a “female goblin.” When Agnesi’s book was translated into English in 1801, the translator used the term “witch” for the curve, instead of rope. The name “witch of Agnesi” has stuck ever since.
The witch of Agnesi is a curve defined as follows: Start with a circle of radius *a* so that the points $(0,0)$ and $(0,2a)$ are points on the circle ([ref:CNX_Calc_Figure_11_01_SP1]). Let *O* denote the origin. Choose any other point *A* on the circle, and draw the secant line *OA*. Let *B* denote the point at which the line *OA* intersects the horizontal line through $(0,2a).$ The vertical line through *B* intersects the horizontal line through *A* at the point *P*. As the point *A* varies, the path that the point *P* travels is the witch of Agnesi curve for the given circle.
Witch of Agnesi curves have applications in physics, including modeling water waves and distributions of spectral lines. In probability theory, the curve describes the probability density function of the Cauchy distribution. In this project you will parameterize these curves.

> FIGURE {fig:CNX_Calc_Figure_11_01_SP1} src=../../media/CNX_Calc_Figure_11_01_012.jpg
> alt: A circle with bottom at point O (the origin) and top at point (0, 2a) is drawn. The x axis is drawn from point O, and the y axis is drawn up from point O through (0, 2a). Parallel to the x axis is a line drawn from (0, 2a); it has point B marked to the right. A line from point B to point O passes through the circle at point A. A line is drawn parallel to the x axis from point A, and it forms a right angle with a line drawn down from point B; these lines intersect at point P. There is a curve that is symmetric about the y axis that passes through the point P. This curve has its maximum at (0, 2a) and gently decreases through the point P.
> caption: As the point *A* moves around the circle, the point *P* traces out the witch of Agnesi curve for the given circle.

1. On the figure, label the following points, lengths, and angle:

a. *C* is the point on the *x*-axis with the same *x*-coordinate as *A*.
b. *x* is the *x*-coordinate of *P*, and *y* is the *y*-coordinate of *P*.
c. *E* is the point $(0,a).$
d. *F* is the point on the line segment *OA* such that the line segment *EF* is perpendicular to the line segment *OA*.
e. *b* is the distance from *O* to *F*.
f. *c* is the distance from *F* to *A*.
g. *d* is the distance from *O* to *B*.
h. $\theta$ is the measure of angle $\text{∠}COA.$

The goal of this project is to parameterize the witch using $\theta$ as a parameter. To do this, write equations for *x* and *y* in terms of only $\theta .$
2. Show that $d=\frac{2a}{\text{sin}\;\theta}.$
3. Note that $x=d\;\text{cos}\;\theta .$ Show that $x=2a\;\text{cot}\;\theta .$ When you do this, you will have parameterized the *x*-coordinate of the curve with respect to $\theta .$ If you can get a similar equation for *y*, you will have parameterized the curve.
4. In terms of $\theta ,$ what is the angle $\text{∠}EOA?$
5. Show that $b+c=2a\;\text{cos}(\frac{\pi}{2}-\theta ).$
6. Show that $y=2a\;\text{cos}(\frac{\pi}{2}-\theta )\;\text{sin}\;\theta .$
7. Show that $y=2a\;{\text{sin}}^{2}\theta .$ You have now parameterized the *y*-coordinate of the curve with respect to $\theta .$
8. Conclude that a parameterization of the given witch curve is

$x=2a\;\text{cot}\;\theta ,y=2a\;{\text{sin}}^{2}\theta ,-\infty <\theta <\infty .$  {eq:fs-id1169293130393}

9. Use your parameterization to show that the given witch curve is the graph of the function $f(x)=\frac{8{a}^{3}}{{x}^{2}+4{a}^{2}}.$
:::

:::note [project] Travels with My Ant: The Curtate and Prolate Cycloids
Earlier in this section, we looked at the parametric equations for a cycloid, which is the path a point on the edge of a wheel traces as the wheel rolls along a straight path. In this project we look at two different variations of the cycloid, called the curtate and prolate cycloids.
First, let’s revisit the derivation of the parametric equations for a cycloid. Recall that we considered a tenacious ant trying to get home by hanging onto the edge of a bicycle tire. We have assumed the ant climbed onto the tire at the very edge, where the tire touches the ground. As the wheel rolls, the ant moves with the edge of the tire ([ref:CNX_Calc_Figure_11_01_SP2_ant1]).
As we have discussed, we have a lot of flexibility when parameterizing a curve. In this case we let our parameter *t* represent the angle the tire has rotated through. Looking at [ref:CNX_Calc_Figure_11_01_SP2_ant1], we see that after the tire has rotated through an angle of *t*, the position of the center of the wheel, $C=({x}_{C},{y}_{C}),$ is given by

${x}_{C}=at\;\text{and}\;{y}_{C}=a.$  {eq:fs-id1169293260909}

Furthermore, letting $A=({x}_{A},{y}_{A})$ denote the position of the ant, we note that

${x}_{C}-{x}_{A}=a\;\text{sin}\;t\;\text{and}\;{y}_{C}-{y}_{A}=a\;\text{cos}\;t.$  {eq:fs-id1169293199728}

Then

$\begin{array}{l}{x}_{A}={x}_{C}-a\;\text{sin}\;t=at-a\;\text{sin}\;t=a(t-\text{sin}\;t) \\ {y}_{A}={y}_{C}-a\;\text{cos}\;t=a-a\;\text{cos}\;t=a(1-\text{cos}\;t).\end{array}$  {eq:fs-id1169295377265}

> FIGURE {fig:CNX_Calc_Figure_11_01_SP2_ant1} src=../../media/CNX_Calc_Figure_11_01_014.jpg
> alt: There are two figures marked (a) and (b). Figure a has a circle with point A on the circle at the origin. The circle has “spokes,” with point A being at the end of one of these spokes. The circle appears to be travelling to the right on the x axis, with point A being up above the x axis in a second image of the circle drawn slightly to the right. Figure b has a circle in the first quadrant with center C. It touches the x axis at xc. A point A is drawn on the circle and a right triangle is made from this point and point C. The hypotenuse is marked a and the angle at C between A and xc is marked t. Lines are drawn to give the x and y values of A as xA and yA, respectively. Similarly, a line is drawn to give the y value of C as yC.
> caption: (a) The ant clings to the edge of the bicycle tire as the tire rolls along the ground. (b) Using geometry to determine the position of the ant after the tire has rotated through an angle of *t*.

Note that these are the same parametric representations we had before, but we have now assigned a physical meaning to the parametric variable *t*.
After a while the ant is getting dizzy from going round and round on the edge of the tire. So he climbs up one of the spokes toward the center of the wheel. By climbing toward the center of the wheel, the ant has changed his path of motion. The new path has less up-and-down motion and is called a {index:curtate cycloid} ([ref:CNX_Calc_Figure_11_01_SP2_ant2]). As shown in the figure, we let *b* denote the distance along the spoke from the center of the wheel to the ant. As before, we let *t* represent the angle the tire has rotated through. Additionally, we let $C=({x}_{C},{y}_{C})$ represent the position of the center of the wheel and $A=({x}_{A},{y}_{A})$ represent the position of the ant.

> FIGURE {fig:CNX_Calc_Figure_11_01_SP2_ant2} src=../../media/CNX_Calc_Figure_11_01_015.jpg
> alt: There are three figures marked (a), (b), and (c). Figure a has a circle with “spokes,” where point A is in the middle of one of these spokes. The circle is tangent to the x axis at the origin. The circle appears to be travelling to the right on the x axis, with point A being higher up in a second image of the circle drawn slightly to the right. Figure b shows the curve that point A would trace out, as the circle travels to the right. It is vaguely sinusoidal. Figure c has a circle in the first quadrant with center C. It touches the x axis at xc. A point A is drawn inside the circle and a right triangle is made from this point and point C. The hypotenuse is marked b, the angle at C between A and xc is marked t, and the distance from C to xc is marked a. Lines are drawn to give the x and y values of A as xA and yA, respectively. Similarly, a line is drawn to give the y value of C as yC.
> caption: (a) The ant climbs up one of the spokes toward the center of the wheel. (b) The ant’s path of motion after he climbs closer to the center of the wheel. This is called a curtate cycloid. (c) The new setup, now that the ant has moved closer to the center of the wheel.

1. What is the position of the center of the wheel after the tire has rotated through an angle of *t*?
2. Use geometry to find expressions for ${x}_{C}-{x}_{A}$ and for ${y}_{C}-{y}_{A}.$
3. On the basis of your answers to parts 1 and 2, what are the parametric equations representing the curtate cycloid?

Once the ant’s head clears, he realizes that the bicyclist has made a turn, and is now traveling away from his home. So he drops off the bicycle tire and looks around. Fortunately, there is a set of train tracks nearby, headed back in the right direction. So the ant heads over to the train tracks to wait. After a while, a train goes by, heading in the right direction, and he manages to jump up and just catch the edge of the train wheel (without getting squished!).

The ant is still worried about getting dizzy, but the train wheel is slippery and has no spokes to climb, so he decides to just hang on to the edge of the wheel and hope for the best. Now, train wheels have a flange to keep the wheel running on the tracks. So, in this case, since the ant is hanging on to the very edge of the flange, the distance from the center of the wheel to the ant is actually greater than the radius of the wheel ([ref:CNX_Calc_Figure_11_01_SP2_ant3]).

The setup here is essentially the same as when the ant climbed up the spoke on the bicycle wheel. We let *b* denote the distance from the center of the wheel to the ant, and we let *t* represent the angle the tire has rotated through. Additionally, we let $C=({x}_{C},{y}_{C})$ represent the position of the center of the wheel and $A=({x}_{A},{y}_{A})$ represent the position of the ant ([ref:CNX_Calc_Figure_11_01_SP2_ant3]).

When the distance from the center of the wheel to the ant is greater than the radius of the wheel, his path of motion is called a {index:prolate cycloid}. A graph of a prolate cycloid is shown in the figure.

> FIGURE {fig:CNX_Calc_Figure_11_01_SP2_ant3} src=../../media/CNX_Calc_Figure_11_01_016.jpg
> alt: There are three figures marked (a), (b), and (c). Figure a has a circle and a point A that is outside the circle on the y axis (below the origin). The circle is tangent to the x axis at the origin. The circle appears to be travelling to the right on the x axis, with point A being above the x axis in a second image of the circle drawn slightly to the right. Figure b has a circle in the first quadrant with center C. It touches the x axis at xc. A point A is drawn outside the circle and a right triangle is made from this point and point C. The hypotenuse is marked b, the angle at C between A and xc is marked t, and the distance from C to xc is marked a. Lines are drawn to give the x and y values of A as xA and yA, respectively. Similarly, a line is drawn to give the y value of C as yC. Figure c shows the curve that point A would trace out, as the circle travels to the right. It is vaguely sinusoidal with an extra loop at the bottom once per revolution.
> caption: (a) The ant is hanging onto the flange of the train wheel. (b) The new setup, now that the ant has jumped onto the train wheel. (c) The ant travels along a prolate cycloid.

4. Using the same approach you used in parts 1– 3, find the parametric equations for the path of motion of the ant.
5. What do you notice about your answer to part 3 and your answer to part 4?

Notice that the ant is actually traveling backward at times (the “loops” in the graph), even though the train continues to move forward. He is probably going to be *really* dizzy by the time he gets home!
:::

## Key Concepts {section:key-concepts}
- Parametric equations provide a convenient way to describe a curve. A parameter can represent time or some other meaningful quantity.
- It is often possible to eliminate the parameter in a parameterized curve to obtain a function or relation describing that curve.
- There is always more than one way to parameterize a curve.
- Parametric equations can describe complicated curves that are difficult or perhaps impossible to describe using rectangular coordinates.

##  {section:section-exercises}
For the following exercises, sketch the curves below by eliminating the parameter *t*. Give the orientation of the curve.

:::exercise {fs-id1169293216381} type= 
PROBLEM:
$x={t}^{2}+2t,$ $y=t+1$
SOLUTION:

> IMAGE {img:fs-id1169293136744} src=../../media/CNX_Calc_Figure_11_01_201.jpg
> alt: A parabola open to the right with (−1, 0) being the point furthest the left with arrow going from the bottom through (−1, 0) and up.

orientation: bottom to top
:::

:::exercise {fs-id1169293387478} type= 
PROBLEM:
$x=\text{cos}(t),y=\text{sin}(t),(0,2\pi ]$
:::

:::exercise {fs-id1169293348680} type= 
PROBLEM:
$x=2t+4,y=t-1$
SOLUTION:

> IMAGE {img:fs-id1169293219318} src=../../media/CNX_Calc_Figure_11_01_203.jpg
> alt: A straight line passing through (0, −3) and (6, 0) with arrow pointing up and to the right.

orientation: left to right
:::

:::exercise {fs-id1169293136776} type= 
PROBLEM:
$x=3-t,y=2t-3,1.5\le t\le 3$
:::
For the following exercises, eliminate the parameter and sketch the graphs.

:::exercise {fs-id1169293394162} type= 
PROBLEM:
$x=2{t}^{2},\;y={t}^{4}+1$
SOLUTION:
$y=\frac{{x}^{2}}{4}+1$

> IMAGE {img:fs-id1169293336853} src=../../media/CNX_Calc_Figure_11_01_205.jpg
> alt: Half a parabola starting at the origin and passing through (2, 2) with arrow pointed up and to the right.

:::
For the following exercises, use technology (CAS or calculator) to sketch the parametric equations.

:::exercise {fs-id1169293398774} type= 
PROBLEM:
**[T]** $\begin{array}{ll}x={t}^{2}+t, & y={t}^{2}-1\end{array}$
:::

:::exercise {fs-id1169293320748} type= 
PROBLEM:
**[T]** $\begin{array}{ll}x={e}^{\text{−}t}, & y={e}^{2t}-1\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293223932} src=../../media/CNX_Calc_Figure_11_01_208.jpg
> alt: A curve going through (1, 0) and (0, 3) with arrow pointing up and to the left.

:::

:::exercise {fs-id1169293185308} type= 
PROBLEM:
**[T]** $\begin{array}{ll}x=3\;\text{cos}\;t, & y=4\;\text{sin}\;t\end{array}$
:::

:::exercise {fs-id1169295856403} type= 
PROBLEM:
**[T]** $\begin{array}{ll}x=\text{sec}\;t, & y=\text{cos}\;t\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293253902} src=../../media/CNX_Calc_Figure_11_01_210.jpg
> alt: A graph with asymptotes at the x and y axes. There is a portion of the graph in the third quadrant with arrow pointing down and to the right. There is a portion of the graph in the first quadrant with arrow pointing down and to the right.

:::
For the following exercises, sketch the parametric equations by eliminating the parameter. Indicate any asymptotes of the graph.

:::exercise {fs-id1169293389320} type= 
PROBLEM:
$x={e}^{t},\;y={e}^{2t}+1$
:::

:::exercise {fs-id1169293398622} type= 
PROBLEM:
$x=6\;\text{sin}(2\theta ),y=4\;\text{cos}(2\theta )$
SOLUTION:

> IMAGE {img:fs-id1169293398545} src=../../media/CNX_Calc_Figure_11_01_212.jpg
> alt: An ellipse with minor axis vertical and of length 8 and major axis horizontal and of length 12 that is centered at the origin. The arrows go clockwise.

:::

:::exercise {fs-id1169293398560} type= 
PROBLEM:
$\begin{array}{ll}x=\text{cos}\;\theta , & y=2\;\text{sin}(2\theta )\end{array}$
:::

:::exercise {fs-id1169293397059} type= 
PROBLEM:
$\begin{array}{ll}x=3-2\;\text{cos}\;\theta , & y=−5+3\;\text{sin}\;\theta \end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293396993} src=../../media/CNX_Calc_Figure_11_01_214.jpg
> alt: An ellipse in the fourth quadrant with minor axis horizontal and of length 4 and major axis vertical and of length 6. The arrows go clockwise.

:::

:::exercise {fs-id1169293333631} type= 
PROBLEM:
$\begin{array}{ll}x=4+2\;\text{cos}\;\theta , & y=−1+\text{sin}\;\theta \end{array}$
:::

:::exercise {fs-id1169293393259} type= 
PROBLEM:
$\begin{array}{ll}x=\text{sec}\;t, & y=\text{tan}\;t\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293395145} src=../../media/CNX_Calc_Figure_11_01_216.jpg
> alt: A graph with asymptotes at y = x and y = −x. The first part of the graph occurs in the second and third quadrants with vertex at (−1, 0). The second part of the graph occurs in the first and fourth quadrants with vertex as (1, 0).

Asymptotes are $y=x$ and $y=\text{−}x$
:::

:::exercise {fs-id1169293320701} type= 
PROBLEM:
$\begin{array}{ll}x=\text{ln}(2t), & y={t}^{2}\end{array}$
:::

:::exercise {fs-id1169293282643} type= 
PROBLEM:
$\begin{array}{ll}x={e}^{t}, & y={e}^{2t}\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293401908} src=../../media/CNX_Calc_Figure_11_01_218.jpg
> alt: A curve starting slightly above the origin and increasing to the right with arrow pointing up and to the right.

:::

:::exercise {fs-id1169293402453} type= 
PROBLEM:
$\begin{array}{ll}x={e}^{−2t}, & y={e}^{3t}\end{array}$
:::

:::exercise {fs-id1169293395004} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{3}, & y=3\;\text{ln}\;t\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293393231} src=../../media/CNX_Calc_Figure_11_01_220.jpg
> alt: A curve with asymptote being the y axis. The curve starts in the fourth quadrant and increases rapidly through (1, 0) at which point is increases much more slowly.

:::

:::exercise {fs-id1169293392983} type= 
PROBLEM:
$\begin{array}{ll}x=4\;\text{sec}\;\theta , & y=3\;\text{tan}\;\theta \end{array}$
:::
For the following exercises, convert the parametric equations of a curve into rectangular form. No sketch is necessary. State the domain of the rectangular form.

:::exercise {fs-id1169293394133} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{2}-1, & y=\frac{t}{2}\end{array}$
SOLUTION:
$y=\frac{\sqrt{x+1}}{2}$; domain: $x\in [–1,\infty ).$
:::

:::exercise {fs-id1169293398516} type= 
PROBLEM:
$\begin{array}{ll}x=\frac{1}{\sqrt{t+1}}, & y=\frac{t}{1+t},t>−1\end{array}$
:::

:::exercise {fs-id1169293315628} type= 
PROBLEM:
$x=4\;\text{cos}\;\theta ,y=3\;\text{sin}\;\theta ,\theta \in (0,2\pi ]$
SOLUTION:
$\frac{{x}^{2}}{16}+\frac{{y}^{2}}{9}=1;$ domain $x\in [−4,4].$
:::

:::exercise {fs-id1169295773309} type= 
PROBLEM:
$\begin{array}{ll}x=\text{cosh}\;t, & y=\text{sinh}\;t\end{array}$
:::

:::exercise {fs-id1169293390489} type= 
PROBLEM:
$\begin{array}{ll}x=2t-3, & y=6t-7\end{array}$
SOLUTION:
$y=3x+2;$ domain: all real numbers.
:::

:::exercise {fs-id1169293339114} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{2}, & y={t}^{3}\end{array}$
:::

:::exercise {fs-id1169293395820} type= 
PROBLEM:
$\begin{array}{ll}x=1+\text{cos}\;t, & y=3-\text{sin}\;t\end{array}$
SOLUTION:
${(x-1)}^{2}+{(y-3)}^{2}=1;$ domain: $x\in [0,2].$
:::

:::exercise {fs-id1169295558232} type= 
PROBLEM:
$\begin{array}{ll}x=\sqrt{t}, & y=2t+4\end{array}$
:::

:::exercise {fs-id1169293199778} type= 
PROBLEM:
$\begin{array}{ll}x=\text{sec}\;t, & y=\text{tan}\;t,\pi \le t<\frac{3\pi}{2}\end{array}$
SOLUTION:
$y=\sqrt{{x}^{2}-1};$ domain: $x\in (-∞,-1].$
:::

:::exercise {fs-id1169293281179} type= 
PROBLEM:
$\begin{array}{ll}x=2\;\text{cosh}\;t, & y=4\;\text{sinh}\;t\end{array}$
:::

:::exercise {fs-id1169293339179} type= 
PROBLEM:
$\begin{array}{ll}x=\text{cos}(2t), & y=\text{sin}\;t\end{array}$
SOLUTION:
${y}^{2}=\frac{1-x}{2};$ domain: $x\in [-1,1].$
:::

:::exercise {fs-id1169293387881} type= 
PROBLEM:
$x=4t+3,y=16{t}^{2}-9$
:::

:::exercise {fs-id1169295839311} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{2}, & y=2\;\text{ln}\;t,t\ge 1\end{array}$
SOLUTION:
$y=\text{ln}\;x;$ domain: $x\in [1,\infty ).$
:::

:::exercise {fs-id1169295558766} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{3}, & y=3\;\text{ln}\;t,t\ge 1\end{array}$
:::

:::exercise {fs-id1169293200728} type= 
PROBLEM:
$\begin{array}{ll}x={t}^{n}, & y=n\;\text{ln}\;t,t\ge 1,\end{array}$ where *n* is a natural number
SOLUTION:
$y=\text{ln}\;x;$ domain: $x\in (0,\infty ).$
:::

:::exercise {fs-id1169293336913} type= 
PROBLEM:
$\begin{array}{l}x=\text{ln}(5t) \\ y=\text{ln}({t}^{2})\end{array}$ where $1\le t\le e$
:::

:::exercise {fs-id1169295558437} type= 
PROBLEM:
$\begin{array}{l}x=2\;\text{sin}(8t) \\ y=2\;\text{cos}(8t)\end{array}$
SOLUTION:
${x}^{2}+{y}^{2}=4;$ domain: $x\in [−2,2].$
:::

:::exercise {fs-id1169293315663} type= 
PROBLEM:
$\begin{array}{l}x=\text{tan}\;t \\ y={\text{sec}}^{2}t-1\end{array}$
:::
For the following exercises, the pairs of parametric equations represent lines, parabolas, circles, ellipses, or hyperbolas. Name the type of basic curve that each pair of equations represents.

:::exercise {fs-id1169293387409} type= 
PROBLEM:
$\begin{array}{l}x=3t+4 \\ y=5t-2\end{array}$
SOLUTION:
line
:::

:::exercise {fs-id1169293339217} type= 
PROBLEM:
$\begin{array}{l}x-4=5t \\ y+2=t\end{array}$
:::

:::exercise {fs-id1169293339266} type= 
PROBLEM:
$\begin{array}{l}x=2t+1 \\ y={t}^{2}-3\end{array}$
SOLUTION:
parabola
:::

:::exercise {fs-id1169293130310} type= 
PROBLEM:
$\begin{array}{l}x=3\;\text{cos}\;t \\ y=3\;\text{sin}\;t\end{array}$
:::

:::exercise {fs-id1169293345112} type= 
PROBLEM:
$\begin{array}{l}x=2\;\text{cos}(3t) \\ y=2\;\text{sin}(3t)\end{array}$
SOLUTION:
circle
:::

:::exercise {fs-id1169295558280} type= 
PROBLEM:
$\begin{array}{l}x=\text{cosh}\;t \\ y=\text{sinh}\;t\end{array}$
:::

:::exercise {fs-id1169295558322} type= 
PROBLEM:
$\begin{array}{l}x=3\;\text{cos}\;t \\ y=4\;\text{sin}\;t\end{array}$
SOLUTION:
ellipse
:::

:::exercise {fs-id1169293261052} type= 
PROBLEM:
$\begin{array}{l}x=2\;\text{cos}(3t) \\ y=5\;\text{sin}(3t)\end{array}$
:::

:::exercise {fs-id1169293261119} type= 
PROBLEM:
$\begin{array}{l}x=3\;\text{cosh}(4t) \\ y=4\;\text{sinh}(4t)\end{array}$
SOLUTION:
hyperbola
:::

:::exercise {fs-id1169295558155} type= 
PROBLEM:
$\begin{array}{l}x=2\;\text{cosh}\;t \\ y=2\;\text{sinh}\;t\end{array}$
:::

:::exercise {fs-id1169293223957} type= 
PROBLEM:
Show that $\begin{array}{l}x=h+r\;\text{cos}\;\theta \\ y=k+r\;\text{sin}\;\theta \end{array}$ represents the equation of a circle.
:::

:::exercise {fs-id1169293224008} type= 
PROBLEM:
Use the equations in the preceding problem to find a set of parametric equations for a circle whose radius is 5 and whose center is $(−2,\;3).$
:::
For the following exercises, use a graphing utility to graph the curve represented by the parametric equations and identify the curve from its equation.

:::exercise {fs-id1169293343538} type= 
PROBLEM:
**[T]** $\begin{array}{l}x=\theta +\text{sin}\;\theta \\ y=1-\text{cos}\;\theta \end{array}$
SOLUTION:
The equations represent a cycloid.

> IMAGE {img:fs-id1169293392717} src=../../media/CNX_Calc_Figure_11_01_222.jpg
> alt: A graph starting at (−6, 0) increasing rapidly to a sharp point at (−3, 2) and then decreasing rapidly to the origin. The graph is symmetric about the y axis, so the graph increases rapidly to (3, 2) before decreasing rapidly to (6, 0).

:::

:::exercise {fs-id1169293392736} type= 
PROBLEM:
**[T]** $\begin{array}{l}x=2t-2\;\text{sin}\;t \\ y=2-2\;\text{cos}\;t\end{array}$
:::

:::exercise {fs-id1169293401770} type= 
PROBLEM:
**[T]** $\begin{array}{l}x=t-0.5\;\text{sin}\;t \\ y=1-1.5\;\text{cos}\;t\end{array}$
SOLUTION:

> IMAGE {img:fs-id1169293401831} src=../../media/CNX_Calc_Figure_11_01_231.jpg
> alt: A graph starting at roughly (−6, 0) increasing to a rounded point and then decreasing to roughly (0, −0.5). The graph is symmetric about the y axis, so the graph increases to a rounded point before decreasing to roughly (6, 0).

:::

:::exercise {fs-id1169293401843} type= 
PROBLEM:
An airplane traveling horizontally at 100 m/s over flat ground at an elevation of 4000 meters must drop an emergency package on a target on the ground. The trajectory of the package is given by $x=100t,y=−4.9{t}^{2}+4000,t\ge 0$ where the origin is the point on the ground directly beneath the plane at the moment of release. How many horizontal meters before the target should the package be released in order to hit the target?
:::

:::exercise {fs-id1169293314055} type= 
PROBLEM:
The trajectory of a bullet is given by $x={v}_{0}(\text{cos}\;\alpha )\;t,y={v}_{0}(\text{sin}\;\alpha )\;t-\frac{1}{2}g{t}^{2}$ where ${v}_{0}=500\;\text{m/s,}$ $g=9.8=9.8{\;\text{m/s}}^{2},$ and $\alpha =30\;\text{degrees}.$ When will the bullet hit the ground? How far from the gun will the bullet hit the ground?
SOLUTION:
22,092 meters at approximately 51 seconds.
:::

:::exercise {fs-id1169293251479} type= 
PROBLEM:
**[T]** Use technology to sketch the curve represented by $x=\text{sin}(4t),y=\text{sin}(3t),0\le t\le 2\pi .$
:::

:::exercise {fs-id1169293251573} type= 
PROBLEM:
**[T]** Use technology to sketch $x=2\;\text{tan}(t),y=3\;\text{sec}(t),\text{−}\pi <t<\pi .$
SOLUTION:

> IMAGE {img:fs-id1169295459677} src=../../media/CNX_Calc_Figure_11_01_226.jpg
> alt: A graph with asymptotes roughly near y = x and y = −x. The first part of the graph is in the first and second quadrants with vertex near (0, 3). The second part of the graph is in the third and fourth quadrants with vertex near (0, −3).

:::

:::exercise {fs-id1169295459690} type= 
PROBLEM:
Sketch the curve known as an {index:*epitrochoid*}, which gives the path of a point on a circle of radius *b* as it rolls on the outside of a circle of radius *a*. The equations are
$\begin{array}{l}x=(a+b)\text{cos}\;t-c\cdot \text{cos}[\frac{(a+b)t}{b}] \\ y=(a+b)\text{sin}\;t-c\cdot \text{sin}[\frac{(a+b)t}{b}].\end{array}$
Let $a=1,b=2,c=1.$
:::

:::exercise {fs-id1169293343404} type= 
PROBLEM:
**[T]** Use technology to sketch the spiral curve given by $x=t\;\text{cos}(t),y=t\;\text{sin}(t)$ from $−2\pi \le t\le 2\pi .$
SOLUTION:

> IMAGE {img:fs-id1169293312114} src=../../media/CNX_Calc_Figure_11_01_228.jpg
> alt: A graph starting at roughly (−6, −1) decreasing to a minimum in the third quadrant near (−1, −4.8) increasing through roughly (0, −4.7) and (3, 0) to a maximum near (1, 1.9) before decreasing through (0, 1.5) to the origin. The graph is symmetric about the y axis, so the graph increases through (0, 1.5) to a maximum in the second quadrant, decreases again through (0, −4.7), and then increases to (6, −1).

:::

:::exercise {fs-id1169293312123} type= 
PROBLEM:
**[T]** Use technology to graph the curve given by the parametric equations $x=2\;\text{cot}(t),y=1-\text{cos}(2t),\text{−}\pi \text{/}2\le t\le \pi \text{/}2.$ This curve is known as the witch of Agnesi.
:::

:::exercise {fs-id1169293312229} type= 
PROBLEM:
**[T]** Sketch the curve given by parametric equations $\begin{array}{l}x=\text{cosh}(t) \\ y=\text{sinh}(t),\end{array}$ where $−2\le t\le 2.$
SOLUTION:

> IMAGE {img:fs-id1169293394876} src=../../media/CNX_Calc_Figure_11_01_230.jpg
> alt: A vaguely parabolic graph with vertex at the origin that is open to the right.

:::

## Glossary
- {def} **cycloid**: the curve traced by a point on the rim of a circular wheel as the wheel rolls along a straight line without slippage
- {def} **cusp**: a pointed end or part where two curves meet
- {def} **orientation**: the direction that a point moves on a graph as the parameter increases
- {def} **parameter**: an independent variable that both *x* and *y* depend on in a parametric curve; usually represented by the variable *t*
- {def} **parametric curve**: the graph of the parametric equations $x(t)$ and $y(t)$ over an interval $a\le t\le b$ combined with the equations
- {def} **parametric equations**: the equations $x=x(t)$ and $y=y(t)$ that define a parametric curve
- {def} **parameterization of a curve**: rewriting the equation of a curve defined by a function $y=f(x)$ as parametric equations

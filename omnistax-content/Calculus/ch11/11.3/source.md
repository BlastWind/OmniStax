# Polar Coordinates

## Learning Objectives {section:learning-objectives}
- Locate points in a plane by using polar coordinates.
- Convert points between rectangular and polar coordinates.
- Sketch polar curves from given equations.
- Convert equations between rectangular and polar coordinates.
- Identify symmetry in polar curves and equations.

The rectangular coordinate system (or Cartesian plane) provides a means of mapping points to ordered pairs and ordered pairs to points. This is called a *one-to-one mapping* from points in the plane to ordered pairs. The polar coordinate system provides an alternative method of mapping points to ordered pairs. In this section we see that in some circumstances, polar coordinates can be more useful than rectangular coordinates.

## Defining Polar Coordinates
To find the coordinates of a point in the polar coordinate system, consider [ref:CNX_Calc_Figure_11_03_001]. The point $P$ has Cartesian coordinates $(x,y).$ The line segment connecting the origin to the point $P$ measures the distance from the origin to $P$ and has length $r.$ The angle between the positive $x$-axis and the line segment has measure $\theta .$ This observation suggests a natural correspondence between the coordinate pair $(x,y)$ and the values $r$ and $\theta .$ This correspondence is the basis of the {term:polar coordinate system}. Note that every point in the Cartesian plane has two values (hence the term *ordered pair*) associated with it. In the polar coordinate system, each point also has two values associated with it: $r$ and $\theta .$

> FIGURE {fig:CNX_Calc_Figure_11_03_001} src=../../media/CNX_Calc_Figure_11_03_001.jpg
> alt: A point P(x, y) is given in the first quadrant with lines drawn to indicate its x and y values. There is a line from the origin to P(x, y) marked r and this line make an angle θ with the x axis.
> caption: An arbitrary point in the Cartesian plane.

Using right-triangle trigonometry, the following equations are true for the point $P\text{:}$

$\text{cos}\;\theta =\frac{x}{r}\;\text{so}\;x=r\;\text{cos}\;\theta$  {eq:fs-id1167794187190}

$\text{sin}\;\theta =\frac{y}{r}\;\text{so}\;y=r\;\text{sin}\;\theta .$  {eq:fs-id1167794170718}

Furthermore,

${r}^{2}={x}^{2}+{y}^{2}\;\text{and}\;\text{tan}\;\theta =\frac{y}{x}.$  {eq:fs-id1167793821731}

Each point $(x,y)$ in the Cartesian coordinate system can therefore be represented as an ordered pair $(r,\theta )$ in the polar coordinate system. The first coordinate is called the {term:radial coordinate} and the second coordinate is called the {term:angular coordinate}. Every point in the plane can be represented in this form.
Note that the equation $\text{tan}\;\theta =y\text{/}x$ has an infinite number of solutions for any ordered pair $(x,y).$ However, if we restrict the solutions to values between $0$ and $2\pi$ then we can assign a unique solution to the quadrant in which the original point $(x,y)$ is located. Then the corresponding value of *r* is positive, so ${r}^{2}={x}^{2}+{y}^{2}.$

:::note [theorem] Converting Points between Coordinate Systems
Given a point $P$ in the plane with Cartesian coordinates $(x,y)$ and polar coordinates $(r,\theta ),$ the following conversion formulas hold true:

$$ x=r\;\text{cos}\;\theta \;\text{and}\;y=r\;\text{sin}\;\theta , $$  {eq:fs-id1167794066096}

$$ {r}^{2}={x}^{2}+{y}^{2}\;\text{and}\;\text{tan}\;\theta =\frac{y}{x}. $$  {eq:fs-id1167793834620}

These formulas can be used to convert from rectangular to polar or from polar to rectangular coordinates.
:::

:::example {ex:fs-id1167794030722} Converting between Rectangular and Polar Coordinates

:::exercise {fs-id1167794003809} type= 
PROBLEM:
Convert each of the following points into polar coordinates.
a. $(1,1)$
b. $(−3,4)$
c. $(0,3)$
d. $(5\sqrt{3},−5)$
Convert each of the following points into rectangular coordinates.
a. $(3,\pi \text{/}3)$
b. $(2,3\pi \text{/}2)$
c. $(6,−5\pi \text{/}6)$
SOLUTION:
a. Use $x=1$ and $y=1$ in [ref:fs-id1167793834620]:

$\begin{array}{lllllll}\begin{array}{rll}{r}^{2} & = & {x}^{2}+{y}^{2} \\ & = & {1}^{2}+{1}^{2} \\ r & = & \sqrt{2}\end{array} & & & \text{and} & & & \begin{array}{rll}\text{tan}\;\theta & = & \frac{y}{x} \\ & = & \frac{1}{1}=1 \\ \theta & = & \frac{\pi}{4}.\end{array}\end{array}$  {eq:fs-id1167793849839}

Therefore this point can be represented as $(\sqrt{2},\frac{\pi}{4})$ in polar coordinates.
b. Use $x=−3$ and $y=4$ in [ref:fs-id1167793834620]:

$\begin{array}{lllllll}\begin{array}{lll}{r}^{2} & = & {x}^{2}+{y}^{2} \\ & = & {(−3)}^{2}+{(4)}^{2} \\ r & = & 5\end{array} & & & \text{and} & & & \begin{array}{lll}\text{tan}\;\theta & = & \frac{y}{x} \\ & = & -\frac{4}{3} \\ \theta & = & \pi -arctan(\frac{4}{3}) \\ & \approx & 2.21.\end{array}\end{array}$  {eq:fs-id1167793813480}

The point $(-3,4)$ lies in Quadrant $\text{II}$. Subtract the value of the reference angle, $\text{arctan}(\frac{4}{3})$, from $\pi$ to find the radian measure of $\theta$.

Therefore this point can be represented as $(5,2.21)$ in polar coordinates.
c. Use $x=0$ and $y=3$ in [ref:fs-id1167793834620]:

$\begin{array}{lllllll}\begin{array}{rll}{r}^{2} & = & {x}^{2}+{y}^{2} \\ & = & {(3)}^{2}+{(0)}^{2} \\ & = & 9+0 \\ r & = & 3\end{array} & & & \text{and} & & & \begin{array}{rll}\text{tan}\;\theta & = & \frac{y}{x} \\ & = & \frac{3}{0}.\end{array}\end{array}$  {eq:fs-id1167793819715}

Direct application of the second equation leads to division by zero. Graphing the point $(0,3)$ on the rectangular coordinate system reveals that the point is located on the positive *y*-axis. The angle between the positive *x*-axis and the positive *y*-axis is $\frac{\pi}{2}.$ Therefore this point can be represented as $(3,\frac{\pi}{2})$ in polar coordinates.
d. Use $x=5\sqrt{3}$ and $y=−5$ in [ref:fs-id1167793834620]:

$\begin{array}{lllllll}\begin{array}{rll}{r}^{2} & = & {x}^{2}+{y}^{2} \\ & = & {(5\sqrt{3})}^{2}+{(−5)}^{2} \\ & = & 75+25 \\ r & = & 10\end{array} & & & \text{and} & & & \begin{array}{rll}\text{tan}\;\theta & = & \frac{y}{x} \\ & = & \frac{−5}{5\sqrt{3}}=-\frac{\sqrt{3}}{3} \\ \theta & = & -\frac{\pi}{6}.\end{array}\end{array}$  {eq:fs-id1167793878815}

Therefore this point can be represented as $(10,-\frac{\pi}{6})$ in polar coordinates.
e. Use $r=3$ and $\theta =\frac{\pi}{3}$ in [ref:fs-id1167794066096]:

$\begin{array}{lllllll}\begin{array}{rll}x & = & r\;\text{cos}\;\theta \\ & = & 3\;\text{cos}(\frac{\pi}{3}) \\ & = & 3(\frac{1}{2})=\frac{3}{2}\end{array} & & & \text{and} & & & \begin{array}{rll}y & = & r\;\text{sin}\;\theta \\ & = & 3\;\text{sin}(\frac{\pi}{3}) \\ & = & 3(\frac{\sqrt{3}}{2})=\frac{3\sqrt{3}}{2}.\end{array}\end{array}$  {eq:fs-id1167794047098}

Therefore this point can be represented as $(\frac{3}{2},\;\frac{3\sqrt{3}}{2})$ in rectangular coordinates.
f. Use $r=2$ and $\theta =\frac{3\pi}{2}$ in [ref:fs-id1167794066096]:

$\begin{array}{lllllll}\begin{array}{rll}x & = & r\;\text{cos}\;\theta \\ & = & 2\;\text{cos}(\frac{3\pi}{2}) \\ & = & 2(0)=0\end{array} & & & \text{and} & & & \begin{array}{rll}y & = & r\;\text{sin}\;\theta \\ & = & 2\;\text{sin}(\frac{3\pi}{2}) \\ & = & 2(−1)=−2.\end{array}\end{array}$  {eq:fs-id1167794336338}

Therefore this point can be represented as $(0,−2)$ in rectangular coordinates.
g. Use $r=6$ and $\theta =-\frac{5\pi}{6}$ in [ref:fs-id1167794066096]:

$\begin{array}{lllllll}\begin{array}{rll}x & = & r\;\text{cos}\;\theta \\ & = & 6\;\text{cos}(-\frac{5\pi}{6}) \\ & = & 6(-\frac{\sqrt{3}}{2}) \\ & = & −3\sqrt{3}\end{array} & & & \text{and} & & & \begin{array}{rll}y & = & r\;\text{sin}\;\theta \\ & = & 6\;\text{sin}(-\frac{5\pi}{6}) \\ & = & 6(-\frac{1}{2}) \\ & = & −3.\end{array}\end{array}$  {eq:fs-id1167794047981}

Therefore this point can be represented as $(−3\sqrt{3},−3)$ in rectangular coordinates.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793901807} type= 
PROBLEM:
Convert $(−8,−8)$ into polar coordinates and $(4,\frac{2\pi}{3})$ into rectangular coordinates.
SOLUTION:
$(8\sqrt{2},\frac{5\pi}{4})$ and $(−2,2\sqrt{3})$
COMMENTARY: Hint
Use [ref:fs-id1167794066096] and [ref:fs-id1167793834620]. Make sure to check the quadrant when calculating $\theta .$
:::
:::
The polar representation of a point is not unique. For example, the polar coordinates $(2,\frac{\pi}{3})$ and $(2,\frac{7\pi}{3})$ both represent the point $(1,\sqrt{3})$ in the rectangular system. Also, the value of $r$ can be negative. Therefore, the point with polar coordinates $(−2,\frac{4\pi}{3})$ also represents the point $(1,\sqrt{3})$ in the rectangular system, as we can see by using [ref:fs-id1167793834620]:

$\begin{array}{lllllll}\begin{array}{rll}x & = & r\;\text{cos}\;\theta \\ & = & −2\;\text{cos}(\frac{4\pi}{3}) \\ & = & −2(-\frac{1}{2})=1\end{array} & & & \text{and} & & & \begin{array}{rll}y & = & r\;\text{sin}\;\theta \\ & = & −2\;\text{sin}(\frac{4\pi}{3}) \\ & = & −2(-\frac{\sqrt{3}}{2})=\sqrt{3}.\end{array}\end{array}$  {eq:fs-id1167793261943}

Every point in the plane has an infinite number of representations in polar coordinates. However, each point in the plane has only one representation in the rectangular coordinate system.
Note that the polar representation of a point in the plane also has a visual interpretation. In particular, $r$ is the directed distance that the point lies from the origin, and $\theta$ measures the angle that the line segment from the origin to the point makes with the positive $x$-axis. Positive angles are measured in a counterclockwise direction and negative angles are measured in a clockwise direction. The polar coordinate system appears in the following figure.

> FIGURE {fig:CNX_Calc_Figure_11_03_002} src=../../media/CNX_Calc_Figure_11_03_002.jpg
> alt: A series of concentric circles is drawn with spokes indicating different values between 0 and 2π in increments of π/12. The first quadrant starts with 0 where the x axis would be, then the next spoke is marked π/12, then π/6, π/4, π/3, 5π/12, π/2, and so on into the second, third, and fourth quadrants. The polar axis is noted near the former x axis line.
> caption: The polar coordinate system.

The line segment starting from the center of the graph going to the right (called the positive *x*-axis in the Cartesian system) is the {term:polar axis}. The center point is the {term:pole}, or origin, of the coordinate system, and corresponds to $r=0.$ The innermost circle shown in [ref:CNX_Calc_Figure_11_03_002] contains all points a distance of 1 unit from the pole, and is represented by the equation $r=1.$ Then $r=2$ is the set of points 2 units from the pole, and so on. The line segments emanating from the pole correspond to fixed angles. To plot a point in the polar coordinate system, start with the angle. If the angle is positive, then measure the angle from the polar axis in a counterclockwise direction. If it is negative, then measure it clockwise. If the value of $r$ is positive, move that distance along the terminal ray of the angle. If it is negative, move along the ray that is opposite the terminal ray of the given angle.

:::example {ex:fs-id1167794066465} Plotting Points in the Polar Plane

:::exercise {fs-id1167794066467} type= 
PROBLEM:
Plot each of the following points on the polar plane.
a. $(2,\frac{\pi}{4})$
b. $(−3,\frac{2\pi}{3})$
c. $(4,\frac{5\pi}{4})$
SOLUTION:
The three points are plotted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_11_03_003} src=../../media/CNX_Calc_Figure_11_03_003.jpg
> alt: Three points are marked on a polar coordinate plane, specifically (2, π/4) in the first quadrant, (4, 5π/4) in the third quadrant, and (−3, 2π/3) in the fourth quadrant.
> caption: Three points plotted in the polar coordinate system.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794292522} type= 
PROBLEM:
Plot $(4,\frac{5\pi}{3})$ and $(−3,-\frac{7\pi}{2})$ on the polar plane.
SOLUTION:

> IMAGE {img:fs-id1167794039148} src=../../media/CNX_Calc_Figure_11_03_004.jpg
> alt: Two points are marked on a polar coordinate plane, specifically (−3, −7π/2) on the y axis and (4, 5π/3) in the fourth quadrant.

COMMENTARY: Hint
Start with $\theta ,$ then use $r.$
:::
:::

## Polar Curves
Now that we know how to plot points in the polar coordinate system, we can discuss how to plot curves. In the rectangular coordinate system, we can graph a function $y=f(x)$ and create a curve in the Cartesian plane. In a similar fashion, we can graph a curve that is generated by a function $r=f(\theta ).$
The general idea behind graphing a function in polar coordinates is the same as graphing a function in rectangular coordinates. Start with a list of values for the independent variable $(\theta$ in this case) and calculate the corresponding values of the dependent variable $r.$ This process generates a list of ordered pairs, which can be plotted in the polar coordinate system. Finally, connect the points, and take advantage of any patterns that may appear. The function may be periodic, for example, which indicates that only a limited number of values for the independent variable are needed.

:::note [problem-solving] Plotting a Curve in Polar Coordinates
1. Create a table with two columns. The first column is for $\theta ,$ and the second column is for $r.$
2. Create a list of values for $\theta .$
3. Calculate the corresponding $r$ values for each $\theta .$
4. Plot each ordered pair $(r,\theta )$ on the coordinate axes.
5. Connect the points and look for a pattern.
:::

:::note [media-2] 
Watch this [video](http://www.openstax.org/l/20_polarcurves) for more information on sketching polar curves.
:::

:::example {ex:fs-id1167794046199} Graphing a Function in Polar Coordinates

:::exercise {fs-id1167794046201} type= 
PROBLEM:
Graph the curve defined by the function $r=4\;\text{sin}\;\theta .$ Identify the curve and rewrite the equation in rectangular coordinates.
SOLUTION:
Because the function is a multiple of a sine function, it is periodic with period $2\pi ,$ so use values for $\theta$ between 0 and $2\pi .$ The result of steps 1–3 appear in the following table. [ref:CNX_Calc_Figure_11_03_005] shows the graph based on this table.

> TABLE {tab:fs-id1167794052334} cols=5 class=unnumbered irregular
> summary: This table has two columns and 18 rows. The first row is a header row, and it reads from left to right θ and r = 4 sinθ. Below the header row, in the first column, the values read 0, π/6, π/4, π/3, π/2, 2π/3, 3π/4, 5π/6, π, 7π/6, 5π/4, 4π/3, 3π/2, 5π/3, 7π/4, 11π/6, and 2π. In the second column, the values read 0, 2, 2 times the square root of 2, which is approximately equal to 2.8, 2 times the square root of 3, which is approximately equal to 3.4, 4, 2 times the square root of 3, which is approximately equal to 3.4, 2 times the square root of 2, which is approximately equal to 2.8, 2, 0, −2, −2 times the square root of 2, which is approximately equal to −2.8, −2 times the square root of 3, which is approximately equal to −3.4, −4, −2 times the square root of 3, which is approximately equal to −3.4, −2 times the square root of 2, which is approximately equal to −2.8, −2, and 0.

| $\theta$ | $r=4\;\text{sin}\;\theta$ |  | $\theta$ | $r=4\;\text{sin}\;\theta$ |
| 0 | 0 | {rows=9}  | $\pi$ | 0 |
| $\frac{\pi}{6}$ | $2$ | $\frac{7\pi}{6}$ | $−2$ |
| $\frac{\pi}{4}$ | $2\sqrt{2}\approx 2.8$ | $\frac{5\pi}{4}$ | $−2\sqrt{2}\approx −2.8$ |
| $\frac{\pi}{3}$ | $2\sqrt{3}\approx 3.4$ | $\frac{4\pi}{3}$ | $−2\sqrt{3}\approx −3.4$ |
| $\frac{\pi}{2}$ | $4$ | $\frac{3\pi}{2}$ | $-4$ |
| $\frac{2\pi}{3}$ | $2\sqrt{3}\approx 3.4$ | $\frac{5\pi}{3}$ | $−2\sqrt{3}\approx −3.4$ |
| $\frac{3\pi}{4}$ | $2\sqrt{2}\approx 2.8$ | $\frac{7\pi}{4}$ | $−2\sqrt{2}\approx −2.8$ |
| $\frac{5\pi}{6}$ | $2$ | $\frac{11\pi}{6}$ | $−2$ |
|  |  | $2\pi$ | 0 |

> FIGURE {fig:CNX_Calc_Figure_11_03_005} src=../../media/CNX_Calc_Figure_11_03_005.jpg
> alt: On the polar coordinate plane, a circle is drawn with radius 2. It touches the origin, (2 times the square root of 2, π/4), (4, π/2), and (2 times the square root of 2, 3π/4).
> caption: The graph of the function $r=4\;\text{sin}\;\theta$ is a circle.

This is the graph of a circle. The equation $r=4\;\text{sin}\;\theta$ can be converted into rectangular coordinates by first multiplying both sides by $r.$ This gives the equation ${r}^{2}=4r\;\text{sin}\;\theta .$ Next use the facts that ${r}^{2}={x}^{2}+{y}^{2}$ and $y=r\;\text{sin}\;\theta .$ This gives ${x}^{2}+{y}^{2}=4y.$ To put this equation into standard form, subtract $4y$ from both sides of the equation and complete the square:

$\begin{array}{rll}{x}^{2}+{y}^{2}-4y & = & 0 \\ {x}^{2}+({y}^{2}-4y) & = & 0 \\ {x}^{2}+({y}^{2}-4y+4) & = & 0+4 \\ {x}^{2}+{(y-2)}^{2} & = & 4.\end{array}$  {eq:fs-id1167793238277}

This is the equation of a circle with radius 2 and center $(0,2)$ in the rectangular coordinate system.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793248900} type= 
PROBLEM:
Create a graph of the curve defined by the function $r=4+4\;\text{cos}\;\theta .$
SOLUTION:

> IMAGE {img:fs-id1167793249095} src=../../media/CNX_Calc_Figure_11_03_006.jpg
> alt: The graph of r = 4 + 4 cosθ is given. It vaguely looks look a heart tipped on its side with a rounded bottom instead of a pointed one. Specifically, the graph starts at the origin, moves into the second quadrant and increases to a rounded circle-like figure. The graph is symmetric about the x axis, so it continues its rounded circle-like figure, goes into the third quadrant, and comes to a point at the origin.

The name of this shape is a cardioid, which we will study further later in this section.
COMMENTARY: Hint
Follow the problem-solving strategy for creating a graph in polar coordinates.
:::
:::
The graph in [ref:fs-id1167794046199] was that of a circle. The equation of the circle can be transformed into rectangular coordinates using the coordinate transformation formulas in [ref:fs-id1167793834620]. [ref:fs-id1167794047292] gives some more examples of functions for transforming from polar to rectangular coordinates.

:::example {ex:fs-id1167793249073} Transforming Polar Equations to Rectangular Coordinates

:::exercise {fs-id1167793249075} type= 
PROBLEM:
Rewrite each of the following equations in rectangular coordinates and identify the graph.
a. $\theta =\frac{\pi}{3}$
b. $r=3$
c. $r=6\;\text{cos}\;\theta -8\;\text{sin}\;\theta$
SOLUTION:
a. Take the tangent of both sides. This gives $\text{tan}\;\theta =\text{tan}(\pi \text{/}3)=\sqrt{3}.$ Since $\text{tan}\;\theta =y\text{/}x$ we can replace the left-hand side of this equation by $y\text{/}x.$ This gives $y\text{/}x=\sqrt{3},$ which can be rewritten as $y=x\sqrt{3}.$ This is the equation of a straight line passing through the origin with slope $\sqrt{3}.$ In general, any polar equation of the form $\theta =K$ represents a straight line through the pole with slope equal to $\text{tan}\;K.$
b. First, square both sides of the equation. This gives ${r}^{2}=9.$ Next replace ${r}^{2}$ with ${x}^{2}+{y}^{2}.$ This gives the equation ${x}^{2}+{y}^{2}=9,$ which is the equation of a circle centered at the origin with radius 3. In general, any polar equation of the form $r=k$ where *k* is a positive constant represents a circle of radius *k* centered at the origin. (*Note*: when squaring both sides of an equation it is possible to introduce new points unintentionally. This should always be taken into consideration. However, in this case we do not introduce new points. For example, $(−3,\frac{\pi}{3})$ is the same point as $(3,\frac{4\pi}{3}).)$
c. Multiply both sides of the equation by $r.$ This leads to ${r}^{2}=6r\;\text{cos}\;\theta -8r\;\text{sin}\;\theta .$ Next use the formulas

${r}^{2}={x}^{2}+{y}^{2},\;x=r\;\text{cos}\;\theta ,\;y=r\;\text{sin}\;\theta .$  {eq:fs-id1167793238129}

This gives

$\begin{array}{rll}{r}^{2} & = & 6(r\;\text{cos}\;\theta )-8(r\;\text{sin}\;\theta ) \\ {x}^{2}+{y}^{2} & = & 6x-8y.\end{array}$  {eq:fs-id1167793249244}

To put this equation into standard form, first move the variables from the right-hand side of the equation to the left-hand side, then complete the square.

$\begin{array}{rll}{x}^{2}+{y}^{2} & = & 6x-8y \\ {x}^{2}-6x+{y}^{2}+8y & = & 0 \\ ({x}^{2}-6x)+({y}^{2}+8y) & = & 0 \\ ({x}^{2}-6x+9)+({y}^{2}+8y+16) & = & 9+16 \\ {(x-3)}^{2}+{(y+4)}^{2} & = & 25.\end{array}$  {eq:fs-id1167794332637}

This is the equation of a circle with center at $(3,−4)$ and radius 5. Notice that the circle passes through the origin since the center is 5 units away.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794072955} type= 
PROBLEM:
Rewrite the equation $r=\text{sec}\;\theta \;\text{tan}\;\theta$ in rectangular coordinates and identify its graph.
SOLUTION:
$y={x}^{2},$ which is the equation of a parabola opening upward.
COMMENTARY: Hint
Convert to sine and cosine, then multiply both sides by cosine.
:::
:::
We have now seen several examples of drawing graphs of curves defined by {term:polar equations}. A summary of some common curves is given in the tables below. In each equation, *a* and *b* are arbitrary constants.

> FIGURE {fig:CNX_Calc_Figure_11_03_016} src=../../media/CNX_Calc_Figure_11_03_016.jpg
> alt: This table has three columns and 3 rows. The first row is a header row and is given from left to right as name, equation, and example. The second row is Line passing through the pole with slope tan K; θ = K; and a picture of a straight line on the polar coordinate plane with θ = π/3. The third row is Circle; r = a cosθ + b sinθ; and a picture of a circle on the polar coordinate plane with equation r = 2 cos(θ) – 3 sin(θ): the circle touches the origin but has center in the third quadrant.
> caption: 

> FIGURE {fig:CNX_Calc_Figure_11_03_017} src=../../media/CNX_Calc_Figure_11_03_017.jpg
> alt: This table has three columns and 3 rows. The first row is Spiral; r = a + bθ; and a picture of a spiral starting at the origin with equation r = θ/3. The second row is Cardioid; r = a(1 + cosθ), r = a(1 – cosθ), r = a(1 + sinθ), r = a(1 – sinθ); and a picture of a cardioid with equation r = 3(1 + cosθ): the cardioid looks like a heart turned on its side with a rounded bottom instead of a pointed one. The third row is Limaçon; r = a cosθ + b, r = a sinθ + b; and a picture of a limaçon with equation r = 2 + 4 sinθ: the figure looks like a deformed circle with a loop inside of it. The seventh row is Rose; r = a cos(bθ), r = a sin(bθ); and a picture of a rose with equation r = 3 sin(2θ): the rose looks like a flower with four petals, one petal in each quadrant, each with length 3 and reaching to the origin between each petal.
> caption: 

A {term:cardioid} is a special case of a {term:limaçon} (pronounced “lee-mah-son”), in which $a=b$ or $a=\text{−}b.$ The {term:rose} is a very interesting curve. Notice that the graph of $r=3\;\text{sin}\;2\theta$ has four petals. However, the graph of $r=3\;\text{sin}\;3\theta$ has three petals as shown.

> FIGURE {fig:CNX_Calc_Figure_11_03_008} src=../../media/CNX_Calc_Figure_11_03_008.jpg
> alt: A rose with three petals, one in the first quadrant, another in the second quadrant, and the third in both the third and fourth quadrants, each with length 3. Each petal starts and ends at the origin.
> caption: Graph of $r=3\;\text{sin}\;3\theta .$

If the coefficient of $\theta$ is even, the graph has twice as many petals as the coefficient. If the coefficient of $\theta$ is odd, then the number of petals equals the coefficient. You are encouraged to explore why this happens. Even more interesting graphs emerge when the coefficient of $\theta$ is not an integer. For example, if it is rational, then the curve is closed; that is, it eventually ends where it started ([ref:CNX_Calc_Figure_11_03_009](a)). However, if the coefficient is irrational, then the curve never closes ([ref:CNX_Calc_Figure_11_03_009](b)). Although it may appear that the curve is closed, a closer examination reveals that the petals just above the positive *r* axis are slightly thicker. This is because the petal does not quite match up with the starting point.

> FIGURE {fig:CNX_Calc_Figure_11_03_009} src=../../media/CNX_Calc_Figure_11_03_009.jpg
> alt: This figure has two figures. The first is a rose with so many overlapping petals that there are a few patterns that develop, starting with a sharp 10 pointed star in the center and moving out to an increasingly rounded set of petals. The second figure is a rose with even more overlapping petals, so many so that it is impossible to tell what is happening in the center, but on the outer edges are a number of sharply rounded petals.
> caption: Polar rose graphs of functions with (a) rational coefficient and (b) irrational coefficient. Note that the rose in part (b) does not fill the disk of radius 3 centered at the origin, even though it appears to. To see this, just note that for any fixed ray from the origin, there are only a countable number of values of theta for which we get a point on the graph along that ray. What we can say, though, is that for any point in the disk, there are points as close as you please to that point on the given graph.

:::example {ex:fs-id1167794047292} Chapter Opener: Describing a Spiral

:::exercise {fs-id1167794047294} type= 
PROBLEM:
Recall the {index:chambered nautilus} introduced in the chapter opener. This creature displays a spiral when half the outer shell is cut away. It is possible to describe a spiral using rectangular coordinates. [ref:CNX_Calc_Figure_11_03_010] shows a spiral in rectangular coordinates. How can we describe this curve mathematically?

> FIGURE {fig:CNX_Calc_Figure_11_03_010} src=../../media/CNX_Calc_Figure_11_03_010.jpg
> alt: A spiral starting at the origin and continually increasing its radius to a point P(x, y).
> caption: How can we describe a spiral graph mathematically?

SOLUTION:
As the point *P* travels around the spiral in a counterclockwise direction, its distance *d* from the origin increases. Assume that the distance *d* is a constant multiple *k* of the angle $\theta$ that the line segment *OP* makes with the positive *r*-axis. Therefore $d(P,O)=k\theta ,$ where $O$ is the origin. Now use the distance formula and some trigonometry:

$\begin{array}{rll}d(P,O) & = & k\theta \\ \sqrt{{(x-0)}^{2}+{(y-0)}^{2}} & = & k\;\text{arctan}(\frac{y}{x}) \\ \sqrt{{x}^{2}+{y}^{2}} & = & k\;\text{arctan}(\frac{y}{x}) \\ \text{arctan}(\frac{y}{x}) & = & \frac{\sqrt{{x}^{2}+{y}^{2}}}{k} \\ y & = & x\;\text{tan}(\frac{\sqrt{{x}^{2}+{y}^{2}}}{k}).\end{array}$  {eq:fs-id1167794333799}

Although this equation describes the spiral, it is not possible to solve it directly for either *x* or *y*. However, if we use polar coordinates, the equation becomes much simpler. In particular, $d(P,O)=r,$ and $\theta$ is the second coordinate. Therefore the equation for the spiral becomes $r=k\theta .$ Note that when $\theta =0$ we also have $r=0,$ so the spiral emanates from the origin. We can remove this restriction by adding a constant to the equation. Then the equation for the spiral becomes $r=a+k\theta$ for arbitrary constants $a$ and $k.$ This is referred to as an {index:Archimedean spiral}, after the Greek mathematician Archimedes.
Another type of spiral is the logarithmic spiral, described by the function $r=a\cdot {b}^{\theta}.$ A graph of the function $r=1.2({1.25}^{\theta})$ is given in [ref:CNX_Calc_Figure_11_03_011]. This spiral describes the shell shape of the chambered nautilus.

> FIGURE {fig:CNX_Calc_Figure_11_03_011} src=../../media/CNX_Calc_Figure_11_03_011.jpg
> alt: This figure has two figures. The first is a shell with many chambers that increase in size from the center out. The second is a spiral with equation r = 1.2(1.25θ).
> caption: A logarithmic spiral is similar to the shape of the chambered nautilus shell. (credit: modification of work by Jitze Couperus, Flickr)

:::
:::
Suppose a curve is described in the polar coordinate system via the function $r=f(\theta ).$ Since we have conversion formulas from polar to rectangular coordinates given by

$\begin{array}{l}x=r\;\text{cos}\;\theta \\ y=r\;\text{sin}\;\theta ,\end{array}$  {eq:fs-id1167793262857}

it is possible to rewrite these formulas using the function

$\begin{array}{l}x=f(\theta )\;\text{cos}\;\theta \\ y=f(\theta )\;\text{sin}\;\theta .\end{array}$  {eq:fs-id1167794329300}

This step gives a parameterization of the curve in rectangular coordinates using $\theta$ as the parameter. For example, the spiral formula $r=a+b\theta$ from [ref:CNX_Calc_Figure_11_03_016] becomes

$\begin{array}{l}x=(a+b\theta )\;\text{cos}\;\theta \\ y=(a+b\theta )\;\text{sin}\;\theta .\end{array}$  {eq:fs-id1167794052142}

Letting $\theta$ range from $\text{−}\infty$ to $\infty$ generates the entire spiral.

## Symmetry in Polar Coordinates
When studying {index:symmetry} of functions in rectangular coordinates (i.e., in the form $y=f(x)),$ we talk about symmetry with respect to the *y*-axis and symmetry with respect to the origin. In particular, if $f(\text{−}x)=f(x)$ for all $x$ in the domain of $f,$ then $f$ is an even function and its graph is symmetric with respect to the *y*-axis. If $f(\text{−}x)=\text{−}f(x)$ for all $x$ in the domain of $f,$ then $f$ is an odd function and its graph is symmetric with respect to the origin. By determining which types of symmetry a graph exhibits, we can learn more about the shape and appearance of the graph. Symmetry can also reveal other properties of the function that generates the graph. Symmetry in polar curves works in a similar fashion.

:::note [theorem] Symmetry in Polar Curves and Equations
Consider a curve generated by the function $r=f(\theta )$ in polar coordinates.
1. The curve is symmetric about the polar axis if for every point $(r,\theta )$ on the graph, the point $(r,\text{−}\theta )$ is also on the graph. Similarly, the equation $r=f(\theta )$ is unchanged by replacing $\theta$ with $\text{−}\theta .$
2. The curve is symmetric about the pole if for every point $(r,\theta )$ on the graph, the point $(r,\pi +\theta )$ is also on the graph. Similarly, the equation $r=f(\theta )$ is unchanged when replacing $r$ with $\text{−}r,$ or $\theta$ with $\pi +\theta .$
3. The curve is symmetric about the vertical line $\theta =\frac{\pi}{2}$ if for every point $(r,\theta )$ on the graph, the point $(r,\pi -\theta )$ is also on the graph. Similarly, the equation $r=f(\theta )$ is unchanged when $\theta$ is replaced by $\pi -\theta .$
:::
The following table shows examples of each type of symmetry.

> IMAGE {img:fs-id1167793982856} src=../../media/CNX_Calc_Figure_11_03_018.jpg
> alt: This table has three rows and two columns. The first row reads “Symmetry with respect to the polar axis: For every point (r, θ) on the graph, there is also a point reflected directly across the horizontal (polar) axis” and it has a picture of a cardioid with equation r = 2 – 2 cosθ: this cardioid has points marked (r, θ) and (r, −θ), which are symmetric about the x axis, and the entire cardioid is symmetric about the x axis. The second row reads “Symmetry with respect to the pole: For every point (r, θ) on the graph, there is also a point on the graph that is reflected through the pole as well” and it has a picture of a skewed infinity symbol with equation r2 = 9 cos(2θ – π/2): this figure has points marked (r, θ) and (−r, θ), which are symmetric about the pole, and the entire figure is symmetric about the pole. The third row reads “Symmetry with respect to the vertical line θ = π/2: For every point (r, θ) on the graph, there is also a point reflected directly across the vertical axis” and there is a picture of a cardioid with equation r = 2 – 2 sinθ: this figure has points marked (r, θ) and (r, π − θ), which are symmetric about the vertical line θ = π/2, and the entire cardioid is symmetric about the vertical line θ = π/2.

:::example {ex:fs-id1167794099362} Using Symmetry to Graph a Polar Equation

:::exercise {fs-id1167794099365} type= 
PROBLEM:
Find the symmetry of the rose defined by the equation $r=3\;\text{sin}(2\theta )$ and create a graph.
SOLUTION:
Suppose the point $(r,\theta )$ is on the graph of $r=3\;\text{sin}(2\theta ).$
1. To test for symmetry about the polar axis, first try replacing $\theta$ with $\text{−}\theta .$ This gives $r=3\;\text{sin}(2(\text{−}\theta ))=−3\;\text{sin}(2\theta ).$ Since this changes the original equation, this test is not satisfied. However, returning to the original equation and replacing $r$ with $\text{−}r$ and $\theta$ with $\pi -\theta$ yields

$\begin{array}{l} \\ \text{−}r=3\;\text{sin}(2(\pi -\theta )) \\ \text{−}r=3\;\text{sin}(2\pi -2\theta ) \\ \text{−}r=3\;\text{sin}(−2\theta ) \\ \text{−}r=−3\;\text{sin}\;2\theta .\end{array}$  {eq:fs-id1167794332476}

Multiplying both sides of this equation by $−1$ gives $r=3\;\text{sin}\;2\theta ,$ which is the original equation. This demonstrates that the graph is symmetric with respect to the polar axis.
2. To test for symmetry with respect to the pole, first replace $r$ with $\text{−}r,$ which yields $\text{−}r=3\;\text{sin}(2\theta ).$ Multiplying both sides by −1 gives $r=−3\;\text{sin}(2\theta ),$ which does not agree with the original equation. Therefore the equation does not pass the test for this symmetry. However, returning to the original equation and replacing $\theta$ with $\theta +\pi$ gives

$\begin{array}{rl}r & =3\;\text{sin}(2(\theta +\pi )) \\ & =3\;\text{sin}(2\theta +2\pi ) \\ & =3(\text{sin}\;2\theta \;\text{cos}\;2\pi +\text{cos}\;2\theta \;\text{sin}\;2\pi ) \\ & =3\;\text{sin}\;2\theta .\end{array}$  {eq:fs-id1167793252278}

Since this agrees with the original equation, the graph is symmetric about the pole.
3. To test for symmetry with respect to the vertical line $\theta =\frac{\pi}{2},$ first replace both $r$ with $\text{−}r$ and $\theta$ with $\text{−}\theta .$

$\begin{array}{l} \\ \text{−}r=3\;\text{sin}(2(\text{−}\theta )) \\ \text{−}r=3\;\text{sin}(−2\theta ) \\ \text{−}r=−3\;\text{sin}\;2\theta .\end{array}$  {eq:fs-id1167794136442}

Multiplying both sides of this equation by $−1$ gives $r=3\;\text{sin}\;2\theta ,$ which is the original equation. Therefore the graph is symmetric about the vertical line $\theta =\frac{\pi}{2}.$
This graph has symmetry with respect to the polar axis, the origin, and the vertical line going through the pole. To graph the function, tabulate values of $\theta$ between 0 and $\pi \text{/}2$ and then reflect the resulting graph.

> TABLE {tab:fs-id1167793260210} cols=2 class=unnumbered
> summary: This table has two columns and six rows. The first row is a header row, and it reads from left to right θ and r. Below the header row, in the first column, the values read 0, π/6, π/4, π/3, and π/2. In the second column, the values read 0, (3 times the square root of 3) all divided by 2, which is approximately equal to 2.6, 3, (3 times the square root of 3) all divided by 2, which is approximately equal to 2.6, and 0.

| $\theta$ | $r$ |
| --- | --- |
| $0$ | $0$ |
| $\frac{\pi}{6}$ | $\frac{3\sqrt{3}}{2}\approx 2.6$ |
| $\frac{\pi}{4}$ | $3$ |
| $\frac{\pi}{3}$ | $\frac{3\sqrt{3}}{2}\approx 2.6$ |
| $\frac{\pi}{2}$ | $0$ |

This gives one petal of the rose, as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_11_03_013} src=../../media/CNX_Calc_Figure_11_03_013.jpg
> alt: A single petal is graphed with equation r = 3 sin(2θ) for 0 ≤ θ ≤ π/2. It starts at the origin and reaches a maximum distance from the origin of 3.
> caption: The graph of the equation between $\theta =0$ and $\theta =\pi \text{/}2.$

Reflecting this image into the other three quadrants gives the entire graph as shown.

> FIGURE {fig:CNX_Calc_Figure_11_03_014} src=../../media/CNX_Calc_Figure_11_03_014.jpg
> alt: A four-petaled rose is graphed with equation r = 3 sin(2θ). Each petal starts at the origin and reaches a maximum distance from the origin of 3.
> caption: The entire graph of the equation is called a four-petaled rose.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794202048} type= 
PROBLEM:
Determine the symmetry of the graph determined by the equation $r=2\;\text{cos}(3\theta )$ and create a graph.
SOLUTION:
Symmetric with respect to the polar axis.

> IMAGE {img:fs-id1167794324534} src=../../media/CNX_Calc_Figure_11_03_015.jpg
> alt: A three-petaled rose is graphed with equation r = 2 cos(3θ). Each petal starts at the origin and reaches a maximum distance from the origin of 2.

COMMENTARY: Hint
Use [ref:fs-id1167794226648].
:::
:::

## Key Concepts {section:key-concepts}
- The polar coordinate system provides an alternative way to locate points in the plane.
- Convert points between rectangular and polar coordinates using the formulas

$x=r\;\text{cos}\;\theta \;\text{and}\;y=r\;\text{sin}\;\theta$  {eq:fs-id1167794324587}

and

$r=\sqrt{{x}^{2}+{y}^{2}}\;\text{and}\;\text{tan}\;\theta =\frac{y}{x}.$  {eq:fs-id1167794324627}

- To sketch a polar curve from a given polar function, make a table of values and take advantage of periodic properties.
- Use the conversion formulas to convert equations between rectangular and polar coordinates.
- Identify symmetry in polar curves, which can occur through the pole, the horizontal axis, or the vertical axis.

##  {section:section-exercises}
In the following exercises, plot the point whose polar coordinates are given by first constructing the angle $\theta$ and then marking off the distance *r* along the ray.

:::exercise {fs-id1167793219227} type= 
PROBLEM:
$(3,\frac{\pi}{6})$
SOLUTION:

> IMAGE {img:fs-id1167793219259} src=../../media/CNX_Calc_Figure_11_03_201.jpg
> alt: On the polar coordinate plane, a ray is drawn from the origin marking π/6 and a point is drawn when this line crosses the circle with radius 3.

:::

:::exercise {fs-id1167793219273} type= 
PROBLEM:
$(−2,\frac{5\pi}{3})$
:::

:::exercise {fs-id1167793219322} type= 
PROBLEM:
$(0,\frac{7\pi}{6})$
SOLUTION:

> IMAGE {img:fs-id1167793251248} src=../../media/CNX_Calc_Figure_11_03_203.jpg
> alt: On the polar coordinate plane, a ray is drawn from the origin marking 7π/6 and a point is drawn when this line crosses the circle with radius 0, that is, it marks the origin.

:::

:::exercise {fs-id1167793251262} type= 
PROBLEM:
$(−4,\frac{3\pi}{4})$
:::

:::exercise {fs-id1167793251311} type= 
PROBLEM:
$(1,\frac{\pi}{4})$
SOLUTION:

> IMAGE {img:fs-id1167793251343} src=../../media/CNX_Calc_Figure_11_03_205.jpg
> alt: On the polar coordinate plane, a ray is drawn from the origin marking π/4 and a point is drawn when this line crosses the circle with radius 1.

:::

:::exercise {fs-id1167793251357} type= 
PROBLEM:
$(2,\frac{5\pi}{6})$
:::

:::exercise {fs-id1167793237871} type= 
PROBLEM:
$(1,\frac{\pi}{2})$
SOLUTION:

> IMAGE {img:fs-id1167793237902} src=../../media/CNX_Calc_Figure_11_03_207.jpg
> alt: On the polar coordinate plane, a ray is drawn from the origin marking π/2 and a point is drawn when this line crosses the circle with radius 1.

:::
For the following exercises, consider the polar graph below. Give two sets of polar coordinates for each point.

> IMAGE {img:fs-id1167793237924} src=../../media/CNX_Calc_Figure_11_03_208.jpg
> alt: The polar coordinate plane is divided into 12 pies. Point A is drawn on the first circle on the first spoke above the θ = 0 line in the first quadrant. Point B is drawn in the fourth quadrant on the third circle and the second spoke below the θ = 0 line. Point C is drawn on the θ = π line on the third circle. Point D is drawn on the fourth circle on the first spoke below the θ = π line.

:::exercise {fs-id1167793237937} type= 
PROBLEM:
Coordinates of point *A*.
:::

:::exercise {fs-id1167794327485} type= 
PROBLEM:
Coordinates of point *B*.
SOLUTION:
$B\begin{array}{ll}(3,\frac{\text{−}\pi}{3}) & B(−3,\frac{2\pi}{3})\end{array}$
:::

:::exercise {fs-id1167794327560} type= 
PROBLEM:
Coordinates of point *C*.
:::

:::exercise {fs-id1167794327626} type= 
PROBLEM:
Coordinates of point *D*.
SOLUTION:
$D(5,\frac{7\pi}{6})D(−5,\frac{\pi}{6})$
:::
For the following exercises, the rectangular coordinates of a point are given. Find two sets of polar coordinates for the point in $(0,2\pi ].$ Round to three decimal places.

:::exercise {fs-id1167794200105} type= 
PROBLEM:
$(2,\;2)$
:::

:::exercise {fs-id1167794200191} type= 
PROBLEM:
$(3,−4)$
SOLUTION:
$(5,5.356)(-5,2.214)$
:::

:::exercise {fs-id1167794200263} type= 
PROBLEM:
$(8,\;15)$
:::

:::exercise {fs-id1167794283037} type= 
PROBLEM:
$(−6,\;8)$
SOLUTION:
$(10,2.214)(-10,5.356)$
:::

:::exercise {fs-id1167794283101} type= 
PROBLEM:
$(4,\;3)$
:::

:::exercise {fs-id1167794283165} type= 
PROBLEM:
$(3,\text{−}\sqrt{3})$
SOLUTION:
$(2\sqrt{3},\frac{11\pi}{6})(−2\sqrt{3},\frac{5\pi}{6})$
:::
For the following exercises, find rectangular coordinates for the given point in polar coordinates.

:::exercise {fs-id1167793244427} type= 
PROBLEM:
$(2,\frac{5\pi}{4})$
:::

:::exercise {fs-id1167793244494} type= 
PROBLEM:
$(−2,\frac{\pi}{6})$
SOLUTION:
$\left(\begin{array}{ll}\text{−}\sqrt{3}, & −1\end{array}\right)$
:::

:::exercise {fs-id1167793244555} type= 
PROBLEM:
$(5,\frac{\pi}{3})$
:::

:::exercise {fs-id1167793244623} type= 
PROBLEM:
$(1,\frac{7\pi}{6})$
SOLUTION:
$\left(\begin{array}{ll}-\frac{\sqrt{3}}{2}, & \frac{−1}{2}\end{array}\right)$
:::

:::exercise {fs-id1167794172656} type= 
PROBLEM:
$(−3,\frac{3\pi}{4})$
:::

:::exercise {fs-id1167794172732} type= 
PROBLEM:
$(0,\frac{\pi}{2})$
SOLUTION:
$\left(\begin{array}{ll}0, & 0\end{array}\right)$
:::

:::exercise {fs-id1167794172789} type= 
PROBLEM:
$(−4.5,6.5)$
:::
For the following exercises, determine whether the graphs of the polar equation are symmetric with respect to the $x$-axis, the $y$-axis, or the origin.

:::exercise {fs-id1167793293219} type= 
PROBLEM:
$r=3\;\text{sin}(2\theta )$
SOLUTION:
Symmetry with respect to the *x*-axis, *y*-axis, and origin.
:::

:::exercise {fs-id1167793293267} type= 
PROBLEM:
${r}^{2}=9\;\text{cos}\;\theta$
:::

:::exercise {fs-id1167793293309} type= 
PROBLEM:
$r=\text{cos}(\frac{\theta}{5})$
SOLUTION:
Symmetric with respect to *x*-axis only.
:::

:::exercise {fs-id1167793293350} type= 
PROBLEM:
$r=2\;\text{sec}\;\theta$
:::

:::exercise {fs-id1167793293383} type= 
PROBLEM:
$r=1+\text{cos}\;\theta$
SOLUTION:
Symmetry with respect to *x*-axis only.
:::
For the following exercises, describe the graph of each polar equation. Confirm each description by converting into a rectangular equation.

:::exercise {fs-id1167793293423} type= 
PROBLEM:
$r=3$
:::

:::exercise {fs-id1167793293447} type= 
PROBLEM:
$\theta =\frac{\pi}{4}$
SOLUTION:
Line $y=x$
:::

:::exercise {fs-id1167793234424} type= 
PROBLEM:
$r=\text{sec}\;\theta$
:::

:::exercise {fs-id1167793234457} type= 
PROBLEM:
$r=\text{csc}\;\theta$
SOLUTION:
$y=1$
:::
For the following exercises, convert the rectangular equation to polar form and sketch its graph.

:::exercise {fs-id1167793234494} type= 
PROBLEM:
${x}^{2}+{y}^{2}=16$
:::

:::exercise {fs-id1167793234555} type= 
PROBLEM:
${x}^{2}-{y}^{2}=16$
SOLUTION:
Hyperbola; polar form ${r}^{2}\text{cos}(2\theta )=16$ or ${r}^{2}=16\;\text{sec}\;(2\theta ).$

> IMAGE {img:fs-id1167793234636} src=../../media/CNX_Calc_Figure_11_03_210.jpg
> alt: A hyperbola with vertices at (−4, 0) and (4, 0), the first pointing out into quadrants II and III and the second pointing out into quadrants I and IV.

:::

:::exercise {fs-id1167793234650} type= 
PROBLEM:
$x=8$
:::
For the following exercises, convert the rectangular equation to polar form and sketch its graph.

:::exercise {fs-id1167793287522} type= 
PROBLEM:
$3x-y=2$
SOLUTION:
$r=\frac{2}{3\;\text{cos}\;\theta -\text{sin}\;\theta}$

> IMAGE {img:fs-id1167793287574} src=../../media/CNX_Calc_Figure_11_03_212.jpg
> alt: A straight line with slope 3 and y intercept −2.

:::

:::exercise {fs-id1167793287587} type= 
PROBLEM:
${y}^{2}=4x$
:::
For the following exercises, convert the polar equation to rectangular form and sketch its graph.

:::exercise {fs-id1167793287663} type= 
PROBLEM:
$r=4\;\text{sin}\;\theta$
SOLUTION:
${x}^{2}+{y}^{2}=4y$

> IMAGE {img:fs-id1167793287711} src=../../media/CNX_Calc_Figure_11_03_214.jpg
> alt: A circle of radius 2 with center at (2, π/2).

:::

:::exercise {fs-id1167793287724} type= 
PROBLEM:
$r=6\;\text{cos}\;\theta$
:::

:::exercise {fs-id1167794200385} type= 
PROBLEM:
$r=\theta$
SOLUTION:
$x\;\text{tan}\sqrt{{x}^{2}+{y}^{2}}=y$

> IMAGE {img:fs-id1167794200436} src=../../media/CNX_Calc_Figure_11_03_216.jpg
> alt: A spiral starting at the origin and crossing θ = π/2 between 1 and 2, θ = π between 3 and 4, θ = 3π/2 between 4 and 5, θ = 0 between 6 and 7, θ = π/2 between 7 and 8, and θ = π between 9 and 10.

:::

:::exercise {fs-id1167794200448} type= 
PROBLEM:
$r=\text{cot}\;\theta \;\text{csc}\;\theta$
:::
For the following exercises, sketch a graph of the polar equation and identify any symmetry.

:::exercise {fs-id1167794200506} type= 
PROBLEM:
$r=1+\text{sin}\;\theta$
SOLUTION:

> IMAGE {img:fs-id1167794200533} src=../../media/CNX_Calc_Figure_11_03_218.jpg
> alt: A cardioid with the upper heart part at the origin and the rest of the cardioid oriented up.

*y*-axis symmetry
:::

:::exercise {fs-id1167794200555} type= 
PROBLEM:
$r=3-2\;\text{cos}\;\theta$
:::

:::exercise {fs-id1167794200606} type= 
PROBLEM:
$r=2-2\;\text{sin}\;\theta$
SOLUTION:

> IMAGE {img:fs-id1167793245564} src=../../media/CNX_Calc_Figure_11_03_220.jpg
> alt: A cardioid with the upper heart part at the origin and the rest of the cardioid oriented down.

*y*-axis symmetry
:::

:::exercise {fs-id1167793245586} type= 
PROBLEM:
$r=5-4\;\text{sin}\;\theta$
:::

:::exercise {fs-id1167793245637} type= 
PROBLEM:
$r=3\;\text{cos}(2\theta )$
SOLUTION:

> IMAGE {img:fs-id1167793245672} src=../../media/CNX_Calc_Figure_11_03_222.jpg
> alt: A rose with four petals that reach their furthest extent from the origin at θ = 0, π/2, π, and 3π/2.

*x*- and *y*-axis symmetry and symmetry about the pole
:::

:::exercise {fs-id1167793245699} type= 
PROBLEM:
$r=3\;\text{sin}(2\theta )$
:::

:::exercise {fs-id1167793245760} type= 
PROBLEM:
$r=2\;\text{cos}(3\theta )$
SOLUTION:

> IMAGE {img:fs-id1167793245795} src=../../media/CNX_Calc_Figure_11_03_224.jpg
> alt: A rose with three petals that reach their furthest extent from the origin at θ = 0, 2π/3, and 4π/3.

*x*-axis symmetry
:::

:::exercise {fs-id1167793245816} type= 
PROBLEM:
$r=3\;\text{cos}(\frac{\theta}{2})$
:::

:::exercise {fs-id1167793299532} type= 
PROBLEM:
${r}^{2}=4\;\text{cos}(2\theta )$
SOLUTION:

> IMAGE {img:fs-id1167793299570} src=../../media/CNX_Calc_Figure_11_03_226.jpg
> alt: The infinity symbol with the crossing point at the origin and with the furthest extent of the two petals being at θ = 0 and π.

*x*- and *y*-axis symmetry and symmetry about the pole
:::

:::exercise {fs-id1167793299597} type= 
PROBLEM:
${r}^{2}=4\;\text{sin}\;\theta$
:::

:::exercise {fs-id1167793299653} type= 
PROBLEM:
$r=2\theta$
SOLUTION:

> IMAGE {img:fs-id1167793299679} src=../../media/CNX_Calc_Figure_11_03_228.jpg
> alt: A spiral that starts at the origin crossing the line θ = π/2 between 3 and 4, θ = π between 6 and 7, θ = 3π/2 between 9 and 10, θ = 0 between 12 and 13, θ = π/2 between 15 and 16, and θ = π between 18 and 19.

no symmetry
:::

:::exercise {fs-id1167793299694} type= 
PROBLEM:
**[T]** The graph of $r=2\;\text{cos}(2\theta )\text{sec}(\theta ).$ is called a *strophoid.* Use a graphing utility to sketch the graph, and, from the graph, determine the asymptote.
:::

:::exercise {fs-id1167793299784} type= 
PROBLEM:
**[T]** Use a graphing utility and sketch the graph of $r=\frac{6}{2\;\text{sin}\;\theta -3\;\text{cos}\;\theta}.$
SOLUTION:

> IMAGE {img:fs-id1167793299829} src=../../media/CNX_Calc_Figure_11_03_230.jpg
> alt: A line that crosses the y axis at roughly 3 and has slope roughly 3/2.

a line
:::

:::exercise {fs-id1167793299845} type= 
PROBLEM:
**[T]** Use a graphing utility to graph $r=\frac{1}{1-\text{cos}\;\theta}.$
:::

:::exercise {fs-id1167793279401} type= 
PROBLEM:
**[T]** Use technology to graph $r={e}^{\text{sin}(\theta )}-2\;\text{cos}(4\theta ).$
SOLUTION:

> IMAGE {img:fs-id1167793279464} src=../../media/CNX_Calc_Figure_11_03_232.jpg
> alt: A geometric shape that resembles a butterfly with larger wings in the first and second quadrants, smaller wings in the third and fourth quadrants, a body along the θ = π/2 line and legs along the θ = 0 and π lines.

:::

:::exercise {fs-id1167793279477} type= 
PROBLEM:
**[T]** Use technology to plot $r=\text{sin}(\frac{3\theta}{7})$ (use the interval $0\le \theta \le 14\pi ).$
:::

:::exercise {fs-id1167793279556} type= 
PROBLEM:
Without using technology, sketch the polar curve $\theta =\frac{2\pi}{3}.$
SOLUTION:

> IMAGE {img:fs-id1167793279587} src=../../media/CNX_Calc_Figure_11_03_234.jpg
> alt: A line with θ = 120°.

:::

:::exercise {fs-id1167793279600} type= 
PROBLEM:
**[T]** Use a graphing utility to plot $r=\theta \;\text{sin}\;\theta$ for $\text{−}\pi \le \theta \le \pi .$
:::

:::exercise {fs-id1167793279662} type= 
PROBLEM:
**[T]** Use technology to plot $r={e}^{−0.1\theta}$ for $−10\le \theta \le 10.$
SOLUTION:

> IMAGE {img:fs-id1167793279711} src=../../media/CNX_Calc_Figure_11_03_236.jpg
> alt: A spiral that starts in the third quadrant.

:::

:::exercise {fs-id1167793279725} type= 
PROBLEM:
**[T]** There is a curve known as the “*Black Hole*.” Use technology to plot $r={e}^{−0.01\theta}$ for $−100\le \theta \le 100.$
:::

:::exercise {fs-id1167794188292} type= 
PROBLEM:
**[T]** Use the results of the preceding two problems to explore the graphs of $r={e}^{−0.001\theta}$ and $r={e}^{−0.0001\theta}$ for $|\theta |>100.$
SOLUTION:
Answers vary. One possibility is the spiral lines become closer together and the total number of spirals increases.
:::

## Glossary
- {def} **angular coordinate**: $\theta$ the angle formed by a line segment connecting the origin to a point in the polar coordinate system with the positive radial (*x*) axis, measured counterclockwise
- {def} **cardioid**: a plane curve traced by a point on the perimeter of a circle that is rolling around a fixed circle of the same radius; the equation of a cardioid is $r=a(1+\text{sin}\;\theta )$ or $r=a(1+\text{cos}\;\theta )$
- {def} **limaçon**: the graph of the equation $r=a+b\;\text{sin}\;\theta$ or $r=a+b\;\text{cos}\;\theta .$ If $a=b$ then the graph is a cardioid
- {def} **polar axis**: the horizontal axis in the polar coordinate system corresponding to $r\ge 0$
- {def} **polar coordinate system**: a system for locating points in the plane. The coordinates are $r,$ the radial coordinate, and $\theta ,$ the angular coordinate
- {def} **polar equation**: an equation or function relating the radial coordinate to the angular coordinate in the polar coordinate system
- {def} **pole**: the central point of the polar coordinate system, equivalent to the origin of a Cartesian system
- {def} **radial coordinate**: $r$ the coordinate in the polar coordinate system that measures the distance from a point in the plane to the pole
- {def} **rose**: graph of the polar equation $r=a\;\text{cos}\;2\theta$ or $r=a\;\text{sin}\;2\theta$ for a positive constant *a*
- {def} **space-filling curve**: a curve that completely occupies a two-dimensional subset of the real plane

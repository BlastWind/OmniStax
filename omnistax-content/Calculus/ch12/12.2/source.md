# Vectors in Three Dimensions

## Learning Objectives {section:learning-objectives}
- Describe three-dimensional space mathematically.
- Locate points in space using coordinates.
- Write the distance formula in three dimensions.
- Write the equations for simple planes and spheres.
- Perform vector operations in ${\mathbb{R}}^{3}.$

Vectors are useful tools for solving two-dimensional problems. Life, however, happens in three dimensions. To expand the use of vectors to more realistic applications, it is necessary to create a framework for describing three-dimensional space. For example, although a two-dimensional map is a useful tool for navigating from one place to another, in some cases the topography of the land is important. Does your planned route go through the mountains? Do you have to cross a river? To appreciate fully the impact of these geographic features, you must use three dimensions. This section presents a natural extension of the two-dimensional Cartesian coordinate plane into three dimensions.

## Three-Dimensional Coordinate Systems
As we have learned, the two-dimensional rectangular coordinate system contains two perpendicular axes: the horizontal *x*-axis and the vertical *y*-axis. We can add a third dimension, the *z*-axis, which is perpendicular to both the *x*-axis and the *y*-axis. We call this system the three-dimensional rectangular coordinate system. It represents the three dimensions we encounter in real life.

:::note [definition] Definition
The {term:three-dimensional rectangular coordinate system} consists of three perpendicular axes: the *x*-axis, the *y*-axis, the *z*-axis, and an origin at the point of intersection (0) of the axes. Because each axis is a number line representing all real numbers in $\mathbb{R},$ the three-dimensional system is often denoted by ${\mathbb{R}}^{3}.$
:::
In [ref:CNX_Calc_Figure_12_02_001](a), the positive *z*-axis is shown above the plane containing the *x*- and *y*-axes. The positive *x*-axis appears to the left and the positive *y*-axis is to the right. A natural question to ask is: How was arrangement determined? The system displayed follows the {term:right-hand rule}. If we take our right hand and align the fingers with the positive *x*-axis, then curl the fingers so they point in the direction of the positive *y*-axis, our thumb points in the direction of the positive *z*-axis. In this text, we always work with coordinate systems set up in accordance with the right-hand rule. Some systems do follow a left-hand rule, but the right-hand rule is considered the standard representation.

> FIGURE {fig:CNX_Calc_Figure_12_02_001} src=../../media/CNX_Calc_Figure_12_02_001.jpg
> alt: This figure has two images. The first is a 3-dimensional coordinate system. The x-axis is forward, the y-axis is horizontal to the left and right, and the z-axis is vertical. The second image is the 3-dimensional coordinate system axes with a right hand. The thumb is pointing towards positive z-axis, with the fingers wrapping around the z-axis from the positive x-axis to the positive y-axis.
> caption: (a) We can extend the two-dimensional rectangular coordinate system by adding a third axis, the *z*-axis, that is perpendicular to both the *x*-axis and the *y*-axis. (b) The right-hand rule is used to determine the placement of the coordinate axes in the standard Cartesian plane.

In two dimensions, we describe a point in the plane with the coordinates $(x,y).$ Each coordinate describes how the point aligns with the corresponding axis. In three dimensions, a new coordinate, $z,$ is appended to indicate alignment with the *z*-axis: $(x,y,z).$ A point in space is identified by all three coordinates ([ref:CNX_Calc_Figure_12_02_002]). To plot the point $(x,y,z),$ go *x* units along the *x*-axis, then $y$ units in the direction of the *y*-axis, then $z$ units in the direction of the *z*-axis.

> FIGURE {fig:CNX_Calc_Figure_12_02_002} src=../../media/CNX_Calc_Figure_12_02_002.jpg
> alt: This figure is the positive octant of the 3-dimensional coordinate system. In the first octant there is a rectangular solid drawn with broken lines. One corner is labeled (x, y, z). The height of the box is labeled “z units,” the width is labeled “x units” and the length is labeled “y units.”
> caption: To plot the point $(x,y,z)$ go $x$ units along the *x*-axis, then $y$ units in the direction of the *y*-axis, then $z$ units in the direction of the *z*-axis.

:::example {ex:fs-id1163723995023} Locating Points in Space

:::exercise {fs-id1163723884318} type= 
PROBLEM:
Sketch the point $(1,−2,3)$ in three-dimensional space.
SOLUTION:
To sketch a point, start by sketching three sides of a rectangular prism along the coordinate axes: one unit in the positive $x$ direction, $2$ units in the negative $y$ direction, and $3$ units in the positive $z$ direction. Complete the prism to plot the point ([ref:CNX_Calc_Figure_12_02_003]).

> FIGURE {fig:CNX_Calc_Figure_12_02_003} src=../../media/CNX_Calc_Figure_12_02_003.jpg
> alt: This figure is the 3-dimensional coordinate system. In the fourth octant there is a rectangular solid drawn. One corner is labeled (1, -2, 3).
> caption: Sketching the point $(1,−2,3).$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724072483} type= 
PROBLEM:
Sketch the point $(−2,3,−1)$ in three-dimensional space.
SOLUTION:

> IMAGE {img:fs-id1163723763646} src=../../media/CNX_Calc_Figure_12_02_004.jpg
> alt: This figure is the 3-dimensional coordinate system. In the first octant there is a rectangular solid drawn. One corner is labeled (-2, 3, -1).

COMMENTARY: Hint
Start by sketching the coordinate axes. Then sketch a rectangular prism to help find the point in space.
:::
:::
In two-dimensional space, the coordinate plane is defined by a pair of perpendicular axes. These axes allow us to name any location within the plane. In three dimensions, we define {term:coordinate planes} by the coordinate axes, just as in two dimensions. There are three axes now, so there are three intersecting pairs of axes. Each pair of axes forms a coordinate plane: the *xy*-plane, the *xz*-plane, and the *yz*-plane ([ref:CNX_Calc_Figure_12_02_005]). We define the *xy*-plane formally as the following set: $\{(x,y,0):x,y\in \mathbb{R}\}.$ Similarly, the *xz*-plane and the *yz*-plane are defined as $\{(x,0,z):x,z\in \mathbb{R}\}$ and $\{(0,y,z):y,z\in \mathbb{R}\},$ respectively.
To visualize this, imagine you’re building a house and are standing in a room with only two of the four walls finished. (Assume the two finished walls are adjacent to each other.) If you stand with your back to the corner where the two finished walls meet, facing out into the room, the floor is the *xy*-plane, the wall to your right is the *xz*-plane, and the wall to your left is the *yz*-plane.

> FIGURE {fig:CNX_Calc_Figure_12_02_005} src=../../media/CNX_Calc_Figure_12_02_005.jpg
> alt: This figure is the first octant of a 3-dimensional coordinate system. Also, there are the x y-plane represented with a rectangle with the x and y axes on the plane. There is also the x z-plane on the x and z axes and the y z-plane on the y and z axes.
> caption: The plane containing the *x*- and *y*-axes is called the *xy*-plane. The plane containing the *x*- and *z*-axes is called the *xz*-plane, and the *y*- and *z*-axes define the *yz*-plane.

In two dimensions, the coordinate axes partition the plane into four quadrants. Similarly, the coordinate planes divide space between them into eight regions about the origin, called {term:octants}. The octants fill ${\mathbb{R}}^{3}$ in the same way that quadrants fill ${\mathbb{R}}^{2},$ as shown in [ref:CNX_Calc_Figure_12_02_006].

> FIGURE {fig:CNX_Calc_Figure_12_02_006} src=../../media/CNX_Calc_Figure_12_02_006.jpg
> alt: This figure is the 3-dimensional coordinate system with the first octant labeled with a roman numeral I, I, II, III, IV, V, VI, VII, and VIII. Also, for each quadrant there are the signs of the values of x, y, and z. They are: I (+, +, +); 2nd (-, +, +); 3rd (-, -, +); 4th (+, -, +); 5th (+, +, -); 6th (-, +, -); 7th (-, -, -); and 8th (+, -, -).
> caption: Points that lie in octants have three nonzero coordinates.

Most work in three-dimensional space is a comfortable extension of the corresponding concepts in two dimensions. In this section, we use our knowledge of circles to describe spheres, then we expand our understanding of vectors to three dimensions. To accomplish these goals, we begin by adapting the distance formula to three-dimensional space.
If two points lie in the same coordinate plane, then it is straightforward to calculate the distance between them. We know that the distance $d$ between two points $({x}_{1},{y}_{1})$ and $({x}_{2},{y}_{2})$ in the *xy*-coordinate plane is given by the formula

$d=\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}}.$  {eq:fs-id1163723902334}

The formula for the distance between two points in space is a natural extension of this formula.

:::note [theorem] The Distance between Two Points in Space
The distance $d$ between points $({x}_{1},{y}_{1},{z}_{1})$ and $({x}_{2},{y}_{2},{z}_{2})$ is given by the formula

$$ d=\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}+{({z}_{2}-{z}_{1})}^{2}}. $$  {eq:fs-id1163723747703}

:::
The proof of this theorem is left as an exercise. (*Hint:* First find the distance ${d}_{1}$ between the points $({x}_{1},{y}_{1},{z}_{1})$ and $({x}_{2},{y}_{2},{z}_{1})$ as shown in [ref:CNX_Calc_Figure_12_02_007].)

> FIGURE {fig:CNX_Calc_Figure_12_02_007} src=../../media/CNX_Calc_Figure_12_02_007.jpg
> alt: This figure is a rectangular prism. The lower, left back corner is labeled “P sub 1=(x sub 1,y sub 1,z sub 1). The lower front right corner is labeled “(x sub 2, y sub 2, z sub 1)”. There is a line between P sub 1 and P sub 2 and is labeled “d sub 1”. The upper front right corner is labeled “P sub 2=(x sub 2,y sub 2,z sub 2).” There is a line from P sub 1 to P sub 2 and is labeled “d (P sub 1,P sub 2).” The front right vertical side is labeled “|z sub 2-z sub 1|”.
> caption: The distance between ${P}_{1}$ and ${P}_{2}$ is the length of the diagonal of the rectangular prism having ${P}_{1}$ and ${P}_{2}$ as opposite corners.

:::example {ex:fs-id1163723659743} Distance in Space

:::exercise {fs-id1163724072366} type= 
PROBLEM:
Find the distance between points ${P}_{1}=(3,\text{−}1,5)$ and ${P}_{2}=(2,1,\text{−}1).$

> FIGURE {fig:CNX_Calc_Figure_12_02_012} src=../../media/CNX_Calc_Figure_12_02_012.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two points. The first is labeled “P sub 1(3, -1, 5)” and the second is labeled “P sub 2(2, 1, -1)”. There is a line segment between the two points.
> caption: Find the distance between the two points.

SOLUTION:
Substitute values directly into the distance formula:

$\begin{array}{rl}d({P}_{1},{P}_{2}) & =\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}+{({z}_{2}-{z}_{1})}^{2}} \\ & =\sqrt{{(2-3)}^{2}+{(1-(−1))}^{2}+{(−1-5)}^{2}} \\ & =\sqrt{(–1{)}^{2}+{2}^{2}+{(−6)}^{2}} \\ & =\sqrt{41}.\end{array}$  {eq:fs-id1163724057411}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723719539} type= 
PROBLEM:
Find the distance between points ${P}_{1}=(1,−5,4)$ and ${P}_{2}=(4,−1,−1).$
SOLUTION:
$5\sqrt{2}$
COMMENTARY: Hint
$d=\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}+{({z}_{2}-{z}_{1})}^{2}}$
:::
:::
Before moving on to the next section, let’s get a feel for how ${\mathbb{R}}^{3}$ differs from ${\mathbb{R}}^{2}.$ For example, in ${\mathbb{R}}^{2},$ lines that are not parallel must always intersect. This is not the case in ${\mathbb{R}}^{3}.$ For example, consider the line shown in [ref:CNX_Calc_Figure_12_02_013]. These two lines are not parallel, nor do they intersect.

> FIGURE {fig:CNX_Calc_Figure_12_02_013} src=../../media/CNX_Calc_Figure_12_02_013.jpg
> alt: This figure is the 3-dimensional coordinate system. There is a line drawn at z = 3. It is parallel to the x y-plane. There is also a line drawn at y = 2. It is parallel to the x-axis.
> caption: These two lines are not parallel, but still do not intersect.

You can also have circles that are interconnected but have no points in common, as in [ref:CNX_Calc_Figure_12_02_014].

> FIGURE {fig:CNX_Calc_Figure_12_02_014} src=../../media/CNX_Calc_Figure_12_02_014.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two cirlces drawn. The first circle is centered around the z-axis, at z = 1. The second circle has the positive x-axis as its diameter. It intersects the x-axis at x = 0 and x = 6. It is vertical.
> caption: These circles are interconnected, but have no points in common.

We have a lot more flexibility working in three dimensions than we do if we stick with only two dimensions.

## Writing Equations in ℝ<sup>3</sup>
Now that we can represent points in space and find the distance between them, we can learn how to write equations of geometric objects such as lines, planes, and curved surfaces in ${\mathbb{R}}^{3}.$ First, we start with a simple equation. Compare the graphs of the equation $x=0$ in $\mathbb{R},{\mathbb{R}}^{2},\;\text{and}\;{\mathbb{R}}^{3}$ ([ref:CNX_Calc_Figure_12_02_008]). From these graphs, we can see the same equation can describe a point, a line, or a plane.

> FIGURE {fig:CNX_Calc_Figure_12_02_008} src=../../media/CNX_Calc_Figure_12_02_008.jpg
> alt: This figure has three images. The first is a horizontal axis with a point drawn at 0. The second is the two dimensional Cartesian coordinate plane. The third is the 3-dimensional coordinate system. It is inside of a box and has a grid drawn at the y z-plane.
> caption: (a) In $\mathbb{R},$ the equation $x=0$ describes a single point. (b) In ${\mathbb{R}}^{2},$ the equation $x=0$ describes a line, the *y*-axis. (c) In ${\mathbb{R}}^{3},$ the equation $x=0$ describes a plane, the *yz*-plane.

In space, the equation $x=0$ describes all points $(0,y,z).$ This equation defines the *yz*-plane. Similarly, the *xy*-plane contains all points of the form $(x,y,0).$ The equation $z=0$ defines the *xy*-plane and the equation $y=0$ describes the *xz*-plane ([ref:CNX_Calc_Figure_12_02_009]).

> FIGURE {fig:CNX_Calc_Figure_12_02_009} src=../../media/CNX_Calc_Figure_12_02_009.jpg
> alt: This figure has two images. The first is the 3-dimensional coordinate system. It is inside of a box and has a grid drawn at the x y-plane. The second is the 3-dimensional coordinate system. It is inside of a box and has a grid drawn at the x z-plane.
> caption: (a) In space, the equation $z=0$ describes the *xy*-plane. (b) All points in the *xz*-plane satisfy the equation $y=0.$

Understanding the equations of the coordinate planes allows us to write an equation for any plane that is parallel to one of the coordinate planes. When a plane is parallel to the *xy*-plane, for example, the *z*-coordinate of each point in the plane has the same constant value. Only the *x*- and *y*-coordinates of points in that plane vary from point to point.

:::note [rule] Rule: Equations of Planes Parallel to Coordinate Planes
1. The plane in space that is parallel to the *xy*-plane and contains point $(a,b,c)$ can be represented by the equation $z=c.$
2. The plane in space that is parallel to the *xz*-plane and contains point $(a,b,c)$ can be represented by the equation $y=b.$
3. The plane in space that is parallel to the *yz*-plane and contains point $(a,b,c)$ can be represented by the equation $x=a.$
:::

:::example {ex:fs-id1163723342445} Writing Equations of Planes Parallel to Coordinate Planes

:::exercise {fs-id1163723342447} type= 
PROBLEM:
a. Write an equation of the plane passing through point $(3,11,7)$ that is parallel to the *yz*-plane.
b. Find an equation of the plane passing through points $(6,−2,9),$ $(0,−2,4),$ and $(1,−2,−3).$
SOLUTION:
a. When a plane is parallel to the *yz*-plane, only the *y*- and *z*-coordinates may vary. The *x*-coordinate has the same constant value for all points in this plane, so this plane can be represented by the equation $x=3.$
b. Each of the points $(6,−2,9),$ $(0,−2,4),$ and $(1,−2,−3)$ has the same *y*-coordinate. This plane can be represented by the equation $y=−2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723988324} type= 
PROBLEM:
Write an equation of the plane passing through point $(1,−6,−4)$ that is parallel to the *xy*-plane.
SOLUTION:
$z=−4$
COMMENTARY: Hint
If a plane is parallel to the *xy*-plane, the *z*-coordinates of the points in that plane do not vary.
:::
:::
As we have seen, in ${\mathbb{R}}^{2}$ the equation $x=5$ describes the vertical line passing through point $(5,0).$ This line is parallel to the *y*-axis. In a natural extension, the equation $x=5$ in ${\mathbb{R}}^{3}$ describes the plane passing through point $(5,0,0),$ which is parallel to the *yz*-plane. Another natural extension of a familiar equation is found in the equation of a sphere.

:::note [definition] Definition
A {term:sphere} is the set of all points in space equidistant from a fixed point, the center of the sphere ([ref:CNX_Calc_Figure_12_02_010]), just as the set of all points in a plane that are equidistant from the center represents a circle. In a sphere, as in a circle, the distance from the center to a point on the sphere is called the *radius*.
:::

> FIGURE {fig:CNX_Calc_Figure_12_02_010} src=../../media/CNX_Calc_Figure_12_02_010.jpg
> alt: This image is a sphere. It has center at (a, b, c) and has a radius represented with a broken line from the center point (a, b, c) to the edge of the sphere at (x, y, z). The radius is labeled “r.”
> caption: Each point $(x,y,z)$ on the surface of a sphere is $r$ units away from the center $(a,b,c).$

The equation of a circle is derived using the distance formula in two dimensions. In the same way, the equation of a sphere is based on the three-dimensional formula for distance.

:::note [rule] Rule: Equation of a Sphere
The sphere with center $(a,b,c)$ and radius $r$ can be represented by the equation

$$ {(x-a)}^{2}+{(y-b)}^{2}+{(z-c)}^{2}={r}^{2}. $$  {eq:fs-id1163724052947}

This equation is known as the {term:standard equation of a sphere}.
:::

:::example {ex:fs-id1163724037242} Finding an Equation of a Sphere

:::exercise {fs-id1163724080316} type= 
PROBLEM:
Find the standard equation of the sphere with center $(10,7,4)$ and point $(−1,3,−2),$ as shown in [ref:CNX_Calc_Figure_12_02_015].

> FIGURE {fig:CNX_Calc_Figure_12_02_015} src=../../media/CNX_Calc_Figure_12_02_015.jpg
> alt: This figure is a sphere centered on the point (10, 7, 4) of a 3-dimensional coordinate system. It has radius equal to the square root of 173 and passes through the point (-1, 3, -2).
> caption: The sphere centered at $(10,7,4)$ containing point $(−1,3,−2).$

SOLUTION:
Use the distance formula to find the radius $r$ of the sphere:

$\begin{array}{rl}r & =\sqrt{{(−1-10)}^{2}+{(3-7)}^{2}+{(−2-4)}^{2}} \\ & =\sqrt{{(−11)}^{2}+{(−4)}^{2}+{(−6)}^{2}} \\ & =\sqrt{173}.\end{array}$  {eq:fs-id1163724038462}

The standard equation of the sphere is

${(x-10)}^{2}+{(y-7)}^{2}+{(z-4)}^{2}=173.$  {eq:fs-id1163724018082}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723757409} type= 
PROBLEM:
Find the standard equation of the sphere with center $(−2,4,−5)$ containing point $(4,4,−1).$
SOLUTION:
${(x+2)}^{2}+{(y-4)}^{2}+{(z+5)}^{2}=52$
COMMENTARY: Hint
First use the distance formula to find the radius of the sphere.
:::
:::

:::example {ex:fs-id1163724058873} Finding the Equation of a Sphere

:::exercise {fs-id1163723955186} type= 
PROBLEM:
Let $P=(−5,2,3)$ and $Q=(3,4,−1),$ and suppose line segment $PQ$ forms the diameter of a sphere ([ref:CNX_Calc_Figure_12_02_016]). Find an equation of the sphere.

> FIGURE {fig:CNX_Calc_Figure_12_02_016} src=../../media/CNX_Calc_Figure_12_02_016.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two points labeled. The first point is P = (-5, 2, 3). The second point is Q = (3, 4, -1). There is a line segment drawn between the two points.
> caption: Line segment $PQ.$

SOLUTION:
Since $PQ$ is a diameter of the sphere, we know the center of the sphere is the midpoint of $PQ.$ Then,

$\begin{array}{rl}C & =(\frac{−5+3}{2},\frac{2+4}{2},\frac{3+(−1)}{2}) \\ & =(−1,3,1).\end{array}$  {eq:fs-id1163724080997}

Furthermore, we know the radius of the sphere is half the length of the diameter. This gives

$\begin{array}{rl}r & =\frac{1}{2}\sqrt{{(−5-3)}^{2}+{(2-4)}^{2}+{(3-(−1))}^{2}} \\ & =\frac{1}{2}\sqrt{64+4+16} \\ & =\sqrt{21}.\end{array}$  {eq:fs-id1163723934864}

Then, the equation of the sphere is ${(x+1)}^{2}+{(y-3)}^{2}+{(z-1)}^{2}=21.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723281632} type= 
PROBLEM:
Find an equation of the sphere with diameter $PQ,$ where $P=(2,−1,−3)$ and $Q=(−2,5,−1).$
SOLUTION:
${x}^{2}+{(y-2)}^{2}+{(z+2)}^{2}=14$
COMMENTARY: Hint
Find the midpoint of the diameter first.
:::
:::

:::example {ex:fs-id1163724073516} Graphing Other Equations in Three Dimensions

:::exercise {fs-id1163724073518} type= 
PROBLEM:
Describe the set of points that satisfies $(x-4)(z-2)=0,$ and graph the set.
SOLUTION:
We must have either $x-4=0$ or $z-2=0,$ so the set of points forms the two planes $x=4$ and $z=2$ ([ref:CNX_Calc_Figure_12_02_017]).

> FIGURE {fig:CNX_Calc_Figure_12_02_017} src=../../media/CNX_Calc_Figure_12_02_017.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two intersecting planes drawn. The first is the x y-plane. The second is the y z-plane. They are perpendicular to each other.
> caption: The set of points satisfying $(x-4)(z-2)=0$ forms the two planes $x=4$ and $z=2.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723739278} type= 
PROBLEM:
Describe the set of points that satisfies $(y+2)(z-3)=0,$ and graph the set.
SOLUTION:
The set of points forms the two planes $y=−2$ and $z=3.$

> IMAGE {img:fs-id1163723288875} src=../../media/CNX_Calc_Figure_12_02_018.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two intersecting planes drawn. The first is the x z-plane. The second is parallel to the y z-plane at the value of z = 3. They are perpendicular to each other.

COMMENTARY: Hint
One of the factors must be zero.
:::
:::

:::example {ex:fs-id1163724072108} Graphing Other Equations in Three Dimensions

:::exercise {fs-id1163724072110} type= 
PROBLEM:
Describe the set of points in three-dimensional space that satisfies ${(x-2)}^{2}+{(y-1)}^{2}=4,$ and graph the set.
SOLUTION:
The *x*- and *y*-coordinates form a circle in the *xy*-plane of radius $2,$ centered at $(2,1).$ Since there is no restriction on the *z*-coordinate, the three-dimensional result is a circular cylinder of radius $2$ centered on the line with $x=2\;\text{and}\;y=1.$ The cylinder extends indefinitely in the *z*-direction ([ref:CNX_Calc_Figure_12_02_019]).

> FIGURE {fig:CNX_Calc_Figure_12_02_019} src=../../media/CNX_Calc_Figure_12_02_019.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a vertical cylinder parallel to the z-axis and centered around line parallel to the z-axis with x = 2 and y = 1.
> caption: The set of points satisfying ${(x-2)}^{2}+{(y-1)}^{2}=4.$ This is a cylinder of radius $2$ centered on the line with $x=2\;\text{and}\;y=1.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723891510} type= 
PROBLEM:
Describe the set of points in three dimensional space that satisfies ${x}^{2}+{(z-2)}^{2}=16,$ and graph the surface.
SOLUTION:
A cylinder of radius 4 centered on the line with $x=0\;\text{and}\;z=2.$

> IMAGE {img:fs-id1163724073597} src=../../media/CNX_Calc_Figure_12_02_020.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a cylinder parallel to the y-axis and centered around the y-axis.

COMMENTARY: Hint
Think about what happens if you plot this equation in two dimensions in the *xz*-plane.
:::
:::

## Working with Vectors in ℝ<sup>3</sup>
Just like two-dimensional vectors, three-dimensional vectors are quantities with both magnitude and direction, and they are represented by directed line segments (arrows). With a three-dimensional vector, we use a three-dimensional arrow.
Three-dimensional vectors can also be represented in component form. The notation $\textbf{v}=\langle x,y,z\rangle$ is a natural extension of the two-dimensional case, representing a vector with the initial point at the origin, $(0,0,0),$ and terminal point $(x,y,z).$ The zero vector is $\mathbf{0}=\langle 0,0,0\rangle .$ So, for example, the three dimensional vector $\textbf{v}=\langle 2,4,1\rangle$ is represented by a directed line segment from point $(0,0,0)$ to point $(2,4,1)$ ([ref:CNX_Calc_Figure_12_02_021]).

> FIGURE {fig:CNX_Calc_Figure_12_02_021} src=../../media/CNX_Calc_Figure_12_02_021.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a vector drawn. The initial point of the vector is the origin. The terminal point of the vector is (2, 4, 1). The vector is labeled “v = <2, 4, 1>.”
> caption: Vector $\textbf{v}=\langle 2,4,1\rangle$ is represented by a directed line segment from point $(0,0,0)$ to point $(2,4,1).$

Vector addition and scalar multiplication are defined analogously to the two-dimensional case. If $\textbf{v}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle$ and $\textbf{w}=\langle {x}_{2},{y}_{2},{z}_{2}\rangle$ are vectors, and $k$ is a scalar, then

$\textbf{v}+\textbf{w}=\langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2},{z}_{1}+{z}_{2}\rangle \;\text{and}\;k\textbf{v}=\langle k{x}_{1},k{y}_{1},k{z}_{1}\rangle .$  {eq:fs-id1163723635377}

If $k=−1,$ then $k\textbf{v}=(−1)\textbf{v}$ is written as $\text{−}\textbf{v},$ and vector subtraction is defined by $\textbf{v}-\mathbf{w=v+}(\text{−}\textbf{w})\mathbf{=v+}(−1)\textbf{w}.$
The standard unit vectors extend easily into three dimensions as well—$\textbf{i}=\langle 1,0,0\rangle ,$ $\textbf{j}=\langle 0,1,0\rangle ,$ and $\textbf{k}=\langle 0,0,1\rangle$—and we use them in the same way we used the standard unit vectors in two dimensions. Thus, we can represent a vector in ${\mathbb{R}}^{3}$ in the following ways:

$\textbf{v}=\langle x,y,z\rangle =x\textbf{i}+y\textbf{j}+z\textbf{k}.$  {eq:fs-id1163723816708}

:::example {ex:fs-id1163723893588} Vector Representations

:::exercise {fs-id1163723893590} type= 
PROBLEM:
Let $\overrightarrow{PQ}$ be the vector with initial point $P=(3,12,6)$ and terminal point $Q=(−4,−3,2)$ as shown in [ref:CNX_Calc_Figure_12_02_022]. Express $\overrightarrow{PQ}$ in both component form and using standard unit vectors.

> FIGURE {fig:CNX_Calc_Figure_12_02_022} src=../../media/CNX_Calc_Figure_12_02_022.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two points labeled. The first point is P = (3, 12, 6). The second point is Q = (-4, -3, 2). There is a vector from P to Q.
> caption: The vector with initial point $P=(3,12,6)$ and terminal point $Q=(−4,−3,2).$

SOLUTION:
In component form,

$\begin{array}{rl}\overrightarrow{PQ} & =\langle {x}_{2}-{x}_{1},{y}_{2}-{y}_{1},{z}_{2}-{z}_{1}\rangle \\ & =\langle −4-3,−3-12,2-6\rangle =\langle −7,−15,−4\rangle .\end{array}$  {eq:fs-id1163723674690}

In standard unit form,

$\overrightarrow{PQ}=−7\textbf{i}-15\textbf{j}-4\textbf{k}.$  {eq:fs-id1163723340590}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723281642} type= 
PROBLEM:
Let $S=(3,8,2)$ and $T=(2,−1,3).$ Express $\overrightarrow{ST}$ in component form and in standard unit form.
SOLUTION:
$\overrightarrow{ST}=\langle −1,−9,1\rangle =\text{−}\textbf{i}-9\textbf{j}+\textbf{k}$
COMMENTARY: Hint
Write $\overrightarrow{ST}$ in component form first. $T$ is the terminal point of $\overrightarrow{ST}.$
:::
:::
As described earlier, vectors in three dimensions behave in the same way as vectors in a plane. The geometric interpretation of vector addition, for example, is the same in both two- and three-dimensional space ([ref:CNX_Calc_Figure_12_02_011]).

> FIGURE {fig:CNX_Calc_Figure_12_02_011} src=../../media/CNX_Calc_Figure_12_02_011.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has has three vectors in standard position. The first vector is labeled “A.” The second vector is labeled “B.” The third vector is labeled “A + B.” This vector is in between vectors A and B.
> caption: To add vectors in three dimensions, we follow the same procedures we learned for two dimensions.

We have already seen how some of the algebraic properties of vectors, such as vector addition and scalar multiplication, can be extended to three dimensions. Other properties can be extended in similar fashion. They are summarized here for our reference.

:::note [rule] Rule: Properties of Vectors in Space
Let $\textbf{v}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle$ and $\textbf{w}=\langle {x}_{2},{y}_{2},{z}_{2}\rangle$ be vectors, and let $k$ be a scalar.
**Scalar multiplication:** $k\textbf{v}=\langle k{x}_{1},k{y}_{1},k{z}_{1}\rangle$
**Vector addition:** $\textbf{v}+\textbf{w}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle +\langle {x}_{2},{y}_{2},{z}_{2}\rangle =\langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2},{z}_{1}+{z}_{2}\rangle$
**Vector subtraction:** $\textbf{v}-\textbf{w}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle -\langle {x}_{2},{y}_{2},{z}_{2}\rangle =\langle {x}_{1}-{x}_{2},{y}_{1}-{y}_{2},{z}_{1}-{z}_{2}\rangle$
**Vector magnitude:** $\| \textbf{v}\| =\sqrt{{x}_{1}{}^{2}+{y}_{1}{}^{2}+{z}_{1}{}^{2}}$
**Unit vector in the direction of v:** $\frac{1}{\| \textbf{v}\|}\textbf{v}=\frac{1}{\| \textbf{v}\|}\langle {x}_{1},{y}_{1},{z}_{1}\rangle =\langle \frac{{x}_{1}}{\| \textbf{v}\|},\frac{{y}_{1}}{\| \textbf{v}\|},\frac{{z}_{1}}{\| \textbf{v}\|}\rangle ,$ if $\textbf{v}≠\mathbf{0}$
:::
We have seen that vector addition in two dimensions satisfies the commutative, associative, and additive inverse properties. These properties of vector operations are valid for three-dimensional vectors as well. Scalar multiplication of vectors satisfies the distributive property, and the zero vector acts as an additive identity. The proofs to verify these properties in three dimensions are straightforward extensions of the proofs in two dimensions.

:::example {ex:fs-id1163724069611} Vector Operations in Three Dimensions

:::exercise {fs-id1163724069613} type= 
PROBLEM:
Let $\textbf{v}=\langle −2,9,5\rangle$ and $\textbf{w}=\langle 1,−1,0\rangle$ ([ref:CNX_Calc_Figure_12_02_023]). Find the following vectors.
a. $3\textbf{v}-2\textbf{w}$
b. $5\| \textbf{w}\|$
c. $\| 5\textbf{w}\|$
d. A unit vector in the direction of $\textbf{v}$

> FIGURE {fig:CNX_Calc_Figure_12_02_023} src=../../media/CNX_Calc_Figure_12_02_023.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two vectors in standard position. The first vector is labeled “v = <-2, 9, 5>.” The second vector is labeled “w = <1, -1, 0>.”
> caption: The vectors $\textbf{v}=\langle −2,9,5\rangle$ and $\textbf{w}=\langle 1,−1,0\rangle .$

SOLUTION:
a. First, use scalar multiplication of each vector, then subtract:

$\begin{array}{rl}3\textbf{v}-2\textbf{w} & =3\langle −2,9,5\rangle -2\langle 1,−1,0\rangle \\ & =\langle −6,27,15\rangle -\langle 2,−2,0\rangle \\ & =\langle −6-2,27-(−2),15-0\rangle \\ & =\langle −8,29,15\rangle .\end{array}$  {eq:fs-id1163723340182}

b. Write the equation for the magnitude of the vector, then use scalar multiplication:

$5\| \textbf{w}\| =5\sqrt{{1}^{2}+{(−1)}^{2}+{0}^{2}}=5\sqrt{2}.$  {eq:fs-id1163724036392}

c. First, use scalar multiplication, then find the magnitude of the new vector. Note that the result is the same as for part b.:

$\| 5\textbf{w}\| =\| \langle 5,−5,0\rangle \| =\sqrt{{5}^{2}+{(−5)}^{2}+{0}^{2}}=\sqrt{50}=5\sqrt{2}.$  {eq:fs-id1163723275682}

d. Recall that to find a unit vector in two dimensions, we divide a vector by its magnitude. The procedure is the same in three dimensions:

$\begin{array}{rl}\frac{\textbf{v}}{\| \textbf{v}\|} & =\frac{1}{\| \textbf{v}\|}\langle −2,9,5\rangle \\ & =\frac{1}{\sqrt{{(−2)}^{2}+{9}^{2}+{5}^{2}}}\langle −2,9,5\rangle \\ & =\frac{1}{\sqrt{110}}\langle −2,9,5\rangle \\ & =\langle \frac{−2}{\sqrt{110}},\frac{9}{\sqrt{110}},\frac{5}{\sqrt{110}}\rangle .\end{array}$  {eq:fs-id1163723139742}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724048162} type= 
PROBLEM:
Let $\textbf{v}=\langle −1,−1,1\rangle$ and $\textbf{w}=\langle 2,0,1\rangle .$ Find a unit vector in the direction of $5\textbf{v}+3\textbf{w}.$
SOLUTION:
$\langle \frac{1}{3\sqrt{10}},-\frac{5}{3\sqrt{10}},\frac{8}{3\sqrt{10}}\rangle$
COMMENTARY: Hint
Start by writing $5\textbf{v}+3\textbf{w}$ in component form.
:::
:::

:::example {ex:fs-id1163723995817} Throwing a Forward Pass

:::exercise {fs-id1163724052417} type= 
PROBLEM:
A quarterback is standing on the football field preparing to throw a pass. His receiver is standing 20 yd down the field and 15 yd to the quarterback’s left. The quarterback throws the ball at a velocity of 60 mph toward the receiver at an upward angle of $30\text{°}$ (see the following figure). Write the initial velocity vector of the ball, $\textbf{v},$ in component form.

> IMAGE {img:fs-id1163724047956} src=../../media/CNX_Calc_Figure_12_02_024.jpg
> alt: This figure is an image of two football players with the first one throwing the football to the second one. There is a line segment from each player to the bottom of the image. The distance from the first player to the bottom of the image is 20 yards. The distance from the second player to the same point on the bottom of the image is 15 yards. The two line segments are perpendicular. There is a broken line segment from the first player to the second player. There is a vector from the first player. The angle between the broken line and the vector is 30 degrees.

SOLUTION:
The first thing we want to do is find a vector in the same direction as the velocity vector of the ball. We then scale the vector appropriately so that it has the right magnitude. Consider the vector $\textbf{w}$ extending from the quarterback’s arm to a point directly above the receiver’s head at an angle of $30\text{°}$ (see the following figure). This vector would have the same direction as $\textbf{v},$ but it may not have the right magnitude.

> IMAGE {img:fs-id1163723753770} src=../../media/CNX_Calc_Figure_12_02_025.jpg
> alt: This figure is the image of two football players with the first player throwing the football to the second player. The distance between the two players is represented with a broken line segment. There is a vector from the first player. The angle between the vector and the broken line segment is 30 degrees. There is a vertical broken line segment from the second player. Also, there is a right triangle formed from the two broken line segments and the vector from the first player is labeled “w” and is the hypotenuse.

The receiver is 20 yd down the field and 15 yd to the quarterback’s left. Therefore, the straight-line distance from the quarterback to the receiver is

$\text{Dist from QB to receiver}=\sqrt{{15}^{2}+{20}^{2}}=\sqrt{225+400}=\sqrt{625}=25\;\text{yd}.$  {eq:fs-id1163723329970}

We have $\frac{25}{\| \textbf{w}\|}=\text{cos}\;30\text{°}.$ Then the magnitude of $\textbf{w}$ is given by

$\| \textbf{w}\| =\frac{25}{\text{cos}\;30\text{°}}=\frac{25\cdot 2}{\sqrt{3}}=\frac{50}{\sqrt{3}}\;\text{yd}$  {eq:fs-id1163724024171}

and the vertical distance from the receiver to the terminal point of $\textbf{w}$ is

$\text{Vert dist from receiver to terminal point of}\;\textbf{w}=\| \textbf{w}\| \text{sin}\;30\text{°}=\frac{50}{\sqrt{3}}\cdot \frac{1}{2}=\frac{25}{\sqrt{3}}\;\text{yd}.$  {eq:fs-id1163723292694}

Then $\textbf{w}=\langle 20,15,\frac{25}{\sqrt{3}}\rangle ,$ and has the same direction as $\textbf{v}.$
Recall, though, that we calculated the magnitude of $\textbf{w}$ to be $\| \textbf{w}\| =\frac{50}{\sqrt{3}},$ and $\textbf{v}$ has magnitude $60$ mph. So, we need to multiply vector $\textbf{w}$ by an appropriate constant, $k.$ We want to find a value of $k$ so that $\| k\textbf{w}\| =60$ mph. We have

$\| k\textbf{w}\| =k\| \textbf{w}\| =k\frac{50}{\sqrt{3}}\;\text{mph,}$  {eq:fs-id1163723967685}

so we want

$\begin{array}{rll} \\ \\ k\frac{50}{\sqrt{3}} & = & 60 \\ k & = & \frac{60\sqrt{3}}{50} \\ k & = & \frac{6\sqrt{3}}{5}.\end{array}$  {eq:fs-id1163723763382}

Then

$\textbf{v}=k\textbf{w}=k\langle 20,15,\frac{25}{\sqrt{3}}\rangle =\frac{6\sqrt{3}}{5}\langle 20,15,\frac{25}{\sqrt{3}}\rangle =\langle 24\sqrt{3},18\sqrt{3},30\rangle .$  {eq:fs-id1163723290226}

Let’s double-check that $\| \textbf{v}\| =60.$ We have

$\| \textbf{v}\| =\sqrt{{(24\sqrt{3})}^{2}+{(18\sqrt{3})}^{2}+{(30)}^{2}}=\sqrt{1728+972+900}=\sqrt{3600}=60\;\text{mph}.$  {eq:fs-id1163724056873}

So, we have found the correct components for $\textbf{v}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723752792} type= 
PROBLEM:
Assume the quarterback and the receiver are in the same place as in the previous example. This time, however, the quarterback throws the ball at velocity of $40$ mph and an angle of $45\text{°}.$ Write the initial velocity vector of the ball, $\textbf{v},$ in component form.
SOLUTION:
$\textbf{v}=\langle 16\sqrt{2},12\sqrt{2},20\sqrt{2}\rangle$
COMMENTARY: Hint
Follow the process used in the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- The three-dimensional coordinate system is built around a set of three axes that intersect at right angles at a single point, the origin. Ordered triples $(x,y,z)$ are used to describe the location of a point in space.
- The distance $d$ between points $({x}_{1},{y}_{1},{z}_{1})$ and $({x}_{2},{y}_{2},{z}_{2})$ is given by the formula

$d=\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}+{({z}_{2}-{z}_{1})}^{2}}.$  {eq:fs-id1163723110688}

- In three dimensions, the equations $x=a,y=b,\text{and}\;z=c$ describe planes that are parallel to the coordinate planes.
- The standard equation of a sphere with center $(a,b,c)$ and radius $r$ is

${(x-a)}^{2}+{(y-b)}^{2}+{(z-c)}^{2}={r}^{2}.$  {eq:fs-id1163723995523}

- In three dimensions, as in two, vectors are commonly expressed in component form, $\textbf{v}=\langle x,y,z\rangle ,$ or in terms of the standard unit vectors, $x\textbf{i}+y\textbf{j}+z\textbf{k}.$
- Properties of vectors in space are a natural extension of the properties for vectors in a plane. Let $\textbf{v}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle$ and $\textbf{w}=\langle {x}_{2},{y}_{2},{z}_{2}\rangle$ be vectors, and let $k$ be a scalar.

- **Scalar multiplication:** $k\textbf{v}=\langle k{x}_{1},k{y}_{1},k{z}_{1}\rangle$
- **Vector addition:** $\textbf{v}+\textbf{w}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle +\langle {x}_{2},{y}_{2},{z}_{2}\rangle =\langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2},{z}_{1}+{z}_{2}\rangle$
- **Vector subtraction:** $\textbf{v}-\textbf{w}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle -\langle {x}_{2},{y}_{2},{z}_{2}\rangle =\langle {x}_{1}-{x}_{2},{y}_{1}-{y}_{2},{z}_{1}-{z}_{2}\rangle$
- **Vector magnitude:** $\| \textbf{v}\| =\sqrt{{x}_{1}{}^{2}+{y}_{1}{}^{2}+{z}_{1}{}^{2}}$
- **Unit vector in the direction of v:** $\frac{\textbf{v}}{\| \textbf{v}\|}=\frac{1}{\| \textbf{v}\|}\langle {x}_{1},{y}_{1},{z}_{1}\rangle =\langle \frac{{x}_{1}}{\| \textbf{v}\|},\frac{{y}_{1}}{\| \textbf{v}\|},\frac{{z}_{1}}{\| \textbf{v}\|}\rangle ,$ $\textbf{v}≠\mathbf{0}$

## Key Equations {section:key-equations}

> TABLE {tab:eip-532} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Distance between two points in space:** | $d=\sqrt{{({x}_{2}-{x}_{1})}^{2}+{({y}_{2}-{y}_{1})}^{2}+{({z}_{2}-{z}_{1})}^{2}}$ |
| **Sphere with center $(a,b,c)$ and radius *r*:** | ${(x-a)}^{2}+{(y-b)}^{2}+{(z-c)}^{2}={r}^{2}$ |

##  {section:section-exercises}

:::exercise {fs-id1163723140872} type= 
PROBLEM:
Consider a rectangular box with one of the vertices at the origin, as shown in the following figure. If point $A(2,3,5)$ is the opposite vertex to the origin, then find
a. the coordinates of the other six vertices of the box and
b. the length of the diagonal of the box determined by the vertices $O$ and $A.$

> IMAGE {img:fs-id1163724096473} src=../../media/CNX_Calc_Figure_12_02_201.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has a point labeled “A(2, 3, 5)” drawn.

SOLUTION:
a. $(2,0,5),(2,0,0),(2,3,0),(0,3,0),(0,3,5),(0,0,5);$ b. $\sqrt{38}$
:::

:::exercise {fs-id1163723765271} type= 
PROBLEM:
Find the coordinates of point $P$ and determine its distance to the origin.

> IMAGE {img:fs-id1163723765285} src=../../media/CNX_Calc_Figure_12_02_202.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has a point drawn at (2, 1, 1). The point is labeled “P.”

:::
For the following exercises, describe and graph the set of points that satisfies the given equation.

:::exercise {fs-id1163723183650} type= 
PROBLEM:
$(y-5)(z-6)=0$
SOLUTION:
A union of two planes: $y=5$ (a plane parallel to the *xz*-plane) and $z=6$ (a plane parallel to the *xy*-plane)

> IMAGE {img:fs-id1163724083649} src=../../media/CNX_Calc_Figure_12_02_026.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has two planes drawn. The first plane is parallel to the x y-plane and is at z = 6. The second plane is parallel to the x z-plane and is at y = 5. The planes are perpendicular.

:::

:::exercise {fs-id1163724083664} type= 
PROBLEM:
$(z-2)(z-5)=0$
:::

:::exercise {fs-id1163724092626} type= 
PROBLEM:
${(y-1)}^{2}+{(z-1)}^{2}=1$
SOLUTION:
A cylinder of radius $1$ centered on the line $y=1,z=1$

> IMAGE {img:fs-id1163724182415} src=../../media/CNX_Calc_Figure_12_02_028.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has a cylinder drawn. The axis of the cylinder is parallel to the x-axis.

:::

:::exercise {fs-id1163724073157} type= 
PROBLEM:
${(x-2)}^{2}+{(z-5)}^{2}=4$
:::

:::exercise {fs-id1163724037628} type= 
PROBLEM:
Write the equation of the plane passing through point $(1,1,1)$ that is parallel to the *xy*-plane.
SOLUTION:
$z=1$
:::

:::exercise {fs-id1163723763067} type= 
PROBLEM:
Write the equation of the plane passing through point $(1,−3,2)$ that is parallel to the *xz*-plane.
:::

:::exercise {fs-id1163723748556} type= 
PROBLEM:
Find an equation of the plane passing through points $(1,−3,−2),$ $(0,3,−2),$ and $(1,0,−2).$
SOLUTION:
$z=−2$
:::

:::exercise {fs-id1163723303994} type= 
PROBLEM:
Find an equation of the plane passing through points $(1,9,2),$ $(1,3,6),$ and $(1,−7,8).$
:::
For the following exercises, find an equation of the sphere in standard form that satisfies the given conditions.

:::exercise {fs-id1163724059330} type= 
PROBLEM:
Center $C(−1,7,4)$ and radius $4$
SOLUTION:
${(x+1)}^{2}+{(y-7)}^{2}+{(z-4)}^{2}=16$
:::

:::exercise {fs-id1163723168754} type= 
PROBLEM:
Center $C(−4,7,2)$ and radius $6$
:::

:::exercise {fs-id1163723344937} type= 
PROBLEM:
Diameter $PQ,$ where $P(−1,5,7)$ and $Q(−5,2,9)$
SOLUTION:
${(x+3)}^{2}+{(y-3.5)}^{2}+{(z-8)}^{2}=\frac{29}{4}$
:::

:::exercise {fs-id1163723890882} type= 
PROBLEM:
Diameter $PQ,$ where $P(−16,−3,9)$ and $Q(−2,3,5)$
:::
For the following exercises, find the center and radius of the sphere with an equation in general form that is given.

:::exercise {fs-id1163723094167} type= 
PROBLEM:
${x}^{2}+{y}^{2}+{z}^{2}-4z+3=0$
SOLUTION:
Center $C(0,0,2)$ and radius $1$
:::

:::exercise {fs-id1163723286957} type= 
PROBLEM:
${x}^{2}+{y}^{2}+{z}^{2}-6x+8y-10z+25=0$
:::
For the following exercises, express vector $\overrightarrow{PQ}$ with the initial point at $P$ and the terminal point at $Q$
a. in component form and
b. by using standard unit vectors.

:::exercise {fs-id1163724054910} type= 
PROBLEM:
$P(3,0,2)$ and $Q(−1,−1,4)$
SOLUTION:
a. $\overrightarrow{PQ}=\langle −4,−1,2\rangle ;$ b. $\overrightarrow{PQ}=−4\textbf{i}-\textbf{j}+2\textbf{k}$
:::

:::exercise {fs-id1163723295464} type= 
PROBLEM:
$P(0,10,5)$ and $Q(1,1,−3)$
:::

:::exercise {fs-id1163724178192} type= 
PROBLEM:
$P(−2,5,−8)$ and $M(1,−7,4),$ where $M$ is the midpoint of the line segment $PQ$
SOLUTION:
a. $\overrightarrow{PQ}=\langle 6,−24,24\rangle ;$ b. $\overrightarrow{PQ}=6\textbf{i}-24\text{j}+24\textbf{k}$
:::

:::exercise {fs-id1163724017606} type= 
PROBLEM:
$Q(0,7,−6)$ and $M(−1,3,2),$ where $M$ is the midpoint of the line segment $PQ$
:::

:::exercise {fs-id1163724048218} type= 
PROBLEM:
Find terminal point $Q$ of vector $\overrightarrow{PQ}=\langle 7,−1,3\rangle$ with the initial point at $P(−2,3,5).$
SOLUTION:
$Q(5,2,8)$
:::

:::exercise {fs-id1163723652909} type= 
PROBLEM:
Find initial point $P$ of vector $\overrightarrow{PQ}=\langle −9,1,2\rangle$ with the terminal point at $Q(10,0,−1).$
:::
For the following exercises, use the given vectors $\textbf{a}$ and $\textbf{b}$ to find and express the vectors $\textbf{a}+\text{b},$ $4\textbf{a},$ and $−5\textbf{a}+3\textbf{b}$ in component form.

:::exercise {fs-id1163724048870} type= 
PROBLEM:
$\textbf{a}=\langle −1,−2,4\rangle ,$ $\textbf{b}=\langle −5,6,−7\rangle$
SOLUTION:
$\textbf{a}+\text{b}=\langle −6,4,−3\rangle ,$ $4\textbf{a}=\langle −4,−8,16\rangle ,$ $−5\textbf{a}+3\textbf{b}=\langle −10,28,−41\rangle$
:::

:::exercise {fs-id1163723275932} type= 
PROBLEM:
$\textbf{a}=\langle 3,−2,4\rangle ,$ $\textbf{b}=\langle −5,6,−9\rangle$
:::

:::exercise {fs-id1163723645187} type= 
PROBLEM:
$\textbf{a}=\text{−}\textbf{k},$ $\textbf{b}=\text{−}\text{i}$
SOLUTION:
$\textbf{a}+\text{b}=\langle −1,0,−1\rangle ,$ $4\textbf{a}=\langle 0,0,−4\rangle ,$ $−5\textbf{a}+3\textbf{b}=\langle −3,0,5\rangle$
:::

:::exercise {fs-id1163724016478} type= 
PROBLEM:
$\textbf{a}=\textbf{i}+\textbf{j}+\textbf{k},$ $\textbf{b}=2\textbf{i}-3\text{j}+2\textbf{k}$
:::
For the following exercises, vectors **u** and **v** are given. Find the magnitudes of vectors $\textbf{u}-\textbf{v}$ and $−2\textbf{u}.$

:::exercise {fs-id1163723927343} type= 
PROBLEM:
$\textbf{u}=2\textbf{i}+3\textbf{j}+4\textbf{k},$ $\textbf{v}=\text{−}\textbf{i}+5\textbf{j}-\textbf{k}$
SOLUTION:
$\| \textbf{u}-\textbf{v}\| =\sqrt{38},$ $\| −2\textbf{u}\| =2\sqrt{29}$
:::

:::exercise {fs-id1163723075580} type= 
PROBLEM:
$\textbf{u}=\textbf{i}+\textbf{j},$ $\textbf{v}=\textbf{j}-\textbf{k}$
:::

:::exercise {fs-id1163724074598} type= 
PROBLEM:
$\textbf{u}=\langle 2\;\text{cos}\;t,−2\;\text{sin}\;t,3\rangle ,$ $\textbf{v}=\langle 0,0,3\rangle ,$ where $t$ is a real number.
SOLUTION:
$\| \textbf{u}-\textbf{v}\| =2,$ $\| −2\textbf{u}\| =2\sqrt{13}$
:::

:::exercise {fs-id1163724075141} type= 
PROBLEM:
$\textbf{u}=\langle 0,1,\;\text{sinh}\;t\rangle ,$ $\textbf{v}=\langle 1,1,0\rangle ,$ where $t$ is a real number.
:::
For the following exercises, find the unit vector in the direction of the given vector $\textbf{a}$ and express it using standard unit vectors.

:::exercise {fs-id1163724076331} type= 
PROBLEM:
$\textbf{a}=3\textbf{i}-4\textbf{j}$
SOLUTION:
$\textbf{a}=\frac{3}{5}\textbf{i}-\frac{4}{5}\textbf{j}$
:::

:::exercise {fs-id1163724051102} type= 
PROBLEM:
$\textbf{a}=\langle 4,−3,6\rangle$
:::

:::exercise {fs-id1163724138209} type= 
PROBLEM:
$\textbf{a}=\overrightarrow{PQ},$ where $P(−2,3,1)$ and $Q(0,−4,4)$
SOLUTION:
$\langle \frac{2}{\sqrt{62}},\frac{7}{\sqrt{62}},\frac{3}{\sqrt{62}}\rangle$
:::

:::exercise {fs-id1163724072400} type= 
PROBLEM:
$\textbf{a}=\overrightarrow{OP},$ where $P(−1,−1,1)$
:::

:::exercise {fs-id1163723120767} type= 
PROBLEM:
$\textbf{a}=\textbf{u}-\textbf{v}+\text{w},$ where $\textbf{u}=\textbf{i}-\textbf{j}-\textbf{k},$ $\textbf{v}=2\textbf{i}-\textbf{j}+\textbf{k},$ and $\textbf{w}=\text{−}\textbf{i}+\textbf{j}+3\textbf{k}$
SOLUTION:
$\langle -\frac{2}{\sqrt{6}},\frac{1}{\sqrt{6}},\frac{1}{\sqrt{6}}\rangle$
:::

:::exercise {fs-id1163723934780} type= 
PROBLEM:
$\textbf{a}=2\textbf{u}+\textbf{v}-\text{w},$ where $\textbf{u}=\textbf{i}-\textbf{k},$ $\textbf{v}=2\textbf{j},$ and $\textbf{w}=\textbf{i}-\textbf{j}$
:::

:::exercise {fs-id1163723239424} type= 
PROBLEM:
Determine whether $\overrightarrow{AB}$ and $\overrightarrow{PQ}$ are equivalent vectors, where $A(1,1,1),B(3,3,3),P(1,4,5),$ and $Q(3,6,7).$
SOLUTION:
Equivalent vectors
:::

:::exercise {fs-id1163723286476} type= 
PROBLEM:
Determine whether the vectors $\overrightarrow{AB}$ and $\overrightarrow{PQ}$ are equivalent, where $A(1,4,1),$ $B(−2,2,0),$ $P(2,5,7),$ and $Q(−3,2,1).$
:::
For the following exercises, find vector $\textbf{u}$ with a magnitude that is given and satisfies the given conditions.

:::exercise {fs-id1163723140969} type= 
PROBLEM:
$\textbf{v}=\langle 7,−1,3\rangle ,$ $\| \textbf{u}\| =10,$ $\textbf{u}$ and $\textbf{v}$ have the same direction
SOLUTION:
$\textbf{u}=\langle \frac{70}{\sqrt{59}},-\frac{10}{\sqrt{59}},\frac{30}{\sqrt{59}}\rangle$
:::

:::exercise {fs-id1163723240737} type= 
PROBLEM:
$\textbf{v}=\langle 2,4,1\rangle ,$ $\| \textbf{u}\| =15,$ $\textbf{u}$ and $\textbf{v}$ have the same direction
:::

:::exercise {fs-id1163723243381} type= 
PROBLEM:
$\textbf{v}=\langle 2\;\text{sin}\;t,2\;\text{cos}\;t,1\rangle ,$ $\| \textbf{u}\| =2,$ $\textbf{u}$ and $\textbf{v}$ have opposite directions for any $t,$ where $t$ is a real number
SOLUTION:
$\textbf{u}=\langle -\frac{4}{\sqrt{5}}\text{sin}\;t,-\frac{4}{\sqrt{5}}\text{cos}\;t,-\frac{2}{\sqrt{5}}\rangle$
:::

:::exercise {fs-id1163724065306} type= 
PROBLEM:
$\textbf{v}=\langle 3\;\text{sinh}\;t,0,3\rangle ,$ $\| \textbf{u}\| =5,$ $\textbf{u}$ and $\textbf{v}$ have opposite directions for any $t,$ where $t$ is a real number
:::

:::exercise {fs-id1163724037681} type= 
PROBLEM:
Determine a vector of magnitude $5$ in the direction of vector $\overrightarrow{AB},$ where $A(2,1,5)$ and $B(3,4,−7).$
SOLUTION:
$\langle \frac{5}{\sqrt{154}},\frac{15}{\sqrt{154}},-\frac{60}{\sqrt{154}}\rangle$
:::

:::exercise {fs-id1163723754825} type= 
PROBLEM:
Find a vector of magnitude $2$ that points in the opposite direction than vector $\overrightarrow{AB},$ where $A(−1,−1,1)$ and $B(0,1,1).$ Express the answer in component form.
:::

:::exercise {fs-id1163724037798} type= 
PROBLEM:
Consider the points $A(2,\alpha ,0),B(0,1,β),$ and $C(1,1,β),$ where $\alpha$ and $β$ are negative real numbers. Find $\alpha$ and $β$ such that $\| \overrightarrow{OA}-\overrightarrow{OB}+\overrightarrow{OC}\| =\| \overrightarrow{OB}\| =4.$
SOLUTION:
$\alpha =\text{−}\sqrt{7},$ $β=\text{−}\sqrt{15}$
:::

:::exercise {fs-id1163723140800} type= 
PROBLEM:
Consider points $A(\alpha ,0,0),B(0,β,0),$ and $C(\alpha ,β,β),$ where $\alpha$ and $β$ are positive real numbers. Find $\alpha$ and $β$ such that $\| \overline{OA}+\overline{OB}\| =\sqrt{2}\;\text{and}\;\| \overline{OC}\| =\sqrt{3}.$
:::

:::exercise {fs-id1163724027815} type= 
PROBLEM:
Let $P(x,y,z)$ be a point situated at an equal distance from points $A(1,−1,0)$ and $B(−1,2,1).$ Show that point $P$ lies on the plane of equation $−2x+3y+z=2.$
:::

:::exercise {fs-id1163724083502} type= 
PROBLEM:
Let $P(x,y,z)$ be a point situated at an equal distance from the origin and point $A(4,1,2).$ Show that the coordinates of point $P$ satisfy the equation $8x+2y+4z=21.$
:::

:::exercise {fs-id1163724043366} type= 
PROBLEM:
The points $A,B,$ and $C$ are collinear (in this order) if the relation $\| \overrightarrow{AB}\| +\| \overrightarrow{BC}\| =\| \overrightarrow{AC}\|$ is satisfied. Show that $A(5,3,−1),$ $B(−5,−3,1),$ and $C(−15,−9,3)$ are collinear points.
:::

:::exercise {fs-id1163724079502} type= 
PROBLEM:
Show that points $A(1,0,1),$ $B(0,1,1),$ and $C(1,1,1)$ are not collinear.
:::

:::exercise {fs-id1163724037997} type= 
PROBLEM:
**[T]** A force $\textbf{F}$ of $50\;\text{N}$ acts on a particle in the direction of the vector $\overrightarrow{OP},$ where $P(3,4,0).$
a. Express the force as a vector in component form.
b. Find the angle between force $\textbf{F}$ and the positive direction of the *x*-axis. Express the answer in degrees rounded to the nearest integer.
SOLUTION:
a. $\textbf{F}=\langle 30,40,0\rangle ;$ b. $53\text{°}$
:::

:::exercise {fs-id1163723153259} type= 
PROBLEM:
**[T]** A force $\textbf{F}$ of $40\;\text{N}$ acts on a box in the direction of the vector $\overrightarrow{OP},$ where $P(1,0,2).$
a. Express the force as a vector by using standard unit vectors.
b. Find the angle between force $\textbf{F}$ and the positive direction of the *x*-axis.
:::

:::exercise {fs-id1163723293920} type= 
PROBLEM:
If $\textbf{F}$ is a force that moves an object from point ${P}_{1}({x}_{1},{y}_{1},{z}_{1})$ to another point ${P}_{2}({x}_{2},{y}_{2},{z}_{2}),$ then the displacement vector is defined as $\text{D}=({x}_{2}-{x}_{1})\textbf{i}+({y}_{2}-{y}_{1})\text{j}+({z}_{2}-{z}_{1})\text{k}.$ A metal container is lifted $10$ m vertically by a constant force $\textbf{F}.$ Express the displacement vector $\textbf{D}$ by using standard unit vectors.
SOLUTION:
$\text{D}=10\textbf{k}$
:::

:::exercise {fs-id1163723145792} type= 
PROBLEM:
A box is pulled $4$ yd horizontally in the *x*-direction by a constant force $\textbf{F}.$ Find the displacement vector in component form.
:::

:::exercise {fs-id1163724065391} type= 
PROBLEM:
The sum of the forces acting on an object is called the *resultant* or *net force*. An object is said to be in static equilibrium if the resultant force of the forces that act on it is zero. Let ${\textbf{F}}_{1}=\langle 10,6,3\rangle ,$ ${\textbf{F}}_{2}=\langle 0,4,9\rangle ,$ and ${\textbf{F}}_{3}=\langle 10,−3,−9\rangle$ be three forces acting on a box. Find the force ${\textbf{F}}_{4}$ acting on the box such that the box is in static equilibrium. Express the answer in component form.
SOLUTION:
${\textbf{F}}_{4}=\langle −20,−7,−3\rangle$
:::

:::exercise {fs-id1163723304276} type= 
PROBLEM:
**[T]** Let ${\textbf{F}}_{k}=\langle 1,k,{k}^{2}\rangle ,$ $k=1\text{,...},n$ be $n$ forces acting on a particle, with $n\ge 2.$
a. Find the net force $\textbf{F}={\displaystyle \sum_{k=1}^{n} {F}_{k}}.$ Express the answer using standard unit vectors.
b. Use a computer algebra system (CAS) to find *n* such that $\| \text{F}\| <100.$
:::

:::exercise {fs-id1163724077343} type= 
PROBLEM:
The force of gravity $\textbf{F}$ acting on an object is given by $\textbf{F}=m\textbf{g},$ where *m* is the mass of the object (expressed in kilograms) and $\textbf{g}$ is acceleration resulting from gravity, with $\| \text{g}\| =9.8$ $\text{N/kg}.$ A 2-kg disco ball hangs by a chain from the ceiling of a room.
a. Find the force of gravity $\textbf{F}$ acting on the disco ball and find its magnitude.
b. Find the force of tension $\textbf{T}$ in the chain and its magnitude.

Express the answers using standard unit vectors.

> FIGURE {fig:CNX_Calc_Figure_12_02_030} src=../../media/CNX_Calc_Figure_12_02_030.jpg
> alt: This figure shows a disco ball suspended from a ceiling.
> caption: (credit: modification of work by Kenneth Lu, Flickr)

SOLUTION:
a. $\textbf{F}=−19.6\textbf{k},$ $\| \text{F}\| =19.6$ N; b. $\text{T}=19.6\textbf{k},$ $\| \text{T}\| =19.6$ N
:::

:::exercise {fs-id1163723947178} type= 
PROBLEM:
A 5-kg pendant chandelier is designed such that the alabaster bowl is held by four chains of equal length, as shown in the following figure.
a. Find the magnitude of the force of gravity acting on the chandelier.
b. Find the magnitudes of the forces of tension for each of the four chains (assume chains are essentially vertical).

> IMAGE {img:fs-id1163723947206} src=../../media/CNX_Calc_Figure_12_02_031.jpg
> alt: This figure shows a light fixture hung from a ceiling, supported by 4 chains from the same point on the ceiling to four points spread evenly around the light fixture.

:::

:::exercise {fs-id1163724047781} type= 
PROBLEM:
**[T]** A 30-kg block of cement is suspended by three cables of equal length that are anchored at points $P(−2,0,0),$ $Q(1,\sqrt{3},0),$ and $R(1,\text{−}\sqrt{3},0).$ The load is located at $S(0,0,−2\sqrt{3}),$ as shown in the following figure. Let ${\textbf{F}}_{1},$ ${\textbf{F}}_{2},$ and ${\textbf{F}}_{3}$ be the forces of tension resulting from the load in cables $RS,QS,$ and $PS,$ respectively.
a. Find the gravitational force $\textbf{F}$ acting on the block of cement that counterbalances the sum ${\textbf{F}}_{1}+{\text{F}}_{2}+{\text{F}}_{3}$ of the forces of tension in the cables.
b. Find forces ${\textbf{F}}_{1},$ ${\textbf{F}}_{2},$ and ${\textbf{F}}_{3}.$ Express the answer in component form.

> IMAGE {img:fs-id1163723110429} src=../../media/CNX_Calc_Figure_12_02_204.jpg
> alt: This figure is the 3-dimensional coordinate system. It has 4 points drawn. The first point is labeled “P(-2, 0, 0).” The second point is labeled “R(1, -squareroot of 3, 0).” The third point is labeled “S(0, 0, -2squareroots of 3).” The fourth point is labeled “Q(1, squareroot of 3, 0).” There are line segments from P to S, from R to S, and from Q to S. At point S there is a box labeled “30 k g.”

SOLUTION:
a. $\textbf{F}=−294\textbf{k}$ N; b. ${\textbf{F}}_{1}=\langle -\frac{49\sqrt{3}}{3},49,−98\rangle ,$ ${\textbf{F}}_{2}=\langle -\frac{49\sqrt{3}}{3},−49,−98\rangle ,$ and ${\textbf{F}}_{3}=\langle \frac{98\sqrt{3}}{3},0,−98\rangle$ (each component is expressed in newtons)
:::

:::exercise {fs-id1163724073354} type= 
PROBLEM:
Two soccer players are practicing for an upcoming game. One of them runs 10 m from point *A* to point *B*. She then turns left at $90\text{°}$ and runs 10 m until she reaches point *C*. Then she kicks the ball with a speed of 10 m/sec at an upward angle of $45\text{°}$ to her teammate, who is located at point *A*. Write the velocity of the ball in component form.

> IMAGE {img:fs-id1163724073406} src=../../media/CNX_Calc_Figure_12_02_032.jpg
> alt: This figure is the image of two soccer players. The first soccer player is at point A. The second player is at point C. There is a line segment from A to C. Ther is a vector from player C upwards labeled “v.” There is a vector from player A to the bottom of the image. The point at the bottom is labeled “B.” This vector is labeled “10m.” There is a vector from C to B labeled “10m.”

:::

:::exercise {fs-id1163724048942} type= 
PROBLEM:
Let $\text{r}(t)=\langle x(t),y(t),z(t)\rangle$ be the position vector of a particle at the time $t\in [0,T],$ where $x,y,$ and $z$ are smooth functions on $[0,T].$ The instantaneous velocity of the particle at time $t$ is defined by vector $\textbf{v}(t)=\langle x\text{′}(t),y\text{′}(t),z\text{′}(t)\rangle ,$ with components that are the derivatives with respect to $t,$ of the functions *x*, *y*, and *z*, respectively. The magnitude $\| \textbf{v}(t)\|$ of the instantaneous velocity vector is called the *speed of the particle at time* t. Vector $\textbf{a}(t)=\langle {x}^{''}(t),{y}^{''}(t),{z}^{''}(t)\rangle ,$ with components that are the second derivatives with respect to $t,$ of the functions $x,y,$ and $z,$ respectively, gives the acceleration of the particle at time $t.$ Consider $\text{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,2t\rangle$ the position vector of a particle at time $t\in [0,30],$ where the components of $\textbf{r}$ are expressed in centimeters and time is expressed in seconds.
a. Find the instantaneous velocity, speed, and acceleration of the particle after the first second. Round your answer to two decimal places.
b. Use a CAS to visualize the path of the particle—that is, the set of all points of coordinates $(\text{cos}\;t,\text{sin}\;t,2t),$ where $t\in [0,30].$
SOLUTION:
a. $\textbf{v}(1)=\langle −0.84,0.54,2\rangle$ (each component is expressed in centimeters per second); $\| \textbf{v}(1)\| =2.24$ (expressed in centimeters per second); $\textbf{a}(1)=\langle −0.54,−0.84,0\rangle$ (each component expressed in centimeters per second squared);
b.

> IMAGE {img:fs-id1163723338283} src=../../media/CNX_Calc_Figure_12_02_033.jpg
> alt: This figure is of the 3-dimensional coordinate system above the xy-plane. It has a spiral drawn resembling a spring. The spiral is around the z-axis. The spiral starts on the x-axis at x = 1.

:::

:::exercise {fs-id1163723338299} type= 
PROBLEM:
**[T]** Let $\text{r}(t)=\langle t,2{t}^{2},4{t}^{2}\rangle$ be the position vector of a particle at time $t$ (in seconds), where $t\in [0,10]$ (here the components of $\textbf{r}$ are expressed in centimeters).
a. Find the instantaneous velocity, speed, and acceleration of the particle after the first two seconds. Round your answer to two decimal places.
b. Use a CAS to visualize the path of the particle defined by the points $(t,2{t}^{2},4{t}^{2}),$ where $t\in [0,60].$
:::

## Glossary
- {def} **coordinate plane**: a plane containing two of the three coordinate axes in the three-dimensional coordinate system, named by the axes it contains: the *xy*-plane, *xz*-plane, or the *yz*-plane
- {def} **right-hand rule**: a common way to define the orientation of the three-dimensional coordinate system; when the right hand is curved around the *z*-axis in such a way that the fingers curl from the positive *x*-axis to the positive *y*-axis, the thumb points in the direction of the positive *z*-axis
- {def} **octants**: the eight regions of space created by the coordinate planes
- {def} **sphere**: the set of all points equidistant from a given point known as the *center*
- {def} **standard equation of a sphere**: ${(x-a)}^{2}+{(y-b)}^{2}+{(z-c)}^{2}={r}^{2}$ describes a sphere with center $(a,b,c)$ and radius $r$
- {def} **three-dimensional rectangular coordinate system**: a coordinate system defined by three lines that intersect at right angles; every point in space is described by an ordered triple $(x,y,z)$ that plots its location relative to the defining axes

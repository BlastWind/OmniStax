# Vectors in the Plane

## Learning Objectives {section:learning-objectives}
- Describe a plane vector, using correct notation.
- Perform basic vector operations (scalar multiplication, addition, subtraction).
- Express a vector in component form.
- Explain the formula for the magnitude of a vector.
- Express a vector in terms of unit vectors.
- Give two examples of vector quantities.

When describing the movement of an airplane in flight, it is important to communicate two pieces of information: the direction in which the plane is traveling and the plane’s speed. When measuring a force, such as the thrust of the plane’s engines, it is important to describe not only the strength of that force, but also the direction in which it is applied. Some quantities, such as velocity or force, are defined in terms of both size (also called *magnitude*) and direction. A quantity that has magnitude and direction is called a {term:vector}. In this text, we denote vectors by boldface letters, such as **v**.

:::note [definition] Definition
A vector is a quantity that has both magnitude and direction.
:::

## Vector Representation
A vector in a plane is represented by a directed line segment (an arrow). The endpoints of the segment are called the {term:initial point} and the {term:terminal point} of the vector. An arrow from the initial point to the terminal point indicates the direction of the vector. The length of the line segment represents its {term:magnitude}. We use the notation $\| \textbf{v}\|$ to denote the magnitude of the vector $\textbf{v}.$ A vector with an initial point and terminal point that are the same is called the {term:zero vector}, denoted $\mathbf{0}.$ The zero vector is the only vector without a direction, and by convention can be considered to have any direction convenient to the problem at hand.
Vectors with the same magnitude and direction are called equivalent vectors. We treat equivalent vectors as equal, even if they have different initial points. Thus, if $\textbf{v}$ and $\textbf{w}$ are equivalent, we write

$\textbf{v}=\textbf{w}.$  {eq:fs-id1167793360877}

:::note [definition] Definition
Vectors are said to be {term:equivalent vectors} if they have the same magnitude and direction.
:::
The arrows in [ref:CNX_Calc_Figure_12_01_001](b) are equivalent. Each arrow has the same length and direction. A closely related concept is the idea of parallel vectors. Two vectors are said to be parallel if they have the same or opposite directions. We explore this idea in more detail later in the chapter. A vector is defined by its magnitude and direction, regardless of where its initial point is located.

> FIGURE {fig:CNX_Calc_Figure_12_01_001} src=../../media/CNX_Calc_Figure_12_01_001.jpg
> alt: This figure has two images. The first is labeled “a” and has a line segment representing vector v. The line segment begins at the initial point and goes to the terminal point. There is an arrowhead at the terminal point. The second image is labeled “b” and is five vectors, each labeled v sub 1, v sub 2, v sub 3, v sub 4, v sub 5. They all are pointing in the same direction and have the same length.
> caption: (a) A vector is represented by a directed line segment from its initial point to its terminal point. (b) Vectors ${\textbf{v}}_{1}$ through ${\textbf{v}}_{5}$ are equivalent.

The use of boldface, lowercase letters to name vectors is a common representation in print, but there are alternative notations. When writing the name of a vector by hand, for example, it is easier to sketch an arrow over the variable than to simulate boldface type: $\vec{v}.$ When a vector has initial point $P$ and terminal point $Q,$ the notation $\vec{PQ}$ is useful because it indicates the direction and location of the vector.

:::example {ex:fs-id1167794177131} Sketching Vectors

:::exercise {fs-id1167794070771} type= 
PROBLEM:
Sketch a vector in the plane from initial point $P(1,1)$ to terminal point $Q(8,5).$
SOLUTION:
See [ref:CNX_Calc_Figure_12_01_002]. Because the vector goes from point $P$ to point $Q,$ we name it $\vec{PQ}.$

> FIGURE {fig:CNX_Calc_Figure_12_01_002} src=../../media/CNX_Calc_Figure_12_01_002.jpg
> alt: This figure is a graph of the first quadrant. There is a line segment beginning at the ordered pair (1, 1). Also, this point is labeled “P.” The line segment ends at the ordered pair (8, 5) and is labeled “Q.” The line segment is labeled “PQ.”
> caption: The vector with initial point $(1,1)$ and terminal point $(8,5)$ is named $\vec{PQ}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794147220} type= 
PROBLEM:
Sketch the vector $\vec{ST}$ where $S$ is point $(3,−1)$ and $T$ is point $(−2,3).$
SOLUTION:

> IMAGE {img:fs-id1167793639052} src=../../media/CNX_Calc_Figure_12_01_003.jpg
> alt: This figure is a graph of the coordinate system. There is a line segment beginning at the ordered pair (3, -1). Also, this point is labeled “S.” The line segment ends at the ordered pair (-2, 3) and is labeled “T.” There is an arrowhead at point “T,” representing a vector. The line segment is labeled “ST.”

COMMENTARY: Hint
The first point listed in the name of the vector is the initial point of the vector.
:::
:::

## Combining Vectors
Vectors have many real-life applications, including situations involving force or velocity. For example, consider the forces acting on a boat crossing a river. The boat’s motor generates a force in one direction, and the current of the river generates a force in another direction. Both forces are vectors. We must take both the magnitude and direction of each force into account if we want to know where the boat will go.
A second example that involves vectors is a quarterback throwing a football. The quarterback does not throw the ball parallel to the ground; instead, he aims up into the air. The velocity of his throw can be represented by a vector. If we know how hard he throws the ball (magnitude—in this case, speed), and the angle (direction), we can tell how far the ball will travel down the field.
A real number is often called a {term:scalar} in mathematics and physics. Unlike vectors, scalars are generally considered to have a magnitude only, but no direction. Multiplying a vector by a scalar changes the vector’s magnitude. This is called scalar multiplication. Note that changing the magnitude of a vector does not indicate a change in its direction. For example, wind blowing from north to south might increase or decrease in speed while maintaining its direction from north to south.

:::note [definition] Definition
The product $k\textbf{v}$ of a vector **v** and a scalar *k* is a vector with a magnitude that is $|k|$ times the magnitude of $\textbf{v},$ and with a direction that is the same as the direction of $\textbf{v}$ if $k>0,$ and opposite the direction of $\textbf{v}$ if $k<0.$ This is called {term:scalar multiplication}. If $k=0$ or $\mathbf{v=0},$ then $k\textbf{v}=\mathbf{0}.$
:::
As you might expect, if $k=−1,$ we denote the product $k\textbf{v}$ as

$k\textbf{v}=(−1)\textbf{v}=\text{−}\textbf{v}.$  {eq:fs-id1167794144097}

Note that $\text{−}\textbf{v}$ has the same magnitude as $\textbf{v},$ but has the opposite direction ([ref:CNX_Calc_Figure_12_01_004]).

> FIGURE {fig:CNX_Calc_Figure_12_01_004} src=../../media/CNX_Calc_Figure_12_01_004.jpg
> alt: This graphic has 4 figures. The first figure is a vector labeled “v.” The second figure is a vector twice as long as the first vector and is labeled “2 v.” The third figure is half as long as the first and is labeled “1/2 v.” The fourth figure is a vector in the opposite direction as the first. It is labeled “-v.”
> caption: (a) The original vector **v** has length *n* units. (b) The length of $2\textbf{v}$ equals $2n$ units. (c) The length of $\textbf{v}\text{/}2$ is $n\text{/}2$ units. (d) The vectors $\textbf{v}$ and $\text{−}\textbf{v}$ have the same length but opposite directions.

Another operation we can perform on vectors is to add them together in vector addition, but because each vector may have its own direction, the process is different from adding two numbers. The most common graphical method for adding two vectors is to place the initial point of the second vector at the terminal point of the first, as in [ref:CNX_Calc_Figure_12_01_005](a). To see why this makes sense, suppose, for example, that both vectors represent displacement. If an object moves first from the initial point to the terminal point of vector $\textbf{v},$ then from the initial point to the terminal point of vector $\textbf{w},$ the overall displacement is the same as if the object had made just one movement from the initial point to the terminal point of the vector $\mathbf{v+w}.$ For obvious reasons, this approach is called the {term:triangle method}. Notice that if we had switched the order, so that $\textbf{w}$ was our first vector and **v** was our second vector, we would have ended up in the same place. (Again, see [ref:CNX_Calc_Figure_12_01_005](a).) Thus, $\mathbf{v+w=w+v}.$
A second method for adding vectors is called the {term:parallelogram method}. With this method, we place the two vectors so they have the same initial point, and then we draw a parallelogram with the vectors as two adjacent sides, as in [ref:CNX_Calc_Figure_12_01_005](b). The length of the diagonal of the parallelogram is the sum. Comparing [ref:CNX_Calc_Figure_12_01_005](b) and [ref:CNX_Calc_Figure_12_01_005](a), we can see that we get the same answer using either method. The vector $\mathbf{v+w}$ is called the {term:vector sum}.

:::note [definition] Definition
The sum of two vectors $\textbf{v}$ and $\textbf{w}$ can be constructed graphically by placing the initial point of $\textbf{w}$ at the terminal point of $\textbf{v}.$ Then, the vector sum, $\mathbf{v+w},$ is the vector with an initial point that coincides with the initial point of $\textbf{v}$ and has a terminal point that coincides with the terminal point of $\textbf{w}.$ This operation is known as {term:vector addition}.
:::

> FIGURE {fig:CNX_Calc_Figure_12_01_005} src=../../media/CNX_Calc_Figure_12_01_005.jpg
> alt: This image has two figures. The first has two vectors, v and w with the same initial point. A parallelogram is formed by sketching broken lines parallel to the two vectors. A diagonal line is drawn from the same initial point to the opposite corner. It is labeled “v + w.” The second has two vectors, v and w. Vector v begins at the terminal point of vector w. A parallelogram is formed by sketching broken lines parallel to the two vectors. A diagonal line is drawn from the same initial point as vector w to the opposite corner. It is labeled “v + w.”
> caption: (a) When adding vectors by the triangle method, the initial point of $\textbf{w}$ is the terminal point of $\textbf{v}.$ (b) When adding vectors by the parallelogram method, the vectors $\textbf{v}$ and $\textbf{w}$ have the same initial point.

It is also appropriate here to discuss vector subtraction. We define $\textbf{v}-\textbf{w}$ as $\mathbf{v+}(\text{−}\textbf{w})=\mathbf{v+}(−1)\textbf{w}.$ The vector $\textbf{v}-\textbf{w}$ is called the {term:vector difference}. Graphically, the vector $\textbf{v}-\textbf{w}$ is depicted by drawing a vector from the terminal point of $\textbf{w}$ to the terminal point of $\textbf{v}$ ([ref:CNX_Calc_Figure_12_01_006]).

> FIGURE {fig:CNX_Calc_Figure_12_01_006} src=../../media/CNX_Calc_Figure_12_01_006.jpg
> alt: This image has two figures. The first figure has two vectors, one labeled “v” and the other labeled “w.” Both vectors have the same initial point. A third vector is drawn between the terminal points of v and w. It is labeled “v – w.” The second figure has two vectors, one labeled “v” and the other labeled “-w.” The vector “-w” has its initial point at the terminal point of “v.” A parallelogram is created with broken lines where “v” is the diagonal and “w” is the top side.
> caption: (a) The vector difference $\textbf{v}-\textbf{w}$ is depicted by drawing a vector from the terminal point of $\textbf{w}$ to the terminal point of $\textbf{v}.$ (b) The vector $\textbf{v}-\textbf{w}$ is equivalent to the vector $\textbf{v}+(\text{−}\textbf{w}).$

In [ref:CNX_Calc_Figure_12_01_005](a), the initial point of $\textbf{v}+\textbf{w}$ is the initial point of $\textbf{v}.$ The terminal point of $\textbf{v}+\textbf{w}$ is the terminal point of $\textbf{w}.$ These three vectors form the sides of a triangle. It follows that the length of any one side is less than the sum of the lengths of the remaining sides. So we have

$\| \textbf{v}+\textbf{w}\| \le \| \textbf{v}\| +\| \textbf{w}\| .$  {eq:fs-id1167793570715}

This is known more generally as the {term:triangle inequality}. There is one case, however, when the resultant vector $\textbf{u}+\textbf{v}$ has the same magnitude as the sum of the magnitudes of $\textbf{u}$ and $\textbf{v}.$ This happens only when $\textbf{u}$ and $\textbf{v}$ have the same direction.

:::example {ex:fs-id1167793948832} Combining Vectors

:::exercise {fs-id1167794044600} type= 
PROBLEM:
Given the vectors $\textbf{v}$ and $\textbf{w}$ shown in [ref:CNX_Calc_Figure_12_01_025], sketch the vectors
a. $3\text{w}$
b. $\textbf{v}+\textbf{w}$
c. $2\textbf{v}-\textbf{w}$

> FIGURE {fig:CNX_Calc_Figure_12_01_025} src=../../media/CNX_Calc_Figure_12_01_025.jpg
> alt: This figure has two vectors. They are vector v and vector w. They are not connected.
> caption: Vectors $\textbf{v}$ and $\textbf{w}$ lie in the same plane.

SOLUTION:
a. The vector $3\textbf{w}$ has the same direction as $\textbf{w};$ it is three times as long as $\textbf{w}.$

> IMAGE {img:fs-id1167794027143} src=../../media/CNX_Calc_Figure_12_01_007.jpg
> alt: This figure has two vectors. The first is labeled “w.” The second one is parallel to “w” and is labeled “3w.” It is three times as long as w in the same direction.

Vector $3\textbf{w}$ has the same direction as $\textbf{w}$ and is three times as long.
b. Use either addition method to find $\textbf{v}+\textbf{w}.$

> FIGURE {fig:CNX_Calc_Figure_12_01_008} src=../../media/CNX_Calc_Figure_12_01_008.jpg
> alt: This image has two figures. The first has two vectors, labeled “v” and “w.” They both have the same initial point. A third vector is drawn, labeled “v + w.” It is the diagonal of the parallelogram formed by having sides parallel to vectors v and w. The second figure is a triangle formed by having vector v on one side and vector w adjacent to v. The terminal point of v is the initial point of w. The third side is labeled “v + w.”
> caption: To find $\textbf{v}+\textbf{w},$ align the vectors at their initial points or place the initial point of one vector at the terminal point of the other. (a) The vector $\textbf{v}+\textbf{w}$ is the diagonal of the parallelogram with sides $\textbf{v}$ and $\textbf{w}$ (b) The vector $\textbf{v}+\textbf{w}$ is the third side of a triangle formed with $\textbf{w}$ placed at the terminal point of $\textbf{v}.$

c. To find $2\textbf{v}-\textbf{w},$ we can first rewrite the expression as $2\textbf{v}+(\text{−}\textbf{w}).$ Then we can draw the vector $\text{−}\textbf{w},$ then add it to the vector $2\textbf{v}.$

> FIGURE {fig:CNX_Calc_Figure_12_01_009} src=../../media/CNX_Calc_Figure_12_01_009.jpg
> alt: This figure is a triangle formed by having vector 2v on one side and vector -w adjacent to 2v. The terminal point of 2v is the initial point of -w. The third side is labeled “2v - w.”
> caption: To find $2\textbf{v}-\textbf{w},$ simply add $2\textbf{v}+(\text{−}\textbf{w}).$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794055611} type= 
PROBLEM:
Using vectors $\textbf{v}$ and $\textbf{w}$ from [ref:fs-id1167793948832], sketch the vector $2\textbf{w}-\textbf{v}.$
SOLUTION:

> IMAGE {img:fs-id1167794173128} src=../../media/CNX_Calc_Figure_12_01_010.jpg
> alt: This figure is a triangle formed by having vector 2w on one side and vector -v adjacent to 2w. The terminal point of 2w is the initial point of -v. The third side is labeled “2w – v.”

COMMENTARY: Hint
First sketch vectors $2\textbf{w}$ and $\text{−}\textbf{v}.$
:::
:::

## Vector Components
Working with vectors in a plane is easier when we are working in a coordinate system. When the initial points and terminal points of vectors are given in Cartesian coordinates, computations become straightforward.

:::example {ex:fs-id1167793971723} Comparing Vectors

:::exercise {fs-id1167794051843} type= 
PROBLEM:
Are $\textbf{v}$ and $\textbf{w}$ equivalent vectors?
a. $\textbf{v}$ has initial point $(3,2)$ and terminal point $(7,2)$
$\textbf{w}$ has initial point $(1,−4)$ and terminal point $(1,0)$
b. $\textbf{v}$ has initial point $(0,0)$ and terminal point $(1,1)$
$\textbf{w}$ has initial point $(−2,2)$ and terminal point $(−1,3)$
SOLUTION:
a. The vectors are each $4$ units long, but they are oriented in different directions. So $\textbf{v}$ and $\textbf{w}$ are not equivalent ([ref:CNX_Calc_Figure_12_01_011]).

> FIGURE {fig:CNX_Calc_Figure_12_01_011} src=../../media/CNX_Calc_Figure_12_01_011.jpg
> alt: This figure is a Cartesian coordinate system with two vectors. The first vector labeled “v” has initial point at (3, 2) and terminal point (7, 2). It is parallel to the x-axis. The second vector is labeled “w” and has initial point (1, -4) and terminal point (1, 0). It is parallel to the y-axis.
> caption: These vectors are not equivalent.

b. Based on [ref:CNX_Calc_Figure_12_01_012], and using a bit of geometry, it is clear these vectors have the same length and the same direction, so $\textbf{v}$ and $\textbf{w}$ are equivalent.

> FIGURE {fig:CNX_Calc_Figure_12_01_012} src=../../media/CNX_Calc_Figure_12_01_012.jpg
> alt: This figure is a Cartesian coordinate system with two vectors. The first vector labeled “v” has initial point at (0, 0) and terminal point (1, 1). The second vector is labeled “w” and has initial point (-2, 2) and terminal point (-1, 3).
> caption: These vectors are equivalent.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794117852} type= 
PROBLEM:
Which of the following vectors are equivalent?

> IMAGE {img:fs-id1167793925580} src=../../media/CNX_Calc_Figure_12_01_013.jpg
> alt: This figure is a coordinate system with 6 vectors, each labeled a through f. Three of the vectors, “a,” “b,” and “e” have the same length and are pointing in the same direction.

SOLUTION:
Vectors $\textbf{a},$ $\textbf{b},$ and $\textbf{e}$ are equivalent.
COMMENTARY: Hint
Equivalent vectors have both the same magnitude and the same direction.
:::
:::
We have seen how to plot a vector when we are given an initial point and a terminal point. However, because a vector can be placed anywhere in a plane, it may be easier to perform calculations with a vector when its initial point coincides with the origin. We call a vector with its initial point at the origin a {term:standard-position vector}. Because the initial point of any vector in standard position is known to be $(0,0),$ we can describe the vector by looking at the coordinates of its terminal point. Thus, if vector **v** has its initial point at the origin and its terminal point at $(x,y),$ we write the vector in component form as

$\textbf{v}=\langle x,y\rangle .$  {eq:fs-id1167793630068}

When a vector is written in component form like this, the scalars *x* and *y* are called the {term:components} of $\textbf{v}.$

:::note [definition] Definition
The vector with initial point $(0,0)$ and terminal point $(x,y)$ can be written in component form as

$\textbf{v}=\langle x,y\rangle .$  {eq:fs-id1167794222281}

The scalars $x$ and $y$ are called the components of $\textbf{v}.$
:::
Recall that vectors are named with lowercase letters in bold type or by drawing an arrow over their name. We have also learned that we can name a vector by its component form, with the coordinates of its terminal point in angle brackets. However, when writing the component form of a vector, it is important to distinguish between $\langle x,y\rangle$ and $(x,y).$ The first ordered pair uses angle brackets to describe a vector, whereas the second uses parentheses to describe a point in a plane. The initial point of $\langle x,y\rangle$ is $(0,0);$ the terminal point of $\langle x,y\rangle$ is $(x,y).$
When we have a vector not already in standard position, we can determine its component form in one of two ways. We can use a geometric approach, in which we sketch the vector in the coordinate plane, and then sketch an equivalent standard-position vector. Alternatively, we can find it algebraically, using the coordinates of the initial point and the terminal point. To find it algebraically, we subtract the *x*-coordinate of the initial point from the *x*-coordinate of the terminal point to get the *x* component, and we subtract the *y*-coordinate of the initial point from the *y*-coordinate of the terminal point to get the *y* component.

:::note [rule] Rule: Component Form of a Vector
Let **v** be a vector with initial point $({x}_{i},{y}_{i})$ and terminal point $({x}_{t},{y}_{t}).$ Then we can express **v** in component form as $\textbf{v}=\langle {x}_{t}-{x}_{i},{y}_{t}-{y}_{i}\rangle .$
:::

:::example {ex:fs-id1167793384623} Expressing Vectors in Component Form

:::exercise {fs-id1167793384625} type= 
PROBLEM:
Express vector $\textbf{v}$ with initial point $(−3,4)$ and terminal point $(1,2)$ in component form.
SOLUTION:
a. Geometric

1. Sketch the vector in the coordinate plane ([ref:CNX_Calc_Figure_12_01_014]).
2. The terminal point is 4 units to the right and 2 units down from the initial point.
3. Find the point that is 4 units to the right and 2 units down from the origin.
4. In standard position, this vector has initial point $(0,0)$ and terminal point $(4,−2)\text{:}$

$\textbf{v}=\langle 4,−2\rangle .$  {eq:fs-id1167793368905}

> FIGURE {fig:CNX_Calc_Figure_12_01_014} src=../../media/CNX_Calc_Figure_12_01_014.jpg
> alt: This figure is a coordinate system. There are two vectors on the graph. The first vector has initial point at the origin and terminal point at (4, -2). The horizontal distance from the initial to the terminal point for the vector is labeled as “4 units.” The vertical distance from the initial to the terminal point is labeled as “2 units.” The second vector has initial point at (-3, 4) and terminal point at (1, 2). The horizontal distance from the initial to the terminal point for the vector is labeled as “4 units.” The vertical distance from the initial to the terminal point is labeled as “2 units.”
> caption: These vectors are equivalent.

b. Algebraic

In the first solution, we used a sketch of the vector to see that the terminal point lies 4 units to the right. We can accomplish this algebraically by finding the difference of the *x*-coordinates:

${x}_{t}-{x}_{i}=1-(−3)=4.$  {eq:fs-id1167793944854}

Similarly, the difference of the *y*-coordinates shows the vertical length of the vector.

${y}_{t}-{y}_{i}=2-4=−2.$  {eq:fs-id1167793427813}

So, in component form,

$\begin{array}{rl}\textbf{v} & =\langle {x}_{t}-{x}_{i},{y}_{t}-{y}_{i}\rangle \\ & =\langle 1-(−3),2-4\rangle \\ & =\langle 4,−2\rangle .\end{array}$  {eq:fs-id1167793512081}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793544500} type= 
PROBLEM:
Vector $\textbf{w}$ has initial point $(−4,−5)$ and terminal point $(−1,2).$ Express $\textbf{w}$ in component form.
SOLUTION:
$\langle 3,7\rangle$
COMMENTARY: Hint
You may use either geometric or algebraic method.
:::
:::
To find the magnitude of a vector, we calculate the distance between its initial point and its terminal point. The {index:magnitude} of vector $\textbf{v}=\langle x,y\rangle$ is denoted $\| \textbf{v}\| ,$ or $|\textbf{v}|,$ and can be computed using the formula

$\| \textbf{v}\| =\sqrt{{x}^{2}+{y}^{2}}.$  {eq:fs-id1167793924820}

Note that because this vector is written in component form, it is equivalent to a vector in standard position, with its initial point at the origin and terminal point $(x,y).$ Thus, it suffices to calculate the magnitude of the vector in standard position. Using the distance formula to calculate the distance between initial point $(0,0)$ and terminal point $(x,y),$ we have

$\begin{array}{rl}\| \textbf{v}\| & =\sqrt{{(x-0)}^{2}+{(y-0)}^{2}} \\ & =\sqrt{{x}^{2}+{y}^{2}}.\end{array}$  {eq:fs-id1167793932657}

Based on this formula, it is clear that for any vector $\textbf{v},$ $\| \textbf{v}\| \ge 0,$ and $\| \textbf{v}\| =0$ if and only if $\mathbf{v=0}.$
The magnitude of a vector can also be derived using the Pythagorean theorem, as in the following figure.

> FIGURE {fig:CNX_Calc_Figure_12_01_015} src=../../media/CNX_Calc_Figure_12_01_015.jpg
> alt: This figure is a right triangle. The two sides are labeled “x” and “y.” The hypotenuse is represented as a vector and is labeled “square root (x^2 + y^2).”
> caption: If you use the components of a vector to define a right triangle, the magnitude of the vector is the length of the triangle’s hypotenuse.

We have defined scalar multiplication and vector addition geometrically. Expressing vectors in component form allows us to perform these same operations algebraically.

:::note [definition] Definition
Let $\textbf{v}=\langle {x}_{1},{y}_{1}\rangle$ and $\textbf{w}=\langle {x}_{2},{y}_{2}\rangle$ be vectors, and let $k$ be a scalar.
**Scalar multiplication:**$k\textbf{v}=\langle k{x}_{1},k{y}_{1}\rangle$
**Vector addition:**$\textbf{v}+\textbf{w}=\langle {x}_{1},{y}_{1}\rangle +\langle {x}_{2},{y}_{2}\rangle =\langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2}\rangle$
:::

:::example {ex:fs-id1167793819414} Performing Operations in Component Form

:::exercise {fs-id1167793949262} type= 
PROBLEM:
Let $\textbf{v}$ be the vector with initial point $(2,5)$ and terminal point $(8,13),$ and let $\textbf{w}=\langle −2,4\rangle .$
a. Express $\textbf{v}$ in component form and find $\| \textbf{v}\| .$ Then, using algebra, find
b. $\textbf{v}+\textbf{w},$
c. $3\textbf{v},$ and
d. $\textbf{v}-2\textbf{w}.$
SOLUTION:
a. To place the initial point of $\textbf{v}$ at the origin, we must translate the vector $2$ units to the left and $5$ units down ([ref:CNX_Calc_Figure_12_01_017]). Using the algebraic method, we can express $\textbf{v}$ as $\textbf{v}=\langle 8-2,13-5\rangle =\langle 6,8\rangle \text{:}$

$\| \textbf{v}\| =\sqrt{{6}^{2}+{8}^{2}}=\sqrt{36+64}=\sqrt{100}=10.$  {eq:fs-id1167794047117}

> FIGURE {fig:CNX_Calc_Figure_12_01_016} src=../../media/CNX_Calc_Figure_12_01_016.jpg
> alt: This figure is the first quadrant of a coordinate system. It has two vectors. The first vector has initial point at (2, 5) and terminal point (8, 13). The second vector has initial point at the origin and terminal point at (6, 8).
> caption: In component form, $\textbf{v}=\langle 6,8\rangle .$

b. To find $\textbf{v}+\textbf{w},$ add the *x*-components and the *y*-components separately:

$\textbf{v}+\textbf{w}=\langle 6,8\rangle +\langle −2,4\rangle =\langle 4,12\rangle .$  {eq:fs-id1167793936979}

c. To find $3\textbf{v},$ multiply $\textbf{v}$ by the scalar $k=3\text{:}$

$3\textbf{v}=3\cdot \langle 6,8\rangle =\langle 3\cdot 6,3\cdot 8\rangle =\langle 18,24\rangle .$  {eq:fs-id1167794067774}

d. To find $\textbf{v}-2\textbf{w},$ find $−2\textbf{w}$ and add it to $\textbf{v}\text{:}$

$\textbf{v}-2\textbf{w}=\langle 6,8\rangle -2\cdot \langle −2,4\rangle =\langle 6,8\rangle +\langle 4,−8\rangle =\langle 10,0\rangle .$  {eq:fs-id1167794025028}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793776055} type= 
PROBLEM:
Let $\textbf{a}=\langle 7,1\rangle$ and let $\textbf{b}$ be the vector with initial point $(3,2)$ and terminal point $(−1,−1).$
a. Find $\| \textbf{a}\| .$
b. Express $\textbf{b}$ in component form.
c. Find $3\textbf{a}-4\textbf{b}.$
SOLUTION:
a. $\| \textbf{a}\| =5\sqrt{2},$ b. $\textbf{b}=\langle −4,−3\rangle ,$ c. $3\textbf{a}-4\textbf{b}=\langle 37,15\rangle$
COMMENTARY: Hint
Use the Pythagorean Theorem to find $\| \textbf{a}\| .$ To find $3\textbf{a}-4\textbf{b},$ start by finding the scalar multiples $3\textbf{a}$ and $−4\textbf{b}.$
:::
:::
Now that we have established the basic rules of vector arithmetic, we can state the properties of vector operations. We will prove two of these properties. The others can be proved in a similar manner.

:::note [theorem] Properties of Vector Operations
Let $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ be vectors in a plane. Let $\text{r and s}$ be scalars.

$\begin{array}{lllllllll}\text{i.} & & & \text{u}+\text{v} & = & \text{v}+\text{u} & & & \text{Commutative property} \\ \text{ii.} & & & (\text{u}+\text{v})+\text{w} & = & \text{u}+(\text{v}+\text{w}) & & & \text{Associative property} \\ \text{iii.} & & & \text{u}+0 & = & \textbf{u} & & & \text{Additive identity property} \\ \text{iv.} & & & \text{u}+(\text{−}\text{u}) & = & 0 & & & \text{Additive inverse property} \\ \text{v.} & & & r(s\text{u}) & = & (rs)\text{u} & & & \text{Associativity of scalar multiplication} \\ \text{vi.} & & & (r+s)\text{u} & = & r\text{u}+s\text{u} & & & \text{Distributive property} \\ \text{vii.} & & & r(\text{u}+\text{v}) & = & r\text{u}+r\text{v} & & & \text{Distributive property} \\ \text{viii.} & & & 1\text{u} & = & \text{u},0\text{u}=0 & & & \text{Identity and zero properties}\end{array}$  {eq:fs-id1167793669156}

:::

### Proof of Commutative Property
Let $\textbf{u}=\langle {x}_{1},{y}_{1}\rangle$ and $\textbf{v}=\langle {x}_{2},{y}_{2}\rangle .$ Apply the commutative property for real numbers:

$\textbf{u}+\textbf{v}=\langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2}\rangle =\langle {x}_{2}+{x}_{1},{y}_{2}+{y}_{1}\rangle =\textbf{v}+\textbf{u}.$  {eq:fs-id1167794173294}

□

### Proof of Distributive Property
Apply the distributive property for real numbers:

$\begin{array}{rl}r(\textbf{u}+\textbf{v}) & =r\cdot \langle {x}_{1}+{x}_{2},{y}_{1}+{y}_{2}\rangle \\ & =\langle r({x}_{1}+{x}_{2}),r({y}_{1}+{y}_{2})\rangle \\ & =\langle r{x}_{1}+r{x}_{2},r{y}_{1}+r{y}_{2}\rangle \\ & =\langle r{x}_{1},r{y}_{1}\rangle +\langle r{x}_{2},r{y}_{2}\rangle \\ & =r\textbf{u}+r\textbf{v}.\end{array}$  {eq:fs-id1167793455543}

□

:::note [checkpoint] 

:::exercise {fs-id1167793959946} type= 
PROBLEM:
Prove the additive inverse property.
COMMENTARY: Hint
Use the component form of the vectors.
:::
:::
We have found the components of a vector given its initial and terminal points. In some cases, we may only have the magnitude and direction of a vector, not the points. For these vectors, we can identify the horizontal and vertical components using trigonometry ([ref:CNX_Calc_Figure_12_01_017]).

> FIGURE {fig:CNX_Calc_Figure_12_01_017} src=../../media/CNX_Calc_Figure_12_01_017.jpg
> alt: This figure is a right triangle. There is an angle labeled theta. The two sides are labeled “magnitude of v times cosine theta” and “magnitude of v times sine theta.” The hypotenuse is labeled “magnitude of v.”
> caption: The components of a vector form the legs of a right triangle, with the vector as the hypotenuse.

Consider the angle $\theta$ formed by the vector **v** and the positive *x*-axis. We can see from the triangle that the components of vector $\textbf{v}$ are $\langle \| \textbf{v}\| \text{cos}\;\theta ,\| \textbf{v}\| \text{sin}\;\theta \rangle .$ Therefore, given an angle and the magnitude of a vector, we can use the cosine and sine of the angle to find the components of the vector.

:::example {ex:fs-id1167794135664} Finding the Component Form of a Vector Using Trigonometry

:::exercise {fs-id1167794135666} type= 
PROBLEM:
Find the component form of a vector with magnitude 4 that forms an angle of $−45\text{°}$ with the *x*-axis.
SOLUTION:
Let $x$ and $y$ represent the components of the vector ([ref:CNX_Calc_Figure_12_01_018]). Then $x=4\;\text{cos}(−45\text{°})=2\sqrt{2}$ and $y=4\;\text{sin}(−45\text{°})=−2\sqrt{2}.$ The component form of the vector is $\langle 2\sqrt{2},−2\sqrt{2}\rangle .$

> FIGURE {fig:CNX_Calc_Figure_12_01_018} src=../../media/CNX_Calc_Figure_12_01_018.jpg
> alt: This figure is a right triangle. The two sides are labeled “x” and “y.” The hypotenuse is labeled “4.” There is also an angle labeled “45 degrees.” The hypotenuse is represented as a vector.
> caption: Use trigonometric ratios, $x=\| \textbf{v}\| \text{cos}\;\theta$ and $y=\| \textbf{v}\| \text{sin}\;\theta ,$ to identify the components of the vector.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793245548} type= 
PROBLEM:
Find the component form of vector $\textbf{v}$ with magnitude $10$ that forms an angle of $120\text{°}$ with the positive *x*-axis.
SOLUTION:
$\textbf{v}=\langle −5,5\sqrt{3}\rangle$
COMMENTARY: Hint
$x=\| \textbf{v}\| \text{cos}\;\theta$ and $y=\| \textbf{v}\| \text{sin}\;\theta$
:::
:::

## Unit Vectors
A {term:unit vector} is a vector with magnitude $1.$ For any nonzero vector $\textbf{v},$ we can use scalar multiplication to find a unit vector $\textbf{u}$ that has the same direction as $\textbf{v}.$ To do this, we multiply the vector by the reciprocal of its magnitude:

$\textbf{u}=\frac{1}{\| \textbf{v}\|}\textbf{v}.$  {eq:fs-id1167793887625}

Recall that when we defined scalar multiplication, we noted that $\| k\textbf{v}\| =|k|\cdot \| \textbf{v}\| .$ For $\textbf{u}=\frac{1}{\| \textbf{v}\|}\textbf{v},$ it follows that $\| \textbf{u}\| =\frac{1}{\| \textbf{v}\|}(\| \textbf{v}\| )=1.$ We say that $\textbf{u}$ is the *unit vector in the direction of*$\textbf{v}$ ([ref:CNX_Calc_Figure_12_01_022]). The process of using scalar multiplication to find a unit vector with a given direction is called {term:normalization}.

> FIGURE {fig:CNX_Calc_Figure_12_01_022} src=../../media/CNX_Calc_Figure_12_01_022.jpg
> alt: This image has two figures. The first is a vector labeled “v.” The second figure is a vector in the same direction labeled “u.” This vector has a length of 1 unit.
> caption: The vector $\textbf{v}$ and associated unit vector $\textbf{u}=\frac{1}{\| \textbf{v}\|}\textbf{v}.$ In this case, $\| \textbf{v}\| >1.$

:::example {ex:fs-id1167793950842} Finding a Unit Vector

:::exercise {fs-id1167793950844} type= 
PROBLEM:
Let $\textbf{v}=\langle 1,2\rangle .$
a. Find a unit vector with the same direction as $\textbf{v}.$
b. Find a vector $\textbf{w}$ with the same direction as $\textbf{v}$ such that $\| \textbf{w}\| =7.$
SOLUTION:
a. First, find the magnitude of $\textbf{v},$ then divide the components of $\textbf{v}$ by the magnitude:

$\| \textbf{v}\| =\sqrt{{1}^{2}+{2}^{2}}=\sqrt{1+4}=\sqrt{5}$  {eq:fs-id1167793409731}

$\textbf{u}=\frac{1}{\| \textbf{v}\|}\textbf{v}=\frac{1}{\sqrt{5}}\langle 1,2\rangle =\langle \frac{1}{\sqrt{5}},\frac{2}{\sqrt{5}}\rangle .$  {eq:fs-id1167793370556}

b. The vector $\textbf{u}$ is in the same direction as $\textbf{v}$ and $\| \textbf{u}\| =1.$ Use scalar multiplication to increase the length of $\textbf{u}$ without changing direction:

$\textbf{w}=7\textbf{u}=7\langle \frac{1}{\sqrt{5}},\frac{2}{\sqrt{5}}\rangle =\langle \frac{7}{\sqrt{5}},\frac{14}{\sqrt{5}}\rangle .$  {eq:fs-id1167793455124}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794074288} type= 
PROBLEM:
Let $\textbf{v}=\langle 9,2\rangle .$ Find a vector with magnitude $5$ in the opposite direction as $\textbf{v}.$
SOLUTION:
$\langle -\frac{45}{\sqrt{85}},-\frac{10}{\sqrt{85}}\rangle$
COMMENTARY: Hint
First, find a unit vector in the same direction as $\textbf{v}.$
:::
:::
We have seen how convenient it can be to write a vector in component form. Sometimes, though, it is more convenient to write a vector as a sum of a horizontal vector and a vertical vector. To make this easier, let’s look at standard unit vectors. The {term:standard unit vectors} are the vectors $\textbf{i}=\langle 1,0\rangle$ and $\textbf{j}=\langle 0,1\rangle$ ([ref:CNX_Calc_Figure_12_01_023]).

> FIGURE {fig:CNX_Calc_Figure_12_01_023} src=../../media/CNX_Calc_Figure_12_01_023.jpg
> alt: This figure has the x and y axes of a coordinate system in the first quadrant. On the x-axis there is a vector labeled “i,” which equals <1,0>. The second vector is on the y-axis and is labeled “j” which equals <0,1>.
> caption: The standard unit vectors $\textbf{i}$ and $\textbf{j}.$

By applying the properties of vectors, it is possible to express any vector in terms of $\textbf{i}$ and $\textbf{j}$ in what we call a *linear combination*:

$\textbf{v}=\langle x,y\rangle =\langle x,0\rangle +\langle 0,y\rangle =x\langle 1,0\rangle +y\langle 0,1\rangle =x\textbf{i}+y\textbf{j}.$  {eq:fs-id1167794054941}

Thus, $\textbf{v}$ is the sum of a horizontal vector with magnitude $x,$ and a vertical vector with magnitude $y,$ as in the following figure.

> FIGURE {fig:CNX_Calc_Figure_12_01_024} src=../../media/CNX_Calc_Figure_12_01_024.jpg
> alt: This figure is a right triangle. The horizontal side is labeled “xi.” The vertical side is labeled “yj.” The hypotenuse is a vector labeled “v.”
> caption: The vector $\textbf{v}$ is the sum of $x\textbf{i}$ and $y\textbf{j}.$

:::example {ex:fs-id1167794138316} Using Standard Unit Vectors

:::exercise {fs-id1167794090638} type= 
PROBLEM:
a. Express the vector $\textbf{w}=\langle 3,−4\rangle$ in terms of standard unit vectors.
b. Vector $\textbf{u}$ is a unit vector that forms an angle of $60\text{°}$ with the positive *x*-axis. Use standard unit vectors to describe $\textbf{u}.$
SOLUTION:
a. Resolve vector $\textbf{w}$ into a vector with a zero *y*-component and a vector with a zero *x*-component:

$\textbf{w}=\langle 3,−4\rangle =3\textbf{i}-4\textbf{j}.$  {eq:fs-id1167793367211}

b. Because $\textbf{u}$ is a unit vector, the terminal point lies on the unit circle when the vector is placed in standard position ([ref:CNX_Calc_Figure_12_01_019]).

$\begin{array}{rl}u & =\langle \text{cos}\;60\text{°},\text{sin}\;60\text{°}\rangle \\ & =\langle \frac{1}{2},\frac{\sqrt{3}}{2}\rangle \\ & =\frac{1}{2}\textbf{i}+\frac{\sqrt{3}}{2}\textbf{j}.\end{array}$  {eq:fs-id1167793937143}

> FIGURE {fig:CNX_Calc_Figure_12_01_019} src=../../media/CNX_Calc_Figure_12_01_019.jpg
> alt: This figure is a unit circle. It is a circle centered at the origin. It has a vector with initial point at the origin and terminal point on the circle. The terminal point is labeled (cos(theta), sin(theta)). The length of the vector is 1 unit. There is also a right triangle formed with the vector as the hypotenuse. The horizontal side is labeled “cos(theta)” and the vertical side is labeled “sin(theta).”
> caption: The terminal point of $\textbf{u}$ lies on the unit circle $(\text{cos}\;\theta ,\text{sin}\;\theta ).$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793416660} type= 
PROBLEM:
Let $\textbf{a}=\langle 16,−11\rangle$ and let $\textbf{b}$ be a unit vector that forms an angle of $225\text{°}$ with the positive *x*-axis. Express $\textbf{a}$ and $\textbf{b}$ in terms of the standard unit vectors.
SOLUTION:
$\textbf{a}=16\textbf{i}-11\textbf{j},$ $\textbf{b}=-\frac{\sqrt{2}}{2}\textbf{i}-\frac{\sqrt{2}}{2}\textbf{j}$
COMMENTARY: Hint
Use sine and cosine to find the components of $\textbf{b}.$
:::
:::

## Applications of Vectors
Because vectors have both direction and magnitude, they are valuable tools for solving problems involving such applications as motion and {index:force}. Recall the boat example and the quarterback example we described earlier. Here we look at two other examples in detail.

:::example {ex:fs-id1167793562339} Finding Resultant Force

:::exercise {fs-id1167793516790} type= 
PROBLEM:
Jane’s car is stuck in the mud. Lisa and Jed come along in a truck to help pull her out. They attach one end of a tow strap to the front of the car and the other end to the truck’s trailer hitch, and the truck starts to pull. Meanwhile, Jane and Jed get behind the car and push. The truck generates a horizontal force of $300$ lb on the car. Jane and Jed are pushing at a slight upward angle and generate a force of $150$ lb on the car. These forces can be represented by vectors, as shown in [ref:CNX_Calc_Figure_12_01_020]. The angle between these vectors is $15\text{°}.$ Find the resultant force (the vector sum) and give its magnitude to the nearest tenth of a pound and its direction angle from the positive *x*-axis.

> FIGURE {fig:CNX_Calc_Figure_12_01_020} src=../../media/CNX_Calc_Figure_12_01_020.jpg
> alt: This image is the side view of an automobile. From the front of the automobile there is a horizontal vector labeled “300 pounds.” Also, from the front of the automobile there is another vector labeled “150 pounds.” The angle between the two vectors is 15 degrees.
> caption: Two forces acting on a car in different directions.

SOLUTION:
To find the effect of combining the two forces, add their representative vectors. First, express each vector in component form or in terms of the standard unit vectors. For this purpose, it is easiest if we align one of the vectors with the positive *x*-axis. The horizontal vector, then, has initial point $(0,0)$ and terminal point $(300,0).$ It can be expressed as $\langle 300,0\rangle$ or $300\textbf{i}.$
The second vector has magnitude $150$ and makes an angle of $15\text{°}$ with the first, so we can express it as $\langle 150\;\text{cos}(15\text{°}),150\;\text{sin}(15\text{°})\rangle ,$ or $150\;\text{cos}(15\text{°})\textbf{i}+150\;\text{sin}(15\text{°})\textbf{j}.$ Then, the sum of the vectors, or resultant vector, is $\textbf{r}=\langle 300,0\rangle +\langle 150\;\text{cos}(15\text{°}),150\;\text{sin}(15\text{°})\rangle ,$ and we have

$\begin{array}{rl}\| \textbf{r}\| & =\sqrt{{(300+150\;\text{cos}(15\text{°}))}^{2}+{(150\;\text{sin}(15\text{°}))}^{2}} \\ & \approx 446.6.\end{array}$  {eq:fs-id1167793951526}

The angle $\theta$ made by $\textbf{r}$ and the positive *x*-axis has $\text{tan}\;\theta =\frac{150\;\text{sin}\;15\text{°}}{(300+150\;\text{cos}\;15\text{°})}\approx 0.09,$ so $\theta \approx ta{n}^{−1}(0.09)\approx 5\text{°},$ which means the resultant force $\textbf{r}$ has an angle of $5\text{°}$ above the horizontal axis.
:::
:::

:::example {ex:fs-id1167793590635} Finding Resultant Velocity

:::exercise {fs-id1167793590637} type= 
PROBLEM:
An airplane flies due west at an airspeed of $425$ mph. The wind is blowing from the northeast at $40$ mph. What is the ground speed of the airplane? What is the bearing of the airplane?
SOLUTION:
Let’s start by sketching the situation described ([ref:CNX_Calc_Figure_12_01_021]).

> FIGURE {fig:CNX_Calc_Figure_12_01_021} src=../../media/CNX_Calc_Figure_12_01_021.jpg
> alt: This figure is the image of an airplane. Coming out of the front of the airplane are two vectors. The first vector is labeled “425” and the second vector is labeled “40.” The angle between the vectors is 45 degrees.
> caption: Initially, the plane travels due west. The wind is from the northeast, so it is blowing to the southwest. The angle between the plane’s course and the wind is $45\text{°}.$ (Figure not drawn to scale.)

Set up a sketch so that the initial points of the vectors lie at the origin. Then, the plane’s velocity vector is $\textbf{p}=−425\textbf{i}.$ The vector describing the wind makes an angle of $225\text{°}$ with the positive *x*-axis:

$\textbf{w}=\langle 40\;\text{cos}(225\text{°}),40\;\text{sin}(225\text{°})\rangle =\langle -\frac{40}{\sqrt{2}},-\frac{40}{\sqrt{2}}\rangle =-\frac{40}{\sqrt{2}}\textbf{i}-\frac{40}{\sqrt{2}}\textbf{j}.$  {eq:fs-id1167794288110}

When the airspeed and the wind act together on the plane, we can add their vectors to find the resultant force:

$\mathbf{p+w}=−425\textbf{i}+(-\frac{40}{\sqrt{2}}\textbf{i}-\frac{40}{\sqrt{2}}\textbf{j})=(−425-\frac{40}{\sqrt{2}})\textbf{i}-\frac{40}{\sqrt{2}}\textbf{j}.$  {eq:fs-id1167793418698}

The magnitude of the resultant vector shows the effect of the wind on the ground speed of the airplane:

$\| \mathbf{p+w}\| =\sqrt{{(−425-\frac{40}{\sqrt{2}})}^{2}+{(-\frac{40}{\sqrt{2}})}^{2}}\approx 454.17\;\text{mph}$  {eq:fs-id1167794173035}

As a result of the wind, the plane is traveling at approximately $454$ mph relative to the ground.
To determine the bearing of the airplane, we want to find the direction of the vector $\mathbf{p+w}\text{:}$

$\begin{array}{rll}\text{tan}\;\theta & = & \frac{-\frac{40}{\sqrt{2}}}{(−425-\frac{40}{\sqrt{2}})}\approx 0.06 \\ \theta & \approx & 3.57\text{°}.\end{array}$  {eq:fs-id1163723332433}

The overall direction of the plane is $3.57\text{°}$ south of west.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793371467} type= 
PROBLEM:
An airplane flies due north at an airspeed of $550$ mph. The wind is blowing from the northwest at $50$ mph. What is the ground speed of the airplane?
SOLUTION:
Approximately $516$ mph
COMMENTARY: Hint
Sketch the vectors with the same initial point and find their sum.
:::
:::

## Key Concepts {section:key-concepts}
- Vectors are used to represent quantities that have both magnitude and direction.
- We can add vectors by using the parallelogram method or the triangle method to find the sum. We can multiply a vector by a scalar to change its length or give it the opposite direction.
- Subtraction of vectors is defined in terms of adding the negative of the vector.
- A vector is written in component form as $\textbf{v}=\langle x,y\rangle .$
- The magnitude of a vector is a scalar: $\| \textbf{v}\| =\sqrt{{x}^{2}+{y}^{2}}.$
- A unit vector $\textbf{u}$ has magnitude $1$ and can be found by dividing a vector by its magnitude: $\textbf{u}=\frac{1}{\| \textbf{v}\|}\textbf{v}.$ The standard unit vectors are $\textbf{i}=\langle 1,0\rangle \;\text{and}\;\textbf{j}=\langle 0,1\rangle .$ A vector $\textbf{v}=\langle x,y\rangle$ can be expressed in terms of the standard unit vectors as $\textbf{v}=x\textbf{i}+y\textbf{j}.$
- Vectors are often used in physics and engineering to represent forces and velocities, among other quantities.

##  {section:section-exercises}
For the following exercises, consider points $P(−1,3),$ $Q(1,5),$ and $R(−3,7).$ Determine the requested vectors and express each of them a. in component form and b. by using the standard unit vectors.

:::exercise {fs-id1167794059494} type= 
PROBLEM:
$\vec{PQ}$
SOLUTION:
a. $\vec{PQ}=\langle 2,2\rangle ;$ b. $\vec{PQ}=2\text{i}+2\text{j}$
:::

:::exercise {fs-id1167793992368} type= 
PROBLEM:
$\vec{PR}$
:::

:::exercise {fs-id1167793301149} type= 
PROBLEM:
$\vec{QP}$
SOLUTION:
a. $\vec{QP}=\langle −2,−2\rangle ;$ b. $\vec{QP}=−2\text{i}-2\text{j}$
:::

:::exercise {fs-id1167793722626} type= 
PROBLEM:
$\vec{RP}$
:::

:::exercise {fs-id1167793771062} type= 
PROBLEM:
$\vec{PQ}+\vec{PR}$
SOLUTION:
a. $\vec{PQ}+\vec{PR}=\langle 0,6\rangle ;$ b. $\vec{PQ}+\vec{PR}=6\text{j}$
:::

:::exercise {fs-id1167794040152} type= 
PROBLEM:
$\vec{PQ}-\vec{PR}$
:::

:::exercise {fs-id1167793912933} type= 
PROBLEM:
$2\vec{PQ}-2\vec{PR}$
SOLUTION:
a. $2\vec{PQ}-2\vec{PR}=\langle 8,−4\rangle ;$ b. $2\vec{PQ}-2\vec{PR}=8\text{i}-4\text{j}$
:::

:::exercise {fs-id1167793280451} type= 
PROBLEM:
$2\vec{PQ}+\frac{1}{2}\vec{PR}$
:::

:::exercise {fs-id1167793516171} type= 
PROBLEM:
The unit vector in the direction of $\vec{PQ}$
SOLUTION:
a. $\langle \frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\rangle ;$ b. $\frac{1}{\sqrt{2}}\text{i}+\frac{1}{\sqrt{2}}\text{j}$
:::

:::exercise {fs-id1167794097299} type= 
PROBLEM:
The unit vector in the direction of $\vec{PR}$
:::

:::exercise {fs-id1167793948426} type= 
PROBLEM:
A vector $\textbf{v}$ has initial point $(−1,−3)$ and terminal point $(2,1).$ Find the unit vector in the direction of $\textbf{v}.$ Express the answer in component form.
SOLUTION:
$\langle \frac{3}{5},\frac{4}{5}\rangle$
:::

:::exercise {fs-id1167793286898} type= 
PROBLEM:
A vector $\textbf{v}$ has initial point $(−2,5)$ and terminal point $(3,−1).$ Find the unit vector in the direction of $\textbf{v}.$ Express the answer in component form.
:::

:::exercise {fs-id1167793886473} type= 
PROBLEM:
The vector $\textbf{v}$ has initial point $P(1,0)$ and terminal point $Q$ that is on the *y*-axis and above the initial point. Find the coordinates of terminal point $Q$ such that the magnitude of the vector $\textbf{v}$ is $\sqrt{5}.$
SOLUTION:
$Q(0,2)$
:::

:::exercise {fs-id1167793450259} type= 
PROBLEM:
The vector $\textbf{v}$ has initial point $P(1,1)$ and terminal point $Q$ that is on the *x*-axis and left of the initial point. Find the coordinates of terminal point $Q$ such that the magnitude of the vector $\textbf{v}$ is $\sqrt{10}.$
:::
For the following exercises, use the given vectors $\text{a}$ and $\text{b}.$
a. Determine the vector sum $\text{a}+\text{b}$ and express it in both the component form and by using the standard unit vectors.
b. Find the vector difference $\text{a}-\text{b}$ and express it in both the component form and by using the standard unit vectors.
c. Verify that the vectors $\text{a},$ $\text{b},$ and $\text{a}+\text{b},$ and, respectively, $\text{a},$ $\text{b},$ and $\text{a}-\text{b}$ satisfy the triangle inequality.
d. Determine the vectors $2\text{a},$ $\text{−}\text{b},$ and $2\text{a}-\text{b}.$ Express the vectors in both the component form and by using standard unit vectors.

:::exercise {fs-id1167793547109} type= 
PROBLEM:
$\text{a}=2\text{i}+\text{j},$ $\text{b}=\text{i}+3\text{j}$
SOLUTION:
a. $\text{a}+\text{b}=3\text{i}+4\text{j},$ $\text{a}+\text{b}=\langle 3,4\rangle ;$ b. $\text{a}-\text{b}=\text{i}-2\text{j},$ $\text{a}-\text{b}=\langle 1,−2\rangle ;$ c. Answers will vary; d. $2\text{a}=4\text{i}+2\text{j},$ $2\text{a}=\langle 4,2\rangle ,$ $\text{−}\text{b}=\text{−}\text{i}-3\text{j},$ $\text{−}\text{b}=\langle −1,−3\rangle ,$ $2\text{a}-\text{b}=3\text{i}-\text{j},$ $2\text{a}-\text{b}=\langle 3,−1\rangle$
:::

:::exercise {fs-id1167793951510} type= 
PROBLEM:
$\text{a}=2\text{i},$ $\text{b}=−2\text{i}+2\text{j}$
:::

:::exercise {fs-id1167793409053} type= 
PROBLEM:
Let $\text{a}$ be a standard-position vector with terminal point $(−2,−4).$ Let $\text{b}$ be a vector with initial point $(1,2)$ and terminal point $(−1,4).$ Find the magnitude of vector $−3\text{a}+\text{b}-4\text{i}+\text{j}.$
SOLUTION:
$15$
:::

:::exercise {fs-id1167793936423} type= 
PROBLEM:
Let $\text{a}$ be a standard-position vector with terminal point at $(2,5).$ Let $\text{b}$ be a vector with initial point $(−1,3)$ and terminal point $(1,0).$ Find the magnitude of vector $\text{a}-3\text{b}+14\text{i}-14\text{j}.$
:::

:::exercise {fs-id1167793418646} type= 
PROBLEM:
Let $\text{u}$ and $\text{v}$ be two nonzero vectors that are nonequivalent. Consider the vectors $\text{a}=4\text{u}+5\text{v}$ and $\text{b}=\text{u}+2\text{v}$ defined in terms of $\text{u}$ and $\text{v}.$ Find the scalar $λ$ such that vectors $\text{a}+λ\text{b}$ and $\text{u}-\text{v}$ are equivalent.
SOLUTION:
$λ=−3$
:::

:::exercise {fs-id1167793929825} type= 
PROBLEM:
Let $\text{u}$ and $\text{v}$ be two nonzero vectors that are nonequivalent. Consider the vectors $\text{a}=2\text{u}-4\text{v}$ and $\text{b}=3\text{u}-7\text{v}$ defined in terms of $\text{u}$ and $\text{v}.$ Find the scalars $\alpha$ and $β$ such that vectors $\alpha \text{a}+β\text{b}$ and $\text{u}-\text{v}$ are equivalent.
:::

:::exercise {fs-id1167793936876} type= 
PROBLEM:
Consider the vector $\text{a}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle$ with components that depend on a real number $t.$ As the number $t$ varies, the components of $\text{a}(t)$ change as well, depending on the functions that define them.
a. Write the vectors $\text{a}(0)$ and $\text{a}(\pi )$ in component form.
b. Show that the magnitude $\| \text{a}(t)\|$ of vector $\text{a}(t)$ remains constant for any real number $t.$
c. As $t$ varies, show that the terminal point of vector $\text{a}(t)$ describes a circle centered at the origin of radius $1.$
SOLUTION:
a. $\text{a}(0)=\langle 1,0\rangle ,$ $\text{a}(\pi )=\langle −1,0\rangle ;$ b. Answers may vary; c. Answers may vary
:::

:::exercise {fs-id1167793616548} type= 
PROBLEM:
Consider vector $\text{a}(x)=\langle x,\sqrt{1-{x}^{2}}\rangle$ with components that depend on a real number $x\in [−1,1].$ As the number $x$ varies*,* the components of $\text{a}(x)$ change as well, depending on the functions that define them.
a. Write the vectors $\text{a}(0)$ and $\text{a}(1)$ in component form.
b. Show that the magnitude $\| \text{a}(x)\|$ of vector $\text{a}(x)$ remains constant for any real number $x$
c. As $x$ varies, show that if $\text{a}(x)$ is in standard position, then its terminal point describes a semicircle. Why is it only a semicircle?
:::

:::exercise {fs-id1167793502521} type= 
PROBLEM:
Show that vectors $\text{a}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle$ and $\text{a}(x)=\langle x,\sqrt{1-{x}^{2}}\rangle$ are equivalent for $x=1$ and $t=2k\pi ,$ where $k$ is an integer.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167793245011} type= 
PROBLEM:
Show that vectors $\text{a}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle$ and $\text{a}(x)=\langle x,\sqrt{1-{x}^{2}}\rangle$ are opposite for $x=1$ and $t=\pi +2k\pi ,$ where $k$ is an integer.
:::
For the following exercises, find vector $\textbf{v}$ with the given magnitude and in the same direction as vector $\textbf{u}.$

:::exercise {fs-id1167793504508} type= 
PROBLEM:
$\| \textbf{v}\| =7,\textbf{u}=\langle 3,4\rangle$
SOLUTION:
$\text{v}=\langle \frac{21}{5},\frac{28}{5}\rangle$
:::

:::exercise {fs-id1167793947939} type= 
PROBLEM:
$\| \textbf{v}\| =3,\textbf{u}=\langle −2,5\rangle$
:::

:::exercise {fs-id1167793941410} type= 
PROBLEM:
$\| \textbf{v}\| =7,\textbf{u}=\langle 3,−5\rangle$
SOLUTION:
$\text{v}=\langle \frac{21\sqrt{34}}{34},-\frac{35\sqrt{34}}{34}\rangle$
:::

:::exercise {fs-id1167793961737} type= 
PROBLEM:
$\| \textbf{v}\| =10,\textbf{u}=\langle 2,−1\rangle$
:::
For the following exercises, find the component form of vector $\textbf{u},$ given its magnitude and the angle the vector makes with the positive *x*-axis. Give exact answers when possible.

:::exercise {fs-id1167793557782} type= 
PROBLEM:
$\| \text{u}\| =2,$ $\theta =30\text{°}$
SOLUTION:
$\text{u}=\langle \sqrt{3},1\rangle$
:::

:::exercise {fs-id1167794051923} type= 
PROBLEM:
$\| \text{u}\| =6,$ $\theta =60\text{°}$
:::

:::exercise {fs-id1167793569298} type= 
PROBLEM:
$\| \text{u}\| =5,$ $\theta =\frac{\pi}{2}$
SOLUTION:
$\text{u}=\langle 0,5\rangle$
:::

:::exercise {fs-id1167793485913} type= 
PROBLEM:
$\| \text{u}\| =8,$ $\theta =\pi$
:::

:::exercise {fs-id1167793544443} type= 
PROBLEM:
$\| \textbf{u}\| =10,$ $\theta =\frac{5\pi}{6}$
SOLUTION:
$\text{u}=\langle −5\sqrt{3},5\rangle$
:::

:::exercise {fs-id1167793561581} type= 
PROBLEM:
$\| \textbf{u}\| =50,$ $\theta =\frac{3\pi}{4}$
:::
For the following exercises, vector $\text{u}$ is given. Find the angle $\theta \in [0,2\pi )$ that vector $\text{u}$ makes with the positive direction of the *x*-axis, in a counter-clockwise direction.

:::exercise {fs-id1167794054292} type= 
PROBLEM:
$\text{u}=5\sqrt{2}\text{i}-5\sqrt{2}\text{j}$
SOLUTION:
$\theta =\frac{7\pi}{4}$
:::

:::exercise {fs-id1167793273703} type= 
PROBLEM:
$\text{u}=\text{−}\sqrt{3}\text{i}-\text{j}$
:::

:::exercise {fs-id1167794056741} type= 
PROBLEM:
Let $\text{a}=\langle {a}_{1},{a}_{2}\rangle ,$ $\text{b}=\langle {b}_{1},{b}_{2}\rangle ,$ and $\text{c}=\langle {c}_{1},{c}_{2}\rangle$ be three nonzero vectors. If ${a}_{1}{b}_{2}-{a}_{2}{b}_{1}≠0,$ then show there are two scalars, $\alpha$ and $β,$ such that $\text{c}=\alpha \text{a}+β\text{b}.$
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167793498158} type= 
PROBLEM:
Consider vectors $\text{a}=\langle 2,−4\rangle ,$ $\textbf{b}=\langle −1,2\rangle ,$ and **c** = **0** Determine the scalars $\alpha$ and $β$ such that $\text{c}=\alpha \text{a}+β\text{b}.$
:::

:::exercise {fs-id1167793522408} type= 
PROBLEM:
Let $P({x}_{0},f({x}_{0}))$ be a fixed point on the graph of the differentiable function $f$ with a domain that is the set of real numbers.
a. Determine the real number ${z}_{0}$ such that point $Q({x}_{0}+1,{z}_{0})$ is situated on the line tangent to the graph of $f$ at point $P.$
b. Determine the unit vector $\textbf{u}$ with initial point $P$ in the direction of vector $PQ.$
SOLUTION:
a. ${z}_{0}=f({x}_{0})+{f}^{'}({x}_{0});$ b. $\text{u}=\frac{1}{\sqrt{1+{[{f}^{'}({x}_{0})]}^{2}}}\langle 1,{f}^{'}({x}_{0})\rangle$
:::

:::exercise {fs-id1167793384715} type= 
PROBLEM:
Consider the function $f(x)={x}^{4},$ where $x\in \mathbb{R}.$
a. Determine the real number ${z}_{0}$ such that point $Q(2,{z}_{0})$ s situated on the line tangent to the graph of $f$ at point $P(1,1).$
b. Determine the unit vector $\textbf{u}$ with initial point $P$ and terminal point $Q.$
:::

:::exercise {fs-id1167793501933} type= 
PROBLEM:
Consider $f$ and $g$ two functions defined on the same set of real numbers $D.$ Let $\text{a}=\langle x,f(x)\rangle$ and $\text{b}=\langle x,g(x)\rangle$ be two vectors that describe the graphs of the functions, where $x\in D.$ Show that if the graphs of the functions $f$ and $g$ do not intersect, then the vectors $\textbf{a}$ and $\textbf{b}$ are not equivalent.
:::

:::exercise {fs-id1167793751650} type= 
PROBLEM:
Find $x\in \mathbb{R}$ such that vectors $\text{a}=\langle x,\text{sin}\;x\rangle$ and $\text{b}=\langle x,\text{cos}\;x\rangle$ are equivalent.
:::

:::exercise {fs-id1167794012836} type= 
PROBLEM:
Calculate the coordinates of point $D$ such that $ABCD$ is a parallelogram, with $A(1,1),$ $B(2,4),$ and $C(7,4).$
SOLUTION:
$D(6,1)$
:::

:::exercise {fs-id1167793953368} type= 
PROBLEM:
Consider the points $A(2,1),$ $B(10,6),$ $C(13,4),$ and $D(16,−2).$ Determine the component form of vector $\vec{AD}.$
:::

:::exercise {fs-id1167793892953} type= 
PROBLEM:
The {index:speed} of an object is the magnitude of its related velocity vector. A football thrown by a quarterback has an initial speed of $70$ mph and an angle of elevation of $30\text{°}.$ Determine the velocity vector in mph and express it in component form. (Round to two decimal places.)

> IMAGE {img:fs-id1167793472160} src=../../media/CNX_Calc_Figure_12_01_207.jpg
> alt: This figure shows a football being thrown. The path of the football is represented by an arcing curve. At the beginning of the curve is a vector indicating the initial velocity.

SOLUTION:
$\langle 60.62,35\rangle$
:::

:::exercise {fs-id1167793279155} type= 
PROBLEM:
A baseball player throws a baseball at an angle of $30\text{°}$ with the horizontal. If the initial speed of the ball is $100$ mph, find the horizontal and vertical components of the initial velocity vector of the baseball. (Round to two decimal places.)
:::

:::exercise {fs-id1167793626543} type= 
PROBLEM:
A bullet is fired with an initial velocity of $1500$ ft/sec at an angle of $60\text{°}$ with the horizontal. Find the horizontal and vertical components of the velocity vector of the bullet. (Round to two decimal places.)

> IMAGE {img:fs-id1167793933067} src=../../media/CNX_Calc_Figure_12_01_208.jpg
> alt: This figure is the first quadrant of a coordinate system. There is a vector from the origin that is labeled “v sub 0 = 1500 feet per second.” The angle between the x-axis and the vector is 60 degrees.

SOLUTION:
The horizontal and vertical components are $750$ ft/sec and $1299.04$ ft/sec, respectively.
:::

:::exercise {fs-id1167793594054} type= 
PROBLEM:
**[T]** A 65-kg sprinter exerts a force of $798$ N at a $19\text{°}$ angle with respect to the ground on the starting block at the instant a race begins. Find the horizontal component of the force. (Round to two decimal places.)
:::

:::exercise {fs-id1167794200370} type= 
PROBLEM:
**[T]** Two forces, a horizontal force of $45$ lb and another of $52$ lb, act on the same object. The angle between these forces is $25\text{°}.$ Find the magnitude and direction angle from the positive *x*-axis of the resultant force that acts on the object. (Round to two decimal places.)

> IMAGE {img:fs-id1167793625625} src=../../media/CNX_Calc_Figure_12_01_202.jpg
> alt: This figure has two vectors with the same initial point. The first vector is labeled “52 lb” and the second vector is labeled “45 lb.” The angle between the vectors is 25 degrees.

SOLUTION:
The magnitude of resultant force is $94.71$ lb; the direction angle is $13.42\text{°}.$
:::

:::exercise {fs-id1167793639250} type= 
PROBLEM:
**[T]** Two forces, a vertical force of $26$ lb and another of $45$ lb, act on the same object. The angle between these forces is $55\text{°}.$ Find the magnitude and direction angle from the positive *x*-axis of the resultant force that acts on the object. (Round to two decimal places.)
:::

:::exercise {fs-id1167793582477} type= 
PROBLEM:
**[T]** Three forces act on object. Two of the forces have the magnitudes $58$ N and $27$ N, and make angles $53\text{°}$ and $152\text{°},$ respectively, with the positive *x*-axis. Find the magnitude and the direction angle from the positive *x*-axis of the third force such that the resultant force acting on the object is zero. (Round to two decimal places.)
SOLUTION:
The magnitude of the third vector is $60.03$ N; the direction angle is $259.38\text{°}.$
:::

:::exercise {fs-id1167793503129} type= 
PROBLEM:
Three forces with magnitudes $80$ lb, $120$ lb, and $60$ lb act on an object at angles of $45\text{°},$ $60\text{°}$ and $30\text{°},$ respectively, with the positive *x*-axis. Find the magnitude and direction angle from the positive *x*-axis of the resultant force. (Round to two decimal places.)

> IMAGE {img:fs-id1167793414173} src=../../media/CNX_Calc_Figure_12_01_203.jpg
> alt: This figure is the first quadrant of a coordinate system. There are three vectors, all with the origin as the initial point. The first vector is labeled “60 lb” and makes an angle of 30 degrees with the x-axis. The second vector is labeled “80 lb” and makes an angle of 45 degrees with the x-axis. The third vector is labeled “120 lb” and makes a 60 degree angle with the x-axis.

:::

:::exercise {fs-id1167793628636} type= 
PROBLEM:
**[T]** An airplane is flying in the direction of $43\text{°}$ east of north (also abbreviated as $\text{N}43\text{E})$ at a speed of $550$ mph. A wind with speed $25$ mph comes from the southwest at a bearing of $\text{N}15\text{E}.$ What are the ground speed and new direction of the airplane?

> IMAGE {img:fs-id1167793640939} src=../../media/CNX_Calc_Figure_12_01_204.jpg
> alt: This figure is the first quadrant of a coordinate system. There are two vectors both of which have the origin as the initial point. The first vector is labeled “550 miles per hour” and has an angle of 43 degrees from the y-axis. There is also an image of an airplane at the end of the vector. The second vector is labeled “25 miles per hour” and has an angle of 15 degrees from the y-axis.

SOLUTION:
The new ground speed of the airplane is $572.19$ mph; the new direction is $\text{N}41.82\text{E}.$
:::

:::exercise {fs-id1167793930030} type= 
PROBLEM:
**[T]** A boat is traveling in the water at $30$ mph in a direction of $\text{N}20\text{E}$ (that is, $20\text{°}$ east of north). A strong current is moving at $15$ mph in a direction of $\text{N}45\text{E}.$ What are the new speed and direction of the boat?

> IMAGE {img:fs-id1167793419231} src=../../media/CNX_Calc_Figure_12_01_205.jpg
> alt: This figure is the first quadrant of a coordinate system. There are two vectors both of which have the origin as the initial point. The first vector is labeled “15” and has an angle of 45 degrees from the y-axis. The second vector is labeled “30” and has an angle of 20 degrees from the y-axis. There is also an image of a boat at the end of the vector.

:::

:::exercise {fs-id1167794098521} type= 
PROBLEM:
**[T]** A 50-lb weight is hung by a cable so that the two portions of the cable make angles of $40\text{°}$ and $53\text{°},$ respectively, with the horizontal. Find the magnitudes of the forces of tension ${\text{T}}_{1}$ and ${\text{T}}_{2}$ in the cables if the resultant force acting on the object is zero. (Round to two decimal places.)

> IMAGE {img:fs-id1167793930658} src=../../media/CNX_Calc_Figure_12_01_206.jpg
> alt: This figure is a horizontal line with two vectors below the line formina a triangle with the line. The vectors point toward the ends of the line. The angle between the horizontal line and the first vector is 40 degrees. The angle between the horizontal line and the second vector is 53 degrees. At the point where the two vectors meet is a rectangle labeled “50 lb.”

SOLUTION:
$\| {\textbf{T}}_{1}\| =30.13\;\text{lb},$ $\| {\textbf{T}}_{2}\| =38.35\;\text{lb}$
:::

:::exercise {fs-id1167794211063} type= 
PROBLEM:
**[T]** A 62-lb weight hangs from a rope that makes the angles of $29\text{°}$ and $61\text{°},$ respectively, with the horizontal. Find the magnitudes of the forces of tension ${\text{T}}_{1}$ and ${\text{T}}_{2}$ in the cables if the resultant force acting on the object is zero. (Round to two decimal places.)
:::

:::exercise {fs-id1167793546872} type= 
PROBLEM:
**[T]** A 1500-lb boat is parked on a ramp that makes an angle of $30\text{°}$ with the horizontal. The boat’s weight vector points downward and is a sum of two vectors: a horizontal vector ${\text{v}}_{1}$ that is parallel to the ramp and a vertical vector ${\text{v}}_{2}$ that is perpendicular to the inclined surface. The magnitudes of vectors ${\text{v}}_{1}$ and ${\text{v}}_{2}$ are the horizontal and vertical component, respectively, of the boat’s weight vector. Find the magnitudes of ${\text{v}}_{1}$ and ${\text{v}}_{2}.$ (Round to the nearest integer.)

> IMAGE {img:fs-id1167793287869} src=../../media/CNX_Calc_Figure_12_01_209.jpg
> alt: This figure shows a right triangle. The angle between the horizontal base and the hypotenuse is 30 degrees. On the hypotenuse is the image of a boat. From center of the boat there are three vectors. Two of the vectors are orthogonal with one in the direction of the boat and the other below the boat. The third vector is down, perpendicular to the vertical side.

SOLUTION:
$\| {\text{v}}_{1}\| =750$ lb, $\| {\text{v}}_{2}\| =1299$ lb
:::

:::exercise {fs-id1167793417009} type= 
PROBLEM:
**[T]** An 85-lb box is at rest on a $26\text{°}$ incline. Determine the magnitude of the force parallel to the incline necessary to keep the box from sliding. (Round to the nearest integer.)
:::

:::exercise {fs-id1167793445740} type= 
PROBLEM:
A guy-wire supports a pole that is
$75$ ft high. One end of the wire is attached to the top of the pole and the other end is anchored to the ground $50$ ft from the base of the pole. Determine the horizontal and vertical components of the force of tension in the wire if its magnitude is $50$ lb. (Round to the nearest integer.)

> IMAGE {img:fs-id1167793362180} src=../../media/CNX_Calc_Figure_12_01_210.jpg
> alt: This figure is a tower with a guy wire from the top to the ground. The tower, guy wire, and the ground form a right triangle. The base is labeled “50 feet” and is horizontal. The other side is labeled “75 feet” and is vertical. This side is the tower.

SOLUTION:
The two horizontal and vertical components of the force of tension are $28$ lb and $42$ lb, respectively.
:::

:::exercise {fs-id1167793638072} type= 
PROBLEM:
A telephone pole guy-wire has an angle of elevation of $35\text{°}$ with respect to the ground. The force of tension in the guy-wire is $120$ lb. Find the horizontal and vertical components of the force of tension. (Round to the nearest integer.)
:::

## Glossary
- {def} **component**: a scalar that describes either the vertical or horizontal direction of a vector
- {def} **equivalent vectors**: vectors that have the same magnitude and the same direction
- {def} **initial point**: the starting point of a vector
- {def} **magnitude**: the length of a vector
- {def} **normalization**: using scalar multiplication to find a unit vector with a given direction
- {def} **parallelogram method**: a method for finding the sum of two vectors; position the vectors so they share the same initial point; the vectors then form two adjacent sides of a parallelogram; the sum of the vectors is the diagonal of that parallelogram
- {def} **scalar**: a real number
- {def} **scalar multiplication**: a vector operation that defines the product of a scalar and a vector
- {def} **standard-position vector**: a vector with initial point $(0,0)$
- {def} **standard unit vectors**: unit vectors along the coordinate axes: $\textbf{i}=\langle 1,0\rangle ,\textbf{j}=\langle 0,1\rangle$
- {def} **terminal point**: the endpoint of a vector
- {def} **triangle inequality**: the length of any side of a triangle is less than the sum of the lengths of the other two sides
- {def} **triangle method**: a method for finding the sum of two vectors; position the vectors so the terminal point of one vector is the initial point of the other; these vectors then form two sides of a triangle; the sum of the vectors is the vector that forms the third side; the initial point of the sum is the initial point of the first vector; the terminal point of the sum is the terminal point of the second vector
- {def} **unit vector**: a vector with margnitude $1$
- {def} **vector**: a mathematical object that has both magnitude and direction
- {def} **vector addition**: a vector operation that defines the sum of two vectors
- {def} **vector difference**: the vector difference $\textbf{v}-\textbf{w}$ is defined as $\mathbf{v+}(\text{−}\textbf{w})=\mathbf{v+}(−1)\textbf{w}$
- {def} **vector sum**: the sum of two vectors, $\textbf{v}$ and $\textbf{w},$ can be constructed graphically by placing the initial point of $\textbf{w}$ at the terminal point of $\textbf{v};$ then the vector sum $\mathbf{v+w}$ is the vector with an initial point that coincides with the initial point of $\textbf{v},$ and with a terminal point that coincides with the terminal point of $\textbf{w}$
- {def} **zero vector**: the vector with both initial point and terminal point $(0,0)$

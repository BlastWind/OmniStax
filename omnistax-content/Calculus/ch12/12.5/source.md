# Equations of Lines and Planes in Space

## Learning Objectives {section:learning-objectives}
- Write the vector, parametric, and symmetric equations of a line through a given point in a given direction, and a line through two given points.
- Find the distance from a point to a given line.
- Write the vector and scalar equations of a plane through a given point with a given normal.
- Find the distance from a point to a given plane.
- Find the angle between two planes.

By now, we are familiar with writing equations that describe a line in two dimensions. To write an equation for a line, we must know two points on the line, or we must know the direction of the line and at least one point through which the line passes. In two dimensions, we use the concept of slope to describe the orientation, or direction, of a line. In three dimensions, we describe the direction of a line using a vector parallel to the line. In this section, we examine how to use equations to describe lines and planes in space.

## Equations for a Line in Space
Let’s first explore what it means for two vectors to be parallel. Recall that parallel vectors must have the same or opposite directions. If two nonzero vectors, $\textbf{u}$ and $\textbf{v},$ are parallel, we claim there must be a scalar, $k,$ such that $\textbf{u}=k\textbf{v}.$ If $\textbf{u}$ and $\textbf{v}$ have the same direction, simply choose $k=\frac{\| \textbf{u}\|}{\| \textbf{v}\|}.$ If $\textbf{u}$ and $\textbf{v}$ have opposite directions, choose $k=-\frac{\| \textbf{u}\|}{\| \textbf{v}\|}.$ Note that the converse holds as well. If $\textbf{u}=k\textbf{v}$ for some scalar $\text{k},$ then either $\textbf{u}$ and $\textbf{v}$ have the same direction $(k>0)$ or opposite directions $(k<0),$ so $\textbf{u}$ and $\textbf{v}$ are parallel. Therefore, two nonzero vectors $\textbf{u}$ and $\textbf{v}$ are parallel if and only if $\textbf{u}=k\textbf{v}$ for some scalar $\text{k}.$ By convention, the zero vector $\mathbf{0}$ is considered to be parallel to all vectors.
As in two dimensions, we can describe a line in space using a point on the line and the direction of the line, or a parallel vector, which we call the {term:direction vector} ([ref:CNX_Calc_Figure_12_05_001]). Let $L$ be a line in space passing through point $P({x}_{0},{y}_{0},{z}_{0}).$ Let $\textbf{v}=\langle a,b,c\rangle$ be a vector parallel to $L.$ Then, for any point $Q(x,y,z)$ on line $L$, we know that $\vec{PQ}$ is parallel to $\textbf{v}.$ Thus, as we just discussed, there is a scalar, $t,$ such that $\vec{PQ}=t\textbf{v},$ which gives

$$ \begin{array}{rll}\vec{PQ} & = & t\textbf{v} \\ \langle x-{x}_{0},y-{y}_{0},z-{z}_{0}\rangle & = & t\langle a,b,c\rangle \\ \langle x-{x}_{0},y-{y}_{0},z-{z}_{0}\rangle & = & \langle ta,tb,tc\rangle .\end{array} $$  {eq:fs-id1163723690717}

> FIGURE {fig:CNX_Calc_Figure_12_05_001} src=../../media/CNX_Calc_Figure_12_05_001.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a line segment passing through two points. The points are labeled “P = (x sub 0, y sub 0, z sub 0)” and “Q = (x, y, z).” There is also a vector in standard position drawn. The vector is labeled “v = <a, b, c>.”
> caption: Vector **v** is the direction vector for $\vec{PQ}.$

Using vector operations, we can rewrite [ref:fs-id1163723690717] as

$\begin{array}{rll}\langle x-{x}_{0},y-{y}_{0},z-{z}_{0}\rangle & = & \langle ta,tb,tc\rangle \\ \langle x,y,z\rangle -\langle {x}_{0},{y}_{0},{z}_{0}\rangle & = & t\langle a,b,c\rangle \\ \langle x,y,z\rangle & = & \langle {x}_{0},{y}_{0},{z}_{0}\rangle +t\langle a,b,c\rangle .\end{array}$  {eq:fs-id1163723862928}

Setting $\textbf{r}=\langle x,y,z\rangle$ and ${\textbf{r}}_{0}=\langle {x}_{0},{y}_{0},{z}_{0}\rangle ,$ we now have the {term:vector equation of a line}:

$$ \textbf{r}={\textbf{r}}_{0}+t\textbf{v}. $$  {eq:fs-id1163724080297}

Equating components, [ref:fs-id1163723690717] shows that the following equations are simultaneously true: $x-{x}_{0}=ta,$ $y-{y}_{0}=tb,$ and $z-{z}_{0}=tc.$ If we solve each of these equations for the component variables $x,y,\;\text{and}\;z,$ we get a set of equations in which each variable is defined in terms of the parameter *t* and that, together, describe the line. This set of three equations forms a set of {term:parametric equations of a line}:

$x={x}_{0}+ta\;y={y}_{0}+tb\;z={z}_{0}+tc.$  {eq:fs-id1163723864428}

If we solve each of the equations for $t$ assuming $a,b,\;\text{and}\;c$ are nonzero, we get a different description of the same line:

$\frac{x-{x}_{0}}{a}=t\;\frac{y-{y}_{0}}{b}=t\;\frac{z-{z}_{0}}{c}=t.$  {eq:fs-id1163723701468}

Because each expression equals *t*, they all have the same value. We can set them equal to each other to create {term:symmetric equations of a line}:

$\frac{x-{x}_{0}}{a}=\frac{y-{y}_{0}}{b}=\frac{z-{z}_{0}}{c}.$  {eq:fs-id1163723758952}

We summarize the results in the following theorem.

:::note [theorem] Parametric and Symmetric Equations of a Line
A line $L$ parallel to vector $\textbf{v}=\langle a,b,c\rangle$ and passing through point $P({x}_{0},{y}_{0},{z}_{0})$ can be described by the following parametric equations:

$$ x={x}_{0}+ta,y={y}_{0}+tb,\;\text{and}\;z={z}_{0}+tc. $$  {eq:fs-id1163723684994}

If the constants $a,b,\;\text{and}\;c$ are all nonzero, then $L$ can be described by the symmetric equation of the line:

$$ \frac{x-{x}_{0}}{a}=\frac{y-{y}_{0}}{b}=\frac{z-{z}_{0}}{c}. $$  {eq:fs-id1163724037306}

:::
The parametric equations of a line are not unique. Using a different parallel vector or a different point on the line leads to a different, equivalent representation. Each set of parametric equations leads to a related set of symmetric equations, so it follows that a symmetric equation of a line is not unique either.

:::example {ex:fs-id1163723137804} Equations of a Line in Space

:::exercise {fs-id1163724057535} type= 
PROBLEM:
Find parametric and symmetric equations of the line passing through points $(1,4,−2)$ and $(−3,5,0).$
SOLUTION:
First, identify a vector parallel to the line:

$\textbf{v}=\langle −3-1,5-4,0-(−2)\rangle =\langle −4,1,2\rangle .$  {eq:fs-id1163723954440}

Use either of the given points on the line to complete the parametric equations:

$x=1-4t,y=4+t,\;\text{and}\;z=−2+2t.$  {eq:fs-id1163723139660}

Solve each equation for $t$ to create the symmetric equation of the line:

$\frac{x-1}{−4}=y-4=\frac{z+2}{2}.$  {eq:fs-id1163724043281}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723339725} type= 
PROBLEM:
Find parametric and symmetric equations of the line passing through points $(1,−3,2)$ and $(5,−2,8).$
SOLUTION:
Possible set of parametric equations: $x=1+4t,y=−3+t,z=2+6t;$
related set of symmetric equations: $\frac{x-1}{4}=y+3=\frac{z-2}{6}$
COMMENTARY: Hint
Start by finding a vector parallel to the line.
:::
:::
Sometimes we don’t want the equation of a whole line, just a line segment. In this case, we limit the values of our parameter $t.$ For example, let $P({x}_{0},{y}_{0},{z}_{0})$ and $Q({x}_{1},{y}_{1},{z}_{1})$ be points on a line, and let $\textbf{p}=\langle {x}_{0},{y}_{0},{z}_{0}\rangle$ and $\textbf{q}=\langle {x}_{1},{y}_{1},{z}_{1}\rangle$ be the associated position vectors. In addition, let $\textbf{r}=\langle x,y,z\rangle .$ We want to find a vector equation for the line segment between $P$ and $Q.$ Using $P$ as our known point on the line, and $\vec{PQ}=\langle {x}_{1}-{x}_{0},{y}_{1}-{y}_{0},{z}_{1}-{z}_{0}\rangle$ as the direction vector equation, [ref:fs-id1163724080297] gives

$\textbf{r}=\textbf{p}+t(\vec{PQ}).$  {eq:fs-id1163723334359}

Using properties of vectors, then

$\begin{array}{rl}\textbf{r} & =\textbf{p}+t(\vec{PQ}) \\ & =\langle {x}_{0},{y}_{0},{z}_{0}\rangle +t\langle {x}_{1}-{x}_{0},{y}_{1}-{y}_{0},{z}_{1}-{z}_{0}\rangle \\ & =\langle {x}_{0},{y}_{0},{z}_{0}\rangle +t(\langle {x}_{1},{y}_{1},{z}_{1}\rangle -\langle {x}_{0},{y}_{0},{z}_{0}\rangle ) \\ & =\langle {x}_{0},{y}_{0},{z}_{0}\rangle +t\langle {x}_{1},{y}_{1},{z}_{1}\rangle -t\langle {x}_{0},{y}_{0},{z}_{0}\rangle \\ & =(1-t)\langle {x}_{0},{y}_{0},{z}_{0}\rangle +t\langle {x}_{1},{y}_{1},{z}_{1}\rangle \\ & =(1-t)\textbf{p}+t\textbf{q}.\end{array}$  {eq:fs-id1163723211105}

Thus, the vector equation of the line passing through $P$ and $Q$ is

$\textbf{r}=(1-t)\textbf{p}+t\textbf{q}.$  {eq:fs-id1163723077712}

Remember that we didn’t want the equation of the whole line, just the line segment between $P$ and $Q.$ Notice that when $t=0,$ we have $\mathbf{r=p},$ and when $t=1,$ we have $\mathbf{r=q}.$ Therefore, the vector equation of the line segment between $P$ and $Q$ is

$$ \textbf{r}=(1-t)\textbf{p}+t\textbf{q},0\le t\le 1. $$  {eq:fs-id1163723311060}

Going back to [ref:fs-id1163724080297], we can also find parametric equations for this line segment. We have

$\begin{array}{rll}\textbf{r} & = & \textbf{p}+t(\vec{PQ}) \\ \langle x,y,z\rangle & = & \langle {x}_{0},{y}_{0},{z}_{0}\rangle +t\langle {x}_{1}-{x}_{0},{y}_{1}-{y}_{0},{z}_{1}-{z}_{0}\rangle \\ & = & \langle {x}_{0}+t({x}_{1}-{x}_{0}),{y}_{0}+t({y}_{1}-{y}_{0}),{z}_{0}+t({z}_{1}-{z}_{0})\rangle .\end{array}$  {eq:fs-id1163724104679}

Then, the parametric equations are

$$ x={x}_{0}+t({x}_{1}-{x}_{0}),y={y}_{0}+t({y}_{1}-{y}_{0}),z={z}_{0}+t({z}_{1}-{z}_{0}),0\le t\le 1. $$  {eq:fs-id1163723756804}

:::example {ex:fs-id1163724049760} Parametric Equations of a Line Segment

:::exercise {fs-id1163724049762} type= 
PROBLEM:
Find parametric equations of the line segment between the points $P(2,1,4)$ and $Q(3,−1,3).$
SOLUTION:
By [ref:fs-id1163723756804], we have

$x={x}_{0}+t({x}_{1}-{x}_{0}),y={y}_{0}+t({y}_{1}-{y}_{0}),z={z}_{0}+t({z}_{1}-{z}_{0}),0\le t\le 1.$  {eq:fs-id1163724069738}

Working with each component separately, we get

$\begin{array}{rl}x & ={x}_{0}+t({x}_{1}-{x}_{0}) \\ & =2+t(3-2) \\ & =2+t,\end{array}$  {eq:fs-id1163724054261}

$\begin{array}{rl}y & ={y}_{0}+t({y}_{1}-{y}_{0}) \\ & =1+t(−1-1) \\ & =1-2t,\end{array}$  {eq:fs-id1163723311148}

and

$\begin{array}{rl}z & ={z}_{0}+t({z}_{1}-{z}_{0}) \\ & =4+t(3-4) \\ & =4-t.\end{array}$  {eq:fs-id1163723280730}

Therefore, the parametric equations for the line segment are

$x=2+t,y=1-2t,z=4-t,0\le t\le 1.$  {eq:fs-id1163723200092}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724036479} type= 
PROBLEM:
Find parametric equations of the line segment between points $P(−1,3,6)$ and $Q(−8,2,4).$
SOLUTION:
$x=−1-7t,y=3-t,z=6-2t,0\le t\le 1$
COMMENTARY: Hint
Use [ref:fs-id1163723756804].
:::
:::

## Distance between a Point and a Line
We already know how to calculate the distance between two points in space. We now expand this definition to describe the distance between a point and a line in space. Several real-world contexts exist when it is important to be able to calculate these distances. When building a home, for example, builders must consider “setback” requirements, when structures or fixtures have to be a certain distance from the property line. Air travel offers another example. Airlines are concerned about the distances between populated areas and proposed flight paths.
Let $L$ be a line in the plane and let $M$ be any point not on the line. Then, we define distance $d$ from $M$ to $L$ as the length of line segment $\bar{MP},$ where $P$ is a point on $L$ such that $\bar{MP}$ is perpendicular to $L$ ([ref:CNX_Calc_Figure_12_05_002]).

> FIGURE {fig:CNX_Calc_Figure_12_05_002} src=../../media/CNX_Calc_Figure_12_05_002.jpg
> alt: This figure has two line segments. The first line is labeled “L” and has point P on the segment. The second line segment is drawn from point P to point M and is perpendicular to line L. The second line segment is labeled “d.”
> caption: The distance from point $M$ to line $L$ is the length of $\bar{MP}.$

When we’re looking for the distance between a line and a point in space, [ref:CNX_Calc_Figure_12_05_002] still applies. We still define the distance as the length of the perpendicular line segment connecting the point to the line. In space, however, there is no clear way to know which point on the line creates such a perpendicular line segment, so we select an arbitrary point on the line and use properties of vectors to calculate the distance. Therefore, let $P$ be an arbitrary point on line $L$ and let $\textbf{v}$ be a direction vector for $L$ ([ref:CNX_Calc_Figure_12_05_003]).

> FIGURE {fig:CNX_Calc_Figure_12_05_003} src=../../media/CNX_Calc_Figure_12_05_003.jpg
> alt: This figure has a line segment labeled “L.” On the line segment L there is point P. There is a vector drawn from point P to another point M. Also, from M there is a line segment drawn to line L. This segment is perpendicular to line L. There is also a vector labeled “v” on line segment L. A parallelogram has been formed with vector v, line segment P M, and two other segments back to line L.
> caption: Vectors $\vec{PM}$ and **v** form two sides of a parallelogram with base $\| \textbf{v}\|$ and height $d,$ which is the distance between a line and a point in space.

By [ref:fs-id1163723995104](module:m53903), vectors $\vec{PM}$ and $\textbf{v}$ form two sides of a parallelogram with area $\| \vec{PM}\;\times \;\textbf{v}\| .$ Using a formula from geometry, the area of this parallelogram can also be calculated as the product of its base and height:

$\| \vec{PM}\;\times \;\textbf{v}\| =\| \textbf{v}\| d.$  {eq:fs-id1163724087211}

We can use this formula to find a general formula for the distance between a line in space and any point not on the line.

:::note [theorem] Distance from a Point to a Line
Let $L$ be a line in space passing through point $P$ with direction vector $\textbf{v}.$ If $M$ is any point not on $L,$ then the distance from $M$ to $L$ is

$d=\frac{\| \vec{PM}\;\times \;\textbf{v}\|}{\| \textbf{v}\|}.$  {eq:fs-id1163724077443}

:::

:::example {ex:fs-id1163723384017} Calculating the Distance from a Point to a Line

:::exercise {fs-id1163723384019} type= 
PROBLEM:
Find the distance between the point $M=(1,1,3)$ and line $\frac{x-3}{4}=\frac{y+1}{2}=z-3.$
SOLUTION:
From the symmetric equations of the line, we know that vector $\textbf{v}=\langle 4,2,1\rangle$ is a direction vector for the line. Setting the symmetric equations of the line equal to zero, we see that point $P(3,−1,3)$ lies on the line. Then,

$\vec{PM}=\langle 1-3,1-(−1),3-3\rangle =\langle −2,2,0\rangle .$  {eq:fs-id1163724069395}

To calculate the distance, we need to find $\vec{PM}\;\times \;\textbf{v}\text{:}$

$\begin{array}{rl}\vec{PM}\;\times \;\textbf{v} & =|\begin{array}{rcc}\textbf{i} & \textbf{j} & \textbf{k} \\ −2 & 2 & 0 \\ 4 & 2 & 1\end{array}| \\ & =(2-0)\textbf{i}-(−2-0)\textbf{j}+(−4-8)\textbf{k} \\ & =2\textbf{i}+2\textbf{j}-12\textbf{k}.\end{array}$  {eq:fs-id1163724069667}

Therefore, the distance between the point and the line is ([ref:CNX_Calc_Figure_12_05_004])

$\begin{array}{rl}d & =\frac{\| \vec{PM}\;\times \;\textbf{v}\|}{\| \textbf{v}\|} \\ & =\frac{\sqrt{{2}^{2}+{2}^{2}+{12}^{2}}}{\sqrt{{4}^{2}+{2}^{2}+{1}^{2}}} \\ & =\frac{2\sqrt{38}}{\sqrt{21}}.\end{array}$  {eq:fs-id1163724147277}

> FIGURE {fig:CNX_Calc_Figure_12_05_004} src=../../media/CNX_Calc_Figure_12_05_004.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a 3-dimensional box drawn in the octant. There is a point labeled at (1, 1, 3). There is a line segment labeled “L” inside of the box. Also, there is a perpendicular line segment from the point to line L.
> caption: Point $(1,1,3)$ is approximately $2.7$ units from the line with symmetric equations $\frac{x-3}{4}=\frac{y+1}{2}=z-3.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723213437} type= 
PROBLEM:
Find the distance between point $(0,3,6)$ and the line with parametric equations $x=1-t,y=1+2t,z=5+3t.$
SOLUTION:
$\sqrt{\frac{10}{7}}$
COMMENTARY: Hint
Find a vector with initial point $(0,3,6)$ and a terminal point on the line, and then find a direction vector for the line.
:::
:::

## Relationships between Lines
Given two lines in the two-dimensional plane, the lines are equal, they are parallel but not equal, or they intersect in a single point. In three dimensions, a fourth case is possible. If two lines in space are not parallel, but do not intersect, then the lines are said to be {term:skew lines} ([ref:CNX_Calc_Figure_12_05_005]).

> FIGURE {fig:CNX_Calc_Figure_12_05_005} src=../../media/CNX_Calc_Figure_12_05_005.jpg
> alt: This figure has two line segments. They are 3-dimensional, are not parallel, and do not intersect. The directions are different and one is above the other.
> caption: In three dimensions, it is possible that two lines do not cross, even when they have different directions.

To classify lines as parallel but not equal, equal, intersecting, or skew, we need to know two things: whether the direction vectors are parallel and whether the lines share a point ([ref:CNX_Calc_Figure_12_05_006]).

> FIGURE {fig:CNX_Calc_Figure_12_05_006} src=../../media/CNX_Calc_Figure_12_05_006.jpg
> alt: This figure is a table with two rows and two columns. Above the columns is the question “Lines share a common point?” The first column is labeled “yes,” and the second column is labeled “no.” To the left of the rows is the question “Direction vectors are parallel?” The first row is labeled “yes,” and the second row is labeled “no.” The entries of the first row are “equal” and “parallel but not equal.” The entries in the second row are “intersecting” and “skew.”
> caption: Determine the relationship between two lines based on whether their direction vectors are parallel and whether they share a point.

:::example {ex:fs-id1163723283990} Classifying Lines in Space

:::exercise {fs-id1163723283992} type= 
PROBLEM:
For each pair of lines, determine whether the lines are equal, parallel but not equal, skew, or intersecting.
a. ${L}_{1}:x=2s-1,y=s-1,z=s-4$

${L}_{2}:x=t-3,y=3t+8,z=5-2t$
b. ${L}_{1}\text{:}$ $x=\text{−}y=z$

${L}_{2}:\frac{x-3}{2}=y=z-2$
c. ${L}_{1}:x=6s-1,y=−2s,z=3s+1;s≠0$

${L}_{2}:\frac{x-4}{6}=\frac{y+3}{−2}=\frac{z-1}{3}$
SOLUTION:
a. Line ${L}_{1}$ has direction vector ${\textbf{v}}_{\mathbf{1}}=\langle 2,1,1\rangle ;$ line ${L}_{2}$ has direction vector ${\textbf{v}}_{\mathbf{2}}=\langle 1,3,−2\rangle .$ Because the direction vectors are not parallel vectors, the lines are either intersecting or skew. To determine whether the lines intersect, we see if there is a point, $(x,y,z),$ that lies on both lines. To find this point, we use the parametric equations to create a system of equalities:

$2s-1=t-3;\;s-1=3t+8;\;s-4=5-2t.$  {eq:fs-id1163723128048}

By the first equation, $t=2s+2.$ Substituting into the second equation yields

$\begin{array}{rll}s-1 & = & 3(2s+2)+8 \\ s-1 & = & 6s+6+8 \\ 5s & = & −15 \\ s & = & −3.\end{array}$  {eq:fs-id1163724127543}

Substitution into the third equation, however, yields a contradiction:

$\begin{array}{rll}s-4 & = & 5-2(2s+2) \\ s-4 & = & 5-4s-4 \\ 5s & = & 5 \\ s & = & 1.\end{array}$  {eq:fs-id1163724104718}

There is no single point that satisfies the parametric equations for ${L}_{1}\;\text{and}\;{L}_{2}$ simultaneously. These lines do not intersect, so they are skew (see the following figure).

> IMAGE {img:fs-id1163723093475} src=../../media/CNX_Calc_Figure_12_05_011.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two skew lines drawn. They do not intersect and are not parallel.

b. Line *L<sub>1</sub>* has direction vector ${\textbf{v}}_{\mathbf{1}}=\langle 1,−1,1\rangle$ and passes through the origin, $(0,0,0).$ Line ${L}_{2}$ has a different direction vector, ${\textbf{v}}_{\mathbf{2}}=\langle 2,1,1\rangle ,$ so these lines are not parallel or equal. Let $r$ represent the parameter for line ${L}_{1}$ and let $s$ represent the parameter for ${L}_{2}\text{:}$

$\begin{array}{llll}\begin{array}{ll}x & =r \\ y & =\text{−}r \\ z & =r\end{array} & & & \begin{array}{ll}x & =2s+3 \\ y & =s \\ z & =s+2.\end{array}\end{array}$  {eq:fs-id1163724035240}

Solve the system of equations to find $r=1$ and $s=-1.$ If we need to find the point of intersection, we can substitute these parameters into the original equations to get $(1,−1,1)$ (see the following figure).

> IMAGE {img:fs-id1163723168582} src=../../media/CNX_Calc_Figure_12_05_012.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two skew lines drawn. They do not intersect and are not parallel.

c. Lines ${L}_{1}$ and ${L}_{2}$ have equivalent direction vectors: $\textbf{v}=\langle 6,−2,3\rangle .$ These two lines are parallel (see the following figure).

> IMAGE {img:fs-id1163724104886} src=../../media/CNX_Calc_Figure_12_05_013.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two skew lines drawn. They do not intersect and are not parallel.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724065578} type= 
PROBLEM:
Describe the relationship between the lines with the following parametric equations:

$x=1-4t,y=3+t,z=8-6t$  {eq:fs-id1163724065586}

$x=2+3s,y=2s,z=−1-3s.$  {eq:fs-id1163723287160}

SOLUTION:
These lines are skew because their direction vectors are not parallel and there is no point $(x,y,z)$ that lies on both lines.
COMMENTARY: Hint
Start by identifying direction vectors for each line. Is one a multiple of the other?
:::
:::

## Equations for a Plane
We know that a line is determined by two points. In other words, for any two distinct points, there is exactly one line that passes through those points, whether in two dimensions or three. Similarly, given any three points that do not all lie on the same line, there is a unique plane that passes through these points. Just as a line is determined by two points, a plane is determined by three.
This may be the simplest way to characterize a plane, but we can use other descriptions as well. For example, given two distinct, intersecting lines, there is exactly one plane containing both lines. A plane is also determined by a line and any point that does not lie on the line. These characterizations arise naturally from the idea that a plane is determined by three points. Perhaps the most surprising characterization of a plane is actually the most useful.
Imagine a pair of orthogonal vectors that share an initial point. Visualize grabbing one of the vectors and twisting it. As you twist, the other vector spins around and sweeps out a plane. Here, we describe that concept mathematically. Let $\textbf{n}=\langle a,b,c\rangle$ be a vector and $P=({x}_{0},{y}_{0},{z}_{0})$ be a point. Then the set of all points $Q=(x,y,z)$ such that $\vec{PQ}$ is orthogonal to $\textbf{n}$ forms a plane ([ref:CNX_Calc_Figure_12_05_010]). We say that $\textbf{n}$ is a {term:normal vector}, or perpendicular to the plane. Remember, the dot product of orthogonal vectors is zero. This fact generates the {term:vector equation of a plane}: $\textbf{n}\cdot \vec{PQ}=0.$ Rewriting this equation provides additional ways to describe the plane:

$\begin{array}{rll} \\ \textbf{n}\cdot \vec{PQ} & = & 0 \\ \langle a,b,c\rangle \cdot \langle x-{x}_{0},y-{y}_{0},z-{z}_{0}\rangle & = & 0 \\ a(x-{x}_{0})+b(y-{y}_{0})+c(z-{z}_{0}) & = & 0.\end{array}$  {eq:fs-id1163724069787}

> FIGURE {fig:CNX_Calc_Figure_12_05_010} src=../../media/CNX_Calc_Figure_12_05_007.jpg
> alt: This figure is a parallelogram representing a plane. In the plane is a vector from point P to point Q. Perpendicular to the vector P Q is the vector n.
> caption: Given a point $P$ and vector $\textbf{n},$ the set of all points $Q$ with $\vec{PQ}$ orthogonal to $\textbf{n}$ forms a plane.

:::note [definition] Definition
Given a point $P$ and vector $\textbf{n},$ the set of all points $Q$ satisfying the equation $\textbf{n}\cdot \vec{PQ}=0$ forms a plane. The equation

$$ \textbf{n}\cdot \vec{PQ}=0 $$  {eq:fs-id1163724147330}

is known as the vector equation of a plane.
The {term:scalar equation of a plane} containing point $P=({x}_{0},{y}_{0},{z}_{0})$ with normal vector $\textbf{n}=\langle a,b,c\rangle$ is

$$ a(x-{x}_{0})+b(y-{y}_{0})+c(z-{z}_{0})=0. $$  {eq:fs-id1163723154554}

This equation can be expressed as $ax+by+cz+d=0,$ where $d=\text{−}a{x}_{0}-b{y}_{0}-c{z}_{0}.$ This form of the equation is sometimes called the {term:general form of the equation of a plane}.
:::
As described earlier in this section, any three points that do not all lie on the same line determine a plane. Given three such points, we can find an equation for the plane containing these points.

:::example {ex:fs-id1163724085704} Writing an Equation of a Plane Given Three Points in the Plane

:::exercise {fs-id1163724085706} type= 
PROBLEM:
Write an equation for the plane containing points $P=(1,1,−2),$ $Q=(0,2,1),$ and $R=(−1,−1,0)$ in both standard and general forms.
SOLUTION:
To write an equation for a plane, we must find a normal vector for the plane. We start by identifying two vectors in the plane:

$\begin{array}{rll}\vec{PQ} & = & \langle 0-1,2-1,1-(−2)\rangle =\langle −1,1,3\rangle \\ \vec{QR} & = & \langle −1-0,−1-2,0-1\rangle =\langle −1,−3,−1\rangle .\end{array}$  {eq:fs-id1163723246709}

The cross product $\vec{PQ}\;\times \;\vec{QR}$ is orthogonal to both $\vec{PQ}$ and $\vec{QR},$ so it is normal to the plane that contains these two vectors:

$\begin{array}{rl}\textbf{n} & =\vec{PQ}\;\times \;\vec{QR} \\ & =|\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ −1 & 1 & 3 \\ −1 & −3 & −1\end{array}| \\ & =(−1+9)\textbf{i}-(1+3)\textbf{j}+(3+1)\textbf{k} \\ & =8\textbf{i}-4\textbf{j}+4\textbf{k}.\end{array}$  {eq:fs-id1163724081560}

Thus, $\textbf{n}=\langle 8,−4,4\rangle ,$ and we can choose any of the three given points to write an equation of the plane:

$\begin{array}{rll}8(x-1)-4(y-1)+4(z+2) & = & 0 \\ 8x-4y+4z+4 & = & 0.\end{array}$  {eq:fs-id1163723128187}

:::
:::
The scalar equations of a plane vary depending on the normal vector and point chosen.

:::example {ex:fs-id1163724087411} Writing an Equation for a Plane Given a Point and a Line

:::exercise {fs-id1163724087413} type= 
PROBLEM:
Find an equation of the plane that passes through point $(1,4,3)$ and contains the line given by $x=\frac{y-1}{2}=z+1.$
SOLUTION:
Symmetric equations describe the line that passes through point $(0,1,\text{−}1)$ parallel to vector ${\textbf{v}}_{1}=\langle 1,2,1\rangle$ (see the following figure). Use this point and the given point, $(1,4,3),$ to identify a second vector parallel to the plane:

${\textbf{v}}_{2}=\langle 1-0,4-1,3-(−1)\rangle =\langle 1,3,4\rangle .$  {eq:fs-id1163723141362}

Use the cross product of these vectors to identify a normal vector for the plane:

$\begin{array}{rl}\textbf{n} & ={\textbf{v}}_{1}\;\times \;{\textbf{v}}_{2} \\ & =|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ 1 & 2 & 1 \\ 1 & 3 & 4\end{array}| \\ & =(8-3)\textbf{i}-(4-1)\textbf{j}+(3-2)\textbf{k} \\ & =5\textbf{i}-3\textbf{j}+\textbf{k}.\end{array}$  {eq:fs-id1163723199149}

The scalar equations for the plane are $5x-3(y-1)+(z+1)=0$ and $5x-3y+z+4=0.$

> IMAGE {img:fs-id1163724087460} src=../../media/CNX_Calc_Figure_12_05_014.jpg
> alt: This figure is the 3-dimensional coordinate system. There is a plane sketched. It is vertical, but skew to the z-axis.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724087480} type= 
PROBLEM:
Find an equation of the plane containing the lines ${L}_{1}$ and ${L}_{2}\text{:}$

$\begin{array}{l}{L}_{1}:x=\text{−}y=z \\ {L}_{2}:\frac{x-3}{2}=y=z-2.\end{array}$  {eq:fs-id1163724087506}

SOLUTION:
$−2(x-1)+(y+1)+3(z-1)=0$ or $−2x+y+3z=0$
COMMENTARY: Hint
The cross product of the lines’ direction vectors gives a normal vector for the plane.
:::
:::
Now that we can write an equation for a plane, we can use the equation to find the distance $d$ between a point $P$ and the plane. It is defined as the shortest possible distance from $P$ to a point on the plane.

> FIGURE {fig:CNX_Calc_Figure_12_05_012} src=../../media/CNX_Calc_Figure_12_05_008.jpg
> alt: This figure is the sketch of a parallelogram representing a plane. In the plane are points Q and R. there is a broken line from Q to R on the plane. There is a vector n out of the plane at point Q. Also, there is a vector labeled “R P” from point R to point P which is above the plane. This vector is perpendicular to the plane.
> caption: We want to find the shortest distance from point *P* to the plane. Let point $R$ be the point in the plane such that, for any other point in the plane $Q,$ $\| \vec{RP}\| <\| \vec{QP}\| .$

Just as we find the two-dimensional distance between a point and a line by calculating the length of a line segment perpendicular to the line, we find the three-dimensional distance between a point and a plane by calculating the length of a line segment perpendicular to the plane. Let $R$ be the point in the plane such that $\vec{RP}$ is orthogonal to the plane, and let $Q$ be an arbitrary point in the plane. Then the projection of vector $\vec{QP}$ onto the normal vector describes vector $\vec{RP},$ as shown in [ref:CNX_Calc_Figure_12_05_012].

:::note [theorem] The Distance between a Plane and a Point
Suppose a plane with normal vector $\textbf{n}$ passes through point $Q.$ The distance $d$ from the plane to a point $P$ not in the plane is given by

$$ d=\| {\text{proj}}_{\textbf{n}}\vec{QP}\| =|{\text{comp}}_{\textbf{n}}\vec{QP}|=\frac{|\vec{QP}\cdot \textbf{n}|}{\| \textbf{n}\|}. $$  {eq:fs-id1163724183136}

:::

:::example {ex:fs-id1163724065493} Distance between a Point and a Plane

:::exercise {fs-id1163724065495} type= 
PROBLEM:
Find the distance between point $P=(3,1,2)$ and the plane given by $x-2y+z=5$ (see the following figure).

> IMAGE {img:fs-id1163724065554} src=../../media/CNX_Calc_Figure_12_05_015.jpg
> alt: This figure is the 3-dimensional coordinate system. There is a point drawn at (3, 1, 2). The point is labeled “P(3, 1, 2).” There is a plane drawn. There is a perpendicular line from the plane to point P(3, 1, 2).

SOLUTION:
The coefficients of the plane’s equation provide a normal vector for the plane: $\textbf{n}=\langle 1,−2,1\rangle .$ To find vector $\vec{QP},$ we need a point in the plane. Any point will work, so set $y=z=0$ to see that point $Q=(5,0,0)$ lies in the plane. Find the component form of the vector from $Q\;\text{to}\;P\text{:}$

$\vec{QP}=\langle 3-5,1-0,2-0\rangle =\langle −2,1,2\rangle .$  {eq:fs-id1163724120303}

Apply the distance formula from [ref:fs-id1163724183136]:

$\begin{array}{rl}d & =\frac{|\vec{QP}\cdot \textbf{n}|}{\| \textbf{n}\|} \\ & =\frac{|\langle −2,1,2\rangle \cdot \langle 1,−2,1\rangle |}{\sqrt{{1}^{2}+{(−2)}^{2}+{1}^{2}}} \\ & =\frac{|−2-2+2|}{\sqrt{6}} \\ & =\frac{2}{\sqrt{6}}.\end{array}$  {eq:fs-id1163724120383}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723110279} type= 
PROBLEM:
Find the distance between point $P=(5,−1,0)$ and the plane given by $4x+2y-z=3.$
SOLUTION:
$\frac{15}{\sqrt{21}}$
COMMENTARY: Hint
Point $(0,0,−3)$ lies on the plane.
:::
:::

## Parallel and Intersecting Planes
We have discussed the various possible relationships between two lines in two dimensions and three dimensions. When we describe the relationship between two planes in space, we have only two possibilities: the two distinct planes are parallel or they intersect. When two planes are parallel, their normal vectors are parallel. When two planes intersect, the intersection is a line ([ref:CNX_Calc_Figure_12_05_014]).

> FIGURE {fig:CNX_Calc_Figure_12_05_014} src=../../media/CNX_Calc_Figure_12_05_009.jpg
> alt: This figure is two planes that are intersecting. The intersection forms a line segment.
> caption: The intersection of two nonparallel planes is always a line.

We can use the equations of the two planes to find parametric equations for the line of intersection.

:::example {ex:fs-id1163724138390} Finding the Line of Intersection for Two Planes

:::exercise {fs-id1163724138392} type= 
PROBLEM:
Find parametric and symmetric equations for the line formed by the intersection of the planes given by $x+y+z=0$ and $2x-y+z=0$ (see the following figure).

> IMAGE {img:fs-id1163723326615} src=../../media/CNX_Calc_Figure_12_05_016.jpg
> alt: This figure is two planes intersecting in the 3-dimensional coordinate system.

SOLUTION:
Note that the two planes have nonparallel normals, so the planes intersect. Further, the origin satisfies each equation, so we know the line of intersection passes through the origin. Add the plane equations so we can eliminate the one of the variables, in this case, $y\text{:}$

$\begin{array}{l}\underset{\text{\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_}}{\begin{array}{rllllll}x & + & y & + & z & = & 0 \\ 2x & - & y & + & z & = & 0\end{array}} \\ \\ \;3x\hspace{3.15em}+2z\;=\;0.\end{array}$  {eq:fs-id1163723326641}

This gives us $x=-\frac{2}{3}z.$ We substitute this value into the first equation to express $y$ in terms of $z\text{:}$

$\begin{array}{rll}x+y+z & = & 0 \\ -\frac{2}{3}z+y+z & = & 0 \\ y+\frac{1}{3}z & = & 0 \\ y & = & -\frac{1}{3}z.\end{array}$  {eq:fs-id1163723321237}

We now have the first two variables, $x$ and $y,$ in terms of the third variable, $z.$ Now we define $z$ in terms of $t.$ To eliminate the need for fractions, we choose to define the parameter $t$ as $t=-\frac{1}{3}z.$ Then, $z=−3t.$ Substituting the parametric representation of $z$ back into the other two equations, we see that the parametric equations for the line of intersection are $x=2t,y=t,z=−3t.$ The symmetric equations for the line are $\frac{x}{2}=y=\frac{z}{−3}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724016324} type= 
PROBLEM:
Find parametric equations for the line formed by the intersection of planes $x+y-z=3$ and $3x-y+3z=5.$
SOLUTION:
$x=t,y=7-3t,z=4-2t$
COMMENTARY: Hint
Add the two equations, then express $z$ in terms of $x.$ Then, express $y$ in terms of $x.$
:::
:::
In addition to finding the equation of the line of intersection between two planes, we may need to find the angle formed by the intersection of two planes. For example, builders constructing a house need to know the angle where different sections of the roof meet to know whether the roof will look good and drain properly. We can use normal vectors to calculate the angle between the two planes. We can do this because the angle between the normal vectors is the same as the angle between the planes. [ref:CNX_Calc_Figure_12_05_016] shows why this is true.

> FIGURE {fig:CNX_Calc_Figure_12_05_016} src=../../media/CNX_Calc_Figure_12_05_010.jpg
> alt: This figure is two parallelograms representing planes. The planes intersect forming angle theta between them. The first plane as vector “n sub 1” normal to the plane. The second vector has vector “n sub 2” normal to the plane. The normal vectors intersect and form the angle theta.
> caption: The angle between two planes has the same measure as the angle between the normal vectors for the planes.

We can find the measure of the angle *θ* between two intersecting planes by first finding the cosine of the angle, using the following equation:

$\text{cos}\;\theta =\frac{|{\textbf{n}}_{1}\cdot {\textbf{n}}_{2}|}{\| {\textbf{n}}_{1}\| \| {\textbf{n}}_{2}\|}.$  {eq:fs-id1163723281425}

We can then use the angle to determine whether two planes are parallel or orthogonal or if they intersect at some other angle.

:::example {ex:fs-id1163724078754} Finding the Angle between Two Planes

:::exercise {fs-id1163724078756} type= 
PROBLEM:
Determine whether each pair of planes is parallel, orthogonal, or neither. If the planes are intersecting, but not orthogonal, find the measure of the angle between them. Give the answer in radians and round to two decimal places.
a. $x+2y-z=8\;\text{and}\;2x+4y-2z=10$
b. $2x-3y+2z=3\;\text{and}\;6x+2y-3z=1$
c. $x+y+z=4\;\text{and}\;x-3y+5z=1$
SOLUTION:
a. The normal vectors for these planes are ${\textbf{n}}_{1}=\langle 1,2,−1\rangle$ and ${\textbf{n}}_{2}=\langle 2,4,−2\rangle .$ These two vectors are scalar multiples of each other. The normal vectors are parallel, so the planes are parallel.
b. The normal vectors for these planes are ${\textbf{n}}_{1}=\langle 2,−3,2\rangle$ and ${\textbf{n}}_{2}=\langle 6,2,−3\rangle .$ Taking the dot product of these vectors, we have

${\textbf{n}}_{1}\cdot {\textbf{n}}_{2}=\langle 2,−3,2\rangle \cdot \langle 6,2,−3\rangle =2(6)-3(2)+2(−3)=0.$  {eq:fs-id1163724164404}

The normal vectors are orthogonal, so the corresponding planes are orthogonal as well.
c. The normal vectors for these planes are ${\textbf{n}}_{1}=\langle 1,1,1\rangle$ and ${\textbf{n}}_{2}=\langle 1,−3,5\rangle \text{:}$

$\begin{array}{rl}\text{cos}\;\theta & =\frac{|{\textbf{n}}_{1}\cdot {\textbf{n}}_{2}|}{\| {\textbf{n}}_{1}\| \| {\textbf{n}}_{2}\|} \\ & =\frac{|\langle 1,1,1\rangle \cdot \langle 1,−3,5\rangle |}{\sqrt{{1}^{2}+{1}^{2}+{1}^{2}}\;\sqrt{{1}^{2}+{(−3)}^{2}+{5}^{2}}} \\ & =\frac{3}{\sqrt{105}}.\end{array}$  {eq:fs-id1163724082322}

The angle between the two planes is $1.27$ rad, or approximately $73\text{°}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724081753} type= 
PROBLEM:
Find the measure of the angle between planes $x+y-z=3$ and $3x-y+3z=5.$ Give the answer in radians and round to two decimal places.
SOLUTION:
$1.44$ rad
COMMENTARY: Hint
Use the coefficients of the variables in each equation to find a normal vector for each plane.
:::
:::
When we find that two planes are parallel, we may need to find the distance between them. To find this distance, we simply select a point in one of the planes. The distance from this point to the other plane is the distance between the planes.
Previously, we introduced the formula for calculating this distance in [ref:fs-id1163724183136]:

$d=\frac{\vec{QP}\cdot \textbf{n}}{\| \textbf{n}\|},$  {eq:fs-id1163724081843}

where $Q$ is a point on the plane, $P$ is a point not on the plane, and $\textbf{n}$ is the normal vector that passes through point $Q.$ Consider the distance from point $({x}_{0},{y}_{0},{z}_{0})$ to plane $ax+by+cz+k=0.$ Let $({x}_{1},{y}_{1},{z}_{1})$ be any point in the plane. Substituting into the formula yields

$\begin{array}{rl}d & =\frac{|a({x}_{0}-{x}_{1})+b({y}_{0}-{y}_{1})+c({z}_{0}-{z}_{1})|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}} \\ & =\frac{|a{x}_{0}+b{y}_{0}+c{z}_{0}+k|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}}.\end{array}$  {eq:fs-id1163724097697}

We state this result formally in the following theorem.

:::note [theorem] Distance from a Point to a Plane
Let $P({x}_{0},{y}_{0},{z}_{0})$ be a point. The distance from $P$ to plane $ax+by+cz+k=0$ is given by

$d=\frac{|a{x}_{0}+b{y}_{0}+c{z}_{0}+k|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}}.$  {eq:fs-id1163723268266}

:::

:::example {ex:fs-id1163723268344} Finding the Distance between Parallel Planes

:::exercise {fs-id1163723268346} type= 
PROBLEM:
Find the distance between the two parallel planes given by $2x+y-z=2$ and $2x+y-z=8.$
SOLUTION:
Point $(1,0,0)$ lies in the first plane. The desired distance, then, is

$\begin{array}{rl}d & =\frac{|a{x}_{0}+b{y}_{0}+c{z}_{0}+k|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}} \\ & =\frac{|2(1)+1(0)+(−1)(0)+(−8)|}{\sqrt{{2}^{2}+{1}^{2}+{(−1)}^{2}}} \\ & =\frac{6}{\sqrt{6}}=\sqrt{6}.\end{array}$  {eq:fs-id1163723334430}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723325269} type= 
PROBLEM:
Find the distance between parallel planes $5x-2y+z=6$ and $5x-2y+z=−3.$
SOLUTION:
$\frac{9}{\sqrt{30}}$
COMMENTARY: Hint
Set $x=y=0$ to find a point on the first plane.
:::
:::

:::note [project] Distance between Two Skew Lines

> FIGURE {fig:CNX_Calc_Figure_12_05_SP} src=../../media/CNX_Calc_Figure_12_05_017.jpg
> alt: This figure shows a system of pipes running in different directions in an industrial plant. Two skew pipes are highlighted in red.
> caption: Industrial pipe installations often feature pipes running in different directions. How can we find the distance between two skew pipes?

Finding the distance from a point to a line or from a line to a plane seems like a pretty abstract procedure. But, if the lines represent pipes in a chemical plant or tubes in an oil refinery or roads at an intersection of highways, confirming that the distance between them meets specifications can be both important and awkward to measure. One way is to model the two pipes as lines, using the techniques in this chapter, and then calculate the distance between them. The calculation involves forming vectors along the directions of the lines and using both the cross product and the dot product.
The symmetric forms of two lines, ${L}_{1}$ and ${L}_{2},$ are

$\begin{array}{l} \\ \\ {L}_{1}:\frac{x-{x}_{1}}{{a}_{1}}=\frac{y-{y}_{1}}{{b}_{1}}=\frac{z-{z}_{1}}{{c}_{1}} \\ {L}_{2}:\frac{x-{x}_{2}}{{a}_{2}}=\frac{y-{y}_{2}}{{b}_{2}}=\frac{z-{z}_{2}}{{c}_{2}}.\end{array}$  {eq:fs-id1163723210073}

You are to develop a formula for the distance $d$ between these two lines, in terms of the values ${a}_{1},{b}_{1},{c}_{1};{a}_{2},{b}_{2},{c}_{2};{x}_{1},{y}_{1},{z}_{1};\;\text{and}\;{x}_{2},{y}_{2},{z}_{2}.$ The distance between two lines is usually taken to mean the minimum distance, so this is the length of a line segment or the length of a vector that is perpendicular to both lines and intersects both lines.
1. First, write down two vectors, ${\textbf{v}}_{1}$ and ${\textbf{v}}_{2},$ that lie along ${L}_{1}$ and ${L}_{2},$ respectively.
2. Find the cross product of these two vectors and call it $\textbf{N}.$ This vector is perpendicular to ${\textbf{v}}_{1}\;\text{and}\;{\textbf{v}}_{2},$ and hence is perpendicular to both lines.
3. From vector $\textbf{N},$ form a unit vector $\textbf{n}$ in the same direction.
4. Use symmetric equations to find a convenient vector ${\textbf{v}}_{12}$ that lies between any two points, one on each line. Again, this can be done directly from the symmetric equations.
5. The dot product of two vectors is the magnitude of the projection of one vector onto the other times the magnitude of the other vector—that is, $\textbf{A}\cdot \textbf{B}=\| \textbf{A}\| \| \textbf{B}\| \text{cos}\;\theta ,$ where $\theta$ is the angle between the vectors. Using the dot product, find the projection of vector ${\textbf{v}}_{12}$ found in step $4$ onto unit vector $\textbf{n}$ found in step 3. This projection is perpendicular to both lines, and hence its length must be the perpendicular distance $d$ between them. Note that the value of $d$ may be negative, depending on your choice of vector ${\textbf{v}}_{12}$ or the order of the cross product, so use absolute value signs around the numerator.
6. Check that your formula gives the correct distance of $|−25|\text{/}\sqrt{198}\approx 1.78$ between the following two lines:

$\begin{array}{l} \\ \\ {L}_{1}:\frac{x-5}{2}=\frac{y-3}{4}=\frac{z-1}{3} \\ {L}_{2}:\frac{x-6}{3}=\frac{y-1}{5}=\frac{z}{7}.\end{array}$  {eq:fs-id1163724069880}

7. Is your general expression valid when the lines are parallel? If not, why not? (*Hint:* What do you know about the value of the cross product of two parallel vectors? Where would that result show up in your expression for $d?)$
8. Demonstrate that your expression for the distance is zero when the lines intersect. Recall that two lines intersect if they are not parallel and they are in the same plane. Hence, consider the direction of $\textbf{n}$ and ${\textbf{v}}_{12}.$ What is the result of their dot product?
9. Consider the following application. Engineers at a refinery have determined they need to install support struts between many of the gas pipes to reduce damaging vibrations. To minimize cost, they plan to install these struts at the closest points between adjacent skewed pipes. Because they have detailed schematics of the structure, they are able to determine the correct lengths of the struts needed, and hence manufacture and distribute them to the installation crews without spending valuable time making measurements.

The rectangular frame structure has the dimensions $4.0\;\times \;15.0\;\times \;10.0\;\text{m}$ (height, width, and depth). One sector has a pipe entering the lower corner of the standard frame unit and exiting at the diametrically opposed corner (the one farthest away at the top); call this ${L}_{1}.$ A second pipe enters and exits at the two different opposite lower corners; call this ${L}_{2}$ ([ref:CNX_Calc_Figure_12_05_017]).

> FIGURE {fig:CNX_Calc_Figure_12_05_017} src=../../media/CNX_Calc_Figure_12_05_018.jpg
> alt: This figure is a three-dimensional box in an x y z coordinate system. The box has dimensions x = 10 m, y = 15 m, and z = 4 m. Line L1 passes through a main diagonal of the box from the origin to the far corner. Line L2 passes through a diagonal in the base of the box with x-intercept 10 and y-intercept 15.
> caption: Two pipes cross through a standard frame unit.

Write down the vectors along the lines representing those pipes, find the cross product between them from which to create the unit vector $\textbf{n},$ define a vector that spans two points on each line, and finally determine the minimum distance between the lines. (Take the origin to be at the lower corner of the first pipe.) Similarly, you may also develop the symmetric equations for each line and substitute directly into your formula.
:::

## Key Concepts {section:key-concepts}
- In three dimensions, the direction of a line is described by a direction vector. The vector equation of a line with direction vector $\textbf{v}=\langle a,b,c\rangle$ passing through point $P=({x}_{0},{y}_{0},{z}_{0})$ is $\textbf{r}={\textbf{r}}_{0}+t\textbf{v},$ where ${\textbf{r}}_{0}=\langle {x}_{0},{y}_{0},{z}_{0}\rangle$ is the position vector of point $P.$ This equation can be rewritten to form the parametric equations of the line: $x={x}_{0}+ta,$ $y={y}_{0}+tb,$ and $z={z}_{0}+tc.$ The line can also be described with the symmetric equations $\frac{x-{x}_{0}}{a}=\frac{y-{y}_{0}}{b}=\frac{z-{z}_{0}}{c}.$
- Let $L$ be a line in space passing through point $P$ with direction vector $\textbf{v}.$ If $Q$ is any point not on $L,$ then the distance from $Q$ to $L$ is $d=\frac{\| \vec{PQ}\;\times \;\textbf{v}\|}{\| \textbf{v}\|}.$
- In three dimensions, two lines may be parallel but not equal, equal, intersecting, or skew.
- Given a point $P$ and vector $\textbf{n},$ the set of all points $Q$ satisfying equation $\textbf{n}\cdot \vec{PQ}=0$ forms a plane. Equation $\textbf{n}\cdot \vec{PQ}=0$ is known as the *vector equation of a plane.*
- The scalar equation of a plane containing point $P=({x}_{0},{y}_{0},{z}_{0})$ with normal vector $\textbf{n}=\langle a,b,c\rangle$ is $a(x-{x}_{0})+b(y-{y}_{0})+c(z-{z}_{0})=0.$ This equation can be expressed as $ax+by+cz+d=0,$ where $d=\text{−}a{x}_{0}-b{y}_{0}-c{z}_{0}.$ This form of the equation is sometimes called the *general form of the equation of a plane*.
- Suppose a plane with normal vector **n** passes through point $Q.$ The distance $D$ from the plane to point $P$ not in the plane is given by

$D=\| {\text{proj}}_{\textbf{n}}\vec{QP}\| =|{\text{comp}}_{\textbf{n}}\vec{QP}|=\frac{|\vec{QP}\cdot \textbf{n}|}{\| \textbf{n}\|}.$  {eq:fs-id1163724072686}

- The normal vectors of parallel planes are parallel. When two planes intersect, they form a line.
- The measure of the angle $\theta$ between two intersecting planes can be found using the equation: $\text{cos}\;\theta =\frac{|{\textbf{n}}_{1}\cdot {\textbf{n}}_{2}|}{\| {\textbf{n}}_{1}\| \| {\textbf{n}}_{2}\|},$ where ${\textbf{n}}_{1}$ and ${\textbf{n}}_{2}$ are normal vectors to the planes.
- The distance $D$ from point $({x}_{0},{y}_{0},{z}_{0})$ to plane $ax+by+cz+d=0$ is given by

$D=\frac{|a({x}_{0}-{x}_{1})+b({y}_{0}-{y}_{1})+c({z}_{0}-{z}_{1})|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}}=\frac{|a{x}_{0}+b{y}_{0}+c{z}_{0}+d|}{\sqrt{{a}^{2}+{b}^{2}+{c}^{2}}}.$  {eq:fs-id1163724018944}

## Key Equations {section:key-equations}

> TABLE {tab:eip-535} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Vector Equation of a Line** | $\textbf{r}={\textbf{r}}_{0}+t\textbf{v}$ |
| **Parametric Equations of a Line** | $\frac{x-{x}_{0}}{a}=\frac{y-{y}_{0}}{b}=\frac{z-{z}_{0}}{c}$ |
| **Vector Equation of a Plane** | $\textbf{n}\cdot \vec{PQ}=0$ |
| **Scalar Equation of a Plane** | $a(x-{x}_{0})+b(y-{y}_{0})+c(z-{z}_{0})=0$ |
| **Distance between a Plane and a Point** | $d=\| {\text{proj}}_{\textbf{n}}\vec{QP}\| =|{\text{comp}}_{\textbf{n}}\vec{QP}|=\frac{|\vec{QP}\cdot \textbf{n}|}{\| \textbf{n}\|}$ |

##  {section:section-exercises}
In the following exercises, points $P$ and $Q$ are given. Let $L$ be the line passing through points $P$ and $Q.$
a. Find the vector equation of line $L.$
b. Find parametric equations of line $L.$
c. Find symmetric equations of line $L.$
d. Find parametric equations of the line segment determined by $P$ and $Q.$

:::exercise {fs-id1163724043599} type= 
PROBLEM:
$P(−3,5,9),$ $Q(4,−7,2)$
SOLUTION:
a. $\textbf{r}=\langle −3,5,9\rangle +t\langle 7,−12,−7\rangle ,$ $t\in \mathbb{R}\text{;}$ b. $x=−3+7t,y=5-12t,z=9-7t,$ $t\in \mathbb{R}\text{;}$ c. $\frac{x+3}{7}=\frac{y-5}{−12}=\frac{z-9}{−7};$ d. $x=−3+7t,y=5-12t,z=9-7t,$ $t\in [0,1]$
:::

:::exercise {fs-id1163724049570} type= 
PROBLEM:
$P(4,0,5),Q(2,3,1)$
:::

:::exercise {fs-id1163723295622} type= 
PROBLEM:
$P(−1,0,5),$ $Q(4,0,3)$
SOLUTION:
a. $\textbf{r}=\langle −1,0,5\rangle +t\langle 5,0,−2\rangle ,$ $t\in \mathbb{R};$ b. $x=−1+5t,y=0,z=5-2t,$ $t\in \mathbb{R};$ c. $\frac{x+1}{5}=\frac{z-5}{−2},y=0;$ d. $x=−1+5t,y=0,z=5-2t,$ $t\in [0,1]$
:::

:::exercise {fs-id1163723093365} type= 
PROBLEM:
$P(7,−2,6),$ $Q(−3,0,6)$
:::
For the following exercises, point $P$ and vector $\textbf{v}$ are given. Let $L$ be the line passing through point $P$ with direction $\textbf{v}.$
a. Find parametric equations of line $L.$
b. Find symmetric equations of line $L.$
c. Find the intersection of the line with the *xy*-plane.

:::exercise {fs-id1163724050300} type= 
PROBLEM:
$P(1,−2,3),$ $\textbf{v}=\langle 1,2,3\rangle$
SOLUTION:
a. $x=1+t,y=−2+2t,z=3+3t,$ $t\in \mathbb{R}\text{;}$ b. $\frac{x-1}{1}=\frac{y+2}{2}=\frac{z-3}{3};$ c. $(0,−4,0)$
:::

:::exercise {fs-id1163723183781} type= 
PROBLEM:
$P(3,1,5),$ $\textbf{v}=\langle 1,1,1\rangle$
:::

:::exercise {fs-id1163723789662} type= 
PROBLEM:
$P(3,1,5),$ $\textbf{v}=\vec{QR},$ where $Q(2,2,3)$ and $R(3,2,3)$
SOLUTION:
a. $x=3+t,y=1,z=5,$ $t\in \mathbb{R};$ b. $y=1,z=5;$ c. The line does not intersect the *xy*-plane.
:::

:::exercise {fs-id1163723298912} type= 
PROBLEM:
$P(2,3,0),$ $\textbf{v}=\vec{QR},$ where $Q(0,4,5)$ and $R(0,4,6)$
:::
For the following exercises, line $L$ is given.
a. Find point $P$ that belongs to the line and direction vector $\textbf{v}$ of the line. Express $\textbf{v}$ in component form.
b. Find the distance from the origin to line $L.$

:::exercise {fs-id1163723279453} type= 
PROBLEM:
$x=1+t,y=3+t,z=5+4t,$ $t\in \mathbb{R}$
SOLUTION:
a. $P(1,3,5),$ $v=\langle 1,1,4\rangle ;$ b. $\sqrt{3}$
:::

:::exercise {fs-id1163723279579} type= 
PROBLEM:
$\text{−}x=y+1,z=2$
:::

:::exercise {fs-id1163724057710} type= 
PROBLEM:
Find the distance between point $A(−3,1,1)$ and the line of symmetric equations
$x=\text{−}y=\text{−}z.$
SOLUTION:
$\frac{2\sqrt{2}}{\sqrt{3}}$
:::

:::exercise {fs-id1163724057783} type= 
PROBLEM:
Find the distance between point $A(4,2,5)$ and the line of parametric equations
$x=−1-t,y=\text{−}t,z=2,$ $t\in \mathbb{R}.$
:::
For the following exercises, lines ${L}_{1}$ and ${L}_{2}$ are given.
a. Verify whether lines ${L}_{1}$ and ${L}_{2}$ are parallel.
b. If the lines ${L}_{1}$ and ${L}_{2}$ are parallel, then find the distance between them.

:::exercise {fs-id1163723073088} type= 
PROBLEM:
${L}_{1}:x=1+t,y=t,z=2+t,$ $t\in \mathbb{R},$ ${L}_{2}:x-3=y-1=z-3$
SOLUTION:
a. Parallel; b. $\frac{\sqrt{2}}{\sqrt{3}}$
:::

:::exercise {fs-id1163723073204} type= 
PROBLEM:
${L}_{1}:x=2,y=1,z=t,$ ${L}_{2}:x=1,y=1,z=2-3t,$ $t\in \mathbb{R}$
:::

:::exercise {fs-id1163723339452} type= 
PROBLEM:
Show that the line passing through points $P(3,1,0)$ and $Q(1,4,−3)$ is perpendicular to the line with equations $x=3+3t,y=1+8t,z=6t,$ $t\in \mathbb{R}.$
:::

:::exercise {fs-id1163723339566} type= 
PROBLEM:
Are the lines of equations $x=−2+2t,y=−6,z=2+6t$ and $x=−1+t,y=1+t,z=t,$ $t\in \mathbb{R},$ perpendicular to each other?
:::

:::exercise {fs-id1163724138582} type= 
PROBLEM:
Find the point of intersection of the lines of equations $x=−2y=3z$ and $x=−5-t,y=−1+t,z=t-11,$ $t\in \mathbb{R}.$
SOLUTION:
$(−12,6,−4)$
:::

:::exercise {fs-id1163724138687} type= 
PROBLEM:
Find the intersection point of the *x*-axis with the line of parametric equations
$x=10+t,y=2-2t,z=−3+3t,$ $t\in \mathbb{R}.$
:::
For the following exercises, lines ${L}_{1}$ and ${L}_{2}$ are given. Determine whether the lines are equal, parallel but not equal, skew, or intersecting.

:::exercise {fs-id1163723171378} type= 
PROBLEM:
${L}_{1}:x=y-1=\text{−}z$ and ${L}_{2}:x-2=\text{−}y=\frac{z}{2}$
SOLUTION:
The lines are skew.
:::

:::exercise {fs-id1163723171451} type= 
PROBLEM:
${L}_{1}:x=2t,y=0,z=3,$ $t\in \mathbb{R}$ and ${L}_{2}:x=0,y=8+s,z=7+s,$ $s\in \mathbb{R}$
:::

:::exercise {fs-id1163723341703} type= 
PROBLEM:
${L}_{1}:x=−1+2t,y=1+3t,z=7t,$ $t\in \mathbb{R}$ and ${L}_{2}:x-1=\frac{2}{3}(y-4)=\frac{2}{7}z-2$
SOLUTION:
The lines are equal.
:::

:::exercise {fs-id1163723341829} type= 
PROBLEM:
${L}_{1}:3x=y+1=2z$ and ${L}_{2}:x=6+2t,y=17+6t,z=9+3t,$ $t\in \mathbb{R}$
:::

:::exercise {fs-id1163723995158} type= 
PROBLEM:
Consider line $L$ of symmetric equations $x-2=\text{−}y=\frac{z}{2}$ and point $A(1,1,1).$
a. Find parametric equations for a line parallel to $L$ that passes through point $A.$
b. Find symmetric equations of a line skew to $L$ and that passes through point $A.$
c. Find symmetric equations of a line that intersects $L$ and passes through point $A.$
SOLUTION:
a. $x=1+t,y=1-t,z=1+2t,$ $t\in \mathbb{R};$ b. For instance, the line passing through $A$ with direction vector $\text{j}:x=1,z=1;$ c. For instance, the line passing through $A$ and point $(2,0,0)$ that belongs to $L$ is a line that intersects; $L:\frac{x-1}{−1}=y-1=z-1$
:::

:::exercise {fs-id1163723113308} type= 
PROBLEM:
Consider line $L$ of parametric equations $x=t,y=2t,z=3,$ $t\in \mathbb{R}.$
a. Find parametric equations for a line parallel to $L$ that passes through the origin.
b. Find parametric equations of a line skew to $L$ that passes through the origin.
c. Find symmetric equations of a line that intersects $L$ and passes through the origin.
:::
For the following exercises, point $P$ and vector $\textbf{n}$ are given.
a. Find the scalar equation of the plane that passes through $P$ and has normal vector $\textbf{n}.$
b. Find the general form of the equation of the plane that passes through $P$ and has normal vector $\textbf{n}.$

:::exercise {fs-id1163723140003} type= 
PROBLEM:
$P(0,0,0),$ $\textbf{n}=3\textbf{i}-2\textbf{j}+4\textbf{k}$
SOLUTION:
a. $3x-2y+4z=0;$ b. $3x-2y+4z=0$
:::

:::exercise {fs-id1163723326837} type= 
PROBLEM:
$P(3,2,2),$ $\textbf{n}=2\textbf{i}+3\textbf{j}-\textbf{k}$
:::

:::exercise {fs-id1163724053884} type= 
PROBLEM:
$P(1,2,3),$ $\textbf{n}=\langle 1,2,3\rangle$
SOLUTION:
a. $(x-1)+2(y-2)+3(z-3)=0;$ b. $x+2y+3z-14=0$
:::

:::exercise {fs-id1163724054034} type= 
PROBLEM:
$P(0,0,0),$ $\textbf{n}=\langle −3,2,−1\rangle$
:::
For the following exercises, the equation of a plane is given.
a. Find normal vector $\textbf{n}$ to the plane. Express $\textbf{n}$ using standard unit vectors.
b. Find the intersections of the plane with the coordinate axes.
c. Sketch the plane.

:::exercise {fs-id1163723090908} type= 
PROBLEM:
**[T]** $4x+5y+10z-20=0$
SOLUTION:
a. $\text{n}=4\textbf{i}+5\text{j}+10\text{k};$ b. $(5,0,0),$ $(0,4,0),$ and $(0,0,2);$
c.

> IMAGE {img:fs-id1163724066198} src=../../media/CNX_Calc_Figure_12_05_201.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has a triangle drawn with vertices on the x, y, and z axes.

:::

:::exercise {fs-id1163724066213} type= 
PROBLEM:
$3x+4y-12=0$
:::

:::exercise {fs-id1163724066353} type= 
PROBLEM:
$3x-2y+4z=0$
SOLUTION:
a. $\textbf{n}=3\textbf{i}-2\textbf{j}+4\textbf{k};$ b. $(0,0,0);$
c.

> IMAGE {img:fs-id1163724022791} src=../../media/CNX_Calc_Figure_12_05_203.jpg
> alt: This figure is the 3-dimensional coordinate system represented in a box. It has a tilted parallelogram inside the box representing a plane.

:::

:::exercise {fs-id1163724022806} type= 
PROBLEM:
$x+z=0$
:::

:::exercise {fs-id1163724022903} type= 
PROBLEM:
Given point $P(1,2,3)$ and vector $\textbf{n}=\textbf{i}+\textbf{j},$ find point $Q$ on the *x*-axis such that $\vec{PQ}$ and $\textbf{n}$ are orthogonal.
SOLUTION:
$(3,0,0)$
:::

:::exercise {fs-id1163724061052} type= 
PROBLEM:
Show there is no plane perpendicular to $\textbf{n}=\textbf{i}+\textbf{j}$ that passes through points $P(1,2,3)$ and $Q(2,3,4).$
:::

:::exercise {fs-id1163724061137} type= 
PROBLEM:
Find parametric equations of the line passing through point $P(−2,1,3)$ that is perpendicular to the plane of equation $2x-3y+z=7.$
SOLUTION:
$x=−2+2t,y=1-3t,z=3+t,$ $t\in \mathbb{R}$
:::

:::exercise {fs-id1163724153130} type= 
PROBLEM:
Find symmetric equations of the line passing through point $P(2,5,4)$ that is perpendicular to the plane of equation $2x+3y-5z=0.$
:::

:::exercise {fs-id1163724153235} type= 
PROBLEM:
Show that line $\frac{x-1}{2}=\frac{y+1}{3}=\frac{z-2}{4}$ is parallel to plane $x-2y+z=6.$
:::

:::exercise {fs-id1163723979834} type= 
PROBLEM:
Find the real number $\alpha$ such that the line of parametric equations $x=t,y=2-t,z=3+t,$ $t\in \mathbb{R}$ is parallel to the plane of equation $\alpha x+5y+z-10=0.$
:::
For the following exercises, points $P,Q,\;\text{and}\;R$ are given.
a. Find the general equation of the plane passing through $P,Q,\;\text{and}\;R.$
b. Write the vector equation $\textbf{n}\cdot \vec{PS}=0$ of the plane at a., where $S(x,y,z)$ is an arbitrary point of the plane.
c. Find parametric equations of the line passing through the origin that is perpendicular to the plane passing through $P,Q,\;\text{and}\;R.$

:::exercise {fs-id1163723124284} type= 
PROBLEM:
$P(1,1,1),Q(2,4,3),$ and $R(−1,−2,−1)$
SOLUTION:
a. $−2y+3z-1=0;$ b. $\langle 0,−2,3\rangle \cdot \langle x-1,y-1,z-1\rangle =0;$ c. $x=0,y=−2t,z=3t,$ $t\in \mathbb{R}$
Answers may vary by a sign, depending on how the vector cross multiplication is performed.
:::

:::exercise {fs-id1163724062242} type= 
PROBLEM:
$P(−2,1,4),Q(3,1,3),$ and $R(−2,1,0)$
:::

:::exercise {fs-id1163724062443} type= 
PROBLEM:
Consider the planes of equations $x+y+z=1$ and $x+z=0.$
a. Show that the planes intersect.
b. Find symmetric equations of the line passing through point $P(1,4,6)$ that is parallel to the line of intersection of the planes.
SOLUTION:
a. Answers may vary; b. $\frac{x-1}{1}=\frac{z-6}{−1},y=4$
:::

:::exercise {fs-id1163724055577} type= 
PROBLEM:
Consider the planes of equations $\text{−}y+z-2=0$ and $x-y=0.$
a. Show that the planes intersect.
b. Find parametric equations of the line passing through point $P(−8,0,2)$ that is parallel to the line of intersection of the planes.
:::

:::exercise {fs-id1163724042028} type= 
PROBLEM:
Find the scalar equation of the plane that passes through point $P(−1,2,1)$ and is perpendicular to the line of intersection of planes $x+y-z-2=0$ and $2x-y+3z-1=0.$
SOLUTION:
$2x-5y-3z+15=0$
:::

:::exercise {fs-id1163724042145} type= 
PROBLEM:
Find the general equation of the plane that passes through the origin and is perpendicular to the line of intersection of planes $\text{−}x+y+2=0$ and $z-3=0.$
:::

:::exercise {fs-id1163724042209} type= 
PROBLEM:
Determine whether the line of parametric equations $x=1+2t,y=−2t,z=2+t,$ $t\in \mathbb{R}$ intersects the plane with equation $3x+4y+6z-7=0.$ If it does intersect, find the point of intersection.
SOLUTION:
The line intersects the plane at point $P(−3,4,0).$
:::

:::exercise {fs-id1163724034962} type= 
PROBLEM:
Determine whether the line of parametric equations $x=5,y=4-t,z=2t,$ $t\in \mathbb{R}$ intersects the plane with equation $2x-y+z=5.$ If it does intersect, find the point of intersection.
:::

:::exercise {fs-id1163724035079} type= 
PROBLEM:
Find the distance from point $P(1,5,−4)$ to the plane of equation $3x-y+2z-6=0.$
SOLUTION:
$\frac{16}{\sqrt{14}}$
:::

:::exercise {fs-id1163723290007} type= 
PROBLEM:
Find the distance from point $P(1,−2,3)$ to the plane of equation $(x-3)+2(y+1)-4z=0.$
:::
For the following exercises, the equations of two planes are given.
a. Determine whether the planes are parallel, orthogonal, or neither.
b. If the planes are neither parallel nor orthogonal, then find the measure of the angle between the planes. Express the answer in degrees rounded to the nearest integer.

:::exercise {fs-id1163723290120} type= 
PROBLEM:
**[T]** $x+y+z=0,$ $2x-y+z-7=0$
SOLUTION:
a. The planes are neither parallel nor orthogonal; b. $62\text{°}$
:::

:::exercise {fs-id1163724066397} type= 
PROBLEM:
$5x-3y+z=4,$ $x+4y+7z=1$
:::

:::exercise {fs-id1163724066458} type= 
PROBLEM:
$x-5y-z=1,$ $5x-25y-5z=−3$
SOLUTION:
a. The planes are parallel.
:::

:::exercise {fs-id1163724066520} type= 
PROBLEM:
**[T]** $x-3y+6z=4,$ $5x+y-z=4$
:::

:::exercise {fs-id1163724066592} type= 
PROBLEM:
Show that the lines of equations $x=t,y=1+t,z=2+t,$ $t\in \mathbb{R}\text{,}$ and $\frac{x}{2}=\frac{y-1}{3}=z-3$ are skew, and find the distance between them.
SOLUTION:
$\frac{1}{\sqrt{6}}$
:::

:::exercise {fs-id1163724159245} type= 
PROBLEM:
Show that the lines of equations $x=−1+t,y=−2+t,z=3t,$ $t\in \mathbb{R},$ and $x=5+s,y=−8+2s,z=7s,$ $s\in \mathbb{R}$ are skew, and find the distance between them.
:::

:::exercise {fs-id1163724159371} type= 
PROBLEM:
Consider point $C(−3,2,4)$ and the plane of equation $2x+4y-3z=8.$
a. Find the radius of the sphere with center $C$ tangent to the given plane.
b. Find point *P* of tangency.
SOLUTION:
a. $\frac{18}{\sqrt{29}};$ b. $P(-\frac{51}{29},\frac{130}{29},\frac{62}{29})$
:::

:::exercise {fs-id1163723286790} type= 
PROBLEM:
Consider the plane of equation $x-y-z-8=0.$
a. Find an equation of the sphere with center $C$ at the origin that is tangent to the given plane.
b. Find parametric equations of the line passing through the origin and the point of tangency.
:::

:::exercise {fs-id1163724026902} type= class=material-set-2 
PROBLEM:
Two children are playing with a ball. The girl throws the ball to the boy. The ball travels in
the air, curves $3$ ft to the right, and falls $5$ ft away from the girl (see the following figure). If the plane that contains the trajectory of the ball is perpendicular to the ground, find its equation.

> IMAGE {img:fs-id1163724026925} src=../../media/CNX_Calc_Figure_12_05_205.jpg
> alt: This figure is the image of two children throwing a ball. The path of the ball is represented with an arc. The distance from the child throwing the ball to the point where the ball hits is 5 feet. The distance from the second child to where the ball hits is 3 feet.

SOLUTION:
$4x-3y=0$
:::

:::exercise {fs-id1163724026963} type= class=material-set-2 
PROBLEM:
**[T]** John allocates $d$ dollars to consume monthly three goods of prices $a,b,\;\text{and}\;c.$ In this context, the budget equation is defined as $ax+by+cz=d,$ where $x\ge 0,y\ge 0,$ and $z\ge 0$ represent the number of items bought from each of the goods. The budget set is given by $\{(x,y,z)|ax+by+cz\le d,x\ge 0,y\ge 0,z\ge 0\},$ and the budget plane is the part of the plane of equation $ax+by+cz=d$ for which $x\ge 0,y\ge 0,$ and $z\ge 0.$ Consider $a=\text{\$}8,$ $b=\text{\$}5,$ $c=\text{\$}10,$ and $d=\text{\$}500.$
a. Use a CAS to graph the budget set and budget plane.
b. For $z=25,$ find the new budget equation and graph the budget set in the same system of coordinates.
:::

:::exercise {fs-id1163724182678} type= 
PROBLEM:
**[T]** Consider $\textbf{r}(t)=\langle \text{sin}\;t,\text{cos}\;t,2t\rangle$ the position vector of a particle at time $t\in [0,3],$ where the components of **r** are expressed in centimeters and time is measured in seconds. Let $\vec{OP}$ be the position vector of the particle after $1$ sec.
a. Determine the velocity vector $\textbf{v}(1)$ of the particle after $1$ sec.
b. Find the scalar equation of the plane that is perpendicular to $\textbf{v}(1)$ and passes through point $P.$ This plane is called the *normal plane* to the path of the particle at point $P.$
c. Use a CAS to visualize the path of the particle along with the velocity vector and normal plane at point $P.$
SOLUTION:
a. $\textbf{v}(1)=\langle \text{cos}\;1,\text{−}\text{sin}\;1,2\rangle ;$ b. $(\text{cos}\;1)(x-\text{sin}\;1)-(\text{sin}\;1)(y-\text{cos}\;1)+2(z-2)=0;$
c.

> IMAGE {img:fs-id1163723335862} src=../../media/CNX_Calc_Figure_12_05_207.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has a parallelogram grid drawn representing a plane. There is a curve from y = 1 increasing. The curve intersects the plane. At the point the curve intersects the plane, there is a vector labeled “v(1).” It is upward parallel to the z-axis.

:::

:::exercise {fs-id1163723335876} type= 
PROBLEM:
**[T]** A solar panel is mounted on the roof of a house. The panel may be regarded as positioned at the points of coordinates (in meters) $A(8,0,0),$ $B(8,18,0),$ $C(0,18,8),$ and $D(0,0,8)$ (see the following figure).

> IMAGE {img:fs-id1163723335992} src=../../media/CNX_Calc_Figure_12_04_214.jpg
> alt: This figure is a picture of a rectangular solar grid on a roof. The corners of the rectangle are labeled A, B, C, D. There are two vectors, the first is from A to D. The second is from A to B.

a. Find the general form of the equation of the plane that contains the solar panel by using points $A,B,\;\text{and}\;C,$ and show that its normal vector is equivalent to $\vec{AB}\;\times \;\vec{AD}.$
b. Find parametric equations of line ${L}_{1}$ that passes through the center of the solar panel and has direction vector $\textbf{s}=\frac{1}{\sqrt{3}}\textbf{i}+\frac{1}{\sqrt{3}}\textbf{j}+\frac{1}{\sqrt{3}}\textbf{k},$ which points toward the position of the Sun at a particular time of day.
c. Find symmetric equations of line ${L}_{2}$ that passes through the center of the solar panel and is perpendicular to it.
d. Determine the angle of elevation of the Sun above the solar panel by using the angle between lines ${L}_{1}$ and ${L}_{2}.$
:::

## Glossary
- {def} **direction vector**: a vector parallel to a line that is used to describe the direction, or orientation, of the line in space
- {def} **general form of the equation of a plane**: an equation in the form $ax+by+cz+d=0,$ where $\textbf{n}=\langle a,b,c\rangle$ is a normal vector of the plane, $P=({x}_{0},{y}_{0},{z}_{0})$ is a point on the plane, and $d=\text{−}a{x}_{0}-b{y}_{0}-c{z}_{0}$
- {def} **normal vector**: a vector perpendicular to a plane
- {def} **parametric equations of a line**: the set of equations $x={x}_{0}+ta,$ $y={y}_{0}+tb,$ and $z={z}_{0}+tc$ describing the line with direction vector $\textbf{v}=\langle a,b,c\rangle$ passing through point $({x}_{0},{y}_{0},{z}_{0})$
- {def} **scalar equation of a plane**: the equation $a(x-{x}_{0})+b(y-{y}_{0})+c(z-{z}_{0})=0$ used to describe a plane containing point $P=({x}_{0},{y}_{0},{z}_{0})$ with normal vector $\textbf{n}=\langle a,b,c\rangle$ or its alternate form $ax+by+cz+d=0,$ where $d=\text{−}a{x}_{0}-b{y}_{0}-c{z}_{0}$
- {def} **skew lines**: two lines that are not parallel but do not intersect
- {def} **symmetric equations of $\textbf{a}$ line**: the equations $\frac{x-{x}_{0}}{a}=\frac{y-{y}_{0}}{b}=\frac{z-{z}_{0}}{c}$ describing the line with direction vector $\textbf{v}=\langle a,b,c\rangle$ passing through point $({x}_{0},{y}_{0},{z}_{0})$
- {def} **vector equation of a line**: the equation $\textbf{r}={\textbf{r}}_{0}+t\textbf{v}$ used to describe a line with direction vector $\textbf{v}=\langle a,b,c\rangle$ passing through point $P=({x}_{0},{y}_{0},{z}_{0}),$ where ${\textbf{r}}_{0}=\langle {x}_{0},{y}_{0},{z}_{0}\rangle ,$ is the position vector of point $P$
- {def} **vector equation of a plane**: the equation $\textbf{n}\cdot \vec{PQ}=0,$ where $P$ is a given point in the plane, $Q$ is any point in the plane, and $\textbf{n}$ is a normal vector of the plane

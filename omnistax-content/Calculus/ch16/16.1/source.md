# Vector Fields

## Learning Objectives {section:learning-objectives}
- Recognize a vector field in a plane or in space.
- Sketch a vector field from a given equation.
- Identify a conservative field and its associated potential function.

Vector fields are an important tool for describing many physical concepts, such as gravitation and electromagnetism, which affect the behavior of objects over a large region of a plane or of space. They are also useful for dealing with large-scale behavior such as atmospheric storms or deep-sea ocean currents. In this section, we examine the basic definitions and graphs of vector fields so we can study them in more detail in the rest of this chapter.

## Examples of Vector Fields
How can we model the gravitational force exerted by multiple astronomical objects? How can we model the velocity of water particles on the surface of a river? [ref:CNX_Calc_Figure_16_01_001] gives visual representations of such phenomena.
[ref:CNX_Calc_Figure_16_01_001](a) shows a gravitational field exerted by two astronomical objects, such as a star and a planet or a planet and a moon. At any point in the figure, the vector associated with a point gives the net gravitational force exerted by the two objects on an object of unit mass. The vectors of largest magnitude in the figure are the vectors closest to the larger object. The larger object has greater mass, so it exerts a gravitational force of greater magnitude than the smaller object.
[ref:CNX_Calc_Figure_16_01_001](b) shows the velocity of a river at points on its surface. The vector associated with a given point on the river’s surface gives the velocity of the water at that point. Since the vectors to the left of the figure are small in magnitude, the water is flowing slowly on that part of the surface. As the water moves from left to right, it encounters some rapids around a rock. The speed of the water increases, and a whirlpool occurs in part of the rapids.

> FIGURE {fig:CNX_Calc_Figure_16_01_001} src=../../media/CNX_Calc_Figure_16_01_016.jpg
> alt: Two images, labeled A and B. Image A shows the gravitational field exerted by two astronomical bodies on a small object. The earth is on the left, and the moon is on the right. The earth is surrounded by long arrows pointing towards its center arranged in concentric circles. There is a break in the circle on the right, across from the moon. The moon is surrounded by smaller arrows that curve out and to the right. Image B shows the vector velocity field of water on the surface of a river with a large rock in the middle. The arrows tend to point at the same angle as the riverbank. Where the river meets the rock, the arrows point around the rock. After the rock, the some arrows point forward, and others turn back to the rock. The water flows fastest towards the middle of the river and around the rock and slowest along the riverbank.
> caption: (a) The gravitational field exerted by two astronomical bodies on a small object. (b) The vector velocity field of water on the surface of a river shows the varied speeds of water. Red indicates that the magnitude of the vector is greater, so the water flows more quickly; blue indicates a lesser magnitude and a slower speed of water flow.

Each figure illustrates an example of a vector field. Intuitively, a vector field is a map of vectors. In this section, we study vector fields in ${\mathbb{R}}^{2}$ and ${\mathbb{R}}^{3}.$

:::note [definition] Definition
A {term:vector field} $\textbf{F}$ in ${\mathbb{R}}^{2}$ is an assignment of a two-dimensional vector $\textbf{F}(x,y)$ to each point $(x,y)$ of a subset *D* of ${\mathbb{R}}^{2}.$ The subset *D* is the {index:domain} of the vector field.
A vector field **F** in ${\mathbb{R}}^{3}$ is an assignment of a three-dimensional vector $\textbf{F}(x,y,z)$ to each point $(x,y,z)$ of a subset *D* of ${\mathbb{R}}^{3}.$ The subset *D* is the domain of the vector field.
:::

### Vector Fields in ${\mathbb{R}}^{2}$
A vector field in ${\mathbb{R}}^{2}$ can be represented in either of two equivalent ways. The first way is to use a vector with components that are two-variable functions:

$$ \textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle . $$  {eq:fs-id1167793951458}

The second way is to use the standard unit vectors:

$$ \textbf{F}(x,y)=P(x,y)\textbf{i}+Q(x,y)\textbf{j}. $$  {eq:fs-id1167793252274}

A vector field is said to be *continuous* if its component functions are continuous.

:::example {ex:fs-id1167794027862} Finding a Vector Associated with a Given Point

:::exercise {fs-id1167794164163} type= 
PROBLEM:
Let $\textbf{F}(x,y)=(2{y}^{2}+x-4)\textbf{i}+\text{cos}(x)\textbf{j}$ be a vector field in ${\mathbb{R}}^{2}.$ Note that this is an example of a continuous vector field since both component functions are continuous. What vector is associated with point $(0,−1)?$
SOLUTION:
Substitute the point values for *x* and *y*:

$\begin{array}{rl}\textbf{F}(0,−1) & =(2{(−1)}^{2}+0-4)\textbf{i}+\text{cos}(0)\textbf{j} \\ & =−2\textbf{i}+\textbf{j}.\end{array}$  {eq:fs-id1167793956309}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793363371} type= 
PROBLEM:
Let $\textbf{G}(x,y)={x}^{2}y\textbf{i}-(x+y)\textbf{j}$ be a vector field in ${\mathbb{R}}^{2}.$ What vector is associated with the point $(−2,3)?$
SOLUTION:
$12\textbf{i}-\textbf{j}$
COMMENTARY: Hint
Substitute the point values into the vector function.
:::
:::

## Drawing a Vector Field
We can now represent a vector field in terms of its components of functions or unit vectors, but representing it visually by sketching it is more complex because the domain of a vector field is in ${\mathbb{R}}^{2},$ as is the range. Therefore the “graph” of a vector field in ${\mathbb{R}}^{2}$ lives in four-dimensional space. Since we cannot represent four-dimensional space visually, we instead draw vector fields in ${\mathbb{R}}^{2}$ in a plane itself. To do this, draw the vector associated with a given point at the point in a plane. For example, suppose the vector associated with point $(4,−1)$ is $\langle 3,1\rangle .$ Then, we would draw vector $\langle 3,1\rangle$ at point $(4,−1).$
We should plot enough vectors to see the general shape, but not so many that the sketch becomes a jumbled mess. If we were to plot the image vector at each point in the region, it would fill the region completely and is useless. Instead, we can choose points at the intersections of grid lines and plot a sample of several vectors from each quadrant of a rectangular coordinate system in ${\mathbb{R}}^{2}.$
There are two types of vector fields in ${\mathbb{R}}^{2}$ on which this chapter focuses: radial fields and rotational fields. Radial fields model certain gravitational fields and energy source fields, and rotational fields model the movement of a fluid in a vortex. In a {term:radial field}, all vectors either point directly toward or directly away from the origin. Furthermore, the magnitude of any vector depends only on its distance from the origin. In a radial field, the vector located at point $(x,y)$ is perpendicular to the circle centered at the origin that contains point $(x,y),$ and all other vectors on this circle have the same magnitude.

:::example {ex:fs-id1167794336014} Drawing a Radial Vector Field

:::exercise {fs-id1167794146043} type= 
PROBLEM:
Sketch the vector field $\textbf{F}(x,y)=\frac{x}{2}\;\textbf{i}+\frac{y}{2}\;\textbf{j}.$
SOLUTION:
To sketch this vector field, choose a sample of points from each quadrant and compute the corresponding vector. The following table gives a representative sample of points in a plane and the corresponding vectors.

> TABLE {tab:fs-id1167793952941} cols=6 class=unnumbered
> summary: A table with six columns and five rows. The first row has the values (x,y), F(x,y), (x,y), F(x,y), (x,y), and F(x,y). The second row has the values (1,0), <1/2,0>, (2,0), <1,0>, (1,1), <1/2,1/2>. The third row has the values (0,1), <0,1/2>, (0,2), <0,1>, (-1,1), <-1/2,1/2>. The fourth row has the values (-1,0), <-1/2,0>, (-2,0), <-1,0>, (-1,-1), <-1/2,-1/2>. The fifth row has the values (0,-1), <0,-1/2>, (0,-2), <0,-1>, (1,-1), <1/2,-1/2>.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ |
| $(1,0)$ | $\langle \frac{1}{2},0\rangle$ | $(2,0)$ | $\langle 1,0\rangle$ | $(1,1)$ | $\langle \frac{1}{2},\frac{1}{2}\rangle$ |
| $(0,1)$ | $\langle 0,\frac{1}{2}\rangle$ | $(0,2)$ | $\langle 0,1\rangle$ | $(−1,1)$ | $\langle -\frac{1}{2},\frac{1}{2}\rangle$ |
| $(−1,0)$ | $\langle -\frac{1}{2},0\rangle$ | $(−2,0)$ | $\langle −1,0\rangle$ | $(−1,−1)$ | $\langle -\frac{1}{2},-\frac{1}{2}\rangle$ |
| $(0,−1)$ | $\langle 0,-\frac{1}{2}\rangle$ | $(0,−2)$ | $\langle 0,−1\rangle$ | $(1,−1)$ | $\langle \frac{1}{2},-\frac{1}{2}\rangle$ |

[ref:CNX_Calc_Figure_16_01_002](a) shows the vector field. To see that each vector is perpendicular to the corresponding circle, [ref:CNX_Calc_Figure_16_01_002](b) shows circles overlain on the vector field.

> FIGURE {fig:CNX_Calc_Figure_16_01_002} src=../../media/CNX_Calc_Figure_16_01_003.jpg
> alt: Visual representations of a radial vector field on a coordinate field. The arrows are stretching away from the origin in a radial pattern. The magnitudes increase the further the arrows are from the origin, so the lines are longer. The second version shows concentric circles around the origin to highlight the radial pattern.
> caption: (a) A visual representation of the radial vector field $\textbf{F}(x,y)=\frac{x}{2}\;\textbf{i}+\frac{y}{2}\;\textbf{j}.$ (b) The radial vector field $\textbf{F}(x,y)=\frac{x}{2}\;\textbf{i}+\frac{y}{2}\;\textbf{j}$ with overlaid circles. Notice that each vector is perpendicular to the circle on which it is located.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794188677} type= 
PROBLEM:
Draw the radial field $\textbf{F}(x,y)=-\frac{x}{3}\;\textbf{i}-\frac{y}{3}\;\textbf{j}.$
SOLUTION:

> IMAGE {img:fs-id1167793925702} src=../../media/CNX_Calc_Figure_16_01_004.jpg
> alt: A visual representation of the given radial field in a coordinate plane. The magnitudes increase further from the origin. The arrow seem to be stretching away from the origin in a rectangular shape.

COMMENTARY: Hint
Sketch enough vectors to get an idea of the shape.
:::
:::
In contrast to radial fields, in a {term:rotational field}, the vector at point $(x,y)$ is tangent (not perpendicular) to a circle with radius $r=\sqrt{{x}^{2}+{y}^{2}}.$ In a standard rotational field, all vectors point either in a clockwise direction or in a counterclockwise direction, and the magnitude of a vector depends only on its distance from the origin. Both of the following examples are clockwise rotational fields, and we see from their visual representations that the vectors appear to rotate around the origin.

:::example {ex:fs-id1167793958705} Chapter Opener: Drawing a Rotational Vector Field

:::exercise {fs-id1167793958707} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_16_01_017} src=../../media/CNX_Calc_Figure_16_01_017.jpg
> alt: A photograph of a hurricane, showing the rotation around its eye.
> caption: (credit: modification of work by NASA)

Sketch the vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle .$
SOLUTION:
Create a table (see the one that follows) using a representative sample of points in a plane and their corresponding vectors. [ref:CNX_Calc_Figure_16_01_005] shows the resulting vector field.

> TABLE {tab:fs-id1167794034119} cols=6 class=unnumbered
> summary: A table with six columns and five rows. The first row has the values (x,y), F(x,y), (x,y), F(x,y), (x,y), and F(x,y). The second row has the values (1,0), <0,-1>, (2,0), <0,-2>, (1,1), <1,-1>. The third row has the values (0,1), <1,0>, (0,2), <2,0>, (-1,1), <1,1>. The fourth row has the values (-1,0), <0,1>, (-2,0), <0,2>, (-1,-1), <-1,1>. The fifth row has the values (0,-1), <-1,0>, (0,-2), <-2,0>, (1,-1), <-1,-1>.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ |
| $(1,0)$ | $\langle 0,−1\rangle$ | $(2,0)$ | $\langle 0,−2\rangle$ | $(1,1)$ | $\langle 1,−1\rangle$ |
| $(0,1)$ | $\langle 1,0\rangle$ | $(0,2)$ | $\langle 2,0\rangle$ | $(−1,1)$ | $\langle 1,1\rangle$ |
| $(−1,0)$ | $\langle 0,1\rangle$ | $(−2,0)$ | $\langle 0,2\rangle$ | $(−1,−1)$ | $\langle −1,1\rangle$ |
| $(0,−1)$ | $\langle −1,0\rangle$ | $(0,−2)$ | $\langle −2,0\rangle$ | $(1,−1)$ | $\langle −1,−1\rangle$ |

> FIGURE {fig:CNX_Calc_Figure_16_01_004} src=../../media/CNX_Calc_Figure_16_01_006.jpg
> alt: A visual representation of the given vector field in a coordinate plane with two additional diagrams with notation. The first representation shows the vector field. The arrows are circling the origin in a clockwise motion. The second representation shows concentric circles, highlighting the radial pattern. The The third representation shows the concentric circles. It also shows arrows for the radial vector <a,b> for all points (a,b). Each is perpendicular to the arrows in the given vector field.
> caption: (a) A visual representation of vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle .$ (b) Vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle$ with circles centered at the origin. (c) Vector $\textbf{F}(a,b)$ is perpendicular to radial vector $\langle a,b\rangle$ at point $(a,b).$

COMMENTARY: Analysis
Note that vector $\textbf{F}(a,b)=\langle b,\text{−}a\rangle$ points clockwise and is perpendicular to radial vector $\langle a,b\rangle .$ (We can verify this assertion by computing the dot product of the two vectors: $\langle a,b\rangle \cdot \langle \text{−}b,a\rangle =\text{−}ab+ab=0.)$ Furthermore, vector $\langle b,\text{−}a\rangle$ has length $r=\sqrt{{a}^{2}+{b}^{2}}.$ Thus, we have a complete description of this rotational vector field: the vector associated with point $(a,b)$ is the vector with length *r* tangent to the circle with radius *r*, and it points in the clockwise direction.
Sketches such as that in [ref:CNX_Calc_Figure_16_01_005] are often used to analyze major storm systems, including {index:hurricanes} and cyclones. In the northern hemisphere, storms rotate counterclockwise; in the southern hemisphere, storms rotate clockwise. (This is an effect caused by Earth’s rotation about its axis and is called the Coriolis Effect.)
:::
:::

:::example {ex:fs-id1167794216020} Sketching a Vector Field

:::exercise {fs-id1167794216022} type= 
PROBLEM:
Sketch vector field $\textbf{F}(x,y)=\frac{y}{{x}^{2}+{y}^{2}}\;\textbf{i}-\frac{x}{{x}^{2}+{y}^{2}}\;\textbf{j}.$
SOLUTION:
To visualize this vector field, first note that the dot product $\textbf{F}(a,b)\cdot (a\textbf{i}+b\textbf{j})$ is zero for any point $(a,b).$ Therefore, each vector is tangent to the circle on which it is located. Also, as $(a,b)\to (0,0),$ the magnitude of $\textbf{F}(a,b)$ goes to infinity. To see this, note that

$||\textbf{F}(a,b)||=\sqrt{\frac{{a}^{2}+{b}^{2}}{{({a}^{2}+{b}^{2})}^{2}}}=\sqrt{\frac{1}{{a}^{2}+{b}^{2}}}.$  {eq:fs-id1167794126769}

Since $\frac{1}{{a}^{2}+{b}^{2}}\to \infty$ as $(a,b)\to (0,0),$ then $||\textbf{F}(a,b)||\to \infty$ as $(a,b)\to (0,0).$ This vector field looks similar to the vector field in [ref:fs-id1167793958705], but in this case the magnitudes of the vectors close to the origin are large. The table below shows a sample of points and the corresponding vectors, and [ref:CNX_Calc_Figure_16_01_005] shows the vector field. Note that this vector field models the whirlpool motion of the river in [ref:CNX_Calc_Figure_16_01_001](b). The domain of this vector field is all of ${\mathbb{R}}^{2}$ except for point $(0,0).$

> TABLE {tab:fs-id1167793610554} cols=6 class=unnumbered
> summary: A table with six columns and five rows. The first row has the values (x,y), F(x,y), (x,y), F(x,y), (x,y), and F(x,y). The second row has the values (1,0), <0,-1>, (2,0), <0,-1/2>, (1,1), <1/2, -1/2>. The third row has the values (0,1), <1,0>, (0,2), <1/2, 0>, (-1,1), <1/2,1/2>. The fourth row has the values (-1,0), <0,1>, (-2,0), <0,1/2>, (-1,-1), <-1/2,1/2>. The fifth row has the values (0,-1), <-1,0>, (0,-2), <-1/2,0>, (1,-1), <-1/2,-1/2>.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ | $(x,y)$ | $\textbf{F}(x,y)$ |
| $(1,0)$ | $\langle 0,−1\rangle$ | $(2,0)$ | $\langle 0,-\frac{1}{2}\rangle$ | $(1,1)$ | $\langle \frac{1}{2},-\frac{1}{2}\rangle$ |
| $(0,1)$ | $\langle 1,0\rangle$ | $(0,2)$ | $\langle \frac{1}{2},0\rangle$ | $(−1,1)$ | $\langle \frac{1}{2},\frac{1}{2}\rangle$ |
| $(−1,0)$ | $\langle 0,1\rangle$ | $(−2,0)$ | $\langle 0,\frac{1}{2}\rangle$ | $(−1,−1)$ | $\langle -\frac{1}{2},\frac{1}{2}\rangle$ |
| $(0,−1)$ | $\langle −1,0\rangle$ | $(0,−2)$ | $\langle -\frac{1}{2},0\rangle$ | $(1,−1)$ | $\langle -\frac{1}{2},-\frac{1}{2}\rangle$ |

> FIGURE {fig:CNX_Calc_Figure_16_01_005} src=../../media/CNX_Calc_Figure_16_01_007.jpg
> alt: A visual representation of the given vector field in a coordinate plane. The magnitude is larger closer to the origin. The arrows are rotating the origin clockwise. It could be use to model whirlpool motion of a fluid.
> caption: A visual representation of vector field $\textbf{F}(x,y)=\frac{y}{{x}^{2}+{y}^{2}}\;\textbf{i}-\frac{x}{{x}^{2}+{y}^{2}}\;\textbf{j}.$ This vector field could be used to model whirlpool motion of a fluid.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793445715} type= 
PROBLEM:
Sketch vector field $\textbf{F}(x,y)=\langle −2y,2x\rangle .$ Is the vector field radial, rotational, or neither?
SOLUTION:
Rotational

> IMAGE {img:fs-id1167793886374} src=../../media/CNX_Calc_Figure_16_01_008.jpg
> alt: A visual representation of a rotational vector field in a coordinate plane. The arrows circle the origin in a counterclockwise manner.

COMMENTARY: Hint
Substitute enough points into **F** to get an idea of the shape.
:::
:::

:::example {ex:fs-id1167793363040} Velocity Field of a Fluid

:::exercise {fs-id1167793363042} type= 
PROBLEM:
Suppose that $\textbf{v}(x,y)=-\frac{2y}{{x}^{2}+{y}^{2}}\;\textbf{i}+\frac{2x}{{x}^{2}+{y}^{2}}\;\textbf{j}$ is the velocity field of a fluid. How fast is the fluid moving at point $(1,−1)?$ (Assume the units of speed are meters per second.)
SOLUTION:
To find the velocity of the fluid at point $(1,−1),$ substitute the point into **v**:

$\textbf{v}(1,−1)=-\frac{2(−1)}{1+1}\;\textbf{i}+\frac{2(1)}{1+1}\;\textbf{j}=\textbf{i}+\textbf{j}.$  {eq:fs-id1167794221133}

The speed of the fluid at $(1,−1)$ is the magnitude of this vector. Therefore, the speed is $||\textbf{i}+\textbf{j}||=\sqrt{2}$ m/sec.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794136726} type= 
PROBLEM:
Vector field $v(x,y)=\langle 4|x|,1\rangle$ models the velocity of water on the surface of a river. What is the speed of the water at point $(2,3)?$ Use meters per second as the units.
SOLUTION:
$\sqrt{65}$ m/sec
COMMENTARY: Hint
Remember, speed is the magnitude of velocity.
:::
:::
We have examined vector fields that contain vectors of various magnitudes, but just as we have unit vectors, we can also have a unit vector field. A vector field **F** is a {term:unit vector field} if the magnitude of each vector in the field is 1. In a unit vector field, the only relevant information is the direction of each vector.

:::example {ex:fs-id1167793940891} A Unit Vector Field

:::exercise {fs-id1167793940893} type= 
PROBLEM:
Show that the vector field $\textbf{G}(x,y)=\langle \frac{y}{\sqrt{{x}^{2}+{y}^{2}}},-\frac{x}{\sqrt{{x}^{2}+{y}^{2}}}\rangle$ is a unit vector field.
SOLUTION:
To show that **G** is a unit field, we must show that the magnitude of each vector is 1. Note that

$\begin{array}{rl}\sqrt{{(\frac{y}{\sqrt{{x}^{2}+{y}^{2}}})}^{2}+{(-\frac{x}{\sqrt{{x}^{2}+{y}^{2}}})}^{2}} & =\sqrt{\frac{{y}^{2}}{{x}^{2}+{y}^{2}}+\frac{{x}^{2}}{{x}^{2}+{y}^{2}}} \\ & =\sqrt{\frac{{x}^{2}+{y}^{2}}{{x}^{2}+{y}^{2}}} \\ & =1.\end{array}$  {eq:fs-id1167793936286}

Therefore, **G** is a unit vector field.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793950928} type= 
PROBLEM:
Is vector field $\textbf{F}(x,y)=\langle \text{−}y,x\rangle$ a unit vector field?
SOLUTION:
No.
COMMENTARY: Hint
Calculate the magnitude of **F** at an arbitrary point $(x,y).$
:::
:::
Why are unit vector fields important? Suppose we are studying the flow of a fluid, and we care only about the direction in which the fluid is flowing at a given point. In this case, the speed of the fluid (which is the magnitude of the corresponding velocity vector) is irrelevant, because all we care about is the direction of each vector. Therefore, the unit vector field associated with velocity is the field we would study.
If $\textbf{F}=\langle P,Q,R\rangle$ is a vector field, then the corresponding unit vector field is $\langle \frac{P}{||\textbf{F}||},\frac{Q}{||\textbf{F}||},\frac{R}{||\textbf{F}||}\rangle .$ Notice that if $\textbf{F}(x,y)=\langle y,\text{−}x\rangle$ is the vector field from [ref:fs-id1167793958705], then the magnitude of **F** is $\sqrt{{x}^{2}+{y}^{2}},$ and therefore the corresponding unit vector field is the field **G** from the previous example.
If **F** is a vector field, then the process of dividing **F** by its magnitude to form unit vector field $\textbf{F}\text{/}||\textbf{F}||$ is called *normalizing* the field **F**.

### Vector Fields in ${\mathbb{R}}^{3}$
We have seen several examples of vector fields in ${\mathbb{R}}^{2};$ let’s now turn our attention to vector fields in ${\mathbb{R}}^{3}.$ These vector fields can be used to model gravitational or electromagnetic fields, and they can also be used to model fluid flow or heat flow in three dimensions. A two-dimensional vector field can really only model the movement of water on a two-dimensional slice of a river (such as the river’s surface). Since a river flows through three spatial dimensions, to model the flow of the entire depth of the river, we need a vector field in three dimensions.
The extra dimension of a three-dimensional field can make vector fields in ${\mathbb{R}}^{3}$ more difficult to visualize, but the idea is the same. To visualize a vector field in ${\mathbb{R}}^{3},$ plot enough vectors to show the overall shape. We can use a similar method to visualizing a vector field in ${\mathbb{R}}^{2}$ by choosing points in each octant.
Just as with vector fields in ${\mathbb{R}}^{2},$ we can represent vector fields in ${\mathbb{R}}^{3}$ with component functions. We simply need an extra component function for the extra dimension. We write either

$$ \textbf{F}(x,y,z)=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle $$  {eq:fs-id1167793948412}

or

$$ \textbf{F}(x,y,z)=P(x,y,z)\textbf{i}+Q(x,y,z)\textbf{j}+R(x,y,z)\textbf{k}. $$  {eq:fs-id1167793977405}

:::example {ex:fs-id1167793404656} Sketching a Vector Field in Three Dimensions

:::exercise {fs-id1167793404658} type= 
PROBLEM:
Describe vector field $\textbf{F}(x,y,z)=\langle 1,1,z\rangle .$
SOLUTION:
For this vector field, the *x* and *y* components are constant, so every point in ${\mathbb{R}}^{3}$ has an associated vector with *x* and *y* components equal to one. To visualize **F**, we first consider what the field looks like in the *xy*-plane. In the *xy*-plane, $z=0.$ Hence, each point of the form $(a,b,0)$ has vector $\langle 1,1,0\rangle$ associated with it. For points not in the *xy*-plane but slightly above it, the associated vector has a small but positive *z* component, and therefore the associated vector points slightly upward. For points that are far above the *xy*-plane, the *z* component is large, so the vector is almost vertical. [ref:CNX_Calc_Figure_16_01_007] shows this vector field.

> FIGURE {fig:CNX_Calc_Figure_16_01_007} src=../../media/CNX_Calc_Figure_16_01_009.jpg
> alt: A visual representation of the given vector field in three dimensions. The arrows always have x and y components of 1. The z component changes according to the height. The closer z comes to 0, the smaller the z component becomes, and the further away z is from 0, the larger the z component becomes.
> caption: A visual representation of vector field $\textbf{F}(x,y,z)=\langle 1,1,z\rangle .$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794226031} type= 
PROBLEM:
Sketch vector field $\textbf{G}(x,y,z)=\langle 2,\frac{z}{2},1\rangle .$
SOLUTION:

> IMAGE {img:fs-id1167793952379} src=../../media/CNX_Calc_Figure_16_01_010.jpg
> alt: A visual representation of the given vector field in three dimensions. The x and z components are always 2 and 1, respectively. The y component is z/2. The closer z comes to zero, the smaller the y component is, and the further away z is from zero, the larger the y component is.

COMMENTARY: Hint
Substitute enough points into the vector field to get an idea of the general shape.
:::
:::
In the next example, we explore one of the classic cases of a three-dimensional vector field: a gravitational field.

:::example {ex:fs-id1167793354224} Describing a Gravitational Vector Field

:::exercise {fs-id1167793354226} type= 
PROBLEM:
Newton’s law of gravitation states that $\textbf{F}=\text{−}G\;\frac{{m}_{1}{m}_{2}}{{r}^{2}}\mathbf{\overset{\wedge}{r}},$ where *G* is the universal gravitational constant. It describes the gravitational field exerted by an object (object 1) of mass ${m}_{1}$ located at the origin on another object (object 2) of mass ${m}_{2}$ located at point $(x,y,z).$ Field **F** denotes the gravitational force that object 1 exerts on object 2, *r* is the distance between the two objects, and $\mathbf{\overset{\wedge}{r}}$ indicates the unit vector from the first object to the second. The minus sign shows that the gravitational force attracts toward the origin; that is, the force of object 1 is attractive. Sketch the vector field associated with this equation.
SOLUTION:
Since object 1 is located at the origin, the distance between the objects is given by $r=\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}.$ The unit vector from object 1 to object 2 is $\mathbf{\overset{\wedge}{r}}=\frac{\langle x,y,z\rangle}{||\langle x,y,z\rangle ||},$ and hence $\mathbf{\overset{\wedge}{r}}=\langle \frac{x}{r},\frac{y}{r},\frac{z}{r}\rangle .$ Therefore, gravitational vector field **F** exerted by object 1 on object 2 is

$\textbf{F}=\text{−}G{m}_{1}{m}_{2}\langle \frac{x}{{r}^{3}},\frac{y}{{r}^{3}},\frac{z}{{r}^{3}}\rangle .$  {eq:fs-id1167793931832}

This is an example of a radial vector field in ${\mathbb{R}}^{3}.$
[ref:CNX_Calc_Figure_16_01_009] shows what this gravitational field looks like for a large mass at the origin. Note that the magnitudes of the vectors increase as the vectors get closer to the origin.

> FIGURE {fig:CNX_Calc_Figure_16_01_009} src=../../media/CNX_Calc_Figure_16_01_011.jpg
> alt: A visual representation of the given gravitational vector field in three dimensions. The magnitudes of the vectors increase as the vectors get closer to the origin. The arrows point in, towards the mass at the origin.
> caption: A visual representation of gravitational vector field $\textbf{F}=\text{−}G{m}_{1}{m}_{2}\langle \frac{x}{{r}^{3}},\frac{y}{{r}^{3}},\frac{z}{{r}^{3}}\rangle$ for a large mass at the origin.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793522405} type= 
PROBLEM:
The mass of asteroid 1 is 750,000 kg and the mass of asteroid 2 is 130,000 kg. Assume asteroid 1 is located at the origin, and asteroid 2 is located at $(15,−5,10),$ measured in units of 10 to the eighth power kilometers. Given that the universal gravitational constant is $G=6.67384\;\times \;{10}^{−11}{\;\text{m}}^{3}{\text{kg}}^{−1}{\text{s}}^{−2},$ find the gravitational force vector that asteroid 1 exerts on asteroid 2.
SOLUTION:
$–1.49063\;\times \;{10}^{−18},4.96876\;\times \;{10}^{−19},–9.93752\;\times \;{10}^{−19}\text{N}$
COMMENTARY: Hint
Follow [ref:fs-id1167793354224] and first compute the distance between the asteroids.
:::
:::

## Gradient Fields
In this section, we study a special kind of vector field called a gradient field or a {term:conservative field}. These vector fields are extremely important in physics because they can be used to model physical systems in which energy is conserved. Gravitational fields and electric fields associated with a static charge are examples of gradient fields.
Recall that if $f$ is a (scalar) function of *x* and *y*, then the gradient of $f$ is

$\text{grad}\;f=\text{∇}f={f}_{x}(x,y)\textbf{i}+{f}_{y}(x,y)\textbf{j}.$  {eq:fs-id1167793270510}

We can see from the form in which the gradient is written that $\text{∇}f$ is a vector field in ${\mathbb{R}}^{2}.$ Similarly, if $f$ is a function of *x*, *y*, and *z*, then the gradient of $f$ is

$\text{grad}\;f=\text{∇}f={f}_{x}(x,y,z)\textbf{i}+{f}_{y}(x,y,z)\textbf{j}+{f}_{z}(x,y,z)\textbf{k}.$  {eq:fs-id1167793462831}

The gradient of a three-variable function is a vector field in ${\mathbb{R}}^{3}.$
A gradient field is a vector field that can be written as the gradient of a function, and we have the following definition.

:::note [definition] Definition
A vector field $\textbf{F}$ in ${\mathbb{R}}^{2}$ or in ${\mathbb{R}}^{3}$ is a {term:gradient field} if there exists a scalar function $f$ such that $\text{∇}f=\textbf{F}.$
:::

:::example {ex:fs-id1167793374719} Sketching a Gradient Vector Field

:::exercise {fs-id1167793374722} type= 
PROBLEM:
Use technology to plot the gradient vector field of $f(x,y)={x}^{2}{y}^{2}.$
SOLUTION:
The gradient of $f$ is $\text{∇}f=\langle 2x{y}^{2},2{x}^{2}y\rangle .$ To sketch the vector field, use a computer algebra system such as Mathematica. [ref:CNX_Calc_Figure_16_01_010] shows $\text{∇}f.$

> FIGURE {fig:CNX_Calc_Figure_16_01_010} src=../../media/CNX_Calc_Figure_16_01_012.jpg
> alt: A visual representation of the given gradient vector field in two dimensions. The arrows point up above the x axis and down below the x axis, and they point left on the left side of the y axis and to the right on the right side of the y axis. The further the arrows are from zero, the more vertical they are, and the closer the arrows are to zero, the more horizontal they are.
> caption: The gradient vector field is $\text{∇}f,$ where $f(x,y)={x}^{2}{y}^{2}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793941510} type= 
PROBLEM:
Use technology to plot the gradient vector field of $f(x,y)=\text{sin}\;x\;\text{cos}\;y.$
SOLUTION:

> IMAGE {img:fs-id1167793472247} src=../../media/CNX_Calc_Figure_16_01_013.jpg
> alt: A visual representation of the given given vector in two dimensions. The arrows seem to be forming several ovals. The first is around the origin, where the arrows curve to the right above and below the x axis. The closer the arrows are to the x axis, the flatter they are. There appear to be six other ovals, three on either side of the central one. The vectors get longer as they get farther from the origin, and then they start to get shorter again.

COMMENTARY: Hint
Find the gradient of $f.$
:::
:::
Consider the function $f(x,y)={x}^{2}{y}^{2}$ from [ref:fs-id1167793374719]. [ref:CNX_Calc_Figure_16_01_013] shows the level curves of this function overlaid on the function’s gradient vector field. The gradient vectors are perpendicular to the level curves, and the magnitudes of the vectors get larger as the level curves get closer together, because closely grouped level curves indicate the graph is steep, and the magnitude of the gradient vector is the largest value of the directional derivative. Therefore, you can see the local steepness of a graph by investigating the corresponding function’s gradient field.

> FIGURE {fig:CNX_Calc_Figure_16_01_012} src=../../media/CNX_Calc_Figure_16_01_014.jpg
> alt: A visual representation of the given gradient field. The arrows are flatter the closer they are to the x axis and more vertical the further they are from the x axis. The arrows point left to the left of the y axis, and they point to the right to the right of the y axis. They point up above the x axis and down below the x axis. Several level curves are drawn, each asymptotically approaching the axes. As the level curves get closer together, the magnitude of the gradient vectors increases.
> caption: The gradient field of $f(x,y)={x}^{2}{y}^{2}$ and several level curves of $f.$ Notice that as the level curves get closer together, the magnitude of the gradient vectors increases.

As we learned earlier, a vector field $\textbf{F}$ is a conservative vector field, or a gradient field if there exists a scalar function $f$ such that $\text{∇}f=\textbf{F}.$ In this situation, $f$ is called a {term:potential function} for $\textbf{F}.$ Conservative vector fields arise in many applications, particularly in physics. The reason such fields are called *conservative* is that they model forces of physical systems in which energy is conserved. We study conservative vector fields in more detail later in this chapter.
You might notice that, in some applications, a potential function $f$ for **F** is defined instead as a function such that $\text{−}\text{∇}f=\textbf{F}.$ This is the case for certain contexts in physics, for example.

:::example {ex:fs-id1167793619914} Verifying a Potential Function

:::exercise {fs-id1167793619916} type= 
PROBLEM:
Is $f(x,y,z)={x}^{2}yz-\text{sin}(xy)$ a potential function for vector field

$\textbf{F}(x,y,z)=\langle 2xyz-y\;\text{cos}(xy),{x}^{2}z-x\;\text{cos}(xy),{x}^{2}y\rangle ?$  {eq:fs-id1167793271692}

SOLUTION:
We need to confirm whether $\text{∇}f=\textbf{F}.$ We have

${f}_{x}=2xyz-y\;\text{cos}(xy),{f}_{y}={x}^{2}z-x\;\text{cos}(xy),\;\text{and}\;{f}_{z}={x}^{2}y.$  {eq:fs-id1167793930897}

Therefore, $\text{∇}f=\textbf{F}$ and $f$ is a potential function for $\textbf{F}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793568779} type= 
PROBLEM:
Is $f(x,y,z)={x}^{2}\text{cos}(yz)+{y}^{2}{z}^{2}$ a potential function for $\textbf{F}(x,y,z)=\langle 2x\;\text{cos}(yz),\text{−}{x}^{2}z\;\text{sin}(yz)+2y{z}^{2},{y}^{2}\rangle ?$
SOLUTION:
No
COMMENTARY: Hint
Compute the gradient of $f.$
:::
:::

:::example {ex:fs-id1167793355046} Verifying a Potential Function

:::exercise {fs-id1167793355048} type= 
PROBLEM:
The velocity of a fluid is modeled by field $\textbf{v}(x,y)=\langle xy,\frac{{x}^{2}}{2}-y\rangle .$ Verify that $f(x,y)=\frac{{x}^{2}y}{2}-\frac{{y}^{2}}{2}$ is a potential function for **v**.
SOLUTION:
To show that $f$ is a potential function, we must show that $\text{∇}f=\textbf{v}.$ Note that ${f}_{x}=xy$ and ${f}_{y}=\frac{{x}^{2}}{2}-y.$ Therefore, $\text{∇}f=\langle xy,\frac{{x}^{2}}{2}-y\rangle$ and $f$ is a potential function for v ([ref:CNX_Calc_Figure_16_01_013]).

> FIGURE {fig:CNX_Calc_Figure_16_01_013} src=../../media/CNX_Calc_Figure_16_01_015.jpg
> alt: A visual representation of the given directional field in two dimensions. The arrows in quadrant 1point to the right. Closer to the y axis, they point down, but they quickly cuve and soon point up at at roughly 90-degree angle. The closer the arrows are to the x axis, the more vertical they are. Quadrant 2 is a reflection of quadrant 1. In quadrant 3, the arrows are more vertical the closer they are to the x and y axes. They point up and to the right. The further they are from the axes, the closer the arrows are to a 90-degree angle. Quadrant 4 is a reflection of quadrant 3.
> caption: Velocity field $\textbf{v}(x,y)$ has a potential function and is a conservative field.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793725925} type= 
PROBLEM:
Verify that $f(x,y)={x}^{3}{y}^{2}+1$ is a potential function for velocity field $\text{v}(x,y)=\langle 3{x}^{2}{y}^{2},2{x}^{3}y\rangle .$
SOLUTION:
$\text{∇}f=\textbf{v}$
COMMENTARY: Hint
Calculate the gradient.
:::
:::
If **F** is a conservative vector field, then there is at least one potential function $f$ such that $\text{∇}f=\textbf{F}.$ But, could there be more than one potential function? If so, is there any relationship between two potential functions for the same vector field? Before answering these questions, let’s recall some facts from single-variable calculus to guide our intuition. Recall that if $k(x)$ is an integrable function, then *k* has infinitely many antiderivatives. Furthermore, if *F* and *G* are both antiderivatives of *k*, then *F* and *G* differ only by a constant. That is, there is some number *C* such that $F(x)=G(x)+C.$
Now let $F$ be a conservative vector field and let $f$ and *g* be potential functions for $F$. Since the gradient is like a derivative, $F$ being conservative means that $F$ is “integrable” with “antiderivatives” $f$ and *g*. Therefore, if the analogy with single-variable calculus is valid, we expect there is some constant *C* such that $f(x)=g(x)+C.$ The next theorem says that this is indeed the case.
To state the next theorem with precision, we need to assume the domain of the vector field is connected and open. To be connected means if ${P}_{1}$ and ${P}_{2}$ are any two points in the domain, then you can walk from ${P}_{1}$ to ${P}_{2}$ along a path that stays entirely inside the domain.

:::note [theorem] Uniqueness of Potential Functions
Let **F** be a conservative vector field on an open and connected domain and let $f$ and *g* be functions such that $\text{∇}f=\textbf{F}$ and $\text{∇}g=\textbf{F}.$ Then, there is a constant *C* such that $f=g+C.$
:::

### Proof
Since $f$ and *g* are both potential functions for **F**, then $\text{∇}(f-g)=\text{∇}f-\text{∇}g=\textbf{F}-\textbf{F}=0.$ Let $h=f-g,$ then we have $\text{∇}h=0.$ We would like to show that *h* is a constant function.
Assume *h* is a function of *x* and *y* (the logic of this proof extends to any number of independent variables). Since $\text{∇}h=0,$ we have ${h}_{x}=0$ and ${h}_{y}=0.$ The expression ${h}_{x}=0$ implies that *h* is a constant function with respect to *x—*that is, $h(x,y)={k}_{1}(y)$ for some function *k<sub>1</sub>*. Similarly, ${h}_{y}=0$ implies $h(x,y)={k}_{2}(x)$ for some function *k<sub>2</sub>*. Therefore, function *h* depends only on *y* and also depends only on *x*. Thus, $h(x,y)=C$ for some constant *C* on the connected domain of **F**. Note that we really do need connectedness at this point; if the domain of **F** came in two separate pieces, then *k* could be a constant *C<sub>1</sub>* on one piece but could be a different constant *C<sub>2</sub>* on the other piece. Since $f-g=h=C,$ we have that $f=g+C,$ as desired.
□
Conservative vector fields also have a special property called the {index:*cross-partial property*}. This property helps test whether a given vector field is conservative.

:::note [theorem] The Cross-Partial Property of Conservative Vector Fields
Let **F** be a vector field in two or three dimensions such that the component functions of **F** have continuous first-order partial derivatives on the domain of **F**.
If $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle$ is a conservative vector field in ${\mathbb{R}}^{2},$ then $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.$ If $\textbf{F}(x,y,z)=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle$ is a conservative vector field in ${\mathbb{R}}^{3},$ then

$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x},\frac{\partial Q}{\partial z}=\frac{\partial R}{\partial y},\;\text{and}\;\frac{\partial R}{\partial x}=\frac{\partial P}{\partial z}.$  {eq:fs-id1167793705647}

:::

### Proof
Since **F** is conservative, there is a function $f(x,y)$ such that $\text{∇}f=\textbf{F}.$ Therefore, by the definition of the gradient, ${f}_{x}=P$ and ${f}_{y}=Q.$ By Clairaut’s theorem, ${f}_{xy}={f}_{yx},$ But, ${f}_{xy}={P}_{y}$ and ${f}_{yx}={Q}_{x},$ and thus ${P}_{y}={Q}_{x}.$
□
{index:Clairaut’s theorem} gives a fast proof of the cross-partial property of conservative vector fields in ${\mathbb{R}}^{3},$ just as it did for vector fields in ${\mathbb{R}}^{2}.$
[ref:fs-id1167794327427] shows that most vector fields are not conservative. The cross-partial property is difficult to satisfy in general, so most vector fields won’t have equal cross-partials.

:::example {ex:fs-id1167793541431} Showing a Vector Field Is Not Conservative

:::exercise {fs-id1167793541433} type= 
PROBLEM:
Show that rotational vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle$ is not conservative.
SOLUTION:
Let $P(x,y)=y\;\text{and}\;Q(x,y)=\text{−}x.$ If **F** is conservative, then the cross-partials would be equal—that is, ${P}_{y}$ would equal ${Q}_{x.}$ Therefore, to show that **F** is not conservative, check that ${P}_{y}≠{Q}_{x}.$ Since ${P}_{y}=1$ and ${Q}_{x}=−1,$ the vector field is not conservative.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793609897} type= 
PROBLEM:
Show that the vector field $\textbf{F}(x,y)=y\textbf{i}-{x}^{2}xy\textbf{j}$ is not conservative.
SOLUTION:
${P}_{y}=x≠{Q}_{x}=−2xy$
COMMENTARY: Hint
Check the cross-partials.
:::
:::

:::example {ex:fs-id1167793495830} Showing a Vector Field Is Not Conservative

:::exercise {fs-id1167793495832} type= 
PROBLEM:
Is vector field $\textbf{F}(x,y,z)=\langle 7,−2,{x}^{3}\rangle$ conservative?
SOLUTION:
Let $P(x,y,z)=7,$ $Q(x,y,z)=−2,$ and $R(x,y,z)={x}^{3}.$ If **F** is conservative, then all three cross-partial equations will be satisfied—that is, if **F** is conservative, then ${P}_{y}$ would equal ${Q}_{x},{Q}_{z}$ would equal ${R}_{y},$ and ${R}_{x}$ would equal ${P}_{z}.$ Note that ${P}_{y}={Q}_{x}={R}_{y}={Q}_{z}=0,$ so the first two necessary equalities hold. However, ${R}_{x}=3{x}^{2}$ and ${P}_{z}=0$ so ${R}_{x}≠{P}_{z}.$ Therefore, $\textbf{F}$ is not conservative.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793514867} type= 
PROBLEM:
Is vector field $G(x,y,z)=\langle y,x,xyz\rangle$ conservative?
SOLUTION:
No
COMMENTARY: Hint
Check the cross-partials.
:::
:::
We conclude this section with a word of warning: [ref:fs-id1167794327427] says that if **F** is conservative, then **F** has the cross-partial property. The theorem does *not* say that, if **F** has the cross-partial property, then **F** is conservative (the converse of an implication is not logically equivalent to the original implication). In other words, [ref:fs-id1167794327427] can only help determine that a field is not conservative; it does not let you conclude that a vector field is conservative. For example, consider vector field $\textbf{F}(x,y)=\langle {x}^{2}y,\frac{{x}^{3}}{3}\rangle .$ This field has the cross-partial property, so it is natural to try to use [ref:fs-id1167794327427] to conclude this vector field is conservative. However, this is a misapplication of the theorem. We learn later how to conclude that **F** is conservative.

## Key Concepts {section:key-concepts}
- A vector field assigns a vector $\textbf{F}(x,y)$ to each point $(x,y)$ in a subset *D* of ${\mathbb{R}}^{2}\;\text{or}\;{\mathbb{R}}^{3}.$ $\textbf{F}(x,y,z)$ to each point $(x,y,z)$ in a subset *D* of ${\mathbb{R}}^{3}.$
- Vector fields can describe the distribution of vector quantities such as forces or velocities over a region of the plane or of space. They are in common use in such areas as physics, engineering, meteorology, oceanography.
- We can sketch a vector field by examining its defining equation to determine relative magnitudes in various locations and then drawing enough vectors to determine a pattern.
- A vector field $\textbf{F}$ is called conservative if there exists a scalar function $f$ such that $\text{∇}f=\textbf{F}.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-556} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Vector field in ${\mathbb{R}}^{2}$** | $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle$<br> or<br> $\textbf{F}(x,y)=P(x,y)\textbf{i}+Q(x,y)\textbf{j}$ |
| **Vector field in ${\mathbb{R}}^{3}$** | $\textbf{F}(x,y,z)=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle$<br> or<br> $\textbf{F}(x,y,z)=P(x,y,z)\textbf{i}+Q(x,y,z)\textbf{j}+R(x,y,z)\textbf{k}$ |

##  {section:section-exercises}

:::exercise {fs-id1167793754000} type= 
PROBLEM:
The domain of vector field $\textbf{F}=\textbf{F}(x,y)$ is a set of points $(x,y)$ in a plane, and the range of **F** is a set of *what* in the plane?
SOLUTION:
Vectors
:::
For the following exercises, determine whether the statement is *true or false*.

:::exercise {fs-id1167793570059} type= 
PROBLEM:
Vector field $\textbf{F}=\langle 3{x}^{2},1\rangle$ is a gradient field for both ${ϕ}_{1}(x,y)={x}^{3}+y$ and ${ϕ}_{2}(x,y)=y+{x}^{3}+100.$
:::

:::exercise {fs-id1167793325793} type= 
PROBLEM:
Vector field $\textbf{F}=\frac{\langle y,x\rangle}{\sqrt{{x}^{2}+{y}^{2}}}$ is constant in direction and magnitude on a unit circle.
SOLUTION:
False
:::

:::exercise {fs-id1167794121973} type= 
PROBLEM:
Vector field $\textbf{F}=\frac{\langle y,x\rangle}{\sqrt{{x}^{2}+{y}^{2}}}$ is neither a radial field nor a rotation.
:::
For the following exercises, describe each vector field by drawing some of its vectors.

:::exercise {fs-id1167793977440} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=x\textbf{i}+y\textbf{j}$
SOLUTION:

> IMAGE {img:fs-id1167793300337} src=../../media/CNX_Calc_Figure_16_01_201.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further they are from the origin. They stretch away from the origin in a radial pattern.

:::

:::exercise {fs-id1167794170760} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=\text{−}y\textbf{i}+x\textbf{j}$
:::

:::exercise {fs-id1167793567017} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=x\textbf{i}-y\textbf{j}$
SOLUTION:

> IMAGE {img:fs-id1167793446089} src=../../media/CNX_Calc_Figure_16_01_203.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further they are from the origin and the further to the left and right they are from the y axis. The arrows asymptotically curve down and to the right in quadrant 1, down and to the left in quadrant 2, up and to the left in quadrant 3, and up and to the right in quadrant four.

:::

:::exercise {fs-id1167793446106} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=\textbf{i}+\textbf{j}$
:::

:::exercise {fs-id1167793279191} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=2x\textbf{i}+3y\textbf{j}$
SOLUTION:

> IMAGE {img:fs-id1167793340081} src=../../media/CNX_Calc_Figure_16_01_205.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away from the origin they are and, even more so, the further away from the y axis they are. They stretch out away from the origin in a radial manner.

:::

:::exercise {fs-id1167793591240} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=3\textbf{i}+x\textbf{j}$
:::

:::exercise {fs-id1167793335528} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y)=y\textbf{i}+\text{sin}\;x\textbf{j}$
SOLUTION:

> IMAGE {img:fs-id1167793287093} src=../../media/CNX_Calc_Figure_16_01_207.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away they are from the x axis. The arrows form two radial patterns, one on each side of the y axis. The patterns are clockwise.

:::

:::exercise {fs-id1167793287108} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}$
:::

:::exercise {fs-id1167794145816} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=2x\textbf{i}-2y\textbf{j}-2z\textbf{k}$
SOLUTION:

> IMAGE {img:fs-id1167793444964} src=../../media/CNX_Calc_Figure_16_01_209.jpg
> alt: A visual representation of a vector field in three dimensions. The arrows seem to get smaller as both the z component gest close to zero and the x component gets larger, and as both the y and z components get larger. The arrows seem to converge in both of those directions as well.

:::

:::exercise {fs-id1167793444980} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=\frac{y}{z}\;\textbf{i}-\frac{x}{z}\;\textbf{j}$
:::
For the following exercises, find the gradient vector field of each function $f.$

:::exercise {fs-id1167793401870} type= 
PROBLEM:
$f(x,y)=x\;\text{sin}\;y+\text{cos}\;y$
SOLUTION:
$\textbf{F}(x,y)=\text{sin}(y)\textbf{i}+(x\;\text{cos}\;y-\text{sin}\;y)\textbf{j}$
:::

:::exercise {fs-id1167793952118} type= 
PROBLEM:
$f(x,y,z)=z{e}^{\text{−}xy}$
:::

:::exercise {fs-id1167793447627} type= 
PROBLEM:
$f(x,y,z)={x}^{2}y+xy+{y}^{2}z$
SOLUTION:
$\textbf{F}(x,y,z)=(2xy+y)\textbf{i}+({x}^{2}+x+2yz)\textbf{j}+{y}^{2}\textbf{k}$
:::

:::exercise {fs-id1167794209661} type= 
PROBLEM:
$f(x,y)={x}^{2}\text{sin}(5y)$
:::

:::exercise {fs-id1167793925436} type= 
PROBLEM:
$f(x,y)=\text{ln}(1+{x}^{2}+2{y}^{2})$
SOLUTION:
$\textbf{F}(x,y)=(\frac{2x}{1+{x}^{2}+2{y}^{2}})\textbf{i}+(\frac{4y}{1+{x}^{2}+2{y}^{2}})\textbf{j}$
:::

:::exercise {fs-id1167793315617} type= 
PROBLEM:
$f(x,y,z)=x\;\text{cos}(\frac{y}{z})$
:::

:::exercise {fs-id1167793480301} type= 
PROBLEM:
What is vector field $\textbf{F}(x,y)$ with a value at $(x,y)$ that is of unit length and points toward $(1,0)?$
SOLUTION:
$\textbf{F}(x,y)=\frac{(1-x)\textbf{i}-y\textbf{j}}{\sqrt{{(1-x)}^{2}+{y}^{2}}}$
:::
For the following exercises, write formulas for the vector fields with the given properties.

:::exercise {fs-id1167794122829} type= 
PROBLEM:
All vectors are parallel to the *x*-axis and all vectors on a vertical line have the same magnitude.
:::

:::exercise {fs-id1167793501918} type= 
PROBLEM:
All vectors point toward the origin and have constant length.
SOLUTION:
$\textbf{F}(x,y)=\frac{-x\textbf{i}-y\textbf{j}}{\sqrt{{x}^{2}+{y}^{2}}}$
:::

:::exercise {fs-id1167793501834} type= 
PROBLEM:
All vectors are of unit length and are perpendicular to the position vector at that point.
:::

:::exercise {fs-id1167793451716} type= 
PROBLEM:
Give a formula $\textbf{F}(x,y)=M(x,y)\textbf{i}+N(x,y)\textbf{j}$ for the vector field in a plane that has the properties that $\textbf{F}=0$ at $(0,0)$ and that at any other point $(a,b),$ **F** is tangent to circle ${x}^{2}+{y}^{2}={a}^{2}+{b}^{2}$ and points in the clockwise direction with magnitude $||F||=\sqrt{{a}^{2}+{b}^{2}}.$
SOLUTION:
$\textbf{F}(x,y)=y\textbf{i}-x\textbf{j}$
:::

:::exercise {fs-id1167793777141} type= 
PROBLEM:
Is vector field $\text{F}(x,y)=<P(x,y),Q(x,y)>=(\text{sin}\;x+y)\text{i}+(\text{cos}\;y+x)\text{j}$ a gradient field?
:::

:::exercise {fs-id1167793607382} type= 
PROBLEM:
Find a formula for vector field $\textbf{F}(x,y)=M(x,y)\textbf{i}+N(x,y)\textbf{j}$ given the fact that for all points $(x,y),$ **F** points toward the origin and $||F||=\frac{10}{{x}^{2}+{y}^{2}}.$
SOLUTION:
$\textbf{F}(x,y)=\frac{−10}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}(x\textbf{i}+y\textbf{j})$
:::
For the following exercises, assume that an electric field in the *xy*-plane caused by an infinite line of charge along the *x*-axis is a gradient field with potential function $V(x,y)=c\;\text{ln}(\frac{{r}_{0}}{\sqrt{{x}^{2}+{y}^{2}}}),$ where $c>0$ is a constant and ${r}_{0}$ is a reference distance at which the potential is assumed to be zero.

:::exercise {fs-id1167793495519} type= 
PROBLEM:
Find the components of the electric field in the *x*- and *y*-directions, where $\textbf{E}(x,y)=\text{−}\text{∇}V(x,y).$
:::

:::exercise {fs-id1167793500831} type= 
PROBLEM:
Show that the electric field at a point in the *xy*-plane is directed outward from the origin and has magnitude $||E||=\frac{c}{r}$, where $r=\sqrt{{x}^{2}+{y}^{2}}$.
SOLUTION:
$||E||=\frac{c}{{x}^{2}+{y}^{2}}\sqrt{{x}^{2}+{y}^{2}}=\frac{c}{\sqrt{{x}^{2}+{y}^{2}}}=\frac{c}{r}$
:::
A {index:*flow line*} (or *streamline*) of a vector field $\textbf{F}$ is a curve $\textbf{r}(t)$ such that $d\textbf{r}\text{/}dt=\textbf{F}(\textbf{r}(t)).$ If $\textbf{F}$ represents the velocity field of a moving particle, then the flow lines are paths taken by the particle. Therefore, flow lines are tangent to the vector field. For the following exercises, show that the given curve $\textbf{c}(t)$ is a flow line of the given velocity vector field $\textbf{F}(x,y,z).$

:::exercise {fs-id1167793277912} type= 
PROBLEM:
$\text{c}(t)=<{e}^{2t},\text{ln}|t|,\frac{1}{t}>,t≠0;\text{F}(x,y,z)=\langle 2x,z,\text{−}{z}^{2}\rangle$
:::

:::exercise {fs-id1167793419108} type= 
PROBLEM:
$\text{c}(t)=<\text{sin}\;t,\text{cos}\;t,{e}^{t}>;\text{F}(x,y,z)=\langle y,\text{−}x,z\rangle$
SOLUTION:
$\textbf{c}\text{′}(t)=(\text{cos}\;t,\text{−}\text{sin}\;t,{e}^{\text{−}t})=\textbf{F}(\textbf{c}(t))$
:::
For the following exercises, let $\textbf{F}=x\textbf{i}+y\textbf{j},$ $\textbf{G}=\text{−}y\textbf{i}+x\textbf{j},$ and $\textbf{H}=x\textbf{i}-y\textbf{j}.$ Match **F**, **G**, and **H** with their graphs.

:::exercise {fs-id1167793631744} type= 
PROBLEM:

> IMAGE {img:fs-id1167793631748} src=../../media/CNX_Calc_Figure_16_01_212.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows circle the origin in a counterclockwise manner. The arrows are larger the further they are from the origin.

:::

:::exercise {fs-id1167793584520} type= 
PROBLEM:

> IMAGE {img:fs-id1167793584524} src=../../media/CNX_Calc_Figure_16_01_213.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away from the origin they are, particularly to the left and right of the y axis. They point to the left and to the right on the left and right sides of the y axis, respectively. They point down above the x axis and up below the x axis. The closer to the x axis, the flatter they are. The closer to the y axis they are, the more vertical they are.

SOLUTION:
**H**
:::

:::exercise {fs-id1167793584551} type= 
PROBLEM:

> IMAGE {img:fs-id1167794288058} src=../../media/CNX_Calc_Figure_16_01_214.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away from the origin they are. They stretch out and away from the origin in a radial pattern.

:::
For the following exercises, let $\textbf{F}=x\textbf{i}+y\textbf{j},$ $\textbf{G}=\text{−}y\textbf{i}+x\textbf{j},$ and $\textbf{H}=x\textbf{i}-y\textbf{j}.$ Match the vector fields in a through d with their graphs.
a. $\textbf{F}+\textbf{G}$
b. $\textbf{F}+\textbf{H}$
c. $\textbf{G}+\textbf{H}$
d. $\text{−}\textbf{F}+\textbf{G}$

:::exercise {fs-id1167793568655} type= 
PROBLEM:

> IMAGE {img:fs-id1167793568660} src=../../media/CNX_Calc_Figure_16_01_215.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away they are from the y axis. They curve in towards the orgin in a spiral pattern, with the arrows curving in from the right to the right of the y axis and curving in from the left to the left of the y axis. The arrows in quadrants 1 and 3 are flatter, and the arrows in quadrants 2 and 4 are more vertical.

SOLUTION:
d. $\text{−}\textbf{F}+\textbf{G}$
:::

:::exercise {fs-id1167793544993} type= 
PROBLEM:

> IMAGE {img:fs-id1167793544998} src=../../media/CNX_Calc_Figure_16_01_216.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away from the y axis they are. They are completely flat and point to the right on the right side of the y axis and point to the left on the left side of the y axis.

:::

:::exercise {fs-id1167794076400} type= 
PROBLEM:

> IMAGE {img:fs-id1167794076412} src=../../media/CNX_Calc_Figure_16_01_217.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away from y axis they are. The arrows are pointing out from the origin in a spiral shape. In quadrant 1, the arrows are more vertical and curve up. In quadrant 2, the arrows are more horizontal and curve down. In quadrant 3, the arrows are more vertical and curve down. In quadrant 4, the arrows are more horizontal and curve up. Each quadrant’s arrows merge into the two on either side of it.

SOLUTION:
a. $\textbf{F}+\textbf{G}$
:::

:::exercise {fs-id1167793559362} type= 
PROBLEM:

> IMAGE {img:fs-id1167793559366} src=../../media/CNX_Calc_Figure_16_01_218.jpg
> alt: A visual representation of a vector field in two dimensions. The arrows are larger the further away they are from the x axis and y axis in quadrants 2 and 4. The arrows are all at a roughly 90-degree angle. They point up on the right side of the y axis and down on the left side of the y axis.

:::

## Glossary
- {def} **conservative field**: a vector field for which there exists a scalar function $f$ such that $\text{∇}f=\textbf{F}$
- {def} **gradient field**: a vector field $\textbf{F}$ for which there exists a scalar function $f$ such that $\text{∇}f=\textbf{F};$ in other words, a vector field that is the gradient of a function; such vector fields are also called *conservative*
- {def} **potential function**: a scalar function $f$ such that $\text{∇}f=\textbf{F}$
- {def} **radial field**: a vector field in which all vectors either point directly toward or directly away from the origin; the magnitude of any vector depends only on its distance from the origin
- {def} **rotational field**: a vector field in which the vector at point $(x,y)$ is tangent to a circle with radius $r=\sqrt{{x}^{2}+{y}^{2}};$ in a rotational field, all vectors flow either clockwise or counterclockwise, and the magnitude of a vector depends only on its distance from the origin
- {def} **unit vector field**: a vector field in which the magnitude of every vector is 1
- {def} **vector field**: measured in ${\mathbb{R}}^{2},$ an assignment of a vector $\textbf{F}(x,y)$ to each point $(x,y)$ of a subset $D$ of ${\mathbb{R}}^{2};$ in ${\mathbb{R}}^{3},$ an assignment of a vector $\textbf{F}(x,y,z)$ to each point $(x,y,z)$ of a subset $D$ of ${\mathbb{R}}^{3}$

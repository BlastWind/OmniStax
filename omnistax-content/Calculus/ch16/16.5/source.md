# Divergence and Curl

## Learning Objectives {section:learning-objectives}
- Determine divergence from the formula for a given vector field.
- Determine curl from the formula for a given vector field.
- Use the properties of curl and divergence to determine whether a vector field is conservative.

In this section, we examine two important operations on a vector field: divergence and curl. They are important to the field of calculus for several reasons, including the use of curl and divergence to develop some higher-dimensional versions of the Fundamental Theorem of Calculus. In addition, curl and divergence appear in mathematical descriptions of fluid mechanics, electromagnetism, and elasticity theory, which are important concepts in physics and engineering. We can also apply curl and divergence to other concepts we already explored. For example, under certain conditions, a vector field is conservative if and only if its curl is zero.
In addition to defining curl and divergence, we look at some physical interpretations of them, and show their relationship to conservative and source-free vector fields.

## Divergence
Divergence is an operation on a vector field that tells us how the field behaves toward or away from a point. Locally, the divergence of a vector field **F** in ${\mathbb{R}}^{2}$ or ${\mathbb{R}}^{3}$ at a particular point *P* is a measure of the “outflowing-ness” of the vector field at *P*. If **F** represents the velocity of a fluid, then the divergence of **F** at *P* measures the net rate of change with respect to time of the amount of fluid flowing away from *P* (the tendency of the fluid to flow “out of” *P*). In particular, if the amount of fluid flowing into *P* is the same as the amount flowing out, then the divergence at *P* is zero.

:::note [definition] Definition
If $\textbf{F}=\langle P,Q,R\rangle$ is a vector field in ${\mathbb{R}}^{3}$ and ${P}_{x},{Q}_{y},$ and ${R}_{z}$ all exist, then the {term:divergence} of **F** is defined by

$$ \text{div}\;\textbf{F}={P}_{x}\text{+}{Q}_{y}+{R}_{z}=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}. $$  {eq:fs-id1167794139077}

:::
Note the divergence of a vector field is not a vector field, but a scalar function. In terms of the gradient operator $\nabla =\langle \frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\rangle ,$ divergence can be written symbolically as the dot product

$\text{div}\;\textbf{F}=\nabla \cdot \textbf{F}.$  {eq:fs-id1167793839413}

Note this is merely helpful notation, because the dot product of a vector of operators and a vector of functions is not meaningfully defined given our current definition of dot product.
If $\textbf{F}=\langle P,Q\rangle$ is a vector field in ${\mathbb{R}}^{2},$ and ${P}_{x}$ and ${Q}_{y}$ both exist, then the divergence of **F** is defined similarly as

$\text{div}\;\textbf{F}={P}_{x}+{Q}_{y}=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}=\nabla \cdot \textbf{F}.$  {eq:fs-id1167793953348}

To illustrate this point, consider the two vector fields in [ref:CNX_Calc_Figure_16_05_001]. At any particular point, the amount flowing in is the same as the amount flowing out, so at every point the “outflowing-ness” of the field is zero. Therefore, we expect the divergence of both fields to be zero, and this is indeed the case, as

$\text{div}(\langle 1,2\rangle )=\frac{\partial}{\partial x}(1)+\frac{\partial}{\partial y}(2)=0\;\text{and}\;\text{div}(\langle \text{−}y,x\rangle )=\frac{\partial}{\partial x}(\text{−}y)+\frac{\partial}{\partial y}(x)=0.$  {eq:fs-id1167794035474}

> FIGURE {fig:CNX_Calc_Figure_16_05_001} src=../../media/CNX_Calc_Figure_16_05_001.jpg
> alt: Two images of vector fields A and B in two dimensions. Vector field A has arrows pointing up and to the right. They do not change in size or direction. It has zero divergence. Vector field B has arrows surrounding the origin in a counterclockwise direction. The arrows are larger the closer they are to the origin. It also has zero divergence.
> caption: (a) Vector field $\langle 1,2\rangle$ has zero divergence. (b) Vector field $\langle \text{−}y,x\rangle$ also has zero divergence.

By contrast, consider radial vector field $\textbf{R}(x,y)=\langle \text{−}x,\text{−}y\rangle$ in [ref:CNX_Calc_Figure_16_05_002]. At any given point, more fluid is flowing in than is flowing out, and therefore the “outgoingness” of the field is negative. We expect the divergence of this field to be negative, and this is indeed the case, as $\text{div}(\textbf{R})=\frac{\partial}{\partial x}(\text{−}x)+\frac{\partial}{\partial y}(\text{−}y)=−2.$

> FIGURE {fig:CNX_Calc_Figure_16_05_002} src=../../media/CNX_Calc_Figure_16_05_002.jpg
> alt: A vector field in two dimensions with negative divergence. The arrows point in towards the origin in a radial pattern. The closer the arrows are to the origin, the larger they are.
> caption: This vector field has negative divergence.

To get a global sense of what divergence is telling us, suppose that a vector field in ${\mathbb{R}}^{2}$ represents the velocity of a fluid. Imagine taking an elastic circle (a circle with a shape that can be changed by the vector field) and dropping it into a fluid. If the circle maintains its exact area as it flows through the fluid, then the divergence is zero. This would occur for both vector fields in [ref:CNX_Calc_Figure_16_05_001]. On the other hand, if the circle’s shape is distorted so that its area shrinks or expands, then the divergence is not zero. Imagine dropping such an elastic circle into the radial vector field in [ref:CNX_Calc_Figure_16_05_002] so that the center of the circle lands at point (3, 3). The circle would flow toward the origin, and as it did so the front of the circle would travel more slowly than the back, causing the circle to “scrunch” and lose area. This is how you can see a negative divergence.

:::example {ex:fs-id1167794061260} Calculating Divergence at a Point

:::exercise {fs-id1167793367861} type= 
PROBLEM:
If $\textbf{F}(x,y,z)={e}^{x}\textbf{i}+yz\textbf{j}-y{z}^{2}\textbf{k},$ then find the divergence of **F** at $(0,2,−1).$
SOLUTION:
The divergence of **F** is

$\frac{\partial}{\partial x}({e}^{x})+\frac{\partial}{\partial y}(yz)-\frac{\partial}{\partial z}(y{z}^{2})={e}^{x}+z-2yz.$  {eq:fs-id1167794040031}

Therefore, the divergence at $(0,2,−1)$ is ${e}^{0}-1+4=4.$ If **F** represents the velocity of a fluid, then more fluid is flowing out than flowing in at point $(0,2,−1).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793425907} type= 
PROBLEM:
Find $\text{div}\;\textbf{F}$ for $\textbf{F}(x,y,z)=\langle xy,5-{z}^{2}y,{x}^{2}+{y}^{2}\rangle .$
SOLUTION:
$y-{z}^{2}$
COMMENTARY: Hint
Follow [ref:fs-id1167794061260].
:::
:::
One application for divergence occurs in physics, when working with magnetic fields. A magnetic field is a vector field that models the influence of electric currents and magnetic materials. Physicists use divergence in {index:Gauss’s law for magnetism}, which states that if **B** is a magnetic field, then $\nabla \cdot \textbf{B}=0;$ in other words, the divergence of a magnetic field is zero.

:::example {ex:fs-id1167793958418} Determining Whether a Field Is Magnetic

:::exercise {fs-id1167793607885} type= 
PROBLEM:
Is it possible for $\textbf{F}(x,y)=\langle {x}^{2}y,y-x{y}^{2}\rangle$ to be a magnetic field?
SOLUTION:
If **F** were magnetic, then its divergence would be zero. The divergence of **F** is

$\frac{\partial}{\partial x}({x}^{2}y)+\frac{\partial}{\partial y}(y-x{y}^{2})=2xy+1-2xy=1$  {eq:fs-id1167794117797}

and therefore **F** cannot model a magnetic field ([ref:CNX_Calc_Figure_16_05_003]).

> FIGURE {fig:CNX_Calc_Figure_16_05_003} src=../../media/CNX_Calc_Figure_16_05_003.jpg
> alt: A vector field in two dimensions with divergence equal to 1. The arrows are quite flat near the x axis and vertical near the y axis. They seem to asymptotically approach the axes in quadrants 2 and 4, pointing up and to the right in quadrant 2 and down and to the left in quadrant 4. In quadrant 1, they start by pointing up and to the right close to the y axis, but they soon shift to pointing down and to the right. In quadrant 3, they start by pointing down and to the left close to the y axis, bu they soon shift to pointing up and to the left. The closer the arrows are to the origin, the shorter they are.
> caption: The divergence of vector field $\textbf{F}(x,y)=\langle {x}^{2}y,y-x{y}^{2}\rangle$ is one, so it cannot model a magnetic field.

:::
:::
Another application for divergence is detecting whether a field is source free. Recall that a source-free field is a vector field that has a stream function; equivalently, a source-free field is a field with a flux that is zero along any closed curve. The next two theorems say that, under certain conditions, source-free vector fields are precisely the vector fields with zero divergence.

:::note [theorem] Divergence of a Source-Free Vector Field
If $\textbf{F}=\langle P,Q\rangle$ is a source-free continuous vector field with differentiable component functions, then $\text{div}\;\textbf{F}=0.$
:::

### Proof
Since **F** is source free, there is a function $g(x,y)$ with ${g}_{y}=P$ and $\text{−}{g}_{x}=Q.$ Therefore, $\textbf{F}=\langle {g}_{y},\text{−}{g}_{x}\rangle$ and $\text{div}\;\textbf{F}={g}_{yx}-{g}_{xy}=0$ by Clairaut’s theorem.
□
The converse of [ref:fs-id1167793397658] is true on simply connected regions, but the proof is too technical to include here. Thus, we have the following theorem, which can test whether a vector field in ${\mathbb{R}}^{2}$ is source free.

:::note [theorem] Divergence Test for Source-Free Vector Fields
Let $\textbf{F}=\langle P,Q\rangle$ be a continuous vector field with differentiable component functions with a domain that is simply connected. Then, $\text{div}\;\textbf{F}=0$ if and only if **F** is source free.
:::

:::example {ex:fs-id1167794173556} Determining Whether a Field Is Source Free

:::exercise {fs-id1167794207176} type= 
PROBLEM:
Is field $\textbf{F}(x,y)=\langle {x}^{2}y,5-x{y}^{2}\rangle$ source free?
SOLUTION:
Note the domain of **F** is ${\mathbb{R}}^{2},$ which is simply connected. Furthermore, **F** is continuous with differentiable component functions. Therefore, we can use [ref:fs-id1167794127411] to analyze **F**. The divergence of **F** is

$\frac{\partial}{\partial x}({x}^{2}y)+\frac{\partial}{\partial y}(5-x{y}^{2})=2xy-2xy=0.$  {eq:fs-id1167793881996}

Therefore, **F** is source free by [ref:fs-id1167794127411].
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793433681} type= 
PROBLEM:
Let $\textbf{F}(x,y)=\langle \text{−}ay,bx\rangle$ be a rotational field where *a* and *b* are positive constants. Is **F** source free?
SOLUTION:
Yes
COMMENTARY: Hint
Calculate the divergence.
:::
:::
Recall that the flux form of Green’s theorem says that

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds={\displaystyle \iint_{D}{P}_{x}+{Q}_{y}dA}},$  {eq:fs-id1167793771055}

where *C* is a simple closed curve and *D* is the region enclosed by *C*. Since ${P}_{x}+{Q}_{y}=\text{div}\;\textbf{F},$ Green’s theorem is sometimes written as

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds={\displaystyle \iint_{D}\text{div}\;\textbf{F}dA.}}$  {eq:fs-id1167794049088}

Therefore, Green’s theorem can be written in terms of divergence. If we think of divergence as a derivative of sorts, then Green’s theorem says the “derivative” of **F** on a region can be translated into a line integral of **F** along the boundary of the region. This is analogous to the Fundamental Theorem of Calculus, in which the derivative of a function $f$ on a line segment $[a,b]$ can be translated into a statement about $f$ on the boundary of $[a,b].$ Using divergence, we can see that Green’s theorem is a higher-dimensional analog of the Fundamental Theorem of Calculus.
We can use all of what we have learned in the application of divergence. Let **v** be a vector field modeling the velocity of a fluid. Since the divergence of **v** at point *P* measures the “outflowing-ness” of the fluid at *P*, $\text{div}\;\textbf{v}(P)>0$ implies that more fluid is flowing out of *P* than flowing in. Similarly, $\text{div}\;\textbf{v}(P)<0$ implies the more fluid is flowing in to *P* than is flowing out, and $\text{div}\;\textbf{v}(P)=0$ implies the same amount of fluid is flowing in as flowing out.

:::example {ex:fs-id1167793508391} Determining Flow of a Fluid

:::exercise {fs-id1167793508393} type= 
PROBLEM:
Suppose $\textbf{v}(x,y)=\langle \text{−}xy,y\rangle ,y>0$ models the flow of a fluid. Is more fluid flowing into point $(1,4)$ than flowing out?
SOLUTION:
To determine whether more fluid is flowing into $(1,4)$ than is flowing out, we calculate the divergence of **v** at $(1,4)\text{:}$

$\text{div}(\textbf{v})=\frac{\partial}{\partial x}(\text{−}xy)+\frac{\partial}{\partial y}(y)=\text{−}y+1.$  {eq:fs-id1167794044310}

To find the divergence at $(1,4),$ substitute the point into the divergence: $−4+1=−3.$ Since the divergence of **v** at $(1,4)$ is negative, more fluid is flowing in than flowing out ([ref:CNX_Calc_Figure_16_05_004]).

> FIGURE {fig:CNX_Calc_Figure_16_05_004} src=../../media/CNX_Calc_Figure_16_05_004.jpg
> alt: A vector field in two dimensions with negative divergence at (1,4). The arrows are very flat but become more vertical closer to the y axis. Above the x axis, the arrows point up and towards the y axis on either side of it. Below the x axis, the arrows point down and away from the y axis on either side of it.
> caption: Vector field $\textbf{v}(x,y)=\langle \text{−}xy,y\rangle$ has negative divergence at $(1,4).$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793915603} type= 
PROBLEM:
For vector field $\textbf{v}(x,y)=\langle \text{−}xy,y\rangle ,y>0,$ find all points *P* such that the amount of fluid flowing in to *P* equals the amount of fluid flowing out of *P*.
SOLUTION:
All points on line $y=1.$
COMMENTARY: Hint
Find where the divergence is zero.
:::
:::

## Curl
The second operation on a vector field that we examine is the curl, which measures the extent of rotation of the field about a point. Suppose that **F** represents the velocity field of a fluid. Then, the curl of **F** at point *P* is a vector that measures the tendency of particles near *P* to rotate about the axis that points in the direction of this vector. The magnitude of the curl vector at *P* measures how quickly the particles rotate around this axis. In other words, the curl at a point is a measure of the vector field’s “spin” at that point. Visually, imagine placing a paddlewheel into a fluid at *P*, with the axis of the paddlewheel aligned with the curl vector ([ref:CNX_Calc_Figure_16_05_005]). The curl measures the tendency of the paddlewheel to rotate.

> FIGURE {fig:CNX_Calc_Figure_16_05_005} src=../../media/CNX_Calc_Figure_16_05_005.jpg
> alt: A diagram of a small paddlewheel in water. Arrows are drawn surrounding the center in a counterclockwise circle. At the center, the height is labeled n.
> caption: To visualize curl at a point, imagine placing a small paddlewheel into the vector field at a point.

Consider the vector fields in [ref:CNX_Calc_Figure_16_05_001]. In part (a), the vector field is constant and there is no spin at any point. Therefore, we expect the curl of the field to be zero, and this is indeed the case. Part (b) shows a rotational field, so the field has spin. In particular, if you place a paddlewheel into a field at any point so that the axis of the wheel is perpendicular to a plane, the wheel rotates counterclockwise. Therefore, we expect the curl of the field to be nonzero, and this is indeed the case (the curl is $2\textbf{k}).$
To see what curl is measuring globally, imagine dropping a leaf into the fluid. As the leaf moves along with the fluid flow, the curl measures the tendency of the leaf to rotate. If the curl is zero, then the leaf doesn’t rotate as it moves through the fluid.

:::note [definition] Definition
If $\textbf{F}=\langle P,Q,R\rangle$ is a vector field in ${\mathbb{R}}^{3},$ and ${P}_{x},{P}_{y},{P}_{z},{Q}_{y},{Q}_{x},{Q}_{z},{R}_{z},{R}_{x},and{R}_{y}$ all exist, then the {term:curl} of **F** is defined by

$$ \begin{array}{rl}\text{curl}\;\textbf{F} & =({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k} \\ & =(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z})\textbf{i}+(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x})\textbf{j}+(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})\textbf{k}.\end{array} $$  {eq:fs-id1167793965993}

Note that the curl of a vector field is a vector field, in contrast to divergence.
:::
The definition of curl can be difficult to remember. To help with remembering, we use the notation $\nabla \;\times \;\textbf{F}$ to stand for a “determinant” that gives the curl formula:

$|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R\end{array}|.$  {eq:fs-id1167794025214}

The determinant of this matrix is

$({R}_{y}-{Q}_{z})\textbf{i}-({R}_{x}-{P}_{z})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k}=({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k}=\text{curl}\;\textbf{F}.$  {eq:fs-id1167793384739}

Thus, this matrix is a way to help remember the formula for curl. Keep in mind, though, that the word *determinant* is used very loosely. A determinant is not really defined on a matrix with entries that are three vectors, three operators, and three functions.
If $\textbf{F}=\langle P,Q\rangle$ is a vector field in ${\mathbb{R}}^{2},$ then the curl of **F**, by definition, is

$\text{curl}\;\textbf{F}=({Q}_{x}-{P}_{y})\textbf{k}=(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})\textbf{k}.$  {eq:fs-id1167793581943}

:::example {ex:fs-id1167794026966} Finding the Curl of a Three-Dimensional Vector Field

:::exercise {fs-id1167794026968} type= 
PROBLEM:
Find the curl of $\textbf{F}(P,Q,R)=\langle {x}^{2}z,{e}^{y}+xz,xyz\rangle .$
SOLUTION:
The curl is

$\begin{array}{rl}\text{curl}\;\textbf{F} & =\nabla \;\times \;\textbf{F} \\ & =|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \partial \text{/}\partial x & \partial \text{/}\partial y & \partial \text{/}\partial z \\ P & Q & R\end{array}| \\ & =({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k} \\ & =(xz-x)\textbf{i}+({x}^{2}-yz)\textbf{j}+z\textbf{k}.\end{array}$  {eq:fs-id1167793959781}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794058816} type= 
PROBLEM:
Find the curl of $\textbf{F}=\langle \text{sin}\;x\;\text{cos}\;z,\text{sin}\;y\;\text{sin}\;z,\text{cos}\;x\;\text{cos}\;y\rangle$ at point $(0,\frac{\pi}{2},\frac{\pi}{2}).$
SOLUTION:
$\text{−}\textbf{i}$
COMMENTARY: Hint
Find the determinant of matrix $\nabla \;\times \;\textbf{F}.$
:::
:::

:::example {ex:fs-id1167794046590} Finding the Curl of a Two-Dimensional Vector Field

:::exercise {fs-id1167793720026} type= 
PROBLEM:
Find the curl of $\textbf{F}=\langle P,Q\rangle =\langle y,0\rangle .$
SOLUTION:
Notice that this vector field consists of vectors that are all parallel. In fact, each vector in the field is parallel to the *x*-axis. This fact might lead us to the conclusion that the field has no spin and that the curl is zero. To test this theory, note that

$\text{curl}\;\textbf{F}=({Q}_{x}-{P}_{y})\textbf{k}=\text{−}\textbf{k}≠0.$  {eq:fs-id1167793486207}

Therefore, this vector field does have spin. To see why, imagine placing a paddlewheel at any point in the first quadrant ([ref:CNX_Calc_Figure_16_05_006]). The larger magnitudes of the vectors at the top of the wheel cause the wheel to rotate. The wheel rotates in the clockwise (negative) direction, causing the coefficient of the curl to be negative.

> FIGURE {fig:CNX_Calc_Figure_16_05_006} src=../../media/CNX_Calc_Figure_16_05_006.jpg
> alt: Two vector field diagrams consisting of vectors that are all parallel. The closer they are to the x axis, the shorter the arrows are. Above the x axis, the arrows point to the right, and below the x axis, the arrows point to the left.
> caption: Vector field $\textbf{F}(x,y)=\langle y,0\rangle$ consists of vectors that are all parallel.

:::
:::
Note that if $\textbf{F}=\langle P,Q\rangle$ is a vector field in a plane, then $\text{curl}\;\textbf{F}\cdot \textbf{k}=({Q}_{x}-{P}_{y})\textbf{k}\cdot \textbf{k}={Q}_{x}-{P}_{y}.$ Therefore, the circulation form of Green’s theorem is sometimes written as

${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}=}{\displaystyle \iint_{D}\text{curl}\;\textbf{F}\cdot \textbf{k}dA},$  {eq:fs-id1167794206821}

where *C* is a simple closed curve and *D* is the region enclosed by *C*. Therefore, the circulation form of Green’s theorem can be written in terms of the curl. If we think of curl as a derivative of sorts, then Green’s theorem says that the “derivative” of **F** on a region can be translated into a line integral of **F** along the boundary of the region. This is analogous to the Fundamental Theorem of Calculus, in which the derivative of a function $f$ on line segment $[a,b]$ can be translated into a statement about $f$ on the boundary of $[a,b].$ Using curl, we can see the circulation form of Green’s theorem is a higher-dimensional analog of the Fundamental Theorem of Calculus.
We can now use what we have learned about curl to show that gravitational fields have no “spin.” Suppose there is an object at the origin with mass ${m}_{1}$ at the origin and an object with mass ${m}_{2}.$ Recall that the gravitational force that object 1 exerts on object 2 is given by field

$\textbf{F}(x,y,z)=\text{−}G{m}_{1}{m}_{2}\langle \frac{x}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},\frac{y}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},\frac{z}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}}\rangle .$  {eq:fs-id1167794200086}

:::example {ex:fs-id1167793505725} Determining the Spin of a Gravitational Field

:::exercise {fs-id1167793505727} type= 
PROBLEM:
Show that a gravitational field has no spin.
SOLUTION:
To show that **F** has no spin, we calculate its curl. Let $P(x,y,z)=\frac{x}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},$ $Q(x,y,z)=\frac{y}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},$ and $R(x,y,z)=\frac{z}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}}.$ Then,

$\begin{array}{rl}\text{curl}\;\textbf{F} & =\text{−}G{m}_{1}{m}_{2}[({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k}] \\ & =\text{−}G{m}_{1}{m}_{2}[\begin{array}{l}(\frac{−3yz}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}-(\frac{−3yz}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}))\textbf{i} \\ +(\frac{−3xz}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}-(\frac{−3xz}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}))\textbf{j} \\ +(\frac{−3xy}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}-(\frac{−3xy}{{({x}^{2}+{y}^{2}+{z}^{2})}^{5\text{/}2}}))\textbf{k}\end{array}] \\ & =0.\end{array}$  {eq:fs-id1167793354822}

Since the curl of the gravitational field is zero, the field has no spin.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793371812} type= 
PROBLEM:
Field $\textbf{v}(x,y)=\langle -\frac{y}{{x}^{2}+{y}^{2}},\frac{x}{{x}^{2}+{y}^{2}}\rangle$ models the flow of a fluid. Show that if you drop a leaf into this fluid, as the leaf moves over time, the leaf does not rotate.
SOLUTION:
$\text{curl}\;\textbf{v}=\mathbf{0}$
COMMENTARY: Hint
Calculate the curl.
:::
:::

## Using Divergence and Curl
Now that we understand the basic concepts of divergence and curl, we can discuss their properties and establish relationships between them and conservative vector fields.
If **F** is a vector field in ${\mathbb{R}}^{3},$ then the curl of **F** is also a vector field in ${\mathbb{R}}^{3}.$ Therefore, we can take the divergence of a curl. The next theorem says that the result is always zero. This result is useful because it gives us a way to show that some vector fields are not the curl of any other field. To give this result a physical interpretation, recall that divergence of a velocity field **v** at point *P* measures the tendency of the corresponding fluid to flow out of *P*. Since $\text{div}\;\text{curl}\;(\textbf{v})=0,$ the net rate of flow in vector field curl(**v**) at any point is zero. Taking the curl of vector field **F** eliminates whatever divergence was present in **F**.

:::note [theorem] Divergence of the Curl
Let $\textbf{F}=\langle P,Q,R\rangle$ be a vector field in ${\mathbb{R}}^{3}$ such that the component functions all have continuous second-order partial derivatives. Then, $\text{div}\;\text{curl}\;(\textbf{F})=\nabla \cdot (\nabla \;\times \;\textbf{F})=0.$
:::

### Proof
By the definitions of divergence and curl, and by Clairaut’s theorem,

$\begin{array}{rl}\text{div curl}\;\textbf{F} & =\text{div}[({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k}] \\ & ={R}_{yx}-{Q}_{xz}+{P}_{yz}-{R}_{yx}+{Q}_{zx}-{P}_{zy} \\ & =0.\end{array}$  {eq:fs-id1167793930471}

□

:::example {ex:fs-id1167793568775} Showing That a Vector Field Is Not the Curl of Another

:::exercise {fs-id1167793355024} type= 
PROBLEM:
Show that $\textbf{F}(x,y,z)={e}^{x}\textbf{i}+yz\textbf{j}+x{z}^{2}\textbf{k}$ is not the curl of another vector field. That is, show that there is no other vector **G** with $\text{curl}\;\textbf{G}=\textbf{F}.$
SOLUTION:
Notice that the domain of **F** is all of ${\mathbb{R}}^{3}$ and the second-order partials of **F** are all continuous. Therefore, we can apply the previous theorem to **F**.
The divergence of **F** is ${e}^{x}+z+2xz.$ If **F** were the curl of vector field **G**, then $\text{div}\;\textbf{F}=\text{div curl}\;\textbf{G}=0.$ But, the divergence of **F** is not zero, and therefore **F** is not the curl of any other vector field.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794314573} type= 
PROBLEM:
Is it possible for $\textbf{G}(x,y,z)=\langle \text{sin}\;x,\text{cos}\;y,\text{sin}(xyz)\rangle$ to be the curl of a vector field?
SOLUTION:
No
COMMENTARY: Hint
Find the divergence of **G**.
:::
:::
With the next two theorems, we show that if **F** is a conservative vector field then its curl is zero, and if the domain of **F** is simply connected then the converse is also true. This gives us another way to test whether a vector field is conservative.

:::note [theorem] Curl of a Conservative Vector Field
If $\textbf{F}=\langle P,Q,R\rangle$ is conservative, then $\text{curl}\;\text{F}=0.$
:::

### Proof
Since conservative vector fields satisfy the cross-partials property, all the cross-partials of **F** are equal. Therefore,

$\begin{array}{rl}\text{curl}\;\textbf{F} & =({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k} \\ & =0.\end{array}$  {eq:fs-id1167793524959}

□
The same theorem is true for vector fields in a plane.
Since a conservative vector field is the gradient of a scalar function, the previous theorem says that $\text{curl}\;(\text{∇}f)=0$ for any scalar function $f.$ In terms of our curl notation, $\nabla \;\times \;\nabla (f)=0.$ This equation makes sense because the cross product of a vector with itself is always the zero vector. Sometimes equation $\nabla \;\times \;\nabla (f)=0$ is simplified as $\nabla \;\times \;\nabla =0.$

:::note [theorem] Curl Test for a Conservative Field
Let $\textbf{F}=\langle P,Q,R\rangle$ be a vector field in space on a simply connected domain. If $\text{curl}\;\textbf{F}=0,$ then **F** is conservative.
:::

### Proof
Since $\text{curl}\;\textbf{F}=0,$ we have that ${R}_{y}={Q}_{z},{P}_{z}={R}_{x},$ and ${Q}_{x}={P}_{y}.$ Therefore, **F** satisfies the cross-partials property on a simply connected domain, and [ref:fs-id1167793945282](module:m53987) implies that **F** is conservative.
□
The same theorem is also true in a plane. Therefore, if **F** is a vector field in a plane or in space and the domain is simply connected, then **F** is conservative if and only if $\text{curl}\;\textbf{F}=0.$

:::example {ex:fs-id1167793502584} Testing Whether a Vector Field Is Conservative

:::exercise {fs-id1167793502586} type= 
PROBLEM:
Use the curl to determine whether $\textbf{F}(x,y,z)=\langle yz,xz,xy\rangle$ is conservative.
SOLUTION:
Note that the domain of **F** is all of ${\mathbb{R}}^{3},$ which is simply connected ([ref:CNX_Calc_Figure_16_05_007]). Therefore, we can test whether **F** is conservative by calculating its curl.

> FIGURE {fig:CNX_Calc_Figure_16_05_007} src=../../media/CNX_Calc_Figure_16_05_007.jpg
> alt: A diagram showing the curl of a vector field in two dimensions. The curl is zero. The arrows seem to be pointing up and over into the yz plane.
> caption: The curl of vector field $\textbf{F}(x,y,z)=\langle yz,xz,xy\rangle$ is zero.

The curl of **F** is

$(\frac{\partial}{\partial y}xy-\frac{\partial}{\partial z}xz)\textbf{i}+(\frac{\partial}{\partial y}yz-\frac{\partial}{\partial z}xy)\textbf{j}+(\frac{\partial}{\partial y}xz-\frac{\partial}{\partial z}yz)\textbf{k}=(x-x)\textbf{i}+(y-y)\textbf{j}+(z-z)\textbf{k}=0.$  {eq:fs-id1167794023734}

Thus, **F** is conservative.
:::
:::
We have seen that the curl of a gradient is zero. What is the divergence of a gradient? If $f$ is a function of two variables, then $\text{div}(\text{∇}f)=\nabla \cdot (\text{∇}f)={f}_{xx}+{f}_{yy}.$ We abbreviate this “double dot product” as ${\nabla}^{2}.$ This operator is called the {index:*Laplace operator*}*,* and in this notation Laplace’s equation becomes ${\nabla}^{2}f=0.$ Therefore, a harmonic function is a function that becomes zero after taking the divergence of a gradient.
Similarly, if $f$ is a function of three variables then

$\text{div}(\text{∇}f)=\nabla \cdot (\text{∇}f)={f}_{xx}+{f}_{yy}+{f}_{zz}.$  {eq:fs-id1167794018039}

Using this notation we get Laplace’s equation for harmonic functions of three variables:

${\nabla}^{2}f=0.$  {eq:fs-id1167793619905}

Harmonic functions arise in many applications. For example, the potential function of an electrostatic field in a region of space that has no static charge is harmonic.

:::example {ex:fs-id1167793829629} Analyzing a Function

:::exercise {fs-id1167793829631} type= 
PROBLEM:
Is it possible for $f(x,y)={x}^{2}+x-y$ to be the potential function of an electrostatic field that is located in a region of ${\mathbb{R}}^{2}$ free of static charge?
SOLUTION:
If $f$ were such a potential function, then $f$ would be harmonic. Note that ${f}_{xx}=2$ and ${f}_{yy}=0,$ and so ${f}_{xx}+{f}_{yy}≠0.$ Therefore, $f$ is not harmonic and $f$ cannot represent an electrostatic potential.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793941520} type= 
PROBLEM:
Is it possible for function $f(x,y)={x}^{2}-{y}^{2}+x$ to be the potential function of an electrostatic field located in a region of ${\mathbb{R}}^{2}$ free of static charge?
SOLUTION:
Yes
COMMENTARY: Hint
Determine whether the function is harmonic.
:::
:::

## Key Concepts {section:key-concepts}
- The divergence of a vector field is a scalar function. Divergence measures the “outflowing-ness” of a vector field. If **v** is the velocity field of a fluid, then the divergence of **v** at a point is the outflow of the fluid less the inflow at the point.
- The curl of a vector field is a vector field. The curl of a vector field at point *P* measures the tendency of particles at *P* to rotate about the axis that points in the direction of the curl at *P*.
- A vector field with a simply connected domain is conservative if and only if its curl is zero.

## Key Equations {section:key-equations}

> TABLE {tab:eip-560} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Curl** | $\nabla \;\times \;\textbf{F}=({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k}$ |
| **Divergence** | $\nabla \cdot \textbf{F}={P}_{x}+{Q}_{y}+{R}_{z}$ |
| **Divergence of curl is zero** | $\nabla \cdot (\nabla \;\times \;\textbf{F})=0$ |
| **Curl of a gradient is the zero vector** | $\nabla \;\times \;(\text{∇}f)=0$ |

##  {section:section-exercises}
For the following exercises, determine whether the statement is *true or false*.

:::exercise {fs-id1167794023969} type= 
PROBLEM:
If the coordinate functions of $\textbf{F}:{\mathbb{R}}^{3}\to {\mathbb{R}}^{3}$ have continuous second partial derivatives, then $\text{curl}\;(\text{div}(\textbf{F}))$ equals zero.
:::

:::exercise {fs-id1167793960943} type= 
PROBLEM:
$\nabla \cdot (x\textbf{i}+y\textbf{j}+z\textbf{k})=1.$
SOLUTION:
False
:::

:::exercise {fs-id1167793524568} type= 
PROBLEM:
All vector fields of the form $\textbf{F}(x,y,z)=f(x)\textbf{i}+g(y)\textbf{j}+h(z)\textbf{k}$ are conservative.
:::

:::exercise {fs-id1167794169123} type= 
PROBLEM:
If $\text{curl}\;\textbf{F}=0,$ then **F** is conservative.
SOLUTION:
True
:::

:::exercise {fs-id1167793892959} type= 
PROBLEM:
If **F** is a constant vector field then $\text{div}\;\textbf{F}=0.$
:::

:::exercise {fs-id1167794186719} type= 
PROBLEM:
If **F** is a constant vector field then $\text{curl}\;\textbf{F}=0.$
SOLUTION:
True
:::
For the following exercises, find the curl of **F**.

:::exercise {fs-id1167793287219} type= 
PROBLEM:
$\textbf{F}(x,y,z)=x{y}^{2}{z}^{4}\textbf{i}+(2{x}^{2}y+z)\textbf{j}+{y}^{3}{z}^{2}\textbf{k}$
:::

:::exercise {fs-id1167793591316} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}z\textbf{i}+{y}^{2}x\textbf{j}+(y+2z)\textbf{k}$
SOLUTION:
$\text{curl}\;\textbf{F}=\textbf{i}+{x}^{2}\textbf{j}+{y}^{2}\textbf{k}$
:::

:::exercise {fs-id1167794054991} type= 
PROBLEM:
$\textbf{F}(x,y,z)=3xy{z}^{2}\textbf{i}+{y}^{2}\text{sin}\;z\textbf{j}+x{e}^{2z}\textbf{k}$
:::

:::exercise {fs-id1167791724501} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}yz\textbf{i}+x{y}^{2}z\textbf{j}+xy{z}^{2}\textbf{k}$
SOLUTION:
$\text{curl}\;\textbf{F}=(x{z}^{2}-x{y}^{2})\textbf{i}+({x}^{2}y-y{z}^{2})\textbf{j}+({y}^{2}z-{x}^{2}z)\textbf{k}$
:::

:::exercise {fs-id1167793936529} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(x\;\text{cos}\;y)\textbf{i}+x{y}^{2}\textbf{j}$
:::

:::exercise {fs-id1167793951798} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(x-y)\textbf{i}+(y-z)\textbf{j}+(z-x)\textbf{k}$
SOLUTION:
$\text{curl}\;\textbf{F}=\textbf{i}+\textbf{j}+\textbf{k}$
:::

:::exercise {fs-id1167793234031} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+{x}^{2}{y}^{2}{z}^{2}\textbf{j}+{y}^{2}{z}^{3}\textbf{k}$
:::

:::exercise {fs-id1167793482845} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xy\textbf{i}+yz\textbf{j}+xz\textbf{k}$
SOLUTION:
$\text{curl}\;\textbf{F}=\text{−}y\textbf{i}-z\textbf{j}-x\textbf{k}$
:::

:::exercise {fs-id1167793632688} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}\textbf{i}+{y}^{2}\textbf{j}+{z}^{2}\textbf{k}$
:::

:::exercise {fs-id1167793618709} type= 
PROBLEM:
$\textbf{F}(x,y,z)=ax\textbf{i}+by\textbf{j}+c\textbf{k}$ for constants *a*, *b*, *c*
SOLUTION:
$\text{curl}\;\textbf{F}=0$
:::
For the following exercises, find the divergence of **F**.

:::exercise {fs-id1167793517435} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}z\textbf{i}+{y}^{2}x\textbf{j}+(y+2z)\textbf{k}$
:::

:::exercise {fs-id1167793927452} type= 
PROBLEM:
$\textbf{F}(x,y,z)=3xy{z}^{2}\textbf{i}+{y}^{2}\text{sin}\;z\textbf{j}+x{e}^{2z}\textbf{k}$
SOLUTION:
$\text{div}\;\textbf{F}=3y{z}^{2}+2y\;\text{sin}\;z+2x{e}^{2z}$
:::

:::exercise {fs-id1167793945267} type= 
PROBLEM:
$\textbf{F}(x,y)=(\text{sin}\;x)\textbf{i}+(\text{cos}\;y)\textbf{j}$
:::

:::exercise {fs-id1167793245127} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}\textbf{i}+{y}^{2}\textbf{j}+{z}^{2}\textbf{k}$
SOLUTION:
$\text{div}\;\textbf{F}=2(x+y+z)$
:::

:::exercise {fs-id1167793502678} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(x-y)\textbf{i}+(y-z)\textbf{j}+(z-x)\textbf{k}$
:::

:::exercise {fs-id1167793641859} type= 
PROBLEM:
$\textbf{F}(x,y)=\frac{x}{\sqrt{{x}^{2}+{y}^{2}}}\textbf{i}+\frac{y}{\sqrt{{x}^{2}+{y}^{2}}}\textbf{j}$
SOLUTION:
$\text{div}\;\textbf{F}=\frac{1}{\sqrt{{x}^{2}+{y}^{2}}}$
:::

:::exercise {fs-id1167793398104} type= 
PROBLEM:
$\textbf{F}(x,y)=x\textbf{i}-y\textbf{j}$
:::

:::exercise {fs-id1167793554496} type= 
PROBLEM:
$\textbf{F}(x,y,z)=ax\textbf{i}+by\textbf{j}+c\textbf{k}$ for constants *a*, *b*, *c*
SOLUTION:
$\text{div}\;\textbf{F}=a+b$
:::

:::exercise {fs-id1167793939854} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+{x}^{2}{y}^{2}{z}^{2}\textbf{j}+{y}^{2}{z}^{3}\textbf{k}$
:::

:::exercise {fs-id1167793498676} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xy\textbf{i}+yz\textbf{j}+xz\textbf{k}$
SOLUTION:
$\text{div}\;\textbf{F}=x+y+z$
:::
For the following exercises, determine whether each of the given scalar functions is harmonic.

:::exercise {fs-id1167793609910} type= 
PROBLEM:
$u(x,y,z)={e}^{\text{−}x}(\text{cos}\;y-\text{sin}\;y)$
:::

:::exercise {fs-id1167794005201} type= 
PROBLEM:
$w(x,y,z)={({x}^{2}+{y}^{2}+{z}^{2})}^{\text{−}1\text{/}2}$
SOLUTION:
Harmonic
:::

:::exercise {fs-id1167793512109} type= 
PROBLEM:
If $\textbf{F}(x,y,z)=2\textbf{i}+2x\textbf{j}+3y\textbf{k}$ and $\textbf{G}(x,y,z)=x\textbf{i}-y\textbf{j}+z\textbf{k},$ find $\text{curl}\;(\textbf{F}\;\times \;\textbf{G}).$
:::

:::exercise {fs-id1167793699419} type= 
PROBLEM:
If $\textbf{F}(x,y,z)=2\textbf{i}+2x\textbf{j}+3y\textbf{k}$ and $\textbf{G}(x,y,z)=x\textbf{i}-y\textbf{j}+z\textbf{k},$ find $\text{div}\;(\textbf{F}\;\times \;\textbf{G}).$
SOLUTION:
$\text{div}\;(\textbf{F}\;\times \;\textbf{G})=2z+3x$
:::

:::exercise {fs-id1167793244815} type= 
PROBLEM:
Find $\text{div}\;\textbf{F},$ given that $\textbf{F}=\text{∇}f,$ where $f(x,y,z)=x{y}^{3}{z}^{2}.$
:::

:::exercise {fs-id1167794006368} type= 
PROBLEM:
Find the divergence of **F** for vector field $\textbf{F}(x,y,z)=({y}^{2}+{z}^{2})(x+y)\textbf{i}+({z}^{2}+{x}^{2})(y+z)\textbf{j}+({x}^{2}+{y}^{2})(z+x)\textbf{k}.$
SOLUTION:
$\text{div}\;\textbf{F}=2({x}^{2}+{y}^{2}+{z}^{2})$
:::

:::exercise {fs-id1167793312578} type= 
PROBLEM:
Find the divergence of **F** for vector field $\textbf{F}(x,y,z)={f}_{1}(y,z)\textbf{i}+{f}_{2}(x,z)\textbf{j}+{f}_{3}(x,y)\textbf{k}.$
:::
For the following exercises, use $r=||\textbf{r}||$ and $\text{r}=<x,y,z>.$

:::exercise {fs-id1167793691577} type= 
PROBLEM:
Find $\text{curl}\;\textbf{r}.$
SOLUTION:
$\text{curl}\;\textbf{r}=0$
:::

:::exercise {fs-id1167793377770} type= 
PROBLEM:
Find $\text{curl}\;\frac{\textbf{r}}{r}.$
:::

:::exercise {fs-id1167793754021} type= 
PROBLEM:
Find $\text{curl}\;\frac{\textbf{r}}{{r}^{3}}.$
SOLUTION:
$\text{curl}\;\frac{\textbf{r}}{{r}^{3}}=0$
:::

:::exercise {fs-id1167793473647} type= 
PROBLEM:
Let $\textbf{F}(x,y)=\frac{\text{−}y\textbf{i}+x\textbf{j}}{{x}^{2}+{y}^{2}},$ where **F** is defined on $\{(x,y)\in {\mathbb{R}}^{2}|(x,y)≠(0,0)\}.$ Find $\text{curl}\;\textbf{F}.$
:::
For the following exercises, use a computer algebra system to find the curl of the given vector fields.

:::exercise {fs-id1167793929637} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=\text{arctan}(\frac{x}{y})\textbf{i}+\text{ln}\sqrt{{x}^{2}+{y}^{2}}\textbf{j}+\textbf{k}$
SOLUTION:
$\text{curl}\;\textbf{F}=\frac{2x}{{x}^{2}+{y}^{2}}\textbf{k}$
:::

:::exercise {fs-id1167793248077} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=\text{sin}(x-y)\textbf{i}+\text{sin}(y-z)\textbf{j}+\text{sin}(z-x)\textbf{k}$
:::
For the following exercises, find the divergence of **F** at the given point.

:::exercise {fs-id1167793597218} type= 
PROBLEM:
$\textbf{F}(x,y,z)=\textbf{i}+\textbf{j}+\textbf{k}$ at $(2,−1,3)$
SOLUTION:
$\text{div}\;\textbf{F}=0$
:::

:::exercise {fs-id1167793567001} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+y\textbf{j}+x\textbf{k}$ at $(1,2,3)$
:::

:::exercise {fs-id1167793584431} type= 
PROBLEM:
$\textbf{F}(x,y,z)={e}^{\text{−}xy}\textbf{i}+{e}^{xz}\textbf{j}+{e}^{yz}\textbf{k}$ at $(3,2,0)$
SOLUTION:
$\text{div}\;\textbf{F}=2-2{e}^{−6}$
:::

:::exercise {fs-id1167793287092} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+y\textbf{j}+z\textbf{k}$ at (1, 2, 1)
:::

:::exercise {fs-id1167794200333} type= 
PROBLEM:
$\textbf{F}(x,y,z)={e}^{x}\text{sin}\;y\textbf{i}-{e}^{x}\text{cos}\;y\textbf{j}$ at (0, 0, 3)
SOLUTION:
$\text{div}\;\textbf{F}=0$
:::
For the following exercises, find the curl of **F** at the given point.

:::exercise {fs-id1167793591255} type= 
PROBLEM:
$\textbf{F}(x,y,z)=\textbf{i}+\textbf{j}+\textbf{k}$ at $(2,−1,3)$
:::

:::exercise {fs-id1167793931558} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+y\textbf{j}+x\textbf{k}$ at $(1,2,3)$
SOLUTION:
$\text{curl}\;\textbf{F}=\textbf{j}-3\textbf{k}$
:::

:::exercise {fs-id1167793261850} type= 
PROBLEM:
$\textbf{F}(x,y,z)={e}^{\text{−}xy}\textbf{i}+{e}^{xz}\textbf{j}+{e}^{yz}\textbf{k}$ at (3, 2, 0)
:::

:::exercise {fs-id1167794143317} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xyz\textbf{i}+y\textbf{j}+z\textbf{k}$ at (1, 2, 1)
SOLUTION:
$\text{curl}\;\textbf{F}=2\textbf{j}-\textbf{k}$
:::

:::exercise {fs-id1167793447639} type= 
PROBLEM:
$\textbf{F}(x,y,z)={e}^{x}\text{sin}\;y\textbf{i}-{e}^{x}\text{cos}\;y\textbf{j}$ at (0, 0, 3)
:::

:::exercise {fs-id1167794056666} type= 
PROBLEM:
Let $\textbf{F}(x,y,z)=(3{x}^{2}y+az)\textbf{i}+{x}^{3}\textbf{j}+(3x+3{z}^{2})\textbf{k}.$ For what value of *a* is **F** conservative?
SOLUTION:
$a=3$
:::

:::exercise {fs-id1167793958653} type= 
PROBLEM:
Given vector field $\text{F}(x,y)=\frac{1}{{x}^{2}+{y}^{2}}<\text{−}y,x>$ on domain $D={\mathbb{R}}^{2}-\{(0,0)\}=\{(x,y)\in {\mathbb{R}}^{2}|(x,y)≠(0,0)\},$ is **F** conservative?
:::

:::exercise {fs-id1167794199129} type= 
PROBLEM:
Given vector field $\text{F}(x,y)=\frac{1}{{x}^{2}+{y}^{2}}<x,y>$ on domain $D={\mathbb{R}}^{2}-\{(0,0)\}=\{(x,y)\in {\mathbb{R}}^{2}|(x,y)≠(0,0)\},$ is **F** conservative?
SOLUTION:
**F** is conservative.
:::

:::exercise {fs-id1167793219692} type= 
PROBLEM:
Find the work done by force field $\textbf{F}(x,y)={e}^{\text{−}y}\textbf{i}-x{e}^{\text{−}y}\textbf{j}$ in moving an object from *P*(0, 1) to *Q*(2, 0). Is the force field conservative?
:::

:::exercise {fs-id1167794024141} type= 
PROBLEM:
Compute the divergence of $\textbf{F}=(\text{sinh}\;x)\textbf{i}+(\text{cosh}\;y)\textbf{j}-xyz\textbf{k}.$
SOLUTION:
$\text{div}\;\textbf{F}=\text{cosh}\;x+\text{sinh}\;y-xy$
:::

:::exercise {fs-id1167793696533} type= 
PROBLEM:
Compute the curl of $\textbf{F}=(\text{sinh}\;x)\textbf{i}+(\text{cosh}\;y)\textbf{j}-xyz\textbf{k}.$
:::
For the following exercises, consider a rigid body that is rotating about the *x*-axis counterclockwise with constant angular velocity $\omega =\langle a,b,c\rangle .$ If *P* is a point in the body located at $\textbf{r}=x\textbf{i}+y\textbf{j}+z\textbf{k}\text{,}$ the velocity at *P* is given by vector field $\textbf{F}=\omega \;\times \;\textbf{r}.$

> IMAGE {img:fs-id1167793480282} src=../../media/CNX_Calc_Figure_16_05_201.jpg
> alt: A three dimensional diagram of an object rotating about the x axis in a counterclockwise manner with constant angular velocity w = <a,b,c>. The object is roughly a sphere with pointed ends on the x axis, which cuts it in half. An arrow r is drawn from (0,0,0) to P(x,y,z) and down from P(x,y,z) to the x axis.

:::exercise {fs-id1167793480293} type= 
PROBLEM:
Express **F** in terms of **i**, **j**, and **k** vectors.
SOLUTION:
$(bz-cy)\textbf{i}+(cx-az)\textbf{j}+(ay-bx)\textbf{k}$
:::

:::exercise {fs-id1167794101698} type= 
PROBLEM:
Find $\text{the div of}\;\textbf{F}.$
:::

:::exercise {fs-id1167794212788} type= 
PROBLEM:
Find $\text{the curl of}\;\textbf{F}$
SOLUTION:
$\text{curl}\;\textbf{F}=2\omega$
:::
In the following exercises, suppose that $\nabla \cdot \textbf{F}=0$ and $\nabla \cdot \textbf{G}=0.$

:::exercise {fs-id1167793501880} type= 
PROBLEM:
Does $\textbf{F}+\textbf{G}$ necessarily have zero divergence?
:::

:::exercise {fs-id1167794122868} type= 
PROBLEM:
Does $\textbf{F}\;\times \;\textbf{G}$ necessarily have zero divergence?
SOLUTION:
$\textbf{F}\;\times \;\textbf{G}$ does not have zero divergence.
:::
In the following exercises, suppose a solid object in ${\mathbb{R}}^{3}$ has a temperature distribution given by $T(x,y,z)=100{e}^{-{x}^{2}+{y}^{2}+{z}^{2}}$. The heat flow vector field in the object is $\textbf{F}=\text{−}k\text{∇}T,$ where $k>0$ is a property of the material. The heat flow vector points in the direction opposite to that of the gradient, which is the direction of greatest temperature decrease. The divergence of the heat flow vector is $\nabla \cdot \textbf{F}=\text{−}k\nabla \cdot \text{∇}T=\text{−}k{\nabla}^{2}T.$

:::exercise {fs-id1167794284451} type= 
PROBLEM:
Compute the heat flow vector field.
:::

:::exercise {fs-id1167793638510} type= 
PROBLEM:
Compute the divergence.
SOLUTION:
$\nabla \cdot \textbf{F}=−200k[1+2({x}^{2}+{y}^{2}+{z}^{2})]{e}^{\text{−}{x}^{2}+{y}^{2}+{z}^{2}}$
:::

:::exercise {fs-id1167793469030} type= 
PROBLEM:
**[T]** Consider rotational velocity field $\textbf{v}=\langle 0,10z,−10y\rangle .$ If a paddlewheel is placed in plane $x+y+z=1$ with its axis normal to this plane, using a computer algebra system, calculate how fast the paddlewheel spins in revolutions per unit of time.

> IMAGE {img:fs-id1167793544439} src=../../media/CNX_Calc_Figure_16_05_202.jpg
> alt: A three dimensional diagram of a rotational velocity field. The arrows are showing a rotation in a clockwise manner. A paddlewheel is shown in plan x + y + z = 1 with n extended out perpendicular to the plane.

:::

## Glossary
- {def} **curl**: the curl of vector field $\textbf{F}=\langle P,Q,R\rangle ,$ denoted $\nabla \;\times \;\textbf{F},$ is the “determinant” of the matrix $|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R\end{array}|$ and is given by the expression $({R}_{y}-{Q}_{z})\textbf{i}+({P}_{z}-{R}_{x})\textbf{j}+({Q}_{x}-{P}_{y})\textbf{k};$ it measures the tendency of particles at a point to rotate about the axis that points in the direction of the curl at the point
- {def} **divergence**: the divergence of a vector field $\textbf{F}=\langle P,Q,R\rangle ,$ denoted $\nabla \;⋅\;\textbf{F},$ is ${P}_{x}+{Q}_{y}+{R}_{z};$ it measures the “outflowing-ness” of a vector field

# Directional Derivatives and the Gradient

## Learning Objectives {section:learning-objectives}
- Determine the directional derivative in a given direction for a function of two variables.
- Determine the gradient vector of a given real-valued function.
- Explain the significance of the gradient vector with regard to direction of change along a surface.
- Use the gradient to find the tangent to a level curve of a given function.
- Calculate directional derivatives and gradients in three dimensions.

In [Partial Derivatives](module:m53934) we introduced the partial derivative. A function $z=f(x,y)$ has two partial derivatives: $\partial z\text{/}\partial x$ and $\partial z\text{/}\partial y.$ These derivatives correspond to each of the independent variables and can be interpreted as instantaneous rates of change (that is, as slopes of a tangent line). For example, $\partial z\text{/}\partial x$ represents the slope of a tangent line passing through a given point on the surface defined by $z=f(x,y),$ assuming the tangent line is parallel to the *x*-axis. Similarly, $\partial z\text{/}\partial y$ represents the slope of the tangent line parallel to the $y\text{-axis.}$ Now we consider the possibility of a tangent line parallel to neither axis.

## Directional Derivatives
We start with the graph of a surface defined by the equation $z=f(x,y).$ Given a point $(a,b)$ in the domain of $f,$ we choose a direction to travel from that point. We measure the direction using an angle $\theta ,$ which is measured counterclockwise in the *x*, *y*-plane, starting at zero from the positive *x*-axis ([ref:CNX_Calc_Figure_14_06_001]). The distance we travel is $h$ and the direction we travel is given by the unit vector $\mathbf{u}=(\text{cos}\;\theta )\mathbf{i}+(\text{sin}\;\theta )\mathbf{j}.$ Therefore, the *z*-coordinate of the second point on the graph is given by $z=f(a+h\;\text{cos}\;\theta ,b+h\;\text{sin}\;\theta ).$

> FIGURE {fig:CNX_Calc_Figure_14_06_001} src=../../media/CNX_Calc_Figure_14_06_001.jpg
> alt: A shape in xyz space with point (a, b, f(a, b)). From the point, there is an arrow that represents the directional derivative. On the xy plane, the point (a, b) is marked and an angle of size θ is made between the projection of the directional derivative onto the plane and a line parallel to the x axis.
> caption: Finding the directional derivative at a point on the graph of $z=f(x,y).$ The slope of the blue arrow on the graph indicates the value of the directional derivative at that point.

We can calculate the slope of the secant line by dividing the difference in $z\text{-values}$ by the length of the line segment connecting the two points in the domain. The length of the line segment is $h.$ Therefore, the slope of the secant line is

${m}_{\text{sec}}=\frac{f(a+h\;\text{cos}\;\theta ,b+h\;\text{sin}\;\theta )-f(a,b)}{h}.$  {eq:fs-id1167793819610}

To find the slope of the tangent line in the same direction, we take the limit as $h$ approaches zero.

:::note [definition] Definition
Suppose $z=f(x,y)$ is a function of two variables with a domain of $D.$ Let $(a,b)\in D$ and define $\text{u}=\text{cos}\;\theta \mathbf{i}+\text{sin}\;\theta \mathbf{j}.$ Then the {term:directional derivative} of $f$ in the direction of $\mathbf{u}$ is given by

$$ {D}_{\mathbf{u}}f(a,b)=\lim_{h\to 0}\frac{f(a+h\;\text{cos}\;\theta ,b+h\;\text{sin}\;\theta )-f(a,b)}{h}, $$  {eq:fs-id1167794091761}

provided the limit exists.
:::
[ref:fs-id1167794091761] provides a formal definition of the directional derivative that can be used in many cases to calculate a directional derivative.

:::example {ex:fs-id1167793895979} Finding a Directional Derivative from the Definition

:::exercise {fs-id1167793368015} type= 
PROBLEM:
Let $\theta =\text{arccos}(3\text{/}5).$ Find the directional derivative ${D}_{\mathbf{u}}f(x,y)$ of $f(x,y)={x}^{2}-xy+3{y}^{2}$ in the direction of $\text{u}=(\text{cos}\;\theta )\mathbf{i}+(\text{sin}\;\theta )\mathbf{j}.$ What is ${D}_{\mathbf{u}}f(−1,2)?$
SOLUTION:
First of all, since $\text{cos}\;\theta =3\text{/}5$ and $\theta$ is acute, this implies

$\text{sin}\;\theta =\sqrt{1-{(\frac{3}{5})}^{2}}=\sqrt{\frac{16}{25}}=\frac{4}{5}.$  {eq:fs-id1167794050625}

Using $f(x,y)={x}^{2}-xy+3{y}^{2},$ we first calculate $f(x+h\;\text{cos}\;\theta ,y+h\;\text{sin}\;\theta )\text{:}$

$\begin{array}{rl}f(x+h\;\text{cos}\;\theta ,y+h\;\text{sin}\;\theta ) & ={(x+h\;\text{cos}\;\theta )}^{2}-(x+h\;\text{cos}\;\theta )(y+h\;\text{sin}\;\theta )+3{(y+h\;\text{sin}\;\theta )}^{2} \\ & ={x}^{2}+2xh\;\text{cos}\;\theta +{h}^{2}{\text{cos}}^{2}\theta -xy-xh\;\text{sin}\;\theta -yh\;\text{cos}\;\theta \\ & \;{\text{−h}}^{2}\text{sin}\;\theta \;\text{cos}\;\theta +3{y}^{2}+6yh\;\text{sin}\;\theta +3{h}^{2}{\text{sin}}^{2}\theta \\ & ={x}^{2}+2xh(\frac{3}{5})+\frac{9{h}^{2}}{25}-xy-\frac{4xh}{5}-\frac{3yh}{5}-\frac{12{h}^{2}}{25}+3{y}^{2} \\ & \;+6yh(\frac{4}{5})+3{h}^{2}(\frac{16}{25}) \\ & ={x}^{2}-xy+3{y}^{2}+\frac{2xh}{5}+\frac{9{h}^{2}}{5}+\frac{21yh}{5}.\end{array}$  {eq:fs-id1167793896502}

We substitute this expression into [ref:fs-id1167794091761]:

$\begin{array}{rl}{D}_{\mathbf{u}}f(a,b) & =\lim_{h\to 0}\frac{f(a+h\;\text{cos}\;\theta ,b+h\;\text{sin}\;\theta )-f(a,b)}{h} \\ & =\lim_{h\to 0}\frac{({x}^{2}-xy+3{y}^{2}+\frac{2xh}{5}+\frac{9{h}^{2}}{5}+\frac{21yh}{5})-({x}^{2}-xy+3{y}^{2})}{h} \\ & =\lim_{h\to 0}\frac{\frac{2xh}{5}+\frac{9{h}^{2}}{5}+\frac{21yh}{5}}{h} \\ & =\lim_{h\to 0}\frac{2x}{5}+\frac{9h}{5}+\frac{21y}{5} \\ & =\frac{2x+21y}{5}.\end{array}$  {eq:fs-id1167793376537}

To calculate ${D}_{\mathbf{u}}f(−1,2),$ we substitute $x=−1$ and $y=2$ into this answer:

$\begin{array}{rl}{D}_{\mathbf{u}}f(−1,2) & =\frac{2(−1)+21(2)}{5} \\ & =\frac{−2+42}{5} \\ & =8.\end{array}$  {eq:fs-id1167794125525}

(See the following figure.)

> FIGURE {fig:CNX_Calc_Figure_14_06_006} src=../../media/CNX_Calc_Figure_14_06_006.jpg
> alt: The shape f(x, y) = x2 – xy + 3y2 in xyz space with tangent plane at point (–1, 2, 15). There are two arrows from the point, one seemingly along the surface of the shape and the other in a direction on the plane. The one that corresponds to the plane is marked u = 3/5 i + 4/5 j.
> caption: Finding the directional derivative in a given direction $\mathbf{u}$ at a given point on a surface. The plane is tangent to the surface at the given point $(−1,2,15).$

:::
:::
Another approach to calculating a directional derivative involves partial derivatives, as outlined in the following theorem.

:::note [theorem] Directional Derivative of a Function of Two Variables
Let $z=f(x,y)$ be a function of two variables $x\;\text{and}\;y,$ and assume that ${f}_{x}$ and ${f}_{y}$ exist and $f(x,y)$ is differentiable everywhere. Then the directional derivative of $f$ in the direction of $\text{u}=\text{cos}\;\theta \text{i}+\text{sin}\;\theta \text{j}$ is given by

$$ {D}_{\mathbf{u}}f(x,y)={f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta . $$  {eq:fs-id1167794071305}

:::

### Proof
[ref:fs-id1167794091761] states that the directional derivative of *f* in the direction of $\mathbf{u}=\text{cos}\;\theta \mathbf{i}+\text{sin}\;\theta \mathbf{j}$ is given by

${D}_{\mathbf{u}}f(a,b)=\lim_{t\to 0}\frac{f(a+t\;\text{cos}\;\theta ,b+t\;\text{sin}\;\theta )-f(a,b)}{t}.$  {eq:fs-id1167794334066}

Let $x=a+t\;\text{cos}\;\theta$ and $y=b+t\;\text{sin}\;\theta ,$ and define $g(t)=f(x,y).$ Since ${f}_{x}$ and ${f}_{y}$ both exist, and therefore $f$ is differentiable, we can use the chain rule for functions of two variables to calculate ${g}^{'}(t)\text{:}$

$\begin{array}{rl}{g}^{'}(t) & =\frac{\partial \text{f}}{\partial \text{x}}\;\frac{dx}{dt}+\frac{\partial \text{f}}{\partial \text{y}}\;\frac{dy}{dt} \\ & ={f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta .\end{array}$  {eq:fs-id1167793953059}

If $t=0,$ then $x={x}_{0}(=a)$ and $y={y}_{0}(=b),$ so

${g}^{'}(0)={f}_{x}({x}_{0},{y}_{0})\text{cos}\;\theta +{f}_{y}({x}_{0},{y}_{0})\text{sin}\;\theta .$  {eq:fs-id1167794045158}

By the definition of ${g}^{'}(t),$ it is also true that

$\begin{array}{rl}{g}^{'}(0) & =\lim_{t\to 0}\frac{g(t)-g(0)}{t} \\ & =\lim_{t\to 0}\frac{f({x}_{0}+t\;\text{cos}\;\theta ,{y}_{0}+t\;\text{sin}\;\theta )-f({x}_{0},{y}_{0})}{t}.\end{array}$  {eq:fs-id1167794099147}

Therefore, ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})={f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta .$
□

:::example {ex:fs-id1167793638600} Finding a Directional Derivative: Alternative Method

:::exercise {fs-id1167794145966} type= 
PROBLEM:
Let $\theta =\text{arccos}(3\text{/}5).$ Find the directional derivative ${D}_{\mathbf{u}}f(x,y)$ of $f(x,y)={x}^{2}-xy+3{y}^{2}$ in the direction of $\mathbf{u}=(\text{cos}\;\theta )\mathbf{i}+(\text{sin}\;\theta )\mathbf{j}.$ What is ${D}_{\mathbf{u}}f(−1,2)?$
SOLUTION:
First, we must calculate the partial derivatives of $f\text{:}$

$\begin{array}{l}{f}_{x}=2x-y \\ {f}_{y}=\text{−}x+6y,\end{array}$  {eq:fs-id1167794221203}

Then we use [ref:fs-id1167794071305] with $\theta =\text{arccos}(3\text{/}5)\text{:}$

$\begin{array}{rl}{D}_{\mathbf{u}}f(x,y) & ={f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta \\ & =(2x-y)\frac{3}{5}+(\text{−}x+6y)\frac{4}{5} \\ & =\frac{6x}{5}-\frac{3y}{5}-\frac{4x}{5}+\frac{24y}{5} \\ & =\frac{2x+21y}{5}.\end{array}$  {eq:fs-id1167794332347}

To calculate ${D}_{\mathbf{u}}f(−1,2),$ let $x=−1$ and $y=2\text{:}$

${D}_{\mathbf{u}}f(−1,2)=\frac{2(−1)+21(2)}{5}=\frac{−2+42}{5}=8.$  {eq:fs-id1167794061732}

This is the same answer obtained in [ref:fs-id1167793895979].
:::
:::

## Gradient
The right-hand side of [ref:fs-id1167794071305] is equal to ${f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta ,$ which can be written as the dot product of two vectors. Define the first vector as $\nabla f(x,y)={f}_{x}(x,y)\text{i}+{f}_{y}(x,y)\text{j}$ and the second vector as $\mathbf{u}=(\text{cos}\;\theta )\mathbf{i}+(\text{sin}\;\theta )\mathbf{j}.$ Then the right-hand side of the equation can be written as the dot product of these two vectors:

$$ {D}_{\mathbf{u}}f(x,y)=\nabla f(x,y)\cdot \mathbf{u}. $$  {eq:fs-id1167794125596}

The first vector in [ref:fs-id1167794125596] has a special name: the gradient of the function $f.$ The symbol $\nabla$ is called *nabla* and the vector $\nabla f$ is read $\text{“del}\;f\text{.”}$

:::note [definition] Definition
Let $z=f(x,y)$ be a function of $x\;\text{and}\;y$ such that ${f}_{x}$ and ${f}_{y}$ exist. The vector $\nabla f(x,y)$ is called the {term:gradient} of $f$ and is defined as

$$ \nabla f(x,y)={f}_{x}(x,y)\mathbf{i}+{f}_{y}(x,y)\mathbf{j}. $$  {eq:fs-id1167793931842}

The vector $\nabla f(x,y)$ is also written as $\text{“grad}\;f\text{.”}$
:::

:::note [checkpoint] 

:::exercise {fs-id1167793262534} type= 
PROBLEM:
Find the directional derivative ${D}_{\mathbf{u}}f(x,y)$ of $f(x,y)=3{x}^{2}y-4x{y}^{3}+3{y}^{2}-4x$ in the direction of $\mathbf{u}=(\text{cos}\;\frac{\pi}{3})\mathbf{i}+(\text{sin}\;\frac{\pi}{3})\mathbf{j}$ using [ref:fs-id1167794071305]. What is ${D}_{\mathbf{u}}f(3,4)?$
SOLUTION:
$\begin{array}{l} \\ \\ {D}_{\mathbf{u}}f(x,y)=\frac{(6xy-4{y}^{3}-4)(1)}{2}+\frac{(3{x}^{2}-12x{y}^{2}+6y)\sqrt{3}}{2} \\ {D}_{\mathbf{u}}f(3,4)=\frac{72-256-4}{2}+\frac{(27-576+24)\sqrt{3}}{2}=−94-\frac{525\sqrt{3}}{2}\end{array}$
COMMENTARY: Hint
Calculate the partial derivatives and determine the value of $\theta .$
:::
:::
If the vector that is given for the direction of the derivative is not a unit vector, then it is only necessary to divide by the norm of the vector. For example, if we wished to find the directional derivative of the function in [ref:fs-id1167793638600] in the direction of the vector $\langle −5,12\rangle ,$ we would first divide by its magnitude to get $\mathbf{u}.$ This gives us $\mathbf{u}=\langle \text{−}(5\text{/}13),12\text{/}13\rangle .$ Then

$\begin{array}{rl}{D}_{\mathbf{u}}f(x,y) & =\nabla f(x,y)\cdot \mathbf{u} \\ & =-\frac{5}{13}(2x-\frac{77}{12}y)+\frac{12}{13}(\text{−}x+6y) \\ & =-\frac{22}{13}x+\frac{17}{13}y.\end{array}$  {eq:fs-id1167793272041}

:::example {ex:fs-id1167793990054} Finding Gradients

:::exercise {fs-id1167793990056} type= 
PROBLEM:
Find the gradient $\nabla f(x,y)$ of each of the following functions:
a. $f(x,y)={x}^{2}-xy+3{y}^{2}$
b. $f(x,y)=\text{sin}\;3x\;\text{cos}\;3y$
SOLUTION:
For both parts a. and b., we first calculate the partial derivatives ${f}_{x}$ and ${f}_{y},$ then use [ref:fs-id1167793931842].
a. 
$\begin{array}{rll}{f}_{x}(x,y) & = & 2x-y\;\text{and}\;{f}_{y}(x,y)=\text{−}x+6y,\;\text{so} \\ \nabla f(x,y) & = & {f}_{x}(x,y)\mathbf{i}+{f}_{y}(x,y)\mathbf{j} \\ & = & (2x-y)\mathbf{i}+(\text{−}x+6y)\mathbf{j.}\end{array}$
b. 
$\begin{array}{rll}{f}_{x}(x,y) & = & 3\;\text{cos}\;3x\;\text{cos}\;3y\;\text{and}\;{f}_{y}(x,y)=−3\;\text{sin}\;3x\;\text{sin}\;3y,\;\text{so} \\ \nabla f(x,y) & = & {f}_{x}(x,y)\mathbf{i}+{f}_{y}(x,y)\mathbf{j} \\ & = & (3\;\text{cos}\;3x\;\text{cos}\;3y)\mathbf{i}-(3\;\text{sin}\;3x\;\text{sin}\;3y)\mathbf{j}.\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793241201} type= 
PROBLEM:
Find the gradient $\nabla f(x,y)$ of $f(x,y)=({x}^{2}-3{y}^{2})\text{/}(2x+y).$
SOLUTION:
$\nabla f(x,y)=\frac{2{x}^{2}+2xy+6{y}^{2}}{{(2x+y)}^{2}}\mathbf{i}-\frac{{x}^{2}+12xy+3{y}^{2}}{{(2x+y)}^{2}}\mathbf{j}$
COMMENTARY: Hint
Calculate the partial derivatives, then use [ref:fs-id1167793931842].
:::
:::
The gradient has some important properties. We have already seen one formula that uses the gradient: the formula for the directional derivative. Recall from [The Dot Product](module:m53902) that if the angle between two vectors $\mathbf{a}$ and $\mathbf{b}$ is $φ,$ then $\mathbf{a}\cdot \text{b}=\| \mathbf{a}\| \| \text{b}\| \text{cos}\;φ.$ Therefore, if the angle between $\nabla f({x}_{0},{y}_{0})$ and $\mathbf{u}=(\text{cos}\;\theta )\mathbf{i}+(\text{sin}\;\theta )\mathbf{j}$ is $φ,$ we have

${D}_{\mathbf{u}}f({x}_{0},{y}_{0})=\nabla f({x}_{0},{y}_{0})\cdot \mathbf{u}=\| \nabla f({x}_{0},{y}_{0})\| \| \mathbf{u}\| \text{cos}\;φ=\| \nabla f({x}_{0},{y}_{0})\| \text{cos}\;φ.$  {eq:fs-id1167794061304}

The $\| \mathbf{u}\|$ disappears because $\mathbf{u}$ is a unit vector. Therefore, the directional derivative is equal to the magnitude of the gradient evaluated at $({x}_{0},{y}_{0})$ multiplied by $\text{cos}\;φ.$ Recall that $\text{cos}\;φ$ ranges from $−1$ to $1.$ If $φ=0,$ then $\text{cos}\;φ=1$ and $\nabla f({x}_{0},{y}_{0})$ and $\mathbf{u}$ both point in the same direction. If $φ=\pi ,$ then $\text{cos}\;φ=−1$ and $\nabla f({x}_{0},{y}_{0})$ and $\mathbf{u}$ point in opposite directions. In the first case, the value of ${D}_{\text{u}}f({x}_{0},{y}_{0})$ is maximized; in the second case, the value of ${D}_{\text{u}}f({x}_{0},{y}_{0})$ is minimized. If $\nabla f({x}_{0},{y}_{0})=0,$ then ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})=\nabla f({x}_{0},{y}_{0})\cdot \mathbf{u}=0$ for any vector $\mathbf{u}.$ These three cases are outlined in the following theorem.

:::note [theorem] Properties of the Gradient
Suppose the function $z=f(x,y)$ is differentiable at $({x}_{0},{y}_{0})$ ([ref:CNX_Calc_Figure_14_06_007]).
1. If $\nabla f({x}_{0},{y}_{0})=\mathbf{0},$ then ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})=0$ for any unit vector $\mathbf{u}.$
2. If $\nabla f({x}_{0},{y}_{0})≠\mathbf{0},$ then ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})$ is maximized when $\mathbf{u}$ points in the same direction as $\nabla f({x}_{0},{y}_{0}).$ The maximum value of ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})$ is $\| \nabla f({x}_{0},{y}_{0})\| \text{.}$
3. If $\nabla f({x}_{0},{y}_{0})≠\mathbf{0},$ then ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})$ is minimized when $\mathbf{u}$ points in the opposite direction from $\nabla f({x}_{0},{y}_{0}).$ The minimum value of ${D}_{\mathbf{u}}f({x}_{0},{y}_{0})$ is $\text{−}\| \nabla f({x}_{0},{y}_{0})\| \text{.}$
:::

> FIGURE {fig:CNX_Calc_Figure_14_06_007} src=../../media/CNX_Calc_Figure_14_06_007.jpg
> alt: An upward facing paraboloid in xyz space with point P0 (x0, y0, z0). From this point, there are arrows going up, down, and around the paraboloid. On the xy plane, the point (x0, y0) is marked, and the corresponding arrows are drawn onto the plane: the down arrow corresponds to −∇f (most rapid decrease in f), the up arrow corresponds to ∇f (most rapid increase in f), and the arrows around correspond to no change in f. The up/down arrows are perpendicular to the around arrows in their projection on the plane.
> caption: The gradient indicates the maximum and minimum values of the directional derivative at a point.

:::example {ex:fs-id1167793931193} Finding a Maximum Directional Derivative

:::exercise {fs-id1167793931195} type= 
PROBLEM:
Find the direction for which the directional derivative of $f(x,y)=3{x}^{2}-4xy+2{y}^{2}$ at $(−2,3)$ is a maximum. What is the maximum value?
SOLUTION:
The maximum value of the directional derivative occurs when $\nabla f$ and the unit vector point in the same direction. Therefore, we start by calculating $\nabla f(x,y)\text{:}$

$\begin{array}{rll}{f}_{x}(x,y) & = & 6x-4y\;\text{and}\;{f}_{y}(x,y)=−4x+4y,\;\text{so} \\ \nabla f(x,y) & = & {f}_{x}(x,y)\mathbf{i}+{f}_{y}(x,y)\mathbf{j}=(6x-4y)\mathbf{i}+(−4x+4y)\mathbf{j}.\end{array}$  {eq:fs-id1167793831468}

Next, we evaluate the gradient at $(−2,3)\text{:}$

$\nabla f(−2,3)=(6(−2)-4(3))\mathbf{i}+(−4(−2)+4(3))\mathbf{j}=−24\mathbf{i}+20\mathbf{j}.$  {eq:fs-id1167793956733}

We need to find a unit vector that points in the same direction as $\nabla f(−2,3),$ so the next step is to divide $\nabla f(−2,3)$ by its magnitude, which is $\sqrt{{(−24)}^{2}+{(20)}^{2}}=\sqrt{976}=4\sqrt{61}.$ Therefore,

$\frac{\nabla f(−2,3)}{\| \nabla f(−2,3)\|}=\frac{−24}{4\sqrt{61}}\mathbf{i}+\frac{20}{4\sqrt{61}}\mathbf{j}=\frac{−6\sqrt{61}}{61}\mathbf{i}+\frac{5\sqrt{61}}{61}\mathbf{j}.$  {eq:fs-id1167793957122}

This is the unit vector that points in the same direction as $\nabla f(−2,3).$ To find the angle corresponding to this unit vector, we solve the equations

$\text{cos}\;\theta =\frac{−6\sqrt{61}}{61}\;\text{and}\;\text{sin}\;\theta =\frac{5\sqrt{61}}{61}$  {eq:fs-id1167793514455}

for $\theta .$ Since cosine is negative and sine is positive, the angle must be in the second quadrant. Therefore, $\theta =\pi -\text{arcsin}((5\sqrt{61})\text{/}61)\approx 2.45\;\text{rad.}$
The maximum value of the directional derivative at $(−2,3)$ is $\| \nabla f(−2,3)\| =4\sqrt{61}$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_14_06_008} src=../../media/CNX_Calc_Figure_14_06_008.jpg
> alt: An upward facing paraboloid f(x, y) = 3x2 – 4xy + 2y2 with tangent plane at the point (–2, 3, 54). The tangent plane has equation z = –24x + 20y – 54.
> caption: The maximum value of the directional derivative at $(−2,3)$ is in the direction of the gradient.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794293307} type= 
PROBLEM:
Find the direction for which the directional derivative of $g(x,y)=4x-xy+2{y}^{2}$ at $(−2,3)$ is a maximum. What is the maximum value?
SOLUTION:
The gradient of $g$ at $(−2,3)$ is $\nabla g(−2,3)=\mathbf{i}+14\mathbf{j}.$ The unit vector that points in the same direction as $\nabla g(−2,3)$ is $\frac{\nabla g(−2,3)}{\| \nabla g(−2,3)\|}=\frac{1}{\sqrt{197}}\mathbf{i}+\frac{14}{\sqrt{197}}\mathbf{j}=\frac{\sqrt{197}}{197}\mathbf{i}+\frac{14\sqrt{197}}{197}\mathbf{j},$ which gives an angle of $\theta =\text{arcsin}((14\sqrt{197})\text{/}197)\approx 1.499\;\text{rad}.$ The maximum value of the directional derivative is $\| \nabla g(−2,3)\| =\sqrt{197}.$
COMMENTARY: Hint
Evaluate the gradient of $g$ at point $(−2,3).$
:::
:::
[ref:CNX_Calc_Figure_14_06_002] shows a portion of the graph of the function $f(x,y)=3+\text{sin}\;x\;\text{sin}\;y.$ Given a point $(a,b)$ in the domain of $f,$ the maximum value of the gradient at that point is given by $\| \nabla f(a,b)\| .$ This would equal the rate of greatest ascent if the surface represented a topographical map. If we went in the opposite direction, it would be the rate of greatest descent.

> FIGURE {fig:CNX_Calc_Figure_14_06_002} src=../../media/CNX_Calc_Figure_14_06_002.jpg
> alt: An surface in xyz space with point at f(a, b). There is an arrow in the direction of greatest descent.
> caption: A typical surface in ${\mathbb{R}}^{3}.$ Given a point on the surface, the directional derivative can be calculated using the gradient.

When using a topographical map, the steepest slope is always in the direction where the contour lines are closest together (see [ref:CNX_Calc_Figure_14_06_003]). This is analogous to the contour map of a function, assuming the level curves are obtained for equally spaced values throughout the range of that function.

> FIGURE {fig:CNX_Calc_Figure_14_06_003} src=../../media/CNX_Calc_Figure_14_06_003.jpg
> alt: Two crossing dashed lines that pass through the origin and a series of curved lines approaching the crosses dashed lines as if they are asymptotes.
> caption: Contour map for the function $f(x,y)={x}^{2}-{y}^{2}$ using level values between $−5$ and $5.$

## Gradients and Level Curves
Recall that if a curve is defined parametrically by the function pair $(x(t),y(t)),$ then the vector ${x}^{'}(t)\mathbf{i}+{y}^{'}(t)\mathbf{j}$ is tangent to the curve for every value of $t$ in the domain. Now let’s assume $z=f(x,y)$ is a differentiable function of $x\;\text{and}\;y,$ and $({x}_{0},{y}_{0})$ is in its domain. Let’s suppose further that ${x}_{0}=x({t}_{0})$ and ${y}_{0}=y({t}_{0})$ for some value of $t,$ and consider the level curve $f(x,y)=k.$ Define $g(t)=f(x(t),y(t))$ and calculate ${g}^{'}(t)$ on the level curve. By the chain Rule,

${g}^{'}(t)={f}_{x}(x(t),y(t)){x}^{'}(t)+{f}_{y}(x(t),y(t)){y}^{'}(t).$  {eq:fs-id1167794070094}

But ${g}^{'}(t)=0$ because $g(t)=k$ for all $t.$ Therefore, on the one hand,

${f}_{x}(x(t),y(t)){x}^{'}(t)+{f}_{y}(x(t),y(t)){y}^{'}(t)=0;$  {eq:fs-id1167794022906}

on the other hand,

${f}_{x}(x(t),y(t)){x}^{'}(t)+{f}_{y}(x(t),y(t)){y}^{'}(t)=\nabla f(x,y)\cdot \langle {x}^{'}(t),{y}^{'}(t)\rangle \text{.}$  {eq:fs-id1167794222673}

Therefore,

$\nabla f(x,y)\cdot \langle {x}^{'}(t),{y}^{'}(t)\rangle =0.$  {eq:fs-id1167793503419}

Thus, the dot product of these vectors is equal to zero, which implies they are orthogonal. However, the second vector is tangent to the level curve, which implies the gradient must be normal to the level curve, which gives rise to the following theorem.

:::note [theorem] Gradient Is Normal to the Level Curve
Suppose the function $z=f(x,y)$ has continuous first-order partial derivatives in an open disk centered at a point $({x}_{0},{y}_{0}).$ If $\nabla f({x}_{0},{y}_{0})≠\mathbf{0},$ then $\nabla f({x}_{0},{y}_{0})$ is normal to the level curve of $f$ at $({x}_{0},{y}_{0}).$
:::
We can use this theorem to find tangent and normal vectors to level curves of a function.

:::example {ex:fs-id1167793956566} Finding Tangents to Level Curves

:::exercise {fs-id1167793956568} type= 
PROBLEM:
For the function $f(x,y)=2{x}^{2}-3xy+8{y}^{2}+2x-4y+4,$ find a tangent vector to the level curve at point $(−2,1).$ Graph the level curve corresponding to $f(x,y)=18$ and draw in $\nabla f(−2,1)$ and a tangent vector.
SOLUTION:
First, we must calculate $\nabla f(x,y)\text{:}$

${f}_{x}(x,y)=4x-3y+2\;\text{and}\;{f}_{y}=−3x+16y-4\;\text{so}\;\nabla f(x,y)=(4x-3y+2)\mathbf{i}+(−3x+16y-4)\mathbf{j}.$  {eq:fs-id1167793376293}

Next, we evaluate $\nabla f(x,y)$ at $(−2,1)\text{:}$

$\nabla f(−2,1)=(4(−2)-3(1)+2)\mathbf{i}+(−3(−2)+16(1)-4)\mathbf{j}=−9\mathbf{i}+18\mathbf{j}.$  {eq:fs-id1167794293297}

This vector is orthogonal to the curve at point $(−2,1).$ We can obtain a tangent vector by reversing the components and multiplying either one by $−1.$ Thus, for example, $−18\mathbf{i}-9\mathbf{j}$ is a tangent vector (see the following graph).

> FIGURE {fig:CNX_Calc_Figure_14_06_004} src=../../media/CNX_Calc_Figure_14_06_004.jpg
> alt: A rotated ellipse with equation f(x, y) = 10. At the point (–2, 1) on the ellipse, there are drawn two arrows, one tangent vector and one normal vector. The normal vector is marked ∇f(–2, 1) and is perpendicular to the tangent vector.
> caption: A rotated ellipse with equation f(x, y) = 18. At the point (–2, 1) on the ellipse, there are drawn two arrows, one tangent vector and one normal vector. The normal vector is marked ∇f(–2, 1) and is perpendicular to the tangent vector. Note that the tangent vector is drawn much shorter than it actually is to fit in the figure. The direction is correct, however.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793219295} type= 
PROBLEM:
For the function $f(x,y)={x}^{2}-2xy+5{y}^{2}+3x-2y+4,$ find the tangent to the level curve at point $(1,1).$ Draw the graph of the level curve corresponding to $f(x,y)=9$ and draw $\nabla f(1,1)$ and a tangent vector.
SOLUTION:
$\nabla f(x,y)=(2x-2y+3)\mathbf{i}+(−2x+10y-2)\mathbf{j}$
$\nabla f(1,1)=3\mathbf{i}+6\mathbf{j}$
Tangent vector: $6\mathbf{i}-3\mathbf{j}$ or $−6\mathbf{i}+3\mathbf{j}$

> IMAGE {img:fs-id1167793499252} src=../../media/CNX_Calc_Figure_14_06_005.jpg
> alt: A rotated ellipse with equation f(x, y) = 8. At the point (1, 1) on the ellipse, there are drawn two arrows, one tangent vector and one normal vector. The normal vector is marked ∇f(1, 1) and is perpendicular to the tangent vector.

COMMENTARY: Hint
Calculate the gradient at point $(1,1).$
:::
:::

## Three-Dimensional Gradients and Directional Derivatives
The definition of a gradient can be extended to functions of more than two variables.

:::note [definition] Definition
Let $w=f(x,y,z)$ be a function of three variables such that ${f}_{x},{f}_{y},\text{and}\;{f}_{z}$ exist. The vector $\nabla f(x,y,z)$ is called the gradient of $f$ and is defined as

$$ \nabla f(x,y,z)={f}_{x}(x,y,z)\mathbf{i}+{f}_{y}(x,y,z)\mathbf{j}+{f}_{z}(x,y,z)\mathbf{k}. $$  {eq:fs-id1167793443483}

$\nabla f(x,y,z)$ can also be written as $\text{grad}\;f(x,y,z).$
:::
Calculating the gradient of a function in three variables is very similar to calculating the gradient of a function in two variables. First, we calculate the partial derivatives ${f}_{x},{f}_{y},$ and ${f}_{z},$ and then we use [ref:fs-id1167793443483].

:::example {ex:fs-id1167794091697} Finding Gradients in Three Dimensions

:::exercise {fs-id1167794091699} type= 
PROBLEM:
Find the gradient $\nabla f(x,y,z)$ of each of the following functions:
a. $f(x,y,z)=5{x}^{2}-2xy+{y}^{2}-4yz+{z}^{2}+3xz$
b. $f(x,y,z)={e}^{−2z}\text{sin}\;2x\;\text{cos}\;2y$
SOLUTION:
For both parts a. and b., we first calculate the partial derivatives ${f}_{x},{f}_{y},$ and ${f}_{z},$ then use [ref:fs-id1167793443483].
a. 
$\begin{array}{lll}{f}_{x}(x,y,z) & = & 10x-2y+3z,\;{f}_{y}(x,y,z)=−2x+2y-4z\;\text{and}\;{f}_{z}(x,y,z)=3x-4y+2z,\;\text{so} \\ \nabla f(x,y,z) & = & {f}_{x}(x,y,z)i+{f}_{y}(x,y,z)j+{f}_{z}(x,y,z)k \\ & = & (10x-2y+3z)i+(−2x+2y-4z)j+(3x-4y+2z)k.\end{array}$
b. 
$\begin{array}{lll}{f}_{x}(x,y,z) & = & 2{e}^{−2z}\text{cos}\;2x\;\text{cos}\;2y,\;{f}_{y}(x,y,z)=−2{e}^{−2z}\text{sin}\;2x\;\text{sin}\;2y\;\text{and} \\ {f}_{z}(x,y,z) & = & −2{e}^{−2z}\text{sin}\;2x\;\text{cos}\;2y,\;\text{so} \\ \nabla f(x,y,z) & = & {f}_{x}(x,y,z)i+{f}_{y}(x,y,z)j+{f}_{z}(x,y,z)k \\ & = & (2{e}^{−2z}\text{cos}\;2x\;\text{cos}\;2y)i+(-2{e}^{-2z}sin2xsin2y)j+(-2{e}^{-2z}sin2xcos2y)k \\ & = & 2{e}^{−2z}(\text{cos}\;2x\;\text{cos}\;2y\;\text{i}-\text{sin}\;2x\;\text{sin}\;2y\;\text{j}-\text{sin}\;2x\;\text{cos}\;2y\;\text{k}).\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794296106} type= 
PROBLEM:
Find the gradient $\nabla f(x,y,z)$ of $f(x,y,z)=\frac{{x}^{2}-3{y}^{2}+{z}^{2}}{2x+y-4z}.$
SOLUTION:
$\begin{array}{rl}\nabla f(x,y,z) & =\frac{2{x}^{2}+2xy+6{y}^{2}-8xz-2{z}^{2}}{{(2x+y-4z)}^{2}}\mathbf{i}-\frac{{x}^{2}+12xy+3{y}^{2}-24yz+{z}^{2}}{{(2x+y-4z)}^{2}}\mathbf{j} \\ & +\frac{4{x}^{2}-12{y}^{2}-4{z}^{2}+4xz+2yz}{{(2x+y-4z)}^{2}}\mathbf{k}.\end{array}$
:::
:::
The directional derivative can also be generalized to functions of three variables. To determine a direction in three dimensions, a vector with three components is needed. This vector is a unit vector, and the components of the unit vector are called {index:*directional cosines*}. Given a three-dimensional unit vector $\mathbf{u}$ in standard form (i.e., the initial point is at the origin), this vector forms three different angles with the positive $x-,y-,$ and *z-*axes. Let’s call these angles $\alpha ,β,$ and $γ.$ Then the directional cosines are given by $\text{cos}\;\alpha ,\text{cos}\;β,$ and $\text{cos}\;γ.$ These are the components of the unit vector $\mathbf{u};$ since $\mathbf{u}$ is a unit vector, it is true that ${\text{cos}}^{2}\alpha +{\text{cos}}^{2}β+{\text{cos}}^{2}γ=1.$

:::note [definition] Definition
Suppose $w=f(x,y,z)$ is a function of three variables with a domain of $D.$ Let $({x}_{0},{y}_{0},{z}_{0})\in D$ and let $\text{u}=\text{cos}\;\alpha \mathbf{i}+\text{cos}\;β\mathbf{j}+\text{cos}\;γ\mathbf{k}$ be a unit vector. Then, the directional derivative of $f$ in the direction of $u$ is given by

$$ {D}_{\mathbf{u}}f({x}_{0},{y}_{0},{z}_{0})=\lim_{t\to 0}\frac{f({x}_{0}+t\;\text{cos}\;\alpha ,{y}_{0}+t\;\text{cos}\;β,{z}_{0}+t\;\text{cos}\;γ)-f({x}_{0},{y}_{0},{z}_{0})}{t}, $$  {eq:fs-id1167793642065}

provided the limit exists.
:::
We can calculate the directional derivative of a function of three variables by using the gradient, leading to a formula that is analogous to [ref:fs-id1167794125596].

:::note [theorem] Directional Derivative of a Function of Three Variables
Let $f(x,y,z)$ be a differentiable function of three variables and let $\mathbf{u}=\text{cos}\;\alpha \mathbf{i}+\text{cos}\;β\mathbf{j}+\text{cos}\;γ\mathbf{k}$ be a unit vector. Then, the directional derivative of $f$ in the direction of $\mathbf{u}$ is given by

$$ \begin{array}{rl}{D}_{\mathbf{u}}f(x,y,z) & =\nabla f(x,y,z)\cdot \mathbf{u} \\ & ={f}_{x}(x,y,z)\text{cos}\;\alpha +{f}_{y}(x,y,z)\text{cos}\;β+{f}_{z}(x,y,z)\text{cos}\;γ.\end{array} $$  {eq:fs-id1167794172303}

:::
The three angles $\alpha ,β,\;\text{and}\;γ$ determine the unit vector $\mathbf{u}.$ In practice, we can use an arbitrary (nonunit) vector, then divide by its magnitude to obtain a unit vector in the desired direction.

:::example {ex:fs-id1167793928778} Finding a Directional Derivative in Three Dimensions

:::exercise {fs-id1167793928780} type= 
PROBLEM:
Calculate ${D}_{\mathbf{u}}f(1,−2,3)$ in the direction of $\text{v}=\text{−}\mathbf{i}+2\mathbf{j}+2\mathbf{k}$ for the function

$f(x,y,z)=5{x}^{2}-2xy+{y}^{2}-4yz+{z}^{2}+3xz.$  {eq:fs-id1167793639884}

SOLUTION:
First, we find the magnitude of $\mathbf{v}\text{:}$

$\| \mathbf{v}\| =\sqrt{{(−1)}^{2}+{(2)}^{2}+{(2)}^{2}}=3.$  {eq:fs-id1167793445845}

Therefore, $\frac{\mathbf{v}}{\| \mathbf{v}\|}=\frac{\text{−}\mathbf{i}+2\mathbf{j}+2\mathbf{k}}{3}=-\frac{1}{3}\mathbf{i}+\frac{2}{3}\mathbf{j}+\frac{2}{3}\mathbf{k}$ is a unit vector in the direction of $\mathbf{v},$ so $\text{cos}\;\alpha =-\frac{1}{3},\text{cos}\;β=\frac{2}{3},\;\text{and}\;\text{cos}\;γ=\frac{2}{3}.$ Next, we calculate the partial derivatives of $f\text{:}$

$\begin{array}{rll}{f}_{x}(x,y,z) & = & 10x-2y+3z \\ {f}_{y}(x,y,z) & = & −2x+2y-4z \\ {f}_{z}(x,y,z) & = & −4y+2z+3x,\end{array}$  {eq:fs-id1167793940784}

then substitute them into [ref:fs-id1167794172303]:

$\begin{array}{rl}{D}_{\mathbf{u}}f(x,y,z) & ={f}_{x}(x,y,z)\text{cos}\;\alpha +{f}_{y}(x,y,z)\text{cos}\;β+{f}_{z}(x,y,z)\text{cos}\;γ \\ & =(10x-2y+3z)(-\frac{1}{3})+(−2x+2y-4z)(\frac{2}{3})+(−4y+2z+3x)(\frac{2}{3}) \\ & =-\frac{10x}{3}+\frac{2y}{3}-\frac{3z}{3}-\frac{4x}{3}+\frac{4y}{3}-\frac{8z}{3}-\frac{8y}{3}+\frac{4z}{3}+\frac{6x}{3} \\ & =-\frac{8x}{3}-\frac{2y}{3}-\frac{7z}{3}.\end{array}$  {eq:fs-id1167793616734}

Last, to find ${D}_{\mathbf{u}}f(1,−2,3),$ we substitute $x=1,y=−2,\;\text{and}\;z=3\text{:}$

$\begin{array}{rl}{D}_{\mathbf{u}}f(1,−2,3) & =-\frac{8(1)}{3}-\frac{2(−2)}{3}-\frac{7(3)}{3} \\ & =-\frac{8}{3}+\frac{4}{3}-\frac{21}{3} \\ & =-\frac{25}{3}.\end{array}$  {eq:fs-id1167794284776}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793378237} type= 
PROBLEM:
Calculate ${D}_{\mathbf{u}}f(x,y,z)$ and ${D}_{\mathbf{u}}f(0,−2,5)$ in the direction of $\text{v}=−3\mathbf{i}+12\mathbf{j}-4\mathbf{k}$ for the function $f(x,y,z)=3{x}^{2}+xy-2{y}^{2}+4yz-{z}^{2}+2xz.$
SOLUTION:
$\begin{array}{rll}{D}_{\mathbf{u}}f(x,y,z) & = & -\frac{3}{13}(6x+y+2z)+\frac{12}{13}(x-4y+4z)-\frac{4}{13}(2x+4y-2z) \\ {D}_{\mathbf{u}}f(0,−2,5) & = & \frac{384}{13}\end{array}$
COMMENTARY: Hint
First, divide $\mathbf{v}$ by its magnitude, calculate the partial derivatives of $f,$ then use [ref:fs-id1167794172303].
:::
:::

## Key Concepts {section:key-concepts}
- A directional derivative represents a rate of change of a function in any given direction.
- The gradient can be used in a formula to calculate the directional derivative.
- The gradient indicates the direction of greatest change of a function of more than one variable.

## Key Equations {section:key-equations}

> TABLE {tab:eip-548} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **directional derivative (two dimensions)** | ${D}_{\mathbf{u}}f(a,b)=\lim_{h\to 0}\frac{f(a+h\;\text{cos}\;\theta ,b+h\;\text{sin}\;\theta )-f(a,b)}{h}$<br> or<br> ${D}_{\mathbf{u}}f(x,y)={f}_{x}(x,y)\text{cos}\;\theta +{f}_{y}(x,y)\text{sin}\;\theta$ |
| **gradient (two dimensions)** | $\nabla f(x,y)={f}_{x}(x,y)\mathbf{i}+{f}_{y}(x,y)\mathbf{j}$ |
| **gradient (three dimensions)** | $\nabla f(x,y,z)={f}_{x}(x,y,z)\mathbf{i}+{f}_{y}(x,y,z)\mathbf{j}+{f}_{z}(x,y,z)\mathbf{k}$ |
| **directional derivative (three dimensions)** | $\begin{array}{rl}{D}_{\mathbf{u}}f(x,y,z) & =\nabla f(x,y,z)\cdot \mathbf{u} \\ & ={f}_{x}(x,y,z)\text{cos}\;\alpha +{f}_{y}(x,y,z)\text{cos}\;β+{f}_{x}(x,y,z)\text{cos}\;γ\end{array}$ |

##  {section:section-exercises}
For the following exercises, find the directional derivative using the limit definition only.

:::exercise {fs-id1167793514661} type= 
PROBLEM:
$f(x,y)=5-2{x}^{2}-\frac{1}{2}{y}^{2}$ at point $P(3,4)$ in the direction of $\text{u}=(\text{cos}\;\frac{\pi}{4})\mathbf{i}+(\text{sin}\;\frac{\pi}{4})\mathbf{j}$
:::

:::exercise {fs-id1167793299629} type= 
PROBLEM:
$f(x,y)={y}^{2}\text{cos}(2x)$ at point $P(\frac{\pi}{3},2)$ in the direction of $\text{u}=(\text{cos}\;\frac{\pi}{4})\mathbf{i}+(\text{sin}\;\frac{\pi}{4})\mathbf{j}$
SOLUTION:
$-2\sqrt{6}-\sqrt{2}$
:::

:::exercise {fs-id1167793940634} type= 
PROBLEM:
Find the directional derivative of $f(x,y)={y}^{2}\text{sin}(2x)$ at point $P(\frac{\pi}{4},2)$ in the direction of $\mathbf{u}=5\mathbf{i}+12\mathbf{j}.$
:::
For the following exercises, find the directional derivative of the function at point $P$ in the direction of $\mathbf{u}$ or $\mathbf{v}$ as appropriate.

:::exercise {fs-id1167794162856} type= 
PROBLEM:
$f(x,y)=xy,$ $P(0,−2),$ $\mathbf{v}=\frac{1}{2}\mathbf{i}+\frac{\sqrt{3}}{2}\mathbf{j}$
SOLUTION:
$−1$
:::

:::exercise {fs-id1167793219334} type= 
PROBLEM:
$h(x,y)={e}^{x}\text{sin}\;y,P(1,\frac{\pi}{2}),\mathbf{v}=\text{−}\mathbf{i}$
:::

:::exercise {fs-id1167793416709} type= 
PROBLEM:
$h(x,y,z)=xyz,P(2,1,1),\mathbf{v}=2\mathbf{i}+\mathbf{j}-\mathbf{k}$
SOLUTION:
$\frac{2}{\sqrt{6}}$
:::

:::exercise {fs-id1167793616173} type= 
PROBLEM:
$f(x,y)=xy,P(1,1),\mathbf{u}=\langle \frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\rangle$
:::

:::exercise {fs-id1167793957299} type= 
PROBLEM:
$f(x,y)={x}^{2}-{y}^{2},\begin{array}{ll}\mathbf{u}=\langle \frac{\sqrt{3}}{2},\frac{1}{2}\rangle , & P(1,0)\end{array}$
SOLUTION:
$\sqrt{3}$
:::

:::exercise {fs-id1167793393705} type= 
PROBLEM:
$f(x,y)=3x+4y+7,\begin{array}{ll}\mathbf{u}=\langle \frac{3}{5},\frac{4}{5}\rangle , & P(0,\frac{\pi}{2})\end{array}$
:::

:::exercise {fs-id1167793504938} type= 
PROBLEM:
$\begin{array}{lll}f(x,y)={e}^{x}\text{cos}\;y, & \mathbf{u}=\langle 0,1\rangle , & P=(0,\frac{\pi}{2})\end{array}$
SOLUTION:
$−1.0$
:::

:::exercise {fs-id1167793443100} type= 
PROBLEM:
$\begin{array}{lll}f(x,y)={y}^{10}, & \mathbf{u}=\langle 0,−1\rangle , & P=(1,−1)\end{array}$
:::

:::exercise {fs-id1167794137106} type= 
PROBLEM:
$f(x,y)=\text{ln}({x}^{2}+{y}^{2}),\begin{array}{ll}\mathbf{u}=\langle \frac{3}{5},\frac{4}{5}\rangle , & P(1,2)\end{array}$
SOLUTION:
$\frac{22}{25}$
:::

:::exercise {fs-id1167793589749} type= 
PROBLEM:
$f(x,y)={x}^{2}y,\begin{array}{ll}P(−5,5), & \mathbf{v}=3\mathbf{i}-4\mathbf{j}\end{array}$
:::

:::exercise {fs-id1167793629442} type= 
PROBLEM:
$f(x,y,z)={y}^{2}+xz,\begin{array}{ll}P(1,2,2), & \mathbf{v}=\langle 2,−1,2\rangle \end{array}$
SOLUTION:
$\frac{2}{3}$
:::
For the following exercises, find the directional derivative of the function in the direction of the unit vector $\mathbf{u}=\text{cos}\;\theta \mathbf{i}+\text{sin}\;\theta \mathbf{j}.$

:::exercise {fs-id1167793373621} type= 
PROBLEM:
$f(x,y)={x}^{2}+2{y}^{2},\theta =\frac{\pi}{6}$
:::

:::exercise {fs-id1167793940059} type= 
PROBLEM:
$f(x,y)=\frac{y}{x+2y},\theta =-\frac{\pi}{4}$
SOLUTION:
$\frac{\text{−}\sqrt{2}(x+y)}{2{(x+2y)}^{2}}$
:::

:::exercise {fs-id1167794295798} type= 
PROBLEM:
$f(x,y)=\text{cos}(3x+y),\theta =\frac{\pi}{4}$
:::

:::exercise {fs-id1167793937380} type= 
PROBLEM:
$w(x,y)=y{e}^{x},\theta =\frac{\pi}{3}$
SOLUTION:
$\frac{{e}^{x}(y+\sqrt{3})}{2}$
:::

:::exercise {fs-id1167793374792} type= 
PROBLEM:
$\begin{array}{ll}f(x,y)=x\;\text{arctan}(y), & \theta =\frac{\pi}{2}\end{array}$
:::

:::exercise {fs-id1167793453307} type= 
PROBLEM:
$\begin{array}{ll}f(x,y)=\text{ln}(x+2y), & \theta =\frac{\pi}{3}\end{array}$
SOLUTION:
$\frac{1+2\sqrt{3}}{2(x+2y)}$
:::
For the following exercises, find the gradient.

:::exercise {fs-id1167793617804} type= 
PROBLEM:
Find the gradient of $f(x,y)=\frac{14-{x}^{2}-{y}^{2}}{3}.$ Then, find the gradient at point $P(1,2).$
:::

:::exercise {fs-id1167793628292} type= 
PROBLEM:
Find the gradient of $f(x,y,z)=xy+yz+xz$ at point $P(1,2,3).$
SOLUTION:
$\langle 5,4,3\rangle$
:::

:::exercise {fs-id1167794222299} type= 
PROBLEM:
Find the gradient of $f(x,y,z)$ at $P$ and the directional derivative in the direction of $\mathbf{u}\text{:}$ $f(x,y,z)=\text{ln}({x}^{2}+2{y}^{2}+3{z}^{2}),\begin{array}{ll}P(2,1,4), & \mathbf{u}=\frac{−3}{13}\mathbf{i}-\frac{4}{13}\mathbf{j}-\frac{12}{13}\mathbf{k}\end{array}.$
:::

:::exercise {fs-id1167793387139} type= 
PROBLEM:
$f(x,y,z)=4{x}^{5}{y}^{2}{z}^{3},\begin{array}{ll}P(2,−1,1), & \mathbf{u}=\frac{1}{3}\mathbf{i}+\frac{2}{3}\mathbf{j}-\frac{2}{3}\mathbf{k}\end{array}$
SOLUTION:
$−320$
:::
For the following exercises, find the directional derivative of the function at point $P$ in the direction of $Q.$

:::exercise {fs-id1167793941188} type= 
PROBLEM:
$f(x,y)={x}^{2}+3{y}^{2},\begin{array}{ll}P(1,1), & Q(4,5)\end{array}$
:::

:::exercise {fs-id1167793638095} type= 
PROBLEM:
$f(x,y,z)=\frac{y}{x+z},\begin{array}{ll}P(2,1,−1), & Q(−1,2,0)\end{array}$
SOLUTION:
$\frac{3}{\sqrt{11}}$
:::
For the following exercises, find the derivative of the function at $P$ in the direction of $\mathbf{u}.$

:::exercise {fs-id1167794327665} type= 
PROBLEM:
$f(x,y)=−7x+2y,\begin{array}{ll}P(2,−4), & \mathbf{u}=4\mathbf{i}-3\mathbf{j}\end{array}$
:::

:::exercise {fs-id1167793277646} type= 
PROBLEM:
$f(x,y)=\text{ln}(5x+4y),\begin{array}{ll}P(3,9), & \mathbf{u}=6\mathbf{i}+8\mathbf{j}\end{array}$
SOLUTION:
$\frac{31}{255}$
:::

:::exercise {fs-id1167793950096} type= 
PROBLEM:
**[T]** Use technology to sketch the level curve of $f(x,y)=4x-2y+3$ that passes through $P(1,2)$ and draw the gradient vector at $P.$
:::

:::exercise {fs-id1167793638293} type= 
PROBLEM:
**[T]** Use technology to sketch the level curve of $f(x,y)={x}^{2}+4{y}^{2}$ that passes through $P(−2,0)$ and draw the gradient vector at $P.$
SOLUTION:

> IMAGE {img:fs-id1167793418163} src=../../media/CNX_Calc_Figure_14_06_202.jpg
> alt: The top of half of an ellipse centered at the origin with major axis horizontal and of length 4 and minor axis 2. The point (–2, 0) is marked, and there is an arrow pointing out from it to the left marked –4i.

:::
For the following exercises, find the gradient vector at the indicated point.

:::exercise {fs-id1167794296471} type= 
PROBLEM:
$f(x,y)=x{y}^{2}-y{x}^{2},P(−1,1)$
:::

:::exercise {fs-id1167793586296} type= 
PROBLEM:
$f(x,y)=x{e}^{y}-\text{ln}(x),P(3,0)$
SOLUTION:
$\frac{2}{3}\mathbf{i}+3\mathbf{j}$
:::

:::exercise {fs-id1167793252262} type= 
PROBLEM:
$f(x,y,z)=xy-\text{ln}(z),P(2,−2,2)$
:::

:::exercise {fs-id1167794137009} type= 
PROBLEM:
$f(x,y,z)=x\sqrt{{y}^{2}+{z}^{2}},P(−2,−1,−1)$
SOLUTION:
$\sqrt{2}\mathbf{i}+\sqrt{2}\mathbf{j}+\sqrt{2}\mathbf{k}$
:::
For the following exercises, find the derivative of the function.

:::exercise {fs-id1167793219250} type= 
PROBLEM:
$f(x,y)={x}^{2}+xy+{y}^{2}$ at point $(−5,−4)$ in the direction the function increases most rapidly
:::

:::exercise {fs-id1167793268124} type= 
PROBLEM:
$f(x,y)={e}^{xy}$ at point $(6,7)$ in the direction the function increases most rapidly
SOLUTION:
$1.6({10}^{19})$
:::

:::exercise {fs-id1167793449672} type= 
PROBLEM:
$f(x,y)=\text{arctan}(\frac{y}{x})$ at point $(−9,9)$ in the direction the function increases most rapidly
:::

:::exercise {fs-id1167793930170} type= 
PROBLEM:
$f(x,y,z)=\text{ln}(xy+yz+zx)$ at point $(−9,−18,−27)$ in the direction the function increases most rapidly
SOLUTION:
$\frac{5\sqrt{2}}{99}$
:::

:::exercise {fs-id1167793887451} type= 
PROBLEM:
$f(x,y,z)=\frac{x}{y}+\frac{y}{z}+\frac{z}{x}$ at point $(5,−5,5)$ in the direction the function increases most rapidly
:::
For the following exercises, find the maximum rate of change of $f$ at the given point and the direction in which it occurs.

:::exercise {fs-id1167793929056} type= 
PROBLEM:
$f(x,y)=x{e}^{\text{−}y},$ $(1,0)$
SOLUTION:
$\sqrt{2},\langle 1,-1\rangle$
:::

:::exercise {fs-id1167794076114} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+2y},$ $(4,10)$
:::

:::exercise {fs-id1167794293188} type= 
PROBLEM:
$f(x,y)=\text{cos}(3x+2y),(\frac{\pi}{6},-\frac{\pi}{8})$
SOLUTION:
$\sqrt{\frac{13}{2}},\langle −3,−2\rangle$
:::
For the following exercises, find equations of
a. the tangent plane and
b. the normal line to the given surface at the given point.

:::exercise {fs-id1167793409845} type= 
PROBLEM:
The level surface $f(x,y,z)=12$ for $f(x,y,z)=4{x}^{2}-2{y}^{2}+{z}^{2}$ at point $(2,2,2).$
:::

:::exercise {fs-id1167793941435} type= 
PROBLEM:
$f(x,y,z)=xy+yz+xz=3$ at point $(1,1,1)$
SOLUTION:
a. $x+y+z=3,$ b. $x-1=y-1=z-1$
:::

:::exercise {fs-id1167794049156} type= 
PROBLEM:
$f(x,y,z)=xyz=6$ at point $(1,2,3)$
:::

:::exercise {fs-id1167793929431} type= 
PROBLEM:
$f(x,y,z)=x{e}^{y}\text{cos}\;z-z=1$ at point $(1,0,0)$
SOLUTION:
a. $x+y-z=1,$ b. $x-1=y=\text{−}z$
:::
For the following exercises, solve the problem.

:::exercise {fs-id1167793638838} type= 
PROBLEM:
The temperature $T$ in a metal sphere is inversely proportional to the distance from the center of the sphere (the origin: $(0,0,0)).$ The temperature at point $(1,2,2)$ is $120\text{°}\text{C}.$
a. Find the rate of change of the temperature at point $(1,2,2)$ in the direction toward point $(2,1,3).$
b. Show that, at any point in the sphere, the direction of greatest increase in temperature is given by a vector that points toward the origin.
:::

:::exercise {fs-id1167793433537} type= 
PROBLEM:
The {index:electrical potential} (voltage) in a certain region of space is given by the function $V(x,y,z)=5{x}^{2}-3xy+xyz.$
a. Find the rate of change of the voltage at point $(3,4,5)$ in the direction of the vector $\langle 1,1,−1\rangle .$
b. In which direction does the voltage change most rapidly at point $(3,4,5)?$
c. What is the maximum rate of change of the voltage at point $(3,4,5)?$
SOLUTION:
a. $\frac{32}{\sqrt{3}},$ b. $\langle 38,6,12\rangle ,$ c. $2\sqrt{406}$
:::

:::exercise {fs-id1167794200557} type= 
PROBLEM:
If the electric potential at a point $(x,y)$ in the *xy*-plane is $V(x,y)={e}^{−2x}\text{cos}(2y),$ then the electric intensity vector at $(x,y)$ is $\mathbf{E}=\text{−}\nabla V(x,y).$
a. Find the electric intensity vector at $(\frac{\pi}{4},0).$
b. Show that, at each point in the plane, the electric potential decreases most rapidly in the direction of the vector $\mathbf{E}.$
:::

:::exercise {fs-id1167793992374} type= 
PROBLEM:
In two dimensions, the motion of an ideal fluid is governed by a velocity potential $φ.$ The velocity components of the fluid $u$ in the *x-*direction and $v$ in the *y*-direction, are given by $\langle u,v\rangle =\nabla φ.$ Find the velocity components associated with the velocity potential $φ(x,y)=\text{sin}\;\pi x\;\text{sin}\;2\pi y.$
SOLUTION:
$\langle u,v\rangle =\langle \pi \;\text{cos}(\pi x)\text{sin}(2\pi y),2\pi \;\text{sin}(\pi x)\text{cos}(2\pi y)\rangle$
:::

## Glossary
- {def} **directional derivative**: the derivative of a function in the direction of a given unit vector
- {def} **gradient**: the gradient of the function $f(x,y)$ is defined to be $\nabla f(x,y)=(\partial f\text{/}\partial x)\mathbf{i}+(\partial f\text{/}\partial y)\mathbf{j},$ which can be generalized to a function of any number of independent variables

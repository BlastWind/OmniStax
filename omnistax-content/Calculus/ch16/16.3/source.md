# Conservative Vector Fields

## Learning Objectives {section:learning-objectives}
- Describe simple and closed curves; define connected and simply connected regions.
- Explain how to find a potential function for a conservative vector field.
- Use the Fundamental Theorem for Line Integrals to evaluate a line integral in a vector field.
- Explain how to test a vector field to determine whether it is conservative.

In this section, we continue the study of conservative vector fields. We examine the Fundamental Theorem for Line Integrals, which is a useful generalization of the Fundamental Theorem of Calculus to line integrals of conservative vector fields. We also show how to test whether a given vector field is conservative, and determine how to build a potential function for a vector field known to be conservative.

## Curves and Regions
Before continuing our study of conservative vector fields, we need some geometric definitions. The theorems in the subsequent sections all rely on integrating over certain kinds of curves and regions, so we develop the definitions of those curves and regions here.
We first define two special kinds of curves: closed curves and simple curves. As we have learned, a closed curve is one that begins and ends at the same point. A simple curve is one that does not cross itself. A curve that is both closed and simple is a simple closed curve ([ref:CNX_Calc_Figure_16_03_001]).

:::note [definition] Definition
Curve *C* is a {term:closed curve} if there is a parameterization $\textbf{r}(t),a\le t\le b$ of *C* such that the parameterization traverses the curve exactly once and $\textbf{r}(a)=\textbf{r}(b).$ Curve *C* is a {term:simple curve} if *C* does not cross itself. That is, *C* is simple if there exists a parameterization $\textbf{r}(t),a\le t\le b$ of *C* such that **r** is one-to-one over $(a,b).$ It is possible for $\textbf{r}(a)=\textbf{r}(b),$ meaning that the simple curve is also closed.
:::

> FIGURE {fig:CNX_Calc_Figure_16_03_001} src=../../media/CNX_Calc_Figure_16_03_001.jpg
> alt: An image showing eight curves and their types. The first curve is neither simple nor closed; it has two endpoints and crosses itself twice. The second curve is simple but not closed; it does not cross itself and has two endpoints. The third curve is closed but is not simple; it crosses itself a few times. The fourth is a simple closed curve; it does not cross itself and has no endpoints. The fifth is a simple, not closed curve; it does not cross itself, but it has endpoints. The sixth is a simple, closed curve; it does not cross itself and has no endpoints. The seventh is closed but not a simple curve; it crosses itself but has no endpoints. The last is not simple and not closed; it crosses itself and has endpoints.
> caption: Types of curves that are simple or not simple and closed or not closed.

:::example {ex:fs-id1167793450215} Determining Whether a Curve Is Simple and Closed

:::exercise {fs-id1167793510149} type= 
PROBLEM:
Is the curve with parameterization $\textbf{r}(t)=\langle \text{cos}\;t,\frac{\text{sin}(2t)}{2}\rangle ,0\le t\le 2\pi$ a simple closed curve?
SOLUTION:
Note that $\textbf{r}(0)=\langle 1,0\rangle =\textbf{r}(2\pi );$ therefore, the curve is closed. The curve is not simple, however. To see this, note that $\textbf{r}(\frac{\pi}{2})=\langle 0,0\rangle =\textbf{r}(\frac{3\pi}{2}),$ and therefore the curve crosses itself at the origin ([ref:CNX_Calc_Figure_16_03_002]).

> FIGURE {fig:CNX_Calc_Figure_16_03_002} src=../../media/CNX_Calc_Figure_16_03_002.jpg
> alt: A diagram in the (x,y) coordinate plane that shows a closed but not simple curve. It looks like a horizontal figure eight with the crossing point at the origin.
> caption: A curve that is closed but not simple.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794211051} type= 
PROBLEM:
Is the curve given by parameterization $\textbf{r}(t)=\langle 2\;\text{cos}\;t,3\;\text{sin}\;t\rangle ,0\le t\le 6\pi ,$ a simple closed curve?
SOLUTION:
Yes
COMMENTARY: Hint
Sketch the curve.
:::
:::
Many of the theorems in this chapter relate an integral over a region to an integral over the boundary of the region, where the region’s boundary is a simple closed curve or a union of simple closed curves. To develop these theorems, we need two geometric definitions for regions: that of a connected region and that of a simply connected region. A connected region is one in which there is a path in the region that connects any two points that lie within that region. A simply connected region is a connected region that does not have any holes in it. These two notions, along with the notion of a simple closed curve, allow us to state several generalizations of the Fundamental Theorem of Calculus later in the chapter. These two definitions are valid for regions in any number of dimensions, but we are only concerned with regions in two or three dimensions.

:::note [definition] Definition
A region *D* is a {term:connected region} if, for any two points ${P}_{1}$ and ${P}_{2},$ there is a path from ${P}_{1}$ to ${P}_{2}$ with a trace contained entirely inside *D*. A region *D* is a {term:simply connected region} if *D* is connected for any simple closed curve *C* that lies inside *D*, and curve *C* can be shrunk continuously to a point while staying entirely inside *D*. In two dimensions, a region is simply connected if it is connected and has no holes.
:::
All simply connected regions are connected, but not all connected regions are simply connected ([ref:CNX_Calc_Figure_16_03_003]).

> FIGURE {fig:CNX_Calc_Figure_16_03_003} src=../../media/CNX_Calc_Figure_16_03_003.jpg
> alt: A diagram showing simply connected, connected, and not connected regions. The simply connected regions have no holes. The connected regions may have holes, but a path can still be found between any two points in the region. The not connected region has some points that cannot be connected by a path in the region. Here, this is illustrated by showing two circular shapes that are defined as part of region D1 but are separated by white space.
> caption: Not all connected regions are simply connected. (a) Simply connected regions have no holes. (b) Connected regions that are not simply connected may have holes but you can still find a path in the region between any two points. (c) A region that is not connected has some points that cannot be connected by a path in the region.

:::note [checkpoint] 

:::exercise {fs-id1167793939349} type= 
PROBLEM:
Is the region in the below image connected? Is the region simply connected?

> IMAGE {img:fs-id1167793930624} src=../../media/CNX_Calc_Figure_16_03_004.jpg
> alt: A shaded circle with an open space in the shape of a circle inside it but very close to the boundary.

SOLUTION:
The region in the figure is connected. The region in the figure is not simply connected.
COMMENTARY: Hint
Consider the definitions.
:::
:::

## Fundamental Theorem for Line Integrals
Now that we understand some basic curves and regions, let’s generalize the Fundamental Theorem of Calculus to line integrals. Recall that the Fundamental Theorem of Calculus says that if a function $f$ has an antiderivative *F*, then the integral of $f$ from *a* to *b* depends only on the values of *F* at *a* and at *b*—that is,

$\int_{a}^{b}f(x)dx=\text{F}(b)-\text{F}(a).$  {eq:fs-id1167794036700}

If we think of the gradient as a derivative, then the same theorem holds for vector line integrals. We show how this works using a motivational example.

:::example {ex:fs-id1167793870743} Evaluating a Line Integral and the Antiderivatives of the Endpoints

:::exercise {fs-id1167793384952} type= 
PROBLEM:
Let $\textbf{F}(x,y)=\langle 2x,4y\rangle .$ Calculate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$ where *C* is the line segment from (0,0) to (2,2)([ref:CNX_Calc_Figure_16_03_005]).
SOLUTION:
We use [ref:fs-id1167793635294](module:m54012) to calculate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}.}$ Curve *C* can be parameterized by $\textbf{r}(t)=\langle 2t,2t\rangle ,0\le t\le 1.$ Then, $\textbf{F}(\textbf{r}(t))=\langle 4t,8t\rangle$ and ${\textbf{r}}^{'}(t)=\langle 2,2\rangle ,$ which implies that

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{0}^{1}\langle 4t,8t\rangle}\cdot \langle 2,2\rangle dt \\ & ={\displaystyle \int_{0}^{1}(8t+16t)}dt={\displaystyle \int_{0}^{1}24t\;dt} \\ & ={[12{t}^{2}]}_{0}^{1}=12.\end{array}$  {eq:fs-id1167793892768}

> FIGURE {fig:CNX_Calc_Figure_16_03_005} src=../../media/CNX_Calc_Figure_16_03_005.jpg
> alt: A vector field in two dimensions. The arrows are longer the further away from the origin they are. They stretch out from the origin, forming a rectangular pattern. A line segment is drawn from P_0 at (0,0) to P_1 at (2,2).
> caption: The value of line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ depends only on the value of the potential function of **F** at the endpoints of the curve.

Notice that $F=\text{∇}f,$ where $f(x,y)={x}^{2}+2{y}^{2}.$ If we think of the gradient as a derivative, then $f$ is an “antiderivative” of **F**. In the case of single-variable integrals, the integral of derivative ${g}^{'}(x)$ is $g(b)-g(a),$ where *a* is the start point of the interval of integration and *b* is the endpoint. If vector line integrals work like single-variable integrals, then we would expect integral **F** to be $f({P}_{1})-f({P}_{0}),$ where ${P}_{1}$ is the endpoint of the curve of integration and ${P}_{0}$ is the start point. Notice that this is the case for this example:

${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}={\displaystyle \int_{C}\text{∇}f.d\textbf{r}=12}}$  {eq:fs-id1167794038138}

and

$f(2,2)-f(0,0)=4+8-0=12.$  {eq:fs-id1167793267233}

In other words, the integral of a “derivative” can be calculated by evaluating an “antiderivative” at the endpoints of the curve and subtracting, just as for single-variable integrals.
:::
:::
The following theorem says that, under certain conditions, what happened in the previous example holds for any gradient field. The same theorem holds for vector line integrals, which we call the {term:Fundamental Theorem for Line Integrals.}

:::note [theorem] The Fundamental Theorem for Line Integrals
Let *C* be a piecewise smooth curve with parameterization $\textbf{r}(t),a\le t\le b.$ Let $f$ be a function of two or three variables with first-order partial derivatives that exist and are continuous on *C*. Then,

$$ {\displaystyle \int_{C}\text{∇}f.d\textbf{r}=f(\textbf{r}(b))-f(\textbf{r}(a)).} $$  {eq:fs-id1167794058636}

:::

### Proof
By [ref:fs-id1167793635294](module:m54012),

${\displaystyle \int_{C}\text{∇}f.d\textbf{r}={\displaystyle \int_{a}^{b}\text{∇}f(\textbf{r}(t)).{\textbf{r}}^{'}(t)dt.}}$  {eq:fs-id1167793896051}

By the chain rule,

$\frac{d}{dt}(f(\textbf{r}(t))=\text{∇}f(\textbf{r}(t)).{\textbf{r}}^{'}(t).$  {eq:fs-id1167794139416}

Therefore, by the Fundamental Theorem of Calculus,

$\begin{array}{rl}{\displaystyle \int_{C}\nabla}f.d\textbf{r} & ={\displaystyle \int_{a}^{b}\text{∇}f(\textbf{r}(t)).{\textbf{r}}^{'}(t)dt} \\ & ={\displaystyle \int_{a}^{b}\frac{d}{dt}(f(\textbf{r}(t))dt} \\ & ={[f(\textbf{r}(t))]}_{t=a}^{t=b} \\ & =f(\textbf{r}(b))-f(\textbf{r}(a)).\end{array}$  {eq:fs-id1167793935993}

□
We know that if **F** is a conservative vector field, there are potential functions $f$ such that $\text{∇}f=\textbf{F}.$ Therefore ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}=f(\textbf{r}(b))-f(\textbf{r}(a)).$ In other words, just as with the Fundamental Theorem of Calculus, computing the line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where **F** is conservative, is a two-step process: (1) find a potential function (“antiderivative”) $f$ for **F** and (2) compute the value of $f$ at the endpoints of *C* and calculate their difference $f(\textbf{r}(b))-f(\textbf{r}(a)).$ Keep in mind, however, there is one major difference between the Fundamental Theorem of Calculus and the Fundamental Theorem for Line Integrals. *A function of one variable that is continuous must have an antiderivative. However, a vector field, even if it is continuous, does not need to have a potential function.*

:::example {ex:fs-id1167793547524} Applying the Fundamental Theorem

:::exercise {fs-id1167794173555} type= 
PROBLEM:
Calculate integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$ where $\textbf{F}(x,y,z)=\langle 2x\;\text{ln}\;y,\frac{{x}^{2}}{y}+{z}^{2},2yz\rangle$ and *C* is a curve with parameterization $\textbf{r}(t)=\langle {t}^{2},t,t\rangle ,1\le t\le e$
a. without using the Fundamental Theorem of Line Integrals and
b. using the Fundamental Theorem of Line Integrals.
SOLUTION:
a. First, let’s calculate the integral without the Fundamental Theorem for Line Integrals and instead use [ref:fs-id1167793635294](module:m54012):

$\begin{array}{ll}\int_{C}\text{F}\cdot d\text{r} & =\int_{1}^{e}\text{F}(\text{r}(t)).{\text{r}}^{'}(t)dt \\ & =\int_{1}^{e}\langle 2{t}^{2}\text{ln}\;t,\frac{{t}^{4}}{t}+{t}^{2},2{t}^{2}\rangle .\langle 2t,1,1\rangle dt \\ & =\int_{1}^{e}(4{t}^{3}\text{ln}\;t+{t}^{3}+3{t}^{2})dt \\ & =\int_{1}^{e}4{t}^{3}\text{ln}\;tdt+\int_{1}^{e}({t}^{3}+3{t}^{2})dt \\ & =\int_{1}^{e}4{t}^{3}\text{ln}\;tdt+{[\frac{{t}^{4}}{4}+{t}^{3}]}_{1}^{e} \\ & =2\int_{1}^{e}{t}^{3}\text{ln}\;tdt+\frac{{e}^{4}}{4}+{e}^{3}-\frac{5}{4}.\end{array}$  {eq:fs-id1167793912263}

Integral ${\displaystyle \int_{1}^{e}{t}^{3}\text{ln}\;tdt}$ requires integration by parts. Let $u=\text{ln}\;t$ and $dv={t}^{3}.$ Then $u=\text{ln}\;t,dv={t}^{3}$

and

$du=\frac{1}{t}dt,v=\frac{{t}^{4}}{4}.$  {eq:fs-id1167793620013}

Therefore,

$\begin{array}{rl}{\displaystyle \int_{1}^{e}{t}^{3}\text{ln}\;tdt} & ={[\frac{{t}^{4}}{4}\text{ln}\;t]}_{1}^{e}-\frac{1}{4}{\displaystyle \int_{1}^{e}{t}^{3}dt} \\ & =\frac{{e}^{4}}{4}-\frac{1}{4}(\frac{{e}^{4}}{4}-\frac{1}{4}).\end{array}$  {eq:fs-id1167793977267}

Thus,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot dr & =4{\displaystyle \int_{1}^{e}{t}^{3}\text{ln}\;tdt+\frac{{e}^{4}}{4}+{e}^{3}-\frac{5}{4}} \\ & =4(\frac{{e}^{4}}{4}-\frac{1}{4}(\frac{{e}^{4}}{4}-\frac{1}{4}))+\frac{{e}^{4}}{4}+{e}^{3}-\frac{5}{4} \\ & ={e}^{4}-\frac{{e}^{4}}{4}+\frac{1}{4}+\frac{{e}^{4}}{4}+{e}^{3}-\frac{5}{4} \\ & ={e}^{4}+{e}^{3}-1.\end{array}$  {eq:fs-id1167793419427}

b. Given that $f(x,y,z)={x}^{2}\text{ln}\;y+y{z}^{2}$ is a potential function for **F**, let’s use the Fundamental Theorem for Line Integrals to calculate the integral. Note that

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r} & ={\displaystyle \int_{C}\text{∇}f.d\textbf{r}} \\ & =f(\textbf{r}(e))-f(\textbf{r}(1)) \\ & =f({e}^{2},e,e)-f(1,1,1) \\ & ={e}^{4}+{e}^{3}-1.\end{array}$  {eq:fs-id1167793828376}

This calculation is much more straightforward than the calculation we did in (a). As long as we have a potential function, calculating a line integral using the Fundamental Theorem for Line Integrals is much easier than calculating without the theorem.
:::
:::
[ref:fs-id1167793547524] illustrates a nice feature of the Fundamental Theorem of Line Integrals: it allows us to calculate more easily many vector line integrals. As long as we have a potential function, calculating the line integral is only a matter of evaluating the potential function at the endpoints and subtracting.

:::note [checkpoint] 

:::exercise {fs-id1167793863128} type= 
PROBLEM:
Given that $f(x,y)={(x-1)}^{2}y+{(y+1)}^{2}x$ is a potential function for $\textbf{F}=\langle 2xy-2y+{(y+1)}^{2},{(x-1)}^{2}+2yx+2x\rangle ,$ calculate integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where *C* is the lower half of the unit circle oriented counterclockwise.

> IMAGE {img:fs-id1167794123160} src=../../media/CNX_Calc_Figure_16_03_006.jpg
> alt: A vector field in two dimensions. The arrows near the origin are the shortest, and the arrows in the upper right and lower left corners of quadrants 1 and 3 are the shortest. The arrows go up and to the left in quadrants 1 and 3. In quadrant 2, the arrows stretch up and to the right for values greater than x=-1. The closer the arrows are to y=1, the more horizontal they become. For values less than x=-1, the arrows point up and form a curve to the left. The closer the arrows are to y=1, the more horizontal they become. Above y=1, it looks like the arrows are shifting from vertical, going down to horizontal. In quadrant 4, the arrows go up and to the right fairly regularly, but they tend to be curving to the right the larger the x value becomes. For y values less than -1, the arrows shift from pointing up to pointing down, following x=1. The lower half of the unit circle with center at the origin is drawn in quadrants 3 and 4.

SOLUTION:
2
COMMENTARY: Hint
The Fundamental Theorem for Line Intervals says this integral depends only on the value of $f$ at the endpoints of *C*.
:::
:::
The Fundamental Theorem for Line Integrals has two important consequences. The first consequence is that if **F** is conservative and *C* is a closed curve, then the circulation of **F** along *C* is zero—that is, ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=0.$ To see why this is true, let $f$ be a potential function for **F**. Since *C* is a closed curve, the terminal point **r**(b) of *C* is the same as the initial point **r**(a) of *C*—that is, $\textbf{r}(a)=\textbf{r}(b).$ Therefore, by the Fundamental Theorem for Line Integrals,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}} \\ & =f(\textbf{r}(b))-f(\textbf{r}(a)) \\ & =f(\textbf{r}(b))-f(\textbf{r}(b)) \\ & =0.\end{array}$  {eq:fs-id1167793932620}

Recall that the reason a conservative vector field **F** is called “conservative” is because such vector fields model forces in which energy is conserved. We have shown gravity to be an example of such a force. If we think of vector field **F** in integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ as a gravitational field, then the equation ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=0$ follows. If a particle travels along a path that starts and ends at the same place, then the work done by gravity on the particle is zero.
The second important consequence of the Fundamental Theorem for Line Integrals is that line integrals of conservative vector fields are independent of path—meaning, they depend only on the endpoints of the given curve, and do not depend on the path between the endpoints.

:::note [definition] Definition
Let **F** be a vector field with domain *D*. The vector field **F** is {term:independent of path} (or {term:path independent}) if ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}}$ for any paths ${C}_{1}$ and ${C}_{2}$ in *D* with the same initial and terminal points.
:::
The second consequence is stated formally in the following theorem.

:::note [theorem] Path Independence of Conservative Fields
If **F** is a conservative vector field, then **F** is independent of path.
:::

### Proof
Let *D* denote the domain of **F** and let ${C}_{1}$ and ${C}_{2}$ be two paths in *D* with the same initial and terminal points ([ref:CNX_Calc_Figure_16_03_007]). Call the initial point ${P}_{1}$ and the terminal point ${P}_{2}.$ Since **F** is conservative, there is a potential function $f$ for **F**. By the Fundamental Theorem for Line Integrals,

${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}=f({P}_{2})-f({P}_{1})={\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793834495}

Therefore, ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}}$ and **F** is independent of path.
□

> FIGURE {fig:CNX_Calc_Figure_16_03_007} src=../../media/CNX_Calc_Figure_16_03_007.jpg
> alt: A vector field in two dimensions. The arrows are shorter the closer to the x axis and line x=1.5 they become. The arrows point up, converging around x=1.5 in quadrant 1. That line is approached from the left and from the right. Below, in quadrant 4, the arrows in the rough interval [1,2.5] curve out, away from the given line x=1.5, but do turn back in and converge to x=1.5 above the x axis. Outside of that interval, the arrows go to the left and right horizontally for x values less than 1 and greater than 2.5, respectively. A line is drawn from P_1 at the origin to P_2 at (3,.75) and labeled C_2. C_1 is a simple curve that connects the given endpoints above C_2, C_3 is a simple curve that connects the given endpoints below C_2.
> caption: The vector field is conservative, and therefore independent of path.

To visualize what independence of path means, imagine three hikers climbing from base camp to the top of a mountain. Hiker 1 takes a steep route directly from camp to the top. Hiker 2 takes a winding route that is not steep from camp to the top. Hiker 3 starts by taking the steep route but halfway to the top decides it is too difficult for him. Therefore he returns to camp and takes the non-steep path to the top. All three hikers are traveling along paths in a gravitational field. Since gravity is a force in which energy is conserved, the gravitational field is conservative. By independence of path, the total amount of work done by gravity on each of the hikers is the same because they all started in the same place and ended in the same place. The work done by the hikers includes other factors such as friction and muscle movement, so the total amount of energy each one expended is not the same, but the net energy expended against gravity is the same for all three hikers.
We have shown that if **F** is conservative, then **F** is independent of path. It turns out that if the domain of **F** is open and connected, then the converse is also true. That is, if **F** is independent of path and the domain of **F** is open and connected, then **F** is conservative. Therefore, the set of conservative vector fields on open and connected domains is precisely the set of vector fields independent of path.

:::note [theorem] The Path Independence Test for Conservative Fields
If **F** is a continuous vector field that is independent of path and the domain *D* of **F** is open and connected, then **F** is conservative.
:::

### Proof
We prove the theorem for vector fields in ${\mathbb{R}}^{2}.$ The proof for vector fields in ${\mathbb{R}}^{3}$ is similar. To show that $\textbf{F}=\langle P,Q\rangle$ is conservative, we must find a potential function $f$ for **F**. To that end, let *X* be a fixed point in *D*. For any point $(x,y)$ in *D*, let *C* be a path from *X* to $(x,y).$ Define $f$ $(x,y)$ by $f(x,y)={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}.}$ (Note that this definition of $f$ makes sense only because **F** is independent of path. If **F** was not independent of path, then it might be possible to find another path ${C}^{'}$ from *X* to $(x,y)$ such that ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}≠{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ and in such a case $f$ $(x,y)$ would not be a function.) We want to show that $f$ has the property $\text{∇}f=\textbf{F}.$
Since domain *D* is open, it is possible to find a disk centered at $(x,y)$ such that the disk is contained entirely inside *D*. Let $(a,y)$ with $a<x$ be a point in that disk. Let *C* be a path from *X* to $(x,y)$ that consists of two pieces: ${C}_{1}$ and ${C}_{2}.$ The first piece, ${C}_{1},$ is any path from *X* to $(a,y)$ that stays inside *D*; ${C}_{2}$ is the horizontal line segment from $(a,y)$ to $(x,y)$ ([ref:CNX_Calc_Figure_16_03_008]). Then

$f(x,y)={\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}.}$  {eq:fs-id1167793948700}

The first integral does not depend on *x*, so

${f}_{x}=\frac{\partial}{\partial x}{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}.}$  {eq:fs-id1167793547206}

If we parameterize ${C}_{2}$ by $\textbf{r}(t)=\langle t,y\rangle ,a\le t\le x,$ then

$\begin{array}{ll}{f}_{x} & =\frac{\partial}{\partial x}\int_{{C}_{2}}\text{F}\cdot d\text{r} \\ & =\frac{\partial}{\partial x}\int_{a}^{x}\text{F}(\text{r}(t)).{\text{r}}^{'}(t)dt \\ & =\frac{\partial}{\partial x}\int_{a}^{x}\text{F}(\text{r}(t)).\frac{d}{dt}(\langle t,y\rangle )dt \\ & =\frac{\partial}{\partial x}\int_{a}^{x}\text{F}(\text{r}(t)).\langle 1,0\rangle dt \\ & =\frac{\partial}{\partial x}\int_{a}^{x}P(t,y)dt.\end{array}$  {eq:fs-id1167794292853}

By the Fundamental Theorem of Calculus (part 1),

${f}_{x}=\frac{\partial}{\partial x}{\displaystyle \int_{a}^{x}P}(t,y)dt=P(x,y).$  {eq:fs-id1167794141002}

> FIGURE {fig:CNX_Calc_Figure_16_03_008} src=../../media/CNX_Calc_Figure_16_03_008.jpg
> alt: A diagram of a region D in the rough shape of a backwards C. It is a simply connected region formed by a closed curve. Another curve C_1 is drawn inside D from point X to (a,y). C_2 is a horizontal line segment drawn from (a,y) to (x,y). Arrowheads point to (a,y) on C_1 and to (x,y) on C_2.
> caption: Here, ${C}_{1}$ is any path from *X* to $(a,y)$ that stays inside *D*, and ${C}_{2}$ is the horizontal line segment from $(a,y)$ to $(x,y).$

A similar argument using a vertical line segment rather than a horizontal line segment shows that ${f}_{y}=Q(x,y).$
Therefore $\text{∇}f=\textbf{F}$ and **F** is conservative.
□
We have spent a lot of time discussing and proving [ref:fs-id1167793950735] and [ref:fs-id1167793924910], but we can summarize them simply: a vector field **F** on an open and connected domain is conservative if and only if it is independent of path. This is important to know because conservative vector fields are extremely important in applications, and these theorems give us a different way of viewing what it means to be conservative using path independence.

:::example {ex:fs-id1167793414383} Showing That a Vector Field Is Not Conservative

:::exercise {fs-id1167793414386} type= 
PROBLEM:
Use path independence to show that vector field $\textbf{F}(x,y)=\langle {x}^{2}y,y+5\rangle$ is not conservative.
SOLUTION:
We can indicate that **F** is not conservative by showing that **F** is not path independent. We do so by giving two different paths, ${C}_{1}$ and ${C}_{2},$ that both start at $(0,0)$ and end at $(1,1),$ and yet ${\displaystyle \int_{{C}_{1}}\textbf{F}}\cdot dr≠{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}.}$
Let ${C}_{1}$ be the curve with parameterization ${\text{r}}_{1}(t)=\langle t,t\rangle ,0\le t\le 1$ and let ${C}_{2}$ be the curve with parameterization ${\text{r}}_{2}(t)=\langle t,{t}^{2}\rangle ,0\le t\le 1$ ([ref:CNX_Calc_Figure_16_03_009]). Then

$\begin{array}{rl}{\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\text{r}} & ={\displaystyle \int_{0}^{1}\textbf{F}({\text{r}}_{1}(t))\cdot {\text{r}}_{1}{}^{'}(t)dt} \\ & ={\displaystyle \int_{0}^{1}\langle {t}^{3},t+5\rangle \cdot \langle 1,1\rangle dt}={\displaystyle \int_{0}^{1}({t}^{3}+t+5)dt} \\ & ={[\frac{{t}^{4}}{4}+\frac{{t}^{2}}{2}+5t]}_{0}^{1}=\frac{23}{4}\end{array}$  {eq:fs-id1167793927026}

and

$\begin{array}{rl}{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\text{r}} & ={\displaystyle \int_{0}^{1}\textbf{F}({\text{r}}_{2}(t))\cdot {\text{r}}_{2}'(t)dt} \\ & ={\displaystyle \int_{0}^{1}\langle {t}^{4},{t}^{2}+5\rangle \cdot \langle 1,2t\rangle dt}={\displaystyle \int_{0}^{1}({t}^{4}+2{t}^{3}+10t)dt} \\ & ={[\frac{{t}^{5}}{5}+\frac{{t}^{4}}{2}+5{t}^{2}]}_{0}^{1}=\frac{57}{10}.\end{array}$  {eq:fs-id1167793925128}

Since ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}≠{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r},}$ the value of a line integral of **F** depends on the path between two given points. Therefore, **F** is not independent of path, and **F** is not conservative.

> FIGURE {fig:CNX_Calc_Figure_16_03_009} src=../../media/CNX_Calc_Figure_16_03_009.jpg
> alt: A vector field drawn in two dimensions. The arrows are roughly the same length. They point directly up but tend to shift to the right in the upper right portion of quadrant 1. Curves C_1 and C_2 connect the origin to point (1,1). They are both simple curves, and their arrowheads point to (1,1).
> caption: Curves ${C}_{1}$ and ${C}_{2}$ are both oriented from left to right.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793414726} type= 
PROBLEM:
Show that $\textbf{F}(x,y)=\langle xy,{x}^{2}{y}^{2}\rangle$ is not path independent by considering the line segment from $(0,0)$ to $(2,2)$ and the piece of the graph of $y=\frac{{x}^{2}}{2}$ that goes from $(0,0)$ to $(2,2).$
SOLUTION:
If ${C}_{1}$ and ${C}_{2}$ represent the two curves, then ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}≠{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}.}$
COMMENTARY: Hint
Calculate the corresponding line integrals.
:::
:::

## Conservative Vector Fields and Potential Functions
As we have learned, the Fundamental Theorem for Line Integrals says that if **F** is conservative, then calculating ${\displaystyle \int_{C}\textbf{F}\cdot dr}$ has two steps: first, find a potential function $f$ for **F** and, second, calculate $f({P}_{1})-f({P}_{0}),$ where ${P}_{1}$ is the endpoint of *C* and ${P}_{0}$ is the starting point. To use this theorem for a conservative field **F**, we must be able to find a potential function $f$ for **F**. Therefore, we must answer the following question: Given a conservative vector field **F**, how do we find a function $f$ such that $\text{∇}f=\textbf{F}?$ Before giving a general method for finding a potential function, let’s motivate the method with an example.

:::example {ex:fs-id1167794216012} Finding a Potential Function

:::exercise {fs-id1167794216014} type= 
PROBLEM:
Find a potential function for $\textbf{F}(x,y)=\langle 2x{y}^{3},3{x}^{2}{y}^{2}+\text{cos}(y)\rangle ,$ thereby showing that **F** is conservative.
SOLUTION:
Suppose that $f(x,y)$ is a potential function for **F**. Then, $\text{∇}f=\textbf{F},$ and therefore

${f}_{x}=2x{y}^{3}\;\text{and}\;{f}_{y}=3{x}^{2}{y}^{2}+\text{cos}\;y.$  {eq:fs-id1167794212581}

Integrating the equation ${f}_{x}=2x{y}^{3}$ with respect to *x* yields the equation

$f(x,y)={x}^{2}{y}^{3}+h(y).$  {eq:fs-id1167793953359}

Notice that since we are integrating a two-variable function with respect to *x*, we must add a constant of integration that is a constant with respect to *x*, but may still be a function of *y*. The equation $f(x,y)={x}^{2}{y}^{3}+h(y)$ can be confirmed by taking the partial derivative with respect to *x*:

$\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}({x}^{2}{y}^{3})+\frac{\partial}{\partial x}(h(y))=2x{y}^{3}+0=2x{y}^{3}.$  {eq:fs-id1167793276927}

Since $f$ is a potential function for **F**,

${f}_{y}=3{x}^{2}{y}^{2}+\text{cos}(y),$  {eq:fs-id1167793928385}

and therefore

$3{x}^{2}{y}^{2}+{h}^{'}(y)=3{x}^{2}{y}^{2}+\text{cos}(y).$  {eq:fs-id1167794126216}

This implies that $h'(y)=\text{cos}\;y,$ so $h(y)=\text{sin}\;y+C.$ Therefore, *any* function of the form $f(x,y)={x}^{2}{y}^{3}+\text{sin}(y)+C$ is a potential function. Taking, in particular, $C=0$ gives the potential function $f(x,y)={x}^{2}{y}^{3}+\text{sin}(y).$
To verify that $f$ is a potential function, note that $\text{∇}f=\langle 2x{y}^{3},3{x}^{2}{y}^{2}+\text{cos}\;y\rangle =\textbf{F}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793450271} type= 
PROBLEM:
Find a potential function for $\textbf{F}(x,y)=\langle {e}^{x}{y}^{3}+y,3{e}^{x}{y}^{2}+x\rangle .$
SOLUTION:
$f(x,y)={e}^{x}{y}^{3}+xy$
COMMENTARY: Hint
Follow the steps in [ref:fs-id1167794216012].
:::
:::
The logic of the previous example extends to finding the potential function for any conservative vector field in ${\mathbb{R}}^{2}.$ Thus, we have the following problem-solving strategy for finding potential functions:

:::note [problem-solving] Problem-Solving Strategy: Finding a Potential Function for a Conservative Vector Field $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle$
1. Integrate *P* with respect to *x*. This results in a function of the form $g(x,y)+h(y),$ where $h(y)$ is unknown.
2. Take the partial derivative of $g(x,y)+h(y)$ with respect to *y*, which results in the function ${g}_{y}(x,y)+{h}^{'}(y).$
3. Use the equation ${g}_{y}(x,y)+{h}^{'}(y)=Q(x,y)$ to find ${h}^{'}(y).$
4. Integrate ${h}^{'}(y)$ to find $h(y).$
5. Any function of the form $f(x,y)=g(x,y)+h(y)+C,$ where *C* is a constant, is a potential function for **F**.
:::
We can adapt this strategy to find potential functions for vector fields in ${\mathbb{R}}^{3},$ as shown in the next example.

:::example {ex:fs-id1167793625028} Finding a Potential Function in ${\mathbb{R}}^{3}$

:::exercise {fs-id1167794199895} type= 
PROBLEM:
Find a potential function for $\textbf{F}(x,y,z)=\langle 2xy,{x}^{2}+2y{z}^{3},3{y}^{2}{z}^{2}+2z\rangle ,$ thereby showing that $\textbf{F}$ is conservative.
SOLUTION:
Suppose that $f$ is a potential function. Then, $\text{∇}f=\textbf{F}$ and therefore ${f}_{x}=2xy.$ Integrating this equation with respect to *x* yields the equation $f(x,y,z)={x}^{2}y+g(y,z)$ for some function *g*. Notice that, in this case, the constant of integration with respect to *x* is a function of *y* and *z*.
Since $f$ is a potential function,

${x}^{2}+2y{z}^{3}={f}_{y}={x}^{2}+{g}_{y}.$  {eq:fs-id1167793631914}

Therefore,

${g}_{y}=2y{z}^{3}.$  {eq:fs-id1167793632722}

Integrating this function with respect to *y* yields

$g(y,z)={y}^{2}{z}^{3}+h(z)$  {eq:fs-id1167794210254}

for some function $h(z)$ of *z* alone. (Notice that, because we know that *g* is a function of only *y* and *z*, we do not need to write $g(y,z)={y}^{2}{z}^{3}+h(x,z).)$ Therefore,

$f(x,y,z)={x}^{2}y+g(y,z)={x}^{2}y+{y}^{2}{z}^{3}+h(z).$  {eq:fs-id1167793355189}

To find $f$, we now must only find *h*. Since $f$ is a potential function,

$3{y}^{2}{z}^{2}+2z={g}_{z}=3{y}^{2}{z}^{2}+{h}^{'}(z).$  {eq:fs-id1167793384486}

This implies that ${h}^{'}(z)=2z,$ so $h(z)={z}^{2}+C.$ Letting $C=0$ gives the potential function

$f(x,y,z)={x}^{2}y+{y}^{2}{z}^{3}+{z}^{2}.$  {eq:fs-id1167793505858}

To verify that $f$ is a potential function, note that $\text{∇}f=\langle 2xy,{x}^{2}+2y{z}^{3},3{y}^{2}{z}^{2}+2z\rangle =\textbf{F}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793504278} type= 
PROBLEM:
Find a potential function for $\textbf{F}(x,y,z)=\langle 12{x}^{2},\text{cos}\;y\;\text{cos}\;z,1-\text{sin}\;y\;\text{sin}\;z\rangle .$
SOLUTION:
$f(x,y,z)=4{x}^{3}+\text{sin}\;y\;\text{cos}\;z+z$
COMMENTARY: Hint
Following [ref:fs-id1167793625028], begin by integrating with respect to *x.*
:::
:::
We can apply the process of finding a potential function to a {index:gravitational force}. Recall that, if an object has unit mass and is located at the origin, then the gravitational force in ${\mathbb{R}}^{2}$ that the object exerts on another object of unit mass at the point $(x,y)$ is given by vector field

$\textbf{F}(x,y)=\text{−}G\langle \frac{x}{{({x}^{2}+{y}^{2})}^{3\text{/}2}},\frac{y}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}\rangle ,$  {eq:fs-id1167793469779}

where *G* is the universal gravitational constant. In the next example, we build a potential function for **F**, thus confirming what we already know: that gravity is conservative.

:::example {ex:fs-id1167793266888} Finding a Potential Function

:::exercise {fs-id1167793930025} type= 
PROBLEM:
Find a potential function $f$ for $\textbf{F}(x,y)=\text{−}G\langle \frac{x}{{({x}^{2}+{y}^{2})}^{3\text{/}2}},\frac{y}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}\rangle .$
SOLUTION:
Suppose that $f$ is a potential function. Then, $\text{∇}f=\textbf{F}$ and therefore

${f}_{x}=\frac{\text{−}Gx}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}.$  {eq:fs-id1167794314567}

To integrate this function with respect to *x,* we can use *u*-substitution. If $u={x}^{2}+{y}^{2},$ then $\frac{du}{2}=xdx,$ so

$\begin{array}{rl}{\displaystyle \int \frac{\text{−}Gx}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}}dx & ={\displaystyle \int \frac{\text{−}G}{2{u}^{3\text{/}2}}}du \\ & =\frac{G}{\sqrt{u}}+h(y) \\ & =\frac{G}{\sqrt{{x}^{2}+{y}^{2}}}+h(y)\end{array}$  {eq:fs-id1167793485257}

for some function $h(y).$ Therefore,

$f(x,y)=\frac{G}{\sqrt{{x}^{2}+{y}^{2}}}+h(y).$  {eq:fs-id1167793506018}

Since $f$ is a potential function for **F**,

${f}_{y}=\frac{\text{−}Gy}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}.$  {eq:fs-id1167793691811}

Since $f(x,y)=\frac{G}{\sqrt{{x}^{2}+{y}^{2}}}+h(y),$ ${f}_{y}$ also equals $\frac{\text{−}Gy}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}+{h}^{'}(y).$
Therefore,

$\frac{\text{−}Gy}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}+h'(y)=\frac{\text{−}Gy}{{({x}^{2}+{y}^{2})}^{3\text{/}2}},$  {eq:fs-id1167794200729}

which implies that ${h}^{'}(y)=0.$ Thus, we can take $h(y)$ to be any constant; in particular, we can let $h(y)=0.$ The function

$f(x,y)=\frac{G}{\sqrt{{x}^{2}+{y}^{2}}}$  {eq:fs-id1167793627506}

is a potential function for the gravitational field **F**. To confirm that $f$ is a potential function, note that

$\begin{array}{rl}\text{∇}f & =\langle -\frac{1}{2}\;\frac{G}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}(2x),-\frac{1}{2}\;\frac{G}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}(2y)\rangle \\ & =\langle \frac{\text{−}Gx}{{({x}^{2}+{y}^{2})}^{3\text{/}2}},\frac{\text{−}Gy}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}\rangle \\ & =\textbf{F}.\end{array}$  {eq:fs-id1167794200436}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793419787} type= 
PROBLEM:
Find a potential function $f$ for the three-dimensional gravitational force $\textbf{F}(x,y,z)=\langle \frac{\text{−}Gx}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},\frac{\text{−}Gy}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}},\frac{\text{−}Gz}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}}\rangle .$
SOLUTION:
$f(x,y,z)=\frac{G}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}$
COMMENTARY: Hint
Use the Problem-Solving Strategy.
:::
:::

## Testing a Vector Field
Until now, we have worked with vector fields that we know are conservative, but if we are not told that a vector field is conservative, we need to be able to test whether it is conservative. Recall that, if **F** is conservative, then **F** has the cross-partial property (see [ref:fs-id1167794327427](module:m53989)). That is, if $\textbf{F}=\langle P,Q,R\rangle$ is conservative, then ${P}_{y}={Q}_{x},{P}_{z}={R}_{x},$ and ${Q}_{z}={R}_{y}.$ So, if **F** has the cross-partial property, then is **F** conservative? If the domain of **F** is open and simply connected, then the answer is yes.

:::note [theorem] The Cross-Partial Test for Conservative Fields
If $\textbf{F}=\langle P,Q,R\rangle$ is a vector field on an open, simply connected region *D* and ${P}_{y}={Q}_{x},{P}_{z}={R}_{x},$ and ${Q}_{z}={R}_{y}$ throughout *D*, then **F** is conservative.
:::
Although a proof of this theorem is beyond the scope of the text, we can discover its power with some examples. Later, we see why it is necessary for the region to be simply connected.
Combining this theorem with the cross-partial property, we can determine whether a given vector field is conservative:

:::note [theorem] Cross-Partial Property of Conservative Fields
Let $\textbf{F}=\langle P,Q,R\rangle$ be a vector field on an open, simply connected region *D.* Then ${P}_{y}={Q}_{x},{P}_{z}={R}_{x},$ and ${Q}_{z}={R}_{y}$ throughout *D* if and only if **F** is conservative.
:::
The version of this theorem in ${\mathbb{R}}^{2}$ is also true. If $\textbf{F}=\langle P,Q\rangle$ is a vector field on an open, simply connected domain in ${\mathbb{R}}^{2},$ then **F** is conservative if and only if ${P}_{y}={Q}_{x}.$

:::example {ex:fs-id1167794091464} Determining Whether a Vector Field Is Conservative

:::exercise {fs-id1167794091466} type= 
PROBLEM:
Determine whether vector field $\textbf{F}(x,y,z)=\langle x{y}^{2}z,{x}^{2}yz,{z}^{2}\rangle$ is conservative.
SOLUTION:
Note that the domain of **F** is all of ${\mathbb{R}}^{2}$ and ${\mathbb{R}}^{3}$ is simply connected. Therefore, we can use [ref:fs-id1167793945282] to determine whether **F** is conservative. Let

$P(x,y,z)=x{y}^{2}z,Q(x,y,z)={x}^{2}yz,\;\text{and}\;R(x,y,z)={z}^{2}.$  {eq:fs-id1167793641865}

Since ${Q}_{z}={x}^{2}y$ and ${R}_{y}=0,$ the vector field is not conservative.
:::
:::

:::example {ex:fs-id1167793705635} Determining Whether a Vector Field Is Conservative

:::exercise {fs-id1167793705637} type= 
PROBLEM:
Determine vector field $\textbf{F}(x,y)=\langle x\;\text{ln}(y),\frac{{x}^{2}}{2y}\rangle$ is conservative.
SOLUTION:
Note that the domain of **F** is the part of ${\mathbb{R}}^{2}$ in which $y>0.$ Thus, the domain of **F** is part of a plane above the *x*-axis, and this domain is simply connected (there are no holes in this region and this region is connected). Therefore, we can use [ref:fs-id1167793945282] to determine whether **F** is conservative. Let

$P(x,y)=x\;\text{ln}(y)\;\text{and}\;Q(x,y)=\frac{{x}^{2}}{2y}.$  {eq:fs-id1167793480578}

Then ${P}_{y}=\frac{x}{y}={Q}_{x}$ and thus **F** is conservative.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793944049} type= 
PROBLEM:
Determine whether $\textbf{F}(x,y)=\langle \text{sin}\;x\;\text{cos}\;y,\text{cos}\;x\;\text{sin}\;y\rangle$ is conservative.
SOLUTION:
It is conservative.
COMMENTARY: Hint
Use [ref:fs-id1167793945282].
:::
:::
When using [ref:fs-id1167793945282], it is important to remember that a theorem is a tool, and like any tool, it can be applied only under the right conditions. In the case of [ref:fs-id1167793945282], the theorem can be applied only if the domain of the vector field is simply connected.
To see what can go wrong when misapplying the theorem, consider the vector field:

$\textbf{F}(x,y)=\frac{y}{{x}^{2}+{y}^{2}}\textbf{i}+\frac{\text{−}x}{{x}^{2}+{y}^{2}}\textbf{j}.$  {eq:fs-id1167793378923}

This vector field satisfies the cross-partial property, since

$\frac{\partial}{\partial y}(\frac{y}{{x}^{2}+{y}^{2}})=\frac{({x}^{2}+{y}^{2})-y(2y)}{{({x}^{2}+{y}^{2})}^{2}}=\frac{{x}^{2}-{y}^{2}}{{({x}^{2}+{y}^{2})}^{2}}$  {eq:fs-id1167794246759}

and

$\frac{\partial}{\partial x}(\frac{\text{−}x}{{x}^{2}+{y}^{2}})=\frac{\text{−}({x}^{2}+{y}^{2})+x(2x)}{{({x}^{2}+{y}^{2})}^{2}}=\frac{{x}^{2}-{y}^{2}}{{({x}^{2}+{y}^{2})}^{2}}.$  {eq:fs-id1163723460986}

Since **F** satisfies the cross-partial property, we might be tempted to conclude that **F** is conservative. However, **F** is not conservative. To see this, let

$\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,0\le t\le \pi$  {eq:fs-id1167793464072}

be a parameterization of the upper half of a unit circle oriented counterclockwise (denote this ${C}_{1})$ and let

$\text{s}(t)=\langle \text{cos}\;t,\text{−}\text{sin}\;t\rangle ,0\le t\le \pi$  {eq:fs-id1167793512117}

be a parameterization of the lower half of a unit circle oriented clockwise (denote this ${C}_{2}).$ Notice that ${C}_{1}$ and ${C}_{2}$ have the same starting point and endpoint. Since ${\text{sin}}^{2}t+{\text{cos}}^{2}t=1,$

$\textbf{F}(\textbf{r}(t)).{\textbf{r}}^{'}(t)=\langle \text{sin}(t),\text{−}\text{cos}(t)\rangle .\langle \text{−}\text{sin}(t),\text{cos}(t)\rangle =−1$  {eq:fs-id1167793379966}

and

$\begin{array}{rl}\textbf{F}(s(t))\cdot \textbf{s}'(t) & =\langle \text{−}\text{sin}\;t,\text{−}\text{cos}\;t\rangle \cdot \langle \text{−}\text{sin}\;t,\text{−}\text{cos}\;t\rangle \\ & ={\text{sin}}^{2}t+{\text{cos}}^{2}t \\ & =1.\end{array}$  {eq:fs-id1167793366630}

Therefore,

${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{0}^{\pi}−1dt}=\text{−}\pi \;\text{and}\;{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\text{r}=}{\displaystyle \int_{0}^{\pi}1dt}=\pi .$  {eq:fs-id1167793929618}

Thus, ${C}_{1}$ and ${C}_{2}$ have the same starting point and endpoint, but ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}≠{\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}}.$ Therefore, **F** is not independent of path and **F** is not conservative.
To summarize: **F** satisfies the cross-partial property and yet **F** is not conservative. What went wrong? Does this contradict [ref:fs-id1167793945282]? The issue is that the domain of **F** is all of ${\mathbb{R}}^{2}$ except for the origin. In other words, the domain of **F** has a hole at the origin, and therefore the domain is not simply connected. Since the domain is not simply connected, [ref:fs-id1167793945282] does not apply to **F**.
We close this section by looking at an example of the usefulness of the Fundamental Theorem for Line Integrals. Now that we can test whether a vector field is conservative, we can always decide whether the Fundamental Theorem for Line Integrals can be used to calculate a vector line integral. If we are asked to calculate an integral of the form ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ then our first question should be: Is **F** conservative? If the answer is yes, then we should find a potential function and use the Fundamental Theorem for Line Integrals to calculate the integral. If the answer is no, then the Fundamental Theorem for Line Integrals can’t help us and we have to use other methods, such as using [ref:fs-id1167793635294](module:m54012).

:::example {ex:fs-id1167794135888} Using the Fundamental Theorem for Line Integrals

:::exercise {fs-id1167794135890} type= 
PROBLEM:
Calculate line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\text{r}},$ where $\textbf{F}(x,y,z)=\langle 2x{e}^{y}z+{e}^{x}z,{x}^{2}{e}^{y}z,{x}^{2}{e}^{y}+{e}^{x}\rangle$ and *C* is any smooth curve that goes from the origin to $(1,1,1).$
SOLUTION:
Before trying to compute the integral, we need to determine whether **F** is conservative and whether the domain of **F** is simply connected. The domain of **F** is all of ${\mathbb{R}}^{3},$ which is connected and has no holes. Therefore, the domain of **F** is simply connected. Let

$P(x,y,z)=2x{e}^{y}z+{e}^{x}z,Q(x,y,z)={x}^{2}{e}^{y}z,\;\text{and}\;R(x,y,z)={x}^{2}{e}^{y}+{e}^{x}$  {eq:fs-id1167793473642}

so that $\textbf{F}=\langle P,Q,R\rangle .$ Since the domain of **F** is simply connected, we can check the cross partials to determine whether **F** is conservative. Note that

$\begin{array}{rll}{P}_{y} & = & 2x{e}^{y}z={Q}_{x} \\ {P}_{z} & = & 2x{e}^{y}+{e}^{x}={R}_{x} \\ {Q}_{z} & = & {x}^{2}{e}^{y}={R}_{y}.\end{array}$  {eq:fs-id1167794135960}

Therefore, **F** is conservative.
To evaluate ${\displaystyle \int_{C}\textbf{F}\cdot d\text{r}}$ using the Fundamental Theorem for Line Integrals, we need to find a potential function $f$ for **F**. Let $f$ be a potential function for **F**. Then, $\text{∇}f=\textbf{F},$ and therefore ${f}_{x}=2x{e}^{y}z+{e}^{x}z.$ Integrating this equation with respect to *x* gives $f(x,y,z)={x}^{2}{e}^{y}z+{e}^{x}z+h(y,z)$ for some function *h*. Differentiating this equation with respect to *y* gives ${x}^{2}{e}^{y}z+{h}_{y}=Q={x}^{2}{e}^{y}z,$ which implies that ${h}_{y}=0.$ Therefore, *h* is a function of *z* only, and $f(x,y,z)={x}^{2}{e}^{y}z+{e}^{x}z+h(z).$ To find *h*, note that ${f}_{z}={x}^{2}{e}^{y}+{e}^{x}+h'(z)=R={x}^{2}{e}^{y}+{e}^{x}.$ Therefore, $h'(z)=0$ and we can take $h(z)=0.$ A potential function for **F** is $f(x,y,z)={x}^{2}{e}^{y}z+{e}^{x}z.$
Now that we have a potential function, we can use the Fundamental Theorem for Line Integrals to evaluate the integral. By the theorem,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}} \\ & =f(1,1,1)-f(0,0,0) \\ & =2e.\end{array}$  {eq:fs-id1167793287130}

COMMENTARY: Analysis
Notice that if we hadn’t recognized that **F** is conservative, we would have had to parameterize *C* and use [ref:fs-id1167793635294](module:m54012). Since curve *C* is unknown, using the Fundamental Theorem for Line Integrals is much simpler.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793261833} type= 
PROBLEM:
Calculate integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=\langle \text{sin}\;x\;\text{sin}\;y,5-\text{cos}\;x\;\text{cos}\;y\rangle$ and *C* is a semicircle with starting point $(0,\pi )$ and endpoint $(0,\text{−}\pi ).$
SOLUTION:
$−10\pi$
COMMENTARY: Hint
Use the Fundamental Theorem for Line Integrals.
:::
:::

:::example {ex:fs-id1167793952133} Work Done on a Particle

:::exercise {fs-id1167793952135} type= 
PROBLEM:
Let $\textbf{F}(x,y)=\langle 2x{y}^{2},2{x}^{2}y\rangle$ be a force field. Suppose that a particle begins its motion at the origin and ends its movement at any point in a plane that is not on the *x*-axis or the *y*-axis. Furthermore, the particle’s motion can be modeled with a smooth parameterization. Show that **F** does positive work on the particle.
SOLUTION:
We show that **F** does positive work on the particle by showing that **F** is conservative and then by using the Fundamental Theorem for Line Integrals.
To show that **F** is conservative, suppose $f(x,y)$ were a potential function for **F**. Then, $\text{∇}f=\textbf{F}=\langle 2x{y}^{2},2{x}^{2}y\rangle$ and therefore ${f}_{x}=2x{y}^{2}$ and ${f}_{y}=2{x}^{2}y.$ Equation ${f}_{x}=2x{y}^{2}$ implies that $f(x,y)={x}^{2}{y}^{2}+h(y).$ Deriving both sides with respect to *y* yields ${f}_{y}=2{x}^{2}y+{h}^{'}(y).$ Therefore, ${h}^{'}(y)=0$ and we can take $h(y)=0.$
If $f(x,y)={x}^{2}{y}^{2},$ then note that $\text{∇}f=\langle 2x{y}^{2},2{x}^{2}y\rangle =\textbf{F},$ and therefore $f$ is a potential function for **F**.
Let $(a,b)$ be the point at which the particle stops is motion, and let *C* denote the curve that models the particle’s motion. The work done by **F** on the particle is ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$ By the Fundamental Theorem for Line Integrals,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}} \\ & =f(a,b)-f(0,0) \\ & ={a}^{2}{b}^{2}.\end{array}$  {eq:fs-id1167793454858}

Since $a≠0$ and $b≠0,$ by assumption, ${a}^{2}{b}^{2}>0.$ Therefore, ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}>0,$ and **F** does positive work on the particle.
COMMENTARY: Analysis
Notice that this problem would be much more difficult without using the Fundamental Theorem for Line Integrals. To apply the tools we have learned, we would need to give a curve parameterization and use [ref:fs-id1167793635294](module:m54012). Since the path of motion *C* can be as exotic as we wish (as long as it is smooth), it can be very difficult to parameterize the motion of the particle.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793421222} type= 
PROBLEM:
Let $\textbf{F}(x,y)=\langle 4{x}^{3}{y}^{4},4{x}^{4}{y}^{3}\rangle ,$ and suppose that a particle moves from point $(4,4)$ to $(1,1)$ along any smooth curve. Is the work done by **F** on the particle positive, negative, or zero?
SOLUTION:
Negative
COMMENTARY: Hint
Use the Fundamental Theorem for Line Integrals.
:::
:::

## Key Concepts {section:key-concepts}
- The theorems in this section require curves that are closed, simple, or both, and regions that are connected or simply connected.
- The line integral of a conservative vector field can be calculated using the Fundamental Theorem for Line Integrals. This theorem is a generalization of the Fundamental Theorem of Calculus in higher dimensions. Using this theorem usually makes the calculation of the line integral easier.
- Conservative fields are independent of path. The line integral of a conservative field depends only on the value of the potential function at the endpoints of the domain curve.
- Given vector field **F**, we can test whether **F** is conservative by using the cross-partial property. If **F** has the cross-partial property and the domain is simply connected, then **F** is conservative (and thus has a potential function). If **F** is conservative, we can find a potential function by using the Problem-Solving Strategy.
- The circulation of a conservative vector field on a simply connected domain over a closed curve is zero.

## Key Equations {section:key-equations}

> TABLE {tab:eip-558} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Fundamental Theorem for Line Integrals** | ${\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}=f(\textbf{r}(b))-f(\textbf{r}(a))$ |
| **Circulation of a conservative field over curve *C* that encloses a simply connected region** | ${\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}=0$ |

##  {section:section-exercises}

:::exercise {fs-id1167793473478} type= 
PROBLEM:
*True* or *False?* If vector field **F** is conservative on the open and connected region *D*, then line integrals of **F** are path independent on *D*, regardless of the shape of *D*.
SOLUTION:
True
:::

:::exercise {fs-id1167794101732} type= 
PROBLEM:
*True* or *False?* Function $\textbf{r}(t)=\textbf{a}+t(\textbf{b}-\textbf{a}),$ where $0\le t\le 1,$ parameterizes the straight-line segment from $\textbf{a}\;\text{to}\;\textbf{b}.$
:::

:::exercise {fs-id1167793501940} type= 
PROBLEM:
*True* or *False?* Vector field $\textbf{F}(x,y,z)=(y\;\text{sin}\;z)\textbf{i}+(x\;\text{sin}\;z)\textbf{j}+(xy\;\text{cos}\;z)\textbf{k}$ is conservative.
SOLUTION:
True
:::

:::exercise {fs-id1167794212821} type= 
PROBLEM:
*True* or *False?* Vector field $\textbf{F}(x,y,z)=y\textbf{i}+(x+z)\textbf{j}-y\textbf{k}$ is conservative.
:::

:::exercise {fs-id1167794020793} type= 
PROBLEM:
Verify the Fundamental Theorem of Line Integrals for ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ by computing the integral using a parameterization and, separately, by finding a potential function for the case when $\textbf{F}(x,y)=(2x+2y)\textbf{i}+(2x+2y)\textbf{j}$ and *C* is a portion of circle ${x}^{2}+{y}^{2}=25$ oriented counterclockwise from (5, 0) to (3, 4).
SOLUTION:
${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}}=24$
:::

:::exercise {fs-id1167794284458} type= 
PROBLEM:
**[T]** Find ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=(y{e}^{xy}+\text{cos}\;x)\textbf{i}+(x{e}^{xy}+\frac{1}{{y}^{2}+1})\textbf{j}$ and *C* is a portion of curve $y=\text{sin}\;x$ from $x=0$ to $x=\frac{\pi}{2}.$
:::

:::exercise {fs-id1167793432382} type= 
PROBLEM:
**[T]** Evaluate line integral ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=({e}^{x}\text{sin}\;y-y)\textbf{i}+({e}^{x}\text{cos}\;y-x-2)\textbf{j},$ and *C* is the path given by $r(t)=[{t}^{3}\text{sin}\;\frac{\pi t}{2}]\textbf{i}-[\frac{\pi}{2}\text{cos}(\frac{\pi t}{2}+\frac{\pi}{2})]\textbf{j}$ for $0\le t\le 1.$
SOLUTION:
${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}}=e-\frac{3\pi}{2}$
:::
For the following exercises, determine whether the vector field is conservative and, if it is, find the potential function.

:::exercise {fs-id1167793482847} type= 
PROBLEM:
$\textbf{F}(x,y)=2x{y}^{3}\textbf{i}+3{y}^{2}{x}^{2}\textbf{j}$
:::

:::exercise {fs-id1167794222595} type= 
PROBLEM:
$\textbf{F}(x,y)=(\text{−}y+{e}^{x}\text{sin}\;y)\textbf{i}+[(x+2){e}^{x}\text{cos}\;y]\textbf{j}$
SOLUTION:
Not conservative
:::

:::exercise {fs-id1167793354868} type= 
PROBLEM:
$\textbf{F}(x,y)=({e}^{2x}\text{sin}\;y)\textbf{i}+[{e}^{2x}\text{cos}\;y]\textbf{j}$
:::

:::exercise {fs-id1167793397133} type= 
PROBLEM:
$\textbf{F}(x,y)=(6x+5y)\textbf{i}+(5x+4y)\textbf{j}$
SOLUTION:
Conservative, $f(x,y)=3{x}^{2}+5xy+2{y}^{2}$
:::

:::exercise {fs-id1167794054196} type= 
PROBLEM:
$\textbf{F}(x,y)=[2x\;\text{cos}(y)-y\;\text{cos}(x)]\textbf{i}+[\text{−}{x}^{2}\text{sin}(y)-\text{sin}(x)]\textbf{j}$
:::

:::exercise {fs-id1167794147413} type= 
PROBLEM:
$\textbf{F}(x,y)=[y{e}^{x}+\text{sin}(y)]\textbf{i}+[{e}^{x}+x\;\text{cos}(y)]\textbf{j}$
SOLUTION:
Conservative, $f(x,y)=y{e}^{x}+x\;\text{sin}(y)$
:::
For the following exercises, evaluate the line integrals using the Fundamental Theorem of Line Integrals.

:::exercise {fs-id1167793281029} type= 
PROBLEM:
${\displaystyle \int_{C}(y\textbf{i}+x\textbf{j})\cdot d\textbf{r}},$ where *C* is any path from (0, 0) to (2, 4)
:::

:::exercise {fs-id1167793559400} type= 
PROBLEM:
${\displaystyle \int_{C}(2ydx+2xdy)},$ where *C* is the line segment from (0, 0) to (4, 4)
SOLUTION:
${\displaystyle \int_{C}(2ydx+2xdy)}=32$
:::

:::exercise {fs-id1167793545004} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{C}[\text{arctan}\;\frac{y}{x}-\frac{xy}{{x}^{2}+{y}^{2}}]dx+[\frac{{x}^{2}}{{x}^{2}+{y}^{2}}+{e}^{\text{−}y}(1-y)]dy},$ where *C* is any smooth curve from (1, 1) to $(−1,2)$
:::

:::exercise {fs-id1167793979093} type= 
PROBLEM:
Find the conservative vector field for the potential function

$f(x,y)=5{x}^{2}+3xy+{10y}^{2}.$  {eq:fs-id1167793979100}

SOLUTION:
$\textbf{F}(x,y)=(10x+3y)\textbf{i}+(3x+20y)\textbf{j}$
:::
For the following exercises, determine whether the vector field is conservative and, if so, find a potential function.

:::exercise {fs-id1167794181384} type= 
PROBLEM:
$\textbf{F}(x,y)=(12xy)\textbf{i}+6({x}^{2}+{y}^{2})\textbf{j}$
:::

:::exercise {fs-id1167793617078} type= 
PROBLEM:
$\textbf{F}(x,y)=({e}^{x}\text{cos}\;y)\textbf{i}+6({e}^{x}\text{sin}\;y)\textbf{j}$
SOLUTION:
**F** is not conservative.
:::

:::exercise {fs-id1167794171752} type= 
PROBLEM:
$\textbf{F}(x,y)=(2xy{e}^{{x}^{2}y})\textbf{i}+({x}^{2}{e}^{{x}^{2}y})\textbf{j}$
:::

:::exercise {fs-id1167794163735} type= 
PROBLEM:
$\textbf{F}(x,y\text{,}\;z)=(y{e}^{z})\textbf{i}+(x{e}^{z})\textbf{j}+(xy{e}^{z})\textbf{k}$
SOLUTION:
**F** is conservative and a potential function is $f(x,y\text{,}\;z)=xy{e}^{z}.$
:::

:::exercise {fs-id1167793494920} type= 
PROBLEM:
$\textbf{F}(x,y\text{,}\;z)=(\text{sin}\;y)\textbf{i}-(x\;\text{cos}\;y)\textbf{j}+\textbf{k}$
:::

:::exercise {fs-id1167793640125} type= 
PROBLEM:
$\textbf{F}(x,y\text{,}\;z)=(-\frac{1}{y})\textbf{i}+(\frac{x}{{y}^{2}})\textbf{j}+(2z-1)\textbf{k}$
SOLUTION:
**F** is conservative and a potential function is $f(x,y,z)={z}^{2}-z-\frac{x}{y}.$
:::

:::exercise {fs-id1167793563657} type= 
PROBLEM:
$\textbf{F}(x,y,z)=3{z}^{2}\textbf{i}-\text{cos}\;y\textbf{j}+2xz\textbf{k}$
:::

:::exercise {fs-id1167793925730} type= 
PROBLEM:
$\textbf{F}(x,y\text{,}\;z)=(2xy)\textbf{i}+({x}^{2}+2yz)\textbf{j}+{y}^{2}\textbf{k}$
SOLUTION:
**F** is conservative and a potential function is $f(x,y\text{,}\;z)={x}^{2}y+{y}^{2}z.$
:::

:::exercise {fs-id1167793547024} type= 
PROBLEM:
$\textbf{F}(x,y)=(4{e}^{x}\text{cos}\;y)\textbf{i}-(4{e}^{x}\text{sin}\;y)\textbf{j}$
:::

:::exercise {fs-id1167793378763} type= 
PROBLEM:
$\textbf{F}(x,y)=(y{e}^{{x}^{2}})\textbf{i}+({x}^{2}{e}^{{y}^{2}})\textbf{j}$
SOLUTION:
**F** is conservative and a potential function is $f(x,y)={e}^{{x}^{2}y}$
:::
For the following exercises, evaluate the integral using the Fundamental Theorem of Line Integrals.

:::exercise {fs-id1167793482906} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}\nabla f\cdot d\textbf{r}},$ where $f(x,y\text{,}\;z)=\text{cos}(\pi x)+\text{sin}(\pi y)-xyz$ and *C* is any path that starts at $(1,\frac{1}{2},2)$ and ends at $(2,1,−1).$
:::

:::exercise {fs-id1167793927681} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \int_{C}\nabla f\cdot d\textbf{r}},$ where $f(x,y)=xy+{e}^{x}$ and *C* is a straight line from $(0,0)$ to $(2,1).$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot dr}={e}^{2}+1$
:::

:::exercise {fs-id1167794213214} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \int_{C}\nabla f\cdot d\textbf{r}},$ where $f(x,y)={x}^{2}y-x$ and *C* is any path in a plane from (1, 2) to (3, 2).
:::

:::exercise {fs-id1167793427728} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}\nabla f\cdot d\textbf{r}},$ where $f(x,y\text{,}\;z)=xy{z}^{2}-yz$ and *C* has initial point (1, 2, 3) and terminal point (3, 5, 1).
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot dr}=-2$
:::
For the following exercises, let $\textbf{F}(x,y)=2x{y}^{2}\textbf{i}+(2y{x}^{2}+2y)\textbf{j}$ and $\mathbf{G}(x,y)=(y+x)\textbf{i}+(y-x)\textbf{j},$ and let *C*<sub>1</sub> be the curve consisting of the circle of radius 2, centered at the origin and oriented counterclockwise, and *C*<sub>2</sub> be the curve consisting of a line segment from (0, 0) to (1, 1) followed by a line segment from (1, 1) to (3, 1).

> IMAGE {img:fs-id1167794292790} src=../../media/CNX_Calc_Figure_16_03_202.jpg
> alt: A vector fields in two dimensions is shown. It has short arrows close to the origin. Longer arrows are in the upper right corner of quadrant 1 and somewhat in the bottom right of quadrant 4, upper left of quadrant 2, and lower left of quadrant 3. The arrows all point away from the origin at about 90-degrees in their respective quadrants. A unit circle with center at the origin is drawn as C_1. Curve C_2 connects the origin, (1,1), and (3,1) with arrowheads pointing in that order.

> IMAGE {img:fs-id1167794292805} src=../../media/CNX_Calc_Figure_16_03_203.jpg
> alt: A vector field has the same curves C_1 and C_2. However, the arrows are different. Here, the arrows spiral out from the origin in a clockwise manner. The further away they are from the origin, the longer they become. They are largely horizontal in quadrants 1 and 3 and largely vertical in quadrants 2 and 4.

:::exercise {fs-id1167794292819} type= 
PROBLEM:
Calculate the line integral of **F** over *C*<sub>1</sub>.
:::

:::exercise {fs-id1167794021708} type= 
PROBLEM:
Calculate the line integral of **G** over *C*<sub>1</sub>.
SOLUTION:
${\displaystyle \int_{{C}_{1}}\textbf{G}\cdot d\textbf{r}}=−8\pi$
:::

:::exercise {fs-id1167794173339} type= 
PROBLEM:
Calculate the line integral of **F** over *C*<sub>2</sub>.
:::

:::exercise {fs-id1167793515011} type= 
PROBLEM:
Calculate the line integral of **G** over *C*<sub>2</sub>.
SOLUTION:
${\displaystyle \int_{{C}_{2}}\textbf{G}\cdot d\textbf{r}}=7$
:::

:::exercise {fs-id1167793570825} type= 
PROBLEM:
**[T]** Let $\textbf{F}(x,y,z)={x}^{2}\textbf{i}+z\;\text{sin}(yz)\textbf{j}+y\;\text{sin}(yz)\textbf{k}.$ Calculate ${\displaystyle \int_{C}\textbf{F}\cdot dr},$ where *C* is a path from $A=(0,0,1)$ to $B=(3,1,2).$
:::

:::exercise {fs-id1167793638778} type= 
PROBLEM:
**[T]** Find line integral ${\displaystyle \int_{C}\textbf{F}\cdot dr}$ of vector field $\textbf{F}(x,y,z)=3{x}^{2}z\textbf{i}+{z}^{2}\textbf{j}+({x}^{3}+2yz)\textbf{k}$ along curve *C* parameterized by $r(t)=(\frac{\text{ln}\;t}{\text{ln}\;2})\textbf{i}+{t}^{3\text{/}2}\textbf{j}+t\;\text{cos}(\pi t)k\text{,}\;1\le t\le 4.$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}}\cdot d\textbf{r}=159$
:::
For the following exercises, show that the following vector fields are conservative by using a computer. Calculate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ for the given curve.

:::exercise {fs-id1167793705999} type= 
PROBLEM:
$\textbf{F}=(x{y}^{2}+3{x}^{2}y)\textbf{i}+(x+y){x}^{2}\textbf{j};$ *C* is the curve consisting of line segments from $(1,1)$ to $(0,2)$ to $(3,0).$
:::

:::exercise {fs-id1167793355109} type= 
PROBLEM:
$\textbf{F}=\frac{2x}{{y}^{2}+1}\textbf{i}-\frac{2y({x}^{2}+1)}{{({y}^{2}+1)}^{2}}\textbf{j};$ *C* is parameterized by $x={t}^{3}-1,y={t}^{6}-t,0\le t\le 1.$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=−1$
:::

:::exercise {fs-id1167793546436} type= 
PROBLEM:
**[T]** $\textbf{F}=[\text{cos}(x{y}^{2})-x{y}^{2}\text{sin}(x{y}^{2})]\textbf{i}-2{x}^{2}y\;\text{sin}(x{y}^{2})\textbf{j};$ *C* is curve $r(t)=<{e}^{t},{e}^{t+1}>,−1\le t\le 0.$
:::

:::exercise {fs-id1167794090678} type= 
PROBLEM:
The mass of Earth is approximately $6\;\times \;{10}^{27}\text{g}$ and that of the Sun is 330,000 times as much. The gravitational constant is $6.7\;\times \;{10}^{−8}{\text{cm}}^{3}\text{/}({\text{s}}^{2}\cdot \text{g}).$ The distance of Earth from the Sun is about $1.5\;\times \;{10}^{12}\text{cm}.$ Compute, approximately, the work necessary to increase the distance of Earth from the Sun by $1\;\text{cm}.$
SOLUTION:
$4\;\times \;{10}^{29}\text{erg}$
:::

:::exercise {fs-id1167793491131} type= 
PROBLEM:
**[T]** Let $\textbf{F}=({e}^{x}\text{sin}\;y)\textbf{i}+({e}^{x}\text{cos}\;y)\textbf{j}+{z}^{2}\textbf{k}.$ Evaluate the integral ${\displaystyle \int_{C}\textbf{F}\cdot dr},$ where $C$ is the curve $r(t)=<\sqrt{t},{t}^{3},{e}^{\sqrt{t}}>,0\le t\le 1.$
:::

:::exercise {fs-id1167793414830} type= 
PROBLEM:
**[T]** Let $\textbf{r}:[1,2]\to {\mathbb{R}}^{2}$ be given by $x={e}^{t-1},y=\text{sin}(\frac{\pi}{t}).$ Use a computer to compute the integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}={\displaystyle \int_{C}2x\;\text{cos}\;ydx-{x}^{2}\text{sin}\;ydy,}}$ where $\textbf{F}=(2x\;\text{cos}\;y)\textbf{i}-({x}^{2}\text{sin}\;y)\textbf{j}.$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}\approx 2.9923}$
:::

:::exercise {fs-id1167793515506} type= 
PROBLEM:
**[T]** Use a computer algebra system to find the mass of a wire that lies along curve $\textbf{r}(t)=({t}^{2}-1)\textbf{j}+2t\textbf{k},0\le t\le 1,$ if the density is $\frac{3}{2}t.$
:::

:::exercise {fs-id1167794075585} type= 
PROBLEM:
Find the circulation and flux of field $\textbf{F}=\text{−}y\textbf{i}+x\textbf{j}$ around and across the closed semicircular path that consists of semicircular arch ${\textbf{r}}_{1}(t)=(a\;\text{cos}\;t)\textbf{i}+(a\;\text{sin}\;t)\textbf{j},0\le t\le \pi ,$ followed by line segment ${\textbf{r}}_{2}(t)=t\textbf{i},\text{−}a\le t\le a.$

> IMAGE {img:fs-id1167793312205} src=../../media/CNX_Calc_Figure_16_03_204.jpg
> alt: A vector field in two dimensions. The arrows are shorter the closer they are to the origin. They surround the origin in a counterclockwise radial pattern. The outline of the circle has counterclockwise arrows. The upper half of a circle with radius 2 and center at the origin is drawn. (-2,0) and (2,0) are labeled as –a and a, respectively, and the curve is labeled r_1.

SOLUTION:
$\text{circulation}=\pi {a}^{2}\;\text{and flux}=0$
:::

:::exercise {fs-id1167793505439} type= 
PROBLEM:
Compute ${\displaystyle \int_{C}\text{cos}\;x\;\text{cos}\;ydx-\text{sin}\;x\;\text{sin}\;ydy},$ where $\text{c}(t)=<t,{t}^{2}>,0\le t\le 1.$
:::

:::exercise {fs-id1167793499349} type= 
PROBLEM:
Complete the proof of [ref:fs-id1167793924910] by showing that ${f}_{y}=Q(x,y).$
:::

## Glossary
- {def} **closed curve**: a curve that begins and ends at the same point
- {def} **connected region**: a region in which any two points can be connected by a path with a trace contained entirely inside the region
- {def} **Fundamental Theorem for Line Integrals**: the value of line integral ${\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}$ depends only on the value of $f$ at the endpoints of *C*: ${\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}=f(\textbf{r}(b))-f(\textbf{r}(a))$
- {def} **independence of path**: a vector field **F** has path independence if ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{{C}_{2}}\textbf{F}\cdot d\textbf{r}}$ for any curves ${C}_{1}$ and ${C}_{2}$ in the domain of **F** with the same initial points and terminal points
- {def} **simple curve**: a curve that does not cross itself
- {def} **simply connected region**: a region that is connected and has the property that any closed curve that lies entirely inside the region encompasses points that are entirely inside the region

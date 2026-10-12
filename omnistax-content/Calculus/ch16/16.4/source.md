# Green’s Theorem

## Learning Objectives {section:learning-objectives}
- Apply the circulation form of Green’s theorem.
- Apply the flux form of Green’s theorem.
- Calculate circulation and flux on more general regions.

In this section, we examine Green’s theorem, which is an extension of the Fundamental Theorem of Calculus to two dimensions. Green’s theorem has two forms: a circulation form and a flux form, both of which require region *D* in the double integral to be simply connected. However, we will extend Green’s theorem to regions that are not simply connected.
Put simply, Green’s theorem relates a line integral around a simply closed plane curve *C* and a double integral over the region enclosed by *C*. The theorem is useful because it allows us to translate difficult line integrals into more simple double integrals, or difficult double integrals into more simple line integrals.

## Extending the Fundamental Theorem of Calculus
Recall that the Fundamental Theorem of Calculus says that

${\displaystyle \int_{a}^{b}{F}^{'}(x)dx=F(b)-F(a)}.$  {eq:fs-id1167793948743}

As a geometric statement, this equation says that the integral over the region below the graph of ${F}^{'}(x)$ and above the line segment $[a,b]$ depends only on the value of *F* at the endpoints *a* and *b* of that segment. Since the numbers *a* and *b* are the boundary of the line segment $[a,b],$ the theorem says we can calculate integral ${\displaystyle \int_{a}^{b}F\text{′}(x)dx}$ based on information about the boundary of line segment $[a,b]$ ([ref:CNX_Calc_Figure_16_04_001]). The same idea is true of the Fundamental Theorem for Line Integrals:

${\displaystyle \int_{C}\text{∇}f\cdot d\textbf{r}}=f(\textbf{r}(b))-f(\textbf{r}(a)).$  {eq:fs-id1167793337928}

When we have a potential function (an “antiderivative”), we can calculate the line integral based solely on information about the boundary of curve *C*.

> FIGURE {fig:CNX_Calc_Figure_16_04_001} src=../../media/CNX_Calc_Figure_16_04_001.jpg
> alt: A graph in quadrant 1 of a generic function f(x). It is an increasing concave up function for the first quarter, an increasing concave down function for the second quarter, a decreasing concave down function for the third quarter, and an increasing concave down function for the last quarter. In the second quarter, a point a is marked on the x axis, and in the third quarter, a point b is marked on the x axis. The area under the curve and between a and b is shaded. This area is labeled the integral from a to b of f(x) dx.
> caption: The Fundamental Theorem of Calculus says that the integral over line segment $[a,b]$ depends only on the values of the antiderivative at the endpoints of $[a,b].$

{term:Green’s theorem} takes this idea and extends it to calculating double integrals. Green’s theorem says that we can calculate a double integral over region *D* based solely on information about the boundary of *D*. Green’s theorem also says we can calculate a line integral over a simple closed curve *C* based solely on information about the region that *C* encloses. In particular, Green’s theorem connects a double integral over region *D* to a line integral around the boundary of *D*.

## Circulation Form of Green’s Theorem
The first form of Green’s theorem that we examine is the circulation form. This form of the theorem relates the vector line integral over a simple, closed plane curve *C* to a double integral over the region enclosed by *C*. Therefore, the circulation of a vector field along a simple closed curve can be transformed into a double integral and vice versa.

:::note [theorem] Green’s Theorem, Circulation Form
Let *D* be an open, simply connected region with a boundary curve *C* that is a piecewise smooth, simple closed curve oriented counterclockwise ([ref:CNX_Calc_Figure_16_04_002]). Let $\textbf{F}=\langle P,Q\rangle$ be a vector field with component functions that have continuous partial derivatives on *D*. Then,

$$ {\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}=}{\displaystyle \int_{C}Pdx+Qdy={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}}. $$  {eq:fs-id1167793370454}

:::

> FIGURE {fig:CNX_Calc_Figure_16_04_002} src=../../media/CNX_Calc_Figure_16_04_002.jpg
> alt: A vector field in two dimensions with all of the arrows pointing up and to the right. A curve C oriented counterclockwise sections off a region D around the origin. It is a simple, closed region.
> caption: The circulation form of Green’s theorem relates a line integral over curve *C* to a double integral over region *D*.

Notice that Green’s theorem can be used only for a two-dimensional vector field **F**. If **F** is a three-dimensional field, then Green’s theorem does not apply. Since

${\displaystyle \int_{C}Pdx+Qdy={\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds}},$  {eq:fs-id1167793970840}

this version of Green’s theorem is sometimes referred to as the {index:*tangential form* of Green’s theorem}.
The proof of Green’s theorem is rather technical, and beyond the scope of this text. Here we examine a proof of the theorem in the special case that *D* is a rectangle. For now, notice that we can quickly confirm that the theorem is true for the special case in which $\textbf{F}=\langle P,Q\rangle$ is conservative. In this case,

${\displaystyle \int_{C}Pdx+Qdy=0}$  {eq:fs-id1167793931713}

because the circulation is zero in conservative vector fields. By [ref:fs-id1167793945282](module:m53987), **F** satisfies the cross-partial condition, so ${P}_{y}={Q}_{x}.$ Therefore,

${\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}={\displaystyle \iint_{D}0dA=0={\displaystyle \int_{C}Pdx+Qdy}},$  {eq:fs-id1167794039968}

which confirms Green’s theorem in the case of conservative vector fields.

### Proof
Let’s now prove that the circulation form of Green’s theorem is true when the region *D* is a rectangle. Let *D* be the rectangle $[a,b]\;\times \;[c,d]$ oriented counterclockwise. Then, the boundary *C* of *D* consists of four piecewise smooth pieces ${C}_{1},$ ${C}_{2},$ ${C}_{3},$ and ${C}_{4}$ ([ref:CNX_Calc_Figure_16_04_003]). We parameterize each side of *D* as follows:

$\begin{array}{rll}{C}_{1}\text{:}\;{\textbf{r}}_{1}(t) & = & \langle t,c\rangle ,a\le t\le b \\ {C}_{2}\text{:}\;{\textbf{r}}_{2}(t) & = & \langle b,t\rangle ,c\le t\le d \\ \text{−}{C}_{3}\text{:}\;{\textbf{r}}_{3}(t) & = & \langle t,d\rangle ,a\le t\le b \\ \text{−}{C}_{4}\text{:}\;{\textbf{r}}_{4}(t) & = & \langle a,t\rangle ,c\le t\le d.\end{array}$  {eq:fs-id1167793877056}

> FIGURE {fig:CNX_Calc_Figure_16_04_003} src=../../media/CNX_Calc_Figure_16_04_003.jpg
> alt: A diagram in quadrant 1. Rectangle D is oriented counterclockwise. Points a and b are on the x axis, and points c and d are on the y axis with b > a and d > c. The sides of the rectangle are side c1 with endpoints at (a,c) and (b,c), side c2 with endpoints at (b,c) and (b,d), side c3 with endpoints at (b,d) and (a,d), and side c4 with endpoints at (a,d) and (a,c).
> caption: Rectangle *D* is oriented counterclockwise.

Then,

$\begin{array}{ll}\int_{C}\text{F}\cdot d\text{r} & =\int_{{C}_{1}}\text{F}\cdot d\text{r}+\int_{{C}_{2}}\text{F}\cdot d\text{r}+\int_{{C}_{3}}\text{F}\cdot d\text{r}+\int_{{C}_{4}}\text{F}\cdot d\text{r} \\ & =\int_{{C}_{1}}\text{F}\cdot d\text{r}+\int_{{C}_{2}}\text{F}\cdot d\text{r}-\int_{\text{−}{C}_{3}}\text{F}\cdot d\text{r}-\int_{\text{−}{C}_{4}}\text{F}\cdot d\text{r} \\ & =\int_{a}^{b}\text{F}({\text{r}}_{1}(t))\cdot {\text{r}}_{1'}(t)dt+\int_{c}^{d}\text{F}({\text{r}}_{2}(t))\cdot {\text{r}}_{2'}(t)dt \\ & \;\text{−}\int_{a}^{b}\text{F}({\text{r}}_{3}(t))\cdot {\text{r}}_{3'}(t)dt-\int_{c}^{d}\text{F}({\text{r}}_{4}(t))\cdot {\text{r}}_{4'}(t)dt \\ & =\int_{a}^{b}P(t,c)dt+\int_{c}^{d}Q(b,t)dt-\int_{a}^{b}P(t,d)dt-\int_{c}^{d}Q(a,t)dt \\ & =\int_{a}^{b}(P(t,c)-P(t,d))dt+\int_{c}^{d}(Q(b,t)-Q(a,t))dt \\ & =\text{−}\int_{a}^{b}(P(t,d)-P(t,c))dt+\int_{c}^{d}(Q(b,t)-Q(a,t))dt.\end{array}$  {eq:fs-id1167794035414}

By the Fundamental Theorem of Calculus,

$P(t,d)-P(t,c)={\displaystyle \int_{c}^{d}\frac{\partial}{\partial y}P(t,y)dy}\;\text{and}\;Q(b,t)-Q(a,t)={\displaystyle \int_{a}^{b}\frac{\partial}{\partial x}Q(x,t)dx.}$  {eq:fs-id1167794296695}

Therefore,

$\begin{array}{l} \\ \\ \\ \\ \;\text{−}{\displaystyle \int_{a}^{b}(P(t,d)-P(t,c))dt+}{\displaystyle \int_{c}^{d}(Q(b,t)-Q(a,t))dt} \\ =\text{−}{\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}\frac{\partial}{\partial y}P(t,y)dydt+}}{\displaystyle \int_{c}^{d}{\displaystyle \int_{a}^{b}\frac{\partial}{\partial x}Q(x,t)dxdt.}}\end{array}$  {eq:fs-id1167794328989}

But,

$\begin{array}{rl}-{\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}\frac{\partial}{\partial y}}}P(t,y)dydt+{\displaystyle \int_{c}^{d}{\displaystyle \int_{a}^{b}\frac{\partial}{\partial x}}}Q(x,t)dxdt & =\text{−}{\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}\frac{\partial}{\partial y}P(x,y)dydx+{\displaystyle \int_{c}^{d}{\displaystyle \int_{a}^{b}\frac{\partial}{\partial x}Q(x,y)dxdy}}}} \\ & ={\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}({Q}_{x}-{P}_{y})dydx}} \\ & ={\displaystyle \int {\displaystyle \int_{D}({Q}_{x}-{P}_{y})dA.}}\end{array}$  {eq:fs-id1167793960259}

Therefore, ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}={\displaystyle \int {\displaystyle \int_{D}({Q}_{x}-{P}_{y})dA}}}$ and we have proved Green’s theorem in the case of a rectangle.
To prove Green’s theorem over a general region *D*, we can decompose *D* into many tiny rectangles and use the proof that the theorem works over rectangles. The details are technical, however, and beyond the scope of this text.
□

:::example {ex:fs-id1167793881250} Applying Green’s Theorem over a Rectangle

:::exercise {fs-id1167793983185} type= 
PROBLEM:
Calculate the line integral

${\displaystyle \int_{C}{x}^{2}ydx+(y-3)dy},$  {eq:fs-id1167793248326}

where *C* is a rectangle with vertices $(1,1),$ $(4,1),$ $(4,5),$ and $(1,5)$ oriented counterclockwise.
SOLUTION:
Let $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle =\langle {x}^{2}y,y-3\rangle .$ Then, ${Q}_{x}=0$ and ${P}_{y}={x}^{2}.$ Therefore, ${Q}_{x}-{P}_{y}=\text{−}{x}^{2}.$
Let *D* be the rectangular region enclosed by *C* ([ref:CNX_Calc_Figure_16_04_004]). By Green’s theorem,

$\begin{array}{rl}{\displaystyle \int_{C}{x}^{2}ydx+(y-3)dy} & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA} \\ & ={\displaystyle \int {\displaystyle \int_{D}\text{−}{x}^{2}dA}}={\displaystyle \int_{1}^{5}{\displaystyle \int_{1}^{4}\text{−}{x}^{2}dxdy}} \\ & ={\displaystyle \int_{1}^{5}−21dy}=−84.\end{array}$  {eq:fs-id1167793937423}

> FIGURE {fig:CNX_Calc_Figure_16_04_004} src=../../media/CNX_Calc_Figure_16_04_004.jpg
> alt: A vector field in two dimensions with focus on quadrant 1. The arrows near the origin are short, and the arrows further away from the origin are longer. A rectangle has endpoints at (1,1), (4,1), (4,5), and (1,5). The arrows in quadrant 3 are pointing to the right. At the y axis, they split at y = 3. Arrows above that line curve up at the y axis and shift until they are horizontally pointing to the right in quadrant 1. Arrows below that line and above the x axis curve down at the y axis and shift until they are horizontally pointing to the right. Arrows below the x axis point to the left and down, pointing back to the y axis.
> caption: The line integral over the boundary of the rectangle can be transformed into a double integral over the rectangle.

COMMENTARY: Analysis
If we were to evaluate this line integral without using Green’s theorem, we would need to parameterize each side of the rectangle, break the line integral into four separate line integrals, and use the methods from [Line Integrals](module:m54012) to evaluate each integral. Furthermore, since the vector field here is not conservative, we cannot apply the Fundamental Theorem for Line Integrals. Green’s theorem makes the calculation much simpler.
:::
:::

:::example {ex:fs-id1167794127694} Applying Green’s Theorem to Calculate Work

:::exercise {fs-id1167794127696} type= 
PROBLEM:
Calculate the work done on a particle by force field

$\textbf{F}(x,y)=\langle y+\text{sin}\;x,{e}^{y}-x\rangle$  {eq:fs-id1167794056236}

as the particle traverses circle ${x}^{2}+{y}^{2}=4$ exactly once in the counterclockwise direction, starting and ending at point $(2,0).$
SOLUTION:
Let *C* denote the circle and let *D* be the disk enclosed by *C*. The work done on the particle is

$W={\displaystyle \int_{C}(y+\text{sin}\;x)dx+({e}^{y}-x)dy}.$  {eq:fs-id1167793991529}

As with [ref:fs-id1167793881250], this integral can be calculated using tools we have learned, but it is easier to use the double integral given by Green’s theorem ([ref:CNX_Calc_Figure_16_04_005]).
Let $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle =\langle y+\text{sin}\;x,{e}^{y}-x\rangle .$ Then, ${Q}_{x}=−1$ and ${P}_{y}=1.$ Therefore, ${Q}_{x}-{P}_{y}=−2.$
By Green’s theorem,

$\begin{array}{rl}W & ={\displaystyle \int_{C}(y+\text{sin}(x))dx+({e}^{y}-x)dy} \\ & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}={\displaystyle \iint_{D}−2dA} \\ & =−2(\text{area}(D))=−2\pi ({2}^{2})=−8\pi .\end{array}$  {eq:fs-id1167793940967}

> FIGURE {fig:CNX_Calc_Figure_16_04_005} src=../../media/CNX_Calc_Figure_16_04_005.jpg
> alt: A vector field in two dimensions. The arrows further away from the origin are much longer than those near the origin. The arrows curve out from about (.5,.5) in a clockwise spiral pattern.
> caption: The line integral over the boundary circle can be transformed into a double integral over the disk enclosed by the circle.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793959379} type= 
PROBLEM:
Use Green’s theorem to calculate line integral

${\displaystyle \int_{C}\text{sin}({x}^{2})dx+(3x-y)dy},$  {eq:fs-id1167793951240}

where *C* is a right triangle with vertices $(−1,2),$ $(4,2),$ and $(4,5)$ oriented counterclockwise.
SOLUTION:
$\frac{45}{2}$
COMMENTARY: Hint
Transform the line integral into a double integral.
:::
:::
In the preceding two examples, the double integral in Green’s theorem was easier to calculate than the line integral, so we used the theorem to calculate the line integral. In the next example, the double integral is more difficult to calculate than the line integral, so we use Green’s theorem to translate a double integral into a line integral.

:::example {ex:fs-id1167794000435} Applying Green’s Theorem over an Ellipse

:::exercise {fs-id1167794000438} type= 
PROBLEM:
Calculate the area enclosed by ellipse $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}=1$ ([ref:CNX_Calc_Figure_16_04_006]).

> FIGURE {fig:CNX_Calc_Figure_16_04_006} src=../../media/CNX_Calc_Figure_16_04_006.jpg
> alt: A horizontal ellipse graphed in two dimensions. It has vertices at (-a, 0), (0, -b), (a, 0), and (0, b), where the absolute value of a is between 2.5 and 5 and the absolute value of b is between 0 and 2.5.
> caption: Ellipse $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}=1$ is denoted by *C*.

SOLUTION:
Let *C* denote the ellipse and let *D* be the region enclosed by *C*. Recall that ellipse *C* can be parameterized by

$x=a\;\text{cos}\;t,y=b\;\text{sin}\;t,0\le t\le 2\pi .$  {eq:fs-id1167793397072}

Calculating the area of *D* is equivalent to computing double integral ${\displaystyle \iint_{D}dA}.$ To calculate this integral without Green’s theorem, we would need to divide *D* into two regions: the region above the *x*-axis and the region below. The area of the ellipse is

${\displaystyle \int_{\text{−}a}^{a}{\displaystyle \int_{0}^{\sqrt{{b}^{2}-{(bx\text{/}a)}^{2}}}dydx+{\displaystyle \int_{\text{−}a}^{a}{\displaystyle \int_{\text{−}\sqrt{{b}^{2}-{(bx\text{/}a)}^{2}}}^{0}\;dydx.}}}}$  {eq:fs-id1167793950870}

These two integrals are not straightforward to calculate (although when we know the value of the first integral, we know the value of the second by symmetry). Instead of trying to calculate them, we use Green’s theorem to transform ${\displaystyle \iint_{D}dA}$ into a line integral around the boundary *C*.
Consider vector field

$\textbf{F}(x,y)=\langle P,Q\rangle =\langle -\frac{y}{2},\frac{x}{2}\rangle .$  {eq:fs-id1167793450220}

Then, ${Q}_{x}=\frac{1}{2}$ and ${P}_{y}=-\frac{1}{2},$ and therefore ${Q}_{x}-{P}_{y}=1.$ Notice that **F** was chosen to have the property that ${Q}_{x}-{P}_{y}=1.$ Since this is the case, Green’s theorem transforms the line integral of **F** over *C* into the double integral of 1 over *D*.
By Green’s theorem,

$\begin{array}{rl} \\ \\ \\ {\displaystyle \iint_{D}dA} & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA} \\ & ={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=\frac{1}{2}{\displaystyle \int_{C}\text{−}ydx+xdy} \\ & =\frac{1}{2}{\displaystyle \int_{0}^{2\pi}\text{−}b\;\text{sin}\;t(\text{−}a\;\text{sin}\;t)+a(\text{cos}\;t)b\;\text{cos}\;tdt} \\ & =\frac{1}{2}{\displaystyle \int_{0}^{2\pi}ab\;{\text{cos}}^{2}t+ab\;{\text{sin}}^{2}tdt}=\frac{1}{2}{\displaystyle \int_{0}^{2\pi}abdt}=\pi ab.\end{array}$  {eq:fs-id1167793521514}

Therefore, the area of the ellipse is $\pi ab.$
:::
:::
In [ref:fs-id1167794000435], we used vector field $\textbf{F}(x,y)=\langle P,Q\rangle =\langle -\frac{y}{2},\frac{x}{2}\rangle$ to find the area of any ellipse. The logic of the previous example can be extended to derive a formula for the area of any region *D*. Let *D* be any region with a boundary that is a simple closed curve *C* oriented counterclockwise. If $\textbf{F}(x,y)=\langle P,Q\rangle =\langle -\frac{y}{2},\frac{x}{2}\rangle ,$ then ${Q}_{x}-{P}_{y}=1.$ Therefore, by the same logic as in [ref:fs-id1167794000435],

$$ \text{area of}\;D={\displaystyle \iint_{D}dA=\frac{1}{2}{\displaystyle \int_{C}\text{−}ydx+xdy}}. $$  {eq:fs-id1167793965702}

It’s worth noting that if $\textbf{F}=\langle P,Q\rangle$ is any vector field with ${Q}_{x}-{P}_{y}=1,$ then the logic of the previous paragraph works. So. [ref:fs-id1167793965702] is not the only equation that uses a vector field’s mixed partials to get the area of a region.

:::note [checkpoint] 

:::exercise {fs-id1167794249986} type= 
PROBLEM:
Find the area of the region enclosed by the curve with parameterization $\textbf{r}(t)=\langle \text{sin}\;t\;\text{cos}\;t,\text{sin}\;t\rangle ,0\le t\le \pi .$

> IMAGE {img:fs-id1167793847151} src=../../media/CNX_Calc_Figure_16_04_007.jpg
> alt: An image of a curve in quadrants 1 and 2. The curve begins at the origin, curves up and to the right until about (.5, 1), turns left to go through (0, 1), and curves down going through (-.5, 1) and then goes down and right until it hits the origin again.

SOLUTION:
$\frac{2}{3}$
COMMENTARY: Hint
Use [ref:fs-id1167793965702].
:::
:::

## Flux Form of Green’s Theorem
The circulation form of Green’s theorem relates a double integral over region *D* to line integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{T}ds},$ where *C* is the boundary of *D*. The flux form of Green’s theorem relates a double integral over region *D* to the flux across boundary *C*. The flux of a fluid across a curve can be difficult to calculate using the flux line integral. This form of Green’s theorem allows us to translate a difficult flux integral into a double integral that is often easier to calculate.

:::note [theorem] Green’s Theorem, Flux Form
Let *D* be an open, simply connected region with a boundary curve *C* that is a piecewise smooth, simple closed curve that is oriented counterclockwise ([ref:CNX_Calc_Figure_16_04_008]). Let $\textbf{F}=\langle P,Q\rangle$ be a vector field with component functions that have continuous partial derivatives on an open region containing *D*. Then,

$$ {\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds={\displaystyle \iint_{D}{P}_{x}+{Q}_{y}dA}}. $$  {eq:fs-id1167793796153}

:::

> FIGURE {fig:CNX_Calc_Figure_16_04_008} src=../../media/CNX_Calc_Figure_16_04_008.jpg
> alt: A vector field in two dimensions. A generic curve C encloses a simple region D around the origin oriented counterclockwise. Normal vectors N point out and away from the curve into quadrants 1, 3, and 4.
> caption: The flux form of Green’s theorem relates a double integral over region *D* to the flux across curve *C*.

Because this form of Green’s theorem contains unit normal vector **N**, it is sometimes referred to as the {index:*normal form* of Green’s theorem}.

### Proof
Recall that ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}={\displaystyle \int_{C}\text{−}Qdx+Pdy}.$ Let $M=\text{−}Q$ and $N=P.$ By the circulation form of Green’s theorem,

$\begin{array}{rl}{\displaystyle \int_{C}\text{−}Qdx}+Pdy & ={\displaystyle \int_{C}Mdx+Ndy} \\ & ={\displaystyle \iint_{D}{N}_{x}-{M}_{y}dA} \\ & ={\displaystyle \iint_{D}{P}_{x}-{(\text{−}Q)}_{y}dA} \\ & ={\displaystyle \iint_{D}{P}_{x}+{Q}_{y}dA}.\end{array}$  {eq:fs-id1167794213421}

□

:::example {ex:fs-id1167793705200} Applying Green’s Theorem for Flux across a Circle

:::exercise {fs-id1167793705202} type= 
PROBLEM:
Let *C* be a circle of radius *r* centered at the origin ([ref:CNX_Calc_Figure_16_04_009]) and let $\textbf{F}(x,y)=\langle x,y\rangle .$ Calculate the flux across *C*.

> FIGURE {fig:CNX_Calc_Figure_16_04_009} src=../../media/CNX_Calc_Figure_16_04_009.jpg
> alt: A vector field in two dimensions. The arrows point away from the origin in a radial pattern. They are shorter near the origin and much longer further away. A circle with radius 2 and center at the origin is drawn.
> caption: Curve *C* is a circle of radius *r* centered at the origin.

SOLUTION:
Let *D* be the disk enclosed by *C.* The flux across *C* is ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}.$ We could evaluate this integral using tools we have learned, but Green’s theorem makes the calculation much more simple. Let $P(x,y)=x$ and $Q(x,y)=y$ so that $\textbf{F}=\langle P,Q\rangle .$ Note that ${P}_{x}=1={Q}_{y},$ and therefore ${P}_{x}+{Q}_{y}=2.$ By Green’s theorem,

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds={\displaystyle \int {\displaystyle \int_{D}2dA=}}}2{\displaystyle \int {\displaystyle \int_{D}dA.}}$  {eq:fs-id1167793862329}

Since ${\displaystyle \int {\displaystyle \int_{D}dA}}$ is the area of the circle, ${\displaystyle \int {\displaystyle \int_{D}dA}}=\pi {r}^{2}.$ Therefore, the flux across *C* is $2\pi {r}^{2}.$
:::
:::

:::example {ex:fs-id1167793255700} Applying Green’s Theorem for Flux across a Triangle

:::exercise {fs-id1167794283092} type= 
PROBLEM:
Let *S* be the triangle with vertices $(0,0),$ $(1,0),$ and $(0,3)$ oriented clockwise ([ref:CNX_Calc_Figure_16_04_010]). Calculate the flux of $\textbf{F}(x,y)=\langle P(x,y),Q(x,y)\rangle =\langle {x}^{2}+{e}^{y},x+y\rangle$ across *S*.

> FIGURE {fig:CNX_Calc_Figure_16_04_010} src=../../media/CNX_Calc_Figure_16_04_010.jpg
> alt: A vector field in two dimensions. A triangle is drawn oriented clockwise with vertices at (0,0), (1,0), and (0,3). The arrows in the field point to the right and up slightly. The angle is greater the closer they are to the axis.
> caption: Curve *S* is a triangle with vertices $(0,0),$ $(1,0),$ and $(0,3)$ oriented clockwise.

SOLUTION:
To calculate the flux without Green’s theorem, we would need to break the flux integral into three line integrals, one integral for each side of the triangle. Using Green’s theorem to translate the flux line integral into a single double integral is much more simple.
Let *D* be the region enclosed by *S*. Note that ${P}_{x}=2x$ and ${Q}_{y}=1;$ therefore, ${P}_{x}+{Q}_{y}=2x+1.$ Green’s theorem applies only to simple closed curves oriented counterclockwise, but we can still apply the theorem because ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds=\text{−}}{\displaystyle \int_{\text{−}S}\textbf{F}\cdot \textbf{N}ds}$ and $\text{−}S$ is oriented counterclockwise. By Green’s theorem, the flux is

$\begin{array}{rl} \\ \\ \\ {\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds} & ={\displaystyle \int_{\text{−}S}\textbf{F}\cdot \textbf{N}ds} \\ & =\text{−}{\displaystyle \iint_{D}({P}_{x}+{Q}_{y})dA} \\ & =\text{−}{\displaystyle \iint_{D}(2x+1)dA}.\end{array}$  {eq:fs-id1167793956403}

Notice that the top edge of the triangle is the line $y=−3x+3.$ Therefore, in the iterated double integral, the *y*-values run from $y=0$ to $y=−3x+3,$ and we have

$\begin{array}{rl}\text{−}{\displaystyle \iint_{D}(2x+1)dA} & =\text{−}{\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{−3x+3}(2x+1)dydx}} \\ & =\text{−}{\displaystyle \int_{0}^{1}(2x+1)(−3x+3)dx}=\text{−}{\displaystyle \int_{0}^{1}(−6{x}^{2}+3x+3)dx} \\ & =\text{−}{[−2{x}^{3}+\frac{3{x}^{2}}{2}+3x]}_{0}^{1}=-\frac{5}{2}.\end{array}$  {eq:fs-id1167793869968}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793927008} type= 
PROBLEM:
Calculate the flux of $\textbf{F}(x,y)=\langle {x}^{3},{y}^{3}\rangle$ across a unit circle oriented counterclockwise.
SOLUTION:
$\frac{3\pi}{2}$
COMMENTARY: Hint
Apply Green’s theorem and use polar coordinates.
:::
:::

:::example {ex:fs-id1167793293486} Applying Green’s Theorem for Water Flow across a Rectangle

:::exercise {fs-id1167793294642} type= 
PROBLEM:
Water flows from a spring located at the origin. The velocity of the water is modeled by vector field $\textbf{v}(x,y)=\langle 5x+y,x+3y\rangle$ m/sec. Find the amount of water per second that flows across the rectangle with vertices $(−1,−2),(1,−2),(1,3),\;\text{and}\;(−1,3),$ oriented counterclockwise ([ref:CNX_Calc_Figure_16_04_011]).

> FIGURE {fig:CNX_Calc_Figure_16_04_011} src=../../media/CNX_Calc_Figure_16_04_011.jpg
> alt: A vector field in two dimensions. A rectangle is drawn oriented counterclockwise with vertices at (-1,3), (1,3), (-1,-2), and (1,-2). The arrows point out and away from the origin in a radial pattern. However, the arrows in quadrants 2 and 4 curve slightly towards the y axis instead of directly out. The arrows near the origin are short, and those further away from the origin are much longer.
> caption: Water flows across the rectangle with vertices $(−1,−2),(1,−2),(1,3),\;\text{and}\;(−1,3),$ oriented counterclockwise.

SOLUTION:
Let *C* represent the given rectangle and let *D* be the rectangular region enclosed by *C*. To find the amount of water flowing across *C*, we calculate flux ${\displaystyle \int_{C}\textbf{v}⋅\mathbf{\textbf{N}ds}.}$ Let $P(x,y)=5x+y$ and $Q(x,y)=x+3y$ so that $\textbf{v}=(P,Q).$ Then, ${P}_{x}=5$ and ${Q}_{y}=3.$ By Green’s theorem,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{v}⋅\mathbf{\textbf{N}ds}} & ={\displaystyle \iint_{D}({P}_{x}+{Q}_{y})dA} \\ & ={\displaystyle \iint_{D}8dA} \\ & =8(\text{area of}\;D)=80.\end{array}$  {eq:fs-id1167793263085}

Therefore, the water flux is 80 m<sup>2</sup>/sec.
:::
:::
Recall that if vector field **F** is conservative, then **F** does no work around closed curves—that is, the circulation of **F** around a closed curve is zero. In fact, if the domain of **F** is simply connected, then **F** is conservative if and only if the circulation of **F** around any closed curve is zero. If we replace “circulation of **F**” with “flux of **F,**” then we get a definition of a source-free vector field. The following statements are all equivalent ways of defining a source-free field $\textbf{F}=\langle P,Q\rangle$ on a simply connected domain (note the similarities with properties of conservative vector fields):
1. The flux ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}$ across any closed curve *C* is zero.
2. If ${C}_{1}$ and ${C}_{2}$ are curves in the domain of **F** with the same starting points and endpoints, then ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot \textbf{N}ds}={\displaystyle \int_{{C}_{2}}\textbf{F}\cdot \textbf{N}ds}.$ In other words, flux is independent of path.
3. There is a {term:stream function} $g(x,y)$ for **F**. A stream function for $\textbf{F}=\langle P,Q\rangle$ is a function *g* such that $P={g}_{y}$ and $Q=\text{−}{g}_{x}.$ Geometrically, $\textbf{F}(a,b)$ is tangential to the level curve of *g* at $(a,b).$ Since the gradient of *g* is perpendicular to the level curve of *g* at $(a,b),$ stream function *g* has the property $\textbf{F}(a,b)\cdot \text{∇}g(a,b)=0$ for any point $(a,b)$ in the domain of *g*. (Stream functions play the same role for source-free fields that potential functions play for conservative fields.)
4. ${P}_{x}+{Q}_{y}=0$

:::example {ex:fs-id1167794173036} Finding a Stream Function

:::exercise {fs-id1167794173038} type= 
PROBLEM:
Verify that rotation vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle$ is source free, and find a stream function for **F**.
SOLUTION:
Note that the domain of **F** is all of ${\mathbb{R}}^{2},$ which is simply connected. Therefore, to show that **F** is source free, we can show any of items 1 through 4 from the previous list to be true. In this example, we show that item 4 is true. Let $P(x,y)=y$ and $Q(x,y)=\text{−}x.$ Then ${P}_{x}+{Q}_{y}=0+0=0.$ Thus, **F** is source free.
To find a stream function for **F**, proceed in the same manner as finding a potential function for a conservative field. Let *g* be a stream function for **F**. Then ${g}_{y}=y,$ which implies that

$g(x,y)=\frac{{y}^{2}}{2}+h(x).$  {eq:fs-id1167794142487}

Since $\text{−}{g}_{x}=Q=\text{−}x,$ we have $h\text{′}(x)=x.$ Therefore,

$h(x)=\frac{{x}^{2}}{2}+C.$  {eq:fs-id1167793287827}

Letting $C=0$ gives stream function

$g(x,y)=\frac{{x}^{2}}{2}+\frac{{y}^{2}}{2}.$  {eq:fs-id1167793433377}

To confirm that *g* is a stream function for **F**, note that ${g}_{y}=y=P$ and $\text{−}{g}_{x}=\text{−}x=Q.$
Notice that source-free rotation vector field $\textbf{F}(x,y)=\langle y,\text{−}x\rangle$ is perpendicular to conservative radial vector field $\text{∇}g=\langle x,y\rangle$ ([ref:CNX_Calc_Figure_16_04_012]).

> FIGURE {fig:CNX_Calc_Figure_16_04_012} src=../../media/CNX_Calc_Figure_16_04_012.jpg
> alt: Two vector fields in two dimensions. The first has arrows surrounding the origin in a clockwise circular pattern. The second has arrows pointing out and away from the origin in a radial manner. Circles with radii 1.5, 2, and 2.5 and centers at the origin are drawn in both. The arrows near the origin are shorter than those much further away. The first is labeled F(x,y) = <y, -x> and the second is labeled for the gradient, delta g = <x, -y>.
> caption: (a) In this image, we see the three-level curves of *g* and vector field **F**. Note that the **F** vectors on a given level curve are tangent to the level curve. (b) In this image, we see the three-level curves of *g* and vector field $\text{∇}g.$ The gradient vectors are perpendicular to the corresponding level curve. Therefore, $\textbf{F}(a,b)\cdot \text{∇}g(a,b)=0$ for any point in the domain of *g*.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793505730} type= 
PROBLEM:
Find a stream function for vector field $\textbf{F}(x,y)=\langle x\;\text{sin}\;y,\text{cos}\;y\rangle .$
SOLUTION:
$g(x,y)=\text{−}x\;\text{cos}\;y$
COMMENTARY: Hint
Follow the outline provided in the previous example.
:::
:::
Vector fields that are both conservative and source free are important vector fields. One important feature of conservative and source-free vector fields on a simply connected domain is that any potential function $f$ of such a field satisfies Laplace’s equation ${f}_{xx}+{f}_{yy}=0.$ {index:Laplace’s equation} is foundational in the field of partial differential equations because it models such phenomena as gravitational and magnetic potentials in space, and the velocity potential of an ideal fluid. A function that satisfies Laplace’s equation is called a {index:*harmonic* function}. Therefore any potential function of a conservative and source-free vector field is harmonic.
To see that any potential function of a conservative and source-free vector field on a simply connected domain is harmonic, let $f$ be such a potential function of vector field $\textbf{F}=\langle P,Q\rangle .$ Then, ${f}_{x}=P$ and ${f}_{x}=Q$ because $\text{∇}f=\textbf{F}.$ Therefore, ${f}_{xx}={P}_{x}$ and ${f}_{yy}={Q}_{y}.$ Since **F** is source free, ${f}_{xx}+{f}_{yy}={P}_{x}+{Q}_{y}=0,$ and we have that $f$ is harmonic.

:::example {ex:fs-id1167793953529} Satisfying Laplace’s Equation

:::exercise {fs-id1167793953531} type= 
PROBLEM:
For vector field $\textbf{F}(x,y)=\langle {e}^{x}\text{sin}\;y,{e}^{x}\text{cos}\;y\rangle ,$ verify that the field is both conservative and source free, find a potential function for **F**, and verify that the potential function is harmonic.
SOLUTION:
Let $P(x,y)={e}^{x}\text{sin}\;y$ and $Q(x,y)={e}^{x}\text{cos}\;y.$ Notice that the domain of **F** is all of two-space, which is simply connected. Therefore, we can check the cross-partials of **F** to determine whether **F** is conservative. Note that ${P}_{y}={e}^{x}\text{cos}\;y={Q}_{x},$ so **F** is conservative. Since ${P}_{x}={e}^{x}\text{sin}\;y$ and ${Q}_{y}=-{e}^{x}\text{sin}\;y,{P}_{x}+{Q}_{y}=0$ and the field is source free.
To find a potential function for **F**, let $f$ be a potential function. Then, $\text{∇}f=\textbf{F},$ so ${f}_{x}={e}^{x}\text{sin}\;y.$ Integrating this equation with respect to *x* gives $f(x,y)={e}^{x}\text{sin}\;y+h(y).$ Since ${f}_{y}={e}^{x}\text{cos}\;y,$ differentiating $f$ with respect to *y* gives ${e}^{x}\text{cos}\;y={e}^{x}\text{cos}\;y+h\text{′}(y).$ Therefore, we can take $h(y)=0,$ and $f(x,y)={e}^{x}\text{sin}\;y$ is a potential function for $f.$
To verify that $f$ is a harmonic function, note that ${f}_{xx}=\frac{\partial}{\partial x}({e}^{x}\text{sin}\;y)={e}^{x}\text{sin}\;y$ and
${f}_{yy}=\frac{\partial}{\partial x}({e}^{x}\text{cos}\;y)=\text{−}{e}^{x}\text{sin}\;y.$ Therefore, ${f}_{xx}+{f}_{yy}=0,$ and $f$ satisfies Laplace’s equation.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793464354} type= 
PROBLEM:
Is the function $f(x,y)={e}^{x+5y}$ harmonic?
SOLUTION:
No
COMMENTARY: Hint
Determine whether the function satisfies Laplace’s equation.
:::
:::

## Green’s Theorem on General Regions
Green’s theorem, as stated, applies only to regions that are simply connected—that is, Green’s theorem as stated so far cannot handle regions with holes. Here, we extend Green’s theorem so that it does work on regions with finitely many holes ([ref:CNX_Calc_Figure_16_04_013]).

> FIGURE {fig:CNX_Calc_Figure_16_04_013} src=../../media/CNX_Calc_Figure_16_04_013.jpg
> alt: A nonsimply connected, oval-shaped region with three circular holes.
> caption: Green’s theorem, as stated, does not apply to a nonsimply connected region with three holes like this one.

Before discussing extensions of Green’s theorem, we need to go over some terminology regarding the boundary of a region. Let *D* be a region and let *C* be a component of the boundary of *D*. We say that *C* is *positively oriented* if, as we walk along *C* in the direction of orientation, region *D* is always on our left. Therefore, the counterclockwise orientation of the boundary of a disk is a positive orientation, for example. Curve *C* is *negatively oriented* if, as we walk along *C* in the direction of orientation, region *D* is always on our right. The clockwise orientation of the boundary of a disk is a negative orientation, for example.
Let *D* be a region with finitely many holes (so that *D* has finitely many boundary curves), and denote the boundary of *D* by $\partial D$ ([ref:CNX_Calc_Figure_16_04_014]). To extend Green’s theorem so it can handle *D*, we divide region *D* into two regions, ${D}_{1}$ and ${D}_{2}$ (with respective boundaries $\partial {D}_{1}$ and $\partial {D}_{2}),$ in such a way that $D={D}_{1}\cup {D}_{2}$ and neither ${D}_{1}$ nor ${D}_{2}$ has any holes ([ref:CNX_Calc_Figure_16_04_014]).

> FIGURE {fig:CNX_Calc_Figure_16_04_014} src=../../media/CNX_Calc_Figure_16_04_014.jpg
> alt: Two regions. The first region D is oval-shaped with three circular holes in it. Its oriented boundary is counterclockwise. The second region is region D split horizontally down the middle into two simply connected regions with no holes. It still has a boundary oriented counterclockwise.
> caption: (a) Region *D* with an oriented boundary has three holes. (b) Region *D* split into two simply connected regions has no holes.

Assume the boundary of *D* is oriented as in the figure, with the inner holes given a negative orientation and the outer boundary given a positive orientation. The boundary of each simply connected region ${D}_{1}$ and ${D}_{2}$ is positively oriented. If **F** is a vector field defined on *D*, then Green’s theorem says that

$\begin{array}{rl}{\displaystyle \int_{\partial D}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{\partial {D}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{\partial {D}_{2}}\textbf{F}\cdot d\textbf{r}} \\ & ={\displaystyle \iint_{{D}_{1}}{Q}_{x}-{P}_{y}dA+}{\displaystyle \iint_{{D}_{2}}{Q}_{x}-{P}_{y}dA} \\ & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}.\end{array}$  {eq:fs-id1167793262754}

Therefore, Green’s theorem still works on a region with holes.
To see how this works in practice, consider annulus *D* in [ref:CNX_Calc_Figure_16_04_015] and suppose that $\textbf{F}=\langle P,Q\rangle$ is a vector field defined on this annulus. Region *D* has a hole, so it is not simply connected. Orient the outer circle of the annulus counterclockwise and the inner circle clockwise ([ref:CNX_Calc_Figure_16_04_015]) so that, when we divide the region into ${D}_{1}$ and ${D}_{2},$ we are able to keep the region on our left as we walk along a path that traverses the boundary. Let ${D}_{1}$ be the upper half of the annulus and ${D}_{2}$ be the lower half. Neither of these regions has holes, so we have divided *D* into two simply connected regions.
We label each piece of these new boundaries as ${P}_{i}$ for some *i,* as in [ref:CNX_Calc_Figure_16_04_015]. If we begin at *P* and travel along the oriented boundary, the first segment is ${P}_{1},$ then ${P}_{2},{P}_{3},$ and ${P}_{4}.$ Now we have traversed ${D}_{1}$ and returned to *P.* Next, we start at *P* again and traverse ${D}_{2}.$ Since the first piece of the boundary is the same as ${P}_{4}$ in ${D}_{1},$ but oriented in the opposite direction, the first piece of ${D}_{2}$ is $\text{−}{P}_{4}.$ Next, we have ${P}_{5},$ then $\text{−}{P}_{2},$ and finally ${P}_{6}.$

> FIGURE {fig:CNX_Calc_Figure_16_04_015} src=../../media/CNX_Calc_Figure_16_04_015.jpg
> alt: A diagram of an annulus – a circular region with a hole in in like a donut. Its boundary is oriented counterclockwise. One point P on the outer boundary is labeled. It is the right endpoint of the horizontal diameter. The annulus is split horizontally down the middle into two separate regions that are each simply connected. Point P is labeled on both of these regions, D1 and D2. Each region has boundaries oriented counterclockwise. The upper curve of D1 is labeled P1, the left flat side is P2, the lower curve is P3, and the right flat side is P4. The lower curve of D2 is P6, the left flat side is –P2, the upper curve is P5, and the right flat side is –P4.
> caption: Breaking the annulus into two separate regions gives us two simply connected regions. The line integrals over the common boundaries cancel out.

[ref:CNX_Calc_Figure_16_04_015] shows a path that traverses the boundary of *D*. Notice that this path traverses the boundary of region ${D}_{1},$ returns to the starting point, and then traverses the boundary of region ${D}_{2}.$ Furthermore, as we walk along the path, the region is always on our left. Notice that this traversal of the ${P}_{i}$ paths covers the entire boundary of region *D.* If we had only traversed one portion of the boundary of *D*, then we cannot apply Green’s theorem to *D*.
The boundary of the upper half of the annulus, therefore, is ${P}_{1}\cup {P}_{2}\cup {P}_{3}\cup {P}_{4}$ and the boundary of the lower half of the annulus is $\text{−}{P}_{4}\cup {P}_{5}\cup -{P}_{2}\cup {P}_{6}.$ Then, Green’s theorem implies

$\begin{array}{rl}{\displaystyle \int_{\partial D}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{{P}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{2}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{3}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{4}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{\text{−}{P}_{4}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{5}}\textbf{F}\cdot d\textbf{r}}-{\displaystyle \int_{{P}_{2}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{6}}\textbf{F}\cdot d\textbf{r}} \\ & ={\displaystyle \int_{{P}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{2}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{3}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{4}}\textbf{F}\cdot d\textbf{r}}-{\displaystyle \int_{{P}_{4}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{5}}\textbf{F}\cdot d\textbf{r}}-{\displaystyle \int_{{P}_{2}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{6}}\textbf{F}\cdot d\textbf{r}} \\ & ={\displaystyle \int_{{P}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{3}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{5}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{{P}_{6}}\textbf{F}\cdot d\textbf{r}} \\ & ={\displaystyle \int_{\partial {D}_{1}}\textbf{F}\cdot d\textbf{r}}+{\displaystyle \int_{\partial {D}_{2}}\textbf{F}\cdot d\textbf{r}} \\ & ={\displaystyle \iint_{{D}_{1}}({Q}_{x}-{P}_{y})dA+}{\displaystyle \iint_{{D}_{2}}({Q}_{x}-{P}_{y})dA} \\ & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}.\end{array}$  {eq:fs-id1167793522400}

Therefore, we arrive at the equation found in Green’s theorem—namely,

${\displaystyle \int_{\partial D}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}.$  {eq:fs-id1167793892954}

The same logic implies that the flux form of Green’s theorem can also be extended to a region with finitely many holes:

${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}={\displaystyle \iint_{D}({P}_{x}+{Q}_{y})dA.}$  {eq:fs-id1167793928382}

:::example {ex:fs-id1167793931838} Using Green’s Theorem on a Region with Holes

:::exercise {fs-id1167793931840} type= 
PROBLEM:
Calculate integral

$\oint_{\partial D}(\text{sin}\;\text{x}-\frac{{y}^{3}}{3})dx+(\frac{{x}^{3}}{3}+\text{sin}\;\text{y})dy,$  {eq:fs-id1167793925128}

where *D* is the annulus given by the polar inequalities $1\le \textbf{r}\le 2,$ $0\le \theta \le 2\pi .$
SOLUTION:
Although *D* is not simply connected, we can use the extended form of Green’s theorem to calculate the integral. Since the integration occurs over an annulus, we convert to polar coordinates:

$\begin{array}{rl}{\displaystyle \int_{\partial D}(\text{sin}\;x-\frac{{y}^{3}}{3})dx+(\frac{{x}^{3}}{3}+\text{sin}\;y)dy} & ={\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA} \\ & ={\displaystyle \iint_{D}({x}^{2}+{y}^{2})dA} \\ & ={\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{1}^{2}{r}^{3}drd\theta}}={\displaystyle \int_{0}^{2\pi}\frac{15}{4}d\theta} \\ & =\frac{15\pi}{2}.\end{array}$  {eq:fs-id1167793322346}

:::
:::

:::example {ex:fs-id1167793505989} Using the Extended Form of Green’s Theorem

:::exercise {fs-id1167793505991} type= 
PROBLEM:
Let $\textbf{F}=\langle P,Q\rangle =\langle \frac{y}{{x}^{2}+{y}^{2}},-\frac{x}{{x}^{2}+{y}^{2}}\rangle$ and let *C* be any simple closed curve in a plane oriented counterclockwise. What are the possible values of ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}?}$
SOLUTION:
We use the extended form of Green’s theorem to show that ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ is either 0 or $−2\pi$—that is, no matter how crazy curve *C* is, the line integral of **F** along *C* can have only one of two possible values. We consider two cases: the case when *C* encompasses the origin and the case when *C* does not encompass the origin.

### Case 1: *C* Does Not Encompass the Origin
In this case, the region enclosed by *C* is simply connected because the only hole in the domain of **F** is at the origin. We showed in our discussion of cross-partials that **F** satisfies the cross-partial condition. If we restrict the domain of **F** just to *C* and the region it encloses, then **F** with this restricted domain is now defined on a simply connected domain. Since **F** satisfies the cross-partial property on its restricted domain, the field **F** is conservative on this simply connected region and hence the circulation ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ is zero.

### Case 2: *C* Does Encompass the Origin
In this case, the region enclosed by *C* is not simply connected because this region contains a hole at the origin. Let ${C}_{1}$ be a circle of radius *a* centered at the origin so that ${C}_{1}$ is entirely inside the region enclosed by *C* ([ref:CNX_Calc_Figure_16_04_016]). Give ${C}_{1}$ a clockwise orientation.

> FIGURE {fig:CNX_Calc_Figure_16_04_016} src=../../media/CNX_Calc_Figure_16_04_016.jpg
> alt: A diagram in two dimensions. A circle C1 oriented clockwise is centered at the origin completely inside a generic curve C that is in all four quadrants. Curve C is oriented counterclockwise.
> caption: Choose circle ${C}_{1}$ centered at the origin that is contained entirely inside *C*.

Let *D* be the region between ${C}_{1}$ and *C*, and *C* is orientated counterclockwise. By the extended version of Green’s theorem,

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}+{\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}} & ={\displaystyle \iint_{D}{Q}_{x}-{P}_{y}dA} \\ & ={\displaystyle \iint_{D}-\frac{{y}^{2}-{x}^{2}}{{({x}^{2}+{y}^{2})}^{2}}+}\frac{{y}^{2}-{x}^{2}}{{({x}^{2}+{y}^{2})}^{2}}dA \\ & =0,\end{array}$  {eq:fs-id1167793267037}

and therefore

${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}=}-{\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}.}$  {eq:fs-id1167793951781}

Since ${C}_{1}$ is a specific curve, we can evaluate ${\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}}.$ Let

$x=a\;\text{cos}\;t,y=–a\;\text{sin}\;t,0\le t\le 2\pi$  {eq:fs-id1167793941404}

be a parameterization of ${C}_{1}.$ Then,

$\begin{array}{rl}{\displaystyle \int_{{C}_{1}}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{0}^{2\pi}\textbf{F}(\textbf{r}(t))\cdot \textbf{r}\text{′}(t)dt} \\ & ={\displaystyle \int_{0}^{2\pi}\langle -\frac{\text{sin}(t)}{a},-\frac{\text{cos}(t)}{a}\rangle \cdot \langle \text{−}a\;\text{sin}(t),\text{−}a\;\text{cos}(t)\rangle dt} \\ & ={\displaystyle \int_{0}^{2\pi}{\text{sin}}^{2}(t)+{\text{cos}}^{2}(t)dt}={\displaystyle \int_{0}^{2\pi}dt}=2\pi .\end{array}$  {eq:fs-id1167793470631}

Therefore, ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}=}-2\pi .$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794187613} type= 
PROBLEM:
Calculate integral ${\displaystyle \int_{\partial D}\textbf{F}\cdot d\textbf{r},}$ where *D* is the annulus given by the polar inequalities $2\le r\le 5,0\le \theta \le 2\pi ,$ and $\textbf{F}(x,y)=\langle {x}^{3},5x+{e}^{y}\text{sin}\;y\rangle .$
SOLUTION:
$105\pi$
COMMENTARY: Hint
Use the extended version of Green’s theorem.
:::
:::

:::note [project] Measuring Area from a Boundary: The Planimeter

> FIGURE {fig:CNX_Calc_Figure_16_04_017} src=../../media/CNX_Calc_Figure_16_04_017.jpg
> alt: An MRI image of a patient’s brain with a tumor highlighted in red.
> caption: This magnetic resonance image of a patient’s brain shows a tumor, which is highlighted in red. (credit: modification of work by Christaras A, Wikimedia Commons)

Imagine you are a doctor who has just received a magnetic resonance image of your patient’s brain. The brain has a tumor ([ref:CNX_Calc_Figure_16_04_017]). How large is the tumor? To be precise, what is the area of the red region? The red cross-section of the tumor has an irregular shape, and therefore it is unlikely that you would be able to find a set of equations or inequalities for the region and then be able to calculate its area by conventional means. You could approximate the area by chopping the region into tiny squares (a Riemann sum approach), but this method always gives an answer with some error.
Instead of trying to measure the area of the region directly, we can use a device called a *rolling planimeter* to calculate the area of the region exactly, simply by measuring its boundary. In this project you investigate how a planimeter works, and you use Green’s theorem to show the device calculates area correctly.
A rolling planimeter is a device that measures the area of a planar region by tracing out the boundary of that region ([ref:CNX_Calc_Figure_16_04_SP2]). To measure the area of a region, we simply run the tracer of the planimeter around the boundary of the region. The planimeter measures the number of turns through which the wheel rotates as we trace the boundary; the area of the shape is proportional to this number of wheel turns. We can derive the precise proportionality equation using Green’s theorem. As the tracer moves around the boundary of the region, the tracer arm rotates and the roller moves back and forth (but does not rotate).

> FIGURE {fig:CNX_Calc_Figure_16_04_SP2} src=../../media/CNX_Calc_Figure_16_04_018.jpg
> alt: Two images. The first shows a rolling planimeter. A horizontal bar has a roller attached to it perpendicularly with a pivot. It does not rotate itself; it only moves back and forth. To the right of the roller is the tracer arm with a wheel and a tracer at the very end. The second shows an interior view of a rolling planimeter. The wheel cannot turn if the planimeter is moving back and forth with the tracer arm perpendicular to the roller.
> caption: (a) A rolling planimeter. The pivot allows the tracer arm to rotate. The roller itself does not rotate; it only moves back and forth. (b) An interior view of a rolling planimeter. Notice that the wheel cannot turn if the planimeter is moving back and forth with the tracer arm perpendicular to the roller.

Let *C* denote the boundary of region *D*, the area to be calculated. As the tracer traverses curve *C*, assume the roller moves along the *y*-axis (since the roller does not rotate, one can assume it moves along a straight line). Use the coordinates $(x,y)$ to represent points on boundary *C*, and coordinates $(0,Y)$ to represent the position of the pivot. As the planimeter traces *C*, the pivot moves along the *y*-axis while the tracer arm rotates on the pivot.

:::note [media-2] 
Watch a [short animation](http://www.openstax.org/l/20_planimeter) of a planimeter in action.
:::
Begin the analysis by considering the motion of the tracer as it moves from point $(x,y)$ counterclockwise to point $(x+dx,y+dy)$ that is close to $(x,y)$ ([ref:CNX_Calc_Figure_16_04_SP3]). The pivot also moves, from point $(0,Y)$ to nearby point $(0,Y+dY).$ How much does the wheel turn as a result of this motion? To answer this question, break the motion into two parts. First, roll the pivot along the *y*-axis from $(0,Y)$ to $(0,Y+dY)$ without rotating the tracer arm. The tracer arm then ends up at point $(x,y+dY)$ while maintaining a constant angle $ϕ$ with the *x*-axis. Second, rotate the tracer arm by an angle $d\theta$ without moving the roller. Now the tracer is at point $(x+dx,y+dy).$ Let $l$ be the distance from the pivot to the wheel and let *L* be the distance from the pivot to the tracer (the length of the tracer arm).

> FIGURE {fig:CNX_Calc_Figure_16_04_SP3} src=../../media/CNX_Calc_Figure_16_04_019.jpg
> alt: A diagram in quadrants 1 and 2 showing the motion of the planimeter. Two points are labeled on the y axis: (0, Y) and (0, Y + dY), where Y is less than Y + dY. The first point is the pivot. Three points are labeled further up and to the right in quadrant 1: (x, y), (x, y + dy), and (x + dx, y + dy). Note that the uppercase Y and the lowercase y are not the same; y is much larger. A line segment is drawn between (0,Y) and (x,y). About midway down this line is a mark labeled for the wheel, and the (x,y) endpoint is labeled for the tracer. Let l be the distance from the pivot to the wheel, and let L be the distance from the pivot to the tracer. Line segments are also drawn from (0, Y + dY) to each of the other points in quadrant 1. The angle between the line segment with (0,Y) as an endpoint and the y axis is labeled phi. The angle between the line segments with (0, Y+dY) as an endpoint is “d theta.” A curve is drawn going through the wheel, the tracer, and the three points in quadrant 1, up and across the y axis, down and back across the y axis at a smaller y value lose to the height of the tracer, and down across the line segments and back to the wheel.
> caption: Mathematical analysis of the motion of the planimeter.

1. Explain why the total distance through which the wheel rolls the small motion just described is $\text{sin}\;ϕdY+ld\theta =\frac{x}{L}dY+ld\theta .$
2. Show that ${\displaystyle \int_{C}d\theta =0.}$
3. Use step 2 to show that the total rolling distance of the wheel as the tracer traverses curve *C* is

Total wheel roll $=\frac{1}{L}{\displaystyle \int_{C}xdY.}$

Now that you have an equation for the total rolling distance of the wheel, connect this equation to Green’s theorem to calculate area *D* enclosed by *C*.
4. Show that ${x}^{2}+{(y-Y)}^{2}={L}^{2}.$
5. Assume the orientation of the planimeter is as shown in [ref:CNX_Calc_Figure_16_04_SP3]. Explain why $Y\le y,$ and use this inequality to show there is a unique value of *Y* for each point $(x,y)\text{:}$ $Y=y-\sqrt{{L}^{2}-{x}^{2}}.$
6. Use step 5 to show that $dY=dy+\frac{x}{\sqrt{{L}^{2}-{x}^{2}}}dx.$
7. Use Green’s theorem to show that ${\displaystyle \int_{C}\frac{x}{\sqrt{{L}^{2}-{x}^{2}}}dx=0.}$
8. Use step 7 to show that the total wheel roll is

Total wheel roll $=\frac{1}{L}{\displaystyle \int_{C}xdy.}$

It took a bit of work, but this equation says that the variable of integration *Y* in step 3 can be replaced with *y*.
9. Use Green’s theorem to show that the area of *D* is ${\displaystyle \int_{C}xdy.}$ The logic is similar to the logic used to show that the area of $D=\frac{1}{2}{\displaystyle \int_{C}\text{−}ydx+xdy.}$
10. Conclude that the area of *D* equals the length of the tracer arm multiplied by the total rolling distance of the wheel.

You now know how a planimeter works and you have used Green’s theorem to justify that it works. To calculate the area of a planar region *D*, use a planimeter to trace the boundary of the region. The area of the region is the length of the tracer arm multiplied by the distance the wheel rolled.
:::

## Key Concepts {section:key-concepts}
- Green’s theorem relates the integral over a connected region to an integral over the boundary of the region. Green’s theorem is a version of the Fundamental Theorem of Calculus in one higher dimension.
- Green’s Theorem comes in two forms: a circulation form and a flux form. In the circulation form, the integrand is $\textbf{F}\cdot \textbf{T}.$ In the flux form, the integrand is $\textbf{F}\cdot \textbf{N}.$
- Green’s theorem can be used to transform a difficult line integral into an easier double integral, or to transform a difficult double integral into an easier line integral.
- A vector field is source free if it has a stream function. The flux of a source-free vector field across a closed curve is zero, just as the circulation of a conservative vector field across a closed curve is zero.

## Key Equations {section:key-equations}

> TABLE {tab:eip-559} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Green’s theorem, circulation form** | ${\displaystyle \int_{C}Pdx+Qdy={\displaystyle \iint_{D}{Q}_{x}-{P}_{y}dA,}}$ where *C* is the boundary of *D* |
| **Green’s theorem, flux form** | $\int_{C}\text{F}\cdot \text{N}ds=\iint_{D}{P}_{x}+{Q}_{y}dA$ |
| **Green’s theorem, extended version** | ${\displaystyle \int_{\partial D}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{D}{Q}_{x}-{P}_{y}dA}$ |

##  {section:section-exercises}
For the following exercises, evaluate the line integrals by applying Green’s theorem.

:::exercise {fs-id1167793945268} type= 
PROBLEM:
${\displaystyle \int_{C}^{}2xydx+(x+y)dy},$ where *C* is the path from (0, 0) to (1, 1) along the graph of $y={x}^{3}$ and from (1, 1) to (0, 0) along the graph of $y=x$ oriented in the counterclockwise direction
:::

:::exercise {fs-id1167793468339} type= 
PROBLEM:
${\displaystyle \int_{C}^{}2xydx+(x+y)dy},$ where *C* is the boundary of the region lying between the graphs of $y=0$ and $y=4-{x}^{2}$ oriented in the counterclockwise direction
SOLUTION:
${\displaystyle \int_{C}^{}2xydx+(x+y)dy}=\frac{32}{3}$
:::

:::exercise {fs-id1167794094421} type= 
PROBLEM:
${\displaystyle \int_{C}^{}2\;\text{arctan}(\frac{y}{x})dx+\text{ln}({x}^{2}+{y}^{2})dy,}$ where *C* is defined by $x=4+2\;\text{cos}\;\theta ,y=4\;\text{sin}\;\theta$ oriented in the counterclockwise direction
:::

:::exercise {fs-id1167793554059} type= 
PROBLEM:
${\displaystyle \int_{C}^{}\text{sin}\;x\;\text{cos}\;ydx+(xy+\text{cos}\;x\;\text{sin}\;y)dy}\text{,}$ where *C* is the boundary of the region lying between the graphs of $y=x$ and $y=\sqrt{x}$ oriented in the counterclockwise direction
SOLUTION:
${\displaystyle \int_{C}^{}\text{sin}\;x\;\text{cos}\;ydx+(xy+\text{cos}\;x\;\text{sin}\;y)dy}=\frac{1}{12}$
:::

:::exercise {fs-id1167793939824} type= 
PROBLEM:
${\displaystyle \int_{C}^{}xydx+(x+y)dy},$ where *C* is the boundary of the region lying between the graphs of ${x}^{2}+{y}^{2}=1$ and ${x}^{2}+{y}^{2}=9$ oriented in the counterclockwise direction
:::

:::exercise {fs-id1167793275441} type= 
PROBLEM:
${\displaystyle \int_{C}(\text{−}ydx+xdy)},$ where *C* consists of line segment *C*<sub>1</sub> from $(−1,0)$ to (1, 0), followed by the semicircular arc *C*<sub>2</sub> from (1, 0) back to (–1, 0)
SOLUTION:
${\displaystyle \int_{C}(\text{−}ydx+xdy)}=\pi$
:::
For the following exercises, use Green’s theorem.

:::exercise {fs-id1167794292845} type= 
PROBLEM:
Let *C* be the curve consisting of line segments from (0, 0) to (1, 1) to (0, 1) and back to (0, 0). Find the value of ${\displaystyle \int_{C}xydx+\sqrt{{y}^{2}+1}dy.}$
:::

:::exercise {fs-id1167793597265} type= 
PROBLEM:
Evaluate line integral ${\displaystyle \int_{C}x{e}^{−2x}dx+({x}^{4}+2{x}^{2}{y}^{2})dy,}$ where *C* is the boundary of the region between circles ${x}^{2}+{y}^{2}=1$ and ${x}^{2}+{y}^{2}=4,$ and is a positively oriented curve.
SOLUTION:
${\displaystyle \int_{C}x{e}^{−2x}dx+({x}^{4}+2{x}^{2}{y}^{2})dy=0}$
:::

:::exercise {fs-id1167794127173} type= 
PROBLEM:
Find the counterclockwise circulation of field $\textbf{F}(x,y)=xy\textbf{i}+{y}^{2}\textbf{j}$ around and over the boundary of the region enclosed by curves $y={x}^{2}$ and $y=x$ in the first quadrant and oriented in the counterclockwise direction.

> IMAGE {img:fs-id1167793616498} src=../../media/CNX_Calc_Figure_16_04_201.jpg
> alt: A vector field with focus on quadrant 1. A line is drawn from (0,0) to (1,1) according to function y=x, and a curve is also drawn according to the function y=x^2. The region enclosed between the two functions is shaded. Te=he arrows closer to the origin are much smaller than those further away, particularly vertically. The arrows point up and away from the origin to the right in the part of quadrant 1 shown.

:::

:::exercise {fs-id1167794011994} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}{y}^{3}dx-{x}^{3}{y}^{2}dy},$ where *C* is the positively oriented circle of radius 2 centered at the origin.
SOLUTION:
${\displaystyle \int_{C}{y}^{3}dx-{x}^{3}ydy=−20\pi}$
:::

:::exercise {fs-id1167793281662} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}{y}^{3}dx-{x}^{3}dy},$ where *C* includes the two circles of radius 2 and radius 1 centered at the origin, both with positive orientation.

> IMAGE {img:fs-id1167794200450} src=../../media/CNX_Calc_Figure_16_04_202.jpg
> alt: A vector field in two dimensions. The arrows surround the origin in a clockwise circular motion. Those close to the origin are much smaller than those further away. A circle of radius 2 and a circle of radius with centers at the origin is drawn in, and the region between the two is shaded.

:::

:::exercise {fs-id1167794006336} type= 
PROBLEM:
Calculate ${\displaystyle \int_{C}\text{−}{x}^{2}ydx+x{y}^{2}dy},$ where *C* is a circle of radius 2 centered at the origin and oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}\text{−}{x}^{2}ydx+x{y}^{2}dy}=8\pi$
:::

:::exercise {fs-id1167793828726} type= 
PROBLEM:
Calculate integral ${\displaystyle \int_{C}2[y+x\;\text{sin}(y)]dx+[{x}^{2}\text{cos}(y)-3{y}^{2}]dy}$ along triangle *C* with vertices (0, 0), (1, 0) and (1, 1), oriented counterclockwise, using Green’s theorem.
:::

:::exercise {fs-id1167793313184} type= 
PROBLEM:
Evaluate integral ${\displaystyle \int_{C}({x}^{2}+{y}^{2})dx+2xydy},$ where *C* is the curve that follows parabola $y={x}^{2}\;\text{from}\;(0,0)\text{to}(2,4),$ then the line from (2, 4) to (2, 0), and finally the line from (2, 0) to (0, 0).

> IMAGE {img:fs-id1167793377757} src=../../media/CNX_Calc_Figure_16_04_203.jpg
> alt: A vector field in quadrant 1. The arrows are much smaller closer to the origin. They point up and away from the origin, with increasing slope the further they are to the right. The curve follows the parabola y=x^2 from the origin to (2,4), the line from (2,4) to (2,0), and the line from (2,0) to (0,0). The area under y=x^2 and below the parabola is shaded.

SOLUTION:
${\displaystyle \int_{C}({x}^{2}+{y}^{2})dx+2xydy}=0$
:::

:::exercise {fs-id1167793468178} type= 
PROBLEM:
Evaluate line integral ${\displaystyle \int_{C}(y-\text{sin}(y)\text{cos}(y))dx+2x\;{\text{sin}}^{2}(y)dy},$ where *C* is oriented in a counterclockwise path around the region bounded by $x=−1,x=2,y=4-{x}^{2},$ and $y=x-2.$

> IMAGE {img:fs-id1167793511329} src=../../media/CNX_Calc_Figure_16_04_204.jpg
> alt: A vector field in two dimensions. The arrows are smaller the closer they are to the origin, particular vertically. Curve C follows a counterclockwise path around the region bounded by x=-1, x=2, y = 4-x^2, and y = x-2. The region is shaded.

:::
For the following exercises, use Green’s theorem to find the area.

:::exercise {fs-id1167793570088} type= 
PROBLEM:
Find the area between ellipse $\frac{{x}^{2}}{9}+\frac{{y}^{2}}{4}=1$ and circle ${x}^{2}+{y}^{2}=25.$
SOLUTION:
$A=19\pi$
:::

:::exercise {fs-id1167794292796} type= 
PROBLEM:
Find the area of the region enclosed by parametric equation

$p(\theta )=(\text{cos}(\theta )-{\text{cos}}^{2}(\theta ))\textbf{i}+(\text{sin}(\theta )-\text{cos}(\theta )\text{sin}(\theta ))\textbf{j}\;\text{for}\;0\le \theta \le 2\pi .$  {eq:fs-id1167794292803}

> IMAGE {img:fs-id1167793248088} src=../../media/CNX_Calc_Figure_16_04_205.jpg
> alt: A cardioid beginning at the origin, going through (0,1), (-2,0), (0,-1), and back to the origin.

:::

:::exercise {fs-id1167793535017} type= 
PROBLEM:
Find the area of the region bounded by hypocycloid $\textbf{r}(t)={\text{cos}}^{3}(t)\textbf{i}+{\text{sin}}^{3}(t)\textbf{j}.$ The curve is parameterized by $t\in [0,2\pi ].$
SOLUTION:
$A=\frac{3\pi}{8}$
:::

:::exercise {fs-id1167794170761} type= 
PROBLEM:
Find the area of a pentagon with vertices $(0,4),(4,1),(3,0),(−1,−1),$ and $(−2,2).$
:::

:::exercise {fs-id1167793597229} type= 
PROBLEM:
Use Green’s theorem to evaluate $\int_{{C}^{+}}({y}^{2}+{x}^{3})dx+{x}^{4}dy,$ where ${C}^{+}$ is the perimeter of square $[0,1]\;\times \;[0,1]$ oriented counterclockwise.
SOLUTION:
${\displaystyle \int_{C+}({y}^{2}+{x}^{3})dx+{x}^{4}dy=0}$
:::

:::exercise {fs-id1167793584472} type= 
PROBLEM:
Use Green’s theorem to prove the area of a disk with radius $a$ is $A=\pi {a}^{2}.$
:::

:::exercise {fs-id1167793931565} type= 
PROBLEM:
Use Green’s theorem to find the area of one loop of a four-leaf rose $r=3\;\text{sin}\;2\theta .$ (*Hint*: $xdy-ydx={r}^{2}d\theta ).$
SOLUTION:
$A=\frac{9\pi}{8}$
:::

:::exercise {fs-id1167794200139} type= 
PROBLEM:
Use Green’s theorem to find the area under one arch of the cycloid given by parametric plane $x=t-\text{sin}\;t,y=1-\text{cos}\;t,t\ge 0.$
:::

:::exercise {fs-id1167794145810} type= 
PROBLEM:
Use Green’s theorem to find the area of the region enclosed by curve

$\textbf{r}(t)={t}^{2}\textbf{i}+(\frac{{t}^{3}}{3}-t)\textbf{j}\text{,}\;-\sqrt{3}\le t\le \sqrt{3}.$  {eq:fs-id1167794145819}

> IMAGE {img:fs-id1167793444969} src=../../media/CNX_Calc_Figure_16_04_206.jpg
> alt: A horizontal teardrop-shaped region symmetric about the x axis and a-intercepts at the origin and (3,0). The larger, curved end is at the origin, and the pointed end is at (3,0).

SOLUTION:
$A=\frac{8\sqrt{3}}{5}$
:::

:::exercise {fs-id1167793445005} type= 
PROBLEM:
**[T]** Verify Green’s theorem by using a computer algebra system to evaluate the integral ${\displaystyle \int_{C}x{e}^{y}dx+{e}^{x}dy,}$ where *C* is the circle given by ${x}^{2}+{y}^{2}=4$ and is oriented in the counterclockwise direction.
:::

:::exercise {fs-id1167793423616} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}({x}^{2}y-2xy+{y}^{2})ds,}$ where *C* is the boundary of the unit square $0\le x\le 1\text{,}\;0\le y\le 1\text{,}$ traversed counterclockwise. Use $ds=dx+dy$ for this exercise.
SOLUTION:
${\displaystyle \int_{C}({x}^{2}y-2xy+{y}^{2})ds=\frac{1}{2}}$
:::

:::exercise {fs-id1167793624645} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}^{}\frac{\text{−}(y+2)dx+(x-1)dy}{{(x-1)}^{2}+{(y+2)}^{2}}}\text{,}$ where *C* is any simple closed curve with an interior that does not contain point $(1,−2)$ traversed counterclockwise.
:::

:::exercise {fs-id1167794056647} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}^{}\frac{xdx+ydy}{{x}^{2}+{y}^{2}}},$ where *C* is any piecewise, smooth simple closed curve enclosing the origin, traversed counterclockwise.
SOLUTION:
${\displaystyle \int_{C}^{}\frac{xdx+ydy}{{x}^{2}+{y}^{2}}}=0$
:::
For the following exercises, use Green’s theorem to calculate the work done by force **F** on a particle that is moving counterclockwise around closed path *C*.

:::exercise {fs-id1167793958630} type= 
PROBLEM:
$\textbf{F}(x,y)=xy\textbf{i}+(x+y)\textbf{j},$ $C:{x}^{2}+{y}^{2}=4$
:::

:::exercise {fs-id1167794199135} type= 
PROBLEM:
$\textbf{F}(x,y)=({x}^{3\text{/}2}-3y)\textbf{i}+(6x+5\sqrt{y})\textbf{j},$ *C* : boundary of a triangle with vertices (0, 0), (5, 0), and (0, 5)
SOLUTION:
$W=\frac{225}{2}$
:::

:::exercise {fs-id1167794024158} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{C}(2{x}^{3}-{y}^{3})dx+({x}^{3}+{y}^{3})dy,}$ where *C* is a unit circle oriented in the counterclockwise direction.
:::

:::exercise {fs-id1167793315585} type= 
PROBLEM:
A particle starts at point $(−2,0),$ moves along the *x*-axis to (2, 0), and then travels along semicircle $y=\sqrt{4-{x}^{2}}$ to the starting point. Use Green’s theorem to find the work done on this particle by force field $\textbf{F}(x,y)=x\textbf{i}+({x}^{3}+3x{y}^{2})\textbf{j}.$
SOLUTION:
$W=12\pi$
:::

:::exercise {fs-id1167794213115} type= 
PROBLEM:
David and Sandra are skating on a frictionless pond in the wind. David skates on the inside, going along a circle of radius 2 in a counterclockwise direction. Sandra skates once around a circle of radius 3, also in the counterclockwise direction. Suppose the force of the wind at point $(x,y)$ $(x,y)$ $(x,y)$ is $\textbf{F}(x,y)=({x}^{2}y+10y)\textbf{i}+({x}^{3}+2x{y}^{2})\textbf{j}.$ Use Green’s theorem to determine who does more work.
:::

:::exercise {fs-id1167793245898} type= 
PROBLEM:
Use Green’s theorem to find the work done by force field $\textbf{F}(x,y)=(3y-4x)\textbf{i}+(4x-y)\textbf{j}$ when an object moves once counterclockwise around ellipse $4{x}^{2}+{y}^{2}=4.$
SOLUTION:
$W=2\pi$
:::

:::exercise {fs-id1167793480286} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}{e}^{2x}\text{sin}\;2ydx+{e}^{2x}\text{cos}\;2ydy},$ where *C* is ellipse $9{(x-1)}^{2}+4{(y-3)}^{2}=36$ oriented counterclockwise.
:::

:::exercise {fs-id1167794101707} type= 
PROBLEM:
Evaluate line integral ${\displaystyle \int_{C}{y}^{2}dx+{x}^{2}dy,}$ where *C* is the boundary of a triangle with vertices $(0,0),(1,1),\;\text{and}\;(1,0),$ with the counterclockwise orientation.
SOLUTION:
${\displaystyle \int_{C}{y}^{2}dx+{x}^{2}dy=\frac{1}{3}}$
:::

:::exercise {fs-id1167794122834} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}\textbf{h}\cdot d\textbf{r}}$ if $\textbf{h}(x,y)={e}^{y}\textbf{i}-\text{sin}\;\pi x\textbf{j},$ where *C* is a triangle with vertices (1, 0), (0, 1), and (–1, 0) traversed counterclockwise.
:::

:::exercise {fs-id1167793254694} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}\sqrt{1+{x}^{3}}dx+2xydy}$ where *C* is a triangle with vertices (0, 0), (1, 0), and (1, 3) oriented clockwise.
SOLUTION:
${\displaystyle \int_{C}^{}\sqrt{1+{x}^{3}}dx+2xydy}=-3$
:::

:::exercise {fs-id1167793638500} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}{x}^{2}ydx-x{y}^{2}dy}$ where *C* is a circle ${x}^{2}+{y}^{2}=4$ oriented counterclockwise.
:::

:::exercise {fs-id1167793432362} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}(3y-{e}^{\text{sin}\;x})dx}+(7x+\sqrt{{y}^{4}+1})dy$ where *C* is circle ${x}^{2}+{y}^{2}=9$ oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}^{}(3y-{e}^{\text{sin}\;x})dx}+(7x+\sqrt{{y}^{4}+1})dy=36\pi$
:::

:::exercise {fs-id1167793612065} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}(3x-5y)dx}+(x-6y)dy\text{,}$ where *C* is ellipse $\frac{{x}^{2}}{4}+{y}^{2}=1$ and is oriented in the counterclockwise direction.

> IMAGE {img:fs-id1167794200694} src=../../media/CNX_Calc_Figure_16_04_207.jpg
> alt: A horizontal oval oriented counterclockwise with vertices at (-2,0), (0,-1), (2,0), and (0,1). The region enclosed is shaded.

:::

:::exercise {fs-id1167793277924} type= 
PROBLEM:
Let *C* be a triangular closed curve from (0, 0) to (1, 0) to (1, 1) and finally back to (0, 0). Let $\textbf{F}(x,y)=4y\textbf{i}+6{x}^{2}\textbf{j}.$ Use Green’s theorem to evaluate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=2$
:::

:::exercise {fs-id1167793419106} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}ydx-xdy}\text{,}$ where *C* is circle ${x}^{2}+{y}^{2}={a}^{2}$ oriented in the clockwise direction.
:::

:::exercise {fs-id1167794054209} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}(y+x)dx+(x+\text{sin}\;y)dy}\text{,}$ where *C* is any smooth simple closed curve joining the origin to itself oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}(y+x)dx+(x+\text{sin}\;y)dy}=0$
:::

:::exercise {fs-id1167794223609} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}(y-\text{ln}({x}^{2}+{y}^{2}))dx+(2\;\text{arctan}\;\frac{y}{x})dy},$ where C is the positively oriented circle ${(x-2)}^{2}+{(y-3)}^{2}=1.$
:::

:::exercise {fs-id1167793631729} type= 
PROBLEM:
Use Green’s theorem to evaluate ${\displaystyle \int_{C}xydx+{x}^{3}{y}^{3}dy,}$ where *C* is a triangle with vertices (0, 0), (1, 0), and (1, 2) with positive orientation.
SOLUTION:
${\displaystyle \int_{C}xydx+{x}^{3}{y}^{3}dy=\frac{22}{21}}$
:::

:::exercise {fs-id1167793568656} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}\text{sin}\;ydx+x\;\text{cos}\;ydy},$ where *C* is ellipse ${x}^{2}+xy+{y}^{2}=1$ oriented in the counterclockwise direction.
:::

:::exercise {fs-id1167793545015} type= 
PROBLEM:
Let $\textbf{F}(x,y)=(\text{cos}({x}^{5}))-\frac{1}{3}{y}^{3}\textbf{i}+\frac{1}{3}{x}^{3}\textbf{j}.$ Find the counterclockwise circulation ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where *C* is a curve consisting of the line segment joining $(−2,0)\;\text{and}\;(−1,0)\text{,}$ half circle $y=\sqrt{1-{x}^{2}},$ the line segment joining (1, 0) and (2, 0), and half circle $y=\sqrt{4-{x}^{2}}.$
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=\frac{15\pi}{4}$
:::

:::exercise {fs-id1167794159411} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}\text{sin}({x}^{3})dx+2y{e}^{{x}^{2}}dy},$ where *C* is a triangular closed curve that connects the points (0, 0), (2, 2), and (0, 2) counterclockwise.
:::

:::exercise {fs-id1167794291697} type= 
PROBLEM:
Let *C* be the boundary of square $0\le x\le \pi \text{,}\;0\le y\le \pi \text{,}$ traversed counterclockwise. Use Green’s theorem to find ${\displaystyle \int_{C}^{}\text{sin}(x+y)dx+\text{cos}(x+y)dy}.$
SOLUTION:
${\displaystyle \int_{C}^{}\text{sin}(x+y)dx+\text{cos}(x+y)dy}=4$
:::

:::exercise {fs-id1167794135196} type= 
PROBLEM:
Use Green’s theorem to evaluate line integral ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=({y}^{2}-{x}^{2})\textbf{i}+({x}^{2}+{y}^{2})\textbf{j},$ and *C* is a triangle bounded by $y=0\text{,}\;x=3,\;\text{and}\;y=x\text{,}$ oriented counterclockwise.
:::

:::exercise {fs-id1167793617097} type= 
PROBLEM:
Use Green’s Theorem to evaluate integral ${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}(x,y)=(x{y}^{2})\textbf{i}+x\textbf{j},$ and *C* is a unit circle oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}^{}\textbf{F}\cdot d\textbf{r}}=\pi$
:::

:::exercise {fs-id1167794314993} type= 
PROBLEM:
Use Green’s theorem in a plane to evaluate line integral ${\displaystyle \int_{C}(xy+{y}^{2})dx+{x}^{2}dy},$ where *C* is a closed curve of a region bounded by $y=x\;\text{and}\;y={x}^{2}$ oriented in the counterclockwise direction.
:::

:::exercise {fs-id1167794287534} type= 
PROBLEM:
Calculate the outward flux of $\textbf{F}=\text{−}x\textbf{i}+2y\textbf{j}$ over a square with corners $(±1,±1),$ where the unit normal is outward pointing and oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot \mathbf{\overset{\wedge}{N}}ds=4}$
:::

:::exercise {fs-id1167793551260} type= 
PROBLEM:
**[T]** Let *C* be circle ${x}^{2}+{y}^{2}=4$ oriented in the counterclockwise direction. Evaluate ${\displaystyle \int_{C}[(3y-{e}^{\text{tan}-{1}_{x}})dx+(7x+\sqrt{{y}^{4}+1})dy]}$ using a computer algebra system.
:::

:::exercise {fs-id1167794287650} type= 
PROBLEM:
Find the flux of field $\textbf{F}=\text{−}x\textbf{i}+y\textbf{j}$ across ${x}^{2}+{y}^{2}=16$ oriented in the counterclockwise direction.
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}=0$
:::

:::exercise {fs-id1167793979103} type= 
PROBLEM:
Let $\textbf{F}=({y}^{2}-{x}^{2})\textbf{i}+({x}^{2}+{y}^{2})\textbf{j},$ and let *C* be a triangle bounded by $y=0,x=3,$ and $y=x$ oriented in the counterclockwise direction. Find the outward flux of **F** through *C*.
:::

:::exercise {fs-id1167793482759} type= 
PROBLEM:
**[T]** Let *C* be unit circle ${x}^{2}+{y}^{2}=1$ traversed once counterclockwise. Evaluate ${\displaystyle \int_{C}[\text{−}{y}^{3}+\text{sin}(xy)+xy\;\text{cos}(xy)]dx+[{x}^{3}+{x}^{2}\text{cos}(xy)]dy}$ by using a computer algebra system.
SOLUTION:
${\displaystyle \int_{C}[\text{−}{y}^{3}+\text{sin}(xy)+xy\;\text{cos}(xy)]dx+[{x}^{3}+{x}^{2}\text{cos}(xy)]dy}=4.7124$
:::

:::exercise {fs-id1167793628134} type= 
PROBLEM:
**[T]** Find the outward flux of vector field $\textbf{F}=x{y}^{2}\textbf{i}+{x}^{2}y\textbf{j}$ across the boundary of annulus $R=\{(x,y):1\le {x}^{2}+{y}^{2}\le 4\}=\{(r,\theta ):1\le r\le 2,0\le \theta \le 2\pi \}$ using a computer algebra system.
:::

:::exercise {fs-id1167793376099} type= 
PROBLEM:
Consider region *R* bounded by parabolas $y={x}^{2}\;\text{and}\;x={y}^{2}.$ Let *C* be the boundary of *R* oriented counterclockwise. Use Green’s theorem to evaluate ${\displaystyle \int_{C}(y+{e}^{\sqrt{x}})dx+(2x+\text{cos}({y}^{2}))dy.}$
SOLUTION:
${\displaystyle \int_{C}(y+{e}^{\sqrt{x}})dx+(2x+\text{cos}({y}^{2}))dy=\frac{1}{3}}$
:::

## Glossary
- {def} **Green’s theorem**: relates the integral over a connected region to an integral over the boundary of the region
- {def} **stream function**: if $\textbf{F}=\langle P,Q\rangle$ is a source-free vector field, then stream function *g* is a function such that $P={g}_{y}$ and $Q=\text{−}{g}_{x}$

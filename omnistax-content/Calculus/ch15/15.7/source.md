# Change of Variables in Multiple Integrals

## Learning Objectives {section:learning-objectives}
- Determine the image of a region under a given transformation of variables.
- Compute the Jacobian of a given transformation.
- Evaluate a double integral using a change of variables.
- Evaluate a triple integral using a change of variables.

Recall from [Substitution Rule](module:m53634) the method of integration by substitution. When evaluating an integral such as ${\displaystyle \int_{2}^{3}x{({x}^{2}-4)}^{5}dx,}$ we substitute $u=g(x)={x}^{2}-4.$ Then $du=2x\;dx$ or $x\;dx=\frac{1}{2}du$ and the limits change to $u=g(2)={2}^{2}-4=0$ and $u=g(3)=9-4=5.$ Thus the integral becomes ${\displaystyle \int_{0}^{5}\frac{1}{2}{u}^{5}du}$ and this integral is much simpler to evaluate. In other words, when solving integration problems, we make appropriate substitutions to obtain an integral that becomes much simpler than the original integral.
We also used this idea when we transformed double integrals in rectangular coordinates to polar coordinates and transformed triple integrals in rectangular coordinates to cylindrical or spherical coordinates to make the computations simpler. More generally,

${\displaystyle \int_{a}^{b} f(x)dx=}{\displaystyle \int_{c}^{d} f(g(u))}g'(u)du,$  {eq:fs-id1167794162912}

Where $x=g(u),dx=g'(u)du,$ and $u=c$ and $u=d$ satisfy $c={g}^{-1}(a)$ and $d={g}^{-1}(b).$
A similar result occurs in double integrals when we substitute $x=h(r,\theta )=r\;\text{cos}\;\theta ,$ $y=g(r,\theta )=r\;\text{sin}\;\theta ,$ and $dA=dx\;dy=r\;dr\;d\theta .$ Then we get

${\displaystyle \iint\limits_{R}f(x,y)}dA={\displaystyle \iint\limits_{S}f(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta )r\;dr\;d\theta}$  {eq:fs-id1167794333313}

where the domain $R$ is replaced by the domain $S$ in polar coordinates. Generally, the function that we use to change the variables to make the integration simpler is called a {term:transformation} or mapping.

## Planar Transformations
A {term:planar transformation} $T$ is a function that transforms a region $G$ in one plane into a region $R$ in another plane by a change of variables. Both $G$ and $R$ are subsets of ${\mathbb{R}}^{2}.$ For example, [ref:CNX_Calc_Figure_15_07_001] shows a region $G$ in the $uv\text{-plane}$ transformed into a region $R$ in the $xy\text{-plane}$ by the change of variables $x=g(u,v)$ and $y=h(u,v),$ or sometimes we write $x=x(u,v)$ and $y=y(u,v).$ We shall typically assume that each of these functions has continuous first partial derivatives, which means ${g}_{u},{g}_{v},{h}_{u},$ and ${h}_{v}$ exist and are also continuous. The need for this requirement will become clear soon.

> FIGURE {fig:CNX_Calc_Figure_15_07_001} src=../../media/CNX_Calc_Figure_15_07_001.jpg
> alt: On the left-hand side of this figure, there is a region G with point (u, v) given in the Cartesian u v-plane. Then there is an arrow from this graph to the right-hand side of the figure marked with x = g(u, v) and y = h(u, v). On the right-hand side of this figure there is a region R with point (x, y) given in the Cartesian xy- plane.
> caption: The transformation of a region $G$ in the $uv\text{-plane}$ into a region $R$ in the $xy\text{-plane}.$

:::note [definition] Definition
A transformation $T\text{:}\;G\to R,$ defined as $T(u,v)=(x,y),$ is said to be a {term:one-to-one transformation} if no two points map to the same image point.
:::
To show that $T$ is a one-to-one transformation, we assume $T({u}_{1},{v}_{1})=T({u}_{2},{v}_{2})$ and show that as a consequence we obtain $({u}_{1},{v}_{1})=({u}_{2},{v}_{2}).$ If the transformation $T$ is one-to-one in the domain $G,$ then the inverse ${T}^{−1}$ exists with the domain $R$ such that ${T}^{−1}\circ T$ and $T\circ {T}^{−1}$ are identity functions.
[ref:CNX_Calc_Figure_15_07_001] shows the mapping $T(u,v)=(x,y)$ where $x$ and $y$ are related to $u$ and $v$ by the equations $x=g(u,v)$ and $y=h(u,v).$ The region $G$ is the domain of $T$ and the region $R$ is the range of $T,$ also known as the *image* of $G$ under the transformation $T.$

:::example {ex:fs-id1167794063017} Determining How the Transformation Works

:::exercise {fs-id1167793270605} type= 
PROBLEM:
Suppose a transformation $T$ is defined as $T(r,\theta )=(x,y)$ where $x=r\;\text{cos}\;\theta ,y=r\;\text{sin}\;\theta .$ Find the image of the polar rectangle $G=\{(r,\theta )|0<r\le 1,0\le \theta \le \pi \text{/}2\}$ in the $r\theta \text{-plane}$ to a region $R$ in the $xy\text{-plane}\text{.}$ Show that $T$ is a one-to-one transformation in $G$ and find ${T}^{−1}(x,y).$
SOLUTION:
Since $r$ varies from 0 to 1 in the $r\theta \text{-plane},$ we have a circular disc of radius 0 to 1 in the $xy\text{-plane}\text{.}$ Because $\theta$ varies from 0 to $\pi \text{/2}$ in the $r\theta \text{-plane},$ we end up getting a quarter circle of radius $1$ in the first quadrant of the $xy\text{-plane}$ ([ref:CNX_Calc_Figure_15_07_002]). Hence $R$ is a quarter circle bounded by ${x}^{2}+{y}^{2}=1$ in the first quadrant.

> FIGURE {fig:CNX_Calc_Figure_15_07_002} src=../../media/CNX_Calc_Figure_15_07_002.jpg
> alt: On the left-hand side of this figure, there is a rectangle G with a marked subrectangle given in the first quadrant of the Cartesian r theta-plane. Then there is an arrow from this graph to the right-hand side of the figure marked with x = r cos theta and y = r sin theta. On the right-hand side of this figure there is a quarter circle R with a marked subannulus (analogous to the rectangle in the other graph) given in the Cartesian x y-plane.
> caption: A rectangle in the $r\theta \text{-plane}$ is mapped into a quarter circle in the $xy\text{-plane}\text{.}$

In order to show that $T$ is a one-to-one transformation, assume $T({r}_{1},{\theta}_{1})=T({r}_{2},{\theta}_{2})$ and show as a consequence that $({r}_{1},{\theta}_{1})=({r}_{2},{\theta}_{2}).$ In this case, we have

$\begin{array}{lll}T({r}_{1},{\theta}_{1}) & = & T({r}_{2},{\theta}_{2}), \\ ({x}_{1},{y}_{1}) & = & ({x}_{2},{y}_{2}), \\ ({r}_{1}\text{cos}\;{\theta}_{1},{r}_{1}\text{sin}\;{\theta}_{1}) & = & ({r}_{2}\text{cos}\;{\theta}_{2},{r}_{2}\text{sin}\;{\theta}_{2}), \\ {r}_{1}\text{cos}\;{\theta}_{1} & = & {r}_{2}\text{cos}\;{\theta}_{2} \\ {r}_{1}\text{sin}\;{\theta}_{1} & = & {r}_{2}\text{sin}\;{\theta}_{2}\end{array}$  {eq:fs-id1167794036339}

Dividing, we obtain

$\begin{array}{rll}\frac{{r}_{1}\text{cos}\;{\theta}_{1}}{{r}_{1}\text{sin}\;{\theta}_{1}} & = & \frac{{r}_{2}\text{cos}\;{\theta}_{2}}{{r}_{2}\text{sin}\;{\theta}_{2}} \\ \frac{\text{cos}\;{\theta}_{1}}{\text{sin}\;{\theta}_{1}} & = & \frac{\text{cos}\;{\theta}_{2}}{\text{sin}\;{\theta}_{2}} \\ \text{cot}\;{\theta}_{1} & = & \text{cot}\;{\theta}_{2} \\ {\theta}_{1} & = & {\theta}_{2}\end{array}$  {eq:fs-id1167794022687}

since the cotangent function is one-one function in the interval $0\le \theta \le \pi \text{/}2.$ Also, since $0<r\le 1,$ we have ${r}_{1}={r}_{2},{\theta}_{1}={\theta}_{2}.$ Therefore, $({r}_{1},{\theta}_{1})=({r}_{2},{\theta}_{2})$ and $T$ is a one-to-one transformation from $G$ into $R.$
To find ${T}^{−1}(x,y)$ solve for $r,\theta$ in terms of $x,y.$ We already know that ${r}^{2}={x}^{2}+{y}^{2}$ and $\text{tan}\;\theta =\frac{y}{x}.$ Thus ${T}^{−1}(x,y)=(r,\theta )$ is defined as $r=\sqrt{{x}^{2}+{y}^{2}}$ and $\theta ={\text{tan}}^{−1}(\frac{y}{x}).$
:::
:::

:::example {ex:fs-id1167793925654} Finding the Image under $T$

:::exercise {fs-id1167794023208} type= 
PROBLEM:
Let the transformation $T$ be defined by $T(u,v)=(x,y)$ where $x={u}^{2}-{v}^{2}$ and $y=uv.$ Find the image of the triangle in the $uv\text{-plane}$ with vertices $(0,0),(0,1),$ and $(1,1).$
SOLUTION:
The triangle and its image are shown in [ref:CNX_Calc_Figure_15_07_003]. To understand how the sides of the triangle transform, call the side that joins $(0,0)$ and $(0,1)$ side $A,$ the side that joins $(0,0)$ and $(1,1)$ side $B,$ and the side that joins $(1,1)$ and $(0,1)$ side $C.$

> FIGURE {fig:CNX_Calc_Figure_15_07_003} src=../../media/CNX_Calc_Figure_15_07_003.jpg
> alt: On the left-hand side of this figure, there is a triangular region given in the Cartesian uv-plane with boundaries A, B, and C represented by the v axis, the line u = v, and the line v = 1, respectively. Then there is an arrow from this graph to the right-hand side of the figure marked with x = u squared minus v squared and y = u v. On the right-hand side of this figure there is a complex region given in the Cartesian x y-plane with boundaries A’, B’, and C’ given by the x axis, y axis, and a line curving from (negative 1, 0) through (0, 1), namely x = y squared minus 1, respectively.
> caption: A triangular region in the $uv\text{-plane}$ is transformed into an image in the $xy\text{-plane}\text{.}$

For the side $A\text{:}\;u=0,0\le v\le 1$ transforms to $x=\text{−}{v}^{2},y=0$ so this is the side $A'$ that joins $(−1,0)$ and $(0,0).$
For the side $B\text{:}\;u=v,0\le u\le 1$ transforms to $x=0,y={u}^{2}$ so this is the side ${B}^{'}$ that joins $(0,0)$ and $(0,1).$
For the side $C\text{:}\;0\le u\le 1,v=1$ transforms to $x={u}^{2}-1,y=u$ (hence $x={y}^{2}-1)$ so this is the side ${C}^{'}$ that makes the upper half of the parabolic arc joining $(−1,0)$ and $(0,1).$
All the points in the entire region of the triangle in the $uv\text{-plane}$ are mapped inside the parabolic region in the $xy\text{-plane}\text{.}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793558006} type= 
PROBLEM:
Let a transformation $T$ be defined as $T(u,v)=(x,y)$ where $x=u+v,y=3v.$ Find the image of the rectangle $G=\{(u,v)\text{:}\;0\le u\le 1,0\le v\le 2\}$ from the $uv\text{-plane}$ after the transformation into a region $R$ in the $xy\text{-plane}\text{.}$ Show that $T$ is a one-to-one transformation and find ${T}^{−1}(x,y).$
SOLUTION:
${T}^{−1}(x,y)=(u,v)$ where $u=\frac{3x-y}{3}$ and $v=\frac{y}{3}$
COMMENTARY: Hint
Follow the steps of [ref:fs-id1167794063017].
:::
:::

## Jacobians
Recall that we mentioned near the beginning of this section that each of the component functions must have continuous first partial derivatives, which means that ${g}_{u},{g}_{v},{h}_{u},$ and ${h}_{v}$ exist and are also continuous. A transformation that has this property is called a ${C}^{1}$ transformation (here $C$ denotes continuous). Let $T(u,v)=(g(u,v),h(u,v)),$ where $x=g(u,v)$ and $y=h(u,v),$ be a one-to-one ${C}^{1}$ transformation. We want to see how it transforms a small rectangular region $S,$ $\text{Δ}u$ units by $\text{Δ}v$ units, in the $uv\text{-plane}$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_07_004} src=../../media/CNX_Calc_Figure_15_07_004.jpg
> alt: On the left-hand side of this figure, there is a region S with lower right corner point (u sub 0, v sub 0), height Delta v, and length Delta u given in the Cartesian u v-plane. Then there is an arrow from this graph to the right-hand side of the figure marked with T. On the right-hand side of this figure there is a region R with point (x sub 0, y sub 0) given in the Cartesian x y-plane with sides r(u, v sub 0) along the bottom and r(u sub 0, v) along the left.
> caption: A small rectangle $S$ in the $uv\text{-plane}$ is transformed into a region $R$ in the $xy\text{-plane}\text{.}$

Since $x=g(u,v)$ and $y=h(u,v),$ we have the position vector $\mathbf{r}(u,v)=g(u,v)\mathbf{i}+h(u,v)\mathbf{j}$ of the image of the point $(u,v).$ Suppose that $({u}_{0},{v}_{0})$ is the coordinate of the point at the lower left corner that mapped to $({x}_{0},{y}_{0})=T({u}_{0},{v}_{0}).$ The line $v={v}_{0}$ maps to the image curve with vector function $\text{r}(u,{v}_{0}),$ and the tangent vector at $({x}_{0},{y}_{0})$ to the image curve is

${\mathbf{r}}_{u}={g}_{u}({u}_{0},{v}_{0})\mathbf{i}+{h}_{u}({u}_{0},{v}_{0})\mathbf{j}=\frac{\partial x}{\partial u}\mathbf{i}+\frac{\partial y}{\partial u}\mathbf{j}.$  {eq:fs-id1167793418213}

Similarly, the line $u={u}_{0}$ maps to the image curve with vector function $\mathbf{r}({u}_{0},v),$ and the tangent vector at $({x}_{0},{y}_{0})$ to the image curve is

${\mathbf{r}}_{v}={g}_{v}({u}_{0},{v}_{0})\mathbf{i}+{h}_{v}({u}_{0},{v}_{0})\mathbf{j}=\frac{\partial x}{\partial v}\mathbf{i}+\frac{\partial y}{\partial v}\mathbf{j}.$  {eq:fs-id1167794137725}

Now, note that

${\mathbf{r}}_{u}=\lim_{\text{Δ}u\to 0}\frac{\mathbf{r}({u}_{0}+\text{Δ}u,{v}_{0})-\mathbf{r}({u}_{0},{v}_{0})}{\text{Δ}u}\;\text{so}\;\mathbf{r}({u}_{0}+\text{Δ}u,{v}_{0})-\mathbf{r}({u}_{0},{v}_{0})\approx \text{Δ}u{\mathbf{r}}_{u}.$  {eq:fs-id1167794063547}

Similarly,

${\mathbf{r}}_{v}=\lim_{\text{Δ}v\to 0}\frac{\mathbf{r}({u}_{0},{v}_{0}+\text{Δ}v)-\mathbf{r}({u}_{0},{v}_{0})}{\text{Δ}v}\;\text{so}\;\mathbf{r}({u}_{0},{v}_{0}+\text{Δ}v)-\mathbf{r}({u}_{0},{v}_{0})\approx \text{Δ}v{\mathbf{r}}_{v}.$  {eq:fs-id1167794052244}

This allows us to estimate the area $\text{Δ}A$ of the image $R$ by finding the area of the parallelogram formed by the sides $\text{Δ}v{\mathbf{r}}_{v}$ and $\text{Δ}u{\mathbf{r}}_{u}.$ By using the cross product of these two vectors by adding the **k** component as $0,$ the area $\text{Δ}A$ of the image $R$ (refer to [The Cross Product](module:m53903)) is approximately $\mathbf{||\textbf{Δ}{ur}_{u}\;\times \;\textbf{Δ}{vr}_{v}||}=\mathbf{||{r}_{u}\;\times \;{r}_{v}||}\text{Δ}u\text{Δ}v.$ In determinant form, the cross product is

${\mathbf{r}}_{u}\;\times \;{\mathbf{r}}_{v}=|\begin{array}{clclc}\mathbf{i} & & \mathbf{j} & & \mathbf{k} \\ \frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} & & 0 \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v} & & 0\end{array}|=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v}\end{array}|\mathbf{k}=(\frac{\partial x}{\partial u}\;\frac{\partial y}{\partial v}-\frac{\partial x}{\partial v}\;\frac{\partial y}{\partial u})\mathbf{k}.$  {eq:fs-id1167794329003}

Since $\mathbf{||k||}=1,$ we have $\text{Δ}A\approx \mathbf{||{r}_{u}\;\times \;{r}_{v}||}\text{Δ}u\text{Δ}v=(\frac{\partial x}{\partial u}\;\frac{\partial y}{\partial v}-\frac{\partial x}{\partial v}\;\frac{\partial y}{\partial u})\text{Δ}u\text{Δ}v.$

:::note [definition] Definition
The {term:Jacobian} of the ${C}^{1}$ transformation $T(u,v)=(g(u,v),h(u,v))$ is denoted by $J(u,v)$ and is defined by the $2\;\times \;2$ determinant

$J(u,v)=|\frac{\partial (x,y)}{\partial (u,v)}|=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v}\end{array}|=(\frac{\partial x}{\partial u}\;\frac{\partial y}{\partial v}-\frac{\partial x}{\partial v}\;\frac{\partial y}{\partial u}).$  {eq:fs-id1167793509039}

:::
Using the definition, we have

$\text{Δ}A\approx J(u,v)\text{Δ}u\text{Δ}v=|\frac{\partial (x,y)}{\partial (u,v)}|\text{Δ}u\text{Δ}v.$  {eq:fs-id1167793421428}

Note that the Jacobian is frequently denoted simply by

$J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}.$  {eq:fs-id1167793369280}

Note also that

$|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v}\end{array}|=(\frac{\partial x}{\partial u}\;\frac{\partial y}{\partial v}-\frac{\partial x}{\partial v}\;\frac{\partial y}{\partial u})=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v}\end{array}|.$  {eq:fs-id1167793280498}

Hence the notation $J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}$ suggests that we can write the Jacobian determinant with partials of $x$ in the first row and partials of $y$ in the second row.

:::example {ex:fs-id1167793924616} Finding the Jacobian

:::exercise {fs-id1167793469158} type= 
PROBLEM:
Find the Jacobian of the transformation given in [ref:fs-id1167794063017].
SOLUTION:
The transformation in the example is $T(r,\theta )=(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta )$ where $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta .$ Thus the Jacobian is

$\begin{array}{rl}J(r,\theta ) & =\frac{\partial (x,y)}{\partial (r,\theta )}=|\begin{array}{lll}\frac{\partial x}{\partial r} & & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & & \frac{\partial y}{\partial \theta}\end{array}|=|\begin{array}{llr}\text{cos}\;\theta & & -r\;\text{sin}\;\theta \\ \text{sin}\;\theta & & r\;\text{cos}\;\theta \end{array}| \\ & =r\;{\text{cos}}^{2}\theta +r\;{\text{sin}}^{2}\theta =r({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta )=r.\end{array}$  {eq:fs-id1167793268219}

:::
:::

:::example {ex:fs-id1167793837940} Finding the Jacobian

:::exercise {fs-id1167793837943} type= 
PROBLEM:
Find the Jacobian of the transformation given in [ref:fs-id1167793925654].
SOLUTION:
The transformation in the example is $T(u,v)=({u}^{2}-{v}^{2},uv)$ where $x={u}^{2}-{v}^{2}$ and $y=uv.$ Thus the Jacobian is

$J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v}\end{array}|=|\begin{array}{lll}2u & & v \\ -2v & & u\end{array}|=2{u}^{2}+2{v}^{2}.$  {eq:fs-id1167793927684}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793361606} type= 
PROBLEM:
Find the Jacobian of the transformation: $T(u,v)=(u+v,2v).$
SOLUTION:
$J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v}\end{array}|=|\begin{array}{lll}1 & & 1 \\ 0 & & 2\end{array}|=2$
COMMENTARY: Hint
Follow the steps in the previous two examples.
:::
:::

## Change of Variables for Double Integrals
We have already seen that, under the change of variables $T(u,v)=(x,y)$ where $x=g(u,v)$ and $y=h(u,v),$ a small region $\text{Δ}A$ in the $xy\text{-plane}$ is related to the area formed by the product $\text{Δ}u\text{Δ}v$ in the $uv\text{-plane}$ by the approximation

$\text{Δ}A\approx J(u,v)\text{Δ}u,\text{Δ}v.$  {eq:fs-id1167794058868}

Now let’s go back to the definition of double integral for a minute:

${\displaystyle \iint\limits_{R}f(x,y)dA=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij},{y}_{ij})}}}\text{Δ}A.$  {eq:fs-id1167793515468}

Referring to [ref:CNX_Calc_Figure_15_07_005], observe that we divided the region $S$ in the $uv\text{-plane}$ into small subrectangles ${S}_{ij}$ and we let the subrectangles ${R}_{ij}$ in the $xy\text{-plane}$ be the images of ${S}_{ij}$ under the transformation $T(u,v)=(x,y).$

> FIGURE {fig:CNX_Calc_Figure_15_07_005} src=../../media/CNX_Calc_Figure_15_07_005.jpg
> alt: On the left-hand side of this figure, there is a rectangle S with an inscribed red oval and a subrectangle with lower right corner point (u sub ij, v sub ij), height Delta v, and length Delta u given in the Cartesian u v-plane. Then there is an arrow from this graph to the right-hand side of the figure marked with T. On the right-hand side of this figure there is a region R with inscribed (deformed) red oval and a subrectangle R sub ij with corner point (x sub ij, y sub ij) given in the Cartesian x y-plane. The subrectangle is blown up and shown with vectors pointing along the edge from the corner point.
> caption: The subrectangles ${S}_{ij}$ in the $uv\text{-plane}$ transform into subrectangles ${R}_{ij}$ in the $xy\text{-plane}\text{.}$

Then the double integral becomes

${\displaystyle \iint\limits_{R}f(x,y)dA=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij},{y}_{ij})}}}\text{Δ}A=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f(g({u}_{ij},{v}_{ij}),h({u}_{ij},{v}_{ij}))}}|J({u}_{ij},{v}_{ij})|\text{Δ}u\text{Δ}v.$  {eq:fs-id1167794052257}

Notice this is exactly the double Riemann sum for the integral

${\displaystyle \iint\limits_{S}f(g(u,v),h(u,v))}|\frac{\partial (x,y)}{\partial (u,v)}|du\;dv.$  {eq:fs-id1167793571099}

:::note [theorem] Change of Variables for Double Integrals
Let $T(u,v)=(x,y)$ where $x=g(u,v)$ and $y=h(u,v)$ be a one-to-one ${C}^{1}$ transformation, with a nonzero Jacobian on the interior of the region $S$ in the $uv\text{-plane;}$ it maps $S$ into the region $R$ in the $xy\text{-plane}\text{.}$ If $f$ is continuous on $R,$ then

${\displaystyle \iint\limits_{R}f(x,y)}dA={\displaystyle \iint\limits_{S}f(g(u,v),h(u,v))}|\frac{\partial (x,y)}{\partial (u,v)}|du\;dv.$  {eq:fs-id1167794207063}

:::
With this theorem for double integrals, we can change the variables from $(x,y)$ to $(u,v)$ in a double integral simply by replacing

$dA=dx\;dy=|\frac{\partial (x,y)}{\partial (u,v)}|du\;dv$  {eq:fs-id1167793912028}

when we use the substitutions $x=g(u,v)$ and $y=h(u,v)$ and then change the limits of integration accordingly. This change of variables often makes any computations much simpler.

:::example {ex:fs-id1167793480100} Changing Variables from Rectangular to Polar Coordinates

:::exercise {fs-id1167793480102} type= 
PROBLEM:
Consider the integral

${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{\sqrt{2x-{x}^{2}}} \sqrt{{x}^{2}+{y}^{2}}\;dy\;dx}}.$  {eq:fs-id1167793926835}

Use the change of variables $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta ,$ and find the resulting integral.
SOLUTION:
First we need to find the region of integration. This region is bounded below by $y=0$ and above by $y=\sqrt{2x-{x}^{2}}$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_07_006} src=../../media/CNX_Calc_Figure_15_07_006.jpg
> alt: A semicircle in the first quadrant of the xy plane with radius 1 and center (1, 0). The equation for this curve is given as y = the square root of (2x minus x squared)
> caption: Changing a region from rectangular to polar coordinates.

Squaring and collecting terms, we find that the region is the upper half of the circle ${x}^{2}+{y}^{2}-2x=0,$ that is, ${y}^{2}+{(x-1)}^{2}=1.$ In polar coordinates, the circle is $r=2\;\text{cos}\;\theta$ so the region of integration in polar coordinates is bounded by $0\le r\le 2\text{cos}\;\theta$ and $0\le \theta \le \frac{\pi}{2}.$
The Jacobian is $J(r,\theta )=r,$ as shown in [ref:fs-id1167793924616]. Since $r\ge 0,$ we have $|J(r,\theta )|=r.$
The integrand $\sqrt{{x}^{2}+{y}^{2}}$ changes to $r$ in polar coordinates, so the double iterated integral is

${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{\sqrt{2x-{x}^{2}}} \sqrt{{x}^{2}+{y}^{2}}}}dy\;dx={\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{2\;\text{cos}\;\theta} r|J(r,\theta )|}}dr\;d\theta ={\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{2\;\text{cos}\;\theta} {r}^{2}}}dr\;d\theta .$  {eq:fs-id1167793924634}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793940207} type= 
PROBLEM:
Considering the integral ${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{\sqrt{1-{x}^{2}}} ({x}^{2}+{y}^{2})}}dy\;dx,$ use the change of variables $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta ,$ and find the resulting integral.
SOLUTION:
${\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{1} {r}^{3}dr\;d\theta}}$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::
Notice in the next example that the region over which we are to integrate may suggest a suitable transformation for the integration. This is a common and important situation.

:::example {ex:fs-id1167793590400} Changing Variables

:::exercise {fs-id1167793590403} type= 
PROBLEM:
Consider the integral ${\displaystyle \iint\limits_{R}(x-y)}dy\;dx,$ where $R$ is the parallelogram joining the points $(1,2),$ $(3,4),(4,3),$ and $(6,5)$ ([ref:CNX_Calc_Figure_15_07_007]). Make appropriate changes of variables, and write the resulting integral.

> FIGURE {fig:CNX_Calc_Figure_15_07_007} src=../../media/CNX_Calc_Figure_15_07_007.jpg
> alt: A parallelogram R with corners (1, 2), (3, 4), (6, 5), and (4, 3).
> caption: The region of integration for the given integral.

SOLUTION:
First, we need to understand the region over which we are to integrate. The sides of the parallelogram are $x-y+1=0,x-y-1=0,$ $x-3y+5=0,\text{and}\;x-3y+9=0$ ([ref:CNX_Calc_Figure_15_07_008]). Another way to look at them is $x-y=−1,x-y=1,$ $x-3y=−5,$ and $x-3y=-9.$
Clearly the parallelogram is bounded by the lines $y=x+1,y=x-1,y=\frac{1}{3}(x+5),$ and $y=\frac{1}{3}(x+9).$
Notice that if we were to make $u=x-y$ and $v=x-3y,$ then the limits on the integral would be $−1\le u\le 1$ and $−9\le v\le -5.$
To solve for $x$ and $y,$ we multiply the first equation by $3$ and subtract the second equation, $3u-v=(3x-3y)-(x-3y)=2x.$ Then we have $x=\frac{3u-v}{2}.$ Moreover, if we simply subtract the second equation from the first, we get $u-v=(x-y)-(x-3y)=2y$ and $y=\frac{u-v}{2}.$

> FIGURE {fig:CNX_Calc_Figure_15_07_008} src=../../media/CNX_Calc_Figure_15_07_008.jpg
> alt: A parallelogram R with corners (1, 2), (3, 4), (6, 5), and (4, 3) formed by the lines y = x + 1, y = x minus 1, y = (x + 9)/3, and y = (x + 5)/3.
> caption: A parallelogram in the $xy\text{-plane}$ that we want to transform by a change in variables.

Thus, we can choose the transformation

$T(u,v)=(\frac{3u-v}{2},\frac{u-v}{2})$  {eq:fs-id1167794031267}

and compute the Jacobian $J(u,v).$ We have

$J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v}\end{array}|=|\begin{array}{lll}3\text{/}2 & & -1\text{/}2 \\ 1\text{/}2 & & -1\text{/}2\end{array}|=-\frac{3}{4}+\frac{1}{4}=-\frac{1}{2}.$  {eq:fs-id1167794056861}

Therefore, $|J(u,v)|=\frac{1}{2}.$ Also, the original integrand becomes

$x-y=\frac{1}{2}[3u-v-u+v]=\frac{1}{2}[3u-u]=\frac{1}{2}[2u]=u.$  {eq:fs-id1167793286934}

Therefore, by the use of the transformation $T,$ the integral changes to

${\displaystyle \iint\limits_{R}(x-y)dy\;dx={\displaystyle \int_{−9}^{−5} \;{\displaystyle \int_{−1}^{1} J(u,v)u\;du\;dv={\displaystyle \int_{−9}^{−5} \;{\displaystyle \int_{−1}^{1} (\frac{1}{2})}}}}}u\;du\;dv,$  {eq:fs-id1167793499259}

which is much simpler to compute. In fact, it is easily found to be zero. And this is just one example of why we transform integrals like this.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794145586} type= 
PROBLEM:
Make appropriate changes of variables in the integral ${\displaystyle \iint\limits_{R}\frac{4}{{(x-y)}^{2}}}dy\;dx,$ where $R$ is the trapezoid bounded by the lines $x-y=2,x-y=4,x=0,\text{and}\;y=0.$ Write the resulting integral.
SOLUTION:
$x=\frac{1}{2}(v+u)$ and $y=\frac{1}{2}(v-u)$ and ${\displaystyle \int_{2}^{4} \;{\displaystyle \int_{−u}^{u} \frac{4}{{u}^{2}}(\frac{1}{2})}}dv\;du.$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::
We are ready to give a problem-solving strategy for change of variables.

:::note [problem-solving] Change of Variables
1. Sketch the region given by the problem in the $xy\text{-plane}$ and then write the equations of the curves that form the boundary.
2. Depending on the region or the integrand, choose the transformations $x=g(u,v)$ and $y=h(u,v).$
3. Determine the new limits of integration in the $uv\text{-plane}\text{.}$
4. Find the Jacobian $J(u,v).$
5. In the integrand, replace the variables to obtain the new integrand.
6. Replace $dy\;dx$ or $dx\;dy,$ whichever occurs, by $J(u,v)du\;dv.$
:::
In the next example, we find a substitution that makes the integrand much simpler to compute.

:::example {ex:fs-id1167794162678} Evaluating an Integral

:::exercise {fs-id1167794162680} type= 
PROBLEM:
Using the change of variables $u=x-y$ and $v=x+y,$ evaluate the integral

${\displaystyle \iint\limits_{R}(x-y){e}^{{x}^{2}-{y}^{2}}dA},$  {eq:fs-id1167794054984}

where $R$ is the region bounded by the lines $x+y=1$ and $x+y=3$ and the curves ${x}^{2}-{y}^{2}=−1$ and ${x}^{2}-{y}^{2}=1$ (see the first region in [ref:CNX_Calc_Figure_15_07_009]).
SOLUTION:
As before, first find the region $R$ and picture the transformation so it becomes easier to obtain the limits of integration after the transformations are made ([ref:CNX_Calc_Figure_15_07_009]).

> FIGURE {fig:CNX_Calc_Figure_15_07_009} src=../../media/CNX_Calc_Figure_15_07_009.jpg
> alt: On the left-hand side of this figure, there is a complex region R in the Cartesian x y-plane bounded by x squared minus y squared = negative 1, x squared minus y squared = 1, x + y = 3, and x + y = 1. Then there is an arrow from this graph to the right-hand side of the figure marked with x = (u + v)/2 and y = (v minus u)/2. On the right-hand side of this figure there is a simpler region S in the Cartesian u v-plane bounded by u v = negative 1, u v = 1, v = 1, and v = 3.
> caption: Transforming the region $R$ into the region $S$ to simplify the computation of an integral.

Given $u=x-y$ and $v=x+y,$ we have $x=\frac{u+v}{2}$ and $y=\frac{v-u}{2}$ and hence the transformation to use is $T(u,v)=(\frac{u+v}{2},\frac{v-u}{2}).$ The lines $x+y=1$ and $x+y=3$ become $v=1$ and $v=3,$ respectively. The curves ${x}^{2}-{y}^{2}=1$ and ${x}^{2}-{y}^{2}=−1$ become $uv=1$ and $uv=−1,$ respectively.
Thus we can describe the region $S$ (see the second region [ref:CNX_Calc_Figure_15_07_009]) as

$S=\{(u,v)|1\le v\le 3,\frac{−1}{v}\le u\le \frac{1}{v}\}.$  {eq:fs-id1167793586338}

The Jacobian for this transformation is

$J(u,v)=\frac{\partial (x,y)}{\partial (u,v)}=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v}\end{array}|=|\begin{array}{lll}1\text{/}2 & & -1\text{/}2 \\ 1\text{/}2 & & 1\text{/}2\end{array}|=\frac{1}{2}.$  {eq:fs-id1167793452881}

Therefore, by using the transformation $T,$ the integral changes to

${\displaystyle \iint\limits_{R}(x-y)}{e}^{{x}^{2}-{y}^{2}}dA=\frac{1}{2}{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{−1\text{/}v}^{1\text{/}v} u{e}^{uv}du\;dv}}.$  {eq:fs-id1167793449189}

Doing the evaluation, we have

$\frac{1}{2}{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{−1\text{/}v}^{1\text{/}v} u{e}^{uv}du\;dv}}=\frac{2}{3e}\approx 0.245.$  {eq:fs-id1167793589663}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793515311} type= 
PROBLEM:
Using the substitutions $x=v$ and $y=\sqrt{u+v},$ evaluate the integral ${\displaystyle \iint\limits_{R}y\;\text{sin}({y}^{2}-x)}dA$ where $R$ is the region bounded by the lines $y=\sqrt{x},x=2,\text{and}\;y=0.$
SOLUTION:
$\frac{1}{2}(\text{sin}\;2-2)$
COMMENTARY: Hint
Sketch a picture and find the limits of integration.
:::
:::

## Change of Variables for Triple Integrals
Changing variables in triple integrals works in exactly the same way. Cylindrical and spherical coordinate substitutions are special cases of this method, which we demonstrate here.
Suppose that $G$ is a region in $uvw\text{-space}$ and is mapped to $D$ in $xyz\text{-space}$ ([ref:CNX_Calc_Figure_15_07_010]) by a one-to-one ${C}^{1}$ transformation $T(u,v,w)=(x,y,z)$ where $x=g(u,v,w),$ $y=h(u,v,w),$ and $z=k(u,v,w).$

> FIGURE {fig:CNX_Calc_Figure_15_07_010} src=../../media/CNX_Calc_Figure_15_07_010.jpg
> alt: On the left-hand side of this figure, there is a region G in u v w space. Then there is an arrow from this graph to the right-hand side of the figure marked with x = g(u, v, w), y = h(u, v, w), and z = k(u, v, w). On the right-hand side of this figure there is a region D in xyz space.
> caption: A region $G$ in $uvw\text{-space}$ mapped to a region $D$ in $xyz\text{-space}.$

Then any function $F(x,y,z)$ defined on $D$ can be thought of as another function $H(u,v,w)$ that is defined on $G\text{:}$

$F(x,y,z)=F(g(u,v,w),h(u,v,w),k(u,v,w))=H(u,v,w).$  {eq:fs-id1167793711059}

Now we need to define the Jacobian for three variables.

:::note [definition] Definition
The Jacobian determinant $J(u,v,w)$ in three variables is defined as follows:

$J(u,v,w)=|\begin{array}{lllll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} & & \frac{\partial z}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v} & & \frac{\partial z}{\partial v} \\ \frac{\partial x}{\partial w} & & \frac{\partial y}{\partial w} & & \frac{\partial z}{\partial w}\end{array}|.$  {eq:fs-id1167793299685}

This is also the same as

$J(u,v,w)=|\begin{array}{lllll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} & & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v} & & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & & \frac{\partial z}{\partial v} & & \frac{\partial z}{\partial w}\end{array}|.$  {eq:fs-id1167793618042}

The Jacobian can also be simply denoted as $\frac{\partial (x,y,z)}{\partial (u,v,w)}.$
:::
With the transformations and the Jacobian for three variables, we are ready to establish the theorem that describes change of variables for triple integrals.

:::note [theorem] Change of Variables for Triple Integrals
Let $T(u,v,w)=(x,y,z)$ where $x=g(u,v,w),y=h(u,v,w),$ and $z=k(u,v,w),$ be a one-to-one ${C}^{1}$ transformation, with a nonzero Jacobian, that maps the region $G$ in the $uvw\text{-space}$ into the region $R$ in the $xyz\text{-space}\text{.}$ As in the two-dimensional case, if $F$ is continuous on $R,$ then

$\begin{array}{rl}{\displaystyle \iiint\limits_{R}F(x,y,z)dV} & ={\displaystyle \iiint\limits_{G}F(g(u,v,w),h(u,v,w),k(u,v,w))|\frac{\partial (x,y,z)}{\partial (u,v,w)}|}du\;dv\;dw \\ & ={\displaystyle \iiint\limits_{G}H(u,v,w)}|J(u,v,w)|du\;dv\;dw.\end{array}$  {eq:fs-id1167793514685}

:::
Let us now see how changes in triple integrals for cylindrical and spherical coordinates are affected by this theorem. We expect to obtain the same formulas as in [Triple Integrals in Cylindrical and Spherical Coordinates](module:m53967).

:::example {ex:fs-id1167793293901} Obtaining Formulas in Triple Integrals for Cylindrical and Spherical Coordinates

:::exercise {fs-id1167793293903} type= 
PROBLEM:
Derive the formula in triple integrals for
a. cylindrical and
b. spherical coordinates.
SOLUTION:
a. For cylindrical coordinates, the transformation is $T(r,\theta ,z)=(x,y,z)$ from the Cartesian $r\theta z\text{-plane}$ to the Cartesian $xyz\text{-plane}$ ([ref:CNX_Calc_Figure_15_07_011]). Here $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ and $z=z.$ The Jacobian for the transformation is

$\begin{array}{rl}J(r,\theta ,z) & =\frac{\partial (x,y,z)}{\partial (r,\theta ,z)}=|\begin{array}{lllll}\frac{\partial x}{\partial r} & & \frac{\partial x}{\partial \theta} & & \frac{\partial x}{\partial z} \\ \frac{\partial y}{\partial r} & & \frac{\partial y}{\partial \theta} & & \frac{\partial y}{\partial z} \\ \frac{\partial z}{\partial r} & & \frac{\partial z}{\partial \theta} & & \frac{\partial z}{\partial z}\end{array}| \\ & =|\begin{array}{lllll}\text{cos}\;\theta & & -r\;\text{sin}\;\theta & & 0 \\ \text{sin}\;\theta & & r\;\text{cos}\;\theta & & 0 \\ 0 & & 0 & & 1\end{array}|=r\;{\text{cos}}^{2}\theta +r\;{\text{sin}}^{2}\theta =r({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta )=r.\end{array}$  {eq:fs-id1167794284179}

We know that $r\ge 0,$ so $|J(r,\theta ,z)|=r.$ Then the triple integral is

${\displaystyle \iiint\limits_{D}f(x,y,z)dV={\displaystyle \iiint\limits_{G}f(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z)}}r\;dr\;d\theta \;dz.$  {eq:fs-id1167793640526}

> FIGURE {fig:CNX_Calc_Figure_15_07_011} src=../../media/CNX_Calc_Figure_15_07_011.jpg
> alt: On the left-hand side of this figure, there is a cube G with sides parallel to the coordinate axes in cylindrical coordinate space. Then there is an arrow from this graph to the right-hand side of the figure marked with x = r cos theta, y = r sin theta, and z = z. On the right-hand side of this figure there is a region D in x y z space that is a thick annulus. The top is labeled z = constant, the flat vertical side is labeled theta = constant, and the outermost side is labeled r = constant.
> caption: The transformation from rectangular coordinates to cylindrical coordinates can be treated as a change of variables from region $G$ in $r\theta z\text{-space}$ to region $D$ in $xyz\text{-space}.$

b. For spherical coordinates, the transformation is $T(ρ,\theta ,φ)=(x,y,z)$ from the Cartesian $p\theta φ\text{-plane}$ to the Cartesian $xyz\text{-plane}$ ([ref:CNX_Calc_Figure_15_07_012]). Here $x=ρ\;\text{sin}\;φ\;\text{cos}\;\theta ,$ $y=ρ\;\text{sin}\;φ\;\text{sin}\;\theta ,$ and $z=ρ\;\text{cos}\;φ.$ The Jacobian for the transformation is

$J(ρ,\theta ,φ)=\frac{\partial (x,y,z)}{\partial (ρ,\theta ,φ)}=|\begin{array}{lllll}\frac{\partial x}{\partial ρ} & & \frac{\partial x}{\partial \theta} & & \frac{\partial x}{\partial φ} \\ \frac{\partial y}{\partial ρ} & & \frac{\partial y}{\partial \theta} & & \frac{\partial y}{\partial φ} \\ \frac{\partial z}{\partial ρ} & & \frac{\partial z}{\partial \theta} & & \frac{\partial z}{\partial φ}\end{array}|=|\begin{array}{lllll}\text{sin}\;φ\;\text{cos}\;\theta & & ρ\;\text{sin}\;φ\;\text{sin}\;\theta & & ρ\;\text{cos}\;φ\;\text{cos}\;\theta \\ \text{sin}\;φ\;\text{sin}\;\theta & & ρ\;\text{sin}\;φ\;\text{cos}\;\theta & & ρ\;\text{cos}\;φ\;\text{sin}\;\theta \\ \text{cos}\;ϕ & & 0 & & -ρ\;\text{sin}\;φ\end{array}|.$  {eq:fs-id1167793373656}

Expanding the determinant with respect to the third row:

$\begin{array}{r} \\ \\ =\text{cos}\;φ|\begin{array}{lll}-ρ\;\text{sin}\;φ\;\text{sin}\;\theta & & ρ\;\text{cos}\;φ\;\text{cos}\;\theta \\ ρ\;\text{sin}\;φ\;\text{sin}\;\theta & & ρ\;\text{cos}\;φ\;\text{sin}\;\theta \end{array}|-ρ\;\text{sin}\;φ|\begin{array}{lll}\text{sin}\;φ\;\text{cos}\;\theta & & -ρ\;\text{sin}\;φ\;\text{sin}\;\theta \\ \text{sin}\;φ\;\text{sin}\;\theta & & ρ\;\text{sin}\;φ\;\text{cos}\;\theta \end{array}| \\ =\text{cos}\;φ(\text{−}{ρ}^{2}\text{sin}\;φ\;\text{cos}\;φ\;{\text{sin}}^{2}\theta -{ρ}^{2}\text{sin}\;φ\;\text{cos}\;φ\;{\text{cos}}^{2}\theta ) \\ \;-ρ\;\text{sin}\;φ(ρ\;{\text{sin}}^{2}φ\;{\text{cos}}^{2}\theta +ρ\;{\text{sin}}^{2}φ\;{\text{sin}}^{2}\theta ) \\ =\text{−}{ρ}^{2}\text{sin}\;φ\;{\text{cos}}^{2}φ({\text{sin}}^{2}\theta +{\text{cos}}^{2}\theta )-{ρ}^{2}\text{sin}\;φ\;{\text{sin}}^{2}φ({\text{sin}}^{2}\theta +{\text{cos}}^{2}\theta ) \\ =\text{−}{ρ}^{2}\text{sin}\;φ\;{\text{cos}}^{2}φ-{ρ}^{2}\text{sin}\;φ\;{\text{sin}}^{2}φ \\ =\text{−}{ρ}^{2}\text{sin}\;φ({\text{cos}}^{2}φ+{\text{sin}}^{2}φ)=\text{−}{ρ}^{2}\text{sin}\;φ.\end{array}$  {eq:fs-id1167794327638}

Since $0\le φ\le \pi ,$ we must have $\text{sin}\;φ\ge 0.$ Thus $|J(ρ,\theta ,φ)|=|\text{−}{ρ}^{2}\text{sin}\;φ|={ρ}^{2}\text{sin}\;φ.$

> FIGURE {fig:CNX_Calc_Figure_15_07_012} src=../../media/CNX_Calc_Figure_15_07_012.jpg
> alt: On the left-hand side of this figure, there is a cube G with sides parallel to the coordinate axes in rho phi theta space. Then there is an arrow from this graph to the right-hand side of the figure marked with x = rho sin phi cos theta, y = rho sin phi sin theta, and z = rho cos phi. On the right-hand side of this figure there is a region D in xyz space that is a thick annulus and has the point (x, y, z) shown as being equal to (rho, phi, theta). The top is labeled phi = constant, the flat vertical side is labeled theta = constant, and the outermost side is labeled rho = constant.
> caption: The transformation from rectangular coordinates to spherical coordinates can be treated as a change of variables from region $G$ in $ρ\theta φ\text{-space}$ to region $D$ in $xyz\text{-space}\text{.}$

Then the triple integral becomes

${\displaystyle \iiint\limits_{D}f(x,y,z)}dV={\displaystyle \iiint\limits_{G}f(ρ\;\text{sin}\;φ\;\text{cos}\;\theta ,ρ\;\text{sin}\;φ\;\text{sin}\;\theta ,ρ\;\text{cos}\;φ)}{ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta .$  {eq:fs-id1167794213172}

:::
:::
Let’s try another example with a different substitution.

:::example {ex:fs-id1167793376266} Evaluating a Triple Integral with a Change of Variables

:::exercise {fs-id1167793376268} type= 
PROBLEM:
Evaluate the triple integral

${\displaystyle \int_{0}^{3} \;{\displaystyle \int_{0}^{4} \;{\displaystyle \int_{y\text{/}2}^{(y\text{/}2)+1} (x+\frac{z}{3})}}}dx\;dy\;dz$  {eq:fs-id1167794324562}

in $xyz\text{-space}$ by using the transformation

$u=(2x-y)\text{/}2,v=y\text{/}2,\text{and}\;w=z\text{/}3.$  {eq:fs-id1167793638312}

Then integrate over an appropriate region in $uvw\text{-space}\text{.}$
SOLUTION:
As before, some kind of sketch of the region $G$ in $xyz\text{-space}$ over which we have to perform the integration can help identify the region $D$ in $uvw\text{-space}$ ([ref:CNX_Calc_Figure_15_07_013]). Clearly $G$ in $xyz\text{-space}$ is bounded by the planes $x=y\text{/}2,x=(y\text{/}2)+1,y=0,$ $y=4,$ $z=0,\text{and}\;z=4.$ We also know that we have to use $u=(2x-y)\text{/}2,v=y\text{/}2,\text{and}\;w=z\text{/}3$ for the transformations. We need to solve for $x,y,\text{and}\;z.$ Here we find that $x=u+v,$ $y=2v,$ and $z=3w.$
Using elementary algebra, we can find the corresponding surfaces for the region $G$ and the limits of integration in $uvw\text{-space}\text{.}$ It is convenient to list these equations in a table.

> TABLE {tab:fs-id1167794223141} cols=3 class=unnumbered
> summary: This table consists of three columns and seven rows. The first row is a header row and reads Equations in x y z for the region D, Corresponding equations in u v w for the region G, and Limits for the integration in u v w. The first column down reads x = y/2, x = (y/2) + 1, y =, y = 4, z = 0, and z = 3. The second column down reads u + v = 2v/2 = v, u + v = (2v/2) + 1 = v + 1, 2v = 0, 2v = 4, 3w = 0, and 3w = 3. The last column reads u = 0, u =1, v = 0, v = 2, w = 0, and w = 1.

| Equations in $xyz$ for the region $D$ | Corresponding equations in $uvw$ for the region $G$ | Limits for the integration in $uvw$ |
| --- | --- | --- |
| $x=y\text{/}2$ | $u+v=2v\text{/}2=v$ | $u=0$ |
| $x=y\text{/}2$ | $u+v=(2v\text{/}2)+1=v+1$ | $u=1$ |
| $y=0$ | $2v=0$ | $v=0$ |
| $y=4$ | $2v=4$ | $v=2$ |
| $z=0$ | $3w=0$ | $w=0$ |
| $z=3$ | $3w=3$ | $w=1$ |

> FIGURE {fig:CNX_Calc_Figure_15_07_013} src=../../media/CNX_Calc_Figure_15_07_013.jpg
> alt: On the left-hand side of this figure, there is a box G with sides 1, 2, and 1 along the u, v, and w axes, respectively. Then there is an arrow from this graph to the right-hand side of the figure marked with x = u + v, y = 2v, and z = 3w. On the right-hand side of this figure there is a region D in xyz space that is a rotated box with sides 1, 4, and 3 along the x, y, and z axes. The rear plane is marked x = y/2 or y = 2x. The front plane is marked x = y/2 + 1 or y = 2x minus 2.
> caption: The region $G$ in $uvw\text{-space}$ is transformed to region $D$ in $xyz\text{-space}\text{.}$

Now we can calculate the Jacobian for the transformation:

$J(u,v,w)=|\begin{array}{lllll}\frac{\partial x}{\partial u} & & \frac{\partial x}{\partial v} & & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & & \frac{\partial y}{\partial v} & & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & & \frac{\partial z}{\partial v} & & \frac{\partial z}{\partial w}\end{array}|=|\begin{array}{lllll}1 & & 1 & & 0 \\ 0 & & 2 & & 0 \\ 0 & & 0 & & 3\end{array}|=6.$  {eq:fs-id1167793607341}

The function to be integrated becomes

$f(x,y,z)=x+\frac{z}{3}=u+v+\frac{3w}{3}=u+v+w.$  {eq:fs-id1167794296463}

We are now ready to put everything together and complete the problem.

$\begin{array}{l} \\ \\ \\ \\ \;{\displaystyle \int_{0}^{3} \;{\displaystyle \int_{0}^{4} \;{\displaystyle \int_{y\text{/}2}^{(y\text{/}2)+1} (x+\frac{z}{3})}}}dx\;dy\;dz \\ \\ ={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{1} (u+v+w)}}}|J(u,v,w)|du\;dv\;dw={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{1} (u+v+w)}}}|6|du\;dv\;dw \\ =6{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{1} (u+v+w)}}}du\;dv\;dw=6{{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{2} [\frac{{u}^{2}}{2}+vu+wu]}}}_{0}^{1}dv\;dw \\ =6{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{2} (\frac{1}{2}+v+w)}}dv\;dw=6{{\displaystyle \int_{0}^{1} [\frac{1}{2}v+\frac{{v}^{2}}{2}+wv]}}_{0}^{2}dw \\ =6{\displaystyle \int_{0}^{1} (3+2w)}dw=6{[3w+{w}^{2}]}_{0}^{1}=24.\end{array}$  {eq:fs-id1167793420359}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794212110} type= 
PROBLEM:
Let $D$ be the region in $xyz\text{-space}$ defined by $1\le x\le 2,0\le xy\le 2,\text{and}\;0\le z\le 1.$
Evaluate ${\displaystyle \iiint\limits_{D}({x}^{2}y+3xyz)}dx\;dy\;dz$ by using the transformation $u=x,v=xy,$ and $w=3z.$
SOLUTION:
${\displaystyle \int_{0}^{3} \;{\displaystyle \int_{0}^{2} \;{\displaystyle \int_{1}^{2} (\frac{v}{3}+\frac{vw}{3u})}}}du\;dv\;dw=2+\text{ln}\;8$
COMMENTARY: Hint
Make a table for each surface of the regions and decide on the limits, as shown in the example.
:::
:::

## Key Concepts {section:key-concepts}
- A transformation $T$ is a function that transforms a region $G$ in one plane (space) into a region $R$ in another plane (space) by a change of variables.
- A transformation $T:G\to R$ defined as $T(u,v)=(x,y)$ $(\text{or}\;T(u,v,w)=(x,y,z))$ is said to be a one-to-one transformation if no two points map to the same image point.
- If $f$ is continuous on $R,$ then ${\displaystyle \iint\limits_{R}f(x,y)}dA={\displaystyle \iint\limits_{S}f(g(u,v),h(u,v))}|\frac{\partial (x,y)}{\partial (u,v)}|du\;dv.$
- If $F$ is continuous on $R,$ then

$\begin{array}{rl}{\displaystyle \iiint\limits_{R}F(x,y,z)}dV & ={\displaystyle \iiint\limits_{G}F(g(u,v,w),h(u,v,w),k(u,v,w))}|\frac{\partial (x,y,z)}{\partial (u,v,w)}|du\;dv\;dw \\ & ={\displaystyle \iiint\limits_{G}H(u,v,w)}|J(u,v,w)|du\;dv\;dw.\end{array}$  {eq:fs-id1167793941329}

##  {section:section-exercises}
In the following exercises, the function $T:S\to R,T(u,v)=(x,y)$ on the region $S=\{(u,v)|0\le u\le 1,0\le v\le 1\}$ bounded by the unit square is given, where $R\subset {\mathbb{R}}^{2}$ is the image of $S$ under $T.$
a. Justify that the function $T$ is a ${C}^{1}$ transformation.
b. Find the images of the vertices of the unit square $S$ through the function $T.$
c. Determine the image $R$ of the unit square $S$ and graph it.

:::exercise {fs-id1167793376177} type= 
PROBLEM:
$x=2u,y=3v$
:::

:::exercise {fs-id1167793641960} type= 
PROBLEM:
$x=\frac{u}{2},y=\frac{v}{3}$
SOLUTION:
a. $T(u,v)=(g(u,v),h(u,v)),x=g(u,v)=\frac{u}{2}$ and $y=h(u,v)=\frac{v}{3}.$ The functions $g$ and $h$ are continuous and differentiable, and the partial derivatives ${g}_{u}(u,v)=\frac{1}{2},$ ${g}_{v}(u,v)=0,{h}_{u}(u,v)=0\;\text{and}\;{h}_{v}(u,v)=\frac{1}{3}$ are continuous on $S;$ b. $T(0,0)=(0,0),$ $T(1,0)=(\frac{1}{2},0),T(0,1)=(0,\frac{1}{3}),$ and $T(1,1)=(\frac{1}{2},\frac{1}{3});$ c. $R$ is the rectangle of vertices $(0,0),(\frac{1}{2},0),(\frac{1}{2},\frac{1}{3}),\text{and}\;(0,\frac{1}{3})$ in the $xy\text{-plane;}$ the following figure.

> IMAGE {img:fs-id1167793479272} src=../../media/CNX_Calc_Figure_15_07_202.jpg
> alt: A rectangle with one corner at the origin, horizontal length 0.5, and vertical height 0.34.

:::

:::exercise {fs-id1167793479287} type= 
PROBLEM:
$x=u-v,y=u+v$
:::

:::exercise {fs-id1167793499037} type= 
PROBLEM:
$x=2u-v,y=u+2v$
SOLUTION:
a. $T(u,v)=(g(u,v),h(u,v)),x=g(u,v)=2u-v,$ and $y=h(u,v)=u+2v.$ The functions $g$ and $h$ are continuous and differentiable, and the partial derivatives ${g}_{u}(u,v)=2,$ ${g}_{v}(u,v)=−1,$ ${h}_{u}(u,v)=1,$ and ${h}_{v}(u,v)=2$ are continuous on $S;$ b. $T(0,0)=(0,0),$ $T(1,0)=(2,1),$ $T(0,1)=(−1,2),$ and $T(1,1)=(1,3);$ c. $R$ is the sqaure of vertices $(0,0),(2,1),(1,3),\text{and}\;(−1,2)$ in the $xy\text{-plane;}$ see the following figure.

> IMAGE {img:fs-id1167793638544} src=../../media/CNX_Calc_Figure_15_07_204.jpg
> alt: A square of side length square root of 5 with one corner at the origin and another at (2, 1).

:::

:::exercise {fs-id1167793626899} type= 
PROBLEM:
$x={u}^{2},y={v}^{2}$
:::

:::exercise {fs-id1167793221652} type= 
PROBLEM:
$x={u}^{3},y={v}^{3}$
SOLUTION:
a. $T(u,v)=(g(u,v),h(u,v)),x=g(u,v)={u}^{3},$ and $y=h(u,v)={v}^{3}.$ The functions $g$ and $h$ are continuous and differentiable, and the partial derivatives ${g}_{u}(u,v)=3{u}^{2},$ ${g}_{v}(u,v)=0,$ ${h}_{u}(u,v)=0,$ and ${h}_{v}(u,v)=3{v}^{2}$ are continuous on $S;$ b. $T(0,0)=(0,0),$ $T(1,0)=(1,0),$ $T(0,1)=(0,1),$ and $T(1,1)=(1,1);$ c. $R$ is the unit square in the $xy\text{-plane;}$ see the following figure.

> IMAGE {img:} src=../../media/CNX_Calc_Figure_15_07_205.jpg
> alt: A Cartesian coordinate graph with axes ranging from 0 to 1 on both x (horizontal) and y (vertical) axes, displaying an empty plot area with no data or functions presented.

:::
In the following exercises, determine whether the transformations $T:S\to R$ are one-to-one or not.

:::exercise {fs-id1167793929658} type= 
PROBLEM:
$x={u}^{2},y={v}^{2},\text{where}\;S$ is the rectangle of vertices $(−1,0),(1,0),(1,1),\text{and}\;(−1,1).$
:::

:::exercise {fs-id1167793959325} type= 
PROBLEM:
$x={u}^{4},y={u}^{2}+v,\text{where}\;S$ is the triangle of vertices $(−2,0),(2,0),\text{and}\;(0,2).$
SOLUTION:
$T$ is not one-to-one: two points of $S$ have the same image. Indeed, $T(−2,0)=T(2,0)=(16,4).$
:::

:::exercise {fs-id1167793500466} type= 
PROBLEM:
$x=2u,y=3v,\text{where}\;S$ is the square of vertices $(−1,1),(−1,−1),(1,−1),\text{and}\;(1,1).$
:::

:::exercise {fs-id1167793952112} type= 
PROBLEM:
$T(u,v)=(2u-v,u),$ where $S$ is the triangle of vertices $(−1,1),(−1,−1),\text{and}\;(1,−1).$
SOLUTION:
$T$ is one-to-one: We argue by contradiction. $T({u}_{1},{v}_{1})=T({u}_{2},{v}_{2})$ implies $2{u}_{1}-{v}_{1}=2{u}_{2}-{v}_{2}$ and ${u}_{1}={u}_{2}.$ Thus, ${u}_{1}={u}_{2}$ and ${v}_{1}={v}_{2}.$
:::

:::exercise {fs-id1167793911904} type= 
PROBLEM:
$x=u+v+w,y=u+v,z=w,$ where $S=R={\mathbb{R}}^{3}.$
:::

:::exercise {fs-id1167793221738} type= 
PROBLEM:
$x={u}^{2}+v+w,y={u}^{2}+v,z=w,$ where $S=R={\mathbb{R}}^{3}.$
SOLUTION:
$T$ is not one-to-one: $T(1,v,w)=(−1,v,w)$
:::
In the following exercises, the transformations $T:S\to R$ are one-to-one. Find their related inverse transformations ${T}^{−1}:R\to S.$

:::exercise {fs-id1167793957821} type= 
PROBLEM:
$x=4u,y=5v,$ where $S=R={\mathbb{R}}^{2}.$
:::

:::exercise {fs-id1167793547357} type= 
PROBLEM:
$x=u+2v,y=\text{−}u+v,$ where $S=R={\mathbb{R}}^{2}.$
SOLUTION:
$u=\frac{x-2y}{3},v=\frac{x+y}{3}$
:::

:::exercise {fs-id1167793939825} type= 
PROBLEM:
$x={e}^{2u+v},y={e}^{u-v},$ where $S={\mathbb{R}}^{2}$ and $R=\{(x,y)|x>0,y>0\}$
:::

:::exercise {fs-id1167794222519} type= 
PROBLEM:
$x=\text{ln}\;u,y=\text{ln}(uv),$ where $S=\{(u,v)|u>0,v>0\}$ and $R={\mathbb{R}}^{2}.$
SOLUTION:
$u={e}^{x},v={e}^{\text{−}x+y}$
:::

:::exercise {fs-id1167793478889} type= 
PROBLEM:
$x=u+v+w,y=3v,z=2w,$ where $S=R={\mathbb{R}}^{3}.$
:::

:::exercise {fs-id1167793569298} type= 
PROBLEM:
$x=u+v,y=v+w,z=u+w,$ where $S=R={\mathbb{R}}^{3}.$
SOLUTION:
$u=\frac{x-y+z}{2},v=\frac{x+y-z}{2},w=\frac{\text{−}x+y+z}{2}$
:::
In the following exercises, the transformation $T:S\to R,T(u,v)=(x,y)$ and the region $R\subset {\mathbb{R}}^{2}$ are given. Find the region $S\subset {\mathbb{R}}^{2}.$

:::exercise {fs-id1167793375440} type= 
PROBLEM:
$x=au,y=bv,R=\{(x,y)|{x}^{2}+{y}^{2}\le {a}^{2}{b}^{2}\},$ where $a,b>0$
:::

:::exercise {fs-id1167793383430} type= 
PROBLEM:
$x=au,y=bv,R=\{(x,y)|\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}\le 1\},$ where $a,b>0$
SOLUTION:
$S=\{(u,v)|{u}^{2}+{v}^{2}\le 1\}$
:::

:::exercise {fs-id1167793593486} type= 
PROBLEM:
$x=\frac{u}{a},y=\frac{v}{b},z=\frac{w}{c},$ $R=\{(x,y)|{x}^{2}+{y}^{2}+{z}^{2}\le 1\},$ where $a,b,c>0$
:::

:::exercise {fs-id1167793395450} type= 
PROBLEM:
$x=au,y=bv,z=cw,R=\{(x,y)|\frac{{x}^{2}}{{a}^{2}}-\frac{{y}^{2}}{{b}^{2}}-\frac{{z}^{2}}{{c}^{2}}\le 1,z>0\},$ where $a,b,c>0$
SOLUTION:
$R=\{(u,v,w)|{u}^{2}-{v}^{2}-{w}^{2}\le 1,w>0\}$
:::
In the following exercises, find the Jacobian $J$ of the transformation.

:::exercise {fs-id1167794171549} type= 
PROBLEM:
$x=u+2v,y=\text{−}u+v$
:::

:::exercise {fs-id1167794210484} type= 
PROBLEM:
$x=\frac{{u}^{3}}{2},y=\frac{v}{{u}^{2}}$
SOLUTION:
$\frac{3}{2}$
:::

:::exercise {fs-id1167794210538} type= 
PROBLEM:
$x={e}^{2u-v},y={e}^{u+v}$
:::

:::exercise {fs-id1167793943788} type= 
PROBLEM:
$x=u{e}^{v},y={e}^{\text{−}v}$
SOLUTION:
$−1$
:::

:::exercise {fs-id1167794324495} type= 
PROBLEM:
$x=u\;\text{cos}({e}^{v}),y=u\;\text{sin}({e}^{v})$
:::

:::exercise {fs-id1167793571528} type= 
PROBLEM:
$x=v\;\text{sin}({u}^{2}),y=v\;\text{cos}({u}^{2})$
SOLUTION:
$2uv$
:::

:::exercise {fs-id1167793571595} type= 
PROBLEM:
$x=u\;\text{cosh}\;v,y=u\;\text{sinh}\;v,z=w$
:::

:::exercise {fs-id1167793925194} type= 
PROBLEM:
$x=v\;\text{cosh}(\frac{1}{u}),y=v\;\text{sinh}(\frac{1}{u}),z=u+{w}^{2}$
SOLUTION:
$\frac{2vw}{{u}^{2}}\text{or}\frac{2w(u+{w}^{2})}{{u}^{2}}$
:::

:::exercise {fs-id1167793589827} type= 
PROBLEM:
$x=u+v,y=v+w,z=u$
:::

:::exercise {fs-id1167793639924} type= 
PROBLEM:
$x=u-v,y=u+v,z=u+v+w$
SOLUTION:
$2$
:::

:::exercise {fs-id1167793638385} type= 
PROBLEM:
The triangular region $R$ with the vertices $(0,0),(1,1),\text{and}\;(1,2)$ is shown in the following figure.

> IMAGE {img:fs-id1167793393657} src=../../media/CNX_Calc_Figure_15_07_206.jpg
> alt: A triangle with corners at the origin, (1, 1), and (1, 2).

a. Find a transformation $T:S\to R,$ $T(u,v)=(x,y)=(au+bv,cu+dv),$ where $a,b,c,$ and $d$ are real numbers with $ad-bc≠0$ such that ${T}^{−1}(0,0)=(0,0),{T}^{−1}(1,1)=(1,0),$ and ${T}^{−1}(1,2)=(0,1).$
b. Use the transformation $T$ to find the area $A(R)$ of the region $R.$
:::

:::exercise {fs-id1167793245905} type= 
PROBLEM:
The triangular region $R$ with the vertices $(0,0),(2,0),\text{and}\;(1,3)$ is shown in the following figure.

> IMAGE {img:fs-id1167794041866} src=../../media/CNX_Calc_Figure_15_07_207.jpg
> alt: A triangle with corners at the origin, (2, 0), and (1, 3).

a. Find a transformation $T:S\to R,$ $T(u,v)=(x,y)=(au+bv,cu+dv),$ where $a,b,c$ and $d$ are real numbers with $ad-bc≠0$ such that ${T}^{−1}(0,0)=(0,0),$ ${T}^{−1}(2,0)=(1,0),$ and ${T}^{−1}(1,3)=(0,1).$
b. Use the transformation $T$ to find the area $A(R)$ of the region $R.$
SOLUTION:
a. $T(u,v)=(2u+v,3v);$ b. The area of $R$ is
$A(R)={\displaystyle \int_{0}^{3} \;{\displaystyle \int_{y\text{/}3}^{(6-y)\text{/}3} dx\;dy=}}{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{1-u} |\frac{\partial (x,y)}{\partial (u,v)}|dv\;du=}}{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{1-u} 6dv\;du=}}3.$
:::
In the following exercises, use the transformation $u=y-x,v=y,$ to evaluate the integrals on the parallelogram $R$ of vertices $(0,0),(1,0),(2,1),\text{and}\;(1,1)$ shown in the following figure.

> IMAGE {img:fs-id1167794296793} src=../../media/CNX_Calc_Figure_15_07_208.jpg
> alt: A rhombus with corners at the origin, (1, 0), (1, 1), and (2, 1).

:::exercise {fs-id1167794296804} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}(y-x)}dA$
:::

:::exercise {fs-id1167794296858} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}({y}^{2}-xy)}dA$
SOLUTION:
$-\frac{1}{4}$
:::
In the following exercises, use the transformation $y-x=u,x+y=v$ to evaluate the integrals on the square $R$ determined by the lines $y=x,y=\text{−}x+2,y=x+2,$ and $y=\text{−}x$ shown in the following figure.

> IMAGE {img:fs-id1167793432383} src=../../media/CNX_Calc_Figure_15_07_209.jpg
> alt: A square with side lengths square root of 2 rotated 45 degrees with one corner at the origin and another at (1, 1).

:::exercise {fs-id1167793432395} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}{e}^{x+y}dA}$
:::

:::exercise {fs-id1167794336010} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}\text{sin}(x-y)}dA$
SOLUTION:
$−1+\text{cos}\;2$
:::
In the following exercises, use the transformation $x=u,5y=v$ to evaluate the integrals on the region $R$ bounded by the ellipse ${x}^{2}+25{y}^{2}=1$ shown in the following figure.

> IMAGE {img:fs-id1167794246452} src=../../media/CNX_Calc_Figure_15_07_210.jpg
> alt: An ellipse with center at the origin, major axis 2, and minor 0.4.

:::exercise {fs-id1167794246463} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}\sqrt{{x}^{2}+25{y}^{2}}\;dA}$
:::

:::exercise {fs-id1167793498573} type= 
PROBLEM:
${{\displaystyle \iint\limits_{R}({x}^{2}+25{y}^{2})}}^{2}dA$
SOLUTION:
$\frac{\pi}{15}$
:::
In the following exercises, use the transformation $u=x+y,v=x-y$ to evaluate the integrals on the trapezoidal region $R$ determined by the points $(1,0),(2,0),(0,2\text{)},\text{and}\;(0,1)$ shown in the following figure.

> IMAGE {img:fs-id1167794122105} src=../../media/CNX_Calc_Figure_15_07_211.jpg
> alt: A trapezoid with corners at (1, 0), (0, 1), (0, 2), and (2, 0).

:::exercise {fs-id1167794122118} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}({x}^{2}-2xy+{y}^{2}){e}^{x+y}dA}$
:::

:::exercise {fs-id1167793378253} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}({x}^{3}+3{x}^{2}y+3x{y}^{2}+{y}^{3})}dA$
SOLUTION:
$\frac{31}{5}$
:::

:::exercise {fs-id1167794067796} type= 
PROBLEM:
The circular annulus sector $R$ bounded by the circles $4{x}^{2}+4{y}^{2}=1$ and $9{x}^{2}+9{y}^{2}=64,$ the line $x=y\sqrt{3},$ and the $y\text{-axis}$ is shown in the following figure. Find a transformation $T$ from a rectangular region $S$ in the $r\theta \text{-plane}$ to the region $R$ in the $xy\text{-plane.}$ Graph $S.$

> IMAGE {img:fs-id1167793711116} src=../../media/CNX_Calc_Figure_15_07_212.jpg
> alt: In the first quadrant, a section of an annulus described by an inner radius of 0.5, outer radius slightly more than 2.5, and center the origin. There is a line dividing this annulus that comes from approximately a 30 degree angle. The portion corresponding to 60 degrees is shaded.

:::

:::exercise {fs-id1167793417070} type= 
PROBLEM:
The solid $R$ bounded by the circular cylinder ${x}^{2}+{y}^{2}=9$ and the planes $z=0,z=1,$ $x=0,\text{and}\;y=0$ is shown in the following figure. Find a transformation $T$ from a cylindrical box $S$ in $r\theta z\text{-space}$ to the solid $R$ in $xyz\text{-space}.$

> IMAGE {img:fs-id1167793293525} src=../../media/CNX_Calc_Figure_15_07_214.jpg
> alt: A quarter of a cylinder with height 1 and radius 3. The center axis is the z axis.

SOLUTION:
$T(r,\theta ,z)=(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z);S=[0,3]\;\times \;[0,\frac{\pi}{2}]\;\times \;[0,1]$ in the $r\theta z\text{-space}$
:::

:::exercise {fs-id1167793580534} type= 
PROBLEM:
Show that ${\displaystyle \iint\limits_{R}f(\sqrt{\frac{{x}^{2}}{3}+\frac{{y}^{2}}{3}})}dA=2\pi \sqrt{15}{\displaystyle \int_{0}^{1} f(ρ)}ρ\;dρ,$ where $f$ is a continuous function on $[0,1]$ and $R$ is the region bounded by the ellipse $5{x}^{2}+3{y}^{2}=15.$
:::

:::exercise {fs-id1167793593581} type= 
PROBLEM:
Show that ${\displaystyle \iiint\limits_{R}f(\sqrt{16{x}^{2}+4{y}^{2}+{z}^{2}})}dV=\frac{\pi}{2}{\displaystyle \int_{0}^{1} f(ρ)}{ρ}^{2}dρ,$ where $f$ is a continuous function on $[0,1]$ and $R$ is the region bounded by the ellipsoid $16{x}^{2}+4{y}^{2}+{z}^{2}=1.$
:::

:::exercise {fs-id1167793933569} type= 
PROBLEM:
**[T]** Find the area of the region bounded by the curves $xy=1,xy=3,y=2x,$ and $y=3x$ by using the transformation $u=xy$ and $v=\frac{y}{x}.$ Use a computer algebra system (CAS) to graph the boundary curves of the region $R.$
:::

:::exercise {fs-id1167793619897} type= 
PROBLEM:
**[T]** Find the area of the region bounded by the curves $xy=2,xy=3,y=x,$ and $y=2x$ by using the transformation $u=xy$ and $v=\frac{y}{x}.$
SOLUTION:
The area of the region is $\frac{ln2}{2}.$ A graph of the region is:

> IMAGE {img:fs-id1167793298338} src=../../media/CNX_Calc_Figure_15_07_216.jpg
> alt: Four lines are drawn, namely, y = 3, y = 2, y = 3/(x squared), and y = 2/(x squared). The lines y = 3 and y = 2 are parallel to each other. The lines y = 3/(x squared) and y = 2/(x squared) are curves that run somewhat parallel to each other.

:::

:::exercise {fs-id1167793298354} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{2} \;{\displaystyle \int_{z}^{z+1} (y+1)dx\;dy\;dz}}}$ by using the transformation $u=x-z,$ $v=3y,\text{and}\;w=\frac{z}{2}.$
:::

:::exercise {fs-id1167794284310} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{4}^{6} \;{\displaystyle \int_{3z}^{3z+2} (5-4y)dx\;dz\;dy}}}$ by using the transformation $u=x-3z,v=4y,\text{and}\;w=z.$
SOLUTION:
$8$
:::

:::exercise {fs-id1167793512093} type= 
PROBLEM:
A transformation $T:{\mathbb{R}}^{2}\to {\mathbb{R}}^{2},T(u,v)=(x,y)$ of the form $x=au+bv,y=cu+dv,$ where $a,b,c,\text{and}\;d$ are real numbers, is called linear. Show that a linear transformation for which $ad-bc≠0$ maps parallelograms to parallelograms.
:::

:::exercise {fs-id1167793711532} type= 
PROBLEM:
The transformation ${T}_{\theta}:{\mathbb{R}}^{2}\to {\mathbb{R}}^{2},{T}_{\theta}(u,v)=(x,y),$ where $x=u\;\text{cos}\;\theta -v\;\text{sin}\;\theta ,$ $y=u\;\text{sin}\;\theta +v\;\text{cos}\;\theta ,$ is called a rotation of angle $\theta .$ Show that the inverse transformation of ${T}_{\theta}$ satisfies ${T}_{\theta}{}^{−1}={T}_{\text{−}\theta},$ where ${T}_{\text{−}\theta}$ is the rotation of angle $\text{−}\theta .$
:::

:::exercise {fs-id1167794145446} type= 
PROBLEM:
**[T]** Use the results of the previous exercise to find the region $S$ in the $uv\text{-plane}$ whose image through a rotation of angle $\frac{\pi}{4}$ is the region $R$ enclosed by the ellipse ${x}^{2}+4{y}^{2}=1.$ Use a CAS to answer the following questions.
a. Graph the region $S.$
b. Evaluate the integral ${\displaystyle \iint\limits_{S}{e}^{−2uv}du\;dv}.$ Round your answer to two decimal places.
:::

:::exercise {fs-id1167794212705} type= 
PROBLEM:
**[T]** The transformations ${T}_{i}:{\mathbb{R}}^{2}\to {\mathbb{R}}^{2},$ $i=1\text{,…,}\;4,$ defined by ${T}_{1}(u,v)=(u,\text{−}v),$ ${T}_{2}(u,v)=(\text{−}u,v),{T}_{3}(u,v)=(\text{−}u,\text{−}v),$ and ${T}_{4}(u,v)=(v,u)$ are called reflections about the $x\text{-axis},y\text{-axis},$ origin, and the line $y=x,$ respectively.
a. Find the image of the region $S=\{(u,v)|{u}^{2}+{v}^{2}-2u-4v+1\le 0\}$ in the $xy\text{-plane}$ through the transformation ${T}_{1}\circ {T}_{2}\circ {T}_{3}\circ {T}_{4}.$
b. Use a CAS to graph the image of $S.$
c. Evaluate the integral ${\displaystyle \iint\limits_{S}\text{sin}({u}^{2})du\;dv}$ by using a CAS. Round your answer to two decimal places.
SOLUTION:
a. $R=\{(x,y)|{y}^{2}+{x}^{2}-2y-4x+1\le 0\};$ b. $R$ is graphed in the following figure;

> IMAGE {img:fs-id1167794327545} src=../../media/CNX_Calc_Figure_15_07_218.jpg
> alt: A circle with radius 2 and center (2, 1).

c. $3.16$
:::

:::exercise {fs-id1167794327565} type= 
PROBLEM:
**[T]** The transformation ${T}_{k,1,1}:{\mathbb{R}}^{3}\to {\mathbb{R}}^{3},{T}_{k,1,1}(u,v,w)=(x,y,z)$ of the form $x=ku,$ $y=v,z=w,$ where $k≠1$ is a positive real number, is called a stretch if $k>1$ and a compression if $0<k<1$ in the $x\text{-direction}\text{.}$ Use a CAS to evaluate the integral ${\displaystyle \iiint\limits_{S}{e}^{\text{−}(4{x}^{2}+9{y}^{2}+25{z}^{2})}}dx\;dy\;dz$ on the solid $S=\{(x,y,z)|4{x}^{2}+9{y}^{2}+25{z}^{2}\le 1\}$ by considering the compression ${T}_{2,3,5}(u,v,w)=(x,y,z)$ defined by $x=\frac{u}{2},y=\frac{v}{3},$ and $z=\frac{w}{5}.$ Round your answer to four decimal places.
:::

:::exercise {fs-id1167793616559} type= 
PROBLEM:
**[T]** The transformation ${T}_{a,0}:{\mathbb{R}}^{2}\to {\mathbb{R}}^{2},{T}_{a,0}(u,v)=(u+av,v),$ where $a≠0$ is a real number, is called a shear in the $x\text{-direction}\text{.}$ The transformation, ${T}_{0,b}:{\mathbb{R}}^{2}\to {\mathbb{R}}^{2},{T}_{0,b}(u,v)=(u,bu+v),$ where $b≠0$ is a real number, is called a shear in the $y\text{-direction}\text{.}$
a. Find transformations ${T}_{0,2}\circ {T}_{3,0}.$
b. Find the image $R$ of the trapezoidal region $S$ bounded by $u=0,v=0,v=1,$ and $v=2-u$ through the transformation ${T}_{0,2}\circ {T}_{3,0}.$
c. Use a CAS to graph the image $R$ in the $xy\text{-plane}\text{.}$
d. Find the area of the region $R$ by using the area of region $S.$
SOLUTION:
a. ${T}_{0,2}\circ {T}_{3,0}(u,v)=(u+3v,2u+7v);$ b. The image $R$ is the quadrilateral of vertices $(0,0),(3,7),(2,4),\text{and}\;(4,9);$ c. $S$ is graphed in the following figure;

> IMAGE {img:fs-id1167793423657} src=../../media/CNX_Calc_Figure_15_07_219.jpg
> alt: A four-sided figure with points the origin, (2, 4), (4, 9), and (3, 7).

d. $\frac{3}{2}$
:::

:::exercise {fs-id1167793423680} type= 
PROBLEM:
Use the transformation, $x=au,y=av,z=cw$ and spherical coordinates to show that the volume of a region bounded by the spheroid $\frac{{x}^{2}+{y}^{2}}{{a}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1$ is $\frac{4\pi {a}^{2}c}{3}.$
:::

:::exercise {fs-id1167793460743} type= 
PROBLEM:
Find the volume of a football whose shape is a spheroid $\frac{{x}^{2}+{y}^{2}}{{a}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1$ whose length from tip to tip is $11$ inches and circumference at the center is $22$ inches. Round your answer to two decimal places.
SOLUTION:
$\frac{2662}{3\pi}\simeq 282.45{\;\text{in}}^{3}$
:::

:::exercise {fs-id1167793485997} type= 
PROBLEM:
**[T]** Lamé ovals (or superellipses) are plane curves of equations ${(\frac{x}{a})}^{n}+{(\frac{y}{b})}^{n}=1,$ where *a*, *b*, and *n* are positive real numbers.
a. Use a CAS to graph the regions $R$ bounded by Lamé ovals for $a=1,b=2,n=4$ and $n=6,$ respectively.
b. Find the transformations that map the region $R$ bounded by the Lamé oval ${x}^{4}+{y}^{4}=1,$ also called a squircle and graphed in the following figure, into the unit disk.

> IMAGE {img:fs-id1167794200280} src=../../media/CNX_Calc_Figure_15_07_220.jpg
> alt: A square of side length 2 with rounded corners.

c. Use a CAS to find an approximation of the area $A(R)$ of the region $R$ bounded by ${x}^{4}+{y}^{4}=1.$ Round your answer to two decimal places.
:::

:::exercise {fs-id1167793325881} type= 
PROBLEM:
**[T]** Lamé ovals have been consistently used by designers and architects. For instance, Gerald Robinson, a Canadian architect, has designed a parking garage in a shopping center in Peterborough, Ontario, in the shape of a superellipse of the equation ${(\frac{x}{a})}^{n}+{(\frac{y}{b})}^{n}=1$ with $\frac{a}{b}=\frac{9}{7}$ and $n=e.$ Use a CAS to find an approximation of the area of the parking garage in the case $a=900$ yards, $b=700$ yards, and $n=2.72$.
SOLUTION:
$A(R)=2,177,216{\text{yd}}^{2}$
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* Justify your answer with a proof or a counterexample.

:::exercise {fs-id1167794126897} type= 
PROBLEM:
${\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} f(x,y)dy\;dx}=}{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y)dy\;dx}}$
:::

:::exercise {fs-id1167793480224} type= 
PROBLEM:
Fubini’s theorem can be extended to three dimensions, as long as $f$ is continuous in all variables.
SOLUTION:
True.
:::

:::exercise {fs-id1167793502517} type= 
PROBLEM:
The integral ${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{r}^{1} dz\;dr\;d\theta}}}$ represents the volume of a right cone.
:::

:::exercise {fs-id1167793502590} type= 
PROBLEM:
The Jacobian of the transformation $x={u}^{2}-2v,y=3v-2uv$ is given by $−4{u}^{2}+6u+4v.$
SOLUTION:
False.
:::
Evaluate the following integrals.

:::exercise {fs-id1167793590372} type= 
PROBLEM:
${\displaystyle \iint\limits_{R}(5{x}^{3}{y}^{2}-{y}^{2})}dA,R=\{(x,y)|0\le x\le 2,1\le y\le 4\}$
:::

:::exercise {fs-id1167793354965} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}\frac{y}{3{x}^{2}+1}}dA,D=\{(x,y)|0\le x\le 1,\text{−}x\le y\le x\}$
SOLUTION:
0
:::

:::exercise {fs-id1167794247567} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}\text{sin}({x}^{2}+{y}^{2})}dA$ where $D$ is a disk of radius $2$ centered at the origin
:::

:::exercise {fs-id1167793940982} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{y}^{1} xy{e}^{{x}^{2}}dx\;dy}}$
SOLUTION:
$\frac{1}{4}$
:::

:::exercise {fs-id1167793941053} type= 
PROBLEM:
${\displaystyle \int_{−1}^{1} \;{\displaystyle \int_{0}^{z} \;{\displaystyle \int_{0}^{x-z} 6dy\;dx\;dz}}}$
:::

:::exercise {fs-id1167793479942} type= 
PROBLEM:
${\displaystyle \iiint\limits_{R}3y\;dV},$ where $R=\{(x,y,z)|0\le x\le 1,0\le y\le x,0\le z\le \sqrt{9-{y}^{2}}\}$
SOLUTION:
1.475
:::

:::exercise {fs-id1167793570628} type= 
PROBLEM:
${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{r}^{1} r\;dz\;d\theta \;dr}}}$
:::

:::exercise {fs-id1167794212251} type= 
PROBLEM:
${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{1}^{3} {ρ}^{2}\text{sin}(φ)dρ\;dφ\;d\theta}}}$
SOLUTION:
$\frac{52}{3}\pi$
:::

:::exercise {fs-id1167793582904} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}\sqrt{1-{x}^{2}}}^{\sqrt{1-{x}^{2}}} \;{\displaystyle \int_{\text{−}\sqrt{1-{x}^{2}-{y}^{2}}}^{\sqrt{1-{x}^{2}-{y}^{2}}} dz}\;dy\;dx}}$
:::
For the following problems, find the specified area or volume.

:::exercise {fs-id1167793586900} type= 
PROBLEM:
The area of region enclosed by one petal of $r=\text{cos}(4\theta ).$
SOLUTION:
$\frac{\pi}{16}$
:::

:::exercise {fs-id1167793586945} type= 
PROBLEM:
The volume of the solid that lies between the paraboloid $z=2{x}^{2}+2{y}^{2}$ and the plane $z=8.$
:::

:::exercise {fs-id1167793358443} type= 
PROBLEM:
The volume of the solid bounded by the cylinder ${x}^{2}+{y}^{2}=16$ and from $z=1$ and $z+x=2.$
SOLUTION:
$16\pi \approx 50.265$
:::

:::exercise {fs-id1167793395516} type= 
PROBLEM:
The volume of the intersection between two spheres of radius 1, the top whose center is $(0,0,0.25)$ and the bottom, which is centered at $(0,0,0).$
:::
For the following problems, find the center of mass of the region.

:::exercise {fs-id1167794211067} type= 
PROBLEM:
$ρ(x,y)=xy$ on the circle with radius $1$ in the first quadrant only.
SOLUTION:
$(\frac{8}{15},\frac{8}{15})$
:::

:::exercise {fs-id1167794211135} type= 
PROBLEM:
$ρ(x,y)=(y+1)\sqrt{x}$ in the region bounded by $y={e}^{x},$ $y=0,$ and $x=1.$
:::

:::exercise {fs-id1167793629364} type= 
PROBLEM:
$ρ(x,y,z)=z$ on the inverted cone with radius $2$ and height $2.$
SOLUTION:
$(0,0,\frac{4}{5})$
:::

:::exercise {fs-id1167793750843} type= 
PROBLEM:
The volume an ice cream cone that is given by the solid above $z=\sqrt{({x}^{2}+{y}^{2})}$ and below ${z}^{2}+{x}^{2}+{y}^{2}=z.$
:::
The following problems examine Mount Holly in the state of Michigan. Mount Holly is a landfill that was converted into a ski resort. The shape of Mount Holly can be approximated by a right circular cone of height $1100$ ft and radius $6000$ ft.

:::exercise {fs-id1167793419225} type= 
PROBLEM:
If the compacted trash used to build Mount Holly on average has a density $400{\;\text{lb/ft}}^{3},$ find the amount of work required to build the mountain.
SOLUTION:
$1.452\pi \;\times \;{10}^{15}$ ft-lb
:::

:::exercise {fs-id1167793419280} type= 
PROBLEM:
In reality, it is very likely that the trash at the bottom of Mount Holly has become more compacted with all the weight of the above trash. Consider a density function with respect to height: the density at the top of the mountain is still density $400{\;\text{lb/ft}}^{3}$ and the density increases. Every $100$ feet deeper, the density doubles. What is the total weight of Mount Holly?
:::
The following problems consider the temperature and density of Earth’s layers.

:::exercise {fs-id1167793632985} type= 
PROBLEM:
**[T]** The temperature of Earth’s layers is exhibited in the table below. Use your calculator to fit a polynomial of degree $3$ to the temperature along the radius of the Earth. Then find the average temperature of Earth. (*Hint*: begin at $0$ in the inner core and increase outward toward the surface)

> TABLE {tab:fs-id1167793633015} cols=3 class=unnumbered
> title: Source: http://www.enchantedlearning.com/subjects/astronomy/planets/earth/Inside.shtml
> summary: The layers from crust to core, starting at the top: Rock crust, 0 to 40 km, 0 degrees C; Upper mantle, 40 to 150 km, 870 degrees C. These two layers are grouped together as the Lithosphere, and the line between them is marked as the Mohorovicic Discontinuity. Then the next layer is the Mantle, 400 to 650 km, 870 degrees C; Inner mantle (semi-rigid), 650 to 2700 km, 870 degrees C. Then there is a short region between 2700 and 2890 km marked the Gutenberg Discontinuity, which has temperature 3700 degrees C. The next layer is the Molten Outer Core (Iron/nickel) from 2890 to 5150, 4300 degrees C; and finally there is the inner core (Iron/nickel) from 5150 to 6378, 7200 degrees C.

| Layer | Depth from center (km) | Temperature $\text{°}C$ |
| --- | --- | --- |
| Rocky Crust | 0 to 40 | 0 |
| Upper Mantle | 40 to 150 | 870 |
| Mantle | 400 to 650 | 870 |
| Inner Mantel | 650 to 2700 | 870 |
| Molten Outer Core | 2890 to 5150 | 4300 |
| Inner Core | 5150 to 6378 | 7200 |

SOLUTION:
$y=−1.238\;\times \;{10}^{−7}{x}^{3}+0.001196{x}^{2}-3.666x+7208;$ average temperature approximately ${2800}^{\text{°}}C$
:::

:::exercise {fs-id1167793429885} type= 
PROBLEM:
**[T]** The density of Earth’s layers is displayed in the table below. Using your calculator or a computer program, find the best-fit quadratic equation to the density. Using this equation, find the total mass of Earth.

> TABLE {tab:fs-id1167793429901} cols=3 class=unnumbered
> title: Source: http://hyperphysics.phy-astr.gsu.edu/hbase/geophys/earthstruct.html
> summary: This table consists of three columns and six rows. The first row is a header row, and from left to right, it reads Layer, Depth from center (km), and Density (g/cm3). The first informational row reads Inner Core, 0, 12.95. The second row reads Outer Core, 1228, 11.05. The third row reads Mantle, 2488, 5.00. The fourth row reads Upper Mantle, 6338, 3.90. And the final row reads Crust, 6378, 2.55.

| Layer | Depth from center (km) | Density (g/cm3) |
| --- | --- | --- |
| Inner Core | $0$ | $12.95$ |
| Outer Core | $1228$ | $11.05$ |
| Mantle | $3488$ | $5.00$ |
| Upper Mantle | $6338$ | $3.90$ |
| Crust | $6378$ | $2.55$ |

:::
The following problems concern the Theorem of Pappus (see [Moments and Centers of Mass](module:m53649) for a refresher), a method for calculating volume using centroids. Assuming a region $R,$ when you revolve around the $x\text{-axis}$ the volume is given by ${V}_{x}=2\pi A\bar{|y|},$ and when you revolve around the $\text{y-axis}$ the volume is given by ${V}_{y}=2\pi A|\bar{x}|,$ where $A$ is the area of $R.$ Consider the region bounded by ${x}^{2}+{y}^{2}=1$ and above $y=x+1.$

:::exercise {fs-id1167793628266} type= 
PROBLEM:
Find the volume when you revolve the region around the $x\text{-axis.}$
SOLUTION:
$\frac{\pi}{3}$
:::

:::exercise {fs-id1167794222566} type= 
PROBLEM:
Find the volume when you revolve the region around the $y\text{-axis.}$
:::

## Glossary
- {def} **Jacobian**: the Jacobian $J(u,v)$ in two variables is a $2\;\times \;2$ determinant:

$J(u,v)=|\begin{array}{lll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v}\end{array}|;$  {eq:fs-id1167794222640}

the Jacobian $J(u,v,w)$ in three variables is a $3\;\times \;3$ determinant:

$J(u,v,w)=|\begin{array}{lllll}\frac{\partial x}{\partial u} & & \frac{\partial y}{\partial u} & & \frac{\partial z}{\partial u} \\ \frac{\partial x}{\partial v} & & \frac{\partial y}{\partial v} & & \frac{\partial z}{\partial v} \\ \frac{\partial x}{\partial w} & & \frac{\partial y}{\partial w} & & \frac{\partial z}{\partial w}\end{array}|$  {eq:fs-id1167793384794}

- {def} **one-to-one transformation**: a transformation $T:G\to R$ defined as $T(u,v)=(x,y)$ is said to be one-to-one if no two points map to the same image point
- {def} **planar transformation**: a function $T$ that transforms a region $G$ in one plane into a region $R$ in another plane by a change of variables
- {def} **transformation**: a function that transforms a region $G$ in one plane into a region $R$ in another plane by a change of variables

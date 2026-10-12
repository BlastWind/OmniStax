# Stokes’ Theorem

## Learning Objectives {section:learning-objectives}
- Explain the meaning of Stokes’ theorem.
- Use Stokes’ theorem to evaluate a line integral.
- Use Stokes’ theorem to calculate a surface integral.
- Use Stokes’ theorem to calculate a curl.

In this section, we study Stokes’ theorem, a higher-dimensional generalization of Green’s theorem. This theorem, like the Fundamental Theorem for Line Integrals and Green’s theorem, is a generalization of the Fundamental Theorem of Calculus to higher dimensions. Stokes’ theorem relates a vector surface integral over surface *S* in space to a line integral around the boundary of *S*. Therefore, just as the theorems before it, Stokes’ theorem can be used to reduce an integral over a geometric object *S* to an integral over the boundary of *S*.
In addition to allowing us to translate between line integrals and surface integrals, Stokes’ theorem connects the concepts of curl and circulation. Furthermore, the theorem has applications in fluid mechanics and electromagnetism. We use Stokes’ theorem to derive Faraday’s law, an important result involving electric fields.

## Stokes’ Theorem
{term:Stokes’ theorem} says we can calculate the flux of curl **F** across surface *S* by knowing information only about the values of **F** along the boundary of *S*. Conversely, we can calculate the line integral of vector field **F** along the boundary of surface *S* by translating to a double integral of the curl of **F** over *S*.
Let *S* be an oriented smooth surface with unit normal vector **N**. Furthermore, suppose the boundary of *S* is a simple closed curve *C*. The orientation of *S* induces the positive orientation of *C* if, as you walk in the positive direction around *C* with your head pointing in the direction of **N**, the surface is always on your left. With this definition in place, we can state Stokes’ theorem.

:::note [theorem] Stokes’ Theorem
Let *S* be a piecewise smooth oriented surface with a boundary that is a simple closed curve *C* with positive orientation ([ref:CNX_Calc_Figure_16_07_001]). If **F** is a vector field with component functions that have continuous partial derivatives on an open region containing *S*, then

${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}.$  {eq:fs-id1167793773802}

:::

> FIGURE {fig:CNX_Calc_Figure_16_07_001} src=../../media/CNX_Calc_Figure_16_07_001.jpg
> alt: A diagram of a surface S in three dimensions. The orientation of the curve C around its boundary is positive. Various normals are drawn coming off of the surface.
> caption: Stokes’ theorem relates the flux integral over the surface to a line integral around the boundary of the surface. Note that the orientation of the curve is positive.

Suppose surface *S* is a flat region in the *xy*-plane with upward orientation. Then the unit normal vector is **k** and surface integral ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}}\cdot d\textbf{S}$ is actually the double integral ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}}\cdot \textbf{k}dA.$ In this special case, Stokes’ theorem gives ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot \textbf{k}dA.}$ However, this is the circulation form of Green’s theorem, which shows us that Green’s theorem is a special case of Stokes’ theorem. Green’s theorem can only handle surfaces in a plane, but Stokes’ theorem can handle surfaces in a plane or in space.
The complete proof of Stokes’ theorem is beyond the scope of this text. We look at an intuitive explanation for the truth of the theorem and then see proof of the theorem in the special case that surface *S* is a portion of a graph of a function, and *S*, the boundary of *S,* and **F** are all fairly tame.

### Proof
First, we look at an informal proof of the theorem. This proof is not rigorous, but it is meant to give a general feeling for why the theorem is true. Let *S* be a surface and let *D* be a small piece of the surface so that *D* does not share any points with the boundary of *S*. We choose *D* to be small enough so that it can be approximated by an oriented square *E*. Let *D* inherit its orientation from *S*, and give *E* the same orientation. This square has four sides; denote them ${E}_{l},$ ${E}_{r},$ ${E}_{u},$ and ${E}_{d}$ for the left, right, up, and down sides, respectively. On the square, we can use the flux form of Green’s theorem:

${\displaystyle \int_{{E}_{l}+{E}_{d}+{E}_{r}+{E}_{u}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{E}\text{curl}\;\textbf{F}\cdot \textbf{N}dS}={\displaystyle \iint_{E}\text{curl}\;\textbf{F}\cdot d\textbf{S}}.$  {eq:fs-id1167794329223}

To approximate the flux over the entire surface, we add the values of the flux on the small squares approximating small pieces of the surface ([ref:CNX_Calc_Figure_16_07_002]). By Green’s theorem, the flux across each approximating square is a line integral over its boundary. Let *F* be an approximating square with an orientation inherited from *S* and with a right side ${E}_{l}$ (so *F* is to the left of *E*). Let ${F}_{r}$ denote the right side of $F$; then, ${E}_{l}=\text{−}{F}_{r}.$ In other words, the right side of $F$ is the same curve as the left side of *E*, just oriented in the opposite direction. Therefore,

${\displaystyle \int_{{E}_{l}}\textbf{F}\cdot d\textbf{r}}=\text{−}{\displaystyle \int_{{F}_{r}}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793277540}

As we add up all the fluxes over all the squares approximating surface *S*, line integrals ${\displaystyle \int_{{E}_{l}}\textbf{F}\cdot d\textbf{r}}$ and ${\displaystyle \int_{{F}_{r}}\textbf{F}\cdot d\textbf{r}}$ cancel each other out. The same goes for the line integrals over the other three sides of *E*. These three line integrals cancel out with the line integral of the lower side of the square above *E*, the line integral over the left side of the square to the right of *E*, and the line integral over the upper side of the square below *E* ([ref:CNX_Calc_Figure_16_07_003]). After all this cancelation occurs over all the approximating squares, the only line integrals that survive are the line integrals over sides approximating the boundary of *S*. Therefore, the sum of all the fluxes (which, by Green’s theorem, is the sum of all the line integrals around the boundaries of approximating squares) can be approximated by a line integral over the boundary of *S*. In the limit, as the areas of the approximating squares go to zero, this approximation gets arbitrarily close to the flux.

> FIGURE {fig:CNX_Calc_Figure_16_07_002} src=../../media/CNX_Calc_Figure_16_07_002.jpg
> alt: A diagram of a surface S sectioned into small pieces in a grid – they are small enough to be approximated by a square E. The orientation of each square is the same as S, shown with counterclockwise arrows in each square.. The N and F vectors are drawn coming off of one square.
> caption: Chop the surface into small pieces. The pieces should be small enough that they can be approximated by a square.

> FIGURE {fig:CNX_Calc_Figure_16_07_003} src=../../media/CNX_Calc_Figure_16_07_003.jpg
> alt: Two diagrams labeled A and B. A contains two squares, F and E. Both have arrows along the sides in a counterclockwise manner. The right side of F is labeled F_r. The left, right, upper, and lower sides of E are labeled E_l, E_r, E_u, and E_d, respectively. B contains five squares. F and E are drawn as they are in diagram A. Above, to the right, and below E there are three other squares: G, H, and I, respectively. All have arrows along their sides in a counterclockwise manner. The bottom side of G is labeled G_d, the left side of H is labeled H_l, and the upper side of I is labeled I_u.
> caption: (a) The line integral along ${E}_{l}$ cancels out the line integral along ${F}_{r}$ because ${E}_{l}=\text{−}{F}_{r}.$ (b) The line integral along any of the sides of *E* cancels out with the line integral along a side of an adjacent approximating square.

Let’s now look at a rigorous proof of the theorem in the special case that *S* is the graph of function $z=g(x,y),$ where *x* and *y* vary over a bounded, simply connected region *D* of finite area ([ref:CNX_Calc_Figure_16_07_004]). Furthermore, assume that $g$ has continuous second-order partial derivatives. Let *C* denote the boundary of *S* and let *C*′ denote the boundary of *D*. Then, *D* is the “shadow” of *S* in the plane and *C*′ is the “shadow” of *C*. Suppose that *S* is oriented upward. The counterclockwise orientation of *C* is positive, as is the counterclockwise orientation of ${C}^{'}.$ Let $\textbf{F}(x,y,z)=\langle P,Q,R\rangle$ be a vector field with component functions that have continuous partial derivatives.

> FIGURE {fig:CNX_Calc_Figure_16_07_004} src=../../media/CNX_Calc_Figure_16_07_004.jpg
> alt: A diagram of a surface S in three dimensions, where z is a function of x and y notated as z=g(x,y). The normal N is drawn pointing up and away from the surface. D is the shadow, or projection of S in the (x,y)-plane. The curve around S is labeled C, and C’ is the projection of C in the (x,y)-plane. Arrows are drawn on C, the boundary of S, in a counterclockwise manner.
> caption: *D* is the “shadow,” or projection, of *S* in the plane and ${C}^{'}$ is the projection of *C*.

We take the standard parameterization of $S:x=x,y=y,z=g(x,y).$ The tangent vectors are ${\textbf{t}}_{x}=\langle 1,0,{g}_{x}\rangle$ and ${\textbf{t}}_{y}=\langle 0,1,{g}_{y}\rangle ,$ and therefore, ${\textbf{t}}_{x}\times {\textbf{t}}_{y}=\langle \text{−}{g}_{x},\text{−}{g}_{y},1\rangle .$ By [ref:fs-id1167793757749](module:m54004),

${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}=}{\displaystyle \iint\limits_{D}[\text{−}({R}_{y}-{Q}_{z}){z}_{x}-({P}_{z}-{R}_{x}){z}_{y}+({Q}_{x}-{P}_{y})]}dA,$  {eq:fs-id1167793372959}

where the partial derivatives are all evaluated at $(x,y,g(x,y)),$ making the integrand depend on *x* and *y* only. Suppose $\langle x(t),y(t)\rangle ,a\le t\le b$ is a parameterization of ${C}^{'}.$ Then, a parameterization of *C* is $\langle x(t),y(t),g(x(t),y(t))\rangle ,a\le t\le b.$ Armed with these parameterizations, the Chain rule, and Green’s theorem, and keeping in mind that *P*, *Q*, and *R* are all functions of *x* and *y*, we can evaluate line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}\text{:}$

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{a}^{b}(P{x}^{'}(t)+Q{y}^{'}(t)+R{z}^{'}(t))}dt \\ & ={\displaystyle \int_{a}^{b}[P{x}^{'}(t)+Q{y}^{'}(t)+R(\frac{\partial z}{\partial x}\;\frac{dx}{dt}+\frac{\partial z}{\partial y}\;\frac{dy}{dt})]}dt \\ & ={\displaystyle \int_{a}^{b}[(P+R\frac{\partial z}{\partial x}){x}^{'}(t)+(Q+R\frac{\partial z}{\partial y}){y}^{'}(t)]}dt \\ & ={\displaystyle \int\limits_{{C}^{'}}(P+R\frac{\partial z}{\partial x})dx+(Q+R\frac{\partial z}{\partial y})dy} \\ & ={\displaystyle \iint\limits_{D}[\frac{\partial}{\partial x}(Q+R\frac{\partial z}{\partial y})-\frac{\partial}{\partial y}(P+R\frac{\partial z}{\partial x})]}dA \\ & =\begin{array}{l}{\displaystyle \iint\limits_{D}\begin{array}{l}(\frac{\partial Q}{\partial x}+\frac{\partial Q}{\partial z}\;\frac{\partial z}{\partial x}+\frac{\partial R}{\partial x}\;\frac{\partial z}{\partial y}+\frac{\partial R}{\partial z}\;\frac{\partial z}{\partial x}\;\frac{\partial z}{\partial y}+R\frac{{\partial}^{2}z}{\partial x\partial y}) \\ \text{−}(\frac{\partial P}{\partial y}+\frac{\partial P}{\partial z}\frac{\partial z}{\partial y}+\frac{\partial R}{\partial y}\frac{\partial z}{\partial x}+\frac{\partial R}{\partial z}\frac{\partial z}{\partial y}\frac{\partial z}{\partial x}+R\frac{{\partial}^{2}z}{\partial y\partial x})\end{array}}\end{array}dA.\end{array}$  {eq:fs-id1167794090339}

By Clairaut’s theorem, $\frac{{\partial}^{2}z}{\partial x\partial y}=\frac{{\partial}^{2}z}{\partial y\partial x}.$ Therefore, four of the terms disappear from this double integral, and we are left with

${\displaystyle \iint\limits_{D}[\text{−}({R}_{y}-{Q}_{z}){z}_{x}-({P}_{z}-{R}_{x}){z}_{y}+({Q}_{x}-{P}_{y})]}dA,$  {eq:fs-id1167793871463}

which equals ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}.}$
□
We have shown that Stokes’ theorem is true in the case of a function with a domain that is a simply connected region of finite area. We can quickly confirm this theorem for another important case: when vector field **F** is conservative. If **F** is conservative, the curl of **F** is zero, so ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}=0.}$ Since the boundary of *S* is a closed curve, ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ is also zero.

:::example {ex:fs-id1167793984743} Verifying Stokes’ Theorem for a Specific Case

:::exercise {fs-id1167793432047} type= 
PROBLEM:
Verify that Stokes’ theorem is true for vector field $\textbf{F}(x,y,z)=\langle y,2z,{x}^{2}\rangle$ and surface *S*, where *S* is the paraboloid $z=4-{x}^{2}-{y}^{2}$. Assume the surface is outward oriented and $z\ge 0$.

> FIGURE {fig:CNX_Calc_Figure_16_07_005} src=../../media/CNX_Calc_Figure_16_07_005_new.jpg
> alt: A diagram in three dimensions of a hemisphere in a vector field. The arrows of the vector field follow the shape of the hemisphere, which is located in quadrants 2 and 3 of the (x, y) plane and stretches up and down into the z-plane. The center of the hemisphere is at the origin. The normal N is drawn stretching up and away from the hemisphere.
> caption: Verifying Stokes’ theorem for a hemisphere in a vector field.

SOLUTION:
As a surface integral, you have $g(x,y)=4-{x}^{2}-{y}^{2},{g}_{x}=−2x$ and ${g}_{y}=−2y$

$\begin{array}{rl}\text{curl}\mathbf{F}\; & =|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ y & 2z & {x}^{2}\end{array}|\end{array}=\langle −2,−2x,−1\rangle \text{.}$  {eq:fs-id1167793261948}

By [ref:fs-id1167793757749](module:m54004),

$\begin{array}{rl}{\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \iint_{D}\text{curl}\;\textbf{F}(\textbf{r}(ϕ,\theta ))}\cdot ({\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta})dA \\ & ={\displaystyle \iint_{D}\langle −2,−2x,−1\rangle \cdot \langle 2x,2y,1\rangle dA} \\ & ={\displaystyle \int_{−2}^{2}{\displaystyle \int_{\sqrt{4-{x}^{2}}}^{\sqrt{4-{x}^{2}}}(−4x−4xy−1)}}dydx \\ & {\displaystyle =\int_{−2}^{2}(−8x\sqrt{4-{x}^{2}}−2\sqrt{4-{x}^{2}})dx} \\ & {\displaystyle =−4\pi}\end{array}$  {eq:fs-id1167793400648}

As a line integral, you can parameterize *C* by $\textbf{r}(t)=\langle 2\;\text{cos}\;t,2\;\text{sin}\;t,0\rangle \;0\le t\le 2\pi$. By [ref:fs-id1167793757749](module:m54004),

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \int_{0}^{2π}\langle 2\text{sin}\;t,0,4{\text{cos}}^{2}t\rangle \cdot \langle −2\text{sin}\;t,2\text{cos}\;t,0\rangle dt} \\ & ={\displaystyle \int_{0}^{2π}−4{\text{sin}}^{2}tdt=−4\pi}\end{array}$  {eq:eip-idm1803728496}

Therefore, we have verified Stokes' theorem for this example.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793887856} type= 
PROBLEM:
Verify that Stokes’ theorem is true for vector field $\textbf{F}(x,y,z)=\langle y,x,\text{−}z\rangle$ and surface *S*, where *S* is the upwardly oriented portion of the graph of $f(x,y)={x}^{2}y$ over a triangle in the *xy*-plane with vertices $(0,0),$ $(2,0),$ and $(0,2).$
SOLUTION:
Both integrals give $0$
COMMENTARY: Hint
Calculate the double integral and line integral separately.
:::
:::

## Applying Stokes’ Theorem
Stokes’ theorem translates between the flux integral of surface *S* to a line integral around the boundary of *S*. Therefore, the theorem allows us to compute surface integrals or line integrals that would ordinarily be quite difficult by translating the line integral into a surface integral or vice versa. We now study some examples of each kind of translation.

:::example {ex:fs-id1167794059657} Calculating a Surface Integral

:::exercise {fs-id1167794077113} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where *S* is the surface, oriented outward, in [ref:CNX_Calc_Figure_16_07_006] and $\textbf{F}=\langle z,2xy,x+y\rangle .$

> FIGURE {fig:CNX_Calc_Figure_16_07_006} src=../../media/CNX_Calc_Figure_16_07_006.jpg
> alt: A diagram of a complicated surface S in a three dimensional vector field. The surface is a cylindrical tube that twists about in the three-dimensional space arbitrarily. The upper end of the tube is an open circle leading to inside the tube. It is centered on the z-axis at a height of z=1 and has a radius of 1. The bottom end of the tube is closed with a hemispherical cap on the end. The vector arrows are best described by their components. The x component is positive everywhere and becomes larger as z increases. The y component is positive in the first and third octants and negative in the other two. The z component is zero when y=x and becomes more positive with more positive x and y values and more negative in the other direction.
> caption: A complicated surface in a vector field.

SOLUTION:
Note that to calculate ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}$ without using Stokes’ theorem, we would need to use [ref:fs-id1167793757749](module:m54004). Use of this equation requires a parameterization of *S*. Surface *S* is complicated enough that it would be extremely difficult to find a parameterization. Therefore, the methods we have learned in previous sections are not useful for this problem. Instead, we use Stokes’ theorem, noting that the boundary *C* of the surface is merely a single circle with radius 1.
By Stokes’ theorem,

${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r},}$  {eq:fs-id1167793590403}

where *C* has parameterization $\mathbf{r}(t)=\langle \text{sin}\;t,0,1-\text{cos}\;t\rangle ,0\le t<2\pi .$ By [ref:fs-id1167793635294](module:m54012),

$\begin{array}{ll}\iint_{S}\text{curl}\;\text{F}\cdot d\text{S} & =\int_{C}\text{F}\cdot d\text{r} \\ & =\int_{0}^{2\pi}\langle 1-\text{cos}\;t\;,0,+\text{sin}\;t\rangle \cdot \;\langle -\text{sin}\;t,0,\text{cos}\;t\rangle dt\; \\ & =\int_{0}^{2\pi}(-\text{sin}\;t+2\text{sin}\;t\text{cos}\;t)dt \\ & =\int_{0}^{2\pi}(-\text{sin}\;t+\text{sin 2t)}\text{dt} \\ & ={[\text{+cos}t+\frac{1}{2}\text{cos}2t]}_{0}^{2\pi} \\ & =[\text{+cos}2\pi +\frac{1}{2}\text{cos}4\pi ]-[\text{+cos}0+\frac{1}{2}\text{cos}0] \\ & =0\end{array}$  {eq:fs-id1167794126444}

:::
:::
An amazing consequence of Stokes’ theorem is that if *S*′ is any other smooth surface with boundary *C* and the same orientation as *S*, then ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=0$ because Stokes’ theorem says the surface integral depends on the line integral around the boundary only.
In [ref:fs-id1167794059657], we calculated a surface integral simply by using information about the boundary of the surface. In general, let ${S}_{1}$ and ${S}_{2}$ be smooth surfaces with the same boundary *C* and the same orientation. By Stokes’ theorem,

$$ {\displaystyle \iint_{{S}_{1}}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{{S}_{2}}\text{curl}\;\textbf{F}\cdot d\textbf{S}}. $$  {eq:fs-id1167793856659}

Therefore, if ${\displaystyle \iint_{{S}_{1}}\text{curl}\;\textbf{F}\cdot d\textbf{S}}$ is difficult to calculate but ${\displaystyle \iint_{{S}_{2}}\text{curl}\;\textbf{F}\cdot d\textbf{S}}$ is easy to calculate, Stokes’ theorem allows us to calculate the easier surface integral. In [ref:fs-id1167794059657], we could have calculated ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}$ by calculating ${\displaystyle \iint_{{S}^{'}}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where ${S}^{'}$ is the disk enclosed by boundary curve *C* (a much more simple surface with which to work).
[ref:fs-id1167793856659] shows that flux integrals of curl vector fields are {term:surface independent} in the same way that line integrals of gradient fields are path independent. Recall that if **F** is a two-dimensional conservative vector field defined on a simply connected domain, $f$ is a potential function for **F**, and *C* is a curve in the domain of **F**, then ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ depends only on the endpoints of *C*. Therefore if *C*′ is any other curve with the same starting point and endpoint as *C* (that is, *C*′ has the same orientation as *C*), then ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{C\text{′}}\textbf{F}\cdot d\textbf{r}}.$ In other words, the value of the integral depends on the boundary of the path only; it does not really depend on the path itself.
Analogously, suppose that *S* and *S*′ are surfaces with the same boundary and same orientation, and suppose that **G** is a three-dimensional vector field that can be written as the curl of another vector field **F** (so that **F** is like a “potential field” of **G**). By [ref:fs-id1167793856659],

${\displaystyle \iint_{S}\textbf{G}\cdot d\textbf{S}}={\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{S\text{′}}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \iint_{S\text{′}}\textbf{G}\cdot d\textbf{S}}.$  {eq:fs-id1167793984392}

Therefore, the flux integral of **G** does not depend on the surface, only on the boundary of the surface. Flux integrals of vector fields that can be written as the curl of a vector field are surface independent in the same way that line integrals of vector fields that can be written as the gradient of a scalar function are path independent.

:::note [checkpoint] 

:::exercise {fs-id1167794049318} type= 
PROBLEM:
Use Stokes’ theorem to calculate surface integral ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}=\langle z,x,y\rangle$ and *S* is the surface as shown in the following figure. The boundary curve, *C*, is oriented clockwise when looking along the positive y-axis.

> IMAGE {img:fs-id1167794176133} src=../../media/CNX_Calc_Figure_16_07_007.jpg
> alt: A three-dimensional diagram of a surface. One end is an open circle with radius 1 and centered at the origin. It is on the (x, z) plane. The rest of the surface stretches back symmetrically over the y axis. The surface narrows slightly, opens up into a sphere, narrows again, and then ends in another sphere. It looks like a vase lying on its side with an open circular end, a large, spherical body, and a medium sized spherical base.

SOLUTION:
$\text{−}\pi$
COMMENTARY: Hint
Parameterize the boundary of *S* and translate to a line integral.
:::
:::

:::example {ex:fs-id1167794095762} Calculating a Line Integral

:::exercise {fs-id1167794095764} type= 
PROBLEM:
Calculate the line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}=\langle xy,{x}^{2}+{y}^{2}+{z}^{2},yz\rangle$ and *C* is the boundary of the parallelogram with vertices $(0,0,1),(0,1,0),(2,1,-2),$ and $(2,0,-1).$
SOLUTION:
To calculate the line integral directly, we need to parameterize each side of the parallelogram separately, calculate four separate line integrals, and add the result. This is not overly complicated, but it is time-consuming.
By contrast, let’s calculate the line integral using Stokes’ theorem. Let *S* denote the surface of the parallelogram. Note that *S* is the portion of the graph of $z=1-x-y$ for $(x,y)$ varying over the rectangular region with vertices $(0,0),$ $(0,1),$ $(2,0),$ and $(2,1)$ in the *xy*-plane. Therefore, a parameterization of *S* is $\langle x,y,1-x-y\rangle ,0\le x\le 2,0\le y\le 1.$ The curl of **F** is $\langle −z,0,x\rangle ,$ and Stokes’ theorem and [ref:fs-id1167793757749](module:m54004) give

$\begin{array}{rl}{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}} & ={\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}} \\ & ={\displaystyle \int_{0}^{2}{\displaystyle \int_{0}^{1}\text{curl}\;\textbf{F}(x,y)\cdot ({\textbf{t}}_{x}\times {\textbf{t}}_{y})}}dydx \\ & ={\displaystyle \int_{0}^{2}{\displaystyle \int_{0}^{1}\langle \text{−}(1-x-y)\text{,0,x}\rangle \cdot (\langle 1,0,−1\rangle \times \langle 0,1,−1\rangle )}}dydx \\ & ={\displaystyle \int_{0}^{2}{\displaystyle \int_{0}^{1}\langle x+y-1,0,x\rangle \cdot \langle 1,1,1\rangle}}dydx \\ & \hspace{1.2em}{\displaystyle \int_{0}^{2}{\displaystyle \int_{0}^{1}2x+y-1}}dydx \\ & =3.\end{array}$  {eq:fs-id1167793771053}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793887193} type= 
PROBLEM:
Use Stokes’ theorem to calculate line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}},$ where $\textbf{F}=\langle z,x,y\rangle$ and *C* is oriented clockwise and is the boundary of a triangle with vertices $(0,0,1),(3,0,−2),$ and $(0,1,2).$
SOLUTION:
$\frac{3}{2}$
COMMENTARY: Hint
This triangle lies in plane $z=1-x+y.$
:::
:::

## Interpretation of Curl
In addition to translating between line integrals and flux integrals, Stokes’ theorem can be used to justify the physical interpretation of curl that we have learned. Here we investigate the relationship between curl and circulation, and we use Stokes’ theorem to state Faraday’s law—an important law in electricity and magnetism that relates the curl of an electric field to the rate of change of a magnetic field.
Recall that if *C* is a closed curve and **F** is a vector field defined on *C*, then the circulation of **F** around *C* is line integral ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$ If **F** represents the velocity field of a fluid in space, then the circulation measures the tendency of the fluid to move in the direction of *C*.
Let **F** be a continuous vector field and let ${D}_{r}$ be a small disk of radius *r* with center ${P}_{0}$ ([ref:CNX_Calc_Figure_16_07_009]). If ${D}_{r}$ is small enough, then $(\text{curl}\;\textbf{F})(P)\approx (\text{curl}\;\textbf{F})({P}_{0})$ for all points *P* in ${D}_{r}$ because the curl is continuous. Let ${C}_{r}$ be the boundary circle of ${D}_{r}.$ By Stokes’ theorem,

${\displaystyle \int_{{C}_{r}}\textbf{F}\cdot d\textbf{r}={\displaystyle \iint_{{D}_{r}}\text{curl}\;\textbf{F}\cdot \textbf{N}dS}}\approx {\displaystyle \iint_{{D}_{r}}(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})dS}.$  {eq:fs-id1167793930754}

> FIGURE {fig:CNX_Calc_Figure_16_07_009} src=../../media/CNX_Calc_Figure_16_07_009.jpg
> alt: A Disk D_r is a small disk in a continuous vector field in three dimensions. The radius of the disk is labeled r, and the center is labeled P_0. The arrows appear to have negative x components, slightly positive y components, and positive z components that become larger as z becomes larger.
> caption: Disk ${D}_{r}$ is a small disk in a continuous vector field.

The quantity $(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})$ is constant, and therefore

${\displaystyle \iint_{{D}_{r}}(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})dS}=\pi {r}^{2}[(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})].$  {eq:fs-id1167794140484}

Thus

${\displaystyle \int_{{C}_{r}}\textbf{F}\cdot d\textbf{r}}\approx \pi {r}^{2}[(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})],$  {eq:fs-id1167794042695}

and the approximation gets arbitrarily close as the radius shrinks to zero. Therefore Stokes’ theorem implies that

$(\text{curl}\;\textbf{F})({P}_{0})\cdot \textbf{N}({P}_{0})=\lim_{r\to {0}^{+}}\frac{1}{\pi {r}^{2}}{\displaystyle \int_{{C}_{r}}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793268882}

This equation relates the curl of a vector field to the circulation. Since the area of the disk is $\pi {r}^{2},$ this equation says we can view the curl (in the limit) as the circulation per unit area. Recall that if **F** is the velocity field of a fluid, then circulation ${\displaystyle \int_{{C}_{r}}\textbf{F}\cdot d\textbf{r}}={\displaystyle \int_{{C}_{r}}\textbf{F}\cdot \textbf{T}ds}$ is a measure of the tendency of the fluid to move around ${C}_{r}.$ The reason for this is that $\textbf{F}\cdot \textbf{T}$ is a component of **F** in the direction of **T**, and the closer the direction of **F** is to **T**, the larger the value of $\textbf{F}\cdot \textbf{T}$ (remember that if **a** and **b** are vectors and **b** is fixed, then the dot product $\textbf{a}\cdot \textbf{b}$ is maximal when **a** points in the same direction as **b**). Therefore, if **F** is the velocity field of a fluid, then $\text{curl}\;\textbf{F}\cdot \textbf{N}$ is a measure of how the fluid rotates about axis **N**. The effect of the curl is largest about the axis that points in the direction of **N**, because in this case $\text{curl}\;\textbf{F}\cdot \textbf{N}$ is as large as possible.
To see this effect in a more concrete fashion, imagine placing a tiny paddlewheel at point ${P}_{0}$ ([ref:CNX_Calc_Figure_16_07_010]). The paddlewheel achieves its maximum speed when the axis of the wheel points in the direction of curl**F**. This justifies the interpretation of the curl we have learned: curl is a measure of the rotation in the vector field about the axis that points in the direction of the normal vector **N**, and Stokes’ theorem justifies this interpretation.

> FIGURE {fig:CNX_Calc_Figure_16_07_010} src=../../media/CNX_Calc_Figure_16_07_010.jpg
> alt: A diagram of a tiny paddlewheel in water. A segment is stretching up out of its center, and that has an arrow labeled curl v. Red arrows are drawn to show the rotation of the wheel in a counterclockwise direction.
> caption: To visualize curl at a point, imagine placing a tiny paddlewheel at that point in the vector field.

Now that we have learned about Stokes’ theorem, we can discuss applications in the area of electromagnetism. In particular, we examine how we can use Stokes’ theorem to translate between two equivalent forms of {index:Faraday’s law}. Before stating the two forms of Faraday’s law, we need some background terminology.
Let *C* be a closed curve that models a thin wire. In the context of electric fields, the wire may be moving over time, so we write $C(t)$ to represent the wire. At a given time *t*, curve $C(t)$ may be different from original curve *C* because of the movement of the wire, but we assume that $C(t)$ is a closed curve for all times *t*. Let $D(t)$ be a surface with $C(t)$ as its boundary, and orient $C(t)$ so that $D(t)$ has positive orientation. Suppose that $C(t)$ is in a magnetic field $\textbf{B}(t)$ that can also change over time. In other words, **B** has the form

$\textbf{B}(x,y,z)=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle ,$  {eq:fs-id1167793937588}

where *P, Q,* and *R* can all vary continuously over time. We can produce current along the wire by changing field $\textbf{B}(t)$ (this is a consequence of Ampere’s law). Flux $ϕ(t)={\displaystyle \iint_{D(t)}\textbf{B}(t)\cdot d\textbf{S}}$ creates electric field $\textbf{E}(t)$ that does work. The integral form of Faraday’s law states that

$\text{Work}={\displaystyle \int_{C(t)}\textbf{E}(t)}\cdot d\textbf{r}=-\frac{\partial ϕ}{\partial t}.$  {eq:fs-id1167793420503}

In other words, the work done by **E** is the line integral around the boundary, which is also equal to the rate of change of the flux with respect to time. The differential form of Faraday’s law states that

$\text{curl}\;\textbf{E}=-\frac{\partial \textbf{B}}{\partial t}.$  {eq:fs-id1167793287021}

Using Stokes’ theorem, we can show that the differential form of Faraday’s law is a consequence of the integral form. By Stokes’ theorem, we can convert the line integral in the integral form into surface integral

$-\frac{\partial ϕ}{\partial t}={\displaystyle \int_{C(t)}\textbf{E}(t)}\cdot d\textbf{r}={\displaystyle \iint_{D(t)}\text{curl}\;\textbf{E}(t)}\cdot d\textbf{S}.$  {eq:fs-id1167793292305}

Since $ϕ(t)={\displaystyle \iint_{D(t)}\textbf{B}(t)\cdot d\textbf{S}},$ then as long as the integration of the surface does not vary with time we also have

$-\frac{\partial ϕ}{\partial t}={\displaystyle \iint_{D(t)}-\frac{\partial \textbf{B}}{\partial t}\cdot d\textbf{S}}.$  {eq:fs-id1167794042545}

Therefore,

${\displaystyle \iint_{D(t)}-\frac{\partial \textbf{B}}{\partial t}}\cdot d\textbf{S}={\displaystyle \iint_{D(t)}\text{curl}\;\textbf{E}\cdot d\textbf{S}}.$  {eq:fs-id1167794101836}

To derive the differential form of Faraday’s law, we would like to conclude that $\text{curl}\;\textbf{E}=-\frac{\partial \textbf{B}}{\partial t}.$ In general, the equation

${\displaystyle \iint_{D(t)}-\frac{\partial \textbf{B}}{\partial t}}\cdot d\textbf{S}={\displaystyle \iint_{D(t)}\text{curl}\;\textbf{E}\cdot d\textbf{S}}$  {eq:fs-id1167793275097}

is not enough to conclude that $\text{curl}\;\textbf{E}=-\frac{\partial \textbf{B}}{\partial t}.$ The integral symbols do not simply “cancel out,” leaving equality of the integrands. To see why the integral symbol does not just cancel out in general, consider the two single-variable integrals ${\displaystyle \int_{0}^{1}xdx}$ and ${\displaystyle \int_{0}^{1}f(x)dx},$ where

$f(x)=\{{}_{0,\;1\text{/}2\le x\le 1.}^{1,\;0\le x\le 1\text{/}2}$  {eq:fs-id1167793245812}

Both of these integrals equal $\frac{1}{2},$ so ${\displaystyle \int_{0}^{1}xdx}={\displaystyle \int_{0}^{1}f(x)dx}.$ However, $x≠f(x).$ Analogously, with our equation ${\displaystyle \iint_{D(t)}-\frac{\partial \textbf{B}}{\partial t}}\cdot d\textbf{S}={\displaystyle \iint_{D(t)}\text{curl}\;\textbf{E}\cdot d\textbf{S}},$ we cannot simply conclude that $\text{curl}\;\textbf{E}=-\frac{\partial \textbf{B}}{\partial t}$ just because their integrals are equal. However, in our context, equation ${\displaystyle \iint_{D(t)}-\frac{\partial \textbf{B}}{\partial t}}\cdot d\textbf{S}={\displaystyle \iint_{D(t)}\text{curl}\;\textbf{E}\cdot d\textbf{S}}$ is true for *any* region, however small (this is in contrast to the single-variable integrals just discussed). If **F** and **G** are three-dimensional vector fields such that ${\displaystyle \iint_{s}\textbf{F}\cdot d\textbf{S}=}{\displaystyle \iint_{s}\textbf{G}\cdot d\textbf{S}}$ for any surface *S*, then it is possible to show that $\textbf{F}=\textbf{G}$ by shrinking the area of *S* to zero by taking a limit (the smaller the area of *S*, the closer the value of ${\displaystyle \iint_{s}\textbf{F}\cdot d\textbf{S}}$ to the value of **F** at a point inside *S*). Therefore, we can let area $D(t)$ shrink to zero by taking a limit and obtain the differential form of Faraday’s law:

$\text{curl}\;\textbf{E}=-\frac{\partial \textbf{B}}{\partial t}.$  {eq:fs-id1167793957947}

In the context of electric fields, the curl of the electric field can be interpreted as the negative of the rate of change of the corresponding magnetic field with respect to time.

:::example {ex:fs-id1167794163639} Using Faraday’s Law

:::exercise {fs-id1167794163641} type= 
PROBLEM:
Calculate the curl of electric field **E** if the corresponding magnetic field is constant field $\textbf{B}(t)=\langle 1,−4,2\rangle .$
SOLUTION:
Since the magnetic field does not change with respect to time, $-\frac{\partial \textbf{B}}{\partial t}=\mathbf{0}.$ By Faraday’s law, the curl of the electric field is therefore also zero.
COMMENTARY: Analysis
A consequence of Faraday’s law is that the curl of the electric field corresponding to a constant magnetic field is always zero.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793511934} type= 
PROBLEM:
Calculate the curl of electric field **E** if the corresponding magnetic field is $\textbf{B}(t)=\langle tx,ty,−2tz\rangle ,0\le t<\infty .$
SOLUTION:
$\text{curl}\;\textbf{E}=\langle x,y,−2z\rangle$
COMMENTARY: Hint
Use the differential form of Faraday’s law.
:::
Notice that the curl of the electric field does not change over time, although the magnetic field does change over time.
:::

## Key Concepts {section:key-concepts}
- Stokes’ theorem relates a flux integral over a surface to a line integral around the boundary of the surface. Stokes’ theorem is a higher dimensional version of Green’s theorem, and therefore is another version of the Fundamental Theorem of Calculus in higher dimensions.
- Stokes’ theorem can be used to transform a difficult surface integral into an easier line integral, or a difficult line integral into an easier surface integral.
- Through Stokes’ theorem, line integrals can be evaluated using the simplest surface with boundary *C*.
- Faraday’s law relates the curl of an electric field to the rate of change of the corresponding magnetic field. Stokes’ theorem can be used to derive Faraday’s law.

## Key Equations {section:key-equations}

> TABLE {tab:eip-562} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Stokes’ theorem** | ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}={\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}$ |

##  {section:section-exercises}
For the following exercises, without using Stokes’ theorem, calculate directly both the flux of $\text{curl}\;\textbf{F}\cdot \textbf{N}$ over the given surface and the circulation integral around its boundary, assuming all boundaries have positive orientation.

:::exercise {fs-id1167793607857} type= 
PROBLEM:
$\textbf{F}(x,y,z)={y}^{2}\textbf{i}+{z}^{2}\textbf{j}+{x}^{2}\textbf{k}\text{;}$ *S* is the first-octant portion of plane $x+y+z=1.$
:::

:::exercise {fs-id1167793566815} type= 
PROBLEM:
$\textbf{F}(x,y,z)=z\textbf{i}+x\textbf{j}+y\textbf{k}\text{;}$ *S* is hemisphere $z={({a}^{2}-{x}^{2}-{y}^{2})}^{1\text{/}2}.$
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=\pi {a}^{2}$
:::

:::exercise {fs-id1167793279732} type= 
PROBLEM:
$\textbf{F}(x,y,z)={y}^{2}\textbf{i}+2x\textbf{j}+5\textbf{k}\text{;}$ *S* is hemisphere $z={(4-{x}^{2}-{y}^{2})}^{1\text{/}2}.$
:::

:::exercise {fs-id1167793369094} type= 
PROBLEM:
$\textbf{F}(x,y,z)=z\textbf{i}+2x\textbf{j}+3y\textbf{k}\text{;}$ *S* is upper hemisphere $z=\sqrt{9-{x}^{2}-{y}^{2}}.$
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=18\pi$
:::

:::exercise {fs-id1167794170485} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(x+2z)\textbf{i}+(y-x)\textbf{j}+(z-y)\textbf{k}\text{;}$ *S* is a triangular region with vertices (3, 0, 0), (0, 3/2, 0), and (0, 0, 3).
:::

:::exercise {fs-id1167793848457} type= 
PROBLEM:
$\textbf{F}(x,y,z)=2y\textbf{i}-6z\textbf{j}+3x\textbf{k}\text{;}$ *S* is a portion of paraboloid $z=4-{x}^{2}-{y}^{2}$ and is above the *xy*-plane.
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=−8\pi$
:::
For the following exercises, use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}$ for the vector fields and surface.

:::exercise {fs-id1167793641956} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xy\textbf{i}-z\textbf{j}$ and *S* is the surface of the cube $0\le x\le 1,0\le y\le 1,0\le z\le 1,$ except for the face where $z=0,$ and using the outward unit normal vector.
:::

:::exercise {fs-id1167793267449} type= 
PROBLEM:
$\textbf{F}(x,y,z)=xy\textbf{i}+{x}^{2}\textbf{j}+{z}^{2}\textbf{k}\text{;}$ and *S* is the part of paraboloid $z={x}^{2}+{y}^{2}$ below plane $z=y,$ and using the outward normal vector.
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=0$
:::

:::exercise {fs-id1167793938812} type= 
PROBLEM:
$\textbf{F}(x,y,z)=4y\textbf{i}+z\textbf{j}+2y\textbf{k}$ and *S* is the part of sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ above plane $z=0,$ and using the outward normal vector
:::

:::exercise {fs-id1167794058162} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \int\limits_{C}[2x{y}^{2}zdx+2{x}^{2}yzdy+({x}^{2}{y}^{2}-2z)dz]},$ where *C* is the curve given by $x=\text{cos}\;t,y=\text{sin}\;t,z=\text{sin}\;t,0\le t\le 2\pi ,$ traversed in the direction of increasing *t*.

> IMAGE {img:fs-id1167793959548} src=../../media/CNX_Calc_Figure_16_07_201.jpg
> alt: A vector field in three dimensional space. The arrows are larger the further they are from the x, y plane. The arrows curve up from below the x, y plane and slightly above it. The rest tend to curve down and horizontally. An oval-shaped curve is drawn through the middle of the space.

SOLUTION:
$\int_{C}\text{F}\cdot dr=0$
:::

:::exercise {fs-id1167793366115} type= 
PROBLEM:
**[T]** Use a computer algebraic system (CAS) and Stokes’ theorem to approximate line integral ${\displaystyle \int\limits_{C}(ydx+zdy+xdz)},$ where *C* is the intersection of plane $x+y=2$ and surface ${x}^{2}+{y}^{2}+{z}^{2}=2(x+y),$ traversed counterclockwise viewed from the origin.
:::

:::exercise {fs-id1167793830701} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to approximate line integral ${\displaystyle \int\limits_{C}(3ydx+2zdy-5xdz)},$ where *C* is the intersection of the *xy*-plane and hemisphere $z=\sqrt{1-{x}^{2}-{y}^{2}},$ traversed counterclockwise viewed from the top—that is, from the positive *z*-axis toward the *xy*-plane.
SOLUTION:
${\displaystyle \int_{s}\text{F}\cdot dr=-3\pi \approx -9}.4248$
:::

:::exercise {fs-id1167793383398} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to approximate line integral ${\displaystyle \int\limits_{C}[(1+y)zdx+(1+z)xdy+(1+x)ydz]},$ where *C* is a triangle with vertices $(1,0,0),$ $(0,1,0),$ and $(0,0,1)$ oriented counterclockwise.
:::

:::exercise {fs-id1167793396465} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)={e}^{xy}\text{cos}\;z\textbf{i}+{x}^{2}z\textbf{j}+xy\textbf{k},$ and *S* is half of sphere $x=\sqrt{1-{y}^{2}-{z}^{2}},$ oriented out toward the positive *x*-axis.
SOLUTION:
${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}=0}$
:::

:::exercise {fs-id1167794099178} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS},$ where $\textbf{F}(x,y,z)={x}^{2}y\textbf{i}+x{y}^{2}\textbf{j}+{z}^{3}\textbf{k}$ and *S* is the curve of the part of plane $3x+2y+z=6$ above cylinder ${x}^{2}+{y}^{2}=4,$ oriented clockwise when viewed from above.
:::

:::exercise {fs-id1167794140127} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to evaluate ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S},}$ where $\textbf{F}(x,y,z)=(\text{sin}(y+z)-y{x}^{2}-\frac{{y}^{3}}{3})\textbf{i}+x\;\text{cos}(y+z)\textbf{j}+\text{cos}(2y)\textbf{k}$ and *S* consists of the top and the four sides but not the bottom of the cube with vertices $(±1,±1,±1),$ oriented outward.
SOLUTION:
${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}=2.6667$
:::

:::exercise {fs-id1167793929046} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to evaluate ${\displaystyle \iint\limits_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S},}$ where $\textbf{F}(x,y,z)={z}^{2}\textbf{i}-3xy\textbf{j}+{x}^{3}{y}^{3}\textbf{k}$ and *S* is the top part of $z=5-{x}^{2}-{y}^{2}$ above plane $z=1,$ and *S* is oriented upward.
:::

:::exercise {fs-id1167793589774} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS},$ where $\textbf{F}(x,y,z)={z}^{2}\textbf{i}+{y}^{2}\textbf{j}+x\textbf{k}$ and *S* is a triangle with vertices (1, 0, 0), (0, 1, 0) and (0, 0, 1) with upward orientation.
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=-\frac{1}{6}$
:::

:::exercise {fs-id1167793956509} type= 
PROBLEM:
Use Stokes’ theorem to evaluate line integral ${\displaystyle \int\limits_{C}(zdx+xdy+ydz)},$ where *C* is a triangle with vertices (3, 0, 0), (0, 0, 2), and (0, 6, 0) traversed in the given order.
:::

:::exercise {fs-id1167794024998} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \int\limits_{C}(\frac{1}{2}{y}^{2}dx+zdy+xdz)},$ where *C* is the curve of intersection of plane $x+z=1$ and ellipsoid ${x}^{2}+2{y}^{2}+{z}^{2}=1,$ oriented clockwise from the origin.

> IMAGE {img:fs-id1167794209616} src=../../media/CNX_Calc_Figure_16_07_202.jpg
> alt: A diagram of an intersecting plane and ellipsoid in three dimensional space. There is an orange curve drawn to show the intersection.

SOLUTION:
${\displaystyle \int\limits_{C}(\frac{1}{2}{y}^{2}dx+zdy+xdz)}=-\frac{\pi}{4}$
:::

:::exercise {fs-id1167793948646} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS},$ where $\textbf{F}(x,y,z)=x\textbf{i}+{y}^{2}\textbf{j}+z{e}^{xy}\textbf{k}$ and *S* is the part of surface $z=1-{x}^{2}-2{y}^{2}$ with $z\ge 0\text{,}\;$ oriented upward.
:::

:::exercise {fs-id1167793508314} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS},$ for vector field $\textbf{F}(x,y,z)=z\textbf{i}+3x\textbf{j}+2z\textbf{k}$ where *S* is surface $z=1-{x}^{2}-{y}^{2},z\ge 0,$ *C* is boundary circle ${x}^{2}+{y}^{2}=1,$ and *S* is oriented in the positive *z*-direction.
SOLUTION:
${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS}=3\pi$
:::

:::exercise {fs-id1167794284674} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}(\text{curl}\;\textbf{F}\cdot \textbf{N})dS},$ for vector field $\textbf{F}(x,y,z)=-\frac{3}{2}{y}^{2}\textbf{i}-2xy\textbf{j}+yz\textbf{k}\text{,}$ where *S* is that part of the surface of plane $x+y+z=1$ contained within triangle *C* with vertices (1, 0, 0), (0, 1, 0), and (0, 0, 1), traversed counterclockwise as viewed from above.
:::

:::exercise {fs-id1167793525035} type= 
PROBLEM:
A certain closed path *C* in plane $2x+2y+z=1$ is known to project onto unit circle ${x}^{2}+{y}^{2}=1$ in the *xy*-plane. Let *c* be a constant and let $\textbf{R}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}.$ Use Stokes’ theorem to evaluate ${\displaystyle \int_{C}^{}(c\textbf{k}\;\times \;\textbf{R})\cdot d\textbf{r}}.$
SOLUTION:
${\displaystyle \int_{C}^{}(c\textbf{k}\;\times \;\textbf{R})\cdot d\text{r}}=2\pi c$
:::

:::exercise {fs-id1167793555486} type= 
PROBLEM:
Use Stokes’ theorem and let *C* be the boundary of surface $z={x}^{2}+{y}^{2}$ with $0\le x\le 2$ and $0\le y\le 1,$ oriented with upward facing normal. Define

$\textbf{F}(x,y,z)=[\text{sin}({x}^{3})+xz]\textbf{i}+(x-yz)\textbf{j}+\text{cos}({z}^{4})\textbf{k}\;\text{and evaluate}\;{\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793886374}

:::

:::exercise {fs-id1167793624469} type= 
PROBLEM:
Let *S* be hemisphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ with $z\ge 0,$ oriented upward. Let $\textbf{F}(x,y,z)={x}^{2}{e}^{yz}\textbf{i}+{y}^{2}{e}^{xz}\textbf{j}+{z}^{2}{e}^{xy}\textbf{k}$ be a vector field. Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}.$
SOLUTION:
${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}=0$
:::

:::exercise {fs-id1167793547212} type= 
PROBLEM:
Let $\textbf{F}(x,y,z)=xy\textbf{i}+({e}^{{z}^{2}}+y)\textbf{j}+(x+y)\textbf{k}$ and let *S* be the graph of function $y=\frac{{x}^{2}}{9}+\frac{{z}^{2}}{9}-1$ with $y\le 0$ oriented so that the normal vector of *S* has a positive *j* component. Use Stokes’ theorem to compute integral ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}.$
:::

:::exercise {fs-id1167793693311} type= 
PROBLEM:
Use Stokes’ theorem to evaluate $\int_{C}F\cdot dr$ where $\textbf{F}(x,y,z)=y\textbf{i}+z\textbf{j}+x\textbf{k}$ and *C* is a triangle with vertices (0, 0, 0), (2, 0, 0) and $(0,−2,2)$ oriented counterclockwise when viewed from above.
SOLUTION:
$\int_{C}F\cdot dr=−4$
:::

:::exercise {fs-id1167793290983} type= 
PROBLEM:
Use the surface integral in Stokes’ theorem to calculate the circulation of field **F**, $\textbf{F}(x,y,z)={x}^{2}{y}^{3}\textbf{i}+\textbf{j}+z\textbf{k}$ around *C*, which is the intersection of cylinder ${x}^{2}+{y}^{2}=4$ and hemisphere ${x}^{2}+{y}^{2}+{z}^{2}=16,z\ge 0,$ oriented counterclockwise when viewed from above.

> IMAGE {img:fs-id1167793926295} src=../../media/CNX_Calc_Figure_16_07_203.jpg
> alt: A diagram in three dimensions of a vector field and the intersection of a sylinder and hemisphere. The arrows are horizontal and have negative x components for negative y components and have positive x components for positive y components. The curve of intersection between the hemisphere and cylinder is drawn in blue.

:::

:::exercise {fs-id1167793464358} type= 
PROBLEM:
Use Stokes’ theorem to compute ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=\textbf{i}+x{y}^{2}\textbf{j}+x{y}^{2}\textbf{k}$ and *S* is a part of plane $y+z=2$ inside cylinder ${x}^{2}+{y}^{2}=1$ and oriented upward.

> IMAGE {img:fs-id1167793315532} src=../../media/CNX_Calc_Figure_16_07_204.jpg
> alt: A diagram of a vector field in three dimensional space showing the intersection of a plane and a cylinder. The curve where the plane and cylinder intersect is drawn in blue.

SOLUTION:
${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}=0$
:::

:::exercise {fs-id1167793418638} type= 
PROBLEM:
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=\text{−}{y}^{2}\textbf{i}+x\textbf{j}+{z}^{2}\textbf{k}$ and *S* is the part of plane $x+y+z=1$ in the first octant and oriented upward $x\ge 0\text{,}\;y\ge 0\text{,}\;z\ge 0.$
:::

:::exercise {fs-id1167793948418} type= 
PROBLEM:
Let $\textbf{F}(x,y,z)=xy\textbf{i}+2z\textbf{j}-2y\textbf{k}$ and let *C* be the intersection of plane $x+z=5$ and cylinder ${x}^{2}+{y}^{2}=9,$ which is oriented counterclockwise when viewed from the top. Compute the line integral of **F** over *C* using Stokes’ theorem.
SOLUTION:
${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}=−36\pi$
:::

:::exercise {fs-id1167793977410} type= 
PROBLEM:
**[T]** Use a CAS and let $\textbf{F}(x,y,z)=x{y}^{2}\textbf{i}+(yz-x)\textbf{j}+{e}^{yxz}\textbf{k}.$ Use Stokes’ theorem to compute the surface integral of curl **F** over surface *S* with inward orientation consisting of cube $[0,1]\;\times \;[0,1]\;\times \;[0,1]$ with the right side missing.
:::

:::exercise {fs-id1167793394721} type= 
PROBLEM:
Let *S* be ellipsoid $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}+{z}^{2}=1$ oriented outward and let **F** be a vector field with component functions that have continuous partial derivatives. Compute $\iint_{s}\text{curl}F\cdot dS$
SOLUTION:
$\iint_{S}\text{curl}\;\text{F}\cdot d\text{S}=0$
:::

:::exercise {fs-id1167793829399} type= 
PROBLEM:
Let *S* be the part of paraboloid $z=9-{x}^{2}-{y}^{2}$ with $z\ge 0$ oriented upward. Verify Stokes’ theorem for vector field $\textbf{F}(x,y,z)=3z\textbf{i}+4x\textbf{j}+2y\textbf{k}.$
:::

:::exercise {fs-id1167793933282} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to evaluate $\int_{C}F\cdot dr$ if $\textbf{F}(x,y,z)=(3z-\text{sin}\;x)\textbf{i}+({x}^{2}+{e}^{y})\textbf{j}+({y}^{3}-\text{cos}\;z)\textbf{k}\text{,}$ where *C* is the curve given by $x=\text{cos}\;t,y=\text{sin}\;t,z=1;0\le t\le 2\pi .$
SOLUTION:
$\int_{C}F\cdot dr=0$
:::

:::exercise {fs-id1167793933071} type= 
PROBLEM:
**[T]** Use a CAS and Stokes’ theorem to evaluate $\iint_{S}\text{curl}\text{F}\cdot d\text{S}\text{,}$ where $\textbf{F}(x,y,z)=2y\textbf{i}+{e}^{z}\textbf{j}-\text{arctan}\;x\textbf{k}$ with *S* as a portion of paraboloid $z=4-{x}^{2}-{y}^{2}$ cut off by the *xy*-plane oriented upward.
:::

:::exercise {fs-id1167794051257} type= 
PROBLEM:
**[T]** Use a CAS to evaluate ${\displaystyle \iint_{S}\text{curl}\textbf{F}\cdot d\textbf{S}\text{,}}$ where $\textbf{F}(x,y,z)=2z\textbf{i}+3x\textbf{j}+5y\textbf{k}$ and ***S*** is the surface parametrically by $\textbf{r}(r,\theta )=r\;\text{cos}\;\theta \textbf{i}+r\;\text{sin}\;\theta \textbf{j}+(4-{r}^{2})\textbf{k}$ $(0\le \theta \le 2\pi \text{,}\;0\le r\le 3).$
SOLUTION:
${\displaystyle \iint_{S}\text{curl}(\textbf{F})\cdot d\textbf{S}=84.8230}$
:::

:::exercise {fs-id1167793482810} type= 
PROBLEM:
Let *S* be paraboloid $z=a(1-{x}^{2}-{y}^{2}),$ for $z\ge 0,$ where $a>0$ is a real number. Let $\textbf{F}=\langle x-y,y+z,z-x\rangle .$ For what value(s) of *a* (if any) does ${\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS$ have its maximum value?
:::
For the following application exercises, the goal is to evaluate $A={\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS$ where $\textbf{F}=\langle xz,\text{−}xz,xy\rangle$ and *S* is the upper half of ellipsoid ${x}^{2}+{y}^{2}+8{z}^{2}=1,\;\text{where}\;z\ge 0.$

:::exercise {fs-id1167793633031} type= 
PROBLEM:
Evaluate a surface integral over a more convenient surface to find the value of *A*.
SOLUTION:
$A={\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS=0$
:::

:::exercise {fs-id1167794222796} type= 
PROBLEM:
Evaluate *A* using a line integral.
:::

:::exercise {fs-id1167793925124} type= 
PROBLEM:
Take paraboloid $z={x}^{2}+{y}^{2},$ for $0\le z\le 4,$ and slice it with plane $y=0.$ Let *S* be the surface that remains for $y\ge 0,$ including the planar surface in the *xz*-plane. Let *C* be the semicircle and line segment that bounded the cap of *S* in plane $z=4$ with counterclockwise orientation. Let $\textbf{F}=\langle 2z+y,2x+z,2y+x\rangle .$ Evaluate ${\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS$

> IMAGE {img:fs-id1167793420098} src=../../media/CNX_Calc_Figure_16_07_206.jpg
> alt: A diagram of a vector field in three dimensional space where a paraboloid with vertex at the origin, plane at y=0, and plane at z=4 intersect. The remaining surface is the half of a paraboloid under z=4 and above y=0.

SOLUTION:
${\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS=2\pi$
:::
For the following exercises, let *S* be the disk enclosed by curve
$C:\textbf{r}(t)=\langle \text{cos}\;φ\;\text{cos}\;t,\text{sin}\;t,\text{sin}\;φ\;\text{cos}\;t\rangle ,$ for $0\le t\le 2\pi ,$ where $0\le φ\le \frac{\pi}{2}$ is a fixed angle.

:::exercise {fs-id1167793626542} type= 
PROBLEM:
What is the length of *C* in terms of $φ?$
:::

:::exercise {fs-id1167793960039} type= 
PROBLEM:
What is the circulation of *C* of vector field $\textbf{F}=\langle \text{−}y,\text{−}z,x\rangle$ as a function of $φ?$
SOLUTION:
$C=\pi (\text{cos}\;φ-\text{sin}\;φ)$
:::

:::exercise {fs-id1167793423274} type= 
PROBLEM:
For what value of $φ$ is the circulation a maximum?
:::

:::exercise {fs-id1167793510179} type= 
PROBLEM:
Circle *C* in plane $x+y+z=8$ has radius 4 and center (2, 3, 3). Evaluate ${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}$ for $F=\langle 0,\text{−}z,2y\rangle ,$ where *C* has a counterclockwise orientation when viewed from above.
SOLUTION:
${\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}=48\pi$
:::

:::exercise {fs-id1167794101753} type= 
PROBLEM:
Velocity field $\textbf{v}=\langle 0,1-{x}^{2},0\rangle ,$ for $|x|\le 1\;\text{and}\;|z|\le 1,$ represents a horizontal flow in the *y*-direction. Compute the curl of **v** in a clockwise rotation.
:::

:::exercise {fs-id1167793249185} type= 
PROBLEM:
Evaluate integral ${\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS$ where $\textbf{F}=\text{−}xz\textbf{i}+yz\textbf{j}+xy{e}^{z}\textbf{k}$ and *S* is the cap of paraboloid $z=5-{x}^{2}-{y}^{2}$ above plane $z=3,$ and **n** points in the positive *z*-direction on *S*.
SOLUTION:
${\displaystyle \iint_{S}}\text{curl}\text{F}\cdot dS=0$
:::
For the following exercises, use Stokes’ theorem to find the circulation of the following vector fields around any smooth, simple closed curve C.

:::exercise {fs-id1167793604074} type= 
PROBLEM:
$\textbf{F}=\nabla (x\;\text{sin}\;y{e}^{z})$
:::

:::exercise {fs-id1167793945527} type= 
PROBLEM:
$\textbf{F}=\langle {y}^{2}{z}^{3},2xy{z}^{3},3x{y}^{2}{z}^{2}\rangle$
SOLUTION:
0
:::

## Glossary
- {def} **Stokes’ theorem**: relates the flux integral over a surface *S* to a line integral around the boundary *C* of the surface *S*
- {def} **surface independent**: flux integrals of curl vector fields are surface independent if their evaluation does not depend on the surface but only on the boundary of the surface

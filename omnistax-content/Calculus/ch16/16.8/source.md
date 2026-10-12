# The Divergence Theorem

## Learning Objectives {section:learning-objectives}
- Explain the meaning of the divergence theorem.
- Use the divergence theorem to calculate the flux of a vector field.
- Apply the divergence theorem to an electrostatic field.

We have examined several versions of the Fundamental Theorem of Calculus in higher dimensions that relate the integral around an oriented boundary of a domain to a “derivative” of that entity on the oriented domain. In this section, we state the divergence theorem, which is the final theorem of this type that we will study. The divergence theorem has many uses in physics; in particular, the divergence theorem is used in the field of partial differential equations to derive equations modeling heat flow and conservation of mass. We use the theorem to calculate flux integrals and apply it to electrostatic fields.

## Overview of Theorems
Before examining the divergence theorem, it is helpful to begin with an overview of the versions of the {index:Fundamental Theorem of Calculus} we have discussed:
1. **The Fundamental Theorem of Calculus**:

${\displaystyle \int_{a}^{b}{f}^{'}(x)dx=f(b)-f(a)}.$  {eq:fs-id1167794118999}

This theorem relates the integral of derivative ${f}^{'}$ over line segment $[a,b]$ along the *x*-axis to a difference of $f$ evaluated on the boundary.
2. **The Fundamental Theorem for Line Integrals**:

${\displaystyle \int_{C}\nabla f\cdot d\textbf{r}=f({P}_{1})-f({P}_{0})},$  {eq:fs-id1167793604124}

where ${P}_{0}$ is the initial point of *C* and ${P}_{1}$ is the terminal point of *C*. The {index:Fundamental Theorem for Line Integrals} allows path *C* to be a path in a plane or in space, not just a line segment on the *x*-axis. If we think of the gradient as a derivative, then this theorem relates an integral of derivative $\nabla f$ over path *C* to a difference of $f$ evaluated on the boundary of *C*.
3. **Green’s theorem, circulation form**:

${\displaystyle \iint_{D}({Q}_{x}-{P}_{y})dA}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793878210}

Since ${Q}_{x}-{P}_{y}=\text{curl}\;\textbf{F}\cdot \textbf{k}$ and curl is a derivative of sorts, {index:Green’s theorem} relates the integral of derivative curl**F** over planar region *D* to an integral of **F** over the boundary of *D*.
4. **Green’s theorem, flux form**:

${\displaystyle \iint_{D}({P}_{x}+{Q}_{y})dA}={\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}.$  {eq:fs-id1167793401271}

Since ${P}_{x}+{Q}_{y}=\text{div}\;\textbf{F}$ and divergence is a derivative of sorts, the flux form of Green’s theorem relates the integral of derivative div**F** over planar region *D* to an integral of **F** over the boundary of *D*.
5. **Stokes’ theorem**:

${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot d\textbf{S}}={\displaystyle \int_{C}\textbf{F}\cdot d\textbf{r}}.$  {eq:fs-id1167793959488}

If we think of the curl as a derivative of sorts, then {index:Stokes’ theorem} relates the integral of derivative curl**F** over surface *S* (not necessarily planar) to an integral of **F** over the boundary of *S*.

## Stating the Divergence Theorem
The divergence theorem follows the general pattern of these other theorems. If we think of divergence as a derivative of sorts, then the {term:divergence theorem} relates a triple integral of derivative div**F** over a solid to a flux integral of **F** over the boundary of the solid. More specifically, the divergence theorem relates a flux integral of vector field **F** over a closed surface *S* to a triple integral of the divergence of **F** over the solid enclosed by *S*.

:::note [theorem] The Divergence Theorem
Let *S* be a piecewise, smooth closed surface that encloses solid *E* in space. Assume that *S* is oriented outward, and let **F** be a vector field with continuous partial derivatives on an open region containing *E* ([ref:CNX_Calc_Figure_16_08_001]). Then

$$ {\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV=}{\displaystyle \iint\limits_{S}\textbf{F}\cdot d\textbf{S}}. $$  {eq:fs-id1167794295927}

:::

> FIGURE {fig:CNX_Calc_Figure_16_08_001} src=../../media/CNX_Calc_Figure_16_08_001.jpg
> alt: A diagram of a closed surface S, vector field, and solid E enclosed by the surface in three dimensions. The surface is a roughly rectangular prism with curved sides. The normal vectors stretch out and away from the surface. The arrows have negative x components and positive y and z components.
> caption: The divergence theorem relates a flux integral across a closed surface *S* to a triple integral over solid *E* enclosed by the surface.

Recall that the flux form of Green’s theorem states that ${\displaystyle \iint_{D}\text{div}\;\textbf{F}dA={\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}}.$ Therefore, the divergence theorem is a version of Green’s theorem in one higher dimension.
The proof of the divergence theorem is beyond the scope of this text. However, we look at an informal proof that gives a general feel for why the theorem is true, but does not prove the theorem with full rigor. This explanation follows the informal explanation given for why Stokes’ theorem is true.

### Proof
Let *B* be a small box with sides parallel to the coordinate planes inside *E* ([ref:CNX_Calc_Figure_16_08_002]). Let the center of *B* have coordinates $(x,y,z)$ and suppose the edge lengths are $\text{Δ}x,\text{Δ}y,$ and $\text{Δ}z$ ([ref:CNX_Calc_Figure_16_08_002](b)). The normal vector out of the top of the box is **k** and the normal vector out of the bottom of the box is $\text{−}\textbf{k}.$ The dot product of $\textbf{F}=\langle P,Q,R\rangle$ with **k** is *R* and the dot product with $\text{−}\textbf{k}$ is $\text{−}R.$ The area of the top of the box (and the bottom of the box) $\text{Δ}S$ is $\text{Δ}x\text{Δ}y.$

> FIGURE {fig:CNX_Calc_Figure_16_08_002} src=../../media/CNX_Calc_Figure_16_08_002.jpg
> alt: This figure has three diagrams. The first is a surface E in three dimensions with a small box B inside it. The second just has box B. The height is labeled as delta z, the width is labeled as delta x, and the width is labeled as delta y. An arrow perpendicular to the top points up and away from the box and is labeled k. An arrow perpendicular to the bottom points down and away from the box and is labeled –k. The third diagram is a side views of box B. The center is (x, y, z), the midpoint of the side below it is (x, y, z – delta z / 2), and the midpoint of the size above it is (x, y, z + delta z / 2). The height is delta z.
> caption: (a) A small box *B* inside surface *E* has sides parallel to the coordinate planes. (b) Box *B* has side lengths $\text{Δ}x,\text{Δ}y,$ and $\text{Δ}z$ (c) If we look at the side view of *B*, we see that, since $(x,y,z)$ is the center of the box, to get to the top of the box we must travel a vertical distance of $\text{Δ}z\text{/}2$ up from $(x,y,z).$ Similarly, to get to the bottom of the box we must travel a distance $\text{Δ}z\text{/}2$ down from $(x,y,z).$

The flux out of the top of the box can be approximated by $R(x,y,z+\frac{\text{Δ}z}{2})\text{Δ}x\text{Δ}y$ ([ref:CNX_Calc_Figure_16_08_002](c)) and the flux out of the bottom of the box is $\text{−}R(x,y,z-\frac{\text{Δ}z}{2})\text{Δ}x\text{Δ}y.$ If we denote the difference between these values as $\text{Δ}R,$ then the net flux in the vertical direction can be approximated by $\text{Δ}R\text{Δ}x\text{Δ}y.$ However,

$\text{Δ}R\text{Δ}x\text{Δ}y=(\frac{\text{Δ}R}{\text{Δ}z})\text{Δ}x\text{Δ}y\text{Δ}z\approx (\frac{\partial R}{\partial z})\text{Δ}V.$  {eq:fs-id1167794076994}

Therefore, the net flux in the vertical direction can be approximated by $(\frac{\partial R}{\partial z})\text{Δ}V.$ Similarly, the net flux in the *x*-direction can be approximated by $(\frac{\partial P}{\partial x})\text{Δ}V$ and the net flux in the *y*-direction can be approximated by $(\frac{\partial Q}{\partial y})\text{Δ}V.$ Adding the fluxes in all three directions gives an approximation of the total flux out of the box:

$\text{Total flux}\approx (\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z})\text{Δ}V=\text{div}\;\textbf{F}\text{Δ}V.$  {eq:fs-id1167794222530}

This approximation becomes arbitrarily close to the value of the total flux as the volume of the box shrinks to zero.
The sum of $\text{div}\;\textbf{F}\text{Δ}V$ over all the small boxes approximating *E* is approximately ${\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV}.$ On the other hand, the sum of $\text{div}\;\textbf{F}\text{Δ}V$ over all the small boxes approximating *E* is the sum of the fluxes over all these boxes. Just as in the informal proof of Stokes’ theorem, adding these fluxes over all the boxes results in the cancelation of a lot of the terms. If an approximating box shares a face with another approximating box, then the flux over one face is the negative of the flux over the shared face of the adjacent box. These two integrals cancel out. When adding up all the fluxes, the only flux integrals that survive are the integrals over the faces approximating the boundary of *E*. As the volumes of the approximating boxes shrink to zero, this approximation becomes arbitrarily close to the flux over *S*.
□

:::example {ex:fs-id1167793931713} Verifying the Divergence Theorem

:::exercise {fs-id1167793416785} type= 
PROBLEM:
Verify the divergence theorem for vector field $\textbf{F}=\langle x-y,x+z,z-y\rangle$ and surface *S* that consists of cone ${x}^{2}+{y}^{2}={z}^{2},0\le z\le 1,$ and the circular top of the cone (see the following figure). Assume this surface is oriented outward.

> IMAGE {img:fs-id1167793924415} src=../../media/CNX_Calc_Figure_16_08_003.jpg
> alt: This figure is a vector diagram in three dimensions. The cone x^2 + y^2 = z^2 is shown. Its point is at the origin, and it opens up. There is a cover across the top. The arrows seem to be following the shape of the cone.

SOLUTION:
Let *E* be the solid cone enclosed by *S*. To verify the theorem for this example, we show that ${\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV=}{\displaystyle \iint\limits_{S}\textbf{F}\cdot d\textbf{S}}$ by calculating each integral separately.
To compute the triple integral, note that $\text{div}\;\textbf{F}={P}_{x}+{Q}_{y}+{R}_{z}=2,$ and therefore the triple integral is

$\begin{array}{rl}{\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV} & =2{\displaystyle \iiint_{E}dV} \\ & =2(\text{volume of}\;E).\end{array}$  {eq:fs-id1167793983919}

The volume of a right circular cone is given by $\pi {r}^{2}\frac{h}{3}.$ In this case, $h=r=1.$ Therefore,

${\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV}=2(\text{volume of}\;E)=\frac{2\pi}{3}.$  {eq:fs-id1167793939725}

To compute the flux integral, first note that *S* is piecewise smooth; *S* can be written as a union of smooth surfaces. Therefore, we break the flux integral into two pieces: one flux integral across the circular top of the cone and one flux integral across the remaining portion of the cone. Call the circular top ${S}_{1}$ and the portion under the top ${S}_{2}.$ We start by calculating the flux across the circular top of the cone. Notice that ${S}_{1}$ has parameterization

$\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,1\rangle ,0\le u\le 1,0\le v\le 2\pi .$  {eq:fs-id1167793505706}

Then, the tangent vectors are ${\textbf{t}}_{u}=\langle \text{cos}\;v,\text{sin}\;v,0\rangle$ and ${\textbf{t}}_{v}=\langle \text{−}u\;\text{cos}\;v,u\;\text{sin}\;v,0\rangle .$ Therefore, the flux across ${S}_{1}$ is

$\begin{array}{rl}{\displaystyle \iint_{{S}_{1}}\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}\textbf{F}(\textbf{r}(u,v))}}\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v})dA \\ & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}\langle u\;\text{cos}\;v-u\;\text{sin}\;v,u\;\text{cos}\;v+1,1-u\;\text{sin}\;v\rangle \cdot \langle 0,0,u\rangle}}dvdu \\ & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}u-{u}^{2}\text{sin}\;v}}\;dvdu=\pi .\end{array}$  {eq:fs-id1167793449144}

We now calculate the flux over ${S}_{2}.$ A parameterization of this surface is

$\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,u\rangle ,0\le u\le 1,0\le v\le 2\pi .$  {eq:fs-id1167794284791}

The tangent vectors are ${\textbf{t}}_{u}=\langle \text{cos}\;v,\text{sin}\;v,1\rangle$ and ${\textbf{t}}_{v}=\langle \text{−}u\;\text{sin}\;v,u\;\text{cos}\;v,0\rangle ,$ so the cross product is

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle \text{−}u\;\text{cos}\;v,\text{−}u\;\text{sin}\;v,u\rangle .$  {eq:fs-id1167793420578}

Notice that the negative signs on the *x* and *y* components induce the inward orientation of the cone. Since the surface is oriented outward, we use vector ${\textbf{t}}_{v}\;\times \;{\textbf{t}}_{u}=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,\text{−}u\rangle$ in the flux integral. The flux across ${S}_{2}$ is then

$\begin{array}{rl}{\displaystyle \iint_{{S}_{2}}\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}\textbf{F}(\textbf{r}(u,v))}}\cdot ({\textbf{t}}_{v}\;\times \;{\textbf{t}}_{u})dA \\ & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}\langle u\;\text{cos}\;v-u\;\text{sin}\;v,u\;\text{cos}\;v+u,u-\text{sin}\;v\rangle \cdot \langle u\;\text{cos}\;v,u\;\text{sin}\;v,\text{−}u\rangle}} \\ & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2\pi}{u}^{2}}}{\text{cos}}^{2}v+2{u}^{2}\text{sin}\;v-{u}^{2}dvdu=-\frac{\pi}{3}.\end{array}$  {eq:fs-id1167794140513}

The total flux across *S* is

${\displaystyle \iint_{{S}_{2}}\textbf{F}\cdot d\textbf{S}}={\displaystyle \iint_{{S}_{1}}\textbf{F}\cdot d\textbf{S}}+{\displaystyle \iint_{{S}_{2}}\textbf{F}\cdot d\textbf{S}}=\frac{2\pi}{3}={\displaystyle \iiint_{E}\text{div}}\;\textbf{F}dV,$  {eq:fs-id1167794028868}

and we have verified the divergence theorem for this example.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793984961} type= 
PROBLEM:
Verify the divergence theorem for vector field $\textbf{F}(x,y,z)=\langle x+y+z,y,2x-y\rangle$ and surface *S* given by the cylinder ${x}^{2}+{y}^{2}=1,0\le z\le 3$ plus the circular top and bottom of the cylinder. Assume that *S* is oriented outward.
SOLUTION:
Both integrals equal $6\pi .$
COMMENTARY: Hint
Calculate both the flux integral and the triple integral with the divergence theorem and verify they are equal.
:::
:::
Recall that the divergence of continuous field **F** at point *P* is a measure of the “outflowing-ness” of the field at *P*. If **F** represents the velocity field of a fluid, then the divergence can be thought of as the rate per unit volume of the fluid flowing out less the rate per unit volume flowing in. The divergence theorem confirms this interpretation. To see this, let *P* be a point and let ${B}_{r}$ be a ball of small radius *r* centered at *P* ([ref:CNX_Calc_Figure_16_08_004]). Let ${S}_{r}$ be the boundary sphere of ${B}_{r}.$ Since the radius is small and **F** is continuous, $\text{div}\;\textbf{F}(Q)\approx \text{div}\;\textbf{F}(P)$ for all other points *Q* in the ball. Therefore, the flux across ${S}_{r}$ can be approximated using the divergence theorem:

${\displaystyle \iint_{{S}_{r}}\textbf{F}\cdot d\textbf{S}}={\displaystyle \iiint_{{B}_{r}}\text{div}}\;\textbf{F}dV\approx {\displaystyle \iiint_{{B}_{r}}\text{div}}\;\textbf{F}(P)dV.$  {eq:fs-id1167793370529}

Since $\text{div}\;\textbf{F}(P)$ is a constant,

${\displaystyle \iiint_{{B}_{r}}\text{div}}\;\textbf{F}(P)dV=\text{div}\;\textbf{F}(P)V({B}_{r}).$  {eq:fs-id1167793373484}

Therefore, flux ${\displaystyle \iint_{{S}_{r}}\textbf{F}\cdot d\textbf{S}}$ can be approximated by $\text{div}\;\textbf{F}(P)V({B}_{r}).$ This approximation gets better as the radius shrinks to zero, and therefore

$\text{div}\;\textbf{F}(P)=\lim_{r\to 0}\frac{1}{V({B}_{r})}{\displaystyle \iint_{{S}_{r}}\textbf{F}\cdot d\textbf{S}}.$  {eq:fs-id1167793870197}

This equation says that the divergence at *P* is the net rate of outward flux of the fluid per unit volume.

> FIGURE {fig:CNX_Calc_Figure_16_08_004} src=../../media/CNX_Calc_Figure_16_08_004.jpg
> alt: This figure is a diagram of ball B_r, with small radius r centered at P. Arrows are drawn pointing up and to the right across the ball.
> caption: Ball ${B}_{r}$ of small radius *r* centered at *P.*

## Using the Divergence Theorem
The divergence theorem translates between the flux integral of closed surface *S* and a triple integral over the solid enclosed by *S*. Therefore, the theorem allows us to compute flux integrals or triple integrals that would ordinarily be difficult to compute by translating the flux integral into a triple integral and vice versa.

:::example {ex:fs-id1167793423720} Applying the Divergence Theorem

:::exercise {fs-id1167793618334} type= 
PROBLEM:
Calculate the surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where *S* is cylinder ${x}^{2}+{y}^{2}=1,0\le z\le 2,$ including the circular top and bottom, and $\textbf{F}=\langle \frac{{x}^{3}}{3}+yz,\frac{{y}^{3}}{3}-\text{sin}(xz),z-x-y\rangle .$
SOLUTION:
We could calculate this integral without the divergence theorem, but the calculation is not straightforward because we would have to break the flux integral into three separate integrals: one for the top of the cylinder, one for the bottom, and one for the side. Furthermore, each integral would require parameterizing the corresponding surface, calculating tangent vectors and their cross product, and using [ref:fs-id1167793757749](module:m54004).
By contrast, the divergence theorem allows us to calculate the single triple integral ${\displaystyle \iiint_{E}\text{div}}\;\textbf{F}dV,$ where *E* is the solid enclosed by the cylinder. Using the divergence theorem and converting to cylindrical coordinates, we have

$\begin{array}{rl}{\displaystyle \iint_{s}\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \iiint_{E}\text{div}}\;\textbf{F}\;dV \\ & ={\displaystyle \iiint_{E}({x}^{2}+{y}^{2}+1)}dV \\ & ={\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{2}({r}^{2}+1)r\;dz}}}\;dr\;d\theta \\ & =\frac{3}{2}{\displaystyle \int_{0}^{2\pi}d\theta}=3\pi .\end{array}$  {eq:fs-id1167793926122}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793929707} type= 
PROBLEM:
Use the divergence theorem to calculate flux integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where *S* is the boundary of the box given by $0\le x\le 2,1\le y\le 4,0\le z\le 1,$ and $\textbf{F}=\langle {x}^{2}+yz,y-z,2x+2y+2z\rangle$ (see the following figure).

> IMAGE {img:fs-id1167793383387} src=../../media/CNX_Calc_Figure_16_08_006.jpg
> alt: This figure is a vector diagram in three dimensions. The box of the figure spans x from 0 to 2; y from 0 to 4; and z from 0 to 1. The vectors point up increasingly with distance from the origin; toward larger x with increasing distance from the origin; and toward smaller y values with increasing height.

SOLUTION:
30
COMMENTARY: Hint
Calculate the corresponding triple integral.
:::
:::

:::example {ex:fs-id1167793999995} Applying the Divergence Theorem

:::exercise {fs-id1167793999997} type= 
PROBLEM:
Let $\textbf{v}=\langle -\frac{y}{z},\frac{x}{z},0\rangle$ be the velocity field of a fluid. Let *C* be the solid cube given by $1\le x\le 4,2\le y\le 5,1\le z\le 4,$ and let *S* be the boundary of this cube (see the following figure). Find the flow rate of the fluid across *S*.

> FIGURE {fig:CNX_Calc_Figure_16_08_007} src=../../media/CNX_Calc_Figure_16_08_007.jpg
> alt: This is a figure of a diagram of the given vector field in three dimensions. The x components are –y/z, the y components are x/z, and the z components are 0.
> caption: Vector field $\textbf{v}=\langle -\frac{y}{z},\frac{x}{z},0\rangle .$

SOLUTION:
The flow rate of the fluid across *S* is ${\displaystyle \iint_{S}\textbf{v}\cdot d\textbf{S}}.$ Before calculating this flux integral, let’s discuss what the value of the integral should be. Based on [ref:CNX_Calc_Figure_16_08_007], we see that if we place this cube in the fluid (as long as the cube doesn’t encompass the origin), then the rate of fluid entering the cube is the same as the rate of fluid exiting the cube. The field is rotational in nature and, for a given circle parallel to the *xy*-plane that has a center on the *z*-axis, the vectors along that circle are all the same magnitude. That is how we can see that the flow rate is the same entering and exiting the cube. The flow into the cube cancels with the flow out of the cube, and therefore the flow rate of the fluid across the cube should be zero.
To verify this intuition, we need to calculate the flux integral. Calculating the flux integral directly requires breaking the flux integral into six separate flux integrals, one for each face of the cube. We also need to find tangent vectors, compute their cross product, and use [ref:fs-id1167793757749](module:m54004). However, using the divergence theorem makes this calculation go much more quickly:

$\begin{array}{rl}{\displaystyle \iint_{S}\textbf{v}\cdot d\textbf{S}} & ={\displaystyle \iiint_{C}\text{div}(\textbf{v})}dV \\ & ={\displaystyle \iiint_{C}0}\;dV=0.\end{array}$  {eq:fs-id1167793268710}

Therefore the flux is zero, as expected.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793668612} type= 
PROBLEM:
Let $\textbf{v}=\langle \frac{x}{z},\frac{y}{z},0\rangle$ be the velocity field of a fluid. Let *C* be the solid cube given by $1\le x\le 4,2\le y\le 5,1\le z\le 4,$ and let *S* be the boundary of this cube (see the following figure). Find the flow rate of the fluid across *S*.

> IMAGE {img:fs-id1167794326119} src=../../media/CNX_Calc_Figure_16_08_008.jpg
> alt: This is a figure of a diagram of the given vector field in three dimensions. The x components are x/z, the y components are y/z, and the z components are 0.

SOLUTION:
$9\;\text{ln}(16)$
COMMENTARY: Hint
Use the divergence theorem and calculate a triple integral.
:::
:::
[ref:fs-id1167793999995] illustrates a remarkable consequence of the divergence theorem. Let *S* be a piecewise, smooth closed surface and let **F** be a vector field defined on an open region containing the surface enclosed by *S*. If **F** has the form $\textbf{F}=\langle f(y,z),g(x,z),h(x,y)\rangle ,$ then the divergence of **F** is zero. By the divergence theorem, the flux of **F** across *S* is also zero. This makes certain flux integrals incredibly easy to calculate. For example, suppose we wanted to calculate the flux integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ where *S* is a cube and

$\textbf{F}=\langle \text{sin}(y){e}^{yz},{x}^{2}{z}^{2},\text{cos}(xy){e}^{\text{sin}\;x}\rangle .$  {eq:fs-id1167793369452}

Calculating the flux integral directly would be difficult, if not impossible, using techniques we studied previously. At the very least, we would have to break the flux integral into six integrals, one for each face of the cube. But, because the divergence of this field is zero, the divergence theorem immediately shows that the flux integral is zero.
We can now use the divergence theorem to justify the physical interpretation of divergence that we discussed earlier. Recall that if **F** is a continuous three-dimensional vector field and *P* is a point in the domain of **F**, then the divergence of **F** at *P* is a measure of the “outflowing-ness” of **F** at *P*. If **F** represents the velocity field of a fluid, then the divergence of **F** at *P* is a measure of the net flow rate out of point *P* (the flow of fluid out of *P* less the flow of fluid in to *P*). To see how the divergence theorem justifies this interpretation, let ${B}_{r}$ be a ball of very small radius *r* with center *P*, and assume that ${B}_{r}$ is in the domain of **F**. Furthermore, assume that ${B}_{r}$ has a positive, outward orientation. Since the radius of ${B}_{r}$ is small and **F** is continuous, the divergence of **F** is approximately constant on ${B}_{r}.$ That is, if ${P}^{'}$ is any point in ${B}_{r},$ then $\text{div}\;\textbf{F}(P)\approx \text{div}\;\textbf{F}({P}^{'}).$ Let ${S}_{r}$ denote the boundary sphere of ${B}_{r}.$ We can approximate the flux across ${S}_{r}$ using the divergence theorem as follows:

$\begin{array}{rl}{\displaystyle \iint_{{S}_{r}}\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \iiint_{{B}_{r}}\text{div}\;\textbf{F}}\;dV \\ & \approx {\displaystyle \iiint_{{B}_{r}}\text{div}\;\textbf{F}}(P)dV \\ & =\text{div}\;\textbf{F}(P)V({B}_{r}).\end{array}$  {eq:fs-id1167793449667}

As we shrink the radius *r* to zero via a limit, the quantity $\text{div}\;\textbf{F}(P)V({B}_{r})$ gets arbitrarily close to the flux. Therefore,

$\text{div}\;\textbf{F}(P)=\lim_{r\to 0}\frac{1}{V({B}_{r})}{\displaystyle \iint_{{S}_{r}}\textbf{F}\cdot d\textbf{S}}$  {eq:fs-id1167793933175}

and we can consider the divergence at *P* as measuring the net rate of outward flux per unit volume at *P*. Since “outflowing-ness” is an informal term for the net rate of outward flux per unit volume, we have justified the physical interpretation of divergence we discussed earlier, and we have used the divergence theorem to give this justification.

## Application to Electrostatic Fields
The divergence theorem has many applications in physics and engineering. It allows us to write many physical laws in both an integral form and a differential form (in much the same way that Stokes’ theorem allowed us to translate between an integral and differential form of Faraday’s law). Areas of study such as fluid dynamics, electromagnetism, and quantum mechanics have equations that describe the conservation of mass, momentum, or energy, and the divergence theorem allows us to give these equations in both integral and differential forms.
One of the most common applications of the divergence theorem is to {index:electrostatic fields}. An important result in this subject is {term:Gauss’ law}. This law states that if *S* is a closed surface in electrostatic field **E**, then the flux of **E** across *S* is the total charge enclosed by *S* (divided by an electric constant). We now use the divergence theorem to justify the special case of this law in which the electrostatic field is generated by a stationary point charge at the origin.
If $(x,y,z)$ is a point in space, then the distance from the point to the origin is $r=\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}.$ Let ${\textbf{F}}_{r}$ denote radial vector field ${\textbf{F}}_{r}=\frac{1}{{r}^{2}}\langle \frac{x}{r},\frac{y}{r},\frac{z}{r}\rangle .$ The vector at a given position in space points in the direction of unit radial vector $\langle \frac{x}{r},\frac{y}{r},\frac{z}{r}\rangle$ and is scaled by the quantity $1\text{/}{r}^{2}.$ Therefore, the magnitude of a vector at a given point is inversely proportional to the square of the vector’s distance from the origin. Suppose we have a stationary charge of *q* Coulombs at the origin, existing in a vacuum. The charge generates electrostatic field **E** given by

$\textbf{E}=\frac{q}{4\pi {ε}_{0}}{\textbf{F}}_{r},$  {eq:fs-id1167794042545}

where the approximation ${ε}_{0}=8.854\;\times \;{10}^{−12}$ farad (F)/m is an electric constant. (The constant ${ε}_{0}$ is a measure of the resistance encountered when forming an electric field in a vacuum.) Notice that **E** is a radial vector field similar to the gravitational field described in [ref:fs-id1167793940891](module:m53989). The difference is that this field points outward whereas the gravitational field points inward. Because

$\textbf{E}=\frac{q}{4\pi {ε}_{0}}{\textbf{F}}_{r}=\frac{q}{4\pi {ε}_{0}}(\frac{1}{{r}^{2}}\langle \frac{x}{r},\frac{y}{r},\frac{z}{r}\rangle ),$  {eq:fs-id1167793937505}

we say that electrostatic fields obey an {term:inverse-square law}. That is, the electrostatic force at a given point is inversely proportional to the square of the distance from the source of the charge (which in this case is at the origin). Given this vector field, we show that the flux across closed surface *S* is zero if the charge is outside of *S*, and that the flux is $q\text{/}{ε}_{0}$ if the charge is inside of *S*. In other words, the flux across *S* is the charge inside the surface divided by constant ${ε}_{0}.$ This is a special case of Gauss’ law, and here we use the divergence theorem to justify this special case.
To show that the flux across *S* is the charge inside the surface divided by constant ${ε}_{0},$ we need two intermediate steps. First we show that the divergence of ${\textbf{F}}_{r}$ is zero and then we show that the flux of ${\textbf{F}}_{r}$ across any smooth surface *S* is either zero or $4\pi .$ We can then justify this special case of Gauss’ law.

:::example {ex:fs-id1167793293486} The Divergence of ${\textbf{F}}_{r}$ Is Zero

:::exercise {fs-id1167793378997} type= 
PROBLEM:
Verify that the divergence of ${\textbf{F}}_{r}$ is zero where ${\textbf{F}}_{r}$ is defined (away from the origin).
SOLUTION:
Since $r=\sqrt{{x}^{2}+{y}^{2}+{z}^{2}},$ the quotient rule gives us

$\begin{array}{rl}\frac{\partial}{\partial x}(\frac{x}{{r}^{3}}) & =\frac{\partial}{\partial x}(\frac{x}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}}) \\ & =\frac{{({x}^{2}+{y}^{2}+{z}^{2})}^{3\text{/}2}-x[\frac{3}{2}{({x}^{2}+{y}^{2}+{z}^{2})}^{1\text{/}2}2x]}{{({x}^{2}+{y}^{2}+{z}^{2})}^{3}} \\ & =\frac{{r}^{3}-3{x}^{2}r}{{r}^{6}}=\frac{{r}^{2}-3{x}^{2}}{{r}^{5}}.\end{array}$  {eq:fs-id1167793424271}

Similarly,

$\frac{\partial}{\partial y}(\frac{y}{{r}^{3}})=\frac{{r}^{2}-3{y}^{2}}{{r}^{5}}\;\text{and}\;\frac{\partial}{\partial z}(\frac{z}{{r}^{3}})=\frac{{r}^{2}-3{z}^{2}}{{r}^{5}}.$  {eq:fs-id1167793639949}

Therefore,

$\begin{array}{rl}\text{div}\;{\textbf{F}}_{r} & =\frac{{r}^{2}-3{x}^{2}}{{r}^{5}}+\frac{{r}^{2}-3{y}^{2}}{{r}^{5}}+\frac{{r}^{2}-3{z}^{2}}{{r}^{5}} \\ & =\frac{3{r}^{2}-3({x}^{2}+{y}^{2}+{z}^{2})}{{r}^{5}} \\ & =\frac{3{r}^{2}-3{r}^{2}}{{r}^{5}}=0.\end{array}$  {eq:fs-id1167794122038}

:::
:::
Notice that since the divergence of ${\textbf{F}}_{r}$ is zero and **E** is ${\textbf{F}}_{r}$ scaled by a constant, the divergence of electrostatic field **E** is also zero (except at the origin).

:::note [theorem] Flux across a Smooth Surface
Let *S* be a connected, piecewise smooth closed surface and let ${\textbf{F}}_{r}=\frac{1}{{r}^{2}}\langle \frac{x}{r},\frac{y}{r},\frac{z}{r}\rangle .$ Then,

${\displaystyle \iint_{S}{\textbf{F}}_{r}\cdot d\textbf{S}}=\{\begin{array}{llll}0 & & & \text{if}\;S\;\text{does not encompass the origin} \\ 4\pi & & & \text{if}\;S\;\text{encompasses the origin.}\end{array}$  {eq:fs-id1167793287560}

:::
In other words, this theorem says that the flux of ${\textbf{F}}_{r}$ across any piecewise smooth closed surface *S* depends only on whether the origin is inside of *S*.

### Proof
The logic of this proof follows the logic of [ref:fs-id1167793931838](module:m53982), only we use the divergence theorem rather than Green’s theorem.
First, suppose that *S* does not encompass the origin. In this case, the solid enclosed by *S* is in the domain of ${\textbf{F}}_{r},$ and since the divergence of ${\textbf{F}}_{r}$ is zero, we can immediately apply the divergence theorem and find that ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ is zero.
Now suppose that *S* does encompass the origin. We cannot just use the divergence theorem to calculate the flux, because the field is not defined at the origin. Let ${S}_{a}$ be a sphere of radius *a* inside of *S* centered at the origin. The outward normal vector field on the sphere, in spherical coordinates, is

${\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta}=\langle {a}^{2}\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,{a}^{2}\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,{a}^{2}\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle$  {eq:fs-id1167793882484}

(see [ref:fs-id1167793561618](module:m54004)). Therefore, on the surface of the sphere, the dot product ${\textbf{F}}_{r}\cdot \textbf{N}$ (in spherical coordinates) is

$\begin{array}{rl}{\textbf{F}}_{r}\cdot \textbf{N} & =\langle \frac{\text{sin}\;ϕ\;\text{cos}\;\theta}{{a}^{2}},\frac{\text{sin}\;ϕ\;\text{sin}\;\theta}{{a}^{2}},\frac{\text{cos}\;ϕ}{{a}^{2}}\rangle \cdot \langle {a}^{2}\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,{a}^{2}\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,{a}^{2}\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle \\ & =\text{sin}\;ϕ(\langle \text{sin}\;ϕ\;\text{cos}\;\theta ,\text{sin}\;ϕ\;\text{sin}\;\theta ,\text{cos}\;ϕ\rangle \cdot \langle \text{sin}\;ϕ\;\text{cos}\;\theta ,\text{sin}\;ϕ\;\text{sin}\;\theta ,\text{cos}\;ϕ\rangle ) \\ & =\text{sin}\;ϕ.\end{array}$  {eq:fs-id1167794188765}

The flux of ${\textbf{F}}_{r}$ across ${S}_{a}$ is

${\displaystyle \iint_{{S}_{a}}{\textbf{F}}_{r}\cdot \textbf{N}dS=}{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi}\text{sin}\;ϕdϕd\theta}=}4\pi .$  {eq:fs-id1167793776707}

Now, remember that we are interested in the flux across *S*, not necessarily the flux across ${S}_{a}.$ To calculate the flux across *S*, let *E* be the solid between surfaces ${S}_{a}$ and *S*. Then, the boundary of *E* consists of ${S}_{a}$ and *S*. Denote this boundary by $S-{S}_{a}$ to indicate that *S* is oriented outward but now ${S}_{a}$ is oriented inward. We would like to apply the divergence theorem to solid *E.* Notice that the divergence theorem, as stated, can’t handle a solid such as *E* because *E* has a hole. However, the divergence theorem can be extended to handle solids with holes, just as Green’s theorem can be extended to handle regions with holes. This allows us to use the divergence theorem in the following way. By the divergence theorem,

$\begin{array}{rl}{\displaystyle \iint_{S-{S}_{a}}{\textbf{F}}_{r}\cdot d\textbf{S}} & ={\displaystyle \iint_{S}{\textbf{F}}_{r}\cdot d\textbf{S}}-{\displaystyle \iint_{{S}_{a}}{\textbf{F}}_{r}\cdot d\textbf{S}} \\ & ={\displaystyle \iiint_{E}\text{div}}{\textbf{F}}_{r}\;dV \\ & ={\displaystyle \iiint_{E}0dV}=0.\end{array}$  {eq:fs-id1167793291891}

Therefore,

${\displaystyle \iint_{S}{\textbf{F}}_{r}\cdot d\textbf{S}}={\displaystyle \iint_{{S}_{a}}{\textbf{F}}_{r}\cdot d\textbf{S}}=4\pi ,$  {eq:fs-id1167794098933}

and we have our desired result.
□
Now we return to calculating the flux across a smooth surface in the context of electrostatic field $\textbf{E}=\frac{q}{4\pi {ε}_{0}}{\textbf{F}}_{r}$ of a point charge at the origin. Let *S* be a piecewise smooth closed surface that encompasses the origin. Then

$\begin{array}{rl}{\displaystyle \iint_{S}\textbf{E}\cdot d\textbf{S}} & ={\displaystyle \iint_{S}\frac{q}{4\pi {ε}_{0}}{\textbf{F}}_{r}\cdot d\textbf{S}} \\ & =\frac{q}{4\pi {ε}_{0}}{\displaystyle \iint_{S}{\textbf{F}}_{r}\cdot d\textbf{S}} \\ & =\frac{q}{{ε}_{0}}.\end{array}$  {eq:fs-id1167793465496}

If *S* does not encompass the origin, then

${\displaystyle \iint_{S}\textbf{E}\cdot d\textbf{S}}=\frac{q}{4\pi {ε}_{0}}{\displaystyle \iint_{S}{\textbf{F}}_{r}\cdot d\textbf{S}}=0.$  {eq:fs-id1167794052758}

Therefore, we have justified the claim that we set out to justify: the flux across closed surface *S* is zero if the charge is outside of *S*, and the flux is $q\text{/}{ε}_{0}$ if the charge is inside of *S*.
This analysis works only if there is a single point charge at the origin. In this case, Gauss’ law says that the flux of **E** across *S* is the total charge enclosed by *S*. Gauss’ law can be extended to handle multiple charged solids in space, not just a single point charge at the origin. The logic is similar to the previous analysis, but beyond the scope of this text. In full generality, Gauss’ law states that if *S* is a piecewise smooth closed surface and *Q* is the total amount of charge inside of *S*, then the flux of **E** across *S* is $Q\text{/}{ε}_{0}.$

:::example {ex:fs-id1167793379049} Using Gauss’ law

:::exercise {fs-id1167793379051} type= 
PROBLEM:
Suppose we have four stationary point charges in space, all with a charge of 0.002 Coulombs (C). The charges are located at $(0,1,1),(1,1,4),(−1,0,0),\;\text{and}\;(−2,−2,2).$ Let **E** denote the electrostatic field generated by these point charges. If *S* is the sphere of radius 2 oriented outward and centered at the origin, then find ${\displaystyle \iint_{S}\textbf{E}\cdot d\textbf{S}}.$
SOLUTION:
According to Gauss’ law, the flux of **E** across *S* is the total charge inside of *S* divided by the electric constant. Since *S* has radius 2, notice that only two of the charges are inside of *S*: the charge at $(0,1,1)$ and the charge at $(−1,0,0).$ Therefore, the total charge encompassed by *S* is 0.004 and, by Gauss’ law,

${\displaystyle \iint_{S}\textbf{E}\cdot d\textbf{S}}=\frac{0.004}{8.854\;\times \;{10}^{−12}}\approx 4.518\;\times \;{10}^{9}\;\text{V-m}.$  {eq:fs-id1167794055007}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793491436} type= 
PROBLEM:
Work the previous example for surface *S* that is a sphere of radius 4 centered at the origin, oriented outward.
SOLUTION:
$\approx 6.777\;\times \;{10}^{9}$
COMMENTARY: Hint
Use Gauss’ law.
:::
:::

## Key Concepts {section:key-concepts}
- The divergence theorem relates a surface integral across closed surface *S* to a triple integral over the solid enclosed by *S*. The divergence theorem is a higher dimensional version of the flux form of Green’s theorem, and is therefore a higher dimensional version of the Fundamental Theorem of Calculus.
- The divergence theorem can be used to transform a difficult flux integral into an easier triple integral and vice versa.
- The divergence theorem can be used to derive Gauss’ law, a fundamental law in electrostatics.

## Key Equations {section:key-equations}

> TABLE {tab:eip-563} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Divergence theorem** | ${\displaystyle \iiint_{E}\text{div}\;\textbf{F}dV=}{\displaystyle \iint\limits_{S}\textbf{F}\cdot d\textbf{S}}$ |

##  {section:section-exercises}
For the following exercises, use a computer algebraic system (CAS) and the divergence theorem to evaluate surface integral ${\displaystyle \iint_{S}^{}\textbf{F}\cdot \textbf{N}ds}$ for the given choice of **F** and the boundary surface *S.* For each closed surface, assume **N** is the outward unit normal vector.

:::exercise {fs-id1167793366426} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k};$ *S* is the surface of cube $0\le x\le 1,0\le y\le 1,0<z\le 1.$
:::

:::exercise {fs-id1167793460609} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=(\text{cos}\;yz)\textbf{i}+{e}^{xz}\textbf{j}+3{z}^{2}\textbf{k}\text{;}$ *S* is the surface of hemisphere $z=\sqrt{4-{x}^{2}-{y}^{2}}$ together with disk ${x}^{2}+{y}^{2}\le 4$ in the *xy*-plane.
SOLUTION:
${\displaystyle \int_{S}^{}\textbf{F}\cdot \textbf{N}ds}=24\pi \approx 75.3982$
:::

:::exercise {fs-id1167793838699} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=({x}^{2}+{y}^{2}-{x}^{2})\textbf{i}+{x}^{2}y\textbf{j}+3z\textbf{k};S$  is the surface of the unit cube $0\le x\le 1,0\le y\le 1,0\le z\le 1$ excluding the face $z=0$.
:::

:::exercise {fs-id1167794006422} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}\text{;}$ *S* is the surface of the solid bounded by the parabola $z={x}^{2}+{y}^{2}\;$ and the plane $z=9$.
SOLUTION:
${\displaystyle \int_{S}^{}\textbf{F}\cdot \textbf{N}ds}=\frac{243\pi}{2}\approx 381.704$
:::

:::exercise {fs-id1167794061843} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)={x}^{2}\textbf{i}+{y}^{2}\textbf{j}+{z}^{2}\textbf{k}\text{;}$ *S* is the surface of sphere ${x}^{2}+{y}^{2}+{z}^{2}=4.$
:::

:::exercise {fs-id1167794119134} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+({z}^{2}-1)\textbf{k}\text{;}$ *S* is the surface of the solid bounded by cylinder ${x}^{2}+{y}^{2}=4$ and planes $z=0\;\text{and}\;z=1.$
SOLUTION:
${\displaystyle \int_{S}^{}\textbf{F}\cdot \textbf{N}ds}=12\pi \approx 37.6991$
:::

:::exercise {fs-id1167793932943} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)=x{y}^{2}\textbf{i}+y{z}^{2}\textbf{j}+{x}^{2}z\textbf{k}\text{;}$ *S* is the surface of the solid bounded above by sphere $ρ=2$ and below by cone $φ=\frac{\pi}{4}$ in spherical coordinates. (Think of *S* as the surface of an “ice cream cone.”)
:::

:::exercise {fs-id1167793418311} type= 
PROBLEM:
**[T]** $\textbf{F}(x,y,z)={x}^{3}\textbf{i}+{y}^{3}\textbf{j}+3{a}^{2}z\textbf{k}\;\text{(constant}\;a>0)\text{;}$ *S* is the surface of the solid bounded by cylinder ${x}^{2}+{y}^{2}={a}^{2}$ and planes $z=0\;\text{and}\;z=1.$
SOLUTION:
${\displaystyle \int_{S}^{}\textbf{F}\cdot \textbf{N}ds}=\frac{9\pi {a}^{4}}{2}$
:::

:::exercise {fs-id1167793925807} type= 
PROBLEM:
**[T]** Surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot}d\textbf{S},$ where *S* is the surface of the solid bounded by paraboloid $z={x}^{2}+{y}^{2}$ and plane $z=4,$ and $\textbf{F}(x,y,z)=(x+{y}^{2}{z}^{2})\textbf{i}+(y+{z}^{2}{x}^{2})\textbf{j}+(z+{x}^{2}{y}^{2})\textbf{k}$
:::

:::exercise {fs-id1167794168038} type= 
PROBLEM:
Use the divergence theorem to calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot}d\textbf{S},$ where $\textbf{F}(x,y,z)=({e}^{{y}^{2}})\textbf{i}+(y+\text{sin}({z}^{2}))\textbf{j}+(z-1)\textbf{k}$ and *S* is the surface of the solid bounded by the sphere ${x}^{2}+{y}^{2}+{z}^{2}=1\text{,}$ and below by the plane $z=0$.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot}d\textbf{S}=\frac{4\pi}{3}$
:::

:::exercise {fs-id1167793957145} type= 
PROBLEM:
Use the divergence theorem to calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot}ds,$ where $\textbf{F}(x,y,z)={x}^{4}\textbf{i}-{x}^{3}{z}^{2}\textbf{j}+4x{y}^{2}z\textbf{k}$ and $S$ is the surface bounded by cylinder ${x}^{2}+{y}^{2}=1$ and planes $z=x+2$ and $z=0.$
:::

:::exercise {fs-id1167794100849} type= 
PROBLEM:
Use the divergence theorem to calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ when $\textbf{F}(x,y,z)={x}^{2}{z}^{3}\textbf{i}+2xy{z}^{3}\textbf{j}+x{z}^{4}\textbf{k}$ and *S* is the surface of the box with vertices $(±1,±2,±3).$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=0$
:::

:::exercise {fs-id1167793933441} type= 
PROBLEM:
Use the divergence theorem to calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ when $\textbf{F}(x,y,z)=z\;{\text{tan}}^{−1}({y}^{2})\textbf{i}+{z}^{3}\text{ln}({x}^{2}+1)\textbf{j}+z\textbf{k}$ and *S* is the surface of the solid bounded by the paraboloid ${x}^{2}+{y}^{2}+z=2$ and the plane $z=1$.
:::

:::exercise {fs-id1167793419912} type= 
PROBLEM:
**[T]** Use a CAS and the divergence theorem to calculate flux ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=({x}^{3}+{y}^{3})\textbf{i}+({y}^{3}+{z}^{3})\textbf{j}+({z}^{3}+{x}^{3})\textbf{k}$ and *S* is a sphere with center (0, 0, 0) and radius 2.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=\frac{384\pi}{5}\approx 241.2743$
:::

:::exercise {fs-id1167794097293} type= 
PROBLEM:
Use the divergence theorem to compute the value of flux integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=({y}^{3}+3x)\textbf{i}+(xz+y)\textbf{j}+[z+{x}^{4}\text{cos}({x}^{2}y)]\textbf{k}$ and *S* is the surface of the solid bounded by ${x}^{2}+{y}^{2}=1,x\ge 0,y\ge 0,\;\text{and}\;0\le z\le 1.$

> IMAGE {img:fs-id1167793944929} src=../../media/CNX_Calc_Figure_16_08_202.jpg
> alt: A vector field in three dimensions, with focus on the area with x > 0, y>0, and z>0. A quarter of a cylinder is drawn with center on the z axis. The arrows have positive x, y, and z components; they point away from the origin.

:::

:::exercise {fs-id1167794218624} type= 
PROBLEM:
Use the divergence theorem to compute flux integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=y\textbf{j}-z\textbf{k}$ and *S* consists of the union of paraboloid $y={x}^{2}+{z}^{2},0\le y\le 1,$ and disk ${x}^{2}+{z}^{2}\le 1,y=1,$ oriented outward. What is the flux through just the paraboloid?
SOLUTION:
${\displaystyle \iint_{D}\textbf{F}\cdot d\textbf{S}}=$ Net flux $=0$; flux through the paraboloid $=-\pi$
:::

:::exercise {fs-id1167793547207} type= 
PROBLEM:
Use the divergence theorem to compute flux integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=x+y\textbf{j}+{z}^{4}\textbf{k}$ and *S* is a part of cone $z=\sqrt{{x}^{2}+{y}^{2}}$ beneath top plane $z=1,$ oriented downward.
:::

:::exercise {fs-id1167793958103} type= 
PROBLEM:
Use the divergence theorem to calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ for $\textbf{F}(x,y,z)={x}^{4}\textbf{i}-{x}^{3}{z}^{2}\textbf{j}+4x{y}^{2}z\textbf{k},$ where *S* is the surface inside the cylinder ${x}^{2}+{y}^{2}=1$ between the planes $z=x+2\;\text{and}\;z=0.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=\frac{2\pi}{3}$
:::

:::exercise {fs-id1167793383115} type= 
PROBLEM:
Consider $\textbf{F}(x,y,z)={x}^{2}\textbf{i}+xy\textbf{j}+(z+1)\textbf{k}.$ Let *E* be the solid enclosed by paraboloid $z=4-{x}^{2}-{y}^{2}$ and plane $z=0$ with normal vectors pointing outside *E*. Compute flux ***F*** across the boundary of *E* using the divergence theorem.
:::
For the following exercises, use a CAS along with the divergence theorem to compute the net outward flux for the fields across the given surfaces *S*.

:::exercise {fs-id1167793316082} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle x,−2y,3z\rangle ;$ *S* is sphere $\{(x,y,z):{x}^{2}+{y}^{2}+{z}^{2}=6\}.$
SOLUTION:
$16\sqrt{6}\pi$
:::

:::exercise {fs-id1167793268294} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle x,2y,z\rangle ;$ *S* is the boundary of the tetrahedron in the first octant formed by plane $x+y+z=1.$
:::

:::exercise {fs-id1167793497281} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle y-2x,{x}^{3}-y,{y}^{2}-z\rangle ;$ *S* is sphere $\{(x,y,z):{x}^{2}+{y}^{2}+{z}^{2}=4\}.$
SOLUTION:
$-\frac{128\pi}{3}$
:::

:::exercise {fs-id1167793452461} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle x,y,z\rangle ;$ *S* is the surface of paraboloid $z=4-{x}^{2}-{y}^{2},$ for $z\ge 0,$ plus its base in the *xy*-plane.
:::
For the following exercises, use a CAS and the divergence theorem to compute the net outward flux for the vector fields across the boundary of the given regions *D*.

:::exercise {fs-id1167793977402} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle z-x,x-y,2y-z\rangle ;$ *D* is the region between spheres of radius 2 and 4 centered at the origin.
SOLUTION:
$-224\pi \approx −703.7168$
:::

:::exercise {fs-id1167793581580} type= 
PROBLEM:
**[T]** $\textbf{F}=\frac{\textbf{r}}{||\textbf{r}||}=\frac{\langle x,y,z\rangle}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}};$ *D* is the region between spheres of radius 1 and 2 centered at the origin.
:::

:::exercise {fs-id1167794206293} type= 
PROBLEM:
**[T]** $\textbf{F}=\langle {x}^{2},\text{−}{y}^{2},{z}^{2}\rangle ;$ *D* is the region in the first octant between planes $z=4-x-y$ and $z=2-x-y.$
SOLUTION:
20
:::

:::exercise {fs-id1167793498809} type= 
PROBLEM:
Let $\textbf{F}(x,y,z)=2x\textbf{i}-3xy\textbf{j}+x{z}^{2}\textbf{k}.$ Use the divergence theorem to calculate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where *S* is the surface of the cube with corners at $(0,0,0),(1,0,0),(0,1,0),$ $(1,1,0),(0,0,1),(1,0,1),(0,1,1),\;\text{and}\;(1,1,1),$ oriented outward.
:::

:::exercise {fs-id1167793503235} type= 
PROBLEM:
Use the divergence theorem to find the outward flux of field $\textbf{F}(x,y,z)=({x}^{3}-3y)\textbf{i}+(2yz+1)\textbf{j}+xyz\textbf{k}$ through the cube bounded by planes $x=±1,y=±1,\;\text{and}\;z=±1.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=8$
:::

:::exercise {fs-id1167794226025} type= 
PROBLEM:
Let $\textbf{F}(x,y,z)=2x\textbf{i}-3y\textbf{j}+5z\textbf{k}$ and let *S* be hemisphere $z=\sqrt{9-{x}^{2}-{y}^{2}}$ together with disk ${x}^{2}+{y}^{2}\le 9$ in the *xy*-plane. Use the divergence theorem to calculate ${\displaystyle \iint_{S}F⋅dS}$.
:::

:::exercise {fs-id1167793492771} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS},$ where $\textbf{F}(x,y,z)={x}^{2}\textbf{i}+xy\textbf{j}+{x}^{3}{y}^{3}\textbf{k}$ and *S* is the surface consisting of all faces of the tetrahedron bounded by plane $x+y+z=1$ and the coordinate planes, with outward unit normal vector **N**.

> IMAGE {img:fs-id1167793592979} src=../../media/CNX_Calc_Figure_16_08_204.jpg
> alt: A vector field in three dimensions, with arrows becoming larger the further away from the origin they are, especially in their x components. S is the surface consisting of all faces of the tetrahedron bounded by the plane x + y + z = 1. As such, a portion of the given plane, the (x, y) plane, the (x, z) plane, and the (y, z) plane are shown. The arrows point towards the origin for negative x components, away from the origin for positive x components, down for positive x and negative y components, as well as positive y and negative x components, and for positive x and y components, as well as negative x and negative y components.

SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}=\frac{1}{8}$
:::

:::exercise {fs-id1167793930420} type= 
PROBLEM:
Find the net outward flux of field $\textbf{F}=\langle bz-cy,cx-az,ay-bx\rangle$ across any smooth closed surface in ${\textbf{R}}^{3},$ where *a*, *b*, and *c* are constants.
:::

:::exercise {fs-id1167793892962} type= 
PROBLEM:
Use the divergence theorem to evaluate $\iint_{S}\| \text{R}\| \text{R}\cdot ndS,$ where $\textbf{R}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}$ and *S* is sphere ${x}^{2}+{y}^{2}+{z}^{2}={a}^{2},$ with constant $a>0.$
SOLUTION:
$\iint_{S}\| \text{R}\| \text{R}\cdot ndS=4\pi {a}^{4}$
:::

:::exercise {fs-id1167793925138} type= 
PROBLEM:
Use the divergence theorem to evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)={y}^{2}z\textbf{i}+{y}^{3}\textbf{j}+xz\textbf{k}$ and *S* is the boundary of the cube defined by $−1\le x\le 1,−1\le y\le 1,\;\text{and}\;0\le z\le 2.$
:::

:::exercise {fs-id1167793930476} type= 
PROBLEM:
Let *R* be the region defined by ${x}^{2}+{y}^{2}+{z}^{2}\le 1.$ Use the divergence theorem to find ${\displaystyle \iiint_{R}{z}^{2}dV}.$
SOLUTION:
${\displaystyle \iiint_{R}{z}^{2}dV}=\frac{4\pi}{15}$
:::

:::exercise {fs-id1167793626551} type= 
PROBLEM:
Let *E* be the solid bounded by the *xy*-plane and paraboloid $z=4-{x}^{2}-{y}^{2}$ so that *S* is the surface of the paraboloid piece together with the disk in the *xy*-plane that forms its bottom. If $\textbf{F}(x,y,z)=(xz\;\text{sin}(yz)+{x}^{3})\textbf{i}+\text{cos}(yz)\textbf{j}+(3z{y}^{2}-{e}^{{x}^{2}+{y}^{2}})\textbf{k},$ find ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ using the divergence theorem.

> IMAGE {img:fs-id1167793773223} src=../../media/CNX_Calc_Figure_16_08_205.jpg
> alt: A vector field in three dimensions with all of the arrows pointing down. They seem to follow the path of the paraboloid drawn opening down with vertex at the origin. S is the surface of this paraboloid and the disk in the (x, y) plane that forms its bottom.

:::

:::exercise {fs-id1167793453070} type= 
PROBLEM:
Let *E* be the solid unit cube with diagonally opposite corners at the origin and (1, 1, 1), and faces parallel to the coordinate planes. Let *S* be the surface of *E*, oriented with the outward-pointing normal. Use a CAS to find ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}$ using the divergence theorem if $\textbf{F}(x,y,z)=2xy\textbf{i}+3y{e}^{z}\textbf{j}+x\;\text{sin}\;z\textbf{k}.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=3e-2+\frac{1}{2}\text{sin}1\approx 6.5759$
:::

:::exercise {fs-id1167794099294} type= 
PROBLEM:
Use the divergence theorem to calculate the flux of $\textbf{F}(x,y,z)={x}^{3}\textbf{i}+{y}^{3}\textbf{j}+{z}^{3}\textbf{k}$ through sphere ${x}^{2}+{y}^{2}+{z}^{2}=1.$
:::

:::exercise {fs-id1167793936524} type= 
PROBLEM:
Find ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}$ and *S* is the outwardly oriented surface obtained by removing cube $[1,2]\;\times \;[1,2]\;\times \;[1,2]$ from cube $[0,2]\;\times \;[0,2]\;\times \;[0,2].$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=21$
:::

:::exercise {fs-id1167793411113} type= 
PROBLEM:
Consider radial vector field $\textbf{F}=\frac{\textbf{r}}{|\textbf{r}|}=\frac{\langle x,y,z\rangle}{{({x}^{2}+{y}^{2}+{z}^{2})}^{1\text{/}2}}.$ Compute the surface integral, where *S* is the surface of a sphere of radius *a* centered at the origin.
:::

:::exercise {fs-id1167793513143} type= 
PROBLEM:
Compute the flux of water through parabolic cylinder $S:y={x}^{2},$ from $0\le x\le 2,0\le z\le 3,$ if the velocity vector is $\textbf{F}(x,y,z)=3{z}^{2}\textbf{i}+6\textbf{j}+6xz\textbf{k}.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=72$
:::

:::exercise {fs-id1167793945547} type= 
PROBLEM:
**[T]** Use a CAS to find the flux of vector field $\textbf{F}(x,y,z)=z\textbf{i}+z\textbf{j}+\sqrt{{x}^{2}+{y}^{2}}\textbf{k}$ across the portion of hyperboloid ${x}^{2}+{y}^{2}={z}^{2}+1$ between planes $z=0$ and $z=\frac{\sqrt{3}}{3},$ oriented so the unit normal vector points away from the *z*-axis.
:::

:::exercise {fs-id1167793562352} type= 
PROBLEM:
**[T]** Use a CAS to find the flux of vector field $\textbf{F}(x,y,z)=({e}^{y}+x)\textbf{i}+(3\;\text{cos}(xz)-y)\textbf{j}+z\textbf{k}$ through surface *S*, where *S* is given by ${z}^{2}=4{x}^{2}+4{y}^{2}$ from $0\le z\le 4,$ oriented so the unit normal vector points downward.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=-\frac{32\pi}{3}\approx −33.5103$
:::

:::exercise {fs-id1167793430766} type= 
PROBLEM:
**[T]** Use a CAS to compute ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+2z\textbf{k}$ and *S* is the boundary of a part of solid sphere ${x}^{2}+{y}^{2}+{z}^{2}\le 2$ with $0\le z\le 1.$
:::

:::exercise {fs-id1167793472895} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=bx{y}^{2}\textbf{i}+b{x}^{2}y\textbf{j}+({x}^{2}+{y}^{2}){z}^{2}\textbf{k}$ and *S* is the boundary of the solid cylinder ${x}^{2}+{y}^{2}\le {a}^{2}$ and $0\le z\le b.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=\pi {a}^{4}{b}^{2}$
:::

:::exercise {fs-id1167793568781} type= 
PROBLEM:
**[T]** Use a CAS to calculate the flux of $\textbf{F}(x,y,z)=({x}^{3}+y\;\text{sin}\;z)\textbf{i}+({y}^{3}+z\;\text{sin}\;x)\textbf{j}+3z\textbf{k}$ across surface *S*, where *S* is the boundary of the solid bounded by hemispheres $z=\sqrt{4-{x}^{2}-{y}^{2}}$ and $z=\sqrt{1-{x}^{2}-{y}^{2}},$ and plane $z=0.$
:::

:::exercise {fs-id1167793948236} type= 
PROBLEM:
Use the divergence theorem to evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=xy\textbf{i}-\frac{1}{2}{y}^{2}\textbf{j}+z\textbf{k}$ and *S* is the surface consisting of three pieces: $z=4-3{x}^{2}-3{y}^{2},1\le z\le 4$ on the top; ${x}^{2}+{y}^{2}=1,0\le z\le 1$ on the sides; and $z=0$ on the bottom.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=\frac{5\pi}{2}$
:::

:::exercise {fs-id1167793940114} type= 
PROBLEM:
**[T]** Use a CAS and the divergence theorem to evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=(2x+y\;\text{cos}\;z)\textbf{i}+({x}^{2}-y)\textbf{j}+{y}^{2}z\textbf{k}$ and *S* is sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ orientated outward.
:::

:::exercise {fs-id1167793315682} type= 
PROBLEM:
Use the divergence theorem to evaluate ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j}+z\textbf{k}$ and *S* is the boundary of the solid enclosed by paraboloid $y={x}^{2}+{z}^{2}-2,$ cylinder ${x}^{2}+{z}^{2}=1,$ and plane $x+y=2,$ and *S* is oriented outward.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}=\frac{21\pi}{2}$
:::
For the following exercises, {index:Fourier’s law of heat transfer} states that the heat flow vector **F** at a point is proportional to the negative gradient of the temperature; that is, $\textbf{F}=\text{−}k\nabla T,$ which means that heat energy flows hot regions to cold regions. The constant $k>0$ is called the *conductivity*, which has metric units of joules per meter per second-kelvin or watts per meter-kelvin. A temperature function for region *D* is given. Use the divergence theorem to find net outward heat flux ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}=\text{−}k{\displaystyle \iint_{S}\nabla T\cdot \textbf{N}dS}$ across the boundary *S* of *D*, where $k=1.$

:::exercise {fs-id1167794176903} type= 
PROBLEM:
$T(x,y,z)=100+x+2y+z;$ $D=\{(x,y,z):0\le x\le 1,0\le y\le 1,0\le z\le 1\}$
:::

:::exercise {fs-id1167793584419} type= 
PROBLEM:
$T(x,y,z)=100+{e}^{\text{−}z};$ $D=\{(x,y,z):0\le x\le 1,0\le y\le 1,0\le z\le 1\}$
SOLUTION:
${e}^{-1}-1$
:::

:::exercise {fs-id1167793570744} type= 
PROBLEM:
$T(x,y,z)=100{e}^{\text{−}{x}^{2}-{y}^{2}-{z}^{2}};$ *D* is the sphere of radius *a* centered at the origin.
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* Justify your answer with a proof or a counterexample.

:::exercise {fs-id1167793355024} type= 
PROBLEM:
Vector field $\textbf{F}(x,y)={x}^{2}y\textbf{i}+{y}^{2}x\textbf{j}$ is conservative.
SOLUTION:
False
:::

:::exercise {fs-id1167793505513} type= 
PROBLEM:
For vector field $\textbf{F}(x,y)=P(x,y)\textbf{i}+Q(x,y)\textbf{j},$ if ${P}_{y}(x,y)={Q}_{x}(x,y)$ in open region $D,$ then ${\displaystyle \int_{C}Pdx+Qdy=0}.$
:::

:::exercise {fs-id1167794144431} type= 
PROBLEM:
The divergence of a vector field is a vector field.
SOLUTION:
False
:::

:::exercise {fs-id1167794021062} type= 
PROBLEM:
If $\text{curl}\;\textbf{F}=0,$ then $\textbf{F}$ is a conservative vector field.
:::
Draw the following vector fields.

:::exercise {fs-id1167793551421} type= 
PROBLEM:
$\textbf{F}(x,y)=\frac{1}{2}\textbf{i}+2x\textbf{j}$
SOLUTION:

> IMAGE {img:fs-id1167793755780} src=../../media/CNX_Calc_Figure_16_08_207.jpg
> alt: A vector field in two dimensions. All quadrants are shown. The arrows are larger the further from the y axis they become. They point up and to the right for positive x values and down and to the right for negative x values. The further from the y axis they are, the steeper the slope they have.

:::

:::exercise {fs-id1167793755796} type= 
PROBLEM:
$\text{F}(x,y)=\frac{\mathbf{<y,3x>}}{\sqrt{{x}^{2}+{y}^{2}}}$
:::
Are the following the vector fields conservative? If so, find the potential function $f$ such that $\textbf{F}=\nabla f.$

:::exercise {fs-id1167793368377} type= 
PROBLEM:
$\textbf{F}(x,y)=y\textbf{i}+(x-2{e}^{y})\textbf{j}$
SOLUTION:
Conservative, $f(x,y)=xy-2{e}^{y}$
:::

:::exercise {fs-id1167793499682} type= 
PROBLEM:
$\textbf{F}(x,y)=(6xy)\textbf{i}+(3{x}^{2}-y{e}^{y})\textbf{j}$
:::

:::exercise {fs-id1167794053653} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(2xy+{z}^{2})\textbf{i}+({x}^{2}+2yz)\textbf{j}+(2xz+{y}^{2})\textbf{k}$
SOLUTION:
Conservative, $f(x,y,z)={x}^{2}y+{y}^{2}z+{z}^{2}x$
:::

:::exercise {fs-id1167793613294} type= 
PROBLEM:
$\textbf{F}(x,y,z)=({e}^{x}y)\textbf{i}+({e}^{x}+z)\textbf{j}+({e}^{x}+{y}^{2})\textbf{k}$
:::
Evaluate the following integrals.

:::exercise {fs-id1167793945275} type= 
PROBLEM:
${\displaystyle \int\limits_{C}{x}^{2}dy+(2x-3xy)dx,}$ along $C:y=\frac{1}{2}x$ from (0, 0) to (4, 2)
SOLUTION:
$-\frac{16}{3}$
:::

:::exercise {fs-id1167793372865} type= 
PROBLEM:
${\displaystyle \int\limits_{C}ydx+x{y}^{2}dy,}$ where $C:x=\sqrt{t},y=t-1,0\le t\le 1$
:::

:::exercise {fs-id1167793502677} type= 
PROBLEM:
${\displaystyle \iint_{S}x{y}^{2}dS},$ where *S* is surface $z={x}^{2}-y,0\le x\le 1,0\le y\le 4$
SOLUTION:
$\frac{32\sqrt{2}}{9}(3\sqrt{3}-1)$
:::
Find the divergence and curl for the following vector fields.

:::exercise {fs-id1167793427798} type= 
PROBLEM:
$\textbf{F}(x,y,z)=3xyz\textbf{i}+xy{e}^{z}\textbf{j}-3xy\textbf{k}$
:::

:::exercise {fs-id1167793554495} type= 
PROBLEM:
$\textbf{F}(x,y,z)={e}^{x}\textbf{i}+{e}^{xy}\textbf{j}+{e}^{xyz}\textbf{k}$
SOLUTION:
Divergence: ${e}^{x}+x{e}^{xy}+xy{e}^{xyz},$ curl: $xz{e}^{xyz}\textbf{i}-yz{e}^{xyz}\textbf{j}+y{e}^{xy}\textbf{k}$
:::
Use Green’s theorem to evaluate the following integrals.

:::exercise {fs-id1167793541421} type= 
PROBLEM:
${\displaystyle \int\limits_{C}3xydx+2x{y}^{2}dy,}$ where *C* is a square with vertices (0, 0), (0, 2), (2, 2) and (2, 0)  oriented counterclockwise.
:::

:::exercise {fs-id1167793686562} type= 
PROBLEM:
${\displaystyle \int_{C}3ydx+(x+{e}^{y})dy,}$ where *C* is a circle centered at the origin with radius 3
SOLUTION:
$−18\pi$
:::
Use Stokes’ theorem to evaluate ${\displaystyle \iint_{S}\text{curl}\;\textbf{F}\cdot dS}.$

:::exercise {fs-id1167793373575} type= 
PROBLEM:
$\textbf{F}(x,y,z)=y\textbf{i}-x\textbf{j}+z\textbf{k},$ where $S$ is the upper half of the unit sphere
:::

:::exercise {fs-id1167794005232} type= 
PROBLEM:
$\textbf{F}(x,y,z)=y\textbf{i}+xyz\textbf{j}-2zx\textbf{k},$ where $S$ is the upward-facing paraboloid $z={x}^{2}+{y}^{2}$ lying in cylinder ${x}^{2}+{y}^{2}=1$
SOLUTION:
$\text{−}\pi$
:::
Use the divergence theorem to evaluate ${\displaystyle {\displaystyle \iint_{S}\textbf{F}\cdot dS}}.$

:::exercise {fs-id1167794127147} type= 
PROBLEM:
$\textbf{F}(x,y,z)=({x}^{3}y)\textbf{i}+(3y-{e}^{x})\textbf{j}+(z+x)\textbf{k},$ over cube $S$ defined by $−1\le x\le 1,$ $0\le y\le 2,$ $0\le z\le 2$
:::

:::exercise {fs-id1167793318541} type= 
PROBLEM:
$\textbf{F}(x,y,z)=(2xy)\textbf{i}+(\text{−}{y}^{2})\textbf{j}+(2{z}^{3})\textbf{k},$ where $S$ is bounded by paraboloid $z={x}^{2}+{y}^{2}$ and plane $z=2$
SOLUTION:
$24\pi$
:::

:::exercise {fs-id1167793368618} type= 
PROBLEM:
Find the amount of work performed by a 50-kg woman ascending a helical staircase with radius 2 m and height 100 m. The woman completes five revolutions during the climb. Use 9.8 m/s<sup>2</sup> as the acceleration due to gravity.
:::

:::exercise {fs-id1167794200433} type= 
PROBLEM:
Find the total mass of a thin wire in the shape of an upper semicircle with radius $\sqrt{2,}$ and a density function of $ρ(x,y)=y+{x}^{2}.$
SOLUTION:
$\sqrt{2}(2\sqrt{2}+\pi )=4+\pi \sqrt{2}$
:::

:::exercise {fs-id1167793402076} type= 
PROBLEM:
Find the total mass of a thin sheet in the shape of a hemisphere with radius 2 for $z\ge 0$ with a density function $ρ(x,y,z)=x+y+z.$
:::

:::exercise {fs-id1167794006347} type= 
PROBLEM:
Use the divergence theorem to compute the value of the flux integral over the unit sphere with $\textbf{F}(x,y,z)=3z\textbf{i}+2y\textbf{j}+2x\textbf{k}.$
SOLUTION:
$8\pi \text{/}3$
:::

## Glossary
- {def} **divergence theorem**: a theorem used to transform a difficult flux integral into an easier triple integral and vice versa
- {def} **Gauss’ law**: if *S* is a piecewise, smooth closed surface in a vacuum and *Q* is the total stationary charge inside of *S*, then the flux of electrostatic field **E** across *S* is $Q\text{/}{ε}_{0}$
- {def} **inverse-square law**: the electrostatic force at a given point is inversely proportional to the square of the distance from the source of the charge

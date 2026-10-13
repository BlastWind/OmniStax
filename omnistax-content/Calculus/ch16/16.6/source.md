# Surface Integrals

## Learning Objectives {section:learning-objectives}
- Find the parametric representations of a cylinder, a cone, and a sphere.
- Describe the surface integral of a scalar-valued function over a parametric surface.
- Use a surface integral to calculate the area of a given surface.
- Explain the meaning of an oriented surface, giving an example.
- Describe the surface integral of a vector field.
- Use surface integrals to solve applied problems.

We have seen that a line integral is an integral over a path in a plane or in space. However, if we wish to integrate over a surface (a two-dimensional object) rather than a path (a one-dimensional object) in space, then we need a new kind of integral that can handle integration over objects in higher dimensions. We can extend the concept of a line integral to a surface integral to allow us to perform this integration.
Surface integrals are important for the same reasons that line integrals are important. They have many applications to physics and engineering, and they allow us to develop higher dimensional versions of the Fundamental Theorem of Calculus. In particular, surface integrals allow us to generalize Green’s theorem to higher dimensions, and they appear in some important theorems we discuss in later sections.

## Parametric Surfaces
A surface integral is similar to a line integral, except the integration is done over a surface rather than a path. In this sense, surface integrals expand on our study of line integrals. Just as with line integrals, there are two kinds of surface integrals: a surface integral of a scalar-valued function and a surface integral of a vector field.
However, before we can integrate over a surface, we need to consider the surface itself. Recall that to calculate a scalar or vector line integral over curve *C*, we first need to parameterize *C*. In a similar way, to calculate a surface integral over surface *S*, we need to parameterize *S*. That is, we need a working concept of a {term:parameterized surface} (or a {term:parametric surface}), in the same way that we already have a concept of a parameterized curve.
A parameterized surface is given by a description of the form

$\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle .$  {eq:fs-id1167794293104}

Notice that this parameterization involves two parameters, *u* and *v*, because a surface is two-dimensional, and therefore two variables are needed to trace out the surface. The parameters *u* and *v* vary over a region called the parameter domain, or {term:parameter space}—the set of points in the *uv*-plane that can be substituted into **r**. Each choice of *u* and *v* in the parameter domain gives a point on the surface, just as each choice of a parameter *t* gives a point on a parameterized curve. The entire surface is created by making all possible choices of *u* and *v* over the parameter domain.

:::note [definition] Definition
Given a parameterization of surface $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle ,$ the {term:parameter domain} of the parameterization is the set of points in the *uv*-plane that can be substituted into **r**.
:::

:::example {ex:fs-id1167793711076} Parameterizing a Cylinder

:::exercise {fs-id1167793948708} type= 
PROBLEM:
Describe surface *S* parameterized by

$\textbf{r}(u,v)=\langle \text{cos}\;u,\text{sin}\;u,v\rangle ,\text{−}\infty <u<\infty ,\text{−}\infty <v<\infty .$  {eq:fs-id1167793967055}

SOLUTION:
To get an idea of the shape of the surface, we first plot some points. Since the parameter domain is all of ${\mathbb{R}}^{2},$ we can choose any value for *u* and *v* and plot the corresponding point. If $u=v=0,$ then $\textbf{r}(0,0)=\langle 1,0,0\rangle ,$ so point (1, 0, 0) is on *S*. Similarly, points $\textbf{r}(\pi ,2)=(−1,0,2)$ and $\textbf{r}(\frac{\pi}{2},4)=(0,1,4)$ are on *S*.
Although plotting points may give us an idea of the shape of the surface, we usually need quite a few points to see the shape. Since it is time-consuming to plot dozens or hundreds of points, we use another strategy. To visualize *S*, we visualize two families of curves that lie on *S.* In the first family of curves we hold *u* constant; in the second family of curves we hold *v* constant. This allows us to build a “skeleton” of the surface, thereby getting an idea of its shape.
First, suppose that *u* is a constant *K*. Then the curve traced out by the parameterization is $\langle \text{cos}\;K,\text{sin}\;K,v\rangle ,$ which gives a vertical line that goes through point $(\text{cos}\;K,\text{sin}\;K,v)$ in the *xy*-plane.
Now suppose that *v* is a constant *K.* Then the curve traced out by the parameterization is $\langle \text{cos}\;u,\text{sin}\;u,K\rangle ,$ which gives a circle in plane $z=K$ with radius 1 and center (0, 0, *K*).
If *u* is held constant, then we get vertical lines; if *v* is held constant, then we get circles of radius 1 centered around the vertical line that goes through the origin. Therefore the surface traced out by the parameterization is cylinder ${x}^{2}+{y}^{2}=1$ ([ref:CNX_Calc_Figure_16_06_001]).

> FIGURE {fig:CNX_Calc_Figure_16_06_001} src=../../media/CNX_Calc_Figure_16_06_001.jpg
> alt: Three diagrams in three dimensions. The first shows vertical lines around the origin. The second shows parallel circles all with center at the origin and radius of 1. The third shows the lines and circle. Together, they form the skeleton of a cylinder.
> caption: (a) Lines $\langle \text{cos}\;K,\text{sin}\;K,v\rangle$ for $K=0,\frac{\pi}{2},\pi ,\;\text{and}\;\frac{3\pi}{2}.$ (b) Circles $\langle \text{cos}\;u,\text{sin}\;u,K\rangle$ for $K=−2,−1,1,\;\text{and}\;2.$ (c) The lines and circles together. As *u* and *v* vary, they describe a cylinder.

Notice that if $x=\text{cos}\;u$ and $y=\text{sin}\;u,$ then ${x}^{2}+{y}^{2}=1,$ so points from *S* do indeed lie on the cylinder. Conversely, each point on the cylinder is contained in some circle $\langle \text{cos}\;u,\text{sin}\;u,k\rangle$ for some *k*, and therefore each point on the cylinder is contained in the parameterized surface ([ref:CNX_Calc_Figure_16_06_002]).

> FIGURE {fig:CNX_Calc_Figure_16_06_002} src=../../media/CNX_Calc_Figure_16_06_002.jpg
> alt: An image of a vertical cylinder in three dimensions with the center of its circular base located on the z axis.
> caption: Cylinder ${x}^{2}+{y}^{2}={r}^{2}$ has parameterization $\textbf{r}(u,v)=\langle r\;\text{cos}\;u,r\;\text{sin}\;u,v\rangle ,$ $0\le u\le 2\pi ,\text{−}\infty <v<\infty .$

COMMENTARY: Analysis
Notice that if we change the parameter domain, we could get a different surface. For example, if we restricted the domain to $0\le u\le \pi ,0<v<6,$ then the surface would be a half-cylinder of height 6.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794020307} type= 
PROBLEM:
Describe the surface with parameterization $\textbf{r}(u,v)=\langle 2\;\text{cos}\;u,2\;\text{sin}\;u,v\rangle ,0\le u<2\pi ,\text{−}\infty <v<\infty .$
SOLUTION:
Cylinder ${x}^{2}+{y}^{2}=4$
COMMENTARY: Hint
Hold *u* and *v* constant, and see what kind of curves result.
:::
:::
It follows from [ref:fs-id1167793711076] that we can parameterize all cylinders of the form ${x}^{2}+{y}^{2}={R}^{2}.$ If *S* is a cylinder given by equation ${x}^{2}+{y}^{2}={R}^{2},$ then a parameterization of *S* is

$\textbf{r}(u,v)=\langle R\;\text{cos}\;u,R\;\text{sin}\;u,v\rangle ,0\le u<2\pi ,\text{−}\infty <v<\infty .$  {eq:fs-id1167793368668}

We can also find different types of surfaces given their parameterization, or we can find a parameterization when we are given a surface.

:::example {ex:fs-id1167794199424} Describing a Surface

:::exercise {fs-id1167793847022} type= 
PROBLEM:
Describe surface *S* parameterized by

$\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,{u}^{2}\rangle ,0\le u<\infty ,0\le v<2\pi .$  {eq:fs-id1167793423482}

SOLUTION:
Notice that if *u* is held constant, then the resulting curve is a circle of radius *u* in plane $z={u}^{2}.$ Therefore, as *u* increases, the radius of the resulting circle increases. If *v* is held constant, then the resulting curve is a vertical parabola. Therefore, we expect the surface to be an elliptic paraboloid. To confirm this, notice that

$\begin{array}{rl}{x}^{2}+{y}^{2} & ={(u\;\text{cos}\;v)}^{2}+{(u\;\text{sin}\;v)}^{2} \\ & ={u}^{2}{\text{cos}}^{2}v+{u}^{2}{\text{sin}}^{2}v \\ & ={u}^{2} \\ & =z.\end{array}$  {eq:fs-id1167793561905}

Therefore, the surface is elliptic paraboloid ${x}^{2}+{y}^{2}=z$ ([ref:CNX_Calc_Figure_16_06_003]).

> FIGURE {fig:CNX_Calc_Figure_16_06_003} src=../../media/CNX_Calc_Figure_16_06_003.jpg
> alt: Two images in three dimensions. The first shows parallel circles on the z axis with radii increasing as z increases. Vertical parabolas opening up frame the circles, forming the skeleton of a paraboloid. The second shows the elliptic paraboloid, which is made of all the possible circles and vertical parabolas in the parameter domain.
> caption: (a) Circles arise from holding *u* constant; the vertical parabolas arise from holding *v* constant. (b) An elliptic paraboloid results from all choices of *u* and *v* in the parameter domain.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793844682} type= 
PROBLEM:
Describe the surface parameterized by $\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,u\rangle ,\text{−}\infty <u<\infty ,0\le v<2\pi .$
SOLUTION:
Cone ${x}^{2}+{y}^{2}={z}^{2}$
COMMENTARY: Hint
Hold *u* constant and see what kind of curves result. Imagine what happens as *u* increases or decreases.
:::
:::

:::example {ex:fs-id1167793689559} Finding a Parameterization

:::exercise {fs-id1167794175914} type= 
PROBLEM:
Give a parameterization of the cone ${x}^{2}+{y}^{2}={z}^{2}$ lying on or above the plane $z=−2.$
SOLUTION:
The horizontal cross-section of the cone at height $z=u$ is circle ${x}^{2}+{y}^{2}={u}^{2}.$ Therefore, a point on the cone at height *u* has coordinates $(u\;\text{cos}\;v,u\;\text{sin}\;v,u)$ for angle *v*. Hence, a parameterization of the cone is $\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,u\rangle .$ Since we are not interested in the entire cone, only the portion on or above plane $z=−2,$ the parameter domain is given by $−2\le u<\infty ,0\le v<2\pi$ ([ref:CNX_Calc_Figure_16_06_004]).

> FIGURE {fig:CNX_Calc_Figure_16_06_004} src=../../media/CNX_Calc_Figure_16_06_004.jpg
> alt: A three-dimensional diagram of the cone x^2 + y^2 = z^2, which opens up along the z axis for positive z values and opens down along the z axis for negative z values. The center is at the origin.
> caption: Cone ${x}^{2}+{y}^{2}={z}^{2}$ has parameterization

$r(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,u\rangle ,\text{−}\infty <u<\infty ,0\le v\le 2\pi .$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793432395} type= 
PROBLEM:
Give a parameterization for the portion of cone ${x}^{2}+{y}^{2}={z}^{2}$ lying in the first octant.
SOLUTION:
$\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,u\rangle ,$ $0<u<\infty ,0\le v<\frac{\pi}{2}$
COMMENTARY: Hint
Consider the parameter domain for this surface.
:::
:::
We have discussed parameterizations of various surfaces, but two important types of surfaces need a separate discussion: spheres and graphs of two-variable functions. To parameterize a sphere, it is easiest to use spherical coordinates. The sphere of radius $ρ$ centered at the origin is given by the parameterization

$\textbf{r}(ϕ,\theta )=\langle ρ\;\text{cos}\;\theta \;\text{sin}\;ϕ,ρ\;\text{sin}\;\theta \;\text{sin}\;ϕ,ρ\;\text{cos}\;ϕ\rangle ,0\le \theta \le 2\pi ,0\le ϕ\le \pi .$  {eq:fs-id1167793960182}

The idea of this parameterization is that as $ϕ$ sweeps downward from the positive *z*-axis, a circle of radius $ρ\;\text{sin}\;ϕ$ is traced out by letting $\theta$ run from 0 to $2\pi .$ To see this, let $ϕ$ be fixed. Then

$\begin{array}{rl}{x}^{2}+{y}^{2} & ={(ρ\;\text{cos}\;\theta \;\text{sin}\;ϕ)}^{2}+{(ρ\;\text{sin}\;\theta \;\text{sin}\;ϕ)}^{2} \\ & ={ρ}^{2}{\text{sin}}^{2}ϕ({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta ) \\ & ={ρ}^{2}{\text{sin}}^{2}ϕ \\ & ={(ρ\;\text{sin}\;ϕ)}^{2}.\end{array}$  {eq:fs-id1167793927955}

This results in the desired circle ([ref:CNX_Calc_Figure_16_06_005]).

> FIGURE {fig:CNX_Calc_Figure_16_06_005} src=../../media/CNX_Calc_Figure_16_06_005.jpg
> alt: A three-dimensional diagram of the sphere of radius rho.
> caption: The sphere of radius $ρ$ has parameterization $\textbf{r}(ϕ,\theta )=\langle ρ\;\text{cos}\;\theta \;\text{sin}\;ϕ,ρ\;\text{sin}\;\theta \;\text{sin}\;ϕ,ρ\;\text{cos}\;ϕ\rangle ,$ $0\le \theta \le 2\pi ,0\le ϕ\le \pi .$

Finally, to parameterize the graph of a two-variable function, we first let $z=f(x,y)$ be a function of two variables. The simplest parameterization of the graph of $f$ is $\textbf{r}(x,y)=\langle x,y,f(x,y)\rangle ,$ where *x* and *y* vary over the domain of $f$ ([ref:CNX_Calc_Figure_16_06_006]). For example, the graph of $f(x,y)={x}^{2}y$ can be parameterized by $\textbf{r}(x,y)=\langle x,y,{x}^{2}y\rangle ,$ where the parameters *x* and *y* vary over the domain of $f.$ If we only care about a piece of the graph of $f$—say, the piece of the graph over rectangle $[1,3]\;\times \;[2,5]$—then we can restrict the parameter domain to give this piece of the surface:

$\textbf{r}(x,y)=\langle x,y,{x}^{2}y\rangle ,1\le x\le 3,2\le y\le 5.$  {eq:fs-id1167793941499}

Similarly, if *S* is a surface given by equation $x=g(y,z)$ or equation $y=h(x,z),$ then a parameterization of *S* is
$\textbf{r}(y,z)=\langle g(y,z),y,z\rangle$ or $\textbf{r}(x,z)=\langle x,h(x,z),z\rangle ,$ respectively. For example, the graph of paraboloid $2y={x}^{2}+{z}^{2}$ can be parameterized by $\textbf{r}(x,z)=\langle x,\frac{{x}^{2}+{z}^{2}}{2},z\rangle ,0\le x<\infty ,0\le z<\infty .$ Notice that we do not need to vary over the entire domain of *y* because *x* and *z* are squared.

> FIGURE {fig:CNX_Calc_Figure_16_06_006} src=../../media/CNX_Calc_Figure_16_06_006.jpg
> alt: A three-dimensional diagram of a surface z = f(x,y) above its mapping in the two-dimensional x,y plane. The point (x,y) in the plane corresponds to the point z = f(x,y) on the surface.
> caption: The simplest parameterization of the graph of a function is $\textbf{r}(x,y)=\langle x,y,f(x,y)\rangle .$

Let’s now generalize the notions of smoothness and regularity to a parametric surface. Recall that curve parameterization $\textbf{r}(t),a\le t\le b$ is regular if $\textbf{r}'(t)≠0$ for all *t* in $[a,b].$ For a curve, this condition ensures that the image of **r** really is a curve, and not just a point. For example, consider curve parameterization $\textbf{r}(t)=\langle 1,2\rangle ,0\le t\le 5.$ The image of this parameterization is simply point $(1,2),$ which is not a curve. Notice also that $\textbf{r}'(t)=0.$ The fact that the derivative is the zero vector indicates we are not actually looking at a curve.
Analogously, we would like a notion of regularity for surfaces so that a surface parameterization really does trace out a surface. To motivate the definition of regularity of a surface parameterization, consider parameterization

$\textbf{r}(u,v)=\langle 0,\text{cos}\;v,1\rangle ,0\le u\le 1,0\le v\le \pi .$  {eq:fs-id1167794100687}

Although this parameterization appears to be the parameterization of a surface, notice that the image is actually a line ([ref:CNX_Calc_Figure_16_06_007]). How could we avoid parameterizations such as this? Parameterizations that do not give an actual surface? Notice that ${\textbf{r}}_{u}=\langle 0,0,0\rangle$ and ${\textbf{r}}_{v}=\langle 0,\text{−}\text{sin}\;v,0\rangle ,$ and the corresponding cross product is zero. The analog of the condition $\textbf{r}'(t)=0$ is that ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}$ is not zero for any point $(u,v)$ in the parameter domain, which is a regular parameterization.

> FIGURE {fig:CNX_Calc_Figure_16_06_007} src=../../media/CNX_Calc_Figure_16_06_007.jpg
> alt: A three-dimensional diagram of a line on the x,z plane where the z component is 1, the x component is 1, and the y component exists between -1 and 1.
> caption: The image of parameterization $\textbf{r}(u,v)=\langle 0,\text{cos}\;v,1\rangle ,0\le u\le 1,0\le v\le \pi$ is a line.

:::note [definition] Definition
Parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ is a {term:regular parameterization} if ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}$ is not zero for any point $(u,v)$ in the parameter domain.
:::
If parameterization **r** is regular, then the image of **r** is a two-dimensional object, as a surface should be. Throughout this chapter, parameterizations $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ are assumed to be regular.
Recall that curve parameterization $\textbf{r}(t),a\le t\le b$ is smooth if $\textbf{r}'(t)$ is continuous and $\textbf{r}'(t)≠0$ for all *t* in $[a,b].$ Informally, a curve parameterization is smooth if the resulting curve has no sharp corners. The definition of a smooth surface parameterization is similar. Informally, a surface parameterization is *smooth* if the resulting surface has no sharp corners.

:::note [definition] Definition
A surface parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ is *smooth* if vector ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}$ is not zero for any choice of *u* and *v* in the parameter domain.
:::
A surface may also be *piecewise smooth* if it has smooth faces but also has locations where the directional derivatives do not exist.

:::example {ex:fs-id1167794031907} Identifying Smooth and Nonsmooth Surfaces

:::exercise {fs-id1167794022047} type= 
PROBLEM:
Which of the figures in [ref:CNX_Calc_Figure_16_06_008] is smooth?

> FIGURE {fig:CNX_Calc_Figure_16_06_008} src=../../media/CNX_Calc_Figure_16_06_008.jpg
> alt: Two three-dimensional figures. The first surface is smooth. It looks like a tire with a large hole in the middle. The second is piecewise smooth. It is a pyramid with a rectangular base and four sides.
> caption: (a) This surface is smooth. (b) This surface is piecewise smooth.

SOLUTION:
The surface in [ref:CNX_Calc_Figure_16_06_008](a) can be parameterized by

$\textbf{r}(u,v)=\langle (2+\text{cos}\;v)\text{cos}\;u,(2+\text{cos}\;v)\text{sin}\;u,\text{sin}\;v\rangle ,0\le u<2\pi ,0\le v<2\pi$  {eq:fs-id1167793693498}

(we can use technology to verify). Notice that vectors

${\textbf{r}}_{u}=\langle \text{−}(2+\text{cos}\;v)\text{sin}\;u,(2+\text{cos}\;v)\text{cos}\;u,0\rangle \;\text{and}\;{\textbf{r}}_{v}=\langle \text{−}\text{sin}\;v\;\text{cos}\;u,\text{−}\text{sin}\;v\;\text{sin}\;u,\text{cos}\;v\rangle$  {eq:fs-id1167793501324}

exist for any choice of *u* and *v* in the parameter domain, and

$\begin{array}{rl}{\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v} & =\left|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \text{−}(2+\text{cos}\;v)\text{sin}\;u & (2+\text{cos}\;v)\text{cos}\;u & 0 \\ \text{−}\text{sin}\;v\;\text{cos}\;u & \text{−}\text{sin}\;v\;\text{sin}\;u & \text{cos}\;v\end{array}\right| \\ & =[(2+\text{cos}\;v)\text{cos}\;u\;\text{cos}\;v]\textbf{i}+[(2+\text{cos}\;v)\text{sin}\;u\;\text{cos}\;v]\textbf{j} \\ & \;+[(2+\text{cos}\;v)\text{sin}\;v\;{\text{sin}}^{2}u+(2+\text{cos}\;v)\text{sin}\;v\;{\text{cos}}^{2}u]\textbf{k} \\ & =[(2+\text{cos}\;v)\text{cos}\;u\;\text{cos}\;v]\textbf{i}+[(2+\text{cos}\;v)\text{sin}\;u\;\text{cos}\;v]\textbf{j}+[(2+\text{cos}\;v)\text{sin}\;v]\textbf{k}.\end{array}$  {eq:fs-id1167793371575}

The **k** component of this vector is zero only if $v=0$ or $v=\pi .$ If $v=0$ or $v=\pi ,$ then the only choices for *u* that make the **j** component zero are $u=0$ or $u=\pi .$ But, these choices of *u* do not make the **i** component zero. Therefore, ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}$ is not zero for any choice of *u* and *v* in the parameter domain, and the parameterization is smooth. Notice that the corresponding surface has no sharp corners.
In the pyramid in [ref:CNX_Calc_Figure_16_06_008](b), the sharpness of the corners ensures that directional derivatives do not exist at those locations. Therefore, the pyramid has no smooth parameterization. However, the pyramid consists of five smooth faces, and thus this surface is piecewise smooth.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793641895} type= 
PROBLEM:
Is the surface parameterization $\textbf{r}(u,v)=\langle {u}^{2v},v+1,\text{sin}\;u\rangle ,0\le u\le 2,0\le v\le 3$ smooth?
SOLUTION:
Yes
COMMENTARY: Hint
Investigate the cross product ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}.$
:::
:::

## Surface Area of a Parametric Surface
Our goal is to define a surface integral, and as a first step we have examined how to parameterize a surface. The second step is to define the surface area of a parametric surface. The notation needed to develop this definition is used throughout the rest of this chapter.
Let *S* be a surface with parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ over some parameter domain *D*. We assume here and throughout that the surface parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ is continuously differentiable—meaning, each component function has continuous partial derivatives. Assume for the sake of simplicity that *D* is a rectangle (although the following material can be extended to handle nonrectangular parameter domains). Divide rectangle *D* into subrectangles ${D}_{ij}$ with horizontal width $\text{Δ}u$ and vertical length $\text{Δ}v.$ Suppose that *i* ranges from 1 to *m* and *j* ranges from 1 to *n* so that *D* is subdivided into *mn* rectangles. This division of *D* into subrectangles gives a corresponding division of surface *S* into pieces ${S}_{ij}.$ Choose point ${P}_{ij}$ in each piece ${S}_{ij}.$ Point ${P}_{ij}$ corresponds to point $({u}_{i},{v}_{j})$ in the parameter domain.
Note that we can form a grid with lines that are parallel to the *u*-axis and the *v*-axis in the *uv*-plane. These grid lines correspond to a set of {term:grid curves} on surface *S* that is parameterized by $\textbf{r}(u,v).$ Without loss of generality, we assume that ${P}_{ij}$ is located at the corner of two grid curves, as in [ref:CNX_Calc_Figure_16_06_009]. If we think of **r** as a mapping from the *uv*-plane to ${\mathbb{R}}^{3},$ the grid curves are the image of the grid lines under **r**. To be precise, consider the grid lines that go through point $({u}_{i},{v}_{j}).$ One line is given by $x={u}_{i},y=v;$ the other is given by $x=u,y={v}_{j}.$ In the first grid line, the horizontal component is held constant, yielding a vertical line through $({u}_{i},{v}_{j}).$ In the second grid line, the vertical component is held constant, yielding a horizontal line through $({u}_{i},{v}_{j}).$ The corresponding grid curves are $\textbf{r}({u}_{i},v)$ and $\textbf{r}(u,{v}_{j}),$ and these curves intersect at point ${P}_{ij}.$

> FIGURE {fig:CNX_Calc_Figure_16_06_009} src=../../media/CNX_Calc_Figure_16_06_009.jpg
> alt: Two diagrams, showing that grid lines on a parameter domain correspond to grid curves on a surface. The first shows a two-dimensional rectangle in the u,v plane. The horizontal rectangle is in quadrant 1 and broken into 9x5 rectangles in a grid format. One rectangle Dij has side lengths delta u and delta v. The coordinates of the lower left corner are (u_i *, v_j *). In three dimensions, the surface curves above the x,y plane. The D_ij portion has become S_ij on the surface with lower left corner P_ij.
> caption: Grid lines on a parameter domain correspond to grid curves on a surface.

Now consider the vectors that are tangent to these grid curves. For grid curve $\textbf{r}({u}_{i},v),$ the tangent vector at ${P}_{ij}$ is

${\textbf{t}}_{v}({P}_{ij})={\textbf{r}}_{v}({u}_{i},{v}_{j})=\langle {x}_{v}({u}_{i},{v}_{j}),{y}_{v}({u}_{i},{v}_{j}),{z}_{v}({u}_{i},{v}_{j})\rangle .$  {eq:fs-id1167794069861}

For grid curve $\textbf{r}(u,{v}_{j}),$ the tangent vector at ${P}_{ij}$ is

${\textbf{t}}_{u}({P}_{ij})={\textbf{r}}_{u}({u}_{i},{v}_{j})=\langle {x}_{u}({u}_{i},{v}_{j}),{y}_{u}({u}_{i},{v}_{j}),{z}_{u}({u}_{i},{v}_{j})\rangle .$  {eq:fs-id1167793880304}

If vector $\textbf{N}={\textbf{t}}_{u}({P}_{ij})\;\times \;{\textbf{t}}_{v}({P}_{ij})$ exists and is not zero, then the tangent plane at ${P}_{ij}$ exists ([ref:CNX_Calc_Figure_16_06_010]). If piece ${S}_{ij}$ is small enough, then the tangent plane at point ${P}_{ij}$ is a good approximation of piece ${S}_{ij}.$

> FIGURE {fig:CNX_Calc_Figure_16_06_010} src=../../media/CNX_Calc_Figure_16_06_010.jpg
> alt: Two diagrams. The one on the left is two dimensional and in the first quadrant of the u,v coordinate plane. A point u_0 is marked on the horizontal u axis, and a point v_0 is marked on the vertical v axis. The point (u_0, v_0) is shown in the plane. The diagram on the right shows the grid curve version. Now, the u_0 is marked as r(u_0, v) and the v_0 is marked as r(u, v_0). The (u_0, v_0) point is labeled P. Coming out of P are three arrows: one is a vertical N arrow, and the other two are t_u and t_v for the tangent plane.
> caption: If the cross product of vectors ${\textbf{t}}_{u}$ and ${\textbf{t}}_{v}$ exists, then there is a tangent plane.

The tangent plane at ${P}_{ij}$ contains vectors ${\textbf{t}}_{u}({P}_{ij})$ and ${\textbf{t}}_{v}({P}_{ij}),$ and therefore the parallelogram spanned by ${\textbf{t}}_{u}({P}_{ij})$ and ${\textbf{t}}_{v}({P}_{ij})$ is in the tangent plane. Since the original rectangle in the *uv*-plane corresponding to ${S}_{ij}$ has width $\text{Δ}u$ and length $\text{Δ}v,$ the parallelogram that we use to approximate ${S}_{ij}$ is the parallelogram spanned by $\text{Δ}u{\textbf{t}}_{u}({P}_{ij})$ and $\text{Δ}v{\textbf{t}}_{v}({P}_{ij}).$ In other words, we scale the tangent vectors by the constants $\text{Δ}u$ and $\text{Δ}v$ to match the scale of the original division of rectangles in the parameter domain. Therefore, the area of the parallelogram used to approximate the area of ${S}_{ij}$ is

$\text{Δ}{S}_{ij}\approx \| (\text{Δ}u{\textbf{t}}_{u}({P}_{ij}))\;\times \;(\text{Δ}v{\textbf{t}}_{v}({P}_{ij}))\| =\| {\textbf{t}}_{u}({P}_{ij})\;\times \;{\textbf{t}}_{v}({P}_{ij})\| \text{Δ}u\text{Δ}v.$  {eq:fs-id1167794329277}

Varying point ${P}_{ij}$ over all pieces ${S}_{ij}$ and the previous approximation leads to the following definition of surface area of a parametric surface ([ref:CNX_Calc_Figure_16_06_011]).

> FIGURE {fig:CNX_Calc_Figure_16_06_011} src=../../media/CNX_Calc_Figure_16_06_011.jpg
> alt: A surface S_ij that looks like a curved parallelogram. Point P_ij is at the bottom left corner, and two blue arrows stretch from this point to the upper left and lower right corners of the surface. Two red arrows also stretch out from this point, and they are labeled t_v delta v and t_u delta u. These form two sides of a parallelogram that approximates the piece of surface of S_ij. The other two sides are drawn as dotted lines.
> caption: The parallelogram spanned by ${\textbf{t}}_{u}$ and ${\textbf{t}}_{v}$ approximates the piece of surface ${S}_{ij}.$

:::note [definition] Definition
Let $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ with parameter domain *D* be a smooth parameterization of surface *S*. Furthermore, assume that *S* is traced out only once as $(u,v)$ varies over *D*. The {term:surface area} of *S* is

$$ {\displaystyle \iint_{D}\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| dA}, $$  {eq:fs-id1167793991244}

where ${\textbf{t}}_{u}=\langle \frac{\partial x}{\partial u},\frac{\partial y}{\partial u},\frac{\partial z}{\partial u}\rangle$ and ${\textbf{t}}_{v}=\langle \frac{\partial x}{\partial v},\frac{\partial y}{\partial v},\frac{\partial z}{\partial v}\rangle$ and all partial derivatives are continuous.
:::

:::example {ex:fs-id1167793383116} Calculating Surface Area

:::exercise {fs-id1167793383118} type= 
PROBLEM:
Calculate the lateral surface area (the area of the “side,” not including the base) of the right circular cone with height *h* and radius *r*.
SOLUTION:
Before calculating the surface area of this cone using [ref:fs-id1167793991244], we need a parameterization. We assume this cone is in ${\mathbb{R}}^{3}$ with its vertex at the origin ([ref:CNX_Calc_Figure_16_06_012]). To obtain a parameterization, let $\alpha$ be the angle that is swept out by starting at the positive *z*-axis and ending at the cone, and let $k=\text{tan}\;\alpha .$ For a height value *v* with $0\le v\le h,$ the radius of the circle formed by intersecting the cone with plane $z=v$ is $kv.$ Therefore, a parameterization of this cone is

$\textbf{s}(u,v)=\langle kv\;\text{cos}\;u,kv\;\text{sin}\;u,v\rangle ,0\le u<2\pi ,0\le v\le h.$  {eq:fs-id1167794160364}

The idea behind this parameterization is that for a fixed *v* value, the circle swept out by letting *u* vary is the circle at height *v* and radius *kv*. As *v* increases, the parameterization sweeps out a “stack” of circles, resulting in the desired cone.

> FIGURE {fig:CNX_Calc_Figure_16_06_012} src=../../media/CNX_Calc_Figure_16_06_012.jpg
> alt: A right circular cone in three dimensions, opening upwards on the z axis. It has radius r = kh and height h with the given parameterization. Alpha is the angle that is swept out by starting at the positive z-axis and ending at the cone. It is noted that k is equal to the tangent of alpha.
> caption: The right circular cone with radius *r = kh* and height *h* has parameterization $\textbf{s}(u,v)=\langle kv\;\text{cos}\;u,kv\;\text{sin}\;u,v\rangle ,0\le u<2\pi ,0\le v\le h.$

With a parameterization in hand, we can calculate the surface area of the cone using [ref:fs-id1167793991244]. The tangent vectors are ${\textbf{t}}_{u}=\langle \text{−}kv\;\text{sin}\;u,kv\;\text{cos}\;u,0\rangle$ and ${\textbf{t}}_{v}=\langle k\;\text{cos}\;u,k\;\text{sin}\;u,1\rangle .$ Therefore,

$\begin{array}{rl}{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v} & =\left|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \text{−}kv\;\text{sin}\;u & kv\;\text{cos}\;u & 0 \\ k\;\text{cos}\;u & k\;\text{sin}\;u & 1\end{array}\right| \\ & =\langle kv\;\text{cos}\;u,kv\;\text{sin}\;u,\text{−}{k}^{2}v\;{\text{sin}}^{2}u-{k}^{2}v\;{\text{cos}}^{2}u\rangle \\ & =\langle kv\;\text{cos}\;u,kv\;\text{sin}\;u,\text{−}{k}^{2}v\rangle .\end{array}$  {eq:fs-id1167793262752}

The magnitude of this vector is

$\begin{array}{rl}\| \langle kv\;\text{cos}\;u,kv\;\text{sin}\;u,\text{−}{k}^{2}v\rangle \| & =\sqrt{{k}^{2}{v}^{2}{\text{cos}}^{2}u+{k}^{2}{v}^{2}{\text{sin}}^{2}u+{k}^{4}{v}^{2}} \\ & =\sqrt{{k}^{2}{v}^{2}+{k}^{4}{v}^{2}} \\ & =kv\sqrt{1+{k}^{2}}.\end{array}$  {eq:fs-id1167793495823}

By [ref:fs-id1167793991244], the surface area of the cone is

$\begin{array}{rl}{\displaystyle \iint_{D}\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| dA} & ={\displaystyle \int_{0}^{h}{\displaystyle \int_{0}^{2\pi}kv\sqrt{1+{k}^{2}}}dudv} \\ & =2\pi k\sqrt{1+{k}^{2}}{\displaystyle \int_{0}^{h}vdv} \\ & =2\pi k\sqrt{1+{k}^{2}}{[\frac{{v}^{2}}{2}]}_{0}^{h} \\ & =\pi k{h}^{2}\sqrt{1+{k}^{2}}.\end{array}$  {eq:fs-id1167793374708}

Since $k=\text{tan}\;\alpha =r\text{/}h,$

$\begin{array}{rl}\pi k{h}^{2}\sqrt{1+{k}^{2}} & =\pi \frac{r}{h}{h}^{2}\sqrt{1+\frac{{r}^{2}}{{h}^{2}}} \\ & =\pi rh\sqrt{1+\frac{{r}^{2}}{{h}^{2}}} \\ & =\pi r\sqrt{{h}^{2}+{h}^{2}(\frac{{r}^{2}}{{h}^{2}})} \\ & =\pi r\sqrt{{h}^{2}+{r}^{2}}.\end{array}$  {eq:fs-id1167793879358}

Therefore, the lateral surface area of the cone is $\pi r\sqrt{{h}^{2}+{r}^{2}}.$
COMMENTARY: Analysis
The surface area of a right circular cone with radius *r* and height *h* is usually given as $\pi {r}^{2}+\pi r\sqrt{{h}^{2}+{r}^{2}}.$ The reason for this is that the circular base is included as part of the cone, and therefore the area of the base $\pi {r}^{2}$ is added to the lateral surface area $\pi r\sqrt{{h}^{2}+{r}^{2}}$ that we found.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793619916} type= 
PROBLEM:
Find the surface area of the surface with parameterization $\textbf{r}(u,v)=\langle u+v,{u}^{2},2v\rangle ,0\le u\le 3,0\le v\le 2.$
SOLUTION:
$\approx 43.02$
COMMENTARY: Hint
Use [ref:fs-id1167793991244].
:::
:::

:::example {ex:fs-id1167794069998} Calculating Surface Area

:::exercise {fs-id1167794070000} type= 
PROBLEM:
Show that the surface area of the sphere ${x}^{2}+{y}^{2}+{z}^{2}={r}^{2}$ is $4\pi {r}^{2}.$
SOLUTION:
The sphere has parameterization

$\langle r\;\text{cos}\;\theta \;\text{sin}\;ϕ,r\;\text{sin}\;\theta \;\text{sin}\;ϕ,r\;\text{cos}\;ϕ\rangle ,0\le \theta <2\pi ,0\le ϕ\le \pi .$  {eq:fs-id1167793409052}

The tangent vectors are

${\textbf{t}}_{\theta}=\langle \text{−}r\;\text{sin}\;\theta \;\text{sin}\;ϕ,r\;\text{cos}\;\theta \;\text{sin}\;ϕ,0\rangle \;\text{and}\;{\textbf{t}}_{ϕ}=\langle r\;\text{cos}\;\theta \;\text{cos}\;ϕ,r\;\text{sin}\;\theta \;\text{cos}\;ϕ,\text{−}r\;\text{sin}\;ϕ\rangle .$  {eq:fs-id1167793953357}

Therefore,

$\begin{array}{rl}{\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta} & =\langle {r}^{2}\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,{r}^{2}\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,{r}^{2}{\text{sin}}^{2}\theta \;\text{sin}\;ϕ\;\text{cos}\;ϕ+{r}^{2}{\text{cos}}^{2}\theta \;\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle \\ & =\langle {r}^{2}\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,{r}^{2}\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,{r}^{2}\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle .\end{array}$  {eq:fs-id1167793952380}

Now,

$\begin{array}{rl}\| {\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta}\| & =\sqrt{{r}^{4}{\text{sin}}^{4}ϕ\;{\text{cos}}^{2}\theta +{r}^{4}{\text{sin}}^{4}ϕ\;{\text{sin}}^{2}\theta +{r}^{4}{\text{sin}}^{2}ϕ\;{\text{cos}}^{2}ϕ} \\ & =\sqrt{{r}^{4}{\text{sin}}^{4}ϕ+{r}^{4}{\text{sin}}^{2}ϕ\;{\text{cos}}^{2}ϕ} \\ & ={r}^{2}\sqrt{{\text{sin}}^{2}ϕ} \\ & ={r}^{2}\;\text{sin}\;ϕ.\end{array}$  {eq:fs-id1167793589256}

Notice that $\text{sin}\;ϕ\ge 0$ on the parameter domain because $0\le ϕ<\pi ,$ and this justifies equation $\sqrt{{\text{sin}}^{2}ϕ}=\text{sin}\;ϕ.$ The surface area of the sphere is

${\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi}{r}^{2}\text{sin}\;ϕdϕd\theta}}={r}^{2}{\displaystyle \int_{0}^{2\pi}2d\theta}=4\pi {r}^{2}.$  {eq:fs-id1167794222805}

We have derived the familiar formula for the surface area of a sphere using surface integrals.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794054399} type= 
PROBLEM:
Show that the surface area of cylinder ${x}^{2}+{y}^{2}={r}^{2},0\le z\le h$ is $2\pi rh.$ Notice that this cylinder does not include the top and bottom circles.
SOLUTION:
With the standard parameterization of a cylinder, [ref:fs-id1167793991244] shows that the surface area is $2\pi rh.$
COMMENTARY: Hint
Use the standard parameterization of a cylinder and follow the previous example.
:::
:::
In addition to parameterizing surfaces given by equations or standard geometric shapes such as cones and spheres, we can also parameterize surfaces of revolution. Therefore, we can calculate the surface area of a surface of revolution by using the same techniques. Let $y=f(x)\ge 0$ be a positive single-variable function on the domain $a\le x\le b$ and let *S* be the surface obtained by rotating $f$ about the *x*-axis ([ref:CNX_Calc_Figure_16_06_013]). Let $\theta$ be the angle of rotation. Then, *S* can be parameterized with parameters *x* and $\theta$ by

$\textbf{r}(x,\theta )=\langle x,f(x)\text{cos}\;\theta ,f(x)\text{sin}\;\theta \rangle ,a\le x\le b,0\le \theta <2\pi .$  {eq:fs-id1167793566792}

> FIGURE {fig:CNX_Calc_Figure_16_06_013} src=../../media/CNX_Calc_Figure_16_06_013.jpg
> alt: Two diagrams, a and b, showing the surface of revolution. The first shows three dimensions. In the (x,y) plane, a curve labeled y = f(x) is drawn in quadrant 1. A line is drawn from the endpoint of the curve down to the x axis, and it is labeled f(x). The second shows the same three dimensional view. However, the curve from the first diagram has been rotated to form a three dimensional shape about the x axis. The boundary is still labeled y = f(x), as the curve in the first plane was. The opening of the three dimensional shape is circular with the radius f(x), just as the line from the curve to the x axis in the plane of the first diagram was labeled. A point on the opening’s boundary is labeled (x,y,z), the distance from the x axis to this point is drawn and labeled f(x), and the height is drawn and labeled z. The height is perpendicular to the x,y plane and, as such, the original f(x) line drawn from the first diagram. The angle between this line and the line from the x axis to (x,y,z) is labeled theta.
> caption: We can parameterize a surface of revolution by $\textbf{r}(x,\theta )=\langle x,f(x)\text{cos}\;\theta ,f(x)\text{sin}\;\theta \rangle ,$ $a\le x\le b,0\le x<2\pi .$

:::example {ex:fs-id1167793561618} Calculating Surface Area

:::exercise {fs-id1167791724494} type= 
PROBLEM:
Find the area of the surface of revolution obtained by rotating $y={x}^{2},0\le x\le b$ about the *x*-axis ([ref:CNX_Calc_Figure_16_06_014]).

> FIGURE {fig:CNX_Calc_Figure_16_06_014} src=../../media/CNX_Calc_Figure_16_06_014.jpg
> alt: A solid of revolution drawn in two dimensions. The solid is formed by rotating the function y = x^2 about the x axis. A point C is marked on the x axis between 0 and x’, which marks the opening of the solid.
> caption: A surface integral can be used to calculate the surface area of this solid of revolution.

SOLUTION:
This surface has parameterization

$\textbf{r}(x,\theta )=\langle x,{x}^{2}\text{cos}\;\theta ,{x}^{2}\text{sin}\;\theta \rangle ,0\le x\le b,0\le \theta <2\pi .$  {eq:fs-id1167793628644}

The tangent vectors are ${\textbf{t}}_{x}=\langle 1,2x\;\text{cos}\;\theta ,2x\;\text{sin}\;\theta \rangle \;\text{and}\;{\textbf{t}}_{\theta}=\langle 0,\text{−}{x}^{2}\text{sin}\;\theta ,{x}^{2}\text{cos}\;\theta \rangle .$ Therefore,

$\begin{array}{rl}{\textbf{t}}_{x}\;\times \;{\textbf{t}}_{\theta} & =\langle 2{x}^{3}{\text{cos}}^{2}\theta +2{x}^{3}{\text{sin}}^{2}\theta ,\text{−}{x}^{2}\text{cos}\;\theta ,\text{−}{x}^{2}\text{sin}\;\theta \rangle \\ & =\langle 2{x}^{3},\text{−}{x}^{2}\text{cos}\;\theta ,\text{−}{x}^{2}\text{sin}\;\theta \rangle \end{array}$  {eq:fs-id1167793244262}

and

$\begin{array}{ll}\mathbf{||{\textbf{t}}_{x}\;\times \;{\textbf{t}}_{\theta}||} & =\sqrt{4{x}^{6}+{x}^{4}{\text{cos}}^{2}\theta +{x}^{4}{\text{sin}}^{2}\theta} \\ & =\sqrt{4{x}^{6}+{x}^{4}} \\ & ={x}^{2}\sqrt{4{x}^{2}+1}.\end{array}$  {eq:fs-id1167794121529}

The area of the surface of revolution is

$\begin{array}{rl}{\displaystyle \int_{0}^{b}{\displaystyle \int_{0}^{\pi}{x}^{2}\sqrt{4{x}^{2}+1}d\theta dx}} & =2\pi {\displaystyle \int_{0}^{b}{x}^{2}\sqrt{4{x}^{2}+1}}dx \\ & =2\pi {[\frac{1}{64}(2\sqrt{4{x}^{2}+1}(8{x}^{3}+x){-\text{sinh}}^{−1}(2x))]}_{0}^{b} \\ & =2\pi [\frac{1}{64}(2\sqrt{4{b}^{2}+1}(8{b}^{3}+b){-\text{sinh}}^{−1}(2b))].\end{array}$  {eq:fs-id1167793848794}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793430752} type= 
PROBLEM:
Use [ref:fs-id1167793991244] to find the area of the surface of revolution obtained by rotating curve $y=\text{sin}\;x,0\le x\le \pi$ about the *x*-axis.
SOLUTION:
$2\pi (\sqrt{2}+{\text{sinh}}^{−1}(1))$
COMMENTARY: Hint
Use the parameterization of surfaces of revolution given before [ref:fs-id1167794069998].
:::
:::

## Surface Integral of a Scalar-Valued Function
Now that we can parameterize surfaces and we can calculate their surface areas, we are able to define surface integrals. First, let’s look at the surface integral of a scalar-valued function. Informally, the surface integral of a scalar-valued function is an analog of a scalar line integral in one higher dimension. The domain of integration of a scalar line integral is a parameterized curve (a one-dimensional object); the domain of integration of a scalar surface integral is a parameterized surface (a two-dimensional object). Therefore, the definition of a surface integral follows the definition of a line integral quite closely. For scalar line integrals, we chopped the domain curve into tiny pieces, chose a point in each piece, computed the function at that point, and took a limit of the corresponding Riemann sum. For scalar surface integrals, we chop the domain *region* (no longer a curve) into tiny pieces and proceed in the same fashion.
Let *S* be a piecewise smooth surface with parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ with parameter domain *D* and let $f(x,y,z)$ be a function with a domain that contains *S.* For now, assume the parameter domain *D* is a rectangle, but we can extend the basic logic of how we proceed to any parameter domain (the choice of a rectangle is simply to make the notation more manageable). Divide rectangle *D* into subrectangles ${D}_{ij}$ with horizontal width $\text{Δ}u$ and vertical length $\text{Δ}v.$ Suppose that *i* ranges from 1 to *m* and *j* ranges from 1 to *n* so that *D* is subdivided into *mn* rectangles. This division of *D* into subrectangles gives a corresponding division of *S* into pieces ${S}_{ij}.$ Choose point ${P}_{ij}$ in each piece ${S}_{ij},$ evaluate ${P}_{ij}$ at $f$, and multiply by area $\text{Δ}{S}_{ij}$ to form the Riemann sum

${\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({P}_{ij})}}\text{Δ}{S}_{ij}.$  {eq:fs-id1167794042878}

To define a surface integral of a scalar-valued function, we let the areas of the pieces of *S* shrink to zero by taking a limit.

:::note [definition] Definition
The {term:surface integral of a scalar-valued function} of $f$ over a piecewise smooth surface *S* is

${\displaystyle \iint\limits_{S}f(x,y,z)}dS=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({P}_{ij})}}\text{Δ}{S}_{ij}.$  {eq:fs-id1167794160180}

:::
Again, notice the similarities between this definition and the definition of a scalar line integral. In the definition of a line integral we chop a curve into pieces, evaluate a function at a point in each piece, and let the length of the pieces shrink to zero by taking the limit of the corresponding Riemann sum. In the definition of a surface integral, we chop a surface into pieces, evaluate a function at a point in each piece, and let the area of the pieces shrink to zero by taking the limit of the corresponding Riemann sum. Thus, a surface integral is similar to a line integral but in one higher dimension.
The definition of a scalar line integral can be extended to parameter domains that are not rectangles by using the same logic used earlier. The basic idea is to chop the parameter domain into small pieces, choose a sample point in each piece, and so on. The exact shape of each piece in the sample domain becomes irrelevant as the areas of the pieces shrink to zero.
Scalar surface integrals are difficult to compute from the definition, just as scalar line integrals are. To develop a method that makes surface integrals easier to compute, we approximate surface areas $\text{Δ}{S}_{ij}$ with small pieces of a tangent plane, just as we did in the previous subsection. Recall the definition of vectors ${\textbf{t}}_{u}$ and ${\textbf{t}}_{v}\text{:}$

${\textbf{t}}_{u}=\langle \frac{\partial x}{\partial u},\frac{\partial y}{\partial u},\frac{\partial z}{\partial u}\rangle \;\text{and}\;{\textbf{t}}_{v}=\langle \frac{\partial x}{\partial v},\frac{\partial y}{\partial v},\frac{\partial z}{\partial v}\rangle .$  {eq:fs-id1167793547598}

From the material we have already studied, we know that

$\text{Δ}{S}_{ij}\approx \| {\textbf{t}}_{u}({P}_{ij})\;\times \;{\textbf{t}}_{v}({P}_{ij})\| \text{Δ}u\text{Δ}v.$  {eq:fs-id1167793618724}

Therefore,

${\displaystyle \iint_{S}f(x,y,z)dS\approx \lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({P}_{ij})\| {\textbf{t}}_{u}({P}_{ij})\;\times \;{\textbf{t}}_{v}({P}_{ij})\| \text{Δ}u\text{Δ}v}}}.$  {eq:fs-id1167793463617}

This approximation becomes arbitrarily close to $\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({P}_{ij})\text{Δ}{S}_{ij}}}$ as we increase the number of pieces ${S}_{ij}$ by letting *m* and *n* go to infinity. Therefore, we have the following equation to calculate scalar surface integrals:

$$ {\displaystyle \iint_{S}f(x,y,z)dS}={\displaystyle \iint\limits_{D}f(\textbf{r}(u,v))}\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| dA. $$  {eq:fs-id1167793757749}

[ref:fs-id1167793757749] allows us to calculate a surface integral by transforming it into a double integral. This equation for surface integrals is analogous to [ref:fs-id1167793886491](module:m54012) for line integrals:

${\displaystyle \int_{C}f(x,y,z)ds}={\displaystyle \int_{a}^{b}f(\textbf{r}(t))}\| \mathbf{{r}^{'}}(t)\| dt.$  {eq:fs-id1167793355027}

In this case, vector ${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}$ is perpendicular to the surface, whereas vector $\mathbf{{r}^{'}}(t)$ is tangent to the curve.

:::example {ex:fs-id1167793829672} Calculating a Surface Integral

:::exercise {fs-id1167793829675} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}5}dS,$ where $S$ is the surface with parameterization $\textbf{r}(u,v)=\langle u,{u}^{2},v\rangle$ for $0\le u\le 2$ and $0\le v\le u.$
SOLUTION:
Notice that this parameter domain *D* is a triangle, and therefore the parameter domain is not rectangular. This is not an issue though, because [ref:fs-id1167793757749] does not place any restrictions on the shape of the parameter domain.
To use [ref:fs-id1167793757749] to calculate the surface integral, we first find vector ${\textbf{t}}_{u}$ and ${\textbf{t}}_{v}.$ Note that ${\textbf{t}}_{u}=\langle 1,2u,0\rangle$ and ${\textbf{t}}_{v}=\langle 0,0,1\rangle .$ Therefore,

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\left|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ 1 & 2u & 0 \\ 0 & 0 & 1\end{array}\right|=\langle 2u,−1,0\rangle$  {eq:fs-id1167793286889}

and

$\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| =\sqrt{1+4{u}^{2}}.$  {eq:fs-id1167793719993}

By [ref:fs-id1167793757749],

$\begin{array}{rl}{\displaystyle \iint_{S}5}dS & =5{\displaystyle \iint_{D}\sqrt{1+4{u}^{2}}}dA \\ & =5{\displaystyle \int_{0}^{2}{\displaystyle \int_{0}^{u}\sqrt{1+4{u}^{2}}}}dvdu=5{\displaystyle \int_{0}^{2}u\sqrt{1+4{u}^{2}}}du \\ & =5{[\frac{{(1+4{u}^{2})}^{3\text{/}2}}{3}]}_{0}^{2}=\frac{5({17}^{3\text{/}2}-1)}{12}\approx 28.79.\end{array}$  {eq:fs-id1167793616552}

:::
:::

:::example {ex:fs-id1167794214134} Calculating the Surface Integral of a Cylinder

:::exercise {fs-id1167794214136} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}(x+{y}^{2})dS},$ where *S* is cylinder ${x}^{2}+{y}^{2}=4,0\le z\le 3$ ([ref:CNX_Calc_Figure_16_06_015]).

> FIGURE {fig:CNX_Calc_Figure_16_06_015} src=../../media/CNX_Calc_Figure_16_06_015.jpg
> alt: A graph in three dimensions of a cylinder. The base of the cylinder is on the (x,z) plane, with center on the y axis. It stretches along the y axis.
> caption: Integrating function $f(x,y,z)=x+{y}^{2}$ over a cylinder.

SOLUTION:
To calculate the surface integral, we first need a parameterization of the cylinder. Following [ref:fs-id1167793711076], a parameterization is

$\textbf{r}(u,v)=\langle 2\text{cos}\;u,2\text{sin}\;u,v\rangle ,0\le u\le 2\pi ,0\le v\le 3.$  {eq:fs-id1167793372888}

The tangent vectors are ${\textbf{t}}_{u}=\langle -2\text{sin}\;u,2\text{cos}\;u,0\rangle$ and ${\textbf{t}}_{v}=\langle 0,0,1\rangle .$ Then,

${\text{t}}_{u}\;\times \;{\text{t}}_{v}=\left|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ -2\text{sin}\;u & 2\text{cos}\;u & 0 \\ 0 & 0 & 1\end{array}\right|=\langle 2\text{cos}\;u,2\text{sin}\;u,0\rangle$  {eq:fs-id1167794094407}

and $\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| =\sqrt{{4\text{cos}}^{2}u+{4\text{sin}}^{2}u}=2.$ By [ref:fs-id1167793757749],

$\begin{array}{l}\; \\ \; \\ \; \\ \hspace{1.2em}\iint_{S}f(x,y,z)dS=\iint_{D}f(\text{r}(u,v))\| {\text{t}}_{u}\;\times \;{\text{t}}_{v}\| \;dA \\ =\int_{0}^{3}\int_{0}^{2\pi}(2\text{cos}\;u+4{\text{sin}}^{2}u)2dudv \\ =2\int_{0}^{3}{[2\text{sin}\;u+2u-sin(2u)]}_{0}^{2\pi}dv=2\int_{0}^{3}4\pi dv=24\pi .\end{array}$  {eq:fs-id1167793554035}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793939823} type= 
PROBLEM:
Calculate ${\displaystyle \iint_{S}({x}^{2}-z)}dS,$ where *S* is the surface with parameterization $\textbf{r}(u,v)=\langle v,{u}^{2}+{v}^{2},1\rangle ,0\le u\le 2,0\le v\le 3.$
SOLUTION:
24
COMMENTARY: Hint
Use [ref:fs-id1167793757749].
:::
:::

:::example {ex:fs-id1167793498684} Calculating the Surface Integral of a Piece of a Sphere

:::exercise {fs-id1167793498687} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}f(x,y,z)dS},$ where $f(x,y,z)={z}^{2}$ and *S* is the surface that consists of the piece of sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ that lies on or above plane $z=1$ and the disk that is enclosed by intersection plane $z=1$ and the given sphere ([ref:CNX_Calc_Figure_16_06_016]).

> FIGURE {fig:CNX_Calc_Figure_16_06_016} src=../../media/CNX_Calc_Figure_16_06_016.jpg
> alt: A diagram in three dimensions of the upper half of a sphere. The center is at the origin, and the radius is 2. The top part above the plane z=1 is cut off and shaded; the rest is simply an outline of the hemisphere. The top section has center at (0,0,1) and radius of radical three.
> caption: Calculating a surface integral over surface *S*.

SOLUTION:
Notice that *S* is not smooth but is piecewise smooth; *S* can be written as the union of its base ${S}_{1}$ and its spherical top ${S}_{2},$ and both ${S}_{1}$ and ${S}_{2}$ are smooth. Therefore, to calculate ${\displaystyle \iint_{S}{z}^{2}dS},$ we write this integral as ${\displaystyle \iint_{{S}_{1}}{z}^{2}dS}+{\displaystyle \iint_{{S}_{2}}{z}^{2}dS}$ and we calculate integrals ${\displaystyle \iint_{{S}_{1}}{z}^{2}dS}$ and ${\displaystyle \iint_{{S}_{2}}{z}^{2}dS}.$
First, we calculate ${\displaystyle \iint_{{S}_{1}}{z}^{2}dS}.$ To calculate this integral we need a parameterization of ${S}_{1}.$ This surface is a disk in plane $z=1$ centered at $(0,0,1).$ To parameterize this disk, we need to know its radius. Since the disk is formed where plane $z=1$ intersects sphere ${x}^{2}+{y}^{2}+{z}^{2}=4,$ we can substitute $z=1$ into equation ${x}^{2}+{y}^{2}+{z}^{2}=4\text{:}$

${x}^{2}+{y}^{2}+1=4⇒{x}^{2}+{y}^{2}=3.$  {eq:fs-id1167793294063}

Therefore, the radius of the disk is $\sqrt{3}$ and a parameterization of ${S}_{1}$ is $\textbf{r}(u,v)=\langle u\;\text{cos}\;v,u\;\text{sin}\;v,1\rangle ,0\le u\le \sqrt{3},0\le v\le 2\pi .$ The tangent vectors are ${\textbf{t}}_{u}=\langle \text{cos}\;v,\text{sin}\;v,0\rangle$ and ${\textbf{t}}_{v}=\langle \text{−}u\;\text{sin}\;v,ucosv,0\rangle ,$ and thus

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\left|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ \text{cos}\;v & \text{sin}\;v & 0 \\ \text{−}u\;\text{sin}\;v & u\;\text{cos}\;v & 0\end{array}\right|=\langle 0,0,u\;{\text{cos}}^{2}v+u\;{\text{sin}}^{2}v\rangle =\langle 0,0,u\rangle .$  {eq:fs-id1167794200463}

The magnitude of this vector is *u*. Therefore,

$\begin{array}{rl}{\displaystyle \iint_{{S}_{1}}{z}^{2}dS} & ={\displaystyle \int_{0}^{\sqrt{3}}{\displaystyle \int_{0}^{2\pi}f(\textbf{r}(u,v))}}\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| \;dv\;du \\ & ={\displaystyle \int_{0}^{\sqrt{3}}{\displaystyle \int_{0}^{2\pi}u}}\;dv\;du \\ & =2\pi {\displaystyle \int_{0}^{\sqrt{3}}udu} \\ & =3\pi .\end{array}$  {eq:fs-id1167794222306}

Now we calculate ${\displaystyle \iint_{{S}_{2}}dS}.$ To calculate this integral, we need a parameterization of ${S}_{2}.$ The parameterization of full sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ is

$\textbf{r}(ϕ,\theta )=\langle 2\;\text{cos}\;\theta \;\text{sin}\;ϕ,2\;\text{sin}\;\theta \;\text{sin}\;ϕ,2\;\text{cos}\;ϕ\rangle ,0\le \theta \le 2\pi ,0\le ϕ\le \pi .$  {eq:fs-id1167793753999}

Since we are only taking the piece of the sphere on or above plane $z=1,$ we have to restrict the domain of $ϕ.$ To see how far this angle sweeps, notice that the angle can be located in a right triangle, as shown in [ref:CNX_Calc_Figure_16_06_017] (the $\sqrt{3}$ comes from the fact that the base of *S* is a disk with radius $\sqrt{3}).$ Therefore, the tangent of $ϕ$ is $\sqrt{3},$ which implies that $ϕ$ is $\pi \text{/}3.$ We now have a parameterization of ${S}_{2}\text{:}$

$\textbf{r}(ϕ,\theta )=\langle 2\;\text{cos}\;\theta \;\text{sin}\;ϕ,2\;\text{sin}\;\theta \;\text{sin}\;ϕ,2\;\text{cos}\;ϕ\rangle ,0\le \theta \le 2\pi ,0\le ϕ\le \pi \text{/}3.$  {eq:fs-id1167794206183}

> FIGURE {fig:CNX_Calc_Figure_16_06_017} src=../../media/CNX_Calc_Figure_16_06_017.jpg
> alt: A diagram of a plane within the three-dimensional coordinate system. Two points are marked on the z axis: (0,0,2) and (0,0,1). The distance from the origin to (0,0,1) is marked as 1, the horizontal distance between the point (0,0,1) and a point of the sphere is labeled radical three, and the angle between the origin and the point on the sphere is theta. There is a line drawn from the origin to the point on the sphere, and this forms a triangle.
> caption: The maximum value of $ϕ$ has a tangent value of $\sqrt{3}.$

The tangent vectors are

${\textbf{t}}_{ϕ}=\langle 2\;\text{cos}\;\theta \;\text{cos}\;ϕ,2\;\text{sin}\;\theta \;\text{cos}\;ϕ,−2\;\text{sin}\;ϕ\rangle \;\text{and}\;{\textbf{t}}_{\theta}=\langle −2\;\text{sin}\;\theta \;\text{sin}\;ϕ,u\;\text{cos}\;\theta \;\text{sin}\;ϕ,0\rangle ,$  {eq:fs-id1167793473649}

and thus

$\begin{array}{rl}{\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta} & =\left|\begin{array}{ccc}\textbf{i} & \textbf{j} & \textbf{k} \\ 2\;\text{cos}\;\theta \;\text{cos}\;ϕ & 2\;\text{sin}\;\theta \;\text{cos}\;ϕ & −2\;\text{sin}\;ϕ \\ −2\;\text{sin}\;\theta \;\text{sin}\;ϕ & 2\;\text{cos}\;\theta \;\text{sin}\;ϕ & 0\end{array}\right| \\ & =\langle 4\;\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,4\;\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,4\;{\text{cos}}^{2}\theta \;\text{cos}\;ϕ\;\text{sin}\;ϕ+4\;{\text{sin}}^{2}\theta \;\text{cos}\;ϕ\;\text{sin}\;ϕ\rangle \\ & =\langle 4\;\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,4\;\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,4\;\text{cos}\;ϕ\;\text{sin}\;ϕ\rangle .\end{array}$  {eq:fs-id1167793545079}

The magnitude of this vector is

$\begin{array}{rl}\| {\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta}\| & =\sqrt{16\;{\text{cos}}^{2}\theta \;{\text{sin}}^{4}ϕ+16\;{\text{sin}}^{2}\theta \;{\text{sin}}^{4}ϕ+16\;{\text{cos}}^{2}ϕ\;{\text{sin}}^{2}ϕ} \\ & =4\sqrt{{\text{sin}}^{4}ϕ+{\text{cos}}^{2}ϕ\;{\text{sin}}^{2}ϕ}.\end{array}$  {eq:fs-id1167793446132}

Therefore,

$\begin{array}{ll}\iint_{{S}_{2}}zdS & =\int_{0}^{\pi \text{/3}}\int_{0}^{2\pi}f(\text{r}(ϕ,\theta ))\| {\text{t}}_{ϕ}\;\times \;{\text{t}}_{\theta}\| \;d\theta \;dϕ \\ & =\int_{0}^{\pi \text{/3}}\int_{0}^{2\pi}16\;{\text{cos}}^{2}ϕ\sqrt{{\text{sin}}^{4}ϕ+{\text{cos}}^{2}ϕ\;{\text{sin}}^{2}ϕ}d\theta \;dϕ \\ & =32\pi \int_{0}^{\pi \text{/3}}{\text{cos}}^{2}ϕ\sqrt{{\text{sin}}^{4}ϕ+{\text{cos}}^{2}ϕ\;{\text{sin}}^{2}ϕ}\;dϕ \\ & =32\pi \int_{0}^{\pi \text{/3}}{\text{cos}}^{2}ϕ\;\text{sin}\;ϕ\sqrt{{\text{sin}}^{2}ϕ+{\text{cos}}^{2}ϕ}\;dϕ \\ & =32\pi \int_{0}^{\pi \text{/3}}{\text{cos}}^{2}ϕ\;\text{sin}\;ϕ\;dϕ \\ & =32\pi {[-\frac{{\text{cos}}^{3}ϕ}{3}]}_{0}^{\pi \text{/}3}=32\pi [\frac{1}{3}-\frac{\sqrt{3}}{8}]=\frac{28\pi}{3}.\end{array}$  {eq:fs-id1167794200116}

Since $\iint_{S}{z}^{2}dS=\iint_{{S}_{1}}{z}^{2}dS+\iint_{{S}_{2}}{z}^{2}dS=3\pi +\frac{28\pi}{3}=\frac{37\pi}{3}$
COMMENTARY: Analysis
In this example we broke a surface integral over a piecewise surface into the addition of surface integrals over smooth subsurfaces. There were only two smooth subsurfaces in this example, but this technique extends to finitely many smooth subsurfaces.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793398461} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}(x-y)dS},$ where *S* is cylinder ${x}^{2}+{y}^{2}=1,0\le z\le 2,$ including the circular top and bottom.
SOLUTION:
0
COMMENTARY: Hint
Break the integral into three separate surface integrals.
:::
:::
Scalar surface integrals have several real-world applications. Recall that scalar line integrals can be used to compute the mass of a wire given its density function. In a similar fashion, we can use scalar surface integrals to compute the mass of a sheet given its density function. If a thin sheet of metal has the shape of surface *S* and the density of the sheet at point $(x,y,z)$ is $ρ(x,y,z),$ then mass *m* of the sheet is $m={\displaystyle \iint_{S}ρ(x,y,z)dS}.$

:::example {ex:fs-id1167793446102} Calculating the Mass of a Sheet

:::exercise {fs-id1167793446104} type= 
PROBLEM:
A flat sheet of metal has the shape of surface $z=1+x+2y$ that lies above rectangle $0\le x\le 4$ and $0\le y\le 2.$ If the density of the sheet is given by $ρ(x,y,z)={x}^{2}yz,$ what is the mass of the sheet?
SOLUTION:
Let *S* be the surface that describes the sheet. Then, the mass of the sheet is given by $m={\displaystyle \iint_{S}{x}^{2}yzdS}.$ To compute this surface integral, we first need a parameterization of *S*. Since *S* is given by the function $f(x,y)=1+x+2y,$ a parameterization of *S* is $\textbf{r}(x,y)=\langle x,y,1+x+2y\rangle ,0\le x\le 4,0\le y\le 2.$
The tangent vectors are ${\textbf{t}}_{x}=\langle 1,0,1\rangle$ and ${\textbf{t}}_{y}=\langle 1,0,2\rangle .$ Therefore, ${\textbf{t}}_{x}\;\times \;{\textbf{t}}_{y}=\langle −1,−2,1\rangle$ and $\| {\textbf{t}}_{x}\;\times \;{\textbf{t}}_{y}\| =\sqrt{6}.$ By [ref:fs-id1167793929737](module:m54012),

$\begin{array}{rl}m & ={\displaystyle \iint_{S}{x}^{2}y{z}^{}dS} \\ & =\sqrt{6}{\displaystyle \int_{0}^{4}{\displaystyle \int_{0}^{2}{x}^{2}y(1+x+2y)dydx}} \\ & =\sqrt{6}{\displaystyle \int_{0}^{4}\frac{22{x}^{2}}{3}}+2{x}^{3}dx \\ & =\frac{2560\sqrt{6}}{9} \\ & \approx 696.74.\end{array}$  {eq:fs-id1167793219659}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793245896} type= 
PROBLEM:
A piece of metal has a shape that is modeled by paraboloid $z={x}^{2}+{y}^{2},0\le z\le 4,$ and the density of the metal is given by $ρ(x,y,z)=z+1.$ Find the mass of the piece of metal.
SOLUTION:
$38.401\pi \approx 120.640$
COMMENTARY: Hint
The mass of a sheet is given by $m={\displaystyle \iint_{S}ρ(x,y,z)dS}.$ A useful parameterization of a paraboloid was given in a previous example.
:::
:::

## Orientation of a Surface
Recall that when we defined a scalar line integral, we did not need to worry about an orientation of the curve of integration. The same was true for scalar surface integrals: we did not need to worry about an “orientation” of the surface of integration.
On the other hand, when we defined vector line integrals, the curve of integration needed an orientation. That is, we needed the notion of an oriented curve to define a vector line integral without ambiguity. Similarly, when we define a surface integral of a vector field, we need the notion of an oriented surface. An oriented surface is given an “upward” or “downward” orientation or, in the case of surfaces such as a sphere or cylinder, an “outward” or “inward” orientation.
Let *S* be a smooth surface. For any point $(x,y,z)$ on *S,* we can identify two unit normal vectors $\textbf{N}$ and $\text{−}\textbf{N}.$ If it is possible to choose a unit normal vector **N** at every point $(x,y,z)$ on *S* so that **N** varies continuously over *S*, then *S* is “*orientable*.” Such a choice of unit normal vector at each point gives the {term:orientation of a surface} *S*. If you think of the normal field as describing water flow, then the side of the surface that water flows toward is the “negative” side and the side of the surface at which the water flows away is the “positive” side. Informally, a choice of orientation gives *S* an “outer” side and an “inner” side (or an “upward” side and a “downward” side), just as a choice of orientation of a curve gives the curve “forward” and “backward” directions.
Closed surfaces such as spheres are orientable: if we choose the outward normal vector at each point on the surface of the sphere, then the unit normal vectors vary continuously. This is called the *positive orientation of the closed surface* ([ref:CNX_Calc_Figure_16_06_018]). We also could choose the inward normal vector at each point to give an “inward” orientation, which is the negative orientation of the surface.

> FIGURE {fig:CNX_Calc_Figure_16_06_018} src=../../media/CNX_Calc_Figure_16_06_018.jpg
> alt: A three-dimensional image of an oriented sphere with positive orientation. A normal vector N stretches out from the top of the sphere, as does one from the upper left portion of the sphere.
> caption: An oriented sphere with positive orientation.

A portion of the graph of any smooth function $z=f(x,y)$ is also orientable. If we choose the unit normal vector that points “above” the surface at each point, then the unit normal vectors vary continuously over the surface. We could also choose the unit normal vector that points “below” the surface at each point. To get such an orientation, we parameterize the graph of $f$ in the standard way: $\textbf{r}(x,y)=\langle x,y,f(x,y)\rangle ,$ where *x* and *y* vary over the domain of $f.$ Then, ${\textbf{t}}_{x}=\langle 1,0,{f}_{x}\rangle$ and ${\textbf{t}}_{y}=\langle 0,1,{f}_{y}\rangle ,$ and therefore the cross product ${\textbf{t}}_{x}\;\times \;{\textbf{t}}_{y}$ (which is normal to the surface at any point on the surface) is $\langle \text{−}{f}_{x},\text{−}{f}_{y},1\rangle .$ Since the *z* component of this vector is one, the corresponding unit normal vector points “upward,” and the upward side of the surface is chosen to be the “positive” side.
Let *S* be a smooth orientable surface with parameterization $\textbf{r}(u,v).$ For each point $\textbf{r}(a,b)$ on the surface, vectors ${\textbf{t}}_{u}$ and ${\textbf{t}}_{v}$ lie in the tangent plane at that point. Vector ${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}$ is normal to the tangent plane at $\textbf{r}(a,b)$ and is therefore normal to *S* at that point. Therefore, the choice of unit normal vector

$\textbf{N}=\frac{{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}}{\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\|}$  {eq:fs-id1167793254723}

gives an orientation of surface *S*.

:::example {ex:fs-id1167793638498} Choosing an Orientation

:::exercise {fs-id1167793638500} type= 
PROBLEM:
Give an orientation of cylinder ${x}^{2}+{y}^{2}={r}^{2},0\le z\le h.$
SOLUTION:
This surface has parameterization

$\textbf{r}(u,v)=\langle r\;\text{cos}\;u,r\;\text{sin}\;u,v\rangle ,0\le u<2\pi ,0\le v\le h.$  {eq:fs-id1167793500447}

The tangent vectors are ${\textbf{t}}_{u}=\langle \text{−}r\;\text{sin}\;u,r\;\text{cos}\;u,0\rangle$ and ${\textbf{t}}_{v}=\langle 0,0,1\rangle .$ To get an orientation of the surface, we compute the unit normal vector

$\textbf{N}=\frac{{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}}{\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\|}.$  {eq:fs-id1167793544451}

In this case, ${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle r\;\text{cos}\;u,r\;\text{sin}\;u,0\rangle$ and therefore

$\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| =\sqrt{{r}^{2}{\text{cos}}^{2}u+{r}^{2}{\text{sin}}^{2}u}=r.$  {eq:fs-id1167793495503}

An orientation of the cylinder is

$\textbf{N}(u,v)=\frac{\langle r\;\text{cos}\;u,r\;\text{sin}\;u,0\rangle}{r}=\langle \text{cos}\;u,\text{sin}\;u,0\rangle .$  {eq:fs-id1167793628411}

Notice that all vectors are parallel to the *xy*-plane, which should be the case with vectors that are normal to the cylinder. Furthermore, all the vectors point outward, and therefore this is an outward orientation of the cylinder ([ref:CNX_Calc_Figure_16_06_019]).

> FIGURE {fig:CNX_Calc_Figure_16_06_019} src=../../media/CNX_Calc_Figure_16_06_019.jpg
> alt: A diagram of a vertical cylinder cut in half by a plane. An outward-pointing normal stretches out from the side of the cylinder.
> caption: If all the vectors normal to a cylinder point outward, then this is an outward orientation of the cylinder.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794200695} type= 
PROBLEM:
Give the “upward” orientation of the graph of $f(x,y)=xy.$
SOLUTION:
$\textbf{N}(x,y)=\langle \frac{\text{−}y}{\sqrt{1+{x}^{2}+{y}^{2}}},\frac{\text{−}x}{\sqrt{1+{x}^{2}+{y}^{2}}},\frac{1}{\sqrt{1+{x}^{2}+{y}^{2}}}\rangle$
COMMENTARY: Hint
Parameterize the surface and use the fact that the surface is the graph of a function.
:::
:::
Since every curve has a “forward” and “backward” direction (or, in the case of a closed curve, a clockwise and counterclockwise direction), it is possible to give an orientation to any curve. Hence, it is possible to think of every curve as an oriented curve. This is not the case with surfaces, however. Some surfaces cannot be oriented; such surfaces are called *nonorientable*. Essentially, a surface can be oriented if the surface has an “inner” side and an “outer” side, or an “upward” side and a “downward” side. Some surfaces are twisted in such a fashion that there is no well-defined notion of an “inner” or “outer” side.
The classic example of a nonorientable surface is the Möbius strip. To create a Möbius strip, take a rectangular strip of paper, give the piece of paper a half-twist, and the glue the ends together ([ref:CNX_Calc_Figure_16_06_020]). Because of the half-twist in the strip, the surface has no “outer” side or “inner” side. If you imagine placing a normal vector at a point on the strip and having the vector travel all the way around the band, then (because of the half-twist) the vector points in the opposite direction when it gets back to its original position. Therefore, the strip really only has one side.

> FIGURE {fig:CNX_Calc_Figure_16_06_020} src=../../media/CNX_Calc_Figure_16_06_020.jpg
> alt: An image showing the construction of a Mobius strip. The first step shows a rectangle with corners A, B, C, and D, labeled from bottom left to bottom right in a clockwise manner. In the second step, the rectangle is flipped along the middle; now, corner D is in the upper right position, and corner C is in the lower right position. We can see the “back” side of the rectangle. In the final step, the rectangle is looped. Corner B connects to corner D, and corner A connects to corner C. The flip from step two remains. But, the “front” and “back” are now the same because of the flip!
> caption: The construction of a Möbius strip.

Since some surfaces are nonorientable, it is not possible to define a vector surface integral on all piecewise smooth surfaces. This is in contrast to vector line integrals, which can be defined on any piecewise smooth curve.

## Surface Integral of a Vector Field
With the idea of orientable surfaces in place, we are now ready to define a {term:surface integral of a vector field}. The definition is analogous to the definition of the flux of a vector field along a plane curve. Recall that if **F** is a two-dimensional vector field and *C* is a plane curve, then the definition of the flux of **F** along *C* involved chopping *C* into small pieces, choosing a point inside each piece, and calculating $\textbf{F}\cdot \textbf{N}$ at the point (where **N** is the unit normal vector at the point). The definition of a surface integral of a vector field proceeds in the same fashion, except now we chop surface *S* into small pieces, choose a point in the small (two-dimensional) piece, and calculate $\textbf{F}\cdot \textbf{N}$ at the point.
To place this definition in a real-world setting, let *S* be an oriented surface with unit normal vector **N**. Let **v** be a velocity field of a fluid flowing through *S*, and suppose the fluid has density $ρ(x,y,z).$ Imagine the fluid flows through *S*, but *S* is completely permeable so that it does not impede the fluid flow ([ref:CNX_Calc_Figure_16_06_021]). The {term:mass flux} of the fluid is the rate of mass flow per unit area. The mass flux is measured in mass per unit time per unit area. How could we calculate the mass flux of the fluid across *S*?

> FIGURE {fig:CNX_Calc_Figure_16_06_021} src=../../media/CNX_Calc_Figure_16_06_021.jpg
> alt: A diagram showing fluid flowing across a completely permeable surface S. The surface S is a rectangle curving to the right. Arrows point out of the surface to the right.
> caption: Fluid flows across a completely permeable surface *S*.

The rate of flow, measured in mass per unit time per unit area, is $ρ\textbf{N}.$ To calculate the mass flux across *S*, chop *S* into small pieces ${S}_{ij}.$ If ${S}_{ij}$ is small enough, then it can be approximated by a tangent plane at some point *P* in ${S}_{ij}.$ Therefore, the unit normal vector at *P* can be used to approximate $\textbf{N}(x,y,z)$ across the entire piece ${S}_{ij},$ because the normal vector to a plane does not change as we move across the plane. The component of the vector $ρ\textbf{v}$ at *P* in the direction of **N** is $ρ\textbf{v}\cdot \textbf{N}$ at *P*. Since ${S}_{ij}$ is small, the dot product $ρ\textbf{v}\cdot \textbf{N}$ changes very little as we vary across ${S}_{ij},$ and therefore $ρ\textbf{v}\cdot \textbf{N}$ can be taken as approximately constant across ${S}_{ij}.$ To approximate the mass of fluid per unit time flowing across ${S}_{ij}$ (and not just locally at point *P*), we need to multiply $(ρ\textbf{v}\cdot \textbf{N})(P)$ by the area of ${S}_{ij}.$ Therefore, the mass of fluid per unit time flowing across ${S}_{ij}$ in the direction of **N** can be approximated by $(ρ\textbf{v}\cdot \textbf{N})\text{Δ}{S}_{ij},$ where **N**, $ρ,$ and **v** are all evaluated at *P* ([ref:CNX_Calc_Figure_16_06_022]). This is analogous to the flux of two-dimensional vector field **F** across plane curve *C*, in which we approximated flux across a small piece of *C* with the expression $(\textbf{F}\cdot \textbf{N})\text{Δ}s.$ To approximate the mass flux across *S*, form the sum ${\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} (ρ\textbf{v}\cdot \textbf{N})}}\text{Δ}{\textbf{S}}_{ij}.$ As pieces ${S}_{ij}$ get smaller, the sum ${\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} (ρ\textbf{v}\cdot \textbf{N})}}\text{Δ}{\textbf{S}}_{ij}$ gets arbitrarily close to the mass flux. Therefore, the mass flux is

${\displaystyle \iint_{s}ρ\textbf{v}\cdot \textbf{N}dS=}\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} (ρ\textbf{v}\cdot \textbf{N})}}\text{Δ}{\textbf{S}}_{ij}.$  {eq:fs-id1167793719931}

This is a surface integral of a vector field. Letting the vector field $ρ\textbf{v}$ be an arbitrary vector field **F** leads to the following definition.

> FIGURE {fig:CNX_Calc_Figure_16_06_022} src=../../media/CNX_Calc_Figure_16_06_022.jpg
> alt: A diagram in three dimensions of a surface S. A small section S_ij is labeled. Coming out of this section are two vectors, labeled N and F = v. The latter points in the same direction as several other arrows with positive z and y components but negative x components.
> caption: The mass of fluid per unit time flowing across ${S}_{ij}$ in the direction of **N** can be approximated by $(ρ\textbf{v}\cdot \textbf{N})\text{Δ}{S}_{ij}.$

:::note [definition] Definition
Let **F** be a continuous vector field with a domain that contains oriented surface *S* with unit normal vector **N**. The {term:surface integral} of **F** over *S* is

$$ {\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}={\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}}. $$  {eq:fs-id1167793385095}

:::
Notice the parallel between this definition and the definition of vector line integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}.$ A surface integral of a vector field is defined in a similar way to a flux line integral across a curve, except the domain of integration is a surface (a two-dimensional object) rather than a curve (a one-dimensional object). Integral ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}$ is called the *flux of **F** across S*, just as integral ${\displaystyle \int_{C}\textbf{F}\cdot \textbf{N}ds}$ is the flux of **F** across curve *C*. A surface integral over a vector field is also called a {term:flux integral}.
Just as with vector line integrals, surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}$ is easier to compute after surface *S* has been parameterized. Let $\textbf{r}(u,v)$ be a parameterization of *S* with parameter domain *D*. Then, the unit normal vector is given by $\textbf{N}=\frac{{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}}{\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\|}$ and, from [ref:fs-id1167793385095], we have

$\begin{array}{rl}{\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}} & ={\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS} \\ & ={\displaystyle \iint_{S}\textbf{F}\cdot \frac{{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}}{\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\|}dS} \\ & ={\displaystyle \iint_{D}(\textbf{F}(\textbf{r}(u,v))\cdot \frac{{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}}{\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\|})\| {\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}\| dA} \\ & ={\displaystyle \iint_{D}(\textbf{F}(\textbf{r}(u,v))\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}))dA}.\end{array}$  {eq:fs-id1167794209510}

Therefore, to compute a surface integral over a vector field we can use the equation

$$ {\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS}={\displaystyle \iint_{D}(\textbf{F}(\textbf{r}(u,v))\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}))dA}. $$  {eq:fs-id1167793617076}

:::example {ex:fs-id1167794163736} Calculating a Surface Integral

:::exercise {fs-id1167794163739} type= 
PROBLEM:
Calculate the surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS},$ where $\textbf{F}=\langle \text{−}y,x,0\rangle$ and $S$ is the surface with parameterization $\textbf{r}(u,v)=\langle u,{v}^{2}-u,u+v\rangle ,0\le u<3,0\le v\le 4.$
SOLUTION:
The tangent vectors are ${\textbf{t}}_{u}=\langle 1,−1,1\rangle$ and ${\textbf{t}}_{v}=\langle 0,2v,1\rangle .$ Therefore,

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle −1-2v,−1,2v\rangle .$  {eq:fs-id1167793409626}

By [ref:fs-id1167793617076],

$\begin{array}{rl}{\displaystyle \iint_{S}\textbf{F}}\cdot d\textbf{S} & ={\displaystyle \int_{0}^{4}{\displaystyle \int_{0}^{3}\textbf{F}(\textbf{r}(u,v))}}\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v})dudv \\ & ={\displaystyle \int_{0}^{4}{\displaystyle \int_{0}^{3}\langle u-{v}^{2},u,0\rangle \cdot \langle −1-2v,−1,2v\rangle}}\;dudv \\ & ={\displaystyle \int_{0}^{4}{\displaystyle \int_{0}^{3}[(u-{v}^{2})(−1-2v)-u]}}dudv \\ & ={\displaystyle \int_{0}^{4}{\displaystyle \int_{0}^{3}(2{v}^{3}+{v}^{2}-2uv-2u)}}dudv \\ & ={{\displaystyle \int_{0}^{4}[2{v}^{3}u+{v}^{2}u-v{u}^{2}-{u}^{2}]}}_{0}^{3}dv \\ & ={\displaystyle \int_{0}^{4}(6{v}^{3}+3{v}^{2}-9v-9)dv} \\ & ={[\frac{3{v}^{4}}{2}+{v}^{3}-\frac{9{v}^{2}}{2}-9v]}_{0}^{4} \\ & =340.\end{array}$  {eq:fs-id1167793551267}

Therefore, the flux of **F** across *S* is 340.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793460456} type= 
PROBLEM:
Calculate surface integral ${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}},$ where $\textbf{F}=\langle 0,\text{−}z,y\rangle$ and *S* is the portion of the unit sphere in the first octant with outward orientation.
SOLUTION:
0
COMMENTARY: Hint
Use [ref:fs-id1167793617076].
:::
:::

:::example {ex:fs-id1167793628126} Calculating Mass Flow Rate

:::exercise {fs-id1167793628128} type= 
PROBLEM:
Let $\textbf{v}(x,y,z)=\langle 2x,2y,z\rangle$ represent a velocity field (with units of meters per second) of a fluid with constant density 80 kg/m<sup>3</sup>. Let *S* be hemisphere ${x}^{2}+{y}^{2}+{z}^{2}=9$ with $z\ge 0$ such that *S* is oriented outward. Find the mass flow rate of the fluid across *S*.
SOLUTION:
A parameterization of the surface is

$\textbf{r}(ϕ,\theta )=\langle 3\;\text{cos}\;\theta \;\text{sin}\;ϕ,3\;\text{sin}\;\theta \;\text{sin}\;ϕ,3\;\text{cos}\;ϕ\rangle ,0\le \theta \le 2\pi ,0\le ϕ\le \pi \text{/}2.$  {eq:fs-id1167793609220}

As in [ref:fs-id1167793561618], the tangent vectors are

${\textbf{t}}_{\theta}=\langle −3\;\text{sin}\;\theta \;\text{sin}\;ϕ,3\;\text{cos}\;\theta \;\text{sin}\;ϕ,0\rangle \;\text{and}\;{\textbf{t}}_{ϕ}=\langle 3\;\text{cos}\;\theta \;\text{cos}\;ϕ,3\;\text{sin}\;\theta \;\text{cos}\;ϕ,−3\;\text{sin}\;ϕ\rangle ,$  {eq:fs-id1167793325852}

and their cross product is

${\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta}=\langle 9\;\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle .$  {eq:fs-id1167793775574}

Notice that each component of the cross product is positive, and therefore this vector gives the outward orientation. Therefore we use the orientation $\textbf{N}=\langle 9\;\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle$ for the sphere.
By [ref:fs-id1167794209510],

$\begin{array}{rl}{\displaystyle \iint_{S}ρ\textbf{v}\cdot d\textbf{S}} & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}\textbf{v}(\textbf{r}(ϕ,\theta ))}}\cdot ({\textbf{t}}_{ϕ}\;\times \;{\textbf{t}}_{\theta})dϕd\theta \\ & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}}} \\ & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}\begin{array}{l}\langle 6\;\text{cos}\;\theta \;\text{sin}\;ϕ,6\;\text{sin}\;\theta \;\text{sin}\;ϕ,3\;\text{cos}\;ϕ\rangle \\ \cdot \langle 9\;\text{cos}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;\theta \;{\text{sin}}^{2}ϕ,9\;\text{sin}\;ϕ\;\text{cos}\;ϕ\rangle dϕd\theta \end{array}}} \\ & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}54\;{\text{sin}}^{3}ϕ+27\;{\text{cos}}^{2}ϕ\;\text{sin}\;ϕdϕd\theta}} \\ & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}54(1-{\text{cos}}^{2}ϕ)\text{sin}\;ϕ+27\;{\text{cos}}^{2}ϕ\;\text{sin}\;ϕdϕd\theta}} \\ & =80{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{\pi \text{/}2}54\;\text{sin}\;ϕ-27\;{\text{cos}}^{2}ϕ\;\text{sin}\;ϕdϕd\theta}} \\ & =80{\displaystyle \int_{0}^{2\pi}{[−54\;\text{cos}\;ϕ+9\;{\text{cos}}^{3}ϕ]}_{ϕ=0}^{ϕ=2\pi}d\theta} \\ & =80{\displaystyle \int_{0}^{2\pi}45d\theta}=7200\pi .\end{array}$  {eq:fs-id1167794173352}

Therefore, the mass flow rate is $7200\pi \;\text{kg}\text{/}\text{sec}\text{/}{\text{m}}^{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793706030} type= 
PROBLEM:
Let $\textbf{v}(x,y,z)=\langle {x}^{2}+{y}^{2},z,4y\rangle$ m/sec represent a velocity field of a fluid with constant density 100 kg/m<sup>3</sup>. Let *S* be the half-cylinder $\textbf{r}(u,v)=\langle \text{cos}\;u,\text{sin}\;u,v\rangle ,0\le u\le \pi ,0\le v\le 2$ oriented outward. Calculate the mass flux of the fluid across *S*.
SOLUTION:
400 kg/sec/m
COMMENTARY: Hint
Use [ref:fs-id1167793385095].
:::
:::
In [ref:fs-id1167793628126], we computed the mass flux, which is the rate of mass flow per unit area. If we want to find the flow rate (measured in volume per time) instead, we can use flux integral $\iint_{S}\text{v}\cdot \text{N}dS,$ which leaves out the density. Since the flow rate of a fluid is measured in volume per unit time, flow rate does not take mass into account. Therefore, we have the following characterization of the flow rate of a fluid with velocity **v** across a surface *S*:

$\text{Flow rate of fluid across}\;S=\iint_{S}v\cdot d\text{S}.$  {eq:fs-id1167793449396}

To compute the flow rate of the fluid in [ref:fs-id1167793628126], we simply remove the density constant, which gives a flow rate of $90\pi {\;\text{m}}^{3}\text{/}\text{sec}.$
Both mass flux and flow rate are important in physics and engineering. Mass flux measures how much mass is flowing across a surface; flow rate measures how much volume of fluid is flowing across a surface.
In addition to modeling fluid flow, surface integrals can be used to model heat flow. Suppose that the temperature at point $(x,y,z)$ in an object is $T(x,y,z).$ Then the {term:heat flow} is a vector field proportional to the negative temperature gradient in the object. To be precise, the heat flow is defined as vector field $\textbf{F}=\text{−}k\nabla T,$ where the constant *k* is the *thermal conductivity* of the substance from which the object is made (this constant is determined experimentally). The rate of heat flow across surface *S* in the object is given by the flux integral

${\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}}={\displaystyle \iint_{S}\text{−}k\nabla T\cdot d\textbf{S}}.$  {eq:fs-id1167793627575}

:::example {ex:fs-id1167793551234} Calculating Heat Flow

:::exercise {fs-id1167793551236} type= 
PROBLEM:
A cast-iron solid cylinder is given by inequalities ${x}^{2}+{y}^{2}\le 1,$ $1\le z\le 4.$ The temperature at point $(x,y,z)$ in a region containing the cylinder is $T(x,y,z)=({x}^{2}+{y}^{2})z.$ Given that the thermal conductivity of cast iron is 55, find the heat flow across the boundary of the solid if this boundary is oriented outward.
SOLUTION:
Let *S* denote the boundary of the object. To find the heat flow, we need to calculate flux integral ${\displaystyle \iint_{S}\text{−}k\nabla T\cdot d\textbf{S}}.$ Notice that *S* is not a smooth surface but is piecewise smooth, since *S* is the union of three smooth surfaces (the circular top and bottom, and the cylindrical side). Therefore, we calculate three separate integrals, one for each smooth piece of *S*. Before calculating any integrals, note that the gradient of the temperature is $\nabla T=\langle 2xz,2yz,{x}^{2}+{y}^{2}\rangle .$
First we consider the circular bottom of the object, which we denote ${S}_{1}.$ We can see that ${S}_{1}$ is a circle of radius 1 centered at point $(0,0,1),$ sitting in plane $z=1.$ This surface has parameterization $\textbf{r}(u,v)=\langle v\;\text{cos}\;u,v\;\text{sin}\;u,1\rangle ,0\le u<2\pi ,0\le v\le 1.$ Therefore,

${\textbf{t}}_{u}=\langle \text{−}v\;\text{sin}\;u,v\;\text{cos}\;u,0\rangle \;\text{and}\;{\textbf{t}}_{v}=\langle \text{cos}\;u,v\;\text{sin}\;u,0\rangle ,$  {eq:fs-id1167793442634}

and

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle 0,0,\text{−}v\;{\text{sin}}^{2}u-v\;{\text{cos}}^{2}u\rangle =\langle 0,0,\text{−}v\rangle .$  {eq:fs-id1167793411051}

Since the surface is oriented outward and ${S}_{1}$ is the bottom of the object, it makes sense that this vector points downward. By [ref:fs-id1167793617076], the heat flow across ${S}_{1}$ is

$\begin{array}{rl}{\displaystyle \iint_{{S}_{1}}\text{−}k\nabla T\cdot d\textbf{S}} & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\nabla T(u,v)\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v})dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\langle 2v\;\text{cos}\;u,2v\;\text{sin}\;u,{v}^{2}{\text{cos}}^{2}u+{v}^{2}{\text{sin}}^{2}u\rangle \cdot \langle 0,0,\text{−}v\rangle dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\langle 2v\;\text{cos}\;u,2v\;\text{sin}\;u,{v}^{2}\rangle \cdot \langle 0,0,\text{−}v\rangle dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\text{−}{v}^{3}}dvdu}=−55{\displaystyle \int_{0}^{2\pi}-\frac{1}{4}du}=\frac{55\pi}{2}.\end{array}$  {eq:fs-id1167793641664}

Now let’s consider the circular top of the object, which we denote ${S}_{2}.$ We see that ${S}_{2}$ is a circle of radius 1 centered at point $(0,0,4),$ sitting in plane $z=4.$ This surface has parameterization $\textbf{r}(u,v)=\langle v\;\text{cos}\;u,v\;\text{sin}\;u,4\rangle ,0\le u<2\pi ,0\le v\le 1.$ Therefore,

${\textbf{t}}_{u}=\langle \text{−}v\;\text{sin}\;u,v\;\text{cos}\;u,0\rangle \;\text{and}\;{\textbf{t}}_{v}=\langle \text{cos}\;u,v\;\text{sin}\;u,0\rangle ,$  {eq:fs-id1167794324508}

and

${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle 0,0,\text{−}v\;{\text{sin}}^{2}u-v\;{\text{cos}}^{2}u\rangle =\langle 0,0,\text{−}v\rangle .$  {eq:fs-id1167793515541}

Since the surface is oriented outward and ${S}_{1}$ is the top of the object, we instead take vector ${\textbf{t}}_{v}\;\times \;{\textbf{t}}_{u}=\langle 0,0,v\rangle .$ By [ref:fs-id1167793617076], the heat flow across ${S}_{1}$ is

$\begin{array}{rl}{\displaystyle \int {\displaystyle \int_{{S}_{2}}\text{−}k}}\nabla T\cdot d\textbf{S} & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\nabla T(u,v)\cdot ({\textbf{t}}_{v}\;\times \;{\textbf{t}}_{u})dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\langle 8v\;\text{cos}\;u,8v\;\text{sin}\;u,{v}^{2}{\text{cos}}^{2}u+{v}^{2}{\text{sin}}^{2}u\rangle \cdot \langle 0,0,v\rangle dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\langle 8v\;\text{cos}\;u,8v\;\text{sin}\;u,{v}^{2}\rangle \cdot \langle 0,0,v\rangle dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}{v}^{3}dvdu}}=-\frac{55\pi}{2}.\end{array}$  {eq:fs-id1167794146531}

Last, let’s consider the cylindrical side of the object. This surface has parameterization $\textbf{r}(u,v)=\langle \text{cos}\;u,\text{sin}\;u,v\rangle ,0\le u<2\pi ,1\le v\le 4.$ By [ref:fs-id1167794214134], we know that ${\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}=\langle \text{cos}\;u,\text{sin}\;u,0\rangle .$ By [ref:fs-id1167793617076],

$\begin{array}{rl}{\displaystyle \iint_{{S}_{3}}\text{−}k\nabla T\cdot d\textbf{S}} & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{1}^{4}\nabla T(u,v)\cdot ({\textbf{t}}_{v}\;\times \;{\textbf{t}}_{u})dvdu}} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{1}^{4}\langle 2v\;\text{cos}\;u,2v\;\text{sin}\;u,{\text{cos}}^{2}u+{\text{sin}}^{2}u\rangle \cdot \langle \text{cos}\;u,\text{sin}\;u,0\rangle}dvdu} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}\langle 2v\;\text{cos}\;u,2v\;\text{sin}\;u,1\rangle \cdot \langle \text{cos}\;u,\text{sin}\;u,0\rangle}dvdu} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}(2v\;{\text{cos}}^{2}u+2v\;{\text{sin}}^{2}u)}dvdu} \\ & =−55{\displaystyle \int_{0}^{2\pi}{\displaystyle \int_{0}^{1}2v}dvdu}=−55{\displaystyle \int_{0}^{2\pi}du}=−110\pi .\end{array}$  {eq:fs-id1167793312182}

Therefore, the rate of heat flow across *S* is $\frac{55\pi}{2}-\frac{55\pi}{2}-110\pi =−110\pi .$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793776876} type= 
PROBLEM:
A cast-iron solid ball is given by inequality ${x}^{2}+{y}^{2}+{z}^{2}\le 1.$ The temperature at a point in a region containing the ball is $T(x,y,z)=\frac{1}{3}({x}^{2}+{y}^{2}+{z}^{2}).$ Find the heat flow across the boundary of the solid if this boundary is oriented outward.
SOLUTION:
$-\frac{440\pi}{3}$
COMMENTARY: Hint
Follow the steps of [ref:fs-id1167794163736].
:::
:::

## Key Concepts {section:key-concepts}
- Surfaces can be parameterized, just as curves can be parameterized. In general, surfaces must be parameterized with two parameters.
- Surfaces can sometimes be oriented, just as curves can be oriented. Some surfaces, such as a Möbius strip, cannot be oriented.
- A surface integral is like a line integral in one higher dimension. The domain of integration of a surface integral is a surface in a plane or space, rather than a curve in a plane or space.
- The integrand of a surface integral can be a scalar function or a vector field. To calculate a surface integral with an integrand that is a function, use [ref:fs-id1167793757749]. To calculate a surface integral with an integrand that is a vector field, use [ref:fs-id1167793385095].
- If *S* is a surface, then the area of *S* is ${\displaystyle \int {\displaystyle \int_{S}dS}}.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-561} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Scalar surface integral** | ${\displaystyle \int {\displaystyle \int_{S}f(x,y,z)dS={\displaystyle \int {\displaystyle \int_{D}f(\textbf{r}(u,v))||{\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v}||dA}}}}$ |
| **Flux integral** | ${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS=}{\displaystyle \iint_{S}\textbf{F}\cdot d\textbf{S}=}{\displaystyle \iint_{D}\textbf{F}(\textbf{r}(u,v))\cdot ({\textbf{t}}_{u}\;\times \;{\textbf{t}}_{v})dA}$ |

##  {section:section-exercises}
For the following exercises, determine whether the statements are *true or false*.

:::exercise {fs-id1167794221059} type= 
PROBLEM:
If surface *S* is given by $\{(x,y,z):0\le x\le 1,0\le y\le 1,z=10\},$ then ${\displaystyle \iint_{S}f(x,y,z)}dS={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{1}f(x,y,10)}}dxdy.$
SOLUTION:
True
:::

:::exercise {fs-id1167793490667} type= 
PROBLEM:
If surface *S* is given by $\{(x,y,z):0\le x\le 1,0\le y\le 1,z=x\},$ then ${\displaystyle \iint_{S}f(x,y,z)}dS={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{1}f(x,y,x)}}dxdy.$
:::

:::exercise {fs-id1167794214059} type= 
PROBLEM:
Surface $\textbf{r}=\langle v\;\text{cos}\;u,v\;\text{sin}\;u,{v}^{2}\rangle ,\;\text{for}\;0\le u\le \pi ,0\le v\le 2,$ is the same as surface $\textbf{r}=\langle \sqrt{v}\;\text{cos}\;2u,\sqrt{v}\;\text{sin}\;2u,v\rangle ,$ for $0\le u\le \frac{\pi}{2},0\le v\le 4.$
SOLUTION:
True
:::

:::exercise {fs-id1167793392783} type= 
PROBLEM:
Given the standard parameterization of a sphere, normal vectors ${\text{t}}_{u}^{}\;\times \;{\text{t}}_{v}$ are outward normal vectors.
:::
For the following exercises, find parametric descriptions for the following surfaces.

:::exercise {fs-id1167793401623} type= 
PROBLEM:
Plane $3x-2y+z=2$
SOLUTION:
$\textbf{r}(u,v)=\langle u,v,2-3u+2v\rangle$ for $\text{−}\infty \le u<\infty$ and $\text{−}\infty \le v<\infty .$
:::

:::exercise {fs-id1167793631923} type= 
PROBLEM:
Paraboloid $z={x}^{2}+{y}^{2},$ for $0\le z\le 9.$
:::

:::exercise {fs-id1167794138250} type= 
PROBLEM:
Plane $2x-4y+3z=16$
SOLUTION:
$\textbf{r}(u,v)=\langle u,v,\frac{1}{3}(16-2u+4v)\rangle$ for $|u|<\infty$ and $|v|<\infty .$
:::

:::exercise {fs-id1167794210461} type= 
PROBLEM:
The frustum of cone ${z}^{2}={x}^{2}+{y}^{2},\;\text{for}\;2\le z\le 8$
:::

:::exercise {fs-id1167793612973} type= 
PROBLEM:
The portion of cylinder ${x}^{2}+{y}^{2}=9$ in the first octant, for $0\le z\le 3$

> IMAGE {img:fs-id1167793513052} src=../../media/CNX_Calc_Figure_16_06_201.jpg
> alt: A diagram in three dimensions of a section of a cylinder with radius 3. The center of its circular top is (0,0,3). The section exists for x, y, and z between 0 and 3.

SOLUTION:
$\textbf{r}(u,v)=\langle 3\;\text{cos}\;u,3\;\text{sin}\;u,v\rangle$ for $0\le u\le \frac{\pi}{2},0\le v\le 3$
:::

:::exercise {fs-id1167793640233} type= 
PROBLEM:
A cone with base radius *r* and height *h*, where *r* and *h* are positive constants
:::
For the following exercises, use a computer algebra system to approximate the area of the following surfaces using a parametric description of the surface.

:::exercise {fs-id1167794210185} type= 
PROBLEM:
**[T]** Half cylinder $\{(r,\theta ,z):r=4,0\le \theta \le \pi ,0\le z\le 7\}$
SOLUTION:
$A=28\pi =87.9646$
:::

:::exercise {fs-id1167794090614} type= 
PROBLEM:
**[T]** Plane $z=10-x-y$ above square $|x|\le 2,|y|\le 2$
:::
For the following exercises, let *S* be the hemisphere ${x}^{2}+{y}^{2}+{z}^{2}=4,$ with $z\ge 0,$ and evaluate each surface integral.

:::exercise {fs-id1167794121580} type= 
PROBLEM:
${\displaystyle \iint_{S}zdS}$
SOLUTION:
${\displaystyle \iint_{S}zdS}=8\pi$
:::

:::exercise {fs-id1167794090418} type= 
PROBLEM:
${\displaystyle \iint_{S}(x-2y)dS}$
:::

:::exercise {fs-id1167793775678} type= 
PROBLEM:
${\displaystyle \iint_{S}({x}^{2}+{y}^{2})zdS}$
SOLUTION:
${\displaystyle \iint_{S}({x}^{2}+{y}^{2})zdS}=16\pi$
:::
For the following exercises, evaluate ${\displaystyle \int {\displaystyle \int_{S}\textbf{F}\cdot \textbf{N}dS}}$ for vector field **F**, where **N** is an upward pointing normal vector to surface *S.*

:::exercise {fs-id1167793278939} type= 
PROBLEM:
$\textbf{F}(x,y,z)=x\textbf{i}+2y\textbf{j}-3z\textbf{k},$ and *S* is that part of plane $15x-12y+3z=6$ that lies above unit square $0\le x\le 1,0\le y\le 1.$
:::

:::exercise {fs-id1167794169198} type= 
PROBLEM:
$\textbf{F}(x,y,z)=x\textbf{i}+y\textbf{j},$ and *S* is hemisphere $z=\sqrt{1-{x}^{2}-{y}^{2}}.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS=\frac{4\pi}{3}}$
:::

:::exercise {fs-id1167793634102} type= 
PROBLEM:
$\textbf{F}(x,y,z)={x}^{2}\textbf{i}+{y}^{2}\textbf{j}+{z}^{2}\textbf{k},$ and *S* is the portion of plane $z=y+1$ that lies inside cylinder ${x}^{2}+{y}^{2}=1.$

> IMAGE {img:fs-id1167793547915} src=../../media/CNX_Calc_Figure_16_06_202.jpg
> alt: A cylinder and an intersecting plane shown in three-dimensions. S is the portion of the plane z = y + 1 inside the cylinder x^2 + y ^2 = 1.

:::
For the following exercises, approximate the mass of the lamina that has the shape of given surface *S.* Round to four decimal places.

:::exercise {fs-id1167791543254} type= 
PROBLEM:
**[T]** *S* is surface $z=4-x-2y,\;\text{with}\;z\ge 0\text{,}\;x\ge 0\text{,}\;y\ge 0\text{;}\;ρ=x.$
SOLUTION:
$m\approx 13.0639$
:::

:::exercise {fs-id1167793477527} type= 
PROBLEM:
**[T]** *S* is surface $z={x}^{2}+{y}^{2},\;\text{with}\;z\le 1\text{;}\;ρ=z.$
:::

:::exercise {fs-id1167793480985} type= 
PROBLEM:
**[T]** *S* is surface ${x}^{2}+{y}^{2}+{z}^{2}=5,\;\text{with}\;z\ge 1\text{;}\;ρ={\theta}^{2}.$
SOLUTION:
$m\approx 228.5313$
:::

:::exercise {fs-id1167793542477} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}({y}^{2}z\textbf{i}+{y}^{3}\textbf{j}+xz\textbf{k})\cdot dS}\text{,}$ where *S* is the surface of cube $−1\le x\le 1,−1\le y\le 1,\text{and}\;0\le z\le 2.$ Assume an outward pointing normal.
:::

:::exercise {fs-id1167794284374} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}gdS},$ where $g(x,y,z)=xz+2{x}^{2}-3xy$ and *S* is the portion of plane $2x-3y+z=6$ that lies over unit square *R*: $0\le x\le 1\text{,}\;0\le y\le 1.$
SOLUTION:
${\displaystyle \iint_{S}gdS}=3\sqrt{14}$
:::

:::exercise {fs-id1167794284316} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}({x}^{2}+y-z)dS}\text{,}$ where $S$ is the surface defined parametrically by $\textbf{r}(u,v)=(2u+v)\textbf{i}+(u-2v)\textbf{j}+(u+3v)\textbf{k}$ for $0\le u\le 1,\;\text{and}\;0\le v\le 2.$

> IMAGE {img:fs-id1167793475729} src=../../media/CNX_Calc_Figure_16_06_203.jpg
> alt: A three-dimensional diagram of the given surface, which appears to be a steeply sloped plane stretching through the (x,y) plane.

:::

:::exercise {fs-id1167791542840} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \iint_{S}(x-{y}^{2}+z)dS}\text{,}$ where *S* is the surface defined by $\textbf{r}(u,v)={u}^{2}\textbf{i}+v\textbf{j}+u\textbf{k}\text{,}\;0\le u\le 1\text{,}\;0\le v\le 1.$

> IMAGE {img:fs-id1167793656535} src=../../media/CNX_Calc_Figure_16_06_204.jpg
> alt: A three-dimensional diagram of the given surface, which appears to be a curve with edges parallel to the y-axis. It increases in x components and decreases in z components the further it is from the y axis.

SOLUTION:
${\displaystyle \iint_{S}(x-{y}^{2}+z)}dS\approx 0.9617$
:::

:::exercise {fs-id1167793442664} type= 
PROBLEM:
**[T]** Evaluate $\int \int_{S}({x}^{2}+{y}^{2}-z)dS$ where $S$ is the surface defined by $\textbf{r}(u,v)=u\textbf{i}-{u}^{2}\textbf{j}+v\textbf{k}\text{,}\;0\le u\le 2\text{,}\;0\le v\le 1.$
:::

:::exercise {fs-id1167793427585} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}({x}^{2}+{y}^{2})dS},$ where *S* is the surface of hemisphere $z=\sqrt{1-{x}^{2}-{y}^{2}},$ and above the plane $z=0.$
SOLUTION:
${\displaystyle \iint_{S}({x}^{2}+{y}^{2})dS}=\frac{4\pi}{3}$
:::

:::exercise {fs-id1167793463775} type= 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}({x}^{2}+{y}^{2}+{z}^{2})dS},$ where *S* is the portion of plane $z=x+1$ that lies inside cylinder ${x}^{2}+{y}^{2}=1.$
:::

:::exercise {fs-id1167793298599} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \iint_{S}{x}^{2}zdS,}$ where *S* is the portion of cone ${z}^{2}={x}^{2}+{y}^{2}$ that lies between planes $z=1$ and $z=4.$

> IMAGE {img:fs-id1167793267007} src=../../media/CNX_Calc_Figure_16_06_205.jpg
> alt: A diagram of the given upward opening cone in three dimensions. The cone is cut by planes z=1 and z=4.

SOLUTION:
${\displaystyle \iint_{S}{x}^{2}zdS}=\frac{1023\pi \sqrt{2}}{5}$
:::

:::exercise {fs-id1167793544845} type= 
PROBLEM:
**[T]** Evaluate ${\displaystyle \iint_{S}(xz\text{/}y)dS},$ where *S* is the portion of cylinder $x={y}^{2}$ that lies in the first octant between planes $z=0,z=5,y=1,$ and $y=4.$

> IMAGE {img:fs-id1167793250225} src=../../media/CNX_Calc_Figure_16_06_206.jpg
> alt: A diagram of the given cylinder in three-dimensions. It is cut by the planes z=0, z=5, y=1, and y=4.

:::

:::exercise {fs-id1167794296829} type= class=material-set-2 
PROBLEM:
**[T]** Evaluate ${\displaystyle \iint_{S}(z+y)dS},$ where *S* is the part of the graph of $z=\sqrt{1-{x}^{2}}$ in the first octant between the *xz*-plane and plane $y=3.$

> IMAGE {img:fs-id1167793939278} src=../../media/CNX_Calc_Figure_16_06_207.jpg
> alt: A diagram of the given surface in three dimensions in the first octant between the xz-plane and plane y=3. The given graph of z= the square root of (1-x^2) stretches down in a concave down curve from along (0,y,1) to along (1,y,0). It looks like a portion of a horizontal cylinder with base along the xz-plane and height along the y axis.

SOLUTION:
${\displaystyle \iint_{S}(z+y)dS}\approx 10.1$
:::

:::exercise {fs-id1167793379204} type= class=material-set-2 
PROBLEM:
Evaluate ${\displaystyle \iint_{S}xyzdS}$ if *S* is the part of plane $z=x+y$ that lies over the triangular region in the *xy*-plane with vertices (0, 0, 0), (1, 0, 0), and (0, 2, 0).
:::

:::exercise {fs-id1167793498738} type= 
PROBLEM:
Find the mass of a lamina of density $ρ(x,y,z)=z$ in the shape of hemisphere $z={({a}^{2}-{x}^{2}-{y}^{2})}^{1\text{/}2}.$
SOLUTION:
$m=\pi {a}^{3}$
:::

:::exercise {fs-id1167793658120} type= 
PROBLEM:
Compute ${\displaystyle {\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS,}}$ where $\textbf{F}(x,y,z)=x\textbf{i}-5y\textbf{j}+4z\textbf{k}$ and **N** is an outward normal vector of *S*, where *S* is the union of two squares ${S}_{1}:x=0\text{,}\;0\le y\le 1\text{,}\;0\le z\le 1$ and ${S}_{2}:z=1\text{,}\;0\le x\le 1\text{,}\;0\le y\le 1.$

> IMAGE {img:fs-id1167794222237} src=../../media/CNX_Calc_Figure_16_06_208.jpg
> alt: A diagram in three dimensions. It shows the square formed by the components x=0, 0 <= y <= 1, and 0 <= z <= 1. It also shows the square formed by the components z=1, 0 <= x <= 1, and 0 <= y <= 1.

:::

:::exercise {fs-id1167794138080} type= 
PROBLEM:
Compute ${\displaystyle {\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS,}}$ where $\textbf{F}(x,y,z)=xy\textbf{i}+z\textbf{j}+(x+y)\textbf{k}$ and **N** is an upward pointing normal vector $S$, where *S* is the triangular region of the plane $x+y+z=1$ in the first octant.
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS=\frac{13}{24}}$
:::

:::exercise {fs-id1167793448766} type= 
PROBLEM:
Compute ${\displaystyle {\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS,}}$ where $\textbf{F}(x,y,z)=2yz\textbf{i}+({\text{tan}}^{−1}(xz))\textbf{j}+{e}^{xy}\textbf{k}$ and **N** is an outward normal vector of *S*, where *S* is the surface of sphere ${x}^{2}+{y}^{2}+{z}^{2}=1.$
:::

:::exercise {fs-id1167794021153} type= 
PROBLEM:
Compute ${\displaystyle {\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS,}}$ where $\textbf{F}(x,y,z)=xyz\textbf{i}+xyz\textbf{j}+xyz\textbf{k}$ and **N** is an outward normal vector *S*, where *S* is the surface of the five faces of the unit cube $0\le x\le 1\text{,}\;0\le y\le 1\text{,}\;0\le z\le 1$ missing $z=0.$
SOLUTION:
${\displaystyle \iint_{S}\textbf{F}\cdot \textbf{N}dS=\frac{3}{4}}$
:::
For the following exercises, express the surface integral as an iterated double integral by using a projection on *S* on the *yz*-plane.

:::exercise {fs-id1167793705346} type= 
PROBLEM:
${\displaystyle \iint_{S}x{y}^{2}{z}^{3}dS};$ *S* is the first-octant portion of plane $2x+3y+4z=12.$
:::

:::exercise {fs-id1167794067738} type= 
PROBLEM:
${\displaystyle \iint_{S}({x}^{2}-2y+z)dS;}$ *S* is the portion of the graph of $4x+y=8$ bounded by the coordinate planes and plane $z=6.$
SOLUTION:
${\displaystyle \int_{0}^{8} {\displaystyle \int_{0}^{6} (4-3y+\frac{1}{16}{y}^{2}+z)(\frac{1}{4}\sqrt{17})dzdy}}$
:::
For the following exercises, express the surface integral as an iterated double integral by using a projection on *S* on the *xz*-plane

:::exercise {fs-id1167794283028} type= 
PROBLEM:
${\displaystyle \iint_{S}x{y}^{2}{z}^{3}dS};$ *S* is the first-octant portion of plane $2x+3y+4z=12.$
:::

:::exercise {fs-id1167793486275} type= 
PROBLEM:
${\displaystyle \iint_{S}({x}^{2}-2y+z)dS;}$ *S* is the portion of the graph of $4x+y=8$ bounded by the coordinate planes and plane $z=6.$
SOLUTION:
${\displaystyle \int_{0}^{2} {\displaystyle \int_{0}^{6} [{x}^{2}-2(8-4x)+z]\sqrt{17}dzdx}}$
:::

:::exercise {fs-id1167794012929} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}yzdS},$ where *S* is the first-octant part of plane $x+y+z=λ,$ where $λ$ is a positive constant.
:::

:::exercise {fs-id1167793611134} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}({x}^{2}z+{y}^{2}z)dS},$ where *S* is hemisphere ${x}^{2}+{y}^{2}+{z}^{2}={a}^{2},z\ge 0.$
SOLUTION:
${\displaystyle \iint_{S}({x}^{2}z+{y}^{2}z)dS}=\frac{\pi {a}^{5}}{2}$
:::

:::exercise {fs-id1167793696600} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}zdS},$ where *S* is surface $z=\sqrt{{x}^{2}+{y}^{2}},0\le z\le 2.$
:::

:::exercise {fs-id1167793279308} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}{x}^{2}yzdS},$ where *S* is the part of plane $z=1+2x+3y$ that lies above rectangle $0\le x\le 3\;\text{and}\;0\le y\le 2.$
SOLUTION:
${\displaystyle \iint_{S}{x}^{2}yzdS}=171\sqrt{14}$
:::

:::exercise {fs-id1167794127305} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}yzdS,}$ where *S* is plane $x+y+z=1$ that lies in the first octant.
:::

:::exercise {fs-id1167793570610} type= 
PROBLEM:
Evaluate surface integral ${\displaystyle \iint_{S}yzdS},$ where *S* is the part of plane $z=y+3$ that lies inside cylinder ${x}^{2}+{y}^{2}=1.$
SOLUTION:
${\displaystyle \iint_{S}yzdS}=\frac{\sqrt{2}\pi}{4}$
:::
For the following exercises, use geometric reasoning to evaluate the given surface integrals.

:::exercise {fs-id1167793228877} type= 
PROBLEM:
${\displaystyle \iint_{S}\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}dS},$ where *S* is surface ${x}^{2}+{y}^{2}+{z}^{2}=4,z\ge 0$
:::

:::exercise {fs-id1167793696726} type= 
PROBLEM:
${\displaystyle \iint_{S}(x\textbf{i}+y\textbf{j})\cdot dS},$ where *S* is surface ${x}^{2}+{y}^{2}=4,1\le z\le 3,$ oriented with unit normal vectors pointing outward
SOLUTION:
${\displaystyle \iint_{S}(x\textbf{i}+y\textbf{j})\cdot dS}=16\pi$
:::

:::exercise {fs-id1167793325735} type= 
PROBLEM:
${\displaystyle \iint_{S}(z\textbf{k})\cdot dS},$ where *S* is disc ${x}^{2}+{y}^{2}\le 9$ on plane $z=4,$ oriented with unit normal vectors pointing upward
:::

:::exercise {fs-id1167793697714} type= class=material-set-2 
PROBLEM:
A lamina has the shape of a portion of sphere ${x}^{2}+{y}^{2}+{z}^{2}={a}^{2}$ that lies within cone $z=\sqrt{{x}^{2}+{y}^{2}}.$ Let *S* be the spherical shell centered at the origin with radius *a*, and let *C* be the right circular cone with a vertex at the origin and an axis of symmetry that coincides with the *z*-axis. Determine the mass of the lamina if $ρ(x,y,z)={x}^{2}{y}^{2}z.$

> IMAGE {img:fs-id1167793628572} src=../../media/CNX_Calc_Figure_16_06_209.jpg
> alt: A diagram in three dimensions. A cone opens upward with point at the origin and an asic of symmetry that coincides with the z-axis. The upper half of a hemisphere with center at the origin opens downward and is cut off by the xy-plane.

SOLUTION:
$m=\frac{\pi {a}^{7}}{192}$
:::

:::exercise {fs-id1167793545832} type= class=material-set-2 
PROBLEM:
A lamina has the shape of a portion of sphere ${x}^{2}+{y}^{2}+{z}^{2}={a}^{2}$ that lies within cone $z=\text{cot}{φ}_{0}\sqrt{{x}^{2}+{y}^{2}}$ Let *S* be the spherical shell centered at the origin with radius *a*, and let *C* be the right circular cone with a vertex at the origin and an axis of symmetry that coincides with the *z*-axis. Suppose the angle between the sides of the cone and the *z*-axis is ${ϕ}_{0},\;\text{with}\;0\le {ϕ}_{0}<\frac{\pi}{2}.$ Determine the mass of that portion of the shape enclosed in the intersection of *S* and *C*. Assume $ρ(x,y,z)={x}^{2}{y}^{2}z.$

> IMAGE {img:fs-id1167793254771} src=../../media/CNX_Calc_Figure_16_06_210.jpg
> alt: A diagram in three dimensions. A cone opens upward with point at the origin and an asic of symmetry that coincides with the z-axis. The upper half of a hemisphere with center at the origin opens downward and is cut off by the xy-plane.

:::

:::exercise {fs-id1167793254823} type= 
PROBLEM:
A paper cup has the shape of an inverted right circular cone of height 6 in. and radius of top 3 in. If the cup is full of water weighing $62.5\;\text{lb}\text{/}{\text{ft}}^{3},$ find the total force exerted by the water on the inside surface of the cup.
SOLUTION:
$F\approx 4.57\;\text{lb}.$
:::
For the following exercises, the heat flow vector field for conducting objects is $\textbf{F}=\text{−}k\nabla T,\;\text{where}\;T(x,y,z)$ is the temperature in the object and $k>0$ is a constant that depends on the material. Find the outward flux of **F** across the following surfaces *S* for the given temperature distributions and assume $k=1.$

:::exercise {fs-id1167793442544} type= 
PROBLEM:
$T(x,y,z)=100{e}^{\text{−}x-y};$ *S* consists of the faces of cube $|x|\le 1,|y|\le 1,|z|\le 1.$
:::

:::exercise {fs-id1167794267610} type= 
PROBLEM:
$T(x,y,z)=\text{−}\text{ln}({x}^{2}+{y}^{2}+{z}^{2});$ *S* is sphere ${x}^{2}+{y}^{2}+{z}^{2}={a}^{2}.$
SOLUTION:
$8\pi a$
:::
For the following exercises, consider the radial fields $\text{F}=\frac{\langle x,y,z\rangle}{{({x}^{2}+{y}^{2}+{z}^{2})}^{\frac{p}{2}}}=\frac{\textbf{r}}{{||\text{r}||}^{p}},$ where *p* is a real number. Let *S* consist of spheres *A* and *B* centered at the origin with radii $0<a<b.$ The total outward flux across *S* consists of the outward flux across the outer sphere *B* less the flux into *S* across inner sphere *A*.

> IMAGE {img:fs-id1167793569409} src=../../media/CNX_Calc_Figure_16_06_211.jpg
> alt: A diagram in three dimensions of two spheres, one contained completely inside the other. Their centers are both at the origin. Arrows point in toward the origin from outside both spheres.

:::exercise {fs-id1167793569423} type= 
PROBLEM:
Find the total flux across *S* with $p=0.$
:::

:::exercise {fs-id1167793569480} type= 
PROBLEM:
Show that for $p=3$ the flux across *S* is independent of *a* and *b*.
SOLUTION:
The net flux is zero.
:::

## Glossary
- {def} **flux integral**: another name for a surface integral of a vector field; the preferred term in physics and engineering
- {def} **grid curves**: curves on a surface that are parallel to grid lines in a coordinate plane
- {def} **heat flow**: a vector field proportional to the negative temperature gradient in an object
- {def} **mass flux**: the rate of mass flow of a fluid per unit area, measured in mass per unit time per unit area
- {def} **orientation of a surface**: if a surface has an “inner” side and an “outer” side, then an orientation is a choice of the inner or the outer side; the surface could also have “upward” and “downward” orientations
- {def} **parameter domain (parameter space)**: the region of the *uv* plane over which the parameters *u* and *v* vary for parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$
- {def} **parameterized surface (parametric surface)**: a surface given by a description of the form $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle ,$ where the parameters *u* and *v* vary over a parameter domain in the *uv*-plane
- {def} **regular parameterization**: parameterization $\textbf{r}(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$ such that ${\textbf{r}}_{u}\;\times \;{\textbf{r}}_{v}$ is not zero for any point $(u,v)$ in the parameter domain
- {def} **surface area**: the area of surface *S* given by the surface integral ${\displaystyle \int {\displaystyle \int_{S}dS}}$
- {def} **surface integral**: an integral of a function over a surface
- {def} **surface integral of a scalar-valued function**: a surface integral in which the integrand is a scalar function
- {def} **surface integral of a vector field**: a surface integral in which the integrand is a vector field

# Quadric Surfaces

## Learning Objectives {section:learning-objectives}
- Identify a cylinder as a type of three-dimensional surface.
- Recognize the main features of ellipsoids, paraboloids, and hyperboloids.
- Use traces to draw the intersections of quadric surfaces with the coordinate planes.

We have been exploring vectors and vector operations in three-dimensional space, and we have developed equations to describe lines, planes, and spheres. In this section, we use our knowledge of planes and spheres, which are examples of three-dimensional figures called *surfaces*, to explore a variety of other surfaces that can be graphed in a three-dimensional coordinate system.

## Identifying Cylinders
The first surface we’ll examine is the cylinder. Although most people immediately think of a hollow pipe or a soda straw when they hear the word *cylinder*, here we use the broad mathematical meaning of the term. As we have seen, cylindrical surfaces don’t have to be circular. A rectangular heating duct is a cylinder, as is a rolled-up yoga mat, the cross-section of which is a spiral shape.
In the two-dimensional coordinate plane, the equation ${x}^{2}+{y}^{2}=9$ describes a circle centered at the origin with radius $3.$ In three-dimensional space, this same equation represents a surface. Imagine copies of a circle stacked on top of each other centered on the *z*-axis ([ref:CNX_Calc_Figure_12_06_001]), forming a hollow tube. We can then construct a cylinder from the set of lines parallel to the *z*-axis passing through circle ${x}^{2}+{y}^{2}=9$ in the *xy*-plane, as shown in the figure. In this way, any curve in one of the coordinate planes can be extended to become a surface.

> FIGURE {fig:CNX_Calc_Figure_12_06_001} src=../../media/CNX_Calc_Figure_12_06_001.jpg
> alt: This figure a 3-dimensional coordinate system. It has a right circular center with the z-axis through the center. The cylinder also has points labeled on the x and y axis at (3, 0, 0) and (0, 3, 0).
> caption: In three-dimensional space, the graph of equation ${x}^{2}+{y}^{2}=9$ is a cylinder with radius $3$ centered on the *z*-axis. It continues indefinitely in the positive and negative directions.

:::note [definition] Definition
A set of lines parallel to a given line passing through a given curve is known as a cylindrical surface, or {term:cylinder}. The parallel lines are called {term:rulings}.
:::
From this definition, we can see that we still have a cylinder in three-dimensional space, even if the curve is not a circle. Any curve can form a cylinder, and the rulings that compose the cylinder may be parallel to any given line ([ref:CNX_Calc_Figure_12_06_002]).

> FIGURE {fig:CNX_Calc_Figure_12_06_002} src=../../media/CNX_Calc_Figure_12_06_002.jpg
> alt: This figure has a 3-dimensional surface that begins on the y-axis and curves upward. There is also the x and z axes labeled.
> caption: In three-dimensional space, the graph of equation $z={x}^{3}$ is a cylinder, or a cylindrical surface with rulings parallel to the *y*-axis.

:::example {ex:fs-id1163723172006} Graphing Cylindrical Surfaces

:::exercise {fs-id1163724075630} type= 
PROBLEM:
Sketch the graphs of the following cylindrical surfaces.
a. ${x}^{2}+{z}^{2}=25$
b. $z=2{x}^{2}-y$
c. $y=\text{sin}\;x$
SOLUTION:
a. The variable $y$ can take on any value without limit. Therefore, the lines ruling this surface are parallel to the *y*-axis. The intersection of this surface with the *xz*-plane forms a circle centered at the origin with radius $5$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_06_003} src=../../media/CNX_Calc_Figure_12_06_003.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a right circular cylinder on its side with the y-axis in the center. The cylinder intersects the x-axis at (5, 0, 0). It also has two points of intersection labeled on the z-axis at (0, 0, 5) and (0, 0, -5).
> caption: The graph of equation ${x}^{2}+{z}^{2}=25$ is a cylinder with radius $5$ centered on the *y*-axis.

b. In this case, the equation contains all three variables $-x,y,$ and $z-$ so none of the variables can vary arbitrarily. The easiest way to visualize this surface is to use a computer graphing utility (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_06_004} src=../../media/CNX_Calc_Figure_12_06_006.jpg
> alt: This figure has a surface in the first octant. The cross section of the solid is a parabola.
> caption: 

c. In this equation, the variable *z* can take on any value without limit. Therefore, the lines composing this surface are parallel to the *z*-axis. The intersection of this surface with the *xy*-plane outlines curve $y=\;\text{sin}\;x$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_06_005} src=../../media/CNX_Calc_Figure_12_06_005.jpg
> alt: This figure is a three dimensional surface. A cross section of the surface parallel to the x y plane would be the sine curve.
> caption: The graph of equation $y=\text{sin}\;x$ is formed by a set of lines parallel to the *z*-axis passing through curve $y=\text{sin}\;x$ in the *xy*-plane.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723686564} type= 
PROBLEM:
Sketch or use a graphing tool to view the graph of the cylindrical surface defined by equation $z={y}^{2}.$
SOLUTION:

> IMAGE {img:fs-id1163723968845} src=../../media/CNX_Calc_Figure_12_06_004.jpg
> alt: This figure is a surface above the x y plane. A cross section of this surface parallel to the y z plane would be a parabola. The surface sits on top of the x y plane.

COMMENTARY: Hint
The variable $x$ can take on any value without limit.
:::
:::
When sketching surfaces, we have seen that it is useful to sketch the intersection of the surface with a plane parallel to one of the coordinate planes. These curves are called traces. We can see them in the plot of the cylinder in [ref:CNX_Calc_Figure_12_06_007].

:::note [definition] Definition
The {term:traces} of a surface are the cross-sections created when the surface intersects a plane parallel to one of the coordinate planes.
:::

> FIGURE {fig:CNX_Calc_Figure_12_06_007} src=../../media/CNX_Calc_Figure_12_06_007.jpg
> alt: This figure has two images. The first image is a surface. A cross section of the surface parallel to the x z plane would be a sine curve. The second image is the sine curve in the x y plane.
> caption: (a) This is one view of the graph of equation $z=\text{sin}\;x.$ (b) To find the trace of the graph in the *xz*-plane, set $y=0.$ The trace is simply a two-dimensional sine wave.

Traces are useful in sketching cylindrical surfaces. For a cylinder in three dimensions, though, only one set of traces is useful. Notice, in [ref:CNX_Calc_Figure_12_06_007], that the trace of the graph of $z=\text{sin}\;x$ in the *xz*-plane is useful in constructing the graph. The trace in the *xy*-plane, though, is just a series of parallel lines, and the trace in the *yz*-plane is simply one line.
Cylindrical surfaces are formed by a set of parallel lines. Not all surfaces in three dimensions are constructed so simply, however. We now explore more complex surfaces, and traces are an important tool in this investigation.

## Quadric Surfaces
We have learned about surfaces in three dimensions described by first-order equations; these are planes. Some other common types of surfaces can be described by second-order equations. We can view these surfaces as three-dimensional extensions of the conic sections we discussed earlier: the ellipse, the parabola, and the hyperbola. We call these graphs quadric surfaces.

:::note [definition] Definition
{term:Quadric surfaces} are the graphs of equations that can be expressed in the form

$A{x}^{2}+B{y}^{2}+C{z}^{2}+Dxy+Exz+Fyz+Gx+Hy+Jz+K=0.$  {eq:fs-id1163723760071}

:::
When a quadric surface intersects a coordinate plane, the trace is a conic section.
An {term:ellipsoid} is a surface described by an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1.$ Set $x=0$ to see the trace of the ellipsoid in the *yz*-plane. To see the traces in the *xy*- and *xz*-planes, set $z=0$ and $y=0,$ respectively. Notice that, if $a=b,$ the trace in the *xy*-plane is a circle. Similarly, if $a=c,$ the trace in the *xz*-plane is a circle and, if $b=c,$ then the trace in the *yz*-plane is a circle. A sphere, then, is an ellipsoid with $a=b=c.$

:::example {ex:fs-id1163723094633} Sketching an Ellipsoid

:::exercise {fs-id1163723947564} type= 
PROBLEM:
Sketch the ellipsoid $\frac{{x}^{2}}{{2}^{2}}+\frac{{y}^{2}}{{3}^{2}}+\frac{{z}^{2}}{{5}^{2}}=1.$
SOLUTION:
Start by sketching the traces. To find the trace in the *xy*-plane, set $z=0\text{:}$ $\frac{{x}^{2}}{{2}^{2}}+\frac{{y}^{2}}{{3}^{2}}=1$ (see [ref:CNX_Calc_Figure_12_06_008]). To find the other traces, first set $y=0$ and then set $x=0.$

> FIGURE {fig:CNX_Calc_Figure_12_06_008} src=../../media/CNX_Calc_Figure_12_06_008.jpg
> alt: This figure has three images. The first image is an oval centered around the origin of the rectangular coordinate system. It intersects the x axis at -2 and 2. It intersects the y-axis at -3 and 3. The second image is an oval centered around the origin of the rectangular coordinate system. It intersects the x-axis at -2 and 2 and the y-axis at -5 and 5. The third image is an oval centered around the origin of the rectangular coordinate system. It intersects the x-axis at -3 and 3 and the y-axis at -5 and 5.
> caption: (a) This graph represents the trace of equation $\frac{{x}^{2}}{{2}^{2}}+\frac{{y}^{2}}{{3}^{2}}+\frac{{z}^{2}}{{5}^{2}}=1$ in the *xy*-plane, when we set $z=0.$ (b) When we set $y=0,$ we get the trace of the ellipsoid in the *xz*-plane, which is an ellipse. (c) When we set $x=0,$ we get the trace of the ellipsoid in the *yz*-plane, which is also an ellipse.

Now that we know what traces of this solid look like, we can sketch the surface in three dimensions ([ref:CNX_Calc_Figure_12_06_009]).

> FIGURE {fig:CNX_Calc_Figure_12_06_009} src=../../media/CNX_Calc_Figure_12_06_009.jpg
> alt: This figure has two images. The first image is a vertical ellipse. There two curves drawn with dashed lines around the center horizontally and vertically to give the image a 3-dimensional shape. The second image is a solid elliptical shape with the center at the origin of the 3-dimensional coordinate system.
> caption: (a) The traces provide a framework for the surface. (b) The center of this ellipsoid is the origin.

:::
:::
The trace of an ellipsoid is an ellipse in each of the coordinate planes. However, this does not have to be the case for all quadric surfaces. Many quadric surfaces have traces that are different kinds of conic sections, and this is usually indicated by the name of the surface. For example, if a surface can be described by an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}=\frac{z}{c},$ then we call that surface an {term:elliptic paraboloid}. The trace in the *xy*-plane is an ellipse, but the traces in the *xz*-plane and *yz*-plane are parabolas ([ref:CNX_Calc_Figure_12_06_010]). Other elliptic paraboloids can have other orientations simply by interchanging the variables to give us a different variable in the linear term of the equation $\frac{{x}^{2}}{{a}^{2}}+\frac{{z}^{2}}{{c}^{2}}=\frac{y}{b}$ or $\frac{{y}^{2}}{{b}^{2}}+\frac{{z}^{2}}{{c}^{2}}=\frac{x}{a}.$

> FIGURE {fig:CNX_Calc_Figure_12_06_010} src=../../media/CNX_Calc_Figure_12_06_010.jpg
> alt: This figure is the image of a surface. It is in the 3-dimensional coordinate system on top of the origin. A cross section of this surface parallel to the x y plane would be an ellipse.
> caption: This quadric surface is called an *elliptic paraboloid*.

:::example {ex:fs-id1163724066636} Identifying Traces of Quadric Surfaces

:::exercise {fs-id1163723199257} type= 
PROBLEM:
Describe the traces of the elliptic paraboloid ${x}^{2}+\frac{{y}^{2}}{{2}^{2}}=\frac{z}{5}.$
SOLUTION:
To find the trace in the *xy*-plane, set $z=0\text{:}$ ${x}^{2}+\frac{{y}^{2}}{{2}^{2}}=0.$ The trace in the plane $z=0$ is simply one point, the origin. Since a single point does not tell us what the shape is, we can move up the *z*-axis to an arbitrary plane to find the shape of other traces of the figure.
The trace in plane $z=5$ is the graph of equation ${x}^{2}+\frac{{y}^{2}}{{2}^{2}}=1,$ which is an ellipse. In the *xz*-plane, the equation becomes $z=5{x}^{2}.$ The trace is a parabola in this plane and in any plane with the equation $y=b.$
In planes parallel to the *yz*-plane, the traces are also parabolas, as we can see in the following figure.

> FIGURE {fig:CNX_Calc_Figure_12_06_011} src=../../media/CNX_Calc_Figure_12_06_011.jpg
> alt: This figure has four images. The first image is the image of a surface. It is in the 3-dimensional coordinate system on top of the origin. A cross section of this surface parallel to the x y plane would be an ellipse. A cross section parallel to the x z plane would be a parabola. A cross section of the surface parallel to the y z plane would be a parabola. The second image is the cross section parallel to the x y plane and is an ellipse. The third image is the cross section parallel to the x z plane and is a parabola. The fourth image is the cross section parallel to the y z plane and is a parabola.
> caption: (a) The paraboloid ${x}^{2}+\frac{{y}^{2}}{{2}^{2}}=\frac{z}{5}.$ (b) The trace in plane $z=5.$ (c) The trace in the *xz*-plane. (d) The trace in the *yz*-plane.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724017684} type= 
PROBLEM:
A hyperboloid of one sheet is any surface that can be described with an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}-\frac{{z}^{2}}{{c}^{2}}=1.$ Describe the traces of the hyperboloid of one sheet given by equation $\frac{{x}^{2}}{{3}^{2}}+\frac{{y}^{2}}{{2}^{2}}-\frac{{z}^{2}}{{5}^{2}}=1.$
SOLUTION:
The traces parallel to the *xy*-plane are ellipses and the traces parallel to the *xz*- and *yz*-planes are hyperbolas. Specifically, the trace in the *xy*-plane is ellipse $\frac{{x}^{2}}{{3}^{2}}+\frac{{y}^{2}}{{2}^{2}}=1,$ the trace in the *xz*-plane is hyperbola $\frac{{x}^{2}}{{3}^{2}}-\frac{{z}^{2}}{{5}^{2}}=1,$ and the trace in the *yz*-plane is hyperbola $\frac{{y}^{2}}{{2}^{2}}-\frac{{z}^{2}}{{5}^{2}}=1$ (see the following figure).

> IMAGE {img:fs-id1163724075232} src=../../media/CNX_Calc_Figure_12_06_012.jpg
> alt: This figure has four images. The first image is an ellipse centered at the origin of a rectangular coordinate system. It intersects the x axis at -3 and 3. It intersects the y axis at -2 and 2. The second image is the graph of a hyperbola. It is two curves one opening in the negative x direction and a symmetric one in the positive x direction. The third image is the graph of a hyperbola in the y z plane. It is opening in the negative y direction and a symmetric curve opening in the positive y direction. The fourth image is a 3-dimensional surface. It top and bottom cross sections would be circular. A vertical intersection would be a hyperbola.

COMMENTARY: Hint
To find the traces in the coordinate planes, set each variable to zero individually.
:::
:::
Hyperboloids of one sheet have some fascinating properties. For example, they can be constructed using straight lines, such as in the sculpture in [ref:CNX_Calc_Figure_12_06_013](a). In fact, cooling towers for nuclear power plants are often constructed in the shape of a hyperboloid. The builders are able to use straight steel beams in the construction, which makes the towers very strong while using relatively little material ([ref:CNX_Calc_Figure_12_06_013](b)).

> FIGURE {fig:CNX_Calc_Figure_12_06_013} src=../../media/CNX_Calc_Figure_12_06_020.jpg
> alt: This figure has two images. The first image is a sculpture made of parallel sticks, curved together in a circle with a hyperbolic cross section. The second image is a nuclear power plant. The towers are hyperbolic shaped.
> caption: (a) A sculpture in the shape of a hyperboloid can be constructed of straight lines. (b) Cooling towers for nuclear power plants are often built in the shape of a hyperboloid.

:::example {ex:fs-id1163723955608} Chapter Opener: Finding the Focus of a Parabolic Reflector

:::exercise {fs-id1163723363450} type= 
PROBLEM:
Energy hitting the surface of a parabolic reflector is concentrated at the focal point of the reflector ([ref:CNX_Calc_Figure_12_06_014]). If the surface of a parabolic reflector is described by equation $\frac{{x}^{2}}{100}+\frac{{y}^{2}}{100}=\frac{z}{4},$ where is the focal point of the reflector?

> FIGURE {fig:CNX_Calc_Figure_12_06_014} src=../../media/CNX_Calc_Figure_12_06_021.jpg
> alt: This figure has two images. The first image is a picture of satellite dishes with parabolic reflectors. The second image is a parabolic curve on a line segment. The bottom of the curve is at point V. There is a line segment perpendicular to the other line segment through V. There is a point on this line segment labeled F. There are 3 lines from F to the parabola, intersecting at P sub 1, P sub 2, and P sub 3. There are also three vertical lines from P sub 1 to Q sub 1, from P sub 2 to Q sub 2, and from P sub 3 to Q sub 3.
> caption: Energy reflects off of the parabolic reflector and is collected at the focal point. (credit: modification of CGP Grey, Wikimedia Commons)

SOLUTION:
Since *z* is the first-power variable, the axis of the reflector corresponds to the *z*-axis. The coefficients of ${x}^{2}$ and ${y}^{2}$ are equal, so the cross-section of the paraboloid perpendicular to the *z*-axis is a circle. We can consider a trace in the *xz*-plane or the *yz*-plane; the result is the same. Setting $y=0,$ the trace is a parabola opening up along the *z*-axis, with standard equation ${x}^{2}=4pz,$ where $p$ is the focal length of the parabola. In this case, this equation becomes ${x}^{2}=100\cdot \frac{z}{4}=4pz$ or $25=4p.$ So *p* is $6.25$ m, which tells us that the focus of the paraboloid is $6.25$ m up the axis from the vertex. Because the vertex of this surface is the origin, the focal point is $(0,0,6.25).$
:::
:::
Seventeen standard quadric surfaces can be derived from the general equation

$A{x}^{2}+B{y}^{2}+C{z}^{2}+Dxy+Exz+Fyz+Gx+Hy+Jz+K=0.$  {eq:fs-id1163723955203}

The following figures summarizes the most important ones.
In the following two figures, the “axis” of a quadric surface may or may not be an axis of symmetry. However, all traces on the surface formed by any plane perpendicular to an “axis” will be of the same conic section type.

> FIGURE {fig:CNX_Calc_Figure_12_06_022} src=../../media/CNX_Calc_Figure_12_06_022.jpg
> alt: This figure is of a table with two columns and three rows. The three rows represent the first 6 quadric surfaces: ellipsoid, hyperboloid of one sheet, and hyperboloid of two sheets. The equations and traces are in the first column. The second column has the graphs of the surfaces. The ellipsoid graph is a vertical oblong round shape. The hyperboloid of one sheet is circular on the top and the bottom and narrow in the middle. The hyperboloid in two sheets has two parabolic domes opposite of each other.
> caption: Characteristics of Common Quadratic Surfaces: Ellipsoid, {term:Hyperboloid of One Sheet}, {term:Hyperboloid of Two Sheets}.

> FIGURE {fig:CNX_Calc_Figure_12_06_023} src=../../media/CNX_Calc_Figure_12_06_023.jpg
> alt: This figure is of a table with two columns and three rows. The three rows represent the second 6 quadric surfaces: elliptic cone, elliptic paraboloid, and hyperbolic paraboloid. The equations and traces are in the first column. The second column has the graphs of the surfaces. The elliptic cone has two cones touching at the points. The elliptic paraboloid is similar to a cone but oblong. The hyperbolic paraboloid has a bend in the middle similar to a saddle.
> caption: Characteristics of Common Quadratic Surfaces: {term:Elliptic Cone}, {term:Elliptic Paraboloid}, Hyperbolic Paraboloid.

:::example {ex:fs-id1163724069408} Identifying Equations of Quadric Surfaces

:::exercise {fs-id1163723987244} type= 
PROBLEM:
Identify the surfaces represented by the given equations.
a. $16{x}^{2}+9{y}^{2}+16{z}^{2}=144$
b. $9{x}^{2}-18x+4{y}^{2}+16y-36z+25=0$
SOLUTION:
a. The $x,y,$ and $z$ terms are all squared, and are all positive, so this is probably an ellipsoid. However, let’s put the equation into the standard form for an ellipsoid just to be sure. We have

$16{x}^{2}+9{y}^{2}+16{z}^{2}=144.$  {eq:fs-id1163723988061}

Dividing through by 144 gives

$\frac{{x}^{2}}{9}+\frac{{y}^{2}}{16}+\frac{{z}^{2}}{9}=1.$  {eq:fs-id1163723472259}

So, this is, in fact, an ellipsoid, centered at the origin.
b. We first notice that the $z$ term is raised only to the first power, so this is either an elliptic paraboloid or a hyperbolic paraboloid. We also note there are $x$ terms and $y$ terms that are not squared, so this quadric surface is not centered at the origin. We need to complete the square to put this equation in one of the standard forms. We have

$\begin{array}{rll} \\ 9{x}^{2}-18x+4{y}^{2}+16y-36z+25 & = & 0 \\ 9{x}^{2}-18x+4{y}^{2}+16y+25 & = & 36z \\ 9({x}^{2}-2x)+4({y}^{2}+4y)+25 & = & 36z \\ 9({x}^{2}-2x+1-1)+4({y}^{2}+4y+4-4)+25 & = & 36z \\ 9{(x-1)}^{2}-9+4{(y+2)}^{2}-16+25 & = & 36z \\ 9{(x-1)}^{2}+4{(y+2)}^{2} & = & 36z \\ \frac{{(x-1)}^{2}}{4}+\frac{{(y+2)}^{2}}{9} & = & z.\end{array}$  {eq:fs-id1163723947136}

This is an elliptic paraboloid centered at $(1,2,0).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723712166} type= 
PROBLEM:
Identify the surface represented by equation $9{x}^{2}+{y}^{2}-{z}^{2}+2z-10=0.$
SOLUTION:
Hyperboloid of one sheet, centered at $(0,0,1)$
COMMENTARY: Hint
Look at the signs and powers of the $x,y,\;\text{and}\;z$ terms.
:::
:::

## Key Concepts {section:key-concepts}
- A set of lines parallel to a given line passing through a given curve is called a *cylinder*, or a *cylindrical surface*. The parallel lines are called *rulings*.
- The intersection of a three-dimensional surface and a plane is called a *trace*. To find the trace in the *xy*-, *yz*-, or *xz*-planes, set $z=0,x=0,\;\text{or}\;y=0,$ respectively.
- Quadric surfaces are three-dimensional surfaces with traces composed of conic sections. Every quadric surface can be expressed with an equation of the form $A{x}^{2}+B{y}^{2}+C{z}^{2}+Dxy+Exz+Fyz+Gx+Hy+Jz+K=0.$
- To sketch the graph of a quadric surface, start by sketching the traces to understand the framework of the surface.
- Important quadric surfaces are summarized in [ref:CNX_Calc_Figure_12_06_022] and [ref:CNX_Calc_Figure_12_06_023].

##  {section:section-exercises}
For the following exercises, sketch and describe the cylindrical surface of the given equation.

:::exercise {fs-id1163723474587} type= 
PROBLEM:
**[T]** ${x}^{2}+{z}^{2}=1$
SOLUTION:
The surface is a cylinder with the rulings parallel to the *y*-axis.

> IMAGE {img:fs-id1163723499798} src=../../media/CNX_Calc_Figure_12_06_219.jpg
> alt: This figure is a circular cylinder inside of a box. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163723154569} type= 
PROBLEM:
**[T]** ${x}^{2}+{y}^{2}=9$
:::

:::exercise {fs-id1163724059935} type= 
PROBLEM:
**[T]** $z=\text{cos}(\frac{\pi}{2}+x)$
SOLUTION:
The surface is a cylinder with rulings parallel to the *y*-axis.

> IMAGE {img:fs-id1163723281456} src=../../media/CNX_Calc_Figure_12_06_202.jpg
> alt: This figure is a surface inside of a box. Its cross section parallel to the x z plane would be a cosine curve. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163723641286} type= 
PROBLEM:
**[T]** $z={e}^{x}$
:::

:::exercise {fs-id1163723168688} type= 
PROBLEM:
**[T]** $z=9-{y}^{2}$
SOLUTION:
The surface is a cylinder with rulings parallel to the *x*-axis.

> IMAGE {img:fs-id1163724079607} src=../../media/CNX_Calc_Figure_12_06_207.jpg
> alt: This figure is a surface inside of a box. Its cross section parallel to the y z plane would be an upside down parabola. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163723762986} type= 
PROBLEM:
**[T]** $z=\text{ln}(x)$
:::
For the following exercises, the graph of a quadric surface is given.
a. Specify the name of the quadric surface.
b. Determine the axis of the quadric surface.

:::exercise {fs-id1163723216727} type= 
PROBLEM:

> IMAGE {img:fs-id1163723853930} src=../../media/CNX_Calc_Figure_12_06_215.jpg
> alt: This figure is a surface inside of a box. Its cross section parallel to the y z plane would be an upside down parabola. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

SOLUTION:
a. Cylinder; b. The *x*-axis
:::

:::exercise {fs-id1163724096365} type= 
PROBLEM:

> IMAGE {img:fs-id1163723171092} src=../../media/CNX_Calc_Figure_12_06_214.jpg
> alt: This figure is a surface inside of a box. It is an elliptical cone. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163724069517} type= 
PROBLEM:

> IMAGE {img:fs-id1163724016358} src=../../media/CNX_Calc_Figure_12_06_221.jpg
> alt: This figure is a surface in the 3-dimensional coordinate system. There are two conical shapes facing away from each other. They have the x axis through the center.

SOLUTION:
a. Hyperboloid of two sheets; b. The *x*-axis
:::

:::exercise {fs-id1163724119424} type= 
PROBLEM:

> IMAGE {img:fs-id1163724119428} src=../../media/CNX_Calc_Figure_12_06_222.jpg
> alt: This figure is a surface in the 3-dimensional coordinate system. It is a parabolic surface with the x axis through the center.

:::
For the following exercises, match the given quadric surface with its corresponding equation in standard form.
a. $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}-\frac{{z}^{2}}{12}=1$
b. $\frac{{x}^{2}}{4}-\frac{{y}^{2}}{9}-\frac{{z}^{2}}{12}=1$
c. $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}+\frac{{z}^{2}}{12}=1$
d. $z=4{x}^{2}+3{y}^{2}$
e. $z=4{x}^{2}-{y}^{2}$
f. $4{x}^{2}+{y}^{2}-{z}^{2}=0$

:::exercise {fs-id1163723752009} type= 
PROBLEM:
Hyperboloid of two sheets
SOLUTION:
b.
:::

:::exercise {fs-id1163723967339} type= 
PROBLEM:
Ellipsoid
:::

:::exercise {fs-id1163724047772} type= 
PROBLEM:
Elliptic paraboloid
SOLUTION:
d.
:::

:::exercise {fs-id1163723759297} type= 
PROBLEM:
Hyperbolic paraboloid
:::

:::exercise {fs-id1163723474947} type= 
PROBLEM:
Hyperboloid of one sheet
SOLUTION:
a.
:::

:::exercise {fs-id1163724054311} type= 
PROBLEM:
Elliptic cone
:::
For the following exercises, rewrite the given equation of the quadric surface in standard form. Identify the surface.

:::exercise {fs-id1163724130325} type= 
PROBLEM:
$\text{−}{x}^{2}+36{y}^{2}+36{z}^{2}=9$
SOLUTION:
$-\frac{{x}^{2}}{9}+\frac{{y}^{2}}{\frac{1}{4}}+\frac{{z}^{2}}{\frac{1}{4}}=1,$ hyperboloid of one sheet with the *x*-axis as its axis of symmetry
:::

:::exercise {fs-id1163723804078} type= 
PROBLEM:
$−4{x}^{2}+25{y}^{2}+{z}^{2}=100$
:::

:::exercise {fs-id1163724130345} type= 
PROBLEM:
$−3{x}^{2}+5{y}^{2}-{z}^{2}=10$
SOLUTION:
$-\frac{{x}^{2}}{\frac{10}{3}}+\frac{{y}^{2}}{2}-\frac{{z}^{2}}{10}=1,$ hyperboloid of two sheets with the *y*-axis as its axis of symmetry
:::

:::exercise {fs-id1163723237240} type= 
PROBLEM:
$3{x}^{2}-{y}^{2}-6{z}^{2}=18$
:::

:::exercise {fs-id1163723140518} type= 
PROBLEM:
$5y={x}^{2}-{z}^{2}$
SOLUTION:
$y=-\frac{{z}^{2}}{5}+\frac{{x}^{2}}{5},$ hyperbolic paraboloid with the *y*-axis as its axis of symmetry
:::

:::exercise {fs-id1163723299201} type= 
PROBLEM:
$8{x}^{2}-5{y}^{2}-10z=0$
:::

:::exercise {fs-id1163723959366} type= 
PROBLEM:
${x}^{2}+5{y}^{2}+3{z}^{2}-15=0$
SOLUTION:
$\frac{{x}^{2}}{15}+\frac{{y}^{2}}{3}+\frac{{z}^{2}}{5}=1,$ ellipsoid
:::

:::exercise {fs-id1163723268306} type= 
PROBLEM:
$63{x}^{2}+7{y}^{2}+9{z}^{2}-63=0$
:::

:::exercise {fs-id1163723268256} type= 
PROBLEM:
${x}^{2}+5{y}^{2}-8{z}^{2}=0$
SOLUTION:
$\frac{{x}^{2}}{40}+\frac{{y}^{2}}{8}-\frac{{z}^{2}}{5}=0,$ elliptic cone with the *z*-axis as its axis of symmetry
:::

:::exercise {fs-id1163723981603} type= 
PROBLEM:
$5{x}^{2}-4{y}^{2}+20{z}^{2}=0$
:::

:::exercise {fs-id1163723094496} type= 
PROBLEM:
$6x=3{y}^{2}+2{z}^{2}$
SOLUTION:
$x=\frac{{y}^{2}}{2}+\frac{{z}^{2}}{3},$ elliptic paraboloid with the *x*-axis as its axis of symmetry
:::

:::exercise {fs-id1163723216853} type= 
PROBLEM:
$49y={x}^{2}+7{z}^{2}$
:::
For the following exercises, find the trace of the given quadric surface in the specified plane of coordinates and sketch it.

:::exercise {fs-id1163723200811} type= 
PROBLEM:
**[T]** ${x}^{2}+{z}^{2}+4y=0,z=0$
SOLUTION:
Parabola $y=-\frac{{x}^{2}}{4},$

> IMAGE {img:fs-id1163724031167} src=../../media/CNX_Calc_Figure_12_06_223.jpg
> alt: This figure is the graph of an upside down parabola with its highest point at the origin of a rectangular coordinate system.

:::

:::exercise {fs-id1163723154595} type= 
PROBLEM:
**[T]** ${x}^{2}+{z}^{2}+4y=0,x=0$
:::

:::exercise {fs-id1163723334535} type= 
PROBLEM:
**[T]** $−4{x}^{2}+25{y}^{2}+{z}^{2}=100,x=0$
SOLUTION:
Ellipse $\frac{{y}^{2}}{4}+\frac{{z}^{2}}{100}=1,$

> IMAGE {img:fs-id1163724027022} src=../../media/CNX_Calc_Figure_12_06_206.jpg
> alt: This figure is the graph of an ellipse centered at the origin of a rectangular coordinate system.

:::

:::exercise {fs-id1163724164435} type= 
PROBLEM:
**[T]** $−4{x}^{2}+25{y}^{2}+{z}^{2}=100,y=0$
:::

:::exercise {fs-id1163724069302} type= 
PROBLEM:
**[T]** ${x}^{2}+\frac{{y}^{2}}{4}+\frac{{z}^{2}}{100}=1,x=0$
SOLUTION:
Ellipse $\frac{{y}^{2}}{4}+\frac{{z}^{2}}{100}=1,$

> IMAGE {img:fs-id1163724087489} src=../../media/CNX_Calc_Figure_12_06_209.jpg
> alt: This figure is the graph of an ellipse centered at the origin of a rectangular coordinate system.

:::

:::exercise {fs-id1163724087465} type= 
PROBLEM:
**[T]** ${x}^{2}-y-{z}^{2}=1,y=0$
:::

:::exercise {fs-id1163724147260} type= 
PROBLEM:
Use the graph of the given quadric surface to answer the questions.

> IMAGE {img:fs-id1163724147268} src=../../media/CNX_Calc_Figure_12_06_226.jpg
> alt: This figure is a surface inside of a box. It is an oval solid on its side. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

a. Specify the name of the quadric surface.
b. Which of the equations—$16{x}^{2}+9{y}^{2}+36{z}^{2}=3600,9{x}^{2}+36{y}^{2}+16{z}^{2}=3600,$ or $36{x}^{2}+9{y}^{2}+16{z}^{2}=3600$—corresponds to the graph?
c. Use b. to write the equation of the quadric surface in standard form.
SOLUTION:
a. Ellipsoid; b. The third equation; c. $\frac{{x}^{2}}{100}+\frac{{y}^{2}}{400}+\frac{{z}^{2}}{225}=1$
:::

:::exercise {fs-id1163723094512} type= 
PROBLEM:
Use the graph of the given quadric surface to answer the questions.

> IMAGE {img:fs-id1163723110274} src=../../media/CNX_Calc_Figure_12_06_227.jpg
> alt: This figure is a surface inside of a box. It is a parabolic solid opening up vertically. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

a. Specify the name of the quadric surface.
b. Which of the equations—$36z=9{x}^{2}+{y}^{2},9{x}^{2}+4{y}^{2}=36z,\;\text{or}\;-36z=−81{x}^{2}+4{y}^{2}$—corresponds to the graph above?
c. Use b. to write the equation of the quadric surface in standard form.
:::
For the following exercises, the equation of a quadric surface is given.
a. Use the method of completing the square to write the equation in standard form.
b. Identify the surface.

:::exercise {fs-id1163723277869} type= 
PROBLEM:
${x}^{2}+2{z}^{2}+6x-8z+1=0$
SOLUTION:
a. $\frac{{(x+3)}^{2}}{16}+\frac{{(z-2)}^{2}}{8}=1;$ b. Cylinder centered at $(−3,2)$ with rulings parallel to the *y*-axis
:::

:::exercise {fs-id1163723473648} type= 
PROBLEM:
$4{x}^{2}-{y}^{2}+{z}^{2}-8x+2y+2z+3=0$
:::

:::exercise {fs-id1163723494800} type= 
PROBLEM:
${x}^{2}+4{y}^{2}-4{z}^{2}-6x-16y-16z+5=0$
SOLUTION:
a. $\frac{{(x-3)}^{2}}{4}+{(y-2)}^{2}-{(z+2)}^{2}=1;$ b. Hyperboloid of one sheet centered at $(3,2,−2),$ with the *z*-axis as its axis of symmetry
:::

:::exercise {fs-id1163724126729} type= 
PROBLEM:
${x}^{2}+{z}^{2}-4y+4=0$
:::

:::exercise {fs-id1163724105823} type= 
PROBLEM:
${x}^{2}+\frac{{y}^{2}}{4}-\frac{{z}^{2}}{3}+6x+9=0$
SOLUTION:
a. ${(x+3)}^{2}+\frac{{y}^{2}}{4}-\frac{{z}^{2}}{3}=0;$ b. Elliptic cone centered at $(−3,0,0),$ with the *z*-axis as its axis of symmetry
:::

:::exercise {fs-id1163724116664} type= 
PROBLEM:
${x}^{2}-{y}^{2}+{z}^{2}-12z+2x+37=0$
:::

:::exercise {fs-id1163723210201} type= 
PROBLEM:
Write the standard form of the equation of the ellipsoid centered at the origin that passes through points $A(2,0,0),B(0,0,1),$ and $C(\frac{1}{2},\sqrt{11},\frac{1}{2}).$
SOLUTION:
$\frac{{x}^{2}}{4}+\frac{{y}^{2}}{16}+{z}^{2}=1$
:::

:::exercise {fs-id1163723497654} type= 
PROBLEM:
Write the standard form of the equation of the ellipsoid centered at point $P(1,1,0)$ that passes through points $A(6,1,0),B(4,2,0)$ and $C(1,2,1).$
:::

:::exercise {fs-id1163723328216} type= 
PROBLEM:
Determine the intersection points of elliptic cone ${x}^{2}-{y}^{2}-{z}^{2}=0$ with the line of symmetric equations $\frac{x-1}{2}=\frac{y+1}{3}=z.$
SOLUTION:
$(1,−1,0)$ and $(\frac{13}{3},4,\frac{5}{3})$
:::

:::exercise {fs-id1163723237181} type= 
PROBLEM:
Determine the intersection points of parabolic hyperboloid $z=3{x}^{2}-2{y}^{2}$ with the line of parametric equations $x=3t,y=2t,z=19t,$ where $t\in \mathbb{R}.$
:::

:::exercise {fs-id1163723171158} type= 
PROBLEM:
Find an equation of the quadric surface with points $P(x,y,z)$ that are equidistant from point $Q(0,−1,0)$ and plane of equation $y=1.$ Identify the surface.
SOLUTION:
${x}^{2}+{z}^{2}+4y=0,$ elliptic paraboloid
:::

:::exercise {fs-id1163723501874} type= 
PROBLEM:
Find an equation of the quadric surface with points $P(x,y,z)$ that are equidistant from point $Q(0,2,0)$ and plane of equation $y=−2.$ Identify the surface.
:::

:::exercise {fs-id1163724026997} type= 
PROBLEM:
If the surface of a parabolic reflector is described by equation $400z={x}^{2}+{y}^{2},$ find the focal point of the reflector.
SOLUTION:
$(0,0,100)$
:::

:::exercise {fs-id1163724077517} type= 
PROBLEM:
Consider the parabolic reflector described by equation $z=20{x}^{2}+20{y}^{2}.$ Find its focal point.
:::

:::exercise {fs-id1163723348442} type= 
PROBLEM:
Show that quadric surface ${x}^{2}+{y}^{2}+{z}^{2}+2xy+2xz+2yz+x+y+z=0$ reduces to two parallel planes.
:::

:::exercise {fs-id1163724054232} type= 
PROBLEM:
Show that quadric surface ${x}^{2}+{y}^{2}+{z}^{2}-2xy-2xz+2yz-1=0$ reduces to two parallel planes passing.
:::

:::exercise {fs-id1163723474847} type= 
PROBLEM:
**[T]** The intersection between cylinder ${(x-1)}^{2}+{y}^{2}=1$ and sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ is called a *Viviani curve*.

> IMAGE {img:fs-id1163723475558} src=../../media/CNX_Calc_Figure_12_06_228.jpg
> alt: This figure is a surface inside of a box. It is a sphere with a right circular cylinder through the sphere vertically. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

a. Solve the system consisting of the equations of the surfaces to find the equations of the intersection curve. (*Hint:* Find $x$ and $y$ in terms of $z.)$
b. Use a computer algebra system (CAS) to visualize the intersection curve on sphere ${x}^{2}+{y}^{2}+{z}^{2}=4.$
SOLUTION:
a. $x=2-\frac{{z}^{2}}{2},y=\pm \frac{z}{2}\sqrt{4-{z}^{2}},$ where $z\in [−2,2];$
b.

> IMAGE {img:fs-id1163723216891} src=../../media/CNX_Calc_Figure_12_06_229.jpg
> alt: This figure is a surface inside of a box. It is a sphere with a figure eight curve on the side of the sphere. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163723496852} type= 
PROBLEM:
Hyperboloid of one sheet $25{x}^{2}+25{y}^{2}-{z}^{2}=25$ and elliptic cone $−25{x}^{2}+75{y}^{2}+{z}^{2}=0$ are represented in the following figure along with their intersection curves. Identify the intersection curves and find their equations (*Hint:* Find *y* from the system consisting of the equations of the surfaces.)

> IMAGE {img:fs-id1163723474734} src=../../media/CNX_Calc_Figure_12_06_230.jpg
> alt: This figure is a surface inside of a box. It is a hyperbolic paraboloid with a hyperbola of two sheets intersecting. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

:::

:::exercise {fs-id1163723211079} type= 
PROBLEM:
**[T]** Use a CAS to create the intersection between cylinder $9{x}^{2}+4{y}^{2}=18$ and ellipsoid $36{x}^{2}+16{y}^{2}+9{z}^{2}=144,$ and find the equations of the intersection curves.
SOLUTION:

> IMAGE {img:fs-id1163723995315} src=../../media/CNX_Calc_Figure_12_06_231.jpg
> alt: This figure is a surface inside of a box. It is a solid oval with an elliptical cylinder vertically intersecting. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

two ellipses of equations $\frac{{x}^{2}}{2}+\frac{{y}^{2}}{\frac{9}{2}}=1$ in planes $z=\text{±}2\sqrt{2}$
:::

:::exercise {fs-id1163724044853} type= 
PROBLEM:
**[T]** A spheroid is an ellipsoid with two equal semiaxes. For instance, the equation of a spheroid with the *z*-axis as its axis of symmetry is given by $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{a}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1,$ where $a$ and $c$ are positive real numbers. The spheroid is called *oblate* if $c<a,$ and *prolate* for $c>a.$
a. The eye cornea is approximated as a prolate spheroid with an axis that is the eye, where $a=8.7\;\text{mm and}\;c=9.6\;\text{mm}.$ Write the equation of the spheroid that models the cornea and sketch the surface.
b. Give two examples of objects with prolate spheroid shapes.
:::

:::exercise {fs-id1163723498077} type= 
PROBLEM:
**[T]** In cartography, Earth is approximated by an oblate spheroid rather than a sphere. The radii at the equator and poles are approximately $3963$ mi and $3950$ mi, respectively.
a. Write the equation in standard form of the ellipsoid that represents the shape of Earth. Assume the center of Earth is at the origin and that the trace formed by plane $z=0$ corresponds to the equator.
b. Sketch the graph.
c. Find an equation of the intersection curve of the surface with plane $z=1000$ that is parallel to the *xy*-plane. The intersection curve is called a *parallel*.
d. Find an equation of the intersection curve of the surface with plane $x+y=0$ that passes through the *z*-axis. The intersection curve is called a *meridian*.
SOLUTION:
a. $\frac{{x}^{2}}{{3963}^{2}}+\frac{{y}^{2}}{{3963}^{2}}+\frac{{z}^{2}}{{3950}^{2}}=1;$
b.

> IMAGE {img:fs-id1163723477618} src=../../media/CNX_Calc_Figure_12_06_233.jpg
> alt: This figure is a surface inside of a box. It is a sphere. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.
 ;
c. The intersection curve is the ellipse of equation $\frac{{x}^{2}}{{3963}^{2}}+\frac{{y}^{2}}{{3963}^{2}}=\frac{(2950)(4950)}{{3950}^{2}},$ and the intersection is an ellipse.; d. The intersection curve is the ellipse of equation $\frac{2{y}^{2}}{{3963}^{2}}+\frac{{z}^{2}}{{3950}^{2}}=1.$
:::

:::exercise {fs-id1163723981566} type= 
PROBLEM:
**[T]** A set of buzzing stunt magnets (or “rattlesnake eggs”) includes two sparkling, polished, superstrong spheroid-shaped magnets well-known for children’s entertainment. Each magnet is $1.625$ in. long and $0.5$ in. wide at the middle. While tossing them into the air, they create a buzzing sound as they attract each other.
a. Write the equation of the prolate spheroid centered at the origin that describes the shape of one of the magnets.
b. Write the equations of the prolate spheroids that model the shape of the buzzing stunt magnets. Use a CAS to create the graphs.
:::

:::exercise {fs-id1163723089980} type= 
PROBLEM:
**[T]** A heart-shaped surface is given by equation ${({x}^{2}+\frac{9}{4}{y}^{2}+{z}^{2}-1)}^{3}-{x}^{2}{z}^{3}-\frac{9}{80}{y}^{2}{z}^{3}=0.$
a. Use a CAS to graph the surface that models this shape.
b. Determine and sketch the trace of the heart-shaped surface on the *xz*-plane.
SOLUTION:
a.

> IMAGE {img:fs-id1163723477446} src=../../media/CNX_Calc_Figure_12_06_237.jpg
> alt: This figure is a surface inside of a box. It is a heart. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

b. The intersection curve is ${({x}^{2}+{z}^{2}-1)}^{3}-{x}^{2}{z}^{3}=0.$

> IMAGE {img:fs-id1163723494109} src=../../media/CNX_Calc_Figure_12_06_238.jpg
> alt: This figure is a curve on a rectangular coordinate system. It is the shape of a heart centered about the y-axis.

:::

:::exercise {fs-id1163723494120} type= 
PROBLEM:
**[T]** The ring torus symmetric about the *z*-axis is a special type of surface in topology and its equation is given by ${({x}^{2}+{y}^{2}+{z}^{2}+{R}^{2}-{r}^{2})}^{2}=4{R}^{2}({x}^{2}+{y}^{2}),$ where $R>r>0.$ The numbers $R$ and $r$ are called are the major and minor radii, respectively, of the surface. The following figure shows a ring torus for which $R=2\;\text{and}\;r=1.$

> IMAGE {img:fs-id1163723479786} src=../../media/CNX_Calc_Figure_12_06_239.jpg
> alt: This figure is a surface inside of a box. It is a torus, a doughnut shape. The outside edges of the 3-dimensional box are scaled to represent the 3-dimensional coordinate system.

a. Write the equation of the ring torus with $R=2\;\text{and}\;r=1,$ and use a CAS to graph the surface. Compare the graph with the figure given.
b. Determine the equation and sketch the trace of the ring torus from a. on the *xy*-plane.
c. Give two examples of objects with ring torus shapes.
:::

## Glossary
- {def} **cylinder**: a set of lines parallel to a given line passing through a given curve
- {def} **ellipsoid**: a three-dimensional surface described by an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1;$ all traces of this surface are ellipses
- {def} **elliptic cone**: a three-dimensional surface described by an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}-\frac{{z}^{2}}{{c}^{2}}=0;$ traces of this surface include ellipses and intersecting lines
- {def} **elliptic paraboloid**: a three-dimensional surface described by an equation of the form $z=\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}};$ traces of this surface include ellipses and parabolas
- {def} **hyperboloid of one sheet**: a three-dimensional surface described by an equation of the form $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}-\frac{{z}^{2}}{{c}^{2}}=1;$ traces of this surface include ellipses and hyperbolas
- {def} **hyperboloid of two sheets**: a three-dimensional surface described by an equation of the form $\frac{{z}^{2}}{{c}^{2}}-\frac{{x}^{2}}{{a}^{2}}-\frac{{y}^{2}}{{b}^{2}}=1;$ traces of this surface include ellipses and hyperbolas
- {def} **quadric surfaces**: surfaces in three dimensions having the property that the traces of the surface are conic sections (ellipses, hyperbolas, and parabolas)
- {def} **rulings**: parallel lines that make up a cylindrical surface
- {def} **trace**: the intersection of a three-dimensional surface with a coordinate plane

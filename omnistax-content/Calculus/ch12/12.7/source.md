# Cylindrical and Spherical Coordinates

## Learning Objectives {section:learning-objectives}
- Convert from cylindrical to rectangular coordinates.
- Convert from rectangular to cylindrical coordinates.
- Convert from spherical to rectangular coordinates.
- Convert from rectangular to spherical coordinates.

The Cartesian coordinate system provides a straightforward way to describe the location of points in space. Some surfaces, however, can be difficult to model with equations based on the Cartesian system. This is a familiar problem; recall that in two dimensions, polar coordinates often provide a useful alternative system for describing the location of a point in the plane, particularly in cases involving circles. In this section, we look at two different ways of describing the location of points in space, both of them based on extensions of polar coordinates. As the name suggests, cylindrical coordinates are useful for dealing with problems involving cylinders, such as calculating the volume of a round water tank or the amount of oil flowing through a pipe. Similarly, spherical coordinates are useful for dealing with problems involving spheres, such as finding the volume of domed structures.

## Cylindrical Coordinates
When we expanded the traditional Cartesian coordinate system from two dimensions to three, we simply added a new axis to model the third dimension. Starting with polar coordinates, we can follow this same process to create a new three-dimensional coordinate system, called the cylindrical coordinate system. In this way, cylindrical coordinates provide a natural extension of polar coordinates to three dimensions.

:::note [definition] Definition
In the {term:cylindrical coordinate system}, a point in space ([ref:CNX_Calc_Figure_12_07_001]) is represented by the ordered triple $(r,\theta ,z),$ where
- $(r,\theta )$ are the polar coordinates of the point’s projection in the *xy*-plane
- $z$ is the usual $z\text{-coordinate}$ in the Cartesian coordinate system
:::

> FIGURE {fig:CNX_Calc_Figure_12_07_001} src=../../media/CNX_Calc_Figure_12_07_001.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a point labeled “(x, y, z) = (r, theta, z).” In the x y-plane, there is a line segment extending to underneath the point. This line segment is labeled “r.” The angle between the line segment and the x-axis is theta. There is a line segment perpendicular to the x-axis. Along with the line segment labeled r, this line segment and the x-axis form a right triangle.
> caption: The right triangle lies in the *xy*-plane. The length of the hypotenuse is $r$ and $\theta$ is the measure of the angle formed by the positive *x*-axis and the hypotenuse. The
*z*-coordinate describes the location of the point above or below the *xy*-plane.

In the *xy*-plane, the right triangle shown in [ref:CNX_Calc_Figure_12_07_001] provides the key to transformation between cylindrical and Cartesian, or rectangular, coordinates.

:::note [theorem] Conversion between Cylindrical and Cartesian Coordinates
The rectangular coordinates $(x,y,z)$ and the cylindrical coordinates $(r,\theta ,z)$ of a point are related as follows:

$\begin{array}{rcllll}x & = & r\;\text{cos}\;\theta & & & \text{These equations are used to convert from} \\ y & = & r\;\text{sin}\;\theta & & & \text{cylindrical coordinates to rectangular} \\ z & = & z & & & \text{coordinates.} \\ & \text{and} & & & & \\ {r}^{2} & = & {x}^{2}+{y}^{2} & & & \text{These equations are used to convert from} \\ \text{tan}\;\theta & = & \frac{y}{x} & & & \text{rectangular coordinates to cylindrical} \\ z & = & z & & & \text{coordinates.}\end{array}$  {eq:fs-id1163723864707}

:::
As when we discussed conversion from rectangular coordinates to polar coordinates in two dimensions, it should be noted that the equation $\text{tan}\;\theta =\frac{y}{x}$ has an infinite number of solutions. However, if we restrict $\theta$ to values between $0$ and $2\pi ,$ then we can find a unique solution based on the quadrant of the *xy*-plane in which original point $(x,y,z)$ is located. Note that if $x=0,$ then the value of $\theta$ is either $\frac{\pi}{2},\frac{3\pi}{2},$ or $0,$ depending on the value of $y.$
Notice that these equations are derived from properties of right triangles. To make this easy to see, consider point $P$ in the *xy*-plane with rectangular coordinates $(x,y,0)$ and with cylindrical coordinates $(r,\theta ,0),$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_12_07_002} src=../../media/CNX_Calc_Figure_12_07_002.jpg
> alt: This figure is the first quadrant of the rectangular coordinate system. There is a point labeled “P = (x, y, 0) = (r, theta, 0).” There is a line segment from the origin to point P. This line segment is labeled “r.” The angle between the x-axis and the line segment r is labeled “theta.” There is also a vertical line segment labeled “y” from P to the x-axis. It forms a right triangle.
> caption: The Pythagorean theorem provides equation ${r}^{2}={x}^{2}+{y}^{2}.$ Right-triangle relationships tell us that $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ and $\text{tan}\;\theta =y\text{/}x.$

Let’s consider the differences between rectangular and cylindrical coordinates by looking at the surfaces generated when each of the coordinates is held constant. If $c$ is a constant, then in rectangular coordinates, surfaces of the form $x=c,$ $y=c,$ or $z=c$ are all planes. Planes of these forms are parallel to the *yz*-plane, the *xz*-plane, and the *xy*-plane, respectively. When we convert to cylindrical coordinates, the *z*-coordinate does not change. Therefore, in cylindrical coordinates, surfaces of the form $z=c$ are planes parallel to the *xy*-plane. Now, let’s think about surfaces of the form $r=c.$ The points on these surfaces are at a fixed distance from the *z*-axis. In other words, these surfaces are vertical circular cylinders. Last, what about $\theta =c?$ The points on a surface of the form $\theta =c$ are at a fixed angle from the *x*-axis, which gives us a half-plane that starts at the *z*-axis ([ref:CNX_Calc_Figure_12_07_003] and [ref:CNX_Calc_Figure_12_07_004]).

> FIGURE {fig:CNX_Calc_Figure_12_07_003} src=../../media/CNX_Calc_Figure_12_07_017.jpg
> alt: This figure has 3 images. The first image is a plane in the 3-dimensional coordinate system. It is parallel to the y z-plane where x = c. The second image is a plane in the 3-dimensional coordinate system. It is parallel to the x z-plane where y = c. the third image is a plane in the 3-dimensional coordinate system where z = c.
> caption: In rectangular coordinates, (a) surfaces of the form $x=c$ are planes parallel to the *yz*-plane, (b) surfaces of the form $y=c$ are planes parallel to the *xz*-plane, and (c) surfaces of the form $z=c$ are planes parallel to the *xy*-plane.

> FIGURE {fig:CNX_Calc_Figure_12_07_004} src=../../media/CNX_Calc_Figure_12_07_018.jpg
> alt: This figure has 3 images. The first image is a right circular cylinder in the 3-dimensional coordinate system. It has the z-axis in the middle. The second image is a plane in the 3-dimensional coordinate system. It is vertical with the z-axis on one edge. The third image is a plane in the 3-dimensional coordinate system where z = c.
> caption: In cylindrical coordinates, (a) surfaces of the form $r=c$ are vertical cylinders of radius $c,$ (b) surfaces of the form $\theta =c$ are half-planes at angle $c$ from the *x*-axis, and (c) surfaces of the form $z=c$ are planes parallel to the *xy*-plane.

:::example {ex:fs-id1163723767231} Converting from Cylindrical to Rectangular Coordinates

:::exercise {fs-id1163723287888} type= 
PROBLEM:
Plot the point with cylindrical coordinates $(4,\frac{2\pi}{3},−2)$ and express its location in rectangular coordinates.
SOLUTION:
Conversion from cylindrical to rectangular coordinates requires a simple application of the equations listed in [ref:fs-id1163723500624]:

$\begin{array}{rll}x & = & r\;\text{cos}\;\theta =4\;\text{cos}\;\frac{2\pi}{3}=−2 \\ y & = & r\;\text{sin}\;\theta =4\;\text{sin}\;\frac{2\pi}{3}=2\sqrt{3} \\ z & = & −2.\end{array}$  {eq:fs-id1163723140262}

The point with cylindrical coordinates $(4,\frac{2\pi}{3},−2)$ has rectangular coordinates $(−2,2\sqrt{3},−2)$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_07_005} src=../../media/CNX_Calc_Figure_12_07_003.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a point where r = 4, z = -2 and theta = 2 pi /3.
> caption: The projection of the point in the *xy*-plane is 4 units from the origin. The line from the origin to the point’s projection forms an angle of $\frac{2\pi}{3}$ with the positive *x*-axis. The point lies $2$ units below the *xy*-plane.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724045592} type= 
PROBLEM:
Point $R$ has cylindrical coordinates $(5,\frac{\pi}{6},4)$. Plot $R$ and describe its location in space using rectangular, or Cartesian, coordinates.
SOLUTION:
The rectangular coordinates of the point are $(\frac{5\sqrt{3}}{2},\frac{5}{2},4).$

> IMAGE {img:fs-id1163723168627} src=../../media/CNX_Calc_Figure_12_07_004.jpg
> alt: This figure is the 3-dimensional coordinate system. There is a point labeled “(5, pi/6, 4).” The point is located above a line segment in the x y-plane labeled r = 5 that is pi/6 degrees from the x-axis. The distance from the x y-plane to the point is labeled “z = 4.”

COMMENTARY: Hint
The first two components match the polar coordinates of the point in the *xy*-plane.
:::
:::
If this process seems familiar, it is with good reason. This is exactly the same process that we followed in [Introduction to Parametric Equations and Polar Coordinates](module:m53831) to convert from polar coordinates to two-dimensional rectangular coordinates.

:::example {ex:fs-id1163723335773} Converting from Rectangular to Cylindrical Coordinates

:::exercise {fs-id1163724048668} type= 
PROBLEM:
Convert the rectangular coordinates $(1,−3,5)$ to cylindrical coordinates.
SOLUTION:
Use the second set of equations from [ref:fs-id1163723500624] to translate from rectangular to cylindrical coordinates:

$\begin{array}{rll}{r}^{2} & = & {x}^{2}+{y}^{2} \\ r & = & \text{±}\sqrt{{1}^{2}+{(−3)}^{2}}=\text{±}\sqrt{10}.\end{array}$  {eq:fs-id1163723281411}

We choose the positive square root, so $r=\sqrt{10}.$ Now, we apply the formula to find $\theta .$ In this case, $y$ is negative and $x$ is positive, which means we must select the value of $\theta$ between $\frac{3\pi}{2}$ and $2\pi \text{:}$

$\begin{array}{rll}\text{tan}\;\theta & = & \frac{y}{x}=\frac{−3}{1} \\ \theta & = & \text{arctan}(−3)+2\pi \approx 5.03\;\text{rad}.\end{array}$  {eq:fs-id1163723768190}

In this case, the *z*-coordinates are the same in both rectangular and cylindrical coordinates:

$z=5.$  {eq:fs-id1163723690559}

The point with rectangular coordinates $(1,−3,5)$ has cylindrical coordinates approximately equal to $(\sqrt{10},5.03,5).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723693689} type= 
PROBLEM:
Convert point $(−8,8,−7)$ from Cartesian coordinates to cylindrical coordinates.
SOLUTION:
$(8\sqrt{2},\frac{3\pi}{4},−7)$
COMMENTARY: Hint
${r}^{2}={x}^{2}+{y}^{2}$ and $\text{tan}\;\theta =\frac{y}{x}$
:::
:::
The use of cylindrical coordinates is common in fields such as physics. Physicists studying electrical charges and the capacitors used to store these charges have discovered that these systems sometimes have a cylindrical symmetry. These systems have complicated modeling equations in the Cartesian coordinate system, which make them difficult to describe and analyze. The equations can often be expressed in more simple terms using cylindrical coordinates. For example, the cylinder described by equation ${x}^{2}+{y}^{2}=25$ in the Cartesian system can be represented by cylindrical equation $r=5.$

:::example {ex:fs-id1163723093082} Identifying Surfaces in the Cylindrical Coordinate System

:::exercise {fs-id1163723139300} type= 
PROBLEM:
Describe the surfaces with the given cylindrical equations.
a. $\theta =\frac{\pi}{4}$
b. ${r}^{2}+{z}^{2}=9$
c. $z=r$
SOLUTION:
a. When the angle $\theta$ is held constant while $r$ and $z$ are allowed to vary, the result is a half-plane (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_07_007} src=../../media/CNX_Calc_Figure_12_07_005.jpg
> alt: This figure is the first quadrant of the 3-dimensional coordinate system. There is a plane attached to the z-axis, dividing the x y-plane with a diagonal line. The angle between the x-axis and this plane is pi/4.
> caption: In polar coordinates, the equation $\theta =\pi \text{/}4$ describes the ray extending diagonally through the first quadrant. In three dimensions, this same equation describes a half-plane.

b. Substitute ${r}^{2}={x}^{2}+{y}^{2}$ into equation ${r}^{2}+{z}^{2}=9$ to express the rectangular form of the equation: ${x}^{2}+{y}^{2}+{z}^{2}=9.$ This equation describes a sphere centered at the origin with radius $3$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_07_008} src=../../media/CNX_Calc_Figure_12_07_006.jpg
> alt: This figure is a sphere. It has the z-axis through the center vertically. The point of intersection with the z-axis and the sphere is (0, 0, 3). There is also the y-axis through the center of the sphere horizontally. The intersection of the sphere and the y-axis is the point (0, 3, 0).
> caption: The sphere centered at the origin with radius $3$ can be described by the cylindrical equation ${r}^{2}+{z}^{2}=9.$

c. To describe the surface defined by equation $z=r,$ is it useful to examine traces parallel to the *xy*-plane. For example, the trace in plane $z=1$ is circle $r=1,$ the trace in plane $z=3$ is circle $r=3,$ and so on. Each trace is a circle. As the value of $z$ increases, the radius of the circle also increases. The resulting surface is a cone (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_12_07_009} src=../../media/CNX_Calc_Figure_12_07_007.jpg
> alt: This figure is the 3-dimensional coordinate system. It has an elliptic cone with the z-axis down the center. The two cones, one right side up, the other upside down, meet at the origin.
> caption: The traces in planes parallel to the *xy*-plane are circles. The radius of the circles increases as $z$ increases.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724017856} type= 
PROBLEM:
Describe the surface with cylindrical equation $r=6.$
SOLUTION:
This surface is a cylinder with radius $6.$

> IMAGE {img:fs-id1163724079597} src=../../media/CNX_Calc_Figure_12_07_008.jpg
> alt: This figure is a right circular cylinder. It is upright with the z-axis through the center. It is on top of the x y plane.

COMMENTARY: Hint
The $\theta$ and $z$ components of points on the surface can take any value.
:::
:::

## Spherical Coordinates
In the Cartesian coordinate system, the location of a point in space is described using an ordered triple in which each coordinate represents a distance. In the cylindrical coordinate system, location of a point in space is described using two distances $(r\;\text{and}\;z)$ and an angle measure $(\theta ).$ In the spherical coordinate system, we again use an ordered triple to describe the location of a point in space. In this case, the triple describes one distance and two angles. Spherical coordinates make it simple to describe a sphere, just as cylindrical coordinates make it easy to describe a cylinder. Grid lines for spherical coordinates are based on angle measures, like those for polar coordinates.

:::note [definition] Definition
In the {term:spherical coordinate system}, a point $P$ in space ([ref:CNX_Calc_Figure_12_07_011]) is represented by the ordered triple $(ρ,\theta ,φ)$ where
- $ρ$ (the Greek letter rho) is the distance between $P$ and the origin $(ρ≠0);$
- $\theta$ is the same angle used to describe the location in cylindrical coordinates;
- $φ$ (the Greek letter phi) is the angle formed by the positive *z*-axis and line segment $\overline{OP},$ where $O$ is the origin and $0\le φ\le \pi .$
:::

> FIGURE {fig:CNX_Calc_Figure_12_07_011} src=../../media/CNX_Calc_Figure_12_07_009.jpg
> alt: This figure is the first quadrant of the 3-dimensional coordinate system. It has a point labeled “(x, y, z) = (rho, theta, phi).” There is a line segment from the origin to the point. It is labeled “rho.” The angle between this line segment and the z-axis is phi. There is a line segment in the x y-plane from the origin to the shadow of the point. This segment is labeled “r.” The angle between the x-axis and r is theta.
> caption: The relationship among spherical, rectangular, and cylindrical coordinates.

By convention, the origin is represented as $(0,0,0)$ in spherical coordinates.

:::note [theorem] Converting among Spherical, Cylindrical, and Rectangular Coordinates
Rectangular coordinates $(x,y,z)$ and spherical coordinates $(ρ,\theta ,φ)$ of a point are related as follows:

$\begin{array}{rcllll}x & = & ρ\;\text{sin}\;φ\;\text{cos}\;\theta & & & \text{These equations are used to convert from} \\ y & = & ρ\;\text{sin}\;φ\;\text{sin}\;\theta & & & \text{spherical coordinates to rectangular} \\ z & = & ρ\;\text{cos}\;φ & & & \text{coordinates.} \\ & \text{and} & & & & \\ {ρ}^{2} & = & {x}^{2}+{y}^{2}+{z}^{2} & & & \text{These equations are used to convert from} \\ \text{tan}\;\theta & = & \frac{y}{x} & & & \text{rectangular coordinates to spherical} \\ φ & = & \text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}). & & & \text{coordinates.}\end{array}$  {eq:fs-id1163723216769}

If a point has cylindrical coordinates $(r,\theta ,z),$ then these equations define the relationship between cylindrical and spherical coordinates.

$\begin{array}{rcllll}r & = & ρ\;\text{sin}\;φ & & & \text{These equations are used to convert from} \\ \theta & = & \theta & & & \text{spherical coordinates to cylindrical} \\ z & = & ρ\;\text{cos}\;φ & & & \text{coordinates.} \\ & \text{and} & & & & \\ ρ & = & \sqrt{{r}^{2}+{z}^{2}} & & & \text{These equations are used to convert from} \\ \theta & = & \theta & & & \text{cylindrical coordinates to spherical} \\ φ & = & \text{arccos}(\frac{z}{\sqrt{{r}^{2}+{z}^{2}}}) & & & \text{coordinates.}\end{array}$  {eq:fs-id1163723563904}

:::
The formulas to convert from spherical coordinates to rectangular coordinates may seem complex, but they are straightforward applications of trigonometry. Looking at [ref:CNX_Calc_Figure_12_07_012], it is easy to see that $r=ρ\;\text{sin}\;φ.$ Then, looking at the triangle in the *xy*-plane with $r$ as its hypotenuse, we have $x=r\;\text{cos}\;\theta =ρ\;\text{sin}\;φ\;\text{cos}\;\theta .$ The derivation of the formula for $y$ is similar. [ref:CNX_Calc_Figure_12_07_009] also shows that ${ρ}^{2}={r}^{2}+{z}^{2}={x}^{2}+{y}^{2}+{z}^{2}$ and $z=ρ\;\text{cos}\;φ.$ Solving this last equation for $φ$ and then substituting $ρ=\sqrt{{r}^{2}+{z}^{2}}$ (from the first equation) yields $φ=\text{arccos}(\frac{z}{\sqrt{{r}^{2}+{z}^{2}}}).$ Also, note that, as before, we must be careful when using the formula $\text{tan}\;\theta =\frac{y}{x}$ to choose the correct value of $\theta .$

> FIGURE {fig:CNX_Calc_Figure_12_07_012} src=../../media/CNX_Calc_Figure_12_07_010.jpg
> alt: This figure is the first quadrant of the 3-dimensional coordinate system. It has a point labeled “(x, y, z) = (r, theta, z) = (rho, theta, phi).” There is a line segment from the origin to the point. It is labeled “rho.” The angle between this line segment and the z-axis is phi. There is a line segment in the x y-plane from the origin to the shadow of the point. This segment is labeled “r.” The angle between the x-axis and r is theta.The distance from r to the point is labeled “z.”
> caption: The equations that convert from one system to another are derived from right-triangle relationships.

As we did with cylindrical coordinates, let’s consider the surfaces that are generated when each of the coordinates is held constant. Let $c$ be a constant, and consider surfaces of the form $ρ=c.$ Points on these surfaces are at a fixed distance from the origin and form a sphere. The coordinate $\theta$ in the spherical coordinate system is the same as in the cylindrical coordinate system, so surfaces of the form $\theta =c$ are half-planes, as before. Last, consider surfaces of the form $φ=c.$ The points on these surfaces are at a fixed angle from the *z*-axis and form a half-cone ([ref:CNX_Calc_Figure_12_07_013]).

> FIGURE {fig:CNX_Calc_Figure_12_07_013} src=../../media/CNX_Calc_Figure_12_07_019.jpg
> alt: This figure has three images. The first image is a sphere centered in the 3-dimensional coordinate system. The second figure is a vertical plane with an edge on the z-axis in the 3-dimensional coordinate system. The third image is an elliptical cone with the center at the origin of the 3-dimensional coordinate system.
> caption: In spherical coordinates, surfaces of the form $ρ=c$ are spheres of radius $ρ$ (a), surfaces of the form $\theta =c$ are half-planes at an angle $\theta$ from the *x*-axis (b), and surfaces of the form $ϕ=c$ are half-cones at an angle $ϕ$ from the *z*-axis (c).

:::example {ex:fs-id1163724074684} Converting from Spherical Coordinates

:::exercise {fs-id1163724058060} type= 
PROBLEM:
Plot the point with spherical coordinates $(8,\frac{\pi}{3},\frac{\pi}{6})$ and express its location in both rectangular and cylindrical coordinates.
SOLUTION:
Use the equations in [ref:fs-id1163723844895] to translate between spherical and cylindrical coordinates ([ref:CNX_Calc_Figure_12_07_014]):

$\begin{array}{l} \\ \\ x=ρ\;\text{sin}\;φ\;\text{cos}\;\theta =8\;\text{sin}(\frac{\pi}{6})\text{cos}(\frac{\pi}{3})=8(\frac{1}{2})\frac{1}{2}=2 \\ y=ρ\;\text{sin}\;φ\;\text{sin}\;\theta =8\;\text{sin}(\frac{\pi}{6})\text{sin}(\frac{\pi}{3})=8(\frac{1}{2})\frac{\sqrt{3}}{2}=2\sqrt{3} \\ z=ρ\;\text{cos}\;φ=8\;\text{cos}(\frac{\pi}{6})=8(\frac{\sqrt{3}}{2})=4\sqrt{3}.\end{array}$  {eq:fs-id1163723567222}

> FIGURE {fig:CNX_Calc_Figure_12_07_014} src=../../media/CNX_Calc_Figure_12_07_011.jpg
> alt: This figure is the first quadrant of the 3-dimensional coordinate system. It has a point labeled “(8, pi/3, pi/6).” There is a line segment from the origin to the point. It is labeled “rho = 8.” The angle between this line segment and the z-axis is labeled “phi = pi/6.” There is a line segment in the x y-plane from the origin to the shadow of the point. The angle between the x-axis and r is labeled “theta = pi/3.”
> caption: The projection of the point in the *xy*-plane is $4$ units from the origin. The line from the origin to the point’s projection forms an angle of $\pi \text{/}3$ with the positive *x*-axis. The point lies $4\sqrt{3}$ units above the *xy*-plane.

The point with spherical coordinates $(8,\frac{\pi}{3},\frac{\pi}{6})$ has rectangular coordinates $(2,2\sqrt{3},4\sqrt{3}).$
Finding the values in cylindrical coordinates is equally straightforward:

$\begin{array}{rll} \\ r & = & ρ\;\text{sin}\;φ=8\;\text{sin}\;\frac{\pi}{6}=4 \\ \theta & = & \theta \\ z & = & ρ\;\text{cos}\;φ=8\;\text{cos}\;\frac{\pi}{6}=4\sqrt{3}.\end{array}$  {eq:fs-id1163724082339}

Thus, cylindrical coordinates for the point are $(4,\frac{\pi}{3},4\sqrt{3}).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723967968} type= 
PROBLEM:
Plot the point with spherical coordinates $(2,-\frac{5\pi}{6},\frac{\pi}{6})$ and describe its location in both rectangular and cylindrical coordinates.
SOLUTION:

> IMAGE {img:fs-id1163724052081} src=../../media/CNX_Calc_Figure_12_07_012.jpg
> alt: This figure is of the 3-dimensional coordinate system. It has a point. There is a line segment from the origin to the point. The angle between this line segment and the z-axis is phi. There is a line segment in the x y-plane from the origin to the shadow of the point.The angle between the x-axis and rho is theta.

Cartesian: $(-\frac{\sqrt{3}}{2},-\frac{1}{2},\sqrt{3}),$ cylindrical: $(1,-\frac{5\pi}{6},\sqrt{3})$
COMMENTARY: Hint
Converting the coordinates first may help to find the location of the point in space more easily.
:::
:::

:::example {ex:fs-id1163724042585} Converting from Rectangular Coordinates

:::exercise {fs-id1163724042587} type= 
PROBLEM:
Convert the rectangular coordinates $(−1,1,\sqrt{6})$ to both spherical and cylindrical coordinates.
SOLUTION:
Start by converting from rectangular to spherical coordinates:

$\begin{array}{llll}\begin{array}{rll}{ρ}^{2} & = & {x}^{2}+{y}^{2}+{z}^{2}={(−1)}^{2}+{1}^{2}+{(\sqrt{6})}^{2}=8 \\ ρ & = & 2\sqrt{2}\end{array} & & & \begin{array}{rll}\text{tan}\;\theta & = & \frac{1}{−1} \\ \theta & = & \text{arctan}(−1)=\frac{3\pi}{4}.\end{array}\end{array}$  {eq:fs-id1163723719350}

Because $(x,y)=(−1,1),$ then the correct choice for $\theta$ is $\frac{3\pi}{4}.$
There are actually two ways to identify $φ.$ We can use the equation $φ=\text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}).$ A more simple approach, however, is to use equation $z=ρ\;\text{cos}\;φ.$ We know that $z=\sqrt{6}$ and $ρ=2\sqrt{2},$ so

$\sqrt{6}=2\sqrt{2}\;\text{cos}\;φ,\;\text{so}\;\text{cos}\;φ=\frac{\sqrt{6}}{2\sqrt{2}}=\frac{\sqrt{3}}{2}$  {eq:fs-id1163723325144}

and therefore $φ=\frac{\pi}{6}.$ The spherical coordinates of the point are $(2\sqrt{2},\frac{3\pi}{4},\frac{\pi}{6}).$
To find the cylindrical coordinates for the point, we need only find $r\text{:}$

$r=ρ\;\text{sin}\;φ=2\sqrt{2}\;\text{sin}(\frac{\pi}{6})=\sqrt{2}.$  {eq:fs-id1163723804093}

The cylindrical coordinates for the point are $(\sqrt{2},\frac{3\pi}{4},\sqrt{6}).$
:::
:::

:::example {ex:fs-id1163724018907} Identifying Surfaces in the Spherical Coordinate System

:::exercise {fs-id1163724018909} type= 
PROBLEM:
Describe the surfaces with the given spherical equations.
a. $\theta =\frac{\pi}{3}$
b. $φ=\frac{5\pi}{6}$
c. $ρ=6$
d. $ρ=\text{sin}\;\theta \;\text{sin}\;φ$
SOLUTION:
a. The variable $\theta$ represents the measure of the same angle in both the cylindrical and spherical coordinate systems. Points with coordinates $(ρ,\frac{\pi}{3},φ)$ lie on the plane that forms angle $\theta =\frac{\pi}{3}$ with the positive *x*-axis. Because $ρ>0,$ the surface described by equation $\theta =\frac{\pi}{3}$ is the half-plane shown in [ref:CNX_Calc_Figure_12_07_016].

> FIGURE {fig:CNX_Calc_Figure_12_07_016} src=../../media/CNX_Calc_Figure_12_07_020.jpg
> alt: This figure is the first quadrant of the 3-dimensional coordinate system. There is a plane attached to the z-axis, dividing the x y-plane with a diagonal line. The angle between the x-axis and this plane is theta = pi/3.
> caption: The surface described by equation $\theta =\frac{\pi}{3}$ is a half-plane.

b. Equation $φ=\frac{5\pi}{6}$ describes all points in the spherical coordinate system that lie on a line from the origin forming an angle measuring $\frac{5\pi}{6}$ rad with the positive *z*-axis. These points form a half-cone ([ref:CNX_Calc_Figure_12_07_017]). Because there is only one value for $φ$ that is measured from the positive *z*-axis, we do not get the full cone (with two pieces).

> FIGURE {fig:CNX_Calc_Figure_12_07_017} src=../../media/CNX_Calc_Figure_12_07_014.jpg
> alt: This figure is the upper part of an elliptical cone. The bottom point of the cone is at the origin of the 3-dimensional coordinate system.
> caption: The equation $φ=\frac{5\pi}{6}$ describes a cone.

To find the equation in rectangular coordinates, use equation $φ=\text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}).$

$\begin{array}{rll}\frac{5\pi}{6} & = & \text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}) \\ \text{cos}\;\frac{5\pi}{6} & = & \frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}} \\ -\frac{\sqrt{3}}{2} & = & \frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}} \\ \frac{3}{4} & = & \frac{{z}^{2}}{{x}^{2}+{y}^{2}+{z}^{2}} \\ \frac{3{x}^{2}}{4}+\frac{3{y}^{2}}{4}+\frac{3{z}^{2}}{4} & = & {z}^{2} \\ \frac{3{x}^{2}}{4}+\frac{3{y}^{2}}{4}-\frac{{z}^{2}}{4} & = & 0.\end{array}$  {eq:fs-id1163723887595}

This is the equation of a cone centered on the *z*-axis.
c. Equation $ρ=6$ describes the set of all points $6$ units away from the origin—a sphere with radius $6$ ([ref:CNX_Calc_Figure_12_07_018]).

> FIGURE {fig:CNX_Calc_Figure_12_07_018} src=../../media/CNX_Calc_Figure_12_07_015.jpg
> alt: This figure is a sphere. The z-axis is vertically through the center and intersects the sphere at (0, 0, 6). The y-axis is horizontally through the center and intersects the sphere at (0, 6, 0).
> caption: Equation $ρ=6$ describes a sphere with radius $6.$

d. To identify this surface, convert the equation from spherical to rectangular coordinates, using equations $y=ρ\;\text{sin}\;φ\;\text{sin}\;\theta$ and ${ρ}^{2}={x}^{2}+{y}^{2}+{z}^{2}\text{:}$

$\begin{array}{rlllll}ρ & = & \text{sin}\;\theta \;\text{sin}\;φ & & & \\ {ρ}^{2} & = & ρ\;\text{sin}\;\theta \;\text{sin}\;φ & & & \text{Multiply both sides of the equation by}\;ρ. \\ {x}^{2}+{y}^{2}+{z}^{2} & = & y & & & \text{Substitute rectangular variables using the equations above.} \\ {x}^{2}+{y}^{2}-y+{z}^{2} & = & 0 & & & \text{Subtract}\;y\;\text{from both sides of the equation.} \\ {x}^{2}+{y}^{2}-y+\frac{1}{4}+{z}^{2} & = & \frac{1}{4} & & & \text{Complete the square.} \\ {x}^{2}+{(y-\frac{1}{2})}^{2}+{z}^{2} & = & \frac{1}{4}. & & & \text{Rewrite the middle terms as a perfect square.}\end{array}$  {eq:fs-id1163724073744}

The equation describes a sphere centered at point $(0,\frac{1}{2},0)$ with radius $\frac{1}{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723523033} type= 
PROBLEM:
Describe the surfaces defined by the following equations.
a. $ρ=13$
b. $\theta =\frac{2\pi}{3}$
c. $φ=\frac{\pi}{4}$
SOLUTION:
a. This is the set of all points $13$ units from the origin. This set forms a sphere with radius $13.$ b. This set of points forms a half plane. The angle between the half plane and the positive *x*-axis is $\theta =\frac{2\pi}{3}.$ c. Let $P$ be a point on this surface. The position vector of this point forms an angle of $φ=\frac{\pi}{4}$ with the positive *z*-axis, which means that points closer to the origin are closer to the axis. These points form a half-cone.
COMMENTARY: Hint
Think about what each component represents and what it means to hold that component constant.
:::
:::
Spherical coordinates are useful in analyzing systems that have some degree of symmetry about a point, such as the volume of the space inside a domed stadium or wind speeds in a planet’s atmosphere. A sphere that has Cartesian equation ${x}^{2}+{y}^{2}+{z}^{2}={c}^{2}$ has the simple equation $ρ=c$ in spherical coordinates.
In geography, latitude and longitude are used to describe locations on Earth’s surface, as shown in [ref:CNX_Calc_Figure_12_07_019]. Although the shape of Earth is not a perfect sphere, we use spherical coordinates to communicate the locations of points on Earth. Let’s assume Earth has the shape of a sphere with radius $4000$ mi. We express angle measures in degrees rather than radians because latitude and longitude are measured in degrees.

> FIGURE {fig:CNX_Calc_Figure_12_07_019} src=../../media/CNX_Calc_Figure_12_07_016.jpg
> alt: This figure is an image of the Earth. It has the prime meridian labeled, which is a circle on the surface circumnavigating the Earth vertically through the poles. The equator is also labeled which is a horizontal circle circumnavigating the Earth. Three vectors extend out from the center of Earth. Two of them extend to the equator and indicate a measurement of longitude. Two of them extend to a vertical polar circle and indicate a measurement of latitude.
> caption: In the latitude–longitude system, angles describe the location of a point on Earth relative to the equator and the prime meridian.

Let the center of Earth be the center of the sphere, with the ray from the center through the North Pole representing the positive *z*-axis. The prime meridian represents the trace of the surface as it intersects the *xz*-plane. The equator is the trace of the sphere intersecting the *xy*-plane.

:::example {ex:fs-id1163724072588} Converting Latitude and Longitude to Spherical Coordinates

:::exercise {fs-id1163724072590} type= 
PROBLEM:
The latitude of Columbus, Ohio, is $40\text{°}$ N and the longitude is $83\text{°}$ W, which means that Columbus is $40\text{°}$ north of the equator. Imagine a ray from the center of Earth through Columbus and a ray from the center of Earth through the equator directly south of Columbus. The measure of the angle formed by the rays is $40\text{°}.$ In the same way, measuring from the prime meridian, Columbus lies $83\text{°}$ to the west. Express the location of Columbus in spherical coordinates.
SOLUTION:
The radius of Earth is $4000$ mi, so $ρ=4000.$ The intersection of the prime meridian and the equator lies on the positive *x*-axis. Movement to the west is then described with negative angle measures, which shows that $\theta =−83\text{°},$ Because Columbus lies $40\text{°}$ north of the equator, it lies $50\text{°}$ south of the North Pole, so $φ=50\text{°}.$ In spherical coordinates, Columbus lies at point $(4000,−83\text{°},50\text{°}).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723183896} type= 
PROBLEM:
Sydney, Australia is at $34\text{°}\text{S}$ and $151\text{°}\text{E}.$ Express Sydney’s location in spherical coordinates.
SOLUTION:
$(4000,151\text{°},124\text{°})$
COMMENTARY: Hint
Because Sydney lies south of the equator, we need to add $90\text{°}$ to find the angle measured from the positive *z*-axis.
:::
:::
Cylindrical and spherical coordinates give us the flexibility to select a coordinate system appropriate to the problem at hand. A thoughtful choice of coordinate system can make a problem much easier to solve, whereas a poor choice can lead to unnecessarily complex calculations. In the following example, we examine several different problems and discuss how to select the best coordinate system for each one.

:::example {ex:fs-id1163724119534} Choosing the Best Coordinate System

:::exercise {fs-id1163724119536} type= 
PROBLEM:
In each of the following situations, we determine which coordinate system is most appropriate and describe how we would orient the coordinate axes. There could be more than one right answer for how the axes should be oriented, but we select an orientation that makes sense in the context of the problem. *Note*: There is not enough information to set up or solve these problems; we simply select the coordinate system ([ref:CNX_Calc_Figure_12_07_021]).
a. Find the center of gravity of a bowling ball.
b. Determine the velocity of a submarine subjected to an ocean current.
c. Calculate the pressure in a conical water tank.
d. Find the volume of oil flowing through a pipeline.
e. Determine the amount of leather required to make a football.

> FIGURE {fig:CNX_Calc_Figure_12_07_021} src=../../media/CNX_Calc_Figure_12_07_021.jpg
> alt: This figure has 5 images. The first image shows bowling balls. The second image is a submarine traveling on an ocean surface. The third image is a traffic cone. The fourth image is a pipeline across some barren land. The fifth image is a football.
> caption: (credit: (a) modification of work by scl hua, Wikimedia, (b) modification of work by DVIDSHUB, Flickr, (c) modification of work by Michael Malak, Wikimedia, (d) modification of work by Sean Mack, Wikimedia, (e) modification of work by Elvert Barnes, Flickr)

SOLUTION:
a. Clearly, a bowling ball is a sphere, so spherical coordinates would probably work best here. The origin should be located at the physical center of the ball. There is no obvious choice for how the *x*-, *y*- and *z*-axes should be oriented. Bowling balls normally have a weight block in the center. One possible choice is to align the *z*-axis with the axis of symmetry of the weight block.
b. A submarine generally moves in a straight line. There is no rotational or spherical symmetry that applies in this situation, so rectangular coordinates are a good choice. The *z*-axis should probably point upward. The *x*- and *y*-axes could be aligned to point east and north, respectively. The origin should be some convenient physical location, such as the starting position of the submarine or the location of a particular port.
c. A cone has several kinds of symmetry. In cylindrical coordinates, a cone can be represented by equation $z=kr,$ where $k$ is a constant. In spherical coordinates, we have seen that surfaces of the form $φ=c$ are half-cones. Last, in rectangular coordinates, elliptic cones are quadric surfaces and can be represented by equations of the form ${z}^{2}=\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}.$ In this case, we could choose any of the three. However, the equation for the surface is more complicated in rectangular coordinates than in the other two systems, so we might want to avoid that choice. In addition, we are talking about a water tank, and the depth of the water might come into play at some point in our calculations, so it might be nice to have a component that represents height and depth directly. Based on this reasoning, cylindrical coordinates might be the best choice. Choose the *z*-axis to align with the axis of the cone. The orientation of the other two axes is arbitrary. The origin should be the bottom point of the cone.
d. A pipeline is a cylinder, so cylindrical coordinates would be best the best choice. In this case, however, we would likely choose to orient our *z*-axis with the center axis of the pipeline. The *x*-axis could be chosen to point straight downward or to some other logical direction. The origin should be chosen based on the problem statement. Note that this puts the *z*-axis in a horizontal orientation, which is a little different from what we usually do. It may make sense to choose an unusual orientation for the axes if it makes sense for the problem.
e. A football has rotational symmetry about a central axis, so cylindrical coordinates would work best. The *z*-axis should align with the axis of the ball. The origin could be the center of the ball or perhaps one of the ends. The position of the *x*-axis is arbitrary.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723566663} type= 
PROBLEM:
Which coordinate system is most appropriate for creating a star map, as viewed from Earth (see the following figure)?

> IMAGE {img:fs-id1163723566671} src=../../media/CNX_Calc_Figure_12_07_022.jpg
> alt: This figure is a circle with a star chart in the middle.

How should we orient the coordinate axes?
SOLUTION:
Spherical coordinates with the origin located at the center of the earth, the *z*-axis aligned with the North Pole, and the *x*-axis aligned with the prime meridian
COMMENTARY: Hint
What kinds of symmetry are present in this situation?
:::
:::

## Key Concepts {section:key-concepts}
- In the cylindrical coordinate system, a point in space is represented by the ordered triple $(r,\theta ,z),$ where $(r,\theta )$ represents the polar coordinates of the point’s projection in the *xy*-plane and $z$ represents the point’s projection onto the *z*-axis.
- To convert a point from cylindrical coordinates to Cartesian coordinates, use equations $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ and $z=z.$
- To convert a point from Cartesian coordinates to cylindrical coordinates, use equations ${r}^{2}={x}^{2}+{y}^{2},$ $\text{tan}\;\theta =\frac{y}{x},$ and $z=z.$
- In the spherical coordinate system, a point $P$ in space is represented by the ordered triple $(ρ,\theta ,φ),$ where $ρ$ is the distance between $P$ and the origin $(ρ≠0),$ $\theta$ is the same angle used to describe the location in cylindrical coordinates, and $φ$ is the angle formed by the positive *z*-axis and line segment $\overline{OP},$ where $O$ is the origin and $0\le φ\le \pi .$
- To convert a point from spherical coordinates to Cartesian coordinates, use equations $x=ρ\;\text{sin}\;φ\;\text{cos}\;\theta ,$ $y=ρ\;\text{sin}\;φ\;\text{sin}\;\theta ,$ and $z=ρ\;\text{cos}\;φ.$
- To convert a point from Cartesian coordinates to spherical coordinates, use equations ${ρ}^{2}={x}^{2}+{y}^{2}+{z}^{2},$ $\text{tan}\;\theta =\frac{y}{x},$ and $φ=\text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}).$
- To convert a point from spherical coordinates to cylindrical coordinates, use equations $r=ρ\;\text{sin}\;φ,$ $\theta =\theta ,$ and $z=ρ\;\text{cos}\;φ.$
- To convert a point from cylindrical coordinates to spherical coordinates, use equations $ρ=\sqrt{{r}^{2}+{z}^{2}},$ $\theta =\theta ,$ and $φ=\text{arccos}(\frac{z}{\sqrt{{r}^{2}+{z}^{2}}}).$

##  {section:section-exercises}
Use the following figure as an aid in identifying the relationship between the rectangular, cylindrical, and spherical coordinate systems.

> IMAGE {img:fs-id1163723566440} src=../../media/CNX_Calc_Figure_12_07_201.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a line segment from the origin upwards. It is labeled “rho.” The angle between this line segment and the z-axis is labeled “phi.” There is also a broken line from the origin to the shadow of the point. This line segment is in the x y-plane and is labeled “r.” The angle between r and the x-axis is labeled “theta.”

For the following exercises, the cylindrical coordinates $(r,\theta ,z)$ of a point are given. Find the rectangular coordinates $(x,y,z)$ of the point.

:::exercise {fs-id1163723560107} type= 
PROBLEM:
$(4,\frac{\pi}{6},3)$
SOLUTION:
$(2\sqrt{3},2,3)$
:::

:::exercise {fs-id1163723569931} type= 
PROBLEM:
$(3,\frac{\pi}{3},5)$
:::

:::exercise {fs-id1163723330516} type= 
PROBLEM:
$(4,\frac{7\pi}{6},3)$
SOLUTION:
$(−2\sqrt{3},−2,3)$
:::

:::exercise {fs-id1163723246616} type= 
PROBLEM:
$(2,\pi ,−4)$
:::
For the following exercises, the rectangular coordinates $(x,y,z)$ of a point are given. Find the cylindrical coordinates $(r,\theta ,z)$ of the point.

:::exercise {fs-id1163723561014} type= 
PROBLEM:
$(1,\sqrt{3},2)$
SOLUTION:
$(2,\frac{\pi}{3},2)$
:::

:::exercise {fs-id1163723093296} type= 
PROBLEM:
$(1,1,5)$
:::

:::exercise {fs-id1163723186992} type= 
PROBLEM:
$(3,−3,7)$
SOLUTION:
$(3\sqrt{2},-\frac{\pi}{4},7)$
:::

:::exercise {fs-id1163723570439} type= 
PROBLEM:
$(−2\sqrt{2},2\sqrt{2},4)$
:::
For the following exercises, the equation of a surface in cylindrical coordinates is given.
Find an equation of the surface in rectangular coordinates. Identify and graph the surface.

:::exercise {fs-id1163723187112} type= 
PROBLEM:
**[T]** $r=4$
SOLUTION:
A cylinder of equation ${x}^{2}+{y}^{2}=16,$ with its center at the origin and rulings parallel to the *z*-axis,

> IMAGE {img:fs-id1163723569513} src=../../media/CNX_Calc_Figure_12_07_221.jpg
> alt: This figure is a right circular cylinder, vertical. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723569525} type= 
PROBLEM:
**[T]** $z={r}^{2}{\text{cos}}^{2}\theta$
:::

:::exercise {fs-id1163723248454} type= 
PROBLEM:
**[T]** ${r}^{2}\text{cos}(2\theta )+{z}^{2}+1=0$
SOLUTION:
Hyperboloid of two sheets of equation $\text{−}{x}^{2}+{y}^{2}-{z}^{2}=1,$ with the *y*-axis as the axis of symmetry,

> IMAGE {img:fs-id1163723144973} src=../../media/CNX_Calc_Figure_12_07_223.jpg
> alt: This figure is a elliptic cone surface that is horizontal. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723144985} type= 
PROBLEM:
**[T]** $r=3\;\text{sin}\;\theta$
:::

:::exercise {fs-id1163723103383} type= 
PROBLEM:
**[T]** $r=2\;\text{cos}\;\theta$
SOLUTION:
Cylinder of equation ${x}^{2}-2x+{y}^{2}=0,$ with a center at $(1,0,0)$ and radius $1,$ with rulings parallel to the *z*-axis,

> IMAGE {img:fs-id1163723560912} src=../../media/CNX_Calc_Figure_12_07_225.jpg
> alt: This figure is a right circular cylinder, vertical. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723560924} type= 
PROBLEM:
**[T]** ${r}^{2}+{z}^{2}=5$
:::

:::exercise {fs-id1163723571904} type= 
PROBLEM:
**[T]** $r=2\;\text{sec}\;\theta$
SOLUTION:
Plane of equation $x=2,$

> IMAGE {img:fs-id1163723093201} src=../../media/CNX_Calc_Figure_12_07_227.jpg
> alt: This figure is a vertical parallelogram where x = 2 and parallel to the y z-plane. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723093213} type= 
PROBLEM:
**[T]** $r=3\;\text{csc}\;\theta$
:::
For the following exercises, the equation of a surface in rectangular coordinates is given. Find an equation of the surface in cylindrical coordinates.

:::exercise {fs-id1163724081932} type= 
PROBLEM:
$z=3$
SOLUTION:
$z=3$
:::

:::exercise {fs-id1163724081963} type= 
PROBLEM:
$x=6$
:::

:::exercise {fs-id1163724081999} type= 
PROBLEM:
${x}^{2}+{y}^{2}+{z}^{2}=9$
SOLUTION:
${r}^{2}+{z}^{2}=9$
:::

:::exercise {fs-id1163724018959} type= 
PROBLEM:
$y=2{x}^{2}$
:::

:::exercise {fs-id1163724019018} type= 
PROBLEM:
${x}^{2}+{y}^{2}-16x=0$
SOLUTION:
$r=16\;\text{cos}\;\theta ,r=0$
:::

:::exercise {fs-id1163723529577} type= 
PROBLEM:
${x}^{2}+{y}^{2}-3\sqrt{{x}^{2}+{y}^{2}}+2=0$
:::
For the following exercises, the spherical coordinates $(ρ,\theta ,φ)$ of a point are given. Find the rectangular coordinates $(x,y,z)$ of the point.

:::exercise {fs-id1163724074697} type= 
PROBLEM:
$(3,0,\pi )$
SOLUTION:
$(0,0,−3)$
:::

:::exercise {fs-id1163724074750} type= 
PROBLEM:
$(1,\frac{\pi}{6},\frac{\pi}{6})$
:::

:::exercise {fs-id1163724074822} type= 
PROBLEM:
$(12,-\frac{\pi}{4},\frac{\pi}{4})$
SOLUTION:
$(6,−6,6\sqrt{2})$
:::

:::exercise {fs-id1163723572524} type= 
PROBLEM:
$(3,\frac{\pi}{4},\frac{\pi}{6})$
:::
For the following exercises, the rectangular coordinates $(x,y,z)$ of a point are given. Find the spherical coordinates $(ρ,\theta ,φ)$ of the point. Express the measure of the angles in degrees rounded to the nearest integer.

:::exercise {fs-id1163723572648} type= 
PROBLEM:
$(4,0,0)$
SOLUTION:
$(4,0,90\text{°})$
:::

:::exercise {fs-id1163723183730} type= 
PROBLEM:
$(−1,2,1)$
:::

:::exercise {fs-id1163723183788} type= 
PROBLEM:
$(0,3,0)$
SOLUTION:
$(3,90\text{°},90\text{°})$
:::

:::exercise {fs-id1163723183848} type= 
PROBLEM:
$(−2,2\sqrt{3},4)$
:::
For the following exercises, the equation of a surface in spherical coordinates is given. Find an equation of the surface in rectangular coordinates. Identify and graph the surface.

:::exercise {fs-id1163723573545} type= 
PROBLEM:
**[T]** $ρ=3$
SOLUTION:
Sphere of equation ${x}^{2}+{y}^{2}+{z}^{2}=9$ centered at the origin with radius $3,$

> IMAGE {img:fs-id1163723573606} src=../../media/CNX_Calc_Figure_12_07_229.jpg
> alt: This figure is a sphere. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723573616} type= 
PROBLEM:
**[T]** $φ=\frac{\pi}{3}$
:::

:::exercise {fs-id1163724049525} type= 
PROBLEM:
**[T]** $ρ=2\;\text{cos}\;φ$
SOLUTION:
Sphere of equation ${x}^{2}+{y}^{2}+{(z-1)}^{2}=1$ centered at $(0,0,1)$ with radius $1,$

> IMAGE {img:fs-id1163724049621} src=../../media/CNX_Calc_Figure_12_07_031.jpg
> alt: This figure is a sphere of radius 1 centered in a box. The center of the sphere is the point (0, 0, 1).

:::

:::exercise {fs-id1163724049632} type= 
PROBLEM:
**[T]** $ρ=4\;\text{csc}\;φ$
:::

:::exercise {fs-id1163724049712} type= 
PROBLEM:
**[T]** $φ=\frac{\pi}{2}$
SOLUTION:
The *xy*-plane of equation $z=0,$

> IMAGE {img:fs-id1163724065983} src=../../media/CNX_Calc_Figure_12_07_233.jpg
> alt: This figure is a parallelogram representing a plane. It is parallel to the x y-plane at z = 0. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163724065996} type= 
PROBLEM:
**[T]** $ρ=6\;\text{csc}\;φ\;\text{sec}\;\theta$
:::
For the following exercises, the equation of a surface in rectangular coordinates is given. Find an equation of the surface in spherical coordinates. Identify the surface.

:::exercise {fs-id1163724066058} type= 
PROBLEM:
${x}^{2}+{y}^{2}-3{z}^{2}=0,$ $z≠0$
SOLUTION:
$φ=\frac{\pi}{3}$ or $φ=\frac{2\pi}{3};$ Elliptic cone
:::

:::exercise {fs-id1163724066144} type= 
PROBLEM:
${x}^{2}+{y}^{2}+{z}^{2}-4z=0$
:::

:::exercise {fs-id1163723566851} type= 
PROBLEM:
$z=6$
SOLUTION:
$ρ\;\text{cos}\;φ=6;$ Plane at $z=6$
:::

:::exercise {fs-id1163723566898} type= 
PROBLEM:
${x}^{2}+{y}^{2}=9$
:::
For the following exercises, the cylindrical coordinates of a point are given. Find its associated spherical coordinates, with the measure of the angle $φ$ in radians rounded to four decimal places.

:::exercise {fs-id1163723566962} type= 
PROBLEM:
**[T]** $(1,\frac{\pi}{4},3)$
SOLUTION:
$(\sqrt{10},\frac{\pi}{4},0.3218)$
:::

:::exercise {fs-id1163724050198} type= 
PROBLEM:
**[T]** $(5,\pi ,12)$
:::

:::exercise {fs-id1163724050254} type= 
PROBLEM:
$(3,\frac{\pi}{2},3)$
SOLUTION:
$(3\sqrt{2},\frac{\pi}{2},\frac{\pi}{4})$
:::

:::exercise {fs-id1163724050319} type= 
PROBLEM:
$(3,-\frac{\pi}{6},3)$
:::
For the following exercises, the spherical coordinates of a point are given. Find its associated cylindrical coordinates.

:::exercise {fs-id1163724050393} type= 
PROBLEM:
$(2,-\frac{\pi}{4},\frac{\pi}{2})$
SOLUTION:
$(2,-\frac{\pi}{4},0)$
:::

:::exercise {fs-id1163723298948} type= 
PROBLEM:
$(4,\frac{\pi}{4},\frac{\pi}{6})$
:::

:::exercise {fs-id1163723299013} type= 
PROBLEM:
$(8,\frac{\pi}{3},\frac{\pi}{2})$
SOLUTION:
$(8,\frac{\pi}{3},0)$
:::

:::exercise {fs-id1163723299075} type= 
PROBLEM:
$(9,-\frac{\pi}{6},\frac{\pi}{3})$
:::
For the following exercises, find the most suitable system of coordinates to describe the solids.

:::exercise {fs-id1163724057692} type= 
PROBLEM:
The solid situated in the first octant with a vertex at the origin and enclosed by a cube of edge length $a,$ where $a>0$
SOLUTION:
Cartesian system, $\{(x,y,z)|0\le x\le a,0\le y\le a,0\le z\le a\}$
:::

:::exercise {fs-id1163724057789} type= 
PROBLEM:
A spherical shell determined by the region between two concentric spheres centered at the origin, of radii of $a$ and $b,$ respectively, where $b>a>0$
:::

:::exercise {fs-id1163723073046} type= 
PROBLEM:
A solid inside sphere ${x}^{2}+{y}^{2}+{z}^{2}=9$ and outside cylinder ${(x-\frac{3}{2})}^{2}+{y}^{2}=\frac{9}{4}$
SOLUTION:
Cylindrical system, $\left\{\begin{array}{l}(r,\theta ,z)|{r}^{2}+{z}^{2}\le 9,r\ge 0,\frac{\pi}{2}\le \theta \le \frac{3\pi}{2} \\ ,(r\ge 3cos\theta ,-\frac{\pi}{2}\le \theta \le \frac{\pi}{2})\end{array}\right\}$
:::

:::exercise {fs-id1163723073200} type= 
PROBLEM:
A cylindrical shell of height $10$ determined by the region between two cylinders with the same center, parallel rulings, and radii of $2$ and $5,$ respectively
:::

:::exercise {fs-id1163723314891} type= 
PROBLEM:
**[T]** Use a CAS to graph the region between elliptic paraboloid $z={x}^{2}+{y}^{2}$ and cone ${x}^{2}+{y}^{2}-{z}^{2}=0.$  Then describe the region in cylindrical coordinates.
SOLUTION:
The region is described by the set of points $\{(r,\theta ,z)|0\le r\le 1,0\le \theta \le 2\pi ,{r}^{2}\le z\le r\}.$

> IMAGE {img:fs-id1163723339375} src=../../media/CNX_Calc_Figure_12_07_235.jpg
> alt: This figure is a paraboloid, vertical. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723339386} type= 
PROBLEM:
**[T]** Use a CAS to graph in spherical coordinates the “ice cream-cone region” situated above the *xy*-plane between sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ and elliptical cone ${x}^{2}+{y}^{2}-{z}^{2}=0.$
:::

:::exercise {fs-id1163723339550} type= 
PROBLEM:
Washington, DC, is located at $39\text{°}$ N and $77\text{°}$ W (see the following figure). Assume the radius of Earth is $4000$ mi. Express the location of Washington, DC, in spherical coordinates.

> IMAGE {img:fs-id1163724138488} src=../../media/CNX_Calc_Figure_12_07_237.jpg
> alt: This figure is an image of a globe. On the globe there is a point labeled where Washington, DC is located. It is labeled with 39 degrees north latitude and 77 degrees west longitude.

SOLUTION:
$(4000,\text{−}77\text{°},51\text{°})$
:::

:::exercise {fs-id1163724138535} type= 
PROBLEM:
San Francisco is located at $37.78\text{°}\text{N}$ and $122.42\text{°}\text{W}.$ Assume the radius of Earth is $4000$ mi. Express the location of San Francisco in spherical coordinates.
:::

:::exercise {fs-id1163724138611} type= 
PROBLEM:
Find the latitude and longitude of Rio de Janeiro if its spherical coordinates are $(4000,\text{−}43.17\text{°},102.91\text{°}).$
SOLUTION:
$43.17\text{°}\text{W},$ $22.91\text{°}\text{S}$
:::

:::exercise {fs-id1163724138680} type= 
PROBLEM:
Find the latitude and longitude of Berlin if its spherical coordinates are $(4000,13.38\text{°},37.48\text{°}).$
:::

:::exercise {fs-id1163723341675} type= 
PROBLEM:
**[T]** Consider the torus of equation ${({x}^{2}+{y}^{2}+{z}^{2}+{R}^{2}-{r}^{2})}^{2}=4{R}^{2}({x}^{2}+{y}^{2}),$ where $R\ge r>0.$
a. Write the equation of the torus in spherical coordinates.
b. If $R=r,$ the surface is called a *horn torus*. Show that the equation of a horn torus in spherical coordinates is $ρ=2R\;\text{sin}\;φ.$
c. Use a CAS to graph the horn torus with $R=r=2$ in spherical coordinates.
SOLUTION:
a. ${ρ}^{2}=0,$ $ρ+{R}^{2}-{r}^{2}-2R\;\text{sin}\;φ=0;$
c.

> IMAGE {img:fs-id1163723361972} src=../../media/CNX_Calc_Figure_12_07_238.jpg
> alt: This figure is a torus. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::

:::exercise {fs-id1163723361983} type= 
PROBLEM:
**[T]** The “bumpy sphere” with an equation in spherical coordinates is $ρ=a+b\;\text{cos}(m\theta )\text{sin}(nφ),$ with $\theta \in [0,2\pi ]$ and $φ\in [0,\pi ],$ where $a$ and $b$ are positive numbers and $m$ and $n$ are positive integers, may be used in applied mathematics to model tumor growth.
a. Show that the “bumpy sphere” is contained inside a sphere of equation $ρ=a+b.$ Find the values of $\theta$ and $φ$ at which the two surfaces intersect.
b. Use a CAS to graph the surface for $a=14,$ $b=2,$ $m=4,$ and $n=6$ along with sphere $ρ=a+b.$
c. Find an equation of the intersection curve of the surface at b. with the cone $φ=\frac{\pi}{12}.$ Graph the intersection curve in the plane of intersection.
:::

## Chapter Review Exercises {section:review-exercises}
For the following exercises, determine whether the statement is *true or false*. Justify the answer with a proof or a counterexample.

:::exercise {fs-id1163723139824} type= 
PROBLEM:
For vectors $\textbf{a}$ and $\textbf{b}$ and any given scalar $c,$ $c(\textbf{a}\cdot \textbf{b})=(c\textbf{a})\cdot \textbf{b}.$
SOLUTION:
True
:::

:::exercise {fs-id1163723139923} type= 
PROBLEM:
For vectors $\textbf{a}$ and $\textbf{b}$ and any given scalar $c,$ $c(\textbf{a}\;\times \;\textbf{b})=(c\textbf{a})\;\times \;\textbf{b}.$
:::

:::exercise {fs-id1163723140022} type= 
PROBLEM:
The symmetric equation for the line of intersection between two planes $x+y+z=2$ and $x+2y-4z=5$ is given by $-\frac{x-1}{6}=\frac{y-1}{5}=z.$
SOLUTION:
False
:::

:::exercise {fs-id1163723995134} type= 
PROBLEM:
If $\textbf{a}\cdot \textbf{b}=0,$ then $\textbf{a}$ is perpendicular to $\textbf{b}.$
:::
For the following exercises, use the given vectors to find the quantities.

:::exercise {fs-id1163723995200} type= 
PROBLEM:
$\textbf{a}=9\textbf{i}-2\textbf{j},\textbf{b}=−3\textbf{i}+\textbf{j}$
a. $3\textbf{a}+\textbf{b}$
b. $\| \textbf{a}\|$
c. $\textbf{a}\;\times \;\| \textbf{b}\;\times \;\textbf{c}\|$
d. $\textbf{b}\;\cdot \;\textbf{a}$
SOLUTION:
a. $\langle 24,−5\rangle ;$ b. $\sqrt{85};$ c. Can’t cross a vector with a scalar; d. $−29$
:::

:::exercise {fs-id1163723478033} type= 
PROBLEM:
$\textbf{a}=2\textbf{i}+\textbf{j}-9\textbf{k},\textbf{b}=\text{−}\textbf{i}+2\textbf{k},\textbf{c}=4\textbf{i}-2\textbf{j}+\textbf{k}$
a. $2\textbf{a}-\textbf{b}$
b. $\textbf{b}\;\times \;\textbf{c}$
c. $\textbf{b}\;\times \;\| \textbf{b}\;\times \;\textbf{c}\|$
d. $\textbf{c}\;\times \;\| \textbf{b}\;\times \;\textbf{a}\|$
e. ${\text{proj}}_{\textbf{a}}\textbf{b}$
:::

:::exercise {fs-id1163724053929} type= 
PROBLEM:
Find the values of $a$ such that vectors $\langle 2,4,a\rangle$ and $\langle 0,−1,a\rangle$ are orthogonal.
SOLUTION:
$a=\text{±}2$
:::
For the following exercises, find the unit vectors.

:::exercise {fs-id1163724054003} type= 
PROBLEM:
Find the unit vector that has the same direction as vector $\textbf{v}$ that begins at $(0,−3)$ and ends at $(4,10).$
:::

:::exercise {fs-id1163723326762} type= 
PROBLEM:
Find the unit vector that has the same direction as vector $\textbf{v}$ that begins at $(1,4,10)$ and ends at $(3,0,4).$
SOLUTION:
$\langle \frac{1}{\sqrt{14}},-\frac{2}{\sqrt{14}},-\frac{3}{\sqrt{14}}\rangle$
:::
For the following exercises, find the area or volume of the given shapes.

:::exercise {fs-id1163723326874} type= 
PROBLEM:
The parallelogram spanned by vectors $\textbf{a}=\langle 1,13\rangle \;\text{and}\;\textbf{b}=\langle 3,21\rangle$
:::

:::exercise {fs-id1163723326948} type= 
PROBLEM:
The parallelepiped formed by $\textbf{a}=\langle 1,4,1\rangle \;\text{and}\;\textbf{b}=\langle 3,6,2\rangle ,$ and $\textbf{c}=\langle −2,1,−5\rangle$
SOLUTION:
$27$
:::
For the following exercises, find the vector and parametric equations of the line with the given properties.

:::exercise {fs-id1163724066260} type= 
PROBLEM:
The line that passes through point $(2,−3,7)$ that is parallel to vector $\langle 1,3,−2\rangle$
:::

:::exercise {fs-id1163724022775} type= 
PROBLEM:
The line that passes through points $(1,3,5)$ and $(−2,6,−3)$
SOLUTION:
$x=1-3t,y=3+3t,z=5-8t,\textbf{r}(t)=(1-3t)\textbf{i}+3(1+t)\textbf{j}+(5-8t)\textbf{k}$
:::
For the following exercises, find an equation of the plane with the given properties.

:::exercise {fs-id1163723312394} type= 
PROBLEM:
The plane that passes through point $(4,7,−1)$ and has normal vector $\textbf{n}=\langle 3,4,2\rangle$
:::

:::exercise {fs-id1163723312481} type= 
PROBLEM:
The plane that passes through points $(0,1,5),(2,−1,6),\;\text{and}\;(3,2,5).$
SOLUTION:
$\text{−}x+3y+8z=43$
:::
For the following exercises, find the traces for the surfaces in planes $x=k,y=k,\;\text{and}\;z=k.$ Then, describe and draw the surfaces.

:::exercise {fs-id1163723171298} type= 
PROBLEM:
$9{x}^{2}+4{y}^{2}-16y+36{z}^{2}=20$
:::

:::exercise {fs-id1163724060998} type= 
PROBLEM:
${x}^{2}={y}^{2}+{z}^{2}$
SOLUTION:
$x=k$ trace: ${k}^{2}={y}^{2}+{z}^{2}$ is a circle, $y=k$ trace: ${x}^{2}-{z}^{2}={k}^{2}$ is a hyperbola (or a pair of lines if $k=0),$ $z=k$ trace: ${x}^{2}-{y}^{2}={k}^{2}$ is a hyperbola (or a pair of lines if $k=0).$ The surface is a cone.

> IMAGE {img:fs-id1163724061164} src=../../media/CNX_Calc_Figure_12_07_218.jpg
> alt: This figure is an elliptical cone on its side. It is inside of a box. The edges of the box represent the x, y, and z axes.

:::
For the following exercises, write the given equation in cylindrical coordinates and spherical coordinates.

:::exercise {fs-id1163724061183} type= 
PROBLEM:
${x}^{2}+{y}^{2}+{z}^{2}=144$
:::

:::exercise {fs-id1163724055534} type= 
PROBLEM:
$z={x}^{2}+{y}^{2}-1$
SOLUTION:
Cylindrical: $z={r}^{2}-1,$ spherical: $\text{cos}\;φ=ρ\;{\text{sin}}^{2}φ-\frac{1}{ρ}$
:::
For the following exercises, convert the given equations from cylindrical or spherical coordinates to rectangular coordinates. Identify the given surface.

:::exercise {fs-id1163724055623} type= 
PROBLEM:
${ρ}^{2}({\text{sin}}^{2}(φ)-{\text{cos}}^{2}(φ))=1$
:::

:::exercise {fs-id1163724034883} type= 
PROBLEM:
${r}^{2}-2r\;\text{cos}(\theta )+{z}^{2}=1$
SOLUTION:
${x}^{2}-2x+{y}^{2}+{z}^{2}=1,$ sphere
:::
For the following exercises, consider a small boat crossing a river.

:::exercise {fs-id1163724034971} type= 
PROBLEM:
If the boat velocity is $5$ km/h due north in still water and the water has a current of $2$ km/h due west (see the following figure), what is the velocity of the boat relative to shore? What is the angle $\theta$ that the boat is actually traveling?

> IMAGE {img:fs-id1163724034996} src=../../media/CNX_Calc_Figure_12_07_219.jpg
> alt: This figure is an image of overtop of a boat. There is a line segment from the front of the boat. It is labeled “5 k m/h r.” This line segment has another line segment perpendicular. It is labeled “2 k m/h r.” There is another line segment making a right triangle with the other two. The angle between the line segments from the boat is theta.

:::

:::exercise {fs-id1163724035036} type= 
PROBLEM:
When the boat reaches the shore, two ropes are thrown to people to help pull the boat ashore. One rope is at an angle of $25\text{°}$ and the other is at $35\text{°}.$ If the boat must be pulled straight and at a force of $500\text{N},$ find the magnitude of force for each rope (see the following figure).

> IMAGE {img:fs-id1163724035078} src=../../media/CNX_Calc_Figure_12_07_220.jpg
> alt: This figure is overtop of a boat. From the front of the boat is a horizontal vector. It is labeled “500 N.” There are two other line segments from the boat. The first one forms an angle with the horizontal vector of 35 degrees above the vector. The second line segment forms an angle of 25 degrees below the vector.

SOLUTION:
331 N, and 244 N
:::

:::exercise {fs-id1163724035097} type= 
PROBLEM:
An airplane is flying in the direction of 52° east of north with a speed of 450 mph. A strong wind has a bearing 33° east of north with a speed of 50 mph. What is the resultant ground speed and bearing of the airplane?
:::

:::exercise {fs-id1163724042043} type= 
PROBLEM:
Calculate the work done by moving a particle from position $(1,2,0)$ to $(8,4,5)$ along a straight line with a force $\textbf{F}=2\textbf{i}+3\textbf{j}-\textbf{k}.$
SOLUTION:
$15\;\text{J}$
:::
The following problems consider your unsuccessful attempt to take the tire off your car using a wrench to loosen the bolts. Assume the wrench is $0.3$ m long and you are able to apply a 200-N force.

:::exercise {fs-id1163724042170} type= 
PROBLEM:
Because your tire is flat, you are only able to apply your force at a $60\text{°}$ angle. What is the torque at the center of the bolt? Assume this force is not enough to loosen the bolt.
:::

:::exercise {fs-id1163724042202} type= 
PROBLEM:
Someone lends you a tire jack and you are now able to apply a 200-N force at an $80\text{°}$ angle. Is your resulting torque going to be more or less? What is the new resulting torque at the center of the bolt? Assume this force is not enough to loosen the bolt.
SOLUTION:
More, $59.09$ J
:::

## Glossary
- {def} **cylindrical coordinate system**: a way to describe a location in space with an ordered triple $(r,\theta ,z),$ where $(r,\theta )$ represents the polar coordinates of the point’s projection in the *xy*-plane, and $z$ represents the point’s projection onto the *z*-axis
- {def} **spherical coordinate system**: a way to describe a location in space with an ordered triple $(ρ,\theta ,φ),$ where $ρ$ is the distance between $P$ and the origin $(ρ≠0),$ $\theta$ is the same angle used to describe the location in cylindrical coordinates, and $φ$ is the angle formed by the positive *z*-axis and line segment $\overline{OP},$ where $O$ is the origin and $0\le φ\le \pi$

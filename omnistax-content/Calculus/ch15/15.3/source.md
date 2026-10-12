# Double Integrals in Polar Coordinates

## Learning Objectives {section:learning-objectives}
- Recognize the format of a double integral over a polar rectangular region.
- Evaluate a double integral in polar coordinates by using an iterated integral.
- Recognize the format of a double integral over a general polar region.
- Use double integrals in polar coordinates to calculate areas and volumes.

Double integrals are sometimes much easier to evaluate if we change rectangular coordinates to polar coordinates. However, before we describe how to make this change, we need to establish the concept of a double integral in a polar rectangular region.

## Polar Rectangular Regions of Integration
When we defined the double integral for a continuous function in rectangular coordinates—say, $g$ over a region $R$ in the $xy$-plane—we divided $R$ into subrectangles with sides parallel to the coordinate axes. These sides have either constant $x$-values and/or constant $y$-values. In polar coordinates, the shape we work with is a {term:polar rectangle}, whose sides have constant $r$-values and/or constant $\theta$-values. This means we can describe a polar rectangle as in [ref:CNX_Calc_Figure_15_03_001](a), with $R=\{(r,\theta )|a\le r\le b,\alpha \le \theta \le β\}.$
In this section, we are looking to integrate over polar rectangles. Consider a function $f(r,\theta )$ over a polar rectangle $R.$ We divide the interval $[a,b]$ into $m$ subintervals $[{r}_{i-1},{r}_{i}]$ of length $\text{Δ}r=(b-a)\text{/}m$ and divide the interval $[\alpha ,β]$ into $n$ subintervals $[{\theta}_{j-1},{\theta}_{j}]$ of width $\text{Δ}\theta =(β-\alpha )\text{/}n.$ This means that the circles $r={r}_{i}$ and rays $\theta ={\theta}_{j}$ for $1\le i\le m$ and $1\le j\le n$ divide the polar rectangle $R$ into smaller polar subrectangles ${R}_{ij}$ ([ref:CNX_Calc_Figure_15_03_001](b)).

> FIGURE {fig:CNX_Calc_Figure_15_03_001} src=../../media/CNX_Calc_Figure_15_03_001.jpg
> alt: This figure consists of three figures labeled a, b, and c. In figure a, a sector of an annulus is shown in the polar coordinate plane with radii a and b and angles alpha and beta from the theta = 0 axis. In figure b, this sector of an annulus is cut up into subsectors in a manner similar to the way in which previous spaces were cut up into subrectangles. In figure c, one of these subsectors is shown with angle Delta theta, distance between inner and outer radii Delta r, and area Delta A = r* sub theta Delta r Delta theta, where the center point is given as (r* sub i j, theta* sub i j).
> caption: (a) A polar rectangle $R$ (b) divided into subrectangles ${R}_{ij}.$ (c) Close-up of a subrectangle.

As before, we need to find the area $\text{Δ}A$ of the polar subrectangle ${R}_{ij}$ and the “polar” volume of the thin box above ${R}_{ij}.$ Recall that, in a circle of radius $r,$ the length $s$ of an arc subtended by a central angle of $\theta$ radians is $s=r\theta .$ Notice that the polar rectangle ${R}_{ij}$ looks a lot like a trapezoid with parallel sides ${r}_{i-1}\text{Δ}\theta$ and ${r}_{i}\text{Δ}\theta$ and with a width $\text{Δ}r.$ Hence the area of the polar subrectangle ${R}_{ij}$ is

$\text{Δ}A=\frac{1}{2}\text{Δ}r({r}_{i-1}\text{Δ}\theta +{r}_{i}\text{Δ}\theta ).$  {eq:fs-id1167794060181}

Simplifying and letting ${r}_{ij}^{*}=\frac{1}{2}({r}_{i-1}+{r}_{i}),$ we have $\text{Δ}A={r}_{ij}^{*}\text{Δ}r\text{Δ}\theta .$ Therefore, the polar volume of the thin box above ${R}_{ij}$ ([ref:CNX_Calc_Figure_15_03_002]) is

$f({r}_{ij}^{*},{\theta}_{ij}^{*})\text{Δ}A=f({r}_{ij}^{*},{\theta}_{ij}^{*}){r}_{ij}^{*}\text{Δ}r\text{Δ}\theta .$  {eq:fs-id1167793951070}

> FIGURE {fig:CNX_Calc_Figure_15_03_002} src=../../media/CNX_Calc_Figure_15_03_002.jpg
> alt: In x y z space, there is a surface f (r, theta). On the x y plane, a series of subsectors of annuli are drawn as in the previous figure with radius between annuli Delta r and angle between subsectors Delta theta. A subsector from the surface f(r, theta) is projected down onto one of these subsectors. This subsector has center point marked (r* sub i j, theta* sub i j).
> caption: Finding the volume of the thin box above polar rectangle ${R}_{ij}.$

Using the same idea for all the subrectangles and summing the volumes of the rectangular boxes, we obtain a double Riemann sum as

${\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}^{*},{\theta}_{ij}^{*}){r}_{ij}^{*}\text{Δ}r\text{Δ}\theta}}.$  {eq:fs-id1167793504153}

As we have seen before, we obtain a better approximation to the polar volume of the solid above the region $R$ when we let $m$ and $n$ become larger. Hence, we define the polar volume as the limit of the double Riemann sum,

$V=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}^{*},{\theta}_{ij}^{*}){r}_{ij}^{*}\text{Δ}r\text{Δ}\theta}}.$  {eq:fs-id1167793933162}

This becomes the expression for the double integral.

:::note [definition] Definition
The double integral of the function $f(r,\theta )$ over the polar rectangular region $R$ in the $r\theta$-plane is defined as

$$ {\displaystyle \iint\limits_{R}f(r,\theta )}dA=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}^{*},{\theta}_{ij}^{*})\text{Δ}A}}=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}^{*},{\theta}_{ij}^{*}){r}_{ij}^{*}\text{Δ}r\text{Δ}\theta}}. $$  {eq:fs-id1167793944942}

:::
Again, just as in [Double Integrals over Rectangular Regions](module:m53949), the double integral over a polar rectangular region can be expressed as an iterated integral in polar coordinates. Hence,

${\displaystyle \iint\limits_{R}f(r,\theta )}dA={\displaystyle \iint\limits_{R}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r=a}^{r=b} f(r,\theta )}}r\;dr\;d\theta .$  {eq:fs-id1167793952731}

Notice that the expression for $dA$ is replaced by $r\;dr\;d\theta$ when working in polar coordinates. Another way to look at the polar double integral is to change the double integral in rectangular coordinates by substitution. When the function $f$ is given in terms of $x$ and $y,$ using $x=r\;\text{cos}\;\theta ,y=r\;\text{sin}\;\theta ,\;\text{and}\;dA=r\;dr\;d\theta$ changes it to

${\displaystyle \iint\limits_{R}f(x,y)}dA={\displaystyle \iint\limits_{R}f(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta )}r\;dr\;d\theta .$  {eq:fs-id1167793299466}

Note that all the properties listed in [Double Integrals over Rectangular Regions](module:m53949) for the double integral in rectangular coordinates hold true for the double integral in polar coordinates as well, so we can use them without hesitation.

:::example {ex:fs-id1167793583313} Sketching a Polar Rectangular Region

:::exercise {fs-id1167793426256} type= 
PROBLEM:
Sketch the polar rectangular region $R=\{(r,\theta )|1\le r\le 3,0\le \theta \le \pi \}.$
SOLUTION:
As we can see from [ref:CNX_Calc_Figure_15_03_003], $r=1$ and $r=3$ are circles of radius $1\;\text{and}\;3$ and $0\le \theta \le \pi$ covers the entire top half of the plane. Hence the region $R$ looks like a semicircular band.

> FIGURE {fig:CNX_Calc_Figure_15_03_003} src=../../media/CNX_Calc_Figure_15_03_003.jpg
> alt: Half an annulus R is drawn with inner radius 1 and outer radius 3. That is, the inner semicircle is given by x squared + y squared = 1, whereas the outer semicircle is given by x squared + y squared = 9.
> caption: The polar region $\text{R}$ lies between two semicircles.

:::
:::
Now that we have sketched a polar rectangular region, let us demonstrate how to evaluate a double integral over this region by using polar coordinates.

:::example {ex:fs-id1167793298917} Evaluating a Double Integral over a Polar Rectangular Region

:::exercise {fs-id1167793240540} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}3x\;dA}$ over the region $R=\{(r,\theta )|1\le r\le 2,0\le \theta \le \pi \}.$
SOLUTION:
First we sketch a figure similar to [ref:CNX_Calc_Figure_15_03_003] but with outer radius $2.$ From the figure we can see that we have

$\begin{array}{rllll}{\displaystyle \iint\limits_{R}3x\;dA} & ={\displaystyle \int_{\theta =0}^{\theta =\pi} \;{\displaystyle \int_{r=1}^{r=2} 3r\;\text{cos}\;\theta r\;dr\;d\theta}} & & & \begin{array}{l}\text{Use an iterated integral with correct limits} \\ \text{of integration.}\end{array} \\ & ={\displaystyle \int_{\theta =0}^{\theta =\pi} \text{cos}\;\theta}[{{r}^{3}|}_{r=1}^{r=2}]d\theta & & & \text{Integrate first with respect to}\;r. \\ & ={\displaystyle \int_{\theta =0}^{\theta =\pi} 7\;\text{cos}\;\theta \;d\theta}={7\;\text{sin}\;\theta |}_{\theta =0}^{\theta =\pi}=0. & & & \end{array}$  {eq:fs-id1167794287352}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793950179} type= 
PROBLEM:
Sketch the region $R=\{(r,\theta )|1\le r\le 2,-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}\},$ and evaluate ${\displaystyle \iint\limits_{R}x\;dA}.$
SOLUTION:
$\frac{14}{3}$
COMMENTARY: Hint
Follow the steps in [ref:fs-id1167793298917].
:::
:::

:::example {ex:fs-id1167794159521} Evaluating a Double Integral by Converting from Rectangular Coordinates

:::exercise {fs-id1167794159523} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}(1-{x}^{2}-{y}^{2})}dA$ where $R$ is the unit disk on the $xy$-plane.
SOLUTION:
The region $R$ is a unit disk, so we can describe it as $R=\{(r,\theta )|0\le r\le 1,0\le \theta \le 2\pi \}.$
Using the conversion $x=r\;\text{cos}\;\theta ,y=r\;\text{sin}\;\theta ,$ and $dA=r\;dr\;d\theta ,$ we have

$\begin{array}{rl}{\displaystyle \iint\limits_{R}(1-{x}^{2}-{y}^{2})}dA & ={\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{1} (1-{r}^{2})r\;dr\;d\theta}}={\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{1} (r-{r}^{3})dr\;d\theta}} \\ & ={\displaystyle \int_{0}^{2\pi} {[\frac{{r}^{2}}{2}-\frac{{r}^{4}}{4}]}_{0}^{1}}d\theta ={\displaystyle \int_{0}^{2\pi} \frac{1}{4}d\theta =\frac{\pi}{2}}.\end{array}$  {eq:fs-id1167793361154}

:::
:::

:::example {ex:fs-id1167793220378} Evaluating a Double Integral by Converting from Rectangular Coordinates

:::exercise {fs-id1167793220380} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}(x+y)dA}$ where $R=\{(x,y)|1\le {x}^{2}+{y}^{2}\le 4,x\le 0\}.$
SOLUTION:
We can see that $R$ is an annular region that can be converted to polar coordinates and described as $R=\{(r,\theta )|1\le r\le 2,\frac{\pi}{2}\le \theta \le \frac{3\pi}{2}\}$ (see the following graph).

> FIGURE {fig:CNX_Calc_Figure_15_03_004} src=../../media/CNX_Calc_Figure_15_03_004.jpg
> alt: Two semicircles are drawn in the second and third quadrants, with equations x squared + y squared = 1 and x squared + y squared = 2.
> caption: The annular region of integration $R.$

Hence, using the conversion $x=r\;\text{cos}\;\theta ,y=r\;\text{sin}\;\theta ,$ and $dA=r\;dr\;d\theta ,$ we have

$\begin{array}{rl}{\displaystyle \iint\limits_{R}(x+y)dA} & ={\displaystyle \int_{\theta =\pi \text{/}2}^{\theta =3\pi \text{/}2} \;{\displaystyle \int_{r=1}^{r=2} (r\;\text{cos}\;\theta +r\;\text{sin}\;\theta )}}r\;dr\;d\theta \\ & =({\displaystyle \int_{r=1}^{r=2} {r}^{2}}dr)({\displaystyle \int_{\pi \text{/}2}^{3\pi \text{/}2} (\text{cos}\;\theta +\text{sin}\;\theta )d\theta}) \\ & ={[\frac{{r}^{3}}{3}]}_{1}^{2}{[\text{sin}\;\theta -\text{cos}\;\theta ]|}_{\pi \text{/}2}^{3\pi \text{/}2} \\ & =-\frac{14}{3}.\end{array}$  {eq:fs-id1167794126780}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793455522} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}(4-{x}^{2}-{y}^{2})}dA$ where $R$ is the circle of radius $2$ on the $xy$-plane.
SOLUTION:
$8\pi$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::

## General Polar Regions of Integration
To evaluate the double integral of a continuous function by iterated integrals over general polar regions, we consider two types of regions, analogous to Type I and Type II as discussed for rectangular coordinates in [Double Integrals over General Regions](module:m53963). It is more common to write polar equations as $r=f(\theta )$ than $\theta =f(r),$ so we describe a general polar region as $D=\{(r,\theta )|\alpha \le \theta \le β,{h}_{1}(\theta )\le r\le {h}_{2}(\theta )\}$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_03_005} src=../../media/CNX_Calc_Figure_15_03_005.jpg
> alt: A region D is shown in polar coordinates with edges given by theta = alpha, theta = beta, r = h2(theta), and r = h1(theta).
> caption: A general polar region between $\alpha \le \theta \le β$ and ${h}_{1}(\theta )\le r\le {h}_{2}(\theta ).$

:::note [theorem] Double Integrals over General Polar Regions
If $f(r,\theta )$ is continuous on a general polar region $D$ as described above, then

$$ {\displaystyle \iint\limits_{D}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r={h}_{1}(\theta )}^{r={h}_{2}(\theta )} f(r,\theta )}}r\;dr\;d\theta $$  {eq:fs-id1167793261457}

:::

:::example {ex:fs-id1167794070176} Evaluating a Double Integral over a General Polar Region

:::exercise {fs-id1167794070178} type= 
PROBLEM:
Evaluate the integral $\iint\limits_{D}{r}^{2}\cdot sin\theta \cdot r\;dr\;d\theta$ where $D$ is the region bounded by the polar axis and the upper half of the cardioid $r=1+\text{cos}\;\theta .$
SOLUTION:
We can describe the region $D$ as $\{(r,\theta )|0\le \theta \le \pi ,0\le r\le 1+\text{cos}\;\theta \}$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_03_006} src=../../media/CNX_Calc_Figure_15_03_006.jpg
> alt: A region D is given as the top half of a cardioid with equation r = 1 + cos theta.
> caption: The region $D$ is the top half of a cardioid.

Hence, we have

$\begin{array}{ll}\iint\limits_{D}{r}^{2}\cdot sin\theta \cdot r\;dr\;d\theta & =\int_{\theta =0}^{\theta =\pi} \;\int_{r=0}^{r=1+\text{cos}\theta} {r}^{3}\cdot sin\theta \;dr\;d\theta \\ & =\frac{1}{4}\int_{\theta =0}^{\theta =\pi} {[{r}^{4}]}_{r=0}^{r=1+\text{cos}\;\theta}\text{sin}\;\theta \;d\theta \\ & =\frac{1}{4}\int_{\theta =0}^{\theta =\pi} {(1+\text{cos}\;\theta )}^{4}\text{sin}\;\theta \;d\theta \\ & =-\frac{1}{4}{[\frac{{(1+\text{cos}\;\theta )}^{5}}{5}]}_{0}^{\pi}=\frac{8}{5}.\end{array}$  {eq:fs-id1167794096791}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794123110} type= 
PROBLEM:
Evaluate the integral

$\iint\limits_{D}{r}^{2}{\text{sin}}^{2}(2\theta )r\;dr\;d\theta \;\text{where}\;D=\{(r,\theta )|-\frac{\pi}{4}\le \theta \le \frac{\pi}{4},0\le r\le 2\sqrt{\text{cos}\;2\theta}\}.$  {eq:fs-id1167793277636}

SOLUTION:
$\pi \text{/}4$
COMMENTARY: Hint
Graph the region and follow the steps in the previous example.
:::
:::

## Polar Areas and Volumes
As in rectangular coordinates, if a solid $S$ is bounded by the surface $z=f(r,\theta ),$ as well as by the surfaces $r=a,r=b,\theta =\alpha ,$ and $\theta =β,$ we can find the volume $V$ of $S$ by double integration, as

$V={\displaystyle \iint\limits_{R}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r=a}^{r=b} f(r,\theta )}}r\;dr\;d\theta .$  {eq:fs-id1167793978747}

If the base of the solid can be described as $D=\{(r,\theta )|\alpha \le \theta \le β,{h}_{1}(\theta )\le r\le {h}_{2}(\theta )\},$ then the double integral for the volume becomes

$V={\displaystyle \iint\limits_{D}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r={h}_{1}(\theta )}^{r={h}_{2}(\theta )} f(r,\theta )}}r\;dr\;d\theta .$  {eq:fs-id1167793618989}

We illustrate this idea with some examples.

:::example {ex:fs-id1167793949568} Finding a Volume Using a Double Integral

:::exercise {fs-id1167793949570} type= 
PROBLEM:
Find the volume of the solid that lies under the paraboloid $z=1-{x}^{2}-{y}^{2}$ and above the unit circle on the $xy$-plane (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_03_007} src=../../media/CNX_Calc_Figure_15_03_007.jpg
> alt: The paraboloid z = 1 minus x squared minus y squared is shown, which in this graph looks like a sheet with the middle gently puffed up and the corners anchored.
> caption: The paraboloid $z=1-{x}^{2}-{y}^{2}$.

SOLUTION:
By the method of double integration, we can see that the volume is the iterated integral of the form ${\displaystyle \iint\limits_{R}(1-{x}^{2}-{y}^{2})}dA$ where $R=\{(r,\theta )|0\le r\le 1,0\le \theta \le 2\pi \}.$
This integration was shown before in [ref:fs-id1167794159521], so the volume is $\frac{\pi}{2}$ cubic units.
:::
:::

:::example {ex:fs-id1167794005621} Finding a Volume Using Double Integration

:::exercise {fs-id1167794005623} type= 
PROBLEM:
Find the volume of the solid that lies under the paraboloid $z=4-{x}^{2}-{y}^{2}$ and above the disk ${(x-1)}^{2}+{y}^{2}=1$ on the $xy$-plane. See the paraboloid in [ref:CNX_Calc_Figure_15_03_008] intersecting the cylinder ${(x-1)}^{2}+{y}^{2}=1$ above the $xy$-plane.

> FIGURE {fig:CNX_Calc_Figure_15_03_008} src=../../media/CNX_Calc_Figure_15_03_008.jpg
> alt: A paraboloid with equation z = 4 minus x squared minus y squared is intersected by a cylinder with equation (x minus 1) squared + y squared = 1.
> caption: Finding the volume of a solid with a paraboloid cap and a circular base.

SOLUTION:
First change the disk ${(x-1)}^{2}+{y}^{2}=1$ to polar coordinates. Expanding the square term, we have ${x}^{2}-2x+1+{y}^{2}=1.$ Then simplify to get ${x}^{2}+{y}^{2}=2x,$ which in polar coordinates becomes ${r}^{2}=2r\;\text{cos}\;\theta$ and then either $r=0$ or $r=2\;\text{cos}\;\theta .$ Similarly, the equation of the paraboloid changes to $z=4-{r}^{2}.$ Therefore we can describe the disk ${(x-1)}^{2}+{y}^{2}=1$ on the $xy$-plane as the region

$D=\{(r,\theta )|0\le \theta \le \pi ,0\le r\le 2\;\text{cos}\;\theta \}.$  {eq:fs-id1167793378578}

Hence the volume of the solid below the paraboloid $z=4-{x}^{2}-{y}^{2}$ and above $r=2\;\text{cos}\;\theta$ is

$\begin{array}{ll}V & =\iint\limits_{D}f(r,\theta )r\;dr\;d\theta =\int_{\theta =-\frac{\pi}{2}}^{\theta =\frac{\pi}{2}} \;\int_{r=0}^{r=2\;\text{cos}\;\theta} (4-{r}^{2})r\;dr\;d\theta \\ & =\int_{\theta =-\frac{\pi}{2}}^{\theta =\frac{\pi}{2}} [4\frac{{r}^{2}}{2}-{\frac{{r}^{4}}{4}|}_{0}^{2\;\text{cos}\;\theta}]d\theta \\ & =\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} [8\;{\text{cos}}^{2}\theta -4\;{\text{cos}}^{4}\theta ]d\theta ={[\frac{5}{2}\theta +\frac{5}{2}\text{sin}\;\text{2}\theta -\frac{1}{8}\text{sin}\;\text{4}\theta ]}_{-\frac{\pi}{2}}^{\frac{\pi}{2}}=\frac{5}{2}\pi .\end{array}$  {eq:fs-id1167793444471}

:::
:::
Notice in the next example that integration is not always easy with polar coordinates. Complexity of integration depends on the function and also on the region over which we need to perform the integration. If the region has a more natural expression in polar coordinates or if $f$ has a simpler antiderivative in polar coordinates, then the change in polar coordinates is appropriate; otherwise, use rectangular coordinates.

:::example {ex:fs-id1167793630681} Finding a Volume Using a Double Integral

:::exercise {fs-id1167793630683} type= 
PROBLEM:
Find the volume of the region that lies under the paraboloid $z={x}^{2}+{y}^{2}$ and above the triangle enclosed by the lines $y=x,x=0,$ and $x+y=2$ in the $xy$-plane ([ref:CNX_Calc_Figure_15_03_009]).
SOLUTION:
First examine the region over which we need to set up the double integral and the accompanying paraboloid.

> FIGURE {fig:CNX_Calc_Figure_15_03_009} src=../../media/CNX_Calc_Figure_15_03_009.jpg
> alt: This figure consists of three figures. The first is simply a paraboloid that opens up. The second shows the region D bounded by x = 0, y = x, and x + y = 2 with a vertical double-sided arrow within the region. The second shows the same region but in polar coordinates, so the lines bounding D are theta = pi/2, r = 2/(cos theta + sin theta), and theta = pi/4, with a double-sided arrow that has one side pointed at the origin.
> caption: Finding the volume of a solid under a paraboloid and above a given triangle.

The region $D$ is $\{(x,y)|0\le x\le 1,x\le y\le 2-x\}.$ Converting the lines $y=x,x=0,$ and $x+y=2$ in the $xy$-plane to functions of $r$ and $\theta ,$ we have $\theta =\pi \text{/}4,$ $\theta =\pi \text{/}2,$ and $r=2\text{/}(\text{cos}\;\theta +\text{sin}\;\theta ),$ respectively. Graphing the region on the $xy$-plane, we see that it looks like $D=\{(r,\theta )|\pi \text{/}4\le \theta \le \pi \text{/}2,0\le r\le 2\text{/}(\text{cos}\;\theta +\text{sin}\;\theta )\}.$ Now converting the equation of the surface gives $z={x}^{2}+{y}^{2}={r}^{2}.$ Therefore, the volume of the solid is given by the double integral

$\begin{array}{rl}V & ={\displaystyle \iint\limits_{D}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\pi \text{/}4}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{r=0}^{r=2\text{/}(\text{cos}\;\theta +\text{sin}\;\theta )} {r}^{2}r\;dr\;d\theta}}={{\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}2} [\frac{{r}^{4}}{4}]}}_{0}^{2\text{/}(\text{cos}\;\theta +\text{sin}\;\theta )}d\theta \\ & =\frac{1}{4}{{\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}2} (\frac{2}{\text{cos}\;\theta +\text{sin}\;\theta})}}^{4}d\theta =\frac{16}{4}{{\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}2} (\frac{1}{\text{cos}\;\theta +\text{sin}\;\theta})}}^{4}d\theta =4{{\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}2} (\frac{1}{\text{cos}\;\theta +\text{sin}\;\theta})}}^{4}d\theta .\end{array}$  {eq:fs-id1167794137043}

As you can see, this integral is very complicated. So, we can instead evaluate this double integral in rectangular coordinates as

$V={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{x}^{2-x} ({x}^{2}+{y}^{2})}}dy\;dx.$  {eq:fs-id1167794137729}

Evaluating gives

$\begin{array}{rl}V & ={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{x}^{2-x} ({x}^{2}+{y}^{2})}}dy\;dx={{\displaystyle \int_{0}^{1} [{x}^{2}y+\frac{{y}^{3}}{3}]|}}_{x}^{2-x}dx \\ & ={\displaystyle \int_{0}^{1} \frac{8}{3}-4x+4{x}^{2}-\frac{8{x}^{3}}{3}}dx \\ & ={[\frac{8x}{3}-2{x}^{2}+\frac{4{x}^{3}}{3}-\frac{2{x}^{4}}{3}]|}_{0}^{1}=\frac{4}{3}.\end{array}$  {eq:fs-id1167793691577}

:::
:::
To answer the question of how the formulas for the volumes of different standard solids such as a sphere, a cone, or a cylinder are found, we want to demonstrate an example and find the volume of an arbitrary cone.

:::example {ex:fs-id1167793268107} Finding a Volume Using a Double Integral

:::exercise {fs-id1167793268109} type= 
PROBLEM:
Use polar coordinates to find the volume inside the cone $z=2-\sqrt{{x}^{2}+{y}^{2}}$ and above the $xy\text{-plane}\text{.}$
SOLUTION:
The region $D$ for the integration is the base of the cone, which appears to be a circle on the $xy\text{-plane}$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_03_010} src=../../media/CNX_Calc_Figure_15_03_010.jpg
> alt: A cone given by z = 2 minus the square root of (x squared plus y squared) and a circle given by x squared plus y squared = 4. The cone is above the circle in xyz space.
> caption: Finding the volume of a solid inside the cone and above the $xy$-plane.

We find an equation of the circle by setting $z=0\text{:}$

$\begin{array}{rll}0 & = & 2-\sqrt{{x}^{2}+{y}^{2}} \\ 2 & = & \sqrt{{x}^{2}+{y}^{2}} \\ {x}^{2}+{y}^{2} & = & 4.\end{array}$  {eq:fs-id1167793409850}

This means the radius of the circle is $2,$ so for the integration we have $0\le \theta \le 2\pi$ and $0\le r\le 2.$ Substituting $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta$ in the equation $z=2-\sqrt{{x}^{2}+{y}^{2}}$ we have $z=2-r.$ Therefore, the volume of the cone is
${\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=2} (2-r)}}r\;dr\;d\theta =2\pi \frac{4}{3}=\frac{8\pi}{3}$ cubic units.
COMMENTARY: Analysis
Note that if we were to find the volume of an arbitrary cone with radius $a$ units and height $h$ units, then the equation of the cone would be $z=h-\frac{h}{a}\sqrt{{x}^{2}+{y}^{2}}.$
We can still use [ref:CNX_Calc_Figure_15_03_010] and set up the integral as ${\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=a} (h-\frac{h}{a}r)}}r\;dr\;d\theta .$
Evaluating the integral, we get $\frac{1}{3}\pi {a}^{2}h.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793873034} type= 
PROBLEM:
Use polar coordinates to find an iterated integral for finding the volume of the solid enclosed by the paraboloids $z={x}^{2}+{y}^{2}$ and $z=16-{x}^{2}-{y}^{2}.$
SOLUTION:
$V={\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{2\sqrt{2}} (16-2{r}^{2})}}r\;dr\;d\theta =64\pi$ cubic units
COMMENTARY: Hint
Sketching the graphs can help.
:::
:::
As with rectangular coordinates, we can also use polar coordinates to find areas of certain regions using a double integral. As before, we need to understand the region whose area we want to compute. Sketching a graph and identifying the region can be helpful to realize the limits of integration. Generally, the area formula in double integration will look like

$\text{Area}\;A={\displaystyle \int_{\alpha}^{β} \;{\displaystyle \int_{{h}_{1}(\theta )}^{{h}_{2}(\theta )} 1r\;dr\;d\theta}}.$  {eq:fs-id1167793605542}

:::example {ex:fs-id1167793279438} Finding an Area Using a Double Integral in Polar Coordinates

:::exercise {fs-id1167793293441} type= 
PROBLEM:
Evaluate the area bounded by the curve $r=\text{cos}\;4\theta .$
SOLUTION:
Sketching the graph of the function $r=\text{cos}\;4\theta$ reveals that it is a polar rose with eight petals (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_15_03_011} src=../../media/CNX_Calc_Figure_15_03_011.jpg
> alt: A rose with eight petals given by r = cos (4 theta).
> caption: Finding the area of a polar rose with eight petals.

Using {index:symmetry}, we can see that we need to find the area of one petal and then multiply it by $8.$ Notice that the values of $\theta$ for which the graph passes through the origin are the zeros of the function $\text{cos}\;4\theta ,$ and these are odd multiples of $\pi \text{/}8.$ Thus, one of the petals corresponds to the values of $\theta$ in the interval $[\text{−}\pi \text{/}8,\pi \text{/}8].$ Therefore, the area bounded by the curve $r=\text{cos}\;4\theta$ is

$\begin{array}{rl}A & =8{\displaystyle \int_{\theta =\text{−}\pi \text{/}8}^{\theta =\pi \text{/}8} \;{\displaystyle \int_{r=0}^{r=\text{cos}\;4\theta} 1r\;dr\;d\theta}} \\ & =8{\displaystyle \int_{\text{−}\pi \text{/}8}^{\pi \text{/}8} [\frac{1}{2}{{r}^{2}|}_{0}^{\text{cos}\;4\theta}]}d\theta =8{\displaystyle \int_{\text{−}\pi \text{/}8}^{\pi \text{/}8} \frac{1}{2}{\text{cos}}^{2}4\theta}\;d\theta =8[\frac{1}{4}\theta +{\frac{1}{16}\text{sin}\;4\theta \;\text{cos}\;4\theta |}_{\text{−}\pi \text{/}8}^{\pi \text{/}8}]=8[\frac{\pi}{16}]=\frac{\pi}{2}.\end{array}$  {eq:fs-id1167793414893}

:::
:::

:::example {ex:fs-id1167793421964} Finding Area Between Two Polar Curves

:::exercise {fs-id1167793421966} type= 
PROBLEM:
Find the area enclosed by the circle $r=3\;\text{cos}\;\theta$ and the cardioid $r=1+\text{cos}\;\theta .$
SOLUTION:
First and foremost, sketch the graphs of the region ([ref:CNX_Calc_Figure_15_03_012]).

> FIGURE {fig:CNX_Calc_Figure_15_03_012} src=../../media/CNX_Calc_Figure_15_03_012.jpg
> alt: A cardioid with equation 1 + cos theta is shown overlapping a circle given by r = 3 cos theta, which is a circle of radius 3 with center (1.5, 0). The area bounded by the x axis, the cardioid, and the dashed line connecting the origin to the intersection of the cardioid and circle on the r = 2 line is shaded.
> caption: Finding the area enclosed by both a circle and a cardioid.

We can from see the symmetry of the graph that we need to find the points of intersection. Setting the two equations equal to each other gives

$3\;\text{cos}\;\theta =1+\text{cos}\;\theta .$  {eq:fs-id1167793589747}

One of the points of intersection is $\theta =\pi \text{/}3.$ The area above the polar axis consists of two parts, with one part defined by the cardioid from $\theta =0$ to $\theta =\pi \text{/}3$ and the other part defined by the circle from $\theta =\pi \text{/}3$ to $\theta =\pi \text{/}2.$ By symmetry, the total area is twice the area above the polar axis. Thus, we have

$A=2[{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}3} \;{\displaystyle \int_{r=0}^{r=1+\text{cos}\;\theta} 1r\;dr\;d\theta +{\displaystyle \int_{\theta =\pi \text{/}3}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{r=0}^{r=3\;\text{cos}\;\theta} 1r\;dr\;d\theta}}}}].$  {eq:fs-id1167793951481}

Evaluating each piece separately, we find that the area is

$A=2(\frac{1}{4}\pi +\frac{9}{16}\sqrt{3}+\frac{3}{8}\pi -\frac{9}{16}\sqrt{3})=2(\frac{5}{8}\pi )=\frac{5}{4}\pi \;\text{square units}\text{.}$  {eq:fs-id1167793293908}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793360845} type= 
PROBLEM:
Find the area enclosed inside the cardioid $r=3-3\;\text{sin}\;\theta$ and outside the cardioid $r=1+\text{sin}\;\theta .$
SOLUTION:
$A=2{\displaystyle \int_{\text{−}\pi \text{/}2}^{\pi \text{/}6} \;{\displaystyle \int_{1+\text{sin}\;\theta}^{3-3\;\text{sin}\;\theta} r\;dr\;d\theta}}=8\pi +9\sqrt{3}$
COMMENTARY: Hint
Sketch the graph, and solve for the points of intersection.
:::
:::

:::example {ex:fs-id1167794177116} Evaluating an Improper Double Integral in Polar Coordinates

:::exercise {fs-id1167794177118} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{{\mathbb{R}}^{2}}{e}^{−10({x}^{2}+{y}^{2})}}dx\;dy.$
SOLUTION:
This is an improper integral because we are integrating over an unbounded region ${\mathbb{R}}^{2}.$ In polar coordinates, the entire plane ${\mathbb{R}}^{2}$ can be seen as $0\le \theta \le 2\pi ,$ $0\le r<\infty .$
Using the changes of variables from rectangular coordinates to polar coordinates, we have

$\begin{array}{rl}{\displaystyle \iint\limits_{{\mathbb{R}}^{2}}{e}^{−10({x}^{2}+{y}^{2})}}dx\;dy & ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=\infty} {e}^{−10{r}^{2}}r\;dr\;d\theta}}={\displaystyle \int_{\theta =0}^{\theta =2\pi} (\lim_{a\to \infty}{\displaystyle \int_{r=0}^{r=a} {e}^{−10{r}^{2}}r\;dr})}d\theta \\ & =({\displaystyle \int_{\theta =0}^{\theta =2\pi} d\theta})(\lim_{a\to \infty}{\displaystyle \int_{r=0}^{r=a} {e}^{−10{r}^{2}}r\;dr}) \\ & =2\pi (\lim_{a\to \infty}{\displaystyle \int_{r=0}^{r=a} {e}^{−10{r}^{2}}r\;dr}) \\ & =2\pi \lim_{a\to \infty}(-\frac{1}{20})({{e}^{−10{r}^{2}}|}_{0}^{a}) \\ & =2\pi (-\frac{1}{20})\lim_{a\to \infty}({e}^{−10{a}^{2}}-1) \\ & =\frac{\pi}{10}.\end{array}$  {eq:fs-id1167793387199}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793298805} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{{\mathbb{R}}^{2}}{e}^{−4({x}^{2}+{y}^{2})}dx\;dy}.$
SOLUTION:
$\frac{\pi}{4}$
COMMENTARY: Hint
Convert to the polar coordinate system.
:::
:::

## Key Concepts {section:key-concepts}
- To apply a double integral to a situation with circular symmetry, it is often convenient to use a double integral in polar coordinates. We can apply these double integrals over a polar rectangular region or a general polar region, using an iterated integral similar to those used with rectangular double integrals.
- The area $dA$ in polar coordinates becomes $r\;dr\;d\theta .$
- Use $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ and $dA=r\;dr\;d\theta$ to convert an integral in rectangular coordinates to an integral in polar coordinates.
- Use ${r}^{2}={x}^{2}+{y}^{2}$ and $\theta ={\text{tan}}^{−1}(\frac{y}{x})$ to convert an integral in polar coordinates to an integral in rectangular coordinates, if needed.
- To find the volume in polar coordinates bounded above by a surface $z=f(r,\theta )$ over a region on the $xy$-plane, use a double integral in polar coordinates.

## Key Equations {section:key-equations}

> TABLE {tab:eip-552} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Double integral over a polar rectangular region $R$** | ${\displaystyle \iint\limits_{R}f(r,\theta )}dA=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}*,{\theta}_{ij}*)}}\Delta A=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({r}_{ij}*,{\theta}_{ij}*)}}{r}_{ij}*\Delta r\Delta \theta$ |
| **Double integral over a general polar region** | ${\displaystyle \iint\limits_{D}f(r,\theta )}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r={h}_{1}(\theta )}^{r={h}_{2}(\theta )} f(r,\theta )}}r\;dr\;d\theta$ |

##  {section:section-exercises}
In the following exercises, express the region $D$ in polar coordinates.

:::exercise {fs-id1167794201507} type= 
PROBLEM:
$D$ is the region of the disk of radius $2$ centered at the origin that lies in the first quadrant.
:::

:::exercise {fs-id1167793928275} type= 
PROBLEM:
$D$ is the region between the circles of radius $4$ and radius $5$ centered at the origin that lies in the second quadrant.
SOLUTION:
$D=\{(r,\theta )|4\le r\le 5,\frac{\pi}{2}\le \theta \le \pi \}$
:::

:::exercise {fs-id1167793886701} type= 
PROBLEM:
$D$ is the region bounded by the $y$-axis and $x=\sqrt{1-{y}^{2}}.$
:::

:::exercise {fs-id1167794326929} type= 
PROBLEM:
$D$ is the region bounded by the $x$-axis and $y=\sqrt{2-{x}^{2}}.$
SOLUTION:
$D=\{(r,\theta )|0\le r\le \sqrt{2},0\le \theta \le \pi \}$
:::

:::exercise {fs-id1167793570124} type= 
PROBLEM:
$D=\{(x,y)|{x}^{2}+{y}^{2}\le 4x\}$
:::

:::exercise {fs-id1167793593015} type= 
PROBLEM:
$D=\{(x,y)|{x}^{2}+{y}^{2}\le 4y\}$
SOLUTION:
$D=\{(r,\theta )|0\le r\le 4\;\text{sin}\;\theta ,0\le \theta \le \pi \}$
:::
In the following exercises, the graph of the polar rectangular region $D$ is given. Express $D$ in polar coordinates.

:::exercise {fs-id1167793720298} type= 
PROBLEM:

> IMAGE {img:fs-id1167793720303} src=../../media/CNX_Calc_Figure_15_03_201.jpg
> alt: Half an annulus D is drawn in the first and second quadrants with inner radius 3 and outer radius 5.

:::

:::exercise {fs-id1167793500491} type= 
PROBLEM:

> IMAGE {img:fs-id1167793500496} src=../../media/CNX_Calc_Figure_15_03_202.jpg
> alt: A sector of an annulus D is drawn between theta = pi/4 and theta = pi/2 with inner radius 3 and outer radius 5.

SOLUTION:
$D=\{(r,\theta )|3\le r\le 5,\frac{\pi}{4}\le \theta \le \frac{\pi}{2}\}$
:::

:::exercise {fs-id1167793618051} type= 
PROBLEM:

> IMAGE {img:fs-id1167793618055} src=../../media/CNX_Calc_Figure_15_03_203.jpg
> alt: Half of an annulus D is drawn between theta = pi/4 and theta = 5 pi/4 with inner radius 3 and outer radius 5.

:::

:::exercise {fs-id1167793941446} type= 
PROBLEM:

> IMAGE {img:fs-id1167793941450} src=../../media/CNX_Calc_Figure_15_03_204.jpg
> alt:  A sector of an annulus D is drawn between theta = 3 pi/4 and theta = 5 pi/4 with inner radius 3 and outer radius 5.

SOLUTION:
$D=\{(r,\theta )|3\le r\le 5,\frac{3\pi}{4}\le \theta \le \frac{5\pi}{4}\}$
:::

:::exercise {fs-id1167793442631} type= 
PROBLEM:
In the following graph, the region $D$ is situated below $y=x$ and is bounded by $x=1,x=5,$ and $y=0.$

> IMAGE {img:fs-id1167793586318} src=../../media/CNX_Calc_Figure_15_03_205.jpg
> alt: A region D is given that is bounded by y = 0, x = 1, x = 5, and y = x, that is, a right triangle with a corner cut off.

:::

:::exercise {fs-id1167793219219} type= 
PROBLEM:
In the following graph, the region $D$ is bounded by $y=x$ and $y={x}^{2}.$

> IMAGE {img:fs-id1167793540293} src=../../media/CNX_Calc_Figure_15_03_206.jpg
> alt: A region D is drawn between y = x and y = x squared, which looks like a deformed lens, with the bulbous part below the straight part.

SOLUTION:
$D=\{(r,\theta )|0\le r\le \text{tan}\;\theta \;\text{sec}\;\theta ,0\le \theta \le \frac{\pi}{4}\}$
:::
In the following exercises, evaluate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA}$ over the polar rectangular region $D.$

:::exercise {fs-id1167794213157} type= 
PROBLEM:
$f(x,y)={x}^{2}+{y}^{2},D=\{(r,\theta )|3\le r\le 5,0\le \theta \le 2\pi \}$
:::

:::exercise {fs-id1167793957304} type= 
PROBLEM:
$f(x,y)=x+y,\; \;D=\{(r,\theta )|3\le r\le 5,0\le \theta \le 2\pi \}$
SOLUTION:
$0$
:::

:::exercise {fs-id1167793642105} type= 
PROBLEM:
$f(x,y)={x}^{2}+xy,D=\{(r,\theta )|1\le r\le 2,\pi \le \theta \le 2\pi \}$
:::

:::exercise {fs-id1167793237777} type= 
PROBLEM:
$f(x,y)={x}^{4}+{y}^{4},D=\{(r,\theta )|1\le r\le 2,\frac{3\pi}{2}\le \theta \le 2\pi \}$
SOLUTION:
$\frac{63\pi}{16}$
:::

:::exercise {fs-id1167793925858} type= 
PROBLEM:
$f(x,y)=\sqrt[3]{{x}^{2}+{y}^{2}},$ where $D=\{(r,\theta )|0\le r\le 1,\frac{\pi}{2}\le \theta \le \pi \}.$
:::

:::exercise {fs-id1167793452803} type= 
PROBLEM:
$f(x,y)={x}^{4}+2{x}^{2}{y}^{2}+{y}^{4},$ where $D=\{(r,\theta )|3\le r\le 4,\frac{\pi}{3}\le \theta \le \frac{2\pi}{3}\}.$
SOLUTION:
$\frac{3367\pi}{18}$
:::

:::exercise {fs-id1167793556982} type= 
PROBLEM:
$f(x,y)=\text{sin}(\text{arctan}\;\frac{y}{x}),$ where $D=\{(r,\theta )|1\le r\le 2,\frac{\pi}{6}\le \theta \le \frac{\pi}{3}\}$
:::

:::exercise {fs-id1167793510332} type= 
PROBLEM:
$f(x,y)=\text{arctan}(\frac{y}{x}),$ where $D=\{(r,\theta )|2\le r\le 3,\frac{\pi}{4}\le \theta \le \frac{\pi}{3}\}$
SOLUTION:
$\frac{35{\pi}^{2}}{576}$
:::

:::exercise {fs-id1167793371375} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}{e}^{{x}^{2}+{y}^{2}}[1+2\;\text{arctan}(\frac{y}{x})]}dA\text{,}\;D=\{(r,\theta )|1\le r\le 2,\frac{\pi}{6}\le \theta \le \frac{\pi}{3}\}$
:::

:::exercise {fs-id1167793927747} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}({e}^{{x}^{2}+{y}^{2}}+{x}^{4}+2{x}^{2}{y}^{2}+{y}^{4})}\text{arctan}(\frac{y}{x})dA\text{,}\;D=\{(r,\theta )|1\le r\le 2,\frac{\pi}{4}\le \theta \le \frac{\pi}{3}\}$
SOLUTION:
$\frac{7{\pi}^{2}}{576}(21-{e}^{2}+{e}^{4})$
:::
In the following exercises, the integrals have been converted to polar coordinates. Verify that the identities are true and choose the easiest way to evaluate the integrals, in rectangular or polar coordinates.

:::exercise {fs-id1167793929408} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{0}^{x} ({x}^{2}+{y}^{2})}}dy\;dx={\displaystyle \int_{0}^{\frac{\pi}{4}} \;{\displaystyle \int_{\text{sec}\;\theta}^{2\;\text{sec}\;\theta} {r}^{3}dr\;d\theta}}$
:::

:::exercise {fs-id1167794291656} type= 
PROBLEM:
${\displaystyle \int_{2}^{3} \;{\displaystyle \int_{0}^{x} \frac{x}{\sqrt{{x}^{2}+{y}^{2}}}dy\;dx}}={\displaystyle \int_{0}^{\pi \text{/}4} \;{\displaystyle \int_{2\;\text{sec}\;\theta}^{3\text{sec}\;\theta} r\;\text{cos}\;\theta \;dr\;d\theta}}$
SOLUTION:
$\frac{5}{2}\text{ln}(1+\sqrt{2})$
:::

:::exercise {fs-id1167794223123} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{{x}^{2}}^{x} \frac{1}{\sqrt{{x}^{2}+{y}^{2}}}dy\;dx}}={\displaystyle \int_{0}^{\pi \text{/}4} \;{\displaystyle \int_{0}^{\text{tan}\;\theta \;\text{sec}\;\theta} dr\;d\theta}}$
:::

:::exercise {fs-id1167793485223} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{{x}^{2}}^{x} \frac{y}{\sqrt{{x}^{2}+{y}^{2}}}dy\;dx}}={\displaystyle \int_{0}^{\pi \text{/}4} \;{\displaystyle \int_{0}^{\text{tan}\;\theta \;\text{sec}\;\theta} r\;\text{sin}\;\theta \;dr\;d\theta}}$
SOLUTION:
$\frac{1}{6}(2-\sqrt{2})$
:::
In the following exercises, convert the integrals to polar coordinates and evaluate them.

:::exercise {fs-id1167793473183} type= 
PROBLEM:
${\displaystyle \int_{0}^{3} \;{\displaystyle \int_{0}^{\sqrt{9-{y}^{2}}} ({x}^{2}+{y}^{2})dx\;dy}}$
:::

:::exercise {fs-id1167793638832} type= 
PROBLEM:
${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{\text{−}\sqrt{4-{y}^{2}}}^{\sqrt{4-{y}^{2}}} {({x}^{2}+{y}^{2})}^{2}dx\;dy}}$
SOLUTION:
${\displaystyle \int_{0}^{\pi} \;{\displaystyle \int_{0}^{2} {r}^{5}dr\;d\theta}}=\frac{32\pi}{3}$
:::

:::exercise {fs-id1167793447614} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{\sqrt{1-{x}^{2}}} (x+y)dy\;dx}}$
:::

:::exercise {fs-id1167793355704} type= 
PROBLEM:
${\displaystyle \int_{0}^{4} \;{\displaystyle \int_{\text{−}\sqrt{16-{x}^{2}}}^{\sqrt{16-{x}^{2}}} \text{sin}({x}^{2}+{y}^{2})dy\;dx}}$
SOLUTION:
${\displaystyle \int_{\text{−}\pi \text{/}2}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{4} r\;\text{sin}({r}^{2})dr\;d\theta}}=\pi \;{\text{sin}}^{2}8$
:::

:::exercise {fs-id1167793473234} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{D}r\;dA}$ where $D$ is the region bounded by the polar axis and the upper half of the cardioid $r=1+\text{cos}\;\theta .$
:::

:::exercise {fs-id1167793568606} type= 
PROBLEM:
Find the area of the region $D$ bounded by the polar axis and the upper half of the cardioid $r=1+\text{cos}\;\theta .$
SOLUTION:
$\frac{3\pi}{4}$
:::

:::exercise {fs-id1167793711055} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{D}\;dA},$ where $D$ is the region bounded by the part of the four-leaved rose $r=\text{sin}\;2\theta$ situated in the first quadrant (see the following figure).

> IMAGE {img:fs-id1167793630633} src=../../media/CNX_Calc_Figure_15_03_207.jpg
> alt: A region D is drawn in the first quadrant petal of the four petal rose given by r = sin (2 theta).

:::

:::exercise {fs-id1167793630659} type= 
PROBLEM:
Find the total area of the region enclosed by the four-leaved rose $r=\text{sin}\;2\theta$ (see the figure in the previous exercise).
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1167793929892} type= 
PROBLEM:
Find the area of the region $D,$ which is the region bounded by $y=\sqrt{4-{x}^{2}},$ $x=\sqrt{3},$ $x=2,$ and $y=0.$
:::

:::exercise {fs-id1167793991244} type= 
PROBLEM:
Find the area of the region $D,$ which is the region inside the disk ${x}^{2}+{y}^{2}\le 4$ and to the right of the line $x=1.$
SOLUTION:
$\frac{1}{3}(4\pi -3\sqrt{3})$
:::

:::exercise {fs-id1167793633950} type= 
PROBLEM:
Determine the average value of the function $f(x,y)={x}^{2}+{y}^{2}$ over the region $D$ bounded by the polar curve $r=\text{cos}\;2\theta ,$ where $-\frac{\pi}{4}\le \theta \le \frac{\pi}{4}$ (see the following graph).

> IMAGE {img:fs-id1167791545028} src=../../media/CNX_Calc_Figure_15_03_208.jpg
> alt: The first/fourth-quadrant petal of the four-petal rose given by r = cos (2 theta) is shown.

:::

:::exercise {fs-id1167791545055} type= 
PROBLEM:
Determine the average value of the function $f(x,y)=\sqrt{{x}^{2}+{y}^{2}}$ over the region $D$ bounded by the polar curve $r=3\;\text{sin}\;2\theta ,$ where $0\le \theta \le \frac{\pi}{2}$ (see the following graph).

> IMAGE {img:fs-id1167793451034} src=../../media/CNX_Calc_Figure_15_03_209.jpg
> alt: The first-quadrant petal of the four-petal rose given by r = 3sin (2 theta) is shown.

SOLUTION:
$\frac{16}{3\pi}$
:::

:::exercise {fs-id1167793451065} type= 
PROBLEM:
Find the volume of the solid situated in the first octant and bounded by the paraboloid $z=1-4{x}^{2}-4{y}^{2}$ and the planes $x=0,y=0,$ and $z=0.$
:::

:::exercise {fs-id1167794058751} type= 
PROBLEM:
Find the volume of the solid bounded by the paraboloid $z=2-9{x}^{2}-9{y}^{2}$ and the plane $z=1.$
SOLUTION:
$\frac{\pi}{18}$
:::

:::exercise {fs-id1167793941257} type= 
PROBLEM:
a. Find the volume of the solid ${S}_{1}$ bounded by the cylinder ${x}^{2}+{y}^{2}=1$ and the planes $z=0$ and $z=1.$
b. Find the volume of the solid ${S}_{2}$ outside the double cone ${z}^{2}={x}^{2}+{y}^{2},$ inside the cylinder ${x}^{2}+{y}^{2}=1,$ and above the plane $z=0.$
c. Find the volume of the solid inside the cone ${z}^{2}={x}^{2}+{y}^{2}$ and below the plane $z=1$ by subtracting the volumes of the solids ${S}_{1}$ and ${S}_{2}.$
:::

:::exercise {fs-id1167793941347} type= 
PROBLEM:
a. Find the volume of the solid ${S}_{1}$ inside the unit sphere ${x}^{2}+{y}^{2}+{z}^{2}=1$ and above the plane $z=0.$
b. Find the volume of the solid ${S}_{2}$ inside the double cone ${(z-1)}^{2}={x}^{2}+{y}^{2}$ and above the plane $z=0.$
c. Find the volume of the solid outside the double cone ${(z-1)}^{2}={x}^{2}+{y}^{2}$ and inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=1.$
SOLUTION:
a. $\frac{2\pi}{3};$ b. $\frac{\pi}{3};$ c. $\frac{\pi}{3}$
:::
For the following two exercises, consider a spherical ring, which is a sphere with a cylindrical hole cut so that the axis of the cylinder passes through the center of the sphere (see the following figure).

> IMAGE {img:fs-id1167793556421} src=../../media/CNX_Calc_Figure_15_03_210.jpg
> alt: A spherical ring is shown, that is, a sphere with a cylindrical hole going all the way through it.

:::exercise {fs-id1167793556433} type= 
PROBLEM:
If the sphere has radius $4$ and the cylinder has radius $2,$ find the volume of the spherical ring.
:::

:::exercise {fs-id1167794172453} type= 
PROBLEM:
A cylindrical hole of diameter $6$ cm is bored through a sphere of radius $5$ cm such that the axis of the cylinder passes through the center of the sphere. Find the volume of the resulting spherical ring.
SOLUTION:
$\frac{256\pi}{3}\;{\text{cm}}^{3}$
:::

:::exercise {fs-id1167794172497} type= 
PROBLEM:
Find the volume of the solid that lies under the double cone ${z}^{2}=4{x}^{2}+4{y}^{2},$ inside the cylinder ${x}^{2}+{y}^{2}=x,$ and above the plane $z=0.$
:::

:::exercise {fs-id1167793566794} type= 
PROBLEM:
Find the volume of the solid that lies under the paraboloid $z={x}^{2}+{y}^{2},$ inside the cylinder ${x}^{2}+{y}^{2}=x,$ and above the plane $z=0.$
SOLUTION:
$\frac{3\pi}{32}$
:::

:::exercise {fs-id1167793618934} type= 
PROBLEM:
Find the volume of the solid that lies under the plane $x+y+z=10$ and above the disk ${x}^{2}+{y}^{2}=4x.$
:::

:::exercise {fs-id1167793581654} type= 
PROBLEM:
Find the volume of the solid that lies under the plane $2x+y+2z=8$ and above the unit disk ${x}^{2}+{y}^{2}=1.$
SOLUTION:
$4\pi$
:::

:::exercise {fs-id1167793590463} type= 
PROBLEM:
A radial function $f$ is a function whose value at each point depends only on the distance between that point and the origin of the system of coordinates; that is, $f(x,y)=g(r),$ where $r=\sqrt{{x}^{2}+{y}^{2}}.$ Show that if $f$ is a continuous radial function, then ${\displaystyle \iint\limits_{D}f(x,y)}dA=({\theta}_{2}-{\theta}_{1})[G({R}_{2})-G({R}_{1})],$ where $G'(r)=rg(r)$ and $(x,y)\in D=\{(r,\theta )|{R}_{1}\le r\le {R}_{2},{\theta}_{1}\le \theta \le {\theta}_{2}\},$ with $0\le {R}_{1}<{R}_{2}$ and $0\le {\theta}_{1}<{\theta}_{2}\le 2\pi .$
:::

:::exercise {fs-id1167793928558} type= 
PROBLEM:
Use the information from the preceding exercise to calculate the integral ${\displaystyle \iint\limits_{D}{({x}^{2}+{y}^{2})}^{3}}dA,$ where $D$ is the unit disk.
SOLUTION:
$\frac{\pi}{4}$
:::

:::exercise {fs-id1167793927490} type= 
PROBLEM:
Let $f(x,y)=\frac{F'(r)}{r}$ be a continuous radial function defined on the annular region $D=\{(r,\theta )|{R}_{1}\le r\le {R}_{2},0\le \theta \le 2\pi \},$ where $r=\sqrt{{x}^{2}+{y}^{2}},$ $0<{R}_{1}<{R}_{2},$ and $F$ is a differentiable function. Show that ${\displaystyle \iint\limits_{D}f(x,y)}dA=2\pi [F({R}_{2})-F({R}_{1})].$
:::

:::exercise {fs-id1167793375032} type= 
PROBLEM:
Apply the preceding exercise to calculate the integral ${\displaystyle \iint\limits_{D}\frac{{e}^{\sqrt{{x}^{2}+{y}^{2}}}}{\sqrt{{x}^{2}+{y}^{2}}}}dx\;dy,$ where $D$ is the annular region between the circles of radii $1$ and $2$ situated in the third quadrant.
SOLUTION:
$\frac{1}{2}\pi e(e-1)$
:::

:::exercise {fs-id1167793618233} type= 
PROBLEM:
Let $f$ be a continuous function that can be expressed in polar coordinates as a product of a function of $r$ only and a function of $\theta$ only; that is, $f(x,y)=h(\theta ),$ where $(x,y)\in D=\{(r,\theta )|{R}_{1}\le r\le {R}_{2},{\theta}_{1}\le \theta \le {\theta}_{2}\},$ with $0\le {R}_{1}<{R}_{2}$ and $0\le {\theta}_{1}<{\theta}_{2}\le 2\pi .$ Show that ${\displaystyle \iint\limits_{D}f(x,y)}dA=\frac{1}{2}({R}_{2}^{2}-{R}_{1}^{2})[H({\theta}_{2})-H({\theta}_{1})],$ where $H$ is an antiderivative of $h.$
:::

:::exercise {fs-id1167793377858} type= 
PROBLEM:
Apply the preceding exercise to calculate the integral ${\displaystyle \iint\limits_{D}\frac{{y}^{2}}{{x}^{2}}}dA,$ where $D=\{(r,\theta )|1\le r\le 2,\frac{\pi}{6}\le \theta \le \frac{\pi}{3}\}.$
SOLUTION:
$\sqrt{3}-\frac{\pi}{4}$
:::

:::exercise {fs-id1167793298498} type= 
PROBLEM:
Let $f$ be a continuous function that can be expressed in polar coordinates as a product of a function of $r$ only and function of $\theta$ only; that is, $f(x,y)=g(r)h(\theta ),$ where $(x,y)\in D=\{(r,\theta )|{R}_{1}\le r\le {R}_{2},{\theta}_{1}\le \theta \le {\theta}_{2}\}$ with $0\le {R}_{1}<{R}_{2}$ and $0\le {\theta}_{1}<{\theta}_{2}\le 2\pi .$ Show that ${\displaystyle \iint\limits_{D}f(x,y)}dA=[G({R}_{2})-G({R}_{1})]\;[H({\theta}_{2})-H({\theta}_{1})],$ where $G(r)$ and $H(\theta )$ are antiderivatives of $rg(r)$ and $h(\theta )$, respectively.
:::

:::exercise {fs-id1167793294346} type= 
PROBLEM:
Evaluate ${\displaystyle \iint\limits_{D}\text{arctan}(\frac{y}{x})\sqrt{{x}^{2}+{y}^{2}}}dA,$ where $D=\{(r,\theta )|2\le r\le 3,\frac{\pi}{4}\le \theta \le \frac{\pi}{3}\}.$
SOLUTION:
$\frac{133{\pi}^{2}}{864}$
:::

:::exercise {fs-id1167793637676} type= class=material-set-2 
PROBLEM:
A spherical cap is the region of a sphere that lies above or below a given plane.
a. Show that the volume of the spherical cap in the figure below is $\frac{1}{6}\pi h(3{a}^{2}+{h}^{2}).$

> IMAGE {img:fs-id1167793637729} src=../../media/CNX_Calc_Figure_15_03_211.jpg
> alt: A sphere of radius R has a circle inside of it h units from the top of the sphere. This circle has radius a, which is less than R.

b. A spherical segment is the solid defined by intersecting a sphere with two parallel planes. If the distance between the planes is $h,$ show that the volume of the spherical segment in the figure below is $\frac{1}{6}\pi h(3{a}^{2}+3{b}^{2}+{h}^{2}).$

> IMAGE {img:fs-id1167793495515} src=../../media/CNX_Calc_Figure_15_03_212.jpg
> alt: A sphere has two parallel circles inside of it h units apart. The upper circle has radius b, and the lower circle has radius a. Note that a > b.

:::

:::exercise {fs-id1167793495530} type= class=material-set-2 
PROBLEM:
In statistics, the joint density for two independent, normally distributed events with a mean $μ=0$ and a standard distribution $σ$ is defined by $p(x,y)=\frac{1}{2\pi {σ}^{2}}{e}^{-\frac{{x}^{2}+{y}^{2}}{2{σ}^{2}}}.$ Consider $(X,Y),$ the Cartesian coordinates of a ball in the resting position after it was released from a position on the *z*-axis toward the $xy$-plane. Assume that the coordinates of the ball are independently normally distributed with a mean $μ=0$ and a standard deviation of $σ$ (in feet). The probability that the ball will stop no more than $a$ feet from the origin is given by $P[{X}^{2}+{Y}^{2}\le {a}^{2}]={\displaystyle \iint\limits_{D}p(x,y)dy\;dx},$ where $D$ is the disk of radius *a* centered at the origin. Show that $P[{X}^{2}+{Y}^{2}\le {a}^{2}]=1-{e}^{\text{−}{a}^{2}\text{/}2{σ}^{2}}.$
:::

:::exercise {fs-id1167793499076} type= 
PROBLEM:
The double improper integral ${\displaystyle \int_{\text{−}\infty}^{\infty} \;{\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}}dy\;dx$ may be defined as the limit value of the double integrals ${\displaystyle \iint\limits_{{D}_{a}}{e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}dA$ over disks ${D}_{a}$ of radii *a* centered at the origin, as *a* increases without bound; that is, ${\displaystyle \int_{\text{−}\infty}^{\infty} \;{\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}}dy\;dx=\lim_{a\to \infty}{\displaystyle \iint\limits_{{D}_{a}}{e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}dA.$
a. Use polar coordinates to show that ${\displaystyle \int_{\text{−}\infty}^{\infty} \;{\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}}dy\;dx=2\pi .$
b. Show that ${\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}{x}^{2}\text{/}2}}dx=\sqrt{2\pi},$ by using the relation ${\displaystyle \int_{\text{−}\infty}^{\infty} \;{\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}({x}^{2}+{y}^{2})\text{/}2}}}dy\;dx=({\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}{x}^{2}\text{/}2}dx})({\displaystyle \int_{\text{−}\infty}^{\infty} {e}^{\text{−}{y}^{2}\text{/}2}}dy).$
:::

## Glossary
- {def} **polar rectangle**: the region enclosed between the circles $r=a$ and $r=b$ and the angles $\theta =\alpha$ and $\theta =β;$ it is described as $R=\{(r,\theta )|a\le r\le b,\alpha \le \theta \le β\}$

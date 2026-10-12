# Triple Integrals in Cylindrical and Spherical Coordinates

## Learning Objectives {section:learning-objectives}
- Evaluate a triple integral by changing to cylindrical coordinates.
- Evaluate a triple integral by changing to spherical coordinates.

Earlier in this chapter we showed how to convert a double integral in rectangular coordinates into a double integral in polar coordinates in order to deal more conveniently with problems involving circular symmetry. A similar situation occurs with triple integrals, but here we need to distinguish between cylindrical symmetry and spherical symmetry. In this section we convert triple integrals in rectangular coordinates into a triple integral in either cylindrical or spherical coordinates.
Also recall the chapter opener, which showed the opera house l’Hemisphèric in Valencia, Spain. It has four sections with one of the sections being a theater in a five-story-high sphere (ball) under an oval roof as long as a football field. Inside is an IMAX screen that changes the sphere into a planetarium with a sky full of $9000$ twinkling stars. Using triple integrals in spherical coordinates, we can find the volumes of different geometric shapes like these.

## Review of Cylindrical Coordinates
As we have seen earlier, in two-dimensional space ${\mathbb{R}}^{2},$ a point with rectangular coordinates $(x,y)$ can be identified with $(r,\theta )$ in polar coordinates and vice versa, where $x=r\;\text{cos}\;\theta ,$ $y=r\;\text{sin}\;\theta ,$ ${r}^{2}={x}^{2}+{y}^{2}$ and $\text{tan}\;\theta =(\frac{y}{x})$ are the relationships between the variables.
In three-dimensional space ${\mathbb{R}}^{3},$ a point with rectangular coordinates $(x,y,z)$ can be identified with cylindrical coordinates $(r,\theta ,z)$ and vice versa. We can use these same conversion relationships, adding $z$ as the vertical distance to the point from the $xy$-plane as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_05_001} src=../../media/CNX_Calc_Figure_15_05_001.jpg
> alt: In xyz space, a point is shown (x, y, z). There is also a depiction of it in polar coordinates as (r, theta, z).
> caption: Cylindrical coordinates are similar to polar coordinates with a vertical $z$ coordinate added.

To convert from rectangular to cylindrical coordinates, we use the conversion $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta .$ To convert from cylindrical to rectangular coordinates, we use ${r}^{2}={x}^{2}+{y}^{2}$ and $\text{tan}\theta =\frac{y}{x}.$ The $z$-coordinate remains the same in both cases.
In the two-dimensional plane with a rectangular coordinate system, when we say $x=k$ (constant) we mean an unbounded vertical line parallel to the $y$-axis and when $y=l$ (constant) we mean an unbounded horizontal line parallel to the $x$-axis. With the polar coordinate system, when we say $r=c$ (constant), we mean a circle of radius $c$ units and when $\theta =\alpha$ (constant) we mean an infinite ray making an angle $\alpha$ with the positive $x$-axis.
Similarly, in three-dimensional space with rectangular coordinates $(x,y,z),$ the equations $x=k,y=l,$ and $z=m,$ where $k,l,$ and $m$ are constants, represent unbounded planes parallel to the $yz$-plane, $xz$-plane and $xy$-plane, respectively. With cylindrical coordinates $(r,\theta ,z),$ by $r=c,\theta =\alpha ,$ and $z=m,$ where $c,\alpha ,$ and $m$ are constants, we mean an unbounded vertical cylinder with the $z$-axis as its radial axis; a plane making a constant angle $\alpha$ with the $xz$-plane; and an unbounded horizontal plane parallel to the $xy$-plane, respectively. This means that the circular cylinder ${x}^{2}+{y}^{2}={c}^{2}$ in rectangular coordinates can be represented simply as $r=c$ in cylindrical coordinates. (Refer to [Cylindrical and Spherical Coordinates](module:m53875) for more review.)

## Integration in Cylindrical Coordinates
Triple integrals can often be more readily evaluated by using cylindrical coordinates instead of rectangular coordinates. Some common equations of surfaces in rectangular coordinates along with corresponding equations in cylindrical coordinates are listed in [ref:fs-id1167793262531]. These equations will become handy as we proceed with solving problems using triple integrals.

> TABLE {tab:fs-id1167793262531} cols=5
> title: Equations of Some Common Shapes
> summary: In this table, there are five columns and three rows. The first row is a header row, which is blank in the first cell, but then reads Circular cylinder, Circular cone, Sphere, and Paraboloid. The second row across reads Rectangular, x squared + y squared = c squared, z squared = c squared times (x squared plus y squared), x squared + y squared + z squared = c squared, and z = c times (x squared plus y squared). The third row across reads Cylindrical, r = c, z = cr, r squared + z squared = c squared, and z = c times r squared.

|  | Circular cylinder | Circular cone | Sphere | Paraboloid |
| --- | --- | --- | --- | --- |
| Rectangular | ${x}^{2}+{y}^{2}={c}^{2}$ | ${z}^{2}={c}^{2}({x}^{2}+{y}^{2})$ | ${x}^{2}+{y}^{2}+{z}^{2}={c}^{2}$ | $z=c({x}^{2}+{y}^{2})$ |
| Cylindrical | $r=c$ | $z=cr$ | ${r}^{2}+{z}^{2}={c}^{2}$ | $z=c{r}^{2}$ |

As before, we start with the simplest bounded region $B$ in ${\mathbb{R}}^{3},$ to describe in cylindrical coordinates, in the form of a cylindrical box, $B=\{(r,\theta ,z)|a\le r\le b,\alpha \le \theta \le β,c\le z\le d\}$ ([ref:CNX_Calc_Figure_15_05_002]). Suppose we divide each interval into $l,m\;\text{and}\;n$ subdivisions such that $\text{Δ}r=\frac{b-a}{l},\text{Δ}\theta =\frac{β-\alpha}{m},$ and $\text{Δ}z=\frac{d-c}{n}.$ Then we can state the following definition for a triple integral in cylindrical coordinates.

> FIGURE {fig:CNX_Calc_Figure_15_05_002} src=../../media/CNX_Calc_Figure_15_05_002.jpg
> alt: In cylindrical box is shown with its projection onto the polar coordinate plane with inner radius a, outer radius b, and sides defined by theta = alpha and beta. The cylindrical box B starts at height c and goes to height d with the rest of the values the same as the projection onto the plane.
> caption: A cylindrical box $B$ described by cylindrical coordinates.

:::note [definition] Definition
Consider the cylindrical box (expressed in cylindrical coordinates)

$B=\{(r,\theta ,z)|a\le r\le b,\alpha \le \theta \le β,c\le z\le d\}.$  {eq:fs-id1167794030793}

If the function $f(r,\theta ,z)$ is continuous on $B$ and if $({r}_{ijk}^{*},{\theta}_{ijk}^{*},{z}_{ijk}^{*})$ is any sample point in the cylindrical subbox ${B}_{ijk}=[{r}_{i-1},{r}_{i}]\;\times \;[{\theta}_{j-1},{\theta}_{j}]\;\times \;[{z}_{k-1},{z}_{k}]$ ([ref:CNX_Calc_Figure_15_05_002]), then we can define the {term:triple integral in cylindrical coordinates} as the limit of a triple Riemann sum, provided the following limit exists:

$\lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({r}_{ijk}^{*},{\theta}_{ijk}^{*},{z}_{ijk}^{*}){r}_{ijk}^{*}\text{Δ}r\text{Δ}\theta \text{Δ}z}}}.$  {eq:fs-id1167794096199}

:::
Note that if $g(x,y,z)$ is the function in rectangular coordinates and the box $B$ is expressed in rectangular coordinates, then the triple integral ${\displaystyle \iiint\limits_{B}g(x,y,z)dV}$ is equal to the triple integral ${\displaystyle \iiint\limits_{B}g(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z)r\;dr\;d\theta \;dz}$ and we have

$$ {\displaystyle \iiint\limits_{B}g(x,y,z)dV}={\displaystyle \iiint\limits_{B}g(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z)r\;dr\;d\theta \;dz}={\displaystyle \iiint\limits_{B}f(r,\theta ,z)r\;dr\;d\theta \;dz}. $$  {eq:fs-id1167793951843}

As mentioned in the preceding section, all the properties of a double integral work well in triple integrals, whether in rectangular coordinates or cylindrical coordinates. They also hold for iterated integrals. To reiterate, in cylindrical coordinates, Fubini’s theorem takes the following form:

:::note [theorem] Fubini’s Theorem in Cylindrical Coordinates
Suppose that $g(x,y,z)$ is continuous on a portion of a circular cylinder $B,$ which when described in cylindrical coordinates looks like $B=\{(r,\theta ,z)|a\le r\le b,\alpha \le \theta \le β,c\le z\le d\}.$
Then $g(x,y,z)=g(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z)=f(r,\theta ,z)$ and

${\displaystyle \iiint\limits_{B}g(x,y,z)dV={\displaystyle \int_{c}^{d} \;{\displaystyle \int_{\alpha}^{β} \;{\displaystyle \int_{a}^{b} f(r,\theta ,z)}}}}r\;dr\;d\theta \;dz.$  {eq:fs-id1167793950216}

:::
The iterated integral may be replaced equivalently by any one of the other five iterated integrals obtained by integrating with respect to the three variables in other orders.
Cylindrical coordinate systems work well for solids that are symmetric around an axis, such as cylinders and cones. Let us look at some examples before we define the triple integral in cylindrical coordinates on general cylindrical regions.

:::example {ex:fs-id1167793924177} Evaluating a Triple Integral over a Cylindrical Box

:::exercise {fs-id1167794117996} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \iiint\limits_{B}(zr\;\text{sin}\;\theta )}r\;dr\;d\theta \;dz$ where the cylindrical box $B$ is $B=\{(r,\theta ,z)|0\le r\le 2,0\le \theta \le \pi \text{/}2,0\le z\le 4\}.$
SOLUTION:
As stated in Fubini’s theorem, we can write the triple integral as the iterated integral

${\displaystyle \iiint\limits_{B}(zr\;\text{sin}\;\theta )}r\;dr\;d\theta \;dz={\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2}{\displaystyle \int_{r=0}^{r=2}{\displaystyle \int_{z=0}^{z=4}(zr\;\text{sin}\;\theta )}}}r\;dz\;dr\;d\theta .$  {eq:fs-id1167793873108}

The evaluation of the iterated integral is straightforward. Each variable in the integral is independent of the others, so we can integrate each variable separately and multiply the results together. This makes the computation much easier:

$\begin{array}{l} \\ \\ \\ \\ \;{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2}{\displaystyle \int_{r=0}^{r=2}{\displaystyle \int_{z=0}^{z=4}(zr\;\text{sin}\;\theta )}}}r\;dz\;dr\;d\theta \\ =({\displaystyle \int_{0}^{\pi \text{/}2}\text{sin}\;\theta \;d\theta})({\displaystyle \int_{0}^{2}{r}^{2}dr})({\displaystyle \int_{0}^{4}z\;dz})=({\text{−}\text{cos}\;\theta |}_{0}^{\pi \text{/}2})({\frac{{r}^{3}}{3}|}_{0}^{2})({\frac{{z}^{2}}{2}|}_{0}^{4})=\frac{64}{3}.\end{array}$  {eq:fs-id1167794046051}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793262839} type= 
PROBLEM:
Evaluate the triple integral $\int_{\theta =0}^{\theta =\pi} \;\int_{r=0}^{r=1} \;\int_{z=0}^{z=4} (rz\;\text{sin}\;\theta )rdzdrd\theta .$
SOLUTION:
$\frac{16}{3}$
COMMENTARY: Hint
Follow the same steps as in the previous example.
:::
:::
If the cylindrical region over which we have to integrate is a general solid, we look at the projections onto the coordinate planes. Hence the triple integral of a continuous function $f(r,\theta ,z)$ over a general solid region $E=\{(r,\theta ,z)|(r,\theta )\in D,{u}_{1}(r,\theta )\le z\le {u}_{2}(r,\theta )\}$ in ${\mathbb{R}}^{3},$ where $D$ is the projection of $E$ onto the $r\theta$-plane, is

${\displaystyle \iiint\limits_{E}f(r,\theta ,z)r\;dr\;d\theta \;dz={\displaystyle \iint\limits_{D}[{\displaystyle \int_{{u}_{1}(r,\theta )}^{{u}_{2}(r,\theta )} f(r,\theta ,z)dz}]}}r\;dr\;d\theta .$  {eq:fs-id1167793287444}

In particular, if $D=\{(r,\theta )|{g}_{1}(\theta )\le r\le {g}_{2}(\theta ),\alpha \le \theta \le β\},$ then we have

${\displaystyle \iiint\limits_{E}f(r,\theta ,z)}r\;dr\;d\theta ={\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r={g}_{1}(\theta )}^{r={g}_{2}(\theta )} \;{\displaystyle \int_{z={u}_{1}(r,\theta )}^{z={u}_{2}(r,\theta )} f(r,\theta ,z)}}}r\;dz\;dr\;d\theta .$  {eq:fs-id1167793252283}

Similar formulas exist for projections onto the other coordinate planes. We can use polar coordinates in those planes if necessary.

:::example {ex:fs-id1167793495647} Setting up a Triple Integral in Cylindrical Coordinates over a General Region

:::exercise {fs-id1167793618024} type= 
PROBLEM:
Consider the region $E$ inside the right circular cylinder with equation $r=2\;\text{sin}\;\theta ,$ bounded below by the $r\theta$-plane and bounded above by the sphere with radius $4$ centered at the origin ([ref:CNX_Calc_Figure_15_05_003]). Set up a triple integral over this region with a function $f(r,\theta ,z)$ in cylindrical coordinates.

> FIGURE {fig:CNX_Calc_Figure_15_05_003} src=../../media/CNX_Calc_Figure_15_05_003.jpg
> alt: In polar coordinate space, a sphere of radius 4 is shown with equation r squared + z squared = 16 and center being the origin. There is also a cylinder described by r = 2 sin theta inside the sphere.
> caption: Setting up a triple integral in cylindrical coordinates over a cylindrical region.

SOLUTION:
First, identify that the equation for the sphere is ${r}^{2}+{z}^{2}=16.$ We can see that the limits for $z$ are from $0$ to $z=\sqrt{16-{r}^{2}}.$ Then the limits for $r$ are from $0$ to $r=2\;\text{sin}\;\theta .$ Finally, the limits for $\theta$ are from $0$ to $\pi .$ Hence the region is

$E=\{(r,\theta ,z)|0\le \theta \le \pi ,0\le r\le 2\;\text{sin}\;\theta ,0\le z\le \sqrt{16-{r}^{2}}\}.$  {eq:fs-id1167793964778}

Therefore, the triple integral is

${\displaystyle \iiint\limits_{E}f(r,\theta ,z)}r\;dz\;dr\;d\theta ={\displaystyle \int_{\theta =0}^{\theta =\pi} \;{\displaystyle \int_{r=0}^{r=2\;\text{sin}\;\theta} \;{\displaystyle \int_{z=0}^{z=\sqrt{16-{r}^{2}}} f(r,\theta ,z)}}}r\;dz\;dr\;d\theta .$  {eq:fs-id1167793876572}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794171341} type= 
PROBLEM:
Consider the region $E$ inside the right circular cylinder with equation $r=2\;\text{sin}\;\theta ,$ bounded below by the $r\theta$-plane and bounded above by $z=4-y.$ Set up a triple integral with a function $f(r,\theta ,z)$ in cylindrical coordinates.
SOLUTION:
${\displaystyle \iiint\limits_{E}f(r,\theta ,z)}r\;dz\;dr\;d\theta ={\displaystyle \int_{\theta =0}^{\theta =\pi} \;{\displaystyle \int_{r=0}^{r=2\;\text{sin}\;\theta} \;{\displaystyle \int_{z=0}^{z=4-r\;\text{sin}\;\theta} f(r,\theta ,z)r\;dz\;dr\;d\theta}}}.$
COMMENTARY: Hint
Analyze the region, and draw a sketch.
:::
:::

:::example {ex:fs-id1167794136529} Setting up a Triple Integral in Two Ways

:::exercise {fs-id1167794226619} type= 
PROBLEM:
Let $E$ be the region bounded below by the cone $z=\sqrt{{x}^{2}+{y}^{2}}$ and above by the paraboloid $z=2-{x}^{2}-{y}^{2}.$ ([ref:CNX_Calc_Figure_15_05_004]). Set up a triple integral in cylindrical coordinates to find the volume of the region, using the following orders of integration:
a. $dz\;dr\;d\theta$
b. $dr\;dz\;d\theta .$

> FIGURE {fig:CNX_Calc_Figure_15_05_004} src=../../media/CNX_Calc_Figure_15_05_004.jpg
> alt: A paraboloid with equation z = 2 minus x squared minus y squared opening down, and within it, a cone with equation z = the square root of (x squared + y squared) pointing down.
> caption: Setting up a triple integral in cylindrical coordinates over a conical region.

SOLUTION:
a. The cone is of radius 1 where it meets the paraboloid. Since $z=2-{x}^{2}-{y}^{2}=2-{r}^{2}$ and $z=\sqrt{{x}^{2}+{y}^{2}}=r$ (assuming $r$ is nonnegative), we have $2-{r}^{2}=r.$ Solving, we have ${r}^{2}+r-2=(r+2)(r-1)=0.$ Since $r\ge 0,$ we have $r=1.$ Therefore $z=1.$ So the intersection of these two surfaces is a circle of radius $1$ in the plane $z=1.$ The cone is the lower bound for $z$ and the paraboloid is the upper bound. The projection of the region onto the $xy$-plane is the circle of radius $1$ centered at the origin.

Thus, we can describe the region as

$E=\{(r,\theta ,z)|0\le \theta \le 2\pi ,0\le r\le 1,r\le z\le 2-{r}^{2}\}.$  {eq:fs-id1167793409815}

Hence the integral for the volume is

$V={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=1} \;{\displaystyle \int_{z=r}^{z=2-{r}^{2}} r\;dz\;dr\;d\theta}}}.$  {eq:fs-id1167794043155}

b. We can also write the cone surface as $r=z$ and the paraboloid as ${r}^{2}=2-z.$ The lower bound for $r$ is zero, but the upper bound is sometimes the cone and the other times it is the paraboloid. The plane $z=1$ divides the region into two regions. Then the region can be described as

$\begin{array}{rl}E & =\{(r,\theta ,z)|0\le \theta \le 2\pi ,0\le z\le 1,0\le r\le z\} \\ & \cup \{(r,\theta ,z)|0\le \theta \le 2\pi ,1\le z\le 2,0\le r\le \sqrt{2-z}\}.\end{array}$  {eq:fs-id1167793837895}

Now the integral for the volume becomes

$V={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{z=0}^{z=1} \;{\displaystyle \int_{r=0}^{r=z} r\;dr\;dz\;d\theta +}}}{\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{z=1}^{z=2} \;{\displaystyle \int_{r=0}^{r=\sqrt{2-z}} r\;dr\;dz\;d\theta}}}.$  {eq:fs-id1167794026720}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794055491} type= 
PROBLEM:
Redo the previous example with the order of integration $d\theta \;dz\;dr.$
SOLUTION:
$E=\{(r,\theta ,z)|0\le \theta \le 2\pi ,0\le z\le 1,z\le r\le 2-{z}^{2}\}$ and $V={\displaystyle \int_{r=0}^{r=1} \;{\displaystyle \int_{z=r}^{z=2-{r}^{2}} \;{\displaystyle \int_{\theta =0}^{\theta =2\pi} r\;d\theta \;dz\;dr}}}.$
COMMENTARY: Hint
Note that $\theta$ is independent of $r$ and $z.$
:::
:::

:::example {ex:fs-id1167793268992} Finding a Volume with Triple Integrals in Two Ways

:::exercise {fs-id1167793268994} type= 
PROBLEM:
Let *E* be the region bounded below by the $r\theta$-plane, above by the sphere ${x}^{2}+{y}^{2}+{z}^{2}=4,$ and on the sides by the cylinder ${x}^{2}+{y}^{2}=1$ ([ref:CNX_Calc_Figure_15_05_005]). Set up a triple integral in cylindrical coordinates to find the volume of the region using the following orders of integration, and in each case find the volume and check that the answers are the same:
a. $dz\;dr\;d\theta$
b. $dr\;dz\;d\theta .$

> FIGURE {fig:CNX_Calc_Figure_15_05_005} src=../../media/CNX_Calc_Figure_15_05_005.jpg
> alt: A hemisphere with equation x squared + y squared + z squared = 4 in the upper half plane, and within it, a cylinder with equation x squared + y squared = 1.
> caption: Finding a cylindrical volume with a triple integral in cylindrical coordinates.

SOLUTION:
a. Note that the equation for the sphere is

${x}^{2}+{y}^{2}+{z}^{2}=4\;\text{or}\;{r}^{2}+{z}^{2}=4$  {eq:fs-id1167794025520}

and the equation for the cylinder is

${x}^{2}+{y}^{2}=1\;\text{or}\;{r}^{2}=1.$  {eq:fs-id1167793939004}

Thus, we have for the region $E$

$E=\{(r,\theta ,z)|0\le z\le \sqrt{4-{r}^{2}},0\le r\le 1,0\le \theta \le 2\pi \}$  {eq:fs-id1167793949167}

Hence the integral for the volume is

$\begin{array}{rl}V(E) & ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=1} \;{\displaystyle \int_{z=0}^{z=\sqrt{4-{r}^{2}}} r\;dz\;dr\;d\theta}}} \\ & ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=1} [{rz|}_{z=0}^{z=\sqrt{4-{r}^{2}}}]}}dr\;d\theta ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=1} (r\sqrt{4-{r}^{2}})}}dr\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi} (\frac{8}{3}-\sqrt{3})d\theta =2\pi (\frac{8}{3}-\sqrt{3})}\;\text{cubic units}\text{.}\end{array}$  {eq:fs-id1167794180489}

b. Since the sphere is ${x}^{2}+{y}^{2}+{z}^{2}=4,$ which is ${r}^{2}+{z}^{2}=4,$ and the cylinder is ${x}^{2}+{y}^{2}=1,$ which is ${r}^{2}=1,$ we have $1+{z}^{2}=4,$ that is, ${z}^{2}=3.$ Thus we have two regions, since the sphere and the cylinder intersect at $(1,\sqrt{3})$ in the $rz$-plane

${E}_{1}=\{(r,\theta ,z)|0\le r\le \sqrt{4-{z}^{2}},\sqrt{3}\le z\le 2,0\le \theta \le 2\pi \}$  {eq:fs-id1167793931982}

and

${E}_{2}=\{(r,\theta ,z)|0\le r\le 1,0\le z\le \sqrt{3},0\le \theta \le 2\pi \}.$  {eq:fs-id1167794003561}

Hence the integral for the volume is

$\begin{array}{rl}V(E) & ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{z=\sqrt{3}}^{z=2} \;{\displaystyle \int_{r=0}^{r=\sqrt{4-{r}^{2}}} r\;dr\;dz\;d\theta}}}+{\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{z=0}^{z=\sqrt{3}} \;{\displaystyle \int_{r=0}^{r=1} r\;dr\;dz\;d\theta}}} \\ & =\sqrt{3}\pi +(\frac{16}{3}-3\sqrt{3})\pi =2\pi (\frac{8}{3}-\sqrt{3})\;\text{cubic units}.\end{array}$  {eq:fs-id1167793294374}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793416595} type= 
PROBLEM:
Redo the previous example with the order of integration $d\theta \;dz\;dr.$
SOLUTION:
${E}_{2}=\{(r,\theta ,z)|0\le \theta \le 2\pi ,0\le r\le 1,r\le z\le \sqrt{4-{r}^{2}}\}$ and $V={\displaystyle \int_{r=0}^{r=1} \;{\displaystyle \int_{z=r}^{z=\sqrt{4-{r}^{2}}} \;{\displaystyle \int_{\theta =0}^{\theta =2\pi} r\;d\theta \;dz\;dr}}}.$
COMMENTARY: Hint
A figure can be helpful. Note that $\theta$ is independent of $r$ and $z.$
:::
:::

## Review of Spherical Coordinates
In three-dimensional space ${\mathbb{R}}^{3}$ in the spherical coordinate system, we specify a point $P$ by its distance $ρ$ from the origin, the polar angle $\theta$ from the positive $x\text{-axis}$ (same as in the cylindrical coordinate system), and the angle $φ$ from the positive $z\text{-axis}$ and the line $OP$ ([ref:CNX_Calc_Figure_15_05_006]). Note that $ρ\ge 0$ and $0\le φ\le \pi .$ (Refer to [Cylindrical and Spherical Coordinates](module:m53875) for a review.) Spherical coordinates are useful for triple integrals over regions that are symmetric with respect to the origin.

> FIGURE {fig:CNX_Calc_Figure_15_05_006} src=../../media/CNX_Calc_Figure_15_05_006.jpg
> alt: A depiction of the spherical coordinate system: a point (x, y, z) is shown, which is equal to (rho, theta, phi) in spherical coordinates. Rho serves as the spherical radius, theta serves as the angle from the x axis in the xy plane, and phi serves as the angle from the z axis.
> caption: The spherical coordinate system locates points with two angles and a distance from the origin.

Recall the relationships that connect rectangular coordinates with spherical coordinates.
From spherical coordinates to rectangular coordinates:

$x=ρ\;\text{sin}\;φ\;\text{cos}\;\theta ,y=ρ\;\text{sin}\;φ\;\text{sin}\;\theta ,\;\text{and}\;z=ρ\;\text{cos}\;φ.$  {eq:fs-id1167793852235}

From rectangular coordinates to spherical coordinates:

${ρ}^{2}={x}^{2}+{y}^{2}+{z}^{2},\text{tan}\;\theta =\frac{y}{x},φ=\text{arccos}(\frac{z}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}).$  {eq:fs-id1167794173244}

Other relationships that are important to know for conversions are

$\begin{array}{llllll}\bullet & & r=ρ\;\text{sin}\;φ & & & \\ \bullet & & \theta =\theta & & & \begin{array}{l}\text{These equations are used to convert from} \\ \text{spherical coordinates to cylindrical coordinates}\end{array} \\ \bullet & & z=ρ\;\text{cos}\;φ & & & \end{array}$  {eq:fs-id1167793475416}

and

$\begin{array}{llllll} \\ \\ \bullet & & ρ=\sqrt{{r}^{2}+{z}^{2}} & & & \\ \bullet & & \theta =\theta & & & \begin{array}{l}\text{These equations are used to convert from} \\ \text{cylindrical coordinates to spherical} \\ \text{coordinates.}\end{array} \\ \bullet & & φ=\text{arccos}(\frac{z}{\sqrt{{r}^{2}+{z}^{2}}}) & & & \end{array}$  {eq:fs-id1167794050870}

The following figure shows a few solid regions that are convenient to express in spherical coordinates.

> FIGURE {fig:CNX_Calc_Figure_15_05_007} src=../../media/CNX_Calc_Figure_15_05_007.jpg
> alt: This figure consists of four figures. In the first, a sphere is shown with the note Sphere rho = c (constant). In the second, a half plane is drawn from the z axis with the note Half plane theta = c (constant). In the last two figures, a half cone is drawn in each with the note Half cone phi = c (constant). In the first of these, the cone opens up and it is marked 0 < c < pi/2. In the second of these, the cone opens down and it is marked pi/2 < c < pi.
> caption: Spherical coordinates are especially convenient for working with solids bounded by these types of surfaces. (The letter $c$ indicates a constant.)

## Integration in Spherical Coordinates
We now establish a triple integral in the spherical coordinate system, as we did before in the cylindrical coordinate system. Let the function $f(ρ,\theta ,φ)$ be continuous in a bounded spherical box, $B=\{(ρ,\theta ,φ)|a\le ρ\le b,\alpha \le \theta \le β,γ\le φ\le ψ\}.$ We then divide each interval into $l,m\;\text{and}\;n$ subdivisions such that $\text{Δ}ρ=\frac{b-a}{l},\text{Δ}\theta =\frac{β-\alpha}{m},\text{Δ}φ=\frac{ψ-γ}{n}.$
Now we can illustrate the following theorem for triple integrals in spherical coordinates with $({ρ}_{ijk}^{*},{\theta}_{ijk}^{*},{φ}_{ijk}^{*})$ being any sample point in the spherical subbox ${B}_{ijk}.$ For the volume element of the subbox $\text{Δ}V$ in spherical coordinates, we have $\text{Δ}V=(\text{Δ}ρ)(ρ\text{Δ}φ)(ρ\;\text{sin}\;φ\text{Δ}\theta ),,$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_05_008} src=../../media/CNX_Calc_Figure_15_05_008.jpg
> alt: In the spherical coordinate space, a box is projected onto the polar coordinate plane. On the polar coordinate plane, the projection has area rho sin phi Delta theta. On the z axis, a distance Delta rho is indicated, and from these boundaries, angles are made that project through the edges of the box. There is also a blown up version of the box that shows it has sides Delta rho, rho Delta phi, and rho sin phi Delta theta, with overall volume Delta V = rho squared sin phi Delta rho Delta phi Delta theta.
> caption: The volume element of a box in spherical coordinates.

:::note [definition] Definition
The {term:triple integral in spherical coordinates} is the limit of a triple Riemann sum,

$\lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({ρ}_{ijk}^{*},{\theta}_{ijk}^{*},{φ}_{ijk}^{*}){({ρ}_{ijk}^{*})}^{2}\text{sin}\;{φ}_{ijk}^{*}\text{Δ}ρ\text{Δ}\theta \text{Δ}φ}}}$  {eq:fs-id1167794327640}

provided the limit exists.
:::
As with the other multiple integrals we have examined, all the properties work similarly for a triple integral in the spherical coordinate system, and so do the iterated integrals. Fubini’s theorem takes the following form.

:::note [theorem] Fubini’s Theorem for Spherical Coordinates
If $f(ρ,\theta ,φ)$ is continuous on a spherical solid box $B=[a,b]\;\times \;[\alpha ,β]\;\times \;[γ,ψ],$ then

$$ \iiint\limits_{B}f(ρ,\theta ,φ){ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta =\int_{\theta =\alpha}^{\theta =β} \int_{φ=γ}^{φ=ψ} \;\int_{ρ=a}^{ρ=b} f(ρ,\theta ,φ){ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta . $$  {eq:fs-id1167793280690}

This iterated integral may be replaced by other iterated integrals by integrating with respect to the three variables in other orders.
:::
As stated before, spherical coordinate systems work well for solids that are symmetric around a point, such as spheres and cones. Let us look at some examples before we consider triple integrals in spherical coordinates on general spherical regions.

:::example {ex:fs-id1167793992364} Evaluating a Triple Integral in Spherical Coordinates

:::exercise {fs-id1167793992366} type= 
PROBLEM:
Evaluate the iterated triple integral ${\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}2} \;{\displaystyle \int_{p=0}^{ρ=1} {ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta}}}.$
SOLUTION:
As before, in this case the variables in the iterated integral are actually independent of each other and hence we can integrate each piece and multiply:

${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{1} {ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta}}}={\displaystyle \int_{0}^{2\pi} d\theta}{\displaystyle \int_{0}^{\pi \text{/}2} \text{sin}\;φ\;dφ{\displaystyle \int_{0}^{1} {ρ}^{2}dρ}}=(2\pi )(1)(\frac{1}{3})=\frac{2\pi}{3}.$  {eq:fs-id1167793248361}

:::
:::
The concept of triple integration in spherical coordinates can be extended to integration over a general solid, using the projections onto the coordinate planes. Note that $dV$ and $dA$ mean the increments in volume and area, respectively. The variables $V$ and $A$ are used as the variables for integration to express the integrals.
The triple integral of a continuous function $f(ρ,\theta ,φ)$ over a general solid region

$E=\{(ρ,\theta ,φ)|(ρ,\theta )\in D,{u}_{1}(ρ,\theta )\le φ\le {u}_{2}(ρ,\theta )\}$  {eq:fs-id1167794145892}

in ${\mathbb{R}}^{3},$ where $D$ is the projection of $E$ onto the $ρ\theta$-plane, is

${\displaystyle \iiint\limits_{E}f(ρ,\theta ,φ)}dV={\displaystyle \iint\limits_{D}[{\displaystyle \int_{{u}_{1}(ρ,\theta )}^{{u}_{2}(ρ,\theta )} f(ρ,\theta ,φ)dφ}]}dA.$  {eq:fs-id1167793940803}

In particular, if $D=\{(ρ,\theta )|{g}_{1}(\theta )\le ρ\le {g}_{2}(\theta ),\alpha \le \theta \le β\},$ then we have

${\displaystyle \iiint\limits_{E}f(ρ,\theta ,φ)}dV={\displaystyle \int_{\alpha}^{β} \;{\displaystyle \int_{{g}_{1}(\theta )}^{{g}_{2}(\theta )} \;{\displaystyle \int_{{u}_{1}(ρ,\theta )}^{{u}_{2}(ρ,\theta )} f(ρ,\theta ,φ){ρ}^{2}\text{sin}\;φ\;dφ\;dρ\;d\theta}}}.$  {eq:fs-id1167793544262}

Similar formulas occur for projections onto the other coordinate planes.

:::example {ex:fs-id1167794045820} Setting up a Triple Integral in Spherical Coordinates

:::exercise {fs-id1167794045822} type= 
PROBLEM:
Set up an integral for the volume of the region bounded by the cone $z=\sqrt{3({x}^{2}+{y}^{2})}$ and the hemisphere $z=\sqrt{4-{x}^{2}-{y}^{2}}$ (see the figure below).

> FIGURE {fig:CNX_Calc_Figure_15_05_009} src=../../media/CNX_Calc_Figure_15_05_009.jpg
> alt: A hemisphere with equation z = the square root of (4 minus x squared minus y squared) in the upper half plane, and within it, a cone with equation z = the square root of (3 times (x squared + y squared)) that is pointing down, with vertex at the origin.
> caption: A region bounded below by a cone and above by a hemisphere.

SOLUTION:
Using the conversion formulas from rectangular coordinates to spherical coordinates, we have:
For the cone: $z=\sqrt{3({x}^{2}+{y}^{2})}$ or $ρ\;\text{cos}\;φ=\sqrt{3}ρ\;\text{sin}\;φ$ or $\text{tan}\;φ=\frac{1}{\sqrt{3}}$ or $φ=\frac{\pi}{6}.$
For the sphere: $z=\sqrt{4-{x}^{2}-{y}^{2}}$ or ${z}^{2}={x}^{2}+{y}^{2}=4$ or ${ρ}^{2}=4$ or $ρ=2.$
Thus, the triple integral for the volume is $V(E)={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}6} \;{\displaystyle \int_{ρ=0}^{ρ=2} {ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta}}}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793940576} type= 
PROBLEM:
Set up a triple integral for the volume of the solid region bounded above by the sphere $ρ=2$ and bounded below by the cone $φ=\pi \text{/}3.$
SOLUTION:
$V(E)={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{ϕ=0}^{φ=\pi \text{/}3} \;{\displaystyle \int_{ρ=0}^{ρ=2} {ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta}}}$
COMMENTARY: Hint
Follow the steps of the previous example.
:::
:::

:::example {ex:fs-id1167793930561} Interchanging Order of Integration in Spherical Coordinates

:::exercise {fs-id1167793930563} type= 
PROBLEM:
Let $E$ be the region bounded below by the cone $z=\sqrt{{x}^{2}+{y}^{2}}$ and above by the sphere $z={x}^{2}+{y}^{2}+{z}^{2}$ ([ref:CNX_Calc_Figure_15_05_010]). Set up a triple integral in spherical coordinates and find the volume of the region using the following orders of integration:
a. $dρ\;d\theta \;d\theta ,$
b. $dφ\;dρ\;d\theta .$

> FIGURE {fig:CNX_Calc_Figure_15_05_010} src=../../media/CNX_Calc_Figure_15_05_010.jpg
> alt: A sphere with equation z = x squared + y squared + z squared, and within it, a cone with equation z = the square root of (x squared + y squared) that is pointing down, with vertex at the origin.
> caption: A region bounded below by a cone and above by a sphere.

SOLUTION:
a. Use the conversion formulas to write the equations of the sphere and cone in spherical coordinates.

For the sphere:

$\begin{array}{rll}{x}^{2}+{y}^{2}+{z}^{2} & = & z \\ {ρ}^{2} & = & ρ\;\text{cos}\;φ \\ ρ & = & \text{cos}\;φ.\end{array}$  {eq:fs-id1167793255707}

For the cone:

$\begin{array}{lll}z & = & \sqrt{{x}^{2}+{y}^{2}} \\ ρ\;\text{cos}\;φ & = & \sqrt{{ρ}^{2}{\text{sin}}^{2}φ\;{\text{cos}}^{2}\theta +{ρ}^{2}{\text{sin}}^{2}φ\;{\text{sin}}^{2}\theta} \\ ρ\;\text{cos}\;φ & = & \sqrt{{ρ}^{2}{\text{sin}}^{2}φ({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta )} \\ ρ\;\text{cos}\;φ & = & ρ\;\text{sin}\;φ \\ \text{cos}\;φ & = & \text{sin}\;φ \\ φ & = & \pi \text{/}4.\end{array}$  {eq:fs-id1167794005600}

Hence the integral for the volume of the solid region $E$ becomes

$V(E)={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}4} \;{\displaystyle \int_{ρ=0}^{ρ=\text{cos}\;φ} {ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta}}}.$  {eq:fs-id1167793442467}

b. Consider the $φρ$-plane. Note that the ranges for $φ$ and $ρ$ (from part a.) are

$\begin{array}{l}0\le φ\le \pi \text{/}4 \\ 0\le ρ\le \text{cos}\;φ.\end{array}$  {eq:fs-id1167794296693}

The curve $ρ=\text{cos}\;φ$ meets the line $φ=\pi \text{/}4$ at the point $(\pi \text{/}4,\sqrt{2}\text{/}2).$ Thus, to change the order of integration, we need to use two pieces:

$\begin{array}{lllllll}\begin{array}{l}0\le ρ\le \sqrt{2}\text{/}2 \\ 0\le φ\le \pi \text{/}4\end{array} & & & \text{and} & & & \begin{array}{rll}\sqrt{2}\text{/}2 & \le & ρ\le 1 \\ 0 & \le & φ\le {\text{cos}}^{−1}ρ.\end{array}\end{array}$  {eq:fs-id1167793469152}

Hence the integral for the volume of the solid region $E$ becomes

$V(E)={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{ρ=0}^{ρ=\sqrt{2}\text{/}2} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}4} {ρ}^{2}\text{sin}\;φ\;dφ\;dρ\;d\theta}}}+{\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{ρ=\sqrt{2}\text{/}2}^{ρ=1} \;{\displaystyle \int_{φ=0}^{φ={\text{cos}}^{−1}ρ} {ρ}^{2}\text{sin}\;φ\;dφ\;dρ\;d\theta}}}.$  {eq:fs-id1167794158550}

In each case, the integration results in $V(E)=\frac{\pi}{8}.$
:::
:::
Before we end this section, we present a couple of examples that can illustrate the conversion from rectangular coordinates to cylindrical coordinates and from rectangular coordinates to spherical coordinates.

:::example {ex:fs-id1167794296753} Converting from Rectangular Coordinates to Cylindrical Coordinates

:::exercise {fs-id1167794296755} type= 
PROBLEM:
Convert the following integral into cylindrical coordinates:

${\displaystyle \int_{y=−1}^{y=1} \;{\displaystyle \int_{x=0}^{x=\sqrt{1-{y}^{2}}} \;{\displaystyle \int_{z={x}^{2}+{y}^{2}}^{z=\sqrt{{x}^{2}+{y}^{2}}} xyz\;dz\;dx\;dy}}}.$  {eq:fs-id1167793540005}

SOLUTION:
The ranges of the variables are

$\begin{array}{rll}-1 & \le & y\le 1 \\ 0 & \le & x\le \sqrt{1-{y}^{2}} \\ {x}^{2}+{y}^{2} & \le & z\le \sqrt{{x}^{2}+{y}^{2}}.\end{array}$  {eq:fs-id1167793544556}

The first two inequalities describe the right half of a circle of radius $1.$ Therefore, the ranges for $\theta$ and $r$ are

$-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}\;\text{and}\;0\le r\le 1.$  {eq:fs-id1167793589879}

The limits of $z$ are ${r}^{2}\le z\le r,$ hence

${\displaystyle \int_{y=−1}^{y=1} \;{\displaystyle \int_{x=0}^{x=\sqrt{1-{y}^{2}}} \;{\displaystyle \int_{z={x}^{2}+{y}^{2}}^{z=\sqrt{{x}^{2}+{y}^{2}}} xyz\;dz\;dx\;dy}}}={\displaystyle \int_{\theta =\text{−}\pi \text{/}2}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{r=0}^{r=1} \;{\displaystyle \int_{z={r}^{2}}^{z=r} r(r\;\text{cos}\;\theta )(r\;\text{sin}\;\theta )z\;dz\;dr\;d\theta}}}.$  {eq:fs-id1167793432450}

:::
:::

:::example {ex:fs-id1167793926329} Converting from Rectangular Coordinates to Spherical Coordinates

:::exercise {fs-id1167794058932} type= 
PROBLEM:
Convert the following integral into spherical coordinates:

${\displaystyle \int_{y=0}^{y=3} \;{\displaystyle \int_{x=0}^{x=\sqrt{9-{y}^{2}}} \;{\displaystyle \int_{z=\sqrt{{x}^{2}+{y}^{2}}}^{z=\sqrt{18-{x}^{2}-{y}^{2}}} ({x}^{2}+{y}^{2}+{z}^{2})dz\;dx\;dy}}}.$  {eq:fs-id1167794058942}

SOLUTION:
The ranges of the variables are

$\begin{array}{rll}0 & \le & y\le 3 \\ 0 & \le & x\le \sqrt{9-{y}^{2}} \\ \sqrt{{x}^{2}+{y}^{2}} & \le & z\le \sqrt{18-{x}^{2}-{y}^{2}}.\end{array}$  {eq:fs-id1167794052498}

The first two ranges of variables describe a quarter disk in the first quadrant of the $xy$-plane. Hence the range for $\theta$ is $0\le \theta \le \frac{\pi}{2}.$
The lower bound $z=\sqrt{{x}^{2}+{y}^{2}}$ is the upper half of a cone and the upper bound $z=\sqrt{18-{x}^{2}-{y}^{2}}$ is the upper half of a sphere. Therefore, we have $0\le ρ\le \sqrt{18},$ which is $0\le ρ\le 3\sqrt{2}.$
For the ranges of $φ,$ we need to find where the cone and the sphere intersect, so solve the equation

$\begin{array}{rll}{r}^{2}+{z}^{2} & = & 18 \\ {(\sqrt{{x}^{2}+{y}^{2}})}^{2}+{z}^{2} & = & 18 \\ {z}^{2}+{z}^{2} & = & 18 \\ 2{z}^{2} & = & 18 \\ {z}^{2} & = & 9 \\ z & = & 3.\end{array}$  {eq:fs-id1167794168081}

This gives

$\begin{array}{rll}3\sqrt{2}\;\text{cos}\;φ & = & 3 \\ \text{cos}\;φ & = & \frac{1}{\sqrt{2}} \\ φ & = & \frac{\pi}{4}.\end{array}$  {eq:fs-id1167793298792}

Putting this together, we obtain

${\displaystyle \int_{y=0}^{y=3} \;{\displaystyle \int_{x=0}^{x=\sqrt{9-{y}^{2}}} \;{\displaystyle \int_{z=\sqrt{{x}^{2}+{y}^{2}}}^{z=\sqrt{18-{x}^{2}-{y}^{2}}} ({x}^{2}+{y}^{2}+{z}^{2})dz\;dx\;dy}}}={\displaystyle \int_{φ=0}^{φ=\pi \text{/}4} \;{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{ρ=0}^{ρ=3\sqrt{2}} {ρ}^{4}\text{sin}\;φ\;dρ\;d\theta}}}\;dφ.$  {eq:fs-id1167793924126}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794201508} type= 
PROBLEM:
Use rectangular, cylindrical, and spherical coordinates to set up triple integrals for finding the volume of the region inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=4$ but outside the cylinder ${x}^{2}+{y}^{2}=1.$

> IMAGE {img:fs-id1167793384557} src=../../media/CNX_Calc_Figure_15_05_011.jpg
> alt: A sphere with equation x squared + y squared + z squared = 4, and within it, a cylinder with equation x squared + y squared = 1.

SOLUTION:
Rectangular: ${\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{y=\text{−}\sqrt{4-{x}^{2}}}^{y=\sqrt{4-{x}^{2}}} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}-{y}^{2}}}^{z=\sqrt{4-{x}^{2}-{y}^{2}}} dz\;dy\;dx-}}}{\displaystyle \int_{x=−1}^{x=1} \;{\displaystyle \int_{y=\text{−}\sqrt{1-{x}^{2}}}^{y=\sqrt{1-{x}^{2}}} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}-{y}^{2}}}^{z=\sqrt{4-{x}^{2}-{y}^{2}}} dz\;dy\;dx}}}.$
Cylindrical: ${\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=1}^{r=2} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{r}^{2}}}^{z=\sqrt{4-{r}^{2}}} r\;dz\;dr\;d\theta}}}.$
Spherical: ${\displaystyle \int_{φ=\pi \text{/}6}^{φ=5\pi \text{/}6} \;{\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{ρ=\text{csc}\;φ}^{ρ=2} {ρ}^{2}\text{sin}\;φ\;dρ\;d\theta \;dφ}}}.$
:::
:::
Now that we are familiar with the spherical coordinate system, let’s find the volume of some known geometric figures, such as spheres and ellipsoids.

:::example {ex:fs-id1167793442449} Chapter Opener: Finding the Volume of l’Hemisphèric

:::exercise {fs-id1167793442451} type= 
PROBLEM:
Find the volume of the spherical planetarium in l’Hemisphèric in Valencia, Spain, which is five stories tall and has a radius of approximately $50$ ft, using the equation ${x}^{2}+{y}^{2}+{z}^{2}={r}^{2}.$

> FIGURE {fig:CNX_Calc_Figure_15_05_012} src=../../media/CNX_Calc_Figure_15_05_012.jpg
> alt: A picture of l’Hemisphèric, which is a giant glass structure that is in the shape of an ellipsoid.
> caption: (credit: modification of work by Javier Yaya Tur, Wikimedia Commons)

SOLUTION:
We calculate the volume of the ball in the first octant, where $x\ge 0,y\ge 0,$ and $z\ge 0,$ using spherical coordinates, and then multiply the result by $8$ for symmetry. Since we consider the region $D$ as the first octant in the integral, the ranges of the variables are

$0\le φ\le \frac{\pi}{2},0\le ρ\le r,0\le \theta \le \frac{\pi}{2}.$  {eq:fs-id1167793497264}

Therefore,

$\begin{array}{rl}V & ={\displaystyle \iiint\limits_{D}dx\;dy\;dz=8{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{ρ=0}^{ρ=r} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}2} {ρ}^{2}\text{sin}\;\theta}}}}\;dφ\;dρ\;d\theta \\ & =8{\displaystyle \int_{φ=0}^{φ=\pi \text{/}2} dφ{\displaystyle \int_{ρ=0}^{ρ=r} {ρ}^{2}dρ}}{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2} \text{sin}\;\theta \;d\theta} \\ & =8(\frac{\pi}{2})(\frac{{r}^{3}}{3})(1) \\ & =\frac{4}{3}\pi {r}^{3}.\end{array}$  {eq:fs-id1167793500492}

This exactly matches with what we knew. So for a sphere with a radius of approximately $50$ ft, the volume is $\frac{4}{3}\pi {(50)}^{3}\approx 523,600{\;\text{ft}}^{3}.$
:::
:::
For the next example we find the volume of an ellipsoid.

:::example {ex:fs-id1167793442651} Finding the Volume of an Ellipsoid

:::exercise {fs-id1167793586288} type= 
PROBLEM:
Find the volume of the ellipsoid $\frac{{x}^{2}}{{a}^{2}}+\frac{{y}^{2}}{{b}^{2}}+\frac{{z}^{2}}{{c}^{2}}=1.$
SOLUTION:
We again use symmetry and evaluate the volume of the ellipsoid using spherical coordinates. As before, we use the first octant $x\ge 0,y\ge 0,$ and $z\ge 0$ and then multiply the result by $8.$
In this case the ranges of the variables are

$0\le φ\le \frac{\pi}{2},0,0\le ρ\le 1,\;\text{and}\;0\le \theta \le \frac{\pi}{2}.$  {eq:fs-id1167793219216}

Also, we need to change the rectangular to spherical coordinates in this way:

$x=aρ\;\text{cos}\;φ\;\text{sin}\;\theta ,y=bρ\;\text{sin}\;φ\;\text{sin}\;\theta ,\;\text{and}\;z=cρ\;\text{cos}\;\theta .$  {eq:fs-id1167793540298}

Then the volume of the ellipsoid becomes

$\begin{array}{rl}V & ={\displaystyle \iiint\limits_{D}dx\;dy\;dz} \\ & =8{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2} \;{\displaystyle \int_{ρ=0}^{ρ=1} \;{\displaystyle \int_{φ=0}^{φ=\pi \text{/}2} abc{ρ}^{2}\text{sin}\;\theta}}}\;dφ\;dρ\;d\theta \\ & =8abc{\displaystyle \int_{φ=0}^{φ=\pi \text{/}2} dφ{\displaystyle \int_{ρ=0}^{ρ=1} {ρ}^{2}dρ{\displaystyle \int_{\theta =0}^{\theta =\pi \text{/}2} \text{sin}\;\theta \;d\theta}}} \\ & =8abc(\frac{\pi}{2})(\frac{1}{3})(1) \\ & =\frac{4}{3}\pi abc.\end{array}$  {eq:fs-id1167794213147}

:::
:::

:::example {ex:fs-id1167794070918} Finding the Volume of the Space Inside an Ellipsoid and Outside a Sphere

:::exercise {fs-id1167794070921} type= 
PROBLEM:
Find the volume of the space inside the ellipsoid $\frac{{x}^{2}}{{75}^{2}}+\frac{{y}^{2}}{{80}^{2}}+\frac{{z}^{2}}{{90}^{2}}=1$ and outside the sphere ${x}^{2}+{y}^{2}+{z}^{2}={50}^{2}.$
SOLUTION:
This problem is directly related to the l’Hemisphèric structure. The volume of space inside the ellipsoid and outside the sphere might be useful to find the expense of heating or cooling that space. We can use the preceding two examples for the volume of the sphere and ellipsoid and then substract.
First we find the volume of the ellipsoid using $a=75\;\text{ft,}$ $b=80\;\text{ft,}$ and $c=90\;\text{ft}$ in the result from [ref:fs-id1167793442651]. Hence the volume of the ellipsoid is

${V}_{\text{ellipsoid}}=\frac{4}{3}\pi (75)(80)(90)\approx 2,262,000{\;\text{ft}}^{3}.$  {eq:fs-id1167794199252}

From [ref:fs-id1167793442449], the volume of the sphere is

${V}_{\text{sphere}}\approx 523,600{\;\text{ft}}^{3}.$  {eq:fs-id1167793452788}

Therefore, the volume of the space inside the ellipsoid $\frac{{x}^{2}}{{75}^{2}}+\frac{{y}^{2}}{{80}^{2}}+\frac{{z}^{2}}{{90}^{2}}=1$ and outside the sphere ${x}^{2}+{y}^{2}+{z}^{2}={50}^{2}$ is approximately

${V}_{\text{Hemisferic}}={V}_{\text{ellipsoid}}-{V}_{\text{sphere}}=1,738,400{\;\text{ft}}^{3}.$  {eq:fs-id1167793642017}

:::
:::

:::note [project] Hot air balloons
Hot air ballooning is a relaxing, peaceful pastime that many people enjoy. Many balloonist gatherings take place around the world, such as the Albuquerque International Balloon Fiesta. The Albuquerque event is the largest hot air balloon festival in the world, with over $500$ balloons participating each year.

> FIGURE {fig:CNX_Calc_Figure_15_05_SP1} src=../../media/CNX_Calc_Figure_15_05_013.jpg
> alt: A picture of many hot air balloons.
> caption: Balloons lift off at the $2001$ Albuquerque International Balloon Fiesta. (credit: David Herrera, Flickr)

As the name implies, hot air balloons use hot air to generate lift. (Hot air is less dense than cooler air, so the balloon floats as long as the hot air stays hot.) The heat is generated by a propane burner suspended below the opening of the basket. Once the balloon takes off, the pilot controls the altitude of the balloon, either by using the burner to heat the air and ascend or by using a vent near the top of the balloon to release heated air and descend. The pilot has very little control over where the balloon goes, however—balloons are at the mercy of the winds. The uncertainty over where we will end up is one of the reasons balloonists are attracted to the sport.
In this project we use triple integrals to learn more about hot air balloons. We model the balloon in two pieces. The top of the balloon is modeled by a half sphere of radius $28$ feet. The bottom of the balloon is modeled by a frustum of a cone (think of an ice cream cone with the pointy end cut off). The radius of the large end of the frustum is $28$ feet and the radius of the small end of the frustum is $6$ feet. A graph of our balloon model and a cross-sectional diagram showing the dimensions are shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_05_SP2} src=../../media/CNX_Calc_Figure_15_05_014.jpg
> alt: This figure consists of two parts, a and b. Figure a shows a representation of a hot air balloon in xyz space as a half sphere on top of a frustrum of a cone. Figure b shows the dimensions, namely, the radius of the half sphere is 28 ft, the distance from the bottom to the top of the frustrum is 44 ft, and the diameter of the circle at the top of the frustrum is 12 ft.
> caption: (a) Use a half sphere to model the top part of the balloon and a frustum of a cone to model the bottom part of the balloon. (b) A cross section of the balloon showing its dimensions.

We first want to find the volume of the balloon. If we look at the top part and the bottom part of the balloon separately, we see that they are geometric solids with known volume formulas. However, it is still worthwhile to set up and evaluate the integrals we would need to find the volume. If we calculate the volume using integration, we can use the known volume formulas to check our answers. This will help ensure that we have the integrals set up correctly for the later, more complicated stages of the project.
1. Find the volume of the balloon in two ways.

a. Use triple integrals to calculate the volume. Consider each part of the balloon separately. (Consider using spherical coordinates for the top part and cylindrical coordinates for the bottom part.)
b. Verify the answer using the formulas for the volume of a sphere, $V=\frac{4}{3}\pi {r}^{3},$ and for the volume of a cone, $V=\frac{1}{3}\pi {r}^{2}h.$

In reality, calculating the temperature at a point inside the balloon is a tremendously complicated endeavor. In fact, an entire branch of physics (thermodynamics) is devoted to studying heat and temperature. For the purposes of this project, however, we are going to make some simplifying assumptions about how temperature varies from point to point within the balloon. Assume that just prior to liftoff, the temperature (in degrees Fahrenheit) of the air inside the balloon varies according to the function

${T}_{0}(r,\theta ,z)=\frac{z-r}{10}+210.$  {eq:fs-id1167793937390}

2. What is the average temperature of the air in the balloon just prior to liftoff? (Again, look at each part of the balloon separately, and do not forget to convert the function into spherical coordinates when looking at the top part of the balloon.)

Now the pilot activates the burner for $10$ seconds. This action affects the temperature in a $12$-foot-wide column $20$ feet high, directly above the burner. A cross section of the balloon depicting this column in shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_05_SP3} src=../../media/CNX_Calc_Figure_15_05_015.jpg
> alt: This figure shows the dimensions of the balloon and the hot air, namely, the radius of the half sphere is 28 ft, the distance from the bottom to the top of the frustrum is 44 ft, the diameter of the circle at the top of the frustrum is 12 ft, and the inner column of hot air has height 20 ft and diameter 12 ft.
> caption: Activating the burner heats the air in a $20$-foot-high, $12$-foot-wide column directly above the burner.

Assume that after the pilot activates the burner for $10$ seconds, the temperature of the air in the column described above *increases* according to the formula

$H(r,\theta ,z)=−2z-48.$  {eq:fs-id1167793376255}

Then the temperature of the air in the column is given by

${T}_{1}(r,\theta ,z)=\frac{z-r}{10}+210+(−2z-48),$  {eq:fs-id1167794067545}

while the temperature in the remainder of the balloon is still given by

${T}_{0}(r,\theta ,z)=\frac{z-r}{10}+210.$  {eq:fs-id1167794292164}

3. Find the average temperature of the air in the balloon after the pilot has activated the burner for $10$ seconds.
:::

## Key Concepts {section:key-concepts}
- To evaluate a triple integral in cylindrical coordinates, use the iterated integral

${\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{r={g}_{1}(\theta )}^{r={g}_{2}(\theta )} \;{\displaystyle \int_{z={u}_{1}(r,\theta )}^{z={u}_{2}(r,\theta )} f(r,\theta ,z)}}}r\;dz\;dr\;d\theta .$  {eq:fs-id1167793688560}

- To evaluate a triple integral in spherical coordinates, use the iterated integral

${\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{ρ={g}_{1}(\theta )}^{ρ={g}_{2}(\theta )} \;{\displaystyle \int_{φ={u}_{1}(r,\theta )}^{φ={u}_{2}(r,\theta )} f(ρ,\theta ,φ)}}}{ρ}^{2}\text{sin}\;φ\;dφ\;dρ\;d\theta .$  {eq:fs-id1167794246472}

## Key Equations {section:key-equations}

> TABLE {tab:eip-554} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Triple integral in cylindrical coordinates** | ${\displaystyle \iiint\limits_{B}g(x,y,z)dV}={\displaystyle \iiint\limits_{B}g(r\;\text{cos}\;\theta ,r\;\text{sin}\;\theta ,z)r\;dr\;d\theta \;dz={\displaystyle \iiint\limits_{B}f(r,\theta ,z)}}r\;dr\;d\theta \;dz$ |
| **Triple integral in spherical coordinates** | ${\displaystyle \iiint\limits_{B}f(ρ,\theta ,φ)}{ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta ={\displaystyle \int_{φ=γ}^{φ=ψ} \;{\displaystyle \int_{\theta =\alpha}^{\theta =β} \;{\displaystyle \int_{ρ=a}^{ρ=b} f(ρ,\theta ,φ)}}}{ρ}^{2}\text{sin}\;φ\;dρ\;dφ\;d\theta$ |

##  {section:section-exercises}
In the following exercises, evaluate the triple integrals ${\displaystyle \iiint\limits_{B}f(x,y,z)dV}$ over the solid $B.$

:::exercise {fs-id1167793638867} type= 
PROBLEM:
$f(x,y,z)=z,$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}\le 9,x\ge 0,y\ge 0,0\le z\le 1\}$

> IMAGE {img:fs-id1167793447616} src=../../media/CNX_Calc_Figure_15_05_201.jpg
> alt: A quarter section of a cylinder with height 1 and radius 3.

SOLUTION:
$\frac{9\pi}{8}$
:::

:::exercise {fs-id1167793447646} type= 
PROBLEM:
$f(x,y,z)=x{z}^{2},$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}\le 16,x\ge 0,y\le 0,−1\le z\le 1\}$
:::

:::exercise {fs-id1167793454883} type= 
PROBLEM:
$f(x,y,z)=xy,$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}\le 1,x\ge 0,y\ge 0,x\le y,−1\le z\le 1\}$

> IMAGE {img:fs-id1167793367939} src=../../media/CNX_Calc_Figure_15_05_202.jpg
> alt: A wedge with radius 1, height 1, and angle pi/4.

SOLUTION:
$\frac{1}{8}$
:::

:::exercise {fs-id1167793280426} type= 
PROBLEM:
$f(x,y,z)={x}^{2}+{y}^{2},$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}\le 4,x\ge 0,x\le y,0\le z\le 3\}$
:::

:::exercise {fs-id1167793568631} type= 
PROBLEM:
$f(x,y,z)={e}^{\sqrt{{x}^{2}+{y}^{2}}},$ $B=\{(x,y,z)|1\le {x}^{2}+{y}^{2}\le 4,y\le 0,x\le y\sqrt{3},2\le z\le 3\}$
SOLUTION:
$\frac{\pi {e}^{2}}{6}$
:::

:::exercise {fs-id1167793929921} type= 
PROBLEM:
$f(x,y,z)=\sqrt{{x}^{2}+{y}^{2}},$ $B=\{(x,y,z)|1\le {x}^{2}+{y}^{2}\le 9,y\le 0,0\le z\le 1\}$
:::

:::exercise {fs-id1167793991259} type= 
PROBLEM:
a. Let $B$ be a cylindrical shell with inner radius $a,$ outer radius $b,$ and height $c,$ where $0<a<b$ and $c>0.$ Assume that a function $F$ defined on $B$ can be expressed in cylindrical coordinates as $F(x,y,z)=f(r)+h(z),$ where $f$ and $h$ are differentiable functions. If ${\displaystyle \int_{a}^{b} \tilde{f}(r)dr=0}$ and $\tilde{h}(0)=0,$ where $\tilde{f}$ and $\tilde{h}$ are antiderivatives of $f$ and $h,$ respectively, show that

${\displaystyle \iiint\limits_{B}F(x,y,z)dV}=2\pi c(b\tilde{f}(b)-a\tilde{f}(a))+\pi ({b}^{2}-{a}^{2})\tilde{h}(c).$  {eq:fs-id1167794058772}

b. Use the previous result to show that ${\displaystyle \iiint\limits_{B}(z+\text{sin}\sqrt{{x}^{2}+{y}^{2}})}dx\;dy\;dz=6{\pi}^{2}(\pi -2),$ where $B$ is a cylindrical shell with inner radius $\pi ,$ outer radius $2\pi ,$ and height $2.$
:::

:::exercise {fs-id1167793941346} type= 
PROBLEM:
a. Let $B$ be a cylindrical shell with inner radius $a,$ outer radius $b,$ and height $c,$ where $0<a<b$ and $c>0.$ Assume that a function $F$ defined on $B$ can be expressed in cylindrical coordinates as $F(x,y,z)=f(r)g(\theta )h(z),$ where $f,g,\;\text{and}\;h$ are differentiable functions. If ${\displaystyle \int_{a}^{b} \tilde{f}(r)dr=0},$ where $\tilde{f}$ is an antiderivative of $f,$ show that

${\displaystyle \iiint\limits_{B}F(x,y,z)dV}=[b\tilde{f}(b)-a\tilde{f}(a)]\;[\tilde{g}(2\pi )-\tilde{g}(0)]\;[\tilde{h}(c)-\tilde{h}(0)],$  {eq:fs-id1167793566774}

where $\tilde{g}$ and $\tilde{h}$ are antiderivatives of $g$ and $h,$ respectively.
b. Use the previous result to show that ${\displaystyle \iiint\limits_{B}z\;\text{sin}\sqrt{{x}^{2}+{y}^{2}}}dx\;dy\;dz=−12{\pi}^{2},$ where $B$ is a cylindrical shell with inner radius $\pi ,$ outer radius $2\pi ,$ and height $2.$
:::
In the following exercises, the boundaries of the solid $E$ are given in cylindrical coordinates. Let $f(r,\theta ,z)$ be the corresponding function in cylindrical coordinates.
a. Define the region in cylindrical coordinates.
b. Convert the integral $\iiint\limits_{Ε}g(x,y,z)dV$ to cylindrical coordinates.

:::exercise {fs-id1167793590432} type= 
PROBLEM:
$E$ is inside the right circular cylinder $r=4\;\text{sin}\;\theta ,$ above the $r\theta$-plane, and inside the sphere ${r}^{2}+{z}^{2}=16.$
SOLUTION:
a. $E=\{(r,\theta ,z)|0\le \theta \le \pi ,0\le r\le 4\;\text{sin}\;\theta ,0\le z\le \sqrt{16-{r}^{2}}\};$ b. ${\displaystyle \int_{0}^{\pi} \;{\displaystyle \int_{0}^{4\;\text{sin}\;\theta} \;{\displaystyle \int_{0}^{\sqrt{16-{r}^{2}}} f(r,\theta ,z)r\;dz\;dr\;d\theta}}}$
:::

:::exercise {fs-id1167793619924} type= 
PROBLEM:
$E$ is inside the right circular cylinder $r=\text{cos}\;\theta ,$ above the $r\theta$-plane, and inside the sphere ${r}^{2}+{z}^{2}=9.$
:::

:::exercise {fs-id1167793409904} type= 
PROBLEM:
$E$ is located in the first octant and is bounded by the circular paraboloid $z=9-3{r}^{2},$ the cylinder $r=\sqrt{3},$ and the plane $r(\text{cos}\;\theta +\text{sin}\;\theta )=20-z.$
SOLUTION:
a. $E=\{(r,\theta ,z)|0\le \theta \le \frac{\pi}{2},0\le r\le \sqrt{3},9-3{r}^{2}\le z\le 20-r(\text{cos}\;\theta +\text{sin}\;\theta )\};$ b. ${\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{\sqrt{3}} \;{\displaystyle \int_{9-3{r}^{2}}^{20-r(\text{cos}\;\theta +\text{sin}\;\theta )} f(r,\theta ,z)}}}r\;dz\;dr\;d\theta$
:::

:::exercise {fs-id1167793508031} type= 
PROBLEM:
$E$ is located in the first octant outside the circular paraboloid $z=10-2{r}^{2}$ and inside the cylinder $r=\sqrt{5}$ and is bounded also by the planes $z=20$ and $\theta =\frac{\pi}{4}.$
:::
In the following exercises, the function $g$ and region $E$ are given in rectangular coordinates.
a. Express the region $Ε$ and the function $g$ in cylindrical coordinates. Let $f(r,\theta ,z)$ be the corresponding function in cylindrical coordinates.
b. Convert the integral ${\displaystyle \iiint\limits_{E}g(x,y,z)}dV$ to cylindrical coordinates and evaluate it.

:::exercise {fs-id1167793358337} type= 
PROBLEM:
$g(x,y,z)=\frac{1}{x+3},$ $E=\{(x,y,z)|0\le {x}^{2}+{y}^{2}\le 9,x\ge 0,y\ge 0,0\le z\le x+3\}$
SOLUTION:
a. $E=\{(r,\theta ,z)|0\le r\le 3,0\le \theta \le \frac{\pi}{2},0\le z\le r\;\text{cos}\;\theta +3\},$ $f(r,\theta ,z)=\frac{1}{r\;\text{cos}\;\theta +3};$ b. ${\displaystyle \int_{0}^{3} \;{\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{r\;\text{cos}\;\theta +3} \frac{r}{r\;\text{cos}\;\theta +3}dz\;d\theta \;dr=\frac{9\pi}{4}}}}$
:::

:::exercise {fs-id1167793618161} type= 
PROBLEM:
$g(x,y,z)={x}^{2}+{y}^{2},$ $E=\{(x,y,z)|0\le {x}^{2}+{y}^{2}\le 4,y\ge 0,0\le z\le 3-x\}$
:::

:::exercise {fs-id1167793637679} type= 
PROBLEM:
$g(x,y,z)=x,$ $E=\{(x,y,z)|1\le {y}^{2}+{z}^{2}\le 9,0\le x\le 9-{y}^{2}-{z}^{2}\}$
SOLUTION:
a. $y=r\;\text{cos}\;\theta ,z=r\;\text{sin}\;\theta ,x=z,$ $E=\{(r,\theta ,z)|1\le r\le 3,0\le \theta \le 2\pi ,0\le z\le 9-{r}^{2}\},f(r,\theta ,z)=z;$ b. ${\displaystyle \int_{1}^{3} \;{\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{9-{r}^{2}} zr\;dz\;d\theta \;dr=\frac{256\pi}{3}}}}$
:::

:::exercise {fs-id1167793312490} type= 
PROBLEM:
$g(x,y,z)=y,$ $E=\{(x,y,z)|1\le {x}^{2}+{z}^{2}\le 9,0\le y\le 9-{x}^{2}-{z}^{2}\}$
:::
In the following exercises, find the volume of the solid $E$ whose boundaries are given in rectangular coordinates.

:::exercise {fs-id1167793638544} type= 
PROBLEM:
$E$ is above the $xy$-plane, inside the cylinder ${x}^{2}+{y}^{2}=1,$ and below the plane $z=1.$
SOLUTION:
$\pi$
:::

:::exercise {fs-id1167793626951} type= 
PROBLEM:
$E$ is below the plane $z=1$ and inside the paraboloid $z={x}^{2}+{y}^{2}.$
:::

:::exercise {fs-id1167793584551} type= 
PROBLEM:
$E$ is bounded by the circular cone $z=\sqrt{{x}^{2}+{y}^{2}}$ and $z=1.$
SOLUTION:
$\frac{\pi}{3}$
:::

:::exercise {fs-id1167793937971} type= 
PROBLEM:
$E$ is located above the $xy$-plane, below $z=1,$ outside the one-sheeted hyperboloid ${x}^{2}+{y}^{2}-{z}^{2}=1,$ and inside the cylinder ${x}^{2}+{y}^{2}=2.$
:::

:::exercise {fs-id1167793495341} type= 
PROBLEM:
$E$ is located inside the cylinder ${x}^{2}+{y}^{2}=1$ and between the circular paraboloids $z=1-{x}^{2}-{y}^{2}$ and $z={x}^{2}+{y}^{2}.$
SOLUTION:
$\frac{\pi}{4}$
:::

:::exercise {fs-id1167793368870} type= 
PROBLEM:
$E$ is located inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=1,$ above the $xy$-plane, and inside the circular cone $z=\sqrt{{x}^{2}+{y}^{2}}.$
:::

:::exercise {fs-id1167793275071} type= 
PROBLEM:
$E$ is located inside the circular cone ${x}^{2}+{y}^{2}={(z-1)}^{2}$ and between the planes $z=0$ and $z=2.$
SOLUTION:
$\frac{2\pi}{3}$
:::

:::exercise {fs-id1167793515908} type= 
PROBLEM:
$E$ is located inside the cylinder ${x}^{2}+{y}^{2}=1$, above the circular cone $z=1-\sqrt{{x}^{2}+{y}^{2}}$, and below the circular paraboloid  $z=1+{x}^{2}+{y}^{2}$, and between the planes $z=0$ and $z=2$.
:::

:::exercise {fs-id1167793495449} type= 
PROBLEM:
**[T]** Use a computer algebra system (CAS) to graph the solid whose volume is given by the iterated integral in cylindrical coordinates ${\displaystyle \int_{\text{−}\pi \text{/}2}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{{r}^{2}}^{r} r\;dz\;dr\;d\theta}}}.$ Find the volume $V$ of the solid. Round your answer to four decimal places.
SOLUTION:
$V=\frac{\pi}{12}\approx 0.2618$

> IMAGE {img:fs-id1167793930810} src=../../media/CNX_Calc_Figure_15_05_203.jpg
> alt: A quarter section of an ellipsoid with width 2, height 1, and depth 1.

:::

:::exercise {fs-id1167793930824} type= 
PROBLEM:
**[T]** Use a CAS to graph the solid whose volume is given by the iterated integral in cylindrical coordinates ${\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{{r}^{4}}^{r} r\;dz\;dr\;d\theta}}}.$ Find the volume $V$ of the solid Round your answer to four decimal places.
:::

:::exercise {fs-id1167793378476} type= 
PROBLEM:
Convert the integral ${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}\sqrt{1-{y}^{2}}}^{\sqrt{1-{y}^{2}}} \;{\displaystyle \int_{{x}^{2}+{y}^{2}}^{\sqrt{{x}^{2}+{y}^{2}}} xz\;dz\;dx\;dy}}}$ into an integral in cylindrical coordinates.
SOLUTION:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{\pi} \;{\displaystyle \int_{{r}^{2}}^{r} z{r}^{2}\text{cos}\;\theta}}}\;dz\;d\theta \;dr$
:::

:::exercise {fs-id1167793929630} type= 
PROBLEM:
Convert the integral ${\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{y} \;{\displaystyle \int_{0}^{1} (xy+z)}}}dz\;dx\;dy$ into an integral in cylindrical coordinates.
:::
In the following exercises, evaluate the triple integral ${\displaystyle \iiint\limits_{B}f(x,y,z)dV}$ over the solid $B.$

:::exercise {fs-id1167793929144} type= 
PROBLEM:
$f(x,y,z)=1,$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}+{z}^{2}\le 90,z\ge 0\}$

> IMAGE {img:fs-id1167793372524} src=../../media/CNX_Calc_Figure_15_05_205.jpg
> alt: A filled-in half-sphere with radius 3 times the square root of 10.

SOLUTION:
$180\pi \sqrt{10}$
:::

:::exercise {fs-id1167793570708} type= 
PROBLEM:
$f(x,y,z)=1-\sqrt{{x}^{2}+{y}^{2}+{z}^{2}},$ $B=\{(x,y,z)|{x}^{2}+{y}^{2}+{z}^{2}\le 9,y\ge 0,z\ge 0\}$

> IMAGE {img:fs-id1167793477508} src=../../media/CNX_Calc_Figure_15_05_206.jpg
> alt: A quarter section of an ovoid with height 8, width 8 and length 18.

:::

:::exercise {fs-id1167793477539} type= 
PROBLEM:
$f(x,y,z)=\sqrt{{x}^{2}+{y}^{2}},$ $B$ is bounded above by the half-sphere ${x}^{2}+{y}^{2}+{z}^{2}=9$ with $z\ge 0$ and below by the cone ${z}^{2}={x}^{2}+{y}^{2}.$
SOLUTION:
$\frac{81\pi (\pi -2)}{16}$
:::

:::exercise {fs-id1167793380047} type= 
PROBLEM:
$f(x,y,z)=z,$ $B$ is bounded above by the half-sphere ${x}^{2}+{y}^{2}+{z}^{2}=16$ with $z\ge 0$ and below by the cone ${z}^{2}={x}^{2}+{y}^{2}.$
:::

:::exercise {fs-id1167793911884} type= 
PROBLEM:
Show that if $F(ρ,\theta ,φ)=f(ρ)g(\theta )h(φ)$ is a continuous function on the spherical box $B=\{(ρ,\theta ,φ)|a\le ρ\le b,\alpha \le \theta \le β,γ\le φ\le ψ\},$ then

${\displaystyle \iiint\limits_{B}F\;dV}=({\displaystyle \int_{a}^{b} {ρ}^{2}f(ρ)dr})({\displaystyle \int_{\alpha}^{β} g(\theta )d\theta})({\displaystyle \int_{γ}^{ψ} h(φ)\text{sin}\;φ\;dφ}).$  {eq:fs-id1167793221700}

:::

:::exercise {fs-id1167793957757} type= 
PROBLEM:
a. A function $F$ is said to have spherical symmetry if it depends on the distance to the origin only, that is, it can be expressed in spherical coordinates as $F(x,y,z)=f(ρ),$ where $ρ=\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}.$ Show that

${\displaystyle \iiint\limits_{B}F(x,y,z)dV}=2\pi {\displaystyle \int_{a}^{b} {ρ}^{2}f(ρ)dρ},$  {eq:fs-id1167793372403}

where $B$ is the region between the upper concentric hemispheres of radii $a$ and $b$ centered at the origin, with $0<a<b$ and $F$ a spherical function defined on $B.$
b. Use the previous result to show that ${\displaystyle \iiint\limits_{B}({x}^{2}+{y}^{2}+{z}^{2})\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}\;dV}=21\pi ,$ where

$B=\{(x,y,z)|1\le {x}^{2}+{y}^{2}+{z}^{2}\le 2,z\ge 0\}.$  {eq:fs-id1167793421255}

:::

:::exercise {fs-id1167794024252} type= 
PROBLEM:
a. Let $B$ be the region between the upper concentric hemispheres of radii *a* and *b* centered at the origin and situated in the first octant, where $0<a<b.$ Consider *F* a function defined on *B* whose form in spherical coordinates $(ρ,\theta ,φ)$ is $F(x,y,z)=f(ρ)\text{cos}\;φ.$ Show that if $g(a)=g(b)=0$ and ${\displaystyle \int_{a}^{b} h(ρ)dρ=0},$ then

${\displaystyle \iiint\limits_{B}F(x,y,z)dV}=\frac{{\pi}^{2}}{4}[ah(a)-bh(b)],$  {eq:fs-id1167793245644}

where $g$ is an antiderivative of $f$ and $h$ is an antiderivative of $g.$
b. Use the previous result to show that ${\displaystyle \iiint\limits_{B}\frac{z\;\text{cos}\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}dV}=\frac{3{\pi}^{2}}{2},$ where $B$ is the region between the upper concentric hemispheres of radii $\pi$ and $2\pi$ centered at the origin and situated in the first octant.
:::
In the following exercises, the function $g$ and region $E$ are given in rectangular coordinates.
a. Express the region $E$ and the function $g$ in spherical coordinates. Let $f(ρ,\theta ,φ)$ be the corresponding function in spherical coordinates
b. Convert the integral ${\displaystyle \iiint\limits_{E}g(x,y,z)}dV$ to spherical coordinates and evaluate it.

:::exercise {fs-id1167793478913} type= 
PROBLEM:
$g(x,y,z)=z;$ $E=\{(x,y,z)|0\le {x}^{2}+{y}^{2}+{z}^{2}\le 1,z\ge 0\}$
:::

:::exercise {fs-id1167793383399} type= 
PROBLEM:
$g(x,y,z)=x+y;$ $E=\{(x,y,z)|1\le {x}^{2}+{y}^{2}+{z}^{2}\le 4,z\ge 0,y\ge 0\}$
SOLUTION:
a. $f(ρ,\theta ,φ)=ρ\;\text{sin}\;φ(\text{cos}\;\theta +\text{sin}\;\theta ),$ $E=\{(ρ,\theta ,φ)|1\le ρ\le 2,0\le \theta \le \pi ,0\le φ\le \frac{\pi}{2}\};$ b. $\int_{0}^{\pi} \;\int_{0}^{\pi \text{/}2} \;\int_{1}^{2} {ρ}^{3}{\text{sin}}^{2}\;φ(\text{cos}\theta +\text{sin}\theta )=\frac{15\pi}{8}$
:::

:::exercise {fs-id1167793395451} type= 
PROBLEM:
$g(x,y,z)=2xy;$ $E=\{(x,y,z)|\sqrt{{x}^{2}+{y}^{2}}\le z\le \sqrt{1-{x}^{2}-{y}^{2}},x\ge 0,y\ge 0\}$
:::

:::exercise {fs-id1167794171529} type= 
PROBLEM:
$g(x,y,z)=z;$ $E=\{(x,y,z)|{x}^{2}+{y}^{2}+{z}^{2}-2z\le 0,\sqrt{{x}^{2}+{y}^{2}}\le z\}$
SOLUTION:
a. $f(ρ,\theta ,φ)=ρ\;\text{cos}\;φ;$ $E=\{(ρ,\theta ,φ)|0\le ρ\le 2\;\text{cos}\;φ,0\le \theta \le 2\pi ,0\le φ\le \frac{\pi}{4}\};$ b. ${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{0}^{\pi \text{/}4} \;{\displaystyle \int_{0}^{2\;\text{cos}\;φ} {ρ}^{3}\text{sin}\;φ}}}\text{cos}\;φ\;dρ\;dφ\;d\theta =\frac{7\pi}{6}$
:::
In the following exercises, find the volume of the solid $E$ whose boundaries are given in rectangular coordinates.

:::exercise {fs-id1167793925196} type= 
PROBLEM:
$E=\{(x,y,z)|\sqrt{{x}^{2}+{y}^{2}}\le z\le \sqrt{16-{x}^{2}-{y}^{2}},x\ge 0,y\ge 0\}$
:::

:::exercise {fs-id1167793639916} type= 
PROBLEM:
$E=\{(x,y,z)|{x}^{2}+{y}^{2}+{z}^{2}-2z\le 0,\sqrt{{x}^{2}+{y}^{2}}\le z\}$
SOLUTION:
$\pi$
:::

:::exercise {fs-id1167793638423} type= 
PROBLEM:
Use spherical coordinates to find the volume of the solid situated inside the sphere $ρ=1$ and outside the sphere $ρ=\text{cos}\;φ,$ with $φ\in [0,\frac{\pi}{2}].$
:::

:::exercise {fs-id1167794054134} type= 
PROBLEM:
Use spherical coordinates to find the volume of the ball $ρ\le 3$ that is situated between the cones $φ=\frac{\pi}{4}\;\text{and}\;φ=\frac{\pi}{3}.$
SOLUTION:
$9\pi (\sqrt{2}-1)$
:::

:::exercise {fs-id1167793502315} type= 
PROBLEM:
Convert the integral ${\displaystyle \int_{−4}^{4} \;{\displaystyle \int_{\text{−}\sqrt{16-{y}^{2}}}^{\sqrt{16-{y}^{2}}} \;{\displaystyle \int_{\text{−}\sqrt{16-{x}^{2}-{y}^{2}}}^{\sqrt{16-{x}^{2}-{y}^{2}}} ({x}^{2}+{y}^{2}+{z}^{2})}}}dz\;dx\;dy$ into an integral in spherical coordinates.
:::

:::exercise {fs-id1167793244493} type= 
PROBLEM:
Convert the integral ${\displaystyle \int_{0}^{4} \;{\displaystyle \int_{0}^{\sqrt{16-{x}^{2}}} \;{\displaystyle \int_{\text{−}\sqrt{16-{x}^{2}-{y}^{2}}}^{\sqrt{16-{x}^{2}-{y}^{2}}} {({x}^{2}+{y}^{2}+{z}^{2})}^{2}}}}dz\;dy\;dx$ into an integral in spherical coordinates.
SOLUTION:
${\displaystyle \int_{0}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{\pi} \;{\displaystyle \int_{0}^{4} {ρ}^{6}\text{sin}\;φ}}}\;dρ\;dφ\;d\theta$
:::

:::exercise {fs-id1167793938014} type= 
PROBLEM:
Convert the integral $\int_{−2\sqrt{2}}^{2\sqrt{2}} \;\int_{-\sqrt{8-{x}^{2}}}^{\sqrt{8-{x}^{2}}} \;\int_{\sqrt{{x}^{2}+{y}^{2}}}^{\sqrt{16-{x}^{2}-{y}^{2}}} dz\;dy\;dx$ into an integral in spherical coordinates and evaluate it.
:::

:::exercise {fs-id1167794094549} type= 
PROBLEM:
**[T]** Use a CAS to graph the solid whose volume is given by the iterated integral in spherical coordinates ${\displaystyle \int_{\pi \text{/}2}^{\pi} \;{\displaystyle \int_{5\pi \text{/}6}^{\pi \text{/}6} \;{\displaystyle \int_{0}^{2} {ρ}^{2}\text{sin}\;φ}}}\;dρ\;dφ\;d\theta .$ Find the volume $V$ of the solid. Round your answer to three decimal places.
SOLUTION:
$V=\frac{4\pi \sqrt{3}}{3}\approx 7.255$

> IMAGE {img:fs-id1167793776357} src=../../media/CNX_Calc_Figure_15_05_208.jpg
> alt: A quarter section of an ellipsoid with width 2, height 2, and depth 1

:::

:::exercise {fs-id1167793776371} type= 
PROBLEM:
**[T]** Use a CAS to graph the solid whose volume is given by the iterated integral in spherical coordinates as ${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{\pi \text{/}4}^{3\pi \text{/}4} \;{\displaystyle \int_{0}^{1} {ρ}^{2}\text{sin}\;φ}}}\;dρ\;dφ\;d\theta .$ Find the volume $V$ of the solid. Round your answer to three decimal places.
:::

:::exercise {fs-id1167794222798} type= 
PROBLEM:
**[T]** Use a CAS to evaluate the integral ${\displaystyle \iiint\limits_{E}({x}^{2}+{y}^{2})}dV$ where $E$ lies above the paraboloid $z={x}^{2}+{y}^{2}$ and below the plane $z=3y.$
SOLUTION:
$\frac{243\pi}{32}$
:::

:::exercise {fs-id1167793300366} type= 
PROBLEM:
**[T]**
a. Evaluate the integral ${\displaystyle \iiint\limits_{E}{e}^{\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}}dV},$ where $E$ is bounded by the spheres $4{x}^{2}+4{y}^{2}+4{z}^{2}=1$ and ${x}^{2}+{y}^{2}+{z}^{2}=1.$
b. Use a CAS to find an approximation of the previous integral. Round your answer to two decimal places.
:::

:::exercise {fs-id1167793228964} type= 
PROBLEM:
Express the volume of the solid inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=16$ and outside the cylinder ${x}^{2}+{y}^{2}=4$ as triple integrals in cylindrical coordinates and spherical coordinates.
SOLUTION:
${\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{2}^{4} \;{\displaystyle \int_{\text{−}\sqrt{16-{r}^{2}}}^{\sqrt{16-{r}^{2}}} r\;dz\;dr\;d\theta}}};$ ${\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6} \;{\displaystyle \int_{0}^{2\pi} \;{\displaystyle \int_{2\;\text{csc}\;φ}^{4} {ρ}^{2}\text{sin}\;φ\;dρ\;d\theta \;dφ}}}$
:::

:::exercise {fs-id1167793921619} type= 
PROBLEM:
Express the volume of the solid inside the sphere ${x}^{2}+{y}^{2}+{z}^{2}=16$ and outside the cylinder ${x}^{2}+{y}^{2}=4$ that is located in the first octant as triple integrals in cylindrical coordinates and spherical coordinates.
:::

:::exercise {fs-id1167794336023} type= 
PROBLEM:
The power emitted by an antenna has a power density per unit volume given in spherical coordinates by
$p(ρ,\theta ,φ)=\frac{{P}_{0}}{{ρ}^{2}}{\text{cos}}^{2}\theta \;{\text{sin}}^{4}φ,$where ${P}_{0}$ is a constant with units in watts. The total power within a sphere $B$ of radius $r$ meters is defined as $P={\displaystyle \iiint\limits_{B}p(ρ,\theta ,φ)}dV.$ Find the total power $P$ within a sphere of radius 20 meters.
SOLUTION:
$P=\frac{64{P}_{0}\pi}{3}$ watts
:::

:::exercise {fs-id1167794122101} type= 
PROBLEM:
Use the preceding exercise to find the total power within a sphere $B$ of radius 5 meters when the power density per unit volume is given by $p(ρ,\theta ,φ)=\frac{30}{{ρ}^{2}}{\text{cos}}^{2}\theta \;{\text{sin}}^{4}φ.$
:::

:::exercise {fs-id1167793378232} type= 
PROBLEM:
A charge cloud contained in a sphere $B$ of radius *r* centimeters centered at the origin has its charge density given by $q(x,y,z)=k\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}\frac{μ\;\text{C}}{{\text{cm}}^{3}},$ where $k>0.$ The total charge contained in $B$ is given by $Q={\displaystyle \iiint\limits_{B}q(x,y,z)}dV.$ Find the total charge $Q.$
SOLUTION:
$Q=k{r}^{4}\pi μC$
:::

:::exercise {fs-id1167794067783} type= 
PROBLEM:
Use the preceding exercise to find the total charge cloud contained in the unit sphere if the charge density is $q(x,y,z)=20\sqrt{{x}^{2}+{y}^{2}+{z}^{2}}\frac{μ\;\text{C}}{{\text{cm}}^{3}}.$
:::

## Glossary
- {def} **triple integral in cylindrical coordinates**: the limit of a triple Riemann sum, provided the following limit exists:

$\lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({r}_{ijk}^{*},{\theta}_{ijk}^{*},{z}_{ijk}^{*}){r}_{ijk}^{*}\text{Δ}r\text{Δ}\theta \text{Δ}z}}}$  {eq:fs-id1167793460784}

- {def} **triple integral in spherical coordinates**: the limit of a triple Riemann sum, provided the following limit exists:

$\lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({ρ}_{ijk}^{*},{\theta}_{ijk}^{*},{φ}_{ijk}^{*}){({ρ}_{ijk}^{*})}^{2}\text{sin}\;φ\text{Δ}ρ\text{Δ}\theta \text{Δ}φ}}}$  {eq:fs-id1167793455250}


# Triple Integrals

## Learning Objectives {section:learning-objectives}
- Recognize when a function of three variables is integrable over a rectangular box.
- Evaluate a triple integral by expressing it as an iterated integral.
- Recognize when a function of three variables is integrable over a closed and bounded region.
- Simplify a calculation by changing the order of integration of a triple integral.
- Calculate the average value of a function of three variables.

In [Double Integrals over Rectangular Regions](module:m53949), we discussed the double integral of a function $f(x,y)$ of two variables over a rectangular region in the plane. In this section we define the triple integral of a function $f(x,y,z)$ of three variables over a rectangular solid box in space, ${\mathbb{R}}^{3}.$ Later in this section we extend the definition to more general regions in ${\mathbb{R}}^{3}.$

## Integrable Functions of Three Variables
We can define a rectangular box $B$ in ${\mathbb{R}}^{3}$ as $B=\{(x,y,z)|a\le x\le b,c\le y\le d,e\le z\le f\}.$ We follow a similar procedure to what we did in [Double Integrals over Rectangular Regions](module:m53949). We divide the interval $[a,b]$ into $l$ subintervals $[{x}_{i-1},{x}_{i}]$ of equal length $\text{Δ}x=\frac{b-a}{l},$ divide the interval $[c,d]$ into $m$ subintervals $[{y}_{j-1},{y}_{j}]$ of equal length $\text{Δ}y=\frac{d-c}{m},$ and divide the interval $[e,f]$ into $n$ subintervals $[{z}_{k-1},{z}_{k}]$ of equal length $\text{Δ}z=\frac{f-e}{n}.$ Then the rectangular box $B$ is subdivided into $lmn$ subboxes ${B}_{ijk}=[{x}_{i-1},{x}_{i}]\;\times \;[{y}_{j-1},{y}_{j}]\;\times \;[{z}_{k-1},{z}_{k}],$ as shown in [ref:CNX_Calc_Figure_15_04_001].

> FIGURE {fig:CNX_Calc_Figure_15_04_001} src=../../media/CNX_Calc_Figure_15_04_001.jpg
> alt: In x y z space, there is a box B with a subbox Bijk with sides of length Delta x, Delta y, and Delta z.
> caption: A rectangular box in ${\mathbb{R}}^{3}$ divided into subboxes by planes parallel to the coordinate planes.

For each $i,j,\;\text{and}\;k,$ consider a sample point $({x}_{ijk}^{*},{y}_{ijk}^{*},{z}_{ijk}^{*})$ in each sub-box ${B}_{ijk}.$ We see that its volume is $\text{Δ}V=\text{Δ}x\text{Δ}y\text{Δ}z.$ Form the triple Riemann sum

${\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({x}_{ijk}^{*},{y}_{ijk}^{*},{z}_{ijk}^{*})\text{Δ}x\text{Δ}y\text{Δ}z}}}.$  {eq:fs-id1167794329456}

We define the triple integral in terms of the limit of a triple Riemann sum, as we did for the double integral in terms of a double Riemann sum.

:::note [definition] Definition
The {term:triple integral} of a function $f(x,y,z)$ over a rectangular box $B$ is defined as

$$ \lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({x}_{ijk}^{*},{y}_{ijk}^{*},{z}_{ijk}^{*})\text{Δ}x\text{Δ}y\text{Δ}z={\displaystyle \iiint\limits_{B}f(x,y,z)dV}}}} $$  {eq:fs-id1167794023665}

if this limit exists.
:::
When the triple integral exists on $B,$ the function $f(x,y,z)$ is said to be integrable on $B.$ Also, the triple integral exists if $f(x,y,z)$ is continuous on $B.$ Therefore, we will use continuous functions for our examples. However, continuity is sufficient but not necessary; in other words, $f$ is bounded on $B$ and continuous except possibly on the boundary of $B.$ The sample point $({x}_{ijk}^{*},{y}_{ijk}^{*},{z}_{ijk}^{*})$ can be any point in the rectangular sub-box ${B}_{ijk}$ and all the properties of a double integral apply to a triple integral. Just as the double integral has many practical applications, the triple integral also has many applications, which we discuss in later sections.
Now that we have developed the concept of the triple integral, we need to know how to compute it. Just as in the case of the double integral, we can have an iterated triple integral, and consequently, a version of {index:Fubini’s thereom} for triple integrals exists.

:::note [theorem] Fubini’s Theorem for Triple Integrals
If $f(x,y,z)$ is continuous on a rectangular box $B=[a,b]\;\times \;[c,d]\;\times \;[r,s],$ then

${\displaystyle \iiint\limits_{B}f(x,y,z)dV}={\displaystyle \int_{r}^{s} \;{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y,z)dx\;dy\;dz}}}.$  {eq:fs-id1167794037474}

This integral is also equal to any of the other five possible orderings for the iterated triple integral.
:::
For $a,b,c,d,e,$ and $f$ real numbers, the iterated triple integral can be expressed in six different orderings:

$\begin{array}{rl}{\displaystyle \int_{r}^{s} \;{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y,z)dx\;dy\;dz}}} & ={\displaystyle \int_{r}^{s} ({\displaystyle \int_{c}^{d} ({\displaystyle \int_{a}^{b} f(x,y,z)dx)dy)dz}}}={\displaystyle \int_{c}^{d} ({\displaystyle \int_{r}^{s} ({\displaystyle \int_{a}^{b} f(x,y,z)dx)dz)dy}}} \\ & ={\displaystyle \int_{a}^{b} ({\displaystyle \int_{r}^{s} ({\displaystyle \int_{c}^{d} f(x,y,z)dy)dz)dx}}}={\displaystyle \int_{r}^{s} ({\displaystyle \int_{a}^{b} ({\displaystyle \int_{c}^{d} f(x,y,z)dy)dx)dz}}} \\ & ={\displaystyle \int_{c}^{e} ({\displaystyle \int_{a}^{b} ({\displaystyle \int_{r}^{s} f(x,y,z)dz)dx)dy}}}={\displaystyle \int_{a}^{b} ({\displaystyle \int_{c}^{e} ({\displaystyle \int_{r}^{s} f(x,y,z)dz)dy)dx}}}.\end{array}$  {eq:fs-id1167794072103}

For a rectangular box, the order of integration does not make any significant difference in the level of difficulty in computation. We compute triple integrals using Fubini’s Theorem rather than using the Riemann sum definition. We follow the order of integration in the same way as we did for double integrals (that is, from inside to outside).

:::example {ex:fs-id1167793897440} Evaluating a Triple Integral

:::exercise {fs-id1167793537973} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=2}^{y=4}{\displaystyle \int_{x=−1}^{x=5}(x+y{z}^{2})dx\;dy\;dz}}}.$
SOLUTION:
The order of integration is specified in the problem, so integrate with respect to $x$ first, then *y*, and then $z.$

$\begin{array}{llll} \\ \\ \\ \\ \;{\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=2}^{y=4}{\displaystyle \int_{x=−1}^{x=5}(x+y{z}^{2})dx\;dy\;dz}}} & & & \\ ={\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=2}^{y=4}[{\frac{{x}^{2}}{2}+xy{z}^{2}|}_{x=−1}^{x=5}]dy\;dz}} & & & \text{Integrate with respect to}\;x. \\ ={\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=2}^{y=4}[12+6y{z}^{2}]dy\;dz}} & & & \text{Evaluate.} \\ ={\displaystyle \int_{z=0}^{z=1}[{12y+6\frac{{y}^{2}}{2}{z}^{2}|}_{y=2}^{y=4}]dz} & & & \text{Integrate with respect to}\;y. \\ ={\displaystyle \int_{z=0}^{z=1}[24+36{z}^{2}]dz} & & & \text{Evaluate.} \\ ={[24z+36\frac{{z}^{3}}{3}]}_{z=0}^{z=1}=36. & & & \text{Integrate with respect to}\;z.\end{array}$  {eq:fs-id1167793921282}

:::
:::

:::example {ex:fs-id1167794117648} Evaluating a Triple Integral

:::exercise {fs-id1167793581492} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \iiint\limits_{B}{x}^{2}yz}\;dV$ where $B=\{(x,y,z)|-2\le x\le 1,0\le y\le 3,1\le z\le 5\}$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_04_002} src=../../media/CNX_Calc_Figure_15_04_002.jpg
> alt: In x y z space, there is a box given with corners (1, 0, 5), (1, 0, 1), (1, 3, 1), (1, 3, 5), (negative 2, 0, 5), (negative 2, 0, 1), (negative 2, 3, 1), and (negative 2, 3, 5).
> caption: Evaluating a triple integral over a given rectangular box.

SOLUTION:
The order is not specified, but we can use the iterated integral in any order without changing the level of difficulty. Choose, say, to integrate *y* first, then *x*, and then *z*.
$\begin{array}{rl}{\displaystyle \iiint\limits_{B}{x}^{2}yz}\;dV & ={\displaystyle \int_{1}^{5} \;{\displaystyle \int_{−2}^{1} \;{\displaystyle \int_{0}^{3} [{x}^{2}yz]}}}dy\;dx\;dz={\displaystyle \int_{1}^{5} \;{\displaystyle \int_{−2}^{1} [{{x}^{2}\frac{{y}^{2}}{2}z|}_{0}^{3}]}}dx\;dz \\ & ={\displaystyle \int_{1}^{5} \;{\displaystyle \int_{−2}^{1} \frac{9}{2}}}{x}^{2}z\;dx\;dz={\displaystyle \int_{1}^{5} [{\frac{9}{2}\frac{{x}^{3}}{3}z|}_{−2}^{1}]}dz={\displaystyle \int_{1}^{5} \frac{27}{2}z\;dz}={\frac{27}{2}\frac{{z}^{2}}{2}|}_{1}^{5}=162.\end{array}$
Now try to integrate in a different order just to see that we get the same answer. Choose to integrate with respect to $x$ first, then $z,$ and then $y.$

$\begin{array}{rl}{\displaystyle \iiint\limits_{B}{x}^{2}yz}\;dV & ={\displaystyle \int_{0}^{3} \;{\displaystyle \int_{1}^{5} \;{\displaystyle \int_{−2}^{1} [{x}^{2}yz]}}}dx\;dz\;dy={\displaystyle \int_{0}^{3} \;{\displaystyle \int_{1}^{5} [{\frac{{x}^{3}}{3}yz|}_{−2}^{1}]}}dz\;dy \\ & ={\displaystyle \int_{0}^{3} \;{\displaystyle \int_{1}^{5} 3yz}}\;dz\;dy={\displaystyle \int_{0}^{3} [{3y\frac{{z}^{2}}{2}|}_{1}^{5}]}dy={\displaystyle \int_{0}^{3} 36y\;dy}={36\frac{{y}^{2}}{2}|}_{0}^{3}=18(9-0)=162.\end{array}$  {eq:fs-id1167794037557}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794064017} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \iiint\limits_{B}z\;\text{sin}\;x\;\text{cos}\;y}\;dV$ where $B=\{(x,y,z)|0\le x\le \pi ,\frac{3\pi}{2}\le y\le 2\pi ,1\le z\le 3\}.$
SOLUTION:
${\displaystyle \iiint\limits_{B}z\;\text{sin}\;x\;\text{cos}\;y}\;dV=8$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::

## Triple Integrals over a General Bounded Region
We now expand the definition of the triple integral to compute a triple integral over a more {index:general bounded region} $E$ in ${\mathbb{R}}^{3}.$ The general bounded regions we will consider are of three types. First, let $D$ be the bounded region that is a projection of $E$ onto the $xy$-plane. Suppose the region $E$ in ${\mathbb{R}}^{3}$ has the form

$E=\{(x,y,z)|(x,y)\in D,{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\}$  {eq:fs-id1167794329819}

for two functions $z={u}_{1}(x,y)$ and $z={u}_{2}(x,y),$ such that ${u}_{1}(x,y)\le {u}_{2}(x,y)$ for all $(x,y)$ in $D$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_04_009} src=../../media/CNX_Calc_Figure_15_04_003.jpg
> alt: In x y z space, there is a shape E with top surface z = u2(x, y) and bottom surface z = u1(x, y). The bottom projects onto the x y plane as region D.
> caption: We can describe region $E$ as the space between ${u}_{1}(x,y)$ and ${u}_{2}(x,y)$ above the projection $D$ of $E$ onto the $xy$-plane.

:::note [theorem] Triple Integral over a General Region
The triple integral of a continuous function $f(x,y,z)$ over a general three-dimensional region

$E=\{(x,y,z)|(x,y)\in D,{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\}$  {eq:fs-id1167793442834}

in ${\mathbb{R}}^{3},$ where $D$ is the projection of $E$ onto the $xz$-plane, is

${\displaystyle \iiint\limits_{E}f(x,y,z)dV={\displaystyle \iint\limits_{D}[{\displaystyle \int_{{u}_{1}(x,y)}^{{u}_{2}(x,y)} f(x,y,z)dz}]}}dA.$  {eq:fs-id1167794196337}

:::
Similarly, we can consider a general bounded region $D$ in the $xy$-plane and two functions $y={u}_{1}(x,z)$ and $y={u}_{2}(x,z)$ such that ${u}_{1}(x,z)\le {u}_{2}(x,z)$ for all $(x,z)$ in $D.$ Then we can describe the solid region $E$ in ${\mathbb{R}}^{3}$ as

$E=\{(x,y,z)|(x,z)\in D,{u}_{1}(x,z)\le y\le {u}_{2}(x,z)\}$  {eq:fs-id1167794126670}

where $D$ is the projection of $E$ onto the $xz$-plane and the triple integral is

${\displaystyle \iiint\limits_{E}f(x,y,z)dV={\displaystyle \iint\limits_{D}[{\displaystyle \int_{{u}_{1}(x,z)}^{{u}_{2}(x,z)} f(x,y,z)dy}]}}dA.$  {eq:fs-id1167794036794}

Finally, if $D$ is a general bounded region in the $yz$-plane and we have two functions $x={u}_{1}(y,z)$ and $x={u}_{2}(y,z)$ such that ${u}_{1}(y,z)\le {u}_{2}(y,z)$ for all $(y,z)$ in $D,$ then the solid region $E$ in ${\mathbb{R}}^{3}$ can be described as

$E=\{(x,y,z)|(y,z)\in D,{u}_{1}(y,z)\le x\le {u}_{2}(y,z)\}$  {eq:fs-id1167793630683}

where $D$ is the projection of $E$ onto the $yz$-plane and the triple integral is

${\displaystyle \iiint\limits_{E}f(x,y,z)dV={\displaystyle \iint\limits_{D}[{\displaystyle \int_{{u}_{1}(y,z)}^{{u}_{2}(y,z)} f(x,y,z)dx}]}}dA.$  {eq:fs-id1167793945064}

Note that the region $D$ in any of the planes may be of Type I or Type II as described in [Double Integrals over General Regions](module:m53963). If $D$ in the $xy$-plane is of Type I ([ref:CNX_Calc_Figure_15_04_003]), then

$E=\{(x,y,z)|a\le x\le b,{g}_{1}(x)\le y\le {g}_{2}(x),{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\}.$  {eq:fs-id1167794140671}

> FIGURE {fig:CNX_Calc_Figure_15_04_003} src=../../media/CNX_Calc_Figure_15_04_004.jpg
> alt: In x y z space, there is a complex shape E with top surface z = u2(x, y) and bottom surface z = u1(x, y). The bottom projects onto the xy plane as region D with boundaries x = a, x = b, y = g1(x), and y = g2(x).
> caption: A box $E$ where the projection $D$ in the $xy$-plane is of Type I.

Then the triple integral becomes

${\displaystyle \iiint\limits_{E}f(x,y,z)dV=}{\displaystyle \int_{a}^{b} \;{\displaystyle \int_{{g}_{1}(x)}^{{g}_{2}(x)} \;{\displaystyle \int_{{u}_{1}(x,y)}^{{u}_{2}(x,y)} f(x,y,z)dz\;dy\;dx}}}.$  {eq:fs-id1167793912034}

If $D$ in the $xy$-plane is of Type II ([ref:CNX_Calc_Figure_15_04_004]), then

$E=\{(x,y,z)|c\le y\le d,{h}_{1}(y)\le x\le {h}_{2}(y),{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\}.$  {eq:fs-id1167793299664}

> FIGURE {fig:CNX_Calc_Figure_15_04_004} src=../../media/CNX_Calc_Figure_15_04_005.jpg
> alt: In x y z space, there is a complex shape E with top surface z = u2(x, y) and bottom surface z = u1(x, y). The bottom projects onto the xy plane as region D with boundaries y = c, y = d, x = h1(y), and x = h2(y).
> caption: A box $E$ where the projection $D$ in the $xy$-plane is of Type II.

Then the triple integral becomes

${\displaystyle \iiint\limits_{E}f(x,y,z)dV=}{\displaystyle \int_{y=c}^{y=d}{\displaystyle \int_{x={h}_{1}(y)}^{x={h}_{2}(y)}{\displaystyle \int_{z={u}_{1}(x,y)}^{z={u}_{2}(x,y)}f(x,y,z)dz\;dx\;dy}}}.$  {eq:fs-id1167793469213}

:::example {ex:fs-id1167793377354} Evaluating a Triple Integral over a General Bounded Region

:::exercise {fs-id1167793377356} type= 
PROBLEM:
Evaluate the triple integral of the function $f(x,y,z)=5x-3y$ over the solid tetrahedron bounded by the planes $x=0,y=0,z=0,$ and $x+y+z=1.$
SOLUTION:
[ref:CNX_Calc_Figure_15_04_005] shows the solid tetrahedron $E$ and its projection $D$ on the $xy$-plane.

> FIGURE {fig:CNX_Calc_Figure_15_04_005} src=../../media/CNX_Calc_Figure_15_04_006.jpg
> alt: In x y z space, there is a solid E with boundaries being the x y, z y, and x z planes and z = 1 minus x minus y. The points are the origin, (1, 0, 0), (0, 0, 1), and (0, 1, 0). Its surface on the x y plane is shown as being a rectangle marked D with line y = 1 minus x. Additionally, there is a vertical line shown on D.
> caption: The solid $E$ has a projection $D$ on the $xy$-plane of Type I.

We can describe the solid region tetrahedron as

$E=\{(x,y,z)|0\le x\le 1,0\le y\le 1-x,0\le z\le 1-x-y\}.$  {eq:fs-id1167794051983}

Hence, the triple integral is

${\displaystyle \iiint\limits_{E}f(x,y,z)dV=}{\displaystyle \int_{x=0}^{x=1}{\displaystyle \int_{y=0}^{y=1-x}{\displaystyle \int_{z=0}^{z=1-x-y}(5x-3y)dz\;dy\;dx}}}.$  {eq:fs-id1167793887546}

To simplify the calculation, first evaluate the integral ${\displaystyle \int_{z=0}^{z=1-x-y}(5x-3y)dz}.$ We have

${\displaystyle \int_{z=0}^{z=1-x-y}(5x-3y)dz}=(5x-3y)(1-x-y).$  {eq:fs-id1167793433730}

Now evaluate the integral ${\displaystyle \int_{y=0}^{y=1-x}(5x-3y)(1-x-y)dy},$ obtaining

${\displaystyle \int_{y=0}^{y=1-x}(5x-3y)(1-x-y)dy}=\frac{1}{2}{(x-1)}^{2}(6x-1).$  {eq:fs-id1167793293447}

Finally, evaluate

${\displaystyle \int_{x=0}^{x=1}\frac{1}{2}{(x-1)}^{2}(6x-1)dx}=\frac{1}{12}.$  {eq:fs-id1167794045786}

Putting it all together, we have

${\displaystyle \iiint\limits_{E}f(x,y,z)dV=}{\displaystyle \int_{x=0}^{x=1}{\displaystyle \int_{y=0}^{y=1-x}{\displaystyle \int_{z=0}^{z=1-x-y}(5x-3y)dz\;dy\;dx}}}=\frac{1}{12}.$  {eq:fs-id1167794124150}

:::
:::
Just as we used the double integral ${\displaystyle \iint\limits_{D}1dA}$ to find the area of a general bounded region $D,$ we can use ${\displaystyle \iiint\limits_{E}1dV}$ to find the volume of a general solid bounded region $E.$ The next example illustrates the method.

:::example {ex:fs-id1167793504407} Finding a Volume by Evaluating a Triple Integral

:::exercise {fs-id1167793504409} type= 
PROBLEM:
Find the volume of a right pyramid that has the square base in the $xy$-plane $[−1,1]\;\times \;[−1,1]$ and vertex at the point $(0,0,1)$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_04_010} src=../../media/CNX_Calc_Figure_15_04_007.jpg
> alt: In x y z space, there is a pyramid with a square base centered at the origin. The apex of the pyramid is (0, 0, 1).
> caption: Finding the volume of a pyramid with a square base.

SOLUTION:
In this pyramid the value of $z$ changes from $0\;\text{to}\;1,$ and at each height $z,$ the cross section of the pyramid for any value of $z$ is the square $[−1+z,1-z]\;\times \;[−1+z,1-z].$ Hence, the volume of the pyramid is ${\displaystyle \iiint\limits_{E}1dV}$ where

$E=\{(x,y,z)|0\le z\le 1,−1+z\le y\le 1-z,−1+z\le x\le 1-z\}.$  {eq:fs-id1167793930160}

Thus, we have

${\displaystyle \iiint\limits_{E}1dV=}{\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=-1+z}^{y=1-z}{\displaystyle \int_{x=–1+z}^{x=1-z}1dx\;dy\;dz}}}={\displaystyle \int_{z=0}^{z=1}{\displaystyle \int_{y=-1+z}^{y=1-z}(2-2z)}}dy\;dz={\displaystyle \int_{z=0}^{z=1}{(2-2z)}^{2}dz=\frac{4}{3}}.$  {eq:fs-id1167793777586}

Hence, the volume of the pyramid is $\frac{4}{3}$ cubic units.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793522421} type= 
PROBLEM:
Consider the solid sphere $E=\{(x,y,z)|{x}^{2}+{y}^{2}+{z}^{2}\le 9\}.$ Write the triple integral ${\displaystyle \iiint\limits_{E}f(x,y,z)dV}$ for an arbitrary function $f$ as an iterated integral. Then evaluate this triple integral with $f(x,y,z)=1.$ Notice that this gives the volume of a sphere using a triple integral.
SOLUTION:
${\displaystyle \iiint\limits_{E}1}dV={\displaystyle \int_{x=−3}^{x=3}{\displaystyle \int_{y=\text{−}\sqrt{9-{x}^{2}}}^{y=\sqrt{9-{x}^{2}}}{\displaystyle \int_{z=\text{−}\sqrt{9-{x}^{2}-{y}^{2}}}^{z=\sqrt{9-{x}^{2}-{y}^{2}}}1dz\;dy\;dx=36\pi .}}}$
COMMENTARY: Hint
Follow the steps in the previous example. Use symmetry.
:::
:::

## Changing the Order of Integration
As we have already seen in double integrals over general bounded regions, changing the order of the integration is done quite often to simplify the computation. With a triple integral over a rectangular box, the order of integration does not change the level of difficulty of the calculation. However, with a triple integral over a general bounded region, choosing an appropriate order of integration can simplify the computation quite a bit. Sometimes making the change to polar coordinates can also be very helpful. We demonstrate two examples here.

:::example {ex:fs-id1167794296742} Changing the Order of Integration

:::exercise {fs-id1167794296744} type= 
PROBLEM:
Consider the iterated integral

${\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y={x}^{2}} \;{\displaystyle \int_{z=0}^{z={{y}^{2}}^{}} f(x,y,z)}}}dz\;dy\;dx.$  {eq:fs-id1167794296754}

The order of integration here is first with respect to *z*, then *y*, and then *x*. Express this integral by changing the order of integration to be first with respect to *x*, then *z*, and then $y.$ Verify that the value of the integral is the same if we let $f(x,y,z)=xyz.$
SOLUTION:
The best way to do this is to sketch the region $E$ and its projections onto each of the three coordinate planes. Thus, let

$E=\{(x,y,z)|0\le x\le 1,0\le y\le {x}^{2},0\le z\le {y}^{2}\}.$  {eq:fs-id1167793612502}

and

${\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y={x}^{2}} \;{\displaystyle \int_{z=0}^{z={y}^{2}} f(x,y,z)}}}dz\;dy\;dx={\displaystyle \iiint\limits_{E}f(x,y,z)}dV.$  {eq:fs-id1167793432451}

We need to express this triple integral as

${\displaystyle \int_{y=c}^{y=d} \;{\displaystyle \int_{z={v}_{1}(y)}^{z={v}_{2}(y)} \;{\displaystyle \int_{x={u}_{1}(y,z)}^{x={u}_{2}(y,z)} f(x,y,z)}}}dx\;dz\;dy.$  {eq:fs-id1167793424346}

Knowing the region $E$ we can draw the following projections ([ref:CNX_Calc_Figure_15_04_006]):
on the $xy$-plane is ${D}_{1}=\{(x,y)|0\le x\le 1,0\le y\le {x}^{2}\}=\{(x,y)|0\le y\le 1,\sqrt{y}\le x\le 1\},$
on the $yz$-plane is ${D}_{2}=\{(y,z)|0\le y\le 1,0\le z\le {y}^{2}\},$ and
on the $xz$-plane is ${D}_{3}=\{(x,z)|0\le x\le 1,0\le z\le {x}^{4}\}.$

> FIGURE {fig:CNX_Calc_Figure_15_04_006} src=../../media/CNX_Calc_Figure_15_04_008.jpg
> alt: Three similar versions of the following graph are shown: In the x y plane, a region D1 is bounded by the x axis, the line x = 1, and the curve y = x squared. In the second version, region D2 on the z y plane is shown with equation z = y squared. And in the third version, region D3 on the x z plane is shown with equation z = x cubed.
> caption: The three cross sections of $E$ on the three coordinate planes.

Now we can describe the same region $E$ as $\{(x,y,z)|0\le y\le 1,0\le z\le {y}^{2},\sqrt{y}\le x\le 1\},$ and consequently, the triple integral becomes

${\displaystyle \int_{y=c}^{y=d} \;{\displaystyle \int_{z={v}_{1}(y)}^{z={v}_{2}(y)} \;{\displaystyle \int_{x={u}_{1}(y,z)}^{x={u}_{2}(y,z)} f(x,y,z)}}}dx\;dz\;dy={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{z=0}^{z={y}^{2}} \;{\displaystyle \int_{x=\sqrt{y}}^{x=1} f(x,y,z)}}}dx\;dz\;dy.$  {eq:fs-id1167794139878}

Now assume that $f(x,y,z)=xyz$ in each of the integrals. Then we have

$\begin{array}{l} \\ \\ \\ \\ \\ \;{\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y={x}^{2}} \;{\displaystyle \int_{z=0}^{z={y}^{2}} xyz}}}\;dz\;dy\;dx \\ ={\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y={x}^{2}} [{xy\frac{{z}^{2}}{2}|}_{z=0}^{z={y}^{2}}]}}dy\;dx={\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y={x}^{2}} (x\frac{{y}^{5}}{2})}}dy\;dx={\displaystyle \int_{x=0}^{x=1} [{x\frac{{y}^{6}}{12}|}_{y=0}^{y={x}^{2}}]}dx={\displaystyle \int_{x=0}^{x=1} \frac{{x}^{13}}{12}}dx=\frac{1}{168}, \\ \;{\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{z=0}^{z={y}^{2}} \;{\displaystyle \int_{x=\sqrt{y}}^{x=1} xyz}}}\;dx\;dz\;dy \\ ={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{z=0}^{z={y}^{2}} [{yz\frac{{x}^{2}}{2}|}_{\sqrt{y}}^{1}]}}dz\;dy \\ ={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{z=0}^{z={y}^{2}} (\frac{yz}{2}-\frac{{y}^{2}z}{2})}}dz\;dy={\displaystyle \int_{y=0}^{y=1} [{\frac{y{z}^{2}}{4}-\frac{{y}^{2}{z}^{2}}{4}|}_{z=0}^{z={y}^{2}}]}dy={\displaystyle \int_{y=0}^{y=1} (\frac{{y}^{5}}{4}-\frac{{y}^{6}}{4})}dy=\frac{1}{168}.\end{array}$  {eq:fs-id1167794145561}

The answers match.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793618000} type= 
PROBLEM:
Write five different iterated integrals equal to the given integral

${\displaystyle \int_{z=0}^{z=4} \;{\displaystyle \int_{y=0}^{y=4-z} \;{\displaystyle \int_{x=0}^{x=\sqrt{y}} f(x,y,z)}}}dx\;dy\;dz.$  {eq:fs-id1167793251247}

SOLUTION:
(i) ${\displaystyle \int_{z=0}^{z=4} \;{\displaystyle \int_{x=0}^{x=\sqrt{4-z}} \;{\displaystyle \int_{y={x}^{2}}^{y=4-z} f(x,y,z)}}}dy\;dx\;dz,$ (ii) ${\displaystyle \int_{y=0}^{y=4} \;{\displaystyle \int_{z=0}^{z=4-y} \;{\displaystyle \int_{x=0}^{x=\sqrt{y}} f(x,y,z)}}}dx\;dz\;dy,$ (iii) ${\displaystyle \int_{y=0}^{y=4} \;{\displaystyle \int_{x=0}^{x=\sqrt{y}} \;{\displaystyle \int_{z=0}^{z=4-y} f(x,y,z)}}}dz\;dx\;dy,$ (iv) ${\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y={x}^{2}}^{y=4} \;{\displaystyle \int_{z=0}^{z=4-y} f(x,y,z)}}}dz\;dy\;dx,$ (v) ${\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{z=0}^{z=4-{x}^{2}} \;{\displaystyle \int_{y={x}^{2}}^{y=4-z} f(x,y,z)}}}dy\;dz\;dx$
COMMENTARY: Hint
Follow the steps in the previous example, using the region $E$ as $\{(x,y,z)|0\le z\le 4,0\le y\le 4-z,0\le x\le \sqrt{y}\},$ and describe and sketch the projections onto each of the three planes, five different times.
:::
:::

:::example {ex:fs-id1167793452797} Changing Integration Order and Coordinate Systems

:::exercise {fs-id1167793452799} type= 
PROBLEM:
Evaluate the triple integral ${\displaystyle \iiint\limits_{E}\sqrt{{x}^{2}+{z}^{2}}}dV,$ where $E$ is the region bounded by the paraboloid $y={x}^{2}+{z}^{2}$ ([ref:CNX_Calc_Figure_15_04_007]) and the plane $y=4.$

> FIGURE {fig:CNX_Calc_Figure_15_04_007} src=../../media/CNX_Calc_Figure_15_04_009.jpg
> alt: The paraboloid y = x squared + z squared is shown opening up along the y axis to y = 4.
> caption: Integrating a triple integral over a paraboloid.

SOLUTION:
The projection of the solid region $E$ onto the $xy$-plane is the region bounded above by $y=4$ and below by the parabola $y={x}^{2}$ as shown.

> FIGURE {fig:CNX_Calc_Figure_15_04_008} src=../../media/CNX_Calc_Figure_15_04_010.jpg
> alt: In the x y plane, the graph of y = x squared is shown with the line y = 4 intersecting the graph at (negative 2, 4) and (2, 4).
> caption: Cross section in the $xy$-plane of the paraboloid in [ref:CNX_Calc_Figure_15_04_007].

Thus, we have

$E=\{(x,y,z)|-2\le x\le 2,{x}^{2}\le y\le 4,\text{−}\sqrt{y-{x}^{2}}\le z\le \sqrt{y-{x}^{2}}\}.$  {eq:fs-id1167793285298}

The triple integral becomes

${\displaystyle \iiint\limits_{E}\sqrt{{x}^{2}+{z}^{2}}}dV={\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{y={x}^{2}}^{y=4} \;{\displaystyle \int_{z=\text{−}\sqrt{y-{x}^{2}}}^{z=\sqrt{y-{x}^{2}}} \sqrt{{x}^{2}+{z}^{2}}}}}dz\;dy\;dx.$  {eq:fs-id1167794172780}

This expression is difficult to compute, so consider the projection of $E$ onto the $xz$-plane. This is a circular disc ${x}^{2}+{z}^{2}\le 4.$ So we obtain

${\displaystyle \iiint\limits_{E}\sqrt{{x}^{2}+{z}^{2}}}dV={\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{y={x}^{2}}^{y=4} \;{\displaystyle \int_{z=\text{−}\sqrt{y-{x}^{2}}}^{z=\sqrt{y-{x}^{2}}} \sqrt{{x}^{2}+{z}^{2}}}}}dz\;dy\;dx={\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}}}^{z=\sqrt{4-{x}^{2}}} \;{\displaystyle \int_{y={x}^{2}+{z}^{2}}^{y=4} \sqrt{{x}^{2}+{z}^{2}}}}}dy\;dz\;dx.$  {eq:fs-id1167793376269}

Here the order of integration changes from being first with respect to $z,$ then $y,$ and then $x$ to being first with respect to $y,$ then to $z,$ and then to $x.$ It will soon be clear how this change can be beneficial for computation. We have

${\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}}}^{z=\sqrt{4-{x}^{2}}} \;{\displaystyle \int_{y={x}^{2}+{z}^{2}}^{y=4} \sqrt{{x}^{2}+{z}^{2}}}}}dy\;dz\;dx={\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}}}^{z=\sqrt{4-{x}^{2}}} (4-{x}^{2}-{z}^{2})\sqrt{{x}^{2}+{z}^{2}}}}dz\;dx.$  {eq:fs-id1167793449998}

Now use the polar substitution $x=r\;\text{cos}\;\theta ,z=r\;\text{sin}\;\theta ,$ and $dz\;dx=r\;dr\;d\theta$ in the $xz$-plane. This is essentially the same thing as when we used polar coordinates in the $xy$-plane, except we are replacing $y$ by $z.$ Consequently the limits of integration change and we have, by using ${r}^{2}={x}^{2}+{z}^{2},$

$\begin{array}{rl}{\displaystyle \int_{x=−2}^{x=2} \;{\displaystyle \int_{z=\text{−}\sqrt{4-{x}^{2}}}^{z=\sqrt{4-{x}^{2}}} (4-{x}^{2}-{z}^{2})\sqrt{{x}^{2}+{z}^{2}}}}dz\;dx & ={\displaystyle \int_{\theta =0}^{\theta =2\pi} \;{\displaystyle \int_{r=0}^{r=2} (4-{r}^{2})}}rr\;dr\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi} [{\frac{4{r}^{3}}{3}-\frac{{r}^{5}}{5}|}_{0}^{2}]}d\theta ={\displaystyle \int_{0}^{2\pi} \frac{64}{15}}d\theta =\frac{128\pi}{15}.\end{array}$  {eq:fs-id1167793290965}

:::
:::

## Average Value of a Function of Three Variables
Recall that we found the average value of a function of two variables by evaluating the double integral over a region on the plane and then dividing by the area of the region. Similarly, we can find the average value of a function in three variables by evaluating the triple integral over a solid region and then dividing by the volume of the solid.

:::note [theorem] Average Value of a Function of Three Variables
If $f(x,y,z)$ is integrable over a solid bounded region $E$ with positive volume $V(E),$ then the average value of the function is

${f}_{\text{ave}}=\frac{1}{V(E)}{\displaystyle \iiint\limits_{E}f(x,y,z)}dV.$  {eq:fs-id1167793355672}

Note that the volume is $V(E)={\displaystyle \iiint\limits_{E}1dV}.$
:::

:::example {ex:fs-id1167793367912} Finding an Average Temperature

:::exercise {fs-id1167793367915} type= 
PROBLEM:
The temperature at a point $(x,y,z)$ of a solid $E$ bounded by the coordinate planes and the plane $x+y+z=1$ is $T(x,y,z)=(xy+8z+20)\text{°}\text{C}\text{.}$ Find the average temperature over the solid.
SOLUTION:
Use the theorem given above and the triple integral to find the numerator and the denominator. Then do the division. Notice that the plane $x+y+z=1$ has intercepts $(1,0,0),(0,1,0),$ and $(0,0,1).$ The region $E$ looks like

$E=\{(x,y,z)|0\le x\le 1,0\le y\le 1-x,0\le z\le 1-x-y\}.$  {eq:fs-id1167793711046}

Hence the triple integral of the temperature is

${\displaystyle \iiint\limits_{E}f(x,y,z)}dV={\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y=1-x} \;{\displaystyle \int_{z=0}^{z=1-x-y} (xy+8z+20)dz\;dy\;dx=\frac{147}{40}}}}.$  {eq:fs-id1167793630669}

The volume evaluation is $V(E)={\displaystyle \iiint\limits_{E}1}dV={\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y=1-x} \;{\displaystyle \int_{z=0}^{z=1-x-y} 1dz\;dy\;dx=\frac{1}{6}}}}.$
Hence the average value is ${T}_{\text{ave}}=\frac{147\text{/}40}{1\text{/}6}=\frac{6(147)}{40}=\frac{441}{20}$ degrees Celsius.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794058733} type= 
PROBLEM:
Find the average value of the function $f(x,y,z)=xyz$ over the cube with sides of length $4$ units in the first octant with one vertex at the origin and edges parallel to the coordinate axes.
SOLUTION:
${f}_{\text{ave}}=8$
COMMENTARY: Hint
Follow the steps in the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- To compute a triple integral we use Fubini’s theorem, which states that if $f(x,y,z)$ is continuous on a rectangular box $B=[a,b]\;\times \;[c,d]\;\times \;[e,f],$ then

${\displaystyle \iiint\limits_{B}f(x,y,z)dV={\displaystyle \int_{e}^{f} \;{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y,z)dx\;dy\;dz}}}}$  {eq:fs-id1167793938836}

and is also equal to any of the other five possible orderings for the iterated triple integral.
- To compute the volume of a general solid bounded region $E$ we use the triple integral

$V(E)={\displaystyle \iiint\limits_{E}1dV}.$  {eq:fs-id1167793941338}

- Interchanging the order of the iterated integrals does not change the answer. As a matter of fact, interchanging the order of integration can help simplify the computation.
- To compute the average value of a function over a general three-dimensional region, we use

${f}_{\text{ave}}=\frac{1}{V(E)}{\displaystyle \iiint\limits_{E}f(x,y,z)}dV.$  {eq:fs-id1167793245974}

## Key Equations {section:key-equations}

> TABLE {tab:eip-553} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Triple integral** | $\lim_{l,m,n\to \infty}{\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f({x}_{ijk}^{*},{y}_{ijk}^{*},{z}_{ijk}^{*})\text{Δ}x\text{Δ}y\text{Δ}z}}}={\displaystyle \iiint\limits_{B}f(x,y,z)dV}$ |

##  {section:section-exercises}
In the following exercises, evaluate the triple integrals over the rectangular solid box $B.$

:::exercise {fs-id1167793566828} type= 
PROBLEM:
${\displaystyle \iiint\limits_{B}(2x+3{y}^{2}+4{z}^{3})}dV,$ where $B=\{(x,y,z)|0\le x\le 1,0\le y\le 2,0\le z\le 3\}$
SOLUTION:
$192$
:::

:::exercise {fs-id1167794172461} type= 
PROBLEM:
${\displaystyle \iiint\limits_{B}(xy+yz+xz)}dV,$ where $B=\{(x,y,z)|1\le x\le 2,0\le y\le 2,1\le z\le 3\}$
:::

:::exercise {fs-id1167793590440} type= 
PROBLEM:
${\displaystyle \iiint\limits_{B}(x\;\text{cos}\;y+z)}dV,$ where $B=\{(x,y,z)|0\le x\le 1,0\le y\le \pi ,−1\le z\le 1\}$
SOLUTION:
$0$
:::

:::exercise {fs-id1167793376214} type= 
PROBLEM:
${\displaystyle \iiint\limits_{B}(z\;\text{sin}\;x+{y}^{2})}dV,$ where $B=\{(x,y,z)|0\le x\le \pi ,0\le y\le 1,−1\le z\le 2\}$
:::
In the following exercises, change the order of integration by integrating first with respect to $z,$ then $x,$ then $y.$

:::exercise {fs-id1167793412171} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{2} \;{\displaystyle \int_{2}^{3} ({x}^{2}+\text{ln}\;y+z)}}}dx\;dy\;dz$
SOLUTION:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{2}^{3} \;{\displaystyle \int_{0}^{1} ({x}^{2}+\text{ln}\;y+z)}}}dz\;dx\;dy=\frac{35}{6}+2\;\text{ln}\;2$
:::

:::exercise {fs-id1167793409884} type= 
PROBLEM:
$\int_{-1}^{1} \;\int_{0}^{3} \;\int_{0}^{1} (z{e}^{x}+2y)dx\;dy\;dz$
:::

:::exercise {fs-id1167793374996} type= 
PROBLEM:
${\displaystyle \int_{−1}^{2} \;{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{0}^{4} ({x}^{2}z+\frac{1}{y})}}}dx\;dy\;dz$
SOLUTION:
${\displaystyle \int_{1}^{3} \;{\displaystyle \int_{0}^{4} \;{\displaystyle \int_{−1}^{2} ({x}^{2}z+\frac{1}{y})}}}dz\;dx\;dy=64+12\;\text{ln}\;3$
:::

:::exercise {fs-id1167793449922} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{−2}^{−1} \;{\displaystyle \int_{0}^{1} \frac{x+y}{z}}}}dx\;dy\;dz$
:::

:::exercise {fs-id1167793641968} type= 
PROBLEM:
Let $F,G,\;\text{and}\;H$ be continuous functions on $[a,b],[c,d],$ and $[e,f],$ respectively, where $a,b,c,d,e,\;\text{and}\;f$ are real numbers such that $a<b,c<d,\;\text{and}\;e<f.$ Show that

${\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{e}^{f} F(x)}}}G(y)H(z)dz\;dy\;dx=({\displaystyle \int_{a}^{b} F(x)dx})({\displaystyle \int_{c}^{d} G(y)dy})({\displaystyle \int_{e}^{f} H(z)dz}).$  {eq:fs-id1167793925015}

:::

:::exercise {fs-id1167793719072} type= 
PROBLEM:
Let $F,G,\;\text{and}\;H$ be differential functions on $[a,b],[c,d],$ and $[e,f],$ respectively, where $a,b,c,d,e,\;\text{and}\;f$ are real numbers such that $a<b,c<d,\;\text{and}\;e<f.$ Show that

${\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{e}^{f} {F}^{'}(x)}}}{G}^{'}(y){H}^{'}(z)dz\;dy\;dx=[F(b)-F(a)]\;[G(d)-G(c)]\;[H(f)-H(e)].$  {eq:fs-id1167793479309}

:::
In the following exercises, evaluate the triple integrals over the bounded region $E=\{(x,y,z)|a\le x\le b,{h}_{1}(x)\le y\le {h}_{2}(x),e\le z\le f\}.$

:::exercise {fs-id1167793538322} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(2x+5y+7z)}dV,$ where $E=\{(x,y,z)|0\le x\le 1,0\le y\le -x+1,1\le z\le 2\}$
SOLUTION:
$\frac{77}{12}$
:::

:::exercise {fs-id1167793589595} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(y\;\text{ln}\;x+z)}dV,$ where $E=\{(x,y,z)|1\le x\le e,0\le y\le \text{ln}\;x,0\le z\le 1\}$
:::

:::exercise {fs-id1167793312478} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(\text{sin}\;x+\text{sin}\;y)}dV,$ where $E=\{(x,y,z)|0\le x\le \frac{\pi}{2},\text{−}\text{cos}\;x\le y\le \text{cos}\;x,−1\le z\le 1\}$
SOLUTION:
$2$
:::

:::exercise {fs-id1167793462445} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(xy+yz+xz)}dV,$ where $E=\{(x,y,z)|0\le x\le 1,\text{−}{x}^{2}\le y\le {x}^{2},0\le z\le 1\}$
:::
In the following exercises, evaluate the triple integrals over the indicated bounded region $E.$

:::exercise {fs-id1167793638532} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(x+2yz)dV},$ where $E=\{(x,y,z)|0\le x\le 1,0\le y\le x,0\le z\le 5-x-y\}$
SOLUTION:
$\frac{439}{120}$
:::

:::exercise {fs-id1167793626944} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}({x}^{3}+{y}^{3}+{z}^{3})}dV,$ where $E=\{(x,y,z)|0\le x\le 2,0\le y\le 2x,0\le z\le 4-x-y\}$
:::

:::exercise {fs-id1167793495332} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}y\;dV},$ where $E=\{(x,y,z)|-1\le x\le 1,\text{−}\sqrt{1-{x}^{2}}\le y\le \sqrt{1-{x}^{2}},0\le z\le 1-{x}^{2}-{y}^{2}\}$
SOLUTION:
$0$
:::

:::exercise {fs-id1167793368854} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}x\;dV},$ where $E=\{(x,y,z)|-2\le x\le 2,-\sqrt{4-{x}^{2}}\le y\le \sqrt{4-{x}^{2}},0\le z\le 4-{x}^{2}-{y}^{2}\}$
:::
In the following exercises, evaluate the triple integrals over the bounded region $E$ of the form $E=\{(x,y,z)|{g}_{1}(y)\le x\le {g}_{2}(y),c\le y\le d,e\le z\le f\}.$

:::exercise {fs-id1167793515949} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}{x}^{2}dV},$ where $E=\{(x,y,z)|1-{y}^{2}\le x\le {y}^{2}-1,−1\le y\le 1,1\le z\le 2\}$
SOLUTION:
$-\frac{64}{105}$
:::

:::exercise {fs-id1167793286987} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(\text{sin}\;x+y)}dV,$ where $E=\{(x,y,z)|-{y}^{4}\le x\le {y}^{4},0\le y\le 2,0\le z\le 4\}$
:::

:::exercise {fs-id1167793720938} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(x-yz)}dV,$ where $E=\{(x,y,z)|-{y}^{6}\le x\le \sqrt{y},0\le y\le 1,−1\le z\le 1\}$
SOLUTION:
$\frac{11}{26}$
:::

:::exercise {fs-id1167793378506} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}z}dV,$ where $E=\{(x,y,z)|2-2y\le x\le 2+\sqrt{y},0\le y\le 1,2\le z\le 3\}$
:::
In the following exercises, evaluate the triple integrals over the bounded region

$E=\{(x,y,z)|{g}_{1}(y)\le x\le {g}_{2}(y),c\le y\le d,{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\}.$  {eq:fs-id1167793924534}

:::exercise {fs-id1167793959357} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}z}dV,$ where $E=\{(x,y,z)|-y\le x\le y,0\le y\le 1,0\le z\le 1-{x}^{4}-{y}^{4}\}$
SOLUTION:
$\frac{113}{450}$
:::

:::exercise {fs-id1167793929157} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(xz+1)}dV,$ where $E=\{(x,y,z)|0\le x\le \sqrt{y},0\le y\le 2,0\le z\le 1-{x}^{2}-{y}^{2}\}$
:::

:::exercise {fs-id1167793570746} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(x-z)}dV,$ where $E=\{(x,y,z)|-\sqrt{1-{y}^{2}}\le x\le 0,0\le y\le \frac{1}{2},0\le z\le 1-{x}^{2}-{y}^{2}\}$
SOLUTION:
$\frac{-609-216\sqrt{3}-80\pi}{5760}\approx -0.21431$
:::

:::exercise {fs-id1167793377891} type= 
PROBLEM:
${\displaystyle \iiint\limits_{E}(x+y)}dV,$ where $E=\{(x,y,z)|0\le x\le \sqrt{1-{y}^{2}},0\le y\le 1,0\le z\le 1-x\}$
:::
In the following exercises, evaluate the triple integrals over the bounded region
$E=\{(x,y,z)|(x,y)\in D,{u}_{1}(x,y)\le z\le {u}_{2}(x,y)\},$ where $D$ is the projection of $E$ onto the $xy$-plane.

:::exercise {fs-id1167793293597} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}({\displaystyle \int_{1}^{2} (x+z)dz})}dA,$ where $D=\{(x,y)|{x}^{2}+{y}^{2}\le 1\}$
SOLUTION:
$\frac{3\pi}{2}$
:::

:::exercise {fs-id1167793553760} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}({\displaystyle \int_{1}^{3} x(z+1)dz})}dA,$ where $D=\{(x,y)|{x}^{2}-{y}^{2}\ge 1,1\le x\le \sqrt{5}\}$
:::

:::exercise {fs-id1167793957798} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}({\displaystyle \int_{0}^{10-x-y} (x+2z)dz})}dA,$ where $D=\{(x,y)|y\ge 0,x\ge 0,x+y\le 10\}$
SOLUTION:
$1250$
:::

:::exercise {fs-id1167793547398} type= 
PROBLEM:
${\displaystyle \iint\limits_{D}({\displaystyle \int_{0}^{4{x}^{2}+4{y}^{2}} y\;dz})}dA,$ where $D=\{(x,y)|{x}^{2}+{y}^{2}\le 4,y\ge 1,x\ge 0\}$
:::

:::exercise {fs-id1167793421295} type= 
PROBLEM:
The solid $E$ bounded by ${y}^{2}+{z}^{2}=9,z=0,x=0,$ and $x=5$ is shown in the following figure. Evaluate the integral ${\displaystyle \iiint\limits_{E}z\;dV}$ by integrating first with respect to $z,$ then $y,\;\text{and then}\;x.$

> IMAGE {img:fs-id1167794326096} src=../../media/CNX_Calc_Figure_15_04_201.jpg
> alt: A solid arching shape that reaches its maximum along the y axis with z = 3. The shape reach zero at y = plus or minus 3, and the graph is truncated at x = 0 and 5.

SOLUTION:
${\displaystyle \int_{0}^{5} \;{\displaystyle \int_{−3}^{3} \;{\displaystyle \int_{0}^{\sqrt{9-{y}^{2}}} z\;dz\;dy\;dx}}}=90$
:::

:::exercise {fs-id1167793542537} type= 
PROBLEM:
The solid $E$ bounded by $y=\sqrt{x},$ $x=4,$ $y=0,$ $z=-2$, and $z=1$ is given in the following figure. Evaluate the integral ${\displaystyle \iiint\limits_{E}xyz\;dV}$ by integrating first with respect to $x,$ then $y,$ and then $z.$

> IMAGE {img:fs-id1167793245627} src=../../media/CNX_Calc_Figure_15_04_202.jpg
> alt: A quarter section of an oval cylinder with z from negative 2 to positive 1. The solid is bounded by y = 0 and x = 4, and the top of the shape runs from (0, 0, 1) to (4, 2, 1) in a gentle arc.

:::

:::exercise {fs-id1167794222532} type= 
PROBLEM:
**[T]** The volume of a solid $E$ is given by the integral ${\displaystyle \int_{−2}^{0} \;{\displaystyle \int_{x}^{0} \;{\displaystyle \int_{0}^{{x}^{2}+{y}^{2}} dz\;dy\;dx}}}.$ Use a computer algebra system (CAS) to graph $E$ and find its volume. Round your answer to two decimal places.
SOLUTION:
$V=5.33$

> IMAGE {img:fs-id1167793279345} src=../../media/CNX_Calc_Figure_15_04_203.jpg
> alt: A complex shape that starts at the origin and reaches its maximum at (negative 2, negative 2, 8). The shape is truncated by the x = y plane, the x = 0 plane, the y = negative 2 plane, the z = 0 plane, and a complex triangular-like shape with curved edges and sides (negative 2, negative 2, 8), (0, 0, 0), and (0, negative 2, 4).

:::

:::exercise {fs-id1167793279360} type= 
PROBLEM:
**[T]** The volume of a solid $E$ is given by the integral ${\displaystyle \int_{−1}^{0} \;{\displaystyle \int_{\text{−}{x}^{2}}^{0} \;{\displaystyle \int_{0}^{1+\sqrt{{x}^{2}+{y}^{2}}} dz\;dy\;dx}}}.$ Use a CAS to graph $E$ and find its volume $V.$ Round your answer to two decimal places.
:::
In the following exercises, use two circular permutations of the variables $x,y,\;\text{and}\;z$ to write new integrals whose values equal the value of the original integral. A circular permutation of $x,y,\;\text{and}\;z$ is the arrangement of the numbers in one of the following orders: $y,z,\;\text{and}\;x\;\text{or}\;z,x,\;\text{and}\;y.$

:::exercise {fs-id1167793411195} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{2}^{4} ({x}^{2}{z}^{2}+1)}}}dx\;dy\;dz$
SOLUTION:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{2}^{4} ({y}^{2}{z}^{2}+1)}}}dz\;dx\;dy;$ ${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{3} \;{\displaystyle \int_{2}^{4} ({x}^{2}{y}^{2}+1)}}}dy\;dz\;dx$
:::

:::exercise {fs-id1167793383396} type= 
PROBLEM:
$\int_{1}^{3} \;\int_{0}^{1} \;\int_{0}^{\text{−y}+1} (2y+5z+7x)dz\;dy\;dx$
:::

:::exercise {fs-id1167793571253} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}y}^{y} \;{\displaystyle \int_{0}^{1-{x}^{4}-{y}^{4}} {e}^{x}}}}\;dz\;dx\;dy$
SOLUTION:
$\int_{0}^{1} \;\int_{\text{-z}}^{z} \;\int_{0}^{1-{y}^{4}-{z}^{4}} {e}^{x}\;dx\;dy\;dz;\int_{0}^{1} \;\int_{\text{-x}}^{x} \;\int_{0}^{1-{z}^{4}-{x}^{4}} lnz\;dy\;dz\;dx$
:::

:::exercise {fs-id1167793377797} type= 
PROBLEM:
${\displaystyle \int_{−1}^{1} \;{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}{y}^{6}}^{\sqrt{y}} (x+yz)}}}dx\;dy\;dz$
:::

:::exercise {fs-id1167793943748} type= 
PROBLEM:
Set up the integral that gives the volume of the solid $E$ bounded by ${y}^{2}={x}^{2}+{z}^{2}$ and $y=a,$ where $a>0$ and $y\ge 0$
SOLUTION:
$V=\int_{-a}^{a} \;\int_{-\sqrt{{a}^{2}-{z}^{2}}}^{\sqrt{{a}^{2}-{z}^{2}}} \int_{\sqrt{{x}^{2}+{z}^{2}}}^{{a}^{2}} dy\;dx\;dz$
:::

:::exercise {fs-id1167793925174} type= 
PROBLEM:
Set up the integral that gives the volume of the solid $E$ bounded by $x={y}^{2}+{z}^{2}$ and $x={a}^{2},$ where $a>0.$
:::

:::exercise {fs-id1167793589816} type= 
PROBLEM:
Find the average value of the function $f(x,y,z)=x+y+z$ over the parallelepiped determined by $x=0,x=1,y=0,y=3,z=0,$ and $z=5.$
SOLUTION:
$\frac{9}{2}$
:::

:::exercise {fs-id1167794054094} type= 
PROBLEM:
Find the average value of the function $f(x,y,z)=xyz$ over the solid $E=[0,1]\;\times \;[0,1]\;\times \;[0,1]$ situated in the first octant.
:::

:::exercise {fs-id1167793639926} type= 
PROBLEM:
Find the volume of the solid $E$ that lies under the plane $x+y+z=9$ and whose projection onto the $xy$-plane is bounded by $x=\sqrt{y-1},x=0,$ and $x+y=7.$
SOLUTION:
$\frac{156}{5}$
:::

:::exercise {fs-id1167793502325} type= 
PROBLEM:
Find the volume of the solid *E* that lies under the plane $2x+y+z=8$ and whose projection onto the $xy$-plane is bounded by $x={\text{sin}}^{−1}y,y=0,$ and $x=\frac{\pi}{2}.$
:::

:::exercise {fs-id1167793393622} type= 
PROBLEM:
Consider the pyramid with the base in the $xy$-plane of $[−2,2]\;\times \;[−2,2]$ and the vertex at the point $(0,0,8).$
a. Show that the equations of the planes of the lateral faces of the pyramid are $4y+z=8,$ $4y-z=−8,$ $4x+z=8,$ and $−4x+z=8.$
b. Find the volume of the pyramid.
SOLUTION:
a. Answers may vary; b. $\frac{128}{3}$
:::

:::exercise {fs-id1167793372860} type= 
PROBLEM:
Consider the pyramid with the base in the $xy$-plane of $[−3,3]\;\times \;[−3,3]$ and the vertex at the point $(0,0,9).$
a. Show that the equations of the planes of the side faces of the pyramid are $3x+z=9,-3x+z=9,-3y+z=9,\text{and}3y+z=9$
b. Find the volume of the pyramid.
:::

:::exercise {fs-id1167793938005} type= 
PROBLEM:
The solid $E$ bounded by the sphere of equation ${x}^{2}+{y}^{2}+{z}^{2}={r}^{2}$ with $r>0$ and located in the first octant is represented in the following figure.

> IMAGE {img:fs-id1167793379942} src=../../media/CNX_Calc_Figure_15_04_205.jpg
> alt: The eighth of a sphere of radius 2 with center at the origin for positive x, y, and z.

a. Write the triple integral that gives the volume of $E$ by integrating first with respect to $z,$ then with $y,$ and then with $x.$
b. Rewrite the integral in part a. as an equivalent integral in five other orders.
SOLUTION:
a. ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}-{y}^{2}}} dz\;dy\;dx}}};$ b. ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{y}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}-{y}^{2}}} dz\;dx\;dy}}},$ ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{z}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}-{z}^{2}}} dy\;dx\;dz}}},$ ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{x}^{2}-{z}^{2}}} dy\;dz\;dx}}},$ ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{z}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{y}^{2}-{z}^{2}}} dx\;dy\;dz}}},$ ${\displaystyle \int_{0}^{r} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{y}^{2}}} \;{\displaystyle \int_{0}^{\sqrt{{r}^{2}-{y}^{2}-{z}^{2}}} dx\;dz\;dy}}}$
:::

:::exercise {fs-id1167793409345} type= 
PROBLEM:
The solid $E$ bounded by the equation $9{x}^{2}+4{y}^{2}+{z}^{2}=1$ and located in the first octant is represented in the following figure.

> IMAGE {img:fs-id1167794145466} src=../../media/CNX_Calc_Figure_15_04_206.jpg
> alt: In the first octant, a complex shape is shown that is roughly a solid ovoid with center the origin, height 1, width 0.5, and length 0.35.

a. Write the triple integral that gives the volume of $E$ by integrating first with respect to $z,$ then with $y,$ and then with $x.$
b. Rewrite the integral in part a. as an equivalent integral in five other orders.
:::

:::exercise {fs-id1167793603745} type= 
PROBLEM:
Find the volume of the prism with vertices $(0,0,0),(2,0,0),(2,3,0),$ $(0,3,0),(0,0,1),\;\text{and}\;(2,0,1).$
SOLUTION:
$3$
:::

:::exercise {fs-id1167793378255} type= 
PROBLEM:
Find the volume of the prism with vertices $(0,0,0),(4,0,0),(4,6,0),$ $(0,6,0),(0,0,1),\;\text{and}\;(4,0,1).$
:::

:::exercise {fs-id1167794067778} type= class=material-set-2 
PROBLEM:
The solid $E$ bounded by $z=10-2x-y$ and situated in the first octant is given in the following figure. Find the volume of the solid.

> IMAGE {img:fs-id1167793480008} src=../../media/CNX_Calc_Figure_15_04_207.jpg
> alt: A tetrahedron bounded by the x y, y z, and x z planes and a triangle with vertices (0, 0, 10), (5, 0, 0), and (0, 10, 0).

SOLUTION:
$\frac{250}{3}$
:::

:::exercise {fs-id1167793480037} type= class=material-set-2 
PROBLEM:
The solid $E$ bounded by $z=1-{x}^{2}$ and $y=5$ and situated in the first octant is given in the following figure. Find the volume of the solid.

> IMAGE {img:fs-id1167793480066} src=../../media/CNX_Calc_Figure_15_04_208.jpg
> alt: A complex shape in the first octant with height 1, width 5, and length 1. The shape appears to be a slightly deformed quarter of a cylinder of radius 1 and width 5.

:::

:::exercise {fs-id1167793460707} type= 
PROBLEM:
The midpoint rule for the triple integral ${\displaystyle \iiint\limits_{B}f(x,y,z)dV}$ over the rectangular solid box $B$ is a generalization of the midpoint rule for double integrals. The region $B$ is divided into subboxes of equal sizes and the integral is approximated by the triple Riemann sum ${\displaystyle \sum_{i=1}^{l} {\displaystyle \sum_{j=1}^{m} {\displaystyle \sum_{k=1}^{n} f(\bar{{x}_{i}},\bar{{y}_{j}},\bar{{z}_{k}})}}}\text{Δ}V,$ where $(\bar{{x}_{i}},\bar{{y}_{j}},\bar{{z}_{k}})$ is the center of the box ${B}_{ijk}$ and $\text{Δ}V$ is the volume of each subbox. Apply the midpoint rule to approximate ${\displaystyle \iiint\limits_{B}{x}^{2}dV}$ over the solid $B=\{(x,y,z)|0\le x\le 1,0\le y\le 1,0\le z\le 1\}$ by using a partition of eight cubes of equal size. Round your answer to three decimal places.
SOLUTION:
$\frac{5}{16}\approx 0.313$
:::

:::exercise {fs-id1167793580477} type= 
PROBLEM:
**[T]**
a. Apply the midpoint rule to approximate ${\displaystyle \iiint\limits_{B}{e}^{\text{−}{x}^{2}}dV}$ over the solid $B=\{(x,y,z)|0\le x\le 1,0\le y\le 1,0\le z\le 1\}$ by using a partition of eight cubes of equal size. Round your answer to three decimal places.
b. Use a CAS to improve the above integral approximation in the case of a partition of ${n}^{3}$ cubes of equal size, where $n=3,4\text{,…,}\;10.$
:::

:::exercise {fs-id1167793515848} type= 
PROBLEM:
Suppose that the temperature in degrees Celsius at a point $(x,y,z)$ of a solid $E$ bounded by the coordinate planes and $x+y+z=5$ is $T(x,y,z)=xz+5z+10.$ Find the average temperature over the solid.
SOLUTION:
$\frac{35}{2}$
:::

:::exercise {fs-id1167793930044} type= 
PROBLEM:
Suppose that the temperature in degrees Fahrenheit at a point $(x,y,z)$ of a solid $E$ bounded by the coordinate planes and $x+y+z=5$ is $T(x,y,z)=x+y+xy.$ Find the average temperature over the solid.
:::

:::exercise {fs-id1167793886502} type= 
PROBLEM:
Show that the volume of a right square pyramid of height $h$ and side length $a$ is $v=\frac{h{a}^{2}}{3}$ by using triple integrals.
:::

:::exercise {fs-id1167793886539} type= 
PROBLEM:
Show that the volume of a regular right hexagonal prism of edge length $a$ is $\frac{3{a}^{3}\sqrt{3}}{2}$ by using triple integrals.
:::

:::exercise {fs-id1167793298287} type= 
PROBLEM:
Show that the volume of a regular right hexagonal pyramid of edge length $a$ is $\frac{{a}^{3}\sqrt{3}}{2}$ by using triple integrals.
:::

:::exercise {fs-id1167793298317} type= 
PROBLEM:
If the charge density at an arbitrary point $(x,y,z)$ of a solid $E$ is given by the function $ρ(x,y,z),$ then the total charge inside the solid is defined as the triple integral ${\displaystyle \iiint\limits_{E}ρ(x,y,z)dV}.$ Assume that the charge density of the solid $E$ enclosed by the paraboloids $x=5-{y}^{2}-{z}^{2}$ and $x={y}^{2}+{z}^{2}-5$ is equal to the distance from an arbitrary point of $E$ to the origin. Set up the integral that gives the total charge inside the solid $E.$
:::

## Glossary
- {def} **triple integral**: the triple integral of a continuous function $f(x,y,z)$ over a rectangular solid box $B$ is the limit of a Riemann sum for a function of three variables, if this limit exists

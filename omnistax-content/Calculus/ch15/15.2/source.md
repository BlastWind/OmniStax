# Double Integrals over General Regions

## Learning Objectives {section:learning-objectives}
- Recognize when a function of two variables is integrable over a general region.
- Evaluate a double integral by computing an iterated integral over a region bounded by two vertical lines and two functions of $x,$ or two horizontal lines and two functions of $y.$
- Simplify the calculation of an iterated integral by changing the order of integration.
- Use double integrals to calculate the volume of a region between two surfaces or the area of a plane region.
- Solve problems involving double improper integrals.

In [Double Integrals over Rectangular Regions](module:m53949), we studied the concept of double integrals and examined the tools needed to compute them. We learned techniques and properties to integrate functions of two variables over rectangular regions. We also discussed several applications, such as finding the volume bounded above by a function over a rectangular region, finding area by integration, and calculating the average value of a function of two variables.
In this section we consider double integrals of functions defined over a general bounded region $D$ on the plane. Most of the previous results hold in this situation as well, but some techniques need to be extended to cover this more general case.

## General Regions of Integration
An example of a general bounded region $D$ on a plane is shown in [ref:CNX_Calc_Figure_15_02_001]. Since $D$ is bounded on the plane, there must exist a rectangular region $R$ on the same plane that encloses the region $D,$ that is, a rectangular region $R$ exists such that $D$ is a subset of $R(D\subseteq R).$

> FIGURE {fig:CNX_Calc_Figure_15_02_001} src=../../media/CNX_Calc_Figure_15_02_001.jpg
> alt: A rectangle R with a shape D inside of it. Inside D, there is a point labeled g(x, y) = f(x, y). Outside D but still inside R, there is a point labeled g(x, y) = 0.
> caption: For a region $D$ that is a subset of $R,$ we can define a function $g(x,y)$ to equal $f(x,y)$ at every point in $D$ and $0$ at every point of $R$ not in $D.$

Suppose $z=f(x,y)$ is defined on a general planar bounded region $D$ as in [ref:CNX_Calc_Figure_15_02_001]. In order to develop double integrals of $f$ over $D,$ we extend the definition of the function to include all points on the rectangular region $R$ and then use the concepts and tools from the preceding section. But how do we extend the definition of $f$ to include all the points on $R?$ We do this by defining a new function $g(x,y)$ on $R$ as follows:

$g(x,y)=\{\begin{array}{ll}f(x,y) & \text{if}\;(x,y)\;\text{is in}\;D \\ 0 & \text{if}\;(x,y)\;\text{is in}\;R\;\text{but not in}\;D\end{array}$  {eq:fs-id1167793292241}

Note that we might have some technical difficulties if the boundary of $D$ is complicated. So we assume the boundary to be a piecewise smooth and continuous simple closed curve. Also, since all the results developed in [Double Integrals over Rectangular Regions](module:m53949) used an integrable function $f(x,y),$ we must be careful about $g(x,y)$ and verify that $g(x,y)$ is an integrable function over the rectangular region $R.$ This happens as long as the region $D$ is bounded by simple closed curves. For now we will concentrate on the descriptions of the regions rather than the function and extend our theory appropriately for integration.
We consider two types of planar bounded regions.

:::note [definition] Definition
A region $D$ in the $(x,y)$-plane is of {term:Type I} if it lies between two vertical lines and the graphs of two continuous functions ${g}_{1}(x)$ and ${g}_{2}(x).$ That is ([ref:CNX_Calc_Figure_15_02_002]),

$D=\{(x,y)|a\le x\le b,{g}_{1}(x)\le y\le {g}_{2}(x)\}.$  {eq:fs-id1167793913215}

A region $D$ in the $xy$ plane is of {term:Type II} if it lies between two horizontal lines and the graphs of two continuous functions ${h}_{1}(y)\;\text{and}\;{h}_{2}(y).$ That is ([ref:CNX_Calc_Figure_15_02_003]),

$D=\{(x,y)|c\le y\le d,{h}_{1}(y)\le x\le {h}_{2}(y)\}.$  {eq:fs-id1167794212151}

:::

> FIGURE {fig:CNX_Calc_Figure_15_02_002} src=../../media/CNX_Calc_Figure_15_02_002.jpg
> alt: The graphs showing a region marked D. In all instances, between a and b, there is a shape that is defined by two functions g1(x) and g2(x). In one instance, the two functions do not touch; in another instance, they touch at the end point a, and in the last instance they touch at both end points.
> caption: A Type I region lies between two vertical lines and the graphs of two functions of $x.$

> FIGURE {fig:CNX_Calc_Figure_15_02_003} src=../../media/CNX_Calc_Figure_15_02_003.jpg
> alt: The graphs show a region marked D. In all instances, between c and d, there is a shape that is defined by two vertically oriented functions x = h1(y) and x = h2(y). In one instance, the two functions do not touch; in the other instance, they touch at the end point c.
> caption: A Type II region lies between two horizontal lines and the graphs of two functions of $y.$

:::example {ex:fs-id1167794332513} Describing a Region as Type I and Also as Type II

:::exercise {fs-id1167793929072} type= 
PROBLEM:
Consider the region in the first quadrant between the functions $y=\sqrt{x}$ and $y={x}^{3}$ ([ref:CNX_Calc_Figure_15_02_004]). Describe the region first as Type I and then as Type II.

> FIGURE {fig:CNX_Calc_Figure_15_02_004} src=../../media/CNX_Calc_Figure_15_02_004.jpg
> alt: The region D is drawn between two functions, namely, y = the square root of x and y = x3.
> caption: Region $D$ can be described as Type I or as Type II.

SOLUTION:
When describing a region as Type I, we need to identify the function that lies above the region and the function that lies below the region. Here, region $D$ is bounded above by $y=\sqrt{x}$ and below by $y={x}^{3}$ in the interval for $x\;\text{in}\;[0,1].$ Hence, as Type I, $D$ is described as the set $\{(x,y)|0\le x\le 1,{x}^{3}\le y\le \sqrt{x}\}.$
However, when describing a region as Type II, we need to identify the function that lies on the left of the region and the function that lies on the right of the region. Here, the region $D$ is bounded on the left by $x={y}^{2}$ and on the right by $x=\sqrt[3]{y}$ in the interval for *y* in $[0,1].$ Hence, as Type II, $D$ is described as the set $\{(x,y)|0\le y\le 1,{y}^{2}\le x\le \sqrt[3]{y}\}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794188764} type= 
PROBLEM:
Consider the region in the first quadrant between the functions $y=2x$ and $y={x}^{2}.$ Describe the region first as Type I and then as Type II.
SOLUTION:
Type I and Type II are expressed as $\{(x,y)|0\le x\le 2,{x}^{2}\le y\le 2x\}$ and $\{(x,y)|0\le y\le 4,\frac{1}{2}y\le x\le \sqrt{y}\},$ respectively.
COMMENTARY: Hint
Graph the functions, and draw vertical and horizontal lines.
:::
:::

## Double Integrals over Nonrectangular Regions
To develop the concept and tools for evaluation of a double integral over a general, nonrectangular region, we need to first understand the region and be able to express it as Type I or Type II or a combination of both. Without understanding the regions, we will not be able to decide the limits of integrations in double integrals. As a first step, let us look at the following theorem.

:::note [theorem] Double Integrals over Nonrectangular Regions
Suppose $g(x,y)$ is the extension to the rectangle $R$ of the integrable function $f(x,y)$ defined on the region $D$, where $D$ is inside $R$. Sample regions are as shown in [ref:CNX_Calc_Figure_15_02_001]. Then $g(x,y)$ is integrable and we define the double integral of $f(x,y)$ over $D$ by

${\displaystyle \iint\limits_{D}f(x,y)}dA={\displaystyle \iint\limits_{R}g(x,y)}dA.$  {eq:fs-id1167793956570}

:::
The right-hand side of this equation is what we have seen before, so this theorem is reasonable because $R$ is a rectangle and ${\displaystyle \iint\limits_{R}g(x,y)}dA$ has been discussed in the preceding section. Also, the equality works because the values of $g(x,y)$ are $0$ for any point $(x,y)$ that lies outside $D,$ and hence these points do not add anything to the integral. However, it is important that the rectangle $R$ contains the region $D.$
As a matter of fact, if the region $D$ is bounded by smooth curves on a plane and we are able to describe it as Type I or Type II or a mix of both, then we can use the following theorem and not have to find a rectangle $R$ containing the region.

:::note [theorem] Fubini’s Theorem (Strong Form)
For a function $f(x,y)$ that is continuous on a region $D$ of Type I, we have

$$ {\displaystyle \iint\limits_{D}f(x,y)dA}={\displaystyle \iint\limits_{D}f(x,y)dy\;dx}={\displaystyle \int_{a}^{b} [{\displaystyle \int_{{g}_{1}(x)}^{{g}_{2}(x)} f(x,y)dy}]dx}. $$  {eq:fs-id1167793268925}

Similarly, for a function $f(x,y)$ that is continuous on a region $D$ of Type II, we have

$$ {\displaystyle \iint\limits_{D}f(x,y)dA}={\displaystyle \iint\limits_{D}f(x,y)dx\;dy}={\displaystyle \int_{c}^{d} [{\displaystyle \int_{{h}_{1}(y)}^{{h}_{2}(y)} f(x,y)dx}]dy}. $$  {eq:fs-id1167793944833}

:::
The integral in each of these expressions is an iterated integral, similar to those we have seen before. Notice that, in the inner integral in the first expression, we integrate $f(x,y)$ with $x$ being held constant and the limits of integration being ${g}_{1}(x)\;\text{and}\;{g}_{2}(x).$ In the inner integral in the second expression, we integrate $f(x,y)$ with $y$ being held constant and the limits of integration are ${h}_{1}(y)\;\text{and}\;{h}_{2}(y).$

:::example {ex:fs-id1167793369248} Evaluating an Iterated Integral over a Type I Region

:::exercise {fs-id1167793369250} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{D}{x}^{2}{e}^{xy}dA}$ where $D$ is shown in [ref:CNX_Calc_Figure_15_02_005].
SOLUTION:
First construct the region $D$ as a Type I region ([ref:CNX_Calc_Figure_15_02_005]). Here $D=\{(x,y)|0\le x\le 2,\frac{1}{2}x\le y\le 1\}.$ Then we have

${\displaystyle \iint\limits_{D}{x}^{2}{e}^{xy}dA}={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=1\text{/}2x}^{y=1} {x}^{2}{e}^{xy}dy\;dx}}.$  {eq:fs-id1167793637630}

> FIGURE {fig:CNX_Calc_Figure_15_02_005} src=../../media/CNX_Calc_Figure_15_02_005.jpg
> alt: A triangle marked D drawn with lines y = 1/2 x and y = 1, with vertices (0, 0), (2, 1), and (0, 1). Here, there is a pair of red arrows reaching vertically from one edge to the other.
> caption: We can express region $D$ as a Type I region and integrate from $y=\frac{1}{2}x$ to $y=1,$ between the lines $x=0\;\text{and}\;x=2.$

Therefore, we have

$\begin{array}{rllll}{\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y=\frac{1}{2}x}^{y=1} {x}^{2}{e}^{xy}dy\;dx}} & ={\displaystyle \int_{x=0}^{x=2} [{\displaystyle \int_{y=1\text{/}2x}^{y=1} {x}^{2}{e}^{xy}dy}]}dx & & & \text{Iterated integral for a Type I region.} \\ & ={\displaystyle \int_{x=0}^{x=2} {[{x}^{2}\frac{{e}^{xy}}{x}]|}_{y=1\text{/}2x}^{y=1}}dx & & & \begin{array}{l}\text{Integrate with respect to}\;y\;\text{using} \\ u\text{-substitution with}\;u=xy\;\text{where}\;x\;\text{is held} \\ \text{constant.}\end{array} \\ & ={\displaystyle \int_{x=0}^{x=2} [x{e}^{x}-x{e}^{{x}^{2}\text{/}2}]}dx & & & \begin{array}{l}\text{Integrate with respect to}\;x\;\text{using} \\ u\text{-substitution with}\;u=\frac{1}{2}{x}^{2}.\end{array} \\ & ={[x{e}^{x}-{e}^{x}-{e}^{\frac{1}{2}{x}^{2}}]|}_{x=0}^{x=2}=2 & & & \end{array}$  {eq:fs-id1167794035285}

:::
:::
In [ref:fs-id1167793369248], we could have looked at the region in another way, such as $D=\{(x,y)|0\le y\le 1,0\le x\le 2y\}$ ([ref:CNX_Calc_Figure_15_02_006]).

> FIGURE {fig:CNX_Calc_Figure_15_02_006} src=../../media/CNX_Calc_Figure_15_02_006.jpg
> alt: A triangle marked D drawn with lines x = 2y and y = 1, with vertices (0, 0), (2, 1), and (0, 1). Here there is a pair of red arrows reaching horizontally from one edge to the other.
> caption: 

This is a Type II region and the integral would then look like

${\displaystyle \iint\limits_{D}{x}^{2}{e}^{xy}dA}={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{x=0}^{x=2y} {x}^{2}{e}^{xy}dx\;dy.}}$  {eq:fs-id1167793619091}

However, if we integrate first with respect to $x,$ this integral is lengthy to compute because we have to use integration by parts twice.

:::example {ex:fs-id1167793337942} Evaluating an Iterated Integral over a Type II Region

:::exercise {fs-id1167793337944} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{D}(3{x}^{2}+{y}^{2})dA}$ where $=\{(x,y)|-2\le y\le 3,{y}^{2}-3\le x\le y+3\}.$
SOLUTION:
Notice that $D$ can be seen as either a Type I or a Type II region, as shown in [ref:CNX_Calc_Figure_15_02_007]. However, in this case describing $D$ as Type $\text{I}$ is more complicated than describing it as Type II. Therefore, we use $D$ as a Type II region for the integration.

> FIGURE {fig:CNX_Calc_Figure_15_02_007} src=../../media/CNX_Calc_Figure_15_02_007.jpg
> alt: This figure consists of two figures labeled a and b. In figure a, a region is bounded by y = the square root of the quantity (x + 3), y = the negative of the square root of the quantity (x + 3), and y = x minus 3, which has points of intersection (6, 3), (1, negative 2), and (0, negative 3). There are vertical lines in the shape, and it is noted that this is a type I region: integrate first with respect to y. In figure b, a region is bounded by x = y2 minus 3 and x = y + 3, which has points of intersection (6, 3), (1, negative 2), and (0, negative 3). There are horizontal lines in the shape, and it is noted that this is a type II region: integrate first with respect to x.
> caption: The region $D$ in this example can be either (a) Type I or (b) Type II.

Choosing this order of integration, we have

$\begin{array}{rllll}{\displaystyle \iint\limits_{D}(3{x}^{2}+{y}^{2})dA} & ={\displaystyle \int_{y=−2}^{y=3} \;{\displaystyle \int_{x={y}^{2}-3}^{x=y+3} (3{x}^{2}+{y}^{2})dx\;dy}} & & & \text{Iterated integral, Type II region.} \\ & ={{\displaystyle \int_{y=−2}^{y=3} ({x}^{3}+x{y}^{2})}|}_{{y}^{2}-3}^{y+3}dy & & & \text{Integrate with respect to}\;x. \\ & ={\displaystyle \int_{y=−2}^{y=3} ({(y+3)}^{3}+(y+3){y}^{2}-{({y}^{2}-3)}^{3}-({y}^{2}-3){y}^{2})}dy & & & \\ & ={\displaystyle \int_{−2}^{3} (54+27y-12{y}^{2}+2{y}^{3}+8{y}^{4}-{y}^{6})}dy & & & \text{Integrate with respect to}\;y. \\ & ={[54y+\frac{27{y}^{2}}{2}-4{y}^{3}+\frac{{y}^{4}}{2}+\frac{8{y}^{5}}{5}-\frac{{y}^{7}}{7}]|}_{−2}^{3} & & & \\ & =\frac{2375}{7}. & & & \end{array}$  {eq:fs-id1167793374848}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793516187} type= 
PROBLEM:
Sketch the region $D$ and evaluate the iterated integral ${\displaystyle \iint\limits_{D}xy\;dy\;dx}$ where $D$ is the region bounded by the curves $y=\text{cos}\;x$ and $y=\text{sin}\;x$ in the interval $[−3\pi \text{/}4,\pi \text{/}4].$
SOLUTION:
$\pi \text{/}4$
COMMENTARY: Hint
Express $D$ as a Type I region, and integrate with respect to $y$ first.
:::
:::
Recall from [Double Integrals over Rectangular Regions](module:m53949) the properties of double integrals. As we have seen from the examples here, all these properties are also valid for a function defined on a nonrectangular bounded region on a plane. In particular, property $3$ states:
If $R=S\cup T$ and $S\cap T=\emptyset$ except at their boundaries, then

${\displaystyle \iint\limits_{R}f(x,y)dA}={\displaystyle \iint\limits_{S}f(x,y)dA}+{\displaystyle \iint\limits_{T}f(x,y)dA}.$  {eq:fs-id1167793443519}

Similarly, we have the following property of double integrals over a nonrectangular bounded region on a plane.

:::note [theorem] Decomposing Regions into Smaller Regions
Suppose the region $D$ can be expressed as $D={D}_{1}\cup {D}_{2}$ where ${D}_{1}$ and ${D}_{2}$ do not overlap except at their boundaries. Then

$$ {\displaystyle \iint\limits_{D}f(x,y)dA}={\displaystyle \iint\limits_{{D}_{1}}f(x,y)dA}+{\displaystyle \iint\limits_{{D}_{2}}f(x,y)dA}. $$  {eq:fs-id1167793373592}

:::
This theorem is particularly useful for nonrectangular regions because it allows us to split a region into a union of regions of Type I and Type II. Then we can compute the double integral on each piece in a convenient way, as in the next example.

:::example {ex:fs-id1167793547434} Decomposing Regions

:::exercise {fs-id1167793547436} type= 
PROBLEM:
Express the region $D$ shown in [ref:CNX_Calc_Figure_15_02_008] as a union of regions of Type I or Type II, and evaluate the integral

${\displaystyle \iint\limits_{D}(2x+5y)}dA.$  {eq:fs-id1167793277530}

> FIGURE {fig:CNX_Calc_Figure_15_02_008} src=../../media/CNX_Calc_Figure_15_02_008.jpg
> alt: A complicated shape enclosed by the lines y = (x + 2) squared, x = 16y minus y cubed, x = negative 2, and y = negative 4. This graph has intersection points (0, 4), (negative 2, 0), (0, negative 4), and (negative 2, negative 4).
> caption: This region can be decomposed into a union of three regions of Type I or Type II.

SOLUTION:
The region $D$ is not easy to decompose into any one type; it is actually a combination of different types. So we can write it as a union of three regions ${D}_{1},{D}_{2},\text{and}\;{D}_{3}$ where, ${D}_{1}=\{(x,y)|-2\le x\le 0,0\le y\le {(x+2)}^{2}\},$ ${D}_{2}=\{(x,y)|0\le y\le 4,0\le x\le (y-\frac{1}{16}{y}^{3})\},$ ${D}_{3}={(x,y)-4\le y\le 0,-2\le x\le y-\frac{{y}^{3}}{16}}.$ These regions are illustrated more clearly in [ref:CNX_Calc_Figure_15_02_009].

> FIGURE {fig:CNX_Calc_Figure_15_02_009} src=../../media/CNX_Calc_Figure_15_02_009.jpg
> alt: The same complicated shape enclosed by the lines y = (x + 2) squared, x = 16y minus y cubed, x = negative 2, and y = negative 4. This graph has intersection points (0, 4), (negative 2, 0), (0, negative 4), and (negative 2, negative 4). The area in the first quadrant is marked as D2 and a Type II region. The region in the second quadrant is marked as D1 and is a Type I region. The region in the third quadrant is marked as D3 and is a Type II region.
> caption: Breaking the region into three subregions makes it easier to set up the integration.

Here ${D}_{1}$ is Type $\text{I}$ and ${D}_{2}$ and ${D}_{3}$ are both of Type II. Hence,

$\begin{array}{rl}{\displaystyle \iint\limits_{D}(2x+5y)dA} & ={\displaystyle \iint\limits_{{D}_{1}}(2x+5y)dA}+{\displaystyle \iint\limits_{{D}_{2}}(2x+5y)dA}+{\displaystyle \iint\limits_{{D}_{3}}(2x+5y)dA} \\ & ={\displaystyle \int_{x=−2}^{x=0} \;{\displaystyle \int_{y=0}^{y={(x+2)}^{2}} (2x+5y)dy\;dx}}+{\displaystyle \int_{y=0}^{y=4} \;{\displaystyle \int_{x=0}^{x=y-(1\text{/}16){y}^{3}} (2+5y)dx\;dy}}+{\displaystyle \int_{y=−4}^{y=0} \;{\displaystyle \int_{x=−2}^{x=y-(1\text{/}16){y}^{3}} (2x+5y)dx\;dy}} \\ & ={\displaystyle \int_{x=−2}^{x=0} [\frac{1}{2}{(2+x)}^{2}(20+24x+5{x}^{2})]dx}+{\displaystyle \int_{y=0}^{y=4} [\frac{1}{256}{y}^{6}-\frac{7}{16}{y}^{4}+6{y}^{2}]dy} \\ & \;+{\displaystyle \int_{y=−4}^{y=0} [\frac{1}{256}{y}^{6}-\frac{7}{16}{y}^{4}+6{y}^{2}+10y-4]dy} \\ & =\frac{40}{3}+\frac{1664}{35}-\frac{1696}{35}=\frac{1304}{105}.\end{array}$  {eq:fs-id1167793872341}

Now we could redo this example using a union of two Type II regions (see the Checkpoint).
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793442488} type= 
PROBLEM:
Consider the region bounded by the curves $y=\text{ln}\;x$ and $y={e}^{x}$ in the interval $[1,2].$ Decompose the region into smaller regions of Type II.
SOLUTION:
$\{(x,y)|0\le y\le ln2,1\le x\le {e}^{y}\}\cup \{(x,y)|ln2\le y\le e,1\le x\le 2\}\cup \{(x,y)|e\le y\le {e}^{2},\text{ln}\;y\le x\le 2\}$
COMMENTARY: Hint
Sketch the region, and split it into three regions to set it up.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793268104} type= 
PROBLEM:
Redo [ref:fs-id1167793547434] using a union of two Type II regions.
SOLUTION:
Same as in the example shown.
COMMENTARY: Hint
$\{(x,y)|0\le y\le 4,2+\sqrt{y}\le x\le (y-\frac{1}{16}{y}^{3})\}\cup \{(x,y)|-4\le y\le 0,−2\le x\le (y-\frac{1}{16}{y}^{3})\}$
:::
:::

## Changing the Order of Integration
As we have already seen when we evaluate an iterated integral, sometimes one order of integration leads to a computation that is significantly simpler than the other order of integration. Sometimes the order of integration does not matter, but it is important to learn to recognize when a change in order will simplify our work.

:::example {ex:fs-id1167793384884} Changing the Order of Integration

:::exercise {fs-id1167793384887} type= 
PROBLEM:
Reverse the order of integration in the iterated integral ${\displaystyle \int_{x=0}^{x=\sqrt{2}} \;{\displaystyle \int_{y=0}^{y=2-{x}^{2}} x{e}^{{x}^{2}}dy\;dx}}.$ Then evaluate the new iterated integral.
SOLUTION:
The region as presented is of Type I. To reverse the order of integration, we must first express the region as Type II. Refer to [ref:CNX_Calc_Figure_15_02_010].

> FIGURE {fig:CNX_Calc_Figure_15_02_010} src=../../media/CNX_Calc_Figure_15_02_010.jpg
> alt: This figure consists of two figures labeled Type I and Type II. In the Type I figure, a curve is given as y = 2 minus x squared, which forms a shape with the x and y axes. There is a vertical line with arrows on the end of it within this shape. In the Type II figure, a curve is given as x = the square root of the quantity (2 minus y), which forms a shape with the x and y axes. There is a horizontal line with arrows on the end of it within this shape.
> caption: Converting a region from Type I to Type II.

We can see from the limits of integration that the region is bounded above by $y=2-{x}^{2}$ and below by $y=0,$ where $x$ is in the interval $[0,\sqrt{2}].$ By reversing the order, we have the region bounded on the left by $x=0$ and on the right by $x=\sqrt{2-y}$ where $y$ is in the interval $[0,2].$ We solved $y=2-{x}^{2}$ in terms of $x$ to obtain $x=\sqrt{2-y}.$
Hence

$\begin{array}{rllll}{\displaystyle \int_{0}^{\sqrt{2}} \;{\displaystyle \int_{0}^{2-{x}^{2}} x{e}^{{x}^{2}}dy\;dx}} & ={\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{\sqrt{2-y}} x{e}^{{x}^{2}}dx\;dy}} & & & \begin{array}{l}\text{Reverse the order of} \\ \text{integration then use} \\ \text{substitution.}\end{array} \\ & ={\displaystyle \int_{0}^{2} [\frac{1}{2}{{{e}^{x}}^{2}|}_{0}^{\sqrt{2-y}}]}dy={\displaystyle \int_{0}^{2} \frac{1}{2}({e}^{2-y}-1)}dy={-\frac{1}{2}({e}^{2-y}+y)|}_{0}^{2} & & & \\ & =\frac{1}{2}({e}^{2}-3). & & & \end{array}$  {eq:fs-id1167793263190}

:::
:::

:::example {ex:fs-id1167794188050} Evaluating an Iterated Integral by Reversing the Order of Integration

:::exercise {fs-id1167793521478} type= 
PROBLEM:
Consider the iterated integral ${\displaystyle \iint\limits_{R}f(x,y)}dx\;dy$ where $z=f(x,y)=x-2y$ over a triangular region $R$ that has sides on $x=0,y=0,$ and the line $x+y=1.$ Sketch the region, and then evaluate the iterated integral by
a. integrating first with respect to $y$ and then
b. integrating first with respect to $x.$
SOLUTION:
A sketch of the region appears in [ref:CNX_Calc_Figure_15_02_011].

> FIGURE {fig:CNX_Calc_Figure_15_02_011} src=../../media/CNX_Calc_Figure_15_02_011.jpg
> alt: The line y = 1 minus x is drawn, and it is also marked as x = 1 minus y. There is a shaded region around x = 0 that comes from the y axis, which projects down to make a shaded region marked y = 0 from the x axis.
> caption: A triangular region $R$ for integrating in two ways.

We can complete this integration in two different ways.
a. One way to look at it is by first integrating $y$ from $y=0\;\text{to}\;y=1-x$ vertically and then integrating $x$ from $x=0\;\text{to}\;x=1\text{:}$

$\begin{array}{rl}{\displaystyle \iint\limits_{R}f(x,y)}dx\;dy & ={\displaystyle \int_{x=0}^{x=1} \;{\displaystyle \int_{y=0}^{y=1-x} (x-2y)dy\;dx}=}{\displaystyle \int_{x=0}^{x=1} {[xy-{y}^{2}]}_{y=0}^{y=1-x}dx} \\ & ={\displaystyle \int_{x=0}^{x=1} [x(1-x)-{(1-x)}^{2}]dx={\displaystyle \int_{x=0}^{x=1} [−1+3x-2{x}^{2}]dx=}{[\text{−}x+\frac{3}{2}{x}^{2}-\frac{2}{3}{x}^{3}]}_{x=0}^{x=1}=-\frac{1}{6}}.\end{array}$  {eq:fs-id1167793612495}

b. The other way to do this problem is by first integrating $x$ from $x=0\;\text{to}\;x=1-y$ horizontally and then integrating $y$ from $y=0\;\text{to}\;y=1\text{:}$

$\begin{array}{rl}{\displaystyle \iint\limits_{R}f(x,y)}dx\;dy & ={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{x=0}^{x=1-y} (x-2y)dx\;dy}=}{\displaystyle \int_{y=0}^{y=1} {[\frac{1}{2}{x}^{2}-2xy]}_{x=0}^{x=1-y}dy} \\ & ={\displaystyle \int_{y=0}^{y=1} [\frac{1}{2}{(1-y)}^{2}-2y(1-y)]dy={\displaystyle \int_{y=0}^{y=1} [\frac{1}{2}-3y+\frac{5}{2}{y}^{2}]dy}} \\ & ={[\frac{1}{2}y-\frac{3}{2}{y}^{2}+\frac{5}{6}{y}^{3}]}_{y=0}^{y=1}=-\frac{1}{6}.\end{array}$  {eq:fs-id1167793952827}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793957148} type= 
PROBLEM:
Evaluate the iterated integral ${\displaystyle \iint\limits_{D}({x}^{2}+{y}^{2})}dA$ over the region $D$ in the first quadrant between the functions $y=2x$ and $y={x}^{2}.$ Evaluate the iterated integral by integrating first with respect to $y$ and then integrating first with resect to $x.$
SOLUTION:
$\frac{216}{35}$
COMMENTARY: Hint
Sketch the region and follow [ref:fs-id1167794188050].
:::
:::

## Calculating Volumes, Areas, and Average Values
We can use double integrals over general regions to compute volumes, areas, and average values. The methods are the same as those in [Double Integrals over Rectangular Regions](module:m53949), but without the restriction to a rectangular region, we can now solve a wider variety of problems.

:::example {ex:fs-id1167793776681} Finding the Volume of a Tetrahedron

:::exercise {fs-id1167793776683} type= 
PROBLEM:
Find the volume of the solid bounded by the planes $x=0,y=0,z=0,$ and $2x+3y+z=6.$
SOLUTION:
The solid is a tetrahedron with the base on the $xy$-plane and a height $z=6-2x-3y.$ The base is the region $D$ bounded by the lines, $x=0,y=0$ and $2x+3y=6$ where $z=0$ ([ref:CNX_Calc_Figure_15_02_012]). Note that we can consider the region $D$ as Type I or as Type II, and we can integrate in both ways.

> FIGURE {fig:CNX_Calc_Figure_15_02_012} src=../../media/CNX_Calc_Figure_15_02_012.jpg
> alt: This figure shows a tetrahedron bounded by x = 0, y = 0, z = 0, and 2x + 3y = 6 (or z = 6 minus 2x minus 3y).
> caption: A tetrahedron consisting of the three coordinate planes and the plane $z=6-2x-3y,$ with the base bound by $x=0,y=0,$ and $2x+3y=6.$

First, consider $D$ as a Type I region, and hence $D=\{(x,y)|0\le x\le 3,0\le y\le 2-\frac{2}{3}x\}.$
Therefore, the volume is

$\begin{array}{rl}V & ={\displaystyle \int_{x=0}^{x=3} \;{\displaystyle \int_{y=0}^{y=2-(2x\text{/}3)} (6-2x-3y)dy\;dx}}={\displaystyle \int_{x=0}^{x=3} [{(6y-2xy-\frac{3}{2}{y}^{2})|}_{y=0}^{y=2-(2x\text{/}3)}]}dx \\ & ={\displaystyle \int_{x=0}^{x=3} [\frac{2}{3}{(x-3)}^{2}]}dx=6.\end{array}$  {eq:fs-id1167793589672}

Now consider $D$ as a Type II region, so $D=\{(x,y)|0\le y\le 2,0\le x\le 3-\frac{3}{2}y\}.$ In this calculation, the volume is

$\begin{array}{rl}V & ={\displaystyle \int_{y=0}^{y=2} \;{\displaystyle \int_{x=0}^{x=3-(3y\text{/}2)} (6-2x-3y)dx\;dy}}={\displaystyle \int_{y=0}^{y=2} [{(6x-{x}^{2}-3xy)|}_{x=0}^{x=3-(3y\text{/}2)}]}dy \\ & ={\displaystyle \int_{y=0}^{y=2} [\frac{9}{4}{(y-2)}^{2}]}dy=6.\end{array}$  {eq:fs-id1167793498220}

Therefore, the volume is $6$ cubic units.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793570170} type= 
PROBLEM:
Find the volume of the solid bounded above by $f(x,y)=10-2x+y$ over the region enclosed by the curves $y=0$ and $y={e}^{x},$ where $x$ is in the interval $[0,1].$
SOLUTION:
$\frac{{e}^{2}}{4}+10e-\frac{49}{4}$ cubic units
COMMENTARY: Hint
Sketch the region, and describe it as Type I.
:::
:::
Finding the area of a rectangular region is easy, but finding the area of a nonrectangular region is not so easy. As we have seen, we can use double integrals to find a rectangular area. As a matter of fact, this comes in very handy for finding the area of a general nonrectangular region, as stated in the next definition.

:::note [definition] Definition
The area of a plane-bounded region $D$ is defined as the double integral ${\displaystyle \iint\limits_{D}1dA}.$
:::
We have already seen how to find areas in terms of single integration. Here we are seeing another way of finding areas by using double integrals, which can be very useful, as we will see in the later sections of this chapter.

:::example {ex:fs-id1167794076353} Finding the Area of a Region

:::exercise {fs-id1167794076355} type= 
PROBLEM:
Find the area of the region bounded below by the curve $y={x}^{2}$ and above by the line $y=2x$ in the first quadrant ([ref:CNX_Calc_Figure_15_02_013]).

> FIGURE {fig:CNX_Calc_Figure_15_02_013} src=../../media/CNX_Calc_Figure_15_02_013.jpg
> alt: The line y = 2 x (also marked x = y/2) is shown, as is y = x squared (also marked x = the square root of y). There are vertical and horizontal shadings giving for small stretch of this region, denoting that it can be treated as a Type I or Type II area.
> caption: The region bounded by $y={x}^{2}$ and $y=2x.$

SOLUTION:
We just have to integrate the constant function $f(x,y)=1$ over the region. Thus, the area $A$ of the bounded region is ${\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y={x}^{2}}^{y=2x} dy\;dx}}$ or ${\displaystyle \int_{y=0}^{x=4} \;{\displaystyle \int_{x=y\text{/}2}^{x=\sqrt{y}} dx\;dy}}\text{:}$

$A={\displaystyle \iint\limits_{D}1dx\;dy={\displaystyle \int_{x=0}^{x=2} \;{\displaystyle \int_{y={x}^{2}}^{y=2x} 1dy\;dx=}}}{\displaystyle \int_{x=0}^{x=2} [{y|}_{y={x}^{2}}^{y=2x}]}dx={\displaystyle \int_{x=0}^{x=2} (2x-{x}^{2})}dx={{x}^{2}-\frac{{x}^{3}}{3}|}_{0}^{2}=\frac{4}{3}.$  {eq:fs-id1167793501082}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793219215} type= 
PROBLEM:
Find the area of a region bounded above by the curve $y={x}^{3}$ and below by $y=0$ over the interval $[0,3].$
SOLUTION:
$\frac{81}{4}$ square units
COMMENTARY: Hint
Sketch the region.
:::
:::
We can also use a double integral to find the average value of a function over a general region. The definition is a direct extension of the earlier formula.

:::note [definition] Definition
If $f(x,y)$ is integrable over a plane-bounded region $D$ with positive area $A(D),$ then the average value of the function is

${f}_{ave}=\frac{1}{A(D)}{\displaystyle \iint\limits_{D}f(x,y)dA}.$  {eq:fs-id1167793624580}

Note that the area is $A(D)={\displaystyle \iint\limits_{D}1dA}.$
:::

:::example {ex:fs-id1167793495009} Finding an Average Value

:::exercise {fs-id1167793495011} type= 
PROBLEM:
Find the average value of the function $f(x,y)=7x{y}^{2}$ on the region bounded by the line $x=y$ and the curve $x=\sqrt{y}$ ([ref:CNX_Calc_Figure_15_02_014]).

> FIGURE {fig:CNX_Calc_Figure_15_02_014} src=../../media/CNX_Calc_Figure_15_02_014.jpg
> alt: The lines x = y and x = the square root of y bound a shaded region. There are horizontal dashed lines marked throughout the region.
> caption: The region bounded by $x=y$ and $x=\sqrt{y}.$

SOLUTION:
First find the area $A(D)$ where the region $D$ is given by the figure. We have

$A(D)={\displaystyle \iint\limits_{D}1dA={\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{x=y}^{x=\sqrt{y}} 1dx\;dy={\displaystyle \int_{y=0}^{y=1} [{x|}_{x=y}^{x=\sqrt{y}}]}}}}dy={\displaystyle \int_{y=0}^{y=1} (\sqrt{y}-y)dy=\frac{2}{3}}{y}^{3\text{/}2}-{\frac{{y}^{2}}{2}|}_{0}^{1}=\frac{1}{6}.$  {eq:fs-id1167794207021}

Then the average value of the given function over this region is

$\begin{array}{rl}{f}_{ave} & =\frac{1}{A(D)}{\displaystyle \iint\limits_{D}f(x,y)dA=\frac{1}{A(D)}{\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{x=y}^{x=\sqrt{y}} 7x{y}^{2}dx\;dy=\frac{1}{1\text{/}6}{\displaystyle \int_{y=0}^{y=1} [{\frac{7}{2}{x}^{2}{y}^{2}|}_{x=y}^{x=\sqrt{y}}]}}}}dy \\ & =6{\displaystyle \int_{y=0}^{y=1} [\frac{7}{2}{y}^{2}(y-{y}^{2})]dy=6{\displaystyle \int_{y=0}^{y=1} [\frac{7}{2}({y}^{3}-{y}^{4})]dy}=\frac{42}{2}}{(\frac{{y}^{4}}{4}-\frac{{y}^{5}}{5})|}_{0}^{1}=\frac{42}{40}=\frac{21}{20}.\end{array}$  {eq:fs-id1167793887443}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793371345} type= 
PROBLEM:
Find the average value of the function $f(x,y)=xy$ over the triangle with vertices $(0,0),(1,0)\;\text{and}\;(1,3).$
SOLUTION:
$\frac{3}{4}$
COMMENTARY: Hint
Express the line joining $(0,0)$ and $(1,3)$ as a function $y=g(x).$
:::
:::

## Improper Double Integrals
An {term:improper double integral} is an integral ${\displaystyle \iint\limits_{D}f\;dA}$ where either $D$ is an unbounded region or $f$ is an unbounded function. For example, $D=\{(x,y)||x-y|\ge 2\}$ is an unbounded region, and the function $f(x,y)=1\text{/}(1-{x}^{2}-2{y}^{2})$ over the ellipse ${x}^{2}+2{y}^{2}\le 1$ is an unbounded function. Hence, both of the following integrals are improper integrals:
1. ${\displaystyle \iint\limits_{D}xy\;dA}$ where $D=\{(x,y)||x-y|\ge 2\};$
2. ${\displaystyle \iint\limits_{D}\frac{1}{1-{x}^{2}-2{y}^{2}}dA}$ where $D=\{(x,y)|{x}^{2}+2{y}^{2}\le 1\}.$
In this section we would like to deal with improper integrals of functions over rectangles or simple regions such that $f$ has only finitely many discontinuities. Not all such improper integrals can be evaluated; however, a form of Fubini’s theorem does apply for some types of improper integrals.

:::note [theorem] Fubini’s Theorem for Improper Integrals
If $D$ is a bounded rectangle or simple region in the plane defined by $\{(x,y)\text{:}\;a\le x\le b,g(x)\le y\le h(x)\}$ and also by $\{(x,y)\text{:}\;c\le y\le d,j(y)\le x\le k(y)\}$ and $f$ is a nonnegative function on $D$ with finitely many discontinuities in the interior of $D,$ then

${\displaystyle \iint\limits_{D}f\;dA={\displaystyle \int_{x=a}^{x=b} \;{\displaystyle \int_{y=g(x)}^{y=h(x)} f(x,y)dy\;dx=}}}{\displaystyle \int_{y=c}^{y=d} \;{\displaystyle \int_{x=j(y)}^{x=k(y)} f(x,y)dx\;dy}}.$  {eq:fs-id1167793450774}

:::
It is very important to note that we required that the function be nonnegative on $D$ for the theorem to work. We consider only the case where the function has finitely many discontinuities inside $D.$

:::example {ex:fs-id1167793290983} Evaluating a Double Improper Integral

:::exercise {fs-id1167793290985} type= 
PROBLEM:
Consider the function $f(x,y)=\frac{{e}^{y}}{y}$ over the region $D=\{(x,y)\text{:}\;0\le x\le 1,x\le y\le \sqrt{x}\}.$
Notice that the function is nonnegative and continuous at all points on $D$ except $(0,0).$ Use Fubini’s theorem to evaluate the improper integral.
SOLUTION:
First we plot the region $D$ ([ref:CNX_Calc_Figure_15_02_015]); then we express it in another way.

> FIGURE {fig:CNX_Calc_Figure_15_02_015} src=../../media/CNX_Calc_Figure_15_02_015.jpg
> alt: The line y = x is shown, as is y = the square root of x.
> caption: The function $f$ is continuous at all points of the region $D$ except $(0,0).$

The other way to express the same region $D$ is

$D=\{(x,y)\text{:}\;0\le y\le 1,{y}^{2}\le x\le y\}.$  {eq:fs-id1167793638859}

Thus we can use Fubini’s theorem for improper integrals and evaluate the integral as

${\displaystyle \int_{y=0}^{y=1} \;{\displaystyle \int_{x={y}^{2}}^{x=y} \frac{{e}^{y}}{y}}}dx\;dy.$  {eq:fs-id1167794294745}

Therefore, we have

$\int_{y=0}^{y=1} \;\int_{x={y}^{2}}^{x=y} \frac{{e}^{y}}{y}dx\;dy=\int_{y=0}^{y=1} \frac{{e}^{y}}{y}{x|}_{x={y}^{2}}^{x=y}dy=\int_{y=0}^{y=1} \frac{{e}^{y}}{y}(y-{y}^{2})dy=\int_{0}^{1} ({e}^{y}-y{e}^{y})dy=e-2.$  {eq:fs-id1167793447639}

:::
:::
As mentioned before, we also have an improper integral if the region of integration is unbounded. Suppose now that the function $f$ is continuous in an unbounded rectangle $R.$

:::note [theorem] Improper Integrals on an Unbounded Region
If $R$ is an unbounded rectangle such as $R=\{(x,y)\text{:}\;a\le x<\infty ,c\le y<\infty \},$ then when the limit exists, we have ${\displaystyle \iint\limits_{R}f(x,y)}dA=\lim_{(b,d)\to (\infty ,\infty )}{\displaystyle \int_{a}^{b} ({\displaystyle \int_{c}^{d} f(x,y)dy})dx=}\lim_{(b,d)\to (\infty ,\infty )}{\displaystyle \int_{c}^{d} ({\displaystyle \int_{a}^{b} f(x,y)dx})dy.}$
:::
The following example shows how this theorem can be used in certain cases of improper integrals.

:::example {ex:fs-id1167793991236} Evaluating a Double Improper Integral

:::exercise {fs-id1167793991238} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}xy{e}^{\text{−}{x}^{2}-{y}^{2}}}dA$ where $R$ is the first quadrant of the plane.
SOLUTION:
The region $R$ is the first quadrant of the plane, which is unbounded. So

$\begin{array}{rl}{\displaystyle \iint\limits_{R}xy{e}^{\text{−}{x}^{2}-{y}^{2}}}dA & =\lim_{(b,d)\to (\infty ,\infty )}{\displaystyle \int_{x=0}^{x=b} ({\displaystyle \int_{y=0}^{y=d} xy{e}^{\text{−}{x}^{2}-{y}^{2}}dy})dx=}\lim_{(b,d)\to (\infty ,\infty )}{\displaystyle \int_{y=0}^{y=d} ({\displaystyle \int_{x=0}^{x=b} xy{e}^{\text{−}{x}^{2}-{y}^{2}}dx})dy} \\ & =\lim_{(b,d)\to (\infty ,\infty )}\frac{1}{4}(1-{e}^{\text{−}{b}^{2}})(1-{e}^{\text{−}{d}^{2}})=\frac{1}{4}\end{array}$  {eq:fs-id1167793633933}

Thus, ${\displaystyle \iint\limits_{R}xy{e}^{\text{−}{x}^{2}-{y}^{2}}}dA$ is convergent and the value is $\frac{1}{4}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793941275} type= 
PROBLEM:
Evaluate the improper integral ${\displaystyle \iint\limits_{D}\frac{y}{\sqrt{1-{x}^{2}-{y}^{2}}}dA}$ where $D=\{(x,y)|x\ge 0,y\ge 0,{x}^{2}+{y}^{2}\le 1\}.$
SOLUTION:
$\frac{\pi}{4}$
COMMENTARY: Hint
Notice that the integral is nonnegative and discontinuous on ${x}^{2}+{y}^{2}=1.$ Express the region $D$ as $D=\{(x,y)\text{:}\;0\le x\le 1,0\le y\le \sqrt{1-{x}^{2}}\}$ and integrate using the method of substitution.
:::
:::
In some situations in probability theory, we can gain insight into a problem when we are able to use double integrals over general regions. Before we go over an example with a double integral, we need to set a few definitions and become familiar with some important properties.

:::note [definition] Definition
Consider a pair of continuous random variables $X$ and $Y,$ such as the birthdays of two people or the number of sunny and rainy days in a month. The {index:joint density function} $f$ of $X$ and $Y$ satisfies the probability that $(X,Y)$ lies in a certain region $D\text{:}$

$P((X,Y)\in D)={\displaystyle \iint\limits_{D}f(x,y)}dA.$  {eq:fs-id1167793233870}

Since the probabilities can never be negative and must lie between $0$ and $1,$ the joint density function satisfies the following inequality and equation:

$f(x,y)\ge 0\;\text{and}\;{\displaystyle \iint\limits_{{R}^{2}}f(x,y)}dA=1.$  {eq:fs-id1167793422007}

:::

:::note [definition] Definition
The variables $X$ and $Y$ are said to be {index:independent random variables} if their joint density function is the product of their individual density functions:

$f(x,y)={f}_{1}(x){f}_{2}(y).$  {eq:fs-id1167793618944}

:::

:::example {ex:fs-id1167793556451} Application to Probability

:::exercise {fs-id1167793556453} type= 
PROBLEM:
At Sydney’s Restaurant, customers must wait an average of $15$ minutes for a table. From the time they are seated until they have finished their meal requires an additional $40$ minutes, on average. What is the probability that a customer spends less than an hour and a half at the diner, assuming that waiting for a table and completing the meal are independent events?
SOLUTION:
Waiting times are mathematically modeled by exponential density functions, with $m$ being the average waiting time, as

$f(t)=\{\begin{array}{ll}0 & \text{if}\;t<0, \\ \frac{1}{m}{e}^{\text{−}t\text{/}m} & \text{if}\;t\ge 0.\end{array}$  {eq:fs-id1167793581635}

If $X$ and $Y$ are random variables for ‘waiting for a table’ and ‘completing the meal,’ then the probability density functions are, respectively,

${f}_{1}(x)=\{\begin{array}{ll}0 & \text{if}\;x<0, \\ \frac{1}{15}{e}^{\text{−}x\text{/}15} & \text{if}\;x\ge 0.\end{array}\;\text{and}\;{f}_{2}(y)=\{\begin{array}{ll}0 & \text{if}\;y<0, \\ \frac{1}{40}{e}^{\text{−}y\text{/}40} & \text{if}\;y\ge 0.\end{array}$  {eq:fs-id1167793376182}

Clearly, the events are independent and hence the joint density function is the product of the individual functions

$f(x,y)={f}_{1}(x){f}_{2}(y)=\{\begin{array}{ll}0 & \text{if}\;x<0\;\text{or}\;y<0, \\ \frac{1}{600}{e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}60} & \text{if}\;x,y\ge 0.\end{array}$  {eq:fs-id1167793619911}

We want to find the probability that the combined time $X+Y$ is less than $90$ minutes. In terms of geometry, it means that the region $D$ is in the first quadrant bounded by the line $x+y=90$ ([ref:CNX_Calc_Figure_15_02_016]).

> FIGURE {fig:CNX_Calc_Figure_15_02_016} src=../../media/CNX_Calc_Figure_15_02_016.jpg
> alt: The line x + y = 90 is shown.
> caption: The region of integration for a joint probability density function.

Hence, the probability that $(X,Y)$ is in the region $D$ is

$P(X+Y\le 90)=P((X,Y)\in D)={\displaystyle \iint\limits_{D}f(x,y)dA=}{\displaystyle \iint\limits_{D}\frac{1}{600}{e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}40}dA}.$  {eq:fs-id1167793409869}

Since $x+y=90$ is the same as $y=90-x,$ we have a region of Type I, so

$\begin{array}{lll}D & = & \{(x,y)|0\le x\le 90,0\le y\le 90-x\}, \\ P(X+Y\le 90) & = & \begin{array}{ll}\frac{1}{600} & \int_{x=0}^{x=90} \int_{y=0}^{y=90-x} {e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}40}dydx\end{array} \\ & = & \begin{array}{ll}\frac{1}{600} & \int_{x=0}^{x=90} \int_{y=0}^{y=90-x} {e}^{\text{−}(x\text{/}15+y\text{/}40)}dydx=0.8328.\end{array}\end{array}$  {eq:fs-id1167793689640}

Thus, there is an $83.28\text{\%}$ chance that a customer spends less than an hour and a half at the restaurant.
:::
:::
Another important application in probability that can involve improper double integrals is the calculation of expected values. First we define this concept and then show an example of a calculation.

:::note [definition] Definition
In probability theory, we denote the {index:expected values} $E(X)$ and $E(Y),$ respectively, as the most likely outcomes of the events. The expected values $E(X)$ and $E(Y)$ are given by

$E(X)={\displaystyle \iint\limits_{S}xf(x,y)}dA\;\text{and}\;E(Y)={\displaystyle \iint\limits_{S}yf(x,y)}dA,$  {eq:fs-id1167793358292}

where $S$ is the sample space of the random variables $X$ and $Y.$
:::

:::example {ex:fs-id1167793298466} Finding Expected Value

:::exercise {fs-id1167793298468} type= 
PROBLEM:
Find the expected time for the events ‘waiting for a table’ and ‘completing the meal’ in [ref:fs-id1167793556451].
SOLUTION:
Using the first quadrant of the rectangular coordinate plane as the sample space, we have improper integrals for $E(X)$ and $E(Y).$ The expected time for a table is

$\begin{array}{rl}E(X) & ={\displaystyle \iint\limits_{S}x\frac{1}{600}}{e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}40}dA=\frac{1}{600}{\displaystyle \int_{x=0}^{x=\infty} \;{\displaystyle \int_{y=0}^{y=\infty} x{e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}40}dA}} \\ & =\frac{1}{600}\lim_{(a,b)\to (\infty ,\infty )}{\displaystyle \int_{x=0}^{x=a} \;{\displaystyle \int_{y=0}^{y=b} x{e}^{\text{−}x\text{/}15}{e}^{\text{−}y\text{/}40}dx\;dy}} \\ & =\frac{1}{600}(\lim_{a\to \infty}{\displaystyle \int_{x=0}^{x=a} x{e}^{\text{−}x\text{/}15}dx})(\lim_{b\to \infty}{\displaystyle \int_{y=0}^{y=b} {e}^{\text{−}y\text{/}40}dy}) \\ & =\frac{1}{600}({(\lim_{a\to \infty}(−15{e}^{\text{−}x\text{/}15}(x+15)))|}_{x=0}^{x=a})({(\lim_{b\to \infty}(−40{e}^{\text{−}y\text{/}40}))|}_{y=0}^{y=b}) \\ & =\frac{1}{600}(\lim_{a\to \infty}(−15{e}^{\text{−}a\text{/}15}(x+15)+225))(\lim_{b\to \infty}(−40{e}^{\text{−}b\text{/}40}+40)) \\ & =\frac{1}{600}(225)(40) \\ & =15.\end{array}$  {eq:fs-id1167793958614}

A similar calculation shows that $E(Y)=40.$ This means that the expected values of the two random events are the average waiting time and the average dining time, respectively.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793499072} type= 
PROBLEM:
The joint density function for two random variables $X$ and $Y$ is given by

$f(x,y)=\begin{array}{ll}\frac{1}{16250}({x}^{2}+{y}^{2}) & \text{if}\;0\le x\le 15,0\le y\le 10 \\ 0 & \text{otherwise}\end{array}$  {eq:fs-id1167793499088}

Find the probability that $X$ is at most $10$ and $Y$ is at least $5.$
SOLUTION:
$\frac{11}{39}\approx 0.282$
COMMENTARY: Hint
Compute the probability $P(X\le 10,Y\ge 5)={\displaystyle \int_{x=\text{−}\infty}^{10} \;{\displaystyle \int_{y=5}^{y=10} \frac{1}{6000}}}({x}^{2}+{y}^{2})dy\;dx.$
:::
:::

## Key Concepts {section:key-concepts}
- A general bounded region $D$ on the plane is a region that can be enclosed inside a rectangular region. We can use this idea to define a double integral over a general bounded region.
- To evaluate an iterated integral of a function over a general nonrectangular region, we sketch the region and express it as a Type I or as a Type II region or as a union of several Type I or Type II regions that overlap only on their boundaries.
- We can use double integrals to find volumes, areas, and average values of a function over general regions, similarly to calculations over rectangular regions.
- We can use Fubini’s theorem for improper integrals to evaluate some types of improper integrals.

## Key Equations {section:key-equations}

> TABLE {tab:eip-551} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Iterated integral over a Type I region** | ${\displaystyle \iint\limits_{D}f(x,y)dA}={\displaystyle \iint\limits_{D}f(x,y)dy\;dx}={\displaystyle \int_{a}^{b} [{\displaystyle \int_{{g}_{1}(x)}^{{g}_{2}(x)} f(x,y)dy}]dx}$ |
| **Iterated integral over a Type II region** | ${\displaystyle \iint\limits_{D}f(x,y)dA}={\displaystyle \iint\limits_{D}f(x,y)dx\;dy}={\displaystyle \int_{c}^{d} [{\displaystyle \int_{{h}_{1}(y)}^{{h}_{2}(y)} f(x,y)dx}]dy}$ |

##  {section:section-exercises}
In the following exercises, specify whether the region is of Type I or Type II.

:::exercise {fs-id1167793495393} type= 
PROBLEM:
The region $D$ bounded by $y={x}^{3},$ $y={x}^{3}+1,$ $x=0,$ and $x=1$ as given in the following figure.

> IMAGE {img:fs-id1167793368900} src=../../media/CNX_Calc_Figure_15_02_201.jpg
> alt: A region is bounded by y = 1 + x cubed, y = x cubed, x = 0, and x = 1.

:::

:::exercise {fs-id1167793254923} type= 
PROBLEM:
Find the average value of the function $f(x,y)=3xy$ on the region graphed in the previous exercise.
SOLUTION:
$\frac{27}{20}$
:::

:::exercise {fs-id1167793254975} type= 
PROBLEM:
Find the area of the region $D$ given in the previous exercise.
:::

:::exercise {fs-id1167793275090} type= 
PROBLEM:
The region $D$ bounded by $y=\text{sin}\;x,y=1+\text{sin}\;x,x=0,\;\text{and}\;x=\frac{\pi}{2}$ as given in the following figure.

> IMAGE {img:fs-id1167793515908} src=../../media/CNX_Calc_Figure_15_02_202.jpg
> alt: A region is bounded by y = 1 + sin x, y = sin x, x = 0, and x = pi/2.

SOLUTION:
Type I but not Type II
:::

:::exercise {fs-id1167793515928} type= 
PROBLEM:
Find the average value of the function $f(x,y)=\text{cos}\;x$ on the region graphed in the previous exercise.
:::

:::exercise {fs-id1167793286947} type= 
PROBLEM:
Find the area of the region $D$ given in the previous exercise.
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1167793286974} type= 
PROBLEM:
The region $D$ bounded by $x={y}^{2}-1$ and $x=\sqrt{1-{y}^{2}}$ as given in the following figure.

> IMAGE {img:fs-id1167793495429} src=../../media/CNX_Calc_Figure_15_02_203.jpg
> alt: A region is bounded by x = negative 1 + y squared and x = the square root of the quantity (1 minus y squared).

:::

:::exercise {fs-id1167793495450} type= 
PROBLEM:
Find the volume of the solid under the graph of the function $f(x,y)=xy+1$ and above the region in the figure in the previous exercise.
SOLUTION:
$\frac{1}{6}(8+3\pi )$
:::

:::exercise {fs-id1167793930828} type= 
PROBLEM:
The region $D$ bounded by $y=0,x=−10+y,\;\text{and}\;x=10-y$ as given in the following figure.

> IMAGE {img:fs-id1167793720910} src=../../media/CNX_Calc_Figure_15_02_204.jpg
> alt: A region is bounded by x = negative 10 + y, x = 10 minus y, and y = 0.

:::

:::exercise {fs-id1167793720930} type= 
PROBLEM:
Find the signed volume of the solid under the graph of the function $f(x,y)=x+y$ and above the region in the figure from the previous exercise.
SOLUTION:
$\frac{1000}{3}$
:::

:::exercise {fs-id1167793502469} type= 
PROBLEM:
The region $D$ bounded by $y=0,x=y-1,$ $x=\frac{\pi}{2}$ as given in the following figure.

> IMAGE {img:fs-id1167793378460} src=../../media/CNX_Calc_Figure_15_02_205.jpg
> alt: A region is bounded by x = pi/2, y = 0, and x = negative 1 + y.

:::

:::exercise {fs-id1167793378480} type= 
PROBLEM:
The region $D$ bounded by $y=0$ and $y={x}^{2}-1$ as given in the following figure.

> IMAGE {img:fs-id1167793378519} src=../../media/CNX_Calc_Figure_15_02_206.jpg
> alt: A region is bounded by y = 0 and y = negative 1 + x squared.

SOLUTION:
Type I and Type II
:::

:::exercise {fs-id1167793960056} type= 
PROBLEM:
Let $D$ be the region bounded by the curve $y=2-{x}^{2}$ and below the equations $y=x,y=\text{−}x,$ Explain why $D$ is neither of Type I nor II.
:::

:::exercise {fs-id1167793959356} type= 
PROBLEM:
Let $D$ be the region bounded above by the curve of the equation $y=4-{x}^{2}$ and below by $y=\text{cos}x$ and the $x$-axis. Explain why $D$ is neither of Type I nor II.
SOLUTION:
The region $D$ is not of Type I: it does not lie between two vertical lines and the graphs of two continuous functions ${g}_{1}(x)$ and ${g}_{2}(x).$ The region $D$ is not of Type II: it does not lie between two horizontal lines and the graphs of two continuous functions ${h}_{1}(y)$ and ${h}_{2}(y).$
:::
In the following exercises, evaluate the double integral ${\displaystyle \iint\limits_{D}f(x,y)}dA$ over the region $D.$

:::exercise {fs-id1167793372495} type= 
PROBLEM:
$f(x,y)=2x+5y$ and $D=\{(x,y)|0\le x\le 1,{x}^{3}\le y\le {x}^{3}+1\}$
:::

:::exercise {fs-id1167793570697} type= 
PROBLEM:
$f(x,y)=1$ and $D=\{(x,y)|0\le x\le \frac{\pi}{2},\text{sin}\;x\le y\le 1+\text{sin}\;x\}$
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1167793460743} type= 
PROBLEM:
$f(x,y)=2$ and $D=\{(x,y)|0\le y\le 1,y-1\le x\le \text{arccos}\;y\}$
:::

:::exercise {fs-id1167793377948} type= 
PROBLEM:
$f(x,y)=xy$ and $D=\{(x,y)|-1\le y\le 1,{y}^{2}-1\le x\le \sqrt{1-{y}^{2}}\}$
SOLUTION:
$0$
:::

:::exercise {fs-id1167793380043} type= 
PROBLEM:
$f(x,y)=\text{sin}\;y$ and $D$ is the triangular region with vertices $(0,0),(0,3),\;\text{and}\;(3,0)$
:::

:::exercise {fs-id1167793373520} type= 
PROBLEM:
$f(x,y)=\text{−}x+1$ and $D$ is the triangular region with vertices $(0,0),(0,2),\;\text{and}\;(2,2)$
SOLUTION:
$\frac{2}{3}$
:::
Evaluate the iterated integrals.

:::exercise {fs-id1167793279358} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{2x}^{3x} (x+{y}^{2})}}dy\;dx$
:::

:::exercise {fs-id1167793293644} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{2\sqrt{x}}^{2\sqrt{x}+1} (xy+1)}}dy\;dx$
SOLUTION:
$\frac{41}{20}$
:::

:::exercise {fs-id1167793221754} type= 
PROBLEM:
${\displaystyle \int_{e}^{{e}^{2}} \;{\displaystyle \int_{\text{ln}\;u}^{2} (v+\text{ln}\;u)}}dv\;du$
:::

:::exercise {fs-id1167793957760} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{\text{−}{u}^{2}-1}^{\text{−}u} (8uv)}}dv\;du$
SOLUTION:
$−63$
:::

:::exercise {fs-id1167793372398} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}\sqrt{1-{y}^{2}}}^{\sqrt{1-{y}^{2}}} (2x+4{x}^{3})}}dx\;dy$
:::

:::exercise {fs-id1167793547396} type= 
PROBLEM:
${\displaystyle \int_{0}^{1\text{/}2} \;{\displaystyle \int_{\text{−}\sqrt{1-4{y}^{2}}}^{\sqrt{1-4{y}^{2}}} 4}}dx\;dy$
SOLUTION:
$\pi$
:::

:::exercise {fs-id1167793939851} type= 
PROBLEM:
Let $D$ be the region in the first quadrant bounded by $y=1-{x}^{2},y=4-{x}^{2},$ and the $x$- and $y$-axes.
a. Show that ${\displaystyle \iint\limits_{D}x\;dA={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1-{x}^{2}}^{4-{x}^{2}} x\;dy\;dx}}}+{\displaystyle \int_{1}^{2} \;{\displaystyle \int_{0}^{4-{x}^{2}} x\;dy\;dx}}$ by dividing the region $D$ into two regions of Type I.
b. Evaluate the integral ${\displaystyle \iint\limits_{D}x\;dA}.$
:::

:::exercise {fs-id1167794222465} type= 
PROBLEM:
Let $D$ be the region bounded by $y=1,$ $y=x,$ $y=\text{ln}\;x,$ and the $x$-axis.
a. Show that ${\displaystyle \iint\limits_{D}}y\;dA={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{x} y\;dy\;dx}}+{\displaystyle \int_{1}^{e} \;{\displaystyle \int_{\text{ln}\;x}^{1} y\;dy\;dx}}$ by dividing $D$ into two regions of Type I.
b. Evaluate the integral ${\displaystyle \iint\limits_{D}y\;dA}.$
SOLUTION:
a. Answers may vary; b. $\frac{2}{3}$
:::

:::exercise {fs-id1167793300283} type= 
PROBLEM:
a. Show that ${\displaystyle \iint\limits_{D}}{y}^{2}dA={\displaystyle \int_{−1}^{0} \;{\displaystyle \int_{\text{−}x}^{2-{x}^{2}} {y}^{2}dy\;dx}}+{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{x}^{2-{x}^{2}} {y}^{2}dy\;dx}}$ by dividing the region $D$ into two regions of Type I, where $D=\{(x,y)|y\ge x,y\ge -x,y\le 2-{x}^{2}\}.$
b. Evaluate the integral ${\displaystyle \iint\limits_{D}{y}^{2}}dA.$
:::

:::exercise {fs-id1167793569301} type= 
PROBLEM:
Let $D$ be the region bounded by $y={x}^{2},y=x+2,$ and $y=\text{−}x.$
a. Show that ${\displaystyle \iint\limits_{D}}x\;dA={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{\text{−}y}^{\sqrt{y}} x\;dx\;dy}}+{\displaystyle \int_{1}^{4} \;{\displaystyle \int_{y-2}^{\sqrt{y}} x\;dx\;dy}}$ by dividing the region $D$ into two regions of Type II, where $D=\{(x,y)|y\ge {x}^{2},y\ge -x,y\le x+2\}.$
b. Evaluate the integral ${\displaystyle \iint\limits_{D}x}\;dA.$
SOLUTION:
a. Answers may vary; b. $\frac{7}{3}$
:::

:::exercise {fs-id1167793593444} type= 
PROBLEM:
The region $D$ bounded by $x=0,y={x}^{5}+1,$ and $y=3-{x}^{2}$ is shown in the following figure. Find the area $A(D)$ of the region $D.$

> IMAGE {img:fs-id1167793375431} src=../../media/CNX_Calc_Figure_15_02_207.jpg
> alt: A region is bounded by y = 1 + x to the fifth power, y = 3 minus x squared, and x = 0.

:::

:::exercise {fs-id1167793375458} type= 
PROBLEM:
The region $D$ bounded by $y=\text{cos}\;x,y=4+\text{cos}\;x,$ and $x=\pm \frac{\pi}{3}$ is shown in the following figure. Find the area $A(D)$ of the region $D.$

> IMAGE {img:fs-id1167793571240} src=../../media/CNX_Calc_Figure_15_02_208.jpg
> alt: A region is bounded by y = cos x, y = 4 + cos x, x = negative 1, and x = 1.

SOLUTION:
$\frac{8\pi}{3}$
:::

:::exercise {fs-id1167793571270} type= 
PROBLEM:
Find the area $A(D)$ of the region $D=\{(x,y)|y\ge 1-{x}^{2},y\le 4-{x}^{2},y\ge 0,x\ge 0\}.$
:::

:::exercise {fs-id1167794042898} type= 
PROBLEM:
Let $D$ be the region bounded by $y=1,y=x,y=\text{ln}\;x,$ and the $x$-axis. Find the area $A(D)$ of the region $D.$
SOLUTION:
$e-\frac{3}{2}$
:::

:::exercise {fs-id1167793377774} type= 
PROBLEM:
Find the average value of the function $f(x,y)=\text{sin}\;y$ on the triangular region with vertices $(0,0),(0,3),$ and $(3,0).$
:::

:::exercise {fs-id1167794210554} type= 
PROBLEM:
Find the average value of the function $f(x,y)=\text{−}x+1$ on the triangular region with vertices $(0,0),(0,2),$ and $(2,2).$
SOLUTION:
$\frac{1}{3}$
:::
In the following exercises, change the order of integration and evaluate the integral.

:::exercise {fs-id1167793943768} type= 
PROBLEM:
${\displaystyle \int_{−1}^{\pi \text{/}2} \;{\displaystyle \int_{0}^{x+1} \text{sin}\;x\;dy\;dx}}$
:::

:::exercise {fs-id1167794324551} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{x-1}^{1-x} x\;dy\;dx}}$
SOLUTION:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{x-1}^{1-x} x\;dy\;dx}}={\displaystyle \int_{−1}^{0} \;{\displaystyle \int_{0}^{y+1} x\;dx\;dy}}+{\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{1-y} x\;dxd}}y=\frac{1}{3}$
:::

:::exercise {fs-id1167793581959} type= 
PROBLEM:
${\displaystyle \int_{−1}^{0} \;{\displaystyle \int_{\text{−}\sqrt{y+1}}^{\sqrt{y+1}} {y}^{2}dx\;dy}}$
:::

:::exercise {fs-id1167793639905} type= 
PROBLEM:
$\int_{\text{−1}}^{1} \;\int_{\text{−}\sqrt{1-{y}^{2}}}^{\sqrt{1-{y}^{2}}} y\;dx\;dy$
SOLUTION:
$\int_{\text{−1}}^{1} \;\int_{\text{−}\sqrt{1-{y}^{2}}}^{\sqrt{1-{y}^{2}}} y\;dx\;dy=\int_{\text{−1}}^{1} \;\int_{\text{−}\sqrt{1-{x}^{2}}}^{\sqrt{1-{x}^{2}}} y\;dy\;dx=0$
:::

:::exercise {fs-id1167793502281} type= 
PROBLEM:
The region $D$ is shown in the following figure. Evaluate the double integral ${\displaystyle \iint\limits_{D}({x}^{2}+y)dA}$ by using the easier order of integration.

> IMAGE {img:fs-id1167793502327} src=../../media/CNX_Calc_Figure_15_02_209.jpg
> alt: A region is bounded by y = negative 4 + x squared and y = 4 minus x squared.

:::

:::exercise {fs-id1167793467381} type= 
PROBLEM:
The region $D$ is given in the following figure. Evaluate the double integral ${\displaystyle \iint\limits_{D}({x}^{2}-{y}^{2})dA}$ by using the easier order of integration.

> IMAGE {img:fs-id1167793467429} src=../../media/CNX_Calc_Figure_15_02_210.jpg
> alt: A region is bounded by y to the fourth power = 1 minus x and y to the fourth power = 1 + x.

SOLUTION:
${\displaystyle \iint\limits_{D}({x}^{2}-{y}^{2})dA}={\displaystyle \int_{−1}^{1} \;{\displaystyle \int_{{y}^{4}-1}^{1-{y}^{4}} ({x}^{2}-{y}^{2})dx\;dy}}=\frac{464}{4095}$
:::

:::exercise {fs-id1167793244521} type= 
PROBLEM:
Find the volume of the solid under the surface $z=2x+{y}^{2}$ and above the region bounded by $y={x}^{5}$ and $y=x.$
:::

:::exercise {fs-id1167793372893} type= 
PROBLEM:
Find the volume in the first octant of the solid under the plane $z=3x+y$ and above the region determined by $y={x}^{7}$ and $y=x.$
SOLUTION:
$\frac{4}{5}$
:::

:::exercise {fs-id1167793245921} type= 
PROBLEM:
Find the volume of the solid under the plane $z=x-y$ and above the region bounded by $x=\text{tan}\;y,x=\text{−}\text{tan}\;y,$ and $x=1.$
:::

:::exercise {fs-id1167793938026} type= 
PROBLEM:
Find the volume of the solid under the surface $z={x}^{3}$ and above the plane region bounded by $x=\text{sin}\;y,x=\text{−}\text{sin}\;y,$ and $x=1$  for values of $y$ between $y=\frac{–π}{2}\;\text{and}\;y=\frac{π}{2}$
SOLUTION:
$\frac{5\pi}{32}$
:::

:::exercise {fs-id1167793379950} type= 
PROBLEM:
Let $g$ be a positive, increasing, and differentiable function on the interval $[a,b].$ Show that the volume of the solid under the surface $z=g'(x)$ and above the region bounded by $y=0,$ $y=g(x),$ $x=a,$ and $x=b$ is given by $\frac{1}{2}({g}^{2}(b)-{g}^{2}(a)).$
:::

:::exercise {fs-id1167794041846} type= 
PROBLEM:
Let $g$ be a positive, increasing, and differentiable function on the interval $[a,b],$ and let $k$ be a positive real number. Show that the volume of the solid under the surface $z=g'(x)$ and above the region bounded by $y=g(x),y=g(x)+k,x=a,$ and $x=b$ is given by $k(g(b)-g(a)).$
:::

:::exercise {fs-id1167793544808} type= 
PROBLEM:
Find the volume of the solid situated in the first octant and determined by the planes $z=2,$ $z=0,x+y=1,x=0,\;\text{and}\;y=0.$
:::

:::exercise {fs-id1167793544886} type= 
PROBLEM:
Find the volume of the solid situated in the first octant and bounded by the planes $x+2y=1,$ $x=0,y=0,z=4,\;\text{and}\;z=0.$
SOLUTION:
$1$
:::

:::exercise {fs-id1167794222830} type= 
PROBLEM:
Find the volume of the solid bounded by the planes $x+y=1,x-y=1,x=0,z=0,$ and $z=10.$
:::

:::exercise {fs-id1167793409397} type= 
PROBLEM:
Find the volume of the solid bounded by the planes $x+y=1,x-y=1,x+y=−1,$ $x-y=−1,z=1\;\text{and}\;z=0.$
SOLUTION:
$2$
:::

:::exercise {fs-id1167793568959} type= 
PROBLEM:
Let ${S}_{1}$ and ${S}_{2}$ be the solids situated in the first octant under the planes $x+y+z=1$ and $x+y+2z=1,$ respectively, and let $S$ be the solid situated between ${S}_{1},{S}_{2},x=0,\;\text{and}\;y=0.$
a. Find the volume of the solid ${S}_{1}.$
b. Find the volume of the solid ${S}_{2}.$
c. Find the volume of the solid $S$ by subtracting the volumes of the solids ${S}_{1}\;\text{and}\;{S}_{2}.$
:::

:::exercise {fs-id1167794296849} type= 
PROBLEM:
Let ${S}_{1}\;\text{and}\;{S}_{2}$ be the solids situated in the first octant under the planes $2x+2y+z=2$ and $x+y+z=1,$ respectively, and let $S$ be the solid situated between ${S}_{1},{S}_{2},x=0,\;\text{and}\;y=0.$
a. Find the volume of the solid ${S}_{1}.$
b. Find the volume of the solid ${S}_{2}.$
c. Find the volume of the solid $S$ by subtracting the volumes of the solids ${S}_{1}\;\text{and}\;{S}_{2}.$
SOLUTION:
a. $\frac{1}{3};$ b. $\frac{1}{6};$ c. $\frac{1}{6}$
:::

:::exercise {fs-id1167794336012} type= 
PROBLEM:
Let ${S}_{1}\;\text{and}\;{S}_{2}$ be the solids situated in the first octant under the plane $x+y+z=2$ and under the sphere ${x}^{2}+{y}^{2}+{z}^{2}=4,$ respectively. If the volume of the solid ${S}_{2}$ is $\frac{4\pi}{3},$ determine the volume of the solid $S$ situated between ${S}_{1}$ and ${S}_{2}$ by subtracting the volumes of these solids.
:::

:::exercise {fs-id1167793378197} type= 
PROBLEM:
Consider the plane $x+y+z=2$ and the cylinder ${x}^{2}+{y}^{2}=4$in the first octant.  
a. Find the volume under the plane.
b. Find the volume inside the cylinder under the plane $z=2$.
c. Find the volume above the plane, inside the cylinder, and below the plane $z=2$.

SOLUTION:
a. $\frac{4}{3};$ b. $2\pi ;$ c. $\frac{6\pi -4}{3}$
:::

:::exercise {fs-id1167794067759} type= 
PROBLEM:
**[T]** The following figure shows the region $D$ bounded by the curves $y=\text{sin}\;x,$ $x=0,$ and $y={x}^{4}.$ Use a graphing calculator or CAS to find the $x$-coordinates of the intersection points of the curves and to determine the area of the region $D.$ Round your answers to six decimal places.

> IMAGE {img:fs-id1167793417011} src=../../media/CNX_Calc_Figure_15_02_211.jpg
> alt: A region is bounded by y = sin x, y = x to the fourth power, and x = 0.

:::

:::exercise {fs-id1167793417063} type= 
PROBLEM:
**[T]** The region $D$ bounded by the curves $y=\text{cos}\;x,x=0,\;\text{and}\;y={x}^{3}$ is shown in the following figure. Use a graphing calculator or CAS to find the *x*-coordinates of the intersection points of the curves and to determine the area of the region $D.$ Round your answers to six decimal places.

> IMAGE {img:fs-id1167793455224} src=../../media/CNX_Calc_Figure_15_02_212.jpg
> alt: A region is bounded by y = cos x, y = x cubed, and x = 0.

SOLUTION:
$0\;\text{and}\;0.865474;$ $A(D)=0.621135$
:::

:::exercise {fs-id1167793338647} type= 
PROBLEM:
Suppose that $(X,Y)$ is the outcome of an experiment that must occur in a particular region $S$ in the $xy$-plane. In this context, the region $S$ is called the sample space of the experiment and $X\;\text{and}\;Y$ are random variables. If $D$ is a region included in $S,$ then the probability of $(X,Y)$ being in $D$ is defined as $P[(X,Y)\in D]={\displaystyle \iint\limits_{D}p(x,y)dx\;dy},$ where $p(x,y)$ is the joint probability density of the experiment. Here, $p(x,y)$ is a nonnegative function for which ${\displaystyle \iint\limits_{S}p(x,y)dx\;dy=1}.$ Assume that a point $(X,Y)$ is chosen arbitrarily in the square $[0,3]\;\times \;[0,3]$ with the probability density
$p(x,y)=\{\begin{array}{ll}\frac{1}{9} & (x,y)\in [0,3]\;\times \;[0,3], \\ 0 & \text{otherwise}\text{.}\end{array}$
Find the probability that the point $(X,Y)$ is inside the unit square and interpret the result.
:::

:::exercise {fs-id1167793930116} type= 
PROBLEM:
Consider $X\;\text{and}\;Y$ two random variables of probability densities ${p}_{1}(x)$ and ${p}_{2}(y),$ respectively. The random variables $X\;\text{and}\;Y$ are said to be independent if their joint density function is given by $p(x,y)={p}_{1}(x){p}_{2}(y).$ At a drive-thru restaurant, customers spend, on average, $3$ minutes placing their orders and an additional $5$ minutes paying for and picking up their meals. Assume that placing the order and paying for/picking up the meal are two independent events $X$ and $Y.$ If the waiting times are modeled by the exponential probability densities
$\begin{array}{lllllll}{p}_{1}(x)=\{\begin{array}{ll}\frac{1}{3}{e}^{\text{−}x\text{/}3} & x\ge 0, \\ 0 & \text{otherwise,}\end{array} & & & \text{and} & & & {p}_{2}(y)=\{\begin{array}{ll}\frac{1}{5}{e}^{\text{−}y\text{/}5} & y\ge 0, \\ 0 & \text{otherwise,}\end{array}\end{array}$
respectively, the probability that a customer will spend less than 6 minutes in the drive-thru line is given by $P[X+Y\le 6]={\displaystyle \iint\limits_{D}p(x,y)dx\;dy},$ where $D=\{(x,y)\}|x\ge 0,y\ge 0,x+y\le 6\}.$ Find $P[X+Y\le 6]$ and interpret the result.
SOLUTION:
$P[X+Y\le 6]=1+\frac{3}{2{e}^{2}}-\frac{5}{{e}^{6\text{/}5}}\approx 0.45;$ there is a $45\text{\%}$ chance that a customer will spend $6$ minutes in the drive-thru line.
:::

:::exercise {fs-id1167793425886} type= 
PROBLEM:
**[T]** The {index:Reuleaux triangle} consists of an equilateral triangle and three regions, each of them bounded by a side of the triangle and an arc of a circle of radius *s* centered at the opposite vertex of the triangle. Show that the area of the Reuleaux triangle in the following figure of side length $s$ is $\frac{{s}^{2}}{2}(\pi -\sqrt{3}).$

> IMAGE {img:fs-id1167793479190} src=../../media/CNX_Calc_Figure_15_02_213.jpg
> alt: An equilateral triangle with additional regions consisting of three arcs of a circle with radius equal to the length of the side of the triangle. These arcs connect two adjacent vertices, and the radius is taken from the opposite vertex.

:::

:::exercise {fs-id1167793479206} type= 
PROBLEM:
**[T]** Show that the area of the {index:lunes of Alhazen}, the two blue lunes in the following figure, is the same as the area of the right triangle *ABC*. The outer boundaries of the lunes are semicircles of diameters $AB\;\text{and}\;BC,$ respectively, and the inner boundaries are formed by the circumcircle of the triangle $ABC.$

> IMAGE {img:fs-id1167793479262} src=../../media/CNX_Calc_Figure_15_02_214.jpg
> alt: A right triangle with points A, B, and C. Point B has the right angle. There are two lunes drawn from A to B and from B to C with outer diameters AB and AC, respectively, and with the inner boundaries formed by the circumcircle of the triangle ABC.

:::

## Glossary
- {def} **improper double integral**: a double integral over an unbounded region or of an unbounded function
- {def} **Type I**: a region $D$ in the $xy$-plane is Type I if it lies between two vertical lines and the graphs of two continuous functions ${g}_{1}(x)$ and ${g}_{2}(x)$
- {def} **Type II**: a region $D$ in the $xy$-plane is Type II if it lies between two horizontal lines and the graphs of two continuous functions ${h}_{1}(y)\;\text{and}\;{h}_{2}(y)$

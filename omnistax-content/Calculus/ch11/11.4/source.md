# Area and Arc Length in Polar Coordinates

## Learning Objectives {section:learning-objectives}
- Apply the formula for area of a region in polar coordinates.
- Determine the arc length of a polar curve.

In the rectangular coordinate system, the definite integral provides a way to calculate the area under a curve. In particular, if we have a function $y=f(x)$ defined from $x=a$ to $x=b$ where $f(x)>0$ on this interval, the area between the curve and the *x*-axis is given by $A={\displaystyle \int_{a}^{b}f(x)\;dx}.$ This fact, along with the formula for evaluating this integral, is summarized in the Fundamental Theorem of Calculus. Similarly, the arc length of this curve is given by $L={\displaystyle \int_{a}^{b}\sqrt{1+{({f}^{'}(x))}^{2}}dx}.$ In this section, we study analogous formulas for area and arc length in the polar coordinate system.

## Areas of Regions Bounded by Polar Curves
We have studied the formulas for area under a curve defined in rectangular coordinates and parametrically defined curves. Now we turn our attention to deriving a formula for the area of a region bounded by a polar curve. Recall that the proof of the Fundamental Theorem of Calculus used the concept of a Riemann sum to approximate the area under a curve by using rectangles. For polar curves we use the Riemann sum again, but the rectangles are replaced by sectors of a circle.
Consider a curve defined by the function $r=f(\theta ),$ where $\alpha \le \theta \le β.$ Our first step is to partition the interval $[\alpha ,β]$ into *n* equal-width subintervals. The width of each subinterval is given by the formula $\text{Δ}\theta =(β-\alpha )\text{/}n,$ and the *i*th partition point ${\theta}_{i}$ is given by the formula ${\theta}_{i}=\alpha +i\text{Δ}\theta .$ Each partition point $\theta ={\theta}_{i}$ defines a line with slope $\text{tan}{\theta}_{i}$ passing through the pole as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_11_04_001} src=../../media/CNX_Calc_Figure_11_04_001.jpg
> alt: On the polar coordinate plane, a curve is drawn in the first quadrant, and there are rays from the origin that intersect this curve at a regular interval. Every time one of these rays intersects the curve, a perpendicular arc is made from the ray to the next ray. The first instance of a ray-curve intersection is labeled θ = α; the last instance is labeled θ = β. The intervening ones are marked θ1, θ2, …, θn−1.
> caption: A partition of a typical curve in polar coordinates.

The line segments are connected by arcs of constant radius. This defines sectors whose areas can be calculated by using a geometric formula. The area of each sector is then used to approximate the area between successive line segments. We then sum the areas of the sectors to approximate the total area. This approach gives a Riemann sum approximation for the total area. The formula for the area of a sector of a circle is illustrated in the following figure.

> FIGURE {fig:CNX_Calc_Figure_11_04_002} src=../../media/CNX_Calc_Figure_11_04_002.jpg
> alt: A circle is drawn with radius r and a sector of angle θ. It is noted that A = (1/2) θ r2.
> caption: The area of a sector of a circle is given by $A=\frac{1}{2}\theta {r}^{2}.$

Recall that the area of a circle is $A=\pi {r}^{2}.$ When measuring angles in radians, 360 degrees is equal to $2\pi$ radians. Therefore a fraction of a circle can be measured by the central angle $\theta .$ The fraction of the circle is given by $\frac{\theta}{2\pi},$ so the area of the sector is this fraction multiplied by the total area:

$A=(\frac{\theta}{2\pi})\;\pi {r}^{2}=\frac{1}{2}\theta {r}^{2}.$  {eq:fs-id1167793784066}

Since the radius of a typical sector in [ref:CNX_Calc_Figure_11_04_001] is given by ${r}_{i}=f({\theta}_{i}),$ the area of the *i*th sector is given by

${A}_{i}=\frac{1}{2}(\text{Δ}\theta ){(f({\theta}_{i}))}^{2}.$  {eq:fs-id1167794097560}

Therefore a Riemann sum that approximates the area is given by

${A}_{n}={\displaystyle \sum_{i=1}^{n} {A}_{i}}\approx {\displaystyle \sum_{i=1}^{n} \frac{1}{2}(\text{Δ}\theta ){(f({\theta}_{i}))}^{2}}.$  {eq:fs-id1167794146111}

We take the limit as $n\to \infty$ to get the exact area:

$A=\lim_{n\to \infty}{A}_{n}=\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{(f(\theta ))}^{2}d\theta}.$  {eq:fs-id1167793983076}

This gives the following theorem.

:::note [theorem] Area of a Region Bounded by a Polar Curve
Suppose $f$ is continuous and nonnegative on the interval $\alpha \le \theta \le β$ with $0<β-\alpha \le 2\pi .$ The area of the region bounded by the graph of $r=f(\theta )$ between the radial lines $\theta =\alpha$ and $\theta =β$ is

$$ A=\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{[f(\theta )]}^{2}d\theta}=\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{r}^{2}d\theta}. $$  {eq:fs-id1167793300455}

:::

:::example {ex:fs-id1167793900982} Finding an Area of a Polar Region

:::exercise {fs-id1167793905656} type= 
PROBLEM:
Find the area of one petal of the rose defined by the equation $r=3\;\text{sin}(2\theta ).$
SOLUTION:
The graph of $r=3\;\text{sin}(2\theta )$ follows.

> FIGURE {fig:CNX_Calc_Figure_11_04_003} src=../../media/CNX_Calc_Figure_11_04_003.jpg
> alt: A four-petaled rose with furthest extent 3 from the origin at π/4, 3π/4, 5π/4, and 7π/4.
> caption: The graph of $r=3\;\text{sin}(2\theta ).$

When $\theta =0$ we have $r=3\;\text{sin}(2(0))=0.$ The next value for which $r=0$ is $\theta =\pi \text{/}2.$ This can be seen by solving the equation $3\;\text{sin}(2\theta )=0$ for $\theta .$ Therefore the values $\theta =0$ to $\theta =\pi \text{/}2$ trace out the first petal of the rose. To find the area inside this petal, use [ref:fs-id1167793300455] with $f(\theta )=3\;\text{sin}(2\theta ),$ $\alpha =0,$ and $β=\pi \text{/}2\text{:}$

$\begin{array}{rl}A & =\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{[f(\theta )]}^{2}d\theta} \\ & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}{[3\;\text{sin}(2\theta )]}^{2}d\theta} \\ & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}9\;{\text{sin}}^{2}(2\theta )\;d\theta}.\end{array}$  {eq:fs-id1167793990528}

To evaluate this integral, use the formula ${\text{sin}}^{2}\alpha =(1-\text{cos}(2\alpha ))\text{/}2$ with $\alpha =2\theta \text{:}$

$\begin{array}{rl}A & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}9\;{\text{sin}}^{2}(2\theta )\;d\theta} \\ & =\frac{9}{2}{\displaystyle \int_{0}^{\pi \text{/}2}\frac{(1-\text{cos}(4\theta ))}{2}d\theta} \\ & =\frac{9}{4}({\displaystyle \int_{0}^{\pi \text{/}2}1-\text{cos}(4\theta )\;d\theta}) \\ & =\frac{9}{4}{(\theta -\frac{\text{sin}(4\theta )}{4})}_{0}^{\pi \text{/}2} \\ & =\frac{9}{4}(\frac{\pi}{2}-\frac{\text{sin}\;2\pi}{4})-\frac{9}{4}(0-\frac{\text{sin}\;4(0)}{4}) \\ & =\frac{9\pi}{8}.\end{array}$  {eq:fs-id1167793876806}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793268934} type= 
PROBLEM:
Find the area inside the cardioid defined by the equation $r=1-\text{cos}\;\theta .$
SOLUTION:
$A=3\pi \text{/}2$
COMMENTARY: Hint
Use [ref:fs-id1167793300455]. Be sure to determine the correct limits of integration before evaluating.
:::
:::
[ref:fs-id1167793900982] involved finding the area inside one curve. We can also use [ref:fs-id1167794048381] to find the area between two polar curves. However, we often need to find the points of intersection of the curves and determine which function defines the outer curve or the inner curve between these two points.

:::example {ex:fs-id1167793240668} Finding the Area between Two Polar Curves

:::exercise {fs-id1167793260217} type= 
PROBLEM:
Find the area outside the cardioid $r=2+2\;\text{sin}\;\theta$ and inside the circle $r=6\;\text{sin}\;\theta .$
SOLUTION:
First draw a graph containing both curves as shown.

> FIGURE {fig:CNX_Calc_Figure_11_04_004} src=../../media/CNX_Calc_Figure_11_04_004.jpg
> alt: A cardioid with equation r = 2 + 2 sinθ is shown, so it has its upper heart part at the origin and the rest of the cardioid is pointed up. There is a circle with radius 6 centered at (3, π/2). The area above the cardioid but below the circle is shaded orange.
> caption: The region between the curves $r=2+2\;\text{sin}\;\theta$ and $r=6\;\text{sin}\;\theta .$

To determine the limits of integration, first find the points of intersection by setting the two functions equal to each other and solving for $\theta \text{:}$

$\begin{array}{rll}6\;\text{sin}\;\theta & = & 2+2\;\text{sin}\;\theta \\ 4\;\text{sin}\;\theta & = & 2 \\ \text{sin}\;\theta & = & \frac{1}{2}.\end{array}$  {eq:fs-id1167794188708}

This gives the solutions $\theta =\frac{\pi}{6}$ and $\theta =\frac{5\pi}{6},$ which are the limits of integration. The circle $r=3\;\text{sin}\;\theta$ is the red graph, which is the outer function, and the cardioid $r=2+2\;\text{sin}\;\theta$ is the blue graph, which is the inner function. To calculate the area between the curves, start with the area inside the circle between $\theta =\frac{\pi}{6}$ and $\theta =\frac{5\pi}{6},$ then subtract the area inside the cardioid between $\theta =\frac{\pi}{6}$ and $\theta =\frac{5\pi}{6}\text{:}$

$\begin{array}{rl}A & =\text{circle}-\text{cardioid} \\ & =\frac{1}{2}{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}{[6\;\text{sin}\;\theta ]}^{2}d\theta}-\frac{1}{2}{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}{[2+2\;\text{sin}\;\theta ]}^{2}d\theta} \\ & =\frac{1}{2}{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}36\;{\text{sin}}^{2}\theta \;d\theta}-\frac{1}{2}{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}[4+8\;\text{sin}\;\theta +4\;{\text{sin}}^{2}\theta ]\;d\theta} \\ & =18{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}\frac{1-\text{cos}(2\theta )}{2}d\theta}-2{\displaystyle \int_{\pi \text{/}6}^{5\pi \text{/}6}[1+2\;\text{sin}\;\theta +\frac{1-\text{cos}(2\theta )}{2}]d\theta} \\ & =9{[\theta -\frac{\text{sin}(2\theta )}{2}]}_{\pi \text{/}6}^{5\pi \text{/}6}-2{[\frac{3\theta}{2}-2\;\text{cos}\;\theta -\frac{\text{sin}(2\theta )}{4}]}_{\pi \text{/}6}^{5\pi \text{/}6} \\ & =9(\frac{5\pi}{6}-\frac{\text{sin}\;2(5\pi \text{/}6)}{2})-9(\frac{\pi}{6}-\frac{\text{sin}\;2(\pi \text{/}6)}{2}) \\ & \;\text{−}(3(\frac{5\pi}{6})-4\;\text{cos}\;\frac{5\pi}{6}-\frac{\text{sin}\;2(5\pi \text{/}6)}{2})+(3(\frac{\pi}{6})-4\;\text{cos}\;\frac{\pi}{6}-\frac{\text{sin}\;2(\pi \text{/}6)}{2}) \\ & =4\pi .\end{array}$  {eq:fs-id1167794331207}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793361540} type= 
PROBLEM:
Find the area inside the circle $r=4\;\text{cos}\;\theta$ and outside the circle $r=2.$
SOLUTION:
$A=\frac{4\pi}{3}+2\sqrt{3}$
COMMENTARY: Hint
Use [ref:fs-id1167793300455] and take advantage of symmetry.
:::
:::
In [ref:fs-id1167793240668] we found the area inside the circle and outside the cardioid by first finding their intersection points. Notice that solving the equation directly for $\theta$ yielded two solutions: $\theta =\frac{\pi}{6}$ and $\theta =\frac{5\pi}{6}.$ However, in the graph there are three intersection points. The third intersection point is the origin. The reason why this point did not show up as a solution is because the origin is on both graphs but for different values of $\theta .$ For example, for the cardioid we get

$\begin{array}{rll}2+2\;\text{sin}\;\theta & = & 0 \\ \text{sin}\;\theta & = & −1,\end{array}$  {eq:fs-id1167793292188}

so the values for $\theta$ that solve this equation are $\theta =\frac{3\pi}{2}+2n\pi ,$ where *n* is any integer. For the circle we get

$6\;\text{sin}\;\theta =0.$  {eq:fs-id1167793369434}

The solutions to this equation are of the form $\theta =n\pi$ for any integer value of *n.* These two solution sets have no points in common. Regardless of this fact, the curves intersect at the origin. This case must always be taken into consideration.

## Arc Length in Polar Curves
Here we derive a formula for the arc length of a curve defined in polar coordinates.
In rectangular coordinates, the arc length of a parameterized curve $(x(t),y(t))$ for $a\le t\le b$ is given by

$L={\displaystyle \int_{a}^{b}\sqrt{{(\frac{dx}{dt})}^{2}+{(\frac{dy}{dt})}^{2}}dt}.$  {eq:fs-id1167793291969}

In polar coordinates we define the curve by the equation $r=f(\theta ),$ where $\alpha \le \theta \le β.$ In order to adapt the arc length formula for a polar curve, we use the equations

$x=r\;\text{cos}\;\theta =f(\theta )\;\text{cos}\;\theta \;\text{and}\;y=r\;\text{sin}\;\theta =f(\theta )\;\text{sin}\;\theta ,$  {eq:fs-id1167793292257}

and we replace the parameter *t* by $\theta .$ Then

$\begin{array}{l}\frac{dx}{d\theta}={f}^{'}(\theta )\;\text{cos}\;\theta -f(\theta )\;\text{sin}\;\theta \\ \frac{dy}{d\theta}={f}^{'}(\theta )\;\text{sin}\;\theta +f(\theta )\;\text{cos}\;\theta .\end{array}$  {eq:fs-id1167793366827}

We replace $dt$ by $d\theta ,$ and the lower and upper limits of integration are $\alpha$ and $β,$ respectively. Then the arc length formula becomes

$\begin{array}{rl}L & ={\displaystyle \int_{a}^{b}\sqrt{{(\frac{dx}{dt})}^{2}+{(\frac{dy}{dt})}^{2}}dt} \\ & ={\displaystyle \int_{\alpha}^{β}\sqrt{{(\frac{dx}{d\theta})}^{2}+{(\frac{dy}{d\theta})}^{2}}d\theta} \\ & ={\displaystyle \int_{\alpha}^{β}\sqrt{{({f}^{'}(\theta )\;\text{cos}\;\theta -f(\theta )\;\text{sin}\;\theta )}^{2}+{({f}^{'}(\theta )\;\text{sin}\;\theta +f(\theta )\;\text{cos}\;\theta )}^{2}}d\theta} \\ & ={\displaystyle \int_{\alpha}^{β}\sqrt{{({f}^{'}(\theta ))}^{2}({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta )+{(f(\theta ))}^{2}({\text{cos}}^{2}\theta +{\text{sin}}^{2}\theta )}d\theta} \\ & ={\displaystyle \int_{\alpha}^{β}\sqrt{{({f}^{'}(\theta ))}^{2}+{(f(\theta ))}^{2}}d\theta} \\ & ={\displaystyle \int_{\alpha}^{β}\sqrt{{r}^{2}+{(\frac{dr}{d\theta})}^{2}}d\theta}.\end{array}$  {eq:fs-id1167793301094}

This gives us the following theorem.

:::note [theorem] Arc Length of a Curve Defined by a Polar Function
Let $f$ be a function whose derivative is continuous on an interval $\alpha \le \theta \le β.$ The length of the graph of $r=f(\theta )$ from $\theta =\alpha$ to $\theta =β$ is

$$ L={\displaystyle \int_{\alpha}^{β}\sqrt{{[f(\theta )]}^{2}+{[{f}^{'}(\theta )]}^{2}}d\theta ={\displaystyle \int_{\alpha}^{β}\sqrt{{r}^{2}+{(\frac{dr}{d\theta})}^{2}}d\theta .}} $$  {eq:fs-id1167793300660}

:::

:::example {ex:fs-id1167793301176} Finding the Arc Length of a Polar Curve

:::exercise {fs-id1167793301178} type= 
PROBLEM:
Find the arc length of the cardioid $r=2+2\;\text{cos}\;\theta .$
SOLUTION:
When $\theta =0,r=2+2\;\text{cos}\;0=4.$ Furthermore, as $\theta$ goes from  $0$ to $2\pi \text{,}$ the cardioid is traced out exactly once. Therefore these are the limits of integration. Using $f(\theta )=2+2\;\text{cos}\;\theta ,$ $\alpha =0,$ and $β=2\pi \text{,}$ [ref:fs-id1167793300660] becomes

$\begin{array}{rl}L & ={\displaystyle \int_{\alpha}^{β}\sqrt{{[f(\theta )]}^{2}+{[{f}^{'}(\theta )]}^{2}}}\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{{[2+2\;\text{cos}\;\theta ]}^{2}+{[-2\;\text{sin}\;\theta ]}^{2}}}\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{4+8\;\text{cos}\;\theta +4\;{\text{cos}}^{2}\;\theta +4\;{\text{sin}}^{2}\;\theta}}\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{4+8\;\text{cos}\;\theta +4({\text{cos}}^{2}\;\theta +{\text{sin}}^{2}\;\theta )}}\;d\theta \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{8+8\;\text{cos}\;\theta}}\;d\theta \\ & =2{\displaystyle \int_{0}^{2\pi}\sqrt{2+2\;\text{cos}\;\theta}}\;d\theta .\end{array}$  {eq:fs-id1171360536181}

Next, using the identity $\text{cos}(2\alpha )=2\;{\text{cos}}^{2}\alpha -1,$ add 1 to both sides and multiply by 2. This gives  $2+2\;\text{cos}(2\alpha )=4\;{\text{cos}}^{2}\alpha .$ Substituting $\alpha =\theta \text{/}2$ gives $2+2\;\text{cos}\;\theta =4\;{\text{cos}}^{2}(\theta \text{/}2),$ so the integral becomes

$\begin{array}{rl}L & =2{\displaystyle \int_{0}^{2\pi}\sqrt{2+2\;\text{cos}\;\theta}}d\theta \\ & =2{\displaystyle \int_{0}^{2\pi}\sqrt{4\;{\text{cos}}^{2}(\frac{\theta}{2})}d\theta} \\ & =2{\displaystyle \int_{0}^{2\pi}2|\text{cos}(\frac{\theta}{2})|d\theta}.\end{array}$  {eq:fs-id1167793278471}

The absolute value is necessary because the cosine is negative for some values in its domain. To resolve this issue, change the limits from $0$ to $\pi$ and double the answer. This strategy works because cosine is positive between $0$ and $\frac{\pi}{2}.$ Thus,

$\begin{array}{rl}L & =4{\displaystyle \int_{0}^{2\pi}|\text{cos}(\frac{\theta}{2})|d\theta} \\ & =8{\displaystyle \int_{0}^{\pi}\text{cos}(\frac{\theta}{2})\;d\theta} \\ & =8{(2\;\text{sin}(\frac{\theta}{2}))}_{0}^{\pi} \\ & =16.\end{array}$  {eq:fs-id1167793366736}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793241096} type= 
PROBLEM:
Find the total arc length of $r=3\;\text{sin}\;\theta .$
SOLUTION:
$s=3\pi$
COMMENTARY: Hint
Use [ref:fs-id1167793300660]. To determine the correct limits, make a table of values.
:::
:::

## Key Concepts {section:key-concepts}
- The area of a region in polar coordinates defined by the equation $r=f(\theta )$ with $\alpha \le \theta \le β$ is given by the integral $A=\frac{1}{2}{{\displaystyle \int_{\alpha}^{β}[f(\theta )]}}^{2}d\theta .$
- To find the area between two curves in the polar coordinate system, first find the points of intersection, then subtract the corresponding areas.
- The arc length of a polar curve defined by the equation $r=f(\theta )$ with $\alpha \le \theta \le β$ is given by the integral $L={\displaystyle \int_{\alpha}^{β}\sqrt{{[f(\theta )]}^{2}+{[{f}^{'}(\theta )]}^{2}}d\theta ={\displaystyle \int_{\alpha}^{β}\sqrt{{r}^{2}+{(\frac{dr}{d\theta})}^{2}}d\theta}}.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-531} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Area of a region bounded by a polar curve** | $A=\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{[f(\theta )]}^{2}d\theta}=\frac{1}{2}{\displaystyle \int_{\alpha}^{β}{r}^{2}d\theta}$ |
| **Arc length of a polar curve** | $L={\displaystyle \int_{\alpha}^{β}\sqrt{{[f(\theta )]}^{2}+{[{f}^{'}(\theta )]}^{2}}}d\theta ={\displaystyle \int_{\alpha}^{β}\sqrt{{r}^{2}+{(\frac{dr}{d\theta})}^{2}}d\theta}$ |

##  {section:section-exercises}
For the following exercises, determine a definite integral that represents the area.

:::exercise {fs-id1167793363493} type= 
PROBLEM:
Region enclosed by $r=4$
:::

:::exercise {fs-id1167793361414} type= 
PROBLEM:
Region enclosed by $r=3\;\text{sin}\;\theta$
SOLUTION:
$\frac{9}{2}{\displaystyle \int_{0}^{\pi}{\text{sin}}^{2}\theta \;d\theta}$
:::

:::exercise {fs-id1167793363662} type= 
PROBLEM:
Region in the first quadrant within the cardioid $r=1+\text{sin}\;\theta$
:::

:::exercise {fs-id1167793363740} type= 
PROBLEM:
Region enclosed by one petal of $r=8\;\text{sin}(2\theta )$
SOLUTION:
$32{\displaystyle \int_{0}^{\pi \text{/}2}{\text{sin}}^{2}(2\theta )d\theta}$
:::

:::exercise {fs-id1167793369680} type= 
PROBLEM:
Region enclosed by one petal of $r=\text{cos}(3\theta )$
:::

:::exercise {fs-id1167793366455} type= 
PROBLEM:
Region below the polar axis and enclosed by $r=1-\text{sin}\;\theta$
SOLUTION:
$\frac{1}{2}{\displaystyle \int_{\pi}^{2\pi}{(1-\text{sin}\;\theta )}^{2}d\theta}$
:::

:::exercise {fs-id1167793361609} type= 
PROBLEM:
Region in the first quadrant enclosed by $r=2-\text{cos}\;\theta$
:::

:::exercise {fs-id1167793361687} type= 
PROBLEM:
Region enclosed by the inner loop of $r=2-3\;\text{sin}\;\theta$
SOLUTION:
${\displaystyle \int_{{\text{sin}}^{−1}(2\text{/}3)}^{\pi \text{/}2}{(2-3\;\text{sin}\;\theta )}^{2}}d\theta$
:::

:::exercise {fs-id1167793367117} type= 
PROBLEM:
Region enclosed by the inner loop of $r=3-4\;\text{cos}\;\theta$
:::

:::exercise {fs-id1167793362198} type= 
PROBLEM:
Region enclosed by $r=1-2\;\text{cos}\;\theta$ and outside the inner loop
SOLUTION:
${\displaystyle \int_{\pi \text{/}3}^{\pi}{(1-2\;\text{cos}\;\theta )}^{2}d\theta -{\displaystyle \int_{0}^{\pi \text{/}3}{(1-2\;\text{cos}\;\theta )}^{2}}}d\theta$
:::

:::exercise {fs-id1167793363547} type= 
PROBLEM:
Region common to $r=3\;\text{sin}\;\theta \;\text{and}\;r=2-\text{sin}\;\theta$
:::

:::exercise {fs-id1167793292298} type= 
PROBLEM:
Region common to $r=2\;\text{and}\;r=4\;\text{cos}\;\theta$
SOLUTION:
$4{\displaystyle \int_{0}^{\pi \text{/}3}d\theta +16{\displaystyle \int_{\pi \text{/}3}^{\pi \text{/}2}({\text{cos}}^{2}\theta )}}d\theta$
:::

:::exercise {fs-id1167793292410} type= 
PROBLEM:
Region common to $r=3\;\text{cos}\;\theta \;\text{and}\;r=3\;\text{sin}\;\theta$
:::
For the following exercises, find the area of the described region.

:::exercise {fs-id1167793366618} type= 
PROBLEM:
Enclosed by $r=6\;\text{sin}\;\theta$
SOLUTION:
$9\pi$
:::

:::exercise {fs-id1167793366652} type= 
PROBLEM:
Above the polar axis enclosed by $r=2+\text{sin}\;\theta$
:::

:::exercise {fs-id1167793366697} type= 
PROBLEM:
Below the polar axis and enclosed by $r=2-\text{cos}\;\theta$
SOLUTION:
$\frac{9\pi}{4}$
:::

:::exercise {fs-id1167793369819} type= 
PROBLEM:
Enclosed by one petal of $r=4\;\text{cos}(3\theta )$
:::

:::exercise {fs-id1167793369866} type= 
PROBLEM:
Enclosed by one petal of $r=3\;\text{cos}(2\theta )$
SOLUTION:
$\frac{9\pi}{8}$
:::

:::exercise {fs-id1167793369914} type= 
PROBLEM:
Enclosed by $r=1+\text{sin}\;\theta$
:::

:::exercise {fs-id1167793277945} type= 
PROBLEM:
Enclosed by the inner loop of $r=3+6\;\text{cos}\;\theta$
SOLUTION:
$\frac{18\pi -27\sqrt{3}}{2}$
:::

:::exercise {fs-id1167793277995} type= 
PROBLEM:
Enclosed by $r=2+4\;\text{cos}\;\theta$ and outside the inner loop
:::

:::exercise {fs-id1167793278043} type= 
PROBLEM:
Common interior of $r=4\;\text{sin}(2\theta )\;\text{and}\;r=2$
SOLUTION:
$\frac{4}{3}(4\pi -3\sqrt{3})$
:::

:::exercise {fs-id1167793363232} type= 
PROBLEM:
Common interior of $r=3-2\;\text{sin}\;\theta \;\text{and}\;r=−3+2\;\text{sin}\;\theta$
:::

:::exercise {fs-id1167793363296} type= 
PROBLEM:
Common interior of $r=6\;\text{sin}\;\theta \;\text{and}\;r=3$
SOLUTION:
$\frac{3}{2}(4\pi -3\sqrt{3})$
:::

:::exercise {fs-id1167793363362} type= 
PROBLEM:
Inside $r=1+\text{cos}\;\theta$ and outside $r=\text{cos}\;\theta$
:::

:::exercise {fs-id1167793369082} type= 
PROBLEM:
Common interior of $r=2+2\;\text{cos}\;\theta \;\text{and}\;r=2\;\text{sin}\;\theta$
SOLUTION:
$2\pi -4$
:::
For the following exercises, find a definite integral that represents the arc length.

:::exercise {fs-id1167793369145} type= 
PROBLEM:
$r=4\;\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \frac{\pi}{2}$
:::

:::exercise {fs-id1167793369218} type= 
PROBLEM:
$r=1+\text{sin}\;\theta$ on the interval $0\le \theta \le 2\pi$
SOLUTION:
${\displaystyle \int_{0}^{2\pi}\sqrt{{(1+\text{sin}\;\theta )}^{2}+{\text{cos}}^{2}\theta}}d\theta$
:::

:::exercise {fs-id1167793376345} type= 
PROBLEM:
$r=2\;\text{sec}\;\theta \;\text{on the interval}\;0\le \theta \le \frac{\pi}{3}$
:::

:::exercise {fs-id1167793376422} type= 
PROBLEM:
$r={e}^{\theta}\text{on the interval}\;0\le \theta \le 1$
SOLUTION:
$\sqrt{2}{\displaystyle \int_{0}^{1}{e}^{\theta}d\theta}$
:::
For the following exercises, find the length of the curve over the given interval.

:::exercise {fs-id1167793376488} type= 
PROBLEM:
$r=6\;\text{on the interval}\;0\le \theta \le \frac{\pi}{2}$
:::

:::exercise {fs-id1167793376532} type= 
PROBLEM:
$r={e}^{3\theta}\text{on the interval}\;0\le \theta \le 2$
SOLUTION:
$\frac{\sqrt{10}}{3}({e}^{6}-1)$
:::

:::exercise {fs-id1167793371732} type= 
PROBLEM:
$r=6\;\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \frac{\pi}{2}$
:::

:::exercise {fs-id1167793371779} type= 
PROBLEM:
$r=8+8\;\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
32
:::

:::exercise {fs-id1167793371822} type= 
PROBLEM:
$r=1-\text{sin}\;\theta \;\text{on the interval}\;0\le \theta \le 2\pi$
:::
For the following exercises, use the integration capabilities of a calculator to approximate the length of the curve.

:::exercise {fs-id1167793371871} type= 
PROBLEM:
**[T]** $r=3\theta \;\text{on the interval}\;0\le \theta \le \frac{\pi}{2}$
SOLUTION:
6.238
:::

:::exercise {fs-id1167793371918} type= 
PROBLEM:
**[T]** $r=\frac{2}{\theta}\;\text{on the interval}\;\pi \le \theta \le 2\pi$
:::

:::exercise {fs-id1167793366017} type= 
PROBLEM:
**[T]** $r={\text{sin}}^{2}(\frac{\theta}{2})\;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
2
:::

:::exercise {fs-id1167793366074} type= 
PROBLEM:
**[T]** $r=2{\theta}^{2}\;\text{on the interval}\;0\le \theta \le \pi$
:::

:::exercise {fs-id1167793366120} type= 
PROBLEM:
**[T]** $r=\text{sin}(3\;\text{cos}\;\theta )\;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
4.39
:::
For the following exercises, use the familiar formula from geometry to find the area of the region described and then confirm by using the definite integral.

:::exercise {fs-id1167793366178} type= 
PROBLEM:
$r=3\;\text{sin}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
:::

:::exercise {fs-id1167793370322} type= 
PROBLEM:
$r=\text{sin}\;\theta +\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
$A=\pi {(\frac{\sqrt{2}}{2})}^{2}=\frac{\pi}{2}\;\text{and}\;\frac{1}{2}{\displaystyle \int_{0}^{\pi}(1+2\;\text{sin}\;\theta \;\text{cos}\;\theta )}d\theta =\frac{\pi}{2}$
:::

:::exercise {fs-id1167793370454} type= 
PROBLEM:
$r=6\;\text{sin}\;\theta +8\;\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
:::
For the following exercises, use the familiar formula from geometry to find the length of the curve and then confirm using the definite integral.

:::exercise {fs-id1167793370600} type= 
PROBLEM:
$r=3\;\text{sin}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
$C=2\pi (\frac{3}{2})=3\pi \;\text{and}\;{\displaystyle \int_{0}^{\pi}3}d\theta =3\pi$
:::

:::exercise {fs-id1167793370696} type= 
PROBLEM:
$r=\text{sin}\;\theta +\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
:::

:::exercise {fs-id1167793372015} type= 
PROBLEM:
$r=6\;\text{sin}\;\theta +8\;\text{cos}\;\theta \;\text{on the interval}\;0\le \theta \le \pi$
SOLUTION:
$C=2\pi (5)=10\pi \;\text{and}\;{\displaystyle \int_{0}^{\pi}10}\;d\theta =10\pi$
:::

:::exercise {fs-id1167793372117} type= 
PROBLEM:
Verify that if $y=r\;\text{sin}\;\theta =f(\theta )\text{sin}\;\theta$ then $\frac{dy}{d\theta}=f'(\theta )\text{sin}\;\theta +f(\theta )\text{cos}\;\theta .$
:::
For the following exercises, find the slope of a tangent line to a polar curve $r=f(\theta ).$ Let $x=r\;\text{cos}\;\theta =f(\theta )\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta =f(\theta )\text{sin}\;\theta ,$ so the polar equation $r=f(\theta )$ is now written in parametric form.

:::exercise {fs-id1167793372320} type= 
PROBLEM:
Use the definition of the derivative $\frac{dy}{dx}=\frac{dy\text{/}d\theta}{dx\text{/}d\theta}$ and the product rule to derive the derivative of a polar equation.
SOLUTION:
$\frac{dy}{dx}=\frac{{f}^{'}(\theta )\text{sin}\;\theta +f(\theta )\;\text{cos}\;\theta}{{f}^{'}(\theta )\;\text{cos}\;\theta -f(\theta )\text{sin}\;\theta}$
:::

:::exercise {fs-id1167793372471} type= 
PROBLEM:
$r=1-\text{sin}\;\theta ;$ $(\frac{1}{2},\frac{\pi}{6})$
:::

:::exercise {fs-id1167793370884} type= 
PROBLEM:
$r=4\;\text{cos}\;\theta ;$ $(2,\frac{\pi}{3})$
SOLUTION:
The slope is $\frac{1}{\sqrt{3}}.$
:::

:::exercise {fs-id1167793370944} type= 
PROBLEM:
$r=8\;\text{sin}\;\theta ;$ $(4,\frac{5\pi}{6})$
:::

:::exercise {fs-id1167793371005} type= 
PROBLEM:
$r=4+\text{sin}\;\theta ;$ $(3,\frac{3\pi}{2})$
SOLUTION:
The slope is 0.
:::

:::exercise {fs-id1167793371058} type= 
PROBLEM:
$r=6+3\;\text{cos}\;\theta ;$ $(3,\pi )$
:::

:::exercise {fs-id1167793371107} type= 
PROBLEM:
$r=4\;\text{cos}(2\theta );$ tips of the leaves
SOLUTION:
At $(4,0),$ the slope is undefined. At $(−4,\frac{\pi}{2}),$ the slope is 0.
:::

:::exercise {fs-id1167793371187} type= 
PROBLEM:
$r=2\;\text{sin}(3\theta );$ tips of the leaves
:::

:::exercise {fs-id1167793371294} type= 
PROBLEM:
$r=2\theta ;$ $(\frac{\pi}{2},\frac{\pi}{4})$
SOLUTION:
The slope is undefined at $\frac{4+\pi}{4-\pi}$
:::

:::exercise {fs-id1167793371358} type= 
PROBLEM:
Find the points on the interval $\text{−}\pi \le \theta \le \pi$ at which the cardioid $r=1-\text{cos}\;\theta$ has a vertical or horizontal tangent line.
:::

:::exercise {fs-id1167793371455} type= 
PROBLEM:
For the cardioid $r=1+\text{sin}\;\theta ,$ find the slope of the tangent line when $\theta =\frac{\pi}{3}.$
SOLUTION:
Slope = −1.
:::
For the following exercises, find the slope of the tangent line to the given polar curve at the point given by the value of $\theta .$

:::exercise {fs-id1167793371514} type= 
PROBLEM:
$r=3\;\text{cos}\;\theta ,\theta =\frac{\pi}{3}$
:::

:::exercise {fs-id1167793371563} type= 
PROBLEM:
$r=\theta ,$ $\theta =\frac{\pi}{2}$
SOLUTION:
Slope is $\frac{−2}{\pi}.$
:::

:::exercise {fs-id1167793371611} type= 
PROBLEM:
$r=\text{ln}\;\theta ,$ $\theta =e$
:::

:::exercise {fs-id1167793373919} type= 
PROBLEM:
**[T]** Use technology: $r=2+4\;\text{cos}\;\theta$ at $\theta =\frac{\pi}{6}$
SOLUTION:
Calculator answer: −0.836.
:::
For the following exercises, find the points at which the following polar curves have a horizontal or vertical tangent line.

:::exercise {fs-id1167793373973} type= 
PROBLEM:
$r=4\;\text{cos}\;\theta$
:::

:::exercise {fs-id1167793374087} type= 
PROBLEM:
${r}^{2}=4\;\text{cos}(2\theta )$
SOLUTION:
Horizontal tangent at $(\text{±}\sqrt{2},\frac{\pi}{6}),$ $(\text{±}\sqrt{2},-\frac{\pi}{6}).$
:::

:::exercise {fs-id1167793374175} type= 
PROBLEM:
$r=2\;\text{sin}(2\theta )$
:::

:::exercise {fs-id1167793374258} type= 
PROBLEM:
The cardioid $r=1+\text{sin}\;\theta$
SOLUTION:
Horizontal tangents at $\frac{\pi}{2},\frac{7\pi}{6},\frac{11\pi}{6}.$ Vertical tangents at $\frac{\pi}{6},\frac{5\pi}{6}$ and also at the pole $(0,0).$
:::

:::exercise {fs-id1167793374357} type= 
PROBLEM:
Show that the curve $r=\text{sin}\;\theta \;\text{tan}\;\theta$ (called a {index:*cissoid of Diocles*}) has the line $x=1$ as a vertical asymptote.
:::

# Tangent Planes and Linear Approximations

## Learning Objectives {section:learning-objectives}
- Determine the equation of a plane tangent to a given surface at a point.
- Use the tangent plane to approximate a function of two variables at a point.
- Explain when a function of two variables is differentiable.
- Use the total differential to approximate the change in a function of two variables.

In this section, we consider the problem of finding the tangent plane to a surface, which is analogous to finding the equation of a tangent line to a curve when the curve is defined by the graph of a function of one variable, $y=f(x).$ The slope of the tangent line at the point $x=a$ is given by $m=f'(a);$ what is the slope of a tangent plane? We learned about the equation of a plane in [Equations of Lines and Planes in Space](module:m53870); in this section, we see how it can be applied to the problem at hand.

## Tangent Planes
Intuitively, it seems clear that, in a plane, only one line can be tangent to a curve at a point. However, in three-dimensional space, many lines can be tangent to a given point. If these lines lie in the same plane, they determine the tangent plane at that point. A tangent plane at a regular point contains all of the lines tangent to that point. A more intuitive way to think of a tangent plane is to assume the surface is smooth at that point (no corners). Then, a tangent line to the surface at that point in any direction does not have any abrupt changes in slope because the direction changes smoothly.

:::note [definition] Definition
Let ${P}_{0}=({x}_{0},{y}_{0},{z}_{0})$ be a point on a surface $S,$ and let $C$ be any curve passing through ${P}_{0}$ and lying entirely in $S.$ If the tangent lines to all such curves $C$ at ${P}_{0}$ lie in the same plane, then this plane is called the {term:tangent plane} to $S$ at ${P}_{0}$ ([ref:CNX_Calc_Figure_14_04_001]).
:::

> FIGURE {fig:CNX_Calc_Figure_14_04_001} src=../../media/CNX_Calc_Figure_14_04_004.jpg
> alt: A surface S is shown with a point P0 = (x0, y0, z0). There are two intersecting curves shown on S that pass through P0. There are tangents drawn for each of these curves at P0, and these tangent lines create a plane, namely, the tangent plane at P0.
> caption: The tangent plane to a surface $S$ at a point ${P}_{0}$ contains all the tangent lines to curves in $S$ that pass through ${P}_{0}.$

For a tangent plane to a surface to exist at a point on that surface, it is sufficient for the function that defines the surface to be differentiable at that point, defined later in this section. We define the term tangent plane here and then explore the idea intuitively.

:::note [definition] Definition
Let $S$ be a surface defined by a differentiable function $z=f(x,y),$ and let ${P}_{0}=({x}_{0},{y}_{0})$ be a point in the domain of $f.$ Then, the equation of the tangent plane to $S$ at ${P}_{0}$ is given by

$$ z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}). $$  {eq:fs-id1167794069619}

:::
To see why this formula is correct, let’s first find two tangent lines to the surface $S.$ The equation of the tangent line to the curve that is represented by the intersection of $S$ with the vertical trace given by $x={x}_{0}$ is $z=f({x}_{0},{y}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}).$ Similarly, the equation of the tangent line to the curve that is represented by the intersection of $S$ with the vertical trace given by $y={y}_{0}$ is $z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0}).$ A parallel vector to the first tangent line is $\mathbf{a}=\mathbf{j}+{f}_{y}({x}_{0},{y}_{0})\mathbf{k;}$ a parallel vector to the second tangent line is $\mathbf{b}=\mathbf{i}+{f}_{x}({x}_{0},{y}_{0})\mathbf{k}.$ We can take the cross product of these two vectors:

$\begin{array}{rl}\mathbf{a}\;\times \;\mathbf{b} & =(\mathbf{j}+{f}_{y}({x}_{0},{y}_{0})\mathbf{k})\;\times \;(\mathbf{i}+{f}_{x}({x}_{0},{y}_{0})\mathbf{k}) \\ & =|\begin{array}{lll}\mathbf{i} & \mathbf{j} & \mathbf{k} \\ 0 & 1 & {f}_{y}({x}_{0},{y}_{0}) \\ 1 & 0 & {f}_{x}({x}_{0},{y}_{0})\end{array}| \\ & ={f}_{x}({x}_{0},{y}_{0})\mathbf{i}+{f}_{y}({x}_{0},{y}_{0})\mathbf{j}-\mathbf{k}.\end{array}$  {eq:fs-id1167793930547}

This vector is perpendicular to both lines and is therefore perpendicular to the tangent plane. We can use this vector as a normal vector to the tangent plane, along with the point ${P}_{0}=({x}_{0},{y}_{0},f({x}_{0},{y}_{0}))$ in the equation for a plane:

$\begin{array}{rll}\mathbf{n}\cdot ((x-{x}_{0})\mathbf{i}+(y-{y}_{0})\mathbf{j}+(z-f({x}_{0},{y}_{0}))\mathbf{k}) & = & 0 \\ ({f}_{x}({x}_{0},{y}_{0})\mathbf{i}+{f}_{y}({x}_{0},{y}_{0})\mathbf{j}\text{-}\mathbf{k})\cdot ((x-{x}_{0})\mathbf{i}+(y-{y}_{0})\mathbf{j}+(z-f({x}_{0},{y}_{0}))\mathbf{k}) & = & 0 \\ {f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})-(z-f({x}_{0},{y}_{0})) & = & 0.\end{array}$  {eq:fs-id1167793804774}

Solving this equation for $z$ gives [ref:fs-id1167794069619].

:::example {ex:fs-id1167793879740} Finding a Tangent Plane

:::exercise {fs-id1167793290855} type= 
PROBLEM:
Find an equation of the tangent plane to the surface defined by the function $f(x,y)=2{x}^{2}-3xy+8{y}^{2}+2x-4y+4$ at point $(2,−1).$
SOLUTION:
First, we must calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then use [ref:fs-id1167794069619] with ${x}_{0}=2$ and ${y}_{0}=−1\text{:}$

$\begin{array}{rll}{f}_{x}(x,y) & = & 4x-3y+2 \\ {f}_{y}(x,y) & = & −3x+16y-4 \\ f(2,−1) & = & 2{(2)}^{2}-3(2)(−1)+8{(−1)}^{2}+2(2)-4(−1)+4=34. \\ {f}_{x}(2,−1) & = & 4(2)-3(−1)+2=13 \\ {f}_{y}(2,−1) & = & −3(2)+16(−1)-4=−26.\end{array}$  {eq:fs-id1167793985723}

Then [ref:fs-id1167794069619] becomes

$\begin{array}{l}z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}) \\ z=34+13(x-2)-26(y-(−1)) \\ z=34+13x-26-26y-26 \\ z=13x-26y-18.\end{array}$  {eq:fs-id1167794126598}

(See the following figure).

> FIGURE {fig:CNX_Calc_Figure_14_04_002} src=../../media/CNX_Calc_Figure_14_04_005.jpg
> alt: A curved surface f(x, y) = 2x2 – 3xy + 8y2 + 2x + 4y + 4 with tangent plane z = 13x – 26y – 18 at point (2, –1, 34).
> caption: Calculating the equation of a tangent plane to a given surface at a given point.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793886872} type= 
PROBLEM:
Find an equation of the tangent plane to the surface defined by the function $f(x,y)={x}^{3}-{x}^{2}y+{y}^{2}-2x+3y-2$ at point $(−1,3).$
SOLUTION:
$z=7x+8y-3$
COMMENTARY: Hint
First, calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then use [ref:fs-id1167794069619].
:::
:::

:::example {ex:fs-id1167793985902} Finding Another Tangent Plane

:::exercise {fs-id1167794077003} type= 
PROBLEM:
Find an equation of the tangent plane to the surface defined by the function $f(x,y)=\text{sin}(2x)\text{cos}(3y)$ at the point $(\pi \text{/}3,\pi \text{/}4).$
SOLUTION:
First, calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then use [ref:fs-id1167794069619] with ${x}_{0}=\pi \text{/}3$ and ${y}_{0}=\pi \text{/}4\text{:}$

$\begin{array}{rll}{f}_{x}(x,y) & = & 2\;\text{cos}(2x)\text{cos}(3y) \\ {f}_{y}(x,y) & = & −3\;\text{sin}(2x)\text{sin}(3y) \\ f(\frac{\pi}{3},\frac{\pi}{4}) & = & \text{sin}(2(\frac{\pi}{3}))\text{cos}(3(\frac{\pi}{4}))=(\frac{\sqrt{3}}{2})(-\frac{\sqrt{2}}{2})=-\frac{\sqrt{6}}{4} \\ {f}_{x}(\frac{\pi}{3},\frac{\pi}{4}) & = & 2\;\text{cos}(2(\frac{\pi}{3}))\text{cos}(3(\frac{\pi}{4}))=2(-\frac{1}{2})(-\frac{\sqrt{2}}{2})=\frac{\sqrt{2}}{2} \\ {f}_{y}(\frac{\pi}{3},\frac{\pi}{4}) & = & −3\;\text{sin}(2(\frac{\pi}{3}))\text{sin}(3(\frac{\pi}{4}))=−3(\frac{\sqrt{3}}{2})(\frac{\sqrt{2}}{2})=-\frac{3\sqrt{6}}{4}.\end{array}$  {eq:fs-id1167793862438}

Then [ref:fs-id1167794069619] becomes

$\begin{array}{l} \\ z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}) \\ \\ z=-\frac{\sqrt{6}}{4}+\frac{\sqrt{2}}{2}(x-\frac{\pi}{3})-\frac{3\sqrt{6}}{4}(y-\frac{\pi}{4}) \\ z=\frac{\sqrt{2}}{2}x-\frac{3\sqrt{6}}{4}y-\frac{\sqrt{6}}{4}-\frac{\pi \sqrt{2}}{6}+\frac{3\pi \sqrt{6}}{16}.\end{array}$  {eq:fs-id1167794222746}

:::
:::
A tangent plane to a surface does not always exist at every point on the surface. Consider the function

$f(x,y)=\{\begin{array}{ll}\frac{xy}{\sqrt{{x}^{2}+{y}^{2}}} & (x,y)≠(0,0) \\ 0 & (x,y)=(0,0).\end{array}$  {eq:fs-id1167794061743}

The graph of this function follows.

> FIGURE {fig:CNX_Calc_Figure_14_04_003} src=../../media/CNX_Calc_Figure_14_04_001.jpg
> alt: A curved surface that passes through (0, 0, 0) and that folds up on either side of the z axis.
> caption: Graph of a function that does not have a tangent plane at the origin.

If either $x=0$ or $y=0,$ then $f(x,y)=0,$ so the value of the function does not change on either the *x*- or *y*-axis. Therefore, ${f}_{x}(x,0)={f}_{y}(0,y)=0,$ so as either $x\;or\;y$ approach zero, these partial derivatives stay equal to zero. Substituting them into [ref:fs-id1167794069619] gives $z=0$ as the equation of the tangent line. However, if we approach the origin from a different direction, we get a different story. For example, suppose we approach the origin along the line $y=x.$ If we put $y=x$ into the original function, it becomes

$f(x,x)=\frac{x(x)}{\sqrt{{x}^{2}+{(x)}^{2}}}=\frac{{x}^{2}}{\sqrt{2{x}^{2}}}=\frac{|x|}{\sqrt{2}}.$  {eq:fs-id1167793806633}

When $x>0,$ the slope of this curve is equal to $\sqrt{2}\text{/}2;$ when $x<0,$ the slope of this curve is equal to $\text{−}(\sqrt{2}\text{/}2).$ This presents a problem. In the definition of *tangent plane*, we presumed that all tangent lines through point $P$ (in this case, the origin) lay in the same plane. This is clearly not the case here. When we study differentiable functions, we will see that this function is not differentiable at the origin.

## Linear Approximations
Recall from [Linear Approximations and Differentials](module:m53605) that the formula for the linear approximation of a function $f(x)$ at the point $x=a$ is given by

$y\approx f(a)+f'(a)(x-a).$  {eq:fs-id1167793395291}

The diagram for the linear approximation of a function of one variable appears in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_04_004} src=../../media/CNX_Calc_Figure_14_04_002.jpg
> alt: A curve in the xy plane with a point and a tangent to that point. The figure is marked tangent line approximation.
> caption: Linear approximation of a function in one variable.

The tangent line can be used as an approximation to the function $f(x)$ for values of $x$ reasonably close to $x=a.$ When working with a function of two variables, the tangent line is replaced by a tangent plane, but the approximation idea is much the same.

:::note [definition] Definition
Given a function $z=f(x,y)$ with continuous partial derivatives that exist at the point $({x}_{0},{y}_{0}),$ the {term:linear approximation} of $f$ at the point $({x}_{0},{y}_{0})$ is given by the equation

$$ L(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}). $$  {eq:fs-id1167793882150}

:::
Notice that this equation also represents the tangent plane to the surface defined by $z=f(x,y)$ at the point $({x}_{0},{y}_{0}).$ The idea behind using a linear approximation is that, if there is a point $({x}_{0},{y}_{0})$ at which the precise value of $f(x,y)$ is known, then for values of $(x,y)$ reasonably close to $({x}_{0},{y}_{0}),$ the linear approximation (i.e., tangent plane) yields a value that is also reasonably close to the exact value of $f(x,y)$ ([ref:CNX_Calc_Figure_14_04_005]). Furthermore the plane that is used to find the linear approximation is also the tangent plane to the surface at the point $({x}_{0},{y}_{0}).$

> FIGURE {fig:CNX_Calc_Figure_14_04_005} src=../../media/CNX_Calc_Figure_14_04_006.jpg
> alt: A paraboloid with surface z = f(x, y). There is a point given on the paraboloid P (x0, y0) with a tangent plane at that point. There is a point on the plane which is marked as the linear approximation L(x, y) to f(x0, y0), which is close to the corresponding point on the paraboloid.
> caption: Using a tangent plane for linear approximation at a point.

:::example {ex:fs-id1167793478127} Using a Tangent Plane Approximation

:::exercise {fs-id1167794123051} type= 
PROBLEM:
Given the function $f(x,y)=\sqrt{41-4{x}^{2}-{y}^{2}},$ approximate $f(2.1,2.9)$ using point $(2,3)$ for $({x}_{0},{y}_{0}).$ What is the approximate value of $f(2.1,2.9)$ to four decimal places?
SOLUTION:
To apply [ref:fs-id1167793882150], we first must calculate $f({x}_{0},{y}_{0}),$ ${f}_{x}({x}_{0},{y}_{0}),$ and ${f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=2$ and ${y}_{0}=3\text{:}$

$\begin{array}{rll}f({x}_{0},{y}_{0}) & = & f(2,3)=\sqrt{41-4{(2)}^{2}-{(3)}^{2}}=\sqrt{41-16-9}=\sqrt{16}=4 \\ {f}_{x}(x,y) & = & -\frac{4x}{\sqrt{41-4{x}^{2}-{y}^{2}}}\;\text{so}\;{f}_{x}({x}_{0},{y}_{0})=-\frac{4(2)}{\sqrt{41-4{(2)}^{2}-{(3)}^{2}}}=−2 \\ {f}_{y}(x,y) & = & -\frac{y}{\sqrt{41-4{x}^{2}-{y}^{2}}}\;\text{so}\;{f}_{y}({x}_{0},{y}_{0})=-\frac{3}{\sqrt{41-4{(2)}^{2}-{(3)}^{2}}}=-\frac{3}{4}.\end{array}$  {eq:fs-id1167793268348}

Now we substitute these values into [ref:fs-id1167793882150]:

$\begin{array}{rl}L(x,y) & =f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}) \\ & =4-2(x-2)-\frac{3}{4}(y-3) \\ & =\frac{41}{4}-2x-\frac{3}{4}y.\end{array}$  {eq:fs-id1167794063589}

Last, we substitute $x=2.1$ and $y=2.9$ into $L(x,y)\text{:}$

$L(2.1,2.9)=\frac{41}{4}-2(2.1)-\frac{3}{4}(2.9)=10.25-4.2-2.175=3.875.$  {eq:fs-id1167794162864}

The approximate value of $f(2.1,2.9)$ to four decimal places is

$f(2.1,2.9)=\sqrt{41-4{(2.1)}^{2}-{(2.9)}^{2}}=\sqrt{14.95}\approx 3.8665,$  {eq:fs-id1167793886827}

which corresponds to a $0.2\text{\%}$ error in approximation.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793386145} type= 
PROBLEM:
Given the function $f(x,y)={e}^{5-2x+3y},$ approximate $f(4.1,0.9)$ using point $(4,1)$ for $({x}_{0},{y}_{0}).$ What is the approximate value of $f(4.1,0.9)$ to four decimal places?
SOLUTION:
$L(x,y)=6-2x+3y,$ so $L(4.1,0.9)=6-2(4.1)+3(0.9)=0.5$ $f(4.1,0.9)={e}^{5-2(4.1)+3(0.9)}={e}^{−0.5}\approx 0.6065.$
COMMENTARY: Hint
First calculate $f({x}_{0},{y}_{0}),{f}_{x}({x}_{0},{y}_{0}),\;\text{and}\;{f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=4$ and ${y}_{0}=1,$ then use [ref:fs-id1167793882150].
:::
:::

## Differentiability
When working with a function $y=f(x)$ of one variable, the function is said to be differentiable at a point $x=a$ if ${f}^{'}(a)$ exists. Furthermore, if a function of one variable is differentiable at a point, the graph is “smooth” at that point (i.e., no corners exist) and a tangent line is well-defined at that point.
The idea behind differentiability of a function of two variables is connected to the idea of smoothness at that point. In this case, a surface is considered to be smooth at point $P$ if a tangent plane to the surface exists at that point. If a function is differentiable at a point, then a tangent plane to the surface exists at that point. Recall the formula for a tangent plane at a point $({x}_{0},{y}_{0})$ is given by

$z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0}),$  {eq:fs-id1167793958137}

For a tangent plane to exist at the point $({x}_{0},{y}_{0}),$ the partial derivatives must therefore exist at that point. However, this is not a sufficient condition for smoothness, as was illustrated in [ref:CNX_Calc_Figure_14_04_003]. In that case, the partial derivatives existed at the origin, but the function also had a corner on the graph at the origin.

:::note [definition] Definition
A function $f(x,y)$ is {term:differentiable} at a point $P({x}_{0},{y}_{0})$ if, for all points $(x,y)$ in a $δ$ disk around $P,$ we can write

$$ f(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})+E(x,y), $$  {eq:fs-id1167793514508}

where the error term $E$ satisfies

$\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}=0.$  {eq:fs-id1167793443490}

:::
The last term in [ref:fs-id1167793514508] is referred to as the {index:*error term*} and it represents how closely the tangent plane comes to the surface in a small neighborhood $(δ$ disk) of point $P.$ For the function $f$ to be differentiable at $P,$ the function must be smooth—that is, the graph of $f$ must be close to the tangent plane for points near $P.$

:::example {ex:fs-id1167794147270} Demonstrating Differentiability

:::exercise {fs-id1167794147272} type= 
PROBLEM:
Show that the function $f(x,y)=2{x}^{2}-4y$ is differentiable at point $(2,−3).$
SOLUTION:
First, we calculate $f({x}_{0},{y}_{0}),{f}_{x}({x}_{0},{y}_{0}),\;\text{and}\;{f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=2$ and ${y}_{0}=−3,$ then we use [ref:fs-id1167793514508]:

$\begin{array}{rll}f(2,−3) & = & 2{(2)}^{2}-4(−3)=8+12=20 \\ {f}_{x}(2,−3) & = & 4(2)=8 \\ {f}_{y}(2,−3) & = & −4.\end{array}$  {eq:fs-id1167794327149}

Therefore ${m}_{1}=8$ and ${m}_{2}=−4,$ and [ref:fs-id1167793514508] becomes

$\begin{array}{rll}f(x,y) & = & f(2,−3)+{f}_{x}(2,−3)(x-2)+{f}_{y}(2,−3)(y+3)+E(x,y) \\ 2{x}^{2}-4y & = & 20+8(x-2)-4(y+3)+E(x,y) \\ 2{x}^{2}-4y & = & 20+8x-16-4y-12+E(x,y) \\ 2{x}^{2}-4y & = & 8x-4y-8+E(x,y) \\ E(x,y) & = & 2{x}^{2}-8x+8.\end{array}$  {eq:fs-id1167793932470}

Next, we calculate $\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}\text{:}$

$\begin{array}{rl}\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}} & =\lim_{(x,y)\to (2,−3)}\frac{2{x}^{2}-8x+8}{\sqrt{{(x-2)}^{2}+{(y+3)}^{2}}} \\ & =\lim_{(x,y)\to (2,−3)}\frac{2({x}^{2}-4x+4)}{\sqrt{{(x-2)}^{2}+{(y+3)}^{2}}} \\ & =\lim_{(x,y)\to (2,−3)}\frac{2{(x-2)}^{2}}{\sqrt{{(x-2)}^{2}+{(y+3)}^{2}}} \\ & \le \lim_{(x,y)\to (2,−3)}\frac{2({(x-2)}^{2}+{(y+3)}^{2})}{\sqrt{{(x-2)}^{2}+{(y+3)}^{2}}} \\ & =\lim_{(x,y)\to (2,−3)}2\sqrt{{(x-2)}^{2}+{(y+3)}^{2}} \\ & =0.\end{array}$  {eq:fs-id1167793548719}

Since $E(x,y)\ge 0$ for any value of $x\;\text{or}\;y,$ the original limit must be equal to zero. Therefore, $f(x,y)=2{x}^{2}-4y$ is differentiable at point $(2,−3).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793514522} type= 
PROBLEM:
Show that the function $f(x,y)=3x-4{y}^{2}$ is differentiable at point $(−1,2).$
SOLUTION:
$f(−1,2)=−19,\;{f}_{x}(−1,2)=3,{f}_{y}(−1,2)=−16,E(x,y)=−4{(y-2)}^{2}.$
$\begin{array}{rl}\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}} & =\lim_{(x,y)\to (−1,2)}\frac{−4{(y-2)}^{2}}{\sqrt{{(x+1)}^{2}+{(y-2)}^{2}}} \\ & \le \lim_{(x,y)\to (−1,2)}\frac{−4({(x+1)}^{2}+{(y-2)}^{2})}{\sqrt{{(x+1)}^{2}+{(y-2)}^{2}}} \\ & =\lim_{(x,y)\to (–1,2)}-4\sqrt{{(x+1)}^{2}+{(y-2)}^{2}} \\ & =0.\end{array}$
COMMENTARY: Hint
First, calculate $f({x}_{0},{y}_{0}),{f}_{x}({x}_{0},{y}_{0}),\;\text{and}\;{f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=−1$ and ${y}_{0}=2,$ then use [ref:fs-id1167793514508] to find $E(x,y).$ Last, calculate the limit.
:::
:::
The function $f(x,y)=\{\begin{array}{ll}\frac{xy}{\sqrt{{x}^{2}+{y}^{2}}} & (x,y)≠(0,0) \\ 0 & (x,y)=(0,0)\end{array}$ is not differentiable at the origin. We can see this by calculating the partial derivatives. This function appeared earlier in the section, where we showed that ${f}_{x}(0,0)={f}_{y}(0,0)=0.$ Substituting this information into [ref:fs-id1167793514508] using ${x}_{0}=0$ and ${y}_{0}=0,$ we get

$\begin{array}{rll}f(x,y) & = & f(0,0)+{f}_{x}(0,0)(x-0)+{f}_{y}(0,0)(y-0)+E(x,y) \\ E(x,y) & = & \frac{xy}{\sqrt{{x}^{2}+{y}^{2}}}.\end{array}$  {eq:fs-id1167793510072}

Calculating $\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}$ gives

$\begin{array}{rl}\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}} & =\lim_{(x,y)\to (0,0)}\frac{\frac{xy}{\sqrt{{x}^{2}+{y}^{2}}}}{\sqrt{{x}^{2}+{y}^{2}}} \\ & =\lim_{(x,y)\to (0,0)}\frac{xy}{{x}^{2}+{y}^{2}}.\end{array}$  {eq:fs-id1167793953845}

Depending on the path taken toward the origin, this limit takes different values. Therefore, the limit does not exist and the function $f$ is not differentiable at the origin as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_04_006} src=../../media/CNX_Calc_Figure_14_04_007.jpg
> alt: A curved surface in xyz space that remains constant along the positive x axis and curves downward along the line y = –x in the second quadrant.
> caption: This function $f(x,y)$ is not differentiable at the origin.

Differentiability and continuity for functions of two or more variables are connected, the same as for functions of one variable. In fact, with some adjustments of notation, the basic theorem is the same.

:::note [theorem] Differentiability Implies Continuity
Let $z=f(x,y)$ be a function of two variables with $({x}_{0},{y}_{0})$ in the domain of $f.$ If $f(x,y)$ is differentiable at $({x}_{0},{y}_{0}),$ then $f(x,y)$ is continuous at $({x}_{0},{y}_{0}).$
:::
[ref:fs-id1167793618110] shows that if a function is differentiable at a point, then it is continuous there. However, if a function is continuous at a point, then it is not necessarily differentiable at that point. For example,

$f(x,y)=\{\begin{array}{ll}\frac{xy}{\sqrt{{x}^{2}+{y}^{2}}} & (x,y)≠(0,0) \\ 0 & (x,y)=(0,0)\end{array}$  {eq:fs-id1167793288599}

is continuous at the origin, but it is not differentiable at the origin. This observation is also similar to the situation in single-variable calculus.
[ref:fs-id1167793960614] further explores the connection between continuity and differentiability at a point. This theorem says that if the function and its partial derivatives are continuous at a point, the function is differentiable.

:::note [theorem] Continuity of First Partials Implies Differentiability
Let $z=f(x,y)$ be a function of two variables with $({x}_{0},{y}_{0})$ in the domain of $f.$ If $f(x,y),$ ${f}_{x}(x,y),$ and ${f}_{y}(x,y)$ all exist in a neighborhood of $({x}_{0},{y}_{0})$ and are continuous at $({x}_{0},{y}_{0}),$ then $f(x,y)$ is differentiable there.
:::
Recall that earlier we showed that the function

$f(x,y)=\{\begin{array}{ll}\frac{xy}{\sqrt{{x}^{2}+{y}^{2}}} & (x,y)≠(0,0) \\ 0 & (x,y)=(0,0)\end{array}$  {eq:fs-id1167793960575}

was not differentiable at the origin. Let’s calculate the partial derivatives ${f}_{x}$ and ${f}_{y}\text{:}$

$\frac{\partial f}{\partial x}=\frac{{y}^{3}}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}\;\text{and}\;\frac{\partial f}{\partial y}=\frac{{x}^{3}}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}.$  {eq:fs-id1167793927994}

The contrapositive of the preceding theorem states that if a function is not differentiable, then at least one of the hypotheses must be false. Let’s explore the condition that ${f}_{x}(0,0)$ must be continuous. For this to be true, it must be true that $\lim_{(x,y)\to (0,0)}{f}_{x}(0,0)={f}_{x}(0,0)\text{:}$

$\lim_{(x,y)\to (0,0)}{f}_{x}(x,y)=\lim_{(x,y)\to (0,0)}\frac{{y}^{3}}{{({x}^{2}+{y}^{2})}^{3\text{/}2}}.$  {eq:fs-id1167793499099}

Let $x=ky.$ Then

$\begin{array}{rl}\lim_{(x,y)\to (0,0)}\frac{{y}^{3}}{{({x}^{2}+{y}^{2})}^{3\text{/}2}} & =\lim_{y\to 0}\frac{{y}^{3}}{{({(ky)}^{2}+{y}^{2})}^{3\text{/}2}} \\ & =\lim_{y\to 0}\frac{{y}^{3}}{{({k}^{2}{y}^{2}+{y}^{2})}^{3\text{/}2}} \\ & =\lim_{y\to 0}\frac{{y}^{3}}{{|y|}^{3}{({k}^{2}+1)}^{3\text{/}2}} \\ & =\frac{1}{{({k}^{2}+1)}^{3\text{/}2}}\lim_{y\to 0}\frac{|y|}{y}.\end{array}$  {eq:fs-id1167793887666}

If $y>0,$ then this expression equals $1\text{/}{({k}^{2}+1)}^{3\text{/}2};$ if $y<0,$ then it equals $\text{−}(1\text{/}{({k}^{2}+1)}^{3\text{/}2}).$ In either case, the value depends on $k,$ so the limit fails to exist.

## Differentials
In [Linear Approximations and Differentials](module:m53605) we first studied the concept of differentials. The differential of $y,$ written $dy,$ is defined as ${f}^{'}(x)dx.$ The differential is used to approximate $\text{Δ}y=f(x+\text{Δ}x)-f(x),$ where $\text{Δ}x=dx.$ Extending this idea to the linear approximation of a function of two variables at the point $({x}_{0},{y}_{0})$ yields the formula for the total differential for a function of two variables.

:::note [definition] Definition
Let $z=f(x,y)$ be a function of two variables with $({x}_{0},{y}_{0})$ in the domain of $f,$ and let $\text{Δ}x$ and $\text{Δ}y$ be chosen so that $({x}_{0}+\text{Δ}x,{y}_{0}+\text{Δ}y)$ is also in the domain of $f.$ If $f$ is differentiable at the point $({x}_{0},{y}_{0}),$ then the differentials $dx$ and $dy$ are defined as

$dx=\text{Δ}x\;\text{and}\;dy=\text{Δ}y.$  {eq:fs-id1167793548571}

The differential $dz,$ also called the {term:total differential} of $z=f(x,y)$ at $({x}_{0},{y}_{0}),$ is defined as

$$ dz={f}_{x}({x}_{0},{y}_{0})dx+{f}_{y}({x}_{0},{y}_{0})dy. $$  {eq:fs-id1167793465538}

:::
Notice that the symbol $\partial$ is not used to denote the total differential; rather, $d$ appears in front of $z.$ Now, let’s define $\text{Δ}z=f(x+\text{Δ}x,y+\text{Δ}y)-f(x,y).$ We use $dz$ to approximate $\text{Δ}z,$ so

$\text{Δ}z\approx dz={f}_{x}({x}_{0},{y}_{0})dx+{f}_{y}({x}_{0},{y}_{0})dy.$  {eq:fs-id1167794336232}

Therefore, the differential is used to approximate the change in the function $z=f({x}_{0},{y}_{0})$ at the point $({x}_{0},{y}_{0})$ for given values of $\text{Δ}x$ and $\text{Δ}y.$ Since $\text{Δ}z=f(x+\text{Δ}x,y+\text{Δ}y)-f(x,y),$ this can be used further to approximate $f(x+\text{Δ}x,y+\text{Δ}y)\text{:}$

$\begin{array}{rl}f(x+\text{Δ}x,y+\text{Δ}y) & =f(x,y)+\text{Δ}z \\ & \approx f(x,y)+{f}_{x}({x}_{0},{y}_{0})\text{Δ}x+{f}_{y}({x}_{0},{y}_{0})\text{Δ}y.\end{array}$  {eq:fs-id1167793275899}

See the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_04_007} src=../../media/CNX_Calc_Figure_14_04_008.jpg
> alt: A surface f in the xyz plane, with a tangent plane at the point (x, y, f(x, y)). On the (x, y) plane, there is a point marked (x + Δx, y + Δy). There is a dashed line to the corresponding point on the graph of f and the line then continues to the tangent plane; the distance to the graph of f is marked f(x + + Δx, y + Δy), and the distance to the tangent plane is marked as the linear approximation.
> caption: The linear approximation is calculated via the formula $f(x+\text{Δ}x,y+\text{Δ}y)\approx f(x,y)+{f}_{x}({x}_{0},{y}_{0})\text{Δ}x+{f}_{y}({x}_{0},{y}_{0})\text{Δ}y.$

One such application of this idea is to determine error propagation. For example, if we are manufacturing a gadget and are off by a certain amount in measuring a given quantity, the differential can be used to estimate the error in the total volume of the gadget.

:::example {ex:fs-id1167793299665} Approximation by Differentials

:::exercise {fs-id1167793299667} type= 
PROBLEM:
Find the differential $dz$ of the function $f(x,y)=3{x}^{2}-2xy+{y}^{2}$ and use it to approximate $\text{Δ}z$ at point $(2,−3).$ Use $\text{Δ}x=0.1$ and $\text{Δ}y=−0.05.$ What is the exact value of $\text{Δ}z?$
SOLUTION:
First, we must calculate $f({x}_{0},{y}_{0}),{f}_{x}({x}_{0},{y}_{0}),\;\text{and}\;{f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=2$ and ${y}_{0}=−3\text{:}$

$\begin{array}{rll}f({x}_{0},{y}_{0}) & = & f(2,−3)=3{(2)}^{2}-2(2)(−3)+{(−3)}^{2}=12+12+9=33 \\ {f}_{x}(x,y) & = & 6x-2y \\ {f}_{y}(x,y) & = & −2x+2y \\ {f}_{x}({x}_{0},{y}_{0}) & = & {f}_{x}(2,−3)=6(2)-2(−3)=12+6=18 \\ {f}_{y}({x}_{0},{y}_{0}) & = & {f}_{y}(2,−3)=−2(2)+2(−3)=−4-6=−10.\end{array}$  {eq:fs-id1167793627930}

Then, we substitute these quantities into [ref:fs-id1167793465538]:

$\begin{array}{l}dz={f}_{x}({x}_{0},{y}_{0})dx+{f}_{y}({x}_{0},{y}_{0})dy \\ dz=18(0.1)-10(−0.05)=1.8+0.5=2.3.\end{array}$  {eq:fs-id1167793219181}

This is the approximation to $\text{Δ}z=f({x}_{0}+\text{Δ}x,{y}_{0}+\text{Δ}y)-f({x}_{0},{y}_{0}).$ The exact value of $\text{Δ}z$ is given by

$\begin{array}{ll}\text{Δ}z & =f({x}_{0}+\text{Δ}x,{y}_{0}+\text{Δ}y)-f({x}_{0},{y}_{0}) \\ & =f(2+0.1,−3-0.05)-f(2,−3) \\ & =f(2.1,−3.05)-f(2,−3) \\ & =2.3425.\end{array}$  {eq:fs-id1167793514685}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793617980} type= 
PROBLEM:
Find the differential $dz$ of the function $f(x,y)=4{y}^{2}+{x}^{2}y-2xy$ and use it to approximate $\text{Δ}z$ at point $(1,−1).$ Use $\text{Δ}x=0.03$ and $\text{Δ}y=−0.02.$ What is the exact value of $\text{Δ}z?$
SOLUTION:
$\begin{array}{rll}dz & = & 0.18 \\ \text{Δ}z & = & f(1.03,−1.02)-f(1,−1)=0.180682\end{array}$
COMMENTARY: Hint
First, calculate ${f}_{x}({x}_{0},{y}_{0})$ and ${f}_{y}({x}_{0},{y}_{0})$ using ${x}_{0}=1$ and ${y}_{0}=−1,$ then use [ref:fs-id1167793465538].
:::
:::

## Differentiability of a Function of Three Variables
All of the preceding results for differentiability of functions of two variables can be generalized to functions of three variables. First, the definition:

:::note [definition] Definition
A function $f(x,y,z)$ is differentiable at a point $P({x}_{0},{y}_{0},{z}_{0})$ if for all points $(x,y,z)$ in a $δ$ disk around $P$ we can write

$$ \begin{array}{rl}f(x,y,z) & =f({x}_{0},{y}_{0},{z}_{0})+{f}_{x}({x}_{0},{y}_{0},{z}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0},{z}_{0})(y-{y}_{0}) \\ & \;+{f}_{z}({x}_{0},{y}_{0},{z}_{0})(z-{z}_{0})+E(x,y,z),\end{array} $$  {eq:fs-id1167793416701}

where the error term *E* satisfies

$\lim_{(x,y,z)\to ({x}_{0},{y}_{0},{z}_{0})}\frac{E(x,y,z)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}+{(z-{z}_{0})}^{2}}}=0.$  {eq:fs-id1167794212841}

:::
If a function of three variables is differentiable at a point $({x}_{0},{y}_{0},{z}_{0}),$ then it is continuous there. Furthermore, continuity of first partial derivatives at that point guarantees differentiability.

## Key Concepts {section:key-concepts}
- The analog of a tangent line to a curve is a tangent plane to a surface for functions of two variables.
- Tangent planes can be used to approximate values of functions near known values.
- A function is differentiable at a point if it is ”smooth” at that point (i.e., no corners or discontinuities exist at that point).
- The total differential can be used to approximate the change in a function $z=f({x}_{0},{y}_{0})$ at the point $({x}_{0},{y}_{0})$ for given values of $\text{Δ}x$ and $\text{Δ}y.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-546} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Tangent plane** | $z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})$ |
| **Linear approximation** | $L(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})$ |
| **Total differential** | $dz={f}_{x}({x}_{0},{y}_{0})dx+{f}_{y}({x}_{0},{y}_{0})dy.$ |
| **Differentiability (two variables)** | $f(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})+E(x,y),$<br> where the error term $E$ satisfies<br> $\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}=0.$ |
| **Differentiability (three variables)** | $\begin{array}{ll}f(x,y) & =f({x}_{0},{y}_{0},{z}_{0})+{f}_{x}({x}_{0},{y}_{0},{z}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0},{z}_{0})(y-{y}_{0}) \\ & \;+{f}_{z}({x}_{0},{y}_{0},{z}_{0})(z-{z}_{0})+E(x,y,z),\end{array}$<br> where the error term $E$ satisfies<br> $\lim_{(x,y,z)\to ({x}_{0},{y}_{0},{z}_{0})}\frac{E(x,y,z)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}+{(z-{z}_{0})}^{2}}}=0.$ |

##  {section:section-exercises}
For the following exercises, find a unit normal vector to the surface at the indicated point.

:::exercise {fs-id1167794200501} type= 
PROBLEM:
$z=f(x,y)={x}^{3},(2,−1,8)$
SOLUTION:
$(\frac{\sqrt{145}}{145})(12\mathbf{i}-\mathbf{k})$
:::

:::exercise {fs-id1167794291649} type= 
PROBLEM:
$\text{ln}(\frac{x}{y-z})=0$ when $x=y=1$
:::
For the following exercises, as a useful review for techniques used in this section, find a normal vector and a tangent vector at point $P.$

:::exercise {fs-id1167793453315} type= 
PROBLEM:
${x}^{2}+xy+{y}^{2}=3,P(−1,−1)$
SOLUTION:
Normal vector: $\mathbf{i}+\mathbf{j},$ tangent vector: $\mathbf{i}-\mathbf{j}$
:::

:::exercise {fs-id1167793586846} type= 
PROBLEM:
${({x}^{2}+{y}^{2})}^{2}=9({x}^{2}-{y}^{2}),P(\sqrt{2},1)$
:::

:::exercise {fs-id1167793638130} type= 
PROBLEM:
$x{y}^{2}-2{x}^{2}+y+5x=6,P(4,2)$
SOLUTION:
Normal vector: $7\mathbf{i}-17\mathbf{j},$ tangent vector: $17\mathbf{i}+7\mathbf{j}$
:::

:::exercise {fs-id1167793927710} type= 
PROBLEM:
$2{x}^{3}-{x}^{2}{y}^{2}=3x-y-7,P(1,−2)$
:::

:::exercise {fs-id1167793251263} type= 
PROBLEM:
$z{e}^{{x}^{2}-{y}^{2}}-3=0,$ $P(2,2,3)$
SOLUTION:
$\begin{array}{ll}\text{Normal vector} & -12i+12j-k \\ \text{Tangent vector} & 0i+j+12k\text{or}0i+j-12k\end{array}$
:::
For the following exercises, find the equation for the tangent plane to the surface at the indicated point. (*Hint:* Solve for $z$ in terms of $x$ and $y.)$

:::exercise {fs-id1167793418231} type= 
PROBLEM:
$−8x-3y-7z=−19,P(1,−1,2)$
:::

:::exercise {fs-id1167794213138} type= 
PROBLEM:
$z=−9{x}^{2}-3{y}^{2},P(2,1,−39)$
SOLUTION:
$−36x-6y-z=−39$
:::

:::exercise {fs-id1167793400580} type= 
PROBLEM:
${x}^{2}+10xyz+{y}^{2}+8{z}^{2}=0,P(−1,−1,−1)$
:::

:::exercise {fs-id1167794143686} type= 
PROBLEM:
$z=\text{ln}(10{x}^{2}+2{y}^{2}+1),P(0,0,0)$
SOLUTION:
$z=0$
:::

:::exercise {fs-id1167794226609} type= 
PROBLEM:
$z={e}^{7{x}^{2}+4{y}^{2}},$ $P(0,0,1)$
:::

:::exercise {fs-id1167794327673} type= 
PROBLEM:
$xy+yz+zx=11,P(1,2,3)$
SOLUTION:
$5x+4y+3z-22=0$
:::

:::exercise {fs-id1167793571327} type= 
PROBLEM:
${x}^{2}+4{y}^{2}={z}^{2},P(3,2,5)$
:::

:::exercise {fs-id1167793992278} type= 
PROBLEM:
${x}^{3}+{y}^{3}=3xyz,P(1,2,\frac{3}{2})$
SOLUTION:
$4x-5y+4z=0$
:::

:::exercise {fs-id1167793498820} type= 
PROBLEM:
$z=axy,P(1,\frac{1}{a},1)$
:::

:::exercise {fs-id1167793638298} type= 
PROBLEM:
$z=\text{sin}\;x+\text{sin}\;y+\text{sin}(x+y),P(0,0,0)$
SOLUTION:
$2x+2y-z=0$
:::

:::exercise {fs-id1167793605909} type= 
PROBLEM:
$z=h(x,y)=\text{ln}\sqrt{{x}^{2}+{y}^{2}},P(3,4)$
:::

:::exercise {fs-id1167794324402} type= 
PROBLEM:
$z={x}^{2}-2xy+{y}^{2},P(1,2,1)$
SOLUTION:
$−2(x-1)+2(y-2)-(z-1)=0$
:::
For the following exercises, find parametric equations for the normal line to the surface at the indicated point. (Recall that to find the equation of a line in space, you need a point on the line, ${P}_{0}({x}_{0,}{y}_{0},{z}_{0}),$ and a vector $\mathbf{n}=\langle a,b,c\rangle$ that is parallel to the line. Then the equation of the line is $x-{x}_{0}=at,y-{y}_{0}=bt,z-{z}_{0}=ct.)$

:::exercise {fs-id1167794122426} type= 
PROBLEM:
$−3x+9y+4z=−4,P(1,−1,2)$
:::

:::exercise {fs-id1167793930127} type= 
PROBLEM:
$z=5{x}^{2}-2{y}^{2},P(2,1,18)$
SOLUTION:
$x=20t+2,y=−4t+1,z=\text{−}t+18$
:::

:::exercise {fs-id1167793951467} type= 
PROBLEM:
${x}^{2}-8xyz+{y}^{2}+6{z}^{2}=0,P(1,1,1)$
:::

:::exercise {fs-id1167793887479} type= 
PROBLEM:
$z=\text{ln}(3{x}^{2}+7{y}^{2}+1),P(0,0,0)$
SOLUTION:
$x=0,y=0,z=t$
:::

:::exercise {fs-id1167793435650} type= 
PROBLEM:
$z={e}^{4{x}^{2}+6{y}^{2}},P(0,0,1)$
:::

:::exercise {fs-id1167793423533} type= 
PROBLEM:
$z={x}^{2}-2xy+{y}^{2}$ at point $P(1,2,1)$
SOLUTION:
$x-1=2t;\;y-2=−2t;\;z-1=t$
:::
For the following exercises, use the figure shown here.

> IMAGE {img:fs-id1167793298897} src=../../media/CNX_Calc_Figure_14_04_201.jpg
> alt: A surface in the xyz plane is marked as z = f(x, y). This surface has a tangent plane at (x0, y0, z0), with the corresponding point (x0, y0) marked on the xy plane. Also marked on the xy plane is the point (x0 + Δx, y0 + Δy). From this point, a line is drawn to the surface and three points are marked. The first point is C, which is (x0 + Δx, y0 + Δy, z0), then there is B, which is on the tangent plane, and then there is A, which is on the surface. The distance between B and C is marked df(x0, y0).

:::exercise {fs-id1167793298906} type= 
PROBLEM:
The length of line segment $AC$ is equal to what mathematical expression?
:::

:::exercise {fs-id1167793638236} type= 
PROBLEM:
The length of line segment $BC$ is equal to what mathematical expression?
SOLUTION:
The differential of the function $z(x,y)=dz={f}_{x}dx+{f}_{y}dy$
:::

:::exercise {fs-id1167793611461} type= 
PROBLEM:
Using the figure, explain what the length of line segment $AB$ represents.
:::
For the following exercises, complete each task.

:::exercise {fs-id1167793929242} type= 
PROBLEM:
Show that $f(x,y)={e}^{xy}x$ is differentiable at point $(1,0).$
SOLUTION:
Using the definition of differentiability, we have ${e}^{xy}x\approx x+y.$
:::

:::exercise {fs-id1167793298785} type= 
PROBLEM:
Find the total differential of the function $w={e}^{y}\text{cos}(x)+{z}^{2}.$
:::

:::exercise {fs-id1167794046716} type= 
PROBLEM:
Show that $f(x,y)={x}^{2}+3y$ is differentiable at every point. In other words, show that $\text{Δ}z=f(x+\text{Δ}x,y+\text{Δ}y)-f(x,y)={f}_{x}\text{Δ}x+{f}_{y}\text{Δ}y+{ε}_{1}\text{Δ}x+{ε}_{2}\text{Δ}y,$ where both ${ε}_{1}$ and ${ε}_{2}$ approach zero as $(\text{Δ}x,\text{Δ}y)$ approaches $(0,0).$
SOLUTION:
$\text{Δ}z=2x\text{Δ}x+3\text{Δ}y+{(\text{Δ}x)}^{2}.$ ${(\text{Δ}x)}^{2}\to 0$ for small $\text{Δ}x$ and $z$ satisfies the definition of differentiability.
:::

:::exercise {fs-id1167793929423} type= 
PROBLEM:
Find the total differential of the function $z=\frac{xy}{y+x}$ where $x$ changes from $10\;\text{to}\;10.5$ and $y$ changes from $15\;\text{to}\;13.$
:::

:::exercise {fs-id1167793448986} type= 
PROBLEM:
Let $z=f(x,y)=x{e}^{y}.$ Compute $\text{Δ}z$ from $P(1,2)$ to $Q(1.05,2.1)$ and then find the approximate change in $z$ from point $P$ to point $Q.$ Recall $\text{Δ}z=f(x+\text{Δ}x,y+\text{Δ}y)-f(x,y),$ and $dz$ and $\text{Δ}z$ are approximately equal.
SOLUTION:
$\text{Δ}z\approx 1.185422$ and $dz\approx 1.108.$ They are relatively close.
:::

:::exercise {fs-id1167794145839} type= 
PROBLEM:
The volume of a right circular cylinder is given by $V(r,h)=\pi {r}^{2}h.$ Find the differential $dV.$ Interpret the formula geometrically.
:::

:::exercise {fs-id1167794076142} type= 
PROBLEM:
See the preceding problem. Use differentials to estimate the volume of aluminum in an enclosed aluminum can with diameter $8.0\;\text{cm}$ and height $12\;\text{cm}$ if the aluminum is $0.04$ cm thick.
SOLUTION:
$16$ cm<sup>3</sup>
:::

:::exercise {fs-id1167793433557} type= 
PROBLEM:
Use the differential $dz$ to approximate the change in $z=\sqrt{4-{x}^{2}-{y}^{2}}$ as $(x,y)$ moves from point $(1,1)$ to point $(1.01,0.97).$ Compare this approximation with the actual change in the function.
:::

:::exercise {fs-id1167794145889} type= 
PROBLEM:
Let $z=f(x,y)={x}^{2}+3xy-{y}^{2}.$ Find the exact change in the function and the approximate change in the function as $x$ changes from $2.00\;\text{to}\;2.05$ and $y$ changes from $3.00\;\text{to}\;2.96.$
SOLUTION:
$\text{Δ}z=$ exact change $=0.6449,$ approximate change is $dz=0.65.$ The two values are close.
:::

:::exercise {fs-id1167793282591} type= 
PROBLEM:
The centripetal acceleration of a particle moving in a circle is given by $a(r,v)=\frac{{v}^{2}}{r},$ where $v$ is the velocity and $r$ is the radius of the circle. Approximate the maximum percent error in measuring the acceleration resulting from errors of $3\text{\%}$ in $v$ and $2\text{\%}$ in $r.$ (Recall that the percentage error is the ratio of the amount of error over the original amount. So, in this case, the percentage error in $a$ is given by $\frac{da}{a}.)$
:::

:::exercise {fs-id1167793939910} type= 
PROBLEM:
The radius $r$ and height $h$ of a right circular cylinder are measured with possible errors of $4\text{\%}\;\text{and}\;5\text{\%},$ respectively. Approximate the maximum possible percentage error in measuring the volume (Recall that the percentage error is the ratio of the amount of error over the original amount. So, in this case, the percentage error in $V$ is given by $\frac{dV}{V}.)$
SOLUTION:
$13\text{\%}\;\text{or}\;0.13$
:::

:::exercise {fs-id1167793456290} type= 
PROBLEM:
The base radius and height of a right circular cone are measured as $10$ in. and $25$ in., respectively, with a possible error in measurement of as much as $0.1$ in. each. Use differentials to estimate the maximum error in the calculated volume of the cone.
:::

:::exercise {fs-id1167794314927} type= 
PROBLEM:
The {index:electrical resistance} $R$ produced by wiring resistors ${R}_{1}$ and ${R}_{2}$ in parallel can be calculated from the formula $\frac{1}{R}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}.$ If ${R}_{1}$ and ${R}_{2}$ are measured to be $7\text{Ω}$ and $6\text{Ω},$ respectively, and if these measurements are accurate to within $0.05\text{Ω},$ estimate the maximum possible error in computing $R.$ (The symbol $\text{Ω}$ represents an ohm, the unit of electrical resistance.)
SOLUTION:
$0.025$
:::

:::exercise {fs-id1167793992391} type= 
PROBLEM:
The area of an ellipse with axes of length $2a$ and $2b$ is given by the formula
$A=\pi ab.$ Approximate the percent change in the area when $a$ increases by $2\text{\%}$ and $b$ increases by $1.5\text{\%}.$
:::

:::exercise {fs-id1167793507396} type= 
PROBLEM:
The period $T$ of a {index:simple pendulum} with small oscillations is calculated from the formula $T=2\pi \sqrt{\frac{L}{g}},$ where $L$ is the length of the pendulum and $g$ is the acceleration resulting from gravity. Suppose that $L$ and $g$ have errors of, at most, $0.5\text{\%}$ and $0.1\text{\%},$ respectively. Use differentials to approximate the maximum percentage error in the calculated value of $T.$
SOLUTION:
$0.3\text{\%}$
:::

:::exercise {fs-id1167793959806} type= 
PROBLEM:
{index:Electrical power} $P$ is given by $P=\frac{{V}^{2}}{R},$ where $V$ is the voltage and $R$ is the resistance. Approximate the maximum percentage error in calculating power if $120$ $V$ is applied to a $2000-\text{Ω}$ resistor and the possible percent errors in measuring $V$ and $R$ are $3\text{\%}$ and $4\text{\%},$ respectively.
:::
For the following exercises, find the linear approximation of each function at the indicated point.

:::exercise {fs-id1167794058932} type= 
PROBLEM:
$f(x,y)=x\sqrt{y},\;P(1,4)$
SOLUTION:
$2x+\frac{1}{4}y-1$
:::

:::exercise {fs-id1167794325203} type= 
PROBLEM:
$f(x,y)={e}^{x}\text{cos}\;y;P(0,0)$
:::

:::exercise {fs-id1167793371607} type= 
PROBLEM:
$f(x,y)=\text{arctan}(x+2y),P(1,0)$
SOLUTION:
$\frac{1}{2}x+y+\frac{1}{4}\pi -\frac{1}{2}$
:::

:::exercise {fs-id1167794160195} type= 
PROBLEM:
$f(x,y)=\sqrt{20-{x}^{2}-7{y}^{2}},\;P(2,1)$
:::

:::exercise {fs-id1167793400771} type= 
PROBLEM:
$f(x,y,z)=\sqrt{{x}^{2}+{y}^{2}+{z}^{2}},\;P(3,2,6)$
SOLUTION:
$\frac{3}{7}x+\frac{2}{7}y+\frac{6}{7}z$
:::

:::exercise {fs-id1167793504316} type= 
PROBLEM:
**[T]** Find an equation of the tangent plane to the surface $f(x,y)={x}^{2}+{y}^{2}$ at point $(1,2,5),$ and graph the surface and the tangent plane at the point.
:::

:::exercise {fs-id1167794292149} type= 
PROBLEM:
**[T]** Find the equation for the tangent plane to the surface at the indicated point, and graph the surface and the tangent plane: $z=\text{ln}(10{x}^{2}+2{y}^{2}+1),P(0,0,0).$
SOLUTION:
$z=0$

> IMAGE {img:fs-id1167793515332} src=../../media/CNX_Calc_Figure_14_04_203.jpg
> alt: A curved surface is shown with tangent plane at (0, 0, 0). The curved surface looks like the middle part of the bottom of a boat, and the tangent plane is z = 0.

:::

:::exercise {fs-id1167793515347} type= 
PROBLEM:
**[T]** Find an equation of the tangent plane to the surface $z=f(x,y)=\text{sin}(x+{y}^{2})$ at point $(\frac{\pi}{4},0,\frac{\sqrt{2}}{2}),$ and graph the surface and the tangent plane.
:::

## Glossary
- {def} **differentiable**: a function $f(x,y,z)$ is differentiable at $({x}_{0},{y}_{0})$ if $f(x,y)$ can be expressed in the form $f(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})+E(x,y),$

where the error term $E(x,y)$ satisfies $\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}=0$
- {def} **linear approximation**: given a function $f(x,y)$ and a tangent plane to the function at a point $({x}_{0},{y}_{0}),$ we can approximate $f(x,y)$ for points near $({x}_{0},{y}_{0})$ using the tangent plane formula
- {def} **tangent plane**: given a function $f(x,y)$ that is differentiable at a point $({x}_{0},{y}_{0}),$ the equation of the tangent plane to the surface $z=f(x,y)$ is given by $z=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})$
- {def} **total differential**: the total differential of the function $f(x,y)$ at $({x}_{0},{y}_{0})$ is given by the formula $dz={f}_{x}({x}_{0},{y}_{0})dx+{f}_{y}({x}_{0},{y}_{0})dy$

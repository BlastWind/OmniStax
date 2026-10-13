# Partial Derivatives

## Learning Objectives {section:learning-objectives}
- Calculate the partial derivatives of a function of two variables.
- Calculate the partial derivatives of a function of more than two variables.
- Determine the higher-order derivatives of a function of two variables.
- Explain the meaning of a partial differential equation and give an example.

Now that we have examined limits and continuity of functions of two variables, we can proceed to study derivatives. Finding derivatives of functions of two variables is the key concept in this chapter, with as many applications in mathematics, science, and engineering as differentiation of single-variable functions. However, we have already seen that limits and continuity of multivariable functions have new issues and require new terminology and ideas to deal with them. This carries over into differentiation as well.

## Derivatives of a Function of Two Variables
When studying derivatives of functions of one variable, we found that one interpretation of the derivative is an instantaneous rate of change of $y$ as a function of $x.$ Leibniz notation for the derivative is $dy\text{/}dx,$ which implies that $y$ is the dependent variable and $x$ is the independent variable. For a function $z=f(x,y)$ of two variables, $x$ and $y$ are the independent variables and $z$ is the dependent variable. This raises two questions right away: How do we adapt Leibniz notation for functions of two variables? Also, what is an interpretation of the derivative? The answer lies in partial derivatives.

:::note [definition] Definition
Let $f(x,y)$ be a function of two variables. Then the {term:partial derivative} of $f$ with respect to $x,$ written as $\partial f\text{/}\partial x,$ or ${f}_{x},$ is defined as

$$ \frac{\partial f}{\partial x}=\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}. $$  {eq:fs-id1167794136460}

The partial derivative of $f$ with respect to $y,$ written as $\partial f\text{/}\partial y,$ or ${f}_{y},$ is defined as

$$ \frac{\partial f}{\partial y}=\lim_{k\to 0}\frac{f(x,y+k)-f(x,y)}{k}. $$  {eq:fs-id1167793263380}

:::
This definition shows two differences already. First, the notation changes, in the sense that we still use a version of Leibniz notation, but the $d$ in the original notation is replaced with the symbol $\partial .$ (This rounded $\text{“d”}$ is usually called “partial,” so $\partial f\text{/}\partial x$ is spoken as the “partial of $f$ with respect to $x\text{.”})$ This is the first hint that we are dealing with partial derivatives. Second, we now have two different derivatives we can take, since there are two different independent variables. Depending on which variable we choose, we can come up with different partial derivatives altogether, and often do.

:::example {ex:fs-id1167793858583} Calculating Partial Derivatives from the Definition

:::exercise {fs-id1167794062531} type= 
PROBLEM:
Use the definition of the partial derivative as a limit to calculate $\partial f\text{/}\partial x$ and $\partial f\text{/}\partial y$ for the function

$f(x,y)={x}^{2}-3xy+2{y}^{2}-4x+5y-12.$  {eq:fs-id1167793880794}

SOLUTION:
First, calculate $f(x+h,y).$

$\begin{array}{rl}f(x+h,y) & ={(x+h)}^{2}-3(x+h)y+2{y}^{2}-4(x+h)+5y-12 \\ & ={x}^{2}+2xh+{h}^{2}-3xy-3hy+2{y}^{2}-4x-4h+5y-12.\end{array}$  {eq:fs-id1167794246603}

Next, substitute this into [ref:fs-id1167794136460] and simplify:

$\begin{array}{rl}\frac{\partial f}{\partial x} & =\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h} \\ & =\lim_{h\to 0}\frac{({x}^{2}+2xh+{h}^{2}-3xy-3hy+2{y}^{2}-4x-4h+5y-12)-({x}^{2}-3xy+2{y}^{2}-4x+5y-12)}{h} \\ & =\lim_{h\to 0}\frac{{x}^{2}+2xh+{h}^{2}-3xy-3hy+2{y}^{2}-4x-4h+5y-12-{x}^{2}+3xy-2{y}^{2}+4x-5y+12}{h} \\ & =\lim_{h\to 0}\frac{2xh+{h}^{2}-3hy-4h}{h} \\ & =\lim_{h\to 0}\frac{h(2x+h-3y-4)}{h} \\ & =\lim_{h\to 0}(2x+h-3y-4) \\ & =2x-3y-4.\end{array}$  {eq:fs-id1167794025611}

To calculate $\frac{\partial f}{\partial y},$ first calculate $f(x,y+k)\text{:}$

$\begin{array}{ll}f(x,y+k) & ={x}^{2}-3x(y+k)+2{(y+k)}^{2}-4x+5(y+k)-12 \\ & ={x}^{2}-3xy-3xk+2{y}^{2}+4yk+2{k}^{2}-4x+5y+5k-12.\end{array}$  {eq:fs-id1167793372187}

Next, substitute this into [ref:fs-id1167793263380] and simplify:

$\begin{array}{rl}\frac{\partial f}{\partial y} & =\lim_{k\to 0}\frac{f(x,y+k)-f(x,y)}{k} \\ & =\lim_{k\to 0}\frac{({x}^{2}-3xy-3xk+2{y}^{2}+4yk+2{k}^{2}-4x+5y+5k-12)-({x}^{2}-3xy+2{y}^{2}-4x+5y-12)}{k} \\ & =\lim_{k\to 0}\frac{{x}^{2}-3xy-3xk+2{y}^{2}+4yk+2{k}^{2}-4x+5y+5k-12-{x}^{2}+3xy-2{y}^{2}+4x-5y+12}{k} \\ & =\lim_{k\to 0}\frac{−3xk+4yk+2{k}^{2}+5k}{k} \\ & =\lim_{k\to 0}\frac{h(−3x+4y+2k+5)}{k} \\ & =\lim_{k\to 0}(−3x+4y+2k+5) \\ & =−3x+4y+5.\end{array}$  {eq:fs-id1167794201825}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794046971} type= 
PROBLEM:
Use the definition of the partial derivative as a limit to calculate $\partial f\text{/}\partial x$ and $\partial f\text{/}\partial y$ for the function

$f(x,y)=4{x}^{2}+2xy-{y}^{2}+3x-2y+5.$  {eq:fs-id1167793877745}

SOLUTION:
$\frac{\partial f}{\partial x}=8x+2y+3,\;\frac{\partial f}{\partial y}=2x-2y-2$
COMMENTARY: Hint
Use [ref:fs-id1167794136460] and [ref:fs-id1167793263380] from the definition of partial derivatives.
:::
:::
The idea to keep in mind when calculating partial derivatives is to treat all independent variables, other than the variable with respect to which we are differentiating, as constants. Then proceed to differentiate as with a function of a single variable. To see why this is true, first fix $y$ and define $g(x)=f(x,y)$ as a function of $x.$ Then

${g}^{'}(x)=\lim_{h\to 0}\frac{g(x+h)-g(x)}{h}=\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}=\frac{\partial f}{\partial x}.$  {eq:fs-id1167793931675}

The same is true for calculating the partial derivative of $f$ with respect to $y.$ This time, fix $x$ and define $h(y)=f(x,y)$ as a function of $y.$ Then

${h}^{'}(x)=\lim_{k\to 0}\frac{h(x+k)-h(x)}{k}=\lim_{k\to 0}\frac{f(x,y+k)-f(x,y)}{k}=\frac{\partial f}{\partial y}.$  {eq:fs-id1167793973199}

All differentiation rules from [Introduction to Derivatives](module:m53494) apply.

:::example {ex:fs-id1167793627691} Calculating Partial Derivatives

:::exercise {fs-id1167793870892} type= 
PROBLEM:
Calculate both partial derivatives for the following functions by holding the opposite variable constant then differentiating:
a. $f(x,y)={x}^{2}-3xy+2{y}^{2}-4x+5y-12$
b. $g(x,y)=\text{sin}({x}^{2}y-2x+4)$
SOLUTION:
a. To calculate $\partial f\text{/}\partial x,$ treat the variable $y$ as a constant. Then differentiate $f(x,y)$ with respect to $x$ using the sum, difference, and power rules:

$\begin{array}{rl}\frac{\partial f}{\partial x} & =\frac{\partial}{\partial x}[{x}^{2}-3xy+2{y}^{2}-4x+5y-12] \\ & =\frac{\partial}{\partial x}[{x}^{2}]-\frac{\partial}{\partial x}[3xy]+\frac{\partial}{\partial x}[2{y}^{2}]-\frac{\partial}{\partial x}[4x]+\frac{\partial}{\partial x}[5y]-\frac{\partial}{\partial x}[12] \\ & =2x-3y+0-4+0-0 \\ & =2x-3y-4.\end{array}$  {eq:fs-id1167793238109}

The derivatives of the third, fifth, and sixth terms are all zero because they do not contain the variable $x,$ so they are treated as constant terms. The derivative of the second term is equal to the coefficient of $x,$ which is $−3y.$ Calculating $\partial f\text{/}\partial y\text{:}$

$\begin{array}{rl}\frac{\partial f}{\partial y} & =\frac{\partial}{\partial y}[{x}^{2}-3xy+2{y}^{2}-4x+5y-12] \\ & =\frac{\partial}{\partial y}[{x}^{2}]-\frac{\partial}{\partial y}[3xy]+\frac{\partial}{\partial y}[2{y}^{2}]-\frac{\partial}{\partial y}[4x]+\frac{\partial}{\partial y}[5y]-\frac{\partial}{\partial y}[12] \\ & =−3x+4y-0+5-0 \\ & =−3x+4y+5.\end{array}$  {eq:fs-id1167793924016}

These are the same answers obtained in [ref:fs-id1167793858583].
b. To calculate $\partial g\text{/}\partial x,$ treat the variable *y* as a constant. Then differentiate $g(x,y)$ with respect to *x* using the chain rule and power rule:

$\begin{array}{rl}\frac{\partial g}{\partial x} & =\frac{\partial}{\partial x}[\text{sin}({x}^{2}y-2x+4)] \\ & =\text{cos}({x}^{2}y-2x+4)\frac{\partial}{\partial x}[{x}^{2}y-2x+4] \\ & =(2xy-2)\text{cos}({x}^{2}y-2x+4).\end{array}$  {eq:fs-id1167793870338}

To calculate $\partial g\text{/}\partial y,$ treat the variable $x$ as a constant. Then differentiate $g(x,y)$ with respect to $y$ using the chain rule and power rule:

$\begin{array}{rl}\frac{\partial g}{\partial y} & =\frac{\partial}{\partial y}[\text{sin}({x}^{2}y-2x+4)] \\ & =\text{cos}({x}^{2}y-2x+4)\frac{\partial}{\partial y}[{x}^{2}y-2x+4] \\ & ={x}^{2}\text{cos}({x}^{2}y-2x+4).\end{array}$  {eq:fs-id1167793369896}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794077062} type= 
PROBLEM:
Calculate $\partial f\text{/}\partial x$ and $\partial f\text{/}\partial y$ for the function $f(x,y)=\text{tan}({x}^{3}-3{x}^{2}{y}^{2}+2{y}^{4})$ by holding the opposite variable constant, then differentiating.
SOLUTION:
$\begin{array}{l}\frac{\partial f}{\partial x}=(3{x}^{2}-6x{y}^{2}){\text{sec}}^{2}({x}^{3}-3{x}^{2}{y}^{2}+2{y}^{4}) \\ \frac{\partial f}{\partial y}=(−6{x}^{2}y+8{y}^{3}){\text{sec}}^{2}({x}^{3}-3{x}^{2}{y}^{2}+2{y}^{4})\end{array}$
COMMENTARY: Hint
Use [ref:fs-id1167794136460] and [ref:fs-id1167793263380] from the definition of partial derivatives.
:::
:::
How can we interpret these partial derivatives? Recall that the graph of a function of two variables is a surface in ${\mathbb{R}}^{3}.$ If we remove the limit from the definition of the partial derivative with respect to $x,$ the difference quotient remains:

$\frac{f(x+h,y)-f(x,y)}{h}.$  {eq:fs-id1167793949242}

This resembles the difference quotient for the derivative of a function of one variable, except for the presence of the $y$ variable. [ref:CNX_Calc_Figure_14_03_001] illustrates a surface described by an arbitrary function $z=f(x,y).$

> FIGURE {fig:CNX_Calc_Figure_14_03_001} src=../../media/CNX_Calc_Figure_14_03_001.jpg
> alt: A complicated curve in xyz space with a secant line through the points (x, y, f(x, y)) and (x + h, y, f(x + h, y)).
> caption: Secant line passing through the points $(x,y,f(x,y))$ and $(x+h,y,f(x+h,y)).$

In [ref:CNX_Calc_Figure_14_03_001], the value of $h$ is positive. If we graph $f(x,y)$ and $f(x+h,y)$ for an arbitrary point $(x,y),$ then the slope of the secant line passing through these two points is given by

$\frac{f(x+h,y)-f(x,y)}{h}.$  {eq:fs-id1167793380091}

This line is parallel to the $x-z\text{plane.}$ Therefore, the slope of the secant line represents an average rate of change of the function $f$ as we travel parallel to the $x\text{-axis.}$ As $h$ approaches zero, the slope of the secant line approaches the slope of the tangent line.
If we choose to change $y$ instead of $x$ by the same incremental value $h,$ then the secant line is parallel to the $y\text{-axis}$ and so is the tangent line. Therefore, $\partial f\text{/}\partial x$ represents the slope of the tangent line passing through the point $(x,y,f(x,y))$ parallel to the $x\text{-axis}$ and $\partial f\text{/}\partial y$ represents the slope of the tangent line passing through the point $(x,y,f(x,y))$ parallel to the $y\text{-axis}.$ If we wish to find the slope of a tangent line passing through the same point in any other direction, then we need what are called *directional derivatives*, which we discuss in [Directional Derivatives and the Gradient](module:m53940).
We now return to the idea of contour maps, which we introduced in [Functions of Several Variables](module:m53946). We can use a {index:contour map} to estimate partial derivatives of a function $g(x,y).$

:::example {ex:fs-id1167794324455} Partial Derivatives from a Contour Map

:::exercise {fs-id1167793432281} type= 
PROBLEM:
Use a contour map to estimate $\partial g\text{/}\partial x$ at the point $(\sqrt{5},0)$ for the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}.$
SOLUTION:
The following graph represents a contour map for the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}.$

> FIGURE {fig:CNX_Calc_Figure_14_03_002} src=../../media/CNX_Calc_Figure_14_03_002.jpg
> alt: A series of concentric circles with the center the origin. The first is marked c = 0 and has radius 3; the second is marked c = 1 and has radius slightly less than 3; and the third is marked c = 2 and has radius slightly more than 2. The graph is marked with the equation g(x, y) = the square root of the quantity (9 – x2 – y2).
> caption: Contour map for the function $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}},$ using $\text{c}\;=0,1,2,$ and $3$ $(c=3$ corresponds to the origin).

The inner circle on the contour map corresponds to $c=2$ and the next circle out corresponds to $c=1.$ The first circle is given by the equation $2=\sqrt{9-{x}^{2}-{y}^{2}};$ the second circle is given by the equation $1=\sqrt{9-{x}^{2}-{y}^{2}}.$ The first equation simplifies to ${x}^{2}+{y}^{2}=5$ and the second equation simplifies to ${x}^{2}+{y}^{2}=8.$ The $x\text{-intercept}$ of the first circle is $(\sqrt{5},0)$ and the $x\text{-intercept}$ of the second circle is $(2\sqrt{2},0).$ We can estimate the value of $\partial g\text{/}\partial x$ evaluated at the point $(\sqrt{5},0)$ using the slope formula:

${\frac{\partial g}{\partial x}|}_{(x,y)=(\sqrt{5},0)}\approx \frac{g(\sqrt{5},0)-g(2\sqrt{2},0)}{\sqrt{5}-2\sqrt{2}}=\frac{2-1}{\sqrt{5}-2\sqrt{2}}=\frac{1}{\sqrt{5}-2\sqrt{2}}\approx −1.688.$  {eq:fs-id1167793425030}

To calculate the exact value of $\partial g\text{/}\partial x$ evaluated at the point $(\sqrt{5},0),$ we start by finding $\partial g\text{/}\partial x$ using the chain rule. First, we rewrite the function as $g(x,y)=\sqrt{9-{x}^{2}-{y}^{2}}={(9-{x}^{2}-{y}^{2})}^{1\text{/}2}$ and then differentiate with respect to $x$ while holding $y$ constant:

$\frac{\partial g}{\partial x}=\frac{1}{2}{(9-{x}^{2}-{y}^{2})}^{−1\text{/}2}(−2x)=-\frac{x}{\sqrt{9-{x}^{2}-{y}^{2}}}.$  {eq:fs-id1167794293320}

Next, we evaluate this expression using $x=\sqrt{5}$ and $y=0\text{:}$

${\frac{\partial g}{\partial x}|}_{(x,y)=(\sqrt{5},0)}=-\frac{\sqrt{5}}{\sqrt{9-{(\sqrt{5})}^{2}-{(0)}^{2}}}=-\frac{\sqrt{5}}{\sqrt{4}}=-\frac{\sqrt{5}}{2}\approx −1.118.$  {eq:fs-id1167793547528}

The estimate for the partial derivative corresponds to the slope of the secant line passing through the points $(\sqrt{5},0,g(\sqrt{5},0))$ and $(2\sqrt{2},0,g(2\sqrt{2},0)).$ It represents an approximation to the slope of the tangent line to the surface through the point $(\sqrt{5},0,g(\sqrt{5},0)),$ which is parallel to the $x\text{-axis}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793638347} type= 
PROBLEM:
Use a contour map to estimate $\partial f\text{/}\partial y$ at point $(0,\sqrt{2})$ for the function

$f(x,y)={x}^{2}-{y}^{2}.$  {eq:fs-id1167793940548}

Compare this with the exact answer.
SOLUTION:
Using the curves corresponding to $c=−2\;\text{and}\;c=−3,$ we obtain
${\frac{\partial f}{\partial y}|}_{(x,y)=(0,\sqrt{2})}\approx \frac{f(0,\sqrt{3})-f(0,\sqrt{2})}{\sqrt{3}-\sqrt{2}}=\frac{−3-(−2)}{\sqrt{3}-\sqrt{2}}\cdot \frac{\sqrt{3}+\sqrt{2}}{\sqrt{3}+\sqrt{2}}=\text{−}\sqrt{3}-\sqrt{2}\approx −3.146.$
The exact answer is
${\frac{\partial f}{\partial y}|}_{(x,y)=(0,\sqrt{2})}=({−2y|}_{(x,y)=(0,\sqrt{2})}=−2\sqrt{2}\approx −2.828.$
COMMENTARY: Hint
Create a contour map for $f$ using values of $c$ from $−3\;\text{to}\;3.$ Which of these curves passes through point $(0,\sqrt{2})?$
:::
:::

## Functions of More Than Two Variables
Suppose we have a function of three variables, such as $w=f(x,y,z).$ We can calculate partial derivatives of $w$ with respect to any of the independent variables, simply as extensions of the definitions for partial derivatives of functions of two variables.

:::note [definition] Definition
Let $f(x,y,z)$ be a function of three variables. Then, the *partial derivative of $f$ with respect to x,* written as $\partial f\text{/}\partial x,$ or ${f}_{x},$ is defined to be

$$ \frac{\partial f}{\partial x}=\lim_{h\to 0}\frac{f(x+h,y,z)-f(x,y,z)}{h}. $$  {eq:fs-id1167793432298}

The *partial derivative of* $f$ *with respect to* $y,$ written as $\partial f\text{/}\partial y,$ or ${f}_{y},$ is defined to be

$$ \frac{\partial f}{\partial y}=\lim_{k\to 0}\frac{f(x,y+k,z)-f(x,y,z)}{k}. $$  {eq:fs-id1167794125858}

The *partial derivative of* $f$ *with respect to* $z,$ written as $\partial f\text{/}\partial z,$ or ${f}_{z},$ is defined to be

$$ \frac{\partial f}{\partial z}=\lim_{m\to 0}\frac{f(x,y,z+m)-f(x,y,z)}{m}. $$  {eq:fs-id1167793488609}

:::
We can calculate a partial derivative of a function of three variables using the same idea we used for a function of two variables. For example, if we have a function $f$ of $x,y,\text{and}\;z,$ and we wish to calculate $\partial f\text{/}\partial x,$ then we treat the other two independent variables as if they are constants, then differentiate with respect to $x.$

:::example {ex:fs-id1167794138813} Calculating Partial Derivatives for a Function of Three Variables

:::exercise {fs-id1167794138816} type= 
PROBLEM:
Use the limit definition of partial derivatives to calculate $\partial f\text{/}\partial x$ for the function

$f(x,y,z)={x}^{2}-3xy+2{y}^{2}-4xz+5y{z}^{2}-12x+4y-3z.$  {eq:fs-id1167793632905}

Then, find $\partial f\text{/}\partial y$ and $\partial f\text{/}\partial z$ by setting the other two variables constant and differentiating accordingly.
SOLUTION:
We first calculate $\partial f\text{/}\partial x$ using [ref:fs-id1167793432298], then we calculate the other two partial derivatives by holding the remaining variables constant. To use the equation to find $\partial f\text{/}\partial x,$ we first need to calculate $f(x+h,y,z)\text{:}$

$\begin{array}{rl}f(x+h,y,z) & ={(x+h)}^{2}-3(x+h)y+2{y}^{2}-4(x+h)z+5y{z}^{2}-12(x+h)+4y-3z \\ & ={x}^{2}+2xh+{h}^{2}-3xy-3xh+2{y}^{2}-4xz-4hz+5y{z}^{2}-12x-12h+4y-3z\end{array}$  {eq:fs-id1167793631601}

and recall that $f(x,y,z)={x}^{2}-3xy+2{y}^{2}-4zx+5y{z}^{2}-12x+4y-3z.$ Next, we substitute these two expressions into the equation:

$\begin{array}{rl}\frac{\partial f}{\partial x} & =\lim_{h\to 0}[\frac{{x}^{2}+2xh+{h}^{2}-3xy-3hy+2{y}^{2}-4xz-4hz+5y{z}^{2}-12x-12h+4y-3z}{h} \\ & \;-\frac{{x}^{2}-3xy+2{y}^{2}-4xz+5y{z}^{2}-12x+4y-3z}{h}] \\ & =\lim_{h\to 0}[\frac{2xh+{h}^{2}-3hy-4hz-12h}{h}] \\ & =\lim_{h\to 0}[\frac{h(2x+h-3y-4z-12)}{h}] \\ & =\lim_{h\to 0}(2x+h-3y-4z-12) \\ & =2x-3y-4z-12.\end{array}$  {eq:fs-id1167793953247}

Then we find $\partial f\text{/}\partial y$ by holding $x\;\text{and}\;z$ constant. Therefore, any term that does not include the variable $y$ is constant, and its derivative is zero. We can apply the sum, difference, and power rules for functions of one variable:

$\begin{array}{l}\frac{\partial}{\partial y}[{x}^{2}-3xy+2{y}^{2}-4xz+5y{z}^{2}-12x+4y-3z] \\ =\frac{\partial}{\partial y}[{x}^{2}]-\frac{\partial}{\partial y}[3xy]+\frac{\partial}{\partial y}[2{y}^{2}]-\frac{\partial}{\partial y}[4xz]+\frac{\partial}{\partial y}[5y{z}^{2}]-\frac{\partial}{\partial y}[12x]+\frac{\partial}{\partial y}[4y]-\frac{\partial}{\partial y}[3z] \\ =0-3x+4y-0+5{z}^{2}-0+4-0 \\ =−3x+4y+5{z}^{2}+4.\end{array}$  {eq:fs-id1167793409708}

To calculate $\partial f\text{/}\partial z,$ we hold *x* and *y* constant and apply the sum, difference, and power rules for functions of one variable:

$\begin{array}{l}\frac{\partial}{\partial z}[{x}^{2}-3xy+2{y}^{2}-4xz+5y{z}^{2}-12x+4y-3z] \\ =\frac{\partial}{\partial z}[{x}^{2}]-\frac{\partial}{\partial z}[3xy]+\frac{\partial}{\partial z}[2{y}^{2}]-\frac{\partial}{\partial z}[4xz]+\frac{\partial}{\partial z}[5y{z}^{2}]-\frac{\partial}{\partial z}[12x]+\frac{\partial}{\partial z}[4y]-\frac{\partial}{\partial z}[3z] \\ =0-0+0-4x+10yz-0+0-3 \\ =−4x+10yz-3.\end{array}$  {eq:fs-id1167793376305}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793830458} type= 
PROBLEM:
Use the limit definition of partial derivatives to calculate $\partial f\text{/}\partial x$ for the function

$f(x,y,z)=2{x}^{2}-4{x}^{2}y+2{y}^{2}+5x{z}^{2}-6x+3z-8.$  {eq:fs-id1167793465538}

Then find $\partial f\text{/}\partial y$ and $\partial f\text{/}\partial z$ by setting the other two variables constant and differentiating accordingly.
SOLUTION:
$\frac{\partial f}{\partial x}=4x-8xy+5{z}^{2}-6,\;\frac{\partial f}{\partial y}=−4{x}^{2}+4y,\;\frac{\partial f}{\partial z}=10xz+3$
COMMENTARY: Hint
Use the strategy in the preceding example.
:::
:::

:::example {ex:fs-id1167793267254} Calculating Partial Derivatives for a Function of Three Variables

:::exercise {fs-id1167793267256} type= 
PROBLEM:
Calculate the three partial derivatives of the following functions.
a. $f(x,y,z)=\frac{{x}^{2}y-4xz+{y}^{2}}{x-3yz}$
b. $g(x,y,z)=\text{sin}({x}^{2}y-z)+\text{cos}({x}^{2}-yz)$
SOLUTION:
In each case, treat all variables as constants except the one whose partial derivative you are calculating.
a. $\begin{array}{rl}\frac{\partial f}{\partial x} & =\frac{\partial}{\partial x}[\frac{{x}^{2}y-4xz+{y}^{2}}{x-3yz}] \\ & =\frac{\frac{\partial}{\partial x}({x}^{2}y-4xz+{y}^{2})(x-3yz)-({x}^{2}y-4xz+{y}^{2})\frac{\partial}{\partial x}(x-3yz)}{{(x-3yz)}^{2}} \\ & =\frac{(2xy-4z)(x-3yz)-({x}^{2}y-4xz+{y}^{2})(1)}{{(x-3yz)}^{2}} \\ & =\frac{2{x}^{2}y-6x{y}^{2}z-4xz+12y{z}^{2}-{x}^{2}y+4xz-{y}^{2}}{{(x-3yz)}^{2}} \\ & =\frac{{x}^{2}y-6x{y}^{2}z-4xz+12y{z}^{2}+4xz-{y}^{2}}{{(x-3yz)}^{2}}\end{array}$

$\begin{array}{rl}\frac{\partial f}{\partial y} & =\frac{\partial}{\partial y}[\frac{{x}^{2}y-4xz+{y}^{2}}{x-3yz}] \\ & =\frac{\frac{\partial}{\partial y}({x}^{2}y-4xz+{y}^{2})(x-3yz)-({x}^{2}y-4xz+{y}^{2})\frac{\partial}{\partial y}(x-3yz)}{{(x-3yz)}^{2}} \\ & =\frac{({x}^{2}+2y)(x-3yz)-({x}^{2}y-4xz+{y}^{2})(−3z)}{{(x-3yz)}^{2}} \\ & =\frac{{x}^{3}-3{x}^{2}yz+2xy-6{y}^{2}z+3{x}^{2}yz-12x{z}^{2}+3{y}^{2}z}{{(x-3yz)}^{2}} \\ & =\frac{{x}^{3}+2xy-3{y}^{2}z-12x{z}^{2}}{{(x-3yz)}^{2}}\end{array}$

$\begin{array}{rl}\frac{\partial f}{\partial z} & =\frac{\partial}{\partial z}[\frac{{x}^{2}y-4xz+{y}^{2}}{x-3yz}] \\ & =\frac{\frac{\partial}{\partial z}({x}^{2}y-4xz+{y}^{2})(x-3yz)-({x}^{2}y-4xz+{y}^{2})\frac{\partial}{\partial z}(x-3yz)}{{(x-3yz)}^{2}} \\ & =\frac{(−4x)(x-3yz)-({x}^{2}y-4xz+{y}^{2})(−3y)}{{(x-3yz)}^{2}} \\ & =\frac{−4{x}^{2}+12xyz+3{x}^{2}{y}^{2}-12xyz+3{y}^{3}}{{(x-3yz)}^{2}} \\ & =\frac{−4{x}^{2}+3{x}^{2}{y}^{2}+3{y}^{3}}{{(x-3yz)}^{2}}\end{array}$
b. $\begin{array}{rl}\frac{\partial f}{\partial x} & =\frac{\partial}{\partial x}[\text{sin}({x}^{2}y-z)+\text{cos}({x}^{2}-yz)] \\ & =(\text{cos}({x}^{2}y-z))\frac{\partial}{\partial x}({x}^{2}y-z)-(\text{sin}({x}^{2}-yz))\frac{\partial}{\partial x}({x}^{2}-yz) \\ & =2xy\;\text{cos}({x}^{2}y-z)-2x\;\text{sin}({x}^{2}-yz) \\ \frac{\partial f}{\partial y} & =\frac{\partial}{\partial y}[\text{sin}({x}^{2}y-z)+\text{cos}({x}^{2}-yz)] \\ & =(\text{cos}({x}^{2}y-z))\frac{\partial}{\partial y}({x}^{2}y-z)-(\text{sin}({x}^{2}-yz))\frac{\partial}{\partial y}({x}^{2}-yz) \\ & ={x}^{2}\text{cos}({x}^{2}y-z)+z\;\text{sin}({x}^{2}-yz) \\ \frac{\partial f}{\partial z} & =\frac{\partial}{\partial z}[\text{sin}({x}^{2}y-z)+\text{cos}({x}^{2}-yz)] \\ & =(\text{cos}({x}^{2}y-z))\frac{\partial}{\partial z}({x}^{2}y-z)-(\text{sin}({x}^{2}-yz))\frac{\partial}{\partial z}({x}^{2}-yz) \\ & =\text{−}\text{cos}({x}^{2}y-z)+y\;\text{sin}({x}^{2}-yz)\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793589668} type= 
PROBLEM:
Calculate $\partial f\text{/}\partial x,$ $\partial f\text{/}\partial y,$ and $\partial f\text{/}\partial z$ for the function $f(x,y,z)=\text{sec}({x}^{2}y)-\text{tan}({x}^{3}y{z}^{2}).$
SOLUTION:
$\begin{array}{l}\frac{\partial f}{\partial x}=2xy\;\text{sec}({x}^{2}y)\text{tan}({x}^{2}y)-3{x}^{2}y{z}^{2}{\text{sec}}^{2}({x}^{3}y{z}^{2}) \\ \frac{\partial f}{\partial y}={x}^{2}\text{sec}({x}^{2}y)\text{tan}({x}^{2}y)-{x}^{3}{z}^{2}{\text{sec}}^{2}({x}^{3}y{z}^{2}) \\ \frac{\partial f}{\partial z}=−2{x}^{3}yz\;{\text{sec}}^{2}({x}^{3}y{z}^{2})\end{array}$
COMMENTARY: Hint
Use the strategy in the preceding example.
:::
:::

## Higher-Order Partial Derivatives
Consider the function

$f(x,y)=2{x}^{3}-4x{y}^{2}+5{y}^{3}-6xy+5x-4y+12.$  {eq:fs-id1167793642010}

Its partial derivatives are

$\frac{\partial f}{\partial x}=6{x}^{2}-4{y}^{2}-6y+5\;\text{and}\;\frac{\partial f}{\partial y}=−8xy+15{y}^{2}-6x-4.$  {eq:fs-id1167793479847}

Each of these partial derivatives is a function of two variables, so we can calculate partial derivatives of these functions. Just as with derivatives of single-variable functions, we can call these *second-order derivatives, third-order derivatives*, and so on. In general, they are referred to as {term:higher-order partial derivatives}. There are four second-order partial derivatives for any function (provided they all exist):

$\frac{{\partial}^{2}f}{\partial {x}^{2}}=\frac{\partial}{\partial x}[\frac{\partial f}{\partial x}],\;\frac{{\partial}^{2}f}{\partial x\partial y}=\frac{\partial}{\partial x}[\frac{\partial f}{\partial y}],\;\frac{{\partial}^{2}f}{\partial y\partial x}=\frac{\partial}{\partial y}[\frac{\partial f}{\partial x}],\;\frac{{\partial}^{2}f}{\partial {y}^{2}}=\frac{\partial}{\partial y}[\frac{\partial f}{\partial y}].$  {eq:fs-id1167793373630}

An alternative notation for each is ${f}_{xx},{f}_{yx},{f}_{xy},$ and ${f}_{yy},$ respectively. Higher-order partial derivatives calculated with respect to different variables, such as ${f}_{xy}$ and ${f}_{yx},$ are commonly called {term:mixed partial derivatives}.

:::example {ex:fs-id1167794200489} Calculating Second Partial Derivatives

:::exercise {fs-id1167794200491} type= 
PROBLEM:
Calculate all four second partial derivatives for the function

$f(x,y)=x{e}^{−3y}+\text{sin}(2x-5y).$  {eq:fs-id1167794200501}

SOLUTION:
To calculate ${\partial}^{2}f\text{/}d{x}^{2}$ and ${\partial}^{2}f\text{/}\partial y\partial x,$ we first calculate $\partial f\text{/}\partial x\text{:}$

$\frac{\partial f}{\partial x}={e}^{−3y}+2\;\text{cos}(2x-5y).$  {eq:fs-id1167793543628}

To calculate ${\partial}^{2}f\text{/}d{x}^{2},$ differentiate $\partial f\text{/}\partial x$ with respect to $x\text{:}$

$\begin{array}{rl}\frac{{\partial}^{2}f}{\partial {x}^{2}} & =\frac{\partial}{\partial x}[\frac{\partial f}{\partial x}] \\ & =\frac{\partial}{\partial x}[{e}^{−3y}+2\;\text{cos}(2x-5y)] \\ & =−4\;\text{sin}(2x-5y).\end{array}$  {eq:fs-id1167794177138}

To calculate ${\partial}^{2}f\text{/}\partial y\partial x,$ differentiate $\partial f\text{/}\partial x$ with respect to $y\text{:}$

$\begin{array}{rl}\frac{{\partial}^{2}f}{\partial y\partial x} & =\frac{\partial}{\partial y}[\frac{\partial f}{\partial x}] \\ & =\frac{\partial}{\partial y}[{e}^{−3y}+2\;\text{cos}(2x-5y)] \\ & =−3{e}^{−3y}+10\;\text{sin}(2x-5y).\end{array}$  {eq:fs-id1167793638140}

To calculate ${\partial}^{2}f\text{/}\partial x\partial y$ and ${\partial}^{2}f\text{/}d{y}^{2},$ first calculate $\partial f\text{/}\partial y\text{:}$

$\frac{\partial f}{\partial y}=−3x{e}^{−3y}-5\;\text{cos}(2x-5y).$  {eq:fs-id1167793251278}

To calculate ${\partial}^{2}f\text{/}\partial x\partial y,$ differentiate $\partial f\text{/}\partial y$ with respect to $x\text{:}$

$\begin{array}{rl}\frac{{\partial}^{2}f}{\partial x\partial y} & =\frac{\partial}{\partial x}[\frac{\partial f}{\partial y}] \\ & =\frac{\partial}{\partial x}[−3x{e}^{−3y}-5\;\text{cos}(2x-5y)] \\ & =−3{e}^{−3y}+10\;\text{sin}(2x-5y).\end{array}$  {eq:fs-id1167793418237}

To calculate ${\partial}^{2}f\text{/}\partial {y}^{2},$ differentiate $\partial f\text{/}\partial y$ with respect to $y\text{:}$

$\begin{array}{rl}\frac{{\partial}^{2}f}{\partial {y}^{2}} & =\frac{\partial}{\partial y}[\frac{\partial f}{\partial y}] \\ & =\frac{\partial}{\partial y}[−3x{e}^{−3y}-5\;\text{cos}(2x-5y)] \\ & =9x{e}^{−3y}-25\;\text{sin}(2x-5y).\end{array}$  {eq:fs-id1167793638076}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794327634} type= 
PROBLEM:
Calculate all four second partial derivatives for the function

$f(x,y)=\text{sin}(3x-2y)+\text{cos}(x+4y).$  {eq:fs-id1167794327641}

SOLUTION:
$\begin{array}{l}\frac{{\partial}^{2}f}{\partial {x}^{2}}=−9\;\text{sin}(3x-2y)-\text{cos}(x+4y) \\ \frac{{\partial}^{2}f}{\partial x\partial y}=6\;\text{sin}(3x-2y)-4\;\text{cos}(x+4y) \\ \frac{{\partial}^{2}f}{\partial y\partial x}=6\;\text{sin}(3x-2y)-4\;\text{cos}(x+4y) \\ \frac{{\partial}^{2}f}{\partial {y}^{2}}=−4\;\text{sin}(3x-2y)-16\;\text{cos}(x+4y)\end{array}$
COMMENTARY: Hint
Follow the same steps as in the previous example.
:::
:::
At this point we should notice that, in both [ref:fs-id1167794200489] and the checkpoint, it was true that ${\partial}^{2}f\text{/}\partial x\partial y={\partial}^{2}f\text{/}\partial y\partial x.$ Under certain conditions, this is always true. In fact, it is a direct consequence of the following theorem.

:::note [theorem] Equality of Mixed Partial Derivatives (Clairaut’s Theorem)
Suppose that $f(x,y)$ is defined on an open disk $D$ that contains the point $(a,b).$ If the functions ${f}_{xy}$ and ${f}_{yx}$ are continuous on $D,$ then ${f}_{xy}={f}_{yx}.$
:::
Clairaut’s theorem guarantees that as long as mixed second-order derivatives are continuous, the order in which we choose to differentiate the functions (i.e., which variable goes first, then second, and so on) does not matter. It can be extended to higher-order derivatives as well. The proof of Clairaut’s theorem can be found in most advanced calculus books.
Two other second-order partial derivatives can be calculated for any function $f(x,y).$ The partial derivative ${f}_{xx}$ is equal to the partial derivative of ${f}_{x}$ with respect to $x,$ and ${f}_{yy}$ is equal to the partial derivative of ${f}_{y}$ with respect to $y.$

## Partial Differential Equations
In [Introduction to Differential Equations](module:m53696), we studied differential equations in which the unknown function had one independent variable. A {term:partial differential equation} is an equation that involves an unknown function of more than one independent variable and one or more of its partial derivatives. Examples of partial differential equations are

$$ {u}_{t}={c}^{2}({u}_{xx}+{u}_{yy}) $$  {eq:fs-id1167794324420}

({index:heat equation} in two dimensions)

$$ {u}_{tt}={c}^{2}({u}_{xx}+{u}_{yy}) $$  {eq:fs-id1167794137037}

({index:wave equation} in two dimensions)

$$ {u}_{xx}+{u}_{yy}=0 $$  {eq:fs-id1167793503428}

({index:Laplace’s equation} in two dimensions)
In the first two equations, the unknown function $u$ has three independent variables—$t,x,\;\text{and}\;y$—and $c$ is an arbitrary constant. The independent variables $x\;\text{and}\;y$ are considered to be spatial variables, and the variable $t$ represents time. In Laplace’s equation, the unknown function $u$ has two independent variables $x\;\text{and}\;y.$

:::example {ex:fs-id1167794122405} A Solution to the Wave Equation

:::exercise {fs-id1167794122407} type= 
PROBLEM:
Verify that

$u(x,y,t)=5\;\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t)$  {eq:fs-id1167794122418}

is a solution to the wave equation

$$ {u}_{tt}=4({u}_{xx}+{u}_{yy}). $$  {eq:fs-id1167793401357}

SOLUTION:
First, we calculate ${u}_{tt},{u}_{xx},$ and ${u}_{yy}\text{:}$

$\begin{array}{rll}{u}_{tt} & = & \frac{\partial}{\partial t}[\frac{\partial u}{\partial t}] \\ & = & \frac{\partial}{\partial t}[5\;\text{sin}(3\pi x)\text{sin}(4\pi y)(−10\pi \;\text{sin}(10\pi t))] \\ & = & \frac{\partial}{\partial t}[−50\pi \;\text{sin}(3\pi x)\text{sin}(4\pi y)\text{sin}(10\pi t)] \\ & = & −500{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t) \\ {u}_{xx} & = & \frac{\partial}{\partial x}[\frac{\partial u}{\partial x}] \\ & = & \frac{\partial}{\partial x}[15\pi \;\text{cos}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t)] \\ & = & −45{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t) \\ {u}_{yy} & = & \frac{\partial}{\partial y}[\frac{\partial u}{\partial y}] \\ & = & \frac{\partial}{\partial y}[5\;\text{sin}(3\pi x)(4\pi \;\text{cos}(4\pi y))\text{cos}(10\pi t)] \\ & = & \frac{\partial}{\partial y}[20\pi \;\text{sin}(3\pi x)\text{cos}(4\pi y)\text{cos}(10\pi t)] \\ & = & −80{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t).\end{array}$  {eq:fs-id1167793957676}

Next, we substitute each of these into the right-hand side of [ref:fs-id1167793401357] and simplify:

$\begin{array}{rl}4({u}_{xx}+{u}_{yy}) & =4(−45{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t)+-80{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t)) \\ & =4(−125{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t)) \\ & =−500{\pi}^{2}\text{sin}(3\pi x)\text{sin}(4\pi y)\text{cos}(10\pi t) \\ & ={u}_{tt}.\end{array}$  {eq:fs-id1167793409822}

This verifies the solution.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793489568} type= 
PROBLEM:
Verify that $u(x,y,t)=2\;\text{sin}(\frac{x}{3})\text{sin}(\frac{y}{4}){e}^{−25t\text{/}16}$ is a solution to the heat equation

$$ {u}_{t}=9({u}_{xx}+{u}_{yy}). $$  {eq:fs-id1167793256001}

COMMENTARY: Hint
Calculate the partial derivatives and substitute into the right-hand side.
:::
:::
Since the solution to the two-dimensional heat equation is a function of three variables, it is not easy to create a visual representation of the solution. We can graph the solution for fixed values of *t*, which amounts to snapshots of the heat distributions at fixed times. These snapshots show how the heat is distributed over a two-dimensional surface as time progresses. The graph of the preceding solution at time $t=0$ appears in the following figure. As time progresses, the extremes level out, approaching zero as *t* approaches infinity.

> FIGURE {fig:CNX_Calc_Figure_14_03_003} src=../../media/CNX_Calc_Figure_14_03_003.jpg
> alt: A complicated curve in xyz space with many sinusoidally alternating local maxima and minima.
> caption: 

If we consider the heat equation in one dimension, then it is possible to graph the solution over time. The heat equation in one dimension becomes

${u}_{t}={c}^{2}{u}_{xx},$  {eq:fs-id1167793290959}

where ${c}^{2}$ represents the thermal diffusivity of the material in question. A solution of this differential equation can be written in the form

$$ {u}_{m}(x,t)={e}^{\text{−}{\pi}^{2}{m}^{2}{c}^{2}t}\text{sin}(m\pi x) $$  {eq:fs-id1167793929398}

where $m$ is any positive integer. A graph of this solution using $m=1$ appears in [ref:CNX_Calc_Figure_14_03_004], where the initial temperature distribution over a wire of length $1$ is given by $u(x,0)=\text{sin}\;\pi x.$ Notice that as time progresses, the wire cools off. This is seen because, from left to right, the highest temperature (which occurs in the middle of the wire) decreases and changes color from red to blue.

> FIGURE {fig:CNX_Calc_Figure_14_03_004} src=../../media/CNX_Calc_Figure_14_03_004.jpg
> alt: A curve in xtu space with a local maximum at (0.5, 0, 12). From this maximum, the values decrease with increasing t and for any value of x.
> caption: Graph of a solution of the heat equation in one dimension over time.

:::note [project] Lord Kelvin and the Age of Earth

> FIGURE {fig:CNX_Calc_Figure_14_03_SP1} src=../../media/CNX_Calc_Figure_14_03_006.jpg
> alt: This figure consists of two figures marked a and b. Figure a show Lord Kelvin, dressed well and with a beard. Figure b shows an image of the planet Earth taken from space.
> caption: (a) William Thomson (Lord Kelvin), 1824-1907, was a British physicist and electrical engineer; (b) Kelvin used the heat diffusion equation to estimate the age of Earth (credit: modification of work by NASA).

During the late 1800s, the scientists of the new field of geology were coming to the conclusion that Earth must be “millions and millions” of years old. At about the same time, Charles Darwin had published his treatise on evolution. Darwin’s view was that evolution needed many millions of years to take place, and he made a bold claim that the Weald chalk fields, where important fossils were found, were the result of $300$ million years of erosion.
At that time, eminent physicist {index:William Thomson (Lord Kelvin)} used an important partial differential equation, known as the *heat diffusion equation*, to estimate the age of Earth by determining how long it would take Earth to cool from molten rock to what we had at that time. His conclusion was a range of $20\;\text{to}\;400$ million years, but most likely about $50$ million years. For many decades, the proclamations of this irrefutable icon of science did not sit well with geologists or with Darwin.

:::note [media-2] 
Read Kelvin’s [paper](http://www.openstax.org/l/20_KelEarthAge) on estimating the age of the Earth.
:::
Kelvin made reasonable assumptions based on what was known in his time, but he also made several assumptions that turned out to be wrong. One incorrect assumption was that Earth is solid and that the cooling was therefore via conduction only, hence justifying the use of the diffusion equation. But the most serious error was a forgivable one—omission of the fact that Earth contains radioactive elements that continually supply heat beneath Earth’s mantle. The discovery of radioactivity came near the end of Kelvin’s life and he acknowledged that his calculation would have to be modified.
Kelvin used the simple one-dimensional model applied only to Earth’s outer shell, and derived the age from graphs and the roughly known temperature gradient near Earth’s surface. Let’s take a look at a more appropriate version of the diffusion equation in radial coordinates, which has the form

$$ \frac{\partial T}{\partial t}=K[\frac{{\partial}^{2}T}{{\partial}^{2}r}+\frac{2}{r}\;\frac{\partial T}{\partial r}]. $$  {eq:fs-id1167794139867}

Here, $T(r,t)$ is temperature as a function of $r$ (measured from the center of Earth) and time $t.$ $K$ is the heat conductivity—for molten rock, in this case. The standard method of solving such a partial differential equation is by separation of variables, where we express the solution as the product of functions containing each variable separately. In this case, we would write the temperature as

$T(r,t)=R(r)f(t).$  {eq:fs-id1167794207035}

1. Substitute this form into [ref:fs-id1167793263380] and, noting that $f(t)$ is constant with respect to distance $(r)$ and $R(r)$ is constant with respect to time $(t),$ show that

$\frac{1}{f}\;\frac{\partial f}{\partial t}=\frac{K}{R}[\frac{{\partial}^{2}R}{\partial {r}^{2}}+\frac{2}{r}\;\frac{\partial R}{\partial r}].$  {eq:fs-id1167793433538}

2. This equation represents the separation of variables we want. The left-hand side is only a function of $t$ and the right-hand side is only a function of $r,$ and they must be equal for all values of $r\;\text{and}\;t.$ Therefore, they both must be equal to a constant. Let’s call that constant $\text{−}{λ}^{2}.$ (The convenience of this choice is seen on substitution.) So, we have

$\frac{1}{f}\;\frac{\partial f}{\partial t}=\text{−}{λ}^{2}\;\text{and}\;\frac{K}{R}[\frac{{\partial}^{2}R}{\partial {r}^{2}}+\frac{2}{r}\;\frac{\partial R}{\partial r}]=\text{−}{λ}^{2}.$  {eq:fs-id1167794145902}

Now, we can verify through direct substitution for each equation that the solutions are $f(t)=A{e}^{\text{−}{λ}^{2}t}$ and $R(r)=B(\frac{\text{sin}\;\alpha r}{r})+C(\frac{\text{cos}\;\alpha r}{r}),$ where $\alpha =λ\text{/}\sqrt{K}.$ Note that $f(t)=A{e}^{+λ{n}^{2}t}$ is also a valid solution, so we could have chosen $+{λ}^{2}$ for our constant. Can you see why it would not be valid for this case as time increases?
3. Let’s now apply boundary conditions.

a. The temperature must be finite at the center of Earth, $r=0.$ Which of the two constants, $B$ or $C,$ must therefore be zero to keep $R$ finite at $r=0?$ (Recall that $\text{sin}(\alpha r)\text{/}r\to \alpha =$ as $r\to 0,$ but $\text{cos}(\alpha r)\text{/}r$ behaves very differently.)
b. Kelvin argued that when magma reaches Earth’s surface, it cools very rapidly. A person can often touch the surface within weeks of the flow. Therefore, the surface reached a moderate temperature very early and remained nearly constant at a surface temperature ${T}_{s}.$ For simplicity, let’s set $T=0\;\text{at}\;r={R}_{E}$ and find $\alpha$ such that this is the temperature there for all time $t.$ (Kelvin took the value to be $300\;\text{K}\approx 80\text{°}\text{F}.$ We can add this $300\;\text{K}$ constant to our solution later.) For this to be true, the sine argument must be zero at $r={R}_{E}.$ Note that $\alpha$ has an infinite series of values that satisfies this condition. Each value of $\alpha$ represents a valid solution (each with its own value for $A).$ The total or general solution is the sum of all these solutions.
c. At $t=0,$ we assume that all of Earth was at an initial hot temperature ${T}_{0}$ (Kelvin took this to be about $7000\;\text{K}.)$ The application of this boundary condition involves the more advanced application of Fourier coefficients. As noted in part b. each value of ${\alpha}_{n}$ represents a valid solution, and the general solution is a sum of all these solutions. This results in a series solution:

$T(r,t)=(\frac{{T}_{0}{R}_{\text{E}}}{\pi}){\displaystyle \underset{n}{\sum}\frac{{(−1)}^{n-1}}{n}{e}^{\text{−}λ{n}^{2}t}\frac{\text{sin}({\alpha}_{n}r)}{r},}\text{where}\;{\alpha}_{n}=n\pi \text{/}{R}_{\text{E}}.$  {eq:fs-id1167793392853}

Note how the values of ${\alpha}_{n}$ come from the boundary condition applied in part b. The term $\frac{\text{−}{1}^{n-1}}{n}$ is the constant ${A}_{n}$ for each term in the series, determined from applying the Fourier method. Letting $β=\frac{\pi}{{R}_{\text{E}}},$ examine the first few terms of this solution shown here and note how ${λ}^{2}$ in the exponential causes the higher terms to decrease quickly as time progresses:

$T(r,t)=\frac{{T}_{0}{R}_{\text{E}}}{\pi r}\left(\begin{array}{l}{e}^{\text{−}K{β}^{2}t}(\text{sin}\;βr)-\frac{1}{2}{e}^{−4K{β}^{2}t}(\text{sin}\;2βr)+\frac{1}{3}{e}^{−9K{β}^{2}t}(\text{sin}\;3βr) \\ -\frac{1}{4}{e}^{−16K{β}^{2}t}(\text{sin}\;4βr)+\frac{1}{5}{e}^{−25K{β}^{2}t}(\text{sin}\;5βr)...\end{array}\right).$  {eq:fs-id1167793507372}

Near time $t=0,$ many terms of the solution are needed for accuracy. Inserting values for the conductivity $K$ and $β=\pi \text{/}{R}_{\text{E}}$ for time approaching merely thousands of years, only the first few terms make a significant contribution. Kelvin only needed to look at the solution near Earth’s surface ([ref:CNX_Calc_Figure_14_03_SP2]) and, after a long time, determine what time best yielded the estimated temperature gradient known during his era $(1\text{°}\text{F}$ increase per $50\;\text{ft}).$ He simply chose a range of times with a gradient close to this value. In [ref:CNX_Calc_Figure_14_03_SP2], the solutions are plotted and scaled, with the $300-\text{K}$ surface temperature added. Note that the center of Earth would be relatively cool. At the time, it was thought Earth must be solid.

> FIGURE {fig:CNX_Calc_Figure_14_03_SP2} src=../../media/CNX_Calc_Figure_14_03_005.jpg
> alt: This figure consists of two figures labeled a and b. Figure a shows three curves labeled 20, 50, and 200 million years on a chart showing fraction of the earth’s radius vs. temperature (K). The highest curve is the 20 million one, then the 50 million one, and then the 200 million one, with all of them starting with a mildly decreasing slope until the slope decreases more steeply around x = 0.2 and then they all intersect at roughly (1, 315). Figure b shows a close up near (1, 315) with the x axis marked 4.0 miles below Earth’s surface; the curves all appear linear in this close up, with the slopes increasing as the value of the curve does.
> caption: Temperature versus radial distance from the center of Earth. (a) Kelvin’s results, plotted to scale. (b) A close-up of the results at a depth of $4.0\;\text{mi}$ below Earth’s surface.

**Epilog**
On May $20,1904,$ physicist {index:Ernest Rutherford} spoke at the Royal Institution to announce a revised calculation that included the contribution of radioactivity as a source of Earth’s heat. In Rutherford’s own words:
“I came into the room, which was half-dark, and presently spotted Lord Kelvin in the audience, and realised that I was in for trouble at the last part of my speech dealing with the age of the Earth, where my views conflicted with his. To my relief, Kelvin fell fast asleep, but as I came to the important point, I saw the old bird sit up, open an eye and cock a baleful glance at me.
Then a sudden inspiration came, and I said Lord Kelvin had limited the age of the Earth, *provided no new source* [*of heat*] *was discovered*. That prophetic utterance referred to what we are now considering tonight, radium! Behold! The old boy beamed upon me.”
Rutherford calculated an age for Earth of about $500$ million years. Today’s accepted value of Earth’s age is about $4.6$ billion years.
:::

## Key Concepts {section:key-concepts}
- A partial derivative is a derivative involving a function of more than one independent variable.
- To calculate a partial derivative with respect to a given variable, treat all the other variables as constants and use the usual differentiation rules.
- Higher-order partial derivatives can be calculated in the same way as higher-order derivatives.

## Key Equations {section:key-equations}

> TABLE {tab:eip-545} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Partial derivative of $f$ with respect to $x$** | $\frac{\partial f}{\partial x}=\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}$ |
| **Partial derivative of $f$ with respect to $y$** | $\frac{\partial f}{\partial y}=\lim_{k\to 0}\frac{f(x,y+k)-f(x,y)}{k}$ |

##  {section:section-exercises}
For the following exercises, calculate the partial derivative using the limit definitions only.

:::exercise {fs-id1167794051651} type= 
PROBLEM:
$\frac{\partial z}{\partial x}$ for $z={x}^{2}-3xy+{y}^{2}$
:::

:::exercise {fs-id1167793504331} type= 
PROBLEM:
$\frac{\partial z}{\partial y}$ for $z={x}^{2}-3xy+{y}^{2}$
SOLUTION:
$\frac{\partial z}{\partial y}=−3x+2y$
:::
For the following exercises, calculate the sign of the partial derivative using the graph of the surface.

> IMAGE {img:fs-id1167794292195} src=../../media/CNX_Calc_Figure_14_03_201.jpg
> alt: A partial paraboloid with vertex at the origin and pointing up.

:::exercise {fs-id1167793515295} type= 
PROBLEM:
${f}_{x}(1,1)$
:::

:::exercise {fs-id1167793515331} type= 
PROBLEM:
${f}_{x}(−1,1)$
SOLUTION:
The sign is negative.
:::

:::exercise {fs-id1167793941248} type= 
PROBLEM:
${f}_{y}(1,1)$
:::

:::exercise {fs-id1167793941283} type= 
PROBLEM:
${f}_{x}(0,0)$
SOLUTION:
The partial derivative is zero at the origin.
:::
For the following exercises, calculate the partial derivatives.

:::exercise {fs-id1167793631558} type= 
PROBLEM:
$\frac{\partial z}{\partial x}$ for $z=\text{sin}(3x)\text{cos}(3y)$
:::

:::exercise {fs-id1167793409781} type= 
PROBLEM:
$\frac{\partial z}{\partial y}$ for $z=\text{sin}(3x)\text{cos}(3y)$
SOLUTION:
$\frac{\partial z}{\partial y}=−3\;\text{sin}(3x)\text{sin}(3y)$
:::

:::exercise {fs-id1167793609383} type= 
PROBLEM:
$\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ for $z={x}^{8}{e}^{3y}$
:::

:::exercise {fs-id1167793427472} type= 
PROBLEM:
$\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ for $z=\text{ln}({x}^{6}+{y}^{4})$
SOLUTION:
$\frac{\partial z}{\partial x}=\frac{6{x}^{5}}{{x}^{6}+{y}^{4}};\frac{\partial z}{\partial y}=\frac{4{y}^{3}}{{x}^{6}+{y}^{4}}$
:::

:::exercise {fs-id1167793423588} type= 
PROBLEM:
Find ${f}_{y}(x,y)$ for $f(x,y)={e}^{xy}\text{cos}(x)\text{sin}(y).$
:::

:::exercise {fs-id1167793233852} type= 
PROBLEM:
Let $z={e}^{xy}.$ Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}.$
SOLUTION:
$\frac{\partial z}{\partial x}=y{e}^{xy};\frac{\partial z}{\partial y}=x{e}^{xy}$
:::

:::exercise {fs-id1167793938869} type= 
PROBLEM:
Let $z=\text{ln}(\frac{x}{y}).$ Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}.$
:::

:::exercise {fs-id1167793627865} type= 
PROBLEM:
Let $z=\text{tan}(2x-y).$ Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}.$
SOLUTION:
$\frac{\partial z}{\partial x}=2\;{\text{sec}}^{2}(2x-y),\frac{\partial z}{\partial y}=\text{−}{\text{sec}}^{2}(2x-y)$
:::

:::exercise {fs-id1167793418345} type= 
PROBLEM:
Let $z=\text{sinh}(2x+3y).$ Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}.$
:::

:::exercise {fs-id1167794292460} type= 
PROBLEM:
Let $f(x,y)=\text{arctan}(\frac{y}{x}).$ Evaluate ${f}_{x}(2,−2)$ and ${f}_{y}(2,−2).$
SOLUTION:
${f}_{x}(2,−2)=\frac{1}{4}={f}_{y}(2,−2)$
:::

:::exercise {fs-id1167794292074} type= 
PROBLEM:
Let $f(x,y)=\frac{xy}{x-y}.$ Find ${f}_{x}(2,−2)$ and ${f}_{y}(2,−2).$
:::

:::exercise {fs-id1167793409875} type= 
PROBLEM:
Find $\frac{\partial z}{\partial x}$ at $(0,1)$ for $z={e}^{\text{−}x}\text{cos}(y).$ Evaluate the partial derivatives at point $P(0,1).$
SOLUTION:
$\frac{\partial z}{\partial x}=\text{−}\text{cos}(1)$
:::

:::exercise {fs-id1167793502408} type= 
PROBLEM:
Given $f(x,y,z)={x}^{3}y{z}^{2},$ find $\frac{{\partial}^{2}f}{\partial x\partial y}$ and ${f}_{z}(1,1,1).$
:::

:::exercise {fs-id1167793618212} type= 
PROBLEM:
Given $f(x,y,z)=2\;\text{sin}(x+y),$ find ${f}_{x}(0,\frac{\pi}{2},−4),$ ${f}_{y}(0,\frac{\pi}{2},−4),$ and ${f}_{z}(0,\frac{\pi}{2},−4).$
SOLUTION:
$\begin{array}{lll}{f}_{x}=0, & {f}_{y}=0, & {f}_{z}=0\end{array}$
:::

:::exercise {fs-id1167794051186} type= 
PROBLEM:
The area of a parallelogram with adjacent side lengths that are $a\;\text{and}\;b,$ and in which the angle between these two sides is $\theta ,$ is given by the function $A(a,b,\theta )=ba\;\text{sin}(\theta ).$ Find the rate of change of the area of the parallelogram with respect to the following:
a. Side *a*
b. Side *b*
c. $\text{Angle}\;\theta$
:::

:::exercise {fs-id1167793925055} type= 
PROBLEM:
Express the volume of a right circular cylinder as a function of two variables:
a. its radius $r$ and its height $h.$
b. Show that the rate of change of the volume of the cylinder with respect to its radius is the product of its circumference multiplied by its height.
c. Show that the rate of change of the volume of the cylinder with respect to its height is equal to the area of the circular base.
SOLUTION:
a. $V(r,h)=\pi {r}^{2}h$ b. $\frac{\partial V}{\partial r}=2\pi rh$ c. $\frac{\partial V}{\partial h}=\pi {r}^{2}$
:::

:::exercise {fs-id1167793501818} type= 
PROBLEM:
Calculate $\frac{\partial w}{\partial z}$ for $w=z\;\text{sin}(x{y}^{2}+2z).$
:::
Find the indicated higher-order partial derivatives.

:::exercise {fs-id1167793631830} type= 
PROBLEM:
${f}_{xy}$ for $z=\text{ln}(x-y)$
SOLUTION:
${f}_{xy}=\frac{1}{{(x-y)}^{2}}$
:::

:::exercise {fs-id1167793618142} type= 
PROBLEM:
${f}_{yx}$ for $z=\text{ln}(x-y)$
:::

:::exercise {fs-id1167793958656} type= 
PROBLEM:
Let $z={x}^{2}+3xy+2{y}^{2}.$ Find $\frac{{\partial}^{2}z}{\partial {x}^{2}}$ and $\frac{{\partial}^{2}z}{\partial {y}^{2}}.$
SOLUTION:
$\frac{{\partial}^{2}z}{\partial {x}^{2}}=2,\frac{{\partial}^{2}z}{\partial {y}^{2}}=4$
:::

:::exercise {fs-id1167793640066} type= 
PROBLEM:
Given $z={e}^{x}\text{tan}\;y,$ find $\frac{{\partial}^{2}z}{\partial x\partial y}$ and $\frac{{\partial}^{2}z}{\partial y\partial x}.$
:::

:::exercise {fs-id1167793589587} type= 
PROBLEM:
Given $f(x,y,z)=xyz,$ find ${f}_{xyy},{f}_{yxy},$ and ${f}_{yyx}.$
SOLUTION:
${f}_{xyy}={f}_{yxy}={f}_{yyx}=0$
:::

:::exercise {fs-id1167793378473} type= 
PROBLEM:
Given $f(x,y,z)={e}^{−2x}\text{sin}({z}^{2}y),$ show that ${f}_{xyy}={f}_{yxy}.$
:::

:::exercise {fs-id1167793499067} type= 
PROBLEM:
Show that $z=\frac{1}{2}({e}^{y}-{e}^{\text{−}y})\text{sin}\;x$ is a solution of the differential equation $\frac{{\partial}^{2}z}{\partial {x}^{2}}+\frac{{\partial}^{2}z}{\partial {y}^{2}}=0.$
SOLUTION:
$\begin{array}{rll}\frac{{d}^{2}z}{d{x}^{2}} & = & -\frac{1}{2}({e}^{y}-{e}^{\text{−}y})\text{sin}\;x \\ \frac{{d}^{2}z}{d{y}^{2}} & = & \frac{1}{2}({e}^{y}-{e}^{\text{−}y})\text{sin}\;x \\ \frac{{d}^{2}z}{d{x}^{2}}+\frac{{d}^{2}z}{d{y}^{2}} & = & 0\end{array}$
:::

:::exercise {fs-id1167794050714} type= 
PROBLEM:
Find ${f}_{xx}(x,y)$ for $f(x,y)=\frac{4{x}^{2}}{y}+\frac{{y}^{2}}{2x}.$
:::

:::exercise {fs-id1167794212677} type= 
PROBLEM:
Let $f(x,y,z)={x}^{2}{y}^{3}z-3x{y}^{2}{z}^{3}+5{x}^{2}z-{y}^{3}z.$ Find ${f}_{xyz}.$
SOLUTION:
${f}_{xyz}=6{y}^{2}x-18y{z}^{2}$
:::

:::exercise {fs-id1167793514910} type= 
PROBLEM:
Let $F(x,y,z)={x}^{3}y{z}^{2}-2{x}^{2}yz+3xz-2{y}^{3}z.$ Find ${F}_{xyz}.$
:::

:::exercise {fs-id1167793423260} type= 
PROBLEM:
Given $f(x,y)={x}^{2}+x-3xy+{y}^{3}-5,$ find all points at which ${f}_{x}={f}_{y}=0$ simultaneously.
SOLUTION:
$(\frac{1}{4},\frac{1}{2}),(1,1)$
:::

:::exercise {fs-id1167793502440} type= 
PROBLEM:
Given $f(x,y)=2{x}^{2}+2xy+{y}^{2}+2x-3,$ find all points at which $\frac{\partial f}{\partial x}=0$ and $\frac{\partial f}{\partial y}=0$ simultaneously.
:::

:::exercise {fs-id1167793929685} type= 
PROBLEM:
Given $f(x,y)={y}^{3}-3y{x}^{2}-3{y}^{2}-3{x}^{2}+1,$ find all points on $f$ at which ${f}_{x}={f}_{y}=0$ simultaneously.
SOLUTION:
$(0,0),(0,2),(\sqrt{3},−1),(\text{−}\sqrt{3},−1)$
:::

:::exercise {fs-id1167793960064} type= 
PROBLEM:
Given $f(x,y)=15{x}^{3}-3xy+15{y}^{3},$ find all points at which ${f}_{x}(x,y)={f}_{y}(x,y)=0$ simultaneously.
:::

:::exercise {fs-id1167793929166} type= 
PROBLEM:
Show that $z={e}^{x}\text{sin}\;y$ satisfies the equation $\frac{{\partial}^{2}z}{\partial {x}^{2}}+\frac{{\partial}^{2}z}{\partial {y}^{2}}=0.$
SOLUTION:
$\frac{{\partial}^{2}z}{\partial {x}^{2}}+\frac{{\partial}^{2}z}{\partial {y}^{2}}={e}^{x}\text{sin}(y)-{e}^{x}\text{sin}\;y=0$
:::

:::exercise {fs-id1167793401330} type= 
PROBLEM:
Show that $f(x,y)=\text{ln}({x}^{2}+{y}^{2})$ solves Laplace’s equation $\frac{{\partial}^{2}z}{\partial {x}^{2}}+\frac{{\partial}^{2}z}{\partial {y}^{2}}=0.$
:::

:::exercise {fs-id1167793397561} type= 
PROBLEM:
Show that $z={e}^{\text{−}t}\text{cos}(\frac{x}{c})$ satisfies the heat equation $\frac{\partial z}{\partial t}={c}^{2}(\frac{{\partial}^{2}z}{\partial {x}^{2}})$
SOLUTION:
${c}^{2}\frac{{\partial}^{2}z}{\partial {x}^{2}}={e}^{\text{−}t}\text{cos}(\frac{x}{c})$
:::

:::exercise {fs-id1167793547358} type= 
PROBLEM:
Find $\lim_{\text{Δ}x\to 0}\frac{f(x+\text{Δ}x\text{,}y)-f(x,y)}{\text{Δ}x}$ for $f(x,y)=−7x-2xy+7y.$
:::

:::exercise {fs-id1167793245581} type= 
PROBLEM:
Find $\lim_{\text{Δ}y\to 0}\frac{f(x,y+\text{Δ}y)-f(x,y)}{\text{Δ}y}$ for $f(x,y)=−7x-2xy+7y.$
SOLUTION:
$\frac{\partial f}{\partial y}=−2x+7$
:::

:::exercise {fs-id1167793637829} type= 
PROBLEM:
Find $\lim_{\text{Δ}x\to 0}\frac{\text{Δ}f}{\text{Δ}x}=\lim_{\text{Δ}x\to 0}\frac{f(x+\text{Δ}x,y)-f(x,y)}{\text{Δ}x}$ for $f(x,y)={x}^{2}{y}^{2}+xy+y.$
:::

:::exercise {fs-id1167793829194} type= 
PROBLEM:
Find $\lim_{\text{Δ}x\to 0}\frac{\text{Δ}f}{\text{Δ}x}=\lim_{\text{Δ}x\to 0}\frac{f(x+\text{Δ}x,y)-f(x,y)}{\text{Δ}x}$ for $f(x,y)=\text{sin}(xy).$
SOLUTION:
$\frac{\partial f}{\partial x}=y\;\text{cos}\;xy$
:::

:::exercise {fs-id1167794155338} type= 
PROBLEM:
The function $P(T,V)=\frac{nRT}{V}$ gives the pressure at a point in a gas as a function of temperature $T$ and volume $V.$ The letters $n\;\text{and}\;R$ are constants. Find $\frac{\partial P}{\partial V}$ and $\frac{\partial P}{\partial T},$ and explain what these quantities represent.
:::

:::exercise {fs-id1167793571237} type= 
PROBLEM:
The equation for heat flow in the $xy\text{-plane}$ is $\frac{\partial f}{\partial t}=\frac{{\partial}^{2}f}{\partial {x}^{2}}+\frac{{\partial}^{2}f}{\partial {y}^{2}}.$ Show that $f(x,y,t)={e}^{−2t}\text{sin}\;x\;\text{sin}\;y$ is a solution.
:::

:::exercise {fs-id1167793395488} type= 
PROBLEM:
The basic wave equation is ${f}_{tt}={f}_{xx}.$ Verify that $f(x,t)=\text{sin}(x+t)$ and $f(x,t)=\text{sin}(x-t)$ are solutions.
:::

:::exercise {fs-id1167793943774} type= 
PROBLEM:
The law of cosines can be thought of as a function of three variables. Let $x,y,$ and $\theta$ be two sides of any triangle where the angle $\theta$ is the included angle between the two sides. Then, $F(x,y,\theta )={x}^{2}+{y}^{2}-2xy\;\text{cos}\;\theta$ gives the square of the third side of the triangle. Find $\frac{\partial F}{\partial \theta}$ and $\frac{\partial F}{\partial x}$ when $x=2,y=3,$ and $\theta =\frac{\pi}{6}.$
SOLUTION:
$\frac{\partial F}{\partial \theta}=6,\frac{\partial F}{\partial x}=4-3\sqrt{3}$
:::

:::exercise {fs-id1167793425926} type= 
PROBLEM:
Suppose the sides of a rectangle are changing with respect to time. The first side is changing at a rate of $2$ in./sec whereas the second side is changing at the rate of $4$ in/sec. How fast is the diagonal of the rectangle changing when the first side measures $16$ in. and the second side measures $20$ in.? (Round answer to three decimal places.)
:::

:::exercise {fs-id1167793638408} type= 
PROBLEM:
A {index:Cobb-Douglas production function} is $f(x,y)=200{x}^{0.7}{y}^{0.3},$ where $x\;\text{and}\;y$ represent the amount of labor and capital available. Let $x=500$ and $y=1000.$ Find $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ at these values, which represent the marginal productivity of labor and capital, respectively.
SOLUTION:
$\frac{\partial f}{\partial x}$ at $(500,1000)=172.36,$ $\frac{\partial f}{\partial y}$ at $(500,1000)=36.93$
:::

:::exercise {fs-id1167793925152} type= 
PROBLEM:
The apparent temperature index is a measure of how the temperature feels, and it is based on two variables: $h,$ which is relative humidity, and $t,$ which is the air temperature.
$A=0.885t-22.4h+1.20th-0.544.$ Find $\frac{\partial A}{\partial t}$ and $\frac{\partial A}{\partial h}$ when $t=20\text{°}\text{F}$ and $h=0.90.$
:::

## Glossary
- {def} **higher-order partial derivatives**: second-order or higher partial derivatives, regardless of whether they are mixed partial derivatives
- {def} **mixed partial derivatives**: second-order or higher partial derivatives, in which at least two of the differentiations are with respect to different variables
- {def} **partial derivative**: a derivative of a function of more than one independent variable in which all the variables but one are held constant
- {def} **partial differential equation**: an equation that involves an unknown function of more than one independent variable and one or more of its partial derivatives

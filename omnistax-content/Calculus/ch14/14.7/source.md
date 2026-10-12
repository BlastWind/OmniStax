# Maxima/Minima Problems

## Learning Objectives {section:learning-objectives}
- Use partial derivatives to locate critical points for a function of two variables.
- Apply a second derivative test to identify a critical point as a local maximum, local minimum, or saddle point for a function of two variables.
- Examine critical points and boundary points to find absolute maximum and minimum values for a function of two variables.

One of the most useful applications for derivatives of a function of one variable is the determination of maximum and/or minimum values. This application is also important for functions of two or more variables, but as we have seen in earlier sections of this chapter, the introduction of more independent variables leads to more possible outcomes for the calculations. The main ideas of finding critical points and using derivative tests are still valid, but new wrinkles appear when assessing the results.

## Critical Points
For functions of a single variable, we defined critical points as the values of the function when the derivative equals zero or does not exist. For functions of two or more variables, the concept is essentially the same, except for the fact that we are now working with partial derivatives.

:::note [definition] Definition
Let $z=f(x,y)$ be a function of two variables that is defined on an open set containing the point $({x}_{0},{y}_{0}).$ The point $({x}_{0},{y}_{0})$ is called a {term:critical point of a function of two variables} $f$ if one of the two following conditions holds:
1. ${f}_{x}({x}_{0},{y}_{0})={f}_{y}({x}_{0},{y}_{0})=0$
2. Either ${f}_{x}({x}_{0},{y}_{0})\;\text{or}\;{f}_{y}({x}_{0},{y}_{0})$ does not exist.
:::

:::example {ex:fs-id1167793263462} Finding Critical Points

:::exercise {fs-id1167793789828} type= 
PROBLEM:
Find the critical points of each of the following functions:
a. $f(x,y)=\sqrt{4{y}^{2}-9{x}^{2}+24y+36x+36}$
b. $g(x,y)={x}^{2}+2xy-4{y}^{2}+4x-6y+4$
SOLUTION:
a. First, we calculate ${f}_{x}(x,y)\;\text{and}\;{f}_{y}(x,y)\text{:}$

$\begin{array}{rll}{f}_{x}(x,y) & = & \frac{1}{2}(−18x+36){(4{y}^{2}-9{x}^{2}+24y+36x+36)}^{−1\text{/}2} \\ & = & \frac{−9x+18}{\sqrt{4{y}^{2}-9{x}^{2}+24y+36x+36}} \\ {f}_{y}(x,y) & = & \frac{1}{2}(8y+24){(4{y}^{2}-9{x}^{2}+24y+36x+36)}^{−1\text{/}2} \\ & = & \frac{4y+12}{\sqrt{4{y}^{2}-9{x}^{2}+24y+36x+36}}.\end{array}$  {eq:fs-id1167794024901}

Next, we set each of these expressions equal to zero:

$\begin{array}{rll}\frac{−9x+18}{\sqrt{4{y}^{2}-9{x}^{2}+24y+36x+36}} & = & 0 \\ \frac{4y+12}{\sqrt{4{y}^{2}-9{x}^{2}+24y+36x+36}} & = & 0.\end{array}$  {eq:fs-id1167794100170}

Then, multiply each equation by its common denominator:

$\begin{array}{rll}-9x+18 & = & 0 \\ 4y+12 & = & 0.\end{array}$  {eq:fs-id1167793370058}

Therefore, $x=2$ and $y=−3,$ so $(2,−3)$ is a critical point of $f.$

We must also check for the possibility that the denominator of each partial derivative can equal zero, thus causing the partial derivative not to exist. Since the denominator is the same in each partial derivative, we need only do this once:

$4{y}^{2}-9{x}^{2}+24y+36x+36=0.$  {eq:fs-id1167793949583}

This equation represents a hyperbola. We should also note that the domain of $f$ consists of points satisfying the inequality

$4{y}^{2}-9{x}^{2}+24y+36x+36\ge 0.$  {eq:fs-id1167793953658}

Therefore, any points on the hyperbola are not only critical points, they are also on the boundary of the domain. To put the hyperbola in standard form, we use the method of completing the square:

$\begin{array}{rll}4{y}^{2}-9{x}^{2}+24y+36x+36 & = & 0 \\ 4{y}^{2}-9{x}^{2}+24y+36x & = & −36 \\ 4{y}^{2}+24y-9{x}^{2}+36x & = & −36 \\ 4({y}^{2}+6y)-9({x}^{2}-4x) & = & −36 \\ 4({y}^{2}+6y+9)-9({x}^{2}-4x+4) & = & −36+36-36 \\ 4{(y+3)}^{2}-9{(x-2)}^{2} & = & −36.\end{array}$  {eq:fs-id1167794050310}

Dividing both sides by $−36$ puts the equation in standard form:

$\begin{array}{rll}\frac{4{(y+3)}^{2}}{−36}-\frac{9{(x-2)}^{2}}{−36} & = & 1 \\ \frac{{(x-2)}^{2}}{4}-\frac{{(y+3)}^{2}}{9} & = & 1.\end{array}$  {eq:fs-id1167794173595}

Notice that point $(2,−3)$ is the center of the hyperbola.
b. First, we calculate ${g}_{x}(x,y)\;\text{and}\;{g}_{y}(x,y)\text{:}$

$\begin{array}{rll}{g}_{x}(x,y) & = & 2x+2y+4 \\ {g}_{y}(x,y) & = & 2x-8y-6.\end{array}$  {eq:fs-id1167793970008}

Next, we set each of these expressions equal to zero, which gives a system of equations in $x\;\text{and}\;y\text{:}$

$\begin{array}{rll}2x+2y+4 & = & 0 \\ 2x-8y-6 & = & 0.\end{array}$  {eq:fs-id1167793997178}

Subtracting the second equation from the first gives $10y+10=0,\;\text{so}\;y=−1.$ Substituting this into the first equation gives $2x+2(−1)+4=0,$ so $x=−1.$ Therefore $(−1,−1)$ is a critical point of $g$ ([ref:CNX_Calc_Figure_14_07_006]). There are no points in ${\mathbb{R}}^{2}$ that make either partial derivative not exist.

> FIGURE {fig:CNX_Calc_Figure_14_07_006} src=../../media/CNX_Calc_Figure_14_07_006.jpg
> alt: The function g(x, y) = x2 + 2xy – 4y2 + 4x – 6y + 4 is shown with critical point (–1, –1, 5). The critical point is located where the derivative in the x and y directions are both zero.
> caption: The function $g(x,y)$ has a critical point at $(−1,−1,5).$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793944014} type= 
PROBLEM:
Find the critical point of the function $f(x,y)={x}^{3}+2xy-2x-4y.$
SOLUTION:
$(2,−5)$
COMMENTARY: Hint
Calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then set them equal to zero.
:::
:::
The main purpose for determining critical points is to locate relative maxima and minima, as in single-variable calculus. When working with a function of one variable, the definition of a local extremum involves finding an interval around the critical point such that the function value is either greater than or less than all the other function values in that interval. When working with a function of two or more variables, we work with an open disk around the point.

:::note [definition] Definition
Let $z=f(x,y)$ be a function of two variables that is defined and continuous on an open set containing the point $({x}_{0},{y}_{0}).$ Then *f* has a *local maximum* at $({x}_{0},{y}_{0})$ if

$f({x}_{0},{y}_{0})\ge f(x,y)$  {eq:fs-id1167794099281}

for all points $(x,y)$ within some disk centered at $({x}_{0},{y}_{0}).$ The number $f({x}_{0},{y}_{0})$ is called a *local maximum value*. If the preceding inequality holds for every point $(x,y)$ in the domain of $f,$ then $f$ has a *global maximum* (also called an *absolute maximum*) at $({x}_{0},{y}_{0}).$
The function $f$ has a *local minimum* at $({x}_{0},{y}_{0})$ if

$f({x}_{0},{y}_{0})\le f(x,y)$  {eq:fs-id1167794200182}

for all points $(x,y)$ within some disk centered at $({x}_{0},{y}_{0}).$ The number $f({x}_{0},{y}_{0})$ is called a *local minimum value*. If the preceding inequality holds for every point $(x,y)$ in the domain of $f,$ then $f$ has a *global minimum* (also called an *absolute minimum*) at $({x}_{0},{y}_{0}).$
If $f({x}_{0},{y}_{0})$ is either a local maximum or local minimum value, then it is called a {index:*local extremum*} (see the following figure).
:::

> FIGURE {fig:CNX_Calc_Figure_14_07_001} src=../../media/CNX_Calc_Figure_14_07_001.jpg
> alt: The function z = the square root of (16 – x2 – y2) is shown, which is the upper hemisphere of radius 4 with center at the origin. In the xy plane, the circle with radius 4 and center at the origin is highlighted; it has equation x2 + y2 = 16.
> caption: The graph of $z=\sqrt{16-{x}^{2}-{y}^{2}}$ has a maximum value when $(x,y)=(0,0).$ It attains its minimum value at the boundary of its domain, which is the circle ${x}^{2}+{y}^{2}=16.$

In [Maxima and Minima](module:m53611), we showed that extrema of functions of one variable occur at critical points. The same is true for functions of more than one variable, as stated in the following theorem.

:::note [theorem] Fermat’s Theorem for Functions of Two Variables
Let $z=f(x,y)$ be a function of two variables that is defined and continuous on an open set containing the point $({x}_{0},{y}_{0}).$ Suppose ${f}_{x}$ and ${f}_{y}$ each exists at $({x}_{0},{y}_{0}).$ If $f$ has a local extremum at $({x}_{0},{y}_{0}),$ then $({x}_{0},{y}_{0})$ is a critical point of $f.$
:::

## Second Derivative Test
Consider the function $f(x)={x}^{3}.$ This function has a critical point at $x=0,$ since $f'(0)=3{(0)}^{2}=0.$ However, $f$ does not have an extreme value at $x=0.$ Therefore, the existence of a critical value at $x={x}_{0}$ does not guarantee a local extremum at $x={x}_{0}.$ The same is true for a function of two or more variables. One way this can happen is at a {term:saddle point}. An example of a saddle point appears in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_002} src=../../media/CNX_Calc_Figure_14_07_002.jpg
> alt: The function z = x2 – y2 is shown, which is roughly saddle looking, with the function achieving maxima along the x and y axes.
> caption: Graph of the function $z={x}^{2}-{y}^{2}.$ This graph has a saddle point at the origin.

In this graph, the origin is a saddle point. This is because the first partial derivatives of $f(x,y)={x}^{2}-{y}^{2}$ are both equal to zero at this point, but it is neither a maximum nor a minimum for the function. Furthermore the vertical trace corresponding to $y=0$ is $z={x}^{2}$ (a parabola opening upward), but the vertical trace corresponding to $x=0$ is $z=\text{−}{y}^{2}$ (a parabola opening downward). Therefore, it is both a global maximum for one trace and a global minimum for another.

:::note [definition] Definition
Given the function $z=f(x,y),$ the point $({x}_{0},{y}_{0},f({x}_{0},{y}_{0}))$ is a saddle point if both ${f}_{x}({x}_{0},{y}_{0})=0$ and ${f}_{y}({x}_{0},{y}_{0})=0,$ but $f$ does not have a local extremum at $({x}_{0},{y}_{0}).$
:::
The second derivative test for a function of one variable provides a method for determining whether an extremum occurs at a critical point of a function. When extending this result to a function of two variables, an issue arises related to the fact that there are, in fact, four different second-order partial derivatives, although equality of mixed partials reduces this to three. The second derivative test for a function of two variables, stated in the following theorem, uses a {term:discriminant} $D$ that replaces ${f}^{''}({x}_{0})$ in the second derivative test for a function of one variable.

:::note [theorem] Second Derivative Test
Let $z=f(x,y)$ be a function of two variables for which the first- and second-order partial derivatives are continuous on some disk containing the point $({x}_{0},{y}_{0}).$ Suppose ${f}_{x}({x}_{0},{y}_{0})=0$ and ${f}_{y}({x}_{0},{y}_{0})=0.$ Define the quantity

$$ D={f}_{xx}({x}_{0},{y}_{0}){f}_{yy}({x}_{0},{y}_{0})-{({f}_{xy}({x}_{0},{y}_{0}))}^{2}. $$  {eq:fs-id1167793628274}

1. If $D>0$ and ${f}_{xx}({x}_{0},{y}_{0})>0,$ then $f$ has a local minimum at $({x}_{0},{y}_{0}).$
2. If $D>0$ and ${f}_{xx}({x}_{0},{y}_{0})<0,$ then $f$ has a local maximum at $({x}_{0},{y}_{0}).$
3. If $D<0,$ then $f$ has a saddle point at $({x}_{0},{y}_{0}).$
4. If $D=0,$ then the test is inconclusive.
See [ref:CNX_Calc_Figure_14_07_007].
:::

> FIGURE {fig:CNX_Calc_Figure_14_07_007} src=../../media/CNX_Calc_Figure_14_07_007.jpg
> alt: This figure consists of three figures labeled a, b, and c. Figure a has two bulbous mounds pointing down, and the two extrema are listed as the local minima. Figure b has two bulbous mounds pointed up, and the two extrema are listed as the local maxima. Figure c is shaped like a saddle, and in the middle of the saddle, a point is marked as the saddle point.
> caption: The second derivative test can often determine whether a function of two variables has a local minima (a), a local maxima (b), or a saddle point (c).

To apply the second derivative test, it is necessary that we first find the critical points of the function. There are several steps involved in the entire procedure, which are outlined in a problem-solving strategy.

:::note [problem-solving] Using the Second Derivative Test for Functions of Two Variables
Let $z=f(x,y)$ be a function of two variables for which the first- and second-order partial derivatives are continuous on some disk containing the point $({x}_{0},{y}_{0}).$ To apply the second derivative test to find local extrema, use the following steps:
1. Determine the critical points $({x}_{0},{y}_{0})$ of the function $f$ where ${f}_{x}({x}_{0},{y}_{0})={f}_{y}({x}_{0},{y}_{0})=0.$ Discard any points where at least one of the partial derivatives does not exist.
2. Calculate the discriminant $D={f}_{xx}({x}_{0},{y}_{0}){f}_{yy}({x}_{0},{y}_{0})-{({f}_{xy}({x}_{0},{y}_{0}))}^{2}$ for each critical point of $f.$
3. Apply [ref:fs-id1167793873509] to determine whether each critical point is a local maximum, local minimum, or saddle point, or whether the theorem is inconclusive.
:::

:::example {ex:fs-id1167793524729} Using the Second Derivative Test

:::exercise {fs-id1167793524731} type= 
PROBLEM:
Find the critical points for each of the following functions, and use the second derivative test to find the local extrema:
a. $f(x,y)=4{x}^{2}+9{y}^{2}+8x-36y+24$
b. $g(x,y)=\frac{1}{3}{x}^{3}+{y}^{2}+2xy-6x-3y+4$
SOLUTION:
a. Step $1$ of the problem-solving strategy involves finding the critical points of $f.$ To do this, we first calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then set each of them equal to zero:

$\begin{array}{rll}{f}_{x}(x,y) & = & 8x+8 \\ {f}_{y}(x,y) & = & 18y-36.\end{array}$  {eq:fs-id1167793964981}

Setting them equal to zero yields the system of equations

$\begin{array}{rll}8x+8 & = & 0 \\ 18y-36 & = & 0.\end{array}$  {eq:fs-id1167793409748}

The solution to this system is $x=−1$ and $y=2.$ Therefore $(−1,2)$ is a critical point of $f.$

Step 2 of the problem-solving strategy involves calculating $D.$ To do this, we first calculate the second partial derivatives of $f\text{:}$

$\begin{array}{rll}{f}_{xx}(x,y) & = & 8 \\ {f}_{xy}(x,y) & = & 0 \\ {f}_{yy}(x,y) & = & 18.\end{array}$  {eq:fs-id1167793918134}

Therefore, $D={f}_{xx}(−1,2){f}_{yy}(−1,2)-{({f}_{xy}(−1,2))}^{2}=(8)(18)-{(0)}^{2}=144.$

Step 3 states to check the [ref:fs-id1167793617977]Second Derivative Test for Functions of Two Variables.. Since $D>0$ and ${f}_{xx}(−1,2)>0,$ this corresponds to case 1. Therefore, $f$ has a local minimum at $(−1,2)$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_008} src=../../media/CNX_Calc_Figure_14_07_008.jpg
> alt: The function f(x, y) = 4x2 + 9y2 + 8x – 36y + 24 is shown with local minimum at (–1, 2, –16). The shape is a plane curving up on both ends parallel to the y axis.
> caption: The function $f(x,y)$ has a local minimum at $(−1,2,−16).$

b. For step 1, we first calculate ${g}_{x}(x,y)$ and ${g}_{y}(x,y),$ then set each of them equal to zero:

$\begin{array}{rll}{g}_{x}(x,y) & = & {x}^{2}+2y-6 \\ {g}_{y}(x,y) & = & 2y+2x-3.\end{array}$  {eq:fs-id1167794043476}

Setting them equal to zero yields the system of equations

$\begin{array}{rll}{x}^{2}+2y-6 & = & 0 \\ 2y+2x-3 & = & 0.\end{array}$  {eq:fs-id1167793260228}

To solve this system, first solve the second equation for *y.* This gives $y=\frac{3-2x}{2}.$ Substituting this into the first equation gives

$\begin{array}{rll}{x}^{2}+3-2x-6 & = & 0 \\ {x}^{2}-2x-3 & = & 0 \\ (x-3)(x+1) & = & 0.\end{array}$  {eq:fs-id1167793939542}

Therefore, $x=−1$ or $x=3.$ Substituting these values into the equation $y=\frac{3-2x}{2}$ yields the critical points $(−1,\frac{5}{2})$ and $(3,-\frac{3}{2}).$
Step 2 involves calculating the second partial derivatives of $g\text{:}$

$\begin{array}{rll}{g}_{xx}(x,y) & = & 2x \\ {g}_{xy}(x,y) & = & 2 \\ {g}_{yy}(x,y) & = & 2.\end{array}$  {eq:fs-id1167793378525}

Then, we find a general formula for $D\text{:}$

$\begin{array}{rl}D & ={g}_{xx}({x}_{0},{y}_{0}){g}_{yy}({x}_{0},{y}_{0})-{({g}_{xy}({x}_{0},{y}_{0}))}^{2} \\ & =(2{x}_{0})(2)-{2}^{2} \\ & =4{x}_{0}-4.\end{array}$  {eq:fs-id1167794155290}

Next, we substitute each critical point into this formula:

$\begin{array}{rll}D(−1,\frac{5}{2}) & = & (2(−1))(2)-{(2)}^{2}=−4-4=−8 \\ D(3,-\frac{3}{2}) & = & (2(3))(2)-{(2)}^{2}=12-4=8.\end{array}$  {eq:fs-id1167793419023}

In step 3, we note that, applying the [ref:fs-id1167793617977]Second Derivative Test for Functions of Two Variables. to point $(−1,\frac{5}{2})$ leads to case $3,$ which means that $(−1,\frac{5}{2})$ is a saddle point. Applying the theorem to point $(3,-\frac{3}{2})$ leads to case 1, which means that $(3,-\frac{3}{2})$ corresponds to a local minimum as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_009} src=../../media/CNX_Calc_Figure_14_07_009.jpg
> alt: The function f(x, y) = (1/3)x3 + y2 + + 2xy – 6x – 3y + 4 is shown with local minimum at (3, –3/2, –29/4) and saddle point at (−1, 5/2, 41/12). The shape is a plane curving up on the corners near (4, 3) and (−2, −2).
> caption: The function $g(x,y)$ has a local minimum and a saddle point.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793294164} type= 
PROBLEM:
Use the second derivative to find the local extrema of the function

$f(x,y)={x}^{3}+2xy-6x-4{y}^{2}.$  {eq:fs-id1167793294171}

SOLUTION:
$(\frac{4}{3},\frac{1}{3})$ is a saddle point, $(-\frac{3}{2},-\frac{3}{8})$ is a local maximum.
COMMENTARY: Hint
Follow the problem-solving strategy for applying the second derivative test.
:::
:::

## Absolute Maxima and Minima
When finding global extrema of functions of one variable on a closed interval, we start by checking the critical values over that interval and then evaluate the function at the endpoints of the interval. When working with a function of two variables, the closed interval is replaced by a closed, bounded set. A set is *bounded* if all the points in that set can be contained within a ball (or disk) of finite radius. First, we need to find the critical points inside the set and calculate the corresponding critical values. Then, it is necessary to find the maximum and minimum value of the function on the boundary of the set. When we have all these values, the largest function value corresponds to the global maximum and the smallest function value corresponds to the absolute minimum. First, however, we need to be assured that such values exist. The following theorem does this.

:::note [theorem] Extreme Value Theorem
A continuous function $f(x,y)$ on a closed and bounded set $D$ in the plane attains an absolute maximum value at some point of $D$ and an absolute minimum value at some point of $D.$
:::
Now that we know any continuous function $f$ defined on a closed, bounded set attains its extreme values, we need to know how to find them.

:::note [theorem] Finding Extreme Values of a Function of Two Variables
Assume $z=f(x,y)$ is a differentiable function of two variables defined on a closed, bounded set $D.$ Then $f$ will attain the absolute maximum value and the absolute minimum value, which are, respectively, the largest and smallest values found among the following:
1. The values of $f$ at the critical points of $f$ in $D.$
2. The values of $f$ on the boundary of $D.$
:::
The proof of this theorem is a direct consequence of the extreme value theorem and Fermat’s theorem. In particular, if either extremum is not located on the boundary of $D,$ then it is located at an interior point of $D.$ But an interior point $({x}_{0},{y}_{0})$ of $D$ that’s an absolute extremum is also a local extremum; hence, $({x}_{0},{y}_{0})$ is a critical point of $f$ by Fermat’s theorem. Therefore the only possible values for the global extrema of $f$ on $D$ are the extreme values of $f$ on the interior or boundary of $D.$

:::note [problem-solving] Finding Absolute Maximum and Minimum Values
Let $z=f(x,y)$ be a continuous function of two variables defined on a closed, bounded set $D,$ and assume $f$ is differentiable on $D.$ To find the absolute maximum and minimum values of $f$ on $D,$ do the following:
1. Determine the critical points of $f$ in $D.$
2. Calculate $f$ at each of these critical points.
3. Determine the maximum and minimum values of $f$ on the boundary of its domain.
4. The maximum and minimum values of $f$ will occur at one of the values obtained in steps $2\;\text{and}\;3.$
:::
Finding the maximum and minimum values of $f$ on the boundary of $D$ can be challenging. If the boundary is a rectangle or set of straight lines, then it is possible to parameterize the line segments and determine the maxima on each of these segments, as seen in [ref:fs-id1167793637901]. The same approach can be used for other shapes such as circles and ellipses.
If the boundary of the set $D$ is a more complicated curve defined by a function $g(x,y)=c$ for some constant $c,$ and the first-order partial derivatives of $g$ exist, then the method of Lagrange multipliers can prove useful for determining the extrema of $f$ on the boundary. The method of Lagrange multipliers is introduced in [Lagrange Multipliers](module:m53943).

:::example {ex:fs-id1167793637901} Finding Absolute Extrema

:::exercise {fs-id1167793637903} type= 
PROBLEM:
Use the problem-solving strategy for finding absolute extrema of a function to determine the absolute extrema of each of the following functions:
a. $f(x,y)={x}^{2}-2xy+4{y}^{2}-4x-2y+24$ on the domain defined by $0\le x\le 4$ and $0\le y\le 2$
b. $g(x,y)={x}^{2}+{y}^{2}+4x-6y$ on the domain defined by ${x}^{2}+{y}^{2}\le 16$
SOLUTION:
a. Using the problem-solving strategy, step $1$ involves finding the critical points of $f$ on its domain. Therefore, we first calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then set them each equal to zero:

$\begin{array}{rll}{f}_{x}(x,y) & = & 2x-2y-4 \\ {f}_{y}(x,y) & = & −2x+8y-2.\end{array}$  {eq:fs-id1167793632917}

Setting them equal to zero yields the system of equations

$\begin{array}{rll}2x-2y-4 & = & 0 \\ -2x+8y-2 & = & 0.\end{array}$  {eq:fs-id1167794097588}

The solution to this system is $x=3$ and $y=1.$ Therefore $(3,1)$ is a critical point of $f.$ Calculating $f(3,1)$ gives $f(3,1)=17.$

The next step involves finding the extrema of $f$ on the boundary of its domain. The boundary of its domain consists of four line segments as shown in the following graph:

> FIGURE {fig:CNX_Calc_Figure_14_07_003} src=../../media/CNX_Calc_Figure_14_07_003.jpg
> alt: A rectangle is drawn in the first quadrant with one corner at the origin, horizontal length 4, and height 2. This rectangle is marked D, and the sides are marked in counterclockwise order from the side overlapping the x axis L1, L2, L3, and L4.
> caption: Graph of the domain of the function $f(x,y)={x}^{2}-2xy+4{y}^{2}-4x-2y+24.$

${L}_{1}$ is the line segment connecting $(0,0)$ and $(4,0),$ and it can be parameterized by the equations $x(t)=t,y(t)=0$ for $0\le t\le 4.$ Define $g(t)=f(x(t),y(t)).$ This gives $g(t)={t}^{2}-4t+24.$ Differentiating *g* leads to ${g}^{'}(t)=2t-4.$ Therefore, $g$ has a critical value at $t=2,$ which corresponds to the point $(2,0).$ Calculating $f(2,0)$ gives the *z-*value $20.$

${L}_{2}$ is the line segment connecting $(4,0)$ and $(4,2),$ and it can be parameterized by the equations $x(t)=4,y(t)=t$ for $0\le t\le 2.$ Again, define $g(t)=f(x(t),y(t)).$ This gives $g(t)=4{t}^{2}-10t+24.$ Then, ${g}^{'}(t)=8t-10.$ $g$ has a critical value at $t=\frac{5}{4},$ which corresponds to the point $(4,\frac{5}{4}).$ Calculating $f(4,\frac{5}{4})$ gives the *z-*value $17.75.$

${L}_{3}$ is the line segment connecting $(0,2)$ and $(4,2),$ and it can be parameterized by the equations $x(t)=t,y(t)=2$ for $0\le t\le 4.$ Again, define $g(t)=f(x(t),y(t)).$ This gives $g(t)={t}^{2}-8t+36.$ The critical value $$ corresponds to the point $(4,2).$ So, calculating $f(4,2)$ gives the *z-*value $20.$

${L}_{4}$ is the line segment connecting $(0,0)$ and $(0,2),$ and it can be parameterized by the equations $x(t)=0,y(t)=t$ for $0\le t\le 2.$ This time, $g(t)=4{t}^{2}-2t+24$ and the critical value $t=\frac{1}{4}$ correspond to the point $(0,\frac{1}{4}).$ Calculating $f(0,\frac{1}{4})$ gives the *z-*value $23.75.$

We also need to find the values of $f(x,y)$ at the corners of its domain. These corners are located at $(0,0),(4,0),(4,2)\;\text{and}\;(0,2)\text{:}$

$\begin{array}{rllll} \\ f(0,0) & = & {(0)}^{2}-2(0)(0)+4{(0)}^{2}-4(0)-2(0)+24 & = & 24 \\ f(4,0) & = & {(4)}^{2}-2(4)(0)+4{(0)}^{2}-4(4)-2(0)+24 & = & 24 \\ f(4,2) & = & {(4)}^{2}-2(4)(2)+4{(2)}^{2}-4(4)-2(2)+24 & = & 20 \\ f(0,2) & = & {(0)}^{2}-2(0)(2)+4{(2)}^{2}-4(0)-2(2)+24 & = & 36.\end{array}$  {eq:fs-id1167793514689}

The absolute maximum value is $36,$ which occurs at $(0,2),$ and the global minimum value is $17,$ which occurs at $(3,1)$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_010} src=../../media/CNX_Calc_Figure_14_07_010.jpg
> alt: The function f(x, y) = x2 − 2xy – 4x + 4y2 – 2y + 24 is shown with local minima at (4, 2, 20) and (2, 0, 20) and local maximum at (0, 2, 36). The shape is a plane curving up on the corners significantly near (0, 2) and slightly less near (4, 0).
> caption: The function $f(x,y)$ has one global minimum and one global maximum over its domain.

b. Using the problem-solving strategy, step $1$ involves finding the critical points of $g$ on its domain. Therefore, we first calculate ${g}_{x}(x,y)$ and ${g}_{y}(x,y),$ then set them each equal to zero:

$\begin{array}{rll}{g}_{x}(x,y) & = & 2x+4 \\ {g}_{y}(x,y) & = & 2y-6.\end{array}$  {eq:fs-id1167793612621}

Setting them equal to zero yields the system of equations

$\begin{array}{rll}2x+4 & = & 0 \\ 2y-6 & = & 0.\end{array}$  {eq:fs-id1167793373658}

The solution to this system is $x=−2$ and $y=3.$ Therefore, $(−2,3)$ is a critical point of $g.$ Calculating $g(−2,3),$ we get

$g(−2,3)={(−2)}^{2}+{3}^{2}+4(−2)-6(3)=4+9-8-18=−13.$  {eq:fs-id1167793627420}

The next step involves finding the extrema of *g* on the boundary of its domain. The boundary of its domain consists of a circle of radius $4$ centered at the origin as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_07_004} src=../../media/CNX_Calc_Figure_14_07_004.jpg
> alt: A filled-in circle marked D of radius four with center at the origin.
> caption: Graph of the domain of the function $g(x,y)={x}^{2}+{y}^{2}+4x-6y.$

The boundary of the domain of $g$ can be parameterized using the functions $x(t)=4\;\text{cos}\;t,y(t)=4\;\text{sin}\;t$ for $0\le t\le 2\pi .$ Define $h(t)=g(x(t),y(t))\text{:}$

$\begin{array}{rl}h(t) & =g(x(t),y(t)) \\ & ={(4\;\text{cos}\;t)}^{2}+{(4\;\text{sin}\;t)}^{2}+4(4\;\text{cos}\;t)-6(4\;\text{sin}\;t) \\ & =16{\text{cos}}^{2}\;t+16{\text{sin}}^{2}\;t+16\;\text{cos}\;t-24\;\text{sin}\;t \\ & =16+16\;\text{cos}\;t-24\;\text{sin}\;t.\end{array}$  {eq:fs-id1167793453312}

Setting ${h}^{'}(t)=0$ leads to

$\begin{array}{rll}-16\;\text{sin}\;t-24\;\text{cos}\;t & = & 0 \\ -16\;\text{sin}\;t & = & 24\;\text{cos}\;t \\ \frac{−16\;\text{sin}\;t}{−16\;\text{cos}\;t} & = & \frac{24\;\text{cos}\;t}{−16\;\text{cos}\;t} \\ \text{tan}\;t & = & -\frac{3}{2}.\end{array}$  {eq:fs-id1167793418234}

This equation has two solutions over the interval $0\le t\le 2\pi .$ One is $t=\pi -\text{arctan}(\frac{3}{2})$ and the other is $t=2\pi -\text{arctan}(\frac{3}{2}).$ For the first angle,

$\begin{array}{rll}\text{sin}\;t & = & \text{sin}(\pi -\text{arctan}(\frac{3}{2}))=\text{sin}(\text{arctan}(\frac{3}{2}))=\frac{3\sqrt{13}}{13} \\ \text{cos}\;t & = & \text{cos}(\pi -\text{arctan}(\frac{3}{2}))=\text{−}\text{cos}(\text{arctan}(\frac{3}{2}))=-\frac{2\sqrt{13}}{13}.\end{array}$  {eq:fs-id1167794324582}

Therefore, $x(t)=4\;\text{cos}\;t=-\frac{8\sqrt{13}}{13}$ and $y(t)=4\;\text{sin}\;t=\frac{12\sqrt{13}}{13},$ so $(-\frac{8\sqrt{13}}{13},\frac{12\sqrt{13}}{13})$ is a critical point on the boundary and

$\begin{array}{rl}g(-\frac{8\sqrt{13}}{13},\frac{12\sqrt{13}}{13}) & ={(-\frac{8\sqrt{13}}{13})}^{2}+{(\frac{12\sqrt{13}}{13})}^{2}+4(-\frac{8\sqrt{13}}{13})-6(\frac{12\sqrt{13}}{13}) \\ & =\frac{144}{13}+\frac{64}{13}-\frac{32\sqrt{13}}{13}-\frac{72\sqrt{13}}{13} \\ & =\frac{208-104\sqrt{13}}{13}\approx −12.844.\end{array}$  {eq:fs-id1167794226603}

For the second angle,

$\begin{array}{rll}\text{sin}\;t & = & \text{sin}(2\pi -\text{arctan}(\frac{3}{2}))=\text{−}\text{sin}(\text{arctan}(\frac{3}{2}))=-\frac{3\sqrt{13}}{13} \\ \text{cos}\;t & = & \text{cos}(2\pi -\text{arctan}(\frac{3}{2}))=\text{cos}(\text{arctan}(\frac{3}{2}))=\frac{2\sqrt{13}}{13}.\end{array}$  {eq:fs-id1167793638298}

Therefore, $x(t)=4\;\text{cos}\;t=\frac{8\sqrt{13}}{13}$ and $y(t)=4\;\text{sin}\;t=-\frac{12\sqrt{13}}{13},$ so $(\frac{8\sqrt{13}}{13},-\frac{12\sqrt{13}}{13})$ is a critical point on the boundary and

$\begin{array}{rl}g(\frac{8\sqrt{13}}{13},-\frac{12\sqrt{13}}{13}) & ={(\frac{8\sqrt{13}}{13})}^{2}+{(-\frac{12\sqrt{13}}{13})}^{2}+4(\frac{8\sqrt{13}}{13})-6(-\frac{12\sqrt{13}}{13}) \\ & =\frac{144}{13}+\frac{64}{13}+\frac{32\sqrt{13}}{13}+\frac{72\sqrt{13}}{13} \\ & =\frac{208+104\sqrt{13}}{13}\approx 44.844.\end{array}$  {eq:fs-id1167793219250}

The absolute minimum of *g* is $−13,$ which is attained at the point $(−2,3),$ which is an interior point of *D*. The absolute maximum of *g* is approximately equal to 44.844, which is attained at the boundary point $(\frac{8\sqrt{13}}{13},-\frac{12\sqrt{13}}{13}).$ These are the absolute extrema of *g* on *D* as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_011} src=../../media/CNX_Calc_Figure_14_07_011.jpg
> alt: The function f(x, y) = x2 + 4x + y2 – 6y is shown with local minimum at (–12/5, 16/5, –64/5) and local maximum at (12/5, −16/5, 224/5). The shape is a plane curving up from near (−4, 4) to (4, −4).
> caption: The function $f(x,y)$ has a local minimum and a local maximum.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793930151} type= 
PROBLEM:
Use the problem-solving strategy for finding absolute extrema of a function to find the absolute extrema of the function

$f(x,y)=4{x}^{2}-2xy+6{y}^{2}-8x+2y+3$  {eq:fs-id1167793930160}

on the domain defined by $0\le x\le 2$ and $−1\le y\le 3.$
SOLUTION:
The absolute minimum occurs at $(1,0)\text{:}$ $f(1,0)=−1.$
The absolute maximum occurs at $(0,3)\text{:}$ $f(0,3)=63.$
COMMENTARY: Hint
Calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ and set them equal to zero. Then, calculate $f$ for each critical point and find the extrema of $f$ on the boundary of $D.$
:::
:::

:::example {ex:fs-id1167793423548} Chapter Opener: Profitable Golf Balls

:::exercise {fs-id1167793423550} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_14_07_014} src=../../media/CNX_Calc_Figure_14_07_014.jpg
> alt: A basket full of golf balls.
> caption: (credit: modification of work by oatsy40, Flickr)

Pro-$\text{T}$ company has developed a profit model that depends on the number *x* of golf balls sold per month (measured in thousands), and the number of hours per month of advertising *y*, according to the function

$z=f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2},$  {eq:fs-id1167793421997}

where $z$ is measured in thousands of dollars. The maximum number of golf balls that can be produced and sold is $50,000,$ and the maximum number of hours of advertising that can be purchased is $25.$ Find the values of $x$ and $y$ that maximize profit, and find the maximum profit.
SOLUTION:
Using the problem-solving strategy, step $1$ involves finding the critical points of $f$ on its domain. Therefore, we first calculate ${f}_{x}(x,y)$ and ${f}_{y}(x,y),$ then set them each equal to zero:

$\begin{array}{rll}{f}_{x}(x,y) & = & 48-2x-2y \\ {f}_{y}(x,y) & = & 96-2x-18y.\end{array}$  {eq:fs-id1167793638226}

Setting them equal to zero yields the system of equations

$\begin{array}{rll}48-2x-2y & = & 0 \\ 96-2x-18y & = & 0.\end{array}$  {eq:fs-id1167793611485}

The solution to this system is $x=21$ and $y=3.$ Therefore $(21,3)$ is a critical point of $f.$ Calculating $f(21,3)$ gives $f(21,3)=48(21)+96(3)-{21}^{2}-2(21)(3)-9{(3)}^{2}=648.$
The domain of this function is $0\le x\le 50$ and $0\le y\le 25$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_07_005} src=../../media/CNX_Calc_Figure_14_07_005.jpg
> alt: A rectangle is drawn in the first quadrant with one corner at the origin, horizontal length 50, and height 25. This rectangle is marked D, and the sides are marked in counterclockwise order from the side overlapping the x axis L1, L2, L3, and L4.
> caption: Graph of the domain of the function $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2}.$

${L}_{1}$ is the line segment connecting $(0,0)$ and $(50,0),$ and it can be parameterized by the equations $x(t)=t,y(t)=0$ for $0\le t\le 50.$ We then define $g(t)=f(x(t),y(t))\text{:}$

$\begin{array}{rl}g(t) & =f(x(t),y(t)) \\ & =f(t,0) \\ & =48t+96(0)-{t}^{2}-2(t)(0)-9{(0)}^{2} \\ & =48t-{t}^{2}.\end{array}$  {eq:fs-id1167793290980}

Setting ${g}^{'}(t)=0$ yields the critical point $t=24,$ which corresponds to the point $(24,0)$ in the domain of $f.$ Calculating $f(24,0)$ gives $576.$
${L}_{2}$ is the line segment connecting $$ and $(50,25),$ and it can be parameterized by the equations $x(t)=50,y(t)=t$ for $0\le t\le 25.$ Once again, we define $g(t)=f(x(t),y(t))\text{:}$

$\begin{array}{rl}g(t) & =f(x(t),y(t)) \\ & =f(50,t) \\ & =48(50)+96t-{50}^{2}-2(50)t-9{t}^{2} \\ & =−9{t}^{2}-4t-100.\end{array}$  {eq:fs-id1167794145816}

This function has a critical point at $t=-\frac{2}{9},$ which corresponds to the point $(50,-\frac{2}{9}).$ This point is not in the domain of $f.$
${L}_{3}$ is the line segment connecting $(0,25)\;\text{and}\;(50,25),$ and it can be parameterized by the equations $x(t)=t,y(t)=25$ for $0\le t\le 50.$ We define $g(t)=f(x(t),y(t))\text{:}$

$\begin{array}{rl}g(t) & =f(x(t),y(t)) \\ & =f(t,25) \\ & =48t+96(25)-{t}^{2}-2t(25)-9({25}^{2}) \\ & =\text{−}{t}^{2}-2t-3225.\end{array}$  {eq:fs-id1167793277275}

This function has a critical point at $t=−1,$ which corresponds to the point $(−1,25),$ which is not in the domain.
${L}_{4}$ is the line segment connecting $(0,0)\;\text{to}\;(0,25),$ and it can be parameterized by the equations $x(t)=0,y(t)=t$ for $0\le t\le 25.$ We define $g(t)=f(x(t),y(t))\text{:}$

$\begin{array}{rl}g(t) & =f(x(t),y(t)) \\ & =f(0,t) \\ & =48(0)+96t-{(0)}^{2}-2(0)t-9{t}^{2} \\ & =96t-{t}^{2}.\end{array}$  {eq:fs-id1167793619038}

This function has a critical point at $t=\frac{16}{3},$ which corresponds to the point $(0,\frac{16}{3}),$ which is on the boundary of the domain. Calculating $f(0,\frac{16}{3})$ gives $256.$
We also need to find the values of $f(x,y)$ at the corners of its domain. These corners are located at $(0,0),(50,0),(50,25)\;\text{and}\;(0,25)\text{:}$

$\begin{array}{rll}f(0,0) & = & 48(0)+96(0)-{(0)}^{2}-2(0)(0)-9{(0)}^{2}=0 \\ f(50,0) & = & 48(50)+96(0)-{(50)}^{2}-2(50)(0)-9{(0)}^{2}=−100 \\ f(50,25) & = & 48(50)+96(25)-{(50)}^{2}-2(50)(25)-9{(25)}^{2}=−5825 \\ f(0,25) & = & 48(0)+96(25)-{(0)}^{2}-2(0)(25)-9{(25)}^{2}=−3225.\end{array}$  {eq:fs-id1167793507386}

The maximum critical value is $648,$ which occurs at $(21,3).$ Therefore, a maximum profit of $\text{\$}648,000$ is realized when $21,000$ golf balls are sold and $3$ hours of advertising are purchased per month as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_14_07_012} src=../../media/CNX_Calc_Figure_14_07_012.jpg
> alt: The function f(x, y) = 48x + 96y – x2 – 2xy – 9y2 is shown with maximum point at (21, 3, 648). The shape is a plane curving from near the origin down to (50, 25).
> caption: The profit function $f(x,y)$ has a maximum at $(21,3,648).$

:::
:::

## Key Concepts {section:key-concepts}
- A critical point of the function $f(x,y)$ is any point $({x}_{0},{y}_{0})$ where either ${f}_{x}({x}_{0},{y}_{0})={f}_{y}({x}_{0},{y}_{0})=0,$ or at least one of ${f}_{x}({x}_{0},{y}_{0})$ and ${f}_{y}({x}_{0},{y}_{0})$ do not exist.
- A saddle point is a point $({x}_{0},{y}_{0})$ where ${f}_{x}({x}_{0},{y}_{0})={f}_{y}({x}_{0},{y}_{0})=0,$ but $({x}_{0},{y}_{0})$ is neither a maximum nor a minimum at that point.
- To find extrema of functions of two variables, first find the critical points, then calculate the discriminant and apply the second derivative test.

## Key Equations {section:key-equations}

> TABLE {tab:eip-549} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Discriminant** | $D={f}_{xx}({x}_{0},{y}_{0}){f}_{yy}({x}_{0},{y}_{0})-{({f}_{xy}({x}_{0},{y}_{0}))}^{2}$ |

##  {section:section-exercises}
For the following exercises, find all critical points.

:::exercise {fs-id1167793941282} type= 
PROBLEM:
$f(x,y)=1+{x}^{2}+{y}^{2}$
:::

:::exercise {fs-id1167793383328} type= 
PROBLEM:
$f(x,y)={(3x-2)}^{2}+{(y-4)}^{2}$
SOLUTION:
$(\frac{2}{3},4)$
:::

:::exercise {fs-id1167793409799} type= 
PROBLEM:
$f(x,y)={x}^{4}+{y}^{4}-16xy$
:::

:::exercise {fs-id1167793609417} type= 
PROBLEM:
$f(x,y)=15{x}^{3}-3xy+15{y}^{3}$
SOLUTION:
$(0,0)$ $(\frac{1}{15},\frac{1}{15})$
:::
For the following exercises, find the critical points of the function by using algebraic techniques (completing the square) or by examining the form of the equation. Verify your results using the partial derivatives test.

:::exercise {fs-id1167793427482} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+{y}^{2}+1}$
:::

:::exercise {fs-id1167794140003} type= 
PROBLEM:
$f(x,y)=\text{−}{x}^{2}-5{y}^{2}+8x-10y-13$
SOLUTION:
Maximum at $(4,−1,8)$
:::

:::exercise {fs-id1167793422629} type= 
PROBLEM:
$f(x,y)={x}^{2}+{y}^{2}+2x-6y+6$
:::

:::exercise {fs-id1167793423588} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+{y}^{2}}+1$
SOLUTION:
Relative minimum at $(0,0,1)$
:::
For the following exercises, use the second derivative test to classify any critical points and determine whether each critical point is a maximum, minimum, saddle point, or none of these.

:::exercise {fs-id1167793604530} type= 
PROBLEM:
$f(x,y)=\text{−}{x}^{3}+4xy-2{y}^{2}+1$
:::

:::exercise {fs-id1167793927459} type= 
PROBLEM:
$f(x,y)={x}^{2}{y}^{2}$
SOLUTION:
The second derivative test fails. Since ${x}^{2}{y}^{2}>0$ for all *x* and *y* different from zero, and ${x}^{2}{y}^{2}=0$ when either *x* or *y* equals zero (or both), then the absolute minimum occurs at $(0,0).$
:::

:::exercise {fs-id1167793938854} type= 
PROBLEM:
$f(x,y)={x}^{2}-6x+{y}^{2}+4y-8$
:::

:::exercise {fs-id1167794328278} type= 
PROBLEM:
$f(x,y)=2xy+3x+4y$
SOLUTION:
$f(−2,-\frac{3}{2})=−6$ is a saddle point.
:::

:::exercise {fs-id1167793502368} type= 
PROBLEM:
$f(x,y)=8xy(x+y)+7$
:::

:::exercise {fs-id1167793928564} type= 
PROBLEM:
$f(x,y)={x}^{2}+4xy+{y}^{2}$
SOLUTION:
$f(0,0)=0;$ $(0,0,0)$ is a saddle point.
:::

:::exercise {fs-id1167794292448} type= 
PROBLEM:
$f(x,y)={x}^{3}+{y}^{3}-300x-75y-3$
:::

:::exercise {fs-id1167793420334} type= 
PROBLEM:
$f(x,y)=9-{x}^{4}{y}^{4}$
SOLUTION:
The only critical point(s) are where both ${f}_{x}=0$ and ${f}_{y}=0$ and that is $f(0,0)=9$. However, since ${f}_{xx}{f}_{xy}-{({f}_{xy})}^{2}=0$ at the critical point, the Second Derivative Test fails. By graphing, we can see that this point is a local maximum.
:::

:::exercise {fs-id1167793409897} type= 
PROBLEM:
$f(x,y)=7{x}^{2}y+9x{y}^{2}$
:::

:::exercise {fs-id1167793610972} type= 
PROBLEM:
$f(x,y)=3{x}^{2}-2xy+{y}^{2}-8y$
SOLUTION:
Relative minimum located at $(2,6).$
:::

:::exercise {fs-id1167794292085} type= 
PROBLEM:
$f(x,y)=3{x}^{2}+2xy+{y}^{2}$
:::

:::exercise {fs-id1167793363154} type= 
PROBLEM:
$f(x,y)={y}^{2}+xy+3y+2x+3$
SOLUTION:
$(1,−2)$ is a saddle point.
:::

:::exercise {fs-id1167793285227} type= 
PROBLEM:
$f(x,y)={x}^{2}+xy+{y}^{2}-3x$
:::

:::exercise {fs-id1167793618199} type= 
PROBLEM:
$f(x,y)={x}^{2}+2{y}^{2}-{x}^{2}y$
SOLUTION:
$(2,1)$ and $(−2,1)$ are saddle points; $(0,0)$ is a relative minimum.
:::

:::exercise {fs-id1167794095082} type= 
PROBLEM:
$f(x,y)={x}^{2}+y-{e}^{y}$
:::

:::exercise {fs-id1167793641933} type= 
PROBLEM:
$f(x,y)={e}^{\text{−}({x}^{2}+{y}^{2}+2x)}$
SOLUTION:
$(−1,0)$ is a relative maximum.
:::

:::exercise {fs-id1167793501798} type= 
PROBLEM:
$f(x,y)={x}^{2}+xy+{y}^{2}-x-y+1$
:::

:::exercise {fs-id1167793568877} type= 
PROBLEM:
$f(x,y)={x}^{2}+10xy+{y}^{2}$
SOLUTION:
$(0,0)$ is a saddle point.
:::

:::exercise {fs-id1167793358288} type= 
PROBLEM:
$f(x,y)=\text{−}{x}^{2}-5{y}^{2}+10x-30y-62$
:::

:::exercise {fs-id1167793577818} type= 
PROBLEM:
$f(x,y)=120x+120y-xy-{x}^{2}-{y}^{2}$
SOLUTION:
The relative maximum is at $(40,40).$
:::

:::exercise {fs-id1167794160027} type= 
PROBLEM:
$f(x,y)=2{x}^{2}+2xy+{y}^{2}+2x-3$
:::

:::exercise {fs-id1167793958630} type= 
PROBLEM:
$f(x,y)={x}^{2}+x-3xy+{y}^{3}-5$
SOLUTION:
$(\frac{1}{4},\frac{1}{2})$ is a saddle point and $(1,1)$ is the relative minimum.
:::

:::exercise {fs-id1167793455562} type= 
PROBLEM:
$f(x,y)=2xy{e}^{\text{−}{x}^{2}-{y}^{2}}$
:::
For the following exercises, determine the extreme values and the saddle points. Use a CAS to graph the function.

:::exercise {fs-id1167794172444} type= 
PROBLEM:
**[T]** $f(x,y)=y{e}^{x}-{e}^{y}$
SOLUTION:
A saddle point is located at $(0,0).$

> IMAGE {img:fs-id1167793589584} src=../../media/CNX_Calc_Figure_14_07_201.jpg
> alt: A complicated graph that starts near (1, 1, 1), and decreases significantly along the x and y axes, so much so along the y axis that it is cut off. The rest of the graph stays near 0.

:::

:::exercise {fs-id1167793589599} type= 
PROBLEM:
**[T]** $f(x,y)=x\;\text{sin}(y)$
:::

:::exercise {fs-id1167793421227} type= 
PROBLEM:
**[T]** $f(x,y)=\text{sin}(x)\text{sin}(y),x\in (0,2\pi ),y\in (0,2\pi )$
SOLUTION:
There is a saddle point at $(\pi ,\pi ),$ local maxima at $(\frac{\pi}{2},\frac{\pi}{2})\;\text{and}\;(\frac{3\pi}{2},\frac{3\pi}{2}),$ and local minima at $(\frac{\pi}{2},\frac{3\pi}{2})\;\text{and}\;(\frac{3\pi}{2},\frac{\pi}{2}).$

> IMAGE {img:fs-id1167793401528} src=../../media/CNX_Calc_Figure_14_07_203.jpg
> alt: A series of hills and holes alternating through a space with amplitude 1.

:::
Find the absolute extrema of the given function on the indicated closed and bounded set $R.$

:::exercise {fs-id1167793401552} type= 
PROBLEM:
$f(x,y)=xy-x-3y;$ $R$ is the triangular region with vertices $(0,0),(0,4),\;\text{and}\;(5,0).$
:::

:::exercise {fs-id1167793423045} type= 
PROBLEM:
Find the absolute maximum and minimum values of $f(x,y)={x}^{2}+{y}^{2}-2y+1$ on the region $R=\{(x,y)|{x}^{2}+{y}^{2}\le 4\}.$
SOLUTION:
$(0,1,0)$ is the absolute minimum and $(0,−2,9)$ is the absolute maximum.
:::

:::exercise {fs-id1167793584516} type= 
PROBLEM:
$f(x,y)={x}^{3}-3xy-{y}^{3}$ on $R=\{(x,y)\text{:}\;−2\le x\le 2,−2\le y\le 2\}$
:::

:::exercise {fs-id1167793430995} type= 
PROBLEM:
$f(x,y)=\frac{−2y}{{x}^{2}+{y}^{2}+1}$ on $R=\{(x,y)\text{:}\;{x}^{2}+{y}^{2}\le 4\}$
SOLUTION:
There is an absolute minimum at $(0,1,−1)$ and an absolute maximum at $(0,−1,1).$
:::

:::exercise {fs-id1167793495948} type= 
PROBLEM:
Find three positive numbers the sum of which is $27,$ such that the sum of their squares is as small as possible.
:::

:::exercise {fs-id1167793495983} type= 
PROBLEM:
Find the points on the surface ${x}^{2}-yz=5$ that are closest to the origin.
SOLUTION:
$(\sqrt{5},0,0),(\text{−}\sqrt{5},0,0)$
:::

:::exercise {fs-id1167794222465} type= 
PROBLEM:
Find the maximum volume of a rectangular box with three faces in the coordinate planes and a vertex in the first octant on the plane $x+y+z=1.$
:::

:::exercise {fs-id1167794222510} type= 
PROBLEM:
The sum of the length and the girth (perimeter of a cross-section) of a package carried by a delivery service cannot exceed $108$ in. Find the dimensions of the rectangular package of largest volume that can be sent.
SOLUTION:
$\text{18 by 36 by 18 in}.$
:::

:::exercise {fs-id1167793502445} type= 
PROBLEM:
A cardboard box without a lid is to be made with a volume of $4$ ft<sup>3</sup>. Find the dimensions of the box that requires the least amount of cardboard.
:::

:::exercise {fs-id1167793502481} type= 
PROBLEM:
Find the point on the surface $f(x,y)={x}^{2}+{y}^{2}+10$ nearest the plane $x+2y-z=0.$ Identify the point on the plane.
SOLUTION:
$(\frac{1}{2},1,\frac{45}{4})$
:::

:::exercise {fs-id1167793960050} type= 
PROBLEM:
Find the point in the plane $2x-y+2z=16$ that is closest to the origin.
:::

:::exercise {fs-id1167793929637} type= 
PROBLEM:
A company manufactures two types of athletic shoes: jogging shoes and cross-trainers. The total revenue from $x$ jogging shoes and $y$ cross-trainers is given by $R(x,y)=−5{x}^{2}-8{y}^{2}-2xy+42x+102y,$ where $x$ and $y$ are in thousands of units. Find the values of *x* and *y* to maximize the total revenue.
SOLUTION:
$x=3$ and $y=6$
:::

:::exercise {fs-id1167793929124} type= 
PROBLEM:
A shipping company handles rectangular boxes provided the sum of the length, width, and height of the box does not exceed $96$ in. Find the dimensions of the box that meets this condition and has the largest volume.
:::

:::exercise {fs-id1167793929176} type= 
PROBLEM:
Find the maximum volume of a cylindrical soda can such that the sum of its height and circumference is $120$ cm.
SOLUTION:
$V=\frac{64,000}{\pi}\approx 20,372$ cm<sup>3</sup>
:::

## Glossary
- {def} **critical point of a function of two variables**: the point $({x}_{0},{y}_{0})$ is called a critical point of $f(x,y)$ if one of the two following conditions holds:

1. ${f}_{x}({x}_{0},{y}_{0})={f}_{y}({x}_{0},{y}_{0})=0$
2. At least one of ${f}_{x}({x}_{0},{y}_{0})$ and ${f}_{y}({x}_{0},{y}_{0})$ do not exist

- {def} **discriminant**: the discriminant of the function $f(x,y)$ is given by the formula $D={f}_{xx}({x}_{0},{y}_{0}){f}_{yy}({x}_{0},{y}_{0})-{({f}_{xy}({x}_{0},{y}_{0}))}^{2}$
- {def} **saddle point**: given the function $z=f(x,y),$ the point $({x}_{0},{y}_{0},f({x}_{0},{y}_{0}))$ is a saddle point if both ${f}_{x}({x}_{0},{y}_{0})=0$ and ${f}_{y}({x}_{0},{y}_{0})=0,$ but $f$ does not have a local extremum at $({x}_{0},{y}_{0})$

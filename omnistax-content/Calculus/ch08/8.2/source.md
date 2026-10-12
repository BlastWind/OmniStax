# Direction Fields and Numerical Methods

## Learning Objectives {section:learning-objectives}
- Draw the direction field for a given first-order differential equation.
- Use a direction field to draw a solution curve of a first-order differential equation.
- Use Euler’s Method to approximate the solution to a first-order differential equation.

For the rest of this chapter we will focus on various methods for solving differential equations and analyzing the behavior of the solutions. In some cases it is possible to predict properties of a solution to a differential equation without knowing the actual solution. We will also study numerical methods for solving differential equations, which can be programmed by using various computer languages or even by using a spreadsheet program, such as Microsoft Excel.

## Creating Direction Fields
Direction fields (also called slope fields) are useful for investigating first-order differential equations. In particular, we consider a first-order differential equation of the form

$y'=f(x,y).$  {eq:fs-id1170573436389}

An applied example of this type of differential equation appears in Newton’s law of cooling, which we will solve explicitly later in this chapter. First, though, let us create a direction field for the differential equation

${T}^{'}(t)=−0.4(T-72).$  {eq:fs-id1170573364732}

Here $T(t)$ represents the temperature (in degrees Fahrenheit) of an object at time $t,$ and the ambient temperature is $72\text{°}\text{F}\text{.}$ [ref:CNX_Calc_Figure_08_02_001] shows the direction field for this equation.

> FIGURE {fig:CNX_Calc_Figure_08_02_001} src=../../media/CNX_Calc_Figure_08_02_009.jpg
> alt: A graph of a direction field for the given differential equation in quadrants one and two. The arrows are pointing directly to the right at y = 72. Below that line, the arrows have increasingly positive slope as y becomes smaller. Above that line, the arrows have increasingly negative slope as y becomes larger. The arrows point to convergence at y = 72. Two solutions are drawn: one for initial temperature less than 72, and one for initial temperatures larger than 72. The upper solution is a decreasing concave up curve, approaching y = 72 as t goes to infinity. The lower solution is an increasing concave down curve, approaching y = 72 as t goes to infinity.
> caption: Direction field for the differential equation ${T}^{'}(t)=−0.4(T-72).$ Two solutions are plotted: one with initial temperature less than $72\text{°}\text{F}$ and the other with initial temperature greater than $72\text{°}\text{F}\text{.}$

The idea behind a direction field is the fact that the derivative of a function evaluated at a given point is the slope of the tangent line to the graph of that function at the same point. Other examples of differential equations for which we can create a direction field include

$\begin{array}{l}y'=3x+2y-4 \\ y'={x}^{2}-{y}^{2} \\ y'=\frac{2x+4}{y-2}.\end{array}$  {eq:fs-id1170573581634}

To create a direction field, we start with the first equation: $y'=3x+2y-4.$ We let $({x}_{0},{y}_{0})$ be any ordered pair, and we substitute these numbers into the right-hand side of the differential equation. For example, if we choose $x=1\;\text{and}\;y=2,$ substituting into the right-hand side of the differential equation yields

$\begin{array}{ll}{y}^{'} & =3x+2y-4 \\ & =3(1)+2(2)-4=3.\end{array}$  {eq:fs-id1170573439082}

This tells us that if a solution to the differential equation $y'=3x+2y-4$ passes through the point $(1,2),$ then the slope of the solution at that point must equal $3.$ To start creating the direction field, we put a short line segment at the point $(1,2)$ having slope $3.$ We can do this for any point in the domain of the function $f(x,y)=3x+2y-4,$ which consists of all ordered pairs $(x,y)$ in ${\mathbb{R}}^{2}.$ Therefore any point in the Cartesian plane has a slope associated with it, assuming that a solution to the differential equation passes through that point. The direction field for the differential equation ${y}^{'}=3x+2y-4$ is shown in [ref:CNX_Calc_Figure_08_02_002].

> FIGURE {fig:CNX_Calc_Figure_08_02_002} src=../../media/CNX_Calc_Figure_08_02_001.jpg
> alt: A graph of the direction field for the differential equation y’ = 3 x + 2 y – 4 in all four quadrants. In quadrants two and three, the arrows point down and slightly to the right. On a diagonal line, roughly y = -x + 2, the arrows point further and further to the right, curve, and then point up above that line.
> caption: Direction field for the differential equation $y'=3x+2y-4.$

We can generate a direction field of this type for any differential equation of the form $y'=f(x,y).$

:::note [definition] Definition
A {term:direction field (slope field)} is a mathematical object used to graphically represent solutions to a first-order differential equation. At each point in a direction field, a line segment appears whose slope is equal to the slope of a solution to the differential equation passing through that point.
:::

## Using Direction Fields
We can use a direction field to predict the behavior of solutions to a differential equation without knowing the actual solution. For example, the direction field in [ref:CNX_Calc_Figure_08_02_002] serves as a guide to the behavior of solutions to the differential equation $y'=3x+2y-4.$
To use a direction field, we start by choosing any point in the field. The line segment at that point serves as a signpost telling us what direction to go from there. For example, if a solution to the differential equation passes through the point $(0,1),$ then the slope of the solution passing through that point is given by $y'=3(0)+2(1)-4=−2.$ Now let $x$ increase slightly, say to $x=0.1.$ Using the method of linear approximations gives a formula for the approximate value of $y$ for $x=0.1.$ In particular,

$\begin{array}{ll}L(x) & ={y}_{0}+{f}^{'}({x}_{0})(x-{x}_{0}) \\ & =1-2(x-0) \\ & =1-2x.\end{array}$  {eq:fs-id1170573574070}

Substituting $x=0.1$ into $L(x)$ gives an approximate $y$ value of $0.8.$
At this point the slope of the solution changes (again according to the differential equation). We can keep progressing, recalculating the slope of the solution as we take small steps to the right, and watching the behavior of the solution. [ref:CNX_Calc_Figure_08_02_003] shows a graph of the solution passing through the point $(0,1).$

> FIGURE {fig:CNX_Calc_Figure_08_02_003} src=../../media/CNX_Calc_Figure_08_02_002.jpg
> alt: A graph of the direction field for the differential equation y’ = 3 x + 2 y – 4 in all four quadrants. In quadrants two and three, the arrows point down and slightly to the right. On a diagonal line, roughly y = -x + 2, the arrows point further and further to the right, curve, and then point up above that line. The solution passing through the point (0, 1) is shown. It curves down through (-5, 10), (0, 2), (1, 0), and (3, -10).
> caption: Direction field for the differential equation $y'=3x+2y-4$ with the solution passing through the point $(0,1).$

The curve is the graph of the solution to the initial-value problem

$y'=3x+2y-4,\;y(0)=1.$  {eq:fs-id1170571153236}

This curve is called a {term:solution curve} passing through the point $(0,1).$ The exact solution to this initial-value problem is

$y=-\frac{3}{2}x+\frac{5}{4}-\frac{1}{4}{e}^{2x},$  {eq:fs-id1170573415442}

and the graph of this solution is identical to the curve in [ref:CNX_Calc_Figure_08_02_003].

:::note [checkpoint] 

:::exercise {fs-id1170573262990} type= 
PROBLEM:
Create a direction field for the differential equation $y'={x}^{2}-{y}^{2}$ and sketch a solution curve passing through the point $(−1,2).$
SOLUTION:

> IMAGE {img:fs-id1170573583399} src=../../media/CNX_Calc_Figure_08_02_003.jpg
> alt: A graph of the direction field for the differential equation y’ = x ^ 2 – y ^ 2. Along y = x and y = -x, the lines are horizontal. On either side of y = x and y = -x, the lines slant and direct solutions along those two functions. The rest of the lines are vertical. The solution going through (-1, 2) is shown. It curves down from about (-2.75, 10), through (-1, 2) and about (0, 1.5), and then up along the diagonal to (10, 10).

COMMENTARY: Hint
Use $x$ and $y$ values ranging from $−5$ to $5.$ For each coordinate pair, calculate $y'$ using the right-hand side of the differential equation.
:::
:::

:::note [media-2] 
Go to this [website](http://www.openstax.org/l/20_SlopeFields) to see more about slope fields.
:::
Now consider the direction field for the differential equation $y'=(x-3)({y}^{2}-4),$ shown in [ref:CNX_Calc_Figure_08_02_005]. This direction field has several interesting properties. First of all, at $y=−2$ and $y=2,$ horizontal dashes appear all the way across the graph. This means that if $y=−2,$ then $y'=0.$ Substituting this expression into the right-hand side of the differential equation gives

$\begin{array}{ll}(x-3)({y}^{2}-4) & =(x-3)((-2{)}^{2}-4) \\ & =(x-3)(0) \\ & =0 \\ & =y'.\end{array}$  {eq:fs-id1170570995991}

Therefore $y=−2$ is a solution to the differential equation. Similarly, $y=2$ is a solution to the differential equation. These are the only constant-valued solutions to the differential equation, as we can see from the following argument. Suppose $y=k$ is a constant solution to the differential equation. Then ${y}^{'}=0.$ Substituting this expression into the differential equation yields $0=(x-3)({k}^{2}-4).$ This equation must be true for all values of $x,$ so the second factor must equal zero. This result yields the equation ${k}^{2}-4=0.$ The solutions to this equation are $k=−2$ and $k=2,$ which are the constant solutions already mentioned. These are called the equilibrium solutions to the differential equation.

> FIGURE {fig:CNX_Calc_Figure_08_02_005} src=../../media/CNX_Calc_Figure_08_02_004.jpg
> alt: A direction field for the given differential equation. The arrows are horizontal and pointing to the right at y = -4, y = 4, and x = 6. The closer the arrows are to x = 6, the more horizontal the arrows become. The further away, the more vertical they are. The arrows point down for y > 4 and x < 4, -4 < y < 4 and x > 6, and y < -4 and x < 6. In all other areas, the arrows are pointing up.
> caption: Direction field for the differential equation $y'=(x-3)({y}^{2}-4)$ showing two solutions. These solutions are very close together, but one is barely above the equilibrium solution $y=−2$ and the other is barely below the same equilibrium solution.

:::note [definition] Definition
Consider the differential equation $y'=f(x,y).$ An {term:equilibrium solution} is any solution to the differential equation of the form $y=c,$ where $c$ is a constant.
:::
To determine the equilibrium solutions to the differential equation $y'=f(x,y),$ set the right-hand side equal to zero. An equilibrium solution of the differential equation is any function of the form $y=k$ such that $f(x,k)=0$ for all values of $x$ in the domain of $f.$
An important characteristic of equilibrium solutions concerns whether or not they approach the line $y=k$ as an asymptote for large values of $x.$

:::note [definition] Definition
Consider the differential equation ${y}^{'}=f(x,y),$ and assume that all solutions to this differential equation are defined for $x\ge {x}_{0}.$ Let $y=k$ be an equilibrium solution to the differential equation.
1. $y=k$ is an {term:asymptotically stable solution} to the differential equation if there exists $ε>0$ such that for any value $c\in (k-ε,k+ε)$ the solution to the initial-value problem

${y}^{'}=f(x,y),\;y({x}_{0})=c$  {eq:fs-id1170571303029}

approaches $k$ as $x$ approaches infinity.
2. $y=k$ is an {term:asymptotically unstable solution} to the differential equation if there exists $ε>0$ such that for any value $c\in (k-ε,k+ε)$ the solution to the initial-value problem

${y}^{'}=f(x,y),\;y({x}_{0})=c$  {eq:fs-id1170573366618}

never approaches $k$ as $x$ approaches infinity.
3. $y=k$ is an {term:asymptotically semi-stable solution} to the differential equation if it is neither asymptotically stable nor asymptotically unstable.
:::
Now we return to the differential equation $y'=(x-3)({y}^{2}-4),$ with the initial condition $y(0)=0.5.$ The direction field for this initial-value problem, along with the corresponding solution, is shown in [ref:CNX_Calc_Figure_08_02_006].

> FIGURE {fig:CNX_Calc_Figure_08_02_006} src=../../media/CNX_Calc_Figure_08_02_005.jpg
> alt: A direction field for the given differential equation. The arrows are horizontal and pointing to the right at y = -4, y = 4, and x = 6. The closer the arrows are to x = 6, the more horizontal the arrows become. The further away, the more vertical they are. The arrows point down for y > 4 and x < 4, -4 < y < 4 and x > 6, and y < -4 and x < 6. In all other areas, the arrows are pointing up. A solution is graphed that goes through (0, 0.5). It begins along y = -4 in quadrant three, increases from -4 to 4 between x = -1 and 1, and ends going along y = 4 in quadrant 1.
> caption: Direction field for the initial-value problem $y'=(x-3)({y}^{2}-4),y(0)=0.5.$

The values of the solution to this initial-value problem stay between $y=−2$ and $y=2,$ which are the equilibrium solutions to the differential equation. However, an initial-value problem starting with $-2<y<2$ can never cross the equilibrium solutions $y=2$ and $y=-2$. Therefore, since ${y}^{2}-4<0$ and for $x>3,y'=(x-3)({y}^{2}-4)<0$, $y$ is decreasing and therefore approaches $y=-2$. Therefore, $y=-2$ is an asymptotically stable solution to the differential equation.
What happens when the initial value is below $y=−2?$ This scenario is illustrated in [ref:CNX_Calc_Figure_08_02_007], with the initial value $y(0)=−3.$

> FIGURE {fig:CNX_Calc_Figure_08_02_007} src=../../media/CNX_Calc_Figure_08_02_006.jpg
> alt: A direction field for the given differential equation. The arrows are horizontal and pointing to the right at y = -4, y = 4, and x = 6. The closer the arrows are to x = 6, the more horizontal the arrows become. The further away, the more vertical they are. The arrows point down for y > 4 and x < 4, -4 < y < 4 and x > 6, and y < -4 and x < 6. In all other areas, the arrows are pointing up. A solution is graphed that goes along y = -4 in quadrant 3 and curves between x = -1 and x = 0 to go to negative infinity along the y axis.
> caption: Direction field for the initial-value problem $y'=(x-3)({y}^{2}-4),\;y(0)=−3.$

We can see that for initial values $y<-2$ for $x>3,y'=(x-3)({y}^{2}-4)>0$ and $y$ is increasing and therefore approaches $y=-2$. This reaffirms that $y=-2$ is an asymptotically stable solution to the differential equation.

:::example {ex:fs-id1170573709023} Stability of an Equilibrium Solution

:::exercise {fs-id1170573569693} type= 
PROBLEM:
Create a direction field for the differential equation $y'={(y-3)}^{2}({y}^{2}+y-2)$ and identify any equilibrium solutions. Classify each of the equilibrium solutions as stable, unstable, or semi-stable.
SOLUTION:
The direction field is shown in [ref:CNX_Calc_Figure_08_02_008].

> FIGURE {fig:CNX_Calc_Figure_08_02_008} src=../../media/CNX_Calc_Figure_08_02_007.jpg
> alt: A graph of a direction field with arrows pointing to the right at y = -4, y = 2, and y = 6. For y < -4, the arrows point up. For -4 < y < 2, the arrows point down. For 2 < y <6, the arrows point up, becoming flatter and flatter as they approach y = 6. For y > 6, the arrows point up and become more and more vertical the further they get from y = 6.
> caption: Direction field for the differential equation $y'={(y-3)}^{2}({y}^{2}+y-2).$

The equilibrium solutions are $y=−2,y=1,$ and $y=3.$ To classify each of the solutions, look at an arrow directly above or below each of these values. For example, at $y=−2$ the arrows directly below this solution point up, and the arrows directly above the solution point down. Therefore all initial conditions close to $y=−2$ approach $y=−2,$ and the solution is stable. For the solution $y=1,$ all initial conditions above and below $y=1$ are repelled (pushed away) from $y=1,$ so this solution is unstable. The solution $y=3$ is semi-stable, because for initial conditions slightly greater than $3,$ the solution approaches infinity, and for initial conditions slightly less than $3,$ the solution approaches $y=3.$
COMMENTARY: Analysis
It is possible to find the equilibrium solutions to the differential equation by setting the right-hand side equal to zero and solving for $y.$ This approach gives the same equilibrium solutions as those we saw in the direction field.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571349921} type= 
PROBLEM:
Create a direction field for the differential equation $y'=(x+5)(y+2)({y}^{2}-4y+4)$ and identify any equilibrium solutions. Classify each of the equilibrium solutions as stable, unstable, or semi-stable.
SOLUTION:

> IMAGE {img:fs-id1170570998575} src=../../media/CNX_Calc_Figure_08_02_008.jpg
> alt: A direction field with arrows pointing to the right at y = -4 and y = 4. The arrows point up for y > -4 and down for y < -4. Close to y = 4, the arrows are more horizontal, but the further away, the more vertical they become.

The equilibrium solutions are $y=−2$ and $y=2.$ For this equation, $y=−2$ is an unstable equilibrium solution, and $y=2$ is a semi-stable equilibrium solution.
COMMENTARY: Hint
First create the direction field and look for horizontal dashes that go all the way across. Then examine the slope lines directly above and below the equilibrium solutions.
:::
:::

## Euler’s Method
Consider the initial-value problem

${y}^{'}=2x-3,\;y(0)=3.$  {eq:fs-id1170571340434}

Integrating both sides of the differential equation gives $y={x}^{2}-3x+C,$ and solving for $C$ yields the particular solution $y={x}^{2}-3x+3.$ The solution for this initial-value problem appears as the parabola in [ref:CNX_Calc_Figure_08_02_010].

> FIGURE {fig:CNX_Calc_Figure_08_02_010} src=../../media/CNX_Calc_Figure_08_02_010.jpg
> alt: A graph over the range [-1,4] for x and y. The given upward opening parabola is drawn with vertex at (1.5, 0.75). Individual points are plotted at (0, 3), (0.5, 1.5), (1, 0.5), (1.5, 0), (2, 0), (2.5, 0.5), and (3, 1.5) with line segments connecting them.
> caption: Euler’s Method for the initial-value problem ${y}^{'}=2x-3,\;y(0)=3.$

The red graph consists of line segments that approximate the solution to the initial-value problem. The graph starts at the same initial value of $(0,3).$ Then the slope of the solution at any point is determined by the right-hand side of the differential equation, and the length of the line segment is determined by increasing the $x$ value by $0.5$ each time (the *step size*). This approach is the basis of Euler’s Method.
Before we state Euler’s Method as a theorem, let’s consider another initial-value problem:

${y}^{'}={x}^{2}-{y}^{2},\;y(−1)=2.$  {eq:fs-id1170573499033}

The idea behind direction fields can also be applied to this problem to study the behavior of its solution. For example, at the point $(−1,2),$ the slope of the solution is given by $y'={(−1)}^{2}-{2}^{2}=−3,$ so the slope of the tangent line to the solution at that point is also equal to $−3.$ Now we define ${x}_{0}=−1$ and ${y}_{0}=2.$ Since the slope of the solution at this point is equal to $−3,$ we can use the method of linear approximation to approximate $y$ near $(−1,2).$

$L(x)={y}_{0}+{f}^{'}({x}_{0})(x-{x}_{0}).$  {eq:fs-id1170573351863}

Here ${x}_{0}=−1,{y}_{0}=2,$ and ${f}^{'}({x}_{0})=−3,$ so the linear approximation becomes

$\begin{array}{ll}L(x) & =2-3(x-(−1)) \\ & =2-3x-3 \\ & =−3x-1.\end{array}$  {eq:fs-id1170570995890}

Now we choose a {term:step size}. The step size is a small value, typically $0.1$ or less, that serves as an increment for $x;$ it is represented by the variable $h.$ In our example, let $h=0.1.$ Incrementing ${x}_{0}$ by $h$ gives our next $x$ value:

${x}_{1}={x}_{0}+h=−1+0.1=−0.9.$  {eq:fs-id1170571060836}

We can substitute ${x}_{1}=−0.9$ into the linear approximation to calculate ${y}_{1}.$

$\begin{array}{ll}{y}_{1} & =L({x}_{1}) \\ & =−3(−0.9)-1 \\ & =1.7.\end{array}$  {eq:fs-id1170571346180}

Therefore the approximate $y$ value for the solution when $x=−0.9$ is $y=1.7.$ We can then repeat the process, using ${x}_{1}=−0.9$ and ${y}_{1}=1.7$ to calculate ${x}_{2}$ and ${y}_{2}.$ The new slope is given by $y'={(−0.9)}^{2}-{(1.7)}^{2}=−2.08.$ First, ${x}_{2}={x}_{1}+h=−0.9+0.1=−0.8.$ Using linear approximation gives

$\begin{array}{ll}L(x) & ={y}_{1}+{f}^{'}({x}_{1})(x-{x}_{1}) \\ & =1.7-2.08(x-(−0.9)) \\ & =1.7-2.08x-1.872 \\ & =−2.08x-0.172.\end{array}$  {eq:fs-id1170571142558}

Finally, we substitute ${x}_{2}=−0.8$ into the linear approximation to calculate ${y}_{2}.$

$\begin{array}{ll}{y}_{2} & =L({x}_{2}) \\ & =−2.08{x}_{2}-0.172 \\ & =−2.08(−0.8)-0.172 \\ & =1.492.\end{array}$  {eq:fs-id1170573438533}

Therefore the approximate value of the solution to the differential equation is $y=1.492$ when $x=−0.8.$
What we have just shown is the idea behind {term:Euler’s Method}. Repeating these steps gives a list of values for the solution. These values are shown in [ref:fs-id1170573401360], rounded off to four decimal places.

> TABLE {tab:fs-id1170573401360} cols=7
> title: Using Euler’s Method to Approximate Solutions to a Differential Equation
> summary: A table with three columns and twelve rows. The first has the label “n” and the values 0 through 10. The second has the label “x_n” and the values -1 through 0, increasing by 0.1. The third has the label “y_n” and the values 2, 1.7, 1.492, 1.3334, 1.2046, 1.0955, 1.0004, 0.9164, 0.8414, 0.7746, and 0.7156.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $\boldsymbol{n}$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| $\boldsymbol{{x}_{n}}$ | $−1$ | $−0.9$ | $−0.8$ | $−0.7$ | $−0.6$ | $−0.5$ |
| $\boldsymbol{{y}_{n}}$ | $2$ | $1.7$ | $1.492$ | $1.3334$ | $1.2046$ | $1.0955$ |
| $\boldsymbol{n}$ | $6$ | $7$ | $8$ | $9$ | $10$ |  |
| $\boldsymbol{{x}_{n}}$ | $−0.4$ | $−0.3$ | $−0.2$ | $−0.1$ | $0$ |  |
| $\boldsymbol{{y}_{n}}$ | $1.0004$ | $1.9164$ | $1.8414$ | $1.7746$ | $1.7156$ |  |

:::note [theorem] Euler’s Method
Consider the initial-value problem
$y'=f(x,y),\;y({x}_{0})={y}_{0}.$
To approximate a solution to this problem using Euler’s method, define

$$ \begin{array}{l}{x}_{n}={x}_{0}+nh \\ {y}_{n}={y}_{n-1}+hf({x}_{n-1},{y}_{n-1}).\end{array} $$  {eq:fs-id1170573525577}

Here $h>0$ represents the step size and $n$ is an integer, starting with $1.$ The number of steps taken is counted by the variable $n.$
:::
Typically $h$ is a small value, say $0.1$ or $0.05.$ The smaller the value of $h,$ the more calculations are needed. The higher the value of $h,$ the fewer calculations are needed. However, the tradeoff results in a lower degree of accuracy for larger step size, as illustrated in [ref:CNX_Calc_Figure_08_02_011].

> FIGURE {fig:CNX_Calc_Figure_08_02_011} src=../../media/CNX_Calc_Figure_08_02_011.jpg
> alt: Two graphs of the same parabola, y = x ^ 2 – 3 x + 3. The first shows Euler’s method for the given initial-value problem with a step size of h = 0.05, and the second shows Euler’s method with a step size of h = 0.25. The first then has the points (0, 3), (.5, 1.5), (1, 0.5), (1.5, 0), (2, 0), (2.5, 0.5), and (3, 1.5) plotted with line segments connecting them. The second has the points (0, 3), (0.25, 2.25), (0.5, 1.625), (0.75, 1.125), (1, 0.75), (1.25, 0.5), (1.5, 0.375), (2, 0.5), (2.25, 0.75), (2.5, 1.125), (2.75, 1.625), and (3, 2.25) plotted with line segments connecting them.
> caption: Euler’s method for the initial-value problem ${y}^{'}=2x-3,y(0)=3$ with (a) a step size of $h=0.5;$ and (b) a step size of $h=0.25.$

:::example {ex:fs-id1170573756803} Using Euler’s Method

:::exercise {fs-id1170573756805} type= 
PROBLEM:
Consider the initial-value problem

${y}^{'}=3{x}^{2}-{y}^{2}+1,\;y(0)=2.$  {eq:fs-id1170571103644}

Use Euler’s method with a step size of $0.1$ to generate a table of values for the solution for values of $x$ between $0$ and $1.$
SOLUTION:
We are given $h=0.1$ and $f(x,y)=3{x}^{2}-{y}^{2}+1.$ Furthermore, the initial condition $y(0)=2$ gives ${x}_{0}=0$ and ${y}_{0}=2.$ Using [ref:fs-id1170573525577] with $n=0,$ we can generate [ref:fs-id1170571140163].

> TABLE {tab:fs-id1170571140163} cols=3
> title: Using Euler’s Method to Approximate Solutions to a Differential Equation
> summary: A table with three columns and twelve rows. The first column has the header “n” and values 0 through 10. The second column has the header “x_n” and the values 0 through 1, increasing by 0.1. The third column has the header “y_n = y_(n - 1) + hf(x_(n - 1), y(n - 1).” The values are as follows: 2, 1.7, 1.514, 1.3968, 1.3287, 1.3001, 1.3061, 1.3435, 1.4100, 1.5032, and 1.6202.

|  |  |  |
| --- | --- | --- |
| $n$ | ${x}_{n}$ | ${y}_{n}={y}_{n-1}+hf({x}_{n-1},{y}_{n-1})$ |
| $0$ | $0$ | $2$ |
| $1$ | $0.1$ | ${y}_{1}={y}_{0}+hf({x}_{0},{y}_{0})=1.7$ |
| $2$ | $0.2$ | ${y}_{2}={y}_{1}+hf({x}_{1},{y}_{1})=1.514$ |
| $3$ | $0.3$ | ${y}_{3}={y}_{2}+hf({x}_{2},{y}_{2})=1.3968$ |
| $4$ | $0.4$ | ${y}_{4}={y}_{3}+hf({x}_{3},{y}_{3})=1.3287$ |
| $5$ | $0.5$ | ${y}_{5}={y}_{4}+hf({x}_{4},{y}_{4})=1.3001$ |
| $6$ | $0.6$ | ${y}_{6}={y}_{5}+hf({x}_{5},{y}_{5})=1.3061$ |
| $7$ | $0.7$ | ${y}_{7}={y}_{6}+hf({x}_{6},{y}_{6})=1.3435$ |
| $8$ | $0.8$ | ${y}_{8}={y}_{7}+hf({x}_{7},{y}_{7})=1.4100$ |
| $9$ | $0.9$ | ${y}_{9}={y}_{8}+hf({x}_{8},{y}_{8})=1.5032$ |
| $10$ | $1.0$ | ${y}_{10}={y}_{9}+hf({x}_{9},{y}_{9})=1.6202$ |

With ten calculations, we are able to approximate the values of the solution to the initial-value problem for values of $x$ between $0$ and $1.$
:::
:::

:::note [media-2] 
For more information on [Euler's method](http://www.openstax.org/l/20_EulersMethod) use this applet.
:::

:::note [checkpoint] 

:::exercise {fs-id1170571260263} type= 
PROBLEM:
Consider the initial-value problem

${y}^{'}={x}^{3}+{y}^{2},\;y(1)=−2.$  {eq:fs-id1170571169480}

Using a step size of $0.1,$ generate a table with approximate values for the solution to the initial-value problem for values of $x$ between $1$ and $2.$
SOLUTION:

> TABLE {tab:fs-id1170573720273} cols=3 class=unnumbered
> summary: A table with three columns and eleven rows. The first column has the header n and the values 0 through 10. The second column has the header x_n and the values 1 through 2, increasing by 0.1. The third column has the header y_n = y_(n - 1) + hf(x_(n - 1), y_(n - 1)) and the values -2, -1.5, -1.1419, -0.8387, -0.5487, -0.2442, 0.0993, 0.5099, 1.0272, 1.7159, and 2.6962.

| $n$ | ${x}_{n}$ | ${y}_{n}={y}_{n-1}+hf({x}_{n-1},{y}_{n-1})$ |
| --- | --- | --- |
| $0$ | $1$ | $−2$ |
| $1$ | $1.1$ | ${y}_{1}={y}_{0}+hf({x}_{0},{y}_{0})=−1.5$ |
| $2$ | $1.2$ | ${y}_{2}={y}_{1}+hf({x}_{1},{y}_{1})=−1.1419$ |
| $3$ | $1.3$ | ${y}_{3}={y}_{2}+hf({x}_{2},{y}_{2})=−0.8387$ |
| $4$ | $1.4$ | ${y}_{4}={y}_{3}+hf({x}_{3},{y}_{3})=−0.5487$ |
| $5$ | $1.5$ | ${y}_{5}={y}_{4}+hf({x}_{4},{y}_{4})=−0.2442$ |
| $6$ | $1.6$ | ${y}_{6}={y}_{5}+hf({x}_{5},{y}_{5})=0.0993$ |
| $7$ | $1.7$ | ${y}_{7}={y}_{6}+hf({x}_{6},{y}_{6})=0.5099$ |
| $8$ | $1.8$ | ${y}_{8}={y}_{7}+hf({x}_{7},{y}_{7})=1.0272$ |
| $9$ | $1.9$ | ${y}_{9}={y}_{8}+hf({x}_{8},{y}_{8})=1.7159$ |
| $10$ | $2$ | ${y}_{10}={y}_{9}+hf({x}_{9},{y}_{9})=2.6962$ |

COMMENTARY: Hint
Start by identifying the value of $h,$ then figure out what $f(x,y)$ is. Then use the formula for Euler’s Method to calculate ${y}_{1},{y}_{2},$ and so on.
:::
:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_EulerMethod2) for a practical application of the material in this section.
:::

## Key Concepts {section:key-concepts}
- A direction field is a mathematical object used to graphically represent solutions to a first-order differential equation.
- Euler’s Method is a numerical technique that can be used to approximate solutions to a differential equation.

## Key Equations {section:key-equations}

> TABLE {tab:eip-516} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Euler’s Method** | $\begin{array}{l}{x}_{n}={x}_{0}+nh \\ {y}_{n}={y}_{n-1}+hf({x}_{n-1},{y}_{n-1}),\text{where}\;h\;\text{is the step size}\end{array}$ |

##  {section:section-exercises}
For the following problems, use the direction field below from the differential equation $y'=−2y.$ Sketch the graph of the solution for the given initial conditions.

> IMAGE {img:fs-id1170571153152} src=../../media/CNX_Calc_Figure_08_02_201.jpg
> alt: A direction field with horizontal arrows pointing to the right at 0. The arrows above the x axis point down and to the right. The further away from the x axis, the steeper the arrows are, and the closer to the x axis, the flatter the arrows are. Likewise, the arrows below the x axis point up and to the right. The further away from the x axis, the steeper the arrows are, and the closer to the x axis, the flatter the arrows are.

:::exercise {fs-id1170571153164} type= 
PROBLEM:
$y(0)=1$
:::

:::exercise {fs-id1170571153204} type= 
PROBLEM:
$y(0)=0$
SOLUTION:

> IMAGE {img:fs-id1170573741999} src=../../media/CNX_Calc_Figure_08_02_203-935c.jpg
> alt: A graph of the given direction field with a flat line drawn on the axis. The arrows point up for y < 0 and down for y > 0. The closer they are to the x axis, the more horizontal the arrows are, and the further away they are, the more vertical they become.

:::

:::exercise {fs-id1170573742009} type= 
PROBLEM:
$y(0)=−1$
:::

:::exercise {fs-id1170573742050} type= 
PROBLEM:
Are there any equilibria? What are their stabilities?
SOLUTION:
$y=0$ is a stable equilibrium
:::
For the following problems, use the direction field below from the differential equation $y'={y}^{2}-2y.$ Sketch the graph of the solution for the given initial conditions.

> IMAGE {img:fs-id1170571240273} src=../../media/CNX_Calc_Figure_08_02_205.jpg
> alt: A direction field with horizontal arrows at y = 0 and y = 2. The arrows point up for y > 2 and for y < 0. The arrows point down for 0 < y < 2. The closer the arrows are to these lines, the more horizontal they are, and the further away, the more vertical the arrows are.

:::exercise {fs-id1170571240281} type= 
PROBLEM:
$y(0)=3$
:::

:::exercise {fs-id1170571240323} type= 
PROBLEM:
$y(0)=1$
SOLUTION:

> IMAGE {img:fs-id1170571246032} src=../../media/CNX_Calc_Figure_08_02_207.jpg
> alt: A direction field with horizontal arrows at y = 0 and y = 2. The arrows point up for y > 2 and for y < 0. The arrows point down for 0 < y < 2. The closer the arrows are to these lines, the more horizontal they are, and the further away, the more vertical the arrows are. A solution is sketched that follows y = 2 in quadrant two, goes through (0, 1), and then follows the x axis.

:::

:::exercise {fs-id1170571246043} type= 
PROBLEM:
$y(0)=−1$
:::

:::exercise {fs-id1170571246086} type= 
PROBLEM:
Are there any equilibria? What are their stabilities?
SOLUTION:
$y=0$ is a stable equilibrium and $y=2$ is unstable
:::
Draw the direction field for the following differential equations, then solve the differential equation.

:::exercise {fs-id1170573626101} type= 
PROBLEM:
$y'={t}^{3}$
:::

:::exercise {fs-id1170573626140} type= 
PROBLEM:
$y'={e}^{t}$
SOLUTION:
General solution is $y={e}^{t}+C$.  
> IMAGE {img:fs-id1170571423359} src=../../media/CNX_Calc_Figure_08_02_210.jpg
> alt: A direction field over the four quadrants. As t goes from 0 to infinity, the arrows become more and more vertical after being horizontal closer to x = 0.

:::

:::exercise {fs-id1170571423372} type= 
PROBLEM:
$\frac{dy}{dx}={x}^{2}\text{cos}\;x$
:::

:::exercise {fs-id1170571423425} type= 
PROBLEM:
$\frac{dy}{dt}=t{e}^{t}$
SOLUTION:
General solution is $y={e}^{t}(t-1)+C$.  
> IMAGE {img:fs-id1170571100723} src=../../media/CNX_Calc_Figure_08_02_212.jpg
> alt: A direction field over [-2, 2] in the x and y axes. The arrows point slightly down and to the right over [-2, 0] and gradually become vertical over [0, 2].

:::

:::exercise {fs-id1170571100738} type= 
PROBLEM:
$\frac{dx}{dt}=\text{cosh}(t)$
:::
Draw the directional field for the following differential equations. What can you say about the behavior of the solution? Are there equilibria? What stability do these equilibria have?

:::exercise {fs-id1170571100796} type= 
PROBLEM:
$y'={y}^{2}-1$
SOLUTION:

> IMAGE {img:fs-id1170571043026} src=../../media/CNX_Calc_Figure_08_02_214.jpg
> alt: A direction field with horizontal arrows pointing to the right at y = 1 and y = -1. The arrows point up for y < -1 and y > 1. The arrows point down for -1 < y < 1. The closer the arrows are to these lines, the more horizontal they are, and the further away they are, the more vertical they are.

:::

:::exercise {fs-id1170571043039} type= 
PROBLEM:
$y'=y-x$
:::

:::exercise {fs-id1170571043082} type= 
PROBLEM:
$y'=1-{y}^{2}-{x}^{2}$
SOLUTION:

> IMAGE {img:fs-id1170571119616} src=../../media/CNX_Calc_Figure_08_02_216.jpg
> alt: A direction field with arrows pointing down and to the right for nearly all points in [-2, 2] on the x and y axes. Close to the origin, the arrows become more horizontal, point to the upper right, become more horizontal, and then point down to the right again.

:::

:::exercise {fs-id1170571119632} type= 
PROBLEM:
$y'={t}^{2}\text{sin}\;y$
:::

:::exercise {fs-id1170571119680} type= 
PROBLEM:
$y'=3y+xy$
SOLUTION:

> IMAGE {img:fs-id1170571423066} src=../../media/CNX_Calc_Figure_08_02_218.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x axis and x = -3. Above the x axis and for x < -3, the arrows point down. For x > -3, the arrows point up. Below the x axis and for x < -3, the arrows point up. For x > -3, the arrows point down. The further away from the x axis and x = -3, the arrows become more vertical, and the closer they become, the more horizontal they become.

:::
Match the direction field with the given differential equations. Explain your selections.

> IMAGE {img:fs-id1170571423084} src=../../media/CNX_Calc_Figure_08_02_219a.jpg
> alt: A direction field with arrows pointing down and to the right in quadrants two and three. After crossing the y axis, the arrows change direction and point up to the right.

> IMAGE {img:fs-id1170571423097} src=../../media/CNX_Calc_Figure_08_02_219b.jpg
> alt: A direction field with horizontal arrows pointing to the left in quadrants two and three. In crossing the y axis, the arrows switch and point upward in quadrants one and four.

> IMAGE {img:fs-id1170571423110} src=../../media/CNX_Calc_Figure_08_02_219c.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x axis. Above, the arrows point down and to the right, and below, the arrows point up and to the right. The further from the x axis, the more vertical the arrows become.

> IMAGE {img:fs-id1170571423123} src=../../media/CNX_Calc_Figure_08_02_219d.jpg
> alt: A direction field with horizontal arrows on the x and y axes. The arrows point down and to the right in quadrants one and three. They point up and to the right in quadrants two and four.

> IMAGE {img:fs-id1170571306925} src=../../media/CNX_Calc_Figure_08_02_219e.jpg
> alt: A direction field with arrows pointing up in quadrants two and three, to the right on the y axis, and down in quadrants one and four.

:::exercise {fs-id1170571306937} type= 
PROBLEM:
$y'=−3y$
:::

:::exercise {fs-id1170571306965} type= 
PROBLEM:
$y'=−3t$
SOLUTION:
E
:::

:::exercise {fs-id1170571306993} type= 
PROBLEM:
$y'={e}^{t}$
:::

:::exercise {fs-id1170571469115} type= 
PROBLEM:
$y'=\frac{1}{2}y+t$
SOLUTION:
A
:::

:::exercise {fs-id1170571469150} type= 
PROBLEM:
$y'=\text{−}ty$
:::
Match the direction field with the given differential equations. Explain your selections.

> IMAGE {img:fs-id1170571469184} src=../../media/CNX_Calc_Figure_08_02_220a.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x and y axes. In quadrants one and three, the arrows point up, and in quadrants two and four, they point down.

> IMAGE {img:fs-id1170571469197} src=../../media/CNX_Calc_Figure_08_02_220b.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x and y axes. In quadrants one and three, the arrows point up and to the right, and in quadrants two and four, the arrows point down and to the right.

> IMAGE {img:fs-id1170571118906} src=../../media/CNX_Calc_Figure_08_02_220c.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x and y axes. In quadrants two and three, the arrows point down, and in quadrants one and four, the arrows point up.

> IMAGE {img:fs-id1170571118919} src=../../media/CNX_Calc_Figure_08_02_220d.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x axis. The arrows point up and to the right in all quadrants. The closer the arrows are to the x axis, the more horizontal the arrows are, and the further away they are, the more vertical they are.

> IMAGE {img:fs-id1170571118937} src=../../media/CNX_Calc_Figure_08_02_220e.jpg
> alt: A direction field with horizontal arrows on the y axis. The arrows are also more horizontal closer to y = 1.5, y = -1.5, and the y axis. For y > 1.5 and x < 0, for y < -1.5 and x < 0, and for -1.5 < y < 1.5 and x > 0-, the arrows point down. For y> 1.5 and x > 0, for y < -1.5, for y < -1.5 and x > 0, and for -1.5 < y < 1.5 and x < 0, the arrows point up.

:::exercise {fs-id1170571118948} type= 
PROBLEM:
$y'=t\;\text{sin}\;y$
SOLUTION:
B
:::

:::exercise {fs-id1170571118984} type= 
PROBLEM:
$y'=\text{−}t\;\text{cos}\;y$
:::

:::exercise {fs-id1170571442800} type= 
PROBLEM:
$y'=t\;\text{tan}\;y$
SOLUTION:
A
:::

:::exercise {fs-id1170571442836} type= 
PROBLEM:
$y'={\text{sin}}^{2}y$
:::

:::exercise {fs-id1170571503006} type= 
PROBLEM:
$y'={y}^{2}{t}^{3}$
SOLUTION:
C
:::
Estimate the following solutions using Euler’s method with $n=5$ steps over the interval $t=[0,1].$ If you are able to solve the initial-value problem exactly, compare your solution with the exact solution. If you are unable to solve the initial-value problem, the exact solution will be provided for you to compare with Euler’s method. How accurate is Euler’s method?

:::exercise {fs-id1170571503082} type= 
PROBLEM:
$y'=−3y,\;y(0)=1$
:::

:::exercise {fs-id1170573721407} type= 
PROBLEM:
$y'={t}^{2},y(0)=2$
SOLUTION:
$2.24,$ exact: $2$
:::

:::exercise {fs-id1170573721446} type= 
PROBLEM:
${y}^{'}=3t-y,y(0)=1.$ Exact solution is $y=3t+4{e}^{\text{−}t}-3$
:::

:::exercise {fs-id1170571233748} type= 
PROBLEM:
${y}^{'}=y+{t}^{2},y(0)=3.$ Exact solution is $y=5{e}^{t}-2-{t}^{2}-2t$
SOLUTION:
$7.739264,$ exact: $5(e-1)$
:::

:::exercise {fs-id1170571062249} type= 
PROBLEM:
${y}^{'}=2t,y(0)=0$
:::

:::exercise {fs-id1170571057294} type= 
PROBLEM:
**[T]** $y'={e}^{(x+y)},y(0)=−1.$ Exact solution is $y=\text{−}\text{ln}(e+1-{e}^{x})$
SOLUTION:
$−0.2535$ exact: $0$
:::

:::exercise {fs-id1170573528190} type= 
PROBLEM:
${y}^{'}={y}^{2}\text{ln}(x+1),y(0)=1.$ Exact solution is $y=-\frac{1}{(x+1)(\text{ln}(x+1)-1)}$
:::

:::exercise {fs-id1170571218252} type= 
PROBLEM:
${y}^{'}={2}^{x},y(0)=0,$ Exact solution is $y=\frac{{2}^{x}-1}{\text{ln}(2)}$
SOLUTION:
$1.345,$ exact: $\frac{1}{\text{ln}(2)}$
:::

:::exercise {fs-id1170571280274} type= 
PROBLEM:
${y}^{'}=y,y(0)=−1.$ Exact solution is $y=\text{−}{e}^{x}.$
:::

:::exercise {fs-id1170573736135} type= 
PROBLEM:
${y}^{'}=−5t,y(0)=−2.$ Exact solution is $y=-\frac{5}{2}{t}^{2}-2$
SOLUTION:
$−4,$ exact: $\text{−}1\text{/}2$
:::
Differential equations can be used to model {index:disease epidemics}. In the next set of problems, we examine the change of size of two sub-populations of people living in a city: individuals who are infected and individuals who are susceptible to infection. $S$ represents the size of the susceptible population, and $I$ represents the size of the infected population. We assume that if a susceptible person interacts with an infected person, there is a probability $c$ that the susceptible person will become infected. Each infected person recovers from the infection at a rate $r$ and becomes susceptible again. We consider the case of influenza, where we assume that no one dies from the disease, so we assume that the total population size of the two sub-populations is a constant number, $N.$ The differential equations that model these population sizes are

$\begin{array}{l}S'=rI-cSI\;\text{and} \\ I'=cSI-rI.\end{array}$  {eq:fs-id1170572574143}

Here $c$ represents the contact rate and $r$ is the recovery rate.

:::exercise {fs-id1170571510334} type= 
PROBLEM:
Show that, by our assumption that the total population size is constant $(S+I=N),$ you can reduce the system to a single differential equation in $I\text{:}\;I'=c(N-I)I-rI.$
:::

:::exercise {fs-id1170571510412} type= 
PROBLEM:
Assuming the parameters are $c=0.5,N=5,$ and $r=0.5,$ draw the resulting directional field.
SOLUTION:

> IMAGE {img:fs-id1170571233959} src=../../media/CNX_Calc_Figure_08_02_221.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x axis and at y = 4. The arrows below the x axis and above y = 4 point down and to the right. The arrows between the x axis and y = 4 point up and to the right.

:::

:::exercise {fs-id1170571233975} type= 
PROBLEM:
**[T]** Use computational software or a calculator to compute an approximate solution to the initial-value problem $y'=ty,\;y(0)=2$ using Euler's Method with a given step size $h.$ Find the solution at $t=1$ in terms of $h.$ *Hint*: Here is "pseudo-code" for how to write a computer program to perform Euler's Method for $y'=f(t,y),y(0)={y}_{0}\text{:}$
- Create function $f(t,y).$
- Define parameters $y(0)={y}_{0},\;t(0)=0,$ step size $h,$ and total number of steps, $N$
- Write a *for* loop:
              
                  *for*
                  $\text{k}=0\;\text{to}\;N$
              
              
                  $\hspace{2em}\text{fn}=\text{f}(\text{t}(\text{k}),\text{y}(\text{k}))$
              
              
                  $\hspace{2em}\text{y}(\text{k+1})=\text{y}(\text{k})+\text{h*fn}$
              
              
                  $\hspace{2em}\text{t}(\text{k+1})=\text{t}(\text{k})+\text{h}$
:::
Refer to your answer for [ref:fs-id1170571233975] to solve the following exercises.

:::exercise {fs-id1170571433817} type= 
PROBLEM:
Solve the initial-value problem for the exact solution.
SOLUTION:
$y'=2{e}^{{t}^{2}\text{/}2}$
:::

:::exercise {fs-id1170571433857} type= 
PROBLEM:
Draw the directional field
:::

:::exercise {fs-id1170571099338} type= 
PROBLEM:
Compute using $h=1$
SOLUTION:
$2$
:::

:::exercise {fs-id1170571099364} type= 
PROBLEM:
Compute using **[T]** $h=0.1$
:::

:::exercise {fs-id1170571099396} type= 
PROBLEM:
Compute using **[T]** $h=0.001$
SOLUTION:
$3.2756$
:::

:::exercise {fs-id1170571099427} type= 
PROBLEM:
Compute using **[T]** $h=0.0001$
:::

:::exercise {fs-id1170571450464} type= 
PROBLEM:
**[T]** Evaluate the exact solution at $t=1.$ Make a table of errors for the relative error between the Euler’s method solution and the exact solution. How much does the error change? Can you explain?
SOLUTION:
$2\sqrt{e}$

> TABLE {tab:fs-id1170571450509} cols=2 class=unnumbered
> summary: A table with two columns and five rows. The first column contains the label “Step Size” and the values h = 1, h=10, h=100, and h=1000. The second column contains the label “Error” and the values 0.3935, 0.06163, 0.006612, and 0.0006661.

| Step Size | Relative Error |
| --- | --- |
| $h=0.1$ | $0.3935$ |
| $h=0.01$ | $0.06163$ |
| $h=0.001$ | $0.006612$ |
| $h=0.0001$ | $0.0006661$ |

:::
Consider the initial-value problem $y'=−2y,\;y(0)=2.$

:::exercise {fs-id1170571051865} type= 
PROBLEM:
Show that $y=2{e}^{−2x}$ solves this initial-value problem.
:::

:::exercise {fs-id1170571051893} type= 
PROBLEM:
Draw the directional field of this differential equation.
SOLUTION:

> IMAGE {img:fs-id1170571051906} src=../../media/CNX_Calc_Figure_08_02_223.jpg
> alt: A direction field with horizontal arrows pointing to the right on the x axis. Above the x axis, the arrows point down and to the right. Below the x axis, the arrows point up and to the right. The closer the arrows are to the x axis, the more horizontal the arrows are, and the further away they are from the x axis, the more vertical the arrows are.

:::

:::exercise {fs-id1170571021712} type= 
PROBLEM:
**[T]** By hand or by calculator or computer, approximate the solution using Euler’s Method at $t=10$ using $h=5.$
:::

:::exercise {fs-id1170571021757} type= 
PROBLEM:
**[T]** By calculator or computer, approximate the solution using Euler’s Method at $t=10$ using $h=100.$
SOLUTION:
$4.0741{e}^{−10}$
:::

:::exercise {fs-id1170571021808} type= 
PROBLEM:
**[T]** Plot exact answer and each Euler approximation (for $h=5$ and $h=100)$ at each $h$ on the directional field. What do you notice?
:::

## Glossary
- {def} **asymptotically semi-stable solution**: $y=k$ if it is neither asymptotically stable nor asymptotically unstable
- {def} **asymptotically stable solution**: $y=k$ if there exists $ε>0$ such that for any value $c\in (k-ε,k+ε)$ the solution to the initial-value problem ${y}^{'}=f(x,y),\;y({x}_{0})=c$ approaches $k$ as $x$ approaches infinity
- {def} **asymptotically unstable solution**: $y=k$ if there exists $ε>0$ such that for any value $c\in (k-ε,k+ε)$ the solution to the initial-value problem ${y}^{'}=f(x,y),\;y({x}_{0})=c$ never approaches $k$ as $x$ approaches infinity
- {def} **direction field (slope field)**: a mathematical object used to graphically represent solutions to a first-order differential equation; at each point in a direction field, a line segment appears whose slope is equal to the slope of a solution to the differential equation passing through that point
- {def} **equilibrium solution**: any solution to the differential equation of the form $y=c,$ where $c$ is a constant
- {def} **Euler’s Method**: a numerical technique used to approximate solutions to an initial-value problem
- {def} **solution curve**: a curve graphed in a direction field that corresponds to the solution to the initial-value problem passing through a given point in the direction field
- {def} **step size**: the increment $h$ that is added to the $x$ value at each step in Euler’s Method

# Basic Classes of Functions

## Learning Objectives {section:learning-objectives}
- Calculate the slope of a linear function and interpret its meaning.
- Recognize the degree of a polynomial.
- Find the roots of a quadratic polynomial.
- Describe the graphs of basic odd and even polynomial functions.
- Identify a rational function.
- Describe the graphs of power and root functions.
- Explain the difference between algebraic and transcendental functions.
- Graph a piecewise-defined function.
- Sketch the graph of a function that has been shifted, stretched, or reflected from its initial graph position.

We have studied the general characteristics of functions, so now let’s examine some specific classes of functions. We begin by reviewing the basic properties of linear and quadratic functions, and then generalize to include higher-degree polynomials. By combining root functions with polynomials, we can define general algebraic functions and distinguish them from the transcendental functions we examine later in this chapter. We finish the section with examples of piecewise-defined functions and take a look at how to sketch the graph of a function that has been shifted, stretched, or reflected from its initial form.

## Linear Functions and Slope
The easiest type of function to consider is a {term:linear function}. Linear functions have the form $f(x)=ax+b,$ where $a$ and $b$ are constants. In [ref:CNX_Calc_Figure_01_02_001], we see examples of linear functions when $a$ is positive, negative, and zero. Note that if $a>0,$ the graph of the line rises as $x$ increases. In other words, $f(x)=ax+b$ is increasing on $\text{(−∞, ∞)}.$ If $a<0,$ the graph of the line falls as $x$ increases. In this case, $f(x)=ax+b$ is decreasing on $\text{(−∞, ∞)}.$ If $a=0,$ the line is horizontal.

> FIGURE {fig:CNX_Calc_Figure_01_02_001} src=../../media/CNX_Calc_Figure_01_02_001.jpg
> alt: An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the 3 functions. The first function is “f(x) = 3x + 1”, which is an increasing straight line with an x intercept at ((-1/3), 0) and a y intercept at (0, 1). The second function is “g(x) = 2”, which is a horizontal line with a y intercept at (0, 2) and no x intercept. The third function is “h(x) = (-1/2)x”, which is a decreasing straight line with an x intercept and y intercept both at the origin. The function f(x) is increasing at a higher rate than the function h(x) is decreasing.
> caption: These linear functions are increasing or decreasing on $\text{(-∞, ∞)}$ and one function is a horizontal line.

As suggested by [ref:CNX_Calc_Figure_01_02_001], the graph of any linear function is a line. One of the distinguishing features of a line is its slope. The {term:slope} is the change in $y$ for each unit change in $x.$ The slope measures both the steepness and the direction of a line. If the slope is positive, the line points upward when moving from left to right. If the slope is negative, the line points downward when moving from left to right. If the slope is zero, the line is horizontal. To calculate the slope of a line, we need to determine the ratio of the change in $y$ versus the change in $x.$ To do so, we choose any two points $({x}_{1},{y}_{1})$ and $({x}_{2},{y}_{2})$ on the line and calculate $\frac{{y}_{2}-{y}_{1}}{{x}_{2}-{x}_{1}}.$ In [ref:CNX_Calc_Figure_01_02_002], we see this ratio is independent of the points chosen.

> FIGURE {fig:CNX_Calc_Figure_01_02_002} src=../../media/CNX_Calc_Figure_01_02_021.jpg
> alt: An image of a graph. The y axis runs from -1 to 10 and the x axis runs from -1 to 6. The graph is of a function that is an increasing straight line. There are four points labeled on the function at (1, 1), (2, 3), (3, 5), and (5, 9). There is a dotted horizontal line from the labeled function point (1, 1) to the unlabeled point (3, 1) which is not on the function, and then dotted vertical line from the unlabeled point (3, 1), which is not on the function, to the labeled function point (3, 5). These two dotted have the label “(y2 - y1)/(x2 - x1) = (5 -1)/(3 - 1) = 2”. There is a dotted horizontal line from the labeled function point (2, 3) to the unlabeled point (5, 3) which is not on the function, and then dotted vertical line from the unlabeled point (5, 3), which is not on the function, to the labeled function point (5, 9). These two dotted have the label “(y2 - y1)/(x2 - x1) = (9 -3)/(5 - 2) = 2”.
> caption: For any linear function, the slope $({y}_{2}-{y}_{1})\text{/}({x}_{2}-{x}_{1})$ is independent of the choice of points $({x}_{1},{y}_{1})$ and $({x}_{2},{y}_{2})$ on the line.

:::note [definition] Definition
Consider line $L$ passing through points $({x}_{1},{y}_{1})$ and $({x}_{2},{y}_{2}).$ Let $\text{Δ}y={y}_{2}-{y}_{1}$ and $\text{Δ}x={x}_{2}-{x}_{1}$ denote the changes in $y$ and $x,$ respectively. The **slope** of the line is

$$ m=\frac{{y}_{2}-{y}_{1}}{{x}_{2}-{x}_{1}}=\frac{\text{Δ}y}{\text{Δ}x}. $$  {eq:fs-id1170573414443}

:::
We now examine the relationship between slope and the formula for a linear function. Consider the linear function given by the formula $f(x)=ax+b.$ As discussed earlier, we know the graph of a linear function is given by a line. We can use our definition of slope to calculate the slope of this line. As shown, we can determine the slope by calculating $({y}_{2}-{y}_{1})\text{/}({x}_{2}-{x}_{1})$ for any points $({x}_{1},{y}_{1})$ and $({x}_{2},{y}_{2})$ on the line. Evaluating the function $f$ at $x=0,$ we see that $(0,b)$ is a point on this line. Evaluating this function at $x=1,$ we see that $(1,a+b)$ is also a point on this line. Therefore, the slope of this line is

$\frac{(a+b)-b}{1-0}=a.$  {eq:fs-id1170573263457}

We have shown that the coefficient $a$ is the slope of the line. We can conclude that the formula $f(x)=ax+b$ describes a line with slope $a.$ Furthermore, because this line intersects the $y$-axis at the point $(0,b),$ we see that the $y$-intercept for this linear function is $(0,b).$ We conclude that the formula $f(x)=ax+b$ tells us the slope, $a,$ and the $y$-intercept, $(0,b),$ for this line. Since we often use the symbol $m$ to denote the slope of a line, we can write

$f(x)=mx+b$  {eq:fs-id1170573262665}

to denote the {term:slope-intercept form} of a linear function.
Sometimes it is convenient to express a linear function in different ways. For example, suppose the graph of a linear function passes through the point $({x}_{1},{y}_{1})$ and the slope of the line is $m.$ Since any other point $(x,f(x))$ on the graph of $f$ must satisfy the equation

$m=\frac{f(x)-{y}_{1}}{x-{x}_{1}},$  {eq:fs-id1170573299395}

this linear function can be expressed by writing

$f(x)-{y}_{1}=m(x-{x}_{1}).$  {eq:fs-id1170573583649}

We call this equation the {term:point-slope equation} for that linear function.
Since every nonvertical line is the graph of a linear function, the points on a nonvertical line can be described using the slope-intercept or point-slope equations. However, a vertical line does not represent the graph of a function and cannot be expressed in either of these forms. Instead, a vertical line is described by the equation $x=k$ for some constant $k.$ Since neither the slope-intercept form nor the point-slope form allows for vertical lines, we use the notation

$ax+by=c,$  {eq:fs-id1170573418048}

where $a,b$ are both not zero, to denote the {term:standard form of a line}.

:::note [definition] Definition
Consider a line passing through the point $({x}_{1},{y}_{1})$ with slope $m.$ The equation

$$ y-{y}_{1}=m(x-{x}_{1}) $$  {eq:fs-id1170573382468}

is the **point-slope equation** for that line.
Consider a line with slope $m$ and $y$-intercept $(0,b).$ The equation

$$ y=mx+b $$  {eq:fs-id1170573240220}

is an equation for that line in **slope-intercept form**.
The **standard form of a line** is given by the equation

$$ ax+by=c, $$  {eq:fs-id1170573399196}

where $a$ and $b$ are not both zero. This form is more general because it allows for a vertical line, $x=k.$
:::

:::example {ex:fs-id1170573262524} Finding the Slope and Equations of Lines

:::exercise {fs-id1170573422016} type= 
PROBLEM:
Consider the line passing through the points $(11,−4)$ and $(−4,5),$ as shown in [ref:CNX_Calc_Figure_01_02_003].

> FIGURE {fig:CNX_Calc_Figure_01_02_003} src=../../media/CNX_Calc_Figure_01_02_002.jpg
> alt: An image of a graph. The x axis runs from -5 to 12 and the y axis runs from -5 to 6. The graph is of the function that is a decreasing straight line. The function has two points plotted, at (-4, 5) and (11, 4).
> caption: Finding the equation of a linear function with a graph that is a line between two given points.

a. Find the slope of the line.
b. Find an equation for this linear function in point-slope form.
c. Find an equation for this linear function in slope-intercept form.
SOLUTION:
a. The slope of the line is

$m=\frac{{y}_{2}-{y}_{1}}{{x}_{2}-{x}_{1}}=\frac{5-(−4)}{−4-11}=-\frac{9}{15}=-\frac{3}{5}.$  {eq:fs-id1170573334269}

b. To find an equation for the linear function in point-slope form, use the slope $m=−3\text{/}5$ and choose any point on the line. If we choose the point $(11,−4),$ we get the equation

$f(x)+4=-\frac{3}{5}(x-11).$  {eq:fs-id1170573268080}

c. To find an equation for the linear function in slope-intercept form, solve the equation in part b. for $f(x).$ When we do this, we get the equation

$f(x)=-\frac{3}{5}x+\frac{13}{5}.$  {eq:fs-id1170573274197}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573238856} type= 
PROBLEM:
Consider the line passing through points $(−3,2)$ and $(1,4).$ Find the slope of the line.
Find an equation of that line in point-slope form. Find an equation of that line in slope-intercept form.
SOLUTION:
$m=1\text{/}2.$ The point-slope form is
$y-4=\frac{1}{2}(x-1).$
The slope-intercept form is
$y=\frac{1}{2}x+\frac{7}{2}.$
COMMENTARY: Hint
The slope $m=\text{Δ}y\text{/}\text{Δ}x\text{.}$
:::
:::

:::example {ex:fs-id1170573575076} A Linear Distance Function

:::exercise {fs-id1170573512412} type= 
PROBLEM:
Jessica leaves her house at 5:50 a.m. and goes for a 9-mile run. She returns to her house at 7:08 a.m. Answer the following questions, assuming Jessica runs at a constant pace.
a. Describe the distance $D$ (in miles) Jessica runs as a linear function of her run time $t$ (in minutes).
b. Sketch a graph of $D.$
c. Interpret the meaning of the slope.
SOLUTION:
a. At time $t=0,$ Jessica is at her house, so $D(0)=0.$ At time $t=78$ minutes, Jessica has finished running $9$ mi, so $D(78)=9.$ The slope of the linear function is

$m=\frac{9-0}{78-0}=\frac{3}{26}.$  {eq:fs-id1170573404013}

The $y$-intercept is $(0,0),$ so the equation for this linear function is

$D(t)=\frac{3}{26}t.$  {eq:fs-id1170573573845}

b. To graph $D,$ use the fact that the graph passes through the origin and has slope $m=3\text{/}26.$

> IMAGE {img:fs-id1170573533941} src=../../media/CNX_Calc_Figure_01_02_003.jpg
> alt: An image of a graph. The y axis is labeled “y, distance in miles”. The x axis is labeled “t, time in minutes”. The graph is of the function “D(t) = 3t/26”, which is an increasing straight line that starts at the origin. The function ends at the plotted point (78, 9).

c. The slope $m=3\text{/}26\approx 0.115$ describes the distance (in miles) Jessica runs per minute, or her average velocity.
:::
:::

## Polynomials
A linear function is a special type of a more general class of functions: polynomials. A {term:polynomial function} is any function that can be written in the form

$$ f(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{…}+{a}_{1}x+{a}_{0} $$  {eq:fs-id1170573359094}

for some integer $n\ge 0$ and constants ${a}_{n},{a}_{n-1}\text{,…,}{a}_{0},$ where ${a}_{n}≠0.$ In the case when $n=0,$ we allow for ${a}_{0}=0;$ if ${a}_{0}=0,$ the function $f(x)=0$ is called the *zero function*. The value $n$ is called the {term:degree} of the polynomial; the constant ${a}_{n}$ is called the {index:*leading coefficient*}. A linear function of the form $f(x)=mx+b$ is a polynomial of degree 1 if $m≠0$ and degree 0 if $m=0.$ A polynomial of degree 0 is also called a {index:*constant function*}. A polynomial function of degree 2 is called a {term:quadratic function}. In particular, a quadratic function has the form $f(x)=a{x}^{2}+bx+c,$ where $a≠0.$ A polynomial function of degree $3$ is called a {term:cubic function}.

### Power Functions
Some polynomial functions are power functions. A {term:power function} is any function of the form $f(x)=a{x}^{b},$ where $a$ and $b$ are any real numbers. The exponent in a power function can be any real number, but here we consider the case when the exponent is a positive integer. (We consider other cases later.) If the exponent is a positive integer, then $f(x)=a{x}^{n}$ is a polynomial. If $n$ is even, then $f(x)=a{x}^{n}$ is an even function because $f(\text{−}\text{x})=a{(\text{−}\text{x})}^{n}=a{x}^{n}$ if $n$ is even. If $n$ is odd, then $f(x)=a{x}^{n}$ is an odd function because $f(\text{−}\text{x})=a{(\text{−}\text{x})}^{n}=\text{−}a{x}^{n}$ if $n$ is odd ([ref:CNX_Calc_Figure_01_02_004]).

> FIGURE {fig:CNX_Calc_Figure_01_02_004} src=../../media/CNX_Calc_Figure_01_02_004.jpg
> alt: An image of two graphs. Both graphs have an x axis that runs from -4 to 4 and a y axis that runs from -6 to 7. The first graph is labeled “a” and is of two functions. The first function is “f(x) = x to the 4th”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin, but increases and decreases at a slower rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = x to the 5th”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin. The second function is “f(x) = x cubed”, which is a curved function that increases until the origin, becomes even at the origin, and then increases again after the origin, but increases at a slower rate than the first function.
> caption: (a) For any even integer $n,f(x)=a{x}^{n}$ is an even function. (b) For any odd integer $n,f(x)=a{x}^{n}$ is an odd function.

### Behavior at Infinity
To determine the behavior of a function $f$ as the inputs approach infinity, we look at the values $f(x)$ as the inputs, $x,$ become larger. For some functions, the values of $f(x)$ approach a finite number. For example, for the function $f(x)=2+1\text{/}x,$ the values $1\text{/}x$ become closer and closer to zero for all values of $x$ as they get larger and larger. For this function, we say $\text{“}f(x)$ approaches two as $x$ goes to infinity,” and we write $f(x)\to 2$ as $x\to \infty .$ The line $y=2$ is a horizontal asymptote for the function $f(x)=2+1\text{/}x$ because the graph of the function gets closer to the line as $x$ gets larger.
For other functions, the values $f(x)$ may not approach a finite number but instead may become larger for all values of $x$ as they get larger. In that case, we say $\text{“}f(x)$ approaches infinity as $x$ approaches infinity,” and we write $f(x)\to \infty$ as $x\to \infty .$ For example, for the function $f(x)=3{x}^{2},$ the outputs $f(x)$ become larger as the inputs $x$ get larger. We can conclude that the function $f(x)=3{x}^{2}$ approaches infinity as $x$ approaches infinity, and we write $3{x}^{2}\to \infty$ as $x\to \infty .$ The behavior as $x\to \text{−}\infty$ and the meaning of $f(x)\to \text{−}\infty$ as $x\to \infty$ or $x\to \text{−}\infty$ can be defined similarly. We can describe what happens to the values of $f(x)$ as $x\to \infty$ and as $x\to \text{−}\infty$ as the {index:*end behavior*} of the function.
To understand the end behavior for polynomial functions, we can focus on quadratic and cubic functions. The behavior for higher-degree polynomials can be analyzed similarly. Consider a quadratic function $f(x)=a{x}^{2}+bx+c.$ If $a>0,$ the values $f(x)\to \infty$ as $x\to \text{±}\infty .$ If $a<0,$ the values $f(x)\to \text{−∞}$ as $x\to \text{±}\infty .$ Since the graph of a quadratic function is a parabola, the parabola opens upward if $a>0;$ the parabola opens downward if $a<0.$ (See [ref:CNX_Calc_Figure_01_02_005](a).)
Now consider a cubic function $f(x)=a{x}^{3}+b{x}^{2}+cx+d.$ If $a>0,$ then $f(x)\to \infty$ as $x\to \infty$ and $f(x)\to \text{−∞}$ as $x\to \text{−∞}.$ If $a<0,$ then $f(x)\to \text{−∞}$ as $x\to \infty$ and $f(x)\to \infty$ as $x\to \text{−∞}.$ As we can see from both of these graphs, the leading term of the polynomial determines the end behavior. (See [ref:CNX_Calc_Figure_01_02_005](b).)

> FIGURE {fig:CNX_Calc_Figure_01_02_005} src=../../media/CNX_Calc_Figure_01_02_005.jpg
> alt: An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 5 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x squared) - 4x -4”, which is a parabola. The function increasing until it hits the maximum at the point (-2, 0) and then begins decreasing. The x intercept is at (-2, 0) and the y intercept is at (0, -4). The second function is “f(x) = 2(x squared) -12x + 16”, which is a parabola. The function decreases until it hits the minimum point at (3, -2) and then begins increasing. The x intercepts are at (2, 0) and (4, 0) and the y intercept is not shown. The second graph is labeled “b” and has an x axis that runs from -4 to 3 and a y axis that runs from -4 to 6. The graph contains two functions. The first function is “f(x) = -(x cubed) - 3(x squared) + x + 3”. The graph decreases until the approximate point at (-2.2, -3.1), then increases until the approximate point at (0.2, 3.1), then begins decreasing again. The x intercepts are at (-3, 0), (-1, 0), and (1, 0). The y intercept is at (0, 3). The second function is “f(x) = (x cubed) -3(x squared) + 3x - 1”. It is a curved function that increases until the point (1, 0), where it levels out. After this point, the function begins increasing again. It has an x intercept at (1, 0) and a y intercept at (0, -1).
> caption: (a) For a quadratic function, if the leading coefficient $a>0,$ the parabola opens upward. If $a<0,$ the parabola opens downward. (b) For a cubic function $f,$ if the leading coefficient $a>0,$ the values $f(x)\to \infty$ as $x\to \infty$ and the values $f(x)\to \text{−∞}$ as $x\to \text{−∞}.$ If the leading coefficient $a<0,$ the opposite is true.

### Zeros of Polynomial Functions
Another characteristic of the graph of a polynomial function is where it intersects the $x$-axis. To determine where a function $f$ intersects the $x$-axis, we need to solve the equation $f(x)=0$ for *x*. In the case of the linear function $f(x)=mx+b,$ the $x$-intercept is given by solving the equation $mx+b=0.$ In this case, we see that the $x$-intercept is given by $(\text{−}\text{b}\text{/}m,0).$ In the case of a quadratic function, finding the $x$-intercept(s) requires finding the zeros of a quadratic equation: $a{x}^{2}+bx+c=0.$ In some cases, it is easy to factor the polynomial $a{x}^{2}+bx+c$ to find the zeros. If not, we make use of the quadratic formula.

:::note [rule] Rule: The Quadratic Formula
Consider the quadratic equation

$a{x}^{2}+bx+c=0,$  {eq:fs-id1170573438567}

where $a≠0.$ The solutions of this equation are given by the quadratic formula

$$ x=\frac{\text{−}b\pm \sqrt{{b}^{2}-4ac}}{2a}. $$  {eq:fs-id1170573421988}

If the discriminant ${b}^{2}-4ac>0,$ this formula tells us there are two real numbers that satisfy the quadratic equation. If ${b}^{2}-4ac=0,$ this formula tells us there is only one solution, and it is a real number. If ${b}^{2}-4ac<0,$ no real numbers satisfy the quadratic equation.
:::
In the case of higher-degree polynomials, it may be more complicated to determine where the graph intersects the $x$-axis. In some instances, it is possible to find the $x$-intercepts by factoring the polynomial to find its zeros. In other cases, it is impossible to calculate the exact values of the $x$-intercepts. However, as we see later in the text, in cases such as this, we can use analytical tools to approximate (to a very high degree) where the $x$-intercepts are located. Here we focus on the graphs of polynomials for which we can calculate their zeros explicitly.

:::example {ex:fs-id1170573413697} Graphing Polynomial Functions

:::exercise {fs-id1170573356404} type= 
PROBLEM:
For the following functions a. and b., i. describe the behavior of $f(x)$ as $x\to \text{±}\infty ,$ ii. find all zeros of $f,$ and iii. sketch a graph of $f.$
a. $f(x)=−2{x}^{2}+4x-1$
b. $f(x)={x}^{3}-3{x}^{2}-4x$
SOLUTION:
a. The function $f(x)=−2{x}^{2}+4x-1$ is a quadratic function.

1. Because $a=−2<0,\text{as}\;x\to \text{±}\infty ,f(x)\to \text{−∞.}$
2. To find the zeros of $f,$ use the quadratic formula. The zeros are

$x=\frac{−4\pm \sqrt{{4}^{2}-4(−2)(−1)}}{2(−2)}=\frac{−4\pm \sqrt{8}}{−4}=\frac{−4\pm 2\sqrt{2}}{−4}=\frac{2\pm \sqrt{2}}{2}.$  {eq:fs-id1170573419021}

3. To sketch the graph of $f,$ use the information from your previous answers and combine it with the fact that the graph is a parabola opening downward.

> IMAGE {img:fs-id1170573415170} src=../../media/CNX_Calc_Figure_01_02_006.jpg
> alt: An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -8 to 2. The graph is of the function “f(x) = -2(x squared) + 4x - 1”, which is a parabola. The function increases until the maximum point at (1, 1) and then decreases. Both x intercept points are plotted on the function, at approximately (0.2929, 0) and (1.7071, 0). The y intercept is at the point (0, -1).

b. The function $f(x)={x}^{3}-3{x}^{2}-4x$ is a cubic function.

1. Because $a=1>0,\text{as}\;x\to \infty ,f(x)\to \infty .$ As $x\to \text{−∞},f(x)\to \text{−∞}.$
2. To find the zeros of $f,$ we need to factor the polynomial. First, when we factor $x$ out of all the terms, we find

$f(x)=x({x}^{2}-3x-4).$  {eq:fs-id1170573501851}

Then, when we factor the quadratic function ${x}^{2}-3x-4,$ we find

$f(x)=x(x-4)(x+1).$  {eq:fs-id1170573575035}

Therefore, the zeros of $f$ are $x=0,4,−1.$
3. Combining the results from parts i. and ii., draw a rough sketch of $f.$

> IMAGE {img:fs-id1170573352471} src=../../media/CNX_Calc_Figure_01_02_007.jpg
> alt: An image of a graph. The x axis runs from -2 to 5 and the y axis runs from -14 to 7. The graph is of the curved function “f(x) = (x cubed) - 3(x squared) - 4x”. The function increases until the approximate point at (-0.5, 1.1), then decreases until the approximate point (2.5, -13.1), then begins increasing again. The x intercept points are plotted on the function, at (-1, 0), (0, 0), and (4, 0). The y intercept is at the origin.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573352546} type= 
PROBLEM:
Consider the quadratic function $f(x)=3{x}^{2}-6x+2.$ Find the zeros of $f.$ Does the parabola open upward or downward?
SOLUTION:
The zeros are $x=1\pm \sqrt{3}\text{/}3.$ The parabola opens upward.
COMMENTARY: Hint
Use the quadratic formula.
:::
:::

### Mathematical Models
A large variety of real-world situations can be described using {term:mathematical models}. A mathematical model is a method of simulating real-life situations with mathematical equations. Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. Models are useful because they help predict future outcomes. Examples of mathematical models include the study of population dynamics, investigations of weather patterns, and predictions of product sales.
As an example, let’s consider a mathematical model that a company could use to describe its revenue for the sale of a particular item. The amount of revenue $R$ a company receives for the sale of $n$ items sold at a price of $p$ dollars per item is described by the equation $R=p\cdot n.$ The company is interested in how the sales change as the price of the item changes. Suppose the data in [ref:fs-id1170573493744] show the number of units a company sells as a function of the price per item.

> TABLE {tab:fs-id1170573493744} cols=6 class=column-header
> title: Number of Units Sold $n$ (in Thousands) as a Function of Price per Unit $p$ (in Dollars)
> summary: A table with 2 rows and 5 columns. The first row is labeled “p” and has the values “6; 8; 10; 12; 14”. The second row is labeled “n” and has the values “19.4; 18.5; 16.2; 13.8; 12.2”.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| $\text{p}$ | $6$ | $8$ | $10$ | $12$ | $14$ |
| $\text{n}$ | $19.4$ | $18.5$ | $16.2$ | $13.8$ | $12.2$ |

In [ref:CNX_Calc_Figure_01_02_008], we see the graph the number of units sold (in thousands) as a function of price (in dollars). We note from the shape of the graph that the number of units sold is likely a linear function of price per item, and the data can be closely approximated by the linear function $n=−1.04p+26$ for $0\le p\le 25,$ where $n$ predicts the number of units sold in thousands. Using this linear function, the revenue (in thousands of dollars) can be estimated by the quadratic function

$R(p)=p\cdot (−1.04p+26)=−1.04{p}^{2}+26p$  {eq:fs-id1170573574835}

for $0\le p\le 25.$ In [ref:fs-id1170573569241], we use this quadratic function to predict the amount of revenue the company receives depending on the price the company charges per item. Note that we cannot conclude definitively the actual number of units sold for values of $p,$ for which no data are collected. However, given the other data values and the graph shown, it seems reasonable that the number of units sold (in thousands) if the price charged is $p$ dollars may be close to the values predicted by the linear function $n=−1.04p+26.$

> FIGURE {fig:CNX_Calc_Figure_01_02_008} src=../../media/CNX_Calc_Figure_01_02_008.jpg
> alt: An image of a graph. The y axis runs from 0 to 28 and is labeled “n, units sold in thousands”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04p + 26”, which is a decreasing line function that starts at the y intercept point (0, 26). There are 5 points plotted on the graph at (6, 19.4), (8, 18.5), (10, 16.2), (12, 13.8), and (14, 12.2). The points are not on the graph of the function line, but are very close to it. The function has an x intercept at the point (25, 0).
> caption: The data collected for the number of items sold as a function of price is roughly linear. We use the linear function $n=−1.04p+26$ to estimate this function.

:::example {ex:fs-id1170573569241} Maximizing Revenue

:::exercise {fs-id1170573417593} type= 
PROBLEM:
A company is interested in predicting the amount of revenue it will receive depending on the price it charges for a particular item. Using the data from [ref:fs-id1170573493744], the company arrives at the following quadratic function to model revenue $R$ (in thousands of dollars) as a function of price per item $p\text{:}$

$R(p)=p\cdot (−1.04p+26)=−1.04{p}^{2}+26p$  {eq:fs-id1170573569680}

for $0\le p\le 25.$
a. Predict the revenue if the company sells the item at a price of $p=\text{\$}5$ and $p=\text{\$}17.$
b. Find the zeros of this function and interpret the meaning of the zeros.
c. Sketch a graph of $R.$
d. Use the graph to determine the value of $p$ that maximizes revenue. Find the maximum revenue.
SOLUTION:
a. Evaluating the revenue function at $p=5$ and $p=17,$ we can conclude that

$\begin{array}{l} \\ R(5)=−1.04{(5)}^{2}+26(5)=104,\;\text{so revenue}\;=\;\text{\$104,000;} \\ R(17)=−1.04{(17)}^{2}+26(17)=141.44,\;\text{so revenue}\;=\;\text{\$141,440.}\end{array}$  {eq:fs-id1170573413586}

b. The zeros of this function can be found by solving the equation $−1.04{p}^{2}+26p=0.$ When we factor the quadratic expression, we get $p(−1.04p+26)=0.$ The solutions to this equation are given by $p=0,25.$ For these values of $p,$ the revenue is zero. When $p=\text{\$}0,$ the revenue is zero because the company is giving away its merchandise for free. When $p=\text{\$}25,$ the revenue is zero because the price is too high, and no one will buy any items.
c. Knowing the fact that the function is quadratic, we also know the graph is a parabola. Since the leading coefficient is negative, the parabola opens downward. One property of parabolas is that they are symmetric about the axis, so since the zeros are at $p=0$ and $p=25,$ the parabola must be symmetric about the line halfway between them, or $p=12.5.$

> IMAGE {img:fs-id1170573360046} src=../../media/CNX_Calc_Figure_01_02_009.jpg
> alt: An image of a graph. The y axis runs from 0 to 170 and is labeled “R, revenue in thousands of dollars”. The x axis runs from 0 to 28 and is labeled “p, price in dollars”. The graph is of the function “n = -1.04(p squared) + 26p”, which is a parabola that starts at the origin. The function increases until the maximum point at (12.5, 162.5) and then begins decreasing. The function has x intercepts at the origin and the point (25, 0). The y intercept is at the origin.

d. The function is a parabola with zeros at $p=0$ and $p=25,$ and it is symmetric about the line $p=12.5,$ so the maximum revenue occurs at a price of $p=\text{\$}12.50$ per item. At that price, the revenue is $R(p)=−1.04{(12.5)}^{2}+26(12.5)=\text{\$}162,500.$
:::
:::

## Algebraic Functions
By allowing for quotients and fractional powers in polynomial functions, we create a larger class of functions. An {term:algebraic function} is one that involves addition, subtraction, multiplication, division, rational powers, and roots. Two types of algebraic functions are rational functions and root functions.
Just as rational numbers are quotients of integers, rational functions are quotients of polynomials. In particular, a {term:rational function} is any function of the form $f(x)=p(x)\text{/}q(x),$ where $p(x)$ and $q(x)$ are polynomials. For example,

$f(x)=\frac{3x-1}{5x+2}\hspace{3em}\text{and}\hspace{3em}g(x)=\frac{4}{{x}^{2}+1}$  {eq:fs-id1170573380708}

are rational functions. A {term:root function} is a power function of the form $f(x)={x}^{1\text{/}n},$ where $n$ is a positive integer greater than one. For example, $f(x)={x}^{1\text{/}2}=\sqrt{x}$ is the square-root function and $g(x)={x}^{1\text{/}3}=\sqrt[3]{x}$ is the cube-root function. By allowing for compositions of root functions and rational functions, we can create other algebraic functions. For example, $f(x)=\sqrt{4-{x}^{2}}$ is an algebraic function.

:::example {ex:fs-id1170573533981} Finding Domain and Range for Algebraic Functions

:::exercise {fs-id1170573533986} type= 
PROBLEM:
For each of the following functions, find the domain and range.
a. $f(x)=\frac{3x-1}{5x+2}$
b. $f(x)=\sqrt{4-{x}^{2}}$
SOLUTION:
a. It is not possible to divide by zero, so the domain is the set of real numbers $x$ such that $x≠\text{−}2\text{/}5.$ To find the range, we need to find the values $y$ for which there exists a real number $x$ such that

$y=\frac{3x-1}{5x+2}.$  {eq:fs-id1170573534310}

When we multiply both sides of this equation by $5x+2,$ we see that $x$ must satisfy the equation

$5xy+2y=3x-1.$  {eq:fs-id1170573501882}

From this equation, we can see that $x$ must satisfy

$2y+1=x(3-5y).$  {eq:fs-id1170573438170}

If $y=3\text{/}5,$ this equation has no solution. On the other hand, as long as $y≠3\text{/}5,$

$x=\frac{2y+1}{3-5y}$  {eq:fs-id1170573352338}

satisfies this equation. We can conclude that the range of $f$ is $\{y|y≠3\text{/}5\}.$
b. To find the domain of $f$, we need to identify values of $x$ with $4-{x}^{2}\ge 0$. Note that $4-{x}^{2}=0$ when $x=2$ or $x=-2$. Solving $4-{x}^{2}>0$ is equivalent to solving $(2-x)(2+x)>0$. If this inequality is true, then both factors are positive or both are negative.

  Case 1: Both factors are positive.

  

$$ 2-x>0\text{and}2+x>0 $$  {eq:eq-00001}

  

$x<2\text{and}x>-2$  {eq:eq-00002}

  So, the expression $4-{x}^{2}$ is positive for all values in the interval $-2<x<2$.

  Case 2: Both factors are negative.
  

$$ 2-x<0\text{and}2+x<0 $$  {eq:eq-00003}

  

$$ x>2\text{and}x<-2 $$  {eq:eq-00004}

  There is no value of $x$ that can satisfy both inequalities.

  The domain of the function is $\{x|-2\le x\le 2\}$.
  To identify the range, note that if $-2\le x\le 2$, then $0\le 4-{x}^{2}\le 4$. Therefore, $0\le \sqrt{4-{x}^{2}}\le 2$. The range of $f$ is $\{y|0\le y\le 2\}$.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573502356} type= 
PROBLEM:
Find the domain and range for the function $f(x)=(5x+2)\text{/}(2x-1).$
SOLUTION:
The domain is the set of real numbers $x$ such that $x≠1\text{/}2.$ The range is the set $\{y|y≠5\text{/}2\}.$
COMMENTARY: Hint
The denominator cannot be zero. Solve the equation $y=(5x+2)\text{/}(2x-1)$ for $x$ to find the range.
:::
:::
The root functions $f(x)={x}^{1\text{/}n}$ have defining characteristics depending on whether $n$ is odd or even. For all even integers $n\ge 2,$ the domain of $f(x)={x}^{1\text{/}n}$ is the interval $[0,\infty ).$ For all odd integers $n\ge 1,$ the domain of $f(x)={x}^{1\text{/}n}$ is the set of all real numbers. Since ${x}^{1\text{/}n}={-(\text{−}\text{x})}^{1\text{/}n}$ for odd integers $n,f(x)={x}^{1\text{/}n}$ is an odd function if $n$ is odd. See the graphs of root functions for different values of $n$ in [ref:CNX_Calc_Figure_01_02_022].

> FIGURE {fig:CNX_Calc_Figure_01_02_022} src=../../media/CNX_Calc_Figure_01_02_022.jpg
> alt: An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -2 to 9 and a y axis that runs from -4 to 4. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = x to the 4th root”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function. The second graph is labeled “b” and has an x axis that runs from -8 to 8 and a y axis that runs from -4 to 4. The second graph is of two functions. The first function is “f(x) = cube root of x”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin. The second function is “f(x) = x to the 5th root”, which is a curved function that increases until the origin, becomes vertical at the origin, and then increases again after the origin, but increases at a slower rate than the first function.
> caption: (a) If $n$ is even, the domain of $f(x)=\sqrt[n]{x}$ is $[0,\infty ).$ (b) If $n$ is odd, the domain of $f(x)=\sqrt[n]{x}$ is $(\text{−∞},\infty )$ and the function $f(x)=\sqrt[n]{x}$ is an odd function.

:::example {ex:fs-id1170573415022} Finding Domains for Algebraic Functions

:::exercise {fs-id1170573415028} type= 
PROBLEM:
For each of the following functions, determine the domain of the function.
a. $f(x)=\frac{3}{{x}^{2}-1}$
b. $f(x)=\frac{2x+5}{3{x}^{2}+4}$
c. $f(x)=\sqrt{4-3x}$
d. $f(x)=\sqrt[3]{2x-1}$
SOLUTION:
a. You cannot divide by zero, so the domain is the set of values $x$ such that ${x}^{2}-1≠0.$ Therefore, the domain is $\{x|x≠\text{±}1\}.$
b. You need to determine the values of $x$ for which the denominator is zero. Since $3{x}^{2}+4\ge 4$ for all real numbers $x,$ the denominator is never zero. Therefore, the domain is $(\text{−∞},\infty ).$
c. Since the square root of a negative number is not a real number, the domain is the set of values $x$ for which $4-3x\ge 0.$ Therefore, the domain is $\{x|x\le 4\text{/}3\}.$
d. The cube root is defined for all real numbers, so the domain is the interval $\text{(−∞, ∞).}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573502742} type= 
PROBLEM:
Find the domain for each of the following functions: $f(x)=(5-2x)\text{/}({x}^{2}+2)$ and $g(x)=\sqrt{5x-1}.$
SOLUTION:
The domain of $f$ is $\text{(−∞, ∞).}$ The domain of $g$ is $\{x|x\ge 1\text{/}5\}.$
COMMENTARY: Hint
Determine the values of $x$ when the expression in the denominator of $f$ is nonzero, and find the values of $x$ when the expression inside the radical of $g$ is nonnegative.
:::
:::

## Transcendental Functions
Thus far, we have discussed algebraic functions. Some functions, however, cannot be described by basic algebraic operations. These functions are known as {term:transcendental functions} because they are said to “transcend,” or go beyond, algebra. The most common transcendental functions are trigonometric, exponential, and logarithmic functions. A *trigonometric function* relates the ratios of two sides of a right triangle. They are $sinx,cosx,tanx,cotx,secx,\text{and}\;cscx.$ (We discuss trigonometric functions later in the chapter.) An exponential function is a function of the form $f(x)={b}^{x},$ where the base $b>0,b≠1.$ A {term:logarithmic function} is a function of the form $f(x)={log}_{b}(x)$ for some constant $b>0,b≠1,$ where ${log}_{b}(x)=y$ if and only if ${b}^{y}=x.$ (We also discuss exponential and logarithmic functions later in the chapter.)

:::example {ex:fs-id1170573359428} Classifying Algebraic and Transcendental Functions

:::exercise {fs-id1170573359433} type= 
PROBLEM:
Classify each of the following functions, a. through c., as algebraic or transcendental.
a. $f(x)=\frac{\sqrt{{x}^{3}+1}}{4x+2}$
b. $f(x)={2}^{{x}^{2}}$
c. $f(x)=\text{sin}(2x)$
SOLUTION:
a. Since this function involves basic algebraic operations only, it is an algebraic function.
b. This function cannot be written as a formula that involves only basic algebraic operations, so it is transcendental. (Note that algebraic functions can only have powers that are rational numbers.)
c. As in part b., this function cannot be written using a formula involving basic algebraic operations only; therefore, this function is transcendental.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573420615} type= 
PROBLEM:
Is $f(x)=x\text{/}2$ an algebraic or a transcendental function?
SOLUTION:
Algebraic
:::
:::

## Piecewise-Defined Functions
Sometimes a function is defined by different formulas on different parts of its domain. A function with this property is known as a {term:piecewise-defined function}. The absolute value function is an example of a piecewise-defined function because the formula changes with the sign of $x\text{:}$

$f(x)=\left\{\begin{array}{l}\text{−}x,x<0 \\ x,x\ge 0\end{array}\right..$  {eq:fs-id1170573534060}

Other piecewise-defined functions may be represented by completely different formulas, depending on the part of the domain in which a point falls. To graph a piecewise-defined function, we graph each part of the function in its respective domain, on the same coordinate system. If the formula for a function is different for $x<a$ and $x>a,$ we need to pay special attention to what happens at $x=a$ when we graph the function. Sometimes the graph needs to include an open or closed circle to indicate the value of the function at $x=a.$ We examine this in the next example.

:::example {ex:fs-id1170573574369} Graphing a Piecewise-Defined Function

:::exercise {fs-id1170573574375} type= 
PROBLEM:
Sketch a graph of the following piecewise-defined function:

$f(x)=\left\{\begin{array}{l}x+3,\hspace{3em}x<1 \\ {(x-2)}^{2},\hspace{1.5em}x\ge 1\end{array}\right..$  {eq:fs-id1170573574382}

SOLUTION:
Graph the linear function $y=x+3$ on the interval $(\text{−∞},1)$ and graph the quadratic function $y={(x-2)}^{2}$ on the interval $[1,\infty ).$ Since the value of the function at $x=1$ is given by the formula $f(x)={(x-2)}^{2},$ we see that $f(1)=1.$ To indicate this on the graph, we draw a closed circle at the point $(1,1).$ The value of the function is given by $f(x)=x+3$ for all $x<1,$ but not at $x=1.$ To indicate this on the graph, we draw an open circle at $(1,4).$

> FIGURE {fig:CNX_Calc_Figure_01_02_011} src=../../media/CNX_Calc_Figure_01_02_011.jpg
> alt: An image of a graph. The x axis runs from -7 to 5 and the y axis runs from -4 to 6. The graph is of a function that has two pieces. The first piece is an increasing line that ends at the open circle point (1, 4) and has the label “f(x) = x + 3, for x < 1”. The second piece is parabolic and begins at the closed circle point (1, 1). After the point (1, 1), the piece begins to decrease until the point (2, 0) then begins to increase. This piece has the label “f(x) = (x - 2) squared, for x >= 1”.The function has x intercepts at (-3, 0) and (2, 0) and a y intercept at (0, 3).
> caption: This piecewise-defined function is linear for $x<1$ and quadratic for $x\ge 1.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573569346} type= 
PROBLEM:
Sketch a graph of the function

$f(x)=\{\begin{array}{l}2-x,x\le 2 \\ x+2,x>2\end{array}.$  {eq:fs-id1170573569353}

SOLUTION:

> IMAGE {img:fs-id1170573351784} src=../../media/CNX_Calc_Figure_01_02_012.jpg
> alt: An image of a graph. The x axis runs from -6 to 5 and the y axis runs from -2 to 7. The graph is of a function that has two pieces. The first piece is a decreasing line that ends at the closed circle point (2, 0) and has the label “f(x) = 2 - x, for x <= 2. The second piece is an increasing line and begins at the open circle point (2, 4) and has the label “f(x) = x + 2, for x > 2.The function has an x intercept at (2, 0) and a y intercept at (0, 2).

COMMENTARY: Hint
Graph one linear function for $x\le 2$ and then graph a different linear function for $x>2\text{.}$
:::
:::

:::example {ex:fs-id1170573351795} Parking Fees Described by a Piecewise-Defined Function

:::exercise {fs-id1170573351801} type= 
PROBLEM:
In a big city, drivers are charged variable rates for parking in a parking garage. They are charged $10 for the first hour or any part of the first hour and an additional $2 for each hour or part thereof up to a maximum of $30 for the day. The parking garage is open from 6 a.m. to 12 midnight.
a. Write a piecewise-defined function that describes the cost $C$ to park in the parking garage as a function of hours parked $x.$
b. Sketch a graph of this function $C(x).$
SOLUTION:
a. Since the parking garage is open 18 hours each day, the domain for this function is $\text{\{}x|0<x\le 18\}.$ The cost to park a car at this parking garage can be described piecewise by the function

$C(x)=\left\{\begin{array}{l}10,0<x\le 1 \\ 12,1<x\le 2 \\ 14,2<x\le 3 \\ 16,3<x\le 4 \\ \vdots \\ 30,10<x\le 18\end{array}\right..$  {eq:fs-id1170573583373}

b. The graph of the function consists of several horizontal line segments.

> IMAGE {img:fs-id1170573582196} src=../../media/CNX_Calc_Figure_01_02_013.jpg
> alt: An image of a graph. The x axis runs from 0 to 18 and is labeled “x, hours”. The y axis runs from 0 to 32 and is labeled “y, cost in dollars”. The function consists 11 pieces, all horizontal line segments that begin with an open circle and end with a closed circle. The first piece starts at x = 0 and ends at x = 1 and is at y = 10. The second piece starts at x = 1 and ends at x = 2 and is at y = 12. The third piece starts at x = 2 and ends at x = 3 and is at y = 14. The fourth piece starts at x = 3 and ends at x = 4 and is at y = 16. The fifth piece starts at x = 4 and ends at x = 5 and is at y = 18. The sixth piece starts at x = 5 and ends at x = 6 and is at y = 20. The seventh piece starts at x = 6 and ends at x = 7 and is at y = 22. The eighth piece starts at x = 7 and ends at x = 8 and is at y = 24. The ninth piece starts at x = 8 and ends at x = 9 and is at y = 26. The tenth piece starts at x = 9 and ends at x = 10 and is at y = 28. The eleventh piece starts at x = 10 and ends at x = 18 and is at y = 30.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573582210} type= 
PROBLEM:
The cost of mailing a letter is a function of the weight of the letter. Suppose the cost of mailing a letter is $49\text{¢}$ for the first ounce and $21\text{¢}$ for each additional ounce. Write a piecewise-defined function describing the cost $C$ as a function of the weight $x$ for $0<x\le 3,$ where $C$ is measured in cents and $x$ is measured in ounces.
SOLUTION:
$C(x)=\left\{\begin{array}{l}49,0<x\le 1 \\ 70,1<x\le 2 \\ 91,2<x\le 3\end{array}\right.$
COMMENTARY: Hint
The piecewise-defined function is constant on the intervals $(0,1],(1,2]\text{,….}$
:::
:::

## Transformations of Functions
We have seen several cases in which we have added, subtracted, or multiplied constants to form variations of simple functions. In the previous example, for instance, we subtracted 2 from the argument of the function $y={x}^{2}$ to get the function $f(x)={(x-2)}^{2}.$ This subtraction represents a shift of the function $y={x}^{2}$ two units to the right. A shift, horizontally or vertically, is a type of {term:transformation of a function}. Other transformations include horizontal and vertical scalings, and reflections about the axes.
A vertical shift of a function occurs if we add or subtract the same constant to each output $y.$ For $c>0,$ the graph of $f(x)+c$ is a shift of the graph of $f(x)$ up $c$ units, whereas the graph of $f(x)-c$ is a shift of the graph of $f(x)$ down $c$ units. For example, the graph of the function $f(x)={x}^{2}+4$ is the graph of $y={x}^{2}$ shifted up $4$ units; the graph of the function $f(x)={x}^{2}-4$ is the graph of $y={x}^{2}$ shifted down $4$ units ([ref:CNX_Calc_Figure_01_02_023]).

> FIGURE {fig:CNX_Calc_Figure_01_02_023} src=../../media/CNX_Calc_Figure_01_02_023.jpg
> alt: An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -4 to 4 and a y axis that runs from -1 to 10. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) + 4”, which is a parabola that decreases until the point (0, 4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted up 4 units. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -5 to 6. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (x squared) - 4”, which is a parabola that decreases until the point (0, -4) and then increases again after the origin. The two functions are the same in shape, but the second function is shifted down 4 units.
> caption: (a) For $c>0,$ the graph of $y=f(x)+c$ is a vertical shift up $c$ units of the graph of $y=f(x).$ (b) For $c>0,$ the graph of $y=f(x)-c$ is a vertical shift down $c$ units of the graph of $y=f(x).$

A horizontal shift of a function occurs if we add or subtract the same constant to each input $x.$ For $c>0,$ the graph of $f(x+c)$ is a shift of the graph of $f(x)$ to the left $c$ units; the graph of $f(x-c)$ is a shift of the graph of $f(x)$ to the right $c$ units. Why does the graph shift left when adding a constant and shift right when subtracting a constant? To answer this question, let’s look at an example.
Consider the function $f(x)=|x+3|$ and evaluate this function at $x-3.$ Since $f(x-3)=|x|$ and $x-3<x,$ the graph of $f(x)=|x+3|$ is the graph of $y=|x|$ shifted left 3 units. Similarly, the graph of $f(x)=|x-3|$ is the graph of $y=|x|$ shifted right $3$ units ([ref:CNX_Calc_Figure_01_02_015]).

> FIGURE {fig:CNX_Calc_Figure_01_02_015} src=../../media/CNX_Calc_Figure_01_02_015.jpg
> alt: An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -8 to 5 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 3)”, which decreases in a straight line until the point (-3, 0) and then increases in a straight line again after the point (-3, 0). The two functions are the same in shape, but the second function is shifted left 3 units. The second graph is labeled “b” and has an x axis that runs from -5 to 8 and a y axis that runs from -3 to 5. The graph is of two functions. The first function is “f(x) = absolute value of x”, which decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x - 3)”, which decreases in a straight line until the point (3, 0) and then increases in a straight line again after the point (3, 0). The two functions are the same in shape, but the second function is shifted right 3 units.
> caption: (a) For $c>0,$ the graph of $y=f(x+c)$ is a horizontal shift left $c$ units of the graph of $y=f(x).$ (b) For $c>0,$ the graph of $y=f(x-c)$ is a horizontal shift right $c$ units of the graph of $y=f(x).$

A vertical scaling of a graph occurs if we multiply all outputs $y$ of a function by the same positive constant. For $c>0,$ the graph of the function $cf(x)$ is the graph of $f(x)$ scaled vertically by a factor of $c.$ If $c>1,$ the values of the outputs for the function $cf(x)$ are larger than the values of the outputs for the function $f(x);$ therefore, the graph has been stretched vertically. If $0<c<1,$ then the outputs of the function $cf(x)$ are smaller, so the graph has been compressed. For example, the graph of the function $f(x)=3{x}^{2}$ is the graph of $y={x}^{2}$ stretched vertically by a factor of 3, whereas the graph of $f(x)={x}^{2}\text{/}3$ is the graph of $y={x}^{2}$ compressed vertically by a factor of $3$ ([ref:CNX_Calc_Figure_01_02_024]).

> FIGURE {fig:CNX_Calc_Figure_01_02_024} src=../../media/CNX_Calc_Figure_01_02_024.jpg
> alt: An image of two graphs. The first graph is labeled “a” and has an x axis that runs from -3 to 3 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = 3(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically stretched and thus increases at a quicker rate than the first function. The second graph is labeled “b” and has an x axis that runs from -4 to 4 and a y axis that runs from -2 to 9. The graph is of two functions. The first function is “f(x) = x squared”, which is a parabola that decreases until the origin and then increases again after the origin. The second function is “f(x) = (1/3)(x squared)”, which is a parabola that decreases until the origin and then increases again after the origin, but is vertically compressed and thus increases at a slower rate than the first function.
> caption: (a) If $c>1,$ the graph of $y=cf(x)$ is a vertical stretch of the graph of $y=f(x).$ (b) If $0<c<1,$ the graph of $y=cf(x)$ is a vertical compression of the graph of $y=f(x).$

The horizontal scaling of a function occurs if we multiply the inputs $x$ by the same positive constant. For $c>0,$ the graph of the function $f(cx)$ is the graph of $f(x)$ scaled horizontally by a factor of $c.$ If $c>1,$ the graph of $f(cx)$ is the graph of $f(x)$ compressed horizontally. If $0<c<1,$ the graph of $f(cx)$ is the graph of $f(x)$ stretched horizontally. For example, consider the function $f(x)=\sqrt{2x}$ and evaluate $f$ at $x\text{/}2.$ Since $f(x\text{/}2)=\sqrt{x},$ the graph of $f(x)=\sqrt{2x}$ is the graph of $y=\sqrt{x}$ compressed horizontally. The graph of $y=\sqrt{x\text{/}2}$ is a horizontal stretch of the graph of $y=\sqrt{x}$ ([ref:CNX_Calc_Figure_01_02_017]).

> FIGURE {fig:CNX_Calc_Figure_01_02_017} src=../../media/CNX_Calc_Figure_01_02_017.jpg
> alt: An image of two graphs. Both graphs have an x axis that runs from -2 to 4 and a y axis that runs from -2 to 5. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of 2x”, which is a curved function that begins at the origin and increases, but increases at a faster rate than the first function. The second graph is labeled “b” and is of two functions. The first function is “f(x) = square root of x”, which is a curved function that begins at the origin and increases. The second function is “f(x) = square root of (x/2)”, which is a curved function that begins at the origin and increases, but increases at a slower rate than the first function.
> caption: (a) If $c>1,$ the graph of $y=f(cx)$ is a horizontal compression of the graph of $y=f(x).$ (b) If $0<c<1,$ the graph of $y=f(cx)$ is a horizontal stretch of the graph of $y=f(x).$

We have explored what happens to the graph of a function $f$ when we multiply $f$ by a constant $c>0$ to get a new function $cf(x).$ We have also discussed what happens to the graph of a function $f$ when we multiply the independent variable $x$ by $c>0$ to get a new function $f(cx).$ However, we have not addressed what happens to the graph of the function if the constant $c$ is negative. If we have a constant $c<0,$ we can write *c* as a positive number multiplied by $−1;$ but, what kind of transformation do we get when we multiply the function or its argument by $−1?$ When we multiply all the outputs by $−1,$ we get a reflection about the $x$-axis. When we multiply all inputs by $−1,$ we get a reflection about the $y$-axis. For example, the graph of $f(x)=\text{−}({x}^{3}+1)$ is the graph of $y=({x}^{3}+1)$ reflected about the $x$-axis. The graph of $f(x)={(\text{−}x)}^{3}+1$ is the graph of $y={x}^{3}+1$ reflected about the $y$-axis ([ref:CNX_Calc_Figure_01_02_018]).

> FIGURE {fig:CNX_Calc_Figure_01_02_018} src=../../media/CNX_Calc_Figure_01_02_018.jpg
> alt: An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -5 to 6. The first graph is labeled “a” and is of two functions. The first graph is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = -(x cubed + 1)”, which is a curved decreasing function that has an x intercept at (-1, 0) and a y intercept at (0, -1). The second graph is labeled “b” and is of two functions. The first function is “f(x) = x cubed + 1”, which is a curved increasing function that has an x intercept at (-1, 0) and a y intercept at (0, 1). The second function is “f(x) = (-x) cubed + 1”, which is a curved decreasing function that has an x intercept at (1, 0) and a y intercept at (0, 1). The first function increases at the same rate the second function decreases for the same values of x.
> caption: (a) The graph of $y=\text{−}f(x)$ is the graph of $y=f(x)$ reflected about the $x$-axis. (b) The graph of $y=f(\text{−}x)$ is the graph of $y=f(x)$ reflected about the
$y$-axis.

If the graph of a function consists of more than one transformation of another graph, it is important to transform the graph in the correct order. Given a function $f(x),$ the graph of the related function $y=cf(a(x+b))+d$ can be obtained from the graph of $y=f(x)$ by performing the transformations in the following order.
1. Horizontal shift of the graph of $y=f(x).$ If $b>0,$ shift left. If $b<0,$ shift right.
2. Horizontal scaling of the graph of $y=f(x+b)$ by a factor of $|a|.$ If $a<0,$ reflect the graph about the $y$-axis.
3. Vertical scaling of the graph of $y=f(a(x+b))$ by a factor of $|c|.$ If $c<0,$ reflect the graph about the $x$-axis.
4. Vertical shift of the graph of $y=cf(a(x+b)).$ If $d>0,$ shift up. If $d<0,$ shift down.
We can summarize the different transformations and their related effects on the graph of a function in the following table.

> TABLE {tab:fs-id1170573580486} cols=2
> title: Transformations of Functions
> summary: A table with 8 rows and 2 columns. The first column is labeled “Transformation of f(c > 0)” and has the values “f(x) +c; f(x) -c; f(x + c); f(x - c); cf(x); f(cx); -f(x); f(-x)”. The second column is labeled “Effect on the graph of f” and the values are “Vertical shift up c units; Vertical shift down c units; Shift left by c units; Shift right by c units; ‘Vertical stretch if c > 1, Vertical compression is 0 < c < 1′; ‘Horizontal stretch if 0 < c < 1, horizontal compression if c > 1′; reflection about the x-axis; reflection about the y-axis”.

| **Transformation of $f(c>0)$** | **Effect on the graph of** $f$ |
| --- | --- |
| $f(x)+c$ | Vertical shift up $c$ units |
| $f(x)-c$ | Vertical shift down $c$ units |
| $f(x+c)$ | Shift left by $c$ units |
| $f(x-c)$ | Shift right by $c$ units |
| $cf(x)$ | Vertical stretch if $c>1;$<br>vertical compression if $0<c<1$ |
| $f(cx)$ | Horizontal stretch if $0<c<1;$ horizontal compression if $c>1$ |
| $\text{−}f(x)$ | Reflection about the $x$-axis |
| $f(\text{−}x)$ | Reflection about the $y$-axis |

:::example {ex:fs-id1170573580888} Transforming a Function

:::exercise {fs-id1170573580893} type= 
PROBLEM:
For each of the following functions, a. and b., sketch a graph by using a sequence of transformations of a well-known function.
a. $f(x)=\text{−}|x+2|-3$
b. $f(x)=3\sqrt{\text{−}\text{x}}+1$
SOLUTION:
a. Starting with the graph of $y=|x|,$ shift $2$ units to the left, reflect about the $x$-axis, and then shift down 3 units.

> FIGURE {fig:CNX_Calc_Figure_01_02_019} src=../../media/CNX_Calc_Figure_01_02_019.jpg
> alt: An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -7 to 7. The graph contains four functions. The first function is “f(x) = absolute value of x” and is labeled starting function. It decreases in a straight line until the origin and then increases in a straight line again after the origin. The second function is “f(x) = absolute value of (x + 2)”, which decreases in a straight line until the point (-2, 0) and then increases in a straight line again after the point (-2, 0). The second function is the same shape as the first function, but is shifted left 2 units. The third function is “f(x) = -(absolute value of (x + 2))”, which increases in a straight line until the point (-2, 0) and then decreases in a straight line again after the point (-2, 0). The third function is the second function reflected about the x axis. The fourth function is “f(x) = -(absolute value of (x + 2)) - 3” and is labeled “transformed function”. It increases in a straight line until the point (-2, -3) and then decreases in a straight line again after the point (-2, -3). The fourth function is the third function shifted down 3 units.
> caption: The function $f(x)=\text{−}|x+2|-3$ can be viewed as a sequence of three transformations of the function $y=|x|.$

b. Starting with the graph of $y=\sqrt{x},$ reflect about the $y$-axis, stretch the graph vertically by a factor of 3, and move up 1 unit.

> FIGURE {fig:CNX_Calc_Figure_01_02_020} src=../../media/CNX_Calc_Figure_01_02_020.jpg
> alt: An image of a graph. The x axis runs from -7 to 7 and a y axis runs from -2 to 10. The graph contains four functions. The first function is “f(x) = square root of x” and is labeled starting function. It is a curved function that begins at the origin and increases. The second function is “f(x) = square root of -x”, which is a curved function that decreases until it reaches the origin, where it stops. The second function is the first function reflected about the y axis. The third function is “f(x) = 3(square root of -x)”, which is a curved function that decreases until it reaches the origin, where it stops. The third function decreases at a quicker rate than the second function. The fourth function is “f(x) = 3(square root of -x) + 1” and is labeled “transformed function”. Itis a curved function that decreases until it reaches the point (0, 1), where it stops. The fourth function is the third function shifted up 1 unit.
> caption: The function $f(x)=3\sqrt{\text{−}x}+1$ can be viewed as a sequence of three transformations of the function $y=\sqrt{x}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573581204} type= 
PROBLEM:
Describe how the function $f(x)=\text{−}{(x+1)}^{2}-4$ can be graphed using the graph of $y={x}^{2}$ and a sequence of transformations.
SOLUTION:
Shift the graph $y={x}^{2}$ to the left 1 unit, reflect about the $x$-axis, then shift down 4 units.
COMMENTARY: Hint
Use [ref:fs-id1170573580486].
:::
:::

## Key Concepts {section:key-concepts}
- The power function $f(x)={x}^{n}$ is an even function if $n$ is even and $n≠0,$ and it is an odd function if $n$ is odd.
- The root function $f(x)={x}^{1\text{/}n}$ has the domain $[0,\infty )$ if $n$ is even and the domain $(\text{−∞},\infty )$ if $n$ is odd. If $n$ is odd, then $f(x)={x}^{1\text{/}n}$ is an odd function.
- The domain of the rational function $f(x)=p(x)\text{/}q(x),$ where $p(x)$ and $q(x)$ are polynomial functions, is the set of $x$ such that $q(x)≠0.$
- Functions that involve the basic operations of addition, subtraction, multiplication, division, and powers are algebraic functions. All other functions are transcendental. Trigonometric, exponential, and logarithmic functions are examples of transcendental functions.
- A polynomial function $f$ with degree $n\ge 1$ satisfies $f(x)\to \text{±}\infty$ as $x\to \text{±}\infty .$ The sign of the output as $x\to \infty$ depends on the sign of the leading coefficient only and on whether $n$ is even or odd.
- Vertical and horizontal shifts, vertical and horizontal scalings, and reflections about the $x$- and $y$-axes are examples of transformations of functions.

## Key Equations {section:key-equations}

> TABLE {tab:eip-480} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Point-slope equation of a line** | $y-{y}_{1}=m(x-{x}_{1})$ |
| **Slope-intercept form of a line** | $y=mx+b$ |
| **Standard form of a line** | $ax+by=c$ |
| **Polynomial function** | $f(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{⋯}+{a}_{1}x+{a}_{0}$ |

##  {section:section-exercises}
For the following exercises, for each pair of points, a. find the slope of the line passing through the points and b. indicate whether the line is increasing, decreasing, horizontal, or vertical.

:::exercise {fs-id1170573587699} type= 
PROBLEM:
$(−2,4)$ and $(1,1)$
SOLUTION:
a. −1 b. Decreasing
:::

:::exercise {fs-id1170573587749} type= 
PROBLEM:
$(−1,4)$ and $(3,−1)$
:::

:::exercise {fs-id1170573587800} type= 
PROBLEM:
$(3,5)$ and $(−1,2)$
SOLUTION:
a. 3/4 b. Increasing
:::

:::exercise {fs-id1170573587850} type= 
PROBLEM:
$(6,4)$ and $(4,−3)$
:::

:::exercise {fs-id1170573587900} type= 
PROBLEM:
$(2,3)$ and $(5,7)$
SOLUTION:
a. 4/3 b. Increasing
:::

:::exercise {fs-id1170573587950} type= 
PROBLEM:
$(1,9)$ and $(−8,5)$
:::

:::exercise {fs-id1170573588000} type= 
PROBLEM:
$(2,4)$ and $(1,4)$
SOLUTION:
a. 0 b. Horizontal
:::

:::exercise {fs-id1170573588050} type= 
PROBLEM:
$(1,4)$ and $(1,0)$
:::
For the following exercises, write the equation of the line satisfying the given conditions in slope-intercept form.

:::exercise {fs-id1170573588104} type= 
PROBLEM:
Slope $=−6,$ passes through $(1,3)$
SOLUTION:
$y=−6x+9$
:::

:::exercise {fs-id1170573588160} type= 
PROBLEM:
Slope $=3,$ passes through $(−3,2)$
:::

:::exercise {fs-id1170573588216} type= 
PROBLEM:
Slope $=\frac{1}{3},$ passes through $(0,4)$
SOLUTION:
$y=\frac{1}{3}x+4$
:::

:::exercise {fs-id1170573588278} type= 
PROBLEM:
Slope $=\frac{2}{5},\;x$-intercept $=8$
:::

:::exercise {fs-id1170573588337} type= 
PROBLEM:
Passing through $(2,1)$ and $(−2,−1)$
SOLUTION:
$y=\frac{1}{2}x$
:::

:::exercise {fs-id1170573588400} type= 
PROBLEM:
Passing through $(−3,7)$ and $(1,2)$
:::

:::exercise {fs-id1170573588472} type= 
PROBLEM:
$x$-intercept $=5$ and $y$-intercept $=−3$
SOLUTION:
$y=\frac{3}{5}x-3$
:::

:::exercise {fs-id1170573588527} type= 
PROBLEM:
$x$-intercept $=−6$ and $y$-intercept $=9$
:::
For the following exercises, for each linear equation, a. give the slope $m$ and $y$-intercept *b*, if any, and b. graph the line.

:::exercise {fs-id1170573588600} type= 
PROBLEM:
$y=2x-3$
SOLUTION:
a. $(m=2,b=−3)$ b.

> IMAGE {img:fs-id1170573588652} src=../../media/CNX_Calc_Figure_01_02_201.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph shows an increasing straight line function with a y intercept at (0, -3) and a x intercept at (1.5, 0).

:::

:::exercise {fs-id1170573588667} type= 
PROBLEM:
$y=-\frac{1}{7}x+1$
:::

:::exercise {fs-id1170573588745} type= 
PROBLEM:
$f(x)=−6x$
SOLUTION:
a. $(m=−6,b=0)$ b.

> IMAGE {img:fs-id1170573588800} src=../../media/CNX_Calc_Figure_01_02_203.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph shows a decreasing straight line function with a y intercept and x intercept both at the origin. There is an unlabeled point on the function at (0.5, -3).

:::

:::exercise {fs-id1170573588816} type= 
PROBLEM:
$f(x)=−5x+4$
:::

:::exercise {fs-id1170573588891} type= 
PROBLEM:
$4y+24=0$
SOLUTION:
a. $(m=0,b=−6)$ b.

> IMAGE {img:fs-id1170573588942} src=../../media/CNX_Calc_Figure_01_02_205.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -7 to 1. The graph shows a horizontal straight line function with a y intercept at (0, -6) and no x intercept.

:::

:::exercise {fs-id1170573588958} type= 
PROBLEM:
$8x-4=0$
:::

:::exercise {fs-id1170573589005} type= 
PROBLEM:
$2x+3y=6$
SOLUTION:
a. $(m=-\frac{2}{3},b=2)$ b.

> IMAGE {img:fs-id1170573589063} src=../../media/CNX_Calc_Figure_01_02_207.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -4 to 4. The graph shows a decreasing straight line function with a y intercept at (0, 2) and a x intercept at (3, 0).

:::

:::exercise {fs-id1170573589079} type= 
PROBLEM:
$6x-5y+15=0$
:::
For the following exercises, for each polynomial, a. find the degree; b. find the zeros, if any; c. find the $y$-intercept(s), if any; d. use the leading coefficient to determine the graph’s end behavior; and e. determine algebraically whether the polynomial is even, odd, or neither.

:::exercise {fs-id1170573589168} type= 
PROBLEM:
$f(x)=2{x}^{2}-3x-5$
SOLUTION:
a. 2 b. $\frac{5}{2},−1;$ c. −5 d. As $x\to \pm \infty ,y\to \infty$ e. Neither
:::

:::exercise {fs-id1170573589231} type= 
PROBLEM:
$f(x)=−3{x}^{2}+6x$
:::

:::exercise {fs-id1170573589284} type= 
PROBLEM:
$f(x)=\frac{1}{2}{x}^{2}-1$
SOLUTION:
a. 2 b. $\pm \sqrt{2}$ c. −1 d. As $x\to \pm \infty ,y\to \infty$ e. Even
:::

:::exercise {fs-id1170573589337} type= 
PROBLEM:
$f(x)={x}^{3}+3{x}^{2}-x-3$
:::

:::exercise {fs-id1170573589403} type= 
PROBLEM:
$f(x)=3x-{x}^{3}$
SOLUTION:
a. 3 b. 0, $\pm \sqrt{3}$ c. 0 d. As $x\to -\infty ,y\to \infty$ and $x\to \infty ,y\to -\infty$ e. Odd
:::
For the following exercises, use the graph of $f(x)={x}^{2}$ to graph each transformed function $g.$

:::exercise {fs-id1170573589482} type= 
PROBLEM:
$g(x)={x}^{2}-1$
:::

:::exercise {fs-id1170573589532} type= 
PROBLEM:
$g(x)={(x+3)}^{2}+1$
SOLUTION:

> IMAGE {img:fs-id1170573589578} src=../../media/CNX_Calc_Figure_01_02_210.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph shows a parabolic function that decreases until the point (-3, 1), then begins increasing. The y intercept is not shown and there are no x intercepts. There are two unplotted points at (-4, 2) and (-2, 2).

:::
For the following exercises, use the graph of $f(x)=\sqrt{x}$ to graph each transformed function $g.$

:::exercise {fs-id1170573589623} type= 
PROBLEM:
$g(x)=\sqrt{x+2}$
:::

:::exercise {fs-id1170573589673} type= 
PROBLEM:
$g(x)=\text{−}\sqrt{x}-1$
SOLUTION:

> IMAGE {img:fs-id1170573589707} src=../../media/CNX_Calc_Figure_01_02_212.jpg
> alt: An image of a graph. The x axis runs from -5 to 20 and the y axis runs from -8 to 2. The graph shows a curved function that begins at the point (0, -1), then begins decreasing. The y intercept is at (0, -1) and there is no x intercept. There is an unplotted point at (9, -4).

:::
For the following exercises, use the graph of $y=f(x)$ to graph each transformed function $g.$

> IMAGE {img:fs-id1170573589753} src=../../media/CNX_Calc_Figure_01_02_213.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph shows a function that starts at point (-3, 0), where it begins to increase until the point (-1, 2). After the point (-1, 2), the function becomes a horizontal line and stays that way until the point (1, 2). After the point (1, 2), the function begins to decrease until the point (3, 0), where the function ends.

:::exercise {fs-id1170573589768} type= 
PROBLEM:
$g(x)=f(x)+1$
:::

:::exercise {fs-id1170573589824} type= 
PROBLEM:
$g(x)=f(x-1)+2$
SOLUTION:

> IMAGE {img:fs-id1170573589868} src=../../media/CNX_Calc_Figure_01_02_215.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph shows a function that starts at point (-2, 2), where it begins to increase until the point (0, 4). After the point (0, 4), the function becomes a horizontal line and stays that way until the point (2, 4). After the point (2, 4), the function begins to decrease until the point (4, 2), where the function ends.

:::
For the following exercises, for each of the piecewise-defined functions, a. evaluate at the given values of the independent variable and b. sketch the graph.

:::exercise {fs-id1170573589890} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}4x+3,x\le 0 \\ \text{−}x+1,x>0\end{array}\right.;\;f(−3);f(0);f(2)$
:::

:::exercise {fs-id1170573590037} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}{x}^{2}-3,x<0 \\ 4x-3,x\ge 0\end{array}\right.;\;f(−4);f(0);f(2)$
SOLUTION:
a. $13,−3,5$ b.

> IMAGE {img:fs-id1170573590168} src=../../media/CNX_Calc_Figure_01_02_217.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a function that has two pieces. The first piece is a decreasing curve that ends at the point (0, -3). The second piece is an increasing line that begins at the point (0, -3). The function has a x intercepts at the approximate point (1.7, 0) and the point (0.75, 0) and a y intercept at (0, -3).

:::

:::exercise {fs-id1170573590186} type= 
PROBLEM:
$h(x)=\left\{\begin{array}{l}x+1,x\le 5 \\ 4,x>5\end{array}\right.;\;h(0);h(\pi );h(5)$
:::

:::exercise {fs-id1170573590319} type= 
PROBLEM:
$g(x)=\left\{\begin{array}{l}\frac{3}{x-2},x≠2 \\ 4,x=2\end{array}\right.;g(0);g(−4);g(2)$
SOLUTION:
a. $\frac{−3}{2},\frac{−1}{2},4$ b.

> IMAGE {img:fs-id1170573595271} src=../../media/CNX_Calc_Figure_01_02_219.jpg
> alt: An image of a graph. The x axis runs from -10 to 10 and the y axis runs from -10 to 10. The graph is of a function that begins slightly below the x axis and begins to decrease. As the function approaches the unplotted vertical line of “x = 2”, it decreases at a faster rate but never reaches the line “x = 2”. On the right side of the unplotted line “x = 2”, the function starts at the top of graph and begins decreasing and approaches the unplotted horizontal line “y = 0”, but never reaches “y = 0”. There function also includes a plotted point at (2, 4). There is a y intercept at (0, -1.5) and no x intercept.

:::
For the following exercises, determine whether the statement is *true or false*. Explain why.

:::exercise {fs-id1170573595288} type= 
PROBLEM:
$f(x)=(4x+1)\text{/}(7x-2)$ is a transcendental function.
:::

:::exercise {fs-id1170573595354} type= 
PROBLEM:
$g(x)=\sqrt[3]{x}$ is an odd root function
SOLUTION:
True; $n=3$
:::

:::exercise {fs-id1170573595398} type= 
PROBLEM:
A logarithmic function is an algebraic function.
:::

:::exercise {fs-id1170573595415} type= 
PROBLEM:
A function of the form $f(x)={x}^{b},$ where $b$ is a real valued constant, is an exponential function.
SOLUTION:
False; $f(x)={x}^{b},$ where $b$ is a real-valued constant, is a power function
:::

:::exercise {fs-id1170573595484} type= 
PROBLEM:
The domain of an even root function is all real numbers.
:::

:::exercise {fs-id1170573595500} type= 
PROBLEM:
**[T]** A company purchases some computer equipment for $20,500. At the end of a 3-year period, the value of the equipment has decreased linearly to $12,300.
a. Find a function $y=V(t)$ that determines the value *V* of the equipment at the end of *t* years.
b. Find and interpret the meaning of the $x$- and $y$-intercepts for this situation.
c. What is the value of the equipment at the end of 5 years?
d. When will the value of the equipment be $3000?
SOLUTION:
a. $V(t)=−2733t+20500$ b. $(0,20,500)$ means that the initial purchase price of the equipment is $20,500; $(7.5,0)$ means that in 7.5 years the computer equipment has no value. c. $6835 d. In approximately 6.4 years
:::

:::exercise {fs-id1170573595644} type= 
PROBLEM:
**[T]** Total online shopping during the Christmas holidays has increased dramatically during the past 5 years. In 2012 $\text{(}t=0\text{),}$ total online holiday sales were $42.3 billion, whereas in 2013 they were $48.1 billion.
a. Find a linear function *S* that estimates the total online holiday sales in the year *t*.
b. Interpret the slope of the graph of *S*.
c. Use part a. to predict the year when online shopping during Christmas will reach $60 billion.
:::

:::exercise {fs-id1170573595739} type= 
PROBLEM:
**[T]** A family bakery makes cupcakes and sells them at local outdoor festivals. For a music festival, there is a fixed cost of $125 to set up a cupcake stand. The owner estimates that it costs $0.75 to make each cupcake. The owner is interested in determining the total cost $C$ as a function of number of cupcakes made.
a. Find a linear function that relates cost *C* to *x*, the number of cupcakes made.
b. Find the cost to bake 160 cupcakes.
c. If the owner sells the cupcakes for $1.50 apiece, how many cupcakes does she need to sell to start making profit? (*Hint*: Use the INTERSECTION function on a calculator to find this number.)
SOLUTION:
a. $C=0.75x+125$ b. $245 c. 167 cupcakes
:::

:::exercise {fs-id1170573595812} type= 
PROBLEM:
**[T]** A house purchased for $250,000 is expected to be worth twice its purchase price in 18 years.
a. Find a linear function that models the price *P* of the house versus the number of years *t* since the original purchase.
b. Interpret the slope of the graph of *P*.
c. Find the price of the house 15 years from when it was originally purchased.
:::

:::exercise {fs-id1170573595902} type= 
PROBLEM:
**[T]** A car was purchased for $26,000. The value of the car depreciates by $1500 per year.
a. Find a linear function that models the value *V* of the car after *t* years.
b. Find and interpret $V(4).$
SOLUTION:
a. $V(t)=−1500t+26,000$ b. In 4 years, the value of the car is $20,000.
:::

:::exercise {fs-id1170573595992} type= 
PROBLEM:
**[T]** A condominium in an upscale part of the city was purchased for $432,000. In 35 years it is worth $60,500. Find the rate of depreciation.
:::

:::exercise {fs-id1170573596014} type= 
PROBLEM:
**[T]** The total cost *C* to produce a certain item is modeled by the function $C(x)=10.50x+28,500,$ where *x* is the number of items produced. Determine the cost to produce 175 items.
SOLUTION:
$30,337.50
:::

:::exercise {fs-id1170573596077} type= 
PROBLEM:
**[T]** A professor asks her class to report the amount of time *t* they spent writing two assignments. Most students report that it takes them about 45 minutes to type a four-page assignment and about 1.5 hours to type a nine-page assignment.
a. Find the linear function $y=N(t)$ that models this situation, where $N$ is the number of pages typed and *t* is the time in minutes.
b. Use part a. to determine how many pages can be typed in 2 hours.
c. Use part a. to determine how long it takes to type a 20-page assignment.
:::

:::exercise {fs-id1170573596195} type= 
PROBLEM:
**[T]** The output (as a percent of total capacity) of nuclear power plants in the United States can be modeled by the function $P(t)=1.8576t+68.052,$ where *t* is time in years and $t=0$ corresponds to the beginning of 2000. Use the model to predict the approximate percentage output at the beginning of 2015.
SOLUTION:
96% of the total capacity
:::

:::exercise {fs-id1170573596258} type= 
PROBLEM:
**[T]** The admissions office at a public university estimates that 65% of the students offered admission to the class of 2019 will actually enroll.
a. Find the linear function $y=N(x),$ where $N$ is the number of students that actually enroll and $x$ is the number of all students offered admission to the class of 2019.
b. If the university wants the 2019 freshman class size to be 1350, determine how many students should be offered admission.
:::

## Glossary
- {def} **algebraic function**: a function involving any combination of only the basic operations of addition, subtraction, multiplication, division, powers, and roots applied to an input variable $x$
- {def} **cubic function**: a polynomial of degree 3; that is, a function of the form $f(x)=a{x}^{3}+b{x}^{2}+cx+d,$ where $a≠0$
- {def} **degree**: for a polynomial function, the value of the largest exponent of any term
- {def} **linear function**: a function that can be written in the form $f(x)=mx+b$
- {def} **logarithmic function**: a function of the form $f(x)={log}_{b}(x)$ for some base $b>0,b≠1$ such that $y={log}_{b}(x)$ if and only if ${b}^{y}=x$
- {def} **mathematical model**: A method of simulating real-life situations with mathematical equations
- {def} **piecewise-defined function**: a function that is defined differently on different parts of its domain
- {def} **point-slope equation**: equation of a linear function indicating its slope and a point on the graph of the function
- {def} **polynomial function**: a function of the form $f(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{…}+{a}_{1}x+{a}_{0}$
- {def} **power function**: a function of the form $f(x)={x}^{n}$ for any positive integer $n\ge 1$
- {def} **quadratic function**: a polynomial of degree 2; that is, a function of the form $f(x)=a{x}^{2}+bx+c$ where $a≠0$
- {def} **rational function**: a function of the form $f(x)=p(x)\text{/}q(x),$ where $p(x)$ and $q(x)$ are polynomials
- {def} **root function**: a function of the form $f(x)={x}^{1\text{/}n}$ for any integer $n\ge 2$
- {def} **slope**: the change in *y* for each unit change in *x*
- {def} **slope-intercept form**: equation of a linear function indicating its slope and *y*-intercept
- {def} **transcendental function**: a function that cannot be expressed by a combination of basic arithmetic operations
- {def} **transformation of a function**: a shift, scaling, or reflection of a function

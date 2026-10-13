# Defining the Derivative

## Learning Objectives {section:learning-objectives}
- Recognize the meaning of the tangent to a curve at a point.
- Calculate the slope of a tangent line.
- Identify the derivative as the limit of a difference quotient.
- Calculate the derivative of a given function at a point.
- Describe the velocity as a rate of change.
- Explain the difference between average velocity and instantaneous velocity.
- Estimate the derivative from a table of values.

Now that we have both a conceptual understanding of a limit and the practical ability to compute limits, we have established the foundation for our study of calculus, the branch of mathematics in which we compute derivatives and integrals. Most mathematicians and historians agree that calculus was developed independently by the Englishman Isaac {index:Newton} $\text{(1643–1727)}$ and the German Gottfried {index:Leibniz} $\text{(1646–1716),}$ whose images appear in [ref:CNX_Calc_Figure_03_01_001]. When we credit Newton and Leibniz with developing calculus, we are really referring to the fact that Newton and Leibniz were the first to understand the relationship between the derivative and the integral. Both mathematicians benefited from the work of predecessors, such as Barrow, Fermat, and Cavalieri. The initial relationship between the two mathematicians appears to have been amicable; however, in later years a bitter controversy erupted over whose work took precedence. Although it seems likely that Newton did, indeed, arrive at the ideas behind calculus first, we are indebted to Leibniz for the notation that we commonly use today.

> FIGURE {fig:CNX_Calc_Figure_03_01_001} src=../../media/CNX_Calc_Figure_03_01_001.jpg
> alt: Photos of Newton and Leibniz.
> caption: Newton and Leibniz are credited with developing calculus independently.

## Tangent Lines
We begin our study of calculus by revisiting the notion of secant lines and tangent lines. Recall that we used the slope of a secant line to a function at a point $(a,f(a))$ to estimate the rate of change, or the rate at which one variable changes in relation to another variable. We can obtain the slope of the secant by choosing a value of $x$ near $a$ and drawing a line through the points $(a,f(a))$ and $(x,f(x)),$ as shown in [ref:CNX_Calc_Figure_03_01_002]. The slope of this line is given by an equation in the form of a difference quotient:

${m}_{\text{sec}}=\frac{f(x)-f(a)}{x-a}.$  {eq:fs-id1169738930229}

We can also calculate the slope of a secant line to a function at a value *a* by using this equation and replacing $x$ with $a+h,$ where $h$ is a value close to 0. We can then calculate the slope of the line through the points $(a,f(a))$ and $(a+h,f(a+h)).$ In this case, we find the secant line has a slope given by the following difference quotient with increment $h\text{:}$

${m}_{\text{sec}}=\frac{f(a+h)-f(a)}{a+h-a}=\frac{f(a+h)-f(a)}{h}.$  {eq:fs-id1169738985511}

:::note [definition] Definition
Let $f$ be a function defined on an interval $I$ containing $a.$ If $x≠a$ is in $I,$ then

$$ Q=\frac{f(x)-f(a)}{x-a} $$  {eq:fs-id1169738850293}

is a {term:difference quotient}.
Also, if $h≠0$ is chosen so that $a+h$ is in $I,$ then

$$ Q=\frac{f(a+h)-f(a)}{h} $$  {eq:fs-id1169739097936}

is a difference quotient with increment $h.$
:::

:::note [media-2] 
View the development of the [derivative](http://www.openstax.org/l/20_calcapplets) with this applet.
:::
These two expressions for calculating the slope of a secant line are illustrated in [ref:CNX_Calc_Figure_03_01_002]. We will see that each of these two methods for finding the slope of a secant line is of value. Depending on the setting, we can choose one or the other. The primary consideration in our choice usually depends on ease of calculation.

> FIGURE {fig:CNX_Calc_Figure_03_01_002} src=../../media/CNX_Calc_Figure_03_01_002.jpg
> alt: This figure consists of two graphs labeled a and b. Figure a shows the Cartesian coordinate plane with 0, a, and x marked on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)) and (x, f(x)). There is also a straight line that crosses these two points (a, f(a)) and (x, f(x)). At the bottom of the graph, the equation msec = (f(x) - f(a))/(x - a) is given. Figure b shows a similar graph, but this time a + h is marked on the x-axis instead of x. Consequently, the curve labeled y = f(x) passes through (a, f(a)) and (a + h, f(a + h)) as does the straight line. At the bottom of the graph, the equation msec = (f(a + h) - f(a))/h is given.
> caption: We can calculate the slope of a secant line in either of two ways.

In [ref:CNX_Calc_Figure_03_01_003](a) we see that, as the values of $x$ approach $a,$ the slopes of the secant lines provide better estimates of the rate of change of the function at $a.$ Furthermore, the secant lines themselves approach the tangent line to the function at $a,$ which represents the limit of the secant lines. Similarly, [ref:CNX_Calc_Figure_03_01_003](b) shows that as the values of $h$ get closer to $0,$ the secant lines also approach the tangent line. The slope of the tangent line at $a$ is the rate of change of the function at $a,$ as shown in [ref:CNX_Calc_Figure_03_01_003](c).

> FIGURE {fig:CNX_Calc_Figure_03_01_003} src=../../media/CNX_Calc_Figure_03_01_003.jpg
> alt: This figure consists of three graphs labeled a, b, and c. Figure a shows the Cartesian coordinate plane with 0, a, x2, and x1 marked in order on the x-axis. There is a curve labeled y = f(x) with points marked (a, f(a)), (x2, f(x2)), and (x1, f(x1)). There are three straight lines: the first crosses (a, f(a)) and (x1, f(x1)); the second crosses (a, f(a)) and (x2, f(x2)); and the third only touches (a, f(a)), making it the tangent. At the bottom of the graph, the equation mtan = limx → a (f(x) - f(a))/(x - a) is given. Figure b shows a similar graph, but this time a + h2 and a + h1 are marked on the x-axis instead of x2 and x1. Consequently, the curve labeled y = f(x) passes through (a, f(a)), (a + h2, f(a + h2)), and (a + h1, f(a + h1)) and the straight lines similarly cross the graph as in Figure a. At the bottom of the graph, the equation mtan = limh → 0 (f(a + h) - f(a))/h is given. Figure c shows only the curve labeled y = f(x) and its tangent at point (a, f(a)).
> caption: The secant lines approach the tangent line (shown in green) as the second point approaches the first.

:::note [media-2] 
You can use this [site](http://www.openstax.org/l/20_diffmicros) to explore graphs to see if they have a tangent line at a point.
:::
In [ref:CNX_Calc_Figure_03_01_008] we show the graph of $f(x)=\sqrt{x}$ and its tangent line at $(1,1)$ in a series of tighter intervals about $x=1.$ As the intervals become narrower, the graph of the function and its tangent line appear to coincide, making the values on the tangent line a good approximation to the values of the function for choices of $x$ close to $1.$ In fact, the graph of $f(x)$ itself appears to be locally linear in the immediate vicinity of $x=1.$

> FIGURE {fig:CNX_Calc_Figure_03_01_008} src=../../media/CNX_Calc_Figure_03_01_008.jpg
> alt: This figure consists of four graphs labeled a, b, c, and d. Figure a shows the graphs of the square root of x and the equation y = (x + 1)/2 with the x-axis going from 0 to 4 and the y-axis going from 0 to 2.5. The graphs of these two functions look very close near 1; there is a box around where these graphs look close. Figure b shows a close up of these same two functions in the area of the box from Figure a, specifically x going from 0 to 2 and y going from 0 to 1.4. Figure c is the same graph as Figure b, but this one has a box from 0 to 1.1 in the x coordinate and 0.8 and 1 on the y coordinate. There is an arrow indicating that this is blown up in Figure d. Figure d shows a very close picture of the box from Figure c, and the two functions appear to be touching for almost the entire length of the graph.
> caption: For values of $x$ close to $1,$ the graph of $f(x)=\sqrt{x}$ and its tangent line appear to coincide.

Formally we may define the tangent line to the graph of a function as follows.

:::note [definition] Definition
Let $f(x)$ be a function defined in an open interval containing $a.$ The *tangent line* to $f(x)$ at $a$ is the line passing through the point $(a,f(a))$ having slope

$$ {m}_{\text{tan}}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a} $$  {eq:fs-id1169739226063}

provided this limit exists.
Equivalently, we may define the tangent line to $f(x)$ at $a$ to be the line passing through the point $(a,f(a))$ having slope

$$ {m}_{\text{tan}}=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h} $$  {eq:fs-id1169738970614}

provided this limit exists.
:::
Just as we have used two different expressions to define the slope of a secant line, we use two different forms to define the slope of the tangent line. In this text we use both forms of the definition. As before, the choice of definition will depend on the setting. Now that we have formally defined a tangent line to a function at a point, we can use this definition to find equations of tangent lines.

:::example {ex:fs-id1169739298611} Finding a Tangent Line

:::exercise {fs-id1169739033980} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)={x}^{2}$ at $x=3.$
SOLUTION:
First find the slope of the tangent line. In this example, use [ref:fs-id1169739226063].

$\begin{array}{rllll}{m}_{\text{tan}} & =\lim_{x\to 3}\frac{f(x)-f(3)}{x-3} & & & \text{Apply the definition.} \\ & =\lim_{x\to 3}\frac{{x}^{2}-9}{x-3} & & & \text{Substitute}\;f(x)={x}^{2}\;\text{and}\;f(3)=9. \\ & =\lim_{x\to 3}\frac{(x-3)(x+3)}{x-3}=\lim_{x\to 3}(x+3)=6 & & & \text{Factor the numerator to evaluate the limit.}\end{array}$  {eq:fs-id1169738970130}

Next, find a point on the tangent line. Since the line is tangent to the graph of $f(x)$ at $x=3,$ it passes through the point $(3,f(3)).$ We have $f(3)=9,$ so the tangent line passes through the point $(3,9).$
Using the point-slope equation of the line with the slope $m=6$ and the point $(3,9),$ we obtain the line $y-9=6(x-3).$ Simplifying, we have $y=6x-9.$ The graph of $f(x)={x}^{2}$ and its tangent line at $3$ are shown in [ref:CNX_Calc_Figure_03_01_005].

> FIGURE {fig:CNX_Calc_Figure_03_01_005} src=../../media/CNX_Calc_Figure_03_01_005.jpg
> alt: This figure consists of the graphs of f(x) = x squared and y = 6x - 9. The graphs of these functions appear to touch at x = 3.
> caption: The tangent line to $f(x)$ at $x=3.$

:::
:::

:::example {ex:fs-id1169739223534} The Slope of a Tangent Line Revisited

:::exercise {fs-id1169739274759} type= 
PROBLEM:
Use [ref:fs-id1169738970614] to find the slope of the line tangent to the graph of $f(x)={x}^{2}$ at $x=3.$
SOLUTION:
The steps are very similar to [ref:fs-id1169739298611]. See [ref:fs-id1169738970614] for the definition.

$\begin{array}{rllll}{m}_{\text{tan}} & =\lim_{h\to 0}\frac{f(3+h)-f(3)}{h} & & & \text{Apply the definition.} \\ & =\lim_{h\to 0}\frac{{(3+h)}^{2}-9}{h} & & & \text{Substitute}\;f(3+h)={(3+h)}^{2}\;\text{and}\;f(3)=9. \\ & =\lim_{h\to 0}\frac{9+6h+{h}^{2}-9}{h} & & & \text{Expand and simplify to evaluate the limit.} \\ & =\lim_{h\to 0}\frac{h(6+h)}{h}=\lim_{h\to 0}(6+h)=6\end{array}$  {eq:fs-id1169739043970}

We obtained the same value for the slope of the tangent line by using the other definition, demonstrating that the formulas can be interchanged.
:::
:::

:::example {ex:fs-id1169738966727} Finding the Equation of a Tangent Line

:::exercise {fs-id1169738893708} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)=1\text{/}x$ at $x=2.$
SOLUTION:
We can use [ref:fs-id1169739226063], but as we have seen, the results are the same if we use [ref:fs-id1169738970614].

$\begin{array}{rllll}{m}_{\text{tan}} & =\lim_{x\to 2}\frac{f(x)-f(2)}{x-2} & & & \text{Apply the definition.} \\ & =\lim_{x\to 2}\frac{\frac{1}{x}-\frac{1}{2}}{x-2} & & & \text{Substitute}\;f(x)=\frac{1}{x}\;\text{and}\;f(2)=\frac{1}{2}. \\ & =\lim_{x\to 2}\frac{\frac{1}{x}-\frac{1}{2}}{x-2}\cdot \frac{2x}{2x} & & & \begin{array}{l}\text{Multiply numerator and denominator by}\;2x\;\text{to} \\ \text{simplify fractions.}\end{array} \\ & =\lim_{x\to 2}\frac{(2-x)}{(x-2)(2x)} & & & \text{Simplify.} \\ & =\lim_{x\to 2}\frac{−1}{2x} & & & \text{Simplify using}\;\frac{2-x}{x-2}=−1,\text{for}\;x≠2. \\ & =-\frac{1}{4} & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169738961345}

We now know that the slope of the tangent line is $-\frac{1}{4}.$ To find an equation of the tangent line, we also need a point on the line. We know that $f(2)=\frac{1}{2}.$ Since the tangent line passes through the point $(2,\frac{1}{2})$ we can use the point-slope equation of a line to find an equation of the tangent line. Thus the tangent line has the equation $y=-\frac{1}{4}x+1.$ The graphs of $f(x)=\frac{1}{x}$ and $y=-\frac{1}{4}x+1$ are shown in [ref:CNX_Calc_Figure_03_01_006].

> FIGURE {fig:CNX_Calc_Figure_03_01_006} src=../../media/CNX_Calc_Figure_03_01_006.jpg
> alt: This figure consists of the graphs of f(x) = 1/x and y = -x/4 + 1. The part of the graph f(x) = 1/x in the first quadrant appears to touch the other function’s graph at x = 2.
> caption: The line is tangent to $f(x)$ at $x=2.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739038141} type= 
PROBLEM:
Find the slope of the line tangent to the graph of $f(x)=\sqrt{x}$ at $x=4.$
SOLUTION:
$\frac{1}{4}$
COMMENTARY: Hint
Use either [ref:fs-id1169739226063] or [ref:fs-id1169738970614]. Multiply the numerator and the denominator by a conjugate.
:::
:::

## The Derivative of a Function at a Point
The type of limit we compute in order to find the slope of the line tangent to a function at a point occurs in many applications across many disciplines. These applications include velocity and acceleration in physics, marginal profit functions in business, and growth rates in biology. This limit occurs so frequently that we give this value a special name: the {term:derivative}. The process of finding a derivative is called {term:differentiation}.

:::note [definition] Definition
Let $f(x)$ be a function defined in an open interval containing $a.$ The derivative of the function $f(x)$ at $a,$ denoted by ${f}^{'}(a),$ is defined by

$$ {f}^{'}(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a} $$  {eq:fs-id1169739179144}

provided this limit exists.
Alternatively, we may also define the derivative of $f(x)$ at $a$ as

$$ {f}^{'}(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}. $$  {eq:fs-id1169739188551}

:::

:::example {ex:fs-id1169739198956} Estimating a Derivative

:::exercise {fs-id1169739198958} type= 
PROBLEM:
For $f(x)={x}^{2},$ use a table to estimate ${f}^{'}(3)$ using [ref:fs-id1169739179144].
SOLUTION:
Create a table using values of $x$ just below $3$ and just above $3.$

> TABLE {tab:fs-id1169739301095} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is x and the second column is (x2 − 9)/(x − 3). Under the first column are the values 2.9, 2.99, 2.999, 3.001, 3.01, and 3.1. Under the second column are the values 5.9, 5.99, 5.999, 6.001, 6.01, and 6.1.

| $x$ | $\frac{{x}^{2}-9}{x-3}$ |
| --- | --- |
| $2.9$ | $5.9$ |
| $2.99$ | $5.99$ |
| $2.999$ | $5.999$ |
| $3.001$ | $6.001$ |
| $3.01$ | $6.01$ |
| $3.1$ | $6.1$ |

After examining the table, we see that a good estimate is ${f}^{'}(3)=6.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739298316} type= 
PROBLEM:
For $f(x)={x}^{2},$ use a table to estimate ${f}^{'}(3)$ using [ref:fs-id1169739188551].
SOLUTION:
$6$
COMMENTARY: Hint
Evaluate $\frac{(x+h)-{x}^{2}}{h}$ at $h=−0.1,−0.01,−0.001,0.001,0.01,0.1$
:::
:::

:::example {ex:fs-id1169739044032} Finding a Derivative

:::exercise {fs-id1169739129042} type= 
PROBLEM:
For $f(x)=3{x}^{2}-4x+1,$ find ${f}^{'}(2)$ by using [ref:fs-id1169739179144].
SOLUTION:
Substitute the given function and value directly into the equation.

$\begin{array}{rllll}{f}^{'}(2) & =\lim_{x\to 2}\frac{f(x)-f(2)}{x-2} & & & \text{Apply the definition.} \\ & =\lim_{x\to 2}\frac{(3{x}^{2}-4x+1)-5}{x-2} & & & \text{Substitute}\;f(x)=3{x}^{2}-4x+1\;\text{and}\;f(2)=5. \\ & =\lim_{x\to 2}\frac{(x-2)(3x+2)}{x-2} & & & \text{Simplify and factor the numerator.} \\ & =\lim_{x\to 2}(3x+2) & & & \text{Cancel the common factor.} \\ & =8 & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169739305050}

:::
:::

:::example {ex:fs-id1169739093789} Revisiting the Derivative

:::exercise {fs-id1169739204627} type= 
PROBLEM:
For $f(x)=3{x}^{2}-4x+1,$ find ${f}^{'}(2)$ by using [ref:fs-id1169739188551].
SOLUTION:
Using this equation, we can substitute two values of the function into the equation, and we should get the same value as in [ref:fs-id1169739044032].

$\begin{array}{rllll}{f}^{'}(2) & =\lim_{h\to 0}\frac{f(2+h)-f(2)}{h} & & & \text{Apply the definition.} \\ & =\lim_{h\to 0}\frac{(3{(2+h)}^{2}-4(2+h)+1)-5}{h} & & & \begin{array}{l}\text{Substitute}\;f(2)=5\;\text{and} \\ f(2+h)=3{(2+h)}^{2}-4(2+h)+1.\end{array} \\ & =\lim_{h\to 0}\frac{3{h}^{2}+8h}{h} & & & \text{Simplify the numerator.} \\ & =\lim_{h\to 0}\frac{h(3h+8)}{h} & & & \text{Factor the numerator.} \\ & =\lim_{h\to 0}(3h+8) & & & \text{Cancel the common factor.} \\ & =8 & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169736614162}

The results are the same whether we use [ref:fs-id1169739179144] or [ref:fs-id1169739188551].
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739236874} type= 
PROBLEM:
For $f(x)={x}^{2}+3x+2,$ find ${f}^{'}(1).$
SOLUTION:
${f}^{'}(1)=5$
COMMENTARY: Hint
Use either [ref:fs-id1169739179144], [ref:fs-id1169739188551], or try both. Use either [ref:fs-id1169738966727] or [ref:fs-id1169739198956] as a guide.
:::
:::

## Velocities and Rates of Change
Now that we can evaluate a derivative, we can use it in velocity applications. Recall that if $s(t)$ is the position of an object moving along a coordinate axis, the {index:average velocity} of the object over a time interval $[a,t]$ if $t>a$ or $[t,a]$ if $t<a$ is given by the difference quotient

$$ {v}_{\text{ave}}=\frac{s(t)-s(a)}{t-a}. $$  {eq:fs-id1169739303202}

As the values of $t$ approach $a,$ the values of ${v}_{\text{ave}}$ approach the value we call the {index:instantaneous velocity} at $a.$ That is, instantaneous velocity at $a,$ denoted $v(a),$ is given by

$$ v(a)={s}^{'}(a)=\lim_{t\to a}\frac{s(t)-s(a)}{t-a}. $$  {eq:fs-id1169739274700}

To better understand the relationship between average velocity and instantaneous velocity, see [ref:CNX_Calc_Figure_03_01_007]. In this figure, the slope of the tangent line (shown in red) is the instantaneous velocity of the object at time $t=a$ whose position at time $t$ is given by the function $s(t).$ The slope of the secant line (shown in green) is the average velocity of the object over the time interval $[a,t].$

> FIGURE {fig:CNX_Calc_Figure_03_01_007} src=../../media/CNX_Calc_Figure_03_01_007.jpg
> alt: This figure consists of the Cartesian coordinate plane with 0, a, and t1 marked on the t-axis. The function y = s(t) is graphed in the first quadrant along with two lines marked tangent and secant. The tangent line touches y = s(t) at only one point, (a, s(a)). The secant line touches y = s(t) at two points: (a, s(a)) and (t1, s(t1)).
> caption: The slope of the secant line is the average velocity over the interval $[a,t].$ The slope of the tangent line is the instantaneous velocity.

We can use [ref:fs-id1169739179144] to calculate the instantaneous velocity, or we can estimate the velocity of a moving object by using a table of values. We can then confirm the estimate by using [ref:fs-id1169739303202].

:::example {ex:fs-id1169739179204} Estimating Velocity

:::exercise {fs-id1169739179206} type= 
PROBLEM:
A lead weight on a spring is oscillating up and down. Its position at time $t$ with respect to a fixed horizontal line is given by $s(t)=\text{sin}\;t$ ([ref:CNX_Calc_Figure_03_01_010]). Use a table of values to estimate $v(0).$ Check the estimate by using [ref:fs-id1169739179144].

> FIGURE {fig:CNX_Calc_Figure_03_01_010} src=../../media/CNX_Calc_Figure_03_01_010.jpg
> alt: A picture of a spring hanging down with a weight at the end. There is a horizontal dashed line marked 0 a little bit above the weight.
> caption: A lead weight suspended from a spring in vertical oscillatory motion.

SOLUTION:
We can estimate the instantaneous velocity at $t=0$ by computing a table of average velocities using values of $t$ approaching $0,$ as shown in [ref:fs-id1169739242675].

> TABLE {tab:fs-id1169739242675} cols=2
> title: Average velocities using values of *t* approaching 0
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is x and the second column is (sin t - sin 0)/(t − 0) = (sin t)/t. Under the first column are the values -0.1, -0.01, -0.001, 0.001, 0.01, and 0.1. Under the second column are the values 0.998334166, 0.9999833333, 0.999999833, 0.999999833, 0.9999833333, and 0.998334166.

| $t$ | $\frac{\text{sin}\;t-\text{sin}\;0}{t-0}=\frac{\text{sin}\;t}{t}$ |
| --- | --- |
| $−0.1$ | $0.998334166$ |
| $−0.01$ | $0.9999833333$ |
| $−0.001$ | $0.999999833$ |
| $0.001$ | $0.999999833$ |
| $0.01$ | $0.9999833333$ |
| $0.1$ | $0.998334166$ |

From the table we see that the average velocity over the time interval $[−0.1,0]$ is $0.998334166,$ the average velocity over the time interval $[−0.01,0]$ is $0.9999833333,$ and so forth. Using this table of values, it appears that a good estimate is $v(0)=1.$
By using [ref:fs-id1169739179144], we can see that

$v(0)={s}^{'}(0)=\lim_{t\to 0}\frac{\text{sin}\;t-\text{sin}\;0}{t-0}=\lim_{t\to 0}\frac{\text{sin}\;t}{t}=1.$  {eq:fs-id1169739302610}

Thus, in fact, $v(0)=1.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739220843} type= 
PROBLEM:
A rock is dropped from a height of $64$ feet. Its height above ground at time $t$ seconds later is given by $s(t)=−16{t}^{2}+64,0\le t\le 2.$ Find its instantaneous velocity $1$ second after it is dropped, using [ref:fs-id1169739179144].
SOLUTION:
$−32$ ft/s
COMMENTARY: Hint
$v(t)={s}^{'}(t).$ Follow the earlier examples of the derivative using [ref:fs-id1169739179144].
:::
:::
As we have seen throughout this section, the slope of a tangent line to a function and instantaneous velocity are related concepts. Each is calculated by computing a derivative and each measures the instantaneous rate of change of a function, or the rate of change of a function at any point along the function.

:::note [definition] Definition
The {term:instantaneous rate of change} of a function $f(x)$ at a value $a$ is its derivative ${f}^{'}(a).$
:::

:::example {ex:fs-id1169739204154} Chapter Opener: Estimating Rate of Change of Velocity

:::exercise {fs-id1169739204156} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_03_01_009} src=../../media/CNX_Calc_Figure_03_01_009.jpg
> alt: The same sports car speeding along a winding road from the beginning of the chapter.
> caption: (credit: modification of work by Codex41, Flickr)

Reaching a top speed of $270.49$ mph, the Hennessey Venom GT is one of the fastest cars in the world. In tests it went from $0$ to $60$ mph in $3.05$ seconds, from $0\;\text{to}\;100$ mph in $5.88$ seconds, from $0\;\text{to}\;200$ mph in $14.51$ seconds, and from $0\;\text{to}\;229.9$ mph in $19.96$ seconds. Use this data to draw a conclusion about the rate of change of velocity (that is, its {index:acceleration}) as it approaches $229.9$ mph. Does the rate at which the car is accelerating appear to be increasing, decreasing, or constant?
SOLUTION:
First observe that $60$ mph = $88$ ft/s, $100$ mph $\approx 146.67$ ft/s, $200$ mph $\approx 293.33$ ft/s, and $229.9$ mph $\approx 337.19$ ft/s. We can summarize the information in a table.

> TABLE {tab:fs-id1169739188462} cols=2
> title: $v(t)$ at different values of *t*
> summary: This table has six rows and two columns. The first row is a header row and it labels each column. The first column header is x and the second column is v(t). Under the first column are the values 0, 3.05, 5.88, 14.51, and 19.96. Under the second column are the values 0, 88, 146.67, 293.33, and 337.19.

| $t$ | $v(t)$ |
| --- | --- |
| $0$ | $0$ |
| $3.05$ | $88$ |
| $5.88$ | $146.67$ |
| $14.51$ | $293.33$ |
| $19.96$ | $337.19$ |

Now compute the average acceleration of the car in feet per second per second on intervals of the form $[t,19.96]$ as $t$ approaches $19.96,$ as shown in the following table.

> TABLE {tab:fs-id1169739188868} cols=2
> title: Average acceleration
> summary: This table has five rows and two columns. The first row is a header row and it labels each column. The first column header is x and the second column is (v(t) - v(19.96))/(t - 19.96) = (v(t) - 337.19)/(t - 19.96). Under the first column are the values 0, 3.05, 5.88, and 14.51. Under the second column are the values 16.89, 14.74, 13.53, and 8.05.

| $t$ | $\frac{v(t)-v(19.96)}{t-19.96}=\frac{v(t)-337.19}{t-19.96}$ |
| --- | --- |
| $0.0$ | $16.89$ |
| $3.05$ | $14.74$ |
| $5.88$ | $13.53$ |
| $14.51$ | $8.05$ |

The rate at which the car is accelerating is decreasing as its velocity approaches $229.9$ mph $\text{(}337.19$ ft/s).
:::
:::

:::example {ex:fs-id1169739187343} Rate of Change of Temperature

:::exercise {fs-id1169739187345} type= 
PROBLEM:
A homeowner sets the thermostat so that the temperature in the house begins to drop from $70\text{°}\text{F}$ at $9$ p.m., reaches a low of $60\text{°}$ during the night, and rises back to $70\text{°}$ by $7$ a.m. the next morning. Suppose that the temperature in the house is given by $T(t)=0.4{t}^{2}-4t+70$ for $0\le t\le 10,$ where $t$ is the number of hours past $9$ p.m. Find the instantaneous rate of change of the temperature at midnight.
SOLUTION:
Since midnight is $3$ hours past $9$ p.m., we want to compute ${T}^{'}(3).$ Refer to [ref:fs-id1169739179144].

$\begin{array}{rllll}{T}^{'}(3) & =\lim_{t\to 3}\frac{T(t)-T(3)}{t-3} & & & \text{Apply the definition.} \\ & =\lim_{t\to 3}\frac{0.4{t}^{2}-4t+70-61.6}{t-3} & & & \begin{array}{l}\text{Substitute}\;T(t)=0.4{t}^{2}-4t+70\;\text{and} \\ T(3)=61.6.\end{array} \\ & =\lim_{t\to 3}\frac{0.4{t}^{2}-4t+8.4}{t-3} & & & \text{Simplify.} \\ & =\lim_{t\to 3}\frac{0.4(t-3)(t-7)}{t-3} & & & =\lim_{t\to 3}\frac{0.4(t-3)(t-7)}{t-3} \\ & =\lim_{t\to 3}0.4(t-7) & & & \text{Cancel.} \\ & =−1.6 & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169739270561}

The instantaneous rate of change of the temperature at midnight is $−1.6\text{°}\text{F}$ per hour.
:::
:::

:::example {ex:fs-id1169739253544} Rate of Change of Profit

:::exercise {fs-id1169739253546} type= 
PROBLEM:
A toy company can sell $x$ electronic gaming systems at a price of $p=−0.01x+400$ dollars per gaming system. The cost of manufacturing $x$ systems is given by $C(x)=100x+10,000$ dollars. Find the rate of change of profit when $10,000$ games are produced. Should the toy company increase or decrease production?
SOLUTION:
The profit $P(x)$ earned by producing $x$ gaming systems is $R(x)-C(x),$ where $R(x)$ is the revenue obtained from the sale of $x$ games. Since the company can sell $x$ games at $p=−0.01x+400$ per game,

$R(x)=xp=x(−0.01x+400)=−0.01{x}^{2}+400x.$  {eq:fs-id1169739286461}

Consequently,

$P(x)=−0.01{x}^{2}+300x-10,000.$  {eq:fs-id1169739302928}

Therefore, evaluating the rate of change of profit gives

$\begin{array}{rl}{P}^{'}(10000) & =\lim_{x\to 10000}\frac{P(x)-P(10000)}{x-10000} \\ & =\lim_{x\to 10000}\frac{−0.01{x}^{2}+300x-10000-1990000}{x-10000} \\ & =\lim_{x\to 10000}\frac{−0.01{x}^{2}+300x-2000000}{x-10000} \\ & =100.\end{array}$  {eq:fs-id1169739190491}

Since the rate of change of profit ${P}^{'}(10,000)>0$ and $P(10,000)>0,$ the company should increase production.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739273081} type= 
PROBLEM:
A coffee shop determines that the daily profit on scones obtained by charging $s$ dollars per scone is $P(s)=−20{s}^{2}+150s-10.$ The coffee shop currently charges $\text{\$}3.25$ per scone. Find ${P}^{'}(3.25),$ the rate of change of profit when the price is $\text{\$}3.25$ and decide whether or not the coffee shop should consider raising or lowering its prices on scones.
SOLUTION:
${P}^{'}(3.25)=20>0;$ raise prices
COMMENTARY: Hint
Use [ref:fs-id1169739253544] for a guide.
:::
:::

## Key Concepts {section:key-concepts}
- The slope of the tangent line to a curve measures the instantaneous rate of change of a curve. We can calculate it by finding the limit of the difference quotient or the difference quotient with increment $h.$
- The derivative of a function $f(x)$ at a value $a$ is found using either of the definitions for the slope of the tangent line.
- Velocity is the rate of change of position. As such, the velocity $v(t)$ at time $t$ is the derivative of the position $s(t)$ at time $t.$ Average velocity is given by

${v}_{\text{ave}}=\frac{s(t)-s(a)}{t-a}.$  {eq:fs-id1169739286403}

Instantaneous velocity is given by

$v(a)={s}^{'}(a)=\lim_{t\to a}\frac{s(t)-s(a)}{t-a}.$  {eq:fs-id1169739191149}

- We may estimate a derivative by using a table of values.

## Key Equations {section:key-equations}

> TABLE {tab:eip-490} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Difference quotient** | $Q=\frac{f(x)-f(a)}{x-a}$ |
| **Difference quotient with increment** $h$ | $Q=\frac{f(a+h)-f(a)}{a+h-a}=\frac{f(a+h)-f(a)}{h}$ |
| **Slope of tangent line** | ${m}_{\text{tan}}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$<br> ${m}_{\text{tan}}=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$ |
| **Derivative of** $f(x)$ **at** $a$ | ${f}^{'}(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$<br> ${f}^{'}(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$ |
| **Average velocity** | ${v}_{a\text{ve}}=\frac{s(t)-s(a)}{t-a}$ |
| **Instantaneous velocity** | $v(a)={s}^{'}(a)=\lim_{t\to a}\frac{s(t)-s(a)}{t-a}$ |

##  {section:section-exercises}
For the following exercises, use [ref:fs-id1169738850293] to find the slope of the secant line between the values ${x}_{1}$ and ${x}_{2}$ for each function $y=f(x).$

:::exercise {fs-id1169736611315} type= 
PROBLEM:
$f(x)=4x+7;{x}_{1}=2,{x}_{2}=5$
SOLUTION:
$4$
:::

:::exercise {fs-id1169739301859} type= 
PROBLEM:
$f(x)=8x-3;{x}_{1}=−1,{x}_{2}=3$
:::

:::exercise {fs-id1169736589136} type= 
PROBLEM:
$f(x)={x}^{2}+2x+1;{x}_{1}=3,{x}_{2}=3.5$
SOLUTION:
$8.5$
:::

:::exercise {fs-id1169739302810} type= 
PROBLEM:
$f(x)=\text{−}{x}^{2}+x+2;{x}_{1}=0.5,{x}_{2}=1.5$
:::

:::exercise {fs-id1169739302881} type= 
PROBLEM:
$f(x)=\frac{4}{3x-1};{x}_{1}=1,{x}_{2}=3$
SOLUTION:
$-\frac{3}{4}$
:::

:::exercise {fs-id1169739304644} type= 
PROBLEM:
$f(x)=\frac{x-7}{2x+1};{x}_{1}=0,{x}_{2}=2$
:::

:::exercise {fs-id1169739305157} type= 
PROBLEM:
$f(x)=\sqrt{x};{x}_{1}=1,{x}_{2}=16$
SOLUTION:
$0.2$
:::

:::exercise {fs-id1169736613366} type= 
PROBLEM:
$f(x)=\sqrt{x-9};{x}_{1}=10,{x}_{2}=13$
:::

:::exercise {fs-id1169736594852} type= 
PROBLEM:
$f(x)={x}^{1\text{/}3}+1;{x}_{1}=0,{x}_{2}=8$
SOLUTION:
$0.25$
:::

:::exercise {fs-id1169736594923} type= 
PROBLEM:
$f(x)=6{x}^{2\text{/}3}+2{x}^{1\text{/}3};{x}_{1}=1,{x}_{2}=27$
:::
For the following functions,
a. use [ref:fs-id1169738970614] to find the slope of the tangent line ${m}_{\text{tan}}={f}^{'}(a),$ and
b. find an equation of the tangent line to $f$ at $x=a.$

:::exercise {fs-id1169736610046} type= 
PROBLEM:
$f(x)=3-4x,a=2$
SOLUTION:
a. $−4$ b. $y=3-4x$
:::

:::exercise {fs-id1169736611611} type= 
PROBLEM:
$f(x)=\frac{x}{5}+6,a=−1$
:::

:::exercise {fs-id1169739303246} type= 
PROBLEM:
$f(x)={x}^{2}+x,a=1$
SOLUTION:
a. $3$ b. $y=3x-1$
:::

:::exercise {fs-id1169739303312} type= 
PROBLEM:
$f(x)=1-x-{x}^{2},a=0$
:::

:::exercise {fs-id1169739302413} type= 
PROBLEM:
$f(x)=\frac{7}{x},a=3$
SOLUTION:
a. $\frac{−7}{9}$ b. $y=\frac{−7}{9}x+\frac{14}{3}$
:::

:::exercise {fs-id1169739333055} type= 
PROBLEM:
$f(x)=\sqrt{x+8},a=1$
:::

:::exercise {fs-id1169739242365} type= 
PROBLEM:
$f(x)=2-3{x}^{2},a=−2$
SOLUTION:
a. $12$ b. $y=12x+14$
:::

:::exercise {fs-id1169739242434} type= 
PROBLEM:
$f(x)=\frac{−3}{x-1},a=4$
:::

:::exercise {fs-id1169739273188} type= 
PROBLEM:
$f(x)=\frac{2}{x+3},a=−4$
SOLUTION:
a. $−2$ b. $y=−2x-10$
:::

:::exercise {fs-id1169739327293} type= 
PROBLEM:
$f(x)=\frac{3}{{x}^{2}},a=3$
:::
For the following functions $y=f(x),$ find ${f}^{'}(a)$ using [ref:fs-id1169739179144].

:::exercise {fs-id1169739270650} type= 
PROBLEM:
$f(x)=5x+4,a=−1$
SOLUTION:
$5$
:::

:::exercise {fs-id1169739270698} type= 
PROBLEM:
$f(x)=−7x+1,a=3$
:::

:::exercise {fs-id1169739067661} type= 
PROBLEM:
$f(x)={x}^{2}+9x,a=2$
SOLUTION:
$13$
:::

:::exercise {fs-id1169739067714} type= 
PROBLEM:
$f(x)=3{x}^{2}-x+2,a=1$
:::

:::exercise {fs-id1169739194750} type= 
PROBLEM:
$f(x)=\sqrt{x},a=4$
SOLUTION:
$\frac{1}{4}$
:::

:::exercise {fs-id1169739194797} type= 
PROBLEM:
$f(x)=\sqrt{x-2},a=6$
:::

:::exercise {fs-id1169739304170} type= 
PROBLEM:
$f(x)=\frac{1}{x},a=2$
SOLUTION:
$-\frac{1}{4}$
:::

:::exercise {fs-id1169739304222} type= 
PROBLEM:
$f(x)=\frac{1}{x-3},a=−1$
:::

:::exercise {fs-id1169736611380} type= 
PROBLEM:
$f(x)=\frac{1}{{x}^{3}},a=1$
SOLUTION:
$−3$
:::

:::exercise {fs-id1169736611430} type= 
PROBLEM:
$f(x)=\frac{1}{\sqrt{x}},a=4$
:::
For the following exercises, given the function $y=f(x),$
a. find the slope of the secant line $PQ$ for each point $Q(x,f(x))$ with $x$ value given in the table.
b. Use the answers from a. to estimate the value of the slope of the tangent line at $P.$
c. Use the answer from b. to find an equation of the tangent line to $f$ at point $P.$

:::exercise {fs-id1169739187794} type= 
PROBLEM:
**[T]** $f(x)={x}^{2}+3x+4,P(1,8)$ (Round to $6$ decimal places.)

> TABLE {tab:fs-id1169739187857} cols=4 class=unnumbered
> summary: This table has seven rows and four columns. The first row is a header row and it labels each column. The first column header is x, the second is Slope mPQ, the third is x, and the fourth is Slope mPQ. Under the first column are the values 1.1, 1.01, 1.001, 1.0001, 1.00001, 1.000001. Under the second column are the labels (i), (ii), (iii), (iv), (v), and (vi). Under the third column are the values 0.9, 0.99, 0.999, 0.9999, 0.99999, and 0.999999. Under the fourth column are the labels (vii), (viii), (ix), (x), (xi), and (xii).

| *x* | Slope ${m}_{PQ}$ | *x* | Slope ${m}_{PQ}$ |
| --- | --- | --- | --- |
| 1.1 | (i) | 0.9 | (vii) |
| 1.01 | (ii) | 0.99 | (viii) |
| 1.001 | (iii) | 0.999 | (ix) |
| 1.0001 | (iv) | 0.9999 | (x) |
| 1.00001 | (v) | 0.99999 | (xi) |
| 1.000001 | (vi) | 0.999999 | (xii) |

SOLUTION:
a. $\text{(i)}\;5.100000,$ $\text{(ii)}\;5.010000,$ $\text{(iii)}\;5.001000,$ $\text{(iv)}\;5.000100,$ $\text{(v)}\;5.000010,$ $\text{(vi)}\;5.000001,$ $\text{(vii)}\;4.900000,$ $\text{(viii)}\;4.990000,$ $\text{(ix)}\;4.999000,$ $\text{(x)}\;4.999900,$ $\text{(xi)}\;4.999990,$ $\text{(x)}\;4.999999$ b. ${m}_{\text{tan}}=5$ c. $y=5x+3$
:::

:::exercise {fs-id1169739273794} type= 
PROBLEM:
**[T]** $f(x)=\frac{x+1}{{x}^{2}-1},P(0,−1)$

> TABLE {tab:fs-id1169739273863} cols=4 class=unnumbered
> summary: This table has seven rows and four columns. The first row is a header row and it labels each column. The first column header is x, the second is Slope mPQ, the third is x, and the fourth is Slope mPQ. Under the first column are the values 0.1, 0.01, 0.001, 0.0001, 0.00001, and 0.000001. Under the second column are the labels (i), (ii), (iii), (iv), (v), and (vi). Under the third column are the values −0.1, −0.01, −0.001, −0.0001, −0.00001, and −0.000001. Under the fourth column are the labels (vii), (viii), (ix), (x), (xi), and (xii).

| *x* | Slope ${m}_{PQ}$ | *x* | Slope ${m}_{PQ}$ |
| --- | --- | --- | --- |
| 0.1 | (i) | $−0.1$ | (vii) |
| 0.01 | (ii) | $−0.01$ | (viii) |
| 0.001 | (iii) | $−0.001$ | (ix) |
| 0.0001 | (iv) | $−0.0001$ | (x) |
| 0.00001 | (v) | $−0.00001$ | (xi) |
| 0.000001 | (vi) | $−0.000001$ | (xii) |

:::

:::exercise {fs-id1169739269671} type= 
PROBLEM:
**[T]** $f(x)=10{e}^{0.5x},P(0,10)$ (Round to $4$ decimal places.)

> TABLE {tab:fs-id1169739270127} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is x, and the second column header is Slope mPQ. Under the first column are the values −0.1, −0.01, −0.001, −0.0001, −0.00001, and −0.000001. Under the second column are the labels (i), (ii), (iii), (iv), (v), and (vi).

| *x* | Slope ${m}_{PQ}$ |
| --- | --- |
| $−0.1$ | (i) |
| $−0.01$ | (ii) |
| $−0.001$ | (iii) |
| $−0.0001$ | (iv) |
| $−0.00001$ | (v) |
| −0.000001 | (vi) |

SOLUTION:
a. $\text{(i)}\;4.8771,$ $\text{(ii)}\;4.9875\;\text{(iii)}\;4.9988,$ $\text{(iv)}\;4.9999,$ $\text{(v)}\;4.9999,$ $\text{(vi)}\;4.9999$ b. ${m}_{\text{tan}}=5$ c. $y=5x+10$
:::

:::exercise {fs-id1169736618156} type= 
PROBLEM:
**[T]** $f(x)=\text{tan}\;(x),P(\pi ,0)$

> TABLE {tab:fs-id1169739242468} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is x, and the second column header is Slope mPQ. Under the first column are the values 3.1, 3.14, 3.141, 3.1415, 3.14159, and 3.141592. Under the second column are the labels (i), (ii), (iii), (iv), (v), and (vi).

| *x* | Slope ${m}_{PQ}$ |
| --- | --- |
| 3.1 | (i) |
| 3.14 | (ii) |
| 3.141 | (iii) |
| 3.1415 | (iv) |
| 3.14159 | (v) |
| 3.141592 | (vi) |

:::
**[T]** For the following position functions $y=s(t),$ an object is moving along a straight line, where $t$ is in seconds and $s$ is in meters. Find
a. the simplified expression for the average velocity from $t=2$ to $t=2+h;$
b. the average velocity between $t=2$ and $t=2+h,$ where $\text{(i)}\;h=0.1,$ $\text{(ii)}\;h=0.01,$ $\text{(iii)}\;h=0.001,$ and $\text{(iv)}\;h=0.0001;$ and
c. use the answer from a. to estimate the instantaneous velocity at $t=2$ second.

:::exercise {fs-id1169736616568} type= 
PROBLEM:
$s(t)=\frac{1}{3}t+5$
SOLUTION:
a. $\frac{1}{3};$ b. $\text{(i)}\;0.\bar{3}$ m/s, $\text{(ii)}\;0.\bar{3}$ m/s, $\text{(iii)}\;0.\bar{3}$ m/s, $\text{(iv)}\;0.\bar{3}$ m/s; c. $0.\bar{3}=\frac{1}{3}$ m/s
:::

:::exercise {fs-id1169736613948} type= 
PROBLEM:
$s(t)={t}^{2}-2t$
:::

:::exercise {fs-id1169736617661} type= 
PROBLEM:
$s(t)=2{t}^{3}+3$
SOLUTION:
a. $2({h}^{2}+6h+12);$ b. $\text{(i)}\;25.22$ m/s, $\text{(ii)}\;24.12$ m/s, $\text{(iii)}\;24.01$ m/s, $\text{(iv)}\;24$ m/s; c. $24$ m/s
:::

:::exercise {fs-id1169739252858} type= 
PROBLEM:
$s(t)=\frac{16}{{t}^{2}}-\frac{4}{t}$
:::

:::exercise {fs-id1169739190079} type= 
PROBLEM:
Use the following graph to evaluate a. ${f}^{'}(1)$ and b. ${f}^{'}(6).$

> IMAGE {img:fs-id1169739190131} src=../../media/CNX_Calc_Figure_03_01_201.jpg
> alt: This graph shows two connected line segments: one going from (1, 0) to (4, 6) and the other going from (4, 6) to (8, 8).

SOLUTION:
a. $1.25;$ b. $0.5$
:::

:::exercise {fs-id1169739300033} type= 
PROBLEM:
Use the following graph to evaluate a. ${f}^{'}(−3)$ and b. ${f}^{'}(1.5).$

> IMAGE {img:fs-id1169739300078} src=../../media/CNX_Calc_Figure_03_01_202.jpg
> alt: This graph shows two connected line segments: one going from (−4, 3) to (1, 3) and the other going from (1, 3) to (1.5, 4).

:::
For the following exercises, use the limit definition of derivative to show that the derivative does not exist at $x=a$ for each of the given functions.

:::exercise {fs-id1169739300121} type= 
PROBLEM:
$f(x)={x}^{1\text{/}3},x=0$
SOLUTION:
$\lim_{x\to {0}^{-}}\frac{{x}^{1\text{/}3}-0}{x-0}=\lim_{x\to {0}^{-}}\frac{1}{{x}^{2\text{/}3}}=\infty$
:::

:::exercise {fs-id1169739252080} type= 
PROBLEM:
$f(x)={x}^{2\text{/}3},x=0$
:::

:::exercise {fs-id1169739347174} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}1,x<1 \\ x,x\ge 1\end{array}\right.,x=1$
SOLUTION:
$\lim_{x\to {1}^{-}}\frac{1-1}{x-1}=0≠1=\lim_{x\to {1}^{+}}\frac{x-1}{x-1}$
:::

:::exercise {fs-id1169739274991} type= 
PROBLEM:
$f(x)=\frac{|x|}{x},x=0$
:::

:::exercise {fs-id1169739348491} type= 
PROBLEM:
**[T]** The position in feet of a race car along a straight track after $t$ seconds is modeled by the function $s(t)=8{t}^{2}-\frac{1}{16}{t}^{3}.$
a. Find the average velocity of the vehicle over the following time intervals to four decimal places:

1. [4, 4.1]
2. [4, 4.01]
3. [4, 4.001]
4. [4, 4.0001]

b. Use a. to draw a conclusion about the instantaneous velocity of the vehicle at $t=4$ seconds.
SOLUTION:
a. $\text{(i)}\;61.7244$ ft/s, $\text{(ii)}\;61.0725$ ft/s $\text{(iii)}\;61.0072$ ft/s $\text{(iv)}\;61.0007$ ft/s b. At $4$ seconds the race car is traveling at a rate/velocity of $61$ ft/s.
:::

:::exercise {fs-id1169739325674} type= 
PROBLEM:
**[T]** The distance in feet that a ball rolls down an incline is modeled by the function $s(t)=14{t}^{2},$ where *t* is seconds after the ball begins rolling.
a. Find the average velocity of the ball over the following time intervals:

1. [5, 5.1]
2. [5, 5.01]
3. [5, 5.001]
4. [5, 5.0001]

b. Use the answers from a. to draw a conclusion about the instantaneous velocity of the ball at $t=5$ seconds.
:::

:::exercise {fs-id1169739270336} type= 
PROBLEM:
Two vehicles start out traveling side by side along a straight road. Their position functions, shown in the following graph, are given by $s=f(t)$ and $s=g(t),$ where $s$ is measured in feet and $t$ is measured in seconds.

> IMAGE {img:fs-id1169739270393} src=../../media/CNX_Calc_Figure_03_01_203.jpg
> alt: Two functions s = g(t) and s = f(t) are graphed. The first function s = g(t) starts at (0, 0) and arcs upward through roughly (2, 1) to (4, 4). The second function s = f(t) is a straight line passing through (0, 0) and (4, 4).

a. Which vehicle has traveled farther at $t=2$ seconds?
b. What is the approximate velocity of each vehicle at $t=3$ seconds?
c. Which vehicle is traveling faster at $t=4$ seconds?
d. What is true about the positions of the vehicles at $t=4$ seconds?
SOLUTION:
a. The vehicle represented by $f(t),$ because it has traveled $2$ feet, whereas $g(t)$ has traveled $1$ foot. b. The velocity of $f(t)$ is constant at $1$ ft/s, while the velocity of $g(t)$ is approximately $2$ ft/s. c. The vehicle represented by $g(t),$ with a velocity of approximately $4$ ft/s. d. Both have traveled $4$ feet in $4$ seconds.
:::

:::exercise {fs-id1169739333962} type= 
PROBLEM:
**[T]** The total cost $C(x),$ in hundreds of dollars, to produce $x$ thousand jars of mayonnaise is given by $C(x)=0.000003{x}^{3}+4x+300.$
a. Calculate the average cost per jar over the following intervals:

1. [100, 100.1]
2. [100, 100.01]
3. [100, 100.001]
4. [100, 100.0001]

b. Use the answers from a. to estimate the average cost to produce $100,000$ jars of mayonnaise.
:::

:::exercise {fs-id1169736615092} type= 
PROBLEM:
**[T]** For the function $f(x)={x}^{3}-2{x}^{2}-11x+12,$ do the following.
a. Use a graphing calculator to graph *f* in an appropriate viewing window.
b. Use the ZOOM feature on the calculator to approximate the two values of $x=a$ for which ${m}_{\text{tan}}={f}^{'}(a)=0.$
SOLUTION:
a.

> IMAGE {img:fs-id1169739351713} src=../../media/CNX_Calc_Figure_03_01_204.jpg
> alt: The function starts in the third quadrant, passes through the x axis at x = −3, increases to a maximum around y = 20, decreases and passes through the x axis at x = 1, continues decreasing to a minimum around y = −13, and then increases through the x axis at x = 4, after which it continues increasing.

b. $a\approx -1.361,2.694$
:::

:::exercise {fs-id1169739351743} type= 
PROBLEM:
**[T]** For the function $f(x)=\frac{x}{1+{x}^{2}},$ do the following.
a. Use a graphing calculator to graph $f$ in an appropriate viewing window.
b. Use the ZOOM feature on the calculator to approximate the values of $x=a$ for which ${m}_{\text{tan}}={f}^{'}(a)=0.$
:::

:::exercise {fs-id1169739111313} type= 
PROBLEM:
Suppose that $N(x)$ computes the number of gallons of gas used by a vehicle traveling $x$ miles. Suppose the vehicle gets $30$ mpg.
a. Find a mathematical expression for $N(x).$
b. What is $N(100\text{)?}$ Explain the physical meaning.
c. What is ${N}^{'}(100)?$ Explain the physical meaning.
SOLUTION:
a. $N(x)=\frac{x}{30}$ b. $\sim 3.3$ gallons. When the vehicle travels $100$ miles, it has used $3.3$ gallons of gas. c. $\frac{1}{30}.$ The rate of gas consumption in gallons per mile that the vehicle is achieving after having traveled $100$ miles.
:::

:::exercise {fs-id1169739188189} type= 
PROBLEM:
**[T]** For the function $f(x)={x}^{4}-5{x}^{2}+4,$ do the following.
a. Use a graphing calculator to graph $f$ in an appropriate viewing window.
b. Use the $\text{nDeriv}$ function, which numerically finds the derivative, on a graphing calculator to estimate ${f}^{'}(−2),{f}^{'}(−0.5),{f}^{'}(1.7),$ and ${f}^{'}(2.718).$
:::

:::exercise {fs-id1169736589312} type= 
PROBLEM:
**[T]** For the function $f(x)=\frac{{x}^{2}}{{x}^{2}+1},$ do the following.
a. Use a graphing calculator to graph $f$ in an appropriate viewing window.
b. Use the $\text{nDeriv}$ function on a graphing calculator to find ${f}^{'}(−4),{f}^{'}(−2),{f}^{'}(2),$ and ${f}^{'}(4).$
SOLUTION:
a.

> IMAGE {img:fs-id1169736610341} src=../../media/CNX_Calc_Figure_03_01_207.jpg
> alt: The function starts in the second quadrant and gently decreases, touches the origin, and then it increases gently.

b. $−0.028,−0.16,0.16,0.028$
:::

## Glossary
- {def} **derivative**: the slope of the tangent line to a function at a point, calculated by taking the limit of the difference quotient, is the derivative
- {def} **difference quotient**: of a function $f(x)$ at $a$ is given by

$\frac{f(a+h)-f(a)}{h}\;\text{or}\;\frac{f(x)-f(a)}{x-a}$  {eq:fs-id1169739111122}

- {def} **differentiation**: the process of taking a derivative
- {def} **instantaneous rate of change**: the rate of change of a function at any point along the function $a,$ also called ${f}^{'}(a),$ or the derivative of the function at $a$

# Review of Functions

## Learning Objectives {section:learning-objectives}
- Use functional notation to evaluate a function.
- Determine the domain and range of a function.
- Draw the graph of a function.
- Find the zeros of a function.
- Recognize a function from a table of values.
- Make new functions from two or more given functions.
- Describe the symmetry properties of a function.

In this section, we provide a formal definition of a function and examine several ways in which functions are represented—namely, through tables, formulas, and graphs. We study formal notation and terms related to functions. We also define composition of functions and symmetry properties. Most of this material will be a review for you, but it serves as a handy reference to remind you of some of the algebraic techniques useful for working with functions.

## Functions
Given two sets $A$ and $B,$ a set with elements that are ordered pairs $(x,y),$ where $x$ is an element of $A$ and $y$ is an element of $B,$ is a relation from $A$ to $B.$ A relation from $A$ to $B$ defines a relationship between those two sets. A function is a special type of relation in which each element of the first set is related to exactly one element of the second set. The element of the first set is called the {index:*input*}; the element of the second set is called the {index:*output*}. Functions are used all the time in mathematics to describe relationships between two sets. For any function, when we know the input, the output is determined, so we say that the output is a function of the input. For example, the area of a square is determined by its side length, so we say that the area (the output) is a function of its side length (the input). The velocity of a ball thrown in the air can be described as a function of the amount of time the ball is in the air. The cost of mailing a package is a function of the weight of the package. Since functions have so many uses, it is important to have precise definitions and terminology to study them.

:::note [definition] Definition
A {term:function} $f$ consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the {term:domain} of the function. The set of outputs is called the {term:range} of the function.
:::
For example, consider the function $f,$ where the domain is the set of all real numbers and the rule is to square the input. Then, the input $x=3$ is assigned to the output ${3}^{2}=9.$ Since every nonnegative real number has a real-value square root, every nonnegative number is an element of the range of this function. Since there is no real number with a square that is negative, the negative real numbers are not elements of the range. We conclude that the range is the set of nonnegative real numbers.
For a general function $f$ with domain $D,$ we often use $x$ to denote the input and $y$ to denote the output associated with $x.$ When doing so, we refer to $x$ as the {term:independent variable} and $y$ as the {term:dependent variable}, because it depends on $x.$ Using function notation, we write $y=f(x),$ and we read this equation as $\text{“}y$ equals $f$ of $x.\text{”}$ For the squaring function described earlier, we write $f(x)={x}^{2}.$
The concept of a function can be visualized using [ref:CNX_Calc_Figure_01_01_001], [ref:CNX_Calc_Figure_01_01_002], and [ref:CNX_Calc_Figure_01_01_003].

> FIGURE {fig:CNX_Calc_Figure_01_01_001} src=../../media/CNX_Calc_Figure_01_01_001.jpg
> alt: An image with three items. The first item is text that reads “Input, x”. An arrow points from the first item to the second item, which is a box with the label “function”. An arrow points from the second item to the third item, which is text that reads “Output, f(x)”.
> caption: A function can be visualized as an input/output device.

> FIGURE {fig:CNX_Calc_Figure_01_01_002} src=../../media/CNX_Calc_Figure_01_01_002.jpg
> alt: An image with two items. The first item is a bubble labeled domain. Within the bubble are the numbers 1, 2, 3, and 4. An arrow with the label “f” points from the first item to the second item, which is a bubble labeled “range”. Within this bubble are the numbers 2, 4, and 6. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 1 in the domain bubble to the 6 in the range bubble. An arrow points from the 2 in the domain bubble to the 4 in the range bubble. An arrow points from the 3 in the domain bubble to the 2 in the range bubble. An arrow points from the 4 in the domain bubble to the 2 in the range bubble.
> caption: A function maps every element in the domain to exactly one element in the range. Although each input can be sent to only one output, two different inputs can be sent to the same output.

> FIGURE {fig:CNX_Calc_Figure_01_01_003} src=../../media/CNX_Calc_Figure_01_01_003.jpg
> alt: An image of a graph. The y axis runs from 0 to 3 and has the label “dependent variable, y = f(x)”. The x axis runs from 0 to 5 and has the label “independent variable, x”. There are three points on the graph. The first point is at (1, 2) and has the label “(1, f(1)) = (1, 2)”. The second point is at (2, 1) and has the label “(2, f(2))=(2,1)”. The third point is at (3, 2) and has the label “(3, f(3)) = (3,2)”. There is text along the y axis that reads “range = {1, 2}” and text along the x axis that reads “domain = {1,2,3}”.
> caption: In this case, a graph of a function $f$ has a domain of $\{1,2,3\}$ and a range of $\{1,2\}.$ The independent variable is $x$ and the dependent variable is $y.$

:::note [media-2] 
Visit this [applet link](http://www.openstax.org/l/grapherrors) to see more about graphs of functions.
:::
We can also visualize a function by plotting points $(x,y)$ in the coordinate plane where $y=f(x).$ The {term:graph of a function} is the set of all these points. For example, consider the function $f,$ where the domain is the set $D=\{1,2,3\}$ and the rule is $f(x)=3-x.$ In [ref:CNX_Calc_Figure_01_01_004], we plot a graph of this function.

> FIGURE {fig:CNX_Calc_Figure_01_01_004} src=../../media/CNX_Calc_Figure_01_01_004.jpg
> alt: An image of a graph. The y axis runs from 0 to 5. The x axis runs from 0 to 5. There are three points on the graph at (1, 2), (2, 1), and (3, 0). There is text along the y axis that reads “range = {0,1,2}” and text along the x axis that reads “domain = {1,2,3}”.
> caption: Here we see a graph of the function $f$ with domain $\{1,2,3\}$ and rule $f(x)=3-x.$ The graph consists of the points $(x,f(x))$ for all $x$ in the domain.

Every function has a domain. However, sometimes a function is described by an equation, as in $f(x)={x}^{2},$ with no specific domain given. In this case, the domain is taken to be the set of all real numbers, $x$, for which $f(x)$ is a real number. For example, since any real number can be squared, if no other domain is specified, we consider the domain of $f(x)={x}^{2}$ to be the set of all real numbers. On the other hand, the square root function $f(x)=\sqrt{x}$ gives a real output only if $x$ is nonnegative. Therefore, the domain of the function $f(x)=\sqrt{x}$ is the set of nonnegative real numbers, sometimes called the *natural domain*.
For the functions $f(x)={x}^{2}$ and $f(x)=\sqrt{x},$ the domains are sets with an infinite number of elements. Clearly we cannot list all these elements. When describing a set with an infinite number of elements, it is often helpful to use set-builder or interval notation. When using set-builder notation to describe a subset of all real numbers, denoted $\mathbb{R},$ we write

$\{x|x\;\text{has some property}\}.$  {eq:fs-id1170572205374}

We read this as the set of real numbers $x$ such that $x$ has some property. For example, if we were interested in the set of real numbers that are greater than one but less than five, we could denote this set using set-builder notation by writing

$\{x|1<x<5\}.$  {eq:fs-id1170572222450}

A set such as this, which contains all numbers greater than $a$ and less than $b,$ can also be denoted using the {index:interval notation} $(a,b).$ Therefore,

$(1,5)=\{x|1<x<5\}.$  {eq:fs-id1170572107834}

The numbers $1$ and $5$ are called the {index:*endpoints*} of this set. If we want to consider the set that includes the endpoints, we would denote this set by writing

$[1,5]=\{x|1\le x\le 5\}.$  {eq:fs-id1170572208944}

We can use similar notation if we want to include one of the endpoints, but not the other. To denote the set of nonnegative real numbers, we would use the set-builder notation

$\{x|0\le x\}.$  {eq:fs-id1170572228142}

The smallest number in this set is zero, but this set does not have a largest number. Using interval notation, we would use the symbol $\infty ,$ which refers to positive infinity, and we would write the set as

$[0,\infty )=\{x|0\le x\}.$  {eq:fs-id1170572242511}

It is important to note that $\infty$ is not a real number. It is used symbolically here to indicate that this set includes all real numbers greater than or equal to zero. Similarly, if we wanted to describe the set of all nonpositive numbers, we could write

$(\text{−}\infty ,0]=\{x|x\le 0\}.$  {eq:fs-id1170573359843}

Here, the notation $\text{−}\infty$ refers to negative infinity, and it indicates that we are including all numbers less than or equal to zero, no matter how small. The set

$(\text{−}\infty ,\infty )=\{x|x\;\text{is any real number}\}$  {eq:fs-id1170572167637}

refers to the set of all real numbers.
Some functions are defined using different equations for different parts of their domain. These types of functions are known as {index:*piecewise-defined functions*}. For example, suppose we want to define a function $f$ with a domain that is the set of all real numbers such that $f(x)=3x+1$ for $x\ge 2$ and $f(x)={x}^{2}$ for $x<2.$ We denote this function by writing

$f(x)=\{\begin{array}{l}3x+1\hspace{1.5em}x\ge 2 \\ {x}^{2}\hspace{3em}x<2\end{array}.$  {eq:fs-id1170573422541}

When evaluating this function for an input $x,$ the equation to use depends on whether $x\ge 2$ or $x<2.$ For example, since $5>2,$ we use the fact that $f(x)=3x+1$ for $x\ge 2$ and see that $f(5)=3(5)+1=16.$ On the other hand, for $x=−1,$ we use the fact that $f(x)={x}^{2}$ for $x<2$ and see that $f(−1)=1.$

:::example {ex:fs-id1170572455414} Evaluating Functions

:::exercise {fs-id1170572479293} type= 
PROBLEM:
For the function $f(x)=3{x}^{2}+2x-1,$ evaluate
a. $f(−2)$
b. $f(\sqrt{2})$
c. $f(a+h)$
SOLUTION:
Substitute the given value for *x* in the formula for $f(x).$
a. $f(−2)=3{(−2)}^{2}+2(−2)-1=12-4-1=7$
b. $f(\sqrt{2})=3{(\sqrt{2})}^{2}+2\sqrt{2}-1=6+2\sqrt{2}-1=5+2\sqrt{2}$
c. $\begin{array}{rl}f(a+h)=3{(a+h)}^{2}+2(a+h)-1 & =3({a}^{2}+2ah+{h}^{2})+2a+2h-1 \\ & =3{a}^{2}+6ah+3{h}^{2}+2a+2h-1\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572295325} type= 
PROBLEM:
For $f(x)={x}^{2}-3x+5,$ evaluate $f(1)$ and $f(a+h).$
SOLUTION:
$f(1)=3$ and $f(a+h)={a}^{2}+2ah+{h}^{2}-3a-3h+5$
COMMENTARY: Hint
Substitute $1$ and $a+h$ for $x$ in the formula for $f(x)\text{.}$
:::
:::

:::example {ex:fs-id1170572482440} Finding Domain and Range

:::exercise {fs-id1170572212102} type= 
PROBLEM:
For each of the following functions, determine the i. domain and ii. range.
a. $f(x)={(x-4)}^{2}+5$
b. $f(x)=\sqrt{3x+2}-1$
c. $f(x)=\frac{3}{x-2}$
SOLUTION:
a. Consider $f(x)={(x-4)}^{2}+5.$

1. Since $f(x)={(x-4)}^{2}+5$ is a real number for any real number $x,$ the domain of $f$ is the interval $(\text{−}\infty ,\infty ).$
2. Since ${(x-4)}^{2}\ge 0,$ we know $f(x)={(x-4)}^{2}+5\ge 5.$ Therefore, the range must be a subset of $\{y|y\ge 5\}.$ To show that every element in this set is in the range, we need to show that for a given $y$ in that set, there is a real number $x$ such that $f(x)={(x-4)}^{2}+5=y.$ Solving this equation for $x,$ we see that we need $x$ such that

${(x-4)}^{2}=y-5.$  {eq:fs-id1170573420317}

This equation is satisfied as long as there exists a real number $x$ such that

$x-4=\pm \sqrt{y-5}.$  {eq:fs-id1170573581655}

Since $y\ge 5,$ the square root is well-defined. We conclude that for $x=4\pm \sqrt{y-5},f(x)=y,$ and therefore the range is $\{y|y\ge 5\}.$

b. Consider $f(x)=\sqrt{3x+2}-1.$

1. To find the domain of $f,$ we need the expression $3x+2\ge 0.$ Solving this inequality, we conclude that the domain is $\{x|x\ge −2\text{/}3\}.$
2. To find the range of $f,$ we note that since $\sqrt{3x+2}\ge 0,f(x)=\sqrt{3x+2}-1\ge −1.$ Therefore, the range of $f$ must be a subset of the set $\{y|y\ge −1\}.$ To show that every element in this set is in the range of $f,$ we need to show that for all $y$ in this set, there exists a real number $x$ in the domain such that $f(x)=y.$ Let $y\ge −1.$ Then, $f(x)=y$ if and only if

$\sqrt{3x+2}-1=y.$  {eq:fs-id1170573750230}

Solving this equation for $x,$ we see that $x$ must solve the equation

$\sqrt{3x+2}=y+1.$  {eq:fs-id1170573396227}

Since $y\ge −1,$ such an $x$ could exist. Squaring both sides of this equation, we have $3x+2={(y+1)}^{2}.$

Therefore, we need

$3x={(y+1)}^{2}-2,$  {eq:fs-id1170573439299}

which implies

$x=\frac{1}{3}{(y+1)}^{2}-\frac{2}{3}.$  {eq:fs-id1170573569655}

We just need to verify that $x$ is in the domain of $f.$ Since the domain of $f$ consists of all real numbers greater than or equal to $−2\text{/}3,$ and

$\frac{1}{3}{(y+1)}^{2}-\frac{2}{3}\ge -\frac{2}{3},$  {eq:fs-id1170573237708}

there does exist an $x$ in the domain of $f.$ We conclude that the range of $f$ is $\{y|y\ge −1\}.$

c. Consider $f(x)=3\text{/}(x-2).$

1. Since $3\text{/}(x-2)$ is defined when the denominator is nonzero, the domain is $\{x|x≠2\}.$
2. To find the range of $f,$ we need to find the values of $y$ such that there exists a real number $x$ in the domain with the property that

$\frac{3}{x-2}=y.$  {eq:fs-id1170573397682}

Solving this equation for $x,$ we find that

$x=\frac{3}{y}+2.$  {eq:fs-id1170573753255}

Therefore, as long as $y≠0,$ there exists a real number $x$ in the domain such that $f(x)=y.$ Thus, the range is $\{y|y≠0\}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572140702} type= 
PROBLEM:
Find the domain and range for $f(x)=\sqrt{4-2x}+5.$
SOLUTION:
Domain = $\{x|x\le 2\},$ range = $\{y|y\ge 5\}$
COMMENTARY: Hint
Use $4-2x\ge 0\text{.}$
:::
:::

## Representing Functions
Typically, a function is represented using one or more of the following tools:
- A table
- A graph
- A formula
We can identify a function in each form, but we can also use them together. For instance, we can plot on a graph the values from a table or create a table from a formula.

### Tables
Functions described using a {term:table of values} arise frequently in real-world applications. Consider the following simple example. We can describe temperature on a given day as a function of time of day. Suppose we record the temperature every hour for a 24-hour period starting at midnight. We let our input variable $x$ be the time after midnight, measured in hours, and the output variable $y$ be the temperature $x$ hours after midnight, measured in degrees Fahrenheit. We record our data in [ref:fs-id1170572114646].

> TABLE {tab:fs-id1170572114646} cols=4
> title: Temperature as a Function of Time of Day
> summary: A table with 12 rows and 4 columns is shown. The first column is labeled “hours after midnight” and has the values “0; 1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11”. The second column is labeled “Temperature in Fahrenheit” and has the values are “58; 54; 53; 52; 52; 55; 60; 64; 72; 75; 78; 80.” The third column is labeled “hours after midnight” and continues counting where column 1 left off with “12; 13; 14; 15; 16; 17; 18; 19; 20; 21; 22; 23”. The fourth column is labeled “Temperature in Fahrenheit” and continues counting where column 2 left off with “84; 85; 85; 83; 82; 80; 77; 74; 69; 65; 60; 58”.

| Hours after Midnight | Temperature $\mathbf{(\textbf{°}F)}$ | Hours after Midnight | Temperature $\mathbf{(\textbf{°}F)}$ |
| --- | --- | --- | --- |
| 0 | 58 | 12 | 84 |
| 1 | 54 | 13 | 85 |
| 2 | 53 | 14 | 85 |
| 3 | 52 | 15 | 83 |
| 4 | 52 | 16 | 82 |
| 5 | 55 | 17 | 80 |
| 6 | 60 | 18 | 77 |
| 7 | 64 | 19 | 74 |
| 8 | 72 | 20 | 69 |
| 9 | 75 | 21 | 65 |
| 10 | 78 | 22 | 60 |
| 11 | 80 | 23 | 58 |

We can see from the table that temperature is a function of time, and the temperature decreases, then increases, and then decreases again. However, we cannot get a clear picture of the behavior of the function without graphing it.

### Graphs
Given a function $f$ described by a table, we can provide a visual picture of the function in the form of a graph. Graphing the temperatures listed in [ref:fs-id1170572114646] can give us a better idea of their fluctuation throughout the day. [ref:CNX_Calc_Figure_01_01_005] shows the plot of the temperature function.

> FIGURE {fig:CNX_Calc_Figure_01_01_005} src=../../media/CNX_Calc_Figure_01_01_005.jpg
> alt: An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58).
> caption: The graph of the data from [ref:fs-id1170572114646] shows temperature as a function of time.

From the points plotted on the graph in [ref:CNX_Calc_Figure_01_01_005], we can visualize the general shape of the graph. It is often useful to connect the dots in the graph, which represent the data from the table. In this example, although we cannot make any definitive conclusion regarding what the temperature was at any time for which the temperature was not recorded, given the number of data points collected and the pattern in these points, it is reasonable to suspect that the temperatures at other times followed a similar pattern, as we can see in [ref:CNX_Calc_Figure_01_01_014].

> FIGURE {fig:CNX_Calc_Figure_01_01_014} src=../../media/CNX_Calc_Figure_01_01_014.jpg
> alt: An image of a graph. The y axis runs from 0 to 90 and has the label “Temperature in Fahrenheit”. The x axis runs from 0 to 24 and has the label “hours after midnight”. There are 24 points on the graph, one at each increment of 1 on the x-axis. The first point is at (0, 58) and the function decreases until x = 4, where the point is (4, 52) and is the minimum value of the function. After x=4, the function increases until x = 13, where the point is (13, 85) and is the maximum of the function along with the point (14, 85). After x = 14, the function decreases until the last point on the graph, which is (23, 58). A line connects all the points on the graph.
> caption: Connecting the dots in [ref:CNX_Calc_Figure_01_01_005] shows the general pattern of the data.

### Algebraic Formulas
Sometimes we are not given the values of a function in table form, rather we are given the values in an explicit formula. Formulas arise in many applications. For example, the area of a circle of radius $r$ is given by the formula $A(r)=\pi {r}^{2}.$ When an object is thrown upward from the ground with an initial velocity ${v}_{0}$ ft/s, its height above the ground from the time it is thrown until it hits the ground is given by the formula $s(t)=−16{t}^{2}+{v}_{0}t.$ When $P$ dollars are invested in an account at an annual interest rate $r$ compounded continuously, the amount of money after $t$ years is given by the formula $A(t)=P{e}^{rt}.$ Algebraic formulas are important tools to calculate function values. Often we also represent these functions visually in graph form.
Given an algebraic formula for a function $f,$ the graph of $f$ is the set of points $(x,f(x)),$ where $x$ is in the domain of $f$ and $f(x)$ is in the range. To graph a function given by a formula, it is helpful to begin by using the formula to create a table of inputs and outputs. If the domain of $f$ consists of an infinite number of values, we cannot list all of them, but because listing some of the inputs and outputs can be very useful, it is often a good way to begin.
When creating a table of inputs and outputs, we typically check to determine whether zero is an output. Those values of $x$ where $f(x)=0$ are called the {term:zeros of a function}. For example, the zeros of $f(x)={x}^{2}-4$ are $x=\pm 2.$ The zeros determine where the graph of $f$ intersects the $x$-axis, which gives us more information about the shape of the graph of the function. The graph of a function may never intersect the *x*-axis, or it may intersect multiple (or even infinitely many) times.
Another point of interest is the $y$-intercept, if it exists. The $y$-intercept is given by $(0,f(0)).$
Since a function has exactly one output for each input, the graph of a function can have, at most, one $y$-intercept. If $x=0$ is in the domain of a function $f,$ then $f$ has exactly one $y$-intercept. If $x=0$ is not in the domain of $f,$ then $f$ has no $y$-intercept. Similarly, for any real number $c,$ if $c$ is in the domain of $f,$ there is exactly one output $f(c),$ and the line $x=c$ intersects the graph of $f$ exactly once. On the other hand, if $c$ is not in the domain of $f,f(c)$ is not defined and the line $x=c$ does not intersect the graph of $f.$ This property is summarized in the {term:vertical line test}.

:::note [rule] Rule: Vertical Line Test
Given a function $f,$ every vertical line that may be drawn intersects the graph of $f$ no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.
:::
We can use this test to determine whether a set of plotted points represents the graph of a function ([ref:CNX_Calc_Figure_01_01_006]).

> FIGURE {fig:CNX_Calc_Figure_01_01_006} src=../../media/CNX_Calc_Figure_01_01_006.jpg
> alt: An image of two graphs. The first graph is labeled “a” and is of the function “y = f(x)”. Three vertical lines run through 3 points on the function, each vertical line only passing through the function once. The second graph is labeled “b” and is of the relation “y not equal to f(x)”. Two vertical lines run through the relation, one line intercepting the relation at 3 points and the other line intercepting the relation at 3 different points.
> caption: (a) The set of plotted points represents the graph of a function because every vertical line intersects the set of points, at most, once. (b) The set of plotted points does not represent the graph of a function because some vertical lines intersect the set of points more than once.

:::example {ex:fs-id1170572169516} Finding Zeros and $y$-Intercepts of a Function

:::exercise {fs-id1170572205057} type= 
PROBLEM:
Consider the function $f(x)=−4x+2.$
a. Find all zeros of $f.$
b. Find the $y$-intercept (if any).
c. Sketch a graph of $f.$
SOLUTION:
a. To find the zeros, solve $f(x)=−4x+2=0.$ We discover that $f$ has one zero at $x=1\text{/}2.$
b. The $y$-intercept is given by $(0,f(0))=(0,2).$
c. Given that $f$ is a linear function of the form $f(x)=mx+b$ that passes through the points $(1\text{/}2,0)$ and $(0,2),$ we can sketch the graph of $f$ ([ref:CNX_Calc_Figure_01_01_007]).

> FIGURE {fig:CNX_Calc_Figure_01_01_007} src=../../media/CNX_Calc_Figure_01_01_007.jpg
> alt: An image of a graph. The y axis runs from -2 to 5 and the x axis runs from -2 to 5. The graph is of the function “f(x) = -4x + 2”, which is a decreasing straight line. There are two points plotted on the function at (0, 2) and (1/2, 0).
> caption: The function $f(x)=−4x+2$ is a line with
$x$-intercept $(1\text{/}2,0)$ and $y$-intercept $(0,2).$

:::
:::

:::example {ex:fs-id1170572141676} Using Zeros and $y$-Intercepts to Sketch a Graph

:::exercise {fs-id1170572228570} type= 
PROBLEM:
Consider the function $f(x)=\sqrt{x+3}+1.$
a. Find all zeros of $f.$
b. Find the $y$-intercept (if any).
c. Sketch a graph of $f.$
SOLUTION:
a. To find the zeros, solve $\sqrt{x+3}+1=0.$ This equation implies $\sqrt{x+3}=−1.$ Since $\sqrt{x+3}\ge 0$ for all $x,$ this equation has no solutions, and therefore $f$ has no zeros.
b. The $y$-intercept is given by $(0,f(0))=(0,\sqrt{3}+1).$
c. To graph this function, we make a table of values. Since we need $x+3\ge 0,$ we need to choose values of $x\ge −3.$ We choose values that make the square-root function easy to evaluate.

> TABLE {tab:fs-id1170572247842} cols=4 class=column-header
> summary: A table with 2 rows and 3 columns. The first row is labeled “x” and has the values “-3; -2; 1”. The second row is labeled “f(x)” and has the values “1; 2; 3”.

|  |  |  |  |
| --- | --- | --- | --- |
| $\text{x}$ | $−3$ | $−2$ | $1$ |
| $\text{f}(\text{x})$ | $1$ | $2$ | $3$ |

Making use of the table and knowing that, since the function is a square root, the graph of $f$ should be similar to the graph of $y=\sqrt{x},$ we sketch the graph ([ref:CNX_Calc_Figure_01_01_008]).

> FIGURE {fig:CNX_Calc_Figure_01_01_008} src=../../media/CNX_Calc_Figure_01_01_008.jpg
> alt: An image of a graph. The y axis runs from -2 to 4 and the x axis runs from -3 to 2. The graph is of the function “f(x) = (square root of x + 3) + 1”, which is an increasing curved function that starts at the point (-3, 1). There are 3 points plotted on the function at (-3, 1), (-2, 2), and (1, 3). The function has a y intercept at (0, 1 + square root of 3).
> caption: The graph of $f(x)=\sqrt{x+3}+1$ has a
$y$-intercept but no $x$-intercepts.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572241309} type= 
PROBLEM:
Find the zeros of $f(x)={x}^{3}-5{x}^{2}+6x.$
SOLUTION:
$x=0,2,3$
COMMENTARY: Hint
Factor the polynomial.
:::
:::

:::example {ex:fs-id1170572175021} Finding the Height of a Free-Falling Object

:::exercise {fs-id1170572482421} type= 
PROBLEM:
If a ball is dropped from a height of $100$ ft, its height $s$ at time $t$ is given by the function $s(t)=−16{t}^{2}+100,$ where $s$ is measured in feet and $t$ is measured in seconds. The domain is restricted to the interval $[0,c],$ where $t=0$ is the time when the ball is dropped and $t=c$ is the time when the ball hits the ground.
a. Create a table showing the height $s(t)$ when $t=0,0.5,1,1.5,2,\text{and}\;2.5.$ Using the data from the table, determine the domain for this function. That is, find the time $c$ when the ball hits the ground.
b. Sketch a graph of $s.$
SOLUTION:
a. 

> TABLE {tab:fs-id1170572205037} cols=7 class=column-header
> title: Height $s$ as a Function of Time $t$
> summary: A table with 2 rows and 6 columns. The first row is labeled “t” and has the values “0; 0.5; 1; 1.5; 2; 2.5”. The second row is labeled “s(t)” and has the values “100; 96; 84; 64; 36; 0”.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $\text{t}$ | $0$ | $0.5$ | $1$ | $1.5$ | $2$ | $2.5$ |
| $\text{s}(\text{t})$ | $100$ | $96$ | $84$ | $64$ | $36$ | $0$ |

Since the ball hits the ground when $t=2.5,$ the domain of this function is the interval $[0,2.5].$
b. 

> IMAGE {img:fs-id1170572480926} src=../../media/CNX_Calc_Figure_01_01_009.jpg
> alt: An image of a graph. The y axis runs from 0 to 100 and is labeled “s(t), height in feet”. The x axis runs from 0 to 3 and is labeled “t, time in seconds”. The graph is of the function “s(t) = -16 t squared + 100”, which is a decreasing curved function that starts at the y intercept point (0, 100). There are 6 points plotted on the function at (0, 100), (0.5, 96), (1, 84), (1.5, 64), (2, 36), and (2.5, 0). The function has a x intercept at the last point (2.5, 0).

:::
:::
Note that for this function and the function $f(x)=−4x+2$ graphed in [ref:CNX_Calc_Figure_01_01_007], the values of $f(x)$ are getting smaller as $x$ is getting larger. A function with this property is said to be decreasing. On the other hand, for the function $f(x)=\sqrt{x+3}+1$ graphed in [ref:CNX_Calc_Figure_01_01_008], the values of $f(x)$ are getting larger as the values of $x$ are getting larger. A function with this property is said to be increasing. It is important to note, however, that a function can be increasing on some interval or intervals and decreasing over a different interval or intervals. For example, using our temperature function in [ref:CNX_Calc_Figure_01_01_005], we can see that the function is decreasing on the interval $(0,4),$ increasing on the interval $(4,14),$ and then decreasing on the interval $(14,23).$ We make the idea of a function increasing or decreasing over a particular interval more precise in the next definition.

:::note [definition] Definition
We say that a function $f$ is {term:increasing on the interval $I$} if for all ${x}_{1},{x}_{2}\in I,$

$f({x}_{1})\le f({x}_{2})\;\text{when}\;{x}_{1}<{x}_{2}.$  {eq:fs-id1170572167332}

We say $f$ is strictly increasing on the interval $I$ if for all ${x}_{1},{x}_{2}\in I,$

$f({x}_{1})<f({x}_{2})\;\text{when}\;{x}_{1}<{x}_{2}.$  {eq:fs-id1170572455510}

We say that a function $f$ is {term:decreasing on the interval $I$} if for all ${x}_{1},{x}_{2}\in I,$

$f({x}_{1})\ge f({x}_{2})\;\text{if}\;{x}_{1}<{x}_{2}.$  {eq:fs-id1170572549217}

We say that a function $f$ is strictly decreasing on the interval $I$ if for all ${x}_{1},{x}_{2}\in I,$

$f({x}_{1})>f({x}_{2})\;\text{if}\;{x}_{1}<{x}_{2}.$  {eq:fs-id1170572454409}

:::
For example, the function $f(x)=3x$ is increasing on the interval $(\text{−}\infty ,\infty )$ because $3{x}_{1}<3{x}_{2}$ whenever ${x}_{1}<{x}_{2}.$ On the other hand, the function $f(x)=\text{−}{x}^{3}$ is strictly decreasing on the interval $(\text{−}\infty ,\infty )$ because $\text{−}{x}_{1}^{3}>-{x}_{2}^{3}$ whenever ${x}_{1}<{x}_{2}$ ([ref:CNX_Calc_Figure_01_01_010]).

> FIGURE {fig:CNX_Calc_Figure_01_01_010} src=../../media/CNX_Calc_Figure_01_01_010.jpg
> alt: An image of two graphs. The first graph is labeled “a” and is of the function “f(x) = 3x”, which is an increasing straight line that passes through the origin. The second graph is labeled “b” and is of the function “f(x) = -x cubed”, which is curved function that decreases until the function hits the origin where it becomes level, then decreases again after the origin.
> caption: (a) The function $f(x)=3x$ is increasing on the interval $(\text{−}\infty ,\infty ).$ (b) The function $f(x)=\text{−}{x}^{3}$ is decreasing on the interval $(\text{−}\infty ,\infty ).$

## Combining Functions
Now that we have reviewed the basic characteristics of functions, we can see what happens to these properties when we combine functions in different ways, using basic mathematical operations to create new functions. For example, if the cost for a company to manufacture $x$ items is described by the function $C(x)$ and the revenue created by the sale of $x$ items is described by the function $R(x),$ then the profit on the manufacture and sale of $x$ items is defined as $P(x)=R(x)-C(x).$ Using the difference between two functions, we created a new function.
Alternatively, we can create a new function by composing two functions. For example, given the functions $f(x)={x}^{2}$ and $g(x)=3x+1,$ the composite function $f\circ g$ is defined such that

$(f\circ g)(x)=f(g(x))={(g(x))}^{2}={(3x+1)}^{2}.$  {eq:fs-id1170572247955}

The composite function $g\circ f$ is defined such that

$(g\circ f)(x)=g(f(x))=3f(x)+1=3{x}^{2}+1.$  {eq:fs-id1170572481486}

Note that these two new functions are different from each other.

### Combining Functions with Mathematical Operators
To combine functions using mathematical operators, we simply write the functions with the operator and simplify. Given two functions $f$ and $g,$ we can define four new functions:

$\begin{array}{llll}(f+g)(x)=f(x)+g(x) & & & Sum \\ (f-g)(x)=f(x)-g(x) & & & \text{Difference} \\ (f\cdot g)(x)=f(x)g(x) & & & Product \\ (\frac{f}{g})(x)=\frac{f(x)}{g(x)}\;\text{for}\;g(x)≠0 & & & Quotient\end{array}$  {eq:fs-id1170572167731}

:::example {ex:fs-id1170572549843} Combining Functions Using Mathematical Operations

:::exercise {fs-id1170572549848} type= 
PROBLEM:
Given the functions $f(x)=2x-3$ and $g(x)={x}^{2}-1,$ find each of the following functions and state its domain.
a. $(f+g)(x)$
b. $(f-g)(x)$
c. $(f\cdot g)(x)$
d. $(\frac{f}{g})(x)$
SOLUTION:
a. $(f+g)(x)=(2x-3)+({x}^{2}-1)={x}^{2}+2x-4.$ The domain of this function is the interval $(\text{−}\infty ,\infty ).$
b. $(f-g)(x)=(2x-3)-({x}^{2}-1)=\text{−}{x}^{2}+2x-2.$ The domain of this function is the interval $(\text{−}\infty ,\infty ).$
c. $(f\cdot g)(x)=(2x-3)({x}^{2}-1)=2{x}^{3}-3{x}^{2}-2x+3.$ The domain of this function is the interval $(\text{−}\infty ,\infty ).$
d. $(\frac{f}{g})(x)=\frac{2x-3}{{x}^{2}-1}.$ The domain of this function is $\{x|x≠\text{±}1\}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572548533} type= 
PROBLEM:
For $f(x)={x}^{2}+3$ and $g(x)=2x-5,$ find $(f\text{/}g)(x)$ and state its domain.
SOLUTION:
$(\frac{f}{g})(x)=\frac{{x}^{2}+3}{2x-5}.$ The domain is $\{x|x≠\frac{5}{2}\}.$
COMMENTARY: Hint
The new function $(f\text{/}g)(x)$ is a quotient of two functions. For what values of $x$ is the denominator zero?
:::
:::

### Function Composition
When we compose functions, we take a function of a function. For example, suppose the temperature $T$ on a given day is described as a function of time $t$ (measured in hours after midnight) as in [ref:fs-id1170572114646]. Suppose the cost $C,$ to heat or cool a building for 1 hour, can be described as a function of the temperature $T.$ Combining these two functions, we can describe the cost of heating or cooling a building as a function of time by evaluating $C(T(t)).$ We have defined a new function, denoted $C\circ T,$ which is defined such that $(C\circ T)(t)=C(T(t))$ for all $t$ in the domain of $T.$ This new function is called a composite function. We note that since cost is a function of temperature and temperature is a function of time, it makes sense to define this new function $(C\circ T)(t).$ It does not make sense to consider $(T\circ C)(t),$ because temperature is not a function of cost.

:::note [definition] Definition
Consider the function $f$ with domain $A$ and range $B,$ and the function $g$ with domain $D$ and range $E.$ If $B$ is a subset of $D,$ then the {term:composite function} $(g\circ f)(x)$ is the function with domain $A$ such that

$$ (g\circ f)(x)=g(f(x)). $$  {eq:fs-id1170572176830}

:::
A composite function $g\circ f$ can be viewed in two steps. First, the function $f$ maps each input $x$ in the domain of $f$ to its output $f(x)$ in the range of $f.$ Second, since the range of $f$ is a subset of the domain of $g,$ the output $f(x)$ is an element in the domain of $g,$ and therefore it is mapped to an output $g(f(x))$ in the range of $g.$ In [ref:CNX_Calc_Figure_01_01_011], we see a visual image of a composite function.

> FIGURE {fig:CNX_Calc_Figure_01_01_011} src=../../media/CNX_Calc_Figure_01_01_011.jpg
> alt: An image with three items. The first item is a blue bubble that has two labels: “domain of f” and “domain of g of f”. This item contains the numbers 1, 2, and 3. The second item is two bubbles: an orange bubble labeled “domain of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of f”. The blue bubble contains the numbers 0 and 1, which are thus also contained within the larger orange bubble. The orange bubble contains two numbers not contained within the smaller blue bubble, which are 2 and 3. The third item is two bubbles: an orange bubble labeled “range of g” and a blue bubble that is completely contained within the orange bubble and is labeled “range of g of f”. The blue bubble contains the numbers 4 and 5, which are thus also contained within the larger orange bubble. The orange bubble contains one number not contained within the smaller blue bubble, which is the number 3. The first item points has a blue arrow with the label “f” that points to the blue bubble in the second item. The orange bubble in the second item has an orange arrow labeled “g” that points the orange bubble in the third item. The first item has a blue arrow labeled “g of f” which points to the blue bubble in the third item. There are three blue arrows pointing from numbers in the first item to the numbers contained in the blue bubble of the second item. The first blue arrow points from the 1 to the 0, the second blue arrow points from the 2 to the 1, and the third blue arrow points from the 3 to the 0. There are 4 orange arrows pointing from the numbers contained in the orange bubble in the second item, including those also contained in the blue bubble of the second item, to the numbers contained in the orange bubble of the third item, including the numbers in the blue bubble of the third item. The first orange arrow points from 2 to 3, the second orange arrow points from 3 to 5, the third orange arrow points from 0 to 4, and the fourth orange arrow points from 1 to 5.
> caption: For the composite function $g\circ f,$ we have $(g\circ f)(1)=4,(g\circ f)(2)=5,$ and $(g\circ f)(3)=4.$

:::example {ex:fs-id1170572481349} Compositions of Functions Defined by Formulas

:::exercise {fs-id1170572481355} type= 
PROBLEM:
Consider the functions $f(x)={x}^{2}+1$ and $g(x)=1\text{/}x.$
a. Find $(g\circ f)(x)$ and state its domain and range.
b. Evaluate $(g\circ f)(4),(g\circ f)(−1\text{/}2).$
c. Find $(f\circ g)(x)$ and state its domain and range.
d. Evaluate $(f\circ g)(4),(f\circ g)(−1\text{/}2).$
SOLUTION:
a. We can find the formula for $(g\circ f)(x)$ in two different ways. We could write

$(g\circ f)(x)=g(f(x))=g({x}^{2}+1)=\frac{1}{{x}^{2}+1}.$  {eq:fs-id1170571109518}

Alternatively, we could write

$(g\circ f)(x)=g(f(x))=\frac{1}{f(x)}=\frac{1}{{x}^{2}+1}.$  {eq:fs-id1170573521539}

Since ${x}^{2}+1≠0$ for all real numbers $x,$ the domain of $(g\circ f)(x)$ is the set of all real numbers. Since $0<1\text{/}({x}^{2}+1)\le 1,$ the range is, at most, the interval $(0,1].$ To show that the range is this entire interval, we let $y=1\text{/}({x}^{2}+1)$ and solve this equation for $x$ to show that for all $y$ in the interval $(0,1],$ there exists a real number $x$ such that $y=1\text{/}({x}^{2}+1).$ Solving this equation for $x,$ we see that ${x}^{2}+1=1\text{/}y,$ which implies that

$x=\pm \sqrt{\frac{1}{y}-1}.$  {eq:fs-id1170573368782}

If $y$ is in the interval $(0,1],$ the expression under the radical is nonnegative, and therefore there exists a real number $x$ such that $1\text{/}({x}^{2}+1)=y.$ We conclude that the range of $g\circ f$ is the interval $(0,1].$
b. $(g\circ f)(4)=g(f(4))=g({4}^{2}+1)=g(17)=\frac{1}{17}$

$(g\circ f)(-\frac{1}{2})=g(f(-\frac{1}{2}))=g({(-\frac{1}{2})}^{2}+1)=g(\frac{5}{4})=\frac{4}{5}$
c. We can find a formula for $(f\circ g)(x)$ in two ways. First, we could write

$(f\circ g)(x)=f(g(x))=f(\frac{1}{x})={(\frac{1}{x})}^{2}+1.$  {eq:fs-id1170573750183}

Alternatively, we could write

$(f\circ g)(x)=f(g(x))={(g(x))}^{2}+1={(\frac{1}{x})}^{2}+1.$  {eq:fs-id1170571123790}

The domain of $f\circ g$ is the set of all real numbers $x$ such that $x≠0.$ To find the range of $f,$ we need to find all values $y$ for which there exists a real number $x≠0$ such that

${(\frac{1}{x})}^{2}+1=y.$  {eq:fs-id1170571118828}

Solving this equation for $x,$ we see that we need $x$ to satisfy

${(\frac{1}{x})}^{2}=y-1,$  {eq:fs-id1170571118874}

which simplifies to

$\frac{1}{x}=\pm \sqrt{y-1}.$  {eq:fs-id1170571330548}

Finally, we obtain

$x=\pm \frac{1}{\sqrt{y-1}}.$  {eq:fs-id1170571282415}

Since $1\text{/}\sqrt{y-1}$ is a real number if and only if $y>1,$ the range of $f\circ g$ is the set $\{y|y>1\}.$
d. $(f\circ g)(4)=f(g(4))=f(\frac{1}{4})={(\frac{1}{4})}^{2}+1=\frac{17}{16}$

$(f\circ g)(-\frac{1}{2})=f(g(-\frac{1}{2}))=f(−2)={(−2)}^{2}+1=5$
:::
:::
In [ref:fs-id1170572481349], we can see that $(f\circ g)(x)≠(g\circ f)(x).$ This tells us, in general terms, that the order in which we compose functions matters.

:::note [checkpoint] 

:::exercise {fs-id1170572483661} type= 
PROBLEM:
Let $f(x)=2-5x.$ Let $g(x)=\sqrt{x}.$ Find $(f\circ g)(x).$
SOLUTION:
$(f\circ g)(x)=2-5\sqrt{x}.$
:::
:::

:::example {ex:fs-id1170572173789} Composition of Functions Defined by Tables

:::exercise {fs-id1170572173794} type= 
PROBLEM:
Consider the functions $f$ and $g$ described by [ref:fs-id1170572173822] and [ref:fs-id1170572550754].

> TABLE {tab:fs-id1170572173822} cols=9 class=column-header
> summary: A table with 2 rows and 8 columns. The first row is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3; 4”. The second row is labeled “f(x)” and has the values “0; 4; 2; 4; -2; 0; -2; 4”.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\text{x}$ | $−3$ | $−2$ | $−1$ | 0 | 1 | 2 | 3 | 4 |
| $\text{f}(\text{x})$ | 0 | 4 | 2 | 4 | $−2$ | 0 | $−2$ | 4 |

> TABLE {tab:fs-id1170572550754} cols=6 class=column-header
> summary: A table with 2 rows and 5 columns. The first row is labeled “x” and has the values “-4; -2; 0; 2; 4”. The second row is labeled “g(x)” and has the values “1; 0; 3; 0; 5”.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| $\text{x}$ | $−4$ | $−2$ | 0 | 2 | 4 |
| $\text{g}(\text{x})$ | 1 | 0 | 3 | 0 | 5 |

a. Evaluate $(g\circ f)(3),(g\circ f)(0).$
b. State the domain and range of $(g\circ f)(x).$
c. Evaluate $(f\circ f)(3),(f\circ f)(1).$
d. State the domain and range of $(f\circ f)(x).$
SOLUTION:
a. $(g\circ f)(3)=g(f(3))=g(−2)=0$

$\; (g\circ f)(0)=g(4)=5$
b. The domain of $g\circ f$ is the set $\{−3,−2,−1,0,1,2,3,4\}.$ Since the range of $f$ is the set $\{−2,0,2,4\},$ the range of $g\circ f$ is the set $\{0,3,5\}.$
c. $(f\circ f)(3)=f(f(3))=f(−2)=4$

$(f\circ f)(1)=f(f(1))=f(−2)=4$
d. The domain of $f\circ f$ is the set $\{−3,−2,−1,0,1,2,3,4\}.$ Since the range of $f$ is the set $\{−2,0,2,4\},$ the range of $f\circ f$ is the set $\{0,4\}.$
:::
:::

:::example {ex:fs-id1170572173737} Application Involving a Composite Function

:::exercise {fs-id1170572173742} type= 
PROBLEM:
A store is advertising a sale of $20\%$ off all merchandise. Caroline has a coupon that entitles her to an additional $15\%$ off any item, including sale merchandise. If Caroline decides to purchase an item with an original price of $x$ dollars, how much will she end up paying if she applies her coupon to the sale price? Solve this problem by using a composite function.
SOLUTION:
Since the sale price is $20\%$ off the original price, if an item is $x$ dollars, its sale price is given by $f(x)=0.80x.$ Since the coupon entitles an individual to $15\%$ off the price of any item, if an item is $y$ dollars, the price, after applying the coupon, is given by $g(y)=0.85y.$ Therefore, if the price is originally $x$ dollars, its sale price will be $f(x)=0.80x$ and then its final price after the coupon will be $g(f(x))=0.85(0.80x)=0.68x.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572480214} type= 
PROBLEM:
If items are on sale for $10\%$ off their original price, and a customer has a coupon for an additional $30\%$ off, what will be the final price for an item that is originally $x$ dollars, after applying the coupon to the sale price?
SOLUTION:
$(g\circ f)(x)=0.63x$
COMMENTARY: Hint
The sale price of an item with an original price of $x$ dollars is $f(x)=0.90x.$ The coupon price for an item that is $y$ dollars is $g(y)=0.70y\text{.}$
:::
:::

## Symmetry of Functions
The graphs of certain functions have symmetry properties that help us understand the function and the shape of its graph. For example, consider the function $f(x)={x}^{4}-2{x}^{2}-3$ shown in [ref:CNX_Calc_Figure_01_01_012](a). If we take the part of the curve that lies to the right of the *y*-axis and flip it over the *y*-axis, it lays exactly on top of the curve to the left of the *y*-axis. In this case, we say the function has {term:symmetry about the *y*-axis}. On the other hand, consider the function $f(x)={x}^{3}-4x$ shown in [ref:CNX_Calc_Figure_01_01_012](b). If we take the graph and rotate it $180\text{°}$ about the origin, the new graph will look exactly the same. In this case, we say the function has {term:symmetry about the origin}.

> FIGURE {fig:CNX_Calc_Figure_01_01_012} src=../../media/CNX_Calc_Figure_01_01_012.jpg
> alt: An image of two graphs. The first graph is labeled “(a), symmetry about the y-axis” and is of the curved function “f(x) = (x to the 4th) - 2(x squared) - 3”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. This function decreases until it hits the point (-1, -4), which is minimum of the function. Then the graph increases to the point (0,3), which is a local maximum. Then the the graph decreases until it hits the point (1, -4), before it increases again. The second graph is labeled “(b), symmetry about the origin” and is of the curved function “f(x) = x cubed - 4x”. The x axis runs from -3 to 4 and the y axis runs from -4 to 5. The graph of the function starts at the x intercept at (-2, 0) and increases until the approximate point of (-1.2, 3.1). The function then decreases, passing through the origin, until it hits the approximate point of (1.2, -3.1). The function then begins to increase again and has another x intercept at (2, 0).
> caption: (a) A graph that is symmetric about the $y$-axis. (b) A graph that is symmetric about the origin.

If we are given the graph of a function, it is easy to see whether the graph has one of these symmetry properties. But without a graph, how can we determine algebraically whether a function $f$ has symmetry? Looking at [ref:CNX_Calc_Figure_01_01_012] again, we see that since $f$ is symmetric about the $y$-axis, if the point $(x,y)$ is on the graph, the point $(\text{−}x,y)$ is on the graph. In other words, $f(\text{−}x)=f(x).$ If a function $f$ has this property, we say $f$ is an even function, which has symmetry about the *y*-axis. For example, $f(x)={x}^{2}$ is even because

$f(\text{−}x)={(\text{−}x)}^{2}={x}^{2}=f(x).$  {eq:fs-id1170572552270}

In contrast, looking at [ref:CNX_Calc_Figure_01_01_012] again, if a function $f$ is symmetric about the origin, then whenever the point $(x,y)$ is on the graph, the point $(\text{−}x,\text{−}y)$ is also on the graph. In other words, $f(\text{−}x)=\text{−}f(x).$ If $f$ has this property, we say $f$ is an odd function, which has symmetry about the origin. For example, $f(x)={x}^{3}$ is odd because

$f(\text{−}x)={(\text{−}x)}^{3}=\text{−}{x}^{3}=\text{−}f(x).$  {eq:fs-id1170572548910}

:::note [definition] Definition
If $f(x)=f(\text{−}x)$ for all $x$ in the domain of $f,$ then $f$ is an {term:even function}. An even function is symmetric about the *y*-axis.
If $f(\text{−}x)=\text{−}f(x)$ for all $x$ in the domain of $f,$ then $f$ is an {term:odd function}. An odd function is symmetric about the origin.
:::

:::example {ex:fs-id1170572169671} Even and Odd Functions

:::exercise {fs-id1170572169677} type= 
PROBLEM:
Determine whether each of the following functions is even, odd, or neither.
a. $f(x)=−5{x}^{4}+7{x}^{2}-2$
b. $f(x)=2{x}^{5}-4x+5$
c. $f(x)=\frac{3x}{{x}^{2}+1}$
SOLUTION:
To determine whether a function is even or odd, we evaluate $f(\text{−}x)$ and compare it to *f*(*x*) and $\text{−}f(x).$
a. $f(\text{−}x)=−5{(\text{−}x)}^{4}+7{(\text{−}x)}^{2}-2=−5{x}^{4}+7{x}^{2}-2=f(x).$ Therefore, $f$ is even.
b. $f(\text{−}x)=2{(\text{−}x)}^{5}-4(\text{−}x)+5=−2{x}^{5}+4x+5.$ Now, $f(\text{−}x)≠f(x).$ Furthermore, noting that $\text{−}f(x)=−2{x}^{5}+4x-5,$ we see that $f(\text{−}x)≠\text{−}f(x).$ Therefore, $f$ is neither even nor odd.
c. $f(\text{−}x)=3(\text{−}x)\text{/}({(\text{−}x)}^{2}+1)=−3x\text{/}({x}^{2}+1)=\text{−}[3x\text{/}({x}^{2}+1)]=\text{−}f(x).$ Therefore, $f$ is odd.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572478820} type= 
PROBLEM:
Determine whether $f(x)=4{x}^{3}-5x$ is even, odd, or neither.
SOLUTION:
$f(x)$ is odd.
COMMENTARY: Hint
Compare $f(\text{−}x)$ with $f(x)$ and $\text{−}f(x)\text{.}$
:::
:::
One symmetric function that arises frequently is the {term:absolute value function}, written as $|x|.$ The absolute value function is defined as

$$ f(x)=\{\begin{array}{l}\text{−}x,x<0 \\ x,x\ge 0\end{array}. $$  {eq:fs-id1170572547420}

Some students describe this function by stating that it “makes everything positive.” By the definition of the absolute value function, we see that if $x<0,$ then $|x|=\text{−}x>0,$ and if $x>0,$ then $|x|=x>0.$ However, for $x=0,|x|=0.$ Therefore, it is more accurate to say that for all nonzero inputs, the output is positive, but if $x=0,$ the output $|x|=0.$ We conclude that the range of the absolute value function is $\{y|y\ge 0\}.$ In [ref:CNX_Calc_Figure_01_01_013], we see that the absolute value function is symmetric about the *y*-axis and is therefore an even function.

> FIGURE {fig:CNX_Calc_Figure_01_01_013} src=../../media/CNX_Calc_Figure_01_01_013.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -4 to 4. The graph is of the function “f(x) = absolute value of x”. The graph starts at the point (-3, 3) and decreases in a straight line until it hits the origin. Then the graph increases in a straight line until it hits the point (3, 3).
> caption: The graph of $f(x)=|x|$ is symmetric about the $y$-axis.

:::example {ex:fs-id1170572551051} Working with the Absolute Value Function

:::exercise {fs-id1170572551056} type= 
PROBLEM:
Find the domain and range of the function $f(x)=2|x-3|+4.$
SOLUTION:
Since the absolute value function is defined for all real numbers, the domain of this function is $(\text{−}\infty ,\infty ).$ Since $|x-3|\ge 0$ for all $x,$ the function $f(x)=2|x-3|+4\ge 4.$ Therefore, the range is, at most, the set $\{y|y\ge 4\}.$ To see that the range is, in fact, this whole set, we need to show that for $y\ge 4$ there exists a real number $x$ such that

$2|x-3|+4=y.$  {eq:fs-id1170572551112}

A real number $x$ satisfies this equation as long as

$|x-3|=\frac{1}{2}(y-4).$  {eq:fs-id1170572551151}

Since $y\ge 4,$ we know $y-4\ge 0,$ and thus the right-hand side of the equation is nonnegative, so it is possible that there is a solution. Furthermore,

$|x-3|=\{\begin{array}{l}-(x-3)\;\text{if}\;x<3 \\ x-3\hspace{2em}\text{if}\;x\ge 3\end{array}.$  {eq:fs-id1170572366200}

Therefore, we see there are two solutions:

$x=\pm \frac{1}{2}(y-4)+3.$  {eq:fs-id1170572366289}

The range of this function is $\{y|y\ge 4\}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572548618} type= 
PROBLEM:
For the function $f(x)=|x+2|-4,$ find the domain and range.
SOLUTION:
Domain = $(\text{−}\infty ,\infty ),$ range = $\{y|y\ge −4\}.$
COMMENTARY: Hint
$|x+2|\ge 0$ for all real numbers $x\text{.}$
:::
:::

## Key Concepts {section:key-concepts}
- A function is a mapping from a set of inputs to a set of outputs with exactly one output for each input.
- If no domain is stated for a function $y=f(x),$ the domain is considered to be the set of all real numbers $x$ for which the function is defined.
- When sketching the graph of a function $f,$ each vertical line may intersect the graph, at most, once.
- A function may have any number of zeros, but it has, at most, one *y*-intercept.
- To define the composition $g\circ f,$ the range of $f$ must be contained in the domain of $g.$
- Even functions are symmetric about the $y$-axis whereas odd functions are symmetric about the origin.

## Key Equations {section:key-equations}

> TABLE {tab:eip-479} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Composition of two functions** | $(g\circ f)(x)=g(f(x))$ |
| **Absolute value function** | $f(x)=\{\begin{array}{l}\text{−}x,x<0 \\ x,x\ge 0\end{array}$ |

##  {section:section-exercises}
For the following exercises, (a) determine the domain and the range of each relation, and (b) state whether the relation is a function.

:::exercise {fs-id1170572554559} type= 
PROBLEM:

> TABLE {tab:fs-id1170572554567} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “9; 4; 1; 0; 1; 4; 9”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | 9 | 1 | 1 |
| −2 | 4 | 2 | 4 |
| −1 | 1 | 3 | 9 |
| 0 | 0 |  |  |

SOLUTION:
a. Domain = $\{−3,−2,−1,0,1,2,3\},$ range = $\{0,1,4,9\}$ b. Yes, a function
:::

:::exercise {fs-id1170572550816} type= 
PROBLEM:

> TABLE {tab:fs-id1170572550824} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-3; -2; -1; 0; 1; 2; 3”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | −2 | 1 | 1 |
| −2 | −8 | 2 | 8 |
| −1 | −1 | 3 | −2 |
| 0 | 0 |  |  |

:::

:::exercise {fs-id1170572549262} type= 
PROBLEM:

> TABLE {tab:fs-id1170572549270} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “1; 2; 3; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-3; -2; -1; 0; 1; 2; 3”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| 1 | −3 | 1 | 1 |
| 2 | −2 | 2 | 2 |
| 3 | −1 | 3 | 3 |
| 0 | 0 |  |  |

SOLUTION:
a. Domain = $\{0,1,2,3\},$ range = $\{−3,−2,−1,0,1,2,3\}$ b. No, not a function
:::

:::exercise {fs-id1170572547676} type= 
PROBLEM:

> TABLE {tab:fs-id1170572168347} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “1; 2; 3; 4; 5; 6; 7”. The second column is labeled “y” and the values are “1; 1; 1; 1; 1; 1; 1”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| 1 | 1 | 5 | 1 |
| 2 | 1 | 6 | 1 |
| 3 | 1 | 7 | 1 |
| 4 | 1 |  |  |

:::

:::exercise {fs-id1170572203528} type= 
PROBLEM:

> TABLE {tab:fs-id1170572203536} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “3; 5; 8; 10; 15; 21; 33”. The second column is labeled “y” and the values are “3; 2; 1; 0; 1; 2; 3”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| 3 | 3 | 15 | 1 |
| 5 | 2 | 21 | 2 |
| 8 | 1 | 33 | 3 |
| 10 | 0 |  |  |

SOLUTION:
a. Domain = $\{3,5,8,10,15,21,33\},$ range = $\{0,1,2,3\}$ b. Yes, a function
:::

:::exercise {fs-id1170572481235} type= 
PROBLEM:

> TABLE {tab:fs-id1170572481243} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-7; -2; -2; 0; 1; 3; 6”. The second column is labeled “y” and the values are “11; 5; 1; -1; -2; 4; 11”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −7 | 11 | 1 | −2 |
| −2 | 5 | 3 | 4 |
| −2 | 1 | 6 | 11 |
| 0 | −1 |  |  |

:::
For the following exercises, find the values for each function, if they exist, then simplify.
a. $f(0)$ b. $f(1)$ c. $f(3)$ d. $f(\text{−}x)$ e. $f(a)$ f. $f(a+h)$

:::exercise {fs-id1170572452196} type= 
PROBLEM:
$f(x)=5x-2$
SOLUTION:
a. $−2$ b. 3 c. 13 d. $−5x-2$ e. $5a-2$ f. $5a+5h-2$
:::

:::exercise {fs-id1170572547970} type= 
PROBLEM:
$f(x)=4{x}^{2}-3x+1$
:::

:::exercise {fs-id1170572549684} type= 
PROBLEM:
$f(x)=\frac{2}{x}$
SOLUTION:
a. Undefined b. 2 c. $\frac{2}{3}$ d. $-\frac{2}{x}$ e $\frac{2}{a}$ f. $\frac{2}{a+h}$
:::

:::exercise {fs-id1170572549759} type= 
PROBLEM:
$f(x)=|x-7|+8$
:::

:::exercise {fs-id1170572451476} type= 
PROBLEM:
$f(x)=\sqrt{6x+5}$
SOLUTION:
a. $\sqrt{5}$ b. $\sqrt{11}$ c. $\sqrt{23}$ d. $\sqrt{−6x+5}$ e. $\sqrt{6a+5}$ f. $\sqrt{6a+6h+5}$
:::

:::exercise {fs-id1170572451584} type= 
PROBLEM:
$f(x)=\frac{x-2}{3x+7}$
:::

:::exercise {fs-id1170572452605} type= 
PROBLEM:
$f(x)=9$
SOLUTION:
a. 9 b. 9 c. 9 d. 9 e. 9 f. 9
:::
For the following exercises, find the domain, range, and all zeros/intercepts, if any, of the functions.

:::exercise {fs-id1170572449158} type= 
PROBLEM:
$f(x)=\frac{x}{{x}^{2}-16}$
:::

:::exercise {fs-id1170572449228} type= 
PROBLEM:
$g(x)=\sqrt{8x-1}$
SOLUTION:
$x\ge \frac{1}{8};y\ge 0;x=\frac{1}{8};$ no *y*-intercept
:::

:::exercise {fs-id1170572449306} type= 
PROBLEM:
$h(x)=\frac{3}{{x}^{2}+4}$
:::

:::exercise {fs-id1170572548401} type= 
PROBLEM:
$f(x)=−1+\sqrt{x+2}$
SOLUTION:
$x\ge −2;y\ge −1;x=−1;y=−1+\sqrt{2}$
:::

:::exercise {fs-id1170572548485} type= 
PROBLEM:
$f(x)=\frac{1}{\sqrt{x-9}}$
:::

:::exercise {fs-id1170572229270} type= 
PROBLEM:
$g(x)=\frac{3}{x-4}$
SOLUTION:
$x≠4;y≠0;$ no *x*-intercept; $y=-\frac{3}{4}$
:::

:::exercise {fs-id1170572229347} type= 
PROBLEM:
$f(x)=4|x+5|$
:::

:::exercise {fs-id1170572451278} type= 
PROBLEM:
$g(x)=\sqrt{\frac{7}{x-5}}$
SOLUTION:
$x>5;y>0;$ no intercepts
:::
For the following exercises, sketch the graph with the aid of the tables given:

:::exercise {fs-id1170572451381} type= 
PROBLEM:
$f(x)={x}^{2}+1$

> TABLE {tab:fs-id1170572451415} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “10; 5; 2; 1; 2; 5; 10”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | 10 | 1 | 2 |
| −2 | 5 | 2 | 5 |
| −1 | 2 | 3 | 10 |
| 0 | 1 |  |  |

:::

:::exercise {fs-id1170572142280} type= 
PROBLEM:
$f(x)=3x-6$

> TABLE {tab:fs-id1170572548974} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-15; -12; -9; -6; -3; 0; 3”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | −15 | 1 | −3 |
| −2 | −12 | 2 | 0 |
| −1 | −9 | 3 | 3 |
| 0 | −6 |  |  |

SOLUTION:

> IMAGE {img:fs-id1170572451690} src=../../media/CNX_Calc_Figure_01_01_202.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -3 to 3. The graph is of the function “f(x) = 3x - 6”, which is an increasing straight line. The function has an x intercept at (2, 0) and the y intercept is not shown.

:::

:::exercise {fs-id1170572451702} type= 
PROBLEM:
$f(x)=\frac{1}{2}x+1$

> TABLE {tab:fs-id1170572451738} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-(1/2); 0; (1/2); 1; (3/2); 2; (5/2)”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | $-\frac{1}{2}$ | 1 | $\frac{3}{2}$ |
| −2 | 0 | 2 | 2 |
| −1 | $\frac{1}{2}$ | 3 | $\frac{5}{2}$ |
| 0 | 1 |  |  |

:::

:::exercise {fs-id1170572547833} type= 
PROBLEM:
$f(x)=2|x|$

> TABLE {tab:fs-id1170572547867} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “6; 4; 2; 0; 2; 4; 6”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | 6 | 1 | 2 |
| −2 | 4 | 2 | 4 |
| −1 | 2 | 3 | 6 |
| 0 | 0 |  |  |

SOLUTION:

> IMAGE {img:fs-id1170572455193} src=../../media/CNX_Calc_Figure_01_01_204.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -2 to 6. The graph is of the function “f(x) = 2 times the absolute value of x”. The function decreases in a straight line until it hits the origin, then begins to increase in a straight line. The function x intercept and y intercept are at the origin.

:::

:::exercise {fs-id1170572455207} type= 
PROBLEM:
$f(x)=\text{−}{x}^{2}$

> TABLE {tab:fs-id1170572455238} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-9; -4; -1; 0; -1; -4; -9”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | −9 | 1 | −1 |
| −2 | −4 | 2 | −4 |
| −1 | −1 | 3 | −9 |
| 0 | 0 |  |  |

:::

:::exercise {fs-id1170572551561} type= 
PROBLEM:
$f(x)={x}^{3}$

> TABLE {tab:fs-id1170572545096} cols=4 class=unnumbered
> summary: A table with 7 rows and 2 columns. The first column is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3”. The second column is labeled “y” and the values are “-27; -8; -1; 0; 1; 8; 27”.

| $x$ | $y$ | $x$ | $y$ |
| --- | --- | --- | --- |
| −3 | −27 | 1 | 1 |
| −2 | −8 | 2 | 8 |
| −1 | −1 | 3 | 27 |
| 0 | 0 |  |  |

SOLUTION:

> IMAGE {img:fs-id1170572545267} src=../../media/CNX_Calc_Figure_01_01_206.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -27 to 27. The graph is of the function “f(x) = x cubed”. The curved function increases until it hits the origin, where it levels out and then becomes even. After the origin the graph begins to increase again. The x intercept and y intercept are both at the origin.

:::
For the following exercises, use the vertical line test to determine whether each of the given graphs represents a function. **Assume that a graph continues at both ends if it extends beyond the given grid.** If the graph represents a function, then determine the following for each graph:
a. Domain and range
b. $x$-intercept, if any (estimate where necessary)
c. $y$-intercept, if any (estimate where necessary)
d. The intervals for which the function is increasing
e. The intervals for which the function is decreasing
f. The intervals for which the function is constant
g. Symmetry about any axis and/or the origin
h. Whether the function is even, odd, or neither

:::exercise {fs-id1170572169120} type= 
PROBLEM:

> IMAGE {img:fs-id1170572169124} src=../../media/CNX_Calc_Figure_01_01_207.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is circle, with x intercepts at (-1, 0) and (1, 0) and y intercepts at (0, 1) and (0, -1).

:::

:::exercise {fs-id1170572169146} type= 
PROBLEM:

> IMAGE {img:fs-id1170572169150} src=../../media/CNX_Calc_Figure_01_01_208.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is curved. The relation decreases until it hits the point (-1, 0), then increases until it hits the point (0, 1), then decreases until it hits the point (1, 0), then increases again.

SOLUTION:
Function; a. Domain: all real numbers, range: $y\ge 0$ b. $x=\pm 1$ c. $y=1$ d. $−1<x<0$ and $1<x<\infty$ e. $\text{−}\infty <x<-1$ and $0<x<1$ f. Not constant g. *y*-axis h. Even
:::

:::exercise {fs-id1170572243741} type= 
PROBLEM:

> IMAGE {img:fs-id1170572243746} src=../../media/CNX_Calc_Figure_01_01_209.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is a parabola. The curved relation increases until it hits the point (2, 3), then begins to decrease. The approximate x intercepts are at (0.3, 0) and (3.7, 0) and the y intercept is is (-1, 0).

:::

:::exercise {fs-id1170572243837} type= 
PROBLEM:

> IMAGE {img:fs-id1170572243842} src=../../media/CNX_Calc_Figure_01_01_217.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is curved. The curved relation increases the entire time. The x intercept and y intercept are both at the origin.

SOLUTION:
Function; a. Domain: all real numbers, range: $−1.5\le y\le 1.5$ b. $x=0$ c. $y=0$ d. $\text{all real numbers}$ e. None f. Not constant g. Origin h. Odd
:::

:::exercise {fs-id1170572482578} type= 
PROBLEM:

> IMAGE {img:fs-id1170572482582} src=../../media/CNX_Calc_Figure_01_01_211.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is a sideways parabola, opening up to the right. The x intercept and y intercept are both at the origin and the relation has no points to the left of the y axis. The relation includes the points (1, -1) and (1, 1)

:::

:::exercise {fs-id1170572482605} type= 
PROBLEM:

> IMAGE {img:fs-id1170572482609} src=../../media/CNX_Calc_Figure_01_01_212.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is a horizontal line until the point (-2, -2), then it begins increasing in a straight line until the point (2, 2). After these points, the relation becomes a horizontal line again. The x intercept and y intercept are both at the origin.

SOLUTION:
Function; a. Domain: $\text{−}\infty <x<\infty ,$ range: $−2\le y\le 2$ b. $x=0$ c. $y=0$ d. $−2<x<2$ e. Not decreasing f. $\text{−}\infty <x<-2$ and $2<x<\infty$ g. Origin h. Odd
:::

:::exercise {fs-id1170572482729} type= 
PROBLEM:

> IMAGE {img:fs-id1170572482734} src=../../media/CNX_Calc_Figure_01_01_213.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that is a horizontal line until the origin, then it begins increasing in a straight line. The x intercept and y intercept are both at the origin and there are no points below the x axis.

:::

:::exercise {fs-id1170572229080} type= 
PROBLEM:

> IMAGE {img:fs-id1170572229084} src=../../media/CNX_Calc_Figure_01_01_214.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a relation that starts at the point (-4, 4) and is a horizontal line until the point (0, 4), then it begins decreasing in a curved line until it hits the point (4, -4), where the graph ends. The x intercept is approximately at the point (1.2, 0) and y intercept is at the point (0, 4).

SOLUTION:
Function; a. Domain: $−4\le x\le 4,$ range: $−4\le y\le 4$ b. $x=1.2$ c. $y=4$ d. Not increasing e. $0<x<4$ f. $−4<x<0$ g. No Symmetry h. Neither
:::
For the following exercises, for each pair of functions, find a. $f+g$ b. $f-g$ c. $f\cdot g$ d. $f\text{/}g.$ Determine the domain of each of these new functions.

:::exercise {fs-id1170572551808} type= 
PROBLEM:
$f(x)=3x+4,g(x)=x-2$
:::

:::exercise {fs-id1170572551945} type= 
PROBLEM:
$f(x)=x-8,g(x)=5{x}^{2}$
SOLUTION:
a. $5{x}^{2}+x-8;$ all real numbers b. $−5{x}^{2}+x-8;$ all real numbers c. $5{x}^{3}-40{x}^{2};$ all real numbers d. $\frac{x-8}{5{x}^{2}};\;x≠0$
:::

:::exercise {fs-id1170572550610} type= 
PROBLEM:
$f(x)=3{x}^{2}+4x+1,g(x)=x+1$
:::

:::exercise {fs-id1170572231974} type= 
PROBLEM:
$f(x)=9-{x}^{2},g(x)={x}^{2}-2x-3$
SOLUTION:
a. $−2x+6;$ all real numbers b. $−2{x}^{2}+2x+12;$ all real numbers c. $\text{−}{x}^{4}+2{x}^{3}+12{x}^{2}-18x-27;$ all real numbers d. $-\frac{x+3}{x+1};\;x≠\text{−}1,3$
:::

:::exercise {fs-id1170572480431} type= 
PROBLEM:
$f(x)=\sqrt{x},g(x)=x-2$
:::

:::exercise {fs-id1170572174661} type= 
PROBLEM:
$f(x)=6+\frac{1}{x},g(x)=\frac{1}{x}$
SOLUTION:
a. $6+\frac{2}{x};\;x≠0$ b. 6; $x≠0$ c. $\frac{6}{x}+\frac{1}{{x}^{2}};\;x≠0$ d. $6x+1;\;x≠0$
:::
For the following exercises, for each pair of functions, find a. $(f\circ g)(x)$ and b. $(g\circ f)(x)$ Simplify the results. Find the domain of each of the results.

:::exercise {fs-id1170572267927} type= 
PROBLEM:
$f(x)=3x,g(x)=x+5$
:::

:::exercise {fs-id1170572268008} type= 
PROBLEM:
$f(x)=x+4,g(x)=4x-1$
SOLUTION:
a. $4x+3;$ all real numbers b. $4x+15;$ all real numbers
:::

:::exercise {fs-id1170572268093} type= 
PROBLEM:
$f(x)=2x+4,g(x)={x}^{2}-2$
:::

:::exercise {fs-id1170572219452} type= 
PROBLEM:
$f(x)={x}^{2}+7,g(x)={x}^{2}-3$
SOLUTION:
a. ${x}^{4}-6{x}^{2}+16;$ all real numbers b. ${x}^{4}+14{x}^{2}+46;$ all real numbers
:::

:::exercise {fs-id1170572219563} type= 
PROBLEM:
$f(x)=\sqrt{x},g(x)=x+9$
:::

:::exercise {fs-id1170572309929} type= 
PROBLEM:
$f(x)=\frac{3}{2x+1},g(x)=\frac{2}{x}$
SOLUTION:
a. $\frac{3x}{4+x};x≠0,−4$ b. $\frac{4x+2}{3};\;x≠-\frac{1}{2}$
:::

:::exercise {fs-id1170572310054} type= 
PROBLEM:
$f(x)=|x+1|,g(x)={x}^{2}+x-4$
:::

:::exercise {fs-id1170572128767} type= 
PROBLEM:
The table below lists the NBA championship winners for the years 2001 to 2012.

> TABLE {tab:fs-id1170572128778} cols=2 class=unnumbered
> summary: A table with 12 rows and 2 columns. The first column is labeled “year” and has the values “2001; 2002; 2003; 2004; 2005; 2006; 2007; 2008; 2009; 2010; 2011; 2012”. The second column is labeled “winner” and the values are “LA Lakers; LA Lakers; San Antonio Spurs; Detroit Pistons; San Antonio Spurs; Miami Heat; San Antonio Spurs; Boston Celtics; LA Lakers; LA Lakers; Dallas Mavericks; Miami Heat”.

| Year | Winner |
| --- | --- |
| 2001 | LA Lakers |
| 2002 | LA Lakers |
| 2003 | San Antonio Spurs |
| 2004 | Detroit Pistons |
| 2005 | San Antonio Spurs |
| 2006 | Miami Heat |
| 2007 | San Antonio Spurs |
| 2008 | Boston Celtics |
| 2009 | LA Lakers |
| 2010 | LA Lakers |
| 2011 | Dallas Mavericks |
| 2012 | Miami Heat |

a. Consider the relation in which the domain values are the years 2001 to 2012 and the range is the corresponding winner. Is this relation a function? Explain why or why not.
b. Consider the relation where the domain values are the winners and the range is the corresponding years. Is this relation a function? Explain why or why not.
SOLUTION:
a. Yes, because there is only one winner for each year. b. No, because there are three teams that won more than once during the years 2001 to 2012.
:::

:::exercise {fs-id1170572233919} type= 
PROBLEM:
**[T]** The area $A$ of a square depends on the length of the side $s.$
a. Write a function $A(s)$ for the area of a square.
b. Find and interpret $A(6.5).$
c. Find the exact and the two-significant-digit approximation to the length of the sides of a square with area 56 square units.
:::

:::exercise {fs-id1170572478068} type= 
PROBLEM:
**[T]** The volume of a cube depends on the length of the sides $s.$
a. Write a function $V(s)$ for the volume of a cube.
b. Find and interpret $V(11.8).$
SOLUTION:
a. $V(s)={s}^{3}$ b. $V(11.8)\approx 1643;$ a cube of side length 11.8 each has a volume of approximately 1643 cubic units.
:::

:::exercise {fs-id1170572431446} type= 
PROBLEM:
**[T]** A rental car company rents cars for a flat fee of $20 and an hourly charge of $10.25. Therefore, the total cost $C$ to rent a car is a function of the hours $t$ the car is rented plus the flat fee.
a. Write the formula for the function that models this situation.
b. Find the total cost to rent a car for 2 days and 7 hours.
c. Determine how long the car was rented if the bill is $430.
:::

:::exercise {fs-id1170572431519} type= 
PROBLEM:
**[T]** A vehicle has a 20-gal tank and gets 15 mpg. The number of miles *N* that can be driven depends on the amount of gas *x* in the tank.
a. Write a formula that models this situation.
b. Determine the number of miles the vehicle can travel on (i) a full tank of gas and (ii) 3/4 of a tank of gas.
c. Determine the domain and range of the function.
d. Determine how many times the driver had to stop for gas if she has driven a total of 578 mi.
SOLUTION:
a. $N(x)=15x$ b. i. $N(20)=15(20)=300;$ therefore, the vehicle can travel 300 mi on a full tank of gas. Ii. $N(15)=225;$ therefore, the vehicle can travel 225 mi on 3/4 of a tank of gas. c. Domain: $0\le x\le 20;$ range: $[0,300]$ d. The driver had to stop at least once, given that it takes approximately 39 gal of gas to drive a total of 578 mi.
:::

:::exercise {fs-id1170572171648} type= 
PROBLEM:
**[T]** The volume *V* of a sphere depends on the length of its radius as $V=(4\text{/}3)\pi {r}^{3}.$ Because Earth is not a perfect sphere, we can use the *mean radius* when measuring from the center to its surface. The mean radius is the average distance from the physical center to the surface, based on a large number of samples. Find the volume of Earth with mean radius $6.371\;\times \;{10}^{6}$ m.
:::

:::exercise {fs-id1170572171742} type= 
PROBLEM:
**[T]** A certain bacterium grows in culture in a circular region. The radius of the circle, measured in centimeters, is given by $r(t)=6-[5\text{/}({t}^{2}+1)],$ where *t* is time measured in hours since a circle of a 1-cm radius of the bacterium was put into the culture.
a. Express the area of the bacteria as a function of time.
b. Find the exact and approximate area of the bacterial culture in 3 hours.
c. Express the circumference of the bacteria as a function of time.
d. Find the exact and approximate circumference of the bacteria in 3 hours.
SOLUTION:
a. $A(t)=A(r(t))=\pi \cdot {(6-\frac{5}{{t}^{2}+1})}^{2}$ b. Exact: $\frac{121\pi}{4};$ approximately 95 cm<sup>2</sup> c. $C(t)=C(r(t))=2\pi (6-\frac{5}{{t}^{2}+1})$ d. Exact: $11\pi ;$ approximately 35 cm
:::

:::exercise {fs-id1170572234464} type= 
PROBLEM:
**[T]** An American tourist visits Paris and must convert U.S. dollars to Euros, which can be done using the function $E(x)=0.79x,$ where *x* is the number of U.S. dollars and $E(x)$ is the equivalent number of Euros. Since conversion rates fluctuate, when the tourist returns to the United States 2 weeks later, the conversion from Euros to U.S. dollars is $D(x)=1.245x,$ where *x* is the number of Euros and $D(x)$ is the equivalent number of U.S. dollars.
a. Find the composite function that converts directly from U.S. dollars to U.S. dollars via Euros. Did this tourist lose value in the conversion process?
b. Use (a) to determine how many U.S. dollars the tourist would get back at the end of her trip if she converted an extra $200 when she arrived in Paris.
:::

:::exercise {fs-id1170572425343} type= 
PROBLEM:
**[T]** The manager at a skateboard shop pays his workers a monthly salary *S* of $750 plus a commission of $8.50 for each skateboard they sell.
a. Write a function $y=S(x)$ that models a worker’s monthly salary based on the number of skateboards *x* he or she sells.
b. Find the monthly salary when a worker sells 25, 40, or 55 skateboards.
c. Use the INTERSECT feature on a graphing calculator to determine the number of skateboards that must be sold for a worker to earn a monthly income of $1400. (*Hint*: Find the intersection of the function and the line $y=1400\text{.)}$

> IMAGE {img:fs-id1170572425418} src=../../media/CNX_Calc_Figure_01_01_215.jpg
> alt: An image of a graph. The y axis runs from 0 to 1800 and the x axis runs from 0 to 100. The graph is of the function “y = s(x)”, which is a increasing straight line. The function has a y intercept at (0, 750) and the x intercept is not shown.

SOLUTION:
a. $S(x)=8.5x+750$ b. $962.50, $1090, $1217.50 c. 77 skateboards
:::

:::exercise {fs-id1170572443386} type= 
PROBLEM:
**[T]** Use a graphing calculator to graph the half-circle $y=\sqrt{25-{(x-4)}^{2}}.$ Then, use the INTERCEPT feature to find the value of both the $x$- and $y$-intercepts.

> IMAGE {img:fs-id1170572443441} src=../../media/CNX_Calc_Figure_01_01_216.jpg
> alt: An image of a graph. The y axis runs from -6 to 6 and the x axis runs from -1 to 10. The graph is of the function that is a semi-circle (the top half of a circle). The function has the begins at the point (-1, 0), runs through the point (0, 3), has maximum at the point (4, 5), and ends at the point (9, 0). None of these points are labeled, they are just for reference.

:::

## Glossary
- {def} **absolute value function**: $f(x)=\{\begin{array}{l}\text{−}x,x<0 \\ x,x\ge 0\end{array}$
- {def} **composite function**: given two functions $f$ and $g,$ a new function, denoted $g\circ f,$ such that $(g\circ f)(x)=g(f(x))$
- {def} **decreasing on the interval $I$**: a function decreasing on the interval $I$ if, for all ${x}_{1},{x}_{2}\in I,f({x}_{1})\ge f({x}_{2})$ if ${x}_{1}<{x}_{2}$
- {def} **dependent variable**: the output variable for a function
- {def} **domain**: the set of inputs for a function
- {def} **even function**: a function is even if $f(\text{−}x)=f(x)$ for all $x$ in the domain of $f$
- {def} **function**: a set of inputs, a set of outputs, and a rule for mapping each input to exactly one output
- {def} **graph of a function**: the set of points $(x,y)$ such that $x$ is in the domain of $f$ and $y=f(x)$
- {def} **increasing on the interval $I$**: a function increasing on the interval $I$ if for all ${x}_{1},{x}_{2}\in I,f({x}_{1})\le f({x}_{2})$ if ${x}_{1}<{x}_{2}$
- {def} **independent variable**: the input variable for a function
- {def} **odd function**: a function is odd if $f(\text{−}x)=\text{−}f(x)$ for all $x$ in the domain of $f$
- {def} **range**: the set of outputs for a function
- {def} **symmetry about the origin**: the graph of a function $f$ is symmetric about the origin if $(\text{−}x,\text{−}y)$ is on the graph of $f$ whenever $(x,y)$ is on the graph
- {def} **symmetry about the *y*-axis**: the graph of a function $f$ is symmetric about the $y$-axis if $(\text{−}x,y)$ is on the graph of $f$ whenever $(x,y)$ is on the graph
- {def} **table of values**: a table containing a list of inputs and their corresponding outputs
- {def} **vertical line test**: given the graph of a function, every vertical line intersects the graph, at most, once
- {def} **zeros of a function**: when a real number $x$ is a zero of a function $f,f(x)=0$

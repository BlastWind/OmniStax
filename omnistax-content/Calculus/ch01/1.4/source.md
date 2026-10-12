# Inverse Functions

## Learning Objectives {section:learning-objectives}
- Determine the conditions for when a function has an inverse.
- Use the horizontal line test to recognize when a function is one-to-one.
- Find the inverse of a given function.
- Draw the graph of an inverse function.
- Evaluate inverse trigonometric functions.

An inverse function reverses the operation done by a particular function. In other words, whatever a function does, the inverse function undoes it. In this section, we define an inverse function formally and state the necessary conditions for an inverse function to exist. We examine how to find an inverse function and study the relationship between the graph of a function and the graph of its inverse. Then we apply these ideas to define and discuss properties of the inverse trigonometric functions.

## Existence of an Inverse Function
We begin with an example. Given a function $f$ and an output $y=f(x),$ we are often interested in finding what value or values $x$ were mapped to $y$ by $f.$ For example, consider the function $f(x)={x}^{3}+4.$ Since any output $y={x}^{3}+4,$ we can solve this equation for $x$ to find that the input is $x=\sqrt[3]{y-4}.$ This equation defines $x$ as a function of $y.$ Denoting this function as ${f}^{−1},$ and writing $x={f}^{−1}(y)=\sqrt[3]{y-4},$ we see that for any $x$ in the domain of $f,{f}^{−1}(f(x))={f}^{−1}({x}^{3}+4)=x.$ Thus, this new function, ${f}^{−1},$ “undid” what the original function $f$ did. A function with this property is called the inverse function of the original function.

:::note [definition] Definition
Given a function $f$ with domain $D$ and range $R,$ its {term:inverse function} (if it exists) is the function ${f}^{−1}$ with domain $R$ and range $D$ such that ${f}^{−1}(y)=x$ if $f(x)=y.$ In other words, for a function $f$ and its inverse ${f}^{−1},$

$$ {f}^{−1}(f(x))=x\;\text{for all}\;x\;\text{in}\;D,\text{and}\;f({f}^{−1}(y))=y\;\text{for all}\;y\;\text{in}\;R. $$  {eq:fs-id1170572141883}

:::
Note that ${f}^{−1}$ is read as “f inverse.” Here, the $−1$ is not used as an exponent and ${f}^{−1}(x)≠1\text{/}f(x).$ [ref:CNX_Calc_Figure_01_04_001] shows the relationship between the domain and range of *f* and the domain and range of ${f}^{−1}.$

> FIGURE {fig:CNX_Calc_Figure_01_04_001} src=../../media/CNX_Calc_Figure_01_04_001.jpg
> alt: An image of two bubbles. The first bubble is orange and has two labels: the top label is “Domain of f” and the bottom label is “Range of f inverse”. Within this bubble is the variable “x”. An orange arrow with the label “f” points from this bubble to the second bubble. The second bubble is blue and has two labels: the top label is “range of f” and the bottom label is “domain of f inverse”. Within this bubble is the variable “y”. A blue arrow with the label “f inverse” points from this bubble to the first bubble.
> caption: Given a function $f$ and its inverse ${f}^{−1},{f}^{−1}(y)=x$ if and only if $f(x)=y.$ The range of $f$ becomes the domain of ${f}^{−1}$ and the domain of $f$ becomes the range of ${f}^{−1}.$

Recall that a function has exactly one output for each input. Therefore, to define an inverse function, we need to map each input to exactly one output. For example, let’s try to find the inverse function for $f(x)={x}^{2}.$ Solving the equation $y={x}^{2}$ for $x,$ we arrive at the equation $x=\pm \sqrt{y}.$ This equation does not describe $x$ as a function of $y$ because there are two solutions to this equation for every $y>0.$ The problem with trying to find an inverse function for $f(x)={x}^{2}$ is that two inputs are sent to the same output for each output $y>0.$ The function $f(x)={x}^{3}+4$ discussed earlier did not have this problem. For that function, each input was sent to a different output. A function that sends each input to a *different* output is called a one-to-one function.

:::note [definition] Definition
We say a $f$ is a {term:one-to-one function} if $f({x}_{1})≠f({x}_{2})$ when ${x}_{1}≠{x}_{2}.$
:::
One way to determine whether a function is one-to-one is by looking at its graph. If a function is one-to-one, then no two inputs can be sent to the same output. Therefore, if we draw a horizontal line anywhere in the $xy$-plane, according to the {term:horizontal line test}, it cannot intersect the graph more than once. We note that the horizontal line test is different from the vertical line test. The vertical line test determines whether a graph is the graph of a function. The horizontal line test determines whether a function is one-to-one ([ref:CNX_Calc_Figure_01_04_002]).

:::note [rule] Rule: Horizontal Line Test
A function $f$ is one-to-one if and only if every horizontal line intersects the graph of $f$ no more than once.
:::

> FIGURE {fig:CNX_Calc_Figure_01_04_002} src=../../media/CNX_Calc_Figure_01_04_002.jpg
> alt: An image of two graphs. Both graphs have an x axis that runs from -3 to 3 and a y axis that runs from -3 to 4. The first graph is of the function “f(x) = x squared”, which is a parabola. The function decreases until it hits the origin, where it begins to increase. The x intercept and y intercept are both at the origin. There are two orange horizontal lines also plotted on the graph, both of which run through the function at two points each. The second graph is of the function “f(x) = x cubed”, which is an increasing curved function. The x intercept and y intercept are both at the origin. There are three orange lines also plotted on the graph, each of which only intersects the function at one point.
> caption: (a) The function $f(x)={x}^{2}$ is not one-to-one because it fails the horizontal line test. (b) The function $f(x)={x}^{3}$ is one-to-one because it passes the horizontal line test.

:::example {ex:fs-id1170572228079} Determining Whether a Function Is One-to-One

:::exercise {fs-id1170572102492} type= 
PROBLEM:
For each of the following functions, use the horizontal line test to determine whether it is one-to-one.
a. 
> IMAGE {img:fs-id1170572108141} src=../../media/CNX_Calc_Figure_01_04_003.jpg
> alt: An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9)

b. 
> IMAGE {img:fs-id1170572140980} src=../../media/CNX_Calc_Figure_01_04_004.jpg
> alt: An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote.

SOLUTION:
a. Since the horizontal line $y=n$ for any integer $n\ge 0$ intersects the graph more than once, this function is not one-to-one.

> IMAGE {img:fs-id1170572107320} src=../../media/CNX_Calc_Figure_01_04_005.jpg
> alt: An image of a graph. The x axis runs from -3 to 11 and the y axis runs from -3 to 11. The graph is of a step function which contains 10 horizontal steps. Each steps starts with a closed circle and ends with an open circle. The first step starts at the origin and ends at the point (1, 0). The second step starts at the point (1, 1) and ends at the point (1, 2). Each of the following 8 steps starts 1 unit higher in the y direction than where the previous step ended. The tenth and final step starts at the point (9, 9) and ends at the point (10, 9). There are also two horizontal orange lines plotted on the graph, each of which run through an entire step of the function.

b. Since every horizontal line intersects the graph once (at most), this function is one-to-one.

> IMAGE {img:fs-id1170572454307} src=../../media/CNX_Calc_Figure_01_04_006.jpg
> alt: An image of a graph. The x axis runs from -3 to 6 and the y axis runs from -3 to 6. The graph is of the function “f(x) = (1/x)”, a curved decreasing function. The graph of the function starts right below the x axis in the 4th quadrant and begins to decreases until it comes close to the y axis. The graph keeps decreasing as it gets closer and closer to the y axis, but never touches it due to the vertical asymptote. In the first quadrant, the graph of the function starts close to the y axis and keeps decreasing until it gets close to the x axis. As the function continues to decreases it gets closer and closer to the x axis without touching it, where there is a horizontal asymptote. There are also three horizontal orange lines plotted on the graph, each of which only runs through the function at one point.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572141532} type= 
PROBLEM:
Is the function $f$ graphed in the following image one-to-one?

> IMAGE {img:fs-id1170572224899} src=../../media/CNX_Calc_Figure_01_04_007.jpg
> alt: An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of the function “f(x) = (x cubed) - x” which is a curved function. The function increases, decreases, then increases again. The x intercepts are at the points (-1, 0), (0,0), and (1, 0). The y intercept is at the origin.

SOLUTION:
No.
COMMENTARY: Hint
Use the horizontal line test.
:::
:::

## Finding a Function’s Inverse
We can now consider one-to-one functions and show how to find their inverses. Recall that a function maps elements in the domain of $f$ to elements in the range of $f.$ The inverse function maps each element from the range of $f$ back to its corresponding element from the domain of $f.$ Therefore, to find the inverse function of a one-to-one function $f,$ given any $y$ in the range of $f,$ we need to determine which $x$ in the domain of $f$ satisfies $f(x)=y.$ Since $f$ is one-to-one, there is exactly one such value $x.$ We can find that value $x$ by solving the equation $f(x)=y$ for $x.$ Doing so, we are able to write $x$ as a function of $y$ where the domain of this function is the range of $f$ and the range of this new function is the domain of $f.$ Consequently, this function is the inverse of $f,$ and we write $x={f}^{−1}(y).$ Since we typically use the variable $x$ to denote the independent variable and $y$ to denote the dependent variable, we often interchange the roles of $x$ and $y,$ and write $y={f}^{−1}(x).$ Representing the inverse function in this way is also helpful later when we graph a function $f$ and its inverse ${f}^{−1}$ on the same axes.

:::note [problem-solving] Finding an Inverse Function
1. Solve the equation $y=f(x)$ for $x.$
2. Interchange the variables $x$ and $y$ and write $y={f}^{−1}(x).$
:::

:::example {ex:fs-id1170572208522} Finding an Inverse Function

:::exercise {fs-id1170572240528} type= 
PROBLEM:
Find the inverse for the function $f(x)=3x-4.$ State the domain and range of the inverse function. Verify that ${f}^{−1}(f(x))=x.$
SOLUTION:
Follow the steps outlined in the strategy.
Step 1. If $y=3x-4,$ then $3x=y+4$ and $x=\frac{1}{3}y+\frac{4}{3}.$
Step 2. Rewrite as $y=\frac{1}{3}x+\frac{4}{3}$ and let $y={f}^{−1}(x).$
Therefore, ${f}^{−1}(x)=\frac{1}{3}x+\frac{4}{3}.$
Since the domain of $f$ is $(\text{−}\infty ,\infty ),$ the range of ${f}^{−1}$ is $(\text{−}\infty ,\infty ).$ Since the range of $f$ is $(\text{−}\infty ,\infty ),$ the domain of ${f}^{−1}$ is $(\text{−}\infty ,\infty ).$
You can verify that ${f}^{−1}(f(x))=x$ by writing

${f}^{−1}(f(x))={f}^{−1}(3x-4)=\frac{1}{3}(3x-4)+\frac{4}{3}=x-\frac{4}{3}+\frac{4}{3}=x.$  {eq:fs-id1170572453591}

Note that for ${f}^{−1}(x)$ to be the inverse of $f(x),$ both ${f}^{−1}(f(x))=x$ and $f({f}^{−1}(x))=x$ for all *x* in the domain of the inside function.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572478772} type= 
PROBLEM:
Find the inverse of the function $f(x)=3x\text{/}(x-2).$ State the domain and range of the inverse function.
SOLUTION:
${f}^{−1}(x)=\frac{2x}{x-3}.$ The domain of ${f}^{−1}$ is $\{x|x≠3\}.$ The range of ${f}^{−1}$ is $\{y|y≠2\}.$
COMMENTARY: Hint
Use the [ref:fs-id1170572552427] for finding inverse functions.
:::
:::

### Graphing Inverse Functions
Let’s consider the relationship between the graph of a function $f$ and the graph of its inverse. Consider the graph of $f$ shown in [ref:CNX_Calc_Figure_01_04_008] and a point $(a,b)$ on the graph. Since $b=f(a),$ then ${f}^{−1}(b)=a.$ Therefore, when we graph ${f}^{−1},$ the point $(b,a)$ is on the graph. As a result, the graph of ${f}^{−1}$ is a reflection of the graph of $f$ about the line $y=x.$

> FIGURE {fig:CNX_Calc_Figure_01_04_008} src=../../media/CNX_Calc_Figure_01_04_017.jpg
> alt: An image of two graphs. The first graph is of “y = f(x)”, which is a curved increasing function, that increases at a faster rate as x increases. The point (a, b) is on the graph of the function in the first quadrant. The second graph also graphs “y = f(x)” with the point (a, b), but also graphs the function “y = f inverse (x)”, an increasing curved function, that increases at a slower rate as x increases. This function includes the point (b, a). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.
> caption: (a) The graph of this function $f$ shows point $(a,b)$ on the graph of $f.$ (b) Since $(a,b)$ is on the graph of $f,$ the point $(b,a)$ is on the graph of ${f}^{−1}.$ The graph of ${f}^{−1}$ is a reflection of the graph of $f$ about the line $y=x.$

:::example {ex:fs-id1170572213184} Sketching Graphs of Inverse Functions

:::exercise {fs-id1170572213190} type= 
PROBLEM:
For the graph of $f$ in the following image, sketch a graph of ${f}^{−1}$ by sketching the line $y=x$ and using symmetry. Identify the domain and range of ${f}^{−1}.$

> IMAGE {img:fs-id1170572222895} src=../../media/CNX_Calc_Figure_01_04_009.jpg
> alt: An image of a graph. The x axis runs from -2 to 2 and the y axis runs from 0 to 2. The graph is of the function “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4).

SOLUTION:
Reflect the graph about the line $y=x.$ The domain of ${f}^{−1}$ is $[0,\infty ).$ The range of ${f}^{−1}$ is $[−2,\infty ).$ By using the preceding strategy for finding inverse functions, we can verify that the inverse function is ${f}^{−1}(x)={x}^{2}-2,$ as shown in the graph.

> IMAGE {img:fs-id1170572480252} src=../../media/CNX_Calc_Figure_01_04_010.jpg
> alt: An image of a graph. The x axis runs from -2 to 2 and the y axis runs from -2 to 2. The graph is of two functions. The first function is “f(x) = square root of (x +2)”, an increasing curved function. The function starts at the point (-2, 0). The x intercept is at (-2, 0) and the y intercept is at the approximate point (0, 1.4). The second function is “f inverse (x) = (x squared) -2”, an increasing curved function that starts at the point (0, -2). The x intercept is at the approximate point (1.4, 0) and the y intercept is at the point (0, -2). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572480267} type= 
PROBLEM:
Sketch the graph of $f(x)=2x+3$ and the graph of its inverse using the symmetry property of inverse functions.
SOLUTION:

> IMAGE {img:fs-id1170572481077} src=../../media/CNX_Calc_Figure_01_04_011.jpg
> alt: An image of a graph. The x axis runs from -3 to 4 and the y axis runs from -3 to 5. The graph is of two functions. The first function is “f(x) = 2x +3”, an increasing straight line function. The function has an x intercept at (-1.5, 0) and a y intercept at (0, 3). The second function is “f inverse (x) = (x - 3)/2”, an increasing straight line function, which increases at a slower rate than the first function. The function has an x intercept at (3, 0) and a y intercept at (0, -1.5). In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.

COMMENTARY: Hint
The graphs are symmetric about the line $y=x\text{.}$
:::
:::

### Restricting Domains
As we have seen, $f(x)={x}^{2}$ does not have an inverse function because it is not one-to-one. However, we can choose a subset of the domain of $f$ such that the function is one-to-one. This subset is called a {term:restricted domain}. By restricting the domain of $f,$ we can define a new function $g$ such that the domain of $g$ is the restricted domain of $f$ and $g(x)=f(x)$ for all $x$ in the domain of $g.$ Then we can define an inverse function for $g$ on that domain. For example, since $f(x)={x}^{2}$ is one-to-one on the interval $[0,\infty ),$ we can define a new function $g$ such that the domain of $g$ is $[0,\infty )$ and $g(x)={x}^{2}$ for all $x$ in its domain. Since $g$ is a one-to-one function, it has an inverse function, given by the formula ${g}^{−1}(x)=\sqrt{x}.$ On the other hand, the function $f(x)={x}^{2}$ is also one-to-one on the domain $(\text{−}\infty ,0].$ Therefore, we could also define a new function $h$ such that the domain of $h$ is $(\text{−}\infty ,0]$ and $h(x)={x}^{2}$ for all $x$ in the domain of $h.$ Then $h$ is a one-to-one function and must also have an inverse. Its inverse is given by the formula ${h}^{−1}(x)=\text{−}\sqrt{x}$ ([ref:CNX_Calc_Figure_01_04_012]).

> FIGURE {fig:CNX_Calc_Figure_01_04_012} src=../../media/CNX_Calc_Figure_01_04_012.jpg
> alt: An image of two graphs. Both graphs have an x axis that runs from -2 to 5 and a y axis that runs from -2 to 5. The first graph is of two functions. The first function is “g(x) = x squared”, an increasing curved function that starts at the point (0, 0). This function increases at a faster rate for larger values of x. The second function is “g inverse (x) = square root of x”, an increasing curved function that starts at the point (0, 0). This function increases at a slower rate for larger values of x. The first function is “h(x) = x squared”, a decreasing curved function that ends at the point (0, 0). This function decreases at a slower rate for larger values of x. The second function is “h inverse (x) = -(square root of x)”, an increasing curved function that starts at the point (0, 0). This function decreases at a slower rate for larger values of x. In addition to the two functions, there is a diagonal dotted line potted with the equation “y =x”, which shows that “f(x)” and “f inverse (x)” are mirror images about the line “y =x”.
> caption: (a) For $g(x)={x}^{2}$ restricted to $[0,\infty ),{g}^{−1}(x)=\sqrt{x}.$ (b) For $h(x)={x}^{2}$ restricted to $(\text{−}\infty ,0],{h}^{−1}(x)=\text{−}\sqrt{x}.$

:::example {ex:fs-id1170572551599} Restricting the Domain

:::exercise {fs-id1170572551604} type= 
PROBLEM:
Consider the function $f(x)={(x+1)}^{2}.$
a. Sketch the graph of $f$ and use the horizontal line test to show that $f$ is not one-to-one.
b. Show that $f$ is one-to-one on the restricted domain $[−1,\infty ).$ Determine the domain and range for the inverse of $f$ on this restricted domain and find a formula for ${f}^{−1}.$
SOLUTION:
a. The graph of $f$ is the graph of $y={x}^{2}$ shifted left 1 unit. Since there exists a horizontal line intersecting the graph more than once, $f$ is not one-to-one.

> IMAGE {img:fs-id1170572477898} src=../../media/CNX_Calc_Figure_01_04_013.jpg
> alt: An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, which is a parabola. The function decreases until the point (-1, 0), where it begins it increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1). There is also a horizontal dotted line plotted on the graph, which crosses through the function at two points.

b. On the interval $[−1,\infty ),\;f$ is one-to-one.

> IMAGE {img:fs-id1170572236096} src=../../media/CNX_Calc_Figure_01_04_014.jpg
> alt: An image of a graph. The x axis runs from -6 to 6 and the y axis runs from -2 to 10. The graph is of the function “f(x) = (x+ 1) squared”, on the interval [1, infinity). The function starts from the point (-1, 0) and increases. The x intercept is at the point (-1, 0) and the y intercept is at the point (0, 1).

The domain and range of ${f}^{−1}$ are given by the range and domain of $f,$ respectively. Therefore, the domain of ${f}^{−1}$ is $[0,\infty )$ and the range of ${f}^{−1}$ is $[−1,\infty ).$ To find a formula for ${f}^{−1},$ solve the equation $y={(x+1)}^{2}$ for $x.$ If $y={(x+1)}^{2},$ then $x=−1\pm \sqrt{y}.$ Since we are restricting the domain to the interval where $x\ge −1,$ we need $\pm \sqrt{y}\ge 0.$ Therefore, $x=−1+\sqrt{y}.$ Interchanging $x$ and $y,$ we write $y=−1+\sqrt{x}$ and conclude that ${f}^{−1}(x)=−1+\sqrt{x}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572551769} type= 
PROBLEM:
Consider $f(x)=1\text{/}{x}^{2}$ restricted to the domain $(\text{−}\infty ,0).$ Verify that $f$ is one-to-one on this domain. Determine the domain and range of the inverse of $f$ and find a formula for ${f}^{−1}.$
SOLUTION:
The domain of ${f}^{−1}$ is $(0,\infty ).$ The range of ${f}^{−1}$ is $(\text{−}\infty ,0).$ The inverse function is given by the formula ${f}^{−1}(x)=−1\text{/}\sqrt{x}.$
COMMENTARY: Hint
The domain and range of ${f}^{−1}$ is given by the range and domain of $f,$ respectively. To find ${f}^{−1},$ solve $y=1\text{/}{x}^{2}$ for $x\text{.}$
:::
:::

## Inverse Trigonometric Functions
The six basic trigonometric functions are periodic, and therefore they are not one-to-one. However, if we restrict the domain of a trigonometric function to an interval where it is one-to-one, we can define its inverse. Consider the sine function ([ref:CNX_Calc_Figure_01_03_009](module:m53479)). The sine function is one-to-one on an infinite number of intervals, but the standard convention is to restrict the domain to the interval $[-\frac{\pi}{2},\frac{\pi}{2}].$ By doing so, we define the inverse sine function on the domain $[−1,1]$ such that for any $x$ in the interval $[−1,1],$ the inverse sine function tells us which angle $\theta$ in the interval $[-\frac{\pi}{2},\frac{\pi}{2}]$ satisfies $\text{sin}\;\theta =x.$ Similarly, we can restrict the domains of the other trigonometric functions to define {term:inverse trigonometric functions}, which are functions that tell us which angle in a certain interval has a specified trigonometric value.

:::note [definition] Definition
The inverse sine function, denoted ${\text{sin}}^{−1}$ or arcsin, and the inverse cosine function, denoted ${\text{cos}}^{−1}$ or arccos, are defined on the domain $D=\text{\{}x|-1\le x\le 1\}$ as follows:

$$ \begin{array}{l}{\text{sin}}^{−1}(x)=y\;\text{if and only if}\;\text{sin}(y)=x\;\text{and}\;-\frac{\pi}{2}\le y\le \frac{\pi}{2}; \\ {\text{cos}}^{−1}(x)=y\;\text{if and only if}\;\text{cos}(y)=x\;\text{and}\;0\le y\le \pi .\end{array} $$  {eq:fs-id1170572547453}

The inverse tangent function, denoted ${\text{tan}}^{−1}$ or arctan, and inverse cotangent function, denoted ${\text{cot}}^{−1}$ or arccot, are defined on the domain $D=\{x|-\infty <x<\infty \}$ as follows:

$$ \begin{array}{l}{\text{tan}}^{−1}(x)=y\;\text{if and only if}\;\text{tan}(y)=x\;\text{and}\;-\frac{\pi}{2}<y<\frac{\pi}{2}; \\ {\text{cot}}^{−1}(x)=y\;\text{if and only if}\;\text{cot}(y)=x\;\text{and}\;0<y<\pi .\end{array} $$  {eq:fs-id1170572551028}

The inverse cosecant function, denoted ${\text{csc}}^{−1}$ or arccsc, and inverse secant function, denoted ${\text{sec}}^{−1}$ or arcsec, are defined on the domain $D=\{x||x|\ge 1\}$ as follows:

$$ \begin{array}{l}{\text{csc}}^{−1}(x)=y\;\text{if and only if}\;\text{csc}(y)=x\;\text{and}\;-\frac{\pi}{2}\le y\le \frac{\pi}{2},y≠0; \\ {\text{sec}}^{−1}(x)=y\;\text{if and only if}\;\text{sec}(y)=x\;\text{and}\;0\le y\le \pi ,y≠\pi \text{/}2.\end{array} $$  {eq:fs-id1170572548730}

:::
To graph the inverse trigonometric functions, we use the graphs of the trigonometric functions restricted to the domains defined earlier and reflect the graphs about the line $y=x$ ([ref:CNX_Calc_Figure_01_04_015]).

> FIGURE {fig:CNX_Calc_Figure_01_04_015} src=../../media/CNX_Calc_Figure_01_04_018.jpg
> alt: An image of six graphs. The first graph is of the function “f(x) = sin inverse(x)”, which is an increasing curve function. The function starts at the point (-1, -(pi/2)) and increases until it ends at the point (1, (pi/2)). The x intercept and y intercept are at the origin. The second graph is of the function “f(x) = cos inverse (x)”, which is a decreasing curved function. The function starts at the point (-1, pi) and decreases until it ends at the point (1, 0). The x intercept is at the point (1, 0). The y intercept is at the point (0, (pi/2)). The third graph is of the function f(x) = tan inverse (x)”, which is an increasing curve function. The function starts close to the horizontal line “y = -(pi/2)” and increases until it comes close the “y = (pi/2)”. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The x intercept and y intercept are both at the origin. The fourth graph is of the function “f(x) = cot inverse (x)”, which is a decreasing curved function. The function starts slightly below the horizontal line “y = pi” and decreases until it gets close the x axis. The function never intersects either of these lines, it always stays between them - they are horizontal asymptotes. The fifth graph is of the function “f(x) = csc inverse (x)”, a decreasing curved function. The function starts slightly below the x axis, then decreases until it hits a closed circle point at (-1, -(pi/2)). The function then picks up again at the point (1, (pi/2)), where is begins to decrease and approach the x axis, without ever touching the x axis. There is a horizontal asymptote at the x axis. The sixth graph is of the function “f(x) = sec inverse (x)”, an increasing curved function. The function starts slightly above the horizontal line “y = (pi/2)”, then increases until it hits a closed circle point at (-1, pi). The function then picks up again at the point (1, 0), where is begins to increase and approach the horizontal line “y = (pi/2)”, without ever touching the line. There is a horizontal asymptote at the “y = (pi/2)”.
> caption: The graph of each of the inverse trigonometric functions is a reflection about the line $y=x$ of the corresponding restricted trigonometric function.

:::note [media-2] 
Go to the [following site](http://www.openstax.org/l/20_inversefun) for more comparisons of functions and their inverses.
:::
When evaluating an inverse trigonometric function, the output is an angle. For example, to evaluate ${\text{cos}}^{−1}(\frac{1}{2}),$ we need to find an angle $\theta$ such that $\text{cos}\;\theta =\frac{1}{2}.$ Clearly, many angles have this property. However, given the definition of ${\text{cos}}^{−1},$ we need the angle $\theta$ that not only solves this equation, but also lies in the interval $[0,\pi ].$ We conclude that ${\text{cos}}^{−1}(\frac{1}{2})=\frac{\pi}{3}.$
We now consider a composition of a trigonometric function and its inverse. For example, consider the two expressions $\text{sin}({\text{sin}}^{−1}(\frac{\sqrt{2}}{\; \;2}))$ and ${\text{sin}}^{−1}(\text{sin}(\pi )).$ For the first one, we simplify as follows:

$\text{sin}({\text{sin}}^{−1}(\frac{\sqrt{2}}{2}))=\text{sin}(\frac{\pi}{4})=\frac{\sqrt{2}}{2}.$  {eq:fs-id1170572472267}

For the second one, we have

${\text{sin}}^{−1}(\text{sin}(\pi ))={\text{sin}}^{−1}(0)=0.$  {eq:fs-id1170572548623}

The inverse function is supposed to “undo” the original function, so why isn’t ${\text{sin}}^{−1}(\text{sin}(\pi ))=\pi ?$ Recalling our definition of inverse functions, a function $f$ and its inverse ${f}^{−1}$ satisfy the conditions $f({f}^{−1}(y))=y$ for all $y$ in the domain of ${f}^{−1}$ and ${f}^{−1}(f(x))=x$ for all $x$ in the domain of $f,$ so what happened here? The issue is that the inverse sine function, ${\text{sin}}^{−1},$ is the inverse of the *restricted* sine function defined on the domain $[-\frac{\pi}{2},\frac{\pi}{2}]\text{.}$ Therefore, for $x$ in the interval $[-\frac{\pi}{2},\frac{\pi}{2}]\text{,}$ it is true that ${\text{sin}}^{−1}(\text{sin}\;x)=x.$ However, for values of $x$ outside this interval, the equation does not hold, even though ${\text{sin}}^{−1}(\text{sin}\;x)$ is defined for all real numbers $x.$
What about $\text{sin}({\text{sin}}^{−1}y)?$ Does that have a similar issue? The answer is *no*. Since the domain of ${\text{sin}}^{−1}$ is the interval $[−1,1],$ we conclude that $\text{sin}({\text{sin}}^{−1}y)=y$ if $−1\le y\le 1$ and the expression is not defined for other values of $y.$ To summarize,

$\text{sin}({\text{sin}}^{−1}y)=y\;\text{if}\;−1\le y\le 1$  {eq:fs-id1170572550786}

and

${\text{sin}}^{−1}(\text{sin}\;x)=x\;\text{if}\;-\frac{\pi}{2}\le x\le \frac{\pi}{2}.$  {eq:fs-id1170572550840}

Similarly, for the cosine function,

$\text{cos}({\text{cos}}^{−1}y)=y\;\text{if}\;−1\le y\le 1$  {eq:fs-id1170572550903}

and

${\text{cos}}^{−1}(\text{cos}\;x)=x\;\text{if}\;0\le x\le \pi .$  {eq:fs-id1170572549580}

Similar properties hold for the other trigonometric functions and their inverses.

:::example {ex:fs-id1170572549634} Evaluating Expressions Involving Inverse Trigonometric Functions

:::exercise {fs-id1170572549640} type= 
PROBLEM:
Evaluate each of the following expressions.
a. ${\text{sin}}^{−1}(-\frac{\sqrt{3}}{2})$
b. $\text{tan}({\text{tan}}^{−1}(-\frac{1}{\sqrt{3}}))$
c. ${\text{cos}}^{−1}(\text{cos}(\frac{5\pi}{4}))$
d. ${\text{sin}}^{−1}(\text{cos}(\frac{2\pi}{3}))$
SOLUTION:
a. Evaluating ${\text{sin}}^{−1}(\text{−}\sqrt{3}\text{/}2)$ is equivalent to finding the angle $\theta$ such that $\text{sin}\;\theta =\text{−}\sqrt{3}\text{/}2$ and $\text{−}\pi \text{/}2\le \theta \le \pi \text{/}2.$ The angle $\theta =\text{−}\pi \text{/}3$ satisfies these two conditions. Therefore, ${\text{sin}}^{−1}(\text{−}\sqrt{3}\text{/}2)=\text{−}\pi \text{/}3.$
b. First we use the fact that ${\text{tan}}^{−1}(−1\text{/}\sqrt{3})=\text{−}\pi \text{/}6.$ Then $\text{tan}(-π\text{/}6)=−1\text{/}\sqrt{3}.$ Therefore, $\text{tan}({\text{tan}}^{−1}(−1\text{/}\sqrt{3}))=−1\text{/}\sqrt{3}.$
c. To evaluate ${\text{cos}}^{−1}(\text{cos}(5\pi \text{/}4)),$ first use the fact that $\text{cos}(5\pi \text{/}4)=\text{−}\sqrt{2}\text{/}2.$ Then we need to find the angle $\theta$ such that $\text{cos}(\theta )=\text{−}\sqrt{2}\text{/}2$ and $0\le \theta \le \pi .$ Since $3\pi \text{/}4$ satisfies both these conditions, we have ${\text{cos}}^{-1}(\text{cos}(5\pi \text{/}4))={\text{cos}}^{−1}(\text{−}\sqrt{2}\text{/}2)=3\pi \text{/}4.$
d. Since $\text{cos}(2\pi \text{/}3)=−1\text{/}2,$ we need to evaluate ${\text{sin}}^{−1}(−1\text{/}2).$ That is, we need to find the angle $\theta$ such that $\text{sin}(\theta )=−1\text{/}2$ and $\text{−}\pi \text{/}2\le \theta \le \pi \text{/}2.$ Since $\text{−}\pi \text{/}6$ satisfies both these conditions, we can conclude that ${\text{sin}}^{−1}(\text{cos}(2\pi \text{/}3))={\text{sin}}^{−1}(−1\text{/}2)=\text{−}\pi \text{/}6.$
:::
:::

:::note [project] The Maximum Value of a Function
In many areas of science, engineering, and mathematics, it is useful to know the maximum value a function can obtain, even if we don’t know its exact value at a given instant. For instance, if we have a function describing the strength of a roof beam, we would want to know the maximum weight the beam can support without breaking. If we have a function that describes the speed of a train, we would want to know its maximum speed before it jumps off the rails. Safe design often depends on knowing maximum values.
This project describes a simple example of a function with a maximum value that depends on two equation coefficients. We will see that maximum values can depend on several factors other than the independent variable *x*.
1. Consider the graph in [ref:CNX_Calc_Figure_01_04_016] of the function $y=\text{sin}\;x+\text{cos}\;x.$ Describe its overall shape. Is it periodic? How do you know?

> FIGURE {fig:CNX_Calc_Figure_01_04_016} src=../../media/CNX_Calc_Figure_01_04_016.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of the function “y = sin(x) + cos(x)”, a curved wave function. The graph of the function decreases until it hits the approximate point (-(3pi/4), -1.4), where it increases until the approximate point ((pi/4), 1.4), where it begins to decrease again. The x intercepts shown on this graph of the function are at (-(5pi/4), 0), (-(pi/4), 0), and ((3pi/4), 0). The y intercept is at (0, 1).
> caption: The graph of $y=\text{sin}\;x+\text{cos}\;x.$

Using a graphing calculator or other graphing device, estimate the $x$- and $y$-values of the maximum point for the graph (the first such point where *x* > 0). It may be helpful to express the $x$-value as a multiple of π.
2. Now consider other graphs of the form $y=A\;\text{sin}\;x+B\;\text{cos}\;x$ for various values of *A* and *B*. Sketch the graph when *A* = 2 and *B* = 1, and find the $x$- and *y*-values for the maximum point. (Remember to express the *x*-value as a multiple of π, if possible.) Has it moved?
3. Repeat for *A* = 1, *B* = 2. Is there any relationship to what you found in part (2)?
4. Complete the following table, adding a few choices of your own for *A* and *B*:

> TABLE {tab:fs-id1170572554057} cols=9 class=unnumbered irregular
> summary: A table containing 8 columns and 9 rows is shown. The first column is labeled “A” and contains the values “0,1,1,1,2,2,3, and 4.” The second column is labeled “B” and contains the values “1,0,1,2,1,2,4, and 3.” The third column is labeled “x” and has no values for any of the rows. The fourth column is labeled “y” and contains no values for any of the rows. The fifth column is separated from the fourth column by a gutter, is labeled “A” and contains the values “the square root of 3,1,12, and 5.” The sixth column is labeled “B” and contains the values 1, the square root of 3,5, and 12.” The seventh column is labeled “x” and contains no values for any of the rows. The eighth column is labeled “y” and contains no values for any of the rows.

| *A* | *B* | *x* | *y* |  | *A* | *B* | *x* | *y* |
| 0 | 1 |  |  | {rows=8}  | $\sqrt{3}$ | 1 |  |  |
| 1 | 0 |  |  | 1 | $\sqrt{3}$ |  |  |
| 1 | 1 |  |  | 12 | 5 |  |  |
| 1 | 2 |  |  | 5 | 12 |  |  |
| 2 | 1 |  |  |  |  |  |  |
| 2 | 2 |  |  |  |  |  |  |
| 3 | 4 |  |  |  |  |  |  |
| 4 | 3 |  |  |  |  |  |  |

5. Try to figure out the formula for the *y*-values.
6. The formula for the $x$-values is a little harder. The most helpful points from the table are $(1,1),(1,\sqrt{3}),(\sqrt{3},1).$ (*Hint*: Consider inverse trigonometric functions.)
7. If you found formulas for parts (5) and (6), show that they work together. That is, substitute the $x$-value formula you found into $y=A\;\text{sin}\;x+B\;\text{cos}\;x$ and simplify it to arrive at the $y$-value formula you found.
:::

## Key Concepts {section:key-concepts}
- For a function to have an inverse, the function must be one-to-one. Given the graph of a function, we can determine whether the function is one-to-one by using the horizontal line test.
- If a function is not one-to-one, we can restrict the domain to a smaller domain where the function is one-to-one and then define the inverse of the function on the smaller domain.
- For a function $f$ and its inverse ${f}^{−1},f({f}^{−1}(x))=x$ for all $x$ in the domain of ${f}^{−1}$ and ${f}^{−1}(f(x))=x$ for all $x$ in the domain of $f.$
- Since the trigonometric functions are periodic, we need to restrict their domains to define the inverse trigonometric functions.
- The graph of a function $f$ and its inverse ${f}^{−1}$ are symmetric about the line $y=x.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-482} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Inverse functions** | ${f}^{−1}(f(x))=x\;\text{for all}\;x\;\text{in}\;D,\text{and}\;f({f}^{−1}(y))=y\;\text{for all}\;y\;\text{in}\;R.$ |

##  {section:section-exercises}
For the following exercises, use the horizontal line test to determine whether each of the given graphs is one-to-one.

:::exercise {fs-id1170572547969} type= 
PROBLEM:

> IMAGE {img:fs-id1170572547973} src=../../media/CNX_Calc_Figure_01_04_201.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a function that decreases in a straight in until the origin, where it begins to increase in a straight line. The x intercept and y intercept are both at the origin.

SOLUTION:
Not one-to-one
:::

:::exercise {fs-id1170572547995} type= 
PROBLEM:

> IMAGE {img:fs-id1170572547999} src=../../media/CNX_Calc_Figure_01_04_202.jpg
> alt: An image of a graph. The x axis runs from 0 to 7 and the y axis runs from -4 to 4. The graph is of a function that is always increasing. There is an approximate x intercept at the point (1, 0) and no y intercept shown.

:::

:::exercise {fs-id1170572548022} type= 
PROBLEM:

> IMAGE {img:fs-id1170572548026} src=../../media/CNX_Calc_Figure_01_04_203.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a function that resembles a semi-circle, the top half of a circle. The function starts at the point (-3, 0) and increases until the point (0, 3), where it begins decreasing until it ends at the point (3, 0). The x intercepts are at (-3, 0) and (3, 0). The y intercept is at (0, 3).

SOLUTION:
Not one-to-one
:::

:::exercise {fs-id1170572548050} type= 
PROBLEM:

> IMAGE {img:fs-id1170572548054} src=../../media/CNX_Calc_Figure_01_04_204.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a curved function. The function increases until it hits the origin, then decreases until it hits the point (2, -4), where it begins to increase again. There are x intercepts at the origin and the point (3, 0). The y intercept is at the origin.

:::

:::exercise {fs-id1170572548077} type= 
PROBLEM:

> IMAGE {img:fs-id1170572548081} src=../../media/CNX_Calc_Figure_01_04_205.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a curved function that is always increasing. The x intercept and y intercept are both at the origin.

SOLUTION:
One-to-one
:::

:::exercise {fs-id1170572452097} type= 
PROBLEM:

> IMAGE {img:fs-id1170572452101} src=../../media/CNX_Calc_Figure_01_04_206.jpg
> alt: An image of a graph. The x axis runs from -4 to 7 and the y axis runs from -4 to 4. The graph is of a function that increases in a straight line until the approximate point (, 3). After this point, the function becomes a horizontal straight line. The x intercept and y intercept are both at the origin.

:::
For the following exercises, a. find the inverse function, and b. find the domain and range of the inverse function.

:::exercise {fs-id1170572452128} type= 
PROBLEM:
$f(x)={x}^{2}-4,x\ge 0$
SOLUTION:
a. ${f}^{−1}(x)=\sqrt{x+4}$ b. Domain $\text{:}\;x\ge −4,\text{range}\text{:}\;y\ge 0$
:::

:::exercise {fs-id1170572452229} type= 
PROBLEM:
$f(x)=\sqrt[3]{x-4}$
:::

:::exercise {fs-id1170572176863} type= 
PROBLEM:
$f(x)={x}^{3}+1$
SOLUTION:
a. ${f}^{−1}(x)=\sqrt[3]{x-1}$ b. Domain: all real numbers, range: all real numbers
:::

:::exercise {fs-id1170572176931} type= 
PROBLEM:
$f(x)={(x-1)}^{2},x\le 1$
:::

:::exercise {fs-id1170572549738} type= 
PROBLEM:
$f(x)=\sqrt{x-1}$
SOLUTION:
a. ${f}^{−1}(x)={x}^{2}+1,$ b. Domain: $x\ge 0,$ range: $y\ge 1$
:::

:::exercise {fs-id1170572549826} type= 
PROBLEM:
$f(x)=\frac{1}{x+2}$
:::
For the following exercises, use the graph of $f$ to sketch the graph of its inverse function.

:::exercise {fs-id1170572451526} type= 
PROBLEM:

> IMAGE {img:fs-id1170572451534} src=../../media/CNX_Calc_Figure_01_04_207.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of an increasing straight line function labeled “f” that is always increasing. The x intercept is at (-2, 0) and y intercept are both at (0, 1).

SOLUTION:

> IMAGE {img:fs-id1170572451558} src=../../media/CNX_Calc_Figure_01_04_208.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of two functions. The first function is an increasing straight line function labeled “f”. The x intercept is at (-2, 0) and y intercept are both at (0, 1). The second function is of an increasing straight line function labeled “f inverse”. The x intercept is at the point (1, 0) and the y intercept is at the point (0, -2).

:::

:::exercise {fs-id1170572451569} type= 
PROBLEM:

> IMAGE {img:fs-id1170572451577} src=../../media/CNX_Calc_Figure_01_04_209.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a curved decreasing function labeled “f”. As the function decreases, it gets approaches the x axis but never touches it. The function does not have an x intercept and the y intercept is (0, 1).

:::

:::exercise {fs-id1170572452480} type= 
PROBLEM:

> IMAGE {img:fs-id1170572452491} src=../../media/CNX_Calc_Figure_01_04_211.jpg
> alt: An image of a graph. The x axis runs from -8 to 8 and the y axis runs from -8 to 8. The graph is of an increasing straight line function labeled “f”. The function starts at the point (0, 1) and increases in straight line until the point (4, 6). After this point, the function continues to increase, but at a slower rate than before, as it approaches the point (8, 8). The function does not have an x intercept and the y intercept is (0, 1).

SOLUTION:

> IMAGE {img:fs-id1170572452513} src=../../media/CNX_Calc_Figure_01_04_212.jpg
> alt: An image of a graph. The x axis runs from 0 to 8 and the y axis runs from 0 to 8. The graph is of two function. The first function is an increasing straight line function labeled “f”. The function starts at the point (0, 1) and increases in straight line until the point (4, 6). After this point, the function continues to increase, but at a slower rate than before, as it approaches the point (8, 8). The function does not have an x intercept and the y intercept is (0, 1). The second function is an increasing straight line function labeled “f inverse”. The function starts at the point (1, 0) and increases in straight line until the point (6, 4). After this point, the function continues to increase, but at a faster rate than before, as it approaches the point (8, 8). The function does not have an y intercept and the x intercept is (1, 0).

:::

:::exercise {fs-id1170572452528} type= 
PROBLEM:

> IMAGE {img:fs-id1170572452536} src=../../media/CNX_Calc_Figure_01_04_213.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -4 to 4. The graph is of a decreasing curved function labeled “f”, which ends at the origin, which is both the x intercept and y intercept. Another point on the function is (-4, 2).

:::
For the following exercises, use composition to determine which pairs of functions are inverses.

:::exercise {fs-id1170572452575} type= 
PROBLEM:
$f(x)=8x,g(x)=\frac{x}{8}$
SOLUTION:
These are inverses.
:::

:::exercise {fs-id1170572452628} type= 
PROBLEM:
$f(x)=8x+3,g(x)=\frac{x-3}{8}$
:::

:::exercise {fs-id1170572449207} type= 
PROBLEM:
$f(x)=5x-7,g(x)=\frac{x+5}{7}$
SOLUTION:
These are not inverses.
:::

:::exercise {fs-id1170572449269} type= 
PROBLEM:
$f(x)=\frac{2}{3}x+2,g(x)=\frac{3}{2}x+3$
:::

:::exercise {fs-id1170572548356} type= 
PROBLEM:
$f(x)=\frac{1}{x-1},x≠1,g(x)=\frac{1}{x}+1,x≠0$
SOLUTION:
These are inverses.
:::

:::exercise {fs-id1170572548436} type= 
PROBLEM:
$f(x)={x}^{3}+1,g(x)={(x-1)}^{1\text{/}3}$
:::

:::exercise {fs-id1170572548511} type= 
PROBLEM:
$f(x)={x}^{2}+2x+1,x\ge −1,\;g(x)=−1+\sqrt{x},x\ge 0$
SOLUTION:
These are inverses.
:::

:::exercise {fs-id1170572229332} type= 
PROBLEM:
$f(x)=\sqrt{4-{x}^{2}},0\le x\le 2,g(x)=\sqrt{4-{x}^{2}},0\le x\le 2$
:::
For the following exercises, evaluate the functions. Give the exact value.

:::exercise {fs-id1170572451288} type= 
PROBLEM:
${\text{tan}}^{−1}(\frac{\sqrt{3}}{3})$
SOLUTION:
$\frac{\pi}{6}$
:::

:::exercise {fs-id1170572451334} type= 
PROBLEM:
${\text{cos}}^{−1}(-\frac{\sqrt{2}}{2})$
:::

:::exercise {fs-id1170572451384} type= 
PROBLEM:
${\text{cot}}^{−1}(1)$
SOLUTION:
$\frac{\pi}{4}$
:::

:::exercise {fs-id1170572451423} type= 
PROBLEM:
${\text{sin}}^{−1}(−1)$
:::

:::exercise {fs-id1170572142146} type= 
PROBLEM:
${\text{cos}}^{−1}(\frac{\sqrt{3}}{2})$
SOLUTION:
$\frac{\pi}{6}$
:::

:::exercise {fs-id1170572142191} type= 
PROBLEM:
$\text{cos}({\text{tan}}^{−1}(\sqrt{3}))$
:::

:::exercise {fs-id1170572142240} type= 
PROBLEM:
$\text{sin}({\text{cos}}^{−1}(\frac{\sqrt{2}}{2}))$
SOLUTION:
$\frac{\sqrt{2}}{2}$
:::

:::exercise {fs-id1170572142296} type= 
PROBLEM:
${\text{sin}}^{−1}(\text{sin}(\frac{\pi}{3}))$
:::

:::exercise {fs-id1170572549009} type= 
PROBLEM:
${\text{tan}}^{−1}(\text{tan}(-\frac{\pi}{6}))$
SOLUTION:
$-\frac{\pi}{6}$
:::

:::exercise {fs-id1170572549065} type= 
PROBLEM:
The function $C=T(F)=(5\text{/}9)(F-32)$ converts degrees Fahrenheit to degrees Celsius.
a. Find the inverse function $F={T}^{−1}(C)$
b. What is the inverse function used for?
:::

:::exercise {fs-id1170572451744} type= 
PROBLEM:
**[T]** The velocity *V* (in centimeters per second) of blood in an artery at a distance *x* cm from the center of the artery can be modeled by the function $V=f(x)=500(0.04-{x}^{2})$ for $0\le x\le 0.2.$
a. Find $x={f}^{−1}(V).$
b. Interpret what the inverse function is used for.
c. Find the distance from the center of an artery with a velocity of 15 cm/sec, 10 cm/sec, and 5 cm/sec.
SOLUTION:
a. $x={f}^{−1}(V)=\sqrt{0.04-\frac{V}{500}}$ b. The inverse function determines the distance from the center of the artery at which blood is flowing with velocity *V*. c. 0.1 cm; 0.14 cm; 0.17 cm
:::

:::exercise {fs-id1170572547801} type= 
PROBLEM:
A function that converts dress sizes in the United States to those in Europe is given by $D(x)=2x+24.$
a. Find the European dress sizes that correspond to sizes 6, 8, 10, and 12 in the United States.
b. Find the function that converts European dress sizes to U.S. dress sizes.
c. Use part b. to find the dress sizes in the United States that correspond to 46, 52, 62, and 70.
:::

:::exercise {fs-id1170572547878} type= 
PROBLEM:
**[T]** The cost to remove a toxin from a lake is modeled by the function
$C(p)=75p\text{/}(85-p),$ where $C$ is the cost (in thousands of dollars) and $p$ is the amount of toxin in a small lake (measured in parts per billion [ppb]). This model is valid only when the amount of toxin is less than 85 ppb.
a. Find the cost to remove 25 ppb, 40 ppb, and 50 ppb of the toxin from the lake.
b. Find the inverse function. c. Use part b. to determine how much of the toxin is removed for $50,000.
SOLUTION:
a. $31,250, $66,667, $107,143 b. $(p=\frac{85C}{C+75})$ c. 34 ppb
:::

:::exercise {fs-id1170572542921} type= 
PROBLEM:
**[T]** A race car is accelerating at a velocity given by
$v(t)=\frac{25}{4}t+54,$ where *v* is the velocity (in feet per second) at time *t*.
a. Find the velocity of the car at 10 sec.
b. Find the inverse function.
c. Use part b. to determine how long it takes for the car to reach a speed of 150 ft/sec.
:::

:::exercise {fs-id1170572543027} type= 
PROBLEM:
**[T]** An airplane’s Mach number *M* is the ratio of its speed to the speed of sound. When a plane is flying at a constant altitude, then its Mach angle is given by $μ=2{\text{sin}}^{−1}(\frac{1}{M}).$
Find the Mach angle (to the nearest degree) for the following Mach numbers.

> IMAGE {img:fs-id1170572455137} src=../../media/CNX_Calc_Figure_01_04_215.jpg
> alt: An image of a birds eye view of an airplane. Directly in front of the airplane is a sideways “V” shape, with the airplane flying directly into the opening of the “V” shape. The “V” shape is labeled “mach wave”. There are two arrows with labels. The first arrow points from the nose of the airplane to the corner of the “V” shape. This arrow has the label “velocity = v”. The second arrow points diagonally from the nose of the airplane to the edge of the upper portion of the “V” shape. This arrow has the label “speed of sound = a”. Between these two arrows is an angle labeled “Mach angle”. There is also text in the image that reads “mach = M > 1.0”.

a. $M=1.4$
b. $M=2.8$
c. $M=4.3$
SOLUTION:
a. $\sim 92\text{°}$ b. $\sim 42\text{°}$ c. $\sim 27\text{°}$
:::

:::exercise {fs-id1170572455224} type= 
PROBLEM:
**[T]** Using $μ=2{\text{sin}}^{−1}(\frac{1}{M}),$ find the Mach number *M* for the following angles.
a. $μ=\frac{\pi}{6}$
b. $μ=\frac{2\pi}{7}$
c. $μ=\frac{3\pi}{8}$
:::

:::exercise {fs-id1170572551494} type= 
PROBLEM:
**[T]** The average temperature (in degrees Celsius) of a city in the northern United States can be modeled by the function
$T(x)=5+18\;\text{sin}[\frac{\pi}{6}(x-4.6)],$ where $x$ is time in months and $x=1.00$ corresponds to January 1. Determine the day(s) (month and day) when the average temperature is $21\text{°}\text{C}.$ Use the integer portion of your answer(s) as the month and calculate the day of the month from the decimal portion.
SOLUTION:
$x\approx 6.69,8.51;$ so, the temperature occurs on June 21 and August 15
:::

:::exercise {fs-id1170572545115} type= 
PROBLEM:
**[T]** The depth (in feet) of water at a dock changes with the rise and fall of tides. It is modeled by the function
$D(t)=5\;\text{sin}(\frac{\pi}{6}t-\frac{7\pi}{6})+8,$ where $t$ is the number of hours after midnight. Determine the first time after midnight when the depth is 11.75 ft.
:::

:::exercise {fs-id1170572545202} type= 
PROBLEM:
**[T]** An object moving in simple harmonic motion is modeled by the function
$s(t)=−6\;\text{cos}(\frac{\pi t}{2}),$ where $s$ is measured in inches and $t$ is measured in seconds. Determine the first time when the distance moved is 4.5 in.
SOLUTION:
$\sim 1.5\;\text{sec}$
:::

:::exercise {fs-id1170572169073} type= 
PROBLEM:
**[T]** A local art gallery has a portrait 3 ft in height that is hung 2.5 ft above the eye level of an average person. The viewing angle $\theta$ can be modeled by the function
$\theta ={\text{tan}}^{−1}\frac{5.5}{x}-{\text{tan}}^{−1}\frac{2.5}{x},$ where $x$ is the distance (in feet) from the portrait. Find the viewing angle when a person is 4 ft from the portrait.
:::

:::exercise {fs-id1170572169169} type= 
PROBLEM:
**[T]** Use a calculator to evaluate ${\text{tan}}^{−1}(\text{tan}(2.1))$ and ${\text{cos}}^{−1}(\text{cos}(2.1)).$ Explain the results of each.
SOLUTION:
${\text{tan}}^{−1}(\text{tan}(2.1))\approx -1.0416;$ the expression does not equal 2.1 since $2.1>1.57=\frac{\pi}{2}$—in other words, it is not in the restricted domain of $\text{tan}\;x.\;{\text{cos}}^{−1}(\text{cos}(2.1))=2.1,$ since 2.1 is in the restricted domain of $\text{cos}\;x.$
:::

:::exercise {fs-id1170572243833} type= 
PROBLEM:
**[T]** Use a calculator to evaluate $\text{sin}({\text{sin}}^{−1}(−2))$ and $\text{tan}({\text{tan}}^{−1}(−2)).$ Explain the results of each.
:::

## Glossary
- {def} **horizontal line test**: a function $f$ is one-to-one if and only if every horizontal line intersects the graph of $f,$ at most, once
- {def} **inverse function**: for a function $f,$ the inverse function ${f}^{−1}$ satisfies ${f}^{−1}(y)=x$ if $f(x)=y$
- {def} **inverse trigonometric functions**: the inverses of the trigonometric functions are defined on restricted domains where they are one-to-one functions
- {def} **one-to-one function**: a function $f$ is one-to-one if $f({x}_{1})≠f({x}_{2})$ if ${x}_{1}≠{x}_{2}$
- {def} **restricted domain**: a subset of the domain of a function $f$

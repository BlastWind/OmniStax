# The Definite Integral

## Learning Objectives {section:learning-objectives}
- State the definition of the definite integral.
- Explain the terms integrand, limits of integration, and variable of integration.
- Explain when a function is integrable.
- Describe the relationship between the definite integral and net area.
- Use geometry and the properties of definite integrals to evaluate them.
- Calculate the average value of a function.

In the preceding section we defined the area under a curve in terms of Riemann sums:

$A=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}.$  {eq:fs-id1170572548845}

However, this definition came with restrictions. We required $f(x)$ to be continuous and nonnegative. Unfortunately, real-world problems don’t always meet these restrictions. In this section, we look at how to apply the concept of the area under the curve to a broader set of functions through the use of the definite integral.

## Definition and Notation
The definite integral generalizes the concept of the area under a curve. We lift the requirements that $f(x)$ be continuous and nonnegative, and define the definite integral as follows.

:::note [definition] Definition
If $f(x)$ is a function defined on an interval $[a,b],$ the {term:definite integral} of *f* from *a* to *b* is given by

$$ {\displaystyle \int_{a}^{b}f(x)dx}=\underset{n\to \infty}{{\displaystyle \text{lim}}}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}, $$  {eq:fs-id1170572280427}

provided the limit exists. If this limit exists, the function $f(x)$ is said to be integrable on $[a,b],$ or is an {term:integrable function}.
:::
The integral symbol in the previous definition should look familiar. We have seen similar notation in the chapter on [Applications of Derivatives](module:m53602), where we used the indefinite integral symbol (without the *a* and *b* above and below) to represent an antiderivative. Although the notation for indefinite integrals may look similar to the notation for a definite integral, they are not the same. A definite integral is a number. An indefinite integral is a family of functions. Later in this chapter we examine how these concepts are related. However, close attention should always be paid to notation so we know whether we’re working with a definite integral or an indefinite integral.
Integral notation goes back to the late seventeenth century and is one of the contributions of Gottfried Wilhelm {index:Leibniz}, who is often considered to be the codiscoverer of calculus, along with Isaac Newton. The integration symbol ∫ is an elongated S, suggesting sigma or summation. On a definite integral, above and below the summation symbol are the boundaries of the interval, $[a,b].$ The numbers *a* and *b* are *x*-values and are called the {term:limits of integration}; specifically, *a* is the lower limit and *b* is the upper limit. To clarify, we are using the word *limit* in two different ways in the context of the definite integral. First, we talk about the limit of a sum as $n\to \infty .$ Second, the boundaries of the region are called the *limits of integration*.
We call the function $f(x)$ the {term:integrand}, and the *dx* indicates that $f(x)$ is a function with respect to *x*, called the {term:variable of integration}. Note that, like the index in a sum, the variable of integration is a {index:dummy variable}, and has no impact on the computation of the integral. We could use any variable we like as the variable of integration:

${\displaystyle \int_{a}^{b}f(x)dx}={\displaystyle \int_{a}^{b}f(t)dt}={\displaystyle \int_{a}^{b}f(u)du}$  {eq:fs-id1170571611467}

Previously, we discussed the fact that if $f(x)$ is continuous on $[a,b],$ then the limit $\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}$ exists and is unique. This leads to the following theorem, which we state without proof.

:::note [theorem] Continuous Functions Are Integrable
If $f(x)$ is continuous on $[a,b],$ then *f* is integrable on $[a,b].$
:::
Functions that are not continuous on $[a,b]$ may still be integrable, depending on the nature of the discontinuities. For example, functions continuous on a closed interval, apart from a finite number of jump discontinuities, are integrable.
It is also worth noting here that we have retained the use of a regular partition in the Riemann sums. This restriction is not strictly necessary. Any partition can be used to form a Riemann sum. However, if a nonregular partition is used to define the definite integral, it is not sufficient to take the limit as the number of subintervals goes to infinity. Instead, we must take the limit as the width of the largest subinterval goes to zero. This introduces a little more complex notation in our limits and makes the calculations more difficult without really gaining much additional insight, so we stick with regular partitions for the Riemann sums.

:::example {ex:fs-id1170571648750} Evaluating an Integral Using the Definition

:::exercise {fs-id1170572134788} type= 
PROBLEM:
Use the definition of the definite integral to evaluate ${\displaystyle \int_{0}^{2}{x}^{2}dx}.$ Use a right-endpoint approximation to generate the Riemann sum.
SOLUTION:
We first want to set up a Riemann sum. Based on the limits of integration, we have $a=0$ and $b=2.$ For $i=0,1,2\text{,…,}\;n,$ let $P=\{{x}_{i}\}$ be a regular partition of $[0,2].$ Then

$\text{Δ}x=\frac{b-a}{n}=\frac{2}{n}.$  {eq:fs-id1170572508695}

Since we are using a right-endpoint approximation to generate Riemann sums, for each *i*, we need to calculate the function value at the right endpoint of the interval $[{x}_{i-1},{x}_{i}].$ The right endpoint of the interval is ${x}_{i},$ and since *P* is a regular partition,

${x}_{i}={x}_{0}+i\text{Δ}x=0+i[\frac{2}{n}]=\frac{2i}{n}.$  {eq:fs-id1170572481441}

Thus, the function value at the right endpoint of the interval is

$f({x}_{i})={x}_{i}^{2}={(\frac{2i}{n})}^{2}=\frac{4{i}^{2}}{{n}^{2}}.$  {eq:fs-id1170572472249}

Then the Riemann sum takes the form

${\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x}={\displaystyle \sum_{i=1}^{n} (\frac{4{i}^{2}}{{n}^{2}})\frac{2}{n}}={\displaystyle \sum_{i=1}^{n} \frac{8{i}^{2}}{{n}^{3}}}=\frac{8}{{n}^{3}}{\displaystyle \sum_{i=1}^{n} {i}^{2}}.$  {eq:fs-id1170572150485}

Using the summation formula for ${\displaystyle \sum_{i=1}^{n} {i}^{2}},$ we have

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x} & =\frac{8}{{n}^{3}}{\displaystyle \sum_{i=1}^{n} {i}^{2}} \\ \\ \\ \\ & =\frac{8}{{n}^{3}}[\frac{n(n+1)(2n+1)}{6}] \\ & =\frac{8}{{n}^{3}}[\frac{2{n}^{3}+3{n}^{2}+n}{6}] \\ & =\frac{16{n}^{3}+24{n}^{2}+8n}{6{n}^{3}} \\ & =\frac{8}{3}+\frac{4}{n}+\frac{8}{6{n}^{2}}.\end{array}$  {eq:fs-id1170572141864}

Now, to calculate the definite integral, we need to take the limit as $n\to \infty .$ We get

$\begin{array}{ll}{\displaystyle \int_{0}^{2}{x}^{2}dx} & =\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x} \\ \\ \\ & =\lim_{n\to \infty}(\frac{8}{3}+\frac{4}{n}+\frac{8}{6{n}^{2}}) \\ & =\lim_{n\to \infty}(\frac{8}{3})+\lim_{n\to \infty}(\frac{4}{n})+\lim_{n\to \infty}(\frac{8}{6{n}^{2}}) \\ & =\frac{8}{3}+0+0=\frac{8}{3}.\end{array}$  {eq:fs-id1170571569108}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572230274} type= 
PROBLEM:
Use the definition of the definite integral to evaluate ${\displaystyle \int_{0}^{3}(2x-1)dx}.$ Use a right-endpoint approximation to generate the Riemann sum.
SOLUTION:
6
COMMENTARY: Hint
Use the solving strategy from [ref:fs-id1170571648750].
:::
:::

## Evaluating Definite Integrals
Evaluating definite integrals this way can be quite tedious because of the complexity of the calculations. Later in this chapter we develop techniques for evaluating definite integrals *without* taking limits of Riemann sums. However, for now, we can rely on the fact that definite integrals represent the area under the curve, and we can evaluate definite integrals by using geometric formulas to calculate that area. We do this to confirm that definite integrals do, indeed, represent areas, so we can then discuss what to do in the case of a curve of a function dropping below the *x*-axis.

:::example {ex:fs-id1170571775733} Using Geometric Formulas to Calculate Definite Integrals

:::exercise {fs-id1170571599117} type= 
PROBLEM:
Use the formula for the area of a circle to evaluate ${\displaystyle \int_{3}^{6}\sqrt{9-{(x-3)}^{2}}dx}.$
SOLUTION:
The function describes a semicircle with radius 3. To find

${\displaystyle \int_{3}^{6}\sqrt{9-{(x-3)}^{2}}dx},$  {eq:fs-id1170571542372}

we want to find the area under the curve over the interval $[3,6].$ The formula for the area of a circle is $A=\pi {r}^{2}.$ The area of a semicircle is just one-half the area of a circle, or $A=(\frac{1}{2})\pi {r}^{2}.$ The shaded area in [ref:CNX_Calc_Figure_05_02_001] covers one-half of the semicircle, or $A=(\frac{1}{4})\pi {r}^{2}.$ Thus,

$\begin{array}{ll} \\ \\ {{\displaystyle \int}}_{3}^{6}\sqrt{9-{(x-3)}^{2}} & =\frac{1}{4}\pi {(3)}^{2} \\ & =\frac{9}{4}\pi \\ & \approx 7.069.\end{array}$  {eq:fs-id1170572130377}

> FIGURE {fig:CNX_Calc_Figure_05_02_001} src=../../media/CNX_Calc_Figure_05_02_009.jpg
> alt: A graph of a semi circle in quadrant one over the interval [0,6] with center at (3,0). The area under the curve over the interval [3,6] is shaded in blue.
> caption: The value of the integral of the function $f(x)$ over the interval $[3,6]$ is the area of the shaded region.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572551859} type= 
PROBLEM:
Use the formula for the area of a trapezoid to evaluate ${\displaystyle \int_{2}^{4}(2x+3)dx}.$
SOLUTION:
18 square units
COMMENTARY: Hint
Graph the function $f(x)$ and calculate the area under the function on the interval $[2,4].$
:::
:::

## Area and the Definite Integral
When we defined the definite integral, we lifted the requirement that $f(x)$ be nonnegative. But how do we interpret “the area under the curve” when $f(x)$ is negative?

### Net Signed Area
Let us return to the Riemann sum. Consider, for example, the function $f(x)=2-2{x}^{2}$ (shown in [ref:CNX_Calc_Figure_05_02_002]) on the interval $[0,2].$ Use $n=8$ and choose $\{{x}_{i}^{*}\text{\}}$ as the left endpoint of each interval. Construct a rectangle on each subinterval of height $f({x}_{i}^{*})$ and width Δ*x*. When $f({x}_{i}^{*})$ is positive, the product $f({x}_{i}^{*})\text{Δ}x$ represents the area of the rectangle, as before. When $f({x}_{i}^{*})$ is negative, however, the product $f({x}_{i}^{*})\text{Δ}x$ represents the *negative* of the area of the rectangle. The Riemann sum then becomes

${\displaystyle \sum_{i=1}^{8} f({x}_{i}^{*})\text{Δ}x}=(\text{Area of rectangles above the}\;x\text{-axis})-(\text{Area of rectangles below the}\;x\text{-axis})$  {eq:fs-id1170572409521}

> FIGURE {fig:CNX_Calc_Figure_05_02_002} src=../../media/CNX_Calc_Figure_05_02_003.jpg
> alt: A graph of a downward opening parabola over [-1, 2] with vertex at (0,2) and x-intercepts at (-1,0) and (1,0). Eight rectangles are drawn evenly over [0,2] with heights determined by the value of the function at the left endpoints of each.
> caption: For a function that is partly negative, the Riemann sum is the area of the rectangles above the *x*-axis less the area of the rectangles below the *x*-axis.

Taking the limit as $n\to \infty ,$ the Riemann sum approaches the area between the curve above the *x*-axis and the *x*-axis, less the area between the curve below the *x*-axis and the *x*-axis, as shown in [ref:CNX_Calc_Figure_05_02_003]. Then,

$\begin{array}{ll}{\displaystyle \int_{0}^{2}f(x)dx} & =\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({c}_{i})\text{Δ}x} \\ & ={A}_{1}-{A}_{2}.\end{array}$  {eq:fs-id1170571671468}

The quantity ${A}_{1}-{A}_{2}$ is called the {term:net signed area}.

> FIGURE {fig:CNX_Calc_Figure_05_02_003} src=../../media/CNX_Calc_Figure_05_02_002.jpg
> alt: A graph of a downward opening parabola over [-2, 2] with vertex at (0,2) and x-intercepts at (-1,0) and (1,0). The area in quadrant one under the curve is shaded blue and labeled A1. The area in quadrant four above the curve and to the left of x=2 is shaded blue and labeled A2.
> caption: In the limit, the definite integral equals area *A*<sub>1</sub> less area *A*<sub>2</sub>, or the net signed area.

Notice that net signed area can be positive, negative, or zero. If the area above the *x*-axis is larger, the net signed area is positive. If the area below the *x*-axis is larger, the net signed area is negative. If the areas above and below the *x*-axis are equal, the net signed area is zero.

:::example {ex:fs-id1170572449111} Finding the Net Signed Area

:::exercise {fs-id1170572449113} type= 
PROBLEM:
Find the net signed area between the curve of the function $f(x)=2x$ and the *x*-axis over the interval $[−3,3].$
SOLUTION:
The function produces a straight line that forms two triangles: one from $x=−3$ to $x=0$ and the other from $x=0$ to $x=3$ ([ref:CNX_Calc_Figure_05_02_004]). Using the geometric formula for the area of a triangle, $A=\frac{1}{2}bh,$ the area of triangle *A*<sub>1</sub>, above the axis, is

${A}_{1}=\frac{1}{2}3(6)=9,$  {eq:fs-id1170571636340}

where 3 is the base and $2(3)=6$ is the height. The area of triangle *A*<sub>2</sub>, below the axis, is

${A}_{2}=\frac{1}{2}(3)(6)=9,$  {eq:fs-id1170571609249}

where 3 is the base and 6 is the height. Thus, the net area is

${\displaystyle \int_{−3}^{3}2xdx}={A}_{1}-{A}_{2}=9-9=0.$  {eq:fs-id1170572380041}

> FIGURE {fig:CNX_Calc_Figure_05_02_004} src=../../media/CNX_Calc_Figure_05_02_005.jpg
> alt: A graph of an increasing line over [-6, 6] going through the origin and (-3, -6) and (3,6). The area under the line in quadrant one over [0,3] is shaded blue and labeled A1, and the area above the line in quadrant three over [-3,0] is shaded blue and labeled A2.
> caption: The area above the curve and below the *x*-axis equals the area below the curve and above the *x*-axis.

COMMENTARY: Analysis
If *A*<sub>1</sub> is the area above the *x*-axis and *A*<sub>2</sub> is the area below the *x*-axis, then the net area is ${A}_{1}-{A}_{2}.$ Since the areas of the two triangles are equal, the net area is zero.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572338457} type= 
PROBLEM:
Find the net signed area of $f(x)=x-2$ over the interval $[0,6],$ illustrated in the following image.

> IMAGE {img:fs-id1170572420064} src=../../media/CNX_Calc_Figure_05_02_006.jpg
> alt: A graph of an increasing line going through (-2,-4), (0,-2), (2,0), (4,2) and (6,4). The area above the curve in quadrant four is shaded blue and labeled A2, and the area under the curve and to the left of x=6 in quadrant one is shaded and labeled A1.

SOLUTION:
6
COMMENTARY: Hint
Use the solving method described in [ref:fs-id1170572449111].
:::
:::

### Total Area
One application of the definite integral is finding {index:displacement} when given a velocity function. If $v(t)$ represents the velocity of an object as a function of time, then the area under the curve tells us how far the object is from its original position. This is a very important application of the definite integral, and we examine it in more detail later in the chapter. For now, we’re just going to look at some basics to get a feel for how this works by studying constant velocities.
When velocity is a constant, the area under the curve is just velocity times time. This idea is already very familiar. If a car travels away from its starting position in a straight line at a speed of 70 mph for 2 hours, then it is 140 mi away from its original position ([ref:CNX_Calc_Figure_05_02_006]). Using integral notation, we have

${\displaystyle \int_{0}^{2}70dt}=140.$  {eq:fs-id1170572624833}

> FIGURE {fig:CNX_Calc_Figure_05_02_006} src=../../media/CNX_Calc_Figure_05_02_015.jpg
> alt: A graph in quadrant 1 with the x-axis labeled as t (hours) and y-axis labeled as v (mi/hr). The area under the line v(t) = 70 is shaded blue over [0,2].
> caption: The area under the curve $v(t)=70$ tells us how far the car is from its starting point at a given time.

In the context of displacement, net signed area allows us to take direction into account. If a car travels straight north at a speed of 60 mph for 2 hours, it is 120 mi north of its starting position. If the car then turns around and travels south at a speed of 40 mph for 3 hours, it will be back at it starting position ([ref:CNX_Calc_Figure_05_02_007]). Again, using integral notation, we have

$\begin{array}{ll}{\displaystyle \int_{0}^{2}60dt}+{\displaystyle \int_{2}^{5}−40dt} & =120-120 \\ & =0.\end{array}$  {eq:fs-id1170571637515}

In this case the displacement is zero.

> FIGURE {fig:CNX_Calc_Figure_05_02_007} src=../../media/CNX_Calc_Figure_05_02_016.jpg
> alt: A graph in quadrants one and four with the x-axis labeled as t (hours) and the y axis labeled as v (mi/hr). The first part of the graph is the line v(t) = 60 over [0,2], and the area under the line in quadrant one is shaded. The second part of the graph is the line v(t) = -40 over [2,5], and the area above the line in quadrant four is shaded.
> caption: The area above the axis and the area below the axis are equal, so the net signed area is zero.

Suppose we want to know how far the car travels overall, regardless of direction. In this case, we want to know the area between the curve and the *x*-axis, regardless of whether that area is above or below the axis. This is called the {term:total area}.
Graphically, it is easiest to think of calculating total area by adding the areas above the axis and the areas below the axis (rather than subtracting the areas below the axis, as we did with net signed area). To accomplish this mathematically, we use the absolute value function. Thus, the total distance traveled by the car is

$\begin{array}{ll}{\displaystyle \int_{0}^{2}|60|dt}+{\displaystyle \int_{2}^{5}|−40|dt} & ={\displaystyle \int_{0}^{2}60dt}+{\displaystyle \int_{2}^{5}40dt} \\ & =120+120 \\ & =240.\end{array}$  {eq:fs-id1170572379484}

Bringing these ideas together formally, we state the following definitions.

:::note [definition] Definition
Let $f(x)$ be an integrable function defined on an interval $[a,b].$ Let *A*<sub>1</sub> represent the area between $f(x)$ and the *x*-axis that lies *above* the axis and let *A*<sub>2</sub> represent the area between $f(x)$ and the *x*-axis that lies *below* the axis. Then, the **net signed area** between $f(x)$ and the *x*-axis is given by

${\displaystyle \int_{a}^{b}f(x)dx}={A}_{1}-{A}_{2}.$  {eq:fs-id1170572551798}

The **total area** between $f(x)$ and the *x*-axis is given by

${{\displaystyle \int}}_{a}^{b}|f(x)|dx={A}_{1}+{A}_{2}.$  {eq:fs-id1170572376474}

:::

:::example {ex:fs-id1170572163843} Finding the Total Area

:::exercise {fs-id1170572163845} type= 
PROBLEM:
Find the total area between $f(x)=x-2$ and the *x*-axis over the interval $[0,6].$
SOLUTION:
Calculate the *x*-intercept as $(2,0)$ (set $y=0,$ solve for *x*). To find the total area, take the area below the *x*-axis over the subinterval $[0,2]$ and add it to the area above the *x*-axis on the subinterval $[2,6]$ ([ref:CNX_Calc_Figure_05_02_008]).

> FIGURE {fig:CNX_Calc_Figure_05_02_008} src=../../media/CNX_Calc_Figure_05_02_008.jpg
> alt: A graph of a increasing line f(x) = x-2 going through the points (-2,-4), (0,2), (2,0), (4,2), and (6,4). The area under the line in quadrant one and to the left of the line x=6 is shaded and labeled A1. The area above the line in quadrant four is shaded and labeled A2.
> caption: The total area between the line and the x-axis over $[0,6]$ is *A*<sub>2</sub> plus *A*<sub>1</sub>.

We have

${\displaystyle \int_{0}^{6}|(x-2)|dx}={A}_{2}+{A}_{1}.$  {eq:fs-id1170572229783}

Then, using the formula for the area of a triangle, we obtain

${A}_{2}=\frac{1}{2}bh=\frac{1}{2}\cdot 2\cdot 2=2$  {eq:fs-id1170572229845}

${A}_{1}=\frac{1}{2}bh=\frac{1}{2}\cdot 4\cdot 4=8.$  {eq:fs-id1170572217489}

The total area, then, is

${A}_{1}+{A}_{2}=8+2=10.$  {eq:fs-id1170572621629}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572621670} type= 
PROBLEM:
Find the total area between the function $f(x)=2x$ and the *x*-axis over the interval $[−3,3].$
SOLUTION:
18
COMMENTARY: Hint
Review the solving strategy in [ref:fs-id1170572163843].
:::
:::

## Properties of the Definite Integral
The properties of indefinite integrals apply to definite integrals as well. Definite integrals also have properties that relate to the limits of integration. These properties, along with the rules of integration that we examine later in this chapter, help us manipulate expressions to evaluate definite integrals.

:::note [rule] Rule: Properties of the Definite Integral
1. 

$$ {\displaystyle \int_{a}^{a}f(x)dx=0} $$  {eq:fs-id1170571711373}

If the limits of integration are the same, the integral is just a line and contains no area.
2. 

$$ {\displaystyle \int_{b}^{a}f(x)dx}=\text{−}{\displaystyle \int_{a}^{b}f(x)dx} $$  {eq:fs-id1170571812229}

If the limits are reversed, then place a negative sign in front of the integral.
3. 

$$ {\displaystyle \int_{a}^{b}[f(x)+g(x)]dx}={\displaystyle \int_{a}^{b}f(x)dx}+{\displaystyle \int_{a}^{b}g(x)dx} $$  {eq:fs-id1170571547568}

The integral of a sum is the sum of the integrals.
4. 

$$ {\displaystyle \int_{a}^{b}[f(x)-g(x)]dx={\displaystyle \int_{a}^{b}f(x)dx-{\displaystyle \int_{a}^{b}g(x)dx}}} $$  {eq:fs-id1170571807215}

The integral of a difference is the difference of the integrals.
5. 

$$ {\displaystyle \int_{a}^{b}cf(x)dx}=c{\displaystyle \int_{a}^{b}f(x)dx} $$  {eq:fs-id1170572622483}

for constant *c*. The integral of the product of a constant and a function is equal to the constant multiplied by the integral of the function.
6. 

$$ {\displaystyle \int_{a}^{b}f(x)dx}={\displaystyle \int_{a}^{c}f(x)dx}+{\displaystyle \int_{c}^{b}f(x)dx} $$  {eq:fs-id1170571775754}

Although this formula normally applies when *c* is between *a* and *b*, the formula holds for all values of *a*, *b*, and *c*, provided $f(x)$ is integrable on the largest interval.
:::

:::example {ex:fs-id1170572274820} Using the Properties of the Definite Integral

:::exercise {fs-id1170572274822} type= 
PROBLEM:
Use the properties of the definite integral to express the definite integral of $f(x)=−3{x}^{3}+2x+2$ over the interval $[−2,1]$ as the sum of three definite integrals.
SOLUTION:
Using integral notation, we have ${\displaystyle \int_{−2}^{1}(−3{x}^{3}+2x+2)dx}.$ We apply properties 3. and 5. to get

$\begin{array}{ll}{\displaystyle \int_{−2}^{1}(−3{x}^{3}+2x+2)dx} & ={\displaystyle \int_{−2}^{1}−3{x}^{3}dx}+{\displaystyle \int_{−2}^{1}2xdx}+{\displaystyle \int_{−2}^{1}2dx} \\ & =−3{\displaystyle \int_{−2}^{1}{x}^{3}dx}+2{\displaystyle \int_{−2}^{1}xdx}+{\displaystyle \int_{−2}^{1}2dx}.\end{array}$  {eq:fs-id1170572558269}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572307262} type= 
PROBLEM:
Use the properties of the definite integral to express the definite integral of $f(x)=6{x}^{3}-4{x}^{2}+2x-3$ over the interval $[1,3]$ as the sum of four definite integrals.
SOLUTION:
$6{\displaystyle \int_{1}^{3}{x}^{3}dx}-4{\displaystyle \int_{1}^{3}{x}^{2}dx}+2{\displaystyle \int_{1}^{3}xdx}-{{\displaystyle \int}}_{1}^{3}3dx$
COMMENTARY: Hint
Use the solving strategy from [ref:fs-id1170572274820] and the properties of definite integrals.
:::
:::

:::example {ex:fs-id1170572098842} Using the Properties of the Definite Integral

:::exercise {fs-id1170572098844} type= 
PROBLEM:
If it is known that ${\displaystyle \int_{0}^{8}f(x)dx}=10$ and ${\displaystyle \int_{0}^{5}f(x)dx}=5,$ find the value of ${\displaystyle \int_{5}^{8}f(x)dx}.$
SOLUTION:
By property 6.,

${\displaystyle \int_{a}^{b}f(x)dx}={\displaystyle \int_{a}^{c}f(x)dx}+{\displaystyle \int_{c}^{b}f(x)dx}.$  {eq:fs-id1170572344247}

Thus,

$\begin{array}{lll}{\displaystyle \int_{0}^{8}f(x)dx} & = & {\displaystyle \int_{0}^{5}f(x)dx}+{\displaystyle \int_{5}^{8}f(x)dx} \\ 10 & = & 5+{\displaystyle \int_{5}^{8}f(x)dx} \\ 5 & = & {\displaystyle \int_{5}^{8}f(x)dx}.\end{array}$  {eq:fs-id1170572551967}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572500598} type= 
PROBLEM:
If it is known that ${\displaystyle \int_{1}^{5}f(x)dx}=−3$ and ${\displaystyle \int_{2}^{5}f(x)dx}=4,$ find the value of ${\displaystyle \int_{1}^{2}f(x)dx}.$
SOLUTION:
−7
COMMENTARY: Hint
Use the solving strategy from [ref:fs-id1170572098842] and the rule on properties of definite integrals.
:::
:::

### Comparison Properties of Integrals
A picture can sometimes tell us more about a function than the results of computations. Comparing functions by their graphs as well as by their algebraic expressions can often give new insight into the process of integration. Intuitively, we might say that if a function $f(x)$ is above another function $g(x),$ then the area between $f(x)$ and the *x*-axis is greater than the area between $g(x)$ and the *x*-axis. This is true depending on the interval over which the comparison is made. The properties of definite integrals are valid whether $a<b,a=b,$ or $a>b.$ The following properties, however, concern only the case $a\le b,$ and are used when we want to compare the sizes of integrals.

:::note [theorem] Comparison Theorem
1. If $f(x)\ge 0$ for $a\le x\le b,$ then

${\displaystyle \int_{a}^{b}f(x)dx}\ge 0.$  {eq:fs-id1170570996273}

2. If $f(x)\ge g(x)$ for $a\le x\le b,$ then

${\displaystyle \int_{a}^{b}f(x)dx}\ge {\displaystyle \int_{a}^{b}g(x)dx}.$  {eq:fs-id1170573750186}

3. If *m* and *M* are constants such that $m\le f(x)\le M$ for $a\le x\le b,$ then

$\begin{array}{ll}m(b-a) & \le {\displaystyle \int_{a}^{b}f(x)dx} \\ & \le M(b-a).\end{array}$  {eq:fs-id1170573255165}

:::

:::example {ex:fs-id1170571769594} Comparing Two Functions over a Given Interval

:::exercise {fs-id1170571769596} type= 
PROBLEM:
Compare $f(x)=\sqrt{1+{x}^{2}}$ and $g(x)=\sqrt{1+x}$ over the interval $[0,1].$
SOLUTION:
Graphing these functions is necessary to understand how they compare over the interval $[0,1].$ Initially, when graphed on a graphing calculator, $f(x)$ appears to be above $g(x)$ everywhere. However, on the interval $[0,1],$ the graphs appear to be on top of each other. We need to zoom in to see that, on the interval $[0,1],g(x)$ is above $f(x).$ The two functions intersect at $x=0$ and $x=1$ ([ref:CNX_Calc_Figure_05_02_009]).

> FIGURE {fig:CNX_Calc_Figure_05_02_009} src=../../media/CNX_Calc_Figure_05_02_011.jpg
> alt: A graph of the function f(x) = sqrt(1 + x^2) in red and g(x) = sqrt(1 + x) in blue over [-2, 3]. The function f(x) appears above g(x) except over the interval [0,1]. A second, zoomed-in graph shows this interval more clearly.
> caption: (a) The function $f(x)$ appears above the function $g(x)$ except over the interval $[0,1]$ (b) Viewing the same graph with a greater zoom shows this more clearly.

We can see from the graph that over the interval $[0,1],g(x)\ge f(x).$ Comparing the integrals over the specified interval $[0,1],$ we also see that ${\displaystyle \int_{0}^{1}g(x)dx}\ge {\displaystyle \int_{0}^{1}f(x)dx}$ ([ref:CNX_Calc_Figure_05_02_010]). The thin, red-shaded area shows just how much difference there is between these two integrals over the interval $[0,1].$

> FIGURE {fig:CNX_Calc_Figure_05_02_010} src=../../media/CNX_Calc_Figure_05_02_012.jpg
> alt: A graph showing the functions f(x) = sqrt(1 + x^2) and g(x) = sqrt(1 + x) over [-3, 3]. The area under g(x) in quadrant one over [0,1] is shaded. The area under g(x) and f(x) is included in this shaded area. The second, zoomed-in graph shows more clearly that equality between the functions only holds at the endpoints.
> caption: (a) The graph shows that over the interval $[0,1],g(x)\ge f(x),$ where equality holds only at the endpoints of the interval. (b) Viewing the same graph with a greater zoom shows this more clearly.

:::
:::

## Average Value of a Function
We often need to find the average of a set of numbers, such as an average test grade. Suppose you received the following test scores in your algebra class: 89, 90, 56, 78, 100, and 69. Your semester grade is your average of test scores and you want to know what grade to expect. We can find the average by adding all the scores and dividing by the number of scores. In this case, there are six test scores. Thus,

$\frac{89+90+56+78+100+69}{6}=\frac{482}{6}\approx 80.33.$  {eq:fs-id1170571653460}

Therefore, your average test grade is approximately 80.33, which translates to a B− at most schools.
Suppose, however, that we have a function $v(t)$ that gives us the speed of an object at any time *t*, and we want to find the object’s average speed. The function $v(t)$ takes on an infinite number of values, so we can’t use the process just described. Fortunately, we can use a definite integral to find the average value of a function such as this.
Let $f(x)$ be continuous over the interval $[a,b]$ and let $[a,b]$ be divided into *n* subintervals of width $\text{Δ}x=(b-a)\text{/}n.$ Choose a representative ${x}_{i}^{*}$ in each subinterval and calculate $f({x}_{i}^{*})$ for $i=1,2\text{,…,}\;n.$ In other words, consider each $f({x}_{i}^{*})$ as a sampling of the function over each subinterval. The average value of the function may then be approximated as

$\frac{f({x}_{1}^{*})+f({x}_{2}^{*})+\text{⋯}+f({x}_{n}^{*})}{n},$  {eq:fs-id1170572480573}

which is basically the same expression used to calculate the average of discrete values.
But we know $\text{Δ}x=\frac{b-a}{n},$ so $n=\frac{b-a}{\text{Δ}x},$ and we get

$\frac{f({x}_{1}^{*})+f({x}_{2}^{*})+\text{⋯}+f({x}_{n}^{*})}{n}=\frac{f({x}_{1}^{*})+f({x}_{2}^{*})+\text{⋯}+f({x}_{n}^{*})}{\frac{(b-a)}{\text{Δ}x}}.$  {eq:fs-id1170572373417}

Following through with the algebra, the numerator is a sum that is represented as ${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})},$ and we are dividing by a fraction. To divide by a fraction, invert the denominator and multiply. Thus, an approximate value for the average value of the function is given by

$\begin{array}{ll}\frac{{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})}}{\frac{(b-a)}{\text{Δ}x}} & =(\frac{\text{Δ}x}{b-a}){\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})} \\ \\ & =(\frac{1}{b-a}){\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}.\end{array}$  {eq:fs-id1170571734014}

This is a Riemann sum. Then, to get the *exact* average value, take the limit as *n* goes to infinity. Thus, the average value of a function is given by

$\frac{1}{b-a}\underset{n\to \infty}{{\displaystyle \text{lim}}}{\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x}=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx}.$  {eq:fs-id1170572274957}

:::note [definition] Definition
Let $f(x)$ be continuous over the interval $[a,b].$ Then, the {term:average value of the function} $f(x)$ (or {term:*f*<sub>ave</sub>}) on $[a,b]$ is given by

${f}_{\text{ave}}=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx}.$  {eq:fs-id1170571712537}

:::

:::example {ex:fs-id1170571712593} Finding the Average Value of a Linear Function

:::exercise {fs-id1170571712595} type= 
PROBLEM:
Find the average value of $f(x)=x+1$ over the interval $[0,5].$
SOLUTION:
First, graph the function on the stated interval, as shown in [ref:CNX_Calc_Figure_05_02_011].

> FIGURE {fig:CNX_Calc_Figure_05_02_011} src=../../media/CNX_Calc_Figure_05_02_017.jpg
> alt: A graph in quadrant one showing the shaded area under the function f(x) = x + 1 over [0,5].
> caption: The graph shows the area under the function $f(x)=x+1$ over $[0,5].$

The region is a trapezoid lying on its side, so we can use the area formula for a trapezoid $A=\frac{1}{2}h(a+b),$ where *h* represents height, and *a* and *b* represent the two parallel sides. Then,

$\begin{array}{ll}{\displaystyle \int_{0}^{5}x}+1dx & =\frac{1}{2}h(a+b) \\ & =\frac{1}{2}\cdot 5\cdot (1+6) \\ & =\frac{35}{2}.\end{array}$  {eq:fs-id1170572419282}

Thus the average value of the function is

$\frac{1}{5-0}{\displaystyle \int_{0}^{5}x}+1dx=\frac{1}{5}\cdot \frac{35}{2}=\frac{7}{2}.$  {eq:fs-id1170571699479}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571678849} type= 
PROBLEM:
Find the average value of $f(x)=6-2x$ over the interval $[0,3].$
SOLUTION:
3
COMMENTARY: Hint
Use the average value formula, and use geometry to evaluate the integral.
:::
:::

## Key Concepts {section:key-concepts}
- The definite integral can be used to calculate net signed area, which is the area above the *x*-axis less the area below the *x*-axis. Net signed area can be positive, negative, or zero.
- The component parts of the definite integral are the integrand, the variable of integration, and the limits of integration.
- Continuous functions on a closed interval are integrable. Functions that are not continuous may still be integrable, depending on the nature of the discontinuities.
- The properties of definite integrals can be used to evaluate integrals.
- The area under the curve of many functions can be calculated using geometric formulas.
- The average value of a function can be calculated using definite integrals.

## Key Equations {section:key-equations}

> TABLE {tab:eip-498} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Definite Integral** | ${\displaystyle \int_{a}^{b}f(x)dx}=\underset{n\to \infty}{{\displaystyle \text{lim}}}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}$ |
| **Properties of the Definite Integral** | ${\displaystyle \int_{a}^{a}f(x)dx=0}$<br> ${\displaystyle \int_{b}^{a}f(x)dx}=\text{−}{\displaystyle \int_{a}^{b}f(x)dx}$<br> ${\displaystyle \int_{a}^{b}[f(x)+g(x)]dx}={\displaystyle \int_{a}^{b}f(x)dx}+{\displaystyle \int_{a}^{b}g(x)dx}$<br> ${\displaystyle \int_{a}^{b}[f(x)-g(x)]dx={\displaystyle \int_{a}^{b}f(x)dx-{\displaystyle \int_{a}^{b}g(x)dx}}}$<br> ${\displaystyle \int_{a}^{b}cf(x)dx}=c{\displaystyle \int_{a}^{b}f(x)}$ for constant *c*<br> ${\displaystyle \int_{a}^{b}f(x)dx}={\displaystyle \int_{a}^{c}f(x)dx}+{\displaystyle \int_{c}^{b}f(x)dx}$ |

##  {section:section-exercises}
In the following exercises, express the limits as integrals.

:::exercise {fs-id1170571539137} type= 
PROBLEM:
$\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} ({x}_{i}^{*})\text{Δ}x}$ over $[1,3]$
:::

:::exercise {fs-id1170571543213} type= 
PROBLEM:
$\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} (5{({x}_{i}^{*})}^{2}-3{({x}_{i}^{*})}^{3})\text{Δ}x}$ over $[0,2]$
SOLUTION:
${\displaystyle \int_{0}^{2}(5{x}^{2}-3{x}^{3})dx}$
:::

:::exercise {fs-id1170572456418} type= 
PROBLEM:
$\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} {\text{sin}}^{2}(2\pi {x}_{i}^{*})\text{Δ}x}$ over $[0,1]$
:::

:::exercise {fs-id1170571580956} type= 
PROBLEM:
$\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} {\text{cos}}^{2}(2\pi {x}_{i}^{*})\text{Δ}x}$ over $[0,1]$
SOLUTION:
${\displaystyle \int_{0}^{1}{\text{cos}}^{2}(2\pi x)dx}$
:::
In the following exercises, given *L<sub>n</sub>* or *R<sub>n</sub>* as indicated, express their limits as $n\to \infty$ as definite integrals, identifying the correct intervals.

:::exercise {fs-id1170572386105} type= 
PROBLEM:
${L}_{n}=\frac{1}{n}{\displaystyle \sum_{i=1}^{n} \frac{i-1}{n}}$
:::

:::exercise {fs-id1170572386182} type= 
PROBLEM:
${R}_{n}=\frac{1}{n}{\displaystyle \sum_{i=1}^{n} \frac{i}{n}}$
SOLUTION:
${\displaystyle \int_{0}^{1}xdx}$
:::

:::exercise {fs-id1170572643235} type= 
PROBLEM:
${L}_{n}=\frac{2}{n}{\displaystyle \sum_{i=1}^{n} (1+2\frac{i-1}{n})}$
:::

:::exercise {fs-id1170572373702} type= 
PROBLEM:
${R}_{n}=\frac{3}{n}{\displaystyle \sum_{i=1}^{n} (3+3\frac{i}{n})}$
SOLUTION:
${\displaystyle \int_{3}^{6}xdx}$
:::

:::exercise {fs-id1170571710668} type= 
PROBLEM:
${L}_{n}=\frac{2\pi}{n}{\displaystyle \sum_{i=1}^{n} 2\pi \frac{i-1}{n}\text{cos}(2\pi \frac{i-1}{n})}$
:::

:::exercise {fs-id1170572399034} type= 
PROBLEM:
${R}_{n}=\frac{1}{n}{\displaystyle \sum_{i=1}^{n} (1+\frac{i}{n})\text{log}({(1+\frac{i}{n})}^{2})}$
SOLUTION:
${\displaystyle \int_{1}^{2}x\;\text{log}({x}^{2})dx}$
:::
In the following exercises, evaluate the integrals of the functions graphed using the formulas for areas of triangles and circles, and subtracting the areas below the *x*-axis.

:::exercise {fs-id1170572168780} type= 
PROBLEM:

> IMAGE {img:fs-id1170572629160} src=../../media/CNX_Calc_Figure_05_02_201.jpg
> alt: A graph containing the upper half of three circles on the x axis. The first has center at (1,0) and radius one. It corresponds to the function sqrt(2x – x^2) over [0,2]. The second has center at (4,0) and radius two. It corresponds to the function sqrt(-12 + 8x – x^2) over [2,6]. The last has center at (9,0) and radius three. It corresponds to the function sqrt(-72 + 18x – x^2) over [6,12]. All three semi circles are shaded – the area under the curve and above the x axis.

:::

:::exercise {fs-id1170572629207} type= 
PROBLEM:

> IMAGE {img:fs-id1170572629212} src=../../media/CNX_Calc_Figure_05_02_202.jpg
> alt: A graph of three isosceles triangles corresponding to the functions 1 - |x-1| over [0,2], 2 - |x-4| over [2,4], and 3 - |x-9| over [6,12]. The first triangle has endpoints at (0,0), (2,0), and (1,1). The second triangle has endpoints at (2,0), (6,0), and (4,2). The last has endpoints at (6,0), (12,0), and (9,3). All three are shaded.

SOLUTION:
$1+2\cdot 2+3\cdot 3=14$
:::

:::exercise {fs-id1170571689720} type= 
PROBLEM:

> IMAGE {img:fs-id1170571689731} src=../../media/CNX_Calc_Figure_05_02_203.jpg
> alt: A graph with three parts. The first is the upper half of a circle with center at (1, 0) and radius 1, which corresponds to the function sqrt(2x – x^2) over [0,2]. The second is a triangle with endpoints at (2, 0), (6, 0), and (4, -2), which corresponds to the function |x-4| - 2 over [2, 6]. The last is the upper half of a circle with center at (9, 0) and radius 3, which corresponds to the function sqrt(-72 + 18x – x^2) over [6,12]. All three are shaded.

:::

:::exercise {fs-id1170571689784} type= 
PROBLEM:

> IMAGE {img:fs-id1170571689789} src=../../media/CNX_Calc_Figure_05_02_204.jpg
> alt: A graph of three shaded triangles. The first has endpoints at (0, 0), (2, 0), and (1, 1) and corresponds to the function 1 - |x-1| over [0, 2]. The second has endpoints at (2, 0), (6, 0), and (4, -2) and corresponds to the function |x-4| - 2 over [2, 6]. The third has endpoints at (6, 0), (12, 0), and (9, 3) and corresponds to the function 3 - |x-9| over [6, 12].

SOLUTION:
$1-4+9=6$
:::

:::exercise {fs-id1170572378988} type= 
PROBLEM:

> IMAGE {img:fs-id1170572378999} src=../../media/CNX_Calc_Figure_05_02_205.jpg
> alt: A graph with three shaded parts. The first is the upper half of a circle with center at (1, 0) and radius one. It corresponds to the function sqrt(2x – x^2) over [0, 2]. The second is the lower half of a circle with center at (4, 0) and radius two, which corresponds to the function -sqrt(-12 + 8x – x^2) over [2, 6]. The last is the upper half of a circle with center at (9, 0) and radius three. It corresponds to the function sqrt(-72 + 18x – x^2) over [6, 12].

:::

:::exercise {fs-id1170572379047} type= 
PROBLEM:

> IMAGE {img:fs-id1170572379059} src=../../media/CNX_Calc_Figure_05_02_206.jpg
> alt: A graph with three shaded parts. The first is a triangle with endpoints at (0, 0), (2, 0), and (1, 1), which corresponds to the function 1 - |x-1| over [0, 2] in quadrant 1. The second is the lower half of a circle with center at (4, 0) and radius two, which corresponds to the function –sqrt(-12 + 8x – x^2) over [2, 6]. The last is a triangle with endpoints at (6, 0), (12, 0), and (9, 3), which corresponds to the function 3 - |x-9| over [6, 12].

SOLUTION:
$1-2\pi +9=10-2\pi$
:::
In the following exercises, evaluate the integral using area formulas.

:::exercise {fs-id1170571571952} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}(3-x)dx}$
:::

:::exercise {fs-id1170571572008} type= 
PROBLEM:
${\displaystyle \int_{2}^{3}(3-x)dx}$
SOLUTION:
The integral is the area of the triangle, $\frac{1}{2}$
:::

:::exercise {fs-id1170571777882} type= 
PROBLEM:
${\displaystyle \int_{−3}^{3}(3-|x|)dx}$
:::

:::exercise {fs-id1170571777935} type= 
PROBLEM:
${\displaystyle \int_{0}^{6}(3-|x-3|)dx}$
SOLUTION:
The integral is the area of the triangle, 9.
:::

:::exercise {fs-id1170572569977} type= 
PROBLEM:
${\displaystyle \int_{−2}^{2}\sqrt{4-{x}^{2}}dx}$
:::

:::exercise {fs-id1170572309994} type= 
PROBLEM:
${\displaystyle \int_{1}^{5}\sqrt{4-{(x-3)}^{2}}dx}$
SOLUTION:
The integral is the area $\frac{1}{2}\pi {r}^{2}=2\pi .$
:::

:::exercise {fs-id1170571613706} type= 
PROBLEM:
${\displaystyle \int_{0}^{12}\sqrt{36-{(x-6)}^{2}}dx}$
:::

:::exercise {fs-id1170571613789} type= 
PROBLEM:
${\displaystyle \int_{−2}^{3}(3-|x|)dx}$
SOLUTION:
The integral is the area of the “big” triangle less the “missing” triangle, $9-\frac{1}{2}.$
:::
In the following exercises, use averages of values at the left (*L*) and right (*R*) endpoints to compute the integrals of the piecewise linear functions with graphs that pass through the given list of points over the indicated intervals.

:::exercise {fs-id1170572347038} type= 
PROBLEM:
$\{(0,0),(2,1),(4,3),(5,0),(6,0),(8,3)\}$ over $[0,8]$
:::

:::exercise {fs-id1170572329986} type= 
PROBLEM:
$\{(0,2),(1,0),(3,5),(5,5),(6,2),(8,0)\}$ over $[0,8]$
SOLUTION:
$L=2+0+10+5+4=21,R=0+10+10+2+0=22,\frac{L+R}{2}=21.5$
:::

:::exercise {fs-id1170572434956} type= 
PROBLEM:
$\{(−4,−4),(−2,0),(0,−2),(3,3),(4,3)\}$ over $[−4,4]$
:::

:::exercise {fs-id1170572627110} type= 
PROBLEM:
$\{(−4,0),(−2,2),(0,0),(1,2),(3,2),(4,0)\}$ over $[−4,4]$
SOLUTION:
$L=0+4+0+4+2=10,R=4+0+2+4+0=10,\frac{L+R}{2}=10$
:::
Suppose that ${\displaystyle \int_{0}^{4}f(x)dx}=5$ and ${\displaystyle \int_{0}^{2}f(x)dx}=−3,$ and ${\displaystyle \int_{0}^{4}g(x)dx}=−1$ and ${\displaystyle \int_{0}^{2}g(x)dx}=2.$ In the following exercises, compute the integrals.

:::exercise {fs-id1170571712837} type= 
PROBLEM:
${\displaystyle \int_{0}^{4}(f(x)+g(x))dx}$
:::

:::exercise {fs-id1170572129829} type= 
PROBLEM:
${\displaystyle \int_{2}^{4}(f(x)+g(x))dx}$
SOLUTION:
${\displaystyle \int_{2}^{4}f(x)dx}+{\displaystyle \int_{2}^{4}g(x)dx}=8-3=5$
:::

:::exercise {fs-id1170572330196} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}(f(x)-g(x))dx}$
:::

:::exercise {fs-id1170572129076} type= 
PROBLEM:
${\displaystyle \int_{2}^{4}(f(x)-g(x))dx}$
SOLUTION:
${\displaystyle \int_{2}^{4}f(x)dx}-{\displaystyle \int_{2}^{4}g(x)dx}=8+3=11$
:::

:::exercise {fs-id1170572223527} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}(3f(x)-4g(x))dx}$
:::

:::exercise {fs-id1170572309789} type= 
PROBLEM:
${\displaystyle \int_{2}^{4}(4f(x)-3g(x))dx}$
SOLUTION:
$4{\displaystyle \int_{2}^{4}f(x)dx}-3{\displaystyle \int_{2}^{4}g(x)dx}=32+9=41$
:::
In the following exercises, use the identity ${\displaystyle \int_{\text{−}A}^{A}f(x)dx}={\displaystyle \int_{\text{−}A}^{0}f(x)dx}+{\displaystyle \int_{0}^{A}f(x)dx}$ to compute the integrals.

:::exercise {fs-id1170571629002} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\pi}^{\pi}\frac{\text{sin}\;t}{1+{t}^{2}}dt}$ $\text{(}Hint\text{:}\;\text{sin}(\text{−}t)=\text{−}\text{sin}(t)\text{)}$
:::

:::exercise {fs-id1170572582635} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\sqrt{\pi}}^{\sqrt{\pi}}\frac{t}{1+\text{cos}\;t}dt}$
SOLUTION:
The integrand is odd; the integral is zero.
:::
In the following exercises, find the net signed area between $f(x)$ and the x-axis.

:::exercise {fs-id1170572351517} type= 
PROBLEM:
${\displaystyle \int_{1}^{3}(2-x)dx}$ (*Hint:* Look at the graph of *f*.)
:::

:::exercise {fs-id1170572351582} type= 
PROBLEM:
${\displaystyle \int_{2}^{4}{(x-3)}^{3}dx}$ (*Hint:* Look at the graph of *f*.)
SOLUTION:
The integrand is antisymmetric with respect to $x=3.$ The integral is zero.
:::
In the following exercises, given that ${\displaystyle \int_{0}^{1}xdx}=\frac{1}{2},{\displaystyle \int_{0}^{1}{x}^{2}dx}=\frac{1}{3},$ and ${\displaystyle \int_{0}^{1}{x}^{3}dx}=\frac{1}{4},$ compute the integrals.

:::exercise {fs-id1170571610322} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}(1+x+{x}^{2}+{x}^{3})dx}$
:::

:::exercise {fs-id1170572448446} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}(1-x+{x}^{2}-{x}^{3})dx}$
SOLUTION:
$1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}=\frac{7}{12}$
:::

:::exercise {fs-id1170572368465} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{(1-x)}^{2}dx}$
:::

:::exercise {fs-id1170572306379} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{(1-2x)}^{3}dx}$
SOLUTION:
${\displaystyle \int_{0}^{1}(1-6x+12{x}^{2}-8{x}^{3})dx}=(x-3{x}^{2}+4{x}^{3}-2{x}^{4})=(1-3+4-2)(0-0+0-0)=0$
:::

:::exercise {fs-id1170572503292} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}(6x-\frac{4}{3}{x}^{2})dx}$
:::

:::exercise {fs-id1170572558040} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}(7-5{x}^{3})dx}$
SOLUTION:
$7-\frac{5}{4}=\frac{23}{4}$
:::
In the following exercises, use the [ref:fs-id1170571653089]comparison theorem.

:::exercise {fs-id1170572558115} type= 
PROBLEM:
Show that ${\displaystyle \int_{0}^{3}({x}^{2}-6x+9)dx}\ge 0.$
:::

:::exercise {fs-id1170571813996} type= 
PROBLEM:
Show that ${\displaystyle \int_{−2}^{3}(x-3)(x+2)dx}\le 0.$
SOLUTION:
The integrand is negative over $[−2,3].$
:::

:::exercise {fs-id1170572307650} type= 
PROBLEM:
Show that ${\displaystyle \int_{0}^{1}\sqrt{1+{x}^{3}}dx}\le {\displaystyle \int_{0}^{1}\sqrt{1+{x}^{2}}dx}.$
:::

:::exercise {fs-id1170572480470} type= 
PROBLEM:
Show that ${\displaystyle \int_{1}^{2}\sqrt{1+x}dx}\le {\displaystyle \int_{1}^{2}\sqrt{1+{x}^{2}}dx}.$
SOLUTION:
$x\le {x}^{2}$ over $[1,2],$ so $\sqrt{1+x}\le \sqrt{1+{x}^{2}}$ over $[1,2].$
:::

:::exercise {fs-id1170572218470} type= 
PROBLEM:
Show that ${\displaystyle \int_{0}^{\pi \text{/}2}\text{sin}\;tdt}\ge \frac{\pi}{4}.$ $\text{(}Hint\text{:}\;\text{sin}\;t\ge \frac{2t}{\pi}$ over $[0,\frac{\pi}{2}]\text{)}$
:::

:::exercise {fs-id1170571712388} type= 
PROBLEM:
Show that ${\displaystyle \int_{\text{−}\pi \text{/}4}^{\pi \text{/}4}\text{cos}\;tdt}\ge \pi \sqrt{2}\text{/}4.$
SOLUTION:
$\text{cos}(t)\ge \frac{\sqrt{2}}{2}.$ Multiply by the length of the interval to get the inequality.
:::
In the following exercises, find the average value *f*<sub>ave</sub> of *f* between *a* and *b*, and find a point *c*, where $f(c)={f}_{\text{ave}}.$

:::exercise {fs-id1170571629714} type= 
PROBLEM:
$f(x)={x}^{2},a=−1,b=1$
:::

:::exercise {fs-id1170571542810} type= 
PROBLEM:
$f(x)={x}^{5},a=−1,b=1$
SOLUTION:
${f}_{\text{ave}}=0;c=0$
:::

:::exercise {fs-id1170571542882} type= 
PROBLEM:
$f(x)=\sqrt{4-{x}^{2}},a=0,b=2$
:::

:::exercise {fs-id1170571624145} type= 
PROBLEM:
$f(x)=(3-|x|),a=−3,b=3$
SOLUTION:
$\frac{3}{2}$ when $c=\pm \frac{3}{2}$
:::

:::exercise {fs-id1170571698194} type= 
PROBLEM:
$f(x)=\text{sin}\;x,a=0,b=2\pi$
:::

:::exercise {fs-id1170572309560} type= 
PROBLEM:
$f(x)=\text{cos}\;x,a=0,b=2\pi$
SOLUTION:
${f}_{\text{ave}}=0;c=\frac{\pi}{2},\frac{3\pi}{2}$
:::
In the following exercises, approximate the average value using Riemann sums *L*<sub>100</sub> and *R*<sub>100</sub>. How does your answer compare with the exact given answer?

:::exercise {fs-id1170572309667} type= 
PROBLEM:
**[T]** $y=\text{ln}(x)$ over the interval $[1,4];$ the exact solution is $\frac{\text{ln}(256)}{3}-3.$
:::

:::exercise {fs-id1170572618038} type= 
PROBLEM:
**[T]** $y={e}^{x\text{/}2}$ over the interval $[0,1];$ the exact solution is $2(\sqrt{e}-1).$
SOLUTION:
${L}_{100}=1.294,{R}_{100}=1.301;$ the exact average is between these values.
:::

:::exercise {fs-id1170572554308} type= 
PROBLEM:
**[T]** $y=\text{tan}\;x$ over the interval $[0,\frac{\pi}{4}];$ the exact solution is $\frac{2\;\text{ln}(2)}{\pi}.$
:::

:::exercise {fs-id1170571612043} type= 
PROBLEM:
**[T]** $y=\frac{x+1}{\sqrt{4-{x}^{2}}}$ over the interval $[−1,1];$ the exact solution is $\frac{\pi}{6}.$
SOLUTION:
${L}_{100}\;\times \;(\frac{1}{2})=0.5178,{R}_{100}\;\times \;(\frac{1}{2})=0.5294$
:::
In the following exercises, compute the average value using the left Riemann sums *L<sub>N</sub>* for $N=1,10,100.$ How does the accuracy compare with the given exact value?

:::exercise {fs-id1170571817344} type= 
PROBLEM:
**[T]** $y={x}^{2}-4$ over the interval $[0,2];$ the exact solution is $-\frac{8}{3}.$
:::

:::exercise {fs-id1170572292381} type= 
PROBLEM:
**[T]** $y=x{e}^{{x}^{2}}$ over the interval $[0,2];$ the exact solution is $\frac{1}{4}({e}^{4}-1).$
SOLUTION:
${L}_{1}=0,{L}_{10}\;\times \;(\frac{1}{2})=8.743493,{L}_{100}\;\times \;(\frac{1}{2})=12.861728.$ The exact answer $\approx 26.799,$ so *L*<sub>100</sub> is not accurate.
:::

:::exercise {fs-id1170572373579} type= 
PROBLEM:
**[T]** $y={(\frac{1}{2})}^{x}$ over the interval $[0,4];$ the exact solution is $\frac{15}{64\;\text{ln}(2)}.$
:::

:::exercise {fs-id1170572380129} type= 
PROBLEM:
**[T]** $y=x\;\text{sin}({x}^{2})$ over the interval $[\text{−}\pi ,0];$ the exact solution is $\frac{\text{cos}({\pi}^{2})-1}{2\pi}.$
SOLUTION:
${L}_{1}\;\times \;(\frac{1}{\pi})=1.352,{L}_{10}\;\times \;(\frac{1}{\pi})=−0.1837,{L}_{100}\;\times \;(\frac{1}{\pi})=−0.2956.$ The exact answer $\approx -0.303,$ so *L*<sub>100</sub> is not accurate to first decimal.
:::

:::exercise {fs-id1170572173066} type= 
PROBLEM:
Suppose that $A={\displaystyle \int_{0}^{2\pi}{\text{sin}}^{2}tdt}$ and $B={\displaystyle \int_{0}^{2\pi}{\text{cos}}^{2}tdt}.$ Show that $A+B=2\pi$ and $A=B\text{.}$
:::

:::exercise {fs-id1170572572942} type= 
PROBLEM:
Suppose that $A={\displaystyle \int_{\text{−}\pi \text{/}4}^{\pi \text{/}4}{\text{sec}}^{2}tdt}=\pi$ and $B={\displaystyle \int_{\text{−}\pi \text{/}4}^{\pi \text{/}4}{\text{tan}}^{2}tdt}.$ Show that $A-B=\frac{\pi}{2}.$
SOLUTION:
Use ${\text{tan}}^{2}\theta +1={\text{sec}}^{2}\theta .$ Then, $B-A={\displaystyle \int_{\text{−}\pi \text{/}4}^{\pi \text{/}4}1dx}=\frac{\pi}{2}.$
:::

:::exercise {fs-id1170571614677} type= 
PROBLEM:
Show that the average value of ${\text{sin}}^{2}t$ over $[0,2\pi ]$ is equal to 1/2 Without further calculation, determine whether the average value of ${\text{sin}}^{2}t$ over $[0,\pi ]$ is also equal to 1/2.
:::

:::exercise {fs-id1170572371990} type= 
PROBLEM:
Show that the average value of ${\text{cos}}^{2}t$ over $[0,2\pi ]$ is equal to $1\text{/}2.$ Without further calculation, determine whether the average value of ${\text{cos}}^{2}(t)$ over $[0,\pi ]$ is also equal to $1\text{/}2.$
SOLUTION:
${\displaystyle \int_{0}^{2\pi}{\text{cos}}^{2}tdt}=\pi ,$ so divide by the length 2*π* of the interval. ${\text{cos}}^{2}t$ has period *π*, so yes, it is true.
:::

:::exercise {fs-id1170572560194} type= 
PROBLEM:
Explain why the graphs of a quadratic function (parabola) $p(x)$ and a linear function $ℓ(x)$ can intersect in at most two points. Suppose that $p(a)=ℓ(a)$ and $p(b)=ℓ(b),$ and that ${\displaystyle \int_{a}^{b}p(t)dt}>{\displaystyle \int_{a}^{b}ℓ(t)dt}.$ Explain why ${\displaystyle \int_{c}^{d}p(t)}>{\displaystyle \int_{c}^{d}ℓ(t)dt}$ whenever $a\le c<d\le b.$
:::

:::exercise {fs-id1170572332686} type= 
PROBLEM:
Suppose that parabola $p(x)=a{x}^{2}+bx+c$ opens downward $(a<0)$ and has a vertex of $y=\frac{\text{−}b}{2a}>0.$ For which interval $[A,B]$ is ${\displaystyle \int_{A}^{B}(a{x}^{2}+bx+c)dx}$ as large as possible?
SOLUTION:
The integral is maximized when one uses the largest interval on which *p* is nonnegative. Thus, $A=\frac{\text{−}b-\sqrt{{b}^{2}-4ac}}{2a}$ and $B=\frac{\text{−}b+\sqrt{{b}^{2}-4ac}}{2a}.$
:::

:::exercise {fs-id1170572274741} type= 
PROBLEM:
Suppose $[a,b]$ can be subdivided into subintervals $a={a}_{0}<{a}_{1}<{a}_{2}<\text{⋯}<{a}_{N}=b$ such that either $f\ge 0$ over $[{a}_{i-1},{a}_{i}]$ or $f\le 0$ over $[{a}_{i-1},{a}_{i}].$ Set ${A}_{i}={\displaystyle \int_{{a}_{i-1}}^{{a}_{i}}f(t)dt}.$
a. Explain why ${\displaystyle \int_{a}^{b}f(t)dt}={A}_{1}+{A}_{2}+\text{⋯}+{A}_{N}.$
b. Then, explain why $|{\displaystyle \int_{a}^{b}f(t)dt}|\le {\displaystyle \int_{a}^{b}|f(t)|dt}.$
:::

:::exercise {fs-id1170572330164} type= 
PROBLEM:
Suppose *f* and *g* are continuous functions such that ${\displaystyle \int_{c}^{d}f(t)dt}\le {\displaystyle \int_{c}^{d}g(t)dt}$ for every subinterval $[c,d]$ of $[a,b].$ Explain why $f(x)\le g(x)$ for all values of *x*.
SOLUTION:
If $f({t}_{0})>g({t}_{0})$ for some ${t}_{0}\in [a,b],$ then since $f-g$ is continuous, there is an interval containing *t*<sub>0</sub> such that $f(t)>g(t)$ over the interval $[c,d],$ and then ${\displaystyle \int_{d}^{d}f(t)dt}>{\displaystyle \int_{c}^{d}g(t)dt}$ over this interval.
:::

:::exercise {fs-id1170572557927} type= 
PROBLEM:
Suppose the average value of *f* over $[a,b]$ is 1 and the average value of *f* over $[b,c]$ is 1 where $a<c<b.$ Show that the average value of *f* over $[a,c]$ is also 1.
:::

:::exercise {fs-id1170572370993} type= 
PROBLEM:
Suppose that $[a,b]$ can be partitioned. taking $a={a}_{0}<{a}_{1}<\text{⋯}<{a}_{N}=b$ such that the average value of *f* over each subinterval $[{a}_{i-1},{a}_{i}]=1$ is equal to 1 for each $i=1\text{,…,}\;N.$ Explain why the average value of *f* over $[a,b]$ is also equal to 1.
SOLUTION:
The integral of *f* over an interval is the same as the integral of the average of *f* over that interval. Thus, $\begin{array}{l}{\displaystyle \int_{a}^{b}f(t)dt}={\displaystyle \int_{{a}_{0}}^{{a}_{1}}f(t)dt}+{\displaystyle \int_{{a}_{1}}^{{a}_{2}}f(t)dt}+\text{⋯}+{\displaystyle \int_{{a}_{N+1}}^{{a}_{N}}f(t)dt}={\displaystyle \int_{{a}_{0}}^{{a}_{1}}1dt}+{\displaystyle \int_{{a}_{1}}^{{a}_{2}}1dt}+\text{⋯}+{\displaystyle \int_{{a}_{N+1}}^{{a}_{N}}1dt} \\ =({a}_{1}-{a}_{0})+({a}_{2}-{a}_{1})+\text{⋯}+({a}_{N}-{a}_{N-1})={a}_{N}-{a}_{0}=b-a.\end{array}$ Dividing through by $b-a$ gives the desired identity.
:::

:::exercise {fs-id1170572353398} type= 
PROBLEM:
Suppose that for each *i* such that $1\le i\le N$ one has ${\displaystyle \int_{i-1}^{i}f(t)dt}=i.$ Show that ${\displaystyle \int_{0}^{N}f(t)dt}=\frac{N(N+1)}{2}.$
:::

:::exercise {fs-id1170572390661} type= 
PROBLEM:
Suppose that for each *i* such that $1\le i\le N$ one has ${\displaystyle \int_{i-1}^{i}f(t)dt}={i}^{2}.$ Show that ${\displaystyle \int_{0}^{N}f(t)dt}=\frac{N(N+1)(2N+1)}{6}.$
SOLUTION:
${\displaystyle \int_{0}^{N}f(t)dt}={\displaystyle \sum_{i=1}^{N} {\displaystyle \int_{i-1}^{i}f(t)dt}}={\displaystyle \sum_{i=1}^{N} {i}^{2}}=\frac{N(N+1)(2N+1)}{6}$
:::

:::exercise {fs-id1170572447510} type= 
PROBLEM:
**[T]** Compute the left and right Riemann sums *L*<sub>10</sub> and *R*<sub>10</sub> and their average $\frac{{L}_{10}+{R}_{10}}{2}$ for $f(t)={t}^{2}$ over $[0,1].$ Given that ${\displaystyle \int_{0}^{1}{t}^{2}dt}=0.\overline{33},$ to how many decimal places is $\frac{{L}_{10}+{R}_{10}}{2}$ accurate?
:::

:::exercise {fs-id1170572370440} type= 
PROBLEM:
**[T]** Compute the left and right Riemann sums, *L*<sub>10</sub> and *R*<sub>10</sub>, and their average $\frac{{L}_{10}+{R}_{10}}{2}$ for $f(t)=(4-{t}^{2})$ over $[1,2].$ Given that ${\displaystyle \int_{1}^{2}(4-{t}^{2})dt}=1.\overline{66},$ to how many decimal places is $\frac{{L}_{10}+{R}_{10}}{2}$ accurate?
SOLUTION:
${L}_{10}=1.815,{R}_{10}=1.515,\frac{{L}_{10}+{R}_{10}}{2}=1.665,$ so the estimate is accurate to two decimal places.
:::

:::exercise {fs-id1170571543427} type= 
PROBLEM:
If ${\displaystyle \int_{1}^{5}\sqrt{1+{t}^{4}}dt}=41.7133...,$ what is ${\displaystyle \int_{1}^{5}\sqrt{1+{u}^{4}}du}?$
:::

:::exercise {fs-id1170572367459} type= 
PROBLEM:
Estimate ${\displaystyle \int_{0}^{1}tdt}$ using the left and right endpoint sums, each with a single rectangle. How does the average of these left and right endpoint sums compare with the actual value ${\displaystyle \int_{0}^{1}tdt}?$
SOLUTION:
The average is $1\text{/}2,$ which is equal to the integral in this case.
:::

:::exercise {fs-id1170571838062} type= 
PROBLEM:
Estimate ${\displaystyle \int_{0}^{1}tdt}$ by comparison with the area of a single rectangle with height equal to the value of *t* at the midpoint $t=\frac{1}{2}.$ How does this midpoint estimate compare with the actual value ${\displaystyle \int_{0}^{1}tdt}?$
:::

:::exercise {fs-id1170571838156} type= 
PROBLEM:
From the graph of $\text{sin}(2\pi x)$ shown:
a. Explain why ${\displaystyle \int_{0}^{1}\text{sin}(2\pi t)dt}=0.$
b. Explain why, in general, ${\displaystyle \int_{a}^{a+1}\text{sin}(2\pi t)dt}=0$ for any value of *a*.

> IMAGE {img:fs-id1170571779578} src=../../media/CNX_Calc_Figure_05_02_207.jpg
> alt: A graph of the function f(x) = sin(2pi*x) over [0, 2]. The function is shaded over [.7, 1] above the curve and below to x axis, over [1,1.5] under the curve and above the x axis, and over [1.5, 1.7] above the curve and under the x axis. The graph is antisymmetric with respect o t = ½ over [0,1].

SOLUTION:
a. The graph is antisymmetric with respect to $t=\frac{1}{2}$ over $[0,1],$ so the average value is zero. b. For any value of *a*, the graph between $[a,a+1]$ is a shift of the graph over $[0,1],$ so the net areas above and below the axis do not change and the average remains zero.
:::

:::exercise {fs-id1170572643334} type= 
PROBLEM:
If *f* is 1-periodic $(f(t+1)=f(t)),$ odd, and integrable over $[0,1],$ is it always true that ${\displaystyle \int_{0}^{1}f(t)dt}=0?$
:::

:::exercise {fs-id1170572350688} type= 
PROBLEM:
If *f* is 1-periodic and ${\displaystyle \int_{0}^{1}f(t)dt}=A,$ is it necessarily true that ${\displaystyle \int_{a}^{1+a}f(t)dt}=A$ for all *A*?
SOLUTION:
Yes, the integral over any interval of length 1 is the same.
:::

## Glossary
- {def} **average value of a function**: (or ***f*<sub>ave</sub>**) the average value of a function on an interval can be found by calculating the definite integral of the function and dividing that value by the length of the interval
- {def} **definite integral**: a primary operation of calculus; the area between the curve and the *x*-axis over a given interval is a definite integral
- {def} **integrable function**: a function is integrable if the limit defining the integral exists; in other words, if the limit of the Riemann sums as *n* goes to infinity exists
- {def} **integrand**: the function to the right of the integration symbol; the integrand includes the function being integrated
- {def} **limits of integration**: these values appear near the top and bottom of the integral sign and define the interval over which the function should be integrated
- {def} **net signed area**: the area between a function and the *x*-axis such that the area below the *x*-axis is subtracted from the area above the *x*-axis; the result is the same as the definite integral of the function
- {def} **total area**: total area between a function and the *x*-axis is calculated by adding the area above the *x*-axis and the area below the *x*-axis; the result is the same as the definite integral of the absolute value of the function
- {def} **variable of integration**: indicates which variable you are integrating with respect to; if it is *x*, then the function in the integrand is followed by *dx*

# Approximating Areas

## Learning Objectives {section:learning-objectives}
- Use sigma (summation) notation to calculate sums and powers of integers.
- Use the sum of rectangular areas to approximate the area under a curve.
- Use Riemann sums to approximate area.

{index:Archimedes} was fascinated with calculating the areas of various shapes—in other words, the amount of space enclosed by the shape. He used a process that has come to be known as the {index:*method of exhaustion*}, which used smaller and smaller shapes, the areas of which could be calculated exactly, to fill an irregular region and thereby obtain closer and closer approximations to the total area. In this process, an area bounded by curves is filled with rectangles, triangles, and shapes with exact area formulas. These areas are then summed to approximate the area of the curved region.
In this section, we develop techniques to approximate the area between a curve, defined by a function $f(x),$ and the *x*-axis on a closed interval $[a,b].$ Like Archimedes, we first approximate the area under the curve using shapes of known area (namely, rectangles). By using smaller and smaller rectangles, we get closer and closer approximations to the area. Taking a limit allows us to calculate the exact area under the curve.
Let’s start by introducing some notation to make the calculations easier. We then consider the case when $f(x)$ is continuous and nonnegative. Later in the chapter, we relax some of these restrictions and develop techniques that apply in more general cases.

## Sigma (Summation) Notation
As mentioned, we will use shapes of known area to approximate the area of an irregular region bounded by curves. This process often requires adding up long strings of numbers. To make it easier to write down these lengthy sums, we look at some new notation here, called {term:sigma notation} (also known as {term:summation notation}). The Greek capital letter $Σ,$ sigma, is used to express long sums of values in a compact form. For example, if we want to add all the integers from 1 to 20 without sigma notation, we have to write

$1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20.$  {eq:fs-id1170572139479}

We could probably skip writing a couple of terms and write

$1+2+3+4+\text{⋯}+19+20,$  {eq:fs-id1170572550692}

which is better, but still cumbersome. With sigma notation, we write this sum as

${\displaystyle \sum_{i=1}^{20} i},$  {eq:fs-id1170572553991}

which is much more compact.
Typically, sigma notation is presented in the form

${\displaystyle \sum_{i=1}^{n} {a}_{i}}$  {eq:fs-id1170571602104}

where ${a}_{i}$ describes the terms to be added, and the *i* is called the {index:*index*}. Each term is evaluated, then we sum all the values, beginning with the value when $i=1$ and ending with the value when $i=n.$ For example, an expression like ${\displaystyle \sum_{i=2}^{7} {s}_{i}}$ is interpreted as ${s}_{2}+{s}_{3}+{s}_{4}+{s}_{5}+{s}_{6}+{s}_{7}.$ Note that the index is used only to keep track of the terms to be added; it does not factor into the calculation of the sum itself. The index is therefore called a {index:*dummy variable*}. We can use any letter we like for the index. Typically, mathematicians use *i*, *j*, *k*, *m*, and *n* for indices.
Let’s try a couple of examples of using sigma notation.

:::example {ex:fs-id1170572294328} Using Sigma Notation

:::exercise {fs-id1170572142219} type= 
PROBLEM:
a. Write in sigma notation and evaluate the sum of terms ${3}^{i}$ for $i=1,2,3,4,5.$
b. Write the sum in sigma notation:

$1+\frac{1}{4}+\frac{1}{9}+\frac{1}{16}+\frac{1}{25}.$  {eq:fs-id1170572092410}

SOLUTION:
a. Write

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{5} {3}^{i}} & =3+{3}^{2}+{3}^{3}+{3}^{4}+{3}^{5} \\ & =363.\end{array}$  {eq:fs-id1170572296964}

b. The denominator of each term is a perfect square. Using sigma notation, this sum can be written as ${\displaystyle \sum_{i=1}^{5} \frac{1}{{i}^{2}}}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572107370} type= 
PROBLEM:
Write in sigma notation and evaluate the sum of terms 2*<sup>i</sup>* for $i=3,4,5,6.$
SOLUTION:
${\displaystyle \sum_{i=3}^{6} {2}^{i}}={2}^{3}+{2}^{4}+{2}^{5}+{2}^{6}=120$
COMMENTARY: Hint
Use the solving steps in [ref:fs-id1170572294328] as a guide.
:::
:::
The properties associated with the summation process are given in the following rule.

:::note [rule] Rule: Properties of Sigma Notation
Let ${a}_{1},{a}_{2}\text{,…,}\;{a}_{n}$ and ${b}_{1},{b}_{2}\text{,…,}\;{b}_{n}$ represent two sequences of terms and let *c* be a constant. The following properties hold for all positive integers *n* and for integers *m*, with $1\le m\le n.$
1. 

$$ {\displaystyle \sum_{i=1}^{n} c}=nc $$  {eq:fs-id1170572294298}

2. 

$$ {\displaystyle \sum_{i=1}^{n} c{a}_{i}}=c{\displaystyle \sum_{i=1}^{n} {a}_{i}} $$  {eq:fs-id1170571809640}

3. 

$$ {\displaystyle \sum_{i=1}^{n} ({a}_{i}+{b}_{i})}={\displaystyle \sum_{i=1}^{n} {a}_{i}}+{\displaystyle \sum_{i=1}^{n} {b}_{i}} $$  {eq:fs-id1170572138153}

4. 

$$ {\displaystyle \sum_{i=1}^{n} ({a}_{i}-{b}_{i})}={\displaystyle \sum_{i=1}^{n} {a}_{i}}-{\displaystyle \sum_{i=1}^{n} {b}_{i}} $$  {eq:fs-id1170571678952}

5. 

$$ {\displaystyle \sum_{i=1}^{n} {a}_{i}}={\displaystyle \sum_{i=1}^{m} {a}_{i}}+{\displaystyle \sum_{i=m+1}^{n} {a}_{i}} $$  {eq:fs-id1170572629258}

:::

### Proof
We prove properties 2. and 3. here, and leave proof of the other properties to the Exercises.
2. We have

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{n} c{a}_{i}} & =c{a}_{1}+c{a}_{2}+c{a}_{3}+\text{⋯}+c{a}_{n} \\ & =c({a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{n}) \\ \\ \\ & =c{\displaystyle \sum_{i=1}^{n} {a}_{i}}.\end{array}$  {eq:fs-id1170571656289}

3. We have

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{n} ({a}_{i}+{b}_{i})} & =({a}_{1}+{b}_{1})+({a}_{2}+{b}_{2})+({a}_{3}+{b}_{3})+\text{⋯}+({a}_{n}+{b}_{n}) \\ & =({a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{n})+({b}_{1}+{b}_{2}+{b}_{3}+\text{⋯}+{b}_{n}) \\ \\ \\ & ={\displaystyle \sum_{i=1}^{n} {a}_{i}}+{\displaystyle \sum_{i=1}^{n} {b}_{i}}.\end{array}$  {eq:fs-id1170572103031}

□
A few more formulas for frequently found functions simplify the summation process further. These are shown in the next rule, for {term:sums and powers of integers}, and we use them in the next set of examples.

:::note [rule] Rule: Sums and Powers of Integers
1. The sum of *n* integers is given by

${\displaystyle \sum_{i=1}^{n} i}=1+2+\text{⋯}+n=\frac{n(n+1)}{2}.$  {eq:fs-id1170572241371}

2. The sum of consecutive integers squared is given by

${\displaystyle \sum_{i=1}^{n} {i}^{2}}={1}^{2}+{2}^{2}+\text{⋯}+{n}^{2}=\frac{n(n+1)(2n+1)}{6}.$  {eq:fs-id1170572560041}

3. The sum of consecutive integers cubed is given by

${\displaystyle \sum_{i=1}^{n} {i}^{3}}={1}^{3}+{2}^{3}+\text{⋯}+{n}^{3}=\frac{{n}^{2}{(n+1)}^{2}}{4}.$  {eq:fs-id1170572093566}

:::

:::example {ex:fs-id1170572218770} Evaluation Using Sigma Notation

:::exercise {fs-id1170572370645} type= 
PROBLEM:
Write using sigma notation and evaluate:
a. The sum of the terms ${(i-3)}^{2}$ for $i=1,2\text{,…,}\;200.$
b. The sum of the terms $({i}^{3}-{i}^{2})$ for $i=1,2,3,4,5,6.$
SOLUTION:
a. Multiplying out ${(i-3)}^{2},$ we can break the expression into three terms.

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{200} {(i-3)}^{2}} & ={\displaystyle \sum_{i=1}^{200} ({i}^{2}-6i+9)} \\ \\ \\ & ={\displaystyle \sum_{i=1}^{200} {i}^{2}}-{\displaystyle \sum_{i=1}^{200} 6i}+{\displaystyle \sum_{i=1}^{200} 9} \\ & ={\displaystyle \sum_{i=1}^{200} {i}^{2}}-6{\displaystyle \sum_{i=1}^{200} i}+{\displaystyle \sum_{i=1}^{200} 9} \\ & =\frac{200(200+1)(400+1)}{6}-6[\frac{200(200+1)}{2}]+9(200) \\ & =2,686,700-120,600+1800 \\ & =2,567,900\end{array}$  {eq:fs-id1170572107292}

b. Use sigma notation property iv. and the rules for the sum of squared terms and the sum of cubed terms.

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{6} ({i}^{3}-{i}^{2})} & ={\displaystyle \sum_{i=1}^{6} {i}^{3}}-{\displaystyle \sum_{i=1}^{6} {i}^{2}} \\ \\ \\ \\ & =\frac{{6}^{2}{(6+1)}^{2}}{4}-\frac{6(6+1)(2(6)+1)}{6} \\ & =\frac{1764}{4}-\frac{546}{6} \\ & =350\end{array}$  {eq:fs-id1170572140369}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572455429} type= 
PROBLEM:
Find the sum of the values of $4+3i$ for $i=1,2\text{,…,}\;100.$
SOLUTION:
15,550
COMMENTARY: Hint
Use the properties of sigma notation to solve the problem.
:::
:::

:::example {ex:fs-id1170572337091} Finding the Sum of the Function Values

:::exercise {fs-id1170572337093} type= 
PROBLEM:
Find the sum of the values of $f(x)={x}^{3}$ over the integers $1,2,3\text{,…,}\;10.$
SOLUTION:
Using the formula, we have

$\begin{array}{ll}{\displaystyle \sum_{i=1}^{10} {i}^{3}} & =\frac{{(10)}^{2}{(10+1)}^{2}}{4} \\ \\ & =\frac{100(121)}{4} \\ & =3025.\end{array}$  {eq:fs-id1170572224759}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572178190} type= 
PROBLEM:
Evaluate the sum indicated by the notation ${\displaystyle \sum_{k=1}^{20} (2k+1)}.$
SOLUTION:
440
COMMENTARY: Hint
Use the rule on sum and powers of integers.
:::
:::

## Approximating Area
Now that we have the necessary notation, we return to the problem at hand: approximating the area under a curve. Let $f(x)$ be a continuous, nonnegative function defined on the closed interval $[a,b].$ We want to approximate the area *A* bounded by $f(x)$ above, the *x*-axis below, the line $x=a$ on the left, and the line $x=b$ on the right ([ref:CNX_Calc_Figure_05_01_001]).

> FIGURE {fig:CNX_Calc_Figure_05_01_001} src=../../media/CNX_Calc_Figure_05_01_017.jpg
> alt: A graph in quadrant one of an area bounded by a generic curve f(x) at the top, the x-axis at the bottom, the line x = a to the left, and the line x = b to the right. About midway through, the concavity switches from concave down to concave up, and the function starts to increases shortly before the line x = b.
> caption: An area (shaded region) bounded by the curve $f(x)$ at top, the *x*-axis at bottom, the line $x=a$ to the left, and the line $x=b$ at right.

How do we approximate the area under this curve? The approach is a geometric one. By dividing a region into many small shapes that have known area formulas, we can sum these areas and obtain a reasonable estimate of the true area. We begin by dividing the interval $[a,b]$ into *n* subintervals of equal width, $\frac{b-a}{n}.$ We do this by selecting equally spaced points ${x}_{0},{x}_{1},{x}_{2}\text{,…,}\;{x}_{n}$ with ${x}_{0}=a,{x}_{n}=b,$ and

${x}_{i}-{x}_{i-1}=\frac{b-a}{n}$  {eq:fs-id1170571613009}

for $i=1,2,3\text{,…,}\;n.$
We denote the width of each subinterval with the notation Δ*x*, so $\text{Δ}x=\frac{b-a}{n}$ and

${x}_{i}={x}_{0}+i\text{Δ}x$  {eq:fs-id1170572223464}

for $i=1,2,3\text{,…,}\;n.$ This notion of dividing an interval $[a,b]$ into subintervals by selecting points from within the interval is used quite often in approximating the area under a curve, so let’s define some relevant terminology.

:::note [definition] Definition
A set of points $P=\{{x}_{i}\}$ for $i=0,1,2\text{,…,}\;n$ with $a={x}_{0}<{x}_{1}<{x}_{2}<\text{⋯}<{x}_{n}=b,$ which divides the interval $[a,b]$ into subintervals of the form $[{x}_{0},{x}_{1}],[{x}_{1},{x}_{2}]\text{,…,}\;[{x}_{n-1},{x}_{n}]$ is called a {term:partition} of $[a,b].$ If the subintervals all have the same width, the set of points forms a {term:regular partition} of the interval $[a,b].$
:::
We can use this regular partition as the basis of a method for estimating the area under the curve. We next examine two methods: the left-endpoint approximation and the right-endpoint approximation.

:::note [rule] Rule: Left-Endpoint Approximation
On each subinterval $[{x}_{i-1},{x}_{i}]$ (for $i=1,2,3\text{,…,}\;n),$ construct a rectangle with width Δ*x* and height equal to $f({x}_{i-1}),$ which is the function value at the left endpoint of the subinterval. Then the area of this rectangle is $f({x}_{i-1})\text{Δ}x.$ Adding the areas of all these rectangles, we get an approximate value for *A* ([ref:CNX_Calc_Figure_05_01_002]). We use the notation *L<sub>n</sub>* to denote that this is a {term:left-endpoint approximation} of *A* using *n* subintervals.

$$ \begin{array}{ll}A\approx {L}_{n} & =f({x}_{0})\text{Δ}x+f({x}_{1})\text{Δ}x+\text{⋯}+f({x}_{n-1})\text{Δ}x \\ \\ \\ \\ & ={\displaystyle \sum_{i=1}^{n} f({x}_{i-1})\text{Δ}x}\end{array} $$  {eq:fs-id1170571645657}

:::

> FIGURE {fig:CNX_Calc_Figure_05_01_002} src=../../media/CNX_Calc_Figure_05_01_001.jpg
> alt: A diagram showing the left-endpoint approximation of area under a curve. Under a parabola with vertex on the y axis and above the x axis, rectangles are drawn between a=x0 on the origin and b = xn. The rectangles have endpoints at a=x0, x1, x2…x(n-1), and b = xn, spaced equally. The height of each rectangle is determined by the value of the given function at the left endpoint of the rectangle.
> caption: In the left-endpoint approximation of area under a curve, the height of each rectangle is determined by the function value at the left of each subinterval.

The second method for approximating area under a curve is the right-endpoint approximation. It is almost the same as the left-endpoint approximation, but now the heights of the rectangles are determined by the function values at the right of each subinterval.

:::note [rule] Rule: Right-Endpoint Approximation
Construct a rectangle on each subinterval $[{x}_{i-1},{x}_{i}],$ only this time the height of the rectangle is determined by the function value $f({x}_{i})$ at the right endpoint of the subinterval. Then, the area of each rectangle is $f({x}_{i})\text{Δ}x$ and the approximation for *A* is given by

$$ \begin{array}{ll}A\approx {R}_{n} & =f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+\text{⋯}+f({x}_{n})\text{Δ}x \\ \\ \\ \\ & ={\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x}.\end{array} $$  {eq:fs-id1170572337146}

The notation ${R}_{n}$ indicates this is a {term:right-endpoint approximation} for *A* ([ref:CNX_Calc_Figure_05_01_003]).
:::

> FIGURE {fig:CNX_Calc_Figure_05_01_003} src=../../media/CNX_Calc_Figure_05_01_002.jpg
> alt: A diagram showing the right-endpoint approximation of area under a curve. Under a parabola with vertex on the y axis and above the x axis, rectangles are drawn between a=x0 on the origin and b = xn. The rectangles have endpoints at a=x0, x1, x2…x(n-1), and b = xn, spaced equally. The height of each rectangle is determined by the value of the given function at the right endpoint of the rectangle.
> caption: In the right-endpoint approximation of area under a curve, the height of each rectangle is determined by the function value at the right of each subinterval. Note that the right-endpoint approximation differs from the left-endpoint approximation in [ref:CNX_Calc_Figure_05_01_002].

The graphs in [ref:CNX_Calc_Figure_05_01_004] represent the curve $f(x)=\frac{{x}^{2}}{2}.$ In graph (a) we divide the region represented by the interval $[0,3]$ into six subintervals, each of width 0.5. Thus, $\text{Δ}x=0.5.$ We then form six rectangles by drawing vertical lines perpendicular to ${x}_{i-1},$ the left endpoint of each subinterval. We determine the height of each rectangle by calculating $f({x}_{i-1})$ for $i=1,2,3,4,5,6.$ The intervals are $[0,0.5],[0.5,1],[1,1.5],[1.5,2],[2,2.5],[2.5,3].$ We find the area of each rectangle by multiplying the height by the width. Then, the sum of the rectangular areas approximates the area between $f(x)$ and the *x*-axis. When the left endpoints are used to calculate height, we have a left-endpoint approximation. Thus,

$\begin{array}{ll} \\ \\ A\approx {L}_{6} & ={\displaystyle \sum_{i=1}^{6} f({x}_{i-1})\text{Δ}x}=f({x}_{0})\text{Δ}x+f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+f({x}_{3})\text{Δ}x+f({x}_{4})\text{Δ}x+f({x}_{5})\text{Δ}x \\ & =f(0)0.5+f(0.5)0.5+f(1)0.5+f(1.5)0.5+f(2)0.5+f(2.5)0.5 \\ & =(0)0.5+(0.125)0.5+(0.5)0.5+(1.125)0.5+(2)0.5+(3.125)0.5 \\ & =0+0.0625+0.25+0.5625+1+1.5625 \\ & =3.4375.\end{array}$  {eq:fs-id1170571807226}

> FIGURE {fig:CNX_Calc_Figure_05_01_004} src=../../media/CNX_Calc_Figure_05_01_003.jpg
> alt: Diagrams side by side, showing the differences in approximating the area under a parabolic curve with vertex at the origin between the left endpoints method (the first diagram) and the right endpoints method (the second diagram). In the first diagram, rectangles are drawn at even intervals (delta x) under the curve with heights determined by the value of the function at the left endpoints. In the second diagram, the rectangles are drawn in the same fashion, but with heights determined by the value of the function at the right endpoints. The endpoints in both are spaced equally from the origin to (3, 0), labeled x0 to x6.
> caption: Methods of approximating the area under a curve by using (a) the left endpoints and (b) the right endpoints.

In [ref:CNX_Calc_Figure_05_01_004](b), we draw vertical lines perpendicular to ${x}_{i}$ such that ${x}_{i}$ is the right endpoint of each subinterval, and calculate $f({x}_{i})$ for $i=1,2,3,4,5,6.$ We multiply each $f({x}_{i})$ by Δ*x* to find the rectangular areas, and then add them. This is a right-endpoint approximation of the area under $f(x).$ Thus,

$\begin{array}{ll} \\ \\ A\approx {R}_{6} & ={\displaystyle \sum_{i=1}^{6} f({x}_{i})\text{Δ}x}=f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+f({x}_{3})\text{Δ}x+f({x}_{4})\text{Δ}x+f({x}_{5})\text{Δ}x+f({x}_{6})\text{Δ}x \\ & =f(0.5)0.5+f(1)0.5+f(1.5)0.5+f(2)0.5+f(2.5)0.5+f(3)0.5 \\ & =(0.125)0.5+(0.5)0.5+(1.125)0.5+(2)0.5+(3.125)0.5+(4.5)0.5 \\ & =0.0625+0.25+0.5625+1+1.5625+2.25 \\ & =5.6875.\end{array}$  {eq:fs-id1170572223998}

:::example {ex:fs-id1170571758983} Approximating the Area Under a Curve

:::exercise {fs-id1170571758985} type= 
PROBLEM:
Use both left-endpoint and right-endpoint approximations to approximate the area under the curve of $f(x)={x}^{2}$ on the interval $[0,2];$ use $n=4.$
SOLUTION:
First, divide the interval $[0,2]$ into *n* equal subintervals. Using $n=4,\text{Δ}x=\frac{(2-0)}{4}=0.5.$ This is the width of each rectangle. The intervals $[0,0.5],[0.5,1],[1,1.5],[1.5,2]$ are shown in [ref:CNX_Calc_Figure_05_01_005]. Using a left-endpoint approximation, the heights are $f(0)=0,f(0.5)=0.25,f(1)=1,f(1.5)=2.25.$ Then,

$\begin{array}{ll}{L}_{4} & =f({x}_{0})\text{Δ}x+f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+f({x}_{3})\text{Δ}x \\ & =0(0.5)+0.25(0.5)+1(0.5)+2.25(0.5) \\ & =1.75.\end{array}$  {eq:fs-id1170572233829}

> FIGURE {fig:CNX_Calc_Figure_05_01_005} src=../../media/CNX_Calc_Figure_05_01_010.jpg
> alt: A graph of the left-endpoint approximation of the area under the curve f(x) = x^2 from 0 to 2 with endpoints spaced .5 units apart. The heights of the rectangle are determined by the values of the function at their left endpoints.
> caption: The graph shows the left-endpoint approximation of the area under $f(x)={x}^{2}$ from 0 to 2.

The right-endpoint approximation is shown in [ref:CNX_Calc_Figure_05_01_006]. The intervals are the same, $\text{Δ}x=0.5,$ but now use the right endpoint to calculate the height of the rectangles. We have

$\begin{array}{ll}{R}_{4} & =f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+f({x}_{3})\text{Δ}x+f({x}_{4})\text{Δ}x \\ & =0.25(0.5)+1(0.5)+2.25(0.5)+4(0.5) \\ & =3.75.\end{array}$  {eq:fs-id1170571604758}

> FIGURE {fig:CNX_Calc_Figure_05_01_006} src=../../media/CNX_Calc_Figure_05_01_011.jpg
> alt: A graph of the right-endpoint approximation method of the area under the curve f(x) = x^2 from 0 to 2 with endpoints spaced .5 units apart. The heights of the rectangles are determined by the values of the function at the right endpoints.
> caption: The graph shows the right-endpoint approximation of the area under $f(x)={x}^{2}$ from 0 to 2.

The left-endpoint approximation is 1.75; the right-endpoint approximation is 3.75.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572448365} type= 
PROBLEM:
Sketch left-endpoint and right-endpoint approximations for $f(x)=\frac{1}{x}$ on $[1,2];$ use $n=4.$ Approximate the area using both methods.
SOLUTION:
The left-endpoint approximation is 0.7595. The right-endpoint approximation is 0.6345.  
> IMAGE {img:fs-id1170572216462} src=../../media/CNX_Calc_Figure_05_01_012.jpg
> alt: Two graphs side by side showing the left-endpoint approximation ad right-endpoint approximation of the area under the curve f(x) = 1/x from 1 to 2 with endpoints spaced evenly at .25 units. The heights of the left-endpoint approximation one are determined by the values of the function at the left endpoints, and the height of the right-endpoint approximation one are determined by the values of the function at the right endpoints.

COMMENTARY: Hint
Follow the solving strategy in [ref:fs-id1170571758983] step-by-step.
:::
:::
Looking at [ref:CNX_Calc_Figure_05_01_004] and the graphs in [ref:fs-id1170571758983], we can see that when we use a small number of intervals, neither the left-endpoint approximation nor the right-endpoint approximation is a particularly accurate estimate of the area under the curve. However, it seems logical that if we increase the number of points in our partition, our estimate of *A* will improve. We will have more rectangles, but each rectangle will be thinner, so we will be able to fit the rectangles to the curve more precisely.
We can demonstrate the improved approximation obtained through smaller intervals with an example. Let’s explore the idea of increasing *n*, first in a left-endpoint approximation with four rectangles, then eight rectangles, and finally 32 rectangles. Then, let’s do the same thing in a right-endpoint approximation, using the same sets of intervals, of the same curved region. [ref:CNX_Calc_Figure_05_01_008] shows the area of the region under the curve $f(x)={(x-1)}^{3}+4$ on the interval $[0,2]$ using a left-endpoint approximation where $n=4.$ The width of each rectangle is

$\text{Δ}x=\frac{2-0}{4}=\frac{1}{2}.$  {eq:fs-id1170571697366}

The area is approximated by the summed areas of the rectangles, or

$\begin{array}{ll}{L}_{4} & =f(0)(0.5)+f(0.5)(0.5)+f(1)(0.5)+f(1.5)0.5 \\ & =7.5.\end{array}$  {eq:fs-id1170572337013}

> FIGURE {fig:CNX_Calc_Figure_05_01_008} src=../../media/CNX_Calc_Figure_05_01_004.jpg
> alt: A graph of the left-endpoint approximation of the area under the given curve from a = x0 to b=x4. The heights of the rectangles are determined by the values of the function at the left endpoints.
> caption: With a left-endpoint approximation and dividing the region from *a* to *b* into four equal intervals, the area under the curve is approximately equal to the sum of the areas of the rectangles.

[ref:CNX_Calc_Figure_05_01_009] shows the same curve divided into eight subintervals. Comparing the graph with four rectangles in [ref:CNX_Calc_Figure_05_01_008] with this graph with eight rectangles, we can see there appears to be less white space under the curve when $n=8.$ This white space is area under the curve we are unable to include using our approximation. The area of the rectangles is

$\begin{array}{ll}{L}_{8} & =f(0)(0.25)+f(0.25)(0.25)+f(0.5)(0.25)+f(0.75)(0.25) \\ & \;+f(1)(0.25)+f(1.25)(0.25)+f(1.5)(0.25)+f(1.75)(0.25) \\ & =7.75.\end{array}$  {eq:fs-id1170572309881}

> FIGURE {fig:CNX_Calc_Figure_05_01_009} src=../../media/CNX_Calc_Figure_05_01_005.jpg
> alt: A graph showing the left-endpoint approximation for the area under the given curve from a=x0 to b = x8. The heights of the rectangles are determined by the values of the function at the left endpoints.
> caption: The region under the curve is divided into $n=8$ rectangular areas of equal width for a left-endpoint approximation.

The graph in [ref:CNX_Calc_Figure_05_01_010] shows the same function with 32 rectangles inscribed under the curve. There appears to be little white space left. The area occupied by the rectangles is

$\begin{array}{ll}{L}_{32} & =f(0)(0.0625)+f(0.0625)(0.0625)+f(0.125)(0.0625)+\text{⋯}+f(1.9375)(0.0625) \\ & =7.9375.\end{array}$  {eq:fs-id1170571636308}

> FIGURE {fig:CNX_Calc_Figure_05_01_010} src=../../media/CNX_Calc_Figure_05_01_006.jpg
> alt: A graph of the left-endpoint approximation of the area under the given curve from a = x0 to b = x32. The heights of the rectangles are determined by the values of the function at the left endpoints.
> caption: Here, 32 rectangles are inscribed under the curve for a left-endpoint approximation.

We can carry out a similar process for the right-endpoint approximation method. A right-endpoint approximation of the same curve, using four rectangles ([ref:CNX_Calc_Figure_05_01_011]), yields an area

$\begin{array}{ll}{R}_{4} & =f(0.5)(0.5)+f(1)(0.5)+f(1.5)(0.5)+f(2)(0.5) \\ & =8.5.\end{array}$  {eq:fs-id1170572380039}

> FIGURE {fig:CNX_Calc_Figure_05_01_011} src=../../media/CNX_Calc_Figure_05_01_007.jpg
> alt: A graph of the right-endpoint approximation for the area under the given curve from x0 to x4. The heights of the rectangles are determined by the values of the function at the right endpoints.
> caption: Now we divide the area under the curve into four equal subintervals for a right-endpoint approximation.

Dividing the region over the interval $[0,2]$ into eight rectangles results in $\text{Δ}x=\frac{2-0}{8}=0.25.$ The graph is shown in [ref:CNX_Calc_Figure_05_01_012]. The area is

$\begin{array}{ll}{R}_{8} & =f(0.25)(0.25)+f(0.5)(0.25)+f(0.75)(0.25)+f(1)(0.25) \\ & \;+f(1.25)(0.25)+f(1.5)(0.25)+f(1.75)(0.25)+f(2)(0.25) \\ & =8.25.\end{array}$  {eq:fs-id1170572420047}

> FIGURE {fig:CNX_Calc_Figure_05_01_012} src=../../media/CNX_Calc_Figure_05_01_008.jpg
> alt: A graph of the right-endpoint approximation for the area under the given curve from a=x0 to b=x8.The heights of the rectangles are determined by the values of the function at the right endpoints.
> caption: Here we use right-endpoint approximation for a region divided into eight equal subintervals.

Last, the right-endpoint approximation with $n=32$ is close to the actual area ([ref:CNX_Calc_Figure_05_01_013]). The area is approximately

$\begin{array}{ll}{R}_{32} & =f(0.0625)(0.0625)+f(0.125)(0.0625)+f(0.1875)(0.0625)+\text{⋯}+f(2)(0.0625) \\ & =8.0625.\end{array}$  {eq:fs-id1170571609299}

> FIGURE {fig:CNX_Calc_Figure_05_01_013} src=../../media/CNX_Calc_Figure_05_01_009.jpg
> alt: A graph of the right-endpoint approximation for the area under the given curve from a=x0 to b=x32. The heights of the rectangles are determined by the values of the function at the right endpoints.
> caption: The region is divided into 32 equal subintervals for a right-endpoint approximation.

Based on these figures and calculations, it appears we are on the right track; the rectangles appear to approximate the area under the curve better as *n* gets larger. Furthermore, as *n* increases, both the left-endpoint and right-endpoint approximations appear to approach an area of 8 square units. [ref:fs-id1170572305783] shows a numerical comparison of the left- and right-endpoint methods. The idea that the approximations of the area under the curve get better and better as *n* gets larger and larger is very important, and we now explore this idea in more detail.

> TABLE {tab:fs-id1170572305783} cols=3
> title: Converging Values of Left- and Right-Endpoint Approximations as *n* Increases
> summary: A table with four rows and three columns. The first row has headers Values of n, Approximate Area Ln, and Approximate Area Rn. The first column contains the values n=4, n=8, and n=32. The second column contains the values 7.5, 7.75, and 7.94. The third column contains the values 8.5, 8.25, and 8.06.

| Values of *n* | Approximate Area *L<sub>n</sub>* | Approximate Area *R<sub>n</sub>* |
| --- | --- | --- |
| $n=4$ | 7.5 | 8.5 |
| $n=8$ | 7.75 | 8.25 |
| $n=32$ | 7.94 | 8.06 |

## Forming Riemann Sums
So far we have been using rectangles to approximate the area under a curve. The heights of these rectangles have been determined by evaluating the function at either the right or left endpoints of the subinterval $[{x}_{i-1},{x}_{i}].$ In reality, there is no reason to restrict evaluation of the function to one of these two points only. We could evaluate the function at any point ${x}_{i}^{*}$ in the subinterval $[{x}_{i-1},{x}_{i}],$ and use $f({x}_{i}^{*})$ as the height of our rectangle. This gives us an estimate for the area of the form

$A\approx {\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}.$  {eq:fs-id1170572376449}

A sum of this form is called a Riemann sum, named for the 19th-century mathematician Bernhard Riemann, who developed the idea.

:::note [definition] Definition
Let $f(x)$ be defined on a closed interval $[a,b]$ and let *P* be a regular partition of $[a,b].$ Let Δ*x* be the width of each subinterval $[{x}_{i-1},{x}_{i}]$ and for each *i*, let ${x}_{i}^{*}$ be any point in $[{x}_{i-1},{x}_{i}].$ A {term:Riemann sum} is defined for $f(x)$ as

${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}.$  {eq:fs-id1170572444290}

:::
Recall that with the left- and right-endpoint approximations, the estimates seem to get better and better as *n* get larger and larger. The same thing happens with Riemann sums. Riemann sums give better approximations for larger values of *n*. We are now ready to define the area under a curve in terms of Riemann sums.

:::note [definition] Definition
Let $f(x)$ be a continuous, nonnegative function on an interval $[a,b],$ and let ${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}$ be a Riemann sum for $f(x).$ Then, the {term:area under the curve} $y=f(x)$ on $[a,b]$ is given by

$A=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}.$  {eq:fs-id1170572229819}

:::

:::note [media-2] 
See a [graphical demonstration](http://www.openstax.org/l/20_riemannsums) of the construction of a Riemann sum.
:::
Some subtleties here are worth discussing. First, note that taking the limit of a sum is a little different from taking the limit of a function $f(x)$ as *x* goes to infinity. Limits of sums are discussed in detail in the chapter on [Sequences and Series](module:m53756); however, for now we can assume that the computational techniques we used to compute limits of functions can also be used to calculate limits of sums.
Second, we must consider what to do if the expression converges to different limits for different choices of $\{{x}_{i}^{*}\}.$ Fortunately, this does not happen. Although the proof is beyond the scope of this text, it can be shown that if $f(x)$ is continuous on the closed interval $[a,b],$ then $\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}$ exists and is unique (in other words, it does not depend on the choice of $\{{x}_{i}^{*}\}\text{).}$
We look at some examples shortly. But, before we do, let’s take a moment and talk about some specific choices for $\{{x}_{i}^{*}\}.$ Although any choice for $\{{x}_{i}^{*}\}$ gives us an estimate of the area under the curve, we don’t necessarily know whether that estimate is too high (overestimate) or too low (underestimate). If it is important to know whether our estimate is high or low, we can select our value for $\{{x}_{i}^{*}\}$ to guarantee one result or the other.
If we want an overestimate, for example, we can choose $\{{x}_{i}^{*}\}$ such that for $i=1,2,3\text{,…,}\;n,f({x}_{i}^{*})\ge f(x)$ for all $x\in [{x}_{i-1},{x}_{i}].$ In other words, we choose $\{{x}_{i}^{*}\}$ so that for $i=1,2,3\text{,…,}\;n,f({x}_{i}^{*})$ is the maximum function value on the interval $[{x}_{i-1},{x}_{i}].$ If we select $\{{x}_{i}^{*}\}$ in this way, then the Riemann sum ${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x}$ is called an {term:upper sum}. Similarly, if we want an underestimate, we can choose $\{{x}_{i}^{*}\}$ so that for $i=1,2,3\text{,…,}\;n,f({x}_{i}^{*})$ is the minimum function value on the interval $[{x}_{i-1},{x}_{i}].$ In this case, the associated Riemann sum is called a {term:lower sum}. Note that if $f(x)$ is either increasing or decreasing throughout the interval $[a,b],$ then the maximum and minimum values of the function occur at the endpoints of the subintervals, so the upper and lower sums are just the same as the left- and right-endpoint approximations.

:::example {ex:fs-id1170572274802} Finding Lower and Upper Sums

:::exercise {fs-id1170572274805} type= 
PROBLEM:
Find a lower sum for $f(x)=10-{x}^{2}$ on $[1,2];$ let $n=4$ subintervals.
SOLUTION:
With $n=4$ over the interval $[1,2],\text{Δ}x=\frac{1}{4}.$ We can list the intervals as $[1,1.25],[1.25,1.5],[1.5,1.75],[1.75,2].$ Because the function is decreasing over the interval $[1,2],$ [ref:CNX_Calc_Figure_05_01_014] shows that a lower sum is obtained by using the right endpoints.

> FIGURE {fig:CNX_Calc_Figure_05_01_014} src=../../media/CNX_Calc_Figure_05_01_014.jpg
> alt: The graph of f(x) = 10 − x^2 from 0 to 2. It is set up for a right-end approximation of the area bounded by the curve and the x axis on [1, 2], labeled a=x0 to x4. It shows a lower sum.
> caption: The graph of $f(x)=10-{x}^{2}$ is set up for a right-endpoint approximation of the area bounded by the curve and the *x*-axis on $[1,2],$ and it shows a lower sum.

The Riemann sum is

$\begin{array}{ll}\sum_{k=1}^{4} (10-{{x}_{k}}^{2})(0.25) & =0.25[10-{(1.25)}^{2}+10-{(1.5)}^{2}+10-{(1.75)}^{2}+10-{(2)}^{2}] \\ & =0.25[8.4375+7.75+6.9375+6] \\ & =7.28.\end{array}$  {eq:fs-id1170572233863}

The area of 7.28 is a lower sum and an underestimate.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572376182} type= 
PROBLEM:
a. Find an upper sum for $f(x)=10-{x}^{2}$ on $[1,2];$ let $n=4.$
b. Sketch the approximation.
SOLUTION:
a. $\text{Upper sum}=8.0313.$
b. 

> IMAGE {img:fs-id1170571653973} src=../../media/CNX_Calc_Figure_05_01_015.jpg
> alt: A graph of the function f(x) = 10 − x^2 from 0 to 2. It is set up for a right endpoint approximation over the area [1,2], which is labeled a=x0 to x4. It is an upper sum.

COMMENTARY: Hint
$f(x)$ is decreasing on $[1,2],$ so the maximum function values occur at the left endpoints of the subintervals.
:::
:::

:::example {ex:fs-id1170572551906} Finding Lower and Upper Sums for $f(x)=\text{sin}\;x$

:::exercise {fs-id1170572551908} type= 
PROBLEM:
Find a lower sum for $f(x)=\text{sin}\;x$ over the interval $[a,b]=[0,\frac{\pi}{2}];$ let $n=6.$
SOLUTION:
Let’s first look at the graph in [ref:CNX_Calc_Figure_05_01_016] to get a better idea of the area of interest.

> FIGURE {fig:CNX_Calc_Figure_05_01_016} src=../../media/CNX_Calc_Figure_05_01_016.jpg
> alt: A graph of the function y = sin(x) from 0 to pi. It is set up for a left endpoint approximation from 0 to pi/2 and n=6. It is a lower sum.
> caption: The graph of $y=\text{sin}\;x$ is divided into six regions: $\text{Δ}x=\frac{\pi \text{/}2}{6}=\frac{\pi}{12}.$

The intervals are $[0,\frac{\pi}{12}],[\frac{\pi}{12},\frac{\pi}{6}],[\frac{\pi}{6},\frac{\pi}{4}],[\frac{\pi}{4},\frac{\pi}{3}],[\frac{\pi}{3},\frac{5\pi}{12}],$ and $[\frac{5\pi}{12},\frac{\pi}{2}].$ Note that $f(x)=\text{sin}\;x$ is increasing on the interval $[0,\frac{\pi}{2}],$ so a left-endpoint approximation gives us the lower sum. A left-endpoint approximation is the Riemann sum ${\displaystyle \sum_{i=0}^{5} \text{sin}\;{x}_{i}(\frac{\pi}{12})}.$ We have

$\begin{array}{ll}A & \approx \text{sin}(0)(\frac{\pi}{12})+\text{sin}(\frac{\pi}{12})(\frac{\pi}{12})+\text{sin}(\frac{\pi}{6})(\frac{\pi}{12})+\text{sin}(\frac{\pi}{4})(\frac{\pi}{12})+\text{sin}(\frac{\pi}{3})(\frac{\pi}{12})+\text{sin}(\frac{5\pi}{12})(\frac{\pi}{12}) \\ & =0.863.\end{array}$  {eq:fs-id1170572293428}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572554393} type= 
PROBLEM:
Using the function $f(x)=\text{sin}\;x$ over the interval $[0,\frac{\pi}{2}],$ find an upper sum; let $n=6.$
SOLUTION:
$A\approx 1.125$
COMMENTARY: Hint
Follow the steps from [ref:fs-id1170572551906].
:::
:::

## Key Concepts {section:key-concepts}
- The use of sigma (summation) notation of the form ${\displaystyle \sum_{i=1}^{n} {a}_{i}}$ is useful for expressing long sums of values in compact form.
- For a continuous function defined over an interval $[a,b],$ the process of dividing the interval into *n* equal parts, extending a rectangle to the graph of the function, calculating the areas of the series of rectangles, and then summing the areas yields an approximation of the area of that region.
- The width of each rectangle is $\text{Δ}x=\frac{b-a}{n}.$
- Riemann sums are expressions of the form ${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}x},$ and can be used to estimate the area under the curve $y=f(x).$ Left- and right-endpoint approximations are special kinds of Riemann sums where the values of $\{{x}_{i}^{*}\}$ are chosen to be the left or right endpoints of the subintervals, respectively.
- Riemann sums allow for much flexibility in choosing the set of points $\{{x}_{i}^{*}\}$ at which the function is evaluated, often with an eye to obtaining a lower sum or an upper sum.

## Key Equations {section:key-equations}

> TABLE {tab:eip-497} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Properties of Sigma Notation** | ${\displaystyle \sum_{i=1}^{n} c}=nc$<br> ${\displaystyle \sum_{i=1}^{n} c{a}_{i}}=c{\displaystyle \sum_{i=1}^{n} {a}_{i}}$<br> ${\displaystyle \sum_{i=1}^{n} ({a}_{i}+{b}_{i})}={\displaystyle \sum_{i=1}^{n} {a}_{i}}+{\displaystyle \sum_{i=1}^{n} {b}_{i}}$<br> ${\displaystyle \sum_{i=1}^{n} ({a}_{i}-{b}_{i})}={\displaystyle \sum_{i=1}^{n} {a}_{i}}-{\displaystyle \sum_{i=1}^{n} {b}_{i}}$<br> ${\displaystyle \sum_{i=1}^{n} {a}_{i}}={\displaystyle \sum_{i=1}^{m} {a}_{i}}+{\displaystyle \sum_{i=m+1}^{n} {a}_{i}}$ |
| **Sums and Powers of Integers** | ${\displaystyle \sum_{i=1}^{n} i}=1+2+\text{⋯}+n=\frac{n(n+1)}{2}$<br> ${\displaystyle \sum_{i=1}^{n} {i}^{2}}={1}^{2}+{2}^{2}+\text{⋯}+{n}^{2}=\frac{n(n+1)(2n+1)}{6}$<br> ${\displaystyle \sum_{i=0}^{n} {i}^{3}}={1}^{3}+{2}^{3}+\text{⋯}+{n}^{3}=\frac{{n}^{2}{(n+1)}^{2}}{4}$ |
| **Left-Endpoint Approximation** | $A\approx {L}_{n}=f({x}_{0})\text{Δ}x+f({x}_{1})\text{Δ}x+\text{⋯}+f({x}_{n-1})\text{Δ}x={\displaystyle \sum_{i=1}^{n} f({x}_{i-1})\text{Δ}x}$ |
| **Right-Endpoint Approximation** | $A\approx {R}_{n}=f({x}_{1})\text{Δ}x+f({x}_{2})\text{Δ}x+\text{⋯}+f({x}_{n})\text{Δ}x={\displaystyle \sum_{i=1}^{n} f({x}_{i})\text{Δ}x}$ |

##  {section:section-exercises}

:::exercise {fs-id1170572373451} type= 
PROBLEM:
State whether the given sums are equal or unequal.
a. ${\displaystyle \sum_{i=1}^{10} i}$ and ${\displaystyle \sum_{k=1}^{10} k}$
b. ${\displaystyle \sum_{i=1}^{10} i}$ and ${\displaystyle \sum_{i=6}^{15} (i-5)}$
c. ${\displaystyle \sum_{i=1}^{10} i(i-1)}$ and ${\displaystyle \sum_{j=0}^{9} (j+1)j}$
d. ${\displaystyle \sum_{i=1}^{10} i(i-1)}$ and ${\displaystyle \sum_{k=1}^{10} ({k}^{2}-k)}$
SOLUTION:
a. They are equal; both represent the sum of the first 10 whole numbers. b. They are equal; both represent the sum of the first 10 whole numbers. c. They are equal by substituting $j=i-1.$ d. They are equal; the first sum factors the terms of the second.
:::
In the following exercises, use the rules for sums of powers of integers to compute the sums.

:::exercise {fs-id1170571636152} type= 
PROBLEM:
${\displaystyle \sum_{i=5}^{10} i}$
:::

:::exercise {fs-id1170571636199} type= 
PROBLEM:
${\displaystyle \sum_{i=5}^{10} {i}^{2}}$
SOLUTION:
$385-30=355$
:::
Suppose that ${\displaystyle \sum_{i=1}^{100} {a}_{i}=15}$ and ${\displaystyle \sum_{i=1}^{100} {b}_{i}=−12}.$ In the following exercises, compute the sums.

:::exercise {fs-id1170572510158} type= 
PROBLEM:
${\displaystyle \sum_{i=1}^{100} ({a}_{i}+{b}_{i})}$
:::

:::exercise {fs-id1170571712597} type= 
PROBLEM:
${\displaystyle \sum_{i=1}^{100} ({a}_{i}-{b}_{i})}$
SOLUTION:
$15-(−12)=27$
:::

:::exercise {fs-id1170572419272} type= 
PROBLEM:
${\displaystyle \sum_{i=1}^{100} (3{a}_{i}-4{b}_{i})}$
:::

:::exercise {fs-id1170571699457} type= 
PROBLEM:
${\displaystyle \sum_{i=1}^{100} (5{a}_{i}+4{b}_{i})}$
SOLUTION:
$5(15)+4(−12)=27$
:::
In the following exercises, use summation properties and formulas to rewrite and evaluate the sums.

:::exercise {fs-id1170572601280} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{20} 100({k}^{2}-5k+1)}$
:::

:::exercise {fs-id1170571638189} type= 
PROBLEM:
${\displaystyle \sum_{j=1}^{50} ({j}^{2}-2j)}$
SOLUTION:
${\displaystyle \sum_{j=1}^{50} {j}^{2}}-2{\displaystyle \sum_{j=1}^{50} j}=\frac{(50)(51)(101)}{6}-\frac{2(50)(51)}{2}=40,375$
:::

:::exercise {fs-id1170572415209} type= 
PROBLEM:
${\displaystyle \sum_{j=11}^{20} ({j}^{2}-10j)}$
:::

:::exercise {fs-id1170571539153} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{25} [{(2k)}^{2}-100k]}$
SOLUTION:
$4{\displaystyle \sum_{k=1}^{25} {k}^{2}}-100{\displaystyle \sum_{k=1}^{25} k}=\frac{4(25)(26)(51)}{6}-50(25)(26)=−10,400$
:::
Let ${L}_{n}$ denote the left-endpoint sum using *n* subintervals and let ${R}_{n}$ denote the corresponding right-endpoint sum. In the following exercises, compute the indicated left and right sums for the given functions on the indicated interval.

:::exercise {fs-id1170571580975} type= 
PROBLEM:
*L*<sub>4</sub> for $f(x)=\frac{1}{x-1}$ on $[2,3]$
:::

:::exercise {fs-id1170572396513} type= 
PROBLEM:
*R*<sub>4</sub> for $g(x)=\text{cos}(\pi x)$ on $[0,1]$
SOLUTION:
${R}_{4}=-0.25$
:::

:::exercise {fs-id1170571562438} type= 
PROBLEM:
*L*<sub>6</sub> for $f(x)=\frac{1}{x(x-1)}$ on $[2,5]$
:::

:::exercise {fs-id1170572218579} type= 
PROBLEM:
*R*<sub>6</sub> for $f(x)=\frac{1}{x(x-1)}$ on $[2,5]$
SOLUTION:
${R}_{6}=0.372$
:::

:::exercise {fs-id1170572218661} type= 
PROBLEM:
*R*<sub>4</sub> for $\frac{1}{{x}^{2}+1}$ on $[−2,2]$
:::

:::exercise {fs-id1170572386157} type= 
PROBLEM:
*L*<sub>4</sub> for $\frac{1}{{x}^{2}+1}$ on $[−2,2]$
SOLUTION:
${L}_{4}=2.20$
:::

:::exercise {fs-id1170572643203} type= 
PROBLEM:
*R*<sub>8</sub> for ${x}^{2}-2x+1$ on $[0,2]$
:::

:::exercise {fs-id1170572643270} type= 
PROBLEM:
*L*<sub>8</sub> for ${x}^{2}-2x+1$ on $[0,2]$
SOLUTION:
${L}_{8}=0.6875$
:::

:::exercise {fs-id1170572373712} type= 
PROBLEM:
Compute the left and right Riemann sums—*L*<sub>4</sub> and *R*<sub>4</sub>, respectively—for $f(x)=(2-|x|)$ on $[−2,2].$ Compute their average value and compare it with the area under the graph of *f*.
:::

:::exercise {fs-id1170571710707} type= 
PROBLEM:
Compute the left and right Riemann sums—*L*<sub>6</sub> and *R*<sub>6</sub>, respectively—for $f(x)=(3-|3-x|)$ on $[0,6].$ Compute their average value and compare it with the area under the graph of *f*.
SOLUTION:
${L}_{6}=9.000={R}_{6}.$ The graph of *f* is a triangle with area 9.
:::

:::exercise {fs-id1170572399069} type= 
PROBLEM:
Compute the left and right Riemann sums—*L*<sub>4</sub> and *R*<sub>4</sub>, respectively—for $f(x)=\sqrt{4-{x}^{2}}$ on $[−2,2]$ and compare their values.
:::

:::exercise {fs-id1170572629157} type= 
PROBLEM:
Compute the left and right Riemann sums—*L*<sub>6</sub> and *R*<sub>6</sub>, respectively—for $f(x)=\sqrt{9-{(x-3)}^{2}}$ on $[0,6]$ and compare their values.
SOLUTION:
${L}_{6}=13.12899={R}_{6}.$ They are equal.
:::
Express the following endpoint sums in sigma notation but do not evaluate them.

:::exercise {fs-id1170571689726} type= 
PROBLEM:
*L*<sub>30</sub> for $f(x)={x}^{2}$ on $[1,2]$
:::

:::exercise {fs-id1170571614611} type= 
PROBLEM:
*L*<sub>10</sub> for $f(x)=\sqrt{4-{x}^{2}}$ on $[−2,2]$
SOLUTION:
${L}_{10}=\frac{4}{10}\sum_{i=1}^{10} \sqrt{4-(−2+4\frac{(i-1)}{10}{)}^{2}}$
:::

:::exercise {fs-id1170572379041} type= 
PROBLEM:
*R*<sub>20</sub> for $f(x)=\text{sin}\;x$ on $[0,\pi ]$
:::

:::exercise {fs-id1170571572000} type= 
PROBLEM:
*R*<sub>100</sub> for $\text{ln}\;x$ on $[1,e]$
SOLUTION:
${R}_{100}=\frac{e-1}{100}{\displaystyle \sum_{i=1}^{100} \text{ln}(1+(e-1)\frac{i}{100})}$
:::
In the following exercises, graph the function then use a calculator or a computer program to evaluate the following left and right endpoint sums. If the two agree, say "neither."

:::exercise {fs-id1170572569928} type= 
PROBLEM:
**[T]** *L*<sub>100</sub> and *R*<sub>100</sub> for $y={x}^{2}-x+3$ on the interval $[−1,1]$
:::

:::exercise {fs-id1170572309991} type= 
PROBLEM:
**[T]** *L*<sub>100</sub> and *R*<sub>100</sub> for $y={x}^{2}$ on the interval $[0,1]$
SOLUTION:

> IMAGE {img:fs-id1170572310048} src=../../media/CNX_Calc_Figure_05_01_207.jpg
> alt: A graph of the given function on the interval [0, 1]. It is set up for a left endpoint approximation and is an underestimate because the function is increasing. Ten rectangles are shown for visual clarity, but this behavior persists for more rectangles.

${R}_{100}=0.33835,{L}_{100}=0.32835.$ The plot shows that the left Riemann sum is an underestimate because the function is increasing. Similarly, the right Riemann sum is an overestimate. The area lies between the left and right Riemann sums. Ten rectangles are shown for visual clarity. This behavior persists for more rectangles.
:::

:::exercise {fs-id1170571613728} type= 
PROBLEM:
**[T]** *L*<sub>50</sub> and *R*<sub>50</sub> for $y=\frac{x+1}{{x}^{2}-1}$ on the interval $[2,4]$
:::

:::exercise {fs-id1170572451375} type= 
PROBLEM:
**[T]** *L*<sub>100</sub> and *R*<sub>100</sub> for $y={x}^{3}+2$ on the interval $[−1,1]$
SOLUTION:

> IMAGE {img:fs-id1170572329918} src=../../media/CNX_Calc_Figure_05_01_209.jpg
> alt: A graph of the given function over [-1,1] set up for a left endpoint approximation. It is an underestimate since the function is increasing. Ten rectangles are shown for visual clarity, but this behavior persists for more rectangles.

${L}_{100}=3.980,{R}_{100}=4.020,{R}_{100}>{L}_{100}.$ The left endpoint sum is an underestimate because the function is increasing. Similarly, a right endpoint approximation is an overestimate. The area lies between the left and right endpoint estimates.
:::

:::exercise {fs-id1170572329967} type= 
PROBLEM:
**[T]** *L*<sub>50</sub> and *R*<sub>50</sub> for $y=\text{tan}(x)$ on the interval $[0,\frac{\pi}{4}]$
:::

:::exercise {fs-id1170572379131} type= 
PROBLEM:
**[T]** *L*<sub>100</sub> and *R*<sub>100</sub> for $y={e}^{2x}$ on the interval $[−1,1]$
SOLUTION:

> IMAGE {img:fs-id1170572589192} src=../../media/CNX_Calc_Figure_05_01_211.jpg
> alt: A graph of the given function over the interval -1 to 1 set up for a left endpoint approximation. It is an underestimate since the function is increasing. Ten rectangles are shown for isual clarity, but this behavior persists for more rectangles.

${L}_{100}=3.555,{R}_{100}=3.670$ The plot shows that the left Riemann sum is an underestimate because the function is increasing. Ten rectangles are shown for visual clarity. This behavior persists for more rectangles.
:::

:::exercise {fs-id1170572589240} type= 
PROBLEM:
Let *t<sub>j</sub>* denote the time that it took Tejay van Garteren to ride the *j*th stage of the Tour de France in 2014. If there were a total of 21 stages, interpret ${\displaystyle \sum_{j=1}^{21} {t}_{j}}.$
:::

:::exercise {fs-id1170571613611} type= 
PROBLEM:
Let ${r}_{j}$ denote the total rainfall in Portland on the *j*th day of the year in 2009. Interpret ${\displaystyle \sum_{j=1}^{31} {r}_{j}}.$
SOLUTION:
The sum represents the cumulative rainfall in January 2009.
:::

:::exercise {fs-id1170571613669} type= 
PROBLEM:
Let ${d}_{j}$ denote the hours of daylight and ${δ}_{j}$ denote the increase in the hours of daylight from day $j-1$ to day *j* in Fargo, North Dakota, on the *j*th day of the year. Interpret ${d}_{1}+{\displaystyle \sum_{j=2}^{365} {δ}_{j}}.$
:::

:::exercise {fs-id1170572434951} type= 
PROBLEM:
To help get in shape, Joe gets a new pair of running shoes. If Joe runs 1 mi each day in week 1 and adds $\frac{1}{10}$ mi to his daily routine each week, what is the total mileage on Joe’s shoes after 25 weeks?
SOLUTION:
The total mileage is $7\;\times \;{\displaystyle \sum_{i=1}^{25} (1+\frac{(i-1)}{10})}=7\;\times \;25+\frac{7}{10}\;\times \;12\;\times \;25=385\;\text{mi}.$
:::

:::exercise {fs-id1170572347038} type= 
PROBLEM:
The following table gives approximate values of the average annual atmospheric rate of increase in carbon dioxide (CO<sub>2</sub>) each decade since 1960, in parts per million (ppm). Estimate the total increase in atmospheric CO<sub>2</sub> between 1964 and 2013.

> TABLE {tab:fs-id1170572347058} cols=2
> title: Average Annual Atmospheric CO<sub>2</sub> Increase, 1964–2013
> caption: *Source*: http://www.esrl.noaa.gov/gmd/ccgg/trends/.
> summary: A table with two columns and six rows. The first column contains the label “Decade” and the values 1964 – 1973, 1974-1983, 1984 – 1993, 1994-2003, and 2004-2013. The second column contains the label “ppm/y” and the values 1.0, 1.34, 1.40, 1.87, and 2.07.

| Decade | Ppm/y |
| --- | --- |
| 1964–1973 | 1.07 |
| 1974–1983 | 1.34 |
| 1984–1993 | 1.40 |
| 1994–2003 | 1.87 |
| 2004–2013 | 2.07 |

:::

:::exercise {fs-id1170572627096} type= 
PROBLEM:
The following table gives the approximate increase in sea level in inches over 20 years starting in the given year. Estimate the net change in mean sea level from 1870 to 2010.

> TABLE {tab:fs-id1170572627108} cols=2
> title: Approximate 20-Year Sea Level Increases, 1870–1990
> caption: *Source*: http://link.springer.com/article/10.1007%2Fs10712-011-9119-1
> summary: A table with two columns and eight rows. The first column contains the label “Starting Year” and the values 1870, 1890, 1910, 1930, 1950, 1970, and 1990. The second column contains the label “20-Year Change” and the values 0.3, 1.5, 0.2, 2.8, 0.7, 1.1, and 1.5.

| Starting Year | 20-Year Change |
| --- | --- |
| 1870 | 0.3 |
| 1890 | 1.5 |
| 1910 | 0.2 |
| 1930 | 2.8 |
| 1950 | 0.7 |
| 1970 | 1.1 |
| 1990 | 1.5 |

SOLUTION:
Add the numbers to get 8.1-in. net increase.
:::

:::exercise {fs-id1170572572342} type= 
PROBLEM:
The following table gives the approximate increase in dollars in the average price of a gallon of gas per decade since 1950. If the average price of a gallon of gas in 2010 was $2.60, what was the average price of a gallon of gas in 1950?

> TABLE {tab:fs-id1170571712782} cols=2
> title: Approximate 10-Year Gas Price Increases, 1950–2000
> caption: *Source*: http://epb.lbl.gov/homepages/Rick_Diamond/docs/lbnl55011-trends.pdf.
> summary: A table with two columns and seven rows. The first column contains the label “Starting Year” and values 1950, 1960, 1970, 1980, 1990, and 2000. The second column contains the label “10-Year Change” and the values 0.03, 0.05, 0.86, -0.03, 0.29, and 1.12.

| Starting Year | 10-Year Change |
| --- | --- |
| 1950 | 0.03 |
| 1960 | 0.05 |
| 1970 | 0.86 |
| 1980 | −0.03 |
| 1990 | 0.29 |
| 2000 | 1.12 |

:::

:::exercise {fs-id1170572129802} type= 
PROBLEM:
The following table gives the percent growth of the U.S. population beginning in July of the year indicated. If the U.S. population was 281,421,906 in July 2000, estimate the U.S. population in July 2010.

> TABLE {tab:fs-id1170572129815} cols=2
> title: Annual Percentage Growth of U.S. Population, 2000–2009
> caption: *Source*: http://www.census.gov/popest/data.
> summary: A table with two columns and eleven rows. The first column contains the label “Year” and the values 2000 through 2009, increasing by one. The second column contains the label “% Change / Year” and the values 1.12, 0.99, 0.93, 0.86, 0.93, 0.93, 0.97, 0.96, 0.95, and 0.88.

| Year | % Change/Year |
| --- | --- |
| 2000 | 1.12 |
| 2001 | 0.99 |
| 2002 | 0.93 |
| 2003 | 0.86 |
| 2004 | 0.93 |
| 2005 | 0.93 |
| 2006 | 0.97 |
| 2007 | 0.96 |
| 2008 | 0.95 |
| 2009 | 0.88 |

(*Hint:* To obtain the population in July 2001, multiply the population in July 2000 by 1.0112 to get 284,573,831.)
SOLUTION:
309,389,957
:::
In the following exercises, estimate the areas under the curves by computing the left Riemann sums, *L*<sub>8</sub>.

:::exercise {fs-id1170572330292} type= 
PROBLEM:

> IMAGE {img:fs-id1170572330296} src=../../media/CNX_Calc_Figure_05_01_201.jpg
> alt: A graph of a function that increases linearly with a slope of 1 from (0,1) to (3,4). It curves from (3,4) to (5,4), changing direction from increasing to decreasing at (4,5). Finally, it decreases linearly with a slope of 1 from (5,4) to (8,1).

:::

:::exercise {fs-id1170572129112} type= 
PROBLEM:

> IMAGE {img:fs-id1170572129116} src=../../media/CNX_Calc_Figure_05_01_202.jpg
> alt: The graph of a smooth curve going through the points (0,3), (1,2), (2,1), (3,2), (4,3), (5,4), (6,5), (7,4), and (8,3).

SOLUTION:
${L}_{8}=3+2+1+2+3+4+5+4=24$
:::

:::exercise {fs-id1170572223502} type= 
PROBLEM:

> IMAGE {img:fs-id1170572223506} src=../../media/CNX_Calc_Figure_05_01_203.jpg
> alt: The graph of a smooth curve going through the points (0,0), (1,1), (2,2), (3,1), (4,3), (5,2), (6,4), (7,5), and (8,7).

:::

:::exercise {fs-id1170572223572} type= 
PROBLEM:

> IMAGE {img:fs-id1170572223576} src=../../media/CNX_Calc_Figure_05_01_204.jpg
> alt: The graph of a smooth curve going through the points (0, 3), (1, 5), (2, 7), (3, 6), (4, 8), (5, 6), (6, 5), (7, 4), and (8, 6).

SOLUTION:
${L}_{8}=3+5+7+6+8+6+5+4=44$
:::

:::exercise {fs-id1170572309764} type= 
PROBLEM:
**[T]** Use a computer algebra system to compute the Riemann sum, ${L}_{N},$ for $N=10,30,50$ for $f(x)=\sqrt{1-{x}^{2}}$ on $[−1,1].$
:::

:::exercise {fs-id1170571547450} type= 
PROBLEM:
**[T]** Use a computer algebra system to compute the Riemann sum, *L<sub>N</sub>*, for $N=10,30,50$ for $f(x)=\frac{1}{\sqrt{1+{x}^{2}}}$ on $[−1,1].$
SOLUTION:
${L}_{10}\approx 1.7604,{L}_{30}\approx 1.7625,{L}_{50}\approx 1.76265$
:::

:::exercise {fs-id1170571629002} type= 
PROBLEM:
**[T]** Use a computer algebra system to compute the Riemann sum, *L<sub>N</sub>*, for $N=10,30,50$ for $f(x)={\text{sin}}^{2}x$ on $[0,2\pi ].$ Compare these estimates with *π*.
:::
In the following exercises, use a calculator or a computer program to evaluate the endpoint sums *R<sub>N</sub>* and *L<sub>N</sub>* for $N=1,10,100.$ How do these estimates compare with the exact answers, which you can find via geometry?

:::exercise {fs-id1170572351539} type= 
PROBLEM:
**[T]** $y=\text{cos}(\pi x)$ on the interval $[0,1]$
SOLUTION:
${R}_{1}=−1,{L}_{1}=1,{R}_{10}=−0.1,{L}_{10}=0.1,{L}_{100}=0.01,$ and ${R}_{100}=−0.01.$ By symmetry of the graph, the exact area is zero.
:::

:::exercise {fs-id1170571638122} type= 
PROBLEM:
**[T]** $y=3x+2$ on the interval $[3,5]$
:::
In the following exercises, use a calculator or a computer program to evaluate the endpoint sums *R<sub>N</sub>* and *L<sub>N</sub>* for $N=1,10,100.$

:::exercise {fs-id1170572448426} type= 
PROBLEM:
**[T]** $y={x}^{4}-5{x}^{2}+4$ on the interval $[−2,2],$ which has an exact area of $\frac{32}{15}$
SOLUTION:
${R}_{1}=0,{L}_{1}=0,{R}_{10}=2.4499,{L}_{10}=2.4499,{R}_{100}=2.1365,{L}_{100}=2.1365$
:::

:::exercise {fs-id1170572368497} type= 
PROBLEM:
**[T]** $y=\text{ln}\;x$ on the interval $[1,2],$ which has an exact area of $2\;\text{ln}(2)-1$
:::

:::exercise {fs-id1170572306443} type= 
PROBLEM:
Explain why, if $f(a)\ge 0$ and *f* is increasing on $[a,b],$ that the left endpoint estimate is a lower bound for the area below the graph of *f* on $[a,b].$
SOLUTION:
If $[c,d]$ is a subinterval of $[a,b]$ under one of the left-endpoint sum rectangles, then the area of the rectangle contributing to the left-endpoint estimate is $f(c)(d-c).$ But, $f(c)\le f(x)$ for $c\le x\le d,$ so the area under the graph of *f* between *c* and *d* is $f(c)(d-c)$ plus the area below the graph of *f* but above the horizontal line segment at height $f(c),$ which is positive. As this is true for each left-endpoint sum interval, it follows that the left Riemann sum is less than or equal to the area below the graph of *f* on $[a,b].$
:::

:::exercise {fs-id1170571813935} type= 
PROBLEM:
Explain why, if $f(b)\ge 0$ and *f* is decreasing on $[a,b],$ that the left endpoint estimate is an upper bound for the area below the graph of *f* on $[a,b].$
:::

:::exercise {fs-id1170572480433} type= 
PROBLEM:
Show that, in general, ${R}_{N}-{L}_{N}=(b-a)\;\times \;\frac{f(b)-f(a)}{N}.$
SOLUTION:
${L}_{N}=\frac{b-a}{N}{\displaystyle \sum_{i=1}^{N} f(a+(b-a)\frac{i-1}{N})}=\frac{b-a}{N}{\displaystyle \sum_{i=0}^{N-1} f(a+(b-a)\frac{i}{N})}$ and ${R}_{N}=\frac{b-a}{N}{\displaystyle \sum_{i=1}^{N} f(a+(b-a)\frac{i}{N})}.$ The left sum has a term corresponding to $i=0$ and the right sum has a term corresponding to $i=N.$ In ${R}_{N}-{L}_{N},$ any term corresponding to $i=1,2\text{,…,}\;N-1$ occurs once with a plus sign and once with a minus sign, so each such term cancels and one is left with ${R}_{N}-{L}_{N}=\frac{b-a}{N}(f(a+(b-a))\frac{N}{N})-(f(a)+(b-a)\frac{0}{N})=\frac{b-a}{N}(f(b)-f(a)).$
:::

:::exercise {fs-id1170571629736} type= 
PROBLEM:
Explain why, if *f* is increasing on $[a,b],$ the error between either *L<sub>N</sub>* or *R<sub>N</sub>* and the area *A* below the graph of *f* is at most $(b-a)\frac{f(b)-f(a)}{N}.$
:::

:::exercise {fs-id1170571624169} type= 
PROBLEM:
For each of the three graphs:
a. Obtain a lower bound $L(A)$ for the area enclosed by the curve by adding the areas of the squares *enclosed completely* by the curve.
b. Obtain an upper bound $U(A)$ for the area by adding to $L(A)$ the areas $B(A)$ of the squares *enclosed partially* by the curve.

> IMAGE {img:fs-id1170571698215} src=../../media/CNX_Calc_Figure_05_01_212.jpg
> alt: Three graphs, stacked vertically, drawn on graph paper. Each shows the same image. However, the axes become progressively more exact in units. The first is marked in units, from negative 3 units to positive 3 units on each axis. The second has the half-units marked, and the third has the quarter units marked. As such, the graph paper boxes become smaller and smaller. The image is symmetrical across each axis and is a curved cross shape. It meets the axes at (0,3), (3,0), (0,-3), and (-3,0) and has corners roughly at (.7,.7), (.7,-.7), (-.7,-7.), and (-.7,.7). In graph 1, no square unit boxes are completely contained inside the shape. Twenty boxes are enclosed partially by the shape. In graph 2, nine boxes are completely contained inside the shape, and eleven boxes are enclosed partially by the shape. In graph 3, 11 boxes are completely contained inside the shape, and 4.5 are enclosed partially by the shape.

SOLUTION:
Graph 1: a. $L(A)=0,B(A)=20;$ b. $U(A)=20.$ Graph 2: a. $L(A)=9;$ b. $B(A)=11,U(A)=20.$ Graph 3: a. $L(A)=11.0;$ b. $B(A)=4.5,U(A)=15.5.$
:::

:::exercise {fs-id1170572617948} type= 
PROBLEM:
In the previous exercise, explain why $L(A)$ gets no smaller while $U(A)$ gets no larger as the squares are subdivided into four boxes of equal area.
:::

:::exercise {fs-id1170572617993} type= 
PROBLEM:
A unit circle is made up of *n* wedges equivalent to the inner wedge in the figure. The base of the inner triangle is 1 unit and its height is $\text{sin}(\frac{2\pi}{n}).$ The base of the outer triangle is $B=\text{cos}(\frac{\pi}{n})+\text{sin}(\frac{\pi}{n})\text{tan}(\frac{\pi}{n})$ and the height is $H=B\;\text{sin}(\frac{2\pi}{n}).$ Use this information to argue that the area of a unit circle is equal to *π*.

> IMAGE {img:fs-id1170572554281} src=../../media/CNX_Calc_Figure_05_01_213.jpg
> alt: A wedge of a circle cut at an acute angle theta = 2pi / n. Several extra lines are drawn. The first is a line A connecting the ends of the two radii, creating a triangle. The second is another line B parallel to the A, connecting the radii a few units in from each endpoint. A concentric curve C connects the endpoints of B and is tangent to A near its midpoint. The area between this curve C and the edge of the circle is shaded in pink, and the rest of the wedge is purple. A final concentric curve is drawn very close to angle theta.

SOLUTION:
Let *A* be the area of the unit circle. The circle encloses *n* congruent triangles each of area $\frac{\text{sin}(\frac{2\pi}{n})}{2},$ so $\frac{n}{2}\text{sin}(\frac{2\pi}{n})\le A.$ Similarly, the circle is contained inside *n* congruent triangles each of area $\frac{BH}{2}=\frac{1}{2}{(cos(\frac{\pi}{n})+sin(\frac{\pi}{n})tan(\frac{\pi}{n}))}^{2}sin(\frac{2\pi}{n}),$ so $A\le \frac{n}{2}\text{sin}(\frac{2\pi}{n})(\text{cos}(\frac{\pi}{n})+\text{sin}(\frac{\pi}{n})\text{tan}{(\frac{\pi}{n}))}^{2}.$ As $n\to \infty ,\frac{n}{2}\text{sin}(\frac{2\pi}{n})=\frac{\;\text{sin}(\frac{2\pi}{n})}{(\frac{2}{n})}Α\to \pi ,$ so we conclude $\pi \le A.$ Also, as $n\to \infty ,\text{cos}(\frac{\pi}{n})+\text{sin}(\frac{\pi}{n})\text{tan}(\frac{\pi}{n})\to 1,$ so we also have $A\le \pi .$ By the squeeze theorem for limits, we conclude that $A=\pi .$
:::

## Glossary
- {def} **left-endpoint approximation**: an approximation of the area under a curve computed by using the left endpoint of each subinterval to calculate the height of the vertical sides of each rectangle
- {def} **lower sum**: a sum obtained by using the minimum value of $f(x)$ on each subinterval
- {def} **partition**: a set of points that divides an interval into subintervals
- {def} **regular partition**: a partition in which the subintervals all have the same width
- {def} **riemann sum**: an estimate of the area under the curve of the form $A\approx {\displaystyle \sum_{i=1}^{n} f}({x}_{i}^{*})\text{Δ}x$
- {def} **right-endpoint approximation**: the right-endpoint approximation is an approximation of the area of the rectangles under a curve using the right endpoint of each subinterval to construct the vertical sides of each rectangle
- {def} **sigma notation**: (also, **summation notation**) the Greek letter sigma (Σ) indicates addition of the values; the values of the index above and below the sigma indicate where to begin the summation and where to end it
- {def} **upper sum**: a sum obtained by using the maximum value of $f(x)$ on each subinterval

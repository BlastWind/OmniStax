# Continuity

## Learning Objectives {section:learning-objectives}
- Explain the three conditions for continuity at a point.
- Describe three kinds of discontinuities.
- Define continuity on an interval.
- State the theorem for limits of composite functions.
- Provide an example of the intermediate value theorem.

Many functions have the property that their graphs can be traced with a pencil without lifting the pencil from the page. Such functions are called *continuous*. Other functions have points at which a break in the graph occurs, but satisfy this property over intervals contained in their domains. They are continuous on these intervals and are said to have a *discontinuity at a point* where a break occurs.
We begin our investigation of continuity by exploring what it means for a function to have *continuity at a point*. Intuitively, a function is continuous at a particular point if there is no break in its graph at that point.

## Continuity at a Point
Before we look at a formal definition of what it means for a function to be continuous at a point, let’s consider various functions that fail to meet our intuitive notion of what it means to be continuous at a point. We then create a list of conditions that prevent such failures.
Our first function of interest is shown in [ref:CNX_Calc_Figure_02_04_001]. We see that the graph of $f(x)$ has a hole at *a*. In fact, $f(a)$ is undefined. At the very least, for $f(x)$ to be continuous at *a*, we need the following condition:

$\text{i.}\;f(a)\;\text{is defined.}$  {eq:fs-id1170570997076}

> FIGURE {fig:CNX_Calc_Figure_02_04_001} src=../../media/CNX_Calc_Figure_02_04_001.jpg
> alt: A graph of an increasing linear function f(x) which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. The point on the function f(x) above a is an open circle; the function is not defined at a.
> caption: The function $f(x)$ is not continuous at *a* because $f(a)$ is undefined.

However, as we see in [ref:CNX_Calc_Figure_02_04_002], this condition alone is insufficient to guarantee continuity at the point *a*. Although $f(a)$ is defined, the function has a gap at *a*. In this example, the gap exists because $\lim_{x\to a}f(x)$ does not exist. We must add another condition for continuity at *a*—namely,

$\text{ii.}\;\lim_{x\to a}f(x)\;\text{exists.}$  {eq:fs-id1170570997548}

> FIGURE {fig:CNX_Calc_Figure_02_04_002} src=../../media/CNX_Calc_Figure_02_04_002.jpg
> alt: The graph of a piecewise function f(x) with two parts. The first part is an increasing linear function that crosses from quadrant three to quadrant one at the origin. A point a greater than zero is marked on the x axis. At fa. on this segment, there is a solid circle. The other segment is also an increasing linear function. It exists in quadrant one for values of x greater than a. At x=a, this segment has an open circle.
> caption: The function $f(x)$ is not continuous at *a* because $\lim_{x\to a}f(x)$ does not exist.

However, as we see in [ref:CNX_Calc_Figure_02_04_003], these two conditions by themselves do not guarantee continuity at a point. The function in this figure satisfies both of our first two conditions, but is still not continuous at *a*. We must add a third condition to our list:

$\text{iii.}\;\lim_{x\to a}f(x)=f(a).$  {eq:fs-id1170573419105}

> FIGURE {fig:CNX_Calc_Figure_02_04_003} src=../../media/CNX_Calc_Figure_02_04_003.jpg
> alt: The graph of a piecewise function with two parts. The first part is an increasing linear function that crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. A point a greater than zero is marked on the x axis. At this point, there is an open circle on the linear function. The second part is a point at x=a above the line.
> caption: The function $f(x)$ is not continuous at *a* because $\lim_{x\to a}f(x)≠f(a).$

Now we put our list of conditions together and form a definition of continuity at a point.

:::note [definition] Definition
A function $f(x)$ is {term:continuous at a point} *a* if and only if the following three conditions are satisfied:
1. $f(a)$ is defined
2. $\lim_{x\to a}f(x)$ exists
3. $\lim_{x\to a}f(x)=f(a)$
A function is {term:discontinuous at a point} *a* if it fails to be continuous at *a*.
:::
The following procedure can be used to analyze the continuity of a function at a point using this definition.

:::note [problem-solving] Determining Continuity at a Point
1. Check to see if $f(a)$ is defined. If $f(a)$ is undefined, we need go no further. The function is not continuous at *a*. If $f(a)$ is defined, continue to step 2.
2. Compute $\lim_{x\to a}f(x).$ In some cases, we may need to do this by first computing $\lim_{x\to {a}^{-}}f(x)$ and $\lim_{x\to {a}^{+}}f(x).$ If $\lim_{x\to a}f(x)$ does not exist (that is, it is not a real number), then the function is not continuous at *a* and the problem is solved. If $\lim_{x\to a}f(x)$ exists, then continue to step 3.
3. Compare $f(a)$ and $\lim_{x\to a}f(x).$ If $\lim_{x\to a}f(x)≠f(a),$ then the function is not continuous at *a*. If $\lim_{x\to a}f(x)=f(a),$ then the function is continuous at *a*.
:::
The next three examples demonstrate how to apply this definition to determine whether a function is continuous at a given point. These examples illustrate situations in which each of the conditions for continuity in the definition succeed or fail.

:::example {ex:fs-id1170573442080} Determining Continuity at a Point, Condition 1

:::exercise {fs-id1170573368010} type= 
PROBLEM:
Using the definition, determine whether the function $f(x)=({x}^{2}-4)\text{/}(x-2)$ is continuous at $x=2.$ Justify the conclusion.
SOLUTION:
Let’s begin by trying to calculate $f(2).$ We can see that $f(2)=0\text{/}0,$ which is undefined. Therefore, $f(x)=\frac{{x}^{2}-4}{x-2}$ is discontinuous at 2 because $f(2)$ is undefined. The graph of $f(x)$ is shown in [ref:CNX_Calc_Figure_02_04_004].

> FIGURE {fig:CNX_Calc_Figure_02_04_004} src=../../media/CNX_Calc_Figure_02_04_004.jpg
> alt: A graph of the given function. There is a line which crosses the x axis from quadrant three to quadrant two and which crosses the y axis from quadrant two to quadrant one. At a point in quadrant one, there is an open circle where the function is not defined.
> caption: The function $f(x)$ is discontinuous at 2 because $f(2)$ is undefined.

:::
:::

:::example {ex:fs-id1170573389760} Determining Continuity at a Point, Condition 2

:::exercise {fs-id1170571098221} type= 
PROBLEM:
Using the definition, determine whether the function $f(x)=\{\begin{array}{ll}-{x}^{2}+4 & \text{if}\;x\le 3 \\ 4x-8 & \text{if}\;x>3\end{array}$ is continuous at $x=3.$ Justify the conclusion.
SOLUTION:
Let’s begin by trying to calculate $f(3).$

$f(3)=-({3}^{2})+4=−5.$  {eq:fs-id1170573405058}

Thus, $f(3)$ is defined. Next, we calculate $\lim_{x\to 3}f(x).$ To do this, we must compute $\lim_{x\to {3}^{-}}f(x)$ and $\lim_{x\to {3}^{+}}f(x)\text{:}$

$\lim_{x\to {3}^{-}}f(x)=-({3}^{2})+4=−5$  {eq:fs-id1170573411980}

and

$\lim_{x\to {3}^{+}}f(x)=4(3)-8=4.$  {eq:fs-id1170573422541}

Therefore, $\lim_{x\to 3}f(x)$ does not exist. Thus, $f(x)$ is not continuous at 3. The graph of $f(x)$ is shown in [ref:CNX_Calc_Figure_02_04_005].

> FIGURE {fig:CNX_Calc_Figure_02_04_005} src=../../media/CNX_Calc_Figure_02_04_005.jpg
> alt: A graph of the given piecewise function, which has two parts. The first is a downward opening parabola which is symmetric about the y axis. Its vertex is on the y axis, greater than zero. There is a closed circle on the parabola for x=3. The second part is an increasing linear function in the first quadrant, which exists for values of x > 3. There is an open circle at the end of the line where x would be 3.
> caption: The function $f(x)$ is not continuous at 3 because $\lim_{x\to 3}f(x)$ does not exist.

:::
:::

:::example {ex:fs-id1170573429945} Determining Continuity at a Point, Condition 3

:::exercise {fs-id1170571048204} type= 
PROBLEM:
Using the definition, determine whether the function $f(x)=\{\begin{array}{ll}\frac{\text{sin}\;x}{x} & \text{if}\;x≠0 \\ 1 & \text{if}\;x=0\end{array}$ is continuous at $x=0.$
SOLUTION:
First, observe that

$f(0)=1.$  {eq:fs-id1170573569453}

Next,

$\lim_{x\to 0}f(x)=\lim_{x\to 0}\frac{\text{sin}\;x}{x}=1.$  {eq:fs-id1170573442773}

Last, compare $f(0)$ and $\lim_{x\to 0}f(x).$ We see that

$f(0)=1=\underset{x\to 0}{{\displaystyle \text{lim}}}f(x).$  {eq:fs-id1170573332534}

Since all three of the conditions in the definition of continuity are satisfied, $f(x)$ is continuous at $x=0.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573288457} type= 
PROBLEM:
Using the definition, determine whether the function $f(x)=\{\begin{array}{ll}2x+1 & \text{if}\;x<1 \\ 2 & \text{if}\;x=1 \\ -x+4 & \text{if}\;x>1\end{array}$ is continuous at $x=1.$ If the function is not continuous at 1, indicate the condition for continuity at a point that fails to hold.
SOLUTION:
*f* is not continuous at 1 because $f(1)=2≠3=\lim_{x\to 1}f(x).$
COMMENTARY: Hint
Check each condition of the definition.
:::
:::
By applying the definition of continuity and previously established theorems concerning the evaluation of limits, we can state the following theorem.

:::note [theorem] Continuity of Polynomials and Rational Functions
Polynomials and rational functions are continuous at every point in their domains.
:::

### Proof
Previously, we showed that if $p(x)$ and $q(x)$ are polynomials, $\lim_{x\to a}p(x)=p(a)$ for every polynomial $p(x)$ and $\lim_{x\to a}\frac{p(x)}{q(x)}=\frac{p(a)}{q(a)}$ as long as $q(a)≠0.$ Therefore, polynomials and rational functions are continuous on their domains.
□
We now apply [ref:fs-id1170573430304] to determine the points at which a given rational function is continuous.

:::example {ex:fs-id1170573381194} Continuity of a Rational Function

:::exercise {fs-id1170573326117} type= 
PROBLEM:
For what values of *x* is $f(x)=\frac{x+1}{x-5}$ continuous?
SOLUTION:
The rational function $f(x)=\frac{x+1}{x-5}$ is continuous for every value of *x* except $x=5.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573427664} type= 
PROBLEM:
For what values of *x* is $f(x)=3{x}^{4}-4{x}^{2}$ continuous?
SOLUTION:
$f(x)$ is continuous at every real number.
COMMENTARY: Hint
Use [ref:fs-id1170573430304]
:::
:::

## Types of Discontinuities
As we have seen in [ref:fs-id1170573442080] and [ref:fs-id1170573389760], discontinuities take on several different appearances. We classify the types of discontinuities we have seen thus far as removable discontinuities, infinite discontinuities, or jump discontinuities. Intuitively, a {term:removable discontinuity} is a discontinuity for which there is a hole in the graph, a {term:jump discontinuity} is a noninfinite discontinuity for which the sections of the function do not meet up, and an {term:infinite discontinuity} is a discontinuity located at a vertical asymptote. [ref:CNX_Calc_Figure_02_04_006] illustrates the differences in these types of discontinuities. Although these terms provide a handy way of describing three common types of discontinuities, keep in mind that not all discontinuities fit neatly into these categories.

> FIGURE {fig:CNX_Calc_Figure_02_04_006} src=../../media/CNX_Calc_Figure_02_04_006.jpg
> alt: Three graphs, each showing a different discontinuity. The first is removable discontinuity. Here, the given function is a line with positive slope. At a point x=a, where a>0, there is an open circle on the line and a closed circle a few units above the line. The second is a jump discontinuity. Here, there are two lines with positive slope. The first line exists for x<=a, and the second exists for x>a, where a>0. The first line ends at a solid circle where x=a, and the second begins a few units up with an open circle at x=a. The third discontinuity type is infinite discontinuity. Here, the function has two parts separated by an asymptote x=a. The first segment is a curve stretching along the x axis to 0 as x goes to negative infinity and along the y axis to infinity as x goes to zero. The second segment is a curve stretching along the y axis to negative infinity as x goes to zero and along the x axis to 0 as x goes to infinity.
> caption: Discontinuities are classified as (a) removable, (b) jump, or (c) infinite.

These three discontinuities are formally defined as follows:

:::note [definition] Definition
If $f(x)$ is discontinuous at *a*, then
1. $f$ has a **removable discontinuity** at *a* if $\lim_{x\to a}f(x)$ exists. (Note: When we state that $\lim_{x\to a}f(x)$ exists, we mean that $\lim_{x\to a}f(x)=L,$ where *L* is a real number.)
2. $f$ has a **jump discontinuity** at *a* if $\lim_{x\to {a}^{-}}f(x)$ and $\lim_{x\to {a}^{+}}f(x)$ both exist, but $\lim_{x\to {a}^{-}}f(x)≠\lim_{x\to {a}^{+}}f(x).$ (Note: When we state that $\lim_{x\to {a}^{-}}f(x)$ and $\lim_{x\to {a}^{+}}f(x)$ both exist, we mean that both are real-valued and that neither take on the values ±∞.)
3. $f$ has an **infinite discontinuity** at *a* if $\lim_{x\to {a}^{-}}f(x)=\text{±}\infty$ and/or $\lim_{x\to {a}^{+}}f(x)=\text{±}\infty .$
:::

:::example {ex:fs-id1170570976348} Classifying a Discontinuity

:::exercise {fs-id1170573248707} type= 
PROBLEM:
In [ref:fs-id1170573442080], we showed that $f(x)=\frac{{x}^{2}-4}{x-2}$ is discontinuous at $x=2.$ Classify this discontinuity as removable, jump, or infinite.
SOLUTION:
To classify the discontinuity at 2 we must evaluate $\lim_{x\to 2}f(x)\text{:}$

$\begin{array}{rl}\lim_{x\to 2}f(x) & =\lim_{x\to 2}\frac{{x}^{2}-4}{x-2} \\ & =\lim_{x\to 2}\frac{(x-2)(x+2)}{x-2} \\ & =\lim_{x\to 2}(x+2) \\ & =4.\end{array}$  {eq:fs-id1170571103554}

Since *f* is discontinuous at 2 and $\lim_{x\to 2}f(x)$ exists, *f* has a removable discontinuity at $x=2.$
:::
:::

:::example {ex:fs-id1170573426544} Classifying a Discontinuity

:::exercise {fs-id1170573507547} type= 
PROBLEM:
In [ref:fs-id1170573389760], we showed that $f(x)=\{\begin{array}{ll}-{x}^{2}+4 & \text{if}\;x\le 3 \\ 4x-8 & \text{if}\;x>3\end{array}$ is discontinuous at $x=3.$ Classify this discontinuity as removable, jump, or infinite.
SOLUTION:
Earlier, we showed that *f* is discontinuous at 3 because $\lim_{x\to 3}f(x)$ does not exist. However, since $\lim_{x\to {3}^{-}}f(x)=−5$ and $\lim_{x\to {3}^{+}}f(x)=4$ both exist, we conclude that the function has a jump discontinuity at 3.
:::
:::

:::example {ex:fs-id1170573355402} Classifying a Discontinuity

:::exercise {fs-id1170573750481} type= 
PROBLEM:
Determine whether $f(x)=\frac{x+2}{x+1}$ is continuous at −1. If the function is discontinuous at −1, classify the discontinuity as removable, jump, or infinite.
SOLUTION:
The function value $f(−1)$ is undefined. Therefore, the function is not continuous at −1. To determine the type of discontinuity, we must determine the limit at −1. We see that $\lim_{x\to {−1}^{-}}\frac{x+2}{x+1}=\text{−}\infty$ and $\lim_{x\to {−1}^{+}}\frac{x+2}{x+1}=\text{+}\infty .$ Therefore, the function has an infinite discontinuity at −1.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170570998828} type= 
PROBLEM:
For $f(x)=\{\begin{array}{ll}{x}^{2} & \text{if}\;x≠1 \\ 3 & \text{if}\;x=1\end{array},$ decide whether *f* is continuous at 1. If *f* is not continuous at 1, classify the discontinuity as removable, jump, or infinite.
SOLUTION:
Discontinuous at 1; removable
COMMENTARY: Hint
Follow the steps in [ref:fs-id1170573398041]. If the function is discontinuous at 1, look at $\lim_{x\to 1}f(x)$ and use the definition to determine the type of discontinuity.
:::
:::

## Continuity over an Interval
Now that we have explored the concept of continuity at a point, we extend that idea to {term:continuity over an interval}. As we develop this idea for different types of intervals, it may be useful to keep in mind the intuitive idea that a function is continuous over an interval if we can use a pencil to trace the function between any two points in the interval without lifting the pencil from the paper. In preparation for defining continuity on an interval, we begin by looking at the definition of what it means for a function to be continuous from the right at a point and continuous from the left at a point.

:::note [] Continuity from the Right and from the Left
A function $f(x)$ is said to be {term:continuous from the right} at *a* if $\lim_{x\to {a}^{+}}f(x)=f(a).$
A function $f(x)$ is said to be {term:continuous from the left} at *a* if $\lim_{x\to {a}^{-}}f(x)=f(a).$
:::
A function is continuous over an open interval if it is continuous at every point in the interval. A function $f(x)$ is continuous over a closed interval of the form $[a,b]$ if it is continuous at every point in $(a,b)$ and is continuous from the right at *a* and is continuous from the left at *b*. Analogously, a function $f(x)$ is continuous over an interval of the form $(a,b]$ if it is continuous over $(a,b)$ and is continuous from the left at *b*. Continuity over other types of intervals are defined in a similar fashion.
Requiring that $\lim_{x\to {a}^{+}}f(x)=f(a)$ and $\lim_{x\to {b}^{-}}f(x)=f(b)$ ensures that we can trace the graph of the function from the point $(a,f(a))$ to the point $(b,f(b))$ without lifting the pencil. If, for example, $\lim_{x\to {a}^{+}}f(x)≠f(a),$ we would need to lift our pencil to jump from $f(a)$ to the graph of the rest of the function over $(a,b].$

:::example {ex:fs-id1170573395559} Continuity on an Interval

:::exercise {fs-id1170573395562} type= 
PROBLEM:
State the interval(s) over which the function $f(x)=\frac{x-1}{{x}^{2}+2x}$ is continuous.
SOLUTION:
Since $f(x)=\frac{x-1}{{x}^{2}+2x}$ is a rational function, it is continuous at every point in its domain. The domain of $f(x)$ is the set $(\text{−}\infty ,−2)\cup (−2,0)\cup (0,\text{+}\infty ).$ Thus, $f(x)$ is continuous over each of the intervals $(\text{−}\infty ,−2),(−2,0),$ and $(0,\text{+}\infty ).$
:::
:::

:::example {ex:fs-id1170573387892} Continuity over an Interval

:::exercise {fs-id1170573387894} type= 
PROBLEM:
State the interval(s) over which the function $f(x)=\sqrt{4-{x}^{2}}$ is continuous.
SOLUTION:
From the limit laws, we know that $\lim_{x\to a}\sqrt[]{4-{x}^{2}}=\sqrt{4-{a}^{2}}$ for all values of *a* in $(−2,2).$ We also know that $\lim_{x\to {−2}^{+}}\sqrt{4-{x}^{2}}=0$ exists and $\lim_{x\to {2}^{-}}\sqrt{4-{x}^{2}}=0$ exists. Therefore, $f(x)$ is continuous over the interval $[−2,2].$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573361460} type= 
PROBLEM:
State the interval(s) over which the function $f(x)=\sqrt{x+3}$ is continuous.
SOLUTION:
$[−3,\text{+}\infty )$
COMMENTARY: Hint
Use [ref:fs-id1170573387892] as a guide for solving.
:::
:::
The [ref:fs-id1170573352212] allows us to expand our ability to compute limits. In particular, this theorem ultimately allows us to demonstrate that trigonometric functions are continuous over their domains.

:::note [theorem] Composite Function Theorem
If $f(x)$ is continuous at *L* and $\lim_{x\to a}\;g(x)=L,$ then

$\lim_{x\to a}\;f(g(x))=f(\lim_{x\to a}\;g(x))=f(L).$  {eq:fs-id1170573400410}

:::
Before we move on to [ref:fs-id1170573718134], recall that earlier, in the section on limit laws, we showed $\lim_{x\to 0}\;\text{cos}\;x=1=\text{cos}\;(0).$ Consequently, we know that $f(x)=\text{cos}\;x$ is continuous at 0. In [ref:fs-id1170573718134] we see how to combine this result with the composite function theorem.

:::example {ex:fs-id1170573718134} Limit of a Composite Cosine Function

:::exercise {fs-id1170570998131} type= 
PROBLEM:
Evaluate $\lim_{x\to \pi \text{/}2}\text{cos}\;(x-\frac{\pi}{2}).$
SOLUTION:
The given function is a composite of $\text{cos}\;x$ and $x-\frac{\pi}{2}.$ Since $\lim_{x\to \pi \text{/}2}(x-\frac{\pi}{2})=0$ and $\text{cos}\;x$ is continuous at 0, we may apply the composite function theorem. Thus,

$\lim_{x\to \pi \text{/}2}\text{cos}\;(x-\frac{\pi}{2})=\text{cos}\;(\lim_{x\to \pi \text{/}2}(x-\frac{\pi}{2}))=\text{cos}\;(0)=1.$  {eq:fs-id1170573570975}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573732420} type= 
PROBLEM:
Evaluate $\lim_{x\to \pi}\text{sin}\;(x-\pi ).$
SOLUTION:
0
COMMENTARY: Hint
$f(x)=\text{sin}\;x$ is continuous at 0. Use [ref:fs-id1170573718134] as a guide.
:::
:::
The proof of the next theorem uses the composite function theorem as well as the continuity of $f(x)=\text{sin}\;x$ and $g(x)=\text{cos}\;x$ at the point 0 to show that trigonometric functions are continuous over their entire domains.

:::note [theorem] Continuity of Trigonometric Functions
Trigonometric functions are continuous over their entire domains.
:::

## Proof
We begin by demonstrating that $\text{cos}\;x$ is continuous at every real number. To do this, we must show that $\lim_{x\to a}\text{cos}\;x=\text{cos}\;a$ for all values of *a*.
$\begin{array}{lllll}\lim_{x\to a}\text{cos}\;x & =\lim_{x\to a}\text{cos}\;((x-a)+a) & & & \text{rewrite}\;x=x-a+a \\ & =\lim_{x\to a}(\text{cos}\;(x-a)\;\text{cos}\;a-\text{sin}\;(x-a)\;\text{sin}\;a) & & & \text{apply the identity for the cosine of the sum of two angles} \\ & =\text{cos}\;(\lim_{x\to a}(x-a))\;\text{cos}\;a-\text{sin}\;(\lim_{x\to a}(x-a))\;\text{sin}\;a & & & \lim_{x\to a}(x-a)=0,\;\text{and}\;\text{sin}\;x\;\text{and}\;\text{cos}\;x\;\text{are continuous at 0} \\ & =\text{cos}\;(0)\;\text{cos}\;a-\text{sin}\;(0)\;\text{sin}\;a & & & \text{evaluate cos(0) and sin(0) and simplify} \\ & =1\cdot \text{cos}\;a-0\cdot \text{sin}\;a=\text{cos}\;a.\end{array}$
The proof that $\text{sin}\;x$ is continuous at every real number is analogous. Because the remaining trigonometric functions may be expressed in terms of $\text{sin}\;x$ and $\text{cos}\;x,$ their continuity follows from the quotient limit law.
□
As you can see, the composite function theorem is invaluable in demonstrating the continuity of trigonometric functions. As we continue our study of calculus, we revisit this theorem many times.

## The Intermediate Value Theorem
Functions that are continuous over intervals of the form $[a,b],$ where *a* and *b* are real numbers, exhibit many useful properties. Throughout our study of calculus, we will encounter many powerful theorems concerning such functions. The first of these theorems is the {term:Intermediate Value Theorem}.

:::note [theorem] The Intermediate Value Theorem
Let *f* be continuous over a closed, bounded interval $[a,b].$ If *z* is any real number between $f(a)$ and $f(b),$ then there is a number *c* in $[a,b]$ satisfying $f(c)=z$ in [ref:CNX_Calc_Figure_02_04_007].

> FIGURE {fig:CNX_Calc_Figure_02_04_007} src=../../media/CNX_Calc_Figure_02_04_007.jpg
> alt: A diagram illustrating the intermediate value theorem. There is a generic continuous curved function shown over the interval [a,b]. The points fa. and fb. are marked, and dotted lines are drawn from a, b, fa., and fb. to the points (a, fa.) and (b, fb.).  A third point, c, is plotted between a and b. Since the function is continuous, there is a value for fc. along the curve, and a line is drawn from c to (c, fc.) and from (c, fc.) to fc., which is labeled as z on the y axis.
> caption: There is a number $c\in [a,b]$ that satisfies $f(c)=z.$

:::

:::example {ex:fs-id1170571120881} Application of the Intermediate Value Theorem

:::exercise {fs-id1170571120883} type= 
PROBLEM:
Show that $f(x)=x-\text{cos}\;x$ has at least one zero.
SOLUTION:
Since $f(x)=x-\text{cos}\;x$ is continuous over $(\text{−}\infty ,\text{+}\infty ),$ it is continuous over any closed interval of the form $[a,b].$ If you can find an interval $[a,b]$ such that $f(a)$ and $f(b)$ have opposite signs, you can use the Intermediate Value Theorem to conclude there must be a real number *c* in $(a,b)$ that satisfies $f(c)=0.$ Note that

$f(0)=0-\text{cos}\;(0)=−1<0$  {eq:fs-id1170571239008}

and

$f(\frac{\pi}{2})=\frac{\pi}{2}-\text{cos}\frac{\pi}{2}=\frac{\pi}{2}>0.$  {eq:fs-id1170573424331}

Using the Intermediate Value Theorem, we can see that there must be a real number *c* in $[0,\pi \text{/}2]$ that satisfies $f(c)=0.$ Therefore, $f(x)=x-\text{cos}\;x$ has at least one zero.
:::
:::

:::example {ex:fs-id1170573439386} When Can You Apply the Intermediate Value Theorem?

:::exercise {fs-id1170573439388} type= 
PROBLEM:
If $f(x)$ is continuous over $[0,2],f(0)>0$ and $f(2)>0,$ can we use the Intermediate Value Theorem to conclude that $f(x)$ has no zeros in the interval $[0,2\text{]?}$ Explain.
SOLUTION:
No. The Intermediate Value Theorem only allows us to conclude that we can find a value between $f(0)$ and $f(2);$ it doesn’t allow us to conclude that we can’t find other values. To see this more clearly, consider the function $f(x)={(x-1)}^{2}.$ It satisfies $f(0)=1>0,f(2)=1>0,$ and $f(1)=0.$
:::
:::

:::example {ex:fs-id1170570996536} When Can You Apply the Intermediate Value Theorem?

:::exercise {fs-id1170573586870} type= 
PROBLEM:
For $f(x)=1\text{/}x,f(−1)=−1<0$ and $f(1)=1>0.$ Can we conclude that $f(x)$ has a zero in the interval $[−1,1]?$
SOLUTION:
No. The function is not continuous over $[−1,1].$ The Intermediate Value Theorem does not apply here.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571100303} type= 
PROBLEM:
Show that $f(x)={x}^{3}-{x}^{2}-3x+1$ has a zero over the interval $[0,1].$
SOLUTION:
$f(0)=1>0,f(1)=−2<0;f(x)$ is continuous over $[0,1].$ It must have a zero on this interval.
COMMENTARY: Hint
Find $f(0)$ and $f(1).$ Apply the Intermediate Value Theorem.
:::
:::

## Key Concepts {section:key-concepts}
- For a function to be continuous at a point, it must be defined at that point, its limit must exist at the point, and the value of the function at that point must equal the value of the limit at that point.
- Discontinuities may be classified as removable, jump, or infinite.
- A function is continuous over an open interval if it is continuous at every point in the interval. It is continuous over a closed interval if it is continuous at every point in its interior and is continuous at its endpoints.
- The composite function theorem states: If $f(x)$ is continuous at *L* and $\lim_{x\to a}g(x)=L,$ then $\lim_{x\to a}f(g(x))=f(\lim_{x\to a}g(x))=f(L).$
- The Intermediate Value Theorem guarantees that if a function is continuous over a closed interval, then the function takes on every value between the values at its endpoints.

##  {section:section-exercises}
For the following exercises, determine the point(s), if any, at which each function is discontinuous. Classify any discontinuity as jump, removable, infinite, or other.

:::exercise {fs-id1170571246283} type= 
PROBLEM:
$f(x)=\frac{1}{\sqrt{x}}$
SOLUTION:
The function is defined for all *x* in the interval $(0,\infty ).$
:::

:::exercise {fs-id1170571103211} type= 
PROBLEM:
$f(x)=\frac{2}{{x}^{2}+1}$
:::

:::exercise {fs-id1170573367933} type= 
PROBLEM:
$f(x)=\frac{x}{{x}^{2}-x}$
SOLUTION:
Removable discontinuity at $x=0;$ infinite discontinuity at $x=1$
:::

:::exercise {fs-id1170573734927} type= 
PROBLEM:
$g(t)={t}^{−1}+1$
:::

:::exercise {fs-id1170573581616} type= 
PROBLEM:
$f(x)=\frac{5}{{e}^{x}-2}$
SOLUTION:
Infinite discontinuity at $x=\text{ln}\;2$
:::

:::exercise {fs-id1170573403108} type= 
PROBLEM:
$f(x)=\frac{|x-2|}{x-2}$
:::

:::exercise {fs-id1170573361738} type= 
PROBLEM:
$H(x)=\text{tan}\;2x$
SOLUTION:
Infinite discontinuities at $x=\frac{(2k+1)\pi}{4},$ for $k=0,\pm 1,\pm 2,\pm 3\text{,…}$
:::

:::exercise {fs-id1170573581931} type= 
PROBLEM:
$f(t)=\frac{t+3}{{t}^{2}+5t+6}$
:::
For the following exercises, decide if the function continuous at the given point. If it is discontinuous, what type of discontinuity is it?

:::exercise {fs-id1170573750411} type= 
PROBLEM:
$f(x)=\frac{2{x}^{2}-5x+3}{x-1}$ at $x=1$
SOLUTION:
No. It is a removable discontinuity.
:::

:::exercise {fs-id1170570999796} type= 
PROBLEM:
$h(\theta )=\frac{\text{sin}\;\theta -\text{cos}\;\theta}{\text{tan}\;\theta}$ at $\theta =\pi$
:::

:::exercise {fs-id1170573580625} type= 
PROBLEM:
$g(u)=\{\begin{array}{ll}\frac{6{u}^{2}+u-2}{2u-1} & \text{if}\;u≠\frac{1}{2} \\ \frac{7}{2} & \text{if}\;u=\frac{1}{2}\end{array},$ at $u=\frac{1}{2}$
SOLUTION:
Yes. It is continuous.
:::

:::exercise {fs-id1170571120275} type= 
PROBLEM:
$f(y)=\frac{\text{sin}\;(\pi y)}{\text{tan}\;(\pi y)},$ at $y=1$
:::

:::exercise {fs-id1170571120812} type= 
PROBLEM:
$f(x)=\{\begin{array}{ll}{x}^{2}-{e}^{x} & \text{if}\;x<0 \\ x-1 & \text{if}\;x\ge 0\end{array},$ at $x=0$
SOLUTION:
Yes. It is continuous.
:::

:::exercise {fs-id1170573381217} type= 
PROBLEM:
$f(x)=\{\begin{array}{l}x\;\text{sin}\;(x)\;\text{if}\;x\le \pi \\ x\;\text{tan}\;(x)\;\text{if}\;x>\pi \end{array},$ at $x=\pi$
:::
In the following exercises, find the value(s) of *k* that makes each function continuous over the given interval.

:::exercise {fs-id1170573413991} type= 
PROBLEM:
$f(x)=\{\begin{array}{ll}3x+2, & x<k \\ 2x-3, & k\le x\le 8\end{array}$
SOLUTION:
$k=−5$
:::

:::exercise {fs-id1170571068186} type= 
PROBLEM:
$f(\theta )=\{\begin{array}{rl}\text{sin}\;\theta , & 0\le \theta <\frac{\pi}{2} \\ \text{cos}\;(\theta +k), & \frac{\pi}{2}\le \theta \le \pi \end{array}$
:::

:::exercise {fs-id1170573575226} type= 
PROBLEM:
$f(x)=\{\begin{array}{ll}\frac{{x}^{2}+3x+2}{x+2}, & x≠-2 \\ k, & x=−2\end{array}$
SOLUTION:
$k=−1$
:::

:::exercise {fs-id1170573589731} type= 
PROBLEM:
$f(x)=\{\begin{array}{rl}{e}^{kx}, & 0\le x<4 \\ x+3, & 4\le x\le 8\end{array}$
:::

:::exercise {fs-id1170573449551} type= 
PROBLEM:
$f(x)=\{\begin{array}{rl}\sqrt{kx}, & 0\le x\le 3 \\ x+1, & 3<x\le 10\end{array}$
SOLUTION:
$k=\frac{16}{3}$
:::
In the following exercises, use the Intermediate Value Theorem (IVT).

:::exercise {fs-id1170571121705} type= 
PROBLEM:
Let $h(x)=\{\begin{array}{ll}3{x}^{2}-4, & x\le 2 \\ 5+4x, & x>2\end{array}$ Over the interval $[0,4],$ there is no value of *x* such that $h(x)=10,$ although $h(0)<10$ and $h(4)>10.$ Explain why this does not contradict the IVT.
:::

:::exercise {fs-id1170571087121} type= 
PROBLEM:
A particle moving along a line has at each time *t* a position function $s(t),$ which is continuous. Assume $s(2)=5$ and $s(5)=2.$ Another particle moves such that its position is given by $h(t)=s(t)-t.$ Explain why there must be a value *c* for $2<c<5$ such that $h(c)=0.$
SOLUTION:
Since both *s* and $y=t$ are continuous everywhere, then $h(t)=s(t)-t$ is continuous everywhere and, in particular, it is continuous over the closed interval $[2,5].$ Also, $h(2)=3>0$ and $h(5)=−3<0.$ Therefore, by the IVT, there is a value $x=c$ such that $h(c)=0.$
:::

:::exercise {fs-id1170573590374} type= 
PROBLEM:
**[T]** Use the statement “The cosine of *t* is equal to *t* cubed.”
a. Write a mathematical equation of the statement.
b. Prove that the equation in part a. has at least one real solution.
c. Use a calculator to find an interval of length 0.01 that contains a solution.
:::

:::exercise {fs-id1170570982565} type= 
PROBLEM:
Apply the IVT to determine whether ${2}^{x}={x}^{3}$ has a solution in one of the intervals $[1.25,1.375]$ or $[1.375,1.5].$ Briefly explain your response for each interval.
SOLUTION:
The function $f(x)={2}^{x}-{x}^{3}$ is continuous over the interval $[1.25,1.375]$ and has opposite signs at the endpoints.
:::

:::exercise {fs-id1170573423919} type= 
PROBLEM:
Consider the graph of the function $y=f(x)$ shown in the following graph.

> IMAGE {img:fs-id1170573581162} src=../../media/CNX_Calc_Figure_02_04_201.jpg
> alt: A diagram illustrating the intermediate value theorem. There is a generic continuous curved function shown over the interval [a,b]. The points fa. and fb. are marked, and dotted lines are drawn from a, b, fa., and fb. to the points (a, fa.) and (b, fb.).  A third point, c, is plotted between a and b. Since the function is continuous, there is a value for fc. along the curve, and a line is drawn from c to (c, fc.) and from (c, fc.) to fc., which is labeled as z on the y axis.

a. Find all values for which the function is discontinuous.
b. For each value in part a., state why the formal definition of continuity does not apply.
c. Classify each discontinuity as either jump, removable, or infinite.
:::

:::exercise {fs-id1170571290233} type= 
PROBLEM:
Let $f(x)=\{\begin{array}{l}3x,x>1 \\ {x}^{3},x<1\end{array}.$
a. Sketch the graph of *f*.
b. Is it possible to find a value *k* such that $f(1)=k,$ which makes $f(x)$ continuous for all real numbers? Briefly explain.
SOLUTION:
a.

> IMAGE {img:fs-id1170571100281} src=../../media/CNX_Calc_Figure_02_04_202.jpg
> alt: A graph of the given piecewise function containing two segments. The first, x^3, exists for x < 1 and ends with an open circle at (1,1). The second, 3x, exists for x > 1. It beings with an open circle at (1,3).

b. It is not possible to redefine $f(1)$ since the discontinuity is a jump discontinuity.
:::

:::exercise {fs-id1170573359564} type= 
PROBLEM:
Let $f(x)=\frac{{x}^{4}-1}{{x}^{2}-1}$ for $x≠-1,1.$
a. Sketch the graph of *f*.
b. Is it possible to find values ${k}_{1}$ and ${k}_{2}$ such that $f(−1)={k}_{1}$ and $f(1)={k}_{2},$ and that makes $f(x)$ continuous for all real numbers? Briefly explain.
:::

:::exercise {fs-id1170573512268} type= 
PROBLEM:
Sketch the graph of a function $y=f(x)$ with properties i. through vi.
1. The domain of *f* is $(\text{−}\infty ,\text{+}\infty ).$
2. *f* has an infinite discontinuity at $x=−6.$
3. $f(−6)=3$
4. $\lim_{x\to {−3}^{-}}f(x)=\lim_{x\to {−3}^{+}}f(x)=2$
5. $f(−3)=3$
6. *f* is left continuous but not right continuous at $x=3.$
SOLUTION:
Answers may vary; see the following example:

> IMAGE {img:fs-id1170571130672} src=../../media/CNX_Calc_Figure_02_04_207.jpg
> alt: A graph of a piecewise function with several segments. The first is an increasing line that exists for x < -8. It ends at an open circle at (-8,-8). The second is an increasing curve that exists from -8 <= x < -6. It begins with a closed circle at (-8, 0 ) and goes to infinity as x goes to -6 from the left. The third is a closed circle at the point (-6, 3). The fourth is a line that exists from -6 < x <= 3. It begins with an open circle at (-6, 2) and ends with a closed circle at (3,2). The fifth is an increasing line starting with an open circle at (3,3). It exists for x > 3.

:::

:::exercise {fs-id1170571130669} type= 
PROBLEM:
Sketch the graph of a function $y=f(x)$ with properties i. through iv.
1. The domain of *f* is $[0,5].$
2. $\lim_{x\to {1}^{+}}f(x)$ and $\lim_{x\to {1}^{-}}f(x)$ exist and are equal.
3. $f(x)$ is left continuous but not continuous at $x=2,$ and right continuous but not continuous at $x=3.$
4. $f(x)$ has a removable discontinuity at $x=1,$ a jump discontinuity at $x=2,$ and the following limits hold: $\lim_{x\to {3}^{-}}f(x)=\text{−}\infty$ and $\lim_{x\to {3}^{+}}f(x)=2.$
:::
In the following exercises, suppose $y=f(x)$ is defined for all *x*. For each description, sketch a graph with the indicated property.

:::exercise {fs-id1170571096173} type= 
PROBLEM:
Discontinuous at $x=1$ with $\lim_{x\to −1}f(x)=−1$ and $\lim_{x\to 2}f(x)=4$
SOLUTION:
Answers may vary; see the following example:

> IMAGE {img:fs-id1170571123491} src=../../media/CNX_Calc_Figure_02_04_205.jpg
> alt: The graph of a piecewise function with two parts. The first part is an increasing curve that exists for x < 1. It ends at (1,1). The second part is an increasing line that exists for x > 1. It begins at (1,3).

:::

:::exercise {fs-id1170571123500} type= 
PROBLEM:
Discontinuous at $x=2$ but continuous elsewhere with $\lim_{x\to 0}f(x)=\frac{1}{2}$
:::
Determine whether each of the given statements is true. Justify your response with an explanation or counterexample.

:::exercise {fs-id1170573422229} type= 
PROBLEM:
$f(t)=\frac{2}{{e}^{t}-{e}^{-t}}$ is continuous everywhere.
SOLUTION:
False. It is continuous over $(\text{−}\infty ,0)\cup (0,\infty ).$
:::

:::exercise {fs-id1170573624587} type= 
PROBLEM:
If the left- and right-hand limits of $f(x)$ as $x\to a$ exist and are equal, then *f* cannot be discontinuous at $x=a.$
:::

:::exercise {fs-id1170571287009} type= 
PROBLEM:
If a function is not continuous at a point, then it is not defined at that point.
SOLUTION:
False. Consider $f(x)=\{\begin{array}{l}x\;\text{if}\;x≠0 \\ 4\;\text{if}\;x=0\end{array}.$
:::

:::exercise {fs-id1170571131867} type= 
PROBLEM:
According to the IVT, $\text{cos}\;x-\text{sin}\;x-x=2$ has a solution over the interval $[−1,1].$
:::

:::exercise {fs-id1170571131236} type= 
PROBLEM:
If $f(x)$ is continuous such that $f(a)$ and $f(b)$ have opposite signs, then $f(x)=0$ has exactly one solution in $[a,b].$
SOLUTION:
False. IVT only says that there is at least one solution; it does not guarantee that there is exactly one. Consider $f(x)=\text{cos}\;(x)$ on $[-\pi ,2\pi ].$
:::

:::exercise {fs-id1170571099130} type= 
PROBLEM:
The function $f(x)=\frac{{x}^{2}-4x+3}{{x}^{2}-1}$ is continuous over the interval $[0,3].$
:::

:::exercise {fs-id1170570998957} type= 
PROBLEM:
If $f(x)$ is continuous everywhere and $f(a),f(b)>0,$ then there is no root of $f(x)$ in the interval $[a,b].$
SOLUTION:
False. The IVT does *not* work in reverse! Consider ${(x-1)}^{2}$ over the interval $[−2,2].$
:::
**[T]** The following problems consider the scalar form of Coulomb’s law, which describes the electrostatic force between two point charges, such as electrons. It is given by the equation $F(r)={k}_{e}\frac{|{q}_{1}{q}_{2}|}{{r}^{2}},$ where ${k}_{e}$ is Coulomb’s constant, ${q}_{i}$ are the magnitudes of the charges of the two particles, and *r* is the distance between the two particles.

:::exercise {fs-id1170573393357} type= 
PROBLEM:
To simplify the calculation of a model with many interacting particles, after some threshold value $r=R,$ we approximate *F* as zero.
a. Explain the physical reasoning behind this assumption.
b. What is the force equation?
c. Evaluate the force *F* using both Coulomb’s law and our approximation, assuming two protons with a charge magnitude of $1.6022\;\times \;{10}^{−19}\;\text{coulombs (C)},$ and the Coulomb constant ${k}_{e}=8.988\;\times \;{10}^{9}{\text{Nm}}^{2}\text{/}{\text{C}}^{2}$ are 1 m apart. Also, assume $R<1\;\text{m}.$ How much inaccuracy does our approximation generate? Is our approximation reasonable?
d. Is there any finite value of *R* for which this system remains continuous at *R*?
:::

:::exercise {fs-id1170573438919} type= 
PROBLEM:
Instead of making the force 0 at *R*, instead we let the force be 10<sup>−20</sup> for $r\ge R.$ Assume two protons, which have a magnitude of charge $1.6022\;\times \;{10}^{−19}\;\text{C},$ and the Coulomb constant ${k}_{e}=8.988\;\times \;{10}^{9}{\text{Nm}}^{2}\text{/}{\text{C}}^{2}.$ Is there a value *R* that can make this system continuous? If so, find it.
SOLUTION:
$R=0.0001519\;\text{m}$
:::
Recall the discussion on spacecraft from the chapter opener. The following problems consider a rocket launch from Earth’s surface. The force of gravity on the rocket is given by $F(d)=-mk\text{/}{d}^{2},$ where *m* is the mass of the rocket, *d* is the distance of the rocket from the center of Earth, and *k* is a constant.

:::exercise {fs-id1170573587225} type= 
PROBLEM:
**[T]** Determine the value and units of *k* given that the mass of the rocket is 3 million kg. (*Hint*: The distance from the center of Earth to its surface is 6378 km.)
:::

:::exercise {fs-id1170573571185} type= 
PROBLEM:
**[T]** After a certain distance *D* has passed, the gravitational effect of Earth becomes quite negligible, so we can approximate the force function by $F(d)=\{\begin{array}{ll}-\frac{mk}{{d}^{2}} & \text{if}\;d<D \\ 10,000 & \text{if}\;d\ge D\end{array}.$ Using the value of k found in the previous exercise, find the necessary condition *D* such that the force function remains continuous.
SOLUTION:
$D=345,826\;\text{km}$
:::

:::exercise {fs-id1170571124644} type= 
PROBLEM:
As the rocket travels away from Earth’s surface, there is a distance *D* where the rocket sheds some of its mass, since it no longer needs the excess fuel storage. We can write this function as $F(d)=\{\begin{array}{l}-\frac{{m}_{1}k}{{d}^{2}}\;\text{if}\;d<D \\ -\frac{{m}_{2}k}{{d}^{2}}\;\text{if}\;d\ge D\end{array}.$ Is there a *D* value such that this function is continuous, assuming ${m}_{1}≠{m}_{2}?$
:::
Prove the following functions are continuous everywhere

:::exercise {fs-id1170571136680} type= 
PROBLEM:
$f(\theta )=\text{sin}\;\theta$
SOLUTION:
For all values of $a,f(a)$ is defined, $\lim_{\theta \to a}f(\theta )$ exists, and $\lim_{\theta \to a}f(\theta )=f(a).$ Therefore, $f(\theta )$ is continuous everywhere.
:::

:::exercise {fs-id1170573413789} type= 
PROBLEM:
$g(x)=|x|$
:::

:::exercise {fs-id1170573414086} type= 
PROBLEM:
Where is $f(x)=\{\begin{array}{l}0\;\text{if}\;x\;\text{is irrational} \\ 1\;\text{if}\;x\;\text{is rational}\end{array}$ continuous?
SOLUTION:
Nowhere
:::

## Glossary
- {def} **continuity at a point**: A function $f(x)$ is continuous at a point *a* if and only if the following three conditions are satisfied: (1) $f(a)$ is defined, (2) $\lim_{x\to a}f(x)$ exists, and (3) $\lim_{x\to a}f(x)=f(a)$
- {def} **continuity from the left**: A function is continuous from the left at *b* if $\lim_{x\to {b}^{-}}f(x)=f(b)$
- {def} **continuity from the right**: A function is continuous from the right at *a* if $\lim_{x\to {a}^{+}}f(x)=f(a)$
- {def} **continuity over an interval**: a function that can be traced with a pencil without lifting the pencil; a function is continuous over an open interval if it is continuous at every point in the interval; a function $f(x)$ is continuous over a closed interval of the form $[a,b]$ if it is continuous at every point in $(a,b),$ and it is continuous from the right at *a* and from the left at *b*
- {def} **discontinuity at a point**: A function is discontinuous at a point or has a discontinuity at a point if it is not continuous at the point
- {def} **infinite discontinuity**: An infinite discontinuity occurs at a point *a* if $\lim_{x\to {a}^{-}}f(x)=\text{±}\infty$ or $\lim_{x\to {a}^{+}}f(x)=\text{±}\infty$
- {def} **Intermediate Value Theorem**: Let *f* be continuous over a closed bounded interval $[\text{a},\text{b}];$ if *z* is any real number between $f(a)$ and $f(b),$ then there is a number *c* in $[a,b]$ satisfying $f(c)=z$
- {def} **jump discontinuity**: A jump discontinuity occurs at a point *a* if $\lim_{x\to {a}^{-}}f(x)$ and $\lim_{x\to {a}^{+}}f(x)$ both exist, but $\lim_{x\to {a}^{-}}f(x)≠\lim_{x\to {a}^{+}}f(x)$
- {def} **removable discontinuity**: A removable discontinuity occurs at a point *a* if $f(x)$ is discontinuous at *a*, but $\lim_{x\to a}f(x)$ exists

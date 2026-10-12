# Maxima and Minima

## Learning Objectives {section:learning-objectives}
- Define absolute extrema.
- Define local extrema.
- Explain how to find the critical points of a function over a closed interval.
- Describe how to use critical points to locate absolute extrema over a closed interval.

Given a particular function, we are often interested in determining the largest and smallest values of the function. This information is important in creating accurate graphs. Finding the maximum and minimum values of a function also has practical significance because we can use this method to solve optimization problems, such as maximizing profit, minimizing the amount of material used in manufacturing an aluminum can, or finding the maximum height a rocket can reach. In this section, we look at how to use derivatives to find the largest and smallest values for a function.

## Absolute Extrema
Consider the function $f(x)={x}^{2}+1$ over the interval $(\text{−}\infty ,\infty ).$ As $x\to \text{±}\infty ,$ $f(x)\to \infty .$ Therefore, the function does not have a largest value. However, since ${x}^{2}+1\ge 1$ for all real numbers $x$ and ${x}^{2}+1=1$ when $x=0,$ the function has a smallest value, 1, when $x=0.$ We say that 1 is the absolute minimum of $f(x)={x}^{2}+1$ and it occurs at $x=0.$ We say that $f(x)={x}^{2}+1$ does not have an absolute maximum (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_04_03_001} src=../../media/CNX_Calc_Figure_04_03_001.jpg
> alt: The function f(x) = x2 + 1 is graphed, and its minimum of 1 is seen to be at x = 0.
> caption: The given function has an absolute minimum of 1 at $x=0.$ The function does not have an absolute maximum.

:::note [definition] Definition
Let $f$ be a function defined over an interval $I$ and let $c\in I.$ We say $f$ has an {term:absolute maximum} on $I$ at $c$ if $f(c)\ge f(x)$ for all $x\in I.$ We say $f$ has an {term:absolute minimum} on $I$ at $c$ if $f(c)\le f(x)$ for all $x\in I.$ If $f$ has an absolute maximum on $I$ at $c$ or an absolute minimum on $I$ at $c,$ we say $f$ has an {term:absolute extremum} on $I$ at $c.$
:::
Before proceeding, let’s note two important issues regarding this definition. First, the term *absolute* here does not refer to absolute value. An absolute extremum may be positive, negative, or zero. Second, if a function $f$ has an absolute extremum over an interval $I$ at $c,$ the absolute extremum is $f(c).$ The real number $c$ is a point in the domain at which the absolute extremum occurs. For example, consider the function $f(x)=1\text{/}({x}^{2}+1)$ over the interval $(\text{−}\infty ,\infty ).$ Since

$f(0)=1\ge \frac{1}{{x}^{2}+1}=f(x)$  {eq:fs-id1165041761810}

for all real numbers $x,$ we say $f$ has an absolute maximum over $(\text{−}\infty ,\infty )$ at $x=0.$ The absolute maximum is $f(0)=1.$ It occurs at $x=0,$ as shown in [ref:CNX_Calc_Figure_04_03_002](b).
A function may have both an absolute maximum and an absolute minimum, just one extremum, or neither. [ref:CNX_Calc_Figure_04_03_002] shows several functions and some of the different possibilities regarding absolute extrema. However, the following theorem, called the {term:Extreme Value Theorem}, guarantees that a continuous function $f$ over a closed, bounded interval $[a,b]$ has both an absolute maximum and an absolute minimum.

> FIGURE {fig:CNX_Calc_Figure_04_03_002} src=../../media/CNX_Calc_Figure_04_03_010.jpg
> alt: This figure has six parts a, b, c, d, e, and f. In figure a, the line f(x) = x3 is shown, and it is noted that it has no absolute minimum and no absolute maximum. In figure b, the line f(x) = 1/(x2 + 1) is shown, which is near 0 for most of its length and rises to a bump at (0, 1); it has no absolute minimum, but does have an absolute maximum of 1 at x = 0. In figure c, the line f(x) = cos x is shown, which has absolute minimums of −1 at ±π, ±3π, … and absolute maximums of 1 at 0, ±2π, ±4π, …. In figure d, the piecewise function f(x) = 2 – x2 for 0 ≤ x < 2 and x – 3 for 2 ≤ x ≤ 4 is shown, with absolute maximum of 2 at x = 0 and no absolute minimum. In figure e, the function f(x) = (x – 2)2 is shown on [1, 4], which has absolute maximum of 4 at x = 4 and absolute minimum of 0 at x = 2. In figure f, the function f(x) = x/(2 − x) is shown on [0, 2), with absolute minimum of 0 at x = 0 and no absolute maximum.
> caption: Graphs (a), (b), and (c) show several possibilities for absolute extrema for functions with a domain of $(\text{−}\infty ,\infty ).$ Graphs (d), (e), and (f) show several possibilities for absolute extrema for functions with a domain that is a bounded interval.

:::note [theorem] Extreme Value Theorem
If $f$ is a continuous function over the closed, bounded interval $[a,b],$ then there is a point in $[a,b]$ at which $f$ has an absolute maximum over $[a,b]$ and there is a point in $[a,b]$ at which $f$ has an absolute minimum over $[a,b].$
:::
The proof of the extreme value theorem is beyond the scope of this text. Typically, it is proved in a course on real analysis. There are a couple of key points to note about the statement of this theorem. For the extreme value theorem to apply, the function must be continuous over a closed, bounded interval. If the interval $I$ is open or the function has even one point of discontinuity, the function may not have an absolute maximum or absolute minimum over $I.$ For example, consider the functions shown in [ref:CNX_Calc_Figure_04_03_002](d), (e), and (f). All three of these functions are defined over bounded intervals. However, the function in graph (e) is the only one that has both an absolute maximum and an absolute minimum over its domain. The extreme value theorem cannot be applied to the functions in graphs (d) and (f) because neither of these functions is continuous over a closed, bounded interval. Although the function in graph (d) is defined over the closed interval $[0,4],$ the function is discontinuous at $x=2.$ The function has an absolute maximum over $[0,4]$ but does not have an absolute minimum. The function in graph (f) is continuous over the half-open interval $[0,2),$ but is not defined at $x=2,$ and therefore is not continuous over a closed, bounded interval. The function has an absolute minimum over $[0,2),$ but does not have an absolute maximum over $[0,2).$ These two graphs illustrate why a function over a bounded interval may fail to have an absolute maximum and/or absolute minimum.
Before looking at how to find absolute extrema, let’s examine the related concept of local extrema. This idea is useful in determining where absolute extrema occur.

## Local Extrema and Critical Points
Consider the function $f$ shown in [ref:CNX_Calc_Figure_04_03_003]. The graph can be described as two mountains with a valley in the middle. The absolute maximum value of the function occurs at the higher peak, at $x=2.$ However, $x=0$ is also a point of interest. Although $f(0)$ is not the largest value of $f,$ the value $f(0)$ is larger than $f(x)$ for all $x$ near 0. We say $f$ has a local maximum at $x=0.$ Similarly, the function $f$ does not have an absolute minimum, but it does have a local minimum at $x=1$ because $f(1)$ is less than $f(x)$ for $x$ near 1.

> FIGURE {fig:CNX_Calc_Figure_04_03_003} src=../../media/CNX_Calc_Figure_04_03_003.jpg
> alt: The function f(x) is shown, which curves upward from quadrant III, slows down in quadrant II, achieves a local maximum on the y-axis, decreases to achieve a local minimum in quadrant I at x = 1, increases to a local maximum at x = 2 that is greater than the other local maximum, and then decreases rapidly through quadrant IV.
> caption: This function $f$ has two local maxima and one local minimum. The local maximum at $x=2$ is also the absolute maximum.

:::note [definition] Definition
A function $f$ has a {term:local maximum} at $c$ if there exists an open interval $I$ containing $c$ such that $I$ is contained in the domain of $f$ and $f(c)\ge f(x)$ for all $x\in I.$ A function $f$ has a {term:local minimum} at $c$ if there exists an open interval $I$ containing $c$ such that $I$ is contained in the domain of $f$ and $f(c)\le f(x)$ for all $x\in I.$ A function $f$ has a {term:local extremum} at $c$ if $f$ has a local maximum at $c$ or $f$ has a local minimum at $c.$
:::
Note that if $f$ has an absolute extremum at $c$ and $f$ is defined over an interval containing $c,$ then $f(c)$ is also considered a local extremum. If an absolute extremum for a function $f$ occurs at an endpoint, we do not consider that to be a local extremum, but instead refer to that as an endpoint extremum.
Given the graph of a function $f,$ it is sometimes easy to see where a local maximum or local minimum occurs. However, it is not always easy to see, since the interesting features on the graph of a function may not be visible because they occur at a very small scale. Also, we may not have a graph of the function. In these cases, how can we use a formula for a function to determine where these extrema occur?
To answer this question, let’s look at [ref:CNX_Calc_Figure_04_03_003] again. The local extrema occur at $x=0,$ $x=1,$ and $x=2.$ Notice that at $x=0$ and $x=1,$ the derivative $f'(x)=0.$ At $x=2,$ the derivative $f'(x)$ does not exist, since the function $f$ has a corner there. In fact, if $f$ has a local extremum at a point $x=c,$ the derivative $f'(c)$ must satisfy one of the following conditions: either $f'(c)=0$ or $f'(c)$ is undefined. Such a value $c$ is known as a critical number and it is important in finding extreme values for functions.

:::note [definition] Definition
Let $c$ be an interior point in the domain of $f.$ We say that $c$ is a {term:critical number} of $f$ if $f'(c)=0$ or $f'(c)$ is undefined. We call the point $(c\text{,}f(c))$ a critical number of $f$. Note that these two terms are often used interchangeably in this text and elsewhere.
:::
As mentioned earlier, if $f$ has a local extremum at a point $x=c,$ then $c$ must be a critical number of $f.$ This fact is known as {term:Fermat’s theorem}.

:::note [theorem] Fermat’s Theorem
If $f$ has a local extremum at $c$ and $f$ is differentiable at $c,$ then $f'(c)=0.$
:::

### Proof
Suppose $f$ has a local extremum at $c$ and $f$ is differentiable at $c.$ We need to show that $f'(c)=0.$ To do this, we will show that $f'(c)\ge 0$ and $f'(c)\le 0,$ and therefore $f'(c)=0.$ Since $f$ has a local extremum at $c,$ $f$ has a local maximum or local minimum at $c.$ Suppose $f$ has a local maximum at $c.$ The case in which $f$ has a local minimum at $c$ can be handled similarly. There then exists an open interval $I$ such that $f(c)\ge f(x)$ for all $x\in I.$ Since $f$ is differentiable at $c,$ from the definition of the derivative, we know that

$f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}.$  {eq:fs-id1165042015585}

Since this limit exists, both one-sided limits also exist and equal $f'(c).$ Therefore,

$$ f'(c)=\lim_{x\to {c}^{+}}\frac{f(x)-f(c)}{x-c}, $$  {eq:fs-id1165040744293}

and

$$ f'(c)=\lim_{x\to {c}^{-}}\frac{f(x)-f(c)}{x-c}. $$  {eq:fs-id1165042015558}

Since $f(c)$ is a local maximum, we see that $f(x)-f(c)\le 0$ for $x$ near $c.$ Therefore, for $x$ near $c,$ but $x>c,$ we have $\frac{f(x)-f(c)}{x-c}\le 0.$ From [ref:fs-id1165040744293] we conclude that $f'(c)\le 0.$ Similarly, it can be shown that $f'(c)\ge 0.$ Therefore, $f'(c)=0.$
□
From Fermat’s theorem, we conclude that if $f$ has a local extremum at $c,$ then either $f'(c)=0$ or $f'(c)$ is undefined. In other words, local extrema can only occur at critical points.
Note this theorem does not claim that a function $f$ must have a local extremum at a critical point. Rather, it states that critical points are candidates for local extrema. For example, consider the function $f(x)={x}^{3}.$ We have $f'(x)=3{x}^{2}=0$ when $x=0.$ Therefore, $x=0$ is a critical number. However, $f(x)={x}^{3}$ is increasing over $(\text{−}\infty ,\infty ),$ and thus $f$ does not have a local extremum at $x=0.$ In [ref:CNX_Calc_Figure_04_03_004], we see several different possibilities for critical points. In some of these cases, the functions have local extrema at critical points, whereas in other cases the functions do not. Note that these graphs do not show all possibilities for the behavior of a function at a critical point.

> FIGURE {fig:CNX_Calc_Figure_04_03_004} src=../../media/CNX_Calc_Figure_04_03_004.jpg
> alt: This figure has five parts a, b, c, d, and e. In figure a, a parabola is shown facing down in quadrant I; there is a horizontal tangent line at the local maximum marked f’(c) = 0. In figure b, there is a function drawn with an asymptote at c, meaning that the function increases toward infinity on both sides of c; it is noted that f’(c) is undefined. In figure c, a version of the absolute value graph is shown that has been shifted so that its minimum is in quadrant I with x = c. It is noted that f’(c) is undefined. In figure d, a version of the function f(x) = x3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a horizontal line through it, and it is noted that f’(c) = 0. In figure e, a version of the function f(x) = x1/3 is shown that has been shifted so that its inflection point is in quadrant I with x = c. Its inflection point at (c, f(c)) has a vertical line through it, and it is noted that f’(c) is undefined.
> caption: (a–e) A function $f$ has a critical number at $c$ if $f'(c)=0$ or $f'(c)$ is undefined. A function may or may not have a local extremum at a critical point.

Later in this chapter we look at analytical methods for determining whether a function actually has a local extremum at a critical point. For now, let’s turn our attention to finding critical points. We will use graphical observations to determine whether a critical point is associated with a local extremum.

:::example {ex:fs-id1165041979119} Locating Critical Points

:::exercise {fs-id1165041979121} type= 
PROBLEM:
For each of the following functions, find all critical points. Use a graphing utility to determine whether the function has a local extremum at each of the critical points.
a. $f(x)=\frac{1}{3}{x}^{3}-\frac{5}{2}{x}^{2}+4x$
b. $f(x)={({x}^{2}-1)}^{3}$
c. $f(x)=\frac{4x}{1+{x}^{2}}$
SOLUTION:
a. The derivative $f'(x)={x}^{2}-5x+4$ is defined for all real numbers $x.$ Therefore, we only need to find the values for $x$ where $f'(x)=0.$ Since $f'(x)={x}^{2}-5x+4=(x-4)(x-1),$ the critical numbers are $x=1$ and $x=4.$ From the graph of $f$ in [ref:CNX_Calc_Figure_04_03_005], we see that $f$ has a local maximum at $x=1$ and a local minimum at $x=4.$

> FIGURE {fig:CNX_Calc_Figure_04_03_005} src=../../media/CNX_Calc_Figure_04_03_005.jpg
> alt: The function f(x) = (1/3) x3 – (5/2) x2 + 4x is graphed. The function has local maximum at x = 1 and local minimum at x = 4.
> caption: This function has a local maximum and a local minimum.

b. Using the chain rule, we see the derivative is

$f'(x)=3{({x}^{2}-1)}^{2}(2x)=6x{({x}^{2}-1)}^{2}.$  {eq:fs-id1165042226046}

Therefore, $f$ has critical points when $x=0$ and when ${x}^{2}-1=0.$ We conclude that the critical numbers are $x=0,\text{±}1.$ From the graph of $f$ in [ref:CNX_Calc_Figure_04_03_006], we see that $f$ has a local (and absolute) minimum at $x=0,$ but does not have a local extremum at $x=1$ or $x=−1.$

> FIGURE {fig:CNX_Calc_Figure_04_03_006} src=../../media/CNX_Calc_Figure_04_03_006.jpg
> alt: The function f(x) = (x2 − 1)3 is graphed. The function has local minimum at x = 0, and inflection points at x = ±1.
> caption: This function has three critical numbers: $x=0,$ $x=1,$ and $x=−1.$ The function has a local (and absolute) minimum at $x=0,$ but does not have extrema at the other two critical points.

c. By the quotient rule, we see that the derivative is

$f'(x)=\frac{(1+{x}^{2})(4)-4x(2x)}{{(1+{x}^{2})}^{2}}=\frac{4-4{x}^{2}}{{(1+{x}^{2})}^{2}}.$  {eq:fs-id1165042299459}

The derivative is defined everywhere. Therefore, we only need to find values for $x$ where $f'(x)=0.$ Solving $f'(x)=0,$ we see that $4-4{x}^{2}=0,$ which implies $x=\text{±}1.$ Therefore, the critical numbers are $x=\text{±}1.$ From the graph of $f$ in [ref:CNX_Calc_Figure_04_03_007], we see that $f$ has an absolute maximum at $x=1$ and an absolute minimum at $x=−1.$ Hence, $f$ has a local maximum at $x=1$ and a local minimum at $x=−1.$ (Note that if $f$ has an absolute extremum over an interval $I$ at a point $c$ that is not an endpoint of $I,$ then $f$ has a local extremum at $c.)$

> FIGURE {fig:CNX_Calc_Figure_04_03_007} src=../../media/CNX_Calc_Figure_04_03_007.jpg
> alt: The function f(x) = 4x/(1 + x2) is graphed. The function has local/absolute maximum at x = 1 and local/absolute minimum at x = −1.
> caption: This function has an absolute maximum and an absolute minimum.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165040757544} type= 
PROBLEM:
Find all critical points for $f(x)={x}^{3}-\frac{1}{2}{x}^{2}-2x+1.$
SOLUTION:
$x=-\frac{2}{3},$ $x=1$
COMMENTARY: Hint
Calculate $f'(x).$
:::
:::

## Locating Absolute Extrema
The extreme value theorem states that a continuous function over a closed, bounded interval has an absolute maximum and an absolute minimum. As shown in [ref:CNX_Calc_Figure_04_03_002], one or both of these absolute extrema could occur at an endpoint. If an absolute extremum does not occur at an endpoint, however, it must occur at an interior point, in which case the absolute extremum is a local extremum. Therefore, by [ref:fs-id1165041796868], the point $c$ at which the local extremum occurs must be a critical point. We summarize this result in the following theorem.

:::note [theorem] Location of Absolute Extrema
Let $f$ be a continuous function over a closed, bounded interval $I.$ The absolute maximum of $f$ over $I$ and the absolute minimum of $f$ over $I$ must occur at endpoints of $I$ or at critical points of $f$ in $I.$
:::
With this idea in mind, let’s examine a procedure for locating absolute extrema.

:::note [problem-solving] Locating Absolute Extrema over a Closed Interval
Consider a continuous function $f$ defined over the closed interval $[a,b].$
1. Evaluate $f$ at the endpoints $x=a$ and $x=b.$
2. Find all critical points of $f$ that lie over the interval $(a,b)$ and evaluate $f$ at those critical points.
3. Compare all values found in (1) and (2). From [ref:fs-id1165040757685], the absolute extrema must occur at endpoints or critical points. Therefore, the largest of these values is the absolute maximum of $f.$ The smallest of these values is the absolute minimum of $f.$
:::
Now let’s look at how to use this strategy to find the absolute maximum and absolute minimum values for continuous functions.

:::example {ex:fs-id1165042035517} Locating Absolute Extrema

:::exercise {fs-id1165042035519} type= 
PROBLEM:
For each of the following functions, find the absolute maximum and absolute minimum over the specified interval and state where those values occur.
a. $f(x)=\text{−}{x}^{2}+3x-2$ over $[1,3].$
b. $f(x)={x}^{2}-3{x}^{2\text{/}3}$ over $[0,2].$
SOLUTION:
a. Step 1. Evaluate $f$ at the endpoints $x=1$ and $x=3.$

$f(1)=0\;\text{and}\;f(3)=−2$  {eq:fs-id1165042068518}

Step 2. Since $f'(x)=−2x+3,$ $f'$ is defined for all real numbers $x.$ Therefore, there are no critical points where the derivative is undefined. It remains to check where $f'(x)=0.$ Since $f'(x)=−2x+3=0$ at $x=\frac{3}{2}$ and $\frac{3}{2}$ is in the interval $[1,3],$ $f(\frac{3}{2})$ is a candidate for an absolute extremum of $f$ over $[1,3].$ We evaluate $f(\frac{3}{2})$ and find

$f(\frac{3}{2})=\frac{1}{4}.$  {eq:fs-id1165042088374}

Step 3. We set up the following table to compare the values found in steps 1 and 2.

> TABLE {tab:fs-id1165042088411} cols=3 class=unnumbered
> summary: This table has three columns and four rows. The first row is a header row, and it reads x, f(x), and Conclusion. Below the header row, the first column reads 0, 0, and blank. The second column reads 3/2, 1/4, and Absolute maximum. The third column reads 3, −2, and Absolute minimum.

| $x$ | $f(x)$ | Conclusion |
| --- | --- | --- |
| $1$ | $0$ |  |
| $\frac{3}{2}$ | $\frac{1}{4}$ | Absolute maximum |
| $3$ | $−2$ | Absolute minimum |

From the table, we find that the absolute maximum of $f$ over the interval [1, 3] is $\frac{1}{4},$ and it occurs at $x=\frac{3}{2}.$ The absolute minimum of $f$ over the interval [1, 3] is $−2,$ and it occurs at $x=3$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_03_008} src=../../media/CNX_Calc_Figure_04_03_008.jpg
> alt: The function f(x) = – x2 + 3x – 2 is graphed from (1, 0) to (3, −2), with its maximum marked at (3/2, 1/4).
> caption: This function has both an absolute maximum and an absolute minimum.

b. Step 1. Evaluate $f$ at the endpoints $x=0$ and $x=2.$

$f(0)=0\;\text{and}\;f(2)=4-3\sqrt[3]{4}\approx -0.762$  {eq:fs-id1165040744374}

Step 2. The derivative of $f$ is given by

$f'(x)=2x-\frac{2}{{x}^{1\text{/}3}}=\frac{2{x}^{4\text{/}3}-2}{{x}^{1\text{/}3}}$  {eq:fs-id1165040744442}

for $x≠0.$ The derivative is zero when $2{x}^{4\text{/}3}-2=0,$ which implies $x=\text{±}1.$ The derivative is undefined at $x=0.$ Therefore, the critical numbers of $f$ are $x=0,1,−1.$ The point $x=0$ is an endpoint, so we already evaluated $f(0)$ in step 1. The point $x=−1$ is not in the interval of interest, so we need only evaluate $f(1).$ We find that

$f(1)=−2.$  {eq:fs-id1165041848326}

Step 3. We compare the values found in steps 1 and 2, in the following table.

> TABLE {tab:fs-id1165041848355} cols=3 class=unnumbered
> summary: This table has three columns and four rows. The first row is a header row, and it reads x, f(x), and Conclusion. Below the header row, the first column reads 0, 0, and Absolute maximum. The second column reads 1, −2, and Absolute minimum. The third column reads 2, −0.762, and blank.

| $x$ | $f(x)$ | Conclusion |
| --- | --- | --- |
| $0$ | $0$ | Absolute maximum |
| $1$ | $−2$ | Absolute minimum |
| $2$ | $−0.762$ |  |

We conclude that the absolute maximum of $f$ over the interval [0, 2] is zero, and it occurs at $x=0.$ The absolute minimum is −2, and it occurs at $x=1$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_03_009} src=../../media/CNX_Calc_Figure_04_03_009.jpg
> alt: The function f(x) = x2 – 3x2/3 is graphed from (0, 0) to (2, −0.762), with its minimum marked at (1, −2).
> caption: This function has an absolute maximum at an endpoint of the interval.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042108871} type= 
PROBLEM:
Find the absolute maximum and absolute minimum of $f(x)={x}^{2}-4x+3$ over the interval $[1,4].$
SOLUTION:
The absolute maximum is $3$ and it occurs at $x=4.$ The absolute minimum is $−1$ and it occurs at $x=2.$
COMMENTARY: Hint
Look for critical points. Evaluate $f$ at all critical points and at the endpoints.
:::
:::
At this point, we know how to locate absolute extrema for continuous functions over closed intervals. We have also defined local extrema and determined that if a function $f$ has a local extremum at a point $c,$ then $c$ must be a critical number of $f.$ However, $c$ being a critical point is not a sufficient condition for $f$ to have a local extremum at $c.$ Later in this chapter, we show how to determine whether a function actually has a local extremum at a critical point. First, however, we need to introduce the Mean Value Theorem, which will help as we analyze the behavior of the graph of a function.

## Key Concepts {section:key-concepts}
- A function may have both an absolute maximum and an absolute minimum, have just one absolute extremum, or have no absolute maximum or absolute minimum.
- If a function has a local extremum, the point at which it occurs must be a critical point. However, a function need not have a local extremum at a critical point.
- A continuous function over a closed, bounded interval has an absolute maximum and an absolute minimum. Each extremum occurs at a critical point or an endpoint.

##  {section:section-exercises}

:::exercise {fs-id1165042199381} type= 
PROBLEM:
In precalculus, you learned a formula for the position of the maximum or minimum of a quadratic equation $y=a{x}^{2}+bx+c,$ which was $h=-\frac{b}{(2a)}.$ Prove this formula using calculus.
:::

:::exercise {fs-id1165042199447} type= 
PROBLEM:
If you are finding an absolute minimum over an interval $[a,b],$ why do you need to check the endpoints? Draw a graph that supports your hypothesis.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1165042199483} type= 
PROBLEM:
If you are examining a function over an interval $(a,b),$ for $a$ and $b$ finite, is it possible not to have an absolute maximum or absolute minimum?
:::

:::exercise {fs-id1165042278260} type= 
PROBLEM:
When you are checking for critical points, explain why you also need to determine points where $f'(x)$ is undefined. Draw a graph to support your explanation.
SOLUTION:
Answers will vary
:::

:::exercise {fs-id1165042278290} type= 
PROBLEM:
Can you have a finite absolute maximum for $y=a{x}^{2}+bx+c$ over $(\text{−}\infty ,\infty )?$ Explain why or why not using graphical arguments.
:::

:::exercise {fs-id1165042278366} type= 
PROBLEM:
Can you have a finite absolute maximum for $y=a{x}^{3}+b{x}^{2}+cx+d$ over $(\text{−}\infty ,\infty )$ assuming *a* is non-zero? Explain why or why not using graphical arguments.
SOLUTION:
No; answers will vary
:::

:::exercise {fs-id1165042278442} type= 
PROBLEM:
Let $m$ be the number of local minima and $M$ be the number of local maxima. Can you create a function where $M>m+2?$ Draw a graph to support your explanation.
:::

:::exercise {fs-id1165042065906} type= 
PROBLEM:
Is it possible to have more than one absolute maximum? Use a graphical argument to prove your hypothesis.
SOLUTION:
Since the absolute maximum is the function (output) value rather than the *x* value, the answer is no; answers will vary
:::

:::exercise {fs-id1165042065928} type= 
PROBLEM:
Is it possible to have no absolute minimum or maximum for a function? If so, construct such a function. If not, explain why this is not possible.
:::

:::exercise {fs-id1165042065945} type= 
PROBLEM:
**[T]** Graph the function $y={e}^{ax}.$ For which values of $a,$ on any infinite domain, will you have an absolute minimum and absolute maximum?
SOLUTION:
When $a=0$
:::
For the following exercises, determine where the local and absolute maxima and minima occur on the graph given. Assume the graph represents the entirety of each function. For any extrema located at an endpoint, approximate the x-value.

:::exercise {fs-id1165042066003} type= 
PROBLEM:

> IMAGE {img:fs-id1165042066010} src=../../media/CNX_Calc_Figure_04_03_201.jpg
> alt: The function graphed starts at (−4, 60), decreases rapidly to (−3, −40), increases to (−1, 10) before decreasing slowly to (2, 0), at which point it increases rapidly to (3, 30).

:::

:::exercise {fs-id1165042066031} type= 
PROBLEM:

> IMAGE {img:fs-id1165042066039} src=../../media/CNX_Calc_Figure_04_03_202.jpg
> alt: The function graphed starts at (−2.2, 10), decreases rapidly to (−2, −11), increases to (−1, 5) before decreasing slowly to (1, 3), at which point it increases to (2, 7), and then decreases to (3, −20).

SOLUTION:
Absolute minimum at 3; Absolute maximum at −2.2; local minima at −2, 1; local maxima at −1, 2
:::

:::exercise {fs-id1165042066060} type= 
PROBLEM:

> IMAGE {img:fs-id1165042066068} src=../../media/CNX_Calc_Figure_04_03_203.jpg
> alt: The function graphed starts at (−3, −1), increases rapidly to (−2, 0.7), decreases to (−1, −0.25) before decreasing slowly to (1, 0.25), at which point it decreases to (2, 0.7), and then increases to (3, 1).

:::

:::exercise {fs-id1165042066089} type= 
PROBLEM:

> IMAGE {img:fs-id1165042066097} src=../../media/CNX_Calc_Figure_04_03_204.jpg
> alt: The function graphed starts at (−2.5, 1), decreases rapidly to (−2, −1.25), increases to (−1, 0.25) before decreasing slowly to (0, 0.2), at which point it increases slowly to (1, 0.25), then decreases rapidly to (2, −1.25), and finally increases to (2.5, 1).

SOLUTION:
Absolute minima at −2, 2; absolute maxima at −2.5, 2.5; minima at –2, 0, and 2 (Note: –2 and 2 are both local and absolute minima); local maxima at −1, 1
:::
For the following problems, draw graphs of $f(x),$ which is continuous, over the interval $[−4,4]$ with the following properties:

:::exercise {fs-id1165040665540} type= 
PROBLEM:
Absolute maximum at $x=2$ and absolute minima at $x=\text{±}3$
:::

:::exercise {fs-id1165040665577} type= 
PROBLEM:
Absolute minimum at $x=1$ and absolute maximum at $x=2$
SOLUTION:
Answers may vary.
:::

:::exercise {fs-id1165040665611} type= 
PROBLEM:
Absolute maximum at $x=4,$ absolute minimum at $x=−1,$ local maximum at $x=−2,$ and a critical point that is not a maximum or minimum at $x=2$
:::

:::exercise {fs-id1165040665671} type= 
PROBLEM:
Absolute maxima at $x=2$ and $x=−3,$ local minimum at $x=1,$ and absolute minimum at $x=4$
SOLUTION:
Answers may vary.
:::
For the following exercises, find the critical numbers in the domains of the following functions.

:::exercise {fs-id1165042110012} type= 
PROBLEM:
$y=4{x}^{3}-3x$
:::

:::exercise {fs-id1165042110060} type= 
PROBLEM:
$y=4\sqrt{x}-{x}^{2}$
SOLUTION:
$x=1$
:::

:::exercise {fs-id1165042110102} type= 
PROBLEM:
$y=\frac{1}{x-1}$
:::

:::exercise {fs-id1165042110134} type= 
PROBLEM:
$y=\text{ln}(x-2)$
SOLUTION:
None
:::

:::exercise {fs-id1165042110172} type= 
PROBLEM:
$y=\text{tan}(x)$
:::

:::exercise {fs-id1165042110206} type= 
PROBLEM:
$y=\sqrt{4-{x}^{2}}$
SOLUTION:
$x=0\text{;}x=\pm 2$
:::

:::exercise {fs-id1165040750589} type= 
PROBLEM:
$y={x}^{3\text{/}2}-3{x}^{5\text{/}2}$
:::

:::exercise {fs-id1165040750656} type= 
PROBLEM:
$y=\frac{{x}^{2}-1}{{x}^{2}+2x-3}$
SOLUTION:
None
:::

:::exercise {fs-id1165040750706} type= 
PROBLEM:
$y={\text{sin}}^{2}(x)$
:::

:::exercise {fs-id1165040750767} type= 
PROBLEM:
$y=x+\frac{1}{x}$
SOLUTION:
$x=−1,1$
:::
For the following exercises, find the local and/or absolute extrema for the functions over the specified domain.

:::exercise {fs-id1165041864920} type= 
PROBLEM:
$f(x)={x}^{2}+3$ over $[−1,4]$
:::

:::exercise {fs-id1165041865041} type= 
PROBLEM:
$y={x}^{2}+\frac{2}{x}$ over $[1,4]$
SOLUTION:
Absolute maximum: $x=4,$ $y=\frac{33}{2};$ absolute minimum: $x=1,$ $y=3$
:::

:::exercise {fs-id1165042132533} type= 
PROBLEM:
$y={(x-{x}^{2})}^{2}$ over $[−1,1]$
:::

:::exercise {fs-id1165042132672} type= 
PROBLEM:
$y=\frac{1}{(x-{x}^{2})}$ over $(0,1)$
SOLUTION:
Absolute minimum: $x=\frac{1}{2},$ $y=4$
:::

:::exercise {fs-id1165042051213} type= 
PROBLEM:
$y=\sqrt{9-x}$ over $[1,9]$
:::

:::exercise {fs-id1165042051306} type= 
PROBLEM:
$y=x+\text{sin}(x)$ over $[0,2\pi ]$
SOLUTION:
Absolute maximum: $x=2\pi ,$ $y=2\pi ;$ absolute minimum: $x=0,$ $y=0$
:::

:::exercise {fs-id1165042061971} type= 
PROBLEM:
$y=\frac{x}{1+x}$ over $[0,100]$
:::

:::exercise {fs-id1165042062070} type= 
PROBLEM:
$y=|x+1|+|x-1|$ over $[−3,2]$
SOLUTION:
Absolute maximum: $x=−3$ and $y=6;;$ absolute minimum: $−1\le x\le 1,$ $y=2$
:::

:::exercise {fs-id1165042062173} type= 
PROBLEM:
$y=\sqrt{x}-\sqrt{{x}^{3}}$ over $[0,4]$
:::

:::exercise {fs-id1165042288667} type= 
PROBLEM:
$y=\text{sin}\;x+\text{cos}\;x$ over $[0,2\pi ]$
SOLUTION:
Absolute maximum: $x=\frac{\pi}{4},$ $y=\sqrt{2};$ absolute minimum: $x=\frac{5\pi}{4},$ $y=\text{−}\sqrt{2}$
:::

:::exercise {fs-id1165042288776} type= 
PROBLEM:
$y=4\;\text{sin}\;\theta -3\;\text{cos}\;\theta$ over $[0,2\pi ]$
:::
For the following exercises, find the local and absolute minima and maxima for the functions over $(\text{−}\infty ,\infty ).$

:::exercise {fs-id1165040756181} type= 
PROBLEM:
$y={x}^{2}+4x+5$
SOLUTION:
Absolute minimum: $x=−2,$ $y=1$
:::

:::exercise {fs-id1165040756238} type= 
PROBLEM:
$y={x}^{3}-12x$
:::

:::exercise {fs-id1165042266576} type= 
PROBLEM:
$y=3{x}^{4}+8{x}^{3}-18{x}^{2}$
SOLUTION:
Absolute minimum: $x=−3,$ $y=−135;$ local maximum: $x=0,$ $y=0;$ local minimum: $x=1,$ $y=−7$
:::

:::exercise {fs-id1165042266692} type= 
PROBLEM:
$y={x}^{3}{(1-x)}^{6}$
:::

:::exercise {fs-id1165040675916} type= 
PROBLEM:
$y=\frac{{x}^{2}+x+6}{x-1}$
SOLUTION:
Local maximum: $x=1-2\sqrt{2},$ $y=3-4\sqrt{2};$ local minimum: $x=1+2\sqrt{2},$ $y=3+4\sqrt{2}$
:::

:::exercise {fs-id1165040676034} type= 
PROBLEM:
$y=\frac{{x}^{2}-1}{x-1}$
:::
For the following functions, use a calculator to graph the function and to estimate the absolute and local maxima and minima. Then, solve for them explicitly.

:::exercise {fs-id1165040676080} type= 
PROBLEM:
**[T]** $y=3x\sqrt{1-{x}^{2}}$
SOLUTION:
Absolute maximum: $x=\frac{\sqrt{2}}{2},$ $y=\frac{3}{2};$ absolute minimum: $x=-\frac{\sqrt{2}}{2},$ $y=-\frac{3}{2}$
:::

:::exercise {fs-id1165042295835} type= 
PROBLEM:
**[T]** $y=x+\text{sin}(x)$
:::

:::exercise {fs-id1165042295877} type= 
PROBLEM:
**[T]** $y=12{x}^{5}+45{x}^{4}+20{x}^{3}-90{x}^{2}-120x+3$
SOLUTION:
Local maximum: $x=−2,$ $y=59;$ local minimum: $x=1,$ $y=−130$
:::

:::exercise {fs-id1165042230969} type= 
PROBLEM:
**[T]** $y=\frac{{x}^{3}+6{x}^{2}-x-30}{x-2}$
:::

:::exercise {fs-id1165042231048} type= 
PROBLEM:
**[T]** $y=\frac{\sqrt{4-{x}^{2}}}{\sqrt{4+{x}^{2}}}$
SOLUTION:
Absolute maximum: $x=0,$ $y=1;$ absolute minimum: $x=−2,2,$ $y=0$
:::

:::exercise {fs-id1165042231149} type= 
PROBLEM:
A company that produces cell phones has a cost function of $C={x}^{2}-1200x+36,400,$ where $C$ is cost in dollars and $x$ is number of cell phones produced (in thousands). How many units of cell phone (in thousands) minimizes this cost function?
:::

:::exercise {fs-id1165042237864} type= 
PROBLEM:
A ball is thrown into the air and its position is given by $h(t)=−4.9{t}^{2}+60t+5\;\text{m}.$ Find the height at which the ball stops ascending. How long after it is thrown does this happen?
SOLUTION:
$h=\frac{9245}{49}\;\text{m,}$ $t=\frac{300}{49}\;\text{s}$
:::
For the following exercises, consider the production of gold during the California gold rush (1848–1888). The production of gold can be modeled by $G(t)=\frac{(25t)}{({t}^{2}+16)},$ where $t$ is the number of years since the rush began $(0\le t\le 40)$ and $G$ is ounces of gold produced (in millions). A summary of the data is shown in the following figure.

> IMAGE {img:fs-id1165042238039} src=../../media/CNX_Calc_Figure_04_03_205.jpg
> alt: The bar graph shows gold (in millions of troy ounces) per year, starting in 1848 and ending in 1888. In 1848, the bar graph shows 0.05; in 1849, 0.5; in 1850, 2; in 1851, 3.6; in 1852, 3.9; in 1853, 3.3; in 1854, 3.4; in 1855, 2.6; in 1856, 2.75; in 1857, 2.1; in 1858, 2.2; in 1859, 2.15; in 1860, 2.1; in 1861, 2; in 1862, 1.8; in 1863, 1.1; in 1864, 1.15; in 1865, 0.9; in 1866, 0.85; in 1867, 0.9; in 1868, 0.85; in 1869, 0.9; in 1870, 0.85; in 1871, 0.85; in 1872, 0.75; in 1873, 0.7; in 1874, 0.8; in 1875, 0.75; in 1876, 0.7; in 1877, 0.73; in 1878, 0.9; in 1879, 0.95; in 1880, 1; in 1881, 0.95; in 1882, 0.85; in 1883, 1.1; in 1884, 0.6; in 1885, 0.55; in 1886, 0.65; in 1887, 0.6; and in 1888, 0.55.

:::exercise {fs-id1165042238056} type= 
PROBLEM:
Find when the maximum (local and absolute) gold production occurred, and the amount of gold produced during that maximum.
:::

:::exercise {fs-id1165042238074} type= 
PROBLEM:
Find when the minimum (local and absolute) gold production occurred. What was the amount of gold produced during this minimum?
SOLUTION:
The absolute minimum was in 1848, when no gold was produced.
:::
Find the critical points, maxima, and minima for the following piecewise functions.

:::exercise {fs-id1165042304267} type= 
PROBLEM:
$y=\{\begin{array}{ll}{x}^{2}-4x & 0\le x\le 1 \\ {x}^{2}-4 & 1<x\le 2\end{array}$
:::

:::exercise {fs-id1165042304403} type= 
PROBLEM:
$y=\{\begin{array}{ll}{x}^{2}+1 & x\le 1 \\ {x}^{2}-4x+5 & x>1\end{array}$
SOLUTION:
Absolute minima: $x=0,$ $x=2,$ $y=1;$ local maximum at $x=1,$ $y=2$
:::
For the following exercises, find the critical points of the following generic functions. Are they maxima, minima, or neither? State the necessary conditions.

:::exercise {fs-id1165042058907} type= 
PROBLEM:
$y=a{x}^{2}+bx+c,$ given that $a>0$
:::

:::exercise {fs-id1165042058977} type= 
PROBLEM:
$y={(x-1)}^{a},$ given that $a>1$ and *a* is an integer.
SOLUTION:
No maxima/minima if $a$ is odd, minimum at $x=1$ if $a$ is even
:::

## Glossary
- {def} **absolute extremum**: if $f$ has an absolute maximum or absolute minimum at $c,$ we say $f$ has an absolute extremum at $c$
- {def} **absolute maximum**: if $f(c)\ge f(x)$ for all $x$ in the domain of $f,$ we say $f$ has an absolute maximum at $c$
- {def} **absolute minimum**: if $f(c)\le f(x)$ for all $x$ in the domain of $f,$ we say $f$ has an absolute minimum at $c$
- {def} **critical point**: the point $(c\text{,}f(c))$ a critical point of $f$
- {def} **critical number**: if $f'(c)=0$ or $f'(c)$ is undefined, we say that $c$ is a critical number of $f$
- {def} **extreme value theorem**: if $f$ is a continuous function over a finite, closed interval, then $f$ has an absolute maximum and an absolute minimum
- {def} **Fermat’s theorem**: if $f$ has a local extremum at $c,$ then $c$ is a critical point of $f$
- {def} **local extremum**: if $f$ has a local maximum or local minimum at $c,$ we say $f$ has a local extremum at $c$
- {def} **local maximum**: if there exists an interval $I$ such that $f(c)\ge f(x)$ for all $x\in I,$ we say $f$ has a local maximum at $c$
- {def} **local minimum**: if there exists an interval $I$ such that $f(c)\le f(x)$ for all $x\in I,$ we say $f$ has a local minimum at $c$

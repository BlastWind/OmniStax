# Derivatives and the Shape of a Graph

## Learning Objectives {section:learning-objectives}
- Explain how the sign of the first derivative affects the shape of a function’s graph.
- State the first derivative test for critical points.
- Use concavity and inflection points to explain how the sign of the second derivative affects the shape of a function’s graph.
- Explain the concavity test for a function over an open interval.
- Explain the relationship between a function and its first and second derivatives.
- State the second derivative test for local extrema.

Earlier in this chapter we stated that if a function $f$ has a local extremum at a point $c,$ then $c$ must be a critical point of $f.$ However, a function is not guaranteed to have a local extremum at a critical point. For example, $f(x)={x}^{3}$ has a critical point at $x=0$ since $f'(x)=3{x}^{2}$ is zero at $x=0,$ but $f$ does not have a local extremum at $x=0.$ Using the results from the previous section, we are now able to determine whether a critical point of a function actually corresponds to a local extreme value. In this section, we also see how the second derivative provides information about the shape of a graph by describing whether the graph of a function curves upward or curves downward.

## The First Derivative Test
Corollary $3$ of the Mean Value Theorem showed that if the derivative of a function is positive over an interval $I$ then the function is increasing over $I.$ On the other hand, if the derivative of the function is negative over an interval $I,$ then the function is decreasing over $I$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_04_05_001} src=../../media/CNX_Calc_Figure_04_05_001.jpg
> alt: This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f’ > 0. In other words, f is increasing. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f’ > 0. In other words, f is increasing. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f’ < 0. In other words, f is decreasing. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and it is noted that at both f’ < 0. In other words, f is decreasing.
> caption: Both functions are increasing over the interval $(a,b).$ At each point $x,$ the derivative $f'(x)>0.$ Both functions are decreasing over the interval $(a,b).$ At each point $x,$ the derivative $f'(x)<0.$

A continuous function $f$ has a local maximum at point $c$ if and only if $f$ switches from increasing to decreasing at point $c.$ Similarly, $f$ has a local minimum at $c$ if and only if $f$ switches from decreasing to increasing at $c.$ If $f$ is a continuous function over an interval $I$ containing $c$ and differentiable over $I,$ except possibly at $c,$ the only way $f$ can switch from increasing to decreasing (or vice versa) at point $c$ is if ${f}^{'}$ changes sign as $x$ increases through $c.$ If $f$ is differentiable at $c,$ the only way that ${f}^{'}$ can change sign as $x$ increases through $c$ is if ${f}^{'}(c)=0.$ Therefore, for a function $f$ that is continuous over an interval $I$ containing $c$ and differentiable over $I,$ except possibly at $c,$ the only way $f$ can switch from increasing to decreasing (or vice versa) is if $f'(c)=0$ or ${f}^{'}(c)$ is undefined. Consequently, to locate local extrema for a function $f,$ we look for points $c$ in the domain of $f$ such that $f'(c)=0$ or ${f}^{'}(c)$ is undefined. Recall that such points are called critical points of $f.$
Note that $f$ need not have local extrema at a critical point. The critical points are candidates for local extrema only. In [ref:CNX_Calc_Figure_04_05_002], we show that if a continuous function $f$ has a local extremum, it must occur at a critical point, but a function may not have a local extremum at a critical point. We show that if $f$ has a local extremum at a critical point, then the sign of ${f}^{'}$ switches as $x$ increases through that point.

> FIGURE {fig:CNX_Calc_Figure_04_05_002} src=../../media/CNX_Calc_Figure_04_05_002.jpg
> alt: A function f(x) is graphed. It starts in the second quadrant and increases to x = a, which is too sharp and hence f’(a) is undefined. In this section f’ > 0. Then, f decreases from x = a to x = b (so f’ < 0 here), before increasing at x = b. It is noted that f’(b) = 0. While increasing from x = b to x = c, f’ > 0. The function has an inversion point at c, and it is marked f’(c) = 0. The function increases some more to d (so f’ > 0), which is the global maximum. It is marked that f’(d) = 0. Then the function decreases and it is marked that f’ > 0.
> caption: The function $f$ has four critical points: $a,b,c,\;\text{and}\;d.$ The function $f$ has local maxima at $a$ and $d,$ and a local minimum at $b.$ The function $f$ does not have a local extremum at $c.$ The sign of $f'$ changes at all local extrema.

Using [ref:CNX_Calc_Figure_04_05_002], we summarize the main results regarding local extrema.
- If a continuous function $f$ has a local extremum, it must occur at a critical point $c.$
- The function has a local extremum at the critical point $c$ if and only if the derivative ${f}^{'}$ switches sign as $x$ increases through $c.$
- Therefore, to test whether a function has a local extremum at a critical point $c,$ we must determine the sign of ${f}^{'}(x)$ to the left and right of $c.$
This result is known as the {term:first derivative test}.

:::note [theorem] First Derivative Test
Suppose that $f$ is a continuous function over an interval $I$ containing a critical point $c.$ If $f$ is differentiable over $I,$ except possibly at point $c,$ then $f(c)$ satisfies one of the following descriptions:
1. If ${f}^{'}$ changes sign from positive when $x<c$ to negative when $x>c,$ then $f(c)$ is a local maximum of $f.$
2. If ${f}^{'}$ changes sign from negative when $x<c$ to positive when $x>c,$ then $f(c)$ is a local minimum of $f.$
3. If $f'$ has the same sign for $x<c$ and $x>c,$ then $f(c)$ is neither a local maximum nor a local minimum of $f.$
:::
We can summarize the first derivative test as a strategy for locating local extrema.

:::note [problem-solving] Using the First Derivative Test
Consider a function $f$ that is continuous over an interval $I.$
1. Find all critical points of $f$ and divide the interval $I$ into smaller intervals using the critical points as endpoints.
2. Analyze the sign of $f'$ in each of the subintervals. If $f'$ is continuous over a given subinterval (which is typically the case), then the sign of $f'$ in that subinterval does not change and, therefore, can be determined by choosing an arbitrary test point $x$ in that subinterval and by evaluating the sign of $f'$ at that test point. Use the sign analysis to determine whether $f$ is increasing or decreasing over that interval.

  *Note:* If $f'$ is not continuous throughout $I$, then include points of discontinuity along with critical points as endpoints when dividing $I$ into subintervals.
3. Use [ref:fs-id1165042327970] and the results of step $2$ to determine whether $f$ has a local maximum, a local minimum, or neither at each of the critical points.
:::
Now let’s look at how to use this strategy to locate all local extrema for particular functions.

:::example {ex:fs-id1165043423022} Using the First Derivative Test to Find Local Extrema

:::exercise {fs-id1165042973802} type= 
PROBLEM:
Use the first derivative test to find the location of all local extrema for $f(x)={x}^{3}-3{x}^{2}-9x-1.$ Use a graphing utility to confirm your results.
SOLUTION:
Step 1. The derivative is ${f}^{'}(x)=3{x}^{2}-6x-9.$ To find the critical points, we need to find where ${f}^{'}(x)=0.$ Factoring the polynomial, we conclude that the critical points must satisfy

$3({x}^{2}-2x-3)=3(x-3)(x+1)=0.$  {eq:fs-id1165043318988}

Therefore, the critical points are $x=3,−1.$ Now divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,−1),(−1,3)\;\text{and}\;(3,\infty ).$
Step 2. Since $f'$ is a continuous function, to determine the sign of ${f}^{'}(x)$ over each subinterval, it suffices to choose a point over each of the intervals $(\text{−}\infty ,−1),(−1,3)\;\text{and}\;(3,\infty )$ and determine the sign of ${f}^{'}$ at each of these points. For example, let’s choose $x=−2,x=0,\;\text{and}\;x=4$ as test points.

> TABLE {tab:fs-id1165042978447} cols=4 class=unnumbered
> summary: This table has four rows and four columns. The first row is a header row, and it reads from left to right Interval, Test Point, Sign of f’(x) = 3(x −3)(x + 1) at Test Point, and Conclusion. Below the header, the first column reads (−∞, −1), (−1, 3), and (3, ∞). The second column reads x = −2, x = 0, and x = 4. The third column reads (+)(−)(−) = +, (+)(−)(+) = −, and (+)(+)(+) = +. The fourth column reads f is increasing, f is decreasing, and f is increasing.

| Interval | Test Point | Sign of ${f}^{'}(x)=3(x-3)(x+1)$ at Test Point | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,−1)$ | $x=−2$ | $(\text{+})(\text{−})(\text{−})=+$ | $f$ is increasing. |
| $(−1,3)$ | $x=0$ | $(\text{+})(\text{−})(\text{+})=\text{−}$ | $f$ is decreasing. |
| $(3,\infty )$ | $x=4$ | $(\text{+})(\text{+})(\text{+})=+$ | $f$ is increasing. |

Step 3. Since ${f}^{'}$ switches sign from positive to negative as $x$ increases through $–1,f$ has a local maximum at $x=−1.$ Since ${f}^{'}$ switches sign from negative to positive as $x$ increases through $3,f$ has a local minimum at $x=3.$ These analytical results agree with the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_05_003} src=../../media/CNX_Calc_Figure_04_05_008.jpg
> alt: The function f(x) = x3 – 3x2 – 9x – 1 is graphed. It has a maximum at x = −1 and a minimum at x = 3. The function is increasing before x = −1, decreasing until x = 3, and then increasing after that.
> caption: The function $f$ has a maximum at $x=−1$ and a minimum at $x=3$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043317506} type= 
PROBLEM:
Use the first derivative test to locate all local extrema for $f(x)=\text{−}{x}^{3}+\frac{3}{2}{x}^{2}+18x.$
SOLUTION:
$f$ has a local minimum at $−2$ and a local maximum at $3.$
COMMENTARY: Hint
Find all critical points of $f$ and determine the signs of ${f}^{'}(x)$ over particular intervals determined by the critical points.
:::
:::

:::example {ex:fs-id1165043312782} Using the First Derivative Test

:::exercise {fs-id1165042640287} type= 
PROBLEM:
Use the first derivative test to find the location of all local extrema for $f(x)=5{x}^{1\text{/}3}-{x}^{5\text{/}3}.$ Use a graphing utility to confirm your results.
SOLUTION:
Step 1. The derivative is

${f}^{'}(x)=\frac{5}{3}{x}^{−2\text{/}3}-\frac{5}{3}{x}^{2\text{/}3}=\frac{5}{3{x}^{2\text{/}3}}-\frac{5{x}^{2\text{/}3}}{3}=\frac{5-5{x}^{4\text{/}3}}{3{x}^{2\text{/}3}}=\frac{5(1-{x}^{4\text{/}3})}{3{x}^{2\text{/}3}}.$  {eq:fs-id1165043066545}

The derivative ${f}^{'}(x)=0$ when $1-{x}^{4\text{/}3}=0.$ Therefore, ${f}^{'}(x)=0$ at $x=\text{±}1.$ The derivative ${f}^{'}(x)$ is undefined at $x=0.$ Therefore, we have three critical points: $x=0,$ $x=1,$ and $x=−1.$ Consequently, divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,−1),(−1,0),(0,1),$ and $(1,\infty ).$
Step 2: Since ${f}^{'}$ is continuous over each subinterval, it suffices to choose a test point $x$ in each of the intervals from step $1$ and determine the sign of ${f}^{'}$ at each of these points. The points $x=−2,x=-\frac{1}{2},x=\frac{1}{2},\;\text{and}\;x=2$ are test points for these intervals.

> TABLE {tab:fs-id1165043032734} cols=4 class=unnumbered
> summary: This table has five rows and four columns. The first row is a header row, and it reads from left to right Interval, Test Point, Sign of f’(x) = 5(1 – x4/3)/(3x2/3) at Test Point, and Conclusion. Below the header, the first column reads (−∞, −1), (−1, 0), (0, 1), and (1, ∞). The second column reads x = −2, x = −1/2, x = 1/2, and x = 2. The third column reads (+)(−)/(+) = −, (+)(+)/(+) = +, (+)(+)/(+) = +, and (+)(−)/(+) = −. The fourth column reads f is decreasing, f is increasing, f is increasing, and f is decreasing.

| Interval | Test Point | Sign of ${f}^{'}(x)=\frac{5(1-{x}^{4\text{/}3})}{3{x}^{2\text{/}3}}$ at Test Point | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,−1)$ | $x=−2$ | $\frac{(\text{+})(\text{−})}{+}=\text{−}$ | $f$ is decreasing. |
| $(−1,0)$ | $x=-\frac{1}{2}$ | $\frac{(\text{+})(\text{+})}{+}=+$ | $f$ is increasing. |
| $(0,1)$ | $x=\frac{1}{2}$ | $\frac{(\text{+})(\text{+})}{+}=+$ | $f$ is increasing. |
| $(1,\infty )$ | $x=2$ | $\frac{(\text{+})(\text{−})}{+}=\text{−}$ | $f$ is decreasing. |

Step 3: Since $f$ is decreasing over the interval $(\text{−}\infty ,−1)$ and increasing over the interval $(−1,0),$ $f$ has a local minimum at $x=−1.$ Since $f$ is increasing over the interval $(−1,0)$ and the interval $(0,1),$ $f$ does not have a local extremum at $x=0.$ Since $f$ is increasing over the interval $(0,1)$ and decreasing over the interval $(1,\infty ),f$ has a local maximum at $x=1.$ The analytical results agree with the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_05_004} src=../../media/CNX_Calc_Figure_04_05_009.jpg
> alt: The function f(x) = 5x1/3 – x5/3 is graphed. It decreases to its local minimum at x = −1, increases to x = 1, and then decreases after that.
> caption: The function *f* has a local minimum at $x=−1$ and a local maximum at $x=1.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043428512} type= 
PROBLEM:
Use the first derivative test to find all local extrema for $f(x)=\sqrt[3]{x-1}.$
SOLUTION:
$f$ has no local extrema because ${f}^{'}$ does not change sign at $x=1.$
COMMENTARY: Hint
The only critical point of $f$ is $x=1.$
:::
:::

## Concavity and Points of Inflection
We now know how to determine where a function is increasing or decreasing. However, there is another issue to consider regarding the shape of the graph of a function. If the graph curves, does it curve upward or curve downward? This notion is called the {term:concavity} of the function.
[ref:CNX_Calc_Figure_04_05_005](a) shows a function $f$ with a graph that curves upward. As $x$ increases, the slope of the tangent line increases. Thus, since the derivative increases as $x$ increases, ${f}^{'}$ is an increasing function. We say this function $f$ is concave up. [ref:CNX_Calc_Figure_04_05_005](b) shows a function $f$ that curves downward. As $x$ increases, the slope of the tangent line decreases. Since the derivative decreases as $x$ increases, ${f}^{'}$ is a decreasing function. We say this function $f$ is concave down.

:::note [definition] Definition
Let $f$ be a function that is differentiable over an open interval $I.$ If ${f}^{'}$ is increasing over $I,$ we say $f$ is {term:concave up} over $I.$ If ${f}^{'}$ is decreasing over $I,$ we say $f$ is {term:concave down} over $I.$
:::

> FIGURE {fig:CNX_Calc_Figure_04_05_005} src=../../media/CNX_Calc_Figure_04_05_010.jpg
> alt: This figure is broken into four figures labeled a, b, c, and d. Figure a shows a function increasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing more. It is noted that f’ is increasing and f is concave up. Figure b shows a function increasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are increasing, but the one taken further to the right is increasing less. It is noted that f’ is decreasing and f is concave down. Figure c shows a function decreasing concavely from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing less. It is noted that f’ is increasing and f is concave up. Figure d shows a function decreasing convexly from (a, f(a)) to (b, f(b)). At two points the derivative is taken and both are decreasing, but the one taken further to the right is decreasing more. It is noted that f’ is decreasing and f is concave down.
> caption: (a), (c) Since $f'$ is increasing over the interval $(a,b),$ we say $f$ is concave up over $(a,b).$ (b), (d) Since $f'$ is decreasing over the interval $(a,b),$ we say $f$ is concave down over $(a,b).$

In general, without having the graph of a function $f,$ how can we determine its concavity? By definition, a function $f$ is concave up if ${f}^{'}$ is increasing. From Corollary $3,$ we know that if ${f}^{'}$ is a differentiable function, then ${f}^{'}$ is increasing if its derivative ${f}^{''}(x)>0.$ Therefore, a function $f$ that is twice differentiable is concave up when ${f}^{''}(x)>0.$ Similarly, a function $f$ is concave down if ${f}^{'}$ is decreasing. We know that a differentiable function ${f}^{'}$ is decreasing if its derivative ${f}^{''}(x)<0.$ Therefore, a twice-differentiable function $f$ is concave down when ${f}^{''}(x)<0.$ Applying this logic is known as the {term:concavity test}.

:::note [theorem] Test for Concavity
Let $f$ be a function that is twice differentiable over an interval $I.$
1. If ${f}^{''}(x)>0$ for all $x\in I,$ then $f$ is concave up over $I.$
2. If ${f}^{''}(x)<0$ for all $x\in I,$ then $f$ is concave down over $I.$
:::
We conclude that we can determine the concavity of a function $f$ by looking at the second derivative of $f.$ In addition, we observe that a function $f$ can switch concavity ([ref:CNX_Calc_Figure_04_05_006]). However, a continuous function can switch concavity only at a point $x$ if ${f}^{''}(x)=0$ or ${f}^{''}(x)$ is undefined. Consequently, to determine the intervals where a function $f$ is concave up and concave down, we look for those values of $x$ where ${f}^{''}(x)=0$ or ${f}^{''}(x)$ is undefined. When we have determined these points, we divide the domain of $f$ into smaller intervals and determine the sign of ${f}^{''}$ over each of these smaller intervals. If ${f}^{''}$ changes sign as we pass through a point $x,$ then $f$ changes concavity. It is important to remember that a function $f$ may not change concavity at a point $x$ even if ${f}^{''}(x)=0$ or ${f}^{''}(x)$ is undefined. If, however, $f$ does change concavity at a point $a$ and $f$ is continuous at $a,$ we say the point $(a,f(a))$ is an inflection point of $f.$

:::note [definition] Definition
If $f$ is continuous at $a$ and $f$ changes concavity at $a,$ the point $(a,f(a))$ is an {term:inflection point} of $f.$
:::

> FIGURE {fig:CNX_Calc_Figure_04_05_006} src=../../media/CNX_Calc_Figure_04_05_004.jpg
> alt: A sinusoidal function is shown that has been shifted into the first quadrant. The function starts decreasing, so f’ < 0 and f’’ > 0. The function reaches the local minimum and starts increasing, so f’ > 0 and f’’ > 0. It is noted that the slope is increasing for these two intervals. The function then reaches an inflection point (a, f(a)) and from here the slop is decreasing even though the function continues to increase, so f’ > 0 and f’’ < 0. The function reaches the maximum and then starts decreasing, so f’ < 0 and f’’ < 0.
> caption: Since ${f}^{''}(x)>0$ for $x<a,$ the function $f$ is concave up over the interval $(\text{−}\infty ,a).$ Since ${f}^{''}(x)<0$ for $x>a,$ the function $f$ is concave down over the interval $(a,\infty ).$ The point $(a,f(a))$ is an inflection point of $f.$

:::example {ex:fs-id1165042558993} Testing for Concavity

:::exercise {fs-id1165042558995} type= 
PROBLEM:
For the function $f(x)={x}^{3}-6{x}^{2}+9x+30,$ determine all intervals where $f$ is concave up and all intervals where $f$ is concave down. List all inflection points for $f.$ Use a graphing utility to confirm your results.
SOLUTION:
To determine concavity, we need to find the second derivative ${f}^{''}(x).$ The first derivative is $f'(x)=3{x}^{2}-12x+9,$ so the second derivative is ${f}^{''}(x)=6x-12.$ If the function changes concavity, it occurs either when ${f}^{''}(x)=0$ or ${f}^{''}(x)$ is undefined. Since ${f}^{''}$ is defined for all real numbers $x,$ we need only find where ${f}^{''}(x)=0.$ Solving the equation $6x-12=0,$ we see that $x=2$ is the only place where $f$ could change concavity. We now test points over the intervals $(\text{−}\infty ,2)$ and $(2,\infty )$ to determine the concavity of $f.$ The points $x=0$ and $x=3$ are test points for these intervals.

> TABLE {tab:fs-id1165042960171} cols=4 class=unnumbered
> summary: This table has three rows and four columns. The first row is a header row, and it reads from left to right Interval, Test Point, Sign of f’’(x) = 6x – 12 at Test Point, and Conclusion. Below the header, the first column reads (−∞, 2) and (2, ∞). The second column reads x = 0 and x = 3. The third column reads − and +. The fourth column reads f is concave down and f is concave up.

| Interval | Test Point | Sign of ${f}^{''}(x)=6x-12$ at Test Point | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,2)$ | $x=0$ | $-$ | $f$ is concave down |
| $(2,\infty )$ | $x=3$ | $+$ | $f$ is concave up. |

We conclude that $f$ is concave down over the interval $(\text{−}\infty ,2)$ and concave up over the interval $(2,\infty ).$ Since $f$ changes concavity at $x=2,$ the point $(2,f(2))=(2,32)$ is an inflection point. [ref:CNX_Calc_Figure_04_05_007] confirms the analytical results.

> FIGURE {fig:CNX_Calc_Figure_04_05_007} src=../../media/CNX_Calc_Figure_04_05_011.jpg
> alt: The function f(x) = x3 – 6x2 + 9x + 30 is graphed. The inflection point (2, 32) is marked, and it is roughly equidistant from the two local extrema.
> caption: The given function has a point of inflection at $(2,32)$ where the graph changes concavity.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043321427} type= 
PROBLEM:
For $f(x)=\text{−}{x}^{3}+\frac{3}{2}{x}^{2}+18x,$ find all intervals where $f$ is concave up and all intervals where $f$ is concave down.
SOLUTION:
$f$ is concave up over the interval $(\text{−}\infty ,\frac{1}{2})$ and concave down over the interval $(\frac{1}{2},\infty )$
COMMENTARY: Hint
Find where ${f}^{''}(x)=0.$
:::
:::
We now summarize, in [ref:fs-id1165043353366], the information that the first and second derivatives of a function $f$ provide about the graph of $f,$ and illustrate this information in [ref:CNX_Calc_Figure_04_05_008].

> TABLE {tab:fs-id1165043353366} cols=4
> title: What Derivatives Tell Us about Graphs
> summary: This table has five rows and four columns. The first row is a header row, and it reads from left to right Sign of f’, Sign of f’’, Is f increasing or decreasing?, and Concavity. Below the header, the first column reads Positive, Positive, Negative, and Negative. The second column reads Positive, Negative, Positive, and Negative. The third column reads Increasing, Increasing, Decreasing, and Decreasing. The fourth column reads Concave up, Concave down, Concave up, and Concave down.

| Sign of $f'$ | Sign of ${f}^{''}$ | Is $f$ increasing or decreasing? | Concavity |
| --- | --- | --- | --- |
| Positive | Positive | Increasing | Concave up |
| Positive | Negative | Increasing | Concave down |
| Negative | Positive | Decreasing | Concave up |
| Negative | Negative | Decreasing | Concave down |

> FIGURE {fig:CNX_Calc_Figure_04_05_008} src=../../media/CNX_Calc_Figure_04_05_005.jpg
> alt: A function is graphed in the first quadrant. It is broken up into four sections, with the breaks coming at the local minimum, inflection point, and local maximum, respectively. The first section is decreasing and concave up; here, f’ < 0 and f’’ > 0. The second section is increasing and concave up; here, f’ > 0 and f’’ > 0. The third section is increasing and concave down; here, f’ > 0 and f’’ < 0. The fourth section is increasing and concave down; here, f’ < 0 and f’’ < 0.
> caption: Consider a twice-differentiable function $f$ over an open interval $I.$ If $f'(x)>0$ for all $x\in I,$ the function is increasing over $I.$ If $f'(x)<0$ for all $x\in I,$ the function is decreasing over $I.$ If ${f}^{''}(x)>0$ for all $x\in I,$ the function is concave up. If ${f}^{''}(x)<0$ for all $x\in I,$ the function is concave down on $I.$

## The Second Derivative Test
The first derivative test provides an analytical tool for finding local extrema, but the second derivative can also be used to locate extreme values. Using the second derivative can sometimes be a simpler method than using the first derivative.
We know that if a continuous function has local extrema, it must occur at a critical point. However, a function need not have local extrema at a critical point. Here we examine how the {term:second derivative test} can be used to determine whether a function has a local extremum at a critical point. Let $f$ be a twice-differentiable function such that ${f}^{'}(a)=0$ and ${f}^{''}$ is continuous over an open interval $I$ containing $a.$ Suppose ${f}^{''}(a)<0.$ Since ${f}^{''}$ is continuous over $I,$ ${f}^{''}(x)<0$ for all $x\in I$ ([ref:CNX_Calc_Figure_04_05_009]). Then, by Corollary $3,$ ${f}^{'}$ is a decreasing function over $I.$ Since ${f}^{'}(a)=0,$ we conclude that for all $x\in I,{f}^{'}(x)>0$ if $x<a$ and ${f}^{'}(x)<0$ if $x>a.$ Therefore, by the first derivative test, $f$ has a local maximum at $x=a.$ On the other hand, suppose there exists a point $b$ such that ${f}^{'}(b)=0$ but ${f}^{''}(b)>0.$ Since ${f}^{''}$ is continuous over an open interval $I$ containing $b,$ then ${f}^{''}(x)>0$ for all $x\in I$ ([ref:CNX_Calc_Figure_04_05_009]). Then, by Corollary $3,{f}^{'}$ is an increasing function over $I.$ Since ${f}^{'}(b)=0,$ we conclude that for all $x\in I,$ ${f}^{'}(x)<0$ if $x<b$ and ${f}^{'}(x)>0$ if $x>b.$ Therefore, by the first derivative test, $f$ has a local minimum at $x=b.$

> FIGURE {fig:CNX_Calc_Figure_04_05_009} src=../../media/CNX_Calc_Figure_04_05_006.jpg
> alt: A function f(x) is graphed in the first quadrant with a and b marked on the x-axis. The function is vaguely sinusoidal, increasing first to x = a, then decreasing to x = b, and increasing again. At (a, f(a)), the tangent is marked, and it is noted that f’(a) = 0 and f’’(a) < 0. At (b, f(b)), the tangent is marked, and it is noted f’(b) = 0 and f’’(b) > 0.
> caption: Consider a twice-differentiable function $f$ such that ${f}^{''}$ is continuous. Since $f'(a)=0$ and ${f}^{''}(a)<0,$ there is an interval $I$ containing $a$ such that for all $x$ in $I,$ $f$ is increasing if $x<a$ and $f$ is decreasing if $x>a.$ As a result, $f$ has a local maximum at $x=a.$ Since $f'(b)=0$ and ${f}^{''}(b)>0,$ there is an interval $I$ containing $b$ such that for all $x$ in $I,$ $f$ is decreasing if $x<b$ and $f$ is increasing if $x>b.$ As a result, $f$ has a local minimum at $x=b.$

:::note [theorem] Second Derivative Test
Suppose ${f}^{'}(c)=0,{f}^{''}$ is continuous over an interval containing $c.$
1. If ${f}^{''}(c)>0,$ then $f$ has a local minimum at $c.$
2. If ${f}^{''}(c)<0,$ then $f$ has a local maximum at $c.$
3. If ${f}^{''}(c)=0,$ then the test is inconclusive.
:::
Note that for case iii. when ${f}^{''}(c)=0,$ then $f$ may have a local maximum, local minimum, or neither at $c.$ For example, the functions $f(x)={x}^{3},$ $f(x)={x}^{4},$ and $f(x)=\text{−}{x}^{4}$ all have critical points at $x=0.$ In each case, the second derivative is zero at $x=0.$ However, the function $f(x)={x}^{4}$ has a local minimum at $x=0$ whereas the function $f(x)=\text{−}{x}^{4}$ has a local maximum at $x,$ and the function $f(x)={x}^{3}$ does not have a local extremum at $x=0.$
Let’s now look at how to use the second derivative test to determine whether $f$ has a local maximum or local minimum at a critical point $c$ where ${f}^{'}(c)=0.$

:::example {ex:fs-id1165042710827} Using the Second Derivative Test

:::exercise {fs-id1165042710829} type= 
PROBLEM:
Use the second derivative to find the location of all local extrema for $f(x)={x}^{5}-5{x}^{3}.$
SOLUTION:
To apply the second derivative test, we first need to find critical points $c$ where ${f}^{'}(c)=0.$ The derivative is ${f}^{'}(x)=5{x}^{4}-15{x}^{2}.$ Therefore, ${f}^{'}(x)=5{x}^{4}-15{x}^{2}=5{x}^{2}({x}^{2}-3)=0$ when $x=0,\text{±}\sqrt{3}.$
To determine whether $f$ has local extrema at any of these points, we need to evaluate the sign of ${f}^{''}$ at these points. The second derivative is

${f}^{''}(x)=20{x}^{3}-30x=10x(2{x}^{2}-3).$  {eq:fs-id1165042318723}

In the following table, we evaluate the second derivative at each of the critical points and use the second derivative test to determine whether $f$ has a local maximum or local minimum at any of these points.

> TABLE {tab:fs-id1165042705774} cols=3 class=unnumbered
> summary: This table has four rows and three columns. The first row is a header row, and it reads x, f’’(x), and Conclusion. After the header, the first column reads negative square root of 3, 0, and square root of 3. The second column reads negative 30 times the square root of 3, 0, and 30 times the square root of 3. The third column reads Local maxiumum, Second derivative test is inconclusive, and Local minimum.

| $x$ | ${f}^{''}(x)$ | Conclusion |
| --- | --- | --- |
| $\text{−}\sqrt{3}$ | $−30\sqrt{3}$ | Local maximum |
| $0$ | $0$ | Second derivative test is inconclusive |
| $\sqrt{3}$ | $30\sqrt{3}$ | Local minimum |

By the second derivative test, we conclude that $f$ has a local maximum at $x=\text{−}\sqrt{3}$ and $f$ has a local minimum at $x=\sqrt{3}.$ The second derivative test is inconclusive at $x=0.$ To determine whether $f$ has local extrema at $x=0,$ we apply the first derivative test. To evaluate the sign of ${f}^{'}(x)=5{x}^{2}({x}^{2}-3)$ for $x\in (\text{−}\sqrt{3},0)$ and $x\in (0,\sqrt{3}),$ let $x=−1$ and $x=1$ be the two test points. Since ${f}^{'}(−1)<0$ and ${f}^{'}(1)<0,$ we conclude that $f$ is decreasing on both intervals and, therefore, $f$ does not have local extrema at $x=0$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_05_010} src=../../media/CNX_Calc_Figure_04_05_007.jpg
> alt: The function f(x) = x5 – 5x3 is graphed. The function increases to (negative square root of 3, 10), then decreases to an inflection point at 0, continues decreasing to (square root of 3, −10), and then increases.
> caption: The function $f$ has a local maximum at $x=\text{−}\sqrt{3}$ and a local minimum at $x=\sqrt{3}$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042373296} type= 
PROBLEM:
Consider the function $f(x)={x}^{3}-(\frac{3}{2}){x}^{2}-18x.$ The points $c=3,−2$ satisfy ${f}^{'}(c)=0.$ Use the second derivative test to determine whether $f$ has a local maximum or local minimum at those points.
SOLUTION:
$f$ has a local maximum at $−2$ and a local minimum at $3.$
COMMENTARY: Hint
${f}^{''}(x)=6x-3$
:::
:::
We have now developed the tools we need to determine where a function is increasing and decreasing, as well as acquired an understanding of the basic shape of the graph. In the next section we discuss what happens to a function as $x\to \text{±}\infty .$ At that point, we have enough tools to provide accurate graphs of a large variety of functions.

## Key Concepts {section:key-concepts}
- If $c$ is a critical point of $f$ and ${f}^{'}(x)>0$ for $x<c$ and ${f}^{'}(x)<0$ for $x>c,$ then $f$ has a local maximum at $c.$
- If $c$ is a critical point of $f$ and ${f}^{'}(x)<0$ for $x<c$ and ${f}^{'}(x)>0$ for $x>c,$ then $f$ has a local minimum at $c.$
- If ${f}^{''}(x)>0$ over an interval $I,$ then $f$ is concave up over $I.$
- If ${f}^{''}(x)<0$ over an interval $I,$ then $f$ is concave down over $I.$
- If ${f}^{'}(c)=0$ and ${f}^{''}(c)>0,$ then $f$ has a local minimum at $c.$
- If ${f}^{'}(c)=0$ and ${f}^{''}(c)<0,$ then $f$ has a local maximum at $c.$
- If ${f}^{'}(c)=0$ and ${f}^{''}(c)=0,$ then evaluate ${f}^{'}(x)$ at a test point $x$ to the left of $c$ and a test point $x$ to the right of $c,$ to determine whether $f$ has a local extremum at $c.$

##  {section:section-exercises}

:::exercise {fs-id1165043390976} type= 
PROBLEM:
If $c$ is a critical point of $f(x),$ when is there no local maximum or minimum at $c?$ Explain.
:::

:::exercise {fs-id1165042474277} type= 
PROBLEM:
For the function $y={x}^{3},$ is $x=0$ both an inflection point and a local maximum/minimum?
SOLUTION:
It is not a local maximum/minimum because ${f}^{'}$ does not change sign
:::

:::exercise {fs-id1165043251844} type= 
PROBLEM:
For the function $y={x}^{3},$ is $x=0$ an inflection point?
:::

:::exercise {fs-id1165043286677} type= 
PROBLEM:
Is it possible for a point $c$ to be both an inflection point and a local extremum of a twice differentiable function?
SOLUTION:
No
:::

:::exercise {fs-id1165043348571} type= 
PROBLEM:
Why do you need continuity for the first derivative test? Come up with an example.
:::

:::exercise {fs-id1165043348587} type= 
PROBLEM:
Explain whether a concave-down function has to cross $y=0$ for some value of $x.$
SOLUTION:
False; for example, $y=\sqrt{x}.$
:::

:::exercise {fs-id1165043327512} type= 
PROBLEM:
Explain whether a polynomial of degree $2$ can have an inflection point.
:::
For the following exercises, analyze the graphs of ${f}^{'},$ then list all intervals where $f$ is increasing or decreasing.

:::exercise {fs-id1165042970465} type= 
PROBLEM:

> IMAGE {img:fs-id1165042970473} src=../../media/CNX_Calc_Figure_04_05_201.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at (−2, 0). Then it continues increasing a little before decreasing and crossing the x axis at (−1, 0). It achieves a local minimum at (1, −6) before increasing and crossing the x axis at (2, 0).

SOLUTION:
Increasing for $−2<x<−1$ and $x>2;$ decreasing for $x<−2$ and $−1<x<2$
:::

:::exercise {fs-id1165043428273} type= 
PROBLEM:

> IMAGE {img:fs-id1165043317452} src=../../media/CNX_Calc_Figure_04_05_202.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at (−2, 0). Then it continues increasing a little before decreasing and touching the x axis at (−1, 0). It then increases a little before decreasing and crossing the x axis at the origin. The function then decreases to a local minimum before increasing, crossing the x-axis at (1, 0), and continuing to increase.

:::

:::exercise {fs-id1165043395896} type= 
PROBLEM:

> IMAGE {img:fs-id1165043331170} src=../../media/CNX_Calc_Figure_04_05_203.jpg
> alt: The function f’(x) is graphed. The function starts negative and touches the x axis at the origin. Then it decreases a little before increasing to cross the x axis at (1, 0) and continuing to increase.

SOLUTION:
Decreasing for $x<1,$ increasing for $x>1$
:::

:::exercise {fs-id1165043281857} type= 
PROBLEM:

> IMAGE {img:fs-id1165043281865} src=../../media/CNX_Calc_Figure_04_05_204.jpg
> alt: The function f’(x) is graphed. The function starts positive and decreases to touch the x axis at (−1, 0). Then it increases to (0, 4.5) before decreasing to touch the x axis at (1, 0). Then the function increases.

:::

:::exercise {fs-id1165043183805} type= 
PROBLEM:

> IMAGE {img:fs-id1165043183809} src=../../media/CNX_Calc_Figure_04_05_205.jpg
> alt: The function f’(x) is graphed. The function starts at (−2, 0), decreases to (−1.5, −1.5), increases to (−1, 0), and continues increasing before decreasing to the origin. Then the other side is symmetric: that is, the function increases and then decreases to pass through (1, 0). It continues decreasing to (1.5, −1.5), and then increase to (2, 0).

SOLUTION:
Decreasing for $−2<x<−1$ and $1<x<2;$ increasing for $−1<x<1$ and $x<−2$ and $x>2$
:::
For the following exercises, analyze the graphs of ${f}^{'},$ then list all intervals where
a. $f$ is increasing and decreasing and
b. the minima and maxima are located.

:::exercise {fs-id1165042373730} type= 
PROBLEM:

> IMAGE {img:fs-id1165042373738} src=../../media/CNX_Calc_Figure_04_05_206.jpg
> alt: The function f’(x) is graphed. The function starts at (−2, 0), decreases for a little and then increases to (−1, 0), continues increasing before decreasing to the origin, at which point it increases.

:::

:::exercise {fs-id1165042373655} type= 
PROBLEM:

> IMAGE {img:fs-id1165042373659} src=../../media/CNX_Calc_Figure_04_05_207.jpg
> alt: The function f’(x) is graphed. The function starts at (−2, 0), increases and then decreases to (−1, 0), decreases and then increases to an inflection point at the origin. Then the function increases and decreases to cross (1, 0). It continues decreasing and then increases to (2, 0).

SOLUTION:
a. Increasing over $−2<x<−1,0<x<1,x>2,$ decreasing over $x<−2,$ $−1<x<0,1<x<2;$ b. maxima at $x=−1$ and $x=1,$ minima at $x=−2$ and $x=0$ and $x=2$
:::

:::exercise {fs-id1165043323823} type= 
PROBLEM:

> IMAGE {img:fs-id1165042632604} src=../../media/CNX_Calc_Figure_04_05_208.jpg
> alt: The function f’(x) is graphed from x = −2 to x = 2. It starts near zero at x = −2, but then increases rapidly and remains positive for the entire length of the graph.

:::

:::exercise {fs-id1165042331804} type= 
PROBLEM:

> IMAGE {img:fs-id1165042331810} src=../../media/CNX_Calc_Figure_04_05_209.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at the origin, which is an inflection point. Then it continues increasing.

SOLUTION:
a. Increasing over $x>0,$ decreasing over $x<0;$ b. Minimum at $x=0$
:::

:::exercise {fs-id1165043108776} type= 
PROBLEM:

> IMAGE {img:fs-id1165043108784} src=../../media/CNX_Calc_Figure_04_05_210.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at (−1, 0). Then it continues increasing a little before decreasing and touching the x axis at the origin. It increases again and then decreases to (1, 0). Then it increases.

:::
For the following exercises, analyze the graphs of ${f}^{'},$ then list all inflection points and intervals where $f$ is concave up and concave down.

:::exercise {fs-id1165043395336} type= 
PROBLEM:

> IMAGE {img:fs-id1165043395342} src=../../media/CNX_Calc_Figure_04_05_211.jpg
> alt: The function f’(x) is graphed. The function is linear and starts negative. It crosses the x axis at the origin.

SOLUTION:
Concave up on all $x,$ no inflection points
:::

:::exercise {fs-id1165043312627} type= 
PROBLEM:

> IMAGE {img:fs-id1165043312634} src=../../media/CNX_Calc_Figure_04_05_212.jpg
> alt: The function f’(x) is graphed. It is an upward-facing parabola with 0 as its local minimum.

:::

:::exercise {fs-id1165043431030} type= 
PROBLEM:

> IMAGE {img:fs-id1165043431036} src=../../media/CNX_Calc_Figure_04_05_213.jpg
> alt: The function f’(x) is graphed. The function resembles the graph of x3: that is, it starts negative and crosses the x axis at the origin. Then it continues increasing.

SOLUTION:
Concave up on all $x,$ no inflection points
:::

:::exercise {fs-id1165043348481} type= 
PROBLEM:

> IMAGE {img:fs-id1165043348489} src=../../media/CNX_Calc_Figure_04_05_214.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at (−0.5, 0). Then it continues increasing to (0, 1.5) before decreasing and touching the x axis at (1, 0). It then increases.

:::

:::exercise {fs-id1165042364601} type= 
PROBLEM:

> IMAGE {img:fs-id1165042364609} src=../../media/CNX_Calc_Figure_04_05_215.jpg
> alt: The function f’(x) is graphed. The function starts negative and crosses the x axis at (−1, 0). Then it continues increasing to a local maximum at (0, 1), at which point it decreases and touches the x axis at (1, 0). It then increases.

SOLUTION:
Concave up for $x<0$ and $x>1,$ concave down for $0<x<1,$ inflection points at $x=0$ and $x=1$
:::
For the following exercises, draw a graph that satisfies the given specifications for the domain $xϵ[−3,3].$ The function does not have to be continuous or differentiable.

:::exercise {fs-id1165042708286} type= 
PROBLEM:
$f(x)>0,{f}^{'}(x)>0$ over $x>1,−3<x<0,{f}^{'}(x)=0$ over $0<x<1$
:::

:::exercise {fs-id1165042364310} type= 
PROBLEM:
${f}^{'}(x)>0$ over $x>2,−3<x<−1,{f}^{'}(x)<0$ over $−1<x<2,{f}^{''}(x)<0$ for all $x$
SOLUTION:
Answers will vary
:::

:::exercise {fs-id1165042705932} type= 
PROBLEM:
${f}^{''}(x)<0$ over $−1<x<1,{f}^{''}(x)>0,−3<x<−1,1<x<3,$ local maximum at $x=0,$ local minima at $x=\text{±}2$
:::

:::exercise {fs-id1165042333449} type= 
PROBLEM:
There is a local maximum at $x=2,$ local minimum at $x=1,$ and the graph is neither concave up nor concave down.
SOLUTION:
Answers will vary
:::

:::exercise {fs-id1165042418832} type= 
PROBLEM:
There are local maxima at $x=\text{±}1,$ the function is concave up for all $x,$ and the function remains positive for all $x.$
:::
For the following exercises, determine
a. intervals where $f$ is increasing or decreasing and
b. local minima and maxima of $f.$
If needed, use a calculator to graph the functions, but show your work.

:::exercise {fs-id1165042709552} type= 
PROBLEM:
$f(x)=\text{sin}\;x+{\text{sin}}^{3}x$ over $\text{−}\pi <x<\pi$
SOLUTION:
a. Increasing over $-\frac{\pi}{2}<x<\frac{\pi}{2},$ decreasing over $x<-\frac{\pi}{2},x>\frac{\pi}{2}$ b. Local maximum at $x=\frac{\pi}{2};$ local minimum at $x=-\frac{\pi}{2}$
:::

:::exercise {fs-id1165043327552} type= 
PROBLEM:
$f(x)={x}^{2}+\text{cos}\;x$
:::
For the following exercises, determine a. intervals where $f$ is concave up or concave down, and b. the inflection points of $f.$

:::exercise {fs-id1165042705948} type= 
PROBLEM:
$f(x)={x}^{3}-4{x}^{2}+x+2$
SOLUTION:
a. Concave up for $x>\frac{4}{3},$ concave down for $x<\frac{4}{3}$ b. Inflection point at $x=\frac{4}{3}$
:::
For the following exercises, determine
a. intervals where $f$ is increasing or decreasing,
b. local minima and maxima of $f,$
c. intervals where $f$ is concave up and concave down, and
d. the inflection points of $f.$

:::exercise {fs-id1165043253476} type= 
PROBLEM:
$f(x)={x}^{2}-6x$
:::

:::exercise {fs-id1165043430810} type= 
PROBLEM:
$f(x)={x}^{3}-6{x}^{2}$
SOLUTION:
a. Increasing over $x<0$ and $x>4,$ decreasing over $0<x<4$ b. Maximum at $x=0,$ minimum at $x=4$ c. Concave up for $x>2,$ concave down for $x<2$ d. Infection point at $x=2$
:::

:::exercise {fs-id1165042369583} type= 
PROBLEM:
$f(x)={x}^{4}-6{x}^{3}$
:::

:::exercise {fs-id1165042710974} type= 
PROBLEM:
$f(x)={x}^{11}-6{x}^{10}$
SOLUTION:
a. Increasing over $x<0$ and $x>\frac{60}{11},$ decreasing over $0<x<\frac{60}{11}$ b. Minimum at $x=\frac{60}{11}$, local maximum at x = 0 c. Concave down for $x<\frac{54}{11},$ concave up for $x>\frac{54}{11}$ d. Inflection point at $x=\frac{54}{11}$
:::

:::exercise {fs-id1165042327371} type= 
PROBLEM:
$f(x)=x+{x}^{2}-{x}^{3}$
:::

:::exercise {fs-id1165043424018} type= 
PROBLEM:
$f(x)={x}^{2}+x+1$
SOLUTION:
a. Increasing over $x>-\frac{1}{2},$ decreasing over $x<-\frac{1}{2}$ b. Minimum at $x=-\frac{1}{2}$ c. Concave up for all $x$ d. No inflection points
:::

:::exercise {fs-id1165042710942} type= 
PROBLEM:
$f(x)={x}^{3}+{x}^{4}$
:::
For the following exercises, determine
a. intervals where $f$ is increasing or decreasing,
b. local minima and maxima of $f,$
c. intervals where $f$ is concave up and concave down, and
d. the inflection points of $f.$ Sketch the curve, then use a calculator to compare your answer. If you cannot determine the exact answer analytically, use a calculator.

:::exercise {fs-id1165043430751} type= 
PROBLEM:
**[T]** $f(x)=\text{sin}(\pi x)-\text{cos}(\pi x)$ over $x=[−1,1]$
SOLUTION:
a. Increases over $-\frac{1}{4}<x<\frac{3}{4},$ decreases over $x>\frac{3}{4}$ and $x<-\frac{1}{4}$ b. Minimum at $x=-\frac{1}{4},$ maximum at $x=\frac{3}{4}$ c. Concave up for $-\frac{3}{4}<x<\frac{1}{4},$ concave down for $x<-\frac{3}{4}$ and $x>\frac{1}{4}$ d. Inflection points at $x=-\frac{3}{4},x=\frac{1}{4}$
:::

:::exercise {fs-id1165043174067} type= 
PROBLEM:
**[T]** $f(x)=x+\text{sin}(2x)$ over $x=[-\frac{\pi}{2},\frac{\pi}{2}]$
:::

:::exercise {fs-id1165042315743} type= 
PROBLEM:
**[T]** $f(x)=\text{sin}\;x+\text{tan}\;x$ over $(-\frac{\pi}{2},\frac{\pi}{2})$
SOLUTION:
a. Increasing for all $x$ b. No local minimum or maximum c. Concave up for $x>0,$ concave down for $x<0$ d. Inflection point at $x=0$
:::

:::exercise {fs-id1165042323656} type= 
PROBLEM:
**[T]** $f(x)={(x-2)}^{2}{(x-4)}^{2}$
:::

:::exercise {fs-id1165042327441} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{1-x},x≠1$
SOLUTION:
a. Increasing for all $x$ where defined b. No local minima or maxima c. Concave up for $x<1;$ concave down for $x>1$ d. No inflection points in domain
:::

:::exercise {fs-id1165042708214} type= 
PROBLEM:
**[T]** $f(x)=\frac{\text{sin}\;x}{x}$ over $x=$ $[2\pi ,0)\cup (0,2\pi ]$
:::

:::exercise {fs-id1165043395208} type= 
PROBLEM:
$f(x)=\text{sin}(x){e}^{x}$ over $x=[\text{−}\pi ,\pi ]$
SOLUTION:
a. Increasing over $-\frac{\pi}{4}<x<\frac{3\pi}{4},$ decreasing over $x>\frac{3\pi}{4},x<-\frac{\pi}{4}$ b. Minimum at $x=-\frac{\pi}{4},$ maximum at $x=\frac{3\pi}{4}$ c. Concave up for $-\frac{\pi}{2}<x<\frac{\pi}{2},$ concave down for $x<-\frac{\pi}{2},x>\frac{\pi}{2}$ d. Infection points at $x=\text{±}\frac{\pi}{2}$
:::

:::exercise {fs-id1165042374784} type= 
PROBLEM:
$f(x)=(\text{ln}\;x)\sqrt{x},x>0$
:::

:::exercise {fs-id1165042320285} type= 
PROBLEM:
$f(x)=\frac{1}{4}\sqrt{x}+\frac{1}{x},x>0$
SOLUTION:
a. Increasing over $x>4,$ decreasing over $0<x<4$ b. Minimum at $x=4$ c. Concave up for $0<x<8\sqrt[3]{2},$ concave down for $x>8\sqrt[3]{2}$ d. Inflection point at $x=8\sqrt[3]{2}$
:::

:::exercise {fs-id1165042364146} type= 
PROBLEM:
$f(x)=\frac{{e}^{x}}{x},x≠0$
:::
For the following exercises, interpret the sentences in terms of $f,{f}^{'},\;\text{and}\;{f}^{''}.$

:::exercise {fs-id1165043248713} type= 
PROBLEM:
The population is growing more slowly. Here $f$ is the population.
SOLUTION:
$f>0,{f}^{'}>0,{f}^{''}<0$
:::

:::exercise {fs-id1165042638526} type= 
PROBLEM:
A bike accelerates faster, but a car goes faster. Here $f=$ Bike’s position minus Car’s position.
:::

:::exercise {fs-id1165042708313} type= 
PROBLEM:
The airplane lands smoothly. Here $f$ is the plane’s altitude.
SOLUTION:
$f>0,{f}^{'}<0,{f}^{''}>0$
:::

:::exercise {fs-id1165042708364} type= 
PROBLEM:
A company tracks labor costs over the course of a year. On July 1, costs are at their peak. Here $f$ represents the cost of labor.
:::

:::exercise {fs-id1165043390836} type= 
PROBLEM:
The economy is picking up speed. Here $f$ is a measure of the economy, such as GDP.
SOLUTION:
$f>0,{f}^{'}>0,{f}^{''}>0$
:::
For the following exercises, consider a third-degree polynomial $f(x),$ which has the properties ${f}^{'}(1)=0,{f}^{'}(3)=0$ (not applicable to Exercises 249 and 250). Determine whether the following statements are *true or false*. Justify your answer.

:::exercise {fs-id1165043219135} type= 
PROBLEM:
$f(x)=0$ for some $1\le x\le 3$
:::

:::exercise {fs-id1165043173868} type= 
PROBLEM:
${f}^{''}(x)=0$ for some $1\le x\le 3$
SOLUTION:
True, by the Mean Value Theorem
:::

:::exercise {fs-id1165042707190} type= 
PROBLEM:
There is no absolute maximum at $x=3$
:::

:::exercise {fs-id1165042707227} type= 
PROBLEM:
If $f(x)$ has three roots, then it has $1$ inflection point.
SOLUTION:
True, examine derivative
:::

:::exercise {fs-id1165043427346} type= 
PROBLEM:
If $f(x)$ has one inflection point, then it has three real roots.
:::

## Glossary
- {def} **concave down**: if $f$ is differentiable over an interval $I$ and ${f}^{'}$ is decreasing over $I,$ then $f$ is concave down over $I$
- {def} **concave up**: if $f$ is differentiable over an interval $I$ and ${f}^{'}$ is increasing over $I,$ then $f$ is concave up over $I$
- {def} **concavity**: the upward or downward curve of the graph of a function
- {def} **concavity test**: suppose $f$ is twice differentiable over an interval $I;$ if ${f}^{''}>0$ over $I,$ then $f$ is concave up over $I;$ if ${f}^{''}<0$ over $I,$ then $f$ is concave down over $I$
- {def} **first derivative test**: let $f$ be a continuous function over an interval $I$ containing a critical point $c$ such that $f$ is differentiable over $I$ except possibly at $c;$ if ${f}^{'}$ changes sign from positive to negative as $x$ increases through $c,$ then $f$ has a local maximum at $c;$ if ${f}^{'}$ changes sign from negative to positive as $x$ increases through $c,$ then $f$ has a local minimum at $c;$ if ${f}^{'}$ does not change sign as $x$ increases through $c,$ then $f$ does not have a local extremum at $c$
- {def} **inflection point**: if $f$ is continuous at $c$ and $f$ changes concavity at $c,$ the point $(c,f(c))$ is an inflection point of $f$
- {def} **second derivative test**: suppose ${f}^{'}(c)=0$ and ${f}^{''}$ is continuous over an interval containing $c;$ if ${f}^{''}(c)>0,$ then $f$ has a local minimum at $c;$ if ${f}^{''}(c)<0,$ then $f$ has a local maximum at $c;$ if ${f}^{''}(c)=0,$ then the test is inconclusive

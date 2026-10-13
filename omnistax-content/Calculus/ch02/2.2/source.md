# The Limit of a Function

## Learning Objectives {section:learning-objectives}
- Using correct notation, describe the limit of a function.
- Use a table of values to estimate the limit of a function or to identify when the limit does not exist.
- Use a graph to estimate the limit of a function or to identify when the limit does not exist.
- Define one-sided limits and provide examples.
- Explain the relationship between one-sided and two-sided limits.
- Using correct notation, describe an infinite limit.
- Define a vertical asymptote.

The concept of a limit or limiting process, essential to the understanding of calculus, has been around for thousands of years. In fact, early mathematicians used a limiting process to obtain better and better approximations of areas of circles. Yet, the formal definition of a limit—as we know and understand it today—did not appear until the late 19th century. We therefore begin our quest to understand limits, as our mathematical ancestors did, by using an intuitive approach. At the end of this chapter, armed with a conceptual understanding of limits, we examine the formal definition of a limit.
We begin our exploration of limits by taking a look at the graphs of the functions

$f(x)=\frac{{x}^{2}-4}{x-2},\;g(x)=\frac{|x-2|}{x-2},\;\text{and}\;h(x)=\frac{1}{{(x-2)}^{2}},$  {eq:fs-id1170572346957}

which are shown in [ref:CNX_Calc_Figure_02_02_001]. In particular, let’s focus our attention on the behavior of each graph at and around $x=2.$

> FIGURE {fig:CNX_Calc_Figure_02_02_001} src=../../media/CNX_Calc_Figure_02_02_001.jpg
> alt: Three graphs of functions.  The first is f(s) = (x^2 – 4) / (x-2), which is a line of slope, x intercept (-2,0), and open circle at (2,4). The second is g(x) = |x – 2 | / (x-2), which contains two lines: x=1 for x>2 and x= -1 for x < 2. There are open circles at both endpoints (2, 1) and (-2, 1). The third is h(x) = 1 / (x-2)^2, in which the function curves asymptotically towards y=0 and x=2 in quadrants one and two.
> caption: These graphs show the behavior of three different functions around $x=2.$

Each of the three functions is undefined at $x=2,$ but if we make this statement and no other, we give a very incomplete picture of how each function behaves in the vicinity of $x=2.$ To express the behavior of each graph in the vicinity of 2 more completely, we need to introduce the concept of a limit.

## Intuitive Definition of a Limit
Let’s first take a closer look at how the function $f(x)=({x}^{2}-4)\text{/}(x-2)$ behaves around $x=2$ in [ref:CNX_Calc_Figure_02_02_001]. As the values of *x* approach 2 from either side of 2, the values of $y=f(x)$ approach 4. Mathematically, we say that the limit of $f(x)$ as *x* approaches 2 is 4. Symbolically, we express this limit as

$\lim_{x\to 2}f(x)=4.$  {eq:fs-id1170571655049}

From this very brief informal look at one limit, let’s start to develop an {term:intuitive definition of the limit}. We can think of the limit of a function at a number *a* as being the one real number *L* that the functional values approach as the *x*-values approach *a,* provided such a real number *L* exists. Stated more carefully, we have the following definition:

:::note [definition] Definition
Let $f(x)$ be a function defined at all values in an open interval containing *a*, with the possible exception of *a* itself, and let *L* be a real number. If *all* values of the function $f(x)$ approach the real number *L* as the values of $x(≠a)$ approach the number *a*, then we say that the limit of $f(x)$ as *x* approaches *a* is *L*. (More succinct, as *x* gets closer to *a*, $f(x)$ gets closer and stays close to *L*.) Symbolically, we express this idea as

$$ \lim_{x\to a}f(x)=L. $$  {eq:fs-id1170572133132}

:::
We can estimate limits by constructing tables of functional values and by looking at their graphs. This process is described in the following Problem-Solving Strategy.

:::note [problem-solving] Evaluating a Limit Using a Table of Functional Values
1. To evaluate $\lim_{x\to a}f(x),$ we begin by completing a table of functional values. We should choose two sets of *x*-values—one set of values approaching *a* and less than *a*, and another set of values approaching *a* and greater than *a*. [ref:fs-id1170572204940] demonstrates what your tables might look like.

> TABLE {tab:fs-id1170572204940} cols=5 irregular
> title: Table of Functional Values for $\lim_{x\to a}f(x)$
> summary: There are two tables. They both have two columns and five rows. The first table has headers x and f(x) in the first row. Under x in the first column are the values a-0.1, a-0.01, a-0.001, and a-0.0001. Under f(x) in the second column are values f(a-0.1), f(a-0.01), f(a-0.001), and f(a-0.0001). At the bottom is a note that one may “use additional values as necessary” in both columns. The second table has headers x and f(x) in the first row. Under x in the first column are the values a+0.1, a+0.01, a+0.001, and a+0.0001. Under f(x) in the second column are values f(a+0.1), f(a+0.01), f(a+0.001), and f(a+0.0001). At the bottom is a note that one may “use additional values as necessary” in both columns.

| *x* | $f(x)$ |  | *x* | $f(x)$ |
| $a-0.1$ | $f(a-0.1)$ | {rows=5}  | $a+0.1$ | $f(a+0.1)$ |
| $a-0.01$ | $f(a-0.01)$ | $a+0.01$ | $f(a+0.01)$ |
| $a-0.001$ | $f(a-0.001)$ | $a+0.001$ | $f(a+0.001)$ |
| $a-0.0001$ | $f(a-0.0001)$ | $a+0.0001$ | $f(a+0.0001)$ |
| {span=2} Use additional values as necessary. | {span=2} Use additional values as necessary. |

2. Next, let’s look at the values in each of the $f(x)$ columns and determine whether the values seem to be approaching a single value as we move down each column. In our columns, we look at the sequence $f(a-0.1),f(a-0.01),f(a-0.001).,f(a-0.0001),$ and so on, and $f(a+0.1),f(a+0.01),f(a+0.001),f(a+0.0001),$ and so on. (*Note*: Although we have chosen the *x*-values $a\pm 0.1,a\pm 0.01,a\pm 0.001,a\pm 0.0001,$ and so forth, and these values will probably work nearly every time, on very rare occasions we may need to modify our choices.)
3. If both columns approach a common *y*-value *L*, we state $\lim_{x\to a}f(x)=L.$ We can use the following strategy to confirm the result obtained from the table or as an alternative method for estimating a limit.
4. Using a graphing calculator or computer software that allows us to graph functions, we can plot the function $f(x),$ making sure the functional values of $f(x)$ for *x*-values near *a* are in our window. We can use the trace feature to move along the graph of the function and watch the *y*-value readout as the *x*-values approach *a*. If the *y*-values approach *L* as our *x*-values approach *a* from both directions, then $\lim_{x\to a}f(x)=L.$ We may need to zoom in on our graph and repeat this process several times.
:::
We apply this Problem-Solving Strategy to compute a limit in [ref:fs-id1170572561451].

:::example {ex:fs-id1170572561451} Evaluating a Limit Using a Table of Functional Values 1

:::exercise {fs-id1170572286630} type= 
PROBLEM:
Evaluate $\lim_{x\to 0}\frac{\text{sin}\;x}{x}$ using a table of functional values.
SOLUTION:
We have calculated the values of $f(x)=(\text{sin}\;x)\text{/}x$ for the values of *x* listed in [ref:fs-id1170572208852].

> TABLE {tab:fs-id1170572208852} cols=5 irregular
> title: Table of Functional Values for $\lim_{x\to 0}\frac{\text{sin}\;x}{x}$
> summary: There are two tables. They both have two columns and five rows. The first table has headers x and sin(x)/x in the first row. Under x in the first column are the values -0.1, -0.01, -0.001, and -0.0001. Under sin(x)/x in the second column are values 0.998334166468, 0.999983333417, 0.999999833333, and 0.999999998333. The second table has headers x and sin(x)/x in the first row. Under x in the first column are the values 0.1, 0.01, 0.001, and 0.0001. Under sin(x)/x in the second column are values 0.998334166468, 0.999983333417, 0.999999833333, and 0.999999998333.

| *x* | $\frac{\text{sin}\;x}{x}$ |  | *x* | $\frac{\text{sin}\;x}{x}$ |
| −0.1 | 0.998334166468 | {rows=4}  | 0.1 | 0.998334166468 |
| −0.01 | 0.999983333417 | 0.01 | 0.999983333417 |
| −0.001 | 0.999999833333 | 0.001 | 0.999999833333 |
| −0.0001 | 0.999999998333 | 0.0001 | 0.999999998333 |

*Note*: The values in this table were obtained using a calculator and using all the places given in the calculator output.
As we read down each $\frac{(\text{sin}\;x)}{x}$ column, we see that the values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that $\lim_{x\to 0}\frac{\text{sin}\;x}{x}=1.$ A calculator or computer-generated graph of $f(x)=\frac{(\text{sin}\;x)}{x}$ would be similar to that shown in [ref:CNX_Calc_Figure_02_02_003], and it confirms our estimate.

> FIGURE {fig:CNX_Calc_Figure_02_02_003} src=../../media/CNX_Calc_Figure_02_02_003.jpg
> alt: A graph of f(x) = sin(x)/x over the interval [-6, 6]. The curving function has a y intercept at x=0 and x intercepts at y=pi and y=-pi.
> caption: The graph of $f(x)=(\text{sin}\;x)\text{/}x$ confirms the estimate from [ref:fs-id1170572208852].

:::
:::

:::example {ex:fs-id1170571656691} Evaluating a Limit Using a Table of Functional Values 2

:::exercise {fs-id1170572224892} type= 
PROBLEM:
Evaluate $\lim_{x\to 4}\frac{\sqrt{x}-2}{x-4}$ using a table of functional values.
SOLUTION:
As before, we use a table—in this case, [ref:fs-id1170571595483]—to list the values of the function for the given values of *x*.

> TABLE {tab:fs-id1170571595483} cols=5 irregular
> title: Table of Functional Values for $\lim_{x\to 4}\frac{\sqrt{x}-2}{x-4}$
> summary: There are two tables, each with six rows and two columns. The first table has headers x and (sqrt(x) – 2 ) / (x-4) in the first row. In the first column under x are the values 3.9, 3.99, 3.999, 3.9999, and 3.99999. In the second column are the values 0.251582341869, 0.25015644562, 0.250015627, 0.250001563, 0.25000016. The second table has the same headers in the first row. In the first column under x are the values 4.1, 4.01, 4.001, 4.0001, and 4.00001. In the second column are the values 0.248456731317, 0.24984394501, 0.249984377, 0.249998438, and 0.24999984.

| *x* | $\frac{\sqrt{x}-2}{x-4}$ |  | *x* | $\frac{\sqrt{x}-2}{x-4}$ |
| 3.9 | 0.251582341869 | {rows=5}  | 4.1 | 0.248456731317 |
| 3.99 | 0.25015644562 | 4.01 | 0.24984394501 |
| 3.999 | 0.250015627 | 4.001 | 0.249984377 |
| 3.9999 | 0.250001563 | 4.0001 | 0.249998438 |
| 3.99999 | 0.25000016 | 4.00001 | 0.24999984 |

After inspecting this table, we see that the functional values less than 4 appear to be decreasing toward 0.25 whereas the functional values greater than 4 appear to be increasing toward 0.25. We conclude that $\lim_{x\to 4}\frac{\sqrt{x}-2}{x-4}=0.25.$ We confirm this estimate using the graph of $f(x)=\frac{\sqrt{x}-2}{x-4}$ shown in [ref:CNX_Calc_Figure_02_02_004].

> FIGURE {fig:CNX_Calc_Figure_02_02_004} src=../../media/CNX_Calc_Figure_02_02_004.jpg
> alt: A graph of the function f(x) = (sqrt(x) – 2 ) / (x-4) over the interval [0,8]. There is an open circle on the function at x=4. The function curves asymptotically towards the x axis and y axis in quadrant one.
> caption: The graph of $f(x)=\frac{\sqrt{x}-2}{x-4}$ confirms the estimate from [ref:fs-id1170571595483].

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571596038} type= 
PROBLEM:
Estimate $\lim_{x\to 1}\frac{\frac{1}{x}-1}{x-1}$ using a table of functional values. Use a graph to confirm your estimate.
SOLUTION:
$\lim_{x\to 1}\frac{\frac{1}{x}-1}{x-1}=−1$
COMMENTARY: Hint
Use 0.9, 0.99, 0.999, 0.9999, 0.99999 and 1.1, 1.01, 1.001, 1.0001, 1.00001 as your table values.
:::
:::
At this point, we see from [ref:fs-id1170572561451] and [ref:fs-id1170571656691] that it may be just as easy, if not easier, to estimate a limit of a function by inspecting its graph as it is to estimate the limit by using a table of functional values. In [ref:fs-id1170572337207], we evaluate a limit exclusively by looking at a graph rather than by using a table of functional values.

:::example {ex:fs-id1170572337207} Evaluating a Limit Using a Graph

:::exercise {fs-id1170572337209} type= 
PROBLEM:
For $g(x)$ shown in [ref:CNX_Calc_Figure_02_02_006], evaluate $\lim_{x\to −1}g(x).$

> FIGURE {fig:CNX_Calc_Figure_02_02_006} src=../../media/CNX_Calc_Figure_02_02_006.jpg
> alt: The graph of a generic curving function g(x). In quadrant two, there is an open circle on the function at (-1,3) and a closed circle one unit up at (-1, 4).
> caption: The graph of $g(x)$ includes one value not on a smooth curve.

SOLUTION:
Despite the fact that $g(−1)=4,$ as the *x*-values approach −1 from either side, the $g(x)$ values approach 3. Therefore, $\lim_{x\to −1}g(x)=3.$ Note that we can determine this limit without even knowing the algebraic expression of the function.
:::
:::
Based on [ref:fs-id1170572337207], we make the following observation: It is possible for the limit of a function to exist at a point, and for the function to be defined at this point, but the limit of the function and the value of the function at the point may be different.

:::note [checkpoint] 

:::exercise {fs-id1170571656653} type= 
PROBLEM:
Use the graph of $h(x)$ in [ref:CNX_Calc_Figure_02_02_007] to evaluate $\lim_{x\to 2}h(x),$ if possible.

> FIGURE {fig:CNX_Calc_Figure_02_02_007} src=../../media/CNX_Calc_Figure_02_02_007.jpg
> alt: A graph of the function h(x), which is a parabola graphed over [-2.5, 5]. There is an open circle where the vertex should be at the point (2,-1).
> caption: 

SOLUTION:
$\lim_{x\to 2}h(x)=−1.$
COMMENTARY: Hint
What *y*-value does the function approach as the *x*-values approach 2?
:::
:::
Looking at a table of functional values or looking at the graph of a function provides us with useful insight into the value of the limit of a function at a given point. However, these techniques rely too much on guesswork. We eventually need to develop alternative methods of evaluating limits. These new methods are more algebraic in nature and we explore them in the next section; however, at this point we introduce two special limits that are foundational to the techniques to come.

:::note [theorem] Two Important Limits
Let *a* be a real number and *c* be a constant.
1. 
$$ \lim_{x\to a}x=a $$  {eq:fs-id1170571611919}

2. 
$$ \lim_{x\to a}c=c $$  {eq:fs-id1170571600104}

:::
We can make the following observations about these two limits.
1. For the first limit, observe that as *x* approaches *a*, so does $f(x),$ because $f(x)=x.$ Consequently, $\lim_{x\to a}x=a.$
2. For the second limit, consider [ref:fs-id1170571613026].

> TABLE {tab:fs-id1170571613026} cols=5 irregular
> title: Table of Functional Values for $\lim_{x\to a}c=c$
> summary: Two tables side by side, both containing two columns and five rows. The first table has headers x and f(x) = c in the first row. Under x in the first column are the values a-0.1, a-0.01, a-0.001, and a-0.0001. All of the values in the second column under the header are c. The second table has the same headers. Under x in the first column are the values a+0.1, a+0.01, a+0.001, and a+0.0001. All of the values in the second column under the header are c.

| *x* | $f(x)=c$ |  | *x* | $f(x)=c$ |
| $a-0.1$ | *c* | {rows=4}  | $a+0.1$ | *c* |
| $a-0.01$ | *c* | $a+0.01$ | *c* |
| $a-0.001$ | *c* | $a+0.001$ | *c* |
| $a-0.0001$ | *c* | $a+0.0001$ | *c* |

Observe that for all values of *x* (regardless of whether they are approaching *a*), the values $f(x)$ remain constant at *c*. We have no choice but to conclude $\lim_{x\to a}c=c.$

## The Existence of a Limit
As we consider the limit in the next example, keep in mind that for the limit of a function to exist at a point, the functional values must approach a single real-number value at that point. If the functional values do not approach a single value, then the limit does not exist.

:::example {ex:fs-id1170571656076} Evaluating a Limit That Fails to Exist

:::exercise {fs-id1170571656078} type= 
PROBLEM:
Evaluate $\lim_{x\to 0}\text{sin}\;(1\text{/}\text{x})$ using a table of values.
SOLUTION:
[ref:fs-id1170572233784] lists values for the function $\text{sin}(1\text{/}x)$ for the given values of *x*.

> TABLE {tab:fs-id1170572233784} cols=5 irregular
> title: Table of Functional Values for $\lim_{x\to 0}\text{sin}\;(\frac{1}{x})$
> summary: Two tables side by side, each with two columns and seven rows. The headers are the same, x and sin(1/x) in the first row. In the first table, the values in the first column under x are -0.1, -0.01, -0.001, -0.0001, -0.00001, and -0.000001. The values in the second column under the header are 0.544021110889, 0.50636564111, −0;.8268795405312, 0.305614388888, −0;.035748797987, and 0.349993504187. In the second column, the values in the first column under x are 0.1, 0.01, 0.001, 0.0001, 0.00001, and 0.000001. The values in the second column under the header are −0;.544021110889, −0;.50636564111, 0.826879540532, −0;.305614388888,  0.035748797987, and −0;.349993504187.

| *x* | $\text{sin}(\frac{1}{x})$ |  | *x* | $\text{sin}(\frac{1}{x})$ |
| −0.1 | 0.544021110889 | {rows=6}  | 0.1 | −0.544021110889 |
| −0.01 | 0.50636564111 | 0.01 | −0.50636564111 |
| −0.001 | −0.8268795405312 | 0.001 | 0.826879540532 |
| −0.0001 | 0.305614388888 | 0.0001 | −0.305614388888 |
| −0.00001 | −0.035748797987 | 0.00001 | 0.035748797987 |
| −0.000001 | 0.349993504187 | 0.000001 | −0.349993504187 |

After examining the table of functional values, we can see that the *y*-values do not seem to approach any one single value. It appears the limit does not exist. Before drawing this conclusion, let’s take a more systematic approach. Take the following sequence of *x*-values approaching 0:

$\frac{2}{\pi},\frac{2}{3\pi},\frac{2}{5\pi},\frac{2}{7\pi},\frac{2}{9\pi},\frac{2}{11\pi}\text{,….}$  {eq:fs-id1170572420254}

The corresponding *y*-values are

$1,−1,1,−1,1,−1\text{,….}$  {eq:fs-id1170572561341}

At this point we can indeed conclude that $\lim_{x\to 0}\text{sin}\;(1\text{/}\text{x})$ does not exist. (Mathematicians frequently abbreviate “does not exist” as DNE. Thus, we would write $\lim_{x\to 0}\text{sin}\;(1\text{/}\text{x})$ DNE.) The graph of $f(x)=\text{sin}\;(1\text{/}x)$ is shown in [ref:CNX_Calc_Figure_02_02_008] and it gives a clearer picture of the behavior of $\text{sin}(1\text{/}x)$ as *x* approaches 0. You can see that $\text{sin}(1\text{/}\text{x})$ oscillates ever more wildly between −1 and 1 as *x* approaches 0.

> FIGURE {fig:CNX_Calc_Figure_02_02_008} src=../../media/CNX_Calc_Figure_02_02_008.jpg
> alt: The graph of the function f(x) = sin(1/x), which oscillates rapidly between -1 and 1 as x approaches 0. The oscillations are less frequent as the function moves away from 0 on the x axis.
> caption: The graph of $f(x)=\text{sin}(1\text{/}x)$ oscillates rapidly between −1 and 1 as *x* approaches 0.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572455165} type= 
PROBLEM:
Use a table of functional values to evaluate $\lim_{x\to 2}\frac{|{x}^{2}-4|}{x-2},$ if possible.
SOLUTION:
$\lim_{x\to 2}\frac{|{x}^{2}-4|}{x-2}$ does not exist.
COMMENTARY: Hint
Use *x*-values 1.9, 1.99, 1.999, 1.9999, 1.9999 and 2.1, 2.01, 2.001, 2.0001, 2.00001 in your table.
:::
:::

## One-Sided Limits
Sometimes indicating that the limit of a function fails to exist at a point does not provide us with enough information about the behavior of the function at that particular point. To see this, we now revisit the function $g(x)=|x-2|\text{/}(x-2)$ introduced at the beginning of the section (see [ref:CNX_Calc_Figure_02_02_001](b)). As we pick values of *x* close to 2, $g(x)$ does not approach a single value, so the limit as *x* approaches 2 does not exist—that is, $\lim_{x\to 2}g(x)$ DNE. However, this statement alone does not give us a complete picture of the behavior of the function around the *x*-value 2. To provide a more accurate description, we introduce the idea of a {term:one-sided limit}. For all values to the left of 2 (or *the negative side of* 2), $g(x)=−1.$ Thus, as *x* approaches 2 from the left, $g(x)$ approaches −1. Mathematically, we say that the limit as *x* approaches 2 from the left is −1. Symbolically, we express this idea as

$\lim_{x\to {2}^{-}}g(x)=−1.$  {eq:fs-id1170571655354}

Similarly, as *x* approaches 2 from the right (or *from the positive side*), $g(x)$ approaches 1. Symbolically, we express this idea as

$\lim_{x\to {2}^{+}}g(x)=1.$  {eq:fs-id1170571569241}

We can now present an informal definition of one-sided limits.

:::note [definition] Definition
We define two types of **one-sided limits**.
*Limit from the left:* Let $f(x)$ be a function defined at all values in an open interval of the form (*c*, *a*), and let *L* be a real number. If the values of the function $f(x)$ approach the real number *L* as the values of *x* (where $x<\text{a}\text{)}$ approach the number *a*, then we say that *L* is the limit of $f(x)$ as *x* approaches a from the left. Symbolically, we express this idea as

$$ \lim_{x\to {a}^{-}}f(x)=L. $$  {eq:fs-id1170571531299}

*Limit from the right:* Let $f(x)$ be a function defined at all values in an open interval of the form $(a,c),$ and let *L* be a real number. If the values of the function $f(x)$ approach the real number L as the values of *x* (where $x>\text{a}\text{)}$ approach the number *a*, then we say that *L* is the limit of $f(x)$ as *x* approaches *a* from the right. Symbolically, we express this idea as

$$ \lim_{x\to {a}^{+}}f(x)=L. $$  {eq:fs-id1170572453163}

:::

:::example {ex:fs-id1170571614880} Evaluating One-Sided Limits

:::exercise {fs-id1170571614882} type= 
PROBLEM:
For the function $f(x)=\left\{\begin{array}{ll}x+1 & \text{if}\;x<2 \\ {x}^{2}-4 & \text{if}\;x\ge 2\end{array}\right.,$ evaluate each of the following limits.
a. $\lim_{x\to {2}^{-}}f(x)$
b. $\lim_{x\to {2}^{+}}f(x)$
SOLUTION:
We can use tables of functional values again [ref:fs-id1170572347185]. Observe that for values of *x* less than 2, we use $f(x)=x+1$ and for values of *x* greater than 2, we use $f(x)={x}^{2}-4.$

> TABLE {tab:fs-id1170572347185} cols=5 irregular
> title: Table of Functional Values for $f(x)=\left\{\begin{array}{l}x+1\;\text{if}\;x<2 \\ {x}^{2}-4\;\text{if}\;x\ge 2\end{array}\right.$
> summary: Two tables side by side, each with two columns and six rows. The headers are the same, x and f(x) = x+1 in the first row. In the first table, the values in the first column under x are 1.9, 1.99, 1.999, 1.9999, and 1.99999. The values in the second column under the header are 2.9, 2.99, 2.999, 2.9999, and 2.99999. In the second column, the values in the first column under x are 2.1, 2.01, 2.001, 2.0001, and 2.00001. The values in the second column under the header are 0.41, 0.0401, 0.004001, 0.00040001, and 0.0000400001.

| *x* | $f(x)=x+1$ |  | *x* | $f(x)={x}^{2}−4$ |
| 1.9 | 2.9 | {rows=5}  | 2.1 | 0.41 |
| 1.99 | 2.99 | 2.01 | 0.0401 |
| 1.999 | 2.999 | 2.001 | 0.004001 |
| 1.9999 | 2.9999 | 2.0001 | 0.00040001 |
| 1.99999 | 2.99999 | 2.00001 | 0.0000400001 |

Based on this table, we can conclude that a. $\lim_{x\to {2}^{-}}f(x)=3$ and b. $\lim_{x\to {2}^{+}}f(x)=0.$ Therefore, the (two-sided) limit of $f(x)$ does not exist at $x=2.$ [ref:CNX_Calc_Figure_02_02_010] shows a graph of $f(x)$ and reinforces our conclusion about these limits.

> FIGURE {fig:CNX_Calc_Figure_02_02_010} src=../../media/CNX_Calc_Figure_02_02_010.jpg
> alt: The graph of the given piecewise function. The first piece is f(x) = x+1 if x < 2. The second piece is x^2 – 4 if x >= 2. The first piece is a line with x intercept at (-1, 0) and y intercept at (0,1). There is an open circle at (2,3), where the endpoint would be. The second piece is the right half of a parabola opening upward. The vertex at (2,0) is a solid circle.
> caption: The graph of $f(x)=\left\{\begin{array}{l}x+1\;\text{if}\;x<2 \\ {x}^{2}-4\;\text{if}\;x\ge 2\end{array}\right.$ has a break at $x=2.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571612128} type= 
PROBLEM:
Use a table of functional values to estimate the following limits, if possible.
a. $\lim_{x\to {2}^{-}}\frac{|{x}^{2}-4|}{x-2}$
b. $\lim_{x\to {2}^{+}}\frac{|{x}^{2}-4|}{x-2}$
SOLUTION:
a. $\lim_{x\to {2}^{-}}\frac{|{x}^{2}-4|}{x-2}=−4;$ b. $\lim_{x\to {2}^{+}}\frac{|{x}^{2}-4|}{x-2}=4$
COMMENTARY: Hint
a. Use *x*-values 1.9, 1.99, 1.999, 1.9999, 1.9999 to estimate $\lim_{x\to {2}^{-}}\frac{|{x}^{2}-4|}{x-2}.$
b. Use *x*-values 2.1, 2.01, 2.001, 2.0001, 2.00001 to estimate $\lim_{x\to {2}^{+}}\frac{|{x}^{2}-4|}{x-2}.$

(These tables are available from a previous Checkpoint problem.)
:::
:::
Let us now consider the relationship between the limit of a function at a point and the limits from the right and left at that point. It seems clear that if the limit from the right and the limit from the left have a common value, then that common value is the limit of the function at that point. Similarly, if the limit from the left and the limit from the right take on different values, the limit of the function does not exist. These conclusions are summarized in [ref:fs-id1170571598073].

:::note [theorem] Relating One-Sided and Two-Sided Limits
Let $f(x)$ be a function defined at all values in an open interval containing *a*, with the possible exception of *a* itself, and let *L* be a real number. Then,

$\lim_{x\to a}f(x)=L\;\text{if and only if}\;\lim_{x\to {a}^{-}}f(x)=L\;\text{and}\;\lim_{x\to {a}^{+}}f(x)=L.$  {eq:fs-id1165042842783}

:::

## Infinite Limits
Evaluating the limit of a function at a point or evaluating the limit of a function from the right and left at a point helps us to characterize the behavior of a function around a given value. As we shall see, we can also describe the behavior of functions that do not have finite limits.
We now turn our attention to $h(x)=1\text{/}{(x-2)}^{2},$ the third and final function introduced at the beginning of this section (see [ref:CNX_Calc_Figure_02_02_001](c)). From its graph we see that as the values of *x* approach 2, the values of $h(x)=1\text{/}{(x-2)}^{2}$ become larger and larger and, in fact, become infinite. Mathematically, we say that the limit of $h(x)$ as *x* approaches 2 is positive infinity. Symbolically, we express this idea as

$\lim_{x\to 2}h(x)=\text{+}\infty .$  {eq:fs-id1170571612232}

More generally, we define {term:infinite limits} as follows:

:::note [definition] Definition
We define three types of **infinite limits**.
*Infinite limits from the left:* Let $f(x)$ be a function defined at all values in an open interval of the form $(b,a).$
1. If the values of $f(x)$ increase without bound as the values of *x* (where $x<\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* from the left is positive infinity and we write

$$ \lim_{x\to {a}^{-}}f(x)=\text{+}\infty . $$  {eq:fs-id1170571562619}

2. If the values of $f(x)$ decrease without bound as the values of *x* (where $x<\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* from the left is negative infinity and we write

$$ \lim_{x\to {a}^{-}}f(x)=\text{−}\infty . $$  {eq:fs-id1170572346714}

*Infinite limits from the right*: Let $f(x)$ be a function defined at all values in an open interval of the form $(a,c).$
1. If the values of $f(x)$ increase without bound as the values of *x* (where $x>\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* from the right is positive infinity and we write

$$ \lim_{x\to {a}^{+}}f(x)=\text{+}\infty . $$  {eq:fs-id1170572559800}

2. If the values of $f(x)$ decrease without bound as the values of *x* (where $x>\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* from the right is negative infinity and we write

$$ \lim_{x\to {a}^{+}}f(x)=\text{−}\infty . $$  {eq:fs-id1170572512575}

*Two-sided infinite limit:* Let $f(x)$ be defined for all $x≠a$ in an open interval containing *a*.
1. If the values of $f(x)$ increase without bound as the values of *x* (where $x≠\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* is positive infinity and we write

$$ \lim_{x\to a}f(x)=\text{+}\infty . $$  {eq:fs-id1170572337784}

2. If the values of $f(x)$ decrease without bound as the values of *x* (where $x≠\text{a}\text{)}$ approach the number *a*, then we say that the limit as *x* approaches *a* is negative infinity and we write

$$ \lim_{x\to a}f(x)=\text{−}\infty . $$  {eq:fs-id1170572337871}

:::
It is important to understand that when we write statements such as $\lim_{x\to a}f(x)=\text{+}\infty$ or $\lim_{x\to a}f(x)=\text{−}\infty$ we are describing the behavior of the function, as we have just defined it. We are not asserting that a limit exists. For the limit of a function $f(x)$ to exist at *a*, it must approach a real number *L* as *x* approaches *a*. That said, if, for example, $\lim_{x\to a}f(x)=\text{+}\infty ,$ we always write $\lim_{x\to a}f(x)=\text{+}\infty$ rather than $\lim_{x\to a}f(x)$ DNE.

:::example {ex:fs-id1170571611150} Recognizing an Infinite Limit

:::exercise {fs-id1170571611153} type= 
PROBLEM:
Evaluate each of the following limits, if possible. Use a table of functional values and graph $f(x)=1\text{/}x$ to confirm your conclusion.
a. $\lim_{x\to {0}^{-}}\frac{1}{x}$
b. $\lim_{x\to {0}^{+}}\frac{1}{x}$
c. $\lim_{x\to 0}\frac{1}{x}$
SOLUTION:
Begin by constructing a table of functional values.

> TABLE {tab:fs-id1170572346981} cols=5 irregular
> title: Table of Functional Values for $f(x)=\frac{1}{x}$
> summary: Two tables side by side, each with two columns and seven rows. The headers are the same, x and 1/x in the first row. In the first table, the values in the first column under x are -.01, -0.01, -0.001, -0.0001, -0.00001, and -0.000001. The values in the second column under the header are -10, -100, -1000, -10,000, -100,000, and -1,000,000. In the second column, the values in the first column under x are 0.1, 0.01, 0.001, 0.0001, 0.00001 and 0.000001. The values in the second column under the header are 10, 100, 1000, 10,000, 100,000, 1,000,000.

| *x* | $\frac{1}{x}$ |  | *x* | $\frac{1}{x}$ |
| −0.1 | −10 | {rows=6}  | 0.1 | 10 |
| −0.01 | −100 | 0.01 | 100 |
| −0.001 | −1000 | 0.001 | 1000 |
| −0.0001 | −10,000 | 0.0001 | 10,000 |
| −0.00001 | −100,000 | 0.00001 | 100,000 |
| −0.000001 | −1,000,000 | 0.000001 | 1,000,000 |

a. The values of $1\text{/}x$ decrease without bound as *x* approaches 0 from the left. We conclude that

$\lim_{x\to {0}^{-}}\frac{1}{x}=\text{−}\infty .$  {eq:fs-id1170572560361}

b. The values of $1\text{/}x$ increase without bound as *x* approaches 0 from the right. We conclude that

$\lim_{x\to {0}^{+}}\frac{1}{x}=\text{+}\infty .$  {eq:fs-id1170572560419}

c. Since $\lim_{x\to {0}^{-}}\frac{1}{x}=\text{−}\infty$ and $\lim_{x\to {0}^{+}}\frac{1}{x}=\text{+}\infty$ have different values, we conclude that

$\lim_{x\to 0}\frac{1}{x}\;\text{DNE.}$  {eq:fs-id1170571596216}

The graph of $f(x)=1\text{/}x$ in [ref:CNX_Calc_Figure_02_02_012] confirms these conclusions.

> FIGURE {fig:CNX_Calc_Figure_02_02_012} src=../../media/CNX_Calc_Figure_02_02_012.jpg
> alt: The graph of the function f(x) = 1/x. The function curves asymptotically towards x=0 and y=0 in quadrants one and three.
> caption: The graph of $f(x)=1\text{/}x$ confirms that the limit as *x* approaches 0 does not exist.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571596334} type= 
PROBLEM:
Evaluate each of the following limits, if possible. Use a table of functional values and graph $f(x)=1\text{/}{x}^{2}$ to confirm your conclusion.
a. $\lim_{x\to {0}^{-}}\frac{1}{{x}^{2}}$
b. $\lim_{x\to {0}^{+}}\frac{1}{{x}^{2}}$
c. $\lim_{x\to 0}\frac{1}{{x}^{2}}$
SOLUTION:
a. $\lim_{x\to {0}^{-}}\frac{1}{{x}^{2}}=\text{+}\infty ;$ b. $\lim_{x\to {0}^{+}}\frac{1}{{x}^{2}}=\text{+}\infty ;$ c. $\lim_{x\to 0}\frac{1}{{x}^{2}}=\text{+}\infty$
COMMENTARY: Hint
Follow the procedures from [ref:fs-id1170571611150].
:::
:::
It is useful to point out that functions of the form $f(x)=1\text{/}{(x-a)}^{n},$ where *n* is a positive integer, have infinite limits as *x* approaches *a* from either the left or right ([ref:CNX_Calc_Figure_02_02_014]). These limits are summarized in [ref:fs-id1170571654206].

> FIGURE {fig:CNX_Calc_Figure_02_02_014} src=../../media/CNX_Calc_Figure_02_02_014.jpg
> alt: Two graphs side by side of f(x) = 1 / (x-a)^n. The first graph shows the case where n is an odd positive integer, and the second shows the case where n is an even positive integer. In the first, the graph has two segments. Each curve asymptotically towards the x axis, also known as y=0, and x=a. The segment to the left of x=a is below the x axis, and the segment to the right of x=a is above the x axis. In the second graph, both segments are above the x axis.
> caption: The function $f(x)=1\text{/}{(x-a)}^{n}$ has infinite limits at *a*.

:::note [theorem] Infinite Limits from Positive Integers
If *n* is a positive even integer, then

$\lim_{x\to a}\frac{1}{{(x-a)}^{n}}=\text{+}\infty .$  {eq:fs-id1170571654230}

If *n* is a positive odd integer, then

$\lim_{x\to {a}^{+}}\frac{1}{{(x-a)}^{n}}=\text{+}\infty$  {eq:fs-id1170571654287}

and

$\lim_{x\to {a}^{-}}\frac{1}{{(x-a)}^{n}}=\text{−}\infty .$  {eq:fs-id1170571654342}

:::
We should also point out that in the graphs of $f(x)=1\text{/}{(x-a)}^{n},$ points on the graph having *x*-coordinates very near to *a* are very close to the vertical line $x=a.$ That is, as *x* approaches *a*, the points on the graph of $f(x)$ are closer to the line $x=a.$ The line $x=a$ is called a {term:vertical asymptote} of the graph. We formally define a vertical asymptote as follows:

:::note [definition] Definition
Let $f(x)$ be a function. If any of the following conditions hold, then the line $x=a$ is a **vertical asymptote** of $f(x).$

$\begin{array}{rll}\lim_{x\to {a}^{-}}f(x) & = & \text{+}\infty \;\text{or}\;\text{−∞} \\ \lim_{x\to {a}^{+}}f(x) & = & \text{+}\infty \;\text{or}\;\text{−∞} \\ & \;\text{or} & \\ \lim_{x\to a}f(x) & = & \text{+}\infty \;\text{or}\;\text{−∞}\end{array}$  {eq:fs-id1165042770942}

:::

:::example {ex:fs-id1170571656614} Finding a Vertical Asymptote

:::exercise {fs-id1170571656617} type= 
PROBLEM:
Evaluate each of the following limits using [ref:fs-id1170571654206]. Identify any vertical asymptotes of the function $f(x)=1\text{/}{(x+3)}^{4}.$
a. $\lim_{x\to {−3}^{-}}\frac{1}{{(x+3)}^{4}}$
b. $\lim_{x\to {−3}^{+}}\frac{1}{{(x+3)}^{4}}$
c. $\lim_{x\to −3}\frac{1}{{(x+3)}^{4}}$
SOLUTION:
We can use [ref:fs-id1170571654206] directly.
a. $\lim_{x\to {−3}^{-}}\frac{1}{{(x+3)}^{4}}=\text{+}\infty$
b. $\lim_{x\to {−3}^{+}}\frac{1}{{(x+3)}^{4}}=\text{+}\infty$
c. $\lim_{x\to −3}\frac{1}{{(x+3)}^{4}}=\text{+}\infty$
The function $f(x)=1\text{/}{(x+3)}^{4}$ has a vertical asymptote of $x=−3.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571652136} type= 
PROBLEM:
Evaluate each of the following limits. Identify any vertical asymptotes of the function $f(x)=\frac{1}{{(x-2)}^{3}}.$
a. $\lim_{x\to {2}^{-}}\frac{1}{{(x-2)}^{3}}$
b. $\lim_{x\to {2}^{+}}\frac{1}{{(x-2)}^{3}}$
c. $\lim_{x\to 2}\frac{1}{{(x-2)}^{3}}$
SOLUTION:
a. $\lim_{x\to {2}^{-}}\frac{1}{{(x-2)}^{3}}=\text{−}\infty ;$ b. $\lim_{x\to {2}^{+}}\frac{1}{{(x-2)}^{3}}=\text{+}\infty ;$ c. $\lim_{x\to 2}\frac{1}{{(x-2)}^{3}}$ DNE. The line $x=2$ is the vertical asymptote of $f(x)=1\text{/}{(x-2)}^{3}.$
COMMENTARY: Hint
Use [ref:fs-id1170571654206].
:::
:::
In the next example we put our knowledge of various types of limits to use to analyze the behavior of a function at several different points.

:::example {ex:fs-id1170572642384} Behavior of a Function at Different Points

:::exercise {fs-id1170572642386} type= 
PROBLEM:
Use the graph of $f(x)$ in [ref:CNX_Calc_Figure_02_02_015] to determine each of the following values:
a. $\lim_{x\to {−4}^{-}}f(x);\lim_{x\to {−4}^{+}}f(x);\lim_{x\to −4}f(x);f(−4)$
b. $\lim_{x\to {−2}^{-}}f(x);\lim_{x\to {−2}^{+}}f(x);\lim_{x\to −2}f(x);f(−2)$
c. $\lim_{x\to {1}^{-}}f(x);\lim_{x\to {1}^{+}}f(x);\lim_{x\to 1}f(x);f(1)$
d. $\lim_{x\to {3}^{-}}f(x);\lim_{x\to {3}^{+}}f(x);\lim_{x\to 3}f(x);f(3)$

> FIGURE {fig:CNX_Calc_Figure_02_02_015} src=../../media/CNX_Calc_Figure_02_02_015.jpg
> alt: The graph of a function f(x) described by the above limits and values. There is a smooth curve for values below x=-2; at (-2, 3), there is an open circle. There is a smooth curve between (-2, 1] with a closed circle at (1,6). There is an open circle at (1,3), and a smooth curve stretching from there down asymptotically to negative infinity along x=3. The function also curves asymptotically along x=3 on the other side, also stretching to negative infinity. The function then changes concavity in the first quadrant around y=4.5 and continues up.
> caption: The graph shows $f(x).$

SOLUTION:
Using [ref:fs-id1170571654206] and the graph for reference, we arrive at the following values:
a. $\lim_{x\to {−4}^{-}}f(x)=0;\lim_{x\to {−4}^{+}}f(x)=0;\lim_{x\to −4}f(x)=0;f(−4)=0$
b. $\lim_{x\to {−2}^{-}}f(x)=3.;\lim_{x\to {−2}^{+}}f(x)=3;\lim_{x\to −2}f(x)=3;f(−2)$ is undefined
c. $\lim_{x\to {1}^{-}}f(x)=6;\lim_{x\to {1}^{+}}f(x)=3;\lim_{x\to 1}f(x)$ DNE; $f(1)=6$
d. $\lim_{x\to {3}^{-}}f(x)=\text{−}\infty ;\lim_{x\to {3}^{+}}f(x)=\text{−}\infty ;\lim_{x\to 3}f(x)=\text{−}\infty ;f(3)$ is undefined
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572624470} type= 
PROBLEM:
Evaluate $\lim_{x\to 1}f(x)$ for $f(x)$ shown here:

> IMAGE {img:fs-id1170572624517} src=../../media/CNX_Calc_Figure_02_02_016.jpg
> alt: A graph of a piecewise function. The first segment curves from the third quadrant to the first, crossing through the second quadrant. Where the endpoint would be in the first quadrant is an open circle. The second segment starts at a closed circle a few units below the open circle. It curves down from quadrant one to quadrant four.

SOLUTION:
Does not exist.
COMMENTARY: Hint
Compare the limit from the right with the limit from the left.
:::
:::

:::example {ex:fs-id1170572624544} Chapter Opener: Einstein’s Equation

:::exercise {fs-id1170572624546} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_02_02_018} src=../../media/CNX_Calc_Figure_02_02_018.jpg
> alt: A picture of a futuristic spaceship speeding through deep space.
> caption: (credit: NASA)

In the chapter opener we mentioned briefly how Albert Einstein showed that a limit exists to how fast any object can travel. Given Einstein’s equation for the mass of a moving object, what is the value of this bound?
SOLUTION:
Our starting point is Einstein’s equation for the mass of a moving object,

$m=\frac{{m}_{0}}{\sqrt{1-\frac{{v}^{2}}{{c}^{2}}}},$  {eq:fs-id1170572624588}

where ${m}_{0}$ is the object’s mass at rest, *v* is its speed, and *c* is the speed of light. To see how the mass changes at high speeds, we can graph the ratio of masses $m\text{/}{m}_{0}$ as a function of the ratio of speeds, $v\text{/}c$ ([ref:CNX_Calc_Figure_02_02_017]).

> FIGURE {fig:CNX_Calc_Figure_02_02_017} src=../../media/CNX_Calc_Figure_02_02_017.jpg
> alt: A graph showing the ratio of masses as a function of the ratio of speed in Einstein’s equation for the mass of a moving object. The x axis is the ratio of the speeds, v/c. The y axis is the ratio of the masses, m/m0. The equation of the function is m = m0 / sqrt(1 –  v2 / c2 ). The graph is only in quadrant 1. It starts at (0,1) and curves up gently until about 0.8, where it increases seemingly exponentially; there is a vertical asymptote at v/c (or x) = 1.
> caption: This graph shows the ratio of masses as a function of the ratio of speeds in Einstein’s equation for the mass of a moving object.

We can see that as the ratio of speeds approaches 1—that is, as the speed of the object approaches the speed of light—the ratio of masses increases without bound. In other words, the function has a vertical asymptote at $v\text{/}c=1.$ We can try a few values of this ratio to test this idea.

> TABLE {tab:fs-id1170572597937} cols=3
> title: Ratio of Masses and Speeds for a Moving Object
> summary: A table with three columns and four rows. The first row contains the headings v/c, sqrt(1 –  v2 / c2 ), and m / m0. The values of the first column under the header are 0.99, 0.999, and 0.9999. The values of the second column under the header are 0.1411, 0.0447, and 0.0141. The values of the third column under the header are 7.089, 22.37, and 70.71.

| $\frac{v}{c}$ | $\sqrt{1-\frac{{v}^{2}}{{c}^{2}}}$ | $\frac{m}{{m}_{0}}$ |
| --- | --- | --- |
| 0.99 | 0.1411 | 7.089 |
| 0.999 | 0.0447 | 22.37 |
| 0.9999 | 0.0141 | 70.71 |

Thus, according to [ref:fs-id1170572597937], if an object with mass 100 kg is traveling at 0.9999*c*, its mass becomes 7071 kg. Since no object can have an infinite mass, we conclude that no object can travel at or more than the speed of light.
:::
:::

## Key Concepts {section:key-concepts}
- A table of values or graph may be used to estimate a limit.
- If the limit of a function at a point does not exist, it is still possible that the limits from the left and right at that point may exist.
- If the limits of a function from the left and right exist and are equal, then the limit of the function is that common value.
- We may use limits to describe infinite behavior of a function at a point.

## Key Equations {section:key-equations}

> TABLE {tab:eip-484} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Intuitive Definition of the Limit** | $\lim_{x\to a}f(x)=L$ |
| **Two Important Limits** | $\lim_{x\to a}x=a\;\lim_{x\to a}c=c$ |
| **One-Sided Limits** | $\lim_{x\to {a}^{-}}f(x)=L\;\lim_{x\to {a}^{+}}f(x)=L$ |
| **Infinite Limits from the Left** | $\lim_{x\to {a}^{-}}f(x)=\text{+}\infty \;\lim_{x\to {a}^{-}}f(x)=\text{−}\infty$ |
| **Infinite Limits from the Right** | $\lim_{x\to {a}^{+}}f(x)=\text{+}\infty \;\lim_{x\to {a}^{+}}f(x)=\text{−}\infty$ |
| **Two-Sided Infinite Limits** | $\lim_{x\to a}f(x)=\text{+}\infty :\lim_{x\to {a}^{-}}f(x)=\text{+}\infty$ and $\lim_{x\to {a}^{+}}f(x)=\text{+}\infty$<br> $\lim_{x\to a}f(x)=\text{−}\infty :\lim_{x\to {a}^{-}}f(x)=\text{−}\infty$ and $\lim_{x\to {a}^{+}}f(x)=\text{−}\infty$ |

##  {section:section-exercises}
For the following exercises, consider the function $f(x)=\frac{{x}^{2}-1}{|x-1|}.$

:::exercise {fs-id1170571655731} type= 
PROBLEM:
**[T]** Complete the following table for the function. Round your solutions to four decimal places.

> TABLE {tab:fs-id1170571655743} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, f(x), x, and f(x). The values of the first column under the header are 0.9, .99, 0.999, and 0.9999. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 1.1, 1.01, 1.001, and 1.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $f(x)$ |  | *x* | $f(x)$ |
| 0.9 | a. | {rows=4}  | 1.1 | e. |
| 0.99 | b. | 1.01 | f. |
| 0.999 | c. | 1.001 | g. |
| 0.9999 | d. | 1.0001 | h. |

:::

:::exercise {fs-id1170571657429} type= 
PROBLEM:
What do your results in the preceding exercise indicate about the two-sided limit $\lim_{x\to 1}f(x)?$ Explain your response.
SOLUTION:
$\lim_{x\to 1}f(x)$ does not exist because $\lim_{x\to {1}^{-}}f(x)=−2≠\lim_{x\to {1}^{+}}f(x)=2.$
:::
For the following exercises, consider the function $f(x)={(1+x)}^{1\text{/}x}.$

:::exercise {fs-id1170572482622} type= 
PROBLEM:
**[T]** Make a table showing the values of *f* for $x=−0.01,−0.001,−0.0001,−0.00001$ and for $x=0.01,0.001,0.0001,0.00001.$ Round your solutions to five decimal places.

> TABLE {tab:fs-id1170572482685} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, f(x), x, and f(x). The values of the first column under the header are -0.01, -0.001, -0.0001, and -0.00001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.01, 0.001, 0.0001, and 0.00001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $f(x)$ |  | *x* | $f(x)$ |
| −0.01 | a. | {rows=4}  | 0.01 | e. |
| −0.001 | b. | 0.001 | f. |
| −0.0001 | c. | 0.0001 | g. |
| −0.00001 | d. | 0.00001 | h. |

:::

:::exercise {fs-id1170571654941} type= 
PROBLEM:
What does the table of values in the preceding exercise indicate about the function $f(x)={(1+x)}^{1\text{/}x}?$
SOLUTION:
$\lim_{x\to 0}{(1+x)}^{1\text{/}x}=2.7183$
:::

:::exercise {fs-id1170572403244} type= 
PROBLEM:
To which mathematical constant does the limit in the preceding exercise appear to be getting closer?
:::
In the following exercises, use the given values to set up a table to evaluate the limits. Round your solutions to eight decimal places.

:::exercise {fs-id1170572403273} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}\frac{\text{sin}\;2x}{x};\;±0.1,±0.01,±0.001,±.0001$

> TABLE {tab:fs-id1170572403332} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, sin(2x)/x, x, and sin(2x) / x. The values of the first column under the header are -0.1, -0.01, -0.001, and -0.0001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $\frac{\text{sin}\;2x}{x}$ |  | *x* | $\frac{\text{sin}\;2x}{x}$ |
| −0.1 | a. | {rows=4}  | 0.1 | e. |
| −0.01 | b. | 0.01 | f. |
| −0.001 | c. | 0.001 | g. |
| −0.0001 | d. | 0.0001 | h. |

SOLUTION:
a. 1.98669331; b. 1.99986667; c. 1.99999867; d. 1.99999999; e. 1.98669331; f. 1.99986667; g. 1.99999867; h. 1.99999999; $\lim_{x\to 0}\frac{\text{sin}\;2x}{x}=2$
:::

:::exercise {fs-id1170571586250} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}\frac{\text{sin}\;3x}{x}$ ±0.1, ±0.01, ±0.001, ±0.0001

> TABLE {tab:fs-id1170572503481} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, sin(3x)/x, x, and sin(3x) / x. The values of the first column under the header are -0.1, -0.01, -0.001, and -0.0001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the fourth column under the header are e, f, g, and h.

| *X* | $\frac{\text{sin}\;3x}{x}$ |  | *x* | $\frac{\text{sin}\;3x}{x}$ |
| −0.1 | a. | {rows=4}  | 0.1 | e. |
| −0.01 | b. | 0.01 | f. |
| −0.001 | c. | 0.001 | g. |
| −0.0001 | d. | 0.0001 | h. |

:::

:::exercise {fs-id1170572499827} type= 
PROBLEM:
Use the preceding two exercises to conjecture (guess) the value of the following limit: $\lim_{x\to 0}\frac{\text{sin}\;ax}{x}$ for *a*, a positive real value.
SOLUTION:
$\lim_{x\to 0}\frac{\text{sin}\;ax}{x}=a$
:::
**[T]** In the following exercises, set up a table of values to find the indicated limit. Round to eight digits.

:::exercise {fs-id1170572499914} type= 
PROBLEM:
$\lim_{x\to 2}\frac{{x}^{2}-4}{{x}^{2}+x-6}$

> TABLE {tab:fs-id1170572499971} cols=5 class=unnumbered
> summary: A table with four columns and five rows. The first row contains the headings x, (x^2 – 4) / (x^2 + x – 6), x, and (x^2 – 4) / (x^2 + x – 6). The values of the first column under the header are 1.9, 1.99, 1.999, and 1.9999. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 2.1, 2.01, 2.001, and 2.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $\frac{{x}^{2}-4}{{x}^{2}+x-6}$ |  | *x* | $\frac{{x}^{2}-4}{{x}^{2}+x-6}$ |
| --- | --- | --- | --- | --- |
| 1.9 | a. |  | 2.1 | e. |
| 1.99 | b. |  | 2.01 | f. |
| 1.999 | c. |  | 2.001 | g. |
| 1.9999 | d. |  | 2.0001 | h. |

:::

:::exercise {fs-id1170572232003} type= 
PROBLEM:
$\lim_{x\to 1}(1-2x)$

> TABLE {tab:fs-id1170572232040} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, 1-2x, x, and 1-2x. The values of the first column under the header are 0.9, 0.99, 0.999, and 0.9999. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 1.1, 1.01, 1.001, and 1.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $1-2x$ |  | *x* | $1-2x$ |
| 0.9 | a. | {rows=4}  | 1.1 | e. |
| 0.99 | b. | 1.01 | f. |
| 0.999 | c. | 1.001 | g. |
| 0.9999 | d. | 1.0001 | h. |

SOLUTION:
a. −0.80000000; b. −0.98000000; c. −0.99800000; d. −0.99980000; e. −1.2000000; f. −1.0200000; g. −1.0020000; h. −1.0002000; $\lim_{x\to 1}(1-2x)=−1$
:::

:::exercise {fs-id1170571600063} type= 
PROBLEM:
$\lim_{x\to 0}\frac{5}{1-{e}^{1\text{/}x}}$

> TABLE {tab:fs-id1170572511246} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, 5 / (1 – e^ (1/x) ), x, and 5 / (1 – e^ (1/x) ). The values of the first column under the header are -0.1, -0.01, -0.001, and -0.0001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $\frac{5}{1-{e}^{1\text{/}x}}$ |  | *x* | $\frac{5}{1-{e}^{1\text{/}x}}$ |
| −0.1 | a. | {rows=4}  | 0.1 | e. |
| −0.01 | b. | 0.01 | f. |
| −0.001 | c. | 0.001 | g. |
| −0.0001 | d. | 0.0001 | h. |

:::

:::exercise {fs-id1170571599593} type= 
PROBLEM:
$\lim_{z\to 0}\frac{z-1}{{z}^{2}(z+3)}$

> TABLE {tab:fs-id1170571599643} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings z, (z-1) / ((z^2)*(z+3)), z, and (z-1) / ((z^2)*(z+3)). The values of the first column under the header are -0.1, -0.01, -0.001, and -0.0001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the fourth column under the header are e, f, g, and h.

| *z* | $\frac{z-1}{{z}^{2}(z+3)}$ |  | *z* | $\frac{z-1}{{z}^{2}(z+3)}$ |
| −0.1 | a. | {rows=4}  | 0.1 | e. |
| −0.01 | b. | 0.01 | f. |
| −0.001 | c. | 0.001 | g. |
| −0.0001 | d. | 0.0001 | h. |

SOLUTION:
a. −37.931934; b. −3377.9264; c. −333,777.93; d. −33,337,778; e. −29.032258; f. −3289.0365; g. −332,889.04; h. −33,328,889 $\lim_{x\to 0}\frac{z-1}{{z}^{2}(z+3)}=\text{−}\infty$
:::

:::exercise {fs-id1170571653910} type= 
PROBLEM:
$\lim_{t\to {0}^{+}}\frac{\text{cos}\;t}{t}$

> TABLE {tab:fs-id1170571653944} cols=2 class=unnumbered
> summary: A table with two columns and five rows. The first row contains the headings t and cos(t) / t. The values of the first column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the second column under the header are a, b, c, and d.

| *t* | $\frac{\text{cos}\;t}{t}$ |
| --- | --- |
| 0.1 | a. |
| 0.01 | b. |
| 0.001 | c. |
| 0.0001 | d. |

:::

:::exercise {fs-id1170572174644} type= 
PROBLEM:
$\lim_{x\to 2}\frac{1-\frac{2}{x}}{{x}^{2}-4}$

> TABLE {tab:fs-id1170572174696} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings x, (1- (2/x)) / (x^2 – 4 ), x, and (1-(2/x)) / (x^2 – 4). The values of the first column under the header are 1.9, 1.99, 1.999, and 1.9999. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 2.1, 2.01, 2.001, and 2.0001. The values of the fourth column under the header are e, f, g, and h.

| *x* | $\frac{1-\frac{2}{x}}{{x}^{2}-4}$ |  | *x* | $\frac{1-\frac{2}{x}}{{x}^{2}-4}$ |
| 1.9 | a. | {rows=4}  | 2.1 | e. |
| 1.99 | b. | 2.01 | f. |
| 1.999 | c. | 2.001 | g. |
| 1.9999 | d. | 2.0001 | h. |

SOLUTION:
a. 0.13495277; b. 0.12594300; c. 0.12509381; d. 0.12500938; e. 0.11614402; f. 0.12406794; g. 0.12490631; h. 0.12499063; $\therefore \lim_{x\to 2}\frac{1-\frac{2}{x}}{{x}^{2}-4}=0.1250=\frac{1}{8}$
:::
**[T]** In the following exercises, set up a table of values and round to eight significant digits. Based on the table of values, make a guess about what the limit is. Then, use a calculator to graph the function and determine the limit. Was the conjecture correct? If not, why does the method of tables fail?

:::exercise {fs-id1170571610933} type= 
PROBLEM:
$\lim_{\theta \to 0}\text{sin}\;(\frac{\pi}{\theta})$

> TABLE {tab:fs-id1170571610969} cols=5 class=unnumbered irregular
> summary: A table with four columns and five rows. The first row contains the headings theta, sin(pi/theta), theta, sin(pi/theta). The values of the first column under the header are -0.1, -0.01, -0.001, and -0.0001. The values of the second column under the header are a, b, c, and d. The values of the third column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the fourth column under the header are e, f, g, and h.

| *θ* | $\text{sin}\;(\frac{\pi}{\theta})$ |  | *θ* | $\text{sin}\;(\frac{\pi}{\theta})$ |
| −0.1 | a. | {rows=4}  | 0.1 | e. |
| −0.01 | b. | 0.01 | f. |
| −0.001 | c. | 0.001 | g. |
| −0.0001 | d. | 0.0001 | h. |

:::

:::exercise {fs-id1170572480427} type= 
PROBLEM:
$\lim_{\alpha \to {0}^{+}}\frac{1}{\alpha}\;\text{cos}\;(\frac{\pi}{\alpha})$

> TABLE {tab:fs-id1170572480472} cols=2 class=unnumbered
> summary: A table with two columns and five rows. The first row contains the headings A and (1/alpha) * cos(pi/alpha). The values of the first column under the header are 0.1, 0.01, 0.001, and 0.0001. The values of the second column under the header are a, b, c, and d.

| $\alpha$ | $\frac{1}{\alpha}\;\text{cos}\;(\frac{\pi}{\alpha})$ |
| --- | --- |
| 0.1 | a. |
| 0.01 | b. |
| 0.001 | c. |
| 0.0001 | d. |

SOLUTION:
a. 10.00000; b. 100.00000; c. 1000.0000; d. 10,000.000; Guess: $\lim_{\alpha \to {0}^{+}}\frac{1}{\alpha}\;\text{cos}\;(\frac{\pi}{\alpha})=\infty ,$ actual: DNE

> IMAGE {img:fs-id1170572243221} src=../../media/CNX_Calc_Figure_02_02_214.jpg
> alt: A graph of the function (1/alpha) * cos (pi / alpha), which oscillates gently until the interval [-.2, .2], where it oscillates rapidly, going to infinity and negative infinity as it approaches the y axis.

:::
In the following exercises, consider the graph of the function $y=f(x)$ shown here. Which of the statements about $y=f(x)$ are true and which are false? Explain why a statement is false.

> IMAGE {img:fs-id1170572243274} src=../../media/CNX_Calc_Figure_02_02_201.jpg
> alt: A graph of a piecewise function with three segments and a point. The first segment is a curve opening upward with vertex at (-8, -6). This vertex is an open circle, and there is a closed circle instead at (-8, -3).  The segment ends at (-2,3), where there is a closed circle. The second segment stretches up asymptotically to infinity along x=-2, changes direction to increasing at about (0,1.25), increases until about (2.25, 3), and decreases until (6,2), where there is an open circle. The last segment starts at (6,5), increases slightly, and then decreases into quadrant four, crossing the x axis at (10,0). All of the changes in direction are smooth curves.

:::exercise {fs-id1170572243290} type= 
PROBLEM:
$\lim_{x\to 10}f(x)=0$
:::

:::exercise {fs-id1170572243335} type= 
PROBLEM:
$\lim_{x\to {−2}^{+}}f(x)=3$
SOLUTION:
False; $\lim_{x\to {−2}^{+}}f(x)=\text{+}\infty$
:::

:::exercise {fs-id1170572217395} type= 
PROBLEM:
$\lim_{x\to −8}f(x)=f(−8)$
:::

:::exercise {fs-id1170572217503} type= 
PROBLEM:
$\lim_{x\to 6}f(x)=5$
SOLUTION:
False; $\lim_{x\to 6}f(x)$ DNE since $\lim_{x\to {6}^{-}}f(x)=2$ and $\lim_{x\to {6}^{+}}f(x)=5.$
:::
In the following exercises, use the following graph of the function $y=f(x)$ to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170572549096} src=../../media/CNX_Calc_Figure_02_02_202.jpg
> alt: A graph of a piecewise function with two segments. The first segment exists for x <=1, and the second segment exists for x > 1. The first segment is linear with a slope of 1 and goes through the origin. Its endpoint is a closed circle at (1,1). The second segment is also linear with a slope of -1. It begins with the open circle at (1,2).

:::exercise {fs-id1170572549107} type= 
PROBLEM:
$\lim_{x\to {1}^{-}}f(x)$
:::

:::exercise {fs-id1170572549151} type= 
PROBLEM:
$\lim_{x\to {1}^{+}}f(x)$
SOLUTION:
2
:::

:::exercise {fs-id1170572540767} type= 
PROBLEM:
$\lim_{x\to 1}f(x)$
:::

:::exercise {fs-id1170572540807} type= 
PROBLEM:
$\lim_{x\to 2}f(x)$
SOLUTION:
1
:::

:::exercise {fs-id1170572540848} type= 
PROBLEM:
$f(1)$
:::
In the following exercises, use the graph of the function $y=f(x)$ shown here to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170572540898} src=../../media/CNX_Calc_Figure_02_02_203.jpg
> alt: A graph of a piecewise function with two segments. The first is a linear function for x < 0. There is an open circle at (0,1), and its slope is -1. The second segment is the right half of a parabola opening upward. Its vertex is a closed circle at (0, -4), and it goes through the point (2,0).

:::exercise {fs-id1170572540909} type= 
PROBLEM:
$\lim_{x\to {0}^{-}}f(x)$
SOLUTION:
1
:::

:::exercise {fs-id1170571563288} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}f(x)$
:::

:::exercise {fs-id1170571563331} type= 
PROBLEM:
$\lim_{x\to 0}f(x)$
SOLUTION:
DNE
:::

:::exercise {fs-id1170571563372} type= 
PROBLEM:
$\lim_{x\to 2}f(x)$
:::
In the following exercises, use the graph of the function $y=f(x)$ shown here to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170571563436} src=../../media/CNX_Calc_Figure_02_02_204.jpg
> alt: A graph of a piecewise function with three segments, all linear. The first exists for x < -2, has a slope of 1, and ends at the open circle at (-2, 0). The second exists over the interval [-2, 2], has a slope of -1, goes through the origin, and has closed circles at its endpoints (-2, 2) and (2,-2). The third exists for x>2, has a slope of 1, and begins at the open circle (2,2).

:::exercise {fs-id1170571563448} type= 
PROBLEM:
$\lim_{x\to {−2}^{-}}f(x)$
SOLUTION:
0
:::

:::exercise {fs-id1170572624069} type= 
PROBLEM:
$\lim_{x\to {−2}^{+}}f(x)$
:::

:::exercise {fs-id1170572624115} type= 
PROBLEM:
$\lim_{x\to −2}f(x)$
SOLUTION:
DNE
:::

:::exercise {fs-id1170572624157} type= 
PROBLEM:
$\lim_{x\to {2}^{-}}f(x)$
:::

:::exercise {fs-id1170572624201} type= 
PROBLEM:
$\lim_{x\to {2}^{+}}f(x)$
SOLUTION:
2
:::

:::exercise {fs-id1170572624244} type= 
PROBLEM:
$\lim_{x\to 2}f(x)$
:::
In the following exercises, use the graph of the function $y=g(x)$ shown here to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170572380940} src=../../media/CNX_Calc_Figure_02_02_205.jpg
> alt: A graph of a piecewise function with two segments. The first exists for x>=0 and is the left half of an upward opening parabola with vertex at the closed circle (0,3). The second exists for x>0 and is the right half of a downward opening parabola with vertex at the open circle (0,0).

:::exercise {fs-id1170572380953} type= 
PROBLEM:
$\lim_{x\to {0}^{-}}g(x)$
SOLUTION:
3
:::

:::exercise {fs-id1170572380997} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}g(x)$
:::

:::exercise {fs-id1170572381041} type= 
PROBLEM:
$\lim_{x\to 0}g(x)$
SOLUTION:
DNE
:::
In the following exercises, use the graph of the function $y=h(x)$ shown here to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170572372604} src=../../media/CNX_Calc_Figure_02_02_206.jpg
> alt: A graph of a function with two curves approaching 0 from quadrant 1 and quadrant 3. The curve in quadrant one appears to be the top half of a parabola opening to the right of the y axis along the x axis with vertex at the origin. The curve in quadrant three appears to be the left half of a parabola opening downward with vertex at the origin.

:::exercise {fs-id1170572372618} type= 
PROBLEM:
$\lim_{x\to {0}^{-}}h(x)$
:::

:::exercise {fs-id1170572372662} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}h(x)$
SOLUTION:
0
:::

:::exercise {fs-id1170572372705} type= 
PROBLEM:
$\lim_{x\to 0}h(x)$
:::
In the following exercises, use the graph of the function $y=f(x)$ shown here to find the values, if possible. Estimate when necessary.

> IMAGE {img:fs-id1170572372770} src=../../media/CNX_Calc_Figure_02_02_207.jpg
> alt: A graph with a curve and a point. The point is a closed circle at (0,-2). The curve is part of an upward opening parabola with vertex at (1,-1). It exists for x > 0, and there is a closed circle at the origin.

:::exercise {fs-id1170572372780} type= 
PROBLEM:
$\lim_{x\to {0}^{-}}f(x)$
SOLUTION:
−2
:::

:::exercise {fs-id1170572267940} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}f(x)$
:::

:::exercise {fs-id1170572267983} type= 
PROBLEM:
$\lim_{x\to 0}f(x)$
SOLUTION:
DNE
:::

:::exercise {fs-id1170572268024} type= 
PROBLEM:
$\lim_{x\to 1}f(x)$
:::

:::exercise {fs-id1170572268064} type= 
PROBLEM:
$\lim_{x\to 2}f(x)$
SOLUTION:
0
:::
In the following exercises, sketch the graph of a function with the given properties.

:::exercise {fs-id1170572268108} type= 
PROBLEM:
$\lim_{x\to 2}f(x)=1,\lim_{x\to {4}^{-}}f(x)=3,\lim_{x\to {4}^{+}}f(x)=6,f(4)$ is not defined.
:::

:::exercise {fs-id1170572219513} type= 
PROBLEM:
$Asx\to -\infty ,f(x)\to 0,\lim_{x\to {−1}^{-}}f(x)=\text{−}\infty ,$ $\lim_{x\to {−1}^{+}}f(x)=\infty ,\lim_{x\to 0}f(x)=f(0),f(0)=1,Asx\to \infty ,f(x)\to \text{−}\infty$
SOLUTION:
Answers may vary.

> IMAGE {img:fs-id1170572435009} src=../../media/CNX_Calc_Figure_02_02_209.jpg
> alt: A graph of a piecewise function with two segments. The first segment is in quadrant three and asymptotically goes to negative infinity along the y axis and 0 along the x axis. The second segment consists of two curves. The first appears to be the left half of an upward opening parabola with vertex at (0,1). The second appears to be the right half of a downward opening parabola with vertex at (0,1) as well.

:::

:::exercise {fs-id1170572435026} type= 
PROBLEM:
$Asx\to -\infty ,f(x)\to 2,\lim_{x\to {3}^{-}}f(x)=\text{−}\infty ,$ $\lim_{x\to {3}^{+}}f(x)=\infty ,Asx\to \infty ,f(x)\to 2,f(0)=\frac{−1}{3}$
:::

:::exercise {fs-id1170572590126} type= 
PROBLEM:
$Asx\to -\infty ,f(x)\to 2,\lim_{x\to −2}f(x)=\text{−}\infty ,$ $Asx\to \infty ,f(x)\to 2,f(0)=0$
SOLUTION:
Answers may vary.

> IMAGE {img:fs-id1170572552623} src=../../media/CNX_Calc_Figure_02_02_211.jpg
> alt: A graph containing two curves. The first goes to 2 asymptotically along y=2 and to negative infinity along x = -2. The second goes to negative infinity along x=-2 and to 2 along y=2.

:::

:::exercise {fs-id1170572552638} type= 
PROBLEM:
$Asx\to -\infty ,f(x)\to 0,\lim_{x\to {−1}^{-}}f(x)=\infty ,\lim_{x\to {−1}^{+}}f(x)=\text{−}\infty ,$ $f(0)=−1,\lim_{x\to {1}^{-}}f(x)=\text{−}\infty ,\lim_{x\to {1}^{+}}f(x)=\infty ,Asx\to \infty ,f(x)\to 0$
:::

:::exercise {fs-id1170572128792} type= 
PROBLEM:
Shock waves arise in many physical applications, ranging from supernovas to detonation waves. A graph of the density of a shock wave with respect to distance, *x*, is shown here. We are mainly interested in the location of the front of the shock, labeled ${x}_{\text{SF}}$ in the diagram.

> IMAGE {img:fs-id1170572128821} src=../../media/CNX_Calc_Figure_02_02_215.jpg
> alt: A graph in quadrant one of the density of a shockwave with three labeled points: p1 and p2 on the y axis, with p1 > p2, and xsf on the x axis. It consists of y= p1 from 0 to xsf, x = xsf from y= p1 to y=p2, and y=p2 for values greater than or equal to xsf.

a. Evaluate $\lim_{x\to {x}_{SF}{}^{+}}ρ(x).$
b. Evaluate $\lim_{x\to {x}_{SF}{}^{-}}ρ(x).$
c. Evaluate $\lim_{x\to {x}_{SF}}ρ(x).$ Explain the physical meanings behind your answers.
SOLUTION:
a. ${ρ}_{2}$ b. ${ρ}_{1}$ c. DNE unless ${ρ}_{1}={ρ}_{2}.$ As you approach ${x}_{\text{SF}}$ from the left, you are in the high-density area of the shock. When you approach from the right, you have not experienced the “shock” yet and are at a lower density.
:::

:::exercise {fs-id1170572478118} type= 
PROBLEM:
A track coach uses a camera with a fast shutter to estimate the position of a runner with respect to time. A table of the values of position of the athlete versus time is given here, where *x* is the position in meters of the runner and *t* is time in seconds. What is $\lim_{t\to 2}x(t)?$ What does it mean physically?

> TABLE {tab:fs-id1170572541741} cols=2 class=unnumbered
> summary: A table with two columns and seven rows. The first row contains the headings t (sec) and x (m). The values of the first column under the header are 1.75, 1.95, 1.99, 2.01, 2.05, and 2.25. The values of the second column under the header are 4.5, 6.1, 6.42, 6.58, 6.9, and 8.5.

| *t* **(sec)** | *x* **(m)** |
| --- | --- |
| 1.75 | 4.5 |
| 1.95 | 6.1 |
| 1.99 | 6.42 |
| 2.01 | 6.58 |
| 2.05 | 6.9 |
| 2.25 | 8.5 |

:::

## Glossary
- {def} **infinite limit**: A function has an infinite limit at a point *a* if it either increases or decreases without bound as it approaches *a*
- {def} **intuitive definition of the limit**: If all values of the function $f(x)$ approach the real number *L* as the values of $x(≠a)$ approach *a*, $f(x)$ approaches *L*
- {def} **one-sided limit**: A one-sided limit of a function is a limit taken from either the left or the right
- {def} **vertical asymptote**: A function has a vertical asymptote at $x=a$ if the limit as *x* approaches *a* from the right or left is infinite

# Numerical Integration

## Learning Objectives {section:learning-objectives}
- Approximate the value of a definite integral by using the midpoint and trapezoidal rules.
- Determine the absolute and relative error in using a numerical integration technique.
- Estimate the absolute and relative error using an error-bound formula.
- Recognize when the midpoint and trapezoidal rules over- or underestimate the true value of an integral.
- Use Simpson’s rule to approximate the value of a definite integral to a given accuracy.

The antiderivatives of many functions either cannot be expressed or cannot be expressed easily in closed form (that is, in terms of known functions). Consequently, rather than evaluate definite integrals of these functions directly, we resort to various techniques of {term:numerical integration} to approximate their values. In this section we explore several of these techniques. In addition, we examine the process of estimating the error in using these techniques.

## The Midpoint Rule
Earlier in this text we defined the definite integral of a function over an interval as the limit of {index:Riemann sums}. In general, any Riemann sum of a function $f(x)$ over an interval $[a,b]$ may be viewed as an estimate of ${\displaystyle \int_{a}^{b}f(x)dx}.$ Recall that a Riemann sum of a function $f(x)$ over an interval $[a,b]$ is obtained by selecting a partition

$P=\{{x}_{0},{x}_{1},{x}_{2}\text{,…},{x}_{n}\},\;\text{where}\;a={x}_{0}<{x}_{1}<{x}_{2}<⋯<{x}_{n}=b$  {eq:fs-id1165042273486}

and a set

$S=\{{x}_{1}^{*},{x}_{2}^{*}\text{,…},{x}_{n}^{*}\},\;\text{where}\;{x}_{i-1}\le {x}_{i}^{*}\le {x}_{i}\;\text{for all}\;i.$  {eq:fs-id1165041974915}

The Riemann sum corresponding to the partition $P$ and the set $S$ is given by ${\displaystyle \sum_{i=1}^{n} f({x}_{i}^{*})\text{Δ}{x}_{i}},$ where $\text{Δ}{x}_{i}={x}_{i}-{x}_{i-1},$ the length of the *i*th subinterval.
The {term:midpoint rule} for estimating a definite integral uses a Riemann sum with subintervals of equal width and the midpoints, ${m}_{i},$ of each subinterval in place of ${x}_{i}^{*}.$ Formally, we state a theorem regarding the convergence of the midpoint rule as follows.

:::note [theorem] The Midpoint Rule
Assume that $f(x)$ is continuous on $[a,b].$ Let *n* be a positive integer and $\text{Δ}x=\frac{b-a}{n}.$ If $[a,b]$ is divided into $n$ subintervals, each of length $\text{Δ}x,$ and ${m}_{i}$ is the midpoint of the *i*th subinterval, set

$$ {M}_{n}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({m}_{i})\text{Δ}x. $$  {eq:fs-id1165040697119}

Then $\lim_{n\to \infty}{M}_{n}={\displaystyle \int_{a}^{b}f(x)dx}.$
:::
As we can see in [ref:CNX_Calc_Figure_07_06_001], if $f(x)\ge 0$ over $[a,b],$ then $\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({m}_{i})\text{Δ}x$ corresponds to the sum of the areas of rectangles approximating the area between the graph of $f(x)$ and the *x*-axis over $[a,b].$ The graph shows the rectangles corresponding to ${M}_{4}$ for a nonnegative function over a closed interval $[a,b].$

> FIGURE {fig:CNX_Calc_Figure_07_06_001} src=../../media/CNX_Calc_Figure_07_06_001.jpg
> alt: This figure is a graph of a non-negative function in the first quadrant. The function increases and decreases. The quadrant is divided into a grid. Beginning on the x-axis at the point labeled a = x sub 0, there are rectangles shaded whose heights are approximately the height of the curve. The x-axis is scaled by increments of msub1, x sub 1, m sub 2, x sub 2, m sub 3, x sub 3, m sub 4 and b = x sub 4.
> caption: The midpoint rule approximates the area between the graph of $f(x)$ and the *x*-axis by summing the areas of rectangles with midpoints that are points on $f(x).$

:::example {ex:fs-id1165040799117} Using the Midpoint Rule with ${M}_{4}$

:::exercise {fs-id1165041845776} type= 
PROBLEM:
Use the midpoint rule to estimate ${\displaystyle \int_{0}^{1}{x}^{2}dx}$ using four subintervals. Compare the result with the actual value of this integral.
SOLUTION:
Each subinterval has length $\text{Δ}x=\frac{1-0}{4}=\frac{1}{4}.$ Therefore, the subintervals consist of

$[0,\frac{1}{4}],[\frac{1}{4},\frac{1}{2}],[\frac{1}{2},\frac{3}{4}],\;\text{and}\;[\frac{3}{4},1].$  {eq:fs-id1165042066546}

The midpoints of these subintervals are $\{\frac{1}{8},\frac{3}{8},\frac{5}{8},\frac{7}{8}\}.$ Thus,

${M}_{4}=\frac{1}{4}f(\frac{1}{8})+\frac{1}{4}f(\frac{3}{8})+\frac{1}{4}f(\frac{5}{8})+\frac{1}{4}f(\frac{7}{8})=\frac{1}{4}\cdot \frac{1}{64}+\frac{1}{4}\cdot \frac{9}{64}+\frac{1}{4}\cdot \frac{25}{64}+\frac{1}{4}\cdot \frac{49}{64}=\frac{21}{64}.$  {eq:fs-id1165041791048}

Since

${\displaystyle \int_{0}^{1}{x}^{2}dx=\frac{1}{3}}\;\text{and}\;|\frac{1}{3}-\frac{21}{64}|=\frac{1}{192}\approx 0.0052,$  {eq:fs-id1165041915328}

we see that the midpoint rule produces an estimate that is somewhat close to the actual value of the definite integral.
:::
:::

:::example {ex:fs-id1165041840100} Using the Midpoint Rule with ${M}_{6}$

:::exercise {fs-id1165042126032} type= 
PROBLEM:
Use ${M}_{6}$ to estimate the length of the curve $y=\frac{1}{2}{x}^{2}$ on $[1,4].$
SOLUTION:
The length of $y=\frac{1}{2}{x}^{2}$ on $[1,4]$ is

${\displaystyle \int_{1}^{4}\sqrt{1+{(\frac{dy}{dx})}^{2}}\;dx}.$  {eq:fs-id1165041813602}

Since $\frac{dy}{dx}=x,$ this integral becomes ${\displaystyle \int_{1}^{4}\sqrt{1+{x}^{2}}\;dx}.$
If $[1,4]$ is divided into six subintervals, then each subinterval has length $\text{Δ}x=\frac{4-1}{6}=\frac{1}{2}$ and the midpoints of the subintervals are $\{\frac{5}{4},\frac{7}{4},\frac{9}{4},\frac{11}{4},\frac{13}{4},\frac{15}{4}\}.$ If we set $f(x)=\sqrt{1+{x}^{2}},$

$\begin{array}{rl}{M}_{6} & =\frac{1}{2}f(\frac{5}{4})+\frac{1}{2}f(\frac{7}{4})+\frac{1}{2}f(\frac{9}{4})+\frac{1}{2}f(\frac{11}{4})+\frac{1}{2}f(\frac{13}{4})+\frac{1}{2}f(\frac{15}{4}) \\ & \approx \frac{1}{2}(1.6008+2.0156+2.4622+2.9262+3.4004+3.8810)=8.1431.\end{array}$  {eq:fs-id1165042017909}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042058790} type= 
PROBLEM:
Use the midpoint rule with $n=2$ to estimate ${\displaystyle \int_{1}^{2}\frac{1}{x}dx}.$
SOLUTION:
$\frac{24}{35}$
COMMENTARY: Hint
$\text{Δ}x=\frac{1}{2},$ ${m}_{1}=\frac{5}{4},$ and ${m}_{2}=\frac{7}{4}.$
:::
:::

## The Trapezoidal Rule
We can also approximate the value of a definite integral by using trapezoids rather than rectangles. In [ref:CNX_Calc_Figure_07_06_002], the area beneath the curve is approximated by trapezoids rather than by rectangles.

> FIGURE {fig:CNX_Calc_Figure_07_06_002} src=../../media/CNX_Calc_Figure_07_06_002.jpg
> alt: This figure is a graph of a non-negative function in the first quadrant. The function increases and decreases. The quadrant is divided into a grid. Beginning on the x-axis at the point labeled a = x sub 0, there are trapezoids shaded whose heights are approximately the height of the curve. The x-axis is scaled by increments of a = x sub 0, x sub 1, x sub 2, x sub 3, and b = x sub 4.
> caption: Trapezoids may be used to approximate the area under a curve, hence approximating the definite integral.

The {term:trapezoidal rule} for estimating definite integrals uses trapezoids rather than rectangles to approximate the area under a curve. To gain insight into the final form of the rule, consider the trapezoids shown in [ref:CNX_Calc_Figure_07_06_002]. We assume that the length of each subinterval is given by $\text{Δ}x.$ First, recall that the area of a trapezoid with a height of *h* and bases of length ${b}_{1}$ and ${b}_{2}$ is given by $\text{Area}=\frac{1}{2}h({b}_{1}+{b}_{2}).$ We see that the first trapezoid has a height $\text{Δ}x$ and parallel bases of length $f({x}_{0})$ and $f({x}_{1}).$ Thus, the area of the first trapezoid in [ref:CNX_Calc_Figure_07_06_002] is

$\frac{1}{2}\text{Δ}x(f({x}_{0})+f({x}_{1})).$  {eq:fs-id1165040644975}

The areas of the remaining three trapezoids are

$\frac{1}{2}\text{Δ}x(f({x}_{1})+f({x}_{2})),\frac{1}{2}\text{Δ}x(f({x}_{2})+f({x}_{3})),\text{and}\;\frac{1}{2}\text{Δ}x(f({x}_{3})+f({x}_{4})).$  {eq:fs-id1165042135238}

Consequently,

${\displaystyle \int_{a}^{b}f(x)dx\approx \frac{1}{2}\text{Δ}x(f({x}_{0})+f({x}_{1}))+\frac{1}{2}\text{Δ}x(f({x}_{1})+f({x}_{2}))+\frac{1}{2}\text{Δ}x(f({x}_{2})+f({x}_{3}))+\frac{1}{2}\text{Δ}x(f({x}_{3})+f({x}_{4}))}.$  {eq:fs-id1165042136358}

After taking out a common factor of $\frac{1}{2}\text{Δ}x$ and combining like terms, we have

${\displaystyle \int_{a}^{b}f(x)dx\approx \frac{1}{2}\text{Δ}x(f({x}_{0})+2f({x}_{1})+2f({x}_{2})+2f({x}_{3})+f({x}_{4})).}$  {eq:fs-id1165041782960}

Generalizing, we formally state the following rule.

:::note [theorem] The Trapezoidal Rule
Assume that $f(x)$ is continuous over $[a,b].$ Let *n* be a positive integer and $\text{Δ}x=\frac{b-a}{n}.$ Let $[a,b]$ be divided into $n$ subintervals, each of length $\text{Δ}x,$ with endpoints at $P=\{{x}_{0},{x}_{1},{x}_{2}\text{…},{x}_{n}\}.$ Set

$$ {T}_{n}=\frac{1}{2}\text{Δ}x(f({x}_{0})+2f({x}_{1})+2f({x}_{2})+⋯+2f({x}_{n-1})+f({x}_{n})). $$  {eq:fs-id1165041762506}

Then, $\lim_{n\to \text{+}\infty}{T}_{n}={\displaystyle \int_{a}^{b}f(x)dx}.$
:::
Before continuing, let’s make a few observations about the trapezoidal rule. First of all, it is useful to note that

${T}_{n}=\frac{1}{2}({L}_{n}+{R}_{n})\;\text{where}\;{L}_{n}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({x}_{i-1})\text{Δ}x\;\text{and}\;{R}_{n}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({x}_{i})\text{Δ}x.$  {eq:fs-id1165040697663}

That is, ${L}_{n}$ and ${R}_{n}$ approximate the integral using the left-hand and right-hand endpoints of each subinterval, respectively. In addition, a careful examination of [ref:CNX_Calc_Figure_07_06_003] leads us to make the following observations about using the trapezoidal rules and midpoint rules to estimate the definite integral of a nonnegative function. The trapezoidal rule tends to overestimate the value of a definite integral systematically over intervals where the function is concave up and to underestimate the value of a definite integral systematically over intervals where the function is concave down. On the other hand, the midpoint rule tends to average out these errors somewhat by partially overestimating and partially underestimating the value of the definite integral over these same types of intervals. This leads us to hypothesize that, in general, the midpoint rule tends to be more accurate than the trapezoidal rule.

> FIGURE {fig:CNX_Calc_Figure_07_06_003} src=../../media/CNX_Calc_Figure_07_06_003.jpg
> alt: This figure has two graphs, both of the same non-negative function in the first quadrant. The function increases and decreases. The quadrant is divided into a grid. The first graph, beginning on the x-axis at the point labeled a = x sub 0, there are trapezoids shaded whose heights are approximately the height of the curve. The x-axis is scaled by increments of a = x sub 0, xsub1, x sub 2, x sub 3, and b = x sub 4. The second graph has on the x-axis at the point labeled a = x sub 0. There are rectangles shaded whose heights are approximately the height of the curve. The x-axis is scaled by increments of m sub 1, x sub 1, m sub 2, x sub 2, m sub 3, x sub 3, m sub 4 and b = x sub 4.
> caption: The trapezoidal rule tends to be less accurate than the midpoint rule.

:::example {ex:fs-id1165042234318} Using the Trapezoidal Rule

:::exercise {fs-id1165042008444} type= 
PROBLEM:
Use the trapezoidal rule to estimate ${\displaystyle \int_{0}^{1}{x}^{2}dx}$ using four subintervals.
SOLUTION:
The endpoints of the subintervals consist of elements of the set $P=\{0,\frac{1}{4},\frac{1}{2},\frac{3}{4},1\}$ and $\text{Δ}x=\frac{1-0}{4}=\frac{1}{4}.$ Thus,

$\begin{array}{rl}{\displaystyle \int_{0}^{1}{x}^{2}dx} & \approx \frac{1}{2}\cdot \frac{1}{4}(f(0)+2f(\frac{1}{4})+2f(\frac{1}{2})+2f(\frac{3}{4})+f(1)) \\ & =\frac{1}{8}(0+2\cdot \frac{1}{16}+2\cdot \frac{1}{4}+2\cdot \frac{9}{16}+1) \\ & =\frac{11}{32}.\end{array}$  {eq:fs-id1165041788152}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041814721} type= 
PROBLEM:
Use the trapezoidal rule with $n=2$ to estimate ${\displaystyle \int_{1}^{2}\frac{1}{x}dx}.$
SOLUTION:
$\frac{17}{24}$
COMMENTARY: Hint
Set $\text{Δ}x=\frac{1}{2}.$ The endpoints of the subintervals are the elements of the set $P=\{1,\frac{3}{2},2\}.$
:::
:::

## Absolute and Relative Error
An important aspect of using these numerical approximation rules consists of calculating the error in using them for estimating the value of a definite integral. We first need to define {term:absolute error} and {term:relative error}.

:::note [definition] Definition
If $B$ is our estimate of some quantity having an actual value of $A,$ then the absolute error is given by $|A-B|.$ The relative error is the error as a percentage of the absolute value and is given by $|\frac{A-B}{A}|=|\frac{A-B}{A}|\cdot 100\text{\%}.$
:::

:::example {ex:fs-id1165040640346} Calculating Error in the Midpoint Rule

:::exercise {fs-id1165040640348} type= 
PROBLEM:
Calculate the absolute and relative error in the estimate of ${\displaystyle \int_{0}^{1}{x}^{2}dx}$ using the midpoint rule, found in [ref:fs-id1165040799117].
SOLUTION:
The calculated value is ${\displaystyle \int_{0}^{1}{x}^{2}dx=\frac{1}{3}}$ and our estimate from the example is ${M}_{4}=\frac{21}{64}.$ Thus, the absolute error is given by $|(\frac{1}{3})-(\frac{21}{64})|=\frac{1}{192}\approx 0.0052.$ The relative error is

$\frac{1\text{/}192}{1\text{/}3}=\frac{1}{64}\approx 0.015625\approx 1.6\text{\%}.$  {eq:fs-id1165042048763}

:::
:::

:::example {ex:fs-id1165040736472} Calculating Error in the Trapezoidal Rule

:::exercise {fs-id1165040736474} type= 
PROBLEM:
Calculate the absolute and relative error in the estimate of ${\displaystyle \int_{0}^{1}{x}^{2}dx}$ using the trapezoidal rule, found in [ref:fs-id1165042234318].
SOLUTION:
The calculated value is ${\displaystyle \int_{0}^{1}{x}^{2}dx=\frac{1}{3}}$ and our estimate from the example is ${T}_{4}=\frac{11}{32}.$ Thus, the absolute error is given by $|\frac{1}{3}-\frac{11}{32}|=\frac{1}{96}\approx 0.0104.$ The relative error is given by

$\frac{1\text{/}96}{1\text{/}3}=0.03125\approx 3.1\text{\%}.$  {eq:fs-id1165040745022}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042133506} type= 
PROBLEM:
In an earlier checkpoint, we estimated ${\displaystyle \int_{1}^{2}\frac{1}{x}dx}$ to be $\frac{24}{35}$ using ${T}_{2}.$ The actual value of this integral is $\text{ln}\;2.$ Using $\frac{24}{35}\approx 0.6857$ and $\text{ln}\;2\approx 0.6931,$ calculate the absolute error and the relative error.
SOLUTION:
0.0074, 1.1%
COMMENTARY: Hint
Use the previous examples as a guide.
:::
:::
In the two previous examples, we were able to compare our estimate of an integral with the actual value of the integral; however, we do not typically have this luxury. In general, if we are approximating an integral, we are doing so because we cannot compute the exact value of the integral itself easily. Therefore, it is often helpful to be able to determine an upper bound for the error in an approximation of an integral. The following theorem provides error bounds for the midpoint and trapezoidal rules. The theorem is stated without proof.

:::note [theorem] Error Bounds for the Midpoint and Trapezoidal Rules
Let $f(x)$ be a continuous function over $[a,b],$ having a second derivative ${f}^{''}(x)$ over this interval. If $M$ is the maximum value of $|{f}^{''}(x)|$ over $[a,b],$ then the upper bounds for the error in using ${M}_{n}$ and ${T}_{n}$ to estimate ${\displaystyle \int_{a}^{b}f(x)dx}$ are

$$ \text{Error in}\;{M}_{n}\le \frac{M{(b-a)}^{3}}{24{n}^{2}} $$  {eq:fs-id1165041827796}

and

$$ \text{Error in}\;{T}_{n}\le \frac{M{(b-a)}^{3}}{12{n}^{2}}. $$  {eq:fs-id1165041814747}

:::
We can use these bounds to determine the value of $n$ necessary to guarantee that the error in an estimate is less than a specified value.

:::example {ex:fs-id1165042277050} Determining the Number of Intervals to Use

:::exercise {fs-id1165042277052} type= 
PROBLEM:
What value of $n$ should be used to guarantee that an estimate of ${\displaystyle \int_{0}^{1}{e}^{{x}^{2}}dx}$ is accurate to within 0.01 if we use the midpoint rule?
SOLUTION:
We begin by determining the value of $M,$ the maximum value of $|{f}^{''}(x)|$ over $[0,1]$ for $f(x)={e}^{{x}^{2}}.$ Since ${f}^{'}(x)=2x{e}^{{x}^{2}},$ we have

${f}^{''}(x)=2{e}^{{x}^{2}}+4{x}^{2}{e}^{{x}^{2}}.$  {eq:fs-id1165040656611}

Thus,

$|{f}^{''}(x)|=2{e}^{{x}^{2}}(1+2{x}^{2})\le 2\cdot e\cdot 3=6e.$  {eq:fs-id1165042196943}

From the error-bound [ref:fs-id1165041827796], we have

$\text{Error in}\;{M}_{n}\le \frac{M{(b-a)}^{3}}{24{n}^{2}}\le \frac{6e{(1-0)}^{3}}{24{n}^{2}}=\frac{6e}{24{n}^{2}}.$  {eq:fs-id1165040716363}

Now we solve the following inequality for $n\text{:}$

$\frac{6e}{24{n}^{2}}\le 0.01.$  {eq:fs-id1165042265412}

Thus, $n\ge \sqrt{\frac{600e}{24}}\approx 8.24.$ Since $n$ must be an integer satisfying this inequality, a choice of $n=9$ would guarantee that $|{\displaystyle \int_{0}^{1}{e}^{{x}^{2}}dx-{M}_{n}}|<0.01.$
COMMENTARY: Analysis
We might have been tempted to round $8.24$ down and choose $n=8,$ but this would be incorrect because we must have an integer greater than or equal to $8.24.$ We need to keep in mind that the error estimates provide an upper bound only for the error. The actual estimate may, in fact, be a much better approximation than is indicated by the error bound.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041832109} type= 
PROBLEM:
Use [ref:fs-id1165041814747] to find an upper bound for the error in using ${M}_{4}$ to estimate ${\displaystyle \int_{0}^{1}{x}^{2}dx}.$
SOLUTION:
$\frac{1}{192}$
COMMENTARY: Hint
${f}^{''}(x)=2,$ so $M=2.$
:::
:::

## Simpson’s Rule
With the midpoint rule, we estimated areas of regions under curves by using rectangles. In a sense, we approximated the curve with piecewise constant functions. With the trapezoidal rule, we approximated the curve by using piecewise linear functions. What if we were, instead, to approximate a curve using piecewise quadratic functions? With {term:Simpson’s rule}, we do just this. We partition the interval into an even number of subintervals, each of equal width. Over the first pair of subintervals we approximate ${\displaystyle \int_{{x}_{0}}^{{x}_{2}}f(x)dx}$ with ${\displaystyle \int_{{x}_{0}}^{{x}_{2}}p(x)dx,}$ where $p(x)=A{x}^{2}+Bx+C$ is the quadratic function passing through $({x}_{0},f({x}_{0})),$ $({x}_{1},f({x}_{1})),$ and $({x}_{2},f({x}_{2}))$ ([ref:CNX_Calc_Figure_07_06_004]). Over the next pair of subintervals we approximate ${\displaystyle \int_{{x}_{2}}^{{x}_{4}}f(x)dx}$ with the integral of another quadratic function passing through $({x}_{2},f({x}_{2})),$ $({x}_{3},f({x}_{3})),$ and $({x}_{4},f({x}_{4})).$ This process is continued with each successive pair of subintervals.

> FIGURE {fig:CNX_Calc_Figure_07_06_004} src=../../media/CNX_Calc_Figure_07_06_004.jpg
> alt: This figure has two graphs, both of the same non-negative function in the first quadrant. The function increases and decreases. The quadrant is divided into a grid. The first graph, beginning on the x-axis at the point labeled x sub 0, there are trapezoids shaded whose heights are represented by the function p(x), which is a curve following an approximate path of the original graph. The x-axis is scaled by increments of x sub 0, x sub 1, x sub 2. The second graph has on the x-axis at the point labeled x sub 0. There are shaded regions under the curve, divided by x sub 0, x sub 1, x sub 2, x sub 3, and x sub 4. The curve is sectioned into two different parts above the shaded areas. These two parts are labeled p sub 1(x) and p sub 2(x).
> caption: With Simpson’s rule, we approximate a definite integral by integrating a piecewise quadratic function.

To understand the formula that we obtain for Simpson’s rule, we begin by deriving a formula for this approximation over the first two subintervals. As we go through the derivation, we need to keep in mind the following relationships:

$\begin{array}{l}f({x}_{0})=p({x}_{0})=A{x}_{0}{}^{2}+B{x}_{0}+C \\ f({x}_{1})=p({x}_{1})=A{x}_{1}{}^{2}+B{x}_{1}+C \\ f({x}_{2})=p({x}_{2})=A{x}_{2}{}^{2}+B{x}_{2}+C\end{array}$  {eq:fs-id1165040644485}

${x}_{2}-{x}_{0}=2\text{Δ}x,$ where $\text{Δ}x$ is the length of a subinterval.

${x}_{2}+{x}_{0}=2{x}_{1},\;\text{since}\;{x}_{1}=\frac{({x}_{2}+{x}_{0})}{2}.$  {eq:fs-id1165042288603}

Thus,

$\begin{array}{rllll}{\displaystyle \int_{{x}_{0}}^{{x}_{2}}f(x)dx} & \approx {\displaystyle \int_{{x}_{0}}^{{x}_{2}}p(x)dx} & & & \\ & ={\displaystyle \int_{{x}_{0}}^{{x}_{2}}(A{x}^{2}+Bx+C)dx} & & & \\ & =\frac{A}{3}{x}^{3}+\frac{B}{2}{x}^{2}+Cx\left|\begin{array}{l}{}^{{x}_{2}} \\ {}_{{x}_{0}}\end{array}\right. & & & \text{Find the antiderivative.} \\ & =\frac{A}{3}({x}_{2}{}^{3}-{x}_{0}{}^{3})+\frac{B}{2}({x}_{2}{}^{2}-{x}_{0}{}^{2})+C({x}_{2}-{x}_{0}) & & & \text{Evaluate the antiderivative.} \\ & =\frac{A}{3}({x}_{2}-{x}_{0})({x}_{2}{}^{2}+{x}_{2}{x}_{0}+{x}_{0}{}^{2}) & & & \\ & +\frac{B}{2}({x}_{2}-{x}_{0})({x}_{2}+{x}_{0})+C({x}_{2}-{x}_{0}) & & & \\ & =\frac{{x}_{2}-{x}_{0}}{6}(2A({x}_{2}{}^{2}+{x}_{2}{x}_{0}+{x}_{0}{}^{2})+3B({x}_{2}+{x}_{0})+6C) & & & \text{Factor out}\;\frac{{x}_{2}-{x}_{0}}{6}. \\ & =\frac{\text{Δ}x}{3}((A{x}_{2}{}^{2}+B{x}_{2}+C)+(A{x}_{0}{}^{2}+B{x}_{0}+C) & & & \\ & +A({x}_{2}{}^{2}+2{x}_{2}{x}_{0}+{x}_{0}{}^{2})+2B({x}_{2}+{x}_{0})+4C) & & & \\ & =\frac{\text{Δ}x}{3}(f({x}_{2})+f({x}_{0})+A{({x}_{2}+{x}_{0})}^{2}+2B({x}_{2}+{x}_{0})+4C) & & & \text{Rearrange the terms.} \\ & & & & \begin{array}{l}\text{Factor and substitute.} \\ f({x}_{2})=A{x}_{2}{}^{2}+B{x}_{2}+C\;\text{and} \\ f({x}_{0})=A{x}_{0}{}^{2}+B{x}_{0}+C.\end{array} \\ & =\frac{\text{Δ}x}{3}(f({x}_{2})+f({x}_{0})+A{(2{x}_{1})}^{2}+2B(2{x}_{1})+4C) & & & \text{Substitute}\;{x}_{2}+{x}_{0}=2{x}_{1}. \\ & =\frac{\text{Δ}x}{3}(f({x}_{2})+4f({x}_{1})+f({x}_{0})). & & & \begin{array}{l}\text{Expand and substitute} \\ f({x}_{1})=A{x}_{1}{}^{2}+B{x}_{1}\text{+}C.\end{array}\end{array}$  {eq:fs-id1165041782445}

If we approximate ${\displaystyle \int_{{x}_{2}}^{{x}_{4}}f(x)dx}$ using the same method, we see that we have

${\displaystyle \int_{{x}_{2}}^{{x}_{4}}f(x)dx\approx \frac{\text{Δ}x}{3}(f({x}_{4})+4f({x}_{3})+f({x}_{2})).}$  {eq:fs-id1165041832972}

Combining these two approximations, we get

${\displaystyle \int_{{x}_{2}}^{{x}_{4}}f(x)dx=\frac{\text{Δ}x}{3}(f({x}_{0})+4f({x}_{1})+2f({x}_{2})+4f({x}_{3})+f({x}_{4})).}$  {eq:fs-id1165042092359}

The pattern continues as we add pairs of subintervals to our approximation. The general rule may be stated as follows.

:::note [theorem] Simpson’s Rule
Assume that $f(x)$ is continuous over $[a,b].$ Let *n* be a positive even integer and $\text{Δ}x=\frac{b-a}{n}.$ Let $[a,b]$ be divided into $n$ subintervals, each of length $\text{Δ}x,$ with endpoints at $P=\{{x}_{0},{x}_{1},{x}_{2}\text{,…},{x}_{n}\}.$ Set

$$ {S}_{n}=\frac{\text{Δ}x}{3}(f({x}_{0})+4f({x}_{1})+2f({x}_{2})+4f({x}_{3})+2f({x}_{4})+⋯+2f({x}_{n-2})+4f({x}_{n-1})+f({x}_{n})). $$  {eq:fs-id1165041953720}

Then,

$\lim_{n\to \text{+}\infty}{S}_{n}={\displaystyle \int_{a}^{b}f(x)dx.}$  {eq:fs-id1165042243666}

:::
Just as the trapezoidal rule is the average of the left-hand and right-hand rules for estimating definite integrals, Simpson’s rule may be obtained from the midpoint and trapezoidal rules by using a weighted average. It can be shown that ${S}_{2n}=(\frac{2}{3}){M}_{n}+(\frac{1}{3}){T}_{n}.$
It is also possible to put a bound on the error when using Simpson’s rule to approximate a definite integral. The bound in the error is given by the following rule:

:::note [rule] Rule: Error Bound for Simpson’s Rule
Let $f(x)$ be a continuous function over $[a,b]$ having a fourth derivative, ${f}^{(4)}(x),$ over this interval. If $M$ is the maximum value of $|{f}^{(4)}(x)|$ over $[a,b],$ then the upper bound for the error in using ${S}_{n}$ to estimate ${\displaystyle \int_{a}^{b}f(x)dx}$ is given by

$$ \text{Error in}\;{S}_{n}\le \frac{M{(b-a)}^{5}}{180{n}^{4}}. $$  {eq:fs-id1165042109950}

:::

:::example {ex:fs-id1165042217547} Applying Simpson’s Rule 1

:::exercise {fs-id1165042217549} type= 
PROBLEM:
Use ${S}_{2}$ to approximate ${\displaystyle \int_{0}^{1}{x}^{3}dx}.$ Estimate a bound for the error in ${S}_{2}.$
SOLUTION:
Since $[0,1]$ is divided into two intervals, each subinterval has length $\text{Δ}x=\frac{1-0}{2}=\frac{1}{2}.$ The endpoints of these subintervals are $\{0,\frac{1}{2},1\}.$ If we set $f(x)={x}^{3},$ then
${S}_{4}=\frac{1}{3}\cdot \frac{1}{2}(f(0)+4f(\frac{1}{2})+f(1))=\frac{1}{6}(0+4\cdot \frac{1}{8}+1)=\frac{1}{4}.$ Since ${f}^{(4)}(x)=0$ and consequently $M=0,$ we see that

$\text{Error in}\;{S}_{2}\le \frac{0{(1)}^{5}}{180⋅{2}^{4}}=0.$  {eq:fs-id1167793627790}

This bound indicates that the value obtained through Simpson’s rule is exact. A quick check will verify that, in fact, ${\displaystyle \int_{0}^{1}{x}^{3}dx=\frac{1}{4}}.$
:::
:::

:::example {ex:fs-id1165042199249} Applying Simpson’s Rule 2

:::exercise {fs-id1165042199251} type= 
PROBLEM:
Use ${S}_{6}$ to estimate the length of the curve $y=\frac{1}{2}{x}^{2}$ over $[1,4].$
SOLUTION:
The length of $y=\frac{1}{2}{x}^{2}$ over $[1,4]$ is ${\displaystyle \int_{1}^{4}\sqrt{1+{x}^{2}}\;dx}.$ If we divide $[1,4]$ into six subintervals, then each subinterval has length $\text{Δ}x=\frac{4-1}{6}=\frac{1}{2},$ and the endpoints of the subintervals are $\{1,\frac{3}{2},2,\frac{5}{2},3,\frac{7}{2},4\}.$ Setting $f(x)=\sqrt{1+{x}^{2}},$

${S}_{6}=\frac{1}{3}\cdot \frac{1}{2}(f(1)+4f(\frac{3}{2})+2f(2)+4f(\frac{5}{2})+2f(3)+4f(\frac{7}{2})+f(4)).$  {eq:fs-id1165040758286}

After substituting, we have

$\begin{array}{rl}{S}_{6} & =\frac{1}{6}(1.4142+4\cdot 1.80278+2\cdot 2.23607+4\cdot 2.69258+2\cdot 3.16228+4\cdot 3.64005+4.12311) \\ & \approx 8.14594.\end{array}$  {eq:fs-id1165042296656}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165040796321} type= 
PROBLEM:
Use ${S}_{2}$ to estimate ${\displaystyle \int_{1}^{2}\frac{1}{x}dx}.$
SOLUTION:
$\frac{25}{36}$
COMMENTARY: Hint
${S}_{2}=(\frac{1}{3}\text{Δ}x(f({x}_{0})+4f({x}_{1})+f({x}_{2}))$
:::
:::

## Key Concepts {section:key-concepts}
- We can use numerical integration to estimate the values of definite integrals when a closed form of the integral is difficult to find or when an approximate value only of the definite integral is needed.
- The most commonly used techniques for numerical integration are the midpoint rule, trapezoidal rule, and Simpson’s rule.
- The midpoint rule approximates the definite integral using rectangular regions whereas the trapezoidal rule approximates the definite integral using trapezoidal approximations.
- Simpson’s rule approximates the definite integral by first approximating the original function using piecewise quadratic functions.

## Key Equations {section:key-equations}

> TABLE {tab:eip-514} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Midpoint rule** | ${M}_{n}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({m}_{i})\text{Δ}x$ |
| **Trapezoidal rule** | ${T}_{n}=\frac{1}{2}\text{Δ}x(f({x}_{0})+2f({x}_{1})+2f({x}_{2})+⋯+2f({x}_{n-1})+f({x}_{n}))$ |
| **Simpson’s rule** | ${S}_{n}=\frac{\text{Δ}x}{3}(f({x}_{0})+4f({x}_{1})+2f({x}_{2})+4f({x}_{3})+2f({x}_{4})+4f({x}_{5})+⋯+2f({x}_{n-2})+4f({x}_{n-1})+f({x}_{n}))$ |
| **Error bound for midpoint rule** | $\text{Error in}\;{M}_{n}\le \frac{M{(b-a)}^{3}}{24{n}^{2}}$ |
| **Error bound for trapezoidal rule** | $\text{Error in}\;{T}_{n}\le \frac{M{(b-a)}^{3}}{12{n}^{2}}$ |
| **Error bound for Simpson’s rule** | $\text{Error in}\;{S}_{n}\le \frac{M{(b-a)}^{5}}{180{n}^{4}}$ |

##  {section:section-exercises}
Approximate the following integrals using either the midpoint rule, trapezoidal rule, or Simpson’s rule as indicated. (Round answers to three decimal places.)

:::exercise {fs-id1165040744481} type= 
PROBLEM:
${\displaystyle \int_{1}^{2}\frac{dx}{x}};$ trapezoidal rule; $n=5$
SOLUTION:
0.696
:::

:::exercise {fs-id1165042028267} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\sqrt{4+{x}^{3}}\;dx};$ trapezoidal rule; $n=6$
:::

:::exercise {fs-id1165040775005} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\sqrt{4+{x}^{3}}\;dx};$ trapezoidal rule; $n=3$
SOLUTION:
9.484
:::

:::exercise {fs-id1165041887553} type= 
PROBLEM:
${\displaystyle \int_{0}^{12}{x}^{2}dx};$ midpoint rule; $n=6$
:::

:::exercise {fs-id1165040639595} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{\text{sin}}^{2}(\pi x)dx};$ midpoint rule; $n=3$
SOLUTION:
0.5000
:::

:::exercise {fs-id1165042018120} type= 
PROBLEM:
Use the midpoint rule with eight subdivisions to estimate ${\displaystyle \int_{2}^{4}{x}^{2}dx}.$
:::

:::exercise {fs-id1165040726935} type= 
PROBLEM:
Use the trapezoidal rule with four subdivisions to estimate ${\displaystyle \int_{2}^{4}{x}^{2}dx}.$
SOLUTION:
${T}_{4}=18.75$
:::

:::exercise {fs-id1165042137604} type= 
PROBLEM:
Find the exact value of ${\displaystyle \int_{2}^{4}{x}^{2}dx}.$ Find the error of approximation between the exact value and the value calculated using the trapezoidal rule with four subdivisions. Draw a graph to illustrate.
:::
Approximate the integral to three decimal places using the indicated rule.

:::exercise {fs-id1165041932616} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{\text{sin}}^{2}(\pi x)dx};$ trapezoidal rule; $n=6$
SOLUTION:
0.500
:::

:::exercise {fs-id1165041899175} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\frac{1}{1+{x}^{3}}dx};$ trapezoidal rule; $n=6$
:::

:::exercise {fs-id1165042045947} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\frac{1}{1+{x}^{3}}dx};$ trapezoidal rule; $n=3$
SOLUTION:
1.129
:::

:::exercise {fs-id1165040727766} type= 
PROBLEM:
${\displaystyle \int_{0}^{0.8}{e}^{\text{−}{x}^{2}}dx};$ trapezoidal rule; $n=4$
:::

:::exercise {fs-id1165040777086} type= 
PROBLEM:
${\displaystyle \int_{0}^{0.8}{e}^{\text{−}{x}^{2}}dx};$ Simpson’s rule; $n=4$
SOLUTION:
0.6577
:::

:::exercise {fs-id1165042039190} type= 
PROBLEM:
${\displaystyle \int_{0}^{0.4}\text{sin}({x}^{2})dx};$ trapezoidal rule; $n=4$
:::

:::exercise {fs-id1165040742872} type= 
PROBLEM:
${\displaystyle \int_{0}^{0.4}\text{sin}({x}^{2})dx};$ Simpson’s rule; $n=4$
SOLUTION:
0.0213
:::

:::exercise {fs-id1165042073652} type= 
PROBLEM:
${\displaystyle \int_{0.1}^{0.5}\frac{\text{cos}\;x}{x}dx};$ trapezoidal rule; $n=4$
:::

:::exercise {fs-id1165042029584} type= 
PROBLEM:
${\displaystyle \int_{0.1}^{0.5}\frac{\text{cos}\;x}{x}dx};$ Simpson’s rule; $n=4$
SOLUTION:
1.5629
:::

:::exercise {fs-id1165042225093} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{1}\frac{dx}{1+{x}^{2}}}$ exactly and show that the result is $\pi \text{/}4.$ Then, find the approximate value of the integral using the trapezoidal rule with $n=4$ subdivisions. Use the result to approximate the value of $\pi .$
:::

:::exercise {fs-id1165040775723} type= 
PROBLEM:
Approximate ${\displaystyle \int_{2}^{4}\frac{1}{\text{ln}\;x}dx}$ using the midpoint rule with four subdivisions to four decimal places.
SOLUTION:
1.9133
:::

:::exercise {fs-id1165040778503} type= 
PROBLEM:
Approximate ${\displaystyle \int_{2}^{4}\frac{1}{\text{ln}\;x}dx}$ using the trapezoidal rule with eight subdivisions to four decimal places.
:::

:::exercise {fs-id1165042277205} type= 
PROBLEM:
Use the trapezoidal rule with four subdivisions to estimate ${\displaystyle \int_{0}^{0.8}{x}^{3}dx}$ to four decimal places.
SOLUTION:
$\text{T(4)}=0.1088$
:::

:::exercise {fs-id1165040768924} type= 
PROBLEM:
Use the trapezoidal rule with four subdivisions to estimate ${\displaystyle \int_{0}^{0.8}{x}^{3}dx}.$ Compare this value with the exact value and find the error estimate.
:::

:::exercise {fs-id1165041980048} type= 
PROBLEM:
Using Simpson’s rule with four subdivisions, find ${\displaystyle \int_{0}^{\pi \text{/}2}\text{cos}(x)dx}.$
SOLUTION:
1.0
:::

:::exercise {fs-id1165042058706} type= 
PROBLEM:
Show that the exact value of ${\displaystyle \int_{0}^{1}x{e}^{\text{−}x}dx=1-\frac{2}{e}.}$ Find the absolute error if you approximate the integral using the midpoint rule with 16 subdivisions.
:::

:::exercise {fs-id1165041962891} type= 
PROBLEM:
Given ${\displaystyle \int_{0}^{1}x{e}^{\text{−}x}dx=1-\frac{2}{e},}$ use the trapezoidal rule with 16 subdivisions to approximate the integral and find the absolute error.
SOLUTION:
Approximate error is 0.000325.
:::

:::exercise {fs-id1165042312907} type= 
PROBLEM:
Find an upper bound for the error in estimating ${\displaystyle \int_{0}^{3}(5x+4)dx}$ using the trapezoidal rule with six steps.
:::

:::exercise {fs-id1165040744885} type= 
PROBLEM:
Find an upper bound for the error in estimating ${\displaystyle \int_{4}^{5}\frac{1}{{(x-1)}^{2}}dx}$ using the trapezoidal rule with seven subdivisions.
SOLUTION:
$\frac{1}{7938}$
:::

:::exercise {fs-id1165041932680} type= 
PROBLEM:
Find an upper bound for the error in estimating ${\displaystyle \int_{0}^{3}(6{x}^{2}-1)dx}$ using Simpson’s rule with $n=10$ steps.
:::

:::exercise {fs-id1165040668874} type= 
PROBLEM:
Find an upper bound for the error in estimating ${\displaystyle \int_{2}^{5}\frac{1}{x-1}dx}$ using Simpson’s rule with $n=10$ steps.
SOLUTION:
$\frac{81}{25,000}$
:::

:::exercise {fs-id1165042311501} type= 
PROBLEM:
Find an upper bound for the error in estimating ${\displaystyle \int_{0}^{\pi}2x\;\text{cos}(x)dx}$ using Simpson’s rule with four steps.
:::

:::exercise {fs-id1165042035511} type= 
PROBLEM:
Estimate the minimum number of subintervals needed to approximate the integral ${\displaystyle \int_{1}^{4}(5{x}^{2}+8)dx}$ with an error magnitude of less than 0.0001 using the trapezoidal rule.
SOLUTION:
475
:::

:::exercise {fs-id1165040669718} type= 
PROBLEM:
Determine a value of *n* such that the trapezoidal rule will approximate ${\displaystyle \int_{0}^{1}\sqrt{1+{x}^{2}}\;dx}$ with an error of no more than 0.01.
:::

:::exercise {fs-id1165042229596} type= 
PROBLEM:
Estimate the minimum number of subintervals needed to approximate the integral ${\displaystyle \int_{2}^{3}(2{x}^{3}+4x)dx}$ with an error of magnitude less than 0.0001 using the trapezoidal rule.
SOLUTION:
174
:::

:::exercise {fs-id1165040741418} type= 
PROBLEM:
Estimate the minimum number of subintervals needed to approximate the integral ${\displaystyle \int_{3}^{4}\frac{1}{{(x-1)}^{2}}dx}$ with an error magnitude of less than 0.0001 using the trapezoidal rule.
:::

:::exercise {fs-id1165042235475} type= 
PROBLEM:
Use Simpson’s rule with four subdivisions to approximate the area under the probability density function $y=\frac{1}{\sqrt{2\pi}}{e}^{\text{−}{x}^{2}\text{/}2}$ from $x=0$ to $x=0.4.$
SOLUTION:
0.1544
:::

:::exercise {fs-id1165040668407} type= 
PROBLEM:
Use Simpson’s rule with $n=14$ to approximate (to three decimal places) the area of the region bounded by the graphs of $y=0,$ $x=0,$ and $x=\pi \text{/}2.$
:::

:::exercise {fs-id1165040763968} type= 
PROBLEM:
The length of one arch of the curve $y=3\;\text{sin}(2x)$ is given by $L={\displaystyle \int_{0}^{\pi \text{/}2}\sqrt{1+36\;{\text{cos}}^{2}(2x)}\;dx}.$ Estimate *L* using the trapezoidal rule with $n=6.$
SOLUTION:
6.2807
:::

:::exercise {fs-id1165040762407} type= 
PROBLEM:
The length of the ellipse $x=a\;\text{cos}(t),y=b\;\text{sin}(t),0\le t\le 2\pi$ is given by $L=4a{\displaystyle \int_{0}^{\pi \text{/}2}\sqrt{1-{e}^{2}{\text{cos}}^{2}(t)}\;dt},$ where *e* is the eccentricity of the ellipse. Use Simpson’s rule with $n=6$ subdivisions to estimate the length of the ellipse when $a=2$ and $e=1\text{/}3.$
:::

:::exercise {fs-id1165042033122} type= 
PROBLEM:
Estimate the area of the surface generated by revolving the curve $y=\text{cos}(2x),0\le x\le \frac{\pi}{4}$ about the *x*-axis. Use the trapezoidal rule with six subdivisions.
SOLUTION:
4.606
:::

:::exercise {fs-id1165040795644} type= 
PROBLEM:
Estimate the area of the surface generated by revolving the curve $y=2{x}^{2},$ $0\le x\le 3$ about the *x-*axis. Use Simpson’s rule with $n=6.$
:::

:::exercise {fs-id1165042281440} type= 
PROBLEM:
The growth rate of a certain tree (in feet) is given by $y=\frac{2}{t+1}+{e}^{\text{−}{t}^{2}\text{/}2},$ where *t* is time in years. Estimate the growth of the tree through the end of the second year by using Simpson’s rule, using two subintervals. (Round the answer to the nearest hundredth.)
SOLUTION:
3.41 ft
:::

:::exercise {fs-id1165042040116} type= 
PROBLEM:
**[T]** Use a calculator to approximate ${\displaystyle \int_{0}^{1}\text{sin}(\pi x)dx}$ using the midpoint rule with 25 subdivisions. Compute the relative error of approximation.
:::

:::exercise {fs-id1165041899114} type= 
PROBLEM:
**[T]** Given ${\displaystyle \int_{1}^{5}(3{x}^{2}-2x)dx}=100,$ approximate the value of this integral using the trapezoidal rule with 16 subdivisions and determine the absolute error.
SOLUTION:
${T}_{16}=100.125;$ absolute error = 0.125
:::

:::exercise {fs-id1165042038796} type= 
PROBLEM:
Given that we know the Fundamental Theorem of Calculus, why would we want to develop numerical methods for definite integrals?
:::

:::exercise {fs-id1165042038815} type= 
PROBLEM:
The table represents the coordinates $(x,y)$ that give the boundary of a lot. The units of measurement are meters. Use the trapezoidal rule to estimate the number of square meters of land that is in this lot.

> TABLE {tab:fs-id1165040730931} cols=4 class=unnumbered
> summary: This is a table with four columns and seven rows. The first row is a header row and is labeled “x,” “y,” “x,” “y.” The entries under the first column are 0, 100, 200, 300, 400, and 500. The entries in the second column are 125, 125, 120, 112, 90, and 90. The entries in the third column are 600, 700, 800, 900, 1000, and blank. The entries in the fourth column are 95, 88, 75, 35, 0, and blank.

| *x* | *y* | *x* | *y* |
| --- | --- | --- | --- |
| 0 | 125 | 600 | 95 |
| 100 | 125 | 700 | 88 |
| 200 | 120 | 800 | 75 |
| 300 | 112 | 900 | 35 |
| 400 | 90 | 1000 | 0 |
| 500 | 90 |  |  |

SOLUTION:
about 89,250 m<sup>2</sup>
:::

:::exercise {fs-id1165042262066} type= 
PROBLEM:
Choose the correct answer. When Simpson’s rule is used to approximate the definite integral, it is necessary that the number of partitions be____
a. an even number
b. odd number
c. either an even or an odd number
d. a multiple of 4
:::

:::exercise {fs-id1165042262106} type= 
PROBLEM:
The “Simpson” sum is based on the area under a ____.
SOLUTION:
parabola
:::

:::exercise {fs-id1165042271895} type= 
PROBLEM:
The error formula for Simpson’s rule depends on___.
a. $f(x)$
b. ${f}^{'}(x)$
c. ${f}^{(4)}(x)$
d. the number of steps
:::

## Glossary
- {def} **absolute error**: if $B$ is an estimate of some quantity having an actual value of $A,$ then the absolute error is given by $|A-B|$
- {def} **midpoint rule**: a rule that uses a Riemann sum of the form ${M}_{n}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}f({m}_{i})\text{Δ}x,$ where ${m}_{i}$ is the midpoint of the *i*th subinterval to approximate ${\displaystyle \int_{a}^{b}f(x)dx}$
- {def} **numerical integration**: the variety of numerical methods used to estimate the value of a definite integral, including the midpoint rule, trapezoidal rule, and Simpson’s rule
- {def} **relative error**: error as a percentage of the absolute value, given by $|\frac{A-B}{A}|=|\frac{A-B}{A}|\cdot 100\text{\%}$
- {def} **Simpson’s rule**: a rule that approximates ${\displaystyle \int_{a}^{b}f(x)dx}$ using the integrals of a piecewise quadratic function. The approximation ${S}_{n}$ to ${\displaystyle \int_{a}^{b}f(x)dx}$ is given by ${S}_{n}=\frac{\text{Δ}x}{3}\left(\begin{array}{l}f({x}_{0})+4f({x}_{1})+2f({x}_{2})+4f({x}_{3})+2f({x}_{4})+4f({x}_{5}) \\ +⋯+2f({x}_{n-2})+4f({x}_{n-1})+f({x}_{n})\end{array}\right)$ trapezoidal rule a rule that approximates ${\displaystyle \int_{a}^{b}f(x)dx}$ using trapezoids

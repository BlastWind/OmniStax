# 7.1 Power series {sec:powerseries-section}

:::note [section-notes]
*Note: 1.5 or 2 lectures, §8.1 in [EP](cite:EP), §5.1 in [BD](cite:BD)*
:::

Many functions can be written in terms of a power series
$$ \sum_{k=0}^\infty a_k {(x-x_0)}^k . $$
Assuming a solution of a differential equation is a power series, we can perhaps use a method reminiscent of undetermined coefficients—we try to solve for the numbers $a_k$. Before we carry out this process, we review some results and concepts about power series.

## Definition

As we said, a *{index:power series}* is an expression such as
$$ \sum_{k=0}^\infty a_k {(x-x_0)}^k = a_0 + a_1 (x-x_0) + a_2 {(x-x_0)}^2 + a_3 {(x-x_0)}^3 + \cdots, $$ {eq:ps-sereq1} number=7.1
where $a_0,a_1,a_2,\ldots,a_k,\ldots$ and $x_0$ are constants. The $a_k$ are called the *coefficients*{index-entry:coefficients of power series}{index-entry:power series coefficients} and $x_0$ is called the *center*{index-entry:center of a power series}{index-entry:power series center}. Let
$$ \begin{split} S_n(x) & = \sum_{k=0}^n a_k {(x-x_0)}^k \\ & = a_0 + a_1 (x-x_0) + a_2 {(x-x_0)}^2 + a_3 {(x-x_0)}^3 + \cdots + a_n {(x-x_0)}^n , \end{split} $$
denote the so-called *{index:partial sum}*. If for some $x$, the limit
$$ \lim_{n\to \infty} S_n(x) = \lim_{n\to\infty} \sum_{k=0}^n a_k {(x-x_0)}^k $$
exists, we say the series [(7.1)](ref:ps-sereq1) *converges*{index-entry:convergence of a power series} at $x$. At $x=x_0$, the series always converges to $a_0$. When [(7.1)](ref:ps-sereq1) converges at any other $x \neq x_0$, we say [(7.1)](ref:ps-sereq1) is a *{index:convergent power series}*, and we write
$$ \sum_{k=0}^\infty a_k {(x-x_0)}^k = \lim_{n\to\infty} \sum_{k=0}^n a_k {(x-x_0)}^k. $$
If the series does not converge for any point $x \neq x_0$, we say that the series is *divergent*{index-entry:divergent power series}.

:::example {ex:ps-expex} Example 7.1.1
The series
$$ \sum_{k=0}^\infty \frac{1}{k!} x^k = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots $$
converges at every $x$. Here, $a_k = {1}/{k!}$ and $x_0 = 0$. Recall that $k! = 1\cdot 2\cdot 3 \cdots k$ is the factorial. By convention, we define $0! = 1$. You may recall that this series converges to $e^x$.
:::

We say that [(7.1)](ref:ps-sereq1) *{index:converges absolutely}*{index-entry:absolute convergence} at $x$ whenever the limit
$$ \lim_{n\to\infty} \sum_{k=0}^n \lvert a_k \rvert \, {\lvert x-x_0 \rvert}^k $$
exists. That is, the series $\sum_{k=0}^\infty \lvert a_k \rvert \, {\lvert x-x_0 \rvert}^k$ converges. If [(7.1)](ref:ps-sereq1) converges absolutely at $x$, then it converges at $x$. However, the opposite implication is not true.

:::example {ex:ps-1kex} Example 7.1.2
The series
$$ \sum_{k=1}^\infty \frac{1}{k} x^k $$
converges absolutely for all $x$ in the interval $(-1,1)$. It converges at $x=-1$, as $\sum_{k=1}^\infty \frac{{(-1)}^k}{k}$ converges (conditionally) by the alternating series test. The power series does not converge absolutely at $x=-1$, because $\sum_{k=1}^\infty \frac{1}{k}$ does not converge. The series diverges at $x=1$.
:::

## Radius of convergence

If a power series converges absolutely at some $x_1$, then for all $x$ such that $\lvert x - x_0 \rvert \leq \lvert x_1 - x_0 \rvert$ (that is, $x$ is no further than $x_1$ to $x_0$), we have $\lvert a_k \rvert \, {\lvert x-x_0 \rvert}^k \leq \lvert a_k \rvert \, { \lvert x_1-x_0 \rvert}^k$ for all $k$. As the numbers $\lvert a_k \rvert \, {\lvert x_1-x_0 \rvert}^k$ sum to some finite limit, summing smaller positive numbers $\lvert a_k \rvert \, {\lvert x-x_0 \rvert}^k$ must also have a finite limit. Hence, the series must converge absolutely at $x$.

:::theorem {thm:theorem-7-1-1} Theorem 7.1.1
For a power series [(7.1)](ref:ps-sereq1), there exists a number $\rho$ (we allow $\rho=\infty$) called the *{index:radius of convergence}* such that the series converges absolutely on the interval $(x_0-\rho,x_0+\rho)$ and diverges when $x < x_0-\rho$ or $x > x_0+\rho$. We write $\rho=\infty$ if the series converges for all $x$.
:::

> FIGURE {fig:ps-convfig} number=7.1 src=../../media/ps-conv.svg
> alt: A diagram of the number line with the points x sub 0 minus rho, x sub 0, and x sub 0 plus rho marked. The segment between x sub 0 minus rho and x sub 0 plus rho is shaded and marked with 'converges absolutely'. The parts of the line below x sub 0 minus rho and above x sub 0 plus rho is labeled 'diverges'.
> caption: Convergence of a power series.

See [Figure 7.1](ref:ps-convfig). In [Example 7.1.1](ref:ps-expex), the radius of convergence is $\rho = \infty$ as the series converges everywhere. In [Example 7.1.2](ref:ps-1kex), the radius of convergence is $\rho=1$. We note that $\rho = 0$ is another way of saying that the series is divergent.

A useful test for convergence of a series is the *ratio test*{index-entry:ratio test for series}. Suppose that
$$ \sum_{k=0}^\infty c_k $$
is a series and the limit
$$ L = \lim_{k\to\infty} \left \lvert \frac{c_{k+1}}{c_k} \right \rvert $$
exists. Then the series converges absolutely if $L < 1$ and diverges if $L > 1$.

We apply this test to the power series [(7.1)](ref:ps-sereq1). Let $c_k = a_k {(x - x_0)}^k$ in the test. Compute
$$ L = \lim_{k\to\infty} \left \lvert \frac{c_{k+1}}{c_k} \right \rvert = \lim_{k\to\infty} \left \lvert \frac{a_{k+1} {(x - x_0)}^{k+1}}{a_k {(x - x_0)}^k} \right \rvert = \lim_{k\to\infty} \left \lvert \frac{a_{k+1}}{a_k} \right \rvert \lvert x - x_0 \rvert . $$
Define $A$ by
$$ A = \lim_{k\to\infty} \left \lvert \frac{a_{k+1}}{a_k} \right \rvert . $$
Then the series [(7.1)](ref:ps-sereq1) converges absolutely if $1 > L = A \lvert x - x_0 \rvert$. If $A > 0$, then the series converges absolutely if $\lvert x - x_0 \rvert < {1}/{A}$, and diverges if $\lvert x - x_0 \rvert > {1}/{A}$. That is, the radius of convergence is ${1}/{A}$. If $A = 0$, then the series always converges.

The *root test* is similar{index-entry:root test for series}. Suppose
$$ L = \lim_{k\to\infty} \sqrt[k]{\lvert c_k \rvert} $$
exists. Then $\sum_{k=0}^\infty c_k$ converges absolutely if $L < 1$ and diverges if $L > 1$. We can use the same calculation as above to find $A$. Let us summarize.

:::theorem {thm:theorem-7-1-2} Theorem 7.1.2 (Ratio and root tests for power series)
Consider a power series
$$ \sum_{k=0}^\infty a_k {(x-x_0)}^k $$
such that
$$ A = \lim_{k\to\infty} \left \lvert \frac{a_{k+1}}{a_k} \right \rvert \qquad \text{or} \qquad A = \lim_{k\to\infty} \sqrt[k]{\lvert a_k \rvert} $$
exists. If $A = 0$, then the radius of convergence of the series is $\infty$. Otherwise, the radius of convergence is ${1}/{A}$. Moreover, if either limit for $A$ diverges to $\infty$, then the series is divergent. [3]
:::

:::example {ex:example-7-1-3} Example 7.1.3
Consider
$$ \sum_{k=0}^\infty 2^{-k} {(x-1)}^k . $$
We compute the limit in the ratio test,
$$ A = \lim_{k\to\infty} \left \lvert \frac{a_{k+1}}{a_k} \right \rvert = \lim_{k\to\infty} \left \lvert \frac{2^{-k-1}}{2^{-k}} \right \rvert = \lim_{k\to\infty} 2^{-1} = \frac{1}{2}. $$
Therefore, the radius of convergence is $2$, and the series converges absolutely on the interval $(-1,3)$. We could just as well have used the root test:
$$ A = \lim_{k\to\infty} \sqrt[k]{\lvert a_k \rvert} = \lim_{k\to\infty} \sqrt[k]{\lvert 2^{-k} \rvert} = \lim_{k\to\infty} 2^{-1} = \frac{1}{2}. $$

:::

:::example {ex:example-7-1-4} Example 7.1.4
Consider
$$ \sum_{k=1}^\infty \frac{1}{k^k} {x}^k . $$
Compute the limit for the root test (ratio test would also work),
$$ A = \lim_{k\to\infty} \sqrt[k]{\lvert a_k \rvert} = \lim_{k\to\infty} \sqrt[k]{ \left\lvert\frac{1}{k^k}\right\rvert} = \lim_{k\to\infty} \sqrt[k]{ {\left\lvert\frac{1}{k}\right\rvert}^{k}} = \lim_{k\to\infty} \frac{1}{k} = 0 . $$
So the radius of convergence is $\infty$: The series converges everywhere.
:::

The root or the ratio test as given does not always apply. That is, the limit of $\bigl \lvert \frac{a_{k+1}}{a_k} \bigr \rvert$ or $\sqrt[k]{\lvert a_k \rvert}$ might not exist. Sometimes the test must be applied to the series itself—to find the $L$ rather than the $A$. For example, for the series $\sum_{k=1}^\infty 2^k x^{2k}$, we cannot apply the root with the $A$, we must work with the limit of $\sqrt[k]{\lvert 2^k x^{2k} \rvert}$, which equals $L = 2 {\lvert x \rvert}^2$. This $L$ is less than $1$ when $\lvert x \rvert < \frac{1}{\sqrt{2}}$ and so $\frac{1}{\sqrt{2}}$ is the radius of convergence. Other ways exist to find the radius, but ratio and root tests cover many series arising in practice.

At the endpoints, $x = x_0-\rho$ and $x = x_0+\rho$, the series may or may not converge, and the tests above say nothing about convergence there. Sometimes convergence at the endpoints is important, but for our purposes, we will not worry about it much.

## Analytic functions

Functions represented by power series are called *{index:analytic functions}*. Not all functions are analytic, but the functions you have seen in calculus likely all are. An analytic function $f(x)$ equals its *{index:Taylor series}*^[Named after the English mathematician [Sir Brook Taylor](http://en.wikipedia.org/wiki/Brook_Taylor) (1685–1731).] (a power series computed from $f$) for $x$ near a given point $x_0$:
$$ f(x) = \sum_{k=0}^\infty \frac{f^{(k)}(x_0)}{k!} {(x-x_0)}^k = f(x_0) + f'(x_0) (x-x_0) + \frac{f''(x_0)}{2} (x-x_0)^2 + \cdots , $$ {eq:ps-tayloreq} number=7.2
where $f^{(k)}(x_0)$ denotes the $k^{\text{th}}$ derivative of $f(x)$ at the point $x_0$.

For example, sine is an analytic function and its Taylor series around $x_0 = 0$ is given by
$$ \sin(x) = \sum_{n=0}^\infty \frac{{(-1)}^n}{(2n+1)!} x^{2n+1} . $$
In [Figure 7.2](ref:ps-sin), we plot $\sin(x)$ and the truncations of the series up to degree 5 and 9. You can see that the approximation is very good for $x$ near 0, but gets worse for $x$ further away from 0. This is what happens in general. To get a good approximation far away from $x_0$ you need to take more and more terms of the Taylor series.

> FIGURE {fig:ps-sin} number=7.2 src=../../media/ps-sin.svg
> alt: A plot of the sine function on the interval minus 10 to 10. Then two approximations plotted that both come from the bottom of the picture approach the sine function graph, both are very close to it in an interval around the origin, and both leave after a while through the top of the picture. One of the approximations is close to the graph of the sine for a longer interval.
> width: 4.5in
> caption: The sine function and its Taylor approximations around $x_0=0$ of $5^{\text{th}}$ and $9^{\text{th}}$ degree.

## Manipulating power series

One of the main properties of power series that we will use is that we can differentiate them term by term. That is, suppose that $\sum a_k {(x-x_0)}^k$ is a convergent power series. Then for $x$ in the radius of convergence, we have
$$ \frac{d}{dx} \left[\sum_{k=0}^\infty a_k {(x-x_0)}^k\right] = \sum_{k=1}^\infty k a_k {(x-x_0)}^{k-1} = a_1 + 2 a_2 (x-x_0) + 3 a_3 {(x-x_0)}^{2} + \cdots . $$
Notice that the term corresponding to $k=0$ disappeared as it was constant. The radius of convergence of the differentiated series is the same as that of the original.

:::example {ex:example-7-1-5} Example 7.1.5
Let us show that the exponential $y=e^x$ solves $y'=y$. Suppose we did not know that. Write
$$ y = e^x = \sum_{k=0}^\infty \frac{1}{k!} x^k . $$
Differentiate $y$,
$$ y' = \sum_{k=1}^\infty k \frac{1}{k!} x^{k-1} = \sum_{k=1}^\infty \frac{1}{(k-1)!} x^{k-1} . $$
We *reindex*{index-entry:reindexing the series} the series by simply replacing $k$ with $k+1$. The series does not change; what changes is simply how we write it. After reindexing, the series starts at $k=0$ again.
$$ \sum_{k=1}^\infty \frac{1}{(k-1)!} x^{k-1} = \sum_{k+1=1}^\infty \frac{1}{\bigl((k+1)-1\bigr)!} x^{(k+1)-1} = \sum_{k=0}^\infty \frac{1}{k!} x^k . $$
That was precisely the power series for $e^x$ we started with, so we showed that $\frac{d}{dx} [ e^x ] = e^x$.
:::

Convergent power series can be added and multiplied together, and multiplied by constants using the following rules. First, we can add series by adding term by term,
$$ \left(\sum_{k=0}^\infty a_k {(x-x_0)}^k\right) + \left(\sum_{k=0}^\infty b_k {(x-x_0)}^k\right) = \sum_{k=0}^\infty (a_k+b_k) {(x-x_0)}^k . $$
We can multiply by constants,
$$ \alpha \left(\sum_{k=0}^\infty a_k {(x-x_0)}^k\right) = \sum_{k=0}^\infty \alpha a_k {(x-x_0)}^k . $$
We can also multiply series together,
$$ \left(\sum_{k=0}^\infty a_k {(x-x_0)}^k\right) \, \left(\sum_{k=0}^\infty b_k {(x-x_0)}^k\right) = \sum_{k=0}^\infty c_k {(x-x_0)}^k , $$
where $c_k = a_0b_k + a_1 b_{k-1} + \cdots + a_k b_0$. The radius of convergence of the sum or the product is at least the minimum of the radii of convergence of the two series involved.

## Power series for rational functions

Polynomials are simply finite power series. That is, a polynomial is a power series where the $a_k$ are zero for all $k$ large enough. We can always expand a polynomial as a power series about any point $x_0$ by writing the polynomial as a polynomial in $(x-x_0)$. For example, let us write $2x^2-3x+4$ as a power series around $x_0 = 1$:
$$ 2x^2-3x+4 = 3 + (x-1) + 2{(x-1)}^2 . $$
In other words, $a_0 = 3$, $a_1 = 1$, $a_2 = 2$, and all other $a_k = 0$. To do this, we know that $a_k = 0$ for all $k \geq 3$ as the polynomial is of degree 2. We write $a_0 + a_1(x-1) + a_2{(x-1)}^2$, we expand, and we solve for $a_0$, $a_1$, and $a_2$. We could have also differentiated at $x=1$ and used the Taylor series formula [(7.2)](ref:ps-tayloreq).

Let us look at rational functions, that is, ratios of polynomials. An important fact is that a series for a function only defines the function on an interval even if the function is defined elsewhere. For example, for $-1 < x < 1$,
$$ \frac{1}{1-x} = \sum_{k=0}^\infty x^k = 1 + x + x^2 + \cdots $$
This series is called the *{index:geometric series}*. The ratio test tells us that the radius of convergence is $1$. The series diverges for $x \leq -1$ and $x \geq 1$, even though $\frac{1}{1-x}$ is defined for all $x \neq 1$.

Instead of applying the Taylor series expansion [(7.2)](ref:ps-tayloreq), the geometric series together with rules for addition and multiplication of power series can be used to expand any rational function around a point $x_0$, as long as the denominator is not zero at $x_0$.

:::example {ex:example-7-1-6} Example 7.1.6
Expand $\frac{x}{1+2x+x^2}$ as a power series around the origin ($x_0 = 0$) and find the radius of convergence.

First, write $1+2x+x^2 = {(1+x)}^2 = {\bigl(1-(-x)\bigr)}^2$. Compute
$$ \begin{split} \frac{x}{1+2x+x^2} &= x \, {\left( \frac{1}{1-(-x)} \right)}^2 \\ &= x \, { \left( \sum_{k=0}^\infty {(-1)}^k x^k \right)}^2 \\ &= x \, \left( \sum_{k=0}^\infty c_k x^k \right) \\ &= \sum_{k=0}^\infty c_k x^{k+1} , \end{split} $$
where to get $c_k$, we use the formula for the product of series: $c_0 = 1$, $c_1 = -1 -1 = -2$, $c_2 = 1+1+1 = 3$, etc. Therefore
$$ \frac{x}{1+2x+x^2} = \sum_{k=1}^\infty {(-1)}^{k+1} k x^k = x-2x^2+3x^3-4x^4+\cdots $$
The radius of convergence is at least 1. We use the ratio test
$$ \lim_{k\to\infty} \left\lvert \frac{a_{k+1}}{a_k} \right\rvert = \lim_{k\to\infty} \left\lvert \frac{{(-1)}^{k+2} (k+1)}{{(-1)}^{k+1}k} \right\rvert = \lim_{k\to\infty} \frac{k+1}{k} = 1 . $$
So the radius of convergence is actually equal to 1.
:::

When the rational function is more complicated, it is also possible to use the method of partial fractions. For example, to find the Taylor series for $\frac{x^3+x}{x^2-1}$, we write
$$ \frac{x^3+x}{x^2-1} = x + \frac{1}{1+x} - \frac{1}{1-x} = x + \sum_{k=0}^\infty {(-1)}^k x^k - \sum_{k=0}^\infty x^k = - x + \sum_{\substack{k=3 \\ k \text{ odd}}}^\infty (-2) x^k . $$

## Exercises

:::exercise {exercise-7-1-001} number=7.1.1 answered=no src=ch-power-ser.tex:577
PROBLEM:
Is $\displaystyle \sum_{k=0}^\infty e^k x^k$ a convergent power series? If so, find the radius of convergence.
:::

:::exercise {exercise-7-1-002} number=7.1.2 answered=no src=ch-power-ser.tex:582
PROBLEM:
Is $\displaystyle \sum_{k=0}^\infty k x^k$ a convergent power series? If so, find the radius of convergence.
:::

:::exercise {exercise-7-1-003} number=7.1.3 answered=no src=ch-power-ser.tex:587
PROBLEM:
Is $\displaystyle \sum_{k=0}^\infty k! x^k$ a convergent power series? If so, find the radius of convergence.
:::

:::exercise {exercise-7-1-004} number=7.1.4 answered=no src=ch-power-ser.tex:592
PROBLEM:
Is $\displaystyle \sum_{k=0}^\infty \frac{1}{(2k)!} {(x-10)}^k$ a convergent power series? If so, find the radius of convergence.
:::

:::exercise {exercise-7-1-005} number=7.1.5 answered=no src=ch-power-ser.tex:597
PROBLEM:
Determine the Taylor series for $\sin x$ around the point $x_0 = \pi$.
:::

:::exercise {exercise-7-1-006} number=7.1.6 answered=no src=ch-power-ser.tex:601
PROBLEM:
Find the Taylor series for $\ln x$ around the point $x_0 = 1$, and the radius of convergence.
:::

:::exercise {exercise-7-1-007} number=7.1.7 answered=no src=ch-power-ser.tex:606
PROBLEM:
Determine the Taylor series and its radius of convergence of $\dfrac{1}{1+x}$ around $x_0 = 0$.
:::

:::exercise {exercise-7-1-008} number=7.1.8 answered=no src=ch-power-ser.tex:612
PROBLEM:
Determine the Taylor series and its radius of convergence of $\dfrac{x}{4-x^2}$ around $x_0 = 0$. Hint: You will not be able to use the ratio test.
:::

:::exercise {exercise-7-1-009} number=7.1.9 answered=no src=ch-power-ser.tex:619
PROBLEM:
Expand $x^5+5x+1$ as a power series around $x_0 = 5$.
:::

:::exercise {exercise-7-1-010} number=7.1.10 answered=no src=ch-power-ser.tex:623
PROBLEM:
Suppose that the ratio test applies to a series $\displaystyle \sum_{k=0}^\infty a_k x^k$. Show, using the ratio test, that the radius of convergence of the differentiated series is the same as that of the original series.
:::

:::exercise {exercise-7-1-011} number=7.1.11 answered=no src=ch-power-ser.tex:630
PROBLEM:
Suppose that $f$ is an analytic function such that $f^{(n)}(0) = n$. Find $f(1)$.
:::

:::exercise {exercise-7-1-101} number=7.1.101 answered=yes src=ch-power-ser.tex:637
PROBLEM:
Is $\displaystyle \sum_{n=1}^\infty {(0.1)}^n x^n$ a convergent power series? If so, find the radius of convergence.
SOLUTION:
Yes. Radius of convergence is $10$.
:::

:::exercise {exercise-7-1-102} number=7.1.102 answered=yes src=ch-power-ser.tex:646
PROBLEM:
**challenging**
Is $\displaystyle \sum_{n=1}^\infty \frac{n!}{n^n} x^n$ a convergent power series? If so, find the radius of convergence.
SOLUTION:
Yes. Radius of convergence is $e$.
:::

:::exercise {exercise-7-1-103} number=7.1.103 answered=yes src=ch-power-ser.tex:657
PROBLEM:
Using the geometric series, expand $\frac{1}{1-x}$ around $x_0=2$. For what $x$ does the series converge?
SOLUTION:
$\frac{1}{1-x} = -\frac{1}{1-(2-x)}$ so $\frac{1}{1-x} = \sum\limits_{n=0}^\infty {(-1)}^{n+1} {(x-2)}^n$, which converges for $1 < x < 3$.
:::

:::exercise {exercise-7-1-104} number=7.1.104 answered=yes src=ch-power-ser.tex:667
PROBLEM:
**challenging**
Find the Taylor series for $x^7 e^x$ around $x_0 = 0$.
SOLUTION:
$\sum\limits_{n=7}^\infty \frac{1}{(n-7)!} x^n$
:::

:::exercise {exercise-7-1-105} number=7.1.105 answered=yes src=ch-power-ser.tex:675
PROBLEM:
**challenging**
Imagine $f$ and $g$ are analytic functions such that $f^{(k)}(0) = g^{(k)}(0)$ for all large enough $k$. What can you say about $f(x)-g(x)$?
SOLUTION:
$f(x)-g(x)$ is a polynomial. Hint: Use Taylor series.
:::

:::exercise {exercise-7-1-106} number=7.1.106 answered=yes src=ch-power-ser.tex:685
PROBLEM:
Reindex the following series to have the powers be $x^k$.

a) $\displaystyle \sum_{k=3}^\infty k(k-1)x^{k+3}$
b) $\displaystyle \sum_{k=1}^\infty (k+1)x^{k-1}$
c) $\displaystyle \sum_{k=5}^\infty 2kx^{k-2}$

SOLUTION:
a) $\displaystyle \sum_{k=6}^\infty (k-3)(k-4)x^{k}$ b) $\displaystyle \sum_{k=0}^\infty (k+2)x^{k}$ c) $\displaystyle \sum_{k=3}^\infty 2(k+2)x^{k}$
:::

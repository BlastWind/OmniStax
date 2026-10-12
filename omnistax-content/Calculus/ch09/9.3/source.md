# The Divergence and Integral Tests

## Learning Objectives {section:learning-objectives}
- Use the divergence test to demonstrate that a series diverges.
- Use the integral test to determine the convergence of a series.
- Estimate the value of a series by finding bounds on its remainder term.

In the previous section, we determined the convergence or divergence of several series by explicitly calculating the limit of the sequence of partial sums $\{{S}_{k}\}.$ In practice, explicitly calculating this limit can be difficult or impossible. Luckily, several tests exist that allow us to determine convergence or divergence for many types of series. In this section, we discuss two of these tests: the divergence test and the integral test. We will examine several other tests in the rest of this chapter and then summarize how and when to use them.

## Divergence Test
A series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ being convergent is equivalent to the convergence of the sequence of partial sums (${S}_{k}$) as $k\to \infty .$
To verify this, notice that from the algebraic properties,

$\lim_{k\to \infty}{a}_{k}=\lim_{k\to \infty}({S}_{k}-{S}_{k-1})=\lim_{k\to \infty}{S}_{k}-\lim_{k\to \infty}{S}_{k-1}=S-S=0.$  {eq:fs-id1169737836979}

Therefore, if ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges, the $n\text{th}$ term ${a}_{n}\to 0$ as $n\to \infty .$ An important consequence of this fact is the following statement:

$$ \text{If}\;{a}_{n}\nrightarrow 0\;\text{as}\;n\to \infty ,{\displaystyle \sum_{n=1}^{\infty} {a}_{n}}\;\text{diverges}. $$  {eq:fs-id1169738046165}

This test is known as the {term:divergence test} because it provides a way of proving that a series diverges.

:::note [theorem] Divergence Test
If $\lim_{n\to \infty}{a}_{n}=c≠0$ or $\lim_{n\to \infty}{a}_{n}$ does not exist, then the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges.
:::
It is important to note that the converse of this theorem is not true. That is, if $\lim_{n\to \infty}{a}_{n}=0,$ we cannot make any conclusion about the convergence of ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$ For example, $\lim_{n\to \infty}(1\text{/}n)=0,$ but the harmonic series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}n$ diverges. In this section and the remaining sections of this chapter, we show many more examples of such series. Consequently, although we can use the divergence test to show that a series diverges, we cannot use it to prove that a series converges. Specifically, if ${a}_{n}\to 0,$ the divergence test is inconclusive.

:::example {ex:fs-id1169738054624} Using the divergence test

:::exercise {fs-id1169737739872} type= 
PROBLEM:
For each of the following series, apply the divergence test. If the divergence test proves that the series diverges, state so. Otherwise, indicate that the divergence test is inconclusive.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{n}{3n-1}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{3}}$
c. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{e}^{1\text{/}{n}^{2}}$
SOLUTION:
a. Since $n\text{/}(3n-1)\to 1\text{/}3≠0,$ by the divergence test, we can conclude that

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{n}{3n-1}$  {eq:fs-id1169737950574}

diverges.
b. Since $1\text{/}{n}^{3}\to 0,$ the divergence test is inconclusive.
c. Since ${e}^{1\text{/}{n}^{2}}\to 1≠0,$ by the divergence test, the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{e}^{1\text{/}{n}^{2}}$  {eq:fs-id1169738227584}

diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738044696} type= 
PROBLEM:
What does the divergence test tell us about the series ${\displaystyle \sum_{n=1}^{\infty} \text{cos}}(1\text{/}{n}^{2})\text{?}$
SOLUTION:
The series diverges.
COMMENTARY: Hint
Look at $\lim_{n\to \infty}\text{cos}(1\text{/}{n}^{2}).$
:::
:::

## Integral Test
In the previous section, we proved that the harmonic series diverges by looking at the sequence of partial sums $\{{S}_{k}\}$ and showing that ${S}_{{2}^{k}}>1+k\text{/}2$ for all positive integers $k.$ In this section we use a different technique to prove the divergence of the harmonic series. This technique is important because it is used to prove the divergence or convergence of many other series. This test, called the {term:integral test}, compares an infinite sum to an improper integral. It is important to note that this test can only be applied when we are considering a series whose terms are all positive.
To illustrate how the integral test works, use the harmonic series as an example. In [ref:CNX_Calc_Figure_09_03_001], we depict the harmonic series by sketching a sequence of rectangles with areas $1,1\text{/}2,1\text{/}3,1\text{/}4\text{,…}$ along with the function $f(x)=1\text{/}x.$ From the graph, we see that

${\displaystyle \sum_{n=1}^{k} \frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\text{⋯}+\frac{1}{k}>{\displaystyle \int_{1}^{k+1}\frac{1}{x}dx.}$  {eq:fs-id1169737820611}

Therefore, for each $k,$ the $k\text{th}$ partial sum ${S}_{k}$ satisfies

${S}_{k}={\displaystyle \sum_{n=1}^{k} \frac{1}{n}}>{\displaystyle \int_{1}^{k+1}\frac{1}{x}dx}=\text{ln}\;x\;{|}_{1}^{k+1}=\text{ln}(k+1)-\text{ln}(1)=\text{ln}(k+1).$  {eq:fs-id1169738142452}

Since $\lim_{k\to \infty}\text{ln}(k+1)=\infty ,$ we see that the sequence of partial sums $\{{S}_{k}\}$ is unbounded. Therefore, $\{{S}_{k}\}$ diverges, and, consequently, the series ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}$ also diverges.

> FIGURE {fig:CNX_Calc_Figure_09_03_001} src=../../media/CNX_Calc_Figure_09_03_001.jpg
> alt: This is a graph in quadrant 1 of a decreasing concave up curve approaching the x axis – f(x) = 1/x. Five rectangles are drawn with base 1 over the interval [1, 6]. The height of each rectangle is determined by the value of the function at the left endpoint of the rectangle’s base. The areas for each are marked: 1, 1/2, 1/3, 1/4, and 1/5.
> caption: The sum of the areas of the rectangles is greater than the area between the curve $f(x)=1\text{/}x$ and the $x$-axis for $x\ge 1.$ Since the area bounded by the curve is infinite (as calculated by an improper integral), the sum of the areas of the rectangles is also infinite.

Now consider the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}.$ We show how an integral can be used to prove that this series converges. In [ref:CNX_Calc_Figure_09_03_002], we sketch a sequence of rectangles with areas $1,1\text{/}{2}^{2},1\text{/}{3}^{2}\text{,…}$ along with the function $f(x)=1\text{/}{x}^{2}.$ From the graph we see that

${\displaystyle \sum_{n=1}^{k} \frac{1}{{n}^{2}}}=1+\frac{1}{{2}^{2}}+\frac{1}{{3}^{2}}+\text{⋯}+\frac{1}{{k}^{2}}<1+{\displaystyle \int_{1}^{k}\frac{1}{{x}^{2}}dx}.$  {eq:fs-id1169737815648}

Therefore, for each $k,$ the $k\text{th}$ partial sum ${S}_{k}$ satisfies

${S}_{k}={\displaystyle \sum_{n=1}^{k} \frac{1}{{n}^{2}}}<1+{\displaystyle \int_{1}^{k}\frac{1}{{x}^{2}}dx}=1-{\frac{1}{x}|}_{1}^{k}=1-\frac{1}{k}+1=2-\frac{1}{k}<2.$  {eq:fs-id1169738223359}

We conclude that the sequence of partial sums $\{{S}_{k}\}$ is bounded. We also see that $\{{S}_{k}\}$ is an increasing sequence:

${S}_{k}={S}_{k-1}+\frac{1}{{k}^{2}}\;\text{for}\;k\ge 2.$  {eq:fs-id1169737777076}

Since $\{{S}_{k}\}$ is increasing and bounded, by the Monotone Convergence Theorem, it converges. Therefore, the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}$ converges.

> FIGURE {fig:CNX_Calc_Figure_09_03_002} src=../../media/CNX_Calc_Figure_09_03_004.jpg
> alt: This is a graph in quadrant 1 of the decreasing concave up curve f(x) = 1/(x^2), which approaches the x axis. Rectangles of base 1 are drawn over the interval [0, 5]. The height of each rectangle is determined by the value of the function at the right endpoint of its base. The areas of each are marked: 1, 1/(2^2), 1/(3^2), 1/(4^2) and 1/(5^2).
> caption: The sum of the areas of the rectangles is less than the sum of the area of the first rectangle and the area between the curve $f(x)=1\text{/}{x}^{2}$ and the $x$-axis for $x\ge 1.$ Since the area bounded by the curve is finite, the sum of the areas of the rectangles is also finite.

We can extend this idea to prove convergence or divergence for many different series. Suppose $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is a series with positive terms ${a}_{n}$ such that there exists a continuous, positive, decreasing function $f$ where $f(n)={a}_{n}$ for all positive integers. Then, as in [ref:CNX_Calc_Figure_09_03_003](a), for any integer $k,$ the $k\text{th}$ partial sum ${S}_{k}$ satisfies

${S}_{k}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k}<{a}_{1}+{\displaystyle \int_{1}^{k}f}(x)dx<{a}_{1}+{\displaystyle \int_{1}^{\infty}f}(x)dx.$  {eq:fs-id1169738063800}

Therefore, if ${\displaystyle \int_{1}^{\infty}f(x)dx}$ converges, then the sequence of partial sums $\{{S}_{k}\}$ is bounded. Since $\{{S}_{k}\}$ is an increasing sequence, if it is also a bounded sequence, then by the Monotone Convergence Theorem, it converges. We conclude that if ${\displaystyle \int_{1}^{\infty}f(x)dx}$ converges, then the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ also converges. On the other hand, from [ref:CNX_Calc_Figure_09_03_003](b), for any integer $k,$ the $k\text{th}$ partial sum ${S}_{k}$ satisfies

${S}_{k}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k}>{\displaystyle \int_{1}^{k+1}f}(x)dx.$  {eq:fs-id1169738116001}

If $\lim_{k\to \infty}{\displaystyle \int_{1}^{k+1}f}(x)dx=\infty ,$ then $\{{S}_{k}\}$ is an unbounded sequence and therefore diverges. As a result, the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ also diverges. We conclude that if ${\displaystyle \int_{1}^{\infty}f}(x)dx$ diverges, then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges.

> FIGURE {fig:CNX_Calc_Figure_09_03_003} src=../../media/CNX_Calc_Figure_09_03_002.jpg
> alt: This shows two graphs side by side of the same function y = f(x), a decreasing concave up curve approaching the x axis. Rectangles are drawn with base 1 over the intervals [0, 6] and [1, 6]. For the graph on the left, the height of each rectangle is determined by the value of the function at the right endpoint of its base. For the graph on the right, the height of each rectangle is determined by the value of the function at the left endpoint of its base. Areas a_1 through a_6 are marked in the graph on the left, and the same for a_1 to a_5 on the right.
> caption: (a) If we can inscribe rectangles inside a region bounded by a curve $y=f(x)$ and the $x$-axis, and the area bounded by those curves for $x\ge 1$ is finite, then the sum of the areas of the rectangles is also finite. (b) If a set of rectangles circumscribes the region bounded by $y=f(x)$ and the $x$ axis for $x\ge 1$ and the region has infinite area, then the sum of the areas of the rectangles is also infinite.

:::note [theorem] Integral Test
Suppose ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ is a series with positive terms ${a}_{n}.$ Suppose there exists a function $f$ and a positive integer $N$ such that the following three conditions are satisfied:
1. $f$ is continuous,
2. $f$ is decreasing, and
3. $f(n)={a}_{n}$ for all integers $n\ge N.$

Then

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}\text{and}{\displaystyle \int_{N}^{\infty}f(x)dx}$  {eq:fs-id1169738057264}

both converge or both diverge (see [ref:CNX_Calc_Figure_09_03_003]).
:::
Although convergence of ${\displaystyle \int_{N}^{\infty}f(x)dx}$ implies convergence of the related series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}},$ it does not imply that the value of the integral and the series are the same. They may be different, and often are. For example,

${\displaystyle \sum_{n=1}^{\infty} {(\frac{1}{e})}^{n}}=\frac{1}{e}+{(\frac{1}{e})}^{2}+{(\frac{1}{e})}^{3}+\text{⋯}$  {eq:fs-id1169738198560}

is a geometric series with initial term $a=1\text{/}e$ and ratio $r=1\text{/}e,$ which converges to

$\frac{1\text{/}e}{1-(1\text{/}e)}=\frac{1\text{/}e}{(e-1)\text{/}e}=\frac{1}{e-1}.$  {eq:fs-id1169737168794}

However, the related integral ${\displaystyle \int_{1}^{\infty}{(1\text{/}e)}^{x}}dx$ satisfies

${\displaystyle \int_{1}^{\infty}{(\frac{1}{e})}^{x}}dx={\displaystyle \int_{1}^{\infty}{e}^{\text{−}x}}dx=\lim_{b\to \infty}{\displaystyle \int_{1}^{b}{e}^{\text{−}x}}dx=\lim_{b\to \infty}-{e}^{\text{−}x}{|}_{1}^{b}=\lim_{b\to \infty}[\text{−}{e}^{\text{−}b}+{e}^{−1}]=\frac{1}{e}.$  {eq:fs-id1169737232835}

:::example {ex:fs-id1169737903729} Using the Integral Test

:::exercise {fs-id1169737903731} type= 
PROBLEM:
For each of the following series, use the integral test to determine whether the series converges or diverges. Assume that all conditions for the integral test are met.
a. ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{3}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}\sqrt{2n-1}$
SOLUTION:
a. Compare

${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{3}}}\;\text{and}\;{\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{3}}}dx.$  {eq:fs-id1169738219658}

We have

${\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{3}}}dx=\lim_{b\to \infty}{\displaystyle \int_{1}^{b}\frac{1}{{x}^{3}}dx}=\lim_{b\to \infty}[-\frac{1}{2{x}^{2}}{|}_{1}^{b}]=\lim_{b\to \infty}[-\frac{1}{2{b}^{2}}+\frac{1}{2}]=\frac{1}{2}.$  {eq:fs-id1169738155194}

Thus the integral ${\displaystyle \int_{1}^{\infty}1}\text{/}{x}^{3}dx$ converges, and therefore so does the series

${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{3}}}.$  {eq:fs-id1169737966896}

b. Compare

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{2n-1}}\;\text{and}\;{\displaystyle \int_{1}^{\infty}\frac{1}{\sqrt{2x-1}}dx}.$  {eq:fs-id1169737981493}

Since

$\begin{array}{rl}{\displaystyle \int_{1}^{\infty}\frac{1}{\sqrt{2x-1}}dx} & =\lim_{b\to \infty}{\displaystyle \int_{1}^{b}\frac{1}{\sqrt{2x-1}}dx=\lim_{b\to \infty}\sqrt{2x-1}{|}_{1}^{b}} \\ & =\lim_{b\to \infty}[\sqrt{2b-1}-1]=\infty ,\end{array}$  {eq:fs-id1169738125948}

the integral ${\displaystyle \int_{1}^{\infty}1\text{/}\sqrt{2x-1}\;dx}$ diverges, and therefore

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{2n-1}}$  {eq:fs-id1169737169332}

diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737284932} type= 
PROBLEM:
Use the integral test to determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{n}{3{n}^{2}+1}$ converges or diverges.
SOLUTION:
The series diverges.
COMMENTARY: Hint
Compare to the integral ${\displaystyle \int_{1}^{\infty}\frac{x}{3{x}^{2}+1}dx}.$
:::
:::

## The *p*-Series
The harmonic series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}n$ and the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{2}$ are both examples of a type of series called a *p*-series.

:::note [definition] Definition
For any real number $p,$ the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{p}}$  {eq:fs-id1169737232687}

is called a {term:*p*-series}.
:::
We know the *p*-series converges if $p=2$ and diverges if $p=1.$ What about other values of $p\text{?}$ In general, it is difficult, if not impossible, to compute the exact value of most $p$-series. However, we can use the tests presented thus far to prove whether a $p$-series converges or diverges.
If $p<0,$ then $1\text{/}{n}^{p}\to \infty ,$ and if $p=0,$ then $1\text{/}{n}^{p}\to 1.$ Therefore, by the divergence test,

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}\;\text{diverges if}\;p\le 0.$  {eq:fs-id1169738249556}

If $p>0,$ then $f(x)=1\text{/}{x}^{p}$ is a positive, continuous, decreasing function. Therefore, for $p>0,$ we use the integral test, comparing

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{p}}\;\text{and}\;{\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{p}}dx}.$  {eq:fs-id1169737796258}

We have already considered the case when $p=1.$ Here we consider the case when $p>0,p≠1.$ For this case,

${\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{p}}dx=\lim_{b\to \infty}{\displaystyle \int_{1}^{b}\frac{1}{{x}^{p}}dx=\lim_{b\to \infty}\frac{1}{1-p}{x}^{1-p}{|}_{1}^{b}=\lim_{b\to \infty}\frac{1}{1-p}[{b}^{1-p}-1].}}$  {eq:fs-id1169737185451}

Because

${b}^{1-p}\to 0\;\text{if}\;p>1\;\text{and}\;{b}^{1-p}\to \infty \;\text{if}\;p<1,$  {eq:fs-id1169738180046}

we conclude that

${\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{p}}dx}=\{\begin{array}{l}\frac{1}{p-1}\;\text{if}\;p>1 \\ \infty \;\text{if}\;p\le 1\end{array}.$  {eq:fs-id1169738143762}

Therefore, $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}$ converges if $p>1$ and diverges if $0<p<1.$
In summary,

$$ {\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{p}}}\;\{\begin{array}{l}\text{converges if}\;p>1 \\ \text{diverges if}\;p\le 1\end{array}. $$  {eq:fs-id1169738111511}

:::example {ex:fs-id1169737151882} Testing for Convergence of *p*-series

:::exercise {fs-id1169737151884} type= 
PROBLEM:
For each of the following series, determine whether it converges or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{4}}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2\text{/}3}}$
SOLUTION:
a. This is a *p*-series with $p=4>1,$ so the series converges.
b. Since $p=2\text{/}3<1,$ the series diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738055554} type= 
PROBLEM:
Does the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{5\text{/}4}}$ converge or diverge?
SOLUTION:
The series converges.
COMMENTARY: Hint
$p=5\text{/}4$
:::
:::

## Estimating the Value of a Series
Suppose we know that a series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges and we want to estimate the sum of that series. Certainly we can approximate that sum using any finite sum ${\displaystyle \sum_{n=1}^{N} {a}_{n}}$ where $N$ is any positive integer. The question we address here is, for a convergent series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n},$ how good is the approximation $\overset{N}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}\text{?}$ More specifically, if we let

${R}_{N}={\displaystyle \sum_{n=1}^{\infty} {a}_{n}}-{\displaystyle \sum_{n=1}^{N} {a}_{n}}$  {eq:fs-id1169737933561}

be the remainder when the sum of an infinite series is approximated by the $N\text{th}$ partial sum, how large is ${R}_{N}\text{?}$ For some types of series, we are able to use the ideas from the integral test to estimate ${R}_{N}.$

:::note [theorem] Remainder Estimate from the Integral Test
Suppose $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is a convergent series with positive terms. Suppose there exists a function $f$ satisfying the following three conditions:
1. $f$ is continuous,
2. $f$ is decreasing, and
3. $f(n)={a}_{n}$ for all integers $n\ge 1.$
Let ${S}_{N}$ be the *N*th partial sum of $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}.$ For all positive integers $N,$

${S}_{N}+{\displaystyle \int_{N+1}^{\infty}f(x)dx<\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}<{S}_{N}+{\displaystyle \int_{N}^{\infty}f(x)dx}}.$  {eq:fs-id1169737162233}

In other words, the remainder ${R}_{N}=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}-{S}_{N}=\overset{\infty}{\underset{n=N+1}{{\displaystyle \sum}}}{a}_{n}$ satisfies the following estimate:

$$ {\displaystyle \int_{N+1}^{\infty}f(x)dx}<{R}_{N}<{\displaystyle \int_{N}^{\infty}f(x)dx.} $$  {eq:fs-id1169738183813}

This is known as the {term:remainder estimate}.
:::
We illustrate [ref:fs-id1169737162226] in [ref:CNX_Calc_Figure_09_03_004]. In particular, by representing the remainder ${R}_{N}={a}_{N+1}+{a}_{N+2}+{a}_{N+3}+\text{⋯}$ as the sum of areas of rectangles, we see that the area of those rectangles is bounded above by ${\displaystyle \int_{N}^{\infty}f(x)dx}$ and bounded below by ${\displaystyle \int_{N+1}^{\infty}f(x)dx}.$ In other words,

${R}_{N}={a}_{N+1}+{a}_{N+2}+{a}_{N+3}+\text{⋯}>{\displaystyle \int_{N+1}^{\infty}f(x)dx}$  {eq:fs-id1169738198566}

and

${R}_{N}={a}_{N+1}+{a}_{N+2}+{a}_{N+3}+\text{⋯}<{\displaystyle \int_{N}^{\infty}f(x)dx}.$  {eq:fs-id1169738125853}

We conclude that

${\displaystyle \int_{N+1}^{\infty}f(x)dx<{R}_{N}<{\displaystyle \int_{N}^{\infty}f(x)dx}}.$  {eq:fs-id1169737301598}

Since

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={S}_{N}+{R}_{N},$  {eq:fs-id1169737359285}

where ${S}_{N}$ is the $N\text{th}$ partial sum, we conclude that

${S}_{N}+{\displaystyle \int_{N+1}^{\infty}f(x)dx<\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}<{S}_{N}+{\displaystyle \int_{N}^{\infty}f(x)dx}}.$  {eq:fs-id1169738178546}

> FIGURE {fig:CNX_Calc_Figure_09_03_004} src=../../media/CNX_Calc_Figure_09_03_003_5_15.jpg
> alt: This shows two graphs side by side of the same decreasing concave up function y = f(x) that approaches the x axis in quadrant 1. Rectangles are drawn with a base of 1 over the intervals N through N + 4. The heights of the rectangles in the first graph are determined by the value of the function at the right endpoints of the bases, and those in the second graph are determined by the value at the left endpoints of the bases. The areas of the rectangles are marked: a_(N + 1),  a_(N + 2), through a_(N + 4).
> caption: Given a continuous, positive, decreasing function $f$ and a sequence of positive terms ${a}_{n}$ such that ${a}_{n}=f(n)$ for all positive integers $n,$ (a) the areas ${a}_{N+1}+{a}_{N+2}+{a}_{N+3}+\text{⋯}<{\displaystyle \int_{N}^{\infty}f(x)dx},$ or (b) the areas ${a}_{N+1}+{a}_{N+2}+{a}_{N+3}+\text{⋯}>{\displaystyle \int_{N+1}^{\infty}f(x)dx}.$ Therefore, the integral is either an overestimate or an underestimate of the error.

:::example {ex:fs-id1169737360049} Estimating the Value of a Series

:::exercise {fs-id1169737360052} type= 
PROBLEM:
Consider the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{3}.$
a. Calculate ${S}_{10}=\overset{10}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{3}$ and estimate the error.
b. Determine the least value of $N$ necessary such that ${S}_{N}$ will estimate $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{3}$ to within $0.001.$
SOLUTION:
a. Using a calculating utility, we have

${S}_{10}=1+\frac{1}{{2}^{3}}+\frac{1}{{3}^{3}}+\frac{1}{{4}^{3}}+\text{⋯}+\frac{1}{{10}^{3}}\approx 1.19753.$  {eq:fs-id1169737848242}

By the remainder estimate, we know

${R}_{N}<{\displaystyle \int_{N}^{\infty}\frac{1}{{x}^{3}}dx}.$  {eq:fs-id1169737361700}

We have

${\displaystyle \int_{10}^{\infty}\frac{1}{{x}^{3}}dx=\lim_{b\to \infty}{\displaystyle \int_{10}^{b}\frac{1}{{x}^{3}}dx=\lim_{b\to \infty}[-\frac{1}{2{x}^{2}}{]}_{N}^{b}=\lim_{b\to \infty}[-\frac{1}{2{b}^{2}}+\frac{1}{2{N}^{2}}]=\frac{1}{2{N}^{2}}.}}$  {eq:fs-id1169737392470}

Therefore, the error is ${R}_{10}<1\text{/}2{(10)}^{2}=0.005.$
b. Find $N$ such that ${R}_{N}<0.001.$ In part a. we showed that ${R}_{N}<1\text{/}(2{N}^{2}).$ Therefore, the remainder ${R}_{N}<0.001$ as long as $1\text{/}(2{N}^{2})<0.001.$ That is, we need $2{N}^{2}>1000.$ Solving this inequality for $N,$ we see that we need $N>22.36.$ To ensure that the remainder is within the desired amount, we need to round up to the nearest integer. Therefore, the minimum necessary value is $N=23.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738249584} type= 
PROBLEM:
For $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{4}},$ calculate ${S}_{5}$ and estimate the error ${R}_{5}.$
SOLUTION:
${S}_{5}\approx 1.09035,$ ${R}_{5}<0.00267$
COMMENTARY: Hint
Use the remainder estimate ${R}_{N}<{\displaystyle \int_{N}^{\infty}1\text{/}{x}^{4}dx}.$
:::
:::

## Key Concepts {section:key-concepts}
- If $\lim_{n\to \infty}{a}_{n}≠0,$ then the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges.
- If $\lim_{n\to \infty}{a}_{n}=0,$ the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ may converge or diverge.
- If $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is a series with positive terms ${a}_{n}$ and $f$ is a continuous, decreasing function such that $f(n)={a}_{n}$ for all positive integers $n,$ then

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}\text{and}{\displaystyle \int_{1}^{\infty}f(x)dx}$  {eq:fs-id1169738155262}

either both converge or both diverge. Furthermore, if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges, then the $N\text{th}$ partial sum approximation ${S}_{N}$ is accurate up to an error ${R}_{N}$ where ${\displaystyle \int_{N+1}^{\infty}f(x)dx<{R}_{N}<{\displaystyle \int_{N}^{\infty}f(x)dx}}.$
- The *p*-series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}$ converges if $p>1$ and diverges if $p\le 1.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-521} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Divergence test** | $\text{If}\;{a}_{n}\nrightarrow 0\;\text{as}\;n\to \infty ,{\displaystyle \sum_{n=1}^{\infty} {a}_{n}}\;\text{diverges}.$ |
| ***p*-series** | ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{p}}}\{\begin{array}{l}\text{converges if}\;p>1 \\ \text{diverges if}\;p\le 1\end{array}$ |
| **Remainder estimate from the integral test** | ${\displaystyle \int_{N+1}^{\infty}f(x)dx}<{R}_{N}<{\displaystyle \int_{N}^{\infty}f(x)dx}$ |

##  {section:section-exercises}
For each of the following series, if the divergence test applies, either state that $\lim_{n\to \infty}{a}_{n}$ does not exist or find $\lim_{n\to \infty}{a}_{n}.$ If the divergence test does not apply, state why.

:::exercise {fs-id1169738080412} type= 
PROBLEM:
${a}_{n}=\frac{n}{n+2}$
:::

:::exercise {fs-id1169737168536} type= 
PROBLEM:
${a}_{n}=\frac{n}{5{n}^{2}-3}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=0.$ Divergence test does not apply.
:::

:::exercise {fs-id1169737233880} type= 
PROBLEM:
${a}_{n}=\frac{n}{\sqrt{3{n}^{2}+2n+1}}$
:::

:::exercise {fs-id1169737254368} type= 
PROBLEM:
${a}_{n}=\frac{(2n+1)(n-1)}{{(n+1)}^{2}}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=2.$ Series diverges.
:::

:::exercise {fs-id1169737299451} type= 
PROBLEM:
${a}_{n}=\frac{{(2n+1)}^{2n}}{{(3{n}^{2}+1)}^{n}}$
:::

:::exercise {fs-id1169737429525} type= 
PROBLEM:
${a}_{n}=\frac{{2}^{n}}{{3}^{n\text{/}2}}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=\infty$ (does not exist). Series diverges.
:::

:::exercise {fs-id1169737297438} type= 
PROBLEM:
${a}_{n}=\frac{{2}^{n}+{3}^{n}}{{10}^{n\text{/}2}}$
:::

:::exercise {fs-id1169738082449} type= 
PROBLEM:
${a}_{n}={e}^{−2\text{/}n}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=1.$ Series diverges.
:::

:::exercise {fs-id1169737360108} type= 
PROBLEM:
${a}_{n}=\text{cos}\;n$
:::

:::exercise {fs-id1169737160756} type= 
PROBLEM:
${a}_{n}=\text{tan}\;n$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}$ does not exist. Series diverges.
:::

:::exercise {fs-id1169737392447} type= 
PROBLEM:
${a}_{n}=\frac{1-{\text{cos}}^{2}(1\text{/}n)}{{\text{sin}}^{2}(2\text{/}n)}$
:::

:::exercise {fs-id1169737162782} type= 
PROBLEM:
${a}_{n}={(1-\frac{1}{n})}^{2n}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=1\text{/}{e}^{2}.$ Series diverges.
:::

:::exercise {fs-id1169737927659} type= 
PROBLEM:
${a}_{n}=\frac{\text{ln}\;n}{n}$
:::

:::exercise {fs-id1169738166405} type= 
PROBLEM:
${a}_{n}=\frac{{(\text{ln}\;n)}^{2}}{\sqrt{n}}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=0.$ Divergence test does not apply.
:::
State whether the given $p$-series converges.

:::exercise {fs-id1169738170083} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}}$
:::

:::exercise {fs-id1169738228514} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n\sqrt{n}}}$
SOLUTION:
Series converges, $p>1.$
:::

:::exercise {fs-id1169737429972} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{\sqrt[3]{{n}^{2}}}}$
:::

:::exercise {fs-id1169737930830} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{\sqrt[3]{{n}^{4}}}}$
SOLUTION:
Series converges, $p=4\text{/}3>1.$
:::

:::exercise {fs-id1169738187717} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{n}^{e}}{{n}^{\pi}}}$
:::

:::exercise {fs-id1169737433513} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{n}^{\pi}}{{n}^{2e}}}$
SOLUTION:
Series converges, $p=2e-\pi >1.$
:::
Use the integral test to determine whether the following sums converge.

:::exercise {fs-id1169737162468} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{\sqrt{n+5}}}$
:::

:::exercise {fs-id1169737436180} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{\sqrt[3]{n+5}}}$
SOLUTION:
Series diverges by comparison with ${\displaystyle \int_{1}^{\infty}\frac{dx}{{(x+5)}^{1\text{/}3}}}.$
:::

:::exercise {fs-id1169738143698} type= 
PROBLEM:
${\displaystyle \sum_{n=2}^{\infty} \frac{1}{n\;\text{ln}\;n}}$
:::

:::exercise {fs-id1169737261994} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n}{1+{n}^{2}}}$
SOLUTION:
Series diverges by comparison with ${\displaystyle \int_{1}^{\infty}\frac{x}{1+{x}^{2}}}dx.$
:::

:::exercise {fs-id1169738165360} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{e}^{n}}{1+{e}^{2n}}}$
:::

:::exercise {fs-id1169738080307} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{2n}{1+{n}^{4}}}$
SOLUTION:
Series converges by comparison with ${\displaystyle \int_{1}^{\infty}\frac{2x}{1+{x}^{4}}}dx.$
:::

:::exercise {fs-id1169737438535} type= 
PROBLEM:
${\displaystyle \sum_{n=2}^{\infty} \frac{1}{n\;{\text{ln}}^{2}n}}$
:::
Express the following sums as $p$-series and determine whether each converges.

:::exercise {fs-id1169737144959} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {2}^{\text{−}\text{ln}\;n}}$ (*Hint:* ${2}^{\text{−}\text{ln}\;n}=1\text{/}{n}^{\text{ln}\;2}$.)
SOLUTION:
${2}^{\text{−}\text{ln}\;n}=1\text{/}{n}^{\text{ln}\;2}.$ Since $\text{ln}\;2<1,$ diverges by $p$-series.
:::

:::exercise {fs-id1169738234498} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {3}^{\text{−}\text{ln}\;n}}$ (*Hint:* ${3}^{\text{−}\text{ln}\;n}=1\text{/}{n}^{\text{ln}\;3}$.)
:::

:::exercise {fs-id1169738168162} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} n{2}^{−2\;\text{ln}\;n}}$
SOLUTION:
${2}^{−2\;\text{ln}\;n}=1\text{/}{n}^{2\;\text{ln}\;2}.$ Since $2\;\text{ln}\;2-1<1,$ diverges by $p$-series.
:::

:::exercise {fs-id1169737438402} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} n{3}^{−2\;\text{ln}\;n}}$
:::
Use the estimate ${R}_{N}\le {\displaystyle \int_{N}^{\infty}f}(t)dt$ to find a bound for the remainder ${R}_{N}={\displaystyle \sum_{n=1}^{\infty} {a}_{n}}-{\displaystyle \sum_{n=1}^{N} {a}_{n}}$ where ${a}_{n}=f(n).$

:::exercise {fs-id1169737438131} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{1000} \frac{1}{{n}^{2}}}$
SOLUTION:
${R}_{1000}\le {\displaystyle \int_{1000}^{\infty}\frac{dt}{{t}^{2}}}=-\frac{1}{t}{|}_{1000}^{\infty}=0.001$
:::

:::exercise {fs-id1169737269840} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{1000} \frac{1}{{n}^{3}}}$
:::

:::exercise {fs-id1169737432841} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{1000} \frac{1}{1+{n}^{2}}}$
SOLUTION:
${R}_{1000}\le {\displaystyle \int_{1000}^{\infty}\frac{dt}{1+{t}^{2}}}={\text{tan}}^{−1}\infty -{\text{tan}}^{−1}(1000)=\pi \text{/}2-{\text{tan}}^{−1}(1000)\approx 0.000999$
:::

:::exercise {fs-id1169737162209} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{100} n}\text{/}{2}^{n}$
:::
**[T]** Find the minimum value of $N$ such that the remainder estimate ${\displaystyle \int_{N+1}^{\infty}f<{R}_{N}<}{\displaystyle \int_{N}^{\infty}f}$ guarantees that ${\displaystyle \sum_{n=1}^{N} {a}_{n}}$ estimates ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}},$ accurate to within the given error.

:::exercise {fs-id1169737201441} type= 
PROBLEM:
${a}_{n}=\frac{1}{{n}^{2}},$ error $<{10}^{−4}$
SOLUTION:
${R}_{N}<{\displaystyle \int_{N}^{\infty}\frac{dx}{{x}^{2}}}=1\text{/}N,N>{10}^{4}$
:::

:::exercise {fs-id1169737201486} type= 
PROBLEM:
${a}_{n}=\frac{1}{{n}^{1.1}},$ error $<{10}^{−4}$
:::

:::exercise {fs-id1169738168100} type= 
PROBLEM:
${a}_{n}=\frac{1}{{n}^{1.01}},$ error $<{10}^{−4}$
SOLUTION:
${R}_{N}<{\displaystyle \int_{N}^{\infty}\frac{dx}{{x}^{1.01}}}=100{N}^{−0.01},N>{10}^{600}$
:::

:::exercise {fs-id1169737269788} type= 
PROBLEM:
${a}_{n}=\frac{1}{n\;{\text{ln}}^{2}n},$ error $<{10}^{−3}$
:::

:::exercise {fs-id1169738244386} type= 
PROBLEM:
${a}_{n}=\frac{1}{1+{n}^{2}},$ error $<{10}^{−3}$
SOLUTION:
${R}_{N}<{\displaystyle \int_{N}^{\infty}\frac{dx}{1+{x}^{2}}}=\pi \text{/}2-{\text{tan}}^{−1}(N),N>\text{tan}(\pi \text{/}2-{10}^{−3})\approx 1000$
:::
In the following exercises, find a value of $N$ such that ${R}_{N}$ is smaller than the desired error. Compute the corresponding sum ${\displaystyle \sum_{n=1}^{N} {a}_{n}}$ and compare it to the given estimate of the infinite series.

:::exercise {fs-id1169738077695} type= 
PROBLEM:
${a}_{n}=\frac{1}{{n}^{11}},$ error $<{10}^{−4},$ ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{11}}}=1.000494\text{…}$
:::

:::exercise {fs-id1169737430087} type= 
PROBLEM:
${a}_{n}=\frac{1}{{e}^{n}},$ error $<{10}^{−5},$ ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{e}^{n}}}=\frac{1}{e-1}=0.581976\text{…}$
SOLUTION:
${R}_{N}<{\displaystyle \int_{N}^{\infty}\frac{dx}{{e}^{x}}}={e}^{\text{−}N},N>5\;\text{ln}\;(10),$ okay if $N=12;{\displaystyle \sum_{n=1}^{12} {e}^{\text{−}n}}=0.581973....$ Estimate agrees with $1\text{/}(e-1)$ to five decimal places.
:::

:::exercise {fs-id1169737394677} type= 
PROBLEM:
${a}_{n}=\frac{n}{{e}^{{n}^{2}}},$ error $<{10}^{−5},$ ${\displaystyle \sum_{n=1}^{\infty} n\text{/}{e}^{{n}^{2}}}=0.40488139857\text{…}$
:::

:::exercise {fs-id1169738180622} type= 
PROBLEM:
${a}_{n}=1\text{/}{n}^{4},$ error $<{10}^{−4},$ ${\displaystyle \sum_{n=1}^{\infty} 1\text{/}{n}^{4}}={\pi}^{4}\text{/}90=1.08232...$
SOLUTION:
${R}_{N}<\int_{N}^{\infty}dx\text{/}{x}^{4}=1\text{/}3{N}^{3},N>{({10}^{4}/3)}^{1\text{/}3},$ okay if $N=15;$
${\displaystyle \sum_{n=1}^{15} 1\text{/}{n}^{4}}=1.08226\text{…}.$ Estimate agrees with the sum to three decimal places.
:::

:::exercise {fs-id1169737428330} type= 
PROBLEM:
${a}_{n}=1\text{/}{n}^{6},$ error $<{10}^{−6},$ ${\displaystyle \sum_{n=1}^{\infty} 1\text{/}{n}^{6}}={\pi}^{6}\text{/}945=1.01734306...,$
:::

:::exercise {fs-id1169738078924} type= 
PROBLEM:
Find the limit as $n\to \infty$ of $\frac{1}{n}+\frac{1}{n+1}+\text{⋯}+\frac{1}{2n}.$ (*Hint:* Compare to ${\displaystyle \int_{n}^{2n}\frac{1}{t}}dt.\text{)}$
SOLUTION:
$\text{ln}(2)$
:::

:::exercise {fs-id1169737910260} type= 
PROBLEM:
Find the limit as $n\to \infty$ of $\frac{1}{n}+\frac{1}{n+1}+\text{⋯}+\frac{1}{3n}$
:::
The next few exercises are intended to give a sense of applications in which partial sums of the harmonic series arise.

:::exercise {fs-id1169737168073} type= 
PROBLEM:
In certain applications of probability, such as the so-called Watterson estimator for predicting mutation rates in population genetics, it is important to have an accurate estimate of the number ${H}_{k}=(1+\frac{1}{2}+\frac{1}{3}+\text{⋯}+\frac{1}{k}).$ Recall that ${T}_{k}={H}_{k}-\text{ln}\;k$ is decreasing. Compute $T=\lim_{k\to \infty}{T}_{k}$ to four decimal places. (*Hint:* $\frac{1}{k+1}<{\displaystyle \int_{k}^{k+1}\frac{1}{x}}dx$.)
SOLUTION:
$T=0.5772...$
:::

:::exercise {fs-id1169738139644} type= 
PROBLEM:
**[T]** Complete sampling with replacement, sometimes called the {index:*coupon collector’s problem*}, is phrased as follows: Suppose you have $N$ unique items in a bin. At each step, an item is chosen at random, identified, and put back in the bin. The problem asks what is the expected number of steps $E(N)$ that it takes to draw each unique item at least once. It turns out that $E(N)=N$. ${H}_{N}=N(1+\frac{1}{2}+\frac{1}{3}+\text{⋯}+\frac{1}{N})$. Find $E(N)$ for $N=10,20,\text{and}\;50$.
:::

:::exercise {fs-id1169738185026} type= 
PROBLEM:
**[T]** The simplest way to shuffle cards is to take the top card and insert it at a random place in the deck, called top random insertion, and then repeat. We will consider a deck to be randomly shuffled once enough top random insertions have been made that the card originally at the bottom has reached the top and then been randomly inserted. If the deck has $n$ cards, then the probability that the insertion will be below the card initially at the bottom (call this card $B)$ is $1\text{/}n.$ Thus the expected number of top random insertions before $B$ is no longer at the bottom is *n*. Once one card is below $B,$ there are two places below $B$ and the probability that a randomly inserted card will fall below $B$ is $2\text{/}n.$ The expected number of top random insertions before this happens is $n\text{/}2.$ The two cards below $B$ are now in random order. Continuing this way, find a formula for the expected number of top random insertions needed to consider the deck to be randomly shuffled.
SOLUTION:
The expected number of random insertions to get $B$ to the top is $n+n\text{/}2+n\text{/}3+\text{⋯}+n\text{/}(n-1).$ Then one more insertion puts $B$ back in at random. Thus, the expected number of shuffles to randomize the deck is $n(1+1\text{/}2+\text{⋯}+1\text{/}n).$
:::

:::exercise {fs-id1169737160562} type= 
PROBLEM:
Suppose a scooter can travel $100$ km on a full tank of fuel. Assuming that fuel can be transferred from one scooter to another but can only be carried in the tank, present a procedure that will enable one of the scooters to travel $100{H}_{N}$ km, where ${H}_{N}=1+1\text{/}2+\text{⋯}+1\text{/}N.$
:::

:::exercise {fs-id1169737430223} type= 
PROBLEM:
Show that for the remainder estimate to apply on $[N,\infty )$ it is sufficient that $f(x)$ be decreasing on $[N,\infty ),$ but $f$ need not be decreasing on $[1,\infty ).$
SOLUTION:
Set ${b}_{n}={a}_{n+N}$ and $g(t)=f(t+N)$ such that $f$ is decreasing on $[t,\infty ).$
:::

:::exercise {fs-id1169738233530} type= 
PROBLEM:
**[T]** Use the remainder estimate and integration by parts to approximate ${\displaystyle \sum_{n=1}^{\infty} n\text{/}{e}^{n}}$ within an error smaller than $0.0001.$
:::

:::exercise {fs-id1169738056360} type= 
PROBLEM:
Does ${\displaystyle \sum_{n=2}^{\infty} \frac{1}{n{(\text{ln}\;n)}^{p}}}$ converge if $p$ is large enough? If so, for which $p\text{?}$
SOLUTION:
The series converges for $p>1$ by integral test using change of variable.
:::

:::exercise {fs-id1169737392267} type= 
PROBLEM:
**[T]** Suppose a computer can sum one million terms per second of the divergent series ${\displaystyle \sum_{n=1}^{N} \frac{1}{n}}.$ Use the integral test to approximate how many seconds it will take to add up enough terms for the partial sum to exceed $100.$
:::

:::exercise {fs-id1169737214923} type= 
PROBLEM:
**[T]** A fast computer can sum one million terms per second of the divergent series ${\displaystyle \sum_{n=2}^{N} \frac{1}{n\;\text{ln}\;n}}.$ Use the integral test to approximate how many seconds it will take to add up enough terms for the partial sum to exceed $100.$
SOLUTION:
$N={e}^{{e}^{100}}\approx {e}^{{10}^{43}}$ terms are needed.
:::

## Glossary
- {def} **divergence test**: if $\lim_{n\to \infty}{a}_{n}≠0,$ then the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges
- {def} **integral test**: for a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with positive terms ${a}_{n},$ if there exists a continuous, decreasing function $f$ such that $f(n)={a}_{n}$ for all positive integers $n,$ then

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}\text{and}{\displaystyle \int_{1}^{\infty}f(x)dx}$  {eq:fs-id1169738161782}

either both converge or both diverge
- {def} ***p*-series**: a series of the form $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}$
- {def} **remainder estimate**: for a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with positive terms ${a}_{n}$ and a continuous, decreasing function $f$ such that $f(n)={a}_{n}$ for all positive integers $n,$ the remainder ${R}_{N}=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}-\overset{N}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ satisfies the following estimate:

${\displaystyle \int_{N+1}^{\infty}f(x)dx<{R}_{N}<}{\displaystyle \int_{N}^{\infty}f(x)dx}$  {eq:fs-id1169738066622}


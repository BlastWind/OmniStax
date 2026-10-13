# Ratio and Root Tests

## Learning Objectives {section:learning-objectives}
- Use the ratio test to determine absolute convergence of a series.
- Use the root test to determine absolute convergence of a series.
- Describe a strategy for testing the convergence of a given series.

In this section, we prove the last two series convergence tests: the ratio test and the root test. These tests are particularly nice because they do not require us to find a comparable series. The ratio test will be especially useful in the discussion of power series in the next chapter.
Throughout this chapter, we have seen that no single convergence test works for all series. Therefore, at the end of this section we discuss a strategy for choosing which convergence test to use for a given series.

## Ratio Test
Consider a series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$ From our earlier discussion and examples, we know that $\lim_{n\to \infty}{a}_{n}=0$ is not a sufficient condition for the series to converge. Not only do we need ${a}_{n}\to 0,$ but we need ${a}_{n}\to 0$ quickly enough. For example, consider the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}n$ and the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}.$ We know that $1\text{/}n\to 0$ and $1\text{/}{n}^{2}\to 0.$ However, only the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}$ converges. The series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}n$ diverges because the terms in the sequence $\{1\text{/}n\}$ do not approach zero fast enough as $n\to \infty .$ Here we introduce the {term:ratio test}, which provides a way of measuring how fast the terms of a series approach zero.

:::note [theorem] Ratio Test
Let $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ be a series with nonzero terms. Let

$ρ=\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|.$  {eq:fs-id1169739298350}

1. If $0\le ρ<1,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges absolutely.
2. If $ρ>1$ or $ρ=\infty ,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges.
3. If $ρ=1,$ the test does not provide any information.
:::

### Proof
Let ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ be a series with nonzero terms.
We begin with the proof of part i. In this case, $ρ=\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|<1.$ Since $0\le ρ<1,$ there exists $R$ such that $0\le ρ<R<1.$ Let $ε=R-ρ>0.$ By the definition of limit of a sequence, there exists some integer $N$ such that

$||\frac{{a}_{n+1}}{{a}_{n}}|-ρ|<ε\;\text{for all}\;n\ge N.$  {eq:fs-id1169739275391}

Therefore,

$|\frac{{a}_{n+1}}{{a}_{n}}|<ρ+ε=R\;\text{for all}\;n\ge N$  {eq:fs-id1169738869993}

and, thus,

$\begin{array}{l}|{a}_{N+1}|<R|{a}_{N}| \\ |{a}_{N+2}|<R|{a}_{N+1}|<{R}^{2}|{a}_{N}| \\ |{a}_{N+3}|<R|{a}_{N+2}|<{R}^{2}|{a}_{N+1}|<{R}^{3}|{a}_{N}| \\ |{a}_{N+4}|<R|{a}_{N+3}|<{R}^{2}|{a}_{N+2}|<{R}^{3}|{a}_{N+1}|<{R}^{4}|{a}_{N}| \\ \vdots .\end{array}$  {eq:fs-id1169738914987}

Since $R<1,$ the geometric series

$R|{a}_{N}|+{R}^{2}|{a}_{N}|+{R}^{3}|{a}_{N}|+\text{⋯}$  {eq:fs-id1169739212808}

converges. Given the inequalities above, we can apply the comparison test and conclude that the series

$|{a}_{N+1}|+|{a}_{N+2}|+|{a}_{N+3}|+|{a}_{N+4}|+\text{⋯}$  {eq:fs-id1169738971694}

converges. Therefore, since

${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|={\displaystyle \sum_{n=1}^{N} |}{a}_{n}|+{\displaystyle \sum_{n=N+1}^{\infty} |}{a}_{n}|$  {eq:fs-id1169739298749}

where ${\displaystyle \sum_{n=1}^{N} |}{a}_{n}|$ is a finite sum and ${\displaystyle \sum_{n=N+1}^{\infty} |}{a}_{n}|$ converges, we conclude that ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|$ converges.
For part ii.
Now suppose $ρ=|\frac{{a}_{n+1}}{{a}_{n}}|>1$.
There exists some $N$ such that $|\frac{{a}_{n+1}}{{a}_{n}}|>1$ for all $n\ge N$.
Then $|{a}_{n-}|>|{a}_{n}|$.
Now because $|{a}_{n-}|>|{a}_{n}|$ for all $n\ge N$, we know that $|{a}_{n}|≠0$.
It follows that $|{a}_{n}|≠0$.
By the divergence test, the series $\sum_{n=1}^{\infty} {a}_{n}$ diverges.

$|{a}_{N+1}|+|{a}_{N+2}|+|{a}_{N+3}|+\text{⋯}$  {eq:fs-id1169739097736}

diverges, and therefore the series ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|$ diverges.
For part iii. we show that the test does not provide any information if $ρ=1$ by considering the $p-\text{series}$ $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}.$ For any real number $p,$

$ρ=\lim_{n\to \infty}\frac{1\text{/}{(n+1)}^{p}}{1\text{/}{n}^{p}}=\lim_{n\to \infty}\frac{{n}^{p}}{{(n+1)}^{p}}=1.$  {eq:fs-id1169739043970}

However, we know that if $p\le 1,$ the $p-\text{series}$ $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}$ diverges, whereas $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{p}$ converges if $p>1.$
□
The ratio test is particularly useful for series whose terms contain factorials or exponentials, where the ratio of terms simplifies the expression. The ratio test is convenient because it does not require us to find a comparative series. The drawback is that the test sometimes does not provide any information regarding convergence.

:::example {ex:fs-id1169736845320} Using the Ratio Test

:::exercise {fs-id1169739301472} type= 
PROBLEM:
For each of the following series, use the ratio test to determine whether the series converges or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{2}^{n}}{n\text{!}}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{n}}{n\text{!}}$
c. ${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}{(n\text{!})}^{2}}{(2n)\text{!}}}$
SOLUTION:
a. From the ratio test, we can see that

$ρ=\lim_{n\to \infty}\frac{{2}^{n+1}\text{/}(n+1)\text{!}}{{2}^{n}\text{/}n\text{!}}=\lim_{n\to \infty}\frac{{2}^{n+1}}{(n+1)\text{!}}\cdot \frac{n\text{!}}{{2}^{n}}.$  {eq:fs-id1169739097521}

Since $(n+1)\text{!}=(n+1)\cdot n\text{!},$

$ρ=\lim_{n\to \infty}\frac{2}{n+1}=0.$  {eq:fs-id1169738890904}

Since $ρ<1,$ the series converges.
b. We can see that

$\begin{array}{ll}ρ & =\lim_{n\to \infty}\frac{{(n+1)}^{n+1}\text{/}(n+1)\text{!}}{{n}^{n}\text{/}n\text{!}} \\ & =\lim_{n\to \infty}\frac{{(n+1)}^{n+1}}{(n+1)\text{!}}\cdot \frac{n\text{!}}{{n}^{n}} \\ & =\lim_{n\to \infty}{(\frac{n+1}{n})}^{n}=\lim_{n\to \infty}{(1+\frac{1}{n})}^{n}=e.\end{array}$  {eq:fs-id1169736738161}

Since $ρ>1,$ the series diverges.
c. Since

$\begin{array}{rl}|\frac{{(−1)}^{n+1}{((n+1)\text{!})}^{2}\text{/}(2(n+1))\text{!}}{{(−1)}^{n}{(n\text{!})}^{2}\text{/}(2n)\text{!}}| & =\frac{(n+1)\text{!}(n+1)\text{!}}{(2n+2)\text{!}}\cdot \frac{(2n)\text{!}}{n\text{!}n\text{!}} \\ & =\frac{(n+1)(n+1)}{(2n+2)(2n+1)}\end{array}$  {eq:fs-id1169739205416}

we see that

$ρ=\lim_{n\to \infty}\frac{(n+1)(n+1)}{(2n+2)(2n+1)}=\frac{1}{4}.$  {eq:fs-id1169739093131}

Since $ρ<1,$ the series converges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736850672} type= 
PROBLEM:
Use the ratio test to determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{3}}{{3}^{n}}$ converges or diverges.
SOLUTION:
The series converges.
COMMENTARY: Hint
Evaluate $\lim_{n\to \infty}\frac{{(n+1)}^{3}}{{3}^{n+1}}\cdot \frac{{3}^{n}}{{n}^{3}}.$
:::
:::

### Root Test
The approach of the {term:root test} is similar to that of the ratio test. Consider a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ such that $\lim_{n\to \infty}\sqrt[n]{|{a}_{n}|}=ρ$ for some real number $ρ.$ Then for $N$ sufficiently large, $|{a}_{N}|\approx {ρ}^{N}.$ Therefore, we can approximate ${\displaystyle \sum_{n=N}^{\infty} |}{a}_{n}|$ by writing

$|{a}_{N}|+|{a}_{N+1}|+|{a}_{N+2}|+\text{⋯}\approx {ρ}^{N}+{ρ}^{N+1}+{ρ}^{N+2}+\text{⋯}.$  {eq:fs-id1169739040737}

The expression on the right-hand side is a geometric series. As in the ratio test, the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges absolutely if $0\le ρ<1$ and the series diverges if $ρ\ge 1.$ If $ρ=1,$ the test does not provide any information. For example, for any *p*-series, ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{p},$ we see that

$ρ=\lim_{n\to \infty}\sqrt[n]{|\frac{1}{{n}^{p}}|}=\lim_{n\to \infty}\frac{1}{{n}^{p\text{/}n}}.$  {eq:fs-id1169736852758}

To evaluate this limit, we use the natural logarithm function. Doing so, we see that

$\text{ln}\;ρ=\text{ln}(\lim_{n\to \infty}\frac{1}{{n}^{p\text{/}n}})=\lim_{n\to \infty}\text{ln}{(\frac{1}{n})}^{p\text{/}n}=\lim_{n\to \infty}\frac{p}{n}\cdot \text{ln}(\frac{1}{n})=\lim_{n\to \infty}\frac{p\;\text{ln}(1\text{/}n)}{n}.$  {eq:fs-id1169736853081}

Using L’Hôpital’s rule, it follows that $\text{ln}\;ρ=0,$ and therefore $ρ=1$ for all $p.$ However, we know that the *p*-series only converges if $p>1$ and diverges if $p<1.$

:::note [theorem] Root Test
Consider the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}.$ Let

$ρ=\lim_{n\to \infty}\sqrt[n]{|{a}_{n}|}.$  {eq:fs-id1169739260282}

1. If $0\le ρ<1,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges absolutely.
2. If $ρ>1$ or $ρ=\infty ,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges.
3. If $ρ=1,$ the test does not provide any information.
:::
The root test is useful for series whose terms involve exponentials. In particular, for a series whose terms ${a}_{n}$ satisfy $|{a}_{n}|={b}_{n}^{n},$ then $\sqrt[n]{|{a}_{n}|}={b}_{n}$ and we need only evaluate $\lim_{n\to \infty}{b}_{n}.$

:::example {ex:fs-id1169736615350} Using the Root Test

:::exercise {fs-id1169736615352} type= 
PROBLEM:
For each of the following series, use the root test to determine whether the series converges or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{({n}^{2}+3n)}^{n}}{{(4{n}^{2}+5)}^{n}}$
b. $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{{n}^{n}}{{(\text{ln}(n))}^{n}}$
SOLUTION:
a. To apply the root test, we compute

$ρ=\lim_{n\to \infty}\sqrt[n]{{({n}^{2}+3n)}^{n}\text{/}{(4{n}^{2}+5)}^{n}}=\lim_{n\to \infty}\frac{{n}^{2}+3n}{4{n}^{2}+5}=\frac{1}{4}.$  {eq:fs-id1169739110625}

Since $ρ<1,$ the series converges absolutely.
b. We have

$ρ=\lim_{n\to \infty}\sqrt[n]{{n}^{n}\text{/}{(\text{ln}\;n)}^{n}}=\lim_{n\to \infty}\frac{n}{\text{ln}\;n}=\infty \;\text{by L’Hôpital’s rule}.$  {eq:fs-id1169736636617}

Since $ρ=\infty ,$ the series diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736852679} type= 
PROBLEM:
Use the root test to determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{n}$ converges or diverges.
SOLUTION:
The series converges.
COMMENTARY: Hint
Evaluate $\lim_{n\to \infty}\sqrt[n]{1\text{/}{n}^{n}}$ using L’Hôpital’s rule.
:::
:::

## Choosing a Convergence Test
At this point, we have a long list of convergence tests. However, not all tests can be used for all series. When given a series, we must determine which test is the best to use. Here is a strategy for finding the best test to apply.

:::note [problem-solving] Choosing a Convergence Test for a Series
Consider a series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$ In the steps below, we outline a strategy for determining whether the series converges.
1. Is ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ a familiar series? For example, is it the harmonic series (which diverges) or the alternating harmonic series (which converges)? Is it a $p-\text{series}$ or geometric series? If so, check the power $p$ or the ratio $r$ to determine if the series converges.
2. Is it an alternating series? Are we interested in absolute convergence or just convergence? If we are just interested in whether the series converges, apply the alternating series test. If we are interested in absolute convergence, proceed to step $3,$ considering the series of absolute values ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|.$
3. Is the series similar to a $p-\text{series}$ or geometric series? If so, try the comparison test or limit comparison test.
4. Do the terms in the series contain a factorial or power? If the terms are powers such that ${a}_{n}={b}_{n}^{n},$ try the root test first. Otherwise, try the ratio test first.
5. Use the divergence test. If this test does not provide any information, try the integral test.
:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_series2) for more information on testing series for convergence, plus general information on sequences and series.
:::

:::example {ex:fs-id1169736685651} Using Convergence Tests

:::exercise {fs-id1169736685653} type= 
PROBLEM:
For each of the following series, determine which convergence test is the best to use and explain why. Then determine if the series converges or diverges. If the series is an alternating series, determine whether it converges absolutely, converges conditionally, or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{2}+2n}{{n}^{3}+3{n}^{2}+1}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{(−1)}^{n+1}(3n+1)}{n\text{!}}$
c. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{e}^{n}}{{n}^{3}}$
d. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{3}^{n}}{{(n+1)}^{n}}$
SOLUTION:
a. Step 1. The series is not a $p-\text{series}$ or geometric series.

Step 2. The series is not alternating.

Step 3. For large values of $n,$ we approximate the series by the expression

$\frac{{n}^{2}+2n}{{n}^{3}+3{n}^{2}+1}\approx \frac{{n}^{2}}{{n}^{3}}=\frac{1}{n}.$  {eq:fs-id1169736852496}

Therefore, it seems reasonable to apply the comparison test or limit comparison test using the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}n.$ Using the limit comparison test, we see that

$\lim_{n\to \infty}\frac{({n}^{2}+2n)\text{/}({n}^{3}+3{n}^{2}+1)}{1\text{/}n}=\lim_{n\to \infty}\frac{{n}^{3}+2{n}^{2}}{{n}^{3}+3{n}^{2}+1}=1.$  {eq:fs-id1169736843074}

Since the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}n$ diverges, this series diverges as well.
b. Step 1.The series is not a familiar series.

Step 2. The series is alternating. Since we are interested in absolute convergence, consider the series

${\displaystyle \sum_{n=1}^{\infty} \frac{3n}{(n+1)\text{!}}}.$  {eq:fs-id1169736747084}

Step 3. The series is not similar to a *p*-series or geometric series.

Step 4. Since each term contains a factorial, apply the ratio test. We see that

$\lim_{n\to \infty}\frac{(3(n+1))\text{/}(n+1)\text{!}}{(3n+1)\text{/}n\text{!}}=\lim_{n\to \infty}\frac{3n+3}{(n+1)\text{!}}\cdot \frac{n\text{!}}{3n+1}=\lim_{n\to \infty}\frac{3n+3}{(n+1)(3n+1)}=0.$  {eq:fs-id1169736643942}

Therefore, this series converges, and we conclude that the original series converges absolutely, and thus converges.
c. Step 1. The series is not a familiar series.

Step 2. It is not an alternating series.

Step 3. There is no obvious series with which to compare this series.

Step 4. There is no factorial. There is a power, but it is not an ideal situation for the root test.

Step 5. To apply the divergence test, we calculate that

$\lim_{n\to \infty}\frac{{e}^{n}}{{n}^{3}}=\infty .$  {eq:fs-id1169736843793}

Therefore, by the divergence test, the series diverges.
d. Step 1. This series is not a familiar series.

Step 2. It is not an alternating series.

Step 3. There is no obvious series with which to compare this series.

Step 4. Since each term is a power of $n,$ we can apply the root test. Since

$\lim_{n\to \infty}\sqrt[n]{{(\frac{3}{n+1})}^{n}}=\lim_{n\to \infty}\frac{3}{n+1}=0,$  {eq:fs-id1169739077365}

by the root test, we conclude that the series converges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739077452} type= 
PROBLEM:
For the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{2}^{n}}{{3}^{n}+n},$ determine which convergence test is the best to use and explain why.
SOLUTION:
The comparison test because ${2}^{n}\text{/}({3}^{n}+n)<{2}^{n}\text{/}{3}^{n}$ for all positive integers $n.$ The limit comparison test could also be used.
COMMENTARY: Hint
The series is similar to the geometric series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{2}{3})}^{n}.$
:::
:::
In [ref:fs-id1169739027151], we summarize the convergence tests and when each can be applied. Note that while the comparison test, limit comparison test, and integral test require the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ to have nonnegative terms, if ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ has negative terms, these tests can be applied to ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|$ to test for absolute convergence.

> TABLE {tab:fs-id1169739027151} cols=3 irregular
> title: Summary of Convergence Tests
> summary: This is a table with three columns and many rows describing the different series or test, conclusions, and comments in each column, respectively. The first test/series is the divergence test: for any series written as the sum from n = 1 to infinity of a_n, evaluate the limit as n goes to infinity of a + n. If the limit is 0, the test is inconclusive. If the limit is not equal to 0, the series diverges. Note – this test cannot prove convergence of a series. The second test/series is the geometric series: the sum from n = 1 to infinity of a r^(n - 1). If the absolute value of r is less than 1, the series converges to a/(1 - r). If the absolute value of r is greater than or equal to 1, the series diverges. Note – any geometric series can be reindexed to be written in the form a + a r + a r^2 + …, where a is the initial term and r is the ratio. The third test/series is the p-series: the sum from n = 1 to infinity of 1/n^p. If p is greater than 1, the series converges. If p is less than or equal to 1, the series diverges. Note — for p = 1, we have the harmonic series: the sum from n = 1 to infinity of 1/n. The fourth test/series is the comparison test: for the sum from n = 1 to infinity of a_n with nonnegative terms, compare with a known series – the sum from n = 1 to infinity of b_n. If a_n is less than or equal to b_n for all n greater than or equal to N and the sum from n = 1 to infinity of b_n converges, then the sum from n = 1 to infinity of a_n converges. If a_n is greater than or equal to b_n for all n greater than or equal to N and the sum from n = 1 to infinity of b_n diverges, then the sum from n = 1 to infinity a_n diverges. Note — this is typically used for a series similar to a geometric or p-series. It can sometimes be difficult to find an appropriate series. The fifth test/series is the limit comparison test: for the sum from n = 1 to infinity of a_n with positive terms, compare with a series – the sum from n = 1 to infinity of b_n by evaluating L = the limit as n goes to infinity of a_n / b_n. If L is a real number and L does not equal zero, then the sum from n=1 to infinity of a_n and the sum from n = 1 to infinity of b_n both converge or both diverge. If L = 0 and the sum from n = 1 to infinity of b_n converges, then the sum from n = 1 to infinity of a_n converges. If L = infinity and the sum from n = 1 to infinity of b_n diverges, then the sum from n = 1 to infinity of a_n diverges. Note — this is typically used for a series similar to a geometric of p-series. It is often easier to apply than the comparison test. The sixth test/series is the integral test: if there exists a positive, continuous, decreasing function f such that a_n = f(n) for all n greater than or equal to N, evaluate the integral from N to infinity of f(x) d x. Both the integral from N to infinity of f(x)f x and the sum from n = 1 to infinity will converge or diverge. Note — this is limited to those series for which the corresponding function f can be easily integrated. The seventh test/series is the alternating series: the sum from n = 1 to infinity of (-1)^(n + 1) * b_n or the sum from n = 1 to infinity of (-1)^n * b_n. If b_(n + 1) is less than or equal to b_n for all n greater than or equal to 1 and b_n goes to zero, then the series converges. Note — this only applies to alternating series. The eighth test/series is the ratio test: for any series – the sum from n = 1 to infinity of a_n – with nonzero terms, let p equal the limit as n goes to infinity of the absolute value of a_(n + 1)/a_n. If 0 is less than or equal to p which is less than 1, the series converges absolutely. If p is greater than 1 or p equals infinity, then the series diverges. If p equals 1, the test is inconclusive. Note — this is often used for series involving factorials or exponentials. The ninth test/series is the root test: for any series – the sum from n = 1 to infinity of a_n – let p equal the limit as n goes to infinity of the n-th root of the absolute value of a_n. If 0 is less than or equal to p which is less than 1, the series converges absolutely. If p is less than 1 or p equals infinity the series diverges. If p equals 1, the test is inconclusive. Note — often used for series where the absolute value of a_n = b_n to the power of n.

| Series or Test | Conclusions | Comments |
| {rows=2} **Divergence Test**<br> For any series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n},$ evaluate $\lim_{n\to \infty}{a}_{n}.$ | If $\lim_{n\to \infty}{a}_{n}=0,$ the test is inconclusive. | {rows=2} This test cannot prove convergence of a series. |
| If $\lim_{n\to \infty}{a}_{n}≠0,$ the series diverges. |
| {rows=2} **Geometric Series**<br> $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}$ | If $|r|<1,$ the series converges to<br> $a\text{/}(1-r).$ | {rows=2} Any geometric series can be reindexed to be written in the form $a+ar+a{r}^{2}+\text{⋯},$ where $a$ is the initial term and $r$ is the ratio. |
| If $|r|\ge 1,$ the series diverges. |
| {rows=2} ***p*-Series**<br> $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{p}}$ | If $p>1,$ the series converges. | {rows=2} For $p=1,$ we have the harmonic series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}n.$ |
| If $p\le 1,$ the series diverges. |
| {rows=2} **Comparison Test**<br> For $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with nonnegative terms, compare with a known series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}.$ | If ${a}_{n}\le {b}_{n}$ for all $n\ge N$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges. | {rows=2} Typically used for a series similar to a geometric or $p$-series. It can sometimes be difficult to find an appropriate series. |
| If ${a}_{n}\ge {b}_{n}$ for all $n\ge N$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges. |
| {rows=3} **Limit Comparison Test**<br> For $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with positive terms, compare with a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ by evaluating<br> $L=\lim_{n\to \infty}\frac{{a}_{n}}{{b}_{n}}.$ | If $L$ is a real number and $L≠0,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ both converge or both diverge. | {rows=3} Typically used for a series similar to a geometric or $p$-series. Often easier to apply than the comparison test. |
| If $L=0$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges. |
| If $L=\infty$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges. |
| **Integral Test**<br> If there exists a positive, continuous, decreasing function $f$ such that ${a}_{n}=f(n)$ for all $n\ge N,$ evaluate ${\displaystyle \int_{N}^{\infty}f(x)dx}.$ | ${\displaystyle \int_{N}^{\infty}f(x)dx}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ both converge or both diverge. | Limited to those series for which the corresponding function $f$ can be easily integrated. |
| **Alternating Series**<br> $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}\;\text{or}\;\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}{b}_{n}$ | If ${b}_{n+1}\le {b}_{n}$ for all $n\ge 1$ and ${b}_{n}\to 0,$ then the series converges. | Only applies to alternating series. |
| {rows=3} **Ratio Test**<br> For any series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with nonzero terms, let<br> $ρ=\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|.$ | If $0\le ρ<1,$ the series converges absolutely. | {rows=3} Often used for series involving factorials or exponentials. |
| If $ρ>1\;\text{or}\;ρ=\infty ,$ the series diverges. |
| If $ρ=1,$ the test is inconclusive. |
| {rows=3} **Root Test**<br> For any series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n},$ let<br> $ρ=\lim_{n\to \infty}\sqrt[n]{|{a}_{n}|}.$ | If $0\le ρ<1,$ the series converges absolutely. | {rows=3} Often used for series where $|{a}_{n}|={b}_{n}^{n}.$ |
| If $ρ>1\;\text{or}\;ρ=\infty ,$ the series diverges. |
| If $ρ=1,$ the test is inconclusive. |

:::note [project] Series Converging to $\pi$ and $1\text{/}\pi$
Dozens of series exist that converge to $\pi$ or an algebraic expression containing $\pi .$ Here we look at several examples and compare their rates of convergence. By rate of convergence, we mean the number of terms necessary for a partial sum to be within a certain amount of the actual value. The series representations of $\pi$ in the first two examples can be explained using Maclaurin series, which are discussed in the next chapter. The third example relies on material beyond the scope of this text.
1. The series

$\pi =4\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{(−1)}^{n+1}}{2n-1}=4-\frac{4}{3}+\frac{4}{5}-\frac{4}{7}+\frac{4}{9}-\text{⋯}$  {eq:fs-id1169736707603}

was discovered by Gregory and Leibniz in the late $1600\text{s}\text{.}$ This result follows from the Maclaurin series for $f(x)={\text{tan}}^{−1}x.$ We will discuss this series in the next chapter.

a. Prove that this series converges.
b. Evaluate the partial sums ${S}_{n}$ for $n=10,20,50,100.$
c. Use the remainder estimate for alternating series to get a bound on the error ${R}_{n}.$
d. What is the smallest value of $N$ that guarantees $|{R}_{N}|<0.01\text{?}$ Evaluate ${S}_{N}.$

2. The series

$\begin{array}{rl}\pi & =6\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}\frac{(2n)\text{!}}{{2}^{4n+1}{(n\text{!})}^{2}(2n+1)} \\ & =6(\frac{1}{2}+\frac{1}{2\cdot 3}{(\frac{1}{2})}^{3}+\frac{1\cdot 3}{2\cdot 4\cdot 5}\cdot {(\frac{1}{2})}^{5}+\frac{1\cdot 3\cdot 5}{2\cdot 4\cdot 6\cdot 7}{(\frac{1}{2})}^{7}+\text{⋯})\end{array}$  {eq:fs-id1169739171920}

has been attributed to Newton in the late $1600\text{s}\text{.}$ The proof of this result uses the Maclaurin series for $f(x)={\text{sin}}^{−1}x.$

a. Prove that the series converges.
b. Evaluate the partial sums ${S}_{n}$ for $n=5,10,20.$
c. Compare ${S}_{n}$ to $\pi$ for $n=5,10,20$ and discuss the number of correct decimal places.

3. The series

$\frac{1}{\pi}=\frac{\sqrt{8}}{9801}\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}\frac{(4n)\text{!}(1103+26390n)}{{(n\text{!})}^{4}{396}^{4n}}$  {eq:fs-id1169738920677}

was discovered by {index:Ramanujan} in the early $1900\text{s}\text{.}$ William Gosper, Jr., used this series to calculate $\pi$ to an accuracy of more than $17$ million digits in the $\text{mid-}1980\text{s}\text{.}$ At the time, that was a world record. Since that time, this series and others by Ramanujan have led mathematicians to find many other series representations for $\pi$ and $1\text{/}\pi .$

a. Prove that this series converges.
b. Evaluate the first term in this series. Compare this number with the value of $\pi$ from a calculating utility. To how many decimal places do these two numbers agree? What if we add the first two terms in the series?
c. Investigate the life of Srinivasa Ramanujan $(1887\text{–}1920)$ and write a brief summary. Ramanujan is one of the most fascinating stories in the history of mathematics. He was basically self-taught, with no formal training in mathematics, yet he contributed in highly original ways to many advanced areas of mathematics.

:::

## Key Concepts {section:key-concepts}
- For the ratio test, we consider

$ρ=\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|.$  {eq:fs-id1169739252749}

If $ρ<1,$ the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges absolutely. If $ρ>1,$ the series diverges. If $ρ=1,$ the test does not provide any information. This test is useful for series whose terms involve factorials.
- For the root test, we consider

$ρ=\lim_{n\to \infty}\sqrt[n]{|{a}_{n}|}.$  {eq:fs-id1169739206929}

If $ρ<1,$ the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges absolutely. If $ρ>1,$ the series diverges. If $ρ=1,$ the test does not provide any information. The root test is useful for series whose terms involve powers.
- For a series that is similar to a geometric series or $p-\text{series,}$ consider one of the comparison tests.

##  {section:section-exercises}
Use the ratio test to determine whether $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges, where ${a}_{n}$ is given in the following problems. State if the ratio test is inconclusive.

:::exercise {fs-id1169736790226} type= 
PROBLEM:
${a}_{n}=1\text{/}n\text{!}$
SOLUTION:
${a}_{n+1}\text{/}{a}_{n}\to 0.$ Converges.
:::

:::exercise {fs-id1169736790287} type= 
PROBLEM:
${a}_{n}={10}^{n}\text{/}n\text{!}$
:::

:::exercise {fs-id1169736694683} type= 
PROBLEM:
${a}_{n}={n}^{2}\text{/}{2}^{n}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}=\frac{1}{2}{(\frac{n+1}{n})}^{2}\to 1\text{/}2<1.$ Converges.
:::

:::exercise {fs-id1169736634939} type= 
PROBLEM:
${a}_{n}={n}^{10}\text{/}{2}^{n}$
:::

:::exercise {fs-id1169736635046} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(n\text{!})}^{3}}{(3n)\text{!}}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}\to 1\text{/}27<1.$ Converges.
:::

:::exercise {fs-id1169739133220} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{3n}{(n\text{!})}^{3}}{(3n)\text{!}}}$
:::

:::exercise {fs-id1169736726552} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(2n)\text{!}}{{n}^{2n}}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}\to 4\text{/}{e}^{2}<1.$ Converges.
:::

:::exercise {fs-id1169736767071} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(2n)\text{!}}{{(2n)}^{n}}}$
:::

:::exercise {fs-id1169736767170} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n\text{!}}{{(n\text{/}e)}^{n}}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}\to 1.$ Ratio test is inconclusive.
:::

:::exercise {fs-id1169739335670} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(2n)\text{!}}{{(n\text{/}e)}^{2n}}}$
:::

:::exercise {fs-id1169739335773} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{({2}^{n}n\text{!})}^{2}}{{(2n)}^{2n}}}$
SOLUTION:
$\frac{{a}_{n}}{{a}_{n+1}}\to 1\text{/}{e}^{2}.$ Converges.
:::
Use the root test to determine whether $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges, where ${a}_{n}$ is as follows.

:::exercise {fs-id1169738993856} type= 
PROBLEM:
${a}_{k}={(\frac{k-1}{2k+3})}^{k}$
:::

:::exercise {fs-id1169739213893} type= 
PROBLEM:
${a}_{k}={(\frac{2{k}^{2}-1}{{k}^{2}+3})}^{k}$
SOLUTION:
${({a}_{k})}^{1\text{/}k}\to 2>1.$ Diverges.
:::

:::exercise {fs-id1169739213991} type= 
PROBLEM:
${a}_{n}=\frac{{(\text{ln}\;n)}^{2n}}{{n}^{n}}$
:::

:::exercise {fs-id1169736790041} type= 
PROBLEM:
${a}_{n}=n\text{/}{2}^{n}$
SOLUTION:
${({a}_{n})}^{1\text{/}n}\to 1\text{/}2<1.$ Converges.
:::

:::exercise {fs-id1169739110665} type= 
PROBLEM:
${a}_{n}=n\text{/}{e}^{n}$
:::

:::exercise {fs-id1169739110741} type= 
PROBLEM:
${a}_{k}=\frac{{k}^{e}}{{e}^{k}}$
SOLUTION:
${({a}_{k})}^{1\text{/}k}\to 1\text{/}e<1.$ Converges.
:::

:::exercise {fs-id1169739110820} type= 
PROBLEM:
${a}_{k}=\frac{{\pi}^{k}}{{k}^{\pi}}$
:::

:::exercise {fs-id1169739195739} type= 
PROBLEM:
${a}_{n}={(\frac{1}{e}+\frac{1}{n})}^{n}$
SOLUTION:
${a}_{n}^{1\text{/}n}=\frac{1}{e}+\frac{1}{n}\to \frac{1}{e}<1.$ Converges.
:::

:::exercise {fs-id1169739195833} type= 
PROBLEM:
${a}_{k}=\frac{1}{{(1+\text{ln}\;k)}^{k}}$
:::
For this exercise, let n start at 2.

:::exercise {fs-id1169739341419} type= 
PROBLEM:
${a}_{n}=\frac{{(\text{ln}(1+\text{ln}\;n))}^{n}}{{(\text{ln}\;n)}^{n}}$
SOLUTION:
${a}_{n}^{1\text{/}n}=\frac{(\text{ln}(1+\text{ln}\;n))}{(\text{ln}\;n)}\to 0$ by L’Hôpital’s rule. Converges.
:::
In the following exercises, use either the ratio test or the root test as appropriate to determine whether the series ${\displaystyle \sum_{k=1}^{\infty} {a}_{k}}$ with given terms ${a}_{k}$ converges, or state if the test is inconclusive.

:::exercise {fs-id1169736708187} type= 
PROBLEM:
${a}_{k}=\frac{k\text{!}}{1\cdot 3\cdot 5\text{⋯}(2k-1)}$
:::

:::exercise {fs-id1169736842898} type= 
PROBLEM:
${a}_{k}=\frac{2\cdot 4\cdot 6\text{⋯}2k}{(2k)\text{!}}$
SOLUTION:
$\frac{{a}_{k+1}}{{a}_{k}}=\frac{1}{2k+1}\to 0.$ Converges by ratio test.
:::

:::exercise {fs-id1169736843002} type= 
PROBLEM:
${a}_{k}=\frac{1\cdot 4\cdot 7\text{⋯}(3k-2)}{{3}^{k}k\text{!}}$
:::

:::exercise {fs-id1169736705902} type= 
PROBLEM:
${a}_{n}={(1-\frac{1}{n})}^{{n}^{2}}$
SOLUTION:
${({a}_{n})}^{1\text{/}n}\to 1\text{/}e.$ Converges by root test.
:::

:::exercise {fs-id1169736705989} type= 
PROBLEM:
${a}_{k}={(\frac{1}{k+1}+\frac{1}{k+2}+\text{⋯}+\frac{1}{2k})}^{k}$ (*Hint:* Compare ${a}_{k}^{1\text{/}k}$ to ${\displaystyle \int_{k}^{2k}\frac{dt}{t}}.)$
:::

:::exercise {fs-id1169736703046} type= 
PROBLEM:
${a}_{k}={(\frac{1}{k+1}+\frac{1}{k+2}+\text{⋯}+\frac{1}{3k})}^{k}$
SOLUTION:
${a}_{k}^{1\text{/}k}\to \text{ln}(3)>1.$ Diverges by root test.
:::

:::exercise {fs-id1169739202356} type= 
PROBLEM:
${a}_{n}={({n}^{1\text{/}n}-1)}^{n}$
:::
Use the ratio test to determine whether ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges, or state if the ratio test is inconclusive.

:::exercise {fs-id1169739344170} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{3}^{{n}^{2}}}{{2}^{{n}^{3}}}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}=$ $\frac{{3}^{2n+1}}{{2}^{3{n}^{2}+3n+1}}\to 0.$ Converge.
:::

:::exercise {fs-id1169739344299} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{{n}^{2}}}{{n}^{n}n\text{!}}}$
:::
Use the root and limit comparison tests to determine whether ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.

:::exercise {fs-id1169736857058} type= 
PROBLEM:
${a}_{n}=1\text{/}{x}_{n}^{n}$ where ${x}_{n+1}=\frac{1}{2}{x}_{n}+\frac{1}{{x}_{n}},$ ${x}_{1}=1$ (*Hint:* Find limit of $\{{x}_{n}\}.)$
SOLUTION:
Converges by root test and limit comparison test since ${x}_{n}\to \sqrt{2}.$
:::
In the following exercises, use an appropriate test to determine whether the series converges.

:::exercise {fs-id1169739344739} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(n+1)}{{n}^{3}+{n}^{2}+n+1}}$
:::

:::exercise {fs-id1169739236292} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n+1}(n+1)}{{n}^{3}+3{n}^{2}+3n+1}}$
SOLUTION:
Converges absolutely by limit comparison with $p-\text{series,}$ $p=2.$
:::

:::exercise {fs-id1169739236405} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(n+1)}^{2}}{{n}^{3}+{(1.1)}^{n}}}$
:::

:::exercise {fs-id1169736627530} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(n-1)}^{n}}{{(n+1)}^{n}}}$
SOLUTION:
$\lim_{n\to \infty}{a}_{n}=1\text{/}{e}^{2}≠0.$ Series diverges.
:::

:::exercise {fs-id1169736592251} type= 
PROBLEM:
${a}_{n}={(1+\frac{1}{{n}^{2}})}^{n}$ (*Hint:* ${(1+\frac{1}{{n}^{2}})}^{{n}^{2}}\approx e.)$
:::

:::exercise {fs-id1169736592374} type= 
PROBLEM:
${a}_{k}=1\text{/}{2}^{{\text{sin}}^{2}k}$
SOLUTION:
Terms do not tend to zero: ${a}_{k}\ge 1\text{/}2,$ since ${\text{sin}}^{2}x\le 1.$
:::

:::exercise {fs-id1169736728788} type= 
PROBLEM:
${a}_{k}={2}^{\text{−}\text{sin}(1\text{/}k)}$
:::

:::exercise {fs-id1169736728883} type= 
PROBLEM:
${a}_{n}=1\text{/}\left(\begin{array}{l}n+2 \\ n\end{array}\right)$ where $\left(\begin{array}{l}n \\ k\end{array}\right)=\frac{n\text{!}}{k\text{!}(n-k)\text{!}}$
SOLUTION:
${a}_{n}=\frac{2}{(n+1)(n+2)},$ which converges by comparison with $p-\text{series}$ for $p=2.$
:::

:::exercise {fs-id1169736720771} type= 
PROBLEM:
${a}_{k}=1\text{/}\left(\begin{array}{l}2k \\ k\end{array}\right)$
:::

:::exercise {fs-id1169736659407} type= 
PROBLEM:
${a}_{k}={2}^{k}\text{/}\left(\begin{array}{l}3k \\ k\end{array}\right)$
SOLUTION:
${a}_{k}=\frac{{2}^{k}1\cdot 2\text{⋯}k}{(2k+1)(2k+2)\text{⋯}3k}\le {(2\text{/}3)}^{k}$ converges by comparison with geometric series.
:::

:::exercise {fs-id1169736725468} type= 
PROBLEM:
${a}_{k}={(\frac{k}{k+\text{ln}\;k})}^{k}$ (*Hint:* ${a}_{k}={(1+\frac{\text{ln}\;k}{k})}^{\text{−}(k\text{/}\text{ln}\;k)\text{ln}\;k}\approx {e}^{\text{−}\text{ln}\;k}.)$
:::

:::exercise {fs-id1169736791905} type= 
PROBLEM:
${a}_{k}={(\frac{k}{k+\text{ln}\;k})}^{2k}$ (*Hint:* ${a}_{k}={(1+\frac{\text{ln}\;k}{k})}^{\text{−}(k\text{/}\text{ln}\;k)\;\text{ln}\;{k}^{2}}.)$
SOLUTION:
${a}_{k}\approx {e}^{\text{−}\text{ln}\;{k}^{2}}=1\text{/}{k}^{2}.$ Series converges by limit comparison with $p-\text{series,}$ $p=2.$
:::
The following series converge by the ratio test. Use summation by parts, ${\displaystyle \sum_{k=1}^{n} {a}_{k}}({b}_{k+1}-{b}_{k})=[{a}_{n+1}{b}_{n+1}-{a}_{1}{b}_{1}]-{\displaystyle \sum_{k=1}^{n} {b}_{k+1}}({a}_{k+1}-{a}_{k}),$ to find the sum of the given series.

:::exercise {fs-id1169739095193} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{k}{{2}^{k}}}$ (*Hint:* Take ${a}_{k}=k$ and ${b}_{k}={2}^{1-k}.)$
:::

:::exercise {fs-id1169736736662} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{k}{{c}^{k}}},$ where $c>1$ (*Hint:* Take ${a}_{k}=k$ and ${b}_{k}={c}^{1-k}\text{/}(c-1).)$
SOLUTION:
If ${b}_{k}={c}^{1-k}\text{/}(c-1)$ and ${a}_{k}=k,$ then ${b}_{k+1}-{b}_{k}=\text{−}{c}^{\text{−}k}$ and ${\displaystyle \sum_{n=1}^{\infty} \frac{k}{{c}^{k}}}={a}_{1}{b}_{1}+\frac{1}{c-1}{\displaystyle \sum_{k=1}^{\infty} {c}^{\text{−}k}}=\frac{c}{{(c-1)}^{2}}.$
:::

:::exercise {fs-id1169739369179} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{n}^{2}}{{2}^{n}}}$
:::

:::exercise {fs-id1169736604959} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(n+1)}^{2}}{{2}^{n}}}$
SOLUTION:
$6+4+1=11$
:::
The *k*th term of each of the following series has a factor ${x}^{k}.$ Find the range of $x$ for which the ratio test implies that the series converges.

:::exercise {fs-id1169736605060} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{k}}{{k}^{2}}}$
:::

:::exercise {fs-id1169736605120} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{2k}}{{k}^{2}}}$
SOLUTION:
$|x|\le 1$
:::

:::exercise {fs-id1169739094744} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{2k}}{{3}^{k}}}$
:::

:::exercise {fs-id1169739094808} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{k}}{k\text{!}}}$
SOLUTION:
$|x|<\infty$
:::

:::exercise {fs-id1169739094867} type= 
PROBLEM:
Does there exist a number $p$ such that ${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{n}}{{n}^{p}}}$ converges?
:::

:::exercise {fs-id1169736644108} type= 
PROBLEM:
Let $0<r<1.$ For which real numbers $p$ does ${\displaystyle \sum_{n=1}^{\infty} {n}^{p}}{r}^{n}$ converge?
SOLUTION:
All real numbers $p$ by the ratio test.
:::

:::exercise {fs-id1169736644178} type= 
PROBLEM:
Suppose that $\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|=p.$ For which values of $p$ must ${\displaystyle \sum_{n=1}^{\infty} {2}^{n}}{a}_{n}$ converge?
:::

:::exercise {fs-id1169736662279} type= 
PROBLEM:
Suppose that $\lim_{n\to \infty}|\frac{{a}_{n+1}}{{a}_{n}}|=p.$ For which values of $r>0$ is ${\displaystyle \sum_{n=1}^{\infty} {r}^{n}}{a}_{n}$ guaranteed to converge?
SOLUTION:
$r<1\text{/}p$
:::

:::exercise {fs-id1169736662394} type= 
PROBLEM:
Suppose that $|\frac{{a}_{n+1}}{{a}_{n}}|\le {(n+1)}^{p}$ for all $n=1,2\text{,…}$ where $p$ is a fixed real number. For which values of $p$ is ${\displaystyle \sum_{n=1}^{\infty} n}\text{!}\;{a}_{n}$ guaranteed to converge?
:::

:::exercise {fs-id1169739279096} type= 
PROBLEM:
For which values of $r>0,$ if any, does ${\displaystyle \sum_{n=1}^{\infty} {r}^{\sqrt{n}}}$ converge? (*Hint:* ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}={\displaystyle \sum_{k=1}^{\infty} {\displaystyle \sum_{n={k}^{2}}^{{(k+1)}^{2}-1} {a}_{n}}}.)$
SOLUTION:
$0<r<1.$ Note that the ratio and root tests are inconclusive. Using the hint, there are $2k$ terms ${r}^{\sqrt{n}}$ for ${k}^{2}\le n<{(k+1)}^{2},$ and for $r<1$ each term is at least ${r}^{k}.$ Thus, ${\displaystyle \sum_{n=1}^{\infty} {r}^{\sqrt{n}}}={\displaystyle \sum_{k=1}^{\infty} {\displaystyle \sum_{n={k}^{2}}^{{(k+1)}^{2}-1} {r}^{\sqrt{n}}}}$ $\ge {\displaystyle \sum_{k=1}^{\infty} 2}k{r}^{k},$ which converges by the ratio test for $r<1.$ For $r\ge 1$ the series diverges by the divergence test.
:::

:::exercise {fs-id1169738894848} type= 
PROBLEM:
Suppose that $|\frac{{a}_{n+2}}{{a}_{n}}|\le r<1$ for all $n.$ Can you conclude that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges?
:::

:::exercise {fs-id1169736851103} type= 
PROBLEM:
Let ${a}_{n}={2}^{\text{−}[n\text{/}2]}$ where $[x]$ is the greatest integer less than or equal to $x.$ Determine whether ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges and justify your answer.
SOLUTION:
One has ${a}_{1}=1,$ ${a}_{2}={a}_{3}=1\text{/}2\text{,…}\;{a}_{2n}={a}_{2n+1}=1\text{/}{2}^{n}.$ The ratio test does not apply because ${a}_{n+1}\text{/}{a}_{n}=1$ if $n$ is even. However, ${a}_{n+2}\text{/}{a}_{n}=1\text{/}2,$ so the series converges according to the previous exercise. Of course, the series is just a duplicated geometric series.
:::
The following *advanced* exercises use a generalized ratio test to determine convergence of some series that arise in particular applications when tests in this chapter, including the ratio and root test, are not powerful enough to determine their convergence. The test states that if $\lim_{n\to \infty}\frac{{a}_{2n}}{{a}_{n}}<1\text{/}2,$ then ${\displaystyle \sum {a}_{n}}$ converges, while if $\lim_{n\to \infty}\frac{{a}_{2n+1}}{{a}_{n}}>1\text{/}2,$ then ${\displaystyle \sum {a}_{n}}$ diverges.

:::exercise {fs-id1169739255529} type= 
PROBLEM:
Let ${a}_{n}=\frac{1}{4}\;\frac{3}{6}\;\frac{5}{8}\text{⋯}\frac{2n-1}{2n+2}=\frac{1\cdot 3\cdot 5⋯(2n-1)}{{2}^{n}(n+1)\text{!}}.$ Explain why the ratio test cannot determine convergence of ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$ Use the fact that $1-1\text{/}(4k)$ is increasing $k$ to estimate $\lim_{n\to \infty}\frac{{a}_{2n}}{{a}_{n}}.$
:::

:::exercise {fs-id1169736776280} type= 
PROBLEM:
Let ${a}_{n}=\frac{1}{1+x}\;\frac{2}{2+x}\text{⋯}\frac{n}{n+x}\;\frac{1}{n}=\frac{(n-1)\text{!}}{(1+x)(2+x)\text{⋯}(n+x)}.$ Show that ${a}_{2n}\text{/}{a}_{n}\le {e}^{\text{−}x\text{/}2}\text{/}2.$ For which $x>0$ does the generalized ratio test imply convergence of ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}\text{?}$ (*Hint:* Write $2{a}_{2n}\text{/}{a}_{n}$ as a product of $n$ factors each smaller than $1\text{/}(1+x\text{/}(2n)).)$
SOLUTION:
${a}_{2n}\text{/}{a}_{n}=\frac{1}{2}\cdot \frac{n+1}{n+1+x}\;\frac{n+2}{n+2+x}\text{⋯}\frac{2n}{2n+x}.$ The inverse of the $k\text{th}$ factor is $(n+k+x)\text{/}(n+k)>1+x\text{/}(2n)$ so the product is less than ${(1+x\text{/}(2n))}^{\text{−}n}\approx {e}^{\text{−}x\text{/}2}.$ Thus for $x>0,$ $\frac{{a}_{2n}}{{a}_{n}}\le \frac{1}{2}{e}^{\text{−}x\text{/}2}.$ The series converges for $x>0.$
:::

:::exercise {fs-id1169736768824} type= 
PROBLEM:
Let ${a}_{n}=\frac{{n}^{\text{ln}\;n}}{{(\text{ln}\;n)}^{n}}.$ Show that $\frac{{a}_{2n}}{{a}_{n}}\to 0$ as $n\to \infty .$
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* Justify your answer with a proof or a counterexample.

:::exercise {fs-id1169739352667} type= 
PROBLEM:
If $\lim_{n\to \infty}{a}_{n}=0,$ then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.
SOLUTION:
false
:::

:::exercise {fs-id1169739260400} type= 
PROBLEM:
If $\lim_{n\to \infty}{a}_{n}≠0,$ then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges.
:::

:::exercise {fs-id1169739260470} type= 
PROBLEM:
If ${\displaystyle \sum_{n=1}^{\infty} |{a}_{n}|}$ converges, then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.
SOLUTION:
true
:::

:::exercise {fs-id1169739260544} type= 
PROBLEM:
If ${\displaystyle \sum_{n=1}^{\infty} {2}^{n}{a}_{n}}$ converges, then ${\displaystyle \sum_{n=1}^{\infty} {(−2)}^{n}{a}_{n}}$ converges.
:::
Is the sequence bounded, monotone, and convergent or divergent? If it is convergent, find the limit.

:::exercise {fs-id1169739265235} type= 
PROBLEM:
${a}_{n}=\frac{3+{n}^{2}}{1-n}$
SOLUTION:
unbounded, not monotone, divergent
:::

:::exercise {fs-id1169739265280} type= 
PROBLEM:
${a}_{n}=\text{ln}(\frac{1}{n})$
:::

:::exercise {fs-id1169739265320} type= 
PROBLEM:
${a}_{n}=\frac{\text{ln}(n+1)}{\sqrt{n+1}}$
SOLUTION:
bounded, monotone, convergent, $0$
:::

:::exercise {fs-id1169736590095} type= 
PROBLEM:
${a}_{n}=\frac{{2}^{n+1}}{{5}^{n}}$
:::

:::exercise {fs-id1169736590143} type= 
PROBLEM:
${a}_{n}=\frac{\text{ln}(\text{cos}\;n)}{n}$
SOLUTION:
unbounded, not monotone, divergent
:::
Is the series convergent or divergent?

:::exercise {fs-id1169736590189} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{2}+5n+4}}$
:::

:::exercise {fs-id1169736590242} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \text{ln}(\frac{n+1}{n})}$
SOLUTION:
diverges
:::

:::exercise {fs-id1169739249672} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{n}}{{n}^{4}}}$
:::

:::exercise {fs-id1169739249720} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{e}^{n}}{n\text{!}}}$
SOLUTION:
converges
:::

:::exercise {fs-id1169739249766} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {n}^{\text{−}(n+1\text{/}n)}}$
:::
Is the series convergent or divergent? If convergent, is it absolutely convergent?

:::exercise {fs-id1169739249827} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}}{\sqrt{n}}}$
SOLUTION:
converges, but not absolutely
:::

:::exercise {fs-id1169736841685} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}n\text{!}}{{3}^{n}}}$
:::

:::exercise {fs-id1169736841745} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}n\text{!}}{{n}^{n}}}$
SOLUTION:
converges absolutely
:::

:::exercise {fs-id1169736841804} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \text{sin}(\frac{n\pi}{2})}$
:::

:::exercise {fs-id1169736841855} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \text{cos}(\pi n){e}^{\text{−}n}}$
SOLUTION:
converges absolutely
:::
Evaluate

:::exercise {fs-id1169736854679} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{n+4}}{{7}^{n}}}$
:::

:::exercise {fs-id1169736854740} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{(n+1)(n+2)}}$
SOLUTION:
$\frac{1}{2}$
:::

:::exercise {fs-id1169736854814} type= 
PROBLEM:
A legend from India tells that a mathematician invented chess for a king. The king enjoyed the game so much he allowed the mathematician to demand any payment. The mathematician asked for one grain of rice for the first square on the chessboard, two grains of rice for the second square on the chessboard, four grains of rice for the third square on the chessboard, and so on. Find an exact expression for the total payment (in grains of rice) requested by the mathematician. Assuming there are $30,000$ grains of rice in $1$ pound, and $2000$ pounds in $1$ ton, how many tons of rice did the mathematician attempt to receive?
:::
The following problems consider a simple population model of the housefly, which can be exhibited by the recursive formula ${x}_{n+1}=b{x}_{n},$ where ${x}_{n}$ is the population of houseflies at generation $n,$ and $b$ is the average number of offspring per housefly who survive to the next generation. Assume a starting population ${x}_{0}.$

:::exercise {fs-id1169736840855} type= 
PROBLEM:
Find $\lim_{n\to \infty}{x}_{n}$ if $b>1,$ $b<1,$ and $b=1.$
SOLUTION:
$\infty ,$ $0,$ ${x}_{0}$
:::

:::exercise {fs-id1169736840945} type= 
PROBLEM:
Find an expression for ${S}_{n}={\displaystyle \sum_{i=0}^{n} {x}_{i}}$ in terms of $b$ and ${x}_{0}.$ What does it physically represent?
:::

:::exercise {fs-id1169736790422} type= 
PROBLEM:
If $b=\frac{3}{4}$ and ${x}_{0}=100,$ find ${S}_{10}$ and $\lim_{n\to \infty}{S}_{n}$
SOLUTION:
${S}_{10}\approx 383,$ $\lim_{n\to \infty}{S}_{n}=400$
:::

:::exercise {fs-id1169736790536} type= 
PROBLEM:
For what values of $b$ will the series converge and diverge? What does the series converge to?
:::

## Glossary
- {def} **ratio test**: for a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ with nonzero terms, let $ρ=\lim_{n\to \infty}|{a}_{n+1}\text{/}{a}_{n}|;$ if $0\le ρ<1,$ the series converges absolutely; if $ρ>1,$ the series diverges; if $ρ=1,$ the test is inconclusive
- {def} **root test**: for a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n},$ let $ρ=\lim_{n\to \infty}\sqrt[n]{|{a}_{n}|};$ if $0\le ρ<1,$ the series converges absolutely; if $ρ>1,$ the series diverges; if $ρ=1,$ the test is inconclusive

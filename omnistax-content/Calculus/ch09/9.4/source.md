# Comparison Tests

## Learning Objectives {section:learning-objectives}
- Use the comparison test to test a series for convergence.
- Use the limit comparison test to determine convergence of a series.

We have seen that the integral test allows us to determine the convergence or divergence of a series by comparing it to a related improper integral. In this section, we show how to use comparison tests to determine the convergence or divergence of a series by comparing it to a series whose convergence or divergence is known. Typically these tests are used to determine convergence of series that are similar to geometric series or *p*-series.

## Comparison Test
In the preceding two sections, we discussed two large classes of series: geometric series and *p*-series. We know exactly when these series converge and when they diverge. Here we show how to use the convergence or divergence of these series to prove convergence or divergence for other series, using a method called the {term:comparison test}.
For example, consider the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}+1}.$  {eq:fs-id1169738985514}

This series looks similar to the convergent series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}.$  {eq:fs-id1169739305240}

Since the terms in each of the series are positive, the sequence of partial sums for each series is monotone increasing. Furthermore, since

$0<\frac{1}{{n}^{2}+1}<\frac{1}{{n}^{2}}$  {eq:fs-id1169739227434}

for all positive integers $n,$ the $k\text{th}$ partial sum ${S}_{k}$ of $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}+1}$ satisfies

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}+1}<\overset{k}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}<\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}.$  {eq:fs-id1169736594931}

(See [ref:CNX_Calc_Figure_09_04_001](a) and [ref:fs-id1169738963340].) Since the series on the right converges, the sequence $\{{S}_{k}\}$ is bounded above. We conclude that $\{{S}_{k}\}$ is a monotone increasing sequence that is bounded above. Therefore, by the Monotone Convergence Theorem, $\{{S}_{k}\}$ converges, and thus

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}+1}$  {eq:fs-id1169739003848}

converges.
Similarly, consider the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n-1\text{/}2}.$  {eq:fs-id1169739015648}

This series looks similar to the divergent series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}.$  {eq:fs-id1169739225137}

The sequence of partial sums for each series is monotone increasing and

$\frac{1}{n-1\text{/}2}>\frac{1}{n}>0$  {eq:fs-id1169739182905}

for every positive integer $n.$ Therefore, the $k\text{th}$ partial sum ${S}_{k}$ of $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n-1\text{/}2}$ satisfies

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n-1\text{/}2}>\overset{k}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}.$  {eq:fs-id1169738961628}

(See [ref:CNX_Calc_Figure_09_04_001](b) and [ref:fs-id1169739044243].) Since the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}n\;$ diverges to infinity, the sequence of partial sums $\overset{k}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}n$ is unbounded. Consequently, $\{{S}_{k}\}$ is an unbounded sequence, and therefore diverges. We conclude that

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n-1\text{/}2}\;$  {eq:fs-id1169738999447}

diverges.

> FIGURE {fig:CNX_Calc_Figure_09_04_001} src=../../media/CNX_Calc_Figure_09_04_001.jpg
> alt: This shows two graphs side by side. The first shows plotted points for the partial sums for the sum of 1/n^2 and the sum 1/(n^2 + 1). Each of the partial sums for the latter is less than the corresponding partial sum for the former. The second shows plotted points for the partial sums for the sum of 1/(n - 0.5) and the sum 1/n. Each of the partial sums for the latter is less than the corresponding partial sum for the former.
> caption: (a) Each of the partial sums for the given series is less than the corresponding partial sum for the converging $p-\text{series}.$ (b) Each of the partial sums for the given series is greater than the corresponding partial sum for the diverging harmonic series.

> TABLE {tab:fs-id1169738963340} cols=9
> title: Comparing a series with a *p*-series (*p* = 2)
> summary: This is a table with three rows and nine columns. The first row contains the label “k” and the values 1 through 8. The second row contains the label “the sum from n = 1 to k of 1 / (n^2 + 1).” The values are 0.5, 0.7, 0.8, 0.8588, 0.8973, 0.9243, 0.9443, and 0.9597. The last row contains the label “the sum from n = 1 to k of 1 / n^2” and the values 1, 1.25, 1.3611, 1.4236, 1.4636, 1.4914, 1.5118, and 1.5274.

| $k$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ${\displaystyle \sum_{n=1}^{k} \frac{1}{{n}^{2}+1}}$ | $0.5$ | $0.7$ | $0.8$ | $0.8588$ | $0.8973$ | $0.9243$ | $0.9443$ | $0.9597$ |
| ${\displaystyle \sum_{n=1}^{k} \frac{1}{{n}^{2}}}$ | $1$ | $\begin{array}{l}1.25\end{array}$ | $1.3611$ | $1.4236$ | $1.4636$ | $1.4914$ | $1.5118$ | $1.5274$ |

> TABLE {tab:fs-id1169739044243} cols=9
> title: Comparing a series with the harmonic series
> summary: This shows a table with three rows and nine columns. The first row contains the label “k” and the values 1 through 8. The second row contains the label “the sum from n = 1 to k of 1 / (n - 0.5) and the values 2, 2.6667, 3.0667, 3.3524, 3.5746, 3.7564, 3.9103, and 4.0436. The last row contains the label “the sum from n = 1 to k of 1/n” and the values 1, 1.5, 1.8333, 2.0933, 2.2833, 2.45, 2.5929, and 2.7179.

| $k$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ${\displaystyle \sum_{n=1}^{k} \frac{1}{n-1\text{/}2}}$ | $2$ | $2.6667$ | $3.0667$ | $3.3524$ | $3.5746$ | $3.7564$ | $3.9103$ | $4.0436$ |
| ${\displaystyle \sum_{n=1}^{k} \frac{1}{n}}$ | $1$ | $1.5$ | $\begin{array}{l}1.8333\end{array}$ | $2.0933$ | $2.2833$ | $2.45$ | $2.5929$ | $2.7179$ |

:::note [theorem] Comparison Test
1. Suppose there exists an integer $N$ such that $0\le {a}_{n}\le {b}_{n}$ for all $n\ge N.$ If $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges.
2. Suppose there exists an integer $N$ such that ${a}_{n}\ge {b}_{n}\ge 0$ for all $n\ge N.$ If $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges.
:::

### Proof
We prove part i. The proof of part ii. is the contrapositive of part i. Let $\{{S}_{k}\}$ be the sequence of partial sums associated with $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n},$ and let $L=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}.$ Since the terms ${a}_{n}\ge 0,$

${S}_{k}={a}_{1}+{a}_{2}+\text{⋯}+{a}_{k}\le {a}_{1}+{a}_{2}+\text{⋯}+{a}_{k}+{a}_{k+1}={S}_{k+1}.$  {eq:fs-id1169739189340}

Therefore, the sequence of partial sums is increasing. Further, since ${a}_{n}\le {b}_{n}$ for all $n\ge N,$ then

${\displaystyle \sum_{n=N}^{k} {a}_{n}\le}{\displaystyle \sum_{n=N}^{k} {b}_{n}\le}{\displaystyle \sum_{n=1}^{\infty} {b}_{n}=L.}$  {eq:fs-id1169739300032}

Therefore, for all $k\ge 1,$

${S}_{k}=({a}_{1}+{a}_{2}+\text{⋯}+{a}_{N-1})+{\displaystyle \sum_{n=N}^{k} {a}_{n}\le}({a}_{1}+{a}_{2}+\text{⋯}+{a}_{N-1})+L.$  {eq:fs-id1169739222211}

Since ${a}_{1}+{a}_{2}+\text{⋯}+{a}_{N-1}$ is a finite number, we conclude that the sequence $\{{S}_{k}\}$ is bounded above. Therefore, $\{{S}_{k}\}$ is an increasing sequence that is bounded above. By the Monotone Convergence Theorem, we conclude that $\{{S}_{k}\}$ converges, and therefore the series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.
□
To use the comparison test to determine the convergence or divergence of a series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}},$ it is necessary to find a suitable series with which to compare it. Since we know the convergence properties of geometric series and *p*-series, these series are often used. If there exists an integer $N$ such that for all $n\ge N,$ each term ${a}_{n}$ is less than each corresponding term of a known convergent series, then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges. Similarly, if there exists an integer $N$ such that for all $n\ge N,$ each term ${a}_{n}$ is greater than each corresponding term of a known divergent series, then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges.

:::example {ex:fs-id1169738880258} Using the Comparison Test

:::exercise {fs-id1169738905678} type= 
PROBLEM:
For each of the following series, use the comparison test to determine whether the series converges or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{3}+3n+1}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{2}^{n}+1}$
c. $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{\text{ln}(n)}$
SOLUTION:
a. Compare to ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{3}}}$ Since ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{3}}}$ is a *p*-series with $p=3,$ it converges. Further,

$\frac{1}{{n}^{3}+3n+1}<\frac{1}{{n}^{3}}$  {eq:fs-id1169739298200}

for every positive integer $n.$ Therefore, we can conclude that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{3}+3n+1}$ converges.
b. Compare to $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n}.$ Since ${\displaystyle \sum_{n=1}^{\infty} {(\frac{1}{2})}^{n}}$ is a geometric series with $r=1\text{/}2$ and $|1\text{/}2|<1,$ it converges. Also,

$\frac{1}{{2}^{n}+1}<\frac{1}{{2}^{n}}$  {eq:fs-id1169739039859}

for every positive integer $n.$ Therefore, we see that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{2}^{n}+1}$ converges.
c. Compare to $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{n}.$ Since

$\frac{1}{\text{ln}(n)}>\frac{1}{n}$  {eq:fs-id1169739029860}

for every integer $n\ge 2$ and $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}1\text{/}n$ diverges, we have that $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{\text{ln}(n)}$ diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739096544} type= 
PROBLEM:
Use the comparison test to determine if the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{n}{{n}^{3}+n+1}$ converges or diverges.
SOLUTION:
The series converges.
COMMENTARY: Hint
Find a value $p$ such that $\frac{n}{{n}^{3}+n+1}\le \frac{1}{{n}^{p}}.$
:::
:::

## Limit Comparison Test
The comparison test works nicely if we can find a comparable series satisfying the hypothesis of the test. However, sometimes finding an appropriate series can be difficult. Consider the series

$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{n}^{2}-1}.$  {eq:fs-id1169736594105}

It is natural to compare this series with the convergent series

$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}.$  {eq:fs-id1169739017633}

However, this series does not satisfy the hypothesis necessary to use the comparison test because

$\frac{1}{{n}^{2}-1}>\frac{1}{{n}^{2}}$  {eq:fs-id1169738915172}

for all integers $n\ge 2.$ Although we could look for a different series with which to compare $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}1\text{/}({n}^{2}-1),$ instead we show how we can use the {term:limit comparison test} to compare

$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{n}^{2}-1}\;\text{and}\;\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}.$  {eq:fs-id1169739269305}

Let us examine the idea behind the limit comparison test. Consider two series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}.$ with positive terms ${a}_{n}\;\text{and}\;{b}_{n}$ and evaluate

$\lim_{n\to \infty}\frac{{a}_{n}}{{b}_{n}}.$  {eq:fs-id1169739030080}

If

$\lim_{n\to \infty}\frac{{a}_{n}}{{b}_{n}}=L≠0,$  {eq:fs-id1169738869977}

then, for $n$ sufficiently large, ${a}_{n}\approx L{b}_{n}.$ Therefore, either both series converge or both series diverge. For the series $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}1\text{/}({n}^{2}-1)$ and $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}1\text{/}{n}^{2},$ we see that

$\lim_{n\to \infty}\frac{1\text{/}({n}^{2}-1)}{1\text{/}{n}^{2}}=\lim_{n\to \infty}\;\frac{{n}^{2}}{{n}^{2}-1}=1.$  {eq:fs-id1169736644288}

Since $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}1\text{/}{n}^{2}$ converges, we conclude that

$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{n}^{2}-1}\;$  {eq:fs-id1169739183274}

converges.
The limit comparison test can be used in two other cases. Suppose

$\lim_{n\to \infty}\frac{{a}_{n}}{{b}_{n}}=0.$  {eq:fs-id1169738962326}

In this case, $\{{a}_{n}\text{/}{b}_{n}\}$ is a bounded sequence. As a result, there exists a constant $M$ such that ${a}_{n}\le M{b}_{n}.$ Therefore, if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges. On the other hand, suppose

$\lim_{n\to \infty}\frac{{a}_{n}}{{b}_{n}}=\infty .$  {eq:fs-id1169739187915}

In this case, $\{{a}_{n}\text{/}{b}_{n}\}$ is an unbounded sequence. Therefore, for every constant $M$ there exists an integer $N$ such that ${a}_{n}\ge M{b}_{n}$ for all $n\ge N.$ Therefore, if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges as well.

:::note [theorem] Limit Comparison Test
Let ${a}_{n},\;{b}_{n}\ge 0$ for all $n\ge 1.$
1. If $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}=L≠0,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ both converge or both diverge.
2. If $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}=0$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges.
3. If $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}=\infty$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges.
:::
Note that if ${a}_{n}\text{/}{b}_{n}\to 0$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, the limit comparison test gives no information. Similarly, if ${a}_{n}\text{/}{b}_{n}\to \infty$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, the test also provides no information. For example, consider the two series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}\sqrt{n}$ and ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}.$ These series are both *p*-series with $p=1\text{/}2$ and $p=2,$ respectively. Since $p=1\text{/}2<1,$ the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}\sqrt{n}$ diverges. On the other hand, since $p=2>1,$ the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}$ converges. However, suppose we attempted to apply the limit comparison test, using the convergent $p-\text{series}$ ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{3}$ as our comparison series. First, we see that

$\frac{1\text{/}\sqrt{n}}{1\text{/}{n}^{3}}=\frac{{n}^{3}}{\sqrt{n}}={n}^{5\text{/}2}\to \infty \;\text{as}\;n\to \infty .$  {eq:fs-id1169738993576}

Similarly, we see that

$\frac{1\text{/}{n}^{2}}{1\text{/}{n}^{3}}=n\to \infty \;\text{as}\;n\to \infty .$  {eq:fs-id1169739215888}

Therefore, if ${a}_{n}\text{/}{b}_{n}\to \infty$ when ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}}$ converges, we do not gain any information on the convergence or divergence of ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$

:::example {ex:fs-id1169738980859} Using the Limit Comparison Test

:::exercise {fs-id1169738980862} type= 
PROBLEM:
For each of the following series, use the limit comparison test to determine whether the series converges or diverges. If the test does not apply, say so.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{n}+1}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{2}^{n}+1}{{3}^{n}}$
c. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\text{ln}(n)}{{n}^{2}}$
SOLUTION:
a. Compare this series to $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{n}}.$ Calculate

$\lim_{n\to \infty}\;\frac{1\text{/}(\sqrt{n}+1)}{1\text{/}\sqrt{n}}=\lim_{n\to \infty}\begin{array}{l}\frac{\sqrt{n}}{\sqrt{n}+1} \\ \;\end{array}=\lim_{n\to \infty}\;\frac{1}{1+1\text{/}\sqrt{n}}=1.$  {eq:fs-id1169738998893}

By the limit comparison test, since $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{n}}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{\sqrt{n}+1}$ diverges.
b. Compare this series to $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{2}{3})}^{n}.$ We see that

$\lim_{n\to \infty}\frac{({2}^{n}+1)\text{/}{3}^{n}}{{2}^{n}\text{/}{3}^{n}}=\lim_{n\to \infty}\frac{{2}^{n}+1}{{3}^{n}}\cdot \frac{{3}^{n}}{{2}^{n}}=\lim_{n\to \infty}\frac{{2}^{n}+1}{{2}^{n}}=\lim_{n\to \infty}[1+{(\frac{1}{2})}^{n}]=1.$  {eq:fs-id1169736613756}

Therefore,

$\lim_{n\to \infty}\frac{({2}^{n}+1)\text{/}{3}^{n}}{{2}^{n}\text{/}{3}^{n}}=1.$  {eq:fs-id1169739222678}

Since $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{2}{3})}^{n}$ converges, we conclude that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{2}^{n}+1}{{3}^{n}}$ converges.
c. Since $\text{ln}\;n<n,$ compare with $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}.$ We see that

$\lim_{n\to \infty}\frac{\text{ln}\;n\text{/}{n}^{2}}{1\text{/}n}=\lim_{n\to \infty}\frac{\text{ln}\;n}{{n}^{2}}\cdot \frac{n}{1}=\lim_{n\to \infty}\frac{\text{ln}\;n}{n}.$  {eq:fs-id1169739097242}

In order to evaluate $\lim_{n\to \infty}\text{ln}\;n\text{/}n,$ evaluate the limit as $x\to \infty$ of the real-valued function $\text{ln}(x)\text{/}x.$ These two limits are equal, and making this change allows us to use L’Hôpital’s rule. We obtain

$\lim_{x\to \infty}\frac{\text{ln}\;x}{x}=\lim_{x\to \infty}\frac{1}{x}=0.$  {eq:fs-id1169738904914}

Therefore, $\lim_{n\to \infty}\text{ln}\;n\text{/}n=0,$ and, consequently,

$\lim_{n\to \infty}\frac{\text{ln}\;n\text{/}{n}^{2}}{1\text{/}n}=0.$  {eq:fs-id1169736654583}

Since the limit is $0$ but $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}$ diverges, the limit comparison test does not provide any information.

Compare with $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}$ instead. In this case,

$\lim_{n\to \infty}\frac{\text{ln}\;n\text{/}{n}^{2}}{1\text{/}{n}^{2}}=\lim_{n\to \infty}\frac{\text{ln}\;n}{{n}^{2}}\cdot \frac{{n}^{2}}{1}=\lim_{n\to \infty}\text{ln}\;n=\infty .$  {eq:fs-id1169739067731}

Since the limit is $\infty$ but $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}}$ converges, the test still does not provide any information.

So now we try a series between the two we already tried. Choosing the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{3\text{/}2}},$ we see that

$\lim_{n\to \infty}\frac{\text{ln}\;n\text{/}{n}^{2}}{1\text{/}{n}^{3\text{/}2}}=\lim_{n\to \infty}\frac{\text{ln}\;n}{{n}^{2}}\cdot \frac{{n}^{3\text{/}2}}{1}=\lim_{n\to \infty}\frac{\text{ln}\;n}{\sqrt{n}}.$  {eq:fs-id1169738869752}

As above, in order to evaluate $\lim_{n\to \infty}\text{ln}\;n\text{/}\sqrt{n},$ evaluate the limit as $x\to \infty$ of the real-valued function $\text{ln}\;x\text{/}\sqrt{x}.$ Using L’Hôpital’s rule,

$\lim_{x\to \infty}\frac{\text{ln}\;x}{\sqrt{x}}=\lim_{x\to \infty}\frac{2\sqrt{x}}{x}=\lim_{x\to \infty}\frac{2}{\sqrt{x}}=0.$  {eq:fs-id1169739210063}

Since the limit is $0$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{3\text{/}2}}$ converges, we can conclude that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\text{ln}\;n}{{n}^{2}}$ converges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736587954} type= 
PROBLEM:
Use the limit comparison test to determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{5}^{n}}{{3}^{n}+2}$ converges or diverges.
SOLUTION:
The series diverges.
COMMENTARY: Hint
Compare with a geometric series.
:::
:::

## Key Concepts {section:key-concepts}
- The comparison tests are used to determine convergence or divergence of series with positive terms.
- When using the comparison tests, a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is often compared to a geometric or *p*-series.

##  {section:section-exercises}
Use the comparison test to determine whether the following series converge.

:::exercise {fs-id1169739080561} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ where ${a}_{n}=\frac{2}{n(n+1)}$
:::

:::exercise {fs-id1169739169541} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ where ${a}_{n}=\frac{1}{n(n+1\text{/}2)}$
SOLUTION:
Converges by comparison with $1\text{/}{n}^{2}.$
:::

:::exercise {fs-id1169739370110} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{2(n+1)}$
:::

:::exercise {fs-id1169738901956} type= 
PROBLEM:
$\sum_{n=2}^{\infty} \frac{1}{2(n-1)}$
SOLUTION:
The sum is one half times a harmonic series, which diverges.
:::

:::exercise {fs-id1169739029849} type= 
PROBLEM:
$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{(n\;\text{ln}\;n)}^{2}}$
:::

:::exercise {fs-id1169736769705} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{n\text{!}}{(n+2)\text{!}}$
SOLUTION:
${a}_{n}=1\text{/}(n+1)(n+2)<1\text{/}{n}^{2}.$ Converges by comparison with *p*-series, $p=2.$
:::

:::exercise {fs-id1169739223189} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n\text{!}}$
:::

:::exercise {fs-id1169739186610} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{\text{sin}(1\text{/}n)}{{n}^{2}}}$
SOLUTION:
$\text{sin}(1\text{/}n)\le 1\text{/}n,$ so converges by comparison with *p*-series, $p=2.$
:::

:::exercise {fs-id1169739300083} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{\text{sin}}^{2}n}{{n}^{2}}}$
:::

:::exercise {fs-id1169739179317} type= 
PROBLEM:
$\sum_{n=1}^{\infty} \frac{\text{sin}(1\text{/}n)}{(\sqrt{n}{)}^{3}}$
SOLUTION:
$\text{sin}(1\text{/}n)\le 1,$ so converges by comparison with *p*-series, **$p=3\text{/}2.$
:::

:::exercise {fs-id1169738924149} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{1.2}-1}{{n}^{2.3}+1}$
:::

:::exercise {fs-id1169736603429} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\sqrt{n+1}-\sqrt{n}}{n}$
SOLUTION:
Since $\sqrt{n+1}-\sqrt{n}=1\text{/}(\sqrt{n+1/2}+\sqrt{n})\le 2\text{/}\sqrt{n},$ series converges by comparison with *p*-series **for $p=1.5.$
:::

:::exercise {fs-id1169739223412} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\sqrt[4]{n}}{\sqrt[3]{{n}^{4}+{n}^{2}}}$
:::
Use the limit comparison test to determine whether each of the following series converges or diverges.

:::exercise {fs-id1169738920032} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{\text{ln}\;n}{n})}^{2}$
SOLUTION:
Converges by limit comparison with *p*-series **for $p>1.$
:::

:::exercise {fs-id1169739031562} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{\text{ln}\;n}{{n}^{0.6}})}^{2}$
:::

:::exercise {fs-id1169739274309} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\text{ln}(1+\frac{1}{n})}{n}$
SOLUTION:
Converges by limit comparison with *p*-series, **$p=2.$
:::

:::exercise {fs-id1169739006370} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\text{ln}(1+\frac{1}{{n}^{2}})$
:::

:::exercise {fs-id1169736726602} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{4}^{n}-{3}^{n}}$
SOLUTION:
Converges by limit comparison with ${4}^{\text{−}n}.$
:::

:::exercise {fs-id1169739027432} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{2}-n\;\text{sin}\;n}$
:::

:::exercise {fs-id1169739097308} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{e}^{(1.1)n}-{3}^{n}}$
SOLUTION:
Converges by limit comparison with $1\text{/}{e}^{1.1n}.$
:::

:::exercise {fs-id1169739187969} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{e}^{(1.01)n}-{3}^{n}}$
:::

:::exercise {fs-id1169739110958} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{n}^{1+1\text{/}n}}$
SOLUTION:
Diverges by limit comparison with harmonic series.
:::

:::exercise {fs-id1169739067714} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{{2}^{1+1\text{/}n}{n}^{1+1\text{/}n}}$
:::

:::exercise {fs-id1169739204262} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(\frac{1}{n}-\text{sin}(\frac{1}{n}))$
SOLUTION:
Converges by limit comparison with *p*-series, $p=3.$
:::

:::exercise {fs-id1169739304895} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(1-\text{cos}(\frac{1}{n}))$
:::

:::exercise {fs-id1169736779609} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}(\frac{\pi}{2}-{\text{tan}}^{−1}n)$
SOLUTION:
Converges by limit comparison with *p*-series, $p=2.$
:::

:::exercise {fs-id1169739169498} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(1-\frac{1}{n})}^{n}$ (*Hint:*${(1-\frac{1}{n})}^{n}\to 1\text{/}e.)$
:::

:::exercise {fs-id1169739273685} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(1-{e}^{−1\text{/}n})$ (*Hint:*$1\text{/}e\approx {(1-1\text{/}n)}^{n},$ so $1-{e}^{−1\text{/}n}\approx 1\text{/}n.)$
SOLUTION:
Diverges by limit comparison with $1\text{/}n.$
:::

:::exercise {fs-id1169736725605} type= 
PROBLEM:
Does $\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}\frac{1}{{(\text{ln}\;n)}^{p}}$ converge if $p$ is large enough? If so, for which $p\text{?}$
:::

:::exercise {fs-id1169738998746} type= 
PROBLEM:
Does $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{(\text{ln}\;n)}{n})}^{p}$ converge if $p$ is large enough? If so, for which $p\text{?}$
SOLUTION:
Converges for $p>1$ by comparison with a $p$ series for slightly smaller $p.$
:::

:::exercise {fs-id1169739260612} type= 
PROBLEM:
For which $p$ does the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{2}^{pn}\text{/}{3}^{n}$ converge?
:::

:::exercise {fs-id1169736708973} type= 
PROBLEM:
For which $p>0$ does the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{p}}{{2}^{n}}$ converge?
SOLUTION:
Converges for all $p>0.$
:::

:::exercise {fs-id1169736776411} type= 
PROBLEM:
For which $r>0$ does the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{r}^{{n}^{2}}}{{2}^{n}}$ converge?
:::

:::exercise {fs-id1169736654488} type= 
PROBLEM:
For which $r>0$ does the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{2}^{n}}{{r}^{{n}^{2}}}$ converge?
SOLUTION:
Converges for all $r>1.$ If $r>1$ then ${r}^{n}>4,$ say, once $n>\text{ln}(2)\text{/}\text{ln}(r)$ and then the series converges by limit comparison with a geometric series with ratio $1\text{/}2.$
:::

:::exercise {fs-id1169739194411} type= 
PROBLEM:
Find all values of $p$ and $q$ such that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{n}^{p}}{{(n\text{!})}^{q}}$ converges.
:::

:::exercise {fs-id1169739186700} type= 
PROBLEM:
Does $\overset{\infty}{\underset{n=1}{}}(\frac{n\pi}{2})$ converge or diverge? Explain.
SOLUTION:
The numerator is equal to $1$ when $n$ is odd and $0$ when $n$ is even, so the series can be rewritten $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{2n+1},$ which diverges by limit comparison with the harmonic series.
:::

:::exercise {fs-id1169736727516} type= 
PROBLEM:
Explain why, for each $n,$ at least one of $\{|\text{sin}\;n|,|\text{sin}(n+1)|\text{,...},|\text{sin}\;n+6|\}$ is larger than $1\text{/}2.$ Use this relation to test convergence of $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{|\text{sin}\;n|}{\sqrt{n}}.$
:::

:::exercise {fs-id1169739186520} type= 
PROBLEM:
Suppose that ${a}_{n}\ge 0$ and ${b}_{n}\ge 0$ and that ${\displaystyle \sum_{n=1}^{\infty} {a}^{2}{}_{n}}$ and ${\displaystyle \sum_{n=1}^{\infty} {b}^{2}{}_{n}}$ converge. Prove that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{b}_{n}}$ converges and ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}\;{b}_{n}\le \frac{1}{2}({\displaystyle \sum_{n=1}^{\infty} {a}_{n}^{2}}+{\displaystyle \sum_{n=1}^{\infty} {b}_{n}^{2}}).$
SOLUTION:
${(a-b)}^{2}={a}^{2}-2ab+{b}^{2}$ or ${a}^{2}+{b}^{2}\ge 2ab,$ so convergence follows from comparison of $2{a}_{n}{b}_{n}$ with ${a}^{2}{}_{n}+{b}^{2}{}_{n}.$ Since the partial sums on the left are bounded by those on the right, the inequality holds for the infinite series.
:::

:::exercise {fs-id1169739100267} type= 
PROBLEM:
Does ${\displaystyle \sum_{n=1}^{\infty} {2}^{\text{−}\text{ln}\;\text{ln}\;n}}$ converge? (*Hint:* Write ${2}^{\text{ln}\;\text{ln}\;n}$ as a power of $\text{ln}\;n.)$
:::

:::exercise {fs-id1169739210323} type= 
PROBLEM:
Does ${\displaystyle \sum_{n=1}^{\infty} {(\text{ln}\;n)}^{\text{−}\text{ln}\;n}}$ converge? (*Hint:* Use $n={e}^{\text{ln}(n)}$ to compare to a $p-\text{series}\text{.})$
SOLUTION:
${(\text{ln}\;n)}^{\text{−}\text{ln}\;n}={e}^{\text{−}\text{ln}(n)\text{ln}\;\text{ln}(n)}.$ If $n$ is sufficiently large, then $\text{ln}\;\text{ln}\;n>2,$ so ${(\text{ln}\;n)}^{\text{−}\text{ln}\;n}<1\text{/}{n}^{2},$ and the series converges by comparison to a $p-\text{series}\text{.}$
:::

:::exercise {fs-id1169739210366} type= 
PROBLEM:
Does ${\displaystyle \sum_{n=2}^{\infty} {(\text{ln}\;n)}^{\text{−}\text{ln}\;\text{ln}\;n}}$ converge? (*Hint:* Compare ${a}_{n}$ to $1\text{/}n.)$
:::

:::exercise {fs-id1169739080340} type= 
PROBLEM:
Show that if ${a}_{n}\ge 0$ and ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges, then ${\displaystyle \sum_{n=1}^{\infty} {a}^{2}{}_{n}}$ converges. If ${\displaystyle \sum_{n=1}^{\infty} {a}^{2}{}_{n}}$ converges, does ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ necessarily converge?
SOLUTION:
${a}_{n}\to 0,$ so ${a}^{2}{}_{n}\le |{a}_{n}|$ for large $n.$ Convergence follows from limit comparison. ${\displaystyle \sum 1\text{/}{n}^{2}}$ converges, but ${\displaystyle \sum 1\text{/}n}$ does not, so the fact that ${\displaystyle \sum_{n=1}^{\infty} {a}^{2}{}_{n}}$ converges does not imply that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.
:::

:::exercise {fs-id1169736776946} type= 
PROBLEM:
Suppose that ${a}_{n}>0$ for all $n$ and that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges. Suppose that ${b}_{n}$ is an arbitrary sequence of zeros and ones. Does ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{b}_{n}$ necessarily converge?
:::

:::exercise {fs-id1169739186586} type= 
PROBLEM:
Suppose that ${a}_{n}>0$ for all $n$ and that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges. Suppose that ${b}_{n}$ is an arbitrary sequence of zeros and ones with infinitely many terms equal to one. Does ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{b}_{n}$ necessarily diverge?
SOLUTION:
No. ${\displaystyle \sum_{n=1}^{\infty} 1\text{/}n}$ diverges. Let ${b}_{k}=0$ unless $k={n}^{2}$ for some $n.$ Then ${\displaystyle \underset{k}{\sum}{b}_{k}\text{/}k}={\displaystyle \sum 1\text{/}{k}^{2}}$ converges.
:::

:::exercise {fs-id1169739097544} type= 
PROBLEM:
Complete the details of the following argument: If ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}$ converges to a finite sum $s,$ then $\frac{1}{2}s=\frac{1}{2}+\frac{1}{4}+\frac{1}{6}+\text{⋯}$ and $s-\frac{1}{2}s=1+\frac{1}{3}+\frac{1}{5}+\text{⋯}.$ Why does this lead to a contradiction?
:::

:::exercise {fs-id1169736777508} type= 
PROBLEM:
Show that if ${a}_{n}\ge 0$ and ${\displaystyle \sum_{n=1}^{\infty} {a}^{2}{}_{n}}$ converges, then ${\displaystyle \sum_{n=1}^{\infty} {\text{sin}}^{2}({a}_{n})}$ converges.
SOLUTION:
$|\text{sin}\;t|\le |t|,$ so the result follows from the comparison test.
:::

:::exercise {fs-id1169739255935} type= 
PROBLEM:
Suppose that ${a}_{n}\text{/}{b}_{n}\to 0$ in the comparison test, where ${a}_{n}\ge 0$ and ${b}_{n}\ge 0.$ Prove that if ${\displaystyle \sum {b}_{n}}$ converges, then ${\displaystyle \sum {a}_{n}}$ converges.
:::

:::exercise {fs-id1169736777832} type= 
PROBLEM:
Let ${b}_{n}$ be an infinite sequence of zeros and ones. What is the largest possible value of $x={\displaystyle \sum_{n=1}^{\infty} {b}_{n}\text{/}{2}^{n}}\text{?}$
SOLUTION:
By the comparison test, $x={\displaystyle \sum_{n=1}^{\infty} {b}_{n}\text{/}{2}^{n}}\le {\displaystyle \sum_{n=1}^{\infty} 1\text{/}{2}^{n}}=1.$
:::

:::exercise {fs-id1169736727925} type= 
PROBLEM:
Let ${d}_{n}$ be an infinite sequence of digits, meaning ${d}_{n}$ takes values in $\{0,\;1\text{,…},9\}.$ What is the largest possible value of $x={\displaystyle \sum_{n=1}^{\infty} {d}_{n}\text{/}{10}^{n}}$ that converges?
:::

:::exercise {fs-id1169739255148} type= 
PROBLEM:
Explain why, if $x>1\text{/}2,$ then $x$ cannot be written $x={\displaystyle \sum_{n=2}^{\infty} \frac{{b}_{n}}{{2}^{n}}}({b}_{n}=0\;\text{or}\;1,\;{b}_{1}=0).$
SOLUTION:
If ${b}_{1}=0,$ then, by comparison, $x\le {\displaystyle \sum_{n=2}^{\infty} 1\text{/}{2}^{n}}=1\text{/}2.$
:::

:::exercise {fs-id1169739195846} type= 
PROBLEM:
**[T]** Evelyn has a perfect balancing scale, an unlimited number of $1\;\text{-kg}$ weights, and one each of $1\text{/}2\;\text{-kg},\;1\text{/}4\;\text{-kg},\;1\text{/}8\;\text{-kg},$ and so on weights. She wishes to weigh a meteorite of unspecified origin to arbitrary precision. Assuming the scale is big enough, can she do it? What does this have to do with infinite series?
:::

:::exercise {fs-id1169739255813} type= 
PROBLEM:
**[T]** Robert wants to know his body mass to arbitrary precision. He has a big balancing scale that works perfectly, an unlimited collection of $1\;\text{-kg}$ weights, and nine each of $0.1\;\text{-kg,}$ $0.01\;\text{-kg},\;0.001\;\text{-kg,}$ and so on weights. Assuming the scale is big enough, can he do this? What does this have to do with infinite series?
SOLUTION:
Yes. Keep adding $1\;\text{-kg}$ weights until the balance tips to the side with the weights. If it balances perfectly, with Robert standing on the other side, stop. Otherwise, remove one of the $1\;\text{-kg}$ weights, and add $0.1\;\text{-kg}$ weights one at a time. If it balances after adding some of these, stop. Otherwise if it tips to the weights, remove the last $0.1\;\text{-kg}$ weight. Start adding $0.01\;\text{-kg}$ weights. If it balances, stop. If it tips to the side with the weights, remove the last $0.01\;\text{-kg}$ weight that was added. Continue in this way for the $0.001\;\text{-kg}$ weights, and so on. After a finite number of steps, one has a finite series of the form $A+{\displaystyle \sum_{n=1}^{N} {s}_{n}}\text{/}{10}^{n}$ where $A$ is the number of full kg weights and ${d}_{n}$ is the number of $1\text{/}{10}^{n}\;\text{-kg}$ weights that were added. If at some state this series is Robert’s exact weight, the process will stop. Otherwise it represents the $N\text{th}$ partial sum of an infinite series that gives Robert’s exact weight, and the error of this sum is at most $1\text{/}{10}^{N}.$
:::

:::exercise {fs-id1169736635743} type= 
PROBLEM:
The series ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{2n}}$ is half the harmonic series and hence diverges. It is obtained from the harmonic series by deleting all terms in which $n$ is odd. Let $m>1$ be fixed. Show, more generally, that deleting all terms $1\text{/}n$ where $n=mk$ for some integer $k$ also results in a divergent series.
:::

:::exercise {fs-id1169736627072} type= 
PROBLEM:
In view of the previous exercise, it may be surprising that a subseries of the harmonic series in which about one in every five terms is deleted might converge. A *depleted harmonic series* is a series obtained from ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}$ by removing any term $1\text{/}n$ if a given digit, say $9,$ appears in the decimal expansion of $n.$ Argue that this depleted harmonic series converges by answering the following questions.
a. How many whole numbers $n$ have $d$ digits?
b. How many $d\text{-digit}$ whole numbers $h(d).$ do not contain $9$ as one or more of their digits?
c. What is the smallest $d\text{-digit}$ number $m(d)\text{?}$
d. Explain why the deleted harmonic series is bounded by ${\displaystyle \sum_{d=1}^{\infty} \frac{h(d)}{m(d)}}.$
e. Show that ${\displaystyle \sum_{d=1}^{\infty} \frac{h(d)}{m(d)}}$ converges.
SOLUTION:
a. ${10}^{d}-{10}^{d-1}<{10}^{d}$ b. $h(d)<{9}^{d}$ c. $m(d)={10}^{d-1}+1$ d. Group the terms in the deleted harmonic series together by number of digits. $h(d)$ bounds the number of terms, and each term is at most $1\text{/}m(d).$ ${\displaystyle \sum_{d=1}^{\infty} h(d)\text{/}m(d)}\le {\displaystyle \sum_{d=1}^{\infty} {9}^{d}\text{/}{(10)}^{d-1}}\le 90.$ One can actually use comparison to estimate the value to smaller than $80.$ The actual value is smaller than $23.$
:::

:::exercise {fs-id1169736744022} type= 
PROBLEM:
Suppose that a sequence of numbers ${a}_{n}>0$ has the property that ${a}_{1}=1$ and ${a}_{n+1}=\frac{1}{n+1}{S}_{n},$ where ${S}_{n}={a}_{1}+\text{⋯}+{a}_{n}.$ Can you determine whether ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges? (*Hint:* ${S}_{n}$ is monotone.)
:::

:::exercise {fs-id1169739186621} type= 
PROBLEM:
Suppose that a sequence of numbers ${a}_{n}>0$ has the property that ${a}_{1}=1$ and ${a}_{n+1}=\frac{1}{{(n+1)}^{2}}{S}_{n},$ where ${S}_{n}={a}_{1}+\text{⋯}+{a}_{n}.$ Can you determine whether ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges? (*Hint:* ${S}_{2}={a}_{2}+{a}_{1}={a}_{2}+{S}_{1}={a}_{2}+1=1+1\text{/}4=(1+1\text{/}4){S}_{1},$ ${S}_{3}=\frac{1}{{3}^{2}}{S}_{2}+{S}_{2}=(1+1\text{/}9){S}_{2}=(1+1\text{/}9)(1+1\text{/}4){S}_{1},$ etc. Look at $\text{ln}({S}_{n}),$ and use $\text{ln}(1+t)\le t,$ $t>0.)$
SOLUTION:
Continuing the hint gives ${S}_{N}=(1+1\text{/}{N}^{2})(1+1\text{/}{(N-1)}^{2}\text{…}(1+1\text{/}4)).$ Then $\text{ln}({S}_{N})=\text{ln}(1+1\text{/}{N}^{2})+\text{ln}(1+1\text{/}{(N-1)}^{2})+\text{⋯}+\text{ln}(1+1\text{/}4).$ Since $\text{ln}(1+t)$ is bounded by a constant times $t,$ when $0<t<1$ one has $\text{ln}({S}_{N})\le C{\displaystyle \sum_{n=1}^{N} \frac{1}{{n}^{2}}},$ which converges by comparison to the *p*-series for $p=2.$
:::

## Glossary
- {def} **comparison test**: if $0\le {a}_{n}\le {b}_{n}$ for all $n\ge N$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges; if ${a}_{n}\ge {b}_{n}\ge 0$ for all $n\ge N$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges
- {def} **limit comparison test**: suppose ${a}_{n},\;{b}_{n}\ge 0$ for all $n\ge 1.$ If $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}\to L≠0,$ then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ both converge or both diverge; if $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}\to 0$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges. If $\lim_{n\to \infty}{a}_{n}\text{/}{b}_{n}\to \infty ,$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ diverges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ diverges

# Alternating Series

## Learning Objectives {section:learning-objectives}
- Use the alternating series test to test an alternating series for convergence.
- Estimate the sum of an alternating series.
- Explain the meaning of absolute convergence and conditional convergence.

So far in this chapter, we have primarily discussed series with positive terms. In this section we introduce alternating series—those series whose terms alternate in sign. We will show in a later chapter that these series often arise when studying power series. After defining alternating series, we introduce the alternating series test to determine whether such a series converges.

## The Alternating Series Test
A series whose terms alternate between positive and negative values is an {term:alternating series}. For example, the series

$$ \overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(-\frac{1}{2})}^{n}=-\frac{1}{2}+\frac{1}{4}-\frac{1}{8}+\frac{1}{16}-\text{⋯} $$  {eq:fs-id1169737843037} class=numbered

and

$$ \overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{(−1)}^{n+1}}{n}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\text{⋯} $$  {eq:fs-id1169738026978} class=numbered

are both alternating series.

:::note [definition] Definition
Any series whose terms alternate between positive and negative values is called an alternating series. An alternating series can be written in the form

$$ {\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}{b}_{n}}={b}_{1}-{b}_{2}+{b}_{3}-{b}_{4}+\text{⋯} $$  {eq:fs-id1169737355805} class=numbered

or

$$ {\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}{b}_{n}=\text{−}{b}_{1}+{b}_{2}-{b}_{3}+{b}_{4}-\text{⋯}} $$  {eq:fs-id1169738222645} class=numbered

Where ${b}_{n}>0$ for all positive integers *n*.
:::
Series (1), shown in [ref:fs-id1169737843037], is a geometric series. Since $|r|=|\text{−}1\text{/}2|<1,$ the series converges. Series (2), shown in [ref:fs-id1169738026978], is called the alternating harmonic series. We will show that whereas the harmonic series diverges, the alternating harmonic series converges.
To prove this, we look at the sequence of partial sums $\{{S}_{k}\}$ ([ref:CNX_Calc_Figure_09_05_001]).

### Proof
Consider the odd terms ${S}_{2k+1}$ for $k\ge 0.$ Since $1\text{/}(2k+1)<1\text{/}2k,$

${S}_{2k+1}={S}_{2k-1}-\frac{1}{2k}+\frac{1}{2k+1}<{S}_{2k-1}.$  {eq:fs-id1169738187484}

Therefore, $\{{S}_{2k+1}\}$ is a decreasing sequence. Also,

${S}_{2k+1}=(1-\frac{1}{2})+(\frac{1}{3}-\frac{1}{4})+\text{⋯}+(\frac{1}{2k-1}-\frac{1}{2k})+\frac{1}{2k+1}>0.$  {eq:fs-id1169737950278}

Therefore, $\{{S}_{2k+1}\}$ is bounded below. Since $\{{S}_{2k+1}\}$ is a decreasing sequence that is bounded below, by the Monotone Convergence Theorem, $\{{S}_{2k+1}\}$ converges. Similarly, the even terms $\{{S}_{2k}\}$ form an increasing sequence that is bounded above because

${S}_{2k}={S}_{2k-2}+\frac{1}{2k-1}-\frac{1}{2k}>{S}_{2k-2}$  {eq:fs-id1169737955583}

and

${S}_{2k}=1+(-\frac{1}{2}+\frac{1}{3})+\text{⋯}+(-\frac{1}{2k-2}+\frac{1}{2k-1})-\frac{1}{2k}<1.$  {eq:fs-id1169737837204}

Therefore, by the Monotone Convergence Theorem, the sequence $\{{S}_{2k}\}$ also converges. Since

${S}_{2k+1}={S}_{2k}+\frac{1}{2k+1},$  {eq:fs-id1169738064210}

we know that

$\lim_{k\to \infty}{S}_{2k+1}=\lim_{k\to \infty}{S}_{2k}+\lim_{k\to \infty}\frac{1}{2k+1}.$  {eq:fs-id1169737772510}

Letting $S=\lim_{k\to \infty}{S}_{2k+1}$ and using the fact that $1\text{/}(2k+1)\to 0,$ we conclude that $\lim_{k\to \infty}{S}_{2k}=S.$ Since the odd terms and the even terms in the sequence of partial sums converge to the same limit $S,$ it can be shown that the sequence of partial sums converges to $S,$ and therefore the alternating harmonic series converges to $S.$
It can also be shown that $S=\text{ln}\;2,$ and we can write

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{(−1)}^{n+1}}{n}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\text{⋯}=\text{ln}(2).$  {eq:fs-id1169738249486}

> FIGURE {fig:CNX_Calc_Figure_09_05_001} src=../../media/CNX_Calc_Figure_09_05_001.jpg
> alt: This graph demonstrates the alternating hamanic series in the first quadrant. The highest line 1 is drawn to S1, the next line -1/2 is drawn to S2, the next line +1/3 is drawn to S3, the line -1/4 is drawn to S4, and the last line +1/5 is drawn to S5. The odd terms are decreasing and bounded below, and the even terms are increasing and bounded above. It seems to be converging to S, which is in the middle of S2, S4 and S5, S3, S1.
> caption: For the alternating harmonic series, the odd terms ${S}_{2k+1}$ in the sequence of partial sums are decreasing and bounded below. The even terms ${S}_{2k}$ are increasing and bounded above.

□
More generally, any alternating series of form (3) ([ref:fs-id1169737355805]) or (4) ([ref:fs-id1169738222645]) converges as long as ${b}_{1}\ge {b}_{2}\ge {b}_{3}\ge \text{⋯}$ and ${b}_{n}\to 0$ ([ref:CNX_Calc_Figure_09_05_002]). The proof is similar to the proof for the alternating harmonic series.

> FIGURE {fig:CNX_Calc_Figure_09_05_002} src=../../media/CNX_Calc_Figure_09_05_002.jpg
> alt: This diagram illustrates an alternating series in quadrant 1. The highest line b1 is drawn out to S1, the next line –b2 is drawn back to S2, the next line b3 is drawn out to S3, the next line –b4 is drawn back to S4, and the last line is drawn out to S5. It seems to be converging to S, which is in between S2, S4 and S5, S3, and S1. The odd terms are decreasing and bounded below. The even terms are increasing and bounded above.
> caption: For an alternating series ${b}_{1}-{b}_{2}+{b}_{3}-\text{⋯}$ in which ${b}_{1}>{b}_{2}>{b}_{3}>\text{⋯},$ the odd terms ${S}_{2k+1}$ in the sequence of partial sums are decreasing and bounded below. The even terms ${S}_{2k}$ are increasing and bounded above.

:::note [theorem] Alternating Series Test
An alternating series of the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}\;\text{or}\;\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}{b}_{n}$  {eq:fs-id1169738101714}

converges if
1. $0<{b}_{n+1}\le {b}_{n}$ for all $n\ge 1$ and
2. $\lim_{n\to \infty}{b}_{n}=0.$
This is known as the {term:alternating series test}.
:::
We remark that this theorem is true more generally as long as there exists some integer $N$ such that $0<{b}_{n+1}\le {b}_{n}$ for all $n\ge N.$

:::example {ex:fs-id1169737819249} Convergence of Alternating Series

:::exercise {fs-id1169737949836} type= 
PROBLEM:
For each of the following alternating series, determine whether the series converges or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{/}{n}^{2}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}n\text{/}(n+1)$
SOLUTION:
a. Since

$\frac{1}{{(n+1)}^{2}}<\frac{1}{{n}^{2}}\;\text{and}\;\frac{1}{{n}^{2}}\to 0,$

the series converges.
b. Since $n\text{/}(n+1)\nrightarrow 0$ as $n\to \infty ,$ we cannot apply the alternating series test. Instead, we use the *n*th term test for divergence. Since

$\lim_{n\to \infty}\frac{{(−1)}^{n+1}n}{n+1}≠0,$

the series diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737814736} type= 
PROBLEM:
Determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}n\text{/}{2}^{n}$ converges or diverges.
SOLUTION:
The series converges.
COMMENTARY: Hint
Is $\{n\text{/}{2}^{n}\}$ decreasing? What is $\lim_{n\to \infty}n\text{/}{2}^{n}\text{?}$
:::
:::

## Remainder of an Alternating Series
It is difficult to explicitly calculate the sum of most alternating series, so typically the sum is approximated by using a partial sum. When doing so, we are interested in the amount of error in our approximation. Consider an alternating series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}$  {eq:fs-id1169296846669}

satisfying the hypotheses of the alternating series test. Let $S$ denote the sum of this series and $\{{S}_{k}\}$ be the corresponding sequence of partial sums. From [ref:CNX_Calc_Figure_09_05_002], we see that for any integer $N\ge 1,$ the remainder ${R}_{N}$ satisfies

$|{R}_{N}|=|S-{S}_{N}|\le |{S}_{N+1}-{S}_{N}|={b}_{n+1}.$  {eq:fs-id1169737790066}

:::note [theorem] Remainders in Alternating Series
Consider an alternating series of the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}\text{or}\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}{b}_{n}$  {eq:fs-id1169738045618}

that satisfies the hypotheses of the alternating series test. Let $S$ denote the sum of the series and ${S}_{N}$ denote the $N\text{th}$ partial sum. For any integer $N\ge 1,$ the remainder ${R}_{N}=S-{S}_{N}$ satisfies

$|{R}_{N}|\le {b}_{N+1}.$  {eq:fs-id1169737725569}

:::
In other words, if the conditions of the alternating series test apply, then the error in approximating the infinite series by the $N\text{th}$ partial sum ${S}_{N}$ is in magnitude at most the size of the next term ${b}_{N+1}.$

:::example {ex:fs-id1169737939430} Estimating the Remainder of an Alternating Series

:::exercise {fs-id1169737939432} type= 
PROBLEM:
Consider the alternating series

${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n+1}}{{n}^{2}}}.$  {eq:fs-id1169738249304}

Use the remainder estimate to determine a bound on the error ${R}_{10}$ if we approximate the sum of the series by the partial sum ${S}_{10}.$
SOLUTION:
From the theorem stated above,
$|{R}_{10}|\le {b}_{11}=\frac{1}{{11}^{2}}\approx 0.008265.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738057296} type= 
PROBLEM:
Find a bound for ${R}_{20}$ when approximating $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{/}n$ by ${S}_{20}.$
SOLUTION:
$0.04762$
COMMENTARY: Hint
$|{R}_{20}|\le {b}_{21}$
:::
:::

## Absolute and Conditional Convergence
Consider a series ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ and the related series ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|.$ Here we discuss possibilities for the relationship between the convergence of these two series. For example, consider the alternating harmonic series ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}}\text{/}n.$ The series whose terms are the absolute value of these terms is the harmonic series, since ${\displaystyle \sum_{n=1}^{\infty} |}{(−1)}^{n+1}\text{/}n|={\displaystyle \sum_{n=1}^{\infty} 1}\text{/}n.$ Since the alternating harmonic series converges, but the harmonic series diverges, we say the alternating harmonic series exhibits conditional convergence.
By comparison, consider the series ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}}\text{/}{n}^{2}.$ The series whose terms are the absolute values of the terms of this series is the series ${\displaystyle \sum_{n=1}^{\infty} 1}\text{/}{n}^{2}.$ Since both of these series converge, we say the series ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}}\text{/}{n}^{2}$ exhibits absolute convergence.

:::note [definition] Definition
A series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ exhibits {term:absolute convergence} if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges. A series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ exhibits {term:conditional convergence} if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges but $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ diverges.
:::
As shown by the alternating harmonic series, a series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ may converge, but $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ may diverge. In the following theorem, however, we show that if $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges.

:::note [theorem] Absolute Convergence Implies Convergence
If $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges.
:::

### Proof
Suppose that ${\displaystyle \sum_{n=1}^{\infty} |}{a}_{n}|$ converges. We show this by using the fact that ${a}_{n}=|{a}_{n}|$ or ${a}_{n}=\text{−}|{a}_{n}|$ and therefore $|{a}_{n}|+{a}_{n}=2|{a}_{n}|$ or $|{a}_{n}|+{a}_{n}=0.$ Therefore, $0\le |{a}_{n}|+{a}_{n}\le 2|{a}_{n}|.$ Consequently, by the comparison test, since $2\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges, the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(|{a}_{n}|+{a}_{n})$  {eq:fs-id1169738045626}

converges. By using the algebraic properties for convergent series, we conclude that

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(|{a}_{n}|+{a}_{n})\text{−}\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$  {eq:fs-id1169738167764}

converges.
□

:::example {ex:fs-id1169738153895} Absolute versus Conditional Convergence

:::exercise {fs-id1169738153897} type= 
PROBLEM:
For each of the following series, determine whether the series converges absolutely, converges conditionally, or diverges.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{/}(3n+1)$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\text{cos}(n)\text{/}{n}^{2}$
SOLUTION:
a. We can see that

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|\frac{{(−1)}^{n+1}}{3n+1}|=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{3n+1}$  {eq:fs-id1169738128166}

diverges by using the limit comparison test with the harmonic series.

$\lim_{n\to \infty}\frac{1\text{/}(3n+1)}{1\text{/}n}=\frac{1}{3}$  {eq:fs-id1169737162005}

Thus, applying Theorem 5.13, the series cannot converge absolutely. Moreover, because of the alternating series test, we can see that the series converges.

$\frac{1}{3(n+1)+1}<\frac{1}{3n+1}\;\text{and}\;\frac{1}{3n+1}\to 0,$  {eq:fs-id1169738239379}

We can conclude that $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{/}(3n+1)$ converges conditionally.
b. Noting that $|\text{cos}\;n|\le 1,$ to determine whether the series converges absolutely, compare

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|\frac{\text{cos}\;n}{{n}^{2}}|$  {eq:fs-id1169738223988}

with the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{2}.$ Since $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}{n}^{2}$ converges, by the comparison test, $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|\text{cos}\;n\text{/}{n}^{2}|$ converges, and therefore $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\text{cos}\;n\text{/}{n}^{2}$ converges absolutely.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737262016} type= 
PROBLEM:
Determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}n\text{/}(2{n}^{3}+1)$ converges absolutely, converges conditionally, or diverges.
SOLUTION:
The series converges absolutely.
COMMENTARY: Hint
Check for absolute convergence first.
:::
:::
To see the difference between absolute and conditional convergence, look at what happens when we *rearrange* the terms of the alternating harmonic series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{/}n.$ We show that we can rearrange the terms so that the new series diverges. Certainly if we rearrange the terms of a finite sum, the sum does not change. When we work with an infinite sum, however, interesting things can happen.
Begin by adding enough of the positive terms to produce a sum that is larger than some real number $M>0.$ For example, let $M=10,$ and find an integer $k$ such that

$1+\frac{1}{3}+\frac{1}{5}+\text{⋯}+\frac{1}{2k-1}>10.$  {eq:fs-id1169738198575}

(We can do this because the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}1\text{/}(2n-1)$ diverges to infinity.) Then subtract $1\text{/}2.$ Then add more positive terms until the sum reaches 100. That is, find another integer $j>k$ such that

$1+\frac{1}{3}+\text{⋯}+\frac{1}{2k-1}-\frac{1}{2}+\frac{1}{2k+1}+\text{⋯}+\frac{1}{2j+1}>100.$  {eq:fs-id1169737911250}

Then subtract $1\text{/}4.$ Continuing in this way, we have found a way of rearranging the terms in the alternating harmonic series so that the sequence of partial sums for the rearranged series is unbounded and therefore diverges.
The terms in the alternating harmonic series can also be rearranged so that the new series converges to a different value. In [ref:fs-id1169738079721], we show how to rearrange the terms to create a new series that converges to $3\;\text{ln}(2)\text{/}2.$ We point out that the alternating harmonic series can be rearranged to create a series that converges to any real number $r;$ however, the proof of that fact is beyond the scope of this text.
In general, any series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ that converges conditionally can be rearranged so that the new series diverges or converges to a different real number. A series that converges absolutely does not have this property. For any series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ that converges absolutely, the value of $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is the same for any rearrangement of the terms. This result is known as the Riemann Rearrangement Theorem, which is beyond the scope of this book.

:::example {ex:fs-id1169738079721} Rearranging Series

:::exercise {fs-id1169738079723} type= 
PROBLEM:
Use the fact that

$1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\text{⋯}=\text{ln}\;2$  {eq:fs-id1169738079734}

to rearrange the terms in the alternating harmonic series so the sum of the rearranged series is $3\;\text{ln}(2)\text{/}2.$
SOLUTION:
Let

${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\frac{1}{6}+\frac{1}{7}-\frac{1}{8}+\text{⋯}.$  {eq:fs-id1169737832896}

Since ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}=\text{ln}(2),$ by the algebraic properties of convergent series,

${\displaystyle \sum_{n=1}^{\infty} \frac{1}{2}}{a}_{n}=\frac{1}{2}-\frac{1}{4}+\frac{1}{6}-\frac{1}{8}+\text{⋯}=\frac{1}{2}{\displaystyle \sum_{n=1}^{\infty} {a}_{n}}=\frac{\text{ln}\;2}{2}.$  {eq:fs-id1169738211821}

Now introduce the series ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}}$ such that for all $n\ge 1,$ ${b}_{2n-1}=0$ and ${b}_{2n}={a}_{n}\text{/}2.$ Then

${\displaystyle \sum_{n=1}^{\infty} {b}_{n}}=0+\frac{1}{2}+0-\frac{1}{4}+0+\frac{1}{6}+0-\frac{1}{8}+\text{⋯}=\frac{\text{ln}\;2}{2}.$  {eq:fs-id1169738080215}

Then using the algebraic limit properties of convergent series, since ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ and ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}}$ converge, the series ${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}+{b}_{n})}$ converges and

${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}+{b}_{n})}={\displaystyle \sum_{n=1}^{\infty} {a}_{n}}+{\displaystyle \sum_{n=1}^{\infty} {b}_{n}}=\text{ln}\;2+\frac{\text{ln}\;2}{2}=\frac{3\;\text{ln}\;2}{2}.$  {eq:fs-id1169737934790}

Now adding the corresponding terms, ${a}_{n}$ and ${b}_{n},$ we see that

$\begin{array}{ll}\sum_{n=1}^{\infty} ({a}_{n}+{b}_{n}) & =(1+0)+(-\frac{1}{2}+\frac{1}{2})+(\frac{1}{3}+0)+(-\frac{1}{4}-\frac{1}{4})+(\frac{1}{5}+0)+(-\frac{1}{6}+\frac{1}{6}) \\ \; & \; \\ & \hspace{1.5em}+(\frac{1}{7}+0)+(-\frac{1}{8}-\frac{1}{8})+\text{⋯} \\ & =1+\frac{1}{3}-\frac{1}{2}+\frac{1}{5}+\frac{1}{7}-\frac{1}{4}+\text{⋯}.\end{array}$  {eq:fs-id1169738228421}

We notice that the series on the right side of the equal sign is a rearrangement of the alternating harmonic series. Since ${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}+{b}_{n})}=3\;\text{ln}(2)\text{/}2,$ we conclude that

$1+\frac{1}{3}-\frac{1}{2}+\frac{1}{5}+\frac{1}{7}-\frac{1}{4}+\text{⋯}=\frac{3\;\text{ln}(2)}{2}.$  {eq:fs-id1169737162164}

Therefore, we have found a rearrangement of the alternating harmonic series having the desired property.
:::
:::

#### Key Concepts {section:key-concepts}
- For an alternating series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n},$ if ${b}_{k+1}\le {b}_{k}$ for all $k$ and ${b}_{k}\to 0$ as $k\to \infty ,$ the alternating series converges.
- If $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges, then $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges.

#### Key Equations {section:key-equations}

> TABLE {tab:eip-523} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Alternating series** | ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}{b}_{n}}={b}_{1}-{b}_{2}+{b}_{3}-{b}_{4}+\text{⋯}\;\text{or}$<br> ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}{b}_{n}}=\text{−}{b}_{1}+{b}_{2}-{b}_{3}+{b}_{4}-\text{⋯}$ |

##  {section:section-exercises}
State whether each of the following series converges absolutely, conditionally, or not at all.

:::exercise {fs-id1169737927682} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{n}{n+3}$
:::

:::exercise {fs-id1169738082378} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{\sqrt{n}+1}{\sqrt{n}+3}$
SOLUTION:
Does not converge by divergence test. Terms do not tend to zero.
:::

:::exercise {fs-id1169738082443} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{1}{\sqrt{n+3}}$
:::

:::exercise {fs-id1169737162038} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{\sqrt{n+3}}{n}$
SOLUTION:
Converges conditionally by alternating series test, since $\sqrt{n+3}\text{/}n$ is decreasing. Does not converge absolutely by comparison with *p*-series, $p=1\text{/}2.$
:::

:::exercise {fs-id1169737930804} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{1}{n\text{!}}$
:::

:::exercise {fs-id1169737930882} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{{3}^{n}}{n\text{!}}$
SOLUTION:
Converges absolutely by limit comparison to ${3}^{n}\text{/}{4}^{n},$ for example.
:::

:::exercise {fs-id1169738233606} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{(\frac{n-1}{n})}^{n}$
:::

:::exercise {fs-id1169738244409} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{(\frac{n+1}{n})}^{n}$
SOLUTION:
Diverges by divergence test since $\lim_{n\to \infty}|{a}_{n}|=e.$
:::

:::exercise {fs-id1169737285022} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{\text{sin}}^{2}n$
:::

:::exercise {fs-id1169737285077} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{\text{cos}}^{2}n$
SOLUTION:
Does not converge. Terms do not tend to zero.
:::

:::exercise {fs-id1169738171187} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{\text{sin}}^{2}(1\text{/}n)$
:::

:::exercise {fs-id1169737933512} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{\text{cos}}^{2}(1\text{/}n)$
SOLUTION:
$\lim_{n\to \infty}{\text{cos}}^{2}(1\text{/}n)=1.$ Diverges by divergence test.
:::

:::exercise {fs-id1169738234399} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{ln}(1\text{/}n)$
:::

:::exercise {fs-id1169738234461} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\text{ln}(1+\frac{1}{n})$
SOLUTION:
Converges by alternating series test.
:::

:::exercise {fs-id1169737214894} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{{n}^{2}}{1+{n}^{4}}$
:::

:::exercise {fs-id1169737214974} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}\frac{{n}^{e}}{1+{n}^{\pi}}$
SOLUTION:
Converges conditionally by alternating series test. Does not converge absolutely by limit comparison with *p*-series, $p=\pi -e$
:::

:::exercise {fs-id1169737160690} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{2}^{1\text{/}n}$
:::

:::exercise {fs-id1169737160747} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{n}^{1\text{/}n}$
SOLUTION:
Diverges; terms do not tend to zero.
:::

:::exercise {fs-id1169738080352} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}(1-{n}^{1\text{/}n})$ (*Hint:* ${n}^{1\text{/}n}\approx 1+\text{ln}(n)\text{/}n$ for large $n.)$
:::

:::exercise {fs-id1169738226127} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}n(1-\text{cos}(\frac{1}{n}))$ (*Hint:* $\text{cos}(1\text{/}n)\approx 1-1\text{/}{n}^{2}$ for large $n.)$
SOLUTION:
Converges by alternating series test. Does not converge absolutely by limit comparison with harmonic series.
:::

:::exercise {fs-id1169737894446} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}(\sqrt{n+1}-\sqrt{n})$ (*Hint:* Rationalize the numerator.)
:::

:::exercise {fs-id1169737227792} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}(\frac{1}{\sqrt{n}}-\frac{1}{\sqrt{n+1}})$ (*Hint:* Find common denominator then rationalize numerator.)
SOLUTION:
Converges absolutely by limit comparison with *p*-series, $p=3\text{/}2,$ after applying the hint.
:::

:::exercise {fs-id1169737227893} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}(\text{ln}(n+1)-\text{ln}\;n)$
:::

:::exercise {fs-id1169737298487} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}n({\text{tan}}^{−1}(n+1)-{\text{tan}}^{−1}n)$ (*Hint:* Use Mean Value Theorem.)
SOLUTION:
Converges by alternating series test since $n({\text{tan}}^{−1}(n+1)\text{−}{\text{tan}}^{−1}n)$ is decreasing to zero for large $n.$ Does not converge absolutely by limit comparison with harmonic series after applying hint.
:::

:::exercise {fs-id1169737168083} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}({(n+1)}^{2}-{n}^{2})$
:::

:::exercise {fs-id1169737234379} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}(\frac{1}{n}-\frac{1}{n+1})$
SOLUTION:
Converges absolutely, since ${a}_{n}=\frac{1}{n}-\frac{1}{n+1}$ are terms of a telescoping series.
:::

:::exercise {fs-id1169737234479} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\text{cos}(n\pi )}{n}$
:::

:::exercise {fs-id1169738153132} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{\text{cos}(n\pi )}{{n}^{1\text{/}n}}$
SOLUTION:
Terms do not tend to zero. Series diverges by divergence test.
:::

:::exercise {fs-id1169738153187} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}\;\text{sin}\;(\frac{n\pi}{2})$
:::

:::exercise {fs-id1169737201422} type= 
PROBLEM:
$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\text{sin}(n\pi \text{/}2)\text{sin}(1\text{/}n)$
SOLUTION:
Converges by alternating series test. Does not converge absolutely by limit comparison with harmonic series.
:::
In each of the following problems, use the estimate $|{R}_{N}|\le {b}_{N+1}$ to find a value of $N$ that guarantees that the sum of the first $N$ terms of the alternating series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}$ differs from the infinite sum by at most the given error. Calculate the partial sum ${S}_{N}$ for this $N.$

:::exercise {fs-id1169737174610} type= 
PROBLEM:
**[T]** ${b}_{n}=1\text{/}n,$ error $<{10}^{−5}$
:::

:::exercise {fs-id1169737160514} type= 
PROBLEM:
**[T]** ${b}_{n}=1\text{/}\text{ln}(n),$ $n\ge 2,$ error $<{10}^{−1}$
SOLUTION:
$\text{ln}(N+1)>10,$ $N+1>{e}^{10},$ $N\ge 22026;$ ${S}_{22026}=–0.9743\text{…}$
:::

:::exercise {fs-id1169737192226} type= 
PROBLEM:
**[T]** ${b}_{n}=1\text{/}\sqrt{n},$ error $<{10}^{−3}$
:::

:::exercise {fs-id1169737248635} type= 
PROBLEM:
**[T]** ${b}_{n}=1\text{/}{2}^{n},$ error $<{10}^{−6}$
SOLUTION:
${2}^{N+1}>{10}^{6}$ or $N+1>6\;\text{ln}(10)\text{/}\text{ln}(2)=19.93.$ or $N\ge 19;$ ${S}_{19}=0.333333969\text{…}$
:::

:::exercise {fs-id1169738153438} type= 
PROBLEM:
**[T]** ${b}_{n}=\text{ln}(1+\frac{1}{n}),$ error $<{10}^{−3}$
:::

:::exercise {fs-id1169737286637} type= 
PROBLEM:
**[T]** ${b}_{n}=1\text{/}{n}^{2},$ error $<{10}^{−6}$
SOLUTION:
${(N+1)}^{2}>{10}^{6}$ or $N>999;$ ${S}_{1000}\approx 0.822466.$
:::
For the following exercises, indicate whether each of the following statements is true or false. If the statement is false, provide an example in which it is false.

:::exercise {fs-id1169738056344} type= 
PROBLEM:
If ${b}_{n}\ge 0$ is decreasing and $\lim_{n\to \infty}{b}_{n}=0,$ then ${\displaystyle \sum_{n=1}^{\infty} ({b}_{2n-1}-{b}_{2n})}$ converges absolutely.
:::

:::exercise {fs-id1169737895447} type= 
PROBLEM:
If ${b}_{n}\ge 0$ is decreasing, then ${\displaystyle \sum_{n=1}^{\infty} ({b}_{2n-1}-{b}_{2n})}$ converges absolutely.
SOLUTION:
True. ${b}_{n}$ need not tend to zero since if ${c}_{n}={b}_{n}-\text{lim}\;{b}_{n},$ then ${c}_{2n-1}-{c}_{2n}={b}_{2n-1}-{b}_{2n}.$
:::

:::exercise {fs-id1169738193743} type= 
PROBLEM:
If ${b}_{n}\ge 0$ and $\lim_{n\to \infty}{b}_{n}=0$ then ${\displaystyle \sum_{n=1}^{\infty} (\frac{1}{2}(}{b}_{3n-2}+{b}_{3n-1})\text{−}{b}_{3n})$ converges.
:::

:::exercise {fs-id1169737169445} type= 
PROBLEM:
If ${b}_{n}\ge 0$ is decreasing and ${\displaystyle \sum_{n=1}^{\infty} ({b}_{3n-2}+{b}_{3n-1}-{b}_{3n})}$ converges then ${\displaystyle \sum_{n=1}^{\infty} {b}_{3n-2}}$ converges.
SOLUTION:
True. ${b}_{3n-1}-{b}_{3n}\ge 0,$ so convergence of ${\displaystyle \sum {b}_{3n-2}}$ follows from the comparison test.
:::

:::exercise {fs-id1169738115247} type= 
PROBLEM:
If ${b}_{n}\ge 0$ is decreasing and ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}{b}_{n}}$ converges conditionally but not absolutely, then ${b}_{n}$ does not tend to zero.
:::

:::exercise {fs-id1169737300742} type= 
PROBLEM:
Let ${a}_{n}^{+}={a}_{n}$ if ${a}_{n}\ge 0$ and ${a}_{n}^{-}=\text{−}{a}_{n}$ if ${a}_{n}<0.$ (Also, ${a}_{n}^{+}=0\;\text{if}\;{a}_{n}<0$ and ${a}_{n}^{-}=0\;\text{if}\;{a}_{n}\ge 0.)$ If ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges conditionally but not absolutely, then neither ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}^{+}}$ nor ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}^{-}}$ converge.
SOLUTION:
True. If one converges, then so must the other, implying absolute convergence.
:::

:::exercise {fs-id1169738164811} type= 
PROBLEM:
Suppose that ${a}_{n}$ is a sequence of positive real numbers and that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges.
Suppose that ${b}_{n}$ is an arbitrary sequence of ones and minus ones. Does ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{b}_{n}$ necessarily converge?
:::

:::exercise {fs-id1169738164901} type= 
PROBLEM:
Suppose that ${a}_{n}$ is a sequence such that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{b}_{n}$ converges for every possible sequence ${b}_{n}$ of zeros and ones. Does ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converge absolutely?
SOLUTION:
Yes. Take ${b}_{n}=1$ if ${a}_{n}\ge 0$ and ${b}_{n}=0$ if ${a}_{n}<0.$ Then ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{b}_{n}={\displaystyle \underset{n:{a}_{n}\ge 0}{\sum}{a}_{n}}$ converges. Similarly, one can show ${\displaystyle \underset{n:{a}_{n}<0}{\sum}{a}_{n}}$ converges. Since both series converge, the series must converge absolutely.
:::
The following series do not satisfy the hypotheses of the alternating series test as stated.
In each case, state which hypothesis is not satisfied. State whether the series converges absolutely.

:::exercise {fs-id1169737255493} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{\text{sin}}^{2}n}{n}}$
:::

:::exercise {fs-id1169737255554} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{\text{cos}}^{2}n}{n}}$
SOLUTION:
Not decreasing. Does not converge absolutely.
:::

:::exercise {fs-id1169737987462} type= 
PROBLEM:
$1+\frac{1}{2}-\frac{1}{3}-\frac{1}{4}+\frac{1}{5}+\frac{1}{6}-\frac{1}{7}-\frac{1}{8}+\text{⋯}$
:::

:::exercise {fs-id1169737155716} type= 
PROBLEM:
$1+\frac{1}{2}-\frac{1}{3}+\frac{1}{4}+\frac{1}{5}-\frac{1}{6}+\frac{1}{7}+\frac{1}{8}-\frac{1}{9}+\text{⋯}$
SOLUTION:
Not alternating. Can be expressed as ${\displaystyle \sum_{n=1}^{\infty} (\frac{1}{3n-2}+\frac{1}{3n-1}-\frac{1}{3n})},$ which diverges by comparison with ${\displaystyle \sum \frac{1}{3n-2}}.$
:::

:::exercise {fs-id1169737202968} type= 
PROBLEM:
Show that the alternating series $1-\frac{1}{2}+\frac{1}{2}-\frac{1}{4}+\frac{1}{3}-\frac{1}{6}+\frac{1}{4}-\frac{1}{8}+\text{⋯}$ does
not converge. What hypothesis of the alternating series test is not met?
:::

:::exercise {fs-id1169737207550} type= 
PROBLEM:
Suppose that ${\displaystyle \sum {a}_{n}}$ converges absolutely. Show that the series consisting of the positive terms ${a}_{n}$ also converges.
SOLUTION:
Let ${a}^{+}{}_{n}={a}_{n}$ if ${a}_{n}\ge 0$ and ${a}^{+}{}_{n}=0$ if ${a}_{n}<0.$ Then ${a}^{+}{}_{n}\le |{a}_{n}|$ for all $n$ so the sequence of partial sums of ${a}^{+}{}_{n}$ is increasing and bounded above by the sequence of partial sums of $|{a}_{n}|,$ which converges; hence, ${\displaystyle \sum_{n=1}^{\infty} {a}^{+}{}_{n}}$ converges.
:::

:::exercise {fs-id1169737228006} type= 
PROBLEM:
Show that the alternating series $\frac{2}{3}-\frac{3}{5}+\frac{4}{7}-\frac{5}{9}+\text{⋯}$ does not converge. What hypothesis of the alternating series test is not met?
:::

:::exercise {fs-id1169737228064} type= 
PROBLEM:
The formula $\text{cos}\;\theta =1-\frac{{\theta}^{2}}{2\text{!}}+\frac{{\theta}^{4}}{4\text{!}}-\frac{{\theta}^{6}}{6\text{!}}+\text{⋯}$ will be derived in the next chapter. Use the remainder $|{R}_{N}|\le {b}_{N+1}$ to find a bound for the error in estimating $\text{cos}\;\theta$ by the fifth partial sum $1-{\theta}^{2}\text{/}2\text{!}+{\theta}^{4}\text{/}4\text{!}\text{−}{\theta}^{6}\text{/}6\text{!}+{\theta}^{8}\text{/}8\text{!}$ for $\theta =1,$ $\theta =\pi \text{/}6,$ and $\theta =\pi .$
SOLUTION:
For $N=5$ one has $|{R}_{N}|{b}_{6}={\theta}^{10}\text{/}10\text{!}.$ When $\theta =1,$ ${R}_{5}\le 1\text{/}10\text{!}\approx 2.75\;\times \;{10}^{−7}.$ When $\theta =\pi \text{/}6,$ ${R}_{5}\le {(\pi \text{/}6)}^{10}\text{/}10\text{!}\approx 4.26\;\times \;{10}^{−10}.$ When $\theta =\pi ,$ ${R}_{5}\le {\pi}^{10}\text{/}10\text{!}=0.0258.$
:::

:::exercise {fs-id1169738167847} type= 
PROBLEM:
The formula $\text{sin}\;\theta =\theta -\frac{{\theta}^{3}}{3\text{!}}+\frac{{\theta}^{5}}{5\text{!}}-\frac{{\theta}^{7}}{7\text{!}}+\text{⋯}$ will be derived in the next chapter. Use the remainder $|{R}_{N}|\le {b}_{N+1}$ to find a bound for the error in estimating $\text{sin}\;\theta$ by the fifth partial sum $\theta -{\theta}^{3}\text{/}3\text{!}+{\theta}^{5}\text{/}5\text{!}\text{−}{\theta}^{7}\text{/}7\text{!}+{\theta}^{9}\text{/}9\text{!}$ for $\theta =1,$ $\theta =\pi \text{/}6,$ and $\theta =\pi .$
:::

:::exercise {fs-id1169737167800} type= 
PROBLEM:
How many terms in $\text{cos}\;\theta =1-\frac{{\theta}^{2}}{2\text{!}}+\frac{{\theta}^{4}}{4\text{!}}-\frac{{\theta}^{6}}{6\text{!}}+\text{⋯}$ are needed to approximate $\text{cos}\;1$ accurate to an error of at most $0.00001\text{?}$
SOLUTION:
Let ${b}_{n}=1\text{/}(2n-2)\text{!}.$ Then ${R}_{N}\le 1\text{/}(2N)\text{!}<0.00001$ when $(2N)\text{!}>{10}^{5}$ or $N=5$ and $1-\frac{1}{2\text{!}}+\frac{1}{4\text{!}}-\frac{1}{6\text{!}}+\frac{1}{8\text{!}}=0.540325\text{…},$ whereas $\text{cos}\;1=0.5403023\text{…}$
:::

:::exercise {fs-id1169737231421} type= 
PROBLEM:
How many terms in $\text{sin}\;\theta =\theta -\frac{{\theta}^{3}}{3\text{!}}+\frac{{\theta}^{5}}{5\text{!}}-\frac{{\theta}^{7}}{7\text{!}}+\text{⋯}$ are needed to approximate $\text{sin}\;1$ accurate to an error of at most $0.00001\text{?}$
:::

:::exercise {fs-id1169737195168} type= 
PROBLEM:
Sometimes the alternating series ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}}{b}_{n}$ converges to a certain fraction of an absolutely convergent series ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}}$ at a faster rate. Given that ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{2}}}=\frac{{\pi}^{2}}{6},$ find $12=1-\frac{1}{{2}^{2}}+\frac{1}{{3}^{2}}-\frac{1}{{4}^{2}}+\text{⋯}.$ Which of the series $6{\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{2}}}$ and $S{\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n-1}}{{n}^{2}}}$ gives a better estimation of ${\pi}^{2}$ using $1000$ terms?
SOLUTION:
Let $T={\displaystyle \sum \frac{1}{{n}^{2}}}.$ Then $T-S=\frac{1}{2}T,$ so $S=T\text{/}2.$ $\sqrt{6\;\times \;{\displaystyle \sum_{n=1}^{1000} 1\text{/}{n}^{2}}}=3.140638\text{…};$ $\sqrt{12\;\times \;{\displaystyle \sum_{n=1}^{1000} {(−1)}^{n-1}\text{/}{n}^{2}}}=3.141591\text{…};$
$\pi =3.141592\text{…}.$ The alternating series is more accurate for $1000$ terms.
:::
The following alternating series converge to given multiples of $\pi .$ Find the value of $N$ predicted by the remainder estimate such that the $N\text{th}$ partial sum of the series accurately approximates the left-hand side to within the given error. Find the minimum $N$ for which the error bound holds, and give the desired approximate value in each case. Up to $15$ decimals places, $\pi =3.141592653589793\text{…}.$

:::exercise {fs-id1169737934338} type= 
PROBLEM:
**[T]** $\frac{\pi}{4}={\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{2n+1}},$ error $<0.0001$
:::

:::exercise {fs-id1169737236587} type= 
PROBLEM:
**[T]** $\frac{\pi}{\sqrt{12}}={\displaystyle \sum_{k=0}^{\infty} \frac{{(−3)}^{\text{−}k}}{2k+1}},$ error $<0.0001$
SOLUTION:
$N=6,$ ${S}_{N}=0.9068$
:::

:::exercise {fs-id1169738216132} type= 
PROBLEM:
**[T]** The series ${\displaystyle \sum_{n=0}^{\infty} \frac{\text{sin}(x+\pi n)}{x+\pi n}}$ plays an important role in signal processing. Show that ${\displaystyle \sum_{n=0}^{\infty} \frac{\text{sin}(x+\pi n)}{x+\pi n}}$ converges whenever $0<x<\pi .$ (*Hint:* Use the formula for the sine of a sum of angles.)
:::

:::exercise {fs-id1169737785730} type= 
PROBLEM:
**[T]** If ${\displaystyle \sum_{n=1}^{N} {(−1)}^{n-1}\frac{1}{n}}\to \text{ln}\;2,$ what is $1+\frac{1}{3}+\frac{1}{5}-\frac{1}{2}-\frac{1}{4}-\frac{1}{6}+\frac{1}{7}+\frac{1}{9}+\frac{1}{11}-\frac{1}{8}-\frac{1}{10}-\frac{1}{12}+\text{⋯}\text{?}$
SOLUTION:
$\text{ln}(2).$ The $3n\text{th}$ partial sum is the same as that for the alternating harmonic series.
:::

:::exercise {fs-id1169738079245} type= 
PROBLEM:
**[T]** Plot the series ${\displaystyle \sum_{n=1}^{100} \frac{\text{cos}(2\pi nx)}{n}}$ for $0\le x<1.$ Explain why ${\displaystyle \sum_{n=1}^{100} \frac{\text{cos}(2\pi nx)}{n}}$ diverges when $x=0,1.$ How does the series behave for other $x\text{?}$
:::

:::exercise {fs-id1169738236406} type= 
PROBLEM:
**[T]** Plot the series ${\displaystyle \sum_{n=1}^{100} \frac{\text{sin}(2\pi nx)}{n}}$ for $0\le x<1$ and comment on its behavior
SOLUTION:
The series jumps rapidly near the endpoints. For $x$ away from the endpoints, the graph looks like $\pi (1\text{/}2-x).$

> IMAGE {img:fs-id1169738153310} src=../../media/CNX_Calc_Figure_09_05_202.jpg
> alt: This shows a function in quadrants 1 and 4 that begins at (0, 0), sharply increases to just below 1.5 close to the y axis, decreases linearly, crosses the x axis at 0.5, continues to decrease linearly, and sharply increases just before 1 to 0.

:::

:::exercise {fs-id1169738153327} type= 
PROBLEM:
**[T]** Plot the series ${\displaystyle \sum_{n=1}^{100} \frac{\text{cos}(2\pi nx)}{{n}^{2}}}$ for $0\le x<1$ and describe its graph.
:::

:::exercise {fs-id1169737923754} type= 
PROBLEM:
**[T]** The alternating harmonic series converges because of cancellation among its terms. Its sum is known because the cancellation can be described explicitly. A random harmonic series is one of the form ${\displaystyle \sum_{n=1}^{\infty} \frac{{S}_{n}}{n}},$ where ${s}_{n}$ is a randomly generated sequence of $\pm 1\text{'s}$ in which the values $\pm 1$ are equally likely to occur. Use a random number generator to produce $1000$ random $\pm 1\text{s}$ and plot the partial sums ${S}_{N}={\displaystyle \sum_{n=1}^{N} \frac{{s}_{n}}{n}}$ of your random harmonic sequence for $N=1$ to $1000.$ Compare to a plot of the first $1000$ partial sums of the harmonic series.
SOLUTION:
Here is a typical result. The top curve consists of partial sums of the harmonic series. The bottom curve plots partial sums of a random harmonic series.

> IMAGE {img:fs-id1169737229467} src=../../media/CNX_Calc_Figure_09_05_204.jpg
> alt: This shows two curves. The top is an increasing concave down curve. The bottom is a jagged, random harmonic series plot that stays close to 0.

:::

:::exercise {fs-id1169737229483} type= 
PROBLEM:
**[T]** Estimates of ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{2}}}$ can be *accelerated* by writing its partial sums as ${\displaystyle \sum_{n=1}^{N} \frac{1}{{n}^{2}}}={\displaystyle \sum_{n=1}^{N} \frac{1}{n(n+1)}}+{\displaystyle \sum_{n=1}^{N} \frac{1}{{n}^{2}(n+1)}}$ and recalling that ${\displaystyle \sum_{n=1}^{N} \frac{1}{n(n+1)}}=1-\frac{1}{N+1}$ converges to one as $N\to \infty .$ Compare the estimate of ${\pi}^{2}\text{/}6$ using the sums ${\displaystyle \sum_{n=1}^{1000} \frac{1}{{n}^{2}}}$ with the estimate using $1+{\displaystyle \sum_{n=1}^{1000} \frac{1}{{n}^{2}(n+1)}}.$
:::

:::exercise {fs-id1169737152003} type= 
PROBLEM:
**[T]** The {index:*Euler transform*} rewrites $S={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}}{b}_{n}$ as $S={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}}{2}^{\text{−}n-1}{\displaystyle \sum_{m=0}^{n} (\begin{array}{l}n \\ m\end{array})}{b}_{n-m}.$ For the alternating harmonic series, it takes the form $\text{ln}(2)={\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n-1}}{n}}={\displaystyle \sum_{n=1}^{\infty} \frac{1}{n{2}^{n}}}.$ Compute partial sums of ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n{2}^{n}}}$ until they approximate $\text{ln}(2)$ accurate to within $0.0001.$ How many terms are needed? Compare this answer to the number of terms of the alternating harmonic series are needed to estimate $\text{ln}(2).$
SOLUTION:
By the alternating series test, $|{S}_{n}-S|\le {b}_{n+1},$ so one needs ${10}^{4}$ terms of the alternating harmonic series to estimate $\text{ln}(2)$ to within $0.0001.$ The first $10$ partial sums of the series ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n{2}^{n}}}$ are (up to four decimals) $0.5000,0.6250,0.6667,0.6823,0.6885,0.6911,0.6923,0.6928,0.6930,0.6931$ and the tenth partial sum is within $0.0001$ of $\text{ln}(2)=0.6931\text{…}.$
:::

:::exercise {fs-id1169738071328} type= 
PROBLEM:
**[T]** In the text it was stated that a conditionally convergent series can be rearranged to converge to any number. Here is a slightly simpler, but similar, fact. If ${a}_{n}\ge 0$ is such that ${a}_{n}\to 0$ as $n\to \infty$ but ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ diverges, then, given any number $A$ there is a sequence ${s}_{n}$ of $\pm 1\text{'s}$ such that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}{s}_{n}\to A.$ Show this for $A>0$ as follows.
a. Recursively define ${s}_{n}$ by ${s}_{n}=1$ if ${S}_{n-1}={\displaystyle \sum_{k=1}^{n-1} {a}_{k}}{s}_{k}<A$ and ${s}_{n}=−1$ otherwise.
b. Explain why eventually ${S}_{n}\ge A,$ and for any $m$ larger than this $n,$ $A-{a}_{m}\le {S}_{m}\le A+{a}_{m}.$
c. Explain why this implies that ${S}_{n}\to A$ as $n\to \infty .$
:::

## Glossary
- {def} **absolute convergence**: if the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ converges, the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is said to converge absolutely
- {def} **alternating series**: a series of the form $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n+1}{b}_{n}$ or $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}{b}_{n},$ where ${b}_{n}\ge 0,$ is called an alternating series
- {def} **alternating series test**: for an alternating series of either form, if ${b}_{n+1}\le {b}_{n}$ for all integers $n\ge 1$ and ${b}_{n}\to 0,$ then an alternating series converges
- {def} **conditional convergence**: if the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ converges, but the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}|{a}_{n}|$ diverges, the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is said to converge conditionally

# Infinite Series

## Learning Objectives {section:learning-objectives}
- Explain the meaning of the sum of an infinite series.
- Calculate the sum of a geometric series.
- Evaluate a telescoping series.

We have seen that a sequence is an ordered set of terms. If you add these terms together, you get a series. In this section we define an infinite series and show how series are related to sequences. We also define what it means for a series to converge or diverge. We introduce one of the most important types of series: the geometric series. We will use geometric series in the next chapter to write certain functions as polynomials with an infinite number of terms. This process is important because it allows us to evaluate, differentiate, and integrate complicated functions by using polynomials that are easier to handle. We also discuss the harmonic series, arguably the most interesting divergent series because it just fails to converge.

## Sums and Series
An infinite series is a sum of infinitely many terms and is written in the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}.$  {eq:fs-id1169737839089}

But what does this mean? We cannot add an infinite number of terms in the same way we can add a finite number of terms. Instead, the value of an infinite series is defined in terms of the *limit* of partial sums. A partial sum of an infinite series is a finite sum of the form

${\displaystyle \sum_{n=1}^{k} {a}_{n}}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k}.$  {eq:fs-id1169737906700}

To see how we use partial sums to evaluate infinite series, consider the following example. Suppose oil is seeping into a lake such that $1000$ gallons enters the lake the first week. During the second week, an additional $500$ gallons of oil enters the lake. The third week, $250$ more gallons enters the lake. Assume this pattern continues such that each week half as much oil enters the lake as did the previous week. If this continues forever, what can we say about the amount of oil in the lake? Will the amount of oil continue to get arbitrarily large, or is it possible that it approaches some finite amount? To answer this question, we look at the amount of oil in the lake after $k$ weeks. Letting ${S}_{k}$ denote the amount of oil in the lake (measured in thousands of gallons) after $k$ weeks, we see that

$\begin{array}{l}{S}_{1}=1 \\ {S}_{2}=1+0.5=1+\frac{1}{2} \\ {S}_{3}=1+0.5+0.25=1+\frac{1}{2}+\frac{1}{4} \\ {S}_{4}=1+0.5+0.25+0.125=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8} \\ {S}_{5}=1+0.5+0.25+0.125+0.0625=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}.\end{array}$  {eq:fs-id1169738226744}

Looking at this pattern, we see that the amount of oil in the lake (in thousands of gallons) after $k$ weeks is

${S}_{k}=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}+\text{⋯}+\frac{1}{{2}^{k-1}}={\displaystyle \sum_{n=1}^{k} {(\frac{1}{2})}^{n-1}}.$  {eq:fs-id1169738113913}

We are interested in what happens as $k\to \infty .$ Symbolically, the amount of oil in the lake as $k\to \infty$ is given by the infinite series

${\displaystyle \sum_{n=1}^{\infty} {(\frac{1}{2})}^{n-1}}=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}+\text{⋯}.$  {eq:fs-id1169738044938}

At the same time, as $k\to \infty ,$ the amount of oil in the lake can be calculated by evaluating $\lim_{k\to \infty}{S}_{k}.$ Therefore, the behavior of the infinite series can be determined by looking at the behavior of the sequence of partial sums $\{{S}_{k}\}.$ If the sequence of partial sums $\{{S}_{k}\}$ converges, we say that the infinite series converges, and its sum is given by $\lim_{k\to \infty}{S}_{k}.$ If the sequence $\{{S}_{k}\}$ diverges, we say the infinite series diverges. We now turn our attention to determining the limit of this sequence $\{{S}_{k}\}.$
First, simplifying some of these partial sums, we see that

$\begin{array}{l}{S}_{1}=1 \\ {S}_{2}=1+\frac{1}{2}=\frac{3}{2} \\ {S}_{3}=1+\frac{1}{2}+\frac{1}{4}=\frac{7}{4} \\ {S}_{4}=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}=\frac{15}{8} \\ {S}_{5}=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}=\frac{31}{16}.\end{array}$  {eq:fs-id1169737757878}

Plotting some of these values in [ref:CNX_Calc_Figure_09_02_001], it appears that the sequence $\{{S}_{k}\}$ could be approaching 2.

> FIGURE {fig:CNX_Calc_Figure_09_02_001} src=../../media/CNX_Calc_Figure_09_02_001.jpg
> alt: This is a graph in quadrant 1with the x and y axes labeled n and S_n, respectively. From 1 to 5, points are plotted. They increase and seem to converge to 2 and n goes to infinity.
> caption: The graph shows the sequence of partial sums $\{{S}_{k}\}.$ It appears that the sequence is approaching the value $2.$

Let’s look for more convincing evidence. In the following table, we list the values of ${S}_{k}$ for several values of $k.$

> TABLE {tab:fs-id1169737896803} cols=5 class=unnumbered
> summary: This is a table with two rows and five columns. The first row is labeled “k” and has the values 5, 10, 15, and 20. The second row is labeled “S_k” and has the values 1.9375, 1.998, 1.999939, and 1.999998.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| $k$ | $5$ | $10$ | $15$ | $20$ |
| ${S}_{k}$ | $1.9375$ | $1.998$ | $1.999939$ | $1.999998$ |

These data supply more evidence suggesting that the sequence $\{{S}_{k}\}$ converges to $2.$ Later we will provide an analytic argument that can be used to prove that $\lim_{k\to \infty}{S}_{k}=2.$ For now, we rely on the numerical and graphical data to convince ourselves that the sequence of partial sums does actually converge to $2.$ Since this sequence of partial sums converges to $2,$ we say the infinite series converges to $2$ and write

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n-1}=2.$  {eq:fs-id1169737845005}

Returning to the question about the oil in the lake, since this infinite series converges to $2,$ we conclude that the amount of oil in the lake will get arbitrarily close to $2000$ gallons as the amount of time gets sufficiently large.
This series is an example of a geometric series. We discuss geometric series in more detail later in this section. First, we summarize what it means for an infinite series to converge.

:::note [definition] Definition
An {term:infinite series} is an expression of the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}.$  {eq:fs-id1169738150202}

For each positive integer $k,$ the sum

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k}$  {eq:fs-id1169737841847}

is called the $k\text{th}$ {term:partial sum} of the infinite series. The partial sums form a sequence $\{{S}_{k}\}.$ If the sequence of partial sums converges to a real number $S,$ the infinite series converges. If we can describe the {term:convergence of a series} to $S,$ we call $S$ the sum of the series, and we write

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}=S.$  {eq:fs-id1169738111008}

If the sequence of partial sums diverges, we have the {term:divergence of a series}.
:::
Note that the index for a series need not begin with $n=1$ but can begin with any value. For example, the series

${{\displaystyle \sum_{n=1}^{\infty} (\frac{1}{2})}}^{n-1}$  {eq:fs-id1169737850303}

can also be written as

${{\displaystyle \sum_{n=0}^{\infty} (\frac{1}{2})}}^{n}\;\text{or}\;{{\displaystyle \sum_{n=5}^{\infty} (\frac{1}{2})}}^{n-5}.$  {eq:fs-id1169737142209}

Often it is convenient for the index to begin at $1,$ so if for some reason it begins at a different value, we can reindex by making a change of variables. For example, consider the series

${\displaystyle \sum_{n=2}^{\infty} \frac{1}{{n}^{2}}}.$  {eq:fs-id1169737806291}

By introducing the variable $m=n-1,$ so that $n=m+1,$ we can rewrite the series as

${\displaystyle \sum_{m=1}^{\infty} \frac{1}{{(m+1)}^{2}}}.$  {eq:fs-id1169737846917}

:::example {ex:fs-id1169738068351} Evaluating Limits of Sequences of Partial Sums

:::exercise {fs-id1169738148826} type= 
PROBLEM:
For each of the following series, use the sequence of partial sums to determine whether the series converges or diverges.
a. ${\displaystyle \sum_{n=1}^{\infty} \frac{n}{n+1}}$
b. ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}}$
c. ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n(n+1)}}$
SOLUTION:
a. The sequence of partial sums $\{{S}_{k}\}$ satisfies

$\begin{array}{l}{S}_{1}=\frac{1}{2} \\ {S}_{2}=\frac{1}{2}+\frac{2}{3} \\ {S}_{3}=\frac{1}{2}+\frac{2}{3}+\frac{3}{4} \\ {S}_{4}=\frac{1}{2}+\frac{2}{3}+\frac{3}{4}+\frac{4}{5}.\end{array}$  {eq:fs-id1169737796047}

Notice that each term added is greater than $1\text{/}2.$ As a result, we see that

$\begin{array}{l}{S}_{1}=\frac{1}{2} \\ {S}_{2}=\frac{1}{2}+\frac{2}{3}>\frac{1}{2}+\frac{1}{2}=2(\frac{1}{2}) \\ {S}_{3}=\frac{1}{2}+\frac{2}{3}+\frac{3}{4}>\frac{1}{2}+\frac{1}{2}+\frac{1}{2}=3(\frac{1}{2}) \\ {S}_{4}=\frac{1}{2}+\frac{2}{3}+\frac{3}{4}+\frac{4}{5}>\frac{1}{2}+\frac{1}{2}+\frac{1}{2}+\frac{1}{2}=4(\frac{1}{2}).\end{array}$  {eq:fs-id1169737700342}

From this pattern we can see that ${S}_{k}>k(\frac{1}{2})$ for every integer $k.$ Therefore, $\{{S}_{k}\}$ is unbounded and consequently, diverges. Therefore, the infinite series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}n\text{/}(n+1)$ diverges.
b. The sequence of partial sums $\{{S}_{k}\}$ satisfies

$\begin{array}{l}{S}_{1}=−1 \\ {S}_{2}=−1+1=0 \\ {S}_{3}=−1+1-1=−1 \\ {S}_{4}=−1+1-1+1=0.\end{array}$  {eq:fs-id1169738144263}

From this pattern we can see the sequence of partial sums is

$\{{S}_{k}\}=\{−1,0,−1,0\text{,…}\}.$  {eq:fs-id1169737790076}

Since this sequence diverges, the infinite series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(−1)}^{n}$ diverges.
c. The sequence of partial sums $\{{S}_{k}\}$ satisfies

$\begin{array}{l}{S}_{1}=\frac{1}{1\cdot 2}=\frac{1}{2} \\ {S}_{2}=\frac{1}{1\cdot 2}+\frac{1}{2\cdot 3}=\frac{1}{2}+\frac{1}{6}=\frac{2}{3} \\ {S}_{3}=\frac{1}{1\cdot 2}+\frac{1}{2\cdot 3}+\frac{1}{3\cdot 4}=\frac{1}{2}+\frac{1}{6}+\frac{1}{12}=\frac{3}{4} \\ {S}_{4}=\frac{1}{1\cdot 2}+\frac{1}{2\cdot 3}+\frac{1}{3\cdot 4}+\frac{1}{4\cdot 5}=\frac{4}{5} \\ {S}_{5}=\frac{1}{1\cdot 2}+\frac{1}{2\cdot 3}+\frac{1}{3\cdot 4}+\frac{1}{4\cdot 5}+\frac{1}{5\cdot 6}=\frac{5}{6}.\end{array}$  {eq:fs-id1169738064000}

From this pattern, we can see that the $k\text{th}$ partial sum is given by the explicit formula

${S}_{k}=\frac{k}{k+1}.$  {eq:fs-id1169737806522}

Since $k\text{/}(k+1)\to 1,$ we conclude that the sequence of partial sums converges, and therefore the infinite series converges to $1.$ We have

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n(n+1)}=1.$  {eq:fs-id1169737933604}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737822602} type= 
PROBLEM:
Determine whether the series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}(n+1)\text{/}n$ converges or diverges.
SOLUTION:
The series diverges because the $k\text{th}$ partial sum ${S}_{k}>k.$
COMMENTARY: Hint
Look at the sequence of partial sums.
:::
:::

### The Harmonic Series
A useful series to know about is the {term:harmonic series}. The harmonic series is defined as

$$ {\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\text{⋯}. $$  {eq:fs-id1169738057265}

This series is interesting because it diverges, but it diverges very slowly. By this we mean that the terms in the sequence of partial sums $\{{S}_{k}\}$ approach infinity, but do so very slowly. We will show that the series diverges, but first we illustrate the slow growth of the terms in the sequence $\{{S}_{k}\}$ in the following table.

> TABLE {tab:fs-id1169738150006} cols=7 class=unnumbered
> summary: This is a table with two rows and seven columns. The first row is labeled “k” and has the values 10, 100, 1000, 10,000, 100,000, and 1,000,000. The second row is labeled “S_k” and has the values 2.92897, 5.18738, 7.48547, 9.78761, 12.09015, and 14.39273.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $k$ | $10$ | $100$ | $1000$ | $10,000$ | $100,000$ | $1,000,000$ |
| ${S}_{k}$ | $2.92897$ | $5.18738$ | $7.48547$ | $9.78761$ | $12.09015$ | $14.39273$ |

Even after $1,000,000$ terms, the partial sum is still relatively small. From this table, it is not clear that this series actually diverges. However, we can show analytically that the sequence of partial sums diverges, and therefore the series diverges.
To show that the sequence of partial sums diverges, we show that the sequence of partial sums is unbounded. We begin by writing the first several partial sums:

$\begin{array}{l}{S}_{1}=1 \\ {S}_{2}=1+\frac{1}{2} \\ {S}_{3}=1+\frac{1}{2}+\frac{1}{3} \\ {S}_{4}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}.\end{array}$  {eq:fs-id1169737292630}

Notice that for the last two terms in ${S}_{4},$

$\frac{1}{3}+\frac{1}{4}>\frac{1}{4}+\frac{1}{4}.$  {eq:fs-id1169738078297}

Therefore, we conclude that

${S}_{4}>1+\frac{1}{2}+(\frac{1}{4}+\frac{1}{4})=1+\frac{1}{2}+\frac{1}{2}=1+2(\frac{1}{2}).$  {eq:fs-id1169738250171}

Using the same idea for ${S}_{8},$ we see that

$\begin{array}{rl}{S}_{8} & =1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\frac{1}{6}+\frac{1}{7}+\frac{1}{8}>1+\frac{1}{2}+(\frac{1}{4}+\frac{1}{4})+(\frac{1}{8}+\frac{1}{8}+\frac{1}{8}+\frac{1}{8}) \\ & =1+\frac{1}{2}+\frac{1}{2}+\frac{1}{2}=1+3(\frac{1}{2}).\end{array}$  {eq:fs-id1169737809241}

From this pattern, we see that ${S}_{1}=1,$ ${S}_{2}=1+1\text{/}2,$ ${S}_{4}>1+2(1\text{/}2),$ and ${S}_{8}>1+3(1\text{/}2).$ More generally, it can be shown that ${S}_{{2}^{j}}>1+j(1\text{/}2)$ for all $j>1.$ Since $1+j(1\text{/}2)\to \infty ,$ we conclude that the sequence $\{{S}_{k}\}$ is unbounded and therefore diverges. In the previous section, we stated that convergent sequences are bounded. Consequently, since $\{{S}_{k}\}$ is unbounded, it diverges. Thus, the harmonic series diverges.

### Algebraic Properties of Convergent Series
Since the sum of a convergent infinite series is defined as a limit of a sequence, the algebraic properties for series listed below follow directly from the algebraic properties for sequences.

:::note [theorem] Algebraic Properties of Convergent Series
Let $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}$ be convergent series. Then the following algebraic properties hold.
1. The series ${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}+{b}_{n})}$ converges and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}({a}_{n}+{b}_{n})=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}+\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}.$ (Sum Rule)
2. The series ${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}-{b}_{n})}$ converges and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}({a}_{n}-{b}_{n})=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}-\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{b}_{n}.$ (Difference Rule)
3. For any real number $c,$ the series ${\displaystyle \sum_{n=1}^{\infty} c}{a}_{n}$ converges and $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}c{a}_{n}=c\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}.$ (Constant Multiple Rule)
:::

:::example {ex:fs-id1169738055547} Using Algebraic Properties of Convergent Series

:::exercise {fs-id1169738055550} type= 
PROBLEM:
Evaluate

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[\frac{3}{n(n+1)}+{(\frac{1}{2})}^{n-2}].$  {eq:fs-id1169738058911}

SOLUTION:
We showed earlier that

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n(n+1)}=1$  {eq:fs-id1169737949111}

and

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n-1}=2.$  {eq:fs-id1169738189920}

Since both of those series converge, we can apply the properties of [ref:fs-id1169738189943] to evaluate

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[\frac{3}{n(n+1)}+{(\frac{1}{2})}^{n-2}].$  {eq:fs-id1169737355719}

Using the sum rule, write

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[\frac{3}{n(n+1)}+{(\frac{1}{2})}^{n-2}]=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{3}{n(n+1)}\overset{\infty}{\underset{n=1}{{\displaystyle +\sum}}}{(\frac{1}{2})}^{n-2}.$  {eq:fs-id1169738146275}

Then, using the constant multiple rule and the sums above, we can conclude that

$\begin{array}{ll}\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{3}{n(n+1)}+\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n-2} & =3\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n(n+1)}+{(\frac{1}{2})}^{−1}\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n-1} \\ & =3(1)+{(\frac{1}{2})}^{−1}(2)=3+2(2)=7.\end{array}$  {eq:fs-id1169738086671}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738201809} type= 
PROBLEM:
Evaluate $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{5}{{2}^{n-1}}.$
SOLUTION:
$10.$
COMMENTARY: Hint
Rewrite as $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}5{(\frac{1}{2})}^{n-1}.$
:::
:::

### Geometric Series
A {term:geometric series} is any series that we can write in the form

$$ a+ar+a{r}^{2}+a{r}^{3}+\text{⋯}=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}. $$  {eq:fs-id1169738080256}

Because the ratio of each term in this series to the previous term is *r*, the number *r* is called the ratio. We refer to *a* as the initial term because it is the first term in the series. For example, the series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{(\frac{1}{2})}^{n-1}=1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\text{⋯}$  {eq:fs-id1169737179889}

is a geometric series with initial term $a=1$ and ratio $r=1\text{/}2.$
In general, when does a geometric series converge? Consider the geometric series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}$  {eq:fs-id1169738234424}

when $a>0.$ Its sequence of partial sums $\{{S}_{k}\}$ is given by

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=a+ar+a{r}^{2}+\text{⋯}+a{r}^{k-1}.$  {eq:fs-id1169737934871}

Consider the case when $r=1.$ In that case,

${S}_{k}=a+a(1)+a{(1)}^{2}+\text{⋯}+a{(1)}^{k-1}=ak.$  {eq:fs-id1169738080270}

Since $a>0,$ we know $ak\to \infty$ as $k\to \infty .$ Therefore, the sequence of partial sums is unbounded and thus diverges. Consequently, the infinite series diverges for $r=1.$ For $r≠1,$ to find the limit of $\{{S}_{k}\},$ multiply [ref:fs-id1169738080256] by $1-r.$ Doing so, we see that

$\begin{array}{rl}(1-r){S}_{k} & =a(1-r)(1+r+{r}^{2}+{r}^{3}+\text{⋯}+{r}^{k-1}) \\ & =a[(1+r+{r}^{2}+{r}^{3}+\text{⋯}+{r}^{k-1})-(r+{r}^{2}+{r}^{3}+\text{⋯}+{r}^{k})] \\ & =a(1-{r}^{k}).\end{array}$  {eq:fs-id1169738171219}

All the other terms cancel out.
Therefore,

${S}_{k}=\frac{a(1-{r}^{k})}{1-r}\;\text{for}\;r≠1.$  {eq:fs-id1169738228450}

From our discussion in the previous section, we know that the geometric sequence ${r}^{k}\to 0$ if $|r|<1$ and that ${r}^{k}$ diverges if $|r|>1$ or $r=\text{±}1.$ Therefore, for $|r|<1,$ ${S}_{k}\to a\text{/}(1-r)$ and we have

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=\frac{a}{1-r}\;\text{if}\;|r|<1.$  {eq:fs-id1169737234419}

If $|r|\ge 1,$ ${S}_{k}$ diverges, and therefore

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}\text{diverges if}\;|r|\ge 1.$  {eq:fs-id1169738168112}

:::note [definition] Definition
A geometric series is a series of the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=a+ar+a{r}^{2}+a{r}^{3}+\text{⋯}.$  {eq:fs-id1169738166350}

If $|r|<1,$ the series converges, and

$$ \overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=\frac{a}{1-r}\;\text{for}\;|r|<1. $$  {eq:fs-id1169737934790}

If $|r|\ge 1,$ the series diverges.
:::
Geometric series sometimes appear in slightly different forms. For example, sometimes the index begins at a value other than $n=1$ or the exponent involves a linear expression for $n$ other than $n-1.$ As long as we can rewrite the series in the form given by [ref:fs-id1169738057265], it is a geometric series. For example, consider the series

${\displaystyle \sum_{n=0}^{\infty} {(\frac{2}{3})}^{n+2}}.$  {eq:fs-id1169737360116}

To see that this is a geometric series, we write out the first several terms:

$\begin{array}{rl}{\displaystyle \sum_{n=0}^{\infty} {(\frac{2}{3})}^{n+2}} & ={(\frac{2}{3})}^{2}+{(\frac{2}{3})}^{3}+{(\frac{2}{3})}^{4}+\text{⋯} \\ & =\frac{4}{9}+\frac{4}{9}\cdot (\frac{2}{3})+\frac{4}{9}\cdot {(\frac{2}{3})}^{2}+\text{⋯}.\end{array}$  {eq:fs-id1169737392664}

We see that the initial term is $a=4\text{/}9$ and the ratio is $r=2\text{/}3.$ Therefore, the series can be written as

${\displaystyle \sum_{n=1}^{\infty} \frac{4}{9}}\cdot {(\frac{2}{3})}^{n-1}.$  {eq:fs-id1169737392509}

Since $r=2\text{/}3<1,$ this series converges, and its sum is given by

${\displaystyle \sum_{n=1}^{\infty} \frac{4}{9}}\cdot {(\frac{2}{3})}^{n-1}=\frac{4\text{/}9}{1-2\text{/}3}=\frac{4}{3}.$  {eq:fs-id1169738191148}

:::example {ex:fs-id1169738194429} Determining Convergence or Divergence of a Geometric Series

:::exercise {fs-id1169738194431} type= 
PROBLEM:
Determine whether each of the following geometric series converges or diverges, and if it converges, find its sum.
a. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{{(−3)}^{n+1}}{{4}^{n-1}}$
b. $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{e}^{2n}$
SOLUTION:
a. Writing out the first several terms in the series, we have

$\begin{array}{rl}{\displaystyle \sum_{n=1}^{\infty} \frac{{(−3)}^{n+1}}{{4}^{n-1}}} & =\frac{{(−3)}^{2}}{{4}^{0}}+\frac{{(−3)}^{3}}{4}+\frac{{(−3)}^{4}}{{4}^{2}}+\text{⋯} \\ & ={(−3)}^{2}+{(−3)}^{2}\cdot (\frac{−3}{4})+{(−3)}^{2}\cdot {(\frac{−3}{4})}^{2}+\text{⋯} \\ & =9+9\cdot (\frac{−3}{4})+9\cdot {(\frac{−3}{4})}^{2}+\text{⋯}.\end{array}$  {eq:fs-id1169737162796}

The initial term $a=9$ and the ratio $r=−3\text{/}4.$ Since $|r|=3\text{/}4<1,$ the series converges to

$\frac{9}{1-(−3\text{/}4)}=\frac{9}{7\text{/}4}=\frac{36}{7}.$  {eq:fs-id1169737269768}

b. Writing this series as

${e}^{2}\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{({e}^{2})}^{n-1}$  {eq:fs-id1169738077637}

we can see that this is a geometric series where $r={e}^{2}>1.$ Therefore, the series diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737168532} type= 
PROBLEM:
Determine whether the series ${\displaystyle \sum_{n=1}^{\infty} {(\frac{−2}{5})}^{n-1}}$ converges or diverges. If it converges, find its sum.
SOLUTION:
$5\text{/}7$
COMMENTARY: Hint
$r=−2\text{/}5$
:::
:::
We now turn our attention to a nice application of geometric series. We show how they can be used to write repeating decimals as fractions of integers.

:::example {ex:fs-id1169737363861} Writing Repeating Decimals as Fractions of Integers

:::exercise {fs-id1169737363863} type= 
PROBLEM:
Use a geometric series to write $3.\overset{\text{—}}{26}$ as a fraction of integers.
SOLUTION:
Since $3.\overset{\text{—}}{26}=3.262626\text{…},$ first we write

$\begin{array}{rl}3.262626\text{…} & =3+\frac{26}{100}+\frac{26}{10,000}+\frac{26}{1,000,000}+\text{⋯} \\ & =3+\frac{26}{{10}^{2}}+\frac{26}{{10}^{4}}+\frac{26}{{10}^{6}}+\text{⋯}.\end{array}$  {eq:fs-id1169737153641}

Ignoring the term 3, the rest of this expression is a geometric series with initial term $a=26\text{/}{10}^{2}$ and ratio $r=1\text{/}{10}^{2}.$ Therefore, the sum of this series is

$\frac{26\text{/}{10}^{2}}{1-(1\text{/}{10}^{2})}=\frac{26\text{/}{10}^{2}}{99\text{/}{10}^{2}}=\frac{26}{99}.$  {eq:fs-id1169737299443}

Thus,

$3.262626\text{…}=3+\frac{26}{99}=\frac{323}{99}.$  {eq:fs-id1169737934725}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738115128} type= 
PROBLEM:
Write $5.2\overset{\text{–}}{7}$ as a fraction of integers.
SOLUTION:
$475\text{/}90$
COMMENTARY: Hint
By expressing this number as a series, find a geometric series with initial term $a=7\text{/}100$ and ratio $r=1\text{/}10.$
:::
:::

:::example {ex:fs-id1169738082462} Chapter Opener: Finding the Area of the Koch Snowflake

:::exercise {fs-id1169738082465} type= 
PROBLEM:
Define a sequence of figures $\{{F}_{n}\}$ recursively as follows ([ref:CNX_Calc_Figure_08_00_003]). Let ${F}_{0}$ be an equilateral triangle with sides of length $1.$ For $n\ge 1,$ let ${F}_{n}$ be the curve created by removing the middle third of each side of ${F}_{n-1}$ and replacing it with an equilateral triangle pointing outward. The limiting figure as $n\to \infty$ is known as {index:Koch’s snowflake}.

> FIGURE {fig:CNX_Calc_Figure_08_00_003} src=../../media/CNX_Calc_Figure_08_00_003.jpg
> alt: This is a diagram of the Koch snowflake, which it created through iterations. The base case is an equilateral triangle. In each iteration, the middle third of each line segment is replaced with another equilateral triangle pointing outward.
> caption: The first four figures, ${F}_{0},{F}_{1},{F}_{2},\text{and}\;{F}_{3},$ in the construction of the Koch snowflake.

a. Find the length ${L}_{n}$ of the perimeter of ${F}_{n}.$ Evaluate $\lim_{n\to \infty}{L}_{n}$ to find the length of the perimeter of Koch’s snowflake.
b. Find the area ${A}_{n}$ of figure ${F}_{n}.$ Evaluate $\lim_{n\to \infty}{A}_{n}$ to find the area of Koch’s snowflake.
SOLUTION:
a. Let ${N}_{n}$ denote the number of sides of figure ${F}_{n}.$ Since ${F}_{0}$ is a triangle, ${N}_{0}=3.$ Let ${l}_{n}$ denote the length of each side of ${F}_{n}.$ Since ${F}_{0}$ is an equilateral triangle with sides of length ${l}_{0}=1,$ we now need to determine ${N}_{1}$ and ${l}_{1}.$ Since ${F}_{1}$ is created by removing the middle third of each side and replacing that line segment with two line segments, for each side of ${F}_{0},$ we get four sides in ${F}_{1}.$ Therefore, the number of sides for ${F}_{1}$ is

${N}_{1}=4\cdot 3.$  {eq:fs-id1169738079048}

Since the length of each of these new line segments is $1\text{/}3$ the length of the line segments in ${F}_{0},$ the length of the line segments for ${F}_{1}$ is given by

${l}_{1}=\frac{1}{3}\cdot 1=\frac{1}{3}.$  {eq:fs-id1169737910109}

Similarly, for ${F}_{2},$ since the middle third of each side of ${F}_{1}$ is removed and replaced with two line segments, the number of sides in ${F}_{2}$ is given by

${N}_{2}=4{N}_{1}=4(4\cdot 3)={4}^{2}\cdot 3.$  {eq:fs-id1169738153427}

Since the length of each of these sides is $1\text{/}3$ the length of the sides of ${F}_{1},$ the length of each side of figure ${F}_{2}$ is given by

${l}_{2}=\frac{1}{3}\cdot {l}_{1}=\frac{1}{3}\cdot \frac{1}{3}={(\frac{1}{3})}^{2}.$  {eq:fs-id1169737392622}

More generally, since ${F}_{n}$ is created by removing the middle third of each side of ${F}_{n-1}$ and replacing that line segment with two line segments of length $\frac{1}{3}{l}_{n-1}$ in the shape of an equilateral triangle, we know that ${N}_{n}=4{N}_{n-1}$ and ${l}_{n}=\frac{{l}_{n-1}}{3}.$ Therefore, the number of sides of figure ${F}_{n}$ is

${N}_{n}={4}^{n}\cdot 3$  {eq:fs-id1169737933391}

and the length of each side is

${l}_{n}={(\frac{1}{3})}^{n}.$  {eq:fs-id1169737392573}

Therefore, to calculate the perimeter of ${F}_{n},$ we multiply the number of sides ${N}_{n}$ and the length of each side ${l}_{n}.$ We conclude that the perimeter of ${F}_{n}$ is given by

${L}_{n}={N}_{n}\cdot {l}_{n}=3\cdot {(\frac{4}{3})}^{n}.$  {eq:fs-id1169737261961}

Therefore, the length of the perimeter of Koch’s snowflake is

$L=\lim_{n\to \infty}{L}_{n}=\infty .$  {eq:fs-id1169738211801}

b. Let ${T}_{n}$ denote the area of each new triangle created when forming ${F}_{n}.$ For $n=0,$ ${T}_{0}$ is the area of the original equilateral triangle. Therefore, ${T}_{0}={A}_{0}=\sqrt{3}\text{/}4.$ For $n\ge 1,$ since the lengths of the sides of the new triangle are $1\text{/}3$ the length of the sides of ${F}_{n-1},$ we have

${T}_{n}={(\frac{1}{3})}^{2}{T}_{n-1}=\frac{1}{9}\cdot {T}_{n-1}.$  {eq:fs-id1169738080336}

Therefore, ${T}_{n}={(\frac{1}{9})}^{n}\cdot \frac{\sqrt{3}}{4}.$ Since a new triangle is formed on each side of ${F}_{n-1},$

$\begin{array}{rl}{A}_{n} & ={A}_{n-1}+{N}_{n-1}\cdot {T}_{n} \\ & ={A}_{n-1}+(3\cdot {4}^{n-1})\cdot {(\frac{1}{9})}^{n}\cdot \frac{\sqrt{3}}{4} \\ & ={A}_{n-1}+\frac{3}{4}\cdot {(\frac{4}{9})}^{n}\cdot \frac{\sqrt{3}}{4}.\end{array}$  {eq:fs-id1169738088623}

Writing out the first few terms ${A}_{0},{A}_{1},{A}_{2},$ we see that

$\begin{array}{l} \\ {A}_{0}=\frac{\sqrt{3}}{4} \\ {A}_{1}={A}_{0}+\frac{3}{4}\cdot (\frac{4}{9})\cdot \frac{\sqrt{3}}{4}=\frac{\sqrt{3}}{4}+\frac{3}{4}\cdot (\frac{4}{9})\cdot \frac{\sqrt{3}}{4}=\frac{\sqrt{3}}{4}[1+\frac{3}{4}\cdot (\frac{4}{9})] \\ {A}_{2}={A}_{1}+\frac{3}{4}\cdot {(\frac{4}{9})}^{2}\cdot \frac{\sqrt{3}}{4}=\frac{\sqrt{3}}{4}[1+\frac{3}{4}\cdot (\frac{4}{9})]+\frac{3}{4}\cdot {(\frac{4}{9})}^{2}\cdot \frac{\sqrt{3}}{4}=\frac{\sqrt{3}}{4}[1+\frac{3}{4}\cdot (\frac{4}{9})+\frac{3}{4}\cdot {(\frac{4}{9})}^{2}].\end{array}$  {eq:fs-id1169737269810}

More generally,

${A}_{n}=\frac{\sqrt{3}}{4}[1+\frac{3}{4}(\frac{4}{9}+{(\frac{4}{9})}^{2}+\text{⋯}+{(\frac{4}{9})}^{n})].$  {eq:fs-id1169737226081}

Factoring $4\text{/}9$ out of each term inside the inner parentheses, we rewrite our expression as

${A}_{n}=\frac{\sqrt{3}}{4}[1+\frac{1}{3}(1+\frac{4}{9}+{(\frac{4}{9})}^{2}+\text{⋯}+{(\frac{4}{9})}^{n-1})].$  {eq:fs-id1169737364353}

The expression $1+(\frac{4}{9})+{(\frac{4}{9})}^{2}+\text{⋯}+{(\frac{4}{9})}^{n-1}$ is a geometric sum. As shown earlier, this sum satisfies

$1+\frac{4}{9}+{(\frac{4}{9})}^{2}+\text{⋯}+{(\frac{4}{9})}^{n-1}=\frac{1-{(4\text{/}9)}^{n}}{1-(4\text{/}9)}.$  {eq:fs-id1169737162064}

Substituting this expression into the expression above and simplifying, we conclude that

$\begin{array}{rl}{A}_{n} & =\frac{\sqrt{3}}{4}[1+\frac{1}{3}(\frac{1-{(4\text{/}9)}^{n}}{1-(4\text{/}9)})] \\ & =\frac{\sqrt{3}}{4}[\frac{8}{5}-\frac{3}{5}{(\frac{4}{9})}^{n}].\end{array}$  {eq:fs-id1169738211851}

Therefore, the area of Koch’s snowflake is

$A=\lim_{n\to \infty}{A}_{n}=\frac{2\sqrt{3}}{5}.$  {eq:fs-id1169737201460}

COMMENTARY: Analysis
The Koch snowflake is interesting because it has finite area, yet infinite perimeter. Although at first this may seem impossible, recall that you have seen similar examples earlier in the text. For example, consider the region bounded by the curve $y=1\text{/}{x}^{2}$ and the $x$-axis on the interval $[1,\infty ).$ Since the improper integral

${\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{2}}}dx$  {eq:fs-id1169737910330}

converges, the area of this region is finite, even though the perimeter is infinite.
:::
:::

## Telescoping Series
Consider the series ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n(n+1)}}.$ We discussed this series in [ref:fs-id1169738068351], showing that the series converges by writing out the first several partial sums ${S}_{1},{S}_{2}\text{,…},{S}_{6}$ and noticing that they are all of the form ${S}_{k}=\frac{k}{k+1}.$ Here we use a different technique to show that this series converges. By using partial fractions, we can write

$\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}.$  {eq:fs-id1169738154896}

Therefore, the series can be written as

$\sum_{n=1}^{\infty} [\frac{1}{n}-\frac{1}{n+1}]=(1-\frac{1}{2})+(\frac{1}{2}-\frac{1}{3})+(\frac{1}{3}-\frac{1}{4})+\text{⋯}.$  {eq:fs-id1169738216464}

Writing out the first several terms in the sequence of partial sums $\{{S}_{k}\},$ we see that

$\begin{array}{l}{S}_{1}=1-\frac{1}{2} \\ {S}_{2}=(1-\frac{1}{2})+(\frac{1}{2}-\frac{1}{3})=1-\frac{1}{3} \\ {S}_{3}=(1-\frac{1}{2})+(\frac{1}{2}-\frac{1}{3})+(\frac{1}{3}-\frac{1}{4})=1-\frac{1}{4}.\end{array}$  {eq:fs-id1169738191343}

In general,

${S}_{k}=(1-\frac{1}{2})+(\frac{1}{2}-\frac{1}{3})+(\frac{1}{3}-\frac{1}{4})+\text{⋯}+(\frac{1}{k}-\frac{1}{k+1})=1-\frac{1}{k+1}.$  {eq:fs-id1169737910270}

We notice that the middle terms cancel each other out, leaving only the first and last terms. In a sense, the series collapses like a spyglass with tubes that disappear into each other to shorten the telescope. For this reason, we call a series that has this property a telescoping series. For this series, since ${S}_{k}=1-1\text{/}(k+1)$ and $1\text{/}(k+1)\to 0$ as $k\to \infty ,$ the sequence of partial sums converges to $1,$ and therefore the series converges to $1.$

:::note [definition] Definition
A {term:telescoping series} is a series in which most of the terms cancel in each of the partial sums, leaving only some of the first terms and some of the last terms.
:::
For example, any series of the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[{b}_{n}-{b}_{n+1}]=({b}_{1}-{b}_{2})+({b}_{2}-{b}_{3})+({b}_{3}-{b}_{4})+\text{⋯}$  {eq:fs-id1169738077715}

is a telescoping series. We can see this by writing out some of the partial sums. In particular, we see that

$\begin{array}{l}{S}_{1}={b}_{1}-{b}_{2} \\ {S}_{2}=({b}_{1}-{b}_{2})+({b}_{2}-{b}_{3})={b}_{1}-{b}_{3} \\ {S}_{3}=({b}_{1}-{b}_{2})+({b}_{2}-{b}_{3})+({b}_{3}-{b}_{4})={b}_{1}-{b}_{4}.\end{array}$  {eq:fs-id1169737394667}

In general, the *k*th partial sum of this series is

${S}_{k}={b}_{1}-{b}_{k+1}.$  {eq:fs-id1169737168054}

Since the *k*th partial sum can be simplified to the difference of these two terms, the sequence of partial sums $\{{S}_{k}\}$ will converge if and only if the sequence $\{{b}_{k+1}\}$ converges. Moreover, if the sequence ${b}_{k+1}$ converges to some finite number $B,$ then the sequence of partial sums converges to ${b}_{1}-B,$ and therefore

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[{b}_{n}-{b}_{n+1}]={b}_{1}-B.$  {eq:fs-id1169738180671}

In the next example, we show how to use these ideas to analyze a telescoping series of this form.

:::example {ex:fs-id1169737264640} Evaluating a Telescoping Series

:::exercise {fs-id1169737264642} type= 
PROBLEM:
Determine whether the telescoping series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[\text{cos}(\frac{1}{n})-\text{cos}(\frac{1}{n+1})]$  {eq:fs-id1169737264652}

converges or diverges. If it converges, find its sum.
SOLUTION:
By writing out terms in the sequence of partial sums, we can see that

$\begin{array}{rll}{S}_{1} & = & \text{cos}(1)-\text{cos}(\frac{1}{2}) \\ {S}_{2} & = & (\text{cos}(1)-\text{cos}(\frac{1}{2}))+(\text{cos}(\frac{1}{2})-\text{cos}(\frac{1}{3}))=\text{cos}(1)-\text{cos}(\frac{1}{3}) \\ {S}_{3} & = & (\text{cos}(1)-\text{cos}(\frac{1}{2}))+(\text{cos}(\frac{1}{2})-\text{cos}(\frac{1}{3}))+(\text{cos}(\frac{1}{3})-\text{cos}(\frac{1}{4})) \\ & = & \text{cos}(1)-\text{cos}(\frac{1}{4}).\end{array}$  {eq:fs-id1169737154225}

In general,

${S}_{k}=\text{cos}(1)-\text{cos}(\frac{1}{k+1}).$  {eq:fs-id1169737392324}

Since $1\text{/}(k+1)\to 0$ as $k\to \infty$ and $\text{cos}\;x$ is a continuous function, $\text{cos}(1\text{/}(k+1))\to \text{cos}(0)=1.$ Therefore, we conclude that ${S}_{k}\to \text{cos}(1)-1.$ The telescoping series converges and the sum is given by

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[\text{cos}(\frac{1}{n})-\text{cos}(\frac{1}{n+1})]=\text{cos}(1)-1.$  {eq:fs-id1169738185032}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738185124} type= 
PROBLEM:
Determine whether $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}[{e}^{1\text{/}n}-{e}^{1\text{/}(n+1)}]$ converges or diverges. If it converges, find its sum.
SOLUTION:
$e-1$
COMMENTARY: Hint
Write out the sequence of partial sums to see which terms cancel.
:::
:::

:::note [project] Euler’s Constant
We have shown that the harmonic series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}$ diverges. Here we investigate the behavior of the partial sums ${S}_{k}$ as $k\to \infty .$ In particular, we show that they behave like the natural logarithm function by showing that there exists a constant $γ$ such that

$\overset{k}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}-\text{ln}\;k\to γ\;\text{as}\;k\to \infty .$  {eq:fs-id1169737910599}

This constant $γ$ is known as {index:Euler’s constant}.
1. Let ${T}_{k}={\displaystyle \sum_{n=1}^{k} \frac{1}{n}-\text{ln}\;k}.$ Evaluate ${T}_{k}$ for various values of $k.$
2. For ${T}_{k}$ as defined in part 1. show that the sequence $\{{T}_{k}\}$ converges by using the following steps.

a. Show that the sequence $\{{T}_{k}\}$ is monotone decreasing. (*Hint:* Show that $\text{ln}(1+1\text{/}k>1\text{/}(k+1)))$
b. Show that the sequence $\{{T}_{k}\}$ is bounded below by zero. (*Hint:* Express $\text{ln}\;k$ as a definite integral.)
c. Use the Monotone Convergence Theorem to conclude that the sequence $\{{T}_{k}\}$ converges. The limit $γ$ is Euler’s constant.

3. Now estimate how far ${T}_{k}$ is from $γ$ for a given integer $k.$ Prove that for $k\ge 1,$ $0<{T}_{k}-γ\le 1\text{/}k$ by using the following steps.

a. Show that $\text{ln}(k+1)-\text{ln}\;k<1\text{/}k.$
b. Use the result from part a. to show that for any integer $k,$

${T}_{k}-{T}_{k+1}<\frac{1}{k}-\frac{1}{k+1}.$  {eq:fs-id1169738226173}

c. For any integers $k$ and $j$ such that $j>k,$ express ${T}_{k}-{T}_{j}$ as a telescoping sum by writing

${T}_{k}-{T}_{j}=({T}_{k}-{T}_{k+1})+({T}_{k+1}-{T}_{k+2})+({T}_{k+2}-{T}_{k+3})+\text{⋯}+({T}_{j-1}-{T}_{j}).$  {eq:fs-id1169737214924}

Use the result from part b. combined with this telescoping sum to conclude that

${T}_{k}-{T}_{j}<\frac{1}{k}-\frac{1}{j}.$  {eq:fs-id1169737358876}

d. Apply the limit to both sides of the inequality in part c. to conclude that

${T}_{k}-γ\le \frac{1}{k}.$  {eq:fs-id1169737358917}

e. Estimate $γ$ to an accuracy of within $0.001.$

:::

## Key Concepts {section:key-concepts}
- Given the infinite series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}$  {eq:fs-id1169737174607}

and the corresponding sequence of partial sums $\{{S}_{k}\}$ where

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k},$  {eq:fs-id1169737174681}

the series converges if and only if the sequence $\{{S}_{k}\}$ converges.
- The geometric series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}$ converges if $|r|<1$ and diverges if $|r|\ge 1.$ For $|r|<1,$

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=\frac{a}{1-r}.$  {eq:fs-id1169737392709}

- The harmonic series

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}=1+\frac{1}{2}+\frac{1}{3}+\text{⋯}$  {eq:fs-id1169737392766}

diverges.
- A series of the form ${\displaystyle \sum_{n=1}^{\infty} [{b}_{n}-{b}_{n+1}]}=[{b}_{1}-{b}_{2}]+[{b}_{2}-{b}_{3}]+[{b}_{3}-{b}_{4}]+\text{⋯}+[{b}_{n}-{b}_{n+1}]+\text{⋯}$

is a telescoping series. The $k\text{th}$ partial sum of this series is given by ${S}_{k}={b}_{1}-{b}_{k+1}.$ The series will converge if and only if $\lim_{k\to \infty}{b}_{k+1}$ exists. In that case,

${\displaystyle \sum_{n=1}^{\infty} [{b}_{n}-{b}_{n+1}]}={b}_{1}-\lim_{k\to \infty}({b}_{k+1}).$  {eq:fs-id1169737895513}

## Key Equations {section:key-equations}

> TABLE {tab:eip-520} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Harmonic series** | ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\text{⋯}$ |
| **Sum of a geometric series** | ${\displaystyle \sum_{n=1}^{\infty} a{r}^{n-1}}=\frac{a}{1-r}\;\text{for}\;|r|<1$ |

##  {section:section-exercises}
Using sigma notation, write the following expressions as infinite series.

:::exercise {fs-id1169737300772} type= 
PROBLEM:
$1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\text{⋯}$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}$
:::

:::exercise {fs-id1169737954138} type= 
PROBLEM:
$1-1+1-1+\text{⋯}$
:::

:::exercise {fs-id1169737954211} type= 
PROBLEM:
$1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+...$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n-1}}{n}}$
:::

:::exercise {fs-id1169738164839} type= 
PROBLEM:
$\text{sin}\;1+\text{sin}\;\frac{1}{2}+\text{sin}\;\frac{1}{3}+\text{sin}\;\frac{1}{4}+\text{⋯}$
:::
Compute the first four partial sums ${S}_{1}\text{,…},{S}_{4}$ for the series having $n\text{th}$ term ${a}_{n}$ starting with $n=1$ as follows.

:::exercise {fs-id1169737168379} type= 
PROBLEM:
${a}_{n}=n$
SOLUTION:
$1,3,6,10$
:::

:::exercise {fs-id1169737168422} type= 
PROBLEM:
${a}_{n}=1\text{/}n$
:::

:::exercise {fs-id1169737255445} type= 
PROBLEM:
${a}_{n}=\text{sin}(n\pi \text{/}2)$
SOLUTION:
$1,1,0,0$
:::

:::exercise {fs-id1169737255503} type= 
PROBLEM:
${a}_{n}={(−1)}^{n}$
:::
In the following exercises, compute the general term ${a}_{n}$ of the series with the given partial sum ${S}_{n}.$ If the sequence of partial sums converges, find its limit $S.$

:::exercise {fs-id1169737383334} type= 
PROBLEM:
${S}_{n}=1-\frac{1}{n},$ $n\ge 2$
SOLUTION:
${a}_{n}={S}_{n}-{S}_{n-1}=\frac{1}{n-1}-\frac{1}{n}.$ Series converges to $S=1.$
:::

:::exercise {fs-id1169737383441} type= 
PROBLEM:
${S}_{n}=\frac{n(n+1)}{2},$ $n\ge 1$
:::

:::exercise {fs-id1169737987528} type= 
PROBLEM:
${S}_{n}=\sqrt{n},n\ge 2$
SOLUTION:
${a}_{n}={S}_{n}-{S}_{n-1}=\sqrt{n}-\sqrt{n-1}=\frac{1}{\sqrt{n-1}+\sqrt{n}}.$ Series diverges because partial sums are unbounded.
:::

:::exercise {fs-id1169737155737} type= 
PROBLEM:
${S}_{n}=2-(n+2)\text{/}{2}^{n},n\ge 1$
:::
For each of the following series, use the sequence of partial sums to determine whether the series converges or diverges.

:::exercise {fs-id1169737202979} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n}{n+2}}$
SOLUTION:
${S}_{1}=1\text{/}3,$ ${S}_{2}=1\text{/}3+2\text{/}4>1\text{/}3+1\text{/}3=2\text{/}3,$ ${S}_{3}=1\text{/}3+2\text{/}4+3\text{/}5>3\cdot (1\text{/}3)=1.$ In general ${S}_{k}>k\text{/}3.$ Series diverges.
:::

:::exercise {fs-id1169737227655} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} (1-{(−1)}^{n}))}$
:::

:::exercise {fs-id1169738031113} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{(n+1)(n+2)}}$ (*Hint:* Use a partial fraction decomposition like that for ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n(n+1)}}.)$
SOLUTION:
$\begin{array}{l}{S}_{1}=1\text{/}(2.3)=1\text{/}6=2\text{/}3-1\text{/}2, \\ {S}_{2}=1\text{/}(2.3)+1\text{/}(3.4)=2\text{/}12+1\text{/}12=1\text{/}4=3\text{/}4-1\text{/}2, \\ {S}_{3}=1\text{/}(2.3)+1\text{/}(3.4)+1\text{/}(4.5)=10\text{/}60+5\text{/}60+3\text{/}60=3\text{/}10=4\text{/}5-1\text{/}2, \\ {S}_{4}=1\text{/}(2.3)+1\text{/}(3.4)+1\text{/}(4.5)+1\text{/}(5.6)=10\text{/}60+5\text{/}60+3\text{/}60+2\text{/}60=1\text{/}3=5\text{/}6-1\text{/}2.\end{array}$
The pattern is ${S}_{k}=(k+1)\text{/}(k+2)-1\text{/}2$ and the series converges to $1\text{/}2.$
:::

:::exercise {fs-id1169738084609} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{2n+1}}$ (*Hint:* Follow the reasoning for ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}}.)$
:::
Suppose that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}=1},$ that ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}=−1},$ that ${a}_{1}=2,$ and ${b}_{1}=−3.$ Find the sum of the indicated series.

:::exercise {fs-id1169737167890} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}+{b}_{n})}$
SOLUTION:
$0$
:::

:::exercise {fs-id1169737231305} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} ({a}_{n}-2{b}_{n})}$
:::

:::exercise {fs-id1169737231364} type= 
PROBLEM:
${\displaystyle \sum_{n=2}^{\infty} ({a}_{n}-{b}_{n})}$
SOLUTION:
$−3$
:::

:::exercise {fs-id1169737231423} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} (3{a}_{n+1}-4{b}_{n+1})}$
:::
State whether the given series converges and explain why.

:::exercise {fs-id1169738235166} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n+1000}}$ (*Hint:* Rewrite using a change of index.)
SOLUTION:
diverges, ${\displaystyle \sum_{n=1001}^{\infty} \frac{1}{n}}$
:::

:::exercise {fs-id1169738235242} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n+{10}^{80}}}$ (*Hint:* Rewrite using a change of index.)
:::

:::exercise {fs-id1169737195149} type= 
PROBLEM:
$1+\frac{1}{10}+\frac{1}{100}+\frac{1}{1000}+\text{⋯}$
SOLUTION:
convergent geometric series, $r=1\text{/}10<1$
:::

:::exercise {fs-id1169737195215} type= 
PROBLEM:
$1+\frac{e}{\pi}+\frac{{e}^{2}}{{\pi}^{2}}+\frac{{e}^{3}}{{\pi}^{3}}+\text{⋯}$
:::

:::exercise {fs-id1169737985373} type= 
PROBLEM:
$1+\frac{\pi}{{e}^{2}}+\frac{{\pi}^{2}}{{e}^{4}}+\frac{{\pi}^{3}}{{e}^{6}}+\frac{{\pi}^{4}}{{e}^{8}}+\text{⋯}$
SOLUTION:
convergent geometric series, $r=\pi \text{/}{e}^{2}<1$
:::

:::exercise {fs-id1169737221029} type= 
PROBLEM:
$1-\sqrt{\frac{\pi}{3}}+\sqrt{\frac{{\pi}^{2}}{9}}-\sqrt{\frac{{\pi}^{3}}{27}}+\text{⋯}$
:::
For ${a}_{n}$ as follows, write the sum as a geometric series of the form ${\displaystyle \sum_{n=1}^{\infty} a{r}^{n}}.$ State whether the series converges and if it does, find the value of ${\displaystyle \sum {a}_{n}}.$

:::exercise {fs-id1169737221173} type= 
PROBLEM:
${a}_{1}=−1$ and ${a}_{n}\text{/}{a}_{n+1}=−5$ for $n\ge 1.$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} 5\cdot {(−1\text{/}5)}^{n}},$ converges to $−5\text{/}6$
:::

:::exercise {fs-id1169737934313} type= 
PROBLEM:
${a}_{1}=2$ and ${a}_{n}\text{/}{a}_{n+1}=1\text{/}2$ for $n\ge 1.$
:::

:::exercise {fs-id1169737292402} type= 
PROBLEM:
${a}_{1}=10$ and ${a}_{n}\text{/}{a}_{n+1}=10$ for $n\ge 1.$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} 100\cdot {(1\text{/}10)}^{n}},$ converges to $100\text{/}9$
:::

:::exercise {fs-id1169738167802} type= 
PROBLEM:
${a}_{1}=1\text{/}10$ and ${a}_{n}\text{/}{a}_{n+1}=−10$ for $n\ge 1.$
:::
Use the identity $\frac{1}{1-y}={\displaystyle \sum_{n=0}^{\infty} {y}^{n}}$ to express the function as a geometric series in the indicated term.

:::exercise {fs-id1169737236515} type= 
PROBLEM:
$\frac{x}{1+x}$ in $x$
SOLUTION:
$x{\displaystyle \sum_{n=0}^{\infty} {(\text{−}x)}^{n}}={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}{x}^{n}}$
:::

:::exercise {fs-id1169737236623} type= 
PROBLEM:
$\frac{\sqrt{x}}{1-{x}^{3\text{/}2}}$ in $\sqrt{x}$
:::

:::exercise {fs-id1169737909954} type= 
PROBLEM:
$\frac{1}{1+{\text{sin}}^{2}x}$ in $\text{sin}\;x$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{\text{sin}}^{2n}(x)}$
:::

:::exercise {fs-id1169737785623} type= 
PROBLEM:
${\text{sec}}^{2}x$ in $\text{sin}\;x$
:::
Evaluate the following telescoping series or state whether the series diverges.

:::exercise {fs-id1169737785711} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {2}^{1\text{/}n}-}{2}^{1\text{/}(n+1)}$
SOLUTION:
${S}_{k}=2-{2}^{1\text{/}(k+1)}\to 1$ as $k\to \infty .$
:::

:::exercise {fs-id1169737394194} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{n}^{13}}}-\frac{1}{{(n+1)}^{13}}$
:::

:::exercise {fs-id1169738077474} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} (\sqrt{n}-\sqrt{n+1})}$
SOLUTION:
${S}_{k}=1-\sqrt{k+1}$ diverges
:::

:::exercise {fs-id1169738077551} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} (\text{sin}\;n-\text{sin}(n+1))}$
:::
Express the following series as a telescoping sum and evaluate its *n*th partial sum.

:::exercise {fs-id1169738236316} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \text{ln}(\frac{n}{n+1})}$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} \text{ln}\;n-\text{ln}(n+1),{S}_{k}=\text{−}\text{ln}(k+1)}$
:::

:::exercise {fs-id1169737923702} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{2n+1}{{({n}^{2}+n)}^{2}}}$ (*Hint:* Factor denominator and use partial fractions.)
:::

:::exercise {fs-id1169738155023} type= 
PROBLEM:
${\displaystyle \sum_{n=2}^{\infty} \frac{\text{ln}(1{+}_{n}^{1})}{\text{ln}\;n\;\text{ln}(n+1)}}$
SOLUTION:
${a}_{n}=\frac{1}{\text{ln}\;n}-\frac{1}{\text{ln}(n+1)}$ and ${S}_{k}=\frac{1}{\text{ln}(2)}-\frac{1}{\text{ln}(k+1)}\to \frac{1}{\text{ln}(2)}$
:::

:::exercise {fs-id1169738179411} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(n+2)}{n(n+1){2}^{n+1}}}$ (*Hint:* Look at $1\text{/}(n{2}^{n}).)$
:::
A general telescoping series is one in which all but the first few terms cancel out after summing a given number of successive terms.

:::exercise {fs-id1169737229492} type= 
PROBLEM:
Let ${a}_{n}=f(n)-2f(n+1)+f(n+2),$ in which $f(n)\to 0$ as $n\to \infty .$ Find ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} {a}_{n}=}f(1)-f(2)$
:::

:::exercise {fs-id1169737938314} type= 
PROBLEM:
${a}_{n}=f(n)-f(n+1)-f(n+2)+f(n+3),$ in which $f(n)\to 0$ as $n\to \infty .$ Find ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}.$
:::

:::exercise {fs-id1169738240458} type= 
PROBLEM:
Suppose that ${a}_{n}={c}_{0}f(n)+{c}_{1}f(n+1)+{c}_{2}f(n+2)+{c}_{3}f(n+3)+{c}_{4}f(n+4),$ where $f(n)\to 0$ as $n\to \infty .$ Find a condition on the coefficients ${c}_{0}\text{,…},{c}_{4}$ that make this a general telescoping series.
SOLUTION:
${c}_{0}+{c}_{1}+{c}_{2}+{c}_{3}+{c}_{4}=0$
:::

:::exercise {fs-id1169737158470} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n(n+1)(n+2)}}$ (*Hint:* $\frac{1}{n(n+1)(n+2)}=\frac{1}{2n}-\frac{1}{n+1}+\frac{1}{2(n+2)})$
:::

:::exercise {fs-id1169737303097} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=2}^{\infty} \frac{2}{{n}^{3}-n}}.$
SOLUTION:
$\frac{2}{{n}^{3}-1}=\frac{1}{n-1}-\frac{2}{n}+\frac{1}{n+1},$ ${S}_{n}=(1-1+1\text{/}3)+(1\text{/}2-2\text{/}3+1\text{/}4)$ $+(1\text{/}3-2\text{/}4+1\text{/}5)+(1\text{/}4-2\text{/}5+1\text{/}6)+\text{⋯}=1\text{/}2$
:::

:::exercise {fs-id1169737375105} type= 
PROBLEM:
Find a formula for ${\displaystyle \sum_{n=1}^{\infty} \frac{1}{n(n+N)}}$ where $N$ is a positive integer.
:::

:::exercise {fs-id1169738071313} type= 
PROBLEM:
**[T]** Define a sequence ${t}_{k}={\displaystyle \sum_{n=1}^{k-1} (1\text{/}n)-\text{ln}\;k.}$ Use the graph of $1\text{/}x$ to verify that ${t}_{k}$ is increasing. Plot ${t}_{k}$ for $k=1\text{…}100$ and state whether it appears that the sequence converges.
SOLUTION:
${t}_{k}$ converges to $0.57721\text{…}{t}_{k}$ is a sum of rectangles of height $1\text{/}k$ over the interval $[k,k+1]$ which lie above the graph of $1\text{/}x.$

> IMAGE {img:fs-id1169737177031} src=../../media/CNX_Calc_Figure_09_02_206.jpg
> alt: This is a graph of a sequence in quadrant one that begins close to 0 and appears to converge to 0.57721.

:::

:::exercise {fs-id1169737177046} type= 
PROBLEM:
**[T]** Suppose that $N$ equal uniform rectangular blocks are stacked one on top of the other, allowing for some overhang. Archimedes’ law of the lever implies that the stack of $N$ blocks is stable as long as the center of mass of the top $(N-1)$ blocks lies at the edge of the bottom block. Let $x$ denote the position of the edge of the bottom block, and think of its position as relative to the center of the next-to-bottom block. This implies that $(N-1)x=(\frac{1}{2}-x)$ or $x=1\text{/}(2N).$ Use this expression to compute the maximum overhang (the position of the edge of the top block over the edge of the bottom block.) See the following figure.

> IMAGE {img:fs-id1169737177153} src=../../media/CNX_Calc_Figure_09_02_201.jpg
> alt: This is a diagram of the edge of a table with several blocks stacked on the edge. Each block is pushed slightly to the right, and over the edge of the table. An arrow is drawn with arrowheads at both ends from the edge of the table to a line drawn down from the edge of the highest block.

:::
Each of the following infinite series converges to the given multiple of $\pi$ or $1\text{/}\pi .$
In each case, find the minimum value of $N$ such that the $N\text{th}$ partial sum of the series accurately approximates the left-hand side to the given number of decimal places, and give the desired approximate value. Up to $15$ decimals place, $\pi =3.141592653589793....$

:::exercise {fs-id1169737918602} type= 
PROBLEM:
**[T]** $\pi =−3+{\displaystyle \sum_{n=1}^{\infty} \frac{n{2}^{n}n{\text{!}}^{2}}{(2n)\text{!}}},$ error $<0.0001$
SOLUTION:
$N=22,$ ${S}_{N}=6.1415$
:::

:::exercise {fs-id1169738110011} type= 
PROBLEM:
**[T]** $\frac{\pi}{2}={\displaystyle \sum_{k=0}^{\infty} \frac{k\text{!}}{(2k+1)\text{!}\text{!}}}={\displaystyle \sum_{k=0}^{\infty} \frac{{2}^{k}k{\text{!}}^{2}}{(2k+1)\text{!}}},$ error $<{10}^{−4}$
:::

:::exercise {fs-id1169738193854} type= 
PROBLEM:
**[T]** $\frac{9801}{2\pi}=\frac{\sqrt{2}}{9801}{\displaystyle \sum_{k=0}^{\infty} \frac{(4k)\text{!}(1103+26390k)}{{(k\text{!})}^{4}{396}^{4k}}},$ error $<{10}^{−12}$
SOLUTION:
$N=3,$ ${S}_{N}=1.559877597243667...$
:::

:::exercise {fs-id1169738194006} type= 
PROBLEM:
**[T]** $\frac{1}{12\pi}={\displaystyle \sum_{k=0}^{\infty} \frac{{(−1)}^{k}(6k)\text{!}(13591409+545140134k)}{(3k)\text{!}{(k\text{!})}^{3}{640320}^{3k+3\text{/}2}}},$ error $<{10}^{−15}$
:::

:::exercise {fs-id1169738040798} type= 
PROBLEM:
**[T]** A fair coin is one that has probability $1\text{/}2$ of coming up heads when flipped.
a. What is the probability that a fair coin will come up tails $n$ times in a row?
b. Find the probability that a coin comes up heads for the first time on the last of an even number of coin flips.
SOLUTION:
a. The probability of any given ordered sequence of outcomes for $n$ coin flips is $1\text{/}{2}^{n}.$ b. The probability of coming up heads for the first time on the $n$ th flip is the probability of the sequence $TT\text{…}TH$ which is $1\text{/}{2}^{n}.$ The probability of coming up heads for the first time on an even flip is ${\displaystyle \sum_{n=1}^{\infty} 1\text{/}{2}^{2n}}$ or $1\text{/}3.$
:::

:::exercise {fs-id1169737366116} type= 
PROBLEM:
**[T]** Find the probability that a fair coin is flipped a multiple of three times before coming up heads.
:::

:::exercise {fs-id1169737162602} type= 
PROBLEM:
**[T]** Find the probability that a fair coin will come up heads for the second time after an even number of flips.
SOLUTION:
$5\text{/}9$
:::

:::exercise {fs-id1169737162630} type= 
PROBLEM:
**[T]** Find a series that expresses the probability that a fair coin will come up heads for the second time on a multiple of three flips.
:::

:::exercise {fs-id1169737162731} type= 
PROBLEM:
**[T]** The expected number of times that a fair coin will come up heads is defined as the sum over $n=1,2\text{,…}$ of $n$ times the probability that the coin will come up heads exactly $n$ times in a row, or $n\text{/}{2}^{n+1}.$ Compute the expected number of consecutive times that a fair coin will come up heads.
SOLUTION:
$E={\displaystyle \sum_{n=1}^{\infty} n\text{/}{2}^{n+1}=1},$ as can be shown using summation by parts
:::

:::exercise {fs-id1169737394467} type= 
PROBLEM:
**[T]** A person deposits $\text{\$}10$ at the beginning of each quarter into a bank account that earns $4\text{\%}$ annual interest compounded quarterly (four times a year).
a. Show that the interest accumulated after $n$ quarters is $\text{\$}10(\frac{{1.01}^{n+1}-1}{0.01}-n).$
b. Find the first eight terms of the sequence.
c. How much interest has accumulated after $2$ years?
:::

:::exercise {fs-id1169737232404} type= 
PROBLEM:
**[T]** Suppose that the amount of a drug in a patient’s system diminishes by a multiplicative factor $r<1$ each hour. Suppose that a new dose is administered every $N$ hours. Find an expression that gives the amount $A(n)$ in the patient’s system after $n$ hours for each $n$ in terms of the dosage $d$ and the ratio $r.$ (*Hint:* Write $n=mN+k,$ where $0\le k<N,$ and sum over values from the different doses administered.)
SOLUTION:
The part of the first dose after $n$ hours is $d{r}^{n},$ the part of the second dose is $d{r}^{n-N},$ and, in general, the part remaining of the $m\text{th}$ dose is $d{r}^{n-mN},$ so
$A(n)={\displaystyle \sum_{l=0}^{m} d{r}^{n-lN}=}{\displaystyle \sum_{l=0}^{m} d{r}^{k+(m-l)N}={\displaystyle \sum_{q=0}^{m} d{r}^{k+qN}}=d{r}^{k}}{\displaystyle \sum_{q=0}^{m} {r}^{Nq}=}d{r}^{k}\frac{1-{r}^{(m+1)N}}{1-{r}^{N}},n=k+mN.$
:::

:::exercise {fs-id1169737233812} type= 
PROBLEM:
**[T]** A certain drug is effective for an average patient only if there is at least $1$ mg per kg in the patient’s system, while it is safe only if there is at most $2$ mg per kg in an average patient’s system. Suppose that the amount in a patient’s system diminishes by a multiplicative factor of $0.9$ each hour after a dose is administered. Find the maximum interval $N$ of hours between doses, and corresponding dose range $d$ (in mg/kg) for this $N$ that will enable use of the drug to be both safe and effective in the long term.
:::

:::exercise {fs-id1169738169302} type= 
PROBLEM:
Suppose that ${a}_{n}\ge 0$ is a sequence of numbers. Explain why the sequence of partial sums of ${a}_{n}$ is increasing.
SOLUTION:
${S}_{N+1}={a}_{N+1}+{S}_{N}\ge {S}_{N}$
:::

:::exercise {fs-id1169738169379} type= 
PROBLEM:
**[T]** Suppose that ${a}_{n}$ is a sequence of positive numbers and the sequence ${S}_{n}$ of partial sums of ${a}_{n}$ is bounded above. Explain why ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ converges. Does the conclusion remain true if we remove the hypothesis ${a}_{n}\ge 0\text{?}$
:::

:::exercise {fs-id1169738254653} type= 
PROBLEM:
**[T]** Suppose that ${a}_{1}={S}_{1}=1$ and that, for given numbers $S>1$ and $0<k<1,$ one defines ${a}_{n+1}=k(S-{S}_{n})$ and ${S}_{n+1}={a}_{n+1}+{S}_{n}.$ Does ${S}_{n}$ converge? If so, to what? (*Hint:* First argue that ${S}_{n}<S$ for all $n$ and ${S}_{n}$ is increasing.)
SOLUTION:
Since $S>1,$ ${a}_{2}>0,$ and since $k<1,$ ${S}_{2}=1+{a}_{2}<1+(S-1)=S.$ If ${S}_{n}>S$ for some *n*, then there is a smallest *n*. For this *n*, $S>{S}_{n-1},$ so ${S}_{n}={S}_{n-1}+k(S-{S}_{n-1})$ $=kS+(1-k){S}_{n-1}<S,$ a contradiction. Thus ${S}_{n}<S$ and ${a}_{n+1}>0$ for all *n*, so ${S}_{n}$ is increasing and bounded by $S.$ Let ${S}_{\text{∗}}=\text{lim}\;{S}_{n}.$ If ${S}_{\text{∗}}<S,$ then $δ=k(S-{S}_{\text{∗}})>0,$ but we can find *n* such that ${S}_{*}-{S}_{n}<δ\text{/}2,$ which implies that ${S}_{n+1}={S}_{n}+k(S-{S}_{n})$ $>{S}_{*}+δ\text{/}2,$ contradicting that ${S}_{n}$ is increasing to ${S}_{\text{∗}}.$ Thus ${S}_{n}\to S.$
:::

:::exercise {fs-id1169737142884} type= 
PROBLEM:
**[T]** A version of {index:von Bertalanffy growth} can be used to estimate the age of an individual in a homogeneous species from its length if the annual increase in year $n+1$ satisfies ${a}_{n+1}=k(S-{S}_{n}),$ with ${S}_{n}$ as the length at year $n,$ $S$ as a limiting length, and $k$ as a relative growth constant. If ${S}_{1}=3,$ $S=9,$ and $k=1\text{/}2,$ numerically estimate the smallest value of $n$ such that ${S}_{n}\ge 8.$ Note that ${S}_{n+1}={S}_{n}+{a}_{n+1}.$ Find the corresponding $n$ when $k=1\text{/}4.$
:::

:::exercise {fs-id1169737395546} type= 
PROBLEM:
**[T]** Suppose that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}$ is a convergent series of positive terms. Explain why $\lim_{N\to \infty}{\displaystyle \sum_{n=N+1}^{\infty} {a}_{n}=0}.$
SOLUTION:
Let ${S}_{k}={\displaystyle \sum_{n=1}^{k} {a}_{n}}$ and ${S}_{k}\to L.$ Then ${S}_{k}$ eventually becomes arbitrarily close to $L,$ which means that $L-{S}_{N}={\displaystyle \sum_{n=N+1}^{\infty} {a}_{n}}$ becomes arbitrarily small as $N\to \infty .$
:::

:::exercise {fs-id1169737985841} type= 
PROBLEM:
**[T]** Find the length of the dashed zig-zag path in the following figure.

> IMAGE {img:fs-id1169295672942} src=../../media/CNX_Calc_Figure_08_02_202-7c1e.jpg
> alt: This is a triangle drawn in quadrant 1 with vertices at (1, 1), (0, 0), and (1, 0). The zigzag line is drawn starting at (1, 0) and goes to the middle of the hypotenuse at (0.5, 0.5), point (1, 0.5), up to point (0.75, 0.75), across to point (1, 0.75), and so on until it converges on the top vertex.

:::

:::exercise {fs-id1169737985941} type= 
PROBLEM:
**[T]** Find the total length of the dashed path in the following figure.

> IMAGE {img:fs-id1169738163496} src=../../media/CNX_Calc_Figure_09_02_203.jpg
> alt: This is a triangle drawn in quadrant 1 with vertices at (1, 1), (0, 0), and (1, 0). The zigzag line is drawn starting at (0.5, 0) and goes to the middle of the hypotenuse, the midpoint between that point and the vertical leg, the midpoint of the upper half of the hypotenuse, the midpoint between that point and the vertical leg, and so on until it converges on the top vertex.

SOLUTION:
$L=(1+\frac{1}{2}){\displaystyle \sum_{n=1}^{\infty} 1\text{/}{2}^{n}=}\frac{3}{2}.$
:::

:::exercise {fs-id1169738163513} type= 
PROBLEM:
**[T]** The {index:Sierpinski triangle} is obtained from a triangle by deleting the middle fourth as indicated in the first step, by deleting the middle fourths of the remaining three congruent triangles in the second step, and in general deleting the middle fourths of the remaining triangles in each successive step. Assuming that the original triangle is shown in the figure, find the areas of the remaining parts of the original triangle after $N$ steps and find the total length of all of the boundary triangles after $N$ steps.

> IMAGE {img:fs-id1169295673099} src=../../media/CNX_Calc_Figure_08_02_204-4134.jpg
> alt: A geometric fractal pattern, resembling a Sierpinski triangle, is shown within a right-angled triangle on an x-y coordinate plane. Shaded regions highlight the intricate self-similar design.

:::

:::exercise {fs-id1169737904556} type= 
PROBLEM:
**[T]** The Sierpinski gasket is obtained by dividing the unit square into nine equal sub-squares, removing the middle square, then doing the same at each stage to the remaining sub-squares. The figure shows the remaining set after four iterations. Compute the total area removed after $N$ stages, and compute the length the total perimeter of the remaining set after $N$ stages.

> IMAGE {img:fs-id1169737904586} src=../../media/CNX_Calc_Figure_09_02_205.jpg
> alt: This is a black square with many smaller squares removed from it, leaving behind blank spaces in a pattern of squares. There are four iterations of the removal process. At the first, the central 1/9 square area is removed. Each side is 1/3 of that of the next larger square. Next, eight smaller squares are removed around this one. Eight smaller squares are removed from around each of those – 64 in total. Eight even smaller ones are removed from around each of those 64.

SOLUTION:
At stage one a square of area $1\text{/}9$ is removed, at stage $2$ one removes $8$ squares of area $1\text{/}{9}^{2},$ at stage three one removes ${8}^{2}$ squares of area $1\text{/}{9}^{3},$ and so on. The total removed area after $N$ stages is ${\displaystyle \sum_{n=0}^{N-1} {8}^{N}\text{/}{9}^{N+1}}=\frac{1}{8}(1-{(8\text{/}9)}^{N})\text{/}(1-8\text{/}9)\to 1$
as $N\to \infty .$ The total perimeter is $4+4{\displaystyle \underset{n=0}{\sum}{8}^{N}\text{/}{3}^{N+1}}\to \infty .$
:::

## Glossary
- {def} **convergence of a series**: a series converges if the sequence of partial sums for that series converges
- {def} **divergence of a series**: a series diverges if the sequence of partial sums for that series diverges
- {def} **geometric series**: a geometric series is a series that can be written in the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}a{r}^{n-1}=a+ar+a{r}^{2}+a{r}^{3}+\text{⋯}$  {eq:fs-id1169736694662}

- {def} **harmonic series**: the harmonic series takes the form

$\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}\frac{1}{n}=1+\frac{1}{2}+\frac{1}{3}+\text{⋯}$  {eq:fs-id1169736694749}

- {def} **infinite series**: an infinite series is an expression of the form

${a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}=\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$  {eq:fs-id1169736893183}

- {def} **partial sum**: the $k\text{th}$ partial sum of the infinite series $\overset{\infty}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}$ is the finite sum

${S}_{k}=\overset{k}{\underset{n=1}{{\displaystyle \sum}}}{a}_{n}={a}_{1}+{a}_{2}+{a}_{3}+\text{⋯}+{a}_{k}$  {eq:fs-id1169739133142}

- {def} **telescoping series**: a telescoping series is one in which most of the terms cancel in each of the partial sums

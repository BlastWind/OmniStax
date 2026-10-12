# Properties of Power Series

## Learning Objectives {section:learning-objectives}
- Combine power series by addition or subtraction.
- Create a new power series by multiplication by a power of the variable or a constant, or by substitution.
- Multiply two power series together.
- Differentiate and integrate power series term-by-term.

In the preceding section on power series and functions we showed how to represent certain functions using power series. In this section we discuss how power series can be combined, differentiated, or integrated to create new power series. This capability is particularly useful for a couple of reasons. First, it allows us to find power series representations for certain elementary functions, by writing those functions in terms of functions with known power series. For example, given the power series representation for $f(x)=\frac{1}{1-x},$ we can find a power series representation for ${f}^{'}(x)=\frac{1}{{(1-x)}^{2}}.$ Second, being able to create power series allows us to define new functions that cannot be written in terms of elementary functions. This capability is particularly useful for solving differential equations for which there is no solution in terms of elementary functions.

## Combining Power Series
If we have two power series with the same interval of convergence, we can add or subtract the two series to create a new power series, also with the same interval of convergence. Similarly, we can multiply a power series by a power of *x* or evaluate a power series at ${x}^{m}$ for a positive integer *m* to create a new power series. Being able to do this allows us to find power series representations for certain functions by using power series representations of other functions. For example, since we know the power series representation for $f(x)=\frac{1}{1-x},$ we can find power series representations for related functions, such as

$y=\frac{3x}{1-{x}^{2}}\;\text{and}\;y=\frac{1}{(x-1)(x-3)}.$  {eq:fs-id1167023767309}

In [ref:fs-id1167023714096] we state results regarding addition or subtraction of power series, composition of a power series, and multiplication of a power series by a power of the variable. For simplicity, we state the theorem for power series centered at $x=0.$ Similar results hold for power series centered at $x=a.$

:::note [theorem] Combining Power Series
Suppose that the two power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}$ converge to the functions *f* and *g*, respectively, on a common interval *I*.
1. The power series ${\displaystyle \sum_{n=0}^{\infty} ({c}_{n}{x}^{n}\pm {d}_{n}{x}^{n})}$ converges to $f\pm g$ on *I*.
2. For any integer $m\ge 0$ and any real number *b*, the power series ${\displaystyle \sum_{n=0}^{\infty} b{x}^{m}{c}_{n}{x}^{n}}$ converges to $b{x}^{m}f(x)$ on *I*.
3. For any integer $m\ge 0$ and any real number *b*, the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(b{x}^{m})}^{n}}$ converges to $f(b{x}^{m})$ for all *x* such that $b{x}^{m}$ is in *I*.
:::

### Proof
We prove i. in the case of the series ${\displaystyle \sum_{n=0}^{\infty} ({c}_{n}{x}^{n}+{d}_{n}{x}^{n})}.$ Suppose that ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}$ converge to the functions *f* and *g*, respectively, on the interval *I*. Let *x* be a point in *I* and let ${S}_{N}(x)$ and ${T}_{N}(x)$ denote the *N*th partial sums of the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}},$ respectively. Then the sequence $\{{S}_{N}(x)\}$ converges to $f(x)$ and the sequence $\{{T}_{N}(x)\}$ converges to $g(x).$ Furthermore, the *N*th partial sum of ${\displaystyle \sum_{n=0}^{\infty} ({c}_{n}{x}^{n}+{d}_{n}{x}^{n})}$ is

$\begin{array}{rl}{\displaystyle \sum_{n=0}^{N} ({c}_{n}{x}^{n}+{d}_{n}{x}^{n})} & ={\displaystyle \sum_{n=0}^{N} {c}_{n}{x}^{n}}+{\displaystyle \sum_{n=0}^{N} {d}_{n}{x}^{n}} \\ & ={S}_{N}(x)+{T}_{N}(x).\end{array}$  {eq:fs-id1167023750821}

Because

$\begin{array}{rl}\lim_{N\to \infty}({S}_{N}(x)+{T}_{N}(x)) & =\lim_{N\to \infty}{S}_{N}(x)+\lim_{N\to \infty}{T}_{N}(x) \\ & =f(x)+g(x),\end{array}$  {eq:fs-id1167023910996}

we conclude that the series ${\displaystyle \sum_{n=0}^{\infty} ({c}_{n}{x}^{n}+{d}_{n}{x}^{n})}$ converges to $f(x)+g(x)\text{on}I.$
□
We examine products of power series in a later theorem. First, we show several applications of [ref:fs-id1167023714096] and how to find the interval of convergence of a power series given the interval of convergence of a related power series.

:::example {ex:fs-id1167023715788} Combining Power Series

:::exercise {fs-id1167023722987} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ is a power series whose interval of convergence is $(−1,1),$ and suppose that ${\displaystyle \sum_{n=0}^{\infty} {b}_{n}{x}^{n}}$ is a power series whose interval of convergence is $(−2,2).$
a. Find the interval of convergence of the series ${\displaystyle \sum_{n=0}^{\infty} ({a}_{n}{x}^{n}+{b}_{n}{x}^{n})}.$
b. Find the interval of convergence of the series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{3}^{n}{x}^{n}}.$
SOLUTION:
a. Since the interval $(−1,1)$ is a common interval of convergence of the series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {b}_{n}{x}^{n}},$ the interval of convergence of the series ${\displaystyle \sum_{n=0}^{\infty} ({a}_{n}{x}^{n}+{b}_{n}{x}^{n})}$ is $(−1,1).$
b. Since ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ is a power series centered at zero with radius of convergence 1, it converges for all *x* in the interval $(−1,1).$ By [ref:fs-id1167023714096], the series

${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{3}^{n}{x}^{n}}={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(3x)}^{n}}$  {eq:fs-id1167023810302}

converges if 3*x* is in the interval $(−1,1).$ Therefore, the series converges for all *x* in the interval $(-\frac{1}{3},\frac{1}{3}).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023762728} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ has an interval of convergence of $(−1,1).$ Find the interval of convergence of ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(\frac{x}{2})}^{n}}.$
SOLUTION:
Interval of convergence is $(−2,2).$
COMMENTARY: Hint
Find the values of *x* such that $\frac{x}{2}$ is in the interval $(−1,1).$
:::
:::
In the next example, we show how to use [ref:fs-id1167023714096] and the power series for a function *f* to construct power series for functions related to *f*. Specifically, we consider functions related to the function $f(x)=\frac{1}{1-x}$ and we use the fact that

$\frac{1}{1-x}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}=1+x+{x}^{2}+{x}^{3}+\text{⋯}$  {eq:fs-id1167023913652}

for $|x|<1.$

:::example {ex:fs-id1167023806689} Constructing Power Series from Known Power Series

:::exercise {fs-id1167023806691} type= 
PROBLEM:
Use the power series representation for $f(x)=\frac{1}{1-x}$ combined with [ref:fs-id1167023714096] to construct a power series for each of the following functions. Find the interval of convergence of the power series.
a. $f(x)=\frac{3x}{1+{x}^{2}}$
b. $f(x)=\frac{1}{(x-1)(x-3)}$
SOLUTION:
a. First write $f(x)$ as

$f(x)=3x(\frac{1}{1-(\text{−}{x}^{2})}).$  {eq:fs-id1167023762803}

Using the power series representation for $f(x)=\frac{1}{1-x}$ and parts ii. and iii. of [ref:fs-id1167023714096], we find that a power series representation for *f* is given by

${\displaystyle \sum_{n=0}^{\infty} 3x{(\text{−}{x}^{2})}^{n}}={\displaystyle \sum_{n=0}^{\infty} 3{(−1)}^{n}{x}^{2n+1}}.$  {eq:fs-id1167023795119}

Since the interval of convergence of the series for $\frac{1}{1-x}$ is $(−1,1),$ the interval of convergence for this new series is the set of real numbers *x* such that $|{x}^{2}|<1.$ Therefore, the interval of convergence is $(−1,1).$
b. To find the power series representation, use partial fractions to write $f(x)=\frac{1}{(x-1)(x-3)}$ as the sum of two fractions. We have

$\begin{array}{rl}\frac{1}{(x-1)(x-3)} & =\frac{\text{−}1\text{/}2}{x-1}+\frac{1\text{/}2}{x-3} \\ & =\frac{1\text{/}2}{1-x}-\frac{1\text{/}2}{3-x} \\ & =\frac{1\text{/}2}{1-x}-\frac{1\text{/}6}{1-\frac{x}{3}}.\end{array}$  {eq:fs-id1167023911435}

First, using part ii. of [ref:fs-id1167023714096], we obtain

$\frac{1\text{/}2}{1-x}={\displaystyle \sum_{n=0}^{\infty} \frac{1}{2}{x}^{n}}\;\text{for}\;|x|<1.$  {eq:fs-id1167023772794}

Then, using parts ii. and iii. of [ref:fs-id1167023714096], we have

$\frac{1\text{/}6}{1-x\text{/}3}={\displaystyle \sum_{n=0}^{\infty} \frac{1}{6}{(\frac{x}{3})}^{n}}\;\text{for}\;|x|<3.$  {eq:fs-id1167023766046}

Since we are combining these two power series, the interval of convergence of the difference must be the smaller of these two intervals. Using this fact and part i. of [ref:fs-id1167023714096], we have

$\frac{1}{(x-1)(x-3)}={\displaystyle \sum_{n=0}^{\infty} (\frac{1}{2}-\frac{1}{6\cdot {3}^{n}}){x}^{n}}$  {eq:fs-id1167023920590}

where the interval of convergence is $(−1,1).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023922304} type= 
PROBLEM:
Use the series for $f(x)=\frac{1}{1-x}$ on $|x|<1$ to construct a series for $\frac{1}{(1-x)(x-2)}.$ Determine the interval of convergence.
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} (−1+\frac{1}{{2}^{n+1}}){x}^{n}}.$ The interval of convergence is $(−1,1).$
COMMENTARY: Hint
Use partial fractions to rewrite $\frac{1}{(1-x)(x-2)}$ as the difference of two fractions.
:::
:::
In [ref:fs-id1167023806689], we showed how to find power series for certain functions. In [ref:fs-id1167023772606] we show how to do the opposite: given a power series, determine which function it represents.

:::example {ex:fs-id1167023772606} Finding the Function Represented by a Given Power Series

:::exercise {fs-id1167023772608} type= 
PROBLEM:
Consider the power series ${\displaystyle \sum_{n=0}^{\infty} {2}^{n}{x}^{n}}.$ Find the function *f* represented by this series. Determine the interval of convergence of the series.
SOLUTION:
Writing the given series as

${\displaystyle \sum_{n=0}^{\infty} {2}^{n}{x}^{n}}={\displaystyle \sum_{n=0}^{\infty} {(2x)}^{n}},$  {eq:fs-id1167023766952}

we can recognize this series as the power series for

$f(x)=\frac{1}{1-2x}.$  {eq:fs-id1167023761299}

Since this is a geometric series, the series converges if and only if $|2x|<1.$ Therefore, the interval of convergence is $(-\frac{1}{2},\frac{1}{2}).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023917754} type= 
PROBLEM:
Find the function represented by the power series ${\displaystyle \sum_{n=0}^{\infty} \frac{1}{{3}^{n}}{x}^{n}}.$ Determine its interval of convergence.
SOLUTION:
$f(x)=\frac{3}{3-x}.$ The interval of convergence is $(−3,3).$
COMMENTARY: Hint
Write $\frac{1}{{3}^{n}}{x}^{n}={(\frac{x}{3})}^{n}.$
:::
:::
Recall the questions posed in the chapter opener about which is the better way of receiving payouts from lottery winnings. We now revisit those questions and show how to use series to compare values of payments over time with a lump sum payment today. We will compute how much future payments are worth in terms of today’s dollars, assuming we have the ability to invest winnings and earn interest. The value of future payments in terms of today’s dollars is known as the *present value* of those payments.

:::example {ex:fs-id1167023711689} Chapter Opener: Present Value of Future Winnings

:::exercise {fs-id1167023711691} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_10_02_001} src=../../media/CNX_Calc_Figure_10_02_001.jpg
> alt: This is a picture of a stack of money. There are 100 dollar bills wrapped in groups of $10,000.
> caption: (credit: modification of work by Robert Huffstutter, Flickr)

Suppose you win the lottery and are given the following three options: (1) Receive 20 million dollars today; (2) receive 1.5 million dollars per year over the next 20 years; or (3) receive 1 million dollars per year indefinitely (being passed on to your heirs). Which is the best deal, assuming that the annual interest rate is 5%? We answer this by working through the following sequence of questions.
a. How much is the 1.5 million dollars received annually over the course of 20 years worth in terms of today’s dollars, assuming an annual interest rate of 5%?
b. Use the answer to part a. to find a general formula for the {index:present value} of payments of *C* dollars received each year over the next *n* years, assuming an average annual interest rate *r*.
c. Find a formula for the present value if annual payments of *C* dollars continue indefinitely, assuming an average annual interest rate *r*.
d. Use the answer to part c. to determine the present value of 1 million dollars paid annually indefinitely.
e. Use your answers to parts a. and d. to determine which of the three options is best.
SOLUTION:
a. Consider the payment of 1.5 million dollars made at the end of the first year. If you were able to receive that payment today instead of one year from now, you could invest that money and earn 5% interest. Therefore, the present value of that money *P*<sub>1</sub> satisfies ${P}_{1}(1+0.05)=1.5\;\text{million dollars}.$ We conclude that

${P}_{1}=\frac{1.5}{1.05}=\text{\$}1.429\;\text{million dollars}\text{.}$  {eq:fs-id1167023913770}

Similarly, consider the payment of 1.5 million dollars made at the end of the second year. If you were able to receive that payment today, you could invest that money for two years, earning 5% interest, compounded annually. Therefore, the present value of that money *P*<sub>2</sub> satisfies ${P}_{2}{(1+0.05)}^{2}=1.5\;\text{million dollars}.$ We conclude that

${P}_{2}=\frac{1.5}{{(1.05)}^{2}}=\text{\$}1.361\;\text{million dollars}\text{.}$  {eq:fs-id1167023810435}

The value of the future payments today is the sum of the present values ${P}_{1},{P}_{2},\text{…},{P}_{20}$ of each of those annual payments. The present value *P<sub>k</sub>* satisfies

${P}_{k}=\frac{1.5}{{(1.05)}^{k}}.$  {eq:fs-id1167023767027}

Therefore,

$\begin{array}{rl}P & =\frac{1.5}{1.05}+\frac{1.5}{{(1.05)}^{2}}+\text{⋯}+\frac{1.5}{{(1.05)}^{20}} \\ & =\text{\$}18.693\;\text{million dollars}\text{.}\end{array}$  {eq:fs-id1167023780864}

b. Using the result from part a. we see that the present value *P* of *C* dollars paid annually over the course of *n* years, assuming an annual interest rate *r*, is given by

$P=\frac{C}{1+r}+\frac{C}{{(1+r)}^{2}}+\text{⋯}+\frac{C}{{(1+r)}^{n}}\;\text{dollars}\text{.}$  {eq:fs-id1167023780795}

c. Using the result from part b. we see that the present value of an annuity that continues indefinitely is given by the infinite series

$P={\displaystyle \sum_{n=0}^{\infty} \frac{C}{{(1+r)}^{n+1}}}.$  {eq:fs-id1167023760515}

We can view the present value as a power series in *r*, which converges as long as $|\frac{1}{1+r}|<1.$ Since $r>0,$ this series converges. Rewriting the series as

$P=\frac{C}{(1+r)}{\displaystyle \sum_{n=0}^{\infty} {(\frac{1}{1+r})}^{n}},$  {eq:fs-id1167023761425}

we recognize this series as the power series for

$f(r)=\frac{1}{1-(\frac{1}{1+r})}=\frac{1}{(\frac{r}{1+r})}=\frac{1+r}{r}.$  {eq:fs-id1167023761021}

We conclude that the present value of this annuity is

$P=\frac{C}{1+r}\cdot \frac{1+r}{r}=\frac{C}{r}.$  {eq:fs-id1167023920708}

d. From the result to part c. we conclude that the present value *P* of $C=1\;\text{million dollars}$ paid out every year indefinitely, assuming an annual interest rate $r=0.05,$ is given by

$P=\frac{1}{0.05}=20\;\text{million dollars}\text{.}$  {eq:fs-id1167023911493}

e. From part a. we see that receiving $1.5 million dollars over the course of 20 years is worth $18.693 million dollars in today’s dollars. From part d. we see that receiving $1 million dollars per year indefinitely is worth $20 million dollars in today’s dollars. Therefore, either receiving a lump-sum payment of $20 million dollars today or receiving $1 million dollars indefinitely have the same present value.
:::
:::

## Multiplication of Power Series
We can also create new power series by multiplying power series. Being able to multiply two power series provides another way of finding power series representations for functions.
The way we multiply them is similar to how we multiply polynomials. For example, suppose we want to multiply

${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯}$  {eq:fs-id1167023771450}

and

${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}={d}_{0}+{d}_{1}x+{d}_{2}{x}^{2}+\text{⋯}.$  {eq:fs-id1167023803420}

It appears that the product should satisfy

$\begin{array}{rl}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}})({\displaystyle \sum_{n=−0}^{\infty} {d}_{n}{x}^{n}}) & =({c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯})\cdot ({d}_{0}+{d}_{1}x+{d}_{2}{x}^{2}+\text{⋯}) \\ & ={c}_{0}{d}_{0}+({c}_{1}{d}_{0}+{c}_{0}{d}_{1})\;x+({c}_{2}{d}_{0}+{c}_{1}{d}_{1}+{c}_{0}{d}_{2})\;{x}^{2}+\text{⋯}.\end{array}$  {eq:fs-id1167023805859}

In [ref:fs-id1167023808343], we state the main result regarding multiplying power series, showing that if ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}$ converge on a common interval *I*, then we can multiply the series in this way, and the resulting series also converges on the interval *I*.

:::note [theorem] Multiplying Power Series
Suppose that the power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}$ converge to *f* and *g*, respectively, on a common interval *I*. Let

$\begin{array}{rl}{e}_{n} & ={c}_{0}{d}_{n}+{c}_{1}{d}_{n-1}+{c}_{2}{d}_{n-2}+\text{⋯}+{c}_{n-1}{d}_{1}+{c}_{n}{d}_{0} \\ & ={\displaystyle \sum_{k=0}^{n} {c}_{k}{d}_{n-k}}.\end{array}$  {eq:fs-id1167023809633}

Then

$({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}})({\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}})={\displaystyle \sum_{n=0}^{\infty} {e}_{n}{x}^{n}}$  {eq:fs-id1167023777236}

and

${\displaystyle \sum_{n=0}^{\infty} {e}_{n}{x}^{n}}\;\text{converges to}\;f(x)\cdot g(x)\;\text{on}\;I.$  {eq:fs-id1171361418902}

The series ${\displaystyle \sum_{n=0}^{\infty} {e}_{n}}{x}^{n}$ is known as the Cauchy product of the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}.$
:::
We omit the proof of this theorem, as it is beyond the level of this text and is typically covered in a more advanced course. We now provide an example of this theorem by finding the power series representation for

$f(x)=\frac{1}{(1-x)(1-{x}^{2})}$  {eq:fs-id1167023922196}

using the power series representations for

$y=\frac{1}{1-x}\;\text{and}\;y=\frac{1}{1-{x}^{2}}.$  {eq:fs-id1167023770169}

:::example {ex:fs-id1167023799559} Multiplying Power Series

:::exercise {fs-id1167023799561} type= 
PROBLEM:
Multiply the power series representation

$\begin{array}{rl}\frac{1}{1-x} & ={\displaystyle \sum_{n=0}^{\infty} {x}^{n}} \\ & =1+x+{x}^{2}+{x}^{3}+\text{⋯}\end{array}$  {eq:fs-id1167023799572}

for $|x|<1$ with the power series representation

$\begin{array}{rl}\frac{1}{1-{x}^{2}} & ={\displaystyle \sum_{n=0}^{\infty} {({x}^{2})}^{n}} \\ & =1+{x}^{2}+{x}^{4}+{x}^{6}+\text{⋯}\end{array}$  {eq:fs-id1167023783678}

for $|x|<1$ to construct a power series for $f(x)=\frac{1}{(1-x)(1-{x}^{2})}$ on the interval $(−1,1).$
SOLUTION:
We need to multiply

$(1+x+{x}^{2}+{x}^{3}+\text{⋯})(1+{x}^{2}+{x}^{4}+{x}^{6}+\text{⋯}).$  {eq:fs-id1167023764076}

Writing out the first several terms, we see that the product is given by

$\begin{array}{l}(1+{x}^{2}+{x}^{4}+{x}^{6}+\text{⋯})+(x+{x}^{3}+{x}^{5}+{x}^{7}+\text{⋯})+({x}^{2}+{x}^{4}+{x}^{6}+{x}^{8}+\text{⋯})+({x}^{3}+{x}^{5}+{x}^{7}+{x}^{9}+\text{⋯}) \\ =1+x+(1+1){x}^{2}+(1+1){x}^{3}+(1+1+1){x}^{4}+(1+1+1){x}^{5}+\text{⋯} \\ =1+x+2{x}^{2}+2{x}^{3}+3{x}^{4}+3{x}^{5}+\text{⋯}.\end{array}$  {eq:fs-id1167023809755}

Since the series for $y=\frac{1}{1-x}$ and $y=\frac{1}{1-{x}^{2}}$ both converge on the interval $(−1,1),$ the series for the product also converges on the interval $(−1,1).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023797333} type= 
PROBLEM:
Multiply the series $\frac{1}{1-x}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$ by itself to construct a series for $\frac{1}{(1-x)(1-x)}.$
SOLUTION:
$1+2x+3{x}^{2}+4{x}^{3}+\text{⋯}$
COMMENTARY: Hint
Multiply the first few terms of $(1+x+{x}^{2}+{x}^{3}+\text{⋯})(1+x+{x}^{2}+{x}^{3}+\text{⋯}).$
:::
:::

## Differentiating and Integrating Power Series
Consider a power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯}$ that converges on some interval *I*, and let $f$ be the function defined by this series. Here we address two questions about $f.$
- Is $f$ differentiable, and if so, how do we determine the derivative ${f}^{'}?$
- How do we evaluate the indefinite integral ${\displaystyle \int f(x)\;dx}?$
We know that, for a polynomial with a finite number of terms, we can evaluate the derivative by differentiating each term separately. Similarly, we can evaluate the indefinite integral by integrating each term separately. Here we show that we can do the same thing for convergent power series. That is, if

$f(x)={\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯}$  {eq:fs-id1167023761842}

converges on some interval *I*, then

${f}^{'}(x)={c}_{1}+2{c}_{2}x+3{c}_{3}{x}^{2}+\text{⋯}$  {eq:fs-id1167023761914}

and

${\displaystyle \int f(x)\;dx}=C+{c}_{0}x+{c}_{1}\frac{{x}^{2}}{2}+{c}_{2}\frac{{x}^{3}}{3}+\text{⋯}$  {eq:fs-id1167023761573}

converges on *I*. As noted below, behavior at the endpoints of the interval must be investigated individually.
Evaluating the derivative and indefinite integral in this way is called {term:term-by-term differentiation of a power series} and {term:term-by-term integration of a power series}, respectively. The ability to differentiate and integrate power series term-by-term also allows us to use known power series representations to find power series representations for other functions. For example, given the power series for $f(x)=\frac{1}{1-x},$ we can differentiate term-by-term to find the power series for ${f}^{'}(x)=\frac{1}{{(1-x)}^{2}}.$ Similarly, using the power series for $g(x)=\frac{1}{1+x},$ we can integrate term-by-term to find the power series for $G(x)=\text{ln}\;(1+x),$ an antiderivative of *g*. We show how to do this in [ref:fs-id1167023766613] and [ref:fs-id1167023911153]. First, we state [ref:fs-id1167023789599], which provides the main result regarding differentiation and integration of power series.

:::note [theorem] Term-by-Term Differentiation and Integration for Power Series
Suppose that the power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ converges on the interval $(a-R,a+R)$ for some $R>0.$ Let *f* be the function defined by the series

$\begin{array}{rl}f(x) & ={\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}} \\ & ={c}_{0}+{c}_{1}(x-a)+{c}_{2}{(x-a)}^{2}+{c}_{3}{(x-a)}^{3}+\text{⋯}\end{array}$  {eq:fs-id1167023789693}

for $|x-a|<R.$ Then *f* is differentiable on the interval $(a-R,a+R)$ and we can find ${f}^{'}$ by differentiating the series term-by-term:

$\begin{array}{rl}{f}^{'}(x) & ={\displaystyle \sum_{n=1}^{\infty} n{c}_{n}{(x-a)}^{n-1}} \\ & ={c}_{1}+2{c}_{2}(x-a)+3{c}_{3}{(x-a)}^{2}+\text{⋯}\end{array}$  {eq:fs-id1167023790437}

for $|x-a|<R.$ Also, to find ${\displaystyle \int f(x)\;dx},$ we can integrate the series term-by-term. The resulting series converges on $(a-R,a+R),$ and we have

$\begin{array}{rl}{\displaystyle \int f(x)\;dx} & =C+{\displaystyle \sum_{n=0}^{\infty} {c}_{n}\frac{{(x-a)}^{n+1}}{n+1}} \\ & =C+{c}_{0}(x-a)+{c}_{1}\frac{{(x-a)}^{2}}{2}+{c}_{2}\frac{{(x-a)}^{3}}{3}+\text{⋯}\end{array}$  {eq:fs-id1167023916569}

for $|x-a|<R.$
:::
The proof of this result is beyond the scope of the text and is omitted. Note that although [ref:fs-id1167023789599] guarantees the same radius of convergence when a power series is differentiated or integrated term-by-term, it says nothing about what happens at the endpoints. It is possible that the differentiated and integrated power series have different behavior at the endpoints than does the original series. We see this behavior in the next examples.

:::example {ex:fs-id1167023766613} Differentiating Power Series

:::exercise {fs-id1167023766615} type= 
PROBLEM:
a. Use the power series representation

$\begin{array}{rl}f(x) & =\frac{1}{1-x} \\ & ={\displaystyle \sum_{n=0}^{\infty} {x}^{n}} \\ & =1+x+{x}^{2}+{x}^{3}+\text{⋯}\end{array}$  {eq:fs-id1167023766633}

for $|x|<1$ to find a power series representation for

$g(x)=\frac{1}{{(1-x)}^{2}}$  {eq:fs-id1167023770529}

on the interval $(−1,1).$ Determine whether the resulting series converges at the endpoints.
b. Use the result of part a. to evaluate the sum of the series ${\displaystyle \sum_{n=0}^{\infty} \frac{n+1}{{4}^{n}}}.$
SOLUTION:
a. Since $g(x)=\frac{1}{{(1-x)}^{2}}$ is the derivative of $f(x)=\frac{1}{1-x},$ we can find a power series representation for *g* by differentiating the power series for *f* term-by-term. The result is

$\begin{array}{rl}g(x) & =\frac{1}{{(1-x)}^{2}} \\ & =\frac{d}{dx}(\frac{1}{1-x}) \\ & ={\displaystyle \sum_{n=0}^{\infty} \frac{d}{dx}({x}^{n})} \\ & =\frac{d}{dx}(1+x+{x}^{2}+{x}^{3}+\text{⋯}) \\ & =0+1+2x+3{x}^{2}+4{x}^{3}+\text{⋯} \\ & ={\displaystyle \sum_{n=0}^{\infty} (n+1){x}^{n}}\end{array}$  {eq:fs-id1167023778480}

for $|x|<1.$ [ref:fs-id1167023789599] does not guarantee anything about the behavior of this series at the endpoints. Testing the endpoints by using the divergence test, we find that the series diverges at both endpoints $x=\text{±}1.$ Note that this is the same result found in [ref:fs-id1167023799559].
b. From part a. we know that

${\displaystyle \sum_{n=0}^{\infty} (n+1){x}^{n}}=\frac{1}{{(1-x)}^{2}}.$  {eq:fs-id1167023784746}

Therefore,

$\begin{array}{rl}{\displaystyle \sum_{n=0}^{\infty} \frac{n+1}{{4}^{n}}} & ={\displaystyle \sum_{n=0}^{\infty} (n+1){(\frac{1}{4})}^{n}} \\ & =\frac{1}{{(1-\frac{1}{4})}^{2}} \\ & =\frac{1}{{(\frac{3}{4})}^{2}} \\ & =\frac{16}{9}.\end{array}$  {eq:fs-id1167023784817}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023778776} type= 
PROBLEM:
Differentiate the series $\frac{1}{{(1-x)}^{2}}={\displaystyle \sum_{n=0}^{\infty} (n+1){x}^{n}}$ term-by-term to find a power series representation for $\frac{2}{{(1-x)}^{3}}$ on the interval $(−1,1).$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} (n+2)(n+1){x}^{n}}$
COMMENTARY: Hint
Write out the first several terms and apply the power rule.
:::
:::

:::example {ex:fs-id1167023911153} Integrating Power Series

:::exercise {fs-id1167023911155} type= 
PROBLEM:
For each of the following functions *f*, find a power series representation for *f* by integrating the power series for ${f}^{'}$ and find its interval of convergence.
a. $f(x)=\text{ln}\;(1+x)$
b. $f(x)={\text{tan}}^{−1}x$
SOLUTION:
a. For $f(x)=\text{ln}\;(1+x),$ the derivative is ${f}^{'}(x)=\frac{1}{1+x}.$ We know that

$\begin{array}{rl}\frac{1}{1+x} & =\frac{1}{1-(\text{−}x)} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(\text{−}x)}^{n}} \\ & =1-x+{x}^{2}-{x}^{3}+\text{⋯}\end{array}$  {eq:fs-id1167023807109}

for $|x|<1.$ To find a power series for $f(x)=\text{ln}\;(1+x),$ we integrate the series term-by-term.

$\begin{array}{rl}{\displaystyle \int {f}^{'}(x)\;dx} & ={\displaystyle \int (1-x+{x}^{2}-{x}^{3}+\text{⋯})\;dx} \\ & =C+x-\frac{{x}^{2}}{2}+\frac{{x}^{3}}{3}-\frac{{x}^{4}}{4}+\text{⋯}\end{array}$  {eq:fs-id1167023809849}

Since $f(x)=\text{ln}\;(1+x)$ is an antiderivative of $\frac{1}{1+x},$ it remains to solve for the constant *C*. Since $\text{ln}\;(1+0)=0,$ we have $C=0.$ Therefore, a power series representation for $f(x)=\text{ln}\;(1+x)$ is

$\begin{array}{rl}\text{ln}\;(1+x) & =x-\frac{{x}^{2}}{2}+\frac{{x}^{3}}{3}-\frac{{x}^{4}}{4}+\text{⋯} \\ & ={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{x}^{n}}{n}}\end{array}$  {eq:fs-id1167023775238}

for $|x|<1.$ [ref:fs-id1167023789599] does not guarantee anything about the behavior of this power series at the endpoints. However, checking the endpoints, we find that at $x=1$ the series is the alternating harmonic series, which converges. Also, at $x=−1,$ the series is the harmonic series, which diverges. It is important to note that, even though this series converges at $x=1,$ [ref:fs-id1167023789599] does not guarantee that the series actually converges to $\text{ln}\;(2).$ In fact, the series does converge to $\text{ln}\;(2),$ but showing this fact requires more advanced techniques. (Abel’s theorem, covered in more advanced texts, deals with this more technical point.) The interval of convergence is $(−1,1].$
b. The derivative of $f(x)={\text{tan}}^{−1}x$ is ${f}^{'}(x)=\frac{1}{1+{x}^{2}}.$ We know that

$\begin{array}{rl}\frac{1}{1+{x}^{2}} & =\frac{1}{1-(\text{−}{x}^{2})} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(\text{−}{x}^{2})}^{n}} \\ & =1-{x}^{2}+{x}^{4}-{x}^{6}+\text{⋯}\end{array}$  {eq:fs-id1167023787852}

for $|x|<1.$ To find a power series for $f(x)={\text{tan}}^{−1}x,$ we integrate this series term-by-term.

$\begin{array}{rl}{\displaystyle \int {f}^{'}(x)\;dx} & ={\displaystyle \int (1-{x}^{2}+{x}^{4}-{x}^{6}+\text{⋯})\;dx} \\ & =C+x-\frac{{x}^{3}}{3}+\frac{{x}^{5}}{5}-\frac{{x}^{7}}{7}+\text{⋯}\end{array}$  {eq:fs-id1167023811464}

Since ${\text{tan}}^{−1}(0)=0,$ we have $C=0.$ Therefore, a power series representation for $f(x)={\text{tan}}^{−1}x$ is

$\begin{array}{rl}{\text{tan}}^{−1}x & =x-\frac{{x}^{3}}{3}+\frac{{x}^{5}}{5}-\frac{{x}^{7}}{7}+\text{⋯} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n+1}}{2n+1}}\end{array}$  {eq:fs-id1167023802567}

for $|x|<1.$ Again, [ref:fs-id1167023789599] does not guarantee anything about the convergence of this series at the endpoints. However, checking the endpoints and using the alternating series test, we find that the series converges at $x=1$ and $x=−1.$ As discussed in part a., using Abel’s theorem, it can be shown that the series actually converges to ${\text{tan}}^{−1}(1)$ and ${\text{tan}}^{−1}(−1)$ at $x=1$ and $x=−1,$ respectively. Thus, the interval of convergence is $[−1,1].$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023788085} type= 
PROBLEM:
Integrate the power series $\text{ln}\;(1+x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{x}^{n}}{n}}$ term-by-term to evaluate ${\displaystyle \int \text{ln}\;(1+x)\;dx}.$
SOLUTION:
${\displaystyle \sum_{n=2}^{\infty} \frac{{(−1)}^{n}{x}^{n}}{n(n-1)}}$
COMMENTARY: Hint
Use the fact that $\frac{{x}^{n+1}}{(n+1)n}$ is an antiderivative of $\frac{{x}^{n}}{n}.$
:::
:::
Up to this point, we have shown several techniques for finding power series representations for functions. However, how do we know that these power series are unique? That is, given a function *f* and a power series for *f* at *a*, is it possible that there is a different power series for *f* at *a* that we could have found if we had used a different technique? The answer to this question is no. This fact should not seem surprising if we think of power series as polynomials with an infinite number of terms. Intuitively, if

${c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯}={d}_{0}+{d}_{1}x+{d}_{2}{x}^{2}+\text{⋯}$  {eq:fs-id1167023777259}

for all values *x* in some open interval *I* about zero, then the coefficients *c<sub>n</sub>* should equal *d<sub>n</sub>* for $n\ge 0.$ We now state this result formally in [ref:fs-id1167023777376].

:::note [theorem] Uniqueness of Power Series
Let ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{(x-a)}^{n}}$ be two convergent power series such that

${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}={\displaystyle \sum_{n=0}^{\infty} {d}_{n}{(x-a)}^{n}}$  {eq:fs-id1167023913935}

for all *x* in an open interval containing *a*. Then ${c}_{n}={d}_{n}$ for all $n\ge 0.$
:::

### Proof
Let

$\begin{array}{rl}f(x) & ={c}_{0}+{c}_{1}(x-a)+{c}_{2}{(x-a)}^{2}+{c}_{3}{(x-a)}^{3}+\text{⋯} \\ & ={d}_{0}+{d}_{1}(x-a)+{d}_{2}{(x-a)}^{2}+{d}_{3}{(x-a)}^{3}+\text{⋯}.\end{array}$  {eq:fs-id1167023763352}

Then $f(a)={c}_{0}={d}_{0}.$ By [ref:fs-id1167023789599], we can differentiate both series term-by-term. Therefore,

$\begin{array}{rl}{f}^{'}(x) & ={c}_{1}+2{c}_{2}(x-a)+3{c}_{3}{(x-a)}^{2}+\text{⋯} \\ & ={d}_{1}+2{d}_{2}(x-a)+3{d}_{3}{(x-a)}^{2}+\text{⋯},\end{array}$  {eq:fs-id1167023919298}

and thus, ${f}^{'}(a)={c}_{1}={d}_{1}.$ Similarly,

$\begin{array}{rl}{f}^{''}(x) & =2{c}_{2}+3\cdot 2{c}_{3}(x-a)+\text{⋯} \\ & =2{d}_{2}+3\cdot 2{d}_{3}(x-a)+\text{⋯}\end{array}$  {eq:fs-id1167023801435}

implies that ${f}^{''}(a)=2{c}_{2}=2{d}_{2},$ and therefore, ${c}_{2}={d}_{2}.$ More generally, for any integer $n\ge 0,{f}^{(n)}(a)=n\text{!}{c}_{n}=n\text{!}{d}_{n},$ and consequently, ${c}_{n}={d}_{n}$ for all $n\ge 0.$
□
In this section we have shown how to find power series representations for certain functions using various algebraic operations, differentiation, or integration. At this point, however, we are still limited as to the functions for which we can find power series representations. Next, we show how to find power series representations for many more functions by introducing Taylor series.

## Key Concepts {section:key-concepts}
- Given two power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and ${\displaystyle \sum_{n=0}^{\infty} {d}_{n}{x}^{n}}$ that converge to functions *f* and *g* on a common interval *I*, the sum and difference of the two series converge to $f\pm g,$ respectively, on *I*. In addition, for any real number *b* and integer $m\ge 0,$ the series ${\displaystyle \sum_{n=0}^{\infty} b{x}^{m}{c}_{n}{x}^{n}}$ converges to $b{x}^{m}f(x)$ and the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(b{x}^{m})}^{n}}$ converges to $f(b{x}^{m})$ whenever *bx<sup>m</sup>* is in the interval *I*.
- Given two power series that converge on an interval $(\text{−}R,R),$ the Cauchy product of the two power series converges on the interval $(\text{−}R,R).$
- Given a power series that converges to a function *f* on an interval $(\text{−}R,R),$ the series can be differentiated term-by-term and the resulting series converges to ${f}^{'}$ on $(\text{−}R,R).$ The series can also be integrated term-by-term and the resulting series converges to ${\displaystyle \int f(x)\;dx}$ on $(\text{−}R,R).$

##  {section:section-exercises}

:::exercise {fs-id1167023808273} type= 
PROBLEM:
If $f(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$ and $g(x)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{n}}{n\text{!}}},$ find the power series of $\frac{1}{2}(f(x)+g(x))$ and of $\frac{1}{2}(f(x)-g(x)).$
SOLUTION:
$\frac{1}{2}(f(x)+g(x))={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n}}{(2n)\text{!}}}$ and $\frac{1}{2}(f(x)-g(x))={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n+1}}{(2n+1)\text{!}}}.$
:::

:::exercise {fs-id1167023806167} type= 
PROBLEM:
If $C(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n}}{(2n)\text{!}}}$ and $S(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n+1}}{(2n+1)\text{!}}},$ find the power series of $C(x)+S(x)$ and of $C(x)-S(x).$
:::
In the following exercises, use partial fractions to find the power series of each function.

:::exercise {fs-id1167023758021} type= 
PROBLEM:
$\frac{4}{(x-3)(x+1)}$
SOLUTION:
$\frac{4}{(x-3)(x+1)}=\frac{1}{x-3}-\frac{1}{x+1}=-\frac{1}{3(1-\frac{x}{3})}-\frac{1}{1-(\text{−}x)}=-\frac{1}{3}{\displaystyle \sum_{n=0}^{\infty} {(\frac{x}{3})}^{n}}-{\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{n}}={\displaystyle \sum_{n=0}^{\infty} ({(−1)}^{n+1}-\frac{1}{{3}^{n+1}}){x}^{n}}$
:::

:::exercise {fs-id1167023790744} type= 
PROBLEM:
$\frac{3}{(x+2)(x-1)}$
:::

:::exercise {fs-id1167023766302} type= 
PROBLEM:
$\frac{5}{({x}^{2}+4)({x}^{2}-1)}$
SOLUTION:
$\frac{5}{({x}^{2}+4)({x}^{2}-1)}=\frac{1}{{x}^{2}-1}-\frac{1}{4}\;\frac{1}{1+{(\frac{x}{2})}^{2}}=\text{−}\sum_{n=0}^{\infty} {x}^{2n}-\frac{1}{4}\sum_{n=0}^{\infty} {(−1)}^{n}{(\frac{x}{2})}^{2n}=\sum_{n=0}^{\infty} (-1+(−1){\cdot}^{n+1}\frac{1}{{2}^{n+2}}){x}^{2n}$
:::

:::exercise {fs-id1167023795008} type= 
PROBLEM:
$\frac{30}{({x}^{2}+1)({x}^{2}-9)}$
:::
In the following exercises, express each series as a rational function.

:::exercise {fs-id1167023786003} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{x}^{n}}}$
SOLUTION:
$\frac{1}{x}{\displaystyle \sum_{n=0}^{\infty} \frac{1}{{x}^{n}}}=\frac{1}{x}\;\frac{1}{1-\frac{1}{x}}=\frac{1}{x-1}$
:::

:::exercise {fs-id1167023801792} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{x}^{2n}}}$
:::

:::exercise {fs-id1167023801854} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{1}{{(x-3)}^{2n-1}}}$
SOLUTION:
$\frac{1}{x-3}\;\frac{1}{1-\frac{1}{{(x-3)}^{2}}}=\frac{x-3}{{(x-3)}^{2}-1}$
:::

:::exercise {fs-id1167023784985} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} (\frac{1}{{(x-3)}^{2n-1}}-\frac{1}{{(x-2)}^{2n-1}})}$
:::
The following exercises explore applications of {index:annuities}.

:::exercise {fs-id1167023921271} type= 
PROBLEM:
Calculate the present values *P* of an annuity in which $10,000 is to be paid out annually for a period of 20 years, assuming interest rates of $r=0.03,r=0.05,$ and $r=0.07.$
SOLUTION:
$P={P}_{1}+\text{⋯}+{P}_{20}$ where ${P}_{k}=10,000\frac{1}{{(1+r)}^{k}}.$ Then $P=10,000{\displaystyle \sum_{k=1}^{20} \frac{1}{{(1+r)}^{k}}}=10,000\frac{1-{(1+r)}^{−20}}{r}.$ When $r=0.03,P\approx 10,000\;\times \;14.8775=148,775.$ When $r=0.05,P\approx 10,000\;\times \;12.4622=124,622.$ When $r=0.07,P\approx 105,940.$
:::

:::exercise {fs-id1167023772347} type= 
PROBLEM:
Calculate the present values *P* of annuities in which $9,000 is to be paid out annually perpetually, assuming interest rates of $r=0.03,r=0.05$ and $r=0.07.$
:::

:::exercise {fs-id1167023765532} type= 
PROBLEM:
Calculate the annual payouts *C* to be given for 20 years on annuities having present value $100,000 assuming respective interest rates of $r=0.03,r=0.05,$ and $r=0.07.$
SOLUTION:
In general, $P=\frac{C(1-{(1+r)}^{\text{−}N})}{r}$ for *N* years of payouts, or $C=\frac{Pr}{1-{(1+r)}^{\text{−}N}}.$ For $N=20$ and $P=100,000,$ one has $C=6721.57$ when $r=0.03;C=8024.26$ when $r=0.05;$ and $C\approx 9439.29$ when $r=0.07.$
:::

:::exercise {fs-id1167023790908} type= 
PROBLEM:
Calculate the annual payouts *C* to be given perpetually on annuities having present value $100,000 assuming respective interest rates of $r=0.03,r=0.05,$ and $r=0.07.$
:::

:::exercise {fs-id1167023809154} type= 
PROBLEM:
Suppose that an annuity has a present value $P=1\;\text{million dollars}.$ What interest rate *r* would allow for perpetual annual payouts of $50,000?
SOLUTION:
In general, $P=\frac{C}{r}.$ Thus, $r=\frac{C}{P}=5\;\times \;\frac{{10}^{4}}{{10}^{6}}=0.05.$
:::

:::exercise {fs-id1167023809247} type= 
PROBLEM:
Suppose that an annuity has a present value $P=10\;\text{million dollars}\text{.}$ What interest rate *r* would allow for perpetual annual payouts of $100,000?
:::
In the following exercises, express the sum of each power series in terms of geometric series, and then express the sum as a rational function.

:::exercise {fs-id1167023806250} type= 
PROBLEM:
$x+{x}^{2}-{x}^{3}+{x}^{4}+{x}^{5}-{x}^{6}+\text{⋯}$ (*Hint:* Group powers *x*<sup>3*k*</sup>, ${x}^{3k-1},$ and ${x}^{3k-2}.)$
SOLUTION:
$(x+{x}^{2}-{x}^{3})(1+{x}^{3}+{x}^{6}+\text{⋯})=\frac{x+{x}^{2}-{x}^{3}}{1-{x}^{3}}$
:::

:::exercise {fs-id1167023911207} type= 
PROBLEM:
$x+{x}^{2}-{x}^{3}-{x}^{4}+{x}^{5}+{x}^{6}-{x}^{7}-{x}^{8}+\text{⋯}$ (*Hint:* Group powers *x*<sup>4*k*</sup>, ${x}^{4k-1},$ etc.)
:::

:::exercise {fs-id1167023911414} type= 
PROBLEM:
$x-{x}^{2}-{x}^{3}+{x}^{4}-{x}^{5}-{x}^{6}+{x}^{7}-\text{⋯}$ (*Hint:* Group powers *x*<sup>3*k*</sup>, ${x}^{3k-1},$ and ${x}^{3k-2}.)$
SOLUTION:
$(x-{x}^{2}-{x}^{3})(1+{x}^{3}+{x}^{6}+\text{⋯})=\frac{x-{x}^{2}-{x}^{3}}{1-{x}^{3}}$
:::

:::exercise {fs-id1167023755709} type= 
PROBLEM:
$\frac{x}{2}+\frac{{x}^{2}}{4}-\frac{{x}^{3}}{8}+\frac{{x}^{4}}{16}+\frac{{x}^{5}}{32}-\frac{{x}^{6}}{64}+\text{⋯}$ (*Hint:* Group powers ${(\frac{x}{2})}^{3k},{(\frac{x}{2})}^{3k-1},$ and ${(\frac{x}{2})}^{3k-2}.)$
:::
In the following exercises, find the power series of $f(x)g(x)$ given *f* and *g* as defined.

:::exercise {fs-id1167023917584} type= 
PROBLEM:
$f(x)=2{\displaystyle \sum_{n=0}^{\infty} {x}^{n}},g(x)={\displaystyle \sum_{n=0}^{\infty} n{x}^{n}}$
SOLUTION:
${a}_{n}=2,{b}_{n}=n$ so ${c}_{n}={\displaystyle \sum_{k=0}^{n} {b}_{k}{a}_{n-k}}=2{\displaystyle \sum_{k=0}^{n} k}=(n)(n+1)$ and $f(x)g(x)={\displaystyle \sum_{n=1}^{\infty} n(n+1){x}^{n}}$
:::

:::exercise {fs-id1167023798476} type= 
PROBLEM:
$f(x)={\displaystyle \sum_{n=1}^{\infty} {x}^{n}},g(x)={\displaystyle \sum_{n=1}^{\infty} \frac{1}{n}{x}^{n}}.$ Express the coefficients of $f(x)g(x)$ in terms of ${H}_{n}={\displaystyle \sum_{k=1}^{n} \frac{1}{k}}.$
:::

:::exercise {fs-id1167023803703} type= 
PROBLEM:
$f(x)=g(x)={\displaystyle \sum_{n=1}^{\infty} {(\frac{x}{2})}^{n}}$
SOLUTION:
${a}_{n}={b}_{n}={2}^{\text{−}n}$ so ${c}_{n}={\displaystyle \sum_{k=1}^{n-1} {b}_{k}{a}_{n-k}}={2}^{\text{−}n}{\displaystyle \sum_{k=1}^{n-1} 1}=\frac{n-1}{{2}^{n}}$ and $f(x)g(x)={\displaystyle \sum_{n=2}^{\infty} (n-1){(\frac{x}{2})}^{n}}$
:::

:::exercise {fs-id1167023793569} type= 
PROBLEM:
$f(x)=g(x)={\displaystyle \sum_{n=1}^{\infty} n{x}^{n}}$
:::
In the following exercises, differentiate the given series expansion of *f* term-by-term to obtain the corresponding series expansion for the derivative of *f*.

:::exercise {fs-id1167023919662} type= 
PROBLEM:
$f(x)=\frac{1}{1+x}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{n}}$
SOLUTION:
The derivative of $f$ is $-\frac{1}{{(1+x)}^{2}}=\text{−}{\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}(n+1){x}^{n}}.$
:::

:::exercise {fs-id1167023762246} type= 
PROBLEM:
$f(x)=\frac{1}{1-{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {x}^{2n}}$
:::
In the following exercises, integrate the given series expansion of $f$ term-by-term from zero to *x* to obtain the corresponding series expansion for the indefinite integral of $f.$

:::exercise {fs-id1167023809386} type= 
PROBLEM:
$f(x)=\frac{2x}{{(1+{x}^{2})}^{2}}={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}(2n){x}^{2n-1}}$
SOLUTION:
The indefinite integral of $f$ is $-\frac{1}{1+{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{2n}}.$
:::

:::exercise {fs-id1167023917262} type= 
PROBLEM:
$f(x)=\frac{2x}{1+{x}^{2}}=2{\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{2n+1}}$
:::
In the following exercises, evaluate each infinite series by identifying it as the value of a derivative or integral of geometric series.

:::exercise {fs-id1167023917437} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=1}^{\infty} \frac{n}{{2}^{n}}}$ as ${f}^{'}(\frac{1}{2})$ where $f(x)={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}.$
SOLUTION:
$f(x)={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}=\frac{1}{1-x};{f}^{'}(\frac{1}{2})={\displaystyle \sum_{n=1}^{\infty} \frac{n}{{2}^{n-1}}}={\frac{d}{dx}{(1-x)}^{−1}|}_{x=1\text{/}2}={\frac{1}{{(1-x)}^{2}}|}_{x=1\text{/}2}=4$ so ${\displaystyle \sum_{n=1}^{\infty} \frac{n}{{2}^{n}}}=2.$
:::

:::exercise {fs-id1167023786992} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=1}^{\infty} \frac{n}{{3}^{n}}}$ as ${f}^{'}(\frac{1}{3})$ where $f(x)={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}.$
:::

:::exercise {fs-id1167023801056} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=2}^{\infty} \frac{n(n-1)}{{2}^{n}}}$ as ${f}^{''}(\frac{1}{2})$ where $f(x)={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}.$
SOLUTION:
$f(x)={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}=\frac{1}{1-x};{f}^{''}(\frac{1}{2})={\displaystyle \sum_{n=2}^{\infty} \frac{n(n-1)}{{2}^{n-2}}}={\frac{{d}^{2}}{d{x}^{2}}{(1-x)}^{−1}|}_{x=1\text{/}2}={\frac{2}{{(1-x)}^{3}}|}_{x=1\text{/}2}=16$ so ${\displaystyle \sum_{n=2}^{\infty} \frac{n(n-1)}{{2}^{n}}}=4.$
:::

:::exercise {fs-id1167023799889} type= 
PROBLEM:
Evaluate ${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{2n+1}}$ as ${\displaystyle \int_{0}^{1}f(t)\;dt}$ where $f(x)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{2n}}=\frac{1}{1+{x}^{2}}.$
:::
In the following exercises, given that $\frac{1}{1-x}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}},$ use term-by-term differentiation or integration to find power series for each function centered at the given point.

:::exercise {fs-id1167023917976} type= 
PROBLEM:
$f(x)=\text{ln}\;x$ centered at $x=1$ (*Hint:* $x=1-(1-x))$
SOLUTION:
${\displaystyle \int {\displaystyle \sum {(1-x)}^{n}}dx}={\displaystyle \int {\displaystyle \sum {(−1)}^{n}}{(x-1)}^{n}dx}={\displaystyle \sum \frac{{(−1)}^{n}{(x-1)}^{n+1}}{n+1}}$
:::

:::exercise {fs-id1167023920470} type= 
PROBLEM:
$\text{ln}\;(1-x)$ at $x=0$
:::

:::exercise {fs-id1167023803877} type= 
PROBLEM:
$\text{ln}\;(1-{x}^{2})$ at $x=0$
SOLUTION:
$\text{−}{\displaystyle \int_{t=0}^{{x}^{2}}\frac{1}{1-t}dt}=\text{−}{\displaystyle \sum_{n=0}^{\infty} {\displaystyle \int_{0}^{{x}^{2}}{t}^{n}dx}}-{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2(n+1)}}{n+1}}=\text{−}{\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{2n}}{n}}$
:::

:::exercise {fs-id1167023915416} type= 
PROBLEM:
$f(x)=\frac{2x}{{(1-{x}^{2})}^{2}}$ at $x=0$
:::

:::exercise {fs-id1167023776858} type= 
PROBLEM:
$f(x)={\text{tan}}^{−1}({x}^{2})$ at $x=0$
SOLUTION:
${\displaystyle \int_{0}^{{x}^{2}}\frac{dt}{1+{t}^{2}}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{\displaystyle \int_{0}^{{x}^{2}}{t}^{2n}dt}}={{\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{2n+1}}{2n+1}|}}_{t=0}^{{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{4n+2}}{2n+1}}$
:::

:::exercise {fs-id1167023782186} type= 
PROBLEM:
$f(x)=\text{ln}\;(1+{x}^{2})$ at $x=0$
:::

:::exercise {fs-id1167023916301} type= 
PROBLEM:
$f(x)={\displaystyle \int_{0}^{x}\text{ln}\;tdt}$ where $\text{ln}\;(x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}\frac{{(x-1)}^{n}}{n}}$
SOLUTION:
Term-by-term integration gives ${\displaystyle \int_{0}^{x}\text{ln}\;tdt}={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}\frac{{(x-1)}^{n+1}}{n(n+1)}}={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}(\frac{1}{n}-\frac{1}{n+1}){(x-1)}^{n+1}}=(x-1)\text{ln}\;x+{\displaystyle \sum_{n=2}^{\infty} {(−1)}^{n}\frac{{(x-1)}^{n}}{n}}=x\;\text{ln}\;x-x.$
:::

:::exercise {fs-id1167023797890} type= 
PROBLEM:
**[T]** Evaluate the power series expansion $\text{ln}\;(1+x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}\frac{{x}^{n}}{n}}$ at $x=1$ to show that $\text{ln}\;(2)$ is the sum of the alternating harmonic series. Use the alternating series test to determine how many terms of the sum are needed to estimate $\text{ln}\;(2)$ accurate to within 0.001, and find such an approximation.
:::

:::exercise {fs-id1167023922578} type= 
PROBLEM:
**[T]** Subtract the infinite series of $\text{ln}\;(1-x)$ from $\text{ln}\;(1+x)$ to get a power series for $\text{ln}\;(\frac{1+x}{1-x}).$ Evaluate at $x=\frac{1}{3}.$ What is the smallest *N* such that the *N*th partial sum of this series approximates $\text{ln}\;(2)$ with an error less than 0.001?
SOLUTION:
We have $\text{ln}\;(1-x)=\text{−}{\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{n}}{n}}$ so $\text{ln}\;(1+x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}\frac{{x}^{n}}{n}}.$ Thus, $\text{ln}\;(\frac{1+x}{1-x})={\displaystyle \sum_{n=1}^{\infty} (1+{(−1)}^{n-1})\frac{{x}^{n}}{n}}=2{\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{2n-1}}{2n-1}}.$ When $x=\frac{1}{3}$ we obtain $\text{ln}\;(2)=2{\displaystyle \sum_{n=1}^{\infty} \frac{1}{{3}^{2n-1}(2n-1)}}.$ We have $2{\displaystyle \sum_{n=1}^{3} \frac{1}{{3}^{2n-1}(2n-1)}}=0.69300\text{…},$ while $2{\displaystyle \sum_{n=1}^{4} \frac{1}{{3}^{2n-1}(2n-1)}}=0.69313\text{…}$ and $\text{ln}\;(2)=0.69314\text{…};$ therefore, $N=4.$
:::
In the following exercises, using a substitution if indicated, express each series in terms of elementary functions and find the radius of convergence of the sum.

:::exercise {fs-id1167023764764} type= 
PROBLEM:
${\displaystyle \sum_{k=0}^{\infty} ({x}^{k}-{x}^{2k+1})}$
:::

:::exercise {fs-id1167023764871} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{3k}}{6k}}$
SOLUTION:
${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{k}}{k}}=\text{−}\text{ln}\;(1-x)$ so ${\displaystyle \sum_{k=1}^{\infty} \frac{{x}^{3k}}{6k}}=-\frac{1}{6}\;\text{ln}\;(1-{x}^{3}).$ The radius of convergence is equal to 1 by the ratio test.
:::

:::exercise {fs-id1167023805566} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} {(1+{x}^{2})}^{\text{−}k}}$ using $y=\frac{1}{1+{x}^{2}}$
:::

:::exercise {fs-id1167023913273} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} {2}^{\text{−}kx}}$ using $y={2}^{\text{−}x}$
SOLUTION:
If $y={2}^{\text{−}x},$ then ${\displaystyle \sum_{k=1}^{\infty} {y}^{k}}=\frac{y}{1-y}=\frac{{2}^{\text{−}x}}{1-{2}^{\text{−}x}}=\frac{1}{{2}^{x}-1}.$ If ${a}_{k}={2}^{\text{−}kx},$ then $\frac{{a}_{k+1}}{{a}_{k}}={2}^{\text{−}x}<1$ when $x>0.$ So the series converges for all $x>0.$
:::

:::exercise {fs-id1167023922857} type= 
PROBLEM:
Show that, up to powers *x*<sup>3</sup> and *y*<sup>3</sup>, $E(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$ satisfies $E(x+y)=E(x)E(y).$
:::

:::exercise {fs-id1167023774179} type= 
PROBLEM:
Differentiate the series $E(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$ term-by-term to show that $E(x)$ is equal to its derivative.
SOLUTION:
Answers will vary.
:::

:::exercise {fs-id1167023774257} type= 
PROBLEM:
Show that if $f(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ is a sum of even powers, that is, ${a}_{n}=0$ if *n* is odd, then $F={\displaystyle \int_{0}^{x}f(t)\;dt}$ is a sum of odd powers, while if *f* is a sum of odd powers, then *F* is a sum of even powers.
:::

:::exercise {fs-id1167023921116} type= 
PROBLEM:
**[T]** Suppose that the coefficients *a<sub>n</sub>* of the series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ are defined by the recurrence relation ${a}_{n}=\frac{{a}_{n-1}}{n}+\frac{{a}_{n-2}}{n(n-1)}.$ For ${a}_{0}=0$ and ${a}_{1}=1,$ compute and plot the sums ${S}_{N}={\displaystyle \sum_{n=0}^{N} {a}_{n}{x}^{n}}$ for $N=2,3,4,5$ on $[−1,1].$
SOLUTION:

> IMAGE {img:fs-id1167023785642} src=../../media/CNX_Calc_Figure_10_02_201.jpg
> alt: This is a graph of three curves. They are all increasing and become very close as the curves approach x = 0. Then they separate as x moves away from 0.

The solid curve is *S*<sub>5</sub>. The dashed curve is *S*<sub>2</sub>, dotted is *S*<sub>3</sub>, and dash-dotted is *S*<sub>4</sub>
:::

:::exercise {fs-id1167023785688} type= 
PROBLEM:
**[T]** Suppose that the coefficients *a<sub>n</sub>* of the series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ are defined by the recurrence relation ${a}_{n}=\frac{{a}_{n-1}}{\sqrt{n}}-\frac{{a}_{n-2}}{\sqrt{n(n-1)}}.$ For ${a}_{0}=1$ and ${a}_{1}=0,$ compute and plot the sums ${S}_{N}={\displaystyle \sum_{n=0}^{N} {a}_{n}{x}^{n}}$ for $N=2,3,4,5$ on $[−1,1].$
:::

:::exercise {fs-id1167023780287} type= 
PROBLEM:
**[T]** Given the power series expansion $\text{ln}\;(1+x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n-1}\frac{{x}^{n}}{n}},$ determine how many terms *N* of the sum evaluated at $x=−1\text{/}2$ are needed to approximate $\text{ln}\;(2)$ accurate to within 1/1000. Evaluate the corresponding partial sum ${\displaystyle \sum_{n=1}^{N} {(−1)}^{n-1}\frac{{x}^{n}}{n}}.$
SOLUTION:
When $x=-\frac{1}{2},\text{−}\text{ln}\;(2)=\text{ln}\;(\frac{1}{2})=\text{−}{\displaystyle \sum_{n=1}^{\infty} \frac{1}{n{2}^{n}}}.$ Since $\overset{\infty}{\underset{n=11}{{\displaystyle \sum}}}\frac{1}{n{2}^{n}}<{\displaystyle \sum_{n=11}^{\infty} \frac{1}{{2}^{n}}}=\frac{1}{{2}^{10}},$ one has ${\displaystyle \sum_{n=1}^{10} \frac{1}{n{2}^{n}}}=0.69306\text{…}$ whereas $\text{ln}\;(2)=0.69314\text{…};$ therefore, $N=10.$
:::

:::exercise {fs-id1167023920210} type= 
PROBLEM:
**[T]** Given the power series expansion ${\text{tan}}^{−1}(x)={\displaystyle \sum_{k=0}^{\infty} {(−1)}^{k}\frac{{x}^{2k+1}}{2k+1}},$ use the alternating series test to determine how many terms *N* of the sum evaluated at $x=1$ are needed to approximate ${\text{tan}}^{−1}(1)=\frac{\pi}{4}$ accurate to within 1/1000. Evaluate the corresponding partial sum ${\displaystyle \sum_{k=0}^{N} {(−1)}^{k}\frac{{x}^{2k+1}}{2k+1}}.$
:::

:::exercise {fs-id1167023808654} type= 
PROBLEM:
**[T]** Recall that ${\text{tan}}^{−1}(\frac{1}{\sqrt{3}})=\frac{\pi}{6}.$ Assuming an exact value of $(\frac{1}{\sqrt{3}}),$ estimate $\frac{\pi}{6}$ by evaluating partial sums ${S}_{N}(\frac{1}{\sqrt{3}})$ of the power series expansion ${\text{tan}}^{−1}(x)={\displaystyle \sum_{k=0}^{\infty} {(−1)}^{k}\frac{{x}^{2k+1}}{2k+1}}$ at $x=\frac{1}{\sqrt{3}}.$ What is the smallest number *N* such that $6{S}_{N}(\frac{1}{\sqrt{3}})$ approximates *π* accurately to within 0.001? How many terms are needed for accuracy to within 0.00001?
SOLUTION:
$6{S}_{N}(\frac{1}{\sqrt{3}})=2\sqrt{3}{\displaystyle \sum_{n=0}^{N} {(−1)}^{n}\frac{1}{{3}^{n}(2n+1)}}.$ One has $\pi -6{S}_{4}(\frac{1}{\sqrt{3}})=0.00101\text{…}$ and $\pi -6{S}_{5}(\frac{1}{\sqrt{3}})=0.00028\text{…}$ so $N=5$ is the smallest partial sum with accuracy to within 0.001. Also, $\pi -6{S}_{7}(\frac{1}{\sqrt{3}})=0.00002\text{…}$ while $\pi -6{S}_{8}(\frac{1}{\sqrt{3}})=−0.000007\text{…}$ so $N=8$ is the smallest *N* to give accuracy to within 0.00001.
:::

## Glossary
- {def} **term-by-term differentiation of a power series**: a technique for evaluating the derivative of a power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ by evaluating the derivative of each term separately to create the new power series ${\displaystyle \sum_{n=1}^{\infty} n{c}_{n}{(x-a)}^{n-1}}$
- {def} **term-by-term integration of a power series**: a technique for integrating a power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ by integrating each term separately to create the new power series $C+{\displaystyle \sum_{n=0}^{\infty} {c}_{n}\frac{{(x-a)}^{n+1}}{n+1}}$

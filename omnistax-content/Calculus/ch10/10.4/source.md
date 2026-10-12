# Working with Taylor Series

## Learning Objectives {section:learning-objectives}
- Write the terms of the binomial series.
- Recognize the Taylor series expansions of common functions.
- Recognize and apply techniques to find the Taylor series for a function.
- Use Taylor series to solve differential equations.
- Use Taylor series to evaluate nonelementary integrals.

In the preceding section, we defined Taylor series and showed how to find the Taylor series for several common functions by explicitly calculating the coefficients of the Taylor polynomials. In this section we show how to use those Taylor series to derive Taylor series for other functions. We then present two common applications of power series. First, we show how power series can be used to solve differential equations. Second, we show how power series can be used to evaluate integrals when the antiderivative of the integrand cannot be expressed in terms of elementary functions. In one example, we consider ${\displaystyle \int {e}^{\text{−}{x}^{2}}}dx,$ an integral that arises frequently in probability theory.

## The Binomial Series
Our first goal in this section is to determine the Maclaurin series for the function $f(x)={(1+x)}^{r}$ for all real numbers $r.$ The Maclaurin series for this function is known as the {term:binomial series}. We begin by considering the simplest case: $r$ is a nonnegative integer. We recall that, for $r=0,1,2,3,4,f(x)={(1+x)}^{r}$ can be written as

$\begin{array}{l} \\ f(x)={(1+x)}^{0}=1, \\ f(x)={(1+x)}^{1}=1+x, \\ f(x)={(1+x)}^{2}=1+2x+{x}^{2}, \\ f(x)={(1+x)}^{3}=1+3x+3{x}^{2}+{x}^{3}, \\ f(x)={(1+x)}^{4}=1+4x+6{x}^{2}+4{x}^{3}+{x}^{4}.\end{array}$  {eq:fs-id1167023810404}

The expressions on the right-hand side are known as binomial expansions and the coefficients are known as binomial coefficients. More generally, for any nonnegative integer $r,$ the binomial coefficient of ${x}^{n}$ in the binomial expansion of ${(1+x)}^{r}$ is given by

$$ (\begin{array}{l}r \\ n\end{array})=\frac{r\text{!}}{n\text{!}(r-n)\text{!}} $$  {eq:fs-id1167023717125}

and

$$ \begin{array}{rl}f(x) & ={(1+x)}^{r} \\ & =(\begin{array}{l}r \\ 0\end{array})1+(\begin{array}{l}r \\ 1\end{array})x+(\begin{array}{l}r \\ 2\end{array}){x}^{2}+(\begin{array}{l}r \\ 3\end{array}){x}^{3}+\text{⋯}+(\begin{array}{l}r \\ r-1\end{array}){x}^{r-1}+(\begin{array}{l}r \\ r\end{array}){x}^{r} \\ & ={\displaystyle \sum_{n=0}^{r} (\begin{array}{l}r \\ n\end{array}){x}^{n}}.\end{array} $$  {eq:fs-id1167023919069}

For example, using this formula for $r=5,$ we see that

$\begin{array}{rl}f(x) & ={(1+x)}^{5} \\ & =(\begin{array}{l}5 \\ 0\end{array})1+(\begin{array}{l}5 \\ 1\end{array})x+(\begin{array}{l}5 \\ 2\end{array}){x}^{2}+(\begin{array}{l}5 \\ 3\end{array}){x}^{3}+(\begin{array}{l}5 \\ 4\end{array}){x}^{4}+(\begin{array}{l}5 \\ 5\end{array}){x}^{5} \\ & =\frac{5\text{!}}{0\text{!}5\text{!}}1+\frac{5\text{!}}{1\text{!}4\text{!}}x+\frac{5\text{!}}{2\text{!}3\text{!}}{x}^{2}+\frac{5\text{!}}{3\text{!}2\text{!}}{x}^{3}+\frac{5\text{!}}{4\text{!}1\text{!}}{x}^{4}+\frac{5\text{!}}{5\text{!}0\text{!}}{x}^{5} \\ & =1+5x+10{x}^{2}+10{x}^{3}+5{x}^{4}+{x}^{5}.\end{array}$  {eq:fs-id1167023731125}

We now consider the case when the exponent $r$ is any real number, not necessarily a nonnegative integer. If $r$ is not a nonnegative integer, then $f(x)={(1+x)}^{r}$ cannot be written as a finite polynomial. However, we can find a power series for $f.$ Specifically, we look for the Maclaurin series for $f.$ To do this, we find the derivatives of $f$ and evaluate them at $x=0.$

$\begin{array}{rllllrll}f(x) & = & {(1+x)}^{r} & & & f(0) & = & 1 \\ {f}^{'}(x) & = & r{(1+x)}^{r-1} & & & f'(0) & = & r \\ {f}^{''}(x) & = & r(r-1){(1+x)}^{r-2} & & & {f}^{''}(0) & = & r(r-1) \\ f''' (x) & = & r(r-1)(r-2){(1+x)}^{r-3} & & & f''' (0) & = & r(r-1)(r-2) \\ {f}^{(n)}(x) & = & r(r-1)(r-2)\text{⋯}(r-n+1){(1+x)}^{r-n} & & & {f}^{(n)}(0) & = & r(r-1)(r-2)\text{⋯}(r-n+1)\end{array}$  {eq:fs-id1167023788120}

We conclude that the coefficients in the binomial series are given by

$$ \frac{{f}^{(n)}(0)}{n\text{!}}=\frac{r(r-1)(r-2)\text{⋯}(r-n+1)}{n\text{!}}. $$  {eq:fs-id1167023896721}

We note that if $r$ is a nonnegative integer, then the $(r+1)\text{st}$ derivative ${f}^{(r+1)}$ is the zero function, and the series terminates. In addition, if $r$ is a nonnegative integer, then [ref:fs-id1167023896721] for the coefficients agrees with [ref:fs-id1167023717125] for the coefficients, and the formula for the binomial series agrees with [ref:fs-id1167023919069] for the finite binomial expansion. More generally, to denote the binomial coefficients for any real number $r,$ we define

$(\begin{array}{l}r \\ n\end{array})=\frac{r(r-1)(r-2)\text{⋯}(r-n+1)}{n\text{!}}.$  {eq:fs-id1167024038814}

With this notation, we can write the binomial series for ${(1+x)}^{r}$ as

$$ {\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}r \\ n\end{array}){x}^{n}=1+rx+\frac{r(r-1)}{2\text{!}}{x}^{2}+\text{⋯}+\frac{r(r-1)\text{⋯}(r-n+1)}{n\text{!}}{x}^{n}+\text{⋯}.} $$  {eq:fs-id1167024036610}

We now need to determine the interval of convergence for the binomial series [ref:fs-id1167024036610]. We apply the ratio test. Consequently, we consider

$\begin{array}{rl}\frac{|{a}_{n+1}|}{|{a}_{n}|} & =\frac{|r(r-1)(r-2)\text{⋯}(r-n)|{|x|}^{n+1}}{(n+1)\text{!}}\cdot \frac{n\text{!}}{|r(r-1)(r-2)\text{⋯}(r-n+1)|{|x|}^{n}} \\ & =\frac{|r-n||x|}{|n+1|}.\end{array}$  {eq:fs-id1167023862667}

Since

$\lim_{n\to \infty}\frac{|{a}_{n+1}|}{|{a}_{n}|}=|x|<1$  {eq:fs-id1167024047437}

if and only if $|x|<1,$ we conclude that the interval of convergence for the binomial series is $(−1,1).$ The behavior at the endpoints depends on $r.$ It can be shown that for $r\ge 0$ the series converges at both endpoints; for $−1<r<0,$ the series converges at $x=1$ and diverges at $x=−1;$ and for $r<−1,$ the series diverges at both endpoints. The binomial series does converge to ${(1+x)}^{r}$ in $(−1,1)$ for all real numbers $r,$ but proving this fact by showing that the remainder ${R}_{n}(x)\to 0$ is difficult.

:::note [definition] Definition
For any real number $r,$ the Maclaurin series for $f(x)={(1+x)}^{r}$ is the binomial series. It converges to $f$ for $|x|<1,$ and we write

$\begin{array}{rl}{(1+x)}^{r} & ={\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}r \\ n\end{array}){x}^{n}} \\ & =1+rx+\frac{r(r-1)}{2\text{!}}{x}^{2}+\text{⋯}+\frac{r(r-1)\text{⋯}(r-n+1)}{n\text{!}}{x}^{n}+\text{⋯}\end{array}$  {eq:fs-id1167023823038}

for $|x|<1.$
:::
We can use this definition to find the binomial series for $f(x)=\sqrt{1+x}$ and use the series to approximate $\sqrt{1.5}.$

:::example {ex:fs-id1167023918533} Finding Binomial Series

:::exercise {fs-id1167023918535} type= 
PROBLEM:
a. Find the binomial series for $f(x)=\sqrt{1+x}.$
b. Use the third-order Maclaurin polynomial ${p}_{3}(x)$ to estimate $\sqrt{1.5}.$ Use Taylor’s theorem to bound the error. Use a graphing utility to compare the graphs of $f$ and ${p}_{3}.$
SOLUTION:
a. Here $r=\frac{1}{2}.$ Using the definition for the binomial series, we obtain

$\begin{array}{rl}\sqrt{1+x} & =1+\frac{1}{2}x+\frac{(1\text{/}2)(\text{−}1\text{/}2)}{2\text{!}}{x}^{2}+\frac{(1\text{/}2)(\text{−}1\text{/}2)(\text{−}3\text{/}2)}{3\text{!}}{x}^{3}+\text{⋯} \\ & =1+\frac{1}{2}x-\frac{1}{2\text{!}}\;\frac{1}{{2}^{2}}{x}^{2}+\frac{1}{3\text{!}}\;\frac{1\cdot 3}{{2}^{3}}{x}^{3}-\text{⋯}+\frac{{(−1)}^{n+1}}{n\text{!}}\;\frac{1\cdot 3\cdot 5\text{⋯}(2n-3)}{{2}^{n}}{x}^{n}+\text{⋯} \\ & =1+{\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n+1}}{n\text{!}}\;\frac{1\cdot 3\cdot 5\text{⋯}(2n-3)}{{2}^{n}}{x}^{n}.}\end{array}$  {eq:fs-id1167023809903}

b. From the result in part a. the third-order Maclaurin polynomial is

${p}_{3}(x)=1+\frac{1}{2}x-\frac{1}{8}{x}^{2}+\frac{1}{16}{x}^{3}.$  {eq:fs-id1167023809917}

Therefore,

$\begin{array}{rl}\sqrt{1.5} & =\sqrt{1+0.5} \\ & \approx 1+\frac{1}{2}(0.5)-\frac{1}{8}{(0.5)}^{2}+\frac{1}{16}{(0.5)}^{3} \\ & \approx 1.2266.\end{array}$  {eq:fs-id1167023809982}

From Taylor’s theorem, the error satisfies

${R}_{3}(0.5)=\frac{{f}^{(4)}(c)}{4\text{!}}{(0.5)}^{4}$  {eq:fs-id1167023828674}

for some $c$ between $0$ and $0.5.$ Since ${f}^{(4)}(x)=-\frac{15}{{2}^{4}{(1+x)}^{7\text{/}2}},$ and the maximum value of $|{f}^{(4)}(x)|$ on the interval $(0,0.5)$ occurs at $x=0,$ we have

$|{R}_{3}(0.5)|\le \frac{15}{4\text{!}{2}^{4}}{(0.5)}^{4}\approx 0.00244.$  {eq:fs-id1167024042978}

The function and the Maclaurin polynomial ${p}_{3}$ are graphed in [ref:CNX_Calc_Figure_10_04_001].

> FIGURE {fig:CNX_Calc_Figure_10_04_001} src=../../media/CNX_Calc_Figure_10_04_001.jpg
> alt: This graph has two curves. The first one is f(x)= the square root of (1+x) and the second is psub3(x). The curves are very close at y = 1.
> caption: The third-order Maclaurin polynomial ${p}_{3}(x)$ provides a good approximation for $f(x)=\sqrt{1+x}$ for $x$ near zero.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167024040777} type= 
PROBLEM:
Find the binomial series for $f(x)=\frac{1}{{(1+x)}^{2}}.$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}(n+1){x}^{n}}$
COMMENTARY: Hint
Use the definition of binomial series for $r=−2.$
:::
:::

## Common Functions Expressed as Taylor Series
At this point, we have derived Maclaurin series for exponential, trigonometric, and logarithmic functions, as well as functions of the form $f(x)={(1+x)}^{r}.$ In [ref:fs-id1167024047165], we summarize the results of these series. We remark that the convergence of the Maclaurin series for $f(x)=\text{ln}\;(1+x)$ at the endpoint $x=1$ and the Maclaurin series for $f(x)={\text{tan}}^{−1}x$ at the endpoints $x=1$ and $x=−1$ relies on a more advanced theorem than we present here. (Refer to Abel’s theorem for a discussion of this more technical point.)

> TABLE {tab:fs-id1167024047165} cols=3
> title: Maclaurin Series for Common Functions
> summary: This table has seven rows and three columns. The header row labels the columns “function” , “Maclaurin” and “interval of convergence”. The first row is the function 1/(1-x). The Maclaurin series is the sum of x^n and the interval of convergence is -1<x<1. The second row is the function e^x. The Maclaurin series is the sum of x^n/n! and the interval of convergence is all real numbers. The third row is the function sin(x). The Maclaurin series is the sum of (-1)^n times x^(2n+1)/(2n+1)! and the interval of convergence is all real numbers. The fourth row is the function cos(x). The Maclaurin series is the sum of (-1)^n times x^(2n)/(2n)! and the interval of convergence is all real numbers. The fifth row is the function ln(1+x). The Maclaurin series is the sum of (-1)^n+1 times x^n/(n) and the interval of convergence is -1<x<1. The sixth row is the function arctan(x). The Maclaurin series is the sum of (-1)^n times x^(2n+1)/(2n+1) and the interval of convergence is between -1 and 1 inclusive. The seventh row is the function (1+x)^r. The Maclaurin series is the sum of the combinations of r choose n times x^n and the interval of convergence is -1<x<1.

| Function | Maclaurin Series | Interval of Convergence |
| --- | --- | --- |
| $f(x)=\frac{1}{1-x}$ | ${\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$ | $−1<x<1$ |
| $f(x)={e}^{x}$ | ${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$ | $\text{−}\infty <x<\infty$ |
| $f(x)=\text{sin}\;x$ | ${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n+1}}{(2n+1)\text{!}}}$ | $\text{−}\infty <x<\infty$ |
| $f(x)=\text{cos}\;x$ | ${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n}}{(2n)\text{!}}}$ | $\text{−}\infty <x<\infty$ |
| $f(x)=\text{ln}\;(1+x)$ | ${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{x}^{n}}{n}}$ | $−1<x\le 1$ |
| $f(x)={\text{tan}}^{−1}x$ | ${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n+1}}{2n+1}}$ | $−1\le x\le 1$ |
| $f(x)={(1+x)}^{r}$ | ${\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}r \\ n\end{array}){x}^{n}}$ | $−1<x<1$ |

Earlier in the chapter, we showed how you could combine power series to create new power series. Here we use these properties, combined with the Maclaurin series in [ref:fs-id1167024047165], to create Maclaurin series for other functions.

:::example {ex:fs-id1167024038502} Deriving Maclaurin Series from Known Series

:::exercise {fs-id1167024038504} type= 
PROBLEM:
Find the Maclaurin series of each of the following functions by using one of the series listed in [ref:fs-id1167024047165].
a. $f(x)=\text{cos}\sqrt{x}$
b. $f(x)=\text{sinh}\;x$
SOLUTION:
a. Using the Maclaurin series for $\text{cos}\;x$ we find that the Maclaurin series for $\text{cos}\sqrt{x}$ is given by

$\begin{array}{rl}{\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{(\sqrt{x})}^{2n}}{(2n)\text{!}}} & ={\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{x}^{n}}{(2n)\text{!}}} \\ & =1-\frac{x}{2\text{!}}+\frac{{x}^{2}}{4\text{!}}-\frac{{x}^{3}}{6\text{!}}+\frac{{x}^{4}}{8\text{!}}-\text{⋯}.\end{array}$  {eq:fs-id1167024044163}

This series converges to $\text{cos}\sqrt{x}$ for all $x$ in the domain of $\text{cos}\sqrt{x};$ that is, for all $x\ge 0.$
b. To find the Maclaurin series for $\text{sinh}\;x,$ we use the fact that

$\text{sinh}\;x=\frac{{e}^{x}-{e}^{\text{−}x}}{2}.$  {eq:fs-id1167023775252}

Using the Maclaurin series for ${e}^{x},$ we see that the $n\text{th}$ term in the Maclaurin series for $\text{sinh}\;x$ is given by

$\frac{{x}^{n}}{n\text{!}}-\frac{{(\text{−}x)}^{n}}{n\text{!}}.$  {eq:fs-id1167024038392}

For $n$ even, this term is zero. For $n$ odd, this term is $\frac{2{x}^{n}}{n\text{!}}.$ Therefore, the Maclaurin series for $\text{sinh}\;x$ has only odd-order terms and is given by

${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n+1}}{(2n+1)\text{!}}}=x+\frac{{x}^{3}}{3\text{!}}+\frac{{x}^{5}}{5\text{!}}+\text{⋯}.$  {eq:fs-id1167024047295}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167024047399} type= 
PROBLEM:
Find the Maclaurin series for $\text{sin}({x}^{2}).$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{x}^{4n+2}}{(2n+1)\text{!}}}$
COMMENTARY: Hint
Use the Maclaurin series for $\text{sin}\;x.$
:::
:::
We also showed previously in this chapter how power series can be differentiated term by term to create a new power series. In [ref:fs-id1167023802476], we differentiate the binomial series for $\sqrt{1+x}$ term by term to find the binomial series for $\frac{1}{\sqrt{1+x}}.$ Note that we could construct the binomial series for $\frac{1}{\sqrt{1+x}}$ directly from the definition, but differentiating the binomial series for $\sqrt{1+x}$ is an easier calculation.

:::example {ex:fs-id1167023802476} Differentiating a Series to Find a New Series

:::exercise {fs-id1167023802478} type= 
PROBLEM:
Use the binomial series for $\sqrt{1+x}$ to find the binomial series for $\frac{1}{\sqrt{1+x}}.$
SOLUTION:
The two functions are related by

$\frac{d}{dx}\sqrt{1+x}=\frac{1}{2\sqrt{1+x}},$  {eq:fs-id1167023802524}

so the binomial series for $\frac{1}{\sqrt{1+x}}$ is given by

$\begin{array}{rl}\frac{1}{\sqrt{1+x}} & =2\frac{d}{dx}\sqrt{1+x} \\ & =1+{\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}}{n\text{!}}\;\frac{1\cdot 3\cdot 5\text{⋯}(2n-1)}{{2}^{n}}{x}^{n}}.\end{array}$  {eq:fs-id1167023777262}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023914389} type= 
PROBLEM:
Find the binomial series for $f(x)=\frac{1}{{(1+x)}^{3\text{/}2}}$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}}{n\text{!}}\;\frac{1\cdot 3\cdot 5\text{⋯}(2n-1)}{{2}^{n}}{x}^{n}}$
COMMENTARY: Hint
Differentiate the series for $\frac{1}{\sqrt{1+x}}.$
:::
:::
In this example, we differentiated a known Taylor series to construct a Taylor series for another function. The ability to differentiate power series term by term makes them a powerful tool for solving differential equations. We now show how this is accomplished.

## Solving Differential Equations with Power Series
Consider the differential equation

${y}^{'}(x)=y.$  {eq:fs-id1167024036516}

Recall that this is a first-order separable equation and its solution is $y=C{e}^{x}.$ This equation is easily solved using techniques discussed earlier in the text. For most differential equations, however, we do not yet have analytical tools to solve them. Power series are an extremely useful tool for solving many types of differential equations. In this technique, we look for a solution of the form $y={\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ and determine what the coefficients would need to be. In the next example, we consider an initial-value problem involving ${y}^{'}=y$ to illustrate the technique.

:::example {ex:fs-id1167023814845} Power Series Solution of a Differential Equation

:::exercise {fs-id1167023814847} type= 
PROBLEM:
Use power series to solve the initial-value problem

${y}^{'}=y,\;y(0)=3.$  {eq:fs-id1167023814858}

SOLUTION:
Suppose that there exists a power series solution

$y(x)={\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+{c}_{3}{x}^{3}+{c}_{4}{x}^{4}+\text{⋯}.$  {eq:fs-id1167023814903}

Differentiating this series term by term, we obtain

${y}^{'}={c}_{1}+2{c}_{2}x+3{c}_{3}{x}^{2}+4{c}_{4}{x}^{3}+\text{⋯}.$  {eq:fs-id1167024039116}

If *y* satisfies the differential equation, then

${c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+{c}_{3}{x}^{3}+\text{⋯}={c}_{1}+2{c}_{2}x+3{c}_{3}{x}^{2}+4{c}_{3}{x}^{3}+\text{⋯}.$  {eq:fs-id1167024039191}

Using [ref:fs-id1167023777376](module:m53762) on the uniqueness of power series representations, we know that these series can only be equal if their coefficients are equal. Therefore,

$\begin{array}{l}{c}_{0}={c}_{1}, \\ {c}_{1}=2{c}_{2}, \\ {c}_{2}=3{c}_{3}, \\ {c}_{3}=4{c}_{4}, \\ \text{⋮}.\end{array}$  {eq:fs-id1167024040274}

Using the initial condition $y(0)=3$ combined with the power series representation

$y(x)={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+{c}_{3}{x}^{3}+\text{⋯},$  {eq:fs-id1167023911039}

we find that ${c}_{0}=3.$ We are now ready to solve for the rest of the coefficients. Using the fact that ${c}_{0}=3,$ we have

$\begin{array}{l} \\ \\ {c}_{1}={c}_{0}=3=\frac{3}{1\text{!}}, \\ {c}_{2}=\frac{{c}_{1}}{2}=\frac{3}{2}=\frac{3}{2\text{!}}, \\ {c}_{3}=\frac{{c}_{2}}{3}=\frac{3}{3\cdot 2}=\frac{3}{3\text{!}}, \\ {c}_{4}=\frac{{c}_{3}}{4}=\frac{3}{4\cdot 3\cdot 2}=\frac{3}{4\text{!}}.\end{array}$  {eq:fs-id1167023911138}

Therefore,

$\begin{array}{rl}y & =3[1+\frac{1}{1\text{!}}x+\frac{1}{2\text{!}}{x}^{2}+\frac{1}{3\text{!}}{x}^{3}+\frac{1}{4\text{!}}{x}^{4}+\text{⋯}] \\ & =3{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}.\end{array}$  {eq:fs-id1167023806807}

You might recognize

${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$  {eq:fs-id1167023779741}

as the Taylor series for ${e}^{x}.$ Therefore, the solution is $y=3{e}^{x}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023779815} type= 
PROBLEM:
Use power series to solve ${y}^{'}=2y,\;y(0)=5.$
SOLUTION:
$y=5{e}^{2x}$
COMMENTARY: Hint
The equations for the first several coefficients ${c}_{n}$ will satisfy ${c}_{0}=2{c}_{1},{c}_{1}=2\cdot 2{c}_{2},{c}_{2}=2\cdot 3{c}_{3}\text{,….}$ In general, for all $n\ge 0,{c}_{n}=2(n+1){C}_{n+1}.$
:::
:::
We now consider an example involving a differential equation that we cannot solve using previously discussed methods. This differential equation

${y}^{''}-xy=0$  {eq:fs-id1167024039030}

is known as {index:Airy’s equation}. It has many applications in mathematical physics, such as modeling the diffraction of light. Here we show how to solve it using power series.

:::example {ex:fs-id1167024039063} Power Series Solution of Airy’s Equation

:::exercise {fs-id1167024039065} type= 
PROBLEM:
Use power series to solve

${y}^{''}-xy=0$  {eq:fs-id1167023780994}

with the initial conditions $y(0)=a$ and $y'(0)=b.$
SOLUTION:
We look for a solution of the form

$y={\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+{c}_{3}{x}^{3}+{c}_{4}{x}^{4}+\text{⋯}.}$  {eq:fs-id1167023781064}

Differentiating this function term by term, we obtain

$\begin{array}{rll}{y}^{'} & = & {c}_{1}+2{c}_{2}x+3{c}_{3}{x}^{2}+4{c}_{4}{x}^{3}+\text{⋯}, \\ {y}^{''} & = & 2\cdot 1{c}_{2}+3\cdot 2{c}_{3}x+4\cdot 3{c}_{4}{x}^{2}+\text{⋯}.\end{array}$  {eq:fs-id1167024040054}

If *y* satisfies the equation ${y}^{''}=xy,$ then

$2\cdot 1{c}_{2}+3\cdot 2{c}_{3}x+4\cdot 3{c}_{4}{x}^{2}+\text{⋯}=x({c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+{c}_{3}{x}^{3}+\text{⋯}).$  {eq:fs-id1167024046846}

Using [ref:fs-id1167023777376](module:m53762) on the uniqueness of power series representations, we know that coefficients of the same degree must be equal. Therefore,

$\begin{array}{l}2\cdot 1{c}_{2}=0, \\ 3\cdot 2{c}_{3}={c}_{0}, \\ 4\cdot 3{c}_{4}={c}_{1}, \\ 5\cdot 4{c}_{5}={c}_{2}, \\ \text{⋮}.\end{array}$  {eq:fs-id1167024046970}

More generally, for $n\ge 3,$ we have $n\cdot (n-1){c}_{n}={c}_{n-3}.$ In fact, all coefficients can be written in terms of ${c}_{0}$ and ${c}_{1}.$ To see this, first note that ${c}_{2}=0.$ Then

$\begin{array}{l} \\ \\ {c}_{3}=\frac{{c}_{0}}{3\cdot 2}, \\ {c}_{4}=\frac{{c}_{1}}{4\cdot 3}.\end{array}$  {eq:fs-id1167023789230}

For ${c}_{5},{c}_{6},{c}_{7},$ we see that

$\begin{array}{l} \\ \\ {c}_{5}=\frac{{c}_{2}}{5\cdot 4}=0, \\ {c}_{6}=\frac{{c}_{3}}{6\cdot 5}=\frac{{c}_{0}}{6\cdot 5\cdot 3\cdot 2}, \\ {c}_{7}=\frac{{c}_{4}}{7\cdot 6}=\frac{{c}_{1}}{7\cdot 6\cdot 4\cdot 3}.\end{array}$  {eq:fs-id1167023789324}

Therefore, the series solution of the differential equation is given by

$y={c}_{0}+{c}_{1}x+0\cdot {x}^{2}+\frac{{c}_{0}}{3\cdot 2}{x}^{3}+\frac{{c}_{1}}{4\cdot 3}{x}^{4}+0\cdot {x}^{5}+\frac{{c}_{0}}{6\cdot 5\cdot 3\cdot 2}{x}^{6}+\frac{{c}_{1}}{7\cdot 6\cdot 4\cdot 3}{x}^{7}+\text{⋯}.$  {eq:fs-id1167023913971}

The initial condition $y(0)=a$ implies ${c}_{0}=a.$ Differentiating this series term by term and using the fact that ${y}^{'}(0)=b,$ we conclude that ${c}_{1}=b.$ Therefore, the solution of this initial-value problem is

$y=a(1+\frac{{x}^{3}}{3\cdot 2}+\frac{{x}^{6}}{6\cdot 5\cdot 3\cdot 2}+\text{⋯})+b(x+\frac{{x}^{4}}{4\cdot 3}+\frac{{x}^{7}}{7\cdot 6\cdot 4\cdot 3}+\text{⋯}).$  {eq:fs-id1167023763482}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023801467} type= 
PROBLEM:
Use power series to solve ${y}^{''}+{x}^{2}y=0$ with the initial condition $y(0)=a$ and ${y}^{'}(0)=b.$
SOLUTION:
$y=a(1-\frac{{x}^{4}}{3\cdot 4}+\frac{{x}^{8}}{3\cdot 4\cdot 7\cdot 8}-\text{⋯})+b(x-\frac{{x}^{5}}{4\cdot 5}+\frac{{x}^{9}}{4\cdot 5\cdot 8\cdot 9}-\text{⋯})$
COMMENTARY: Hint
The coefficients satisfy ${c}_{0}=a,{c}_{1}=b,{c}_{2}=0,{c}_{3}=0,$ and for $n\ge 4,n(n-1){c}_{n}=\text{−}{c}_{n-4}.$
:::
:::

## Evaluating Nonelementary Integrals
Solving differential equations is one common application of power series. We now turn to a second application. We show how power series can be used to evaluate integrals involving functions whose antiderivatives cannot be expressed using elementary functions.
One integral that arises often in applications in probability theory is ${\displaystyle \int {e}^{\text{−}{x}^{2}}dx}.$ Unfortunately, the antiderivative of the integrand ${e}^{\text{−}{x}^{2}}$ is not an elementary function. By elementary function, we mean a function that can be written using a finite number of algebraic combinations or compositions of exponential, logarithmic, trigonometric, or power functions. We remark that the term “elementary function” is not synonymous with noncomplicated function. For example, the function $f(x)=\sqrt{{x}^{2}-3x}+{e}^{{x}^{3}}-\text{sin}(5x+4)$ is an elementary function, although not a particularly simple-looking function. Any integral of the form ${\displaystyle \int f(x)\;dx}$ where the antiderivative of $f$ cannot be written as an elementary function is considered a {term:nonelementary integral}.
Nonelementary integrals cannot be evaluated using the basic integration techniques discussed earlier. One way to evaluate such integrals is by expressing the integrand as a power series and integrating term by term. We demonstrate this technique by considering ${\displaystyle \int {e}^{\text{−}{x}^{2}}dx}.$

:::example {ex:fs-id1167023782746} Using Taylor Series to Evaluate a Definite Integral

:::exercise {fs-id1167023782748} type= 
PROBLEM:
a. Express ${\displaystyle \int {e}^{\text{−}{x}^{2}}dx}$ as an infinite series.
b. Evaluate ${\displaystyle \int_{0}^{1}{e}^{\text{−}{x}^{2}}dx}$ to within an error of $0.01.$
SOLUTION:
a. The Maclaurin series for ${e}^{\text{−}{x}^{2}}$ is given by

$\begin{array}{rl}{e}^{\text{−}{x}^{2}} & ={\displaystyle \sum_{n=0}^{\infty} \frac{{(\text{−}{x}^{2})}^{n}}{n\text{!}}} \\ & =1-{x}^{2}+\frac{{x}^{4}}{2\text{!}}-\frac{{x}^{6}}{3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{x}^{2n}}{n\text{!}}+\text{⋯} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n}}{n\text{!}}.}\end{array}$  {eq:fs-id1167023782866}

Therefore,

$\begin{array}{rl}{\displaystyle \int {e}^{\text{−}{x}^{2}}dx} & ={\displaystyle \int (1-{x}^{2}+\frac{{x}^{4}}{2\text{!}}-\frac{{x}^{6}}{3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{x}^{2n}}{n\text{!}}+\text{⋯})\;dx} \\ & =C+x-\frac{{x}^{3}}{3}+\frac{{x}^{5}}{5\cdot 2\text{!}}-\frac{{x}^{7}}{7\cdot 3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{x}^{2n+1}}{(2n+1)n\text{!}}+\text{⋯}.\end{array}$  {eq:fs-id1167023760144}

b. Using the result from part a. we have

${\displaystyle \int_{0}^{1}{e}^{\text{−}{x}^{2}}dx}=1-\frac{1}{3}+\frac{1}{10}-\frac{1}{42}+\frac{1}{216}-\text{⋯}.$  {eq:fs-id1167023808165}

The sum of the first four terms is approximately $0.74.$ By the alternating series test, this estimate is accurate to within an error of less than $\frac{1}{216}\approx 0.0046296<0.01.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023808285} type= 
PROBLEM:
Express ${\displaystyle \int \text{cos}\sqrt{x}dx}$ as an infinite series. Evaluate ${\displaystyle \int_{0}^{1}\text{cos}\sqrt{x}dx}$ to within an error of $0.01.$
SOLUTION:
$C+{\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{x}^{n}}{n(2n-2)\text{!}}}$ The definite integral is approximately $0.514$ to within an error of $0.01.$
COMMENTARY: Hint
Use the series found in [ref:fs-id1167024038502].
:::
:::
As mentioned above, the integral ${\displaystyle \int {e}^{\text{−}{x}^{2}}dx}$ arises often in probability theory. Specifically, it is used when studying data sets that are normally distributed, meaning the data values lie under a bell-shaped curve. For example, if a set of data values is normally distributed with mean $μ$ and standard deviation $σ,$ then the probability that a randomly chosen value lies between $x=a$ and $x=b$ is given by

$$ \frac{1}{σ\sqrt{2\pi}}{\displaystyle \int_{a}^{b}{e}^{\text{−}{(x-μ)}^{2}\text{/}(2{σ}^{2})}dx}. $$  {eq:fs-id1167023806051}

(See [ref:CNX_Calc_Figure_10_04_002].)

> FIGURE {fig:CNX_Calc_Figure_10_04_002} src=../../media/CNX_Calc_Figure_10_04_003.jpg
> alt: This graph is the normal distribution. It is a bell-shaped curve with the highest point above mu on the x-axis. Also, there is a shaded area under the curve above the x-axis. The shaded area is bounded by alpha on the left and b on the right.
> caption: If data values are normally distributed with mean $μ$ and standard deviation $σ,$ the probability that a randomly selected data value is between $a$ and $b$ is the area under the curve $y=\frac{1}{σ\sqrt{2\pi}}{e}^{\text{−}{(x-μ)}^{2}\text{/}(2{σ}^{2})}$ between $x=a$ and $x=b.$

To simplify this integral, we typically let $z=\frac{x-μ}{σ}.$ This quantity $z$ is known as the $z$ score of a data value. With this simplification, integral [ref:fs-id1167023806051] becomes

$$ \frac{1}{\sqrt{2\pi}}{\displaystyle \int_{(a-μ)\text{/}σ}^{(b-μ)\text{/}σ}{e}^{\text{−}{z}^{2}\text{/}2}}dz. $$  {eq:fs-id1167023782231}

In [ref:fs-id1167023782321], we show how we can use this integral in calculating probabilities.

:::example {ex:fs-id1167023782321} Using Maclaurin Series to Approximate a Probability

:::exercise {fs-id1167023782323} type= 
PROBLEM:
Suppose a set of standardized test scores are normally distributed with mean $μ=100$ and standard deviation $σ=50.$ Use [ref:fs-id1167023782231] and the first six terms in the Maclaurin series for ${e}^{\text{−}{x}^{2}\text{/}2}$ to approximate the probability that a randomly selected test score is between $x=100$ and $x=200.$ Use the alternating series test to determine how accurate your approximation is.
SOLUTION:
Since $μ=100,σ=50,$ and we are trying to determine the area under the curve from $a=100$ to $b=200,$ integral [ref:fs-id1167023782231] becomes

$\frac{1}{\sqrt{2\pi}}{\displaystyle \int_{0}^{2}{e}^{\text{−}{z}^{2}\text{/}2}}dz.$  {eq:fs-id1167023758050}

The Maclaurin series for ${e}^{\text{−}{x}^{2}\text{/}2}$ is given by

$\begin{array}{rl}{e}^{\text{−}{x}^{2}\text{/}2} & ={\displaystyle \sum_{n=0}^{\infty} \frac{{(-\frac{{x}^{2}}{2})}^{n}}{n\text{!}}} \\ & =1-\frac{{x}^{2}}{{2}^{1}\cdot 1\text{!}}+\frac{{x}^{4}}{{2}^{2}\cdot 2\text{!}}-\frac{{x}^{6}}{{2}^{3}\cdot 3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{x}^{2n}}{{2}^{n}\cdot n\text{!}}+\text{⋯} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2}{}^{n}}{{2}^{n}\cdot n\text{!}}}.\end{array}$  {eq:fs-id1167023758126}

Therefore,

$\begin{array}{rll}\frac{1}{\sqrt{2\pi}}{\displaystyle \int {e}^{\text{−}{z}^{2}\text{/}2}dz} & = & \frac{1}{\sqrt{2\pi}}{\displaystyle \int (1-\frac{{z}^{2}}{{2}^{1}\cdot 1\text{!}}+\frac{{z}^{4}}{{2}^{2}\cdot 2\text{!}}-\frac{{z}^{6}}{{2}^{3}\cdot 3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{z}^{2n}}{{2}^{n}\cdot n\text{!}}+\text{⋯})\;dz} \\ & = & \frac{1}{\sqrt{2\pi}}(C+z-\frac{{z}^{3}}{3\cdot {2}^{1}\cdot 1\text{!}}+\frac{{z}^{5}}{5\cdot {2}^{2}\cdot 2\text{!}}-\frac{{z}^{7}}{7\cdot {2}^{3}\cdot 3\text{!}}+\text{⋯}+{(−1)}^{n}\frac{{z}^{2n+1}}{(2n+1){2}^{n}\cdot n\text{!}}+\text{⋯}) \\ \frac{1}{\sqrt{2\pi}}{\displaystyle \int_{0}^{2}{e}^{\text{−}{z}^{2}\text{/}2}dz} & = & \frac{1}{\sqrt{2\pi}}(2-\frac{8}{6}+\frac{32}{40}-\frac{128}{336}+\frac{512}{3456}-\frac{{2}^{11}}{11\cdot {2}^{5}\cdot 5\text{!}}+\text{⋯}).\end{array}$  {eq:fs-id1167024047714}

Using the first five terms, we estimate that the probability is approximately $0.4922.$ By the alternating series test, we see that this estimate is accurate to within

$\frac{1}{\sqrt{2\pi}}\;\frac{{2}^{13}}{13\cdot {2}^{6}\cdot 6\text{!}}\approx 0.00546.$  {eq:fs-id1167023790577}

COMMENTARY: Analysis
If you are familiar with probability theory, you may know that the probability that a data value is within two standard deviations of the mean is approximately $95\text{\%}.$ Here we calculated the probability that a data value is between the mean and two standard deviations above the mean, so the estimate should be around $47.5\text{\%}.$ The estimate, combined with the bound on the accuracy, falls within this range.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167023790666} type= 
PROBLEM:
Use the first five terms of the Maclaurin series for ${e}^{\text{−}{x}^{2}\text{/}2}$ to estimate the probability that a randomly selected test score is between $100$ and $150.$ Use the alternating series test to determine the accuracy of this estimate.
SOLUTION:
The estimate is approximately $0.3414.$ This estimate is accurate to within $0.0000094.$
COMMENTARY: Hint
Evaluate ${\displaystyle \int_{0}^{1}{e}^{\text{−}{z}^{2}\text{/}2}}dz$ using the first five terms of the Maclaurin series for ${e}^{\text{−}{z}^{2}\text{/}2}.$
:::
:::
Another application in which a nonelementary integral arises involves the period of a pendulum. The integral is

${\displaystyle \int_{0}^{\pi \text{/}2}\frac{d\theta}{\sqrt{1-{k}^{2}{\text{sin}}^{2}\theta}}}.$  {eq:fs-id1167024040466}

An integral of this form is known as an {index:elliptic integral} of the first kind. Elliptic integrals originally arose when trying to calculate the arc length of an ellipse. We now show how to use power series to approximate this integral.

:::example {ex:fs-id1167024040533} Period of a Pendulum

:::exercise {fs-id1167024040535} type= 
PROBLEM:
The period of a pendulum is the time it takes for a pendulum to make one complete back-and-forth swing. For a pendulum with length $L$ that makes a maximum angle ${\theta}_{\text{max}}$ with the vertical, its period $T$ is given by

$T=4\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{\pi \text{/}2}\frac{d\theta}{\sqrt{1-{k}^{2}{\text{sin}}^{2}\theta}}}$  {eq:fs-id1167024040565}

where $g$ is the acceleration due to gravity and $k=\text{sin}(\frac{{\theta}_{\text{max}}}{2})$ (see [ref:CNX_Calc_Figure_10_04_003]). (We note that this formula for the period arises from a non-linearized model of a pendulum. In some cases, for simplification, a linearized model is used and $\text{sin}\;\theta$ is approximated by $\theta .)$ Use the binomial series

$\frac{1}{\sqrt{1+x}}=1+{\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}}{n\text{!}}}\;\frac{1\cdot 3\cdot 5\text{⋯}(2n-1)}{{2}^{n}}{x}^{n}$  {eq:fs-id1167023766351}

to estimate the period of this pendulum. Specifically, approximate the period of the pendulum if
a. you use only the first term in the binomial series, and
b. you use the first two terms in the binomial series.

> FIGURE {fig:CNX_Calc_Figure_10_04_003} src=../../media/CNX_Calc_Figure_10_04_002.jpg
> alt: This figure is a pendulum. There are three positions of the pendulum shown. When the pendulum is to the far left, it is labeled negative theta max. When the pendulum is in the middle and vertical, it is labeled equilibrium position. When the pendulum is to the far right it is labeled theta max. Also, theta is the angle from equilibrium to the far right position. The length of the pendulum is labeled L.
> caption: This pendulum has length $L$ and makes a maximum angle ${\theta}_{\text{max}}$ with the vertical.

SOLUTION:
We use the binomial series, replacing $x$ with $\text{−}{k}^{2}{\text{sin}}^{2}\theta .$ Then we can write the period as

$T=4\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{\pi \text{/}2}(1+\frac{1}{2}{k}^{2}{\text{sin}}^{2}\theta +\frac{1\cdot 3}{2\text{!}{2}^{2}}{k}^{4}{\text{sin}}^{4}\theta +\text{⋯})\;d\theta}.$  {eq:fs-id1167023871840}

a. Using just the first term in the integrand, the first-order estimate is

$T\approx 4\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{\pi \text{/}2}d\theta =2\pi \sqrt{\frac{L}{g}}.}$  {eq:fs-id1167023871967}

If ${\theta}_{\text{max}}$ is small, then $k=\text{sin}(\frac{{\theta}_{\text{max}}}{2})$ is small. We claim that when $k$ is small, this is a good estimate. To justify this claim, consider

${\displaystyle \int_{0}^{\pi \text{/}2}(1+\frac{1}{2}{k}^{2}{\text{sin}}^{2}\theta +\frac{1\cdot 3}{2\text{!}{2}^{2}}{k}^{4}{\text{sin}}^{4}\theta +\text{⋯})\;d\theta}.$  {eq:fs-id1167023794977}

Since $|\text{sin}\;x|\le 1,$ this integral is bounded by

${\displaystyle \int_{0}^{\pi \text{/}2}(\frac{1}{2}{k}^{2}+\frac{1.3}{2\text{!}{2}^{2}}{k}^{4}+\text{⋯})\;d\theta}<\frac{\pi}{2}(\frac{1}{2}{k}^{2}+\frac{1\cdot 3}{2\text{!}{2}^{2}}{k}^{4}+\text{⋯}).$  {eq:fs-id1167023795106}

Furthermore, it can be shown that each coefficient on the right-hand side is less than $1$ and, therefore, that this expression is bounded by

$\frac{\pi {k}^{2}}{2}(1+{k}^{2}+{k}^{4}+\text{⋯})=\frac{\pi {k}^{2}}{2}\cdot \frac{1}{1-{k}^{2}},$  {eq:fs-id1167023835770}

which is small for $k$ small.
b. For larger values of ${\theta}_{\text{max}},$ we can approximate $T$ by using more terms in the integrand. By using the first two terms in the integral, we arrive at the estimate

$\begin{array}{rl}T & \approx 4\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{\pi \text{/}2}(1+\frac{1}{2}{k}^{2}{\text{sin}}^{2}\theta )d}\theta \\ & =2\pi \sqrt{\frac{L}{g}}(1+\frac{{k}^{2}}{4}).\end{array}$  {eq:fs-id1167023785853}

:::
:::
The applications of Taylor series in this section are intended to highlight their importance. In general, Taylor series are useful because they allow us to represent known functions using polynomials, thus providing us a tool for approximating function values and estimating complicated integrals. In addition, they allow us to define new functions as power series, thus providing us with a powerful tool for solving differential equations.

## Key Concepts {section:key-concepts}
- The binomial series is the Maclaurin series for $f(x)={(1+x)}^{r}.$ It converges for $|x|<1.$
- Taylor series for functions can often be derived by algebraic operations with a known Taylor series or by differentiating or integrating a known Taylor series.
- Power series can be used to solve differential equations.
- Taylor series can be used to help approximate integrals that cannot be evaluated by other means.

##  {section:section-exercises}
In the following exercises, use appropriate substitutions to write down the Maclaurin series for the given binomial.

:::exercise {fs-id1167023801757} type= 
PROBLEM:
${(1-x)}^{1\text{/}3}$
:::

:::exercise {fs-id1167023801880} type= 
PROBLEM:
${(1+{x}^{2})}^{−1\text{/}3}$
SOLUTION:
${(1+{x}^{2})}^{−1\text{/}3}={\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}-\frac{1}{3} \\ n\end{array}){x}^{2n}}$
:::

:::exercise {fs-id1167023851577} type= 
PROBLEM:
${(1-x)}^{1.01}$
:::

:::exercise {fs-id1167023851687} type= 
PROBLEM:
${(1-2x)}^{2\text{/}3}$
SOLUTION:
${(1-2x)}^{2\text{/}3}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{2}^{n}}(\begin{array}{l}\frac{2}{3} \\ n\end{array}){x}^{n}$
:::
In the following exercises, use the substitution ${(b+x)}^{r}={(b+a)}^{r}{(1+\frac{x-a}{b+a})}^{r}$ in the binomial expansion to find the Taylor series of each function with the given center.

:::exercise {fs-id1167023861290} type= 
PROBLEM:
$\sqrt{x+2}$ at $a=0$
:::

:::exercise {fs-id1167023785043} type= 
PROBLEM:
$\sqrt{{x}^{2}+2}$ at $a=0$
SOLUTION:
$\sqrt{2+{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {2}^{(1\text{/}2)-n}}(\begin{array}{l}\frac{1}{2} \\ n\end{array}){x}^{2n};(|{x}^{2}|<2)$
:::

:::exercise {fs-id1167023863292} type= 
PROBLEM:
$\sqrt{x+2}$ at $a=1$
:::

:::exercise {fs-id1167023772292} type= 
PROBLEM:
$\sqrt{2x-{x}^{2}}$ at $a=1$ (*Hint:* $2x-{x}^{2}=1-{(x-1)}^{2})$
SOLUTION:
$\sqrt{2x-{x}^{2}}=\sqrt{1-{(x-1)}^{2}}$ so $\sqrt{2x-{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}}(\begin{array}{l}\frac{1}{2} \\ n\end{array}){(x-1)}^{2n}$
:::

:::exercise {fs-id1167023765440} type= 
PROBLEM:
${(x-8)}^{1\text{/}3}$ at $a=9$
:::

:::exercise {fs-id1167023765599} type= 
PROBLEM:
$\sqrt{x}$ at $a=4$
SOLUTION:
$\sqrt{x}=2\sqrt{1+\frac{x-4}{4}}$ so $\sqrt{x}={\displaystyle \sum_{n=0}^{\infty} {2}^{1-2n}(\begin{array}{l}\frac{1}{2} \\ n\end{array}){(x-4)}^{n}}$
:::

:::exercise {fs-id1167023921356} type= 
PROBLEM:
${x}^{1\text{/}3}$ at $a=27$
:::

:::exercise {fs-id1167024042805} type= 
PROBLEM:
$\sqrt{x}$ at $\alpha =9$
SOLUTION:
$\sqrt{x}={\displaystyle \sum_{n=0}^{\infty} {3}^{1-2n}(\frac{1}{2}n){(x-9)}^{n}}$
:::
In the following exercises, use the binomial theorem to estimate each number, computing enough terms to obtain an estimate accurate to an error of at most $1\text{/}1000.$

:::exercise {fs-id1167024042925} type= 
PROBLEM:
**[T]** ${(15)}^{1\text{/}4}$ using ${(16-x)}^{1\text{/}4}$
:::

:::exercise {fs-id1167023916291} type= 
PROBLEM:
**[T]** ${(1001)}^{1\text{/}3}$ using ${(1000+x)}^{1\text{/}3}$
SOLUTION:
$10{(1+\frac{x}{1000})}^{1\text{/}3}={\displaystyle \sum_{n=0}^{\infty} {10}^{1-3n}}(\begin{array}{l}\frac{1}{3} \\ n\end{array}){x}^{n}.$ Using, for example, a fourth-degree estimate at $x=1$ gives $\begin{array}{rl}{(1001)}^{1\text{/}3} & \approx 10(1+(\begin{array}{l}\frac{1}{3} \\ 1\end{array}){10}^{−3}+(\begin{array}{l}\frac{1}{3} \\ 2\end{array}){10}^{−6}+(\begin{array}{l}\frac{1}{3} \\ 3\end{array}){10}^{−9}+(\begin{array}{l}\frac{1}{3} \\ 4\end{array}){10}^{−12}) \\ & =10(1+\frac{1}{{3.10}^{3}}-\frac{1}{{9.10}^{6}}+\frac{5}{{81.10}^{9}}-\frac{10}{{243.10}^{12}})=10.00333222...\end{array}$ whereas ${(1001)}^{1\text{/}3}=10.00332222839093....$ Two terms would suffice for three-digit accuracy.
:::
In the following exercises, use the binomial approximation $\sqrt{1-x}\approx 1-\frac{x}{2}-\frac{{x}^{2}}{8}-\frac{{x}^{3}}{16}-\frac{5{x}^{4}}{128}-\frac{7{x}^{5}}{256}$ for $|x|<1$ to approximate each number. Compare this value to the value given by a scientific calculator.

:::exercise {fs-id1167023809199} type= 
PROBLEM:
**[T]** $\frac{1}{\sqrt{2}}$ using $x=\frac{1}{2}$ in ${(1-x)}^{1\text{/}2}$
:::

:::exercise {fs-id1167023809286} type= 
PROBLEM:
**[T]** $\sqrt{5}=5\;\times \;\frac{1}{\sqrt{5}}$ using $x=\frac{4}{5}$ in ${(1-x)}^{1\text{/}2}$
SOLUTION:
The approximation is $2.3152;$ the CAS value is $2.23\text{…}.$
:::

:::exercise {fs-id1167023806288} type= 
PROBLEM:
**[T]** $\sqrt{3}=\frac{3}{\sqrt{3}}$ using $x=\frac{2}{3}$ in ${(1-x)}^{1\text{/}2}$
:::

:::exercise {fs-id1167023806380} type= 
PROBLEM:
**[T]** $\sqrt{6}$ using $x=\frac{5}{6}$ in ${(1-x)}^{1\text{/}2}$
SOLUTION:
The approximation is $2.583\text{…};$ the CAS value is $2.449\text{…}.$
:::

:::exercise {fs-id1167023911217} type= 
PROBLEM:
Integrate the binomial approximation of $\sqrt{1-x}$ to find an approximation of ${\displaystyle \int_{0}^{x}\sqrt{1-t}}dt.$
:::

:::exercise {fs-id1167024043307} type= 
PROBLEM:
**[T]** Recall that the graph of $\sqrt{1-{x}^{2}}$ is an upper semicircle of radius $1.$ Integrate the binomial approximation of $\sqrt{1-{x}^{2}}$ up to order $8$ from $x=−1$ to $x=1$ to estimate $\frac{\pi}{2}.$
SOLUTION:

$\sqrt{1-{x}^{2}}=1-\frac{{x}^{2}}{2}-\frac{{x}^{4}}{8}-\frac{{x}^{6}}{16}-\frac{5{x}^{8}}{128}+\text{⋯}.$ Thus
${\displaystyle \int_{−1}^{1}\sqrt{1-{x}^{2}}}dx=x-\frac{{x}^{3}}{6}-\frac{{x}^{5}}{40}-\frac{{x}^{7}}{7\cdot 16}-\frac{5{x}^{9}}{9\cdot 128}+\text{⋯}{|}_{−1}^{1}\approx 2-\frac{1}{3}-\frac{1}{20}-\frac{1}{56}-\frac{10}{9\cdot 128}+\text{error}=1.590...$ whereas $\frac{\pi}{2}=1.570...$
:::
In the following exercises, use the expansion ${(1+x)}^{1\text{/}3}=1+\frac{1}{3}x-\frac{1}{9}{x}^{2}+\frac{5}{81}{x}^{3}-\frac{10}{243}{x}^{4}+\text{⋯}$ to write the first five terms (not necessarily a quartic polynomial) of each expression.

:::exercise {fs-id1167023809537} type= 
PROBLEM:
${(1+4x)}^{1\text{/}3};a=0$
:::

:::exercise {fs-id1167023755649} type= 
PROBLEM:
${(1+4x)}^{4\text{/}3};a=0$
SOLUTION:
$\begin{array}{l}{(1+4x)}^{4/3}=(1+4x){(1+4x)}^{1/3} \\ =(1+4x)(1+\frac{4x}{3}-\frac{16{x}^{3}}{9}+\frac{320{x}^{3}}{81}-\frac{2560{x}^{4}}{243}) \\ =1+\frac{16}{3}x+\frac{32}{9}{x}^{2}-\frac{256}{81}{x}^{3}+\frac{1280}{243}{x}^{4}-\frac{10240}{243}{x}^{5}\end{array}$
:::

:::exercise {fs-id1167023798474} type= 
PROBLEM:
${(3+2x)}^{1\text{/}3};a=−1$
:::

:::exercise {fs-id1167023803588} type= 
PROBLEM:
${({x}^{2}+6x+10)}^{1\text{/}3};a=−3$
SOLUTION:
${(1+{(x+3)}^{2})}^{1\text{/}3}=1+\frac{1}{3}{(x+3)}^{2}-\frac{1}{9}{(x+3)}^{4}+\frac{5}{81}{(x+3)}^{6}-\frac{10}{243}{(x+3)}^{8}+\text{⋯}$
:::

:::exercise {fs-id1167023793419} type= 
PROBLEM:
Use ${(1+x)}^{1\text{/}3}=1+\frac{1}{3}x-\frac{1}{9}{x}^{2}+\frac{5}{81}{x}^{3}-\frac{10}{243}{x}^{4}+\text{⋯}$ with $x=1$ to approximate ${2}^{1\text{/}3}.$
:::

:::exercise {fs-id1167023778819} type= 
PROBLEM:
Use the approximation ${(1-x)}^{2\text{/}3}=1-\frac{2x}{3}-\frac{{x}^{2}}{9}-\frac{4{x}^{3}}{81}-\frac{7{x}^{4}}{243}-\frac{14{x}^{5}}{729}+\text{⋯}$ for $|x|<1$ to approximate ${2}^{1\text{/}3}={2.2}^{−2\text{/}3}.$
SOLUTION:
Twice the approximation is $1.260\text{…}$ whereas ${2}^{1\text{/}3}=1.2599....$
:::

:::exercise {fs-id1167023779006} type= 
PROBLEM:
Find the $25\text{th}$ derivative of $f(x)={(1+{x}^{2})}^{13}$ at $x=0.$
:::

:::exercise {fs-id1167023786885} type= 
PROBLEM:
Find the $99$ th derivative at $x=0$ of $f(x)={(1+{x}^{4})}^{25}.$
SOLUTION:
${f}^{(99)}(0)=0$
:::
In the following exercises, find the Maclaurin series of each function.

:::exercise {fs-id1167023786974} type= 
PROBLEM:
$f(x)=x{e}^{2x}$
:::

:::exercise {fs-id1167023787057} type= 
PROBLEM:
$f(x)={2}^{x}$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(\text{ln}\;(2)x)}^{n}}{n\text{!}}}$
:::

:::exercise {fs-id1167023787139} type= 
PROBLEM:
$f(x)=\frac{\text{sin}\;x}{x}$
:::

:::exercise {fs-id1167023800961} type= 
PROBLEM:
$f(x)=\frac{\text{sin}(\sqrt{x})}{\sqrt{x}},\;(x>0),$
SOLUTION:
For $x>0,\text{sin}(\sqrt{x})={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{(2n+1)\text{/}2}}{\sqrt{x}(2n+1)\text{!}}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{n}}{(2n+1)\text{!}}}.$
:::

:::exercise {fs-id1167023801189} type= 
PROBLEM:
$f(x)=\text{sin}({x}^{2})$
:::

:::exercise {fs-id1167023799746} type= 
PROBLEM:
$f(x)={e}^{{x}^{3}}$
SOLUTION:
${e}^{{x}^{3}}={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{3n}}{n\text{!}}}$
:::

:::exercise {fs-id1167023799830} type= 
PROBLEM:
$f(x)={\text{cos}}^{2}x$ using the identity ${\text{cos}}^{2}x=\frac{1}{2}+\frac{1}{2}\;\text{cos}\;(2x)$
:::

:::exercise {fs-id1167023779564} type= 
PROBLEM:
$f(x)={\text{sin}}^{2}x$ using the identity ${\text{sin}}^{2}x=\frac{1}{2}-\frac{1}{2}\;\text{cos}\;(2x)$
SOLUTION:
${\text{sin}}^{2}x=\text{−}{\displaystyle \sum_{k=1}^{\infty} \frac{{(−1)}^{k}{2}^{2k-1}{x}^{2k}}{(2k)\text{!}}}$
:::
In the following exercises, find the Maclaurin series of $F(x)={\displaystyle \int_{0}^{x}f(t)\;dt}$ by integrating the Maclaurin series of $f$ term by term. If $f$ is not strictly defined at zero, you may substitute the value of the Maclaurin series at zero.

:::exercise {fs-id1167023920369} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}{e}^{\text{−}{t}^{2}}}dt;f(t)={e}^{\text{−}{t}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}}\frac{{t}^{2n}}{n\text{!}}$
:::

:::exercise {fs-id1167023920580} type= 
PROBLEM:
$F(x)={\text{tan}}^{−1}x;\;f(t)=\frac{1}{1+{t}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{t}^{2n}}$
SOLUTION:
${\text{tan}}^{−1}x={\displaystyle \sum_{k=0}^{\infty} \frac{{(−1)}^{k}{x}^{2k+1}}{2k+1}}$
:::

:::exercise {fs-id1167023849067} type= 
PROBLEM:
$F(x)={\text{tanh}}^{−1}x;\;f(t)=\frac{1}{1-{t}^{2}}={\displaystyle \sum_{n=0}^{\infty} {t}^{2n}}$
:::

:::exercise {fs-id1167023776912} type= 
PROBLEM:
$F(x)={\text{sin}}^{−1}x;\;f(t)=\frac{1}{\sqrt{1-{t}^{2}}}={\displaystyle \sum_{k=0}^{\infty} (\begin{array}{l}\frac{1}{2} \\ k\end{array})\frac{{t}^{2k}}{k\text{!}}}$
SOLUTION:
${\text{sin}}^{−1}x={\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}\frac{1}{2} \\ n\end{array})\frac{{x}^{2n+1}}{(2n+1)n\text{!}}}$
:::

:::exercise {fs-id1167023922347} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}\frac{\text{sin}\;t}{t}dt};\;f(t)=\frac{\text{sin}\;t}{t}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{2n}}{(2n+1)\text{!}}}$
:::

:::exercise {fs-id1167023922573} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}\text{cos}(\sqrt{t})\;dt};\;f(t)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{n}}{(2n)\text{!}}}$
SOLUTION:
$F(x)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{n+1}}{(n+1)(2n)\text{!}}}$
:::

:::exercise {fs-id1167023805706} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}\frac{1-\text{cos}\;t}{{t}^{2}}dt};\;f(t)=\frac{1-\text{cos}\;t}{{t}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{2n}}{(2n+2)\text{!}}}$
:::

:::exercise {fs-id1167023797831} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}\frac{\text{ln}\;(1+t)}{t}dt};\;f(t)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{n}}{n+1}}$
SOLUTION:
$F(x)={\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n+1}\frac{{x}^{n}}{{n}^{2}}}$
:::
In the following exercises, compute at least the first three nonzero terms (not necessarily a quadratic polynomial) of the Maclaurin series of $f.$

:::exercise {fs-id1167023915454} type= 
PROBLEM:
$f(x)=\text{sin}(x+\frac{\pi}{4})=\text{sin}\;x\;\text{cos}(\frac{\pi}{4})+\text{cos}\;x\;\text{sin}(\frac{\pi}{4})$
:::

:::exercise {fs-id1167023799995} type= 
PROBLEM:
$f(x)=\text{tan}\;x$
SOLUTION:
$x+\frac{{x}^{3}}{3}+\frac{2{x}^{5}}{15}+\text{⋯}$
:::

:::exercise {fs-id1167023800065} type= 
PROBLEM:
$f(x)=\text{ln}\;(\text{cos}\;x)$
:::

:::exercise {fs-id1167023800152} type= 
PROBLEM:
$f(x)={e}^{x}\text{cos}\;x$
SOLUTION:
$1+x-\frac{{x}^{3}}{3}-\frac{{x}^{4}}{6}+\text{⋯}$
:::

:::exercise {fs-id1167023800229} type= 
PROBLEM:
$f(x)={e}^{\text{sin}\;x}$
:::

:::exercise {fs-id1167023775350} type= 
PROBLEM:
$f(x)={\text{sec}}^{2}x$
SOLUTION:
$1+{x}^{2}+\frac{2{x}^{4}}{3}+\frac{17{x}^{6}}{45}+\text{⋯}$
:::

:::exercise {fs-id1167023775431} type= 
PROBLEM:
$f(x)=\text{tanh}\;x$
:::

:::exercise {fs-id1167023775501} type= 
PROBLEM:
$f(x)=\frac{\text{tan}\sqrt{x}}{\sqrt{x}}$ (see expansion for $\text{tan}\;x)$
SOLUTION:
Using the expansion for $\text{tan}\;x$ gives $1+\frac{x}{3}+\frac{2{x}^{2}}{15}.$
:::
In the following exercises, find the radius of convergence of the Maclaurin series of each function.

:::exercise {fs-id1167023764751} type= 
PROBLEM:
$\text{ln}\;(1+x)$
:::

:::exercise {fs-id1167023764857} type= 
PROBLEM:
$\frac{1}{1+{x}^{2}}$
SOLUTION:
$\frac{1}{1+{x}^{2}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{2n}}$ so $R=1$ by the ratio test.
:::

:::exercise {fs-id1167023764955} type= 
PROBLEM:
${\text{tan}}^{−1}x$
:::

:::exercise {fs-id1167023913276} type= 
PROBLEM:
$\text{ln}\;(1+{x}^{2})$
SOLUTION:
$\text{ln}\;(1+{x}^{2})={\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n-1}}{n}}{x}^{2n}$ so $R=1$ by the ratio test.
:::

:::exercise {fs-id1167023913392} type= 
PROBLEM:
Find the Maclaurin series of $\text{sinh}\;x=\frac{{e}^{x}-{e}^{\text{−}x}}{2}.$
:::

:::exercise {fs-id1167023763642} type= 
PROBLEM:
Find the Maclaurin series of $\text{cosh}\;x=\frac{{e}^{x}+{e}^{\text{−}x}}{2}.$
SOLUTION:
Add series of ${e}^{x}$ and ${e}^{\text{−}x}$ term by term. Odd terms cancel and $\text{cosh}\;x={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n}}{(2n)\text{!}}}.$
:::

:::exercise {fs-id1167023763767} type= 
PROBLEM:
Differentiate term by term the Maclaurin series of $\text{sinh}\;x$ and compare the result with the Maclaurin series of $\text{cosh}\;x.$
:::

:::exercise {fs-id1167023774048} type= 
PROBLEM:
**[T]** Let ${S}_{n}(x)={\displaystyle \sum_{k=0}^{n} {(−1)}^{k}\frac{{x}^{2k+1}}{(2k+1)\text{!}}}$ and ${C}_{n}(x)={\displaystyle \sum_{n=0}^{n} {(−1)}^{k}\frac{{x}^{2k}}{(2k)\text{!}}}$ denote the respective Maclaurin polynomials of degree $2n+1$ of $\text{sin}\;x$ and degree $2n$ of $\text{cos}\;x.$ Plot the errors $\frac{{S}_{n}(x)}{{C}_{n}(x)}-\text{tan}\;x$ for $n=1,..,5$ and compare them to $x+\frac{{x}^{3}}{3}+\frac{2{x}^{5}}{15}+\frac{17{x}^{7}}{315}-\text{tan}\;x$ on $(-\frac{\pi}{4},\frac{\pi}{4}).$
SOLUTION:

> IMAGE {img:fs-id1167023921072} src=../../media/CNX_Calc_Figure_10_04_201.jpg
> alt: This graph has two curves. The first one is a decreasing function passing through the origin. The second is a broken line which is an increasing function passing through the origin. The two curves are very close around the origin.

The ratio $\frac{{S}_{n}(x)}{{C}_{n}(x)}$ approximates $\text{tan}\;x$ better than does ${p}_{7}(x)=x+\frac{{x}^{3}}{3}+\frac{2{x}^{5}}{15}+\frac{17{x}^{7}}{315}$ for $N\ge 3.$ The dashed curves are $\frac{{S}_{n}}{{C}_{n}}-\text{tan}$ for $n=1,2.$ The dotted curve corresponds to $n=3,$ and the dash-dotted curve corresponds to $n=4.$ The solid curve is ${p}_{7}-\text{tan}\;x.$
:::

:::exercise {fs-id1167024043592} type= 
PROBLEM:
Use the identity $2\;\text{sin}\;x\;\text{cos}\;x=\text{sin}(2x)$ to find the power series expansion of ${\text{sin}}^{2}x$ at $x=0.$ (*Hint:* Integrate the Maclaurin series of $\text{sin}(2x)$ term by term.)
:::

:::exercise {fs-id1167023785664} type= 
PROBLEM:
If $y={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}},$ find the power series expansions of $x{y}^{'}$ and ${x}^{2}{y}^{''}.$
SOLUTION:
By the term-by-term differentiation theorem, ${y}^{'}={\displaystyle \sum_{n=1}^{\infty} n{a}_{n}{x}^{n-1}}$ so ${y}^{'}={\displaystyle \sum_{n=1}^{\infty} n{a}_{n}{x}^{n-1}}\;x{y}^{'}={\displaystyle \sum_{n=1}^{\infty} n{a}_{n}{x}^{n}},$ whereas ${y}^{'}={\displaystyle \sum_{n=2}^{\infty} n(n-1){a}_{n}{x}^{n-2}}$ so $x{y}^{''}={\displaystyle \sum_{n=2}^{\infty} n(n-1){a}_{n}{x}^{n}}.$
:::

:::exercise {fs-id1167023877581} type= 
PROBLEM:
**[T]** Suppose that $y={\displaystyle \sum_{k=0}^{\infty} {a}_{k}{x}^{k}}$ satisfies ${y}^{'}=−2xy$ and $y(0)=0.$ Show that ${a}_{2k+1}=0$ for all $k$ and that ${a}_{2k+2}=\frac{\text{−}{a}_{2k}}{k+1}.$ Plot the partial sum ${S}_{20}$ of $y$ on the interval $[−4,4].$
:::

:::exercise {fs-id1167023780227} type= 
PROBLEM:
**[T]** Suppose that a set of standardized test scores is normally distributed with mean $μ=100$ and standard deviation $σ=10.$ Set up an integral that represents the probability that a test score will be between $90$ and $110$ and use the integral of the degree $10$ Maclaurin polynomial of $\frac{1}{\sqrt{2\pi}}{e}^{\text{−}{x}^{2}\text{/}2}$ to estimate this probability.
SOLUTION:
The probability is $p=\frac{1}{\sqrt{2\pi}}{\displaystyle \int_{(a-μ)\text{/}σ}^{(b-μ)\text{/}σ}{e}^{\text{−}{x}^{2}\text{/}2}dx}$ where $a=90$ and $b=100,$ that is, $p=\frac{1}{\sqrt{2\pi}}{\displaystyle \int_{−1}^{1}{e}^{\text{−}{x}^{2}\text{/}2}dx}=\frac{1}{\sqrt{2\pi}}{\displaystyle \int_{−1}^{1}{\displaystyle \sum_{n=0}^{5} {(−1)}^{n}}\frac{{x}^{2n}}{{2}^{n}n\text{!}}dx}=\frac{2}{\sqrt{2\pi}}{\displaystyle \sum_{n=0}^{5} {(−1)}^{n}}\frac{1}{(2n+1){2}^{n}n\text{!}}\approx 0.6827.$
:::

:::exercise {fs-id1167023859444} type= 
PROBLEM:
**[T]** Suppose that a set of standardized test scores is normally distributed with mean $μ=100$ and standard deviation $σ=10.$ Set up an integral that represents the probability that a test score will be between $70$ and $130$ and use the integral of the degree $50$ Maclaurin polynomial of $\frac{1}{\sqrt{2\pi}}{e}^{\text{−}{x}^{2}\text{/}2}$ to estimate this probability.
:::

:::exercise {fs-id1167024036700} type= 
PROBLEM:
**[T]** Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges to a function $f(x)$ such that $f(0)=1,{f}^{'}(0)=0,$ and ${f}^{''}(x)=\text{−}f(x).$ Find a formula for ${a}_{n}$ and plot the partial sum ${S}_{N}$ for $N=20$ on $[−5,5].$
SOLUTION:

> IMAGE {img:fs-id1167024036878} src=../../media/CNX_Calc_Figure_10_04_207.jpg
> alt: This graph is a wave curve symmetrical about the origin. It has a peak at y = 1 above the origin. It has lowest points at -3 and 3.

As in the previous problem one obtains ${a}_{n}=0$ if $n$ is odd and ${a}_{n}=\text{−}(n+2)(n+1){a}_{n+2}$ if $n$ is even, so ${a}_{0}=1$ leads to ${a}_{2n}=\frac{{(−1)}^{n}}{(2n)\text{!}}.$
:::

:::exercise {fs-id1167023813761} type= 
PROBLEM:
**[T]** Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges to a function $f(x)$ such that $f(0)=0,\;{f}^{'}(0)=1,$ and ${f}^{''}(x)=\text{−}f(x).$ Find a formula for ${a}_{n}$ and plot the partial sum ${S}_{N}$ for $N=10$ on $[−5,5].$
:::

:::exercise {fs-id1167023858990} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges to a function $y$ such that ${y}^{''}-{y}^{'}+y=0$ where $y(0)=1$ and $y'(0)=0.$ Find a formula that relates ${a}_{n+2},{a}_{n+1},$ and ${a}_{n}$ and compute ${a}_{0},...,{a}_{5}.$
SOLUTION:
${y}^{''}={\displaystyle \sum_{n=0}^{\infty} (n+2)(n+1){a}_{n+2}{x}^{n}}$ and ${y}^{'}={\displaystyle \sum_{n=0}^{\infty} (n+1){a}_{n+1}{x}^{n}}$ so ${y}^{''}-{y}^{'}+y=0$ implies that $(n+2)(n+1){a}_{n+2}-(n+1){a}_{n+1}+{a}_{n}=0$ or ${a}_{n}=\frac{{a}_{n-1}}{n}-\frac{{a}_{n-2}}{n(n-1)}$ for all $n\cdot y(0)={a}_{0}=1$ and ${y}^{'}(0)={a}_{1}=0,$ so ${a}_{2}=\frac{1}{2},{a}_{3}=\frac{1}{6},{a}_{4}=0,$ and ${a}_{5}=-\frac{1}{120}.$
:::

:::exercise {fs-id1167024039681} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges to a function $y$ such that ${y}^{''}-{y}^{'}+y=0$ where $y(0)=0$ and ${y}^{'}(0)=1.$ Find a formula that relates ${a}_{n+2},{a}_{n+1},$ and ${a}_{n}$ and compute ${a}_{1},...,{a}_{5}.$
:::
The error in approximating the integral ${\displaystyle \int_{a}^{b}f(t)\;dt}$ by that of a Taylor approximation ${\displaystyle \int_{a}^{b}{P}_{n}(t)\;dt}$ is at most ${\displaystyle \int_{a}^{b}{R}_{n}(t)\;dt}.$ In the following exercises, the Taylor remainder estimate ${R}_{n}\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}$ guarantees that the integral of the Taylor polynomial of the given order approximates the integral of $f$ with an error less than $\frac{1}{10}.$
a. Evaluate the integral of the appropriate Taylor polynomial and verify that it approximates the CAS value with an error less than $\frac{1}{100}.$
b. Compare the accuracy of the polynomial integral estimate with the remainder estimate.

:::exercise {fs-id1167023829504} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{\pi}\frac{\text{sin}\;t}{t}dt};{P}_{s}=1-\frac{{x}^{2}}{3\text{!}}+\frac{{x}^{4}}{5\text{!}}-\frac{{x}^{6}}{7\text{!}}+\frac{{x}^{8}}{9\text{!}}$ (You may assume that the absolute value of the ninth derivative of $\frac{\text{sin}\;t}{t}$ is bounded by $0.1.)$
SOLUTION:
a. (Proof) b. We have ${R}_{s}\le \frac{0.1}{(9)\text{!}}{\pi}^{9}\approx 0.0082<0.01.$ We have ${\displaystyle \int_{0}^{\pi}(1-\frac{{x}^{2}}{3\text{!}}+\frac{{x}^{4}}{5\text{!}}-\frac{{x}^{6}}{7\text{!}}+\frac{{x}^{8}}{9\text{!}})\;dx}=\pi -\frac{{\pi}^{3}}{3\cdot 3\text{!}}+\frac{{\pi}^{5}}{5\cdot 5\text{!}}-\frac{{\pi}^{7}}{7\cdot 7\text{!}}+\frac{{\pi}^{9}}{9\cdot 9\text{!}}=1.852...,$ whereas ${\displaystyle \int_{0}^{\pi}\frac{\text{sin}\;t}{t}dt}=1.85194...,$ so the actual error is approximately $0.00006.$
:::

:::exercise {fs-id1167024039490} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{2}{e}^{\text{−}{x}^{2}}}dx;{p}_{11}=1-{x}^{2}+\frac{{x}^{4}}{2}-\frac{{x}^{6}}{3\text{!}}+\text{⋯}-\frac{{x}^{22}}{11\text{!}}$ (You may assume that the absolute value of the $23\text{rd}$ derivative of ${e}^{\text{−}{x}^{2}}$ is less than $2\;\times \;{10}^{14}.)$
:::
The following exercises deal with {index:Fresnel integrals}.

:::exercise {fs-id1167023915040} type= 
PROBLEM:
The Fresnel integrals are defined by $C(x)={\displaystyle \int_{0}^{x}\text{cos}({t}^{2})\;dt}$ and $S(x)={\displaystyle \int_{0}^{x}\text{sin}({t}^{2})\;dt}.$ Compute the power series of $C(x)$ and $S(x)$ and plot the sums ${C}_{N}(x)$ and ${S}_{N}(x)$ of the first $N=50$ nonzero terms on $[0,2\pi ].$
SOLUTION:

> IMAGE {img:fs-id1167023917259} src=../../media/CNX_Calc_Figure_10_04_204.jpg
> alt: This graph has two curves. The first one is a solid curve labeled Csub50(x). It begins at the origin and is a wave that gradually decreases in amplitude. The highest it reaches is y = 1. The second curve is labeled Ssub50(x). It is a wave that gradually decreases in amplitude. The highest it reaches is 0.9. It is very close to the pattern of the first curve with a slight shift to the right.

Since $\text{cos}({t}^{2})={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{4n}}{(2n)\text{!}}}$ and $\text{sin}({t}^{2})={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{4n+2}}{(2n+1)\text{!}}},$ one has $S(x)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{4n+3}}{(4n+3)(2n+1)\text{!}}}$ and $C(x)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{4n+1}}{(4n+1)(2n)\text{!}}}.$ The sums of the first $50$ nonzero terms are plotted below with ${C}_{50}(x)$ the solid curve and ${S}_{50}(x)$ the dashed curve.
:::

:::exercise {fs-id1167023917660} type= 
PROBLEM:
**[T]** The Fresnel integrals are used in design applications for roadways and railways and other applications because of the curvature properties of the curve with coordinates $(C(t),S(t)).$ Plot the curve $({C}_{50},{S}_{50})$ for $0\le t\le 2\pi ,$ the coordinates of which were computed in the previous exercise.
:::

:::exercise {fs-id1167024042101} type= 
PROBLEM:
Estimate ${\displaystyle \int_{0}^{1\text{/}4}\sqrt{x-{x}^{2}}}dx$ by approximating $\sqrt{1-x}$ using the binomial approximation $1-\frac{x}{2}-\frac{{x}^{2}}{8}-\frac{{x}^{3}}{16}-\frac{5{x}^{4}}{2128}-\frac{7{x}^{5}}{256}.$
SOLUTION:
${\displaystyle \int_{0}^{1\text{/}4}\sqrt{x}}(1-\frac{x}{2}-\frac{{x}^{2}}{8}-\frac{{x}^{3}}{16}-\frac{5{x}^{4}}{128}-\frac{7{x}^{5}}{256})\;dx$
$=\frac{2}{3}{2}^{−3}-\frac{1}{2}\;\frac{2}{5}{2}^{−5}-\frac{1}{8}\;\frac{2}{7}{2}^{−7}-\frac{1}{16}\;\frac{2}{9}{2}^{−9}-\frac{5}{128}\;\frac{2}{11}{2}^{−11}-\frac{7}{256}\;\frac{2}{13}{2}^{−13}=0.0767732...$
whereas ${\displaystyle \int_{0}^{1\text{/}4}\sqrt{x-{x}^{2}}}dx=0.076773.$
:::

:::exercise {fs-id1167024042511} type= 
PROBLEM:
**[T]** Use Newton’s approximation of the binomial $\sqrt{1-{x}^{2}}$ to approximate $\pi$ as follows. The circle centered at $(\frac{1}{2},0)$ with radius $\frac{1}{2}$ has upper semicircle $y=\sqrt{x}\sqrt{1-x}.$ The sector of this circle bounded by the $x$-axis between $x=0$ and $x=\frac{1}{2}$ and by the line joining $(\frac{1}{4},\frac{\sqrt{3}}{4})$ corresponds to $\frac{1}{6}$ of the circle and has area $\frac{\pi}{24}.$ This sector is the union of a right triangle with height $\frac{\sqrt{3}}{4}$ and base $\frac{1}{4}$ and the region below the graph between $x=0$ and $x=\frac{1}{4}.$ To find the area of this region you can write $y=\sqrt{x}\sqrt{1-x}=\sqrt{x}\;\times \;(\text{binomial expansion of}\sqrt{1-x})$ and integrate term by term. Use this approach with the binomial approximation from the previous exercise to estimate $\pi .$
:::

:::exercise {fs-id1167023907486} type= 
PROBLEM:
Use the approximation $T\approx 2\pi \sqrt{\frac{L}{g}}(1+\frac{{k}^{2}}{4})$ to approximate the period of a pendulum having length $10$ meters and maximum angle ${\theta}_{\text{max}}=\frac{\pi}{6}$ where $k=\text{sin}(\frac{{\theta}_{\text{max}}}{2}).$ Compare this with the small angle estimate $T\approx 2\pi \sqrt{\frac{L}{g}}.$
SOLUTION:
$T\approx 2\pi \sqrt{\frac{10}{9.8}}(1+\frac{{\text{sin}}^{2}(\theta \text{/}12)}{4})\approx 6.453$ seconds. The small angle estimate is $T\approx 2\pi \sqrt{\frac{10}{9.8}\approx 6.347}.$ The relative error is around $2$ percent.
:::

:::exercise {fs-id1167023907705} type= 
PROBLEM:
Suppose that a pendulum is to have a period of $2$ seconds and a maximum angle of ${\theta}_{\text{max}}=\frac{\pi}{6}.$ Use $T\approx 2\pi \sqrt{\frac{L}{g}}(1+\frac{{k}^{2}}{4})$ to approximate the desired length of the pendulum. What length is predicted by the small angle estimate $T\approx 2\pi \sqrt{\frac{L}{g}}?$
:::

:::exercise {fs-id1167024045994} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{\pi \text{/}2}{\text{sin}}^{4}\theta d\theta}$ in the approximation $T=4\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{\pi \text{/}2}(1+\frac{1}{2}{k}^{2}{\text{sin}}^{2}\theta +\frac{3}{8}{k}^{4}{\text{sin}}^{4}\theta +\text{⋯})\;d\theta}$ to obtain an improved estimate for $T.$
SOLUTION:
${\displaystyle \int_{0}^{\pi \text{/}2}{\text{sin}}^{4}\theta d\theta}=\frac{3\pi}{16}.$ Hence $T\approx 2\pi \sqrt{\frac{L}{g}}(1+\frac{{k}^{2}}{4}+\frac{9}{256}{k}^{4}).$
:::

:::exercise {fs-id1167024046252} type= 
PROBLEM:
**[T]** An equivalent formula for the period of a pendulum with amplitude ${\theta}_{\text{max}}$ is $T({\theta}_{\text{max}})=2\sqrt{2}\sqrt{\frac{L}{g}}{\displaystyle \int_{0}^{{\theta}_{\text{max}}}\frac{d\theta}{\sqrt{\text{cos}\;\theta}-\text{cos}({\theta}_{\text{max}})}}$ where $L$ is the pendulum length and $g$ is the gravitational acceleration constant. When ${\theta}_{\text{max}}=\frac{\pi}{3}$ we get $\frac{1}{\sqrt{\text{cos}\;t-1\text{/}2}}\approx \sqrt{2}(1+\frac{{t}^{2}}{2}+\frac{{t}^{4}}{3}+\frac{181{t}^{6}}{720}).$ Integrate this approximation to estimate $T(\frac{\pi}{3})$ in terms of $L$ and $g.$ Assuming $g=9.806$ meters per second squared, find an approximate length $L$ such that $T(\frac{\pi}{3})=2$ seconds.
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* In the following exercises, justify your answer with a proof or a counterexample.

:::exercise {fs-id1167024045071} type= 
PROBLEM:
If the radius of convergence for a power series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ is $5,$ then the radius of convergence for the series ${\displaystyle \sum_{n=1}^{\infty} n{a}_{n}{x}^{n-1}}$ is also $5.$
SOLUTION:
True
:::

:::exercise {fs-id1167024045168} type= 
PROBLEM:
Power series can be used to show that the derivative of ${e}^{x}\;\text{is}\;{e}^{x}.$ (*Hint:* Recall that ${e}^{x}={\displaystyle \sum_{n=0}^{\infty} \frac{1}{n\text{!}}}{x}^{n}.)$
:::

:::exercise {fs-id1167024045260} type= 
PROBLEM:
For small values of $x,\text{sin}\;x\approx x.$
SOLUTION:
True
:::

:::exercise {fs-id1167024045297} type= 
PROBLEM:
The radius of convergence for the Maclaurin series of $f(x)={3}^{x}$ is $3.$
:::
In the following exercises, find the radius of convergence and the interval of convergence for the given series.

:::exercise {fs-id1167024045348} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {n}^{2}}{(x-1)}^{n}$
SOLUTION:
ROC: $1;$ IOC: $(0,2)$
:::

:::exercise {fs-id1167024045426} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{{n}^{n}}}$
:::

:::exercise {fs-id1167024045497} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{3n{x}^{n}}{{12}^{n}}}$
SOLUTION:
ROC: $12;$ IOC: $(−12,12)$
:::

:::exercise {fs-id1167024045573} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{2}^{n}}{{e}^{n}}}{(x-e)}^{n}$
:::
In the following exercises, find the power series representation for the given function. Determine the radius of convergence and the interval of convergence for that series.

:::exercise {fs-id1167023777456} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}}{x+3}$
SOLUTION:
$\sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{{3}^{n+1}}{x}^{n+2};$ ROC: $3;$ IOC: $(−3,3)$
:::

:::exercise {fs-id1167023777575} type= 
PROBLEM:
$f(x)=\frac{8x+2}{2{x}^{2}-3x+1}$
:::
In the following exercises, find the power series for the given function using term-by-term differentiation or integration.

:::exercise {fs-id1167023777690} type= 
PROBLEM:
$f(x)={\text{tan}}^{−1}(2x)$
SOLUTION:
integration: ${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{2n+1}}{(2x)}^{2n+1}$
:::

:::exercise {fs-id1167023777804} type= 
PROBLEM:
$f(x)=\frac{x}{{(2+{x}^{2})}^{2}}$
:::
In the following exercises, evaluate the Taylor series expansion of degree four for the given function at the specified point. What is the error in the approximation?

:::exercise {fs-id1167023777932} type= 
PROBLEM:
$f(x)={x}^{3}-2{x}^{2}+4,a=−3$
SOLUTION:
${p}_{4}(x)={(x+3)}^{3}-11{(x+3)}^{2}+39(x+3)-41;$ exact
:::

:::exercise {fs-id1167023778068} type= 
PROBLEM:
$f(x)={e}^{1\text{/}(4x)},a=4$
:::
In the following exercises, find the Maclaurin series for the given function.

:::exercise {fs-id1167023827605} type= 
PROBLEM:
$f(x)=\text{cos}(3x)$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{(3x)}^{2n}}{2n\text{!}}}$
:::

:::exercise {fs-id1167023827705} type= 
PROBLEM:
$f(x)=\text{ln}\;(x+1)$
:::
In the following exercises, find the Taylor series at the given value.

:::exercise {fs-id1167023827798} type= 
PROBLEM:
$f(x)=\text{sin}\;x,a=\frac{\pi}{2}$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{(2n)\text{!}}}{(x-\frac{\pi}{2})}^{2n}$
:::

:::exercise {fs-id1167023827916} type= 
PROBLEM:
$f(x)=\frac{3}{x},a=1$
:::
In the following exercises, find the Maclaurin series for the given function.

:::exercise {fs-id1167023828013} type= 
PROBLEM:
$f(x)={e}^{\text{−}{x}^{2}}-1$
SOLUTION:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(−1)}^{n}}{n\text{!}}}{x}^{2n}$
:::

:::exercise {fs-id1167023828104} type= 
PROBLEM:
$f(x)=\text{cos}\;x-x\;\text{sin}\;x$
:::
In the following exercises, find the Maclaurin series for $F(x)={\displaystyle \int_{0}^{x}f(t)}dt$ by integrating the Maclaurin series of $f(x)$ term by term.

:::exercise {fs-id1167023846017} type= 
PROBLEM:
$f(x)=\frac{\text{sin}\;x}{x}$
SOLUTION:
$F(x)={\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{(2n+1)(2n+1)\text{!}}}{x}^{2n+1}$
:::

:::exercise {fs-id1167023846148} type= 
PROBLEM:
$f(x)=1-{e}^{x}$
:::

:::exercise {fs-id1167023846232} type= 
PROBLEM:
Use power series to prove {index:Euler’s formula}: ${e}^{ix}=\text{cos}\;x+i\;\text{sin}\;x$
SOLUTION:
Answers may vary.
:::
The following exercises consider problems of {index:annuity payments}.

:::exercise {fs-id1167023846298} type= 
PROBLEM:
For annuities with a present value of $\text{\$}1$ million, calculate the annual payouts given over $25$ years assuming interest rates of $1\text{\%},5\text{\%},\;\text{and}\;10\text{\%}.$
:::

:::exercise {fs-id1167023846407} type= 
PROBLEM:
A lottery winner has an annuity that has a present value of $\text{\$}10$ million. What interest rate would they need to live on perpetual annual payments of $\text{\$}250,000?$
SOLUTION:
$2.5\text{\%}$
:::

:::exercise {fs-id1167023846449} type= 
PROBLEM:
Calculate the necessary present value of an annuity in order to support annual payouts of $\text{\$}15,000$ given over $25$ years assuming interest rates of $1\text{\%},5\text{\%},\;\text{and}\;10\text{\%}.$
:::

## Glossary
- {def} **binomial series**: the Maclaurin series for $f(x)={(1+x)}^{r};$ it is given by

${(1+x)}^{r}={\displaystyle \sum_{n=0}^{\infty} (\begin{array}{l}r \\ n\end{array}){x}^{n}}=1+rx+\frac{r(r-1)}{2\text{!}}{x}^{2}+\text{⋯}+\frac{r(r-1)\text{⋯}(r-n+1)}{n\text{!}}{x}^{n}+\text{⋯}$ for $|x|<1$
- {def} **nonelementary integral**: an integral for which the antiderivative of the integrand cannot be expressed as an elementary function

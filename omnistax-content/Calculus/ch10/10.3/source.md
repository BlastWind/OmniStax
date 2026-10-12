# Taylor and Maclaurin Series

## Learning Objectives {section:learning-objectives}
- Describe the procedure for finding a Taylor polynomial of a given order for a function.
- Explain the meaning and significance of Taylor’s theorem with remainder.
- Estimate the remainder for a Taylor series approximation of a given function.

In the previous two sections we discussed how to find power series representations for certain types of functions––specifically, functions related to geometric series. Here we discuss power series representations for other types of functions. In particular, we address the following questions: Which functions can be represented by power series and how do we find such representations? If we can find a power series representation for a particular function $f$ and the series converges on some interval, how do we prove that the series actually converges to $f?$

## Overview of Taylor/Maclaurin Series
Consider a function $f$ that has a power series representation at $x=a.$ Then the series has the form

$$ {\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}={c}_{0}+{c}_{1}(x-a)+{c}_{2}{(x-a)}^{2}+\text{⋯}. $$  {eq:fs-id1167025118355}

What should the coefficients be? For now, we ignore issues of convergence, but instead focus on what the series should be, if one exists. We return to discuss convergence later in this section. If the series [ref:fs-id1167025118355] is a representation for $f$ at $x=a,$ we certainly want the series to equal $f(a)$ at $x=a.$ Evaluating the series at $x=a,$ we see that

$\begin{array}{rl}{\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}} & ={c}_{0}+{c}_{1}(a-a)+{c}_{2}{(a-a)}^{2}+\text{⋯} \\ & ={c}_{0}.\end{array}$  {eq:fs-id1167024866801}

Thus, the series equals $f(a)$ if the coefficient ${c}_{0}=f(a).$ In addition, we would like the first derivative of the power series to equal ${f}^{'}(a)$ at $x=a.$ Differentiating [ref:fs-id1167025118355] term-by-term, we see that

$\frac{d}{dx}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}})={c}_{1}+2{c}_{2}(x-a)+3{c}_{3}{(x-a)}^{2}+\text{⋯}.$  {eq:fs-id1167024875132}

Therefore, at $x=a,$ the derivative is

$\begin{array}{rl} \\ \\ \frac{d}{dx}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}) & ={c}_{1}+2{c}_{2}(a-a)+3{c}_{3}{(a-a)}^{2}+\text{⋯} \\ & ={c}_{1}.\end{array}$  {eq:fs-id1167024999505}

Therefore, the derivative of the series equals ${f}^{'}(a)$ if the coefficient ${c}_{1}={f}^{'}(a).$ Continuing in this way, we look for coefficients *c<sub>n</sub>* such that all the derivatives of the power series [ref:fs-id1167025118355] will agree with all the corresponding derivatives of $f$ at $x=a.$ The second and third derivatives of [ref:fs-id1167025118355] are given by

$\frac{{d}^{2}}{d{x}^{2}}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}})=2{c}_{2}+3\cdot 2{c}_{3}(x-a)+4\cdot 3{c}_{4}{(x-a)}^{2}+\text{⋯}$  {eq:fs-id1167024955379}

and

$\frac{{d}^{3}}{d{x}^{3}}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}})=3\cdot 2{c}_{3}+4\cdot 3\cdot 2{c}_{4}(x-a)+5\cdot 4\cdot 3{c}_{5}{(x-a)}^{2}+\text{⋯}.$  {eq:fs-id1167025089047}

Therefore, at $x=a,$ the second and third derivatives

$\begin{array}{rl}\frac{{d}^{2}}{d{x}^{2}}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}) & =2{c}_{2}+3\cdot 2{c}_{3}(a-a)+4\cdot 3{c}_{4}{(a-a)}^{2}+\text{⋯} \\ & =2{c}_{2}\end{array}$  {eq:fs-id1167025091472}

and

$\begin{array}{rl}\frac{{d}^{3}}{d{x}^{3}}({\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}) & =3\cdot 2{c}_{3}+4\cdot 3\cdot 2{c}_{4}(a-a)+5\cdot 4\cdot 3{c}_{5}{(a-a)}^{2}+\text{⋯} \\ & =3\cdot 2{c}_{3}\end{array}$  {eq:fs-id1167025099708}

equal ${f}^{''}(a)$ and $f''' (a),$ respectively, if ${c}_{2}=\frac{{f}^{''}(a)}{2}$ and ${c}_{3}=\frac{f''' (a)}{3\cdot 2}.$ More generally, we see that if $f$ has a power series representation at $x=a,$ then the coefficients should be given by ${c}_{n}=\frac{{f}^{(n)}(a)}{n\text{!}}.$ That is, the series should be

${\displaystyle \sum_{n=0}^{\infty} \frac{{f}^{(n)}(a)}{n\text{!}}}{(x-a)}^{n}=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\frac{f''' (a)}{3\text{!}}{(x-a)}^{3}+\text{⋯}.$  {eq:fs-id1167024875578}

This power series for $f$ is known as the Taylor series for $f$ at $a.$ If $a=0,$ then this series is known as the Maclaurin series for $f.$

:::note [definition] Definition
If $f$ has derivatives of all orders at $x=a,$ then the {term:Taylor series} for the function $f$ at $a$ is

$$ {\displaystyle \sum_{n=0}^{\infty} \frac{{f}^{(n)}(a)}{n\text{!}}}{(x-a)}^{n}=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\text{⋯}+\frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}+\text{⋯}. $$  {eq:fs-id1167025228678}

The Taylor series for $f$ at 0 is known as the {term:Maclaurin series} for $f.$
:::
Later in this section, we will show examples of finding Taylor series and discuss conditions under which the Taylor series for a function will converge to that function. Here, we state an important result. Recall from [ref:fs-id1167023777376](module:m53762) that power series representations are unique. Therefore, if a function $f$ has a power series at $a,$ then it must be the Taylor series for $f$ at $a.$

:::note [theorem] Uniqueness of Taylor Series
If a function $f$ has a power series at *a* that converges to $f$ on some open interval containing *a*, then that power series is the Taylor series for $f$ at *a*.
:::
The proof follows directly from [ref:fs-id1167023777376](module:m53762).
To determine if a Taylor series converges, we need to look at its sequence of partial sums. These partial sums are finite polynomials, known as {term:Taylor polynomials}.

:::note [media-2] 
Visit the MacTutor History of Mathematics archive to read brief biographies of [Brook Taylor](http://www.openstax.org/l/20_BTaylor)  and [Colin Maclaurin](http://www.openstax.org/l/20_CMaclaurin)  and how they developed the concepts named after them.
:::

## Taylor Polynomials
The *n*th partial sum of the Taylor series for a function $f$ at $a$ is known as the *n*th Taylor polynomial. For example, the 0th, 1st, 2nd, and 3rd partial sums of the Taylor series are given by

$\begin{array}{l}{p}_{0}(x)=f(a), \\ {p}_{1}(x)=f(a)+{f}^{'}(a)(x-a), \\ {p}_{2}(x)=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}, \\ {p}_{3}(x)=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\frac{f''' (a)}{3\text{!}}{(x-a)}^{3},\end{array}$  {eq:fs-id1167024875102}

respectively. These partial sums are known as the 0th, 1st, 2nd, and 3rd Taylor polynomials of $f$ at $a,$ respectively. If $a=0,$ then these polynomials are known as {term:Maclaurin polynomials} for $f.$ We now provide a formal definition of Taylor and Maclaurin polynomials for a function $f.$

:::note [definition] Definition
If $f$ has *n* derivatives at $x=a,$ then the *n*th Taylor polynomial for $f$ at $a$ is

${p}_{n}(x)=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\frac{f''' (a)}{3\text{!}}{(x-a)}^{3}+\text{⋯}+\frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}.$  {eq:fs-id1167025091916}

The *n*th Taylor polynomial for $f$ at 0 is known as the *n*th Maclaurin polynomial for $f.$
:::
We now show how to use this definition to find several Taylor polynomials for $f(x)=\text{ln}\;x$ at $x=1.$

:::example {ex:fs-id1167025228652} Finding Taylor Polynomials

:::exercise {fs-id1167025228654} type= 
PROBLEM:
Find the Taylor polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}$ for $f(x)=\text{ln}\;x$ at $x=1.$ Use a graphing utility to compare the graph of $f$ with the graphs of ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}.$
SOLUTION:
To find these Taylor polynomials, we need to evaluate $f$ and its first three derivatives at $x=1.$

$\begin{array}{rllllrll}f(x) & = & \text{ln}\;x & & & f(1) & = & 0 \\ {f}^{'}(x) & = & \frac{1}{x} & & & {f}^{'}(1) & = & 1 \\ {f}^{''}(x) & = & -\frac{1}{{x}^{2}} & & & {f}^{''}(1) & = & −1 \\ f''' (x) & = & \frac{2}{{x}^{3}} & & & f''' (1) & = & 2\end{array}$  {eq:fs-id1167025154330}

Therefore,

$\begin{array}{rll}{p}_{0}(x) & = & f(1)=0, \\ {p}_{1}(x) & = & f(1)+{f}^{'}(1)(x-1)=x-1, \\ {p}_{2}(x) & = & f(1)+{f}^{'}(1)(x-1)+\frac{{f}^{''}(1)}{2}{(x-1)}^{2}=(x-1)-\frac{1}{2}{(x-1)}^{2}, \\ {p}_{3}(x) & = & f(1)+{f}^{'}(1)(x-1)+\frac{{f}^{''}(1)}{2}{(x-1)}^{2}+\frac{f''' (1)}{3\text{!}}{(x-1)}^{3} \\ & = & (x-1)-\frac{1}{2}{(x-1)}^{2}+\frac{1}{3}{(x-1)}^{3}.\end{array}$  {eq:fs-id1167025040305}

The graphs of $y=f(x)$ and the first three Taylor polynomials are shown in [ref:CNX_Calc_Figure_10_03_001].

> FIGURE {fig:CNX_Calc_Figure_10_03_001} src=../../media/CNX_Calc_Figure_10_03_001.jpg
> alt: This graph has four curves. The first is the function f(x)=ln(x). The second function is psub1(x)=x-1. The third is psub2(x)=(x-1)-1/2(x-1)^2. The fourth is psub3(x)=(x-1)-1/2(x-1)^2 +1/3(x-1)^3. The curves are very close around x = 1.
> caption: The function $y=\text{ln}\;x$ and the Taylor polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}$ at $x=1$ are plotted on this graph.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167025019199} type= 
PROBLEM:
Find the Taylor polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}$ for $f(x)=\frac{1}{{x}^{2}}$ at $x=1.$
SOLUTION:
${p}_{0}(x)=1;\;{p}_{1}(x)=1-2(x-1);\;{p}_{2}(x)=1-2(x-1)+3{(x-1)}^{2};\;{p}_{3}(x)=1-2(x-1)+3{(x-1)}^{2}-4{(x-1)}^{3}$
COMMENTARY: Hint
Find the first three derivatives of $f$ and evaluate them at $x=1.$
:::
:::
We now show how to find Maclaurin polynomials for *e<sup>x</sup>*, $\text{sin}\;x,$ and $\text{cos}\;x.$ As stated above, Maclaurin polynomials are Taylor polynomials centered at zero.

:::example {ex:fs-id1167025118487} Finding Maclaurin Polynomials

:::exercise {fs-id1167025118489} type= 
PROBLEM:
For each of the following functions, find formulas for the Maclaurin polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}.$ Find a formula for the *n*th Maclaurin polynomial and write it using sigma notation. Use a graphing utilty to compare the graphs of ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}$ with $f.$
a. $f(x)={e}^{x}$
b. $f(x)=\text{sin}\;x$
c. $f(x)=\text{cos}\;x$
SOLUTION:
a. Since $f(x)={e}^{x},$ we know that $f(x)={f}^{'}(x)={f}^{''}(x)=\text{⋯}={f}^{(n)}(x)={e}^{x}$ for all positive integers *n*. Therefore,

$f(0)={f}^{'}(0)={f}^{''}(0)=\text{⋯}={f}^{(n)}(0)=1$  {eq:fs-id1167025069158}

for all positive integers *n*. Therefore, we have

$\begin{array}{rll}{p}_{0}(x) & = & f(0)=1, \\ {p}_{1}(x) & = & f(0)+{f}^{'}(0)x=1+x, \\ {p}_{2}(x) & = & f(0)+{f}^{'}(0)x+\frac{{f}^{''}(0)}{2\text{!}}{x}^{2}=1+x+\frac{1}{2}{x}^{2}, \\ {p}_{3}(x) & = & f(0)+{f}^{'}(0)x+\frac{{f}^{''}(0)}{2}{x}^{2}+\frac{f''' (0)}{3\text{!}}{x}^{3} \\ & = & 1+x+\frac{1}{2}{x}^{2}+\frac{1}{3\text{!}}{x}^{3}, \\ {p}_{n}(x) & = & f(0)+{f}^{'}(0)x+\frac{{f}^{''}(0)}{2}{x}^{2}+\frac{f''' (0)}{3\text{!}}{x}^{3}+\text{⋯}+\frac{{f}^{(n)}(0)}{n\text{!}}{x}^{n} \\ & = & 1+x+\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{3}}{3\text{!}}+\text{⋯}+\frac{{x}^{n}}{n\text{!}} \\ & = & {\displaystyle \sum_{k=0}^{n} \frac{{x}^{k}}{k\text{!}}}.\end{array}$  {eq:fs-id1167024875791}

The function and the first three Maclaurin polynomials are shown in [ref:CNX_Calc_Figure_10_03_002].

> FIGURE {fig:CNX_Calc_Figure_10_03_002} src=../../media/CNX_Calc_Figure_10_03_002.jpg
> alt: This graph has four curves. The first is the function f(x)=e^x. The second function is psub0(x)=1. The third is psub1(x) which is an increasing line passing through y=1. The fourth function is psub3(x) which is a curve passing through y=1. The curves are very close around y= 1.
> caption: The graph shows the function $y={e}^{x}$ and the Maclaurin polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}.$

b. For $f(x)=\text{sin}\;x,$ the values of the function and its first four derivatives at $x=0$ are given as follows:

$\begin{array}{rllllrll}f(x) & = & \text{sin}\;x & & & f(0) & = & 0 \\ {f}^{'}(x) & = & \text{cos}\;x & & & {f}^{'}(0) & = & 1 \\ {f}^{''}(x) & = & \text{−}\text{sin}\;x & & & {f}^{''}(0) & = & 0 \\ f''' (x) & = & \text{−}\text{cos}\;x & & & f''' (0) & = & −1 \\ {f}^{(4)}(x) & = & \text{sin}\;x & & & {f}^{(4)}(0) & = & 0.\end{array}$  {eq:fs-id1167024874943}

Since the fourth derivative is $\text{sin}\;x,$ the pattern repeats. That is, ${f}^{(2m)}(0)=0$ and ${f}^{(2m+1)}(0)={(−1)}^{m}$ for $m\ge 0.$ Thus, we have

$\begin{array}{l}{p}_{0}(x)=0, \\ {p}_{1}(x)=0+x=x, \\ {p}_{2}(x)=0+x+0=x, \\ {p}_{3}(x)=0+x+0-\frac{1}{3\text{!}}{x}^{3}=x-\frac{{x}^{3}}{3\text{!}}, \\ {p}_{4}(x)=0+x+0-\frac{1}{3\text{!}}{x}^{3}+0=x-\frac{{x}^{3}}{3\text{!}}, \\ {p}_{5}(x)=0+x+0-\frac{1}{3\text{!}}{x}^{3}+0+\frac{1}{5\text{!}}{x}^{5}=x-\frac{{x}^{3}}{3\text{!}}+\frac{{x}^{5}}{5\text{!}},\end{array}$  {eq:fs-id1167025229347}

and for $m\ge 0,$

$\begin{array}{rl}{p}_{2m+1}(x) & ={p}_{2m+2}(x) \\ & =x-\frac{{x}^{3}}{3\text{!}}+\frac{{x}^{5}}{5\text{!}}-\text{⋯}+{(−1)}^{m}\frac{{x}^{2m+1}}{(2m+1)\text{!}} \\ & ={\displaystyle \sum_{k=0}^{m} {(−1)}^{k}\frac{{x}^{2k+1}}{(2k+1)\text{!}}}.\end{array}$  {eq:fs-id1167025241412}

Graphs of the function and its Maclaurin polynomials are shown in [ref:CNX_Calc_Figure_09_03_003].

> FIGURE {fig:CNX_Calc_Figure_09_03_003} src=../../media/CNX_Calc_Figure_09_03_003.jpg
> alt: This graph has four curves. The first is the function f(x)=sin(x). The second is psub1(x). The second is psub3(x). The fourth is psub5(x). All curves intersect at origin, with varying accuracy to the sine wave.
> caption: The graph shows the function $y=\text{sin}\;x$ and the Maclaurin polynomials ${p}_{1},{p}_{3}$ and ${p}_{5}.$

c. For $f(x)=\text{cos}\;x,$ the values of the function and its first four derivatives at $x=0$ are given as follows:

$\begin{array}{rllllrll}f(x) & = & \text{cos}\;x & & & f(0) & = & 1 \\ {f}^{'}(x) & = & \text{−}\text{sin}\;x & & & {f}^{'}(0) & = & 0 \\ {f}^{''}(x) & = & \text{−}\text{cos}\;x & & & {f}^{''}(0) & = & −1 \\ f''' (x) & = & \text{sin}\;x & & & f''' (0) & = & 0 \\ {f}^{(4)}(x) & = & \text{cos}\;x & & & {f}^{(4)}(0) & = & 1.\end{array}$  {eq:fs-id1167025069824}

Since the fourth derivative is $\text{cos}\;x,$ the pattern repeats. In other words, ${f}^{(2m)}(0)={(−1)}^{m}$ and ${f}^{(2m+1)}=0$ for $m\ge 0.$ Therefore,

$\begin{array}{l}{p}_{0}(x)=1, \\ {p}_{1}(x)=1+0=1, \\ {p}_{2}(x)=1+0-\frac{1}{2\text{!}}{x}^{2}=1-\frac{{x}^{2}}{2\text{!}}, \\ {p}_{3}(x)=1+0-\frac{1}{2\text{!}}{x}^{2}+0=1-\frac{{x}^{2}}{2\text{!}}, \\ {p}_{4}(x)=1+0-\frac{1}{2\text{!}}{x}^{2}+0+\frac{1}{4\text{!}}{x}^{4}=1-\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{4}}{4\text{!}}, \\ {p}_{5}(x)=1+0-\frac{1}{2\text{!}}{x}^{2}+0+\frac{1}{4\text{!}}{x}^{4}+0=1-\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{4}}{4\text{!}},\end{array}$  {eq:fs-id1167025087805}

and for $n\ge 0,$

$\begin{array}{rl}{p}_{2m}(x) & ={p}_{2m+1}(x) \\ & =1-\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{4}}{4\text{!}}-\text{⋯}+{(−1)}^{m}\frac{{x}^{2m}}{(2m)\text{!}} \\ & ={\displaystyle \sum_{k=0}^{m} {(−1)}^{k}}\frac{{x}^{2k}}{(2k)\text{!}}.\end{array}$  {eq:fs-id1167025230186}

Graphs of the function and the Maclaurin polynomials appear in [ref:CNX_Calc_Figure_10_03_004].

> FIGURE {fig:CNX_Calc_Figure_10_03_004} src=../../media/CNX_Calc_Figure_10_03_004.jpg
> alt: This graph has four curves. The first is the function f(x)=cos(x). The second function is psub0(x). The third is psub2(x). The fourth function is psub4(x). The curves are very close around y=1
> caption: The function $y=\text{cos}\;x$ and the Maclaurin polynomials ${p}_{0},{p}_{2}$ and ${p}_{4}$ are plotted on this graph.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167025235548} type= 
PROBLEM:
Find formulas for the Maclaurin polynomials ${p}_{0},{p}_{1},{p}_{2}$ and ${p}_{3}$ for $f(x)=\frac{1}{1+x}.$ Find a formula for the *n*th Maclaurin polynomial. Write your answer using sigma notation.
SOLUTION:
${p}_{0}(x)=1;\;{p}_{1}(x)=1-x;\;{p}_{2}(x)=1-x+{x}^{2};\;{p}_{3}(x)=1-x+{x}^{2}-{x}^{3};\;{p}_{n}(x)=1-x+{x}^{2}-{x}^{3}+\text{⋯}+{(−1)}^{n}{x}^{n}=\sum_{k=0}^{n} {(−1)}^{k}{x}^{k}$
COMMENTARY: Hint
Evaluate the first four derivatives of $f$ and look for a pattern.
:::
:::

## Taylor’s Theorem with Remainder
Recall that the *n*th Taylor polynomial for a function $f$ at *a* is the *n*th partial sum of the Taylor series for $f$ at *a*. Therefore, to determine if the Taylor series converges, we need to determine whether the sequence of Taylor polynomials $\{{p}_{n}\}$ converges. However, not only do we want to know if the sequence of Taylor polynomials converges, we want to know if it converges to $f.$ To answer this question, we define the remainder ${R}_{n}(x)$ as

${R}_{n}(x)=f(x)-{p}_{n}(x).$  {eq:fs-id1167025162616}

For the sequence of Taylor polynomials to converge to $f,$ we need the remainder *R<sub>n</sub>* to converge to zero. To determine if *R<sub>n</sub>* converges to zero, we introduce {term:Taylor’s theorem with remainder}. Not only is this theorem useful in proving that a Taylor series converges to its related function, but it will also allow us to quantify how well the *n*th Taylor polynomial approximates the function.
Here we look for a bound on $|{R}_{n}|.$ Consider the simplest case: $n=0.$ Let *p*<sub>0</sub> be the 0th Taylor polynomial at *a* for a function $f.$ The remainder *R*<sub>0</sub> satisfies

$\begin{array}{rl}{R}_{0}(x) & =f(x)-{p}_{0}(x) \\ & =f(x)-f(a).\end{array}$  {eq:fs-id1167025168217}

If $f$ is differentiable on an interval *I* containing *a* and *x*, then by the Mean Value Theorem there exists a real number *c* between *a* and *x* such that $f(x)-f(a)={f}^{'}(c)(x-a).$ Therefore,

${R}_{0}(x)={f}^{'}(c)(x-a).$  {eq:fs-id1167024997799}

Using the Mean Value Theorem in a similar argument, we can show that if $f$ is *n* times differentiable on an interval *I* containing *a* and *x*, then the *n*th remainder *R<sub>n</sub>* satisfies

${R}_{n}(x)=\frac{{f}^{(n+1)}(c)}{(n+1)\text{!}}{(x-a)}^{n+1}$  {eq:fs-id1167024875234}

for some real number *c* between *a* and *x*. It is important to note that the value *c* in the numerator above is not the center *a*, but rather an unknown value *c* between *a* and *x*. This formula allows us to get a bound on the remainder *R<sub>n</sub>*. If we happen to know that $|{f}^{(n+1)}(x)|$ is bounded by some real number *M* on this interval *I*, then

$|{R}_{n}(x)|\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}$  {eq:fs-id1167025236141}

for all *x* in the interval *I*.
We now state Taylor’s theorem, which provides the formal relationship between a function $f$ and its *n*th degree Taylor polynomial ${p}_{n}(x).$ This theorem allows us to bound the error when using a Taylor polynomial to approximate a function value, and will be important in proving that a Taylor series for $f$ converges to $f.$

:::note [theorem] Taylor’s Theorem with Remainder
Let $f$ be a function that can be differentiated $n+1$ times on an interval *I* containing the real number *a*. Let *p<sub>n</sub>* be the *n*th Taylor polynomial of $f$ at *a* and let

${R}_{n}(x)=f(x)-{p}_{n}(x)$  {eq:fs-id1167025239373}

be the *n*th remainder. Then for each *x* in the interval *I*, there exists a real number *c* between *a* and *x* such that

${R}_{n}(x)=\frac{{f}^{(n+1)}(c)}{(n+1)\text{!}}{(x-a)}^{n+1}.$  {eq:fs-id1167025101301}

If there exists a real number *M* such that $|{f}^{(n+1)}(x)|\le M$ for all $x\in I,$ then

$|{R}_{n}(x)|\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}$  {eq:fs-id1167025070502}

for all *x* in *I*.
:::

### Proof
Fix a point $x\in I$ and introduce the function *g* such that

$g(t)=f(x)-f(t)-{f}^{'}(t)(x-t)-\frac{{f}^{''}(t)}{2\text{!}}{(x-t)}^{2}-\text{⋯}-\frac{{f}^{(n)}(t)}{n\text{!}}{(x-t)}^{n}-{R}_{n}(x)\frac{{(x-t)}^{n+1}}{{(x-a)}^{n+1}}.$  {eq:fs-id1167025070610}

We claim that *g* satisfies the criteria of Rolle’s theorem. Since *g* is a polynomial function (in *t*), it is a differentiable function. Also, *g* is zero at $t=a$ and $t=x$ because

$\begin{array}{rll}g(a) & = & f(x)-f(a)-{f}^{'}(a)(x-a)-\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\text{⋯}+\frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}-{R}_{n}(x) \\ & = & f(x)-{p}_{n}(x)-{R}_{n}(x) \\ & = & 0, \\ g(x) & = & f(x)-f(x)-0-\text{⋯}-0 \\ & = & 0.\end{array}$  {eq:fs-id1167025234167}

Therefore, *g* satisfies Rolle’s theorem, and consequently, there exists *c* between *a* and *x* such that ${g}^{'}(c)=0.$ We now calculate ${g}^{'}.$ Using the product rule, we note that

$\frac{d}{dt}[\frac{{f}^{(n)}(t)}{n\text{!}}{(x-t)}^{n}]=\frac{\text{−}{f}^{(n)}(t)}{(n-1)\text{!}}{(x-t)}^{n-1}+\frac{{f}^{(n+1)}(t)}{n\text{!}}{(x-t)}^{n}.$  {eq:fs-id1167025232449}

Consequently,

$\begin{array}{ll}{g}^{'}(t) & =\text{−}{f}^{'}(t)+[{f}^{'}(t)-{f}^{''}(t)(x-t)]+[{f}^{''}(t)(x-t)-\frac{f''' (t)}{2\text{!}}{(x-t)}^{2}]+\text{⋯} \\ & \hspace{1.4em}+[\frac{{f}^{(n)}(t)}{(n-1)\text{!}}{(x-t)}^{n-1}-\frac{{f}^{(n+1)}(t)}{n\text{!}}{(x-t)}^{n}]+(n+1){R}_{n}(x)\frac{{(x-t)}^{n}}{{(x-a)}^{n+1}}.\end{array}$  {eq:fs-id1167025113179}

Notice that there is a telescoping effect. Therefore,

${g}^{'}(t)=-\frac{{f}^{(n+1)}(t)}{n\text{!}}{(x-t)}^{n}+(n+1){R}_{n}(x)\frac{{(x-t)}^{n}}{{(x-a)}^{n+1}}.$  {eq:fs-id1167025154285}

By Rolle’s theorem, we conclude that there exists a number *c* between *a* and *x* such that ${g}^{'}(c)=0.$ Since

${g}^{'}(c)=-\frac{{f}^{(n+1)}(c)}{n\text{!}}{(x-c)}^{n}+(n+1){R}_{n}(x)\frac{{(x-c)}^{n}}{{(x-a)}^{n+1}}$  {eq:fs-id1167025228092}

we conclude that

$-\frac{{f}^{(n+1)}(c)}{n\text{!}}{(x-c)}^{n}+(n+1){R}_{n}(x)\frac{{(x-c)}^{n}}{{(x-a)}^{n+1}}=0.$  {eq:fs-id1167025227344}

Adding the first term on the left-hand side to both sides of the equation and dividing both sides of the equation by $\frac{(n+1){(x-c)}^{n}}{{(x-a)}^{n+1}},$ we conclude that

${R}_{n}(x)=\frac{{f}^{(n+1)}(c)}{(n+1)\text{!}}{(x-a)}^{n+1}$  {eq:fs-id1167025240066}

as desired. From this fact, it follows that if there exists *M* such that $|{f}^{(n+1)}(x)|\le M$ for all *x* in *I*, then

$|{R}_{n}(x)|\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}.$  {eq:fs-id1167025234936}

□
Not only does Taylor’s theorem allow us to prove that a Taylor series converges to a function, but it also allows us to estimate the accuracy of Taylor polynomials in approximating function values. We begin by looking at linear and quadratic approximations of $f(x)=\sqrt[3]{x}$ at $x=8$ and determine how accurate these approximations are at estimating $\sqrt[3]{11}.$

:::example {ex:fs-id1167024999614} Using Linear and Quadratic Approximations to Estimate Function Values

:::exercise {fs-id1167024999616} type= 
PROBLEM:
Consider the function $f(x)=\sqrt[3]{x}.$
a. Find the first and second Taylor polynomials for $f$ at $x=8.$ Use a graphing utility to compare these polynomials with $f$ near $x=8.$
b. Use these two polynomials to estimate $\sqrt[3]{11}.$
c. Use Taylor’s theorem to bound the error.
SOLUTION:
a. For $f(x)=\sqrt[3]{x},$ the values of the function and its first two derivatives at $x=8$ are as follows:

$\begin{array}{rllllrll}f(x) & = & \sqrt[3]{x} & & & f(8) & = & 2 \\ {f}^{'}(x) & = & \frac{1}{3{x}^{2\text{/}3}} & & & {f}^{'}(8) & = & \frac{1}{12} \\ {f}^{''}(x) & = & \frac{−2}{9{x}^{5\text{/}3}} & & & {f}^{''}(8) & = & -\frac{1}{144}.\end{array}$  {eq:fs-id1167024999755}

Thus, the first and second Taylor polynomials at $x=8$ are given by

$\begin{array}{rll}{p}_{1}(x) & = & f(8)+{f}^{'}(8)(x-8) \\ & = & 2+\frac{1}{12}(x-8) \\ {p}_{2}(x) & = & f(8)+{f}^{'}(8)(x-8)+\frac{{f}^{''}(8)}{2\text{!}}{(x-8)}^{2} \\ & = & 2+\frac{1}{12}(x-8)-\frac{1}{288}{(x-8)}^{2}.\end{array}$  {eq:fs-id1167025154132}

The function and the Taylor polynomials are shown in [ref:CNX_Calc_Figure_10_03_005].

> FIGURE {fig:CNX_Calc_Figure_10_03_005} src=../../media/CNX_Calc_Figure_10_03_005.jpg
> alt: This graph has four curves. The first is the function f(x)=cube root of x. The second function is psub1(x). The third is psub2(x). The curves are very close around x=8.
> caption: The graphs of $f(x)=\sqrt[3]{x}$ and the linear and quadratic approximations ${p}_{1}(x)$ and ${p}_{2}(x).$

b. Using the first Taylor polynomial at $x=8,$ we can estimate

$\sqrt[3]{11}\approx {p}_{1}(11)=2+\frac{1}{12}(11-8)=2.25.$  {eq:fs-id1167025149114}

Using the second Taylor polynomial at $x=8,$ we obtain

$\sqrt[3]{11}\approx {p}_{2}(11)=2+\frac{1}{12}(11-8)-\frac{1}{288}{(11-8)}^{2}=2.21875.$  {eq:fs-id1167025035671}

c. By [ref:fs-id1167025239317], there exists a *c* in the interval $(8,11)$ such that the remainder when approximating $\sqrt[3]{11}$ by the first Taylor polynomial satisfies

${R}_{1}(11)=\frac{{f}^{''}(c)}{2\text{!}}{(11-8)}^{2}.$  {eq:fs-id1167025035798}

We do not know the exact value of *c*, so we find an upper bound on ${R}_{1}(11)$ by determining the maximum value of ${f}^{''}$ on the interval $(8,11).$ Since ${f}^{''}(x)=-\frac{2}{9{x}^{5\text{/}3}},$ the largest value for $|{f}^{''}(x)|$ on that interval occurs at $x=8.$ Using the fact that ${f}^{''}(8)=-\frac{1}{144},$ we obtain

$|{R}_{1}(11)|\le \frac{1}{144\cdot 2\text{!}}{(11-8)}^{2}=0.03125.$  {eq:fs-id1167025234774}

Similarly, to estimate ${R}_{2}(11),$ we use the fact that

${R}_{2}(11)=\frac{f''' (c)}{3\text{!}}{(11-8)}^{3}.$  {eq:fs-id1167025149246}

Since $f''' (x)=\frac{10}{27{x}^{8\text{/}3}},$ the maximum value of $f'''$ on the interval $(8,11)$ is $f''' (8)\approx 0.0014468.$ Therefore, we have

$|{R}_{2}(11)|\le \frac{0.0011468}{3\text{!}}{(11-8)}^{3}\approx 0.0065104.$  {eq:fs-id1167025149396}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167024969439} type= 
PROBLEM:
Find the first and second Taylor polynomials for $f(x)=\sqrt{x}$ at $x=4.$ Use these polynomials to estimate $\sqrt{6}.$ Use Taylor’s theorem to bound the error.
SOLUTION:
${p}_{1}(x)=2+\frac{1}{4}(x-4);{p}_{2}(x)=2+\frac{1}{4}(x-4)-\frac{1}{64}{(x-4)}^{2};\;{p}_{1}(6)=2.5;{p}_{2}(6)=2.4375;$
$|{R}_{1}(6)|\le 0.0625;|{R}_{2}(6)|\le 0.015625$
COMMENTARY: Hint
Evaluate $f(4),{f}^{'}(4),$ and ${f}^{''}(4).$
:::
:::

:::example {ex:fs-id1167025098904} Approximating sin *x* Using Maclaurin Polynomials

:::exercise {fs-id1167025098906} type= 
PROBLEM:
From [ref:fs-id1167025118487]b., the Maclaurin polynomials for $\text{sin}\;x$ are given by

$\begin{array}{rl}{p}_{2m+1}(x) & ={p}_{2m+2}(x) \\ & =x-\frac{{x}^{3}}{3\text{!}}+\frac{{x}^{5}}{5\text{!}}-\frac{{x}^{7}}{7\text{!}}+\text{⋯}+{(−1)}^{m}\frac{{x}^{2m+1}}{(2m+1)\text{!}}\end{array}$  {eq:fs-id1167025098942}

for $m=0,1,2,\text{…}.$
a. Use the fifth Maclaurin polynomial for $\text{sin}\;x$ to approximate $\text{sin}(\frac{\pi}{18})$ and bound the error.
b. For what values of *x* does the fifth Maclaurin polynomial approximate $\text{sin}\;x$ to within 0.0001?
SOLUTION:
a. The fifth Maclaurin polynomial is

${p}_{5}(x)=x-\frac{{x}^{3}}{3\text{!}}+\frac{{x}^{5}}{5\text{!}}.$  {eq:fs-id1167025089141}

Using this polynomial, we can estimate as follows:

$\begin{array}{rl}\text{sin}(\frac{\pi}{18}) & \approx {p}_{5}(\frac{\pi}{18}) \\ & =\frac{\pi}{18}-\frac{1}{3\text{!}}{(\frac{\pi}{18})}^{3}+\frac{1}{5\text{!}}{(\frac{\pi}{18})}^{5} \\ & \approx 0.173648.\end{array}$  {eq:fs-id1167025089200}

To estimate the error, use the fact that the sixth Maclaurin polynomial is ${p}_{6}(x)={p}_{5}(x)$ and calculate a bound on ${R}_{6}(\frac{\pi}{18}).$ By [ref:fs-id1167025088556], the remainder is

${R}_{6}(\frac{\pi}{18})=\frac{{f}^{(7)}(c)}{7\text{!}}{(\frac{\pi}{18})}^{7}$  {eq:fs-id1167024967486}

for some *c* between 0 and $\frac{\pi}{18}.$ Using the fact that $|{f}^{(7)}(x)|\le 1$ for all *x*, we find that the magnitude of the error is at most

$\frac{1}{7\text{!}}\cdot {(\frac{\pi}{18})}^{7}\le 9.8\;\times \;{10}^{−10}.$  {eq:fs-id1167024967616}

b. We need to find the values of *x* such that

$\frac{1}{7\text{!}}{|x|}^{7}\le 0.0001.$  {eq:fs-id1167025131308}

Solving this inequality for *x*, we have that the fifth Maclaurin polynomial gives an estimate to within 0.0001 as long as $|x|<0.907.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167025131374} type= 
PROBLEM:
Use the fourth Maclaurin polynomial for $\text{cos}\;x$ to approximate $\text{cos}(\frac{\pi}{12}).$
SOLUTION:
0.96593
COMMENTARY: Hint
The fourth Maclaurin polynomial is ${p}_{4}(x)=1-\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{4}}{4\text{!}}.$
:::
:::
Now that we are able to bound the remainder ${R}_{n}(x),$ we can use this bound to prove that a Taylor series for $f$ at *a* converges to $f.$

## Representing Functions with Taylor and Maclaurin Series
We now discuss issues of convergence for Taylor series. We begin by showing how to find a Taylor series for a function, and how to find its interval of convergence.

:::example {ex:fs-id1167025009066} Finding a Taylor Series

:::exercise {fs-id1167025009068} type= 
PROBLEM:
Find the Taylor series for $f(x)=\frac{1}{x}$ at $x=1.$ Determine the interval of convergence.
SOLUTION:
For $f(x)=\frac{1}{x},$ the values of the function and its first four derivatives at $x=1$ are

$\begin{array}{rllllrll}f(x) & = & \frac{1}{x} & & & f(1) & = & 1 \\ {f}^{'}(x) & = & -\frac{1}{{x}^{2}} & & & {f}^{'}(1) & = & −1 \\ {f}^{''}(x) & = & \frac{2}{{x}^{3}} & & & {f}^{''}(1) & = & 2\text{!} \\ f''' (x) & = & -\frac{3\cdot 2}{{x}^{4}} & & & f''' (1) & = & −3\text{!} \\ {f}^{(4)}(x) & = & \frac{4\cdot 3\cdot 2}{{x}^{5}} & & & {f}^{(4)}(1) & = & 4\text{!.}\end{array}$  {eq:fs-id1167025009149}

That is, we have ${f}^{(n)}(1)={(−1)}^{n}n\text{!}$ for all $n\ge 0.$ Therefore, the Taylor series for $f$ at $x=1$ is given by

${\displaystyle \sum_{n=0}^{\infty} \frac{{f}^{(n)}(1)}{n\text{!}}{(x-1)}^{n}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{(x-1)}^{n}}.$  {eq:fs-id1167025097564}

To find the interval of convergence, we use the ratio test. We find that

$\frac{|{a}_{n+1}|}{|{a}_{n}|}=\frac{|{(−1)}^{n+1}{(x-1)}^{n+1}|}{|{(−1)}^{n}{(x-1)}^{n}|}=|x-1|.$  {eq:fs-id1167025097686}

Thus, the series converges if $|x-1|<1.$ That is, the series converges for $0<x<2.$ Next, we need to check the endpoints. At $x=2,$ we see that

${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{(2-1)}^{n}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}}$  {eq:fs-id1167025095598}

diverges by the divergence test. Similarly, at $x=0,$

${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{(0-1)}^{n}}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{2n}}={\displaystyle \sum_{n=0}^{\infty} 1}$  {eq:fs-id1167024969136}

diverges. Therefore, the interval of convergence is $(0,2).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167024969273} type= 
PROBLEM:
Find the Taylor series for $f(x)=\frac{1}{2x}$ at $x=2$ and determine its interval of convergence.
SOLUTION:
$\sum_{n=0}^{\infty} \frac{{(2-x)}^{n}}{{2}^{n+1}}.$ The interval of convergence is $(0,4).$
COMMENTARY: Hint
${f}^{(n)}(2)=\frac{{(−1)}^{n}n\text{!}}{{2}^{n+1}}$
:::
:::
We know that the Taylor series found in this example converges on the interval $(0,2),$ but how do we know it actually converges to $f?$ We consider this question in more generality in a moment, but for this example, we can answer this question by writing

$f(x)=\frac{1}{x}=\frac{1}{1-(1-x)}.$  {eq:fs-id1167025232231}

That is, $f$ can be represented by the geometric series ${\displaystyle \sum_{n=0}^{\infty} {(1-x)}^{n}}.$ Since this is a geometric series, it converges to $\frac{1}{x}$ as long as $|1-x|<1.$ Therefore, the Taylor series found in [ref:fs-id1167025009066] does converge to $f(x)=\frac{1}{x}$ on $(0,2).$
We now consider the more general question: if a Taylor series for a function $f$ converges on some interval, how can we determine if it actually converges to $f?$ To answer this question, recall that a series converges to a particular value if and only if its sequence of partial sums converges to that value. Given a Taylor series for $f$ at *a*, the *n*th partial sum is given by the *n*th Taylor polynomial *p<sub>n</sub>*. Therefore, to determine if the Taylor series converges to $f,$ we need to determine whether

$\lim_{n\to \infty}{p}_{n}(x)=f(x).$  {eq:fs-id1167025149944}

Since the remainder ${R}_{n}(x)=f(x)-{p}_{n}(x),$ the Taylor series converges to $f$ if and only if

$\lim_{n\to \infty}{R}_{n}(x)=0.$  {eq:fs-id1167025150045}

We now state this theorem formally.

:::note [theorem] Convergence of Taylor Series
Suppose that $f$ has derivatives of all orders on an interval *I* containing *a*. Then the Taylor series

${\displaystyle \sum_{n=0}^{\infty} \frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}}$  {eq:fs-id1167025167001}

converges to $f(x)$ for all *x* in *I* if and only if

$\lim_{n\to \infty}{R}_{n}(x)=0$  {eq:fs-id1167025167096}

for all *x* in *I*.
:::
With this theorem, we can prove that a Taylor series for $f$ at *a* converges to $f$ if we can prove that the remainder ${R}_{n}(x)\to 0.$ To prove that ${R}_{n}(x)\to 0,$ we typically use the bound

$|{R}_{n}(x)|\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}$  {eq:fs-id1167025117660}

from Taylor’s theorem with remainder.
In the next example, we find the Maclaurin series for *e<sup>x</sup>* and $\text{sin}\;x$ and show that these series converge to the corresponding functions for all real numbers by proving that the remainders ${R}_{n}(x)\to 0$ for all real numbers *x*.

:::example {ex:fs-id1167025117785} Finding Maclaurin Series

:::exercise {fs-id1167025117787} type= 
PROBLEM:
For each of the following functions, find the Maclaurin series and its interval of convergence. Use [ref:fs-id1167025239317] to prove that the Maclaurin series for $f$ converges to $f$ on that interval.
a. *e<sup>x</sup>*
b. $\text{sin}\;x$
SOLUTION:
a. Using the *n*th Maclaurin polynomial for *e<sup>x</sup>* found in [ref:fs-id1167025118487]a., we find that the Maclaurin series for *e<sup>x</sup>* is given by

${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}.$  {eq:fs-id1167025117876}

To determine the interval of convergence, we use the ratio test. Since

$\frac{|{a}_{n+1}|}{|{a}_{n}|}=\frac{{|x|}^{n+1}}{(n+1)\text{!}}\cdot \frac{n\text{!}}{{|x|}^{n}}=\frac{|x|}{n+1},$  {eq:fs-id1167025146566}

we have

$\lim_{n\to \infty}\frac{|{a}_{n+1}|}{|{a}_{n}|}=\lim_{n\to \infty}\frac{|x|}{n+1}=0$  {eq:fs-id1167025146689}

for all *x*. Therefore, the series converges absolutely for all *x*, and thus, the interval of convergence is $(\text{−}\infty ,\infty ).$ To show that the series converges to *e<sup>x</sup>* for all *x*, we use the fact that ${f}^{(n)}(x)={e}^{x}$ for all $n\ge 0$ and *e<sup>x</sup>* is an increasing function on $(\text{−}\infty ,\infty ).$ Therefore, for any real number *b*, the maximum value of *e<sup>x</sup>* for all $|x|\le b$ is *e<sup>b</sup>*. Thus,

$|{R}_{n}(x)|\le \frac{{e}^{b}}{(n+1)\text{!}}{|x|}^{n+1}.$  {eq:fs-id1167025241662}

Since we just showed that

${\displaystyle \sum_{n=0}^{\infty} \frac{|x{|}^{n}}{n\text{!}}}$  {eq:fs-id1167025241737}

converges for all *x*, by the divergence test, we know that

$\lim_{n\to \infty}\frac{{|x|}^{n+1}}{(n+1)\text{!}}=0$  {eq:fs-id1167025241787}

for any real number *x*. By combining this fact with the squeeze theorem, the result is $\lim_{n\to \infty}{R}_{n}(x)=0.$
b. Using the *n*th Maclaurin polynomial for $\text{sin}\;x$ found in [ref:fs-id1167025118487]b., we find that the Maclaurin series for $\text{sin}\;x$ is given by

${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{x}^{2n+1}}{(2n+1)\text{!}}}.$  {eq:fs-id1167024984713}

In order to apply the ratio test, consider

$\frac{|{a}_{n+1}|}{|{a}_{n}|}=\frac{{|x|}^{2n+3}}{(2n+3)\text{!}}\cdot \frac{(2n+1)\text{!}}{{|x|}^{2n+1}}=\frac{{|x|}^{2}}{(2n+3)(2n+2)}.$  {eq:fs-id1167024984788}

Since

$\lim_{n\to \infty}\frac{{|x|}^{2}}{(2n+3)(2n+2)}=0$  {eq:fs-id1167025008815}

for all *x*, we obtain the interval of convergence as $(\text{−}\infty ,\infty ).$ To show that the Maclaurin series converges to $\text{sin}\;x,$ look at ${R}_{n}(x).$ For each *x* there exists a real number *c* between 0 and *x* such that

${R}_{n}(x)=\frac{{f}^{(n+1)}(c)}{(n+1)\text{!}}{x}^{n+1}.$  {eq:fs-id1167025008960}

Since $|{f}^{(n+1)}(c)|\le 1$ for all integers *n* and all real numbers *c*, we have

$|{R}_{n}(x)|\le \frac{{|x|}^{n+1}}{(n+1)\text{!}}$  {eq:fs-id1167024999263}

for all real numbers *x*. Using the same idea as in part a., the result is $\lim_{n\to \infty}{R}_{n}(x)=0$ for all *x*, and therefore, the Maclaurin series for $\text{sin}\;x$ converges to $\text{sin}\;x$ for all real *x*.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167024999408} type= 
PROBLEM:
Find the Maclaurin series for $f(x)=\text{cos}\;x.$ Use the ratio test to show that the interval of convergence is $(\text{−}\infty ,\infty ).$ Show that the Maclaurin series converges to $\text{cos}\;x$ for all real numbers *x*.
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{x}^{2n}}{(2n)\text{!}}}$
By the ratio test, the interval of convergence is $(\text{−}\infty ,\infty ).$ Since $|{R}_{n}(x)|\le \frac{{|x|}^{n+1}}{(n+1)\text{!}},$ the series converges to $\text{cos}\;x$ for all real *x*.
COMMENTARY: Hint
Use the Maclaurin polynomials for $\text{cos}\;x.$
:::
:::

:::note [project] Proving that *e* is Irrational
In this project, we use the Maclaurin polynomials for *e<sup>x</sup>* to prove that *e* is irrational. The proof relies on supposing that *e* is rational and arriving at a contradiction. Therefore, in the following steps, we suppose $e=r\text{/}s$ for some integers *r* and *s* where $s≠0.$
1. Write the Maclaurin polynomials ${p}_{0}(x),{p}_{1}(x),{p}_{2}(x),{p}_{3}(x),{p}_{4}(x)$ for *e<sup>x</sup>*. Evaluate ${p}_{0}(1),{p}_{1}(1),{p}_{2}(1),{p}_{3}(1),{p}_{4}(1)$ to estimate *e*.
2. Let ${R}_{n}(x)$ denote the remainder when using ${p}_{n}(x)$ to estimate *e<sup>x</sup>*. Therefore, ${R}_{n}(x)={e}^{x}-{p}_{n}(x),$ and ${R}_{n}(1)=e-{p}_{n}(1).$ Assuming that $e=\frac{r}{s}$ for integers *r* and *s*, evaluate ${R}_{0}(1),{R}_{1}(1),{R}_{2}(1),{R}_{3}(1),{R}_{4}(1).$
3. Using the results from part 2, show that for each remainder ${R}_{0}(1),{R}_{1}(1),{R}_{2}(1),{R}_{3}(1),{R}_{4}(1),$ we can find an integer *k* such that $k{R}_{n}(1)$ is an integer for $n=0,1,2,3,4.$
4. Write down the formula for the *n*th Maclaurin polynomial ${p}_{n}(x)$ for *e<sup>x</sup>* and the corresponding remainder ${R}_{n}(x).$ Show that $sn\text{!}{R}_{n}(1)$ is an integer.
5. Use Taylor’s theorem to write down an explicit formula for ${R}_{n}(1).$ Conclude that ${R}_{n}(1)≠0,$ and therefore, $sn\text{!}{R}_{n}(1)≠0.$
6. Use Taylor’s theorem to find an estimate on ${R}_{n}(1).$ Use this estimate combined with the result from part 5 to show that $|sn\text{!}{R}_{n}(1)|<\frac{se}{n+1}.$ Conclude that if *n* is large enough, then $|sn\text{!}{R}_{n}(1)|<1.$ Therefore, $sn\text{!}{R}_{n}(1)$ is an integer with magnitude less than 1. Thus, $sn\text{!}{R}_{n}(1)=0.$ But from part 5, we know that $sn\text{!}{R}_{n}(1)≠0.$ We have arrived at a contradiction, and consequently, the original supposition that *e* is rational must be false.
:::

## Key Concepts {section:key-concepts}
- Taylor polynomials are used to approximate functions near a value $x=a.$ Maclaurin polynomials are Taylor polynomials at $x=0.$
- The *n*th degree Taylor polynomials for a function $f$ are the partial sums of the Taylor series for $f.$
- If a function $f$ has a power series representation at $x=a,$ then it is given by its Taylor series at $x=a.$
- A Taylor series for $f$ converges to $f$ if and only if $\lim_{n\to \infty}{R}_{n}(x)=0$ where ${R}_{n}(x)=f(x)-{p}_{n}(x).$
- The Taylor series for *e<sup>x</sup>*, $\text{sin}\;x,$ and $\text{cos}\;x$ converge to the respective functions for all real *x*.

## Key Equations {section:key-equations}

> TABLE {tab:eip-525} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Taylor series for the function $f$ at the point** $\mathbf{x=a}$ | ${\displaystyle \sum_{n=0}^{\infty} \frac{{f}^{(n)}(a)}{n\text{!}}}{(x-a)}^{n}=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\text{⋯}+\frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}+\text{⋯}$ |

##  {section:section-exercises}
In the following exercises, find the Taylor polynomials of degree two approximating the given function centered at the given point.

:::exercise {fs-id1167025232736} type= 
PROBLEM:
$f(x)=1+x+{x}^{2}$ at $a=1$
:::

:::exercise {fs-id1167025012142} type= 
PROBLEM:
$f(x)=1+x+{x}^{2}$ at $a=−1$
SOLUTION:
$f(−1)=1;{f}^{'}(−1)=−1;{f}^{''}(−1)=2;f(x)=1-(x+1)+{(x+1)}^{2}$
:::

:::exercise {fs-id1167025012300} type= 
PROBLEM:
$f(x)=\text{cos}(2x)$ at $a=\pi$
:::

:::exercise {fs-id1167025099845} type= 
PROBLEM:
$f(x)=\text{sin}(2x)$ at $a=\frac{\pi}{2}$
SOLUTION:
${f}^{'}(x)=2\;\text{cos}(2x);{f}^{''}(x)=−4\;\text{sin}(2x);{p}_{2}(x)=−2(x-\frac{\pi}{2})$
:::

:::exercise {fs-id1167025100004} type= 
PROBLEM:
$f(x)=\sqrt{x}$ at $a=4$
:::

:::exercise {fs-id1167025112421} type= 
PROBLEM:
$f(x)=\text{ln}\;x$ at $a=1$
SOLUTION:
${f}^{'}(x)=\frac{1}{x};{f}^{''}(x)=-\frac{1}{{x}^{2}};{p}_{2}(x)=0+(x-1)-\frac{1}{2}{(x-1)}^{2}$
:::

:::exercise {fs-id1167025112576} type= 
PROBLEM:
$f(x)=\frac{1}{x}$ at $a=1$
:::

:::exercise {fs-id1167025166349} type= 
PROBLEM:
$f(x)={e}^{x}$ at $a=1$
SOLUTION:
${p}_{2}(x)=e+e(x-1)+\frac{e}{2}{(x-1)}^{2}$
:::
In the following exercises, verify that the given choice of *n* in the remainder estimate $|{R}_{n}|\le \frac{M}{(n+1)\text{!}}{(x-a)}^{n+1},$ where *M* is the maximum value of $|{f}^{(n+1)}(z)|$ on the interval between *a* and the indicated point, yields $|{R}_{n}|\le \frac{1}{1000}.$ Find the value of the Taylor polynomial *p<sub>n</sub>* of $f$ at the indicated point.  If $|Rn|$ is not less than $1/1000$, determine what it is.

:::exercise {fs-id1167024965792} type= 
PROBLEM:
**[T]** $\sqrt{10};a=9,n=3$
:::

:::exercise {fs-id1167025090549} type= 
PROBLEM:
**[T]** ${(28)}^{1\text{/}3};a=27,n=1$
SOLUTION:
$\frac{{d}^{2}}{d{x}^{2}}{x}^{1\text{/}3}=-\frac{2}{9{x}^{5\text{/}3}}\ge −0.00092\text{…}$ when $x\ge 28$ so the remainder estimate applies to the linear approximation ${x}^{1\text{/}3}\approx {p}_{1}(27)=3+\frac{x-27}{27},$ which gives ${(28)}^{1\text{/}3}\approx 3+\frac{1}{27}=3.\bar{037},$ while ${(28)}^{1\text{/}3}\approx 3.03658.$
:::

:::exercise {fs-id1167025090800} type= 
PROBLEM:
**[T]** $\text{sin}(6);a=2\pi ,n=5$
:::

:::exercise {fs-id1167024996140} type= 
PROBLEM:
**[T]** *e*<sup>2</sup>; $a=0,n=9$
SOLUTION:
Using the estimate $\frac{{2}^{10}}{10\text{!}}<0.000283$ we can use the Taylor expansion of order 9 to estimate *e<sup>x</sup>* at $x=2.$ as ${e}^{2}\approx {p}_{9}(2)=1+2+\frac{{2}^{2}}{2}+\frac{{2}^{3}}{6}+\text{⋯}+\frac{{2}^{9}}{9\text{!}}=7.3887\text{…}$ whereas ${e}^{2}\approx 7.3891.$
:::

:::exercise {fs-id1167025228416} type= 
PROBLEM:
**[T]** $\text{cos}(\frac{\pi}{5});a=0,n=4$
:::

:::exercise {fs-id1167025228620} type= 
PROBLEM:
**[T]** $\text{ln}\;(2);a=1,n=1000$
SOLUTION:
Since $\frac{{d}^{n}}{d{x}^{n}}(\text{ln}\;x)={(−1)}^{n-1}\frac{(n-1)\text{!}}{{x}^{n}},{R}_{1000}\approx \frac{1}{1001}.$ One has ${p}_{1000}(1)={\displaystyle \sum_{n=1}^{1000} \frac{{(−1)}^{n-1}}{n}}\approx 0.6936$ whereas $\text{ln}\;(2)\approx 0.6931\text{⋯}.$
:::

:::exercise {fs-id1167025014143} type= 
PROBLEM:
Integrate the approximation $\text{sin}\;t\approx t-\frac{{t}^{3}}{6}+\frac{{t}^{5}}{120}-\frac{{t}^{7}}{5040}$ evaluated at *πt* to approximate ${\displaystyle \int_{0}^{1}\frac{\text{sin}\;\pi t}{\pi t}dt}.$
:::

:::exercise {fs-id1167025148804} type= 
PROBLEM:
Integrate the approximation ${e}^{x}\approx 1+x+\frac{{x}^{2}}{2}+\text{⋯}+\frac{{x}^{6}}{720}$ evaluated at −*x*<sup>2</sup> to approximate ${\displaystyle \int_{0}^{1}{e}^{\text{−}{x}^{2}}dx}.$
SOLUTION:
${\displaystyle \int_{0}^{1}(1-{x}^{2}+\frac{{x}^{4}}{2}-\frac{{x}^{6}}{6}+\frac{{x}^{8}}{24}-\frac{{x}^{10}}{120}+\frac{{x}^{12}}{720})\;dx}$
$=1-\frac{{1}^{3}}{3}+\frac{{1}^{5}}{10}-\frac{{1}^{7}}{42}+\frac{{1}^{9}}{9\cdot 24}-\frac{{1}^{11}}{120\cdot 11}+\frac{{1}^{13}}{720\cdot 13}\approx 0.74683$ whereas ${\displaystyle \int_{0}^{1}{e}^{\text{−}{x}^{2}}dx}\approx 0.74682.$
:::
In the following exercises, find the smallest value of *n* such that the remainder estimate $|{R}_{n}|\le \frac{M}{(n+1)\text{!}}{(x-a)}^{n+1},$ where *M* is the maximum value of $|{f}^{(n+1)}(z)|$ on the interval between *a* and the indicated point, yields $|{R}_{n}|\le \frac{1}{1000}$ on the indicated interval.

:::exercise {fs-id1167025240142} type= 
PROBLEM:
$f(x)=\text{sin}\;x$ on $[\text{−}\pi ,\pi ],a=0$
:::

:::exercise {fs-id1167025240362} type= 
PROBLEM:
$f(x)=\text{cos}\;x$ on $[-\frac{\pi}{2},\frac{\pi}{2}],a=0$
SOLUTION:
Since ${f}^{(n+1)}(z)$ is $\text{sin}\;z$ or $\text{cos}\;z,$ we have $M=1.$ Since $|x-0|\le \frac{\pi}{2},$ we seek the smallest *n* such that $\frac{{\pi}^{n+1}}{{2}^{n+1}(n+1)\text{!}}\le 0.001.$ The smallest such value is $n=7.$ The remainder estimate is ${R}_{7}\le 0.00092.$
:::

:::exercise {fs-id1167024978733} type= 
PROBLEM:
$f(x)={e}^{−2x}$ on $[−1,1],a=0$
:::

:::exercise {fs-id1167024986177} type= 
PROBLEM:
$f(x)={e}^{\text{−}x}$ on $[−3,3],a=0$
SOLUTION:
Since ${f}^{(n+1)}(z)=\text{±}{e}^{\text{−}z}$ one has $M={e}^{3}.$ Since $|x-0|\le 3,$ one seeks the smallest *n* such that $\frac{{3}^{n+1}{e}^{3}}{(n+1)\text{!}}\le 0.001.$ The smallest such value is $n=14.$ The remainder estimate is ${R}_{14}\le 0.000220.$
:::
In the following exercises, the maximum of the right-hand side of the remainder estimate $|{R}_{1}|\le \frac{\text{max}|{f}^{''}(z)|}{2}{R}^{2}$ on $[a-R,a+R]$ occurs at *a* or $a\pm R.$ Estimate the maximum value of *R* such that $\frac{\text{max}|{f}^{''}(z)|}{2}{R}^{2}\le 0.1$ on $[a-R,a+R]$ by plotting this maximum as a function of *R*.

:::exercise {fs-id1167025097972} type= 
PROBLEM:
**[T]** *e<sup>x</sup>* approximated by $1+x,a=0$
:::

:::exercise {fs-id1167025098102} type= 
PROBLEM:
**[T]** $\text{sin}\;x$ approximated by *x*, $a=0$
SOLUTION:

> IMAGE {img:fs-id1167025098143} src=../../media/CNX_Calc_Figure_10_03_202.jpg
> alt: This graph has a horizontal line at y=0.2. It also has a curve starting at the origin and concave up. The curve and the line intersect at the ordered pair (0.5966, 0.2).

Since $\text{sin}\;x$ is increasing for small *x* and since $si{n}^{''}x=\text{−}\text{sin}\;x,$ the estimate applies whenever ${R}^{2}\text{sin}(R)\le 0.2,$ which applies up to $R=0.596.$
:::

:::exercise {fs-id1167024988381} type= 
PROBLEM:
**[T]** $\text{ln}\;x$ approximated by $x-1,a=1$
:::

:::exercise {fs-id1167024988528} type= 
PROBLEM:
**[T]** $\text{cos}\;x$ approximated by $1,a=0$
SOLUTION:

> IMAGE {img:fs-id1167024988569} src=../../media/CNX_Calc_Figure_10_03_204.jpg
> alt: This graph has a horizontal line at y=0.2. It also has a curve starting at the origin and concave up. The curve and the line intersect at the ordered pair (0.44720, 0.2).

Since the second derivative of $\text{cos}\;x$ is $\text{−}\text{cos}\;x$ and since $\text{cos}\;x$ is decreasing away from $x=0,$ the estimate applies when ${R}^{2}\text{cos}\;R\le 0.2$ or $R\le 0.447.$
:::
In the following exercises, find the Taylor series of the given function centered at the indicated point.

:::exercise {fs-id1167024988668} type= 
PROBLEM:
${x}^{4}$ at $a=−1$
:::

:::exercise {fs-id1167025130124} type= 
PROBLEM:
$1+x+{x}^{2}+{x}^{3}$ at $a=−1$
SOLUTION:
${(x+1)}^{3}-2{(x+1)}^{2}+2(x+1)$
:::

:::exercise {fs-id1167025010734} type= 
PROBLEM:
$\text{sin}\;x$ at $a=\pi$
:::

:::exercise {fs-id1167025010956} type= 
PROBLEM:
$\text{cos}\;x$ at $a=2\pi$
SOLUTION:
Values of derivatives are the same as for $x=0$ so $\text{cos}\;x={{\displaystyle \sum_{n=0}^{\infty} (−1)}}^{n}\frac{{(x-2\pi )}^{2n}}{(2n)\text{!}}$
:::

:::exercise {fs-id1167025096476} type= 
PROBLEM:
$\text{sin}\;x$ at $x=\frac{\pi}{2}$
:::

:::exercise {fs-id1167025096642} type= 
PROBLEM:
$\text{cos}\;x$ at $x=\frac{\pi}{2}$
SOLUTION:
$\text{cos}(\frac{\pi}{2})=0,\text{−}\text{sin}(\frac{\pi}{2})=−1$ so $\text{cos}\;x={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n+1}}\frac{{(x-\frac{\pi}{2})}^{2n+1}}{(2n+1)\text{!}},$ which is also $\text{−}\text{cos}(x-\frac{\pi}{2}).$
:::

:::exercise {fs-id1167024991570} type= 
PROBLEM:
${e}^{x}$ at $a=−1$
:::

:::exercise {fs-id1167024991698} type= 
PROBLEM:
${e}^{x}$ at $a=1$
SOLUTION:
The derivatives are ${f}^{(n)}(1)=e$ so ${e}^{x}=e{\displaystyle \sum_{n=0}^{\infty} \frac{{(x-1)}^{n}}{n\text{!}}}.$
:::

:::exercise {fs-id1167024991812} type= 
PROBLEM:
$\frac{1}{{(x-1)}^{2}}$ at $a=0$ (*Hint:* Differentiate $\frac{1}{1-x}.)$
:::

:::exercise {fs-id1167024983157} type= 
PROBLEM:
$\frac{1}{{(x-1)}^{3}}$ at $a=0$
SOLUTION:
$\frac{1}{{(x-1)}^{3}}=\text{−}(\frac{1}{2})\frac{{d}^{2}}{d{x}^{2}}\;\frac{1}{1-x}=\text{−}{\displaystyle \sum_{n=0}^{\infty} (\frac{(n+2)(n+1){x}^{n}}{2})}$
:::

:::exercise {fs-id1167024983332} type= 
PROBLEM:
$F(x)={\displaystyle \int_{0}^{x}\text{cos}(\sqrt{t})\;dt};f(t)={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}\frac{{t}^{n}}{(2n)\text{!}}}$ at $a=0$ (*Note*: $f$ is the Taylor series of $\text{cos}(\sqrt{t}).)$
:::
In the following exercises, compute the Taylor series of each function around $x=1.$

:::exercise {fs-id1167025166790} type= 
PROBLEM:
$f(x)=2-x$
SOLUTION:
$2-x=1-(x-1)$
:::

:::exercise {fs-id1167025166852} type= 
PROBLEM:
$f(x)={x}^{3}$
:::

:::exercise {fs-id1167025070684} type= 
PROBLEM:
$f(x)={(x-2)}^{2}$
SOLUTION:
${((x-1)-1)}^{2}={(x-1)}^{2}-2(x-1)+1$
:::

:::exercise {fs-id1167025070799} type= 
PROBLEM:
$f(x)=\text{ln}\;x$
:::

:::exercise {fs-id1167025070893} type= 
PROBLEM:
$f(x)=\frac{1}{x}$
SOLUTION:
$\frac{1}{1-(1-x)}={\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{(x-1)}^{n}}$
:::

:::exercise {fs-id1167025070998} type= 
PROBLEM:
$f(x)=\frac{1}{2x-{x}^{2}}$
:::

:::exercise {fs-id1167025159222} type= 
PROBLEM:
$f(x)=\frac{x}{4x-2{x}^{2}-1}$
SOLUTION:
$x{\displaystyle \sum_{n=0}^{\infty} {2}^{n}{(1-x)}^{2n}=}{\displaystyle \sum_{n=0}^{\infty} {2}^{n}{(x-1)}^{2n+1}+}{\displaystyle \sum_{n=0}^{\infty} {2}^{n}{(x-1)}^{2n}}$
:::

:::exercise {fs-id1167025159413} type= 
PROBLEM:
$f(x)={e}^{\text{−}x}$
:::

:::exercise {fs-id1167025005292} type= 
PROBLEM:
$f(x)={e}^{2x}$
SOLUTION:
${e}^{2x}={e}^{2(x-1)+2}={e}^{2}{\displaystyle \sum_{n=0}^{\infty} \frac{{2}^{n}{(x-1)}^{n}}{n\text{!}}}$
:::
**[T]** In the following exercises, identify the value of *x* such that the given series ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}}$ is the value of the Maclaurin series of $f(x)$ at $x.$ Approximate the value of $f(x)$ using ${S}_{10}={\displaystyle \sum_{n=0}^{10} {a}_{n}}.$

:::exercise {fs-id1167025005525} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{1}{n\text{!}}}$
:::

:::exercise {fs-id1167025235065} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{2}^{n}}{n\text{!}}}$
SOLUTION:
$x={e}^{2};{S}_{10}=\frac{34,913}{4725}\approx 7.3889947$
:::

:::exercise {fs-id1167025235144} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{(2\pi )}^{2n}}{(2n)\text{!}}}$
:::

:::exercise {fs-id1167025235256} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}{(2\pi )}^{2n+1}}{(2n+1)\text{!}}}$
SOLUTION:
$\text{sin}(2\pi )=0;{S}_{10}=8.27\;\times \;{10}^{−5}$
:::
The following exercises make use of the functions ${S}_{5}(x)=x-\frac{{x}^{3}}{6}+\frac{{x}^{5}}{120}$ and ${C}_{4}(x)=1-\frac{{x}^{2}}{2}+\frac{{x}^{4}}{24}$ on $[\text{−}\pi ,\pi ].$

:::exercise {fs-id1167025000956} type= 
PROBLEM:
**[T]** Plot ${\text{sin}}^{2}x-{({S}_{5}(x))}^{2}$ on $[\text{−}\pi ,\pi ].$ Compare the maximum difference with the square of the Taylor remainder estimate for $\text{sin}\;x.$
:::

:::exercise {fs-id1167025001143} type= 
PROBLEM:
**[T]** Plot ${\text{cos}}^{2}x-{({C}_{4}(x))}^{2}$ on $[\text{−}\pi ,\pi ].$ Compare the maximum difference with the square of the Taylor remainder estimate for $\text{cos}\;x.$
SOLUTION:

> IMAGE {img:fs-id1167025001231} src=../../media/CNX_Calc_Figure_10_03_206.jpg
> alt: This graph has a concave up curve that is symmetrical about the y axis. The lowest point of the graph is the origin with the rest of the curve above the x-axis.

The difference is small on the interior of the interval but approaches $1$ near the endpoints. The remainder estimate is $|{R}_{4}|=\frac{{\pi}^{5}}{120}\approx 2.552.$
:::

:::exercise {fs-id1167025090843} type= 
PROBLEM:
**[T]** Plot $|2{S}_{5}(x){C}_{4}(x)-\text{sin}(2x)|$ on $[\text{−}\pi ,\pi ].$
:::

:::exercise {fs-id1167025090979} type= 
PROBLEM:
**[T]** Compare $\frac{{S}_{5}(x)}{{C}_{4}(x)}$ on $[−1,1]$ to $\text{tan}\;x.$ Compare this with the Taylor remainder estimate for the approximation of $\text{tan}\;x$ by $x+\frac{{x}^{3}}{3}+\frac{2{x}^{5}}{15}.$
SOLUTION:

> IMAGE {img:fs-id1167025091101} src=../../media/CNX_Calc_Figure_10_03_208.jpg
> alt: This graph has two curves. The solid curve is very flat and close to the x-axis. It passes through the origin. The second curve, a broken line, is concave down and symmetrical about the y-axis. It is very close to the x-axis between -3 and 3.

The difference is on the order of ${10}^{−4}$ on $[−1,1]$ while the Taylor approximation error is around $0.1$ near $\pm 1.$ The top curve is a plot of ${\text{tan}}^{2}x-{(\frac{{S}_{5}(x)}{{C}_{4}(x)})}^{2}$ and the lower dashed plot shows ${t}^{2}-{(\frac{{S}_{5}}{{C}_{4}})}^{2}.$
:::

:::exercise {fs-id1167025146165} type= 
PROBLEM:
**[T]** Plot ${e}^{x}-{e}_{4}(x)$ where ${e}_{4}(x)=1+x+\frac{{x}^{2}}{2}+\frac{{x}^{3}}{6}+\frac{{x}^{4}}{24}$ on $[0,2].$ Compare the maximum error with the Taylor remainder estimate.
:::

:::exercise {fs-id1167025146418} type= 
PROBLEM:
(Taylor approximations and root finding.) Recall that Newton’s method ${x}_{n+1}={x}_{n}-\frac{f({x}_{n})}{f'({x}_{n})}$ approximates solutions of $f(x)=0$ near the input ${x}_{0}.$
a. If $f$ and $g$ are inverse functions, explain why a solution of $g(x)=a$ is the value $f(a)\;\text{of}\;f.$
b. Let ${p}_{N}(x)$ be the $N\;\text{th}$ degree Maclaurin polynomial of ${e}^{x}.$ Use Newton’s method to approximate solutions of ${p}_{N}(x)-2=0$ for $N=4,5,6.$
c. Explain why the approximate roots of ${p}_{N}(x)-2=0$ are approximate values of $\text{ln}\;(2).$
SOLUTION:
a. Answers will vary. b. The following are the ${x}_{n}$ values after $10$ iterations of Newton’s method to approximation a root of ${p}_{N}(x)-2=0\text{:}$ for $N=4,x=0.6939...;$ for $N=5,x=0.6932...;$ for $N=6,x=0.69315...;.$ (*Note:* $\text{ln}\;(2)=0.69314...)$ c. Answers will vary.
:::
In the following exercises, use the fact that if $q(x)={\displaystyle \sum_{n=1}^{\infty} {a}_{n}{(x-c)}^{n}}$ converges in an interval containing $c,$ then $\lim_{x\to c}q(x)={a}_{0}^{}$ to evaluate each limit using Taylor series.

:::exercise {fs-id1167025006759} type= 
PROBLEM:
$\lim_{x\to 0}\frac{\text{cos}\;x-1}{{x}^{2}}$
:::

:::exercise {fs-id1167025006894} type= 
PROBLEM:
$\lim_{x\to 0}\frac{\text{ln}\;(1-{x}^{2})}{{x}^{2}}$
SOLUTION:
$\frac{\text{ln}\;(1-{x}^{2})}{{x}^{2}}\to \text{−}1$
:::

:::exercise {fs-id1167025006987} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{e}^{{x}^{2}}-{x}^{2}-1}{{x}^{4}}$
:::

:::exercise {fs-id1167025150828} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}\frac{\text{cos}(\sqrt{x})-1}{2x}$
SOLUTION:
$\frac{\text{cos}(\sqrt{x})-1}{2x}\approx \frac{(1-\frac{x}{2}+\frac{{x}^{2}}{4\text{!}}-\text{⋯})-1}{2x}\to -\frac{1}{4}$
:::

## Glossary
- {def} **Maclaurin polynomial**: a Taylor polynomial centered at 0; the *n*th Taylor polynomial for $f$ at 0 is the *n*th Maclaurin polynomial for $f$
- {def} **Maclaurin series**: a Taylor series for a function $f$ at $x=0$ is known as a Maclaurin series for $f$
- {def} **Taylor polynomials**: the *n*th Taylor polynomial for $f$ at $x=a$ is ${p}_{n}(x)=f(a)+{f}^{'}(a)(x-a)+\frac{{f}^{''}(a)}{2\text{!}}{(x-a)}^{2}+\text{⋯}+\frac{{f}^{(n)}(a)}{n\text{!}}{(x-a)}^{n}$
- {def} **Taylor series**: a power series at *a* that converges to a function $f$ on some open interval containing *a*
- {def} **Taylor’s theorem with remainder**: for a function $f$ and the *n*th Taylor polynomial for $f$ at $x=a,$ the remainder ${R}_{n}(x)=f(x)-{p}_{n}(x)$ satisfies ${R}_{n}(x)=\frac{{f}^{(n+1)}(c)}{(n+1)\text{!}}{(x-a)}^{n+1}$

for some *c* between *x* and *a*; if there exists an interval *I* containing *a* and a real number *M* such that $|{f}^{(n+1)}(x)|\le M$ for all *x* in *I*, then $|{R}_{n}(x)|\le \frac{M}{(n+1)\text{!}}{|x-a|}^{n+1}$

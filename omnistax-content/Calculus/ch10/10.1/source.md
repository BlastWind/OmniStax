# Power Series and Functions

## Learning Objectives {section:learning-objectives}
- Identify a power series and provide examples of them.
- Determine the radius of convergence and interval of convergence of a power series.
- Use a power series to represent a function.

A power series is a type of series with terms involving a variable. More specifically, if the variable is *x*, then all the terms of the series involve powers of *x*. As a result, a power series can be thought of as an infinite polynomial. Power series are used to represent common functions and also to define new functions. In this section we define power series and show how to determine when a power series converges and when it diverges. We also show how to represent certain functions using power series.

## Form of a Power Series
A series of the form

${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯},$  {eq:fs-id1170572089880}

where *x* is a variable and the coefficients *c<sub>n</sub>* are constants, is known as a {term:power series}. The series

$1+x+{x}^{2}+\text{⋯}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$  {eq:fs-id1170572299086}

is an example of a power series. Since this series is a geometric series with ratio $r=x,$ we know that it converges if $|x|<1$ and diverges if $|x|\ge 1.$

:::note [definition] Definition
A series of the form

$$ {\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯} $$  {eq:fs-id1170572644191}

is a power series centered at $x=0.$ A series of the form

$$ {\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}={c}_{0}+{c}_{1}(x-a)+{c}_{2}{(x-a)}^{2}+\text{⋯} $$  {eq:fs-id1170572295618}

is a power series centered at $x=a.$
:::
To make this definition precise, we stipulate that ${x}^{0}=1$ and ${(x-a)}^{0}=1$ even when $x=0$ and $x=a,$ respectively.
The series

${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}=1+x+\frac{{x}^{2}}{2\text{!}}+\frac{{x}^{3}}{3\text{!}}+\text{⋯}$  {eq:fs-id1170572499752}

and

${\displaystyle \sum_{n=0}^{\infty} n\text{!}{x}^{n}}=1+x+2\text{!}{x}^{2}+3\text{!}{x}^{3}+\text{⋯}$  {eq:fs-id1170571647991}

are both power series centered at $x=0.$ The series

${\displaystyle \sum_{n=0}^{\infty} \frac{{(x-2)}^{n}}{(n+1){3}^{n}}}=1+\frac{x-2}{2\cdot 3}+\frac{{(x-2)}^{2}}{3\cdot {3}^{2}}+\frac{{(x-2)}^{3}}{4\cdot {3}^{3}}+\text{⋯}$  {eq:fs-id1170572482409}

is a power series centered at $x=2.$

## Convergence of a Power Series
Since the terms in a power series involve a variable *x*, the series may converge for certain values of *x* and diverge for other values of *x*. For a power series centered at $x=a,$ the value of the series at $x=a$ is given by ${c}_{0}.$ Therefore, a power series always converges at its center. Some power series converge only at that value of *x*. Most power series, however, converge for more than one value of *x*. In that case, the power series either converges for all real numbers *x* or converges for all *x* in a finite interval. For example, the geometric series ${\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$ converges for all *x* in the interval $(−1,1),$ but diverges for all *x* outside that interval. We now summarize these three possibilities for a general power series.

:::note [theorem] Convergence of a Power Series
Consider the power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}.$ The series satisfies exactly one of the following properties:
1. The series converges at $x=a$ and diverges for all $x≠a.$
2. The series converges for all real numbers *x*.
3. There exists a real number $R>0$ such that the series converges if $|x-a|<R$ and diverges if $|x-a|>R.$ At the values *x* where $|x-a|=R,$ the series may converge or diverge.
:::

### Proof
Suppose that the power series is centered at $a=0.$ (For a series centered at a value of *a* other than zero, the result follows by letting $y=x-a$ and considering the series ${\displaystyle \sum_{n=1}^{\infty} {c}_{n}{y}^{n}}.)$ We must first prove the following fact:
If there exists a real number $d≠0$ such that ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{d}^{n}}$ converges, then the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ converges absolutely for all *x* such that $|x|<|d|.$
Since ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{d}^{n}}$ converges, the *n*th term ${c}_{n}{d}^{n}\to 0$ as $n\to \infty .$ Therefore, there exists an integer *N* such that $|{c}_{n}{d}^{n}|\le 1$ for all $n\ge N.$ Writing

$|{c}_{n}{x}^{n}|=|{c}_{n}{d}^{n}|{|\frac{x}{d}|}^{n},$  {eq:fs-id1170571538405}

we conclude that, for all $n\ge N,$

$|{c}_{n}{x}^{n}|\le {|\frac{x}{d}|}^{n}.$  {eq:fs-id1170572436828}

The series

${\displaystyle \sum_{n=N}^{\infty} {|\frac{x}{d}|}^{n}}$  {eq:fs-id1170572375703}

is a geometric series that converges if $|\frac{x}{d}|<1.$ Therefore, by the comparison test, we conclude that ${\displaystyle \sum_{n=N}^{\infty} {c}_{n}{x}^{n}}$ also converges for $|x|<|d|.$ Since we can add a finite number of terms to a convergent series, we conclude that ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ converges for $|x|<|d|.$
With this result, we can now prove the theorem. Consider the series

${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$  {eq:fs-id1170572250450}

and let *S* be the set of real numbers for which the series converges. Suppose that the set $S=\{0\}.$ Then the series falls under case i. Suppose that the set *S* is the set of all real numbers. Then the series falls under case ii. Suppose that $S≠\{0\}$ and *S* is not the set of real numbers. Then there exists a real number $x*≠0$ such that the series does not converge. Thus, the series cannot converge for any *x* such that $|x|>|x*|.$ Therefore, the set *S* must be a bounded set, which means that it must have a smallest upper bound. (This fact follows from the Least Upper Bound Property for the real numbers, which is beyond the scope of this text and is covered in real analysis courses.) Call that smallest upper bound *R*. Since $S≠\{0\},$ the number $R>0.$ Therefore, the series converges for all *x* such that $|x|<R,$ and the series falls into case iii.
□
If a series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ falls into case iii. of [ref:fs-id1170572419070], then the series converges for all *x* such that $|x-a|<R$ for some $R>0,$ and diverges for all *x* such that $|x-a|>R.$ The series may converge or diverge at the values *x* where $|x-a|=R.$ The set of values *x* for which the series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ converges is known as the {term:interval of convergence}. Since the series diverges for all values *x* where $|x-a|>R,$ the length of the interval is 2*R*, and therefore, the radius of the interval is *R*. The value *R* is called the {term:radius of convergence}. For example, since the series ${\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$ converges for all values *x* in the interval $(−1,1)$ and diverges for all values *x* such that $|x|\ge 1,$ the interval of convergence of this series is $(−1,1).$ Since the length of the interval is 2, the radius of convergence is 1.

:::note [definition] Definition
Consider the power series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}.$ The set of real numbers *x* where the series converges is the interval of convergence. If there exists a real number $R>0$ such that the series converges for $|x-a|<R$ and diverges for $|x-a|>R,$ then *R* is the radius of convergence. If the series converges only at $x=a,$ we say the radius of convergence is $R=0.$ If the series converges for all real numbers *x*, we say the radius of convergence is $R=\infty$ ([ref:CNX_Calc_Figure_10_01_004]).
:::

> FIGURE {fig:CNX_Calc_Figure_10_01_004} src=../../media/CNX_Calc_Figure_10_01_004.jpg
> alt: This figure has three number lines, each labeled with x. In the middle of each number line is a point labeled a. The first number line has “diverges” over all of the line to the left of a and “diverges” over the line to the right of a. At the point a itself, it is labeled as “converges”. The second number line has “converges” labeled for the entire line. The third number line has points labeled at a-R, a, and a+R. To the left of a-R, the number line is labeled “diverges”. Between a-R and a+R the number line is labeled “converges” and to the right of a+R the number line is labeled “diverges”.
> caption: For a series ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ graph (a) shows a radius of convergence at $R=0,$ graph (b) shows a radius of convergence at $R=\infty ,$ and graph (c) shows a radius of convergence at *R*. For graph (c) we note that the series may or may not converge at the endpoints $x=a+R$ and $x=a-R.$

To determine the interval of convergence for a power series, we typically apply the ratio test. In [ref:fs-id1170572554745], we show the three different possibilities illustrated in [ref:CNX_Calc_Figure_10_01_004].

:::example {ex:fs-id1170572554745} Finding the Interval and Radius of Convergence

:::exercise {fs-id1170572554747} type= 
PROBLEM:
For each of the following series, find the interval and radius of convergence.
a. ${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n\text{!}}}$
b. ${\displaystyle \sum_{n=0}^{\infty} n\text{!}{x}^{n}}$
c. ${\displaystyle \sum_{n=0}^{\infty} \frac{{(x-2)}^{n}}{(n+1){3}^{n}}}$
SOLUTION:
a. To check for convergence, apply the ratio test. We have

$\begin{array}{rl}ρ & =\lim_{n\to \infty}|\frac{\frac{{x}^{n+1}}{(n+1)\text{!}}}{\frac{{x}^{n}}{n\text{!}}}| \\ & =\lim_{n\to \infty}|\frac{{x}^{n+1}}{(n+1)\text{!}}\cdot \frac{n\text{!}}{{x}^{n}}| \\ & =\lim_{n\to \infty}|\frac{{x}^{n+1}}{(n+1)\cdot n\text{!}}\cdot \frac{n\text{!}}{{x}^{n}}| \\ & =\lim_{n\to \infty}|\frac{x}{n+1}| \\ & =|x|\lim_{n\to \infty}\frac{1}{n+1} \\ & =0<1\end{array}$  {eq:fs-id1170571610348}

for all values of *x*. Therefore, the series converges for all real numbers *x*. The interval of convergence is $(\text{−}\infty ,\infty )$ and the radius of convergence is $R=\infty .$
b. Apply the ratio test. For $x≠0,$ we see that

$\begin{array}{rr}ρ & =\lim_{n\to \infty}|\frac{(n+1)\text{!}{x}^{n+1}}{n\text{!}{x}^{n}}| \\ & =\lim_{n\to \infty}|(n+1)x| \\ & =|x|\lim_{n\to \infty}(n+1) \\ & =\infty .\end{array}$  {eq:fs-id1170571699018}

Therefore, the series diverges for all $x≠0.$ Since the series is centered at $x=0,$ it must converge there, so the series converges only for $x=0.$ The interval of convergence is the single value $x=0$ and the radius of convergence is $R=0.$
c. In order to apply the ratio test, consider

$\begin{array}{rl}ρ & =\lim_{n\to \infty}|\frac{\frac{{(x-2)}^{n+1}}{(n+2){3}^{n+1}}}{\frac{{(x-2)}^{n}}{(n+1){3}^{n}}}| \\ & =\lim_{n\to \infty}|\frac{{(x-2)}^{n+1}}{(n+2){3}^{n+1}}\cdot \frac{(n+1){3}^{n}}{{(x-2)}^{n}}| \\ & =\lim_{n\to \infty}|\frac{(x-2)(n+1)}{3(n+2)}| \\ & =\frac{|x-2|}{3}.\end{array}$  {eq:fs-id1170571581845}

The ratio $ρ<1$ if $|x-2|<3.$ Since $|x-2|<3$ implies that $−3<x-2<3,$ the series converges absolutely if $−1<x<5.$ The ratio $ρ>1$ if $|x-2|>3.$ Therefore, the series diverges if $x<−1$ or $x>5.$ The ratio test is inconclusive if $ρ=1.$ The ratio $ρ=1$ if and only if $x=−1$ or $x=5.$ We need to test these values of *x* separately. For $x=−1,$ the series is given by

${\displaystyle \sum_{n=0}^{\infty} \frac{{(−1)}^{n}}{n+1}}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\text{⋯}.$  {eq:fs-id1170572563232}

Since this is the alternating harmonic series, it converges. Thus, the series converges at $x=−1.$ For $x=5,$ the series is given by

${\displaystyle \sum_{n=0}^{\infty} \frac{1}{n+1}}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\text{⋯}.$  {eq:fs-id1170572551953}

This is the harmonic series, which is divergent. Therefore, the power series diverges at $x=5.$ We conclude that the interval of convergence is $[−1,5)$ and the radius of convergence is $R=3.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572582282} type= 
PROBLEM:
Find the interval and radius of convergence for the series ${\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{n}}{\sqrt{n}}}.$
SOLUTION:
The interval of convergence is $[−1,1).$ The radius of convergence is $R=1.$
COMMENTARY: Hint
Apply the ratio test to check for absolute convergence.
:::
:::

## Representing Functions as Power Series
Being able to represent a function by an “infinite polynomial” is a powerful tool. Polynomial functions are the easiest functions to analyze, since they only involve the basic arithmetic operations of addition, subtraction, multiplication, and division. If we can represent a complicated function by an infinite polynomial, we can use the polynomial representation to differentiate or integrate it. In addition, we can use a truncated version of the polynomial expression to approximate values of the function. So, the question is, when can we represent a function by a power series?
Consider again the geometric series

$$ 1+x+{x}^{2}+{x}^{3}+\text{⋯}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}. $$  {eq:fs-id1170572443573}

Recall that the geometric series

$a+ar+a{r}^{2}+a{r}^{3}+\text{⋯}$  {eq:fs-id1170571652074}

converges if and only if $|r|<1.$ In that case, it converges to $\frac{a}{1-r}.$ Therefore, if $|x|<1,$ the series in [ref:fs-id1170572180135] converges to $\frac{1}{1-x}$ and we write

$1+x+{x}^{2}+{x}^{3}+\text{⋯}=\frac{1}{1-x}\;\text{for}\;|x|<1.$  {eq:fs-id1170572560653}

As a result, we are able to represent the function $f(x)=\frac{1}{1-x}$ by the power series

$1+x+{x}^{2}+{x}^{3}+\text{⋯}\;\text{when}\;|x|<1.$  {eq:fs-id1169739062432}

We now show graphically how this series provides a representation for the function $f(x)=\frac{1}{1-x}$ by comparing the graph of *f* with the graphs of several of the partial sums of this infinite series.

:::example {ex:fs-id1170572498722} Graphing a Function and Partial Sums of its Power Series

:::exercise {fs-id1170572553441} type= 
PROBLEM:
Sketch a graph of $f(x)=\frac{1}{1-x}$ and the graphs of the corresponding partial sums ${S}_{N}(x)={\displaystyle \sum_{n=0}^{N} {x}^{n}}$ for $N=2,4,6$ on the interval $(−1,1).$ Comment on the approximation ${S}_{N}$ as *N* increases.
SOLUTION:
From the graph in [ref:CNX_Calc_Figure_10_01_002] you see that as *N* increases, ${S}_{N}$ becomes a better approximation for $f(x)=\frac{1}{1-x}$ for *x* in the interval $(−1,1).$

> FIGURE {fig:CNX_Calc_Figure_10_01_002} src=../../media/CNX_Calc_Figure_10_01_002.jpg
> alt: This figure is the graph of y = 1/(1-x), which is an increasing curve with vertical asymptote at 1. Also on this graph are three partial sums of the function, S sub 6, S sub 4, and S sub 2. These curves, in order, gradually become flatter.
> caption: The graph shows a function and three approximations of it by partial sums of a power series.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571673196} type= 
PROBLEM:
Sketch a graph of $f(x)=\frac{1}{1-{x}^{2}}$ and the corresponding partial sums ${S}_{N}(x)={\displaystyle \sum_{n=0}^{N} {x}^{2n}}$ for $N=2,4,6$ on the interval $(−1,1).$
SOLUTION:

> IMAGE {img:fs-id1170572432262} src=../../media/CNX_Calc_Figure_10_01_003.jpg
> alt: This figure is the graph of y = 1/(1-x^2), which is a curve concave up, symmetrical about the y axis. Also on this graph are three partial sums of the function, S sub 6, S sub 4, and S sub 2. These curves, in order, gradually become flatter.

COMMENTARY: Hint
${S}_{N}(x)=1+{x}^{2}+\text{⋯}+{x}^{2N}=\frac{1-{x}^{2(N+1)}}{1-{x}^{2}}$
:::
:::
Next we consider functions involving an expression similar to the sum of a geometric series and show how to represent these functions using power series.

:::example {ex:fs-id1170572180135} Representing a Function with a Power Series

:::exercise {fs-id1170572180137} type= 
PROBLEM:
Use a power series to represent each of the following functions $f.$ Find the interval of convergence.
a. $f(x)=\frac{1}{1+{x}^{3}}$
b. $f(x)=\frac{{x}^{2}}{4-{x}^{2}}$
SOLUTION:
a. You should recognize this function *f* as the sum of a geometric series, because

$\frac{1}{1+{x}^{3}}=\frac{1}{1-(\text{−}{x}^{3})}.$  {eq:fs-id1170571714224}

Using the fact that, for $|r|<1,\frac{a}{1-r}$ is the sum of the geometric series

${\displaystyle \sum_{n=0}^{\infty} a}{r}^{n}=a+ar+a{r}^{2}+\text{⋯},$  {eq:fs-id1170572355637}

we see that, for $|\text{−}{x}^{3}|<1,$

$\begin{array}{rl}\frac{1}{1+{x}^{3}} & =\frac{1}{1-(\text{−}{x}^{3})} \\ & ={\displaystyle \sum_{n=0}^{\infty} {(\text{−}{x}^{3})}^{n}} \\ & =1-{x}^{3}+{x}^{6}-{x}^{9}+\text{⋯}.\end{array}$  {eq:fs-id1170571595542}

Since this series converges if and only if $|\text{−}{x}^{3}|<1,$ the interval of convergence is $(−1,1),$ and we have

$\frac{1}{1+{x}^{3}}=1-{x}^{3}+{x}^{6}-{x}^{9}+\text{⋯}\;\text{for}\;|x|<1.$  {eq:fs-id1170571565990}

b. This function is not in the exact form of a sum of a geometric series. However, with a little algebraic manipulation, we can relate *f* to a geometric series. By factoring 4 out of the two terms in the denominator, we obtain

$\begin{array}{rl}\frac{{x}^{2}}{4-{x}^{2}} & =\frac{{x}^{2}}{4(1-\frac{{x}^{2}}{4})} \\ & =\frac{{x}^{2}}{4(1-{(\frac{x}{2})}^{2})}.\end{array}$  {eq:fs-id1170572470482}

Therefore, we have

$\begin{array}{rl}\frac{{x}^{2}}{4-{x}^{2}} & =\frac{{x}^{2}}{4(1-{(\frac{x}{2})}^{2})} \\ & =\frac{\frac{{x}^{2}}{4}}{1-{(\frac{x}{2})}^{2}} \\ & ={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2}}{4}{(\frac{x}{2})}^{2n}}.\end{array}$  {eq:fs-id1170571715516}

The series converges as long as $|{(\frac{x}{2})}^{2}|<1$ (note that when $|{(\frac{x}{2})}^{2}|=1$ the series does not converge). Solving this inequality, we conclude that the interval of convergence is $(−2,2)$ and

$\begin{array}{rl}\frac{{x}^{2}}{4-{x}^{2}} & ={\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n+2}}{{4}^{n+1}}} \\ & =\frac{{x}^{2}}{4}+\frac{{x}^{4}}{{4}^{2}}+\frac{{x}^{6}}{{4}^{3}}+\text{⋯}\end{array}$  {eq:fs-id1170571613694}

for $|x|<2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572481630} type= 
PROBLEM:
Represent the function $f(x)=\frac{{x}^{3}}{2-x}$ using a power series and find the interval of convergence.
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n+3}}{{2}^{n+1}}}$ with interval of convergence $(−2,2)$
COMMENTARY: Hint
Rewrite *f* in the form $f(x)=\frac{g(x)}{1-h(x)}$ for some functions *g* and *h*.
:::
:::
In the remaining sections of this chapter, we will show ways of deriving power series representations for many other functions, and how we can make use of these representations to evaluate, differentiate, and integrate various functions.

## Key Concepts {section:key-concepts}
- For a power series centered at $x=a,$ one of the following three properties hold:

1. The power series converges only at $x=a.$ In this case, we say that the radius of convergence is $R=0.$
2. The power series converges for all real numbers *x*. In this case, we say that the radius of convergence is $R=\infty .$
3. There is a real number *R* such that the series converges for $|x-a|<R$ and diverges for $|x-a|>R.$ In this case, the radius of convergence is *R*.

- If a power series converges on a finite interval, the series may or may not converge at the endpoints.
- The ratio test may often be used to determine the radius of convergence.
- The geometric series ${\displaystyle \sum_{n=0}^{\infty} {x}^{n}}=\frac{1}{1-x}$ for $|x|<1$ allows us to represent certain functions using geometric series.

## Key Equations {section:key-equations}

> TABLE {tab:eip-524} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Power series centered at** $\mathbf{x=0}$ | ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}={c}_{0}+{c}_{1}x+{c}_{2}{x}^{2}+\text{⋯}$ |
| **Power series centered at** $\mathbf{x=a}$ | ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}={c}_{0}+{c}_{1}(x-a)+{c}_{2}{(x-a)}^{2}+\text{⋯}$ |

##  {section:section-exercises}
In the following exercises, state whether each statement is true, or give an example to show that it is false.

:::exercise {fs-id1170572553276} type= 
PROBLEM:
If ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ converges, then ${a}_{n}{x}^{n}\to 0$ as $n\to \infty .$
SOLUTION:
True. If a series converges then its terms tend to zero.
:::

:::exercise {fs-id1170572539637} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ converges at $x=0$ for any real numbers ${a}_{n}.$
:::

:::exercise {fs-id1170572618047} type= 
PROBLEM:
Given any sequence ${a}_{n},$ there is always some $R>0,$ possibly very small, such that ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ converges on $(\text{−}R,R).$
SOLUTION:
False. It would imply that ${a}_{n}{x}^{n}\to 0$ for $|x|<R.$ If ${a}_{n}={n}^{n},$ then ${a}_{n}{x}^{n}={(nx)}^{n}$ does not tend to zero for any $x≠0.$
:::

:::exercise {fs-id1170571673676} type= 
PROBLEM:
If ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ has radius of convergence $R>0$ and if $|{b}_{n}|\le |{a}_{n}|$ for all *n*, then the radius of convergence of ${\displaystyle \sum_{n=1}^{\infty} {b}_{n}{x}^{n}}$ is greater than or equal to *R*.
:::

:::exercise {fs-id1170572370004} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(x-3)}^{n}}$ converges at $x=6.$ At which of the following points might the series diverge? Use the fact that if ${\displaystyle \sum {a}_{n}{(x-c)}^{n}}$ converges at *x*, then it converges at any point closer to *c* than *x*.
a. $x=1$
b. $x=2$
c. $x=3$
d. $x=0$
e. $x=5.99$
f. $x=0.000001$
SOLUTION:
It must converge on $(0,6]$ and hence at: a. $x=1;$ b. $x=2;$ c. $x=3;$ d. $x=0;$ e. $x=5.99;$ and f. $x=0.000001.$
:::

:::exercise {fs-id1170572338398} type= 
PROBLEM:
Suppose that ${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(x+1)}^{n}}$ converges at $x=−2.$ At which of the following points must the series also converge? Use the fact that if ${\displaystyle \sum {a}_{n}{(x-c)}^{n}}$ converges at *x*, then it converges at any point closer to *c* than *x*.
a. $x=2$
b. $x=−1$
c. $x=−3$
d. $x=0$
e. $x=0.99$
f. $x=0.000001$
:::
In the following exercises, suppose that $|\frac{{a}_{n+1}}{{a}_{n}}|\to 1$ as $n\to \infty .$ Find the radius of convergence for each series.

:::exercise {fs-id1170572553194} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{2}^{n}{x}^{n}}$
SOLUTION:
$|\frac{{a}_{n+1}{2}^{n+1}{x}^{n+1}}{{a}_{n}{2}^{n}{x}^{n}}|=2|x||\frac{{a}_{n+1}}{{a}_{n}}|\to 2|x|$ so $R=\frac{1}{2}$
:::

:::exercise {fs-id1170572621668} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{a}_{n}{x}^{n}}{{2}^{n}}}$
:::

:::exercise {fs-id1170571728396} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{a}_{n}{\pi}^{n}{x}^{n}}{{e}^{n}}}$
SOLUTION:
$|\frac{{a}_{n+1}{(\frac{\pi}{e})}^{n+1}{x}^{n+1}}{{a}_{n}{(\frac{\pi}{e})}^{n}{x}^{n}}|=\frac{\pi |x|}{e}|\frac{{a}_{n+1}}{{a}_{n}}|\to \frac{\pi |x|}{e}$ so $R=\frac{e}{\pi}$
:::

:::exercise {fs-id1170572166448} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} \frac{{a}_{n}{(−1)}^{n}{x}^{n}}{{10}^{n}}}$
:::

:::exercise {fs-id1170572168767} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(−1)}^{n}{x}^{2n}}$
SOLUTION:
$|\frac{{a}_{n+1}{(−1)}^{n+1}{x}^{2n+2}}{{a}_{n}{(−1)}^{n}{x}^{2n}}|=|{x}^{2}||\frac{{a}_{n+1}}{{a}_{n}}|\to |{x}^{2}|$ so $R=1$
:::

:::exercise {fs-id1170571813746} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{(−4)}^{n}{x}^{2n}}$
:::
In the following exercises, find the radius of convergence *R* and interval of convergence for ${\displaystyle \sum {a}_{n}{x}^{n}}$ with the given coefficients ${a}_{n}.$

:::exercise {fs-id1170572553490} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(2x)}^{n}}{n}}$
SOLUTION:
${a}_{n}=\frac{{2}^{n}}{n}$ so $\frac{{a}_{n+1}x}{{a}_{n}}\to 2x.$ so $R=\frac{1}{2}.$ When $x=\frac{1}{2}$ the series is harmonic and diverges. When $x=-\frac{1}{2}$ the series is alternating harmonic and converges. The interval of convergence is $I=[-\frac{1}{2},\frac{1}{2}).$
:::

:::exercise {fs-id1170572588792} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}\frac{{x}^{n}}{\sqrt{n}}}$
:::

:::exercise {fs-id1170572218394} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n{x}^{n}}{{2}^{n}}}$
SOLUTION:
${a}_{n}=\frac{n}{{2}^{n}}$ so $\frac{{a}_{n+1}x}{{a}_{n}}\to \frac{x}{2}$ so $R=2.$ When $x=\text{±}2$ the series diverges by the divergence test. The interval of convergence is $I=(−2,2).$
:::

:::exercise {fs-id1170572269082} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n{x}^{n}}{{e}^{n}}}$
:::

:::exercise {fs-id1170572305757} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{n}^{2}{x}^{n}}{{2}^{n}}}$
SOLUTION:
${a}_{n}=\frac{{n}^{2}}{{2}^{n}}$ so $R=2.$ When $x=\text{±}2$ the series diverges by the divergence test. The interval of convergence is $I=(−2,2).$
:::

:::exercise {fs-id1170572329088} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{k}^{e}{x}^{k}}{{e}^{k}}}$
:::

:::exercise {fs-id1170572517582} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{\pi}^{k}{x}^{k}}{{k}^{\pi}}}$
SOLUTION:
${a}_{k}=\frac{{\pi}^{k}}{{k}^{\pi}}$ so $R=\frac{1}{\pi}.$ When $x=\text{±}\frac{1}{\pi}$ the series is an absolutely convergent *p*-series. The interval of convergence is $I=[-\frac{1}{\pi},\frac{1}{\pi}].$
:::

:::exercise {fs-id1170572591400} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{n}}{n\text{!}}}$
:::

:::exercise {fs-id1170571715307} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{10}^{n}{x}^{n}}{n\text{!}}}$
SOLUTION:
${a}_{n}=\frac{{10}^{n}}{n\text{!}},\frac{{a}_{n+1}x}{{a}_{n}}=\frac{10x}{n+1}\to 0<1$ so the series converges for all *x* by the ratio test and $I=(\text{−}\infty ,\infty ).$
:::

:::exercise {fs-id1170572449722} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {(−1)}^{n}}\frac{{x}^{n}}{\text{ln}\;(2n)}$
:::
In the following exercises, find the radius of convergence of each series.

:::exercise {fs-id1170572573709} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{{(k\text{!})}^{2}{x}^{k}}{(2k)\text{!}}}$
SOLUTION:
${a}_{k}=\frac{{(k\text{!})}^{2}}{(2k)\text{!}}$ so $\frac{{a}_{k+1}}{{a}_{k}}=\frac{{(k+1)}^{2}}{(2k+2)(2k+1)}\to \frac{1}{4}$ so $R=4$
:::

:::exercise {fs-id1170572567897} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(2n)\text{!}{x}^{n}}{{n}^{2n}}}$
:::

:::exercise {fs-id1170572401996} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{k\text{!}}{1\cdot 3\cdot 5\text{⋯}(2k-1)}}{x}^{k}$
SOLUTION:
${a}_{k}=\frac{k\text{!}}{1\cdot 3\cdot 5\text{⋯}(2k-1)}$ so $\frac{{a}_{k+1}}{{a}_{k}}=\frac{k+1}{2k+1}\to \frac{1}{2}$ so $R=2$
:::

:::exercise {fs-id1170572290095} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} \frac{2\cdot 4\cdot 6\text{⋯}2k}{(2k)\text{!}}{x}^{k}}$
:::

:::exercise {fs-id1170571779959} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{n}}{(\begin{array}{l}2n \\ n\end{array})}}$ where $(\begin{array}{l}n \\ k\end{array})=\frac{n\text{!}}{k\text{!}(n-k)\text{!}}$
SOLUTION:
${a}_{n}=\frac{1}{(\begin{array}{l}2n \\ n\end{array})}$ so $\frac{{a}_{n+1}}{{a}_{n}}=\frac{{((n+1)\text{!})}^{2}}{(2n+2)\text{!}}\;\frac{2n\text{!}}{{(n\text{!})}^{2}}=\frac{{(n+1)}^{2}}{(2n+2)(2n+1)}\to \frac{1}{4}$ so $R=4$
:::

:::exercise {fs-id1170571613632} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {\text{sin}}^{2}n{x}^{n}}$
:::
In the following exercises, use the ratio test to determine the radius of convergence of each series.

:::exercise {fs-id1170571823075} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{(n\text{!})}^{3}}{(3n)\text{!}}{x}^{n}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}=\frac{{(n+1)}^{3}}{(3n+3)(3n+2)(3n+1)}\to \frac{1}{27}$ so $R=27$
:::

:::exercise {fs-id1170572480126} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{2}^{3n}{(n\text{!})}^{3}}{(3n)\text{!}}{x}^{n}}$
:::

:::exercise {fs-id1170572088674} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{n\text{!}}{{n}^{n}}{x}^{n}}$
SOLUTION:
${a}_{n}=\frac{n\text{!}}{{n}^{n}}$ so $\frac{{a}_{n+1}}{{a}_{n}}=\frac{(n+1)\text{!}}{n\text{!}}\;\frac{{n}^{n}}{{(n+1)}^{n+1}}={(\frac{n}{n+1})}^{n}\to \frac{1}{e}$ so $R=e$
:::

:::exercise {fs-id1170572173549} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{(2n)\text{!}}{{n}^{2n}}{x}^{n}}$
:::
In the following exercises, given that $\frac{1}{1-x}={\displaystyle \sum_{n=0}^{\infty} {x}^{n}}$ with convergence in $(−1,1),$ find the power series for each function with the given center *a*, and identify its interval of convergence.

:::exercise {fs-id1170572338277} type= 
PROBLEM:
$f(x)=\frac{1}{x};a=1$ (*Hint:* $\frac{1}{x}=\frac{1}{1-(1-x)})$
SOLUTION:
$f(x)={\displaystyle \sum_{n=0}^{\infty} {(1-x)}^{n}}$ on $I=(0,2)$
:::

:::exercise {fs-id1170572128911} type= 
PROBLEM:
$f(x)=\frac{1}{1-{x}^{2}};a=0$
:::

:::exercise {fs-id1170572570707} type= 
PROBLEM:
$f(x)=\frac{x}{1-{x}^{2}};a=0$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {x}^{2n+1}}$ on $I=(−1,1)$
:::

:::exercise {fs-id1170572284994} type= 
PROBLEM:
$f(x)=\frac{1}{1+{x}^{2}};a=0$
:::

:::exercise {fs-id1170571831335} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}}{1+{x}^{2}};a=0$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {(−1)}^{n}{x}^{2n+2}}$ on $I=(−1,1)$
:::

:::exercise {fs-id1170571774986} type= 
PROBLEM:
$f(x)=\frac{1}{2-x};a=1$
:::

:::exercise {fs-id1170572592199} type= 
PROBLEM:
$f(x)=\frac{1}{1-2x};a=0.$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {2}^{n}{x}^{n}}$ on $(-\frac{1}{2},\frac{1}{2})$
:::

:::exercise {fs-id1170571556923} type= 
PROBLEM:
$f(x)=\frac{1}{1-4{x}^{2}};a=0$
:::

:::exercise {fs-id1170572471618} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}}{1-4{x}^{2}};a=0$
SOLUTION:
${\displaystyle \sum_{n=0}^{\infty} {4}^{n}{x}^{2n+2}}$ on $(-\frac{1}{2},\frac{1}{2})$
:::

:::exercise {fs-id1170571539193} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}}{5-4x+{x}^{2}};a=2$
:::
Use the next exercise to find the radius of convergence of the given series in the subsequent exercises.

:::exercise {fs-id1170572476611} type= 
PROBLEM:
Explain why, if ${|{a}_{n}|}^{1\text{/}n}\to r>0,$ then ${|{a}_{n}{x}^{n}|}^{1\text{/}n}\to |x|r<1$ whenever $|x|<\frac{1}{r}$ and, therefore, the radius of convergence of ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ is $R=\frac{1}{r}.$
SOLUTION:
${|{a}_{n}{x}^{n}|}^{1\text{/}n}={|{a}_{n}|}^{1\text{/}n}|x|\to |x|r$ as $n\to \infty$ and $|x|r<1$ when $|x|<\frac{1}{r}.$ Therefore, ${\displaystyle \sum_{n=1}^{\infty} {a}_{n}{x}^{n}}$ converges when $|x|<\frac{1}{r}$ by the *n*th root test.
:::

:::exercise {fs-id1170571749143} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} \frac{{x}^{n}}{{n}^{n}}}$
:::

:::exercise {fs-id1170571814956} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} {(\frac{k-1}{2k+3})}^{k}{x}^{k}}$
SOLUTION:
${a}_{k}={(\frac{k-1}{2k+3})}^{k}$ so ${({a}_{k})}^{1\text{/}k}\to \frac{1}{2}<1$ so $R=2$
:::

:::exercise {fs-id1170572622962} type= 
PROBLEM:
${\displaystyle \sum_{k=1}^{\infty} {(\frac{2{k}^{2}-1}{{k}^{2}+3})}^{k}{x}^{k}}$
:::

:::exercise {fs-id1170572504560} type= 
PROBLEM:
${\displaystyle \sum_{n=1}^{\infty} {a}_{n}}={({n}^{1\text{/}n}-1)}^{n}{x}^{n}$
SOLUTION:
${a}_{n}={({n}^{1\text{/}n}-1)}^{n}$ so ${({a}_{n})}^{1\text{/}n}\to 0$ so $R=\infty$
:::

:::exercise {fs-id1170572468447} type= 
PROBLEM:
Suppose that $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ such that ${a}_{n}=0$ if *n* is even. Explain why $p(x)=-p(\text{−}x).$
:::

:::exercise {fs-id1170572176149} type= 
PROBLEM:
Suppose that $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ such that ${a}_{n}=0$ if *n* is odd. Explain why $p(x)=p(\text{−}x).$
SOLUTION:
We can rewrite $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{2n+1}{x}^{2n+1}}$ and $p(x)=p(\text{−}x)$ since only even powers of $x$ remain, $p(x)$ is an even function, for which, by definition $p(x)=p(–x)$.
:::

:::exercise {fs-id1170571783215} type= 
PROBLEM:
Suppose that $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges on $(−1,1].$ Find the interval of convergence of $p(Ax).$
:::

:::exercise {fs-id1170571526581} type= 
PROBLEM:
Suppose that $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ converges on $(−1,1].$ Find the interval of convergence of $p(2x-1).$
SOLUTION:
If $x\in [0,1],$ then $y=2x-1\in [−1,1]$ so $p(2x-1)=p(y)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{y}^{n}}$ converges.
:::
In the following exercises, suppose that $p(x)={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ satisfies $\lim_{n\to \infty}\frac{{a}_{n+1}}{{a}_{n}}=1$ where ${a}_{n}\ge 0$ for each *n*. State whether each series converges on the full interval $(−1,1),$ or if there is not enough information to draw a conclusion. Use the comparison test when appropriate.

:::exercise {fs-id1170572404939} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{2n}}$
:::

:::exercise {fs-id1170572625652} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{2n}{x}^{2n}}$
SOLUTION:
Converges on $(−1,1)$ by the ratio test
:::

:::exercise {fs-id1170571731213} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{2n}{x}^{n}}\;(Hint\text{:}\;x=\text{±}\sqrt{{x}^{2}})$
:::

:::exercise {fs-id1170572593782} type= 
PROBLEM:
${\displaystyle \sum_{n=0}^{\infty} {a}_{{n}^{2}}{x}^{{n}^{2}}}$ (*Hint:* Let ${b}_{k}={a}_{k}$ if $k={n}^{2}$ for some *n*, otherwise ${b}_{k}=0.)$
SOLUTION:
Consider the series ${\displaystyle \sum {b}_{k}{x}^{k}}$ where ${b}_{k}={a}_{k}$ if $k={n}^{2}$ and ${b}_{k}=0$ otherwise. Then ${b}_{k}\le {a}_{k}$ and so the series converges on $(−1,1)$ by the comparison test.
:::

:::exercise {fs-id1170571595128} type= 
PROBLEM:
Suppose that $p(x)$ is a polynomial of degree *N*. Find the radius and interval of convergence of ${\displaystyle \sum_{n=1}^{\infty} p(n){x}^{n}}.$
:::

:::exercise {fs-id1170572388866} type= 
PROBLEM:
**[T]** Plot the graphs of $\frac{1}{1-x}$ and of the partial sums ${S}_{N}={\displaystyle \sum_{n=0}^{N} {x}^{n}}$ for $n=10,20,30$ on the interval $[−0.99,0.99].$ Comment on the approximation of $\frac{1}{1-x}$ by ${S}_{N}$ near $x=−1$ and near $x=1$ as *N* increases.
SOLUTION:

> IMAGE {img:fs-id1170572387335} src=../../media/CNX_Calc_Figure_10_01_201.jpg
> alt: This figure is the graph of y = 1/(1-x), which is an increasing curve with vertical asymptote at 1.

The approximation is more accurate near $x=−1.$ The partial sums follow $\frac{1}{1-x}$ more closely as *N* increases but are never accurate near $x=1$ since the series diverges there.
:::

:::exercise {fs-id1170572387392} type= 
PROBLEM:
**[T]** Plot the graphs of $\text{−}\text{ln}\;(1-x)$ and of the partial sums ${S}_{N}={\displaystyle \sum_{n=1}^{N} \frac{{x}^{n}}{n}}$ for $n=10,50,100$ on the interval $[−0.99,0.99].$ Comment on the behavior of the sums near $x=−1$ and near $x=1$ as *N* increases.
:::

:::exercise {fs-id1170571798886} type= 
PROBLEM:
**[T]** Plot the graphs of the partial sums ${S}_{n}={\displaystyle \sum_{n=1}^{N} \frac{{x}^{n}}{{n}^{2}}}$ for $n=10,50,100$ on the interval $[−0.99,0.99].$ Comment on the behavior of the sums near $x=−1$ and near $x=1$ as *N* increases.
SOLUTION:

> IMAGE {img:fs-id1170572370119} src=../../media/CNX_Calc_Figure_10_01_203.jpg
> alt: This figure is the graph of y = -ln(1-x) which is an increasing curve passing through the origin.

The approximation appears to stabilize quickly near both $x=\text{±}1.$
:::

:::exercise {fs-id1170571724214} type= 
PROBLEM:
**[T]** Plot the graphs of the partial sums ${S}_{N}={\displaystyle \sum_{n=1}^{N} \text{sin}\;n{x}^{n}}$ for $n=10,50,100$ on the interval $[−0.99,0.99].$ Comment on the behavior of the sums near $x=−1$ and near $x=1$ as *N* increases.
:::

:::exercise {fs-id1170571586109} type= 
PROBLEM:
**[T]** Plot the graphs of the partial sums ${S}_{N}={\displaystyle \sum_{n=0}^{N} {(−1)}^{n}\frac{{x}^{2n+1}}{(2n+1)\text{!}}}$ for $n=3,5,10$ on the interval $[−2\pi ,2\pi ].$ Comment on how these plots approximate $\text{sin}\;x$ as *N* increases.
SOLUTION:

> IMAGE {img:fs-id1170571715448} src=../../media/CNX_Calc_Figure_10_01_205.jpg
> alt: This figure is the graph of the partial sums of (-1)^n times x^(2n+1) divided by (2n+1)! For n=3,5,10. The curves approximate the sine curve close to the origin and then separate as the curves move away from the origin.

The polynomial curves have roots close to those of $\text{sin}\;x$ up to their degree and then the polynomials diverge from $\text{sin}\;x.$
:::

:::exercise {fs-id1170571715481} type= 
PROBLEM:
**[T]** Plot the graphs of the partial sums ${S}_{N}={\displaystyle \sum_{n=0}^{N} {(−1)}^{n}\frac{{x}^{2n}}{(2n)\text{!}}}$ for $n=3,5,10$ on the interval $[−2\pi ,2\pi ].$ Comment on how these plots approximate $\text{cos}\;x$ as *N* increases.
:::

## Glossary
- {def} **interval of convergence**: the set of real numbers *x* for which a power series converges
- {def} **power series**: a series of the form ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{x}^{n}}$ is a power series centered at $x=0\text{;}$ a series of the form ${\displaystyle \sum_{n=0}^{\infty} {c}_{n}{(x-a)}^{n}}$ is a power series centered at $x=a$
- {def} **radius of convergence**: if there exists a real number $R>0$ such that a power series centered at $x=a$ converges for $|x-a|<R$ and diverges for $|x-a|>R,$ then *R* is the radius of convergence; if the power series only converges at $x=a,$ the radius of convergence is $R=0\text{;}$ if the power series converges for all real numbers *x*, the radius of convergence is $R=\infty$

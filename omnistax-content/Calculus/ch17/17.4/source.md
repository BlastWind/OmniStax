# Series Solutions of Differential Equations

## Learning Objectives {section:learning-objectives}
- Use power series to solve first-order and second-order differential equations.

In [Introduction to Power Series](module:m53760), we studied how functions can be represented as power series, $y(x)=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}.$ We also saw that we can find series representations of the derivatives of such functions by differentiating the {index:power series} term by term. This gives ${y}^{'}(x)={\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}$ and ${y}^{''}(x)={\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}.$ In some cases, these power series representations can be used to find solutions to differential equations.
Be aware that this subject is given only a very brief treatment in this text. Most introductory differential equations textbooks include an entire chapter on power series solutions. This text has only a single section on the topic, so several important issues are not addressed here, particularly issues related to existence of solutions. The examples and exercises in this section were chosen for which power solutions exist. However, it is not always the case that power solutions exist. Those of you interested in a more rigorous treatment of this topic should consult a differential equations text.

:::note [problem-solving] Finding Power Series Solutions to Differential Equations
1. Assume the differential equation has a solution of the form $y(x)=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}.$
2. Differentiate the power series term by term to get ${y}^{'}(x)={\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}$ and ${y}^{''}(x)={\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}.$
3. Substitute the power series expressions into the differential equation.
4. Re-index sums as necessary to combine terms and simplify the expression.
5. Equate coefficients of like powers of $x$ to determine values for the coefficients ${a}_{n}$ in the power series.
6. Substitute the coefficients back into the power series and write the solution.
:::

:::example {ex:fs-id1170571157050} Series Solutions to Differential Equations

:::exercise {fs-id1170571137266} type= 
PROBLEM:
Find a power series solution for the following differential equations.
a. ${y}^{''}-y=0$
b. $({x}^{2}-1){y}^{''}+6x{y}^{'}+4y=−4$
SOLUTION:
a. Assume $y(x)=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}$ (step 1). Then, ${y}^{'}(x)={\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}$ and ${y}^{''}(x)={\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}$ (step 2). We want to find values for the coefficients ${a}_{n}$ such that

$\begin{array}{rll}{y}^{''}-y & = & 0 \\ {\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}-\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n} & = & 0\;\text{(step 3).}\end{array}$  {eq:fs-id1170571347900}

We want the indices on our sums to match so that we can express them using a single summation. That is, we want to rewrite the first summation so that it starts with $n=0.$

To re-index the first term, replace *n* with $n+2$ inside the sum, and change the lower summation limit to $n=0.$ We get

${\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}={\displaystyle \sum_{n=0}^{\infty} (n+2)}(n+1){a}_{n+2}{x}^{n}.$  {eq:fs-id1170571290214}

This gives

$\begin{array}{rll}{\displaystyle \sum_{n=0}^{\infty} (n+2)}(n+1){a}_{n+2}{x}^{n}-\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n} & = & 0 \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[(n+2)(n+1){a}_{n+2}-{a}_{n}]{x}^{n} & = & 0\;\text{(step 4).}\end{array}$  {eq:fs-id1170573418852}

Because power series expansions of functions are unique, this equation can be true only if the coefficients of each power of *x* are zero. So we have

$(n+2)(n+1){a}_{n+2}-{a}_{n}=0\;\text{for}\;n=0,1,2\text{,….}$  {eq:fs-id1170573363165}

This recurrence relationship allows us to express each coefficient ${a}_{n}$ in terms of the coefficient two terms earlier. This yields one expression for even values of *n* and another expression for odd values of *n*. Looking first at the equations involving even values of *n*, we see that

$\begin{array}{rll}{a}_{2} & = & \frac{{a}_{0}}{2} \\ {a}_{4} & = & \frac{{a}_{2}}{4⋅3}=\frac{{a}_{0}}{4!} \\ {a}_{6} & = & \frac{{a}_{4}}{6⋅5}=\frac{{a}_{0}}{6!} \\ & \text{⋮.} & \end{array}$  {eq:fs-id1170571117990}

Thus, in general, when *n* is even, ${a}_{n}=\frac{{a}_{0}}{n!}$ (step 5).

For the equations involving odd values of *n*, we see that

$\begin{array}{rll}{a}_{3} & = & \frac{{a}_{1}}{3⋅2}=\frac{{a}_{1}}{3!} \\ {a}_{5} & = & \frac{{a}_{3}}{5⋅4}=\frac{{a}_{1}}{5!} \\ {a}_{7} & = & \frac{{a}_{5}}{7⋅6}=\frac{{a}_{1}}{7!} \\ & \text{⋮.} & \end{array}$  {eq:fs-id1170573367893}

Therefore, in general, when *n* is odd, ${a}_{n}=\frac{{a}_{1}}{n!}$ (step 5 continued).

Putting this together, we have

$\begin{array}{rl}y(x) & ={\displaystyle \sum_{n=0}^{\infty} {a}_{n}}{x}^{n} \\ & ={a}_{0}+{a}_{1}x+\frac{{a}_{0}}{2}{x}^{2}+\frac{{a}_{1}}{3!}{x}^{3}+\frac{{a}_{0}}{4!}{x}^{4}+\frac{{a}_{1}}{5!}{x}^{5}+\text{⋯.}\end{array}$  {eq:fs-id1170573331507}

Re-indexing the sums to account for the even and odd values of *n* separately, we obtain

$y(x)={a}_{0}\overset{\infty}{\underset{k=0}{{\displaystyle \sum}}}\frac{1}{(2k)!}{x}^{2k}+{a}_{1}\overset{\infty}{\underset{k=0}{{\displaystyle \sum}}}\frac{1}{(2k+1)!}{x}^{2k+1}\;\text{(step 6).}$  {eq:fs-id1170573396635}

**Analysis for part a.**

As expected for a second-order differential equation, this solution depends on two arbitrary constants. However, note that our differential equation is a constant-coefficient differential equation, yet the power series solution does not appear to have the familiar form (containing exponential functions) that we are used to seeing. Furthermore, since $y(x)={c}_{1}{e}^{x}+{c}_{2}{e}^{\text{−}x}$ is the general solution to this equation, we must be able to write any solution in this form, and it is not clear whether the power series solution we just found can, in fact, be written in that form.

Fortunately, after writing the power series representations of ${e}^{x}$ and ${e}^{\text{−}x},$ and doing some algebra, we find that if we choose

${c}_{0}=\frac{({a}_{0}+{a}_{1})}{2}, {c}_{1}=\frac{({a}_{0}-{a}_{1})}{2},$  {eq:fs-id1170573424969}

we then have ${a}_{0}={c}_{0}+{c}_{1}$ and${a}_{1}={c}_{0}-{c}_{1},$ and

$\begin{array}{rl}y(x) & ={a}_{0}+{a}_{1}x+\frac{{a}_{0}}{2}{x}^{2}+\frac{{a}_{1}}{3!}{x}^{3}+\frac{{a}_{0}}{4!}{x}^{4}+\frac{{a}_{1}}{5!}{x}^{5}+\text{⋯} \\ & =({c}_{0}+{c}_{1})+({c}_{0}-{c}_{1})x+\frac{({c}_{0}+{c}_{1})}{2}{x}^{2}+\frac{({c}_{0}-{c}_{1})}{3!}{x}^{3}+\frac{({c}_{0}+{c}_{1})}{4!}{x}^{4}+\frac{({c}_{0}-{c}_{1})}{5!}{x}^{5}+\text{⋯} \\ & ={c}_{0}{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{n}}{n!}}+{c}_{1}{\displaystyle \sum_{n=0}^{\infty} \frac{{(\text{−}x)}^{n}}{n!}} \\ & ={c}_{0}{e}^{x}+{c}_{1}{e}^{\text{−}x}.\end{array}$  {eq:fs-id1170571232470}

So we have, in fact, found the same general solution. Note that this choice of ${c}_{1}$ and ${c}_{2}$ is not obvious. This is a case when we know what the answer should be, and have essentially “reverse-engineered” our choice of coefficients.
b. Assume $y(x)=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}$ (step 1). Then, ${y}^{'}(x)={\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}$ and ${y}^{''}(x)={\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}$ (step 2). We want to find values for the coefficients ${a}_{n}$ such that

$\begin{array}{rll} \\ \\ ({x}^{2}-1){y}^{''}+6x{y}^{'}+4y & = & −4 \\ ({x}^{2}-1){\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}+6x{\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}+4{\displaystyle \sum_{n=0}^{\infty} {a}_{n}}{x}^{n} & = & −4 \\ {x}^{2}{\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}-{\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}+6x{\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}+4{\displaystyle \sum_{n=0}^{\infty} {a}_{n}}{x}^{n} & = & −4.\end{array}$  {eq:fs-id1170573297674}

Taking the external factors inside the summations, we get

${\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n}-{\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}+{\displaystyle \sum_{n=1}^{\infty} 6n}{a}_{n}{x}^{n}+{\displaystyle \sum_{n=0}^{\infty} 4{a}_{n}}{x}^{n}=−4\;\text{(step 3).}$  {eq:fs-id1170573238750}

Now, in the first summation, we see that when $n=0$ or $n=1,$ the term evaluates to zero, so we can add these terms back into our sum to get

$\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}n(n-1){a}_{n}{x}^{n}=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}n(n-1){a}_{n}{x}^{n}.$  {eq:fs-id1170570990762}

Similarly, in the third term, we see that when $n=0,$ the expression evaluates to zero, so we can add that term back in as well. We have

${\displaystyle \sum_{n=1}^{\infty} 6}n{a}_{n}{x}^{n}={\displaystyle \sum_{n=0}^{\infty} 6}n{a}_{n}{x}^{n}.$  {eq:fs-id1170573426320}

Then, we need only shift the indices in our second term. We get

${\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}={\displaystyle \sum_{n=0}^{\infty} (n+2)}(n+1){a}_{n+2}{x}^{n}.$  {eq:fs-id1170573429002}

Thus, we have

$\begin{array}{rll}{\displaystyle \sum_{n=0}^{\infty} n}(n-1){a}_{n}{x}^{n}-{\displaystyle \sum_{n=0}^{\infty} (n+2)}(n+1){a}_{n+2}{x}^{n}+{\displaystyle \sum_{n=0}^{\infty} 6n}{a}_{n}{x}^{n}+{\displaystyle \sum_{n=0}^{\infty} 4{a}_{n}}{x}^{n} & = & −4\;\text{(step 4).} \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[n(n-1){a}_{n}-(n+2)(n+1){a}_{n+2}+6n{a}_{n}+4{a}_{n}]{x}^{n} & = & −4 \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[({n}^{2}-n){a}_{n}+6n{a}_{n}+4{a}_{n}-(n+2)(n+1){a}_{n+2}]{x}^{n} & = & −4 \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[{n}^{2}{a}_{n}+5n{a}_{n}+4{a}_{n}-(n+2)(n+1){a}_{n+2}]{x}^{n} & = & −4 \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[({n}^{2}+5n+4){a}_{n}-(n+2)(n+1){a}_{n+2}]{x}^{n} & = & −4 \\ \overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}[(n+4)(n+1){a}_{n}-(n+2)(n+1){a}_{n+2}]{x}^{n} & = & −4\end{array}$  {eq:fs-id1170571158862}

Looking at the coefficients of each power of *x*, we see that the constant term must be equal to $−4,$ and the coefficients of all other powers of *x* must be zero. Then, looking first at the constant term,

$\begin{array}{rll}4{a}_{0}-2{a}_{2} & = & −4 \\ {a}_{2} & = & 2{a}_{0}+2\;\text{(step 3).}\end{array}$  {eq:fs-id1170573518893}

For $n\ge 1,$ we have

$\begin{array}{rll}(n+4)(n+1){a}_{n}-(n+2)(n+1){a}_{n+2} & = & 0 \\ (n+1)[(n+4){a}_{n}-(n+2){a}_{n+2}] & = & 0.\end{array}$  {eq:fs-id1170571136574}

Since $n\ge 1,$ $n+1≠0,$ we see that

$(n+4){a}_{n}-(n+2){a}_{n+2}=0$  {eq:fs-id1170571247203}

and thus

${a}_{n+2}=\frac{n+4}{n+2}\;{a}_{n}.$  {eq:fs-id1170571284769}

For even values of *n*, we have

$\begin{array}{rll}{a}_{4} & = & \frac{6}{4}(2{a}_{0}+2)=3{a}_{0}+3 \\ {a}_{6} & = & \frac{8}{6}(3{a}_{0}+3)=4{a}_{0}+4 \\ & \text{⋮.} & \end{array}$  {eq:fs-id1170573718932}

In general, ${a}_{2k}=(k+1)({a}_{0}+1)$ (step 5).

For odd values of *n*, we have

$\begin{array}{rll}{a}_{3} & = & \frac{5}{3}\;{a}_{1} \\ {a}_{5} & = & \frac{7}{5}\;{a}_{3}=\frac{7}{3}\;{a}_{1} \\ {a}_{7} & = & \frac{9}{7}\;{a}_{5}=\frac{9}{3}\;{a}_{1}=3{a}_{1} \\ & \text{⋮.} & \end{array}$  {eq:fs-id1170571118634}

In general, ${a}_{2k+1}=\frac{2k+3}{3}\;{a}_{1}$ (step 5 continued).

Putting this together, we have

$y(x)={\displaystyle \sum_{k=0}^{\infty} (k+1)({a}_{0}+1)}{x}^{2k}+{\displaystyle \sum_{k=0}^{\infty} (\frac{2k+3}{3}){a}_{1}}{x}^{2k+1}\;\text{(step 6).}$  {eq:fs-id1170571376186}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571291314} type= 
PROBLEM:
Find a power series solution for the following differential equations.
a. ${y}^{'}+2xy=0$
b. $(x+1){y}^{'}=3y$
SOLUTION:
a. $y(x)={a}_{0}\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}\frac{{(−1)}^{n}}{n!}{x}^{2n}={a}_{0}{e}^{\text{−}{x}^{2}}$
b. $y(x)={a}_{0}{(x+1)}^{3}$
COMMENTARY: Hint
Follow the problem-solving strategy.
:::
:::
We close this section with a brief introduction to {index:Bessel functions}. Complete treatment of Bessel functions is well beyond the scope of this course, but we get a little taste of the topic here so we can see how series solutions to differential equations are used in real-world applications. The Bessel equation of order *n* is given by

${x}^{2}{y}^{''}+x{y}^{'}+({x}^{2}-{n}^{2})y=0.$  {eq:fs-id1170573575187}

This equation arises in many physical applications, particularly those involving cylindrical coordinates, such as the vibration of a circular drum head and transient heating or cooling of a cylinder. In the next example, we find a power series solution to the Bessel equation of order 0.

:::example {ex:fs-id1170571370995} Power Series Solution to the Bessel Equation

:::exercise {fs-id1170573593823} type= 
PROBLEM:
Find a power series solution to the Bessel equation of order 0 and graph the solution.
SOLUTION:
The Bessel equation of order 0 is given by

${x}^{2}{y}^{''}+x{y}^{'}+{x}^{2}y=0.$  {eq:fs-id1170573506398}

We assume a solution of the form $y=\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}.$ Then ${y}^{'}(x)={\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}$ and ${y}^{''}(x)={\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}.$ Substituting this into the differential equation, we get

$\begin{array}{lll} \\ \\ {x}^{2}{\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n-2}+x{\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n-1}+{x}^{2}\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n}=0 & & \text{Substitution.} \\ {\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n}+{\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n}+\overset{\infty}{\underset{n=0}{{\displaystyle \sum}}}{a}_{n}{x}^{n+2}=0 & & \text{Bring external factors within sums.} \\ {\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n}+{\displaystyle \sum_{n=1}^{\infty} n}{a}_{n}{x}^{n}+\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}{a}_{n-2}{x}^{n}=0 & & \text{Re-index third sum.} \\ {\displaystyle \sum_{n=2}^{\infty} n}(n-1){a}_{n}{x}^{n}+{a}_{1}x+{\displaystyle \sum_{n=2}^{\infty} n}{a}_{n}{x}^{n}+\overset{\infty}{\underset{n=2}{{\displaystyle \sum}}}{a}_{n-2}{x}^{n}=0 & & \text{Separate}\;n=1\;\text{term from second sum.} \\ {a}_{1}x+{\displaystyle \sum_{n=2}^{\infty} [n(n-1){a}_{n}+n{a}_{n}+{a}_{n-2}]}{x}^{n}=0 & & \text{Collect summation terms.} \\ {a}_{1}x+{\displaystyle \sum_{n=2}^{\infty} [({n}^{2}-n){a}_{n}+n{a}_{n}+{a}_{n-2}]}{x}^{n}=0 & & \text{Multiply through in first term.} \\ {a}_{1}x+{\displaystyle \sum_{n=2}^{\infty} [{n}^{2}{a}_{n}+{a}_{n-2}]}{x}^{n}=0. & & \text{Simplify.}\end{array}$  {eq:fs-id1170573419381}

Then, ${a}_{1}=0,$ and for $n\ge 2,$

$\begin{array}{l}{n}^{2}{a}_{n}+{a}_{n-2}=0 \\ \\ {a}_{n}=-\frac{1}{{n}^{2}}\;{a}_{n-2}.\end{array}$  {eq:fs-id1170573515929}

Because ${a}_{1}=0,$ all odd terms are zero. Then, for even values of *n*, we have

$\begin{array}{rll}{a}_{2} & = & -\frac{1}{{2}^{2}}\;{a}_{0} \\ {a}_{4} & = & -\frac{1}{{4}^{2}}\;{a}_{2}=\frac{1}{{4}^{2}⋅{2}^{2}}\;{a}_{0}. \\ {a}_{6} & = & -\frac{1}{{6}^{2}}\;{a}_{4}=-\frac{1}{{6}^{2}⋅{4}^{2}⋅{2}^{2}}\;{a}_{0}\end{array}$  {eq:fs-id1170571293760}

In general,

${a}_{2k}=\frac{{(−1)}^{k}}{{(2)}^{2k}{(k!)}^{2}}\;{a}_{0}.$  {eq:fs-id1170573551070}

Thus, we have

$$ y(x)={a}_{0}\overset{\infty}{\underset{k=0}{{\displaystyle \sum}}}\frac{{(−1)}^{k}}{{(2)}^{2k}{(k!)}^{2}}{x}^{2k}. $$  {eq:eip-id1171281740360}

The graph appears below for ${a}_{0}=1$.

> IMAGE {img:fs-id1170573525694} src=../../media/CNX_Calc_Figure_17_04_001.jpg
> alt: This figure is the graph of a function. The graph is oscillating with the highest amplitude above the origin. The horizontal axis is labeled in increments of 2.5. The vertical axis is labeled in increments of 0.2.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571047646} type= 
PROBLEM:
Verify that the expression found in [ref:fs-id1170571370995] is a solution to the Bessel equation of order 0.
COMMENTARY: Hint
Differentiate the power series term by term and substitute it into the differential equation.
:::
:::

## Key Concepts {section:key-concepts}
- Power series representations of functions can sometimes be used to find solutions to differential equations.
- Differentiate the power series term by term and substitute into the differential equation to find relationships between the power series coefficients.

##  {section:section-exercises}
Find a power series solution for the following differential equations.

:::exercise {fs-id1170573505926} type= 
PROBLEM:
${y}^{''}+6{y}^{'}=0$
:::

:::exercise {fs-id1170571118620} type= 
PROBLEM:
$5{y}^{''}+{y}^{'}=0$
SOLUTION:
$y={a}_{0}+5{a}_{1}{\displaystyle \sum_{n=1}^{\infty} \frac{{(\text{−}x\text{/}5)}^{n}}{n!}={c}_{0}+5{c}_{1}{e}^{\text{−}x\text{/}5}}$
:::

:::exercise {fs-id1170571046582} type= 
PROBLEM:
${y}^{''}+25y=0$
:::

:::exercise {fs-id1170571246765} type= 
PROBLEM:
${y}^{''}-y=0$
SOLUTION:
$y={a}_{0}{\displaystyle \sum_{n=0}^{\infty} \frac{{(x)}^{2n}}{(2n)!}}+{a}_{1}{\displaystyle \sum_{n=0}^{\infty} \frac{{(x)}^{2n+1}}{(2n+1)!}}$
:::

:::exercise {fs-id1170571105758} type= 
PROBLEM:
$2{y}^{'}+y=0$
:::

:::exercise {fs-id1170571214796} type= 
PROBLEM:
${y}^{'}-2xy=0$
SOLUTION:
$y={a}_{0}{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n}}{n!}={c}_{0}{e}^{{x}^{2}}}$
:::

:::exercise {fs-id1170573720316} type= 
PROBLEM:
$(x-7){y}^{'}+2y=0$
:::

:::exercise {fs-id1170571138039} type= 
PROBLEM:
${y}^{''}-x{y}^{'}-y=0$
SOLUTION:
$y={a}_{0}{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n}}{{2}^{n}n!}+{a}_{1}{\displaystyle \sum_{n=0}^{\infty} \frac{{x}^{2n+1}}{1⋅3⋅5⋅7⋯(2n+1)}}}$
:::

:::exercise {fs-id1170571450727} type= 
PROBLEM:
$(1+{x}^{2}){y}^{''}-4x{y}^{'}+6y=0$
:::

:::exercise {fs-id1170571131595} type= 
PROBLEM:
${x}^{2}{y}^{''}-x{y}^{'}-3y=0$
SOLUTION:
$y={c}_{0}{x}^{3}+\frac{{c}_{1}}{x}$
:::

:::exercise {fs-id1170571133048} type= 
PROBLEM:
${y}^{''}-8{y}^{'}=0,\hspace{2em}y(0)=−2,\; \;{y}^{'}(0)=10$
:::

:::exercise {fs-id1170571203615} type= 
PROBLEM:
${y}^{''}-2xy=0,\hspace{2em}y(0)=1,\; \;{y}^{'}(0)=−3$
SOLUTION:
$y=1-3x+\frac{2{x}^{3}}{3!}-\frac{12{x}^{4}}{4!}+\frac{16{x}^{6}}{6!}-\frac{120{x}^{7}}{7!}+\text{⋯}$
:::

:::exercise {fs-id1170571021687} type= 
PROBLEM:
The differential equation ${x}^{2}{y}^{''}+x{y}^{'}+({x}^{2}-1)y=0$ is a Bessel equation of order 1. Use a power series of the form $y={\displaystyle \sum_{n=0}^{\infty} {a}_{n}{x}^{n}}$ to find the solution.
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*? Justify your answer with a proof or a counterexample.

:::exercise {fs-id1170573739219} type= 
PROBLEM:
If $y$ and $z$ are both solutions to ${y}^{''}+2{y}^{'}+y=0,$ then $y+z$ is also a solution.
SOLUTION:
True
:::

:::exercise {fs-id1170571337322} type= 
PROBLEM:
The following system of algebraic equations has a unique solution:
$\begin{array}{l}6{z}_{1}+3{z}_{2}=8 \\ 4{z}_{1}+2{z}_{2}=4.\end{array}$
:::

:::exercise {fs-id1170571244243} type= 
PROBLEM:
$y={e}^{x}\text{cos}(3x)+{e}^{x}\text{sin}(2x)$ is a solution to the second-order differential equation ${y}^{''}+2y'+10=0.$
SOLUTION:
False
:::

:::exercise {fs-id1170571092923} type= 
PROBLEM:
To find the particular solution to a second-order differential equation, you need one initial condition.
:::
Classify the differential equation. Determine the order, whether it is linear and, if linear, whether the differential equation is homogeneous or nonhomogeneous. If the equation is second-order homogeneous and linear, find the characteristic equation.

:::exercise {fs-id1170571454358} type= 
PROBLEM:
${y}^{''}-2y=0$
SOLUTION:
second order, linear, homogeneous, ${λ}^{2}-2=0$
:::

:::exercise {fs-id1170571368964} type= 
PROBLEM:
${y}^{''}-3y+2y=\text{cos}\;(t)$
:::

:::exercise {fs-id1170571021351} type= 
PROBLEM:
${(\frac{dy}{dt})}^{2}+y{y}^{'}=1$
SOLUTION:
first order, nonlinear, nonhomogeneous
:::

:::exercise {fs-id1170571408159} type= 
PROBLEM:
$\frac{{d}^{2}y}{d{t}^{2}}+t\frac{dy}{dt}+{\text{sin}}^{2}(t)y={e}^{t}$
:::
For the following problems, find the general solution.

:::exercise {fs-id1170571146398} type= 
PROBLEM:
${y}^{''}+9y=0$
SOLUTION:
$y={c}_{1}\text{cos}\;(3x)+{c}_{2}\text{sin}\;(3x)$
:::

:::exercise {fs-id1170571080113} type= 
PROBLEM:
${y}^{''}+2{y}^{'}+y=0$
:::

:::exercise {fs-id1170571145615} type= 
PROBLEM:
${y}^{''}-2{y}^{'}+10y=4x$
SOLUTION:
$y={c}_{1}{e}^{x}\text{cos}\;(3x)+{c}_{2}{e}^{x}\text{sin}\;(3x)+\frac{2}{5}x+\frac{2}{25}$
:::

:::exercise {fs-id1170573544055} type= 
PROBLEM:
${y}^{''}=\text{cos}\;(x)+2{y}^{'}+y$
:::

:::exercise {fs-id1170571461823} type= 
PROBLEM:
${y}^{''}+5y'+4y=x+{e}^{2x}$
SOLUTION:
$y={c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{−4x}+\frac{x}{4}+\frac{{e}^{2x}}{18}-\frac{5}{16}$
:::

:::exercise {fs-id1170571281501} type= 
PROBLEM:
${y}^{''}=3{y}^{'}+x{e}^{\text{−}x}$
:::

:::exercise {fs-id1170573549277} type= 
PROBLEM:
${y}^{''}-{x}^{2}=−3{y}^{'}-\frac{9}{4}y+3x$
SOLUTION:
$y={c}_{1}{e}^{(−3\text{/}2)x}+{c}_{2}x{e}^{(−3\text{/}2)x}+\frac{4}{9}{x}^{2}+\frac{4}{27}x-\frac{16}{27}$
:::

:::exercise {fs-id1170571281415} type= 
PROBLEM:
${y}^{''}=2\;\text{cos}\;x+{y}^{'}-y$
:::
For the following problems, find the solution to the initial-value problem, if possible.

:::exercise {fs-id1170571415759} type= 
PROBLEM:
${y}^{''}+4{y}^{'}+6y=0,$ $y(0)=0,$ ${y}^{'}(0)=\sqrt{2}$
SOLUTION:
$y={e}^{−2x}\text{sin}\;(\sqrt{2}x)$
:::

:::exercise {fs-id1170571378640} type= 
PROBLEM:
${y}^{''}=3y-\text{cos}\;(x),$ $y(0)=\frac{9}{4},$ ${y}^{'}(0)=0$
:::
For the following problems, find the solution to the boundary-value problem, if possible.

:::exercise {fs-id1170571105139} type= 
PROBLEM:
$4{y}^{'}=−6y+2{y}^{''},$ $y(0)=0,$ $y(1)=1$
SOLUTION:
$y=\frac{{e}^{1-x}}{{e}^{4}-1}({e}^{4x}-1)$
:::

:::exercise {fs-id1170571207012} type= 
PROBLEM:
${y}^{''}=3x-y-{y}^{'},$ $y(0)=−3,$ $y(1)=0$
:::
For the following problem, set up and solve the differential equation.

:::exercise {fs-id1170571160625} type= 
PROBLEM:
The motion of a swinging pendulum for small angles $\theta$ can be approximated by $\frac{{d}^{2}\theta}{d{t}^{2}}+\frac{g}{L}\theta =0,$ where $\theta$ is the angle the pendulum makes with respect to a vertical line, *g* is the acceleration resulting from gravity, and *L* is the length of the pendulum. Find the equation describing the angle of the pendulum at time $t,$ assuming an initial displacement of ${\theta}_{0}$ and an initial velocity of zero.
SOLUTION:
$\theta (t)={\theta}_{0}\text{cos}\;(\sqrt{\frac{g}{l}}L)$
:::
The following problems consider the “beats” that occur when the forcing term of a differential equation causes “slow” and “fast” amplitudes. Consider the general differential equation$a{y}^{''}+by=\text{cos}(\omega t)$ that governs undamped motion. Assume that $\sqrt{\frac{b}{a}}≠\omega \text{.}$

:::exercise {fs-id1170571506095} type= 
PROBLEM:
Find the general solution to this equation (*Hint:* call ${\omega}_{0}=\sqrt{b\text{/}a}$).
:::

:::exercise {fs-id1170571287905} type= 
PROBLEM:
Assuming the system starts from rest, show that the particular solution can be written as $y=\frac{2}{a({\omega}_{0}{}^{2}-{\omega}^{2})}\;\text{sin}\;(\frac{{\omega}_{0}-\omega t}{2})\;\text{sin}\;(\frac{{\omega}_{0}+\omega t}{2}).$
:::

:::exercise {fs-id1170571409967} type= 
PROBLEM:
**[T]** Using your solutions derived earlier, plot the solution to the system $2{y}^{''}+9y=\text{cos}(2t)$ over the interval $t=[−50,50].$ Find, analytically, the period of the fast and slow amplitudes.
:::
For the following problem, set up and solve the differential equations.

:::exercise {fs-id1170571080168} type= 
PROBLEM:
An opera singer is attempting to shatter a glass by singing a particular note. The vibrations of the glass can be modeled by ${y}^{''}+ay=0,$ where $a>0$ represents the natural frequency of the glass and the singer is forcing the vibrations at $\text{cos}(bt\text{).}$ For what value $b$ would the singer be able to break that glass? (*Note*: in order for the glass to break, the oscillations would need to get higher and higher.)
SOLUTION:
$b=\sqrt{a}$
:::

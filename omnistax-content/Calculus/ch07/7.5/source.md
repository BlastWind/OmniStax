# Other Strategies for Integration

## Learning Objectives {section:learning-objectives}
- Use a table of integrals to solve integration problems.
- Use a computer algebra system (CAS) to solve integration problems.

In addition to the techniques of integration we have already seen, several other tools are widely available to assist with the process of integration. Among these tools are {term:integration tables}, which are readily available in many books, including the appendices to this one. Also widely available are {term:computer algebra systems (CAS)}, which are found on calculators and in many campus computer labs, and are free online.

## Tables of Integrals
Integration tables, if used in the right manner, can be a handy way either to evaluate or check an integral quickly. Keep in mind that when using a table to check an answer, it is possible for two completely correct solutions to look very different. For example, in [Trigonometric Substitution](module:m53659), we found that, by using the substitution $x=\text{tan}\;\theta ,$ we can arrive at

${\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}}=\text{ln}(x+\sqrt{{x}^{2}+1})+C.$  {eq:fs-id1165040681970}

However, using $x=\text{sinh}\;\theta ,$ we obtained a different solution—namely,

${\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}}={\text{sinh}}^{−1}x+C.$  {eq:fs-id1165041848129}

We later showed algebraically that the two solutions are equivalent. That is, we showed that ${\text{sinh}}^{−1}x=\text{ln}(x+\sqrt{{x}^{2}+1}).$ In this case, the two antiderivatives that we found were actually equal. This need not be the case. However, as long as the difference in the two antiderivatives is a constant, they are equivalent.

:::example {ex:fs-id1165041930726} Using a Formula from a Table to Evaluate an Integral

:::exercise {fs-id1165041787566} type= 
PROBLEM:
Use the table formula

${\displaystyle \int \frac{\sqrt{{a}^{2}-{u}^{2}}}{{u}^{2}}du}=-\frac{\sqrt{{a}^{2}-{u}^{2}}}{u}-{\text{sin}}^{−1}\frac{u}{a}+C$  {eq:fs-id1165041758432}

to evaluate ${\displaystyle \int \frac{\sqrt{16-{e}^{2x}}}{{e}^{x}}dx.}$
SOLUTION:
If we look at integration tables, we see that several formulas contain expressions of the form $\sqrt{{a}^{2}-{u}^{2}}.$ This expression is actually similar to $\sqrt{16-{e}^{2x}},$ where $a=4$ and $u={e}^{x}.$ Keep in mind that we must also have $du={e}^{x}dx.$ Multiplying the numerator and the denominator of the given integral by ${e}^{x}$ should help to put this integral in a useful form. Thus, we now have

${\displaystyle \int \frac{\sqrt{16-{e}^{2x}}}{{e}^{x}}dx}={\displaystyle \int \frac{\sqrt{16-{e}^{2x}}}{{e}^{2x}}{e}^{x}dx.}$  {eq:fs-id1165040752681}

Substituting $u={e}^{x}$ and $du={e}^{x}dx$ produces ${\displaystyle \int \frac{\sqrt{{a}^{2}-{u}^{2}}}{{u}^{2}}du.}$ From the integration table (#88 in [Appendix A](module:m54049)),

${\displaystyle \int \frac{\sqrt{{a}^{2}-{u}^{2}}}{{u}^{2}}du}=-\frac{\sqrt{{a}^{2}-{u}^{2}}}{u}-{\text{sin}}^{−1}\frac{u}{a}+C.$  {eq:fs-id1165042045994}

Thus,

$\begin{array}{rllll}{\displaystyle \int \frac{\sqrt{16-{e}^{2x}}}{{e}^{x}}dx} & ={\displaystyle \int \frac{\sqrt{16-{e}^{2x}}}{{e}^{2x}}{e}^{x}dx} & & & \text{Substitute}\;u={e}^{x}\;\text{and}\;du={e}^{x}dx. \\ & ={\displaystyle \int \frac{\sqrt{{4}^{2}-{u}^{2}}}{{u}^{2}}du} & & & \text{Apply the formula using}\;a=4. \\ & =-\frac{\sqrt{{4}^{2}-{u}^{2}}}{u}-{\text{sin}}^{−1}\frac{u}{4}+C & & & \text{Substitute}\;u={e}^{x}. \\ & =-\frac{\sqrt{16-{e}^{2x}}}{{e}^{x}}-{\text{sin}}^{−1}(\frac{{e}^{x}}{4})+C. & & & \end{array}$  {eq:fs-id1165040798665}

:::
:::

## Computer Algebra Systems
If available, a CAS is a faster alternative to a table for solving an integration problem. Many such systems are widely available and are, in general, quite easy to use.

:::example {ex:fs-id1165040682585} Using a Computer Algebra System to Evaluate an Integral

:::exercise {fs-id1165041917465} type= 
PROBLEM:
Use a computer algebra system to evaluate ${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-4}}.}$ Compare this result with $\text{ln}|\frac{\sqrt{{x}^{2}-4}}{2}+\frac{x}{2}|+C,$ a result we might have obtained if we had used trigonometric substitution.
SOLUTION:
Using Wolfram Alpha, we obtain

${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-4}}}=\text{ln}|\sqrt{{x}^{2}-4}+x|+C.$  {eq:fs-id1165042228130}

Notice that

$\text{ln}|\frac{\sqrt{{x}^{2}-4}}{2}+\frac{x}{2}|+C=\text{ln}|\frac{\sqrt{{x}^{2}-4}+x}{2}|+C=\text{ln}|\sqrt{{x}^{2}-4}+x|-\text{ln}\;2+C.$  {eq:fs-id1165042122802}

Since these two antiderivatives differ by only a constant, the solutions are equivalent. We could have also demonstrated that each of these antiderivatives is correct by differentiating them.
:::
:::

:::note [media-2] 
You can access an [integral calculator](http://www.openstax.org/l/20_intcalc) for more examples.
:::

:::example {ex:fs-id1165042089942} Using a CAS to Evaluate an Integral

:::exercise {fs-id1165041762163} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}{\text{sin}}^{3}x\;dx$ using a CAS. Compare the result to $\frac{1}{3}{\text{cos}}^{3}x-\text{cos}\;x+C,$ the result we might have obtained using the technique for integrating odd powers of $\text{sin}\;x$ discussed earlier in this chapter.
SOLUTION:
Using Wolfram Alpha, we obtain

${\displaystyle \int {\text{sin}}^{3}x\;dx}=\frac{1}{12}(\text{cos}(3x)-9\;\text{cos}\;x)+C.$  {eq:fs-id1165041805693}

This looks quite different from $\frac{1}{3}{\text{cos}}^{3}x-\text{cos}\;x+C.$ To see that these antiderivatives are equivalent, we can make use of a few trigonometric identities:

$\begin{array}{rl}\frac{1}{12}(\text{cos}(3x)-9\;\text{cos}\;x) & =\frac{1}{12}(\text{cos}(x+2x)-9\;\text{cos}\;x) \\ & =\frac{1}{12}(\text{cos}(x)\text{cos}(2x)-\text{sin}(x)\text{sin}(2x)-9\;\text{cos}\;x) \\ & =\frac{1}{12}(\text{cos}\;x(2\;{\text{cos}}^{2}x-1)-\text{sin}\;x(2\;\text{sin}\;x\;\text{cos}\;x)-9\;\text{cos}\;x) \\ & =\frac{1}{12}(2{\text{cos}}^{3}x-\text{cos}\;x-2\;\text{cos}\;x(1-{\text{cos}}^{2}x)-9\;\text{cos}\;x) \\ & =\frac{1}{12}(4{\text{cos}}^{3}x-12\;\text{cos}\;x) \\ & =\frac{1}{3}{\text{cos}}^{3}x-\text{cos}\;x.\end{array}$  {eq:fs-id1165041831576}

Thus, the two antiderivatives are identical.
We may also use a CAS to compare the graphs of the two functions, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_07_05_001} src=../../media/CNX_Calc_Figure_07_05_001.jpg
> alt: This is the graph of a periodic function. The waves have an amplitude of approximately 0.7 and a period of approximately 10. The graph represents the functions y = cos^3(x)/3 – cos(x) and y = 1/12(cos(3x)-9cos(x). The graph is the same for both functions.
> caption: The graphs of $y=\frac{1}{3}{\text{cos}}^{3}x-\text{cos}\;x$ and $y=\frac{1}{12}(\text{cos}(3x)-9\;\text{cos}\;x)$ are identical.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041893152} type= 
PROBLEM:
Use a CAS to evaluate ${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}+4}}.}$
SOLUTION:
Possible solutions include ${\text{sinh}}^{−1}(\frac{x}{2})+C$ and $\text{ln}|\sqrt{{x}^{2}+4}+x|+C.$
COMMENTARY: Hint
Answers may vary.
:::
:::

## Key Concepts {section:key-concepts}
- An integration table may be used to evaluate indefinite integrals.
- A CAS (or computer algebra system) may be used to evaluate indefinite integrals.
- It may require some effort to reconcile equivalent solutions obtained using different methods.

##  {section:section-exercises}
Use a table of integrals to evaluate the following integrals.

:::exercise {fs-id1165042277957} type= 
PROBLEM:
${\displaystyle \int_{0}^{4} \frac{x}{\sqrt{1+2x}}dx}$
:::

:::exercise {fs-id1165042066444} type= 
PROBLEM:
${\displaystyle \int \frac{x+3}{{x}^{2}+2x+2}dx}$
SOLUTION:
$\frac{1}{2}\text{ln}|{x}^{2}+2x+2|+2\;\text{arctan}(x+1)+C$
:::

:::exercise {fs-id1165041826184} type= 
PROBLEM:
${\displaystyle \int {x}^{3}\sqrt{1+2{x}^{2}}\;dx}$
:::

:::exercise {fs-id1165040797018} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{{x}^{2}+6x}}dx}$
SOLUTION:
${\text{cosh}}^{−1}(\frac{x+3}{3})+C$
:::

:::exercise {fs-id1165041972617} type= 
PROBLEM:
${\displaystyle \int \frac{x}{x+1}dx}$
:::

:::exercise {fs-id1165042281143} type= 
PROBLEM:
${\displaystyle \int x\cdot {2}^{{x}^{2}}dx}$
SOLUTION:
$\frac{{2}^{{x}^{2}-1}}{\text{ln}\;2}+C$
:::

:::exercise {fs-id1165041830459} type= 
PROBLEM:
${\displaystyle \int \frac{1}{4{x}^{2}+25}dx}$
:::

:::exercise {fs-id1165041818478} type= 
PROBLEM:
${\displaystyle \int \frac{dy}{\sqrt{4-{y}^{2}}}}$
SOLUTION:
$\text{arcsin}(\frac{y}{2})+C$
:::

:::exercise {fs-id1165042264498} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{3}(2x)\text{cos}(2x)dx}$
:::

:::exercise {fs-id1165041838330} type= 
PROBLEM:
${\displaystyle \int \text{csc}(2w)\text{cot}(2w)dw}$
SOLUTION:
$-\frac{1}{2}\text{csc}(2w)+C$
:::

:::exercise {fs-id1165042126632} type= 
PROBLEM:
${\displaystyle \int {2}^{y}dy}$
:::

:::exercise {fs-id1165040682461} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{3x\;dx}{\sqrt{{x}^{2}+8}}}$
SOLUTION:
$9-6\sqrt{2}$
:::

:::exercise {fs-id1165041810578} type= 
PROBLEM:
${\displaystyle \int_{−1\text{/}4}^{1\text{/}4}{\text{sec}}^{2}(\pi x)\text{tan}(\pi x)dx}$
:::

:::exercise {fs-id1165041893186} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}2}{\text{tan}}^{2}(\frac{x}{2})dx}$
SOLUTION:
$2-\frac{\pi}{2}$
:::

:::exercise {fs-id1165041979103} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{3}x\;dx}$
:::

:::exercise {fs-id1165041795957} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{5}(3x)dx}$
SOLUTION:
$\frac{1}{12}{\text{tan}}^{4}(3x)-\frac{1}{6}{\text{tan}}^{2}(3x)+\frac{1}{3}\text{ln}|\text{sec}(3x)|+C$
:::

:::exercise {fs-id1165040676004} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}y\;{\text{cos}}^{3}ydy}$
:::
Use a CAS to evaluate the following integrals. Tables can also be used to verify the answers.

:::exercise {fs-id1165042033160} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dw}{1+\text{sec}(\frac{w}{2})}}$
SOLUTION:
$2\;\text{cot}(\frac{w}{2})-2\;\text{csc}(\frac{w}{2})+w+C$
:::

:::exercise {fs-id1165041847489} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dw}{1-\text{cos}(7w)}}$
:::

:::exercise {fs-id1165041805666} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{t}\frac{dt}{4\;\text{cos}\;t+3\;\text{sin}\;t}}$
SOLUTION:
$\frac{1}{5}\text{ln}|\frac{2(5+4\;\text{sin}\;t-3\;\text{cos}\;t)}{4\;\text{cos}\;t+3\;\text{sin}\;t}|$
:::

:::exercise {fs-id1165042032048} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{\sqrt{{x}^{2}-9}}{3x}dx}$
:::

:::exercise {fs-id1165042088563} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dx}{{x}^{1\text{/}2}+{x}^{1\text{/}3}}}$
SOLUTION:
$6{x}^{1\text{/}6}-3{x}^{1\text{/}3}+2\sqrt{x}-6\;\text{ln}[1+{x}^{1\text{/}6}]+C$
:::

:::exercise {fs-id1165042066597} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dx}{x\sqrt{x-1}}}$
:::

:::exercise {fs-id1165042303689} type= 
PROBLEM:
**[T]** ${\displaystyle \int {x}^{3}\text{sin}\;x\;dx}$
SOLUTION:
$\text{−}{x}^{3}\text{cos}\;x+3{x}^{2}\text{sin}\;x+6x\;\text{cos}\;x-6\;\text{sin}\;x+C$
:::

:::exercise {fs-id1165041840382} type= 
PROBLEM:
**[T]** ${\displaystyle \int x\sqrt{{x}^{4}-9}\;dx}$
:::

:::exercise {fs-id1165042295836} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{x}{1+{e}^{\text{−}{x}^{2}}}dx}$
SOLUTION:
$\frac{1}{2}({x}^{2}+\text{ln}|1+{e}^{\text{−}{x}^{2}}|)+C$
:::

:::exercise {fs-id1165042137321} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{\sqrt{3-5x}}{2x}dx}$
:::

:::exercise {fs-id1165040758316} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dx}{x\sqrt{x-1}}}$
SOLUTION:
$2\;\text{arctan}(\sqrt{x-1})+C$
:::

:::exercise {fs-id1165041814632} type= 
PROBLEM:
**[T]** ${\displaystyle \int {e}^{x}{\text{cos}}^{−1}({e}^{x})dx}$
:::
Use a calculator or CAS to evaluate the following integrals.

:::exercise {fs-id1165042083447} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{\pi \text{/}4}\text{cos}(2x)dx}$
SOLUTION:
$0.5=\frac{1}{2}$
:::

:::exercise {fs-id1165042192508} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{1}x\cdot {e}^{\text{−}{x}^{2}}dx}$
:::

:::exercise {fs-id1165042231112} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{8}\frac{2x}{\sqrt{{x}^{2}+36}}dx}$
SOLUTION:
8.0
:::

:::exercise {fs-id1165042050506} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{2\text{/}\sqrt{3}}\frac{1}{4+9{x}^{2}}dx}$
:::

:::exercise {fs-id1165042281590} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dx}{{x}^{2}+4x+13}}$
SOLUTION:
$\frac{1}{3}\text{arctan}(\frac{1}{3}(x+2))+C$
:::

:::exercise {fs-id1165042195596} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{dx}{1+\text{sin}\;x}}$
:::
Use tables to evaluate the integrals. You may need to complete the square or change variables to put the integral into a form given in the table.

:::exercise {fs-id1165042071606} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{2}+2x+10}}$
SOLUTION:
$\frac{1}{3}\text{arctan}(\frac{x+1}{3})+C$
:::

:::exercise {fs-id1165042108904} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-6x}}}$
:::

:::exercise {fs-id1165041908101} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{x}}{\sqrt{{e}^{2x}-4}}dx}$
SOLUTION:
$\text{ln}({e}^{x}+\sqrt{–4+{e}^{2x}})+C$
:::

:::exercise {fs-id1165040776919} type= 
PROBLEM:
${\displaystyle \int \frac{\text{cos}\;x}{{\text{sin}}^{2}x+2\;\text{sin}\;x}dx}$
:::

:::exercise {fs-id1165040796026} type= 
PROBLEM:
${\displaystyle \int \frac{\text{arctan}({x}^{3})}{{x}^{4}}dx}$
SOLUTION:
$\text{ln}\;x-\frac{1}{6}\text{ln}({x}^{6}+1)-\frac{\text{arctan}({x}^{3})}{3{x}^{3}}+C$
:::

:::exercise {fs-id1165042042777} type= 
PROBLEM:
${\displaystyle \int \frac{\text{ln}|x|\text{arcsin}(\text{ln}|x|)}{x}dx}$
:::
Use tables to perform the integration.

:::exercise {fs-id1165042066364} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}+16}}}$
SOLUTION:
$\text{ln}|x+\sqrt{16+{x}^{2}}|+C$
:::

:::exercise {fs-id1165042006650} type= 
PROBLEM:
${\displaystyle \int \frac{3x}{2x+7}dx}$
:::

:::exercise {fs-id1165042063055} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{1-\text{cos}(4x)}}$
SOLUTION:
$-\frac{1}{4}\text{cot}(2x)+C$
:::

:::exercise {fs-id1165040757639} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{4x+1}}}$
:::

:::exercise {fs-id1165040796057} type= 
PROBLEM:
Find the area bounded by $y=\frac{5}{4+25{x}^{2}},x=0,y=0,\text{and}\;x=4.$ Use a table of integrals or a CAS.
SOLUTION:
$\frac{1}{2}\text{arctan}\;10$
:::

:::exercise {fs-id1165040665701} type= 
PROBLEM:
The region bounded between the curve $y=\frac{1}{\sqrt{1+\text{cos}\;x}},0.3\le x\le 1.1,$ and the *x*-axis is revolved about the *x*-axis to generate a solid. Use a table of integrals to find the volume of the solid generated. (Round the answer to two decimal places.)
:::

:::exercise {fs-id1165040757800} type= 
PROBLEM:
Use substitution and a table of integrals to find the area of the surface generated by revolving the curve $y={e}^{x},0\le x\le 3,$ about the *x*-axis. (Round the answer to two decimal places.)
SOLUTION:
1276.14
:::

:::exercise {fs-id1165040774255} type= 
PROBLEM:
**[T]** Use an integral table and a calculator to find the area of the surface generated by revolving the curve $y=\frac{{x}^{2}}{2},0\le x\le 1,$ about the *x*-axis. (Round the answer to two decimal places.)
:::

:::exercise {fs-id1165042107572} type= 
PROBLEM:
**[T]** Use a CAS or tables to find the area of the surface generated by revolving the curve $y=\text{cos}\;x,0\le x\le \frac{\pi}{2},$ about the *x*-axis. (Round the answer to two decimal places.)
SOLUTION:
7.21
:::

:::exercise {fs-id1165042041810} type= 
PROBLEM:
Find the length of the curve $y=\frac{{x}^{2}}{4}$ over $[0,8].$
:::

:::exercise {fs-id1165041921707} type= 
PROBLEM:
Find the length of the curve $y={e}^{x}$ over $[0,\text{ln}(2)].$
SOLUTION:
$\sqrt{5}-\sqrt{2}+\text{ln}|\frac{2+2\sqrt{2}}{1+\sqrt{5}}|$
:::

:::exercise {fs-id1165041874050} type= 
PROBLEM:
Find the area of the surface formed by revolving the graph of $y=2\sqrt{x}$ over the interval $[0,9]$ about the *x*-axis.
:::

:::exercise {fs-id1165042238064} type= 
PROBLEM:
Find the average value of the function $f(x)=\frac{1}{{x}^{2}+1}$ over the interval $[−3,3].$
SOLUTION:
$\frac{1}{3}\text{arctan}(3)\approx 0.416$
:::

:::exercise {fs-id1165040690874} type= 
PROBLEM:
Approximate the arc length of the curve $y=\text{tan}(\pi x)$ over the interval $[0,\frac{1}{4}].$ (Round the answer to three decimal places.)
:::

## Glossary
- {def} **computer algebra system (CAS)**: technology used to perform many mathematical tasks, including integration
- {def} **integration table**: a table that lists integration formulas

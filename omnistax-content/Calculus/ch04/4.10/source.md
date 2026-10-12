# Antiderivatives

## Learning Objectives {section:learning-objectives}
- Find the general antiderivative of a given function.
- Explain the terms and notation used for an indefinite integral.
- State the power rule for integrals.
- Use antidifferentiation to solve simple initial-value problems.

At this point, we have seen how to calculate derivatives of many functions and have been introduced to a variety of their applications. We now ask a question that turns this process around: Given a function $f,$ how do we find a function with the derivative $f$ and why would we be interested in such a function?
We answer the first part of this question by defining antiderivatives. The antiderivative of a function $f$ is a function with a derivative $f.$ Why are we interested in antiderivatives? The need for antiderivatives arises in many situations, and we look at various examples throughout the remainder of the text. Here we examine one specific example that involves rectilinear motion. In our examination in [Derivatives](module:m53494) of rectilinear motion, we showed that given a position function $s(t)$ of an object, then its velocity function $v(t)$ is the derivative of $s(t)$—that is, $v(t)={s}^{'}(t).$ Furthermore, the acceleration $a(t)$ is the derivative of the velocity $v(t)$—that is, $a(t)={v}^{'}(t)={s}^{''}(t).$ Now suppose we are given an acceleration function $a,$ but not the velocity function $v$ or the position function $s.$ Since $a(t)={v}^{'}(t),$ determining the velocity function requires us to find an antiderivative of the acceleration function. Then, since $v(t)={s}^{'}(t),$ determining the position function requires us to find an antiderivative of the velocity function. Rectilinear motion is just one case in which the need for antiderivatives arises. We will see many more examples throughout the remainder of the text. For now, let’s look at the terminology and notation for antiderivatives, and determine the antiderivatives for several types of functions. We examine various techniques for finding antiderivatives of more complicated functions later in the text ([Introduction to Techniques of Integration](module:m53654)).

## The Reverse of Differentiation
At this point, we know how to find derivatives of various functions. We now ask the opposite question. Given a function $f,$ how can we find a function with derivative $f?$ If we can find a function $F$ with derivative $f,$ we call $F$ an antiderivative of $f.$

:::note [definition] Definition
A function $F$ is an {term:antiderivative} of the function $f$ if

${F}^{'}(x)=f(x)$  {eq:fs-id1165042945928}

for all $x$ in the domain of $f.$
:::
Consider the function $f(x)=2x.$ Knowing the power rule of differentiation, we conclude that $F(x)={x}^{2}$ is an antiderivative of $f$ since ${F}^{'}(x)=2x.$ Are there any other antiderivatives of $f?$ Yes; since the derivative of any constant $C$ is zero, ${x}^{2}+C$ is also an antiderivative of $2x.$ Therefore, ${x}^{2}+5$ and ${x}^{2}-\sqrt{2}$ are also antiderivatives. Are there any others that are not of the form ${x}^{2}+C$ for some constant $C?$ The answer is no. From Corollary $2$ of the Mean Value Theorem, we know that if $F$ and $G$ are differentiable functions such that ${F}^{'}(x)={G}^{'}(x),$ then $F(x)-G(x)=C$ for some constant $C.$ This fact leads to the following important theorem.

:::note [theorem] General Form of an Antiderivative
Let $F$ be an antiderivative of $f$ over an interval $I.$ Then,
1. for each constant $C,$ the function $F(x)+C$ is also an antiderivative of $f$ over $I;$
2. if $G$ is an antiderivative of $f$ over $I,$ there is a constant $C$ for which $G(x)=F(x)+C$ over $I.$
In other words, the most general form of the antiderivative of $f$ over $I$ is $F(x)+C.$
:::
We use this fact and our knowledge of derivatives to find all the antiderivatives for several functions.

:::example {ex:fs-id1165042616955} Finding Antiderivatives

:::exercise {fs-id1165042984701} type= 
PROBLEM:
For each of the following functions, find all antiderivatives.
a. $f(x)=3{x}^{2}$
b. $f(x)=\frac{1}{x}$
c. $f(x)=\text{cos}\;x$
d. $f(x)={e}^{x}$
SOLUTION:
a. Because

$\frac{d}{dx}({x}^{3})=3{x}^{2}$  {eq:fs-id1165043024555}

then $F(x)={x}^{3}$ is an antiderivative of $3{x}^{2}.$ Therefore, every antiderivative of $3{x}^{2}$ is of the form ${x}^{3}+C$ for some constant $C,$ and every function of the form ${x}^{3}+C$ is an antiderivative of $3{x}^{2}.$
b. Let $f(x)=\text{ln}|x|.$ For $x>0,f(x)=\text{ln}(x)$ and

$\frac{d}{dx}(\text{ln}\;x)=\frac{1}{x}.$  {eq:fs-id1165043105329}

For $x<0,f(x)=\text{ln}(\text{−}x)$ and

$\frac{d}{dx}(\text{ln}(\text{−}x))=-\frac{1}{\text{−}x}=\frac{1}{x}.$  {eq:fs-id1165043039001}

Therefore,

$\frac{d}{dx}(\text{ln}|x|)=\frac{1}{x}.$  {eq:fs-id1165042609059}

Thus, $F(x)=\text{ln}|x|$ is an antiderivative of $\frac{1}{x}.$ Therefore, every antiderivative of $\frac{1}{x}$ is of the form $\text{ln}|x|+C$ for some constant $C$ and every function of the form $\text{ln}|x|+C$ is an antiderivative of $\frac{1}{x}.$
c. We have

$\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x,$  {eq:fs-id1165042349871}

so $F(x)=\text{sin}\;x$ is an antiderivative of $\text{cos}\;x.$ Therefore, every antiderivative of $\text{cos}\;x$ is of the form $\text{sin}\;x+C$ for some constant $C$ and every function of the form $\text{sin}\;x+C$ is an antiderivative of $\text{cos}\;x.$
d. Since

$\frac{d}{dx}({e}^{x})={e}^{x},$  {eq:fs-id1165043135294}

then $F(x)={e}^{x}$ is an antiderivative of ${e}^{x}.$ Therefore, every antiderivative of ${e}^{x}$ is of the form ${e}^{x}+C$ for some constant $C$ and every function of the form ${e}^{x}+C$ is an antiderivative of ${e}^{x}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042966615} type= 
PROBLEM:
Find all antiderivatives of $f(x)=\text{sin}\;x.$
SOLUTION:
$\text{−}\text{cos}\;x+C$
COMMENTARY: Hint
What function has a derivative of $\text{sin}\;x?$
:::
:::

## Indefinite Integrals
We now look at the formal notation used to represent antiderivatives and examine some of their properties. These properties allow us to find antiderivatives of more complicated functions. Given a function $f,$ we use the notation ${f}^{'}(x)$ or $\frac{df}{dx}$ to denote the derivative of $f.$ Here we introduce notation for antiderivatives. If $F$ is an antiderivative of $f,$ we say that $F(x)+C$ is the most general antiderivative of $f$ and write

${\displaystyle \int f(x)dx}=F(x)+C.$  {eq:fs-id1165043093355}

The symbol ${\displaystyle \int}$ is called an *integral sign*, and ${\displaystyle \int f(x)dx}$ is called the indefinite integral of $f.$

:::note [definition] Definition
Given a function $f,$ the {term:indefinite integral} of $f,$ denoted

${\displaystyle \int f(x)dx},$  {eq:fs-id1165043166841}

is the most general antiderivative of $f.$ If $F$ is an antiderivative of $f,$ then

${\displaystyle \int f(x)dx}=F(x)+C.$  {eq:fs-id1165043119692}

The expression $f(x)$ is called the *integrand* and the variable $x$ is the *variable of integration*.
:::
Given the terminology introduced in this definition, the act of finding the antiderivatives of a function $f$ is usually referred to as *integrating* $f.$
For a function $f$ and an antiderivative $F,$ the functions $F(x)+C,$ where $C$ is any real number, is often referred to as *the family of antiderivatives of* $f.$ For example, since ${x}^{2}$ is an antiderivative of $2x$ and any antiderivative of $2x$ is of the form ${x}^{2}+C,$ we write

${\displaystyle \int 2x\;dx={x}^{2}+C}.$  {eq:fs-id1165043327744}

The collection of all functions of the form ${x}^{2}+C,$ where $C$ is any real number, is known as the *family of antiderivatives of* $2x.$ [ref:CNX_Calc_Figure_04_10_001] shows a graph of this family of antiderivatives.

> FIGURE {fig:CNX_Calc_Figure_04_10_001} src=../../media/CNX_Calc_Figure_04_10_001.jpg
> alt: The graphs for y = x2 + 2, y = x2 + 1, y = x2, y = x2 − 1, and y = x2 − 2 are shown.
> caption: The family of antiderivatives of $2x$ consists of all functions of the form ${x}^{2}+C,$ where $C$ is any real number.

For some functions, evaluating indefinite integrals follows directly from properties of derivatives. For example, for $n≠\text{−}1,$

${\displaystyle \int {x}^{n}dx=\frac{{x}^{n+1}}{n+1}+C},$  {eq:fs-id1165043350427}

which comes directly from

$\frac{d}{dx}(\frac{{x}^{n+1}}{n+1})=(n+1)\frac{{x}^{n}}{n+1}={x}^{n}.$  {eq:fs-id1165043036022}

This fact is known as *the power rule for integrals*.

:::note [theorem] Power Rule for Integrals
For $n≠\text{−}1,$

${\displaystyle \int {x}^{n}dx=\frac{{x}^{n+1}}{n+1}+C}.$  {eq:fs-id1165043250161}

:::
Evaluating indefinite integrals for some other functions is also a straightforward calculation. The following table lists the indefinite integrals for several common functions. A more complete list appears in [Appendix A](module:m54049).

> TABLE {tab:fs-id1165043092431} cols=2
> title: Integration Formulas
> summary: This is a table with two columns and fourteen rows, titled “Integration Formulas.” The first row is a header row, and labels column one “Differentiation Formula” and column two “Indefinite Integral.” The second row reads d/dx (k) = 0, the integral of kdx = the integral of kx^0dx = kx + C. The third row reads d/dx(x^n) = nx^(x-1), the integral of x^ndn = (x^n+1)/(n+1) + C for n is not equal to negative 1. The fourth row reads d/dx(ln(the absolute value of x))=1/x, the integral of (1/x)dx = ln(the absolute value of x) + C. The fifth row reads d/dx(e^x) = e^x, the integral of e^xdx = e^x + C. The sixth row reads d/dx(sinx) = cosx, the integral of cosxdx = sinx + C. The seventh row reads d/dx(cosx) = negative sinx, the integral of sinxdx = negative cosx + C. The eighth row reads d/dx(tanx) = sec squared x, the integral of sec squared xdx = tanx + C. The ninth row reads d/dx(cscx) = negative cscxcotx, the integral of cscxcotxdx = negative cscx + C. The tenth row reads d/dx(secx) = secxtanx, the integral of secxtanxdx = secx + C. The eleventh row reads d/dx(cotx) = negative csc squared x, the integral of csc squared xdx = negative cot x + C. The twelfth row reads d/dx(sin^-1(x)) = 1/the square root of (1 – x^2), the integral of 1/(the square root of (x^2 – 1) = sin^-1(x) + C. The thirteenth row reads d/dx (tan^-1(x)) = 1/(1 + x^2), the integral of 1/(1 + x^2)dx = tan^-1(x) + C. The fourteenth row reads d/dx(sec^-1(the absolute value of x)) = 1/x(the square root of x^2 – 1), the integral of 1/x(the square root of x^2 – 1)dx = sec^-1(the absolute value of x) + C.

| Differentiation Formula | Indefinite Integral |
| --- | --- |
| $\frac{d}{dx}(k)=0$ | ${\displaystyle \int kdx={\displaystyle \int k{x}^{0}dx}}=kx+C$ |
| $\frac{d}{dx}({x}^{n})=n{x}^{n-1}$ | ${\displaystyle \int {x}^{n}dx}=\frac{{x}^{n+1}}{n+1}+C$ for $n≠\text{−}1$ |
| $\frac{d}{dx}(\text{ln}|x|)=\frac{1}{x}$ | ${\displaystyle \int \frac{1}{x}dx=\text{ln}|x|}+C$ |
| $\frac{d}{dx}({e}^{x})={e}^{x}$ | ${\displaystyle \int {e}^{x}dx}={e}^{x}+C$ |
| $\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x$ | ${\displaystyle \int \text{cos}\;x\;dx=\text{sin}\;x+C}$ |
| $\frac{d}{dx}(\text{cos}\;x)=\text{−}\text{sin}\;x$ | ${\displaystyle \int \text{sin}\;x\;dx=\text{−}\text{cos}\;x+C}$ |
| $\frac{d}{dx}(\text{tan}\;x)={\text{sec}}^{2}x$ | ${\displaystyle \int {\text{sec}}^{2}x\;dx=\text{tan}\;x+C}$ |
| $\frac{d}{dx}(\text{csc}\;x)=\text{−}\text{csc}\;x\;\text{cot}\;x$ | ${\displaystyle \int \text{csc}\;x\;\text{cot}\;x\;dx=\text{−}\text{csc}\;x+C}$ |
| $\frac{d}{dx}(\text{sec}\;x)=\text{sec}\;x\;\text{tan}\;x$ | ${\displaystyle \int \text{sec}\;x\;\text{tan}\;x\;dx=\text{sec}\;x+C}$ |
| $\frac{d}{dx}(\text{cot}\;x)=\text{−}{\text{csc}}^{2}x$ | ${\displaystyle \int {\text{csc}}^{2}x\;dx=\text{−}\text{cot}\;x+C}$ |
| $\frac{d}{dx}({\text{sin}}^{−1}x)=\frac{1}{\sqrt{1-{x}^{2}}}$ | ${\displaystyle \int \frac{1}{\sqrt{1-{x}^{2}}}dx={\text{sin}}^{−1}x+C}$ |
| $\frac{d}{dx}({\text{tan}}^{−1}x)=\frac{1}{1+{x}^{2}}$ | ${\displaystyle \int \frac{1}{1+{x}^{2}}dx={\text{tan}}^{−1}x+C}$ |
| $\frac{d}{dx}({\text{sec}}^{−1}x)=\frac{1}{x\sqrt{{x}^{2}-1}}$ | ${\displaystyle \int \frac{1}{x\sqrt{{x}^{2}-1}}dx={\text{sec}}^{−1}x+C}$ |

From the definition of indefinite integral of $f,$ we know

${\displaystyle \int f(x)dx=F(x)+C}$  {eq:fs-id1165042373302}

if and only if $F$ is an antiderivative of $f.$ Therefore, when claiming that

${\displaystyle \int f(x)dx=F(x)+C}$  {eq:fs-id1165042472053}

it is important to check whether this statement is correct by verifying that ${F}^{'}(x)=f(x).$

:::example {ex:fs-id1165043393824} Verifying an Indefinite Integral

:::exercise {fs-id1165043393826} type= 
PROBLEM:
Each of the following statements is of the form ${\displaystyle \int f(x)dx=F(x)+C}.$ Verify that each statement is correct by showing that ${F}^{'}(x)=f(x).$
a. ${\displaystyle \int (x+{e}^{x})}dx=\frac{{x}^{2}}{2}+{e}^{x}+C$
b. ${\displaystyle \int x{e}^{x}dx}=x{e}^{x}-{e}^{x}+C$
SOLUTION:
a. Since

$\frac{d}{dx}(\frac{{x}^{2}}{2}+{e}^{x}+C)=x+{e}^{x},$  {eq:fs-id1165042710856}

the statement

${\displaystyle \int (x+{e}^{x})}dx=\frac{{x}^{2}}{2}+{e}^{x}+C$  {eq:fs-id1165042319135}

is correct.

Note that we are verifying an indefinite integral for a sum. Furthermore, $\frac{{x}^{2}}{2}$ and ${e}^{x}$ are antiderivatives of $x$ and ${e}^{x},$ respectively, and the sum of the antiderivatives is an antiderivative of the sum. We discuss this fact again later in this section.
b. Using the product rule, we see that

$\frac{d}{dx}(x{e}^{x}-{e}^{x}+C)={e}^{x}+x{e}^{x}-{e}^{x}=x{e}^{x}.$  {eq:fs-id1165043327552}

Therefore, the statement

${\displaystyle \int x{e}^{x}dx}=x{e}^{x}-{e}^{x}+C$  {eq:fs-id1165043257181}

is correct.

Note that we are verifying an indefinite integral for a product. The antiderivative $x{e}^{x}-{e}^{x}$ is not a product of the antiderivatives. Furthermore, the product of antiderivatives, ${x}^{2}{e}^{x}\text{/}2$ is not an antiderivative of $x{e}^{x}$ since

$\frac{d}{dx}(\frac{{x}^{2}{e}^{x}}{2})=x{e}^{x}+\frac{{x}^{2}{e}^{x}}{2}≠x{e}^{x}.$  {eq:fs-id1165042320874}

In general, the product of antiderivatives is not an antiderivative of a product.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043078181} type= 
PROBLEM:
Verify that ${\displaystyle \int x\;\text{cos}\;x\;dx=x\;\text{sin}\;x+\text{cos}\;x+C.}$
SOLUTION:
$\frac{d}{dx}(x\;\text{sin}\;x+\text{cos}\;x+C)=\text{sin}\;x+x\;\text{cos}\;x-\text{sin}\;x=x\;\text{cos}\;x$
COMMENTARY: Hint
Calculate $\frac{d}{dx}(x\;\text{sin}\;x+\text{cos}\;x+C).$
:::
:::
In [ref:fs-id1165043092431], we listed the indefinite integrals for many elementary functions. Let’s now turn our attention to evaluating indefinite integrals for more complicated functions. For example, consider finding an antiderivative of a sum $f+g.$ In [ref:fs-id1165043393824]a. we showed that an antiderivative of the sum $x+{e}^{x}$ is given by the sum $(\frac{{x}^{2}}{2})+{e}^{x}$—that is, an antiderivative of a sum is given by a sum of antiderivatives. This result was not specific to this example. In general, if $F$ and $G$ are antiderivatives of any functions $f$ and $g,$ respectively, then

$\frac{d}{dx}(F(x)+G(x))={F}^{'}(x)+{G}^{'}(x)=f(x)+g(x).$  {eq:fs-id1165043427441}

Therefore, $F(x)+G(x)$ is an antiderivative of $f(x)+g(x)$ and we have

${\displaystyle \int (f(x)+g(x))}dx=F(x)+G(x)+C.$  {eq:fs-id1165043276366}

Similarly,

${\displaystyle \int (f(x)-g(x))}dx=F(x)-G(x)+C.$  {eq:fs-id1165043174085}

In addition, consider the task of finding an antiderivative of $kf(x),$ where $k$ is any real number. Since

$\frac{d}{dx}(kf(x))=k\frac{d}{dx}F(x)=k{f}^{'}(x)$  {eq:fs-id1165042367887}

for any real number $k,$ we conclude that

${\displaystyle \int kf(x)dx}=kF(x)+C.$  {eq:fs-id1165042383898}

These properties are summarized next.

:::note [theorem] Properties of Indefinite Integrals
Let $F$ and $G$ be antiderivatives of $f$ and $g,$ respectively, and let $k$ be any real number.
Sums and Differences

${\displaystyle \int (f(x)\text{±}g(x))dx=F(x)\text{±}G(x)+C}$  {eq:fs-id1165043393663}

Constant Multiples

${\displaystyle \int kf(x)dx=kF(x)+C}$  {eq:fs-id1165042328717}

:::
From this theorem, we can evaluate any integral involving a sum, difference, or constant multiple of functions with antiderivatives that are known. Evaluating integrals involving products, quotients, or compositions is more complicated (see [ref:fs-id1165043393824]b. for an example involving an antiderivative of a product.) We look at and address integrals involving these more complicated functions in [Introduction to Integration](module:m53623). In the next example, we examine how to use this theorem to calculate the indefinite integrals of several functions.

:::example {ex:fs-id1165043248811} Evaluating Indefinite Integrals

:::exercise {fs-id1165042705917} type= 
PROBLEM:
Evaluate each of the following indefinite integrals:
a. ${\displaystyle \int (5{x}^{3}-7{x}^{2}+3x+4)dx}$
b. ${\displaystyle \int \frac{{x}^{2}+4\sqrt[3]{x}}{x}}dx$
c. ${\displaystyle \int \frac{4}{1+{x}^{2}}}dx$
d. ${\displaystyle \int \text{tan}\;x\;\text{cos}\;x\;dx}$
SOLUTION:
a. Using [ref:fs-id1165043425485], we can integrate each of the four terms in the integrand separately. We obtain

${\displaystyle \int (5{x}^{3}-7{x}^{2}+3x+4)dx}={\displaystyle \int 5{x}^{3}dx-}{\displaystyle \int 7{x}^{2}dx}+{\displaystyle \int 3x\;dx}+{\displaystyle \int 4dx}.$  {eq:fs-id1165042552227}

From the second part of [ref:fs-id1165043425485], each coefficient can be written in front of the integral sign, which gives

${\displaystyle \int 5{x}^{3}dx-}{\displaystyle \int 7{x}^{2}dx}+{\displaystyle \int 3x\;dx}+{\displaystyle \int 4dx}=5{\displaystyle \int {x}^{3}dx-7}{\displaystyle \int {x}^{2}dx}+3{\displaystyle \int x\;dx}+4{\displaystyle \int 1dx.}$  {eq:fs-id1165043312575}

Using the power rule for integrals, we conclude that

${\displaystyle \int (5{x}^{3}-7{x}^{2}+3x+4)dx}=\frac{5}{4}{x}^{4}-\frac{7}{3}{x}^{3}+\frac{3}{2}{x}^{2}+4x+C.$  {eq:fs-id1165042407363}

b. Rewrite the integrand as

$\frac{{x}^{2}+4\sqrt[3]{x}}{x}=\frac{{x}^{2}}{x}+\frac{4\sqrt[3]{x}}{x}.$  {eq:fs-id1165042371846}

Then, to evaluate the integral, integrate each of these terms separately. Using the power rule, we have

$\begin{array}{rl}{\displaystyle \int (x+\frac{4}{{x}^{2\text{/}3}})}dx & ={\displaystyle \int x\;dx+4}{\displaystyle \int {x}^{−2\text{/}3}}dx \\ & =\frac{1}{2}{x}^{2}+4\frac{1}{(\frac{−2}{3})+1}{x}^{(−2\text{/}3)+1}+C \\ & =\frac{1}{2}{x}^{2}+12{x}^{1\text{/}3}+C.\end{array}$  {eq:fs-id1165043427498}

c. Using [ref:fs-id1165043425485], write the integral as

$4{\displaystyle \int \frac{1}{1+{x}^{2}}dx}.$  {eq:fs-id1165043348665}

Then, use the fact that ${\text{tan}}^{−1}(x)$ is an antiderivative of $\frac{1}{(1+{x}^{2})}$ to conclude that

${\displaystyle \int \frac{4}{1+{x}^{2}}dx}=4\;{\text{tan}}^{−1}(x)+C.$  {eq:fs-id1165042374764}

d. Rewrite the integrand as

$\text{tan}\;x\;\text{cos}\;x=\frac{\text{sin}\;x}{\text{cos}\;x}\;\text{cos}\;x=\text{sin}\;x.$  {eq:fs-id1165043424000}

Therefore,

${\displaystyle \int \text{tan}\;x\;\text{cos}\;x}={\displaystyle \int \text{sin}\;x}=\text{−}\text{cos}\;x+C.$  {eq:fs-id1165043317182}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043426269} type= 
PROBLEM:
Evaluate ${\displaystyle \int (4{x}^{3}-5{x}^{2}+x-7)dx}.$
SOLUTION:
${x}^{4}-\frac{5}{3}{x}^{3}+\frac{1}{2}{x}^{2}-7x+C$
COMMENTARY: Hint
Integrate each term in the integrand separately, making use of the power rule.
:::
:::

## Initial-Value Problems
We look at techniques for integrating a large variety of functions involving products, quotients, and compositions later in the text. Here we turn to one common use for antiderivatives that arises often in many applications: solving differential equations.
A *differential equation* is an equation that relates an unknown function and one or more of its derivatives. The equation

$$ \frac{dy}{dx}=f(x) $$  {eq:fs-id1165042349924}

is a simple example of a differential equation. Solving this equation means finding a function $y$ with a derivative $f.$ Therefore, the solutions of [ref:fs-id1165042349924] are the antiderivatives of $f.$ If $F$ is one antiderivative of $f,$ every function of the form $y=F(x)+C$ is a solution of that differential equation. For example, the solutions of

$\frac{dy}{dx}=6{x}^{2}$  {eq:fs-id1165042323537}

are given by

$y={\displaystyle \int 6{x}^{2}dx=2{x}^{3}+C}.$  {eq:fs-id1165043431000}

Sometimes we are interested in determining whether a particular solution curve passes through a certain point $({x}_{0},{y}_{0})$—that is, $y({x}_{0})={y}_{0}.$ The problem of finding a function $y$ that satisfies a differential equation

$$ \frac{dy}{dx}=f(x) $$  {eq:fs-id1165042375659}

with the additional condition

$$ y({x}_{0})={y}_{0} $$  {eq:fs-id1165042368471}

is an example of an {term:initial-value problem}. The condition $y({x}_{0})={y}_{0}$ is known as an *initial condition*. For example, looking for a function $y$ that satisfies the differential equation

$\frac{dy}{dx}=6{x}^{2}$  {eq:fs-id1165042545822}

and the initial condition

$y(1)=5$  {eq:fs-id1165043393699}

is an example of an initial-value problem. Since the solutions of the differential equation are $y=2{x}^{3}+C,$ to find a function $y$ that also satisfies the initial condition, we need to find $C$ such that $y(1)=2{(1)}^{3}+C=5.$ From this equation, we see that $C=3,$ and we conclude that $y=2{x}^{3}+3$ is the solution of this initial-value problem as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_10_002} src=../../media/CNX_Calc_Figure_04_10_002.jpg
> alt: The graphs for y = 2x3 + 6, y = 2x3 + 3, y = 2x3, and y = 2x3 − 3 are shown.
> caption: Some of the solution curves of the differential equation $\frac{dy}{dx}=6{x}^{2}$ are displayed. The function $y=2{x}^{3}+3$ satisfies the differential equation and the initial condition $y(1)=5.$

:::example {ex:fs-id1165043327648} Solving an Initial-Value Problem

:::exercise {fs-id1165043327650} type= 
PROBLEM:
Solve the initial-value problem

$\frac{dy}{dx}=\text{sin}\;x,y(0)=5.$  {eq:fs-id1165043327661}

SOLUTION:
First we need to solve the differential equation. If $\frac{dy}{dx}=\text{sin}\;x,$ then

$y={\displaystyle \int \text{sin}(x)dx}=\text{−}\text{cos}\;x+C.$  {eq:fs-id1165043286683}

Next we need to look for a solution $y$ that satisfies the initial condition. The initial condition $y(0)=5$ means we need a constant $C$ such that $\text{−}\text{cos}\;x+C=5.$ Therefore,

$C=5+\text{cos}(0)=6.$  {eq:fs-id1165043424804}

The solution of the initial-value problem is $y=\text{−}\text{cos}\;x+6.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042327337} type= 
PROBLEM:
Solve the initial value problem $\frac{dy}{dx}=3{x}^{−2},y(1)=2.$
SOLUTION:
$y=-\frac{3}{x}+5$
COMMENTARY: Hint
Find all antiderivatives of $f(x)=3{x}^{−2}.$
:::
:::
Initial-value problems arise in many applications. Next we consider a problem in which a driver applies the brakes in a car. We are interested in how long it takes for the car to stop. Recall that the velocity function $v(t)$ is the derivative of a position function $s(t),$ and the acceleration $a(t)$ is the derivative of the velocity function. In earlier examples in the text, we could calculate the velocity from the position and then compute the acceleration from the velocity. In the next example we work the other way around. Given an acceleration function, we calculate the velocity function. We then use the velocity function to determine the position function.

:::example {ex:fs-id1165042640762} Decelerating Car

:::exercise {fs-id1165042640764} type= 
PROBLEM:
A car is traveling at the rate of $88$ ft/sec $(60$ mph) when the brakes are applied. The car begins decelerating at a constant rate of $15$ ft/sec<sup>2</sup>.
a. How many seconds elapse before the car stops?
b. How far does the car travel during that time?
SOLUTION:
a. First we introduce variables for this problem. Let $t$ be the time (in seconds) after the brakes are first applied. Let $a(t)$ be the acceleration of the car (in feet per seconds squared) at time $t.$ Let $v(t)$ be the velocity of the car (in feet per second) at time $t.$ Let $s(t)$ be the car’s position (in feet) beyond the point where the brakes are applied at time $t.$

The car is traveling at a rate of $88\;\text{ft/sec}.$ Therefore, the initial velocity is $v(0)=88$ ft/sec. Since the car is decelerating, the acceleration is

$a(t)=−15{\;\text{ft/s}}^{2}.$  {eq:fs-id1165043323894}

The acceleration is the derivative of the velocity,

${v}^{'}(t)=−15.$  {eq:fs-id1165043219161}

Therefore, we have an initial-value problem to solve:

${v}^{'}(t)=−15,v(0)=88.$  {eq:fs-id1165043219190}

Integrating, we find that

$v(t)=−15t+C.$  {eq:fs-id1165043395175}

Since $v(0)=88,C=88.$ Thus, the velocity function is

$v(t)=−15t+88.$  {eq:fs-id1165042373710}

To find how long it takes for the car to stop, we need to find the time $t$ such that the velocity is zero. Solving $−15t+88=0,$ we obtain $t=\frac{88}{15}$ sec.
b. To find how far the car travels during this time, we need to find the position of the car after $\frac{88}{15}$ sec. We know the velocity $v(t)$ is the derivative of the position $s(t).$ Consider the initial position to be $s(0)=0.$ Therefore, we need to solve the initial-value problem

${s}^{'}(t)=−15t+88,s(0)=0.$  {eq:fs-id1165043380494}

Integrating, we have

$s(t)=-\frac{15}{2}{t}^{2}+88t+C.$  {eq:fs-id1165043317270}

Since $s(0)=0,$ the constant is $C=0.$ Therefore, the position function is

$s(t)=-\frac{15}{2}{t}^{2}+88t.$  {eq:fs-id1165043250997}

After $t=\frac{88}{15}$ sec, the position is $s(\frac{88}{15})\approx 258.133$ ft.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042708226} type= 
PROBLEM:
Suppose the car is traveling at the rate of $44$ ft/sec. How long does it take for the car to stop? How far will the car travel?
SOLUTION:
$2.93\;\text{sec},\;64.5\;\text{ft}$
COMMENTARY: Hint
$v(t)=−15t+44.$
:::
:::

## Key Concepts {section:key-concepts}
- If $F$ is an antiderivative of $f,$ then every antiderivative of $f$ is of the form $F(x)+C$ for some constant $C.$
- Solving the initial-value problem

$\frac{dy}{dx}=f(x),y({x}_{0})={y}_{0}$  {eq:fs-id1165043259810}

requires us first to find the set of antiderivatives of $f$ and then to look for the particular antiderivative that also satisfies the initial condition.

##  {section:section-exercises}
For the following exercises, show that $F(x)$ are antiderivatives of $f(x).$

:::exercise {fs-id1165042709633} type= 
PROBLEM:
$F(x)=5{x}^{3}+2{x}^{2}+3x+1,f(x)=15{x}^{2}+4x+3$
SOLUTION:
${F}^{'}(x)=15{x}^{2}+4x+3$
:::

:::exercise {fs-id1165042364150} type= 
PROBLEM:
$F(x)={x}^{2}+4x+1,f(x)=2x+4$
:::

:::exercise {fs-id1165043317346} type= 
PROBLEM:
$F(x)={x}^{2}{e}^{x},f(x)={e}^{x}({x}^{2}+2x)$
SOLUTION:
${F}^{'}(x)=2x{e}^{x}+{x}^{2}{e}^{x}$
:::

:::exercise {fs-id1165042659411} type= 
PROBLEM:
$F(x)=\text{cos}\;x,f(x)=\text{−}\text{sin}\;x$
:::

:::exercise {fs-id1165042640878} type= 
PROBLEM:
$F(x)={e}^{x},f(x)={e}^{x}$
SOLUTION:
${F}^{'}(x)={e}^{x}$
:::
For the following exercises, find the general form for the antiderivative of the function.

:::exercise {fs-id1165042638501} type= 
PROBLEM:
$f(x)=\frac{1}{{x}^{2}}+x$
:::

:::exercise {fs-id1165043390814} type= 
PROBLEM:
$f(x)={e}^{x}-3{x}^{2}+\text{sin}\;x$
SOLUTION:
$F(x)={e}^{x}-{x}^{3}-\text{cos}(x)+C$
:::

:::exercise {fs-id1165042708318} type= 
PROBLEM:
$f(x)={e}^{x}+3x-{x}^{2}$
:::

:::exercise {fs-id1165042659507} type= 
PROBLEM:
$f(x)=x-1+4\;\text{sin}(2x)$
SOLUTION:
$F(x)=\frac{{x}^{2}}{2}-x-2\;\text{cos}(2x)+C$
:::
For the following exercises, find the general form for the antiderivative $F(x)$ of each function $f(x).$

:::exercise {fs-id1165042465686} type= 
PROBLEM:
$f(x)=5{x}^{4}+4{x}^{5}$
:::

:::exercise {fs-id1165043427405} type= 
PROBLEM:
$f(x)=x+12{x}^{2}$
SOLUTION:
$F(x)=\frac{1}{2}{x}^{2}+4{x}^{3}+C$
:::

:::exercise {fs-id1165043108281} type= 
PROBLEM:
$f(x)=\frac{1}{\sqrt{x}}$
:::

:::exercise {fs-id1165042657750} type= 
PROBLEM:
$f(x)={(\sqrt{x})}^{3}$
SOLUTION:
$F(x)=\frac{2}{5}{(\sqrt{x})}^{5}+C$
:::

:::exercise {fs-id1165043219223} type= 
PROBLEM:
$f(x)={x}^{1\text{/}3}+{(2x)}^{1\text{/}3}$
:::

:::exercise {fs-id1165042707199} type= 
PROBLEM:
$f(x)=\frac{{x}^{1\text{/}3}}{{x}^{2\text{/}3}}$
SOLUTION:
$F(x)=\frac{3}{2}{x}^{2\text{/}3}+C$
:::

:::exercise {fs-id1165043173829} type= 
PROBLEM:
$f(x)=2\;\text{sin}(x)+\text{sin}(2x)$
:::

:::exercise {fs-id1165042364505} type= 
PROBLEM:
$f(x)={\text{sec}}^{2}(x)+1$
SOLUTION:
$F(x)=x+\text{tan}(x)+C$
:::

:::exercise {fs-id1165043281579} type= 
PROBLEM:
$f(x)=\text{sin}\;x\;\text{cos}\;x$
:::

:::exercise {fs-id1165043281655} type= 
PROBLEM:
$f(x)={\text{sin}}^{2}(x)\text{cos}(x)$
SOLUTION:
$F(x)=\frac{1}{3}{\text{sin}}^{3}(x)+C$
:::

:::exercise {fs-id1165043424756} type= 
PROBLEM:
$f(x)=0$
:::

:::exercise {fs-id1165042660274} type= 
PROBLEM:
$f(x)=\frac{1}{2}{\text{csc}}^{2}(x)+\frac{1}{{x}^{2}}$
SOLUTION:
$F(x)=-\frac{1}{2}\;\text{cot}(x)-\frac{1}{x}+C$
:::

:::exercise {fs-id1165043173691} type= 
PROBLEM:
$f(x)=\text{csc}\;x\;\text{cot}\;x+3x$
:::

:::exercise {fs-id1165043173769} type= 
PROBLEM:
$f(x)=4\;\text{csc}\;x\;\text{cot}\;x-\text{sec}\;x\;\text{tan}\;x$
SOLUTION:
$F(x)=\text{−}\text{sec}\;x-4\;\text{csc}\;x+C$
:::

:::exercise {fs-id1165043252042} type= 
PROBLEM:
$f(x)=8\;\text{sec}\;x(\text{sec}\;x-4\;\text{tan}\;x)$
:::

:::exercise {fs-id1165042676267} type= 
PROBLEM:
$f(x)=\frac{1}{2}{e}^{−4x}+\text{sin}\;x$
SOLUTION:
$F(x)=-\frac{1}{8}{e}^{−4x}-\text{cos}\;x+C$
:::
For the following exercises, evaluate the integral.

:::exercise {fs-id1165042681091} type= 
PROBLEM:
${\displaystyle \int (−1)dx}$
:::

:::exercise {fs-id1165042681137} type= 
PROBLEM:
${\displaystyle \int \text{sin}\;x\;dx}$
SOLUTION:
$\text{−}\text{cos}\;x+C$
:::

:::exercise {fs-id1165042681181} type= 
PROBLEM:
${\displaystyle \int (4x+\sqrt{x})dx}$
:::

:::exercise {fs-id1165042461202} type= 
PROBLEM:
${\displaystyle \int \frac{3{x}^{2}+2}{{x}^{2}}dx}$
SOLUTION:
$3x-\frac{2}{x}+C$
:::

:::exercise {fs-id1165042374847} type= 
PROBLEM:
${\displaystyle \int (\text{sec}\;x\;\text{tan}\;x+4x)dx}$
:::

:::exercise {fs-id1165042374915} type= 
PROBLEM:
${\displaystyle \int (4\sqrt{x}+\sqrt[4]{x})dx}$
SOLUTION:
$\frac{8}{3}{x}^{3\text{/}2}+\frac{4}{5}{x}^{5\text{/}4}+C$
:::

:::exercise {fs-id1165042327522} type= 
PROBLEM:
${\displaystyle \int ({x}^{−1\text{/}3}-{x}^{2\text{/}3})}dx$
:::

:::exercise {fs-id1165042700339} type= 
PROBLEM:
${\displaystyle \int \frac{14{x}^{3}+2x+1}{{x}^{3}}dx}$
SOLUTION:
$14x-\frac{2}{x}-\frac{1}{2{x}^{2}}+C$
:::

:::exercise {fs-id1165042700424} type= 
PROBLEM:
${\displaystyle \int ({e}^{x}+{e}^{\text{−}x})}dx$
:::
For the following exercises, solve the initial value problem.

:::exercise {fs-id1165042668731} type= 
PROBLEM:
${f}^{'}(x)={x}^{−3},f(1)=1$
SOLUTION:
$f(x)=-\frac{1}{2{x}^{2}}+\frac{3}{2}$
:::

:::exercise {fs-id1165042668819} type= 
PROBLEM:
${f}^{'}(x)=\sqrt{x}+{x}^{2},f(0)=2$
:::

:::exercise {fs-id1165042315622} type= 
PROBLEM:
${f}^{'}(x)=\text{cos}\;x+{\text{sec}}^{2}(x),f(\frac{\pi}{4})=2+\frac{\sqrt{2}}{2}$
SOLUTION:
$f(x)=\text{sin}\;x+\text{tan}\;x+1$
:::

:::exercise {fs-id1165042684192} type= 
PROBLEM:
${f}^{'}(x)={x}^{3}-8{x}^{2}+16x+1,f(0)=0$
:::

:::exercise {fs-id1165042684316} type= 
PROBLEM:
${f}^{'}(x)=\frac{2}{{x}^{2}}-\frac{{x}^{2}}{2},f(1)=0$
SOLUTION:
$f(x)=-\frac{1}{6}{x}^{3}-\frac{2}{x}+\frac{13}{6}$
:::
For the following exercises, find two possible functions $f$ given the second- or third-order derivatives.

:::exercise {fs-id1165043422439} type= 
PROBLEM:
${f}^{''}(x)={x}^{2}+2$
:::

:::exercise {fs-id1165042326003} type= 
PROBLEM:
${f}^{''}(x)={e}^{\text{−}x}$
SOLUTION:
Answers may vary; one possible answer is $f(x)={e}^{\text{−}x}$
:::

:::exercise {fs-id1165042326066} type= 
PROBLEM:
${f}^{''}(x)=1+x$
:::

:::exercise {fs-id1165042326139} type= 
PROBLEM:
$f''' (x)=\text{cos}\;x$
SOLUTION:
Answers may vary; one possible answer is $f(x)=\text{−}\text{sin}\;x$
:::

:::exercise {fs-id1165042667012} type= 
PROBLEM:
$f''' (x)=8{e}^{−2x}-\text{sin}\;x$
:::

:::exercise {fs-id1165042667092} type= 
PROBLEM:
A car is being driven at a rate of $40$ mph when the brakes are applied. The car decelerates at a constant rate of $10$ ft/sec<sup>2</sup>. How long before the car stops?
SOLUTION:
$5.867$ sec
:::

:::exercise {fs-id1165042667126} type= 
PROBLEM:
In the preceding problem, calculate how far the car travels in the time it takes to stop.
:::

:::exercise {fs-id1165042667147} type= 
PROBLEM:
You are merging onto the freeway, accelerating from rest at a constant rate of $12$ ft/sec<sup>2</sup>. How long does it take you to reach merging speed at $60$ mph?
SOLUTION:
$7.333$ sec
:::

:::exercise {fs-id1165042667181} type= 
PROBLEM:
Based on the previous problem, how far does the car travel to reach merging speed?
:::

:::exercise {fs-id1165042498534} type= 
PROBLEM:
A car company wants to ensure its newest model can stop in $8$ sec when traveling at $75$ mph. If we assume constant deceleration, find the value of deceleration that accomplishes this.
SOLUTION:
$13.75$ ft/sec<sup>2</sup>
:::

:::exercise {fs-id1165042498566} type= 
PROBLEM:
A car company wants to ensure its newest model can stop in less than $450$ ft when traveling at $60$ mph. If we assume constant deceleration, find the value of deceleration that accomplishes this.
:::
For the following exercises, find the antiderivative of the function, assuming $F(0)=0.$

:::exercise {fs-id1165042498620} type= 
PROBLEM:
**[T]** $f(x)={x}^{2}+2$
SOLUTION:
$F(x)=\frac{1}{3}{x}^{3}+2x$
:::

:::exercise {fs-id1165042498693} type= 
PROBLEM:
**[T]** $f(x)=4x-\sqrt{x}$
:::

:::exercise {fs-id1165042631784} type= 
PROBLEM:
**[T]** $f(x)=\text{sin}\;x+2x$
SOLUTION:
$F(x)={x}^{2}-\text{cos}\;x+1$
:::

:::exercise {fs-id1165042631857} type= 
PROBLEM:
**[T]** $f(x)={e}^{x}$
:::

:::exercise {fs-id1165042631917} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{{(x+1)}^{2}}$
SOLUTION:
$F(x)=-\frac{1}{(x+1)}+1$
:::

:::exercise {fs-id1165042418126} type= 
PROBLEM:
**[T]** $f(x)={e}^{−2x}+3{x}^{2}$
:::
For the following exercises, determine whether the statement is true or false. Either prove it is true or find a counterexample if it is false.

:::exercise {fs-id1165042418225} type= 
PROBLEM:
If $f(x)$ is the antiderivative of $v(x),$ then $2f(x)$ is the antiderivative of $2v(x).$
SOLUTION:
True
:::

:::exercise {fs-id1165042518934} type= 
PROBLEM:
If $f(x)$ is the antiderivative of $v(x),$ then $f(2x)$ is the antiderivative of $v(2x).$
:::

:::exercise {fs-id1165042519011} type= 
PROBLEM:
If $f(x)$ is the antiderivative of $v(x),$ then $f(x)+1$ is the antiderivative of $v(x)+1.$
SOLUTION:
False
:::

:::exercise {fs-id1165042519090} type= 
PROBLEM:
If $f(x)$ is the antiderivative of $v(x),$ then ${(f(x))}^{2}$ is the antiderivative of ${(v(x))}^{2}.$
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*? Justify your answer with a proof or a counterexample. Assume that $f(x)$ is continuous and differentiable unless stated otherwise.

:::exercise {fs-id1165042471237} type= 
PROBLEM:
If $f(−1)=−6$ and $f(1)=2,$ then there exists at least one point $x\in [−1,1]$ such that ${f}^{'}(x)=4.$
SOLUTION:
True, by Mean Value Theorem
:::

:::exercise {fs-id1165042471332} type= 
PROBLEM:
If ${f}^{'}(c)=0,$ there is a maximum or minimum at $x=c.$
:::

:::exercise {fs-id1165042459445} type= 
PROBLEM:
There is a function such that $f(x)<0,{f}^{'}(x)>0,$ and ${f}^{''}(x)<0.$ (A graphical “proof” is acceptable for this answer.)
SOLUTION:
True
:::

:::exercise {fs-id1165042459523} type= 
PROBLEM:
There is a function such that there is both an inflection point and a critical point for some value $x=a.$
:::

:::exercise {fs-id1165042459579} type= 
PROBLEM:
Given the graph of ${f}^{'},$ determine where $f$ is increasing or decreasing.

> IMAGE {img:fs-id1165042459605} src=../../media/CNX_Calc_Figure_04_10_201.jpg
> alt: The function increases to cross the x-axis at −2, reaches a maximum and then decreases through the origin, reaches a minimum and then increases to a maximum at 2, decreases to a minimum and then increases to pass through the x-axis at 4 and continues increasing.

SOLUTION:
Increasing: $(−2,0)\cup (4,\infty ),$ decreasing: $(\text{−}\infty ,−2)\cup (0,4)$
:::

:::exercise {fs-id1165042463776} type= 
PROBLEM:
The graph of $f$ is given below. Draw ${f}^{'}.$

> IMAGE {img:fs-id1165042463801} src=../../media/CNX_Calc_Figure_04_10_202.jpg
> alt: The function decreases rapidly and reaches a local minimum at −2, then it increases to reach a local maximum at 0, at which point it decreases slowly at first, then stops decreasing near 1, then continues decreasing to reach a minimum at 3, and then increases rapidly.

:::

:::exercise {fs-id1165042463828} type= 
PROBLEM:
Find the linear approximation $L(x)$ to $y={x}^{2}+\text{tan}(\pi x)$ near $x=\frac{1}{4}.$
SOLUTION:
$L(x)=\frac{17}{16}+\frac{1}{2}(1+4\pi )(x-\frac{1}{4})$
:::

:::exercise {fs-id1165042542808} type= 
PROBLEM:
Find the differential of $y={x}^{2}-5x-6$ and evaluate for $x=2$ with $dx=0.1.$
:::
Find the critical points and the local and absolute extrema of the following functions on the given interval.

:::exercise {fs-id1165042542905} type= 
PROBLEM:
$f(x)=x+{\text{sin}}^{2}(x)$ over $[0,\pi ]$
SOLUTION:
Critical point: $x=\frac{3\pi}{4},$ absolute minimum: $x=0,$ absolute maximum: $x=\pi$
:::

:::exercise {fs-id1165042543007} type= 
PROBLEM:
$f(x)=3{x}^{4}-4{x}^{3}-12{x}^{2}+6$ over $[−3,3]$
:::
Determine over which intervals the following functions are increasing, decreasing, concave up, and concave down.

:::exercise {fs-id1165042460396} type= 
PROBLEM:
$x(t)=3{t}^{4}-8{t}^{3}-18{t}^{2}$
SOLUTION:
Increasing: $(−1,0)\cup (3,\infty ),$ decreasing: $(\text{−}\infty ,−1)\cup (0,3),$ concave up: $(\text{−}\infty ,\frac{1}{3}(2-\sqrt{13}))\cup (\frac{1}{3}(2+\sqrt{13}),\infty ),$ concave down: $(\frac{1}{3}(2-\sqrt{13}),\frac{1}{3}(2+\sqrt{13}))$
:::

:::exercise {fs-id1165042658582} type= 
PROBLEM:
$y=x+\text{sin}(\pi x)$
:::

:::exercise {fs-id1165043217996} type= 
PROBLEM:
$g(x)=x-\sqrt{x}$
SOLUTION:
Increasing: $(\frac{1}{4},\infty ),$ decreasing: $(0,\frac{1}{4}),$ concave up: $(0,\infty ),$ concave down: nowhere
:::

:::exercise {fs-id1165043218093} type= 
PROBLEM:
$f(\theta )=\text{sin}(3\theta )$
:::
Evaluate the following limits.

:::exercise {fs-id1165042469790} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{3x\sqrt{{x}^{2}+1}}{\sqrt{{x}^{4}-1}}$
SOLUTION:
$3$
:::

:::exercise {fs-id1165042711556} type= 
PROBLEM:
$\lim_{x\to \infty}\text{cos}(\frac{1}{x})$
:::

:::exercise {fs-id1165042711602} type= 
PROBLEM:
$\lim_{x\to 1}\frac{x-1}{\text{sin}(\pi x)}$
SOLUTION:
$-\frac{1}{\pi}$
:::

:::exercise {fs-id1165042711663} type= 
PROBLEM:
$\lim_{x\to \infty}{(3x)}^{1\text{/}x}$
:::
Use Newton’s method to find the first two iterations, given the starting point.

:::exercise {fs-id1165042711720} type= 
PROBLEM:
$y={x}^{3}+1,{x}_{0}=0.5$
SOLUTION:
${x}_{1}=−1,{x}_{2}=−1$
:::

:::exercise {fs-id1165042711785} type= 
PROBLEM:
$y=\frac{1}{x+1}=\frac{1}{2},{x}_{0}=0$
:::
Find the antiderivatives $F(x)$ of the following functions.

:::exercise {fs-id1165042499557} type= 
PROBLEM:
$g(x)=\sqrt{x}-\frac{1}{{x}^{2}}$
SOLUTION:
$F(x)=\frac{2{x}^{3\text{/}2}}{3}+\frac{1}{x}+C$
:::

:::exercise {fs-id1165042499642} type= 
PROBLEM:
$f(x)=2x+6\;\text{cos}\;x,F(\pi )={\pi}^{2}+2$
:::
Graph the following functions by hand. Make sure to label the inflection points, critical points, zeros, and asymptotes.

:::exercise {fs-id1165042711284} type= 
PROBLEM:
$y=\frac{1}{x{(x+1)}^{2}}$
SOLUTION:

> IMAGE {img:fs-id1165042711333} src=../../media/CNX_Calc_Figure_04_10_204.jpg
> alt: This graph has vertical asymptotes at x = 0 and x = −1. The first part of the function occurs in the third quadrant with a horizontal asymptote at y = 0. The function decreases quickly from near (−5, 0) to near the vertical asymptote (−1, ∞). On the other side of the asymptote, the function is roughly U-shaped and pointed down in the third quadrant between x = −1 and x = 0 with maximum near (−0.4, −6). On the other side of the x = 0 asympotote, the function decreases from its vertical asymptote near (0, ∞) and to approach the horizontal asymptote y = 0.

Inflection points: none; critical points: $x=-\frac{1}{3};$ zeros: none; vertical asymptotes: $x=−1,$ $x=0;$ horizontal asymptote: $y=0$
:::

:::exercise {fs-id1165042711393} type= 
PROBLEM:
$y=x-\sqrt{4-{x}^{2}}$
:::

:::exercise {fs-id1165042711470} type= 
PROBLEM:
A car is being compacted into a rectangular solid. The volume is decreasing at a rate of $2$ m<sup>3</sup>/sec. The length and width of the compactor are square, but the height is not the same length as the length and width. If the length and width walls move toward each other at a rate of $0.25$ m/sec, find the rate at which the height is changing when the length and width are $2$ m and the height is $1.5$ m.
SOLUTION:
The height is decreasing at a rate of $0.125$ m/sec
:::

:::exercise {fs-id1165042602906} type= 
PROBLEM:
A rocket is launched into space; its kinetic energy is given by $K(t)=(\frac{1}{2})m(t)v{(t)}^{2},$ where $K$ is the kinetic energy in joules, $m$ is the mass of the rocket in kilograms, and $v$ is the velocity of the rocket in meters/second. Assume the velocity is increasing at a rate of $15$ m/sec<sup>2</sup> and the mass is decreasing at a rate of $10$ kg/sec because the fuel is being burned. At what rate is the rocket’s kinetic energy changing when the mass is $2000$ kg and the velocity is $5000$ m/sec? Give your answer in mega-Joules per second (MJ/s), which is equivalent to ${10}^{6}$ J/s.
:::

:::exercise {fs-id1165042603028} type= 
PROBLEM:
The famous {index:Regiomontanus’ problem} for angle maximization was proposed during the 15th century. A painting hangs on a wall with the bottom of the painting a distance $a$ feet above eye level, and the top $b$ feet above eye level. What distance $x$ (in feet) from the wall should the viewer stand to maximize the angle subtended by the painting, $\theta ?$

> IMAGE {img:fs-id1165042603072} src=../../media/CNX_Calc_Figure_04_10_206.jpg
> alt: A point is marked eye level, and from this point a right triangle is made with adjacent side length x and opposite side length a, which is the length from the bottom of the picture to the level of the eye. A second right triangle is made from the point marked eye level, with the adjacent side being x and the other side being length b, which is the height of the picture. The angle between the two hypotenuses is marked θ.

SOLUTION:
$x=\sqrt{ab}$ feet
:::

:::exercise {fs-id1165042603099} type= 
PROBLEM:
An airline sells tickets from Tokyo to Detroit for $\text{\$}1200.$ There are $500$ seats available and a typical flight books $350$ seats. For every $\text{\$}10$ decrease in price, the airline observes an additional five seats sold. What should the fare be to maximize profit? How many passengers would be onboard?
:::

## Glossary
- {def} **antiderivative**: a function $F$ such that ${F}^{'}(x)=f(x)$ for all $x$ in the domain of $f$ is an antiderivative of $f$
- {def} **indefinite integral**: the most general antiderivative of $f(x)$ is the indefinite integral of $f;$ we use the notation ${\displaystyle \int f(x)dx}$ to denote the indefinite integral of $f$
- {def} **initial value problem**: a problem that requires finding a function $y$ that satisfies the differential equation $\frac{dy}{dx}=f(x)$ together with the initial condition $y({x}_{0})={y}_{0}$

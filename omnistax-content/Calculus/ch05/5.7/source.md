# Integrals Resulting in Inverse Trigonometric Functions

## Learning Objectives {section:learning-objectives}
- Integrate functions resulting in inverse trigonometric functions

In this section we focus on integrals that result in inverse trigonometric functions. We have worked with these functions before. Recall from [Functions and Graphs](module:m53472) that trigonometric functions are not one-to-one unless the domains are restricted. When working with inverses of trigonometric functions, we always need to be careful to take these restrictions into account. Also in [Derivatives](module:m53494), we developed formulas for derivatives of inverse trigonometric functions. The formulas developed there give rise directly to integration formulas involving inverse trigonometric functions.

## Integrals that Result in Inverse Sine Functions
Let us begin this last section of the chapter with the three formulas. Along with these formulas, we use substitution to evaluate the integrals. We prove the formula for the inverse sine integral.

:::note [rule] Rule: Integration Formulas Resulting in Inverse Trigonometric Functions
The following integration formulas yield inverse trigonometric functions. Assume $a>0$:
1. 

$$ \int \frac{du}{\sqrt{{a}^{2}-{u}^{2}}}={\text{sin}}^{-1}(\frac{u}{a})+C $$  {eq:fs-id1170572554001}

2. 

$$ {\displaystyle \int \frac{du}{{a}^{2}+{u}^{2}}}=\frac{1}{a}\;{\text{tan}}^{−1}\frac{u}{a}+C $$  {eq:fs-id1170572607870}

3. 

$$ \int \frac{du}{u\sqrt{{u}^{2}-{a}^{2}}}=\frac{1}{a}\;{\text{sec}}^{−1}\frac{|u|}{a}+C $$  {eq:fs-id1170572482564}

:::

### Proof
Let $y={\text{sin}}^{−1}\frac{x}{a}.$ Then $a\;\text{sin}\;y=x.$ Now let’s use implicit differentiation. We obtain

$\begin{array}{rll}\frac{d}{dx}\;(a\;\text{sin}\;y) & = & \frac{d}{dx}\;(x) \\ \\ a\;\text{cos}\;y\;\frac{dy}{dx} & = & 1 \\ \frac{dy}{dx} & = & \frac{1}{a\;\text{cos}\;y}.\end{array}$  {eq:fs-id1170572150624}

For $-\frac{\pi}{2}\le y\le \frac{\pi}{2},\text{cos}\;y\ge 0.$ Thus, applying the Pythagorean identity ${\text{sin}}^{2}y+{\text{cos}}^{2}y=1,$ we have $\text{cos}\;y=\sqrt{1-{\text{sin}}^{2}y}.$ This gives

$\begin{array}{ll}\frac{1}{a\;\text{cos}\;y} & =\frac{1}{a\sqrt{1-{\text{sin}}^{2}y}} \\ \\ & =\frac{1}{\sqrt{{a}^{2}-{a}^{2}{\text{sin}}^{2}y}} \\ & =\frac{1}{\sqrt{{a}^{2}-{x}^{2}}}.\end{array}$  {eq:fs-id1170571660097}

Then for $\text{−}a\le x\le a,$ and generalizing to *u*, we have

${\displaystyle \int \frac{1}{\sqrt{{a}^{2}-{u}^{2}}}du={\text{sin}}^{−1}}(\frac{u}{a})+C.$  {eq:fs-id1170572175143}

□

:::example {ex:fs-id1170571696734} Evaluating a Definite Integral Using Inverse Trigonometric Functions

:::exercise {fs-id1170571596198} type= 
PROBLEM:
Evaluate the definite integral ${\displaystyle \int_{0}^{\frac{1}{2}}\frac{dx}{\sqrt{1-{x}^{2}}}.}$
SOLUTION:
We can go directly to the formula for the antiderivative in the rule on integration formulas resulting in inverse trigonometric functions, and then evaluate the definite integral. We have

$\begin{array}{ll} \\ \\ {\displaystyle \int_{0}^{\frac{1}{2}}\frac{dx}{\sqrt{1-{x}^{2}}}} & ={\text{sin}}^{−1}x{|}_{0}^{\frac{1}{2}} \\ & ={\text{sin}}^{−1}\frac{1}{2}-{\text{sin}}^{−1}0 \\ & =\frac{\pi}{6}-0 \\ & =\frac{\pi}{6}.\end{array}$  {eq:fs-id1170572203987}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572373474} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{\sqrt{1-16{x}^{2}}}}.$
SOLUTION:
$\frac{1}{4}\;{\text{sin}}^{−1}(4x)+C$
COMMENTARY: Hint
Substitute $u=4x$
:::
:::

:::example {ex:fs-id1170572167984} Finding an Antiderivative Involving an Inverse Trigonometric Function

:::exercise {fs-id1170571659174} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{\sqrt{4-9{x}^{2}}}}.$
SOLUTION:
Substitute $u=3x.$ Then $du=3dx$ and we have

${\displaystyle \int \frac{dx}{\sqrt{4-9{x}^{2}}}}=\frac{1}{3}{\displaystyle \int \frac{du}{\sqrt{4-{u}^{2}}}}.$  {eq:fs-id1170571618996}

Applying the formula with $a=2,$ we obtain

$\begin{array}{ll}{\displaystyle \int \frac{dx}{\sqrt{4-9{x}^{2}}}} & =\frac{1}{3}{\displaystyle \int \frac{du}{\sqrt{4-{u}^{2}}}} \\ \\ & =\frac{1}{3}{\text{sin}}^{−1}(\frac{u}{2})+C \\ & =\frac{1}{3}{\text{sin}}^{−1}(\frac{3x}{2})+C.\end{array}$  {eq:fs-id1170572130022}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571698177} type= 
PROBLEM:
Find the indefinite integral using an inverse trigonometric function and substitution for ${\displaystyle \int \frac{dx}{\sqrt{9-{x}^{2}}}}.$
SOLUTION:
${\text{sin}}^{−1}(\frac{x}{3})+C$
COMMENTARY: Hint
Use the formula in the rule on integration formulas resulting in inverse trigonometric functions.
:::
:::

:::example {ex:fs-id1170572546542} Evaluating a Definite Integral

:::exercise {fs-id1170572299153} type= 
PROBLEM:
Evaluate the definite integral ${\displaystyle \int_{0}^{\sqrt{3}\text{/}2}\frac{du}{\sqrt{1-{u}^{2}}}.}$
SOLUTION:
The format of the problem matches the inverse sine formula. Thus,

$\begin{array}{ll} \\ \\ {\displaystyle \int_{0}^{\sqrt{3}\text{/}2}\frac{du}{\sqrt{1-{u}^{2}}}} & ={\text{sin}}^{−1}u{|}_{0}^{\sqrt{3}\text{/}2} \\ & =[{\text{sin}}^{−1}(\frac{\sqrt{3}}{2})]-[{\text{sin}}^{−1}(0)] \\ & =\frac{\pi}{3}.\end{array}$  {eq:fs-id1170572130146}

:::
:::

## Integrals Resulting in Other Inverse Trigonometric Functions
There are six inverse trigonometric functions. However, only three integration formulas are noted in the rule on integration formulas resulting in inverse trigonometric functions because the remaining three are negative versions of the ones we use. The only difference is whether the integrand is positive or negative. Rather than memorizing three more formulas, if the integrand is negative, simply factor out −1 and evaluate the integral using one of the formulas already provided. To close this section, we examine one more formula: the integral resulting in the inverse tangent function.

:::example {ex:fs-id1170572206423} Finding an Antiderivative Involving the Inverse Tangent Function

:::exercise {fs-id1170572215711} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{1}{1+4{x}^{2}}dx.}$
SOLUTION:
Comparing this problem with the formulas stated in the rule on integration formulas resulting in inverse trigonometric functions, the integrand looks similar to the formula for ${\text{tan}}^{−1}u+C.$ So we use substitution, letting $u=2x,$ then $du=2dx$ and $1\text{/}2du=dx.$ Then, we have

$\frac{1}{2}{\displaystyle \int \frac{1}{1+{u}^{2}}du=\frac{1}{2}\;{\text{tan}}^{−1}u+C}=\frac{1}{2}\;{\text{tan}}^{−1}(2x)+C.$  {eq:fs-id1170572548844}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572308096} type= 
PROBLEM:
Use substitution to find the antiderivative  ${\displaystyle \int \frac{dx}{25+4{x}^{2}}.}$
SOLUTION:
$\frac{1}{10}\;{\text{tan}}^{−1}(\frac{2x}{5})+C$
COMMENTARY: Hint
Use the solving strategy from [ref:fs-id1170572206423] and the rule on integration formulas resulting in inverse trigonometric functions.
:::
:::

:::example {ex:fs-id1170572350769} Applying the Integration Formulas

:::exercise {fs-id1170572230273} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{1}{9+{x}^{2}}dx.}$
SOLUTION:
Apply the formula with $a=3.$ Then,

${\displaystyle \int \frac{dx}{9+{x}^{2}}}=\frac{1}{3}\;{\text{tan}}^{−1}(\frac{x}{3})+C.$  {eq:fs-id1170572221498}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572243063} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{16+{x}^{2}}.}$
SOLUTION:
$\frac{1}{4}\;{\text{tan}}^{−1}(\frac{x}{4})+C$
COMMENTARY: Hint
Follow the steps in [ref:fs-id1170572350769].
:::
:::

:::example {ex:fs-id1170571714255} Evaluating a Definite Integral

:::exercise {fs-id1170572220235} type= 
PROBLEM:
Evaluate the definite integral ${\displaystyle \int_{\sqrt{3}\text{/}3}^{\sqrt{3}}\frac{dx}{1+{x}^{2}}.}$
SOLUTION:
Use the formula for the inverse tangent. We have

$\begin{array}{ll} \\ \\ {\displaystyle \int_{\sqrt{3}\text{/}3}^{\sqrt{3}}\frac{dx}{1+{x}^{2}}} & ={\text{tan}}^{−1}x{|}_{\sqrt{3}\text{/}3}^{\sqrt{3}} \\ & =[{\text{tan}}^{−1}(\sqrt{3})]-[{\text{tan}}^{−1}(\frac{\sqrt{3}}{3})] \\ & =\frac{\pi}{6}.\end{array}$  {eq:fs-id1170572099771}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572480548} type= 
PROBLEM:
Evaluate the definite integral ${\displaystyle \int_{0}^{2}\frac{dx}{4+{x}^{2}}}.$
SOLUTION:
$\frac{\pi}{8}$
COMMENTARY: Hint
Follow the procedures from [ref:fs-id1170571714255] to solve the problem.
:::
:::

## Key Concepts {section:key-concepts}
- Formulas for derivatives of inverse trigonometric functions developed in [Derivatives of Exponential and Logarithmic Functions](module:m53584) lead directly to integration formulas involving inverse trigonometric functions.
- Use the formulas listed in the rule on integration formulas resulting in inverse trigonometric functions to match up the correct format and make alterations as necessary to solve the problem.
- Substitution is often required to put the integrand in the correct form.

## Key Equations {section:key-equations}

> TABLE {tab:eip-503} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Integrals That Produce Inverse Trigonometric Functions** | ${\displaystyle \int \frac{du}{\sqrt{{a}^{2}-{u}^{2}}}={\text{sin}}^{−1}(\frac{u}{a})+C}$<br> ${\displaystyle \int \frac{du}{{a}^{2}+{u}^{2}}=\frac{1}{a}\;{\text{tan}}^{−1}(\frac{u}{a})+C}$<br> ${\displaystyle \int \frac{du}{u\sqrt{{u}^{2}-{a}^{2}}}=\frac{1}{a}\;{\text{sec}}^{−1}(\frac{u}{a})+C}$ |

##  {section:section-exercises}
In the following exercises, evaluate each integral in terms of an inverse trigonometric function.

:::exercise {fs-id1170572180188} type= 
PROBLEM:
${\displaystyle \int_{0}^{\sqrt{3}\text{/}2}\frac{dx}{\sqrt{1-{x}^{2}}}}$
SOLUTION:
${\text{sin}}^{−1}x{|}_{0}^{\sqrt{3}\text{/}2}=\frac{\pi}{3}$
:::

:::exercise {fs-id1170572369231} type= 
PROBLEM:
${\displaystyle \int_{−1\text{/}2}^{1\text{/}2}\frac{dx}{\sqrt{1-{x}^{2}}}}$
:::

:::exercise {fs-id1170571609291} type= 
PROBLEM:
${\displaystyle \int_{\sqrt{3}}^{1}\frac{dx}{1+{x}^{2}}}$
SOLUTION:
${\text{tan}}^{−1}x{|}_{\sqrt{3}}^{1}=-\frac{\pi}{12}$
:::

:::exercise {fs-id1170571712219} type= 
PROBLEM:
${\displaystyle \int_{1\text{/}\sqrt{3}}^{\sqrt{3}}\frac{dx}{1+{x}^{2}}}$
:::

:::exercise {fs-id1170572625745} type= 
PROBLEM:
${\displaystyle \int_{\frac{2}{\sqrt{3}}}^{\sqrt{2}}\frac{dx}{|x|\sqrt{{x}^{2}-1}}}$
SOLUTION:
${\text{sec}}^{−1}{|}_{\frac{2}{\sqrt{3}}}^{\sqrt{2}}=\frac{\pi}{4}-\frac{\pi}{6}=\frac{\pi}{12}$
:::

:::exercise {fs-id1170572560653} type= 
PROBLEM:
${\displaystyle \int_{\sqrt{2}}^{2}\frac{dx}{|x|\sqrt{{x}^{2}-1}}}$
:::
In the following exercises, find each indefinite integral, using appropriate substitutions.

:::exercise {fs-id1170572333184} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{9-{x}^{2}}}}$
SOLUTION:
${\text{sin}}^{−1}(\frac{x}{3})+C$
:::

:::exercise {fs-id1170571543108} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{1-16{x}^{2}}}}$
:::

:::exercise {fs-id1170571630356} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{9+{x}^{2}}}$
SOLUTION:
$\frac{1}{3}\;{\text{tan}}^{−1}(\frac{x}{3})+C$
:::

:::exercise {fs-id1170571719603} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{25+16{x}^{2}}}$
:::

:::exercise {fs-id1170571712540} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{|x|\sqrt{{x}^{2}-9}}}$
SOLUTION:
$\frac{1}{3}\;{\text{sec}}^{−1}(\frac{x}{3})+C$
:::

:::exercise {fs-id1170571609447} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{|x|\sqrt{4{x}^{2}-16}}}$
:::

:::exercise {fs-id1170572274931} type= 
PROBLEM:
Explain the relationship $\text{−}{\text{cos}}^{−1}t+C={\displaystyle \int \frac{dt}{\sqrt{1-{t}^{2}}}={\text{sin}}^{−1}t+C.}$ Is it true, in general, that ${\text{cos}}^{−1}t=\text{−}{\text{sin}}^{−1}t?$
SOLUTION:
$\text{cos}(\frac{\pi}{2}-\theta )=\text{sin}\;\theta .$ So, ${\text{sin}}^{−1}t=\frac{\pi}{2}-{\text{cos}}^{−1}t.$ They differ by a constant.
:::

:::exercise {fs-id1170572563040} type= 
PROBLEM:
Explain the relationship ${\text{sec}}^{−1}t+C={\displaystyle \int \frac{dt}{|t|\sqrt{{t}^{2}-1}}=\text{−}{\text{csc}}^{−1}t+C.}$ Is it true, in general, that ${\text{sec}}^{−1}t=\text{−}{\text{csc}}^{−1}t?$
:::

:::exercise {fs-id1170571609258} type= 
PROBLEM:
Explain what is wrong with the following integral: ${\displaystyle \int_{1}^{2}\frac{dt}{\sqrt{1-{t}^{2}}}.}$
SOLUTION:
$\sqrt{1-{t}^{2}}$ is not defined as a real number when $t>1.$
:::

:::exercise {fs-id1170572163878} type= 
PROBLEM:
Explain what is wrong with the following integral: ${\displaystyle \int_{−1}^{1}\frac{dt}{|t|\sqrt{{t}^{2}-1}}.}$
:::
In the following exercises, solve for the antiderivative ${\displaystyle \int f}$ of *f* with $C=0,$ then use a calculator to graph *f* and the antiderivative over the given interval $[a,b].$ Identify a value of *C* such that adding *C* to the antiderivative recovers the definite integral $F(x)={\displaystyle \int_{a}^{x}f(t)dt.}$

:::exercise {fs-id1170571699012} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{1}{\sqrt{9-{x}^{2}}}dx}$ over $[−3,3]$
SOLUTION:

> IMAGE {img:fs-id1170572274902} src=../../media/CNX_Calc_Figure_05_07_201.jpg
> alt: Two graphs. The first shows the function f(x) = 1 / sqrt(9 – x^2). It is an upward opening curve symmetric about the y axis, crossing at (0, 1/3). The second shows the function F(x) = arcsin(1/3 x). It is an increasing curve going through the origin.

The antiderivative is ${\text{sin}}^{−1}(\frac{x}{3})+C.$ Taking $C=\frac{\pi}{2}$ recovers the definite integral.
:::

:::exercise {fs-id1170571649965} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{9}{9+{x}^{2}}dx}$ over $[−6,6]$
:::

:::exercise {fs-id1170572565396} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{\text{cos}\;x}{4+{\text{sin}}^{2}x}dx}$ over $[−6,6]$
SOLUTION:

> IMAGE {img:fs-id1170571678884} src=../../media/CNX_Calc_Figure_05_07_203.jpg
> alt: Two graphs. The first shows the function f(x) = cos(x) / (4 + sin(x)^2). It is an oscillating function over [-6, 6] with turning points at roughly (-3, -2.5), (0, .25), and (3, -2.5), where (0,.25) is a local max and the others are local mins. The second shows the function F(x) = .5 * arctan(.5*sin(x)), which also oscillates over [-6,6]. It has turning points at roughly (-4.5, .25), (-1.5, -.25), (1.5, .25), and (4.5, -.25).

The antiderivative is $\frac{1}{2}\;{\text{tan}}^{−1}(\frac{\text{sin}\;x}{2})+C.$ Taking $C=\frac{1}{2}\;{\text{tan}}^{−1}(\frac{\text{sin}(6)}{2})$ recovers the definite integral.
:::

:::exercise {fs-id1170572368670} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{{e}^{x}}{1+{e}^{2x}}dx}$ over $[−6,6]$
:::
In the following exercises, compute the antiderivative using appropriate substitutions.

:::exercise {fs-id1170571769593} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{sin}}^{−1}tdt}{\sqrt{1-{t}^{2}}}}$
SOLUTION:
$\frac{1}{2}{({\text{sin}}^{−1}t)}^{2}+C$
:::

:::exercise {fs-id1170571636151} type= 
PROBLEM:
${\displaystyle \int \frac{dt}{{\text{sin}}^{−1}t\sqrt{1-{t}^{2}}}}$
:::

:::exercise {fs-id1170572628413} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{tan}}^{−1}(2t)}{1+4{t}^{2}}dt}$
SOLUTION:
$\frac{1}{4}{({\text{tan}}^{−1}(2t))}^{2}+C$
:::

:::exercise {fs-id1170572331872} type= 
PROBLEM:
${\displaystyle \int \frac{t{\text{tan}}^{−1}({t}^{2})}{1+{t}^{4}}dt}$
:::

:::exercise {fs-id1170572558294} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{sec}}^{−1}(\frac{t}{2})}{|t|\sqrt{{t}^{2}-4}}dt}$
SOLUTION:
$\frac{1}{4}({\text{sec}}^{−1}{(\frac{t}{2})}^{2})+C$
:::

:::exercise {fs-id1170571733959} type= 
PROBLEM:
${\displaystyle \int \frac{t{\text{sec}}^{−1}({t}^{2})}{{t}^{2}\sqrt{{t}^{4}-1}}dt}$
:::
In the following exercises, use a calculator to graph the antiderivative ${\displaystyle \int f}$ with $C=0$ over the given interval $[a,b].$ Approximate a value of *C*, if possible, such that adding *C* to the antiderivative gives the same value as the definite integral $F(x)={\displaystyle \int_{a}^{x}f(t)dt.}$

:::exercise {fs-id1170572601262} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{1}{x\sqrt{{x}^{2}-4}}dx}$ over $[2,6]$
SOLUTION:

> IMAGE {img:fs-id1170571679787} src=../../media/CNX_Calc_Figure_05_07_205.jpg
> alt: A graph of the function f(x) = -.5 * arctan(2 / ( sqrt(x^2 – 4) ) ) in quadrant four. It is an increasing concave down curve with a vertical asymptote at x=2.

The antiderivative is $\frac{1}{2}\;{\text{sec}}^{−1}(\frac{x}{2})+C.$ Taking $C=0$ recovers the definite integral over $[2,6].$
:::

:::exercise {fs-id1170571679862} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{1}{(2x+2)\sqrt{x}}dx}$ over $[0,6]$
:::

:::exercise {fs-id1170572249934} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{(\text{sin}\;x+x\;\text{cos}\;x)}{1+{x}^{2}{\text{sin}}^{2}x}dx}$ over $[−6,6]$
SOLUTION:

> IMAGE {img:fs-id1170571638196} src=../../media/CNX_Calc_Figure_05_07_207.jpg
> alt: The graph of f(x) = arctan(x sin(x)) over [-6,6]. It has five turning points at roughly (-5, -1.5), (-2,1), (0,0), (2,1), and (5,-1.5).

The general antiderivative is ${\text{tan}}^{−1}(x\;\text{sin}\;x)+C.$ Taking $C=\text{−}{\text{tan}}^{−1}(6\;\text{sin}(6))$ recovers the definite integral.
:::

:::exercise {fs-id1170571810858} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{2{e}^{−2x}}{\sqrt{1-{e}^{−4x}}}dx}$ over $[0,2]$
:::

:::exercise {fs-id1170571697193} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{1}{x+x{\text{ln}}^{2}x}}dx$ over $[0,2]$
SOLUTION:

> IMAGE {img:fs-id1170571539140} src=../../media/CNX_Calc_Figure_05_07_209.jpg
> alt: A graph of the function f(x) = arctan(ln(x)) over (0, 2]. It is an increasing curve with x-intercept at (1,0).

The general antiderivative is ${\text{tan}}^{−1}(\text{ln}\;x)+C.$ Taking $C=\frac{\pi}{2}={\text{tan}}^{−1}\infty$ recovers the definite integral.
:::

:::exercise {fs-id1170571539209} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{{\text{sin}}^{−1}x}{\sqrt{1-{x}^{2}}}}dx$ over $[−1,1]$
:::
In the following exercises, compute each integral using appropriate substitutions.

:::exercise {fs-id1170572456364} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{t}}{\sqrt{1-{e}^{2t}}}dt}$
SOLUTION:
${\text{sin}}^{−1}({e}^{t})+C$
:::

:::exercise {fs-id1170571580944} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{t}}{1+{e}^{2t}}dt}$
:::

:::exercise {fs-id1170572396478} type= 
PROBLEM:
${\displaystyle \int \frac{dt}{t\sqrt{1-{\text{ln}}^{2}t}}}$
SOLUTION:
${\text{sin}}^{−1}(\text{ln}\;t)+C$
:::

:::exercise {fs-id1170572396552} type= 
PROBLEM:
${\displaystyle \int \frac{dt}{t(1+{\text{ln}}^{2}t)}}$
:::

:::exercise {fs-id1170572218636} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{cos}}^{−1}(2t)}{\sqrt{1-4{t}^{2}}}dt}$
SOLUTION:
$-\frac{1}{4}{({\text{cos}}^{−1}(2t))}^{2}+C$
:::

:::exercise {fs-id1170572386173} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{t}{\text{cos}}^{−1}({e}^{t})}{\sqrt{1-{e}^{2t}}}dt}$
:::
In the following exercises, compute each definite integral.

:::exercise {fs-id1170572643272} type= 
PROBLEM:
${\displaystyle \int_{0}^{1\text{/}2}\frac{\text{tan}({\text{sin}}^{−1}t)}{\sqrt{1-{t}^{2}}}dt}$
SOLUTION:
$\frac{1}{2}\text{ln}(\frac{4}{3})$
:::

:::exercise {fs-id1170572373740} type= 
PROBLEM:
${\displaystyle \int_{1\text{/}4}^{1\text{/}2}\frac{\text{tan}({\text{cos}}^{−1}t)}{\sqrt{1-{t}^{2}}}dt}$
:::

:::exercise {fs-id1170571710706} type= 
PROBLEM:
${\displaystyle \int_{0}^{1\text{/}2}\frac{\text{sin}({\text{tan}}^{−1}t)}{1+{t}^{2}}dt}$
SOLUTION:
$1-\frac{2}{\sqrt{5}}$
:::

:::exercise {fs-id1170572399032} type= 
PROBLEM:
${\displaystyle \int_{0}^{1\text{/}2}\frac{\text{cos}({\text{tan}}^{−1}t)}{1+{t}^{2}}dt}$
:::

:::exercise {fs-id1170572415152} type= 
PROBLEM:
For $A>0,$ compute $I(A)={\displaystyle \int_{\text{−}A}^{A}\frac{dt}{1+{t}^{2}}}$ and evaluate $\lim_{A\to \infty}I(A),$ the area under the graph of $\frac{1}{1+{t}^{2}}$ on $[\text{−}\infty ,\infty ].$
SOLUTION:
$2{\text{tan}}^{−1}(A)\to \pi$ as $A\to \infty$
:::

:::exercise {fs-id1170572629160} type= 
PROBLEM:
For $1<B<\infty ,$ compute $I(B)={\displaystyle \int_{1}^{B}\frac{dt}{t\sqrt{{t}^{2}-1}}}$ and evaluate $\lim_{B\to \infty}I(B),$ the area under the graph of $\frac{1}{t\sqrt{{t}^{2}-1}}$ over $[1,\infty ).$
:::

:::exercise {fs-id1170572569940} type= 
PROBLEM:
Use the substitution $u=\sqrt{2}\;\text{cot}\;x$ and the identity $1+{\text{cot}}^{2}x={\text{csc}}^{2}x$ to evaluate ${\displaystyle \int \frac{dx}{1+{\text{cos}}^{2}x}.}$ (*Hint:* Multiply the top and bottom of the integrand by ${\text{csc}}^{2}x.\text{)}$
SOLUTION:
Using the hint, one has ${\displaystyle \int \frac{{\text{csc}}^{2}x}{{\text{csc}}^{2}x+{\text{cot}}^{2}x}}dx={\displaystyle \int \frac{{\text{csc}}^{2}x}{1+2{\text{cot}}^{2}x}}dx.$ Set $u=\sqrt{2}\text{cot}\;x.$ Then, $du=\text{−}\sqrt{2}{\text{csc}}^{2}x$ and the integral is $-\frac{1}{\sqrt{2}}{\displaystyle \int \frac{du}{1+{u}^{2}}=-\frac{1}{\sqrt{2}}}{\text{tan}}^{−1}u+C=\frac{1}{\sqrt{2}}\;{\text{tan}}^{−1}(\sqrt{2}\text{cot}\;x)+C.$ If one uses the identity ${\text{tan}}^{−1}s+{\text{tan}}^{−1}(\frac{1}{s})=\frac{\pi}{2},$ then this can also be written $\frac{1}{\sqrt{2}}\;{\text{tan}}^{−1}(\frac{\text{tan}\;x}{\sqrt{2}})+C.$
:::

:::exercise {fs-id1170572310020} type= 
PROBLEM:
**[T]** Approximate the points at which the graphs of $f(x)=2{x}^{2}-1$ and $g(x)={(1+4{x}^{2})}^{−3\text{/}2}$ intersect to four decimal places, and approximate the area between their graphs to three decimal places.
:::

:::exercise {fs-id1170571613771} type= 
PROBLEM:
**[T]** Approximate the points at which the graphs of $f(x)={x}^{2}-1$ and ${g(x)=({x}^{2}+1)}^{\frac{1}{2}}$ intersect to four decimal places, and approximate the area between their graphs to three decimal places.
SOLUTION:
$x\approx \pm 1.7321.$ The left endpoint estimate with $N=100$ is 4.781 and these decimals persist for $N=500.$
:::

:::exercise {fs-id1170571661806} type= 
PROBLEM:
Use the following graph to prove that ${\displaystyle \int_{0}^{x}\sqrt{1-{t}^{2}}dt=\frac{1}{2}x\sqrt{1-{x}^{2}}+\frac{1}{2}\;{\text{sin}}^{−1}x}.$

> IMAGE {img:fs-id1170572331317} src=../../media/CNX_Calc_Figure_05_07_211.jpg
> alt: A diagram containing two shapes, a wedge from a circle shaded in blue on top of a triangle shaded in brown. The triangle’s hypotenuse is one of the radii edges of the wedge of the circle and is 1 unit long. There is a dotted red line forming a rectangle out of part of the wedge and the triangle, with the hypotenuse of the triangle as the diagonal of the rectangle. The curve of the circle is described by the equation sqrt(1-x^2).

:::

## Chapter Review Exercises {section:review-exercises}
*True or False.* Justify your answer with a proof or a counterexample. Assume all functions $f$ and $g$ are continuous over their domains.

:::exercise {fs-id1170572347001} type= 
PROBLEM:
If $f(x)>0,{f}^{'}\text{(}x)>0$ for all $x,$ then the right-hand rule underestimates the integral ${\displaystyle \int_{a}^{b}f(x)}.$ Use a graph to justify your answer.
SOLUTION:
False
:::

:::exercise {fs-id1170572451355} type= 
PROBLEM:
${\displaystyle \int_{a}^{b}f{(x)}^{2}dx=}{\displaystyle \int_{a}^{b}f(x)dx}{\displaystyle \int_{a}^{b}f(x)dx}$
:::

:::exercise {fs-id1170572329953} type= 
PROBLEM:
If $f(x)\le g(x)$ for all $x\in [a,b],$ then ${\displaystyle \int_{a}^{b}f(x)}\le {\displaystyle \int_{a}^{b}g(x)}.$
SOLUTION:
True
:::

:::exercise {fs-id1170572379120} type= 
PROBLEM:
All continuous functions have an antiderivative.
:::
Evaluate the Riemann sums ${L}_{4}\;\text{and}\;{R}_{4}$ for the following functions over the specified interval. Compare your answer with the exact answer, when possible, or use a calculator to determine the answer.

:::exercise {fs-id1170572379162} type= 
PROBLEM:
$y=3{x}^{2}-2x+1$ over $[−1,1]$
SOLUTION:
${L}_{4}=5.25,{R}_{4}=3.25,$ exact answer: 4
:::

:::exercise {fs-id1170571613663} type= 
PROBLEM:
$y=\text{ln}({x}^{2}+1)$ over $[0,e]$
:::

:::exercise {fs-id1170572434937} type= 
PROBLEM:
$y={x}^{2}\text{sin}\;x$ over $[0,\pi ]$
SOLUTION:
${L}_{4}=5.364,{R}_{4}=5.364,$ exact answer: 5.870
:::

:::exercise {fs-id1170572412264} type= 
PROBLEM:
$y=\sqrt{x}+\frac{1}{x}$ over $[1,4]$
:::
Evaluate the following integrals.

:::exercise {fs-id1170572627080} type= 
PROBLEM:
${\displaystyle \int_{−1}^{1}({x}^{3}-2{x}^{2}+4x)dx}$
SOLUTION:
$-\frac{4}{3}$
:::

:::exercise {fs-id1170572627151} type= 
PROBLEM:
${\displaystyle \int_{0}^{4}\frac{3t}{\sqrt{1+6{t}^{2}}}dt}$
:::

:::exercise {fs-id1170572572290} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}3}^{\pi \text{/}2}2\;\text{sec}(2\theta )}\text{tan}(2\theta )d\theta$
SOLUTION:
1
:::

:::exercise {fs-id1170571712795} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}{e}^{{\text{cos}}^{2}x}}\text{sin}\;x\;\text{cos}x\;dx$
:::
Find the antiderivative.

:::exercise {fs-id1170572379185} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{(x+4)}^{3}}}$
SOLUTION:
$-\frac{1}{2{(x+4)}^{2}}+C$
:::

:::exercise {fs-id1170572379267} type= 
PROBLEM:
${\displaystyle \int x\;\text{ln}({x}^{2})dx}$
:::

:::exercise {fs-id1170572330260} type= 
PROBLEM:
${\displaystyle \int \frac{4{x}^{2}}{\sqrt{1-{x}^{6}}}dx}$
SOLUTION:
$\frac{4}{3}\;{\text{sin}}^{−1}({x}^{3})+C$
:::

:::exercise {fs-id1170572223520} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{2x}}{1+{e}^{4x}}dx}$
:::
Find the derivative.

:::exercise {fs-id1170571568944} type= 
PROBLEM:
$\frac{d}{dt}{\displaystyle \int_{0}^{t}\frac{\text{sin}\;x}{\sqrt{1+{x}^{2}}}dx}$
SOLUTION:
$\frac{\text{sin}\;t}{\sqrt{1+{t}^{2}}}$
:::

:::exercise {fs-id1170572309715} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{{x}^{3}}\sqrt{4-{t}^{2}}dt}$
:::

:::exercise {fs-id1170572309794} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{\text{ln}(x)}(4t+{e}^{t})dt}$
SOLUTION:
$4\frac{\text{ln}\;x}{x}+1$
:::

:::exercise {fs-id1170572582616} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{0}^{\text{cos}\;x}{e}^{{t}^{2}}}dt$
:::
The following problems consider the historic average cost per gigabyte of RAM on a computer.

> TABLE {tab:fs-id1170572351532} cols=2 class=unnumbered
> summary: A table with two columns and eight rows. The first column has the label “Year” and the values 1980, 1985, 1990, 1995, 2000, 2005, and 2010. The second column has the label “5-Tear Change ($)” and the values 0, -5,468,750, -755,495, -73,005, -29,768, -918, and -177.

| Year | 5-Year Change ($) |
| --- | --- |
| 1980 | 0 |
| 1985 | −5,468,750 |
| 1990 | **−**755,495 |
| 1995 | −73,005 |
| 2000 | −29,768 |
| 2005 | −918 |
| 2010 | −177 |

:::exercise {fs-id1170571638140} type= 
PROBLEM:
If the average cost per gigabyte of RAM in 2010 is $12, find the average cost per gigabyte of RAM in 1980.
SOLUTION:
$6,328,113
:::

:::exercise {fs-id1170571610274} type= 
PROBLEM:
The average cost per gigabyte of RAM can be approximated by the function $C(t)=8,500,000{(0.65)}^{t},$ where $t$ is measured in years since 1980, and $C$ is cost in US$. Find the average cost per gigabyte of RAM for 1980 to 2010.
:::

:::exercise {fs-id1170571610339} type= 
PROBLEM:
Find the average cost of 1GB RAM for 2005 to 2010.
SOLUTION:
$73.36
:::

:::exercise {fs-id1170571610355} type= 
PROBLEM:
The velocity of a bullet from a rifle can be approximated by $v(t)=6400{t}^{2}-6505t+2686,$ where $t$ is seconds after the shot and $v$ is the velocity measured in feet per second. This equation only models the velocity for the first half-second after the shot: $0\le t\le 0.5.$ What is the total distance the bullet travels in 0.5 sec?
:::

:::exercise {fs-id1170572504538} type= 
PROBLEM:
What is the average velocity of the bullet for the first half-second?
SOLUTION:
$\frac{19117}{12}\text{ft/sec},\text{or}\;1593\;\text{ft/sec}$
:::

# Integrals, Exponential Functions, and Logarithms

## Learning Objectives {section:learning-objectives}
- Write the definition of the natural logarithm as an integral.
- Recognize the derivative of the natural logarithm.
- Integrate functions involving the natural logarithmic function.
- Define the number $e$ through an integral.
- Recognize the derivative and integral of the exponential function.
- Prove properties of logarithms and exponential functions using integrals.
- Express general logarithmic and exponential functions in terms of natural logarithms and exponentials.

We already examined exponential functions and logarithms in earlier chapters. However, we glossed over some key details in the previous discussions. For example, we did not study how to treat exponential functions with exponents that are irrational. The definition of the number *e* is another area where the previous development was somewhat incomplete. We now have the tools to deal with these concepts in a more mathematically rigorous way, and we do so in this section.
For purposes of this section, assume we have not yet defined the natural logarithm, the number *e*, or any of the integration and differentiation formulas associated with these functions. By the end of the section, we will have studied these concepts in a mathematically rigorous way (and we will see they are consistent with the concepts we learned earlier).
We begin the section by defining the natural logarithm in terms of an integral. This definition forms the foundation for the section. From this definition, we derive differentiation formulas, define the number $e,$ and expand these concepts to logarithms and exponential functions of any base.

## The Natural Logarithm as an Integral
Recall the power rule for integrals:

${\displaystyle \int {x}^{n}dx=\frac{{x}^{n+1}}{n+1}}+C,\;n≠\text{−}1.$  {eq:fs-id1167793299462}

Clearly, this does not work when $n=−1,$ as it would force us to divide by zero. So, what do we do with ${\displaystyle \int \frac{1}{x}dx}?$ Recall from the Fundamental Theorem of Calculus that ${\displaystyle \int_{1}^{x}\frac{1}{t}dt}$ is an antiderivative of $1\text{/}x.$ Therefore, we can make the following definition.

:::note [definition] Definition
For $x>0,$ define the natural logarithm function by

$$ \text{ln}\;x={\displaystyle \int_{1}^{x}\frac{1}{t}dt}. $$  {eq:fs-id1167793550098}

:::
For $x>1,$ this is just the area under the curve $y=1\text{/}t$ from $1$ to $x.$ For $x<1,$ we have ${\displaystyle \int_{1}^{x}\frac{1}{t}dt}=\text{−}{\displaystyle \int_{x}^{1}\frac{1}{t}dt},$ so in this case it is the negative of the area under the curve from $x\;\text{to}\;1$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_07_001} src=../../media/CNX_Calc_Figure_06_07_001.jpg
> alt: This figure has two graphs. The first is the curve y=1/t. It is decreasing and in the first quadrant. Under the curve is a shaded area. The area is bounded to the left at x=1. The area is labeled “area=lnx”. The second graph is the same curve y=1/t. It has shaded area under the curve bounded to the right by x=1. It is labeled “area=-lnx”.
> caption: (a) When $x>1,$ the natural logarithm is the area under the curve $y=1\text{/}t$ from $1\;\text{to}\;x.$ (b) When $x<1,$ the natural logarithm is the negative of the area under the curve from $x$ to $1.$

Notice that $\text{ln}\;1=0.$ Furthermore, the function $y=1\text{/}t>0$ for $x>0.$ Therefore, by the properties of integrals, it is clear that $\text{ln}\;x$ is increasing for $x>0.$

## Properties of the Natural Logarithm
Because of the way we defined the natural logarithm, the following differentiation formula falls out immediately as a result of to the Fundamental Theorem of Calculus.

:::note [theorem] Derivative of the Natural Logarithm
For $x>0,$ the derivative of the natural logarithm is given by

$\frac{d}{dx}\text{ln}\;x=\frac{1}{x}.$  {eq:fs-id1167793432137}

:::

:::note [theorem] Corollary to the Derivative of the Natural Logarithm
The function $\text{ln}\;x$ is differentiable; therefore, it is continuous.
:::
A graph of $\text{ln}\;x$ is shown in [ref:CNX_Calc_Figure_06_07_002]. Notice that it is continuous throughout its domain of $(0,\infty ).$

> FIGURE {fig:CNX_Calc_Figure_06_07_002} src=../../media/CNX_Calc_Figure_06_07_002.jpg
> alt: This figure is a graph. It is an increasing curve labeled f(x)=lnx. The curve is increasing with the y-axis as an asymptote. The curve intersects the x-axis at x=1.
> caption: The graph of $f(x)=\text{ln}\;x$ shows that it is a continuous function.

:::example {ex:fs-id1167793967054} Calculating Derivatives of Natural Logarithms

:::exercise {fs-id1167793424342} type= 
PROBLEM:
Calculate the following derivatives:
a. $\frac{d}{dx}\text{ln}(5{x}^{3}-2)$
b. $\frac{d}{dx}{(\text{ln}(3x))}^{2}$
SOLUTION:
We need to apply the chain rule in both cases.
a. $\frac{d}{dx}\text{ln}(5{x}^{3}-2)=\frac{15{x}^{2}}{5{x}^{3}-2}$
b. $\frac{d}{dx}{(\text{ln}(3x))}^{2}=\frac{2(\text{ln}(3x))\cdot 3}{3x}=\frac{2(\text{ln}(3x))}{x}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793369601} type= 
PROBLEM:
Calculate the following derivatives:
a. $\frac{d}{dx}\text{ln}(2{x}^{2}+x)$
b. $\frac{d}{dx}{(\text{ln}({x}^{3}))}^{2}$
SOLUTION:
a. $\frac{d}{dx}\text{ln}(2{x}^{2}+x)=\frac{4x+1}{2{x}^{2}+x}$
b. $\frac{d}{dx}{(\text{ln}({x}^{3}))}^{2}=\frac{6\;\text{ln}({x}^{3})}{x}$
COMMENTARY: Hint
Apply the differentiation formula just provided and use the chain rule as necessary.
:::
:::
Note that if we use the absolute value function and create a new function $\text{ln}\;|x|,$ we can extend the domain of the natural logarithm to include $x<0.$ Then $(d\text{/}(dx))\text{ln}\;|x|=1\text{/}x.$ This gives rise to the familiar integration formula.

:::note [theorem] Integral of (1/*u*) *du*
The natural logarithm is the antiderivative of the function $f(u)=1\text{/}u\text{:}$

${\displaystyle \int \frac{1}{u}}du=\text{ln}\;|u|+C.$  {eq:fs-id1167793973017}

:::

:::example {ex:fs-id1167793423035} Calculating Integrals Involving Natural Logarithms

:::exercise {fs-id1167793948151} type= 
PROBLEM:
Calculate the integral ${\displaystyle \int \frac{x}{{x}^{2}+4}}dx.$
SOLUTION:
Using $u$-substitution, let $u={x}^{2}+4.$ Then $du=2x\;dx$ and we have

${\displaystyle \int \frac{x}{{x}^{2}+4}}dx=\frac{1}{2}{\displaystyle \int \frac{1}{u}du=\frac{1}{2}\text{ln}\;|u|+C=}\frac{1}{2}\text{ln}\;|{x}^{2}+4|+C=\frac{1}{2}\text{ln}({x}^{2}+4)+C.$  {eq:fs-id1167793971678}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794000383} type= 
PROBLEM:
Calculate the integral ${\displaystyle \int \frac{{x}^{2}}{{x}^{3}+6}}dx.$
SOLUTION:
${\displaystyle \int \frac{{x}^{2}}{{x}^{3}+6}}dx=\frac{1}{3}\text{ln}\;|{x}^{3}+6|+C$
COMMENTARY: Hint
Apply the integration formula provided earlier and use *u*-substitution as necessary.
:::
:::
Although we have called our function a “logarithm,” we have not actually proved that any of the properties of logarithms hold for this function. We do so here.

:::note [theorem] Properties of the Natural Logarithm
If $a,b>0$ and $r$ is a rational number, then
1. $\text{ln}\;1=0$
2. $\text{ln}(ab)=\text{ln}\;a+\text{ln}\;b$
3. $\text{ln}(\frac{a}{b})=\text{ln}\;a-\text{ln}\;b$
4. $\text{ln}({a}^{r})=r\;\text{ln}\;a$
:::

### Proof
i. By definition, $\text{ln}\;1={\displaystyle \int_{1}^{1}\frac{1}{t}}dt=0.$
ii. We have

$\text{ln}(ab)={\displaystyle \int_{1}^{ab}\frac{1}{t}}dt={\displaystyle \int_{1}^{a}\frac{1}{t}}dt+{\displaystyle \int_{a}^{ab}\frac{1}{t}}dt.$  {eq:fs-id1167793964775}

Use $u\text{-substitution}$ on the last integral in this expression. Let $u=t\text{/}a.$ Then $du=(1\text{/}a)dt.$ Furthermore, when $t=a,u=1,$ and when $t=ab,u=b.$ So we get

$\text{ln}(ab)={\displaystyle \int_{1}^{a}\frac{1}{t}}dt+{\displaystyle \int_{a}^{ab}\frac{1}{t}}dt={\displaystyle \int_{1}^{a}\frac{1}{t}}dt+{\displaystyle \int_{a}^{ab}\frac{a}{t}\cdot \frac{1}{a}}dt={\displaystyle \int_{1}^{a}\frac{1}{t}dt+}{\displaystyle \int_{1}^{b}\frac{1}{u}du=\text{ln}\;a+\text{ln}\;b.}$  {eq:fs-id1167793490878}

iv. Note that

$\frac{d}{dx}\text{ln}({x}^{r})=\frac{r{x}^{r-1}}{{x}^{r}}=\frac{r}{x}.$  {eq:fs-id1167793951598}

Furthermore,

$\frac{d}{dx}(r\;\text{ln}\;x)=\frac{r}{x}.$  {eq:fs-id1167793384987}

Since the derivatives of these two functions are the same, by the Fundamental Theorem of Calculus, they must differ by a constant. So we have

$\text{ln}({x}^{r})=r\;\text{ln}\;x+C$  {eq:fs-id1167793563854}

for some constant $C.$ Taking $x=1,$ we get

$\begin{array}{rll}\text{ln}({1}^{r}) & = & r\;\text{ln}(1)+C \\ 0 & = & r(0)+C \\ C & = & 0.\end{array}$  {eq:fs-id1167793510762}

Thus $\text{ln}({x}^{r})=r\;\text{ln}\;x$ and the proof is complete. Note that we can extend this property to irrational values of $r$ later in this section.
Part iii. follows from parts ii. and iv. and the proof is left to you.
□

:::example {ex:fs-id1167794077123} Using Properties of Logarithms

:::exercise {fs-id1167794077125} type= 
PROBLEM:
Use properties of logarithms to simplify the following expression into a single logarithm:

$\text{ln}\;9-2\;\text{ln}\;3+\text{ln}(\frac{1}{3}).$  {eq:fs-id1167793590440}

SOLUTION:
We have

$\text{ln}\;9-2\;\text{ln}\;3+\text{ln}(\frac{1}{3})=\text{ln}({3}^{2})-2\;\text{ln}\;3+\text{ln}({3}^{−1})=2\;\text{ln}\;3-2\;\text{ln}\;3-\text{ln}\;3=\text{−}\text{ln}\;3.$  {eq:fs-id1167794337029}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793294688} type= 
PROBLEM:
Use properties of logarithms to simplify the following expression into a single logarithm:

$\text{ln}\;8-\text{ln}\;2-\text{ln}(\frac{1}{4}).$  {eq:fs-id1167793607837}

SOLUTION:
$4\;\text{ln}\;2$
COMMENTARY: Hint
Apply the properties of logarithms.
:::
:::

## Defining the Number *e*
Now that we have the natural logarithm defined, we can use that function to define the number $e.$

:::note [definition] Definition
The number $e$ is defined to be the real number such that

$\text{ln}\;e=1.$  {eq:fs-id1167794140148}

:::
To put it another way, the area under the curve $y=1\text{/}t$ between $t=1$ and $t=e$ is $1$ ([ref:CNX_Calc_Figure_06_07_003]). The proof that such a number exists and is unique is left to you. (*Hint*: Use the Intermediate Value Theorem to prove existence and the fact that $\text{ln}\;x$ is increasing to prove uniqueness.)

> FIGURE {fig:CNX_Calc_Figure_06_07_003} src=../../media/CNX_Calc_Figure_06_07_003.jpg
> alt: This figure is a graph. It is the curve y=1/t. It is decreasing and in the first quadrant. Under the curve is a shaded area. The area is bounded to the left at x=1 and to the right at x=e. The area is labeled “area=1”.
> caption: The area under the curve from $1$ to $e$ is equal to one.

The number $e$ can be shown to be irrational, although we won’t do so here (see the Student Project in [Taylor and Maclaurin Series](module:m53817)). Its approximate value is given by

$e\approx 2.71828182846.$  {eq:fs-id1167793443440}

## The Exponential Function
We now turn our attention to the function ${e}^{x}.$ Note that the natural logarithm is one-to-one and therefore has an inverse function. For now, we denote this inverse function by $\text{exp}\;x.$ Then,

$\text{exp}(\text{ln}\;x)=x\;\text{for}\;x>0\;\text{and}\;\text{ln}(\text{exp}\;x)=x\;\text{for all}\;x.$  {eq:fs-id1167793514717}

The following figure shows the graphs of $\text{exp}\;x$ and $\text{ln}\;x.$

> FIGURE {fig:CNX_Calc_Figure_06_07_004} src=../../media/CNX_Calc_Figure_06_07_004.jpg
> alt: This figure is a graph. It has three curves. The first curve is labeled exp x. It is an increasing curve with the x-axis as a horizontal asymptote. It intersects the y-axis at y=1. The second curve is a diagonal line through the origin. The third curve is labeled lnx. It is an increasing curve with the y-axis as an vertical axis. It intersects the x-axis at x=1.
> caption: The graphs of $\text{ln}\;x$ and $\text{exp}\;x.$

We hypothesize that $\text{exp}\;x={e}^{x}.$ For rational values of $x,$ this is easy to show. If $x$ is rational, then we have $\text{ln}({e}^{x})=x\;\text{ln}\;e=x.$ Thus, when $x$ is rational, ${e}^{x}=\text{exp}\;x.$ For irrational values of $x,$ we simply define ${e}^{x}$ as the inverse function of $\text{ln}\;x.$

:::note [definition] Definition
For any real number $x,$ define $y={e}^{x}$ to be the number for which

$$ \text{ln}\;y=\text{ln}({e}^{x})=x. $$  {eq:fs-id1167793447883}

:::
Then we have ${e}^{x}=\text{exp}(x)$ for all $x,$ and thus

$$ {e}^{\text{ln}\;x}=x\;\text{for}\;x>0\;\text{and}\;\text{ln}({e}^{x})=x $$  {eq:fs-id1167793564127}

for all $x.$

## Properties of the Exponential Function
Since the exponential function was defined in terms of an inverse function, and not in terms of a power of $e,$ we must verify that the usual laws of exponents hold for the function ${e}^{x}.$

:::note [theorem] Properties of the Exponential Function
If $p$ and $q$ are any real numbers and $r$ is a rational number, then
1. ${e}^{p}{e}^{q}={e}^{p+q}$
2. $\frac{{e}^{p}}{{e}^{q}}={e}^{p-q}$
3. ${({e}^{p})}^{r}={e}^{pr}$
:::

### Proof
Note that if $p$ and $q$ are rational, the properties hold. However, if $p$ or $q$ are irrational, we must apply the inverse function definition of ${e}^{x}$ and verify the properties. Only the first property is verified here; the other two are left to you. We have

$\text{ln}({e}^{p}{e}^{q})=\text{ln}({e}^{p})+\text{ln}({e}^{q})=p+q=\text{ln}({e}^{p+q}).$  {eq:fs-id1167793301084}

Since $\text{ln}\;x$ is one-to-one, then

${e}^{p}{e}^{q}={e}^{p+q}.$  {eq:fs-id1167794329135}

□
As with part iv. of the logarithm properties, we can extend property iii. to irrational values of $r,$ and we do so by the end of the section.
We also want to verify the differentiation formula for the function $y={e}^{x}.$ To do this, we need to use implicit differentiation. Let $y={e}^{x}.$ Then

$\begin{array}{rll}\text{ln}\;y & = & x \\ \frac{d}{dx}\text{ln}\;y & = & \frac{d}{dx}x \\ \frac{1}{y}\;\frac{dy}{dx} & = & 1 \\ \frac{dy}{dx} & = & y.\end{array}$  {eq:fs-id1167794095942}

Thus, we see

$\frac{d}{dx}{e}^{x}={e}^{x}$  {eq:fs-id1167793959723}

as desired, which leads immediately to the integration formula

${\displaystyle \int {e}^{x}dx}={e}^{x}+C.$  {eq:fs-id1167793924216}

We apply these formulas in the following examples.

:::example {ex:fs-id1167793272158} Using Properties of Exponential Functions

:::exercise {fs-id1167794098635} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dt}{e}^{3t}{e}^{{t}^{2}}$
b. $\frac{d}{dx}{e}^{3{x}^{2}}$
SOLUTION:
We apply the chain rule as necessary.
a. $\frac{d}{dt}{e}^{3t}{e}^{{t}^{2}}=\frac{d}{dt}{e}^{3t+{t}^{2}}={e}^{3t+{t}^{2}}(3+2t)$
b. $\frac{d}{dx}{e}^{3{x}^{2}}={e}^{3{x}^{2}}6x$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793442905} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dx}(\frac{{e}^{{x}^{2}}}{{e}^{5x}})$
b. $\frac{d}{dt}{({e}^{2t})}^{3}$
SOLUTION:
a. $\frac{d}{dx}(\frac{{e}^{{x}^{2}}}{{e}^{5x}})={e}^{{x}^{2}-5x}(2x-5)$
b. $\frac{d}{dt}{({e}^{2t})}^{3}=6{e}^{6t}$
COMMENTARY: Hint
Use the properties of exponential functions and the chain rule as necessary.
:::
:::

:::example {ex:fs-id1167793944672} Using Properties of Exponential Functions

:::exercise {fs-id1167794031059} type= 
PROBLEM:
Evaluate the following integral: ${\displaystyle \int 2x{e}^{\text{−}{x}^{2}}dx}.$
SOLUTION:
Using $u$-substitution, let $u=\text{−}{x}^{2}.$ Then $du=−2x\;dx,$ and we have

${\displaystyle \int 2x{e}^{\text{−}{x}^{2}}dx}=\text{−}{\displaystyle \int {e}^{u}du}=\text{−}{e}^{u}+C=\text{−}{e}^{\text{−}{x}^{2}}+C.$  {eq:fs-id1167793956578}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794060772} type= 
PROBLEM:
Evaluate the following integral: ${\displaystyle \int \frac{4}{{e}^{3x}}}dx.$
SOLUTION:
${\displaystyle \int \frac{4}{{e}^{3x}}dx}=-\frac{4}{3}{e}^{−3x}+C$
COMMENTARY: Hint
Use the properties of exponential functions and $u\text{-substitution}$ as necessary.
:::
:::

## General Logarithmic and Exponential Functions
We close this section by looking at exponential functions and logarithms with bases other than $e.$ Exponential functions are functions of the form $f(x)={a}^{x}.$ Note that unless $a=e,$ we still do not have a mathematically rigorous definition of these functions for irrational exponents. Let’s rectify that here by defining the function $f(x)={a}^{x}$ in terms of the exponential function ${e}^{x}.$ We then examine logarithms with bases other than $e$ as inverse functions of exponential functions.

:::note [definition] Definition
For any $a>0,$ and for any real number $x,$ define $y={a}^{x}$ as follows:

$y={a}^{x}={e}^{x\;\text{ln}\;a}.$  {eq:fs-id1167793420642}

:::
Now ${a}^{x}$ is defined rigorously for all values of *x*. This definition also allows us to generalize property iv. of logarithms and property iii. of exponential functions to apply to both rational and irrational values of $r.$ It is straightforward to show that properties of exponents hold for general exponential functions defined in this way.
Let’s now apply this definition to calculate a differentiation formula for ${a}^{x}.$ We have

$\frac{d}{dx}{a}^{x}=\frac{d}{dx}{e}^{x\;\text{ln}\;a}={e}^{x\;\text{ln}\;a}\text{ln}\;a={a}^{x}\text{ln}\;a.$  {eq:fs-id1167793559160}

The corresponding integration formula follows immediately.

:::note [theorem] Derivatives and Integrals Involving General Exponential Functions
Let $a>0.$ Then,

$\frac{d}{dx}{a}^{x}={a}^{x}\text{ln}\;a$  {eq:fs-id1167793271586}

and

${\displaystyle \int {a}^{x}dx}=\frac{1}{\text{ln}\;a}{a}^{x}+C.$  {eq:fs-id1167793562030}

:::
If $a≠1,$ then the function ${a}^{x}$ is one-to-one and has a well-defined inverse. Its inverse is denoted by ${\text{log}}_{a}x.$ Then,

$y={\text{log}}_{a}x\;\text{if and only if}\;x={a}^{y}.$  {eq:fs-id1167793776857}

Note that general logarithm functions can be written in terms of the natural logarithm. Let $y={\text{log}}_{a}x.$ Then, $x={a}^{y}.$ Taking the natural logarithm of both sides of this second equation, we get

$\begin{array}{rll}\text{ln}\;x & = & \text{ln}({a}^{y}) \\ \text{ln}\;x & = & y\;\text{ln}\;a \\ y & = & \frac{\text{ln}\;x}{\text{ln}\;a} \\ {\text{log}}_{a}x & = & \frac{\text{ln}\;x}{\text{ln}\;a}.\end{array}$  {eq:fs-id1167793452526}

Thus, we see that all logarithmic functions are constant multiples of one another. Next, we use this formula to find a differentiation formula for a logarithm with base $a.$ Again, let $y={\text{log}}_{a}x.$ Then,

$\begin{array}{rl}\frac{dy}{dx} & =\frac{d}{dx}({\text{log}}_{a}x) \\ & =\frac{d}{dx}(\frac{\text{ln}\;x}{\text{ln}\;a}) \\ & =(\frac{1}{\text{ln}\;a})\frac{d}{dx}(\text{ln}\;x) \\ & =\frac{1}{\text{ln}\;a}\cdot \frac{1}{x} \\ & =\frac{1}{x\;\text{ln}\;a}.\end{array}$  {eq:fs-id1167793372775}

:::note [theorem] Derivatives of General Logarithm Functions
Let $a>0.$ Then,

$\frac{d}{dx}{\text{log}}_{a}x=\frac{1}{x\;\text{ln}\;a}.$  {eq:fs-id1167794139845}

:::

:::example {ex:fs-id1167793948184} Calculating Derivatives of General Exponential and Logarithm Functions

:::exercise {fs-id1167793948186} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dt}({4}^{t}\cdot {2}^{{t}^{2}})$
b. $\frac{d}{dx}{\text{log}}_{8}(7{x}^{2}+4)$
SOLUTION:
We need to apply the chain rule as necessary.
a. $\frac{d}{dt}({4}^{t}\cdot {2}^{{t}^{2}})=\frac{d}{dt}({2}^{2t}\cdot {2}^{{t}^{2}})=\frac{d}{dt}({2}^{2t+{t}^{2}})={2}^{2t+{t}^{2}}\text{ln}(2)(2+2t)$
b. $\frac{d}{dx}{\text{log}}_{8}(7{x}^{2}+4)=\frac{1}{(7{x}^{2}+4)(\text{ln}\;8)}(14x)$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793455291} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dt}\;{4}^{{t}^{4}}$
b. $\frac{d}{dx}{\text{log}}_{3}(\sqrt{{x}^{2}+1})$
SOLUTION:
a. $\frac{d}{dt}{4}^{{t}^{4}}={4}^{{t}^{4}}(\text{ln}\;4)(4{t}^{3})$
b. $\frac{d}{dx}{\text{log}}_{3}(\sqrt{{x}^{2}+1})=\frac{x}{(\text{ln}\;3)({x}^{2}+1)}$
COMMENTARY: Hint
Use the formulas and apply the chain rule as necessary.
:::
:::

:::example {ex:fs-id1167793499138} Integrating General Exponential Functions

:::exercise {fs-id1167793499141} type= 
PROBLEM:
Evaluate the following integral: ${\displaystyle \int \frac{3}{{2}^{3x}}}dx.$
SOLUTION:
Use $u\text{-substitution}$ and let $u=−3x.$ Then $du=−3dx$ and we have

${\displaystyle \int \frac{3}{{2}^{3x}}}dx={\displaystyle \int 3\cdot {2}^{−3x}}dx=\text{−}{\displaystyle \int {2}^{u}du}=-\frac{1}{\text{ln}\;2}{2}^{u}+C=-\frac{1}{\text{ln}\;2}{2}^{−3x}+C.$  {eq:fs-id1167793929418}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793789608} type= 
PROBLEM:
Evaluate the following integral: ${\displaystyle \int {x}^{2}{2}^{{x}^{3}}dx}.$
SOLUTION:
${\displaystyle \int {x}^{2}{2}^{{x}^{3}}dx}=\frac{1}{3\;\text{ln}\;2}{2}^{{x}^{3}}+C$
COMMENTARY: Hint
Use the properties of exponential functions and $u\text{-substitution}$ as necessary.
:::
:::

## Key Concepts {section:key-concepts}
- The earlier treatment of logarithms and exponential functions did not define the functions precisely and formally. This section develops the concepts in a mathematically rigorous way.
- The cornerstone of the development is the definition of the natural logarithm in terms of an integral.
- The function ${e}^{x}$ is then defined as the inverse of the natural logarithm.
- General exponential functions are defined in terms of ${e}^{x},$ and the corresponding inverse functions are general logarithms.
- Familiar properties of logarithms and exponents still hold in this more rigorous context.

## Key Equations {section:key-equations}

> TABLE {tab:eip-510} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Natural logarithm function** | $\text{ln}\;x={\displaystyle \int_{1}^{x}\frac{1}{t}}dt$ Z |
| **Exponential function** $y={e}^{x}$ | $\text{ln}\;y=\text{ln}({e}^{x})=x$ Z |

##  {section:section-exercises}
For the following exercises, find the derivative $\frac{dy}{dx}.$

:::exercise {fs-id1167793363071} type= 
PROBLEM:
$y=\text{ln}(2x)$
SOLUTION:
$\frac{1}{x}$
:::

:::exercise {fs-id1167794097588} type= 
PROBLEM:
$y=\text{ln}(2x+1)$
:::

:::exercise {fs-id1167793831549} type= 
PROBLEM:
$y=\frac{1}{\text{ln}\;x}$
SOLUTION:
$-\frac{1}{x{(\text{ln}\;x)}^{2}}$
:::
For the following exercises, find the indefinite integral.

:::exercise {fs-id1167793541108} type= 
PROBLEM:
${\displaystyle \int \frac{dt}{3t}}$
:::

:::exercise {fs-id1167793367825} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{1+x}}$
SOLUTION:
$\text{ln}(x+1)+C$
:::
For the following exercises, find the derivative $dy\text{/}dx.$ (You can use a calculator to plot the function and the derivative to confirm that it is correct.)

:::exercise {fs-id1167793706119} type= 
PROBLEM:
**[T]** $y=\frac{\text{ln}(x)}{x}$
:::

:::exercise {fs-id1167793510876} type= 
PROBLEM:
**[T]** $y=x\;\text{ln}(x)$
SOLUTION:
$\text{ln}(x)+1$
:::

:::exercise {fs-id1167793628640} type= 
PROBLEM:
**[T]** $y={\text{log}}_{10}x$
:::

:::exercise {fs-id1167793244348} type= 
PROBLEM:
**[T]** $y=\text{ln}(\text{sin}\;x)$
SOLUTION:
$\text{cot}(x)$
:::

:::exercise {fs-id1167793504037} type= 
PROBLEM:
**[T]** $y=\text{ln}(\text{ln}\;x)$
:::

:::exercise {fs-id1167793423443} type= 
PROBLEM:
**[T]** $y=7\;\text{ln}(4x)$
SOLUTION:
$\frac{7}{x}$
:::

:::exercise {fs-id1167793293705} type= 
PROBLEM:
**[T]** $y=\text{ln}({(4x)}^{7})$
:::

:::exercise {fs-id1167794073092} type= 
PROBLEM:
**[T]** $y=\text{ln}(\text{tan}\;x)$
SOLUTION:
$\text{csc}(x)\text{sec}\;x$
:::

:::exercise {fs-id1167793563636} type= 
PROBLEM:
**[T]** $y=\text{ln}(\text{tan}(3x))$
:::

:::exercise {fs-id1167793281522} type= 
PROBLEM:
**[T]** $y=\text{ln}({\text{cos}}^{2}x)$
SOLUTION:
$−2\;\text{tan}\;x$
:::
For the following exercises, find the definite or indefinite integral.

:::exercise {fs-id1167793553760} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{3+x}}$
:::

:::exercise {fs-id1167793372398} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dt}{3+2t}}$
SOLUTION:
$\frac{1}{2}\text{ln}(\frac{5}{3})$
:::

:::exercise {fs-id1167793582462} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}\frac{x\;dx}{{x}^{2}+1}}$
:::

:::exercise {fs-id1167794122084} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}\frac{{x}^{3}dx}{{x}^{2}+1}}$
SOLUTION:
$2-\frac{1}{2}\text{ln}(5)$
:::

:::exercise {fs-id1167793499058} type= 
PROBLEM:
${\displaystyle \int_{2}^{e}\frac{dx}{x\;\text{ln}\;x}}$
:::

:::exercise {fs-id1167794054231} type= 
PROBLEM:
${\displaystyle \int_{2}^{e}\frac{dx}{{x\;(\text{ln}\;x)}^{2}}}$
SOLUTION:
$\frac{1}{\text{ln}(2)}-1$
:::

:::exercise {fs-id1167793481974} type= 
PROBLEM:
${\displaystyle \int \frac{\text{cos}\;x\;dx}{\text{sin}\;x}}$
:::

:::exercise {fs-id1167793469786} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}\text{tan}\;x\;dx}$
SOLUTION:
$\frac{1}{2}\text{ln}(2)$
:::

:::exercise {fs-id1167794005239} type= 
PROBLEM:
${\displaystyle \int \text{cot}(3x)dx}$
:::

:::exercise {fs-id1167794291581} type= 
PROBLEM:
${\displaystyle \int \frac{{(\text{ln}\;x)}^{2}dx}{x}}$
SOLUTION:
$\frac{1}{3}{(\text{ln}\;x)}^{3}$
:::
For the following exercises, compute $dy\text{/}dx$ by differentiating $\text{ln}\;y.$

:::exercise {fs-id1167793518492} type= 
PROBLEM:
$y=\sqrt{{x}^{2}+1}$
:::

:::exercise {fs-id1167793394990} type= 
PROBLEM:
$y=\sqrt{{x}^{2}+1}\sqrt{{x}^{2}-1}$
SOLUTION:
$\frac{2{x}^{3}}{\sqrt{{x}^{2}+1}\sqrt{{x}^{2}-1}}$
:::

:::exercise {fs-id1167793595222} type= 
PROBLEM:
$y={e}^{\text{sin}\;x}$
:::

:::exercise {fs-id1167793634250} type= 
PROBLEM:
$y={x}^{−1\text{/}x}$
SOLUTION:
${x}^{−2-(1\text{/}x)}(\text{ln}\;x-1)$
:::

:::exercise {fs-id1167793465279} type= 
PROBLEM:
$y={e}^{(ex)}$
:::

:::exercise {fs-id1167793627001} type= 
PROBLEM:
$y={x}^{e}$
SOLUTION:
$e{x}^{e-1}$
:::

:::exercise {fs-id1167793445751} type= 
PROBLEM:
$y={x}^{(ex)}$
:::

:::exercise {fs-id1167793543331} type= 
PROBLEM:
$y=\sqrt{x}\;\sqrt[3]{x}\;\sqrt[6]{x}$
SOLUTION:
$1$
:::

:::exercise {fs-id1167793566023} type= 
PROBLEM:
$y={x}^{−1\text{/}\text{ln}\;x}$
:::

:::exercise {fs-id1167793566062} type= 
PROBLEM:
$y={e}^{\text{−}\text{ln}\;x}$
SOLUTION:
$-\frac{1}{{x}^{2}}$
:::
For the following exercises, evaluate by any method.

:::exercise {fs-id1167793315561} type= 
PROBLEM:
${\displaystyle \int_{5}^{10}\frac{dt}{t}-{\displaystyle \int_{5x}^{10x}\frac{dt}{t}}}$
:::

:::exercise {fs-id1167793937978} type= 
PROBLEM:
${\displaystyle \int_{1}^{{e}^{\pi}}\frac{dx}{x}}+{\displaystyle \int_{−2}^{−1}\frac{dx}{x}}$
SOLUTION:
$\pi -\text{ln}(2)$
:::

:::exercise {fs-id1167794127468} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{x}^{1}\frac{dt}{t}}$
:::

:::exercise {fs-id1167794127523} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{x}^{{x}^{2}}\frac{dt}{t}}$
SOLUTION:
$\frac{1}{x}$
:::

:::exercise {fs-id1167794146835} type= 
PROBLEM:
$\frac{d}{dx}\text{ln}(\text{sec}\;x+\text{tan}\;x)$
:::
For the following exercises, use the function $\text{ln}\;x.$ If you are unable to find intersection points analytically, use a calculator.

:::exercise {fs-id1167793423297} type= 
PROBLEM:
Find the area of the region enclosed by $x=1$ and $y=5$ above $y=\text{ln}\;x.$
SOLUTION:
${e}^{5}-6\;{\text{units}}^{2}$
:::

:::exercise {fs-id1167793541870} type= 
PROBLEM:
**[T]** Find the arc length of $\text{ln}\;x$ from $x=1$ to $x=2.$
:::

:::exercise {fs-id1167793454016} type= 
PROBLEM:
Find the area between $\text{ln}\;x$ and the *x*-axis from $x=1\;\text{to}\;x=2.$
SOLUTION:
$\text{ln}(4)-1\;{\text{units}}^{2}$
:::

:::exercise {fs-id1167793713080} type= 
PROBLEM:
Find the volume of the shape created when rotating this curve from $x=1\;\text{to}\;x=2$ around the *x*-axis, as pictured here.

> IMAGE {img:fs-id1167793960058} src=../../media/CNX_Calc_Figure_06_07_201.jpg
> alt: This figure is a surface. It has been generated by revolving the curve ln x about the x-axis. The surface is inside of a cube showing it is 3-dimensinal.

:::

:::exercise {fs-id1167793510646} type= 
PROBLEM:
**[T]** Find the surface area of the shape created when rotating the curve in the previous exercise from $x=1$ to $x=2$ around the *x*-axis.
SOLUTION:
$2.8656$
:::
If you are unable to find intersection points analytically in the following exercises, use a calculator.

:::exercise {fs-id1167793510699} type= 
PROBLEM:
Find the area of the hyperbolic quarter-circle enclosed by $x=2\;\text{and}\;y=2$ above $y=1\text{/}x.$
:::

:::exercise {fs-id1167794209645} type= 
PROBLEM:
**[T]** Find the arc length of $y=1\text{/}x$ from $x=1\;\text{to}\;x=4.$
SOLUTION:
$3.1502$
:::

:::exercise {fs-id1167793570750} type= 
PROBLEM:
Find the area under $y=1\text{/}x$ and above the *x*-axis from $x=1\;\text{to}\;x=4.$
:::
For the following exercises, verify the derivatives and antiderivatives.

:::exercise {fs-id1167793593498} type= 
PROBLEM:
$\frac{d}{dx}\text{ln}(x+\sqrt{{x}^{2}+1})=\frac{1}{\sqrt{1+{x}^{2}}}$
:::

:::exercise {fs-id1167793377930} type= 
PROBLEM:
$\frac{d}{dx}\text{ln}(\frac{x-a}{x+a})=\frac{2a}{({x}^{2}-{a}^{2})}$
:::

:::exercise {fs-id1167793380054} type= 
PROBLEM:
$\frac{d}{dx}\text{ln}(\frac{1+\sqrt{1-{x}^{2}}}{x})=-\frac{1}{x\sqrt{1-{x}^{2}}}$
:::

:::exercise {fs-id1167793911914} type= 
PROBLEM:
$\frac{d}{dx}\text{ln}(x+\sqrt{{x}^{2}-{a}^{2}})=\frac{1}{\sqrt{{x}^{2}-{a}^{2}}}$
:::

:::exercise {fs-id1167793373565} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x\;\text{ln}(x)\text{ln}(\text{ln}\;x)}}=\text{ln}(\text{ln}(\text{ln}\;x))+C$
:::

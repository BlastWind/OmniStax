# Substitution

## Learning Objectives {section:learning-objectives}
- Use substitution to evaluate indefinite integrals.
- Use substitution to evaluate definite integrals.

The Fundamental Theorem of Calculus gave us a method to evaluate integrals without using Riemann sums. The drawback of this method, though, is that we must be able to find an antiderivative, and this is not always easy. In this section we examine a technique, called {term:integration by substitution}, to help us find antiderivatives. Specifically, this method helps us find antiderivatives when the integrand is the result of a chain-rule derivative.
At first, the approach to the substitution procedure may not appear very obvious. However, it is primarily a visual task—that is, the integrand shows you what to do; it is a matter of recognizing the form of the function. So, what are we supposed to see? We are looking for an integrand of the form $f[g(x)]{g}^{'}\text{(}x)dx.$ For example, in the integral ${\displaystyle \int {({x}^{2}-3)}^{3}2xdx},$ we have $f(x)={x}^{3},g(x)={x}^{2}-3,$ and $g'(x)=2x.$ Then,

$f[g(x)]{g}^{'}\text{(}x)={({x}^{2}-3)}^{3}(2x),$  {eq:fs-id1170573442602}

and we see that our integrand is in the correct form.
The method is called *substitution* because we substitute part of the integrand with the variable *u* and part of the integrand with *du*. It is also referred to as {term:change of variables} because we are changing variables to obtain an expression that is easier to work with for applying the integration rules.

:::note [theorem] Substitution with Indefinite Integrals
Let $u=g(x),$ where ${g}^{'}\text{(}x)$ is continuous over an interval, let $f(x)$ be continuous over the corresponding range of *g*, and let $F(x)$ be an antiderivative of $f(x).$ Then,

$$ \begin{array}{ll}{\displaystyle \int f[g(x)]{g}^{'}\text{(}x)dx} & ={\displaystyle \int f}(u)du \\ & =F(u)+C \\ & =F(g(x))+C.\end{array} $$  {eq:fs-id1170573306241}

:::

## Proof
Let *f*, *g*, *u*, and *F* be as specified in the theorem. Then

$\begin{array}{ll}\frac{d}{dx}F(g(x)) & ={F}^{'}\text{(}g(x)){g}^{'}\text{(}x) \\ & =f[g(x)]{g}^{'}\text{(}x).\end{array}$  {eq:fs-id1170573534008}

Integrating both sides with respect to *x*, we see that

${\displaystyle \int f[g(x)]{g}^{'}\text{(}x)dx}=F(g(x))+C.$  {eq:fs-id1170573355959}

If we now substitute $u=g(x),$ and $du=g'(x)dx,$ we get

$\begin{array}{ll}{\displaystyle \int f[g(x)]{g}^{'}\text{(}x)dx} & ={\displaystyle \int f}(u)du \\ & =F(u)+C \\ & =F(g(x))+C.\end{array}$  {eq:fs-id1170573437846}

□
Returning to the problem we looked at originally, we let $u={x}^{2}-3$ and then $du=2xdx.$ Rewrite the integral in terms of *u*:

$\int {\underset{u}{\underbrace{({x}^{2}-3)}}}^{3}\underset{du}{\underbrace{(2xdx)}}=\int {u}^{3}du.$  {eq:fs-id1170573366731}

Using the power rule for integrals, we have

${\displaystyle \int {u}^{3}du=\frac{{u}^{4}}{4}+C}.$  {eq:fs-id1170571257696}

Substitute the original expression for *x* back into the solution:

$\frac{{u}^{4}}{4}+C=\frac{{({x}^{2}-3)}^{4}}{4}+C.$  {eq:fs-id1170573410936}

We can generalize the procedure in the following Problem-Solving Strategy.

:::note [problem-solving] Integration by Substitution
1. Look carefully at the integrand and select an expression $g(x)$ within the integrand to set equal to *u*. Let’s select $g(x)$ such that ${g}^{'}\text{(}x)$ is also part of the integrand.
2. Substitute $u=g(x)$ and $du={g}^{'}\text{(}x)dx$ into the integral.
3. We should now be able to evaluate the integral with respect to *u*. If the integral can’t be evaluated we need to go back and select a different expression to use as *u*.
4. Evaluate the integral in terms of *u*.
5. Write the result in terms of *x* and the expression $g(x).$
:::

:::example {ex:fs-id1170573385785} Using Substitution to Find an Antiderivative

:::exercise {fs-id1170573414763} type= 
PROBLEM:
Use substitution to find the antiderivative  ${\displaystyle \int 6x{(3{x}^{2}+4)}^{4}dx}.$
SOLUTION:
The first step is to choose an expression for *u*. We choose $u=3{x}^{2}+4$ because then $du=6xdx,$ and we already have *du* in the integrand. Write the integral in terms of *u*:

${\displaystyle \int 6x{(3{x}^{2}+4)}^{4}dx}={\displaystyle \int {u}^{4}du}.$  {eq:fs-id1170570995689}

Remember that *du* is the derivative of the expression chosen for *u*, regardless of what is inside the integrand. Now we can evaluate the integral with respect to *u*:

$\begin{array}{ll}{\displaystyle \int {u}^{4}du} & =\frac{{u}^{5}}{5}+C \\ \\ \\ & =\frac{{(3{x}^{2}+4)}^{5}}{5}+C.\end{array}$  {eq:fs-id1170571000121}

COMMENTARY: Analysis
We can check our answer by taking the derivative of the result of integration. We should obtain the integrand. Picking a value for *C* of 1, we let $y=\frac{1}{5}{(3{x}^{2}+4)}^{5}+1.$ We have

$y=\frac{1}{5}{(3{x}^{2}+4)}^{5}+1,$  {eq:fs-id1170573336352}

so

$\begin{array}{rl} \\ {y}^{'} & =(\frac{1}{5})5{(3{x}^{2}+4)}^{4}6x \\ & =6x{(3{x}^{2}+4)}^{4}.\end{array}$  {eq:fs-id1170573408431}

This is exactly the expression we started with inside the integrand.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573359652} type= 
PROBLEM:
Use substitution to find the antiderivative  ${\displaystyle \int 3{x}^{2}{({x}^{3}-3)}^{2}dx}.$
SOLUTION:
${\displaystyle \int 3{x}^{2}{({x}^{3}-3)}^{2}dx}=\frac{1}{3}{({x}^{3}-3)}^{3}+C$
COMMENTARY: Hint
Let $u={x}^{3}-3.$
:::
:::
Sometimes we need to adjust the constants in our integral if they don’t match up exactly with the expressions we are substituting.

:::example {ex:fs-id1170571334083} Using Substitution with Alteration

:::exercise {fs-id1170573255224} type= 
PROBLEM:
Use substitution to find  ${\displaystyle \int z\sqrt{{z}^{2}-5}dz}.$
SOLUTION:
Rewrite the integral as ${\displaystyle \int z{({z}^{2}-5)}^{1\text{/}2}dz}.$ Let $u={z}^{2}-5$ and $du=2z\;dz.$ Now we have a problem because $du=2z\;dz$ and the original expression has only $z\;dz.$ We have to alter our expression for *du* or the integral in *u* will be twice as large as it should be. If we multiply both sides of the *du* equation by $\frac{1}{2}.$ we can solve this problem. Thus,

$\begin{array}{rl} \\ u & ={z}^{2}-5 \\ du & =2z\;dz \\ \frac{1}{2}du & =\frac{1}{2}(2z)dz=z\;dz.\end{array}$  {eq:fs-id1170573430996}

Write the integral in terms of *u*, but pull the $\frac{1}{2}$ outside the integration symbol:

${\displaystyle \int z{({z}^{2}-5)}^{1\text{/}2}dz=}\frac{1}{2}{\displaystyle \int {u}^{1\text{/}2}du.}$  {eq:fs-id1170573533836}

Integrate the expression in *u*:

$\begin{array}{ll} \\ \frac{1}{2}{\displaystyle \int {u}^{1\text{/}2}du} & =(\frac{1}{2})\frac{{u}^{3\text{/}2}}{\frac{3}{2}}+C \\ \\ & =(\frac{1}{2})(\frac{2}{3}){u}^{3\text{/}2}+C \\ & =\frac{1}{3}{u}^{3\text{/}2}+C \\ & =\frac{1}{3}{({z}^{2}-5)}^{3\text{/}2}+C.\end{array}$  {eq:fs-id1170570994415}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571254579} type= 
PROBLEM:
Use substitution to find  ${\displaystyle \int {x}^{2}{({x}^{3}+5)}^{9}dx}.$
SOLUTION:
$\frac{{({x}^{3}+5)}^{10}}{30}+C$
COMMENTARY: Hint
Multiply the *du* equation by $\frac{1}{3}.$
:::
:::

:::example {ex:fs-id1170573573975} Using Substitution with Integrals of Trigonometric Functions

:::exercise {fs-id1170573352138} type= 
PROBLEM:
Use substitution to evaluate the integral ${\displaystyle \int \frac{\text{sin}\;t}{{\text{cos}}^{3}t}dt}.$
SOLUTION:
We know the derivative of $\text{cos}\;t$ is $\text{−}\text{sin}\;t,$ so we set $u=\text{cos}\;t.$ Then $du=\text{−}\text{sin}\;tdt.$ Substituting into the integral, we have

${\displaystyle \int \frac{\text{sin}\;t}{{\text{cos}}^{3}t}dt=\text{−}{\displaystyle \int \frac{du}{{u}^{3}}}}.$  {eq:fs-id1170573337947}

Evaluating the integral, we get

$\begin{array}{ll} \\ \\ \text{−}{\displaystyle \int \frac{du}{{u}^{3}}} & =\text{−}{\displaystyle \int {u}^{−3}du} \\ & =\text{−}(-\frac{1}{2}){u}^{−2}+C.\end{array}$  {eq:fs-id1170571136365}

Putting the answer back in terms of *t*, we get

$\begin{array}{ll}{\displaystyle \int \frac{\text{sin}\;t}{{\text{cos}}^{3}t}dt} & =\frac{1}{2{u}^{2}}+C \\ \\ & =\frac{1}{2{\text{cos}}^{2}t}+C.\end{array}$  {eq:fs-id1170573587515}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573387947} type= 
PROBLEM:
Use substitution to evaluate the integral ${\displaystyle \int \frac{\text{cos}\;t}{{\text{sin}}^{2}t}dt.}$
SOLUTION:
$-\frac{1}{\text{sin}\;t}+C$
COMMENTARY: Hint
Use the process from [ref:fs-id1170573573975] to solve the problem.
:::
:::
Sometimes we need to manipulate an integral in ways that are more complicated than just multiplying or dividing by a constant. We need to eliminate all the expressions within the integrand that are in terms of the original variable. When we are done, *u* should be the only variable in the integrand. In some cases, this means solving for the original variable in terms of *u*. This technique should become clear in the next example.

:::example {ex:fs-id1170573426799} Finding an Antiderivative Using *u*-Substitution

:::exercise {fs-id1170573417818} type= 
PROBLEM:
Use substitution to find the antiderivative  ${\displaystyle \int \frac{x}{\sqrt{x-1}}dx.}$
SOLUTION:
If we let $u=x-1,$ then $du=dx.$ But this does not account for the *x* in the numerator of the integrand. We need to express *x* in terms of *u*. If $u=x-1,$ then $x=u+1.$ Now we can rewrite the integral in terms of *u*:

$\begin{array}{ll}{\displaystyle \int \frac{x}{\sqrt{x-1}}dx} & ={\displaystyle \int \frac{u+1}{\sqrt{u}}du} \\ \\ & ={\displaystyle \int \sqrt{u}+\frac{1}{\sqrt{u}}du} \\ & ={\displaystyle \int ({u}^{1\text{/}2}+{u}^{−1\text{/}2})du}.\end{array}$  {eq:fs-id1170573333822}

Then we integrate in the usual way, replace *u* with the original expression, and factor and simplify the result. Thus,

$\begin{array}{ll}{\displaystyle \int ({u}^{1\text{/}2}+{u}^{−1\text{/}2})du} & =\frac{2}{3}{u}^{3\text{/}2}+2{u}^{1\text{/}2}+C \\ \\ & =\frac{2}{3}{(x-1)}^{3\text{/}2}+2{(x-1)}^{1\text{/}2}+C \\ & ={(x-1)}^{1\text{/}2}[\frac{2}{3}(x-1)+2]+C \\ & ={(x-1)}^{1\text{/}2}(\frac{2}{3}x-\frac{2}{3}+\frac{6}{3})+C \\ & ={(x-1)}^{1\text{/}2}(\frac{2}{3}x+\frac{4}{3})+C \\ & =\frac{2}{3}{(x-1)}^{1\text{/}2}(x+2)+C.\end{array}$  {eq:fs-id1170570997027}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571283562} type= 
PROBLEM:
Use substitution to evaluate the indefinite integral ${\displaystyle \int {\text{cos}}^{3}t\;\text{sin}\;t\;dt}.$
SOLUTION:
$-\frac{{\text{cos}}^{4}t}{4}+C$
COMMENTARY: Hint
Use the process from [ref:fs-id1170573426799] to solve the problem.
:::
:::

## Substitution for Definite Integrals
Substitution can be used with definite integrals, too. However, using substitution to evaluate a definite integral requires a change to the limits of integration. If we change variables in the integrand, the limits of integration change as well.

:::note [theorem] Substitution with Definite Integrals
Let $u=g(x)$ and let ${g}^{'}$ be continuous over an interval $[a,b],$ and let *f* be continuous over the range of $u=g(x).$ Then,

${\displaystyle \int_{a}^{b}f(g(x)){g}^{'}\text{(}x)dx={\displaystyle \int_{g(a)}^{g(b)}f(u)du}}.$  {eq:fs-id1170571189407}

:::
Although we will not formally prove this theorem, we justify it with some calculations here. From the substitution rule for indefinite integrals, if $F(x)$ is an antiderivative of $f(x),$ we have

${\displaystyle \int f(g(x)){g}^{'}\text{(}x)dx=F(g(x))+C.}$  {eq:fs-id1170571168095}

Then

$$ \begin{array}{ll}{\displaystyle \int_{a}^{b}f[g(x)]{g}^{'}\text{(}x)dx} & ={F(g(x))|}_{x=a}^{x=b} \\ & =F(g(b))-F(g(a)) \\ & ={F(u)|}_{u=g(a)}^{u=g(b)} \\ \\ \\ & ={\displaystyle \int_{g(a)}^{g(b)}f}(u)du,\end{array} $$  {eq:fs-id1170573388911}

and we have the desired result.

:::example {ex:fs-id1170571215481} Using Substitution to Evaluate a Definite Integral

:::exercise {fs-id1170571215483} type= 
PROBLEM:
Use substitution to evaluate ${\displaystyle \int_{0}^{1}{x}^{2}{(1+2{x}^{3})}^{5}}dx.$
SOLUTION:
Let $u=1+2{x}^{3},$ so $du=6{x}^{2}dx.$ Since the original function includes one factor of *x*<sup>2</sup> and $du=6{x}^{2}dx,$ multiply both sides of the *du* equation by $1\text{/}6.$ Then,

$\begin{array}{lll}du & = & 6{x}^{2}dx \\ \frac{1}{6}du & = & {x}^{2}dx.\end{array}$  {eq:fs-id1170573362498}

To adjust the limits of integration, note that when $x=0,u=1+2(0)=1,$ and when $x=1,u=1+2(1)=3.$ Then

${\displaystyle \int_{0}^{1}{x}^{2}{(1+2{x}^{3})}^{5}dx=\frac{1}{6}{\displaystyle \int_{1}^{3}{u}^{5}du}}.$  {eq:fs-id1170571303367}

Evaluating this expression, we get

$\begin{array}{ll} \\ \\ \frac{1}{6}{\displaystyle \int_{1}^{3}{u}^{5}du} & =(\frac{1}{6})(\frac{{u}^{6}}{6}){|}_{1}^{3} \\ & =\frac{1}{36}[{(3)}^{6}-{(1)}^{6}] \\ & =\frac{182}{9}.\end{array}$  {eq:fs-id1170571285289}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571061496} type= 
PROBLEM:
Use substitution to evaluate the definite integral ${\displaystyle \int_{−1}^{0}y{(2{y}^{2}-3)}^{5}dy}.$
SOLUTION:
$\frac{91}{3}$
COMMENTARY: Hint
Use the steps from [ref:fs-id1170571215481] to solve the problem.
:::
:::

:::example {ex:fs-id1170573593895} Using Substitution with an Exponential Function

:::exercise {fs-id1170573593897} type= 
PROBLEM:
Use substitution to evaluate ${\displaystyle \int_{0}^{1}x{e}^{4{x}^{2}+3}dx}.$
SOLUTION:
Let $u=4{x}^{2}+3.$ Then, $du=8xdx.$ To adjust the limits of integration, we note that when $x=0,u=3,$ and when $x=1,u=7.$ So our substitution gives

$\begin{array}{ll}{\displaystyle \int_{0}^{1}x{e}^{4{x}^{2}+3}dx} & =\frac{1}{8}{\displaystyle \int_{3}^{7}{e}^{u}du} \\ \\ & =\frac{1}{8}{e}^{u}{|}_{3}^{7} \\ & =\frac{{e}^{7}-{e}^{3}}{8} \\ & \approx 134.568.\end{array}$  {eq:fs-id1170571052992}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571099763} type= 
PROBLEM:
Use substitution to evaluate ${\displaystyle \int_{0}^{1}{x}^{2}\text{cos}(\frac{\pi}{2}{x}^{3})dx}.$
SOLUTION:
$\frac{2}{3\pi}\approx 0.2122$
COMMENTARY: Hint
Use the process from [ref:fs-id1170573593895] to solve the problem.
:::
:::
Substitution may be only one of the techniques needed to evaluate a definite integral. All of the properties and rules of integration apply independently, and trigonometric functions may need to be rewritten using a trigonometric identity before we can apply substitution. Also, we have the option of replacing the original expression for *u* after we find the antiderivative, which means that we do not have to change the limits of integration. These two approaches are shown in [ref:fs-id1170570994085].

:::example {ex:fs-id1170570994085} Using Substitution to Evaluate a Trigonometric Integral

:::exercise {fs-id1170571213222} type= 
PROBLEM:
Use substitution to evaluate ${\displaystyle \int_{0}^{\pi \text{/}2}{\text{cos}}^{2}\theta \;d\theta}.$
SOLUTION:
Let us first use a trigonometric identity to rewrite the integral. The trig identity ${\text{cos}}^{2}\theta =\frac{1+\text{cos}\;2\theta}{2}$ allows us to rewrite the integral as

${\displaystyle \int_{0}^{\pi \text{/}2}{\text{cos}}^{2}\theta d\theta}={\displaystyle \int_{0}^{\pi \text{/}2}\frac{1+\text{cos}\;2\theta}{2}d\theta .}$  {eq:fs-id1170571131164}

Then,

$\begin{array}{ll}{\displaystyle \int_{0}^{\pi \text{/}2}(\frac{1+\text{cos}\;2\theta}{2})}d\theta & ={\displaystyle \int_{0}^{\pi \text{/}2}(\frac{1}{2}+\frac{1}{2}\text{cos}\;2\theta )d\theta} \\ \\ \\ & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}d\theta}+\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}\text{cos}\;2\theta d\theta .}\end{array}$  {eq:fs-id1170573581363}

We can evaluate the first integral as it is, but we need to make a substitution to evaluate the second integral. Let $u=2\theta .$ Then, $du=2d\theta ,$ or $\frac{1}{2}du=d\theta .$ Also, when $\theta =0,u=0,$ and when $\theta =\pi \text{/}2,u=\pi .$ Expressing the second integral in terms of *u*, we have

$\begin{array}{ll} \\ \\ \frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}d\theta +\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}\text{cos}\;2\theta d\theta}} & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}2}d\theta +\frac{1}{2}(\frac{1}{2}){\displaystyle \int_{0}^{\pi}\text{cos}\;udu}} \\ & =\frac{\theta}{2}{|}_{\theta =0}^{\theta =\pi \text{/}2}+\frac{1}{4}\text{sin}\;u{|}_{u=0}^{u=\pi} \\ & =(\frac{\pi}{4}-0)+(0-0)=\frac{\pi}{4}.\end{array}$  {eq:fs-id1170571244772}

:::
:::

## Key Concepts {section:key-concepts}
- Substitution is a technique that simplifies the integration of functions that are the result of a chain-rule derivative. The term ‘substitution’ refers to changing variables or substituting the variable *u* and *du* for appropriate expressions in the integrand.
- When using substitution for a definite integral, we also have to change the limits of integration.

## Key Equations {section:key-equations}

> TABLE {tab:eip-501} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Substitution with Indefinite Integrals** | ${\displaystyle \int f[g(x)]{g}^{'}\text{(}x)dx={\displaystyle \int f(u)du}}=F(u)+C=F(g(x))+C$ |
| **Substitution with Definite Integrals** | ${\displaystyle \int_{a}^{b}f(g(x))g'(x)dx={\displaystyle \int_{g(a)}^{g(b)}f(u)du}}$ |

##  {section:section-exercises}

:::exercise {fs-id1170573549514} type= 
PROBLEM:
Why is *u*-substitution referred to as *change of variable*?
:::

:::exercise {fs-id1170573575165} type= 
PROBLEM:
2. If $f=g\circ h,$ when reversing the chain rule, $\frac{d}{dx}(g\circ h)(x)={g}^{'}\text{(}h(x)){h}^{'}\text{(}x),$ should you take $u=g(x)$ or $u=h(x)?$
SOLUTION:
$u=h(x)$
:::
In the following exercises, verify each identity using differentiation. Then, using the indicated *u*-substitution, identify *f* such that the integral takes the form ${\displaystyle \int f(u)du}.$

:::exercise {fs-id1170571033648} type= 
PROBLEM:
${\displaystyle \int x\sqrt{x+1}}dx=\frac{2}{15}{(x+1)}^{3\text{/}2}(3x-2)+C;u=x+1$
:::

:::exercise {fs-id1170573718856} type= 
PROBLEM:
For $x>1:{\displaystyle \int \frac{{x}^{2}}{\sqrt{x-1}}dx}=\frac{2}{15}\sqrt{x-1}(3{x}^{2}+4x+8)+C;u=x-1$
SOLUTION:
$f(u)=\frac{{(u+1)}^{2}}{\sqrt{u}}$
:::

:::exercise {fs-id1170571303033} type= 
PROBLEM:
${\displaystyle \int x\sqrt{4{x}^{2}+9}dx=\frac{1}{12}{(4{x}^{2}+9)}^{3\text{/}2}+C};u=4{x}^{2}+9$
:::

:::exercise {fs-id1170571206963} type= 
PROBLEM:
${\displaystyle \int \frac{x}{\sqrt{4{x}^{2}+9}}dx=\frac{1}{4}\sqrt{4{x}^{2}+9}+C};u=4{x}^{2}+9$
SOLUTION:
$du=8xdx;f(u)=\frac{1}{8\sqrt{u}}$
:::

:::exercise {fs-id1170573759850} type= 
PROBLEM:
${\displaystyle \int \frac{x}{{(4{x}^{2}+9)}^{2}}dx=-\frac{1}{8(4{x}^{2}+9)}};u=4{x}^{2}+9$
:::
In the following exercises, find the antiderivative using the indicated substitution.

:::exercise {fs-id1170571119993} type= 
PROBLEM:
${\displaystyle \int {(x+1)}^{4}dx};u=x+1$
SOLUTION:
$\frac{1}{5}{(x+1)}^{5}+C$
:::

:::exercise {fs-id1170570996054} type= 
PROBLEM:
${\displaystyle \int {(x-1)}^{5}dx};u=x-1$
:::

:::exercise {fs-id1170571056458} type= 
PROBLEM:
${\displaystyle \int {(2x-3)}^{−7}dx};u=2x-3$
SOLUTION:
$-\frac{1}{12{(2x-3)}^{6}}+C$
:::

:::exercise {fs-id1170573760680} type= 
PROBLEM:
${\displaystyle \int {(3x-2)}^{−11}dx};u=3x-2$
:::

:::exercise {fs-id1170573417176} type= 
PROBLEM:
${\displaystyle \int \frac{x}{\sqrt{{x}^{2}+1}}dx};u={x}^{2}+1$
SOLUTION:
$\sqrt{{x}^{2}+1}+C$
:::

:::exercise {fs-id1170573542517} type= 
PROBLEM:
${\displaystyle \int \frac{x}{\sqrt{1-{x}^{2}}}dx};u=1-{x}^{2}$
:::

:::exercise {fs-id1170571123643} type= 
PROBLEM:
${\displaystyle \int (x-1){({x}^{2}-2x)}^{3}dx};u={x}^{2}-2x$
SOLUTION:
$\frac{1}{8}{({x}^{2}-2x)}^{4}+C$
:::

:::exercise {fs-id1170571145634} type= 
PROBLEM:
${\displaystyle \int ({x}^{2}-2x){({x}^{3}-3{x}^{2})}^{2}dx};u={x}^{3}-3{x}^{2}$
:::

:::exercise {fs-id1170573623732} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{3}\theta d\theta};u=\text{sin}\;\theta$ $\text{(}Hint\text{:}\;{\text{cos}}^{2}\theta =1-{\text{sin}}^{2}\theta \text{)}$
SOLUTION:
$\text{sin}\;\theta -\frac{{\text{sin}}^{3}\theta}{3}+C$
:::

:::exercise {fs-id1170571227343} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{3}\theta d\theta};u=\text{cos}\;\theta$ $\text{(}Hint\text{:}\;{\text{sin}}^{2}\theta =1-{\text{cos}}^{2}\theta \text{)}$
:::
In the following exercises, use a suitable change of variables to determine the indefinite integral.

:::exercise {fs-id1170571136656} type= 
PROBLEM:
${\displaystyle \int x{(1-x)}^{99}dx}$
SOLUTION:
$\frac{{(1-x)}^{101}}{101}-\frac{{(1-x)}^{100}}{100}+C$
:::

:::exercise {fs-id1170571304981} type= 
PROBLEM:
${\displaystyle \int t{(1-{t}^{2})}^{10}dt}$
:::

:::exercise {fs-id1170571275277} type= 
PROBLEM:
${\displaystyle \int {(11x-7)}^{−3}dx}$
SOLUTION:
$\int {(11x-7)}^{−3}dx=-\frac{1}{22{(11x-7)}^{2}}+C$
:::

:::exercise {fs-id1170573545918} type= 
PROBLEM:
${\displaystyle \int {(7x-11)}^{4}dx}$
:::

:::exercise {fs-id1170573727306} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{3}\theta \;\text{sin}\;\theta d\theta}$
SOLUTION:
$-\frac{{\text{cos}}^{4}\theta}{4}+C$
:::

:::exercise {fs-id1170571094884} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{7}\theta \;\text{cos}\;\theta d\theta}$
:::

:::exercise {fs-id1170571158870} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{2}(\pi t)\text{sin}(\pi t)dt}$
SOLUTION:
$-\frac{{\text{cos}}^{3}(\pi t)}{3\pi}+C$
:::

:::exercise {fs-id1170573759909} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}x{\text{cos}}^{3}xdx}$ $\text{(}Hint\text{:}\;{\text{sin}}^{2}x+{\text{cos}}^{2}x=1\text{)}$
:::

:::exercise {fs-id1170571340505} type= 
PROBLEM:
${\displaystyle \int t\;\text{sin}({t}^{2})\text{cos}({t}^{2})dt}$
SOLUTION:
$-\frac{1}{4}\;{\text{cos}}^{2}({t}^{2})+C$
:::

:::exercise {fs-id1170571340409} type= 
PROBLEM:
${\displaystyle \int {t}^{2}}{\text{cos}}^{2}({t}^{3})\text{sin}({t}^{3})dt$
:::

:::exercise {fs-id1170571232630} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}}{{({x}^{3}-3)}^{2}}dx}$
SOLUTION:
$-\frac{1}{3({x}^{3}-3)}+C$
:::

:::exercise {fs-id1170570999552} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{3}}{\sqrt{1-{x}^{2}}}dx}$
:::

:::exercise {fs-id1170571057347} type= 
PROBLEM:
${\displaystyle \int \frac{{y}^{5}}{{(1-{y}^{3})}^{3\text{/}2}}dy}$
SOLUTION:
$-\frac{2({y}^{3}-2)}{3\sqrt{1-{y}^{3}}}+C$
:::

:::exercise {fs-id1170571269414} type= 
PROBLEM:
${{\displaystyle \int \text{cos}\;\theta (1-\text{cos}\;\theta )}}^{99}\text{sin}\;\theta d\theta$
:::

:::exercise {fs-id1170571160788} type= 
PROBLEM:
${{\displaystyle \int (1-{\text{cos}}^{3}\theta )}}^{10}{\text{cos}}^{2}\theta \;\text{sin}\;\theta d\theta$
SOLUTION:
$\frac{1}{33}{(1-{\text{cos}}^{3}\theta )}^{11}+C$
:::

:::exercise {fs-id1170571379754} type= 
PROBLEM:
${\displaystyle \int (\text{cos}\;\theta -1){({\text{cos}}^{2}\theta -2\;\text{cos}\;\theta )}^{3}\text{sin}\;\theta d\theta}$
:::

:::exercise {fs-id1170571030683} type= 
PROBLEM:
${\displaystyle \int ({\text{sin}}^{2}\theta -2\;\text{sin}\;\theta ){({\text{sin}}^{3}\theta -3{\text{sin}}^{2}\theta )}^{3}\text{cos}\;\theta d\theta}$
SOLUTION:
$\frac{1}{12}{({\text{sin}}^{3}\theta -3{\text{sin}}^{2}\theta )}^{4}+C$
:::
In the following exercises, use a calculator to estimate the area under the curve using left Riemann sums with 50 terms, then use substitution to solve for the exact answer.

:::exercise {fs-id1170571115002} type= 
PROBLEM:
**[T]** $y=3{(1-x)}^{2}$ over $[0,2]$
:::

:::exercise {fs-id1170571158789} type= 
PROBLEM:
**[T]** $y=x{(1-{x}^{2})}^{3}$ over $[−1,2]$
SOLUTION:
${L}_{50}=−8.5779.$ The exact area is $\frac{−81}{8}$
:::

:::exercise {fs-id1170571337335} type= 
PROBLEM:
**[T]** $y=\text{sin}\;x{(1-\text{cos}\;x)}^{2}$ over $[0,\pi ]$
:::

:::exercise {fs-id1170571159912} type= 
PROBLEM:
**[T]** $y=\frac{x}{{({x}^{2}+1)}^{2}}$ over $[−1,1]$
SOLUTION:
${L}_{50}=−0.006399$ … The exact area is 0.
:::
In the following exercises, use a change of variables to evaluate the definite integral.

:::exercise {fs-id1170571057439} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}x\sqrt{1-{x}^{2}}}dx$
:::

:::exercise {fs-id1170571026374} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{x}{\sqrt{1+{x}^{2}}}dx}$
SOLUTION:
$u=1+{x}^{2},du=2xdx,\frac{1}{2}{\displaystyle \int_{1}^{2}{u}^{−1\text{/}2}du=\sqrt{2}-1}$
:::

:::exercise {fs-id1170571037384} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}\frac{t}{\sqrt{5+{t}^{2}}}dt}$
:::

:::exercise {fs-id1170571329548} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{{t}^{2}}{\sqrt{1+{t}^{3}}}dt}$
SOLUTION:
$u=1+{t}^{3},du=3{t}^{2}dt,\frac{1}{3}{\displaystyle \int_{1}^{2}{u}^{−1\text{/}2}du=\frac{2}{3}(\sqrt{2}-1)}$
:::

:::exercise {fs-id1170571160643} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}{\text{sec}}^{2}\theta \;\text{tan}\;\theta d\theta}$
:::

:::exercise {fs-id1170571078760} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}\frac{\text{sin}\;\theta}{{\text{cos}}^{4}\theta}d\theta}$
SOLUTION:
$u=\text{cos}\;\theta ,du=\text{−}\text{sin}\;\theta d\theta ,{\displaystyle \int_{1\text{/}\sqrt{2}}^{1}{u}^{−4}du=\frac{1}{3}(2\sqrt{2}-1)}$
:::
In the following exercises, evaluate the indefinite integral ${\displaystyle \int f(x)dx}$ with constant $C=0$ using *u*-substitution. Then, graph the function and the antiderivative over the indicated interval. If possible, estimate a value of *C* that would need to be added to the antiderivative to make it equal to the definite integral $F(x)={\displaystyle \int_{a}^{x}f(t)dt},$ with *a* the left endpoint of the given interval.

:::exercise {fs-id1170571303693} type= 
PROBLEM:
**[T]** ${\displaystyle \int (2x+1){e}^{{x}^{2}+x-6}dx}$ over $[−3,2]$
:::

:::exercise {fs-id1170573762457} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{\text{cos}(\text{ln}(2x))}{x}dx}$ on $[0,2]$
SOLUTION:

> IMAGE {img:fs-id1170573762529} src=../../media/CNX_Calc_Figure_05_05_204.jpg
> alt: Two graphs. The first shows the function f(x) = cos(ln(2x)) / x, which increases sharply over the approximate interval (0,.25) and then decreases gradually to the x axis. The second shows the function f(x) = sin(ln(2x)), which decreases sharply on the approximate interval (0, .25) and then increases in a gently curve into the first quadrant.

The antiderivative is $y=\text{sin}(\text{ln}(2x)).$ Since the antiderivative is not continuous at $x=0,$ one cannot find a value of *C* that would make $y=\text{sin}(\text{ln}(2x))-C$ work as a definite integral.
:::

:::exercise {fs-id1170571021797} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{3{x}^{2}+2x+1}{\sqrt{{x}^{3}+{x}^{2}+x+4}}dx}$ over $[−1,2]$
:::

:::exercise {fs-id1170573542457} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{\text{sin}\;x}{{\text{cos}}^{3}x}dx}$ over $[-\frac{\pi}{3},\frac{\pi}{3}]$
SOLUTION:

> IMAGE {img:fs-id1170571340054} src=../../media/CNX_Calc_Figure_05_05_206.jpg
> alt: Two graphs. The first is the function f(x) = sin(x) / cos(x)^3 over [-5pi/16, 5pi/16]. It is an increasing concave down function for values less than zero and an increasing concave up function for values greater than zero. The second is the fuction f(x) = ½ sec(x)^2 over the same interval. It is a wide, concave up curve which decreases for values less than zero and increases for values greater than zero.

The antiderivative is $y=\frac{1}{2}\;{\text{sec}}^{2}x.$ You should take $C=−2$ so that $F(-\frac{\pi}{3})=0.$
:::

:::exercise {fs-id1170571340126} type= 
PROBLEM:
**[T]** ${\displaystyle \int (x+2){e}^{\text{−}{x}^{2}-4x+3}dx}$ over $[−5,1]$
:::

:::exercise {fs-id1170571098887} type= 
PROBLEM:
**[T]** ${\displaystyle \int 3{x}^{2}\sqrt{2{x}^{3}+1}}dx$ over $[0,1]$
SOLUTION:

> IMAGE {img:fs-id1170571098958} src=../../media/CNX_Calc_Figure_05_05_208.jpg
> alt: Two graphs. The first shows the function f(x) = 3x^2 * sqrt(2x^3 + 1). It is an increasing concave up curve starting at the origin. The second shows the function f(x) = 1/3 * (2x^3 + 1)^(1/3). It is an increasing concave up curve starting at about 0.3.

The antiderivative is $y=\frac{1}{3}{(2{x}^{3}+1)}^{3\text{/}2}.$ One should take $C=-\frac{1}{3}.$
:::

:::exercise {fs-id1170571160883} type= 
PROBLEM:
If $h(a)=h(b)$ in $\int_{a}^{b}g'(h(x))h'(x)dx,$ what can you say about the value of the integral?
:::

:::exercise {fs-id1170571160975} type= 
PROBLEM:
Is the substitution $u=1-{x}^{2}$ in the definite integral ${\displaystyle \int_{0}^{2}\frac{x}{1-{x}^{2}}dx}$ okay? If not, why not?
SOLUTION:
No, because the integrand is discontinuous at $x=1.$
:::
In the following exercises, use a change of variables to show that each definite integral is equal to zero.

:::exercise {fs-id1170571291144} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}{\text{cos}}^{2}(2\theta )\text{sin}(2\theta )d\theta}$
:::

:::exercise {fs-id1170571158577} type= 
PROBLEM:
${\displaystyle \int_{0}^{\sqrt{\pi}}t\;\text{cos}({t}^{2})\text{sin}({t}^{2})dt}$
SOLUTION:
$u=\text{sin}({t}^{2});$ the integral becomes $\frac{1}{2}{\displaystyle \int_{0}^{0}udu}.$
:::

:::exercise {fs-id1170571046470} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}(1-2t)dt}$
:::

:::exercise {fs-id1170571046569} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{1-2t}{(1+{(t-\frac{1}{2})}^{2})}dt}$
SOLUTION:
$u=(1+{(t-\frac{1}{2})}^{2});$ the integral becomes $\text{−}{\displaystyle \int_{5\text{/}4}^{5\text{/}4}\frac{1}{u}du}.$
:::

:::exercise {fs-id1170571327483} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}\text{sin}({(t-\frac{\pi}{2})}^{3})\text{cos}(t-\frac{\pi}{2})dt}$
:::

:::exercise {fs-id1170571371143} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}(1-t)\text{cos}(\pi t)dt}$
SOLUTION:
$u=1-t;$ the integral becomes
$\begin{array}{l}{\displaystyle \int_{1}^{−1}u\;\text{cos}(\pi (1-u))du} \\ ={\displaystyle \int_{1}^{−1}u[\text{cos}\;\pi \;\text{cos}\;\pi u-\text{sin}\;\pi \;\text{sin}\;\pi u]du} \\ =\text{−}{\displaystyle \int_{1}^{−1}u\;\text{cos}\;\pi udu} \\ ={\displaystyle \int_{−1}^{1}u\;\text{cos}\;\pi udu=0}\end{array}$
since the integrand is odd.
:::

:::exercise {fs-id1170571134790} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}4}^{3\pi \text{/}4}{\text{sin}}^{2}t\;\text{cos}\;tdt}$
:::

:::exercise {fs-id1170571276371} type= 
PROBLEM:
Show that the average value of $f(x)$ over an interval $[a,b]$ is the same as the average value of $f(cx)$ over the interval $[\frac{a}{c},\frac{b}{c}]$ for $c>0.$
SOLUTION:
Setting $u=cx$ and $du=cdx$ gets you $\frac{1}{\frac{b}{c}-\frac{a}{c}}{\displaystyle \int_{a\text{/}c}^{b\text{/}c}f(cx)dx=\frac{c}{b-a}}\;{\displaystyle \int_{u=a}^{u=b}f(u)\frac{du}{c}=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(u)du}}.$
:::

:::exercise {fs-id1170571273653} type= 
PROBLEM:
Find the area under the graph of $f(t)=\frac{t}{{(1+{t}^{2})}^{a}}$ between $t=0$ and $t=x$ where $a>0$ and $a≠1$ is fixed, and evaluate the limit as $x\to \infty .$
:::

:::exercise {fs-id1170571132654} type= 
PROBLEM:
Find the area under the graph of $g(t)=\frac{t}{{(1-{t}^{2})}^{a}}$ between $t=0$ and $t=x,$ where $0<x<1$ and $a>0$ is fixed. Evaluate the limit as $x\to 1.$
SOLUTION:
${\displaystyle \int_{0}^{x}g(t)dt=\frac{1}{2}{\displaystyle \int_{u=1-{x}^{2}}^{1}\frac{du}{{u}^{a}}}}=\frac{1}{2(1-a)}{u}^{1-a}{|}_{u=1-{x}^{2}}^{1}=\frac{1}{2(1-a)}(1-{(1-{x}^{2})}^{1-a}).$ As $x\to 1$ the limit is $\frac{1}{2(1-a)}$ if $a<1,$ and the limit diverges to +∞ if $a\ge 1.$
:::

:::exercise {fs-id1170573713777} type= 
PROBLEM:
The area of a semicircle of radius 1 can be expressed as ${\displaystyle \int_{−1}^{1}\sqrt{1-{x}^{2}}dx}.$ Use the substitution $x=\text{cos}\;t$ to express the area of a semicircle as the integral of a trigonometric function. You do not need to compute the integral.
:::

:::exercise {fs-id1170571169773} type= 
PROBLEM:
The area of the top half of an ellipse with a major axis that is the *x*-axis from $x=-a$ to $x=a$ and with a minor axis that is the *y*-axis from $y=\text{−}b$ to $y=b$ can be written as ${\displaystyle \int_{\text{−}a}^{a}b\sqrt{1-\frac{{x}^{2}}{{a}^{2}}}dx}.$ Use the substitution $x=a\;\text{cos}\;t$ to express this area in terms of an integral of a trigonometric function. You do not need to compute the integral.
SOLUTION:
${\displaystyle \int_{t=\pi}^{0}b\sqrt{1-{\text{cos}}^{2}t}}\;\times \;(\text{−}a\;\text{sin}\;t)dt={\displaystyle \int_{t=0}^{\pi}ab{\text{sin}}^{2}tdt}$
:::

:::exercise {fs-id1170571068045} type= 
PROBLEM:
**[T]** The following graph is of a function of the form $f(t)=a\;\text{sin}(nt)+b\;\text{sin}(mt).$ Estimate the coefficients *a* and *b*, and the frequency parameters *n* and *m*. Use these estimates to approximate ${\displaystyle \int_{0}^{\pi}f(t)dt}.$

> IMAGE {img:fs-id1170571060823} src=../../media/CNX_Calc_Figure_05_05_201.jpg
> alt: A graph of a function of the given form over [0, 2pi], which has six turning points. They are located at just before pi/4, just after pi/2, between 3pi/4 and pi, between pi and 5pi/4, just before 3pi/2, and just after 7pi/4 at about 3, -2, 1, -1, 2, and -3. It begins at the origin and ends at (2pi, 0). It crosses the x axis between pi/4 and pi/2, just before 3pi/4, pi, just after 5pi/4, and between 3pi/2 and 4pi/4.

:::

:::exercise {fs-id1170571249463} type= 
PROBLEM:
**[T]** The following graph is of a function of the form $f(x)=a\;\text{cos}(nt)+b\;\text{cos}(mt).$ Estimate the coefficients *a* and *b* and the frequency parameters *n* and *m*. Use these estimates to approximate ${\displaystyle \int_{0}^{\frac{\pi}{2}}f(t)dt}.$

> IMAGE {img:fs-id1170571249581} src=../../media/CNX_Calc_Figure_05_05_202.jpg
> alt: The graph of a function of the given form over [0, 2pi]. It begins at (0,1) and ends at (2pi, 1). It has five turning points, located just after pi/4, between pi/2 and 3pi/4, pi, between 5pi/4 and 3pi/2, and just before 7pi/4 at about -1.5, 2.5, -3, 2.5, and -1. It crosses the x axis between 0 and pi/4, just before pi/2, just after 3pi/4, just before 5pi/4, just after 3pi/2, and between 7pi/4 and 2pi.

SOLUTION:
$f(t)=2\;\text{cos}(3t)-\text{cos}(2t);\int_{0}^{\pi}(2\;\text{cos}(3t)-\text{cos}(2t))dt=0$
:::

## Glossary
- {def} **change of variables**: the substitution of a variable, such as *u*, for an expression in the integrand
- {def} **integration by substitution**: a technique for integration that allows integration of functions that are the result of a chain-rule derivative

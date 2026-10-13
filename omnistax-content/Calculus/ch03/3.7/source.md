# Derivatives of Inverse Functions

## Learning Objectives {section:learning-objectives}
- Calculate the derivative of an inverse function.
- Recognize the derivatives of the standard inverse trigonometric functions.

In this section we explore the relationship between the derivative of a function and the derivative of its inverse. For functions whose derivatives we already know, we can use this relationship to find derivatives of inverses without having to use the limit definition of the derivative. In particular, we will apply the formula for derivatives of inverse functions to trigonometric functions. This formula may also be used to extend the power rule to rational exponents.

## The Derivative of an Inverse Function
We begin by considering a function and its inverse. If $f(x)$ is both invertible and differentiable, it seems reasonable that the inverse of $f(x)$ is also differentiable. [ref:CNX_Calc_Figure_03_07_001] shows the relationship between a function $f(x)$ and its inverse ${f}^{−1}(x).$ Look at the point $(a,{f}^{−1}(a))$ on the graph of ${f}^{−1}(x)$ having a tangent line with a slope of ${({f}^{−1})}^{'}(a)=\frac{p}{q}.$ This point corresponds to a point $({f}^{−1}(a),a)$ on the graph of $f(x)$ having a tangent line with a slope of ${f}^{'}({f}^{−1}(a))=\frac{q}{p}.$ Thus, if ${f}^{−1}(x)$ is differentiable at $a,$ then it must be the case that

${({f}^{−1})}^{'}(a)=\frac{1}{{f}^{'}({f}^{−1}(a))}.$  {eq:fs-id1169738950018}

> FIGURE {fig:CNX_Calc_Figure_03_07_001} src=../../media/CNX_Calc_Figure_03_07_001.jpg
> alt: This graph shows a function f(x) and its inverse f−1(x). These functions are symmetric about the line y = x. The tangent line of the function f(x) at the point (f−1(a), a) and the tangent line of the function f−1(x) at (a, f−1(a)) are also symmetric about the line y = x. Specifically, if the slope of one were p/q, then the slope of the other would be q/p. Lastly, their derivatives are also symmetric about the line y = x.
> caption: The tangent lines of a function and its inverse are related; so, too, are the derivatives of these functions.

We may also derive the formula for the derivative of the inverse by first recalling that $x=f({f}^{−1}(x)).$ Then by differentiating both sides of this equation (using the chain rule on the right), we obtain

$1={f}^{'}({f}^{−1}(x))({f}^{−1}{)}^{'}(x).$  {eq:fs-id1169738877985}

Solving for $({f}^{−1}{)}^{'}(x),$ we obtain

$$ {({f}^{−1})}^{'}(x)=\frac{1}{{f}^{'}({f}^{−1}(x))}. $$  {eq:fs-id1169738913441}

We summarize this result in the following theorem.

:::note [theorem] Inverse Function Theorem
Let $f(x)$ be a function that is both invertible and differentiable. Let $y={f}^{−1}(x)$ be the inverse of $f(x).$ For all $x$ satisfying ${f}^{'}({f}^{−1}(x))≠0,$

$\frac{dy}{dx}=\frac{d}{dx}({f}^{−1}(x))={({f}^{−1})}^{'}(x)=\frac{1}{{f}^{'}({f}^{−1}(x))}.$  {eq:fs-id1169739040576}

Alternatively, if $y=g(x)$ is the inverse of $f(x),$ then

$g'(x)=\frac{1}{{f}^{'}(g(x))}.$  {eq:fs-id1169739010824}

:::

:::example {ex:fs-id1169739001941} Applying the Inverse Function Theorem

:::exercise {fs-id1169739299944} type= 
PROBLEM:
Use the inverse function theorem to find the derivative of $g(x)=\frac{x+2}{x}.$ Compare the resulting derivative to that obtained by differentiating the function directly.
SOLUTION:
The inverse of $g(x)=\frac{x+2}{x}$ is $f(x)=\frac{2}{x-1}.$ Since ${g}^{'}(x)=\frac{1}{{f}^{'}(g(x))},$ begin by finding ${f}^{'}(x).$ Thus,

${f}^{'}(x)=\frac{−2}{{(x-1)}^{2}}\;\text{and}\;{f}^{'}(g(x))=\frac{−2}{{(g(x)-1)}^{2}}=\frac{−2}{{(\frac{x+2}{x}-1)}^{2}}=-\frac{{x}^{2}}{2}.$  {eq:fs-id1169739100123}

Finally,

${g}^{'}(x)=\frac{1}{{f}^{'}(g(x))}=-\frac{2}{{x}^{2}}.$  {eq:fs-id1169739326719}

We can verify that this is the correct derivative by applying the quotient rule to $g(x)$ to obtain

${g}^{'}(x)=-\frac{2}{{x}^{2}}.$  {eq:fs-id1169739186571}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736612521} type= 
PROBLEM:
Use the inverse function theorem to find the derivative of $g(x)=\frac{1}{x+2}.$ Compare the result obtained by differentiating $g(x)$ directly.
SOLUTION:
${g}^{'}(x)=-\frac{1}{{(x+2)}^{2}}$
COMMENTARY: Hint
Use the preceding example as a guide.
:::
:::

:::example {ex:fs-id1169738977168} Applying the Inverse Function Theorem

:::exercise {fs-id1169738937013} type= 
PROBLEM:
Use the inverse function theorem to find the derivative of $g(x)=\sqrt[3]{x}.$
SOLUTION:
The function $g(x)=\sqrt[3]{x}$ is the inverse of the function $f(x)={x}^{3}.$ Since ${g}^{'}(x)=\frac{1}{{f}^{'}(g(x))},$ begin by finding ${f}^{'}(x).$ Thus,

${f}^{'}(x)=3{x}^{2}\;\text{and}\;{f}^{'}(g(x))=3{(\sqrt[3]{x})}^{2}=3{x}^{2\text{/}3}.$  {eq:fs-id1169739305067}

Finally,

${g}^{'}(x)=\frac{1}{3{x}^{2\text{/}3}}=\frac{1}{3}{x}^{−2\text{/}3}.$  {eq:fs-id1169739340252}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739274236} type= 
PROBLEM:
Find the derivative of $g(x)=\sqrt[5]{x}$ by applying the inverse function theorem.
SOLUTION:
$g(x)=\frac{1}{5}{x}^{\text{−}4\text{/}5}$
COMMENTARY: Hint
$g(x)$ is the inverse of $f(x)={x}^{5}.$
:::
:::
From the previous example, we see that we can use the inverse function theorem to extend the power rule to exponents of the form $\frac{1}{n},$ where $n$ is a positive integer. This extension will ultimately allow us to differentiate ${x}^{q},$ where $q$ is any rational number.

:::note [theorem] Extending the Power Rule to Rational Exponents
The power rule may be extended to rational exponents. That is, if $n$ is a positive integer, then

$$ \frac{d}{dx}({x}^{1\text{/}n})=\frac{1}{n}{x}^{(1\text{/}n)-1}. $$  {eq:fs-id1169736654797}

Also, if $n$ is a positive integer and $m$ is an arbitrary integer, then

$$ \frac{d}{dx}({x}^{m\text{/}n})=\frac{m}{n}{x}^{(m\text{/}n)-1}. $$  {eq:fs-id1169738994019}

:::

### Proof
The function $g(x)={x}^{1\text{/}n}$ is the inverse of the function $f(x)={x}^{n}.$ Since ${g}^{'}(x)=\frac{1}{{f}^{'}(g(x))},$ begin by finding ${f}^{'}(x).$ Thus,

${f}^{'}(x)=n{x}^{n-1}\;\text{and}\;{f}^{'}(g(x))=n{({x}^{1\text{/}n})}^{n-1}=n{x}^{(n-1)\text{/}n}.$  {eq:fs-id1169736659668}

Finally,

${g}^{'}(x)=\frac{1}{n{x}^{(n-1)\text{/}n}}=\frac{1}{n}{x}^{(1-n)\text{/}n}=\frac{1}{n}{x}^{(1\text{/}n)-1}.$  {eq:fs-id1169739189161}

To differentiate ${x}^{m\text{/}n}$ we must rewrite it as ${({x}^{1\text{/}n})}^{m}$ and apply the chain rule. Thus,

$\frac{d}{dx}({x}^{m\text{/}n})=\frac{d}{dx}({({x}^{1\text{/}n})}^{m})=m{({x}^{1\text{/}n})}^{m-1}\cdot \frac{1}{n}{x}^{(1\text{/}n)-1}=\frac{m}{n}{x}^{(m\text{/}n)-1}.$  {eq:fs-id1169739008349}

□

:::example {ex:fs-id1169739298630} Applying the Power Rule to a Rational Power

:::exercise {fs-id1169739062472} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $y={x}^{2\text{/}3}$ at $x=8.$
SOLUTION:
First find $\frac{dy}{dx}$ and evaluate it at $x=8.$ Since

$\frac{dy}{dx}=\frac{2}{3}{x}^{−1\text{/}3}\;\text{and}\;\frac{dy}{dx}\left|\begin{array}{l} \\ {}_{x=8}\end{array}\right.=\frac{1}{3}$  {eq:fs-id1169739342007}

the slope of the tangent line to the graph at $x=8$ is $\frac{1}{3}.$
Substituting $x=8$ into the original function, we obtain $y=4.$ Thus, the tangent line passes through the point $(8,4).$ Substituting into the point-slope formula for a line, we obtain the tangent line

$y=\frac{1}{3}x+\frac{4}{3}.$  {eq:fs-id1169739030934}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738961642} type= 
PROBLEM:
Find the derivative of $s(t)=\sqrt{2t+1}.$
SOLUTION:
${s}^{'}(t)={(2t+1)}^{\text{−}1\text{/}2}$
COMMENTARY: Hint
Use the chain rule.
:::
:::

## Derivatives of Inverse Trigonometric Functions
We now turn our attention to finding derivatives of inverse trigonometric functions. These derivatives will prove invaluable in the study of integration later in this text. The derivatives of inverse trigonometric functions are quite surprising in that their derivatives are actually algebraic functions. Previously, derivatives of algebraic functions have proven to be algebraic functions and derivatives of trigonometric functions have been shown to be trigonometric functions. Here, for the first time, we see that the derivative of a function need not be of the same type as the original function.

:::example {ex:fs-id1169739208944} Derivative of the Inverse Sine Function

:::exercise {fs-id1169736609244} type= 
PROBLEM:
Use the inverse function theorem to find the derivative of $g(x)={\text{sin}}^{−1}x.$
SOLUTION:
Since for $x$ in the interval $[-\frac{\pi}{2},\frac{\pi}{2}],f(x)=\text{sin}\;x$ is the inverse of $g(x)={\text{sin}}^{−1}x,$ begin by finding ${f}^{'}(x).$ Since

${f}^{'}(x)=\text{cos}\;x\;\text{and}\;{f}^{'}(g(x))=\text{cos}\;({\text{sin}}^{−1}x)=\sqrt{1-{x}^{2}},$  {eq:fs-id1169736611678}

we see that

${g}^{'}(x)=\frac{d}{dx}({\text{sin}}^{−1}x)=\frac{1}{{f}^{'}(g(x))}=\frac{1}{\sqrt{1-{x}^{2}}}.$  {eq:fs-id1169739369239}

COMMENTARY: Analysis
To see that $\text{cos}\;({\text{sin}}^{−1}x)=\sqrt{1-{x}^{2}},$ consider the following argument. Set ${\text{sin}}^{−1}x=\theta .$ In this case, $\text{sin}\;\theta =x$ where $-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}.$ We begin by considering the case where $0<\theta <\frac{\pi}{2}.$ Since $\theta$ is an acute angle, we may construct a right triangle having acute angle $\theta ,$ a hypotenuse of length $1$ and the side opposite angle $\theta$ having length $x.$ From the Pythagorean theorem, the side adjacent to angle $\theta$ has length $\sqrt{1-{x}^{2}}.$ This triangle is shown in [ref:CNX_Calc_Figure_03_07_002]. Using the triangle, we see that $\text{cos}\;({\text{sin}}^{−1}x)=\text{cos}\;\theta =\sqrt{1-{x}^{2}}.$

> FIGURE {fig:CNX_Calc_Figure_03_07_002} src=../../media/CNX_Calc_Figure_03_07_002.jpg
> alt: A right triangle with angle θ, opposite side x, hypotenuse 1, and adjacent side equal to the square root of the quantity (1 – x2).
> caption: Using a right triangle having acute angle $\theta ,$ a hypotenuse of length $1,$ and the side opposite angle $\theta$ having length $x,$ we can see that $\text{cos}\;({\text{sin}}^{−1}x)=\text{cos}\;\theta =\sqrt{1-{x}^{2}}.$

In the case where $-\frac{\pi}{2}<\theta <0,$ we make the observation that $0<\text{−}\theta <\frac{\pi}{2}$ and hence

$\text{cos}\;({\text{sin}}^{−1}x)=\text{cos}\;\theta =\text{cos}\;(\text{−}\theta )=\sqrt{1-{x}^{2}}.$  {eq:fs-id1169739303300}

Now if $\theta =\frac{\pi}{2}$ or $\theta =-\frac{\pi}{2},x=1$ or $x=−1,$ and since in either case $\text{cos}\;\theta =0$ and $\sqrt{1-{x}^{2}}=0,$ we have

$\text{cos}\;({\text{sin}}^{−1}x)=\text{cos}\;\theta =\sqrt{1-{x}^{2}}.$  {eq:fs-id1169739340290}

Finally, if $\theta =0$, $x=0$ and $\text{cos}\;\theta =\sqrt{1-0}=1$.
Consequently, in all cases, $\text{cos}\;({\text{sin}}^{−1}x)=\sqrt{1-{x}^{2}}.$
:::
:::

:::example {ex:fs-id1169736662939} Applying the Chain Rule to the Inverse Sine Function

:::exercise {fs-id1169736662942} type= 
PROBLEM:
Apply the chain rule to the formula derived in [ref:fs-id1169738977168] to find the derivative of $h(x)={\text{sin}}^{−1}(g(x))$ and use this result to find the derivative of $h(x)={\text{sin}}^{−1}(2{x}^{3}).$
SOLUTION:
Applying the chain rule to $h(x)={\text{sin}}^{−1}(g(x)),$ we have

${h}^{'}(x)=\frac{1}{\sqrt{1-{(g(x))}^{2}}}{g}^{'}(x).$  {eq:fs-id1169736596017}

Now let $g(x)=2{x}^{3},$ so ${g}^{'}(x)=6{x}^{2}.$ Substituting into the previous result, we obtain

$\begin{array}{rl}{h}^{'}(x) & =\frac{1}{\sqrt{1-4{x}^{6}}}\cdot 6{x}^{2} \\ & =\frac{6{x}^{2}}{\sqrt{1-4{x}^{6}}}.\end{array}$  {eq:fs-id1169739336080}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739303914} type= 
PROBLEM:
Use the inverse function theorem to find the derivative of $g(x)={\text{tan}}^{−1}x.$
SOLUTION:
${g}^{'}(x)=\frac{1}{1+{x}^{2}}$
COMMENTARY: Hint
The inverse of $g(x)$ is $f(x)=\text{tan}\;x.$ Use [ref:fs-id1169738977168] as a guide.
:::
:::
The derivatives of the remaining inverse trigonometric functions may also be found by using the inverse function theorem. These formulas are provided in the following theorem.

:::note [theorem] Derivatives of Inverse Trigonometric Functions

$$ \;\frac{d}{dx}\;{\text{sin}}^{−1}x=\frac{1}{\sqrt{1-{x}^{2}}} $$  {eq:fs-id1169739303820}

$$ \;\frac{d}{dx}\;{\text{cos}}^{−1}x=\frac{−1}{\sqrt{1-{x}^{2}}} $$  {eq:fs-id1169736659297}

$$ \frac{d}{dx}\;{\text{tan}}^{−1}x=\frac{1}{1+{x}^{2}} $$  {eq:fs-id1169739307948}

$$ \;\frac{d}{dx}{\text{cot}}^{−1}x=\frac{−1}{1+{x}^{2}} $$  {eq:fs-id1169736661928}

$$ \hspace{1.5em}\frac{d}{dx}\;{\text{sec}}^{−1}x=\frac{1}{|x|\sqrt{{x}^{2}-1}} $$  {eq:fs-id1169736659893}

$$ \hspace{1.75em}\frac{d}{dx}\;{\text{csc}}^{−1}x=\frac{−1}{|x|\sqrt{{x}^{2}-1}} $$  {eq:fs-id1169739199743}

:::

:::example {ex:fs-id1169739282715} Applying Differentiation Formulas to an Inverse Tangent Function

:::exercise {fs-id1169739282717} type= 
PROBLEM:
Find the derivative of $f(x)={\text{tan}}^{−1}({x}^{2}).$
SOLUTION:
Let $g(x)={x}^{2},$ so ${g}^{'}(x)=2x.$ Substituting into [ref:fs-id1169739307948], we obtain

${f}^{'}(x)=\frac{1}{1+{({x}^{2})}^{2}}\cdot (2x).$  {eq:fs-id1169736661176}

Simplifying, we have

${f}^{'}(x)=\frac{2x}{1+{x}^{4}}.$  {eq:fs-id1169736595976}

:::
:::

:::example {ex:fs-id1169739301501} Applying Differentiation Formulas to an Inverse Sine Function

:::exercise {fs-id1169738894988} type= 
PROBLEM:
Find the derivative of $h(x)={x}^{2}{\text{sin}}^{−1}x.$
SOLUTION:
By applying the product rule, we have

${h}^{'}(x)=2x\;{\text{sin}}^{−1}x+\frac{1}{\sqrt{1-{x}^{2}}}\cdot {x}^{2}.$  {eq:fs-id1169736603529}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736656490} type= 
PROBLEM:
Find the derivative of $h(x)={\text{cos}}^{−1}(3x-1).$
SOLUTION:
${h}^{'}(x)=\frac{−3}{\sqrt{6x-9{x}^{2}}}$
COMMENTARY: Hint
Use [ref:fs-id1169736659297]. with $g(x)=3x-1$
:::
:::

:::example {ex:fs-id1169736614197} Applying the Inverse Tangent Function

:::exercise {fs-id1169736614199} type= 
PROBLEM:
The position of a particle at time $t$ is given by $s(t)={\text{tan}}^{−1}(\frac{1}{t})$ for $t\ge \frac{1}{2}.$ Find the velocity of the particle at time $t=1.$
SOLUTION:
Begin by differentiating $s(t)$ in order to find $v(t).$ Thus,

$v(t)={s}^{'}(t)=\frac{1}{1+{(\frac{1}{t})}^{2}}\cdot \frac{−1}{{t}^{2}}.$  {eq:fs-id1169739242485}

Simplifying, we have

$v(t)=-\frac{1}{{t}^{2}+1}.$  {eq:fs-id1169736615257}

Thus, $v(1)=-\frac{1}{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736605031} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)={\text{sin}}^{−1}x$ at $x=0.$
SOLUTION:
$y=x$
COMMENTARY: Hint
${f}^{'}(0)$ is the slope of the tangent line.
:::
:::

## Key Concepts {section:key-concepts}
- The inverse function theorem allows us to compute derivatives of inverse functions without using the limit definition of the derivative.
- We can use the inverse function theorem to develop differentiation formulas for the inverse trigonometric functions.

## Key Equations {section:key-equations}

> TABLE {tab:eip-495} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Inverse function theorem** | ${({f}^{−1})}^{'}(x)=\frac{1}{{f}^{'}({f}^{−1}(x))}$ whenever ${f}^{'}({f}^{−1}(x))≠0$ and $f(x)$ is differentiable. |
| **Power rule with rational exponents** | $\frac{d}{dx}({x}^{m\text{/}n})=\frac{m}{n}{x}^{(m\text{/}n)-1}.$ |
| **Derivative of inverse sine function** | $\frac{d}{dx}\;{\text{sin}}^{−1}x=\frac{1}{\sqrt{1-{(x)}^{2}}}$ |
| **Derivative of inverse cosine function** | $\frac{d}{dx}\;{\text{cos}}^{−1}x=\frac{−1}{\sqrt{1-{(x)}^{2}}}$ |
| **Derivative of inverse tangent function** | $\frac{d}{dx}\;{\text{tan}}^{−1}x=\frac{1}{1+{(x)}^{2}}$ |
| **Derivative of inverse cotangent function** | $\frac{d}{dx}\;{\text{cot}}^{−1}x=\frac{−1}{1+{(x)}^{2}}$ |
| **Derivative of inverse secant function** | $\frac{d}{dx}\;{\text{sec}}^{−1}x=\frac{1}{|x|\sqrt{{(x)}^{2}-1}}$ |
| **Derivative of inverse cosecant function** | $\frac{d}{dx}\;{\text{csc}}^{−1}x=\frac{−1}{|x|\sqrt{{(x)}^{2}-1}}$ |

##  {section:section-exercises}
For the following exercises, use the graph of $y=f(x)$ to
a. sketch the graph of $y={f}^{−1}(x),$ and
b. use part a. to estimate ${({f}^{−1})}^{'}(1).$

:::exercise {fs-id1169738869707} type= 
PROBLEM:

> IMAGE {img:fs-id1169739273762} src=../../media/CNX_Calc_Figure_03_07_201.jpg
> alt: A straight line passing through (0, −3) and (3, 3).

:::

:::exercise {fs-id1169739007164} type= 
PROBLEM:

> IMAGE {img:fs-id1169739376157} src=../../media/CNX_Calc_Figure_03_07_203.jpg
> alt: A curved line starting at (−2, 0) and passing through (−1, 1) and (2, 2).

SOLUTION:
a.

> IMAGE {img:fs-id1169736613825} src=../../media/CNX_Calc_Figure_03_07_204.jpg
> alt: A curved line starting at (−3, 0) and passing through (−2, 1) and (1, 2). There is another curved line that is symmetric with this about the line x = y. That is, it starts at (0, −3) and passes through (1, −2) and (2, 1).

b. ${({f}^{−1})}^{'}(1)\sim 2$
:::

:::exercise {fs-id1169739242999} type= 
PROBLEM:

> IMAGE {img:fs-id1169739243004} src=../../media/CNX_Calc_Figure_03_07_205.jpg
> alt: A curved line starting at (4, 0) and passing through (0, 1) and (−1, 4).

:::

:::exercise {fs-id1169739285054} type= 
PROBLEM:

> IMAGE {img:fs-id1169739285058} src=../../media/CNX_Calc_Figure_03_07_207.jpg
> alt: A quarter circle starting at (0, 4) and ending at (4, 0).

SOLUTION:
a.

> IMAGE {img:fs-id1169736609893} src=../../media/CNX_Calc_Figure_03_07_208.jpg
> alt: A quarter circle starting at (0, 4) and ending at (4, 0).

b. $\begin{array}{l}y'=\frac{-x}{\sqrt{16-{x}^{2}}} \\ y'(1)=\frac{-1}{\sqrt{16-1}}=\frac{-1}{\sqrt{15}}\end{array}$
:::
For the following exercises, use the functions $y=f(x)$ to find
a. $\frac{df}{dx}$ at $x=a$ and
b. $x={f}^{−1}(y).$
c. Then use part b. to find $\frac{d{f}^{−1}}{dy}$ at $y=f(a).$

:::exercise {fs-id1169739210566} type= 
PROBLEM:
$f(x)=6x-1,x=−2$
:::

:::exercise {fs-id1169739242570} type= 
PROBLEM:
$f(x)=2{x}^{3}-3,x=1$
SOLUTION:
a. 6, b. $x={f}^{−1}(y)={(\frac{y+3}{2})}^{1\text{/}3},$ c. $\frac{1}{6}$
:::

:::exercise {fs-id1169736659075} type= 
PROBLEM:
$f(x)=9-{x}^{2},0\le x\le 3,x=2$
:::

:::exercise {fs-id1169736656049} type= 
PROBLEM:
$f(x)=\text{sin}\;x,x=0$
SOLUTION:
a. $1,$ b. $x={f}^{−1}(y)={\text{sin}}^{−1}y,$ c. $1$
:::
For each of the following functions, find ${({f}^{−1})}^{'}(a).$

:::exercise {fs-id1169736594107} type= 
PROBLEM:
$f(x)={x}^{2}+3x+2,x\ge -\frac{3}{2},a=2$
:::

:::exercise {fs-id1169739270336} type= 
PROBLEM:
$f(x)={x}^{3}+2x+3,a=0$
SOLUTION:
$\frac{1}{5}$
:::

:::exercise {fs-id1169739299216} type= 
PROBLEM:
$f(x)=x+\sqrt{x},a=2$
:::

:::exercise {fs-id1169736658912} type= 
PROBLEM:
$f(x)=x-\frac{2}{x},x<0,a=1$
SOLUTION:
$\frac{1}{3}$
:::

:::exercise {fs-id1169739302105} type= 
PROBLEM:
$f(x)=x+\text{sin}\;x,a=0$
:::

:::exercise {fs-id1169736655092} type= 
PROBLEM:
$f(x)=\text{tan}\;x+3{x}^{2},a=0;0<x<\pi /2$
SOLUTION:
$1$
:::
For each of the given functions $y=f(x),$  
a. find the slope of the tangent line to its inverse function ${f}^{−1}$ at the indicated point $P,$ and
b. find an equation of the tangent line to the graph of ${f}^{−1}$ at the indicated point.

:::exercise {fs-id1169736589272} type= 
PROBLEM:
$f(x)=\frac{4}{1+{x}^{2}},P(2,1)$
:::

:::exercise {fs-id1169736658749} type= 
PROBLEM:
$f(x)=\sqrt{x-4},P(2,8)$
SOLUTION:
a. $4,$ b. $y=4x$
:::

:::exercise {fs-id1169739305259} type= 
PROBLEM:
$f(x)={({x}^{3}+1)}^{4},P(16,1)$
:::

:::exercise {fs-id1169739353343} type= 
PROBLEM:
$f(x)=\text{−}{x}^{3}-x+2,P(−8,2)$
SOLUTION:
a. $-\frac{1}{13},$ b. $y=-\frac{1}{13}x+\frac{18}{13}$
:::

:::exercise {fs-id1169739182410} type= 
PROBLEM:
$f(x)={x}^{5}+3{x}^{3}-4x-8,P(−8,1)$
:::
For the following exercises, find $\frac{dy}{dx}$ for the given function.

:::exercise {fs-id1169736659177} type= 
PROBLEM:
$y={\text{sin}}^{−1}({x}^{2})$
SOLUTION:
$\frac{2x}{\sqrt{1-{x}^{4}}}$
:::

:::exercise {fs-id1169739182424} type= 
PROBLEM:
$y={\text{cos}}^{−1}(\sqrt{x})$
:::

:::exercise {fs-id1169736658373} type= 
PROBLEM:
$y={\text{sec}}^{−1}(\frac{1}{x})$
SOLUTION:
$\frac{−1}{\sqrt{1-{x}^{2}}}$
:::

:::exercise {fs-id1169736654821} type= 
PROBLEM:
$y=\sqrt{{\text{csc}}^{−1}x}$
:::

:::exercise {fs-id1169739187768} type= 
PROBLEM:
$y={(1+{\text{tan}}^{−1}x)}^{3}$
SOLUTION:
$\frac{3{(1+{\text{tan}}^{−1}x)}^{2}}{1+{x}^{2}}$
:::

:::exercise {fs-id1169736656774} type= 
PROBLEM:
$y={\text{cos}}^{−1}(2x)\cdot {\text{sin}}^{−1}(2x)$
:::

:::exercise {fs-id1169739188192} type= 
PROBLEM:
$y=\frac{1}{{\text{tan}}^{−1}(x)}$
SOLUTION:
$\frac{−1}{(1+{x}^{2}){({\text{tan}}^{−1}x)}^{2}}$
:::

:::exercise {fs-id1169739097606} type= 
PROBLEM:
$y={\text{sec}}^{−1}(\text{−}x)$
:::

:::exercise {fs-id1169736597734} type= 
PROBLEM:
$y={\text{cot}}^{−1}\sqrt{4-{x}^{2}}$
SOLUTION:
$\frac{x}{(5-{x}^{2})\sqrt{4-{x}^{2}}}$
:::

:::exercise {fs-id1169739305610} type= 
PROBLEM:
$y=x\cdot {\text{csc}}^{−1}x$
:::
For the following exercises, use the given values to find ${({f}^{−1})}^{'}(a).$

:::exercise {fs-id1169736589250} type= 
PROBLEM:
$f(\pi )=0,f'(\pi )=−1,a=0$
SOLUTION:
$−1$
:::

:::exercise {fs-id1169736662496} type= 
PROBLEM:
$f(6)=2,{f}^{'}(6)=\frac{1}{3},a=2$
:::

:::exercise {fs-id1169739273561} type= 
PROBLEM:
$f(\frac{1}{3})=−8,f'(\frac{1}{3})=2,a=−8$
SOLUTION:
$\frac{1}{2}$
:::

:::exercise {fs-id1169736611666} type= 
PROBLEM:
$f(\sqrt{3})=\frac{1}{2},f'(\sqrt{3})=\frac{2}{3},a=\frac{1}{2}$
:::

:::exercise {fs-id1169736610026} type= 
PROBLEM:
$f(1)=−3,f'(1)=10,a=−3$
SOLUTION:
$\frac{1}{10}$
:::

:::exercise {fs-id1169739327870} type= 
PROBLEM:
$f(1)=0,f'(1)=−2,a=0$
:::

:::exercise {fs-id1169736655158} type= 
PROBLEM:
**[T]** The position of a moving hockey puck after $t$ seconds is $s(t)={\text{tan}}^{−1}t$ where $s$ is in meters.
a. Find the velocity of the hockey puck at any time $t.$
b. Find the acceleration of the puck at any time $t.$
c. Evaluate a. and b. for $t=2,4,$ and $6$ seconds.
d. What conclusion can be drawn from the results in c.?
SOLUTION:
a. $v(t)=\frac{1}{1+{t}^{2}}$ b. $a(t)=\frac{−2t}{{(1+{t}^{2})}^{2}}$ c. $(a)0.2,0.06,0.03;(b)-0.16,−0.028,−0.0088$ d. The hockey puck is decelerating/slowing down at 2, 4, and 6 seconds.
:::

:::exercise {fs-id1169736597716} type= 
PROBLEM:
**[T]** A building that is 225 feet tall casts a shadow of various lengths $x$ as the day goes by. An angle of elevation $\theta$ is formed by lines from the top and bottom of the building to the tip of the shadow, as seen in the following figure. Find the rate of change of the angle of elevation $\frac{d\theta}{dx}$ when $x=272$ feet.

> IMAGE {img:fs-id1169736610117} src=../../media/CNX_Calc_Figure_03_07_209.jpg
> alt: A building is shown with height 225 ft. A triangle is made with the building height as the opposite side from the angle θ. The adjacent side has length x.

:::

:::exercise {fs-id1169739351749} type= 
PROBLEM:
**[T]** A pole stands 75 feet tall. An angle $\theta$ is formed when wires of various lengths of $x$ feet are attached from the ground to the top of the pole, as shown in the following figure. Find the rate of change of the angle $\frac{d\theta}{dx}$ when a wire of length 90 feet is attached.

> IMAGE {img:fs-id1169736603556} src=../../media/CNX_Calc_Figure_03_07_210.jpg
> alt: A flagpole is shown with height 75 ft. A triangle is made with the flagpole height as the opposite side from the angle θ. The hypotenuse has length x.

SOLUTION:
$−0.0168$ radians per foot
:::

:::exercise {fs-id1169736593674} type= 
PROBLEM:
**[T]** A television camera at ground level is 2000 feet away from the launching pad of a space rocket that is set to take off vertically, as seen in the following figure. The angle of elevation of the camera can be found by $\theta ={\text{tan}}^{−1}(\frac{x}{2000}),$ where $x$ is the height of the rocket. Find the rate of change of the angle of elevation after launch when the camera and the rocket are 5000 feet apart.

> IMAGE {img:fs-id1169739341315} src=../../media/CNX_Calc_Figure_03_07_211.jpg
> alt: A rocket is shown with in the air with the distance from its nose to the ground being x. A triangle is made with the rocket height as the opposite side from the angle θ. The adjacent side has length 2000.

:::

:::exercise {fs-id1169736593600} type= 
PROBLEM:
**[T]** A local movie theater with a 30-foot-high screen that is 10 feet above a person’s eye level when seated has a viewing angle $\theta$ (in radians) given by $\theta ={\text{cot}}^{−1}\frac{x}{40}-{\text{cot}}^{−1}\frac{x}{10},$
where $x$ is the distance in feet away from the movie screen that the person is sitting, as shown in the following figure.

> IMAGE {img:fs-id1169736655292} src=../../media/CNX_Calc_Figure_03_07_212.jpg
> alt: A person is shown with a right triangle coming from their eye (the right angle being on the opposite side from the eye), with height 10 and base x. There is a line drawn from the eye to the top of the screen, which makes an angle θ with the triangle’s hypotenuse. The screen has a height of 30.

a. Find $\frac{d\theta}{dx}.$
b. Evaluate $\frac{d\theta}{dx}$ for $x=5,10,15,$ and 20.
c. Interpret the results in b..
d. Evaluate $\frac{d\theta}{dx}$ for $x=25,30,35,$ and 40
e. Interpret the results in d. At what distance $x$ should the person sit to maximize his or her viewing angle?
SOLUTION:
a. $\frac{d\theta}{dx}=\frac{10}{100+{x}^{2}}-\frac{40}{1600+{x}^{2}}$ b. $\frac{18}{325},\frac{9}{340},\frac{42}{4745},0$ c. As a person moves farther away from the screen, the viewing angle is increasing, which implies that as he or she moves farther away, his or her screen vision is widening. d. $-\frac{54}{12905},-\frac{3}{500},-\frac{198}{29945},-\frac{9}{1360}$ e. As the person moves beyond 20 feet from the screen, the viewing angle is decreasing. The optimal distance the person should stand for maximizing the viewing angle is 20 feet.
:::

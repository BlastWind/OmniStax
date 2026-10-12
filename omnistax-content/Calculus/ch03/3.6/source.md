# The Chain Rule

## Learning Objectives {section:learning-objectives}
- State the chain rule for the composition of two functions.
- Apply the chain rule together with the power rule.
- Apply the chain rule and the product/quotient rules correctly in combination when both are necessary.
- Recognize the chain rule for a composition of three or more functions.
- Describe the proof of the chain rule.

We have seen the techniques for differentiating basic functions $({x}^{n},\text{sin}\;x,\text{cos}\;x,\text{etc}.)$ as well as sums, differences, products, quotients, and constant multiples of these functions. However, these techniques do not allow us to differentiate compositions of functions, such as $h(x)=\text{sin}({x}^{3})$ or $k(x)=\sqrt{3{x}^{2}+1}.$ In this section, we study the rule for finding the derivative of the composition of two or more functions.

## Deriving the Chain Rule
When we have a function that is a composition of two or more functions, we could use all of the techniques we have already learned to differentiate it. However, using all of those techniques to break down a function into simpler parts that we are able to differentiate can get cumbersome. Instead, we use the {term:chain rule}, which states that the derivative of a composite function is the derivative of the outer function evaluated at the inner function times the derivative of the inner function.
To put this rule into context, let’s take a look at an example: $h(x)=\text{sin}\;({x}^{3}).$ We can think of the derivative of this function with respect to *x* as the rate of change of $\text{sin}({x}^{3})$ relative to the change in $x.$ Consequently, we want to know how $\text{sin}({x}^{3})$ changes as $x$ changes. We can think of this event as a chain reaction: As $x$ changes, ${x}^{3}$ changes, which leads to a change in $\text{sin}\;({x}^{3}).$ This chain reaction gives us hints as to what is involved in computing the derivative of $\;\text{sin}({x}^{3}).$ First of all, a change in $x$ forcing a change in ${x}^{3}$ suggests that somehow the derivative of ${x}^{3}$ is involved. In addition, the change in ${x}^{3}$ forcing a change in $\text{sin}({x}^{3})$ suggests that the derivative of $\text{sin}(u)$ with respect to $u,$ where $u={x}^{3},$ is also part of the final derivative.
We can take a more formal look at the derivative of $h(x)=\text{sin}\;({x}^{3})$ by setting up the limit that would give us the derivative at a specific value $a$ in the domain of $h(x)=\text{sin}\;({x}^{3}).$

${h}^{'}(a)=\lim_{x\to a}\frac{\text{sin}\;({x}^{3})-\text{sin}({a}^{3})}{x-a}.$  {eq:fs-id1169738941291}

This expression does not seem particularly helpful; however, we can modify it by multiplying and dividing by the expression ${x}^{3}-{a}^{3}$ to obtain

${h}^{'}(a)=\lim_{x\to a}\frac{\text{sin}\;({x}^{3})-\text{sin}({a}^{3})}{{x}^{3}-{a}^{3}}\cdot \frac{{x}^{3}-{a}^{3}}{x-a}.$  {eq:fs-id1169739101346}

From the definition of the derivative, we can see that the second factor is the derivative of ${x}^{3}$ at $x=a.$ That is,

$\lim_{x\to a}\frac{{x}^{3}-{a}^{3}}{x-a}=\frac{d}{dx}{({x}^{3})}_{x=a}=3{a}^{2}.$  {eq:fs-id1169739096283}

However, it might be a little more challenging to recognize that the first term is also a derivative. We can see this by letting $u={x}^{3}$ and observing that as $x\to a,u\to {a}^{3}\text{:}$

$\begin{array}{rl}\lim_{x\to a}\frac{\text{sin}\;({x}^{3})-\text{sin}\;({a}^{3})}{{x}^{3}-{a}^{3}} & =\lim_{u\to {a}^{3}}\frac{\text{sin}\;u-\text{sin}\;({a}^{3})}{u-{a}^{3}} \\ & =\frac{d}{du}{(\text{sin}\;u)}_{u={a}^{3}} \\ & =\text{cos}\;({a}^{3}).\end{array}$  {eq:fs-id1169739035291}

Thus, ${h}^{'}(a)=\text{cos}({a}^{3})\cdot 3{a}^{2}.$
In other words, if $h(x)=\text{sin}\;({x}^{3}),$ then ${h}^{'}(x)=\text{cos}\;({x}^{3})\cdot 3{x}^{2}.$ Thus, if we think of $h(x)=\text{sin}({x}^{3})$ as the composition $(f\circ g)(x)=f(g(x))$ where $f(x)=$ sin $x$ and $g(x)={x}^{3},$ then the derivative of $h(x)=\text{sin}({x}^{3})$ is the product of the derivative of $g(x)={x}^{3}$ and the derivative of the function $f(x)=\text{sin}\;x$ evaluated at the function $g(x)={x}^{3}.$ At this point, we anticipate that for $h(x)=\text{sin}\;(g(x)),$ it is quite likely that ${h}^{'}(x)=\text{cos}(g(x)){g}^{'}(x).$ As we determined above, this is the case for $h(x)=\text{sin}\;({x}^{3}).$
Now that we have derived a special case of the chain rule, we state the general case and then apply it in a general form to other composite functions. An informal proof is provided at the end of the section.

:::note [rule] Rule: The Chain Rule
Let $f$ and $g$ be functions. For all *x* in the domain of $g$ for which $g$ is differentiable at *x* and $f$ is differentiable at $g(x),$ the derivative of the composite function

$h(x)=(f\circ g)(x)=f(g(x))$  {eq:fs-id1169739233799}

is given by

$$ {h}^{'}(x)={f}^{'}(g(x)){g}^{'}(x). $$  {eq:fs-id1169738948938}

Alternatively, if $y$ is a function of $u,$ and $u$ is a function of $x,$ then

$\frac{dy}{dx}=\frac{dy}{du}\cdot \frac{du}{dx}.$  {eq:fs-id1169739187558}

:::

:::note [media-2] 
Watch an [animation](http://www.openstax.org/l/20_chainrule2) of the chain rule.
:::

:::note [problem-solving] Applying the Chain Rule
1. To differentiate $h(x)=f(g(x)),$ begin by identifying $f(x)$ and $g(x).$
2. Find $f'(x)$ and evaluate it at $g(x)$ to obtain ${f}^{'}(g(x)).$
3. Find ${g}^{'}(x).$
4. Write ${h}^{'}(x)={f}^{'}(g(x))\cdot {g}^{'}(x).$
*Note*: When applying the chain rule to the composition of two or more functions, keep in mind that we work our way from the outside function in. It is also useful to remember that the derivative of the composition of two functions can be thought of as having two parts; the derivative of the composition of three functions has three parts; and so on. Also, remember that we never evaluate a derivative at a derivative.
:::

## The Chain and Power Rules Combined
We can now apply the chain rule to composite functions, but note that we often need to use it with other rules. For example, to find derivatives of functions of the form $h(x)={(g(x))}^{n},$ we need to use the chain rule combined with the power rule. To do so, we can think of $h(x)={(g(x))}^{n}$ as $f(g(x))$ where $f(x)={x}^{n}.$ Then ${f}^{'}(x)=n{x}^{n-1}.$ Thus, ${f}^{'}(g(x))=n{(g(x))}^{n-1}.$ This leads us to the derivative of a power function using the chain rule,

${h}^{'}(x)=n{(g(x))}^{n-1}{g}^{'}(x)$  {eq:fs-id1169739325710}

:::note [rule] Rule: Power Rule for Composition of Functions
For all values of *x* for which the derivative is defined, if

$h(x)={(g(x))}^{n}.$  {eq:fs-id1169739006308}

Then

$$ {h}^{'}(x)=n{(g(x))}^{n-1}{g}^{'}(x). $$  {eq:fs-id1169739222795}

:::

:::example {ex:fs-id1169739274312} Using the Chain and Power Rules

:::exercise {fs-id1169739274625} type= 
PROBLEM:
Find the derivative of $h(x)=\frac{1}{{(3{x}^{2}+1)}^{2}}.$
SOLUTION:
First, rewrite $h(x)=\frac{1}{{(3{x}^{2}+1)}^{2}}={(3{x}^{2}+1)}^{−2}.$
Applying the power rule with $g(x)=3{x}^{2}+1,$ we have

${h}^{'}(x)=−2{(3{x}^{2}+1)}^{−3}(6x).$  {eq:fs-id1169736609881}

Rewriting back to the original form gives us

${h}^{'}(x)=\frac{−12x}{{(3{x}^{2}+1)}^{3}}.$  {eq:fs-id1169739008104}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736662942} type= 
PROBLEM:
Find the derivative of $h(x)={(2{x}^{3}+2x-1)}^{4}.$
SOLUTION:
${h}^{'}(x)=4{(2{x}^{3}+2x-1)}^{3}(6{x}^{2}+2)=8(3{x}^{2}+1){(2{x}^{3}+2x-1)}^{3}$
COMMENTARY: Hint
Use [ref:fs-id1169739222795] with $g(x)=2{x}^{3}+2x-1$
:::
:::

:::example {ex:fs-id1169739302258} Using the Chain and Power Rules with a Trigonometric Function

:::exercise {fs-id1169736609872} type= 
PROBLEM:
Find the derivative of $h(x)={\text{sin}}^{3}x.$
SOLUTION:
First recall that ${\text{sin}}^{3}x={(\text{sin}\;x)}^{3},$ so we can rewrite $h(x)={\text{sin}}^{3}x$ as $h(x)={(\text{sin}\;x)}^{3}.$
Applying the power rule with $g(x)=\text{sin}\;x,$ we obtain

${h}^{'}(x)=3{(\text{sin}\;x)}^{2}\text{cos}\;x=3\;{\text{sin}}^{2}x\;\text{cos}\;x.$  {eq:fs-id1169739039132}

:::
:::

:::example {ex:fs-id1169739190027} Finding the Equation of a Tangent Line

:::exercise {fs-id1169739190029} type= 
PROBLEM:
Find the equation of a line tangent to the graph of $h(x)=\frac{1}{{(3x-5)}^{2}}$ at $x=2.$
SOLUTION:
Because we are finding an equation of a line, we need a point. The *x*-coordinate of the point is 2. To find the *y*-coordinate, substitute 2 into $h(x).$ Since $h(2)=\frac{1}{{(3(2)-5)}^{2}}=1,$ the point is $(2,1).$
For the slope, we need ${h}^{'}(2).$ To find ${h}^{'}(x),$ first we rewrite $h(x)={(3x-5)}^{−2}$ and apply the power rule to obtain

${h}^{'}(x)=−2{(3x-5)}^{−3}(3)=−6{(3x-5)}^{−3}.$  {eq:fs-id1169736662505}

By substituting, we have ${h}^{'}(2)=−6{(3(2)-5)}^{−3}=−6.$ Therefore, the line has equation $y-1=−6(x-2).$ Rewriting, the equation of the line is $y=−6x+13.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739301871} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)={({x}^{2}-2)}^{3}$ at $x=−2.$
SOLUTION:
$y=−48x-88$
COMMENTARY: Hint
Use the preceding example as a guide.
:::
:::

## Combining the Chain Rule with Other Rules
Now that we can combine the chain rule and the power rule, we examine how to combine the chain rule with the other rules we have learned. In particular, we can use it with the formulas for the derivatives of trigonometric functions or with the product rule.

:::example {ex:fs-id1169736656617} Using the Chain Rule on a General Cosine Function

:::exercise {fs-id1169736656619} type= 
PROBLEM:
Find the derivative of $h(x)=\text{cos}\;(g(x)).$
SOLUTION:
Think of $h(x)=\text{cos}(g(x))$ as $f(g(x))$ where $f(x)=\text{cos}\;x.$ Since ${f}^{'}(x)=\text{−}\text{sin}\;x.$ we have ${f}^{'}(g(x))=\text{−}\text{sin}\;(g(x)).$ Then we do the following calculation.

$\begin{array}{rllll}{h}^{'}(x) & ={f}^{'}(g(x)){g}^{'}(x) & & & \text{Apply the chain rule.} \\ & =\text{−}\text{sin}\;(g(x)){g}^{'}(x) & & & \text{Substitute}\;{f}^{'}(g(x))=\text{−}\text{sin}\;(g(x)).\end{array}$  {eq:fs-id1169739303314}

Thus, the derivative of $h(x)=\text{cos}\;(g(x))$ is given by ${h}^{'}(x)=\text{−}\text{sin}\;(g(x)){g}^{'}(x).$
:::
:::
In the following example we apply the rule that we have just derived.

:::example {ex:fs-id1169739301537} Using the Chain Rule on a Cosine Function

:::exercise {fs-id1169739301539} type= 
PROBLEM:
Find the derivative of $h(x)=\text{cos}\;(5{x}^{2}).$
SOLUTION:
Let $g(x)=5{x}^{2}.$ Then ${g}^{'}(x)=10x.$ Using the result from the previous example,

$\begin{array}{rl}{h}^{'}(x) & =\text{−}\text{sin}\;(5{x}^{2})\cdot 10x \\ & =−10x\;\text{sin}\;(5{x}^{2}).\end{array}$  {eq:fs-id1169739111373}

:::
:::

:::example {ex:fs-id1169739333921} Using the Chain Rule on Another Trigonometric Function

:::exercise {fs-id1169739333923} type= 
PROBLEM:
Find the derivative of $h(x)=\text{sec}\;(4{x}^{5}+2x).$
SOLUTION:
Apply the chain rule to $h(x)=\text{sec}\;(g(x))$ to obtain

${h}^{'}(x)=\text{sec}(g(x))\;\text{tan}\;(g(x)){g}^{'}(x).$  {eq:fs-id1169739285070}

In this problem, $g(x)=4{x}^{5}+2x,$ so we have ${g}^{'}(x)=20{x}^{4}+2.$ Therefore, we obtain

$\begin{array}{rl}{h}^{'}(x) & =\text{sec}\;(4{x}^{5}+2x)\;\text{tan}\;(4{x}^{5}+2x)(20{x}^{4}+2) \\ & =(20{x}^{4}+2)\text{sec}\;(4{x}^{5}+2x)\;\text{tan}\;(4{x}^{5}+2x).\end{array}$  {eq:fs-id1169739299798}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739188147} type= 
PROBLEM:
Find the derivative of $h(x)=\text{sin}(7x+2).$
SOLUTION:
${h}^{'}(x)=7\;\text{cos}\;(7x+2)$
COMMENTARY: Hint
Apply the chain rule to $h(x)=\text{sin}\;g(x)$ first and then use $g(x)=7x+2.$
:::
:::
At this point we provide a list of derivative formulas that may be obtained by applying the chain rule in conjunction with the formulas for derivatives of trigonometric functions. Their derivations are similar to those used in [ref:fs-id1169736656617] and [ref:fs-id1169739333921]. For convenience, formulas are also given in Leibniz’s notation, which some students find easier to remember. (We discuss the chain rule using Leibniz’s notation at the end of this section.) It is not absolutely necessary to memorize these as separate formulas as they are all applications of the chain rule to previously learned formulas.

:::note [theorem] Using the Chain Rule with Trigonometric Functions
For all values of $x$ for which the derivative is defined,

$\begin{array}{llll}\frac{d}{dx}(\text{sin}(g(x)))\;=\text{cos}\;(g(x))g'(x) & & & \frac{d}{dx}\;\text{sin}\;u\;=\text{cos}\;u\frac{du}{dx} \\ \frac{d}{dx}(\text{cos}(g(x)))\;=\text{−}\text{sin}\;(g(x))g'(x) & & & \frac{d}{dx}\;\text{cos}\;u\;=\text{−}\text{sin}\;u\frac{du}{dx} \\ \frac{d}{dx}(\text{tan}(g(x)))\;={\text{sec}}^{2}(g(x))g'(x) & & & \frac{d}{dx}\;\text{tan}\;u\;={\text{sec}}^{2}u\frac{du}{dx} \\ \frac{d}{dx}(\text{cot}(g(x)))\;=\text{−}{\text{csc}}^{2}(g(x))g'(x) & & & \frac{d}{dx}\;\text{cot}\;u\;=\text{−}{\text{csc}}^{2}u\frac{du}{dx} \\ \frac{d}{dx}(\text{sec}(g(x)))\;=\text{sec}(g(x)\;\text{tan}\;(g(x))g'(x) & & & \frac{d}{dx}\;\text{sec}\;u\;=\text{sec}\;u\;\text{tan}\;u\frac{du}{dx} \\ \frac{d}{dx}(\text{csc}(g(x)))\;=\text{−}\text{csc}(g(x))\text{cot}\;(g(x))g'(x) & & & \frac{d}{dx}\;\text{csc}\;u\;=\text{−}\text{csc}\;u\;\text{cot}\;u\frac{du}{dx}.\end{array}$  {eq:fs-id1169736655849}

:::

:::example {ex:fs-id1169739298047} Combining the Chain Rule with the Product Rule

:::exercise {fs-id1169739298049} type= 
PROBLEM:
Find the derivative of $h(x)={(2x+1)}^{5}{(3x-2)}^{7}.$
SOLUTION:
First apply the product rule, then apply the chain rule to each term of the product.

$\begin{array}{rllll}{h}^{'}(x) & =\frac{d}{dx}({(2x+1)}^{5})\cdot {(3x-2)}^{7}+\frac{d}{dx}({(3x-2)}^{7})\cdot {(2x+1)}^{5} & & & \text{Apply the product rule.} \\ & =5{(2x+1)}^{4}\cdot 2\cdot {(3x-2)}^{7}+7{(3x-2)}^{6}\cdot 3\cdot {(2x+1)}^{5} & & & \text{Apply the chain rule.} \\ & =10{(2x+1)}^{4}{(3x-2)}^{7}+21{(3x-2)}^{6}{(2x+1)}^{5} & & & \text{Simplify.} \\ & ={(2x+1)}^{4}{(3x-2)}^{6}(10(3x-2)+21(2x+1)) & & & \text{Factor out}\;{(2x+1)}^{4}{(3x-2)}^{6}. \\ & ={(2x+1)}^{4}{(3x-2)}^{6}(72x+1) & & & \text{Simplify.}\end{array}$  {eq:fs-id1169739345785}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736603465} type= 
PROBLEM:
Find the derivative of $h(x)=\frac{x}{{(2x+3)}^{3}}.$
SOLUTION:
${h}^{'}(x)=\frac{3-4x}{{(2x+3)}^{4}}$
COMMENTARY: Hint
Start out by applying the quotient rule. Remember to use the chain rule to differentiate the denominator.
:::
:::

## Composites of Three or More Functions
We can now combine the chain rule with other rules for differentiating functions, but when we are differentiating the composition of three or more functions, we need to apply the chain rule more than once. If we look at this situation in general terms, we can generate a formula, but we do not need to remember it, as we can simply apply the chain rule multiple times.
In general terms, first we let

$k(x)=h(f(g(x))).$  {eq:fs-id1169739304877}

Then, applying the chain rule once we obtain

${k}^{'}(x)=\frac{d}{dx}(h(f(g(x)))=h'(f(g(x)))\cdot \frac{d}{dx}f((g(x))).$  {eq:fs-id1169739304927}

Applying the chain rule again, we obtain

${k}^{'}(x)={h}^{'}(f(g(x)){f}^{'}(g(x)){g}^{'}(x)).$  {eq:fs-id1169736597616}

:::note [rule] Rule: Chain Rule for a Composition of Three Functions
For all values of *x* for which the function is differentiable, if

$k(x)=h(f(g(x))),$  {eq:fs-id1169736597716}

then

${k}^{'}(x)={h}^{'}(f(g(x))){f}^{'}(g(x)){g}^{'}(x).$  {eq:fs-id1169736597766}

In other words, we are applying the chain rule twice.
:::
Notice that the derivative of the composition of three functions has three parts. (Similarly, the derivative of the composition of four functions has four parts, and so on.) Also, *remember, we can always work from the outside in, taking one derivative at a time.*

:::example {ex:fs-id1169736658580} Differentiating a Composite of Three Functions

:::exercise {fs-id1169736658582} type= 
PROBLEM:
Find the derivative of $k(x)={\text{cos}}^{4}({7x}^{2}+1).$
SOLUTION:
First, rewrite $k(x)$ as

$k(x)={(\text{cos}\;(7{x}^{2}+1))}^{4}.$  {eq:fs-id1169736658656}

Then apply the power rule several times.

$\begin{array}{rllll}{k}^{'}(x) & =4{(\text{cos}\;(7{x}^{2}+1))}^{3}(\frac{d}{dx}\text{cos}\;(7{x}^{2}+1)) & & & \text{Apply the chain rule.} \\ & =4{(\text{cos}\;(7{x}^{2}+1))}^{3}(\text{−}\text{sin}\;(7{x}^{2}+1))(\frac{d}{dx}(7{x}^{2}+1)) & & & \text{Apply the chain rule.} \\ & =4{(\text{cos}\;(7{x}^{2}+1))}^{3}(\text{−}\text{sin}\;(7{x}^{2}+1))(14x) & & & \text{Apply the chain rule.} \\ & =−56x\;\text{sin}\;(7{x}^{2}+1){\text{cos}}^{3}(7{x}^{2}+1) & & & \text{Simplify.}\end{array}$  {eq:fs-id1169739275173}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739350747} type= 
PROBLEM:
Find the derivative of $h(x)={\text{sin}}^{6}({x}^{3}).$
SOLUTION:
${h}^{'}(x)=18{x}^{2}{\text{sin}}^{5}({x}^{3})\;\text{cos}\;({x}^{3})$
COMMENTARY: Hint
Rewrite $h(x)={\text{sin}}^{6}({x}^{3})={(\text{sin}({x}^{3}))}^{6}$ and use [ref:fs-id1169736658580] as a guide.
:::
:::

:::example {ex:fs-id1169736593542} Using the Chain Rule in a Velocity Problem

:::exercise {fs-id1169736593544} type= 
PROBLEM:
A particle moves along a coordinate axis. Its position at time *t* is given by $s(t)=\text{sin}\;(2t)+\text{cos}\;(3t).$ What is the velocity of the particle at time $t=\frac{\pi}{6}?$
SOLUTION:
To find $v(t),$ the velocity of the particle at time $t,$ we must differentiate $s(t).$ Thus,

$v(t)={s}^{'}(t)=2\;\text{cos}\;(2t)-3\;\text{sin}\;(3t).$  {eq:fs-id1169736593661}

Substituting $t=\frac{\pi}{6}$ into $v(t),$ we obtain $v(\frac{\pi}{6})=−2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739266714} type= 
PROBLEM:
A particle moves along a coordinate axis. Its position at time $t$ is given by $s(t)=\text{sin}(4t).$ Find its acceleration at time $t.$
SOLUTION:
$a(t)=−16\;\text{sin}(4t)$
COMMENTARY: Hint
Acceleration is the second derivative of position.
:::
:::

### Proof
At this point, we present a very informal proof of the chain rule. For simplicity’s sake we ignore certain issues: For example, we assume that $g(x)≠g(a)$ for $x≠a$ in some open interval containing $a.$ We begin by applying the limit definition of the derivative to the function $h(x)$ to obtain ${h}^{'}(a)\text{:}$

${h}^{'}(a)=\lim_{x\to a}\frac{f(g(x))-f(g(a))}{x-a}.$  {eq:fs-id1169736655258}

Rewriting, we obtain

${h}^{'}(a)=\lim_{x\to a}\frac{f(g(x))-f(g(a))}{g(x)-g(a)}\cdot \frac{g(x)-g(a)}{x-a}.$  {eq:fs-id1169739305455}

Although it is clear that

$\lim_{x\to a}\frac{g(x)-g(a)}{x-a}={g}^{'}(a),$  {eq:fs-id1169739305590}

it is not obvious that

$\lim_{x\to a}\frac{f(g(x))-f(g(a))}{g(x)-g(a)}={f}^{'}(g(a)).$  {eq:fs-id1169736662283}

To see that this is true, first recall that since *g* is differentiable at $a,g$ is also continuous at $a.$ Thus,

$\lim_{x\to a}g(x)=g(a).$  {eq:fs-id1169736662414}

Next, make the substitution $y=g(x)$ and $b=g(a)$ and use change of variables in the limit to obtain

$\lim_{x\to a}\frac{f(g(x))-f(g(a))}{g(x)-g(a)}=\lim_{y\to b}\frac{f(y)-f(b)}{y-b}={f}^{'}(b)={f}^{'}(g(a)).$  {eq:fs-id1169739303433}

Finally,

${h}^{'}(a)=\lim_{x\to a}\frac{f(g(x))-f(g(a))}{g(x)-g(a)}\cdot \frac{g(x)-g(a)}{x-a}={f}^{'}(g(a)){g}^{'}(a).$  {eq:fs-id1169739335835}

□

:::example {ex:fs-id1169736613849} Using the Chain Rule with Functional Values

:::exercise {fs-id1169736613851} type= 
PROBLEM:
Let $h(x)=f(g(x)).$ If $g(1)=4,{g}^{'}(1)=3,$ and ${f}^{'}(4)=7,$ find ${h}^{'}(1).$
SOLUTION:
Use the chain rule, then substitute.

$\begin{array}{rllll}{h}^{'}(1) & ={f}^{'}(g(1)){g}^{'}(1) & & & \text{Apply the chain rule.} \\ & ={f}^{'}(4)\cdot 3 & & & \text{Substitute}\;g(1)=4\;\text{and}\;{g}^{'}(1)=3. \\ & =7\cdot 3 & & & \text{Substitute}\;f'(4)=7. \\ & =21 & & & \text{Simplify.}\end{array}$  {eq:fs-id1169736613982}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739341444} type= 
PROBLEM:
Given $h(x)=f(g(x)).$ If $g(2)=−3,{g}^{'}(2)=4,$ and ${f}^{'}(−3)=7,$ find ${h}^{'}(2).$
SOLUTION:
$28$
COMMENTARY: Hint
Follow [ref:fs-id1169736593542].
:::
:::

## The Chain Rule Using Leibniz’s Notation
As with other derivatives that we have seen, we can express the chain rule using Leibniz’s notation. This notation for the chain rule is used heavily in physics applications.
$\text{For}\;h(x)=f(g(x)),$ let $u=g(x)$ and $y=h(x)=f(u).$ Thus,

${h}^{'}(x)=\frac{dy}{dx},{f}^{'}(g(x))={f}^{'}(u)=\frac{dy}{du}\;\text{and}\;{g}^{'}(x)=\frac{du}{dx}.$  {eq:fs-id1169739353438}

Consequently,

$\frac{dy}{dx}={h}^{'}(x)={f}^{'}(g(x)){g}^{'}(x)=\frac{dy}{du}\cdot \frac{du}{dx}.$  {eq:fs-id1169739307919}

:::note [rule] Rule: Chain Rule Using Leibniz’s Notation
If $y$ is a function of $u,$ and $u$ is a function of $x,$ then

$\frac{dy}{dx}=\frac{dy}{du}\cdot \frac{du}{dx}.$  {eq:fs-id1169739264151}

:::

:::example {ex:fs-id1169739264200} Taking a Derivative Using Leibniz’s Notation, Example 1

:::exercise {fs-id1169739264202} type= 
PROBLEM:
Find the derivative of $y={(\frac{x}{3x+2})}^{5}.$
SOLUTION:
First, let $u=\frac{x}{3x+2}.$ Thus, $y={u}^{5}.$ Next, find $\frac{du}{dx}$ and $\frac{dy}{du}.$ Using the quotient rule,

$\frac{du}{dx}=\frac{2}{{(3x+2)}^{2}}$  {eq:fs-id1169739264320}

and

$\frac{dy}{du}=5{u}^{4}.$  {eq:fs-id1169739289307}

Finally, we put it all together.

$\begin{array}{rllll}\frac{dy}{dx} & =\frac{dy}{du}\cdot \frac{du}{dx} & & & \text{Apply the chain rule.} \\ & =5{u}^{4}\cdot \frac{2}{{(3x+2)}^{2}} & & & \text{Substitute}\;\frac{dy}{du}=5{u}^{4}\;\text{and}\;\frac{du}{dx}=\frac{2}{{(3x+2)}^{2}}. \\ & =5{(\frac{x}{3x+2})}^{4}\cdot \frac{2}{{(3x+2)}^{2}} & & & \text{Substitute}\;u=\frac{x}{3x+2}. \\ & =\frac{10{x}^{4}}{{(3x+2)}^{6}} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169739289340}

It is important to remember that, when using the Leibniz form of the chain rule, the final answer must be expressed entirely in terms of the original variable given in the problem.
:::
:::

:::example {ex:fs-id1169736592583} Taking a Derivative Using Leibniz’s Notation, Example 2

:::exercise {fs-id1169736592585} type= 
PROBLEM:
Find the derivative of $y=\text{tan}\;(4{x}^{2}-3x+1).$
SOLUTION:
First, let $u=4{x}^{2}-3x+1.$ Then $y=\text{tan}\;u.$ Next, find $\frac{du}{dx}$ and $\frac{dy}{du}\text{:}$

$\frac{du}{dx}=8x-3\;\text{and}\;\frac{dy}{du}={\text{sec}}^{2}u.$  {eq:fs-id1169736661338}

Finally, we put it all together.

$\begin{array}{rllll}\frac{dy}{dx} & =\frac{dy}{du}\cdot \frac{du}{dx} & & & \text{Apply the chain rule.} \\ & ={\text{sec}}^{2}u\cdot (8x-3) & & & \text{Use}\;\frac{du}{dx}=8x-3\;\text{and}\;\frac{dy}{du}={\text{sec}}^{2}u. \\ & ={\text{sec}}^{2}(4{x}^{2}-3x+1)\cdot (8x-3) & & & \text{Substitute}\;u=4{x}^{2}-3x+1.\end{array}$  {eq:fs-id1169736661401}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739302086} type= 
PROBLEM:
Use Leibniz’s notation to find the derivative of $y=\text{cos}\;({x}^{3}).$ Make sure that the final answer is expressed entirely in terms of the variable $x.$
SOLUTION:
$\frac{dy}{dx}=−3{x}^{2}\text{sin}\;({x}^{3})$
COMMENTARY: Hint
Let $u={x}^{3}.$
:::
:::

## Key Concepts {section:key-concepts}
- The chain rule allows us to differentiate compositions of two or more functions. It states that for $h(x)=f(g(x)),$

${h}^{'}(x)={f}^{'}(g(x)){g}^{'}(x).$  {eq:fs-id1169736594153}

In Leibniz’s notation this rule takes the form

$\frac{dy}{dx}=\frac{dy}{du}\cdot \frac{du}{dx}.$  {eq:fs-id1169737159954}

- We can use the chain rule with other rules that we have learned, and we can derive formulas for some of them.
- The chain rule combines with the power rule to form a new rule:

$\text{If}\;h(x)={(g(x))}^{n},\text{then}\;{h}^{'}(x)=n{(g(x))}^{n-1}{g}^{'}(x).$  {eq:fs-id1169737470447}

- When applied to the composition of three functions, the chain rule can be expressed as follows: If $h(x)=f(g(k(x))),$ then ${h}^{'}(x)={f}^{'}(g(k(x)){g}^{'}(k(x)){k}^{'}(x).$

## Key Equations {section:key-equations}

> TABLE {tab:eip-494} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **The chain rule** | ${h}^{'}(x)={f}^{'}(g(x)){g}^{'}(x)$ |
| **The power rule for functions** | ${h}^{'}(x)=n{(g(x))}^{n-1}{g}^{'}(x)$ |

##  {section:section-exercises}
For the following exercises, given $y=f(u)$ and $u=g(x),$ find $\frac{dy}{dx}$ by using Leibniz’s notation for the chain rule: $\frac{dy}{dx}=\frac{dy}{du}\;\frac{du}{dx}.$

:::exercise {fs-id1169736659368} type= 
PROBLEM:
$y=3u-6,u=2{x}^{2}$
:::

:::exercise {fs-id1169736659427} type= 
PROBLEM:
$y=6{u}^{3},u=7x-4$
SOLUTION:
$18{u}^{2}\cdot 7=18{(7x-4)}^{2}\cdot 7$
:::

:::exercise {fs-id1169739281036} type= 
PROBLEM:
$y=\text{sin}\;u,u=5x-1$
:::

:::exercise {fs-id1169739281115} type= 
PROBLEM:
$y=\text{cos}\;u,u=\frac{\text{−}x}{8}$
SOLUTION:
$\text{−}\text{sin}\;u\cdot \frac{−1}{8}=\text{−}\text{sin}\;(\frac{\text{−}x}{8})\cdot \frac{−1}{8}$
:::

:::exercise {fs-id1169739281207} type= 
PROBLEM:
$y=\text{tan}\;u,u=9x+2$
:::

:::exercise {fs-id1169739262398} type= 
PROBLEM:
$y=\sqrt{4u+3},u={x}^{2}-6x$
SOLUTION:
$\frac{8x-24}{2\sqrt{4u+3}}=\frac{4x-12}{\sqrt{4{x}^{2}-24x+3}}$
:::
For each of the following exercises,
a. decompose each function in the form $y=f(u)$ and $u=g(x),$ and
b. find $\frac{dy}{dx}$ as a function of $x.$

:::exercise {fs-id1169736602724} type= 
PROBLEM:
$y={(3x-2)}^{6}$
:::

:::exercise {fs-id1169736602828} type= 
PROBLEM:
$y={(3{x}^{2}+1)}^{3}$
SOLUTION:
a. $u=3{x}^{2}+1;$ b. $18x{(3{x}^{2}+1)}^{2}$
:::

:::exercise {fs-id1169736602922} type= 
PROBLEM:
$y={\text{sin}}^{5}(x)$
:::

:::exercise {fs-id1169736588943} type= 
PROBLEM:
$y={(\frac{x}{7}+\frac{7}{x})}^{7}$
SOLUTION:
a. $f(u)={u}^{7},u=\frac{x}{7}+\frac{7}{x};$ b. $7{(\frac{x}{7}+\frac{7}{x})}^{6}\cdot (\frac{1}{7}-\frac{7}{{x}^{2}})$
:::

:::exercise {fs-id1169736589083} type= 
PROBLEM:
$y=\text{tan}\;(\text{sec}\;x)$
:::

:::exercise {fs-id1169739251116} type= 
PROBLEM:
$y=\text{csc}\;(\pi x+1)$
SOLUTION:
a. $f(u)=\text{csc}\;u,u=\pi x+1;$ b. $\text{−}\pi \;\text{csc}\;(\pi x+1)\cdot \text{cot}\;(\pi x+1)$
:::

:::exercise {fs-id1169739280322} type= 
PROBLEM:
$y={\text{cot}}^{2}x$
:::

:::exercise {fs-id1169739280417} type= 
PROBLEM:
$y=−6\;{(sinx)}^{-3}$
SOLUTION:
a. $f(u)=−6{u}^{−3},u=\text{sin}\;x,$ b. $18\;{(\text{sin})}^{−4}x\cdot \text{cos}\;x$
:::
For the following exercises, find $\frac{dy}{dx}$ for each function.

:::exercise {fs-id1169736653150} type= 
PROBLEM:
$y={(3{x}^{2}+3x-1)}^{4}$
:::

:::exercise {fs-id1169736653250} type= 
PROBLEM:
$y={(5-2x)}^{−2}$
SOLUTION:
$\frac{4}{{(5-2x)}^{3}}$
:::

:::exercise {fs-id1169736653316} type= 
PROBLEM:
$y={\text{cos}}^{3}(\pi x)$
:::

:::exercise {fs-id1169739195140} type= 
PROBLEM:
$y={(2{x}^{3}-{x}^{2}+6x+1)}^{3}$
SOLUTION:
$6{(2{x}^{3}-{x}^{2}+6x+1)}^{2}(3{x}^{2}-x+3)$
:::

:::exercise {fs-id1169739195259} type= 
PROBLEM:
$y=\frac{1}{{\text{sin}}^{2}(x)}$
:::

:::exercise {fs-id1169739195337} type= 
PROBLEM:
$y={(\text{tan}\;x+\text{sin}\;x)}^{−3}$
SOLUTION:
$−3{(\text{tan}\;x+\text{sin}\;x)}^{−4}\cdot ({\text{sec}}^{2}x+\text{cos}\;x)$
:::

:::exercise {fs-id1169738989560} type= 
PROBLEM:
$y={x}^{2}{\text{cos}}^{4}x$
:::

:::exercise {fs-id1169738989642} type= 
PROBLEM:
$y=\text{sin}\;(\text{cos}\;7x)$
SOLUTION:
$−7\;\text{cos}\;(\text{cos}\;7x)\cdot \text{sin}\;7x$
:::

:::exercise {fs-id1169736585006} type= 
PROBLEM:
$y=\sqrt{6+\text{sec}\;\pi {x}^{2}}$
:::

:::exercise {fs-id1169736585115} type= 
PROBLEM:
$y={\text{cot}}^{3}(4x+1)$
SOLUTION:
$−12\;{\text{cot}}^{2}(4x+1)\cdot {\text{csc}}^{2}(4x+1)$
:::

:::exercise {fs-id1169738988193} type= 
PROBLEM:
Let $y={[f(x)]}^{2}$ and suppose that ${f}^{'}(1)=4$ and $\frac{dy}{dx}=10$ for $x=1.$ Find $f(1).$
:::

:::exercise {fs-id1169738988313} type= 
PROBLEM:
Let $y={(f(x)+5{x}^{2})}^{4}$ and suppose that $f(−1)=−4$ and $\frac{dy}{dx}=3$ when $x=−1.$ Find ${f}^{'}(−1)$
SOLUTION:
$10\frac{3}{4}$
:::

:::exercise {fs-id1169739374499} type= 
PROBLEM:
Let $y={(f(u)+3x)}^{2}$ and $u={x}^{3}-2x.$ If $f(4)=6$ and $\frac{dy}{dx}=18$ when $x=2,$ find ${f}^{'}(4).$
:::

:::exercise {fs-id1169739374644} type= 
PROBLEM:
**[T]** Find an equation of the tangent line to $y=\text{−}\text{sin}\;(\frac{x}{2})$ at the origin. Use a calculator to graph the function and the tangent line together.
SOLUTION:
$y=\frac{−1}{2}x$
:::

:::exercise {fs-id1169738991878} type= 
PROBLEM:
**[T]** Find an equation of the tangent line to $y={(3x+\frac{1}{x})}^{2}$ at the point $(1,16).$ Use a calculator to graph the function and the tangent line together.
:::

:::exercise {fs-id1169738991955} type= 
PROBLEM:
Find the $x$-coordinates at which the tangent line to $y={(x-\frac{6}{x})}^{8}$ is horizontal.
SOLUTION:
$x=\pm \sqrt{6}$
:::

:::exercise {fs-id1169738992014} type= 
PROBLEM:
**[T]** Find an equation of the line that is normal to $g(\theta )={\text{sin}}^{2}(\pi \theta )$ at the point $(\frac{1}{4},\frac{1}{2}).$ Use a calculator to graph the function and the normal line together.
:::
For the following exercises, use the information in the following table to find ${h}^{'}(a)$ at the given value for $a.$

> TABLE {tab:fs-id1169736582646} cols=5 class=unnumbered
> summary: This table has five rows and five columns. The first row is a header row and it labels each column. The column headers from left to right are x, f(x), f’(x), g(x), and g’(x). Under the first column are the values 0, 1, 2, and 3. Under the second column are the values 2, 1, 4, and 3. Under the third column are the values 5, −2, 4, and −3. Under the fourth column are the values 0, 3, 1, and 2. Under the fifth column are g’(x) are the values 2, 0, −1, and 3.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
| --- | --- | --- | --- | --- |
| 0 | 2 | 5 | 0 | 2 |
| 1 | 1 | −2 | 3 | 0 |
| 2 | 4 | 4 | 1 | −1 |
| 3 | 3 | −3 | 2 | 3 |

:::exercise {fs-id1169739243334} type= 
PROBLEM:
$h(x)=f(g(x));a=0$
SOLUTION:
10
:::

:::exercise {fs-id1169739243389} type= 
PROBLEM:
$h(x)=g(f(x));a=0$
:::

:::exercise {fs-id1169736662054} type= 
PROBLEM:
$h(x)={({x}^{4}+g(x))}^{−2};a=1$
SOLUTION:
$-\frac{1}{8}$
:::

:::exercise {fs-id1169736662132} type= 
PROBLEM:
$h(x)={(\frac{f(x)}{g(x)})}^{2};a=3$
:::

:::exercise {fs-id1169736662220} type= 
PROBLEM:
$h(x)=f(x+f(x));a=1$
SOLUTION:
$−4$
:::

:::exercise {fs-id1169736608237} type= 
PROBLEM:
$h(x)={(1+g(x))}^{3};a=2$
:::

:::exercise {fs-id1169736608305} type= 
PROBLEM:
$h(x)=g(2+f({x}^{2}));a=1$
SOLUTION:
$−12$
:::

:::exercise {fs-id1169736608372} type= 
PROBLEM:
$h(x)=f(g(\text{sin}\;x));a=0$
:::

:::exercise {fs-id1169736608434} type= 
PROBLEM:
**[T]** The position function of a freight train is given by $s(t)=100{(t+1)}^{−2},$ with $s$ in meters and $t$ in seconds. At time $t=6$ s, find the train’s
a. velocity and
b. acceleration.
c. Using a. and b. is the train speeding up or slowing down?
SOLUTION:
a. $-\frac{200}{343}$ m/s, b. $\frac{600}{2401}$ m/s<sup>2</sup>, c. The train is slowing down since velocity and acceleration have opposite signs.
:::

:::exercise {fs-id1169736592288} type= 
PROBLEM:
**[T]** A mass hanging from a vertical spring is in simple harmonic motion as given by the following position function, where $t$ is measured in seconds and $s$ is in inches:
$s(t)=−3\;\text{cos}\;(\pi t+\frac{\pi}{4}).$
a. Determine the position of the spring at $t=1.5$ s.
b. Find the velocity of the spring at $t=1.5$ s.
:::

:::exercise {fs-id1169736592402} type= 
PROBLEM:
**[T]** The total cost to produce $x$ boxes of Thin Mint Girl Scout cookies is $C$ dollars, where $C=0.0001{x}^{3}-0.02{x}^{2}+3x+300.$ In $t$ weeks production is estimated to be $x=1600+100t$ boxes.
a. Find the marginal cost ${C}^{'}(x).$
b. Use Leibniz’s notation for the chain rule, $\frac{dC}{dt}=\frac{dC}{dx}\cdot \frac{dx}{dt},$ to find the rate with respect to time $t$ that the cost is changing.
c. Use b. to determine how fast costs are increasing when $t=2$ weeks. Include units with the answer.
SOLUTION:
a. ${C}^{'}(x)=0.0003{x}^{2}-0.04x+3$ b. $\frac{dC}{dt}=100\cdot (0.0003{x}^{2}-0.04x+3)$ c. Approximately $90,300 per week
:::

:::exercise {fs-id1169736618622} type= 
PROBLEM:
**[T]** The formula for the area of a circle is $A=\pi {r}^{2},$ where $r$ is the radius of the circle. Suppose a circle is expanding, meaning that both the area $A$ and the radius $r$ (in inches) are expanding.
a. Suppose $r=2-\frac{100}{{(t+7)}^{2}}$ where $t$ is time in seconds. Use the chain rule $\frac{dA}{dt}=\frac{dA}{dr}\cdot \frac{dr}{dt}$ to find the rate at which the area is expanding.
b. Use a. to find the rate at which the area is expanding at $t=4$ s.
:::

:::exercise {fs-id1169736618829} type= 
PROBLEM:
**[T]** The formula for the volume of a sphere is $S=\frac{4}{3}\pi {r}^{3},$ where $r$ (in feet) is the radius of the sphere. Suppose a spherical snowball is melting in the sun.
a. Suppose $r=\frac{1}{{(t+1)}^{2}}-\frac{1}{12}$ where $t$ is time in minutes. Use the chain rule $\frac{dS}{dt}=\frac{dS}{dr}\cdot \frac{dr}{dt}$ to find the rate at which the snowball is melting.
b. Use a. to find the rate at which the volume is changing at $t=1$ min.
SOLUTION:
a. $\frac{dS}{dt}=-\frac{8\pi {r}^{2}}{{(t+1)}^{3}}$ b. The volume is decreasing at a rate of $-\frac{\pi}{36}$ ft<sup>3</sup>/min.
:::

:::exercise {fs-id1169739066858} type= 
PROBLEM:
**[T]** The daily temperature in degrees Fahrenheit of Phoenix in the summer can be modeled by the function $T(x)=94-10\;\text{cos}[\frac{\pi}{12}(x-2)],$ where $x$ is hours after midnight. Find the rate at which the temperature is changing at 4 p.m.
:::

:::exercise {fs-id1169739296655} type= 
PROBLEM:
**[T]** The depth (in feet) of water at a dock changes with the rise and fall of tides. The depth is modeled by the function $D(t)=5\;\text{sin}\;(\frac{\pi}{6}t-\frac{7\pi}{6})+8,$ where $t$ is the number of hours after midnight. Find the rate at which the depth is changing at 6 a.m.
SOLUTION:
$\sim 2.3$ ft/hr
:::

## Glossary
- {def} **chain rule**: the chain rule defines the derivative of a composite function as the derivative of the outer function evaluated at the inner function times the derivative of the inner function

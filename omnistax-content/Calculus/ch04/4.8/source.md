# L’Hôpital’s Rule

## Learning Objectives {section:learning-objectives}
- Recognize when to apply L’Hôpital’s rule.
- Identify indeterminate forms produced by quotients, products, subtractions, and powers, and apply L’Hôpital’s rule in each case.
- Describe the relative growth rates of functions.

In this section, we examine a powerful tool for evaluating limits. This tool, known as {term:L’Hôpital’s rule}, uses derivatives to calculate limits. With this rule, we will be able to evaluate many limits we have not yet been able to determine. Instead of relying on numerical evidence to conjecture that a limit exists, we will be able to show definitively that a limit exists and to determine its exact value.

## Applying L’Hôpital’s Rule
L’Hôpital’s rule can be used to evaluate limits involving the quotient of two functions. Consider

$\lim_{x\to a}\frac{f(x)}{g(x)}.$  {eq:fs-id1165042458008}

If $\lim_{x\to a}f(x)={L}_{1}\;\text{and}\;\lim_{x\to a}g(x)={L}_{2}≠0,$ then

$\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{{L}_{1}}{{L}_{2}}.$  {eq:fs-id1165043088102}

However, what happens if $\lim_{x\to a}f(x)=0$ and $\lim_{x\to a}g(x)=0?$ We call this one of the {term:indeterminate forms}, of type $\frac{0}{0}.$ This is considered an indeterminate form because we cannot determine the exact behavior of $\frac{f(x)}{g(x)}$ as $x\to a$ without further analysis. We have seen examples of this earlier in the text. For example, consider

$\lim_{x\to 2}\frac{{x}^{2}-4}{x-2}\;\text{and}\;\lim_{x\to 0}\frac{\text{sin}\;x}{x}.$  {eq:fs-id1165042515160}

For the first of these examples, we can evaluate the limit by factoring the numerator and writing

$\lim_{x\to 2}\frac{{x}^{2}-4}{x-2}=\lim_{x\to 2}\frac{(x+2)(x-2)}{x-2}=\lim_{x\to 2}(x+2)=2+2=4.$  {eq:fs-id1165043067705}

For $\lim_{x\to 0}\frac{\text{sin}\;x}{x}$ we were able to show, using a geometric argument, that

$\lim_{x\to 0}\frac{\text{sin}\;x}{x}=1.$  {eq:fs-id1165042954700}

Here we use a different technique for evaluating limits such as these. Not only does this technique provide an easier way to evaluate these limits, but also, and more important, it provides us with a way to evaluate many other limits that we could not calculate previously.
The idea behind L’Hôpital’s rule can be explained using local linear approximations. Consider two differentiable functions $f$ and $g$ such that $\lim_{x\to a}f(x)=0=\lim_{x\to a}g(x)$ and such that ${g}^{'}(a)≠0$ For $x$ near $a,$ we can write

$f(x)\approx f(a)+{f}^{'}(a)(x-a)$  {eq:fs-id1165043199940}

and

$g(x)\approx g(a)+{g}^{'}(a)(x-a).$  {eq:fs-id1165042320393}

Therefore,

$\frac{f(x)}{g(x)}\approx \frac{f(a)+{f}^{'}(a)(x-a)}{g(a)+{g}^{'}(a)(x-a)}.$  {eq:fs-id1165042331440}

> FIGURE {fig:CNX_Calc_Figure_04_08_001} src=../../media/CNX_Calc_Figure_04_08_003.jpg
> alt: Two functions y = f(x) and y = g(x) are drawn such that they cross at a point above x = a. The linear approximations of these two functions y = f(a) + f’(a)(x – a) and y = g(a) + g’(a)(x – a) are also drawn.
> caption: If $\lim_{x\to a}f(x)=\lim_{x\to a}g(x),$ then the ratio $f(x)\text{/}g(x)$ is approximately equal to the ratio of their linear approximations near $a.$

Since $f$ is differentiable at $a,$ then $f$ is continuous at $a,$ and therefore $f(a)=\lim_{x\to a}f(x)=0.$ Similarly, $g(a)=\lim_{x\to a}g(x)=0.$ If we also assume that ${f}^{'}$ and ${g}^{'}$ are continuous at $x=a,$ then ${f}^{'}(a)=\lim_{x\to a}{f}^{'}(x)$ and ${g}^{'}(a)=\lim_{x\to a}{g}^{'}(x).$ Using these ideas, we conclude that

$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{{f}^{'}(x)(x-a)}{{g}^{'}(x)(x-a)}=\lim_{x\to a}\frac{{f}^{'}(x)}{{g}^{'}(x)}.$  {eq:fs-id1165042373953}

Note that the assumption that ${f}^{'}$ and ${g}^{'}$ are continuous at $a$ and ${g}^{'}(a)≠0$ can be loosened. We state L’Hôpital’s rule formally for the indeterminate form $\frac{0}{0}.$ Also note that the notation $\frac{0}{0}$ does not mean we are actually dividing zero by zero. Rather, we are using the notation $\frac{0}{0}$ to represent a quotient of limits, each of which is zero.

:::note [theorem] L’Hôpital’s Rule (0/0 Case)
Suppose $f$ and $g$ are differentiable functions over an open interval containing $a,$ except possibly at $a.$ If $\lim_{x\to a}f(x)=0$ and $\lim_{x\to a}g(x)=0,$ then

$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{{f}^{'}(x)}{{g}^{'}(x)},$  {eq:fs-id1165043020148}

assuming the limit on the right exists or is $\infty$ or $\text{−}\infty .$ This result also holds if we are considering one-sided limits, or if $a=\infty \;\text{and}\;-\infty .$
:::

### Proof
We provide a proof of this theorem in the special case when $f,g,{f}^{'},$ and ${g}^{'}$ are all continuous over an open interval containing $a.$ In that case, since $\lim_{x\to a}f(x)=0=\lim_{x\to a}g(x)$ and $f$ and $g$ are continuous at $a,$ it follows that $f(a)=0=g(a).$ Therefore,

$\begin{array}{rllll}\lim_{x\to a}\frac{f(x)}{g(x)} & =\lim_{x\to a}\frac{f(x)-f(a)}{g(x)-g(a)} & & & \text{since}\;f(a)=0=g(a) \\ & =\lim_{x\to a}\frac{\frac{f(x)-f(a)}{x-a}}{\frac{g(x)-g(a)}{x-a}} & & & \text{algebra} \\ & =\frac{\lim_{x\to a}\frac{f(x)-f(a)}{x-a}}{\lim_{x\to a}\frac{g(x)-g(a)}{x-a}} & & & \text{limit of a quotient} \\ & =\frac{{f}^{'}(a)}{{g}^{'}(a)} & & & \text{definition of the derivative} \\ & =\frac{\lim_{x\to a}{f}^{'}(x)}{\lim_{x\to a}{g}^{'}(x)} & & & \text{continuity of}\;{f}^{'}\;\text{and}\;{g}^{'} \\ & =\lim_{x\to a}\frac{{f}^{'}(x)}{{g}^{'}(x)}. & & & \text{limit of a quotient}\end{array}$  {eq:fs-id1165043353664}

Note that L’Hôpital’s rule states we can calculate the limit of a quotient $\frac{f}{g}$ by considering the limit of the quotient of the derivatives $\frac{{f}^{'}}{{g}^{'}}.$ It is important to realize that we are not calculating the derivative of the quotient $\frac{f}{g}.$
□

:::example {ex:fs-id1165043397578} Applying L’Hôpital’s Rule (0/0 Case)

:::exercise {fs-id1165043104016} type= 
PROBLEM:
Evaluate each of the following limits by applying L’Hôpital’s rule.
a. $\lim_{x\to 0}\frac{1-\text{cos}\;x}{x}$
b. $\lim_{x\to 1}\frac{\text{sin}(\pi x)}{\text{ln}\;x}$
c. $\lim_{x\to \infty}\frac{{e}^{1\text{/}x}-1}{1\text{/}x}$
d. $\lim_{x\to 0}\frac{\text{sin}\;x-x}{{x}^{2}}$
SOLUTION:
a. Since the numerator $1-\text{cos}\;x\to 0$ and the denominator $x\to 0,$ we can apply L’Hôpital’s rule to evaluate this limit. We have

$\begin{array}{rl}\lim_{x\to 0}\frac{1-\text{cos}\;x}{x} & =\lim_{x\to 0}\frac{\frac{d}{dx}(1-\text{cos}\;x)}{\frac{d}{dx}(x)} \\ & =\lim_{x\to 0}\frac{\text{sin}\;x}{1} \\ & =\frac{\lim_{x\to 0}(\text{sin}\;x)}{\lim_{x\to 0}(1)} \\ & =\frac{0}{1}=0.\end{array}$  {eq:fs-id1165042328696}

b. As $x\to 1,$ the numerator $\text{sin}(\pi x)\to 0$ and the denominator $\text{ln}(x)\to 0.$ Therefore, we can apply L’Hôpital’s rule. We obtain

$\begin{array}{rl}\lim_{x\to 1}\frac{\text{sin}(\pi x)}{\text{ln}\;x} & =\lim_{x\to 1}\frac{\pi \;\text{cos}(\pi x)}{1\text{/}x} \\ & =\lim_{x\to 1}(\pi x)\text{cos}(\pi x) \\ & =(\pi \cdot 1)(−1)=\text{−}\pi .\end{array}$  {eq:fs-id1165043116372}

c. As $x\to \infty ,$ the numerator ${e}^{1\text{/}x}-1\to 0$ and the denominator $(\frac{1}{x})\to 0.$ Therefore, we can apply L’Hôpital’s rule. We obtain

$\lim_{x\to \infty}\frac{{e}^{1\text{/}x}-1}{\frac{1}{x}}=\lim_{x\to \infty}\frac{{e}^{1\text{/}x}(\frac{−1}{{x}^{2}})}{(\frac{−1}{{x}^{2}})}=\lim_{x\to \infty}{e}^{1\text{/}x}={e}^{0}=1.$  {eq:fs-id1165042327460}

d. As $x\to 0,$ both the numerator and denominator approach zero. Therefore, we can apply L’Hôpital’s rule. We obtain

$\lim_{x\to 0}\frac{\text{sin}\;x-x}{{x}^{2}}=\lim_{x\to 0}\frac{\text{cos}\;x-1}{2x}.$  {eq:fs-id1165042562974}

Since the numerator and denominator of this new quotient both approach zero as $x\to 0,$ we apply L’Hôpital’s rule again. In doing so, we see that

$\lim_{x\to 0}\frac{\text{cos}\;x-1}{2x}=\lim_{x\to 0}\frac{\text{−}\text{sin}\;x}{2}=0.$  {eq:fs-id1165043281524}

Therefore, we conclude that

$\lim_{x\to 0}\frac{\text{sin}\;x-x}{{x}^{2}}=0.$  {eq:fs-id1165043284142}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043395209} type= 
PROBLEM:
Evaluate $\lim_{x\to 0}\frac{x}{\text{tan}\;x}.$
SOLUTION:
$1$
COMMENTARY: Hint
$\frac{d}{dx}\;\text{tan}\;x={\text{sec}}^{2}x$
:::
:::
We can also use L’Hôpital’s rule to evaluate limits of quotients $\frac{f(x)}{g(x)}$ in which $f(x)\to \text{±}\infty$ and $g(x)\to \text{±}\infty .$ Limits of this form are classified as *indeterminate forms of type* $\infty \text{/}\infty .$ Again, note that we are not actually dividing $\infty$ by $\infty .$ Since $\infty$ is not a real number, that is impossible; rather, $\infty \text{/}\infty .$ is used to represent a quotient of limits, each of which is $\infty$ or $\text{−}\infty .$

:::note [theorem] L’Hôpital’s Rule $(\infty \text{/}\infty$ Case)
Suppose $f$ and $g$ are differentiable functions over an open interval containing $a,$ except possibly at $a.$ Suppose $\lim_{x\to a}f(x)=\infty$ (or $\text{−}\infty )$ and $\lim_{x\to a}g(x)=\infty$ (or $\text{−}\infty ).$ Then,

$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{{f}^{'}(x)}{{g}^{'}(x)},$  {eq:fs-id1165042373703}

assuming the limit on the right exists or is $\infty$ or $\text{−}\infty .$ This result also holds if the limit is infinite, if $a=\infty$ or $\text{−}\infty ,$ or the limit is one-sided.
:::

:::example {ex:fs-id1165043427623} Applying L’Hôpital’s Rule $(\infty \text{/}\infty$ Case)

:::exercise {fs-id1165043427625} type= 
PROBLEM:
Evaluate each of the following limits by applying L’Hôpital’s rule.
a. $\lim_{x\to \infty}\frac{3x+5}{2x+1}$
b. $\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{\text{cot}\;x}$
SOLUTION:
a. Since $3x+5$ and $2x+1$ are first-degree polynomials with positive leading coefficients, $\lim_{x\to \infty}(3x+5)=\infty$ and $\lim_{x\to \infty}(2x+1)=\infty .$ Therefore, we apply L’Hôpital’s rule and obtain

$\lim_{x\to \infty}\frac{3x+5}{2x+1}=\lim_{x\to \infty}\frac{3}{2}=\frac{3}{2}.$  {eq:fs-id1165042327389}

Note that this limit can also be calculated without invoking L’Hôpital’s rule. Earlier in the chapter we showed how to evaluate such a limit by dividing the numerator and denominator by the highest power of $x$ in the denominator. In doing so, we saw that

$\lim_{x\to \infty}\frac{3x+5}{2x+1}=\lim_{x\to \infty}\frac{3+5\text{/}x}{2+1\text{/}x}=\frac{3}{2}.$  {eq:fs-id1165042319986}

L’Hôpital’s rule provides us with an alternative means of evaluating this type of limit.
b. Here, $\lim_{x\to {0}^{+}}\text{ln}\;x=\text{−}\infty$ and $\lim_{x\to {0}^{+}}\text{cot}\;x=\infty .$ Therefore, we can apply L’Hôpital’s rule and obtain

$\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{\text{cot}\;x}=\lim_{x\to {0}^{+}}\frac{1\text{/}x}{\text{−}{\text{csc}}^{2}x}=\lim_{x\to {0}^{+}}\frac{1}{\text{−}x\;{\text{csc}}^{2}x}.$  {eq:fs-id1165042374803}

Now as $x\to {0}^{+},$ ${\text{csc}}^{2}x\to \infty .$ Therefore, the first term in the denominator is approaching zero and the second term is getting really large. In such a case, anything can happen with the product. Therefore, we cannot make any conclusion yet. To evaluate the limit, we use the definition of $\text{csc}\;x$ to write

$\lim_{x\to {0}^{+}}\frac{1}{\text{−}x\;{\text{csc}}^{2}x}=\lim_{x\to {0}^{+}}\frac{{\text{sin}}^{2}x}{\text{−}x}.$  {eq:fs-id1165042376466}

Now $\lim_{x\to {0}^{+}}{\text{sin}}^{2}x=0$ and $\lim_{x\to {0}^{+}}x=0,$ so we apply L’Hôpital’s rule again. We find

$\lim_{x\to {0}^{+}}\frac{{\text{sin}}^{2}x}{\text{−}x}=\lim_{x\to {0}^{+}}\frac{2\;\text{sin}\;x\;\text{cos}\;x}{−1}=\frac{0}{−1}=0.$  {eq:fs-id1165043249678}

We conclude that

$\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{\text{cot}\;x}=0.$  {eq:fs-id1165042315721}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042708180} type= 
PROBLEM:
Evaluate $\lim_{x\to \infty}\frac{\text{ln}\;x}{5x}.$
SOLUTION:
$0$
COMMENTARY: Hint
$\frac{d}{dx}\;\text{ln}\;x=\frac{1}{x}$
:::
:::
As mentioned, L’Hôpital’s rule is an extremely useful tool for evaluating limits. It is important to remember, however, that to apply L’Hôpital’s rule to a quotient $\frac{f(x)}{g(x)},$ it is essential that the limit of $\frac{f(x)}{g(x)}$ be of the form $\frac{0}{0}$ or $\infty \text{/}\infty .$ Consider the following example.

:::example {ex:fs-id1165042350228} When L’Hôpital’s Rule Does Not Apply

:::exercise {fs-id1165043219076} type= 
PROBLEM:
Consider $\lim_{x\to 1}\frac{{x}^{2}+5}{3x+4}.$ Show that the limit cannot be evaluated by applying L’Hôpital’s rule.
SOLUTION:
Because the limits of the numerator and denominator are not both zero and are not both infinite, we cannot apply L’Hôpital’s rule. If we try to do so, we get

$\frac{d}{dx}({x}^{2}+5)=2x$  {eq:fs-id1165042398961}

and

$\frac{d}{dx}(3x+4)=3.$  {eq:fs-id1165042318693}

At which point we would conclude erroneously that

$\lim_{x\to 1}\frac{{x}^{2}+5}{3x+4}=\lim_{x\to 1}\frac{2x}{3}=\frac{2}{3}.$  {eq:fs-id1165042364618}

However, since $\lim_{x\to 1}({x}^{2}+5)=6$ and $\lim_{x\to 1}(3x+4)=7,$ we actually have

$\lim_{x\to 1}\frac{{x}^{2}+5}{3x+4}=\frac{6}{7}.$  {eq:fs-id1165042970462}

We can conclude that

$\lim_{x\to 1}\frac{{x}^{2}+5}{3x+4}≠\lim_{x\to 1}\frac{\frac{d}{dx}({x}^{2}+5)}{\frac{d}{dx}(3x+4)}.$  {eq:fs-id1165042383154}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043174649} type= 
PROBLEM:
Explain why we cannot apply L’Hôpital’s rule to evaluate $\lim_{x\to {0}^{+}}\frac{\text{cos}\;x}{x}.$ Evaluate $\lim_{x\to {0}^{+}}\frac{\text{cos}\;x}{x}$ by other means.
SOLUTION:
$\lim_{x\to {0}^{+}}\text{cos}\;x=1.$ Therefore, we cannot apply L’Hôpital’s rule. The limit of the quotient is $\infty$
COMMENTARY: Hint
Determine the limits of the numerator and denominator separately.
:::
:::

## Other Indeterminate Forms
L’Hôpital’s rule is very useful for evaluating limits involving the indeterminate forms $\frac{0}{0}$ and $\infty \text{/}\infty .$ However, we can also use L’Hôpital’s rule to help evaluate limits involving other indeterminate forms that arise when evaluating limits. The expressions $0\cdot \infty ,$ $\infty -\infty ,$ ${1}^{\infty},$ ${\infty}^{0},$ and ${0}^{0}$ are all considered indeterminate forms. These expressions are not real numbers. Rather, they represent forms that arise when trying to evaluate certain limits. Next we realize why these are indeterminate forms and then understand how to use L’Hôpital’s rule in these cases. The key idea is that we must rewrite the indeterminate forms in such a way that we arrive at the indeterminate form $\frac{0}{0}$ or $\infty \text{/}\infty .$

### Indeterminate Form of Type $0\cdot \infty$
Suppose we want to evaluate $\lim_{x\to a}(f(x)\cdot g(x)),$ where $f(x)\to 0$ and $g(x)\to \infty$ (or $\text{−}\infty )$ as $x\to a.$ Since one term in the product is approaching zero but the other term is becoming arbitrarily large (in magnitude), anything can happen to the product. We use the notation $0\cdot \infty$ to denote the form that arises in this situation. The expression $0\cdot \infty$ is considered indeterminate because we cannot determine without further analysis the exact behavior of the product $f(x)g(x)$ as $x\to a.$ For example, let $n$ be a positive integer and consider

$f(x)=\frac{1}{({x}^{n}+1)}\;\text{and}\;g(x)=3{x}^{2}.$  {eq:fs-id1165043259749}

As $x\to \infty ,$ $f(x)\to 0$ and $g(x)\to \infty .$ However, the limit as $x\to \infty$ of $f(x)g(x)=\frac{3{x}^{2}}{({x}^{n}+1)}$ varies, depending on $n.$ If $n=2,$ then $\lim_{x\to \infty}f(x)g(x)=3.$ If $n=1,$ then $\lim_{x\to \infty}f(x)g(x)=\infty .$ If $n=3,$ then $\lim_{x\to \infty}f(x)g(x)=0.$ Here we consider another limit involving the indeterminate form $0\cdot \infty$ and show how to rewrite the function as a quotient to use L’Hôpital’s rule.

:::example {ex:fs-id1165042368495} Indeterminate Form of Type $0\cdot \infty$

:::exercise {fs-id1165042368497} type= 
PROBLEM:
Evaluate $\lim_{x\to {0}^{+}}x\;\text{ln}\;x.$
SOLUTION:
First, rewrite the function $x\;\text{ln}\;x$ as a quotient to apply L’Hôpital’s rule. If we write

$x\;\text{ln}\;x=\frac{\text{ln}\;x}{1\text{/}x},$  {eq:fs-id1165042545843}

we see that $\text{ln}\;x\to \text{−}\infty$ as $x\to {0}^{+}$ and $\frac{1}{x}\to \infty$ as $x\to {0}^{+}.$ Therefore, we can apply L’Hôpital’s rule and obtain

$\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{1\text{/}x}=\lim_{x\to {0}^{+}}\frac{\frac{d}{dx}(\text{ln}\;x)}{\frac{d}{dx}(1\text{/}x)}=\lim_{x\to {0}^{+}}\frac{1\text{/}x}{-1\text{/}{x}^{2}}=\lim_{x\to {0}^{+}}(\text{−}x)=0.$  {eq:fs-id1165042705715}

We conclude that

$\lim_{x\to {0}^{+}}x\;\text{ln}\;x=0.$  {eq:fs-id1165042318650}

> FIGURE {fig:CNX_Calc_Figure_04_08_002} src=../../media/CNX_Calc_Figure_04_08_004.jpg
> alt: The function y = x ln(x) is graphed for values x ≥ 0. At x = 0, the value of the function is 0.
> caption: Finding the limit at $x=0$ of the function $f(x)=x\;\text{ln}\;x.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043430908} type= 
PROBLEM:
Evaluate $\lim_{x\to 0}x\;\text{cot}\;x.$
SOLUTION:
$1$
COMMENTARY: Hint
Write $x\;\text{cot}\;x=\frac{x\;\text{cos}\;x}{\text{sin}\;x}$
:::
:::

### Indeterminate Form of Type $\infty -\infty$
Another type of indeterminate form is $\infty -\infty .$ Consider the following example. Let $n$ be a positive integer and let $f(x)=3{x}^{n}$ and $g(x)=3{x}^{2}+5.$ As $x\to \infty ,$ $f(x)\to \infty$ and $g(x)\to \infty .$ We are interested in $\lim_{x\to \infty}(f(x)-g(x)).$ Depending on whether $f(x)$ grows faster, $g(x)$ grows faster, or they grow at the same rate, as we see next, anything can happen in this limit. Since $f(x)\to \infty$ and $g(x)\to \infty ,$ we write $\infty -\infty$ to denote the form of this limit. As with our other indeterminate forms, $\infty -\infty$ has no meaning on its own and we must do more analysis to determine the value of the limit. For example, suppose the exponent $n$ in the function $f(x)=3{x}^{n}$ is $n=3,$ then

$\lim_{x\to \infty}(f(x)-g(x))=\lim_{x\to \infty}(3{x}^{3}-3{x}^{2}-5)=\infty .$  {eq:fs-id1165043430807}

On the other hand, if $n=2,$ then

$\lim_{x\to \infty}(f(x)-g(x))=\lim_{x\to \infty}(3{x}^{2}-3{x}^{2}-5)=−5.$  {eq:fs-id1165042333235}

However, if $n=1,$ then

$\lim_{x\to \infty}(f(x)-g(x))=\lim_{x\to \infty}(3x-3{x}^{2}-5)=\text{−}\infty .$  {eq:fs-id1165043254251}

Therefore, the limit cannot be determined by considering only $\infty -\infty .$ Next we see how to rewrite an expression involving the indeterminate form $\infty -\infty$ as a fraction to apply L’Hôpital’s rule.

:::example {ex:fs-id1165043323875} Indeterminate Form of Type $\infty -\infty$

:::exercise {fs-id1165043323877} type= 
PROBLEM:
Evaluate $\lim_{x\to {0}^{+}}(\frac{1}{{x}^{2}}-\frac{1}{\text{tan}\;x}).$
SOLUTION:
By combining the fractions, we can write the function as a quotient. Since the least common denominator is ${x}^{2}\text{tan}\;x,$ we have

$\frac{1}{{x}^{2}}-\frac{1}{\text{tan}\;x}=\frac{(\text{tan}\;x)-{x}^{2}}{{x}^{2}\text{tan}\;x}.$  {eq:fs-id1165043281316}

As $x\to {0}^{+},$ the numerator $\text{tan}\;x-{x}^{2}\to 0$ and the denominator ${x}^{2}\text{tan}\;x\to 0.$ Therefore, we can apply L’Hôpital’s rule. Taking the derivatives of the numerator and the denominator, we have

$\lim_{x\to {0}^{+}}\frac{(\text{tan}\;x)-{x}^{2}}{{x}^{2}\text{tan}\;x}=\lim_{x\to {0}^{+}}\frac{({\text{sec}}^{2}x)-2x}{{x}^{2}{\text{sec}}^{2}x+2x\;\text{tan}\;x}.$  {eq:fs-id1165042708221}

As $x\to {0}^{+},$ $({\text{sec}}^{2}x)-2x\to 1$ and ${x}^{2}{\text{sec}}^{2}x+2x\;\text{tan}\;x\to 0.$ Since the denominator is positive as $x$ approaches zero from the right, we conclude that

$\lim_{x\to {0}^{+}}\frac{({\text{sec}}^{2}x)-2x}{{x}^{2}{\text{sec}}^{2}x+2x\;\text{tan}\;x}=\infty .$  {eq:fs-id1165042710940}

Therefore,

$\lim_{x\to {0}^{+}}(\frac{1}{{x}^{2}}-\frac{1}{\text{tan}\;x})=\infty .$  {eq:fs-id1165043396307}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043348552} type= 
PROBLEM:
Evaluate $\lim_{x\to {0}^{+}}(\frac{1}{x}-\frac{1}{\text{sin}\;x}).$
SOLUTION:
$0$
COMMENTARY: Hint
Rewrite the difference of fractions as a single fraction.
:::
:::
Another type of indeterminate form that arises when evaluating limits involves exponents. The expressions ${0}^{0},$ ${\infty}^{0},$ and ${1}^{\infty}$ are all indeterminate forms. On their own, these expressions are meaningless because we cannot actually evaluate these expressions as we would evaluate an expression involving real numbers. Rather, these expressions represent forms that arise when finding limits. Now we examine how L’Hôpital’s rule can be used to evaluate limits involving these indeterminate forms.
Since L’Hôpital’s rule applies to quotients, we use the natural logarithm function and its properties to reduce a problem evaluating a limit involving exponents to a related problem involving a limit of a quotient. For example, suppose we want to evaluate $\lim_{x\to a}f{(x)}^{g(x)}$ and we arrive at the indeterminate form ${\infty}^{0}.$ (The indeterminate forms ${0}^{0}$ and ${1}^{\infty}$ can be handled similarly.) We proceed as follows. Let

$y=f{(x)}^{g(x)}.$  {eq:fs-id1165042709633}

Then,

$\text{ln}\;y=\text{ln}(f{(x)}^{g(x)})=g(x)\text{ln}(f(x)).$  {eq:fs-id1165043250966}

Therefore,

$\lim_{x\to a}[\text{ln}(y)]=\lim_{x\to a}[g(x)\text{ln}(f(x))].$  {eq:fs-id1165042640891}

Since $\lim_{x\to a}f(x)=\infty ,$ we know that $\lim_{x\to a}\text{ln}(f(x))=\infty .$ Therefore, $\lim_{x\to a}g(x)\text{ln}(f(x))$ is of the indeterminate form $0\cdot \infty ,$ and we can use the techniques discussed earlier to rewrite the expression $g(x)\text{ln}(f(x))$ in a form so that we can apply L’Hôpital’s rule. Suppose $\lim_{x\to a}g(x)\text{ln}(f(x))=L,$ where $L$ may be $\infty$ or $\text{−}\infty .$ Then

$\lim_{x\to a}[\text{ln}(y)]=L.$  {eq:fs-id1165042638509}

Since the natural logarithm function is continuous, we conclude that

$\text{ln}(\lim_{x\to a}y)=L,$  {eq:fs-id1165042638554}

which gives us

$\lim_{x\to a}y=\lim_{x\to a}f{(x)}^{g(x)}={e}^{L}.$  {eq:fs-id1165042708326}

:::example {ex:fs-id1165043390815} Indeterminate Form of Type ${\infty}^{0}$

:::exercise {fs-id1165043390817} type= 
PROBLEM:
Evaluate $\lim_{x\to \infty}{x}^{1\text{/}x}.$
SOLUTION:
Let $y={x}^{1\text{/}x}.$ Then,

$\text{ln}y=\text{ln}({x}^{1\text{/}x})=\frac{1}{x}\;\text{ln}\;x=\frac{\text{ln}\;x}{x}.$  {eq:fs-id1165043281565}

We need to evaluate $\lim_{x\to \infty}\frac{\text{ln}\;x}{x}.$ Applying L’Hôpital’s rule, we obtain

$\lim_{x\to \infty}\text{ln}\;y=\lim_{x\to \infty}\frac{\text{ln}\;x}{x}=\lim_{x\to \infty}\frac{1\text{/}x}{1}=0.$  {eq:fs-id1165043281645}

Therefore, $\lim_{x\to \infty}\text{ln}\;y=0.$ Since the natural logarithm function is continuous, we conclude that

$\text{ln}(\lim_{x\to \infty}y)=0,$  {eq:fs-id1165043427351}

which leads to

$\lim_{x\to \infty}y={e}^{ln(y)}=\text{lim}{e}^{0}=1.\text{(All limits}x\ge \infty \text{.)}$  {eq:fs-id1165043427390}

Hence,

$\lim_{x\to \infty}{x}^{1\text{/}x}=1.$  {eq:fs-id1165042407323}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042407365} type= 
PROBLEM:
Evaluate $\lim_{x\to \infty}{x}^{1\text{/}\text{ln}(x)}.$
SOLUTION:
$e$
COMMENTARY: Hint
Let $y={x}^{1\text{/}\text{ln}(x)}$ and apply the natural logarithm to both sides of the equation.
:::
:::

:::example {ex:fs-id1165043108292} Indeterminate Form of Type ${0}^{0}$

:::exercise {fs-id1165043108295} type= 
PROBLEM:
Evaluate $\lim_{x\to {0}^{+}}{x}^{\text{sin}\;x}.$
SOLUTION:
Let

$y={x}^{\text{sin}\;x}.$  {eq:fs-id1165042657759}

Therefore,

$\text{ln}\;y=\text{ln}({x}^{\text{sin}\;x})=\text{sin}\;x\;\text{ln}\;x.$  {eq:fs-id1165042657783}

We now evaluate $\lim_{x\to {0}^{+}}\text{sin}\;x\;\text{ln}\;x.$ Since $\lim_{x\to {0}^{+}}\text{sin}\;x=0$ and $\lim_{x\to {0}^{+}}\text{ln}\;x=\text{−}\infty ,$ we have the indeterminate form $0\cdot \infty .$ To apply L’Hôpital’s rule, we need to rewrite $\text{sin}\;x\;\text{ln}\;x$ as a fraction. We could write

$\text{sin}\;x\;\text{ln}\;x=\frac{\text{sin}\;x}{1\text{/}\text{ln}\;x}$  {eq:fs-id1165043173832}

or

$\text{sin}\;x\;\text{ln}\;x=\frac{\text{ln}\;x}{1\text{/}\text{sin}\;x}=\frac{\text{ln}\;x}{\text{csc}\;x}.$  {eq:fs-id1165043173868}

Let’s consider the first option. In this case, applying L’Hôpital’s rule, we would obtain

$\lim_{x\to {0}^{+}}\text{sin}\;x\;\text{ln}\;x=\lim_{x\to {0}^{+}}\frac{\text{sin}\;x}{1\text{/}\text{ln}\;x}=\lim_{x\to {0}^{+}}\frac{\text{cos}\;x}{−1\text{/}(x{(\text{ln}\;x)}^{2})}=\lim_{x\to {0}^{+}}(\text{−}x{(\text{ln}\;x)}^{2}\text{cos}\;x).$  {eq:fs-id1165042364494}

Unfortunately, we not only have another expression involving the indeterminate form $0\cdot \infty ,$ but the new limit is even more complicated to evaluate than the one with which we started. Instead, we try the second option. By writing

$\text{sin}\;x\;\text{ln}\;x=\frac{\text{ln}\;x}{1\text{/}\text{sin}\;x}=\frac{\text{ln}\;x}{\text{csc}\;x},$  {eq:fs-id1165043131555}

and applying L’Hôpital’s rule, we obtain

$\lim_{x\to {0}^{+}}\text{sin}\;x\;\text{ln}\;x=\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{\text{csc}\;x}=\lim_{x\to {0}^{+}}\frac{1\text{/}x}{\text{−}\text{csc}\;x\;\text{cot}\;x}=\lim_{x\to {0}^{+}}\frac{−1}{x\;\text{csc}\;x\;\text{cot}\;x}.$  {eq:fs-id1165043131609}

Using the fact that $\text{csc}\;x=\frac{1}{\text{sin}\;x}$ and $\text{cot}\;x=\frac{\text{cos}\;x}{\text{sin}\;x},$ we can rewrite the expression on the right-hand side as

$\lim_{x\to {0}^{+}}\frac{\text{−}{\text{sin}}^{2}x}{x\;\text{cos}\;x}=\lim_{x\to {0}^{+}}[\frac{\text{sin}\;x}{x}\cdot (\text{−}\text{tan}\;x)]=(\lim_{x\to {0}^{+}}\frac{\text{sin}\;x}{x})\cdot (\lim_{x\to {0}^{+}}(\text{−}\text{tan}\;x))=1\cdot 0=0.$  {eq:fs-id1165043251999}

We conclude that $\lim_{x\to {0}^{+}}\text{ln}\;y=0.$ Therefore, $\text{ln}(\lim_{x\to {0}^{+}}y)=0$ and we have

$\lim_{x\to {0}^{+}}y=\lim_{x\to {0}^{+}}{x}^{\text{sin}\;x}={e}^{0}=1.$  {eq:fs-id1165042327527}

Hence,

$\lim_{x\to {0}^{+}}{x}^{\text{sin}\;x}=1.$  {eq:fs-id1165042327595}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042660257} type= 
PROBLEM:
Evaluate $\lim_{x\to {0}^{+}}{x}^{x}.$
SOLUTION:
$1$
COMMENTARY: Hint
Let $y={x}^{x}$ and take the natural logarithm of both sides of the equation.
:::
:::

## Growth Rates of Functions
Suppose the functions $f$ and $g$ both approach infinity as $x\to \infty .$ Although the values of both functions become arbitrarily large as the values of $x$ become sufficiently large, sometimes one function is growing more quickly than the other. For example, $f(x)={x}^{2}$ and $g(x)={x}^{3}$ both approach infinity as $x\to \infty .$ However, as shown in the following table, the values of ${x}^{3}$ are growing much faster than the values of ${x}^{2}.$

> TABLE {tab:fs-id1165042700402} cols=5 class=column-header
> title: Comparing the Growth Rates of ${x}^{2}$ and ${x}^{3}$
> summary: This table has three rows and five columns. The first column is a header column, and it reads from top to bottom x, f(x) = x2, and g(x) = x3. To the right of the header, the first row reads 10, 100, 1000, and 10,000. The second row reads 100, 10,000, 1,000,000, and 100,000,000. The third row reads 1000, 1,000,000, 1,000,000,000, and 1,000,000,000,000.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1000$ | $10,000$ |
| **$f(x)={x}^{2}$** | $100$ | $10,000$ | $1,000,000$ | $100,000,000$ |
| **$g(x)={x}^{3}$** | $1000$ | $1,000,000$ | $1,000,000,000$ | $1,000,000,000,000$ |

In fact,

$\lim_{x\to \infty}\frac{{x}^{3}}{{x}^{2}}=\lim_{x\to \infty}x=\infty .\;\text{or, equivalently,}\;\lim_{x\to \infty}\frac{{x}^{2}}{{x}^{3}}=\lim_{x\to \infty}\frac{1}{x}=0.$  {eq:fs-id1165043219189}

As a result, we say ${x}^{3}$ is growing more rapidly than ${x}^{2}$ as $x\to \infty .$ On the other hand, for $f(x)={x}^{2}$ and $g(x)=3{x}^{2}+4x+1,$ although the values of $g(x)$ are always greater than the values of $f(x)$ for $x>0,$ each value of $g(x)$ is roughly three times the corresponding value of $f(x)$ as $x\to \infty ,$ as shown in the following table. In fact,

$\lim_{x\to \infty}\frac{{x}^{2}}{3{x}^{2}+4x+1}=\frac{1}{3}.$  {eq:fs-id1165042461121}

> TABLE {tab:fs-id1165042461176} cols=5 class=column-header
> title: Comparing the Growth Rates of ${x}^{2}$ and $3{x}^{2}+4x+1$
> summary: This table has three rows and five columns. The first column is a header column, and it reads from top to bottom x, f(x) = x2, and g(x) = 3x2 + 4x + 1. To the right of the header, the first row reads 10, 100, 1000, and 10,000. The second row reads 100, 10,000, 1,000,000, and 100,000,000. The third row reads 341, 30,401, 3,004,001, and 300,040,001.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1000$ | $10,000$ |
| **$f(x)={x}^{2}$** | $100$ | $10,000$ | $1,000,000$ | $100,000,000$ |
| **$g(x)=3{x}^{2}+4x+1$** | $341$ | $30,401$ | $3,004,001$ | $300,040,001$ |

In this case, we say that ${x}^{2}$ and $3{x}^{2}+4x+1$ are growing at the same rate as $x\to \infty .$
More generally, suppose $f$ and $g$ are two functions that approach infinity as $x\to \infty .$ We say $g$ grows more rapidly than $f$ as $x\to \infty$ if

$\lim_{x\to \infty}\frac{g(x)}{f(x)}=\infty ;\;\text{or, equivalently,}\;\lim_{x\to \infty}\frac{f(x)}{g(x)}=0.$  {eq:fs-id1165042659507}

On the other hand, if there exists a constant $M≠0$ such that

$\lim_{x\to \infty}\frac{f(x)}{g(x)}=M,$  {eq:fs-id1165043422384}

we say $f$ and $g$ grow at the same rate as $x\to \infty .$
Next we see how to use L’Hôpital’s rule to compare the growth rates of power, exponential, and logarithmic functions.

:::example {ex:fs-id1165043422462} Comparing the Growth Rates of $\text{ln}(x),$ ${x}^{2},$ and ${e}^{x}$

:::exercise {fs-id1165043422464} type= 
PROBLEM:
For each of the following pairs of functions, use L’Hôpital’s rule to evaluate $\lim_{x\to \infty}(\frac{f(x)}{g(x)}).$
a. $f(x)={x}^{2}\;\text{and}\;g(x)={e}^{x}$
b. $f(x)=\text{ln}(x)\;\text{and}\;g(x)={x}^{2}$
SOLUTION:
a. Since $\lim_{x\to \infty}{x}^{2}=\infty$ and $\lim_{x\to \infty}{e}^{x}=\infty ,$ we can use L’Hôpital’s rule to evaluate $\lim_{x\to \infty}[\frac{{x}^{2}}{{e}^{x}}].$ We obtain

$\lim_{x\to \infty}\frac{{x}^{2}}{{e}^{x}}=\lim_{x\to \infty}\frac{2x}{{e}^{x}}.$  {eq:fs-id1165042631803}

Since $\lim_{x\to \infty}2x=\infty$ and $\lim_{x\to \infty}{e}^{x}=\infty ,$ we can apply L’Hôpital’s rule again. Since

$\lim_{x\to \infty}\frac{2x}{{e}^{x}}=\lim_{x\to \infty}\frac{2}{{e}^{x}}=0,$  {eq:fs-id1165042631923}

we conclude that

$\lim_{x\to \infty}\frac{{x}^{2}}{{e}^{x}}=0.$  {eq:fs-id1165042418106}

Therefore, ${e}^{x}$ grows more rapidly than ${x}^{2}$ as $x\to \infty$ (See [ref:CNX_Calc_Figure_04_08_003] and [ref:fs-id1165042418200]).

> FIGURE {fig:CNX_Calc_Figure_04_08_003} src=../../media/CNX_Calc_Figure_04_08_005.jpg
> alt: The functions g(x) = ex and f(x) = x2 are graphed. It is obvious that g(x) increases much more quickly than f(x).
> caption: An exponential function grows at a faster rate than a power function.

> TABLE {tab:fs-id1165042418200} cols=5 class=column-header
> title: Growth rates of a power function and an exponential function.
> summary: This table has three rows and five columns. The first column is a header column, and it reads from top to bottom x, x2, and ex. To the right of the header, the first row reads 5, 10, 15, and 20. The second row reads 25, 100, 225, and 400. The third row reads 148, 22,026, 3,269,017, and 485,165,195.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $5$ | $10$ | $15$ | $20$ |
| **${x}^{2}$** | $25$ | $100$ | $225$ | $400$ |
| **${e}^{x}$** | $148$ | $22,026$ | $3,269,017$ | $485,165,195$ |

b. Since $\lim_{x\to \infty}\text{ln}\;x=\infty$ and $\lim_{x\to \infty}{x}^{2}=\infty ,$ we can use L’Hôpital’s rule to evaluate $\lim_{x\to \infty}\frac{\text{ln}\;x}{{x}^{2}}.$ We obtain

$\lim_{x\to \infty}\frac{\text{ln}\;x}{{x}^{2}}=\lim_{x\to \infty}\frac{1\text{/}x}{2x}=\lim_{x\to \infty}\frac{1}{2{x}^{2}}=0.$  {eq:fs-id1165042471196}

Thus, ${x}^{2}$ grows more rapidly than $\text{ln}\;x$ as $x\to \infty$ (see [ref:CNX_Calc_Figure_04_08_004] and [ref:fs-id1165042471354]).

> FIGURE {fig:CNX_Calc_Figure_04_08_004} src=../../media/CNX_Calc_Figure_04_08_006.jpg
> alt: The functions g(x) = x2 and f(x) = ln(x) are graphed. It is obvious that g(x) increases much more quickly than f(x).
> caption: A power function grows at a faster rate than a logarithmic function.

> TABLE {tab:fs-id1165042471354} cols=5 class=column-header
> title: Growth rates of a power function and a logarithmic function
> summary: This table has three rows and five columns. The first column is a header column, and it reads from top to bottom x, ln(x), and x2. To the right of the header, the first row reads 10, 100, 1000, and 10,000. The second row reads 2.303, 4.605, 6.908, and 9.210. The third row reads 100, 10,000, 1,000,000, and 100,000,000.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1000$ | $10,000$ |
| **$\text{ln}(x)$** | $2.303$ | $4.605$ | $6.908$ | $9.210$ |
| **${x}^{2}$** | $100$ | $10,000$ | $1,000,000$ | $100,000,000$ |

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042463719} type= 
PROBLEM:
Compare the growth rates of ${x}^{100}$ and ${2}^{x}.$
SOLUTION:
The function ${2}^{x}$ grows faster than ${x}^{100}.$
COMMENTARY: Hint
Apply L’Hôpital’s rule to ${x}^{100}\text{/}{2}^{x}$
:::
:::
Using the same ideas as in [ref:fs-id1165043422462]a. it is not difficult to show that ${e}^{x}$ grows more rapidly than ${x}^{p}$ for any $p>0.$ In [ref:CNX_Calc_Figure_04_08_005] and [ref:fs-id1165043327297], we compare ${e}^{x}$ with ${x}^{3}$ and ${x}^{4}$ as $x\to \infty .$

> FIGURE {fig:CNX_Calc_Figure_04_08_005} src=../../media/CNX_Calc_Figure_04_08_001.jpg
> alt: This figure has two figures marked a and b. In figure a, the functions y = ex and y = x3 are graphed. It is obvious that ex increases more quickly than x3. In figure b, the functions y = ex and y = x4 are graphed. It is obvious that ex increases much more quickly than x4, but the point at which that happens is further to the right than it was for x3.
> caption: The exponential function ${e}^{x}$ grows faster than ${x}^{p}$ for any $p>0.$ (a) A comparison of ${e}^{x}$ with ${x}^{3}.$ (b) A comparison of ${e}^{x}$ with ${x}^{4}.$

> TABLE {tab:fs-id1165043327297} cols=5 class=column-header
> title: An exponential function grows at a faster rate than any power function
> summary: This table has four rows and five columns. The first column is a header column, and it reads from top to bottom x, x3, x4, and ex. To the right of the header, the first row reads 5, 10, 15, and 20. The second row reads 125, 1000, 3375, and 8000. The third row reads 625, 10,000, 50,625, and 160,000. The fourth row reads 148, 22,026, 3,269,017, and 485,165,195.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $5$ | $10$ | $15$ | $20$ |
| **${x}^{3}$** | $125$ | $1000$ | $3375$ | $8000$ |
| **${x}^{4}$** | $625$ | $10,000$ | $50,625$ | $160,000$ |
| **${e}^{x}$** | $148$ | $22,026$ | $3,269,017$ | $485,165,195$ |

Similarly, it is not difficult to show that ${x}^{p}$ grows more rapidly than $\text{ln}\;x$ for any $p>0.$ In [ref:CNX_Calc_Figure_04_08_006] and [ref:fs-id1165042460279], we compare $\text{ln}\;x$ with $\sqrt[3]{x}$ and $\sqrt{x}.$

> FIGURE {fig:CNX_Calc_Figure_04_08_006} src=../../media/CNX_Calc_Figure_04_08_007.jpg
> alt: This figure shows y = the square root of x, y = the cube root of x, and y = ln(x). It is apparent that y = ln(x) grows more slowly than either of these functions.
> caption: The function $y=\text{ln}(x)$ grows more slowly than ${x}^{p}$ for any $p>0$ as $x\to \infty .$

> TABLE {tab:fs-id1165042460279} cols=5 class=column-header
> title: A logarithmic function grows at a slower rate than any root function
> summary: This table has four rows and five columns. The first column is a header column, and it reads from top to bottom x, ln(x), the cube root of x, and the square root of x. To the right of the header, the first row reads 10, 100, 1000, and 10,000. The second row reads 2.303, 4.605, 6.908, and 9.210. The third row reads 2.154, 4.642, 10, and 21.544. The fourth row reads 3.162, 10, 31.623, and 100.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1000$ | $10,000$ |
| **$\text{ln}(x)$** | $2.303$ | $4.605$ | $6.908$ | $9.210$ |
| **$\sqrt[3]{x}$** | $2.154$ | $4.642$ | $10$ | $21.544$ |
| **$\sqrt{x}$** | $3.162$ | $10$ | $31.623$ | $100$ |

## Key Concepts {section:key-concepts}
- L’Hôpital’s rule can be used to evaluate the limit of a quotient when the indeterminate form $\frac{0}{0}$ or $\infty \text{/}\infty$ arises.
- L’Hôpital’s rule can also be applied to other indeterminate forms if they can be rewritten in terms of a limit involving a quotient that has the indeterminate form $\frac{0}{0}$ or $\infty \text{/}\infty .$
- The exponential function ${e}^{x}$ grows faster than any power function ${x}^{p},$ $p>0.$
- The logarithmic function $\text{ln}\;x$ grows more slowly than any power function ${x}^{p},$ $p>0.$

##  {section:section-exercises}
For the following exercises, evaluate the limit.

:::exercise {fs-id1165043217921} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to \infty}\frac{{e}^{x}}{x}.$
:::

:::exercise {fs-id1165043217966} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to \infty}\frac{{e}^{x}}{{x}^{k}}.$
SOLUTION:
$\infty$
:::

:::exercise {fs-id1165043218017} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to \infty}\frac{\text{ln}\;x}{{x}^{k}}.$
:::

:::exercise {fs-id1165043218066} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to a}\frac{x-a}{{x}^{2}-{a}^{2}},\;a≠0$.
SOLUTION:
$\frac{1}{2a}$
:::

:::exercise {fs-id1165043218132} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to a}\frac{x-a}{{x}^{3}-{a}^{3}},\;a≠0$.
:::

:::exercise {fs-id1165042469654} type= 
PROBLEM:
Evaluate the limit $\lim_{x\to a}\frac{x-a}{{x}^{n}-{a}^{n}},\;a≠0$.
SOLUTION:
$\frac{1}{n{a}^{n-1}}$
:::
For the following exercises, determine whether you can apply L’Hôpital’s rule directly. Explain why or why not. Then, indicate if there is some way you can alter the limit so you can apply L’Hôpital’s rule.

:::exercise {fs-id1165042469737} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}{x}^{2}\text{ln}\;x$
:::

:::exercise {fs-id1165042469817} type= 
PROBLEM:
$\lim_{x\to \infty}{x}^{1\text{/}x}$
SOLUTION:
Cannot apply directly; use logarithms
:::

:::exercise {fs-id1165042711562} type= 
PROBLEM:
$\lim_{x\to 0}{x}^{2\text{/}x}$
:::

:::exercise {fs-id1165042711603} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{x}^{2}}{1\text{/}x}$
SOLUTION:
Cannot apply directly; rewrite as $\lim_{x\to 0}{x}^{3}$
:::

:::exercise {fs-id1165042711670} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{{e}^{x}}{x}$
:::
For the following exercises, evaluate the limits with either L’Hôpital’s rule or previously learned methods.

:::exercise {fs-id1165042711715} type= 
PROBLEM:
$\lim_{x\to 3}\frac{{x}^{2}-9}{x-3}$
SOLUTION:
$6$
:::

:::exercise {fs-id1165042711767} type= 
PROBLEM:
$\lim_{x\to 3}\frac{{x}^{2}-9}{x+3}$
:::

:::exercise {fs-id1165042499499} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{(1+x)}^{−2}-1}{x}$
SOLUTION:
$−2$
:::

:::exercise {fs-id1165042499561} type= 
PROBLEM:
$\lim_{x\to \pi \text{/}2}\frac{\text{cos}\;x}{\frac{\pi}{2}-x}$
:::

:::exercise {fs-id1165042499616} type= 
PROBLEM:
$\lim_{x\to \pi}\frac{x-\pi}{\text{sin}\;x}$
SOLUTION:
$−1$
:::

:::exercise {fs-id1165042499664} type= 
PROBLEM:
$\lim_{x\to 1}\frac{x-1}{\text{sin}\;x}$
:::

:::exercise {fs-id1165042711252} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{(1+x)}^{n}-1}{x}$
SOLUTION:
$n$
:::

:::exercise {fs-id1165042711310} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{(1+x)}^{n}-1-nx}{{x}^{2}}$
:::

:::exercise {fs-id1165042711396} type= 
PROBLEM:
$\lim_{x\to 0}\frac{\text{sin}\;x-\text{tan}\;x}{{x}^{3}}$
SOLUTION:
$-\frac{1}{2}$
:::

:::exercise {fs-id1165042711455} type= 
PROBLEM:
$\lim_{x\to 0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}$
:::

:::exercise {fs-id1165042602902} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{e}^{x}-x-1}{{x}^{2}}$
SOLUTION:
$\frac{1}{2}$
:::

:::exercise {fs-id1165042602961} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}\frac{\text{tan}\;x}{\sqrt{x}}$
:::

:::exercise {fs-id1165042603005} type= 
PROBLEM:
$\lim_{x\to 1}\frac{x-1}{\text{ln}\;x}$
SOLUTION:
$1$
:::

:::exercise {fs-id1165042603052} type= 
PROBLEM:
$\lim_{x\to 0}{(x+1)}^{1\text{/}x}$
:::

:::exercise {fs-id1165042603107} type= 
PROBLEM:
$\lim_{x\to 1}\frac{\sqrt{x}-\sqrt[3]{x}}{x-1}$
SOLUTION:
$\frac{1}{6}$
:::

:::exercise {fs-id1165042617552} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}{x}^{2x}$
:::

:::exercise {fs-id1165042617597} type= 
PROBLEM:
$\lim_{x\to \infty}x\;\text{sin}(\frac{1}{x})$
SOLUTION:
$1$
:::

:::exercise {fs-id1165042617646} type= 
PROBLEM:
$\lim_{x\to 0}\frac{\text{sin}\;x-x}{{x}^{2}}$
:::

:::exercise {fs-id1165042617696} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}x\;\text{ln}({x}^{4})$
SOLUTION:
$0$
:::

:::exercise {fs-id1165042617748} type= 
PROBLEM:
$\lim_{x\to \infty}(x-{e}^{x})$
:::

:::exercise {fs-id1165042707732} type= 
PROBLEM:
$\lim_{x\to \infty}{x}^{2}{e}^{\text{−}x}$
SOLUTION:
$0$
:::

:::exercise {fs-id1165042707778} type= 
PROBLEM:
$\lim_{x\to 0}\frac{{3}^{x}-{2}^{x}}{x}$
:::

:::exercise {fs-id1165042707843} type= 
PROBLEM:
$\lim_{x\to 0}\frac{1+1\text{/}x}{1-1\text{/}x}$
SOLUTION:
$−1$
:::

:::exercise {fs-id1165042707901} type= 
PROBLEM:
$\lim_{x\to \pi \text{/}4}(1-\text{tan}\;x)\text{cot}\;x$
:::

:::exercise {fs-id1165042707959} type= 
PROBLEM:
$\lim_{x\to \infty}x{e}^{1\text{/}x}$
SOLUTION:
$\infty$
:::

:::exercise {fs-id1165042525338} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}{x}^{1\text{/}\text{cos}\;x}$
:::

:::exercise {fs-id1165042525384} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}{x}^{1\text{/}x}$
SOLUTION:
$0$
:::

:::exercise {fs-id1165042525428} type= 
PROBLEM:
$\lim_{x\to {0}^{-}}{(1-\frac{1}{x})}^{x}$
:::

:::exercise {fs-id1165042525481} type= 
PROBLEM:
$\lim_{x\to \infty}{(1-\frac{1}{x})}^{x}$
SOLUTION:
$\frac{1}{e}$
:::
For the following exercises, use a calculator to graph the function and estimate the value of the limit, then use L’Hôpital’s rule to find the limit directly.

:::exercise {fs-id1165042525544} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}\frac{{e}^{x}-1}{x}$
:::

:::exercise {fs-id1165043382933} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}x\;\text{sin}(\frac{1}{x})$
SOLUTION:
$0$
:::

:::exercise {fs-id1165043382987} type= 
PROBLEM:
**[T]** $\lim_{x\to 1}\frac{x-1}{1-\text{cos}(\pi x)}$
:::

:::exercise {fs-id1165043383052} type= 
PROBLEM:
**[T]** $\lim_{x\to 1}\frac{{e}^{(x-1)}-1}{x-1}$
SOLUTION:
$1$
:::

:::exercise {fs-id1165043383121} type= 
PROBLEM:
**[T]** $\lim_{x\to 1}\frac{{(x-1)}^{2}}{\text{ln}\;x}$
:::

:::exercise {fs-id1165042710174} type= 
PROBLEM:
**[T]** $\lim_{x\to \pi}\frac{1+\text{cos}\;x}{\text{sin}\;x}$
SOLUTION:
$0$
:::

:::exercise {fs-id1165042710228} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}(\text{csc}\;x-\frac{1}{x})$
:::

:::exercise {fs-id1165042710284} type= 
PROBLEM:
**[T]** $\lim_{x\to {0}^{+}}\text{tan}({x}^{x})$
SOLUTION:
$\text{tan}(1)$
:::

:::exercise {fs-id1165042710348} type= 
PROBLEM:
**[T]** $\lim_{x\to {0}^{+}}\frac{\text{ln}\;x}{\text{sin}\;x}$
:::

:::exercise {fs-id1165042710404} type= 
PROBLEM:
**[T]** $\lim_{x\to 0}\frac{{e}^{x}-{e}^{\text{−}x}}{x}$
SOLUTION:
$2$
:::

## Glossary
- {def} **indeterminate forms**: when evaluating a limit, the forms $\frac{0}{0},$ $\infty \text{/}\infty ,$ $0\cdot \infty ,$ $\infty -\infty ,$ ${0}^{0},$ ${\infty}^{0},$ and ${1}^{\infty}$ are considered indeterminate because further analysis is required to determine whether the limit exists and, if so, what its value is
- {def} **L’Hôpital’s rule**: if $f$ and $g$ are differentiable functions over an interval $a,$ except possibly at $a,$ and $\lim_{x\to a}f(x)=0=\lim_{x\to a}g(x)$ or $\lim_{x\to a}f(x)$ and $\lim_{x\to a}g(x)$ are infinite, then $\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{{f}^{'}(x)}{{g}^{'}(x)},$ assuming the limit on the right exists or is $\infty$ or $\text{−}\infty$

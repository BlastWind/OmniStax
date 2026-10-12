# The Limit Laws

## Learning Objectives {section:learning-objectives}
- Recognize the basic limit laws.
- Use the limit laws to evaluate the limit of a function.
- Evaluate the limit of a function by factoring.
- Use the limit laws to evaluate the limit of a polynomial or rational function.
- Evaluate the limit of a function by factoring or by using conjugates.
- Evaluate the limit of a function by using the squeeze theorem.

In the previous section, we evaluated limits by looking at graphs or by constructing a table of values. In this section, we establish laws for calculating limits and learn how to apply these laws. In the Student Project at the end of this section, you have the opportunity to apply these limit laws to derive the formula for the area of a circle by adapting a method devised by the Greek mathematician Archimedes. We begin by restating two useful limit results from the previous section. These two results, together with the limit laws, serve as a foundation for calculating many limits.

## Evaluating Limits with the Limit Laws
The first two limit laws were stated in [ref:fs-id1170572086324](module:m53491) and we repeat them here. These basic results, together with the other limit laws, allow us to evaluate limits of many algebraic functions.

:::note [theorem] Basic Limit Results
For any real number *a* and any constant *c*,
1. 
$$ \lim_{x\to a}x=a $$  {eq:fs-id1170572624896}

2. 
$$ \lim_{x\to a}c=c $$  {eq:fs-id1170572209025}

:::

:::example {ex:fs-id1170572111463} Evaluating a Basic Limit

:::exercise {fs-id1170572151257} type= 
PROBLEM:
Evaluate each of the following limits using [ref:fs-id1170572451153].
a. $\lim_{x\to 2}x$
b. $\lim_{x\to 2}5$
SOLUTION:
a. The limit of *x* as *x* approaches *a* is *a*: $\lim_{x\to 2}x=2.$
b. The limit of a constant is that constant: $\lim_{x\to 2}5=5.$
:::
:::
We now take a look at the {term:limit laws}, the individual properties of limits. The proofs that these laws hold are omitted here.

:::note [theorem] Limit Laws
Let $f(x)$ and $g(x)$ be defined for all $x≠a$ over some open interval containing *a*. Assume that *L* and *M* are real numbers such that $\lim_{x\to a}f(x)=L$ and $\lim_{x\to a}g(x)=M.$ Let *c* be a constant. Then, each of the following statements holds:
{term:Sum law for limits}: $\lim_{x\to a}(f(x)+g(x))=\lim_{x\to a}f(x)+\lim_{x\to a}g(x)=L+M$
{term:Difference law for limits}: $\lim_{x\to a}(f(x)-g(x))=\lim_{x\to a}f(x)-\lim_{x\to a}g(x)=L-M$
{term:Constant multiple law for limits}: $\lim_{x\to a}cf(x)=c\cdot \lim_{x\to a}f(x)=cL$
{term:Product law for limits}: $\lim_{x\to a}(f(x)\cdot g(x))=\lim_{x\to a}f(x)\cdot \lim_{x\to a}g(x)=L\cdot M$
{term:Quotient law for limits}: $\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}=\frac{L}{M}$ for $M≠0$
{term:Power law for limits}: $\lim_{x\to a}{(f(x))}^{n}={(\lim_{x\to a}f(x))}^{n}={L}^{n}$ for every positive integer *n*.
{term:Root law for limits}: $\lim_{x\to a}\sqrt[n]{f(x)}=\sqrt[n]{\lim_{x\to a}f(x)}=\sqrt[n]{L}$ for all *L* if *n* is odd and for $L\ge 0$ if *n* is even and $f(x)\ge 0$.
:::
We now practice applying these limit laws to evaluate a limit.

:::example {ex:fs-id1170572451489} Evaluating a Limit Using Limit Laws

:::exercise {fs-id1170572472249} type= 
PROBLEM:
Use the limit laws to evaluate $\lim_{x\to −3}(4x+2).$
SOLUTION:
Let’s apply the limit laws one step at a time to be sure we understand how they work. We need to keep in mind the requirement that, at each application of a limit law, the new limits must exist for the limit law to be applied.
$\begin{array}{lllll}\lim_{x\to −3}(4x+2) & =\lim_{x\to −3}4x+\lim_{x\to −3}2 & & & \text{Apply the sum law.} \\ & =4\cdot \lim_{x\to −3}x+\lim_{x\to −3}2 & & & \text{Apply the constant multiple law.} \\ & =4\cdot (−3)+2=−10. & & & \text{Apply the basic limit results and simplify.}\end{array}$
:::
:::

:::example {ex:fs-id1170572509954} Using Limit Laws Repeatedly

:::exercise {fs-id1170572551359} type= 
PROBLEM:
Use the limit laws to evaluate $\lim_{x\to 2}\frac{2{x}^{2}-3x+1}{{x}^{3}+4}.$
SOLUTION:
To find this limit, we need to apply the limit laws several times. Again, we need to keep in mind that as we rewrite the limit in terms of other limits, each new limit must exist for the limit law to be applied.
$\begin{array}{lllll} \\ \\ \lim_{x\to 2}\frac{2{x}^{2}-3x+1}{{x}^{3}+4} & =\frac{\lim_{x\to 2}(2{x}^{2}-3x+1)}{\lim_{x\to 2}({x}^{3}+4)} & & & \text{Apply the quotient law, making sure that.}\;{(2)}^{3}+4≠0 \\ & =\frac{2\cdot \lim_{x\to 2}{x}^{2}-3\cdot \lim_{x\to 2}x+\lim_{x\to 2}1}{\lim_{x\to 2}{x}^{3}+\lim_{x\to 2}4} & & & \text{Apply the sum law and constant multiple law.} \\ & =\frac{2\cdot {(\lim_{x\to 2}x)}^{2}-3\cdot \lim_{x\to 2}x+\lim_{x\to 2}1}{{(\lim_{x\to 2}x)}^{3}+\lim_{x\to 2}4} & & & \text{Apply the power law.} \\ & =\frac{2(4)-3(2)+1}{{(2)}^{3}+4}=\frac{1}{4}. & & & \text{Apply the basic limit laws and simplify.}\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571655298} type= 
PROBLEM:
Use the limit laws to evaluate $\lim_{x\to 6}(2x-1)\sqrt{x+4}.$ In each step, indicate the limit law applied.
SOLUTION:
$11\sqrt{10}$
COMMENTARY: Hint
Begin by applying the product law.
:::
:::

## Limits of Polynomial and Rational Functions
By now you have probably noticed that, in each of the previous examples, it has been the case that $\lim_{x\to a}f(x)=f(a).$ This is not always true, but it does hold for all polynomials for any choice of *a* and for all rational functions at all values of *a* for which the rational function is defined.

:::note [theorem] Limits of Polynomial and Rational Functions
Let $p(x)$ and $q(x)$ be polynomial functions. Let *a* be a real number. Then,

$\lim_{x\to a}p(x)=p(a)$  {eq:fs-id1170572347161}

$\lim_{x\to a}\frac{p(x)}{q(x)}=\frac{p(a)}{q(a)}\;\text{when}\;q(a)≠0.$  {eq:fs-id1170571656084}

:::
To see that this theorem holds, consider the polynomial $p(x)={c}_{n}{x}^{n}+{c}_{n-1}{x}^{n-1}+⋯+{c}_{1}x+{c}_{0}.$ By applying the sum, constant multiple, and power laws, we end up with

$\begin{array}{rl}\lim_{x\to a}p(x) & =\lim_{x\to a}({c}_{n}{x}^{n}+{c}_{n-1}{x}^{n-1}+⋯+{c}_{1}x+{c}_{0}) \\ & ={c}_{n}{(\lim_{x\to a}x)}^{n}+{c}_{n-1}{(\lim_{x\to a}x)}^{n-1}+⋯+{c}_{1}(\lim_{x\to a}x)+\lim_{x\to a}{c}_{0} \\ & ={c}_{n}{a}^{n}+{c}_{n-1}{a}^{n-1}+⋯+{c}_{1}a+{c}_{0} \\ & =p(a).\end{array}$  {eq:fs-id1170571648575}

It now follows from the quotient law that if $p(x)$ and $q(x)$ are polynomials for which $q(a)≠0,$ then

$\lim_{x\to a}\frac{p(x)}{q(x)}=\frac{p(a)}{q(a)}.$  {eq:fs-id1170571672249}

[ref:fs-id1170572305829] applies this result.

:::example {ex:fs-id1170572305829} Evaluating a Limit of a Rational Function

:::exercise {fs-id1170572305832} type= 
PROBLEM:
Evaluate the $\lim_{x\to 3}\frac{2{x}^{2}-3x+1}{5x+4}.$
SOLUTION:
Since 3 is in the domain of the rational function $f(x)=\frac{2{x}^{2}-3x+1}{5x+4},$ we can calculate the limit by substituting 3 for *x* into the function. Thus,

$\lim_{x\to 3}\frac{2{x}^{2}-3x+1}{5x+4}=\frac{10}{19}.$  {eq:fs-id1170571686198}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571675273} type= 
PROBLEM:
Evaluate $\lim_{x\to −2}(3{x}^{3}-2x+7).$
SOLUTION:
−13;
COMMENTARY: Hint
Use [ref:fs-id1170572557796]
:::
:::

## Additional Limit Evaluation Techniques
As we have seen, we may evaluate easily the limits of polynomials and limits of some (but not all) rational functions by direct substitution. However, as we saw in the introductory section on limits, it is certainly possible for $\lim_{x\to a}f(x)$ to exist when $f(a)$ is undefined. The following observation allows us to evaluate many limits of this type:
If for all $x≠a,f(x)=g(x)$ over some open interval containing *a*, then $\lim_{x\to a}f(x)=\lim_{x\to a}g(x).$
To understand this idea better, consider the limit $\lim_{x\to 1}\frac{{x}^{2}-1}{x-1}.$
The function

$\begin{array}{rl}f(x) & =\frac{{x}^{2}-1}{x-1} \\ & =\frac{(x-1)(x+1)}{x-1}\end{array}$  {eq:fs-id1170572405011}

and the function $g(x)=x+1$ are identical for all values of $x≠1.$ The graphs of these two functions are shown in [ref:CNX_Calc_Figure_02_03_001].

> FIGURE {fig:CNX_Calc_Figure_02_03_001} src=../../media/CNX_Calc_Figure_02_03_001.jpg
> alt: Two graphs side by side. The first is a graph of g(x) = x + 1, a linear function with y intercept at (0,1) and x intercept at (-1,0). The second is a graph of f(x) = (x^2 – 1) / (x – 1). This graph is identical to the first for all x not equal to 1, as there is an open circle at (1,2) in the second graph.
> caption: The graphs of $f(x)$ and $g(x)$ are identical for all $x≠1.$ Their limits at 1 are equal.

We see that

$\begin{array}{rl}\lim_{x\to 1}\frac{{x}^{2}-1}{x-1} & =\lim_{x\to 1}\frac{(x-1)(x+1)}{x-1} \\ & =\lim_{x\to 1}(x+1) \\ & =2.\end{array}$  {eq:fs-id1170571650073}

The limit has the form $\lim_{x\to a}\frac{f(x)}{g(x)},$ where $\lim_{x\to a}f(x)=0$ and $\lim_{x\to a}g(x)=0.$ (In this case, we say that $f(x)\text{/}g(x)$ has the indeterminate form $0\text{/}0\text{.)}$ The following Problem-Solving Strategy provides a general outline for evaluating limits of this type.

:::note [problem-solving] Calculating a Limit When $f(x)\text{/}g(x)$ has the Indeterminate Form 0/0
1. First, we need to make sure that our function has the appropriate form and cannot be evaluated immediately using the limit laws.
2. We then need to find a function that is equal to $h(x)=f(x)\text{/}g(x)$ for all $x≠a$ over some interval containing *a*. To do this, we may need to try one or more of the following steps:

a. If $f(x)$ and $g(x)$ are polynomials, we should factor each function and cancel out any common factors.
b. If the numerator or denominator contains a difference involving a square root, we should try multiplying the numerator and denominator by the conjugate of the expression involving the square root.
c. If $f(x)\text{/}g(x)$ is a complex fraction, we begin by simplifying it.

3. Last, we apply the limit laws.
:::
The next examples demonstrate the use of this Problem-Solving Strategy. [ref:fs-id1170571669713] illustrates the factor-and-cancel technique; [ref:fs-id1170572307613] shows multiplying by a conjugate. In [ref:fs-id1170571612021], we look at simplifying a complex fraction.

:::example {ex:fs-id1170571669713} Evaluating a Limit by Factoring and Canceling

:::exercise {fs-id1170571669715} type= 
PROBLEM:
Evaluate $\lim_{x\to 3}\frac{{x}^{2}-3x}{2{x}^{2}-5x-3}.$
SOLUTION:
**Step 1.** The function $f(x)=\frac{{x}^{2}-3x}{2{x}^{2}-5x-3}$ is undefined for $x=3.$ In fact, if we substitute 3 into the function we get $0\text{/}0,$ which is indeterminate. Factoring and canceling is a good strategy:

$\lim_{x\to 3}\frac{{x}^{2}-3x}{2{x}^{2}-5x-3}=\lim_{x\to 3}\frac{x(x-3)}{(x-3)(2x+1)}$  {eq:fs-id1170572560619}

**Step 2.** For all $x≠3,\frac{{x}^{2}-3x}{2{x}^{2}-5x-3}=\frac{x}{2x+1}.$ Therefore,

$\lim_{x\to 3}\frac{x(x-3)}{(x-3)(2x+1)}=\lim_{x\to 3}\frac{x}{2x+1}.$  {eq:fs-id1170572548248}

**Step 3.** Evaluate using the limit laws:

$\lim_{x\to 3}\frac{x}{2x+1}=\frac{3}{7}.$  {eq:fs-id1170572347056}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571598002} type= 
PROBLEM:
Evaluate $\lim_{x\to −3}\frac{{x}^{2}+4x+3}{{x}^{2}-9}.$
SOLUTION:
$\frac{1}{3}$
COMMENTARY: Hint
Follow the steps in the Problem-Solving Strategy and [ref:fs-id1170571669713].
:::
:::

:::example {ex:fs-id1170572307613} Evaluating a Limit by Multiplying by a Conjugate

:::exercise {fs-id1170572307615} type= 
PROBLEM:
Evaluate $\lim_{x\to −1}\frac{\sqrt{x+2}-1}{x+1}.$
SOLUTION:
**Step 1.** $\frac{\sqrt{x+2}-1}{x+1}$ has the form $0\text{/}0$ at −1. Let’s begin by multiplying by $\sqrt{x+2}+1,$ the conjugate of $\sqrt{x+2}-1,$ on the numerator and denominator:

$\lim_{x\to −1}\frac{\sqrt{x+2}-1}{x+1}=\lim_{x\to −1}\frac{\sqrt{x+2}-1}{x+1}\cdot \frac{\sqrt{x+2}+1}{\sqrt{x+2}+1}.$  {eq:fs-id1170571648338}

**Step 2.** We then multiply out the numerator. We don’t multiply out the denominator because we are hoping that the $(x+1)$ in the denominator cancels out in the end:

$=\lim_{x\to −1}\frac{x+1}{(x+1)(\sqrt{x+2}+1)}.$  {eq:fs-id1170572306418}

**Step 3.** Then we cancel:

$=\lim_{x\to −1}\frac{1}{\sqrt{x+2}+1}.$  {eq:fs-id1170571562574}

**Step 4.** Last, we apply the limit laws:

$\lim_{x\to −1}\frac{1}{\sqrt{x+2}+1}=\frac{1}{2}.$  {eq:fs-id1170571562624}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571611952} type= 
PROBLEM:
Evaluate $\lim_{x\to 5}\frac{\sqrt{x-1}-2}{x-5}.$
SOLUTION:
$\frac{1}{4}$
COMMENTARY: Hint
Follow the steps in the Problem-Solving Strategy and [ref:fs-id1170572307613].
:::
:::

:::example {ex:fs-id1170571612021} Evaluating a Limit by Simplifying a Complex Fraction

:::exercise {fs-id1170571612023} type= 
PROBLEM:
Evaluate $\lim_{x\to 1}\frac{\frac{1}{x+1}-\frac{1}{2}}{x-1}.$
SOLUTION:
**Step 1.** $\frac{\frac{1}{x+1}-\frac{1}{2}}{x-1}$ has the form $0\text{/}0$ at 1. We simplify the algebraic fraction by multiplying by $2(x+1)\text{/}2(x+1):$

$\lim_{x\to 1}\frac{\frac{1}{x+1}-\frac{1}{2}}{x-1}=\lim_{x\to 1}\frac{\frac{1}{x+1}-\frac{1}{2}}{x-1}\cdot \frac{2(x+1)}{2(x+1)}.$  {eq:fs-id1170571681146}

**Step 2.** Next, we multiply through the numerators. Do not multiply the denominators because we want to be able to cancel the factor $(x-1)\text{:}$

$=\lim_{x\to 1}\frac{2-(x+1)}{2(x-1)(x+1)}.$  {eq:fs-id1170571622080}

**Step 3.** Then, we simplify the numerator:

$=\lim_{x\to 1}\frac{-x+1}{2(x-1)(x+1)}.$  {eq:fs-id1170571622157}

**Step 4.** Now we factor out −1 from the numerator:

$=\lim_{x\to 1}\frac{-(x-1)}{2(x-1)(x+1)}.$  {eq:fs-id1170571650209}

**Step 5.** Then, we cancel the common factors of $(x-1)\text{:}$

$=\lim_{x\to 1}\frac{−1}{2(x+1)}.$  {eq:fs-id1170571650301}

**Step 6.** Last, we evaluate using the limit laws:

$\lim_{x\to 1}\frac{−1}{2(x+1)}=-\frac{1}{4}.$  {eq:fs-id1170572394298}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572394356} type= 
PROBLEM:
Evaluate $\lim_{x\to −3}\frac{\frac{1}{x+2}+1}{x+3}.$
SOLUTION:
−1;
COMMENTARY: Hint
Follow the steps in the Problem-Solving Strategy and [ref:fs-id1170571612021].
:::
:::
[ref:fs-id1170571648139] does not fall neatly into any of the patterns established in the previous examples. However, with a little creativity, we can still use these same techniques.

:::example {ex:fs-id1170571648139} Evaluating a Limit When the Limit Laws Do Not Apply

:::exercise {fs-id1170571648141} type= 
PROBLEM:
Evaluate $\lim_{x\to 0}(\frac{1}{x}+\frac{5}{x(x-5)}).$
SOLUTION:
Both $1\text{/}x$ and $5\text{/}x(x-5)$ fail to have a limit at zero. Since neither of the two functions has a limit at zero, we cannot apply the sum law for limits; we must use a different strategy. In this case, we find the limit by performing addition and then applying one of our previous strategies. Observe that

$\;\begin{array}{rl}\frac{1}{x}+\frac{5}{x(x-5)} & =\frac{x-5+5}{x(x-5)} \\ & =\frac{x}{x(x-5)}.\end{array}$  {eq:fs-id1170571648246}

Thus,

$\begin{array}{rl}\lim_{x\to 0}(\frac{1}{x}+\frac{5}{x(x-5)}) & =\lim_{x\to 0}\frac{x}{x(x-5)} \\ & =\lim_{x\to 0}\frac{1}{x-5} \\ & =-\frac{1}{5}.\end{array}$  {eq:fs-id1170571649587}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571681425} type= 
PROBLEM:
Evaluate $\lim_{x\to 3}(\frac{1}{x-3}-\frac{4}{{x}^{2}-2x-3}).$
SOLUTION:
$\frac{1}{4}$
COMMENTARY: Hint
Use the same technique as [ref:fs-id1170571648139]. Don’t forget to factor ${x}^{2}-2x-3$ before getting a common denominator.
:::
:::
Let’s now revisit one-sided limits. Simple modifications in the limit laws allow us to apply them to one-sided limits. For example, to apply the limit laws to a limit of the form $\lim_{x\to {a}^{-}}h(x),$ we require the function $h(x)$ to be defined over an open interval of the form $(b,a);$ for a limit of the form $\lim_{x\to {a}^{+}}h(x),$ we require the function $h(x)$ to be defined over an open interval of the form $(a,c).$ [ref:fs-id1170571679268] illustrates this point.

:::example {ex:fs-id1170571679268} Evaluating a One-Sided Limit Using the Limit Laws

:::exercise {fs-id1170571679270} type= 
PROBLEM:
Evaluate each of the following limits, if possible.
a. $\lim_{x\to {3}^{-}}\sqrt{x-3}$
b. $\lim_{x\to {3}^{+}}\sqrt{x-3}$
SOLUTION:
[ref:CNX_Calc_Figure_02_03_002] illustrates the function $f(x)=\sqrt{x-3}$ and aids in our understanding of these limits.

> FIGURE {fig:CNX_Calc_Figure_02_03_002} src=../../media/CNX_Calc_Figure_02_03_002.jpg
> alt: A graph of the function f(x) = sqrt(x-3). Visually, the function looks like the top half of a parabola opening to the right with vertex at (3,0).
> caption: The graph shows the function $f(x)=\sqrt{x-3}.$

a. The function $f(x)=\sqrt{x-3}$ is defined over the interval $[3,\text{+}\infty ).$ Since this function is not defined to the left of 3, we cannot apply the limit laws to compute $\lim_{x\to {3}^{-}}\sqrt{x-3}.$ In fact, since $f(x)=\sqrt{x-3}$ is undefined to the left of 3, $\lim_{x\to {3}^{-}}\sqrt{x-3}$ does not exist.
b. Since $f(x)=\sqrt{x-3}$ is defined to the right of 3, the limit laws do apply to $\lim_{x\to {3}^{+}}\sqrt{x-3}.$ By applying these limit laws we obtain $\lim_{x\to {3}^{+}}\sqrt{x-3}=0.$
:::
:::
In [ref:fs-id1170571558882] we look at one-sided limits of a piecewise-defined function and use these limits to draw a conclusion about a two-sided limit of the same function.

:::example {ex:fs-id1170571558882} Evaluating a Two-Sided Limit Using the Limit Laws

:::exercise {fs-id1170571558884} type= 
PROBLEM:
For $f(x)=\{\begin{array}{ll}4x-3 & \text{if}\;x<2 \\ {(x-3)}^{2} & \text{if}\;x\ge 2\end{array},$ evaluate each of the following limits:
a. $\lim_{x\to {2}^{-}}f(x)$
b. $\lim_{x\to {2}^{+}}f(x)$
c. $\lim_{x\to 2}f(x)$
SOLUTION:
[ref:CNX_Calc_Figure_02_03_003] illustrates the function $f(x)$ and aids in our understanding of these limits.

> FIGURE {fig:CNX_Calc_Figure_02_03_003} src=../../media/CNX_Calc_Figure_02_03_003.jpg
> alt: The graph of a piecewise function with two segments. For x<2, the function is linear with the equation 4x-3. There is an open circle at (2,5). The second segment is a parabola and exists for x>=2, with the equation (x-3)^2. There is a closed circle at (2,1). The vertex of the parabola is at (3,0).
> caption: This graph shows a function $f(x).$

a. Since $f(x)=4x-3$ for all *x* in $(\text{−}\infty ,2),$ replace $f(x)$ in the limit with $4x-3$ and apply the limit laws:

$\lim_{x\to {2}^{-}}f(x)=\lim_{x\to {2}^{-}}(4x-3)=5.$  {eq:fs-id1170571573954}

b. Since $f(x)={(x-3)}^{2}$ for all *x* in $(2,\text{+}\infty ),$ replace $f(x)$ in the limit with ${(x-3)}^{2}$ and apply the limit laws:

$\lim_{x\to {2}^{+}}f(x)=\lim_{x\to {2}^{+}}{(x-3)}^{2}=1.$  {eq:fs-id1170571644376}

c. Since $\lim_{x\to {2}^{-}}f(x)=5$ and $\lim_{x\to {2}^{+}}f(x)=1,$ we conclude that $\lim_{x\to 2}f(x)$ does not exist.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572235173} type= 
PROBLEM:
Graph $f(x)=\{\begin{array}{l}-x-2\;\text{if}\;x<\text{−}1 \\ 2\;\text{if}\;x=−1 \\ {x}^{3}\;\text{if}\;x>\text{−}1\end{array}$ and evaluate $\lim_{x\to {−1}^{-}}f(x).$
SOLUTION:

> IMAGE {img:fs-id1170572559760} src=../../media/CNX_Calc_Figure_02_03_004.jpg
> alt: The graph of a piecewise function with three segments. The first is a linear function, -x-2, for x<-1. The x intercept is at (-2,0), and there is an open circle at (-1,-1). The next segment is simply the point (-1, 2). The third segment is the function x^3 for x > -1, which crossed the x axis and y axis at the origin.

$\lim_{x\to {−1}^{-}}f(x)=−1$
COMMENTARY: Hint
Use the method in [ref:fs-id1170571558882] to evaluate the limit.
:::
:::
We now turn our attention to evaluating a limit of the form $\lim_{x\to a}\frac{f(x)}{g(x)},$ where $\lim_{x\to a}f(x)=K,$ where $K≠0$ and $\lim_{x\to a}g(x)=0.$ That is, $f(x)\text{/}g(x)$ has the form $K\text{/}0,K≠0$ at *a*.

:::example {ex:fs-id1170571611196} Evaluating a Limit of the Form $K\text{/}0,K≠0$ Using the Limit Laws

:::exercise {fs-id1170571611198} type= 
PROBLEM:
Evaluate $\lim_{x\to {2}^{-}}\frac{x-3}{{x}^{2}-2x}.$
SOLUTION:
**Step 1.** After substituting in $x=2,$ we see that this limit has the form $−1\text{/}0.$ That is, as *x* approaches 2 from the left, the numerator approaches −1; and the denominator approaches 0. Consequently, the magnitude of $\frac{x-3}{x(x-2)}$ becomes infinite. To get a better idea of what the limit is, we need to factor the denominator:

$\lim_{x\to {2}^{-}}\frac{x-3}{{x}^{2}-2x}=\lim_{x\to {2}^{-}}\frac{x-3}{x(x-2)}.$  {eq:fs-id1170572420265}

**Step 2.** Since $x-2$ is the only part of the denominator that is zero when 2 is substituted, we then separate $1\text{/}(x-2)$ from the rest of the function:

$=\lim_{x\to {2}^{-}}\frac{x-3}{x}\cdot \frac{1}{x-2}.$  {eq:fs-id1170571612873}

**Step 3.** $\lim_{x\to {2}^{-}}\frac{x-3}{x}=-\frac{1}{2}$ and $\lim_{x\to {2}^{-}}\frac{1}{x-2}=\text{−}\infty .$ Therefore, the product of $(x-3)\text{/}x$ and $1\text{/}(x-2)$ has a limit of $\text{+∞:}$

$\lim_{x\to {2}^{-}}\frac{x-3}{{x}^{2}-2x}=\text{+}\infty .$  {eq:fs-id1170571650460}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571650521} type= 
PROBLEM:
Evaluate $\lim_{x\to 1}\frac{x+2}{{(x-1)}^{2}}.$
SOLUTION:
+∞
COMMENTARY: Hint
Use the methods from [ref:fs-id1170571611196].
:::
:::

## The Squeeze Theorem
The techniques we have developed thus far work very well for algebraic functions, but we are still unable to evaluate limits of very basic trigonometric functions. The next theorem, called the {term:squeeze theorem}, proves very useful for establishing basic trigonometric limits. This theorem allows us to calculate limits by “squeezing” a function, with a limit at a point *a* that is unknown, between two functions having a common known limit at *a*. [ref:CNX_Calc_Figure_02_03_005] illustrates this idea.

> FIGURE {fig:CNX_Calc_Figure_02_03_005} src=../../media/CNX_Calc_Figure_02_03_005.jpg
> alt: A graph of three functions over a small interval. All three functions curve. Over this interval, the function g(x) is trapped between the functions h(x), which gives greater y values for the same x values, and f(x), which gives smaller y values for the same x values. The functions all approach the same limit when x=a.
> caption: The Squeeze Theorem applies when $f(x)\le g(x)\le h(x)$ and $\lim_{x\to a}f(x)=\lim_{x\to a}h(x).$

:::note [theorem] The Squeeze Theorem
Let $f(x),g(x),$ and $h(x)$ be defined for all $x≠a$ over an open interval containing *a*. If

$f(x)\le g(x)\le h(x)$  {eq:fs-id1170571603742}

for all $x≠a$ in an open interval containing *a* and

$\lim_{x\to a}f(x)=L=\lim_{x\to a}h(x)$  {eq:fs-id1170571603801}

where *L* is a real number, then $\lim_{x\to a}g(x)=L.$
:::

:::example {ex:fs-id1170571654228} Applying the Squeeze Theorem

:::exercise {fs-id1170571654230} type= 
PROBLEM:
Apply the squeeze theorem to evaluate $\lim_{x\to 0}x\;\text{cos}\;x.$
SOLUTION:
Because $−1\le \text{cos}\;x\le 1$ for all *x*, we have $-|x|\le x\;\text{cos}\;x\le |x|$. Since $\lim_{x\to 0}(-|x|)=0=\lim_{x\to 0}|x|,$ from the squeeze theorem, we obtain $\lim_{x\to 0}x\;\text{cos}\;x=0.$ The graphs of $f(x)=-|x|,g(x)=x\;\text{cos}\;x,$ and $h(x)=|x|$ are shown in [ref:CNX_Calc_Figure_02_03_006].

> FIGURE {fig:CNX_Calc_Figure_02_03_006} src=../../media/CNX_Calc_Figure_02_03_006.jpg
> alt: The graph of three functions: h(x) = x, f(x) = -x, and g(x) = xcos(x). The first, h(x) = x, is a linear function with slope of 1 going through the origin. The second, f(x), is also a linear function with slope of −1; going through the origin. The third, g(x) = xcos(x), curves between the two and goes through the origin. It opens upward for x>0 and downward for x>0.
> caption: The graphs of $f(x),g(x),$ and $h(x)$ are shown around the point $x=0.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572633051} type= 
PROBLEM:
Use the squeeze theorem to evaluate $\lim_{x\to 0}{x}^{2}\text{sin}\frac{1}{x}.$
SOLUTION:
0
COMMENTARY: Hint
Use the fact that $-{x}^{2}\le {x}^{2}\text{sin}\;(1\text{/}x)\le {x}^{2}$ to help you find two functions such that ${x}^{2}\text{sin}\;(1\text{/}x)$ is squeezed between them.
:::
:::
We now use the squeeze theorem to tackle several very important limits. Although this discussion is somewhat lengthy, these limits prove invaluable for the development of the material in both the next section and the next chapter. The first of these limits is $\lim_{\theta \to 0}\text{sin}\;\theta .$ Consider the unit circle shown in [ref:CNX_Calc_Figure_02_03_007]. In the figure, we see that $\text{sin}\;\theta$ is the *y*-coordinate on the unit circle and it corresponds to the line segment shown in blue. The radian measure of angle *θ* is the length of the arc it subtends on the unit circle. Therefore, we see that for $0<\theta <\frac{\pi}{2},0<\text{sin}\;\theta <\theta .$

> FIGURE {fig:CNX_Calc_Figure_02_03_007} src=../../media/CNX_Calc_Figure_02_03_007.jpg
> alt: A diagram of the unit circle in the x,y plane – it is a circle with radius 1 and center at the origin. A specific point (cos(theta), sin(theta)) is labeled in quadrant 1 on the edge of the circle. This point is one vertex of a right triangle inside the circle, with other vertices at the origin and (cos(theta), 0).  As such, the lengths of the sides are cos(theta) for the base and sin(theta) for the height, where theta is the angle created by the hypotenuse and base. The radian measure of angle theta is the length of the arc it subtends on the unit circle. The diagram shows that for 0 < theta < pi/2,  0 < sin(theta) < theta.
> caption: The sine function is shown as a line on the unit circle.

Because $\lim_{\theta \to {0}^{+}}0=0$ and $\lim_{\theta \to {0}^{+}}\theta =0,$ by using the squeeze theorem we conclude that

$\lim_{\theta \to {0}^{+}}\text{sin}\;\theta =0.$  {eq:fs-id1170571545491}

To see that $\lim_{\theta \to {0}^{-}}\text{sin}\;\theta =0$ as well, observe that for $-\frac{\pi}{2}<\theta <0,0<\text{−}\theta <\frac{\pi}{2}$ and hence, $0<\text{sin}\;(-\theta )<\text{−}\theta .$ Consequently, $0<-\text{sin}\;\theta <\text{−}\theta .$ It follows that $0>\text{sin}\;\theta >\theta .$ An application of the squeeze theorem produces the desired limit. Thus, since $\lim_{\theta \to {0}^{+}}\text{sin}\;\theta =0$ and $\lim_{\theta \to {0}^{-}}\text{sin}\;\theta =0,$

$$ \lim_{\theta \to 0}\;\text{sin}\;\theta =0. $$  {eq:fs-id1170572642377}

Next, using the identity $\text{cos}\;\theta =\sqrt{1-{\text{sin}}^{2}\theta}$ for $-\frac{\pi}{2}<\theta <\frac{\pi}{2},$ we see that

$$ \lim_{\theta \to 0}\;\text{cos}\;\theta =\lim_{\theta \to 0}\sqrt{1-{\text{sin}}^{2}\theta}=1. $$  {eq:fs-id1170572642462}

We now take a look at a limit that plays an important role in later chapters—namely, $\lim_{\theta \to 0}\frac{\text{sin}\;\theta}{\theta}.$ To evaluate this limit, we use the unit circle in [ref:CNX_Calc_Figure_02_03_008]. Notice that this figure adds one additional triangle to [ref:CNX_Calc_Figure_02_03_008]. We see that the length of the side opposite angle *θ* in this new triangle is $\text{tan}\;\theta .$ Thus, we see that for $0<\theta <\frac{\pi}{2},\text{sin}\;\theta <\theta <\text{tan}\;\theta .$

> FIGURE {fig:CNX_Calc_Figure_02_03_008} src=../../media/CNX_Calc_Figure_02_03_008.jpg
> alt: The same diagram as the previous one. However, the triangle is expanded. The base is now from the origin to (1,0). The height goes from (1,0) to (1, tan(theta)). The hypotenuse goes from the origin to (1, tan(theta)). As such, the height is now tan(theta). It shows that for 0 < theta < pi/2, sin(theta) < theta < tan(theta).
> caption: The sine and tangent functions are shown as lines on the unit circle.

By dividing by $\text{sin}\;\theta$ in all parts of the inequality, we obtain

$1<\frac{\theta}{\text{sin}\;\theta}<\frac{1}{\text{cos}\;\theta}.$  {eq:fs-id1170571649320}

Equivalently, we have

$1>\frac{\text{sin}\;\theta}{\theta}>\text{cos}\;\theta .$  {eq:fs-id1170571649362}

Since $\lim_{\theta \to {0}^{+}}1=1=\lim_{\theta \to {0}^{+}}\text{cos}\;\theta ,$ we conclude that $\lim_{\theta \to {0}^{+}}\frac{\text{sin}\;\theta}{\theta}=1.$ By applying a manipulation similar to that used in demonstrating that $\lim_{\theta \to {0}^{-}}\text{sin}\;\theta =0,$ we can show that $\lim_{\theta \to {0}^{-}}\frac{\text{sin}\;\theta}{\theta}=1.$ Thus,

$$ \lim_{\theta \to 0}\frac{\text{sin}\;\theta}{\theta}=1. $$  {eq:fs-id1170571611730}

In [ref:fs-id1170572243714] we use this limit to establish $\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta}=0.$ This limit also proves useful in later chapters.

:::example {ex:fs-id1170572243714} Evaluating an Important Trigonometric Limit

:::exercise {fs-id1170572243716} type= 
PROBLEM:
Evaluate $\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta}.$
SOLUTION:
In the first step, we multiply by the conjugate so that we can use a trigonometric identity to convert the cosine in the numerator to a sine:

$\begin{array}{rl}\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta} & =\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta}\cdot \frac{1+\text{cos}\;\theta}{1+\text{cos}\;\theta} \\ & =\lim_{\theta \to 0}\frac{1-{\text{cos}}^{2}\theta}{\theta (1+\text{cos}\;\theta )} \\ & =\lim_{\theta \to 0}\frac{{\text{sin}}^{2}\theta}{\theta (1+\text{cos}\;\theta )} \\ & =\lim_{\theta \to 0}\frac{\text{sin}\;\theta}{\theta}\cdot \frac{\text{sin}\;\theta}{1+\text{cos}\;\theta} \\ & =1\cdot \frac{0}{2}=0.\end{array}$  {eq:fs-id1170572243769}

Therefore,

$$ \lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta}=0. $$  {eq:fs-id1170571652244}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571610220} type= 
PROBLEM:
Evaluate $\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\text{sin}\;\theta}.$
SOLUTION:
0
COMMENTARY: Hint
Multiply numerator and denominator by $1+\text{cos}\;\theta .$
:::
:::

:::note [project] Deriving the Formula for the Area of a Circle
Some of the geometric formulas we take for granted today were first derived by methods that anticipate some of the methods of calculus. The Greek mathematician {index:Archimedes} (ca. 287−212; BCE) was particularly inventive, using polygons inscribed within circles to approximate the area of the circle as the number of sides of the polygon increased. He never came up with the idea of a limit, but we can use this idea to see what his geometric constructions could have predicted about the limit.
We can estimate the area of a circle by computing the area of an inscribed regular polygon. Think of the regular polygon as being made up of *n* triangles. By taking the limit as the vertex angle of these triangles goes to zero, you can obtain the area of the circle. To see this, carry out the following steps:
1. Express the height *h* and the base *b* of the isosceles triangle in [ref:CNX_Calc_Figure_02_03_009] in terms of $\theta$ and *r*.

> FIGURE {fig:CNX_Calc_Figure_02_03_009} src=../../media/CNX_Calc_Figure_02_03_009.jpg
> alt: A diagram of a circle with an inscribed polygon – namely, an octagon. An isosceles triangle is drawn with one of the sides of the octagon as the base and center of the circle/octagon as the top vertex. The height h goes from the center of the base b to the center, and each of the legs is also radii r of the circle. The angle created by the height h and one of the legs r is labeled as theta.
> caption: 

2. Using the expressions that you obtained in step 1, express the area of the isosceles triangle in terms of *θ* and *r*.
(Substitute $(1\;\text{/}\;2)\;\text{sin}\;\theta$ for $\text{sin}(\theta \;\text{/}\;2)\;\text{cos}(\theta \;\text{/}\;2)$ in your expression.)
3. If an *n*-sided regular polygon is inscribed in a circle of radius *r*, find a relationship between *θ* and *n*. Solve this for *n*. Keep in mind there are 2*π* radians in a circle. (Use radians, not degrees.)
4. Find an expression for the area of the *n*-sided polygon in terms of *r* and *θ*.
5. To find a formula for the area of the circle, find the limit of the expression in step 4 as *θ* goes to zero. (*Hint:* $\lim_{\theta \to 0}\frac{(\text{sin}\;\theta )}{\theta}=1\text{).}$
The technique of estimating areas of regions by using polygons is revisited in [Introduction to Integration](module:m53623).
:::

## Key Concepts {section:key-concepts}
- The limit laws allow us to evaluate limits of functions without having to go through step-by-step processes each time.
- For polynomials and rational functions, $\lim_{x\to a}f(x)=f(a).$
- You can evaluate the limit of a function by factoring and canceling, by multiplying by a conjugate, or by simplifying a complex fraction.
- The squeeze theorem allows you to find the limit of a function if the function is always greater than one function and less than another function with limits that are known.

## Key Equations {section:key-equations}

> TABLE {tab:eip-485} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Basic Limit Results** | $\lim_{x\to a}x=a\;\lim_{x\to a}c=c$ |
| **Important Limits** | $\lim_{\theta \to 0}\text{sin}\;\theta =0$<br> $\lim_{\theta \to 0}\text{cos}\;\theta =1$<br> $\lim_{\theta \to 0}\frac{\text{sin}\;\theta}{\theta}=1$<br> $\lim_{\theta \to 0}\frac{1-\text{cos}\;\theta}{\theta}=0$ |

##  {section:section-exercises}
In the following exercises, use the limit laws to evaluate each limit. Justify each step by indicating the appropriate limit law(s).

:::exercise {fs-id1170572597924} type= 
PROBLEM:
$\lim_{x\to 0}(4{x}^{2}-2x+3)$
SOLUTION:
Use constant multiple law and difference law: $\lim_{x\to 0}(4{x}^{2}-2x+3)=4\lim_{x\to 0}{x}^{2}-2\lim_{x\to 0}x+\lim_{x\to 0}3=3$
:::

:::exercise {fs-id1170572347613} type= 
PROBLEM:
$\lim_{x\to 1}\frac{{x}^{3}+3{x}^{2}+5}{4-7x}$
:::

:::exercise {fs-id1170571574688} type= 
PROBLEM:
$\lim_{x\to −2}\sqrt{{x}^{2}-6x+3}$
SOLUTION:
Use root law: $\lim_{x\to −2}\sqrt{{x}^{2}-6x+3}=\sqrt{\lim_{x\to −2}({x}^{2}-6x+3)}=\sqrt{19}$
:::

:::exercise {fs-id1170572229064} type= 
PROBLEM:
$\lim_{x\to −1}{(9x+1)}^{2}$
:::
In the following exercises, use direct substitution to evaluate each limit.

:::exercise {fs-id1170572229204} type= 
PROBLEM:
$\lim_{x\to 7}{x}^{2}$
SOLUTION:
49
:::

:::exercise {fs-id1170571654827} type= 
PROBLEM:
$\lim_{x\to −2}(4{x}^{2}-1)$
:::

:::exercise {fs-id1170571654878} type= 
PROBLEM:
$\lim_{x\to 0}\frac{1}{1+\text{sin}\;x}$
SOLUTION:
1
:::

:::exercise {fs-id1170571654921} type= 
PROBLEM:
$\lim_{x\to 2}{e}^{2x-{x}^{2}}$
:::

:::exercise {fs-id1170571654968} type= 
PROBLEM:
$\lim_{x\to 1}\frac{2-7x}{x+6}$
SOLUTION:
$-\frac{5}{7}$
:::

:::exercise {fs-id1170572482590} type= 
PROBLEM:
$\lim_{x\to 3}\text{ln}{e}^{3x}$
:::
In the following exercises, use direct substitution to show that each limit leads to the indeterminate form $0\text{/}0.$ Then, evaluate the limit.

:::exercise {fs-id1170572482649} type= 
PROBLEM:
$\lim_{x\to 4}\frac{{x}^{2}-16}{x-4}$
SOLUTION:
$\lim_{x\to 4}\frac{{x}^{2}-16}{x-4}=\frac{16-16}{4-4}=\frac{0}{0};$ then, $\lim_{x\to 4}\frac{{x}^{2}-16}{x-4}=\lim_{x\to 4}\frac{(x+4)(x-4)}{x-4}=8$
:::

:::exercise {fs-id1170572403294} type= 
PROBLEM:
$\lim_{x\to 2}\frac{x-2}{{x}^{2}-2x}$
:::

:::exercise {fs-id1170571586166} type= 
PROBLEM:
$\lim_{x\to 6}\frac{3x-18}{2x-12}$
SOLUTION:
$\lim_{x\to 6}\frac{3x-18}{2x-12}=\frac{18-18}{12-12}=\frac{0}{0};$ then, $\lim_{x\to 6}\frac{3x-18}{2x-12}=\lim_{x\to 6}\frac{3(x-6)}{2(x-6)}=\frac{3}{2}$
:::

:::exercise {fs-id1170572503561} type= 
PROBLEM:
$\lim_{h\to 0}\frac{{(1+h)}^{2}-1}{h}$
:::

:::exercise {fs-id1170572499899} type= 
PROBLEM:
$\lim_{t\to 9}\frac{t-9}{\sqrt{t}-3}$
SOLUTION:
$\lim_{x\to 9}\frac{t-9}{\sqrt{t}-3}=\frac{9-9}{3-3}=\frac{0}{0};$ then, $\lim_{t\to 9}\frac{t-9}{\sqrt{t}-3}=\lim_{t\to 9}\frac{t-9}{\sqrt{t}-3}\frac{\sqrt{t}+3}{\sqrt{t}+3}=\lim_{t\to 9}(\sqrt{t}+3)=6$
:::

:::exercise {fs-id1170571655854} type= 
PROBLEM:
$\lim_{h\to 0}\frac{\frac{1}{a+h}-\frac{1}{a}}{h},$ where *a* is a non-zero real-valued constant
:::

:::exercise {fs-id1170571657390} type= 
PROBLEM:
$\lim_{\theta \to \pi}\frac{\text{sin}\;\theta}{\text{tan}\;\theta}$
SOLUTION:
$\lim_{\theta \to \pi}\frac{\text{sin}\;\theta}{\text{tan}\;\theta}=\frac{\text{sin}\;\pi}{\text{tan}\;\pi}=\frac{0}{0};$ then, $\lim_{\theta \to \pi}\frac{\text{sin}\;\theta}{\text{tan}\;\theta}=\lim_{\theta \to \pi}\frac{\text{sin}\;\theta}{\frac{\text{sin}\;\theta}{\text{cos}\;\theta}}=\lim_{\theta \to \pi}\text{cos}\;\theta =−1$
:::

:::exercise {fs-id1170571599916} type= 
PROBLEM:
$\lim_{x\to 1}\frac{{x}^{3}-1}{{x}^{2}-1}$
:::

:::exercise {fs-id1170572551466} type= 
PROBLEM:
$\lim_{x\to 1\text{/}2}\frac{2{x}^{2}+3x-2}{2x-1}$
SOLUTION:
$\lim_{x\to 1\text{/}2}\frac{2{x}^{2}+3x-2}{2x-1}=\frac{\frac{1}{2}+\frac{3}{2}-2}{1-1}=\frac{0}{0};$ then, $\lim_{x\to 1\text{/}2}\frac{2{x}^{2}+3x-2}{2x-1}=\lim_{x\to 1\text{/}2}\frac{(2x-1)(x+2)}{2x-1}=\frac{5}{2}$
:::

:::exercise {fs-id1170571599675} type= 
PROBLEM:
$\lim_{x\to −3}\frac{\sqrt{x+4}-1}{x+3}$
:::
In the following exercises, use direct substitution to obtain an undefined expression. Then, use the method of [ref:fs-id1170571611196] to simplify the function to help determine the limit.

:::exercise {fs-id1170572174658} type= 
PROBLEM:
$\lim_{x\to {−2}^{-}}\frac{2{x}^{2}+7x-4}{{x}^{2}+x-2}$
SOLUTION:
−∞
:::

:::exercise {fs-id1170572174729} type= 
PROBLEM:
$\lim_{x\to {−2}^{+}}\frac{2{x}^{2}+7x-4}{{x}^{2}+x-2}$
:::

:::exercise {fs-id1170572174801} type= 
PROBLEM:
$\lim_{x\to {1}^{-}}\frac{2{x}^{2}+7x-4}{{x}^{2}+x-2}$
SOLUTION:
−∞
:::

:::exercise {fs-id1170571610811} type= 
PROBLEM:
$\lim_{x\to {1}^{+}}\frac{2{x}^{2}+7x-4}{{x}^{2}+x-2}$
:::
In the following exercises, assume that $\lim_{x\to 6}f(x)=4,\lim_{x\to 6}g(x)=9,$ and $\lim_{x\to 6}h(x)=6.$ Use these three facts and the limit laws to evaluate each limit.

:::exercise {fs-id1170571610978} type= 
PROBLEM:
$\lim_{x\to 6}2f(x)g(x)$
SOLUTION:
$\lim_{x\to 6}2f(x)g(x)=2\lim_{x\to 6}f(x)\lim_{x\to 6}g(x)=72$
:::

:::exercise {fs-id1170571669881} type= 
PROBLEM:
$\lim_{x\to 6}\frac{g(x)-1}{f(x)}$
:::

:::exercise {fs-id1170572480473} type= 
PROBLEM:
$\lim_{x\to 6}(f(x)+\frac{1}{3}g(x))$
SOLUTION:
$\lim_{x\to 6}(f(x)+\frac{1}{3}g(x))=\lim_{x\to 6}f(x)+\frac{1}{3}\lim_{x\to 6}g(x)=7$
:::

:::exercise {fs-id1170572243205} type= 
PROBLEM:
$\lim_{x\to 6}\frac{{(h(x))}^{3}}{2}$
:::

:::exercise {fs-id1170572243346} type= 
PROBLEM:
$\lim_{x\to 6}\sqrt{g(x)-f(x)}$
SOLUTION:
$\lim_{x\to 6}\sqrt{g(x)-f(x)}=\sqrt{\lim_{x\to 6}g(x)-\lim_{x\to 6}f(x)}=\sqrt{5}$
:::

:::exercise {fs-id1170572217470} type= 
PROBLEM:
$\lim_{x\to 6}x\cdot h(x)$
:::

:::exercise {fs-id1170572549028} type= 
PROBLEM:
$\lim_{x\to 6}[(x+1)\cdot f(x)]$
SOLUTION:
$\lim_{x\to 6}[(x+1)f(x)]=(\lim_{x\to 6}(x+1))(\lim_{x\to 6}f(x))=28$
:::

:::exercise {fs-id1170571563314} type= 
PROBLEM:
$\lim_{x\to 6}(f(x)\cdot g(x)-h(x))$
:::
**[T]** In the following exercises, use a calculator to draw the graph of each piecewise-defined function and study the graph to evaluate the given limits.

:::exercise {fs-id1170572624112} type= 
PROBLEM:
$f(x)=\{\begin{array}{ll}{x}^{2}, & x\le 3 \\ x+4, & x>3\end{array}$
a. $\lim_{x\to {3}^{-}}f(x)$
b. $\lim_{x\to {3}^{+}}f(x)$
SOLUTION:

> IMAGE {img:fs-id1170572380891} src=../../media/CNX_Calc_Figure_02_03_202.jpg
> alt: The graph of a piecewise function with two segments. The first is the parabola x^2, which exists for x<=3. The vertex is at the origin, it opens upward, and there is a closed circle at the endpoint (3,9). The second segment is the line x+4, which is a linear function existing for x > 3. There is an open circle at (3, 7), and the slope is 1.

a. 9; b. 7
:::

:::exercise {fs-id1170572380907} type= 
PROBLEM:
$g(x)=\{\begin{array}{ll}{x}^{3}-1, & x\le 0 \\ 1, & x>0\end{array}$
a. $\lim_{x\to {0}^{-}}g(x)$
b. $\lim_{x\to {0}^{+}}g(x)$
:::

:::exercise {fs-id1170572381069} type= 
PROBLEM:
$h(x)=\{\begin{array}{ll}{x}^{2}-2x+1, & x<2 \\ 3-x, & x\ge 2\end{array}$
a. $\lim_{x\to {2}^{-}}h(x)$
b. $\lim_{x\to {2}^{+}}h(x)$
SOLUTION:

> IMAGE {img:fs-id1170572268051} src=../../media/CNX_Calc_Figure_02_03_204.jpg
> alt: The graph of a piecewise function with two segments. The first segment is the parabola x^2 – 2x + 1, for x < 2. It opens upward and has a vertex at (1,0). The second segment is the line 3-x for x>= 2. It has a slope of -1 and an x intercept at (3,0).

a. 1; b. 1
:::
In the following exercises, use the following graphs and the limit laws to evaluate each limit.

> IMAGE {img:fs-id1170572268078} src=../../media/CNX_Calc_Figure_02_03_201.jpg
> alt: Two graphs of piecewise functions. The upper is f(x), which has two linear segments. The first is a line with negative slope existing for x < -3. It goes toward the point (-3,0) at x= -3. The next has increasing slope and goes to the point (-3,-2) at x=-3. It exists for x > -3. Other key points are (0, 1), (-5,2), (1,2), (-7, 4), and (-9,6). The lower piecewise function has a linear segment and a curved segment. The linear segment exists for x < -3 and has decreasing slope. It goes to (-3,-2) at x=-3. The curved segment appears to be the right half of a downward opening parabola. It goes to the vertex point (-3,2) at x=-3. It crosses the y axis a little below y=-2. Other key points are (0, -7/3), (-5,0), (1,-5), (-7, 2), and (-9, 4).

:::exercise {fs-id1170572268090} type= 
PROBLEM:
$\lim_{x\to {−3}^{+}}(f(x)+g(x))$
:::

:::exercise {fs-id1170571690335} type= 
PROBLEM:
$\lim_{x\to {−3}^{-}}(f(x)-3g(x))$
SOLUTION:
$\lim_{x\to {−3}^{-}}(f(x)-3g(x))=\lim_{x\to {−3}^{-}}f(x)-3\lim_{x\to {−3}^{-}}g(x)=0+6=6$
:::

:::exercise {fs-id1170572435008} type= 
PROBLEM:
$\lim_{x\to 0}\frac{f(x)g(x)}{3}$
:::

:::exercise {fs-id1170572219518} type= 
PROBLEM:
$\lim_{x\to −5}\frac{2+g(x)}{f(x)}$
SOLUTION:
$\lim_{x\to −5}\frac{2+g(x)}{f(x)}=\frac{2+(\lim_{x\to −5}g(x))}{\lim_{x\to −5}f(x)}=\frac{2+0}{2}=1$
:::

:::exercise {fs-id1170572590096} type= 
PROBLEM:
$\lim_{x\to 1}{(f(x))}^{2}$
:::

:::exercise {fs-id1170572552593} type= 
PROBLEM:
$\lim_{x\to 1}\sqrt[3]{f(x)-g(x)}$
SOLUTION:
$\lim_{x\to 1}\sqrt[3]{f(x)-g(x)}=\sqrt[3]{\lim_{x\to 1}f(x)-\lim_{x\to 1}g(x)}=\sqrt[3]{2+5}=\sqrt[3]{7}$
:::

:::exercise {fs-id1170572128651} type= 
PROBLEM:
$\lim_{x\to −7}(x\cdot g(x))$
:::

:::exercise {fs-id1170572128832} type= 
PROBLEM:
$\lim_{x\to −9}[x\cdot f(x)+2\cdot g(x)]$
SOLUTION:
$\lim_{x\to −9}(xf(x)+2g(x))=(\lim_{x\to −9}x)(\lim_{x\to −9}f(x))+2\lim_{x\to −9}(g(x))=(−9)(6)+2(4)=−46$
:::
For the following problems, evaluate the limit using the squeeze theorem. Use a calculator to graph the functions $f(x),g(x),$ and $h(x)$ when possible.

:::exercise {fs-id1170572511282} type= 
PROBLEM:
**[T]** True or False? If $2x-1\le g(x)\le {x}^{2}-2x+3,$ then $\lim_{x\to 2}g(x)=0.$
:::

:::exercise {fs-id1170572511389} type= 
PROBLEM:
**[T]** $\lim_{\theta \to 0}{\theta}^{2}\text{cos}\;(\frac{1}{\theta})$
SOLUTION:
The limit is zero.

> IMAGE {img:fs-id1170571625949} src=../../media/CNX_Calc_Figure_02_03_206.jpg
> alt: The graph of three functions over the domain [-1,1], colored red, green, and blue as follows: red: theta^2, green: theta^2 * cos (1/theta), and blue: - (theta^2). The red and blue functions open upwards and downwards respectively as parabolas with vertices at the origin. The green function is trapped between the two.

:::

:::exercise {fs-id1170571625966} type= 
PROBLEM:
$\lim_{x\to 0}f(x),$ where $f(x)=\{\begin{array}{ll}0, & x\;\text{rational} \\ {x}^{2}, & x\;\text{irrational}\end{array}$
:::

:::exercise {fs-id1170571626094} type= 
PROBLEM:
**[T]** In physics, the magnitude of an electric field generated by a point charge at a distance *r* in vacuum is governed by Coulomb’s law: $E(r)=\frac{q}{4\pi {ε}_{0}{r}^{2}},$ where *E* represents the magnitude of the electric field, *q* is the charge of the particle, *r* is the distance between the particle and where the strength of the field is measured, and $\frac{1}{4\pi {ε}_{0}}$ is Coulomb’s constant: $8.988\;\times \;{10}^{9}\;\text{N}\cdot {\text{m}}^{2}\text{/}{\text{C}}^{2}.$
a. Use a graphing calculator to graph $E(r)$ given that the charge of the particle is $q={10}^{−10}.$
b. Evaluate $\lim_{r\to {0}^{+}}E(r).$ What is the physical meaning of this quantity? Is it physically relevant? Why are you evaluating from the right?
SOLUTION:
a.

> IMAGE {img:fs-id1170571612260} src=../../media/CNX_Calc_Figure_02_03_207.jpg
> alt: A graph of a function with two curves. The first is in quadrant two and curves asymptotically to infinity along the y axis and to 0 along the x axis as x goes to negative infinity. The second is in quadrant one and curves asymptotically to infinity along the y axis and to 0 along the x axis as x goes to infinity.

b. ∞. The magnitude of the electric field as you approach the particle *q* becomes infinite. It does not make physical sense to evaluate negative distance.
:::

:::exercise {fs-id1170571612287} type= 
PROBLEM:
**[T]** The density of an object is given by its mass divided by its volume: $ρ=m\text{/}V.$
a. Use a calculator to plot the volume as a function of density $(V=m\text{/}ρ),$ assuming you are examining something of mass 8 kg ($m=8\text{).}$
b. Evaluate $\lim_{ρ\to {0}^{+}}V(ρ)$ and explain the physical meaning.
:::

## Glossary
- {def} **constant multiple law for limits**: the limit law $\lim_{x\to a}cf(x)=c\cdot \lim_{x\to a}f(x)=cL$
- {def} **difference law for limits**: the limit law $\lim_{x\to a}(f(x)-g(x))=\lim_{x\to a}f(x)-\lim_{x\to a}g(x)=L-M$
- {def} **limit laws**: the individual properties of limits; for each of the individual laws, let $f(x)$ and $g(x)$ be defined for all $x≠a$ over some open interval containing *a*; assume that *L* and *M* are real numbers so that $\lim_{x\to a}f(x)=L$ and $\lim_{x\to a}g(x)=M;$ let *c* be a constant
- {def} **power law for limits**: the limit law $\lim_{x\to a}{(f(x))}^{n}={(\lim_{x\to a}f(x))}^{n}={L}^{n}$ for every positive integer *n*
- {def} **product law for limits**: the limit law $\lim_{x\to a}(f(x)\cdot g(x))=\lim_{x\to a}f(x)\cdot \lim_{x\to a}g(x)=L\cdot M$
- {def} **quotient law for limits**: the limit law $\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}=\frac{L}{M}$ for $M≠0$
- {def} **root law for limits**: the limit law $\lim_{x\to a}\sqrt[n]{f(x)}=\sqrt[n]{\lim_{x\to a}f(x)}=\sqrt[n]{L}$ for all *L* if *n* is odd and for $L\ge 0$ if *n* is even
- {def} **squeeze theorem**: states that if $f(x)\le g(x)\le h(x)$ for all $x≠a$ over an open interval containing *a* and $\lim_{x\to a}f(x)=L=\lim_{x\to a}h(x)$ where *L* is a real number, then $\lim_{x\to a}g(x)=L$
- {def} **sum law for limits**: The limit law $\lim_{x\to a}(f(x)+g(x))=\lim_{x\to a}f(x)+\lim_{x\to a}g(x)=L+M$

# Differentiation Rules

## Learning Objectives {section:learning-objectives}
- State the constant, constant multiple, and power rules.
- Apply the sum and difference rules to combine derivatives.
- Use the product rule for finding the derivative of a product of functions.
- Use the quotient rule for finding the derivative of a quotient of functions.
- Extend the power rule to functions with negative exponents.
- Combine the differentiation rules to find the derivative of a polynomial or rational function.

Finding derivatives of functions by using the definition of the derivative can be a lengthy and, for certain functions, a rather challenging process. For example, previously we found that $\frac{d}{dx}(\sqrt{x})=\frac{1}{2\sqrt{x}}$ by using a process that involved multiplying an expression by a conjugate prior to evaluating a limit. The process that we could use to evaluate $\frac{d}{dx}(\sqrt[3]{x})$ using the definition, while similar, is more complicated. In this section, we develop rules for finding derivatives that allow us to bypass this process. We begin with the basics.

## The Basic Rules
The functions $f(x)=c$ and $g(x)={x}^{n}$ where $n$ is a positive integer are the building blocks from which all polynomials and rational functions are constructed. To find derivatives of polynomials and rational functions efficiently without resorting to the limit definition of the derivative, we must first develop formulas for differentiating these basic functions.

### The Constant Rule
We first apply the limit definition of the derivative to find the derivative of the constant function, $f(x)=c.$ For this function, both $f(x)=c$ and $f(x+h)=c,$ so we obtain the following result:

$\begin{array}{rl}{f}^{'}(x) & =\lim_{h\to 0}\frac{f(x+h)-f(x)}{h} \\ & =\lim_{h\to 0}\frac{c-c}{h} \\ & =\lim_{h\to 0}\frac{0}{h} \\ & =\lim_{h\to 0}0=0.\end{array}$  {eq:fs-id1169738850732}

The rule for differentiating constant functions is called the {term:constant rule}. It states that the derivative of a constant function is zero; that is, since a constant function is a horizontal line, the slope, or the rate of change, of a constant function is $0.$ We restate this rule in the following theorem.

:::note [theorem] The Constant Rule
Let $c$ be a constant.
If $f(x)=c,$ then ${f}^{'}(x)=0.$
Alternatively, we may express this rule as

$\frac{d}{dx}(c)=0.$  {eq:fs-id1169738861250}

:::

:::example {ex:fs-id1169739274547} Applying the Constant Rule

:::exercise {fs-id1169738888884} type= 
PROBLEM:
Find the derivative of $f(x)=8.$
SOLUTION:
This is just a one-step application of the rule:

${f}^{'}(x)=0.$  {eq:fs-id1169738875468}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738923828} type= 
PROBLEM:
Find the derivative of $g(x)=−3.$
SOLUTION:
0
COMMENTARY: Hint
Use the preceding example as a guide.
:::
:::

## The Power Rule
We have shown that

$\frac{d}{dx}({x}^{2})=2x\;\text{and}\;\frac{d}{dx}({x}^{1\text{/}2})=\frac{1}{2}{x}^{\text{−}1\text{/}2}.$  {eq:fs-id1169739234394}

At this point, you might see a pattern beginning to develop for derivatives of the form $\frac{d}{dx}({x}^{n}).$ We continue our examination of derivative formulas by differentiating power functions of the form $f(x)={x}^{n}$ where $n$ is a positive integer. We develop formulas for derivatives of this type of function in stages, beginning with positive integer powers. Before stating and proving the general rule for derivatives of functions of this form, we take a look at a specific case, $\frac{d}{dx}({x}^{3}).$ As we go through this derivation, note that the technique used in this case is essentially the same as the technique used to prove the general case.

:::example {ex:fs-id1169738993994} Differentiating ${x}^{3}$

:::exercise {fs-id1169738954753} type= 
PROBLEM:
Find $\frac{d}{dx}({x}^{3}).$
SOLUTION:

$\begin{array}{rllll}\frac{d}{dx}({x}^{3}) & =\lim_{h\to 0}\frac{{(x+h)}^{3}-{x}^{3}}{h} & & & \\ & =\lim_{h\to 0}\frac{{x}^{3}+3{x}^{2}h+3x{h}^{2}+{h}^{3}-{x}^{3}}{h} & & & \begin{array}{l}\text{Notice that the first term in the expansion of} \\ {(x+h)}^{3}\;\text{is}\;{x}^{3}\;\text{and the second term is}\;3{x}^{2}h.\;\text{All} \\ \text{other terms contain powers of}\;h\;\text{that are two or} \\ \text{greater.}\end{array} \\ & =\lim_{h\to 0}\frac{3{x}^{2}h+3x{h}^{2}+{h}^{3}}{h} & & & \begin{array}{l}\text{In this step the}\;{x}^{3}\;\text{terms have been cancelled,} \\ \text{leaving only terms containing}\;h.\end{array} \\ & =\lim_{h\to 0}\frac{h(3{x}^{2}+3xh+{h}^{2})}{h} & & & \text{Factor out the common factor of}\;h. \\ & =\lim_{h\to 0}(3{x}^{2}+3xh+{h}^{2}) & & & \begin{array}{l}\text{After cancelling the common factor of}\;h,\text{the} \\ \text{only term not containing}\;h\;\text{is}\;3{x}^{2}.\end{array} \\ & =3{x}^{2} & & & \text{Let}\;h\;\text{go to 0.}\end{array}$  {eq:fs-id1169739014416}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736611688} type= 
PROBLEM:
Find $\frac{d}{dx}({x}^{4}).$
SOLUTION:
$4{x}^{3}$
COMMENTARY: Hint
Use ${(x+h)}^{4}={x}^{4}+4{x}^{3}h+6{x}^{2}{h}^{2}+4x{h}^{3}+{h}^{4}$ and follow the procedure outlined in the preceding example.
:::
:::
As we shall see, the procedure for finding the derivative of the general form $f(x)={x}^{n}$ is very similar. Although it is often unwise to draw general conclusions from specific examples, we note that when we differentiate $f(x)={x}^{3},$ the power on $x$ becomes the coefficient of ${x}^{2}$ in the derivative and the power on $x$ in the derivative decreases by 1. The following theorem states that the {term:power rule} holds for all positive integer powers of $x.$ We will eventually extend this result to negative integer powers. Later, we will see that this rule may also be extended first to rational powers of $x$ and then to arbitrary powers of $x.$ Be aware, however, that this rule does not apply to functions in which a constant is raised to a variable power, such as $f(x)={3}^{x}.$

:::note [theorem] The Power Rule
Let $n$ be a positive integer. If $f(x)={x}^{n},$ then

${f}^{'}(x)=n{x}^{n-1}.$  {eq:fs-id1169739269835}

Alternatively, we may express this rule as

$\frac{d}{dx}{x}^{n}=n{x}^{n-1}.$  {eq:fs-id1169739225629}

:::

### Proof
For $f(x)={x}^{n}$ where $n$ is a positive integer, we have

${f}^{'}(x)=\lim_{h\to 0}\frac{{(x+h)}^{n}-{x}^{n}}{h}.$  {eq:fs-id1169739010866}

$\text{Since}\;{(x+h)}^{n}={x}^{n}+n{x}^{n-1}h+\left(\begin{array}{l}n \\ 2\end{array}\right)\;{x}^{n-2}{h}^{2}+\left(\begin{array}{l}n \\ 3\end{array}\right)\;{x}^{n-3}{h}^{3}+\text{…}+nx{h}^{n-1}+{h}^{n},$  {eq:fs-id1169738108118}

we see that

${(x+h)}^{n}-{x}^{n}=n{x}^{n-1}h+\left(\begin{array}{l}n \\ 2\end{array}\right)\;{x}^{n-2}{h}^{2}+\left(\begin{array}{l}n \\ 3\end{array}\right)\;{x}^{n-3}{h}^{3}+\text{…}+nx{h}^{n-1}+{h}^{n}.$  {eq:fs-id1169736614176}

Next, divide both sides by *h*:

$\frac{{(x+h)}^{n}-{x}^{n}}{h}=\frac{n{x}^{n-1}h+\left(\begin{array}{l}n \\ 2\end{array}\right)\;{x}^{n-2}{h}^{2}+\left(\begin{array}{l}n \\ 3\end{array}\right)\;{x}^{n-3}{h}^{3}+\text{…}+nx{h}^{n-1}+{h}^{n}}{h}.$  {eq:fs-id1169739190480}

Thus,

$\frac{{(x+h)}^{n}-{x}^{n}}{h}=n{x}^{n-1}+\left(\begin{array}{l}n \\ 2\end{array}\right)\;{x}^{n-2}h+\left(\begin{array}{l}n \\ 3\end{array}\right)\;{x}^{n-3}{h}^{2}+\text{…}+nx{h}^{n-2}+{h}^{n-1}.$  {eq:fs-id1169739014535}

Finally,

$\begin{array}{rl}{f}^{'}(x) & =\lim_{h\to 0}(n{x}^{n-1}+\left(\begin{array}{l}n \\ 2\end{array}\right)\;{x}^{n-2}h+\left(\begin{array}{l}n \\ 3\end{array}\right)\;{x}^{n-3}{h}^{2}+\text{…}+nx{h}^{n-2}+{h}^{n-1}) \\ & =n{x}^{n-1}.\end{array}$  {eq:fs-id1169739302946}

□

:::example {ex:fs-id1169739190555} Applying the Power Rule

:::exercise {fs-id1169736616196} type= 
PROBLEM:
Find the derivative of the function $f(x)={x}^{10}$ by applying the power rule.
SOLUTION:
Using the power rule with $n=10,$ we obtain

$f'(x)=10{x}^{10-1}=10{x}^{9}.$  {eq:fs-id1169739342007}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739199743} type= 
PROBLEM:
Find the derivative of $f(x)={x}^{7}.$
SOLUTION:
${f}^{'}(x)=7{x}^{6}$
COMMENTARY: Hint
Use the power rule with $n=7.$
:::
:::

## The Sum, Difference, and Constant Multiple Rules
We find our next differentiation rules by looking at derivatives of sums, differences, and constant multiples of functions. Just as when we work with functions, there are rules that make it easier to find derivatives of functions that we add, subtract, or multiply by a constant. These rules are summarized in the following theorem.

:::note [theorem] Sum, Difference, and Constant Multiple Rules
Let $f(x)$ and $g(x)$ be differentiable functions and $k$ be a constant. Then each of the following equations holds.
{term:Sum Rule}. The derivative of the sum of a function $f$ and a function $g$ is the same as the sum of the derivative of $f$ and the derivative of $g.$

$\frac{d}{dx}(f(x)+g(x))=\frac{d}{dx}(f(x))+\frac{d}{dx}(g(x));$  {eq:fs-id1169739179597}

that is,

$\text{for}\;j(x)=f(x)+g(x),{j}^{'}(x)={f}^{'}(x)+{g}^{'}(x).$  {eq:fs-id1169739008128}

{term:Difference Rule}. The derivative of the difference of a function *f* and a function *g* is the same as the difference of the derivative of *f* and the derivative of $g\text{:}$

$\frac{d}{dx}(f(x)-g(x))=\frac{d}{dx}(f(x))-\frac{d}{dx}(g(x));$  {eq:fs-id1169736611311}

that is,

$\text{for}\;j(x)=f(x)-g(x),{j}^{'}(x)={f}^{'}(x)-{g}^{'}(x).$  {eq:fs-id1169739208882}

{term:Constant Multiple Rule}. The derivative of a constant *k* multiplied by a function *f* is the same as the constant multiplied by the derivative: $$

$\frac{d}{dx}(kf(x))=k\frac{d}{dx}(f(x));$  {eq:fs-id1169739340266}

that is,

$\text{for}\;j(x)=kf(x),{j}^{'}(x)=k{f}^{'}(x).$  {eq:fs-id1169739179543}

:::

### Proof
We provide only the proof of the sum rule here. The rest follow in a similar manner.
For differentiable functions $f(x)$ and $g(x),$ we set $j(x)=f(x)+g(x).$ Using the limit definition of the derivative we have

${j}^{'}(x)=\lim_{h\to 0}\frac{j(x+h)-j(x)}{h}.$  {eq:fs-id1169739269666}

By substituting $j(x+h)=f(x+h)+g(x+h)$ and $j(x)=f(x)+g(x),$ we obtain

${j}^{'}(x)=\lim_{h\to 0}\frac{(f(x+h)+g(x+h))-(f(x)+g(x))}{h}.$  {eq:fs-id1169739274306}

Rearranging and regrouping the terms, we have

${j}^{'}(x)=\lim_{h\to 0}(\frac{f(x+h)-f(x)}{h}+\frac{g(x+h)-g(x)}{h}).$  {eq:fs-id1169739303318}

We now apply the sum law for limits and the definition of the derivative to obtain

${j}^{'}(x)=\lim_{h\to 0}(\frac{f(x+h)-f(x)}{h})+\lim_{h\to 0}(\frac{g(x+h)-g(x)}{h})={f}^{'}(x)+{g}^{'}(x).$  {eq:fs-id1169739274631}

□

:::example {ex:fs-id1169739269764} Applying the Constant Multiple Rule

:::exercise {fs-id1169739269766} type= 
PROBLEM:
Find the derivative of $g(x)=3{x}^{2}$ and compare it to the derivative of $f(x)={x}^{2}.$
SOLUTION:
We use the power rule directly:

${g}^{'}(x)=\frac{d}{dx}(3{x}^{2})=3\frac{d}{dx}({x}^{2})=3(2x)=6x.$  {eq:fs-id1169739286424}

Since $f(x)={x}^{2}$ has derivative ${f}^{'}(x)=2x,$ we see that the derivative of $g(x)$ is 3 times the derivative of $f(x).$ This relationship is illustrated in [ref:CNX_Calc_Figure_03_03_001].

> FIGURE {fig:CNX_Calc_Figure_03_03_001} src=../../media/CNX_Calc_Figure_03_03_001.jpg
> alt: Two graphs are shown. The first graph shows g(x) = 3x2 and f(x) = x squared. The second graph shows g’(x) = 6x and f’(x) = 2x. In the first graph, g(x) increases three times more quickly than f(x). In the second graph, g’(x) increases three times more quickly than f’(x).
> caption: The derivative of $g(x)$ is 3 times the derivative of $f(x).$

:::
:::

:::example {ex:fs-id1169739300387} Applying Basic Derivative Rules

:::exercise {fs-id1169739300389} type= 
PROBLEM:
Find the derivative of $f(x)=2{x}^{5}+7.$
SOLUTION:
We begin by applying the rule for differentiating the sum of two functions, followed by the rules for differentiating constant multiples of functions and the rule for differentiating powers. To better understand the sequence in which the differentiation rules are applied, we use Leibniz notation throughout the solution:

$\begin{array}{rllll}{f}^{'}(x) & =\frac{d}{dx}(2{x}^{5}+7) & & & \\ & =\frac{d}{dx}(2{x}^{5})+\frac{d}{dx}(7) & & & \text{Apply the sum rule.} \\ & =2\frac{d}{dx}({x}^{5})+\frac{d}{dx}(7) & & & \text{Apply the constant multiple rule.} \\ & =2(5{x}^{4})+0 & & & \text{Apply the power rule and the constant rule.} \\ & =10{x}^{4}. & & & \text{Simplify.}\end{array}$  {eq:fs-id1169739273990}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739299465} type= 
PROBLEM:
Find the derivative of $f(x)=2{x}^{3}-6{x}^{2}+3.$
SOLUTION:
${f}^{'}(x)=6{x}^{2}-12x.$
COMMENTARY: Hint
Use the preceding example as a guide.
:::
:::

:::example {ex:fs-id1169739301889} Finding the Equation of a Tangent Line

:::exercise {fs-id1169739301891} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)={x}^{2}-4x+6$ at $x=1.$
SOLUTION:
To find an equation of the tangent line, we need a point and a slope. To find the point, compute

$f(1)={1}^{2}-4(1)+6=3.$  {eq:fs-id1169736663039}

This gives us the point $(1,3).$ Since the slope of the tangent line at 1 is ${f}^{'}(1),$ we must first find ${f}^{'}(x).$ Using the definition of a derivative, we have

${f}^{'}(x)=2x-4$  {eq:fs-id1169739297908}

so the slope of the tangent line is ${f}^{'}(1)=−2.$ Using the point-slope formula, we see that the equation of the tangent line is

$y-3=−2(x-1).$  {eq:fs-id1169739273158}

Putting the equation of the line in slope-intercept form, we obtain

$y=−2x+5.$  {eq:fs-id1169739269643}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736654286} type= 
PROBLEM:
Find an equation of the line tangent to the graph of $f(x)=3{x}^{2}-11$ at $x=2.$ Use the point-slope form.
SOLUTION:
$y=12x-23$
COMMENTARY: Hint
Use the preceding example as a guide.
:::
:::

## The Product Rule
Now that we have examined the basic rules, we can begin looking at some of the more advanced rules. The first one examines the derivative of the product of two functions. Although it might be tempting to assume that the derivative of the product is the product of the derivatives, similar to the sum and difference rules, the {term:product rule} does not follow this pattern. To see why we cannot use this pattern, consider the function $f(x)={x}^{2},$ whose derivative is ${f}^{'}(x)=2x$ and not $\frac{d}{dx}(x)\cdot \frac{d}{dx}(x)=1\cdot 1=1.$

:::note [theorem] Product Rule
Let $f(x)$ and $g(x)$ be differentiable functions. Then

$\frac{d}{dx}(f(x)g(x))=\frac{d}{dx}(f(x))\cdot g(x)+\frac{d}{dx}(g(x))\cdot f(x).$  {eq:fs-id1169739326645}

That is,

$\text{if}\;j(x)=f(x)g(x),\text{then}\;{j}^{'}(x)={f}^{'}(x)g(x)+{g}^{'}(x)f(x).$  {eq:fs-id1169739187837}

This means that the derivative of a product of two functions is the derivative of the first function times the second function plus the derivative of the second function times the first function.
:::

### Proof
We begin by assuming that $f(x)$ and $g(x)$ are differentiable functions. At a key point in this proof we need to use the fact that, since $g(x)$ is differentiable, it is also continuous. In particular, we use the fact that since $g(x)$ is continuous, $\lim_{h\to 0}g(x+h)=g(x).$
By applying the limit definition of the derivative to $j(x)=f(x)g(x),$ we obtain

${j}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)g(x+h)-f(x)g(x)}{h}.$  {eq:fs-id1169739327881}

By adding and subtracting $f(x)g(x+h)$ in the numerator, we have

${j}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)g(x+h)-f(x)g(x+h)+f(x)g(x+h)-f(x)g(x)}{h}.$  {eq:fs-id1169739301672}

After breaking apart this quotient and applying the sum law for limits, the derivative becomes

${j}^{'}(x)=\lim_{h\to 0}(\frac{f(x+h)g(x+h)-f(x)g(x+h)}{h})+\lim_{h\to 0}(\frac{f(x)g(x+h)-f(x)g(x)}{h}).$  {eq:fs-id1169739304791}

Rearranging, we obtain

${j}^{'}(x)=\lim_{h\to 0}(\frac{f(x+h)-f(x)}{h}\cdot g(x+h))+\lim_{h\to 0}(\frac{g(x+h)-g(x)}{h}\cdot f(x)).$  {eq:fs-id1169736662810}

By using the continuity of $g(x),$ the definition of the derivatives of $f(x)$ and $g(x),$ and applying the limit laws, we arrive at the product rule,

${j}^{'}(x)={f}^{'}(x)g(x)+{g}^{'}(x)f(x).$  {eq:fs-id1169736655920}

□

:::example {ex:fs-id1169736659557} Applying the Product Rule to Functions at a Point

:::exercise {fs-id1169736659560} type= 
PROBLEM:
For $j(x)=f(x)g(x),$ use the product rule to find ${j}^{'}(2)$ if $f(2)=3,{f}^{'}(2)=−4,g(2)=1,$ and ${g}^{'}(2)=6.$
SOLUTION:
Since $j(x)=f(x)g(x),{j}^{'}(x)={f}^{'}(x)g(x)+{g}^{'}(x)f(x),$ and hence

${j}^{'}(2)={f}^{'}(2)g(2)+{g}^{'}(2)f(2)=(−4)(1)+(6)(3)=14.$  {eq:fs-id1169736656614}

:::
:::

:::example {ex:fs-id1169739273812} Applying the Product Rule to Binomials

:::exercise {fs-id1169739273814} type= 
PROBLEM:
For $j(x)=({x}^{2}+2)(3{x}^{3}-5x),$ find ${j}^{'}(x)$ by applying the product rule. Check the result by first finding the product and then differentiating.
SOLUTION:
If we set $f(x)={x}^{2}+2$ and $g(x)=3{x}^{3}-5x,$ then ${f}^{'}(x)=2x$ and ${g}^{'}(x)=9{x}^{2}-5.$ Thus,

${j}^{'}(x)={f}^{'}(x)g(x)+{g}^{'}(x)f(x)=(2x)(3{x}^{3}-5x)+(9{x}^{2}-5)({x}^{2}+2).$  {eq:fs-id1169739343689}

Simplifying, we have

${j}^{'}(x)=15{x}^{4}+3{x}^{2}-10.$  {eq:fs-id1169736612560}

To check, we see that $j(x)=3{x}^{5}+{x}^{3}-10x$ and, consequently, ${j}^{'}(x)=15{x}^{4}+3{x}^{2}-10.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736654824} type= 
PROBLEM:
Use the product rule to obtain the derivative of $j(x)=2{x}^{5}(4{x}^{2}+x).$
SOLUTION:
${j}^{'}(x)=10{x}^{4}(4{x}^{2}+x)+(8x+1)(2{x}^{5})=56{x}^{6}+12{x}^{5}.$
COMMENTARY: Hint
Set $f(x)=2{x}^{5}$ and $g(x)=4{x}^{2}+x$ and use the preceding example as a guide.
:::
:::

## The Quotient Rule
Having developed and practiced the product rule, we now consider differentiating quotients of functions. As we see in the following theorem, the derivative of the quotient is not the quotient of the derivatives; rather, it is the derivative of the function in the numerator times the function in the denominator minus the derivative of the function in the denominator times the function in the numerator, all divided by the square of the function in the denominator. In order to better grasp why we cannot simply take the quotient of the derivatives, keep in mind that

$\frac{d}{dx}({x}^{2})=2x,\text{not}\;\frac{\frac{d}{dx}({x}^{3})}{\frac{d}{dx}(x)}=\frac{3{x}^{2}}{1}=3{x}^{2}.$  {eq:fs-id1169739269470}

:::note [theorem] The Quotient Rule
Let $f(x)$ and $g(x)$ be differentiable functions. Then

$\frac{d}{dx}(\frac{f(x)}{g(x)})=\frac{\frac{d}{dx}(f(x))\cdot g(x)-\frac{d}{dx}(g(x))\cdot f(x)}{{(g(x))}^{2}}.$  {eq:fs-id1169739336009}

That is,

$\text{if}\;j(x)=\frac{f(x)}{g(x)},\text{then}\;{j}^{'}(x)=\frac{{f}^{'}(x)g(x)-{g}^{'}(x)f(x)}{{(g(x))}^{2}}.$  {eq:fs-id1169739190666}

:::
The proof of the {term:quotient rule} is very similar to the proof of the product rule, so it is omitted here. Instead, we apply this new rule for finding derivatives in the next example.

:::example {ex:fs-id1169739305225} Applying the Quotient Rule

:::exercise {fs-id1169739305227} type= 
PROBLEM:
Use the quotient rule to find the derivative of $k(x)=\frac{5{x}^{2}}{4x+3}.$
SOLUTION:
Let $f(x)=5{x}^{2}$ and $g(x)=4x+3.$ Thus, ${f}^{'}(x)=10x$ and ${g}^{'}(x)=4.$ Substituting into the quotient rule, we have

${k}^{'}(x)=\frac{{f}^{'}(x)g(x)-{g}^{'}(x)f(x)}{{(g(x))}^{2}}=\frac{10x(4x+3)-4(5{x}^{2})}{{(4x+3)}^{2}}.$  {eq:fs-id1169739299200}

Simplifying, we obtain

${k}^{'}(x)=\frac{20{x}^{2}+30x}{{(4x+3)}^{2}}.$  {eq:fs-id1169739299787}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739299853} type= 
PROBLEM:
Find the derivative of $h(x)=\frac{3x+1}{4x-3}.$
SOLUTION:
${k}^{'}(x)=-\frac{13}{{(4x-3)}^{2}}.$
COMMENTARY: Hint
Apply the quotient rule with $f(x)=3x+1$ and $g(x)=4x-3.$
:::
:::
It is now possible to use the quotient rule to extend the power rule to find derivatives of functions of the form ${x}^{k}$ where $k$ is a negative integer.

:::note [theorem] Extended Power Rule
If $k$ is a negative integer, then

$\frac{d}{dx}({x}^{k})=k{x}^{k-1}.$  {eq:fs-id1169736617610}

:::

### Proof
If $k$ is a negative integer, we may set $n=\text{−}k,$ so that *n* is a positive integer with $k=\text{−}n.$ Since for each positive integer $n,{x}^{\text{−}n}=\frac{1}{{x}^{n}},$ we may now apply the quotient rule by setting $f(x)=1$ and $g(x)={x}^{n}.$ In this case, ${f}^{'}(x)=0$ and ${g}^{'}(x)=n{x}^{n-1}.$ Thus,

$\frac{d}{dx}({x}^{\text{−}n})=\frac{0({x}^{n})-1(n{x}^{n-1})}{{({x}^{n})}^{2}}.$  {eq:fs-id1169739252903}

Simplifying, we see that

$\frac{d}{dx}({x}^{\text{−}n})=\frac{\text{−}n{x}^{n-1}}{{x}^{2n}}=\text{−}n{x}^{(n-1)-2n}=\text{−}n{x}^{\text{−}n-1}.$  {eq:fs-id1169739190076}

Finally, observe that since $k=\text{−}n,$ by substituting we have

$\frac{d}{dx}({x}^{k})=k{x}^{k-1}.$  {eq:fs-id1169736614261}

□

:::example {ex:fs-id1169736614308} Using the Extended Power Rule

:::exercise {fs-id1169736614310} type= 
PROBLEM:
Find $\frac{d}{dx}({x}^{−4}).$
SOLUTION:
By applying the extended power rule with $k=−4,$ we obtain

$\frac{d}{dx}({x}^{−4})=−4{x}^{−4-1}=−4{x}^{−5}.$  {eq:fs-id1169739300043}

:::
:::

:::example {ex:fs-id1169739300101} Using the Extended Power Rule and the Constant Multiple Rule

:::exercise {fs-id1169739300104} type= 
PROBLEM:
Use the extended power rule and the constant multiple rule to find the derivative of $f(x)=\frac{6}{{x}^{2}}.$
SOLUTION:
It may seem tempting to use the quotient rule to find this derivative, and it would certainly not be incorrect to do so. However, it is far easier to differentiate this function by first rewriting it as $f(x)=6{x}^{−2}.$

$\begin{array}{rllll}{f}^{'}(x) & =\frac{d}{dx}(\frac{6}{{x}^{2}})=\frac{d}{dx}(6{x}^{−2}) & & & \text{Rewrite}\;\frac{6}{{x}^{2}}\;\text{as}\;6{x}^{−2}. \\ & =6\frac{d}{dx}({x}^{−2}) & & & \text{Apply the constant multiple rule.} \\ & =6(−2{x}^{−3}) & & & \text{Use the extended power rule to differentiate}\;{x}^{−2}. \\ & =−12{x}^{−3} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169736656758}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736657090} type= 
PROBLEM:
Find the derivative of $g(x)=\frac{1}{{x}^{7}}$ using the extended power rule.
SOLUTION:
${g}^{'}(x)=−7{x}^{−8}.$
COMMENTARY: Hint
Rewrite $g(x)=\frac{1}{{x}^{7}}={x}^{−7}.$ Use the extended power rule with $k=−7.$
:::
:::

## Combining Differentiation Rules
As we have seen throughout the examples in this section, it seldom happens that we are called on to apply just one differentiation rule to find the derivative of a given function. At this point, by combining the differentiation rules, we may find the derivatives of any polynomial or rational function. Later on we will encounter more complex combinations of differentiation rules. A good rule of thumb to use when applying several rules is to apply the rules in reverse of the order in which we would evaluate the function.

:::example {ex:fs-id1169739347062} Combining Differentiation Rules

:::exercise {fs-id1169739347065} type= 
PROBLEM:
For $k(x)=3h(x)+{x}^{2}g(x),$ find ${k}^{'}(x).$
SOLUTION:
Finding this derivative requires the sum rule, the constant multiple rule, and the product rule.

$\begin{array}{rllll}{k}^{'}(x) & =\frac{d}{dx}(3h(x)+{x}^{2}g(x))=\frac{d}{dx}(3h(x))+\frac{d}{dx}({x}^{2}g(x)) & & & \text{Apply the sum rule.} \\ & =3\frac{d}{dx}(h(x))+(\frac{d}{dx}({x}^{2})g(x)+\frac{d}{dx}(g(x)){x}^{2}) & & & \begin{array}{l}\text{Apply the constant multiple rule to} \\ \text{differentiate}\;3h(x)\;\text{and the product} \\ \text{rule to differentiate}\;{x}^{2}g(x).\end{array} \\ & =3{h}^{'}(x)+2xg(x)+{x}^{2}{g}^{'}(x) & & & \end{array}$  {eq:fs-id1169739347147}

:::
:::

:::example {ex:fs-id1169739325719} Extending the Product Rule

:::exercise {fs-id1169739325721} type= 
PROBLEM:
For $k(x)=f(x)g(x)h(x),$ express ${k}^{'}(x)$ in terms of $f(x),g(x),h(x),$ and their derivatives.
SOLUTION:
We can think of the function $k(x)$ as the product of the function $f(x)g(x)$ and the function $h(x).$ That is, $k(x)=(f(x)g(x))\cdot h(x).$ Thus,

$\begin{array}{rllll}{k}^{'}(x) & =\frac{d}{dx}(f(x)g(x))\cdot h(x)+\frac{d}{dx}(h(x))\cdot (f(x)g(x)) & & & \begin{array}{l}\text{Apply the product rule to the product} \\ \text{of}\;f(x)g(x)\;\text{and}\;h(x).\end{array} \\ & =({f}^{'}(x)g(x)+{g}^{'}(x)f(x))h(x)+{h}^{'}(x)f(x)g(x) & & & \text{Apply the product rule to}\;f(x)g(x). \\ & ={f}^{'}(x)g(x)h(x)+f(x){g}^{'}(x)h(x)+f(x)g(x){h}^{'}(x). & & & \text{Simplify.}\end{array}$  {eq:fs-id1169739333852}

:::
:::

:::example {ex:fs-id1169736658392} Combining the Quotient Rule and the Product Rule

:::exercise {fs-id1169736658394} type= 
PROBLEM:
For $h(x)=\frac{2{x}^{3}k(x)}{3x+2},$ find ${h}^{'}(x).$
SOLUTION:
This procedure is typical for finding the derivative of a rational function.

$\begin{array}{llllll}{h}^{'}(x) & =\frac{\frac{d}{dx}(2{x}^{3}k(x))\cdot (3x+2)-\frac{d}{dx}(3x+2)\cdot (2{x}^{3}k(x))}{{(3x+2)}^{2}} & & & \text{Apply the quotient rule.} & \; \\ & =\frac{(6{x}^{2}k(x)+{k}^{'}(x)\cdot 2{x}^{3})(3x+2)-3(2{x}^{3}k(x))}{{(3x+2)}^{2}} & & & \begin{array}{l}\text{Apply the product rule to find} \\ \frac{d}{dx}(2{x}^{3}k(x)).\;\text{Use}\;\frac{d}{dx}(3x+2)=3.\end{array} & \; \\ & =\frac{−6{x}^{3}k(x)+18{x}^{3}k(x)+12{x}^{2}k(x)+6{x}^{4}{k}^{'}(x)+4{x}^{3}{k}^{'}(x)}{{(3x+2)}^{2}} & & & \text{Simplify.} & \; \\ & =\frac{12k(x)({x}^{3}+{x}^{2})+2k'(x)(3{x}^{4}+2{x}^{3})}{{(3x+2)}^{2}} & \; & \; & \; & \;\end{array}$  {eq:fs-id1169736658477}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736607615} type= 
PROBLEM:
Find $\frac{d}{dx}(3f(x)-2g(x)).$
SOLUTION:
$3{f}^{'}(x)-2{g}^{'}(x).$
COMMENTARY: Hint
Apply the difference rule and the constant multiple rule.
:::
:::

:::example {ex:fs-id1169736589236} Determining Where a Function Has a Horizontal Tangent

:::exercise {fs-id1169736589238} type= 
PROBLEM:
Determine the values of $x$ for which $f(x)={x}^{3}-7{x}^{2}+8x+1$ has a horizontal tangent line.
SOLUTION:
To find the values of $x$ for which $f(x)$ has a horizontal tangent line, we must solve ${f}^{'}(x)=0.$ Since

${f}^{'}(x)=3{x}^{2}-14x+8=(3x-2)(x-4),$  {eq:fs-id1169736589343}

we must solve $(3x-2)(x-4)=0.$ Thus we see that the function has horizontal tangent lines at $x=\frac{2}{3}$ and $x=4$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_03_03_002} src=../../media/CNX_Calc_Figure_03_03_002.jpg
> alt: The graph shows f(x) = x3 – 7x2 + 8x + 1, and the tangent lines are shown as x = 2/3 and x = 4.
> caption: This function has horizontal tangent lines at *x* = 2/3 and *x* = 4.

:::
:::

:::example {ex:fs-id1169739281977} Finding a Velocity

:::exercise {fs-id1169739281979} type= 
PROBLEM:
The position of an object on a coordinate axis at time $t$ is given by $s(t)=\frac{t}{{t}^{2}+1}.$ What is the initial velocity of the object?
SOLUTION:
Since the initial velocity is $v(0)={s}^{'}(0),$ begin by finding ${s}^{'}(t)$ by applying the quotient rule:

${s}^{'}(t)=\frac{1({t}^{2}+1)-2t(t)}{{({t}^{2}+1)}^{2}}=\frac{1-{t}^{2}}{{({t}^{2}+1)}^{2}}.$  {eq:fs-id1169739282080}

After evaluating, we see that $v(0)=1.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739301462} type= 
PROBLEM:
Find the values of $x$ for which the graph of $f(x)=4{x}^{2}-3x+2$ has a tangent line parallel to the line $y=2x+3.$
SOLUTION:
$\frac{5}{8}$
COMMENTARY: Hint
Solve ${f}^{'}(x)=2.$
:::
:::

:::note [project] Formula One Grandstands
Formula One car races can be very exciting to watch and attract a lot of spectators. Formula One track designers have to ensure sufficient grandstand space is available around the track to accommodate these viewers. However, car racing can be dangerous, and safety considerations are paramount. The grandstands must be placed where spectators will not be in danger should a driver lose control of a car ([ref:CNX_Calc_Figure_03_03_003]).

> FIGURE {fig:CNX_Calc_Figure_03_03_003} src=../../media/CNX_Calc_Figure_03_03_003.jpg
> alt: A photo of a grandstand next to a straightaway of a race track.
> caption: The grandstand next to a straightaway of the Circuit de Barcelona-Catalunya race track, located where the spectators are not in danger.

**********
Safety is especially a concern on turns. If a driver does not slow down enough before entering the turn, the car may slide off the racetrack. Normally, this just results in a wider turn, which slows the driver down. But if the driver loses control completely, the car may fly off the track entirely, on a path tangent to the curve of the racetrack.
Suppose you are designing a new Formula One track. One section of the track can be modeled by the function $f(x)={x}^{3}+3{x}^{2}+x$ ([ref:CNX_Calc_Figure_03_03_004]). The current plan calls for grandstands to be built along the first straightaway and around a portion of the first curve. The plans call for the front corner of the grandstand to be located at the point $(−1.9,2.8).$ We want to determine whether this location puts the spectators in danger if a driver loses control of the car.

> FIGURE {fig:CNX_Calc_Figure_03_03_004} src=../../media/CNX_Calc_Figure_03_03_004.jpg
> alt: This figure has two parts labeled a and b. Figure a shows the graph of f(x) = x3 + 3x2 + x. Figure b shows the same graph but this time with two boxes on it. The first box appears along the left-hand side of the graph straddling the x-axis roughly parallel to f(x). The second box appears a little higher, also roughly parallel to f(x), with its front corner located at (−1.9, 2.8). Note that this corner is roughly in line with the direct path of the track before it started to turn.
> caption: (a) One section of the racetrack can be modeled by the function $f(x)={x}^{3}+3{x}^{2}+x.$ (b) The front corner of the grandstand is located at $(−1.9,2.8).$

1. Physicists have determined that drivers are most likely to lose control of their cars as they are coming into a turn, at the point where the slope of the tangent line is 1. Find the $(x,y)$ coordinates of this point near the turn.
2. Find an equation of the tangent line to the curve at this point.
3. To determine whether the spectators are in danger in this scenario, find the *x*-coordinate of the point where the tangent line crosses the line $y=2.8.$ Is this point safely to the right of the grandstand? Or are the spectators in danger?
4. What if a driver loses control earlier than the physicists project? Suppose a driver loses control at the point $(−2.5,0.625).$ What is the slope of the tangent line at this point?
5. If a driver loses control as described in part 4, are the spectators safe?
6. Should you proceed with the current design for the grandstand, or should the grandstands be moved?
:::

## Key Concepts {section:key-concepts}
- The derivative of a constant function is zero.
- The derivative of a power function is a function in which the power on $x$ becomes the coefficient of the term and the power on $x$ in the derivative decreases by 1.
- The derivative of a constant *c* multiplied by a function *f* is the same as the constant multiplied by the derivative.
- The derivative of the sum of a function *f* and a function *g* is the same as the sum of the derivative of *f* and the derivative of *g.*
- The derivative of the difference of a function *f* and a function *g* is the same as the difference of the derivative of *f* and the derivative of *g.*
- The derivative of a product of two functions is the derivative of the first function times the second function plus the derivative of the second function times the first function.
- The derivative of the quotient of two functions is the derivative of the first function times the second function minus the derivative of the second function times the first function, all divided by the square of the second function.
- We used the limit definition of the derivative to develop formulas that allow us to find derivatives without resorting to the definition of the derivative. These formulas can be used singly or in combination with each other.

##  {section:section-exercises}
For the following exercises, find ${f}^{'}(x)$ for each function.

:::exercise {fs-id1169739293618} type= 
PROBLEM:
$f(x)={x}^{7}+10$
:::

:::exercise {fs-id1169739293680} type= 
PROBLEM:
$f(x)=5{x}^{3}-x+1$
SOLUTION:
${f}^{'}(x)=15{x}^{2}-1$
:::

:::exercise {fs-id1169739293752} type= 
PROBLEM:
$f(x)=4{x}^{2}-7x$
:::

:::exercise {fs-id1169736595965} type= 
PROBLEM:
$f(x)=8{x}^{4}+9{x}^{2}-1$
SOLUTION:
${f}^{'}(x)=32{x}^{3}+18x$
:::

:::exercise {fs-id1169736596045} type= 
PROBLEM:
$f(x)={x}^{4}+\frac{2}{x}$
:::

:::exercise {fs-id1169739282659} type= 
PROBLEM:
$f(x)=3x(18{x}^{4}+\frac{13}{x+1})$
SOLUTION:
${f}^{'}(x)=270{x}^{4}+\frac{39}{{(x+1)}^{2}}$
:::

:::exercise {fs-id1169736662536} type= 
PROBLEM:
$f(x)=(x+2)(2{x}^{2}-3)$
:::

:::exercise {fs-id1169736662630} type= 
PROBLEM:
$f(x)={x}^{2}(\frac{2}{{x}^{2}}+\frac{5}{{x}^{3}})$
SOLUTION:
${f}^{'}(x)=\frac{−5}{{x}^{2}}$
:::

:::exercise {fs-id1169736658888} type= 
PROBLEM:
$f(x)=\frac{{x}^{3}+2{x}^{2}-4}{3}$
:::

:::exercise {fs-id1169736658971} type= 
PROBLEM:
$f(x)=\frac{4{x}^{3}-2x+1}{{x}^{2}}$
SOLUTION:
${f}^{'}(x)=\frac{4{x}^{4}+2{x}^{2}-2x}{{x}^{4}}$
:::

:::exercise {fs-id1169739303805} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}+4}{{x}^{2}-4}$
:::

:::exercise {fs-id1169739303900} type= 
PROBLEM:
$f(x)=\frac{x+9}{{x}^{2}-7x+1}$
SOLUTION:
${f}^{'}(x)=\frac{\text{−}{x}^{2}-18x+64}{{({x}^{2}-7x+1)}^{2}}$
:::
For the following exercises, find an equation of the tangent line $T(x)$ to the graph of the given function at the indicated point. Use a graphing calculator to graph the function and the tangent line.

:::exercise {fs-id1169739285046} type= 
PROBLEM:
**[T]** $y=3{x}^{2}+4x+1$ at $(0,1)$
:::

:::exercise {fs-id1169739376112} type= 
PROBLEM:
**[T]** $y=\frac{2}{{x}^{2}}+1$ at $(1,3)$
SOLUTION:

> IMAGE {img:fs-id1169739376162} src=../../media/CNX_Calc_Figure_03_03_202.jpg
> alt: The graph y is a slightly curving line with y intercept at 1. The line T(x) is straight with y intercept 3 and slope 1/2.

$T(x)=-4x+7$
:::

:::exercise {fs-id1169739376207} type= 
PROBLEM:
**[T]** $y=\frac{2x}{x-1}$ at $(−1,1)$
:::

:::exercise {fs-id1169739345852} type= 
PROBLEM:
**[T]** $y=\frac{2}{x}-\frac{3}{{x}^{2}}$ at $(1,−1)$
SOLUTION:

> IMAGE {img:fs-id1169739345913} src=../../media/CNX_Calc_Figure_03_03_204.jpg
> alt: The graph y is a two crescents with the crescent in the third quadrant sloping gently from (−3, −1) to (−1, −5) and the other crescent sloping more sharply from (0.8, −5) to (3, 0.2). The straight line T(x) is drawn through (0, −5) with slope 4.

$T(x)=4x-5$
:::
For the following exercises, assume that $f(x)$ and $g(x)$ are both differentiable functions for all $x.$ Find the derivative of each of the functions $h(x).$

:::exercise {fs-id1169739273616} type= 
PROBLEM:
$h(x)=4f(x)+\frac{g(x)}{7}$
:::

:::exercise {fs-id1169739273725} type= 
PROBLEM:
$h(x)={x}^{3}f(x)$
SOLUTION:
${h}^{'}(x)=3{x}^{2}f(x)+{x}^{3}{f}^{'}(x)$
:::

:::exercise {fs-id1169739325594} type= 
PROBLEM:
$h(x)=\frac{f(x)g(x)}{2}$
:::

:::exercise {fs-id1169739304919} type= 
PROBLEM:
$h(x)=\frac{3f(x)}{g(x)+2}$
SOLUTION:
${h}^{'}(x)=\frac{3{f}^{'}(x)(g(x)+2)-3f(x){g}^{'}(x)}{{(g(x)+2)}^{2}}$
:::
For the following exercises, assume that $f(x)$ and $g(x)$ are both differentiable functions with values as given in the following table. Use the following table to calculate the following derivatives.

> TABLE {tab:fs-id1169736597684} cols=5 class=unnumbered column-header
> summary: This table has five rows and five columns. The first column is a header column and it labels each row. The row headers from top to bottom are x, f(x), g(x), f’(x), and g’(x). To the right of the first row header are the values 1, 2, 3, and 4. To the right of the second row header are the values 3, 5, −2, and 0.To the right of the third row header are the values 2, 3, −4, and 6. To the right of the fourth row header are the values −1, 7, 8, and −3. To the right of the fifth row header are the values 4, 1, 2, and 9.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $1$ | $2$ | $3$ | $4$ |
| **$f(x)$** | $3$ | $5$ | $−2$ | $0$ |
| **$g(x)$** | $2$ | $3$ | $−4$ | $6$ |
| **${f}^{'}(x)$** | $−1$ | $7$ | $8$ | $−3$ |
| **${g}^{'}(x)$** | $4$ | $1$ | $2$ | $9$ |

:::exercise {fs-id1169739275222} type= 
PROBLEM:
Find ${h}^{'}(1)$ if $h(x)=xf(x)+4g(x).$
:::

:::exercise {fs-id1169739275301} type= 
PROBLEM:
Find ${h}^{'}(2)$ if $h(x)=\frac{f(x)}{g(x)}.$
SOLUTION:
$\frac{16}{9}$
:::

:::exercise {fs-id1169739303645} type= 
PROBLEM:
Find ${h}^{'}(3)$ if $h(x)=2x+f(x)g(x).$
:::

:::exercise {fs-id1169739303722} type= 
PROBLEM:
Find ${h}^{'}(4)$ if $h(x)=\frac{1}{x}+\frac{g(x)}{f(x)}.$
SOLUTION:
Undefined
:::
For the following exercises, use the following figure to find the indicated derivatives, if they exist.

> IMAGE {img:fs-id1169739350753} src=../../media/CNX_Calc_Figure_03_03_205.jpg
> alt: Two functions are graphed: f(x) and g(x). The function f(x) starts at (−1, 5) and decreases linearly to (3, 1) at which point it increases linearly to (5, 3). The function g(x) starts at the origin, increases linearly to (2.5, 2.5), and then remains constant at y = 2.5.

:::exercise {fs-id1169739350764} type= 
PROBLEM:
Let $h(x)=f(x)+g(x).$ Find
a. ${h}^{'}(1),$
b. ${h}^{'}(3),$ and
c. ${h}^{'}(4).$
:::

:::exercise {fs-id1169736593509} type= 
PROBLEM:
Let $h(x)=f(x)g(x).$ Find
a. ${h}^{'}(1),$
b. ${h}^{'}(3),$ and
c. ${h}^{'}(4).$
SOLUTION:
a. $2,$ b. does not exist, c. $2.5$
:::

:::exercise {fs-id1169736593638} type= 
PROBLEM:
Let $h(x)=\frac{f(x)}{g(x)}.$ Find
a. ${h}^{'}(1),$
b. ${h}^{'}(3),$ and
c. ${h}^{'}(4).$
:::
For the following exercises,
a. evaluate ${f}^{'}(a),$ and
b. graph the function $f(x)$ and the tangent line at $x=a.$

:::exercise {fs-id1169739266751} type= 
PROBLEM:
**[T]** $f(x)=2{x}^{3}+3x-{x}^{2},a=2$
SOLUTION:
a. 23, b. $y=23x-28$

> IMAGE {img:fs-id1169736655192} src=../../media/CNX_Calc_Figure_03_03_206.jpg
> alt: The graph is a slightly deformed cubic function passing through the origin. The tangent line is drawn through (0, −28) with slope 23.

:::

:::exercise {fs-id1169736655206} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{x}-{x}^{2},a=1$
:::

:::exercise {fs-id1169736655292} type= 
PROBLEM:
**[T]** $f(x)={x}^{2}-{x}^{12}+3x+2,a=0$
SOLUTION:
a. 3, b. $y=3x+2$

> IMAGE {img:fs-id1169739305485} src=../../media/CNX_Calc_Figure_03_03_208.jpg
> alt: The graph starts in the third quadrant, increases quickly and passes through the x axis near −0.9, then increases at a lower rate, passes through (0, 2), increases to (1, 5), and then decreases quickly and passes through the x axis near 1.2.

:::

:::exercise {fs-id1169739305498} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{x}-{x}^{2},a=−1$
:::

:::exercise {fs-id1169739305607} type= 
PROBLEM:
Find an equation of the tangent line to the graph of $f(x)=2{x}^{3}+4{x}^{2}-5x-3$ at $x=−1.$
SOLUTION:
$y=−7x-3$
:::

:::exercise {fs-id1169736662312} type= 
PROBLEM:
Find an equation of the tangent line to the graph of $f(x)={x}^{2}+\frac{4}{x}-10$ at $x=8.$
:::

:::exercise {fs-id1169736662390} type= 
PROBLEM:
Find an equation of the tangent line to the graph of $f(x)=(3x-{x}^{2})(3-x-{x}^{2})$ at $x=1.$
SOLUTION:
$y=−5x+7$
:::

:::exercise {fs-id1169739303423} type= 
PROBLEM:
Find the point on the graph of $f(x)={x}^{3}$ such that the tangent line at that point has an $x$ intercept of 6.
:::

:::exercise {fs-id1169739303473} type= 
PROBLEM:
Find an equation of the line passing through the point $P(3,3)$ and tangent to the graph of $f(x)=\frac{6}{x-1}.$
SOLUTION:
$y=-\frac{3}{2}x+\frac{15}{2}$
:::

:::exercise {fs-id1169739303559} type= 
PROBLEM:
Determine all points on the graph of $f(x)={x}^{3}+{x}^{2}-x-1$ for which
a. the tangent line is horizontal
b. the tangent line has a slope of $−1.$
:::

:::exercise {fs-id1169739335937} type= 
PROBLEM:
Find a quadratic polynomial such that $f(1)=5,{f}^{'}(1)=3$ and ${f}^{''}(1)=−6.$
SOLUTION:
$y=−3{x}^{2}+9x-1$
:::

:::exercise {fs-id1169736613877} type= 
PROBLEM:
A car driving along a freeway with traffic has traveled $s(t)={t}^{3}-6{t}^{2}+9t$ meters in $t$ seconds.
a. Determine the time in seconds when the velocity of the car is 0.
b. Determine the acceleration of the car when the velocity is 0.
:::

:::exercise {fs-id1169736613986} type= 
PROBLEM:
**[T]** A herring swimming along a straight line has traveled $s(t)=\frac{{t}^{2}}{{t}^{2}+2}$ feet in $t$ seconds.
Determine the velocity of the herring when it has traveled 3 seconds.
SOLUTION:
$\frac{12}{121}$ or 0.0992 ft/s
:::

:::exercise {fs-id1169739341321} type= 
PROBLEM:
The population in millions of arctic flounder in the Atlantic Ocean is modeled by the function $P(t)=\frac{8t+3}{0.2{t}^{2}+1},$ where $t$ is measured in years.
a. Determine the initial flounder population.
b. Determine ${P}^{'}(10)$ and briefly interpret the result.
:::

:::exercise {fs-id1169739341415} type= 
PROBLEM:
**[T]** The concentration of antibiotic in the bloodstream $t$ hours after being injected is given by the function $C(t)=\frac{2{t}^{2}+t}{{t}^{3}+50},$ where $C$ is measured in milligrams per liter of blood.
a. Find the rate of change of $C(t).$
b. Determine the rate of change for $t=8,12,24,$ and $36.$
c. Briefly describe what seems to be occurring as the number of hours increases.
SOLUTION:
a. $\frac{−2{t}^{4}-2{t}^{3}+200t+50}{{({t}^{3}+50)}^{2}}$ b. $−0.02395$ mg/L-hr, −0.01344 mg/L-hr, −0.003566 mg/L-hr, −0.001579 mg/L-hr c. The rate at which the concentration of drug in the bloodstream decreases is slowing to 0 as time increases.
:::

:::exercise {fs-id1169739353348} type= 
PROBLEM:
A book publisher has a cost function given by $C(x)=\frac{{x}^{3}+2x+3}{{x}^{2}},$ where *x* is the number of copies of a book in thousands and *C* is the cost, per book, measured in dollars. Evaluate ${C}^{'}(2)$ and explain its meaning.
:::

:::exercise {fs-id1169739353433} type= 
PROBLEM:
**[T]** According to Newton’s law of universal gravitation, the force $F$ between two bodies of constant mass ${m}_{1}$ and ${m}_{2}$ is given by the formula $F=\frac{G{m}_{1}{m}_{2}}{{d}^{2}},$ where $G$ is the gravitational constant and $d$ is the distance between the bodies.
a. Suppose that $G,{m}_{1},\text{and}\;{m}_{2}$ are constants. Find the rate of change of force $F$ with respect to distance $d.$
b. Find the rate of change of force $F$ with gravitational constant $G=6.67\;\times \;{10}^{−11}$ ${\text{Nm}}^{2}\text{/}{\text{kg}}^{2},$ on two bodies 10 meters apart, each with a mass of 1000 kilograms.
SOLUTION:
a. $F'(d)=\frac{−2G{m}_{1}{m}_{2}}{{d}^{3}}$ b. $−1.33\;\times \;{10}^{−7}$ N/m
:::

## Glossary
- {def} **constant multiple rule**: the derivative of a constant *c* multiplied by a function *f* is the same as the constant multiplied by the derivative: $\frac{d}{dx}(cf(x))=c{f}^{'}(x)$
- {def} **constant rule**: the derivative of a constant function is zero: $\frac{d}{dx}(c)=0,$ where *c* is a constant
- {def} **difference rule**: the derivative of the difference of a function *f* and a function *g* is the same as the difference of the derivative of *f* and the derivative of *g*: $\frac{d}{dx}(f(x)-g(x))={f}^{'}(x)-{g}^{'}(x)$
- {def} **power rule**: the derivative of a power function is a function in which the power on $x$ becomes the coefficient of the term and the power on $x$ in the derivative decreases by 1: If $n$ is an integer, then $\frac{d}{dx}{x}^{n}=n{x}^{n-1}$
- {def} **product rule**: the derivative of a product of two functions is the derivative of the first function times the second function plus the derivative of the second function times the first function: $\frac{d}{dx}(f(x)g(x))={f}^{'}(x)g(x)+{g}^{'}(x)f(x)$
- {def} **quotient rule**: the derivative of the quotient of two functions is the derivative of the first function times the second function minus the derivative of the second function times the first function, all divided by the square of the second function: $\frac{d}{dx}(\frac{f(x)}{g(x)})=\frac{{f}^{'}(x)g(x)-{g}^{'}(x)f(x)}{{(g(x))}^{2}}$
- {def} **sum rule**: the derivative of the sum of a function *f* and a function *g* is the same as the sum of the derivative of *f* and the derivative of *g*: $\frac{d}{dx}(f(x)+g(x))={f}^{'}(x)+{g}^{'}(x)$

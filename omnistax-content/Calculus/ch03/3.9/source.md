# Derivatives of Exponential and Logarithmic Functions

## Learning Objectives {section:learning-objectives}
- Find the derivative of exponential functions.
- Find the derivative of logarithmic functions.
- Use logarithmic differentiation to determine the derivative of a function.

So far, we have learned how to differentiate a variety of functions, including trigonometric, inverse, and implicit functions. In this section, we explore derivatives of exponential and logarithmic functions. As we discussed in [Introduction to Functions and Graphs](module:m53472), exponential functions play an important role in modeling population growth and the decay of radioactive materials. Logarithmic functions can help rescale large quantities and are particularly helpful for rewriting complicated expressions.

## Derivative of the Exponential Function
Just as when we found the derivatives of other functions, we can find the derivatives of exponential and logarithmic functions using formulas. As we develop these formulas, we need to make certain basic assumptions. The proofs that these assumptions hold are beyond the scope of this course.
First of all, we begin with the assumption that the function $B(x)={b}^{x},b>0,$ is defined for every real number and is continuous. In previous courses, the values of exponential functions for all rational numbers were defined—beginning with the definition of ${b}^{n},$ where $n$ is a positive integer—as the product of $b$ multiplied by itself $n$ times. Later, we defined ${b}^{0}=1,{b}^{\text{−}n}=\frac{1}{{b}^{n}},$ for a positive integer $n,$ and ${b}^{s\text{/}t}=(\sqrt[t]{b}{)}^{s}$ for positive integers $s$ and $t.$ These definitions leave open the question of the value of ${b}^{r}$ where $r$ is an arbitrary real number. By assuming the *continuity* of $B(x)={b}^{x},b>0,$ we may interpret ${b}^{r}$ as $\lim_{x\to r}{b}^{x}$ where the values of $x$ as we take the limit are rational. For example, we may view ${4}^{\pi}$ as the number satisfying

$\begin{array}{l}{4}^{3}<{4}^{\pi}<{4}^{4},{4}^{3.1}<{4}^{\pi}<{4}^{3.2},{4}^{3.14}<{4}^{\pi}<{4}^{3.15}, \\ {4}^{3.141}<{4}^{\pi}<{4}^{3.142},{4}^{3.1415}<{4}^{\pi}<{4}^{3.1416}\text{,}\text{…}.\end{array}$  {eq:fs-id1169738212703}

As we see in the following table, ${4}^{\pi}\approx 77.88.$

> TABLE {tab:fs-id1169738222068} cols=4
> title: Approximating a Value of ${4}^{\pi}$
> summary: This table has seven rows and four columns. The first row is a header row and it labels each column. The first column header is x, the second column header is 4x, the third column header is x, and the fourth column header is 4x. Under the first column are the values 43, 43.1, 43.14, 43.141, 43.1415. Under the second column are the values 64, 73.5166947198, 77.7084726013, 77.8162741237, 77.8702309526, 77.8799471543. Under the third column are the values 43.141593, 43.1416, 43.142, 43.15, 43.2, and 44. Under the fourth column are the values 77.8802710486, 77.8810268071, 77.9242251944, 78.7932424541, 84.4485062895, and 256.

| $x$ | ${4}^{x}$ | $x$ | ${4}^{x}$ |
| --- | --- | --- | --- |
| $3$ | 64 | $3.141593$ | 77.8802710486 |
| $3.1$ | 73.5166947198 | $3.1416$ | 77.8810268071 |
| $3.14$ | 77.7084726013 | $3.142$ | 77.9242251944 |
| $3.141$ | 77.8162741237 | $3.15$ | 78.7932424541 |
| $3.1415$ | 77.8702309526 | $3.2$ | 84.4485062895 |
| $3.14159$ | 77.8799471543 | $4$ | 256 |

We also assume that for $B(x)={b}^{x},b>0,$ the value ${B}^{'}(0)$ of the derivative exists. In this section, we show that by making this one additional assumption, it is possible to prove that the function $B(x)$ is differentiable everywhere.
We make one final assumption: that there is a unique value of $b>0$ for which ${B}^{'}(0)=1.$ We define $e$ to be this unique value, as we did in [Introduction to Functions and Graphs](module:m53472). [ref:CNX_Calc_Figure_03_09_001] provides graphs of the functions $y={2}^{x},y={3}^{x},y={2.7}^{x},$ and $y={2.8}^{x}.$ A visual estimate of the slopes of the tangent lines to these functions at 0 provides evidence that the value of *e* lies somewhere between 2.7 and 2.8. The function $E(x)={e}^{x}$ is called the {term:natural exponential function}. Its inverse, $L(x)={\text{log}}_{e}x=\text{ln}\;x$ is called the {term:natural logarithmic function}.

> FIGURE {fig:CNX_Calc_Figure_03_09_001} src=../../media/CNX_Calc_Figure_03_09_001.jpg
> alt: The graphs of 3x, 2.8x, 2.7x, and 2x are shown. In quadrant I, their order from least to greatest is 2x, 2.7x, 2.8x, and 3x. In quadrant II, this order is reversed. All cross the y-axis at (0, 1).
> caption: The graph of $E(x)={e}^{x}$ is between $y={2}^{x}$ and $y={3}^{x}.$

For a better estimate of $e,$ we may construct a table of estimates of ${B}^{'}(0)$ for functions of the form $B(x)={b}^{x}.$ Before doing this, recall that

${B}^{'}(0)=\lim_{x\to 0}\frac{{b}^{x}-{b}^{0}}{x-0}=\lim_{x\to 0}\frac{{b}^{x}-1}{x}\approx \frac{{b}^{x}-1}{x}$  {eq:fs-id1169738116003}

for values of $x$ very close to zero. For our estimates, we choose $x=0.00001$ and $x=−0.00001$ to obtain the estimate

$\frac{{b}^{−0.00001}-1}{−0.00001}<{B}^{'}(0)<\frac{{b}^{0.00001}-1}{0.00001}.$  {eq:fs-id1169737725568}

See the following table.

> TABLE {tab:fs-id1169738019199} cols=4
> title: Estimating a Value of $e$
> summary: This table has six rows and four columns. The first row is a header row and it labels each column. The first column header is b, the second column header is (b−0.00001 − 1)/−0.00001 < B’(0) < (b0.00001 − 1)/0.00001, the third column header is b, and the fourth column header is (b−0.00001 − 1)/−0.00001 < B’(0) < (b0.00001 − 1)/0.00001. Under the first column are the values 2, 2.7, 2.71, 2.718, and 2.7182. Under the second column are the values 0.693145<B’(0)<0.69315, 0.993247<B’(0)< 0.993257, 0.996944<B’(0)<0.996954, 0.999891<B’(0)< 0.999901, and 0.999965<B’(0)<0.999975. Under the third column are the values 2.7183, 2.719, 2.72, 2.8, and 3. Under the fourth column are the values 1.000002<B’(0)< 1.000012, 1.000259<B’(0)< 1.000269, 1.000627<B’(0)<1.000637, 1.029614<B’(0)<1.029625, and 1.098606<B’(00<1.098618.

| $b$ | $\frac{{b}^{−0.00001}-1}{−0.00001}<{B}^{'}(0)<\frac{{b}^{0.00001}-1}{0.00001}$ | $b$ | $\frac{{b}^{−0.00001}-1}{−0.00001}<{B}^{'}(0)<\frac{{b}^{0.00001}-1}{0.00001}$ |
| --- | --- | --- | --- |
| $2$ | $0.693145<{B}^{'}(0)<0.69315$ | $2.7183$ | $1.000002<{B}^{'}(0)<1.000012$ |
| $2.7$ | $0.993247<{B}^{'}(0)<0.993257$ | $2.719$ | $1.000259<{B}^{'}(0)<1.000269$ |
| $2.71$ | $0.996944<{B}^{'}(0)<0.996954$ | $2.72$ | $1.000627<{B}^{'}(0)<1.000637$ |
| $2.718$ | $0.999891<{B}^{'}(0)<0.999901$ | $2.8$ | $1.029614<{B}^{'}(0)<1.029625$ |
| $2.7182$ | $0.999965<{B}^{'}(0)<0.999975$ | $3$ | $1.098606<{B}^{'}(0)<1.098618$ |

The evidence from the table suggests that $2.7182<e<2.7183.$
The graph of $E(x)={e}^{x}$ together with the line $y=x+1$ are shown in [ref:CNX_Calc_Figure_03_09_002]. This line is tangent to the graph of $E(x)={e}^{x}$ at $x=0.$

> FIGURE {fig:CNX_Calc_Figure_03_09_002} src=../../media/CNX_Calc_Figure_03_09_002.jpg
> alt: Graph of the function ex along with its tangent at (0, 1), x + 1.
> caption: The tangent line to $E(x)={e}^{x}$ at $x=0$ has slope 1.

Now that we have laid out our basic assumptions, we begin our investigation by exploring the derivative of $B(x)={b}^{x},b>0.$ Recall that we have assumed that ${B}^{'}(0)$ exists. By applying the limit definition to the derivative we conclude that

$$ {B}^{'}(0)=\lim_{h\to 0}\frac{{b}^{0+h}-{b}^{0}}{h}=\lim_{h\to 0}\frac{{b}^{h}-1}{h}. $$  {eq:fs-id1169738045860}

Turning to ${B}^{'}(x),$ we obtain the following.

$\begin{array}{rllll}{B}^{'}(x) & =\lim_{h\to 0}\frac{{b}^{x+h}-{b}^{x}}{h} & & & \text{Apply the limit definition of the derivative.} \\ & =\lim_{h\to 0}\frac{{b}^{x}{b}^{h}-{b}^{x}}{h} & & & \text{Note that}\;{b}^{x+h}={b}^{x}{b}^{h}. \\ & =\lim_{h\to 0}\frac{{b}^{x}({b}^{h}-1)}{h} & & & \text{Factor out}\;{b}^{x}. \\ & ={b}^{x}\lim_{h\to 0}\frac{{b}^{h}-1}{h} & & & \text{Apply a property of limits.} \\ & ={b}^{x}{B}^{'}(0) & & & \text{Use}\;{B}^{'}(0)=\lim_{h\to 0}\frac{{b}^{0+h}-{b}^{0}}{h}=\lim_{h\to 0}\frac{{b}^{h}-1}{h}.\end{array}$  {eq:fs-id1169737954073}

We see that on the basis of the assumption that $B(x)={b}^{x}$ is differentiable at $0,B(x)$ is not only differentiable everywhere, but its derivative is

$$ {B}^{'}(x)={b}^{x}{B}^{'}(0). $$  {eq:fs-id1169738221385}

For $E(x)={e}^{x},{E}^{'}(0)=1.$ Thus, we have ${E}^{'}(x)={e}^{x}.$ (The value of ${B}^{'}(0)$ for an arbitrary function of the form $B(x)={b}^{x},b>0,$ will be derived later.)

:::note [theorem] Derivative of the Natural Exponential Function
Let $E(x)={e}^{x}$ be the natural exponential function. Then

${E}^{'}(x)={e}^{x}.$  {eq:fs-id1169737928243}

In general,

$\frac{d}{dx}({e}^{g(x)})={e}^{g(x)}{g}^{'}(x).$  {eq:fs-id1169738124964}

:::

:::example {ex:fs-id1169738223456} Derivative of an Exponential Function

:::exercise {fs-id1169738223458} type= 
PROBLEM:
Find the derivative of $f(x)={e}^{\text{tan}(2x)}.$
SOLUTION:
Using the derivative formula and the chain rule,

$\begin{array}{rl}{f}^{'}(x) & ={e}^{\text{tan}\;(2x)}\frac{d}{dx}(\text{tan}\;(2x)) \\ & ={e}^{\text{tan}(2x)}{\text{sec}}^{2}(2x)\cdot 2.\end{array}$  {eq:fs-id1169738048872}

:::
:::

:::example {ex:fs-id1169737140879} Combining Differentiation Rules

:::exercise {fs-id1169737140881} type= 
PROBLEM:
Find the derivative of $y=\frac{{e}^{{x}^{2}}}{x}.$
SOLUTION:
Use the derivative of the natural exponential function, the quotient rule, and the chain rule.

$\begin{array}{rllll}{y}^{'} & =\frac{({e}^{{x}^{2}}\cdot 2)x\cdot x-1\cdot {e}^{{x}^{2}}}{{x}^{2}} & & & \text{Apply the quotient rule.} \\ & =\frac{{e}^{{x}^{2}}(2{x}^{2}-1)}{{x}^{2}} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169737928262}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738152553} type= 
PROBLEM:
Find the derivative of $h(x)=x{e}^{2x}.$
SOLUTION:
${h}^{'}(x)={e}^{2x}+2x{e}^{2x}$
COMMENTARY: Hint
Don’t forget to use the product rule.
:::
:::

:::example {ex:fs-id1169737949367} Applying the Natural Exponential Function

:::exercise {fs-id1169737949369} type= 
PROBLEM:
A colony of mosquitoes has an initial population of 1000. After $t$ days, the population is given by $A(t)=1000{e}^{0.3t}.$ Show that the ratio of the rate of change of the population, ${A}^{'}(t),$ to the population, $A(t)$ is constant.
SOLUTION:
First find ${A}^{'}(t).$ By using the chain rule, we have ${A}^{'}(t)=300{e}^{0.3t}.$ Thus, the ratio of the rate of change of the population to the population is given by

$\frac{{A}^{'}(t)}{A(t)}=\frac{300{e}^{0.3t}}{1000{e}^{0.3t}}=0.3.$  {eq:fs-id1169738227689}

The ratio of the rate of change of the population to the population is the constant 0.3.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738186822} type= 
PROBLEM:
If $A(t)=1000{e}^{0.3t}$ describes the mosquito population after $t$ days, as in the preceding example, what is the rate of change of $A(t)$ after 4 days?
SOLUTION:
996
COMMENTARY: Hint
Find ${A}^{'}(4).$
:::
:::

## Derivative of the Logarithmic Function
Now that we have the derivative of the natural exponential function, we can use implicit differentiation to find the derivative of its inverse, the natural logarithmic function.

:::note [theorem] The Derivative of the Natural Logarithmic Function
If $x>0$ and $y=\text{ln}\;x,$ then

$$ \frac{dy}{dx}=\frac{1}{x}. $$  {eq:fs-id1169738223534}

More generally, let $g(x)$ be a differentiable function. For all values of $x$ for which $g(x)>0,$ the derivative of $h(x)=\text{ln}\;(g(x))$ is given by

$$ {h}^{'}(x)=\frac{1}{g(x)}{g}^{'}(x). $$  {eq:fs-id1169737919348}

:::

### Proof
If $x>0$ and $y=\text{ln}\;x,$ then ${e}^{y}=x.$ Differentiating both sides of this equation results in the equation

${e}^{y}\frac{dy}{dx}=1.$  {eq:fs-id1169738212688}

Solving for $\frac{dy}{dx}$ yields

$\frac{dy}{dx}=\frac{1}{{e}^{y}}.$  {eq:fs-id1169738220590}

Finally, we substitute $x={e}^{y}$ to obtain

$\frac{dy}{dx}=\frac{1}{x}.$  {eq:fs-id1169737145231}

We may also derive this result by applying the inverse function theorem, as follows. Since $y=g(x)=\text{ln}\;x$ is the inverse of $f(x)={e}^{x},$ by applying the inverse function theorem we have

$\frac{dy}{dx}=\frac{1}{{f}^{'}(g(x))}=\frac{1}{{e}^{\text{ln}\;x}}=\frac{1}{x}.$  {eq:fs-id1169738070944}

Using this result and applying the chain rule to $h(x)=\text{ln}\;(g(x))$ yields

${h}^{'}(x)=\frac{1}{g(x)}{g}^{'}(x).$  {eq:fs-id1169738106180}

□
The graph of $y=\text{ln}\;x$ and its derivative $\frac{dy}{dx}=\frac{1}{x}$ are shown in [ref:CNX_Calc_Figure_03_09_003].

> FIGURE {fig:CNX_Calc_Figure_03_09_003} src=../../media/CNX_Calc_Figure_03_09_003.jpg
> alt: Graph of the function ln x along with its derivative 1/x. The function ln x is increasing on (0, + ∞). Its derivative is decreasing but greater than 0 on (0, + ∞).
> caption: $\text{The function}\;y=\text{ln}\;x$ is increasing on $(0,\text{+}\infty ).$ Its derivative $y'=\frac{1}{x}$ is greater than zero on $(0,\text{+}\infty ).$

:::example {ex:fs-id1169738211098} Taking a Derivative of a Natural Logarithm

:::exercise {fs-id1169738228370} type= 
PROBLEM:
Find the derivative of $f(x)=\text{ln}\;({x}^{3}+3x-4).$
SOLUTION:
Use [ref:fs-id1169737919348] directly.

$\begin{array}{rllll}{f}^{'}(x) & =\frac{1}{{x}^{3}+3x-4}\cdot (3{x}^{2}+3) & & & \text{Use}\;g(x)={x}^{3}+3x-4\;\text{in}\;{h}^{'}(x)=\frac{1}{g(x)}{g}^{'}(x). \\ & =\frac{3{x}^{2}+3}{{x}^{3}+3x-4} & & & \text{Rewrite.}\end{array}$  {eq:fs-id1169738220266}

:::
:::

:::example {ex:fs-id1169738244488} Using Properties of Logarithms in a Derivative

:::exercise {fs-id1169738106136} type= 
PROBLEM:
Find the derivative of $f(x)=\text{ln}\;(\frac{{x}^{2}\text{sin}\;x}{2x+1}).$
SOLUTION:
At first glance, taking this derivative appears rather complicated. However, by using the properties of logarithms prior to finding the derivative, we can make the problem much simpler.

$\begin{array}{rlllll}f(x) & = & \text{ln}\;(\frac{{x}^{2}\text{sin}\;x}{2x+1})=2\;\text{ln}\;x+\text{ln}\;(\text{sin}\;x)-\text{ln}\;(2x+1) & & & \text{Apply properties of logarithms.} \\ {f}^{'}(x) & = & \frac{2}{x}+\text{cot}\;x-\frac{2}{2x+1} & & & \text{Apply sum rule and}\;{h}^{'}(x)=\frac{1}{g(x)}{g}^{'}(x).\end{array}$  {eq:fs-id1169738219679}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738219657} type= 
PROBLEM:
Differentiate: $f(x)=\text{ln}{(3x+2)}^{5}.$
SOLUTION:
${f}^{'}(x)=\frac{15}{3x+2}$
COMMENTARY: Hint
Use a property of logarithms to simplify before taking the derivative.
:::
:::
Now that we can differentiate the natural logarithmic function, we can use this result to find the derivatives of $y=lo{g}_{b}x$ and $y={b}^{x}$ for $b>0,b≠1.$

:::note [theorem] Derivatives of General Exponential and Logarithmic Functions
Let $b>0,b≠1,$ and let $g(x)$ be a differentiable function.
1. If, $y={\text{log}}_{b}x,$ then

$$ \frac{dy}{dx}=\frac{1}{x\;\text{ln}\;b}. $$  {eq:fs-id1169738105090}

More generally, if $h(x)={\text{log}}_{b}(g(x)),$ then for all values of *x* for which $g(x)>0,$

$$ {h}^{'}(x)=\frac{{g}^{'}(x)}{g(x)\;\text{ln}\;b}. $$  {eq:fs-id1169738186308}

2. If $y={b}^{x},$ then

$$ \frac{dy}{dx}={b}^{x}\text{ln}\;b. $$  {eq:fs-id1169738224034}

More generally, if $h(x)={b}^{g(x)},$ then

$$ {h}^{'}(x)={b}^{g(x)}g\text{′}(x)\;\text{ln}\;b. $$  {eq:fs-id1169738045159}

:::

### Proof
If $y={\text{log}}_{b}x,$ then ${b}^{y}=x.$ It follows that $\text{ln}\;({b}^{y})=\text{ln}\;x.$ Thus $y\;\text{ln}\;b=\text{ln}\;x.$ Solving for $y,$ we have $y=\frac{\text{ln}\;x}{\text{ln}\;b}.$ Differentiating and keeping in mind that $\text{ln}\;b$ is a constant, we see that

$\frac{dy}{dx}=\frac{1}{x\;\text{ln}\;b}.$  {eq:fs-id1169738211798}

The derivative in [ref:fs-id1169738105090] now follows from the chain rule.
If $y={b}^{x},$ then $\text{ln}\;y=x\;\text{ln}\;b.$ Using implicit differentiation, again keeping in mind that $\text{ln}\;b$ is constant, it follows that $\frac{1}{y}\;\frac{dy}{dx}=\text{ln}\;b.$ Solving for $\frac{dy}{dx}$ and substituting $y={b}^{x},$ we see that

$\frac{dy}{dx}=y\;\text{ln}\;b={b}^{x}\text{ln}\;b.$  {eq:fs-id1169737934328}

The more general derivative ([ref:fs-id1169738045159]) follows from the chain rule.
□

:::example {ex:fs-id1169737145066} Applying Derivative Formulas

:::exercise {fs-id1169737145069} type= 
PROBLEM:
Find the derivative of $h(x)=\frac{{3}^{x}}{{3}^{x}+2}.$
SOLUTION:
Use the quotient rule and [ref:fs-id1169738238181].

$\begin{array}{rllll}{h}^{'}(x) & =\frac{{3}^{x}\;\text{ln}\;3({3}^{x}+2)-{3}^{x}\;\text{ln}\;3({3}^{x})}{{({3}^{x}+2)}^{2}} & & & \text{Apply the quotient rule.} \\ & =\frac{2\cdot {3}^{x}\;\text{ln}\;3}{{({3}^{x}+2)}^{2}} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169737700320}

:::
:::

:::example {ex:fs-id1169738219393} Finding the Slope of a Tangent Line

:::exercise {fs-id1169738219395} type= 
PROBLEM:
Find the slope of the line tangent to the graph of $y={\text{log}}_{2}(3x+1)$ at $x=1.$
SOLUTION:
To find the slope, we must evaluate $\frac{dy}{dx}$ at $x=1.$ Using [ref:fs-id1169738186308], we see that

$\frac{dy}{dx}=\frac{3}{(3x+1)\;\text{ln}\;2}.$  {eq:fs-id1169738197861}

By evaluating the derivative at $x=1,$ we see that the tangent line has slope

$\frac{dy}{dx}\left|\begin{array}{l} \\ {}_{x=1}\end{array}\right.=\frac{3}{4\;\text{ln}\;2}=\frac{3}{\;\text{ln}\;16}.$  {eq:fs-id1169738187002}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738240285} type= 
PROBLEM:
Find the slope for the line tangent to $y={3}^{x}$ at $x=2.$
SOLUTION:
$9\;\text{ln}\;(3)$
COMMENTARY: Hint
Evaluate the derivative at $x=2.$
:::
:::

## Logarithmic Differentiation
At this point, we can take derivatives of functions of the form $y={(g(x))}^{n}$ for certain values of $n,$ as well as functions of the form $y={b}^{g(x)},$ where $b>0$ and $b≠1.$ Unfortunately, we still do not know the derivatives of functions such as $y={x}^{x}$ or $y={x}^{\pi}.$ These functions require a technique called {term:logarithmic differentiation}, which allows us to differentiate any function of the form $h(x)=g{(x)}^{f(x)}.$ It can also be used to convert a very complex differentiation problem into a simpler one, such as finding the derivative of $y=\frac{x\sqrt{2x+1}}{{e}^{x}{\text{sin}}^{3}x}.$ We outline this technique in the following problem-solving strategy.

:::note [problem-solving] Using Logarithmic Differentiation
1. To differentiate $y=h(x)$ using logarithmic differentiation, take the natural logarithm of both sides of the equation to obtain $\text{ln}\;y=\text{ln}\;(h(x)).$
2. Use properties of logarithms to expand $\text{ln}\;(h(x))$ as much as possible.
3. Differentiate both sides of the equation. On the left we will have $\frac{1}{y}\;\frac{dy}{dx}.$
4. Multiply both sides of the equation by $y$ to solve for $\frac{dy}{dx}.$
5. Replace $y$ by $h(x).$
:::

:::example {ex:fs-id1169738238112} Using Logarithmic Differentiation

:::exercise {fs-id1169738238115} type= 
PROBLEM:
Find the derivative of $y={(2{x}^{4}+1)}^{\text{tan}\;x}.$
SOLUTION:
Use logarithmic differentiation to find this derivative.

$\begin{array}{rlllll}\text{ln}\;y & = & \text{ln}{(2{x}^{4}+1)}^{\text{tan}\;x} & & & \text{Step 1. Take the natural logarithm of both sides.} \\ \text{ln}\;y & = & \text{tan}\;x\;\text{ln}\;(2{x}^{4}+1) & & & \text{Step 2. Expand using properties of logarithms.} \\ \frac{1}{y}\;\frac{dy}{dx} & = & {\text{sec}}^{2}x\;\text{ln}\;(2{x}^{4}+1)+\frac{8{x}^{3}}{2{x}^{4}+1}\cdot \text{tan}\;x & & & \begin{array}{l}\text{Step 3. Differentiate both sides. Use the} \\ \text{product rule on the right.}\end{array} \\ \frac{dy}{dx} & = & y\cdot ({\text{sec}}^{2}x\;\text{ln}\;(2{x}^{4}+1)+\frac{8{x}^{3}}{2{x}^{4}+1}\cdot \text{tan}\;x) & & & \text{Step 4. Multiply by}\;y\;\text{on both sides.} \\ \frac{dy}{dx} & = & {(2{x}^{4}+1)}^{\text{tan}\;x}({\text{sec}}^{2}x\;\text{ln}\;(2{x}^{4}+1)+\frac{8{x}^{3}}{2{x}^{4}+1}\cdot \text{tan}\;x) & & & \text{Step 5. Substitute}\;y={(2{x}^{4}+1)}^{\text{tan}\;x}.\end{array}$  {eq:fs-id1169738211912}

:::
:::

:::example {ex:fs-id1169738068346} Using Logarithmic Differentiation

:::exercise {fs-id1169738068348} type= 
PROBLEM:
Find the derivative of $y=\frac{x\sqrt{2x+1}}{{e}^{x}{\text{sin}}^{3}x}.$
SOLUTION:
This problem really makes use of the properties of logarithms and the differentiation rules given in this chapter.

$\begin{array}{rlllll}\text{ln}\;y & = & \text{ln}\;\frac{x\sqrt{2x+1}}{{e}^{x}{\text{sin}}^{3}x} & & & \text{Step 1. Take the natural logarithm of both sides.} \\ \text{ln}\;y & = & \text{ln}\;x+\frac{1}{2}\;\text{ln}\;(2x+1)-x\;\text{ln}\;e-3\;\text{ln}\;\text{sin}\;x & & & \text{Step 2. Expand using properties of logarithms.} \\ \frac{1}{y}\;\frac{dy}{dx} & = & \frac{1}{x}+\frac{1}{2x+1}-1-3\frac{\text{cos}\;x}{\text{sin}\;x} & & & \text{Step 3. Differentiate both sides.} \\ \frac{dy}{dx} & = & y(\frac{1}{x}+\frac{1}{2x+1}-1-3\;\text{cot}\;x) & & & \text{Step 4. Multiply by}\;y\;\text{on both sides.} \\ \frac{dy}{dx} & = & \frac{x\sqrt{2x+1}}{{e}^{x}{\text{sin}}^{3}x}(\frac{1}{x}+\frac{1}{2x+1}-1-3\;\text{cot}\;x) & & & \text{Step 5. Substitute}\;y=\frac{x\sqrt{2x+1}}{{e}^{x}{\text{sin}}^{3}x}.\end{array}$  {eq:fs-id1169738201891}

:::
:::

:::example {ex:fs-id1169738228453} Extending the Power Rule

:::exercise {fs-id1169738228455} type= 
PROBLEM:
Find the derivative of $y={x}^{r}$ where $r$ is an arbitrary real number.
SOLUTION:
The process is the same as in [ref:fs-id1169738068346], though with fewer complications.

$\begin{array}{rlllll}\text{ln}\;y & = & \text{ln}{x}^{r} & & & \text{Step 1. Take the natural logarithm of both sides.} \\ \text{ln}\;y & = & r\;\text{ln}\;x & & & \text{Step 2. Expand using properties of logarithms.} \\ \frac{1}{y}\;\frac{dy}{dx} & = & r\frac{1}{x} & & & \text{Step 3. Differentiate both sides.} \\ \frac{dy}{dx} & = & y\frac{r}{x} & & & \text{Step 4. Multiply by}\;y\;\text{on both sides.} \\ \frac{dy}{dx} & = & {x}^{r}\frac{r}{x} & & & \text{Step 5. Substitute}\;y={x}^{r}. \\ \frac{dy}{dx} & = & r{x}^{r-1} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169738228494}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737933513} type= 
PROBLEM:
Use logarithmic differentiation to find the derivative of $y={x}^{x}.$
SOLUTION:
$\frac{dy}{dx}={x}^{x}(1+\text{ln}\;x)$
COMMENTARY: Hint
Follow the problem solving strategy.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737933598} type= 
PROBLEM:
Find the derivative of $y={(\text{tan}\;x)}^{\pi}.$
SOLUTION:
${y}^{'}=\pi {(\text{tan}\;x)}^{\pi -1}{\text{sec}}^{2}x$
COMMENTARY: Hint
Use the result from [ref:fs-id1169738228453].
:::
:::

## Key Concepts {section:key-concepts}
- On the basis of the assumption that the exponential function $y={b}^{x},b>0$ is continuous everywhere and differentiable at 0, this function is differentiable everywhere and there is a formula for its derivative.
- We can use a formula to find the derivative of $y=\text{ln}\;x,$ and the relationship ${\text{log}}_{b}x=\frac{\text{ln}\;x}{\text{ln}\;b}$ allows us to extend our differentiation formulas to include logarithms with arbitrary bases.
- Logarithmic differentiation allows us to differentiate functions of the form $y=g{(x)}^{f(x)}$ or very complex functions by taking the natural logarithm of both sides and exploiting the properties of logarithms before differentiating.

## Key Equations {section:key-equations}

> TABLE {tab:eip-496} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Derivative of the natural exponential function** | $\frac{d}{dx}({e}^{g(x)})={e}^{g(x)}{g}^{'}(x)$ |
| **Derivative of the natural logarithmic function** | $\frac{d}{dx}(\text{ln}\;g(x))=\frac{1}{g(x)}{g}^{'}(x)$ |
| **Derivative of the general exponential function** | $\frac{d}{dx}({b}^{g(x)})={b}^{g(x)}{g}^{'}(x)\;\text{ln}\;b$ |
| **Derivative of the general logarithmic function** | $\frac{d}{dx}({\text{log}}_{b}g(x))=\frac{{g}^{'}(x)}{g(x)\;\text{ln}\;b}$ |

##  {section:section-exercises}
For the following exercises, find ${f}^{'}(x)$ for each function.

:::exercise {fs-id1169738235136} type= 
PROBLEM:
$f(x)={x}^{2}{e}^{x}$
SOLUTION:
$2x{e}^{x}+{x}^{2}{e}^{x}$
:::

:::exercise {fs-id1169738235199} type= 
PROBLEM:
$f(x)=\frac{{e}^{\text{−}x}}{x}$
:::

:::exercise {fs-id1169738085451} type= 
PROBLEM:
$f(x)={e}^{{x}^{3}\text{ln}\;x}$
SOLUTION:
${e}^{{x}^{3}\text{ln}\;x}(3{x}^{2}\text{ln}\;x+{x}^{2})$
:::

:::exercise {fs-id1169738085543} type= 
PROBLEM:
$f(x)=\sqrt{{e}^{2x}+2x}$
:::

:::exercise {fs-id1169738240382} type= 
PROBLEM:
$f(x)=\frac{{e}^{x}-{e}^{\text{−}x}}{{e}^{x}+{e}^{\text{−}x}}$
SOLUTION:
$\frac{4}{{({e}^{x}+{e}^{\text{−}x})}^{2}}$
:::

:::exercise {fs-id1169738240478} type= 
PROBLEM:
$f(x)=\frac{{10}^{x}}{\text{ln}\;10}$
:::

:::exercise {fs-id1169738071335} type= 
PROBLEM:
$f(x)={2}^{4x}+4{x}^{2}$
SOLUTION:
${2}^{4x+2}\cdot \text{ln}\;2+8x$
:::

:::exercise {fs-id1169738071412} type= 
PROBLEM:
$f(x)={3}^{\text{sin}\;3\text{x}}$
:::

:::exercise {fs-id1169738039846} type= 
PROBLEM:
$f(x)={x}^{\pi}\cdot {\pi}^{x}$
SOLUTION:
$\pi {x}^{\pi -1}\cdot {\pi}^{x}+{x}^{\pi}\cdot {\pi}^{x}\text{ln}\;\pi$
:::

:::exercise {fs-id1169738039931} type= 
PROBLEM:
$f(x)=\text{ln}\;(4{x}^{3}+x)$
:::

:::exercise {fs-id1169737904496} type= 
PROBLEM:
$f(x)=\text{ln}\sqrt{5x-7}$
SOLUTION:
$\frac{5}{2(5x-7)}$
:::

:::exercise {fs-id1169737904560} type= 
PROBLEM:
$f(x)={x}^{2}\text{ln}\;9x$
:::

:::exercise {fs-id1169737904626} type= 
PROBLEM:
$f(x)=\text{log}\;(\text{sec}\;x)$
SOLUTION:
$\frac{\text{tan}\;x}{\text{ln}\;10}$
:::

:::exercise {fs-id1169738054394} type= 
PROBLEM:
$f(x)={\text{log}}_{7}{(6{x}^{4}+3)}^{5}$
:::

:::exercise {fs-id1169738054489} type= 
PROBLEM:
$f(x)={2}^{x}\cdot {\text{log}}_{3}{7}^{{x}^{2}-4}$
SOLUTION:
${2}^{x}\cdot \text{ln}\;2\cdot {\text{log}}_{3}{7}^{{x}^{2}-4}+{2}^{x}\cdot \frac{2x\;\text{ln}\;7}{\text{ln}\;3}$
:::
For the following exercises, use logarithmic differentiation to find $\frac{dy}{dx}.$

:::exercise {fs-id1169738199906} type= 
PROBLEM:
$y={x}^{\sqrt{x}}$
:::

:::exercise {fs-id1169738199977} type= 
PROBLEM:
$y={(\text{sin}\;2x)}^{4x}$
SOLUTION:
${(\text{sin}\;2x)}^{4x}[4\cdot \text{ln}\;(\text{sin}\;2x)+8x\cdot \text{cot}\;2x]$
:::

:::exercise {fs-id1169738092208} type= 
PROBLEM:
$y={(\text{ln}\;x)}^{\text{ln}\;x}$
:::

:::exercise {fs-id1169738092313} type= 
PROBLEM:
$y={x}^{{\text{log}}_{2}x}$
SOLUTION:
${x}^{{\text{log}}_{2}x}\cdot \frac{2\;\text{ln}\;x}{x\;\text{ln}\;2}$
:::

:::exercise {fs-id1169738092392} type= 
PROBLEM:
$y={({x}^{2}-1)}^{\text{ln}\;x}$
:::

:::exercise {fs-id1169738039194} type= 
PROBLEM:
$y={x}^{\text{cot}\;x}$
SOLUTION:
${x}^{\text{cot}\;x}\cdot [\text{−}{\text{csc}}^{2}x\cdot \text{ln}\;x+\frac{\text{cot}\;x}{x}]$
:::

:::exercise {fs-id1169738039285} type= 
PROBLEM:
$y=\frac{x+11}{\sqrt[3]{{x}^{2}-4}}$
:::

:::exercise {fs-id1169738094022} type= 
PROBLEM:
$y={x}^{−1\text{/}2}{({x}^{2}+3)}^{2\text{/}3}{(3x-4)}^{4}$
SOLUTION:
${x}^{−1\text{/}2}{({x}^{2}+3)}^{2\text{/}3}{(3x-4)}^{4}\cdot [\frac{−1}{2x}+\frac{4x}{3({x}^{2}+3)}+\frac{12}{3x-4}]$
:::

:::exercise {fs-id1169738209953} type= 
PROBLEM:
**[T]** Find an equation of the tangent line to the graph of $f(x)=4x{e}^{({x}^{2}-1)}$ at the point where
$x=−1.$ Graph both the function and the tangent line.
:::

:::exercise {fs-id1169738210057} type= 
PROBLEM:
**[T]** Find an equation of the line that is normal to the graph of $f(x)=x\cdot {5}^{x}$ at the point where $x=1.$ Graph both the function and the normal line.
SOLUTION:

> IMAGE {img:fs-id1169738080243} src=../../media/CNX_Calc_Figure_03_09_202.jpg
> alt: The function starts at (−3, 0), decreases slightly and then increases through the origin and increases to (1.25, 10). There is a straight line marked T(x) with slope −1/(5 + 5 ln 5) and y intercept 5 + 1/(5 + 5 ln 5).

$y=\frac{−1}{5+5\;\text{ln}\;5}x+(5+\frac{1}{5+5\;\text{ln}\;5})$
:::

:::exercise {fs-id1169738080322} type= 
PROBLEM:
**[T]** Find an equation of the tangent line to the graph of ${x}^{3}-x\;\text{ln}\;y+{y}^{3}=2x+5$ at the point (2, 1). (*Hint*: Use implicit differentiation to find $\frac{dy}{dx}.)$ Graph both the curve and the tangent line.
:::

:::exercise {fs-id1169738094644} type= 
PROBLEM:
Consider the function $y={x}^{1\text{/}x}$ for $x>0.$
a. Determine the points on the graph where the tangent line is horizontal.
b. Determine the points on the graph where ${y}^{'}>0$ and those where ${y}^{'}<0.$
SOLUTION:
a. $x=e\sim 2.718$ b. $y'>0\text{on}(0,e);y'<0\text{on}(e,\infty )$
:::

:::exercise {fs-id1169738094772} type= 
PROBLEM:
The formula $I(t)=\frac{\text{sin}\;t}{{e}^{t}}$ is the formula for a decaying alternating current.
a. Complete the following table with the appropriate values.

> TABLE {tab:fs-id1169738094824} cols=2 class=unnumbered
> summary: This table has two columns and 10 rows. The first column reads t, 0, π/2, π, 3π/2, 2π, 5π/2, 3π, 7π/2, and 4π. The second column reads (sin t)/et, (i), (ii), (iii), (iv), (v), (vi), (vii), (viii), and (ix).

| $t$ | $\frac{\text{sin}\;t}{{e}^{t}}$ |
| --- | --- |
| 0 | (i) |
| $\frac{\pi}{2}$ | (ii) |
| $\pi$ | (iii) |
| $\frac{3\pi}{2}$ | (iv) |
| $2\pi$ | (v) |
| $\frac{5\pi}{2}$ | (vi) |
| $3\pi$ | (vii) |
| $\frac{7\pi}{2}$ | (viii) |
| $4\pi$ | (ix) |

b. Using only the values in the table, determine where the tangent line to the graph of $I(t)$ is horizontal.
:::

:::exercise {fs-id1169738229480} type= 
PROBLEM:
**[T]** The population of Toledo, Ohio, in 2000 was approximately 500,000. Assume the population is increasing at a rate of 5% per year.
a. Write the exponential function that relates the total population as a function of $t.$
b. Use a. to determine the rate at which the population is increasing in $t$ years.
c. Use b. to determine the rate at which the population is increasing in 10 years.
SOLUTION:
a. $P=500,000{(1.05)}^{t}$ individuals b. ${P}^{'}(t)=24395\cdot {(1.05)}^{t}$ individuals per year c. $39,737$ individuals per year
:::

:::exercise {fs-id1169738229590} type= 
PROBLEM:
**[T]** An isotope of the element erbium has a half-life of approximately 12 hours. Initially there are 9 grams of the isotope present.
a. Write the exponential function that relates the amount of substance remaining as a function of $t,$ measured in hours.
b. Use a. to determine the rate at which the substance is decaying in $t$ hours.
c. Use b. to determine the rate of decay at $t=4$ hours.
:::

:::exercise {fs-id1169738220789} type= 
PROBLEM:
**[T]** The number of cases of influenza in New York City from the beginning of 1960 to the beginning of 1964 is modeled by the function
$N(t)=5.3{e}^{0.093{t}^{2}-0.87t},(0\le t\le 4),$ where $N(t)$ gives the number of cases (in thousands) and *t* is measured in years, with $t=0$ corresponding to the beginning of 1960.
a. Show work that evaluates $N(0)$ and $N(4).$ Briefly describe what these values indicate about the disease in New York City.
b. Show work that evaluates ${N}^{'}(0)$ and ${N}^{'}(3).$ Briefly describe what these values indicate about the disease in New York City.
SOLUTION:
a. At the beginning of 1960 there were 5.3 thousand cases of the disease in New York City. At the beginning of 1964 there were approximately 723 cases of the disease in the United States. b. At the beginning of 1960 the number of cases of the disease was decreasing at rate of $−4.611$ thousand per year; at the beginning of 1963, the number of cases of the disease was decreasing at a rate of $−0.2808$ thousand per year.
:::

:::exercise {fs-id1169737922901} type= 
PROBLEM:
**[T]** The *relative rate of change* of a differentiable function $y=f(x)$ is given by $\frac{100\cdot {f}^{'}(x)}{f(x)}\text{\%}.$ One model for population growth is a Gompertz growth function, given by $P(x)=a{e}^{\text{−}b\cdot {e}^{\text{−}cx}}$ where $a,b,$ and $c$ are constants.
a. Find the relative rate of change formula for the generic Gompertz function.
b. Use a. to find the relative rate of change of a population in $x=20$ months when $a=204,b=0.0198,$ and $c=0.15.$
c. Briefly interpret what the result of b. means.
:::
For the following exercises, use the population of New York City from 1790 to 1860, given in the following table.

> TABLE {tab:fs-id1169738227097} cols=2
> title: New York City Population Over Time
> caption: Source: http://en.wikipedia.org/wiki/Largest_cities_in_the_United_States
_by_population_by_decade.
> summary: This table has nine rows and two columns. The first row is a header row and it labels each column. The first column header is Years since 1790 and the second column is Population. Under the first column are the values 0, 10, 20, 30, 40, 50, 60, and 70. Under the second column are the values 33,131; 60,515; 96,373; 123,706; 202,300; 312,710; 515,547; and 813,669.

| Years since 1790 | Population |
| --- | --- |
| 0 | 33,131 |
| 10 | 60,515 |
| 20 | 96,373 |
| 30 | 123,706 |
| 40 | 202,300 |
| 50 | 312,710 |
| 60 | 515,547 |
| 70 | 813,669 |

:::exercise {fs-id1169738066609} type= 
PROBLEM:
**[T]** Using a computer program or a calculator, fit a growth curve to the data of the form $p=a{b}^{t}.$
SOLUTION:
$p=35741{(1.045)}^{t}$
:::

:::exercise {fs-id1169738066665} type= 
PROBLEM:
**[T]** Using the exponential best fit for the data, write a table containing the derivatives evaluated at each year.
:::

:::exercise {fs-id1169738071156} type= 
PROBLEM:
**[T]** Using the exponential best fit for the data, write a table containing the second derivatives evaluated at each year.
SOLUTION:

> TABLE {tab:fs-id1169738071176} cols=2 class=unnumbered
> summary: This table has nine rows and two columns. The first row is a header row and it labels each column. The first column header is Years since 1790 and the second column is P’’. Under the first column are the values 0, 10, 20, 30, 40, 50, 60, and 70. Under the second column are the values 69.25, 107.5, 167.0, 259.4, 402.8, 625.5, 971.4, and 1508.5.

| Years since 1790 | ${P}^{''}$ |
| --- | --- |
| 0 | 69.25 |
| 10 | 107.5 |
| 20 | 167.0 |
| 30 | 259.4 |
| 40 | 402.8 |
| 50 | 625.5 |
| 60 | 971.4 |
| 70 | 1508.5 |

:::

:::exercise {fs-id1169738040664} type= 
PROBLEM:
**[T]** Using the tables of first and second derivatives and the best fit, answer the following questions:
a. Will the model be accurate in predicting the future population of New York City? Why or why not?
b. Estimate the population in 2010. Was the prediction correct from a.?
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*? Justify the answer with a proof or a counterexample.

:::exercise {fs-id1169738040717} type= 
PROBLEM:
Every function has a derivative.
SOLUTION:
False.
:::

:::exercise {fs-id1169738040733} type= 
PROBLEM:
A continuous function has a continuous derivative.
:::

:::exercise {fs-id1169738040749} type= 
PROBLEM:
A continuous function has a derivative.
SOLUTION:
False
:::

:::exercise {fs-id1169738040765} type= 
PROBLEM:
If a function is differentiable, it is continuous.
:::
Use the limit definition of the derivative to exactly evaluate the derivative.

:::exercise {fs-id1169738040784} type= 
PROBLEM:
$f(x)=\sqrt{x+4}$
SOLUTION:
$\frac{1}{2\sqrt{x+4}}$
:::

:::exercise {fs-id1169738230342} type= 
PROBLEM:
$f(x)=\frac{3}{x}$
:::
Find the derivatives of the following functions.

:::exercise {fs-id1169738230392} type= 
PROBLEM:
$f(x)=3{x}^{3}-\frac{4}{{x}^{2}}$
SOLUTION:
$9{x}^{2}+\frac{8}{{x}^{3}}$
:::

:::exercise {fs-id1169738230460} type= 
PROBLEM:
$f(x)={(4-{x}^{2})}^{3}$
:::

:::exercise {fs-id1169738230535} type= 
PROBLEM:
$f(x)={e}^{\text{sin}\;x}$
SOLUTION:
${e}^{\text{sin}\;x}\text{cos}\;x$
:::

:::exercise {fs-id1169738191916} type= 
PROBLEM:
$f(x)=\text{ln}\;(x+2)$
:::

:::exercise {fs-id1169738191971} type= 
PROBLEM:
$f(x)={x}^{2}\text{cos}\;x+x\;\text{tan}\;(x)$
SOLUTION:
$x\;{\text{sec}}^{2}(x)+2x\;\text{cos}\;(x)+\text{tan}\;(x)-{x}^{2}\text{sin}\;(x)$
:::

:::exercise {fs-id1169738192095} type= 
PROBLEM:
$f(x)=\sqrt{3{x}^{2}+2}$
:::

:::exercise {fs-id1169738082288} type= 
PROBLEM:
$f(x)=\frac{x}{4}\;{\text{sin}}^{−1}(x)$
SOLUTION:
$\frac{1}{4}(\frac{x}{\sqrt{1-{x}^{2}}}+{\text{sin}}^{−1}(x))$
:::

:::exercise {fs-id1169738082383} type= 
PROBLEM:
${x}^{2}y=(y+2)+xy\;\text{sin}\;(x)$
:::
Find the following derivatives of various orders.

:::exercise {fs-id1169738239323} type= 
PROBLEM:
First derivative of $y=x\;\text{ln}\;(x)\;\text{cos}\;x$
SOLUTION:
$\text{cos}\;x\cdot (\text{ln}\;x+1)-x\;\text{ln}\;(x)\;\text{sin}\;x$
:::

:::exercise {fs-id1169738239420} type= 
PROBLEM:
Third derivative of $y={(3x+2)}^{2}$
:::

:::exercise {fs-id1169738239462} type= 
PROBLEM:
Second derivative of $y={4}^{x}+{x}^{2}\text{sin}\;(x)$
SOLUTION:
${4}^{x}{(\text{ln}\;4)}^{2}+2\;\text{sin}\;x+4x\;\text{cos}\;x-{x}^{2}\text{sin}\;x$
:::
Find an equation of the tangent line to the following equations at the specified point.

:::exercise {fs-id1169738226411} type= 
PROBLEM:
$y={\text{cos}}^{−1}(x)+x$ at $x=0$
:::

:::exercise {fs-id1169738226472} type= 
PROBLEM:
$y=x+{e}^{x}-\frac{1}{x}$ at $x=1$
SOLUTION:
$T=(2+e)x-2$
:::
Draw the derivative for the following graphs.

:::exercise {fs-id1169738226547} type= 
PROBLEM:

> IMAGE {img:fs-id1169738226555} src=../../media/CNX_Calc_Figure_03_09_204.jpg
> alt: The function begins at (−3, 0.5) and decreases to a local minimum at (−2.3, −2). Then the function increases through (−1.5, 0) and slows its increase through (0, 2). It then slowly increases to a local maximum at (2.3, 6) before decreasing to (3, 3).

:::

:::exercise {fs-id1169738226588} type= 
PROBLEM:

> IMAGE {img:fs-id1169738226594} src=../../media/CNX_Calc_Figure_03_09_206.jpg
> alt: The function decreases linearly from (−1, 4) to the origin, at which point it increases as x2, passing through (1, 1) and (2, 4).

SOLUTION:

> IMAGE {img:fs-id1169738226614} src=../../media/CNX_Calc_Figure_03_09_207.jpg
> alt: The function is the straight line y = −4 until x = 0, at which point it becomes a straight line starting at the origin with slope 2. There is no value assigned for this function at x = 0.

:::
The following questions concern the water level in Ocean City, New Jersey, in January, which can be approximated by $w(t)=1.9+2.9\;\text{cos}\;(\frac{\pi}{6}t),$ where *t* is measured in hours after midnight, and the height is measured in feet.

:::exercise {fs-id1169738138040} type= 
PROBLEM:
Find and graph the derivative. What is the physical meaning?
:::

:::exercise {fs-id1169738138102} type= 
PROBLEM:
Find ${w}^{'}(3).$ What is the physical meaning of this value?
SOLUTION:
${w}^{'}(3)=-\frac{2.9\pi}{6}.$ At 3 a.m. the tide is decreasing at a rate of 1.518 ft/hr.
:::
The following questions consider the wind speeds of Hurricane Katrina, which affected New Orleans, Louisiana, in August 2005. The data are displayed in a table.

> TABLE {tab:fs-id1169738138171} cols=2
> title: Wind Speeds of Hurricane Katrina
> caption: Source: http://news.nationalgeographic.com/news/2005/09/0914_050914_katrina_timeline.html.
> summary: This table has eleven rows and two columns. The first row is a header row and it labels each column. The first column header is Hours after Midnight, August 26 and the second column is Wind Speed (mph). Under the first column are the values 1, 5, 11, 29, 49, 58, 73, 81, 85, and 107. Under the second column are the values 45, 75, 100, 115, 145, 175, 155, 125, 95, and 35.

| Hours after Midnight, August 26 | Wind Speed (mph) |
| --- | --- |
| 1 | 45 |
| 5 | 75 |
| 11 | 100 |
| 29 | 115 |
| 49 | 145 |
| 58 | 175 |
| 73 | 155 |
| 81 | 125 |
| 85 | 95 |
| 107 | 35 |

:::exercise {fs-id1169738074859} type= 
PROBLEM:
Using the table, estimate the derivative of the wind speed at hour 39. What is the physical meaning?
:::

:::exercise {fs-id1169738074887} type= 
PROBLEM:
Estimate the derivative of the wind speed at hour 83. What is the physical meaning?
SOLUTION:
$−7.5.$ The wind speed is decreasing at a rate of 7.5 mph/hr
:::

## Glossary
- {def} **logarithmic differentiation**: is a technique that allows us to differentiate a function by first taking the natural logarithm of both sides of an equation, applying properties of logarithms to simplify the equation, and differentiating implicitly

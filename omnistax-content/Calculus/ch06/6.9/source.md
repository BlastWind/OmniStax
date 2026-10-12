# Calculus of the Hyperbolic Functions

## Learning Objectives {section:learning-objectives}
- Apply the formulas for derivatives and integrals of the hyperbolic functions.
- Apply the formulas for the derivatives of the inverse hyperbolic functions and their associated integrals.
- Describe the common applied conditions of a catenary curve.

We were introduced to hyperbolic functions in [Introduction to Functions and Graphs](module:m53481), along with some of their basic properties. In this section, we look at differentiation and integration formulas for the hyperbolic functions and their inverses.

## Derivatives and Integrals of the Hyperbolic Functions
Recall that the hyperbolic sine and hyperbolic cosine are defined as

$\text{sinh}\;x=\frac{{e}^{x}-{e}^{\text{−}x}}{2}\;\text{and}\;\text{cosh}\;x=\frac{{e}^{x}+{e}^{\text{−}x}}{2}.$  {eq:fs-id1167793288534}

The other hyperbolic functions are then defined in terms of $\text{sinh}\;x$ and $\text{cosh}\;x.$ The graphs of the hyperbolic functions are shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_09_001} src=../../media/CNX_Calc_Figure_06_09_001.jpg
> alt: This figure has six graphs. The first graph labeled “a” is of the function y=sinh(x). It is an increasing function from the 3rd quadrant, through the origin to the first quadrant. The second graph is labeled “b” and is of the function y=cosh(x). It decreases in the second quadrant to the intercept y=1, then becomes an increasing function. The third graph labeled “c” is of the function y=tanh(x). It is an increasing function from the third quadrant, through the origin, to the first quadrant. The fourth graph is labeled “d” and is of the function y=coth(x). It has two pieces, one in the third quadrant and one in the first quadrant with a vertical asymptote at the y-axis. The fifth graph is labeled “e” and is of the function y=sech(x). It is a curve above the x-axis, increasing in the second quadrant, to the y-axis at y=1 and then decreases. The sixth graph is labeled “f” and is of the function y=csch(x). It has two pieces, one in the third quadrant and one in the first quadrant with a vertical asymptote at the y-axis.
> caption: Graphs of the hyperbolic functions.

It is easy to develop differentiation formulas for the hyperbolic functions. For example, looking at $\text{sinh}\;x$ we have

$\begin{array}{rl}\frac{d}{dx}(\text{sinh}\;x) & =\frac{d}{dx}(\frac{{e}^{x}-{e}^{\text{−}x}}{2}) \\ & =\frac{1}{2}[\frac{d}{dx}({e}^{x})-\frac{d}{dx}({e}^{\text{−}x})] \\ & =\frac{1}{2}[{e}^{x}+{e}^{\text{−}x}]=\text{cosh}\;x.\end{array}$  {eq:fs-id1167794049237}

Similarly, $(d\text{/}dx)\text{cosh}\;x=\text{sinh}\;x.$ We summarize the differentiation formulas for the hyperbolic functions in the following table.

> TABLE {tab:fs-id1167793363804} cols=2
> title: Derivatives of the Hyperbolic Functions
> summary: This is a table of two columns. The first column is labeled f(x). Its entries are the hyperbolic trigonometric functions. The second column is labeled d/dx f(x) and is the corresponding derivatives of the hyperbolic trigonometric functions.

| $f(x)$ | $\frac{d}{dx}f(x)$ |
| --- | --- |
| $\text{sinh}\;x$ | $\text{cosh}\;x$ |
| $\text{cosh}\;x$ | $\text{sinh}\;x$ |
| $\text{tanh}\;x$ | ${\text{sech}}^{2}\;x$ |
| $\text{coth}\;x$ | $\text{−}{\text{csch}}^{2}\;x$ |
| $\text{sech}\;x$ | $\text{−}\text{sech}\;x\;\text{tanh}\;x$ |
| $\text{csch}\;x$ | $\text{−}\text{csch}\;x\;\text{coth}\;x$ |

Let’s take a moment to compare the derivatives of the hyperbolic functions with the derivatives of the standard trigonometric functions. There are a lot of similarities, but differences as well. For example, the derivatives of the sine functions match: $(d\text{/}dx)\text{sin}\;x=\text{cos}\;x$ and $(d\text{/}dx)\text{sinh}\;x=\text{cosh}\;x.$ The derivatives of the cosine functions, however, differ in sign: $(d\text{/}dx)\text{cos}\;x=\text{−}\text{sin}\;x,$ but $(d\text{/}dx)\text{cosh}\;x=\text{sinh}\;x.$ As we continue our examination of the hyperbolic functions, we must be mindful of their similarities and differences to the standard trigonometric functions.
These differentiation formulas for the hyperbolic functions lead directly to the following integral formulas.

$\begin{array}{rllllrll}{\displaystyle \int \text{sinh}\;u\;d}u & = & \text{cosh}\;u+C & & & {\displaystyle \int {\text{csch}}^{2}\;u\;d}u & = & \text{−}\text{coth}\;u+C \\ {\displaystyle \int \text{cosh}\;u\;d}u & = & \text{sinh}\;u+C & & & {\displaystyle \int \text{sech}\;u\;\text{tanh}\;u\;d}u & = & \text{−}\text{sech}\;u+C \\ {\displaystyle \int {\text{sech}}^{2}u\;d}u & = & \text{tanh}\;u+C & & & {\displaystyle \int \text{csch}\;u\;\text{coth}\;u\;d}u & = & \text{−}\text{csch}\;u+C\end{array}$  {eq:fs-id1167793944458}

:::example {ex:fs-id1167793852238} Differentiating Hyperbolic Functions

:::exercise {fs-id1167793936071} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dx}(\text{sinh}({x}^{2}))$
b. $\frac{d}{dx}{(\text{cosh}\;x)}^{2}$
SOLUTION:
Using the formulas in [ref:fs-id1167793363804] and the chain rule, we get
a. $\frac{d}{dx}(\text{sinh}({x}^{2}))=\text{cosh}({x}^{2})\cdot 2x$
b. $\frac{d}{dx}{(\text{cosh}\;x)}^{2}=2\;\text{cosh}\;x\;\text{sinh}\;x$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794145876} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dx}(\text{tanh}({x}^{2}+3x))$
b. $\frac{d}{dx}(\frac{1}{{(\text{sinh}\;x)}^{2}})$
SOLUTION:
a. $\frac{d}{dx}(\text{tanh}({x}^{2}+3x))=({\text{sech}}^{2}({x}^{2}+3x))(2x+3)$
b. $\frac{d}{dx}(\frac{1}{{(\text{sinh}\;x)}^{2}})=\frac{d}{dx}{(\text{sinh}\;x)}^{−2}=−2{(\text{sinh}\;x)}^{−3}\text{cosh}\;x$
COMMENTARY: Hint
Use the formulas in [ref:fs-id1167793363804] and apply the chain rule as necessary.
:::
:::

:::example {ex:fs-id1167793279424} Integrals Involving Hyperbolic Functions

:::exercise {fs-id1167794051555} type= 
PROBLEM:
Evaluate the following integrals:
a. ${\displaystyle \int x\;\text{cosh}({x}^{2})d}x$
b. ${\displaystyle \int \text{tanh}\;x\;d}x$
SOLUTION:
We can use *u*-substitution in both cases.
a. Let $u={x}^{2}.$ Then, $du=2x\;dx$ and

${\displaystyle \int x\;\text{cosh}({x}^{2})d}x={\displaystyle \int \frac{1}{2}}\text{cosh}\;u\;du=\frac{1}{2}\text{sinh}\;u+C=\frac{1}{2}\text{sinh}({x}^{2})+C.$  {eq:fs-id1167794337482}

b. Let $u=\text{cosh}\;x.$ Then, $du=\text{sinh}\;x\;dx$ and

${\displaystyle \int \text{tanh}\;x\;d}x={\displaystyle \int \frac{\text{sinh}\;x}{\text{cosh}\;x}d}x={\displaystyle \int \frac{1}{u}d}u=\text{ln}|u|+C=\text{ln}|\text{cosh}\;x|+C.$  {eq:fs-id1167794043265}

Note that $\text{cosh}\;x>0$ for all $x,$ so we can eliminate the absolute value signs and obtain

${\displaystyle \int \text{tanh}\;x\;d}x=\text{ln}(\text{cosh}\;x)+C.$  {eq:fs-id1167793358384}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794146347} type= 
PROBLEM:
Evaluate the following integrals:
a. ${\displaystyle \int {\text{sinh}}^{3}x\;\text{cosh}\;x\;d}x$
b. ${\displaystyle \int {\text{sech}}^{2}(3x)d}x$
SOLUTION:
a. ${\displaystyle \int {\text{sinh}}^{3}x\;\text{cosh}\;x\;d}x=\frac{{\text{sinh}}^{4}x}{4}+C$
b. ${\displaystyle \int {\text{sech}}^{2}(3x)d}x=\frac{\text{tanh}(3x)}{3}+C$
COMMENTARY: Hint
Use the formulas above and apply *u*-substitution as necessary.
:::
:::

## Calculus of Inverse Hyperbolic Functions
Looking at the graphs of the hyperbolic functions, we see that with appropriate range restrictions, they all have inverses. Most of the necessary range restrictions can be discerned by close examination of the graphs. The domains and ranges of the inverse hyperbolic functions are summarized in the following table.

> TABLE {tab:fs-id1167793362111} cols=3
> title: Domains and Ranges of the Inverse Hyperbolic Functions
> summary: This table has three columns. The first column is labeled function and has the inverse hyperbolic functions listed in the column. The second column is labeled domain and has the domains of the inverse hyperbolic functions. The third column is labeled range and has the ranges of the inverse hyperbolic functions.

| Function | Domain | Range |
| --- | --- | --- |
| ${\text{sinh}}^{−1}x$ | $(\text{−}\infty ,\infty )$ | $(\text{−}\infty ,\infty )$ |
| ${\text{cosh}}^{−1}x$ | $[1,\infty )$ | $[0,\infty )$ |
| ${\text{tanh}}^{−1}x$ | $(−1,1)$ | $(\text{−}\infty ,\infty )$ |
| ${\text{coth}}^{−1}x$ | $(\text{−}\infty ,−1)\cup (1,\infty )$ | $(\text{−}\infty ,0)\cup (0,\infty )$ |
| ${\text{sech}}^{−1}x$ | $(0\text{, 1}]$ | $[0,\infty )$ |
| ${\text{csch}}^{−1}x$ | $(\text{−}\infty ,0)\cup (0,\infty )$ | $(\text{−}\infty ,0)\cup (0,\infty )$ |

The graphs of the inverse hyperbolic functions are shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_09_002} src=../../media/CNX_Calc_Figure_06_09_002.jpg
> alt: This figure has six graphs. The first graph labeled “a” is of the function y=sinh^-1(x). It is an increasing function from the 3rd quadrant, through the origin to the first quadrant. The second graph is labeled “b” and is of the function y=cosh^-1(x). It is in the first quadrant, beginning on the x-axis at 2 and increasing. The third graph labeled “c” is of the function y=tanh^-1(x). It is an increasing function from the third quadrant, through the origin, to the first quadrant. The fourth graph is labeled “d” and is of the function y=coth^-1(x). It has two pieces, one in the third quadrant and one in the first quadrant with a vertical asymptote at the y-axis. The fifth graph is labeled “e” and is of the function y=sech^-1(x). It is a curve decreasing in the first quadrant and stopping on the x-axis at x=1. The sixth graph is labeled “f” and is of the function y=csch^-1(x). It has two pieces, one in the third quadrant and one in the first quadrant with a vertical asymptote at the y-axis.
> caption: Graphs of the inverse hyperbolic functions.

To find the derivatives of the inverse functions, we use implicit differentiation. We have

$\begin{array}{rll}y & = & {\text{sinh}}^{−1}\;x \\ \text{sinh}\;y & = & x \\ \frac{d}{dx}\text{sinh}\;y & = & \frac{d}{dx}x \\ \text{cosh}\;y\frac{dy}{dx} & = & 1.\end{array}$  {eq:fs-id1167793959214}

Recall that ${\text{cosh}}^{2}y-{\text{sinh}}^{2}y=1,$ so $\text{cosh}\;y=\sqrt{1+{\text{sinh}}^{2}y}.$ Then,

$\frac{dy}{dx}=\frac{1}{\text{cosh}\;y}=\frac{1}{\sqrt{1+{\text{sinh}}^{2}y}}=\frac{1}{\sqrt{1+{x}^{2}}}.$  {eq:fs-id1167794042534}

We can derive differentiation formulas for the other inverse hyperbolic functions in a similar fashion. These differentiation formulas are summarized in the following table.

> TABLE {tab:fs-id1167794020892} cols=2
> title: Derivatives of the Inverse Hyperbolic Functions
> summary: This table has two columns. The first column is labeled f(x) and has the inverse hyperbolic functions as entries. The second column is labeled d/dx f(x) and is the derivatives of the inverse hyperbolic functions.

| $f(x)$ | $\frac{d}{dx}f(x)$ |
| --- | --- |
| ${\text{sinh}}^{−1}x$ | $\frac{1}{\sqrt{1+{x}^{2}}}$ |
| ${\text{cosh}}^{−1}x$ | $\frac{1}{\sqrt{{x}^{2}-1}}$ |
| ${\text{tanh}}^{−1}x$ | $\frac{1}{1-{x}^{2}}$ |
| ${\text{coth}}^{−1}x$ | $\frac{1}{1-{x}^{2}}$ |
| ${\text{sech}}^{−1}x$ | $\frac{−1}{x\sqrt{1-{x}^{2}}}$ |
| ${\text{csch}}^{−1}x$ | $\frac{−1}{|x|\sqrt{1+{x}^{2}}}$ |

Note that the derivatives of ${\text{tanh}}^{−1}\;x$ and ${\text{coth}}^{−1}\;x$ are the same. Thus, when we integrate $1\text{/}(1-{x}^{2}),$ we need to select the proper antiderivative based on the domain of the functions and the values of $x.$ Integration formulas involving the inverse hyperbolic functions are summarized as follows.

$\begin{array}{rllllrll}{\displaystyle \int \frac{1}{\sqrt{1+{u}^{2}}}d}u & = & {\text{sinh}}^{−1}u+C & & & {\displaystyle \int \frac{1}{u\sqrt{1-{u}^{2}}}}du & = & \text{−}{\text{sech}}^{−1}|u|+C \\ {\displaystyle \int \frac{1}{\sqrt{{u}^{2}-1}}}du & = & {\text{cosh}}^{−1}u+C & & & {\displaystyle \int \frac{1}{u\sqrt{1+{u}^{2}}}}du & = & \text{−}{\text{csch}}^{−1}|u|+C \\ {\displaystyle \int \frac{1}{1-{u}^{2}}}du & = & \{\begin{array}{l}{\text{tanh}}^{−1}u+C\;\text{if}\;|u|<1 \\ {\text{coth}}^{−1}u+C\;\text{if}\;|u|>1\end{array} & & & & & \end{array}$  {eq:fs-id1167793951927}

:::example {ex:fs-id1167793984979} Differentiating Inverse Hyperbolic Functions

:::exercise {fs-id1167793984981} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dx}({\text{sinh}}^{−1}(\frac{x}{3}))$
b. $\frac{d}{dx}{({\text{tanh}}^{−1}x)}^{2}$
SOLUTION:
Using the formulas in [ref:fs-id1167794020892] and the chain rule, we obtain the following results:
a. $\frac{d}{dx}({\text{sinh}}^{−1}(\frac{x}{3}))=\frac{1}{3\sqrt{1+\frac{{x}^{2}}{9}}}=\frac{1}{\sqrt{9+{x}^{2}}}$
b. $\frac{d}{dx}{({\text{tanh}}^{−1}x)}^{2}=\frac{2({\text{tanh}}^{−1}x)}{1-{x}^{2}}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793626580} type= 
PROBLEM:
Evaluate the following derivatives:
a. $\frac{d}{dx}({\text{cosh}}^{−1}(3x))$
b. $\frac{d}{dx}{({\text{coth}}^{−1}x)}^{3}$
SOLUTION:
a. $\frac{d}{dx}({\text{cosh}}^{−1}(3x))=\frac{3}{\sqrt{9{x}^{2}-1}}$
b. $\frac{d}{dx}{({\text{coth}}^{−1}x)}^{3}=\frac{3{({\text{coth}}^{−1}x)}^{2}}{1-{x}^{2}}$
COMMENTARY: Hint
Use the formulas in [ref:fs-id1167794020892] and apply the chain rule as necessary.
:::
:::

:::example {ex:fs-id1167793285224} Integrals Involving Inverse Hyperbolic Functions

:::exercise {fs-id1167793285226} type= 
PROBLEM:
Evaluate the following integrals:
a. ${\displaystyle \int \frac{1}{\sqrt{4{x}^{2}-1}}d}x$
b. ${\displaystyle \int \frac{1}{2x\sqrt{1-9{x}^{2}}}d}x$
SOLUTION:
We can use $u\text{-substitution}$ in both cases.
a. Let $u=2x.$ Then, $du=2dx$ and we have

${\displaystyle \int \frac{1}{\sqrt{4{x}^{2}-1}}d}x={\displaystyle \int \frac{1}{2\sqrt{{u}^{2}-1}}}du=\frac{1}{2}{\text{cosh}}^{−1}u+C=\frac{1}{2}{\text{cosh}}^{−1}(2x)+C.$  {eq:fs-id1167793883719}

b. Let $u=3x.$ Then, $du=3dx$ and we obtain

${\displaystyle \int \frac{1}{2x\sqrt{1-9{x}^{2}}}dx=\frac{1}{2}{\displaystyle \int \frac{1}{u\sqrt{1-{u}^{2}}}du=-\frac{1}{2}{\text{sech}}^{−1}|u|+C=-\frac{1}{2}{\text{sech}}^{−1}|3x|+C}}.$  {eq:fs-id1167793444519}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793969727} type= 
PROBLEM:
Evaluate the following integrals:
a. ${\displaystyle \int \frac{1}{\sqrt{{x}^{2}-4}}d}x,\; \;x>2$
b. ${\displaystyle \int \frac{1}{\sqrt{1-{e}^{2x}}}d}x$
SOLUTION:
a. ${\displaystyle \int \frac{1}{\sqrt{{x}^{2}-4}}d}x={\text{cosh}}^{−1}(\frac{x}{2})+C$
b. ${\displaystyle \int \frac{1}{\sqrt{1-{e}^{2x}}}d}x=\text{−}{\text{sech}}^{−1}({e}^{x})+C$
COMMENTARY: Hint
Use the formulas above and apply $u\text{-substitution}$ as necessary.
:::
:::

## Applications
One physical application of hyperbolic functions involves {index:hanging cables}. If a cable of uniform density is suspended between two supports without any load other than its own weight, the cable forms a curve called a {term:catenary}. High-voltage power lines, chains hanging between two posts, and strands of a spider’s web all form catenaries. The following figure shows chains hanging from a row of posts.

> FIGURE {fig:CNX_Calc_Figure_06_09_003} src=../../media/CNX_Calc_Figure_06_09_003.jpg
> alt: An image of chains hanging between posts that all take the shape of a catenary.
> caption: Chains between these posts take the shape of a catenary. (credit: modification of work by OKFoundryCompany, Flickr)

Hyperbolic functions can be used to model catenaries. Specifically, functions of the form $y=a\;\text{cosh}(x\text{/}a)$ are catenaries. [ref:CNX_Calc_Figure_06_09_004] shows the graph of $y=2\;\text{cosh}(x\text{/}2).$

> FIGURE {fig:CNX_Calc_Figure_06_09_004} src=../../media/CNX_Calc_Figure_06_09_004.jpg
> alt: This figure is a graph. It is of the function f(x)=2cosh(x/2). The curve decreases in the second quadrant to the y-axis. It intersects the y-axis at y=2. Then the curve becomes increasing.
> caption: A hyperbolic cosine function forms the shape of a catenary.

:::example {ex:fs-id1167793370895} Using a Catenary to Find the Length of a Cable

:::exercise {fs-id1167793884153} type= 
PROBLEM:
Assume a hanging cable has the shape $10\;\text{cosh}(x\text{/}10)$ for $−15\le x\le 15,$ where $x$ is measured in feet. Determine the length of the cable (in feet).
SOLUTION:
Recall from Section $2.4$ that the formula for arc length is

$\text{Arc Length}={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx.$  {eq:fs-id1167793943925}

We have $f(x)=10\;\text{cosh}(x\text{/}10),$ so ${f}^{'}(x)=\text{sinh}(x\text{/}10).$ Then

$\begin{array}{rl}\text{Arc Length} & ={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx \\ & ={\displaystyle \int_{−15}^{15}\sqrt{1+{\text{sinh}}^{2}(\frac{x}{10})}}\;dx.\end{array}$  {eq:fs-id1167794337061}

Now recall that $1+{\text{sinh}}^{2}x={\text{cosh}}^{2}x,$ so we have

$\begin{array}{rl}\text{Arc Length} & ={\displaystyle \int_{−15}^{15}\sqrt{1+{\text{sinh}}^{2}(\frac{x}{10})}}\;dx \\ & ={{\displaystyle \int}}_{−15}^{15}\text{cosh}(\frac{x}{10})dx \\ & =10\;\text{sinh}{(\frac{x}{10})|}_{−15}^{15}=10[\text{sinh}(\frac{3}{2})-\text{sinh}(-\frac{3}{2})]=20\;\text{sinh}(\frac{3}{2}) \\ & \approx 42.586\;\text{ft}\text{.}\end{array}$  {eq:fs-id1167794333245}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793414872} type= 
PROBLEM:
Assume a hanging cable has the shape $15\;\text{cosh}(x\text{/}15)$ for $−20\le x\le 20.$ Determine the length of the cable (in feet).
SOLUTION:
$52.95\;\text{ft}$
COMMENTARY: Hint
Use the procedure from the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- Hyperbolic functions are defined in terms of exponential functions.
- Term-by-term differentiation yields differentiation formulas for the hyperbolic functions. These differentiation formulas give rise, in turn, to integration formulas.
- With appropriate range restrictions, the hyperbolic functions all have inverses.
- Implicit differentiation yields differentiation formulas for the inverse hyperbolic functions, which in turn give rise to integration formulas.
- The most common physical applications of hyperbolic functions are calculations involving catenaries.

##  {section:section-exercises}

:::exercise {fs-id1167794126434} type= 
PROBLEM:
**[T]** Find expressions for $\text{cosh}\;x+\text{sinh}\;x$ and $\text{cosh}\;x-\text{sinh}\;x.$ Use a calculator to graph these functions and ensure your expression is correct.
SOLUTION:
${e}^{x}\;\text{and}\;{e}^{\text{−}x}$
:::

:::exercise {fs-id1167794051638} type= 
PROBLEM:
From the definitions of $\text{cosh}(x)$ and $\text{sinh}(x),$ find their antiderivatives.
:::

:::exercise {fs-id1167793956239} type= 
PROBLEM:
Show that $\text{cosh}(x)$ and $\text{sinh}(x)$ satisfy ${y}^{''}=y.$
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167793269055} type= 
PROBLEM:
Use the quotient rule to verify that $\text{tanh}(x)'={\text{sech}}^{2}(x).$
:::

:::exercise {fs-id1167793514512} type= 
PROBLEM:
Derive ${\text{cosh}}^{2}(x)+{\text{sinh}}^{2}(x)=\text{cosh}(2x)$ from the definition.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167794037737} type= 
PROBLEM:
Take the derivative of the previous expression to find an expression for $\text{sinh}(2x).$
:::

:::exercise {fs-id1167794141049} type= 
PROBLEM:
Prove $\text{sinh}(x+y)=\text{sinh}(x)\text{cosh}(y)+\text{cosh}(x)\text{sinh}(y)$ by changing the expression to exponentials.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167794336126} type= 
PROBLEM:
Take the derivative of the previous expression to find an expression for $\text{cosh}(x+y).$
:::
For the following exercises, find the derivatives of the given functions and graph along with the function to ensure your answer is correct.

:::exercise {fs-id1167793630189} type= 
PROBLEM:
**[T]** $\text{cosh}(3x+1)$
SOLUTION:
$3\;\text{sinh}(3x+1)$
:::

:::exercise {fs-id1167793382588} type= 
PROBLEM:
**[T]** $\text{sinh}({x}^{2})$
:::

:::exercise {fs-id1167793416764} type= 
PROBLEM:
**[T]** $\frac{1}{\text{cosh}(x)}$
SOLUTION:
$\text{−}\text{tanh}(x)\text{sech}(x)$
:::

:::exercise {fs-id1167793985952} type= 
PROBLEM:
**[T]** $\text{sinh}(\text{ln}(x))$
:::

:::exercise {fs-id1167793384557} type= 
PROBLEM:
**[T]** ${\text{cosh}}^{2}(x)+{\text{sinh}}^{2}(x)$
SOLUTION:
$4\;\text{cosh}(x)\text{sinh}(x)$
:::

:::exercise {fs-id1167793301148} type= 
PROBLEM:
**[T]** ${\text{cosh}}^{2}(x)-{\text{sinh}}^{2}(x)$
:::

:::exercise {fs-id1167794284874} type= 
PROBLEM:
**[T]** $\text{tanh}(\sqrt{{x}^{2}+1})$
SOLUTION:
$\frac{x\;{\text{sech}}^{2}(\sqrt{{x}^{2}+1})}{\sqrt{{x}^{2}+1}}$
:::

:::exercise {fs-id1167794199184} type= 
PROBLEM:
**[T]** $\frac{1+\text{tanh}(x)}{1-\text{tanh}(x)}$
:::

:::exercise {fs-id1167794043454} type= 
PROBLEM:
**[T]** ${\text{sinh}}^{6}(x)$
SOLUTION:
$6\;{\text{sinh}}^{5}(x)\text{cosh}(x)$
:::

:::exercise {fs-id1167793637691} type= 
PROBLEM:
**[T]** $\text{ln}(\text{sech}(x)+\text{tanh}(x))$
:::
For the following exercises, find the antiderivatives for the given functions.

:::exercise {fs-id1167793281082} type= 
PROBLEM:
$\text{cosh}(2x+1)$
SOLUTION:
$\frac{1}{2}\text{sinh}(2x+1)+C$
:::

:::exercise {fs-id1167794178053} type= 
PROBLEM:
$\text{tanh}(3x+2)$
:::

:::exercise {fs-id1167794336738} type= 
PROBLEM:
$x\;\text{cosh}({x}^{2})$
SOLUTION:
$\frac{1}{2}\text{sinh}({x}^{2})+C$
:::

:::exercise {fs-id1167793956996} type= 
PROBLEM:
$3{x}^{3}\text{tanh}({x}^{4})$
:::

:::exercise {fs-id1167793372582} type= 
PROBLEM:
${\text{cosh}}^{2}(x)\text{sinh}(x)$
SOLUTION:
$\frac{1}{3}{\text{cosh}}^{3}(x)+C$
:::

:::exercise {fs-id1167793265440} type= 
PROBLEM:
${\text{tanh}}^{2}(x){\text{sech}}^{2}(x)$
:::

:::exercise {fs-id1167793450621} type= 
PROBLEM:
$\frac{\text{sinh}(x)}{1+\text{cosh}(x)}$
SOLUTION:
$\text{ln}(1+\text{cosh}(x))+C$
:::

:::exercise {fs-id1167793275006} type= 
PROBLEM:
$\text{coth}(x)$
:::

:::exercise {fs-id1167794181011} type= 
PROBLEM:
$\text{cosh}(x)+\text{sinh}(x)$
SOLUTION:
$\text{cosh}(x)+\text{sinh}(x)+C$
:::

:::exercise {fs-id1167793564127} type= 
PROBLEM:
${(\text{cosh}(x)+\text{sinh}(x))}^{n}$
:::
For the following exercises, find the derivatives for the functions.

:::exercise {fs-id1167793372386} type= 
PROBLEM:
${\text{tanh}}^{−1}(4x)$
SOLUTION:
$\frac{4}{1-16{x}^{2}}$
:::

:::exercise {fs-id1167794206992} type= 
PROBLEM:
${\text{sinh}}^{−1}({x}^{2})$
:::

:::exercise {fs-id1167793936665} type= 
PROBLEM:
${\text{sinh}}^{−1}(\text{cosh}(x))$
SOLUTION:
$\frac{\text{sinh}(x)}{\sqrt{{\text{cosh}}^{2}(x)+1}}$
:::

:::exercise {fs-id1167793358453} type= 
PROBLEM:
${\text{cosh}}^{−1}({x}^{3})$
:::

:::exercise {fs-id1167793940311} type= 
PROBLEM:
${\text{tanh}}^{−1}(\text{cos}(x))$
SOLUTION:
$\text{−}\text{csc}(x)$
:::

:::exercise {fs-id1167793928572} type= 
PROBLEM:
${e}^{{\text{sinh}}^{−1}(x)}$
:::

:::exercise {fs-id1167793290963} type= 
PROBLEM:
$\text{ln}({\text{tanh}}^{−1}(x))$
SOLUTION:
$-\frac{1}{({x}^{2}-1){\text{tanh}}^{−1}(x)}$
:::
For the following exercises, find the antiderivatives for the functions.

:::exercise {fs-id1167793579578} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{4-{x}^{2}}}$
:::

:::exercise {fs-id1167794058014} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{a}^{2}-{x}^{2}}}$
SOLUTION:
$\frac{1}{a}{\text{tanh}}^{−1}(\frac{x}{a})+C$
:::

:::exercise {fs-id1167793420648} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}+1}}}$
:::

:::exercise {fs-id1167793950155} type= 
PROBLEM:
${\displaystyle \int \frac{x\;dx}{\sqrt{{x}^{2}+1}}}$
SOLUTION:
$\sqrt{{x}^{2}+1}+C$
:::

:::exercise {fs-id1167793569521} type= 
PROBLEM:
${\displaystyle \int -\frac{dx}{x\sqrt{1-{x}^{2}}}}$
:::

:::exercise {fs-id1167793510599} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{x}}{\sqrt{{e}^{2x}-1}}}dx$
SOLUTION:
${\text{cosh}}^{−1}({e}^{x})+C$
:::

:::exercise {fs-id1167794058783} type= 
PROBLEM:
${\displaystyle \int -\frac{2x}{{x}^{4}-1}}dx$
:::
For the following exercises, use the fact that a falling body with friction equal to velocity squared obeys the equation $dv\text{/}dt=g-{v}^{2}.$

:::exercise {fs-id1167793276964} type= 
PROBLEM:
Show that $v(t)=\sqrt{g}\;\text{tanh}((\sqrt{g})t)$ satisfies this equation.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167793255888} type= 
PROBLEM:
Derive the previous expression for $v(t)$ by integrating $\frac{dv}{g-{v}^{2}}=dt.$
:::

:::exercise {fs-id1167793316091} type= 
PROBLEM:
**[T]** Estimate how far a body has fallen in $12$ seconds by finding the area underneath the curve of $v(t).$
SOLUTION:
$37.30$
:::
For the following exercises, use this scenario: A cable hanging under its own weight has a slope $S=dy\text{/}dx$ that satisfies $dS\text{/}dx=c\sqrt{1+{S}^{2}}.$ The constant $c$ is the ratio of cable density to tension.

:::exercise {fs-id1167793518527} type= 
PROBLEM:
Show that $S=\text{sinh}(cx)$ satisfies this equation.
:::

:::exercise {fs-id1167793619929} type= 
PROBLEM:
Integrate $dy\text{/}dx=\text{sinh}(cx)$ to find the cable height $y(x)$ if $y(0)=1\text{/}c.$
SOLUTION:
$y=\frac{1}{c}\text{cosh}(cx)$
:::

:::exercise {fs-id1167793932271} type= 
PROBLEM:
Sketch the cable and determine how far down it sags at $x=0.$
:::
For the following exercises, solve each problem.

:::exercise {fs-id1167793510621} type= 
PROBLEM:
**[T]** A chain hangs from two posts $2$ m apart to form a catenary described by the equation $y=2\;\text{cosh}(x\text{/}2)-1.$ Find the slope of the catenary at the left fence post.
SOLUTION:
$−0.521095$
:::

:::exercise {fs-id1167793463073} type= 
PROBLEM:
**[T]** A chain hangs from two posts four meters apart to form a catenary described by the equation $y=4\;\text{cosh}(x\text{/}4)-3.$ Find the total length of the catenary (arc length).
:::

:::exercise {fs-id1167793641978} type= 
PROBLEM:
**[T]** A high-voltage power line is a catenary described by $y=10\;\text{cosh}(x\text{/}10).$ Find the ratio of the area under the catenary to its arc length. What do you notice?
SOLUTION:
$10$
:::

:::exercise {fs-id1167793499132} type= 
PROBLEM:
A telephone line is a catenary described by $y=a\;\text{cosh}(x\text{/}a).$ Find the ratio of the area under the catenary to its arc length. Does this confirm your answer for the previous question?
:::

:::exercise {fs-id1167793929410} type= 
PROBLEM:
Prove the formula for the derivative of $y={\text{sinh}}^{−1}(x)$ by differentiating $x=\text{sinh}(y).$ (*Hint:* Use hyperbolic trigonometric identities.)
:::

:::exercise {fs-id1167793950965} type= 
PROBLEM:
Prove the formula for the derivative of $y={\text{cosh}}^{−1}(x)$ by differentiating $x=\text{cosh}(y).$
(*Hint:* Use hyperbolic trigonometric identities.)
:::

:::exercise {fs-id1167793395488} type= 
PROBLEM:
Prove the formula for the derivative of $y={\text{sech}}^{−1}(x)$ by differentiating $x=\text{sech}(y).$ (*Hint:* Use hyperbolic trigonometric identities.)
:::

:::exercise {fs-id1167794210494} type= 
PROBLEM:
Prove that ${(\text{cosh}(x)+\text{sinh}(x))}^{n}=\text{cosh}(nx)+\text{sinh}(nx).$
:::

:::exercise {fs-id1167793379933} type= 
PROBLEM:
Prove the expression for ${\text{sinh}}^{−1}(x).$ Multiply $x=\text{sinh}(y)=(1\text{/}2)({e}^{y}-{e}^{\text{−}y})$ by $2{e}^{y}$ and solve for $y.$ Does your expression match the textbook?
:::

:::exercise {fs-id1167793372775} type= 
PROBLEM:
Prove the expression for ${\text{cosh}}^{−1}(x).$ Multiply $x=\text{cosh}(y)=(1\text{/}2)({e}^{y}+{e}^{\text{−}y})$ by $2{e}^{y}$ and solve for $y.$ Does your expression match the textbook?
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* Justify your answer with a proof or a counterexample.

:::exercise {fs-id1167793582473} type= 
PROBLEM:
The amount of work to pump the water out of a half-full cylinder is half the amount of work to pump the water out of the full cylinder.
SOLUTION:
False
:::

:::exercise {fs-id1167794011749} type= 
PROBLEM:
If the force is constant, the amount of work to move an object from $x=a$ to $x=b$ is $F(b-a).$
:::

:::exercise {fs-id1167793299941} type= 
PROBLEM:
The disk method can be used in any situation in which the washer method is successful at finding the volume of a solid of revolution.
SOLUTION:
False
:::

:::exercise {fs-id1167793544360} type= 
PROBLEM:
If the half-life of $\text{seaborgium-}266$ is $360$ ms, then $k=(\text{ln}(2))\text{/}360.$
:::
For the following exercises, use the requested method to determine the volume of the solid.

:::exercise {fs-id1167793959462} type= 
PROBLEM:
The volume that has a base of the ellipse ${x}^{2}\text{/}4+{y}^{2}\text{/}9=1$ and cross-sections of an equilateral triangle perpendicular to the $y\text{-axis}\text{.}$ Use the method of slicing.
SOLUTION:
$16\sqrt{3}{units}^{3}$
:::

:::exercise {fs-id1167793975626} type= 
PROBLEM:
The region bounded by the curve $y={x}^{2}-x$ and the *x*-axis from $x=1\;\text{to}\;x=4,$ rotated around the *y*-axis using the washer method
:::

:::exercise {fs-id1167793957410} type= 
PROBLEM:
$x={y}^{2}$ and $x=3y$ rotated around the *y*-axis using the washer method
SOLUTION:
$\frac{162\pi}{5}$
:::

:::exercise {fs-id1167793551980} type= 
PROBLEM:
$x=2{y}^{2}-{y}^{3},x=0,\;\text{and}\;y=0$ rotated around the *x*-axis using cylindrical shells
:::
For the following exercises, find
a. the area of the region,
b. the volume of the solid when rotated around the *x*-axis, and
c. the volume of the solid when rotated around the *y*-axis. Use whichever method seems most appropriate to you.

:::exercise {fs-id1167794095112} type= 
PROBLEM:
$y={x}^{3},x=0,y=0,\;\text{and}\;x=2$
SOLUTION:
a. $4,$ b. $\frac{128\pi}{7},$ c. $\frac{64\pi}{5}$
:::

:::exercise {fs-id1167793499100} type= 
PROBLEM:
$y={x}^{2}-x\;\text{and}\;x=0$
:::

:::exercise {fs-id1167793500031} type= 
PROBLEM:
**[T]** $y=\text{ln}(x)+2\;\text{and}\;y=x$
SOLUTION:
a. $1.949,$ b. $21.952,$ c. $17.099$
:::

:::exercise {fs-id1167793629443} type= 
PROBLEM:
$y={x}^{2}$ and $y=\sqrt{x}$
:::

:::exercise {fs-id1167793628294} type= 
PROBLEM:
$y=5+x,$ $y={x}^{2},$ $x=0,$ and $x=1$
SOLUTION:
a. $\frac{31}{6},$ b. $\frac{452\pi}{15},$ c. $\frac{31\pi}{6}$
:::

:::exercise {fs-id1167793924533} type= 
PROBLEM:
Below ${x}^{2}+{y}^{2}=1$ and above $y=1-x$
:::

:::exercise {fs-id1167794097582} type= 
PROBLEM:
Find the mass of $ρ=\frac{1}{{x}^{2}+1}$ on a disk centered at the origin with radius $4.$
SOLUTION:
$\pi \text{ln}17$
:::

:::exercise {fs-id1167793470638} type= 
PROBLEM:
Find the center of mass for $ρ={\text{tan}}^{2}x$ on $x\in (-\frac{\pi}{4},\frac{\pi}{4}).$
:::

:::exercise {fs-id1167794324586} type= 
PROBLEM:
Find the mass and the center of mass of $ρ=1$ on the region bounded by $y={x}^{5}$ and $y=\sqrt{x}.$
SOLUTION:
Mass: $\frac{1}{2},$ center of mass: $(\frac{18}{35},\frac{9}{22})$
:::
For the following exercises, find the requested arc lengths.

:::exercise {fs-id1167793294678} type= 
PROBLEM:
The length of $x$ for $y=\text{cosh}(x)$ from $x=0\;\text{to}\;x=2.$
:::

:::exercise {fs-id1167793829847} type= 
PROBLEM:
The length of $y$ for $x=3-\sqrt{y}$ from $y=0$ to $y=4$
SOLUTION:
$\sqrt{17}+\frac{1}{8}\text{ln}(33+8\sqrt{17})$
:::
For the following exercises, find the surface area and volume when the given curves are revolved around the specified axis.

:::exercise {fs-id1167793956403} type= 
PROBLEM:
The shape created by revolving the region between $y=4+x,$ $y=3-x,$ $x=0,$ and $x=2$ rotated around the *y*-axis.
:::

:::exercise {fs-id1167793393656} type= 
PROBLEM:
The loudspeaker created by revolving $y=1\text{/}x$ from $x=1$ to $x=4$ around the *x*-axis.
SOLUTION:
Volume: $\frac{3\pi}{4},$ surface area: $\pi (\sqrt{2}-{\text{sinh}}^{−1}(1)+{\text{sinh}}^{−1}(16)-\frac{\sqrt{257}}{16})$
:::

:::exercise {fs-id1167793383058} type= 
PROBLEM:
For this exercise, consider the Karun-3 dam in Iran. Its shape can be approximated as an inverted isosceles triangle spanning across the river, with height 205 m and width (across the top of the dam) 388 m. Assume the current depth of the water is 180 m. The density of water is 1000 kg/m<sup>3</sup>. Find the total force on the wall of the dam.
:::

:::exercise {fs-id1167794210529} type= 
PROBLEM:
You are a crime scene investigator attempting to determine the time of death of a victim. It is noon and $45\text{°}\text{F}$ outside and the temperature of the body is $78\text{°}\text{F}.$ You know the cooling constant is $k=0.00824\text{°}\text{F/min}\text{.}$ When did the victim die, assuming that a human’s temperature is $98\text{°}\text{F}$ ?
SOLUTION:
11:02 a.m.
:::
For the following exercise, consider the stock market crash in $1929$ in the United States. The table lists the Dow Jones industrial average per year leading up to the crash.

> TABLE {tab:fs-id1167793431990} cols=2 class=unnumbered
> title: *Source*: http://stockcharts.com/freecharts/historical/djia19201940.html
> summary: This table has two columns. The first column is labeled years after 1920 and has the entries 1,3,5,7,9. The second column has the label value ($) and has the entries 63.90, 100, 110, 160, 381.17.

| Years after 1920 | Value ($) |
| --- | --- |
| $1$ | $63.90$ |
| $3$ | $100$ |
| $5$ | $110$ |
| $7$ | $160$ |
| $9$ | $381.17$ |

:::exercise {fs-id1167793930318} type= 
PROBLEM:
**[T]** The best-fit exponential curve to these data is given by $y=40.71+{1.224}^{x}.$ Why do you think the gains of the market were unsustainable? Use first and second derivatives to help justify your answer. What would this model predict the Dow Jones industrial average to be in $2014$ ?
:::
For the following exercises, consider the catenoid, the only solid of revolution that has a minimal surface, or zero mean curvature. A catenoid in nature can be found when stretching soap between two rings.

:::exercise {fs-id1167794247619} type= class=material-set-2 
PROBLEM:
Find the volume of the catenoid $y=\text{cosh}(x)$ from $x=−1\;\text{to}\;x=1$ that is created by rotating this curve around the $x\text{-axis},$ as shown here.

> IMAGE {img:fs-id1167793590706} src=../../media/CNX_Calc_Figure_06_09_202.jpg
> alt: This figure is an image of a catenoid. It has been formed by rotating a catenary curve about a vertical axis.

SOLUTION:
$\pi (1+\text{sinh}(1)\text{cosh}(1))$
:::

:::exercise {fs-id1167793589798} type= class=material-set-2 
PROBLEM:
Find surface area of the catenoid $y=\text{cosh}(x)$ from $x=−1$ to $x=1$ that is created by rotating this curve around the $x\;\text{-axis.}$
:::

## Glossary
- {def} **catenary**: a curve in the shape of the function $y=a\;\text{cosh}(x\text{/}a)$ is a catenary; a cable of uniform density suspended between two supports assumes the shape of a catenary

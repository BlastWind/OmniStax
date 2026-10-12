# Exponential and Logarithmic Functions

## Learning Objectives {section:learning-objectives}
- Identify the form of an exponential function.
- Explain the difference between the graphs of ${x}^{b}$ and ${b}^{x}.$
- Recognize the significance of the number $e.$
- Identify the form of a logarithmic function.
- Explain the relationship between exponential and logarithmic functions.
- Describe how to calculate a logarithm to a different base.
- Identify the hyperbolic functions, their graphs, and basic identities.

In this section we examine exponential and logarithmic functions. We use the properties of these functions to solve equations involving exponential or logarithmic terms, and we study the meaning and importance of the number $e.$ We also define hyperbolic and inverse hyperbolic functions, which involve combinations of exponential and logarithmic functions. (Note that we present alternative definitions of exponential and logarithmic functions in the chapter [Applications of Integrations](module:m53638), and prove that the functions have the same properties with either definition.)

## Exponential Functions
Exponential functions arise in many applications. One common example is {index:population growth}.
For example, if a population starts with ${P}_{0}$ individuals and then grows at an annual rate of $2\%,$ its population after 1 year is

$P(1)={P}_{0}+0.02{P}_{0}={P}_{0}(1+0.02)={P}_{0}(1.02).$  {eq:fs-id1170572150503}

Its population after 2 years is

$P(2)=P(1)+0.02P(1)=P(1)(1.02)={P}_{0}{(1.02)}^{2}.$  {eq:fs-id1170572177937}

In general, its population after $t$ years is

$P(t)={P}_{0}{(1.02)}^{t},$  {eq:fs-id1170572280288}

which is an exponential function. More generally, any function of the form $f(x)={b}^{x},$ where $b>0,b≠1,$ is an exponential function with {term:base} $b$ and {term:exponent} *x*. Exponential functions have constant bases and variable exponents. Note that a function of the form $f(x)={x}^{b}$ for some constant $b$ is not an exponential function but a power function.
To see the difference between an exponential function and a power function, we compare the functions $y={x}^{2}$ and $y={2}^{x}.$ In [ref:fs-id1170572205233], we see that both ${2}^{x}$ and ${x}^{2}$ approach infinity as $x\to \infty .$ Eventually, however, ${2}^{x}$ becomes larger than ${x}^{2}$ and grows more rapidly as $x\to \infty .$ In the opposite direction, as $x\to \text{−}\infty ,{x}^{2}\to \infty ,$ whereas ${2}^{x}\to 0.$ The line $y=0$ is a horizontal asymptote for $y={2}^{x}.$

> TABLE {tab:fs-id1170572205233} cols=11 class=column-header
> title: Values of ${x}^{2}$ and ${2}^{x}$
> summary: A table with 3 rows and 10 columns. The first row is labeled “x” and has the values “-3; -2; -1; 0; 1; 2; 3; 4; 5; 6”. The second row is labeled “x squared” and has the values “9; 4; 1; 0; 1; 4; 9; 16; 25; 36”. The third row is labeled “2 to the power of x” and has the values “(1/8); (1/4); (1/2); 1; 2; 4; 8; 16; 32; 64”.

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\text{x}$ | $−3$ | $−2$ | $−1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| ${\text{x}}^{2}$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ |
| ${2}^{\text{x}}$ | $1\text{/}8$ | $1\text{/}4$ | $1\text{/}2$ | $1$ | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ |

In [ref:CNX_Calc_Figure_01_05_001], we graph both $y={x}^{2}$ and $y={2}^{x}$ to show how the graphs differ.

> FIGURE {fig:CNX_Calc_Figure_01_05_001} src=../../media/CNX_Calc_Figure_01_05_001.jpg
> alt: An image of a graph. The x axis runs from -10 to 10 and the y axis runs from 0 to 50. The graph is of two functions. The first function is “y = x squared”, which is a parabola. The function decreases until it hits the origin and then begins increasing. The second function is “y = 2 to the power of x”, which starts slightly above the x axis, and begins increasing very rapidly, more rapidly than the first function.
> caption: Both ${2}^{x}$ and ${x}^{2}$ approach infinity as $x\to \infty ,$ but ${2}^{x}$ grows more rapidly than ${x}^{2}.$ As $x\to \text{−}\infty ,{x}^{2}\to \infty ,$ whereas ${2}^{x}\to 0.$

### Evaluating Exponential Functions
Recall the properties of exponents: If $x$ is a positive integer, then we define ${b}^{x}=b\cdot b⋯b$ (with $x$ factors of $b).$ If $x$ is a negative integer, then $x=\text{−}y$ for some positive integer $y,$ and we define ${b}^{x}={b}^{\text{−}y}=1\text{/}{b}^{y}.$ Also, ${b}^{0}$ is defined to be $1.$ If $x$ is a rational number, then $x=p\text{/}q,$ where $p$ and $q$ are integers and ${b}^{x}={b}^{p\text{/}q}=\sqrt[q]{{b}^{p}}.$ For example, ${9}^{3\text{/}2}=\sqrt{{9}^{3}}=27.$ However, how is ${b}^{x}$ defined if $x$ is an irrational number? For example, what do we mean by ${2}^{\sqrt{2}}?$ This is too complex a question for us to answer fully right now; however, we can make an approximation. In [ref:fs-id1170572480690], we list some rational numbers approaching $\sqrt{2},$ and the values of ${2}^{x}$ for each rational number $x$ are presented as well. We claim that if we choose rational numbers $x$ getting closer and closer to $\sqrt{2},$ the values of ${2}^{x}$ get closer and closer to some number $L.$ We define that number $L$ to be ${2}^{\sqrt{2}}.$

> TABLE {tab:fs-id1170572480690} cols=7 class=column-header
> title: Values of ${2}^{x}$ for a List of Rational Numbers Approximating $\sqrt{2}$
> summary: A table with 2 rows and 6 columns. The first row is labeled “x” and has the values “1.4; 1.41; 1.414; 1.4142; 1.41421; 1.414213”. The second row is labeled “2 to the power of x” and has the values “2.639; 2.65737; 2.66475; 2.665119; 2.665138; 2.665143”.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $\text{x}$ | $1.4$ | $1.41$ | $1.414$ | $1.4142$ | $1.41421$ | $1.414213$ |
| ${2}^{\text{x}}$ | $2.639$ | $2.65737$ | $2.66475$ | $2.665119$ | $2.665138$ | $2.665143$ |

:::example {ex:fs-id1170572169644} Bacterial Growth

:::exercise {fs-id1170572169649} type= 
PROBLEM:
Suppose a particular population of bacteria is known to double in size every $4$ hours. If a culture starts with $1000$ bacteria, the number of bacteria after $4$ hours is $n(4)=1000\cdot 2.$ The number of bacteria after $8$ hours is $n(8)=n(4)\cdot 2=1000\cdot {2}^{2}.$ In general, the number of bacteria after $4m$ hours is $n(4m)=1000\cdot {2}^{m}.$ Letting $t=4m,$ we see that the number of bacteria after $t$ hours is $n(t)=1000\cdot {2}^{t\text{/}4}.$ Find the number of bacteria after $6$ hours, $10$ hours, and $24$ hours.
SOLUTION:
The number of bacteria after 6 hours is given by $n(6)=1000\cdot {2}^{6\text{/}4}\approx 2828$ bacteria. The number of bacteria after $10$ hours is given by $n(10)=1000\cdot {2}^{10\text{/}4}\approx 5657$ bacteria. The number of bacteria after $24$ hours is given by $n(24)=1000\cdot {2}^{6}=64,000$ bacteria.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572173711} type= 
PROBLEM:
Given the exponential function $f(x)=100\cdot {3}^{x\text{/}2},$ evaluate $f(4)$ and $f(10).$
SOLUTION:
$f(4)=900;f(10)=24,300.$
:::
:::

:::note [media-2] 
Go to [Population Balance](http://www.openstax.org/l/20_exponengrow) for another example of exponential population growth.
:::

### Graphing Exponential Functions
For any base $b>0,b≠1,$ the exponential function $f(x)={b}^{x}$ is defined for all real numbers $x$ and ${b}^{x}>0.$ Therefore, the domain of $f(x)={b}^{x}$ is $(\text{−}\infty ,\infty )$ and the range is $(0,\infty ).$ To graph ${b}^{x},$ we note that for $b>1,{b}^{x}$ is increasing on $(\text{−}\infty ,\infty )$ and ${b}^{x}\to \infty$ as $x\to \infty ,$ whereas ${b}^{x}\to 0$ as $x\to \text{−}\infty .$ On the other hand, if $0<b<1,f(x)={b}^{x}$ is decreasing on $(\text{−}\infty ,\infty )$ and ${b}^{x}\to 0$ as $x\to \infty$ whereas ${b}^{x}\to \infty$ as $x\to \text{−}\infty$ ([ref:CNX_Calc_Figure_01_05_002]).

> FIGURE {fig:CNX_Calc_Figure_01_05_002} src=../../media/CNX_Calc_Figure_01_05_002.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of four functions. The first function is “f(x) = 2 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing. The second function is “f(x) = 4 to the power of x”, an increasing curved function, which starts slightly above the x axis and begins increasing rapidly, more rapidly than the first function. The third function is “f(x) = (1/2) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. The third function is “f(x) = (1/4) to the power of x”, a decreasing curved function with decreases until it gets close to the x axis without touching it. It decreases at a faster rate than the third function.
> caption: If $b>1,$ then ${b}^{x}$ is increasing on $(\text{−}\infty ,\infty ).$ If $0<b<1,$ then ${b}^{x}$ is decreasing on $(\text{−}\infty ,\infty ).$

:::note [media-2] 
Visit this [site](http://www.openstax.org/l/20_inverse) for more exploration of the graphs of exponential functions.
:::
Note that exponential functions satisfy the general laws of exponents. To remind you of these laws, we state them as rules.

:::note [rule] Rule: Laws of Exponents
For any constants $a>0,b>0,$ and for all *x* and *y*,
1. ${b}^{x}\cdot {b}^{y}={b}^{x+y}$
2. $\frac{{b}^{x}}{{b}^{y}}={b}^{x-y}$
3. ${({b}^{x})}^{y}={b}^{xy}$
4. ${(ab)}^{x}={a}^{x}{b}^{x}$
5. $\frac{{a}^{x}}{{b}^{x}}={(\frac{a}{b})}^{x}$
:::

:::example {ex:fs-id1170572440093} Using the Laws of Exponents

:::exercise {fs-id1170572440098} type= 
PROBLEM:
Use the laws of exponents to simplify each of the following expressions.
a. $\frac{{(2{x}^{2\text{/}3})}^{3}}{{(4{x}^{−1\text{/}3})}^{2}}$
b. $\frac{{({x}^{3}{y}^{−1})}^{2}}{{(x{y}^{2})}^{−2}}$
SOLUTION:
a. We can simplify as follows:

$\frac{{(2{x}^{2\text{/}3})}^{3}}{{(4{x}^{−1\text{/}3})}^{2}}=\frac{{2}^{3}{({x}^{2\text{/}3})}^{3}}{{4}^{2}{({x}^{−1\text{/}3})}^{2}}=\frac{8{x}^{2}}{16{x}^{−2\text{/}3}}=\frac{{x}^{2}{x}^{2\text{/}3}}{2}=\frac{{x}^{8\text{/}3}}{2}.$  {eq:fs-id1170570966957}

b. We can simplify as follows:

$\frac{{({x}^{3}{y}^{−1})}^{2}}{{(x{y}^{2})}^{−2}}=\frac{{({x}^{3})}^{2}{({y}^{−1})}^{2}}{{x}^{−2}{({y}^{2})}^{−2}}=\frac{{x}^{6}{y}^{−2}}{{x}^{−2}{y}^{−4}}={x}^{6}{x}^{2}{y}^{−2}{y}^{4}={x}^{8}{y}^{2}.$  {eq:fs-id1170573582280}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572452229} type= 
PROBLEM:
Use the laws of exponents to simplify $(6{x}^{−3}{y}^{2})\text{/}(12{x}^{−4}{y}^{5}).$
SOLUTION:
$x\text{/}(2{y}^{3})$
COMMENTARY: Hint
${x}^{a}\text{/}{x}^{b}={x}^{a-b}$
:::
:::

## The Number *e*
A special type of exponential function appears frequently in real-world applications. To describe it, consider the following example of exponential growth, which arises from {index:compounding interest} in a savings account. Suppose a person invests $P$ dollars in a savings account with an annual interest rate $r,$ compounded annually. The amount of money after 1 year is

$A(1)=P+rP=P(1+r).$  {eq:fs-id1170572452592}

The amount of money after $2$ years is

$A(2)=A(1)+rA(1)=P(1+r)+rP(1+r)=P{(1+r)}^{2}.$  {eq:fs-id1170572449164}

More generally, the amount after $t$ years is

$A(t)=P{(1+r)}^{t}.$  {eq:fs-id1170572449276}

If the money is compounded 2 times per year, the amount of money after half a year is

$A(\frac{1}{2})=P+(\frac{r}{2})P=P(1+(\frac{r}{2})).$  {eq:fs-id1170572449320}

The amount of money after $1$ year is

$A(1)=A(\frac{1}{2})+(\frac{r}{2})A(\frac{1}{2})=P(1+\frac{r}{2})+\frac{r}{2}(P(1+\frac{r}{2}))=P{(1+\frac{r}{2})}^{2}.$  {eq:fs-id1170572548417}

After $t$ years, the amount of money in the account is

$A(t)=P{(1+\frac{r}{2})}^{2t}.$  {eq:fs-id1170572229288}

More generally, if the money is compounded $n$ times per year, the amount of money in the account after $t$ years is given by the function

$A(t)=P{(1+\frac{r}{n})}^{nt}.$  {eq:fs-id1170572229347}

What happens as $n\to \infty ?$ To answer this question, we let $m=n\text{/}r$ and write

${(1+\frac{r}{n})}^{nt}={(1+\frac{1}{m})}^{mrt},$  {eq:fs-id1170572451284}

and examine the behavior of ${(1+1\text{/}m)}^{m}$ as $m\to \infty ,$ using a table of values ([ref:fs-id1170572451390]).

> TABLE {tab:fs-id1170572451390} cols=7 class=column-header
> title: Values of ${(1+\frac{1}{m})}^{m}$ as $m\to \infty$
> summary: A table with 2 rows and 6 columns. The first row is labeled “m” and has the values “10; 100; 1000; 10,000; 100,000; 1,000,000”. The second row is labeled “(1 + (1/m)) to the power of m” and has the values “2.5937; 2.7048; 2.71692; 2.71815; 2.718268; 2.718280”.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $\text{m}$ | $10$ | $100$ | $1000$ | $10,000$ | $100,000$ | $1,000,000$ |
| ${(1+\frac{1}{\text{m}})}^{\text{m}}$ | $2.5937$ | $2.7048$ | $2.71692$ | $2.71815$ | $2.718268$ | $2.718280$ |

Looking at this table, it appears that ${(1+1\text{/}m)}^{m}$ is approaching a number between $2.7$ and $2.8$ as $m\to \infty .$ In fact, ${(1+1\text{/}m)}^{m}$ does approach some number as $m\to \infty .$ We call this {term:number $e$}. To six decimal places of accuracy,

$e\approx 2.718282.$  {eq:fs-id1170572549050}

The letter $e$ was first used to represent this number by the Swiss mathematician Leonhard Euler during the 1720s. Although Euler did not discover the number, he showed many important connections between $e$ and logarithmic functions. We still use the notation $e$ today to honor Euler’s work because it appears in many areas of mathematics and because we can use it in many practical applications.
Returning to our savings account example, we can conclude that if a person puts $P$ dollars in an account at an annual interest rate $r,$ compounded continuously, then $A(t)=P{e}^{rt}.$ This function may be familiar. Since functions involving base $e$ arise often in applications, we call the function $f(x)={e}^{x}$ the {term:natural exponential function}. Not only is this function interesting because of the definition of the number $e,$ but also, as discussed next, its graph has an important property.
Since $e>1,$ we know ${e}^{x}$ is increasing on $(\text{−}\infty ,\infty ).$ In [ref:CNX_Calc_Figure_01_05_003], we show a graph of $f(x)={e}^{x}$ along with a *tangent line* to the graph of at $x=0.$ We give a precise definition of tangent line in the next chapter; but, informally, we say a tangent line to a graph of $f$ at $x=a$ is a line that passes through the point $(a,f(a))$ and has the same “slope” as $f$ at that point $.$ The function $f(x)={e}^{x}$ is the only exponential function ${b}^{x}$ with tangent line at $x=0$ that has a slope of 1. As we see later in the text, having this property makes the natural exponential function the most simple exponential function to use in many instances.

> FIGURE {fig:CNX_Calc_Figure_01_05_003} src=../../media/CNX_Calc_Figure_01_05_003.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of the function “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1). At this point, a line is drawn tangent to the function. This line has the label “slope = 1”.
> caption: The graph of $f(x)={e}^{x}$ has a tangent line with slope $1$ at $x=0.$

:::example {ex:fs-id1170572547818} Compounding Interest

:::exercise {fs-id1170572547823} type= 
PROBLEM:
Suppose $\text{\$}500$ is invested in an account at an annual interest rate of $r=5.5\%,$ compounded continuously.
a. Let $t$ denote the number of years after the initial investment and $A(t)$ denote the amount of money in the account at time $t.$ Find a formula for $A(t).$
b. Find the amount of money in the account after $10$ years and after $20$ years.
SOLUTION:
a. If $P$ dollars are invested in an account at an annual interest rate $r,$ compounded continuously, then $A(t)=P{e}^{rt}.$ Here $P=\text{\$}500$ and $r=0.055.$ Therefore, $A(t)=500{e}^{0.055t}.$
b. After $10$ years, the amount of money in the account is

$A(10)=500{e}^{0.055\cdot 10}=500{e}^{0.55}\approx \text{\$}866.63.$  {eq:fs-id1170573386623}

After $20$ years, the amount of money in the account is

$A(20)=500{e}^{0.055\cdot 20}=500{e}^{1.1}\approx \text{\$}1,502.08.$  {eq:fs-id1170573390418}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572455122} type= 
PROBLEM:
If $\text{\$}750$ is invested in an account at an annual interest rate of $4\%,$ compounded continuously, find a formula for the amount of money in the account after $t$ years. Find the amount of money after $30$ years.
SOLUTION:
$A(t)=750{e}^{0.04t}.$ After $30$ years, there will be approximately $\text{\$}2,490.09.$
COMMENTARY: Hint
$A(t)=P{e}^{rt}\text{.}$
:::
:::

## Logarithmic Functions
Using our understanding of exponential functions, we can discuss their inverses, which are the logarithmic functions. These come in handy when we need to consider any phenomenon that varies over a wide range of values, such as pH in chemistry or decibels in sound levels.
The exponential function $f(x)={b}^{x}$ is one-to-one, with domain $(\text{−}\infty ,\infty )$ and range $(0,\infty ).$ Therefore, it has an inverse function, called the *logarithmic function with base* $b.$ For any $b>0,b≠1,$ the logarithmic function with base *b*, denoted ${\text{log}}_{b},$ has domain $(0,\infty )$ and range $(\text{−}\infty ,\infty ),$ and satisfies

${\text{log}}_{b}(x)=y\;\text{if and only if}\;{b}^{y}=x.$  {eq:fs-id1170572551548}

For example,

$\begin{array}{llll}{\text{log}}_{2}(8)=3 & & & \text{since}\hspace{3em}{2}^{3}=8, \\ {\text{log}}_{10}(\frac{1}{100})=−2 & & & \text{since}\hspace{3em}{10}^{−2}=\frac{1}{{10}^{2}}=\frac{1}{100}, \\ {\text{log}}_{b}(1)=0 & & & \text{since}\hspace{3em}{b}^{0}=1\;\text{for any base}\;b>0.\end{array}$  {eq:fs-id1170572545103}

Furthermore, since $y={\text{log}}_{b}(x)$ and $y={b}^{x}$ are inverse functions,

${\text{log}}_{b}({b}^{x})=x\;\text{and}\;{b}^{{\text{log}}_{b}(x)}=x.$  {eq:fs-id1170572169121}

The most commonly used logarithmic function is the function ${\text{log}}_{e}.$ Since this function uses natural $e$ as its base, it is called the {term:natural logarithm}. Here we use the notation $\text{ln}(x)$ or $\text{ln}\;x$ to mean ${\text{log}}_{e}(x).$ For example,

$\text{ln}(e)={\text{log}}_{e}(e)=1,\text{ln}({e}^{3})={\text{log}}_{e}({e}^{3})=3,\text{ln}(1)={\text{log}}_{e}(1)=0.$  {eq:fs-id1170572243723}

Since the functions $f(x)={e}^{x}$ and $g(x)=\text{ln}(x)$ are inverses of each other,

$\text{ln}({e}^{x})=x\;\text{and}\;{e}^{\text{ln}\;x}=x,$  {eq:fs-id1170572243887}

and their graphs are symmetric about the line $y=x$ ([ref:CNX_Calc_Figure_01_05_004]).

> FIGURE {fig:CNX_Calc_Figure_01_05_004} src=../../media/CNX_Calc_Figure_01_05_004.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from -3 to 4. The graph is of two functions. The first function is “f(x) = e to power of x”, an increasing curved function that starts slightly above the x axis. The y intercept is at the point (0, 1) and there is no x intercept. The second function is “f(x) = ln(x)”, an increasing curved function. The x intercept is at the point (1, 0) and there is no y intercept. A dotted line with label “y = x” is also plotted on the graph, to show that the functions are mirror images over this line.
> caption: The functions $y={e}^{x}$ and $y=\text{ln}(x)$ are inverses of each other, so their graphs are symmetric about the line $y=x.$

:::note [media-2] 
At this [site](http://www.openstax.org/l/20_logscale) you can see an example of a base-10 logarithmic scale.
:::
In general, for any base $b>0,b≠1,$ the function $g(x)={\text{log}}_{b}(x)$ is symmetric about the line $y=x$ with the function $f(x)={b}^{x}.$ Using this fact and the graphs of the exponential functions, we graph functions ${\text{log}}_{b}$ for several values of $b>1$ ([ref:CNX_Calc_Figure_01_05_005]).

> FIGURE {fig:CNX_Calc_Figure_01_05_005} src=../../media/CNX_Calc_Figure_01_05_005.jpg
> alt: An image of a graph. The x axis runs from -3 to 3 and the y axis runs from 0 to 4. The graph is of three functions. All three functions a log functions that are increasing curved functions that start slightly to the right of the y axis and have an x intercept at (1, 0). The first function is “y = log base 10 (x)”, the second function is “f(x) = ln(x)”, and the third function is “y = log base 2 (x)”. The third function increases the most rapidly, the second function increases next most rapidly, and the third function increases the slowest.
> caption: Graphs of $y={\text{log}}_{b}(x)$ are depicted for $b=2,e,10.$

Before solving some equations involving exponential and logarithmic functions, let’s review the basic properties of logarithms.

:::note [rule] Rule: Properties of Logarithms
If $a,b,c>0,b≠1,$ and $r$ is any real number, then

$\begin{array}{llll}1.\hspace{2em}{\text{log}}_{b}(ac)={\text{log}}_{b}(a)+{\text{log}}_{b}(c) & & & \text{(Product property)} \\ 2.\hspace{2em}{\text{log}}_{b}(\frac{a}{c})={\text{log}}_{b}(a)-{\text{log}}_{b}(c) & & & \text{(Quotient property)} \\ 3.\hspace{2em}{\text{log}}_{b}({a}^{r})=r{\text{log}}_{b}(a) & & & \text{(Power property)}\end{array}$  {eq:fs-id1170572482744}

:::

:::example {ex:fs-id1170572551970} Solving Equations Involving Exponential Functions

:::exercise {fs-id1170572551976} type= 
PROBLEM:
Solve each of the following equations for $x.$
a. ${5}^{x}=2$
b. ${e}^{x}+6{e}^{\text{−}x}=5$
SOLUTION:
a. Applying the natural logarithm function to both sides of the equation, we have

$\text{ln}{5}^{x}=\text{ln}\;2.$  {eq:fs-id1170571071223}

Using the power property of logarithms,

$x\;\text{ln}\;5=\text{ln}\;2.$  {eq:fs-id1170571277779}

Therefore, $x=\text{ln}\;2\text{/}\text{ln}\;5.$
b. Multiplying both sides of the equation by ${e}^{x},$ we arrive at the equation

${e}^{2x}+6=5{e}^{x}.$  {eq:fs-id1170571301573}

Rewriting this equation as

${e}^{2x}-5{e}^{x}+6=0,$  {eq:fs-id1170573367583}

we can then rewrite it as a quadratic equation in ${e}^{x}\text{:}$

${({e}^{x})}^{2}-5({e}^{x})+6=0.$  {eq:fs-id1170570976384}

Now we can solve the quadratic equation. Factoring this equation, we obtain

$({e}^{x}-3)({e}^{x}-2)=0.$  {eq:fs-id1170573400246}

Therefore, the solutions satisfy ${e}^{x}=3$ and ${e}^{x}=2.$ Taking the natural logarithm of both sides gives us the solutions $x=\text{ln}\;3,\text{ln}\;2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572232048} type= 
PROBLEM:
Solve ${e}^{2x}\text{/}(3+{e}^{2x})=1\text{/}2.$
SOLUTION:
$x=\frac{\text{ln}\;3}{2}$
COMMENTARY: Hint
First solve the equation for ${e}^{2x}\text{.}$
:::
:::

:::example {ex:fs-id1170572174674} Solving Equations Involving Logarithmic Functions

:::exercise {fs-id1170572174679} type= 
PROBLEM:
Solve each of the following equations for $x.$
a. $\text{ln}(\frac{1}{x})=4$
b. ${\text{log}}_{10}\sqrt{x}+{\text{log}}_{10}x=2$
c. $\text{ln}(2x)-3\;\text{ln}({x}^{2})=0$
SOLUTION:
a. By the definition of the natural logarithm function,

$\text{ln}(\frac{1}{x})=4\;\text{if and only if}\;{e}^{4}=\frac{1}{x}.$  {eq:fs-id1170573425282}

Therefore, the solution is $x=1\text{/}{e}^{4}.$
b. Using the product and power properties of logarithmic functions, rewrite the left-hand side of the equation as

${\text{log}}_{10}\sqrt{x}+{\text{log}}_{10}x={\text{log}}_{10}x\sqrt{x}={\text{log}}_{10}{x}^{3\text{/}2}=\frac{3}{2}{\text{log}}_{10}x.$  {eq:fs-id1170573416245}

Therefore, the equation can be rewritten as

$\frac{3}{2}{\text{log}}_{10}x=2\;\text{or}\;{\text{log}}_{10}x=\frac{4}{3}.$  {eq:fs-id1170571053549}

The solution is $x={10}^{4\text{/}3}=10\sqrt[3]{10}.$
c. Using the power property of logarithmic functions, we can rewrite the equation as $\text{ln}(2x)-\text{ln}({x}^{6})=0.$

Using the quotient property, this becomes

$\text{ln}(\frac{2}{{x}^{5}})=0.$  {eq:fs-id1170573426389}

Therefore, $2\text{/}{x}^{5}=1,$ which implies $x=\sqrt[5]{2}.$ We should then check for any extraneous solutions.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572552650} type= 
PROBLEM:
Solve $\text{ln}({x}^{3})-4\;\text{ln}(x)=1.$
SOLUTION:
$x=\frac{1}{e}$
COMMENTARY: Hint
First use the power property, then use the product property of logarithms.
:::
:::
When evaluating a logarithmic function with a calculator, you may have noticed that the only options are ${\text{log}}_{10}$ or log, called the {index:*common logarithm*}, or *ln*, which is the natural logarithm. However, exponential functions and logarithm functions can be expressed in terms of any desired base $b.$ If you need to use a calculator to evaluate an expression with a different base, you can apply the change-of-base formulas first. Using this change of base, we typically write a given exponential or logarithmic function in terms of the natural exponential and natural logarithmic functions.

:::note [rule] Rule: Change-of-Base Formulas
Let $a>0,b>0,$ and $a≠1,b≠1.$
1. ${a}^{x}={b}^{x{\text{log}}_{b}a}$ for any real number $x.$

If $b=e,$ this equation reduces to ${a}^{x}={e}^{x{\text{log}}_{e}a}={e}^{x\;\text{ln}\;a}.$
2. ${\text{log}}_{a}x=\frac{{\text{log}}_{b}x}{{\text{log}}_{b}a}$ for any real number $x>0.$

If $b=e,$ this equation reduces to ${\text{log}}_{a}x=\frac{\text{ln}\;x}{\text{ln}\;a}.$
:::

### Proof
For the first change-of-base formula, we begin by making use of the power property of logarithmic functions. We know that for any base $b>0,b≠1,{\text{log}}_{b}({a}^{x})=x{\text{log}}_{b}a.$ Therefore,

${b}^{{\text{log}}_{b}({a}^{x})}={b}^{x{\text{log}}_{b}a}.$  {eq:fs-id1170572219472}

In addition, we know that ${b}^{x}$ and ${\text{log}}_{b}(x)$ are inverse functions. Therefore,

${b}^{{\text{log}}_{b}({a}^{x})}={a}^{x}.$  {eq:fs-id1170572219556}

Combining these last two equalities, we conclude that ${a}^{x}={b}^{x{\text{log}}_{b}a}.$
To prove the second property, we show that

$({\text{log}}_{b}a)\cdot ({\text{log}}_{a}x)={\text{log}}_{b}x.$  {eq:fs-id1170572309902}

Let $u={\text{log}}_{b}a,v={\text{log}}_{a}x,$ and $w={\text{log}}_{b}x.$ We will show that $u\cdot v=w.$ By the definition of logarithmic functions, we know that ${b}^{u}=a,{a}^{v}=x,$ and ${b}^{w}=x.$ From the previous equations, we see that

${b}^{uv}={({b}^{u})}^{v}={a}^{v}=x={b}^{w}.$  {eq:fs-id1170572434870}

Therefore, ${b}^{uv}={b}^{w}.$ Since exponential functions are one-to-one, we can conclude that $u\cdot v=w.$
□

:::example {ex:fs-id1170572434970} Changing Bases

:::exercise {fs-id1170572434975} type= 
PROBLEM:
Use a calculating utility to evaluate ${\text{log}}_{3}7$ with the change-of-base formula presented earlier.
SOLUTION:
Use the second equation with $a=3$ and $e=3\text{:}$
${\text{log}}_{3}7=\frac{\text{ln}\;7}{\text{ln}\;3}\approx 1.77124.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572435063} type= 
PROBLEM:
Use the change-of-base formula and a calculating utility to evaluate ${\text{log}}_{4}6.$
SOLUTION:
$1.29248$
COMMENTARY: Hint
Use the change of base to rewrite this expression in terms of expressions involving the natural logarithm function.
:::
:::

:::example {ex:fs-id1170572128672} Chapter Opener: The Richter Scale for Earthquakes

:::exercise {fs-id1170572128677} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_01_05_010} src=../../media/CNX_Calc_Figure_01_05_013.jpg
> alt: A photograph of an earthquake fault.
> caption: (credit: modification of work by Robb Hannawacker, NPS)

In 1935, Charles Richter developed a scale (now known as the {index:*Richter scale*}) to measure the magnitude of an {index:earthquake}. The scale is a base-10 logarithmic scale, and it can be described as follows: Consider one earthquake with magnitude ${R}_{1}$ on the Richter scale and a second earthquake with magnitude ${R}_{2}$ on the Richter scale. Suppose ${R}_{1}>{R}_{2},$ which means the earthquake of magnitude ${R}_{1}$ is stronger, but how much stronger is it than the other earthquake? A way of measuring the intensity of an earthquake is by using a seismograph to measure the amplitude of the earthquake waves. If ${A}_{1}$ is the amplitude measured for the first earthquake and ${A}_{2}$ is the amplitude measured for the second earthquake, then the amplitudes and magnitudes of the two earthquakes satisfy the following equation:

${R}_{1}-{R}_{2}={\text{log}}_{10}(\frac{{A}_{1}}{{A}_{2}}).$  {eq:fs-id1170572128784}

Consider an earthquake that measures 8 on the Richter scale and an earthquake that measures 7 on the Richter scale. Then,

$8-7={\text{log}}_{10}(\frac{{A}_{1}}{{A}_{2}}).$  {eq:fs-id1170572128840}

Therefore,

${\text{log}}_{10}(\frac{{A}_{1}}{{A}_{2}})=1,$  {eq:fs-id1170572233767}

which implies ${A}_{1}\text{/}{A}_{2}=10$ or ${A}_{1}=10{A}_{2}.$ Since ${A}_{1}$ is 10 times the size of ${A}_{2},$ we say that the first earthquake is 10 times as intense as the second earthquake. On the other hand, if one earthquake measures 8 on the Richter scale and another measures 6, then the relative intensity of the two earthquakes satisfies the equation

${\text{log}}_{10}(\frac{{A}_{1}}{{A}_{2}})=8-6=2.$  {eq:fs-id1170572233874}

Therefore, ${A}_{1}=100{A}_{2}.$ That is, the first earthquake is 100 times more intense than the second earthquake.
How can we use logarithmic functions to compare the relative severity of the magnitude 9 earthquake in Japan in 2011 with the magnitude 7.3 earthquake in Haiti in 2010?
SOLUTION:
To compare the Japan and Haiti earthquakes, we can use an equation presented earlier:
$9-7.3={\text{log}}_{10}(\frac{{A}_{1}}{{A}_{2}}).$
Therefore, ${A}_{1}\text{/}{A}_{2}={10}^{1.7},$ and we conclude that the earthquake in Japan was approximately $50$ times more intense than the earthquake in Haiti.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572478063} type= 
PROBLEM:
Compare the relative severity of a magnitude $8.4$ earthquake with a magnitude $7.4$ earthquake.
SOLUTION:
The magnitude $8.4$ earthquake is roughly $10$ times as severe as the magnitude $7.4$ earthquake.
COMMENTARY: Hint
${R}_{1}-{R}_{2}={\text{log}}_{10}({A}_{1}\text{/}{A}_{2})\text{.}$
:::
:::

## Hyperbolic Functions
The hyperbolic functions are defined in terms of certain combinations of ${e}^{x}$ and ${e}^{\text{−}x}.$ These functions arise naturally in various engineering and physics applications, including the study of water waves and vibrations of elastic membranes. Another common use for a hyperbolic function is the representation of a hanging chain or cable, also known as a catenary ([ref:CNX_Calc_Figure_01_05_006]). If we introduce a coordinate system so that the low point of the chain lies along the $y$-axis, we can describe the height of the chain in terms of a hyperbolic function. First, we define the {term:hyperbolic functions}.

> FIGURE {fig:CNX_Calc_Figure_01_05_006} src=../../media/CNX_Calc_Figure_01_05_009.jpg
> alt: A photograph of a spider web collecting dew drops.
> caption: The shape of a strand of silk in a spider’s web can be described in terms of a hyperbolic function. The same shape applies to a chain or cable hanging from two supports with only its own weight. (credit: “Mtpaley”, Wikimedia Commons)

:::note [definition] Definition
**Hyperbolic cosine**

$\text{cosh}\;x=\frac{{e}^{x}+{e}^{\text{−}x}}{2}$  {eq:fs-id1170572467996}

**Hyperbolic sine**

$\text{sinh}\;x=\frac{{e}^{x}-{e}^{\text{−}x}}{2}$  {eq:fs-id1170572468036}

**Hyperbolic tangent**

$\text{tanh}\;x=\frac{\text{sinh}\;x}{\text{cosh}\;x}=\frac{{e}^{x}-{e}^{\text{−}x}}{{e}^{x}+{e}^{\text{−}x}}$  {eq:fs-id1170572468077}

**Hyperbolic cosecant**

$\text{csch}\;x=\frac{1}{\text{sinh}\;x}=\frac{2}{{e}^{x}-{e}^{\text{−}x}}$  {eq:fs-id1170572431443}

**Hyperbolic secant**

$\text{sech}\;x=\frac{1}{\text{cosh}\;x}=\frac{2}{{e}^{x}+{e}^{\text{−}x}}$  {eq:fs-id1170572431494}

**Hyperbolic cotangent**

$\text{coth}\;x=\frac{\text{cosh}\;x}{\text{sinh}\;x}=\frac{{e}^{x}+{e}^{\text{−}x}}{{e}^{x}-{e}^{\text{−}x}}$  {eq:fs-id1170572431545}

:::
The name *cosh* rhymes with “gosh,” whereas the name *sinh* is pronounced “cinch.” *Tanh*, *sech*, *csch*, and *coth* are pronounced “tanch,” “seech,” “coseech,” and “cotanch,” respectively.
Using the definition of $\text{cosh}(x)$ and principles of physics, it can be shown that the height of a hanging chain, such as the one in [ref:CNX_Calc_Figure_01_05_006], can be described by the function $h(x)=a\;\text{cosh}(x\text{/}a)+c$ for certain constants $a$ and $c.$
But why are these functions called *hyperbolic functions*? To answer this question, consider the quantity ${\text{cosh}}^{2}t-{\text{sinh}}^{2}t.$ Using the definition of $\text{cosh}$ and $\text{sinh},$ we see that

${\text{cosh}}^{2}t-{\text{sinh}}^{2}t=\frac{{e}^{2t}+2+{e}^{−2t}}{4}-\frac{{e}^{2t}-2+{e}^{−2t}}{4}=1.$  {eq:fs-id1170572234411}

This identity is the analog of the trigonometric identity ${\text{cos}}^{2}t+{\text{sin}}^{2}t=1.$ Here, given a value $t,$ the point $(x,y)=(\text{cosh}\;t,\text{sinh}\;t)$ lies on the unit hyperbola ${x}^{2}-{y}^{2}=1$ ([ref:CNX_Calc_Figure_01_05_007]).

> FIGURE {fig:CNX_Calc_Figure_01_05_007} src=../../media/CNX_Calc_Figure_01_05_007.jpg
> alt: An image of a graph. The x axis runs from -1 to 3 and the y axis runs from -3 to 3. The graph is of the relation “(x squared) - (y squared) -1”. The left most point of the relation is at the x intercept, which is at the point (1, 0). From this point the relation both increases and decreases in curves as x increases. This relation is known as a hyperbola and it resembles a sideways “U” shape. There is a point plotted on the graph of the relation labeled “(cosh(1), sinh(1))”, which is at the approximate point (1.5, 1.2).
> caption: The unit hyperbola ${\text{cosh}}^{2}t-{\text{sinh}}^{2}t=1.$

### Graphs of Hyperbolic Functions
To graph $\text{cosh}\;x$ and $\text{sinh}\;x,$ we make use of the fact that both functions approach $(1\text{/}2){e}^{x}$ as $x\to \infty ,$ since ${e}^{\text{−}x}\to 0$ as $x\to \infty .$ As $x\to \text{−}\infty ,\text{cosh}\;x$ approaches $1\text{/}2{e}^{\text{−}x},$ whereas $\text{sinh}\;x$ approaches $−1\text{/}2{e}^{\text{−}x}.$ Therefore, using the graphs of $1\text{/}2{e}^{x},1\text{/}2{e}^{\text{−}x},$ and $\text{−}1\text{/}2{e}^{\text{−}x}$ as guides, we graph $\text{cosh}\;x$ and $\text{sinh}\;x.$ To graph $\text{tanh}\;x,$ we use the fact that $\text{tanh}(0)=0,−1<\text{tanh}(x)<1$ for all $x,\text{tanh}\;x\to 1$ as $x\to \infty ,$ and $\text{tanh}\;x\to \text{−}1$ as $x\to \text{−}\infty .$ The graphs of the other three hyperbolic functions can be sketched using the graphs of $\text{cosh}\;x,\text{sinh}\;x,$ and $\text{tanh}\;x$ ([ref:CNX_Calc_Figure_01_05_008]).

> FIGURE {fig:CNX_Calc_Figure_01_05_008} src=../../media/CNX_Calc_Figure_01_05_011.jpg
> alt: An image of six graphs. Each graph has an x axis that runs from -3 to 3 and a y axis that runs from -4 to 4. The first graph is of the function “y = cosh(x)”, which is a hyperbola. The function decreases until it hits the point (0, 1), where it begins to increase. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1/2)(e to power of -x)”, a decreasing curved function and the second of these functions is “y = (1/2)(e to power of x)”, an increasing curved function. The function “y = cosh(x)” is always above these two functions without ever touching them. The second graph is of the function “y = sinh(x)”, which is an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = (1/2)(e to power of x)”, an increasing curved function and the second of these functions is “y = -(1/2)(e to power of -x)”, an increasing curved function that approaches the x axis without touching it. The function “y = sinh(x)” is always between these two functions without ever touching them. The third graph is of the function “y = sech(x)”, which increases until the point (0, 1), where it begins to decrease. The graph of the function has a hump. The fourth graph is of the function “y = csch(x)”. On the left side of the y axis, the function starts slightly below the x axis and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the x axis, which it never touches. The fifth graph is of the function “y = tanh(x)”, an increasing curved function. There are also two functions that serve as a boundary for this function. The first of these functions is “y = 1”, a horizontal line function and the second of these functions is “y = -1”, another horizontal line function. The function “y = tanh(x)” is always between these two functions without ever touching them. The sixth graph is of the function “y = coth(x)”. On the left side of the y axis, the function starts slightly below the boundary line “y = 1” and decreases until it approaches the y axis, which it never touches. On the right side of the y axis, the function starts slightly to the right of the y axis and decreases until it approaches the boundary line “y = -1”, which it never touches.
> caption: The hyperbolic functions involve combinations of ${e}^{x}$ and ${e}^{\text{−}x}.$

### Identities Involving Hyperbolic Functions
The identity ${\text{cosh}}^{2}t-{\text{sinh}}^{2}t,$ shown in [ref:CNX_Calc_Figure_01_05_007], is one of several identities involving the hyperbolic functions, some of which are listed next. The first four properties follow easily from the definitions of hyperbolic sine and hyperbolic cosine. Except for some differences in signs, most of these properties are analogous to identities for trigonometric functions.

:::note [rule] Rule: Identities Involving Hyperbolic Functions
1. $\text{cosh}(\text{−}x)=\text{cosh}\;x$
2. $\text{sinh}(\text{−}x)=\text{−}\text{sinh}\;x$
3. $\text{cosh}\;x+\text{sinh}\;x={e}^{x}$
4. $\text{cosh}\;x-\text{sinh}\;x={e}^{\text{−}x}$
5. ${\text{cosh}}^{2}x-{\text{sinh}}^{2}x=1$
6. $1-{\text{tanh}}^{2}x={\text{sech}}^{2}x$
7. ${\text{coth}}^{2}x-1={\text{csch}}^{2}x$
8. $\text{sinh}(x\pm y)=\text{sinh}\;x\;\text{cosh}\;y\pm \text{cosh}\;x\;\text{sinh}\;y$
9. $\text{cosh}(x\pm y)=\text{cosh}\;x\;\text{cosh}\;y\pm \text{sinh}\;x\;\text{sinh}\;y$
:::

:::example {ex:fs-id1170572443393} Evaluating Hyperbolic Functions

:::exercise {fs-id1170572443399} type= 
PROBLEM:
a. Simplify $\text{sinh}(5\;\text{ln}\;x).$
b. If $\text{sinh}\;x=3\text{/}4,$ find the values of the remaining five hyperbolic functions.
SOLUTION:
a. Using the definition of the $\text{sinh}$ function, we write

$\text{sinh}(5\;\text{ln}\;x)=\frac{{e}^{5\;\text{ln}\;x}-{e}^{−5\;\text{ln}\;x}}{2}=\frac{{e}^{\text{ln}({x}^{5})}-{e}^{\text{ln}({x}^{−5})}}{2}=\frac{{x}^{5}-{x}^{−5}}{2}.$  {eq:fs-id1170570995857}

b. Using the identity ${\text{cosh}}^{2}x-{\text{sinh}}^{2}x=1,$ we see that

${\text{cosh}}^{2}x=1+{(\frac{3}{4})}^{2}=\frac{25}{16}.$  {eq:fs-id1170573388429}

Since $\text{cosh}\;x\ge 1$ for all $x,$ we must have $\text{cosh}\;x=5\text{/}4.$ Then, using the definitions for the other hyperbolic functions, we conclude that $\text{tanh}\;x=3\text{/}5,\text{csch}\;x=4\text{/}3,\text{sech}\;x=4\text{/}5,$ and $\text{coth}\;x=5\text{/}3.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572548318} type= 
PROBLEM:
Simplify $\text{cosh}(2\;\text{ln}\;x).$
SOLUTION:
$({x}^{2}+{x}^{−2})\text{/}2$
COMMENTARY: Hint
Use the definition of the cosh function and the power property of logarithm functions.
:::
:::

### Inverse Hyperbolic Functions
From the graphs of the hyperbolic functions, we see that all of them are one-to-one except $\text{cosh}\;x$ and $\text{sech}\;x.$ If we restrict the domains of these two functions to the interval $[0,\infty ),$ then all the hyperbolic functions are one-to-one, and we can define the {term:inverse hyperbolic functions}. Since the hyperbolic functions themselves involve exponential functions, the inverse hyperbolic functions involve logarithmic functions.

:::note [definition] Definition
**Inverse Hyperbolic Functions**

$\begin{array}{llll}{\text{sinh}}^{−1}x=\text{arcsinh}\;x=\text{ln}(x+\sqrt{{x}^{2}+1}) & & & {\text{cosh}}^{−1}x=\text{arccosh}\;x=\text{ln}(x+\sqrt{{x}^{2}-1}) \\ {\text{tanh}}^{−1}x=\text{arctanh}\;x=\frac{1}{2}\text{ln}(\frac{1+x}{1-x}) & & & {\text{coth}}^{−1}x=\text{arccoth}\;x=\frac{1}{2}\text{ln}(\frac{x+1}{x-1}) \\ {\text{sech}}^{−1}x=\text{arcsech}\;x=\text{ln}(\frac{1+\sqrt{1-{x}^{2}}}{x}) & & & {\text{csch}}^{−1}x=\text{arccsch}\;x=\text{ln}(\frac{1}{x}+\frac{\sqrt{1+{x}^{2}}}{|x|})\end{array}$  {eq:fs-id1170572550043}

:::
Let’s look at how to derive the first equation. The others follow similarly. Suppose $y={\text{sinh}}^{−1}x.$ Then, $x=\text{sinh}\;y$ and, by the definition of the hyperbolic sine function, $x=\frac{{e}^{y}-{e}^{\text{−}y}}{2}.$ Therefore,

${e}^{y}-2x-{e}^{\text{−}y}=0.$  {eq:fs-id1170572235202}

Multiplying this equation by ${e}^{y},$ we obtain

${e}^{2y}-2x{e}^{y}-1=0.$  {eq:fs-id1170572235250}

This can be solved like a quadratic equation, with the solution

${e}^{y}=\frac{2x\pm \sqrt{4{x}^{2}+4}}{2}=x\pm \sqrt{{x}^{2}+1}.$  {eq:fs-id1170572235290}

Since ${e}^{y}>0,$ the only solution is the one with the positive sign. Applying the natural logarithm to both sides of the equation, we conclude that

$y=\text{ln}(x+\sqrt{{x}^{2}+1}).$  {eq:fs-id1170572482196}

:::example {ex:fs-id1170572482234} Evaluating Inverse Hyperbolic Functions

:::exercise {fs-id1170572482240} type= 
PROBLEM:
Evaluate each of the following expressions.

${\text{sinh}}^{−1}(2)$  {eq:fs-id1170572482247}

${\text{tanh}}^{−1}(1\text{/}4)$  {eq:fs-id1170572482270}

SOLUTION:
${\text{sinh}}^{−1}(2)=\text{ln}(2+\sqrt{{2}^{2}+1})=\text{ln}(2+\sqrt{5})\approx 1.4436$
${\text{tanh}}^{−1}(1\text{/}4)=\frac{1}{2}\text{ln}(\frac{1+1\text{/}4}{1-1\text{/}4})=\frac{1}{2}\text{ln}(\frac{5\text{/}4}{3\text{/}4})=\frac{1}{2}\text{ln}(\frac{5}{3})\approx 0.2554$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572176161} type= 
PROBLEM:
Evaluate ${\text{tanh}}^{−1}(1\text{/}2).$
SOLUTION:
$\frac{1}{2}\text{ln}(3)\approx 0.5493.$
COMMENTARY: Hint
Use the definition of ${\text{tanh}}^{−1}x$ and simplify.
:::
:::

## Key Concepts {section:key-concepts}
- The exponential function $y={b}^{x}$ is increasing if $b>1$ and decreasing if $0<b<1.$ Its domain is $(\text{−}\infty ,\infty )$ and its range is $(0,\infty ).$
- The logarithmic function $y={\text{log}}_{b}(x)$ is the inverse of $y={b}^{x}.$ Its domain is $(0,\infty )$ and its range is $(\text{−}\infty ,\infty ).$
- The natural exponential function is $y={e}^{x}$ and the natural logarithmic function is $y=\text{ln}\;x={\text{log}}_{e}x.$
- Given an exponential function or logarithmic function in base $a,$ we can make a change of base to convert this function to any base $b>0,b≠1.$ We typically convert to base $e.$
- The hyperbolic functions involve combinations of the exponential functions ${e}^{x}$ and ${e}^{\text{−}x}.$ As a result, the inverse hyperbolic functions involve the natural logarithm.

##  {section:section-exercises}
For the following exercises, evaluate the given exponential functions as indicated, accurate to two significant digits after the decimal.

:::exercise {fs-id1170572545893} type= 
PROBLEM:
$f(x)={5}^{x}$ a. $x=3$ b. $x=\frac{1}{2}$ c. $x=\sqrt{2}$
SOLUTION:
a. 125 b. 2.24 c. 9.74
:::

:::exercise {fs-id1170572545960} type= 
PROBLEM:
$f(x)={(0.3)}^{x}$ a. $x=−1$ b. $x=4$ c. $x=−1.5$
:::

:::exercise {fs-id1170572546032} type= 
PROBLEM:
$f(x)={10}^{x}$ a. $x=−2$ b. $x=4$ c. $x=\frac{5}{3}$
SOLUTION:
a. 0.01 b. 10,000 c. 46.42
:::

:::exercise {fs-id1170572358156} type= 
PROBLEM:
$f(x)={e}^{x}$ a. $x=2$ b. $x=−3.2$ c. $x=\pi$
:::
For the following exercises, match the exponential equation to the correct graph.
a. $y={4}^{\text{−}x}$
b. $y={3}^{x-1}$
c. $y={2}^{x+1}$
d. $y={(\frac{1}{2})}^{x}+2$
e. $y=\text{−}{3}^{\text{−}x}$
f. $y=1-{5}^{x}$

:::exercise {fs-id1170572358351} type= 
PROBLEM:

> IMAGE {img:fs-id1170572358359} src=../../media/CNX_Calc_Figure_01_05_201.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -2 to 8. The graph is of a decreasing curved function. The function decreases until it approaches the line “y = 2”, but never touches this line. The y intercept is at the point (0, 3) and there is no x intercept.

SOLUTION:
d
:::

:::exercise {fs-id1170572553705} type= 
PROBLEM:

> IMAGE {img:fs-id1170572553713} src=../../media/CNX_Calc_Figure_01_05_202.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -9 to 2. The graph is of a function that starts slightly below the line “y = 1” and begins decreasing rapidly in a curve. The x intercept and y intercept are both at the origin.

:::

:::exercise {fs-id1170572553732} type= 
PROBLEM:

> IMAGE {img:fs-id1170572553737} src=../../media/CNX_Calc_Figure_01_05_203.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that starts slightly above the x axis and begins increasing rapidly. There is no x intercept and the y intercept is at the point (0, (1/3)). Another point of the graph is at (1, 1).

SOLUTION:
b
:::

:::exercise {fs-id1170572553760} type= 
PROBLEM:

> IMAGE {img:fs-id1170572553764} src=../../media/CNX_Calc_Figure_01_05_204.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved decreasing function that decreases until it comes close the x axis without touching it. There is no x intercept and the y intercept is at the point (0, 1). Another point of the graph is at (-1, 4).

:::

:::exercise {fs-id1170572553787} type= 
PROBLEM:

> IMAGE {img:fs-id1170572553791} src=../../media/CNX_Calc_Figure_01_05_205.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that increases until it comes close the x axis without touching it. There is no x intercept and the y intercept is at the point (0, -1). Another point of the graph is at (-1, -3).

SOLUTION:
e
:::

:::exercise {fs-id1170572553814} type= 
PROBLEM:

> IMAGE {img:fs-id1170572553818} src=../../media/CNX_Calc_Figure_01_05_206.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that starts slightly above the x axis and begins increasing rapidly. There is no x intercept and the y intercept is at the point (0, 2). Another point of the graph is at (-1, 1).

:::
For the following exercises, sketch the graph of the exponential function. Determine the domain, range, and horizontal asymptote.

:::exercise {fs-id1170572553846} type= 
PROBLEM:
$f(x)={e}^{x}+2$
SOLUTION:
Domain: all real numbers, range: $(2,\infty ),y=2$

> IMAGE {img:fs-id1170572553879} src=../../media/CNX_Calc_Figure_01_05_207.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that starts slightly above the line “y = 2” and begins increasing rapidly. There is no x intercept and the y intercept is at the point (0, 3).

:::

:::exercise {fs-id1170572553923} type= 
PROBLEM:
$f(x)=\text{−}{2}^{x}$
:::

:::exercise {fs-id1170572242973} type= 
PROBLEM:
$f(x)={3}^{x+1}$
SOLUTION:
Domain: all real numbers, range: $(0,\infty ),y=0$

> IMAGE {img:fs-id1170572243004} src=../../media/CNX_Calc_Figure_01_05_209.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that starts slightly above the x axis and begins increasing rapidly. There is no x intercept and the y intercept is at the point (0, 3). Another point of the graph is at (-1, 1).

:::

:::exercise {fs-id1170572243051} type= 
PROBLEM:
$f(x)={4}^{x}-1$
:::

:::exercise {fs-id1170572243129} type= 
PROBLEM:
$f(x)=1-{2}^{\text{−}x}$
SOLUTION:
Domain: all real numbers, range: $(\text{−}\infty ,1),y=1$

> IMAGE {img:fs-id1170572163713} src=../../media/CNX_Calc_Figure_01_05_211.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved increasing function that increases until it comes close the line “y = 1” without touching it. There x intercept and the y intercept are both at the origin. Another point of the graph is at (-1, -1).

:::

:::exercise {fs-id1170572163759} type= 
PROBLEM:
$f(x)={5}^{x+1}+2$
:::

:::exercise {fs-id1170572163842} type= 
PROBLEM:
$f(x)={e}^{\text{−}x}-1$
SOLUTION:
Domain: all real numbers, range: $(−1,\infty ),y=−1$

> IMAGE {img:fs-id1170572163879} src=../../media/CNX_Calc_Figure_01_05_213.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of a curved decreasing function that decreases until it comes close the line “y = -1” without touching it. There x intercept and the y intercept are both at the origin. There is an approximate point on the graph at (-1, 1.7).

:::
For the following exercises, write the equation in equivalent exponential form.

:::exercise {fs-id1170572163926} type= 
PROBLEM:
${\text{log}}_{3}81=4$
:::

:::exercise {fs-id1170572218452} type= 
PROBLEM:
${\text{log}}_{8}2=\frac{1}{3}$
SOLUTION:
${8}^{1\text{/}3}=2$
:::

:::exercise {fs-id1170572218502} type= 
PROBLEM:
${\text{log}}_{5}1=0$
:::

:::exercise {fs-id1170572218542} type= 
PROBLEM:
${\text{log}}_{5}25=2$
SOLUTION:
${5}^{2}=25$
:::

:::exercise {fs-id1170572218583} type= 
PROBLEM:
$\text{log}\;0.1=−1$
:::

:::exercise {fs-id1170572218621} type= 
PROBLEM:
$\text{ln}(\frac{1}{{e}^{3}})=−3$
SOLUTION:
${e}^{−3}=\frac{1}{{e}^{3}}$
:::

:::exercise {fs-id1170572168644} type= 
PROBLEM:
${\text{log}}_{9}3=0.5$
:::

:::exercise {fs-id1170572168686} type= 
PROBLEM:
$\text{ln}\;1=0$
SOLUTION:
${e}^{0}=1$
:::
For the following exercises, write the equation in equivalent logarithmic form.

:::exercise {fs-id1170572168725} type= 
PROBLEM:
${2}^{3}=8$
:::

:::exercise {fs-id1170572168766} type= 
PROBLEM:
${4}^{−2}=\frac{1}{16}$
SOLUTION:
${\text{log}}_{4}(\frac{1}{16})=−2$
:::

:::exercise {fs-id1170572168823} type= 
PROBLEM:
${10}^{2}=100$
:::

:::exercise {fs-id1170572168860} type= 
PROBLEM:
${9}^{0}=1$
SOLUTION:
${\text{log}}_{9}1=0$
:::

:::exercise {fs-id1170572218179} type= 
PROBLEM:
${(\frac{1}{3})}^{3}=\frac{1}{27}$
:::

:::exercise {fs-id1170572218251} type= 
PROBLEM:
$\sqrt[3]{64}=4$
SOLUTION:
${\text{log}}_{64}4=\frac{1}{3}$
:::

:::exercise {fs-id1170572218297} type= 
PROBLEM:
${e}^{x}=y$
:::

:::exercise {fs-id1170572218333} type= 
PROBLEM:
${9}^{y}=150$
SOLUTION:
${\text{log}}_{9}150=y$
:::

:::exercise {fs-id1170572218373} type= 
PROBLEM:
${b}^{3}=45$
:::

:::exercise {fs-id1170572218414} type= 
PROBLEM:
${4}^{−3\text{/}2}=0.125$
SOLUTION:
${\text{log}}_{4}0.125=-\frac{3}{2}$
:::
For the following exercises, sketch the graph of the logarithmic function. Determine the domain, range, and vertical asymptote.

:::exercise {fs-id1170572217112} type= 
PROBLEM:
$f(x)=3+\text{ln}\;x$
:::

:::exercise {fs-id1170572217209} type= 
PROBLEM:
$f(x)=\text{ln}(x-1)$
SOLUTION:
Domain: $(1,\infty ),$ range: $(\text{−}\infty ,\infty ),x=1$

> IMAGE {img:fs-id1170572217249} src=../../media/CNX_Calc_Figure_01_05_215.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of an increasing curved function which starts slightly to the right of the vertical line “x = 1”. There is no y intercept and the x intercept is at the approximate point (2, 0).

:::

:::exercise {fs-id1170572217315} type= 
PROBLEM:
$f(x)=\text{ln}(\text{−}x)$
:::

:::exercise {fs-id1170572286731} type= 
PROBLEM:
$f(x)=1-\text{ln}\;x$
SOLUTION:
Domain: $(0,\infty ),$ range: $(\text{−}\infty ,\infty ),x=0$

> IMAGE {img:fs-id1170572286760} src=../../media/CNX_Calc_Figure_01_05_217.jpg
> alt: An image of a graph. The x axis runs from -1 to 9 and the y axis runs from -5 to 5. The graph is of a decreasing curved function which starts slightly to the right of the y axis. There is no y intercept and the x intercept is at the point (e, 0).

:::

:::exercise {fs-id1170572286826} type= 
PROBLEM:
$f(x)=\text{log}\;x-1$
:::

:::exercise {fs-id1170572452755} type= 
PROBLEM:
$f(x)=\text{ln}(x+1)$
SOLUTION:
Domain: $(−1,\infty ),$ range: $(\text{−}\infty ,\infty ),x=−1$

> IMAGE {img:fs-id1170572452796} src=../../media/CNX_Calc_Figure_01_05_219.jpg
> alt: An image of a graph. The x axis runs from -5 to 5 and the y axis runs from -5 to 5. The graph is of an increasing curved function which starts slightly to the right of the vertical line “x = -1”. There y intercept and the x intercept are both at the origin.

:::
For the following exercises, use properties of logarithms to write the expressions as a sum, difference, and/or product of logarithms.

:::exercise {fs-id1170572452864} type= 
PROBLEM:
$\text{log}{x}^{4}y$
:::

:::exercise {fs-id1170572452904} type= 
PROBLEM:
${\text{log}}_{3}\frac{9{a}^{3}}{b}$
SOLUTION:
$2+3{\text{log}}_{3}a-{\text{log}}_{3}b$
:::

:::exercise {fs-id1170572452966} type= 
PROBLEM:
$\text{ln}\;a\sqrt[3]{b}$
:::

:::exercise {fs-id1170572546157} type= 
PROBLEM:
${\text{log}}_{5}\sqrt{125x{y}^{3}}$
SOLUTION:
$\frac{3}{2}+\frac{1}{2}{\text{log}}_{5}x+\frac{3}{2}{\text{log}}_{5}y$
:::

:::exercise {fs-id1170572546231} type= 
PROBLEM:
${\text{log}}_{4}\frac{\sqrt[3]{xy}}{64}$
:::

:::exercise {fs-id1170572546304} type= 
PROBLEM:
$\text{ln}(\frac{6}{\sqrt{{e}^{3}}})$
SOLUTION:
$-\frac{3}{2}+\text{ln}\;6$
:::
For the following exercises, solve the exponential equation exactly.

:::exercise {fs-id1170572546359} type= 
PROBLEM:
${5}^{x}=125$
:::

:::exercise {fs-id1170572479927} type= 
PROBLEM:
${e}^{3x}-15=0$
SOLUTION:
$\frac{\text{ln}\;15}{3}$
:::

:::exercise {fs-id1170572479971} type= 
PROBLEM:
${8}^{x}=4$
:::

:::exercise {fs-id1170572480004} type= 
PROBLEM:
${4}^{x+1}-32=0$
SOLUTION:
$\frac{3}{2}$
:::

:::exercise {fs-id1170572480046} type= 
PROBLEM:
${3}^{x\text{/}14}=\frac{1}{10}$
:::

:::exercise {fs-id1170572480100} type= 
PROBLEM:
${10}^{x}=7.21$
SOLUTION:
$\text{log}\;7.21$
:::

:::exercise {fs-id1170572480133} type= 
PROBLEM:
$4\cdot {2}^{3x}-20=0$
:::

:::exercise {fs-id1170572480186} type= 
PROBLEM:
${7}^{3x-2}=11$
SOLUTION:
$\frac{2}{3}+\frac{\text{log}\;11}{3\;\text{log}\;7}$
:::
For the following exercises, solve the logarithmic equation exactly, if possible.

:::exercise {fs-id1170572543633} type= 
PROBLEM:
${\text{log}}_{3}x=0$
:::

:::exercise {fs-id1170572543671} type= 
PROBLEM:
${\text{log}}_{5}x=−2$
SOLUTION:
$x=\frac{1}{25}$
:::

:::exercise {fs-id1170572543713} type= 
PROBLEM:
${\text{log}}_{4}(x+5)=0$
:::

:::exercise {fs-id1170572543761} type= 
PROBLEM:
$\text{log}(2x-7)=0$
SOLUTION:
$x=4$
:::

:::exercise {fs-id1170572543807} type= 
PROBLEM:
$\text{ln}\sqrt{x+3}=2$
:::

:::exercise {fs-id1170572088346} type= 
PROBLEM:
${\text{log}}_{6}(x+9)+{\text{log}}_{6}x=2$
SOLUTION:
$x=3$
:::

:::exercise {fs-id1170572088404} type= 
PROBLEM:
${\text{log}}_{4}(x+2)-{\text{log}}_{4}(x-1)=0$
:::

:::exercise {fs-id1170572088466} type= 
PROBLEM:
$\text{ln}\;x+\text{ln}(x-2)=\text{ln}\;4$
SOLUTION:
$1+\sqrt{5}$
:::
For the following exercises, use the change-of-base formula and either base 10 or base *e* to evaluate the given expressions. Answer in exact form and in approximate form, rounding to four decimal places.

:::exercise {fs-id1170572088513} type= 
PROBLEM:
${\text{log}}_{5}47$
:::

:::exercise {fs-id1170572088562} type= 
PROBLEM:
${\text{log}}_{7}82$
SOLUTION:
$(\frac{\text{log}\;82}{\text{log}\;7}\approx 2.2646)$
:::

:::exercise {fs-id1170572227257} type= 
PROBLEM:
${\text{log}}_{6}103$
:::

:::exercise {fs-id1170572227306} type= 
PROBLEM:
${\text{log}}_{0.5}211$
SOLUTION:
$(\frac{\text{log}\;211}{\text{log}\;0.5}\approx -7.7211)$
:::

:::exercise {fs-id1170572227358} type= 
PROBLEM:
${\text{log}}_{2}\pi$
:::

:::exercise {fs-id1170572227407} type= 
PROBLEM:
${\text{log}}_{0.2}0.452$
SOLUTION:
$(\frac{\text{log}\;0.452}{\text{log}\;0.2}\approx 0.4934)$
:::

:::exercise {fs-id1170572227457} type= 
PROBLEM:
Rewrite the following expressions in terms of exponentials and simplify.
a. $2\;\text{cosh}(\text{ln}\;x)$ b. $\text{cosh}\;4x+\text{sinh}\;4x$ c. $\text{cosh}\;2x-\text{sinh}\;2x$ d. $\text{ln}(\text{cosh}\;x+\text{sinh}\;x)+\text{ln}(\text{cosh}\;x-\text{sinh}\;x)$
:::

:::exercise {fs-id1170572230541} type= 
PROBLEM:
**[T]** The number of bacteria *N* in a culture after *t* days can be modeled by the function $N(t)=1300\cdot {(2)}^{t\text{/}4}.$ Find the number of bacteria present after 15 days.
SOLUTION:
$\sim 17,491$
:::

:::exercise {fs-id1170572230620} type= 
PROBLEM:
**[T]** The demand *D* (in millions of barrels) for oil in an oil-rich country is given by the function $D(p)=150\cdot {(2.7)}^{−0.25p},$ where *p* is the price (in dollars) of a barrel of oil. Find the amount of oil demanded (to the nearest million barrels) when the price is between $15 and $20.
:::

:::exercise {fs-id1170572230690} type= 
PROBLEM:
**[T]** The amount *A* of a $100,000 investment paying continuously and compounded for *t* years is given by $A(t)=100,000\cdot {e}^{0.055t}.$ Find the amount *A* accumulated in 5 years.
SOLUTION:
Approximately $131,653 is accumulated in 5 years.
:::

:::exercise {fs-id1170572472851} type= 
PROBLEM:
**[T]** An investment is compounded monthly, quarterly, or yearly and is given by the function $A=P{(1+\frac{j}{n})}^{nt},$ where $A$ is the value of the investment at time $t,P$ is the initial principle that was invested, $j$ is the annual interest rate, and $n$ is the number of time the interest is compounded per year. Given a yearly interest rate of 3.5% and an initial principle of $100,000, find the amount $A$ accumulated in 5 years for interest that is compounded a. daily, b., monthly, c. quarterly, and d. yearly.
:::

:::exercise {fs-id1170572472938} type= 
PROBLEM:
**[T]** The concentration of hydrogen ions in a substance is denoted by $[{\text{H}}^{+}],$ measured in moles per liter. The pH of a substance is defined by the logarithmic function $\text{pH}=\text{−}\text{log}[{\text{H}}^{+}].$ This function is used to measure the acidity of a substance. The pH of water is 7. A substance with a pH less than 7 is an acid, whereas one that has a pH of more than 7 is a base.
a. Find the pH of the following substances. Round answers to one digit.
b. Determine whether the substance is an acid or a base.

1. Eggs: $[{\text{H}}^{+}]=1.6\;\times \;{10}^{−8}$ mol/L
2. Beer: $[{\text{H}}^{+}]=3.16\;\times \;{10}^{−3}$ mol/L
3. Tomato Juice: $[{\text{H}}^{+}]=7.94\;\times \;{10}^{−5}$ mol/L

SOLUTION:
i. a. pH = 8 b. Base ii. a. pH = 3 b. Acid iii. a. pH = 4 b. Acid
:::

:::exercise {fs-id1170572296441} type= 
PROBLEM:
**[T]** Iodine-131 is a radioactive substance that decays according to the function $Q(t)={Q}_{0}\cdot {e}^{−0.08664t},$ where ${Q}_{0}$ is the initial quantity of a sample of the substance and *t* is in days. Determine how long it takes (to the nearest day) for 95% of a quantity to decay.
:::

:::exercise {fs-id1170572296509} type= 
PROBLEM:
**[T]** According to the World Bank, at the end of 2013 ($t=0$ ) the U.S. population was 316 million and was increasing according to the following model:
$P(t)=316{e}^{0.0074t},$ where *P* is measured in millions of people and *t* is measured in years after 2013.
a. Based on this model, what will be the population of the United States in 2020?
b. Determine when the U.S. population will be twice what it is in 2013.
SOLUTION:
a. $\sim 333$ million b. 94 years from 2013, or in 2107
:::

:::exercise {fs-id1170572296604} type= 
PROBLEM:
**[T]** The amount *A* accumulated after 1000 dollars is invested for *t* years at an interest rate of 4% is modeled by the function $A(t)=1000{(1.04)}^{t}.$
a. Find the amount accumulated after 5 years and 10 years.
b. Determine how long it takes for the original investment to triple.
:::

:::exercise {fs-id1170572296689} type= 
PROBLEM:
**[T]** A bacterial colony grown in a lab is known to double in number in 12 hours. Suppose, initially, there are 1000 bacteria present.
a. Use the exponential function $Q={Q}_{0}{e}^{kt}$ to determine the value $k,$ which is the growth rate of the bacteria. Round to four decimal places.
b. Determine approximately how long it takes for 200,000 bacteria to grow.
SOLUTION:
a. $k\approx 0.0578$ b. $\approx 92$ hours
:::

:::exercise {fs-id1170572212944} type= 
PROBLEM:
**[T]** The rabbit population on a game reserve doubles every 6 months. Suppose there were 120 rabbits initially.
a. Use the exponential function $P={P}_{0}{a}^{t}$ to determine the growth rate constant $a.$ Round to four decimal places.
b. Use the function in part a. to determine approximately how long it takes for the rabbit population to reach 3500.
:::

:::exercise {fs-id1170572213021} type= 
PROBLEM:
**[T]** The 1906 earthquake in San Francisco had a magnitude of 8.3 on the Richter scale. At the same time, in Japan, an earthquake with magnitude 4.9 caused only minor damage. Approximately how much more intense was the San Francisco earthquake than the Japanese earthquake? See the definition of Richter Scale in [ref:fs-id1170572128685](module:m53481) in this section.
SOLUTION:
The San Francisco earthquake was ${10}^{3.4}\text{or}\;\approx 2512$ times more intense than the Japanese earthquake.
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*? Justify your answer with a proof or a counterexample.

:::exercise {fs-id1170572213080} type= 
PROBLEM:
A function is always one-to-one.
:::

:::exercise {fs-id1170572213097} type= 
PROBLEM:
$f\circ g=g\circ f,$ assuming *f* and *g* are functions.
SOLUTION:
False
:::

:::exercise {fs-id1170572213142} type= 
PROBLEM:
A relation that passes the horizontal and vertical line tests is a one-to-one function.
:::

:::exercise {fs-id1170572237255} type= 
PROBLEM:
A relation passing the horizontal line test is a function.
SOLUTION:
False
:::
For the following problems, state the domain and range of the given functions:
$f={x}^{2}+2x-3,\hspace{3em}g=\text{ln}(x-5),\hspace{3em}h=\frac{1}{x+4}$

:::exercise {fs-id1170572237344} type= 
PROBLEM:
*h*
:::

:::exercise {fs-id1170572237384} type= 
PROBLEM:
*g*
SOLUTION:
Domain: $x>5,$ range: all real numbers
:::

:::exercise {fs-id1170572237415} type= 
PROBLEM:
$h\circ f$
:::

:::exercise {fs-id1170572237460} type= 
PROBLEM:
$g\circ f$
SOLUTION:
Domain: $x>2$ and $x<-4,$ range: all real numbers
:::
Find the degree, *y*-intercept, and zeros for the following polynomial functions.

:::exercise {fs-id1170572237517} type= 
PROBLEM:
$f(x)=2{x}^{2}+9x-5$
:::

:::exercise {fs-id1170572212641} type= 
PROBLEM:
$f(x)={x}^{3}+2{x}^{2}-2x$
SOLUTION:
Degree of 3, $y$-intercept: 0, zeros: 0, $\sqrt{3}-1,−1-\sqrt{3}$
:::
Simplify the following trigonometric expressions.

:::exercise {fs-id1170572212723} type= 
PROBLEM:
$\frac{{\text{tan}}^{2}x}{{\text{sec}}^{2}x}+{\text{cos}}^{2}x$
:::

:::exercise {fs-id1170572212773} type= 
PROBLEM:
${\text{cos}}^{2}x-{\text{sin}}^{2}x$
SOLUTION:
$\begin{array}{l}{cos}^{2}x-{sin}^{2}x=cos2x \\ =1-2{sin}^{2}x \\ =2{cos}^{2}x-1\end{array}$
:::
Solve the following trigonometric equations on the interval $x=[−2\pi ,2\pi ]$ exactly.

:::exercise {fs-id1170572243171} type= 
PROBLEM:
$6{\text{cos}}^{2}x-3=0$
:::

:::exercise {fs-id1170572243255} type= 
PROBLEM:
${\text{sec}}^{2}x-2\;\text{sec}\;x+1=0$
SOLUTION:
$0,\pm 2\pi$
:::
Solve the following logarithmic equations.

:::exercise {fs-id1170572243313} type= 
PROBLEM:
${5}^{x}=16$
:::

:::exercise {fs-id1170572243371} type= 
PROBLEM:
${\text{log}}_{2}(x+4)=3$
SOLUTION:
4
:::
Are the following functions one-to-one over their domain of existence? Does the function have an inverse? If so, find the inverse ${f}^{−1}(x)$ of the function. Justify your answer.

:::exercise {fs-id1170572139067} type= 
PROBLEM:
$f(x)={x}^{2}+2x+1$
:::

:::exercise {fs-id1170572139116} type= 
PROBLEM:
$f(x)=\frac{1}{x}$
SOLUTION:
One-to-one; yes, the function has an inverse; inverse: ${f}^{−1}(x)=\frac{1}{y}$
:::
For the following problems, determine the largest domain on which the function is one-to-one and find the inverse on that domain.

:::exercise {fs-id1170572139184} type= 
PROBLEM:
$f(x)=\sqrt{9-x}$
:::

:::exercise {fs-id1170572139263} type= 
PROBLEM:
$f(x)={x}^{2}+3x+4$
SOLUTION:
$x\ge -\frac{3}{2},{f}^{−1}(x)=-\frac{3}{2}+\frac{1}{2}\sqrt{4y-7}$
:::

:::exercise {fs-id1170572211027} type= 
PROBLEM:
A car is racing along a circular track with diameter of 1 mi. A trainer standing in the center of the circle marks his progress every 5 sec. After 5 sec, the trainer has to turn 55° to keep up with the car. How fast is the car traveling?
:::
For the following problems, consider a restaurant owner who wants to sell T-shirts advertising his brand. He recalls that there is a fixed cost and variable cost, although he does not remember the values. He does know that the T-shirt printing company charges $440 for 20 shirts and $1000 for 100 shirts.

:::exercise {fs-id1170572211052} type= 
PROBLEM:
a. Find the equation $C=f(x)$ that describes the total cost as a function of number of shirts and b. determine how many shirts he must sell to break even if he sells the shirts for $10 each.
SOLUTION:
a. $C(x)=300+7x$ b. 100 shirts
:::

:::exercise {fs-id1170572211116} type= 
PROBLEM:
a. Find the inverse function $x={f}^{−1}(C)$ and describe the meaning of this function. b. Determine how many shirts the owner can buy if he has $8000 to spend.
:::
For the following problems, consider the population of Ocean City, New Jersey, which is cyclical by season.

:::exercise {fs-id1170572211183} type= 
PROBLEM:
The population can be modeled by $P(t)=82.5-67.5\;\text{cos}[(\pi \text{/}6)t],$ where $t$ is time in months $(t=0$ represents January 1) and $P$ is population (in thousands). During a year, in what intervals is the population less than 20,000? During what intervals is the population more than 140,000?
SOLUTION:
The population is less than 20,000 from December 8 through January 23 and more than 140,000 from May 29 through August 2
:::

:::exercise {fs-id1170572211277} type= 
PROBLEM:
In reality, the overall population is most likely increasing or decreasing throughout each year. Let’s reformulate the model as $P(t)=82.5-67.5\;\text{cos}[(\pi \text{/}6)t]+t,$ where $t$ is time in months ($t=0$ represents January 1) and $P$ is population (in thousands). When is the first time the population reaches 200,000?
:::
For the following problems, consider radioactive dating. A human skeleton is found in an archeological dig. Carbon dating is implemented to determine how old the skeleton is by using the equation $y={e}^{rt},$ where $y$ is the ratio of radiocarbon still present in the material, $t$ is the number of years passed, and $r=−0.0001210$ is the decay rate of radiocarbon.

:::exercise {fs-id1170572544522} type= 
PROBLEM:
If the skeleton is expected to be 2000 years old, what percentage of radiocarbon should be present?
SOLUTION:
78.51%
:::

:::exercise {fs-id1170572544539} type= 
PROBLEM:
Find the inverse of the carbon-dating equation. What does it mean? If there is 25% radiocarbon, how old is the skeleton?
:::

## Glossary
- {def} **base**: the number $b$ in the exponential function $f(x)={b}^{x}$ and the logarithmic function $f(x)={\text{log}}_{b}x$
- {def} **exponent**: the value $x$ in the expression ${b}^{x}$
- {def} **hyperbolic functions**: the functions denoted $\text{sinh},\text{cosh},\text{tanh},\text{csch},\text{sech},$ and $\text{coth},$ which involve certain combinations of ${e}^{x}$ and ${e}^{\text{−}x}$
- {def} **inverse hyperbolic functions**: the inverses of the hyperbolic functions where $\text{cosh}$ and $\text{sech}$ are restricted to the domain $[0,\infty );$ each of these functions can be expressed in terms of a composition of the natural logarithm function and an algebraic function
- {def} **natural exponential function**: the function $f(x)={e}^{x}$
- {def} **natural logarithm**: the function $\text{ln}\;x={\text{log}}_{e}x$
- {def} **number e**: as $m$ gets larger, the quantity $(1+{(1\text{/}m))}^{m}$ gets closer to some real number; we define that real number to be $e;$ the value of $e$ is approximately $2.718282$

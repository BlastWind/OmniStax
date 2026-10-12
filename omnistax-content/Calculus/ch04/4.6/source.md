# Limits at Infinity and Asymptotes

## Learning Objectives {section:learning-objectives}
- Calculate the limit of a function as $x$ increases or decreases without bound.
- Recognize a horizontal asymptote on the graph of a function.
- Estimate the end behavior of a function as $x$ increases or decreases without bound.
- Recognize an oblique asymptote on the graph of a function.
- Analyze a function and its derivatives to draw its graph.

We have shown how to use the first and second derivatives of a function to describe the shape of a graph. To graph a function $f$ defined on an unbounded domain, we also need to know the behavior of $f$ as $x\to \text{±}\infty .$ In this section, we define limits at infinity and show how these limits affect the graph of a function. At the end of this section, we outline a strategy for graphing an arbitrary function $f.$

## Limits at Infinity
We begin by examining what it means for a function to have a finite limit at infinity. Then we study the idea of a function with an infinite limit at infinity. Back in [Introduction to Functions and Graphs](module:m53472), we looked at vertical asymptotes; in this section we deal with horizontal and oblique asymptotes.

### Limits at Infinity and Horizontal Asymptotes
Recall that $\lim_{x\to a}f(x)=L$ means $f(x)$ becomes arbitrarily close to $L$ as long as $x$ is sufficiently close to $a.$ We can extend this idea to limits at infinity. For example, consider the function $f(x)=2+\frac{1}{x}.$ As can be seen graphically in [ref:CNX_Calc_Figure_04_06_001] and numerically in [ref:fs-id1165043428402], as the values of $x$ get larger, the values of $f(x)$ approach $2.$ We say the limit as $x$ approaches $\infty$ of $f(x)$ is $2$ and write $\lim_{x\to \infty}f(x)=2.$ Similarly, for $x<0,$ as the values $|x|$ get larger, the values of $f(x)$ approaches $2.$ We say the limit as $x$ approaches $\text{−}\infty$ of $f(x)$ is $2$ and write $\lim_{x\to -\infty}f(x)=2.$

> FIGURE {fig:CNX_Calc_Figure_04_06_001} src=../../media/CNX_Calc_Figure_04_06_019.jpg
> alt: The function f(x) 2 + 1/x is graphed. The function starts negative near y = 2 but then decreases to −∞ near x = 0. The function then decreases from ∞ near x = 0 and gets nearer to y = 2 as x increases. There is a horizontal line denoting the asymptote y = 2.
> caption: The function approaches the asymptote $y=2$ as $x$ approaches $\text{±}\infty .$

> TABLE {tab:fs-id1165043428402} cols=5 class=column-header
> title: Values of a function $f$ as $x\to \text{±}\infty$
> summary: The table has four rows and five columns. The first column is a header column and it reads x, 2 + 1/x, x, and 2 + 1/x. After the header, the first row reads 10, 100, 1000, and 10000. The second row reads 2.1, 2.01, 2.001, and 2.0001. The third row reads −10, −100, −1000, and −10000. The fourth row reads 1.9, 1.99, 1.999, and 1.9999.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1,000$ | $10,000$ |
| **$2+\frac{1}{x}$** | $2.1$ | $2.01$ | $2.001$ | $2.0001$ |
| **$x$** | $−10$ | $−100$ | $−1000$ | $−10,000$ |
| **$2+\frac{1}{x}$** | $1.9$ | $1.99$ | $1.999$ | $1.9999$ |

More generally, for any function $f,$ we say the limit as $x\to \infty$ of $f(x)$ is $L$ if $f(x)$ becomes arbitrarily close to $L$ as long as $x$ is sufficiently large. In that case, we write $\lim_{x\to \infty}f(x)=L.$ Similarly, we say the limit as $x\to \text{−}\infty$ of $f(x)$ is $L$ if $f(x)$ becomes arbitrarily close to $L$ as long as $x<0$ and $|x|$ is sufficiently large. In that case, we write $\lim_{x\to \text{−}\infty}f(x)=L.$ We now look at the definition of a function having a limit at infinity.

:::note [definition] Definition
(Informal) If the values of $f(x)$ become arbitrarily close to $L$ as $x$ becomes sufficiently large, we say the function $f$ has a {term:limit at infinity} and write

$\lim_{x\to \infty}f(x)=L.$  {eq:fs-id1165042986551}

If the values of $f(x)$ becomes arbitrarily close to $L$ for $x<0$ as $|x|$ becomes sufficiently large, we say that the function $f$ has a limit at negative infinity and write

$\lim_{x\to –∞}f(x)=L.$  {eq:fs-id1165043105208}

:::
If the values $f(x)$ are getting arbitrarily close to some finite value $L$ as $x\to \infty$ or $x\to \text{−}\infty ,$ the graph of $f$ approaches the line $y=L.$ In that case, the line $y=L$ is a horizontal asymptote of $f$ ([ref:CNX_Calc_Figure_04_06_002]). For example, for the function $f(x)=\frac{1}{x},$ since $\lim_{x\to \infty}f(x)=0,$ the line $y=0$ is a horizontal asymptote of $f(x)=\frac{1}{x}.$

:::note [definition] Definition
If $\lim_{x\to \infty}f(x)=L$ or $\lim_{x\to \text{−}\infty}f(x)=L,$ we say the line $y=L$ is a {term:horizontal asymptote} of $f.$
:::

> FIGURE {fig:CNX_Calc_Figure_04_06_002} src=../../media/CNX_Calc_Figure_04_06_020.jpg
> alt: The figure is broken up into two figures labeled a and b. Figure a shows a function f(x) approaching but never touching a horizontal dashed line labeled L from above. Figure b shows a function f(x) approaching but never a horizontal dashed line labeled M from below.
> caption: (a) As $x\to \infty ,$ the values of $f$ are getting arbitrarily close to $L.$ The line $y=L$ is a horizontal asymptote of $f.$ (b) As $x\to \text{−}\infty ,$ the values of $f$ are getting arbitrarily close to $M.$ The line $y=M$ is a horizontal asymptote of $f.$

A function cannot cross a vertical asymptote because the graph must approach infinity (or $\text{−}\infty )$ from at least one direction as $x$ approaches the vertical asymptote. However, a function may cross a horizontal asymptote. In fact, a function may cross a horizontal asymptote an unlimited number of times. For example, the function $f(x)=\frac{(\text{cos}\;x)}{x}+1$ shown in [ref:CNX_Calc_Figure_04_06_003] intersects the horizontal asymptote $y=1$ an infinite number of times as it oscillates around the asymptote with ever-decreasing amplitude.

> FIGURE {fig:CNX_Calc_Figure_04_06_003} src=../../media/CNX_Calc_Figure_04_06_002.jpg
> alt: The function f(x) = (cos x)/x + 1 is shown. It decreases from (0, ∞) and then proceeds to oscillate around y = 1 with decreasing amplitude.
> caption: The graph of $f(x)=(\text{cos}\;x)\text{/}x+1$ crosses its horizontal asymptote $y=1$ an infinite number of times.

The algebraic limit laws and squeeze theorem we introduced in [Introduction to Limits](module:m53483) also apply to limits at infinity. We illustrate how to use these laws to compute several limits at infinity.

:::example {ex:fs-id1165042962649} Computing Limits at Infinity

:::exercise {fs-id1165042947732} type= 
PROBLEM:
For each of the following functions $f,$ evaluate $\lim_{x\to \infty}f(x)$ and $\lim_{x\to \text{−}\infty}f(x).$ Determine the horizontal asymptote(s) for $f.$
a. $f(x)=5-\frac{2}{{x}^{2}}$
b. $f(x)=\frac{\text{sin}\;x}{x}$
c. $f(x)={\text{tan}}^{−1}(x)$
SOLUTION:
a. Using the algebraic limit laws, we have $\lim_{x\to \infty}(5-\frac{2}{{x}^{2}})=\lim_{x\to \infty}5-2(\lim_{x\to \infty}\frac{1}{x}).(\lim_{x\to \infty}\frac{1}{x})=5-2\cdot 0=5.$

Similarly, $\lim_{x\to -\infty}f(x)=5.$

Therefore, $f(x)=5-\frac{2}{{x}^{2}}$ has a horizontal asymptote of $y=5$ and $f$ approaches this horizontal asymptote as $x\to \text{±}\infty$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_004} src=../../media/CNX_Calc_Figure_04_06_003.jpg
> alt: The function f(x) = 5 – 2/x2 is graphed. The function approaches the horizontal asymptote y = 5 as x approaches ±∞.
> caption: This function approaches a horizontal asymptote as $x\to \text{±}\infty .$

b. Since $−1\le \text{sin}\;x\le 1$ for all $x,$ we have

$\frac{−1}{x}\le \frac{\text{sin}\;x}{x}\le \frac{1}{x}$  {eq:fs-id1165043093355}

for all $x≠0.$ Also, since

$\lim_{x\to \infty}\frac{−1}{x}=0=\lim_{x\to \infty}\frac{1}{x},$  {eq:fs-id1165043197153}

we can apply the squeeze theorem to conclude that

$\lim_{x\to \infty}\frac{\text{sin}\;x}{x}=0.$  {eq:fs-id1165043036581}

Similarly,

$\lim_{x\to \text{−}\infty}\frac{\text{sin}\;x}{x}=0.$  {eq:fs-id1165043122536}

Thus, $f(x)=\frac{\text{sin}\;x}{x}$ has a horizontal asymptote of $y=0$ and $f(x)$ approaches this horizontal asymptote as $x\to \text{±}\infty$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_005} src=../../media/CNX_Calc_Figure_04_06_004.jpg
> alt: The function f(x) = (sin x)/x is shown. It has a global maximum at (0, 1) and then proceeds to oscillate around y = 0 with decreasing amplitude.
> caption: This function crosses its horizontal asymptote multiple times.

c. To evaluate $\lim_{x\to \infty}{\text{tan}}^{−1}(x)$ and $\lim_{x\to \text{−}\infty}{\text{tan}}^{−1}(x),$ we first consider the graph of $y=\text{tan}(x)$ over the interval $(\text{−}\pi \text{/}2,\pi \text{/}2)$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_006} src=../../media/CNX_Calc_Figure_04_06_021.jpg
> alt: The function f(x) = tan x is shown. It increases from (−π/2, −∞), passes through the origin, and then increases toward (π/2, ∞). There are vertical dashed lines marking x = ±π/2.
> caption: The graph of $\text{tan}\;x$ has vertical asymptotes at $x=\text{±}\frac{\pi}{2}$

Since

$\lim_{x\to {(\pi \text{/}2)}^{-}}\text{tan}\;x=\infty ,$  {eq:fs-id1165043119614}

it follows that

$\lim_{x\to \infty}{\text{tan}}^{−1}(x)=\frac{\pi}{2}.$  {eq:fs-id1165042563973}

Similarly, since

$\lim_{x\to {(–π\text{/}2)}^{+}}\text{tan}\;x=\text{−}\infty ,$  {eq:fs-id1165042923290}

it follows that

$\lim_{x\to \text{−}\infty}{\text{tan}}^{−1}(x)=-\frac{\pi}{2}.$  {eq:fs-id1165043056813}

As a result, $y=\frac{\pi}{2}$ and $y=-\frac{\pi}{2}$ are horizontal asymptotes of $f(x)={\text{tan}}^{−1}(x)$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_007} src=../../media/CNX_Calc_Figure_04_06_005.jpg
> alt: The function f(x) = tan−1 x is shown. It increases from (−∞, −π/2), passes through the origin, and then increases toward (∞, π/2). There are horizontal dashed lines marking y = ±π/2.
> caption: This function has two horizontal asymptotes.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042320884} type= 
PROBLEM:
Evaluate $\lim_{x\to \text{−}\infty}(3+\frac{4}{x})$ and $\lim_{x\to \infty}(3+\frac{4}{x}).$ Determine the horizontal asymptotes of $f(x)=3+\frac{4}{x},$ if any.
SOLUTION:
Both limits are $3.$ The line $y=3$ is a horizontal asymptote.
COMMENTARY: Hint
$\lim_{x\to \text{±}\infty}1\text{/}x=0$
:::
:::

### Infinite Limits at Infinity
Sometimes the values of a function $f$ become arbitrarily large as $x\to \infty$ (or as $x\to \text{−}\infty ).$ In this case, we write $\lim_{x\to \infty}f(x)=\infty$ (or $\lim_{x\to \text{−}\infty}f(x)=\infty ).$ On the other hand, if the values of $f$ are negative but become arbitrarily large in magnitude as $x\to \infty$ (or as $x\to \text{−}\infty ),$ we write $\lim_{x\to \infty}f(x)=\text{−}\infty$ (or $\lim_{x\to \text{−}\infty}f(x)=\text{−}\infty ).$
For example, consider the function $f(x)={x}^{3}.$ As seen in [ref:fs-id1165042406634] and [ref:CNX_Calc_Figure_04_06_008], as $x\to \infty$ the values $f(x)$ become arbitrarily large. Therefore, $\lim_{x\to \infty}{x}^{3}=\infty .$ On the other hand, as $x\to \text{−}\infty ,$ the values of $f(x)={x}^{3}$ are negative but become arbitrarily large in magnitude. Consequently, $\lim_{x\to \text{−}\infty}{x}^{3}=\text{−}\infty .$

> TABLE {tab:fs-id1165042406634} cols=6 class=column-header
> title: Values of a power function as $x\to \text{±}\infty$
> summary: The table has four rows and six columns. The first column is a header column and it reads x, x3, x, and x3. After the header, the first row reads 10, 20, 50, 100, and 1000. The second row reads 1000, 8000, 125000, 1,000,000, and 1,000,000,000. The third row reads −10, −20, −50, −100, and −1000. The forth row reads −1000, −8000, −125,000, −1,000,000, and −1,000,000,000.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **$x$** | $10$ | $20$ | $50$ | $100$ | $1000$ |
| **${x}^{3}$** | $1000$ | $8000$ | $125,000$ | $1,000,000$ | $1,000,000,000$ |
| **$x$** | $−10$ | $−20$ | $−50$ | $−100$ | $−1000$ |
| **${x}^{3}$** | $−1000$ | $−8000$ | $−125,000$ | $−1,000,000$ | $−1,000,000,000$ |

> FIGURE {fig:CNX_Calc_Figure_04_06_008} src=../../media/CNX_Calc_Figure_04_06_022.jpg
> alt: The function f(x) = x3 is graphed. It is apparent that this function rapidly approaches infinity as x approaches infinity.
> caption: For this function, the functional values approach infinity as $x\to \text{±}\infty .$

:::note [definition] Definition
(Informal) We say a function $f$ has an infinite limit at infinity and write

$\lim_{x\to \infty}f(x)=\infty .$  {eq:fs-id1165043276364}

if $f(x)$ becomes arbitrarily large for $x$ sufficiently large. We say a function has a negative infinite limit at infinity and write

$\lim_{x\to \infty}f(x)=\text{−}\infty .$  {eq:fs-id1165042647077}

if $f(x)<0$ and $|f(x)|$ becomes arbitrarily large for $x$ sufficiently large. Similarly, we can define infinite limits as $x\to \text{−}\infty .$
:::

### Formal Definitions
Earlier, we used the terms *arbitrarily close*, *arbitrarily large*, and *sufficiently large* to define limits at infinity informally. Although these terms provide accurate descriptions of limits at infinity, they are not precise mathematically. Here are more formal definitions of limits at infinity. We then look at how to use these definitions to prove results involving limits at infinity.

:::note [definition] Definition
(Formal) We say a function $f$ has a {term:limit at infinity}, if there exists a real number $L$ such that for all $ε>0,$ there exists $N>0$ such that

$|f(x)-L|<ε$  {eq:fs-id1165043395062}

for all $x>N.$ In that case, we write

$\lim_{x\to \infty}f(x)=L$  {eq:fs-id1165042364605}

(see [ref:CNX_Calc_Figure_04_06_009]).
We say a function $f$ has a limit at negative infinity if there exists a real number $L$ such that for all $ε>0,$ there exists $N<0$ such that

$|f(x)-L|<ε$  {eq:fs-id1165042331766}

for all $x<N.$ In that case, we write

$\lim_{x\to \text{−}\infty}f(x)=L.$  {eq:fs-id1165042472050}

:::

> FIGURE {fig:CNX_Calc_Figure_04_06_009} src=../../media/CNX_Calc_Figure_04_06_023.jpg
> alt: The function f(x) is graphed, and it has a horizontal asymptote at L. L is marked on the y axis, as is L + ॉ and L – ॉ. On the x axis, N is marked as the value of x such that f(x) = L + ॉ.
> caption: For a function with a limit at infinity, for all $x>N,$ $|f(x)-L|<ε.$

Earlier in this section, we used graphical evidence in [ref:CNX_Calc_Figure_04_06_001] and numerical evidence in [ref:fs-id1165043428402] to conclude that $\lim_{x\to \infty}(2+\frac{1}{x})=2.$ Here we use the formal definition of limit at infinity to prove this result rigorously.

:::example {ex:fs-id1165042970473} A Finite Limit at Infinity Example

:::exercise {fs-id1165042587292} type= 
PROBLEM:
Use the formal definition of limit at infinity to prove that $\lim_{x\to \infty}(2+\frac{1}{x})=2.$
SOLUTION:
Let $ε>0.$ Let $N=\frac{1}{ε}.$ Therefore, for all $x>N,$ we have

$|2+\frac{1}{x}-2|=|\frac{1}{x}|=\frac{1}{x}<\frac{1}{N}=ε\text{.}$  {eq:fs-id1165043312498}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042480095} type= 
PROBLEM:
Use the formal definition of limit at infinity to prove that $\lim_{x\to \infty}(3-\frac{1}{{x}^{2}})=3.$
SOLUTION:
Let $ε>0.$ Let $N=\frac{1}{\sqrt{ε}}.$ Therefore, for all $x>N,$ we have
$|3-\frac{1}{{x}^{2}}-3|=\frac{1}{{x}^{2}}<\frac{1}{{N}^{2}}=ε$
Therefore, $\lim_{x\to \infty}(3-1\text{/}{x}^{2})=3.$
COMMENTARY: Hint
Let $N=\frac{1}{\sqrt{ε}}.$
:::
:::
We now turn our attention to a more precise definition for an infinite limit at infinity.

:::note [definition] Definition
(Formal) We say a function $f$ has an {term:infinite limit at infinity} and write

$\lim_{x\to \infty}f(x)=\infty$  {eq:fs-id1165042364247}

if for all $M>0,$ there exists an $N>0$ such that

$f(x)>M$  {eq:fs-id1165043248795}

for all $x>N$ (see [ref:CNX_Calc_Figure_04_06_010]).
We say a function has a negative infinite limit at infinity and write

$\lim_{x\to \infty}f(x)=\text{−}\infty$  {eq:fs-id1165042374753}

if for all $M<0,$ there exists an $N>0$ such that

$f(x)<M$  {eq:fs-id1165043259687}

for all $x>N.$
Similarly we can define limits as $x\to \text{−}\infty .$
:::

> FIGURE {fig:CNX_Calc_Figure_04_06_010} src=../../media/CNX_Calc_Figure_04_06_024.jpg
> alt: The function f(x) is graphed. It continues to increase rapidly after x = N, and f(N) = M.
> caption: For a function with an infinite limit at infinity, for all $x>N,$ $f(x)>M.$

Earlier, we used graphical evidence ([ref:CNX_Calc_Figure_04_06_008]) and numerical evidence ([ref:fs-id1165042406634]) to conclude that $\lim_{x\to \infty}{x}^{3}=\infty .$ Here we use the formal definition of infinite limit at infinity to prove that result.

:::example {ex:fs-id1165042323534} An Infinite Limit at Infinity

:::exercise {fs-id1165042323536} type= 
PROBLEM:
Use the formal definition of infinite limit at infinity to prove that $\lim_{x\to \infty}{x}^{3}=\infty .$
SOLUTION:
Let $M>0.$ Let $N=\sqrt[3]{M}.$ Then, for all $x>N,$ we have

${x}^{3}>{N}^{3}={(\sqrt[3]{M})}^{3}=M.$  {eq:fs-id1165043174087}

Therefore, $\lim_{x\to \infty}{x}^{3}=\infty .$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042320222} type= 
PROBLEM:
Use the formal definition of infinite limit at infinity to prove that $\lim_{x\to \infty}3{x}^{2}=\infty .$
SOLUTION:
Let $M>0.$ Let $N=\sqrt{\frac{M}{3}}.$ Then, for all $x>N,$ we have
$3{x}^{2}>3{N}^{2}=3{(\sqrt{\frac{M}{3}})}^{2}{}^{2}=\frac{3M}{3}=M$
COMMENTARY: Hint
Let $N=\sqrt{\frac{M}{3}}.$
:::
:::

## End Behavior
The behavior of a function as $x\to \text{±}\infty$ is called the function’s {term:end behavior}. At each of the function’s ends, the function could exhibit one of the following types of behavior:
1. The function $f(x)$ approaches a horizontal asymptote $y=L.$
2. The function $f(x)\to \infty$ or $f(x)\to \text{−}\infty .$
3. The function does not approach a finite limit, nor does it approach $\infty$ or $\text{−}\infty .$ In this case, the function may have some oscillatory behavior.
Let’s consider several classes of functions here and look at the different types of end behaviors for these functions.

### End Behavior for Polynomial Functions
Consider the power function $f(x)={x}^{n}$ where $n$ is a positive integer. From [ref:CNX_Calc_Figure_04_06_011] and [ref:CNX_Calc_Figure_04_06_012], we see that

$\lim_{x\to \infty}{x}^{n}=\infty ;n=1,2,3\text{,…}$  {eq:fs-id1165042545843}

and

$\lim_{x\to \text{−}\infty}{x}^{n}=\{\begin{array}{l}\infty ;n=2,4,6\text{,…} \\ \text{−}\infty ;n=1,3,5\text{,…}\end{array}.$  {eq:fs-id1165042705928}

> FIGURE {fig:CNX_Calc_Figure_04_06_011} src=../../media/CNX_Calc_Figure_04_06_025.jpg
> alt: The functions x2, x4, and x6 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.
> caption: For power functions with an even exponent of $n,$ $\lim_{x\to \infty}{x}^{n}=\infty =\lim_{x\to \text{−}\infty}{x}^{n}.$

> FIGURE {fig:CNX_Calc_Figure_04_06_012} src=../../media/CNX_Calc_Figure_04_06_026.jpg
> alt: The functions x, x3, and x5 are graphed, and it is apparent that as the exponent grows the functions increase more quickly.
> caption: For power functions with an odd exponent of $n,$ $\lim_{x\to \infty}{x}^{n}=\infty$ and $\lim_{x\to \text{−}\infty}{x}^{n}=\text{−}\infty .$

Using these facts, it is not difficult to evaluate $\lim_{x\to \infty}c{x}^{n}$ and $\lim_{x\to \text{−}\infty}c{x}^{n},$ where $c$ is any constant and $n$ is a positive integer. If $c>0,$ the graph of $y=c{x}^{n}$ is a vertical stretch or compression of $y={x}^{n},$ and therefore

$\lim_{x\to \infty}c{x}^{n}=\lim_{x\to \infty}{x}^{n}\;\text{and}\;\lim_{x\to \text{−}\infty}c{x}^{n}=\lim_{x\to \text{−}\infty}{x}^{n}\;\text{if}\;c>0.$  {eq:fs-id1165042327426}

If $c<0,$ the graph of $y=c{x}^{n}$ is a vertical stretch or compression combined with a reflection about the $x$-axis, and therefore

$\lim_{x\to \infty}c{x}^{n}=\text{−}\lim_{x\to \infty}{x}^{n}\;\text{and}\;\lim_{x\to \text{−}\infty}c{x}^{n}=\text{−}\lim_{x\to \text{−}\infty}{x}^{n}\;\text{if}\;c<0.$  {eq:fs-id1165042327325}

If $c=0,y=c{x}^{n}=0,$ in which case $\lim_{x\to \infty}c{x}^{n}=0=\lim_{x\to \text{−}\infty}c{x}^{n}.$

:::example {ex:fs-id1165043219126} Limits at Infinity for Power Functions

:::exercise {fs-id1165043219128} type= 
PROBLEM:
For each function $f,$ evaluate $\lim_{x\to \infty}f(x)$ and $\lim_{x\to \text{−}\infty}f(x).$
a. $f(x)=−5{x}^{3}$
b. $f(x)=2{x}^{4}$
SOLUTION:
a. Since the coefficient of ${x}^{3}$ is $−5,$ the graph of $f(x)=−5{x}^{3}$ involves a vertical stretch and reflection of the graph of $y={x}^{3}$ about the $x$-axis. Therefore, $\lim_{x\to \infty}(−5{x}^{3})=\text{−}\infty$ and $\lim_{x\to \text{−}\infty}(−5{x}^{3})=\infty .$
b. Since the coefficient of ${x}^{4}$ is $2,$ the graph of $f(x)=2{x}^{4}$ is a vertical stretch of the graph of $y={x}^{4}.$ Therefore, $\lim_{x\to \infty}2{x}^{4}=\infty$ and $\lim_{x\to \text{−}\infty}2{x}^{4}=\infty .$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042401060} type= 
PROBLEM:
Let $f(x)=−3{x}^{4}.$ Find $\lim_{x\to \infty}f(x).$
SOLUTION:
$\text{−}\infty$
COMMENTARY: Hint
The coefficient $−3$ is negative.
:::
:::
We now look at how the limits at infinity for power functions can be used to determine $\lim_{x\to \text{±}\infty}f(x)$ for any polynomial function $f.$ Consider a polynomial function

$f(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{…}+{a}_{1}x+{a}_{0}$  {eq:fs-id1165042710943}

of degree $n\ge 1$ so that ${a}_{n}≠0.$ Factoring, we see that

$f(x)={a}_{n}{x}^{n}(1+\frac{{a}_{n-1}}{{a}_{n}}\;\frac{1}{x}+\text{…}+\frac{{a}_{1}}{{a}_{n}}\;\frac{1}{{x}^{n-1}}+\frac{{a}_{0}}{{a}_{n}}\frac{1}{{x}^{n}}).$  {eq:fs-id1165042319257}

As $x\to \text{±}\infty ,$ all the terms inside the parentheses approach zero except the first term. We conclude that

$\lim_{x\to \text{±}\infty}f(x)=\lim_{x\to \text{±}\infty}{a}_{n}{x}^{n}.$  {eq:fs-id1165043348550}

For example, the function $f(x)=5{x}^{3}-3{x}^{2}+4$ behaves like $g(x)=5{x}^{3}$ as $x\to \text{±}\infty$ as shown in [ref:CNX_Calc_Figure_04_06_013] and [ref:fs-id1165043250976].

> FIGURE {fig:CNX_Calc_Figure_04_06_013} src=../../media/CNX_Calc_Figure_04_06_006.jpg
> alt: Both functions f(x) = 5x3 – 3x2 + 4 and g(x) = 5x3 are plotted. Their behavior for large positive and large negative numbers converges.
> caption: The end behavior of a polynomial is determined by the behavior of the term with the largest exponent.

> TABLE {tab:fs-id1165043250976} cols=4 class=column-header
> title: A polynomial’s end behavior is determined by the term with the largest exponent.
> summary: The table has six rows and four columns. The first column is a header column and it reads x, f(x) = 5x3 – 3x2 + 4, g(x) = 5x3, x, f(x) = 5x3 – 3x2 + 4, and g(x) = 5x3. After the header, the first row reads 10, 100, and 1000. The second row reads 4704, 4,970,004, and 4,997,000,004. The third row reads 5000, 5,000,000, 5,000,000,000. The fourth row reads −10, −100, and −1000. The fifth row reads −5296, −5,029,996, and −5,002,999,996. The sixth row reads −5000, −5,000,000, and −5,000,000,000.

|  |  |  |  |
| --- | --- | --- | --- |
| **$x$** | $10$ | $100$ | $1000$ |
| **$f(x)=5{x}^{3}-3{x}^{2}+4$** | $4704$ | $4,970,004$ | $4,997,000,004$ |
| **$g(x)=5{x}^{3}$** | $5000$ | $5,000,000$ | $5,000,000,000$ |
| **$x$** | $−10$ | $−100$ | $−1000$ |
| **$f(x)=5{x}^{3}-3{x}^{2}+4$** | $−5296$ | $−5,029,996$ | $−5,002,999,996$ |
| **$g(x)=5{x}^{3}$** | $−5000$ | $−5,000,000$ | $−5,000,000,000$ |

### End Behavior for Algebraic Functions
The end behavior for rational functions and functions involving radicals is a little more complicated than for polynomials. In [ref:fs-id1165042638553], we show that the limits at infinity of a rational function $f(x)=\frac{p(x)}{q(x)}$ depend on the relationship between the degree of the numerator and the degree of the denominator. To evaluate the limits at infinity for a rational function, we divide the numerator and denominator by the highest power of $x$ appearing in the denominator. This determines which term in the overall expression dominates the behavior of the function at large values of $x.$

:::example {ex:fs-id1165042638553} Determining End Behavior for Rational Functions

:::exercise {fs-id1165042638555} type= 
PROBLEM:
For each of the following functions, determine the limits as $x\to \infty$ and $x\to \text{−}\infty .$ Then, use this information to describe the end behavior of the function.
a. $f(x)=\frac{3x-1}{2x+5}$ (*Note:* The degree of the numerator and the denominator are the same.)
b. $f(x)=\frac{3{x}^{2}+2x}{4{x}^{3}-5x+7}$ (*Note:* The degree of numerator is less than the degree of the denominator.)
c. $f(x)=\frac{3{x}^{2}+4x}{x+2}$ (*Note:* The degree of numerator is greater than the degree of the denominator.)
SOLUTION:
a. The highest power of $x$ in the denominator is $x.$ Therefore, dividing the numerator and denominator by $x$ and applying the algebraic limit laws, we see that

$\begin{array}{rl}\lim_{x\to \text{±}\infty}\frac{3x-1}{2x+5} & =\lim_{x\to \text{±}\infty}\frac{3-1\text{/}x}{2+5\text{/}x} \\ & =\frac{\lim_{x\to \text{±}\infty}(3-1\text{/}x)}{\lim_{x\to \text{±}\infty}(2+5\text{/}x)} \\ & =\frac{\lim_{x\to \text{±}\infty}3-\lim_{x\to \text{±}\infty}1\text{/}x}{\lim_{x\to \text{±}\infty}2+\lim_{x\to \text{±}\infty}5\text{/}x} \\ & =\frac{3-0}{2+0}=\frac{3}{2}.\end{array}$  {eq:fs-id1165043281584}

Since $\lim_{x\to \text{±}\infty}f(x)=\frac{3}{2},$ we know that $y=\frac{3}{2}$ is a horizontal asymptote for this function as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_014} src=../../media/CNX_Calc_Figure_04_06_007.jpg
> alt: The function f(x) = (3x - 1)/(2x + 5) is plotted as is its horizontal asymptote at y = 3/2.
> caption: The graph of this rational function approaches a horizontal asymptote as $x\to \text{±}\infty .$

b. Since the largest power of $x$ appearing in the denominator is ${x}^{3},$ divide the numerator and denominator by ${x}^{3}.$ After doing so and applying algebraic limit laws, we obtain

$\lim_{x\to \text{±}\infty}\frac{3{x}^{2}+2x}{4{x}^{3}-5x+7}=\lim_{x\to \text{±}\infty}\frac{3\text{/}x+2\text{/}{x}^{2}}{4-5\text{/}{x}^{2}+7\text{/}{x}^{3}}=\frac{3(0)+2(0)}{4-5(0)+7(0)}=0.$  {eq:fs-id1165042707214}

Therefore $f$ has a horizontal asymptote of $y=0$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_015} src=../../media/CNX_Calc_Figure_04_06_008.jpg
> alt: The function f(x) = (3x2 + 2x)/(4x2 – 5x + 7) is plotted as is its horizontal asymptote at y = 0.
> caption: The graph of this rational function approaches the horizontal asymptote $y=0$ as $x\to \text{±}\infty .$

c. Dividing the numerator and denominator by $x,$ we have

$\lim_{x\to \text{±}\infty}\frac{3{x}^{2}+4x}{x+2}=\lim_{x\to \text{±}\infty}\frac{3x+4}{1+2\text{/}x}.$  {eq:fs-id1165042333346}

As $x\to \text{±}\infty ,$ the denominator approaches $1.$ As $x\to \infty ,$ the numerator approaches $+\infty .$ As $x\to \text{−}\infty ,$ the numerator approaches $\text{−}\infty .$ Therefore $\lim_{x\to \infty}f(x)=\infty ,$ whereas $\lim_{x\to \text{−}\infty}f(x)=\text{−}\infty$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_04_06_016} src=../../media/CNX_Calc_Figure_04_06_027.jpg
> alt: The function f(x) = (3x2 + 4x)/(x + 2) is plotted. It appears to have a diagonal asymptote as well as a vertical asymptote at x = −2.
> caption: As $x\to \infty ,$ the values $f(x)\to \infty .$ As $x\to \text{−}\infty ,$ the values $f(x)\to \text{−}\infty .$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042660292} type= 
PROBLEM:
Evaluate $\lim_{x\to \text{±}\infty}\frac{3{x}^{2}+2x-1}{5{x}^{2}-4x+7}$ and use these limits to determine the end behavior of $f(x)=\frac{3{x}^{2}+2x-1}{5{x}^{2}-4x+7}.$
SOLUTION:
$\frac{3}{5}$
COMMENTARY: Hint
Divide the numerator and denominator by ${x}^{2}.$
:::
:::
Before proceeding, consider the graph of $f(x)=\frac{(3{x}^{2}+4x)}{(x+2)}$ shown in [ref:CNX_Calc_Figure_04_06_017]. As $x\to \infty$ and $x\to \text{−}\infty ,$ the graph of $f$ appears almost linear. Although $f$ is certainly not a linear function, we now investigate why the graph of $f$ seems to be approaching a linear function. First, using long division of polynomials, we can write

$f(x)=\frac{3{x}^{2}+4x}{x+2}=3x-2+\frac{4}{x+2}.$  {eq:fs-id1165043219202}

Since $\frac{4}{(x+2)}\to 0$ as $x\to \text{±}\infty ,$ we conclude that

$\lim_{x\to \text{±}\infty}(f(x)-(3x-2))=\lim_{x\to \text{±}\infty}\frac{4}{x+2}=0.$  {eq:fs-id1165042465555}

Therefore, the graph of $f$ approaches the line $y=3x-2$ as $x\to \text{±}\infty .$ This line is known as an {term:oblique asymptote} for $f$ ([ref:CNX_Calc_Figure_04_06_017]).

> FIGURE {fig:CNX_Calc_Figure_04_06_017} src=../../media/CNX_Calc_Figure_04_06_009.jpg
> alt: The function f(x) = (3x2 + 4x)/(x + 2) is plotted as is its diagonal asymptote y = 3x – 2.
> caption: The graph of the rational function $f(x)=(3{x}^{2}+4x)\text{/}(x+2)$ approaches the oblique asymptote $y=3x-2\;\text{as}\;x\to \text{±}\infty .$

We can summarize the results of [ref:fs-id1165042638553] to make the following conclusion regarding end behavior for rational functions. Consider a rational function

$f(x)=\frac{p(x)}{q(x)}=\frac{{a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{…}+{a}_{1}x+{a}_{0}}{{b}_{m}{x}^{m}+{b}_{m-1}{x}^{m-1}+\text{…}+{b}_{1}x+{b}_{0}},$  {eq:fs-id1165042461226}

where ${a}_{n}≠0\;\text{and}\;{b}_{m}≠0.$
1. If the degree of the numerator is the same as the degree of the denominator $(n=m),$ then $f$ has a horizontal asymptote of $y={a}_{n}\text{/}{b}_{m}$ as $x\to \text{±}\infty .$
2. If the degree of the numerator is less than the degree of the denominator $(n<m),$ then $f$ has a horizontal asymptote of $y=0$ as $x\to \text{±}\infty .$
3. If the degree of the numerator is greater than the degree of the denominator $(n>m),$ then $f$ does not have a horizontal asymptote. The limits at infinity are either positive or negative infinity, depending on the signs of the leading terms. In addition, using long division, the function can be rewritten as

$f(x)=\frac{p(x)}{q(x)}=g(x)+\frac{r(x)}{q(x)},$  {eq:fs-id1165043422484}

where the degree of $r(x)$ is less than the degree of $q(x).$ As a result, $\lim_{x\to \text{±}\infty}r(x)\text{/}q(x)=0.$ Therefore, the values of $[f(x)-g(x)]$ approach zero as $x\to \text{±}\infty .$ If the degree of $p(x)$ is exactly one more than the degree of $q(x)$ $(n=m+1),$ the function $g(x)$ is a linear function. In this case, we call $g(x)$ an oblique asymptote.

Now let’s consider the end behavior for functions involving a radical.

:::example {ex:fs-id1165042631816} Determining End Behavior for a Function Involving a Radical

:::exercise {fs-id1165042631818} type= 
PROBLEM:
Find the limits as $x\to \infty$ and $x\to \text{−}\infty$ for $f(x)=\frac{3x-2}{\sqrt{4{x}^{2}+5}}$ and describe the end behavior of $f.$
SOLUTION:
Let’s use the same strategy as we did for rational functions: divide the numerator and denominator by a power of $x.$ To determine the appropriate power of $x,$ consider the expression $\sqrt{4{x}^{2}+5}$ in the denominator. Since

$\sqrt{4{x}^{2}+5}\approx \sqrt{4{x}^{2}}=2|x|$  {eq:fs-id1165042418061}

for large values of $x$ in effect $x$ appears just to the first power in the denominator. Therefore, we divide the numerator and denominator by $|x|.$ Then, using the fact that $|x|=x$ for $x>0,$ $|x|=\text{−}x$ for $x<0,$ and $|x|=\sqrt{{x}^{2}}$ for all $x,$ we calculate the limits as follows:

$\begin{array}{rll}\lim_{x\to \infty}\frac{3x-2}{\sqrt{4{x}^{2}+5}} & = & \lim_{x\to \infty}\frac{(1\text{/}|x|)(3x-2)}{(1\text{/}|x|)\sqrt{4{x}^{2}+5}} \\ & = & \lim_{x\to \infty}\frac{(1\text{/}x)(3x-2)}{\sqrt{(1\text{/}{x}^{2})(4{x}^{2}+5)}} \\ & = & \lim_{x\to \infty}\frac{3-2\text{/}x}{\sqrt{4+5\text{/}{x}^{2}}}=\frac{3}{\sqrt{4}}=\frac{3}{2} \\ \lim_{x\to \text{−}\infty}\frac{3x-2}{\sqrt{4{x}^{2}+5}} & = & \lim_{x\to \text{−}\infty}\frac{(1\text{/}|x|)(3x-2)}{(1\text{/}|x|)\sqrt{4{x}^{2}+5}} \\ & = & \lim_{x\to \text{−}\infty}\frac{(−1\text{/}x)(3x-2)}{\sqrt{(1\text{/}{x}^{2})(4{x}^{2}+5)}} \\ & = & \lim_{x\to \text{−}\infty}\frac{−3+2\text{/}x}{\sqrt{4+5\text{/}{x}^{2}}}=\frac{−3}{\sqrt{4}}=\frac{−3}{2}.\end{array}$  {eq:fs-id1165042418216}

Therefore, $f(x)$ approaches the horizontal asymptote $y=\frac{3}{2}$ as $x\to \infty$ and the horizontal asymptote $y=-\frac{3}{2}$ as $x\to \text{−}\infty$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_06_018} src=../../media/CNX_Calc_Figure_04_06_010.jpg
> alt: The function f(x) = (3x − 2)/(the square root of the quantity (4x2 + 5)) is plotted. It has two horizontal asymptotes at y = ±3/2, and it crosses y = −3/2 before converging toward it from below.
> caption: This function has two horizontal asymptotes and it crosses one of the asymptotes.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042463919} type= 
PROBLEM:
Evaluate $\lim_{x\to \infty}\frac{\sqrt{3{x}^{2}+4}}{x+6}.$
SOLUTION:
$\text{±}\sqrt{3}$
COMMENTARY: Hint
Divide the numerator and denominator by $|x|.$
:::
:::

### Determining End Behavior for Transcendental Functions
The six basic trigonometric functions are periodic and do not approach a finite limit as $x\to \text{±}\infty .$ For example, $\text{sin}\;x$ oscillates between $1\;\text{and}\;−1$ ([ref:CNX_Calc_Figure_04_06_019]). The tangent function, $\text{tan}(x)$, has an infinite number of vertical asymptotes as $x\to \text{±}\infty ;$ therefore, it does not approach a finite limit nor does it approach $\text{±}\infty$ as $x\to \text{±}\infty$ as shown in [ref:CNX_Calc_Figure_04_06_020].

> FIGURE {fig:CNX_Calc_Figure_04_06_019} src=../../media/CNX_Calc_Figure_04_06_011.jpg
> alt: The function f(x) = sin x is graphed.
> caption: The function $f(x)=\text{sin}\;x$ oscillates between $1\;\text{and}\;−1$ as $x\to \text{±}\infty$

> FIGURE {fig:CNX_Calc_Figure_04_06_020} src=../../media/CNX_Calc_Figure_04_06_012.jpg
> alt: The function f(x) = tan x is graphed.
> caption: The function $f(x)=\text{tan}\;x$ does not approach a limit and does not approach $\text{±}\infty$ as $x\to \text{±}\infty$

Recall that for any base $b>0,b≠1,$ the function $y={b}^{x}$ is an exponential function with domain $(\text{−}\infty ,\infty )$ and range $(0,\infty ).$ If $b>1,y={b}^{x}$ is increasing over $`(\text{−}\infty ,\infty ).$ If $0<b<1,$ $y={b}^{x}$ is decreasing over $(\text{−}\infty ,\infty ).$ For the natural exponential function $f(x)={e}^{x},$ $e\approx 2.718>1.$ Therefore, $f(x)={e}^{x}$ is increasing on $`(\text{−}\infty ,\infty )$ and the range is $`(0,\infty ).$ The exponential function $f(x)={e}^{x}$ approaches $\infty$ as $x\to \infty$ and approaches $0$ as $x\to \text{−}\infty$ as shown in [ref:fs-id1165042542966] and [ref:CNX_Calc_Figure_04_06_021].

> TABLE {tab:fs-id1165042542966} cols=6 class=column-header
> title: End behavior of the natural exponential function
> summary: The table has two rows and six columns. The first column is a header column and it reads x and ex. After the header, the first row reads −5, −2, 0, 2, and 5. The second row reads 0.00674, 0.135, 1, 7.389, and 148.413.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **$x$** | $−5$ | $−2$ | $0$ | $2$ | $5$ |
| **${e}^{x}$** | $0.00674$ | $0.135$ | $1$ | $7.389$ | $148.413$ |

> FIGURE {fig:CNX_Calc_Figure_04_06_021} src=../../media/CNX_Calc_Figure_04_06_013.jpg
> alt: The function f(x) = ex is graphed.
> caption: The exponential function approaches zero as $x\to \text{−}\infty$ and approaches $\infty$ as $x\to \infty .$

Recall that the natural logarithm function $f(x)=\text{ln}(x)$ is the inverse of the natural exponential function $y={e}^{x}.$ Therefore, the domain of $f(x)=\text{ln}(x)$ is $(0,\infty )$ and the range is $(\text{−}\infty ,\infty ).$ The graph of $f(x)=\text{ln}(x)$ is the reflection of the graph of $y={e}^{x}$ about the line $y=x.$ Therefore, $\text{ln}(x)\to \text{−}\infty$ as $x\to {0}^{+}$ and $\text{ln}(x)\to \infty$ as $x\to \infty$ as shown in [ref:CNX_Calc_Figure_04_06_022] and [ref:fs-id1165042460463].

> TABLE {tab:fs-id1165042460463} cols=6 class=column-header
> title: End behavior of the natural logarithm function
> summary: The table has two rows and six columns. The first column is a header column and it reads x and ln(x). After the header, the first row reads 0.01, 0.1, 1, 10, and 100. The second row reads −4.605, −2.303, 0, 2.303, and 4.605.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **$x$** | $0.01$ | $0.1$ | $1$ | $10$ | $100$ |
| **$\text{ln}(x)$** | $−4.605$ | $−2.303$ | $0$ | $2.303$ | $4.605$ |

> FIGURE {fig:CNX_Calc_Figure_04_06_022} src=../../media/CNX_Calc_Figure_04_06_014.jpg
> alt: The function f(x) = ln(x) is graphed.
> caption: The natural logarithm function approaches $\infty$ as $x\to \infty .$

:::example {ex:fs-id1165042469818} Determining End Behavior for a Transcendental Function

:::exercise {fs-id1165042469820} type= 
PROBLEM:
Find the limits as $x\to \infty$ and $x\to \text{−}\infty$ for $f(x)=\frac{(2+3{e}^{x})}{(7-5{e}^{x})}$ and describe the end behavior of $f.$
SOLUTION:
To find the limit as $x\to \infty ,$ divide the numerator and denominator by ${e}^{x}\text{:}$

$\begin{array}{rl}\lim_{x\to \infty}f(x) & =\lim_{x\to \infty}\frac{2+3{e}^{x}}{7-5{e}^{x}} \\ & =\lim_{x\to \infty}\frac{(2\text{/}{e}^{x})+3}{(7\text{/}{e}^{x})-5}.\end{array}$  {eq:fs-id1165042711652}

As shown in [ref:CNX_Calc_Figure_04_06_021], ${e}^{x}\to \infty$ as $x\to \infty .$ Therefore,

$\lim_{x\to \infty}\frac{2}{{e}^{x}}=0=\lim_{x\to \infty}\frac{7}{{e}^{x}}.$  {eq:fs-id1165042499514}

We conclude that $\lim_{x\to \infty}f(x)=-\frac{3}{5},$ and the graph of $f$ approaches the horizontal asymptote $y=-\frac{3}{5}$ as $x\to \infty .$ To find the limit as $x\to \text{−}\infty ,$ use the fact that ${e}^{x}\to 0$ as $x\to \text{−}\infty$ to conclude that $\lim_{x\to \infty}f(x)=\frac{2}{7},$ and therefore the graph of approaches the horizontal asymptote $y=\frac{2}{7}$ as $x\to \text{−}\infty .$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042711310} type= 
PROBLEM:
Find the limits as $x\to \infty$ and $x\to \text{−}\infty$ for $f(x)=\frac{(3{e}^{x}-4)}{(5{e}^{x}+2)}.$
SOLUTION:
$\lim_{x\to \infty}f(x)=\frac{3}{5},$ $\lim_{x\to \text{−}\infty}f(x)=−2$
COMMENTARY: Hint
$\lim_{x\to \infty}{e}^{x}=\infty$ and $\lim_{x\to \infty}{e}^{x}=0.$
:::
:::

## Guidelines for Drawing the Graph of a Function
We now have enough analytical tools to draw graphs of a wide variety of algebraic and transcendental functions. Before showing how to graph specific functions, let’s look at a general strategy to use when graphing any function.

:::note [problem-solving] Drawing the Graph of a Function
Given a function $f,$ use the following steps to sketch a graph of $f\text{:}$
1. Determine the domain of the function.
2. Locate the $x$- and $y$-intercepts.
3. Evaluate $\lim_{x\to \infty}f(x)$ and $\lim_{x\to \text{−}\infty}f(x)$ to determine the end behavior. If either of these limits is a finite number $L,$ then $y=L$ is a horizontal asymptote. If either of these limits is $\infty$ or $\text{−}\infty ,$ determine whether $f$ has an oblique asymptote. If $f$ is a rational function such that $f(x)=\frac{p(x)}{q(x)},$ where the degree of the numerator is greater than the degree of the denominator, then $f$ can be written as

$f(x)=\frac{p(x)}{q(x)}=g(x)+\frac{r(x)}{q(x)},$  {eq:fs-id1165042617521}

where the degree of $r(x)$ is less than the degree of $q(x).$ The values of $f(x)$ approach the values of $g(x)$ as $x\to \text{±}\infty .$ If $g(x)$ is a linear function, it is known as an *oblique asymptote*.
4. Determine whether $f$ has any vertical asymptotes.
5. Calculate ${f}^{'}.$ Find all critical points and determine the intervals where $f$ is increasing and where $f$ is decreasing. Determine whether $f$ has any local extrema.
6. Calculate ${f}^{''}.$ Determine the intervals where $f$ is concave up and where $f$ is concave down. Use this information to determine whether $f$ has any inflection points. The second derivative can also be used as an alternate means to determine or verify that $f$ has a local extremum at a critical point.
:::
Now let’s use this strategy to graph several different functions. We start by graphing a polynomial function.

:::example {ex:fs-id1165042617768} Sketching a Graph of a Polynomial

:::exercise {fs-id1165042617770} type= 
PROBLEM:
Sketch a graph of $f(x)={(x-1)}^{2}(x+2).$
SOLUTION:
Step 1. Since $f$ is a polynomial, the domain is the set of all real numbers.
Step 2. When $x=0,f(x)=2.$ Therefore, the $y$-intercept is $(0,2).$ To find the $x$-intercepts, we need to solve the equation ${(x-1)}^{2}(x+2)=0,$ gives us the $x$-intercepts $(1,0)$ and $(−2,0)$
Step 3. We need to evaluate the end behavior of $f.$ As $x\to \infty ,$ ${(x-1)}^{2}\to \infty$ and $(x+2)\to \infty .$ Therefore, $\lim_{x\to \infty}f(x)=\infty .$ As $x\to \text{−}\infty ,$ ${(x-1)}^{2}\to \infty$ and $(x+2)\to \text{−}\infty .$ Therefore, $\lim_{x\to \text{−}\infty}f(x)=\text{−}\infty .$ To get even more information about the end behavior of $f,$ we can multiply the factors of $f.$ When doing so, we see that

$f(x)={(x-1)}^{2}(x+2)={x}^{3}-3x+2.$  {eq:fs-id1165042525463}

Since the leading term of $f$ is ${x}^{3},$ we conclude that $f$ behaves like $y={x}^{3}$ as $x\to \text{±}\infty .$
Step 4. Since $f$ is a polynomial function, it does not have any vertical asymptotes.
Step 5. The first derivative of $f$ is

${f}^{'}(x)=3{x}^{2}-3.$  {eq:fs-id1165043382936}

Therefore, $f$ has two critical points: $x=1,−1.$ Divide the interval $(\text{−}\infty ,\infty )$ into the three smaller intervals: $(\text{−}\infty ,−1),$ $(−1,1),$ and $(1,\infty ).$ Then, choose test points $x=−2,$ $x=0,$ and $x=2$ from these intervals and evaluate the sign of ${f}^{'}(x)$ at each of these test points, as shown in the following table.

> TABLE {tab:fs-id1165043383127} cols=4 class=unnumbered
> summary: This table has four rows and four columns. The first row is a header row, and it reads Interval, Test Point, Sign of Derivative f’(x) = 3x2 – 3 = 3(x – 1)(x + 1), and Conclusion. Under the header row, the first column reads (−∞, −1), (−1, 1), and (1, ∞). The second column reads x = −2, x = 0, and x = 2. The third column reads (+)(−)(−) = +, (+)(−)(+) = −, and (+)(+)(+) = +. The fourth column reads f is increasing, f is decreasing, and f is increasing.

| Interval | Test Point | Sign of Derivative $f'(x)=3{x}^{2}-3=3(x-1)(x+1)$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,−1)$ | $x=−2$ | $(\text{+})(\text{−})(\text{−})=+$ | $f$ is increasing. |
| $(−1,1)$ | $x=0$ | $(\text{+})(\text{−})(\text{+})=\text{−}$ | $f$ is decreasing. |
| $(1,\infty )$ | $x=2$ | $(\text{+})(\text{+})(\text{+})=+$ | $f$ is increasing. |

From the table, we see that $f$ has a local maximum at $x=−1$ and a local minimum at $x=1.$ Evaluating $f(x)$ at those two points, we find that the local maximum value is $f(−1)=4$ and the local minimum value is $f(1)=0.$
Step 6. The second derivative of $f$ is

${f}^{''}(x)=6x.$  {eq:fs-id1165042539292}

The second derivative is zero at $x=0.$ Therefore, to determine the concavity of $f,$ divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,0)$ and $(0,\infty ),$ and choose test points $x=−1$ and $x=1$ to determine the concavity of $f$ on each of these smaller intervals as shown in the following table.

> TABLE {tab:fs-id1165042381927} cols=4 class=unnumbered
> summary: This table has three rows and four columns. The first row is a header row, and it reads Interval, Test Point, Sign of f’’(x) = 6x, and Conclusion. Under the header row, the first column reads (−∞, 0) and (0, ∞). The second column reads x = −1 and x = 1. The third column reads − and +. The fourth column reads f is concave down and f is concave up.

| Interval | Test Point | Sign of ${f}^{''}(x)=6x$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,0)$ | $x=−1$ | $-$ | $f$ is concave down. |
| $(0,\infty )$ | $x=1$ | $+$ | $f$ is concave up. |

We note that the information in the preceding table confirms the fact, found in step $5,$ that $f$ has a local maximum at $x=−1$ and a local minimum at $x=1.$ In addition, the information found in step $5$—namely, $f$ has a local maximum at $x=−1$ and a local minimum at $x=1,$ and ${f}^{'}(x)=0$ at those points—combined with the fact that ${f}^{''}$ changes sign only at $x=0$ confirms the results found in step $6$ on the concavity of $f.$
Combining this information, we arrive at the graph of $f(x)={(x-1)}^{2}(x+2)$ shown in the following graph.

> IMAGE {img:fs-id1165042710031} src=../../media/CNX_Calc_Figure_04_06_015.jpg
> alt: The function f(x) = (x −1)2 (x + 2) is graphed. It crosses the x axis at x = −2 and touches the x axis at x = 1.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042710050} type= 
PROBLEM:
Sketch a graph of $f(x)={(x-1)}^{3}(x+2).$
SOLUTION:

> IMAGE {img:fs-id1165042710110} src=../../media/CNX_Calc_Figure_04_06_028.jpg
> alt: The function f(x) = (x −1)3(x + 2) is graphed.

COMMENTARY: Hint
$f$ is a fourth-degree polynomial.
:::
:::

:::example {ex:fs-id1165042710140} Sketching a Rational Function

:::exercise {fs-id1165042710142} type= 
PROBLEM:
Sketch the graph of $f(x)=\frac{{x}^{2}}{(1-{x}^{2})}\text{.}$
SOLUTION:
Step 1. The function $f$ is defined as long as the denominator is not zero. Therefore, the domain is the set of all real numbers $x$ except $x=\text{±}1.$
Step 2. Find the intercepts. If $x=0,$ then $f(x)=0,$ so $0$ is an intercept. If $y=0,$ then $\frac{{x}^{2}}{(1-{x}^{2})}=0,$ which implies $x=0.$ Therefore, $(0,0)$ is the only intercept.
Step 3. Evaluate the limits at infinity. Since $f$ is a rational function, divide the numerator and denominator by the highest power in the denominator: ${x}^{2}.$ We obtain

$\lim_{x\to \text{±}\infty}\frac{{x}^{2}}{1-{x}^{2}}=\lim_{x\to \text{±}\infty}\frac{1}{\frac{1}{{x}^{2}}-1}=−1.$  {eq:fs-id1165042407571}

Therefore, $f$ has a horizontal asymptote of $y=−1$ as $x\to \infty$ and $x\to \text{−}\infty .$
Step 4. To determine whether $f$ has any vertical asymptotes, first check to see whether the denominator has any zeroes. We find the denominator is zero when $x=\text{±}1.$ To determine whether the lines $x=1$ or $x=−1$ are vertical asymptotes of $f,$ evaluate $\lim_{x\to 1}f(x)$ and $\lim_{x\to \text{−}1}f(x).$ By looking at each one-sided limit as $x\to 1,$ we see that

$\lim_{x\to {1}^{+}}\frac{{x}^{2}}{1-{x}^{2}}=\text{−}\infty \;\text{and}\;\lim_{x\to {1}^{-}}\frac{{x}^{2}}{1-{x}^{2}}=\infty .$  {eq:fs-id1165042491126}

In addition, by looking at each one-sided limit as $x\to \text{−}1,$ we find that

$\lim_{x\to \text{−}{1}^{+}}\frac{{x}^{2}}{1-{x}^{2}}=\infty \;\text{and}\;\lim_{x\to \text{−}{1}^{-}}\frac{{x}^{2}}{1-{x}^{2}}=\text{−}\infty .$  {eq:fs-id1165042491242}

Step 5. Calculate the first derivative:

${f}^{'}(x)=\frac{(1-{x}^{2})(2x)-{x}^{2}(−2x)}{{(1-{x}^{2})}^{2}}=\frac{2x}{{(1-{x}^{2})}^{2}}.$  {eq:fs-id1165043262270}

Critical points occur at points $x$ where ${f}^{'}(x)=0$ or ${f}^{'}(x)$ is undefined. We see that ${f}^{'}(x)=0$ when $x=0.$ The derivative ${f}^{'}$ is not undefined at any point in the domain of $f.$ However, $x=\text{±}1$ are not in the domain of $f.$ Therefore, to determine where $f$ is increasing and where $f$ is decreasing, divide the interval $(\text{−}\infty ,\infty )$ into four smaller intervals: $(\text{−}\infty ,−1),$ $(−1,0),$ $(0,1),$ and $(1,\infty ),$ and choose a test point in each interval to determine the sign of ${f}^{'}(x)$ in each of these intervals. The values $x=−2,$ $x=-\frac{1}{2},$ $x=\frac{1}{2},$ and $x=2$ are good choices for test points as shown in the following table.

> TABLE {tab:fs-id1165043341618} cols=4 class=unnumbered
> summary: This table has four columns and five rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’(x) = 2x/(1 − x2)2, and Conclusion. Under the header row, the first column reads (−∞, −1), (−1, 0), (0, 1), and (1, ∞). The second column reads x = −2, x = −1/2, x = 1/2, and x = 2. The third column reads −/+ = −, −/+ = −, +/+ = +, and +/+ = +. The fourth column reads f is decreasing, f is decreasing, f is increasing, and f is increasing.

| Interval | Test Point | Sign of ${f}^{'}(x)=\frac{2x}{{(1-{x}^{2})}^{2}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,−1)$ | $x=−2$ | $\text{−}\text{/}+=\text{−}$ | $f$ is decreasing. |
| $(−1,0)$ | $x=−1\text{/}2$ | $\text{−}\text{/}+=\text{−}$ | $f$ is decreasing. |
| $(0,1)$ | $x=1\text{/}2$ | $+\text{/}+=+$ | $f$ is increasing. |
| $(1,\infty )$ | $x=2$ | $+\text{/}+=+$ | $f$ is increasing. |

From this analysis, we conclude that $f$ has a local minimum at $x=0$ but no local maximum.
Step 6. Calculate the second derivative:

$\begin{array}{rr}{f}^{''}(x) & =\frac{{(1-{x}^{2})}^{2}(2)-2x(2(1-{x}^{2})(−2x))}{{(1-{x}^{2})}^{4}} \\ & =\frac{(1-{x}^{2})[2(1-{x}^{2})+8{x}^{2}]}{{(1-{x}^{2})}^{4}} \\ & =\frac{2(1-{x}^{2})+8{x}^{2}}{{(1-{x}^{2})}^{3}} \\ & =\frac{6{x}^{2}+2}{{(1-{x}^{2})}^{3}}.\end{array}$  {eq:fs-id1165043183358}

To determine the intervals where $f$ is concave up and where $f$ is concave down, we first need to find all points $x$ where ${f}^{''}(x)=0$ or ${f}^{''}(x)$ is undefined. Since the numerator $6{x}^{2}+2≠0$ for any $x,$ ${f}^{''}(x)$ is never zero. Furthermore, ${f}^{''}$ is not undefined for any $x$ in the domain of $f.$ However, as discussed earlier, $x=\text{±}1$ are not in the domain of $f.$ Therefore, to determine the concavity of $f,$ we divide the interval $(\text{−}\infty ,\infty )$ into the three smaller intervals $(\text{−}\infty ,−1),$ $(−1,−1),$ and $(1,\infty ),$ and choose a test point in each of these intervals to evaluate the sign of ${f}^{''}(x).$ in each of these intervals. The values $x=−2,$ $x=0,$ and $x=2$ are possible test points as shown in the following table.

> TABLE {tab:fs-id1165043384406} cols=4 class=unnumbered
> summary: This table has four columns and four rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’’(x) = (6x2 + 2)/(1 − x2)3, and Conclusion. Under the header row, the first column reads (−∞, −1), (−1, 1), and (1, ∞). The second column reads x = −2, x = 0, and x = 2. The third column reads +/− = −, +/+ = +, and +/− = −. The fourth column reads f is concave down, f is concave up, and f is concave down.

| Interval | Test Point | Sign of ${f}^{''}(x)=\frac{6{x}^{2}+2}{{(1-{x}^{2})}^{3}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,−1)$ | $x=−2$ | $+\text{/}-=\text{−}$ | $f$ is concave down. |
| $(−1,−1)$ | $x=0$ | $+\text{/}+=+$ | $f$ is concave up. |
| $(1,\infty )$ | $x=2$ | $+\text{/}-=\text{−}$ | $f$ is concave down. |

Combining all this information, we arrive at the graph of $f$ shown below. Note that, although $f$ changes concavity at $x=−1$ and $x=1,$ there are no inflection points at either of these places because $f$ is not continuous at $x=−1$ or $x=1.$

> IMAGE {img:fs-id1165042592749} src=../../media/CNX_Calc_Figure_04_06_016.jpg
> alt: The function f(x) = x2/(1 − x2) is graphed. It has asymptotes y = −1, x = −1, and x = 1.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042592768} type= 
PROBLEM:
Sketch a graph of $f(x)=\frac{(3x+5)}{(8+4x)}.$
SOLUTION:

> IMAGE {img:fs-id1165042592830} src=../../media/CNX_Calc_Figure_04_06_029.jpg
> alt: The function f(x) = (3x + 5)/(8 + 4x) is graphed. It appears to have asymptotes at x = −2 and y = 1.

COMMENTARY: Hint
A line $y=L$ is a horizontal asymptote of $f$ if the limit as $x\to \infty$ or the limit as $x\to \text{−}\infty$ of $f(x)$ is $L.$ A line $x=a$ is a vertical asymptote if at least one of the one-sided limits of $f$ as $x\to a$ is $\infty$ or $\text{−}\infty .$
:::
:::

:::example {ex:fs-id1165042592955} Sketching a Rational Function with an Oblique Asymptote

:::exercise {fs-id1165042592957} type= 
PROBLEM:
Sketch the graph of $f(x)=\frac{{x}^{2}}{(x-1)}$
SOLUTION:
Step 1. The domain of $f$ is the set of all real numbers $x$ except $x=1.$
Step 2. Find the intercepts. We can see that when $x=0,$ $f(x)=0,$ so $(0,0)$ is the only intercept.
Step 3. Evaluate the limits at infinity. Since the degree of the numerator is one more than the degree of the denominator, $f$ must have an oblique asymptote. To find the oblique asymptote, use long division of polynomials to write

$f(x)=\frac{{x}^{2}}{x-1}=x+1+\frac{1}{x-1}.$  {eq:fs-id1165042712594}

Since $1\text{/}(x-1)\to 0$ as $x\to \text{±}\infty ,$ $f(x)$ approaches the line $y=x+1$ as $x\to \text{±}\infty .$ The line $y=x+1$ is an oblique asymptote for $f.$
Step 4. To check for vertical asymptotes, look at where the denominator is zero. Here the denominator is zero at $x=1.$ Looking at both one-sided limits as $x\to 1,$ we find

$\lim_{x\to {1}^{+}}\frac{{x}^{2}}{x-1}=\infty \;\text{and}\;\lim_{x\to {1}^{-}}\frac{{x}^{2}}{x-1}=\text{−}\infty .$  {eq:fs-id1165042712789}

Therefore, $x=1$ is a vertical asymptote, and we have determined the behavior of $f$ as $x$ approaches $1$ from the right and the left.
Step 5. Calculate the first derivative:

${f}^{'}(x)=\frac{(x-1)(2x)-{x}^{2}(1)}{{(x-1)}^{2}}=\frac{{x}^{2}-2x}{{(x-1)}^{2}}.$  {eq:fs-id1165042403344}

We have ${f}^{'}(x)=0$ when ${x}^{2}-2x=x(x-2)=0.$ Therefore, $x=0$ and $x=2$ are critical points. Since $f$ is undefined at $x=1,$ we need to divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,0),$ $(0,1),$ $(1,2),$ and $(2,\infty ),$ and choose a test point from each interval to evaluate the sign of ${f}^{'}(x)$ in each of these smaller intervals. For example, let $x=−1,$ $x=\frac{1}{2},$ $x=\frac{3}{2},$ and $x=3$ be the test points as shown in the following table.

> TABLE {tab:fs-id1165042710566} cols=4 class=unnumbered
> summary: This table has four columns and five rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’(x) = (x2 − 2x)/(x − 1)2 = x(x − 2)/(x − 1)2, and Conclusion. Under the header row, the first column reads (−∞, 0), (0, 1), (1, 2), and (2, ∞). The second column reads x = −1, x = 1/2, x = 3/2, and x = 3. The third column reads (−)(−)/+ = +, (+)(−)/+ = −, (+)(−)/+ = −, and (+)(+)/+ = +. The fourth column reads f is increasing, f is decreasing, f is decreasing, and f is increasing.

| Interval | Test Point | Sign of $f'(x)=\frac{{x}^{2}-2x}{{(x-1)}^{2}}=\frac{x(x-2)}{{(x-1)}^{2}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,0)$ | $x=−1$ | $(\text{−})(\text{−})\text{/}+=+$ | $f$ is increasing. |
| $(0,1)$ | $x=1\text{/}2$ | $(\text{+})(\text{−})\text{/}+=\text{−}$ | $f$ is decreasing. |
| $(1,2)$ | $x=3\text{/}2$ | $(\text{+})(\text{−})\text{/}+=\text{−}$ | $f$ is decreasing. |
| $(2,\infty )$ | $x=3$ | $(\text{+})(\text{+})\text{/}+=+$ | $f$ is increasing. |

From this table, we see that $f$ has a local maximum at $x=0$ and a local minimum at $x=2.$ The value of $f$ at the local maximum is $f(0)=0$ and the value of $f$ at the local minimum is $f(2)=4.$ Therefore, $(0,0)$ and $(2,4)$ are important points on the graph.
Step 6. Calculate the second derivative:

$\begin{array}{rl}{f}^{''}(x) & =\frac{{(x-1)}^{2}(2x-2)-({x}^{2}-2x)(2(x-1))}{{(x-1)}^{4}} \\ & =\frac{(x-1)[(x-1)(2x-2)-2({x}^{2}-2x)]}{{(x-1)}^{4}} \\ & =\frac{(x-1)(2x-2)-2({x}^{2}-2x)}{{(x-1)}^{3}} \\ & =\frac{2{x}^{2}-4x+2-(2{x}^{2}-4x)}{{(x-1)}^{3}} \\ & =\frac{2}{{(x-1)}^{3}}.\end{array}$  {eq:fs-id1165042464549}

We see that ${f}^{''}(x)$ is never zero or undefined for $x$ in the domain of $f.$ Since $f$ is undefined at $x=1,$ to check concavity we just divide the interval $(\text{−}\infty ,\infty )$ into the two smaller intervals $(\text{−}\infty ,1)$ and $(1,\infty ),$ and choose a test point from each interval to evaluate the sign of ${f}^{''}(x)$ in each of these intervals. The values $x=0$ and $x=2$ are possible test points as shown in the following table.

> TABLE {tab:fs-id1165042652542} cols=4 class=unnumbered
> summary: This table has four columns and three rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’’(x) = 2/(x − 1)3, and Conclusion. Under the header row, the first column reads (−∞, 1) and (1, ∞). The column row reads x = 0 and x = 2. The third column reads +/− = − and +/+ = +. The fourth column reads f is concave down and f is concave up.

| Interval | Test Point | Sign of ${f}^{''}(x)=\frac{2}{{(x-1)}^{3}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,1)$ | $x=0$ | $+\text{/}-=\text{−}$ | $f$ is concave down. |
| $(1,\infty )$ | $x=2$ | $+\text{/}+=+$ | $f$ is concave up. |

From the information gathered, we arrive at the following graph for $f.$

> IMAGE {img:fs-id1165042606968} src=../../media/CNX_Calc_Figure_04_06_017.jpg
> alt: The function f(x) = x2/(x − 1) is graphed. It has asymptotes y = x + 1 and x = 1.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042606986} type= 
PROBLEM:
Find the oblique asymptote for $f(x)=\frac{(3{x}^{3}-2x+1)}{(2{x}^{2}-4)}.$
SOLUTION:
$y=\frac{3}{2}x$
COMMENTARY: Hint
Use long division of polynomials.
:::
:::

:::example {ex:fs-id1165042607090} Sketching the Graph of a Function with a Cusp

:::exercise {fs-id1165042607093} type= 
PROBLEM:
Sketch a graph of $f(x)={(x-1)}^{2\text{/}3}.$
SOLUTION:
Step 1. Since the cube-root function is defined for all real numbers $x$ and ${(x-1)}^{2\text{/}3}={(\sqrt[3]{x-1})}^{2},$ the domain of $f$ is all real numbers.
Step 2: To find the $y$-intercept, evaluate $f(0).$ Since $f(0)=1,$ the $y$-intercept is $(0,1).$ To find the $x$-intercept, solve ${(x-1)}^{2\text{/}3}=0.$ The solution of this equation is $x=1,$ so the $x$-intercept is $(1,0).$
Step 3: Since $\lim_{x\to \text{±}\infty}{(x-1)}^{2\text{/}3}=\infty ,$ the function continues to grow without bound as $x\to \infty$ and $x\to \text{−}\infty .$
Step 4: The function has no vertical asymptotes.
Step 5: To determine where $f$ is increasing or decreasing, calculate ${f}^{'}.$ We find

${f}^{'}(x)=\frac{2}{3}{(x-1)}^{−1\text{/}3}=\frac{2}{3{(x-1)}^{1\text{/}3}}.$  {eq:fs-id1165042583307}

This function is not zero anywhere, but it is undefined when $x=1.$ Therefore, the only critical point is $x=1.$ Divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,1)$ and $(1,\infty ),$ and choose test points in each of these intervals to determine the sign of ${f}^{'}(x)$ in each of these smaller intervals. Let $x=0$ and $x=2$ be the test points as shown in the following table.

> TABLE {tab:fs-id1165042504467} cols=4 class=unnumbered
> summary: This table has four columns and three rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’(x) = 2/(3(x − 1)1/3), and Conclusion. Under the header row, the first column reads (−∞, 1) and (1, ∞). The second column reads x = 0 and x = 2. The third column reads +/− = − and +/+ = +. The fourth column reads f is decreasing and f is increasing.

| Interval | Test Point | Sign of ${f}^{'}(x)=\frac{2}{3{(x-1)}^{1\text{/}3}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,1)$ | $x=0$ | $+\text{/}-=\text{−}$ | $f$ is decreasing. |
| $(1,\infty )$ | $x=2$ | $+\text{/}+=+$ | $f$ is increasing. |

We conclude that $f$ has a local minimum at $x=1.$ Evaluating $f$ at $x=1,$ we find that the value of $f$ at the local minimum is zero. Note that ${f}^{'}(1)$ is undefined, so to determine the behavior of the function at this critical point, we need to examine $\lim_{x\to 1}{f}^{'}(x).$ Looking at the one-sided limits, we have

$\lim_{x\to {1}^{+}}\frac{2}{3{(x-1)}^{1\text{/}3}}=\infty \;\text{and}\;\lim_{x\to {1}^{-}}\frac{2}{3{(x-1)}^{1\text{/}3}}=\text{−}\infty .$  {eq:fs-id1165042510168}

Therefore, $f$ has a cusp at $x=1.$
Step 6: To determine concavity, we calculate the second derivative of $f\text{:}$

${f}^{''}(x)=-\frac{2}{9}{(x-1)}^{−4\text{/}3}=\frac{−2}{9{(x-1)}^{4\text{/}3}}.$  {eq:fs-id1165042510313}

We find that ${f}^{''}(x)$ is defined for all $x,$ but is undefined when $x=1.$ Therefore, divide the interval $(\text{−}\infty ,\infty )$ into the smaller intervals $(\text{−}\infty ,1)$ and $(1,\infty ),$ and choose test points to evaluate the sign of ${f}^{''}(x)$ in each of these intervals. As we did earlier, let $x=0$ and $x=2$ be test points as shown in the following table.

> TABLE {tab:fs-id1165042510530} cols=4 class=unnumbered
> summary: This table has four columns and three rows. The first row is a header row, and it reads Interval, Test Point, Sign of f’’(x) = −2/(9(x − 1)4/3), and Conclusion. Under the header row, the first column reads (−∞, 1) and (1, ∞). The second column reads x = 0 and x = 2. The third column reads −/+ = − and −/+ = −. The fourth column reads f is concave down and f is concave down.

| Interval | Test Point | Sign of ${f}^{''}(x)=\frac{−2}{9{(x-1)}^{4\text{/}3}}$ | Conclusion |
| --- | --- | --- | --- |
| $(\text{−}\infty ,1)$ | $x=0$ | $\text{−}\text{/}+=\text{−}$ | $f$ is concave down. |
| $(1,\infty )$ | $x=2$ | $\text{−}\text{/}+=\text{−}$ | $f$ is concave down. |

From this table, we conclude that $f$ is concave down everywhere. Combining all of this information, we arrive at the following graph for $f.$

> IMAGE {img:fs-id1165042643991} src=../../media/CNX_Calc_Figure_04_06_018.jpg
> alt: The function f(x) = (x − 1)2/3 is graphed. It touches the x axis at x = 1, where it comes to something of a sharp point and then flairs out on either side.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042644011} type= 
PROBLEM:
Consider the function $f(x)=5-{x}^{2\text{/}3}.$ Determine the point on the graph where a cusp is located. Determine the end behavior of $f.$
SOLUTION:
The function $f$ has a cusp at $(0,5)$ $\lim_{x\to {0}^{-}}{f}^{'}(x)=\infty ,$ $\lim_{x\to {0}^{+}}{f}^{'}(x)=\text{−}\infty .$ For end behavior, $\lim_{x\to \text{±}\infty}f(x)=\text{−}\infty .$
COMMENTARY: Hint
A function $f$ has a cusp at a point $a$ if $f(a)$ exists, $f'(a)$ is undefined, one of the one-sided limits as $x\to a$ of $f'(x)$ is $+\infty ,$ and the other one-sided limit is $\text{−}\infty .$
:::
:::

## Key Concepts {section:key-concepts}
- The limit of $f(x)$ is $L$ as $x\to \infty$ (or as $x\to \text{−}\infty )$ if the values $f(x)$ become arbitrarily close to $L$ as $x$ becomes sufficiently large.
- The limit of $f(x)$ is $\infty$ as $x\to \infty$ if $f(x)$ becomes arbitrarily large as $x$ becomes sufficiently large. The limit of $f(x)$ is $\text{−}\infty$ as $x\to \infty$ if $f(x)<0$ and $|f(x)|$ becomes arbitrarily large as $x$ becomes sufficiently large. We can define the limit of $f(x)$ as $x$ approaches $\text{−}\infty$ similarly.
- For a polynomial function $p(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+\text{…}+{a}_{1}x+{a}_{0},$ where ${a}_{n}≠0,$ the end behavior is determined by the leading term ${a}_{n}{x}^{n}.$ If $n≠0,$ $p(x)$ approaches $\infty$ or $\text{−}\infty$ at each end.
- For a rational function $f(x)=\frac{p(x)}{q(x)},$ the end behavior is determined by the relationship between the degree of $p$ and the degree of $q.$ If the degree of $p$ is less than the degree of $q,$ the line $y=0$ is a horizontal asymptote for $f.$ If the degree of $p$ is equal to the degree of $q,$ then the line $y=\frac{{a}_{n}}{{b}_{n}}$ is a horizontal asymptote, where ${a}_{n}$ and ${b}_{n}$ are the leading coefficients of $p$ and $q,$ respectively. If the degree of $p$ is greater than the degree of $q,$ then $f$ approaches $\infty$ or $\text{−}\infty$ at each end.

##  {section:section-exercises}
For the following exercises, examine the graphs. Identify where the vertical asymptotes are located.

:::exercise {fs-id1165042640632} type= 
PROBLEM:

> IMAGE {img:fs-id1165042640637} src=../../media/CNX_Calc_Figure_04_06_201.jpg
> alt: The function graphed decreases very rapidly as it approaches x = 1 from the left, and on the other side of x = 1, it seems to start near infinity and then decrease rapidly.

SOLUTION:
$x=1$
:::

:::exercise {fs-id1165042640666} type= 
PROBLEM:

> IMAGE {img:fs-id1165042640674} src=../../media/CNX_Calc_Figure_04_06_202.jpg
> alt: The function graphed increases very rapidly as it approaches x = −3 from the left, and on the other side of x = −3, it seems to start near negative infinity and then increase rapidly to form a sort of U shape that is pointing down, with the other side of the U being at x = 2. On the other side of x = 2, the graph seems to start near infinity and then decrease rapidly.

:::

:::exercise {fs-id1165043197220} type= 
PROBLEM:

> IMAGE {img:fs-id1165043197228} src=../../media/CNX_Calc_Figure_04_06_203.jpg
> alt: The function graphed decreases very rapidly as it approaches x = −1 from the left, and on the other side of x = −1, it seems to start near negative infinity and then increase rapidly to form a sort of U shape that is pointing down, with the other side of the U being at x = 2. On the other side of x = 2, the graph seems to start near infinity and then decrease rapidly.

SOLUTION:
$x=−1,x=2$
:::

:::exercise {fs-id1165043197265} type= 
PROBLEM:

> IMAGE {img:fs-id1165043197269} src=../../media/CNX_Calc_Figure_04_06_204.jpg
> alt: The function graphed decreases very rapidly as it approaches x = 0 from the left, and on the other side of x = 0, it seems to start near infinity and then decrease rapidly to form a sort of U shape that is pointing up, with the other side of the U being at x = 1. On the other side of x = 1, there is another U shape pointing down, with its other side being at x = 2. On the other side of x = 2, the graph seems to start near negative infinity and then increase rapidly.

:::

:::exercise {fs-id1165043197318} type= 
PROBLEM:

> IMAGE {img:fs-id1165043197322} src=../../media/CNX_Calc_Figure_04_06_205.jpg
> alt: The function graphed decreases very rapidly as it approaches x = 0 from the left, and on the other side of x = 0, it seems to start near infinity and then decrease rapidly to form a sort of U shape that is pointing up, with the other side being a normal function that appears as if it will take the entirety of the values of the x-axis.

SOLUTION:
$x=0$
:::
For the following functions $f(x),$ determine whether there is an asymptote at $x=a.$ Justify your answer without graphing on a calculator.

:::exercise {fs-id1165043197383} type= 
PROBLEM:
$f(x)=\frac{x+1}{{x}^{2}+5x+4},a=−1$
:::

:::exercise {fs-id1165043197447} type= 
PROBLEM:
$f(x)=\frac{x}{x-2},a=2$
SOLUTION:
Yes, there is a vertical asymptote
:::

:::exercise {fs-id1165043197495} type= 
PROBLEM:
$f(x)={(x+2)}^{3\text{/}2},a=−2$
:::

:::exercise {fs-id1165043197555} type= 
PROBLEM:
$f(x)={(x-1)}^{−1\text{/}3},a=1$
SOLUTION:
Yes, there is vertical asymptote
:::

:::exercise {fs-id1165043197616} type= 
PROBLEM:
$f(x)=1+{x}^{−2\text{/}5},a=1$
:::
For the following exercises, evaluate the limit.

:::exercise {fs-id1165043377734} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{1}{3x+6}$
SOLUTION:
$0$
:::

:::exercise {fs-id1165043377780} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{2x-5}{4x}$
:::

:::exercise {fs-id1165043377833} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{{x}^{2}-2x+5}{x+2}$
SOLUTION:
$\infty$
:::

:::exercise {fs-id1165043377891} type= 
PROBLEM:
$\lim_{x\to \text{−}\infty}\frac{3{x}^{3}-2x}{{x}^{2}+2x+8}$
:::

:::exercise {fs-id1165043377963} type= 
PROBLEM:
$\lim_{x\to \text{−}\infty}\frac{{x}^{4}-4{x}^{3}+1}{2-2{x}^{2}-7{x}^{4}}$
SOLUTION:
$-\frac{1}{7}$
:::

:::exercise {fs-id1165043378048} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{3x}{\sqrt{{x}^{2}+1}}$
:::

:::exercise {fs-id1165043378100} type= 
PROBLEM:
$\lim_{x\to \text{−}\infty}\frac{\sqrt{4{x}^{2}-1}}{x+2}$
SOLUTION:
$−2$
:::

:::exercise {fs-id1165043216402} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{4x}{\sqrt{{x}^{2}-1}}$
:::

:::exercise {fs-id1165043216454} type= 
PROBLEM:
$\lim_{x\to \text{−}\infty}\frac{4x}{\sqrt{{x}^{2}-1}}$
SOLUTION:
$−4$
:::

:::exercise {fs-id1165043216510} type= 
PROBLEM:
$\lim_{x\to \infty}\frac{2\sqrt{x}}{x-\sqrt{x}+1}$
:::
For the following exercises, find the horizontal and vertical asymptotes.

:::exercise {fs-id1165043216566} type= 
PROBLEM:
$f(x)=x-\frac{9}{x}$
SOLUTION:
Horizontal: none, vertical: $x=0$
:::

:::exercise {fs-id1165043216614} type= 
PROBLEM:
$f(x)=\frac{1}{1-{x}^{2}}$
:::

:::exercise {fs-id1165043216679} type= 
PROBLEM:
$f(x)=\frac{{x}^{3}}{4-{x}^{2}}$
SOLUTION:
Horizontal: none, vertical: $x=\text{±}2$
:::

:::exercise {fs-id1165043216737} type= 
PROBLEM:
$f(x)=\frac{{x}^{2}+3}{{x}^{2}+1}$
:::

:::exercise {fs-id1165043210294} type= 
PROBLEM:
$f(x)=\text{sin}(x)\;\text{sin}(2x)$
SOLUTION:
Horizontal: none, vertical: none
:::

:::exercise {fs-id1165043210346} type= 
PROBLEM:
$f(x)=\text{cos}\;x+\text{cos}(3x)+\text{cos}(5x)$
:::

:::exercise {fs-id1165043210409} type= 
PROBLEM:
$f(x)=\frac{x\;\text{sin}(x)}{{x}^{2}-1}$
SOLUTION:
Horizontal: $y=0,$ vertical: $x=\text{±}1$
:::

:::exercise {fs-id1165043210485} type= 
PROBLEM:
$f(x)=\frac{x}{\text{sin}(x)}$
:::

:::exercise {fs-id1165043210550} type= 
PROBLEM:
$f(x)=\frac{1}{{x}^{3}+{x}^{2}}$
SOLUTION:
Horizontal: $y=0,$ vertical: $x=0$ and $x=−1$
:::

:::exercise {fs-id1165043210626} type= 
PROBLEM:
$f(x)=\frac{1}{x-1}-2x$
:::

:::exercise {fs-id1165043349198} type= 
PROBLEM:
$f(x)=\frac{{x}^{3}+1}{{x}^{3}-1}$
SOLUTION:
Horizontal: $y=1,$ vertical: $x=1$
:::

:::exercise {fs-id1165043349269} type= 
PROBLEM:
$f(x)=\frac{\text{sin}\;x+\text{cos}\;x}{\text{sin}\;x-\text{cos}\;x}$
:::

:::exercise {fs-id1165043349346} type= 
PROBLEM:
$f(x)=x-\text{sin}\;x$
SOLUTION:
Horizontal: none, vertical: none
:::

:::exercise {fs-id1165043349383} type= 
PROBLEM:
$f(x)=\frac{1}{x}-\sqrt{x}$
:::
For the following exercises, construct a function $f(x)$ that has the given asymptotes.

:::exercise {fs-id1165043349448} type= 
PROBLEM:
$x=1$ and $y=2$
SOLUTION:
Answers will vary, for example: $y=\frac{2x}{x-1}$
:::

:::exercise {fs-id1165043349502} type= 
PROBLEM:
$x=1$ and $y=0$
:::

:::exercise {fs-id1165043349559} type= 
PROBLEM:
$y=4,$ $x=−1$
SOLUTION:
Answers will vary, for example: $y=\frac{4x}{x+1}$
:::

:::exercise {fs-id1165043349615} type= 
PROBLEM:
$x=0$
:::
For the following exercises, graph the function on a graphing calculator on the window $x=[−5,5]$ and estimate the horizontal asymptote or limit. Then, calculate the actual horizontal asymptote or limit.

:::exercise {fs-id1165042709138} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{x+10}$
SOLUTION:
$y=0$
:::

:::exercise {fs-id1165042709190} type= 
PROBLEM:
**[T]** $f(x)=\frac{x+1}{{x}^{2}+7x+6}$
:::

:::exercise {fs-id1165042709257} type= 
PROBLEM:
**[T]** $\lim_{x\to \text{−}\infty}{x}^{2}+10x+25$
SOLUTION:
$\infty$
:::

:::exercise {fs-id1165042709313} type= 
PROBLEM:
**[T]** $\lim_{x\to \text{−}\infty}\frac{x+2}{{x}^{2}+7x+6}$
:::

:::exercise {fs-id1165042709385} type= 
PROBLEM:
**[T]** $\lim_{x\to \infty}\frac{3x+2}{x+5}$
SOLUTION:
$y=3$
:::
For the following exercises, draw a graph of the functions without using a calculator. Be sure to notice all important features of the graph: local maxima and minima, inflection points, and asymptotic behavior.

:::exercise {fs-id1165042709451} type= 
PROBLEM:
$y=3{x}^{2}+2x+4$
:::

:::exercise {fs-id1165042709501} type= 
PROBLEM:
$y={x}^{3}-3{x}^{2}+4$
SOLUTION:

> IMAGE {img:fs-id1165042558126} src=../../media/CNX_Calc_Figure_04_06_207.jpg
> alt: The function starts in the third quadrant, increases to pass through (−1, 0), increases to a maximum and y intercept at 4, decreases to touch (2, 0), and then increases to (4, 20).

:::

:::exercise {fs-id1165042558140} type= 
PROBLEM:
$y=\frac{2x+1}{{x}^{2}+6x+5}$
:::

:::exercise {fs-id1165042558205} type= 
PROBLEM:
$y=\frac{{x}^{3}+4{x}^{2}+3x}{3x+9}$
SOLUTION:

> IMAGE {img:fs-id1165042558258} src=../../media/CNX_Calc_Figure_04_06_209.jpg
> alt: An upward-facing parabola with minimum between x = 0 and x = −1 with y intercept between 0 and 1.

:::

:::exercise {fs-id1165042558272} type= 
PROBLEM:
$y=\frac{{x}^{2}+x-2}{{x}^{2}-3x-4}$
:::

:::exercise {fs-id1165042558343} type= 
PROBLEM:
$y=\sqrt{{x}^{2}-5x+4}$
SOLUTION:

> IMAGE {img:fs-id1165042558381} src=../../media/CNX_Calc_Figure_04_06_211.jpg
> alt: This graph starts at (−2, 4) and decreases in a convex way to (1, 0). Then the graph starts again at (4, 0) and increases in a convex way to (6, 3).

:::

:::exercise {fs-id1165042558395} type= 
PROBLEM:
$y=2x\sqrt{16-{x}^{2}}$
:::

:::exercise {fs-id1165042558446} type= 
PROBLEM:
$y=\frac{\text{cos}\;x}{x},$ on $x=[−2\pi ,2\pi ]$
SOLUTION:

> IMAGE {img:fs-id1165042558507} src=../../media/CNX_Calc_Figure_04_06_213.jpg
> alt: This graph has vertical asymptote at x = 0. The first part of the function occurs in the second and third quadrants and starts in the third quadrant just below (−2π, 0), increases and passes through the x axis at −3π/2, reaches a maximum and then decreases through the x axis at −π/2 before approaching the asymptote. On the other side of the asymptote, the function starts in the first quadrant, decreases quickly to pass through π/2, decreases to a local minimum and then increases through (3π/2, 0) before staying just above (2π, 0).

:::

:::exercise {fs-id1165042558519} type= 
PROBLEM:
$y=\frac{\sqrt{{x}^{2}+2}}{x+1}$
:::

:::exercise {fs-id1165043404024} type= 
PROBLEM:
$y=x\;\text{tan}\;x,x=[\text{−}\pi ,\pi ]$
SOLUTION:

> IMAGE {img:fs-id1165043404074} src=../../media/CNX_Calc_Figure_04_06_215.jpg
> alt: This graph has vertical asymptotes at x = ±π/2. The graph is symmetric about the y axis, so describing the left hand side will be sufficient. The function starts at (−π, 0) and decreases quickly to the asymptote. Then it starts on the other side of the asymptote in the second quadrant and decreases to the the origin.

:::

:::exercise {fs-id1165043404088} type= 
PROBLEM:
$y=x\;\text{ln}(x),x>0$
:::

:::exercise {fs-id1165043404141} type= 
PROBLEM:
$y={x}^{2}\text{sin}(x),x=[−2\pi ,2\pi ]$
SOLUTION:

> IMAGE {img:fs-id1165043404201} src=../../media/CNX_Calc_Figure_04_06_217.jpg
> alt: This function starts at (−2π, 0), increases to near (−3π/2, 25), decreases through (−π, 0), achieves a local minimum and then increases through the origin. On the other side of the origin, the graph is the same but flipped, that is, it is congruent to the other half by a rotation of 180 degrees.

:::

:::exercise {fs-id1165043404215} type= 
PROBLEM:
For $f(x)=\frac{P(x)}{Q(x)}$ to have an asymptote at $y=2$ then the polynomials $P(x)$ and $Q(x)$ must have what relation?
:::

:::exercise {fs-id1165043404361} type= 
PROBLEM:
For $f(x)=\frac{P(x)}{Q(x)}$ to have an asymptote at $x=0,$ then the polynomials $P(x)$ and $Q(x).$ must have what relation?
SOLUTION:
$P(0)≠0andQ(0)=0$
:::

:::exercise {fs-id1165043208598} type= 
PROBLEM:
If ${f}^{'}(x)$ has asymptotes at $y=3$ and $x=1,$ then $f(x)$ has what asymptotes?
:::

:::exercise {fs-id1165043208676} type= 
PROBLEM:
Both $f(x)=\frac{1}{(x-1)}$ and $g(x)=\frac{1}{{(x-1)}^{2}}$ have asymptotes at $x=1$ and $y=0.$ What is the most obvious difference between these two functions?
SOLUTION:
$\lim_{x\to {1}^{-}}f(x)=-∞\;\text{and}\;\lim_{x\to {1}^{-}}g(x)=\infty$
:::

:::exercise {fs-id1165043208845} type= 
PROBLEM:
True or false: Every ratio of polynomials has vertical asymptotes.
:::

## Glossary
- {def} **end behavior**: the behavior of a function as $x\to \infty$ and $x\to \text{−}\infty$
- {def} **horizontal asymptote**: if $\lim_{x\to \infty}f(x)=L$ or $\lim_{x\to \text{−}\infty}f(x)=L,$ then $y=L$ is a horizontal asymptote of $f$
- {def} **infinite limit at infinity**: a function that becomes arbitrarily large as *x* becomes large
- {def} **limit at infinity**: the limiting value, if it exists, of a function as $x\to \infty$ or $x\to \text{−}\infty$
- {def} **oblique asymptote**: the line $y=mx+b$ if $f(x)$ approaches it as $x\to \infty$ or $x\to \text{−}\infty$

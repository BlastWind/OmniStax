# Improper Integrals

## Learning Objectives {section:learning-objectives}
- Evaluate an integral over an infinite interval.
- Evaluate an integral over a closed interval with an infinite discontinuity within the interval.
- Use the comparison theorem to determine whether a definite integral is convergent.

Is the area between the graph of $f(x)=\frac{1}{x}$ and the *x*-axis over the interval $[1,\text{+}\infty )$ finite or infinite? If this same region is revolved about the *x*-axis, is the volume finite or infinite? Surprisingly, the area of the region described is infinite, but the volume of the solid obtained by revolving this region about the *x*-axis is finite.
In this section, we define integrals over an infinite interval as well as integrals of functions containing a discontinuity on the interval. Integrals of these types are called improper integrals. We examine several techniques for evaluating improper integrals, all of which involve taking limits.

## Integrating over an Infinite Interval
How should we go about defining an integral of the type ${\displaystyle \int_{a}^{+\infty}f(x)dx}?$ We can integrate ${\displaystyle \int_{a}^{t}f(x)dx}$ for any value of $t,$ so it is reasonable to look at the behavior of this integral as we substitute larger values of $t.$ [ref:CNX_Calc_Figure_07_07_001] shows that ${\displaystyle \int_{a}^{t}f(x)dx}$ may be interpreted as area for various values of $t.$ In other words, we may define an improper integral as a limit, taken as one of the limits of integration increases or decreases without bound.

> FIGURE {fig:CNX_Calc_Figure_07_07_001} src=../../media/CNX_Calc_Figure_07_07_001.jpg
> alt: This figure has three graphs. All the graphs have the same curve, which is f(x). The curve is non-negative, only in the first quadrant, and decreasing. Under all three curves is a shaded region bounded by a on the x-axis an t on the x-axis. The region in the first curve is small, and progressively gets wider under the second and third graph as t moves further to the right away from a on the x-axis.
> caption: To integrate a function over an infinite interval, we consider the limit of the integral as the upper limit increases without bound.

:::note [definition] Definition
1. Let $f(x)$ be continuous over an interval of the form $[a,\text{+}\infty ).$ Then

$$ {\displaystyle \int_{a}^{+\infty}f(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx,}} $$  {eq:fs-id1165043372378}

provided this limit exists.
2. Let $f(x)$ be continuous over an interval of the form $(\text{−}\infty ,b].$ Then

$$ {\displaystyle \int_{\text{−}\infty}^{b}f(x)dx=\lim_{t\to \text{−}\infty}{\displaystyle \int_{t}^{b}f(x)dx,}} $$  {eq:fs-id1165043086270}

provided this limit exists.

In each case, if the limit exists, then the {term:improper integral} is said to converge. If the limit does not exist, then the improper integral is said to diverge.
3. Let $f(x)$ be continuous over $(\text{−}\infty ,\text{+}\infty ).$ Then

$$ {\displaystyle \int_{\text{−}\infty}^{+\infty}f(x)dx={\displaystyle \int_{\text{−}\infty}^{0}f(x)dx+{\displaystyle \int_{0}^{+\infty}f(x)dx,}}} $$  {eq:fs-id1165042478832}

provided that ${\displaystyle \int_{\text{−}\infty}^{0}f(x)dx}$ and ${\displaystyle \int_{0}^{+\infty}f(x)dx}$ both converge. If either one or both of these two integrals diverge, then ${\displaystyle \int_{\text{−}\infty}^{+\infty}f(x)dx}$ diverges. (It can be shown that, in fact, ${\displaystyle \int_{\text{−}\infty}^{+\infty}f(x)dx={\displaystyle \int_{\text{−}\infty}^{a}f(x)dx+{\displaystyle \int_{a}^{+\infty}f(x)dx}}}$ for any value of $a.)$
:::
In our first example, we return to the question we posed at the start of this section: Is the area between the graph of $f(x)=\frac{1}{x}$ and the $x$-axis over the interval $[1,\text{+}\infty )$ finite or infinite?

:::example {ex:fs-id1165043428127} Finding an Area

:::exercise {fs-id1165043001948} type= 
PROBLEM:
Determine whether the area between the graph of $f(x)=\frac{1}{x}$ and the *x*-axis over the interval $[1,\text{+}\infty )$ is finite or infinite.
SOLUTION:
We first do a quick sketch of the region in question, as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_07_07_002} src=../../media/CNX_Calc_Figure_07_07_002.jpg
> alt: This figure is the graph of the function y = 1/x. It is a decreasing function with a vertical asymptote at the y-axis. In the first quadrant there is a shaded region under the curve bounded by x = 1 and x = 4.
> caption: We can find the area between the curve $f(x)=1\text{/}x$ and the *x*-axis on an infinite interval.

We can see that the area of this region is given by $A={\displaystyle \int_{1}^{\infty}\frac{1}{x}dx}.$ Then we have

$\begin{array}{rllll}A & ={\displaystyle \int_{1}^{\infty}\frac{1}{x}dx} & & & \\ & =\lim_{t\to \text{+}\infty}{\displaystyle \int_{1}^{t}\frac{1}{x}dx} & & & \text{Rewrite the improper integral as a limit.} \\ & =\lim_{t\to \text{+}\infty}\text{ln}|x||{}_{\begin{array}{l} \\ 1\end{array}}^{\begin{array}{l}t \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\lim_{t\to \text{+}\infty}(\text{ln}|t|-\text{ln}\;1) & & & \text{Evaluate the antiderivative.} \\ & =\text{+}\infty . & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1165043131589}

Since the improper integral diverges to $+\infty ,$ the area of the region is infinite.
:::
:::

:::example {ex:fs-id1165042988868} Finding a Volume

:::exercise {fs-id1165042514822} type= 
PROBLEM:
Find the volume of the solid obtained by revolving the region bounded by the graph of $f(x)=\frac{1}{x}$ and the *x*-axis over the interval $[1,\text{+}\infty )$ about the $x$-axis.
SOLUTION:
The solid is shown in [ref:CNX_Calc_Figure_07_07_003]. Using the disk method, we see that the volume *V* is

$V=\pi {\displaystyle \int_{1}^{+\infty}\frac{1}{{x}^{2}}dx}.$  {eq:fs-id1165042321060}

> FIGURE {fig:CNX_Calc_Figure_07_07_003} src=../../media/CNX_Calc_Figure_07_07_003.jpg
> alt: This figure is the graph of the function y = 1/x. It is a decreasing function with a vertical asymptote at the y-axis. The graph shows a solid that has been generated by rotating the curve in the first quadrant around the x-axis.
> caption: The solid of revolution can be generated by rotating an infinite area about the *x*-axis.

Then we have

$\begin{array}{rllll}V & =\pi {\displaystyle \int_{1}^{+\infty}\frac{1}{{x}^{2}}dx} & & & \\ & =\pi \lim_{t\to \text{+}\infty}{\displaystyle \int_{1}^{t}\frac{1}{{x}^{2}}dx} & & & \text{Rewrite as a limit.} \\ & =\pi \lim_{t\to \text{+}\infty}-\frac{1}{x}|{}_{\begin{array}{l} \\ 1\end{array}}^{\begin{array}{l}t \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\pi \lim_{t\to \text{+}\infty}(\text{−}\;\frac{1}{t}+1) & & & \text{Evaluate the antiderivative.} \\ & =\pi . & & & \end{array}$  {eq:fs-id1165043259904}

The improper integral converges to $\pi .$ Therefore, the volume of the solid of revolution is $\pi .$
:::
:::
In conclusion, although the area of the region between the *x*-axis and the graph of $f(x)=1\text{/}x$ over the interval $[1,\text{+}\infty )$ is infinite, the volume of the solid generated by revolving this region about the *x*-axis is finite. The solid generated is known as {index:*Gabriel’s Horn*}.

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_GabrielsHorn) to read more about Gabriel’s Horn.
:::

:::example {ex:fs-id1165043021843} Chapter Opener: Traffic Accidents in a City

:::exercise {fs-id1165043066947} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_07_07_006} src=../../media/CNX_Calc_Figure_07_07_006.jpg
> alt: This is a picture of a city street with a traffic signal. The picture has very busy lanes of traffic in both directions.
> caption: (credit: modification of work by David McKelvey, Flickr)

In the chapter opener, we stated the following problem: Suppose that at a busy intersection, {index:traffic accidents} occur at an average rate of one every three months. After residents complained, changes were made to the traffic lights at the intersection. It has now been ten months since the changes were made and there have been no accidents. Were the changes effective or is the 10-month interval without an accident a result of chance?
SOLUTION:
Revise to: Let $x$ represent the amount of time it takes for the next accident to occur. We want to know how likely it is that $x>10$.  Define the rate parameter $λ$ to be the average number of accidents per month. According to probability theory, for $a>0$,

$P(x>a)={\displaystyle \int_{a}^{\infty}λ{e}^{-λx}}dx,$  {eq:fs-id1165043423045}

In this example, since one accident happens every three months, on average, $λ=\frac{1}{3}$. The desired probability is:

$\begin{array}{l}P(x>10)={\displaystyle \int_{10}^{\infty}}\frac{1}{3}{e}^{-\frac{1}{3}x}dx \\ =\underset{t\to \infty}{lim}{\displaystyle \int_{10}^{t}}\frac{1}{3}{e}^{-\frac{1}{3}x}dx \\ =\underset{t\to \infty}{lim}-{e}^{-\frac{1}{3}x}{\displaystyle {|}_{10}^{t}} \\ =\underset{t\to \infty}{lim}(-{e}^{-\frac{t}{3}}+{e}^{-\frac{10}{3}}) \\ \approx 0.0357\end{array}$  {eq:eq-00001}

The value $3.8\;\times \;{10}^{−11}$ represents the probability of no accidents in 8 months under the initial conditions. Since this value is very, very small, it is reasonable to conclude the changes were effective.
:::
:::

:::example {ex:fs-id1165042804162} Evaluating an Improper Integral over an Infinite Interval

:::exercise {fs-id1165043109202} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{\text{−}\infty}^{0}\frac{1}{{x}^{2}+4}dx}.$ State whether the improper integral converges or diverges.
SOLUTION:
Begin by rewriting ${\displaystyle \int_{\text{−}\infty}^{0}\frac{1}{{x}^{2}+4}dx}$ as a limit using [ref:fs-id1165043086270] from the definition. Thus,

$\begin{array}{rllll}{\displaystyle \int_{\text{−}\infty}^{0}\frac{1}{{x}^{2}+4}dx} & =\lim_{x\to \text{−}\infty}{\displaystyle \int_{t}^{0}\frac{1}{{x}^{2}+4}dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to \text{−}\infty}\frac{1}{2}{\text{tan}}^{−1}\frac{x}{2}|{}_{\begin{array}{l} \\ t\end{array}}^{\begin{array}{l}0 \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\frac{1}{2}\lim_{t\to \text{−}\infty}({\text{tan}}^{−1}0-{\text{tan}}^{−1}\frac{t}{2}) & & & \text{Evaluate the antiderivative.} \\ & =\frac{\pi}{4}. & & & \text{Evaluate the limit and simplify.}\end{array}$  {eq:fs-id1165042316105}

The improper integral converges to $\frac{\pi}{4}.$
:::
:::

:::example {ex:fs-id1165042508139} Evaluating an Improper Integral on $(\text{−}\infty ,\text{+}\infty )$

:::exercise {fs-id1165042608025} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{\text{−}\infty}^{+\infty}x{e}^{x}dx}.$ State whether the improper integral converges or diverges.
SOLUTION:
Start by splitting up the integral:

${\displaystyle \int_{\text{−}\infty}^{+\infty}x{e}^{x}dx={\displaystyle \int_{\text{−}\infty}^{0}x{e}^{x}dx+{\displaystyle \int_{0}^{+\infty}x{e}^{x}dx}}}.$  {eq:fs-id1165042705515}

If either ${\displaystyle \int_{\text{−}\infty}^{0}x{e}^{x}dx}$ or ${\displaystyle \int_{0}^{+\infty}x{e}^{x}dx}$ diverges, then ${\displaystyle \int_{\text{−}\infty}^{+\infty}x{e}^{x}dx}$ diverges. Compute each integral separately. For the first integral,

$\begin{array}{rllll}{\displaystyle \int_{\text{−}\infty}^{0}x{e}^{x}dx} & =\lim_{t\to \text{−}\infty}{\displaystyle \int_{t}^{0}x{e}^{x}dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to \text{−}\infty}(x{e}^{x}-{e}^{x})|{}_{\begin{array}{l} \\ t\end{array}}^{\begin{array}{l}0 \\ \end{array}} & & & \begin{array}{l}\text{Use integration by parts to find the} \\ \text{antiderivative. (Here}\;u=x\;\text{and}\;dv={e}^{x}dx.)\end{array} \\ & =\lim_{t\to \text{−}\infty}(−1-t{e}^{t}+{e}^{t}) & & & \text{Evaluate the antiderivative.} \\ & =−1. & & & \begin{array}{l}\text{Evaluate the limit.}\;\text{Note:}\;\lim_{t\to \text{−}\infty}t{e}^{t}\;\text{is} \\ \text{indeterminate of the form}\;0\cdot \infty .\;\text{Thus,} \\ \lim_{t\to \text{−}\infty}t{e}^{t}=\lim_{t\to \text{−}\infty}\frac{t}{{e}^{\text{−}t}}=\lim_{t\to \text{−}\infty}\frac{−1}{{e}^{\text{−}t}}=\lim_{t\to \text{−}\infty}-{e}^{t}=0\;\text{by} \\ \text{L’Hôpital’s Rule.}\end{array}\end{array}$  {eq:fs-id1165039560750}

The first improper integral converges. For the second integral,

$\begin{array}{rllll}{\displaystyle \int_{0}^{+\infty}x{e}^{x}dx} & =\lim_{t\to \text{+}\infty}{\displaystyle \int_{0}^{t}x{e}^{x}dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to \text{+}\infty}(x{e}^{x}-{e}^{x})|{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}t \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\lim_{t\to \text{+}\infty}(t{e}^{t}-{e}^{t}+1) & & & \text{Evaluate the antiderivative.} \\ & =\lim_{t\to \text{+}\infty}((t-1){e}^{t}+1) & & & \text{Rewrite.}\;(t{e}^{t}-{e}^{t}\;\text{is indeterminate.)} \\ & =\text{+}\infty . & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1165043354394}

Thus, ${\displaystyle \int_{0}^{+\infty}x{e}^{x}dx}$ diverges. Since this integral diverges, ${\displaystyle \int_{\text{−}\infty}^{+\infty}x{e}^{x}dx}$ diverges as well.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043096733} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{−3}^{+\infty}{e}^{\text{−}x}dx}.$ State whether the improper integral converges or diverges.
SOLUTION:
${e}^{3},$ converges
COMMENTARY: Hint
${\displaystyle \int_{−3}^{+\infty}{e}^{\text{−}x}dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{−3}^{t}{e}^{\text{−}x}dx}}$
:::
:::

## Integrating a Discontinuous Integrand
Now let’s examine integrals of functions containing an infinite discontinuity in the interval over which the integration occurs. Consider an integral of the form ${\displaystyle \int_{a}^{b}f(x)dx,}$ where $f(x)$ is continuous over $[a,b)$ and discontinuous at $b.$ Since the function $f(x)$ is continuous over $[a,t]$ for all values of $t$ satisfying $a<t<b,$ the integral ${\displaystyle \int_{a}^{t}f(x)dx}$ is defined for all such values of $t.$ Thus, it makes sense to consider the values of ${\displaystyle \int_{a}^{t}f(x)dx}$ as $t$ approaches $b$ for $a<t<b.$ That is, we define ${\displaystyle \int_{a}^{b}f(x)dx=\lim_{t\to {b}^{-}}{\displaystyle \int_{a}^{t}f(x)dx}},$ provided this limit exists. [ref:CNX_Calc_Figure_07_07_004] illustrates ${\displaystyle \int_{a}^{t}f(x)dx}$ as areas of regions for values of $t$ approaching $b.$

> FIGURE {fig:CNX_Calc_Figure_07_07_004} src=../../media/CNX_Calc_Figure_07_07_004.jpg
> alt: This figure has three graphs. All the graphs have the same curve, which is f(x). The curve is non-negative, only in the first quadrant, and increasing. Under all three curves is a shaded region bounded by a on the x-axis an t on the x-axis. There is also a vertical asymptote at x = b. The region in the first curve is small, and progressively gets wider under the second and third graph as t gets further from a, and closer to b on the x-axis.
> caption: As *t* approaches *b* from the left, the value of the area from *a* to *t* approaches the area from *a* to *b*.

We use a similar approach to define ${\displaystyle \int_{a}^{b}f(x)dx,}$ where $f(x)$ is continuous over $(a,b]$ and discontinuous at $a.$ We now proceed with a formal definition.

:::note [definition] Definition
1. Let $f(x)$ be continuous over $[a,b).$ Then,

$$ {\displaystyle \int_{a}^{b}f(x)dx=\lim_{t\to {b}^{-}}{\displaystyle \int_{a}^{t}f(x)dx}}. $$  {eq:fs-id1165042617693}

2. Let $f(x)$ be continuous over $(a,b].$ Then,

$$ {\displaystyle \int_{a}^{b}f(x)dx=\lim_{t\to {a}^{+}}{\displaystyle \int_{t}^{b}f(x)dx}}. $$  {eq:fs-id1165042506827}

In each case, if the limit exists, then the improper integral is said to converge. If the limit does not exist, then the improper integral is said to diverge.
3. If $f(x)$ is continuous over $[a,b]$ except at a point $c$ in $(a,b),$ then

$$ {\displaystyle \int_{a}^{b}f(x)dx={\displaystyle \int_{a}^{c}f(x)dx+{\displaystyle \int_{c}^{b}f(x)dx,}}} $$  {eq:fs-id1165043378015}

provided both ${\displaystyle \int_{a}^{c}f(x)dx}$ and ${\displaystyle \int_{c}^{b}f(x)dx}$ converge. If either of these integrals diverges, then ${\displaystyle \int_{a}^{b}f(x)dx}$ diverges.
:::
The following examples demonstrate the application of this definition.

:::example {ex:fs-id1165043257650} Integrating a Discontinuous Integrand

:::exercise {fs-id1165043257652} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{4}\frac{1}{\sqrt{4-x}}dx},$ if possible. State whether the integral converges or diverges.
SOLUTION:
The function $f(x)=\frac{1}{\sqrt{4-x}}$ is continuous over $[0,4)$ and discontinuous at 4. Using [ref:fs-id1165042617693] from the definition, rewrite ${\displaystyle \int_{0}^{4}\frac{1}{\sqrt{4-x}}dx}$ as a limit:

$\begin{array}{rllll}{\displaystyle \int_{0}^{4}\frac{1}{\sqrt{4-x}}dx} & =\lim_{t\to {4}^{-}}{\displaystyle \int_{0}^{t}\frac{1}{\sqrt{4-x}}dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to {4}^{-}}(−2\sqrt{4-x})|{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}t \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\lim_{t\to {4}^{-}}(−2\sqrt{4-t}+4) & & & \text{Evaluate the antiderivative.} \\ & =4. & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1165043373976}

The improper integral converges.
:::
:::

:::example {ex:fs-id1165043173678} Integrating a Discontinuous Integrand

:::exercise {fs-id1165043173681} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{2}x\;\text{ln}\;x\;dx}.$ State whether the integral converges or diverges.
SOLUTION:
Since $f(x)=x\;\text{ln}\;x$ is continuous over $(0,2]$ and is discontinuous at zero, we can rewrite the integral in limit form using [ref:fs-id1165042506827]:

$\begin{array}{rllll}{\displaystyle \int_{0}^{2}x\;\text{ln}\;x\;dx} & =\lim_{t\to {0}^{+}}{\displaystyle \int_{t}^{2}x\;\text{ln}\;x\;dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to {0}^{+}}(\frac{1}{2}{x}^{2}\text{ln}\;x-\frac{1}{4}{x}^{2})|{}_{\begin{array}{l} \\ t\end{array}}^{\begin{array}{l}2 \\ \end{array}} & & & \begin{array}{l}\text{Evaluate}\;{{\displaystyle \int}}^{}x\;\text{ln}\;x\;dx\;\text{using integration by parts} \\ \text{with}\;u=\text{ln}\;x\;\text{and}\;dv=xdx.\end{array} \\ & =\lim_{t\to {0}^{+}}(2\;\text{ln}\;2-1-\frac{1}{2}{t}^{2}\text{ln}\;t+\frac{1}{4}{t}^{2}). & & & \text{Evaluate the antiderivative.} \\ & =2\;\text{ln}\;2-1. & & & \begin{array}{l}\text{Evaluate the limit.}\;\lim_{t\to {0}^{+}}{t}^{2}\text{ln}\;t\;\text{is indeterminate.} \\ \text{To evaluate it, rewrite as a quotient and apply} \\ \text{L’Hôpital’s rule.}\end{array}\end{array}$  {eq:fs-id1165042865839}

The improper integral converges.
:::
:::

:::example {ex:fs-id1165043423550} Integrating a Discontinuous Integrand

:::exercise {fs-id1165043423552} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{−1}^{1}\frac{1}{{x}^{3}}dx}.$ State whether the improper integral converges or diverges.
SOLUTION:
Since $f(x)=1\text{/}{x}^{3}$ is discontinuous at zero, using [ref:fs-id1165043378015], we can write

${\displaystyle \int_{−1}^{1}\frac{1}{{x}^{3}}dx={\displaystyle \int_{−1}^{0}\frac{1}{{x}^{3}}dx+{\displaystyle \int_{0}^{1}\frac{1}{{x}^{3}}dx}}}.$  {eq:fs-id1165042713598}

If either of the two integrals diverges, then the original integral diverges. Begin with ${\displaystyle \int_{−1}^{0}\frac{1}{{x}^{3}}dx}:$

$\begin{array}{rllll}{\displaystyle \int_{−1}^{0}\frac{1}{{x}^{3}}dx} & =\lim_{t\to {0}^{-}}{\displaystyle \int_{−1}^{t}\frac{1}{{x}^{3}}dx} & & & \text{Rewrite as a limit.} \\ & =\lim_{t\to {0}^{-}}(-\frac{1}{2{x}^{2}})|{}_{\begin{array}{l} \\ −1\end{array}}^{\begin{array}{l}t \\ \end{array}} & & & \text{Find the antiderivative.} \\ & =\lim_{t\to {0}^{-}}(-\frac{1}{2{t}^{2}}+\frac{1}{2}) & & & \text{Evaluate the antiderivative.} \\ & =\text{−}\infty . & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1165042645708}

Therefore, ${\displaystyle \int_{−1}^{0}\frac{1}{{x}^{3}}dx}$ diverges. Since ${\displaystyle \int_{−1}^{0}\frac{1}{{x}^{3}}dx}$ diverges, ${\displaystyle \int_{−1}^{1}\frac{1}{{x}^{3}}dx}$ diverges.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042376192} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{2}\frac{1}{x}dx}.$ State whether the integral converges or diverges.
SOLUTION:
$+\infty ,$ diverges
COMMENTARY: Hint
Write ${\displaystyle \int_{0}^{2}\frac{1}{x}dx}$ in limit form using [ref:fs-id1165042506827].
:::
:::

## A Comparison Theorem
It is not always easy or even possible to evaluate an improper integral directly; however, by comparing it with another carefully chosen integral, it may be possible to determine its convergence or divergence. To see this, consider two continuous functions $f(x)$ and $g(x)$ satisfying $0\le f(x)\le g(x)$ for $x\ge a$ ([ref:CNX_Calc_Figure_07_07_005]). In this case, we may view integrals of these functions over intervals of the form $[a,t]$ as areas, so we have the relationship

$0\le {\displaystyle \int_{a}^{t}f(x)dx\le {\displaystyle \int_{a}^{t}g(x)dx}}\;\text{for}\;t\ge a.$  {eq:fs-id1165043385358}

> FIGURE {fig:CNX_Calc_Figure_07_07_005} src=../../media/CNX_Calc_Figure_07_07_005.jpg
> alt: This figure has two graphs. The graphs are f(x) and g(x). The first graph f(x) is a decreasing, non-negative function with a horizontal asymptote at the x-axis. It has a sharper bend in the curve compared to g(x). The graph of g(x) is a decreasing, non-negative function with a horizontal asymptote at the x-axis.
> caption: If $0\le f(x)\le g(x)$ for $x\ge a,$ then for $t\ge a,$ ${\displaystyle \int_{a}^{t}f(x)dx\le {\displaystyle \int_{a}^{t}g(x)dx}}.$

Thus, if

${\displaystyle \int_{a}^{+\infty}f(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx=\text{+}\infty ,}}$  {eq:fs-id1165042706168}

then
${\displaystyle \int_{a}^{+\infty}g(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}g(x)dx=\text{+}\infty}}$ as well. That is, if the area of the region between the graph of $f(x)$ and the *x*-axis over $[a,\text{+}\infty )$ is infinite, then the area of the region between the graph of $g(x)$ and the *x*-axis over $[a,\text{+}\infty )$ is infinite too.
On the other hand, if
${\displaystyle \int_{a}^{+\infty}g(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}g(x)dx=L}}$ for some real number $L,$ then
${\displaystyle \int_{a}^{+\infty}f(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx}}$ must converge to some value less than or equal to $L,$ since ${\displaystyle \int_{a}^{t}f(x)dx}$ increases as $t$ increases and ${\displaystyle \int_{a}^{t}f(x)dx\le L}$ for all $t\ge a.$
If the area of the region between the graph of $g(x)$ and the *x*-axis over $[a,\text{+}\infty )$ is finite, then the area of the region between the graph of $f(x)$ and the *x*-axis over $[a,\text{+}\infty )$ is also finite.
These conclusions are summarized in the following theorem.

:::note [theorem] A Comparison Theorem
Let $f(x)$ and $g(x)$ be continuous over $[a,\text{+}\infty ).$ Assume that $0\le f(x)\le g(x)$ for $x\ge a.$
1. If ${\displaystyle \int_{a}^{+\infty}f(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx=\text{+}\infty}},$ then ${\displaystyle \int_{a}^{+\infty}g(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}g(x)dx=\text{+}\infty}}.$
2. If ${\displaystyle \int_{a}^{+\infty}g(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}g(x)dx=L,}}$ where $L$ is a real number, then ${\displaystyle \int_{a}^{+\infty}f(x)dx=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx=M}}$ for some real number $M\le L.$
:::

:::example {ex:fs-id1165039554188} Applying the Comparison Theorem

:::exercise {fs-id1165039554190} type= 
PROBLEM:
Use a comparison to show that ${\displaystyle \int_{1}^{+\infty}\frac{1}{x{e}^{x}}dx}$ converges.
SOLUTION:
We can see that

$0\le \frac{1}{x{e}^{x}}\le \frac{1}{{e}^{x}}={e}^{\text{−}x},$  {eq:fs-id1165039554244}

so if ${\displaystyle \int_{1}^{+\infty}{e}^{\text{−}x}dx}$ converges, then so does ${\displaystyle \int_{1}^{+\infty}\frac{1}{x{e}^{x}}dx}.$ To evaluate ${\displaystyle \int_{1}^{+\infty}{e}^{\text{−}x}dx},$ first rewrite it as a limit:

$\begin{array}{rl}{\displaystyle \int_{1}^{+\infty}{e}^{\text{−}x}}dx & =\lim_{t\to \text{+}\infty}{\displaystyle \int_{1}^{t}{e}^{\text{−}x}dx} \\ & =\lim_{t\to \text{+}\infty}(\text{−}{e}^{\text{−}x})|\begin{array}{l}t \\ 1\end{array} \\ & =\lim_{t\to \text{+}\infty}(\text{−}{e}^{\text{−}t}+{e}^{–1}) \\ & ={e}^{–1}.\end{array}$  {eq:fs-id1165042634862}

Since ${\displaystyle \int_{1}^{+\infty}{e}^{\text{−}x}dx}$ converges, so does ${\displaystyle \int_{1}^{+\infty}\frac{1}{x{e}^{x}}dx}.$
:::
:::

:::example {ex:fs-id1165042601863} Applying the Comparison Theorem

:::exercise {fs-id1165042601865} type= 
PROBLEM:
Use the comparison theorem to show that ${\displaystyle \int_{1}^{+\infty}\frac{1}{{x}^{p}}dx}$ diverges for all $p<1.$
SOLUTION:
For $p<1,$ $1\text{/}x\le 1\text{/}({x}^{p})$ over $[1,\text{+}\infty ).$ In [ref:fs-id1165043428127], we showed that ${\displaystyle \int_{1}^{+\infty}\frac{1}{x}dx=\text{+}\infty}.$ Therefore, ${\displaystyle \int_{1}^{+\infty}\frac{1}{{x}^{p}}dx}$ diverges for all $p<1.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042832401} type= 
PROBLEM:
Use a comparison to show that ${\displaystyle \int_{e}^{+\infty}\frac{\text{ln}\;x}{x}dx}$ diverges.
SOLUTION:
Since ${\displaystyle \int_{e}^{+\infty}\frac{1}{x}dx=\text{+}\infty},$ ${\displaystyle \int_{e}^{+\infty}\frac{\text{ln}\;x}{x}dx}$ diverges.
COMMENTARY: Hint
$\frac{1}{x}\le \frac{\text{ln}\;x}{x}$ on $[e,\text{+}\infty )$
:::
:::

:::note [project] Laplace Transforms
In the last few chapters, we have looked at several ways to use integration for solving real-world problems. For this next project, we are going to explore a more advanced application of integration: integral transforms. Specifically, we describe the {index:Laplace transform} and some of its properties. The Laplace transform is used in engineering and physics to simplify the computations needed to solve some problems. It takes functions expressed in terms of time and *transforms* them to functions expressed in terms of frequency. It turns out that, in many cases, the computations needed to solve problems in the frequency domain are much simpler than those required in the time domain.
The Laplace transform is defined in terms of an integral as

$L\{f(t)\}=F(s)={\displaystyle \int_{0}^{\infty}{e}^{\text{−}st}f(t)dt}.$  {eq:fs-id1165042854888}

Note that the input to a Laplace transform is a function of time, $f(t),$ and the output is a function of frequency, $F(s).$ Although many real-world examples require the use of complex numbers (involving the imaginary number $i=\sqrt{−1}),$ in this project we limit ourselves to functions of real numbers.
Let’s start with a simple example. Here we calculate the Laplace transform of $f(t)=t$. We have

$L\{t\}={\displaystyle \int_{0}^{\infty}t{e}^{\text{−}st}dt}.$  {eq:fs-id1165039566620}

This is an improper integral, so we express it in terms of a limit, which gives

$L\{t\}={\displaystyle \int_{0}^{\infty}t{e}^{\text{−}st}dt}=\lim_{z\to \infty}{\displaystyle \int_{0}^{z}t{e}^{\text{−}st}dt}.$  {eq:fs-id1165039566676}

Now we use integration by parts to evaluate the integral. Note that we are integrating with respect to *t*, so we treat the variable *s* as a constant. We have

$\begin{array}{rllllrll}u & = & t & & & dv & = & {e}^{\text{−}st}dt \\ du & = & dt & & & v & = & -\frac{1}{s}{e}^{\text{−}st}.\end{array}$  {eq:fs-id1165039566045}

Then we obtain

$\begin{array}{rl}\lim_{z\to \infty}{\displaystyle \int_{0}^{z}t{e}^{\text{−}st}dt} & =\lim_{z\to \infty}[{[-\frac{t}{s}{e}^{\text{−}st}]|}_{0}^{z}+\frac{1}{s}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}dt}] \\ & =\lim_{z\to \infty}[[-\frac{z}{s}{e}^{\text{−}sz}+\frac{0}{s}{e}^{−0s}]+\frac{1}{s}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}dt}] \\ & =\lim_{z\to \infty}[[-\frac{z}{s}{e}^{\text{−}sz}+0]-\frac{1}{s}{[\frac{{e}^{\text{−}st}}{s}]|}_{0}^{z}] \\ & =\lim_{z\to \infty}[[-\frac{z}{s}{e}^{\text{−}sz}]-\frac{1}{{s}^{2}}[{e}^{\text{−}sz}-1]] \\ & =\lim_{z\to \infty}[-\frac{z}{s{e}^{sz}}]-\lim_{z\to \infty}[\frac{1}{{s}^{2}{e}^{sz}}]+\lim_{z\to \infty}\frac{1}{{s}^{2}} \\ & =0-0+\frac{1}{{s}^{2}} \\ & =\frac{1}{{s}^{2}}.\end{array}$  {eq:fs-id1165042672302}

1. Calculate the Laplace transform of $f(t)=1.$
2. Calculate the Laplace transform of $f(t)={e}^{−3t}.$
3. Calculate the Laplace transform of $f(t)={t}^{2}.$ (Note, you will have to integrate by parts twice.)

Laplace transforms are often used to solve differential equations. Differential equations are not covered in detail until later in this book; but, for now, let’s look at the relationship between the Laplace transform of a function and the Laplace transform of its derivative.

Let’s start with the definition of the Laplace transform. We have

$L\{f(t)\}={\displaystyle \int_{0}^{\infty}{e}^{\text{−}st}f(t)dt}=\lim_{z\to \infty}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}f(t)dt}.$  {eq:fs-id1165042692735}

4. Use integration by parts to evaluate $\lim_{z\to \infty}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}f(t)dt}.$ (Let $u=f(t)$ and $dv={e}^{\text{−}st}dt.)$

After integrating by parts and evaluating the limit, you should see that

$L\{f(t)\}=\frac{f(0)}{s}+\frac{1}{s}[L\{{f}^{'}(t)\}].$  {eq:fs-id1165039566792}

Then,

$L\{{f}^{'}(t)\}=sL\{f(t)\}-f(0).$  {eq:fs-id1165042467980}

Thus, differentiation in the time domain simplifies to multiplication by *s* in the frequency domain.

The final thing we look at in this project is how the Laplace transforms of $f(t)$ and its antiderivative are related. Let $g(t)={\displaystyle \int_{0}^{t}f}(u)du.$ Then,

$L\{g(t)\}={\displaystyle \int_{0}^{\infty}{e}^{\text{−}st}g(t)dt}=\lim_{z\to \infty}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}g(t)dt}.$  {eq:fs-id1165039564752}

5. Use integration by parts to evaluate $\lim_{z\to \infty}{\displaystyle \int_{0}^{z}{e}^{\text{−}st}g(t)dt}.$ (Let $u=g(t)$ and $dv={e}^{\text{−}st}dt.$ Note, by the way, that we have defined $g(t),$ $du=f(t)dt.)$

As you might expect, you should see that

$L\{g(t)\}=\frac{1}{s}\cdot L\{f(t)\}.$  {eq:fs-id1165042657860}

Integration in the time domain simplifies to division by *s* in the frequency domain.
:::

## Key Concepts {section:key-concepts}
- Integrals of functions over infinite intervals are defined in terms of limits.
- Integrals of functions over an interval for which the function has a discontinuity at an endpoint may be defined in terms of limits.
- The convergence or divergence of an improper integral may be determined by comparing it with the value of an improper integral for which the convergence or divergence is known.

## Key Equations {section:key-equations}

> TABLE {tab:eip-515} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Improper integrals** | $\begin{array}{l}{\displaystyle \int_{a}^{+\infty}f(x)dx}=\lim_{t\to \text{+}\infty}{\displaystyle \int_{a}^{t}f(x)dx} \\ {\displaystyle \int_{\text{−}\infty}^{b}f(x)dx}=\lim_{t\to \text{−}\infty}{\displaystyle \int_{t}^{b}f(x)dx} \\ {\displaystyle \int_{\text{−}\infty}^{+\infty}f(x)dx}={\displaystyle \int_{\text{−}\infty}^{0}f(x)dx+{\displaystyle \int_{0}^{+\infty}f(x)dx}}\end{array}$ |

##  {section:section-exercises}
Evaluate the following integrals. If the integral is not convergent, answer “divergent.”

:::exercise {fs-id1165042505599} type= 
PROBLEM:
${\displaystyle \int_{2}^{4}\frac{dx}{{(x-3)}^{2}}}$
SOLUTION:
divergent
:::

:::exercise {fs-id1165039562388} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}\frac{1}{4+{x}^{2}}}dx$
:::

:::exercise {fs-id1165039562444} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}\frac{1}{\sqrt{4-{x}^{2}}}dx}$
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1165042505658} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{1}{x\;\text{ln}\;x}dx}$
:::

:::exercise {fs-id1165042505703} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}x{e}^{\text{−}x}dx}$
SOLUTION:
$\frac{2}{e}$
:::

:::exercise {fs-id1165042505756} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\infty}^{\infty}\frac{x}{{x}^{2}+1}dx}$
:::

:::exercise {fs-id1165042925136} type= 
PROBLEM:
Without integrating, determine whether the integral ${\displaystyle \int_{1}^{\infty}\frac{1}{\sqrt{{x}^{3}+1}}dx}$ converges or diverges by comparing the function $f(x)=\frac{1}{\sqrt{{x}^{3}+1}}$ with $g(x)=\frac{1}{\sqrt{{x}^{3}}}.$
SOLUTION:
Converges
:::

:::exercise {fs-id1165039563796} type= 
PROBLEM:
Without integrating, determine whether the integral ${\displaystyle \int_{1}^{\infty}\frac{1}{\sqrt{x+1}}dx}$ converges or diverges.
:::
Determine whether the improper integrals converge or diverge. If possible, determine the value of the integrals that converge.

:::exercise {fs-id1165039563851} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}{e}^{\text{−}x}\text{cos}\;x\;dx}$
SOLUTION:
Converges to 1/2.
:::

:::exercise {fs-id1165042816079} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{\text{ln}\;x}{x}dx}$
:::

:::exercise {fs-id1165042816123} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{\text{ln}\;x}{\sqrt{x}}dx}$
SOLUTION:
−4
:::

:::exercise {fs-id1165042816170} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\text{ln}\;x\;dx}$
:::

:::exercise {fs-id1165042542782} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\infty}^{\infty}\frac{1}{{x}^{2}+1}dx}$
SOLUTION:
$\pi$
:::

:::exercise {fs-id1165042542837} type= 
PROBLEM:
${\displaystyle \int_{1}^{5}\frac{dx}{\sqrt{x-1}}}$
:::

:::exercise {fs-id1165042542885} type= 
PROBLEM:
${\displaystyle \int_{−2}^{2}\frac{dx}{{(1+x)}^{2}}}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165042448040} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}{e}^{\text{−}x}dx}$
:::

:::exercise {fs-id1165042448085} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}\text{sin}\;x\;dx}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165042668707} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\infty}^{\infty}\frac{{e}^{x}}{1+{e}^{2x}}dx}$
:::

:::exercise {fs-id1165042668774} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{\sqrt[3]{x}}}$
SOLUTION:
1.5
:::

:::exercise {fs-id1165042668819} type= 
PROBLEM:
${\displaystyle \int_{0}^{2}\frac{dx}{{x}^{3}}}$
:::

:::exercise {fs-id1165042327517} type= 
PROBLEM:
${\displaystyle \int_{−1}^{2}\frac{dx}{{x}^{3}}}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165042327563} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{\sqrt{1-{x}^{2}}}}$
:::

:::exercise {fs-id1165042660242} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\frac{1}{x-1}dx}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165042660288} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{5}{{x}^{3}}dx}$
:::

:::exercise {fs-id1165042660340} type= 
PROBLEM:
${\displaystyle \int_{3}^{5}\frac{5}{{(x-4)}^{2}}dx}$
SOLUTION:
diverges
:::
Determine the convergence of each of the following integrals by comparison with the given integral. If the integral converges, find the number to which it converges.

:::exercise {fs-id1165042925353} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{dx}{{x}^{2}+4x}};$ compare with ${\displaystyle \int_{1}^{\infty}\frac{dx}{{x}^{2}}}.$
:::

:::exercise {fs-id1165043205690} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{dx}{\sqrt{x}+1}};$ compare with ${\displaystyle \int_{1}^{\infty}\frac{dx}{2\sqrt{x}}}.$
SOLUTION:
Both integrals diverge.
:::
Evaluate the integrals. If the integral diverges, answer “diverges.”

:::exercise {fs-id1165043205776} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{dx}{{x}^{e}}}$
:::

:::exercise {fs-id1165042315414} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{{x}^{\pi}}}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165042315458} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{\sqrt{1-x}}}$
:::

:::exercise {fs-id1165042315506} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{dx}{1-x}}$
SOLUTION:
diverges
:::

:::exercise {fs-id1165043377697} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\infty}^{0}\frac{dx}{{x}^{2}+1}}$
:::

:::exercise {fs-id1165043377754} type= 
PROBLEM:
${\displaystyle \int_{−1}^{1}\frac{dx}{\sqrt{1-{x}^{2}}}}$
SOLUTION:
$\pi$
:::

:::exercise {fs-id1165043377808} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{\text{ln}\;x}{x}dx}$
:::

:::exercise {fs-id1165042549195} type= 
PROBLEM:
${\displaystyle \int_{0}^{e}\text{ln}(x)dx}$
SOLUTION:
0.0
:::

:::exercise {fs-id1165042549244} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}x{e}^{\text{−}x}dx}$
:::

:::exercise {fs-id1165042549290} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\infty}^{\infty}\frac{x}{{({x}^{2}+1)}^{2}}dx}$
SOLUTION:
0.0
:::

:::exercise {fs-id1165042633941} type= 
PROBLEM:
${\displaystyle \int_{0}^{\infty}{e}^{x}dx}$
:::
Evaluate the improper integrals. Each of these integrals has an infinite discontinuity either at an endpoint or at an interior point of the interval.

:::exercise {fs-id1165042633990} type= 
PROBLEM:
${\displaystyle \int_{0}^{9}\frac{dx}{\sqrt{9-x}}}$
SOLUTION:
6.0
:::

:::exercise {fs-id1165042634037} type= 
PROBLEM:
${\displaystyle \int_{−27}^{1}\frac{dx}{{x}^{2\text{/}3}}}$
:::

:::exercise {fs-id1165043229073} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\frac{dx}{\sqrt{9-{x}^{2}}}}$
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1165043229130} type= 
PROBLEM:
${\displaystyle \int_{6}^{24}\frac{dt}{t\sqrt{{t}^{2}-36}}}$
:::

:::exercise {fs-id1165042836158} type= 
PROBLEM:
${\displaystyle \int_{0}^{4}x\;\text{ln}(4x)dx}$
SOLUTION:
$8\;\text{ln}(16)-4$
:::

:::exercise {fs-id1165042836231} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\frac{x}{\sqrt{9-{x}^{2}}}dx}$
:::

:::exercise {fs-id1165042836283} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{.5}^{1}\frac{dx}{\sqrt{1-{x}^{2}}}}.$ (Be careful!) (Express your answer using three decimal places.)
SOLUTION:
$1.047$
:::

:::exercise {fs-id1165042461154} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{1}^{4}\frac{dx}{\sqrt{{x}^{2}-1}}}.$ (Express the answer in exact form.)
:::

:::exercise {fs-id1165042461225} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{2}^{\infty}\frac{dx}{{({x}^{2}-1)}^{3\text{/}2}}}.$
SOLUTION:
$−1+\frac{2}{\sqrt{3}}$
:::

:::exercise {fs-id1165043205200} type= 
PROBLEM:
Find the area of the region in the first quadrant between the curve $y={e}^{−6x}$ and the *x*-axis.
:::

:::exercise {fs-id1165043205243} type= 
PROBLEM:
Find the area of the region bounded by the curve $y=\frac{7}{{x}^{2}},$ the *x*-axis, and on the left by $x=1.$
SOLUTION:
7.0
:::

:::exercise {fs-id1165043205294} type= 
PROBLEM:
Find the area under the curve $y=\frac{1}{{(x+1)}^{3\text{/}2}},$ bounded on the left by $x=3.$
:::

:::exercise {fs-id1165042512532} type= 
PROBLEM:
Find the area under $y=\frac{5}{1+{x}^{2}}$ in the first quadrant.
SOLUTION:
$\frac{5\pi}{2}$
:::

:::exercise {fs-id1165042512579} type= 
PROBLEM:
Find the volume of the solid generated by revolving about the *x*-axis the region under the curve $y=\frac{3}{x}$ from $x=1$ to $x=\infty .$
:::

:::exercise {fs-id1165042693399} type= 
PROBLEM:
Find the volume of the solid generated by revolving about the *y*-axis the region under the curve $y=6{e}^{−2x}$ in the first quadrant.
SOLUTION:
$3\pi$
:::

:::exercise {fs-id1165042693444} type= 
PROBLEM:
Find the volume of the solid generated by revolving about the *x*-axis the area under the curve $y=3{e}^{\text{−}x}$ in the first quadrant.
:::
The {index:Laplace transform} of a continuous function over the interval $[0,\infty )$ is defined by $F(s)={\displaystyle \int_{0}^{\infty}{e}^{\text{−}sx}f(x)dx}$ (see the Student Project). This definition is used to solve some important initial-value problems in differential equations, as discussed later. The domain of *F* is the set of all real numbers *s* such that the improper integral converges. Find the Laplace transform *F* of each of the following functions and give the domain of *F*.

:::exercise {fs-id1165042508346} type= 
PROBLEM:
$f(x)=1$
SOLUTION:
$\frac{1}{s},s>0$
:::

:::exercise {fs-id1165042508394} type= 
PROBLEM:
$f(x)=x$
:::

:::exercise {fs-id1165042508447} type= 
PROBLEM:
$f(x)=\text{cos}(2x)$
SOLUTION:
$\frac{s}{{s}^{2}+4},s>0$
:::

:::exercise {fs-id1165042778846} type= 
PROBLEM:
$f(x)={e}^{ax}$
:::

:::exercise {fs-id1165042778907} type= 
PROBLEM:
Use the formula for arc length to show that the circumference of the circle ${x}^{2}+{y}^{2}=1$ is $2\pi .$
SOLUTION:
Answers will vary.
:::
A non-negative function is a {index:probability density function} if it satisfies the following definition: ${\displaystyle \int_{\text{−}\infty}^{\infty}f(t)dt=1}.$ The probability that a random variable *x* lies between *a* and *b* is given by $P(a\le x\le b)={\displaystyle \int_{a}^{b}f(t)dt}.$

:::exercise {fs-id1165042649241} type= 
PROBLEM:
Show that $f(x)=\{\begin{array}{l}0\;\text{if}\;x<0 \\ 7{e}^{−7x}\text{if}\;x\ge 0\end{array}$ is a probability density function.
:::

:::exercise {fs-id1165042796871} type= 
PROBLEM:
Find the probability that *x* is between 0 and 0.3. (Use the function defined in the preceding problem.) Use four-place decimal accuracy.
SOLUTION:
0.8775
:::

## Chapter Review Exercises {section:review-exercises}
For the following exercises, determine whether the statement is true or false. Justify your answer with a proof or a counterexample.

:::exercise {fs-id1165042796906} type= 
PROBLEM:
${\displaystyle \int {e}^{x}\text{sin}(x)dx}$ cannot be integrated by parts.
:::

:::exercise {fs-id1165043173806} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{4}+1}dx}$ cannot be integrated using partial fractions.
SOLUTION:
False
:::

:::exercise {fs-id1165043173849} type= 
PROBLEM:
In numerical integration, increasing the number of points decreases the error.
:::

:::exercise {fs-id1165043173865} type= 
PROBLEM:
Integration by parts can always yield the integral.
SOLUTION:
False
:::
For the following exercises, evaluate the integral using the specified method.

:::exercise {fs-id1165043173884} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{sin}(4x)dx}$ using integration by parts
:::

:::exercise {fs-id1165043258858} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{2}\sqrt{{x}^{2}+16}}dx}$ using trigonometric substitution
SOLUTION:
$-\frac{\sqrt{{x}^{2}+16}}{16x}+C$
:::

:::exercise {fs-id1165043258937} type= 
PROBLEM:
${\displaystyle \int \sqrt{x}\;\text{ln}(x)dx}$ using integration by parts
:::

:::exercise {fs-id1165042468092} type= 
PROBLEM:
${\displaystyle \int \frac{3x}{{x}^{3}+2{x}^{2}-5x-6}dx}$ using partial fractions
SOLUTION:
$\frac{1}{10}(4\;\text{ln}(2-x)+5\;\text{ln}(x+1)-9\;\text{ln}(x+3))+C$
:::

:::exercise {fs-id1165042658860} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{5}}{{(4{x}^{2}+4)}^{5\text{/}2}}dx}$ using trigonometric substitution
:::

:::exercise {fs-id1165042648934} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{4-{\text{sin}}^{2}(x)}}{{\text{sin}}^{2}(x)}\text{cos}(x)dx}$ using a table of integrals or a CAS
SOLUTION:
$-\frac{\sqrt{4-{\text{sin}}^{2}(x)}}{\text{sin}(x)}-\frac{x}{2}+C$
:::
For the following exercises, integrate using whatever method you choose.

:::exercise {fs-id1165042649079} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}(x){\text{cos}}^{2}(x)dx}$
:::

:::exercise {fs-id1165039519266} type= 
PROBLEM:
${\displaystyle \int {x}^{3}\sqrt{{x}^{2}+2}\;dx}$
SOLUTION:
$\frac{1}{15}{({x}^{2}+2)}^{3\text{/}2}(3{x}^{2}-4)+C$
:::

:::exercise {fs-id1165043388657} type= 
PROBLEM:
${\displaystyle \int \frac{3{x}^{2}+1}{{x}^{4}-2{x}^{3}-{x}^{2}+2x}dx}$
:::

:::exercise {fs-id1165043311717} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{4}+4}dx}$
SOLUTION:
$\frac{1}{16}\text{ln}(\frac{{x}^{2}+2x+2}{{x}^{2}-2x+2})-\frac{1}{8}{\text{tan}}^{−1}(1-x)+\frac{1}{8}{\text{tan}}^{−1}(x+1)+C$
:::

:::exercise {fs-id1165042863870} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{3+16{x}^{4}}}{{x}^{3}}dx}$
:::
For the following exercises, approximate the integrals using the midpoint rule, trapezoidal rule, and Simpson’s rule using four subintervals, rounding to three decimals.

:::exercise {fs-id1165042864005} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{1}^{2}\sqrt{{x}^{5}+2}}dx$
SOLUTION:
${\text{M}}_{4}=3.312,{\text{T}}_{4}=3.354,{S}_{4}=3.326$
:::

:::exercise {fs-id1165042455105} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{0}^{\sqrt{\pi}}{e}^{\text{−}\text{sin}({x}^{2})}}dx$
:::

:::exercise {fs-id1165042455203} type= 
PROBLEM:
**[T]** ${\displaystyle \int_{1}^{4}\frac{\text{ln}(1\text{/}x)}{x}}dx$
SOLUTION:
${\text{M}}_{4}=−0.982,{\text{T}}_{4}=−0.917,{S}_{4}=−0.952$
:::
For the following exercises, evaluate the integrals, if possible.

:::exercise {fs-id1165042561215} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{1}{{x}^{n}}}dx,$ for what values of $n$ does this integral converge or diverge?
:::

:::exercise {fs-id1165042561277} type= 
PROBLEM:
${\displaystyle \int_{1}^{\infty}\frac{{e}^{\text{−}x}}{x}}dx$
SOLUTION:
approximately 0.2194
:::
For the following exercises, consider the gamma function given by $\text{Γ}(a)={\displaystyle \int_{0}^{\infty}{e}^{\text{−}y}{y}^{a-1}dy}.$

:::exercise {fs-id1165043339041} type= 
PROBLEM:
Show that $\text{Γ}(a)=(a-1)\text{Γ}(a-1).$
:::

:::exercise {fs-id1165043339101} type= 
PROBLEM:
Extend to show that $\text{Γ}(a)=(a-1)\text{!},$ assuming $a$ is a positive integer.
The fastest car in the world, the Bugati Veyron, can reach a top speed of 408 km/h. The graph represents its velocity.

> IMAGE {img:fs-id1165043284957} src=../../media/CNX_Calc_Figure_07_07_201.jpg
> alt: This figure has a graph in the first quadrant. It increases to where x is approximately 03:00 mm:ss and then drops off steep. The maximum height of the graph, here the drop occurs is approximately 420 km/h.

:::

:::exercise {fs-id1165043284972} type= 
PROBLEM:
**[T]** Use the graph to estimate the velocity every 20 sec and fit to a graph of the form $v(t)=a\;{\text{exp}}^{bx}\text{sin}(cx)+d.$ (*Hint:* Consider the time units.)
:::

:::exercise {fs-id1165043285096} type= 
PROBLEM:
**[T]** Using your function from the previous problem, find exactly how far the Bugati Veyron traveled in the 1 min 40 sec included in the graph.
SOLUTION:
Answers may vary. Ex: $9.405$ km
:::

## Glossary
- {def} **improper integral**: an integral over an infinite interval or an integral of a function containing an infinite discontinuity on the interval; an improper integral is defined in terms of a limit. The improper integral converges if this limit is a finite real number; otherwise, the improper integral diverges

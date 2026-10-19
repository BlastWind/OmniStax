# 4.3 More on the Fourier series {sec:moreonfourier-section}

:::note [section-notes]
*Note: 2 lectures, §9.2–§9.3 in [EP](cite:EP), §10.3 in [BD](cite:BD)*
:::

## $2L$-periodic functions

We computed the Fourier series for a $2\pi$-periodic function, but what about functions of different periods? Well, fear not, the computation is a simple case of change of variables. We just rescale the independent axis. Consider a $2L$-periodic function $f(t)$. The $L$ is called the *{index:half period}*. Let $s = \frac{\pi}{L} t$. Then the function
$$ g(s) = f\left(\frac{L}{\pi} s \right) $$
is $2\pi$-periodic and we know what to do with it. We must also rescale all our sines and cosines. In the series, we use $\frac{\pi}{L} t$ as the variable. That is, we want to write
$$ \boxed{~~ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl(\frac{n \pi}{L} t \Bigr) \Bigr] . ~~} $$
If we change variables to $s$, we see that
$$ g(s) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos (n s) + b_n \sin (n s) \Bigr] . $$
We compute $a_n$ and $b_n$ as before. After we write down the integrals, we change variables from $s$ back to $t$, noting also that $ds = \frac{\pi}{L} \, dt$.
$$ \boxed{~~ \begin{aligned} & a_0 = \frac{1}{\pi} \int_{-\pi}^\pi g(s) \, ds = \frac{1}{L} \int_{-L}^L f(t) \, dt , \\ & a_n = \frac{1}{\pi} \int_{-\pi}^\pi g(s) \, \cos (n s) \, ds = \frac{1}{L} \int_{-L}^L f(t) \, \cos \left( \frac{n \pi}{L} t \right) \, dt , \\ & b_n = \frac{1}{\pi} \int_{-\pi}^\pi g(s) \, \sin (n s) \, ds = \frac{1}{L} \int_{-L}^L f(t) \, \sin \left( \frac{n \pi}{L} t \right) \, dt . \end{aligned} ~~} $$

The two most common half periods that show up in examples are $\pi$ and 1 because of the simplicity of the formulas. We should stress that we have done no new mathematics—we have only changed variables. If you understand the Fourier series for $2\pi$-periodic functions, you understand it for $2L$-periodic functions. You can think of it as just using different units for time. All that we are doing is moving some constants around, but all the mathematics is the same.

:::example {ex:example-4-3-1} Example 4.3.1
Let
$$ f(t) = \lvert t \rvert \qquad \text{for } \; {-1} < t \leq 1, $$
extended periodically. The plot of the periodic extension is given in [Figure 4.9](ref:gfs-sawcontfig). Compute the Fourier series of $f(t)$.

> FIGURE {fig:gfs-sawcontfig} number=4.9 src=../../media/gfs-sawcont.svg
> alt: Graph of a 2-periodic function on the interval minus 2 to 2, which is a line from (minus 2,0) to (minus 1,1), then from (minus 1,1) to (0,0), then from (0,0) to (1,1), then from (1,1) to (2,0). The line is continuous but has sharp corners.
> width: 4.5in
> caption: Periodic extension of the function $f(t)$.

First, we recognize that $f$ is $2$-periodic and so $L=1$. We want to write $f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos (n \pi t) + b_n \sin (n \pi t)$. We start with $a_n$ for $n \geq 1$. We note that $\lvert t \rvert \cos (n \pi t)$ is even and for $0 \leq t \leq 1$, $f(t) = \lvert t \rvert = t$. Hence,
$$ \begin{split} a_n & = \int_{-1}^1 f(t) \cos (n \pi t) \, dt \\ & = 2 \int_{0}^1 t \cos (n \pi t) \, dt \\ & = 2 \left[ \frac{t}{n \pi} \sin (n \pi t) \right]_{t=0}^1 - 2 \int_{0}^1 \frac{1}{n \pi} \sin (n \pi t) \, dt \\ & = 0 + \frac{2}{n^2 \pi^2} \Bigl[ \cos (n \pi t) \Bigr]_{t=0}^1 = \frac{2 \bigl( {(-1)}^n -1 \bigr) }{n^2 \pi^2} = \begin{cases} 0 & \text{if } n \text{ is even} , \\ \frac{-4 }{n^2 \pi^2} & \text{if } n \text{ is odd} . \end{cases} \end{split} $$
Next we find $a_0$:
$$ a_0 = \int_{-1}^1 \lvert t \rvert \, dt = 1 . $$
You should be able to find this integral by thinking about the integral as the area under the graph without doing any computation at all. Finally, we find $b_n$. Notice that $\lvert t \rvert \sin (n \pi t)$ is odd, and so
$$ b_n = \int_{-1}^1 f(t) \sin (n \pi t) \, dt = 0 . $$
Hence, the series is
$$ \frac{1}{2} + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{-4}{n^2 \pi^2} \cos (n \pi t) . $$

The first few terms of the series up to the $3^{\text{rd}}$ harmonic are
$$ \frac{1}{2} - \frac{4}{\pi^2} \cos (\pi t) - \frac{4}{9 \pi^2} \cos (3 \pi t) - \cdots $$
The plot of these few terms and also a plot up to the ${20}^{\text{th}}$ harmonic is given in [Figure 4.10](ref:gfs-sawcontfsfig). You should notice how close the graph is to the real function. You should also notice that there is no “Gibbs phenomenon” present as there are no discontinuities.

> FIGURE {fig:gfs-sawcontfsfig} number=4.10 src=../../media/gfs-sawcont-fs3-fs20.svg
> alt: The graph of the first 3 and 20 harmonics of the Fourier series for f of t. One can see that the line on the left (the first 3 harmonics) is a little rounded but follows the shape well. On the right, the graph of the first 20 harmonics is almost indistinguishable from the graph of f of t at first glance, except it is just very slightly rounded at the corners.
> width: 9in
> caption: Fourier series of $f(t)$ up to the $3^{\text{rd}}$ harmonic (left graph) and up to the ${20}^{\text{th}}$ harmonic (right graph).

:::

## Convergence

We will need the one-sided limits of functions. We will use the following notation
$$ f(c-) = \lim_{t \uparrow c} f(t), \qquad \text{and} \qquad f(c+) = \lim_{t \downarrow c} f(t). $$
If you are unfamiliar with this notation, $\lim_{t \uparrow c} f(t)$ means we are taking a limit of $f(t)$ as $t$ approaches $c$ from below (i.e. $t < c$) and $\lim_{t \downarrow c} f(t)$ means we are taking a limit of $f(t)$ as $t$ approaches $c$ from above (i.e. $t > c$). For example, for the square wave function
$$ f(t) = \begin{cases} 0 & \text{if } \; {-\pi} < t \leq 0 , \\ \pi & \text{if } \; \phantom{-}0 < t \leq \pi , \end{cases} $$ {eq:gfs-sqwaveeq} number=4.8
we have $f(0-) = 0$ and $f(0+) = \pi$.

Let $f(t)$ be a function defined on an interval $[a,b]$. Suppose that we find finitely many points $a=t_0$, $t_1$, $t_2$, …, $t_k=b$ in the interval, such that $f(t)$ is continuous on the intervals $(t_0,t_1)$, $(t_1,t_2)$, …, $(t_{k-1},t_k)$. Also suppose that all the one-sided limits exist, that is, all of $f(t_0+)$, $f(t_1-)$, $f(t_1+)$, $f(t_2-)$, $f(t_2+)$, …, $f(t_k-)$ exist and are finite. Then we say $f(t)$ is *{index:piecewise continuous}*.

If moreover, $f(t)$ is differentiable at all but finitely many points, and $f'(t)$ is piecewise continuous, then $f(t)$ is said to be *{index:piecewise smooth}*.

:::example {ex:example-4-3-2} Example 4.3.2
The square wave function, [(4.8)](ref:gfs-sqwaveeq) extended periodically, is piecewise smooth on $[-\pi,\pi]$ or any other finite interval, so we just say that $f(t)$ is piecewise smooth without mentioning an interval.
:::

:::example {ex:example-4-3-3} Example 4.3.3
The function $f(t) = \lvert t \lvert$ is piecewise smooth.
:::

:::example {ex:example-4-3-4} Example 4.3.4
The function $f(t) = \frac{1}{t}$ is not piecewise smooth on $[-1,1]$ (or any other interval containing zero). In fact, it is not even piecewise continuous.
:::

:::example {ex:example-4-3-5} Example 4.3.5
The function $f(t) = \sqrt[3]{t}$ is not piecewise smooth on $[-1,1]$ (or any other interval containing zero). The function $f(t)$ is continuous, but its derivative $f'(t) = \frac{1}{3t^{2/3}}$ is unbounded near zero and hence not piecewise continuous.
:::

Piecewise smooth functions have an easy answer on the convergence of the Fourier series.

:::theorem {thm:theorem-4-3-1} Theorem 4.3.1
Suppose $f(t)$ is a $2L$-periodic piecewise smooth function. Let
$$ \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] $$
be the Fourier series for $f(t)$. Then the series converges for all $t$. If $f(t)$ is continuous at $t$, then
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] . $$
Otherwise,
$$ \frac{f(t-)+f(t+)}{2} = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] . $$

:::

If we happen to have that $f(t) = \frac{f(t-)+f(t+)}{2}$ at all the discontinuities, the Fourier series converges to $f(t)$ everywhere. We can always just redefine $f(t)$ by changing the value at each discontinuity appropriately. Then we can write an equals sign between $f(t)$ and the series without any worry. We mentioned this fact briefly at the end of the last section.

The theorem does not say how fast the series converges. Think back to the discussion of the Gibbs phenomenon in the last section. The closer you get to the discontinuity, the more terms you need to take to get an accurate approximation to the function.

## Differentiation and integration of Fourier series

Not only does Fourier series converge nicely, but it is easy to differentiate and integrate the series. We can do this just by differentiating or integrating term by term.

:::theorem {thm:theorem-4-3-2} Theorem 4.3.2
Suppose
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] $$
is a piecewise smooth continuous function and the derivative $f'(t)$ is piecewise smooth. Then the derivative can be obtained by differentiating term by term,
$$ f'(t) = \sum_{n=1}^\infty \Bigl[ \frac{-a_n n \pi}{L} \sin \Bigl( \frac{n \pi}{L} t \Bigr) + \frac{b_n n \pi}{L} \cos \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] . $$

:::

It is important that the function is continuous. It can have corners, but no jumps. Otherwise, the differentiated series will fail to converge. For an exercise, take the series obtained for the square wave and try to differentiate the series. Similarly to differentiation, integration of Fourier series is also done term by term.

:::theorem {thm:theorem-4-3-3} Theorem 4.3.3
Suppose
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] $$
is a piecewise smooth function. Then the antiderivative is obtained by antidifferentiating term by term and so
$$ F(t) = \frac{a_0 t}{2} + C + \sum_{n=1}^\infty \Bigl[ \frac{a_n L}{n \pi} \sin \Bigl( \frac{n \pi}{L} t \Bigr) + \frac{-b_n L}{n \pi} \cos \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] , $$
where $F'(t) = f(t)$ and $C$ is an arbitrary constant.
:::

Note that the series for $F(t)$ is no longer a Fourier series as it contains the $\frac{a_0 t}{2}$ term. The antiderivative of a periodic function need no longer be periodic and so we should not expect a Fourier series. Unless, of course, $a_0 = 0$.

## Rates of convergence and smoothness

We consider an example of a periodic function differentiable once but not twice.

:::example {ex:example-4-3-6} Example 4.3.6
Take the function
$$ f(t) = \begin{cases} (t+1)\,t & \text{if } \; {-1} < t \leq 0 , \\ (1-t)\,t & \text{if } \; \phantom{-}0 < t \leq 1 , \end{cases} $$
and extend to a 2-periodic function. The derivative $f'(t)$ exists for all $t$, but $f''(t)$ does not exist if $t$ is an integer. In particular, $f'(t) = 2t+1$ if $-1 \leq t \leq 0$ and $f'(t) = 1-2t$ if $0 \leq t \leq 1$, so $f'(t)$ has a “corner” at $0$. See [Figure 4.11](ref:gfs-smoothexfig) for the plot of $f(t)$ and $f'(t)$.

> FIGURE {fig:gfs-smoothexfig} number=4.11 src=../../media/gfs-smoothex.svg
> alt: A plot of the function f of t which appears roughly sinusoidal but is composed of segments of the parabola glued together in such a way so that the derivative at this point of gluing is defined. The graph of the derivative is overlaid, and the derivative is simply composed of straight lines and it has corners (but it is continuous). More exactly, for t from minus 2 to 2, the function f of t first goes up and curves downward back to the t-axis, then goes down and curves back up to the t-axis, and so on. The derivative simply starts at 1 when t equals minus 2, and goes down as a straight line until it reaches minus 1 when t equals minus 1, then it goes back up as a straight line until it reaches 1 at t equals 0, and so on.
> width: 4.5in
> caption: Smooth 2-periodic function (the smooth line) with its nonsmooth derivative (the jagged line).

:::exercise {exercise-4-3-001} number=4.3.1 answered=no src=ch-fourier-and-pde.tex:1853
PROBLEM:
Compute $f''(0+)$ and $f''(0-)$.
:::

Let us compute the Fourier-series coefficients. The actual computation involves several integrations by parts and is left to the reader.
$$ \begin{align*} a_0 & = \int_{-1}^1 f(t) \, dt = \int_{-1}^0 (t+1)\,t \, dt + \int_0^1 (1-t)\,t \, dt = 0 , \\ a_n & = \int_{-1}^1 f(t) \, \cos (n\pi t) \, dt = \int_{-1}^0 (t+1)\,t \, \cos (n \pi t) \, dt + \int_0^1 (1-t)\,t \, \cos (n \pi t) \, dt = 0, \\ b_n & = \int_{-1}^1 f(t) \, \sin (n\pi t) \, dt = \int_{-1}^0 (t+1)\,t \, \sin (n \pi t) \, dt + \int_0^1 (1-t)\,t \, \sin (n \pi t) \, dt \\ & = \frac{4 ( 1-{(-1)}^n)}{\pi^3 n^3} = \begin{cases} \frac{8}{\pi^3 n^3} & \text{if } n \text{ is odd} , \\ 0 & \text{if } n \text{ is even} . \end{cases} \end{align*} $$
That is, the series is
$$ \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{8}{\pi^3 n^3} \sin (n \pi t) . $$

This series converges very fast. If we plot up to the third harmonic, that is,
$$ \frac{8}{\pi^3} \sin (\pi t) + \frac{8}{27 \pi^3} \sin (3 \pi t) , $$
the plot is almost indistinguishable from the plot of $f(t)$ in [Figure 4.11](ref:gfs-smoothexfig). In fact, the coefficient $\frac{8}{27 \pi^3}$ is already just $0.0096$ (approximately). The reason for this behavior is the $n^3$ term in the denominator. The coefficients $b_n$ go to zero as fast as ${1}/{n^3}$ goes to zero.
:::

For functions constructed piecewise from polynomials as above, it is generally true that if you have one derivative but not two derivatives, the Fourier coefficients will go to zero approximately like ${1}/{n^3}$. If you have only a continuous function that is not differentiable, then the Fourier coefficients will go to zero as ${1}/{n^2}$. If you have discontinuities, then the Fourier coefficients will go to zero approximately as ${1}/{n}$. For more general functions the story is somewhat more complicated but the same idea holds: The more derivatives you have, the faster the coefficients go to zero. Similar reasoning works in reverse. If the coefficients go to zero like ${1}/{n^2}$ (or faster), you always obtain a continuous function. If they go to zero like ${1}/{n^3}$ (or faster), you obtain an everywhere differentiable function.

To justify this behavior, take for example the function defined by the Fourier series
$$ f(t) = \sum_{n=1}^\infty \frac{1}{n^3} \sin (n t) . $$
When we differentiate term by term, we notice
$$ f'(t) = \sum_{n=1}^\infty \frac{1}{n^2} \cos (n t) . $$
Therefore, the coefficients now go down like ${1}/{n^2}$, which means that we have a continuous function. The derivative of $f'(t)$ is defined at most points, but there are points where $f'(t)$ is not differentiable. It has corners, but no jumps. If we differentiate again (where we can), we find that the function $f''(t)$ now fails to be continuous (has jumps)
$$ f''(t) = \sum_{n=1}^\infty \frac{-1}{n} \sin (n t) . $$
This function is similar to the sawtooth. If we tried to differentiate the series again, we would obtain
$$ \sum_{n=1}^\infty -\cos (n t) , $$
which does not converge!

:::exercise {exercise-4-3-002} number=4.3.2 answered=no src=ch-fourier-and-pde.tex:1965
PROBLEM:
Use a computer to plot the series we obtained for $f(t)$, $f'(t)$ and $f''(t)$. That is, plot say the first 5 harmonics of the functions. At what points does $f''(t)$ have the discontinuities?
:::

## Exercises

:::exercise {exercise-4-3-003} number=4.3.3 answered=no src=ch-fourier-and-pde.tex:1973
PROBLEM:
Let
$$ f(t) = \begin{cases} 0 & \text{if } \; {-1} < t \leq 0 , \\ t & \text{if } \; \phantom{-}0 < t \leq 1 , \end{cases} $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

:::

:::exercise {exercise-4-3-004} number=4.3.4 answered=no src=ch-fourier-and-pde.tex:1989
PROBLEM:
Let
$$ f(t) = \begin{cases} -t & \text{if } \; {-1} < t \leq 0 , \\ t^2 & \text{if } \; \phantom{-}0 < t \leq 1 , \end{cases} $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

:::

:::exercise {exercise-4-3-005} number=4.3.5 answered=no src=ch-fourier-and-pde.tex:2005
PROBLEM:
Let
$$ f(t) = \begin{cases} \frac{-t}{10} & \text{if } \; {-10} < t \leq 0 , \\ \frac{t}{10} & \text{if } \; \phantom{-1}0 < t \leq 10 , \end{cases} $$
extended periodically (period is 20).

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

:::

:::exercise {exercise-4-3-006} number=4.3.6 answered=no src=ch-fourier-and-pde.tex:2021
PROBLEM:
Let $f(t) = \sum_{n=1}^\infty \frac{1}{n^3} \cos (n t)$. Is $f(t)$ continuous and differentiable everywhere? Find the derivative (if it exists everywhere) or justify why $f(t)$ is not differentiable everywhere.
:::

:::exercise {exercise-4-3-007} number=4.3.7 answered=no src=ch-fourier-and-pde.tex:2028
PROBLEM:
Let $f(t) = \sum_{n=1}^\infty \frac{{(-1)}^n}{n} \sin (n t)$. Is $f(t)$ differentiable everywhere? Find the derivative (if it exists everywhere) or justify why $f(t)$ is not differentiable everywhere.
:::

:::exercise {exercise-4-3-008} number=4.3.8 answered=no src=ch-fourier-and-pde.tex:2034
PROBLEM:
Let
$$ f(t) = \begin{cases} 0 & \text{if } \; {-2} < t \leq 0, \\ t & \text{if } \; \phantom{-}0 < t \leq 1, \\ -t+2 & \text{if } \; \phantom{-}1 < t \leq 2, \end{cases} $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

:::

:::exercise {exercise-4-3-009} number=4.3.9 answered=no src=ch-fourier-and-pde.tex:2051
PROBLEM:
Let
$$ f(t) = e^t \qquad \text{for } \; {-1} < t \leq 1 $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.
c) What does the series converge to at $t=1$.

:::

:::exercise {exercise-4-3-010} number=4.3.10 answered=no src=ch-fourier-and-pde.tex:2064
PROBLEM:
[2] Let
$$ f(t) = t^2 \qquad \text{for } \; {-1} < t \leq 1 $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) By plugging in $t=0$, evaluate $\displaystyle \sum_{n=1}^\infty \frac{{(-1)}^n}{n^2} = -1 + \frac{1}{4} - \frac{1}{9} + \cdots$.
c) Now evaluate $\displaystyle \sum_{n=1}^\infty \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \cdots$.

:::

:::exercise {exercise-4-3-011} number=4.3.11 answered=no src=ch-fourier-and-pde.tex:2081
PROBLEM:
Let
$$ f(t) = \begin{cases} 0 & \text{if } \; {-3} < t \leq 0, \\ t & \text{if } \; \phantom{-}0 < t \leq 3, \end{cases} $$
extended periodically. Suppose $F(t)$ is the function given by the Fourier series of $f$. Without computing the Fourier series evaluate

a) $F(2)$
b) $F(-2)$
c) $F(4)$
d) $F(-4)$
e) $F(3)$
f) $F(-9)$

:::

:::exercise {exercise-4-3-101} number=4.3.101 answered=yes src=ch-fourier-and-pde.tex:2105
PROBLEM:
Let
$$ f(t) = t^2 \qquad \text{for } \; {-2} < t \leq 2 $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

SOLUTION:
a) $\frac{8}{6} + \sum\limits_{n=1}^\infty \frac{16{(-1)}^n}{\pi^2 n^2} \cos\bigl(\frac{n\pi}{2} t\bigr)$ b) $\frac{8}{6} - \frac{16}{\pi^2 } \cos\bigl(\frac{\pi}{2} t\bigr) + \frac{4}{\pi^2} \cos\bigl(\pi t\bigr) - \frac{16}{9\pi^2} \cos\bigl(\frac{3\pi}{2} t\bigr) + \cdots$
:::

:::exercise {exercise-4-3-102} number=4.3.102 answered=yes src=ch-fourier-and-pde.tex:2134
PROBLEM:
Let
$$ f(t) = t \qquad \text{for } \; {-\lambda} < t \leq \lambda \; \text{ (for some } \lambda > 0 \text{)} $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Write out the series explicitly up to the $3^{\text{rd}}$ harmonic.

SOLUTION:
a) $\sum\limits_{n=1}^\infty \frac{{(-1)}^{n+1}2\lambda}{n \pi} \sin\bigl(\frac{n\pi}{\lambda} t\bigr)$ b) $\frac{2\lambda}{\pi} \sin\bigl(\frac{\pi}{\lambda} t\bigr) - \frac{\lambda}{\pi} \sin\bigl(\frac{2\pi}{\lambda} t\bigr) + \frac{2\lambda}{3\pi} \sin\bigl(\frac{3\pi}{\lambda} t\bigr) - \cdots$
:::

:::exercise {exercise-4-3-103} number=4.3.103 answered=yes src=ch-fourier-and-pde.tex:2162
PROBLEM:
Let
$$ f(t) = \frac{1}{2} + \sum_{n=1}^\infty \frac{1}{n(n^2+1)} \sin(n\pi t) . $$
Compute $f'(t)$.
SOLUTION:
$f'(t) = \sum\limits_{n=1}^\infty \frac{\pi}{n^2+1} \cos(n\pi t)$
:::

:::exercise {exercise-4-3-104} number=4.3.104 answered=yes src=ch-fourier-and-pde.tex:2177
PROBLEM:
[2] Let
$$ f(t) = \frac{1}{2} + \sum_{n=1}^\infty \frac{1}{n^3} \cos(n t) . $$

a) Find the antiderivative.
b) Is the antiderivative periodic?

SOLUTION:
a) $F(t) = \frac{t}{2} + C + \sum\limits_{n=1}^\infty \frac{1}{n^4} \sin(nt)$ b) no
:::

:::exercise {exercise-4-3-105} number=4.3.105 answered=yes src=ch-fourier-and-pde.tex:2199
PROBLEM:
Let
$$ f(t) = {t}/{2} \qquad \text{for } \; {-\pi} < t < \pi $$
extended periodically.

a) Compute the Fourier series for $f(t)$.
b) Plug in $t={\pi}/{2}$ to find a series representation for ${\pi}/{4}$.
c) Using the first 4 terms of the result from part b) approximate ${\pi}/{4}$.

SOLUTION:
a) $\sum\limits_{n=1}^\infty \frac{{(-1)}^{n+1}}{n} \sin(nt)$ b) $f$ is continuous at $t={\pi}/{2}$ so the Fourier series converges to $f({\pi}/{2}) = {\pi}/{4}$. Obtain ${\pi}/{4} = \sum\limits_{n=1}^\infty \frac{{(-1)}^{n+1}}{2n-1} = 1 - {1}/{3} + {1}/{5}- {1}/{7} + \cdots$. c) Using the first 4 terms get ${76}/{105}\approx 0.72$ (quite a bad approximation, you would have to take about 50 terms to start to get to within $0.01$ of ${\pi}/{4}$).
:::

:::exercise {exercise-4-3-106} number=4.3.106 answered=yes src=ch-fourier-and-pde.tex:2230
PROBLEM:
Let
$$ f(t) = \begin{cases} 0 & \text{if } \; {-2} < t \leq 0, \\ 2 & \text{if } \; \phantom{-}0 < t \leq 2, \end{cases} $$
extended periodically. Suppose $F(t)$ is the function given by the Fourier series of $f$. Without computing the Fourier series evaluate

a) $F(0)$
b) $F(-1)$
c) $F(1)$
d) $F(-2)$
e) $F(4)$
f) $F(-9)$

SOLUTION:
a) $F(0) = 1$, b) $F(-1) = 0$, c) $F(1) = 2$, d) $F(-2) = 1$, e) $F(4) = 1$, f) $F(-9) = 0$
:::

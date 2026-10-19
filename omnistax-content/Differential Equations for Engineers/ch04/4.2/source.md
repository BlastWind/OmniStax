# 4.2 The trigonometric series {sec:ts-section}

:::note [section-notes]
*Note: 2 lectures, §9.1 in [EP](cite:EP), §10.2 in [BD](cite:BD)*
:::

## Periodic functions and motivation

As motivation for studying Fourier series, consider the problem
$$ x'' + \omega_0^2 x = f(t) , $$ {eq:ts-deq} number=4.6
for some periodic function $f(t)$. In [§2.6](ref:2.6#forcedo-section), we found the general solution to
$$ x'' + \omega_0^2 x = F_0 \cos ( \omega t) . $$ {eq:ts-deqcos} number=4.7
One way to solve [(4.6)](ref:ts-deq) is to decompose $f(t)$ as a sum of cosines (and sines) and then solve many problems of the form [(4.7)](ref:ts-deqcos). We then use the principle of superposition to sum up all these solutions to get a solution to [(4.6)](ref:ts-deq).

Before we proceed, let us talk a little bit more in detail about periodic functions. A function is said to be *{index:periodic}* with period $P$ if $f(t) = f(t+P)$ for all $t$. For brevity, we say $f(t)$ is $P$-periodic. Note that a $P$-periodic function is also $2P$-periodic, $3P$-periodic and so on. For example, $\cos (t)$ and $\sin (t)$ are $2\pi$-periodic. So are $\cos (kt)$ and $\sin (kt)$ for all integers $k$. The constant functions are an extreme example. They are periodic for any period (exercise).

Normally, we start with a function $f(t)$ defined on some interval $[-L,L]$, and we want to *extend $f(t)$ periodically*{index-entry:extend periodically}{index-entry:periodic extension} to make it a $2L$-periodic function. We do this extension by defining a new function $F(t)$ such that for $t$ in $[-L,L]$, $F(t) = f(t)$. For $t$ in $[L,3L]$, we define $F(t) = f(t-2L)$, for $t$ in $[-3L,-L]$, $F(t) = f(t+2L)$, and so on. To make that work, we needed $f(-L) = f(L)$. We could have also started with $f$ defined only on the half-open interval $(-L,L]$ and then define $f(-L) = f(L)$.

:::example {ex:example-4-2-1} Example 4.2.1
Define $f(t) = 1-t^2$ on $[-1,1]$. Extend $f(t)$ periodically to a 2-periodic function. For $1 \leq t \leq 3$, we get $f(t) = 1-{(t-2)}^2$. For $-3 \leq t \leq -1$, we get $f(t) = 1-{(t+2)}^2$. For $3 \leq t \leq 5$, we get $f(t) = 1-{(t-4)}^2$. And so on. See [Figure 4.3](ref:ts-perextofinvertedparabolafig).

> FIGURE {fig:ts-perextofinvertedparabolafig} number=4.3 src=../../media/ts-perextofinvertedparabola.svg
> alt: A plot of a function between t equals minus 3 and t equals 3 that is composed of three downward parabolas. The first parabola starts on the t-axis at t equals minus 3, goes up, hits value of 1, then goes down back to the t-axis at t equals minus 1. Then an identical parabola does the same thing ending up at t equals 1 on the t-axis, and then again another identical parabola ending at t equals 3.
> width: 4.5in
> caption: Periodic extension of the function $1-t^2$.

:::

You should be careful to distinguish between $f(t)$ and its extension. A common mistake is to assume that a formula for $f(t)$ holds for its extension. It can be confusing when the formula for $f(t)$ is periodic, but with perhaps a different period.

:::exercise {exercise-4-2-001} number=4.2.1 answered=no src=ch-fourier-and-pde.tex:771
PROBLEM:
Define $f(t) = \cos t$ on $[{-\pi}/{2},{\pi}/{2}]$. Take the $\pi$-periodic extension and sketch its graph. How does it compare to the graph of $\cos t$?
:::

## Inner product and eigenvector decomposition

Suppose $A$ is a *{index:symmetric matrix}*, that is, $A^T = A$. As we remarked before, eigenvectors of $A$ are then orthogonal. Here the word *orthogonal*{index-entry:orthogonal!vectors} means that if $\vec{v}$ and $\vec{w}$ are two eigenvectors of $A$ for distinct eigenvalues, then $\langle \vec{v} , \vec{w} \rangle = 0$. In this case, the inner product $\langle \vec{v} , \vec{w} \rangle$ is the *{index:dot product}*, which can be computed as $\vec{v}^T\vec{w}$.

To decompose a vector $\vec{v}$ in terms of mutually orthogonal vectors $\vec{w}_1$ and $\vec{w}_2$, we write
$$ \vec{v} = a_1 \vec{w}_1 + a_2 \vec{w}_2 . $$
Let us find the formula for $a_1$ and $a_2$. We compute,
$$ \langle \vec{v} , \vec{w_1} \rangle = \langle a_1 \vec{w}_1 + a_2 \vec{w}_2 , \vec{w_1} \rangle = a_1 \langle \vec{w}_1 , \vec{w_1} \rangle + a_2 \underbrace{\langle \vec{w}_2 , \vec{w_1} \rangle}_{=0} = a_1 \langle \vec{w}_1 , \vec{w_1} \rangle . $$
Therefore,
$$ a_1 = \frac{\langle \vec{v} , \vec{w_1} \rangle}{ \langle \vec{w}_1 , \vec{w_1} \rangle} . $$
Similarly,
$$ a_2 = \frac{\langle \vec{v} , \vec{w_2} \rangle}{ \langle \vec{w}_2 , \vec{w_2} \rangle} . $$
You probably remember this formula from vector calculus.

:::example {ex:example-4-2-2} Example 4.2.2
Write $\vec{v} = \left[ \begin{smallmatrix} 2 \\ 3 \end{smallmatrix} \right]$ as a linear combination of $\vec{w_1} = \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$ and $\vec{w_2} = \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$.

Note that $\vec{w}_1$ and $\vec{w}_2$ are orthogonal as $\langle \vec{w}_1 , \vec{w}_2 \rangle = 1(1) + (-1)1 = 0$. Then
$$ \begin{align*} & a_1 = \frac{\langle \vec{v} , \vec{w_1} \rangle}{ \langle \vec{w}_1 , \vec{w_1} \rangle} = \frac{2(1) + 3(-1)}{1(1) + (-1)(-1)} = \frac{-1}{2} , \\ & a_2 = \frac{\langle \vec{v} , \vec{w_2} \rangle}{ \langle \vec{w}_2 , \vec{w_2} \rangle} = \frac{2 + 3}{1 + 1} = \frac{5}{2} . \end{align*} $$
Hence,
$$ \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \frac{-1}{2} \begin{bmatrix} 1 \\ -1 \end{bmatrix} + \frac{5}{2} \begin{bmatrix} 1 \\ 1 \end{bmatrix} . $$

:::

## The trigonometric series

Instead of decomposing a vector in terms of eigenvectors of a matrix, we decompose a function in terms of eigenfunctions of a certain eigenvalue problem. The eigenvalue problem we use for the Fourier series is
$$ x'' + \lambda x = 0, \quad x(-\pi) = x(\pi), \quad x'(-\pi) = x'(\pi) . $$
We computed that eigenfunctions are 1, $\cos (k t)$, $\sin (k t)$. That is, we want to find a representation of a $2\pi$-periodic function $f(t)$ as
$$ \boxed{~~ \begin{aligned} f(t) &= \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos (n t) + b_n \sin (n t) \Bigr] \\ & = \frac{a_0}{2} + a_1 \cos (t) + b_1 \sin (t) + a_2 \cos (2 t) + b_2 \sin (2 t) + \cdots \end{aligned} ~~} $$
This series is called the *{index:Fourier series}*^[Named after the French mathematician [Jean Baptiste Joseph Fourier](https://en.wikipedia.org/wiki/Joseph_Fourier) (1768–1830).] or the *{index:trigonometric series}* for $f(t)$. The term $a_n \cos (n t) + b_n \sin (n t)$ is sometimes called the $n^{\text{th}}$ *{index:harmonic}*. We write the coefficient of the eigenfunction 1 as $\frac{a_0}{2}$ for convenience. We could also think of $1 = \cos (0t)$, so that we only need to look at $\cos (kt)$ and $\sin (kt)$.

As for matrices, we want to find a *{index:projection}* of $f(t)$ onto the subspaces given by the eigenfunctions. So we want to define an *{index:inner product of functions}*. For example, to find $a_n$, we want to compute $\langle \, f(t) \, , \, \cos (nt) \, \rangle$. We define the inner product as
$$ \langle \, f(t)\, , \, g(t) \, \rangle \overset{\text{def}}{=} \int_{-\pi}^\pi f(t) \, g(t) \, dt . $$
With this inner product, we saw in the previous section that the eigenfunctions $\cos (kt)$ (including the constant eigenfunction), and $\sin (kt)$ are *orthogonal{index-entry:orthogonal!functions}*, that is,
$$ \begin{align*} \langle \, \cos (mt)\, , \, \cos (nt) \, \rangle = 0 & \qquad \text{for } m \neq n , \\ \langle \, \sin (mt)\, , \, \sin (nt) \, \rangle = 0 & \qquad \text{for } m \neq n , \\ \langle \, \sin (mt)\, , \, \cos (nt) \, \rangle = 0 & \qquad \text{for all } m \text{ and } n . \end{align*} $$
For $n=1,2,3,\ldots$, we have
$$ \begin{align*} \langle \, \cos (nt) \, , \, \cos (nt) \, \rangle &= \int_{-\pi}^\pi \cos(nt)\cos(nt) \, dt = \pi, \\ \langle \, \sin (nt) \, , \, \sin (nt) \, \rangle &= \int_{-\pi}^\pi \sin(nt)\sin(nt) \, dt = \pi, \end{align*} $$
by elementary calculus. For the constant, we get
$$ \langle \, 1 \, , \, 1 \, \rangle = \int_{-\pi}^\pi 1 \cdot 1 \, dt = 2\pi. $$
The coefficients are given by
$$ \boxed{~~ \begin{aligned} & a_n = \frac{\langle \, f(t) \, , \, \cos (nt) \, \rangle}{\langle \, \cos (nt) \, , \, \cos (nt) \, \rangle} = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \cos (nt) \, dt , \\ & b_n = \frac{\langle \, f(t) \, , \, \sin (nt) \, \rangle}{\langle \, \sin (nt) \, , \, \sin (nt) \, \rangle} = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \sin (nt) \, dt . \end{aligned} ~~} $$
Compare these expressions with the finite-dimensional example. For $a_0$, we get a similar formula
$$ \boxed{~~ a_0 = 2 \frac{\langle \, f(t) \, , \, 1 \, \rangle}{\langle \, 1 \, , \, 1 \, \rangle} = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \, dt . ~~} $$

Let us check the formulas via the orthogonality properties. Suppose for a moment that
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos (n t) + b_n \sin (n t) . $$
Then for $m \geq 1$, we have
$$ \begin{split} \langle \, f(t)\,,\,\cos (mt) \, \rangle & = \Bigl\langle \, \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos (n t) + b_n \sin (n t) \Bigr] \,,\, \cos (mt) \, \Bigr\rangle \\ & = \frac{a_0}{2} \langle \, 1 \, , \, \cos (mt) \, \rangle \\ & \phantom{=abcd} + \sum_{n=1}^\infty \Bigl[ a_n \langle \, \cos (nt) \, , \, \cos (mt) \, \rangle + b_n \langle \, \sin (n t) \, , \, \cos (mt) \, \rangle \Bigr] \\ & = a_m \langle \, \cos (mt) \, , \, \cos (mt) \, \rangle . \end{split} $$
Hence, $a_m = \frac{\langle \, f(t) \, , \, \cos (mt) \, \rangle}{\langle \, \cos (mt) \, , \, \cos (mt) \, \rangle}$.

:::exercise {exercise-4-2-002} number=4.2.2 answered=no src=ch-fourier-and-pde.tex:1004
PROBLEM:
Carry out the calculation for $a_0$ and $b_m$.
:::

:::example {ex:example-4-2-3} Example 4.2.3
Take the function
$$ f(t) = t $$
for $t$ in $(-\pi,\pi]$. Extend $f(t)$ periodically and write it as a Fourier series. This function is called the *{index:sawtooth}*, and it finds many applications, for example, in electronic music.

> FIGURE {fig:ts-sawtoothfig} number=4.4 src=../../media/ts-sawtooth.svg
> alt: For t between minus 2 pi and 2 pi, a graph of a function is shown that is simply the diagonal line of slope 1 through the origin between minus pi and pi. For t less than minus pi, it is a line of slope 1 through the point (minus 2 pi,0), and for t more than pi the graph is a line of slope 1 through (2 pi,0).
> width: 4.5in
> caption: The graph of the sawtooth function.

The plot of the extended periodic function is given in [Figure 4.4](ref:ts-sawtoothfig). Let us compute the coefficients. We start with $a_0$,
$$ a_0 = \frac{1}{\pi} \int_{-\pi}^\pi t \,dt = 0 . $$
We will often use the result from calculus that says that the integral of an odd function over a symmetric interval is zero. Recall that an *{index:odd function}* is a function $\varphi(t)$ such that $\varphi(-t) = -\varphi(t)$. For example, the functions $t$, $\sin t$, or (importantly for us) $t \cos (nt)$ are all odd functions. Thus
$$ a_n = \frac{1}{\pi} \int_{-\pi}^\pi t \cos (nt) \,dt = 0 . $$
We move to $b_n$. Another useful fact from calculus is that the integral of an even function over a symmetric interval is twice the integral of the same function over half the interval. An *{index:even function}* is a function $\varphi(t)$ such that $\varphi(-t) = \varphi(t)$. For example, $t \sin (nt)$ is even.
$$ \begin{split} b_n & = \frac{1}{\pi} \int_{-\pi}^\pi t \sin (nt) \,dt \\ & = \frac{2}{\pi} \int_{0}^\pi t \sin (nt) \,dt \\ & = \frac{2}{\pi} \left( \left[ \frac{-t \cos (nt)}{n} \right]_{t=0}^{\pi} + \frac{1}{n} \int_{0}^\pi \cos (nt) \,dt \right) \\ & = \frac{2}{\pi} \left( \frac{-\pi \cos (n\pi)}{n} + 0 \right) \\ & = \frac{-2 \cos (n\pi)}{n} = \frac{2 \,{(-1)}^{n+1}}{n} . \end{split} $$
We have used that
$$ \cos (n\pi) = {(-1)}^n = \begin{cases} 1 & \text{if } n \text{ even} , \\ -1 & \text{if } n \text{ odd} . \end{cases} $$
The series, therefore, is
$$ \sum_{n=1}^\infty \frac{2 \,{(-1)}^{n+1}}{n} \, \sin (n t) . $$

More explicitly, the first 3 harmonics of the series for $f(t)$ are
$$ 2 \, \sin (t) - \sin (2t) +\frac{2}{3} \sin (3t) + \cdots $$
The plot of these first three terms of the series, along with a plot of the first 20 terms is given in [Figure 4.5](ref:ts-sawtoothfsfig).

> FIGURE {fig:ts-sawtoothfsfig} number=4.5 src=../../media/ts-sawtooth-fs3-fs20.svg
> alt: Two plots of the sawtooth function on the interval minus 2 pi to 2 pi. The left-hand plot has overlaid the first 3 harmonics (the first 3 nonzero terms of the Fourier series) of the Fourier series which is a wiggly line that roughly follows the sawtooth along its straight segment and then makes a quick dash down to the next straight segment. There are only a few wiggles in this version. On the right-hand side, what is overlaid is the graph of the first 20 harmonics. On this plot, the line wiggles much faster but it is also closer to the straight segments. You can see the wiggles get a bit further away from the sawtooth near the discontinuities.
> width: 9in
> caption: First 3 (left graph) and 20 (right graph) harmonics of the sawtooth function.

:::

:::example {ex:example-4-2-4} Example 4.2.4
Take the function
$$ f(t) = \begin{cases} 0 & \text{if } \;{-\pi} < t \leq 0 , \\ \pi & \text{if } \;\phantom{-}0 < t \leq \pi . \end{cases} $$
[4]Extend $f(t)$ periodically and write it as a Fourier series. This function or its variants appear often in applications and the function is called the *{index:square wave}*. It is a signal generated by simply periodically flipping a switch on or off.

> FIGURE {fig:ts-squarewavefig} number=4.6 src=../../media/ts-squarewave.svg
> alt: Plot of the periodic square wave function on the interval minus 2 pi to 2 pi. The function is pi on the interval minus 2 pi to minus pi, then it is 0 on the interval minus pi to 0, then it is pi from 0 to pi, then it is zero from pi to 2 pi.
> width: 4.5in
> caption: The graph of the square wave function.

[2] The plot of the extended periodic function is given in [Figure 4.6](ref:ts-squarewavefig). Now we compute the coefficients. We start with $a_0$
$$ a_0 = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \,dt = \frac{1}{\pi} \int_{0}^\pi \pi \,dt = \pi . $$
Next,
$$ a_n = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \cos (nt) \,dt = \frac{1}{\pi} \int_{0}^\pi \pi \cos (nt) \,dt = 0 . $$
And finally,
$$ \begin{split} b_n & = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \sin (nt) \,dt \\ & = \frac{1}{\pi} \int_{0}^\pi \pi \sin (nt) \,dt \\ & = \left[ \frac{- \cos (nt)}{n} \right]_{t=0}^\pi \\ & = \frac{1 - \cos (\pi n)}{n} = \frac{1 - {(-1)}^n}{n} = \begin{cases} \frac{2}{n} & \text{if } n \text{ is odd} , \\ 0 & \text{if } n \text{ is even} . \end{cases} \end{split} $$
The Fourier series is
$$ \frac{\pi}{2} + \sum_{\substack{n=1\\n \text{ odd}}}^\infty \frac{2}{n} \sin (n t) = \frac{\pi}{2} + \sum_{k=1}^\infty \frac{2}{2k-1} \sin \bigl( (2k-1)\, t \bigr) . $$

The first 3 harmonics of the series for $f(t)$ are
$$ \frac{\pi}{2} + 2 \, \sin (t) + \frac{2}{3} \sin (3t) + \cdots $$
The plot of these first three and also of the first 20 terms of the series is given in [Figure 4.7](ref:ts-squarewavefsfig).

> FIGURE {fig:ts-squarewavefsfig} number=4.7 src=../../media/ts-squarewave-fs3-fs20.svg
> alt: Two plots of the square wave function on the interval minus 2 pi to 2 pi. The left-hand plot has overlaid the first 3 harmonics of the Fourier series which is a wiggly line that roughly follows the square wave along its straight horizontal segments and then makes a quick dash down or up to the next straight segment. There are only a few wiggles in this version. On the right-hand side, what is overlaid is the graph of the first 20 harmonics. On this plot, the line wiggles much faster, but it is also closer to the straight segments. You can see the wiggles get a bit further away from the square wave near the discontinuities.
> width: 9in
> caption: First 3 (left graph) and 20 (right graph) harmonics of the square wave function.

:::

We have so far skirted the issue of convergence. For example, if $f(t)$ is the square wave function, the equation
$$ f(t) = \frac{\pi}{2} + \sum_{k=1}^\infty \frac{2}{2k-1} \sin \bigl( (2k-1)\, t \bigr) . $$
is only an equality for such $t$ where $f(t)$ is continuous. We do not get an equality for $t=-\pi,0,\pi$ and all the other discontinuities of $f(t)$. It is not hard to see that when $t$ is an integer multiple of $\pi$ (which gives all the discontinuities), then $\sin \bigl( (2k-1)\, t \bigr) = 0$ and so
$$ \frac{\pi}{2} + \sum_{k=1}^\infty \frac{2}{2k-1} \sin \bigl( (2k-1)\, t \bigr) = \frac{\pi}{2} . $$
We redefine $f(t)$ on $[-\pi,\pi]$ as
$$ f(t) = \begin{cases} 0 & \text{if } \; {-\pi} < t < 0 , \\ \pi & \text{if } \; \phantom{-}0 < t < \pi , \\ {\pi}/{2} & \text{if } \; \phantom{-}t = -\pi, t = 0,\text{ or } t = \pi, \end{cases} $$
and extend periodically. The series equals this new extended $f(t)$ everywhere, including the discontinuities. We will generally not worry about changing the function values at several (finitely many) points.

We will say more about convergence in the next section. Roughly speaking, if $f(t)$ is a nice enough function then the series converges to $f(t)$ wherever $f(t)$ is continuous. Let us, however, briefly mention an effect of the discontinuity. We zoom in near the discontinuity in the square wave and we plot the first 100 harmonics. See [Figure 4.8](ref:ts-squarewavegibbsfig). While the series is a very good approximation away from the discontinuities, the error (the overshoot) near the discontinuity at $t=\pi$ does not seem to be getting any smaller as we take more and more harmonics. This behavior is known as the *{index:Gibbs phenomenon}*. The region where the error is large does get smaller, however, the more terms in the series we take.

> FIGURE {fig:ts-squarewavegibbsfig} number=4.8 src=../../media/ts-squarewave-gibbs.svg
> alt: Closeup of the Gibbs phenomenon near the discontinuity of the square wave function. What is shown is a closeup around one side of one of the discontinuities, in particular we can see the segment where the function is pi for a short bit until t equals pi, and then the segment where the function is 0 is now out of the picture. Overlaid on the graph of the square wave is a plot of the first 100 harmonics of the Fourier series, which is a very wiggly line that is quite close to the graph of the square wave until we get closer to t equals pi from the left side. As we get closer the wiggles get larger and larger and overshoot the square wave function a significant distance. At t equals pi the graph drops down to catch up with where the square wave is 0.
> width: 4.5in
> caption: Gibbs phenomenon in action.

We can think of a periodic function as a “signal” that is a superposition of many signals of pure frequency. For example, we could think of the square wave as a tone of certain base frequency coming through the speaker of your computer. This base frequency is called the *{index:fundamental frequency}* and that is the “musical note” that you identify this sound as. But the square wave will also be a superposition of many different pure tones of frequencies that are multiples of the fundamental frequency. In music, the higher frequencies are called the *{index:overtones}*. The set of all the frequencies that appear is called the *{index:spectrum}* of the signal. On the other hand, if the signal were a simple sine wave instead of the square wave, then it would be only the pure tone of fundamental frequency (no overtones). The simplest way to make sound using a computer is the square wave, and the sound is very different from a pure tone. If you ever played video games from the 1980s or so, then you heard what square waves sound like.

## Exercises

:::exercise {exercise-4-2-003} number=4.2.3 answered=no src=ch-fourier-and-pde.tex:1317
PROBLEM:
Suppose $f(t)$ is defined on $[-\pi,\pi]$ as $\sin (5t) + \cos (3t)$. Extend periodically and compute the Fourier series of $f(t)$.
:::

:::exercise {exercise-4-2-004} number=4.2.4 answered=no src=ch-fourier-and-pde.tex:1322
PROBLEM:
Suppose $f(t)$ is defined on $[-\pi,\pi]$ as $\lvert t \rvert$. Extend periodically and compute the Fourier series of $f(t)$.
:::

:::exercise {exercise-4-2-005} number=4.2.5 answered=no src=ch-fourier-and-pde.tex:1327
PROBLEM:
Suppose $f(t)$ is defined on $[-\pi,\pi]$ as $\lvert t \rvert^3$. Extend periodically and compute the Fourier series of $f(t)$.
:::

:::exercise {exercise-4-2-006} number=4.2.6 answered=no src=ch-fourier-and-pde.tex:1332
PROBLEM:
Suppose $f(t)$ is defined on $(-\pi,\pi]$ as
$$ f(t) = \begin{cases} -1 & \text{if } \; {-\pi} < t \leq 0 , \\ 1 & \text{if } \; \phantom{-}0 < t \leq \pi . \end{cases} $$
Extend periodically and compute the Fourier series of $f(t)$.
:::

:::exercise {exercise-4-2-007} number=4.2.7 answered=no src=ch-fourier-and-pde.tex:1344
PROBLEM:
Suppose $f(t)$ is defined on $(-\pi,\pi]$ as $t^3$. Extend periodically and compute the Fourier series of $f(t)$.
:::

:::exercise {exercise-4-2-008} number=4.2.8 answered=no src=ch-fourier-and-pde.tex:1349
PROBLEM:
Suppose $f(t)$ is defined on $[-\pi,\pi]$ as $t^2$. Extend periodically and compute the Fourier series of $f(t)$.
:::

There is another form of the Fourier series using complex exponentials $e^{nt}$ for $n=\ldots,-2,-1,0,1,2,\ldots$ instead of $\cos(nt)$ and $\sin(nt)$ for positive $n$. This form may be easier to work with sometimes. It is certainly more compact to write, and there is only one formula for the coefficients. On the downside, the coefficients are complex numbers.

:::exercise {exercise-4-2-009} number=4.2.9 answered=no src=ch-fourier-and-pde.tex:1361
PROBLEM:

Let
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos (n t) + b_n \sin (n t) \Bigr] . $$
Use Euler’s formula $e^{i\theta} = \cos (\theta) + i \sin (\theta)$ to show that there exist complex numbers $c_m$ such that
$$ f(t) = \sum_{m=-\infty}^\infty c_m e^{imt} . $$
Note that the sum now ranges over all the integers including negative ones. Do not worry about convergence in this calculation. Hint: It may be better to start from the complex exponential form and write the series as
$$ c_0 + \sum_{m=1}^\infty \Bigl[ c_m e^{imt} + c_{-m} e^{-imt} \Bigr] . $$

:::

:::exercise {exercise-4-2-101} number=4.2.101 answered=yes src=ch-fourier-and-pde.tex:1386
PROBLEM:
Suppose $f(t)$ is defined on $[-\pi,\pi]$ as $f(t) = \sin(t)$. Extend periodically and compute the Fourier series.
SOLUTION:
$\sin(t)$
:::

:::exercise {exercise-4-2-102} number=4.2.102 answered=yes src=ch-fourier-and-pde.tex:1394
PROBLEM:
Suppose $f(t)$ is defined on $(-\pi,\pi]$ as $f(t) = \sin(\pi t)$. Extend periodically and compute the Fourier series.
SOLUTION:
$\sum\limits_{n=1}^\infty \frac{2n {(-1)}^{n} \sin({\pi}^{2})}{\pi({\pi}^{2} - {n}^{2})} \sin(nt)$
:::

:::exercise {exercise-4-2-103} number=4.2.103 answered=yes src=ch-fourier-and-pde.tex:1416
PROBLEM:
Suppose $f(t)$ is defined on $(-\pi,\pi]$ as $f(t) = \sin^2(t)$. Extend periodically and compute the Fourier series.
SOLUTION:
$\frac{1}{2}-\frac{1}{2}\cos(2t)$
:::

:::exercise {exercise-4-2-104} number=4.2.104 answered=yes src=ch-fourier-and-pde.tex:1425
PROBLEM:
Suppose $f(t)$ is defined on $(-\pi,\pi]$ as $f(t) = t^4$. Extend periodically and compute the Fourier series.
SOLUTION:
$\frac{\pi^4}{5} + \sum\limits_{n=1}^\infty \frac{{(-1)}^{n} (8{\pi}^{2}{n}^{2}-48) }{{n}^{4}} \cos(nt)$
:::

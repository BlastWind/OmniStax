# 4.5 Applications of Fourier series {sec:appoffourier-section}

:::note [section-notes]
*Note: 2 lectures, §9.4 in [EP](cite:EP), not in [BD](cite:BD)*
:::

## Periodically forced oscillation

> IMAGE {img:massfigforce} src=../../media/massfigforce.svg
> alt: A diagram showing a mass labeled m, attached on the left to a spring labeled as k, attached to a wall on the left. An arrow indicating force to the right on the mass is labeled F of t. An arrow below the mass indicating displacement points to the right and is labeled x. The 'floor' of the diagram is labeled as 'damping c'.

We return to forced oscillations. Consider a mass-spring system as before, where we have a mass $m$ on a spring with spring constant $k$, with damping $c$, and a force $F(t)$ applied to the mass. Suppose the forcing function $F(t)$ is $2L$-periodic for some $L > 0$. We saw this problem in [chapter 2](ref:2#ho-chapter) with $F(t) = F_0 \cos (\omega t)$. The equation that governs this particular setup is
$$ mx''(t) + cx'(t) + kx(t) = F(t) . $$ {eq:afs-eq} number=4.9

The general solution of [(4.9)](ref:afs-eq) consists of the complementary solution $x_c$, which solves the associated homogeneous equation $mx'' + cx' + kx = 0$, and a particular solution of [(4.9)](ref:afs-eq) we call $x_p$. For $c > 0$, the complementary solution $x_c$ will decay as time goes by. Therefore, we are mostly interested in a particular solution $x_p$ that does not decay and is periodic with the same period as $F(t)$. We call this particular solution the *{index:steady periodic solution}* and we write it as $x_{sp}$ as before. What is new in this section is that we consider an arbitrary forcing function $F(t)$ instead of a simple cosine.

For simplicity, suppose $c=0$. The problem with $c > 0$ is very similar. The equation
$$ mx'' + kx = 0 $$
has the general solution
$$ x(t) = A \cos (\omega_0 t) + B \sin (\omega_0 t) , $$
where $\omega_0 = \sqrt{\frac{k}{m}}$. Any solution to $mx''(t) + kx(t) = F(t)$ is of the form $A \cos (\omega_0 t) + B \sin (\omega_0 t) + x_{sp}$. The steady periodic solution $x_{sp}$ has the same period as $F(t)$.

In the spirit of the last section and the idea of undetermined coefficients, we first write
$$ F(t) = \frac{c_0}{2} + \sum_{n=1}^\infty \Bigl[ c_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + d_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr] . $$
Then we write a proposed steady periodic solution $x$ as
$$ x(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr], $$
where $a_n$ and $b_n$ are unknowns. We plug $x$ into the differential equation and solve for $a_n$ and $b_n$ in terms of $c_n$ and $d_n$. This process is perhaps best understood by example. [2]

:::example {ex:afs-steadyex} Example 4.5.1
Suppose that $k=2$ and $m=1$. The units are again the mks units{index-entry:mks units} (meters-kilograms-seconds). There is a jetpack strapped to the mass, which fires with a force of 1 newton for 1 second and then is off for 1 second, and so on. We want to find the steady periodic solution.

The equation is, therefore,
$$ x'' + 2 x = F(t) , $$
where $F(t)$ is the step function
$$ F(t) = \begin{cases} 0 & \text{if } \; {-1} < t < 0 , \\ 1 & \text{if } \; \phantom{-}0 < t < 1 , \end{cases} $$
extended periodically. We write
$$ F(t) = \frac{c_0}{2} + \sum_{n=1}^\infty \Bigl[ c_n \cos (n \pi t) + d_n \sin (n \pi t) \Bigr] . $$
We compute
$$ \begin{align*} c_n & = \int_{-1}^1 F(t) \cos (n \pi t) \, dt = \int_{0}^1 \cos (n \pi t) \, dt = 0 \qquad \text{for } \; n \geq 1, \\ c_0 & = \int_{-1}^1 F(t) \, dt = \int_{0}^1 \, dt = 1 , \\ d_n & = \int_{-1}^1 F(t) \sin (n \pi t) \, dt \\ & = \int_{0}^1 \sin (n \pi t) \, dt \\ & = \left[ \frac{-\cos (n \pi t)}{n \pi} \right]_{t=0}^1 \\ & = \frac{1-{(-1)}^n}{\pi n} = \begin{cases} \frac{2}{\pi n} & \text{if } n \text{ odd} , \\ 0 & \text{if } n \text{ even} . \end{cases} \end{align*} $$
So
$$ F(t) = \frac{1}{2} + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{2}{\pi n} \sin (n \pi t) . $$

We want to try
$$ x(t) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos (n \pi t) + b_n \sin (n \pi t) \Bigr] . $$
Once we plug $x$ into the differential equation $x''+2x = F(t)$, it is clear that $a_n = 0$ for $n \geq 1$ as there are no corresponding terms in the series for $F(t)$. Similarly, $b_n = 0$ for even $n$. Hence we try
$$ x(t) = \frac{a_0}{2} + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty b_n \sin (n \pi t) . $$
We plug into the differential equation and obtain
$$ \begin{split} x'' + 2 x & = \left( \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty - b_n n^2 \pi^2 \sin (n \pi t) \right) + a_0 + 2 \left( \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty b_n \sin (n \pi t) \right) \\ & = a_0 + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty b_n (2 - n^2 \pi^2 ) \sin (n \pi t) \\ & = F(t) = \frac{1}{2} + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{2}{\pi n} \sin (n \pi t) . \end{split} $$
So $a_0 = \frac{1}{2}$, $b_n = 0$ for even $n$, and for odd $n$, we get
$$ b_n = \frac{2}{\pi n (2 - n^2 \pi^2 )} . $$

The steady periodic solution has the Fourier series
$$ x_{sp}(t) = \frac{1}{4} + \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{2}{\pi n (2 - n^2 \pi^2 )} \sin (n \pi t) . $$
We know this is the steady periodic solution as it contains no terms of the complementary solution and it is periodic with the same period as $F(t)$ itself. See [Figure 4.14](ref:afs-steadyexfig) for the plot of this solution.

> FIGURE {fig:afs-steadyexfig} number=4.14 src=../../media/afs-steadyex.svg
> alt: Graph of a periodic function that looks like a sinusoidal path that oscillates several times as t goes from 0 to 10. It starts at 0.25 when t equals 0, goes a bit below 0.2, then goes back up to a bit above 0.3, and so on. It makes 5 oscillations on the interval.
> width: 4.5in
> caption: Plot of the steady periodic solution $x_{sp}$ of [Example 4.5.1](ref:afs-steadyex).

:::

## Resonance

Just as when the forcing function was a simple cosine, we may encounter resonance. We assume $c=0$ and so we discuss only pure resonance. Let $F(t)$ be $2L$-periodic and consider
$$ m x''(t) + k x (t) = F(t) . $$
When we expand $F(t)$ and find that some of its terms coincide with the complementary solution to $mx''+kx=0$, we cannot use those terms in the guess. Just like before, they disappear when we plug them into the left-hand side, and we get a contradictory equation (such as $0=1$). That is, suppose
$$ x_c = A \cos (\omega_0 t) + B \sin (\omega_0 t), $$
where $\omega_0 = \frac{N \pi}{L}$ for some positive integer $N$. We have to modify our guess and try
$$ x(t) = \frac{a_0}{2} + t \Biggl( a_N \cos \Bigl( \frac{N \pi}{L} t \Bigr) + b_N \sin \Bigl( \frac{N \pi}{L} t \Bigr) \Biggr) + \sum_{\substack{n=1\\n \neq N}}^\infty \Bigl[ a_n \cos \Bigl( \frac{n \pi}{L} t \Bigr) + b_n \sin \Bigl( \frac{n \pi}{L} t \Bigr) \Bigr]. $$
In other words, we multiply the offending term by $t$. From then on, we proceed as before.

The solution is not a Fourier series (it is not even periodic) since it contains these terms multiplied by $t$. The terms $t \left( a_N \cos \left( \frac{N \pi}{L} t \right) + b_N \sin \left( \frac{N \pi}{L} t \right) \right)$ eventually dominate and lead to wild oscillations. As before, this behavior is called *{index:pure resonance}* or just *{index:resonance}*.

Note that we may hit the resonance frequency with infinitely many terms (overtones) of the forcing function $F$. That is, suppose we use the same “shape” for $F$, and we change the base frequency (we change the $L$). Then different terms from the Fourier series of $F$ may interfere with the complementary solution, that is, $\frac{n \pi}{L} = \omega_0$ for some $n$, and possibly cause resonance. Theoretically, infinitely many base frequencies could cause resonance. However, we should note that since everything is an approximation to any real life application, only the first few terms of $F$, and hence only a few such frequencies, would matter.

:::example {ex:example-4-5-2} Example 4.5.2
We want to solve the equation
$$ 2 x'' + 18 \pi^2 x = F(t) , $$ {eq:afs-eq-resonance} number=4.10
where
$$ F(t) = \begin{cases} -1 & \text{if } \; {-1} < t < 0 , \\ 1 & \text{if } \; \phantom{-}0 < t < 1 , \end{cases} $$
extended periodically. We note that
$$ F(t) = \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{4}{\pi n} \sin (n \pi t) . $$

:::exercise {exercise-4-5-001} number=4.5.1 answered=no src=ch-fourier-and-pde.tex:3170
PROBLEM:
Compute the Fourier series of $F$ to verify the equation above.
:::

As $\sqrt{\frac{k}{m}} = \sqrt{\frac{18\pi^2}{2}} = 3\pi$, the solution to [(4.10)](ref:afs-eq-resonance) is
$$ x(t) = c_1 \cos (3\pi t) + c_2 \sin (3\pi t) + x_p (t) $$
for some particular solution $x_p$.

If we just try an $x_p$ given as a Fourier series with $\sin (n\pi t)$ as usual, the complementary equation, $2x''+18\pi^2x=0$, eats our $3^\text{rd}$ harmonic. That is, the term with $\sin(3 \pi t)$ is already in our complementary solution. Therefore, we pull that term out and multiply it by $t$. We also add a cosine term to get everything right. That is, we try
$$ x_p(t) = a_3 t \cos (3 \pi t ) + b_3 t \sin (3 \pi t) + \sum_{\substack{n=1 \\ n~\text{odd} \\ n \neq 3}}^\infty b_n \sin (n \pi t) . $$
We compute the second derivative.
$$ \begin{gather*} x_p''(t) = - 6 a_3 \pi \, \sin (3 \pi t) - 9\pi^2 a_3 \, t \, \cos (3 \pi t) + 6 b_3 \pi \, \cos (3 \pi t) - 9\pi^2 b_3 \, t \, \sin (3 \pi t) \\ {} + \sum_{\substack{n=1 \\ n~\text{odd} \\ n \neq 3}}^\infty (-n^2 \pi^2 b_n ) \, \sin (n \pi t) . \end{gather*} $$
We now plug into the left-hand side of the differential equation.
$$ \begin{align*} 2x_p'' + 18\pi^2 x_p = & - 12 a_3 \pi \sin (3 \pi t) - 18\pi^2 a_3 t \cos (3 \pi t) + 12 b_3 \pi \cos (3 \pi t) - 18\pi^2 b_3 t \sin (3 \pi t) \\ & \phantom{\, - 12 a_3 \pi \sin (3 \pi t)} ~ {} + 18 \pi^2 a_3 t \cos (3 \pi t) \phantom{\, + 12 b_3 \pi \cos (3 \pi t)} ~ {} + 18 \pi^2 b_3 t \sin (3 \pi t) \\ & {} + \sum_{\substack{n=1 \\ n~\text{odd} \\ n \neq 3}}^\infty (-2n^2 \pi^2 b_n + 18\pi^2 b_n) \, \sin (n \pi t) . \end{align*} $$
We simplify,
$$ 2x_p'' + 18\pi^2 x_p = - 12 a_3 \pi \sin (3 \pi t) + 12 b_3 \pi \cos (3 \pi t) + \sum_{\substack{n=1 \\ n~\text{odd} \\ n \neq 3}}^\infty (-2n^2 \pi^2 b_n + 18\pi^2 b_n) \sin (n \pi t) . $$
This series must equal the series for $F(t)$. We equate the coefficients and solve for $a_3$ and $b_n$:
$$ \begin{align*} & a_3 = \frac{4/(3\pi)}{-12\pi} = \frac{-1}{9\pi^2} , \\ & b_3 = 0 , \\ & b_n = \frac{4}{n\pi(18\pi^2 - 2n^2 \pi^2)} = \frac{2}{\pi^3 n(9 - n^2)} \qquad \text{for } n \text{ odd and } n \neq 3 . \end{align*} $$
That is,
$$ x_p(t) = \frac{-1}{9\pi^2} \, t \, \cos (3 \pi t) + \sum_{\substack{n=1 \\ n~\text{odd} \\ n \neq 3}}^\infty \frac{2}{\pi^3 n(9 - n^2)} \sin (n \pi t) . $$

:::

When $c > 0$, you do not have to worry about pure resonance. There are never any conflicts, and you do not need to multiply any terms by $t$. There is a corresponding concept of {index:practical resonance,} and it is very similar to the ideas we already explored in [chapter 2](ref:2#ho-chapter). Basically, what happens in practical resonance is that one of the coefficients in the series for $x_{sp}$ can get very big. Let us not go into details here.

## Exercises

:::exercise {exercise-4-5-002} number=4.5.2 answered=no src=ch-fourier-and-pde.tex:3279
PROBLEM:
Let $F(t) = \frac{1}{2} + \sum_{n=1}^\infty \frac{1}{n^2} \cos (n \pi t)$. Find the steady periodic solution to $x'' + 2 x = F(t)$. Express your solution as a Fourier series.
:::

:::exercise {exercise-4-5-003} number=4.5.3 answered=no src=ch-fourier-and-pde.tex:3286
PROBLEM:
Let $F(t) = \sum_{n=1}^\infty \frac{1}{n^3} \sin (n \pi t)$. Find the steady periodic solution to $x'' + x' + x = F(t)$. Express your solution as a Fourier series.
:::

:::exercise {exercise-4-5-004} number=4.5.4 answered=no src=ch-fourier-and-pde.tex:3292
PROBLEM:
Let $F(t) = \sum_{n=1}^\infty \frac{1}{n^2} \cos (n \pi t)$. Find the steady periodic solution to $x'' + 4 x = F(t)$. Express your solution as a Fourier series.
:::

:::exercise {exercise-4-5-005} number=4.5.5 answered=no src=ch-fourier-and-pde.tex:3298
PROBLEM:
Let $F(t) = t$ for $-1 < t < 1$ and extended periodically. Find the steady periodic solution to $x'' + x = F(t)$. Express your solution as a series.
:::

:::exercise {exercise-4-5-006} number=4.5.6 answered=no src=ch-fourier-and-pde.tex:3304
PROBLEM:
Let $F(t) = t$ for $-1 < t < 1$ and extended periodically. Find the steady periodic solution to $x'' + \pi^2 x = F(t)$. Express your solution as a series.
:::

:::exercise {exercise-4-5-101} number=4.5.101 answered=yes src=ch-fourier-and-pde.tex:3312
PROBLEM:
Let $F(t) = \sin(2\pi t) + 0.1 \cos(10 \pi t)$. Find the steady periodic solution to $x'' + \sqrt{2}\, x = F(t)$. Express your solution as a Fourier series.
SOLUTION:
$x = \frac{1}{\sqrt{2}-4 \pi^2} \sin(2\pi t) + \frac{0.1}{\sqrt{2}-100 \pi^2} \cos(10 \pi t)$
:::

:::exercise {exercise-4-5-102} number=4.5.102 answered=yes src=ch-fourier-and-pde.tex:3321
PROBLEM:
Let $F(t) = \sum_{n=1}^\infty e^{-n} \cos(2 n t)$. Find the steady periodic solution to $x'' + 3 x = F(t)$. Express your solution as a Fourier series.
SOLUTION:
$x = \sum\limits_{n=1}^\infty \frac{e^{-n}}{3-{(2n)}^2} \cos(2n t)$
:::

:::exercise {exercise-4-5-103} number=4.5.103 answered=yes src=ch-fourier-and-pde.tex:3332
PROBLEM:
Let $F(t) = \lvert t \rvert$ for $-1 \leq t \leq 1$ extended periodically. Find the steady periodic solution to $x'' + \sqrt{3}\, x = F(t)$. Express your solution as a series.
SOLUTION:
$x = \frac{1}{2\sqrt{3}} + \sum\limits_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{-4}{n^2 \pi^2 (\sqrt{3}-n^2 \pi^2)} \cos (n \pi t)$
:::

:::exercise {exercise-4-5-104} number=4.5.104 answered=yes src=ch-fourier-and-pde.tex:3344
PROBLEM:
Let $F(t) = \lvert t \rvert$ for $-1 \leq t \leq 1$ extended periodically. Find the steady periodic solution to $x'' + \pi^2 x = F(t)$. Express your solution as a series.
SOLUTION:
$x = \frac{1}{2\pi^2} - \frac{2}{\pi^3} t \sin(\pi t) + \sum\limits_{\substack{n=3 \\ n \text{ odd}}}^\infty \frac{-4}{n^2 \pi^4 (1-n^2)} \cos (n \pi t)$
:::

# 5.2 Higher-order eigenvalue problems {sec:sec-appeig}

:::note [section-notes]
*Note: 1 lecture, §10.2 in [EP](cite:EP), exercises in §11.2 in [BD](cite:BD)*
:::

The eigenfunction series can arise even from higher-order equations. Consider an elastic beam (say made of steel). We will study the *{index:transversal vibrations}* (vibrations where the beam “bends”) of the beam. Suppose the beam lies along the $x$-axis and let $y(x,t)$ measure the displacement of the point $x$ on the beam at time $t$. See [Figure 5.2](ref:appeig-transbeamfig).

> FIGURE {fig:appeig-transbeamfig} number=5.2 src=../../media/trans-beam.svg
> alt: Diagram of a rigid beam laid along the x-axis in the xy-plane with one end at the origin and the second end somewhere on the positive x-axis. The beam is bent upwards into the y direction indicating that the graph of y gives the shape of the bent beam.
> caption: Transversal vibrations of a beam.

The equation that governs this setup is
$$ a^4 \frac{\partial^4 y}{\partial x^4} + \frac{\partial^2 y}{\partial t^2} = 0, $$
for some constant $a > 0$. Let us not worry about the physics^[If you are interested, $a^4 = \frac{EI}{\rho}$, where $E$ is the elastic modulus, $I$ is the second moment of area of the cross section, and $\rho$ is linear density.].

Suppose the beam is of length 1 and simply supported (hinged) at the ends. The beam is displaced by some function $f(x)$ at time $t=0$ and then let go (initial velocity is 0). Then $y$ satisfies:
$$ \begin{aligned} & a^4 y_{xxxx} + y_{tt} = 0 \qquad (0 < x < 1, \enspace t > 0), \\ & y(0,t) = y_{xx}(0,t) = 0 , \\ & y(1,t) = y_{xx}(1,t) = 0 , \\ & y(x,0) = f(x), \qquad y_{t}(x,0) = 0 . \end{aligned} $$ {eq:appeig-beameq} number=5.5

Again we try $y(x,t) = X(x)T(t)$ and plug in to get $a^4 X^{(4)}T + XT'' = 0$ or
$$ \frac{X^{(4)}}{X} = \frac{- T''}{a^4T} = \lambda . $$
The equations are
$$ T'' + \lambda a^4 T = 0 \qquad \text{and} \qquad X^{(4)} - \lambda X = 0 . $$
The boundary conditions $y(0,t) = y_{xx}(0,t) = 0$ and $y(1,t) = y_{xx}(1,t) = 0$ imply
$$ X(0) = X''(0) = 0 \qquad \text{and} \qquad X(1) = X''(1) = 0 . $$
The initial homogeneous condition $y_t(x,0) = 0$ implies
$$ T'(0) = 0 . $$
As usual, we leave the nonhomogeneous $y(x,0) = f(x)$ for later.

Considering the equation for $T$, that is, $T'' + \lambda a^4 T = 0$, physical intuition leads us to the fact that if $\lambda$ is an eigenvalue then $\lambda > 0$: We expect vibration and not exponential growth or decay in the $t$ direction (there is no friction in our model for instance). So there are no negative eigenvalues. Similarly, $\lambda = 0$ is not an eigenvalue.

:::exercise {exercise-5-2-001} number=5.2.1 answered=no src=ch-eigenvalue-probs.tex:708
PROBLEM:
Justify $\lambda > 0$ just from the equation for $X$ and the boundary conditions.
:::

Let $\omega = \sqrt[4]{\lambda}$, that is, $\omega^4 = \lambda$, to avoid writing the fourth root all the time. Notice $\omega > 0$. The general solution to $X^{(4)} - \omega^4 X = 0$ is
$$ X(x) = A e^{\omega x} + B e^{-\omega x} + C \sin (\omega x) + D \cos (\omega x) . $$
Now $0 = X(0) = A+B+D$, $0 = X''(0) = \omega^2 (A + B - D)$. Solving, $D = 0$ and $B = -A$. So
$$ X(x) = A e^{\omega x} - A e^{-\omega x} + C \sin (\omega x) . $$
Also $0 = X(1) = A (e^{\omega} - e^{-\omega}) + C \sin \omega$, and $0 = X''(1) = A \omega^2 (e^{\omega} - e^{-\omega}) - C \omega^2 \sin \omega$. This means that $C \sin \omega = 0$ and $A (e^{\omega} - e^{-\omega}) = 2 A \sinh \omega = 0$. If $\omega > 0$, then $\sinh \omega \neq 0$ and so $A = 0$. Thus $C \neq 0$, otherwise $\lambda$ is not an eigenvalue. Also, $\omega$ must be an integer multiple of $\pi$. Hence $\omega = n \pi$ and $n \geq 1$ (as $\omega > 0$). We can take $C=1$. So the eigenvalues are $\lambda_n = n^4 \pi^4$, and corresponding eigenfunctions are $\sin (n \pi x)$.

Now $T'' + n^4 \pi^4 a^4 T = 0$. The general solution is $T(t) = A \sin (n^2 \pi^2 a^2 t) + B \cos (n^2 \pi^2 a^2 t)$. But $T'(0) = 0$ and hence $A=0$. We take $B=1$ to make $T(0) = 1$ for convenience. So our solutions are $T_n(t) = \cos (n^2 \pi^2 a^2 t)$.

The eigenfunctions are just the sines, so we decompose the function $f(x)$ using the sine series. That is, we find numbers $b_n$ such that for $0 < x < 1$,
$$ f(x) = \sum_{n=1}^\infty b_n \sin (n \pi x) . $$
Then the solution to [(5.5)](ref:appeig-beameq) is
$$ y(x,t) = \sum_{n=1}^\infty b_n X_n(x) T_n(t) = \sum_{n=1}^\infty b_n \sin (n \pi x) \cos ( n^2 \pi^2 a^2 t ) . $$
The point is that $X_nT_n$ is a solution that satisfies all the homogeneous conditions (all conditions except the initial position). And since $T_n(0) = 1$,
$$ y(x,0) = \sum_{n=1}^\infty b_n X_n(x) T_n(0) = \sum_{n=1}^\infty b_n X_n(x) = \sum_{n=1}^\infty b_n \sin (n \pi x) = f(x) . $$
So $y(x,t)$ solves [(5.5)](ref:appeig-beameq).

The natural (angular) frequencies of the system are $n^2 \pi^2 a^2$. These frequencies are all integer multiples of the fundamental frequency $\pi^2 a^2$, so we get a nice musical note. The exact frequencies and their amplitudes are what musicians call the *{index:timbre}* of the note (outside of music it is called the spectrum).

The timbre of a simply supported beam is different from that of a vibrating string, where we get “more” of the lower frequencies since we get all integer multiples, $1,2,3,4,5,\ldots$. For a simply supported beam, we get only the square multiples $1,4,9,16,25,\ldots$, and so we get something much closer to a pure sound. The sound of a xylophone or vibraphone is, therefore, very different from that of a guitar or piano.

:::example {ex:example-5-2-1} Example 5.2.1
Consider $f(x) = \frac{x(x-1)}{10}$. On $0 < x < 1$ (you know how to do this by now)
$$ f(x) = \sum_{\substack{n=1\\n \text{~odd}}}^\infty \frac{-4}{5\pi^3 n^3} \sin (n \pi x) . $$
Hence, the solution to [(5.5)](ref:appeig-beameq) with the given initial position $f(x)$ is
$$ y(x,t) = \sum_{\substack{n=1\\n \text{~odd}}}^\infty \frac{-4}{5\pi^3 n^3} \sin (n \pi x) \cos ( n^2 \pi^2 a^2 t ) . $$

:::

There are other boundary conditions than just hinged ends. There are three basic possibilities: hinged, free, or fixed. Consider the end at $x=0$. For the other end, it is the same idea. If the end is *hinged*{index-entry:hinged end of beam}, then
$$ y(0,t) = y_{xx}(0,t) = 0 . $$
If the end is *free*{index-entry:free end of beam}, that is, it is just floating in air, then
$$ y_{xx}(0,t) = y_{xxx}(0,t) = 0 . $$
And finally, if the end is *clamped*{index-entry:clamped end of beam} or *fixed*{index-entry:fixed end of beam}, for example it is welded to a wall, then
$$ y(0,t) = y_{x}(0,t) = 0 . $$

## Exercises

:::exercise {exercise-5-2-002} number=5.2.2 answered=no src=ch-eigenvalue-probs.tex:828
PROBLEM:
Suppose you have a beam of length 5 with free ends. Let $y$ be the transverse deviation of the beam at position $x$ on the beam ($0 < x < 5$). You know that the constants are such that this satisfies the equation $y_{tt} + 4 y_{xxxx} = 0$. Suppose you know that the initial shape of the beam is the graph of $x(5-x)$, and the initial velocity is uniformly equal to 2 (same for each $x$) in the positive $y$ direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.
:::

:::exercise {exercise-5-2-003} number=5.2.3 answered=no src=ch-eigenvalue-probs.tex:839
PROBLEM:
Suppose you have a beam of length 5 with one end free and one end fixed (the fixed end is at $x=5$). Let $u$ be the longitudinal deviation of the beam at position $x$ on the beam ($0 < x < 5$). You know that the constants are such that this satisfies the equation $u_{tt} = 4 u_{xx}$. Suppose you know that the initial displacement of the beam is $\frac{x-5}{50}$, and the initial velocity is $\frac{-(x-5)}{100}$ in the positive $u$ direction. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.
:::

:::exercise {exercise-5-2-004} number=5.2.4 answered=no src=ch-eigenvalue-probs.tex:852
PROBLEM:
Suppose the beam is $L$ units long, everything else kept the same as in [(5.5)](ref:appeig-beameq). What is the equation and the series solution?
:::

:::exercise {exercise-5-2-005} number=5.2.5 answered=no src=ch-eigenvalue-probs.tex:858
PROBLEM:
Suppose you have
$$ \begin{aligned} & a^4 y_{xxxx} + y_{tt} = 0 \quad (0 < x < 1, t > 0) , \\ & y(0,t) = y_{xx}(0,t) = 0,\\ & y(1,t) = y_{xx}(1,t) = 0 ,\\ & y(x,0) = f(x), \quad y_{t}(x,0) = g(x) . \end{aligned} $$
That is, you also have an initial velocity. Find a series solution. Hint: Use the same idea as we did for the wave equation.
:::

:::exercise {exercise-5-2-101} number=5.2.101 answered=yes src=ch-eigenvalue-probs.tex:874
PROBLEM:
Suppose you have a beam of length 1 with hinged ends. Let $y$ be the transverse deviation of the beam at position $x$ on the beam ($0 < x < 1$). You know that the constants are such that this satisfies the equation $y_{tt} + 4 y_{xxxx} = 0$. Suppose you know that the initial shape of the beam is the graph of $\sin (\pi x)$, and the initial velocity is 0. Solve for $y$.
SOLUTION:
$y(x,t) = \sin(\pi x) \cos (2 \pi^2 t)$
:::

:::exercise {exercise-5-2-102} number=5.2.102 answered=yes src=ch-eigenvalue-probs.tex:886
PROBLEM:
Suppose you have a beam of length 10 with two fixed ends. Let $y$ be the transverse deviation of the beam at position $x$ on the beam ($0 < x < 10$). You know that the constants are such that this satisfies the equation $y_{tt} + 9 y_{xxxx} = 0$. Suppose you know that the initial shape of the beam is the graph of $\sin^2(\pi x)$, and the initial velocity is equal to $x(10-x)$. Set up the equation together with the boundary and initial conditions. Just set up, do not solve.
SOLUTION:
$9 y_{xxxx} + y_{tt} = 0 \quad (0 < x < 10, t > 0)$, $y(0,t) = y_{x}(0,t) = 0$, $y(10,t) = y_{x}(10,t) = 0$, $y(x,0) = \sin^2(\pi x), \quad y_{t}(x,0) = x(10-x)$.
:::

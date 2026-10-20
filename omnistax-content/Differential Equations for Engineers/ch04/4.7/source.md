# 4.7 One-dimensional wave equation {sec:we-section}

:::note [section-notes]
*Note: 1 lecture, §9.6 in [EP](cite:EP), §10.7 in [BD](cite:BD)*
:::

Imagine a tensioned guitar string of length $L$ that can vibrate. We will only consider vibrations in one direction. Let $x$ denote the position along the string, let $t$ denote time, and let $y(x,t)$ denote the displacement of the string from the rest position. See [Figure 4.20](ref:we-vibstrfig).

> FIGURE {fig:we-vibstrfig} number=4.20 src=../../media/sps-vibstr.svg
> alt: Diagram of a string of a guitar (a shaded guitar is in the background). The bridge of the guitar is at x equals 0 on the x-axis and the nut of the guitar is at x equals L. The string is fixed to the x-axis at these two points. The string appears to be plucked in the middle upwards making a wide triangle. The vertical axis is labeled y, and an arrow indicates that y gives the displacement of the string at any particular x, that is, the graph of y is the shape of the string.
> caption: Vibrating string of length $L$, $x$ is position, $y$ is displacement.

The equation that governs this setup is the so-called *{index:one-dimensional wave equation}*{index-entry:wave equation}:
$$ \boxed{~~ y_{tt} = a^2 y_{xx} , ~~} $$
for some constant $a > 0$. The intuition is similar to the heat equation, replacing velocity with acceleration: The acceleration at a specific point is proportional to the second derivative of the shape of the string. In other words, when the string is concave down then $y_{xx}$ is negative and the string wants to accelerate downwards, so $y_{tt}$ should be negative. And vice versa. The wave equation is an example of a hyperbolic PDE.

We will again solve for $y$ in the region $0 < x < L$ and $t > 0$. Assume that the ends of the string are fixed in place as on the guitar:
$$ y(0,t) = 0 \quad \text{and} \quad y(L,t) = 0 \quad \text{for } \; t > 0. $$
We have two conditions along the $x$-axis as there are two derivatives in the $x$ direction. There are also two derivatives along the $t$ direction and hence we need two further conditions here. We need to know the initial position and the initial velocity of the string. That is, for some known functions $f(x)$ and $g(x)$, we impose
$$ y(x,0) = f(x) \quad \text{and} \quad y_t (x,0) = g(x) \quad \text{for } \; 0 < x < L . $$

The equation is linear and homogeneous, so superposition works just as it did for the heat equation. Superposition also preserves the homogeneous side conditions $y(0,t)=0$ and $y(L,t)=0$. Again, we will use separation of variables to find enough building-block solutions to get the particular solution also solving the nonhomogeneous initial conditions. There is one change. We will solve two separate problems and add their solutions.

The two problems we will solve are
$$ \begin{array}{ll} w_{tt} = a^2 w_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ w(0,t) = w(L,t) = 0 & \qquad \text{for } \; t > 0, \\ w(x,0) = 0 & \qquad \text{for } \; 0 < x < L , \\ w_t(x,0) = g(x) & \qquad \text{for } \; 0 < x < L , \end{array} $$ {eq:wave-weq} number=4.11
and
$$ \begin{array}{ll} z_{tt} = a^2 z_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ z(0,t) = z(L,t) = 0 & \qquad \text{for } \; t > 0, \\ z(x,0) = f(x) & \qquad \text{for } \; 0 < x < L , \\ z_t(x,0) = 0 & \qquad \text{for } \; 0 < x < L . \end{array} $$ {eq:wave-zeq} number=4.12

The principle of superposition implies that $y = w + z$ solves the wave equation and the homogeneous side conditions. Furthermore, $y(x,0) = w(x,0) + z(x,0) = f(x)$ and $y_t(x,0) = w_t(x,0) + z_t(x,0) = g(x)$. Hence, $y$ is a solution to
$$ \begin{array}{ll} y_{tt} = a^2 y_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ y(0,t) = y(L,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < L , \\ y_t(x,0) = g(x) & \qquad \text{for } \; 0 < x < L . \end{array} $$ {eq:wave-yeq} number=4.13

The reason for all this complexity is that superposition only works for homogeneous conditions such as $y(0,t) = y(L,t) = 0$, $y(x,0) = 0$, or $y_t(x,0) = 0$. Therefore, we can use separation of variables to find many building-block solutions solving all the homogeneous conditions. We can then use them to construct a solution satisfying the remaining nonhomogeneous condition.

Let us start with [(4.11)](ref:wave-weq). We try a solution of the form $w(x,t) = X(x) T(t)$ again. We plug into the wave equation to obtain
$$ X(x)T''(t) = a^2 X''(x) T(t) . $$
Rewriting, we get
$$ \frac{T''(t)}{a^2 T(t)} = \frac{X''(x)}{X(x)} . $$
Again, the left-hand side depends only on $t$ and the right-hand side depends only on $x$. So both sides equal a constant, which we denote by $-\lambda$:
$$ \frac{T''(t)}{a^2 T(t)} = -\lambda = \frac{X''(x)}{X(x)} . $$
We solve to get two ordinary differential equations
$$ \begin{align*} X''(x) + \lambda X(x) &= 0 , \\ T''(t) + \lambda a^2 T(t) &= 0 . \end{align*} $$
The condition $0 = w(0,t) = X(0) T(t)$ implies $X(0) = 0$ and $w(L,t) = 0$ implies that $X(L) = 0$. Therefore, the only nontrivial solutions for the first equation are when $\lambda = \lambda_n = \frac{n^2 \pi^2}{L^2}$ and they are
$$ X_n(x) = \sin \left( \frac{n \pi}{L} x \right) . $$
The general solution for $T$ for this particular $\lambda_n$ is
$$ T_n(t) = A \cos \left( \frac{n \pi a}{L} t \right) + B \sin \left( \frac{n \pi a}{L} t \right). $$
We also have the condition that $w(x,0) = 0$ or $X(x)T(0) = 0$. This implies that $T(0) = 0$, which in turn forces $A = 0$. It is convenient to pick $B=\frac{L}{n \pi a}$ (you will see why in a moment) and hence
$$ T_n(t) = \frac{L}{n \pi a} \sin \left( \frac{n \pi a}{L} t \right). $$
Our building-block solutions are
$$ w_n(x,t) = \frac{L}{n \pi a} \sin \left( \frac{n \pi}{L} x \right) \sin \left( \frac{n \pi a}{L} t \right) . $$
We differentiate in $t$:
$$ \frac{\partial w_n}{\partial t}(x,t) = \sin \left( \frac{n \pi}{L} x \right) \cos \left( \frac{n \pi a}{L} t \right) . $$
Hence,
$$ \frac{\partial w_n}{\partial t}(x,0) = \sin \left( \frac{n \pi}{L} x \right) . $$
We expand $g(x)$ in terms of these sines as
$$ g(x) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} x \right) . $$
Using superposition we write the solution to [(4.11)](ref:wave-weq) as a series
$$ w(x,t) = \sum_{n=1}^\infty b_n w_n(x,t) = \sum_{n=1}^\infty b_n \frac{L}{n \pi a} \sin \left( \frac{n \pi}{L} x \right) \sin \left( \frac{n \pi a}{L} t \right) . $$

:::exercise {exercise-4-7-001} number=4.7.1 answered=no src=ch-fourier-and-pde.tex:4383
PROBLEM:
Check that $w(x,0) = 0$ and $w_t(x,0) = g(x)$.
:::

We solve [(4.12)](ref:wave-zeq) similarly. We again try $z(x,t) = X(x)T(t)$. The procedure works exactly the same at first. We obtain
$$ \begin{align*} X''(x) + \lambda X(x) &= 0 , \\ T''(t) + \lambda a^2 T(t) &= 0 , \end{align*} $$
and the conditions $X(0) = 0$, $X(L) = 0$. Again, $\lambda = \lambda_n = \frac{n^2 \pi^2}{L^2}$ and
$$ X_n(x) = \sin \left( \frac{n \pi}{L} x \right) . $$
This time, the condition on $T$ is $T'(0) = 0$. Thus we get that $B = 0$, and we take
$$ T_n(t) = \cos \left( \frac{n \pi a}{L} t \right). $$
Our building-block solution is
$$ z_n(x,t) = \sin \left( \frac{n \pi}{L} x \right) \cos \left( \frac{n \pi a}{L} t \right) . $$
As $z_n(x,0) = \sin \left( \frac{n \pi}{L} x \right)$, we expand $f(x)$ in terms of these sines as
$$ f(x) = \sum_{n=1}^\infty c_n \sin \left( \frac{n \pi}{L} x \right) . $$
We write down the solution to [(4.12)](ref:wave-zeq) as a series
$$ z(x,t) = \sum_{n=1}^\infty c_n z_n(x,t) = \sum_{n=1}^\infty c_n \sin \left( \frac{n \pi}{L} x \right) \cos \left( \frac{n \pi a}{L} t \right) . $$

:::exercise {exercise-4-7-002} number=4.7.2 answered=no src=ch-fourier-and-pde.tex:4432
PROBLEM:
Fill in the details in the derivation of the solution of [(4.12)](ref:wave-zeq). Check that the solution satisfies all the side conditions.
:::

Putting these two solutions together, let us state the result as a theorem.

:::theorem {thm:theorem-4-7-1} Theorem 4.7.1
Take the problem
$$ \begin{array}{ll} y_{tt} = a^2 y_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ y(0,t) = y(L,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < L , \\ y_t(x,0) = g(x) & \qquad \text{for } \; 0 < x < L , \end{array} $$ {eq:wave-tyeq} number=4.14
where
$$ f(x) = \sum_{n=1}^\infty c_n \sin \left( \frac{n \pi}{L} x \right) \qquad \text{and} \qquad g(x) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} x \right) . $$
Then the solution $y(x,t)$ can be written as a sum of the solutions of [(4.11)](ref:wave-weq) and [(4.12)](ref:wave-zeq):
$$ \boxed{~~ \begin{aligned} y(x,t) & = \sum_{n=1}^\infty \left[ b_n \frac{L}{n \pi a} \sin \left( \frac{n \pi}{L} x \right) \sin \left( \frac{n \pi a}{L} t \right) + c_n \sin \left( \frac{n \pi}{L} x \right) \cos \left( \frac{n \pi a}{L} t \right) \right] \\ & = \sum_{n=1}^\infty \sin \left( \frac{n \pi}{L} x \right) \left[ b_n \frac{L}{n \pi a} \sin \left( \frac{n \pi a}{L} t \right) + c_n \cos \left( \frac{n \pi a}{L} t \right) \right] . \end{aligned} ~~} $$

:::

:::example {ex:example-pluckedstring} Example 4.7.1
Consider a string of length 2 plucked in the middle. It has an initial shape given in [Figure 4.21](ref:wave-pluckedstrfig). That is,
$$ f(x) = \begin{cases} 0.1\, x & \text{if } \; 0 \leq x \leq 1 , \\ 0.1\, (2-x) & \text{if } \; 1 < x \leq 2 . \end{cases} $$

> FIGURE {fig:wave-pluckedstrfig} number=4.21 src=../../media/wave-pluckedstr.svg
> alt: A graph of a function on the xy-plane which is composed of two straight segments, the first segment starting at x equals 0 on the x-axis, then reaching a maximum of 0.1 in the middle, then the second segment going back down to the x-axis at x equals 2.
> caption: Initial shape of a plucked string from [Example 4.7.1](ref:example-pluckedstring).

Let the string start at rest ($g(x) = 0$), and let $a=1$ for simplicity. In other words, we wish to solve the problem:
$$ \begin{array}{ll} y_{tt} = y_{xx} & \qquad \text{for } \; 0 < x < 2 \text{ and } t > 0, \\ y(0,t) = y(2,t)= 0 & \qquad \text{for } \; t > 0 , \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < 2 , \\ y_t(x,0)= 0 & \qquad \text{for } \; 0 < x < 2. \end{array} $$

We leave the details of computing the sine series of $f(x)$ to the reader. The series is
$$ f(x) = \sum_{n=1}^\infty \frac{0.8}{n^2 \pi^2} \sin \left( \frac{n \pi}{2} \right) \sin \left( \frac{n \pi}{2} x \right) . $$
Note that $\sin \left( \frac{n \pi}{2} \right)$ is the sequence $1, 0, -1, 0, 1, 0, -1, \ldots$ for $n = 1,2,3,4,\ldots$. Therefore,
$$ f(x) = \frac{0.8}{\pi^2} \sin \left( \frac{\pi}{2} x \right) - \frac{0.8}{9 \pi^2} \sin \left( \frac{3 \pi}{2} x \right) + \frac{0.8}{25 \pi^2} \sin \left( \frac{5 \pi}{2} x \right) - \cdots $$
The solution $y(x,t)$ is given by
$$ \begin{split} y(x,t) & = \sum_{n=1}^\infty \frac{0.8}{n^2 \pi^2} \sin \left( \frac{n \pi}{2} \right) \sin \left( \frac{n \pi}{2} x \right) \cos \left( \frac{n \pi}{2} t \right) \\ & = \sum_{m=1}^\infty \frac{0.8 {(-1)}^{m+1}}{{(2m-1)}^2 \pi^2} \sin \left( \frac{(2m-1) \pi}{2} x \right) \cos \left( \frac{(2m-1) \pi}{2} t \right) \\ & = \frac{0.8}{\pi^2} \sin \left( \frac{\pi}{2} x \right) \cos \left( \frac{\pi}{2} t \right) - \frac{0.8}{9 \pi^2} \sin \left( \frac{3 \pi}{2} x \right) \cos \left( \frac{3 \pi}{2} t \right) \\ & \hspace{15em} + \frac{0.8}{25 \pi^2} \sin \left( \frac{5 \pi}{2} x \right) \cos \left( \frac{5 \pi}{2} t \right) - \cdots \end{split} $$

See [Figure 4.22](ref:wave-pluckedexfig) for a plot for $0 < t < 3$. Notice that unlike the heat equation, the solution does not become “smoother,” the “sharp edges” remain. We will see the reason for this behavior in the next section where we derive the solution to the wave equation in a different way.

> FIGURE {fig:wave-pluckedexfig} number=4.22 src=../../media/wave-pluckedex.svg
> alt: A plot of the graph of a function y of (x,t) over the xt-plane over the region where x is between 0 and 2 and t is between 0 and 3. At t equals 0, the function is an upward triangle reaching 0.1 in the middle. The surface is 0 on the sides where x equals 0 or x equals 1. The surface looks like half an upwards pyramid that ends at t equals 1 and then there is an inverted downward pyramid that reaches down to minus 0.1 for t between 1 and 3.
> width: 7.5in
> caption: Shape of the plucked string for $0 < t < 3$.

Make sure you understand what the plot, such as the one in the figure, is telling you. For each fixed $t$, you can think of the function $y(x,t)$ as just a function of $x$. This function gives you the shape of the string at time $t$. See [Figure 4.23](ref:wave-pluckedtsfig) for plots of $y$ as a function of $x$ at several different values of $t$. On these plots, you can see the sharp edges remaining much better.

> FIGURE {fig:wave-pluckedtsfig} number=4.23
> subfigure src=../../media/wave-plucked-t0-t0p4.svg alt: Two graphs of the shape of a plucked string in the xy-plane, where x is between 0 and 2. On the left is the initial shape at t equals 0, which is an upward triangle with ends at 0 and the top vertex in the middle at 0.1. On the right is the shape at t equals 0.4, which starts the same as the initial shape but now the triangle is cut at the top, so it is a line that goes up at the same slope as before, then a horizontal segment, and then a line that goes back down to 0 at the same slope as before.
> subfigure src=../../media/wave-plucked-t0p8-t1p2.svg alt: Two graphs of the shape of a plucked string in the xy-plane, where x is between 0 and 2. On the left is the shape at t equals 0.8, which similar to the one at t equals 0.4 above, but now the horizontal segment at the top is longer and comes earlier. On the right is the shape at t equals 1.2, which is an inverted version of the shape t equals 0.8 on the left, that is, the slanted lines now go below the x-axis.
> caption: Plucked string for $t=0$, $t=0.4$, $t=0.8$, and $t=1.2$.

:::

One thing to take away from all this is how a guitar sounds. Notice that the (angular) frequencies that come up in the solution are $n \frac{\pi a}{L}$. That is, there is a certain base *{index:fundamental frequency}* $\frac{\pi a}{L}$, and then we also get all the multiples of this frequency, which in music are called the *{index:overtones}*. Which overtones appear and with what amplitude is what musicians call the *{index:timbre}* of the note. Mathematicians usually call this the *{index:spectrum}*. Because all the frequencies are multiples of one frequency (the fundamental), we get a nice pleasing sound.

The fundamental frequency $\frac{\pi a}{L}$ increases as we decrease length $L$. That is, if we place a finger on the fingerboard and then pluck a string we get a higher note. The constant $a$ is given by
$$ a = \sqrt{\frac{T}{\rho}} , $$
where $T$ is tension and $\rho$ is the linear density of the string. Tightening the string (turning the tuning peg on a guitar) increases $a$ and hence produces a higher fundamental frequency (a higher note). On the other hand, using a heavier string reduces $a$ and produces a lower fundamental frequency (a lower note). A bass guitar has longer thicker strings, while a ukulele has short strings made of lighter material.

Something rather interesting is the almost-symmetry between space and time. In its simplest form, we see this symmetry in the solutions
$$ \sin \left( \frac{n \pi}{L} x \right) \sin \left( \frac{n \pi a}{L} t \right) . $$
Except for the constant $a$, this solution looks the same if we flip time and space. In general, the solution for a fixed $x$ is a Fourier series in $t$, for a fixed $t$ it is a Fourier series in $x$, and the coefficients are related. If the shape $f(x)$ or the initial velocity $g(x)$ has lots of corners, then the sound wave will have lots of corners. That is because the Fourier coefficients of the initial shape decay to zero (as $n \to \infty$) at the same rate as the Fourier coefficients of the wave in time (for some fixed $x$). So if you use a sharp object to pluck the string, you get a sharper sound with lots of high-frequency components, while if you use your thumb, you get a softer sound without so many high overtones. Similarly, if you pluck close to the bridge (close to one end of the string), you are getting a pluck that looks more like the sawtooth, and you get an even sharper sound.

In fact, if you look at the formula for the solution, you see that for any fixed $x$, we get an almost arbitrary Fourier series in $t$, everything except the constant term. In theory, you can obtain any timbre you want by plucking the string in just the right way. Of course, we are considering an ideal string of no stiffness and no air resistance. Those variables clearly impact the sound as well.

## Exercises

:::exercise {exercise-4-7-003} number=4.7.3 answered=no src=ch-fourier-and-pde.tex:4697
PROBLEM:
Solve
$$ \begin{array}{ll} y_{tt} = 9 y_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ y(0,t) = y(1,t) = 0 & \qquad \text{for } \; t > 0 , \\ y(x,0) = \sin (3\pi x) + \frac{1}{4} \sin (6 \pi x) & \qquad \text{for } \; 0 < x < 1 , \\ y_t(x,0) = 0 & \qquad \text{for } \; 0 < x < 1 . \end{array} $$

:::

:::exercise {exercise-4-7-004} number=4.7.4 answered=no src=ch-fourier-and-pde.tex:4709
PROBLEM:
Solve
$$ \begin{array}{ll} y_{tt} = 4 y_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ y(0,t) = y(1,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = \sin (3\pi x) + \frac{1}{4} \sin (6 \pi x) & \qquad \text{for } \; 0 < x < 1 , \\ y_t(x,0) = \sin (9 \pi x) & \qquad \text{for } \; 0 < x < 1 . \end{array} $$

:::

:::exercise {exercise-4-7-005} number=4.7.5 answered=no src=ch-fourier-and-pde.tex:4721
PROBLEM:
Derive the solution for a general plucked string of length $L$ and any constant $a$ (in the equation $y_{tt} = a^2 y_{xx}$), where we raise the string some distance $b$ at the midpoint and let go.
:::

:::exercise {exercise-4-7-006} number=4.7.6 answered=no src=ch-fourier-and-pde.tex:4728
PROBLEM:
Imagine that a stringed musical instrument fell on the floor. Suppose that the length of the string is 1 and $a=1$. When the musical instrument hit the ground, the string was in rest position and hence $y(x,0) = 0$. However, the string was moving at some velocity at impact ($t=0$), say $y_t(x,0) = -1$. Find the solution $y(x,t)$ for the shape of the string at time $t$.
:::

:::exercise {exercise-4-7-007} number=4.7.7 answered=no src=ch-fourier-and-pde.tex:4738
PROBLEM:
**challenging**
Suppose that you have a vibrating string and that there is air resistance proportional to the velocity. That is, you have
$$ \begin{array}{ll} y_{tt} = a^2 y_{xx} - k y_t & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ y(0,t) = y(1,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < 1 , \\ y_t(x,0) = 0 & \qquad \text{for } \; 0 < x < 1 . \end{array} $$
Suppose that $0 < k < 2 \pi a$. Derive a series solution to the problem. Any coefficients in the series should be expressed as integrals of $f(x)$.
:::

:::exercise {exercise-4-7-008} number=4.7.8 answered=no src=ch-fourier-and-pde.tex:4755
PROBLEM:
Suppose you touch the guitar string exactly in the middle to ensure another condition $y({L}/{2},t) = 0$ for all time. Which multiples of the fundamental frequency $\frac{\pi a}{L}$ show up in the solution?
:::

:::exercise {exercise-4-7-101} number=4.7.101 answered=yes src=ch-fourier-and-pde.tex:4764
PROBLEM:
Solve
$$ \begin{array}{ll} y_{tt} = y_{xx} & \qquad \text{for } \; 0 < x < \pi, t > 0, \\ y(0,t) = y(\pi,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = \sin(x) & \qquad \text{for } \; 0 < x < \pi , \\ y_t(x,0) = \sin(x) & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

SOLUTION:
$y(x,t) = \sin(x) \bigl(\sin(t) + \cos(t)\bigr)$
:::

:::exercise {exercise-4-7-102} number=4.7.102 answered=yes src=ch-fourier-and-pde.tex:4784
PROBLEM:
Solve
$$ \begin{array}{ll} y_{tt} = 25 y_{xx} & \qquad \text{for } \; 0 < x < 2 \text{ and } t > 0, \\ y(0,t) = y(2,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = 0 & \qquad \text{for } \; 0 < x < 2 , \\ y_t(x,0) = \sin(\pi x) + 0.1 \sin(2\pi x) & \qquad \text{for } \; 0 < x < 2 . \end{array} $$

SOLUTION:
$y(x,t) = \frac{1}{5 \pi} \sin (\pi x) \sin (5 \pi t) + \frac{1}{100 \pi} \sin(2\pi x) \sin(10\pi t)$
:::

:::exercise {exercise-4-7-103} number=4.7.103 answered=yes src=ch-fourier-and-pde.tex:4820
PROBLEM:
Solve
$$ \begin{array}{ll} y_{tt} = 2 y_{xx} & \qquad \text{for } \; 0 < x < \pi \text{ and } t > 0, \\ y(0,t) = y(\pi,t) = 0 & \qquad \text{for } \; t > 0 , \\ y(x,0) = x & \qquad \text{for } \; 0 < x < \pi , \\ y_t(x,0) = 0 & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

SOLUTION:
$y(x,t) = \sum\limits_{n=1}^\infty \frac{2{(-1)}^{n+1}}{n} \sin(nx) \cos( n \sqrt{2}\,t )$
:::

:::exercise {exercise-4-7-104} number=4.7.104 answered=yes src=ch-fourier-and-pde.tex:4855
PROBLEM:
What happens when $a=0$? Find a solution to $y_{tt} = 0$, $y(0,t) = y(\pi,t) = 0$, $y(x,0) = \sin(2x)$, $y_t(x,0) = \sin(x)$.
SOLUTION:
$y(x,t) = \sin(2x)+t\sin(x)$
:::

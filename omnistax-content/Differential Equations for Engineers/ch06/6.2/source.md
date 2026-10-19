# 6.2 Transforms of derivatives and ODEs {sec:transformsofders-section}

:::note [section-notes]
*Note: 2 lectures, §7.2–7.3 in [EP](cite:EP), §6.2 and §6.3 in [BD](cite:BD)*
:::

## Transforms of derivatives

Let us see how the Laplace transform is used for differential equations. First we find the Laplace transform of the derivative of a function. Suppose $g(t)$ is a differentiable function of exponential order, that is, $\lvert g(t) \rvert \leq M e^{ct}$ for some $M$ and $c$. So $\mathcal{L} \bigl\{ g(t) \bigr\}$ exists, and what is more, $\lim_{t\to\infty} e^{-st}g(t) = 0$ when $s > c$. Then
$$ \mathcal{L} \bigl\{ g'(t) \bigr\} = \int_0^\infty e^{-st} g'(t) \,dt = \Bigl[e^{-st} g(t) \Bigr]_{t=0}^\infty - \int_0^\infty (-s)\, e^{-st} g(t) \,dt = -g(0) + s \mathcal{L} \bigl\{ g(t) \bigr\} . $$
We repeat this procedure for higher derivatives. The results are listed in [Table 6.2](ref:ltd-table). The procedure also works for continuous piecewise smooth functions, that is, functions that are continuous with a piecewise continuous derivative.

> TABLE {tab:ltd-table} number=6.2 cols=2
> caption: Laplace transforms of derivatives ($G(s) = \mathcal{L} \bigl\{ g(t) \bigr\}$ as usual).
| $f(t)$ | $\mathcal{L} \bigl\{ f(t) \bigr\} = F(s)$ |
| --- | --- |
| $g'(t)$ | $sG(s)-g(0)$ |
| $g''(t)$ | $s^2G(s)-sg(0)-g'(0)$ |
| $g'''(t)$ | $s^3G(s)-s^2g(0)-sg'(0)-g''(0)$ |

:::exercise {exercise-6-2-001} number=6.2.1 answered=no src=ch-laplace.tex:644
PROBLEM:
Verify [Table 6.2](ref:ltd-table).
:::

## Solving ODEs with the Laplace transform

Notice that the Laplace transform turns differentiation into multiplication by $s$. It is this property that makes it useful to apply the transform to differential equations.

:::example {ex:example-6-2-1} Example 6.2.1
Consider the problem
$$ x''(t) + x(t) = \cos (2t), \quad x(0) = 0, \quad x'(0) = 1 . $$
We will take the Laplace transform of both sides of the equation. By $X(s)$, we will, as usual, denote the Laplace transform of $x(t)$.
$$ \begin{align*} \mathcal{L} \bigl\{ x''(t) + x(t) \bigr\} & = \mathcal{L} \bigl\{ \cos (2t) \bigr\} , \\ s^2 X(s) -sx(0)-x'(0) + X(s) & = \frac{s}{s^2 + 4} . \end{align*} $$
We plug in the initial conditions now—making computations more streamlined—to find
$$ s^2 X(s) -1 + X(s) = \frac{s}{s^2 + 4} . $$
We solve for $X(s)$,
$$ X(s) = \frac{s}{(s^2+1)(s^2 + 4)} + \frac{1}{s^2+1} . $$
We use partial fractions (exercise) to write
$$ X(s) =\frac{1}{3} \, \frac{s}{s^2+1} - \frac{1}{3}\, \frac{s}{s^2+4} + \frac{1}{s^2+1} . $$
Now take the inverse Laplace transform to obtain
$$ x(t) =\frac{1}{3} \cos (t) - \frac{1}{3} \cos (2t) + \sin (t) . $$

:::

The procedure for linear constant-coefficient equations is as follows: Take an ordinary differential equation in the time variable $t$. Apply the Laplace transform to transform the equation into an algebraic (non differential) equation in the frequency domain. All the $x(t)$, $x'(t)$, $x''(t)$, and so on, will be converted to $X(s)$, $sX(s) - x(0)$, $s^2X(s) - sx(0) - x'(0)$, and so on. Solve the equation for $X(s)$. Then taking the inverse transform, if possible, find $x(t)$.

It should be noted that since not every function has a Laplace transform, not every equation can be solved in this manner. Also if the equation is not a linear constant-coefficient ODE, then applying the Laplace transform may not give us an algebraic equation.

## Using the Heaviside function

Before we move on to more general equations than those we could solve before, we want to consider the Heaviside function. See [Figure 6.1](ref:lt-heavisidefig) for the graph.
$$ u(t) = \begin{cases} 0 & \text{if } \; t < 0 , \\ 1 & \text{if } \; t \geq 0 . \end{cases} $$

> FIGURE {fig:lt-heavisidefig} number=6.1 src=../../media/lt-heaviside.svg
> alt: A plot of the unit step function on the interval from minus 1 to 1. The function is zero for negative t and 1 for positive t.
> width: 4.5in
> caption: Plot of the Heaviside (unit step) function $u(t)$.

The Heaviside function is useful for putting other functions together or cutting functions off. Usually we use $u(t-a)$ for some constant $a$; we just shift the graph to the right by $a$. That is, $u(t-a) = 0$ when $t < a$ and $u(t-a) = 1$ when $t \geq a$. For example, suppose $f(t)$ is a “signal”, and we started receiving $\sin t$ at time $t=\pi$. The function $f(t)$ is then defined as
$$ f(t) = \begin{cases} 0 & \text{if } \; t < \pi , \\ \sin t & \text{if } \; t \geq \pi . \end{cases} $$
Using the Heaviside function, $f(t)$ can be written as
$$ f(t) = u(t - \pi) \, \sin t . $$
Similarly, the step function that is $1$ on the interval $[1,2)$ and $0$ elsewhere is written as
$$ u(t - 1) - u(t-2) . $$
With the Heaviside function we can express functions defined piecewise. If $f(t) = t$ when $t$ is in $[0,1]$, $f(t) = -t+2$ when $t$ is in $[1,2]$, and $f(t) = 0$ otherwise, then you write
$$ f(t) = t \, \bigl( u(t) - u(t-1) \bigr) + (-t+2) \, \bigl( u(t - 1) - u(t-2) \bigr) . $$

How does the Heaviside function interact with the Laplace transform? We saw that (for $a \geq 0$)
$$ \mathcal{L} \bigl\{ u(t-a) \bigr\} = \frac{e^{-as}}{s} . $$
This computation can be generalized into a *{index:shifting property}* or *{index:second shifting property}*:
$$ \boxed{~~ \mathcal{L} \bigl\{ f(t-a) \, u(t-a) \bigr\} = e^{-as} \mathcal{L} \bigl\{ f(t) \bigr\} \qquad (a \geq 0). ~~} $$ {eq:ltd-sseq} number=6.1
For example,
$$ \mathcal{L} \bigl\{ t \, u(t-1) \bigr\} = \mathcal{L} \bigl\{ \bigl( (t-1) + 1\bigr) \, u(t-1) \bigr\} = e^{-s} \mathcal{L} \bigl\{ t+1 \bigr\} = e^{-s} \left(\frac{1}{s^2} + \frac{1}{s} \right) . $$

:::example {ex:lt-rocketex} Example 6.2.2
Consider the mass-spring system
$$ x''(t) + x(t) = f(t) , \quad x(0) = 0, \quad x'(0) = 0, $$
where $f(t) = 1$ if $1 \leq t < 5$ and zero otherwise. The function $f(t)$ is not periodic and is defined piecewise; no problem for Laplace. Imagine a rocket attached to the mass is fired for 4 seconds starting at $t=1$. Or perhaps imagine an RLC circuit, where the voltage is raised at a constant rate for 4 seconds starting at $t=1$ and then held steady again starting at $t=5$ (recall that $f(t)$ represents the derivative of the voltage in the RLC circuit).

[2] We write $f(t) = u(t-1) - u(t-5)$. We transform the equation and we plug in the initial conditions as before
$$ s^2 X(s) + X(s) = \frac{e^{-s}}{s} - \frac{e^{-5s}}{s} . $$
We solve for $X(s)$,
$$ X(s) = \frac{e^{-s}}{s(s^2+1)} - \frac{e^{-5s}}{s(s^2+1)} . $$
We leave it as an exercise to the reader to show that
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s(s^2+1)} \right\} = 1 - \cos t . $$
In other words, $\mathcal{L} \{ 1 - \cos t \} = \frac{1}{s(s^2+1)}$. Using the second shifting property [(6.1)](ref:ltd-sseq), we find
$$ {\mathcal{L}}^{-1} \left\{ \frac{e^{-s}}{s(s^2+1)} \right\} = {\mathcal{L}}^{-1} \bigl\{ e^{-s} \mathcal{L} \{ 1 - \cos t \} \bigr\} = \bigl( 1 - \cos (t-1) \bigr) \, u(t-1) . $$
Similarly,
$$ {\mathcal{L}}^{-1} \left\{ \frac{e^{-5s}}{s(s^2+1)} \right\} = {\mathcal{L}}^{-1} \bigl\{ e^{-5s} \mathcal{L} \{ 1 - \cos t \} \bigr\} = \bigl( 1 - \cos (t-5) \bigr) \, u(t-5) . $$
Hence, the solution is
$$ x(t) = \bigl( 1 - \cos (t-1) \bigr) \, u(t-1) - \bigl( 1 - \cos (t-5) \bigr) \, u(t-5) . $$
The plot of this solution is given in [Figure 6.2](ref:lt-heavisideexfig).

> FIGURE {fig:lt-heavisideexfig} number=6.2 src=../../media/lt-heavisideex.svg
> alt: A plot of a function for t equals 0 to 20. The function starts at zero and stays at zero until t equals 1 when it curves upwards and follows a slightly deformed sinusoid curve before settling into a regular sinusoid curve past t equals 5.
> width: 4.5in
> caption: Plot of $x(t)$.

:::

## Transfer functions

The Laplace transform leads to the following useful concept for studying the steady-state behavior of a linear system. Consider an equation of the form
$$ L x = f(t) , $$
where $L$ is a linear constant-coefficient differential operator. Then $f(t)$ is usually thought of as the input of the system and $x(t)$ is thought of as the output of the system. For example, for a mass-spring system the input is the forcing function and the output is the behavior of the mass. We would like to have a convenient way to study the behavior of the system for different inputs.

Let us suppose that all the initial conditions are zero. We take the Laplace transform of the equation to obtain, for some $A(s)$,
$$ A(s) X(s) = F(s) . $$
Solving for the ratio ${X(s)}/{F(s)}$ gives the so-called *{index:transfer function}* $H(s) = {1}/{A(s)}$, that is,
$$ H(s) = \frac{X(s)}{F(s)} . $$
In other words, $X(s) = H(s) F(s)$. We get an algebraic dependence of the output of the system based on the input. We can now easily study the steady-state behavior of the system given different inputs by simply multiplying by the transfer function. Moreover, it is possible to compute the $H(s)$ without knowing exactly what the equation is by observing the output $X(s)$ for a given input $F(s)$. Once $H(s)$ is known, you can find the output for any input.

:::example {ex:example-6-2-3} Example 6.2.3
Given $x'' + \omega_0^2 x = f(t)$ (assume the initial conditions are zero), let us find the transfer function.

First, we take the Laplace transform of the equation,
$$ s^2 X(s) + \omega_0^2 X(s) = F(s) . $$
Now we solve for the transfer function ${X(s)}/{F(s)}$,
$$ H(s) = \frac{X(s)}{F(s)} = \frac{1}{s^2 + \omega_0^2} . $$

Let us see how to use the transfer function. Suppose we have the constant input $f(t) = 1$. Hence $F(s) = {1}/{s}$, and
$$ X(s) = H(s) F(s) = \frac{1}{s^2+\omega_0^2} \, \frac{1}{s} . $$
Taking the inverse Laplace transform of $X(s)$, we obtain
$$ x(t) = \frac{1-\cos(\omega_0 t)}{\omega_0^2} . $$
Similarly, for any other input $F(s)$, the output is $X(s) = H(s) F(s) = \frac{1}{s^2+\omega_0^2} \, F(s)$.
:::

## Transforms of integrals

A feature of the Laplace transform is that it is able to deal with integral equations. These are equations in which integrals rather than derivatives of functions appear. The basic property, which can be proved by applying the definition and doing integration by parts, is
$$ \boxed{~~ \mathcal{L} \left\{ \int_0^t f(\tau) \, d\tau \right\} = \frac{1}{s} \, F(s) . ~~} $$
It is sometimes useful (e.g. for computing the inverse transform) to write this as
$$ \int_0^t f(\tau) \, d\tau = {\mathcal{L}}^{-1} \left\{ \frac{1}{s} \, F(s) \right\} . $$

:::example {ex:example-6-2-4} Example 6.2.4
To compute ${\mathcal{L}}^{-1} \left\{\frac{1}{s(s^2+1)}\right\}$, we could apply this integration rule:
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s} \, \frac{1}{s^2+1} \right\} = \int_0^t {\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+1} \right\} \, d\tau = \int_0^t \sin \tau \, d\tau = 1 - \cos t . $$

:::

:::example {ex:example-6-2-5} Example 6.2.5
An equation containing an integral of the unknown function is called an *{index:integral equation}*. Consider
$$ x(t) - t = \int_0^t x(\tau) \, d\tau , $$
where we wish to solve for $x(t)$. We apply the Laplace transform to get
$$ X(s) - \frac{1}{s^2} = \frac{1}{s} X(s) , $$
where $X(s) = \mathcal{L} \bigl\{ x(t) \bigr\}$. Thus
$$ X(s) = \frac{1}{s(s-1)} = \frac{1}{s-1} - \frac{1}{s} . $$
The inverse Laplace transform gives
$$ x(t) = e^t - 1 . $$

:::

## Periodic functions

The reader might ask: What about periodic functions as our input $f(t)$? That is, a function $f(t)$ where $f(t) = f(t+P)$ for some constant $P$ (the period). Well, let us compute $F(s)$:
$$ \begin{split} F(s) & = \int_0^\infty e^{-st} f(t) \, dt \\ & = \int_0^P e^{-st} f(t) \, dt + \int_P^\infty e^{-st} f(t) \, dt \\ & = \int_0^P e^{-st} f(t) \, dt + \int_0^\infty e^{-s(t+P)} f(t+P) \, dt \\ & = \int_0^P e^{-st} f(t) \, dt + e^{-Ps} \int_0^\infty e^{-st} f(t) \, dt \\ & = \int_0^P e^{-st} f(t) \, dt + e^{-Ps} F(s) . \end{split} $$
Solving for $F(s)$, we get
$$ F(s) = \frac{1}{1-e^{-Ps}} \int_0^P e^{-st} f(t) \, dt . $$
As before, computing the inverse would be more complex and possibly involve consulting a table. Let us not worry about computing the inverse here.

:::example {ex:example-6-2-6} Example 6.2.6
Suppose $f(t)$ is a version of the *{index:sawtooth}*, that is, let $f(t) = t$ for $0 \leq t < 1$ and use $f(t)=f(t+1)$ to extend it periodically. So $f(t) = t-1$ for $1 \leq t < 2$, $f(t) = t-2$ for $2 \leq t < 3$, etc. Then $P=1$ and a short computation with integration by parts gets
$$ F(s) = \frac{1}{1-e^{-s}} \int_0^1 e^{-st} t \, dt = \frac{1}{1-e^{-s}} \left( \frac{-e^{-s}}{s}-\frac{e^{-s}}{s^2} + \frac{1}{s^2} \right) = \frac{-e^{-s}}{(1-e^{-s})s} + \frac{1}{s^2} . $$

:::

## Exercises

:::exercise {exercise-6-2-002} number=6.2.2 answered=no src=ch-laplace.tex:1046
PROBLEM:
Using the Heaviside function write down the piecewise function that is 0 for $t < 0$, $t^2$ for $t$ in $[0,1]$ and $t$ for $t > 1$.
:::

:::exercise {exercise-6-2-003} number=6.2.3 answered=no src=ch-laplace.tex:1051
PROBLEM:
Using the Laplace transform solve
$$ m x'' + c x' + k x = 0 , \quad x(0) = a, \quad x'(0) = b , $$
where $m > 0$, $c > 0$, $k > 0$, and $c^2 - 4km > 0$ (system is overdamped).
:::

:::exercise {exercise-6-2-004} number=6.2.4 answered=no src=ch-laplace.tex:1060
PROBLEM:
Using the Laplace transform solve
$$ m x'' + c x' + k x = 0 , \quad x(0) = a, \quad x'(0) = b , $$
where $m > 0$, $c > 0$, $k > 0$, and $c^2 - 4km < 0$ (system is underdamped).
:::

:::exercise {exercise-6-2-005} number=6.2.5 answered=no src=ch-laplace.tex:1069
PROBLEM:
Using the Laplace transform solve
$$ m x'' + c x' + k x = 0 , \quad x(0) = a, \quad x'(0) = b , $$
where $m > 0$, $c > 0$, $k > 0$, and $c^2 = 4km$ (system is critically damped).
:::

:::exercise {exercise-6-2-006} number=6.2.6 answered=no src=ch-laplace.tex:1078
PROBLEM:
Solve $x'' + x = u(t-1)$ for initial conditions $x(0) = 0$ and $x'(0) = 0$.
:::

:::exercise {exercise-6-2-007} number=6.2.7 answered=no src=ch-laplace.tex:1082
PROBLEM:
Show the “differentiation of the transform” property. Suppose $\mathcal{L} \bigl\{ f(t) \bigr\} = F(s)$, then show
$$ \mathcal{L} \bigl\{ -t f(t) \bigr\} = F'(s) . $$
Hint: Differentiate under the integral sign.
:::

:::exercise {exercise-6-2-008} number=6.2.8 answered=no src=ch-laplace.tex:1091
PROBLEM:
Solve $x''' + x = t^3 u(t-1)$ for initial conditions $x(0) = 1$ and $x'(0) = 0$, $x''(0) = 0$.
:::

:::exercise {exercise-6-2-009} number=6.2.9 answered=no src=ch-laplace.tex:1096
PROBLEM:
Using the definition of the Laplace transform, justify the second shifting property: $\mathcal{L} \bigl\{ f(t-a) \, u(t-a) \bigr\} = e^{-as} \mathcal{L} \bigl\{ f(t) \bigr\}$.
:::

:::exercise {exercise-6-2-010} number=6.2.10 answered=no src=ch-laplace.tex:1103
PROBLEM:
Consider the mass-spring system with a rocket from [Example 6.2.2](ref:lt-rocketex). We noticed that the solution kept oscillating after the rocket stopped running. The amplitude of the oscillation depends on the time that the rocket was fired (for 4 seconds in the example).

a) Find a formula for the amplitude of the resulting oscillation in terms of the amount of time the rocket is fired.
b) Is there a nonzero time (if so, what is it?) for which the rocket fires and the resulting oscillation has amplitude 0 (the mass is not moving)?

:::

:::exercise {exercise-6-2-011} number=6.2.11 answered=no src=ch-laplace.tex:1120
PROBLEM:
Define
$$ f(t) = \begin{cases} {(t-1)}^2 & \text{if } \; 1 \leq t < 2, \\ 3-t & \text{if } \; 2 \leq t < 3, \\ 0 & \text{otherwise} . \end{cases} $$

a) Sketch the graph of $f(t)$.
b) Write down $f(t)$ using the Heaviside function.
c) Solve $x''+x=f(t)$, $x(0)=0$, $x'(0) = 0$ using the Laplace transform.

:::

:::exercise {exercise-6-2-012} number=6.2.12 answered=no src=ch-laplace.tex:1137
PROBLEM:
Find the transfer function for $m x'' + c x' + kx = f(t)$, $x(0)=0$, $x'(0)=0$.
:::

:::exercise {exercise-6-2-013} number=6.2.13 answered=no src=ch-laplace.tex:1143
PROBLEM:
Suppose $Lx = f(t)$, $x(0)=0$, $x'(0)=0$ for the input function $f(t) = t$ gives the output $x(t) = 2e^{-t} + te^{-t} + (t-2)$.

a) Find $F(s)$, $X(s)$, and the transfer function $H(s)$.
b) If the input is instead $f(t) = \sin(t)$, find the new output $x(t)$.

:::

:::exercise {exercise-6-2-014} number=6.2.14 answered=no src=ch-laplace.tex:1153
PROBLEM:
Suppose $f(t) = 1$ if $0 \leq t < 1$ and $f(t)=0$ if $1 \leq t < 2$, and then extend periodically for all $t \geq 0$ so that $f(t)=f(t+2)$. Compute the Laplace transform $F(s)$.
:::

:::exercise {exercise-6-2-101} number=6.2.101 answered=yes src=ch-laplace.tex:1161
PROBLEM:
Using the Heaviside function $u(t)$, write down the function
$$ f(t) = \begin{cases} 0 & \text{if } \; \phantom{1 \leq {}} t < 1 , \\ t-1 & \text{if } \; 1 \leq t < 2 , \\ 1 & \text{if } \; 2 \leq t . \end{cases} $$

SOLUTION:
$f(t) = (t-1)\bigl(u(t-1) - u(t-2)\bigr) + u(t-2)$
:::

:::exercise {exercise-6-2-102} number=6.2.102 answered=yes src=ch-laplace.tex:1178
PROBLEM:
Solve $x''-x = (t^2-1) u(t-1)$ for initial conditions $x(0)=1$, $x'(0) = 2$ using the Laplace transform.
SOLUTION:
$x(t) = (2e^{t-1}-t^2-1) u(t-1) -\frac{1}{2}e^{-t}+\frac{3}{2}e^t$
:::

:::exercise {exercise-6-2-103} number=6.2.103 answered=yes src=ch-laplace.tex:1186
PROBLEM:
Find the transfer function for $x' + x = f(t)$, $x(0)=0$.
SOLUTION:
$H(s) = \frac{1}{s+1}$
:::

:::exercise {exercise-6-2-104} number=6.2.104 answered=yes src=ch-laplace.tex:1195
PROBLEM:
Suppose $Lx = f(t)$, $x(0)=0$, $x'(0)=0$ for the input function $f(t) = 4$ gives the output $x(t) = 1 - \cos(2 t)$. Find $F(s)$, $X(s)$, and the transfer function $H(s)$.
SOLUTION:
$F(s) = \frac{4}{s}$, $X(s) = \frac{1}{s} - \frac{s}{s^2+4}$, $H(s) = \frac{1}{s^2+4}$.
:::

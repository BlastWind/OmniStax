# 6.4 Dirac delta and impulse response {sec:diracdelta-section}

:::note [section-notes]
*Note: 1 or 1.5 lecture, §7.6 in [EP](cite:EP), §6.5 in [BD](cite:BD)*
:::

## Rectangular pulse

Often we study a physical system by putting in a short pulse and then seeing what the system does. The resulting behavior is often called *{index:impulse response}*, and understanding it tells us how the system responds to any input. Let us see what we mean by a pulse. The simplest kind of a pulse is a *{index:rectangular pulse}*{index-entry:pulse} defined by
$$ \varphi(t) = \begin{cases} 0 & \text{if } \; \phantom{a \leq {}} t < a , \\ M & \text{if } \; a \leq t < b , \\ 0 & \text{if } \; b \leq t . \end{cases} $$
See [Figure 6.3](ref:lt-sqpulse) for a graph.

> FIGURE {fig:lt-sqpulse} number=6.3 src=../../media/lt-sqpulse.svg
> alt: A graph of a rectangular pulse shown from t equals 0 to t equals 3. The function is zero until t equals 0.5, then it equals 2 between t equals 0.5 and t equals 1.0, and then it is zero again from t equals 1.0 onwards.
> width: 4.5in
> caption: Sample rectangular pulse with $a=0.5$, $b=1$, and $M = 2$.

Notice that
$$ \varphi(t) = M \bigl( u(t-a) - u(t-b) \bigr) , $$
where $u(t)$ is the unit step function. The Laplace transform of a rectangular pulse is
$$ \begin{split} {\mathcal{L}} \bigl\{ \varphi(t) \bigr\} & = {\mathcal{L}} \bigl\{ M \bigl( u(t-a) - u(t-b) \bigr) \bigr\} \\ & = M \frac{e^{-as} - e^{-bs}}{s} . \end{split} $$

For simplicity, let $a=0$. We also set $M = {1}/{b}$ so that
$$ \int_0^\infty \varphi(t) \,dt = 1 . $$
That is, we have a pulse of “unit mass.” This way for any $b$ the pulse has the same “oomph.” For such a pulse,
$$ {\mathcal{L}} \bigl\{ \varphi(t) \bigr\} = {\mathcal{L}} \left\{ \frac{u(t) - u(t-b)}{b} \right\} = \frac{1 - e^{-bs}}{bs} . $$
We want $b$ to be very small; we wish to have the pulse be very short and very tall. By letting $b$ go to zero, we arrive at the concept of the Dirac delta function. The limit of $\frac{1-e^{-bs}}{bs}$ as $b \to 0$ is $1$, so we are looking for a “function” whose Laplace transform is $1$.

## The delta function

The *{index:Dirac delta function}*{index-entry:delta function}^[Named after the English physicist and mathematician [Paul Adrien Maurice Dirac](https://en.wikipedia.org/wiki/Paul_Dirac) (1902–1984).] is not exactly a function; it is sometimes called a *{index:generalized function}*. We avoid unnecessary details and simply say that it is an object that does not really make sense unless we integrate it. The motivation is that we would like a “function” $\delta(t)$ such that for any continuous function $f(t)$,
$$ \boxed{~~ \int_{-\infty}^\infty \delta(t) f(t) \,dt = f(0) . ~~} $$
The formula should hold if we integrate over any interval that contains 0, not just $(-\infty,\infty)$. So $\delta(t)$ is a “function” with all its “mass” at the single point $t=0$. For any interval^[It is important that we consider $c$ and $d$ as part of the interval. One could write this integral as $\int_{c-}^{d+}$.] $[c,d]$,
$$ \int_c^d \delta(t) \,dt = \begin{cases} 1 & \text{if the interval $[c,d]$ contains 0, i.e.\ } c \leq 0 \leq d, \\ 0 & \text{otherwise.} \end{cases} $$
Unfortunately, there is no such function in the classical sense. You could informally think that $\delta(t)$ is zero for $t \neq 0$ and somehow infinite at $t=0$.

A good way to think about $\delta(t)$ is as a limit of pulses of decreasing length, each having an integral of $1$. For example, consider a rectangular pulse $\varphi(t)$ as above with $a=0$ and $M={1}/{b}$, that is, $\varphi(t) = \frac{u(t) - u(t-b)}{b}$. Compute
$$ \int_{-\infty}^\infty \varphi(t) f(t) \,dt = \int_{-\infty}^\infty \frac{u(t) - u(t-b)}{b} f(t) \,dt = \frac{1}{b} \int_{0}^b f(t) \,dt . $$
If $f(t)$ is continuous at $t=0$, then for very small $b$, the function $f(t)$ is approximately equal to $f(0)$ on the interval $[0,b]$. We approximate the integral
$$ \frac{1}{b} \int_{0}^b f(t) \,dt \approx \frac{1}{b} \int_{0}^b f(0) \,dt = f(0) . $$
Hence,
$$ \lim_{b\to 0} \int_{-\infty}^\infty \varphi(t) f(t) \,dt = \lim_{b\to 0} \frac{1}{b} \int_{0}^b f(t) \,dt = f(0) . $$

Let us therefore accept $\delta(t)$ as an object that is possible to integrate. We often want to shift $\delta$ to another point, for example $\delta(t-a)$. In that case,
$$ \int_{-\infty}^\infty \delta(t-a) f(t) \,dt = f(a) . $$
Note that $\delta(a-t)$ is the same object as $\delta(t-a)$. With that, the convolution of $\delta(t)$ with $f(t)$ is again $f(t)$,
$$ (f * \delta) (t) = \int_{0}^t f(\tau) \delta(t-\tau) \,d\tau = f(t) . $$

As we can integrate $\delta(t)$, we compute its Laplace transform:
$$ \boxed{~~ {\mathcal{L}} \bigl\{ \delta(t-a) \bigr\} = \int_{0}^\infty e^{-st} \delta(t-a) \,dt = e^{-as} . ~~} $$
In particular,
$$ {\mathcal{L}} \bigl\{ \delta(t) \bigr\} = 1 . $$

:::remark {rem:remark-deltaderivofjump} Remark 6.4.1
The Laplace transform of $\delta(t-a)$ would be the Laplace transform of the derivative of the Heaviside function $u(t-a)$, if the Heaviside function had a derivative. First,
$$ {\mathcal{L}} \bigl\{ u(t-a) \bigr\} = \frac{e^{-as}}{s}. $$
To obtain what the Laplace transform of the derivative would be, we multiply by $s$ to obtain $e^{-as}$, which is the Laplace transform of $\delta(t-a)$. We see the same thing using integration,
$$ \int_0^t \delta(\tau-a)\,d\tau = u(t-a) . $$
So in a certain sense
$$ \text{"} \quad \frac{d}{dt} \Bigl[ u(t-a) \Bigr] = \delta(t-a) . \quad \text{"} $$
This line of reasoning allows us to talk about derivatives of functions with jump discontinuities. We can think of the derivative of the Heaviside function $u(t-a)$ as being somehow infinite at $a$, which is precisely our intuitive understanding of the delta function.
:::

:::example {ex:example-6-4-1} Example 6.4.1
Let us compute ${\mathcal{L}}^{-1} \left\{ \frac{s+1}{s} \right\}$. So far, we only computed the inverse transform of proper rational functions in the $s$ variable. That is, the numerator was of lower degree than the denominator. Not so with $\frac{s+1}{s}$. We can use the delta function to compute,
$$ {\mathcal{L}}^{-1} \left\{ \frac{s+1}{s} \right\} = {\mathcal{L}}^{-1} \left\{ 1 + \frac{1}{s} \right\} = {\mathcal{L}}^{-1} \{ 1 \} + {\mathcal{L}}^{-1} \left\{ \frac{1}{s} \right\} = \delta(t) + 1 . $$
The resulting object is a generalized function and only makes sense when put underneath an integral.
:::

## Impulse response

As we said before, in the differential equation $L x = f(t)$, we think of $f(t)$ as the input, and $x(t)$ as the output. We think of the delta function as an impulse, and so to find the response to an impulse, we use the delta function in place of $f(t)$. The solution to
$$ L x = \delta(t) $$
is called the *{index:impulse response}*.

:::example {ex:example-6-4-2} Example 6.4.2
Solve (find the impulse response)
$$ x'' + \omega_0^2 x = \delta(t) , \quad x(0) = 0, \quad x'(0) = 0 . $$ {eq:eq-lteximpulseresp} number=6.3

Apply the Laplace transform to the equation, and denote the transform of $x(t)$ by $X(s)$:
$$ s^2 X(s) + \omega_0^2 X(s) = 1 , \qquad \text{and so} \qquad X(s) = \frac{1}{s^2+ \omega_0^2} . $$
The inverse Laplace transform produces (for $t > 0$)
$$ x(t) = \frac{\sin (\omega_0 t)}{\omega_0} . $$

:::

:::remark {rem:remark-6-4-2} Remark 6.4.2
Perhaps an astute reader will notice that it does not seem like $x'(0)=0$. However, we really want to think that $x(t)=0$ for $t \leq 0$, so $x(t)$ has a “corner” at $t=0$, that is, $x'$ has a jump discontinuity there, which is what produces the $\delta(t)$ when we take $x''$. See [Remark 6.4.1](ref:remark-deltaderivofjump). The initial condition really is $x'(0-) = \lim_{t \uparrow 0} x'(t) = 0$.
:::

Let us notice something about the example above. In [Example 6.3.4](ref:6.3#example-undampedforcedbylaplacearbitrhs), we found that when the input is $f(t)$, the solution to $Lx = f(t)$ is given by
$$ x(t) = \int_0^t f(\tau) \frac{\sin \bigl( \omega_0 (t-\tau) \bigr)}{\omega_0} \, d\tau . $$
That is, *the solution for an arbitrary input is given as convolution with the impulse response*. Let us see why. For functions $f(t)$ and $h(t)$ that are zero for negative $t$,
$$ (f * h)''(t) = \frac{d^2}{dt^2}\left[ \int_0^t f(\tau) h(t-\tau) \, d\tau \right] = \int_0^t f(\tau) h''(t-\tau) \, d\tau = (f * h'')(t) . $$
We differentiate twice under the integral^[You may be worried about the fact that our $h$ is not really twice differentiable, in fact, $h'(0)$ does not exist as a normal derivative, and $h''$ involves the $\delta$ function. You can pretend that $h$ is twice differentiable for this computation and either apply the standard Leibniz rule (that $h(t)=0$ for $t < 0$ is important) or note that for such functions, the integral is actually over $(-\infty,\infty)$ rather than over $[0,t]$.]. Suppose that $h(t)$ is the impulse response (solution to $h''+\omega_0^2 h = \delta(t)$). If we convolve the entire equation [(6.3)](ref:eq-lteximpulseresp), the left-hand side becomes
$$ f * (h'' + \omega_0^2 h) = (f * h'') + \omega_0^2 (f * h) = (f * h)'' + \omega_0^2 (f * h) . $$
The right-hand side becomes
$$ (f * \delta)(t) = f(t). $$
Therefore, if $h$ is the impulse response, then $x(t) = (f * h)(t)$ is the solution to
$$ x'' + \omega_0^2 x = f(t) . $$

The procedure works for any constant-coefficient linear equation $Lx = f(t)$. If you find the impulse response $h$ (solution to $Lh = \delta(t)$), you also know how to obtain the output $x(t)$ for any input $f(t)$. We simply convolve, $x(t) = (f * h)(t)$. As you may have noticed in the example, the impulse response is in fact just the inverse Laplace transform of the transfer function, that is, $h(t) = {\mathcal{L}}^{-1} \bigl\{ H(s) \bigr\}$.

## Three-point beam bending
{index-entry:three-point beam bending}

A quite different example application where the delta function appears is in representing point loads on a steel beam. Consider a beam of length $L$, resting on two simple supports at the ends. Let $x$ denote the position on the beam, and let $y(x)$ denote the deflection of the beam in the vertical direction. The deflection $y(x)$ satisfies the *{index:Euler–Bernoulli equation}*^[Named for the Swiss mathematicians [Jacob Bernoulli](https://en.wikipedia.org/wiki/Jacob_Bernoulli) (1654–1705), [Daniel Bernoulli](https://en.wikipedia.org/wiki/Daniel_Bernoulli) (1700–1782), the nephew of Jacob, and [Leonhard Paul Euler](https://en.wikipedia.org/wiki/Euler) (1707–1783).],
$$ EI \frac{d^4 y}{dx^4} = F(x) , $$
where $E$ and $I$ are constants^[$E$ is the elastic modulus and $I$ is the second moment of area. Let us not worry about the details and simply think of these as some given constants.] and $F(x)$ is the force applied per unit length at position $x$. The situation we are interested in is when the force is applied at a single point as in [Figure 6.4](ref:lt-beambendingfig).

> FIGURE {fig:lt-beambendingfig} number=6.4 src=../../media/beam-bending.svg
> alt: A diagram of a beam along the x-axis being held at fixed points at x equals 0 and at some positive x. The beam is getting bent down by a weight labeled F times delta times quantity x minus a in the center at one point.
> caption: Three-point bending.

The equation becomes
$$ EI \frac{d^4 y}{dx^4} = -F \delta(x-a) , $$
where $x=a$ is the point where the mass is applied. The constant $F$ is the force applied and the minus sign indicates that the force is downward, that is, in the negative $y$ direction. The end points of the beam satisfy the conditions,
$$ \begin{align*} & y(0) = 0, \qquad y''(0) = 0, \\ & y(L) = 0, \qquad y''(L) = 0. \end{align*} $$
See [§5.2](ref:5.2#sec-appeig) for further information about endpoint conditions applied to beams.

:::example {ex:lt-examplebeam} Example 6.4.3
Suppose that the length of the beam is 2, and $EI=1$ for simplicity. Further suppose that a force $F=1$ is applied at $x=1$. That is, we have the equation
$$ \frac{d^4 y}{dx^4} = -\delta(x-1) , $$
and the endpoint conditions are
$$ y(0) = 0, \qquad y''(0) = 0, \qquad y(2) = 0, \qquad y''(2) = 0. $$

We could integrate, but using the Laplace transform is even easier. We apply the transform in the $x$ variable rather than the $t$ variable. We again denote the transform of $y(x)$ by $Y(s)$.
$$ s^4Y(s)-s^3y(0)-s^2y'(0)-sy''(0)-y'''(0) = -e^{-s}. $$
We notice that $y(0) = 0$ and $y''(0) = 0$. Let us call $C_1 = y'(0)$ and $C_2=y'''(0)$. We solve for $Y(s)$,
$$ Y(s) = \frac{-e^{-s}}{s^4} + \frac{C_1}{s^2}+ \frac{C_2}{s^4} . $$
We take the inverse Laplace transform utilizing the second shifting property [(6.1)](ref:6.2#ltd-sseq) for the first term:
$$ y(x) = \frac{-{(x-1)}^3}{6} u(x-1) + C_1 x + \frac{C_2}{6} x^3 . $$
We still need to apply two of the endpoint conditions. As the conditions are at $x=2$ we can simply replace $u(x-1) = 1$ when taking the derivatives. Therefore,
$$ 0 = y(2) = \frac{-{(2-1)}^3}{6} + C_1 (2) + \frac{C_2}{6} 2^3 = \frac{-1}{6} + 2 C_1 + \frac{4}{3} C_2 , $$
and
$$ 0 = y''(2) = \frac{-3\cdot 2 \cdot (2-1)}{6} + \frac{C_2}{6} 3\cdot 2 \cdot 2 = -1 + 2 C_2 . $$
Hence, $C_2 = \frac{1}{2}$. Solving for $C_1$ using the first equation, we obtain $C_1 = \frac{-1}{4}$. Our solution for the beam deflection is
$$ y(x) = \frac{-{(x-1)}^3}{6} u(x-1) - \frac{x}{4} + \frac{x^3}{12} . $$

:::

## Exercises

:::exercise {exercise-6-4-001} number=6.4.1 answered=no src=ch-laplace.tex:2079
PROBLEM:
Solve (find the impulse response) $x'' + x' + x = \delta(t)$, $x(0) = 0$, $x'(0)=0$.
:::

:::exercise {exercise-6-4-002} number=6.4.2 answered=no src=ch-laplace.tex:2084
PROBLEM:
Solve (find the impulse response) $x'' + 2 x' + x = \delta(t)$, $x(0) = 0$, $x'(0)=0$.
:::

:::exercise {exercise-6-4-003} number=6.4.3 answered=no src=ch-laplace.tex:2089
PROBLEM:
A pulse can come later and can be bigger. Solve $x'' + 4 x = 4\delta(t-1)$, $x(0) = 0$, $x'(0)=0$.
:::

:::exercise {exercise-6-4-004} number=6.4.4 answered=no src=ch-laplace.tex:2095
PROBLEM:
Suppose that $f(t)$ and $g(t)$ are differentiable functions (and the derivatives are continuous) and suppose that $f(t) = g(t) = 0$ for all $t \leq 0$. Show that
$$ (f * g)'(t) = (f' * g)(t) = (f * g')(t) . $$

:::

:::exercise {exercise-6-4-005} number=6.4.5 answered=no src=ch-laplace.tex:2104
PROBLEM:
Suppose that $L x = \delta(t)$, $x(0) = 0$, $x'(0) = 0$, has the solution $x(t) = t e^{-t}$ for $t > 0$. Find the solution to $Lx = t^2$, $x(0) = 0$, $x'(0) = 0$ for $t > 0$.
:::

:::exercise {exercise-6-4-006} number=6.4.6 answered=no src=ch-laplace.tex:2110
PROBLEM:
Compute ${\mathcal{L}}^{-1} \left\{ \frac{s^2+s+1}{s^2} \right\}$.
:::

:::exercise {exercise-6-4-007} number=6.4.7 answered=no src=ch-laplace.tex:2114
PROBLEM:
**challenging**
Solve [Example 6.4.3](ref:lt-examplebeam) via integrating 4 times in the $x$ variable.
:::

:::exercise {exercise-6-4-008} number=6.4.8 answered=no src=ch-laplace.tex:2119
PROBLEM:
Suppose we have a beam of length $1$ simply supported at the ends and suppose that a force $F=1$ is applied at $x={3}/{4}$ in the downward direction. Suppose that $EI=1$ for simplicity. Find the beam deflection $y(x)$.
:::

:::exercise {exercise-6-4-101} number=6.4.101 answered=yes src=ch-laplace.tex:2128
PROBLEM:
Solve (find the impulse response) $x'' = \delta(t)$, $x(0) = 0$, $x'(0)=0$.
SOLUTION:
$x(t) = t$
:::

:::exercise {exercise-6-4-102} number=6.4.102 answered=yes src=ch-laplace.tex:2136
PROBLEM:
Solve (find the impulse response) $x' + a x = \delta(t)$, $x(0) = 0$.
SOLUTION:
$x(t) = e^{-at}$
:::

:::exercise {exercise-6-4-103} number=6.4.103 answered=yes src=ch-laplace.tex:2146
PROBLEM:
Suppose that $L x = \delta(t)$, $x(0) = 0$, $x'(0) = 0$, has the solution $x(t) = e^t \sin(t)$ for $t > 0$. Find (in closed form) the solution to $Lx = e^t$, $x(0) = 0$, $x'(0) = 0$ for $t > 0$.
SOLUTION:
$x(t) = (e^t) * (e^t \sin(t) ) = e^t (1-\cos(t))$
:::

:::exercise {exercise-6-4-104} number=6.4.104 answered=yes src=ch-laplace.tex:2155
PROBLEM:
Compute ${\mathcal{L}}^{-1} \left\{ \frac{s^2}{s^2+1} \right\}$.
SOLUTION:
$\delta(t) - \sin(t)$
:::

:::exercise {exercise-6-4-105} number=6.4.105 answered=yes src=ch-laplace.tex:2164
PROBLEM:
Compute ${\mathcal{L}}^{-1} \left\{ \frac{3 s^2 e^{-s} + 2}{s^2} \right\}$.
SOLUTION:
$3 \delta(t-1) + 2 t$
:::

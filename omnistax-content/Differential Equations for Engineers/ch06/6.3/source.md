# 6.3 Convolution {sec:convolution-section}

:::note [section-notes]
*Note: 1 or 1.5 lectures, §7.2 in [EP](cite:EP), §6.6 in [BD](cite:BD)*
:::

## The convolution

The Laplace transformation of a product is not the product of the transforms. All hope is not lost, however. We simply have to use a different type of “product.” Take two functions $f(t)$ and $g(t)$ defined for $t \geq 0$, and define the *{index:convolution}*^[For those who have seen convolution before, you may have seen it defined as $(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t-\tau) \, d\tau$. This definition agrees with [(6.2)](ref:ltc-convdef) if you define $f(t)$ and $g(t)$ to be zero for $t < 0$. When discussing the Laplace transform, the definition we gave is sufficient. Convolution does occur in many other applications, however, where you may have to use the more general definition with infinities.] of $f(t)$ and $g(t)$ as
$$ \boxed{~~ (f * g)(t) \overset{\text{def}}{=} \int_0^t f(\tau) g(t-\tau) \, d\tau . ~~} $$ {eq:ltc-convdef} number=6.2
As you can see, the convolution of two functions of $t$ is another function of $t$.

:::example {ex:example-6-3-1} Example 6.3.1
Take $f(t) = e^t$ and $g(t) = t$ for $t \geq 0$. Then
$$ (f*g)(t) = \int_0^t e^\tau (t-\tau) \, d\tau = e^t - t - 1 . $$
To solve the integral we did one integration by parts.
:::

:::example {ex:ltc-convsincosex} Example 6.3.2
Take $f(t) = \sin (\omega t)$ and $g(t) = \cos (\omega t)$ for $t \geq 0$. Then
$$ (f*g)(t) = \int_0^t \sin ( \omega \tau ) \, \cos \bigl( \omega (t-\tau) \bigr) \, d\tau . $$
Apply the identity
$$ \cos (\theta) \sin (\psi) = \frac{1}{2} \, \bigl( \sin (\theta + \psi) - \sin (\theta - \psi) \bigr) , $$
to get
$$ \begin{split} (f*g)(t) & = \int_0^t \frac{1}{2} \, \bigl( \sin (\omega t) - \sin (\omega t - 2 \omega \tau ) \bigr) \, d\tau \\ & = \left[ \frac{1}{2} \, \tau \sin (\omega t) - \frac{1}{4\omega} \, \cos (\omega t - 2 \omega \tau) \right]_{\tau=0}^t \\ & = \frac{1}{2} \, t \sin (\omega t) . \end{split} $$
The formula holds only for $t \geq 0$. The functions $f$, $g$, and $f*g$ are undefined for $t < 0$.
:::

Convolution has many properties that make it behave like a product. Let $c$ be a constant and $f$, $g$, and $h$ be functions. It is a calculus exercise to verify that
$$ \begin{align*} & f * g = g * f , \\ & (c f) * g = f * (c g) = c (f*g) , \\ & (f+g) * h = f * h + g * h , \\ & ( f * g ) * h = f * ( g * h ) . \end{align*} $$
The first property means that $(f * g)(t) = \int_0^t f(\tau) g(t-\tau) \, d\tau = \int_0^t f(t-\tau) g(\tau) \, d\tau$. The most interesting property for us is the following theorem.

:::theorem {thm:theorem-6-3-1} Theorem 6.3.1
If $f(t)$ and $g(t)$ are of exponential order, then so is $(f*g)(t)$ and
$$ \boxed{~~ \mathcal{L} \bigl\{ (f*g)(t) \bigr\} = \mathcal{L} \left\{ \int_0^t f(\tau) g(t-\tau) \, d\tau \right\} = \mathcal{L} \bigl\{ f(t) \bigr\} \mathcal{L} \bigl\{ g(t) \bigr\} . ~~} $$

:::

In other words, the Laplace transform of a convolution is the product of the Laplace transforms: ${\mathcal{L}} \bigl\{ (f*g)(t) \bigr\} = F(s)G(s)$, or in reverse, ${\mathcal{L}}^{-1} \bigl\{ F(s) G(s) \bigr\} = (f*g)(t)$.

:::example {ex:example-6-3-3} Example 6.3.3
Suppose we wish to find the inverse Laplace transform of
$$ \frac{1}{s^2(s+1)} = \frac{1}{s^2} \, \frac{1}{s+1} . $$
We recognize the two entries of [Table 6.2](ref:6.2#ltd-table):
$$ \mathcal{L}^{-1} \left\{ \frac{1}{s^2} \right\} = t \qquad \text{and} \qquad \mathcal{L}^{-1} \left\{ \frac{1}{s+1} \right\} = e^{-t} . $$
Therefore, we convolve $t$ and $e^{-t}$,
$$ \mathcal{L}^{-1} \left\{ \frac{1}{s^2} \, \frac{1}{s+1} \right\} = \int_0^t \tau e^{-(t-\tau)} \,d\tau = e^{-t}+t-1 . $$
The calculation of the integral involved an integration by parts.
:::

## Solving ODEs

The next example demonstrates the full power of the convolution and the Laplace transform. We can give the solution to the forced oscillation problem for any forcing function as a definite integral.

:::example {ex:example-undampedforcedbylaplacearbitrhs} Example 6.3.4
Find the solution to
$$ x'' + \omega_0^2 x = f(t) , \quad x(0) = 0, \quad x'(0) = 0 , $$
for an arbitrary function $f(t)$.

We first apply the Laplace transform to the equation. Denote the transform of $x(t)$ by $X(s)$ and the transform of $f(t)$ by $F(s)$ as usual. We get
$$ s^2 X(s) + \omega_0^2 X(s) = F(s) , $$
or in other words,
$$ X(s) = \frac{1}{s^2+ \omega_0^2} F(s). $$
Recall that $H(s) = \frac{1}{s^2+ \omega_0^2}$ is the transfer function. We know
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+ \omega_0^2} \right\} = \frac{\sin (\omega_0 t)}{\omega_0} . $$
Therefore,
$$ x(t) = \int_0^t \frac{\sin (\omega_0 \tau)}{\omega_0} f(t-\tau) \, d\tau , $$
or, if we reverse the order,
$$ x(t) = \int_0^t f(\tau) \frac{\sin \bigl( \omega_0 (t-\tau) \bigr)}{\omega_0} \, d\tau . $$

:::

Notice one more feature of the example above. We can now see how the Laplace transform handles {index:resonance}. Suppose that $f(t) = \cos (\omega_0 t)$. Then
$$ x(t) = \int_0^t \frac{\sin (\omega_0 \tau)}{\omega_0} \, \cos \bigl( \omega_0 (t-\tau) \bigr) \, d\tau = \frac{1}{\omega_0} \int_0^t \sin ( \omega_0 \tau ) \, \cos \bigl(\omega_0 (t-\tau) \bigr) \, d\tau . $$
We have computed the convolution of sine and cosine in [Example 6.3.2](ref:ltc-convsincosex). Hence
$$ x(t) = \left( \frac{1}{\omega_0} \right) \, \left( \frac{1}{2} \, t \sin ( \omega_0 t ) \right) = \frac{1}{2 \omega_0} \, t \sin ( \omega_0 t ). $$
Note the $t$ in front of the sine. The solution, therefore, grows without bound as $t$ gets large, meaning we get resonance.

The general idea here is that if $H(s)$ is the transfer function, then $X(s)=H(s)F(s)$. If we find the $h(t) = {\mathcal{L}}^{-1}\bigl\{ H(s) \bigr\}$, then
$$ x(t) = {\mathcal{L}}^{-1}\bigl\{ X(s) \bigr\} = {\mathcal{L}}^{-1}\bigl\{ F(s)H(s) \bigr\} = (f * h)(t) = \int_0^t f(\tau) h(t-\tau) \, d\tau . $$
Hence, we can solve any constant-coefficient equation with an arbitrary forcing function $f(t)$ as a definite integral using convolution. A definite integral, rather than a closed-form solution, is usually enough for most practical purposes. It is not hard to numerically evaluate a definite integral.

## Volterra integral equation

An integral equation{index-entry:integral equation} involving convolution that comes up, for example, when studying systems with memory effects is the *{index:Volterra integral equation}*^[Named for the Italian mathematician [Vito Volterra](https://en.wikipedia.org/wiki/Vito_Volterra) (1860–1940).]
$$ x(t) = f(t) + \int_0^t g(t-\tau) x(\tau) \, d\tau . $$
Here $f(t)$ and $g(t)$ are known functions and $x(t)$ is an unknown we wish to solve for. We have $x(t) = f(t) + (g * x)(t)$, so the question is: If convolution is like a product, can we also “divide” to solve this equation? We apply the Laplace transform to the equation to obtain
$$ X(s) = F(s) + G(s) X(s) , $$
where $X(s)$, $F(s)$, and $G(s)$ are the Laplace transforms of $x(t)$, $f(t)$, and $g(t)$, respectively. We find
$$ X(s) = \frac{F(s)}{1-G(s)} . $$
To find $x(t)$, we now need to find the inverse Laplace transform of $X(s)$.

:::example {ex:example-6-3-5} Example 6.3.5
Solve
$$ x(t) = e^{-t} + \int_0^t \sinh(t-\tau) x(\tau) \, d\tau . $$

We apply the Laplace transform to obtain
$$ X(s) = \frac{1}{s+1} + \frac{1}{s^2-1} X(s) , $$
or
$$ X(s) = \frac{\frac{1}{s+1}}{1- \frac{1}{s^2-1}} = \frac{s-1}{s^2 - 2} = \frac{s}{s^2 - 2} - \frac{1}{s^2 - 2} . $$
It is not hard to apply [Table 6.1](ref:6.1#lt-table) to find
$$ x(t) = \cosh \bigl( \sqrt{2} \, t \bigr) - \frac{1}{\sqrt{2}} \sinh \bigl( \sqrt{2}\, t \bigr). $$

:::

## Exercises

:::exercise {exercise-6-3-001} number=6.3.1 answered=no src=ch-laplace.tex:1526
PROBLEM:
Let $f(t) = t^2$ for $t \geq 0$, and $g(t) = u(t-1)$. Compute $f * g$.
:::

:::exercise {exercise-6-3-002} number=6.3.2 answered=no src=ch-laplace.tex:1531
PROBLEM:
Let $f(t) = t$ for $t \geq 0$, and $g(t) = \sin t$ for $t \geq 0$. Compute $f * g$.
:::

:::exercise {exercise-6-3-003} number=6.3.3 answered=no src=ch-laplace.tex:1536
PROBLEM:
Find the solution to
$$ m x'' + c x' + k x = f(t) , \quad x(0) = 0, \quad x'(0) = 0 , $$
for an arbitrary function $f(t)$, where $m > 0$, $c > 0$, $k > 0$, and $c^2 - 4km > 0$ (the system is overdamped). Write the solution as a definite integral.
:::

:::exercise {exercise-6-3-004} number=6.3.4 answered=no src=ch-laplace.tex:1546
PROBLEM:
Find the solution to
$$ m x'' + c x' + k x = f(t) , \quad x(0) = 0, \quad x'(0) = 0 , $$
for an arbitrary function $f(t)$, where $m > 0$, $c > 0$, $k > 0$, and $c^2 - 4km < 0$ (the system is underdamped). Write the solution as a definite integral.
:::

:::exercise {exercise-6-3-005} number=6.3.5 answered=no src=ch-laplace.tex:1556
PROBLEM:
Find the solution to
$$ m x'' + c x' + k x = f(t) , \quad x(0) = 0, \quad x'(0) = 0 , $$
for an arbitrary function $f(t)$, where $m > 0$, $c > 0$, $k > 0$, and $c^2 = 4km$ (the system is critically damped). Write the solution as a definite integral.
:::

:::exercise {exercise-6-3-006} number=6.3.6 answered=no src=ch-laplace.tex:1566
PROBLEM:
Solve
$$ x(t) = e^{-t} + \int_0^t \cos(t-\tau) x(\tau) \, d\tau . $$

:::

:::exercise {exercise-6-3-007} number=6.3.7 answered=no src=ch-laplace.tex:1573
PROBLEM:
Solve
$$ x(t) = \cos t + \int_0^t \cos(t-\tau) x(\tau) \, d\tau . $$

:::

:::exercise {exercise-6-3-008} number=6.3.8 answered=no src=ch-laplace.tex:1580
PROBLEM:
Compute ${\mathcal{L}}^{-1} \left\{ \frac{s}{{(s^2+4)}^2} \right\}$ using convolution.
:::

:::exercise {exercise-6-3-009} number=6.3.9 answered=no src=ch-laplace.tex:1585
PROBLEM:
Write down the solution to $x''-2x=e^{-t^2}$, $x(0)=0$, $x'(0)=0$ as a definite integral. Hint: Do not try to compute the Laplace transform of $e^{-t^2}$.
:::

:::exercise {exercise-6-3-101} number=6.3.101 answered=yes src=ch-laplace.tex:1594
PROBLEM:
Let $f(t) = \cos t$ for $t \geq 0$, and $g(t) = e^{-t}$. Compute $f * g$.
SOLUTION:
$\frac{1}{2}(\cos t + \sin t - e^{-t})$
:::

:::exercise {exercise-6-3-102} number=6.3.102 answered=yes src=ch-laplace.tex:1602
PROBLEM:
Compute ${\mathcal{L}}^{-1} \left\{ \frac{5}{s^4+s^2} \right\}$ using convolution.
SOLUTION:
$5t-5\sin t$
:::

:::exercise {exercise-6-3-103} number=6.3.103 answered=yes src=ch-laplace.tex:1610
PROBLEM:
Solve $x''+x = \sin t$, $x(0) = 0$, $x'(0)=0$ using convolution.
SOLUTION:
$\frac{1}{2}(\sin t - t \cos t)$
:::

:::exercise {exercise-6-3-104} number=6.3.104 answered=yes src=ch-laplace.tex:1617
PROBLEM:
Solve $x'''+x' = f(t)$, $x(0) = 0$, $x'(0)=0$, $x''(0)=0$ using convolution. Write the result as a definite integral.
SOLUTION:
$\int_0^t f(\tau) \bigl( 1 - \cos (t-\tau)\bigr)\, d\tau$
:::

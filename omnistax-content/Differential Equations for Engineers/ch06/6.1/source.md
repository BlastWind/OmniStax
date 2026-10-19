# 6.1 The Laplace transform {sec:laplace-section}

:::note [section-notes]
*Note: 1.5–2 lectures, §7.1 in [EP](cite:EP), §6.1 and parts of §6.2 in [BD](cite:BD)*
:::

## The transform

In this chapter, we will discuss the Laplace transform^[Just like the Laplace equation and the Laplacian, the Laplace transform is also named after [Pierre-Simon, marquis de Laplace](https://en.wikipedia.org/wiki/Laplace) (1749–1827).]. The Laplace transform is a very efficient method to solve certain ODE or PDE problems. The transform takes a differential equation and turns it into an algebraic equation. If the algebraic equation can be solved, applying the inverse transform gives us our desired solution. The Laplace transform also has applications in the analysis of electrical circuits, NMR spectroscopy, signal processing, and elsewhere. Finally, understanding the Laplace transform will also help with understanding the related Fourier transform, which, however, requires more understanding of complex numbers. We will not cover the Fourier transform.

The Laplace transform also gives a lot of insight into the nature of the equations we are dealing with. It can be seen as converting between the time and the frequency domain. For example, take the standard equation
$$ m x''(t) + c x'(t) + k x(t) = f(t) . $$
We can think of $t$ as time and $f(t)$ as incoming signal. The Laplace transform will convert the equation from a differential equation in time to an algebraic (no derivatives) equation, where the new independent variable $s$ is thought of as the frequency.^[Really, it is the “frequency” in terms of complex numbers, but we digress.]

We can think of the *{index:Laplace transform}* as a black box. It eats functions and spits out functions in a new variable. We write $\mathcal{L} \bigl\{ f(t) \bigr\} = F(s)$ for the Laplace transform of $f(t)$. It is common to write lower case letters for functions in the time domain and upper case letters for functions in the frequency domain. We use the same letter to denote that one function is the Laplace transform of the other. For example, $F(s)$ is the Laplace transform of $f(t)$. Let us define the transform.
$$ \boxed{~~ \mathcal{L} \bigl\{ f(t) \bigr\} = F(s) \overset{\text{def}}{=} \int_0^\infty e^{-st} f(t) \, dt . ~~} $$
We note that we are only considering $t \geq 0$ in the transform. Of course, if we think of $t$ as time, there is no problem; we are generally interested in finding out what will happen in the future (the Laplace transform is one place where it is safe to ignore the past). Let us compute some simple transforms.

:::example {ex:example-6-1-1} Example 6.1.1
Suppose $f(t) = 1$, then
$$ \mathcal{L} \{1\} = \int_0^\infty e^{-st} \, dt = \left[ \frac{e^{-st}}{-s} \right]_{t=0}^\infty = \lim_{h\to\infty} \left[ \frac{e^{-st}}{-s} \right]_{t=0}^h = \lim_{h\to\infty} \left( \frac{e^{-sh}}{-s} - \frac{1}{-s} \right) = \frac{1}{s} . $$
The limit (the improper integral) only exists if $s > 0$. So $\mathcal{L} \{1\}$ is only defined for $s > 0$.
:::

:::example {ex:example-6-1-2} Example 6.1.2
Suppose $f(t) = e^{-at}$, then
$$ \mathcal{L} \bigl\{e^{-at}\bigr\} = \int_0^\infty e^{-st} e^{-at} \, dt = \int_0^\infty e^{-(s+a)t} \, dt = \left[ \frac{e^{-(s+a)t}}{-(s+a)} \right]_{t=0}^\infty = \frac{1}{s+a} . $$
The limit only exists if $s+a > 0$. So $\mathcal{L} \bigl\{e^{-at}\bigr\}$ is only defined for $s+a > 0$.
:::

:::example {ex:example-6-1-3} Example 6.1.3
Suppose $f(t) = t$, then using integration by parts
$$ \begin{split} \mathcal{L} \{t\} & = \int_0^\infty e^{-st} t \, dt \\ & = \left[ \frac{-te^{-st}}{s} \right]_{t=0}^\infty + \frac{1}{s} \int_0^\infty e^{-st} \,dt \\ & = 0 + \frac{1}{s} \left[ \frac{e^{-st}}{-s} \right]_{t=0}^\infty \\ & = \frac{1}{s^2} . \end{split} $$
Again, the limit only exists if $s > 0$.
:::

:::example {ex:example-6-1-4} Example 6.1.4
A common function is the *{index:unit step function}*, which is sometimes called the *{index:Heaviside function}*^[The function is named after the English mathematician, engineer, and physicist [Oliver Heaviside](https://en.wikipedia.org/wiki/Heaviside) (1850–1925). Only by coincidence is the function “heavy” on “one side.”]. This function is generally given as
$$ u(t) = \begin{cases} 0 & \text{if } \; t < 0 , \\ 1 & \text{if } \; t \geq 0 . \end{cases} $$
Let us find the Laplace transform of $u(t-a)$, where $a \geq 0$ is some constant. That is, it is the function that is $0$ for $t < a$ and $1$ for $t \geq a$.
$$ \mathcal{L} \bigl\{ u(t-a) \bigr\} = \int_0^{\infty} e^{-st} u(t-a) \, dt = \int_a^{\infty} e^{-st} \, dt = \left[ \frac{e^{-st}}{-s} \right]_{t=a}^\infty = \frac{e^{-as}}{s} , $$
where of course $s > 0$ (and $a \geq 0$ as we said before).
:::

By applying similar procedures, we can compute the transforms of many elementary functions. Many basic transforms are listed in [Table 6.1](ref:lt-table) (see also [appendix B](ref:B#laplacelist-appendix)).

> TABLE {tab:lt-table} number=6.1 cols=5
> caption: Some Laplace transforms ($C$, $\omega$, and $a$ are constants).
| $f(t)$ | $\mathcal{L} \bigl\{ f(t) \bigr\}$ | $\qquad\quad$ | $f(t)$ | $\mathcal{L} \bigl\{ f(t) \bigr\}$ |
| --- | --- | --- | --- | --- |
| $C$ | $\frac{C}{s}$ | | $\sin (\omega t)$ | $\frac{\omega}{s^2+\omega^2}$ |
| $t$ | $\frac{1}{s^2}$ | | $\cos (\omega t)$ | $\frac{s}{s^2+\omega^2}$ |
| $t^2$ | $\frac{2}{s^3}$ | | $\sinh (\omega t)$ | $\frac{\omega}{s^2-\omega^2}$ |
| $t^3$ | $\frac{6}{s^4}$ | | $\cosh (\omega t)$ | $\frac{s}{s^2-\omega^2}$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ | | $u(t-a) \quad (a \geq 0)$ | $\frac{e^{-as}}{s}$ |
| $e^{-at}$ | $\frac{1}{s+a}$ | | | |

:::exercise {exercise-6-1-001} number=6.1.1 answered=no src=ch-laplace.tex:202
PROBLEM:
Verify [Table 6.1](ref:lt-table).
:::

Since the transform is defined by an integral, we can use the linearity properties of the integral. For example, if $C$ is a constant, then
$$ \mathcal{L} \bigl\{ C f(t) \bigr\} = \int_0^\infty e^{-st} C f(t) \,dt = C \int_0^\infty e^{-st} f(t) \,dt = C \mathcal{L} \bigl\{ f(t) \bigr\} . $$
So we can “pull out” a constant from the transform. Similarly, with addition. As linearity is important, we state it as a theorem.

:::theorem {thm:theorem-6-1-1} Theorem 6.1.1 (Linearity of the Laplace transform)
{index-entry:linearity of the Laplace transform} If $A$, $B$, and $C$ are constants, then
$$ \boxed{~~ \mathcal{L} \bigl\{ A f(t) + B g(t) \bigr\} = A \mathcal{L} \bigl\{ f(t) \bigr\} + B \mathcal{L} \bigl\{ g(t) \bigr\} , ~~} $$
and in particular,
$$ \mathcal{L} \bigl\{ C f(t) \bigr\} = C \mathcal{L} \bigl\{ f(t) \bigr\} . $$

:::

:::exercise {exercise-6-1-002} number=6.1.2 answered=no src=ch-laplace.tex:235
PROBLEM:
Verify the theorem. That is, show that $\mathcal{L} \bigl\{ A f(t) + B g(t) \bigr\} = A \mathcal{L} \bigl\{ f(t) \bigr\} + B \mathcal{L} \bigl\{ g(t) \bigr\}$.
:::

These rules together with [Table 6.1](ref:lt-table) make it easy to find the Laplace transform of a whole lot of functions already. For example:
$$ \mathcal{L}\bigl\{ 2 + 5t + 9e^{-2t} \bigr\} = \mathcal{L}\bigl\{ 2 \bigr\} +5 \mathcal{L}\bigl\{ t \bigr\} + 9 \mathcal{L}\bigl\{ e^{-2t} \bigr\} = \frac{2}{s} + \frac{5}{s^2} + \frac{9}{s+2} . $$
Be careful! The Laplace transform of a product is *not* the product of the transforms. In general
$$ \mathcal{L} \bigl\{ f(t) g(t) \bigr\} \neq \mathcal{L} \bigl\{ f(t) \bigr\} \mathcal{L} \bigl\{ g(t) \bigr\} . $$
Moreover, not all functions have a Laplace transform. For example, the function $\frac{1}{t}$ does not have a Laplace transform as the integral diverges for all $s$. Similarly, $\tan t$ or $e^{t^2}$ do not have Laplace transforms.

## Existence and uniqueness

When does the Laplace transform exist? A function $f(t)$ is of *{index:exponential order}* as $t$ goes to infinity if
$$ \lvert f(t) \rvert \leq M e^{ct} , $$
for some constants $M$ and $c$, for sufficiently large $t$ (say for all $t > t_0$ for some $t_0$). The simplest way to check this condition is to try and compute
$$ \lim_{t\to \infty} \frac{f(t)}{e^{ct}} . $$
If the limit exists and is finite (usually zero), then $f(t)$ is of exponential order.

:::exercise {exercise-6-1-003} number=6.1.3 answered=no src=ch-laplace.tex:294
PROBLEM:
Use L’Hopital’s rule from calculus to show that a polynomial is of exponential order. Hint: Note that a sum of two exponential-order functions is also of exponential order. Then show that $t^n$ is of exponential order for any $n$.
:::

For an exponential-order function, we have existence and uniqueness of the Laplace transform.

:::theorem {thm:theorem-6-1-2} Theorem 6.1.2 (Existence)
Let $f(t)$ be continuous on the interval $[0,\infty)$ and of exponential order for a certain constant $c$. Then $F(s) = \mathcal{L} \bigl\{ f(t) \bigr\}$ is defined for all $s > c$.
:::

The existence is not difficult to see. Let $f(t)$ be of exponential order, that is, $\lvert f(t) \rvert \leq M e^{ct}$ for all $t > 0$ (for simplicity $t_0 = 0$). Let $s > c$, or in other words $(s-c) > 0$. By the comparison theorem from calculus, the improper integral defining $\mathcal{L} \bigl\{ f(t) \bigr\}$ exists because the following integral exists
$$ \int_0^\infty e^{-st} ( M e^{ct} ) \,dt = M \int_0^\infty e^{-(s-c)t} \,dt = M \left[ \frac{e^{-(s-c)t}}{-(s-c)} \right]_{t=0}^\infty = \frac{M}{s-c} . $$

The transform also exists for some other functions that are not of exponential order, but that will not be relevant to us. Before dealing with uniqueness, we note that for functions of exponential order, their Laplace transform decays at infinity:
$$ \lim_{s\to\infty} F(s) = 0 . $$

:::theorem {thm:lt-uniqthm} Theorem 6.1.3 (Uniqueness)
Let $f(t)$ and $g(t)$ be continuous and of exponential order. Suppose that there exists a constant $C$, such that $F(s) = G(s)$ for all $s > C$. Then $f(t) = g(t)$ for all $t \geq 0$.
:::

Both theorems hold for piecewise continuous functions as well. Recall that piecewise continuous means that the function is continuous except perhaps at a discrete set of points, where it has jump discontinuities like the Heaviside function. The Laplace transform, however, does not “see” values at the discontinuities. So we can only conclude that $f(t) = g(t)$ outside of discontinuities. For example, the unit step function is sometimes defined using $u(0) = {1}/{2}$. This new step function, however, has the exact same Laplace transform as the one we defined earlier, where $u(0) = 1$.

## The inverse transform

As we said, the Laplace transform will allow us to convert a differential equation into an algebraic equation. Once we solve the algebraic equation in the frequency domain, we will want to get back to the time domain, as that is what we are interested in. Given a function $F(s)$, we wish to find a function $f(t)$ such that $\mathcal{L} \bigl\{ f(t) \bigr\} = F(s)$. [Theorem 6.1.3](ref:lt-uniqthm) says that the solution $f(t)$ is unique. So we can without fear make the following definition.

Suppose $F(s) = \mathcal{L} \bigl\{ f(t) \bigr\}$ for some function $f(t)$. Define the *{index:inverse Laplace transform}* as
$$ {\mathcal{L}}^{-1} \bigl\{ F(s) \bigr\} \overset{\text{def}}{=} f(t) . $$
There is an integral formula for the inverse, but it is not as simple as the transform itself—it requires complex numbers and path integrals. For us it will suffice to compute the inverse using [Table 6.1](ref:lt-table).

:::example {ex:example-6-1-5} Example 6.1.5
Take $F(s) = \frac{1}{s+1}$. Find the inverse Laplace transform.

We look at the table to find
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s+1} \right\} = e^{-t} . $$

:::

As the Laplace transform is linear, the inverse Laplace transform is also linear. That is,
$$ {\mathcal{L}}^{-1} \bigl\{ A F(s) + B G(s) \bigr\} = A {\mathcal{L}}^{-1} \bigl\{ F(s) \bigr\} + B {\mathcal{L}}^{-1} \bigl\{ G(s) \bigr\} . $$
Of course, we also have ${\mathcal{L}}^{-1} \bigl\{ A F(s) \bigr\} = A {\mathcal{L}}^{-1} \bigl\{ F(s) \bigr\}$.

:::example {ex:example-6-1-6} Example 6.1.6
Take $F(s) = \frac{s^2+s+1}{s^3+s}$. Find the inverse Laplace transform.

First we use the *{index:method of partial fractions}* to write $F$ in a form where we can use [Table 6.1](ref:lt-table). We factor the denominator as $s(s^2+1)$ and write
$$ \frac{s^2+s+1}{s^3+s} = \frac{A}{s} + \frac{Bs+C}{s^2+1} . $$
Putting the right-hand side over a common denominator and equating the numerators, we get $A(s^2+1) + s(Bs+C) = s^2+s+1$. Expanding and equating coefficients, we obtain $A+B = 1$, $C=1$, $A=1$, and thus $B=0$. In other words,
$$ F(s) = \frac{s^2+s+1}{s^3+s} = \frac{1}{s} + \frac{1}{s^2+1} . $$
By linearity of the inverse Laplace transform, we get
$$ {\mathcal{L}}^{-1} \left\{ \frac{s^2+s+1}{s^3+s} \right\} = {\mathcal{L}}^{-1} \left\{ \frac{1}{s} \right\} + {\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+1} \right\} = 1 + \sin t . $$

:::

Another useful property is the so-called *{index:shifting property}* or the *{index:first shifting property}*
$$ \boxed{~~ \mathcal{L} \bigl\{ e^{-at} f(t) \bigr\} = F(s+a) , ~~} $$
where $F(s)$ is the Laplace transform of $f(t)$.

:::exercise {exercise-6-1-004} number=6.1.4 answered=no src=ch-laplace.tex:448
PROBLEM:
Derive the first shifting property from the definition of the Laplace transform.
:::

The shifting property can be used, for example, when the denominator is a more complicated quadratic that may come up in the method of partial fractions. We complete the square and write such quadratics as ${(s+a)}^2+b$ and then use the shifting property.

:::example {ex:example-6-1-7} Example 6.1.7
Find ${\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+4s+8} \right\}$.

First, we complete the square to make the denominator ${(s+2)}^2+4$. We find
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+4} \right\} = \frac{1}{2} {\mathcal{L}}^{-1} \left\{ \frac{2}{s^2+2^2} \right\} = \frac{1}{2} \sin (2t) . $$
Finally, we put it all together with the shifting property to find
$$ {\mathcal{L}}^{-1} \left\{ \frac{1}{s^2+4s+8} \right\} = {\mathcal{L}}^{-1} \left\{ \frac{1}{{(s+2)}^2+4} \right\} = \frac{1}{2}\,e^{-2t} \sin (2t) . $$

:::

Often, we want to be able to apply the inverse Laplace transform to rational functions, that is, functions of the form
$$ \frac{F(s)}{G(s)} $$
where $F(s)$ and $G(s)$ are polynomials. If $\frac{F(s)}{G(s)}$ is the Laplace transform of an exponential-order function, it goes to zero as $s \to \infty$, and so the degree of $F(s)$ must be smaller than that of $G(s)$. Such rational functions are called *proper rational functions{index-entry:proper rational function}* and we can always apply the method of partial fractions without polynomial division. Of course, we still need to be able to factor the denominator into linear and quadratic terms, which involves finding the roots of the denominator.

## Exercises

:::exercise {exercise-6-1-005} number=6.1.5 answered=no src=ch-laplace.tex:499
PROBLEM:
Find the Laplace transform of $3+t^5+\sin (\pi t)$.
:::

:::exercise {exercise-6-1-006} number=6.1.6 answered=no src=ch-laplace.tex:503
PROBLEM:
Find the Laplace transform of $a+bt+ct^2$ for some constants $a$, $b$, and $c$.
:::

:::exercise {exercise-6-1-007} number=6.1.7 answered=no src=ch-laplace.tex:508
PROBLEM:
Find the Laplace transform of $A \cos (\omega t) + B \sin (\omega t)$.
:::

:::exercise {exercise-6-1-008} number=6.1.8 answered=no src=ch-laplace.tex:512
PROBLEM:
Find the Laplace transform of $\cos^2 (\omega t)$.
:::

:::exercise {exercise-6-1-009} number=6.1.9 answered=no src=ch-laplace.tex:516
PROBLEM:
Find the inverse Laplace transform of $\frac{4}{s^2-9}$.
:::

:::exercise {exercise-6-1-010} number=6.1.10 answered=no src=ch-laplace.tex:520
PROBLEM:
Find the inverse Laplace transform of $\frac{2s}{s^2-1}$.
:::

:::exercise {exercise-6-1-011} number=6.1.11 answered=no src=ch-laplace.tex:524
PROBLEM:
Find the inverse Laplace transform of $\frac{1}{{(s-1)}^2(s+1)}$.
:::

:::exercise {exercise-6-1-012} number=6.1.12 answered=no src=ch-laplace.tex:528
PROBLEM:
Find the Laplace transform of $f(t) = \begin{cases} t & \text{if } \; t \geq 1, \\ 0 & \text{if } \; t < 1. \end{cases}$
:::

:::exercise {exercise-6-1-013} number=6.1.13 answered=no src=ch-laplace.tex:536
PROBLEM:
Find the inverse Laplace transform of $\frac{s}{(s^2+s+2)(s+4)}$.
:::

:::exercise {exercise-6-1-014} number=6.1.14 answered=no src=ch-laplace.tex:540
PROBLEM:
Find the Laplace transform of $\sin\bigl(\omega (t-a)\bigr)$.
:::

:::exercise {exercise-6-1-015} number=6.1.15 answered=no src=ch-laplace.tex:544
PROBLEM:
Find the Laplace transform of $t\sin(\omega t)$. Hint: Several integrations by parts.
:::

:::exercise {exercise-6-1-101} number=6.1.101 answered=yes src=ch-laplace.tex:551
PROBLEM:
Find the Laplace transform of $4{(t+1)}^2$.
SOLUTION:
$\frac{8}{s^3} + \frac{8}{s^2} + \frac{4}{s}$
:::

:::exercise {exercise-6-1-102} number=6.1.102 answered=yes src=ch-laplace.tex:558
PROBLEM:
Find the inverse Laplace transform of $\frac{8}{s^3(s+2)}$.
SOLUTION:
$2t^2-2t+1-e^{-2t}$
:::

:::exercise {exercise-6-1-103} number=6.1.103 answered=yes src=ch-laplace.tex:565
PROBLEM:
Find the Laplace transform of $te^{-t}$. Hint: Shifting property.
SOLUTION:
$\frac{1}{{(s+1)}^2}$
:::

:::exercise {exercise-6-1-104} number=6.1.104 answered=yes src=ch-laplace.tex:572
PROBLEM:
Find the Laplace transform of $\sin(t)e^{-t}$. Hint: Integrate by parts.
SOLUTION:
$\frac{1}{s^2+2s+2}$
:::

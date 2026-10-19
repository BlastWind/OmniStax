# 4.4 Sine and cosine series {sec:sec-scs}

:::note [section-notes]
*Note: 2 lectures, §9.3 in [EP](cite:EP), §10.4 in [BD](cite:BD)*
:::

## Odd and even periodic functions

You may have noticed by now that an odd function has no cosine terms in the Fourier series and an even function has no sine terms in the Fourier series. This observation is not a coincidence. Let us look at even and odd periodic functions in more detail.

Recall that a function $f(t)$ is *odd*{index-entry:odd function} if $f(-t) = -f(t)$. A function $f(t)$ is *even*{index-entry:even function} if $f(-t) = f(t)$. For example, $\cos (n t)$ is even and $\sin (n t)$ is odd. Similarly, the function $t^k$ is even if $k$ is even and odd if $k$ is odd.

:::exercise {exercise-4-4-001} number=4.4.1 answered=no src=ch-fourier-and-pde.tex:2283
PROBLEM:
Take two functions $f(t)$ and $g(t)$ and define their product $h(t) = f(t)g(t)$.

a) Suppose both $f(t)$ and $g(t)$ are odd. Is $h(t)$ odd or even?
b) Suppose one is even and one is odd. Is $h(t)$ odd or even?
c) Suppose both are even. Is $h(t)$ odd or even?

:::

If $f(t)$ and $g(t)$ are both odd, then $f(t)+g(t)$ is odd. Similarly for even functions. On the other hand, if $f(t)$ is odd and $g(t)$ even, then we cannot say anything about the sum $f(t) + g(t)$. In fact, the Fourier series of any function is a sum of an odd function (the sine terms) and an even function (the cosine terms).

In this section, we consider odd and even periodic functions. We have previously defined the $2L$-periodic extension of a function defined on the interval $[-L,L]$. Sometimes we are only interested in the function on the interval $[0,L]$, and it would be convenient to have an odd (resp. even) function. If the function is odd (resp. even), all the cosine (resp. sine) terms disappear. What we will do is take the odd (resp. even) extension of the function to $[-L,L]$ and then extend periodically to a $2L$-periodic function.

Take a function $f(t)$ defined on $[0,L]$. On $(-L,L]$ define the functions
$$ \begin{align*} F_{\text{odd}}(t) & \overset{\text{def}}{=} \begin{cases} f(t) & \text{if } \; \phantom{-}0 \leq t \leq L , \\ -f(-t) & \text{if } \; {-L} < t < 0 , \end{cases} \\ F_{\text{even}}(t) & \overset{\text{def}}{=} \begin{cases} f(t) & \text{if } \; \phantom{-}0 \leq t \leq L , \\ f(-t) & \text{if } \; {-L} < t < 0 . \end{cases} \end{align*} $$
Extend $F_{\text{odd}}(t)$ and $F_{\text{even}}(t)$ to be $2L$-periodic. Then $F_{\text{odd}}(t)$ is called the *{index:odd periodic extension}* of $f(t)$, and $F_{\text{even}}(t)$ is called the *{index:even periodic extension}* of $f(t)$. For the odd extension, we generally assume that $f(0) = f(L) = 0$.

:::exercise {exercise-4-4-002} number=4.4.2 answered=no src=ch-fourier-and-pde.tex:2333
PROBLEM:
Check that $F_{\text{odd}}(t)$ is odd and $F_{\text{even}}(t)$ is even. For $F_{\text{odd}}$, assume $f(0) = f(L) = 0$.
:::

:::example {ex:example-4-4-1} Example 4.4.1
Take the function $f(t) = t\,(1-t)$ defined on $[0,1]$. [Figure 4.12](ref:scs-oddevenextfig) shows the plots of the odd and even periodic extensions of $f(t)$.

> FIGURE {fig:scs-oddevenextfig} number=4.12 src=../../media/scs-ext-odd-even.svg
> alt: Two graphs for t between minus 2 to 2, which are the odd (on the left) and the even (on the right) periodic extensions of t times quantity 1 minus t defined for t between 0 and 1. That is the function on the interval from 0 to 1 is an upside down parabola starting and ending on the t-axis. In the odd extension, the graph is simply composed of alternating upside down and right side up parabolas all starting and ending on the t-axis, forming a roughly sinusoidal shape. On the right, the even extension is simply a series of identical upside down parabolas glued together.
> width: 9in
> caption: Odd and even 2-periodic extension of $f(t) = t\,(1-t)$, $0 \leq t \leq 1$.

:::

## Sine and cosine series

Let us write the Fourier series for an odd $2L$-periodic function $f(t)$. First, we compute the coefficients $a_n$ (including $n=0$) and get
$$ a_n = \frac{1}{L} \int_{-L}^L f(t) \cos \left( \frac{n \pi}{L} t \right) \, dt = 0 . $$
That is, the Fourier series of an odd function has no cosine terms. The integral is zero as $f(t) \cos \left( \frac{n \pi}{L} t \right)$ is an odd function (product of an odd and an even function is odd) and the integral of an odd function over a symmetric interval is zero. The function $f(t) \sin \left( \frac{n \pi}{L} t \right)$ is even as it is the product of two odd functions. The integral of an even function over a symmetric interval $[-L,L]$ is twice the integral of the function over the interval $[0,L]$. So
$$ b_n = \frac{1}{L} \int_{-L}^L f(t) \sin \left( \frac{n \pi}{L} t \right) \, dt = \frac{2}{L} \int_{0}^L f(t) \sin \left( \frac{n \pi}{L} t \right) \, dt . $$
The Fourier series of an odd $f(t)$ is then
$$ \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} t \right) . $$

Now suppose $f(t)$ is an even $2L$-periodic function. For the same exact reasons as above, we find that $b_n = 0$ and
$$ a_n = \frac{2}{L} \int_{0}^L f(t) \cos \left( \frac{n \pi}{L} t \right) \, dt . $$
The formula still works for $n=0$, in which case it becomes
$$ a_0 = \frac{2}{L} \int_{0}^L f(t) \, dt . $$
The Fourier series of an even $f(t)$ is then
$$ \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos \left( \frac{n \pi}{L} t \right) . $$

An interesting consequence is that the coefficients of the Fourier series of an odd (or even) function can be computed by just integrating over the half-interval $[0,L]$. Therefore, we can compute the Fourier series of the odd (or even) extension of a function by computing certain integrals over the interval where the original function is defined.

:::theorem {thm:theorem-4-4-1} Theorem 4.4.1
Let $f(t)$ be a piecewise smooth function defined on $[0,L]$. Then the odd periodic extension of $f(t)$ has the Fourier series
$$ \boxed{~~ F_{\text{odd}}(t) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} t \right) , ~~} $$
where
$$ \boxed{~~ b_n = \frac{2}{L} \int_{0}^L f(t)\, \sin \left( \frac{n \pi}{L} t \right) \, dt . ~~} $$
The even periodic extension of $f(t)$ has the Fourier series
$$ \boxed{~~ F_{\text{even}}(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos \left( \frac{n \pi}{L} t \right) , ~~} $$
where
$$ \boxed{~~ a_n = \frac{2}{L} \int_{0}^L f(t)\, \cos \left( \frac{n \pi}{L} t \right) \, dt . ~~} $$

:::

We call the series $\sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} t\right)$ the *{index:sine series}* of $f(t)$ and we call the series $\frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos \left( \frac{n \pi}{L} t \right)$ the *{index:cosine series}* of $f(t)$. We often do not actually care what happens outside of $[0,L]$. We simply pick whichever series fits our problem better.

It is not necessary to start with the full Fourier series to obtain the sine and cosine series. The sine series is really the eigenfunction expansion of $f(t)$ using eigenfunctions of the eigenvalue problem $x''+\lambda x = 0$, $x(0) = 0$, $x(L) = 0$. The cosine series is the eigenfunction expansion of $f(t)$ using eigenfunctions of the eigenvalue problem $x''+\lambda x = 0$, $x'(0) = 0$, $x'(L) = 0$. We would, therefore, get the same formulas by defining the inner product
$$ \langle f(t), g(t) \rangle = \int_0^L f(t) g(t) \, dt , $$
and following the procedure of [§4.2](ref:4.2#ts-section). This point of view is useful, as we commonly use a specific series that arose because our underlying question led to a certain eigenvalue problem. If the eigenvalue problem is not one of the three we covered so far, you can still do an eigenfunction expansion, generalizing the results of this chapter. We will deal with such a generalization in [chapter 5](ref:5#SL-chapter).

:::example {ex:example-4-4-2} Example 4.4.2
Find the Fourier series of the even periodic extension of the function $f(t) = t^2$ for $0 \leq t \leq \pi$.

We want to write
$$ f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos (n t) , $$
where
$$ a_0 = \frac{2}{\pi} \int_0^\pi t^2 \, dt = \frac{2 \pi^2}{3} , $$
and
$$ \begin{split} a_n & = \frac{2}{\pi} \int_0^\pi t^2 \cos (n t) \, dt = \frac{2}{\pi} \left[ t^2 \frac{1}{n} \sin (nt) \right]_0^\pi - \frac{4}{n\pi} \int_0^\pi t \sin (n t) \, dt \\ & = \frac{4}{n^2\pi} \Bigl[ t \cos (n t) \Bigr]_0^\pi - \frac{4}{n^2\pi} \int_0^\pi \cos (n t) \, dt = \frac{4{(-1)}^n}{n^2} . \end{split} $$
Note that we “detected” the continuity of the extension since the coefficients decay as $\frac{1}{n^2}$. That is, the even periodic extension of $t^2$ has no jump discontinuities. It does have corners, since the derivative, which is an odd function and a sine series, has jumps; it has a Fourier series whose coefficients decay only as $\frac{1}{n}$.

Explicitly, the first few terms of the series for $f(t)$ are
$$ \frac{\pi^2}{3} - 4 \cos (t) + \cos (2t) - \frac{4}{9} \cos (3t) + \cdots $$

:::

:::exercise {exercise-4-4-003} number=4.4.3 answered=no src=ch-fourier-and-pde.tex:2528
PROBLEM:

a) Compute the derivative of the even periodic extension of $f(t)$ above and verify it has jump discontinuities. Use the actual definition of $f(t)$, not its cosine series!
b) Why is it that the derivative of the even periodic extension of $f(t)$ is the odd periodic extension of $f'(t)$?

:::

## Application

Fourier series ties in to the boundary value problems that we studied earlier. Consider the boundary value problem
$$ x''(t) + \lambda\, x(t) = f(t) , \quad 0 < t < L, $$
with the *{index:Dirichlet boundary conditions}* $x(0) = 0$, $x(L) = 0$. The Fredholm alternative ([Theorem 4.1.2](ref:4.1#thm-fredholmsimple)) says that as long as $\lambda$ is not an eigenvalue of the underlying homogeneous problem, there exists a unique solution. Eigenfunctions of this eigenvalue problem are the functions $\sin \left( \frac{n \pi}{L} t \right)$. To find the solution, we first find the Fourier sine series for $f(t)$. We write $x(t)$ also as a sine series, but with unknown coefficients. We substitute the series for $x(t)$ into the equation and solve for the unknown coefficients. If we have the *{index:Neumann boundary conditions}* $x'(0) = 0$, $x'(L) = 0$, we do the same procedure using the cosine series. Let us see how this method works on examples.

:::example {ex:example-4-4-3} Example 4.4.3
Take the boundary value problem
$$ x''(t) + 2 x(t) = f(t) , \quad 0 < t < 1, $$
where $f(t) = t$ on $0 < t < 1$, and satisfying the Dirichlet boundary conditions $x(0) = 0$, $x(1)=0$. We write $f(t)$ as a sine series
$$ f(t) = \sum_{n=1}^\infty c_n \sin (n \pi t) . $$
Compute
$$ c_n = 2 \int_0^1 t \sin (n \pi t) \,dt = \frac{2 \, {(-1)}^{n+1}}{n \pi} . $$
We write $x(t)$ as
$$ x(t) = \sum_{n=1}^\infty b_n \sin (n \pi t) . $$
We plug in to obtain
$$ \begin{split} x''(t) + 2 x(t) & = \underbrace{ \sum_{n=1}^\infty - b_n n^2 \pi^2 \sin (n \pi t) }_{x''} \, + \, 2 \underbrace{ \sum_{n=1}^\infty b_n \sin (n \pi t) }_{x} \\ & = \sum_{n=1}^\infty b_n \bigl(2 - n^2 \pi^2 \bigr) \sin (n \pi t) \\ & = f(t) = \sum_{n=1}^\infty \frac{2\, {(-1)}^{n+1}}{n \pi} \sin (n \pi t) . \end{split} $$
Therefore,
$$ b_n \bigl(2 - n^2 \pi^2\bigr) = \frac{2\,{(-1)}^{n+1}}{n \pi} $$
or
$$ b_n = \frac{2\,{(-1)}^{n+1}}{n \pi (2 - n^2 \pi^2)} . $$
That $2-n^2\pi^2$ is not zero for any $n$, and that we can solve for $b_n$, is precisely because $2$ is not an eigenvalue of the problem. We have thus obtained a Fourier series for the solution
$$ x(t) = \sum_{n=1}^\infty \frac{2\,{(-1)}^{n+1}}{n \pi \,(2 - n^2 \pi^2)} \sin (n \pi t) . $$
See [Figure 4.13](ref:bnd-dirich-graph-fig) for a graph of the solution. Notice that because the eigenfunctions satisfy the boundary conditions, and $x$ is written in terms of the eigenfunctions, then $x$ satisfies the boundary conditions.

> FIGURE {fig:bnd-dirich-graph-fig} number=4.13 src=../../media/bnd-dirich-graph.svg
> alt: A graph of a function in the tx-plane for t between 0 and 1. The graph starts at 0 when t equals 0 and goes down relatively straight for a bit. It then curves upwards, first reaching a minimum of what seems like minus 0.08 before going up back to 0 at t equals 1. The minimum is slightly to the right of center of the figure.
> width: 4.5in
> caption: Plot of the solution of $x''+2x=t$, $x(0)=0$, $x(1)=0$.

:::

:::example {ex:example-4-4-4} Example 4.4.4
We handle the Neumann conditions with cosine series. Take the boundary value problem
$$ x''(t) + 2 x(t) = f(t) , \quad 0 < t < 1, $$
where again $f(t) = t$ on $0 < t < 1$, but now satisfying the Neumann boundary conditions $x'(0) = 0$, $x'(1)=0$. We write $f(t)$ as a cosine series
$$ f(t) = \frac{c_0}{2} + \sum_{n=1}^\infty c_n \cos (n \pi t) , $$
where
$$ c_0 = 2 \int_0^1 t \,dt = 1 , $$
and
$$ c_n = 2 \int_0^1 t \cos (n \pi t) \,dt = \frac{2\bigl({(-1)}^n-1\bigr)}{\pi^2 n^2} = \begin{cases} \frac{-4}{\pi^2 n^2} & \text{if } n \text{ odd} , \\ 0 & \text{if } n \text{ even}. \end{cases} $$
We write $x(t)$ as a cosine series
$$ x(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos (n \pi t) . $$
We plug in to obtain
$$ \begin{split} x''(t) + 2 x(t) & = \left( \sum_{n=1}^\infty - a_n n^2 \pi^2 \cos (n \pi t) \right) + a_0 + 2 \left( \sum_{n=1}^\infty a_n \cos (n \pi t) \right) \\ & = a_0 + \sum_{n=1}^\infty a_n \bigl(2 - n^2 \pi^2 \bigr) \cos (n \pi t) \\ & = f(t) = \frac{1}{2} + \sum_{\substack{n=1\\n~\text{odd}}}^\infty \frac{-4}{\pi^2 n^2} \cos (n \pi t) . \end{split} $$
Therefore, $a_0 = \frac{1}{2}$, $a_n = 0$ for $n$ even ($n \geq 2$), and for $n$ odd, we have
$$ a_n \bigl(2 - n^2 \pi^2\bigr) = \frac{-4}{\pi^2 n^2} , $$
or
$$ a_n = \frac{-4}{n^2 \pi^2 (2 - n^2 \pi^2)} . $$
The Fourier series for the solution $x(t)$ is
$$ x(t) = \frac{1}{4} + \sum_{\substack{n=1\\n~\text{odd}}}^\infty \frac{-4}{n^2 \pi^2 (2 - n^2 \pi^2)} \cos (n \pi t) . $$

:::

## Exercises

:::exercise {exercise-4-4-004} number=4.4.4 answered=no src=ch-fourier-and-pde.tex:2733
PROBLEM:
Take $f(t) = {(t-1)}^2$ defined on $0 \leq t \leq 1$.

a) Sketch the plot of the even periodic extension of $f$.
b) Sketch the plot of the odd periodic extension of $f$.

:::

:::exercise {exercise-4-4-005} number=4.4.5 answered=no src=ch-fourier-and-pde.tex:2741
PROBLEM:
Find the Fourier series of both the odd and even periodic extension of the function $f(t) = {(t-1)}^2$ for $0 \leq t \leq 1$. Can you tell which extension is continuous from the Fourier-series coefficients?
:::

:::exercise {exercise-4-4-006} number=4.4.6 answered=no src=ch-fourier-and-pde.tex:2749
PROBLEM:
Find the Fourier series of both the odd and even periodic extension of the function $f(t) = t$ for $0 \leq t \leq \pi$.
:::

:::exercise {exercise-4-4-007} number=4.4.7 answered=no src=ch-fourier-and-pde.tex:2754
PROBLEM:
Find the Fourier series of the even periodic extension of the function $f(t) = \sin t$ for $0 \leq t \leq \pi$.
:::

:::exercise {exercise-4-4-008} number=4.4.8 answered=no src=ch-fourier-and-pde.tex:2759
PROBLEM:
[2] Consider
$$ x''(t) + 4 x(t) = f(t) , $$
where $f(t) = 1$ on $0 < t < 1$.

a) Solve for the Dirichlet conditions $x(0)=0, x(1) = 0$.
b) Solve for the Neumann conditions $x'(0)=0, x'(1) = 0$.

:::

:::exercise {exercise-4-4-009} number=4.4.9 answered=no src=ch-fourier-and-pde.tex:2772
PROBLEM:
Consider
$$ x''(t) + 9 x(t) = f(t) , $$
for $f(t) = \sin (2\pi t)$ on $0 < t < 1$.

a) Solve for the Dirichlet conditions $x(0)=0, x(1) = 0$.
b) Solve for the Neumann conditions $x'(0)=0, x'(1) = 0$.

:::

:::exercise {exercise-4-4-010} number=4.4.10 answered=no src=ch-fourier-and-pde.tex:2784
PROBLEM:
Consider
$$ x''(t) + 3 x(t) = f(t) , \quad x(0) = 0, \quad x(1) = 0, $$
where $f(t) = \sum_{n=1}^\infty b_n \sin (n \pi t)$. Write the solution $x(t)$ as a Fourier series, where the coefficients are given in terms of $b_n$.
:::

:::exercise {exercise-4-4-011} number=4.4.11 answered=no src=ch-fourier-and-pde.tex:2793
PROBLEM:
Let $f(t) = t^2(2-t)$ for $0 \leq t \leq 2$. Let $F(t)$ be the odd periodic extension. Compute $F(1)$, $F(2)$, $F(3)$, $F(-1)$, $F({9}/{2})$, $F(101)$, $F(103)$. Note: Do **not** compute the sine series.
:::

:::exercise {exercise-4-4-101} number=4.4.101 answered=yes src=ch-fourier-and-pde.tex:2801
PROBLEM:
Let $f(t) = {t}/{3}$ on $0 \leq t < 3$.

a) Find the Fourier series of the even periodic extension.
b) Find the Fourier series of the odd periodic extension.

SOLUTION:
a) ${1}/{2} + \sum\limits_{\substack{n=1\\n\text{ odd}}}^\infty \frac{-4}{\pi^2 n^2} \cos\bigl(\frac{n\pi}{3} t \bigr)$ b) $\sum\limits_{n=1}^\infty \frac{2{(-1)}^{n+1}}{\pi n} \sin\bigl(\frac{n\pi}{3} t \bigr)$
:::

:::exercise {exercise-4-4-102} number=4.4.102 answered=yes src=ch-fourier-and-pde.tex:2822
PROBLEM:
Let $f(t) = \cos(2t)$ on $0 \leq t < \pi$.

a) Find the Fourier series of the even periodic extension.
b) Find the Fourier series of the odd periodic extension.

SOLUTION:
a) $\cos(2t)$ b) $\sum\limits_{\substack{n=1 \\n \text{ odd}}}^\infty \frac{4n}{\pi n^2 - 4 \pi} \sin(n t)$
:::

:::exercise {exercise-4-4-103} number=4.4.103 answered=yes src=ch-fourier-and-pde.tex:2839
PROBLEM:
Let $f(t)$ be defined on $0 \leq t < 1$. Consider the average of the two extensions $g(t) = \frac{F_{\text{odd}}(t)+ F_{\text{even}}(t)}{2}$.

a) What is $g(t)$ if $0 \leq t < 1$ (Justify!)
b) What is $g(t)$ if $-1 < t < 0$ (Justify!)

SOLUTION:
a) $f(t)$ b) $0$
:::

:::exercise {exercise-4-4-104} number=4.4.104 answered=yes src=ch-fourier-and-pde.tex:2854
PROBLEM:
Let $f(t) = \sum_{n=1}^\infty \frac{1}{n^2} \sin(nt)$. Solve $x''- x = f(t)$ for the Dirichlet conditions $x(0) = 0$ and $x(\pi) = 0$.
SOLUTION:
$\sum\limits_{n=1}^\infty \frac{-1}{n^2(1+n^2)} \sin(nt)$
:::

:::exercise {exercise-4-4-105} number=4.4.105 answered=yes src=ch-fourier-and-pde.tex:2862
PROBLEM:
**challenging**
Let $f(t) = t + \sum_{n=1}^\infty \frac{1}{2^n} \sin(nt)$. Solve $x'' + \pi x = f(t)$ for the Dirichlet conditions $x(0) = 0$ and $x(\pi) = 1$. Hint: Note that $\frac{t}{\pi}$ satisfies the given Dirichlet conditions.
SOLUTION:
$\frac{t}{\pi} + \sum\limits_{n=1}^\infty \frac{1}{2^n(\pi-n^2)} \sin(nt)$
:::

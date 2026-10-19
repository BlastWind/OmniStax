# 7.2 Series solutions of linear second-order ODEs {sec:seriessols-section}

:::note [section-notes]
*Note: 1.5 or 2 lectures, §8.2 in [EP](cite:EP), §5.2 and §5.3 in [BD](cite:BD)*
:::

Consider a linear second-order homogeneous ODE of the form
$$ P(x) y'' + Q(x) y' + R(x) y = 0 . $$
Suppose that $P(x)$, $Q(x)$, and $R(x)$ are polynomials. We will try a solution of the form
$$ y = \sum_{k=0}^\infty a_k {(x-x_0)}^k , $$
and solve for the $a_k$ to obtain a solution defined in some interval around $x_0$.

The point $x_0$ is called an *{index:ordinary point}* if $P(x_0) \neq 0$. That is, the functions
$$ \frac{Q(x)}{P(x)} \qquad \text{and} \qquad \frac{R(x)}{P(x)} $$
are defined for $x$ near $x_0$. If $P(x_0) = 0$, then $x_0$ is a *{index:singular point}*. Handling singular points is harder than handling ordinary points and so we now focus only on ordinary points.

:::example {ex:example-7-2-1} Example 7.2.1
We start with a very simple example
$$ y'' - y = 0 . $$
Let us try a power series solution near $x_0 = 0$, which is an ordinary point. Every point is an ordinary point in fact, as the equation is a constant-coefficient one. We already know we should obtain exponentials or the hyperbolic sine and cosine, but let us pretend we do not know this fact.

We try
$$ y = \sum_{k=0}^\infty a_k x^k . $$
If we differentiate, the $k=0$ term is a constant and hence disappears. We get
$$ y' = \sum_{k=1}^\infty k a_k x^{k-1} . $$
We differentiate yet again to obtain (now the $k=1$ term disappears)
$$ y'' = \sum_{k=2}^\infty k(k-1) a_k x^{k-2} . $$
We need to subtract $y$ from $y''$, so we reindex the series for $y''$ (replace $k$ with $k+2$):
$$ y'' = \sum_{k=0}^\infty (k+2)\,(k+1) \, a_{k+2} x^k . $$
Now we plug $y$ and $y''$ into the differential equation
$$ \begin{split} 0 = y''-y & = \Biggl( \sum_{k=0}^\infty (k+2)\,(k+1) \, a_{k+2} x^k \Biggr) - \Biggl( \sum_{k=0}^\infty a_k x^k \Biggr) \\ & = \sum_{k=0}^\infty \,\Bigl( (k+2)\,(k+1) \, a_{k+2} x^k - a_k x^k \Bigr) \\ & = \sum_{k=0}^\infty \,\bigl( (k+2)\,(k+1) \,a_{k+2} - a_k \bigr) \, x^k . \end{split} $$
As $y'' - y$ is supposed to be equal to 0, we know that the coefficients of the resulting series must be equal to 0. Therefore, for every $k=0,1,2,3,\ldots$, we have
$$ (k+2)\,(k+1) \,a_{k+2} - a_k = 0 , \qquad \text{or} \qquad a_{k+2} = \frac{a_k}{(k+2)(k+1)} . $$
The equation above is called a *{index:recurrence relation}* for the coefficients of the power series. It does not matter what $a_0$ or $a_1$ are. They can be arbitrary. But once we pick $a_0$ and $a_1$, all other coefficients are determined by the recurrence relation.

Let us see what the coefficients must be. First, $a_0$ and $a_1$ are arbitrary. Then,
$$ a_2 = \frac{a_0}{2}, \quad a_3 = \frac{a_1}{3 \cdot 2}, \quad a_4 = \frac{a_2}{4 \cdot 3} = \frac{a_0}{4 \cdot 3 \cdot 2}, \quad a_5 = \frac{a_3}{5 \cdot 4} = \frac{a_1}{5 \cdot 4 \cdot 3 \cdot 2}, \quad \ldots $$
For even $k$, that is, $k=2n$, we have
$$ a_k = a_{2n} = \frac{a_0}{(2n)!} . $$
For odd $k$, that is, $k=2n+1$, we have
$$ a_k = a_{2n+1} = \frac{a_1}{(2n+1)!} . $$
We write down the series for the solution
$$ \begin{split} y & = \sum_{k=0}^\infty a_k x^k = \sum_{n=0}^\infty \left( \frac{a_0}{(2n)!} \,x^{2n} + \frac{a_1}{(2n+1)!} \,x^{2n+1} \right) \\ & = a_0 \sum_{n=0}^\infty \frac{1}{(2n)!} \,x^{2n} + a_1 \sum_{n=0}^\infty \frac{1}{(2n+1)!} \,x^{2n+1} . \end{split} $$
We recognize the two series as the hyperbolic sine and cosine. Therefore,
$$ y = a_0 \cosh x + a_1 \sinh x . $$

:::

Of course, in general we will not be able to recognize the series that appears, since usually there will not be any elementary function that matches it. In that case, we will be content with the series.

:::example {ex:example-7-2-2} Example 7.2.2
Let us do a more complex example. Consider *{index:Airy’s equation}*^[Named after the English mathematician [Sir George Biddell Airy](http://en.wikipedia.org/wiki/George_Biddell_Airy) (1801–1892).]:
$$ y'' - xy = 0 , $$
near the point $x_0 = 0$. Note that $x_0 = 0$ is an ordinary point.

[2] We try
$$ y = \sum_{k=0}^\infty a_k x^k . $$
We differentiate twice (as above) to obtain
$$ y'' = \sum_{k=2}^\infty k\,(k-1) \, a_k x^{k-2} . $$
We plug $y$ into the equation:
$$ \begin{split} 0 = y''-xy &= \Biggl( \sum_{k=2}^\infty k\,(k-1) \, a_k x^{k-2} \Biggr) - x \Biggl( \sum_{k=0}^\infty a_k x^k \Biggr) \\ &= \Biggl( \sum_{k=2}^\infty k\,(k-1) \, a_k x^{k-2} \Biggr) - \Biggl( \sum_{k=0}^\infty a_k x^{k+1} \Biggr) . \end{split} $$
We reindex and synchronize the start indexes to make the series possible to sum:
$$ \begin{split} 0 = y''-xy &= \Biggl( 2 a_2 + \sum_{k=1}^\infty (k+2)\,(k+1) \, a_{k+2} x^k \Biggr) - \Biggl( \sum_{k=1}^\infty a_{k-1} x^k \Biggr) \\ &= 2 a_2 + \sum_{k=1}^\infty \Bigl( (k+2)\,(k+1) \, a_{k+2} - a_{k-1} \Bigr) \, x^k . \end{split} $$
As $y''-xy$ is supposed to be $0$, we have $a_2 = 0$, and
$$ (k+2)\,(k+1) \,a_{k+2} - a_{k-1} = 0 , \qquad \text{or} \qquad a_{k+2} = \frac{a_{k-1}}{(k+2)(k+1)} . $$
We have arbitrary constants $a_0$ and $a_1$, and $a_2 = 0$. We compute a few higher coefficients:
$$ \begin{gather*} a_3 = \frac{a_0}{3 \cdot 2}, \quad a_4 = \frac{a_1}{4 \cdot 3}, \quad a_5 = \frac{a_2}{5 \cdot 4} = 0, \quad a_6 = \frac{a_3}{6 \cdot 5} = \frac{a_0}{6 \cdot 5 \cdot 3 \cdot 2}, \\ a_7 = \frac{a_4}{7 \cdot 6} = \frac{a_1}{7 \cdot 6 \cdot 4 \cdot 3}, \quad a_8 = \frac{a_5}{8 \cdot 7} = 0, \quad a_9 = \frac{a_6}{9 \cdot 8} = \frac{a_0}{9 \cdot 8 \cdot 6 \cdot 5 \cdot 3 \cdot 2}, \quad \ldots \end{gather*} $$
We jump in steps of three. For $a_k$ where $k$ is a multiple of $3$, that is, $k=3n$, we notice that
$$ a_{3n} = \frac{a_0}{2 \cdot 3 \cdot 5 \cdot 6 \cdots (3n-1) \cdot (3n)} . $$
For $a_k$ where $k = 3n+1$, we notice
$$ a_{3n+1} = \frac{a_1}{3 \cdot 4 \cdot 6 \cdot 7 \cdots (3n) \cdot (3n+1)} . $$
Finally, since $a_2 = 0$, we have $a_5 = 0$, $a_8 = 0$, $a_{11}=0$, etc. In general, $a_{3n+2} = 0$.

In other words, if we write down the series for $y$, it has two parts
$$ \begin{split} y &= \left( a_0 + \frac{a_0}{6} x^3 + \frac{a_0}{180} x^6 + \cdots + \frac{a_0}{2 \cdot 3 \cdot 5 \cdot 6 \cdots (3n-1) \cdot (3n)} x^{3n} + \cdots \right) \\ &\phantom{=} + \left( a_1 x + \frac{a_1}{12} x^4 + \frac{a_1}{504} x^7 + \cdots + \frac{a_1}{3 \cdot 4 \cdot 6 \cdot 7 \cdots (3n) \cdot (3n+1)} x^{3n+1} + \cdots \right) \\ & = a_0 \left( 1 + \frac{1}{6} x^3 + \frac{1}{180} x^6 + \cdots + \frac{1}{2 \cdot 3 \cdot 5 \cdot 6 \cdots (3n-1) \cdot (3n)} x^{3n} + \cdots \right) \\ &\phantom{=} + a_1 \left( x + \frac{1}{12} x^4 + \frac{1}{504} x^7 + \cdots + \frac{1}{3 \cdot 4 \cdot 6 \cdot 7 \cdots (3n) \cdot (3n+1)} x^{3n+1} + \cdots \right) . \end{split} $$
We define
$$ \begin{align*} y_1(x) &= 1 + \frac{1}{6} x^3 + \frac{1}{180} x^6 + \cdots + \frac{1}{2 \cdot 3 \cdot 5 \cdot 6 \cdots (3n-1) \cdot (3n)} x^{3n} + \cdots, \\ y_2(x) &= x + \frac{1}{12} x^4 + \frac{1}{504} x^7 + \cdots + \frac{1}{3 \cdot 4 \cdot 6 \cdot 7 \cdots (3n) \cdot (3n+1)} x^{3n+1} + \cdots , \end{align*} $$
and write the general solution to the equation as $y(x)= a_0 y_1(x) + a_1 y_2(x)$. If we plug $x=0$ into the power series for $y_1$ and $y_2$, we find $y_1(0) = 1$ and $y_2(0) = 0$. Similarly, $y_1'(0) = 0$ and $y_2'(0) = 1$. Therefore $y = a_0 y_1 + a_1 y_2$ is a solution that satisfies the initial conditions $y(0) = a_0$ and $y'(0) = a_1$.

> FIGURE {fig:ps-airyfig} number=7.3 src=../../media/ps-airy.svg
> alt: Graph of two functions, they both seem to be oscillating up and down for x less than 0, and both seem to go up like an exponential for positive x. One of them goes through the origin with slope 1, one of them goes through the point (0,1) with slope zero.
> width: 4.5in
> caption: The two solutions $y_1$ and $y_2$ to Airy’s equation.

:::

The functions $y_1$ and $y_2$ cannot be written in terms of the elementary functions that you know. See [Figure 7.3](ref:ps-airyfig) for the plot of the solutions $y_1$ and $y_2$. These functions have many interesting properties. For example, they are oscillatory for negative $x$ (like solutions to $y''+y=0$) and for positive $x$ they grow without bound (like solutions to $y''-y=0$).

Sometimes a series solution may turn out to be a polynomial. Let us see an example.

:::example {ex:example-7-2-3} Example 7.2.3
Let us find a solution to the so-called *{index:Hermite’s equation of order $n$}*^[Named after the French mathematician [Charles Hermite](http://en.wikipedia.org/wiki/Hermite) (1822–1901).]:
$$ y'' -2xy' + 2n y = 0 . $$

Let us find a solution around the point $x_0 = 0$. We try
$$ y = \sum_{k=0}^\infty a_k x^k . $$
We differentiate (as above) to obtain
$$ y' = \sum_{k=1}^\infty k a_k x^{k-1} \qquad \text{and} \qquad y'' = \sum_{k=2}^\infty k\,(k-1) \, a_k x^{k-2} . $$

Now we plug into the equation
$$ \begin{split} 0 &= y''-2xy'+2ny \\ &= \Biggl( \sum_{k=2}^\infty k(k-1) a_k x^{k-2} \Biggr) - 2x \Biggl( \sum_{k=1}^\infty k a_k x^{k-1} \Biggr) + 2n \Biggl( \sum_{k=0}^\infty a_k x^k \Biggr) \\ &= \Biggl( \sum_{k=2}^\infty k(k-1) a_k x^{k-2} \Biggr) - \Biggl( \sum_{k=1}^\infty 2k a_k x^k \Biggr) + \Biggl( \sum_{k=0}^\infty 2n a_k x^k \Biggr) \\ &= \Biggl(2a_2+ \sum_{k=1}^\infty (k+2)(k+1) a_{k+2} x^k \Biggr) - \Biggl( \sum_{k=1}^\infty 2k a_k x^k \Biggr) + \Biggl( 2na_0 + \sum_{k=1}^\infty 2n a_k x^k \Biggr) \\ &= 2a_2+2na_0+ \sum_{k=1}^\infty \bigl( (k+2)(k+1) a_{k+2} - 2ka_k + 2n a_k \bigr) x^k . \end{split} $$
As $y''-2xy'+2ny = 0$, we have
$$ (k+2)(k+1) a_{k+2} + ( - 2k+ 2n) a_k = 0 , \qquad \text{or} \qquad a_{k+2} = \frac{(2k-2n)}{(k+2)(k+1)} a_k . $$
This recurrence relation actually includes $a_2 = -na_0$ (which comes about from the constant term $2a_2+2na_0 = 0$). Again, $a_0$ and $a_1$ are arbitrary.
$$ \begin{align*} & a_2 = \frac{-2n}{2 \cdot 1}a_0, \\ & a_3 = \frac{2(1-n)}{3 \cdot 2} a_1, \\ & a_4 = \frac{2(2-n)}{4 \cdot 3} a_2 = \frac{2^2(2-n)(-n)}{4 \cdot 3 \cdot 2 \cdot 1} a_0 , \\ & a_5 = \frac{2(3-n)}{5 \cdot 4} a_3 = \frac{2^2(3-n)(1-n)}{5 \cdot 4 \cdot 3 \cdot 2} a_1 , \quad \ldots \end{align*} $$
We separate the even and odd coefficients to find that
$$ \begin{align*} a_{2m} &=\frac{2^m(-n)(2-n)\cdots(2m-2-n)}{(2m)!} a_0, \\ a_{2m+1} &=\frac{2^m(1-n)(3-n)\cdots(2m-1-n)}{(2m+1)!} a_1 . \end{align*} $$
We write down the two series, one with the even powers and one with the odd:
$$ \begin{align*} y_1(x) & = 1+\frac{2(-n)}{2!} x^2 + \frac{2^2(-n)(2-n)}{4!} x^4 + \frac{2^3(-n)(2-n)(4-n)}{6!} x^6 + \cdots , \\ y_2(x) & = x+\frac{2(1-n)}{3!} x^3 + \frac{2^2(1-n)(3-n)}{5!} x^5 + \frac{2^3(1-n)(3-n)(5-n)}{7!} x^7 + \cdots . \end{align*} $$
Then
$$ y(x) = a_0 y_1(x) + a_1 y_2(x) . $$

We remark that if $n$ is a positive even integer, then $y_1(x)$ is a polynomial as all the coefficients in the series beyond degree $n$ are zero. If $n$ is a positive odd integer, then $y_2(x)$ is a polynomial. For example, if $n=4$, then
$$ y_1(x) = 1 + \frac{2(-4)}{2!} x^2 + \frac{2^2(-4)(2-4)}{4!} x^4 = 1 - 4x^2 + \frac{4}{3} x^4 . $$

:::

## Exercises

In the following exercises, when asked to solve an equation using power series methods, you should find the first few terms of the series, and if possible find a general formula for the $k^{\text{th}}$ coefficient.

:::exercise {exercise-7-2-001} number=7.2.1 answered=no src=ch-power-ser.tex:1128
PROBLEM:
Use power series methods to solve $y''+y = 0$ at the point $x_0 = 1$.
:::

:::exercise {exercise-7-2-002} number=7.2.2 answered=no src=ch-power-ser.tex:1132
PROBLEM:
Use power series methods to solve $y''+4xy = 0$ at the point $x_0 = 0$.
:::

:::exercise {exercise-7-2-003} number=7.2.3 answered=no src=ch-power-ser.tex:1136
PROBLEM:
Use power series methods to solve $y''-xy = 0$ at the point $x_0 = 1$.
:::

:::exercise {exercise-7-2-004} number=7.2.4 answered=no src=ch-power-ser.tex:1140
PROBLEM:
Use power series methods to solve $y''+x^2y = 0$ at the point $x_0 = 0$.
:::

:::exercise {exercise-7-2-005} number=7.2.5 answered=no src=ch-power-ser.tex:1144
PROBLEM:
The methods work for other orders than second order. Try the methods of this section to solve the first-order system $y'-xy = 0$ at the point $x_0 = 0$.
:::

:::exercise {exercise-7-2-006} number=7.2.6 answered=no src=ch-power-ser.tex:1149
PROBLEM:
**{index:Chebyshev’s equation of order $p$}**

a) Solve $(1-x^2)y''-xy' + p^2y = 0$ using power series methods at $x_0=0$.
b) For what $p$ is there a polynomial solution?

:::

:::exercise {exercise-7-2-007} number=7.2.7 answered=no src=ch-power-ser.tex:1158
PROBLEM:
Find a polynomial solution to $(x^2+1) y''-2xy'+2y = 0$ using power series methods.
:::

:::exercise {exercise-7-2-008} number=7.2.8 answered=no src=ch-power-ser.tex:1163
PROBLEM:

a) Use power series methods to solve $(1-x)y''+y = 0$ at the point $x_0 = 0$.
b) Use the solution to part a) to find a solution for $xy''+y=0$ around the point $x_0=1$.

:::

:::exercise {exercise-7-2-101} number=7.2.101 answered=yes src=ch-power-ser.tex:1174
PROBLEM:
Use power series methods to solve $y'' + 2 x^3 y = 0$ at the point $x_0 = 0$.
SOLUTION:
$a_2 = 0$, $a_3 = 0$, $a_4 = 0$, recurrence relation (for $k \geq 5$): $a_k = \frac{- 2 a_{k-5}}{k(k-1)}$, so:
$y(x) = a_0 + a_1 x -\frac{a_0}{10} x^5 - \frac{a_1}{15} x^6 + \frac{a_0}{450} x^{10} + \frac{a_1}{825} x^{11} - \frac{a_0}{47250} x^{15} - \frac{a_1}{99000} x^{16} + \cdots$
:::

[2]

:::exercise {exercise-7-2-102} number=7.2.102 answered=yes src=ch-power-ser.tex:1216
PROBLEM:
**challenging**
Power-series methods also work for nonhomogeneous equations.

a) Use power series methods to solve $y'' - x y = \frac{1}{1-x}$ at the point $x_0 = 0$. Hint: Recall the geometric series.
b) Now solve for the initial condition $y(0)=0$, $y'(0)=0$.

SOLUTION:
a) $a_2 = \frac{1}{2}$, and for $k \geq 3$ we have $a_k = \frac{a_{k-3} + 1}{k(k-1)}$, so
$y(x) = a_0 + a_1 x + \frac{1}{2} x^2 + \frac{a_0 + 1}{6} x^3 + \frac{a_1 + 1}{12} x^4 + \frac{3}{40} x^5 + \frac{a_0 + 7}{180} x^6 + \frac{a_1 + 13}{504} x^7 + \frac{43}{2240} x^8 + \frac{a_0 + 187}{12960} x^9 + \frac{a_1 + 517}{45360} x^{10} + \cdots$
b) $y(x) = \frac{1}{2} x^2 + \frac{1}{6} x^3 + \frac{1}{12} x^4 + \frac{3}{40} x^5 + \frac{7}{180} x^6 + \frac{13}{504} x^7 + \frac{43}{2240} x^8 + \frac{187}{12960} x^9 + \frac{517}{45360} x^{10} + \cdots$
:::

:::exercise {exercise-7-2-103} number=7.2.103 answered=yes src=ch-power-ser.tex:1280
PROBLEM:
Attempt to solve $x^2 y'' - y = 0$ at $x_0 = 0$ using the power series method of this section ($x_0$ is a singular point). Can you find at least one solution? Can you find more than one solution?
SOLUTION:
Applying the method of this section directly we obtain $a_k = 0$ for all $k$ and so $y(x) = 0$ is the only solution we find.
:::

# 2.3 Higher-order linear ODEs {sec:sec-hol}

:::note [section-notes]
*Note: somewhat more than 1 lecture, §3.2 and §3.3 in [EP](cite:EP), §4.1 and §4.2 in [BD](cite:BD)*
:::

We briefly study higher-order equations. Equations appearing in applications tend to be second-order. Higher-order equations do appear from time to time, but generally the world around us is “second-order.”

The basic results about linear ODEs of higher order are essentially the same as for second-order equations, with 2 replaced by $n$. The important concept of linear independence is somewhat more complicated when more than two functions are involved. For higher-order constant-coefficient ODEs, the methods developed are also somewhat harder to apply, but we will not dwell on these complications. It is also possible to use the methods for systems of linear equations from [chapter 3](ref:3#sys-chapter) to solve higher-order constant-coefficient equations.

Consider a general homogeneous linear equation
$$ y^{(n)} + p_{n-1}(x)y^{(n-1)} + \cdots + p_1(x) y' + p_0(x) y = 0 . $$ {eq:hol-eqlinhom} number=2.4

:::theorem {thm:theorem-2-3-1} Theorem 2.3.1 (Superposition)
{index-entry:superposition} If $y_1$, $y_2$, …, $y_n$ are solutions of the homogeneous equation [(2.4)](ref:hol-eqlinhom), then
$$ y(x) = C_1 y_1(x) + C_2 y_2(x) + \cdots + C_n y_n(x) $$
also solves [(2.4)](ref:hol-eqlinhom) for arbitrary constants $C_1, C_2, \ldots, C_n$.
:::

That is, a *{index:linear combination}* of solutions to [(2.4)](ref:hol-eqlinhom) is a solution to [(2.4)](ref:hol-eqlinhom). There is also the existence and uniqueness theorem for linear equations, including nonhomogeneous ones.

:::theorem {thm:theorem-2-3-2} Theorem 2.3.2 (Existence and uniqueness)
{index-entry:existence and uniqueness} Suppose $p_0, p_1, \ldots, p_{n-1}$, and $f$ are continuous functions on some interval $I$, $a$ is a number in $I$, and $b_0, b_1, \ldots, b_{n-1}$ are constants. Then the equation
$$ y^{(n)} + p_{n-1}(x)y^{(n-1)} + \cdots + p_1(x) y' + p_0(x) y = f(x) $$
has exactly one solution $y(x)$ defined on the same interval $I$ satisfying the initial conditions
$$ y(a) = b_0, \quad y'(a) = b_1, \quad \ldots, \quad y^{(n-1)}(a) = b_{n-1} . $$

:::

## Linear independence

When we had two functions $y_1$ and $y_2$, we said they were linearly independent if one was not a multiple of the other. Same idea holds for $n$ functions, although in this case it is easier to state as follows. The functions $y_1$, $y_2$, …, $y_n$ are *{index:linearly independent}* if the equation
$$ c_1 y_1 + c_2 y_2 + \cdots + c_n y_n = 0 $$
has only the trivial solution $c_1 = c_2 = \cdots = c_n = 0$, where the equation must hold for all $x$. If we can solve the equation with some constants $c_1,c_2,\ldots,c_n$, where for example $c_1 \neq 0$, then we can solve for $y_1$ as a linear combination of the others. If the functions are not linearly independent, they are *{index:linearly dependent}*.

:::example {ex:example-2-3-1} Example 2.3.1
Verify that $e^x, e^{2x}, e^{3x}$ are linearly independent.

Let us give several ways to show this fact. Many textbooks (including [EP](cite:EP) and [F](cite:F)) introduce Wronskians, but it is difficult to see why they work and they are not really necessary here.

Consider
$$ c_1 e^x + c_2 e^{2x} + c_3 e^{3x} = 0. $$
We use rules of exponentials and write $z = e^x$. Hence $z^2 = e^{2x}$ and $z^3 = e^{3x}$. Then we have
$$ c_1 z + c_2 z^2 + c_3 z^3 = 0. $$
The left-hand side is a third degree polynomial in $z$. It is either identically zero, or it has at most 3 zeros. Therefore, it is identically zero, $c_1 = c_2 = c_3 = 0$, and the functions are linearly independent.

Let us try another way. As before we write
$$ c_1 e^x + c_2 e^{2x} + c_3 e^{3x} = 0. $$
This equation has to hold for all $x$. We divide through by $e^{3x}$ to get
$$ c_1 e^{-2x} + c_2 e^{-x} + c_3 = 0. $$
As the equation is true for all $x$, let $x \to \infty$. After taking the limit we see that $c_3 = 0$. Hence our equation becomes
$$ c_1 e^x + c_2 e^{2x} = 0. $$
Rinse, repeat!

How about yet another way? We again write
$$ c_1 e^x + c_2 e^{2x} + c_3 e^{3x} = 0. $$
We can evaluate the equation and its derivatives at different values of $x$ to obtain equations for $c_1$, $c_2$, and $c_3$. Let us first divide by $e^{x}$ for simplicity.
$$ c_1 + c_2 e^{x} + c_3 e^{2x} = 0. $$
We set $x=0$ to get the equation $c_1 + c_2 + c_3 = 0$. Now differentiate both sides
$$ c_2 e^{x} + 2 c_3 e^{2x} = 0 . $$
We set $x=0$ to get $c_2 + 2c_3 = 0$. We divide by $e^x$ again and differentiate to get $2 c_3 e^{x} = 0$. It is clear that $c_3$ is zero. Then $c_2$ must be zero as $c_2 = -2c_3$, and $c_1$ must be zero because $c_1 + c_2 + c_3 = 0$.

There is no one best way to do it. All of these methods are perfectly valid. The important thing is to understand why the functions are linearly independent.
:::

:::example {ex:example-2-3-2} Example 2.3.2
On the other hand, the functions $e^x$, $e^{-x}$, and $\cosh x$ are linearly dependent. Simply apply definition of the hyperbolic cosine:
$$ \cosh x = \frac{e^x + e^{-x}}{2} \qquad \text{or} \qquad 2 \cosh x - e^x - e^{-x} = 0. $$

:::

Once we have enough linearly independent solutions, we have the general solution to the homogeneous equation, just as we did for second-order equations.

:::theorem {thm:theorem-2-3-3} Theorem 2.3.3
If $y_1$, $y_2$, …, $y_n$ are linearly independent solutions of the homogeneous equation [(2.4)](ref:hol-eqlinhom), then the general solution to [(2.4)](ref:hol-eqlinhom) can be written as
$$ y(x) = C_1 y_1(x) + C_2 y_2(x) + \cdots + C_n y_n(x) . $$

:::

## Constant-coefficient higher-order ODEs

When we have a higher-order constant-coefficient homogeneous linear equation, the song and dance is exactly the same as it was for second order. We just need to find more solutions. If the equation is $n^{\text{th}}$-order, we need to find $n$ linearly independent solutions. It is best seen by example.

:::example {ex:example-2-3-3} Example 2.3.3
Find the general solution to
$$ y''' - 3 y'' - y' + 3y = 0 . $$ {eq:hol-cceq1} number=2.5

Try: $y = e^{rx}$. We plug in and get
$$ \underbrace{r^3 e^{rx}}_{y'''} - 3 \underbrace{r^2 e^{rx}}_{y''} - \underbrace{r e^{rx}}_{y'} + 3 \underbrace{e^{rx}}_{y} = 0 . $$
We divide through by $e^{rx}$. Then
$$ r^3 - 3 r^2 - r + 3 = 0 . $$
The trick now is to find the roots. There is a formula for the roots of degree 3 and 4 polynomials, but it is very complicated. There is no formula for higher degree polynomials. That does not mean that the roots do not exist. There are always $n$ roots for an $n^{\text{th}}$ degree polynomial. They may be repeated{index-entry:repeated roots} and they may be complex. Computers are pretty good at finding roots approximately for reasonable size polynomials.

A good place to start is to plot the polynomial and check where it is zero. We can also simply try plugging in. We just start plugging in numbers $r=-2,-1,0,1,2,\ldots$ and see if we get a hit (we can also try complex numbers). Even if we do not get a hit, we may get an indication of where the root is. For example, we plug $r=-2$ into our polynomial and get $-15$; we plug in $r=0$ and get $3$. That means there is a root between $r=-2$ and $r=0$, because the sign changed. If we find one root, say $r_1$, then we know $(r-r_1)$ is a factor of our polynomial. Polynomial long division can then be used.

A good strategy is to begin with $r=0$, $1$, or $-1$. These are easy to compute. Our polynomial has two such roots, $r_1 = -1$ and $r_2 = 1$. There should be 3 roots and the last root is reasonably easy to find. The constant term in a monic^[The word monic means that the coefficient of the top degree $r^d$, in our case $r^3$, is $1$.] polynomial such as this is the product of the negations of all the roots because $r^3 - 3 r^2 - r + 3 = (r-r_1)(r-r_2)(r-r_3)$. So
$$ 3 = (-r_1)(-r_2)(-r_3) = (1)(-1)(-r_3) = r_3 . $$
You should check that $r_3 = 3$ really is a root. Hence $e^{-x}$, $e^{x}$ and $e^{3x}$ are solutions to [(2.5)](ref:hol-cceq1). They are linearly independent as can easily be checked, and there are 3 of them, which happens to be exactly the number we need. So the general solution is
$$ y = C_1 e^{-x} + C_2 e^{x} + C_3 e^{3x} . $$

Suppose we were given some initial conditions $y(0) = 1$, $y'(0) = 2$, and $y''(0) = 3$. Then
$$ \begin{aligned} 1 = y(0) & = C_1 + C_2 + C_3 , \\ 2 = y'(0) & = -C_1 + C_2 + 3C_3 , \\ 3 = y''(0) & = C_1 + C_2 + 9C_3 . \end{aligned} $$
It is possible to find the solution by high school algebra, but it would be a pain. The sensible way to solve a system of equations such as this is to use matrix algebra, see [§3.2](ref:3.2#sec-matrix) or [appendix A](ref:A#linalg-appendix). For now we note that the solution is $C_1 = -{1}/{4}$, $C_2 = 1$, and $C_3 = {1}/{4}$. The specific solution to the ODE is
$$ y = \frac{-1}{4}\, e^{-x} + e^x + \frac{1}{4}\, e^{3x} . $$

:::

Next, suppose that we have real roots, but they are repeated. Let us say we have a root $r$ repeated $k$ times. In the spirit of the second-order solution, and for the same reasons, we have the solutions
$$ e^{rx}, \quad xe^{rx}, \quad x^2 e^{rx}, \quad \ldots, \quad x^{k-1} e^{rx} . $$
We take a linear combination of these solutions to find the general solution.

:::example {ex:example-2-3-4} Example 2.3.4
Solve
$$ y^{(4)} - 3 y''' + 3 y'' - y' = 0 . $$

We note that the characteristic equation is
$$ r^4 - 3r^3 + 3r^2 -r = 0 . $$
By inspection, we note that $r^4 - 3r^3 + 3r^2 -r = r{(r-1)}^3$. Hence the roots given with {index:multiplicity} are $r = 0, 1, 1, 1$. Thus the general solution is
$$ y = \underbrace{(C_1 + C_2 x + C_3 x^2)\, e^x}_{\text{terms coming from } r=1} + \underbrace{C_4}_{\text{from } r=0} . $$

:::

The case of complex roots is similar to second-order equations. Complex roots always come in pairs $r = \alpha \pm i \beta$. Suppose we have two such complex roots, each repeated $k$ times. The corresponding solution is
$$ ( C_0 + C_1 x + \cdots + C_{k-1} x^{k-1} ) \, e^{\alpha x} \cos (\beta x) + ( D_0 + D_1 x + \cdots + D_{k-1} x^{k-1} ) \, e^{\alpha x} \sin (\beta x) , $$
where $C_0$, …, $C_{k-1}$, $D_0$, …, $D_{k-1}$ are arbitrary constants.

:::example {ex:example-2-3-5} Example 2.3.5
Solve
$$ y^{(4)} - 4 y''' + 8 y'' - 8 y' + 4y = 0 . $$

The characteristic equation is
$$ \begin{align*} r^4 - 4 r^3 + 8 r^2 - 8 r + 4 & = 0 , \\ {(r^2-2r+2)}^2 & = 0 , \\ {\bigl({(r-1)}^2+1\bigr)}^2 & = 0 . \end{align*} $$
Hence the roots are $1 \pm i$, both with multiplicity 2. Hence the general solution to the ODE is
$$ y = ( C_1 + C_2 x ) \, e^{x} \cos x + ( C_3 + C_4 x ) \, e^{x} \sin x . $$
The way we solved the characteristic equation above is really by guessing or by inspection. It is not so easy in general. We could also have asked a computer or an advanced calculator for the roots.
:::

## Exercises

:::exercise {exercise-2-3-001} number=2.3.1 answered=no src=ch-higher-order-ode.tex:1272
PROBLEM:
Find the general solution for $y''' - y'' + y' - y = 0$.
:::

:::exercise {exercise-2-3-002} number=2.3.2 answered=no src=ch-higher-order-ode.tex:1276
PROBLEM:
Find the general solution for $y^{(4)} - 5 y''' + 6 y'' = 0$.
:::

:::exercise {exercise-2-3-003} number=2.3.3 answered=no src=ch-higher-order-ode.tex:1280
PROBLEM:
Find the general solution for $y''' + 2 y'' + 2 y' = 0$.
:::

:::exercise {exercise-2-3-004} number=2.3.4 answered=no src=ch-higher-order-ode.tex:1284
PROBLEM:
Suppose the characteristic equation for an ODE is ${(r-1)}^2{(r-2)}^2 = 0$.

a) Find such a differential equation.
b) Find its general solution.

:::

:::exercise {hol-eqfromsolex} number=2.3.5 answered=no src=ch-higher-order-ode.tex:1294 label=hol:eqfromsolex
PROBLEM:
Suppose that a fourth-order equation has a solution $y = 2 e^{4x} x \cos x$.

a) Find such an equation.
b) Find the initial conditions that the given solution satisfies.

:::

:::exercise {exercise-2-3-006} number=2.3.6 answered=no src=ch-higher-order-ode.tex:1307
PROBLEM:
Find the general solution for the equation of [Exercise 2.3.5](ref:hol-eqfromsolex).
:::

:::exercise {exercise-2-3-007} number=2.3.7 answered=no src=ch-higher-order-ode.tex:1311
PROBLEM:
Let $f(x) = e^x - \cos x$, $g(x) = e^x + \cos x$, and $h(x) = \cos x$. Are $f(x)$, $g(x)$, and $h(x)$ linearly independent? If so, show it, if not, find a linear combination that works.
:::

:::exercise {exercise-2-3-008} number=2.3.8 answered=no src=ch-higher-order-ode.tex:1319
PROBLEM:
Let $f(x) = 0$, $g(x) = \cos x$, and $h(x) = \sin x$. Are $f(x)$, $g(x)$, and $h(x)$ linearly independent? If so, show it, if not, find a linear combination that works.
:::

:::exercise {exercise-2-3-009} number=2.3.9 answered=no src=ch-higher-order-ode.tex:1327
PROBLEM:
Are $x$, $x^2$, and $x^4$ linearly independent? If so, show it, if not, find a linear combination that gives $0$.
:::

:::exercise {exercise-2-3-010} number=2.3.10 answered=no src=ch-higher-order-ode.tex:1333
PROBLEM:
Are $e^x$, $xe^x$, and $x^2e^x$ linearly independent? If so, show it, if not, find a linear combination that gives $0$.
:::

:::exercise {exercise-2-3-011} number=2.3.11 answered=no src=ch-higher-order-ode.tex:1339
PROBLEM:
Find an equation such that $y=xe^{-2x}\sin(3x)$ is a solution.
:::

:::exercise {exercise-2-3-101} number=2.3.101 answered=yes src=ch-higher-order-ode.tex:1345
PROBLEM:
Find the general solution of $y^{(5)}-y^{(4)}=0$.
SOLUTION:
$y=C_1 e^x +C_2 x^3 + C_3 x^2 +C_4 x + C_5$
:::

:::exercise {exercise-2-3-102} number=2.3.102 answered=yes src=ch-higher-order-ode.tex:1352
PROBLEM:
Suppose that the characteristic equation of a third-order differential equation has roots $\pm 2i$ and 3.

a) What is the characteristic equation?
b) Find the corresponding differential equation.
c) Find the general solution.

SOLUTION:
a) $r^3-3r^2+4r-12 = 0$ b) $y'''-3y''+4y'-12y = 0$ c) $y = C_1 e^{3x} + C_2 \sin(2x) + C_3 \cos(2x)$
:::

:::exercise {exercise-2-3-103} number=2.3.103 answered=yes src=ch-higher-order-ode.tex:1375
PROBLEM:
Solve $1001y'''+3.2y''+\pi y'-\sqrt{4} y = 0$, $y(0)=0$, $y'(0) = 0$, $y''(0) = 0$.
SOLUTION:
$y=0$
:::

:::exercise {exercise-2-3-104} number=2.3.104 answered=yes src=ch-higher-order-ode.tex:1383
PROBLEM:
Are $e^{x}$, $e^{x+1}$, $e^{2x}$, $\sin(x)$ linearly independent? If so, show it, if not find a linear combination that gives $0$.
SOLUTION:
No. $e^1 e^x - e^{x+1} = 0$.
:::

:::exercise {exercise-2-3-105} number=2.3.105 answered=yes src=ch-higher-order-ode.tex:1391
PROBLEM:
Are $\sin(x)$, $x$, $x\sin(x)$ linearly independent? If so, show it, if not find a linear combination that gives $0$.
SOLUTION:
Yes. (Hint: First note that $\sin(x)$ is bounded. Then note that $x$ and $x\sin(x)$ cannot be multiples of each other.)
:::

:::exercise {exercise-2-3-106} number=2.3.106 answered=yes src=ch-higher-order-ode.tex:1400
PROBLEM:
Find an equation such that $y=\cos(x)$, $y=\sin(x)$, $y=e^x$ are solutions.
SOLUTION:
$y'''-y''+y'-y=0$
:::

# 2.5 Nonhomogeneous equations {sec:sec-nonhom}

:::note [section-notes]
*Note: 2 lectures, §3.5 in [EP](cite:EP), §3.5 and §3.6 in [BD](cite:BD)*
:::

## Solving nonhomogeneous equations

We have solved linear constant-coefficient homogeneous equations. What about nonhomogeneous linear ODEs? For example, the equations for forced mechanical vibrations. That is, consider an equation such as
$$ y'' + 5y'+ 6y = 2x+1 . $$ {eq:eq3-5-nh} number=2.6
We will write $Ly = 2x+1$ when the exact form of the operator is not important. We solve [(2.6)](ref:eq3-5-nh) in the following manner. First, we find the general solution $y_c$ to the *{index:associated homogeneous equation}*
$$ y'' + 5y'+ 6y = 0 . $$ {eq:eq3-5-h} number=2.7
We call $y_c$ the *{index:complementary solution}*. Next, we find a single *{index:particular solution}* $y_p$ to [(2.6)](ref:eq3-5-nh) in some way. Then
$$ y = y_c + y_p $$
is the general solution to [(2.6)](ref:eq3-5-nh). We have $L y_c = 0$ and $L y_p = 2x+1$. As $L$ is a *{index:linear operator}*, we verify that $y$ is a solution: $L y = L ( y_c + y_p) = L y_c + L y_p = 0 + (2x+1)$.

Let us see why we obtain the *general* solution. Let $y_p$ and $\tilde{y}_p$ be two different particular solutions to [(2.6)](ref:eq3-5-nh). Write the difference as $w = y_p - \tilde{y}_p$. Then plug $w$ into the left-hand side of the equation to get
$$ w'' + 5w'+ 6w = (y_p'' + 5y_p'+ 6y_p) - (\tilde{y}_p'' + 5\tilde{y}_p'+ 6\tilde{y}_p) = (2x+1) - (2x+1) = 0 . $$
With the operator notation, the calculation becomes even clearer. As $L$ is a linear operator,
$$ Lw = L(y_p - \tilde{y}_p) = Ly_p - L\tilde{y}_p = (2x+1)-(2x+1) = 0 . $$
So $w = y_p - \tilde{y}_p$ is a solution to [(2.7)](ref:eq3-5-h), that is, $Lw = 0$. Any two solutions of [(2.6)](ref:eq3-5-nh) differ by a solution to the homogeneous equation [(2.7)](ref:eq3-5-h). The solution $y = y_c + y_p$ includes *all* solutions to [(2.6)](ref:eq3-5-nh), since $y_c$ is the general solution to the associated homogeneous equation.

:::theorem {thm:theorem-2-5-1} Theorem 2.5.1
Let $Ly=f(x)$ be a linear ODE (not necessarily constant-coefficient). Let $y_c$ be the complementary solution (the general solution to the associated homogeneous equation $Ly = 0$) and let $y_p$ be any particular solution to $Ly=f(x)$. Then the general solution to $Ly=f(x)$ is
$$ y = y_c + y_p. $$

:::

The moral of the story is that we can find the particular solution in any old way. If we find a different particular solution (by a different method or by simply guessing), then we still get the same general solution. The formula may look different, and the constants we have to choose to satisfy the initial conditions may be different, but it is the same solution.

## Undetermined coefficients
{index-entry:undetermined coefficients}

The trick is to somehow, in a smart way, guess one particular solution to [(2.6)](ref:eq3-5-nh). Note that $2x+1$ is a polynomial, and the left-hand side of the equation will be a polynomial if we let $y$ be a polynomial of the same degree. Let us try
$$ y_p = Ax + B . $$
We plug $y_p$ into the left-hand side to obtain
$$ \begin{split} y_p'' + 5y_p'+ 6y_p & = (Ax+B)'' + 5(Ax+B)' + 6(Ax+B) \\ & = 0 + 5A + 6Ax + 6B = 6Ax+ (5A+6B) . \end{split} $$
So $6Ax+(5A+6B) = 2x+1$. Therefore, $A = {1}/{3}$ and $B = {-1}/{9}$. That means $y_p = \frac{1}{3}\, x - \frac{1}{9} = \frac{3x-1}{9}$. Solving the complementary problem (exercise!), we get
$$ y_c = C_1 e^{-2x} + C_2 e^{-3x}. $$
Hence the general solution to [(2.6)](ref:eq3-5-nh) is
$$ y = C_1 e^{-2x} + C_2 e^{-3x} + \frac{3x-1}{9} . $$
Now suppose we are further given some initial conditions. For example, $y(0) = 0$ and $y'(0) = {1}/{3}$. First find $y' = - 2C_1 e^{-2x} - 3C_2 e^{-3x} + {1}/{3}$. Then
$$ 0 = y(0) = C_1 + C_2 -\frac{1}{9} , \qquad \frac{1}{3} = y'(0) = - 2C_1 - 3C_2 + \frac{1}{3} . $$
We solve to get $C_1 = {1}/{3}$ and $C_2 = {-2}/{9}$. The particular solution we want is
$$ y = \frac{1}{3} e^{-2x} - \frac{2}{9} e^{-3x} + \frac{3x-1}{9} = \frac{3 e^{-2x} - 2 e^{-3x} + 3x-1}{9} . $$

:::exercise {exercise-2-5-001} number=2.5.1 answered=no src=ch-higher-order-ode.tex:2212
PROBLEM:
Check that $y$ really solves the equation [(2.6)](ref:eq3-5-nh) and the given initial conditions.
:::

Note: A common mistake is to solve for constants using the initial conditions with $y_c$ and only add the particular solution $y_p$ after that. That will *not* work. You need to first compute $y = y_c + y_p$ and *only then* solve for the constants using the initial conditions.

Another important remark is that you should not forget the lower degree terms, even if they do not appear on the right-hand side. If the equation is $Ly=x^3+1$, you must try $y_p = Ax^3+Bx^2+Cx+D$, even though there is no $x^2$ nor $x$ on the right-hand side of the equation. It is a general polynomial of degree 3 that must be tried.

A right-hand side consisting of exponentials, sines, and cosines can be handled similarly. For example,
$$ y''+2y'+2y = \cos (2x) . $$
Let us find some $y_p$. We start by guessing the solution includes some multiple of $\cos(2x)$. We may have to also add a multiple of $\sin (2x)$ to our guess since derivatives of cosine are sines. We try
$$ y_p = A \cos (2x) + B \sin (2x) . $$
We plug $y_p$ into the equation and we get
$$ \begin{gather*} \underbrace{-4 A \cos (2x) - 4 B \sin (2x)}_{y_p''} +2 \underbrace{\bigl(-2A \sin (2x) + 2B \cos (2x)\bigr)}_{y_p'} \\ + 2 \underbrace{\bigl(A \cos (2x) + B \sin (2x)\bigr)}_{y_p} = \cos (2x) , \end{gather*} $$
or
$$ (-4A+4B+2A) \cos(2x) + (-4B-4A+2B) \sin(2x) = \cos(2x) . $$
The left-hand side must equal the right-hand side. Namely, $-4A + 4B + 2A = 1$ and $-4B - 4A + 2B = 0$. So $-2A+4B =1$ and $2A+B=0$ and hence $A={-1}/{10}$ and $B={1}/{5}$. So
$$ y_p = A \cos (2x) + B \sin (2x) = \frac{-\cos (2x) + 2 \sin (2x)}{10} . $$

Similarly, if the right-hand side contains exponentials, we try exponentials. If
$$ Ly = e^{3x}, $$
we try $y_p = A e^{3x}$ as our guess and try to solve for $A$.

When the right-hand side is a multiple of sines, cosines, exponentials, and polynomials, we can use the product rule for differentiation to come up with a guess. We need to guess a form for $y_p$ such that $Ly_p$ is of the same form, and has all the terms needed for the right-hand side. For example,
$$ Ly = (1+3x^2)\,e^{-x}\cos (\pi x) . $$
For this equation, we guess
$$ y_p = (A + Bx + Cx^2)\,e^{-x} \cos (\pi x) + (D + Ex + Fx^2)\,e^{-x} \sin (\pi x) . $$
We plug in and then hopefully get equations that we can solve for $A$, $B$, $C$, $D$, $E$, and $F$. As you can see this can make for a very long and {index:tedious} calculation very quickly. C’est {index:la vie}!

There is one hiccup in all this. It could be that our guess actually solves the associated homogeneous equation. That is, consider
$$ y'' - 9y = e^{3x} . $$
We would love to guess $y_p = Ae^{3x}$, but if we plug this into the left-hand side of the equation, we get
$$ y_p''-9y_p = 9Ae^{3x} - 9Ae^{3x} = 0 \neq e^{3x} . $$
There is no way to choose $A$ to make the left-hand side $e^{3x}$. The trick is to multiply our guess by $x$ to get rid of duplication with the complementary solution. First, we find $y_c$ (solution to $Ly = 0$),
$$ y_c = C_1 e^{-3x} + C_2 e^{3x} . $$
We note that the $e^{3x}$ term is a duplicate with our desired guess. We modify our guess to $y_p = Axe^{3x}$ so that there is no duplication anymore. Let us try: $y_p' = Ae^{3x} + 3Axe^{3x}$ and $y_p'' = 6Ae^{3x} + 9Axe^{3x}$, so
$$ y_p'' -9y_p = 6Ae^{3x} + 9Axe^{3x} - 9Axe^{3x} = 6Ae^{3x} . $$
Thus $6Ae^{3x}$ is supposed to equal $e^{3x}$. Hence, $6A = 1$ and so $A={1}/{6}$. We can now write the general solution as
$$ y = y_c + y_p = C_1 e^{-3x} + C_2 e^{3x} + \frac{1}{6}\,xe^{3x} . $$

It is possible that multiplying by $x$ does not get rid of all duplication. Consider,
$$ y''-6y'+9y = e^{3x} . $$
The complementary solution is $y_c = C_1 e^{3x} + C_2 x e^{3x}$. Guessing $y_p=A xe^{3x}$ does not get us anywhere. We want to guess $y_p = Ax^2e^{3x}$. Basically, we multiply our guess by $x$ until all duplication is gone. *But no more!* Multiplying too many times will not work.

Also make sure to look for duplication in the entire expression you try. For the equation $y''-y=xe^x$, where $y_c = C_1e^x + C_2e^{-x}$, it is not enough that $xe^x$ does not appear in $y_c$. Trying $y_p=Ae^x+Bxe^x$ will not work as $e^x$ appears in $y_c$, you must try $y_p=Axe^x+Bx^2e^x$.

Finally, what if the right-hand side has several terms? For instance,
$$ Ly = e^{2x} + \cos x . $$
In this case, we find $u$ that solves $Lu = e^{2x}$ and $v$ that solves $Lv = \cos x$ (that is, do each term separately). If we set $y_p = u+ v$, then we find our desired particular solution. That is because $L$ is linear; we have $Ly_p = L(u+v) = Lu + Lv = e^{2x} + \cos x$.

## Variation of parameters

The method of undetermined coefficients works for many basic problems that crop up. But it does not work all the time. It only works when the right-hand side of the equation $Ly = f(x)$ has finitely many linearly independent derivatives, so that we can write a guess that consists of them all. Some equations are a bit tougher. Consider
$$ y''+y = \tan x . $$
Each new derivative of $\tan x$ looks completely different and cannot be written as a linear combination of the previous derivatives. If we start differentiating $\tan x$, we get:
$$ \begin{gather*} \sec^2 x, \quad 2\sec^2 x \, \tan x, \quad 4 \sec^2 x \, \tan^2 x + 2 \sec^4 x, \\ 8 \sec^2 x \, \tan^3 x + 16 \sec^4 x \, \tan x, \quad 16\sec^2 x \, \tan^4 x + 88 \sec^4 x \tan^2 x + 16 \sec^6 x, \quad \ldots \end{gather*} $$

This equation calls for a different method. We present the method of *{index:variation of parameters}*, which handles any equation of the form $Ly = f(x)$, provided we can solve certain integrals. For simplicity, we restrict ourselves to second-order constant-coefficient equations, but the method works for higher-order equations just as well (the computations become more {index:tedious}). The method also works for equations with nonconstant coefficients, provided we can solve the associated homogeneous equation.

The details below will work for any equation of the form $y''+p(x)y' +q(x)y = f(x)$, but perhaps it is best to explain the method with a specific example. Consider the equation
$$ Ly = y''+y = \tan x . $$
First we find the complementary solution (solution to $Ly_c = 0$). We get $y_c = C_1 y_1 + C_2 y_2$, where $y_1 = \cos x$ and $y_2 = \sin x$. To find a particular solution to the nonhomogeneous equation, the trick to this method is to try
$$ y_p = y = u_1 y_1 + u_2 y_2 , $$
where $u_1$ and $u_2$ are *functions* and not constants. We are trying to satisfy $Ly = \tan x$. That gives us one condition on the functions $u_1$ and $u_2$. Compute (note the product rule!)
$$ y' = (u_1' y_1 + u_2' y_2) + (u_1 y_1' + u_2 y_2'). $$
We can still impose one more condition at our discretion to simplify computations (we have two unknown functions, so we should be allowed two conditions). We require that $u_1' y_1 + u_2' y_2 = 0$ (the first term above). This makes computing the second derivative easier:
$$ \begin{align*} & y' = u_1 y_1' + u_2 y_2' , \\ & y'' = (u_1' y_1' + u_2' y_2') + (u_1 y_1'' + u_2 y_2'') . \end{align*} $$
Since $y_1$ and $y_2$ are solutions to $y''+y = 0$, we find $y_1'' = - y_1$ and $y_2'' = - y_2$. (If the equation were the more general $y''+p(x)y' +q(x)y = 0$, we would have $y_i'' = -p(x)y_i' -q(x)y_i$.) So
$$ y'' = (u_1' y_1' + u_2' y_2') - (u_1 y_1 + u_2 y_2) . $$
We have $u_1 y_1 + u_2 y_2 = y$ and so
$$ y'' = (u_1' y_1' + u_2' y_2') - y , $$
and hence
$$ y'' + y = Ly = u_1' y_1' + u_2' y_2' . $$
For $y$ to satisfy $Ly = f(x)$, we must have $f(x) = u_1' y_1' + u_2' y_2'$.

What we need to solve are the two equations (conditions) we imposed on $u_1$ and $u_2$:
$$ \boxed{~~ \begin{aligned} & u_1' y_1 + u_2' y_2 = 0 ,\\ & u_1' y_1' + u_2' y_2' = f(x) . \end{aligned} ~~} $$
We get these same equations for any $Ly = f(x)$, where $Ly = y''+p(x)y'+q(x)y$. We solve for $u_1'$ and $u_2'$ in terms of $f(x)$, $y_1$, and $y_2$. There is a general formula for the solution we could just plug into, but instead of memorizing that, it is easier to simply solve it as we do below. In our case, $y_1 = \cos x$, $y_2 = \sin x$, and $f(x) = \tan x$, so the two equations are
$$ \begin{aligned} u_1' \cos x + u_2' \sin x &= 0 ,\\ -u_1' \sin x + u_2' \cos x &= \tan x . \end{aligned} $$
Multiply the first equation by $\sin x$ and the second by $\cos x$:
$$ \begin{aligned} u_1' \cos x \sin x + u_2' \sin^2 x & = 0 ,\\ -u_1' \sin x \cos x + u_2' \cos^2 x & = \tan x \cos x = \sin x . \end{aligned} $$
Add the two equations to eliminate $u_1'$, solve for $u_2'$, and then solve for $u_1'$:
$$ \begin{aligned} & u_2' \bigl(\sin^2 x + \cos^2 x\bigr) = \sin x , \\ & u_2' = \sin x , \\ & u_1' = \frac{- \sin^2 x}{\cos x} = \cos x - \sec x . \end{aligned} $$
We integrate $u_1'$ and $u_2'$ to get $u_1$ and $u_2$.
$$ \begin{aligned} & u_1 = \int u_1'\,dx = \int ( \cos x-\sec x ) \,dx = \sin x - \ln \left\lvert \sec x + \tan x \right\rvert , \\ & u_2 = \int u_2'\,dx = \int \sin x\,dx = -\cos x . \end{aligned} $$
We are looking for a particular solution, so we forget about the constants of integration. So our particular solution is
$$ \begin{gather*} y_p = u_1 y_1 + u_2 y_2 = \cos x \sin x - \cos x \, \ln \lvert \sec x + \tan x \rvert -\cos x \sin x \\ = - \cos x \, \ln \lvert \sec x + \tan x \rvert . \end{gather*} $$
The general solution to $y'' + y = \tan x$ is, therefore,
$$ y = C_1 \cos x + C_2 \sin x - \cos x \, \ln \lvert \sec x + \tan x \rvert . $$

So the general idea for any $y'' + p y' + q y = f(x)$ is to first find solutions $y_1$, $y_2$ to $y''+py'+qy = 0$. Then solve the two boxed equations for $u_1'$ and $u_2'$, that is, solve $u_1' y_1 + u_2' y_2 = 0$ and $u_1' y_1' + u_2' y_2' = f(x)$. Integrate $u_1'$ and $u_2'$ to find $u_1$ and $u_2$, and plug those into $y = u_1 y_1 + u_2 y_2$ to find the particular solution. We remark that if $y''$ has some coefficient that is not $1$, that is, if the equation is $ay'' + by' + cy = f(x)$, you must first divide the equation (and hence $f$) by $a$.

## Exercises

:::exercise {exercise-2-5-002} number=2.5.2 answered=no src=ch-higher-order-ode.tex:2551
PROBLEM:
Find a particular solution of $y''-y' -6y = e^{2x}$.
:::

:::exercise {exercise-2-5-003} number=2.5.3 answered=no src=ch-higher-order-ode.tex:2556
PROBLEM:
Find a particular solution of $y''-4y' +4y = e^{2x}$.
:::

:::exercise {exercise-2-5-004} number=2.5.4 answered=no src=ch-higher-order-ode.tex:2561
PROBLEM:
Solve the initial value problem $y''+9y = \cos (3x) + \sin (3x)$ for $y(0) = 2$, $y'(0) = 1$.
:::

:::exercise {exercise-2-5-005} number=2.5.5 answered=no src=ch-higher-order-ode.tex:2566
PROBLEM:
Set up the form of the particular solution but do not solve for the coefficients for $y^{(4)}-2y'''+y'' = e^x$.
:::

:::exercise {exercise-2-5-006} number=2.5.6 answered=no src=ch-higher-order-ode.tex:2571
PROBLEM:
Set up the form of the particular solution but do not solve for the coefficients for $y^{(4)}-2y'''+y'' = e^x + x + \sin x$.
:::

:::exercise {exercise-2-5-007} number=2.5.7 answered=no src=ch-higher-order-ode.tex:2576
PROBLEM:
[2]

a) Using variation of parameters, find a particular solution of $y''-2y'+y = e^x$.
b) Find a particular solution using undetermined coefficients.
c) Are the two solutions you found the same? See also [Exercise 2.5.10](ref:exercise-diffvarparunder).

:::

:::exercise {exercise-2-5-008} number=2.5.8 answered=no src=ch-higher-order-ode.tex:2589
PROBLEM:
Find a particular solution of $y''-2y' +y = \sin (x^2)$. It is OK to leave the answer as a definite integral.
:::

:::exercise {exercise-2-5-009} number=2.5.9 answered=no src=ch-higher-order-ode.tex:2595
PROBLEM:
For an arbitrary constant $c$ find a particular solution to $y''-y=e^{cx}$. Hint: Make sure to handle every possible real $c$.
:::

:::exercise {exercise-diffvarparunder} number=2.5.10 answered=no src=ch-higher-order-ode.tex:2599 label=exercise:diffvarparunder
PROBLEM:
[2]

a) Using variation of parameters, find a particular solution of $y''-y = e^x$.
b) Find a particular solution using undetermined coefficients.
c) Are the two solutions you found the same? What is going on?

:::

:::exercise {exercise-2-5-011} number=2.5.11 answered=no src=ch-higher-order-ode.tex:2613
PROBLEM:
Find a polynomial $P(x)$, so that $y = 2 x^2 + 3 x + 4$ solves $y''+5 y'+ y = P(x)$.
:::

:::exercise {exercise-2-5-101} number=2.5.101 answered=yes src=ch-higher-order-ode.tex:2622
PROBLEM:
Find a particular solution to $y''-y'+y=2\sin(3x)$.
SOLUTION:
$y=\frac{-16\sin(3x)+6\cos(3x)}{73}$
:::

:::exercise {exercise-2-5-102} number=2.5.102 answered=yes src=ch-higher-order-ode.tex:2630
PROBLEM:

a) Find a particular solution to $y''+2y=e^x + x^3$.
b) Find the general solution.

SOLUTION:
a) $y=\frac{2e^x+3x^3-9x}{6}$ b) $y=C_1 \cos(\sqrt{2} x) + C_2 \sin(\sqrt{2} x) + \frac{2e^x+3x^3-9x}{6}$
:::

:::exercise {exercise-2-5-103} number=2.5.103 answered=yes src=ch-higher-order-ode.tex:2643
PROBLEM:
Solve $y''+2y'+y = x^2$, $y(0)=1$, $y'(0)=2$.
SOLUTION:
$y(x) = x^2-4 x+6+e^{-x}(x-5)$
:::

:::exercise {exercise-2-5-104} number=2.5.104 answered=yes src=ch-higher-order-ode.tex:2650
PROBLEM:
Use variation of parameters to find a particular solution of $y''-y = \frac{1}{e^x+e^{-x}}$.
SOLUTION:
$y = \frac{2xe^x-(e^x+e^{-x})\ln(e^{2x}+1)}{4}$
:::

:::exercise {exercise-2-5-105} number=2.5.105 answered=yes src=ch-higher-order-ode.tex:2658
PROBLEM:
For an arbitrary constant $c$ find the general solution to $y''-2y=\sin(x+c)$.
SOLUTION:
$y=\frac{-\sin(x+c)}{3}+C_1 e^{\sqrt{2}\,x}+C_2 e^{-\sqrt{2}\,x}$
:::

:::exercise {exercise-2-5-106} number=2.5.106 answered=yes src=ch-higher-order-ode.tex:2666
PROBLEM:
Undetermined coefficients can sometimes be used to guess a particular solution to other equations than those with constant coefficients. Find a polynomial $y(x)$ that solves $y'+ x y = x^3+2x^2+5x+2$.

Note: Not every right-hand side will allow a polynomial solution, for example, $y'+xy=1$ does not, but a technique based on undetermined coefficients does work, see [chapter 7](ref:7#ps-chapter).
SOLUTION:
$y=x^2+2x+3$
:::

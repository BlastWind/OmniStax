# 2.1 Second-order linear ODEs {sec:solinear-section}

:::note [section-notes]
*Note: 1 lecture, reduction of order optional, first part of §3.1 in [EP](cite:EP), parts of §3.1 and §3.2 in [BD](cite:BD)*
:::

Consider the general *{index:second-order linear differential equation}*
$$ A(x) y'' + B(x)y' + C(x)y = F(x) . $$
We often divide through by $A(x)$ to get
$$ y'' + p(x)y' + q(x)y = f(x) , $$ {eq:sol-eqlin} number=2.1
where $p(x) = {B(x)}/{A(x)}$, $q(x) = {C(x)}/{A(x)}$, and $f(x) = {F(x)}/{A(x)}$. The word *linear{index-entry:linear equation}* means that the equation contains no powers or functions of $y$, $y'$, and $y''$.

In the special case when $f(x) = 0$, we have a so-called *homogeneous{index-entry:homogeneous linear equation}* equation
$$ y'' + p(x)y' + q(x)y = 0 . $$ {eq:sol-eqlinhom} number=2.2
We have already seen some second-order linear homogeneous equations.
$$ \begin{align*} \qquad y'' + k^2 y & = 0 & & \text{Two solutions are:} \quad y_1 = \cos (kx), \quad y_2 = \sin(kx) . \qquad \\ \qquad y'' - k^2 y & = 0 & & \text{Two solutions are:} \quad y_1 = e^{kx}, \quad y_2 = e^{-kx} . \qquad \end{align*} $$

If we know two solutions of a linear homogeneous equation, we know many more of them.

:::theorem {thm:theorem-2-1-1} Theorem 2.1.1 (Superposition)
{index-entry:superposition} Suppose $y_1$ and $y_2$ are two solutions of the homogeneous equation [(2.2)](ref:sol-eqlinhom). Then
$$ y(x) = C_1 y_1(x) + C_2 y_2(x) , $$
also solves [(2.2)](ref:sol-eqlinhom) for arbitrary constants $C_1$ and $C_2$.
:::

That is, we can add solutions together and multiply them by constants to obtain new and different solutions. We call the expression $C_1 y_1 + C_2 y_2$ a *{index:linear combination}* of $y_1$ and $y_2$. Let us prove this theorem; the proof is very enlightening and illustrates how linear equations work.

*Proof:* Let $y = C_1 y_1 + C_2 y_2$. Then
$$ \begin{split} y'' + py' + qy & = (C_1 y_1 + C_2 y_2)'' + p(C_1 y_1 + C_2 y_2)' + q(C_1 y_1 + C_2 y_2) \\ & = C_1 y_1'' + C_2 y_2'' + C_1 p y_1' + C_2 p y_2' + C_1 q y_1 + C_2 q y_2 \\ & = C_1 ( y_1'' + p y_1' + q y_1 ) + C_2 ( y_2'' + p y_2' + q y_2 ) \\ & = C_1 \cdot 0 + C_2 \cdot 0 = 0 . \qquad\square \end{split} $$

The proof becomes even simpler to state if we use the operator notation. An *{index:operator}* is an object that eats functions and spits out functions (kind of like what a function is, but a function eats numbers and spits out numbers). Define the operator $L$ by
$$ Ly = y'' + py' + qy . $$
The differential equation now becomes $Ly=0$. The operator (and the equation) $L$ being *linear*{index-entry:linear operator} means that $L(C_1y_1 + C_2y_2) = C_1 Ly_1 + C_2 Ly_2$. It is almost as if we were “multiplying” by $L$. The proof above becomes
$$ Ly = L(C_1y_1 + C_2y_2) = C_1 Ly_1 + C_2 Ly_2 = C_1 \cdot 0 + C_2 \cdot 0 = 0 . $$

Two different solutions to the second equation $y'' - k^2y = 0$ are $y_1 = \cosh (kx)$ and $y_2 = \sinh (kx)$. Recalling the definition of $\sinh$ and $\cosh$, we note that these are solutions by superposition as they are linear combinations of the two exponential solutions: $\cosh(kx) = \frac{e^{kx} + e^{-kx}}{2} = ({1}/{2}) e^{kx} + ({1}/{2}) e^{-kx}$ and $\sinh(kx) = \frac{e^{kx} - e^{-kx}}{2} = ({1}/{2}) e^{kx} + ({-1}/{2}) e^{-kx}$.

The functions $\sinh$ and $\cosh$ are sometimes more convenient to use than the exponential. Let us review some of their properties:
$$ \begin{align*} & \cosh 0 = 1 , & & \sinh 0 = 0 , \\ & \frac{d}{dx} \Bigl[ \cosh x \Bigr] = \sinh x , & & \frac{d}{dx} \Bigl[ \sinh x \Bigr] = \cosh x , \\ & \cosh^2 x - \sinh^2 x = 1 . \end{align*} $$

:::exercise {exercise-2-1-001} number=2.1.1 answered=no src=ch-higher-order-ode.tex:118
PROBLEM:
Derive these properties using the definitions of $\sinh$ and $\cosh$ in terms of exponentials.
:::

Linear equations have nice and simple answers to the existence and uniqueness question.

:::theorem {thm:theorem-2-1-2} Theorem 2.1.2 (Existence and uniqueness)
{index-entry:existence and uniqueness} Suppose $p, q, f$ are continuous functions on some interval $I$, $a$ is a number in $I$, and $b_0, b_1$ are constants. Then the equation
$$ y'' + p(x) y' + q(x) y = f(x) , $$
has exactly one solution $y(x)$ defined on the interval $I$ satisfying the initial conditions
$$ y(a) = b_0 , \qquad y'(a) = b_1 . $$

:::

For example, the equation $y'' + k^2 y = 0$ with $y(0) = b_0$ and $y'(0) = b_1$ has the solution
$$ y(x) = b_0 \cos (kx) + \frac{b_1}{k} \sin (kx) . $$
The equation $y'' - k^2 y = 0$ with $y(0) = b_0$ and $y'(0) = b_1$ has the solution
$$ y(x) = b_0 \cosh (kx) + \frac{b_1}{k} \sinh (kx) . $$
Using $\cosh$ and $\sinh$ in this solution allows us to solve for the initial conditions in a cleaner way than if we had used the exponentials.

The initial conditions for a second-order ODE consist of two equations. Common sense tells us that if we have two arbitrary constants and two equations, then we should be able to solve for the constants and find a solution to the differential equation satisfying the initial conditions.

*Question:* Suppose we find two different solutions $y_1$ and $y_2$ to the homogeneous equation [(2.2)](ref:sol-eqlinhom). Can every solution be written (using superposition) in the form $y = C_1 y_1 + C_2 y_2$?

The answer is affirmative! Provided that $y_1$ and $y_2$ are different enough in the following sense. We say $y_1$ and $y_2$ are *{index:linearly independent}* if one is not a constant multiple of the other.

:::theorem {thm:theorem-2-1-3} Theorem 2.1.3
Let $p, q$ be continuous functions. Let $y_1$ and $y_2$ be two linearly independent solutions to the homogeneous equation [(2.2)](ref:sol-eqlinhom). Then every other solution is of the form
$$ y = C_1 y_1 + C_2 y_2 . $$
That is, $y = C_1 y_1 + C_2 y_2$ is the general solution.
:::

For example, we found the solutions $y_1 = \cos x$ and $y_2 = \sin x$ for the equation $y'' + y = 0$. It is not hard to see that sine and cosine are not constant multiples of each other. Indeed, if $\sin x = A \cos x$ for some constant $A$, plugging in $x=0$ would imply $A = 0$. But then $\sin x = 0$ for all $x$, which is preposterous. So $y_1$ and $y_2$ are linearly independent. Hence,
$$ y = C_1 \cos x + C_2 \sin x $$
is the general solution to $y'' + y = 0$.

For two functions, checking linear independence is rather simple. Here is another example. Consider $y''-2x^{-2}y = 0$. Then $y_1 = x^2$ and $y_2 = {1}/{x}$ are solutions. To see that they are linearly independent, suppose one is a multiple of the other: $y_1 = A y_2$, we just have to show that $A$ cannot be a constant. In this case, we have $A = {y_1}/{y_2} = x^3$, which is most decidedly not a constant. So $y = C_1 x^2 + C_2 {1}/{x}$ is the general solution.

If you have one nonzero solution to a second-order linear homogeneous equation, then you can find another one. This is the *{index:reduction of order method}*. The idea is that if we somehow found $y_1$ as a solution of $y'' + p(x) y' + q(x) y = 0$, then we try a second solution of the form $y_2(x) = y_1(x) v(x)$. We just need to find $v$. We plug $y_2$ into the equation:
$$ \begin{split} 0 = y_2'' + p(x) y_2' + q(x) y_2 & = \underbrace{y_1'' v + 2 y_1' v' + y_1 v''}_{y_2''} + p(x) \underbrace{( y_1' v + y_1 v' )}_{y_2'} + q(x) \underbrace{y_1 v}_{y_2} \\ & = y_1 v'' + (2 y_1' + p(x) y_1) v' + {\cancel{\bigl( y_1'' + p(x) y_1' + q(x) y_1 \bigr)}}^{0} v . \end{split} $$
In other words, $y_1 v'' + (2 y_1' + p(x) y_1) v' = 0$. Using $w = v'$, we have the first-order linear equation $y_1 w' + (2 y_1' + p(x) y_1) w = 0$. After solving this equation for $w$ (integrating factor), we find $v$ by antidifferentiating $w$. We then form $y_2$ by computing $y_1 v$. For example, suppose we somehow know $y_1 = x$ is a solution to $y''+x^{-1}y'-x^{-2} y=0$. The equation for $w$ is then $xw' + 3 w = 0$. We find a solution, $w = Cx^{-3}$, and we find an antiderivative $v = \frac{-C}{2x^2}$. Hence $y_2 = y_1 v = \frac{-C}{2x}$. Any $C$ works and so $C=-2$ makes $y_2 = {1}/{x}$. Thus, the general solution is $y = C_1 x + C_2{1}/{x}$.

Since we have a formula for the solution to the first-order linear equation, we can write a formula for $y_2$:
$$ y_2(x) = y_1(x) \int \frac{e^{-\int p(x)\,dx}}{{\bigl(y_1(x)\bigr)}^2} \,dx $$
However, it is much easier to remember that we just need to try $y_2(x) = y_1(x) v(x)$ and find $v(x)$ as we did above. The technique works for higher-order equations too: You get to reduce the order by one for each solution you find. So it is better to remember how to do it rather than a specific formula.

We will study the solution of nonhomogeneous equations in [§2.5](ref:2.5#sec-nonhom). We will first focus on finding general solutions to homogeneous equations.

## Exercises

:::exercise {exercise-2-1-002} number=2.1.2 answered=no src=ch-higher-order-ode.tex:266
PROBLEM:
Show that $y=e^x$ and $y=e^{2x}$ are linearly independent.
:::

:::exercise {exercise-2-1-003} number=2.1.3 answered=no src=ch-higher-order-ode.tex:270
PROBLEM:
Take $y'' + 5 y = 10 x + 5$. Find (guess!) a solution.
:::

:::exercise {exercise-2-1-004} number=2.1.4 answered=no src=ch-higher-order-ode.tex:274
PROBLEM:
Prove the superposition principle for nonhomogeneous equations. Suppose that $y_1$ is a solution to $L y_1 = f(x)$ and $y_2$ is a solution to $L y_2 = g(x)$ (same linear operator $L$). Show that $y = y_1+y_2$ solves $Ly = f(x) + g(x)$.
:::

:::exercise {exercise-2-1-005} number=2.1.5 answered=no src=ch-higher-order-ode.tex:281
PROBLEM:
For the equation $x^2 y'' - x y' = 0$, find two solutions, show that they are linearly independent and find the general solution. Hint: Try $y = x^r$.
:::

Equations of the form $a x^2 y'' + b x y' + c y = 0$ are called *Euler’s equations{index-entry:Euler’s equation}* or *Cauchy–Euler equations{index-entry:Cauchy–Euler equation}*. They are solved by trying $y=x^r$ and solving for $r$ (assume $x \geq 0$ for simplicity).

:::exercise {sol-eulerex} number=2.1.6 answered=no src=ch-higher-order-ode.tex:293 label=sol:eulerex
PROBLEM:
Suppose that ${(b-a)}^2-4ac > 0$.

a) Find a formula for the general solution of Euler’s equation (see above) $a x^2 y'' + b x y' + c y = 0$. Hint: Try $y=x^r$ and find a formula for $r$.
b) What happens when ${(b-a)}^2-4ac = 0$ or ${(b-a)}^2-4ac < 0$?

:::

We will revisit the case when ${(b-a)}^2-4ac < 0$ later.

:::exercise {sol-eulerexln} number=2.1.7 answered=no src=ch-higher-order-ode.tex:306 label=sol:eulerexln
PROBLEM:
Same equation as in [Exercise 2.1.6](ref:sol-eulerex). Suppose ${(b-a)}^2-4ac = 0$. Find a formula for the general solution of $a x^2 y'' + b x y' + c y = 0$. Hint: Try $y=x^r \ln x$ for the second solution.
:::

:::exercise {exercise-reductionoforder} number=2.1.8 answered=no src=ch-higher-order-ode.tex:314 label=exercise:reductionoforder
PROBLEM:
**reduction of order**
Suppose $y_1$ is a solution to $y'' + p(x) y' + q(x) y = 0$. By directly plugging into the equation, show that
$$ y_2(x) = y_1(x) \int \frac{e^{-\int p(x)\,dx}}{{\bigl(y_1(x)\bigr)}^2} \,dx $$
is also a solution.
:::

:::exercise {exercise-2-1-009} number=2.1.9 answered=no src=ch-higher-order-ode.tex:324
PROBLEM:
**{index:Chebyshev’s equation of order 1}**
Take $(1-x^2)y''-xy' + y = 0$.

a) Show that $y=x$ is a solution.
b) Use reduction of order to find a second linearly independent solution.
c) Write down the general solution.

:::

:::exercise {exercise-2-1-010} number=2.1.10 answered=no src=ch-higher-order-ode.tex:334
PROBLEM:
**{index:Hermite’s equation of order 2}**
Take $y''-2xy' + 4y = 0$.

a) Show that $y=1-2x^2$ is a solution.
b) Use reduction of order to find a second linearly independent solution. (It’s OK to leave a definite integral in the formula.)
c) Write down the general solution.

:::

:::exercise {exercise-2-1-101} number=2.1.101 answered=yes src=ch-higher-order-ode.tex:348
PROBLEM:
Are $\sin(x)$ and $e^x$ linearly independent? Justify.
SOLUTION:
Yes. To justify try to find a constant $A$ such that $\sin(x) = A e^x$ for all $x$.
:::

:::exercise {exercise-2-1-102} number=2.1.102 answered=yes src=ch-higher-order-ode.tex:356
PROBLEM:
Are $e^x$ and $e^{x+2}$ linearly independent? Justify.
SOLUTION:
No. $e^{x+2} = e^2 e^x$.
:::

:::exercise {exercise-2-1-103} number=2.1.103 answered=yes src=ch-higher-order-ode.tex:363
PROBLEM:
Guess a solution to $y'' + y' + y= 5$.
SOLUTION:
$y=5$
:::

:::exercise {exercise-2-1-104} number=2.1.104 answered=yes src=ch-higher-order-ode.tex:370
PROBLEM:
Find the general solution to $x y'' + y' = 0$. Hint: It is a first-order ODE in $y'$.
SOLUTION:
$y=C_1 \ln(x) + C_2$
:::

:::exercise {exercise-2-1-105} number=2.1.105 answered=yes src=ch-higher-order-ode.tex:378
PROBLEM:
Write down an equation (guess) for which we have the solutions $e^x$ and $e^{2x}$. Hint: Try an equation of the form $y''+Ay'+By = 0$ for constants $A$ and $B$, plug in both $e^x$ and $e^{2x}$ and solve for $A$ and $B$.
SOLUTION:
$y''-3y'+2y = 0$
:::

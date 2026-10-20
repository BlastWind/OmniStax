# 2.2 Constant-coefficient second-order linear ODEs {sec:sec-ccsol}

:::note [section-notes]
*Note: more than 1 lecture, second part of §3.1 in [EP](cite:EP), §3.1 in [BD](cite:BD)*
:::

## Solving constant-coefficient equations

Consider the problem
$$ y''-6y'+8y = 0, \qquad y(0) = - 2, \qquad y'(0) = 6 . $$
This is a second-order linear homogeneous equation with constant coefficients. *Constant coefficients{index-entry:constant-coefficient}* means that the functions in front of $y''$, $y'$, and $y$ are constants; they do not depend on $x$.

To guess a solution, think of a function that stays essentially the same when we differentiate it, so that we can take the function and its derivatives, add some multiples of these together, and end up with zero. Yes, we are talking about the exponential.

We try^[Making an educated guess with some parameters to solve for is such a central technique in differential equations that people sometimes use a fancy name for such a guess: *{index:ansatz}*, German for “initial placement of a tool at a work piece.” Yes, the Germans have a word for that.] a solution of the form $y = e^{rx}$. Then $y' = r e^{rx}$ and $y'' = r^2 e^{rx}$. Plug in to get
$$ \begin{align*} y''-6y'+8y & = 0 , \\ \underbrace{r^2 e^{rx}}_{y''} -6 \underbrace{r e^{rx}}_{y'}+8 \underbrace{e^{rx}}_{y} & = 0 , \\ r^2 -6 r +8 & = 0 \qquad \text{(divide through by } e^{rx} \text{)},\\ (r-2)(r-4) & = 0 . \end{align*} $$
Hence, if $r=2$ or $r=4$, then $e^{rx}$ is a solution. So let $y_1 = e^{2x}$ and $y_2 = e^{4x}$.

:::exercise {exercise-2-2-001} number=2.2.1 answered=no src=ch-higher-order-ode.tex:433
PROBLEM:
Check that $y_1$ and $y_2$ are solutions.
:::

The functions $e^{2x}$ and $e^{4x}$ are linearly independent. If they were not linearly independent, we could write $e^{4x} = C e^{2x}$ for some constant $C$, implying that $e^{2x} = C$ for all $x$, which is clearly not possible. Hence, we can write the general solution as
$$ y = C_1 e^{2x} + C_2 e^{4x} . $$
We need to solve for $C_1$ and $C_2$. To apply the initial conditions, we first find $y' = 2 C_1 e^{2x} + 4 C_2 e^{4x}$. We plug $x=0$ into $y$ and $y'$ and solve.
$$ \begin{aligned} -2 & = y(0) = C_1 + C_2 , \\ 6 & = y'(0) = 2 C_1 + 4 C_2 . \end{aligned} $$
Either apply some matrix algebra, or just solve these by high school math. For example, divide the second equation by 2 to obtain $3 = C_1 + 2 C_2$, then subtract the two equations to get $5 = C_2$. Then $C_1 = -7$ as $-2 = C_1 + 5$. Hence, the solution we are looking for is
$$ y = -7 e^{2x} + 5 e^{4x} . $$

We generalize this example into a method. Suppose that we have an equation
$$ a y'' + b y' + c y = 0 , $$ {eq:ccsol-eq} number=2.3
where $a, b, c$ are constants. Try the solution $y = e^{rx}$ to obtain
$$ a r^2 e^{rx} + b r e^{rx} + c e^{rx} = 0 . $$
Divide by $e^{rx}$ to obtain the so-called *{index:characteristic equation}* of the ODE:
$$ a r^2 + b r + c = 0 . $$
Solve for the $r$ by using the {index:quadratic formula}:
$$ r_1, r_2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} . $$
Suppose that $b^2 -4ac \geq 0$ for now so that $r_1$ and $r_2$ are real. So $e^{r_1 x}$ and $e^{r_2 x}$ are solutions. There is still a difficulty if $r_1 = r_2$, but it is not hard to overcome.

:::theorem {thm:theorem-2-2-1} Theorem 2.2.1
Suppose that $r_1$ and $r_2$ are the roots of the characteristic equation.

(i) If $r_1$ and $r_2$ are distinct and real (when $b^2 - 4ac > 0$), then [(2.3)](ref:ccsol-eq) has the general solution
$$ \boxed{~~ y = C_1 e^{r_1 x} + C_2 e^{r_2 x} . ~~} $$

(ii) If $r_1 = r_2$ (happens when $b^2 - 4ac = 0$), then [(2.3)](ref:ccsol-eq) has the general solution
$$ \boxed{~~ y = (C_1 + C_2 x)\, e^{r_1 x} . ~~} $$

:::

:::example {ex:example-expsecondorder} Example 2.2.1
Solve
$$ y'' - k^2 y = 0 . $$
The characteristic equation is $r^2 - k^2 = 0$ or $(r-k)(r+k) = 0$. Consequently, $e^{-k x}$ and $e^{kx}$ are the two linearly independent solutions, and the general solution is
$$ y = C_1 e^{kx} + C_2e^{-kx} . $$
Since $\cosh s = \frac{e^s+e^{-s}}{2}$ and $\sinh s = \frac{e^s-e^{-s}}{2}$, we can also write the general solution as
$$ y = D_1 \cosh(kx) + D_2 \sinh(kx) . $$

:::

:::example {ex:example-2-2-2} Example 2.2.2
Find the general solution of
$$ y'' -8 y' + 16 y = 0 . $$

The characteristic equation is $r^2 - 8 r + 16 = {(r-4)}^2 = 0$. The equation has a double root $r_1 = r_2 = 4$. The general solution is, therefore,
$$ y = (C_1 + C_2 x)\, e^{4 x} = C_1 e^{4x} + C_2 x e^{4x} . $$

:::exercise {exercise-2-2-002} number=2.2.2 answered=no src=ch-higher-order-ode.tex:547
PROBLEM:
Check that $e^{4x}$ and $x e^{4x}$ are linearly independent.
:::

It is good to check your work. That $e^{4x}$ solves the equation is clear. Let us check that $x e^{4x}$ solves the equation. Compute $y' = e^{4x} + 4xe^{4x}$ and $y'' = 8 e^{4x} + 16xe^{4x}$. Plug in,
$$ y'' - 8 y' + 16 y = 8 e^{4x} + 16xe^{4x} - 8(e^{4x} + 4xe^{4x}) + 16 xe^{4x} = 0 . $$

:::

In some sense, a double root rarely happens. If coefficients are picked randomly, a double root is unlikely. There are, however, some real-world problems where a double root does happen naturally (e.g. critically damped mass-spring system, as we will see).

Here is a short argument for why the solution $x e^{r x}$ works for a double root. A double root is a limit case of two distinct but very close roots. Note that $\frac{e^{r_2 x} - e^{r_1 x}}{r_2 - r_1}$ is a solution when the roots are distinct. When we take the limit as $r_1$ goes to $r_2$, we are really taking the derivative of $e^{rx}$ using $r$ as the variable. Therefore, the limit is $x e^{rx}$, and hence this is a solution in the double root case. We remark that in some numerical computations, two very close roots may lead to numerical instability while a double root will not.

## Complex numbers and Euler’s formula

A polynomial may have complex roots. The equation $r^2 + 1 = 0$ has no real roots, but it does have two complex roots. Here we review some properties of complex numbers{index-entry:complex number}.

Complex numbers may seem a strange concept, perhaps due to the terminology. There is nothing imaginary or complicated about complex numbers. A complex number is simply a pair of real numbers, $(a,b)$, that is, it is a point in the plane. We add complex numbers in the straightforward way: $(a,b)+(c,d)=(a+c,b+d)$. We define multiplication{index-entry:multiplication of complex numbers} by
$$ (a,b) \times (c,d) \overset{\text{def}}{=} (ac-bd,ad+bc) . $$
It turns out that with this multiplication rule, all the standard properties of arithmetic hold. Further, and most importantly $(0,1) \times (0,1) = (-1,0)$.

Generally we write $(a,b)$ as $a+ib$, and we treat $i$ as if it were an unknown. When $b$ is zero, then $(a,0)$ is just the number $a$. We do arithmetic with complex numbers just as we would with polynomials. The property we just mentioned becomes $i^2 = -1$. So whenever we see $i^2$, we replace it by $-1$. For example,
$$ (2+3i)(4i) - 5i = (2\times 4)i + (3 \times 4) i^2 - 5i = 8i + 12 (-1) - 5i = -12 + 3i . $$

The numbers $i$ and $-i$ are the two roots of $r^2 + 1 = 0$. Some engineers use the letter $j$ instead of $i$ for the square root of $-1$. We follow the mathematicians’ convention and use $i$.

:::exercise {exercise-2-2-003} number=2.2.3 answered=no src=ch-higher-order-ode.tex:626
PROBLEM:
Make sure you understand (that you can justify) the following identities:

a) $i^2 = -1$, $i^3 = -i$, $i^4 = 1$,
b) $\frac{1}{i} = -i$,
c) $(3-7i)(-2-9i) = \cdots = -69-13i$,
d) $(3-2i)(3+2i) = 3^2 - {(2i)}^2 = 3^2 + 2^2 = 13$,
e) $\frac{1}{3-2i} = \frac{1}{3-2i} \frac{3+2i}{3+2i} = \frac{3+2i}{13} = \frac{3}{13}+\frac{2}{13}i$.

:::

We also define the exponential $e^{a+ib}$ of a complex number by writing down the Taylor series and plugging in the complex number. Most properties of the exponential follow from its Taylor series, and so these properties hold for the complex exponential too. For example, we have the property: $e^{x+y} = e^x e^y$. In particular, $e^{a+ib} = e^a e^{ib}$. Hence, if we can compute $e^{ib}$, we can compute $e^{a+ib}$. For $e^{ib}$, we use the so-called *{index:Euler’s formula}*.

:::theorem {thm:eulersformula} Theorem 2.2.2 (Euler’s formula)

$$ \boxed{~~ e^{i \theta} = \cos \theta + i \sin \theta \qquad \text{ and } \qquad e^{- i \theta} = \cos \theta - i \sin \theta . ~~} $$

:::

In other words, $e^{a+ib} = e^a \bigl( \cos(b) + i \sin(b) \bigr) = e^a \cos(b) + i e^a \sin(b)$.

:::exercise {exercise-2-2-004} number=2.2.4 answered=no src=ch-higher-order-ode.tex:665
PROBLEM:
Using Euler’s formula, check the identities:
$$ \cos \theta = \frac{e^{i \theta} + e^{-i \theta}}{2} \qquad \text{and} \qquad \sin \theta = \frac{e^{i \theta} - e^{-i \theta}}{2i}. $$

:::

:::exercise {exercise-2-2-005} number=2.2.5 answered=no src=ch-higher-order-ode.tex:673
PROBLEM:
**Double angle identities**
Start with $e^{i(2\theta)} = {\bigl(e^{i \theta} \bigr)}^2$. Use Euler on each side to deduce:
$$ \cos (2\theta) = \cos^2 \theta - \sin^2 \theta \qquad \text{and} \qquad \sin (2\theta) = 2 \sin \theta \cos \theta . $$

:::

For a complex number $a+ib$, we call $a$ the *{index:real part}* and $b$ the *{index:imaginary part}* of the number. Often the following notation is used:
$$ \operatorname{Re}(a+ib) = a \qquad \text{and} \qquad \operatorname{Im}(a+ib) = b. $$

## Complex roots

Suppose the differential equation $ay'' + by' + cy = 0$ has the characteristic equation $a r^2 + b r + c = 0$ that has {index:complex roots}. By the quadratic formula, the roots are $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. These roots are complex if $b^2 - 4ac < 0$. In this case, we write the roots as
$$ r_1, r_2 = \frac{-b}{2a} \pm i\frac{\sqrt{4ac - b^2}}{2a} . $$
As you can see, we get a pair of roots of the form $\alpha \pm i \beta$. We could still write the solution as
$$ y = C_1 e^{(\alpha+i\beta)x} + C_2 e^{(\alpha-i\beta)x} . $$
However, the exponential is now complex-valued. We need to allow $C_1$ and $C_2$ to be complex numbers to obtain a real-valued solution (which is what we are after). While there is nothing particularly wrong with this approach, it can make calculations harder and it is generally preferred to find two real-valued solutions.

[Euler’s formula](ref:eulersformula) comes to the rescue. Let
$$ y_1 = e^{(\alpha+i\beta)x} \qquad \text{and} \qquad y_2 = e^{(\alpha-i\beta)x} . $$
Then
$$ \begin{aligned} y_1 & = e^{\alpha x} \cos (\beta x) + i e^{\alpha x} \sin (\beta x) , \\ y_2 & = e^{\alpha x} \cos (\beta x) - i e^{\alpha x} \sin (\beta x) . \end{aligned} $$
Linear combinations of solutions are also solutions. Hence,
$$ \begin{aligned} y_3 & = \frac{y_1 + y_2}{2} = e^{\alpha x} \cos (\beta x) , \\ y_4 & = \frac{y_1 - y_2}{2i} = e^{\alpha x} \sin (\beta x) , \end{aligned} $$
are also solutions. It is not hard to see that $y_3$ and $y_4$ are linearly independent (not multiples of each other). So the general solution can be written in terms of $y_3$ and $y_4$. And as they are real-valued, no complex numbers need to be used for the arbitrary constants in the general solution. We summarize what we found as a theorem.

:::theorem {thm:theorem-2-2-3} Theorem 2.2.3
Take the equation
$$ ay'' + by' + cy = 0 . $$
If the characteristic equation has the roots $\alpha \pm i \beta$ (when $b^2 - 4ac < 0$), then the general solution is
$$ \boxed{~~ y = C_1 e^{\alpha x} \cos (\beta x) + C_2 e^{\alpha x} \sin (\beta x) . ~~} $$

:::

:::example {ex:example-sincossecondorder} Example 2.2.3
Find the general solution of $y'' + k^2 y = 0$, for a constant $k > 0$.

The characteristic equation is $r^2 + k^2 = 0$, and the roots are $r = \pm ik$. By the theorem, the general solution is
$$ y = C_1 \cos (kx) + C_2 \sin (kx) . $$

:::

:::example {ex:example-2-2-4} Example 2.2.4
Find the solution of $y'' - 6 y' + 13 y = 0$, $y(0) = 0$, $y'(0) = 10$.

The characteristic equation is $r^2 - 6 r + 13 = 0$. Completing the square, we get ${(r-3)}^2 + 2^2 = 0$ and hence the roots are $r = 3 \pm 2i$. Per the theorem, the general solution is
$$ y = C_1 e^{3x} \cos (2x) + C_2 e^{3x} \sin (2x) . $$
To find the solution satisfying the initial conditions, we first plug in zero to get
$$ 0 = y(0) = C_1 e^{0} \cos 0 + C_2 e^{0} \sin 0 = C_1 . $$
Hence, $C_1 = 0$ and $y = C_2 e^{3x} \sin (2x)$. We differentiate,
$$ y' = 3C_2 e^{3x} \sin (2x) + 2C_2 e^{3x} \cos (2x) . $$
We again plug in the initial condition and obtain $10 = y'(0) = 2C_2$, or $C_2 = 5$. The solution we are seeking is
$$ y = 5 e^{3x} \sin (2x) . $$

:::

## Exercises

:::exercise {exercise-2-2-006} number=2.2.6 answered=no src=ch-higher-order-ode.tex:802
PROBLEM:
Find the general solution of $2y'' + 2y' -4 y = 0$.
:::

:::exercise {exercise-2-2-007} number=2.2.7 answered=no src=ch-higher-order-ode.tex:806
PROBLEM:
Find the general solution of $y'' + 9y' - 10 y = 0$.
:::

:::exercise {exercise-2-2-008} number=2.2.8 answered=no src=ch-higher-order-ode.tex:810
PROBLEM:
Solve $y'' - 8y' + 16 y = 0$ for $y(0) = 2$, $y'(0) = 0$.
:::

:::exercise {exercise-2-2-009} number=2.2.9 answered=no src=ch-higher-order-ode.tex:814
PROBLEM:
Solve $y'' + 9y' = 0$ for $y(0) = 1$, $y'(0) = 1$.
:::

:::exercise {exercise-2-2-010} number=2.2.10 answered=no src=ch-higher-order-ode.tex:818
PROBLEM:
Find the general solution of $2y'' + 50y = 0$.
:::

:::exercise {exercise-2-2-011} number=2.2.11 answered=no src=ch-higher-order-ode.tex:822
PROBLEM:
Find the general solution of $y'' + 6 y' + 13 y = 0$.
:::

:::exercise {exercise-2-2-012} number=2.2.12 answered=no src=ch-higher-order-ode.tex:826
PROBLEM:
Find the general solution of $y'' = 0$ using the methods of this section.
:::

:::exercise {exercise-2-2-013} number=2.2.13 answered=no src=ch-higher-order-ode.tex:830
PROBLEM:
The method of this section applies to equations of other orders than two. We will see higher orders later. Solve the first-order equation $2y' + 3y = 0$ using the methods of this section.
:::

:::exercise {exercise-2-2-014} number=2.2.14 answered=no src=ch-higher-order-ode.tex:837
PROBLEM:
Let us revisit the Cauchy–Euler equations{index-entry:Cauchy–Euler equation} of [Exercise 2.1.6](ref:2.1#sol-eulerex). Suppose now that ${(b-a)}^2-4ac < 0$. Find a formula for the general solution of $a x^2 y'' + b x y' + c y = 0$. Hint: Note that $x^r = e^{r \ln x}$.
:::

:::exercise {exercise-2-2-015} number=2.2.15 answered=no src=ch-higher-order-ode.tex:844
PROBLEM:
Find the solution to $y''-(2\alpha) y' + \alpha^2 y=0$, $y(0) = a$, $y'(0)=b$, where $\alpha$, $a$, and $b$ are real numbers.
:::

:::exercise {exercise-2-2-016} number=2.2.16 answered=no src=ch-higher-order-ode.tex:850
PROBLEM:
Construct an equation such that $y = C_1 e^{-2x} \cos(3x) + C_2 e^{-2x} \sin(3x)$ is the general solution.
:::

:::exercise {exercise-2-2-101} number=2.2.101 answered=yes src=ch-higher-order-ode.tex:858
PROBLEM:
Find the general solution to $y''+4y'+2y=0$.
SOLUTION:
$y = C_1 e^{(-2+\sqrt{2}) x} + C_2 e^{(-2-\sqrt{2}) x}$
:::

:::exercise {exercise-2-2-102} number=2.2.102 answered=yes src=ch-higher-order-ode.tex:869
PROBLEM:
Find the general solution to $y''-6y'+9y=0$.
SOLUTION:
$y = C_1 e^{3x} + C_2 x e^{3x}$
:::

:::exercise {exercise-2-2-103} number=2.2.103 answered=yes src=ch-higher-order-ode.tex:880
PROBLEM:
Find the solution to $2y''+y'+y=0$, $y(0) = 1$, $y'(0)=-2$.
SOLUTION:
$y = e^{-x/4} \cos\bigl(({\sqrt{7}}/{4})x\bigr) - \sqrt{7} e^{-x/4} \sin\bigl(({\sqrt{7}}/{4})x\bigr)$
:::

:::exercise {exercise-2-2-104} number=2.2.104 answered=yes src=ch-higher-order-ode.tex:892
PROBLEM:
Find the solution to $2y''+y'-3y=0$, $y(0) = a$, $y'(0)=b$.
SOLUTION:
$y = \frac{2(a-b)}{5} \, e^{-3x/2}+\frac{3 a+2 b}{5} \, e^x$
:::

:::exercise {exercise-2-2-105} number=2.2.105 answered=yes src=ch-higher-order-ode.tex:900
PROBLEM:
Find the solution to $z''(t) = -2z'(t)-2z(t)$, $z(0) = 2$, $z'(0)= -2$.
SOLUTION:
$z(t) = 2e^{-t} \cos(t)$
:::

:::exercise {exercise-2-2-106} number=2.2.106 answered=yes src=ch-higher-order-ode.tex:909
PROBLEM:
Find the solution to $y''-(\alpha+\beta) y' + \alpha \beta y=0$, $y(0) = a$, $y'(0)=b$, where $\alpha$, $\beta$, $a$, and $b$ are real numbers, and $\alpha \neq \beta$.
SOLUTION:
$y = \frac{a \beta-b}{\beta-\alpha} e^{\alpha x} + \frac{b-a \alpha}{\beta-\alpha} e^{\beta x}$
:::

:::exercise {exercise-2-2-107} number=2.2.107 answered=yes src=ch-higher-order-ode.tex:921
PROBLEM:
Construct an equation such that $y = C_1 e^{3x} + C_2 e^{-2x}$ is the general solution.
SOLUTION:
$y'' -y'-6y=0$
:::

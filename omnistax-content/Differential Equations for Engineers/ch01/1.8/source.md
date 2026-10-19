# 1.8 Exact equations {sec:exact-section}

:::note [section-notes]
*Note: 1–2 lectures, can safely be skipped, §1.6 in [EP](cite:EP), §2.6 in [BD](cite:BD)*
:::

A type of equation that comes up quite often in physics and engineering is an *{index:exact equation}*. Suppose $F(x,y)$ is a function of two variables, which we call the *{index:potential function}*. The naming should suggest potential energy, or electric potential. Exact equations and potential functions appear when there is a conservation law at play, such as conservation of energy. Let us make up a simple example. Consider
$$ F(x,y) = x^2+y^2 . $$

> FIGURE {fig:exact-circlesfig} number=1.18 src=../../media/circlesfig.svg
> alt: A plot in the xy-plane for x between roughly minus 13 to 13 and y between minus 10 to 10. Several circles centered at the origin, (0,0), are drawn.
> width: 4.5in
> caption: Solutions to $F(x,y) = x^2+y^2 = C$ for various $C$.

We are interested in the lines of constant potential^[Accordingly, these curves are sometimes called *{index:equipotential curves}*.]: curves given by $F(x,y) = C$, for some constant $C$. In our example, the curves $x^2+y^2=C$ are circles. See [Figure 1.18](ref:exact-circlesfig).

We take the *{index:total derivative}* of $F$:
$$ dF = \frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y} dy . $$
For convenience, we will use the notation $F_x = \frac{\partial F}{\partial x}$ and $F_y = \frac{\partial F}{\partial y}$. In our example,
$$ dF = 2x \, dx + 2y \, dy . $$
If we apply the total derivative to the equation $F(x,y) = C$, we find the differential equation $dF = 0$. This differential equation has the form
$$ M \, dx + N \, dy = 0, \qquad \text{or} \qquad M + N \, \frac{dy}{dx} = 0 . $$
An equation of this form is called *exact* if it was obtained as $dF = 0$ for some potential function $F$. In our simple example, we obtain the equation
$$ 2x \, dx + 2y \, dy = 0, \qquad \text{or} \qquad 2x + 2y \, \frac{dy}{dx} = 0 . $$
Since we obtained this equation by differentiating $x^2+y^2=C$, the equation is exact. We often wish to solve for $y$ in terms of $x$. In our example,
$$ y = \pm \sqrt{C-x^2} . $$

In terms of multivariable calculus, at each point $(x,y)$ in the plane, $\vec{v} = (M,N)$ is a vector, that is, a direction and a magnitude. As $M$ and $N$ are functions of $(x,y)$, we have a *{index:vector field}*. A vector field $\vec{v}$ that comes from an exact equation is a so-called *{index:conservative vector field}*, that is, a vector field that comes with a potential function $F(x,y)$, such that
$$ \vec{v} = \left( \frac{\partial F}{\partial x} ,\frac{\partial F}{\partial y} \right) . $$
Let $\gamma$ be a path in the plane starting at $(x_1,y_1)$ and ending at $(x_2,y_2)$. If we think of $\vec{v}$ as force, then the work required to move along $\gamma$ is the path integral
$$ \int_\gamma \vec{v}(\vec{r}) \cdot d\vec{r} = \int_\gamma M \, dx + N \, dy = F(x_2,y_2) - F(x_1,y_1) . $$
In other words, the work done depends only on the endpoints—where we start and where we end. For example, suppose $F$ is gravitational potential (physicists use the convention that $-F$ is the potential, but the idea is the same). The derivative of $F$ given by $\vec{v}$ is the gravitational force. What we are saying is that the work required to move a heavy box from the ground floor to the roof only depends on the change in potential energy. The work done is the same no matter what path we took; if we took the stairs or the elevator. Although if we took the elevator, the elevator did the work for us. Movement along the curves $F(x,y) = C$ requires no work done, such as the heavy box sliding along without accelerating or braking on a perfectly flat roof on a cart with incredibly well-oiled wheels.

An exact equation is a conservative vector field, and the implicit solution of this equation is the potential function.

## Solving exact equations

Now you, the reader, should ask: Where did we solve a differential equation? Well, in applications we generally know $M$ and $N$, but we do not know $F$. That is, we may have just started with $2x + 2y \frac{dy}{dx} = 0$, or perhaps even
$$ x + y \frac{dy}{dx} = 0 . $$
It is up to us to find some potential $F$ that works. Many different $F$ will work; adding a constant to $F$ does not change the equation. Once we have a potential function $F$, the equation $F\bigl(x,y(x)\bigr) = C$ gives an implicit solution of the ODE.

:::example {ex:example-1-8-1} Example 1.8.1
Let us find the general solution to $2x + 2y \frac{dy}{dx} = 0$. Forget we know $F$.

If we know that this is an exact equation, we start looking for a potential function $F$. We have $M = 2x$ and $N=2y$. If $F$ exists, it must be such that $F_x (x,y) = 2x$. Integrate in the $x$ variable to find
$$ F(x,y) = x^2 + A(y) , $$ {eq:eq-exact-fint} number=1.5
for some function $A(y)$. The function $A$ is the “constant of integration,” though it is only constant as far as $x$ is concerned, and may still depend on $y$. Now differentiate [(1.5)](ref:eq-exact-fint) in $y$ and set it equal to $N$, which is what $F_y$ is supposed to be:
$$ 2y = F_y (x,y) = A'(y) . $$
Integrating, we find $A(y) = y^2$. We could add a constant of integration if we wanted to, but there is no need. We found $F(x,y) = x^2+y^2$. Next for a constant $C$, we solve
$$ F\bigl(x,y(x)\bigr) = C $$
for $y$ in terms of $x$. In this case, we obtain $y = \pm \sqrt{C-x^2}$ as we did before.
:::

:::exercise {exercise-1-8-001} number=1.8.1 answered=no src=ch-first-order-ode.tex:3221
PROBLEM:
Why did we not need to add a constant of integration when integrating $A'(y) = 2y$? Add a constant of integration, say $3$, and see what $F$ you get. What is the difference from what we got above, and why does it not matter?
:::

The procedure, once we know that the equation is exact, is:

(i) Integrate $F_x = M$ in $x$ resulting in $F(x,y) = \text{something} + A(y)$.
(ii) Differentiate this $F$ in $y$ and set that equal to $N$. Then find $A(y)$ by integration.

The procedure can also be done by first integrating in $y$ and then differentiating in $x$. Pretty easy, huh? Let’s try this again.

:::example {ex:exact-example-2xyandxy} Example 1.8.2
Consider now $2x+y + xy \frac{dy}{dx} = 0$.

OK, so $M = 2x+y$ and $N=xy$. We try to proceed as before. Suppose $F$ exists. Then $F_x (x,y) = 2x+y$. We integrate:
$$ F(x,y) = x^2 + xy + A(y) $$
for some function $A(y)$. Differentiate in $y$ and set equal to $N$:
$$ N = xy = F_y (x,y) = x+A'(y) . $$
But there is no way to satisfy this requirement! The function $xy$ cannot be written as $x$ plus a function of $y$. The equation is not exact; no potential function $F$ exists.
:::

Is there an easier way to check for exactness, other than failing in trying to find $F$? Yes there is. Suppose $M = F_x$ and $N = F_y$. As long as the second derivatives are continuous,
$$ \frac{\partial M}{\partial y} = \frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y} = \frac{\partial N}{\partial x} . $$
If $M_y \neq N_x$, the equation is not exact. For example, in [Example 1.8.2](ref:exact-example-2xyandxy), where $M = 2x + y$ and $N = xy$, the equation is not exact. Indeed, $M_y = 1$ and $N_x = y$ are not equal.

What is interesting is that this idea works in reverse too. If $M_y=N_x$, then a potential exists, at least near an initial point. This result is called the Poincaré Lemma^[Named for the French polymath [Jules Henri Poincaré](https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9) (1854–1912).].

:::theorem {thm:theorem-1-8-1} Theorem 1.8.1 (Poincaré Lemma)
{index-entry:Poincaré Lemma} If $M$ and $N$ are continuously differentiable functions of $(x,y)$, and $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$, then near any point there is a function $F(x,y)$ such that $M = \frac{\partial F}{\partial x}$ and $N = \frac{\partial F}{\partial y}$.
:::

:::example {ex:exact-exactR2example} Example 1.8.3
Solve
$$ \frac{dy}{dx} = \frac{-2x-y}{x-1}, \qquad y(0) = 1. $$
Write the equation as
$$ (2x+y) + (x-1)\frac{dy}{dx} = 0 , $$
so $M = 2x+y$, $N = x-1$, and
$$ M_y = 1 = N_x . $$
The Poincaré Lemma applies, so let us look for $F$. Integrating $M$ in $x$, we find
$$ F(x,y) = x^2+xy + A(y) . $$
Differentiating in $y$ and setting to $N$, we find
$$ x-1 = x + A'(y) . $$
So $A'(y) = -1$, and $A(y) = -y$ will work. We obtain $F(x,y) = x^2+xy-y$, so the implicit solution is $x^2+xy-y = C$. First we find $C$. As $y(0)=1$, we have $F(0,1) = C$. Therefore, $0^2+0\times 1 - 1 = C$, so $C=-1$. Now we solve $x^2+xy-y = -1$ for $y$ to get
$$ y = \frac{-x^2-1}{x-1} . $$

:::

:::example {ex:exact-examplevortex} Example 1.8.4
Solve
$$ \frac{-y}{x^2+y^2} dx + \frac{x}{x^2+y^2} dy = 0 , \qquad y(1) = 2. $$
We leave to the reader to check that $M_y = N_x$, so the Poincaré Lemma applies.

This vector field $(M,N)$ is not conservative (the equation is not exact) if considered as a vector field of the entire plane minus the origin. The problem is that if the curve $\gamma$ is a circle around the origin, say starting at $(1,0)$ and ending at $(1,0)$ going counterclockwise, then if $F$ existed, we would expect
$$ 0 = F(1,0) - F(1,0) = \int_\gamma F_x \, dx + F_y \, dy = \int_\gamma \frac{-y}{x^2+y^2} \, dx + \frac{x}{x^2+y^2} \, dy = 2\pi . $$
That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function $F$ defined everywhere outside the origin $(0,0)$.

The Poincaré Lemma does not guarantee such an $F$ anyway. It only guarantees a potential function $F$ locally—only in some region containing the initial point. As $y(1) = 2$, we start at the point $(1,2)$. Considering $x > 0$ and integrating $M$ in $x$ or $N$ in $y$, we find
$$ F(x,y) = \arctan \bigl( {y}/{x} \bigr) . $$
This $F$ is defined on the region $x > 0$ and so the equation is exact on that region. The implicit solution is $\arctan \bigl( {y}/{x} \bigr) = C$. Solving, $y = \tan(C) x$. That is, the solution is a straight line. Solving $y(1) = 2$ gives us that $\tan(C) = 2$, and so $y= 2x$ is the desired solution. See [Figure 1.19](ref:exact-y2x), and note again that the solution only exists for $x > 0$.

> FIGURE {fig:exact-y2x} number=1.19 src=../../media/exact-y2x.svg
> alt: A plot in the xy-plane for x between minus 5 to 5 and y from minus 10 to 10 is shown. A blue line is drawn starting at (0,0) to the top right corner at (5,10) with a red dot marking the initial point drawn at (1,2).
> width: 4.5in
> caption: Solution to $\frac{-y}{x^2+y^2} dx + \frac{x}{x^2+y^2} dy = 0$, $y(1) = 2$, with initial point marked.

:::

If the region where $M$ and $N$ are defined and where $M_y=N_x$ has “no holes,” such as, for instance, the entire $xy$-plane, then the equation is exact and an $F$ defined on that region can be found. For example, in [Example 1.8.3](ref:exact-exactR2example), $M=2x+y$ and $N=x-1$ are defined in the entire plane and $M_y = 1 = N_x$, so a global $F$ exists there. Similarly, in [Example 1.8.4](ref:exact-examplevortex) the half-plane where $x > 0$ also has “no holes” and a potential function exists on that region. So in such cases, checking $M_y = N_x$ is good enough to check for exactness.

:::example {ex:exact-exampleabove} Example 1.8.5
Solve
$$ x^2+y^2 + 2y(x+1) \frac{dy}{dx} = 0 . $$

The reader should check that this equation is exact. Let $M= x^2+y^2$ and $N=2y(x+1)$. We follow the procedure for exact equations
$$ F(x,y) = \frac{1}{3}x^3 + xy^2 + A(y) , $$
and
$$ 2y(x+1) = 2xy + A'(y) . $$
Therefore $A'(y) = 2y$ or $A(y) = y^2$ and $F(x,y) = \frac{1}{3}x^3 + xy^2 + y^2$. We try to solve $F(x,y) = C$. We easily solve for $y^2$ and then just take the square root:
$$ y^2 = \frac{C-({1}/{3})x^3}{x+1}, \qquad \text{so} \qquad y = \pm \sqrt{\frac{C-({1}/{3})x^3}{x+1}} . $$
When $x=-1$, the term in front of $\frac{dy}{dx}$ is zero, and our explicit solution is not valid. The given equation has no solution (for $y(x)$) near $x=-1$, but the equation $(x^2+y^2) \, dx + 2y(x+1) \, dy = 0$ does have a solution $x=-1$. In fact, one could solve for $x$ in terms of $y$ for any initial condition. The solution is messy, so we leave it as $\frac{1}{3}x^3 + xy^2 + y^2 = C$.
:::

## Integrating factors

Sometimes an equation $M\, dx + N \, dy = 0$ is not exact, but it can be made exact by multiplying with a function $u(x,y)$. That is, perhaps for some nonzero function $u(x,y)$,
$$ u(x,y) M(x,y) \, dx + u(x,y) N(x,y) \, dy = 0 $$
is exact. Any solution to this new equation is also a solution to $M\, dx + N \, dy = 0$.

In fact, a linear equation
$$ \frac{dy}{dx} + p(x) y = f(x), \qquad \text{or} \qquad \bigl( p(x) y - f(x) \bigr)\, dx + dy = 0, $$
is always such an equation. Let $r(x) = e^{\int p(x)\,dx}$ be the integrating factor for the linear equation. Multiply the equation by $r(x)$ and write it in the form of $M + N \frac{dy}{dx} = 0$.
$$ r(x) p(x) y - r(x) f(x) + r(x) \frac{dy}{dx} = 0 . $$
Then $M = r(x) p(x) y - r(x) f(x)$, so $M_y = r(x) p(x)$, while $N = r(x)$, so $N_x = r'(x) = r(x) p(x)$. In other words, we have an exact equation. Integrating factors for linear functions are just a special case of integrating factors for exact equations.

But how do we find the integrating factor $u$? Well, for $uM \, dx + uN \, dy = 0$ to be exact, the function $u$ should satisfy
$$ \frac{\partial}{\partial y} \bigl[ u M \bigr] = u_y M + u M_y = \frac{\partial}{\partial x} \bigl[ u N \bigr] = u_x N + u N_x . $$
Therefore,
$$ (M_y-N_x)u = u_x N - u_y M . $$
At first it may seem we replaced one differential equation by another. Even worse, the new equation is a PDE. True, but all hope is not lost.

A strategy that often works is to look for a $u$ that is a function of $x$ alone, or a function of $y$ alone. After all, that is what worked for linear equations. If $u$ is a function of $x$ alone, that is, $u(x)$, then we write $u'(x)$ instead of $u_x$, and $u_y$ is just zero. Then
$$ \frac{M_y-N_x}{N}u = u' . $$
In particular, $\frac{M_y-N_x}{N}$ ought to be a function of $x$ alone (not depend on $y$). If so, then we have a linear equation
$$ u' - \frac{M_y-N_x}{N} u = 0 . $$
Letting $P(x) = \frac{M_y-N_x}{N}$, we solve the linear equation to find $u(x) = C e^{\int P(x) \, dx}$. The constant in the solution is not relevant, we need any nonzero solution, so we take $C=1$. Then $u(x) = e^{\int P(x) \, dx}$ is the integrating factor making the equation exact.

Similarly, we could try a function of the form $u(y)$. Then
$$ \frac{M_y-N_x}{M} u = - u' . $$
In particular, $\frac{M_y-N_x}{M}$ ought to be a function of $y$ alone. If so, we have a linear equation
$$ u' + \frac{M_y-N_x}{M} u = 0 . $$
Letting $Q(y) = \frac{M_y-N_x}{M}$, we find $u(y) = C e^{-\int Q(y) \, dy}$. We take $C=1$. So $u(y) = e^{-\int Q(y) \, dy}$ is the integrating factor.

:::example {ex:example-1-8-6} Example 1.8.6
Solve
$$ \frac{x^2+y^2}{x+1} + 2y \frac{dy}{dx} = 0 . $$

Let $M= \frac{x^2+y^2}{x+1}$ and $N=2y$. Compute
$$ M_y-N_x = \frac{2y}{x+1} - 0 = \frac{2y}{x+1} . $$
As this is not zero, the equation is not exact. We notice
$$ P(x) = \frac{M_y-N_x}{N} = \frac{2y}{x+1} \, \frac{1}{2y} = \frac{1}{x+1} $$
is a function of $x$ alone. We compute the integrating factor
$$ e^{\int P(x) \, dx} = e^{\ln (x+1)} = x+1 . $$
We multiply our given equation by $(x+1)$ to obtain
$$ x^2+y^2 + 2y(x+1) \frac{dy}{dx} = 0 , $$
which is an exact equation that we solved in [Example 1.8.5](ref:exact-exampleabove). The solution was
$$ y = \pm \sqrt{\frac{C-({1}/{3})x^3}{x+1}} . $$

:::

:::example {ex:example-1-8-7} Example 1.8.7
Solve
$$ y^2 + (xy+1) \frac{dy}{dx} = 0 . $$

First compute
$$ M_y-N_x = 2y-y = y . $$
As this is not zero, the equation is not exact. We observe
$$ Q(y) = \frac{M_y-N_x}{M} = \frac{y}{y^2} = \frac{1}{y} $$
is a function of $y$ alone. We compute the integrating factor
$$ e^{-\int Q(y) \, dy} = e^{-\ln y} = \frac{1}{y} . $$
Therefore, we look at the exact equation
$$ y + \frac{xy+1}{y} \frac{dy}{dx} = 0 . $$
The reader should double check that this equation is exact. We follow the procedure for exact equations
$$ F(x,y) = xy + A(y) , $$
and
$$ \frac{xy+1}{y} = x+\frac{1}{y} = x+ A'(y) . $$
Consequently, $A'(y) = {1}/{y}$ or $A(y) = \ln \, \lvert y \rvert$. Thus $F(x,y) = xy + \ln \, \lvert y \rvert$. It is not possible to solve $F(x,y)=C$ for $y$ in terms of elementary functions, so let us be content with the implicit solution:
$$ xy + \ln \, \lvert y \rvert = C . $$
We are looking for the general solution, and we divided by $y$ above. We should check what happens when $y=0$, as the equation itself makes perfect sense in that case. We plug in $y=0$ to find the equation is satisfied. So $y=0$ is also a solution.
:::

## Exercises

:::exercise {exercise-1-8-002} number=1.8.2 answered=no src=ch-first-order-ode.tex:3591
PROBLEM:
Solve the following exact equations, implicit general solutions will suffice:

a) $(2 xy + x^2) \, dx + (x^2+y^2+1) \, dy = 0$
b) $x^5 + y^5 \frac{dy}{dx} = 0$
c) $e^x+y^3 + 3xy^2 \frac{dy}{dx} = 0$
d) $(x+y)\cos(x)+\sin(x) + \sin(x)y' = 0$

:::

:::exercise {exercise-1-8-003} number=1.8.3 answered=no src=ch-first-order-ode.tex:3606
PROBLEM:
[2] Find the integrating factors for the following equations making them into exact equations:

a) $e^{xy} \, dx + \frac{y}{x} e^{xy} \, dy = 0$
b) $\frac{e^x+y^3}{y^2} \, dx + 3x \, dy = 0$
c) $4(y^2+x) \, dx + \frac{2x+2y^2}{y} \, dy = 0$
d) $2\sin(y) \, dx + x\cos(y)\, dy = 0$

:::

:::exercise {exercise-1-8-004} number=1.8.4 answered=no src=ch-first-order-ode.tex:3622
PROBLEM:
[2] Suppose you have an equation of the form: $f(x) + g(y) \frac{dy}{dx} = 0$.

a) Show it is exact.
b) Find the form of the potential function in terms of $f$ and $g$.

:::

:::exercise {exercise-1-8-005} number=1.8.5 answered=no src=ch-first-order-ode.tex:3634
PROBLEM:
Suppose that we have the equation $f(x) \, dx - dy = 0$.

a) Is this equation exact?
b) Find the general solution using a definite integral.

:::

:::exercise {exercise-1-8-006} number=1.8.6 answered=no src=ch-first-order-ode.tex:3644
PROBLEM:
Find the potential function $F(x,y)$ of the exact equation $\frac{1+xy}{x}\, dx + \left(\frac{1}{y} + x \right) \, dy = 0$ in two different ways.

a) Integrate $M$ in terms of $x$ and then differentiate in $y$ and set to $N$.
b) Integrate $N$ in terms of $y$ and then differentiate in $x$ and set to $M$.

:::

:::exercise {exercise-1-8-007} number=1.8.7 answered=no src=ch-first-order-ode.tex:3658
PROBLEM:
A function $u(x,y)$ is said to be a *{index:harmonic function}* if $u_{xx} + u_{yy} = 0$.

a) Show that if $u$ is harmonic, $-u_y \, dx + u_x \, dy = 0$ is an exact equation. So there exists (at least locally) the so-called *{index:harmonic conjugate}* function $v(x,y)$ such that $v_x = -u_y$ and $v_y = u_x$.

Verify that the following $u$ are harmonic and find the corresponding harmonic conjugates $v$:

b) $u = 2xy$
c) $u = e^x \cos y$
d) $u = x^3-3xy^2$

:::

:::exercise {exercise-1-8-101} number=1.8.101 answered=yes src=ch-first-order-ode.tex:3680
PROBLEM:
Solve the following exact equations, implicit general solutions will suffice:

a) $\cos(x)+ye^{xy} + xe^{xy} y' = 0$
b) $(2x+y)\, dx + (x-4y) \, dy = 0$
c) $e^x + e^y \frac{dy}{dx} = 0$
d) $(3x^2+3y)\,dx + (3y^2+3x)\, dy = 0$

SOLUTION:
a) $e^{xy}+\sin(x)=C$ b) $x^2+xy-2y^2=C$ c) $e^x+e^y=C$ d) $x^3 + 3xy+ y^3 = C$
:::

:::exercise {exercise-1-8-102} number=1.8.102 answered=yes src=ch-first-order-ode.tex:3702
PROBLEM:
Find the integrating factor for the following equations making them into exact equations:

a) $\frac{1}{y}\, dx + 3y \, dy = 0$
b) $dx - e^{-x-y} \, dy = 0$
c) $\left( \frac{\cos(x)}{y^2} + \frac{1}{y} \right) \, dx + \frac{x}{y^2} \, dy = 0$
d) $\left( 2y + \frac{y^2}{x} \right) \, dx + ( 2y+x )\, dy = 0$

SOLUTION:
a) Integrating factor is $y$, equation becomes $dx + 3y^2\,dy = 0$. b) Integrating factor is $e^x$, equation becomes $e^x \, dx - e^{-y}\,dy = 0$. c) Integrating factor is $y^2$, equation becomes $(\cos(x)+y)\, dx + x\,dy = 0$. d) Integrating factor is $x$, equation becomes $( 2xy+y^2 )\, dx + (x^2+2xy)\,dy = 0$.
:::

:::exercise {exercise-1-8-103} number=1.8.103 answered=yes src=ch-first-order-ode.tex:3730
PROBLEM:

a) Show that every separable equation $y' = f(x)g(y)$ can be written as an exact equation, and verify that it is indeed exact.
b) Rewrite $y' = xy$ as an exact equation, solve it, and verify that the solution is the same as it was in [Example 1.3.1](ref:1.3#example-yprimeisxy).

SOLUTION:
a) The equation is $- f(x) \, dx + \frac{1}{g(y)} \, dy = 0$, and this is exact because $M = -f(x)$, $N = \frac{1}{g(y)}$, so $M_y = 0 = N_x$. b) $-x \, dx + \frac{1}{y} \, dy = 0$, leads to potential function $F(x,y) = -\frac{x^2}{2} + \ln \lvert y \rvert$, solving $F(x,y) = C$ leads to the same solution as the example.
:::

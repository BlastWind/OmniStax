# 1.9 First-order linear PDEs {sec:fopde-section}

:::note [section-notes]
*Note: 1 lecture, can safely be skipped*
:::

We have only considered ODEs so far, so let us solve a linear first-order PDE. Consider
$$ a(x,t) \, u_x + b(x,t) \, u_t + c(x,t) \, u = g(x,t), \quad u(x,0) = f(x) , \quad -\infty < x < \infty, \quad t > 0 , $$
where $u(x,t)$ is a function of $x$ and $t$. We again use the notation $u_x = \frac{\partial u}{\partial x}$ and $u_t = \frac{\partial u}{\partial t}$ for convenience. The *initial condition*{index-entry:initial condition for a PDE} $u(x,0) = f(x)$ is now a function of $x$ rather than just a number. In these problems, it is useful to think of $x$ as position and $t$ as time. The equation describes the evolution of a function of $x$ as time goes on. Below, the coefficients $a$, $b$, $c$, and the function $g$ are mostly going to be constant or zero. The method we describe works with nonconstant coefficients, although the computations may get difficult quickly.

We will use the *{index:method of characteristics}*{index-entry:characteristics}. The idea is to find lines along which the equation is an ODE that we then solve. We will see this technique again for second-order PDEs when we encounter the wave equation in [§4.8](ref:4.8#dalemb-section).

:::example {ex:example-1-9-1} Example 1.9.1
Consider
$$ \alpha u_x + u_t = 0, \qquad u(x,0) = f(x) , $$
where $\alpha$ is a constant. This particular equation, $\alpha u_x + u_t = 0$, is called the *{index:transport equation}*.

The data will propagate along curves called characteristics. The idea is to change to the so-called *{index:characteristic coordinates}*, which we will call $(\xi,s)$. If we change to these coordinates, the equation simplifies. The change of variables for this equation is
$$ \xi = x - \alpha t , \qquad s = t . $$
Let us see what the equation becomes. Remember the chain rule in several variables.
$$ \begin{align*} & u_x = u_\xi \xi_x + u_s s_x = u_\xi , \\ & u_t = u_\xi \xi_t + u_s s_t = - \alpha u_\xi + u_s . \end{align*} $$
The equation in the coordinates $\xi$ and $s$ becomes
$$ \alpha \underbrace{(u_\xi)}_{u_x} + \underbrace{(- \alpha u_\xi + u_s)}_{u_t} = 0 , $$
or in other words,
$$ u_s = 0 . $$
Treating $\xi$ as simply a parameter, we have obtained the ODE $\frac{d u}{d s} = 0$. That is trivial to solve.

The solution is a function that does not depend on $s$ (but it does depend on $\xi$). That is, there is some function $A$ such that
$$ u = A(\xi) = A(x - \alpha t) . $$
The initial condition says that
$$ f(x) = u(x,0) = A(x - \alpha 0) = A(x) , $$
so $A=f$. In other words,
$$ u(x,t) = f(x-\alpha t) . $$
Everything is simply moving to the right^[That is assuming $\alpha > 0$. If $\alpha < 0$, then we are moving to the left.] with velocity $\alpha$ as $t$ increases. The curves given by the equation
$$ \xi = \text{constant} $$
are called the *characteristic curves*{index-entry:characteristic curve}. See [Figure 1.20](ref:fopde-charcurves). In this case, the solution does not change along the characteristic as $\frac{du}{ds} = 0$.

> FIGURE {fig:fopde-charcurves} number=1.20 src=../../media/char-curves.svg
> alt: A diagram of the xt-plane with three lines drawn. All three line start on the x-axis and are going steeply up and to the right. The one starting at the origin is marked as xi equals 0, the one to the right is marked as xi equals 1, and then the third one to the right of that is marked xi equals 2.
> caption: Characteristic curves.

In the $(x,t)$ coordinates, the characteristic curves satisfy $t = \frac{1}{\alpha} ( x- \xi)$, and are in fact lines. The slope of characteristic lines is $\frac{1}{\alpha}$, and for each different $\xi$, we get a different characteristic line.

We see why $\alpha u_x + u_t = 0$ is called the transport equation: Everything travels at some constant speed. This behavior is called *{index:convection}*. An example application is material being moved by a river where the material does not diffuse and is simply carried along. In this setup, $x$ is the position along the river, $t$ is the time, and $u(x,t)$ the concentration of the material at position $x$ and time $t$. See [Figure 1.21](ref:fopde-transportfig) for an example.

> FIGURE {fig:fopde-transportfig} number=1.21 src=../../media/fopde-transport-1-2.svg
> alt: Two plots in the plane for x between minus 3 to 3 and the dependent axis between a bit less than 0.0 and a bit above 1.0. On the left plot, there is a graph of a function which is mostly horizontal at level 0 except for a sharp peak up to level 1 when x equals 0. On the right plot, it is the same exact peak but it is now centered at x equals 1.
> width: 9in
> caption: Example of “transport” in $u_x+u_t = 0$ (that is, $\alpha = 1$) where the initial condition $f(x)$ is a peak at the origin. On the left is a graph of the initial condition $u(x,0)$. On the right is a graph of the function $u(x,1)$, that is, at time $t=1$. Notice it is the same graph shifted one unit to the right.

:::

We use a similar idea in the more general case:
$$ a u_x + b u_t + c u = g, \qquad u(x,0) = f(x) . $$
We change coordinates to the characteristic coordinates, which we call $(\xi,s)$. These are coordinates where $a u_x + b u_t$ becomes differentiation in the $s$ variable.

Along the characteristic curves (where $\xi$ is constant), we get a new ODE in the $s$ variable. In the transport equation, we got the simple $\frac{du}{ds} = 0$. In general, we get the linear equation
$$ \frac{du}{ds} + c u = g. $$ {eq:eq-fopde-charode} number=1.6
We think of everything as a function of $\xi$ and $s$, although we are thinking of $\xi$ as a parameter rather than an independent variable. So the equation is an ODE. It is a linear ODE that we can solve using the integrating factor.

To find the characteristics, think of a curve given parametrically $\bigl(x(s),t(s)\bigr)$. We try to have the curve satisfy
$$ \frac{dx}{ds} = a, \qquad \frac{dt}{ds} = b . $$
Why? Because when we think of $x$ and $t$ as functions of $s$, we find, using the chain rule,
$$ \frac{du}{ds} + c u = \underbrace{\left( u_x \frac{dx}{ds} + u_t \frac{dt}{ds}\right)}_{\frac{du}{ds}} + c u = a u_x + b u_t + c u = g . $$
So we get the ODE [(1.6)](ref:eq-fopde-charode), which then describes the value of the solution $u$ of the PDE along this characteristic curve. It is convenient to make sure that $s=0$ corresponds to $t=0$, that is, $t(0) = 0$. It will also be convenient for $x(0) = \xi$. See [Figure 1.22](ref:fopde-charcurvecurvy).

> FIGURE {fig:fopde-charcurvecurvy} number=1.22 src=../../media/char-curve-curvy.svg
> alt: A diagram of the xt-plane with a sample characteristic curve drawn starting on the x-axis and going up. The point on the curve that sits on the x-axis is marked as x equals xi and also s equals 0. The general point on the curve is marked as (x of s, t of s). The entire curve is marked as xi equals constant.
> caption: General characteristic curve.

:::example {ex:example-1-9-2} Example 1.9.2
Consider
$$ u_x + u_t + u = x, \qquad u(x,0) = e^{-x^2} . $$
We find the characteristics, that is, the curves given by
$$ \frac{dx}{ds} = 1, \qquad \frac{dt}{ds} = 1 . $$
So
$$ x = s + c_1, \qquad t = s+ c_2 , $$
for some $c_1$ and $c_2$. At $s=0$, we want $x=\xi$ and $t=0$. So we let $c_1 = \xi$ and $c_2 = 0$:
$$ x = s + \xi, \qquad t = s . $$

The ODE is $\frac{du}{ds} + u = x$, and $x = s+\xi$. So, the ODE to solve along the characteristic is
$$ \frac{du}{ds} + u = s+ \xi . $$
The general solution of this equation, treating $\xi$ as a parameter, is $u = C e^{-s}+s+\xi-1$, for some $C$, which can depend on $\xi$. At $s=0$, our initial condition is that $u$ is $e^{-\xi^2}$, since at $s=0$, we have $x=\xi$. Given this initial condition, we find $C=e^{-\xi^2} - \xi +1$. So,
$$ \begin{split} u & = \bigl(e^{-\xi^2} - \xi +1\bigr) e^{-s}+s+\xi-1 \\ & = e^{-\xi^2-s} + (1 - \xi) e^{-s} +s+\xi-1 . \end{split} $$
Substitute $\xi = x-t$ and $s=t$ to find $u$ in terms of $x$ and $t$:
$$ \begin{split} u & = e^{-\xi^2-s} + (1 - \xi) e^{-s} +s+\xi-1 \\ & = e^{-{(x-t)}^2-t} + (1 - x + t) e^{-t} +x-1 . \end{split} $$
See [Figure 1.23](ref:fopde-surfaceplot) for a plot of $u(x,t)$ as a function of two variables.

> FIGURE {fig:fopde-surfaceplot} number=1.23 src=../../media/sol-to-fo-pde.svg
> alt: A surface plot of a function u of (x,t) for x between minus 3 and 3 and t between 0 and 3. When t equals 0, the surface looks like a flat line then a peak and going back down towards a flat line. As t grows the surface becomes, as t grows, closer and closer to a sideways flat surface that goes up as x grows. At t equals 3 it looks almost completely straight from a bit less than minus 3 at x equals minus 3 and goes up to a bit below 2.
> width: 7.5in
> caption: Plot of the solution $u(x,t)$ to $u_x + u_t + u = x$, $u(x,0) = e^{-x^2}$.

:::

When the coefficients are not constants, the characteristic curves are not going to be straight lines anymore.

:::example {ex:example-1-9-3} Example 1.9.3
Consider the following variable-coefficient equation:
$$ x u_x + u_t + 2 u = 0, \qquad u(x,0) = \cos(x) . $$
We find the characteristics, that is, the curves given by
$$ \frac{dx}{ds} = x, \qquad \frac{dt}{ds} = 1 . $$
So
$$ x = c_1 e^{s} , \qquad t = s+ c_2 . $$
At $s=0$, we wish to get $x=\xi$ and $t=0$ as before. So
$$ x = \xi e^s, \qquad t = s . $$

OK, the ODE we need to solve is
$$ \frac{du}{ds} + 2 u = 0 . $$
This is for a fixed $\xi$. We find $u = C e^{-2s}$. At $s=0$, we want $u$ to be $\cos(\xi)$, so that is our initial condition for the ODE. Hence, $C = \cos(\xi)$. We solve for $\xi$ and $s$ to find $\xi = xe^{-t}$ and $s=t$. Consequently,
$$ u = e^{-2s} \cos(\xi)= e^{-2t} \cos(xe^{-t}) . $$

:::

We make a few closing remarks. One thing to keep in mind is that we would get into trouble if the coefficient in front of $u_t$, that is, the $b$, is ever zero. Let us consider a quick example of what can go wrong:
$$ u_x + u = 0, \qquad u(x,0) = \sin(x). $$
This problem has no solution. If we had a solution, it would imply that $u_x(x,0) = \cos(x)$, but $u_x(x,0) + u(x,0) = \cos(x) + \sin(x) \neq 0$. The problem is that the characteristic curve is now the line $t=0$, and the solution is already provided on that line! As $b$ ought to then be nonzero, it is convenient to ensure that $b$ is positive by multiplying the equation by $-1$ if necessary, so that a positive $s$ means a positive $t$.

Another remark is that if $a$ or $b$ in the equation are not constants, the computations can quickly get out of hand, as the expressions for the characteristic coordinates become messy and then solving the ODE becomes even messier. In the examples above, $b$ was always $1$, meaning we got $s=t$ in the characteristic coordinates. If $b$ is not constant, your expression for $s$ will be more complicated.

Finding the characteristic coordinates is really a system of ODEs in general if $a$ depends on $t$ or if $b$ depends on $x$. In that case, we would need techniques of systems of ODEs to solve, see [chapter 3](ref:3#sys-chapter) or [chapter 8](ref:8#nlin-chapter). In general, if $a$ and $b$ are not linear functions or constants, finding closed-form expressions for the characteristic coordinates may be impossible.

Finally, the method of characteristics applies to nonlinear first-order PDEs as well. In the nonlinear case, the characteristics depend not only on the differential equation, but also on the initial data. This leads to not only more difficult computations, but also the formation of singularities where the solution breaks down at a certain point in time. An example application where first-order nonlinear PDEs come up is traffic flow theory, and you have probably experienced the formation of singularities: traffic jams. But we digress.

## Exercises

:::exercise {exercise-1-9-001} number=1.9.1 answered=no src=ch-first-order-ode.tex:4111
PROBLEM:
Solve

a) $9u_x + u_t = 0$, $u(x,0) = \sin(x)$,
b) $-8u_x + u_t = 0$, $u(x,0) = \sin(x)$,
c) $\pi u_x + u_t = 0$, $u(x,0) = \sin(x)$,
d) $\pi u_x + u_t + u = 0$, $u(x,0) = \sin(x)$.

:::

:::exercise {exercise-1-9-002} number=1.9.2 answered=no src=ch-first-order-ode.tex:4121
PROBLEM:
Solve $3u_x + u_t = 1$, $u(x,0) = x^2$.
:::

:::exercise {exercise-1-9-003} number=1.9.3 answered=no src=ch-first-order-ode.tex:4125
PROBLEM:
Solve $3u_x + u_t = x$, $u(x,0) = e^x$.
:::

:::exercise {exercise-1-9-004} number=1.9.4 answered=no src=ch-first-order-ode.tex:4129
PROBLEM:
Solve $u_x+u_t+xu = 0$, $u(x,0) = \cos(x)$.
:::

:::exercise {exercise-1-9-005} number=1.9.5 answered=no src=ch-first-order-ode.tex:4133
PROBLEM:

a) Find the characteristic coordinates for the following equations:

1) $u_x+u_t + u = 1$, $u(x,0) = \cos(x)$, 2) $2u_x+2u_t +2u = 2$, $u(x,0) = \cos(x)$.
b) Solve the two equations using the coordinates.
c) Explain why you got the same solution, although the characteristic coordinates you found were different.

:::

:::exercise {exercise-1-9-006} number=1.9.6 answered=no src=ch-first-order-ode.tex:4149
PROBLEM:
Solve $x^2 u_x + (1+x^2) u_t + e^x u = 0$, $u(x,0) = 0$. Hint: Think a little out of the box.
:::

:::exercise {exercise-1-9-101} number=1.9.101 answered=yes src=ch-first-order-ode.tex:4156
PROBLEM:
Solve

a) $-5u_x + u_t = 0$, $u(x,0) = \frac{1}{1+x^2}$,
b) $2u_x + u_t = 0$, $u(x,0) = \cos(x)$.

SOLUTION:
a) $u = \frac{1}{1+{(x+5t)}^2}$ b) $u = \cos(x-2t)$
:::

:::exercise {exercise-1-9-102} number=1.9.102 answered=yes src=ch-first-order-ode.tex:4169
PROBLEM:
Solve $u_x+u_t+tu = 0$, $u(x,0) = \cos(x)$.
SOLUTION:
$u = \cos(x-t)e^{-t^2/2}$
:::

:::exercise {exercise-1-9-103} number=1.9.103 answered=yes src=ch-first-order-ode.tex:4176
PROBLEM:
Solve $u_x+u_t = 5$, $u(x,0) = x$.
SOLUTION:
$u = x + 4t$
:::

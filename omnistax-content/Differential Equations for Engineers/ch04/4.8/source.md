# 4.8 D’Alembert solution of the wave equation {sec:dalemb-section}

:::note [section-notes]
*Note: 1 lecture, different from §9.6 in [EP](cite:EP), part of §10.7 in [BD](cite:BD)*
:::

We have solved the wave equation by using Fourier series. But it is often more convenient to use the so-called *{index:d’Alembert solution to the wave equation}*^[Named after the French mathematician [Jean le Rond d’Alembert](https://en.wikipedia.org/wiki/D%27Alembert) (1717–1783).]. While this solution can be derived using Fourier series as well, it is really an awkward use of those concepts. It is easier and more instructive to derive this solution by making a correct change of variables to get an equation that can be solved by simple integration.

Suppose we wish to solve the {index:wave equation}
$$ y_{tt} = a^2 y_{xx} $$ {eq:dalemb-weq} number=4.15
in the region $0 < x < L$ and $t > 0$ subject to the side conditions
$$ \begin{array}{ll} y(0,t) = y(L,t) = 0 & \qquad \text{for } \; t > 0 , \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < L , \\ y_t(x,0) = g(x) & \qquad \text{for } \; 0 < x < L . \end{array} $$ {eq:dalemb-weqside} number=4.16

## Change of variables

We will transform the equation into a simpler form where it can be solved by simple integration. We change variables to $\xi = x - at$, $\eta = x + at$. The chain rule says:
$$ \begin{align*} & \frac{\partial}{\partial x} = \frac{\partial \xi}{\partial x} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial x} \frac{\partial}{\partial \eta} = \frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta} , \\ & \frac{\partial}{\partial t} = \frac{\partial \xi}{\partial t} \frac{\partial}{\partial \xi} + \frac{\partial \eta}{\partial t} \frac{\partial}{\partial \eta} = -a \frac{\partial}{\partial \xi} + a \frac{\partial}{\partial \eta} . \end{align*} $$
We compute
$$ \begin{align*} & y_{xx} = \frac{\partial^2 y}{\partial x^2} = \left( \frac{\partial}{\partial \xi} + \frac{\partial}{\partial \eta} \right) \left( \frac{\partial y}{\partial \xi} + \frac{\partial y}{\partial \eta} \right) = \frac{\partial^2 y}{\partial \xi^2} + 2 \frac{\partial^2 y}{\partial \xi \partial \eta} + \frac{\partial^2 y}{\partial \eta^2} , \\ & y_{tt} = \frac{\partial^2 y}{\partial t^2} = \left( -a \frac{\partial}{\partial \xi} + a \frac{\partial}{\partial \eta} \right) \left( -a \frac{\partial y}{\partial \xi} + a \frac{\partial y}{\partial \eta} \right) = a^2 \frac{\partial^2 y}{\partial \xi^2} - 2 a^2 \frac{\partial^2 y}{\partial \xi \partial \eta} + a^2 \frac{\partial^2 y}{\partial \eta^2} . \end{align*} $$
In the computations above, we used the fact from calculus that $\frac{\partial^2 y}{\partial \xi \partial \eta} = \frac{\partial^2 y}{\partial \eta \partial \xi}$. We plug what we got into the wave equation,
$$ 0 = a^2 y_{xx} - y_{tt} = 4 a^2 \frac{\partial^2 y}{\partial \xi \partial \eta} = 4 a^2 y_{\xi\eta} . $$
Therefore, the wave equation [(4.15)](ref:dalemb-weq) transforms into $y_{\xi\eta} = 0$. It is easy to find the general solution to this new equation by integrating twice. Keeping $\xi$ constant, we integrate with respect to $\eta$ first^[There is nothing special about $\eta$, you can integrate with $\xi$ first, if you wish.] and note that the constant of integration depends on $\xi$; for each $\xi$, we may get a different constant of integration. We get $y_{\xi} = C(\xi)$. Next, we integrate with respect to $\xi$ and note that the constant of integration depends on $\eta$. Thus, $y = \int C(\xi) \, d\xi + B(\eta)$. The solution must, therefore, be of the following form for some functions $A(\xi)$ and $B(\eta)$:
$$ y = A(\xi) + B(\eta) = A(x-at) + B(x+at) . $$
The solution is a superposition of two functions (waves) traveling at speed $a$ in opposite directions. The coordinates $\xi$ and $\eta$ are called the *{index:characteristic coordinates}*, and a similar technique can be applied to more complicated hyperbolic PDEs. In [§1.9](ref:1.9#fopde-section) it is used to solve first-order linear PDEs. Basically, to solve the wave equation (or more general hyperbolic equations) we find certain characteristic curves along which the equation is really just an ODE, or a pair of ODEs. In this case, these are the curves where $\xi$ and $\eta$ are constant.

## D’Alembert’s formula

We know what any solution must look like, but we need to solve for the given side conditions. We will just give the formula and see that it works. Let $F(x)$ denote the odd periodic extension of $f(x)$, and let $G(x)$ denote the odd periodic extension of $g(x)$. Define
$$ A(x) = \frac{1}{2} F(x) - \frac{1}{2a} \int_0^x G(s) \,ds , \qquad B(x) = \frac{1}{2} F(x) + \frac{1}{2a} \int_0^x G(s) \,ds . $$
We claim these $A(x)$ and $B(x)$ give the solution. Explicitly, the solution is $y(x,t) = A(x-at) + B(x+at)$ or in other words:
$$ \boxed{~~ \begin{aligned} y(x,t) & = \frac{1}{2} F(x-at) - \frac{1}{2a} \int_0^{x-at} G(s) \,ds + \frac{1}{2} F(x+at) + \frac{1}{2a} \int_0^{x+at} G(s) \,ds \\ & = \frac{F(x-at) + F(x+at)}{2} + \frac{1}{2a} \int_{x-at}^{x+at} G(s) \,ds . \end{aligned} ~~} $$ {eq:dalemb-form} number=4.17

Let us check that the d’Alembert formula really works. First,
$$ y(x,0) = \frac{F(x) + F(x)}{2} + \frac{1}{2a} \int_{x}^{x} G(s) \,ds = F(x) . $$
So far so good. Assume for simplicity $F$ is differentiable. And we use the first form of [(4.17)](ref:dalemb-form) as it is easier to differentiate. By the fundamental theorem of calculus we have
$$ y_t(x,t) = \frac{-a}{2} F'(x-at) + \frac{1}{2} G(x-at) + \frac{a}{2} F'(x+at) + \frac{1}{2} G(x+at) . $$
So
$$ y_t(x,0) = \frac{-a}{2} F'(x) + \frac{1}{2} G(x) + \frac{a}{2} F'(x) + \frac{1}{2} G(x) = G(x) . $$
Yay! We’re smoking now. OK, now the boundary conditions. Note that $F(x)$ and $G(x)$ are odd. So
$$ \begin{split} y(0,t) & = \frac{F(-at) + F(at)}{2} + \frac{1}{2a} \int_{-at}^{at} G(s) \,ds \\ & = \frac{-F(at) + F(at)}{2} + \frac{1}{2a} \int_{-at}^{at} G(s) \,ds = 0 + 0 = 0. \end{split} $$
Now $F(x)$ is odd and $2L$-periodic, so
$$ F(L-at)+F(L+at) = F(-L-at)+F(L+at) = -F(L+at)+F(L+at) = 0 . $$
Next, $G(s)$ is odd and $2L$-periodic, so we change variables $v = s-L$. We then notice that $G(v+L)=G(v-L)=-G(-v+L)$, so $G(v+L)$ is odd as a function of $v$:
$$ \int_{L-at}^{L+at} G(s)\,ds = \int_{-at}^{at} G(v+L)\,dv = 0 . $$
Hence
$$ y(L,t) = \frac{F(L-at) + F(L+at)}{2} + \frac{1}{2a} \int_{L-at}^{L+at} G(s) \,ds = 0 + 0 = 0. $$
And voilà, it works.

:::example {ex:dalemb-implusexample} Example 4.8.1
D’Alembert says that the solution is a superposition of two functions (waves) moving in opposite directions at “speed” $a$. To get an idea of how it works, we work out the following example. Consider the simpler setup
$$ \begin{array}{ll} y_{tt} = y_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ y(0,t) = y(1,t) = 0 & \qquad \text{for } \; t > 0, \\ y(x,0) = f(x) & \qquad \text{for } \; 0 < x < 1, \\ y_t(x,0) = 0 & \qquad \text{for } \; 0 < x < 1 . \end{array} $$
Let $f(x)$ be the following triangular impulse of height 1 centered at $x=0.5$:
$$ f(x) = \begin{cases} 0 & \text{if } \; \phantom{0.5}0 \leq x < 0.45, \\ 20\,(x-0.45) & \text{if } \; 0.45 \leq x < 0.5, \\ 20\,(0.55-x) & \text{if } \; \phantom{5}0.5 \leq x < 0.55, \\ 0 & \text{if } \; 0.55 \leq x \leq 1 . \end{cases} $$
The graph of this impulse is the top left plot in [Figure 4.24](ref:dalemb-impulsfig).

Let $F(x)$ be the odd periodic extension of $f(x)$. Then [(4.17)](ref:dalemb-form) says that the solution is
$$ y(x,t) = \frac{F(x-t) + F(x+t)}{2} . $$
It is not hard to compute specific values of $y(x,t)$. For example, to compute $y(0.1,0.6)$, we notice $x-t = -0.5$ and $x+t = 0.7$. Now $F(-0.5) = -f(0.5) = - 20\,(0.55 - 0.5) = -1$ and $F(0.7) = f(0.7) = 0$. Hence $y(0.1,0.6) = \frac{-1 + 0}{2} = -0.5$. As you can see, the d’Alembert solution is much easier to actually compute and to plot than the Fourier series solution. See [Figure 4.24](ref:dalemb-impulsfig) for plots of the solution $y$ for several different $t$.

> FIGURE {fig:dalemb-impulsfig} number=4.24
> subfigure src=../../media/dalemb-impuls-1-2.svg alt: Two graphs of the shape of the solution of the wave equation in the xy-plane for different fixed t, where x is between 0 and 1. On the left is the initial shape at t equals 0, which is composed of line segments and is a horizontal segment at y equals 0 until almost the middle of the plot, then rises and falls into a sharp peak up to y equals 1. It is then a horizontal segment at y equals 0 until the right end. On the right is a similar picture for the shape at t equals 0.2, but now it has two smaller peaks which only rise to 0.5 one on each side (symmetrically) of the center.
> subfigure src=../../media/dalemb-impuls-3-4.svg alt: Two graphs of the shape of the solution of the wave equation in the xy-plane for different fixed t, where x is between 0 and 1. On the left is the shape at t equals 0.4, which is similar to the shape at t equals 0.2 above, but now the two peaks are closer to the sides. They still rise to y equals 0.5. On the right is the shape at t equals 0.6, which is an inverted shape of the picture at t equals 0.4, that is, the peaks are now going down to y equals minus 0.5.
> caption: Plot of the d’Alembert solution for $t=0$, $t=0.2$, $t=0.4$, and $t=0.6$.

:::

## Another way to solve for the side conditions

It is perhaps easier and more useful to remember the procedure rather than memorizing the formula itself. The important thing is that a solution to the wave equation is a superposition of two waves traveling in opposite directions. That is,
$$ y(x,t) = A(x-at) + B(x+at) . $$
If you think about it, the exact formulas for $A$ and $B$ are not hard to guess once you realize what kind of side conditions $y(x,t)$ is supposed to satisfy. Let us walk through the formula again, but slightly differently. The best approach is to do it in stages. When $g(x) = 0$ (and hence $G(x) = 0$), the solution is
$$ \frac{ F(x-at) + F(x+at) }{2} . $$
On the other hand, when $f(x) = 0$ (and hence $F(x) = 0$), we let
$$ H(x) = \int_0^x G(s) \,ds . $$
The solution in this case is
$$ \frac{1}{2a} \int_{x-at}^{x+at} G(s) \,ds = \frac{ -H(x-at) + H(x+at) }{2a} . $$
By superposition, we get a solution for the general side conditions [(4.16)](ref:dalemb-weqside) (when neither $f(x)$ nor $g(x)$ are identically zero).
$$ y(x,t) = \frac{ F(x-at) + F(x+at) }{2} + \frac{ -H(x-at) + H(x+at) }{2a} . $$ {eq:dalemb-altform} number=4.18
Do note the minus sign before the $H$ and the $a$ in the second denominator.

:::exercise {exercise-4-8-001} number=4.8.1 answered=no src=ch-fourier-and-pde.tex:5226
PROBLEM:
Check that the new formula [(4.18)](ref:dalemb-altform) satisfies the side conditions [(4.16)](ref:dalemb-weqside).
:::

**Warning:** Make sure you use the odd periodic extensions $F(x)$ and $G(x)$, when you have formulas for $f(x)$ and $g(x)$. The thing is, those formulas in general hold only for $0 < x < L$ and are not usually equal to $F(x)$ and $G(x)$ for other $x$.

## Some remarks

We remark that the formula $y(x,t) = A(x-at) + B(x+at)$ is the reason why the solution of the wave equation does not get “nicer” as time goes on, that is, why in the examples where the initial conditions had corners, the solution also has corners at every time $t$.

The corners bring us to another interesting remark. Nobody ever notices at first that our example solutions are not even differentiable (they have corners): In [Example 4.8.1](ref:dalemb-implusexample) above, the solution is not differentiable whenever $x=t+0.5$ or $x=-t+0.5$ for example. Really, to be able to compute $y_{xx}$ or $y_{tt}$, you need not one, but two derivatives. Fear not, we could think of a shape that is very nearly $F(x)$ but does have two derivatives by rounding the corners a little bit, and then the solution would be very nearly $\frac{F(x-t)+F(x+t)}{2}$ and nobody would notice the switch.

One final remark is what the d’Alembert solution tells us about what bits of the initial conditions influence the solution at a certain point. We can figure this out by “traveling backwards along the characteristics.” Suppose that the string is very long (perhaps infinite) for simplicity. Since the solution at time $t$ is
$$ y(x,t) = \frac{F(x-at) + F(x+at)}{2} + \frac{1}{2a} \int_{x-at}^{x+at} G(s) \,ds , $$
we notice that we have only used the initial conditions in the interval $[x-at,x+at]$. The endpoints of this interval are called the *{index:wavefronts}*, as that is where the wave front is, given an initial ($t=0$) disturbance at $x$. If $a=1$, an observer sitting at $x=0$ at time $t=1$ has only seen the initial conditions for $x$ in the interval $[-1,1]$ and is blissfully unaware of anything else. This is why, for example, we do not know that a supernova has occurred in the universe until we see its light, millions of years from the time when it happened.

## Exercises

:::exercise {exercise-4-8-002} number=4.8.2 answered=no src=ch-fourier-and-pde.tex:5282
PROBLEM:
Using the d’Alembert solution solve $y_{tt} = 4y_{xx}$, $0 < x < \pi$, $t > 0$, $y(0,t) = y(\pi, t) = 0$, $y(x,0) = \sin x$, and $y_t(x,0) = \sin x$. Hint: Note that $\sin x$ is the odd periodic extension of $y(x,0)$ and $y_t(x,0)$.
:::

:::exercise {exercise-4-8-003} number=4.8.3 answered=no src=ch-fourier-and-pde.tex:5290
PROBLEM:
Using the d’Alembert solution solve $y_{tt} = 2y_{xx}$, $0 < x < 1$, $t > 0$, $y(0,t) = y(1, t) = 0$, $y(x,0) = \sin^5 (\pi x)$, and $y_t(x,0) = \sin^3 (\pi x)$.
:::

:::exercise {exercise-4-8-004} number=4.8.4 answered=no src=ch-fourier-and-pde.tex:5296
PROBLEM:
Take $y_{tt} = 4y_{xx}$, $0 < x < \pi$, $t > 0$, $y(0,t) = y(\pi, t) = 0$, $y(x,0) = x(\pi-x)$, and $y_t(x,0) = 0$.

a) Solve using the d’Alembert formula. Hint: You can use the sine series for $y(x,0)$.
b) Find the solution as a function of $x$ for a fixed $t=0.5$, $t=1$, and $t=2$. Do not use the sine series here.

:::

:::exercise {exercise-4-8-005} number=4.8.5 answered=no src=ch-fourier-and-pde.tex:5309
PROBLEM:
Derive the d’Alembert solution for $y_{tt} = a^2 y_{xx}$, $0 < x < \pi$, $t > 0$, $y(0,t) = y(\pi, t) = 0$, $y(x,0) = f(x)$, and $y_t(x,0) = 0$, using the Fourier series solution of the wave equation, by applying an appropriate trigonometric identity. Hint: Do it first for a single term of the Fourier series solution, in particular do it when $y$ is $\sin(n x )\cos(n a t )$.
:::

:::exercise {exercise-4-8-006} number=4.8.6 answered=no src=ch-fourier-and-pde.tex:5320
PROBLEM:
The d’Alembert solution still works if there are no boundary conditions and the initial condition is defined on the whole real line. Suppose that $y_{tt} = y_{xx}$ (for all $x$ on the real line and $t \geq 0$), $y(x,0) = f(x)$, and $y_t(x,0) = 0$, where
$$ f(x) = \begin{cases} 0 & \text{if } \; \phantom{{-1} \leq {} }x < -1, \\ x+1 & \text{if } \; {-1} \leq x < 0, \\ -x+1 & \text{if } \; \phantom{-}0 \leq x < 1, \\ 0 & \text{if } \; \phantom{-}1 < x . \end{cases} $$
Solve using the d’Alembert solution. That is, write down a piecewise definition for the solution. Then sketch the solution for $t=0$, $t={1}/{2}$, $t=1$, and $t=2$.
:::

:::exercise {exercise-4-8-101} number=4.8.101 answered=yes src=ch-fourier-and-pde.tex:5342
PROBLEM:
Using the d’Alembert solution solve $y_{tt} = 9y_{xx}$, $0 < x < 1$, $t > 0$, $y(0,t) = y(1, t) = 0$, $y(x,0) = \sin (2 \pi x)$, and $y_t(x,0) = \sin (3 \pi x)$.
SOLUTION:
$y(x,t)= \frac{\sin(2 \pi (x-3 t))+\sin(2 \pi (3 t+x))}{2} + \frac{\cos(3 \pi (x-3 t))-\cos(3 \pi (3 t+x))}{18\pi}$
:::

:::exercise {exercise-4-8-102} number=4.8.102 answered=yes src=ch-fourier-and-pde.tex:5355
PROBLEM:
Take $y_{tt} = 4y_{xx}$, $0 < x < 1$, $t > 0$, $y(0,t) = y(1, t) = 0$, $y(x,0) = x-x^2$, and $y_t(x,0) = 0$. Using the d’Alembert solution find the solution at

a) $t=0.1$,
b) $t={1}/{2}$,
c) $t=1$.

You may have to split your answer up by cases.
SOLUTION:
a) $y(x,0.1) = \begin{cases} x-x^2-0.04 & \text{if } \; 0.2 \leq x \leq 0.8 \\ 0.6x & \text{if } \; x \leq 0.2 \\ 0.6-0.6x & \text{if } \; x \geq 0.8 \\ \end{cases}$
b) $y(x,{1}/{2}) = -x+x^2$ c) $y(x,1) = x-x^2$
:::

:::exercise {exercise-4-8-103} number=4.8.103 answered=yes src=ch-fourier-and-pde.tex:5389
PROBLEM:
Take $y_{tt} = 100y_{xx}$, $0 < x < 4$, $t > 0$, $y(0,t) = y(4, t) = 0$, $y(x,0) = F(x)$, and $y_t(x,0) = 0$. Suppose that $F(0)=0$, $F(1)=2$, $F(2)=3$, $F(3)=1$. Using the d’Alembert solution find

a) $y(1,1)$,
b) $y(4,3)$,
c) $y(3,9)$.

SOLUTION:
a) $y(1,1) = -{1}/{2}$ b) $y(4,3) = 0$ c) $y(3,9) = {1}/{2}$
:::

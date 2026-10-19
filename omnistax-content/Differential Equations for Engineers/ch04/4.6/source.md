# 4.6 PDEs, separation of variables, and the heat equation {sec:heateq-section}

:::note [section-notes]
*Note: 2 lectures, §9.5 in [EP](cite:EP), §10.5 in [BD](cite:BD)*
:::

Recall that a *{index:partial differential equation}* or *{index:PDE}* is an equation containing the partial derivatives with respect to *several* independent variables. Solving PDEs will be our main application of Fourier series.

A PDE is said to be *linear{index-entry:linear PDE}* if the dependent variable and its derivatives appear at most to the first power and in no functions. We will only talk about linear PDEs. Together with a PDE, we usually specify some *boundary conditions{index-entry:boundary conditions for a PDE}*, where the value of the solution or its derivatives is given along the boundary of a region, and/or some *initial conditions{index-entry:initial conditions for a PDE}* where the value of the solution or its derivatives is given for some initial time. Sometimes such conditions are mixed together and we will refer to them simply as *side conditions{index-entry:side conditions for a PDE}*.

We will study three specific partial differential equations, each one representing a general class of equations. First, we will study the *{index:heat equation}*, which is an example of a *{index:parabolic PDE}*. Next, we will study the *{index:wave equation}*, which is an example of a *{index:hyperbolic PDE}*. Finally, we will study the *{index:Laplace equation}*, which is an example of an *{index:elliptic PDE}*. Each of our examples will illustrate behavior that is typical for the whole class.

## Heat on an insulated wire

We start with the heat equation. Consider a wire (or a thin metal rod) of length $L$ insulated along its length except at the endpoints. Let $x$ denote the position along the wire and let $t$ denote time. See [Figure 4.15](ref:heat-wirefig).

> FIGURE {fig:heat-wirefig} number=4.15 src=../../media/heat-wire.svg
> alt: A diagram of a straight insulated wire that lies on the x-axis starting at x equals 0 and ending at x equals L. The wire is insulated along its length except at the endpoints. The vertical axis is labeled as 'temperature u'.
> caption: Insulated wire.

Let $u(x,t)$ denote the temperature at point $x$ at time $t$. The equation governing this setup is the so-called *{index:one-dimensional heat equation}*{index-entry:heat equation}:
$$ \boxed{~~ \frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2} , ~~} $$
where $k > 0$ is a constant (the *{index:thermal diffusivity}* of the material). That is, the change in heat with respect to time at some point is proportional to the second derivative of the heat in the $x$ direction—along the wire. This makes sense; if at a fixed $t$ the graph of the heat distribution has a maximum (the graph is concave down and the second $x$ derivative is negative), then heat should flow away from the maximum and so the $t$ derivative should also be negative. Similarly at a minimum, heat wants to flow in.

We generally use a more convenient notation for partial derivatives. We write $u_t$ instead of $\frac{\partial u}{\partial t}$, and we write $u_{xx}$ instead of $\frac{\partial^2 u}{\partial x^2}$. With this notation the heat equation becomes
$$ u_t = k u_{xx} . $$

The region in which we will solve the heat equation is given by
$$ 0 < x < L \quad \text{and} \quad t > 0 . $$

> IMAGE {img:heateqregion} src=../../media/heateqregion.svg
> alt: A diagram of a region in the xt-plane where the x-axis is the horizontal axis and t the vertical. The region is the infinite half-strip where t is positive and x is between 0 and L and this region is shaded in the figure. The shaded region is labeled with the differential equation u sub t equals k times u sub xx. The boundary of this region is given by 3 lines. The left boundary is the half infinite line along the t axis from t equals 0 to infinity, and this boundary line is labeled as 'u equals 0 or u sub x equals 0'. The bottom boundary is the segment of the x-axis from x equals 0 to x equals L, and this segment is labeled as u equals f of x. The right boundary is the half infinite vertical line where x equals L and t is positive. This line is labeled as 'u equals 0 or u sub x equals 0'.

We must also have some side conditions on the boundaries of that region. We assume that the ends of the wire are either exposed and touching some body of constant heat, or the ends are insulated. If the ends of the wire are kept at temperature 0, then the conditions are
$$ u(0,t) = 0 \quad \text{and} \quad u(L,t) = 0 \quad \text{for } \; t > 0. $$
If, on the other hand, the ends are insulated, the conditions are
$$ u_x(0,t) = 0 \quad \text{and} \quad u_x(L,t) = 0 \quad \text{for } \; t > 0 . $$
Let us see why that is so. If $u_x$ is positive at some point $x_0$, then at a particular time, $u$ is smaller to the left of $x_0$ and higher to the right of $x_0$. Heat is flowing from high temperature to low temperature, that is, to the left. On the other hand, if $u_x$ is negative, then heat is again flowing from high temperature to low temperature, that is, to the right. So when $u_x$ is zero, we are at a point where heat is not flowing in either direction. In other words, $u_x(0,t) = 0$ means no heat is flowing in or out of the wire at the point $x=0$.

We have two conditions along the $x$-axis as there are two derivatives in the $x$ direction. These side conditions are said to be *homogeneous{index-entry:homogeneous side conditions}* (i.e. $u$ or a derivative of $u$ is set to zero).

We also need an initial condition—the temperature distribution at time $t=0$. That is,
$$ u(x,0) = f(x) \quad \text{for } \; 0 < x < L , $$
for some known function $f(x)$. This initial condition is not a homogeneous side condition.

## Separation of variables

The heat equation is linear as $u$ and its derivatives do not appear to any powers or in any functions, and it is homogeneous—there is no term independent of $u$. Thus the principle of {index:superposition} still applies for the heat equation (without side conditions): If $u_1$ and $u_2$ are solutions and $c_1$, $c_2$ are constants, then $u = c_1 u_1 + c_2 u_2$ is also a solution.

:::exercise {exercise-4-6-001} number=4.6.1 answered=no src=ch-fourier-and-pde.tex:3522
PROBLEM:
Verify the principle of superposition for the heat equation.
:::

Superposition preserves some side conditions. If $u_1$ and $u_2$ are solutions that satisfy $u(0,t) = 0$ and $u(L,t) = 0$, and $c_1$, $c_2$ are constants, then $u = c_1 u_1 + c_2 u_2$ is still a solution that satisfies $u(0,t) = 0$ and $u(L,t) = 0$. Similarly for the side conditions $u_x(0,t) = 0$ and $u_x(L,t) = 0$. In general, superposition preserves all homogeneous side conditions.

The method of *separation of variables{index-entry:separation of variables}* is to try to find solutions that are products of functions of one variable. For the heat equation, we try to find solutions of the form
$$ u(x,t) = X(x)T(t) . $$
That the desired particular solution we are looking for is of this form is too much to hope for. What is perfectly reasonable to ask, however, is to find enough “building-block” solutions of the form $u(x,t) = X(x)T(t)$ using this procedure so that the desired solution to the PDE is somehow constructed from these building blocks by the use of superposition.

Let us try to solve the heat equation problem
$$ u_t = k u_{xx}, \qquad \text{with} \quad u(0,t) = 0 ,\quad \quad u(L,t) = 0, \quad \text{and} \quad u(x,0) = f(x) . $$
We guess $u(x,t) = X(x)T(t)$. We will try to make this guess satisfy the differential equation, $u_t = k u_{xx}$, and the homogeneous side conditions, $u(0,t) = 0$ and $u(L,t) = 0$. Then, as superposition preserves the differential equation and the homogeneous side conditions, we will try to build up a solution from these building blocks to solve the nonhomogeneous initial condition $u(x,0) = f(x)$.

First, we plug $u(x,t) = X(x)T(t)$ into the heat equation to obtain
$$ X(x)T'(t) = k X''(x)T(t) . $$
We rewrite as
$$ \frac{T'(t)}{k T(t)} = \frac{X''(x)}{X(x)} . $$
This equation must hold for all $x$ and all $t$. But the left-hand side does not depend on $x$ and the right-hand side does not depend on $t$. Hence, each side must be a constant. Let us call this constant $-\lambda$ (the minus sign is for convenience later). We obtain the two equations
$$ \frac{T'(t)}{k T(t)} = -\lambda = \frac{X''(x)}{X(x)} . $$
In other words,
$$ \begin{align*} X''(x) + \lambda X(x) &= 0 , \\ T'(t) + \lambda k T(t) &= 0 . \end{align*} $$
The boundary condition $u(0,t) = 0$ implies $X(0)T(t) = 0$. We are looking for a nontrivial solution, and so we can assume that $T(t)$ is not identically zero. Hence $X(0) = 0$. Similarly, $u(L,t) = 0$ implies $X(L) = 0$. We are looking for nontrivial solutions $X$ of the eigenvalue problem $X'' + \lambda X = 0$, $X(0) = 0$, $X(L) = 0$. We have previously found that the only eigenvalues are $\lambda_n = \frac{n^2 \pi^2}{L^2}$, for integers $n \geq 1$, where eigenfunctions are $\sin \left(\frac{n \pi}{L} x\right)$. Hence, let us pick the solutions
$$ X_n (x) = \sin \left(\frac{n \pi}{L} x \right) . $$
The corresponding $T_n$ must satisfy the equation
$$ T_n'(t) + \frac{n^2 \pi^2}{L^2} k T_n(t) = 0 . $$
This is one of our [fundamental equations](ref:0.2#subsection-fourfundamental), and the solution is an exponential:
$$ T_n(t) = e^{\frac{-n^2 \pi^2}{L^2} k t} , $$
where we picked the particular solution where conveniently $T_n(0) = 1$. Our building-block solutions are
$$ u_n(x,t) = X_n(x)T_n(t) = \sin \left( \frac{n \pi}{L} x \right) e^{\frac{-n^2 \pi^2}{L^2} k t} . $$

We note that $u_n(x,0) = \sin \left( \frac{n \pi}{L} x \right)$. We write $f(x)$ as the sine series
$$ f(x) = \sum_{n=1}^\infty b_n \sin \left(\frac{n \pi}{L} x \right) . $$
That is, we find the Fourier series of the odd periodic extension of $f(x)$. We used the sine series as it corresponds to the eigenvalue problem for $X(x)$ above. Finally, we use superposition to write the solution as
$$ \boxed{~~ u(x,t) = \sum_{n=1}^\infty b_n u_n(x,t) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} x \right) e^{\frac{-n^2 \pi^2}{L^2} k t} . ~~} $$

Why does this solution work? First note that it is a solution to the heat equation by superposition. It satisfies $u(0,t) = 0$ and $u(L,t) = 0$, because $x=0$ or $x=L$ makes all the sines vanish. Finally, plugging in $t=0$, we notice that $T_n(0) = 1$, and so
$$ u(x,0) = \sum_{n=1}^\infty b_n u_n(x,0) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{L} x \right) = f(x) . $$

:::example {ex:example-4-6-1} Example 4.6.1
Consider an insulated wire of length 1 whose ends are embedded in ice (temperature 0). Let $k=0.003$ and let the initial heat distribution be $u(x,0) = 50\,x\,(1-x)$. See [Figure 4.16](ref:heat-wireexinitfig). Suppose we want to find the temperature function $u(x,t)$. In particular, suppose we want to find when (at what time $t$) the maximum temperature in the wire drops to one half of the initial maximum of 12.5.

> FIGURE {fig:heat-wireexinitfig} number=4.16 src=../../media/heat-wireex-init.svg
> alt: A plot of the sample distribution of temperature on the wire at time t equals 0. It is a graph over x in the interval from 0 to 1 of an upside down parabola starting at 0 when x equals 0 and ending back at 0 when x equals 1 and achieving a maximum of 12.5 at x equals 0.5.
> width: 4.5in
> caption: Initial distribution of temperature in the wire.

We are solving the following PDE problem:
$$ \begin{array}{ll} u_t = 0.003 \, u_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ u(0,t) = u(1,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 50\,x\,(1-x) & \qquad \text{for } \; 0 < x < 1 . \end{array} $$
Write $f(x) = 50\,x\,(1-x)$ for $0 < x < 1$ as a sine series $f(x) = \sum_{n=1}^\infty b_n \sin (n \pi x)$, where
$$ b_n = 2 \int_0^1 50\,x\,(1-x) \sin (n \pi x) \,dx = \frac{200}{{\pi }^{3}{n}^{3}}-\frac{200\,{\left( -1\right) }^{n}}{{\pi }^{3}{n}^{3}} = \begin{cases} 0 & \text{if } n \text{ even} , \\ \frac{400}{\pi^3 n^3} & \text{if } n \text{ odd} . \end{cases} $$
We plug these coefficients into the series for $u(x,t)$ to obtain the solution
$$ u(x,t) = \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{400}{\pi^3 n^3} \sin (n \pi x ) \, e^{-n^2 \pi^2 \, 0.003 \, t} . $$
We plot the solution in [Figure 4.17](ref:heat-wireexfig) for $0 \leq t \leq 100$.

> FIGURE {fig:heat-wireexfig} number=4.17 src=../../media/heat-wireex.svg
> alt: A plot of the graph of a function u of (x,t) over the xt-plane over the region where x is between 0 and 1 and t is between 0 and 100. At t equals 0, the function is an upward arc that reaches up to 12.5 in the middle while being zero at x equals 0 and x equals 1. The surface then slopes downward and approaches the xt-plane as time goes on while being 0 at the edges where x equals 0 or x equals 1.
> width: 7.5in
> caption: Plot of the temperature $u(x,t)$ of the wire at position $x$ at time $t$ for $0 \leq t \leq 100$. Notice the side conditions $u(0,t)=u(1,t)=0$ and how the exponential makes the temperature decay with time.

Finally, we answer the question about the maximum temperature. It is relatively easy to see that the maximum temperature at any fixed time is always at $x=0.5$, in the middle of the wire. The plot of $u(x,t)$ confirms this intuition. If we plug in $x=0.5$, we get
$$ u(0.5,t) = \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{400}{\pi^3 n^3} \sin (n \pi\, 0.5 ) \, e^{-n^2 \pi^2 \, 0.003 \, t} . $$
For $n=3$ and higher (remember $n$ is only odd), the terms of the series are insignificant compared to the first term. The first term in the series is already a very good approximation of the function. Hence
$$ u(0.5,t) \approx \frac{400}{\pi^3} \, e^{-\pi^2 \, 0.003 \, t} . $$
The approximation gets better and better as $t$ gets larger, because the other terms decay much faster. We plot the function $u(0.5,t)$, the temperature at the midpoint of the wire at time $t$, and its approximation by the first term in [Figure 4.18](ref:heat-wireexmaxfig).

> FIGURE {fig:heat-wireexmaxfig} number=4.18 src=../../media/heat-wireex-max.svg
> alt: A graph of two very similar functions for t from 0 to 1, both decaying down to a relatively small value at t equals 1. The bottom curve starts exactly at 12.5 at t equals 0, while the top curve is very slightly above at t equals 0. They get closer and closer and by the time t equals 1 they are hard to tell apart.
> width: 4.5in
> caption: Temperature at the midpoint of the wire (the bottom curve), and the approximation of this temperature by using only the first term in the series (top curve).

After $t=5$ or so, it would be hard to tell the difference between the first term of the series for $u(x,t)$ and the real solution $u(x,t)$. This behavior is a general feature of solving the heat equation. If you are interested in behavior for large enough $t$, only the first one or two terms may be necessary.

We get back to the question of when the maximum temperature is one half of the initial maximum temperature. That is, when the temperature at the midpoint is ${12.5}/{2} = 6.25$. The graph suggests that the approximation by the first term will be close enough. We solve
$$ 6.25 = \frac{400}{\pi^3} \, e^{-\pi^2 \, 0.003 \, t} . $$
That is,
$$ t = \frac{\ln \frac{6.25\,\pi^3}{400}}{-\pi^2 0.003} \approx 24.5 . $$
So the maximum temperature drops to half at about $t=24.5$.
:::

We mention an interesting behavior of the solution to the heat equation. The heat equation “smooths” out the function $f(x)$ as $t$ grows. For a fixed $t$, the solution is a Fourier series with coefficients $b_n e^{\frac{-n^2 \pi^2}{L^2} k t}$. If $t > 0$, then these coefficients go to zero faster than any $\frac{1}{n^p}$ for any power $p$. In other words, the Fourier series has infinitely many derivatives everywhere. Thus even if the function $f(x)$ has jumps and corners, then for a fixed $t > 0$, the solution $u(x,t)$ as a function of $x$ is as smooth as we want it to be.

:::example {ex:example-4-6-2} Example 4.6.2
When the initial condition is already a sine series, then there is no need to compute anything, you just need to plug in. Consider
$$ u_t = 0.3 \, u_{xx}, \qquad u(0,t)=u(1,t)=0, \qquad u(x,0) = 0.1 \sin(\pi x) + \sin(2\pi x) . $$
The solution is then
$$ u(x,t) = 0.1 \sin(\pi x) e^{- 0.3 \pi^2 t} + \sin(2 \pi x) e^{- 1.2 \pi^2 t} . $$

:::

## Insulated ends

Now suppose the ends of the wire are insulated. In this case, we are solving the problem
$$ u_t = k u_{xx} \qquad \text{with} \quad u_x(0,t) = 0, \quad u_x(L,t) = 0, \quad \text{and} \quad u(x,0) = f(x) . $$
Yet again we try a solution of the form $u(x,t) = X(x)T(t)$. By the same procedure as before, we plug into the heat equation and arrive at the following two equations:
$$ \begin{align*} X''(x) + \lambda X(x) &= 0 , \\ T'(t) + \lambda k T(t) &= 0 . \end{align*} $$
At this point, the story changes slightly. The boundary condition $u_x(0,t) = 0$ implies $X'(0)T(t) = 0$. Hence $X'(0) = 0$. Similarly, $u_x(L,t) = 0$ implies $X'(L) = 0$. We want nontrivial solutions $X$ of the eigenvalue problem $X'' + \lambda X = 0$, $X'(0) = 0$, $X'(L) = 0$. We previously found that the only eigenvalues are $\lambda_n = \frac{n^2 \pi^2}{L^2}$, for integers $n \geq 0$, where eigenfunctions are $\cos \left( \frac{n \pi}{L} x\right)$ (we include the constant eigenfunction). We pick the solutions
$$ X_n (x) = \cos \left( \frac{n \pi}{L} x \right) \qquad \text{and} \qquad X_0 (x) = 1. $$
The corresponding $T_n$ must satisfy the equation
$$ T_n'(t) + \frac{n^2 \pi^2}{L^2} k T_n(t) = 0 . $$
For $n \geq 1$, as before,
$$ T_n(t) = e^{\frac{-n^2 \pi^2}{L^2} k t} . $$
For $n = 0$, we have $T_0'(t) = 0$ and hence $T_0(t) = 1$. Our building-block solutions are
$$ u_n(x,t) = X_n(x)T_n(t) = \cos \left( \frac{n \pi}{L} x \right) e^{\frac{-n^2 \pi^2}{L^2} k t} $$
and
$$ u_0(x,t) = 1 . $$

We note that $u_n(x,0) = \cos \left( \frac{n \pi}{L} x \right)$. We write $f$ using the cosine series
$$ f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos \left( \frac{n \pi}{L} x \right) . $$
That is, we find the Fourier series of the even periodic extension of $f(x)$.

We use superposition to write the solution as
$$ \boxed{~~ u(x,t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n u_n(x,t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos \left( \frac{n \pi}{L} x \right) e^{\frac{-n^2 \pi^2}{L^2} k t} . ~~} $$

:::example {ex:example-4-6-3} Example 4.6.3
Try the same equation as before, but with insulated ends. We are solving the following PDE problem
$$ \begin{array}{ll} u_t = 0.003 \, u_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ u_x(0,t) = u_x(1,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 50\,x\,(1-x) & \qquad \text{for } \; 0 < x < 1 . \end{array} $$

For this problem, we must find the cosine series of $u(x,0)$. For $0 < x < 1$, we have
$$ 50\, x\,(1-x) = \frac{25}{3} + \sum_{\substack{n=2 \\ n \text{ even}}}^\infty \left( \frac{-200}{\pi^2 n^2} \right) \cos (n \pi x) . $$
The calculation is left to the reader. Hence, the solution to the PDE problem, plotted in [Figure 4.19](ref:heat-wireisolexfig), is given by the series
$$ u(x,t) = \frac{25}{3} + \sum_{\substack{n=2 \\ n \text{ even}}}^\infty \left( \frac{-200}{\pi^2 n^2} \right) \cos ( n \pi x) \, e^{-n^2 \pi^2 \, 0.003 \, t} . $$

> FIGURE {fig:heat-wireisolexfig} number=4.19 src=../../media/heat-wireisolex.svg
> alt: A plot of the graph of a function u of (x,t) over the xt-plane over the region where x is between 0 and 1 and t is between 0 and 30. At t equals 0, the function is an upward arc that reaches up to 12.5 in the middle while being zero at x equals 0 and x equals 1. The surface then seems to try to approach a flat horizontal plane at u equal roughly 8.33 as t grows.
> width: 7.5in
> caption: Plot of the temperature of the insulated wire at position $x$ at time $t$.

Note in the graph that as time goes on, the temperature evens out across the wire. Eventually, all the terms except the constant die out, and you will be left with a uniform temperature of $\frac{25}{3} \approx 8.33$ along the entire length of the wire.
:::

Let us expand on the last point. The constant term in the series is
$$ \frac{a_0}{2} = \frac{1}{L} \int_0^L f(x) \, dx . $$
In other words, $\frac{a_0}{2}$ is the average value of $f(x)$, that is, the average of the initial temperature. As the wire is insulated everywhere, no heat can get out, no heat can get in. So the temperature tries to distribute evenly over time, and the average temperature must always be the same, in particular, it is always $\frac{a_0}{2}$. As time goes to infinity, the temperature goes to the constant $\frac{a_0}{2}$ everywhere.

## Exercises

:::exercise {exercise-4-6-002} number=4.6.2 answered=no src=ch-fourier-and-pde.tex:3977
PROBLEM:
Consider a wire of length 2, with $k=0.001$ and an initial temperature distribution $u(x,0) = 50 x$. Both ends are embedded in ice (temperature 0). Find the solution as a series.
:::

:::exercise {exercise-4-6-003} number=4.6.3 answered=no src=ch-fourier-and-pde.tex:3983
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = u_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ u(0,t) = u(1,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 100 & \qquad \text{for } \; 0 < x < 1 . \end{array} $$

:::

:::exercise {exercise-4-6-004} number=4.6.4 answered=no src=ch-fourier-and-pde.tex:3994
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = u_{xx} & \qquad \text{for } \; 0 < x < \pi \text{ and } t > 0, \\ u_x(0,t) = u_x(\pi,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 3\cos (x) + \cos (3x) & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

:::

:::exercise {heat-cosexr} number=4.6.5 answered=no src=ch-fourier-and-pde.tex:4004 label=heat:cosexr
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = \frac{1}{3} u_{xx} & \qquad \text{for } \; 0 < x < \pi \text{ and } t > 0, \\ u_x(0,t) = u_x(\pi,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = \frac{10x}{\pi} & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

:::

:::exercise {heat-oneto100exr} number=4.6.6 answered=no src=ch-fourier-and-pde.tex:4015 label=heat:oneto100exr
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = u_{xx} & \qquad \text{for } \; 0 < x < 1 \text{ and } t > 0, \\ u(0,t) = 0 , \quad u(1,t) = 100 & \qquad \text{for } \; t > 0, \\ u(x,0) = \sin (\pi x) & \qquad \text{for } \; 0 < x < 1 . \end{array} $$
Hint: Use the fact that $u(x,t) = 100 x$ is a solution satisfying $u_t = u_{xx}$, $u(0,t) = 0$, $u(1,t) = 100$. Then use superposition.
:::

:::exercise {exercise-4-6-007} number=4.6.7 answered=no src=ch-fourier-and-pde.tex:4029
PROBLEM:
Find the *{index:steady-state temperature}* solution as a function of $x$ alone, by letting $t \to \infty$ in the solution from exercises [4.6.5](ref:heat-cosexr) and [4.6.6](ref:heat-oneto100exr). Verify that it satisfies the equation $u_{xx} = 0$.
:::

:::exercise {exercise-4-6-008} number=4.6.8 answered=no src=ch-fourier-and-pde.tex:4038
PROBLEM:
Use separation of variables to find a nontrivial solution to $u_{xx} + u_{yy} = 0$, where $u(x,0) = 0$ and $u(0,y) = 0$. Hint: Try $u(x,y) = X(x)Y(y)$.
:::

:::exercise {exercise-4-6-009} number=4.6.9 answered=no src=ch-fourier-and-pde.tex:4043
PROBLEM:
**challenging**
Suppose that one end of the wire is insulated (say at $x=0$) and the other end is kept at zero temperature. That is, find a series solution of
$$ \begin{array}{ll} u_t = k u_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ u_x(0,t) = u(L,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = f(x) & \qquad \text{for } \; 0 < x < L . \end{array} $$
Express any coefficients in the series by integrals of $f(x)$.
:::

:::exercise {exercise-4-6-010} number=4.6.10 answered=no src=ch-fourier-and-pde.tex:4057
PROBLEM:
**challenging**
Suppose that the wire is circular and insulated, so there are no ends. You can think of this as simply connecting the two ends and making sure the solution matches up at the ends. That is, find a series solution of
$$ \begin{array}{ll} u_t = k u_{xx} & \qquad \text{for } \; 0 < x < L \text{ and } t > 0, \\ u(0,t) = u(L,t) , \quad u_x(0,t) = u_x(L,t) & \qquad \text{for } \; t > 0, \\ u(x,0) = f(x) & \qquad \text{for } \; 0 < x < L . \end{array} $$
Express any coefficients in the series by integrals of $f(x)$.
:::

:::exercise {exercise-4-6-011} number=4.6.11 answered=no src=ch-fourier-and-pde.tex:4074
PROBLEM:
Consider a wire insulated on both ends, $L=1$, $k=1$, and $u(x,0) = \cos^2(\pi x)$.

a) Find the solution $u(x,t)$. Hint: a trig identity.
b) Find the average temperature.
c) Initially the temperature variation is 1 (maximum minus the minimum). Find the time when the variation is ${1}/{2}$.

:::

:::exercise {exercise-4-6-101} number=4.6.101 answered=yes src=ch-fourier-and-pde.tex:4100
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = 3 u_{xx} & \qquad \text{for } \; 0 < x < \pi \text{ and } t > 0, \\ u(0,t) = u(\pi,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 5\sin (x) + 2\sin (5x) & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

SOLUTION:
$u(x,t) = 5 \sin (x) \, e^{- 3 t} + 2 \sin (5x) \, e^{-75 t}$
:::

:::exercise {exercise-4-6-102} number=4.6.102 answered=yes src=ch-fourier-and-pde.tex:4133
PROBLEM:
Find a series solution of
$$ \begin{array}{ll} u_t = 0.1 u_{xx} & \qquad \text{for } \; 0 < x < \pi \text{ and } t > 0, \\ u_x(0,t) = u_x(\pi,t) = 0 & \qquad \text{for } \; t > 0, \\ u(x,0) = 1 + 2\cos (x) & \qquad \text{for } \; 0 < x < \pi . \end{array} $$

SOLUTION:
$u(x,t) = 1 + 2 \cos (x) \, e^{-0.1 t}$
:::

:::exercise {exercise-4-6-103} number=4.6.103 answered=yes src=ch-fourier-and-pde.tex:4151
PROBLEM:
Use separation of variables to find a nontrivial solution to $u_{xt} = u_{xx}$.
SOLUTION:
$u(x,t) = e^{\lambda t} e^{\lambda x}$ for some $\lambda$
:::

:::exercise {exercise-4-6-104} number=4.6.104 answered=yes src=ch-fourier-and-pde.tex:4159
PROBLEM:
Use a variation on separation of variables to find a nontrivial solution to $u_{x} + u_{t} = u$. Hint: Try $u(x,t) = X(x)+T(t)$.
SOLUTION:
$u(x,t) = Ae^x + Be^t$
:::

:::exercise {exercise-4-6-105} number=4.6.105 answered=yes src=ch-fourier-and-pde.tex:4168
PROBLEM:
Suppose that the temperature on the wire is fixed at $0$ at the ends, $L=1$, $k=1$, and $u(x,0) = 100\sin(2 \pi x)$.

a) What is the temperature at $x = {1}/{2}$ at any time?
b) What is the maximum and the minimum temperature on the wire at $t=0$?
c) At what time is the maximum temperature on the wire exactly one half of the initial maximum at $t=0$?

SOLUTION:
a) $0$, b) minimum $-100$, maximum $100$, c) $t = \frac{\ln 2}{4 \pi^2}$.
:::

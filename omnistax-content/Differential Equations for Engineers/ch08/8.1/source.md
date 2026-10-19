# 8.1 Linearization, critical points, and equilibria {sec:linearization-section}

:::note [section-notes]
*Note: 1 lecture, §6.1–§6.2 in [EP](cite:EP), §9.2–§9.3 in [BD](cite:BD)*
:::

Except for a few brief detours in [chapter 1](ref:1#fo-chapter), we considered mostly linear equations. Linear equations suffice in many applications, but in reality, most phenomena require nonlinear equations. Nonlinear equations, however, are notoriously more difficult to understand than linear ones, and many strange new phenomena appear when we allow our equations to be nonlinear. Not to worry, we did not waste all this time studying linear equations. Nonlinear equations can often be approximated by linear ones if we only need a solution “locally”—only for a short period of time or only for certain parameters. Understanding linear equations can also give us qualitative understanding about a more general nonlinear problem. The idea is similar to what you did in calculus in trying to approximate a function by a line with the right slope.

> IMAGE {img:mv-pend} src=../../media/mv-pend.svg
> alt: A diagram of a pendulum. A pendulum is shown fixed at a point at the top moving along a circular arc. The bottom of the pendulum is labeled m, and the angle the pendulum makes with a vertical line is labeled theta. The length of the pendulum is labeled L.

In [§2.4](ref:2.4#sec-mv) we looked at the pendulum of length $L$. The goal was to solve for the angle $\theta(t)$ as a function of the time $t$. The equation for the setup is the nonlinear equation
$$ \theta'' + \frac{g}{L} \sin \theta = 0 . $$
Instead of solving this equation, we solved the rather easier linear equation
$$ \theta'' + \frac{g}{L} \theta = 0 . $$
While the solution to the linear equation is not exactly what we were looking for, it is rather close to the original, as long as the angle $\theta$ is small and the time period involved is short.

You might ask: Why don’t we just solve the nonlinear problem? Well, it might be very difficult, impractical, or impossible to solve analytically, depending on the equation in question. We may not even be interested in the actual solution. We might only be interested in some qualitative idea of what the solution is doing. For example, what happens as time goes to infinity?

## Autonomous systems and phase plane analysis

We restrict our attention to a two-dimensional autonomous system
$$ x' = f(x,y) , \qquad y' = g(x,y) , $$
where $f(x,y)$ and $g(x,y)$ are functions of two variables, and the derivatives are taken with respect to time $t$. Solutions are functions $x(t)$ and $y(t)$ such that
$$ x'(t) = f\bigl(x(t),y(t)\bigr), \qquad y'(t) = g\bigl(x(t),y(t)\bigr) . $$
The way we will analyze the system is very similar to [§1.6](ref:1.6#auteq-section), where we studied a single autonomous equation. The ideas in two dimensions are the same, but the behavior can be far more complicated.

It may be best to think of the system of equations as the single vector equation
$$ \begin{bmatrix} x \\ y \end{bmatrix} ' = \begin{bmatrix} f(x,y) \\ g(x,y) \end{bmatrix} . $$ {eq:eq-nlinautn2} number=8.1
As in [§3.1](ref:3.1#sec-introtosys), we draw the *{index:phase portrait}* (or *{index:phase diagram}*), where each point $(x,y)$ corresponds to a specific state of the system. We draw the *{index:vector field}* given at each point $(x,y)$ by the vector $\left[ \begin{smallmatrix} f(x,y) \\ g(x,y) \end{smallmatrix} \right]$. And as before, if we find solutions, we draw the trajectories by plotting all points $\bigl(x(t),y(t)\bigr)$ for a certain range of $t$.

:::example {ex:example-nlin-1b-example} Example 8.1.1
Consider the second-order equation $x''=-x+x^2$. Write this equation as a first-order nonlinear system
$$ x' = y , \qquad y' = -x+x^2 . $$
The phase portrait with some trajectories is drawn in [Figure 8.1](ref:fig-nlin-1b).

> FIGURE {fig:fig-nlin-1b} number=8.1 src=../../media/nlin-1b.svg
> alt: A direction field plot (a grid of arrows) in the xy-plane. In the center, the arrows go around the critical point at the origin in a clockwise direction. Then at the point (1,0) the direction field is a saddle point, that is, the arrows along a diagonally down sloped curve go towards the critical point and in a diagonally upwards sloped curve go away from the critical point. To the left of the critical point, the arrows go roughly down, above the critical point the arrows go roughly rightwards, on the right of the critical point the arrows point roughly upwards, and below the critical point the arrows point roughly leftwards. The arrows appear longer the further away from the critical point they are. Several trajectories are also drawn. Around the critical point at (0,0) there are several egg-shaped trajectories with the pointy end in the positive x-direction. Then there is one trajectory seeming to go 'through' the critical point at (1,0) making a loop, although if one were to make a loop, one would have to go against the arrows once one goes through the critical point. Then there are several other trajectories, there are several trajectories that start on the bottom right go diagonally up but then turn leftwards until they get to the left half of the picture staying below the x-axis. Then they turn upwards until we are in the upper half of the picture and then turn rightwards until they are in the right half of the picture where they turn diagonally upwards leaving the picture. Then a couple of other trajectories start below the x-axis on the right side of the picture close to the x-axis, then simply turn rightwards until they leave the picture, never making it past x equals 1.
> width: 4.5in
> caption: Phase portrait with some trajectories of $x' = y$, $y' = -x+x^2$.

From the phase portrait it should be clear that even this simple system has fairly complicated behavior. Some trajectories keep oscillating around the origin, and some go off towards infinity. We will return to this example often, and analyze it completely in this (and the next) section.
:::

If we zoom into the diagram near a point where $\left[ \begin{smallmatrix} f(x,y) \\ g(x,y) \end{smallmatrix} \right]$ is not zero, then nearby the arrows point generally in essentially that same direction and have essentially the same magnitude. In other words, the behavior is not that interesting near such a point. We are of course assuming that $f(x,y)$ and $g(x,y)$ are continuous.

Let us concentrate on those points in the phase diagram above where the trajectories seem to start, end, or go around. We see two such points: $(0,0)$ and $(1,0)$. The trajectories seem to go around the point $(0,0)$, and they seem to either go in or out of the point $(1,0)$. These points are precisely those points where the derivatives of both $x$ and $y$ are zero. Let us define the *critical points*{index-entry:critical point} as the points $(x,y)$ such that
$$ \begin{bmatrix} f(x,y) \\ g(x,y) \end{bmatrix} = \vec{0} . $$
In other words, these are the points where both $f(x,y)=0$ and $g(x,y)=0$.

The critical points are where the behavior of the system is in some sense the most complicated. If $\left[ \begin{smallmatrix} f(x,y) \\ g(x,y) \end{smallmatrix} \right]$ is zero, then nearby, the vector can point in any direction whatsoever. Also, the trajectories are either going towards, away from, or around these points, so if we are looking for long-term qualitative behavior of the system, we should look at what is happening near the critical points.

Critical points are also sometimes called *equilibria*{index-entry:equilibrium}, since we have so-called *equilibrium solutions*{index-entry:equilibrium solution} at critical points. If $(x_0,y_0)$ is a critical point, then we have the solutions
$$ x(t) = x_0, \quad y(t) = y_0 . $$
In [Example 8.1.1](ref:example-nlin-1b-example), there are two equilibrium solutions:
$$ x(t) = 0, \quad y(t) = 0, \qquad \text{and} \qquad x(t) = 1, \quad y(t) = 0. $$
Compare this discussion on equilibria to the discussion in [§1.6](ref:1.6#auteq-section). The underlying concept is exactly the same.

## Linearization

In [§3.5](ref:3.5#sec-twodimaut) we studied the behavior of a homogeneous linear system of two equations near a critical point. For a linear system of two variables given by an invertible matrix, the only critical point is the origin $(0,0)$. Let us put the understanding we gained in that section to good use understanding what happens near critical points of nonlinear systems.

In calculus, we learned to estimate a function by taking its derivative and linearizing. We work similarly with nonlinear systems of ODEs. Suppose $(x_0,y_0)$ is a critical point. First change variables to $(u,v)$, so that $(u,v)=(0,0)$ corresponds to $(x_0,y_0)$. That is,
$$ u=x-x_0, \qquad v=y-y_0 . $$
Next we need to find the derivative. In multivariable calculus you may have seen that the several-variables version of the derivative is the *{index:Jacobian matrix}*^[Named for the German mathematician [Carl Gustav Jacob Jacobi](https://en.wikipedia.org/wiki/Carl_Gustav_Jacob_Jacobi) (1804–1851).]. The Jacobian matrix of the vector-valued function $\left[ \begin{smallmatrix} f(x,y) \\ g(x,y) \end{smallmatrix} \right]$ at $(x_0,y_0)$ is
$$ \begin{bmatrix} \frac{\partial f}{\partial x}(x_0,y_0) & \frac{\partial f}{\partial y}(x_0,y_0) \\ \frac{\partial g}{\partial x}(x_0,y_0) & \frac{\partial g}{\partial y}(x_0,y_0) \end{bmatrix} . $$
This matrix gives the best linear approximation as $u$ and $v$ (and therefore $x$ and $y$) vary. We define the *{index:linearization}* of the equation [(8.1)](ref:eq-nlinautn2) as the linear system
$$ \begin{bmatrix} u \\ v \end{bmatrix} ' = \begin{bmatrix} \frac{\partial f}{\partial x}(x_0,y_0) & \frac{\partial f}{\partial y}(x_0,y_0) \\ \frac{\partial g}{\partial x}(x_0,y_0) & \frac{\partial g}{\partial y}(x_0,y_0) \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix} . $$

:::example {ex:example-nlin-1b-examplelin} Example 8.1.2
Let us keep with the same equations as [Example 8.1.1](ref:example-nlin-1b-example): $x' = y$, $y' = -x+x^2$. There are two critical points, $(0,0)$ and $(1,0)$. The Jacobian matrix at any point is
$$ \begin{bmatrix} \frac{\partial f}{\partial x}(x,y) & \frac{\partial f}{\partial y}(x,y) \\ \frac{\partial g}{\partial x}(x,y) & \frac{\partial g}{\partial y}(x,y) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -1+2x & 0 \end{bmatrix}. $$
At $(0,0)$, that is, when $x=0$ and $y=0$, the Jacobian matrix is
$$ \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} , $$
and our new variables are $u=x$ and $v=y$. The linearization at $(0,0)$ is
$$ \begin{bmatrix} u \\ v \end{bmatrix} ' = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix} . $$

At the point $(1,0)$, the Jacobian matrix is $\left[ \begin{smallmatrix} 0 & 1 \\ 1 & 0 \end{smallmatrix} \right]$, and our new variables are $u=x-1$ and $v=y$. The linearization at $(1,0)$ is
$$ \begin{bmatrix} u \\ v \end{bmatrix} ' = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} u \\ v \end{bmatrix} . $$

The phase diagrams of the two linearizations at the critical points $(0,0)$ and $(1,0)$ are given in [Figure 8.2](ref:fig-nlin-1b-lin). Note that the variables are now $u$ and $v$, which are different at each critical point. Compare [Figure 8.2](ref:fig-nlin-1b-lin) with [Figure 8.1](ref:fig-nlin-1b), and look especially at the behavior near the critical points.

> FIGURE {fig:fig-nlin-1b-lin} number=8.2 src=../../media/nlin-1b-lin-00-01.svg
> alt: Two direction field plots (grid of arrows) in the uv-plane. On the left the arrows simply go clockwise around the origin, with several circular trajectories drawn. On the right is a picture of a saddle where along the line v equals u the arrows point away from the origin and along v equals minus u the arrows point towards the origin. The lines v equals u and v equals minus u are drawn as trajectories. In the picture divided by these lines, in the region on the left, the arrows point generally downward, towards the top going slightly to the right and towards the bottom going slightly to the left. There is a trajectory in this region starting out of the picture on the left side going down and slightly to the right before turning to the left and leaving the picture. The situation is analogous in the other 3 regions, where in the top region the arrows go roughly rightwards, the arrows in the right region go roughly upwards, and the arrows in the bottom region go roughly leftwards.
> width: 9in
> caption: Phase diagram with some trajectories of linearizations at the critical points $(0,0)$ (left) and $(1,0)$ (right) of $x' = y$, $y' = -x+x^2$.

:::

## Exercises

:::exercise {exercise-8-1-001} number=8.1.1 answered=no src=ch-nonlin-systems.tex:338
PROBLEM:
Sketch the phase plane vector field for:

a) $x'=x^2$, $y'=y^2$,
b) $x'=(x-y)^2$, $y'=-x$,
c) $x'=e^y$, $y'=e^x$.

:::

:::exercise {exercise-8-1-002} number=8.1.2 answered=no src=ch-nonlin-systems.tex:348
PROBLEM:
Match systems

a) $x'=x^2$, $y'=y^2$,
b) $x'=xy$, $y'=1+y^2$,
c) $x'=\sin(\pi y)$, $y'=x$,

to the vector fields below. Justify.

a)

> IMAGE {img:nlin-exer-xy-1py2} src=../../media/nlin-exer-xy-1py2.svg
> alt: A direction field in the xy-plane where all the arrows seem small and pointing directly upwards along the x-axis. The arrows above the x-axis point upwards and away from the origin and the arrows below the x axis point also roughly upwards and towards the origin.
> width: 1.75in

b)

> IMAGE {img:nlin-exer-x2-y2} src=../../media/nlin-exer-x2-y2.svg
> alt: A direction field in the xy-plane where the arrow is zero at the origin, on the x-axis point rightward, on the y-axis point upward. In the first quadrant, the arrows point roughly away from the origin, and in the third quadrant they point roughly towards the origin. In the second quadrant, the arrows start rightwards at the right and slowly turn upwards as we move right. In the fourth quadrant, the arrows start upwards at the bottom and turn rightwards as we move up.
> width: 1.75in

c)

> IMAGE {img:nlin-exer-sinpiy-x} src=../../media/nlin-exer-sinpiy-x.svg
> alt: A direction field in the xy-plane where the arrows seem to go around counterclockwise around two points on the y-axis, one above the origin and one below the origin.
> width: 1.75in

:::

:::exercise {exercise-8-1-003} number=8.1.3 answered=no src=ch-nonlin-systems.tex:382
PROBLEM:
Find the critical points and linearizations of the following systems.

a) $x'=x^2-y^2$, $y'=x^2+y^2-1$,
b) $x'=-y$, $y'=3x+yx^2$,
c) $x'=x^2+y$, $y'=y^2+x$.

:::

:::exercise {exercise-8-1-004} number=8.1.4 answered=no src=ch-nonlin-systems.tex:391
PROBLEM:
For the following systems, verify they have critical point at $(0,0)$, and find the linearization at $(0,0)$.

a) $x'=x+2y+x^2-y^2$, $y'=2y-x^2$
b) $x'=-y$, $y'=x-y^3$
c) * $x'=ax+by+f(x,y)$, $y'=cx+dy+g(x,y)$, where $f(0,0) = 0$, $g(0,0) = 0$, and all first partial derivatives of $f$ and $g$ are also zero at $(0,0)$, that is, $\frac{\partial f}{\partial x}(0,0) = \frac{\partial f}{\partial y}(0,0) = \frac{\partial g}{\partial x}(0,0) = \frac{\partial g}{\partial y}(0,0) = 0$.

:::

:::exercise {exercise-8-1-005} number=8.1.5 answered=no src=ch-nonlin-systems.tex:408
PROBLEM:
Take $x'=(x-y)^2$, $y'=(x+y)^2$.

a) Find the set of critical points.
b) Sketch a phase diagram and describe the behavior near the critical point(s).
c) Find the linearization. Is it helpful in understanding the system?

:::

:::exercise {exercise-8-1-006} number=8.1.6 answered=no src=ch-nonlin-systems.tex:418
PROBLEM:
Take $x'=x^2$, $y'=x^3$.

a) Find the set of critical points.
b) Sketch a phase diagram and describe the behavior near the critical point(s).
c) Find the linearization. Is it helpful in understanding the system?

:::

:::exercise {exercise-8-1-101} number=8.1.101 answered=yes src=ch-nonlin-systems.tex:431
PROBLEM:
Find the critical points and linearizations of the following systems.

a) $x'=\sin(\pi y)+(x-1)^2$, $y'=y^2-y$,
b) $x'=x+y+y^2$, $y'=x$,
c) $x'=(x-1)^2+y$, $y'=x^2+y$.

SOLUTION:
a) Critical points $(1,0)$ and $(1,1)$. At $(1,0)$ using $u=x-1$, $v=y$ the linearization is $u'=\pi v$, $v'=-v$. At $(1,1)$ using $u=x-1$, $v=y-1$ the linearization is $u'=-\pi v$, $v'=v$.
b) Critical points $(0,0)$ and $(0,-1)$. At $(0,0)$ using $u=x$, $v=y$ the linearization is $u'=u+v$, $v'=u$. At $(0,-1)$ using $u=x$, $v=y+1$ the linearization is $u'=u-v$, $v'=u$.
c) Critical point $({1}/{2},{-1}/{4})$. Using $u=x-{1}/{2}$, $v=y+{1}/{4}$ the linearization is $u'=-u+v$, $v'=u+v$.
:::

:::exercise {exercise-8-1-102} number=8.1.102 answered=yes src=ch-nonlin-systems.tex:455
PROBLEM:
Match systems

a) $x'=y^2$, $y'=-x^2$,
b) $x'=y$, $y'=(x-1)(x+1)$,
c) $x'=y+x^2$, $y'=-x$,

to the vector fields below. Justify.

a)

> IMAGE {img:nlin-exer-y-xm1xp1} src=../../media/nlin-exer-y-xm1xp1.svg
> alt: A direction field plot in the xy-plane. On the left of the plot the arrows seem to go clockwise around a point to the left of the origin on the x-axis. Then on the right the arrows seem to go towards a point to the right of the origin along a diagonal line downwards, and away from that point along a diagonal line upwards. On the left side of the plot the arrows are roughly upward, on the top, they are roughly rightwards, on the right, they are roughly upward, and on the bottom, they are roughly leftward.
> width: 1.75in

b)

> IMAGE {img:nlin-exer-ypx2-mx} src=../../media/nlin-exer-ypx2-mx.svg
> alt: A direction field plot in the xy-plane. The arrows seem to be going around the origin clockwise, but not in a perfectly circular way. At the top, the arrows are mostly rightward although being somewhat upward facing on the left and downward facing on the right and they are slightly smaller in the middle of the picture. On the left side of the picture, the arrows are all pointing roughly leftward and upward, although they are smaller on the bottom of the picture. On the right side of the picture, the arrows are pointing roughly rightward and slightly downward being smaller on the bottom of the picture. Along the bottom of the picture from left to right, the arrows start upward and to the left then slowly turn rightward, than downward until they end pointing down and to the right at the bottom right corner.
> width: 1.75in

c)

> IMAGE {img:nlin-exer-y2-mx2} src=../../media/nlin-exer-y2-mx2.svg
> alt: A direction field plot in the xy-plane. The arrows seem to come from the top left and point down and to the right roughly. They keep going in that direction but almost as if they want to take a detour around the origin. Those that start above the y equals minus x line go in a curve around and above the origin, while those that start below the line take a curve around and below the origin.
> width: 1.75in

SOLUTION:
1) is c), 2) is a), 3) is b)
:::

:::exercise {exercise-8-1-103} number=8.1.103 answered=yes src=ch-nonlin-systems.tex:506
PROBLEM:
The idea of critical points and linearization works in higher dimensions as well. You simply make the Jacobian matrix bigger by adding more functions and more variables. For the following system of 3 equations find the critical points and their linearizations:
$$ x' = x + z^2, \qquad y' = z^2-y, \qquad z' = z+x^2. $$

SOLUTION:
Critical points are $(0,0,0)$, and $(-1, 1, -1)$. The linearization at the origin using variables $u=x$, $v=y$, $w=z$ is $u' = u$, $v'=-v$, $w' = w$. The linearization at the point $(-1,1,-1)$ using variables $u=x+1$, $v=y-1$, $w=z+1$ is $u'=u-2w$, $v'=-v-2w$, $w'=w-2u$.
:::

:::exercise {exercise-8-1-104} number=8.1.104 answered=yes src=ch-nonlin-systems.tex:531
PROBLEM:
Any two-dimensional non-autonomous system $x'=f(x,y,t)$, $y'=g(x,y,t)$ can be written as a three-dimensional autonomous system (three equations). Write down this autonomous system using the variables $u$, $v$, $w$.
SOLUTION:
$u' = f(u,v,w)$, $v'=g(u,v,w)$, $w' = 1$.
:::

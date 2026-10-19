# 8.2 Stability and classification of isolated critical points {sec:nlinstability-section}

:::note [section-notes]
*Note: 1.5–2 lectures, §6.1–§6.2 in [EP](cite:EP), §9.2–§9.3 in [BD](cite:BD)*
:::

## Isolated critical points and almost linear systems

A critical point is *isolated*{index-entry:isolated critical point} if it is the only critical point in some small “neighborhood” of the point. That is, if we zoom in enough, it is the only critical point we see. In [Example 8.1.1](ref:8.1#example-nlin-1b-example) above, both critical points are isolated. If, on the other hand, there were a whole curve of critical points, then it would not be isolated.

A system is called *{index:almost linear}* at a critical point $(x_0,y_0)$ if the critical point is isolated and the Jacobian matrix at the point is invertible, or equivalently if the linearized system has an isolated critical point. In such a case, the nonlinear terms are very small and the system behaves like its linearization, at least if we are close to the critical point.

For example, the system in Examples [8.1.1](ref:8.1#example-nlin-1b-example) and [8.1.2](ref:8.1#example-nlin-1b-examplelin) has two isolated critical points $(0,0)$ and $(1,0)$, and is almost linear at both critical points as the Jacobian matrices at both points, $\left[ \begin{smallmatrix} 0 & 1 \\ -1 & 0 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 0 & 1 \\ 1 & 0 \end{smallmatrix} \right]$, are invertible.

On the other hand, the system $x' = x^2$, $y' = y^2$ has an isolated critical point at $(0,0)$, however the Jacobian matrix
$$ \begin{bmatrix} 2x & 0 \\ 0 & 2y \end{bmatrix} $$
is zero when $(x,y) = (0,0)$. So the system is not almost linear. An even worse example is the system $x' = x$, $y' = x^2$, which does not have isolated critical points; $x'$ and $y'$ are both zero whenever $x=0$, that is, the entire $y$-axis.

Fortunately, most often critical points are isolated, and the system is almost linear at the critical points. So if we learn what happens there, we will have figured out the majority of situations that arise in applications.

## Stability and classification of isolated critical points

Once we have an isolated critical point, the system is almost linear at that critical point, and we have computed the associated linearized system, we can classify what happens to the solutions. We more or less use the classification for linear two-variable systems from [§3.5](ref:3.5#sec-twodimaut), with one minor caveat. Let us list the behaviors depending on the eigenvalues of the Jacobian matrix at the critical point in [Table 8.1](ref:pln-behtab2). This table is very similar to [Table 3.1](ref:3.5#pln-behtab), with the exception of missing “center” points. We will discuss centers later, as they are more complicated.

> TABLE {tab:pln-behtab2} number=8.1 cols=3
> caption: Behavior of an almost linear system near an isolated critical point.
| Eigenvalues of the Jacobian matrix | Behavior | Stability |
| --- | --- | --- |
| real and both positive | source / unstable node | unstable |
| real and both negative | sink / stable node | asymptotically stable |
| real and opposite signs | saddle | unstable |
| complex with positive real part | spiral source | unstable |
| complex with negative real part | spiral sink | asymptotically stable |

In the third column, we mark points as *asymptotically stable* or *unstable*. Formally, a *{index:stable critical point}* $(x_0,y_0)$ is one where given any small distance $\epsilon$ to $(x_0,y_0)$, and any initial condition within a perhaps smaller radius around $(x_0,y_0)$, the trajectory of the system never goes further away from $(x_0,y_0)$ than $\epsilon$. An *{index:unstable critical point}* is one that is not stable. Informally, a point is stable if we start close to a critical point and follow a trajectory, we either go towards, or at least not away from, this critical point.

A stable critical point $(x_0,y_0)$ is called *{index:asymptotically stable}* if given any initial condition sufficiently close to $(x_0,y_0)$ and any solution $\bigl( x(t), y(t) \bigr)$ satisfying that condition, then
$$ \lim_{t \to \infty} \bigl( x(t), y(t) \bigr) = (x_0,y_0) . $$
That is, the critical point is asymptotically stable if any trajectory for a sufficiently close initial condition goes towards the critical point $(x_0,y_0)$.

:::example {ex:example-nlin-xplusy} Example 8.2.1
Consider $x'=-y-x^2$, $y'=-x+y^2$. See [Figure 8.3](ref:fig-nlin-ex813-new) for the phase diagram. Let us find the critical points. These are the points where $-y-x^2 = 0$ and $-x+y^2=0$. The first equation means $y = -x^2$, and so $y^2 = x^4$. Plugging into the second equation, we obtain $-x+x^4 = 0$. Factoring, we obtain $x(x^3-1)=0$. Since we are looking only for real solutions, we get either $x=0$ or $x=1$. Solving for the corresponding $y$ using $y = -x^2$, we get two critical points, one being $(0,0)$ and the other being $(1,-1)$. Clearly the critical points are isolated.

> FIGURE {fig:fig-nlin-ex813-new} number=8.3 src=../../media/nlin-ex813-new.svg
> alt: A direction field plot in the xy-plane for x between minus 2 and 2 and y between minus 2 and 2. There are two critical points, one at the origin and one at (1, minus 1). The origin is a saddle with arrows coming into it along an upwards diagonal curve and arrows going out along the downwards diagonal curve. The point (1, minus 1) is a sink with arrows pointing towards it. Several trajectories are shown with trajectories that start on the right side for y roughly below y equals 1 and on the bottom roughly to the right of x equals minus 1 going into the sink. Other trajectories turn toward and leave the picture on the upper left side of the plot.
> width: 4.5in
> caption: The phase portrait with few sample trajectories of $x'=-y-x^2$, $y'=-x+y^2$.

The Jacobian matrix is
$$ \begin{bmatrix} -2x & -1 \\ -1 & 2y \end{bmatrix} . $$
At the point $(0,0)$, we get the matrix $\left[ \begin{smallmatrix} 0 & -1 \\ -1 & 0 \end{smallmatrix} \right]$ whose eigenvalues are $1$ and $-1$. As the matrix is invertible, the system is almost linear at $(0,0)$. As the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.

At the point $(1,-1)$, we get the matrix $\left[ \begin{smallmatrix} -2 & -1 \\ -1 & -2 \end{smallmatrix} \right]$ whose eigenvalues are $-1$ and $-3$. The matrix is invertible, and so the system is almost linear at $(1,-1)$. As both eigenvalues are real and negative, the critical point is a sink, and therefore an asymptotically stable equilibrium point. That is, if we start with any point $(x_i,y_i)$ close to $(1,-1)$ as an initial condition and plot a trajectory, it approaches $(1,-1)$. In other words,
$$ \lim_{t \to \infty} \bigl( x(t), y(t) \bigr) = (1,-1) . $$
As you can see from the diagram, this behavior is true even for some initial points quite far from $(1,-1)$, but it is definitely not true for all initial points.
:::

:::example {ex:example-nlin-withexp} Example 8.2.2
Consider $x'=y+y^2e^x$, $y'=x$. First, we find the critical points. These are the points where $y+y^2e^x = 0$ and $x=0$. Simplifying we get $0=y+y^2 = y(y+1)$. So the critical points are $(0,0)$ and $(0,-1)$, and hence are isolated. Let us compute the Jacobian matrix:
$$ \begin{bmatrix} y^2e^x & 1+2ye^x \\ 1 & 0 \end{bmatrix}. $$

At the point $(0,0)$ we get the matrix $\left[ \begin{smallmatrix} 0 & 1 \\ 1 & 0 \end{smallmatrix} \right]$ and so the two eigenvalues are $1$ and $-1$. As the matrix is invertible, the system is almost linear at $(0,0)$. And, as the eigenvalues are real and of opposite signs, we get a saddle point, which is an unstable equilibrium point.

At the point $(0,-1)$ we get the matrix $\left[ \begin{smallmatrix} 1 & -1 \\ 1 & 0 \end{smallmatrix} \right]$ whose eigenvalues are $\frac{1}{2} \pm i \frac{\sqrt{3}}{2}$. The matrix is invertible, and so the system is almost linear at $(0,-1)$. As we have complex eigenvalues with positive real part, the critical point is a spiral source, and therefore an unstable equilibrium point.

> FIGURE {fig:fig-nlin-ex813} number=8.4 src=../../media/nlin-ex813.svg
> alt: A direction field plot in the xy-plane for x between minus 2 and 2 and y between minus 2 and 2. The origin is a saddle critical point with arrows coming into the origin along a downwards sloped curve and arrows coming out along an upwards sloped curve. The point (0, minus 1) is a spiral source with arrows winding counterclockwise out of the critical point. Several trajectories are shown notably two that spiral out of the critical point at (0, minus 1).
> width: 4.5in
> caption: The phase portrait with few sample trajectories of $x'=y+y^2e^x$, $y'=x$.

See [Figure 8.4](ref:fig-nlin-ex813) for the phase diagram. Notice the two critical points, and the behavior of the arrows in the vector field around these points.
:::

## The trouble with centers

Recall, a linear system with a center means that trajectories travel in closed elliptical orbits in some direction around the critical point. Such a critical point we call a *{index:center}* or a *{index:stable center}*. It is not an asymptotically stable critical point, as the trajectories never approach the critical point, but at least if you start sufficiently close to the critical point, you stay close to the critical point. The simplest example of such behavior is the linear system with a center. Another example is the critical point $(0,0)$ in [Example 8.1.1](ref:8.1#example-nlin-1b-example).

The trouble with a center in a nonlinear system is that whether the trajectory goes towards or away from the critical point is governed by the sign of the real part of the eigenvalues of the Jacobian matrix, and the Jacobian matrix in a nonlinear system changes from point to point. Since this real part is zero at the critical point itself, it can have either sign nearby, meaning the trajectory could be pulled towards or away from the critical point.

:::example {ex:example-8-2-3} Example 8.2.3
An example of such a problematic behavior is the system $x'=y, y' = -x+y^3$. The only critical point is the origin $(0,0)$. The Jacobian matrix is
$$ \begin{bmatrix} 0 & 1 \\ -1 & 3 y^2 \\ \end{bmatrix} . $$
At $(0,0)$ the Jacobian matrix is $\left[ \begin{smallmatrix} 0 & 1 \\ -1 & 0 \\ \end{smallmatrix} \right]$, which has eigenvalues $\pm i$. So the linearization has a center.

Via the quadratic equation, the eigenvalues of the Jacobian matrix at any point $(x,y)$ are
$$ \lambda = \frac{3}{2}y^2 \pm i \frac{\sqrt{4-9y^4}}{2} . $$
At any point where $y \neq 0$ (so at most points near the origin), the eigenvalues have a positive real part ($y^2$ can never be negative). This positive real part pulls the trajectory away from the origin. A sample trajectory for an initial condition near the origin is given in [Figure 8.5](ref:fig-nlin-unstable-center).

> FIGURE {fig:fig-nlin-unstable-center} number=8.5 src=../../media/nlin-unstable-centerfig.svg
> alt: A direction field plot in the xy-plane. The arrows around the origin seem to circle the origin in the counterclockwise direction. There is a very tightly wound trajectory shown that winds out of the critical point and eventually leaves the picture (even turning in a different direction from the winding).
> width: 4.5in
> caption: An unstable critical point (spiral source) at the origin for $x'=y, y' = -x+y^3$, even if the linearization has a center.

:::

The moral of the example is that further analysis is needed when the linearization has a center. The analysis will in general be more complicated than in the example above and is more likely to involve case-by-case consideration. Such a complication should not be surprising to you. By now in your mathematical career, you have seen many places where a simple test is inconclusive, and more careful, perhaps ad hoc, analysis is required. Recall for example when the second derivative test for maxima or minima is inconclusive.

## Conservative equations

An equation of the form
$$ x'' + f(x) = 0, $$
where $f(x)$ is an arbitrary function, is called a *{index:conservative equation}*. For example, the pendulum equation is a conservative equation. The equations are conservative as there is no friction in the system so the energy in the system is “conserved.” Let us write this equation as a system of nonlinear ODEs:
$$ x' = y, \qquad y' = -f(x) . $$
These types of equations have the advantage that we can solve for their trajectories easily.

The trick is to first think of $y$ as a function of $x$ for a moment. Then use the chain rule
$$ x'' = y' = \frac{dy}{dx} x' = y \frac{dy}{dx} , $$
where the prime indicates a derivative with respect to $t$. We obtain $y \frac{dy}{dx} + f(x) = 0$. We integrate with respect to $x$ to get $\int y \frac{dy}{dx} \,dx + \int f(x)\, dx = C$. In other words,
$$ \frac{1}{2} y^2 + \int f(x)\, dx = C . $$
We obtained an implicit equation for the trajectories, with different $C$ giving different trajectories. The value of $C$ is conserved on any trajectory. This expression is sometimes called the *{index:Hamiltonian}* or the energy of the system. If you look back to [§1.8](ref:1.8#exact-section), you will notice that $y\frac{dy}{dx} + f(x) = 0$ is an exact equation, and we just found a potential function.

:::example {ex:example-8-2-4} Example 8.2.4
Let us find the trajectories for the equation $x'' + x-x^2 = 0$, which is the equation from [Example 8.1.1](ref:8.1#example-nlin-1b-example). The corresponding first-order system is
$$ x' = y , \qquad y' = -x+x^2 . $$
Trajectories satisfy
$$ \frac{1}{2} y^2 + \frac{1}{2} x^2 - \frac{1}{3} x^3 = C . $$
We solve for $y$
$$ y = \pm \sqrt{-x^2 + \frac{2}{3} x^3 + 2C} . $$

Plotting these graphs we get exactly the trajectories in [Figure 8.1](ref:8.1#fig-nlin-1b). In particular we notice that near the origin the trajectories are *{index:closed curves}*: they keep going around the origin, never spiraling in or out. Therefore we discovered a way to verify that the critical point at $(0,0)$ is a stable center. The critical point at $(1,0)$ is a saddle as we already noticed. This example is typical for conservative equations.
:::

Consider an arbitrary conservative equation $x'' + f(x) = 0$. All critical points occur when $y=0$ (the $x$-axis), that is, when $x' = 0$. The critical points are those points on the $x$-axis where $f(x) = 0$. The trajectories are given by
$$ y = \pm \sqrt{ - 2 \int f(x)\, dx + 2C} . $$
So all trajectories are mirrored across the $x$-axis. In particular, there can be no spiral sources or sinks. The Jacobian matrix is
$$ \begin{bmatrix} 0 & 1 \\ -f'(x) & 0 \end{bmatrix} . $$
The critical point is almost linear if $f'(x) \neq 0$ at the critical point. Let $J$ denote the Jacobian matrix. The eigenvalues of $J$ are solutions to
$$ 0 = \det(J - \lambda I) = \lambda^2 + f'(x) . $$
Therefore $\lambda = \pm \sqrt{-f'(x)}$. In other words, either we get real eigenvalues of opposite signs (if $f'(x) < 0$), or we get purely imaginary eigenvalues (if $f'(x) > 0$). There are only two possibilities for critical points, either an *unstable saddle point*, or a *stable center*. There are never any sinks or sources.

## Exercises

:::exercise {exercise-8-2-001} number=8.2.1 answered=no src=ch-nonlin-systems.tex:944
PROBLEM:
For the systems below, find and classify the critical points. Also indicate if the equilibria are stable, asymptotically stable, or unstable.

a) $x'=-x+3x^2, y'=-y$
b) $x'=x^2+y^2-1$, $y'=x$
c) $x'=ye^x$, $y'=y-x+y^2$

:::

:::exercise {exercise-8-2-002} number=8.2.2 answered=no src=ch-nonlin-systems.tex:955
PROBLEM:
Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.

a) $x''+ x+x^3 = 0$
b) $\theta''+\sin \theta = 0$
c) $z''+ (z-1)(z+1) = 0$
d) $x''+ x^2+1 = 0$

:::

:::exercise {exercise-8-2-003} number=8.2.3 answered=no src=ch-nonlin-systems.tex:967
PROBLEM:
Find and classify the critical point(s) of $x' = -x^2$, $y' = -y^2$.
:::

:::exercise {exercise-8-2-004} number=8.2.4 answered=no src=ch-nonlin-systems.tex:972
PROBLEM:
Suppose $x'=-xy$, $y'=x^2-1-y$.

a) Show there are two spiral sinks at $(-1,0)$ and $(1,0)$.
b) For any initial point of the form $(0,y_0)$, find the trajectory.
c) Can a trajectory starting at $(x_0,y_0)$ where $x_0 > 0$ spiral into the critical point at $(-1,0)$? Why or why not?

:::

:::exercise {exercise-increasing} number=8.2.5 answered=no src=ch-nonlin-systems.tex:986 label=exercise:increasing
PROBLEM:
In the example $x'=y$, $y'=y^3-x$, show that for any trajectory, the distance from the origin is an increasing function. Conclude that at the origin the system behaves like a spiral source. Hint: Consider $f(t) = {\bigl(x(t)\bigr)}^2 + {\bigl(y(t)\bigr)}^2$ and show it has positive derivative.
:::

:::exercise {exercise-8-2-006} number=8.2.6 answered=no src=ch-nonlin-systems.tex:999
PROBLEM:
Suppose $f$ is always positive. Find the trajectories of $x''+f(x') = 0$. Are there any critical points?
:::

:::exercise {exercise-8-2-007} number=8.2.7 answered=no src=ch-nonlin-systems.tex:1005
PROBLEM:
Suppose that $x' = f(x,y)$, $y' = g(x,y)$. Suppose that $g(x,y) > 1$ for all $x$ and $y$. Are there any critical points? What can we say about the trajectories as $t$ goes to infinity?
:::

:::exercise {exercise-8-2-101} number=8.2.101 answered=yes src=ch-nonlin-systems.tex:1013
PROBLEM:
For the systems below, find and classify the critical points.

a) $x'=-x+x^2$, $y'=y$
b) $x'=y-y^2-x$, $y'=-x$
c) $x'=xy$, $y'=x+y-1$

SOLUTION:
a) $(0,0)$: saddle (unstable), $(1,0)$: source (unstable), b) $(0,0)$: spiral sink (asymptotically stable), $(0,1)$: saddle (unstable), c) $(1,0)$: saddle (unstable), $(0,1)$: source (unstable)
:::

:::exercise {exercise-8-2-102} number=8.2.102 answered=yes src=ch-nonlin-systems.tex:1027
PROBLEM:
Find the implicit equations of the trajectories of the following conservative systems. Next find their critical points (if any) and classify them.

a) $x''+ x^2 = 4$
b) $x''+ e^x = 0$
c) $x''+ (x+1)e^x = 0$

SOLUTION:
a) $\frac{1}{2}y^2 + \frac{1}{3}x^3 -4x = C$, critical points: $(-2,0)$, an unstable saddle, and $(2,0)$, a stable center. b) $\frac{1}{2}y^2 + e^x = C$, no critical points. c) $\frac{1}{2}y^2 + xe^x = C$, critical point at $(-1,0)$ is a stable center.
:::

:::exercise {exercise-8-2-103} number=8.2.103 answered=yes src=ch-nonlin-systems.tex:1043
PROBLEM:
The conservative system $x''+x^3 = 0$ is not almost linear. Classify its critical point(s) nonetheless.
SOLUTION:
Critical point at $(0,0)$. Trajectories are $y = \pm \sqrt{2C-({1}/{2})x^4}$, for $C > 0$, these give closed curves around the origin, so the critical point is a stable center.
:::

:::exercise {exercise-8-2-104} number=8.2.104 answered=yes src=ch-nonlin-systems.tex:1053
PROBLEM:
Derive an analogous classification of critical points for equations in one dimension, such as $x'= f(x)$ based on the derivative. A point $x_0$ is critical when $f(x_0) = 0$ and almost linear if in addition $f'(x_0) \neq 0$. Figure out if the critical point is stable or unstable depending on the sign of $f'(x_0)$. Explain. Hint: see [§1.6](ref:1.6#auteq-section).
SOLUTION:
A critical point $x_0$ is stable if $f'(x_0) < 0$ and unstable when $f'(x_0) > 0$.
:::

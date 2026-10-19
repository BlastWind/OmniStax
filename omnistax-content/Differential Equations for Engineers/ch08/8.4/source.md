# 8.4 Limit cycles {sec:limitcycles-section}

:::note [section-notes]
*Note: less than 1 lecture, discussed in §6.1 and §6.4 in [EP](cite:EP) , §9.7 in [BD](cite:BD)*
:::

For nonlinear systems, trajectories do not simply need to approach or leave a single point. They may in fact approach a larger set, such as a circle or another closed curve.

:::example {ex:example-8-4-1} Example 8.4.1
The *{index:Van der Pol oscillator}*^[Named for the Dutch physicist [Balthasar van der Pol](https://en.wikipedia.org/wiki/Balthasar_van_der_Pol) (1889–1959).] is the following equation
$$ x''-\mu(1-x^2) x' + x = 0, $$
where $\mu$ is some positive constant. The Van der Pol oscillator originated with electrical circuits, but finds applications in diverse fields such as biology, seismology, and other physical sciences.

For simplicity, we use $\mu = 1$. A phase diagram is given in the left-hand plot in [Figure 8.10](ref:fig-nlin-van-der-fig), where $y=x'$ as usual. Notice how the trajectories seem to very quickly settle on a closed curve. On the right-hand side is the plot of a single solution for $t=0$ to $t=30$ with initial conditions $x(0) = 0.1$ and $x'(0) = 0.1$. The solution quickly tends to a periodic solution.

> FIGURE {fig:fig-nlin-van-der-fig} number=8.10 src=../../media/nlin-van-der-phase-plot1.svg
> alt: On the left is a phase plane (direction plot) of a Van der Pol oscillator where the horizontal axis is the x and the vertical axis is the derivative x prime. The horizontal axis is between minus 4 and 4, and so is the vertical. On this plot the arrows seem to be going around the origin in a clockwise manner. However, there is a single trajectory that is a closed curve (a loop), which is called the limit cycle. Its shape is very roughly a sideways, rounded rectangle. It is roughly between minus 2 and 2 on the horizontal x axis and between minus 3 and 3 on the vertical axis. A trajectory starting inside this limit cycle spirals outwards towards the limit cycle and gets closer and closer to it. Similarly, several trajectories starting outside approach the limit cycle from the outside and get closer and closer to it. Both from the inside and the outside, the approach is very quick and the trajectories do not even go around once before being indistinguishable from the limit cycle. On the right there is a plot on the tx-plane for t between 0 to 30 of a sample solution starting near the origin. It quickly goes into a large periodic oscillation between roughly minus 2 and 2.
> width: 9in
> caption: The phase portrait (left) and a graph of a sample solution of the Van der Pol oscillator.

The Van der Pol oscillator is an example of *{index:relaxation oscillation}*. The word relaxation refers to the sudden jump (the very steep part of the solution). For larger $\mu$, the steep part is more pronounced. For smaller $\mu$, the limit cycle looks more like a circle. In fact, if $\mu = 0$, then $x''+x=0$, which is a linear system with a center and all trajectories are circles.
:::

A trajectory in the phase portrait that is a closed curve (a curve that is a loop) is called a *{index:closed trajectory}*. A *{index:limit cycle}* is a closed trajectory such that at least one other trajectory spirals into it (or spirals out of it). For example, the closed curve in the phase portrait for the Van der Pol equation is a limit cycle. If all trajectories that start near the limit cycle spiral into it, the limit cycle is called *asymptotically stable*{index-entry:asymptotically stable limit cycle}. The limit cycle in the Van der Pol oscillator is asymptotically stable.

Given a closed trajectory in an autonomous system, any solution that starts on it is periodic. Such a curve is called a *{index:periodic orbit}*. More precisely, if $\bigl(x(t),y(t)\bigr)$ is a solution such that for some $t_0$ the point $\bigl(x(t_0),y(t_0)\bigr)$ lies on a periodic orbit, then both $x(t)$ and $y(t)$ are periodic functions (with the same period). That is, there is some number $P$ such that $x(t) = x(t+P)$ and $y(t) = y(t+P)$.

Consider the system
$$ x' = f(x,y), \qquad y' = g(x,y) , $$ {eq:nlin-gensys} number=8.2
where the functions $f$ and $g$ have continuous derivatives in some region $R$ in the plane.

:::theorem {thm:theorem-8-4-1} Theorem 8.4.1 (Poincaré–Bendixson^[[Ivar Otto Bendixson](https://en.wikipedia.org/wiki/Ivar_Otto_Bendixson) (1861–1935) was a Swedish mathematician.])
{index-entry:Poincaré–Bendixson Theorem} Suppose $R$ is a closed bounded region (a region in the plane that includes its boundary and does not have points arbitrarily far from the origin) and [(8.2)](ref:nlin-gensys) has no critical points in $R$. Suppose $\bigl(x(t), y(t)\bigr)$ is a solution of [(8.2)](ref:nlin-gensys) in $R$ that exists for all $t \geq t_0$. Then either the solution is a periodic function, or the solution tends towards a periodic solution in $R$.
:::

The point of the theorem is that if you find one solution that exists for all $t$ large enough (that is, as $t$ goes to infinity) and stays within a bounded region without critical points, then you have found either a periodic orbit or a solution that spirals towards a limit cycle—in the long term, the solution is very close to a periodic function. If $R$ contains critical points, the behavior may be more complicated: The solution could tend towards a loop composed of critical points connected by trajectories, or the solution could simply tend towards a critical point. The theorem is more a qualitative statement rather than something to help us in computations. In practice, it is hard to either find analytic solutions or to show that they exist for all time. But if we think the solution exists, we numerically solve for a large time to approximate the limit cycle. Another caveat is that the theorem only works in two dimensions. In three dimensions and higher, there is simply too much room.

The theorem applies to all solutions in the Van der Pol oscillator. Solutions that start at any point except the origin $(0,0)$ tend to the periodic solution around the limit cycle, and the initial condition of $(0,0)$ gives the constant solution $x=0$, $y=0$.

:::example {ex:example-8-4-2} Example 8.4.2
Consider
$$ x' = y + {(x^2+y^2-1)}^2 x, \qquad y' = -x + {(x^2+y^2-1)}^2 y. $$
A vector field and solutions with initial conditions $(1.02,0)$, $(0.9,0)$, and $(0.1,0)$ are drawn in [Figure 8.11](ref:fig-nlin-unstable-limit-cycle).

> FIGURE {fig:fig-nlin-unstable-limit-cycle} number=8.11 src=../../media/nlin-unstable-limit-cycle.svg
> alt: A direction plot of an unstable limit cycle in the xy-plane where the circular limit cycle is on the unit circle, and all the arrows go roughly clockwise. A trajectory from the inside approaches the limit cycle, while a trajectory starting just outside of the limit cycle spirals out and goes around one and a half times before peeling off and leaving the picture at the top.
> width: 4.5in
> caption: Unstable limit cycle example.

Notice that points on the unit circle (distance one from the origin) satisfy $x^2+y^2-1=0$. And $x(t) = \sin(t)$, $y = \cos(t)$ is a solution of the system. Therefore we have a closed trajectory. For points off the unit circle, the second term in $x'$ pushes the solution further away from the $y$-axis than the system $x' = y$, $y' = -x$, and $y'$ pushes the solution further away from the $x$-axis than the linear system $x'=y$, $y' = -x$. In other words, for all other initial conditions the trajectory will spiral out.

This means that for initial conditions inside the unit circle, the solution spirals out towards the periodic solution on the unit circle, and for initial conditions outside the unit circle the solutions spiral off towards infinity. Therefore the unit circle is a limit cycle, but not an asymptotically stable one. The Poincaré–Bendixson Theorem applies to the initial points inside the unit circle, as those solutions stay bounded, but not to those outside, as those solutions go off to infinity.
:::

A similar analysis applies to the system
$$ x' = y + {(x^2+y^2-1)} x, \qquad y' = -x + {(x^2+y^2-1)} y. $$
The unit circle is again a closed trajectory, points outside the unit circle spiral out to infinity, but now points inside the unit circle spiral towards the critical point at the origin. The unit circle is an asymptotically unstable limit cycle where all trajectories spiral away. If we consider the linear system $x' = y$, $y' = -x$, then all circles centered at the origin (not just the unit circle) are closed trajectories, but no trajectory spirals onto any other, so none of the circles are limit cycles. All these solutions are periodic.

By Picard’s theorem ([Theorem 3.1.1](ref:3.1#sys-picardthm)), at any point in the plane, we can always find a solution to [(8.2)](ref:nlin-gensys) a little bit forward or backwards in time, as long as $f$ and $g$ have continuous derivatives. So if we find a closed trajectory in an autonomous system, then for every initial point inside the closed trajectory, the solution will exist for all time and it will stay bounded (it will stay inside the closed trajectory). The moment we found the solution above going around the unit circle, we knew that for every initial point inside the circle, the solution exists for all time and the Poincaré–Bendixson theorem applies.

We next look for conditions when limit cycles (or periodic orbits) do not exist. We assume the equation [(8.2)](ref:nlin-gensys) is defined on a *{index:simply connected region}*, that is, a region with no holes we can go around. For example, the entire plane is a simply connected region. So is the inside of the unit disc. However, the entire plane minus a point is not a simply connected region as it has a “hole” at the origin.

:::theorem {thm:theorem-8-4-2} Theorem 8.4.2 (Bendixson–Dulac^[[Henri Dulac](https://en.wikipedia.org/wiki/Henri_Dulac) (1870–1955) was a French mathematician.])
{index-entry:Bendixson–Dulac Theorem} Suppose $R$ is a simply connected region, and the expression ^[Usually the expression in the Bendixson–Dulac Theorem is $\frac{\partial (\varphi f)}{\partial x} + \frac{\partial (\varphi g)}{\partial y}$ for some continuously differentiable function $\varphi$. For simplicity, let us just consider the case $\varphi = 1$.]
$$ \frac{\partial f}{\partial x} + \frac{\partial g}{\partial y} $$
is either always positive or always negative on $R$ (except perhaps a small set such as on isolated points or curves) then the system [(8.2)](ref:nlin-gensys) has no closed trajectory inside $R$.
:::

The theorem gives a way of ruling out the existence of a closed trajectory, and hence a way of ruling out limit cycles. The expression $\frac{\partial f}{\partial x} + \frac{\partial g}{\partial y}$ may seem random, but it is called the *{index:divergence}* of the vector field. Divergence measures how much the vector field is “expanding” at any point and comes up in many other contexts. The theorem says that if the vector field is either expanding everywhere on $R$ or contracting everywhere on $R$, then there is no closed trajectory and so no limit cycle. Perhaps this is intuitive—if particles travel along the vector fields and are getting further and further apart, then we do not expect any particles to travel in loops. The exception about points or curves means that divergence can be zero at a few points, or on a curve, but not on any larger set.

:::example {ex:example-8-4-3} Example 8.4.3
Consider $x'=y+y^2e^x$, $y'=x$ in the entire plane (see [Example 8.2.2](ref:8.2#example-nlin-withexp)). The plane is simply connected and the theorem applies. We compute $\frac{\partial f}{\partial x} + \frac{\partial g}{\partial y} = y^2e^x+ 0$. The function $y^2e^x$ is always positive except on the line $y=0$. Therefore, via the theorem, the system has no closed trajectories.
:::

A common informal, but not quite correct, way to state the theorem is to conclude there are no periodic solutions that stay in $R$. The example above has two critical points and hence it has constant solutions. Constant functions are periodic. The conclusion of the theorem is that there exist no trajectories that form closed curves, or in other words, that there exist no nonconstant periodic solutions that stay in $R$.

:::example {ex:example-8-4-4} Example 8.4.4
Consider a somewhat more complicated example. Take the system $x'=-y-x^2$, $y'=-x+y^2$ (see [Example 8.2.1](ref:8.2#example-nlin-xplusy)). We compute $\frac{\partial f}{\partial x} + \frac{\partial g}{\partial y} = -2x + 2y=2(-x+y)$. This expression takes on both signs, so if we are talking about the whole plane we cannot simply apply the theorem. However, we could apply it on the set where $-x+y \geq 0$. Via the theorem, there is no closed trajectory in that set. Similarly, there is no closed trajectory in the set $-x+y \leq 0$. We cannot conclude (yet) that there is no closed trajectory in the entire plane. For all we know, perhaps half of it is in the set where $-x+y \geq 0$ and the other half is in the set where $-x+y \leq 0$.

The key is to look at the line where $-x+y=0$, or $x=y$. On this line, $x' = -y-x^2 = -x-x^2$ and $y' = -x+y^2 = -x+x^2$. In particular, if $x=y$, then $x' \leq y'$. So the arrows, the vectors $(x',y')$, always point into the set where $-x+y \geq 0$. There is no way we can start in the set where $-x+y \geq 0$ and go into the set where $-x+y \leq 0$. Once we are in the set where $-x+y \geq 0$, we stay there. So no closed trajectory can have points in both sets.
:::

:::example {ex:example-8-4-5} Example 8.4.5
Consider $x' = y+(x^2+y^2-1)x$, $y' = -x +(x^2+y^2-1)y$ in the region $R$ given by $x^2+y^2 > \frac{1}{2}$. That is, $R$ is the region outside a circle of radius $\frac{1}{\sqrt{2}}$ centered at the origin. Then there is a closed trajectory in $R$, namely $x=\cos(t)$, $y=\sin(t)$. Furthermore,
$$ \frac{\partial f}{\partial x} + \frac{\partial g}{\partial y} = 4x^2+4y^2-2 , $$
which is always positive on $R$. So what is going on? The Bendixson–Dulac theorem does not apply since the region $R$ is not simply connected—it has a hole, the circle we cut out!
:::

## Exercises

:::exercise {exercise-8-4-001} number=8.4.1 answered=no src=ch-nonlin-systems.tex:2101
PROBLEM:
Show that the following systems have no closed trajectories.

a) $x'=x^3+y,\quad y'=y^3+x^2$,
b) $x'=e^{x-y},\quad y'=e^{x+y}$,
c) $x'=x+3y^2-y^3,\quad y'=y^3+x^2$.

:::

:::exercise {exercise-8-4-002} number=8.4.2 answered=no src=ch-nonlin-systems.tex:2110
PROBLEM:
Formulate a condition for a 2-by-2 linear system ${\vec{x}}' = A \vec{x}$ to not be a center using the Bendixson–Dulac theorem. That is, the theorem says something about certain elements of $A$.
:::

:::exercise {exercise-8-4-003} number=8.4.3 answered=no src=ch-nonlin-systems.tex:2116
PROBLEM:
Explain why the Bendixson–Dulac Theorem does not apply for any conservative system $x''+h(x) = 0$.
:::

:::exercise {exercise-8-4-004} number=8.4.4 answered=no src=ch-nonlin-systems.tex:2121
PROBLEM:
A system such as $x'=x, y'=y$ has solutions that exist for all time $t$, yet there are no closed trajectories. Explain why the Poincaré–Bendixson Theorem does not apply.
:::

:::exercise {exercise-8-4-005} number=8.4.5 answered=no src=ch-nonlin-systems.tex:2127
PROBLEM:
Differential equations can also be given in different coordinate systems. Suppose we have the system $r' = 1-r^2$, $\theta' = 1$ given in polar coordinates. Find all the closed trajectories and check if they are limit cycles and if so, if they are asymptotically stable or not.
:::

:::exercise {exercise-8-4-101} number=8.4.101 answered=yes src=ch-nonlin-systems.tex:2137
PROBLEM:
Show that the following systems have no closed trajectories.

a) $x'=x+y^2,\quad y'=y+x^2$,
b) $x'=-x\sin^2(y),\quad y'=e^x$,
c) $x'=xy^2,\quad y'=x+x^2$.

SOLUTION:
Use Bendixson–Dulac Theorem. a) $f_x+g_y = 1+1 > 0$, so no closed trajectories. b) $f_x+g_y = -\sin^2(y)+0 < 0$ for all $x,y$ except the lines given by $y=k\pi$ (where we get zero), so no closed trajectories. c) $f_x+g_y = y^2 + 0 > 0$ for all $x,y$ except the line given by $y=0$ (where we get zero), so no closed trajectories.
:::

:::exercise {exercise-8-4-102} number=8.4.102 answered=yes src=ch-nonlin-systems.tex:2154
PROBLEM:
Suppose an autonomous system in the plane has a solution $x=\cos(t)(1+e^{-t})$, $y=\sin(t)(1+e^{-t})$. What can you say about the system (in particular about limit cycles and periodic solutions)?
SOLUTION:
Using Poincaré–Bendixson Theorem, the system has a limit cycle, which is the unit circle centered at the origin, as $x=\cos(t)(1+e^{-t})$, $y=\sin(t)(1+e^{-t})$ gets closer and closer to the unit circle. Thus $x=\cos(t)$, $y=\sin(t)$ is the periodic solution.
:::

:::exercise {exercise-8-4-103} number=8.4.103 answered=yes src=ch-nonlin-systems.tex:2168
PROBLEM:
Show that the limit cycle of the Van der Pol oscillator (for $\mu > 0$) must not lie completely in the set where $-1 < x < 1$. Compare with [Figure 8.10](ref:fig-nlin-van-der-fig).
SOLUTION:
$f(x,y) = y$, $g(x,y) = \mu(1-x^2)y-x$. So $f_x+g_y = \mu(1-x^2)$. The Bendixson–Dulac Theorem says there is no closed trajectory lying entirely in the set $x^2 < 1$.
:::

:::exercise {exercise-8-4-104} number=8.4.104 answered=yes src=ch-nonlin-systems.tex:2182
PROBLEM:
Consider the system $r' = \sin(r)$, $\theta' = 1$ given in polar coordinates. Find all the closed trajectories.
SOLUTION:
The closed trajectories are those where $\sin(r) = 0$, therefore, all the circles centered at the origin with radius that is a positive multiple of $\pi$ are closed trajectories.
:::

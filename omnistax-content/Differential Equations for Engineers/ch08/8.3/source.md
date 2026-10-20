# 8.3 Applications of nonlinear systems {sec:nlinapps-section}

:::note [section-notes]
*Note: 2 lectures, §6.3–§6.4 in [EP](cite:EP), §9.3, §9.5 in [BD](cite:BD)*
:::

In this section we study two very standard examples of nonlinear systems. First, we look at the nonlinear pendulum equation. We saw the pendulum equation’s linearization before, but we noted it was only valid for small angles and short times. Now we find out what happens for large angles. Next, we look at the predator-prey equation, which finds various applications in modeling problems in biology, chemistry, economics, and elsewhere.

## Pendulum

The first example we study is the pendulum equation $\theta''+\frac{g}{L} \sin \theta = 0$. Here, $\theta$ is the angular displacement, $g$ is the gravitational acceleration, and $L$ is the length of the pendulum. In this equation we disregard friction, so we are talking about an idealized pendulum.

> IMAGE {img:mv-pend} src=../../media/mv-pend.svg
> alt: A diagram of a pendulum. A pendulum is shown fixed at a point at the top moving along a circular arc. The bottom of the pendulum is labeled m, and the angle the pendulum makes with a vertical line is labeled theta. The length of the pendulum is labeled L.

This equation is a conservative equation, so we can use our analysis of conservative equations from the previous section. We change the equation to a two-dimensional system in variables $(\theta,\omega)$ by introducing the new variable $\omega = \theta'$:
$$ \begin{bmatrix} \theta \\ \omega \end{bmatrix} ' = \begin{bmatrix} \omega \\ - \frac{g}{L} \sin \theta \end{bmatrix} . $$
The critical points of this system are when $\omega = 0$ and $-\frac{g}{L} \sin \theta = 0$, or in other words if $\sin \theta = 0$. So the critical points are when $\omega = 0$ and $\theta$ is a multiple of $\pi$. That is, the points are $\ldots (-2\pi,0), (-\pi,0), (0,0), (\pi,0), (2\pi,0) \ldots$. While there are infinitely many critical points, they are all isolated. For conservative equations, there are two types of critical points: either stable centers or saddle points.

We compute the Jacobian matrix:
$$ \begin{bmatrix} \frac{\partial}{\partial \theta} \Bigl( \omega \Bigr) & \frac{\partial}{\partial \omega} \Bigl( \omega \Bigr) \\ \frac{\partial}{\partial \theta} \Bigl( - \frac{g}{L} \sin \theta \Bigr) & \frac{\partial}{\partial \omega} \Bigl( - \frac{g}{L} \sin \theta \Bigr) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ - \frac{g}{L} \cos \theta & 0 \end{bmatrix} . $$
The eigenvalues of this matrix are $\lambda = \pm \sqrt{-\frac{g}{L}\cos \theta}$. The eigenvalues are going to be real when $\cos \theta < 0$. This happens at the odd multiples of $\pi$. The eigenvalues are going to be purely imaginary when $\cos \theta > 0$. This happens at the even multiples of $\pi$. Therefore the system has a stable center at the points $\ldots (-2\pi,0), (0,0), (2\pi,0) \ldots$, and it has an unstable saddle at the points $\ldots (-3\pi,0), (-\pi,0), (\pi,0), (3\pi,0) \ldots$. Look at the phase diagram in [Figure 8.6](ref:fig-nlin-pend-phasediag), where for simplicity we let $\frac{g}{L} = 1$.

> FIGURE {fig:fig-nlin-pend-phasediag} number=8.6 src=../../media/nlin-pend-phasediag.svg
> alt: A direction field plot in the theta omega plane (the angle theta being the horizontal direction) for theta between minus 7 and 7 and for omega between minus 3 and 3. There are 5 critical points shown. There are 3 centers shown, one at the origin, one at (minus 2 pi,0) and one at (2 pi,0). The arrows are winding clockwise around the centers. There are 2 saddles shown, one at (minus pi,0) and one at (pi,0). Several trajectories are drawn. Trajectories around the centers simply go around in ellipses. Trajectories that start high on the left-hand side simply go in a wavy motion as if repelled by the centers along the top of the plot and leave on the right-hand side of the plot. The trajectories on the bottom do the same thing in reverse. There are also the trajectories that go around the centers and hit the saddles diagonally.
> width: 4.5in
> caption: Phase plane diagram and some trajectories of the nonlinear pendulum equation.

In the linearized equation, we have only a single critical point, the center at $(0,0)$. Now we see more clearly what we meant when we said the linearization is good for small angles. The horizontal axis is the deflection angle. The vertical axis is the angular velocity of the pendulum. Suppose we start at $\theta = 0$ (no deflection), and we start with a small angular velocity $\omega$. Then the trajectory keeps going around the critical point $(0,0)$ in an approximate circle. This corresponds to short swings of the pendulum back and forth. When $\theta$ stays small, the trajectories really look like circles and hence are very close to our linearization.

When we give the pendulum a big enough push, it goes across the top and keeps spinning about its axis. This behavior corresponds to the wavy curves that do not cross the horizontal axis in the phase diagram. Let us suppose we look at the top curves, when the angular velocity $\omega$ is large and positive. Then the pendulum is going around and around its axis. The velocity is going to be large when the pendulum is near the bottom, and the velocity is the smallest when the pendulum is close to the top of its loop.

At each critical point, there is an equilibrium solution. Consider the solution $\theta = 0$; the pendulum is not moving and is hanging straight down. This is a stable place for the pendulum to be, hence this is a *stable* equilibrium.

The other type of equilibrium solution is at the unstable point, for example $\theta = \pi$. Here the pendulum is upside down. Sure, you can balance the pendulum this way and it will stay, but this is an *unstable* equilibrium. Even the tiniest push will make the pendulum start swinging wildly.

See [Figure 8.7](ref:fig-nlin-pend) for a diagram. The first picture is the stable equilibrium $\theta = 0$. The second corresponds to those “almost circles” in the phase diagram around $\theta =0$ when the angular velocity is small. The third is the unstable equilibrium $\theta = \pi$. The last picture corresponds to the wavy lines for large angular velocities.

> FIGURE {fig:fig-nlin-pend} number=8.7 src=../../media/nlin-pend.svg
> alt: Four diagrams of the possible motions of the pendulum. From left to right, the first picture is a stationary pendulum hanging down with the label 'theta equals 0'. The second picture labeled 'Small angular velocities' is a swinging pendulum with an arrow indicating back and forth motion in a circular arc. The third picture labeled 'theta equals pi' is a stationary pendulum balanced exactly upwards. The final picture, labeled 'Large angular velocities', is a pendulum rotating completely around its axis.
> caption: Various possibilities for the motion of the pendulum.

The quantity
$$ \frac{1}{2} \omega^2 - \frac{g}{L} \cos \theta $$
is conserved by any solution. This is the energy or the Hamiltonian of the system.

We have a conservative equation and so (exercise) the trajectories are given by
$$ \omega = \pm \sqrt{ \frac{2g}{L} \cos \theta + C} , $$
for various values of $C$. Let us look at the initial condition of $(\theta_0,0)$, that is, we take the pendulum to angle $\theta_0$, and just let it go (initial angular velocity 0). We plug the initial conditions into the above and solve for $C$ to obtain
$$ C = - \frac{2g}{L} \cos \theta_0 . $$
Thus the expression for the trajectory is
$$ \omega = \pm \sqrt{ \frac{2g}{L}} \sqrt{ \cos \theta - \cos \theta_0 } . $$

Let us figure out the period. That is, the time it takes for the pendulum to swing back and forth. We notice that the trajectory about the origin in the phase plane is symmetric about both the $\theta$ and the $\omega$-axis. That is, in terms of $\theta$, the time it takes from $\theta_0$ to $-\theta_0$ is the same as it takes from $-\theta_0$ back to $\theta_0$. Furthermore, the time it takes from $-\theta_0$ to $0$ is the same as to go from $0$ to $\theta_0$. Therefore, let us find how long it takes for the pendulum to go from angle 0 to angle $\theta_0$, which is a quarter of the full oscillation and then multiply by 4.

We figure out this time by finding $\frac{dt}{d\theta}$ and integrating from $0$ to $\theta_0$. The period is four times this integral. Let us stay in the region where $\omega$ is positive. Since $\omega = \frac{d\theta}{dt}$, inverting we get
$$ \frac{dt}{d\theta} = \sqrt{\frac{L}{2g}} \frac{1}{\sqrt{\cos \theta - \cos \theta_0 }} . $$
Therefore the period $T$ is given by
$$ T = 4 \sqrt{\frac{L}{2g}} \int_0^{\theta_0} \frac{1}{\sqrt{\cos \theta - \cos \theta_0 }}\, d\theta . $$
The integral is an improper integral, and we cannot in general evaluate it symbolically. We must resort to numerical approximation if we want to compute a particular $T$.

Recall from [§2.4](ref:2.4#sec-mv), the linearized equation $\theta''+\frac{g}{L}\theta = 0$ has period
$$ T_{\text{linear}} = 2\pi \sqrt{\frac{L}{g}} . $$
We plot $T$, $T_{\text{linear}}$, and the relative error $\frac{T-T_{\text{linear}}}{T}$ in [Figure 8.8](ref:fig-TvsT0). The relative error says how far our approximation is from the real period percentage-wise. Note that $T_{\text{linear}}$ is simply a constant. It does not change with the initial angle $\theta_0$. The actual period $T$ gets larger and larger as $\theta_0$ gets larger. Notice how the relative error is small when $\theta_0$ is small. It is still only $15\%$ when $\theta_0 = {\pi}/{2}$, that is, a 90 degree angle. The error is $3.8\%$ when starting at ${\pi}/{4}$, a 45 degree angle. At a 5 degree initial angle, the error is only $0.048 \%$.

> FIGURE {fig:fig-TvsT0} number=8.8 src=../../media/nlin-T-vs-T0-abs-relerr.svg
> alt: Two plots. On the left plot, there is a plot of T and T sub linear as functions of theta sub 0 for theta sub 0 between 0 and pi over 2. The plot of T sub linear is a horizontal line at 2 pi, while the plot of T starts at 2 pi on the left, but slowly rises to well above 7 on the right. On the right plot is a plot of the relative error of the two quantities starting out at zero for theta sub 0 equals 0, then rising and at about 0.15 on the right.
> width: 9in
> caption: The plot of $T$ and $T_{\text{linear}}$ with $\frac{g}{L} = 1$ (left), and the plot of the relative error $\frac{T-T_{\text{linear}}}{T}$ (right), for $\theta_0$ between 0 and ${\pi}/{2}$.

While it is not immediately obvious from the formula, it is true that
$$ \lim_{\theta_0 \uparrow \pi} T = \infty . $$
That is, the period goes to infinity as the initial angle approaches the unstable equilibrium point. So if we put the pendulum almost upside down it may take a very long time before it gets down. This is consistent with the limiting behavior, where the exactly upside down pendulum never makes an oscillation, so we could think of that as infinite period.

## Predator-prey or Lotka–Volterra systems

One of the most common simple applications of nonlinear systems is the so-called *{index:predator-prey}* or *{index:Lotka–Volterra}*^[Named for the American mathematician, chemist, and statistician [Alfred James Lotka](https://en.wikipedia.org/wiki/Alfred_J._Lotka) (1880–1949) and the Italian mathematician and physicist [Vito Volterra](https://en.wikipedia.org/wiki/Vito_Volterra) (1860–1940).] systems. For example, such a system arises when two species interact, one as the prey and one as the predator. It is then no surprise that the equations also see applications in economics. The system also arises in chemical reactions. In biology, this system of equations explains the natural periodic variations of populations of different species. Before the application of differential equations, these periodic variations in the population baffled biologists.

We keep with the classical example of hares and foxes in a forest. It is the easiest to understand.
$$ \begin{aligned} & x = \# \text{ of hares (the prey),} \\ & y = \# \text{ of foxes (the predator).} \end{aligned} $$
When there are a lot of hares, there is plenty of food for the foxes, so the fox population grows. However, when the fox population grows, the foxes eat more hares, so when there are lots of foxes, the hare population should go down, and vice versa. The Lotka–Volterra model proposes that this behavior is described by the system of equations
$$ \begin{aligned} & x' = (a-by)x, \\ & y' = (cx-d)y, \end{aligned} $$
where $a,b,c,d$ are some parameters that describe the interaction of the foxes and hares^[This interaction does not end well for the hare.]. In this model, these are all positive numbers.

Let us analyze the idea behind this model. The model is a slightly more complicated idea based on the exponential population model. First expand,
$$ x' = (a-by)x = ax - byx . $$
The hares are expected to simply grow exponentially in the absence of foxes. That is where the $ax$ term comes in, the growth in population is proportional to the population itself. We are assuming the hares always find enough food and have enough space to reproduce. However, there is another component $-byx$, that is, the population also is decreasing proportionally to the number of foxes. Together we can write the equation as $(a-by)x$, so it is like exponential growth or decay but the constant depends on the number of foxes.

The equation for foxes is very similar, expand again
$$ y' = (cx-d)y = cxy-dy . $$
The foxes need food (hares) to reproduce: the more food, the bigger the rate of growth, hence the $cxy$ term. On the other hand, there are natural deaths in the fox population, and hence the $-dy$ term.

Without further delay, let us start with an explicit example. Suppose the equations are
$$ x' = (0.4-0.01y)x, \qquad y' = (0.003x-0.3)y . $$
See [Figure 8.9](ref:fig-nlin-pred-prey) for the phase portrait. In this example it makes sense to also plot $x$ and $y$ as graphs with respect to time. Therefore the second graph in [Figure 8.9](ref:fig-nlin-pred-prey) is the graph of $x$ and $y$ on the vertical axis (the prey $x$ is the thinner line with taller peaks), against time on the horizontal axis. The particular solution graphed was with initial conditions of 20 foxes and 50 hares.

> FIGURE {fig:fig-nlin-pred-prey} number=8.9 src=../../media/nlin-pred-prey-phase-graphs.svg
> alt: On the left there is a direction field for x between 0 and 200 and y between 0 and 100. The arrows rotate counterclockwise around the critical point at (100,40). Several trajectories are plotted, they are not quite circular, they go roughly rightwards along the bottom, then turn to go back up roughly diagonally and then go back down along the left-hand side. The large trajectories look like a very rounded triangle. On the right is a plot for t between 0 and 40, where the graph of predators is in thick red and prey in thin blue. The predators start lower than prey. The prey grow quickly at first reaching a peak when the predators are growing, and then the prey goes down significantly. Once the prey is roughly halfway down its peak, the predators peak and start going down. The prey stops falling and recovers and starts growing again, while predators keep falling a little longer. Then the cycle repeats. The prey curves go much higher peaking above 225, while the predators peak somewhere around 80. The minimum of the predators is around 15, while the minimum of the prey is around 32. The curve for the predators is steeper going up and less steep going down, while the prey curve rises and falls almost at the same steepness, perhaps rising a little slower.
> width: 9in
> caption: The phase portrait (left) and graphs of $x$ and $y$ for a sample solution (right).

Let us analyze what we see on the graphs. We work in the general setting rather than putting in specific numbers. We start with finding the critical points. Set $(a-by)x = 0$, and $(cx-d)y = 0$. The first equation is satisfied if either $x=0$ or $y={a}/{b}$. If $x=0$, the second equation implies $y=0$. If $y= {a}/{b}$, the second equation implies $x={d}/{c}$. There are two equilibria: at $(0,0)$ when there are no animals at all, and at $({d}/{c},{a}/{b})$. In our specific example $x = {d}/{c} = 100$, and $y = {a}/{b} = 40$. This is the point where there are 100 hares and 40 foxes.

We compute the Jacobian matrix:
$$ \begin{bmatrix} a-by & -bx \\ cy & cx-d \end{bmatrix} . $$
At the origin $(0,0)$ we get the matrix $\left[ \begin{smallmatrix} a & 0 \\ 0 & -d \end{smallmatrix} \right]$, so the eigenvalues are $a$ and $-d$, hence real and of opposite signs. So the critical point at the origin is a saddle. This makes sense. If you started with some foxes but no hares, then the foxes would go extinct, that is, you would approach the origin. If you started with no foxes and a few hares, then the hares would keep multiplying without check, and so you would go away from the origin.

OK, how about the other critical point at $({d}/{c},{a}/{b})$. Here the Jacobian matrix becomes
$$ \begin{bmatrix} 0 & -\frac{bd}{c} \\ \frac{ac}{b} & 0 \end{bmatrix} . $$
The eigenvalues satisfy $\lambda^2 + ad = 0$. In other words, $\lambda = \pm i \sqrt{ad}$. The eigenvalues being purely imaginary, we are in the case where we cannot quite decide using only linearization. We could have a stable center, spiral sink, or a spiral source. That is, the equilibrium could be asymptotically stable, stable, or unstable. Of course I gave you a picture above that seems to imply it is a stable center. But never trust a picture only. Perhaps the oscillations are getting larger and larger, but only *very* slowly. Of course this would be bad as it would imply something will go wrong with our population sooner or later. And I only graphed a very specific example with very specific trajectories.

How can we be sure we are in the stable situation? As we said before, in the case of purely imaginary eigenvalues, we have to do a bit more work. Previously we found that for conservative systems, there was a certain quantity that was conserved on the trajectories, and hence the trajectories had to go in closed loops. We can use a similar technique here. We just have to figure out what is the conserved quantity. After some trial and error we find the constant
$$ C = \frac{y^a x^d}{e^{cx+by}} = y^a x^d e^{-cx-by} $$
is conserved. Such a quantity is called the *{index:constant of motion}*. Let us check $C$ really is a constant of motion. How do we check, you say? Well, a constant is something that does not change with time, so let us compute the derivative with respect to time:
$$ C' = a y^{a-1}y' x^d e^{-cx-by} + y^a d x^{d-1} x' e^{-cx-by} + y^a x^d e^{-cx-by} (-cx'-by') . $$
Our equations give us what $x'$ and $y'$ are so let us plug those in:
$$ \begin{split} C' & = a y^{a-1} (cx-d)y x^d e^{-cx-by} + y^a d x^{d-1} (a-by)x e^{-cx-by} \\ & \phantom{mm} + y^a x^d e^{-cx-by} \bigl(-c(a-by)x-b(cx-d)y\bigr) \\ & = y^a x^d e^{-cx-by} \Bigl( a (cx-d) + d (a-by) + \bigl(-c(a-by)x-b(cx-d)y\bigr) \Bigr) \\ & = 0 . \end{split} $$
So $C$ is constant along the trajectories. In fact, the expression $C = \frac{y^a x^d}{e^{cx+by}}$ gives us an implicit equation for the trajectories. In any case, once we have found this constant of motion, it must be true that the trajectories are simple curves—the level curves of $\frac{y^a x^d}{e^{cx+by}}$. It turns out, the critical point at $({d}/{c},{a}/{b})$ is a maximum for $C$ (left as an exercise). So $({d}/{c},{a}/{b})$ is a stable equilibrium point, and we do not have to worry about the foxes and hares going extinct or their populations exploding.

One blemish on this wonderful model is that the number of foxes and hares are discrete quantities and we are modeling with continuous variables. Our model has no problem with there being 0.1 fox in the forest for example, while in reality that makes no sense. The approximation is a reasonable one as long as the number of foxes and hares are large, but it does not make much sense for small numbers. One must be careful in interpreting any results from such a model.

An interesting consequence (perhaps counterintuitive) of this model is that adding animals to the forest might lead to extinction, because the variations will get too big, and one of the populations will get close to zero. For example, suppose there are 20 foxes and 50 hares as before, but now we bring in more foxes, bringing their number to 200. If we run the computation, we find the number of hares will plummet to just slightly more than 1 hare in the whole forest. In reality that most likely means the hares die out, and then the foxes will die out as well as they will have nothing to eat.

Showing that a system of equations has a stable solution can be a very difficult problem. When Isaac Newton put forth his laws of planetary motions, he proved that a single planet orbiting a single sun is a stable system. But any solar system with more than 1 planet proved very difficult indeed. In fact, such a system behaves chaotically (see [§8.5](ref:8.5#sec-chaos)), meaning small changes in initial conditions lead to very different long-term outcomes. From numerical experimentation and measurements, we know the Earth will not fly out into empty space or crash into the Sun, for at least some millions of years or so. But we do not know what happens beyond that.

## Exercises

:::exercise {exercise-8-3-001} number=8.3.1 answered=no src=ch-nonlin-systems.tex:1573
PROBLEM:
Take the *{index:damped nonlinear pendulum equation}* $\theta '' + \mu \theta' + ({g}/{L}) \sin \theta = 0$ for some $\mu > 0$ (that is, there is some friction).

a) Suppose $\mu = 1$ and ${g}/{L} = 1$ for simplicity. Find and classify the critical points.
b) Do the same for any $\mu > 0$ and any $g$ and $L$, but such that the damping is small, in particular, $\mu^2 < 4({g}/{L})$.
c) Explain what your findings mean, and if it agrees with what you expect in reality.

:::

:::exercise {exercise-8-3-002} number=8.3.2 answered=no src=ch-nonlin-systems.tex:1591
PROBLEM:
Suppose the hares do not grow exponentially, but logistically. In particular consider
$$ x' = (0.4-0.01y)x - \gamma x^2, \qquad y' = (0.003x-0.3)y . $$
For the following two values of $\gamma$, find and classify all the critical points in the positive quadrant, that is, for $x \geq 0$ and $y \geq 0$. Then sketch the phase diagram. Discuss the implication for the long-term behavior of the population.

a) $\gamma=0.001$,
b) $\gamma=0.01$.

:::

:::exercise {exercise-8-3-003} number=8.3.3 answered=no src=ch-nonlin-systems.tex:1609
PROBLEM:

a) Suppose $x$ and $y$ are positive variables. Show $\frac{y x}{e^{x+y}}$ attains a maximum at $(1,1)$.
b) Suppose $a,b,c,d$ are positive constants, and also suppose $x$ and $y$ are positive variables. Show $\frac{y^a x^d}{e^{cx+by}}$ attains a maximum at $({d}/{c},{a}/{b})$.

:::

:::exercise {exercise-8-3-004} number=8.3.4 answered=no src=ch-nonlin-systems.tex:1621
PROBLEM:
Suppose that for the pendulum equation we take a trajectory giving the spinning-around motion, for example $\omega = \sqrt{\frac{2g}{L} \cos \theta + \frac{2g}{L} + \omega_0^2}$. This is the trajectory where the lowest angular velocity is $\omega_0$. Find an integral expression for how long it takes the pendulum to go all the way around.
:::

:::exercise {exercise-8-3-005} number=8.3.5 answered=no src=ch-nonlin-systems.tex:1628
PROBLEM:
**challenging**
Take the pendulum, suppose the initial position is $\theta = 0$.

a) Find the expression for $\omega$ giving the trajectory with initial condition $(0,\omega_0)$. Hint: Figure out what $C$ should be in terms of $\omega_0$.
b) Find the crucial angular velocity $\omega_1$, such that for any higher initial angular velocity, the pendulum will keep going around its axis, and for any lower initial angular velocity, the pendulum will simply swing back and forth. Hint: When the pendulum doesn’t go over the top, the expression for $\omega$ will be undefined for some $\theta$s.
c) What do you think happens if the initial condition is $(0,\omega_1)$, that is, the initial angle is 0, and the initial angular velocity is exactly $\omega_1$?

:::

:::exercise {exercise-8-3-101} number=8.3.101 answered=yes src=ch-nonlin-systems.tex:1653
PROBLEM:
Take the damped nonlinear pendulum equation $\theta '' + \mu \theta' + ({g}/{L}) \sin \theta = 0$ for some $\mu > 0$ (that is, there is friction). Suppose the friction is large, in particular $\mu^2 > 4 ({g}/{L})$.

a) Find and classify the critical points.
b) Explain what your findings mean, and if it agrees with what you expect in reality.

SOLUTION:
a) Critical points are $\omega=0$, $\theta=k\pi$ for any integer $k$. When $k$ is odd, we have a saddle point. When $k$ is even we get a sink. b) The findings mean the pendulum will simply go to one of the sinks, for example $(0,0)$ and it will not swing back and forth. The friction is too high for it to oscillate, just like an overdamped mass-spring system.
:::

:::exercise {exercise-8-3-102} number=8.3.102 answered=yes src=ch-nonlin-systems.tex:1674
PROBLEM:
Suppose we have the predator-prey system where the foxes are also killed at a constant rate $h$ ($h$ foxes killed per unit time): $x' = (a-by)x,$ $y' = (cx-d)y - h$.

a) Find the critical points and the Jacobian matrices of the system.
b) Put in the constants $a=0.4$, $b=0.01$, $c=0.003$, $d=0.3$, $h=10$. Analyze the critical points. What do you think it says about the forest?

SOLUTION:
a) Solving for the critical points we get $(0,-{h}/{d})$ and $(\frac{bh+ad}{ac},\frac{a}{b})$. The Jacobian matrix at $(0,-{h}/{d})$ is $\left[ \begin{smallmatrix} a+bh/d & 0 \\ -ch/d & -d \end{smallmatrix} \right]$ whose eigenvalues are $a+bh/d$ and $-d$. The eigenvalues are real of opposite signs and we get a saddle. (In the application, however, we are only looking at the positive quadrant so this critical point is irrelevant.) At $(\frac{bh+ad}{ac},\frac{a}{b})$ we get Jacobian matrix $\left[ \begin{smallmatrix} 0 & -\frac{b \left( b h+a d\right) }{a c}\\ \frac{a c}{b} & \frac{b h+a d}{a}-d \end{smallmatrix} \right]$. b) For the specific numbers given, the second critical point is $(\frac{550}{3},40)$ the matrix is $\left[ \begin{smallmatrix} 0 & -11/6 \\ 3/25 & 1/4 \end{smallmatrix} \right]$, which has eigenvalues $\frac{5\pm i \sqrt{327}}{40}$. Therefore there is a spiral source; the solution spirals outwards. The solution eventually hits one of the axes, $x=0$ or $y=0$, so something will die out in the forest.
:::

:::exercise {exercise-8-3-103} number=8.3.103 answered=yes src=ch-nonlin-systems.tex:1719
PROBLEM:
**challenging**
Suppose the foxes never die. That is, we have the system $x' = (a-by)x,$ $y' = cxy$. Find the critical points and notice they are not isolated. What will happen to the population in the forest if it starts at some positive numbers. Hint: Think of the constant of motion.
SOLUTION:
The critical points are on the line $x=0$. In the positive quadrant the $y'$ is always positive and so the fox population always grows. The constant of motion is $C = y^ae^{-cx-by}$. For any $C$, this curve must hit the $y$-axis (why?), so the trajectory will simply approach a point on the $y$ axis somewhere and the number of hares will go to zero.
:::

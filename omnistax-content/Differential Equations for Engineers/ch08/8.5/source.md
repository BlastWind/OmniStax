# 8.5 Chaos {sec:sec-chaos}

:::note [section-notes]
*Note: 1 lecture, §6.5 in [EP](cite:EP), §9.8 in [BD](cite:BD)*
:::

You have surely heard the story about the flap of a butterfly wing in the Amazon causing hurricanes in the North Atlantic. In a prior section, we mentioned that a small change in initial conditions of the planets can lead to very different configurations of the planets in the long term. These are examples of *{index:chaotic systems}*. Mathematical chaos is not really chaos—there is precise order behind the scenes. Everything is still deterministic. However, a chaotic system is extremely sensitive to initial conditions. This also means even small errors induced via numerical approximation create large errors very quickly, so it is almost impossible to numerically approximate for long times. This is a large part of the trouble, as chaotic systems cannot be in general solved analytically.

Take the weather, perhaps the most well-known chaotic system. A small change in the initial conditions (the temperature at every point of the atmosphere for example) produces drastically different predictions in a relatively short time, and so we cannot accurately predict weather. And we do not actually know the exact initial conditions. We measure temperatures at a few points with some error, and then we somehow estimate what is in between. There is no way we can accurately measure the effects of every butterfly wing. Then we solve the equations numerically, introducing new errors. You should not trust weather prediction more than a few days out. But we will see we can still get some information about a chaotic system on a longer time scale. In the context of weather, we can study the climate.

Chaotic behavior was first noticed by Edward Lorenz^[[Edward Norton Lorenz](https://en.wikipedia.org/wiki/Edward_Norton_Lorenz) (1917–2008) was an American mathematician and meteorologist.] in the 1960s when trying to model thermally induced air convection (movement). Lorenz was looking at the relatively simple system:
$$ x' = -10x +10y, \qquad y' = 28x-y-xz, \qquad z'=-\frac{8}{3}z + xy . $$
A small change in the initial conditions yields a very different solution after a reasonably short time.

> IMAGE {img:chaos-pend} src=../../media/chaos-pend.svg
> alt: A diagram of a pendulum attached to the end of another pendulum. The masses at the ends are shown to be of different sizes and the two lengths are different.

A simple example the reader can experiment with, and which displays chaotic behavior, is a double pendulum. The equations for this setup are somewhat complicated, and their derivation is quite {index:tedious}, so we will not bother to write them down. The idea is to put a pendulum on the end of another pendulum. The movement of the bottom mass will appear chaotic. This type of chaotic system is the basis for a number of office novelty desk toys. It is simple to build a version. Take a piece of string. Tie two heavy nuts at different points of the string; one at the end, and one a bit above. Now give the bottom nut a little push. As long as the swings are not too big and the string stays tight, you have a double pendulum system.

## Duffing equation and strange attractors

Let us study the so-called *{index:Duffing equation}*:
$$ x'' + a x' + bx + cx^3 = C \cos(\omega t) . $$
Here $a$, $b$, $c$, $C$, and $\omega$ are constants. Except for the $c x^3$ term, this equation looks like a forced mass-spring system. The $c x^3$ means the spring does not exactly obey Hooke’s law (which no real-world spring actually obeys exactly). When $c$ is not zero, the equation does not have a closed-form solution, so we must resort to numerical solutions, as is usual for nonlinear systems. Not all choices of constants and initial conditions exhibit chaotic behavior. Let us study
$$ x''+0.05 x' + x^3 = 8\cos(t) . $$

The equation is not autonomous, so we cannot draw the vector field in the phase plane. We can still draw trajectories, where $y=x'$ as usual. In [Figure 8.12](ref:nlin-duf-two-traj), we plot trajectories for $t$ going from 0 to 15 for two very close initial conditions $(2,3)$ and $(2,2.9)$, and also the solutions in the $(x,t)$ space. The two trajectories are close at first, but soon diverge significantly. This sensitivity to initial conditions is precisely what we mean by the system behaving chaotically.

> FIGURE {fig:nlin-duf-two-traj} number=8.12 src=../../media/nlin-duf-two-traj-sols.svg
> alt: On the left, there is a plot of two trajectories in the phase space (the space with x on the horizontal axis and x prime on the vertical axis). The two trajectories start on the right of the plot very close to each other and follow a similar path for a while but diverge very quickly and are unrecognizable after a while. The shape they follow is roughly a large loop on the left and then a smaller loop on the right sometimes making a smaller loop in between. On the right is a plot of x over t from 0 to 15 for the two solutions going up and down as they follow the shapes described. They are almost indistinguishable on the left and almost the same until roughly t equals 7, but by the time t is 15 they are visibly different and quite far apart.
> width: 9in
> caption: On left, two trajectories in phase space for $0 \leq t \leq 15$, for the Duffing equation one with initial conditions $(2,3)$ and the other with $(2,2.9)$. On right the two solutions in $(x,t)$-space.

> FIGURE {fig:nlin-duf-long} number=8.13 src=../../media/nlin-duf-long.svg
> alt: A wide graph for t between 0 and 100 where the vertical x axis goes between roughly -3 to 3. The plot shows a function which goes up and down many times roughly at the same overall rhythm and the peaks and troughs are very roughly at the same height, but each peak has a very different shape with distinct wiggles on each.
> width: 9in
> caption: The solution to the given Duffing equation for $t$ from 0 to 100.

Let us consider the long-term behavior. In [Figure 8.13](ref:nlin-duf-long), we plot the solution $x$ with initial conditions $(2,3)$ for a longer period of time. It is hard to see any pattern in the shape of the solution except that it seems to oscillate, but each oscillation appears quite unique. Oscillation is expected due to the forcing term. We mention that to produce the picture accurately, a ridiculously large number of steps^[In fact for reference, 30,000 steps were used with the Runge–Kutta algorithm, see exercises in [§1.7](ref:1.7#numer-section).] were used in the numerical algorithm, as even small errors quickly propagate in a chaotic system.

It is very difficult to analyze chaotic systems, or to find the order behind the madness, but let us try to do something that we did for the standard mass-spring system. One way we analyzed the system is that we figured out what the long-term behavior was (not dependent on initial conditions). From the figure above, it is clear that we will not get a nice exact description of the long-term behavior for this chaotic system, but perhaps we can find some order to what happens on each “oscillation” and what these oscillations have in common.

The concept we explore is that of a *{index:Poincaré section}*^[Named for the French polymath [Jules Henri Poincaré](https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9) (1854–1912).]. Instead of looking at $t$ in a certain interval, we look at where the system is at a certain sequence of points in time. Imagine flashing a strobe at a fixed frequency and drawing the points where the solution is during the flashes. The right strobing frequency depends on the system in question. The correct frequency for the forced Duffing equation (and other similar systems) is the frequency of the forcing term. For the Duffing equation above, find a solution $\bigl(x(t),y(t)\bigr)$, and look at the points
$$ \bigl(x(0),y(0)\bigr), \quad \bigl(x(2\pi),y(2\pi)\bigr), \quad \bigl(x(4\pi),y(4\pi)\bigr), \quad \bigl(x(6\pi),y(6\pi)\bigr), \quad \ldots $$
As we are really not interested in the transient part of the solution, that is, the part of the solution that depends on the initial condition, we skip some number of steps in the beginning. For example, we might skip the first 100 such steps and start plotting points at $t = 100(2\pi)$, that is,
$$ \bigl(x(200\pi),y(200\pi)\bigr), \quad \bigl(x(202\pi),y(202\pi)\bigr), \quad \bigl(x(204\pi),y(204\pi)\bigr), \quad \ldots $$
The plot of these points is the Poincaré section. After plotting enough points, a curious pattern emerges in [Figure 8.14](ref:nlin-strange) (the left-hand picture), a so-called *{index:strange attractor}*.

> FIGURE {fig:nlin-strange} number=8.14 src=../../media/nlin-strange-strange2.svg
> alt: Two plots of thousands of points of the strange attractor. Each one is slightly differently deformed as the one on the right is phase shifted. The points seem to be settling on thin bands that are bent and wrapped around each other and distorted as if looking through a funhouse mirror.
> width: 9in
> caption: Strange attractor. The left plot is with no phase shift, the right plot has phase shift ${\pi}/{4}$.

Given a sequence of points, an *{index:attractor}* is a set towards which the points in the sequence eventually get closer and closer, that is, they are attracted. The Poincaré section is not really the attractor itself, but as the points are very close to it, we see its shape. The strange attractor is a very complicated set. It has fractal structure, that is, if you zoom in as far as you want, you keep seeing the same complicated structure.

The initial condition makes no difference. If we start with a different initial condition, the points eventually gravitate towards the attractor, and so as long as we throw away the first few points, we get the same picture. Similarly, small errors in the numerical approximations do not matter here.

An amazing thing is that a chaotic system such as the Duffing equation is not random at all. There is a very complicated order to it, and the strange attractor says something about this order. We cannot quite say what state the system will be in eventually, but given the fixed strobing frequency we narrow it down to the points on the attractor.

If we use a phase shift, for example ${\pi}/{4}$, and look at the times
$$ {\pi}/{4}, \quad 2\pi+{\pi}/{4}, \quad 4\pi+{\pi}/{4}, \quad 6\pi+{\pi}/{4}, \quad \ldots $$
we obtain a slightly different attractor. The picture is the right-hand side of [Figure 8.14](ref:nlin-strange). It is as if we had rotated, moved, and slightly distorted the original. For each phase shift you can find the set of points towards which the system periodically keeps coming back to.

Study the pictures and notice especially the scales—where are these attractors located in the phase plane. Notice the regions where the strange attractor lives and compare it to the plot of the trajectories in [Figure 8.12](ref:nlin-duf-two-traj).

Let us compare this section to the discussion in [§2.6](ref:2.6#forcedo-section) on forced oscillations. Consider
$$ x''+2p x' + \omega_0^2 x = \frac{F_0}{m} \cos (\omega t) . $$
This is like the Duffing equation, but with no $x^3$ term. The steady periodic solution is of the form
$$ x = C \cos (\omega t + \gamma) . $$
Strobing using the frequency $\omega$, we obtain a single point in the phase space. The attractor in this setting is a single point—an expected result as the system is not chaotic. It was the opposite of chaotic: Any difference induced by the initial conditions dies away very quickly, and we settle into always the same steady periodic motion.

## The Lorenz system

In two dimensions to find chaotic behavior, we must study forced, or non-autonomous, systems such as the Duffing equation. The Poincaré–Bendixson Theorem says that a solution to an autonomous two-dimensional system that exists for all time in the future either goes towards infinity, is periodic, approaches a loop, or perhaps goes towards a critical point. Hardly the chaotic behavior we are looking for.

In three dimensions, even autonomous systems can be chaotic. Let us very briefly return to the {index:Lorenz system}
$$ x' = -10x +10y, \qquad y' = 28x-y-xz, \qquad z'=-\frac{8}{3}z + xy . $$
The Lorenz system is an autonomous system in three dimensions exhibiting chaotic behavior. See [Figure 8.15](ref:nlin-lorenz) for a sample trajectory, which is now a curve in three-dimensional space.

> FIGURE {fig:nlin-lorenz} number=8.15 src=../../media/nlin-lorenz.svg
> alt: A trajectory in a 3 dimensional xyz space. It is roughly two loops meeting at an angle with the trajectory going around each loop one or more times then switching seemingly randomly to the other loop and then back again after one or more loops, each one of different radius. Some people describe this picture as resembling a butterfly.
> width: 4.5in
> caption: A trajectory in the Lorenz system.

The solutions tend to an *attractor* in space, the so-called *{index:Lorenz attractor}*. In this case, no strobing is necessary, the solution will tend towards the attractor set. Again we cannot quite see the attractor itself, but if we try to follow a solution for long enough, as in the figure, we get a pretty good picture of what the attractor looks like. The Lorenz attractor is also a strange attractor and has a complicated fractal structure. And, just as for the Duffing equation, what we want to draw is not the whole trajectory, but start drawing the trajectory after a while, once it is close to the attractor.

The path of the trajectory is not simply a repeating figure-eight. The trajectory spins some seemingly random number of times on the left, then spins a number of times on the right, and so on. As this system arose in weather prediction, one can perhaps imagine a few days of warm weather and then a few days of cold weather, where it is not easy to predict when the weather will change, just as it is not really easy to predict far in advance when the solution will jump onto the other side. See [Figure 8.16](ref:nlin-lorenz-graphx) for a plot of the $x$ component of the solution drawn above. A negative $x$ corresponds to the left “loop” and a positive $x$ corresponds to the right “loop”. On the other hand, while we cannot predict the weather, we *can* say something about the climate—the weather will be somewhere near the attractor.

Most of the mathematics we studied in this book is quite classical and well understood. On the other hand, chaos, including the Lorenz system, continues to be the subject of current research. Furthermore, chaos has found applications not just in the sciences, but also in art.

> FIGURE {fig:nlin-lorenz-graphx} number=8.16 src=../../media/nlin-lorenz-graphx.svg
> alt: A graph of a function in the tx-plane for t from 0 to 15 and x between roughly minus 18 to 18. The function starts slightly above the t-axis and makes a sharp peak up above the t-axis, then a sharp peak down, then a sharp peak up, then 6 sharp peaks down with the peaks starting small and growing, then two sharp peaks up then one sharp peak down, then two sharp peaks up, then sharp peak down, then one sharp peak up, then two sharp peaks down, then two sharp peaks up. The peaks are different sizes and slightly different shapes, there does not seem to be much of a pattern that one can see.
> width: 4.5in
> caption: Graph of the $x(t)$ component of the solution.

## Exercises

:::exercise {exercise-8-5-001} number=8.5.1 answered=no src=ch-nonlin-systems.tex:2558
PROBLEM:
For the non-chaotic equation $x''+2p x' + \omega_0^2 x = \frac{F_0}{m} \cos (\omega t)$, suppose we strobe with frequency $\omega$ as we mentioned above. Use the known steady periodic solution to find precisely the point which is the attractor for the Poincaré section.
:::

:::exercise {exercise-8-5-002} number=8.5.2 answered=no src=ch-nonlin-systems.tex:2566
PROBLEM:
**project**
A simple fractal attractor can be drawn via the following chaos game. Draw the three vertices of a triangle and label them, say $p_1$, $p_2$ and $p_3$. Draw some random point $p$ (it does not have to be one of the three points above). Roll a die to pick one of the $p_1$, $p_2$, or $p_3$ randomly (for example 1 and 4 mean $p_1$, 2 and 5 mean $p_2$, and 3 and 6 mean $p_3$). Suppose we picked $p_2$. Let $p_{\text{new}}$ be the point exactly halfway between $p$ and $p_2$. Draw this point and let $p$ now refer to this new point $p_{\text{new}}$. Rinse, repeat. Try to be precise and draw as many iterations as possible. Your points will be attracted to the so-called *{index:Sierpinski triangle}*. A computer was used to run the game for 10,000 iterations to obtain the picture in [Figure 8.17](ref:nlin-sierpinski).
:::

> FIGURE {fig:nlin-sierpinski} number=8.17 src=../../media/nlin-sierpinski.svg
> alt: A diagram of the so-called Sierpinski triangle composed of dots in the xy-plane. The vertices of the triangle are at (0,0), (1,0), and (0.5,0.8). There is a smaller similar upside down empty triangle with the middle of the sides of the big triangle as vertices. The remaining 3 upright triangles are not filled, but each has an empty triangle like that in the middle and the three upright triangles repeat the pattern forever. The entire triangle then appears as if it is made up of infinitely many upside down empty triangles.
> width: 4.5in
> caption: 10,000 iterations of the chaos game producing the Sierpinski triangle.

:::exercise {exercise-8-5-003} number=8.5.3 answered=no src=ch-nonlin-systems.tex:2599
PROBLEM:
**project**
Construct the double pendulum described in the text with a string and two nuts (or heavy beads). Play around with the position of the middle nut, and perhaps use different weight nuts. Describe what you find.
:::

:::exercise {exercise-8-5-004} number=8.5.4 answered=no src=ch-nonlin-systems.tex:2605
PROBLEM:
**computer project**
Use computer software (such as Matlab, Octave, or perhaps even a spreadsheet) to plot the solution of the given forced Duffing equation with Euler’s method. Plot the solution for $t$ from 0 to 100 with several different (small) step sizes. Discuss.
:::

:::exercise {exercise-8-5-101} number=8.5.101 answered=yes src=ch-nonlin-systems.tex:2616
PROBLEM:
Find critical points of the Lorenz system and the associated linearizations.
SOLUTION:
Critical points: $(0,0,0)$, $(6\sqrt{2},6 \sqrt{2}, 27)$, $(-6 \sqrt{2},-6 \sqrt{2}, 27)$. Linearization at $(0,0,0)$ using $u=x$, $v=y$, $w=z$ is $u' = -10u+10v$, $v'=28u-v$, $w'=-({8}/{3})w$. Linearization at $(6 \sqrt{2},6\sqrt{2},27)$ using $u=x-6\sqrt{2}$, $v=y-6\sqrt{2}$, $w=z-27$ is $u' = -10u+10v$, $v'=u-v-6\sqrt{2}w$, $w'=6\sqrt{2}u+6\sqrt{2}v-({8}/{3})w$. Linearization at $(-6 \sqrt{2},-6\sqrt{2},27)$ using $u=x+6\sqrt{2}$, $v=y+6\sqrt{2}$, $w=z-27$ is $u' = -10u+10v$, $v'=u-v+6\sqrt{2}w$, $w'=-6\sqrt{2}u-6\sqrt{2}v-({8}/{3})w$.
:::

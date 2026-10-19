# 2.6 Forced oscillations and resonance {sec:forcedo-section}

:::note [section-notes]
*Note: 2 lectures, §3.6 in [EP](cite:EP), §3.8 in [BD](cite:BD)*
:::

> IMAGE {img:massfigforce} src=../../media/massfigforce.svg
> alt: A diagram showing a mass labeled m, attached on the left to a spring labeled as k, attached to a wall on the left. An arrow indicating force to the right on the mass is labeled F of t. An arrow below the mass indicating displacement points to the right and is labeled x. The 'floor' of the diagram is labeled as 'damping c'.

Let us return back to the example of a mass on a spring. We examine the case of forced oscillations, which we did not yet handle. That is, we consider the equation
$$ mx'' + cx' + kx = F(t) , $$
for some nonzero $F(t)$. The setup is again: $x$ is position, $m$ is mass, $c$ is friction, $k$ is the spring constant, and $F(t)$ is an external force acting on the mass.

We are interested in periodic forcing, such as noncentered rotating parts, or perhaps loud sounds, or other sources of periodic force. Using Fourier series, see [chapter 4](ref:4#FS-chapter), we note that we can understand all periodic functions by considering $F(t) = F_0 \cos (\omega t)$ (or sine instead of cosine, the calculations are essentially the same), so we focus on this simple case.

## Undamped forced motion and resonance

First, let us consider undamped ($c=0$) motion. We have the equation
$$ mx'' + kx = F_0 \cos (\omega t) . $$
This equation has the complementary solution (solution to the associated homogeneous equation)
$$ x_c = C_1 \cos (\omega_0 t) + C_2 \sin (\omega_0 t) , $$
where $\omega_0 = \sqrt{{k}/{m}}$ is the *{index:natural frequency}* (angular). It is the frequency at which the system “wants to oscillate” without external interference.

Suppose that $\omega_0 \neq \omega$. We solve using the method of undetermined coefficients. We try the solution $x_p = A \cos (\omega t)$ and solve for $A$. We do not need a sine in our trial solution as after plugging in we only have cosines. If you include a sine, it is fine; you will find that its coefficient is zero (I could not find a second rhyme). We plug into the equation and solve for $A$ to find
$$ x_p = \frac{F_0}{m(\omega_0^2 - \omega^2)} \cos (\omega t) . $$
We leave it as an exercise to do the algebra required.

The general solution is
$$ \boxed{~~ x = C_1 \cos (\omega_0 t) + C_2 \sin (\omega_0 t) + \frac{F_0}{m(\omega_0^2 - \omega^2)} \cos (\omega t) . ~~} $$
Written another way
$$ x = C \cos (\omega_0 t - \gamma) + \frac{F_0}{m(\omega_0^2 - \omega^2)} \cos (\omega t) . $$
The solution is a superposition of two (shifted) cosine waves at different frequencies.

:::example {ex:example-2-6-1} Example 2.6.1
Take
$$ 0.5 x'' + 8 x = 10 \cos (\pi t), \qquad x(0)=0, \qquad x'(0)=0 . $$

Let us compute. First we read off the parameters: $\omega = \pi$, $\omega_0 = \sqrt{{8}/{0.5}} = 4$, $F_0 = 10$, $m=0.5$. The general solution is
$$ x = C_1 \cos (4 t) + C_2 \sin (4 t) + \frac{20}{16 - \pi^2} \cos (\pi t) . $$

Solve for $C_1$ and $C_2$ using the initial conditions: $C_1 = \frac{-20}{16 - \pi^2}$ and $C_2 = 0$. Hence
$$ x = \frac{20}{16 - \pi^2} \bigl( \cos (\pi t)- \cos (4 t) \bigr) . $$

> FIGURE {fig:3-6-beatingfig} number=2.5 src=../../media/3-6-beating.svg
> alt: A plot of a quickly oscillating curve whose amplitude starts at zero, then grows, then goes to zero, then grows again, etc.
> width: 4.5in
> caption: Graph of $\frac{20}{16 - \pi^2} \bigl( \cos (\pi t)- \cos (4 t) \bigr)$.

Do notice the “beating” behavior{index-entry:beating} in [Figure 2.5](ref:3-6-beatingfig). To analyze it, we use the trigonometric identity
$$ 2\sin \left( \frac{A-B}{2} \right) \sin \left( \frac{A+B}{2} \right) = \cos B -\cos A $$
to get
$$ x = \frac{20}{16 - \pi^2} \left( 2 \sin \left(\frac{4-\pi}{2} t \right) \sin \left( \frac{4+\pi}{2} t \right) \right) . $$
The function $x$ is a high-frequency wave modulated by a low-frequency wave.
:::

Now suppose $\omega_0 = \omega$. We notice that $\cos (\omega t)$ solves the associated homogeneous equation. Hence, we cannot try the solution $A \cos (\omega t)$ with the method of undetermined coefficients. Therefore, we try $x_p = A t \cos (\omega t) + B t \sin (\omega t)$. This time we do need the sine term, since the second derivative of $t \cos (\omega t)$ contains sines. We write the equation
$$ x'' + \omega^2 x = \frac{F_0}{m} \cos ( \omega t) . $$
Plugging $x_p$ into the left-hand side, we get
$$ 2 B \omega \cos (\omega t) - 2 A \omega \sin (\omega t) = \frac{F_0}{m} \cos (\omega t) . $$
Hence $A = 0$ and $B = \frac{F_0}{2m\omega}$. Our particular solution is $\frac{F_0}{2m\omega} \, t \sin (\omega t)$ and the general solution is
$$ x = C_1 \cos (\omega t) + C_2 \sin (\omega t) + \frac{F_0}{2m\omega} \, t \sin (\omega t) . $$

The important term is the last one (the particular solution we found). This term grows without bound as $t \to \infty$. In fact it oscillates between $\frac{F_0 t}{2m\omega}$ and $\frac{- F_0 t}{2m\omega}$. The first two terms only oscillate between $\pm\sqrt{C_1^2 + C_2^2}$, which becomes smaller and smaller in proportion to the oscillations of the last term as $t$ gets larger. In [Figure 2.6](ref:3-6-resonancefig), we see the graph with $C_1=C_2=0$, $F_0 = 2$, $m=1$, $\omega = \pi$.

> FIGURE {fig:3-6-resonancefig} number=2.6 src=../../media/3-6-resonance.svg
> alt: A quickly oscillating curve whose amplitude starts at zero but then grows linearly as we move to the right in the plot.
> width: 4.5in
> caption: Graph of $\frac{1}{\pi} t \sin (\pi t)$.

By forcing the system at just the right frequency, we produce very wild oscillations. This kind of behavior is called *{index:resonance}* or perhaps *{index:pure resonance}*. Sometimes resonance is desired. For example, remember when as a kid you could start swinging by just moving back and forth on the swing seat in the “correct frequency”? You were trying to achieve resonance. The force of each one of your moves was small, but after a while it produced large swings.

On the other hand, resonance can be destructive. In an earthquake, some buildings collapse while others may be relatively undamaged. This is due to different buildings having different resonance frequencies. So figuring out the resonance frequency can be very important.

A common (but wrong) example of the destructive force of resonance is the Tacoma Narrows bridge failure. It turns out there was a different phenomenon at play^[K. Billah and R. Scanlan, *Resonance, Tacoma Narrows Bridge Failure, and Undergraduate Physics Textbooks*, American Journal of Physics, 59(2), 1991, 118–124, <http://www.ketchum.org/billah/Billah-Scanlan.pdf>].

## Damped forced motion and practical resonance

In real life, things are not as simple as they were above. There is, of course, some damping. Our equation becomes
$$ mx'' + cx' + kx = F_0 \cos (\omega t) , $$ {eq:3-6-deq} number=2.8
for some $c > 0$. We solved the homogeneous problem before. We let
$$ p = \frac{c}{2m}, \qquad \omega_0 = \sqrt{\frac{k}{m}} . $$
We replace equation [(2.8)](ref:3-6-deq) with
$$ x'' + 2px' + \omega_0^2x = \frac{F_0}{m} \cos (\omega t) . $$
The roots of the characteristic equation of the associated homogeneous problem are $r_1,r_2 = -p \pm \sqrt{p^2 - \omega_0^2}$. The form of the general solution of the associated homogeneous equation depends on the sign of $p^2 - \omega_0^2$, or equivalently on the sign of $c^2 - 4km$, as before:
$$ x_c = \begin{cases} C_1 e^{r_1 t} + C_2 e^{r_2 t} & \text{if } \; c^2 > 4km , \\ C_1 e^{-p t} + C_2 t e^{-p t} & \text{if } \; c^2 = 4km , \\ e^{-p t} \bigl( C_1 \cos (\omega_1 t) + C_2 \sin (\omega_1 t) \bigr) & \text{if } \; c^2 < 4km , \end{cases} $$
where $\omega_1 = \sqrt{\omega_0^2 - p^2}$. In any case, we see that $x_c(t) \to 0$ as $t \to \infty$.

Let us find a particular solution. There can be no conflicts when trying to solve for the undetermined coefficients by trying $x_p = A \cos (\omega t) + B \sin (\omega t)$. We plug in and solve for $A$ and $B$. We get (the {index:tedious} details are left to reader)
$$ \bigl((\omega_0^2 - \omega^2)B - 2\omega p A\bigr) \sin (\omega t) + \bigl((\omega_0^2 - \omega^2)A + 2\omega p B\bigr) \cos (\omega t) = \frac{F_0}{m} \cos (\omega t) . $$

We solve for $A$ and $B$ as usual:
$$ A=\frac{(\omega_0^2-\omega^2) F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} , \qquad B=\frac{2 \omega p F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} . $$
Thus our particular solution is
$$ x_p = \frac{(\omega_0^2-\omega^2) F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} \cos (\omega t) + \frac{2 \omega p F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} \sin (\omega t) . $$
The amplitude $C = \sqrt{A^2+B^2}$ of this solution is
$$ C = \frac{F_0}{m \sqrt{{(2\omega p)}^2+{(\omega_0^2-\omega^2)}^2}} . $$
Let us write the solution in the alternative form $x_p = C \cos(\omega t - \gamma)$ for amplitude $C$ and phase shift $\gamma$ where (if $\omega \neq \omega_0$)
$$ \tan \gamma = \frac{B}{A} = \frac{2\omega p}{\omega_0^2-\omega^2} . $$
Hence,
$$ \boxed{~~ x_p = \frac{F_0}{m \sqrt{{(2\omega p)}^2+{(\omega_0^2-\omega^2)}^2}} \cos ( \omega t - \gamma ) . ~~} $$
If $\omega = \omega_0$, then $A=0$, $B = C = \frac{F_0}{2m\omega p}$, and $\gamma = {\pi}/{2}$.

For reasons we will explain in a moment, we call $x_c$ the *{index:transient solution}* and denote it by $x_{tr}$. We call $x_p$ the *{index:steady periodic solution}* and denote it by $x_{sp}$. The general solution is
$$ x = x_c + x_p = x_{tr} + x_{sp} . $$

The transient solution $x_{tr} = x_c$ goes to zero as $t \to \infty$, as all the terms involve an exponential with a negative exponent. So for large $t$, the effect of $x_{tr}$ is negligible and we see essentially only $x_{sp}$. Hence the name *transient*. Notice that $x_{sp}$ involves no arbitrary constants, and the initial conditions only affect $x_{tr}$. Thus, the effect of the initial conditions is negligible after some period of time. We might as well focus on the steady periodic solution and ignore the transient solution. See [Figure 2.7](ref:3-6-transbehfig) for a graph given several different initial conditions.

> FIGURE {fig:3-6-transbehfig} number=2.7 src=../../media/3-6-transbeh.svg
> alt: A plot of several solutions that start at different points on the left-hand side. As t goes from 0 to 20, they all approach and are almost indistinguishable from an oscillating sinusoidal curve.
> width: 4.5in
> caption: Solutions with different initial conditions for parameters $k=1$, $m=1$, $F_0 = 1$, $c=0.7$, and $\omega=1.1$.

How fast $x_{tr}$ goes to zero depends on $p$ (and hence $c$). The bigger $p$ is (the bigger $c$ is), the “faster” $x_{tr}$ becomes negligible. Conversely, the smaller the damping, the longer the “transient region.” This is consistent with the observation that when $c=0$, the initial conditions affect the behavior for all time (i.e. an infinite “transient region”).

Let us describe what we mean by resonance when damping is present. There were no conflicts solving with undetermined coefficients, so no term in $x_{sp}$ goes to infinity. Instead, we consider the amplitude $C$ of the steady periodic solution $x_{sp}$, that is, the furthest the mass goes either way from the rest position. We plot $C$ as a function of $\omega$ (fix all other parameters) and we find its maximum. The $\omega$ that gives this maximum is the *{index:practical resonance frequency}*. The maximal amplitude $C(\omega)$ is the *{index:practical resonance amplitude}*. Thus when damping is present we talk of *{index:practical resonance}* rather than pure resonance. [Figure 2.8](ref:3-6-pracresfig) shows a sample plot for three different values of $c$. Notice that the practical resonance amplitude grows as damping gets smaller, and practical resonance can disappear altogether when damping is large.

> FIGURE {fig:3-6-pracresfig} number=2.8 src=../../media/3-6-pracres.svg
> alt: A plot of three versions of a function C of omega for omega between 0 and 3. The line on top starts at 1, rises up to a peak of a little more than 2.5 just before omega equals 1, then it decays down towards zero. The middle line does roughly the same thing but reaches a smaller peak a little earlier. The bottom line simply goes downwards reaching no peak. They all have roughly the same small value at omega equals 3.
> width: 4.5in
> caption: Graph of $C(\omega)$ showing practical resonance with parameters $k=1$, $m=1$, $F_0 = 1$. The top line is with $c=0.4$, the middle line with $c=0.8$, and the bottom line with $c=1.6$.

To find the maximum of $C(\omega)$, we find the derivative $C'(\omega)$:
$$ C'(\omega) = \frac{- 2\omega( 2p^2+\omega^2-\omega_0^2)F_0} {m {\bigl({(2\omega p)}^2+{(\omega_0^2-\omega^2)}^2\bigr)}^{3/2}} . $$
This is zero either when $\omega = 0$ or when $2p^2+\omega^2-\omega_0^2 = 0$. In other words, $C'(\omega) = 0$ when
$$ \boxed{~~ \omega = \sqrt{\omega_0^2 - 2p^2} \quad \text{or} \quad \omega = 0 . ~~} $$
If $\omega_0^2 - 2p^2$ is positive, then $\sqrt{\omega_0^2 - 2p^2}$ is the practical resonance frequency (the point where $C(\omega)$ is maximal). This conclusion follows by the first derivative test, for example, as then $C'(\omega) > 0$ for small $\omega$ in this case. If on the other hand $\omega_0^2 - 2p^2$ is not positive, then $C(\omega)$ achieves its maximum at $\omega=0$, and there is no practical resonance since we assume $\omega > 0$ in our system. In this case, the amplitude gets larger as the forcing frequency gets smaller.

If practical resonance occurs, the frequency is smaller than $\omega_0$. As the damping $c$ (and hence $p$) becomes smaller, the practical resonance frequency goes to $\omega_0$. So when damping is very small, $\omega_0$ is a good estimate of the practical resonance frequency. This behavior agrees with the observation that when $c=0$, then $\omega_0$ is the resonance frequency.

Another interesting observation to make is that when $\omega \to \infty$, then $C \to 0$. This means that if the forcing frequency gets too high it does not manage to get the mass moving in the mass-spring system. This is quite reasonable intuitively. If we wiggle back and forth really fast while sitting on a swing, we will not get it moving at all, no matter how forceful. Fast vibrations just cancel each other out before the mass has any chance of responding by moving one way or the other.

The behavior is more complicated if the forcing function is not an exact cosine wave, but for example a {index:square wave}. A general periodic function will be the sum (superposition) of many cosine waves of different frequencies. The reader is encouraged to come back to this section once we have learned about the Fourier series.

## Exercises

:::exercise {exercise-2-6-001} number=2.6.1 answered=no src=ch-higher-order-ode.tex:3135
PROBLEM:
Derive a formula for $x_{sp}$ if the equation is $m x'' + c x' + kx = F_0 \sin (\omega t)$. Assume $c > 0$.
:::

:::exercise {exercise-2-6-002} number=2.6.2 answered=no src=ch-higher-order-ode.tex:3140
PROBLEM:
Derive a formula for $x_{sp}$ if the equation is $m x'' + c x' + kx = F_0 \cos (\omega t) + F_1 \cos (3\omega t)$. Assume $c > 0$.
:::

:::exercise {exercise-2-6-003} number=2.6.3 answered=no src=ch-higher-order-ode.tex:3146
PROBLEM:
Take $m x'' + c x' + kx = F_0 \cos (\omega t)$. Fix $m > 0$, $k > 0$, and $F_0 > 0$. Consider the function $C(\omega)$. For what values of $c$ (solve in terms of $m$, $k$, and $F_0$) will there be no practical resonance (that is, for what values of $c$ is there no maximum of $C(\omega)$ for $\omega > 0$)?
:::

:::exercise {exercise-2-6-004} number=2.6.4 answered=no src=ch-higher-order-ode.tex:3154
PROBLEM:
Take $m x'' + c x' + kx = F_0 \cos (\omega t)$. Fix $c > 0$, $k > 0$, and $F_0 > 0$. Consider the function $C(\omega)$. For what values of $m$ (solve in terms of $c$, $k$, and $F_0$) will there be no practical resonance (that is, for what values of $m$ is there no maximum of $C(\omega)$ for $\omega > 0$)?
:::

:::exercise {exercise-2-6-005} number=2.6.5 answered=no src=ch-higher-order-ode.tex:3162
PROBLEM:
A water tower in an earthquake acts as a mass-spring system. Assume that the container on top is full and the water does not move around. The container then acts as the mass and the support acts as the spring, where the induced vibrations are horizontal. The container with water has a mass of $m=10,000\,\mathrm{kg}$. It takes a force of 1000 newtons to displace the container 1 meter. For simplicity, assume no friction. When the earthquake hits, the water tower is at rest (it is not moving). The earthquake induces an external force $F(t) = m A \omega^2 \cos (\omega t)$ newtons.

a) What is the natural frequency of the water tower?
b) If $\omega$ is not the natural frequency, find a formula for the maximal amplitude of the resulting oscillations of the water container (the maximal deviation from the rest position). The motion will be a high-frequency wave modulated by a low-frequency wave, so simply find the constant in front of the sines.
c) Suppose $A = 1$ and an earthquake with frequency 0.5 cycles per second comes. What is the amplitude of the oscillations? Suppose that if the water tower moves more than 1.5 meters from the rest position, the tower collapses. Will the tower collapse?

:::

:::exercise {exercise-2-6-101} number=2.6.101 answered=yes src=ch-higher-order-ode.tex:3194
PROBLEM:
A mass of 4 kg on a spring with $k=4\,\mathrm{N}/\mathrm{m}$ and a damping constant $c=1\,\mathrm{Ns}/\mathrm{m}$. Suppose that $F_0 = 2\,\mathrm{N}$. Using the forcing function $F_0 \cos (\omega t)$, find the $\omega$ that causes practical resonance and find the practical resonance amplitude.
SOLUTION:
$\omega = \frac{\sqrt{31}}{4\sqrt{2}} \approx 0.984\,\mathrm{rad}/\mathrm{s}$ $C(\omega) = \frac{16}{3\sqrt{7}} \approx 2.016\,\mathrm{m}$
:::

:::exercise {exercise-2-6-102} number=2.6.102 answered=yes src=ch-higher-order-ode.tex:3207
PROBLEM:
Derive a formula for $x_{sp}$ for $mx''+cx'+kx = F_0 \cos(\omega t) + A$, where $A$ is some constant. Assume $c > 0$.
SOLUTION:
$x_{sp} = \frac{(\omega_0^2-\omega^2) F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} \cos (\omega t) + \frac{2 \omega p F_0} {m{(2\omega p)}^2+m{(\omega_0^2-\omega^2)}^2} \sin (\omega t) + \frac{A}{k}$, where $p = \frac{c}{2m}$ and $\omega_0 = \sqrt{\frac{k}{m}}$.
:::

:::exercise {exercise-2-6-103} number=2.6.103 answered=yes src=ch-higher-order-ode.tex:3223
PROBLEM:
Suppose there is no damping in a mass and spring system with $m = 5\,\mathrm{kg}$, $k= 20\,\mathrm{N}/\mathrm{m}$, and $F_0 = 5\,\mathrm{N}$. Suppose $\omega$ is chosen to be precisely the resonance frequency.

a) Find $\omega$.
b) Find the amplitude of the oscillations at time $t=100$ seconds, given the system is at rest at $t=0$.

SOLUTION:
a) $\omega = 2\,\mathrm{rad}/\mathrm{s}$ b) $25\,\mathrm{m}$
:::

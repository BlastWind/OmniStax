# 2.4 Mechanical vibrations {sec:sec-mv}

:::note [section-notes]
*Note: 2 lectures, §3.4 in [EP](cite:EP), §3.7 in [BD](cite:BD)*
:::

Let us look at some applications of linear second-order constant-coefficient equations.

## Some examples

> IMAGE {img:massfigforce} src=../../media/massfigforce.svg
> alt: A diagram showing a mass labeled m, attached on the left to a spring labeled as k, attached to a wall on the left. An arrow indicating force to the right on the mass is labeled F of t. An arrow below the mass indicating displacement points to the right and is labeled x. The 'floor' of the diagram is labeled as 'damping c'.

Our first example is a mass on a spring. Suppose we have a mass $m > 0$ (in kilograms) connected by a spring with spring constant $k > 0$ (in newtons per meter) to a fixed wall. There may be some external force $F(t)$ (in newtons) acting on the mass. Here, $t$ is time in seconds. Finally, there is some friction measured by $c \geq 0$ (in newton-seconds per meter) as the mass slides along the floor (or perhaps a damper is connected).

Let $x$ be the displacement of the mass in meters ($x=0$ is the rest position), with $x$ growing to the right (away from the wall). The force exerted by the spring is proportional to the compression of the spring by {index:Hooke’s law}. Therefore, it is $kx$ in the negative direction. Similarly, the force exerted by friction is proportional to the velocity of the mass. {index:Newton’s second law} says that force equals mass times acceleration. Hence, $mx'' = F(t)-cx'-kx$ or
$$ mx'' + cx' + kx = F(t) . $$
The equation is a linear second-order constant-coefficient ODE. We say the motion is

(i) *forced{index-entry:forced motion}* if $F \not\equiv 0$ (if $F$ is not identically zero),
(ii) *unforced{index-entry:unforced motion}* or *free{index-entry:free motion}* if $F \equiv 0$ (if $F$ is identically zero),
(iii) *damped{index-entry:damped motion}* if $c > 0$, and
(iv) *undamped{index-entry:undamped motion}* if $c = 0$.

This equation appears in lots of applications even if it does not seem like it at first. Many real-world scenarios can be simplified to a mass on a spring. For example, a bungee jump is essentially a mass and spring system (you are the mass). It would be good if someone did the math before you jump off the bridge, right? Let us give two other examples.

> IMAGE {img:mv-rlc} src=../../media/mv-rlc.svg
> alt: A diagram of a circuit. Following the diagram counterclockwise, we start on the left with an electric source labeled E, then a resistor on the bottom labeled R, then an inductor on the right labeled L, then a capacitor on the top labeled C, then we connect back to the electric source.

Here is an example for electrical engineers. Consider the pictured {index:RLC circuit}. There is a resistor with a resistance of $R$ ohms, an inductor with an inductance of $L$ henries, and a capacitor with a capacitance of $C$ farads. There is also an electric source (such as a battery) with voltage of $E(t)$ volts at time $t$ (measured in seconds). Let $Q(t)$ be the charge (in coulombs) on the capacitor and $I(t)$ be the current (in amperes) in the circuit. The relation between the two is $Q' = I$. By elementary principles, we find $L I' + RI + {Q}/{C} = E$. We differentiate to get
$$ L I''(t) + R I'(t) + \frac{1}{C} I(t) = E'(t) . $$
This is a nonhomogeneous second-order constant-coefficient linear equation. As $L, R$, and $C$ are all positive, this circuit behaves just like the mass and spring system. Position of the mass is replaced by current. Mass is replaced by inductance, damping is replaced by resistance, and the spring constant is replaced by one over the capacitance. The change in voltage becomes the forcing function—for constant voltage this is an unforced motion.

> IMAGE {img:mv-pend-deriv} src=../../media/mv-pend-deriv.svg
> alt: A diagram of a pendulum. A pendulum is shown fixed at a point at the top moving along a circular arc. The bottom of the pendulum is labeled m, and the angle the pendulum makes with a vertical line is labeled theta. The length of the pendulum is labeled L. There is a force arrow on m along the circular arc away from the center labeled m times L times second derivative of theta, a force arrow in the opposite direction (towards the center) labeled m times g times sin of theta, and an arrow directly downwards from the mass labeled m times g. The latter two arrows form a right triangle with the downward arrow forming the hypotenuse.

Our next example behaves like a mass and spring system only approximately. Suppose a mass of $m$ kilograms hangs on a pendulum of length $L$ meters. We seek an equation for the angle $\theta(t)$ (in radians). Let $g$ be the acceleration due to gravity in meters per second squared. Let us derive an equation for $\theta$ using {index:Newton’s second law}: Force equals mass times acceleration. The acceleration is $L \theta''$ and mass is $m$. So $mL\theta''$ has to be equal to the tangential component of the force given by the gravity, which is $m g \sin \theta$ in the opposite direction. So $mL\theta'' = -mg \sin \theta$. The $m$ curiously cancels from the equation and we end up with the equation
$$ \theta'' + \frac{g}{L} \sin \theta = 0 . $$

Now we make our approximation. For small $\theta$ we have that approximately $\sin \theta \approx \theta$. This can be seen by looking at the graph. In [Figure 2.1](ref:mv-sinthetafig), we can see that for approximately $-0.5 < \theta < 0.5$ (in radians) the graphs of $\sin \theta$ and $\theta$ are almost the same.

> FIGURE {fig:mv-sinthetafig} number=2.1 src=../../media/mv-sintheta.svg
> alt: A plot of sin of theta and also of just theta, for theta between minus 1 and 1. The plot of theta is simply a straight line from (minus 1,minus 1) to (1,1), while the plot of sin of theta is almost the same but it starts a little bit above the straight line on the left and ends a little bit below on the right.
> width: 4.5in
> caption: The graphs of $\sin \theta$ and $\theta$ (in radians).

Therefore, when the swings are small, $\theta$ is small, and we can model the behavior by the simpler linear equation
$$ \theta'' + \frac{g}{L} \theta = 0 . $$
The errors from this approximation build up. After a long time, the state of the real-world system might be substantially different from our solution. Also, we will see that in a mass-spring system, the amplitude is independent of the period. This is not true for a pendulum. Nevertheless, for reasonably short periods of time and small swings (that is, only small angles $\theta$), the approximation is reasonably good.

In real-world problems it is often necessary to make these types of simplifications. We must understand both the mathematics and the physics of the situation to see if the simplification is valid in the context of the questions we are trying to answer.

## Free undamped motion

In this section we only consider free or unforced motion, as we do not know yet how to solve nonhomogeneous equations. We start with {index:undamped} motion where $c=0$. The equation is
$$ mx'' + kx = 0 . $$
We divide by $m$ and let $\omega_0 = \sqrt{{k}/{m}}$ to rewrite the equation as
$$ x'' + \omega_0^2 x = 0 . $$
The general solution to this equation is
$$ x(t) = A \cos (\omega_0 t) + B \sin (\omega_0 t) . $$
By a trigonometric identity
$$ A \cos (\omega_0 t) + B \sin (\omega_0 t) = C \cos ( \omega_0 t - \gamma ) , $$
for two different constants $C$ and $\gamma$. One finds that $A = C \cos \gamma$ and $B = C \sin \gamma$, and therefore it is not hard to compute that $C= \sqrt{A^2 + B^2}$ and $\tan \gamma = {B}/{A}$. Therefore, we let $C$ and $\gamma$ be our arbitrary constants and write $x(t) = C \cos ( \omega_0 t - \gamma )$.

:::exercise {exercise-2-4-001} number=2.4.1 answered=no src=ch-higher-order-ode.tex:1608
PROBLEM:
Justify the identity $A \cos (\omega_0 t) + B \sin (\omega_0 t) = C \cos ( \omega_0 t - \gamma )$ and verify the equations $C = \sqrt{A^2+B^2}$ and $\tan \gamma = \frac{B}{A}$. Hint: Start with $\cos (\alpha-\beta) = \cos (\alpha) \cos (\beta) + \sin (\alpha)\sin (\beta)$ and multiply by $C$. Then what should $\alpha$ and $\beta$ be?
:::

While it is easier to use the first form with $A$ and $B$ to solve for the initial conditions, the second form is more natural. The constants $C$ and $\gamma$ have nice physical interpretation. Write the solution as
$$ x(t) = C \cos ( \omega_0 t - \gamma ) . $$
This is a pure-frequency oscillation (a sine wave). The *{index:amplitude}* is $C$, $\omega_0$ is the (angular) *{index:frequency}*{index-entry:angular frequency}, and $\gamma$ is the so-called *{index:phase shift}*. The phase shift just shifts the graph left or right. We call $\omega_0$ the *{index:natural (angular) frequency}*. This entire setup is called *{index:simple harmonic motion}*.

Let us pause to explain the word *angular* before the word *frequency*. The units of $\omega_0$ are radians per unit time, not cycles per unit time as is the usual measure of frequency. Because one cycle is $2 \pi$ radians, the usual frequency is given by $\frac{\omega_0}{2\pi}$. It is simply a matter of where we put the constant $2\pi$, and that is a matter of taste.

The *{index:period}* of the motion is one over the frequency (in cycles per unit time) and hence it is $\frac{2\pi}{\omega_0}$. That is the amount of time it takes to complete one full cycle.

:::example {ex:example-2-4-1} Example 2.4.1
Suppose that $m=2\,\mathrm{kg}$ and $k=8\,\mathrm{N}/\mathrm{m}$. The whole mass and spring setup is sitting on a truck that was traveling at 1 m/s. The truck crashes and hence stops. The mass was held in place 0.5 meters forward from the rest position. During the crash the mass gets loose. That is, the mass is now moving forward at 1 m/s, while the other end of the spring is held in place. The mass therefore starts oscillating. What is the frequency of the resulting oscillation? What is the amplitude? The units are the mks units{index-entry:mks units} (meters-kilograms-seconds).

The setup means that the mass was at half a meter in the positive direction during the crash and relative to the wall the spring is mounted to, the mass was moving forward (in the positive direction) at 1 m/s. This gives the initial conditions. So the equation with initial conditions is
$$ 2 x'' + 8 x = 0 , \qquad x(0) = 0.5, \qquad x'(0) = 1. $$
We compute $\omega_0 = \sqrt{{k}/{m}} = \sqrt{4} = 2$. Hence the angular frequency is 2. The usual frequency in Hertz (cycles per second) is ${2}/{2\pi} = {1}/{\pi} \approx 0.318$.

The general solution is
$$ x(t) = A \cos (2t) + B \sin (2t) . $$
Letting $x(0) = 0.5$ means $A = 0.5$. Then $x'(t) = - 2(0.5) \sin (2t) + 2B \cos (2t)$. Letting $x'(0) = 1$, we get $B = 0.5$. Therefore, the amplitude is $C = \sqrt{A^2+B^2} = \sqrt{0.25+0.25} = \sqrt{0.5} \approx 0.707$. The solution is
$$ x(t) = 0.5 \cos (2t) + 0.5 \sin (2t) . $$
A plot of $x(t)$ is shown in [Figure 2.2](ref:mv-undampedfig).
:::

> FIGURE {fig:mv-undampedfig} number=2.2 src=../../media/mv-undamped.svg
> alt: A graph of the function for t from 0 to 10, which is a sinusoidal curve that goes between roughly minus 0.707 and 0.707, starting at (0,0.5) going upwards, making a little bit more than 3 cycles in the picture.
> width: 4.5in
> caption: Simple undamped oscillation.

In general, for free undamped motion, a solution of the form
$$ x(t) = A \cos (\omega_0 t) + B \sin (\omega_0 t) , $$
corresponds to the initial conditions $x(0) = A$ and $x'(0) = \omega_0 B$. It is easy to find $A$ and $B$ from the initial conditions. The amplitude and the phase shift are computed from $A$ and $B$. In the example, we found the amplitude $C$. How about the phase shift $\gamma$? We know $\tan \gamma = {B}/{A} = 1$. The arctangent of $1$ is ${\pi}/{4}$ or approximately $0.785$. We must check if ${\pi}/{4}$ gives the correct quadrant—if the angle from the positive $x$-axis is in the same quadrant as the point $(A,B)$—if not, we add $\pi$. That is because $A = C \cos \gamma$ and $B = C \sin \gamma$. Both $A$ and $B$ are positive, so $\gamma$ must be in the first quadrant. As ${\pi}/{4}$ radians is in the first quadrant, $\gamma = {\pi}/{4}$.

Note: Many calculators and computer software have not only the `atan`{index-entry:atan} function for arctangent, but also what is sometimes called `atan2`{index-entry:atan2}. This function takes two arguments, $B$ and $A$, and returns a $\gamma$ in the correct quadrant for you.

## Free damped motion

Let us now focus on {index:damped} motion. We rewrite the equation
$$ m x'' + c x' + kx = 0, $$
as
$$ x'' + 2p x' + \omega_0^2 x = 0, $$
where
$$ \omega_0 = \sqrt{\frac{k}{m}}, \qquad p = \frac{c}{2m} . $$
The characteristic equation is
$$ r^2 + 2 pr + \omega_0^2 = 0 . $$
Using the quadratic formula, we get that the roots are
$$ r = -p \pm \sqrt{p^2 - \omega_0^2} . $$
The form of the solution depends on whether we get complex or real roots. We get real roots if and only if the following number is nonnegative:
$$ p^2 - \omega_0^2 = {\left( \frac{c}{2m} \right)}^2 - \frac{k}{m} = \frac{c^2 - 4km}{4m^2} . $$
The sign of $p^2-\omega_0^2$ is the same as the sign of $c^2 - 4km$. Thus we get real roots if and only if $c^2-4km$ is nonnegative, or in other words if $c^2 \geq 4km$.

### Overdamping

When $c^2 - 4km > 0$, the system is *{index:overdamped}*. In this case, there are two distinct real roots $r_1$ and $r_2$. As $\sqrt{p^2 - \omega_0^2}$ is always less than $p$, the expression for the roots $-p \pm \sqrt{p^2 - \omega_0^2}$ is negative either way. So both roots are negative.

The solution is
$$ x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t} . $$
Since $r_1, r_2$ are negative, $x(t) \to 0$ as $t \to \infty$. Thus the mass will tend towards the rest position as time goes to infinity. For a few sample plots for different initial conditions, see [Figure 2.3](ref:mv-overdampedfig).

> FIGURE {fig:mv-overdampedfig} number=2.3 src=../../media/mv-overdamped.svg
> alt: A plot of 3 functions for t between 0 and 100. All three graphs start at (0,1) and they all approach the horizontal axis being almost indistinguishable from it by the right side of the picture. The first one starts downwards, crosses the axis and then goes back up and approaches it, the second starts out horizontally but turns downwards and approaches the axis, and the third starts upwards, then turns downwards quickly and approaches the axis.
> width: 4.5in
> caption: Overdamped motion for several different initial conditions.

No oscillation happens. In fact, the graph crosses the $t$-axis at most once. To see why, we try to solve $0 = C_1 e^{r_1 t} + C_2 e^{r_2 t}$. Therefore, $C_1 e^{r_1 t} = - C_2 e^{r_2 t}$ and using laws of exponents we obtain
$$ \frac{-C_1}{C_2} = e^{(r_2-r_1) t} . $$
This equation has at most one solution $t \geq 0$; the graph of $e^{(r_2-r_1) t}$ is either always increasing or always decreasing. For some initial conditions the graph never crosses the $t$-axis, as is evident from the sample graphs.

:::example {ex:example-2-4-2} Example 2.4.2
Suppose the mass is released from rest. That is, $x(0) = x_0$ and $x'(0) = 0$. Then
$$ x(t) = \frac{x_0}{r_1-r_2} \left(r_1 e^{r_2 t} - r_2 e^{r_1 t} \right) . $$
It is not hard to see that this satisfies the initial conditions.
:::

### Critical damping

When $c^2 - 4km = 0$, the system is *{index:critically damped}*. In this case, there is one root of multiplicity 2 and this root is $-p$. Our solution is
$$ x(t) = C_1 e^{-pt} + C_2 t e^{-pt} . $$
The behavior of a critically damped system is very similar to an overdamped system. After all, a critically damped system is, in some sense, a limit of overdamped systems. Since these equations are really only an approximation to the real world, in reality, we are never critically damped; it is a place we can only reach in theory. We are always a little bit underdamped or a little bit overdamped. It is better not to dwell on critical damping.

### Underdamping

When $c^2 - 4km < 0$, the system is *{index:underdamped}*. In this case, the roots are complex.
$$ \begin{split} r & = -p \pm \sqrt{p^2 - \omega_0^2} \\ & = -p \pm \sqrt{-1}\sqrt{\omega_0^2 - p^2} \\ & = -p \pm i \omega_1 , \end{split} $$
where $\omega_1 =\sqrt{\omega_0^2 - p^2}$. Our solution is
$$ x(t) = e^{-pt} \bigl( A \cos (\omega_1 t) + B \sin (\omega_1 t) \bigr) , $$
or
$$ x(t) = C e^{-pt} \cos ( \omega_1 t - \gamma ) . $$
An example plot is given in [Figure 2.4](ref:mv-underdampedfig). Note that we still have that $x(t) \to 0$ as $t \to \infty$.

> FIGURE {fig:mv-underdampedfig} number=2.4 src=../../media/mv-underdamped.svg
> alt: A plot for t between 0 and 30. Two decaying exponential curves one starting it (0,1) and one starting at (0, minus 1) are shown. A sinusoidal-like curve winds between them, starting at the top curve, going down the bottom curve, then back up and so on.
> width: 4.5in
> caption: Underdamped motion with the envelope curves shown.

The figure also shows the *{index:envelope curves}* $C e^{-pt}$ and $-C e^{-pt}$. The solution is the oscillating line between the two envelope curves. The envelope curves give the maximum amplitude of the oscillation at any given point in time. For example, if you are bungee jumping, you are really interested in computing the envelope curve so as not to hit the concrete with your head. The phase shift $\gamma$ shifts the oscillation left or right, but within the envelope curves (the envelope curves do not change if $\gamma$ changes).

Notice that the angular *{index:pseudo-frequency}*^[We do not call $\omega_1$ a frequency since the solution is not really a periodic function.] $\omega_1$ becomes smaller when the damping $c$ (and hence $p$) becomes larger. This makes sense. First, when we change the damping just a little bit, we do not expect the behavior of the solution to change dramatically. Second, if we keep making $c$ larger, then at some point the solution should start looking like the solution for critical damping or overdamping, where no oscillation happens. As $c$ gets larger and $c^2$ approaches $4km$, we find that $\omega_1$ approaches $0$. On the other hand, when $c$ gets smaller, $\omega_1$ approaches $\omega_0$ ($\omega_1$ is always smaller than $\omega_0$), and the solution looks more and more like the steady periodic motion of the undamped case. The envelope curves become flatter and flatter as $c$ (and hence $p$) goes to $0$.

## Exercises

:::exercise {mv-ex1} number=2.4.2 answered=no src=ch-higher-order-ode.tex:1938 label=mv:ex1
PROBLEM:
Consider a mass and spring system with a mass $m=2$, spring constant $k=3$, and damping constant $c=1$.

a) Set up and find the general solution of the system.
b) Is the system underdamped, overdamped, or critically damped?
c) If the system is not critically damped, find a $c$ that makes the system critically damped.

:::

:::exercise {exercise-2-4-003} number=2.4.3 answered=no src=ch-higher-order-ode.tex:1951
PROBLEM:
Do [Exercise 2.4.2](ref:mv-ex1) for $m=3$, $k=12$, and $c=12$.
:::

:::exercise {mv-exwt1} number=2.4.4 answered=no src=ch-higher-order-ode.tex:1955 label=mv:exwt1
PROBLEM:
Using the mks units (meters-kilograms-seconds){index-entry:mks units}, suppose you have a spring with spring constant 4 N/m. You want to use it to weigh items. Assume no friction. You place the mass on the spring and put it in motion.

a) You count and find that the frequency is 0.8 Hz (cycles per second). What is the mass?
b) Find a formula for the mass $m$ given the frequency $\omega$ in Hz.

:::

:::exercise {exercise-2-4-005} number=2.4.5 answered=no src=ch-higher-order-ode.tex:1970
PROBLEM:
Suppose we add possible friction to [Exercise 2.4.4](ref:mv-exwt1). Further, suppose you do not know the spring constant, but you have two reference weights 1 kg and 2 kg to calibrate your setup. You put each in motion on your spring and measure the frequency. For the 1 kg weight you measured 1.1 Hz, for the 2 kg weight you measured 0.8 Hz.

a) Find $k$ (spring constant) and $c$ (damping constant).
b) Find a formula for the mass in terms of the frequency in Hz. *Note that there may be more than one possible mass for a given frequency.*
c) For an unknown object you measured 0.2 Hz, what is the mass of the object? Suppose that you know that the mass of the unknown object is more than a kilogram.

:::

:::exercise {exercise-2-4-006} number=2.4.6 answered=no src=ch-higher-order-ode.tex:1988
PROBLEM:
Suppose you wish to measure the friction a mass of 0.1 kg experiences as it slides along a floor (you wish to find $c$). You have a spring with spring constant $k=5\,\mathrm{N}/\mathrm{m}$. You take the spring, you attach it to the mass and fix it to a wall. Then you pull on the spring and let the mass go. You find that the mass oscillates with frequency 1 Hz. What is the friction?
:::

:::exercise {exercise-2-4-101} number=2.4.101 answered=yes src=ch-higher-order-ode.tex:1999
PROBLEM:
A mass of $2$ kilograms is on a spring with spring constant $k$ newtons per meter with no damping. Suppose the system is at rest and at time $t=0$ the mass is kicked and starts traveling at 2 meters per second. How large does $k$ have to be so that the mass does not go further than 3 meters from the rest position?
SOLUTION:
$k={8}/{9}\,\mathrm{N}/\mathrm{m}$ (and larger)
:::

:::exercise {exercise-2-4-102} number=2.4.102 answered=yes src=ch-higher-order-ode.tex:2010
PROBLEM:
Suppose we have an RLC circuit with a resistor of 100 milliohms (0.1 ohms), inductor of inductance of 50 millihenries (0.05 henries), and a capacitor of 5 farads, with constant voltage.

a) Set up the ODE equation for the current $I$.
b) Find the general solution.
c) Solve for $I(0) = 10$ and $I'(0) = 0$.

SOLUTION:
a) $0.05 I'' + 0.1 I' + ({1}/{5}) I = 0$ b) $I = C e^{-t} \cos(\sqrt{3} \, t - \gamma)$ c) $I = 10 e^{-t} \cos(\sqrt{3} \, t) + \frac{10}{\sqrt{3}} e^{-t} \sin(\sqrt{3} \, t)$
:::

:::exercise {exercise-2-4-103} number=2.4.103 answered=yes src=ch-higher-order-ode.tex:2029
PROBLEM:
A 5000 kg railcar hits a bumper (a spring) at 1 m/s, and the spring compresses by 0.1 m. Assume no damping.

a) Find $k$.
b) How far does the spring compress when a 10000 kg railcar hits the spring at the same speed?
c) If the spring would break if it compresses further than 0.3 m, what is the maximum mass of a railcar that can hit it at 1 m/s?
d) What is the maximum mass of a railcar that can hit the spring without it breaking at 2 m/s?

SOLUTION:
a) $k=500000\,\mathrm{N}/\mathrm{m}$ b) $\frac{1}{5\sqrt{2}} \approx 0.141\,\mathrm{m}$ c) 45000 kg d) 11250 kg
:::

:::exercise {exercise-2-4-104} number=2.4.104 answered=yes src=ch-higher-order-ode.tex:2055
PROBLEM:
A mass of $m$ kg is on a spring with $k=3\,\mathrm{N}/\mathrm{m}$ and $c=2\,\mathrm{Ns}/\mathrm{m}$. Find the mass $m_0$ for which there is critical damping. If $m < m_0$, does the system oscillate or not, that is, is it underdamped or overdamped?
SOLUTION:
$m_0 = {1}/{3}\,\mathrm{kg}$. If $m < m_0$, then the system is overdamped and will not oscillate.
:::

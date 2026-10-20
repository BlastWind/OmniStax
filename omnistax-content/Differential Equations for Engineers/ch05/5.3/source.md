# 5.3 Steady periodic solutions {sec:sps-section}

:::note [section-notes]
*Note: 1–2 lectures, §10.3 in [EP](cite:EP), not in [BD](cite:BD)*
:::

## Forced vibrating string

Consider a guitar string of length $L$. We studied this setup in [§4.7](ref:4.7#we-section). Let $x$ be the position on the string, $t$ the time, and $y$ the displacement of the string. See [Figure 5.3](ref:sps-vibstrfig).

> FIGURE {fig:sps-vibstrfig} number=5.3 src=../../media/sps-vibstr.svg
> alt: Diagram of a string of a guitar (a shaded guitar is in the background), the bridge of the guitar is at x equals 0 on the x-axis and the nut of the guitar is at x equals L. The string is fixed to the x-axis at these two points. The string appears to be plucked in the middle upwards making a wide triangle. The vertical axis is labeled y, and an arrow indicates that y gives the displacement of the string at any particular x, that is, the graph of y is the shape of the string.
> caption: Vibrating string.

The problem is governed by the wave equation
$$ \begin{array}{ll} y_{tt} = a^2 y_{xx} , & \\ y(0,t) = 0 , & y(L,t) = 0 , \\ y(x,0) = f(x) , & y_t(x,0) = g(x) . \end{array} $$ {eq:sps-freevib} number=5.6
We found that the solution is of the form
$$ y = \sum_{n=1}^\infty \left( A_n \cos \left( \frac{n\pi a}{L} t \right) + B_n \sin \left( \frac{n\pi a}{L} t \right) \right) \sin \left( \frac{n\pi}{L} x \right) , $$
where $A_n$ and $B_n$ are determined by the initial conditions. The natural frequencies of the system are the (angular) frequencies $\frac{n \pi a}{L}$ for integers $n \geq 1$.

But these are free vibrations. What if there is an external force acting on the string? Let us assume, say, air vibrations (noise), for example from a second string. Or perhaps from a jet engine. For simplicity, assume a nice pure sound and assume the force is uniform at every position on the string: The external force as a function of time $t$ is given as $F_0 \cos (\omega t)$ as force per unit mass. We will call this the forcing function. Then our wave equation becomes (remember force is mass times acceleration)
$$ y_{tt} = a^2 y_{xx} + F_0 \cos ( \omega t) , $$ {eq:sps-forcedeq} number=5.7
with the same boundary conditions of course.

Suppose we want to find the solution here that satisfies the equation [(5.7)](ref:sps-forcedeq) and
$$ y(0,t) = 0, \qquad y(L,t) = 0, \qquad y(x,0) = 0, \qquad y_t(x,0) = 0. $$ {eq:sps-forcedinitcond} number=5.8
That is, the string is initially at rest. First, we find a particular solution $y_p$ of [(5.7)](ref:sps-forcedeq) that satisfies only the conditions $y(0,t) = y(L,t) = 0$. We define the functions $f$ and $g$ as
$$ f(x) = -y_p(x,0), \qquad g(x) = -\frac{\partial y_p}{\partial t} (x,0) . $$
We then find a solution $y_c$ of [(5.6)](ref:sps-freevib). If we add the two solutions, we find that $y = y_c + y_p$ solves [(5.7)](ref:sps-forcedeq) with the initial conditions.

:::exercise {exercise-5-3-001} number=5.3.1 answered=no src=ch-eigenvalue-probs.tex:985
PROBLEM:
Check that $y = y_c + y_p$ solves [(5.7)](ref:sps-forcedeq) and the side conditions [(5.8)](ref:sps-forcedinitcond).
:::

So the big issue here is to find the particular solution $y_p$. We look at the equation and we make an educated guess
$$ y_p(x,t) = X(x) \cos (\omega t) . $$
We plug in to get
$$ -\omega^2 X \cos ( \omega t) = a^2 X'' \cos ( \omega t) + F_0 \cos ( \omega t ) , $$
or $-\omega^2 X = a^2 X'' + F_0$ after canceling the cosine. We know how to find a general solution to this equation (it is a nonhomogeneous constant-coefficient equation). The general solution is
$$ X(x) = A \cos \left( \frac{\omega}{a} x \right) + B \sin \left( \frac{\omega}{a} x \right) - \frac{F_0}{\omega^2} . $$
The endpoint conditions imply $X(0) = X(L) = 0$. So
$$ 0 = X(0) = A - \frac{F_0}{\omega^2} , $$
or $A = \frac{F_0}{\omega^2}$, and also
$$ 0 = X(L) = \frac{F_0}{\omega^2} \cos \left( \frac{\omega L}{a} \right) + B \sin \left( \frac{\omega L}{a} \right) - \frac{F_0}{\omega^2} . $$
Assuming that $\sin ( \frac{\omega L}{a} )$ is not zero, we can solve for $B$ to get
$$ B = \frac{-F_0 \left( \cos \left( \frac{\omega L}{a} \right) - 1 \right)} {\omega^2 \sin \left( \frac{\omega L}{a} \right)}. $$ {eq:natfreq-Beq} number=5.9
Therefore,
$$ X(x) = \frac{F_0}{\omega^2} \left( \cos \left( \frac{\omega}{a} x \right) - \frac{\cos \left( \frac{\omega L}{a} \right) - 1} {\sin \left( \frac{\omega L}{a} \right)} \sin \left( \frac{\omega}{a} x \right) - 1 \right) . $$
The particular solution $y_p$ we are looking for is
$$ \boxed{~~ y_p(x,t) = \frac{F_0}{\omega^2} \left( \cos \left( \frac{\omega}{a} x \right) - \frac{\cos \left( \frac{\omega L}{a} \right) - 1} {\sin \left( \frac{\omega L}{a}\right)} \sin \left( \frac{\omega}{a} x \right) -1 \right) \cos ( \omega t) . ~~} $$

:::exercise {exercise-5-3-002} number=5.3.2 answered=no src=ch-eigenvalue-probs.tex:1054
PROBLEM:
Check that $y_p$ works.
:::

We get to the point that we skipped. Suppose $\sin ( \frac{\omega L}{a} ) = 0$. This means that $\omega$ is equal to one of the natural frequencies of the system, i.e. a multiple of the base frequency $\frac{\pi a}{L}$. If $\omega$ is not equal to a multiple of $\frac{\pi a}{L}$, but is very close, then the coefficient $B$ in [(5.9)](ref:natfreq-Beq) seems to become very large as the denominator goes to zero. But let us not jump to conclusions just yet because the numerator may also go to zero. When $\omega = \frac{n \pi a}{L}$ for $n$ even, then $\cos (\frac{\omega L}{a}) = 1$. We could simply take $B=0$ to obtain a nice bounded solution of the same form, $y_p = \frac{F_0}{\omega^2} \bigl( \cos\bigl(\frac{\omega}{a} x\bigr) - 1 \bigr) \cos(\omega t)$, and so no resonance is happening. Resonance occurs only when both $\cos (\frac{\omega L}{a}) = -1$ and $\sin (\frac{\omega L}{a}) = 0$, that is, when $\omega = \frac{n \pi a }{L}$ for *odd* $n$. When $n$ is odd, if we take $\omega$ approaching $\frac{n \pi a }{L}$, then the numerator in the coefficient $B$ is not going to zero, but the denominator is, so $B$ really does “blow up.” We could again try to explicitly solve for the resonance solution if we wanted to, but it is, in the right sense, the limit of solutions as $\omega$ gets close to a resonance frequency. In real life, pure resonance never occurs anyway.

The calculation of resonance frequencies above explains why a string begins to vibrate if an identical string is plucked close by. In the absence of friction this vibration would get louder and louder as time goes on. On the other hand, you are unlikely to get large vibration if the forcing frequency is not close to a resonance frequency even if you have a jet engine running close to the string. That is, the amplitude does not keep increasing unless you tune to just the right frequency.

Similar resonance phenomena occur when you break a wine glass using human voice (yes, this is possible, but not easy^[*Mythbusters*, episode 31, Discovery Channel, originally aired May 18th 2005.]) if you happen to hit just the right frequency. However, a glass has a much purer sound, i.e. it is more like a vibraphone, so there are far fewer resonance frequencies to hit.

When the forcing function is more complicated, you decompose it in terms of its Fourier series and apply the result above. You may also need to solve the problem above if the forcing function is a sine rather than a cosine, but if you think about it, the solution is almost the same.

:::example {ex:example-5-3-1} Example 5.3.1
Suppose $F_0 = 1$, $\omega = 1$, $L=1$, and $a=1$. Let us find a solution $y$ to [(5.7)](ref:sps-forcedeq) satisfying the zero boundary conditions [(5.8)](ref:sps-forcedinitcond). First we find
$$ y_p(x,t) = \left( \cos (x) - \frac{\cos (1) - 1}{\sin (1)} \sin (x) -1 \right) \cos (t) . $$
Write $B = \frac{\cos (1) - 1}{\sin (1)}$ for simplicity.

Plug in $t=0$ into $y_p$ to get
$$ f(x) =- y_p(x,0) = - \cos x + B \sin x +1 , $$
and after differentiating $y_p$ in $t$, we see that $g(x) = -\frac{\partial y_p}{\partial t}(x,0) = 0$.

Hence to find $y_c$, we need to solve the problem
$$ \begin{align*} & w_{tt} = w_{xx} , \\ & w(0,t) = 0 , \quad w(1,t) = 0 , \\ & w(x,0) = f(x) = - \cos x + B \sin x +1 , \\ & w_t(x,0) = g(x) = 0 , \end{align*} $$
and set $y_c=w$. If we use d’Alembert, we note that the formula that we use to define $w(x,0)$ is not odd, hence it is not a simple matter of plugging in the expression for $w(x,0)$ to the d’Alembert formula directly! You must define $F$ to be the odd, 2-periodic extension of $w(x,0)$. Then our solution $y = y_p+y_c$ to [(5.7)](ref:sps-forcedeq) subject to [(5.8)](ref:sps-forcedinitcond) is
$$ y(x,t) = \frac{F(x+t) + F(x-t)}{2} + \left( \cos (x) - \frac{\cos (1) - 1}{\sin (1)} \sin (x) -1 \right) \cos (t) . $$ {eq:natfreq-exsol} number=5.10

It is not hard to compute specific values for an odd periodic extension of a function and hence [(5.10)](ref:natfreq-exsol) is a wonderful solution to the problem. For example, it is very easy to have a computer do it, unlike a series solution. A plot is given in [Figure 5.4](ref:natfreq-forcedvibfig).

> FIGURE {fig:natfreq-forcedvibfig} number=5.4 src=../../media/natfreq-forcedvib.svg
> alt: A plot of a surface above the xt-plane where x ranges from 0 to 1 and t ranges from 0 to 5. The function y is zero on 3 sides, that is at t equals 0 and when x equals 0 or x equals 1. Inside its domain as t grows there is a bump going up to a bit above 0.2, then there are two bumps going below the xt-plane, the second one seeming a little more pronounced. Then the function starts going into another bump upwards.
> width: 7.5in
> caption: Plot of $y(x,t) = \frac{F(x+t) + F(x-t)}{2} + \left( \cos (x) - \frac{\cos (1) - 1}{\sin (1)} \sin (x) -1 \right) \cos (t)$.

:::

## Underground temperature oscillations

Let $u(x,t)$ be the temperature at a certain location at depth $x$ underground at time $t$. See [Figure 5.5](ref:sps-groundtempfig).

> FIGURE {fig:sps-groundtempfig} number=5.5 src=../../media/sps-groundtemp.svg
> alt: A diagram of the ground with a person standing on it, and an arrow downward marked with 'depth x' indicating that x means the depth below ground.
> caption: Underground temperature.

The temperature $u$ satisfies the heat equation $u_t = ku_{xx}$, where $k$ is the diffusivity of the soil. We know the temperature at the surface $u(0,t)$ from weather records. Let us assume for simplicity that
$$ u(0,t) = T_0 + A_0 \cos (\omega t) , $$
where $T_0$ is the yearly mean temperature, and $t=0$ is midsummer (put a negative sign above to make it midwinter if you wish). The constant $A_0$ gives the typical variation for the year: The hottest temperature is $T_0 + A_0$ and the coldest is $T_0 - A_0$. For simplicity, we assume that $T_0 = 0$. The frequency $\omega$ is picked depending on the units of $t$, such that when $t=1\,\mathrm{year}$, then $\omega t = 2 \pi$. For example, if $t$ is in years, then $\omega = 2\pi$.

It seems reasonable that the temperature at depth $x$ also oscillates with the same frequency. This, in fact, is the steady periodic solution, a solution independent of the initial conditions. So we are looking for a solution of the form
$$ u(x,t) = V(x) \cos (\omega t) + W (x) \sin ( \omega t) $$
for the problem
$$ u_t = k u_{xx}, \qquad u(0,t) = A_0 \cos ( \omega t) . $$ {eq:sps-ueq} number=5.11

We employ the complex exponential here to make calculations simpler. Suppose we have a complex-valued function
$$ h(x,t) = X(x)\, e^{i\omega t} . $$
We look for an $h$ such that $\operatorname{Re} h = u$. To find an $h$ whose real part satisfies [(5.11)](ref:sps-ueq), we look for an $h$ such that
$$ h_t = k h_{xx}, \qquad h(0,t) = A_0 e^{i\omega t} . $$ {eq:sps-heq} number=5.12

:::exercise {exercise-5-3-003} number=5.3.3 answered=no src=ch-eigenvalue-probs.tex:1254
PROBLEM:
Suppose $h$ satisfies [(5.12)](ref:sps-heq). Use [Euler’s formula](ref:2.2#eulersformula) for the complex exponential to check that $u = \operatorname{Re} h$ satisfies [(5.11)](ref:sps-ueq).
:::

Substitute $h$ into [(5.12)](ref:sps-heq).
$$ i\omega X e^{i\omega t} = k X'' e^{i \omega t} . $$
Hence,
$$ k X'' - i \omega X = 0 , $$
or
$$ X'' - \alpha^2 X = 0 , $$
where $\alpha = \pm \sqrt{\frac{i\omega}{k}}$. Note that $\pm \sqrt{i} = \pm \frac{1+i}{\sqrt{2}}$ so you could simplify to $\alpha = \pm (1+i)\sqrt{\frac{\omega}{2k}}$. Hence the general solution is
$$ X(x) = A e^{-(1+i)\sqrt{\frac{\omega}{2k}} \, x} + B e^{(1+i)\sqrt{\frac{\omega}{2k}} \, x} . $$
We assume that an $X(x)$ that solves the problem must be bounded as $x \to \infty$ since $u(x,t)$ should be bounded (we are not worrying about Earth’s core!). If you use [Euler’s formula](ref:2.2#eulersformula) to expand the complex exponentials, note that the second term is unbounded (if $B \neq 0$), while the first term is always bounded. Hence $B=0$.

:::exercise {exercise-5-3-004} number=5.3.4 answered=no src=ch-eigenvalue-probs.tex:1287
PROBLEM:
Use [Euler’s formula](ref:2.2#eulersformula) to show that $e^{(1+i)\sqrt{\frac{\omega}{2k}} \, x}$ is unbounded as $x \to \infty$, while $e^{-(1+i)\sqrt{\frac{\omega}{2k}} \, x}$ is bounded as $x \to \infty$.
:::

Furthermore, $X(0) = A_0$ since $h(0,t) = A_0 e^{i \omega t}$. Thus $A=A_0$. This means that
$$ h(x,t) = A_0 e^{-(1+i)\sqrt{\frac{\omega}{2k}} \, x} e^{i \omega t} = A_0 e^{-(1+i)\sqrt{\frac{\omega}{2k}} \, x + i \omega t} = A_0 e^{-\sqrt{\frac{\omega}{2k}} \, x} e^{i(\omega t - \sqrt{\frac{\omega}{2k}} \, x)} . $$
We need to get the real part of $h$, so we apply [Euler’s formula](ref:2.2#eulersformula) to get
$$ h(x,t) = A_0 e^{-\sqrt{\frac{\omega}{2k}} \, x} \left(\cos \left(\omega t - \sqrt{\frac{\omega}{2k}}\, x\right) + i \sin \left(\omega t - \sqrt{\frac{\omega}{2k}}\, x\right) \right) . $$
Then finally
$$ u(x,t) = \operatorname{Re} h(x,t) = A_0 e^{-\sqrt{\frac{\omega}{2k}}\, x} \cos \left(\omega t - \sqrt{\frac{\omega}{2k}}\, x\right) . $$
Yay!

Notice the phase is different at different depths. At depth $x$ the phase is delayed by $x \sqrt{\frac{\omega}{2k}}$. For example, in cgs units (centimeters-grams-seconds){index-entry:cgs units} we have $k=0.005$ (typical value for soil), $\omega = \frac{2\pi}{\text{seconds in a year}} = \frac{2\pi}{31,557,341} \approx 1.99 \times {10}^{-7}$. Then, if we compute where the phase shift $x \sqrt{\frac{\omega}{2k}} = \pi$, we find the depth in centimeters where the seasons are reversed. That is, we get the depth at which summer is the coldest and winter is the warmest. We get approximately 700 centimeters, which is approximately 23 feet below ground.

Be careful not to jump to conclusions. The temperature swings decay rapidly as you dig deeper. The amplitude of the temperature swings is $A_0 e^{-\sqrt{\frac{\omega}{2k}} x}$. This function decays *very* quickly as $x$ (the depth) grows. Let us again take typical parameters as above. We also assume that our surface temperature swing is $\pm {15}^\circ$ Celsius, that is, $A_0 = 15$. Then the maximum temperature variation at 700 centimeters is only $\pm {0.66}^\circ$ Celsius.

You need not dig very deep to get an effective “refrigerator,” with nearly constant temperature. That is why wines are kept in a cellar; you need consistent temperature. The temperature differential could also be used for energy. A home could be heated or cooled by taking advantage of the fact above. Even without Earth’s core, you could heat a home in the winter and cool it in the summer. Earth’s core makes the temperature higher the deeper you dig, although you need to dig somewhat deep to feel a difference. We did not take that into account above.

## Exercises

:::exercise {sps-sinforceexr} number=5.3.5 answered=no src=ch-eigenvalue-probs.tex:1354 label=sps:sinforceexr
PROBLEM:
Suppose that the forcing function for the vibrating string is $F_0 \sin (\omega t)$. Derive the particular solution $y_p$.
:::

:::exercise {exercise-5-3-006} number=5.3.6 answered=no src=ch-eigenvalue-probs.tex:1360
PROBLEM:
Take the forced vibrating string. Suppose that $L=1$, $a=1$. Suppose that the forcing function is the square wave that is 1 on the interval $0 < t < \pi$ and $-1$ on the interval $-\pi < t < 0$. Find the particular solution. Hint: You may want to use result of [Exercise 5.3.5](ref:sps-sinforceexr).
:::

:::exercise {exercise-5-3-007} number=5.3.7 answered=no src=ch-eigenvalue-probs.tex:1369
PROBLEM:
The units are cgs (centimeters-grams-seconds){index-entry:cgs units}. For $k=0.005$, $\omega = 1.991 \times {10}^{-7}$, $A_0 = 20$. Find the depth at which the temperature variation is half ($\pm 10$ degrees) of what it is on the surface.
:::

:::exercise {exercise-5-3-008} number=5.3.8 answered=no src=ch-eigenvalue-probs.tex:1376
PROBLEM:
Derive the solution for underground temperature oscillation without assuming that $T_0 = 0$.
:::

:::exercise {exercise-5-3-101} number=5.3.101 answered=yes src=ch-eigenvalue-probs.tex:1383
PROBLEM:
Take the forced vibrating string. Suppose that $L=1$, $a=1$. Suppose that the forcing function is a triangle wave, $\lvert t \rvert -\frac{\pi}{2}$ on $-\pi < t < \pi$ extended periodically. Find the particular solution.
SOLUTION:
$y_p(x,t) = \sum\limits_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{-4}{\pi n^4} \left( \cos(n x ) - \frac{\cos ( n ) - 1} {\sin( n )} \sin( n x) -1 \right) \cos (n t) .$
:::

:::exercise {exercise-5-3-102} number=5.3.102 answered=yes src=ch-eigenvalue-probs.tex:1409
PROBLEM:
The units are cgs (centimeters-grams-seconds){index-entry:cgs units}. For $k=0.01$, $\omega = 1.991 \times {10}^{-7}$, $A_0 = 25$. Find the depth at which the summer is again the hottest point.
SOLUTION:
Approximately 1991 centimeters
:::

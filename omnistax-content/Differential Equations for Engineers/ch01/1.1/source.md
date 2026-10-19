# 1.1 Integrals as solutions {sec:integralsols-section}

:::note [section-notes]
*Note: 1 lecture (or less), §1.2 in [EP](cite:EP), covered in §1.2 and §2.1 in [BD](cite:BD)*
:::

A first-order ODE is an equation of the form
$$ \frac{dy}{dx} = f(x,y) , $$
or just
$$ y' = f(x,y) . $$
In general, there is no simple formula or procedure one can follow to find solutions. In the next few lectures, we will look at cases where solutions are not difficult to obtain. In this section, we consider the case when $f$ is a function of $x$ alone, that is, the equation is
$$ y' = f(x) . $$ {eq:ias-inteq} number=1.1
We can integrate (antidifferentiate) both sides of the equation with respect to $x$:
$$ \int y'(x) \,dx = \int f(x) \,dx + C , $$
that is,
$$ y(x) = \int f(x) \,dx + C . $$
This $y(x)$ is actually the general solution. So to solve [(1.1)](ref:ias-inteq), we find some antiderivative of $f(x)$ and then we add an arbitrary constant to get the general solution.

:::example {ex:example-1-1-1} Example 1.1.1
Find the general solution of $y' = 3 x^2$.

Elementary calculus tells us that the general solution must be $y = x^3 + C$. Let us check by differentiating: $y' = 3x^2$. We got *precisely* our equation back.
:::

Now is a good time to discuss a point about calculus notation and terminology. Calculus textbooks muddy the waters by talking about the integral as primarily the so-called indefinite integral. The {index:indefinite integral} is really the *{index:antiderivative}* (in fact the whole one-parameter family of antiderivatives). There really exists only one integral and that is the definite integral. The only reason for the indefinite integral notation is that we can always write an antiderivative as a definite integral. That is, by the fundamental theorem of calculus, we can always write $\int f(x) \,dx + C$ as
$$ \int_{x_0}^x f(t) \,dt + C . $$
Hence the terminology *to {index:integrate}* when we may really mean *to {index:antidifferentiate}*. Integration is just one way to compute the antiderivative (and it is a way that always works, see the following examples). Integration is defined as the area under the graph—it only happens to also compute antiderivatives. For the sake of consistency, we will keep using the indefinite integral notation when we want an antiderivative, and you should *always* think of the definite integral as a way to write it.

Normally, we also have an initial condition such as $y(x_0) = y_0$ for some two numbers $x_0$ and $y_0$ ($x_0$ is often 0, but not always). We can then write the solution as a definite integral in a nice way. Suppose our problem is $y' = f(x)$, $y(x_0) = y_0$. Then the solution is
$$ y(x) = \int_{x_0}^x f(t) \,dt + y_0 . $$ {eq:int-eqdef} number=1.2
Let us check! We compute $y' = f(x)$ via the fundamental theorem of calculus, and by Jupiter, $y$ is a solution. Is it the one satisfying the initial condition? Well, $y(x_0) = \int_{x_0}^{x_0} f(t)\,dt + y_0 = y_0$. It is!

Do note that the definite integral and the indefinite integral (antidifferentiation) are completely different beasts. The definite integral always evaluates to a number. Therefore, [(1.2)](ref:int-eqdef) is a formula we can plug into the calculator or a computer, and it will be happy to calculate specific values for us. We will easily be able to plot the solution and work with it just like with any other function. It is not so crucial to always find a {index:closed form}^[By closed form, we mean a formula in terms of known functions with no integrals or limits.] for the antiderivative.

:::example {ex:example-1-1-2} Example 1.1.2
Solve
$$ y' = e^{-x^2}, \qquad y(0) = 1 . $$

By the preceding discussion, the solution must be
$$ y(x) = \int_0^x e^{-t^2} \,dt + 1 . $$
Here is a good way to make fun of your friends taking second-semester calculus. Tell them to find the closed-form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.
:::

Using this method, we can also solve equations of the form
$$ y' = f(y) . $$
We write the equation in {index:Leibniz notation}:
$$ \frac{dy}{dx} = f(y) . $$
We use the inverse function theorem from calculus to switch the roles of $x$ and $y$, that is, we treat $x$ as a function of $y$ and find
$$ \frac{dx}{dy} = \frac{1}{f(y)} . $$
What we are doing seems like algebra with $dx$ and $dy$. It is tempting to just do algebra with $dx$ and $dy$ as if they were numbers. And in this case it does work. Be careful, however, as this sort of hand-waving calculation can lead to trouble, especially when more than one independent variable is involved. At this point, we integrate with respect to $y$,
$$ x(y) = \int \frac{1}{f(y)} \,dy + C . $$
That is not quite the form we wanted the solution in, so we next try to solve for $y$.

:::example {ex:example-1-1-3} Example 1.1.3
Previously, we guessed $y' = ky$ (for some $k > 0$) has the solution $y=Ce^{kx}$. We could have found the solution by integrating. First we note that $y=0$ is a solution. Henceforth, we assume $y \neq 0$. We write
$$ \frac{dx}{dy} = \frac{1}{ky} . $$
We integrate in $y$ to obtain
$$ x(y) = x = \frac{1}{k} \ln \, \lvert y \rvert + D, $$
where $D$ is an arbitrary constant. Now we solve for $y$ (actually for $\lvert y \rvert$).
$$ \lvert y \rvert = e^{kx-kD} = e^{-kD} e^{k x} . $$
If we replace $e^{-kD}$ with an arbitrary constant $C$, we can get rid of the absolute value bars (which we can do as $D$ was arbitrary). In this way, we also incorporate the solution $y=0$. We get the same general solution as we guessed before, $y = Ce^{kx}$.
:::

:::example {ex:example-1-1-4} Example 1.1.4
Find the general solution of $y' = y^2$.

First we note that $y=0$ is a solution. We can now assume that $y \neq 0$. Write
$$ \frac{dx}{dy} = \frac{1}{y^2} . $$
We integrate to get
$$ x = \frac{-1}{y} + C . $$
We solve for $y = \frac{1}{C-x}$. So the general solution is
$$ y = \frac{1}{C-x} \qquad \text{together with} \qquad y = 0. $$
Note the singularities of the solution. If, for example, $C=1$, then the solution “blows up” as we approach $x=1$. See [Figure 1.1](ref:1over1mx-fig). Generally, it is hard to tell from just looking at the equation itself how the solution is going to behave. The equation $y' = y^2$ is very nice and defined everywhere, but the solution is only defined on the interval $(-\infty, C)$ or $(C, \infty)$. Usually when this happens, we only consider the solution on one of these intervals and not both. For example, if we impose an initial condition $y(0) = 1$, then the solution is $y=\frac{1}{1-x}$, and we consider this solution only for $x$ on the interval $(-\infty,1)$, because our initial $x$ (that is, $0$) is in this interval. In the figure, it is the left side of the graph.

> FIGURE {fig:1over1mx-fig} number=1.1 src=../../media/1over1mx.svg
> alt: A plot of y equals 1 over quantity 1 minus x, which is a line starting at a positive value on the left, then rising towards a vertical asymptote at x equals 1. Then from below there is another line that rises from the vertical asymptote and approaches the x-axis.
> width: 4.5in
> caption: Plot of $y=\frac{1}{1-x}$.

On the other hand, if we impose the initial condition $y(2)=-1$ instead, then we again get the solution $y=\frac{1}{1-x}$. Now, however, it is the right-hand side of the graph, that is, it is defined on the interval $(1,\infty)$, as that is the interval containing $2$, the initial $x$.
:::

Classical problems leading to differential equations solvable by integration are problems dealing with {index:velocity}, {index:acceleration}, and {index:distance}. You have surely seen these problems before in your calculus class.

:::example {ex:example-1-1-5} Example 1.1.5
Suppose a car drives at a speed of $e^{t/2}$ meters per second, where $t$ is time in seconds. How far did the car get in 2 seconds (starting at $t=0$)? How far in 10 seconds?

Let $x$ denote the distance the car traveled. The equation is
$$ x' = e^{t/2} . $$
We just integrate this equation to get that
$$ x(t) = 2 e^{t/2} + C . $$
We still need to figure out $C$. We know that when $t=0$, then $x=0$. That is, $x(0) = 0$. So
$$ 0 = x(0) = 2e^{0/2} + C = 2 + C . $$
Thus $C = -2$ and
$$ x(t) = 2 e^{t/2} - 2 . $$
Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain
$$ x(2) = 2e^{2/2} - 2 \approx 3.44 \text{ meters} , \qquad x(10) = 2e^{10/2} - 2 \approx 294 \text{ meters} . $$

:::

:::example {ex:example-1-1-6} Example 1.1.6
Suppose that the car accelerates at $t^2\,\mathrm{m}/\mathrm{s^2}$. At time $t=0$ the car is at the 1-meter mark and is traveling at 10 m/s. Where is the car at time $t=10$?

Well, this is actually a second-order problem. If $x$ is the distance traveled, then $x'$ is the velocity, and $x''$ is the acceleration. The equation with initial conditions is
$$ x'' = t^2 , \qquad x(0) = 1 , \qquad x'(0) = 10 . $$
We can add a new dependent variable $v$ and declare that $x' = v$. Then we solve
$$ v' = t^2, \qquad v(0) = 10 . $$
Once we find $v$, we solve $x' = v$, $x(0)=1$ to find $x$. We leave the integration to the reader.
:::

:::exercise {exercise-1-1-001} number=1.1.1 answered=no src=ch-first-order-ode.tex:283
PROBLEM:
Solve for $v$, then solve for $x$. Find $x(10)$ to answer the question.
:::

## Exercises

:::exercise {exercise-1-1-002} number=1.1.2 answered=no src=ch-first-order-ode.tex:290
PROBLEM:
Solve $\frac{dy}{dx} = x^2+x$ for $y(1)=3$.
:::

:::exercise {exercise-1-1-003} number=1.1.3 answered=no src=ch-first-order-ode.tex:294
PROBLEM:
Solve $\frac{dy}{dx} = \sin (5x)$ for $y(0)=2$.
:::

:::exercise {exercise-1-1-004} number=1.1.4 answered=no src=ch-first-order-ode.tex:298
PROBLEM:
Solve $\frac{dy}{dx} = \frac{1}{x^2-1}$ for $y(0)=0$.
:::

:::exercise {exercise-1-1-005} number=1.1.5 answered=no src=ch-first-order-ode.tex:302
PROBLEM:
Solve $y' = y^3$ for $y(0)=1$.
:::

:::exercise {exercise-1-1-006} number=1.1.6 answered=no src=ch-first-order-ode.tex:305
PROBLEM:
**little harder**
Solve $y' = (y-1)(y+1)$ for $y(0)=3$.
:::

:::exercise {exercise-1-1-007} number=1.1.7 answered=no src=ch-first-order-ode.tex:310
PROBLEM:
Solve $\frac{dy}{dx} = \frac{1}{y+1}$ for $y(0)=0$.
:::

:::exercise {exercise-1-1-008} number=1.1.8 answered=no src=ch-first-order-ode.tex:313
PROBLEM:
**harder**
Solve $y'' = \sin x$ for $y(0)=0$, $y'(0) = 2$.
:::

:::exercise {exercise-1-1-009} number=1.1.9 answered=no src=ch-first-order-ode.tex:318
PROBLEM:
A spaceship is traveling at the speed $2t^2+1$ km/s ($t$ is time in seconds). It is pointing directly away from earth and at time $t=0$ it is 1000 kilometers from earth. How far from earth is it at one minute from time $t=0$?
:::

:::exercise {exercise-1-1-010} number=1.1.10 answered=no src=ch-first-order-ode.tex:325
PROBLEM:
Solve $\frac{dx}{dt} = \sin(t^2)+t$, $x(0)=20$. It is OK to leave your answer as a definite integral.
:::

:::exercise {exercise-1-1-011} number=1.1.11 answered=no src=ch-first-order-ode.tex:330
PROBLEM:
A dropped ball accelerates downwards at a constant rate $9.8$ meters per second squared. Set up the differential equation for the height above ground $h$ in meters. Then supposing $h(0) = 100$ meters, how long does it take for the ball to hit the ground?
:::

:::exercise {exercise-1-1-012} number=1.1.12 answered=no src=ch-first-order-ode.tex:337
PROBLEM:
Find the general solution of $y' = e^x$, and then $y' = e^y$.
:::

:::exercise {exercise-1-1-101} number=1.1.101 answered=yes src=ch-first-order-ode.tex:345
PROBLEM:
Solve $\frac{dy}{dx} = e^x + x$ and $y(0) = 10$.
SOLUTION:
$y = e^x + \frac{x^2}{2} + 9$
:::

:::exercise {exercise-1-1-102} number=1.1.102 answered=yes src=ch-first-order-ode.tex:352
PROBLEM:
Solve $x' = \frac{1}{x^2}$, $x(1)=1$.
SOLUTION:
$x = {(3t-2)}^{1/3}$
:::

:::exercise {exercise-1-1-103} number=1.1.103 answered=yes src=ch-first-order-ode.tex:359
PROBLEM:
Solve $x' = \frac{1}{\cos(x)}$, $x(0)=\frac{\pi}{4}$.
SOLUTION:
$x = \sin^{-1} \bigl(t+{1}/{\sqrt{2}}\bigr)$
:::

:::exercise {exercise-1-1-104} number=1.1.104 answered=yes src=ch-first-order-ode.tex:366
PROBLEM:
Sid is in a car traveling at speed $10t+70$ miles per hour away from Las Vegas, where $t$ is in hours. At $t=0$, Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?
SOLUTION:
170
:::

:::exercise {exercise-1-1-105} number=1.1.105 answered=yes src=ch-first-order-ode.tex:375
PROBLEM:
Solve $y' = y^n$, $y(0) = 1$, where $n$ is a positive integer. Hint: You have to consider different cases.
SOLUTION:
If $n \neq 1$, then $y={\bigl((1-n)x+1\bigr)}^{1/(1-n)}$. If $n=1$, then $y = e^x$.
:::

:::exercise {exercise-1-1-106} number=1.1.106 answered=yes src=ch-first-order-ode.tex:385
PROBLEM:
The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius $r$ centimeters is $({4}/{3}) \pi r^3$. The surface area is $4 \pi r^2$. Set up the differential equation for how the radius $r$ is changing. Then, suppose that at time $t=0$ minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time $t$ will the snowball be completely melted?
SOLUTION:
The equation is $r' = -C$ for some constant $C$. The snowball will be completely melted in 25 minutes from time $t=0$.
:::

:::exercise {exercise-1-1-107} number=1.1.107 answered=yes src=ch-first-order-ode.tex:401
PROBLEM:
Find the general solution to $y''''= 0$. How many distinct constants do you need?
SOLUTION:
$y = Ax^3 + Bx^2 + Cx + D$, so 4 constants.
:::

# 1.3 Separable equations {sec:separable-section}

:::note [section-notes]
*Note: 1 lecture, §1.4 in [EP](cite:EP), §2.2 in [BD](cite:BD)*
:::

When a differential equation is of the form $y' = f(x)$, we integrate: $y = \int f(x) \,dx + C$. Unfortunately, simply integrating no longer works for the general form of the equation $y' = f(x,y)$. Integrating both sides yields the rather unhelpful expression
$$ y = \int f(x,y) \,dx + C . $$
Notice the dependence on $y$ in the integral.

## Separable equations

We say a differential equation is *{index:separable}* if we can write it as
$$ y' = f(x)g(y) , $$
for some functions $f(x)$ and $g(y)$. In {index:Leibniz notation}, the equation is
$$ \frac{dy}{dx} = f(x)g(y) , $$
which we rewrite as
$$ \frac{dy}{g(y)} = f(x) \,dx . $$
Both sides now look like something we can integrate. We obtain
$$ \int \frac{dy}{g(y)} = \int f(x) \,dx + C . $$
If we can find closed-form expressions for these two integrals, we can, perhaps, solve for $y$.

:::example {ex:example-yprimeisxy} Example 1.3.1
Take the equation
$$ y' = xy . $$
Note that $y=0$ is a solution. We will remember that fact and assume $y \neq 0$ from now on, so that we can divide by $y$. Write the equation as $\frac{dy}{dx} = xy$ or $\frac{dy}{y} = x \, dx$. Then
$$ \int \frac{dy}{y} = \int x\,dx + C . $$
We compute the antiderivatives to get
$$ \ln \, \lvert y\rvert = \frac{x^2}{2} + C , $$
or
$$ \lvert y \rvert = e^{\frac{x^2}{2} + C} = e^{\frac{x^2}{2}} e^C = D e^{\frac{x^2}{2}} , $$
where $D > 0$ is some constant. Because $y=0$ is also a solution and because of the absolute value, we can write:
$$ y = D e^{\frac{x^2}{2}} , $$
for any number $D$ (including zero or negative).

We check:
$$ y' = D x e^{\frac{x^2}{2}} = x \left( D e^{\frac{x^2}{2}} \right) = xy . $$
Yay!
:::

You may be worried that we integrated in two different variables. We seemingly did a different operation to each side. Perhaps we should be a little bit more careful and work through this method more rigorously. Consider
$$ \frac{dy}{dx} = f(x)g(y) . $$
We rewrite the equation as follows. Note that $y = y(x)$ is a function of $x$ and so is $\frac{dy}{dx}$!
$$ \frac{1}{g(y)}\,\frac{dy}{dx} = f(x) . $$
We integrate both sides with respect to $x$:
$$ \int \frac{1}{g(y)}\,\frac{dy}{dx} \,dx = \int f(x) \,dx + C . $$
We use the change of variables formula (substitution) on the left-hand side:
$$ \int \frac{1}{g(y)}\,dy = \int f(x) \,dx + C . $$
And we are done.

## Implicit solutions

We sometimes get stuck even if we can do the integration. Consider the separable equation
$$ y' = \frac{xy}{y^2+1} . $$
We separate variables,
$$ \frac{y^2+1}{y}\,dy = \left(y+\frac{1}{y}\right)\,dy = x\,dx . $$
We integrate to get
$$ \frac{y^2}{2} + \ln \, \lvert y \rvert = \frac{x^2}{2} + C , $$
or perhaps the less intimidating expression (where $D = 2C$)
$$ y^2 + 2 \ln \, \lvert y\rvert = x^2 + D . $$
It is not easy to find the solution explicitly—it is hard to solve for $y$. We, therefore, leave the solution in this form and call it an *{index:implicit solution}*. It is still easy to check that an implicit solution satisfies the differential equation. In this case, we differentiate with respect to $x$, and remember that $y$ is a function of $x$, to get
$$ 2y y' + 2 \frac{1}{y} y' = y'\left(2y + \frac{2}{y}\right) = 2x . $$
That is usually called “implicit differentiation” in calculus, but it is just the chain rule. Anyway, now multiply both sides by $y$ and divide by $2(y^2+1)$ and you will get exactly the differential equation. We leave this computation to the reader.

If you have an implicit solution, and you want to compute values for $y$, you might have to be tricky. You might get multiple solutions $y$ for each $x$, so you have to pick one. Sometimes you can graph $x$ as a function of $y$, and then turn your paper to see a graph. Sometimes you have to do more.

Computers are also good at some of these tricks. More advanced mathematical software usually has some way of plotting solutions to implicit equations. For example, for $D=0$, if you plot all the points $(x,y)$ that are solutions to $y^2+2\ln \, \lvert y\rvert=x^2$, you find the two curves in [Figure 1.8](ref:implicitsols-fig). This is not quite a graph of a function. For each $x$, there are two choices of $y$. To find a function, you have to pick one of these two curves. You pick the one that satisfies your initial condition if you have one. For instance, the top curve satisfies the condition $y(1)=1$. So for each $D$, we really got two solutions. As you can see, computing values from an implicit solution can be somewhat tricky. But sometimes, an implicit solution is the best we can do.

> FIGURE {fig:implicitsols-fig} number=1.8 src=../../media/implicitsols.svg
> alt: Plot of the region of the xy-plane near the origin, and there are two solutions plotted one concave up above the x-axis and one concave down below the x-axis.
> width: 4.5in
> caption: The implicit solution $y^2+2\ln \, \lvert y\rvert = x^2$ to $y'=\frac{xy}{y^2+1}$.

The equation above also has the solution $y=0$. So the general solution is
$$ y^2 + 2 \ln \, \lvert y \rvert = x^2 + D \qquad \text{and} \qquad y=0. $$
Sometimes these extra solutions that came up due to division by zero, such as $y=0$ above, are called *singular solutions{index-entry:singular solution}*.

We still solve for the constants using initial conditions in implicit solutions as usual. For example, consider the initial condition $y(0)=1$. We can discount the solution $y=0$. In the implicit solution, let us plug in $x=0$ and $y=1$ to get $1^2 + 2 \ln \, \lvert 1 \rvert = 0^2 + D$, in other words, $D=1$. So the solution for this initial condition is $y^2 + 2 \ln \, \lvert y \rvert = x^2 + 1$, but only the part of this implicit solution that is positive as that is what our initial condition requires.

## More examples of separable equations

:::example {ex:example-1-3-2} Example 1.3.2
Solve $x^2y' = 1 - x^2+y^2 - x^2y^2$, $y(1) = 0$.

Factor the right-hand side
$$ x^2y' = (1 - x^2)(1+y^2) . $$
Separate variables, integrate, and solve for $y$:
$$ \begin{align*} \frac{y'}{1+y^2} & = \frac{1 - x^2}{x^2} , \\ \frac{y'}{1+y^2} & = \frac{1}{x^2} - 1 , \\ \arctan (y) & = \frac{-1}{x} - x + C , \\ y & = \tan \left(\frac{-1}{x} - x + C\right) . \end{align*} $$
Solve for the initial condition, $0 = \tan(-2+C)$ to get $C=2$ (or $C = 2 + \pi$, or $C = 2 + 2\pi$, etc.). The particular solution we seek is, therefore,
$$ y = \tan \left(\frac{-1}{x} - x + 2 \right) . $$

:::

:::example {ex:sep-coffeeexample} Example 1.3.3
Bob made a cup of coffee, and Bob likes to drink coffee only once it reaches 60 degrees Celsius and will not burn him. Initially, right after it was poured in the cup, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?

Let $T$ be the temperature of the coffee in degrees Celsius, let $A$ be the ambient (room) temperature, also in degrees Celsius, and let $t$ denote the time in minutes, with $t=0$ denoting the time when Bob made the coffee. {index:Newton’s law of cooling} states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is,
$$ \frac{dT}{dt} = k(A-T) , $$
for some positive constant $k$. For our setup $A=22$, $T(0) = 89$, $T(1) = 85$. Let $C$ and $D$ denote arbitrary constants, and notice that $T - A > 0$ since the coffee is clearly warmer than the room. We separate variables and integrate.
$$ \begin{align*} \frac{1}{T-A} \, \frac{dT}{dt} & = -k , \\ \ln (T-A) &= -kt + C , \\ T-A &= D e^{-kt} , \\ T &= A + D e^{-kt} . \end{align*} $$
That is, $T = 22 + D e^{-kt}$. We plug in the first condition: $89 = T(0) = 22 + D$, and hence $D = 67$. So $T = 22 + 67 e^{-kt}$. The second condition says $85 = T(1) = 22 + 67 e^{-k}$. Solving for $k$, we get $k = - \ln \frac{85-22}{67} \approx 0.0616$. We solve for the time $t$ that gives a temperature of 60 degrees. Namely, we solve
$$ 60 = 22 + 67 e^{-0.0616\,t} $$
to get $t = - \frac{\ln \frac{60-22}{67}}{0.0616} \approx 9.21$ minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See [Figure 1.9](ref:sintro-coffeefig).

> FIGURE {fig:sintro-coffeefig} number=1.9 src=../../media/coffeefig-1-2.svg
> alt: Two plots of the coffee temperature. On the left, the downwards solution is shown for time 0 to 12.5 as the temperature goes from 89 to below 60. There are horizontal lines at 89, 85, and 60. A vertical line at t equals 1 intersects the solution at temperature 85. A vertical line at t equals 9.21 intersects the solution at temperature 60. The right-hand plot is over longer period of time to t equals 80. The solution exponentially decays towards a horizontal line at temperature 22.
> width: 9in
> caption: Graphs of the coffee temperature function $T(t)$. On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at $t=1$ and $t=9.21$. Notice that the temperature of the coffee hits 85 at $t=1$, and 60 at $t \approx 9.21$. On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.

:::

:::example {ex:example-1-3-4} Example 1.3.4
Find the general solution to $y' = \frac{-xy^2}{3}$ (including any singular solutions).

First, note that $y=0$ is a solution (a singular solution). Next, assume $y \neq 0$ and separate:
$$ \begin{align*} \frac{-3}{y^2} y' & = x , \\ \frac{3}{y} & = \frac{x^2}{2} + C , \\ y & = \frac{3}{{x^2}/{2} + C} = \frac{6}{x^2 + 2C}. \end{align*} $$
The general solution is
$$ y = \frac{6}{x^2 + 2C} \qquad \text{and} \qquad y=0 . $$

:::

## Exercises

:::exercise {exercise-1-3-001} number=1.3.1 answered=no src=ch-first-order-ode.tex:1192
PROBLEM:
Solve $y' = \dfrac{x}{y}$.
:::

:::exercise {exercise-1-3-002} number=1.3.2 answered=no src=ch-first-order-ode.tex:1196
PROBLEM:
Solve $y' = x^2y$.
:::

:::exercise {exercise-1-3-003} number=1.3.3 answered=no src=ch-first-order-ode.tex:1200
PROBLEM:
Solve $\dfrac{dx}{dt} = (x^2-1)\,t$, for $x(0) = 0$.
:::

:::exercise {exercise-1-3-004} number=1.3.4 answered=no src=ch-first-order-ode.tex:1204
PROBLEM:
Solve $\dfrac{dx}{dt} = x\,\sin(t)$, for $x(0) = 1$.
:::

:::exercise {exercise-1-3-005} number=1.3.5 answered=no src=ch-first-order-ode.tex:1208
PROBLEM:
Solve $\dfrac{dy}{dx} = xy+x+y+1$. Hint: Factor the right-hand side.
:::

:::exercise {exercise-1-3-006} number=1.3.6 answered=no src=ch-first-order-ode.tex:1212
PROBLEM:
Solve $xy' = y + 2x^2 y$, where $y(1) = 1$.
:::

:::exercise {exercise-1-3-007} number=1.3.7 answered=no src=ch-first-order-ode.tex:1216
PROBLEM:
Solve $\dfrac{dy}{dx} = \dfrac{y^2+1}{x^2+1}$, for $y(0) = 1$.
:::

:::exercise {exercise-1-3-008} number=1.3.8 answered=no src=ch-first-order-ode.tex:1220
PROBLEM:
Find an implicit solution for $\dfrac{dy}{dx} = \dfrac{x^2+1}{y^2+1}$, for $y(0) = 1$.
:::

:::exercise {exercise-1-3-009} number=1.3.9 answered=no src=ch-first-order-ode.tex:1225
PROBLEM:
Find an explicit solution for $y' = xe^{-y}$, $y(0)=1$.
:::

:::exercise {exercise-1-3-010} number=1.3.10 answered=no src=ch-first-order-ode.tex:1229
PROBLEM:
Find an explicit solution for $xy' = e^{-y}$, for $y(1)=1$.
:::

:::exercise {exercise-1-3-011} number=1.3.11 answered=no src=ch-first-order-ode.tex:1233
PROBLEM:
Find an explicit solution for $y' = ye^{-x^2}$, $y(0)=1$. It is alright to leave a definite integral in your answer.
:::

:::exercise {exercise-1-3-012} number=1.3.12 answered=no src=ch-first-order-ode.tex:1238
PROBLEM:
Suppose a cup of coffee is at 100 degrees Celsius at time $t=0$, it is at 70 degrees at $t=10$ minutes, and it is at 50 degrees at $t=20$ minutes. Compute the ambient temperature.
:::

:::exercise {exercise-1-3-101} number=1.3.101 answered=yes src=ch-first-order-ode.tex:1246
PROBLEM:
Solve $y'=2xy$.
SOLUTION:
$y = Ce^{x^2}$
:::

:::exercise {exercise-1-3-102} number=1.3.102 answered=yes src=ch-first-order-ode.tex:1253
PROBLEM:
Solve $x'=3xt^2-3t^2$, $x(0)=2$.
SOLUTION:
$x = e^{t^3}+1$
:::

:::exercise {exercise-1-3-103} number=1.3.103 answered=yes src=ch-first-order-ode.tex:1260
PROBLEM:
Find an implicit solution for $x'=\dfrac{1}{3x^2+1}$, $x(0)=1$.
SOLUTION:
$x^3+x=t+2$
:::

:::exercise {exercise-1-3-104} number=1.3.104 answered=yes src=ch-first-order-ode.tex:1268
PROBLEM:
Find an explicit solution to $x y' = y^2$, $y(1) = 1$.
SOLUTION:
$y = \frac{1}{1-\ln x}$
:::

:::exercise {exercise-1-3-105} number=1.3.105 answered=yes src=ch-first-order-ode.tex:1275
PROBLEM:
Find an implicit solution to $y' = \dfrac{\sin(x)}{\cos(y)}$.
SOLUTION:
$\sin(y) = -\cos(x) + C$
:::

:::exercise {exercise-1-3-106} number=1.3.106 answered=yes src=ch-first-order-ode.tex:1282
PROBLEM:
Take [Example 1.3.3](ref:sep-coffeeexample) with the same numbers: 89 degrees at $t=0$, 85 degrees at $t=1$, and ambient temperature of 22 degrees. Suppose these temperatures were measured with a precision of $\pm 0.5$ degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.
SOLUTION:
The range is approximately 7.45 to 12.15 minutes.
:::

:::exercise {exercise-1-3-107} number=1.3.107 answered=yes src=ch-first-order-ode.tex:1295
PROBLEM:
A population $x$ of rabbits on an island is modeled by $x' = x- \bigl({1}/{1000} \bigr) x^2$, where the independent variable $t$ is time in months. At time $t=0$, there are 40 rabbits on the island.

a) Find the solution to the equation with the initial condition.
b) How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer)?

SOLUTION:
a) $x = \frac{1000e^t}{e^t+24}$. b) 102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.
:::

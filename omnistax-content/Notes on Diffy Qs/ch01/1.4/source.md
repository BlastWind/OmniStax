# 1.4 Linear equations and the integrating factor {sec:intfactor-section}

:::note [section-notes]
*Note: 1 lecture, §1.5 in [EP](cite:EP), §2.1 in [BD](cite:BD)*
:::

*Linear equations{index-entry:linear equation}* are one of the most important types of equations we will learn to solve. In fact, the majority of the course is about linear equations. In this section, we focus on the *{index:first-order linear equation}*. A first-order equation is linear if we can put it into the form:
$$ y' + p(x) y = f(x) . $$ {eq:lineq-eq1} number=1.3
The word “linear” means linear in $y$ and $y'$: No higher powers or functions of $y$ or $y'$ appear. The dependence on $x$ can be more complicated.

Solutions of linear equations have nice properties. For example, the solution exists wherever $p(x)$ and $f(x)$ are continuous, and it has essentially the same regularity (read: it is just as nice). Most importantly for us right now, there is a method for solving linear first-order equations.

The trick is to rewrite the left-hand side of [(1.3)](ref:lineq-eq1) as a derivative of a product of $y$ with another function. To this end, we wish to find a function $r(x)$ such that
$$ r(x) y' + r(x) p(x) y = \frac{d}{dx}\Bigl[ r(x) y \Bigr] . $$
This is the left-hand side of [(1.3)](ref:lineq-eq1) multiplied by $r(x)$. If we multiply [(1.3)](ref:lineq-eq1) by $r(x)$, we obtain
$$ \frac{d}{dx}\Bigl[ r(x) y \Bigr] = r(x)f(x) . $$
We can now integrate both sides, which we can do as the right-hand side does not depend on $y$ and the left-hand side is written as a derivative of a function. After the integration, we solve for $y$ by dividing by $r(x)$. The function $r(x)$ is called the *{index:integrating factor}* and the method is called the *{index:integrating factor method}*.

We are looking for a function $r(x)$, such that if we differentiate it, we get the same function back multiplied by $p(x)$. That seems like a job for the exponential function! Let
$$ r(x) = e^{\int p(x) \,dx} , $$
where $\int p(x)\, dx$ is any antiderivative of $p(x)$. We compute:
$$ \begin{aligned} y' + p(x) y &= f(x) , \\ e^{\int p(x) \,dx} y' + e^{\int p(x) \,dx} p(x) y & = e^{\int p(x) \,dx} f(x) , \\ \frac{d}{dx}\left[ e^{\int p(x) \,dx} y \right] & = e^{\int p(x) \,dx} f(x) , \\ e^{\int p(x) \,dx} y & = \int e^{\int p(x) \,dx} f(x) \,dx + C , \\ y & = e^{-\int p(x) \,dx} \left( \int e^{\int p(x) \,dx} f(x) \,dx + C \right) . \end{aligned} $$

Of course, to get a closed-form formula for $y$, we need to be able to find a closed-form formula for the integrals appearing above.

:::example {ex:example-1-4-1} Example 1.4.1
Solve
$$ y' + 2xy = e^{x-x^2}, \qquad y(0) = -1 . $$

First note that $p(x) = 2x$ and $f(x) = e^{x-x^2}$. The integrating factor is $r(x) = e^{\int p(x)\, dx} = e^{x^2}$. We multiply both sides of the equation by $r(x)$ to get
$$ \begin{aligned} e^{x^2} y' + 2xe^{x^2}y & = e^{x^2} e^{x-x^2} , \\ \frac{d}{dx} \left[ e^{x^2} y \right] &= e^x . \end{aligned} $$
We integrate
$$ \begin{aligned} e^{x^2} y &= e^x +C , \\ y &= e^{x-x^2} + C e^{-x^2} . \end{aligned} $$
Next, we solve for the initial condition $-1 = y(0) = 1 + C$, so $C=-2$. The solution is
$$ y = e^{x-x^2} - 2 e^{-x^2} . $$

:::

Note that we do not care which antiderivative we take when computing $e^{\int p(x) \, dx}$. You can always add a constant of integration, but those constants will not matter in the end.

:::exercise {exercise-1-4-001} number=1.4.1 answered=no src=ch-first-order-ode.tex:1423
PROBLEM:
Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.
:::

Advice: Do not try to remember the formula for $y$ itself—that is way too hard. It is easier to remember the process and repeat it.

Since we cannot always evaluate the integrals in closed form, it is useful to know how to write the solution in definite integral form. A definite integral is something that you can plug into a computer or a calculator. Suppose we are given
$$ y' + p(x) y = f(x) , \qquad y(x_0) = y_0 . $$
Look at the solution and write the integrals as definite integrals.
$$ \boxed{~~ y(x) = e^{-\int_{x_0}^x p(s)\, ds} \left( \int_{x_0}^x e^{\int_{x_0}^t p(s)\, ds} f(t) \,dt + y_0 \right). ~~} $$ {eq:lei-defsol} number=1.4
You should be careful to properly use dummy variables here. If you now plug such a formula into a computer or a calculator, it will be happy to give you numerical answers.

:::exercise {exercise-1-4-002} number=1.4.2 answered=no src=ch-first-order-ode.tex:1454
PROBLEM:
Check that $y(x_0) = y_0$ in formula [(1.4)](ref:lei-defsol).
:::

:::exercise {exercise-1-4-003} number=1.4.3 answered=no src=ch-first-order-ode.tex:1458
PROBLEM:
Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.
$$ y' + y = e^{x^2-x}, \qquad y(0) = 10 . $$

:::

:::remark {rem:remark-1-4-1} Remark 1.4.1
Before we move on, we should note some interesting properties of linear equations. First, for the linear initial value problem $y' + p(x) y = f(x)$, $y(x_0) = y_0$, there is an explicit formula [(1.4)](ref:lei-defsol) for the solution. Second, it follows from the formula [(1.4)](ref:lei-defsol) that if $p(x)$ and $f(x)$ are continuous on some interval $(a,b)$, then the solution $y(x)$ exists and is differentiable on $(a,b)$. Compare with the simple nonlinear example we have seen previously, $y'=y^2$, and compare to [Theorem 1.2.1](ref:1.2#slope-picardthm).
:::

:::example {ex:example-1-4-2} Example 1.4.2
We get to a common simple application of linear equations. Real-life applications of this type of problem include computing the concentration of chemicals in bodies of water (rivers and lakes).

> IMAGE {img:lin-tank} src=../../media/lin-tank.svg
> alt: A diagram of a tank of liquid with a pipe showing water flowing into the tank at the top and a pipe showing water leaving at the bottom. The top input is labeled as 5 liters per minute, 0.1 kilograms per liter. The bottom output is labeled as 3 liters per minute. Inside the liquid is labeled as 60 liters and 10 kilograms of salt.

A 100-liter tank contains 10 kilograms of salt dissolved in 60 liters of water. A solution of water and salt (brine) with a concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?

To solve this problem, we need to find the differential equation for this setup. Let $x$ denote the kilograms of salt in the tank, and let $t$ denote the time in minutes. For a small change $\Delta t$ in time, the change in $x$ (denoted $\Delta x$) is approximately
$$ \Delta x \approx (\text{rate in} \times \text{concentration in}) \Delta t - (\text{rate out} \times \text{concentration out}) \Delta t . $$
Dividing through by $\Delta t$ and taking the limit $\Delta t \to 0$, we see that
$$ \frac{dx}{dt} = (\text{rate in} \times \text{concentration in}) - (\text{rate out} \times \text{concentration out}) . $$
In our example,
$$ \begin{aligned} \text{rate in} &= 5 , \\ \text{concentration in} &= 0.1 , \\ \text{rate out} &= 3 , \\ \text{volume} &= \text{initial volume} + (\text{rate in} - \text{rate out})t = 60+(5-3)t, \\ \text{concentration out} &= \frac{x}{\text{volume}} = \frac{x}{60+(5-3)t} . \end{aligned} $$
Our differential equation is
$$ \frac{dx}{dt} = (5 \times 0.1) - \left(3 \frac{x}{60+2t}\right) . $$
In the form [(1.3)](ref:lineq-eq1), it is
$$ \frac{dx}{dt} + \frac{3}{60+2t} x = 0.5 . $$

Let us solve. The integrating factor is
$$ r(t) = \exp \left( \int \frac{3}{60+2t} dt \right) = \exp \left( \frac{3}{2} \ln (60+2t) \right) = {(60+2t)}^{3/2} . $$
We multiply both sides of the equation by $r(t)$ and simplify,
$$ \begin{align*} {(60+2t)}^{3/2} \frac{dx}{dt} + {(60+2t)}^{3/2} \frac{3}{60+2t} x & = 0.5{(60+2t)}^{3/2} ,\\ \frac{d}{dt}\left[ {(60+2t)}^{3/2} x \right] & = 0.5{(60+2t)}^{3/2} .\\ \end{align*} $$
We integrate and solve,
$$ \begin{align*} {(60+2t)}^{3/2} x & = \int 0.5{(60+2t)}^{3/2} dt +C ,\\ x & = {(60+2t)}^{-3/2} \int \frac{ {(60+2t)}^{3/2} }{2} dt +C{(60+2t)}^{-3/2} ,\\ x & = {(60+2t)}^{-3/2} \frac{1}{10}{(60+2t)}^{5/2} +C{(60+2t)}^{-3/2} ,\\ x & = \frac{60+2t}{10} +C{(60+2t)}^{-3/2} . \end{align*} $$

To find $C$, note that at $t=0$, we have $x=10$. That is,
$$ 10 = x(0) = \frac{60}{10} +C{(60)}^{-3/2} = 6 +C{(60)}^{-3/2} , $$
or
$$ C=4 ({60}^{3/2}) \approx 1859.03 . $$

As $5$ liters per minute are flowing in and $3$ liters per minute are flowing out, the volume is increasing by $2$ liters a minute. So the tank is full when $60+2t = 100$, or when $t=20$. We want the value of $x$ when the tank is full, that is, we compute $x(20)$:
$$ \begin{split} x(20) & = \frac{60+40}{10} +C{(60+40)}^{-3/2} \\ & \approx 10 +1859.03 {(100)}^{-3/2} \approx 11.86 . \end{split} $$
There are 11.86 kg of salt in the tank when it is full. See [Figure 1.10](ref:linear-salt-graph-fig) for the graph of $x(t)$. The concentration when the tank is full is approximately ${11.86}/{100} = 0.1186\,\mathrm{kg}/\mathrm{liter}$, and we started with ${1}/{6}$ or approximately 0.1667 kg/liter.

> FIGURE {fig:linear-salt-graph-fig} number=1.10 src=../../media/linear-salt-graph.svg
> alt: A graph of a solution from t equals 0 to t equals 20 starting at 10 and then rising, at first slowly then speeding up and ending at roughly 11.86 at the right-hand side.
> width: 4.5in
> caption: Graph of the solution $x$ kilograms of salt in the tank at time $t$.

:::

## Exercises

In the exercises, feel free to leave the answer as a definite integral if a closed-form solution cannot be found. If you can find a closed-form solution, you should give that.

:::exercise {exercise-1-4-004} number=1.4.4 answered=no src=ch-first-order-ode.tex:1667
PROBLEM:
Solve $y' + xy = x$.
:::

:::exercise {exercise-1-4-005} number=1.4.5 answered=no src=ch-first-order-ode.tex:1671
PROBLEM:
Solve $y' + 6y = e^x$.
:::

:::exercise {exercise-1-4-006} number=1.4.6 answered=no src=ch-first-order-ode.tex:1675
PROBLEM:
Solve $y' + 3x^2y = \sin(x) \, e^{-x^3}$, with $y(0) = 1$.
:::

:::exercise {exercise-1-4-007} number=1.4.7 answered=no src=ch-first-order-ode.tex:1679
PROBLEM:
Solve $y' + \cos (x) y = \cos(x)$.
:::

:::exercise {exercise-1-4-008} number=1.4.8 answered=no src=ch-first-order-ode.tex:1683
PROBLEM:
Solve $\frac{1}{x^2+1} \, y' + x y = 3$, with $y(0) = 0$.
:::

:::exercise {exercise-1-4-009} number=1.4.9 answered=no src=ch-first-order-ode.tex:1687
PROBLEM:
Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with 500 kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.

a) Find the concentration of toxic substance as a function of time in both lakes.
b) When will the concentration in the first lake be below 0.001 kg per liter?
c) When will the concentration in the second lake be maximal?

:::

:::exercise {exercise-1-4-010} number=1.4.10 answered=no src=ch-first-order-ode.tex:1708
PROBLEM:
{index:Newton’s law of cooling} states that $\frac{dx}{dt} = -k(x-A)$ where $x$ is the temperature, $t$ is time, $A$ is the ambient temperature, and $k > 0$ is a constant. Suppose that $A = A_0 \cos (\omega t)$ for some constants $A_0$ and $\omega$. That is, the ambient temperature oscillates (for example night and day temperatures).

a) Find the general solution.
b) In the long term, will the initial conditions make much of a difference? Why or why not?

:::

:::exercise {exercise-1-4-011} number=1.4.11 answered=no src=ch-first-order-ode.tex:1722
PROBLEM:
Initially 5 grams of salt are dissolved in 20 liters of water. Brine with a salt concentration of 2 grams per liter is added at a rate of 3 liters a minute. The tank is mixed well and is drained at 3 liters a minute. How long does the process have to continue until there are 20 grams of salt in the tank?
:::

:::exercise {exercise-1-4-012} number=1.4.12 answered=no src=ch-first-order-ode.tex:1730
PROBLEM:
Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?
:::

:::exercise {exercise-1-4-101} number=1.4.101 answered=yes src=ch-first-order-ode.tex:1741
PROBLEM:
Solve $y'+3 x^2 y = x^2$.
SOLUTION:
$y = C e^{-x^3} + {1}/{3}$
:::

:::exercise {exercise-1-4-102} number=1.4.102 answered=yes src=ch-first-order-ode.tex:1748
PROBLEM:
Solve $y'+ 2\sin(2x) y = 2\sin(2x)$, $y({\pi}/{2}) = 3$.
SOLUTION:
$y = 2 e^{\cos(2x)+1} + 1$
:::

:::exercise {exercise-1-4-103} number=1.4.103 answered=yes src=ch-first-order-ode.tex:1755
PROBLEM:
Suppose a water tank is being pumped out at 3 L/min. The water tank starts at 10 L of clean water. Water with a toxic substance is flowing into the tank at 2 L/min, with concentration $20t$ g/L at time $t$. When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?
SOLUTION:
$250$ grams
:::

:::exercise {exercise-1-4-104} number=1.4.104 answered=yes src=ch-first-order-ode.tex:1768
PROBLEM:
There are bacteria on a plate and a toxic substance is being added that slows down the rate of growth of the bacteria. That is, suppose that $\frac{dP}{dt} = (2-0.1\,t)P$. If $P(0) = 1000$, find the population at $t=5$.
SOLUTION:
$P(5) = 1000 e^{2 \times 5 - 0.05 \times {5}^2} = 1000 e^{8.75} \approx 6.31 \times {10}^6$
:::

:::exercise {exercise-1-4-105} number=1.4.105 answered=yes src=ch-first-order-ode.tex:1780
PROBLEM:
A cylindrical water tank has water flowing in at $I$ cubic meters per second. Let $A$ be the area of the cross section of the tank in square meters. Suppose water is flowing out from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for $h$, the height of the water, introducing and naming constants that you need. You should also give the units for your constants.
SOLUTION:
$Ah' = I - kh$, where $k$ is a constant with units $\mathrm{m^2}/\mathrm{s}$.
:::

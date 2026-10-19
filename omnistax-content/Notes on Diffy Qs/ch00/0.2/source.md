# 0.2 Introduction to differential equations {sec:introde-section}

:::note [section-notes]
*Note: more than 1 lecture, §1.1 in [EP](cite:EP), chapter 1 in [BD](cite:BD)*
:::

## Differential equations

The laws of physics are generally written down as differential equations. Therefore, all of science and engineering uses differential equations to some degree. Differential equations are essential to understanding almost anything you will study in your science and engineering classes. You can think of mathematics as the language of science, and differential equations are one of the most important parts of this language as far as science and engineering are concerned. As an analogy, suppose all your classes from now on were given in Swahili. It would be important to first learn Swahili, or you would have a very tough time getting a good grade in your classes.

A *{index:differential equation}* is simply an equation that involves not only an unknown variable, but also its derivatives. You have seen and even solved many differential equations already in calculus perhaps without knowing about it. Here is an example you may not have seen:
$$ \frac{dx}{dt} + x = 2 \cos t . $$ {eq:eq1} number=1
The unknown, $x$, is the *{index:dependent variable}* and $t$ is the *{index:independent variable}*. That is, $x$ is a function of $t$. Equation [(1)](ref:eq1) is an example of a *{index:first-order differential equation}*, since it involves only the first derivative of the dependent variable. This equation arises from Newton’s law of cooling where the ambient temperature oscillates with time.

## Solutions of differential equations

Solving the differential equation [(1)](ref:eq1) means finding $x$ in terms of $t$. That is, we want to find a function of $t$, which we call $x$, such that when we plug $x$, $t$, and $\frac{dx}{dt}$ into [(1)](ref:eq1), the equation holds; that is, the left-hand side equals the right-hand side. It is the same idea as it would be for a normal (algebraic) equation of just $x$ and $t$. We claim that
$$ x = x(t) = \cos t + \sin t $$
is a *{index:solution}*. How do we check? We simply plug $x$ into equation [(1)](ref:eq1)! First we need to compute $\frac{dx}{dt}$. We find that $\frac{dx}{dt} = -\sin t + \cos t$. Now let us compute the left-hand side of [(1)](ref:eq1).
$$ \frac{dx}{dt} + x = \underbrace{(-\sin t + \cos t)}_{\frac{dx}{dt}} + \underbrace{(\cos t + \sin t)}_{x} = 2\cos t . $$
Yay! We got precisely the right-hand side. But there is more! We claim $x = \cos t + \sin t + e^{-t}$ is also a solution. Let us try,
$$ \frac{dx}{dt} = -\sin t + \cos t - e^{-t} . $$
We plug into the left-hand side of [(1)](ref:eq1)
$$ \frac{dx}{dt} + x = \underbrace{(-\sin t + \cos t - e^{-t})}_{\frac{dx}{dt}} + \underbrace{(\cos t + \sin t + e^{-t})}_{x} = 2\cos t . $$
And it works yet again!

So there can be many different solutions. For this equation, all solutions can be written in the form
$$ x = \cos t + \sin t + C e^{-t} , $$
for some constant $C$. Different constants $C$ will give different solutions, so there are really infinitely many possible solutions. See [Figure 1](ref:intro-plotsfig) for the graph of a few of these solutions. We will see how we find these solutions in a later section.

> FIGURE {fig:intro-plotsfig} number=1 src=../../media/intro-plots-alt.svg
> alt: A plot with 3 graphs that start at the left-hand side at different places, one at 3, one at 1, and one at minus 1. All three lines tend towards each other and tend closer to what looks like a sine wave.
> width: 4.5in
> caption: A few solutions of $\frac{dx}{dt} + x = 2 \cos t$.

Solving differential equations can be quite hard. There is no general method that solves every differential equation. We will generally focus on how to get exact formulas for solutions of certain differential equations, but we will also spend a little bit of time on getting approximate solutions. And we will spend some time on understanding the equations without solving them.

Most of this book is dedicated to *ordinary differential equations{index-entry:ordinary differential equation}* or ODEs{index-entry:ODE}, that is, equations with only one independent variable, where derivatives are only with respect to this one variable. If there are several independent variables, we get *partial differential equations{index-entry:partial differential equation}* or PDEs{index-entry:PDE}.

Even for ODEs, which are very well understood, it is not a simple question of turning a crank to get solutions. When you can find exact solutions, they are usually preferable to approximate solutions. It is important to understand how such solutions are found. Although in real applications you will leave many of the actual calculations to computers, you need to understand what they are doing. It is often necessary to simplify or transform your equations into something that a computer can understand and solve. You may even need to make certain assumptions and changes in your model to achieve this.

To be a successful engineer or scientist, you will be required to solve problems in your job that you have never seen before. It is important to learn problem solving techniques, so that you may apply those techniques to new problems. A common mistake is to expect to learn some prescription for solving all the problems you will encounter in your later career. This course is no exception.

## Differential equations in practice

> IMAGE {img:1-1-fig} src=../../media/1-1-fig.svg
> alt: A diagram connecting three terms on top is 'Real-world problem', then an arrow marked 'abstract' connects to 'Mathematical model', then an arrow marked 'solve' connects to 'Mathematical solution', and finally an arrow marked 'interpret' connects back to the first term.

How do we use differential equations in science and engineering? First, we have some *{index:real-world problem}* we wish to understand. We make some simplifying assumptions and create a *{index:mathematical model}*. That is, we translate the real-world situation into a differential equation (or equations). Then we use mathematics to get some sort of a *{index:mathematical solution}*. There is still something left to do. We must interpret the results. We have to figure out what the mathematical solution says about the real-world problem we started with.

Formulating the mathematical model and interpreting the results is what you do in your physics and engineering classes. In this course, we focus mostly on the mathematical analysis. Sometimes we will work with simple real-world examples to have some intuition and motivation about what we are doing. Let us look at an example of the entire process.

:::example {ex:example-0-2-1} Example 0.2.1
One of the most basic differential equations is the *{index:exponential growth model}*. Let $P$ denote the population of some bacteria on a Petri dish. We assume that there is enough food and enough space. Then the rate of growth of the bacteria is proportional to the population—a larger population grows faster. Let $t$ denote time (say in seconds) and $P$ the population. Our model is
$$ \frac{dP}{dt} = kP , $$
for some positive constant $k > 0$.

Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?

First we need to solve the equation. We claim that a solution is given by
$$ P(t) = C e^{kt} , $$
where $C$ is a constant. Let us try:
$$ \frac{dP}{dt} = C k e^{kt} = k P . $$
And it really is a solution.

OK, now what? We do not know $C$, and we do not know $k$. But we know something. We know $P(0) = 100$, and we know $P(10) = 200$. We plug these conditions in and see what happens:
$$ \begin{align*} & 100 = P(0) = C e^{k0} = C, \quad \text{so} \quad C=100,\\ & 200 = P(10) = C e^{k10} = 100 \, e^{k10} . \end{align*} $$
Therefore, $2 = e^{10k}$ or $k = \frac{\ln 2}{10} \approx 0.069$. So
$$ P(t) = 100 \, e^{(\ln 2) t / 10} \approx 100 \, e^{0.069 t} . $$
At one minute, $t=60$, the population is $P(60) = 6400$. See [Figure 2](ref:intro-plotbactfig).

> FIGURE {fig:intro-plotbactfig} number=2 src=../../media/intro-plotbact.svg
> alt: Graph of an exponential growth function (an upward concave curve that is steeper and steeper as we go rightwards) starting at 100 on the left-hand side and ending at 6400 on the right-hand side.
> width: 4.5in
> caption: Bacteria growth in the first 60 seconds.

Let us interpret the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60 seconds? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life $P$ is a discrete quantity, that is, a whole number. However, our model has no problem saying that for example at 61 seconds, $P(61) \approx 6859.35$.
:::

Normally, the $k$ in $\frac{dP}{dt} = kP$ is given, and we want to solve the equation for some *{index:initial condition}*. For example, the problem could be: Solve the equation $\frac{dP}{dt} = P$ (so $k=1$) subject to $P(0) = 1000$ (the initial condition). Then the solution is (exercise)
$$ P(t) = 1000 \, e^t . $$
We call $P(t) = C e^t$ *the {index:general solution}*, as every solution of the equation can be written in this form for some constant $C$. We need an initial condition to find out what $C$ is, in order to find the *{index:particular solution}* we are looking for, in this case, $P(t) = 1000\, e^t$. Generally, when we say “particular solution,” we just mean some solution.

In real life, parameters such as $k$ must often first be somehow computed or estimated. The example above shows how finding an analytic solution to the differential equation is useful in finding these parameters.

## Four fundamental equations {sec:subsection-fourfundamental}

A few equations appear often and it is useful to just memorize what their solutions are. Let us call them the {index:four fundamental equations}. Their solutions are reasonably easy to guess by recalling properties of exponentials, sines, and cosines. They are also simple to check, which is something that you should always do. No need to wonder if you remembered the solution correctly.

The first such equation is
$$ \frac{dy}{dx} = k y , $$
for some constant $k > 0$. Here $y$ is the dependent and $x$ the independent variable. The general solution for this equation is
$$ y(x) = C e^{kx} . $$
We saw above that this function is a solution, although we used different variable names.

Next, we have
$$ \frac{dy}{dx} = -k y , $$
for some constant $k > 0$. The general solution for this equation is
$$ y(x) = C e^{-kx} . $$

:::exercise {exercise-0-2-001} number=0.2.1 answered=no src=ch-intro.tex:644
PROBLEM:
Check that the $y$ given is really a solution to the equation above.
:::

Next, take the *{index:second-order differential equation}*
$$ \frac{d^2y}{{dx}^2} = -k^2 y , $$
for some constant $k > 0$. The general solution for this equation is
$$ y(x) = C_1 \cos(kx) + C_2 \sin(kx) . $$
Since the equation is a second-order differential equation, we have two constants in our general solution.

:::exercise {exercise-0-2-002} number=0.2.2 answered=no src=ch-intro.tex:661
PROBLEM:
Check that the $y$ given is really a solution to the equation above.
:::

Finally, consider the second-order differential equation
$$ \frac{d^2y}{{dx}^2} = k^2 y , $$
for some constant $k > 0$. The general solution for this equation is
$$ y(x) = C_1 e^{kx} + C_2 e^{-kx} , $$
or
$$ y(x) = D_1 \cosh(kx) + D_2 \sinh(kx) . $$

For those who do not know, $\cosh$ and $\sinh$ are defined by
$$ \cosh x = \frac{e^{x} + e^{-x}}{2} , \qquad \sinh x = \frac{e^{x} - e^{-x}}{2} . $$
They are called the *{index:hyperbolic cosine}* and *{index:hyperbolic sine}*. These functions are sometimes easier to work with than exponentials. They have some nice familiar properties such as $\cosh 0 = 1$, $\sinh 0 = 0$, and $\frac{d}{dx} \cosh x = \sinh x$ (no, that is not a typo) and $\frac{d}{dx} \sinh x = \cosh x$.

:::exercise {exercise-0-2-003} number=0.2.3 answered=no src=ch-intro.tex:695
PROBLEM:
Check that both forms of the $y$ given are really solutions to the equation above.
:::

:::example {ex:example-0-2-2} Example 0.2.2
In equations of higher order, you get more constants you must solve for to get a particular solution and hence you need more initial conditions. The equation $\frac{d^2y}{dx^2} = 0$ has the general solution $y = C_1 x + C_2$; simply integrate twice and don’t forget about the constants of integration. Consider the initial conditions $y(0) = 2$ and $y'(0) = 3$. We plug in our general solution and solve for the constants:
$$ 2 = y(0) = C_1 \cdot 0 + C_2 = C_2, \qquad 3 = y'(0) = C_1 . $$
In other words, $y = 3x + 2$ is the particular solution we seek.
:::

An interesting note about $\cosh$: The graph of $\cosh$ is the exact shape of a hanging chain. This shape is called a *{index:catenary}*. Contrary to popular belief, this is not a parabola. If you invert the graph of $\cosh$, it is also the ideal arch for supporting its weight—a parabola would not work. For example, per the National Park Service, the exact formula used by the architects of the Gateway Arch in Saint Louis is (a so-called weighted catenary)
$$ y = A\left( \cosh \left( \frac{C}{L} x \right) - 1 \right), \quad \text{where} \quad A=68.7672, C=3.0022, L = 299.2239. $$

## Exercises

:::exercise {exercise-0-2-004} number=0.2.4 answered=no src=ch-intro.tex:744
PROBLEM:
Show that $x = e^{4t}$ is a solution to $x'''-12 x'' + 48 x' - 64 x = 0$.
:::

:::exercise {exercise-0-2-005} number=0.2.5 answered=no src=ch-intro.tex:748
PROBLEM:
Show that $x = e^{t}$ is not a solution to $x'''-12 x'' + 48 x' - 64 x = 0$.
:::

:::exercise {exercise-0-2-006} number=0.2.6 answered=no src=ch-intro.tex:752
PROBLEM:
Is $y = \sin t$ a solution to ${\left( \frac{dy}{dt} \right)}^2 = 1 - y^2$? Justify.
:::

:::exercise {exercise-0-2-007} number=0.2.7 answered=no src=ch-intro.tex:757
PROBLEM:
Let $y'' + 2y' - 8y = 0$. Now try a solution of the form $y = e^{rx}$ for some (unknown) constant $r$. Is this a solution for some $r$? If so, find all such $r$.
:::

:::exercise {exercise-0-2-008} number=0.2.8 answered=no src=ch-intro.tex:763
PROBLEM:
Verify that $x = C e^{-2t}$ is a solution to $x' = -2x$. Find $C$ to solve for the initial condition $x(0) = 100$.
:::

:::exercise {exercise-0-2-009} number=0.2.9 answered=no src=ch-intro.tex:768
PROBLEM:
Verify that $x = C_1 e^{-t} + C_2 e^{2t}$ is a solution to $x'' - x' -2 x = 0$. Find $C_1$ and $C_2$ to solve for the initial conditions $x(0) = 10$ and $x'(0) = 0$.
:::

:::exercise {exercise-0-2-010} number=0.2.10 answered=no src=ch-intro.tex:774
PROBLEM:
Find a solution to ${(x')}^2 + x^2 = 4$ using your knowledge of derivatives of functions that you know from basic calculus.
:::

:::exercise {exercise-0-2-011} number=0.2.11 answered=no src=ch-intro.tex:781
PROBLEM:
Solve:

a) $\dfrac{dA}{dt} = -10 A, \quad A(0)=5$
b) $\dfrac{dH}{dx} = 3 H, \quad H(0)=1$
c) $\dfrac{d^2y}{dx^2} = 4 y, \quad y(0)=0, \quad y'(0)=1$
d) $\dfrac{d^2x}{dy^2} = -9 x, \quad x(0)=1, \quad x'(0)=0$

:::

:::exercise {exercise-0-2-012} number=0.2.12 answered=no src=ch-intro.tex:791
PROBLEM:
Is there a solution to $y' = y$, such that $y(0) = y(1)$?
:::

:::exercise {exercise-0-2-013} number=0.2.13 answered=no src=ch-intro.tex:795
PROBLEM:
The population of city X was 100 thousand 20 years ago, and it was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?
:::

:::exercise {exercise-0-2-014} number=0.2.14 answered=no src=ch-intro.tex:802
PROBLEM:
Suppose that a football coach gets a salary of one million dollars now, and a raise of $10\%$ every year (so exponential model, like population of bacteria). Let $s$ be the salary in millions of dollars, and $t$ is time in years.

a) What are $s(0)$ and $s(1)$?
b) Approximately how many years will it take for the salary to be 10 million?
c) Approximately how many years will it take for the salary to be 20 million?
d) Approximately how many years will it take for the salary to be 30 million?

:::

*Note: Exercises with numbers 101 and higher have solutions.*

:::exercise {exercise-0-2-101} number=0.2.101 answered=yes src=ch-intro.tex:830
PROBLEM:
Show that $x = e^{-2t}$ is a solution to $x'' + 4x' + 4x = 0$.
SOLUTION:
Compute $x' = -2e^{-2t}$ and $x'' = 4e^{-2t}$. Then $(4e^{-2t}) + 4 (-2e^{-2t}) + 4 (e^{-2t}) = 0$.
:::

:::exercise {exercise-0-2-102} number=0.2.102 answered=yes src=ch-intro.tex:838
PROBLEM:
Is $y = x^2$ a solution to $x^2y'' - 2y = 0$? Justify.
SOLUTION:
Yes.
:::

:::exercise {exercise-0-2-103} number=0.2.103 answered=yes src=ch-intro.tex:845
PROBLEM:
Let $xy'' - y' = 0$. Try a solution of the form $y = x^r$. Is this a solution for some $r$? If so, find all such $r$.
SOLUTION:
$y=x^r$ is a solution for $r=0$ and $r=2$.
:::

:::exercise {exercise-0-2-104} number=0.2.104 answered=yes src=ch-intro.tex:854
PROBLEM:
Verify that $x=C_1e^t+C_2$ is a solution to $x''-x' = 0$. Find $C_1$ and $C_2$ so that $x$ satisfies $x(0) = 10$ and $x'(0) = 100$.
SOLUTION:
$C_1 = 100$, $C_2 = -90$
:::

:::exercise {exercise-0-2-105} number=0.2.105 answered=yes src=ch-intro.tex:862
PROBLEM:
Solve $\frac{d\varphi}{ds} = 8 \varphi$ and $\varphi(0) = -9$.
SOLUTION:
$\varphi = -9 e^{8s}$
:::

:::exercise {exercise-0-2-106} number=0.2.106 answered=yes src=ch-intro.tex:869
PROBLEM:
Solve:

a) $\dfrac{dx}{dt} = -4x, \quad x(0)=9$
b) $\dfrac{d^2x}{dt^2} = -4x, \quad x(0)=1, \quad x'(0)=2$
c) $\dfrac{dp}{dq} = 3 p, \quad p(0)=4$
d) $\dfrac{d^2T}{dx^2} = 4 T, \quad T(0)=0, \quad T'(0)=6$

SOLUTION:
a) $x=9e^{-4t}$ b) $x=\cos(2t)+\sin(2t)$ c) $p=4e^{3q}$ d) $T=3\sinh(2x)$
:::

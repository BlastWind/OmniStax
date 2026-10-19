# 1.7 Numerical methods: Euler’s method {sec:numer-section}

:::note [section-notes]
*Note: 1 lecture, can safely be skipped, §2.4 in [EP](cite:EP), §8.1 in [BD](cite:BD)*
:::

Unless $f(x,y)$ is of a special form, it is generally very hard if not impossible to get a nice formula for the solution of the problem
$$ y' = f(x,y), \qquad y(x_0) = y_0 . $$

If the equation can be solved in closed form, we should do that. But what if we have an equation that cannot be solved in closed form? What if we want to find the value of the solution at some particular $x$? Or perhaps we want to produce a graph of the solution to inspect the behavior. In this section we will learn about the basics of numerical approximation of solutions.

The simplest method for approximating a solution is *{index:Euler’s method}^[Named after the Swiss mathematician [Leonhard Paul Euler](https://en.wikipedia.org/wiki/Euler) (1707–1783). The correct pronunciation of the name sounds more like “oiler.”]*. It works as follows: Take $x_0$ and $y_0$ and compute the slope $k = f(x_0,y_0)$. The slope is the change in $y$ per unit change in $x$. Follow the line for an interval of length $h$ on the $x$-axis. We call $h$ the *{index:step size}*. Hence if $y = y_0$ at $x_0$, then we say that $y_1$, the approximate value of $y$ at $x_1 = x_0 + h$, is $y_1 = y_0 + h k$. Rinse, repeat! Let $k = f(x_1,y_1)$, and then compute $x_2 = x_1 + h$ and $y_2 = y_1 + h k$. Now compute $x_3$ and $y_3$ using $x_2$ and $y_2$, etc. Consider the equation $y' = {y^2}/{3}$, $y(0)=1$, and $h=1$. Then $x_0=0$ and $y_0 = 1$. We compute
$$ \begin{align*} & x_1 = x_0 + h = 0 + 1 = 1, & & y_1 = y_0 + h \, f(x_0,y_0) = 1 + 1 \cdot {1}/{3} = {4}/{3} \approx 1.333,\\ & x_2 = x_1 + h = 1 + 1 = 2, & & y_2 = y_1 + h \, f(x_1,y_1) = {4}/{3} + 1 \cdot \frac{{({4}/{3})}^2}{3} = {52}/{27} \approx 1.926. \end{align*} $$
We draw an approximate graph of the solution by connecting the points $(x_0,y_0)$, $(x_1,y_1)$, $(x_2,y_2)$,…. See [Figure 1.16](ref:euler-step12-fig) for the first two steps of the method.

> FIGURE {fig:euler-step12-fig} number=1.16 src=../../media/euler-steps-1-2.svg
> alt: Two plots in the xy-plane of a slope field with slopes y squared over 3 in the region where x is between minus 1 and 3 and y is between 0 and 3. All the slopes are upwards with the ones further up being steeper. In the left plot, the first step of Euler's method is shown as a green line starting at (0,1) of slope 1 over 3, which is the slope at (0,1) and going right until x equals 1. In the right plot, a second line is added starting at the end of the first line with slope equal to the slope of the slope field and going further right until x equals 2.
> width: 9in
> caption: First two steps of Euler’s method with $h=1$ for the equation $y' = \frac{y^2}{3}$ with initial condition $y(0)=1$.

We can continue along: For any $i=0,1,2,3,\ldots$, we compute
$$ x_{i+1} = x_i + h , \qquad y_{i+1} = y_i + h\, f(x_i,y_i) . $$
The line segments we get are an approximate graph of the solution. In particular, $y_i$ is the approximation of $y(x_i)$. Generally it is not exactly the solution. See [Figure 1.17](ref:euler-step12-sol-fig) for the plot of the real solution and the approximation.

> FIGURE {fig:euler-step12-sol-fig} number=1.17 src=../../media/euler-step12-sol.svg
> alt: A plot in the xy-plane of a slope field with slopes y squared over 3 in the region where x is between minus 1 and 3 and y is between 0 and 3. The first two steps are shown the two green line segments as before, but also the solution through (0,1) is drawn in red, which is curved upwards and follows the slope field. We can see that it stays above the green line segments.
> width: 4.5in
> caption: Two steps of Euler’s method (step size 1) and the exact solution for the equation $y' = \frac{y^2}{3}$ with initial condition $y(0)=1$.

We continue with the example $y' = {y^2}/{3}$, $y(0)=1$. We have approximated $y(2)$ with Euler’s method with step size 1. We conclude that $y(2)$ is approximately $y_2$, that is, $y(2) \approx 1.926$. The real answer is 3. We are off by roughly 1.074. The difference between the actual solution and the approximate solution is called the error. We usually talk about the size of the error and we do not care much about its sign.
$$ \text{Error} = \bigl\lvert \text{Actual } y - \text{Approximate } y \bigr\rvert . $$
We usually do not know the error exactly. If we knew the error exactly, we would know the actual solution …so what is the point of doing the approximation?

:::exercise {exercise-1-7-001} number=1.7.1 answered=no src=ch-first-order-ode.tex:2680
PROBLEM:
Solve the problem $y' = {y^2}/{3}$, $y(0)=1$ exactly and show that $y(2) = 3$.
:::

Let us now halve the step size to $h=0.5$ to, hopefully, improve the approximation. With half the step size, we do twice as many steps. Here, to find $y(2)$, we do 4 steps with $h=0.5$ as then $2 = x_4$. Computing $y_4$, we find $y(2) \approx 2.209$. An error of about 0.791. [Table 1.1](ref:euler-table-table) gives the values computed, for a few more halvings.

> TABLE {tab:euler-table-table} number=1.1 cols=5
> caption: Euler’s method approximation of $y(2)$ for $y'={y^2}/{3}$, $y(0)=1$.
| $h$ | Approximate $y(2)$ | Error | $\frac{\text{Error}}{\text{Previous error}}$ | Steps done |
| --- | --- | --- | --- | --- |
| 1 | 1.92593 | 1.07407 | | 2 |
| 0.5 | 2.20861 | 0.79139 | 0.73681 | 4 |
| 0.25 | 2.47250 | 0.52751 | 0.66656 | 8 |
| 0.125 | 2.68034 | 0.31966 | 0.60599 | 16 |
| 0.0625 | 2.82040 | 0.17960 | 0.56184 | 32 |
| 0.03125 | 2.90412 | 0.09588 | 0.53385 | 64 |
| 0.015625 | 2.95035 | 0.04965 | 0.51779 | 128 |
| 0.0078125 | 2.97472 | 0.02528 | 0.50913 | 256 |

Note that except for the first few times, each time we halve the $h$, the error approximately halves. Halving of the error is a general feature of Euler’s method as it is a *{index:first-order method}*. A simple improvement of the Euler method (see the exercises) produces a {index:second-order method}. A second-order method reduces the error to approximately one quarter every time we halve the step size. The order being “second” means the squaring in ${1}/{4} = {1}/{2} \times {1}/{2} = {({1}/{2})}^2$.

To get the error to be less than 0.1, we did 64 steps. To get it below 0.01, we would have to halve another three or four times, doing 512 or 1024 steps. The improved Euler method from the exercises should quarter the error every time we halve the step size, so we would have to do (approximately) half as many “halvings” to get the same error. This reduction can be a big deal. With 10 halvings (starting at $h=1$) we have 1024 steps, whereas with 5 halvings we only have to do 32 steps, assuming that the error was comparable to start with. A computer may not care about this difference for a problem this simple, but suppose each step would take a second to compute (the function may be substantially more difficult to compute than ${y^2}/{3}$). Then the difference is 32 seconds versus about 17 minutes. We are not being altogether fair; a second-order method would probably double the time to do each step. Even so, it is 1 minute versus 17 minutes. Next, suppose that we have to repeat such a calculation for different parameters a thousand times. You get the idea.

In practice, we do not know how large the error is! How do we know what is the right step size? One possibility is that we keep halving the step size, and if we are lucky, we can estimate the error from a few of these calculations and the assumption that the error halves each time (if we are using standard Euler).

:::exercise {exercise-1-7-002} number=1.7.2 answered=no src=ch-first-order-ode.tex:2772
PROBLEM:
In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error halves. Can you estimate the error in the last line from this information? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table? Feel free to assume that the real value of $y(2)$ is bigger than any of the approximate values, but you are not allowed to know the real value.
:::

Let us talk a little bit more about the example $y' = {y^2}/{3}$, $y(0) = 1$. Suppose that instead of $y(2)$, we wish to find $y(3)$. [Table 1.2](ref:euler-table2-table) lists the results of this effort for successive halvings of $h$. What is going on here? Well, you should solve the equation exactly and you will notice that the solution does not exist at $x=3$. In fact, the solution goes to infinity when you approach $x=3$.

> TABLE {tab:euler-table2-table} number=1.2 cols=2
> caption: Attempts to use Euler’s to approximate $y(3)$ for $y'={y^2}/{3}$, $y(0)=1$.
| $h$ | Approximate $y(3)$ |
| --- | --- |
| 1 | 3.16232 |
| 0.5 | 4.54329 |
| 0.25 | 6.86079 |
| 0.125 | 10.80321 |
| 0.0625 | 17.59893 |
| 0.03125 | 29.46004 |
| 0.015625 | 50.40121 |
| 0.0078125 | 87.75769 |

Another case where things go bad is if the solution oscillates wildly near some point. The solution may exist at all points, but even a much better numerical method than Euler would need an insanely small step size to approximate the solution with reasonable precision. And computers might not be able to easily handle such a small step size.

In real applications, we would not use a simple method such as Euler’s. The simplest method one would probably use in a real application is the standard Runge–Kutta method (see exercises). That is a {index:fourth-order method}, meaning that if we halve the step size, the error gets multiplied by ${1}/{16}$ (it is fourth-order as ${1}/{16} = {1}/{2} \times {1}/{2} \times {1}/{2} \times {1}/{2}$).

Choosing the right method to use and the right step size can be very tricky. There are several competing factors to consider.

- Computational time: Each step takes computer time. Even if the function $f$ is simple to compute, we do it many times over. Large step size (fewer steps) means faster computation, but perhaps not the right precision.
- Roundoff errors: Computers only compute with a certain number of significant digits. Errors introduced by rounding numbers during computations become noticeable when the step size becomes too small relative to the quantities we are working with. So reducing step size too much may make errors worse. There is a certain optimum step size where the precision increases as we approach it, but then starts getting worse as we make our step size smaller still. The trouble is that this optimum may be hard to find.
- Stability: Certain equations may be numerically unstable. What may happen is that the numbers never seem to stabilize no matter how many times we halve the step size. We may need a ridiculously small step size, which may not be practical due to roundoff errors or computational time considerations. Such problems are sometimes called *stiff*{index-entry:stiff problem}. In the worst case, the numerical computations might be giving us bogus numbers that look like a correct answer. Just because the numbers seem to have stabilized after successive halving, does not mean that we must have the right answer.

We have seen just the beginnings of the challenges that appear in real applications. Numerical approximation of solutions to differential equations is an active research area for engineers and mathematicians. For example, the general-purpose method used for the ODE solver in Matlab and Octave (as of this writing) is a method that appeared in the literature only in the 1980s.

## Exercises

:::exercise {exercise-1-7-003} number=1.7.3 answered=no src=ch-first-order-ode.tex:2875
PROBLEM:
Consider $\dfrac{dx}{dt} = {(2t-x)}^2$, $x(0)=2$. Use Euler’s method with step size $h=0.5$ to approximate $x(1)$.
:::

:::exercise {exercise-1-7-004} number=1.7.4 answered=no src=ch-first-order-ode.tex:2881
PROBLEM:
Consider $\dfrac{dx}{dt} = t-x$, $x(0)=1$.

a) Use Euler’s method with step sizes $h = 1, {1}/{2}, {1}/{4}, {1}/{8}$ to approximate $x(1)$.
b) Solve the equation exactly.
c) Describe what happens to the errors for each $h$ you used. That is, find the factor by which the error changed each time you halved the step size.

:::

:::exercise {exercise-1-7-005} number=1.7.5 answered=no src=ch-first-order-ode.tex:2896
PROBLEM:
Approximate the value of $e$ by looking at the initial value problem $y'=y$ with $y(0)=1$ and approximating $y(1)$ using Euler’s method with a step size of $0.2$.
:::

:::exercise {exercise-1-7-006} number=1.7.6 answered=no src=ch-first-order-ode.tex:2902
PROBLEM:
Example of numerical instability: Take $y' = -5y$, $y(0) = 1$. We know that the solution should decay to zero as $x$ grows. Using Euler’s method, start with $h=1$ and compute $y_1, y_2, y_3, y_4$ to try to approximate $y(4)$. What happened? Now halve the step size. Keep halving the step size and approximating $y(4)$ until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.
:::

The simplest method used in practice is the *{index:Runge–Kutta method}*. Consider $\frac{dy}{dx}=f(x,y)$, $y(x_0) = y_0$, and a step size $h$. Everything is the same as in Euler’s method, except the computation of $y_{i+1}$ and $x_{i+1}$. That is, in each step we compute slopes $k_1$, $k_2$, $k_3$, and $k_4$, and then we compute the next $x_{i+1}$ and $y_{i+1}$:
$$ \begin{align*} & k_1 = f(x_i,y_i) , & & k_2 = f\bigl(x_i + {h}/{2},y_i + k_1 ({h}/{2})\bigr) , \\ & k_3 = f\bigl(x_i + {h}/{2},y_i + k_2 ({h}/{2})\bigr) , & & k_4 = f(x_i + h,y_i + k_3 h) , \\ & x_{i+1} = x_i + h , & & y_{i+1} = y_i + \frac{k_1 + 2k_2 + 2k_3 + k_4}{6}\,h . \end{align*} $$

:::exercise {exercise-1-7-007} number=1.7.7 answered=no src=ch-first-order-ode.tex:2935
PROBLEM:
Consider $\dfrac{dy}{dx} = yx^2$, $y(0)=1$.

a) Approximate $y(1)$ using Runge–Kutta (see above) with step sizes $h=1$ and $h={1}/{2}$.
b) Approximate $y(1)$ using Euler’s method with $h=1$ and $h={1}/{2}$.
c) Solve exactly, find the exact value of $y(1)$, and compare with the approximations.

:::

:::exercise {exercise-1-7-101} number=1.7.101 answered=yes src=ch-first-order-ode.tex:2951
PROBLEM:
Let $x' = \sin(xt)$, and $x(0)=1$. Approximate $x(1)$ using Euler’s method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.
SOLUTION:
Approximately: 1.0000, 1.2397, 1.3829
:::

:::exercise {exercise-1-7-102} number=1.7.102 answered=yes src=ch-first-order-ode.tex:2960
PROBLEM:
Let $x' = 2t$, and $x(0)=0$.

a) Approximate $x(4)$ using Euler’s method with step sizes 4, 2, and 1.
b) Solve exactly, and compute the errors.
c) Compute the factor by which the errors changed.

SOLUTION:
a) 0, 8, 12 b) $x(4) = 16$, so errors are: 16, 8, 4. c) Factors are 0.5 and 0.5.
:::

:::exercise {exercise-1-7-103} number=1.7.103 answered=yes src=ch-first-order-ode.tex:2977
PROBLEM:
Let $x' = x e^{xt+1}$, and $x(0)=0$.

a) Approximate $x(4)$ using Euler’s method with step sizes 4, 2, and 1.
b) Guess an exact solution based on part a) and compute the errors.

SOLUTION:
a) 0, 0, 0 b) $x=0$ is a solution so errors are: 0, 0, 0.
:::

There is a simple way to improve Euler’s method to make it a second-order method by doing just one extra step.{index-entry:Improved Euler’s method} Consider $\frac{dy}{dx}=f(x,y)$, $y(x_0) = y_0$, and a step size $h$. What we do is to pretend we compute the next step as in Euler, that is, we start with $(x_i,y_i)$, we compute a slope $k_1 = f(x_i,y_i)$, and then look at the point $(x_i+h,y_i + k_1h)$. Instead of letting our new point be $(x_i+h,y_i + k_1h)$, we compute the slope at that point, call it $k_2$, and then take the average of $k_1$ and $k_2$, hoping that the average is going to be closer to the actual slope on the interval from $x_i$ to $x_i+h$. And we are correct: If we halve the step, the error should get multiplied by ${({1}/{2})}^2 = {1}/{4}$. To summarize, the setup is the same as for regular Euler, except the computation of $y_{i+1}$ and $x_{i+1}$. At each step, we compute the new slopes $k_1$ and $k_2$ and then the next $y_{i+1}$ and $x_{i+1}$:
$$ \begin{align*} & k_1 = f(x_i,y_i) , & & k_2 = f(x_i + h,y_i + k_1h) , \\ & x_{i+1} = x_i + h , & & y_{i+1} = y_i + \frac{k_1+k_2}{2}\,h . \end{align*} $$

:::exercise {exercise-1-7-104} number=1.7.104 answered=yes src=ch-first-order-ode.tex:3020
PROBLEM:
Consider $\dfrac{dy}{dx} = x+y$, $y(0)=1$.

a) Approximate $y(1)$ using the improved Euler’s method (see above) with step sizes $h={1}/{4}$ and $h={1}/{8}$.
b) Approximate $y(1)$ using Euler’s method with $h={1}/{4}$ and $h={1}/{8}$.
c) Solve exactly, find the exact value of $y(1)$.
d) Compute the errors, and the factors by which the errors changed.

SOLUTION:
a) Improved Euler: $y(1) \approx 3.3897$ for $h={1}/{4}$, $y(1) \approx 3.4237$ for $h={1}/{8}$, b) Standard Euler: $y(1) \approx 2.8828$ for $h={1}/{4}$, $y(1) \approx 3.1316$ for $h={1}/{8}$, c) $y = 2e^x-x-1$, so $y(1)$ is approximately $3.4366$. d) Approximate errors for improved Euler: $0.046852$ for $h={1}/{4}$ and $0.012881$ for $h={1}/{8}$. For standard Euler: $0.55375$ for $h={1}/{4}$ and $0.30499$ for $h={1}/{8}$. Factor is approximately $0.27$ for improved Euler and $0.55$ for standard Euler.
:::

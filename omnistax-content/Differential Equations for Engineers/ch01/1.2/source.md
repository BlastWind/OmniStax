# 1.2 Slope fields {sec:slopefields-section}

:::note [section-notes]
*Note: 1 lecture, §1.3 in [EP](cite:EP), §1.1 in [BD](cite:BD)*
:::

As we said, the general first-order equation we are studying looks like
$$ y' = f(x,y). $$
Frequently, we cannot simply solve these kinds of equations explicitly. It would be nice if we could at least figure out the shape and behavior of the solutions, or find approximate solutions.

## Slope fields

The equation $y' = f(x,y)$ gives you a slope at each point in the $(x,y)$-plane. And this is the slope a solution $y(x)$ would have at $x$ if its value was $y$. In other words, $f(x,y)$ is the slope of a solution whose graph runs through the point $(x,y)$. At a point $(x,y)$, we draw a short line with the slope $f(x,y)$. For example, if $f(x,y) = xy$, then at point $(2,1.5)$ we draw a short line of slope $xy = 2 \times 1.5 = 3$. If $y(x)$ is a solution and $y(2) = 1.5$, then the equation mandates that $y'(2) = 3$. See [Figure 1.2](ref:1-3-fig0).

> FIGURE {fig:1-3-fig0} number=1.2 src=../../media/1-3-xysl-one.svg
> alt: The xy plane with a short line segment of slope 3 at the point (2,1.5).
> width: 4.5in
> caption: The slope $y'=xy$ at $(2,1.5)$.

To get an idea of how solutions behave, we draw such lines at lots of points in the plane, not just the point $(2,1.5)$. We would ideally want to see the slope at every point, but that is just not possible. Usually we pick a grid of points fine enough so that it shows the behavior, but not too fine so that we can still recognize the individual lines. We call this picture the *{index:slope field}* of the equation. See [Figure 1.3](ref:1-3-fig1) for the slope field of the equation $y' = xy$. In practice, one does not do this by hand; a computer can do the drawing.

Suppose we are given a specific initial condition $y(x_0) = y_0$. A solution, that is, the graph of the solution, would be a curve that follows the slopes we drew. For a few sample solutions, see [Figure 1.4](ref:1-3-fig2). It is easy to roughly sketch (or at least imagine) possible solutions in the slope field, just from looking at the slope field itself. You simply sketch a line that roughly fits the little line segments and goes through your initial condition.

> FIGURE {fig:1-3-fig1} number=1.3 src=../../media/1-3-xysl.svg
> alt: A grid of line segments whose slope at each point is given by x times y.
> width: 4.5in
> caption: Slope field of $y' = xy$.

> FIGURE {fig:1-3-fig2} number=1.4 src=../../media/1-3-xysl-sol.svg
> alt: A grid of line segments whose slope at each point is given by x times y. Overlaid are three red lines going through these line segments, one is concave up above the x-axis, one is simply the x-axis, and one is concave down below the x-axis.
> width: 4.5in
> caption: Slope field of $y' = xy$ with a graph of solutions satisfying $y(0) = 0.2$, $y(0) = 0$, and $y(0) = -0.2$.

By looking at the slope field, we get a lot of information about the behavior of solutions without having to solve the equation. For example, in [Figure 1.4](ref:1-3-fig2) we see what the solutions do when the initial conditions are $y(0) > 0$, $y(0) = 0$, and $y(0) < 0$. A small change in the initial condition causes quite different behavior. We see this behavior just from the slope field and imagining what solutions ought to do.

We see a different behavior for the equation $y' = -y$. For the slope field and a few solutions, see [Figure 1.5](ref:1-3-fig3). If we think of moving from left to right (perhaps $x$ is time and time is usually increasing), then we see that no matter what $y(0)$ is, all solutions tend to zero as $x$ tends to infinity. Again that behavior is clear from simply looking at the slope field itself.

> FIGURE {fig:1-3-fig3} number=1.5 src=../../media/1-3-mysl-sol.svg
> alt: A grid of line segments with the slope given by minus y. Overlaid are three red lines starting at various points on the left-hand side that all approach the x-axis as we move right.
> width: 4.5in
> caption: Slope field of $y' = -y$ with a graph of a few solutions.

## Existence and uniqueness

It seems that if we want a solution starting at some point, we could just follow the slope field. With that in mind, we wish to ask two fundamental questions about the problem
$$ y' = f(x,y), \qquad y(x_0) = y_0. $$

(i) Does a solution *exist*?
(ii) Is the solution *unique* (if it exists)?

What do you think is the answer? The answer to both questions seems to be yes, does it not? Well, it really is yes most of the time. But there are cases when the answer to either question can be no.

Since the equations we encounter in applications come from real life situations, it seems logical that a solution always exists. It also has to be unique if we believe our universe is deterministic. If the solution does not exist, or if it is not unique, we have probably not devised the correct model. Hence, it is good to know when things go wrong and why.

:::example {ex:example-1-2-1} Example 1.2.1
Attempt to solve:
$$ y' = \frac{1}{x}, \qquad y(0) = 0 . $$

Integrate to find the general solution $y = \ln \, \lvert x \rvert + C$. The solution does not exist at $x=0$. See [Figure 1.6](ref:1-3-xinvfig). You may say one can see the division by zero a mile away, but the equation may have been written as the seemingly harmless $x y' = 1$.

> FIGURE {fig:1-3-xinvfig} number=1.6 src=../../media/1-3-xinv-sol.svg
> alt: A grid of line segments with the slope given by 1 over x. Overlaid are red lines starting at various points on the left-hand side and the right-hand side that go out the bottom of the picture as they approach the y-axis.
> width: 4.5in
> caption: Slope field of $y' = {1}/{x}$.

> FIGURE {fig:1-3-sqrtfig} number=1.7 src=../../media/1-3-sqrt-sol.svg
> alt: A grid of line segments with the slope given by 2 times the square root of the absolute value of y. These are lines that go generally up except on the x-axis where they are horizontal. There are two lines giving solutions, a horizontal one, y equals 0, and one going up from the bottom of the plot and hitting the origin and then leaving upwards.
> width: 4.5in
> caption: Slope field of $y' = 2 \sqrt{\lvert y \rvert}$ with two solutions satisfying $y(0) = 0$.

:::

:::example {ex:example-1-2-2} Example 1.2.2
Solve:
$$ y' = 2 \sqrt{\lvert y \rvert}, \qquad y(0) = 0 . $$

See [Figure 1.7](ref:1-3-sqrtfig). Note that $y=0$ is a solution. But another solution is the function
$$ y(x) = \begin{cases} x^2 & \text{if } \; x \geq 0,\\ -x^2 & \text{if } \; x < 0. \end{cases} $$

:::

It is hard to tell by staring at the slope field that the solution is not unique. Is there any hope? Of course there is. We have the following theorem, known as Picard’s theorem^[Named after the French mathematician [Charles Émile Picard](https://en.wikipedia.org/wiki/Charles_%C3%89mile_Picard) (1856–1941).].

:::theorem {thm:slope-picardthm} Theorem 1.2.1 (Picard’s theorem on existence and uniqueness)
{index-entry:existence and uniqueness}{index-entry:Picard’s theorem} If $f(x,y)$ is continuous (as a function of two variables) and $\frac{\partial f}{\partial y}$ exists and is continuous near some $(x_0,y_0)$, then a solution to
$$ y' = f(x,y), \qquad y(x_0) = y_0, $$
exists (at least for $x$ in some small interval) and is unique.
:::

Note that the problems $y' = {1}/{x}$, $y(0) = 0$ and $y' = 2 \sqrt{\lvert y \rvert}$, $y(0) = 0$ do not satisfy the hypothesis of the theorem. Even if we can use the theorem, we ought to be careful about this existence business. It is quite possible that the solution only exists for a short while.

:::example {ex:example-1-2-3} Example 1.2.3
For some constant $A$, solve:
$$ y' = y^2, \qquad y(0) = A . $$

We know how to solve this equation. First assume that $A \neq 0$, so $y$ is not equal to zero at least for some $x$ near 0. So $x' = {1}/{y^2}$, so $x = {-1}/{y} + C$, so $y = \frac{1}{C-x}$. If $y(0) = A$, then $C = {1}/{A}$ so
$$ y = \frac{1}{{1}/{A} - x} . $$
If $A=0$, then $y=0$ is a solution.

For instance, when $A=1$ the solution “blows up” at $x=1$. Hence, the solution does not exist for all $x$ even if the equation itself is nice everywhere—it only exists in the interval $(-\infty,1)$. The equation $y' = y^2$ certainly looks nice.
:::

For most of this course, we will be interested in equations where existence and uniqueness hold, and in fact hold “globally” unlike for the equation $y'=y^2$.

## Exercises

:::exercise {exercise-1-2-001} number=1.2.1 answered=no src=ch-first-order-ode.tex:672
PROBLEM:
Sketch the slope field for $y'=e^{x-y}$. How do the solutions behave as $x$ grows? Can you guess a particular solution by looking at the slope field?
:::

:::exercise {exercise-1-2-002} number=1.2.2 answered=no src=ch-first-order-ode.tex:678
PROBLEM:
Sketch the slope field for $y'=x^2$.
:::

:::exercise {exercise-1-2-003} number=1.2.3 answered=no src=ch-first-order-ode.tex:682
PROBLEM:
Sketch the slope field for $y'=y^2$.
:::

:::exercise {exercise-1-2-004} number=1.2.4 answered=no src=ch-first-order-ode.tex:686
PROBLEM:
Is it possible to solve the equation $y' = \frac{xy}{\cos x}$ for $y(0) = 1$? Justify.
:::

:::exercise {exercise-1-2-005} number=1.2.5 answered=no src=ch-first-order-ode.tex:691
PROBLEM:
Is it possible to solve the equation $y' = y\sqrt{\lvert x\rvert}$ for $y(0) = 0$? Is the solution unique? Justify.
:::

:::exercise {exercise-1-2-006} number=1.2.6 answered=no src=ch-first-order-ode.tex:698
PROBLEM:
Match equations $y'=1-x$, $y'=x-2y$, $y' = x(1-y)$ to slope fields. Justify.

a)

> IMAGE {img:yprimex1minusyslope} src=../../media/yprimex1minusyslope.svg
> alt: A slope field where the lines have 0 slope on the y-axis, they are sloped upwards for negative x and y above some horizontal line and also for positive x and y below some horizontal line, they are sloped downwards otherwise.
> width: 1.75in

b)

> IMAGE {img:yprime1minusxslope} src=../../media/yprime1minusxslope.svg
> alt: A slope field where the lines are sloped upwards for x less than some positive quantity and downwards otherwise. The slope does not seem to vary with y.
> width: 1.75in

c)

> IMAGE {img:yprimexminus2yslope} src=../../media/yprimexminus2yslope.svg
> alt: A slope field where above some diagonal line from lower left to upper right, the slopes are negative, and below this line the slopes are positive.
> width: 1.75in

:::

:::exercise {exercise-1-2-007} number=1.2.7 answered=no src=ch-first-order-ode.tex:720
PROBLEM:
**challenging**
Take $y' = f(x,y)$, $y(0) = 0$, where $f(x,y) > 1$ for all $x$ and $y$. If the solution exists for all $x$, can you say what happens to $y(x)$ as $x$ goes to positive infinity? Explain.
:::

:::exercise {exercise-1-2-008} number=1.2.8 answered=no src=ch-first-order-ode.tex:727
PROBLEM:
**challenging**
Take $(y-x)y' = 0$, $y(0) = 0$.

a) Find two distinct solutions.
b) Explain why this does not violate Picard’s theorem.

:::

:::exercise {exercise-1-2-009} number=1.2.9 answered=no src=ch-first-order-ode.tex:736
PROBLEM:
Suppose $y' = f(x,y)$. What will the slope field look like, explain and sketch an example, if you know the following about $f(x,y)$:

a) $f$ does not depend on $y$.
b) $f$ does not depend on $x$.
c) $f(t,t) = 0$ for any number $t$.
d) $f(x,0) = 0$ and $f(x,1) = 1$ for all $x$.

:::

:::exercise {exercise-1-2-010} number=1.2.10 answered=no src=ch-first-order-ode.tex:749
PROBLEM:
Find a solution to $y' = \lvert y \rvert$, $y(0) = 0$. Does Picard’s theorem apply?
:::

:::exercise {exercise-1-2-011} number=1.2.11 answered=no src=ch-first-order-ode.tex:753
PROBLEM:
Take an equation $y' = (y-2x) g(x,y) + 2$ for some function $g(x,y)$. Can you solve the problem for the initial condition $y(0) = 0$, and if so what is the solution?
:::

:::exercise {exercise-1-2-012} number=1.2.12 answered=no src=ch-first-order-ode.tex:759
PROBLEM:
**challenging**
Suppose $y' = f(x,y)$ is such that $f(x,1) = 0$ for every $x$, $f$ is continuous and $\frac{\partial f}{\partial y}$ exists and is continuous for every $x$ and $y$.

a) Guess a solution given the initial condition $y(0) = 1$.
b) Can graphs of two solutions of the equation for different initial conditions ever intersect?
c) Given $y(0) = 0$, what can you say about the solution. In particular, can $y(x) > 1$ for any $x$? Can $y(x) = 1$ for any $x$? Why or why not?

:::

:::exercise {exercise-1-2-101} number=1.2.101 answered=yes src=ch-first-order-ode.tex:780
PROBLEM:
Sketch the slope field of $y'=y^3$. Can you visually find the solution that satisfies $y(0)=0$?
SOLUTION:

> IMAGE {img:yprimey3slope} src=../../media/yprimey3slope.svg
> alt: A slope field where the slopes are positive above the x-axis and negative below, getting steeper and steeper the further away from the x-axis we get. The slopes are zero on the x-axis and do not seem to depend on x.
> width: 2in

$y=0$ is a solution such that $y(0)=0$.
:::

:::exercise {exercise-1-2-102} number=1.2.102 answered=yes src=ch-first-order-ode.tex:801
PROBLEM:
Is it possible to solve $y' = xy$ for $y(0) = 0$? Is the solution unique?
SOLUTION:
Yes a solution exists. The equation is $y' = f(x,y)$ where $f(x,y) = xy$. The function $f(x,y)$ is continuous and $\frac{\partial f}{\partial y} = x$, which is also continuous near $(0,0)$. So a solution exists and is unique. (In fact, $y=0$ is the solution.)
:::

:::exercise {exercise-1-2-103} number=1.2.103 answered=yes src=ch-first-order-ode.tex:811
PROBLEM:
Is it possible to solve $y' = \frac{x}{x^2-1}$ for $y(1) = 0$?
SOLUTION:
No, the equation is not defined at $(x,y) = (1,0)$.
:::

:::exercise {exercise-1-2-104} number=1.2.104 answered=yes src=ch-first-order-ode.tex:819
PROBLEM:
Match equations $y'=\sin x$, $y'=\cos y$, $y' = y\cos(x)$ to slope fields. Justify.

a)

> IMAGE {img:yprimecosyslope} src=../../media/yprimecosyslope.svg
> alt: A slope field where the slopes do not seem to depend on x. They are negative at the top of the picture, positive in the middle part, and negative again at the bottom of the picture.
> width: 1.75in

b)

> IMAGE {img:yprimecosxyslope} src=../../media/yprimecosxyslope.svg
> alt: A slope field where the slopes are zero on the x-axis. Above the x-axis the slopes first are negative, then turn positive, then turn negative. Below the x-axis it is the same pattern but starting with positive, then negative, then positive again.
> width: 1.75in

c)

> IMAGE {img:yprimesinxslope} src=../../media/yprimesinxslope.svg
> alt: A slope field that is zero on the y-axis. The slopes do not appear to depend on y, and from left to right are first positive, then negative then positive and then negative again.
> width: 1.75in

SOLUTION:
a) $y'=\cos y$, b) $y' = y\cos(x)$, c) $y'=\sin x$. Justification left to reader.
:::

:::exercise {exercise-1-2-105} number=1.2.105 answered=yes src=ch-first-order-ode.tex:848
PROBLEM:
**tricky**
Suppose
$$ f(y) = \begin{cases} 0 & \text{ if $y > 0$}, \\ 1 & \text{ if $y \leq 0$} . \end{cases} $$
Does $y' = f(y)$, $y(0) = 0$ have a continuously differentiable solution? Does Picard apply? Why, or why not?
SOLUTION:
Picard does not apply as $f$ is not continuous at $y=0$. The equation does not have a continuously differentiable solution. Suppose it did. Notice that $y'(0) = 1$. By the first derivative test, $y(x) > 0$ for small positive $x$. But then for those $x$, we have $y'(x) = f\bigl(y(x)\bigr) = 0$. It is not possible for $y'$ to be continuous, $y'(0)=1$ and $y'(x) = 0$ for arbitrarily small positive $x$.
:::

:::exercise {exercise-1-2-106} number=1.2.106 answered=yes src=ch-first-order-ode.tex:870
PROBLEM:
Consider an equation of the form $y' = f(x)$ for some continuous function $f$, and an initial condition $y(x_0) = y_0$. Does a solution exist for all $x$? Why or why not?
SOLUTION:
The solution is $y(x) = \int_{x_0}^x f(s) \,ds + y_0$, and this does indeed exist for every $x$.
:::

# 1.6 Autonomous equations {sec:auteq-section}

:::note [section-notes]
*Note: 1 lecture, §2.2 in [EP](cite:EP), §2.5 in [BD](cite:BD)*
:::

Consider problems of the form
$$ \frac{dx}{dt} = f(x) , $$
where the derivative of solutions depends only on $x$ (the dependent variable). Such equations are called *autonomous equations{index-entry:autonomous equation}*. If we think of $t$ as time, the naming comes from the fact that the equation is independent of time.

We return to the cooling coffee problem ([Example 1.3.3](ref:1.3#sep-coffeeexample)). {index:Newton’s law of cooling} says
$$ \frac{dx}{dt} = k (A-x) , $$
where $x$ is the temperature, $t$ is time, $k$ is some positive constant, and $A$ is the ambient temperature. See [Figure 1.11](ref:2-2-coffeefig) for an example with $k=0.3$ and $A=5$.

Note the solution $x=A$ (in the figure $x=5$). We call these constant solutions the *equilibrium solutions*{index-entry:equilibrium solution}. The points on the $x$-axis where $f(x) = 0$ are called *critical points{index-entry:critical point}* or *equilibria*{index-entry:equilibrium}. The point $x=A$ is a critical point. In fact, each critical point corresponds to an equilibrium solution. Note also, by looking at the graph, that the solution $x=A$ is “stable” in that small perturbations in $x$ do not lead to substantially different solutions as $t$ grows. If we change the initial condition a little bit, then as $t \to \infty$, we still get $x(t) \to A$. We call such a critical point *stable*{index-entry:stable critical point}. In this simple example, all solutions in fact go to $A$ as $t \to \infty$. If a critical point is not stable, we say it is *unstable*{index-entry:unstable critical point}.

> FIGURE {fig:2-2-coffeefig} number=1.11 src=../../media/2-2-coffee.svg
> alt: A plot for t from 0 to 20 and x from minus 10 to 10 with a grid of lines with slopes of 0.3 times quantity 5 minus x. These slopes are going up below the x equals 5 line and are going down above the x equals 5 line. The slopes are steeper the further away from x equals 5 line we are. Several solutions are shown which are lines starting at various points on the left and then all converging towards the x equals 5 line as t increases.
> width: 4.5in
> caption: The slope field and some solutions of $x' = 0.3\,(5-x)$.

> FIGURE {fig:2-2-logisticfig} number=1.12 src=../../media/2-2-logistic.svg
> alt: A plot for t from 0 to 20 and x from minus 5 to 10 with a grid of lines with slopes of 0.1 times x times quantity 5 minus x. These slopes are going down below the x equals 0 line and above the x equals 5 line. Between x equals 0 and x equals 5 the slopes are going up. Several solutions are shown which when starting below x equals 0 just keep going down and leave the plot. When the solution is above x equals 0, then it rises and then approaches the x equals 5 line. When the solution starts above x equals 5, it goes down towards and approaches the x equals 5 line. The lines x equals 0 and x equals 5 are also solutions.
> width: 4.5in
> caption: The slope field and some solutions of $x' = 0.1\,x\,(5-x)$.

Consider now the *{index:logistic equation}*
$$ \frac{dx}{dt} = kx(M-x) , $$
for some positive $k$ and $M$. This equation is commonly used to model population if we know the limiting population $M$, that is, the maximum sustainable population. The logistic equation leads to less catastrophic predictions about world population than $x'=kx$. In the real world, there is no such thing as negative population, but we will still consider negative $x$ for the purposes of the math.

See [Figure 1.12](ref:2-2-logisticfig) for an example, $x' = 0.1 x(5-x)$. There are two critical points, $x=0$ and $x=5$. The critical point at $x=5$ is stable, while the critical point at $x=0$ is unstable. It is not necessary to find the exact solutions to understand their long-term behavior, that is, behavior as time goes to infinity. From the slope field above of $x' = 0.1 x(5-x)$, we see that
$$ \lim_{t\to \infty} x(t) = \begin{cases} 5 & \text{if } \; x(0) > 0 , \\ 0 & \text{if } \; x(0) = 0 , \\ \text{DNE or } {-\infty} & \text{if } \; x(0) < 0 . \\ \end{cases} $$
Here DNE means “does not exist.” From just looking at the slope field, we cannot quite decide what happens if $x(0) < 0$. It could be that the solution does not exist for $t$ all the way to $\infty$. Think of the equation $x' = x^2$. We have seen that solutions only exist for some finite period of time. Same can happen here. In our example equation above it turns out that the solution does not exist for all time, but to see that we would have to solve the equation. In any case, the solution does go to $-\infty$, but it may get there rather quickly.

If we are interested only in the long-term behavior of the solution, we would be doing unnecessary work if we solved the equation exactly. We could draw the slope field, but it is easier to just look at the *{index:phase diagram}* or *{index:phase portrait}*, which is a simple way to visualize the behavior of autonomous equations. In this case there is one dependent variable, the $x$. We draw the $x$-axis, we mark all the critical points, and then we draw arrows in between. Since $x$ is the dependent variable, we draw the axis vertically, as it appears in the slope field diagrams above. If $f(x) > 0$, we draw an up arrow. If $f(x) < 0$, we draw a down arrow. To figure out the sign, we could just plug in some $x$ between the critical points because $f(x)$ will have the same sign at all $x$ between two critical points as long as $f(x)$ is continuous. For example, $f(6) = -0.6 < 0$, so $f(x) < 0$ for $x > 5$, and the arrow above $x=5$ is a down arrow. Next, $f(1) = 0.4 > 0$, so $f(x) > 0$ whenever $0 < x < 5$, and the arrow points up. Finally, $f(-1) = -0.6 < 0$, so $f(x) < 0$ when $x < 0$, and the arrow points down.

> IMAGE {img:2-2-l-phasedia} src=../../media/2-2-l-phasedia.svg
> alt: A vertical line with two points marked with horizontal ticks marked as x equals 0 for the lower one and x equals 5 on the upper one. There are triangular arrows on the line. Below x equals 0 the arrow points down, between the x equals 0 and x equals 5 ticks the arrow points up, and above the x equals 5 tick the arrow points down.

Armed with the phase diagram, it is easy to sketch the solutions approximately: As time $t$ moves from left to right, the graph of a solution goes up if the arrow is up, and it goes down if the arrow is down.

:::exercise {exercise-1-6-001} number=1.6.1 answered=no src=ch-first-order-ode.tex:2268
PROBLEM:
Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs if you are getting the same type of curves.
:::

Once we draw the phase diagram, we classify critical points as stable or unstable^[Unstable points with one of the arrows pointing towards the critical point are sometimes called *semistable*{index-entry:semistable critical point}.]:

> IMAGE {img:2-2-ph-class} src=../../media/2-2-ph-class.svg
> alt: On the left, there are three possible phase diagrams with one critical point marked as a horizontal tick. The first one has the arrow above and below the tick pointing away from the tick. The second one has both arrows pointing up, the third has both arrows pointing down. These three diagrams are labeled as 'unstable'. Then there is one phase diagram with one critical point on the right where both arrows are pointing towards the critical point. This diagram is labeled as 'stable'.

Since any mathematical model we cook up will only be an approximation to the real world, unstable points are generally bad news. We remark that you can figure out the arrows by plotting the graph $y=f(x)$. For that graph, note that $x$ is the independent variable and will be on the horizontal axis.

Let us think about the logistic equation with harvesting{index-entry:logistic equation!with harvesting}{index-entry:harvesting}. Suppose an alien race really likes to eat humans. They keep a planet with humans and harvest the humans at a rate of $h$ million humans per year. Suppose $x$ is the number of humans in millions on the planet and $t$ is time in years. Let $M$ be the limiting population when no harvesting is done. The number $k > 0$ is a constant depending on how fast humans multiply. Our equation becomes
$$ \frac{dx}{dt} = kx(M-x) - h . $$
We expand the right-hand side and set it to zero.
$$ kx(M-x) - h = -kx^2+kMx - h = 0. $$
Solving for the critical points, let us call them $A$ and $B$, we get
$$ A = \frac{kM + \sqrt{{(kM)}^2 - 4hk}}{2k}, \qquad B = \frac{kM - \sqrt{{(kM)}^2 - 4hk}}{2k} . $$

:::exercise {exercise-1-6-002} number=1.6.2 answered=no src=ch-first-order-ode.tex:2326
PROBLEM:
Sketch a phase diagram for different possibilities. Note that these possibilities are $A > B$, or $A=B$, or $A$ and $B$ both complex (i.e. no real solutions). Hint: Fix some simple $k$ and $M$ and then vary $h$.
:::

For example, let $M=8$ and $k=0.1$. When $h=1$, then $A$ and $B$ are distinct and positive. See [Figure 1.13](ref:2-2-harv1) for the slope field. As long as the population starts above $B$, which is approximately 1.55 million, then the population will not die out, it will tend towards $A \approx 6.45$ million. If ever a catastrophe happens and the population drops below $B$, humans will die out, and the fast food restaurant serving them will go out of business.

> FIGURE {fig:2-2-harv1} number=1.13 src=../../media/2-2-logistic-h1.svg
> alt: A plot for t from 0 to 20 and x from 0 to 10 with a grid of lines with slopes of 0.1 times x times left parenthesis 8 minus x right parenthesis minus 1. These slopes are going down below roughly x equals 1.55 and above roughly x equals 6.45. Between these two lines the slopes are going up. Several solutions are shown, which when starting below x equals 1.55 keep going down and leave the plot. When the solution starts above x equals 1.55, then it rises and then approaches the line at roughly x equals 6.45. When the solution starts above x equals 6.45, it goes down towards and approaches this line at roughly x equals 6.45. The two horizontal lines are also solutions.
> width: 4.5in
> caption: The slope field and some solutions of $x' = 0.1\,x\,(8-x)-1$.

> FIGURE {fig:2-2-harvc} number=1.14 src=../../media/2-2-logistic-hc.svg
> alt: A plot for t from 0 to 20 and x from 0 to 10 with a grid of lines with slopes of 0.1 times x times left parenthesis 8 minus x right parenthesis minus 1.6. In this plot there is only one horizontal line at x equals 4. The slopes are all going down above and below this line, more steeply the further away from the line we are. Three solutions are drawn, one is the equilibrium solution as a horizontal line x equals 4. Another solution going down from above and approaching the x equals 4 is drawn and a solution starting slightly below the x equals 4 line and then going down and dropping off the picture before we get to the right-hand side.
> width: 4.5in
> caption: The slope field and some solutions of $x' = 0.1\,x\,(8-x)-1.6$.

When $h = 1.6$, then $A=B=4$. There is only one critical point and it is unstable^[More precisely, it is semistable.]. When the population starts above 4 million, it will tend towards 4 million. However, if it ever drops below 4 million, perhaps due to a worse than normal hurricane season one year, then humans will die out on the planet. This scenario is not one that we (as the human fast food proprietor) want to be in. A small perturbation of the equilibrium state and we are out of business. There is no room for error. See [Figure 1.14](ref:2-2-harvc).

Finally, if we are harvesting at 2 million humans per year, there are no critical points. The population will always plummet towards zero, no matter how well stocked the planet starts. See [Figure 1.15](ref:2-2-harv2).

> FIGURE {fig:2-2-harv2} number=1.15 src=../../media/2-2-logistic-h2.svg
> alt: A plot for t from 0 to 20 and x from 0 to 10 with a grid of lines with slopes of 0.1 times x times left parenthesis 8 minus x right parenthesis minus 2. In this plot, there are no horizontal lines and all the slopes are down. The slopes are steeper at the top of the picture, they get slightly less steep as we get to the middle of picture and then get steeper again at the bottom. Three solutions are drawn, all going down. Solutions start steeply down at the top of the picture then go down a bit more slowly in the middle part and then become steep again at the bottom.
> width: 4.5in
> caption: The slope field and some solutions of $x' = 0.1\,x\,(8-x)-2$.

## Exercises

:::exercise {exercise-1-6-003} number=1.6.3 answered=no src=ch-first-order-ode.tex:2419
PROBLEM:
Consider $x' = x^2$.

a) Draw the phase diagram, find the critical points, and mark them stable or unstable.
b) Sketch typical solutions of the equation.
c) Find $\displaystyle \lim_{t\to \infty} x(t)$ for the solution with the initial condition $x(0) = -1$.

:::

:::exercise {exercise-1-6-004} number=1.6.4 answered=no src=ch-first-order-ode.tex:2431
PROBLEM:
Consider $x' = \sin x$.

a) Draw the phase diagram for $-4\pi \leq x \leq 4\pi$. On this interval mark the critical points stable or unstable.
b) Sketch typical solutions of the equation.
c) Find $\displaystyle \lim_{t\to \infty} x(t)$ for the solution with the initial condition $x(0) = 1$.

:::

:::exercise {exercise-1-6-005} number=1.6.5 answered=no src=ch-first-order-ode.tex:2442
PROBLEM:
Suppose $f(x)$ is positive for $0 < x < 1$, it is zero when $x=0$ and $x=1$, and it is negative for all other $x$.

a) Draw the phase diagram for $x' = f(x)$, find the critical points, and mark them stable or unstable.
b) Sketch typical solutions of the equation.
c) Find $\displaystyle \lim_{t\to \infty} x(t)$ for the solution with the initial condition $x(0) = 0.5$.

:::

:::exercise {exercise-1-6-006} number=1.6.6 answered=no src=ch-first-order-ode.tex:2454
PROBLEM:
Start with the logistic equation $\frac{dx}{dt} = kx(M-x)$. Suppose we modify our harvesting. We will only harvest an amount proportional to the current population. In other words, we harvest $hx$ per unit of time for some $h > 0$ (similar to earlier example with $h$ replaced with $hx$).

a) Construct the differential equation.
b) Show that if $kM > h$, then the equation is still logistic.
c) What happens when $kM < h$?

:::

:::exercise {exercise-1-6-007} number=1.6.7 answered=no src=ch-first-order-ode.tex:2469
PROBLEM:
A disease is spreading through the country. Let $x$ be the number of people infected. Let the constant $S$ be the number of people susceptible to infection. The infection rate $\frac{dx}{dt}$ is proportional to the product of already infected people, $x$, and the number of susceptible but uninfected people, $S-x$.

a) Write down the differential equation.
b) Supposing $x(0) > 0$, that is, some people are infected at time $t=0$, what is $\displaystyle \lim_{t\to\infty} x(t)$.
c) Does the solution to part b) agree with your intuition? Why or why not?

:::

:::exercise {exercise-1-6-101} number=1.6.101 answered=yes src=ch-first-order-ode.tex:2487
PROBLEM:
Let $x'=(x-1)(x-2)x^2$.

a) Sketch the phase diagram and find critical points.
b) Classify the critical points.
c) If $x(0)=0.5$, then find $\displaystyle \lim_{t\to\infty} x(t)$.

SOLUTION:
a) 0, 1, 2 are critical points. b) $x=0$ is unstable (semistable), $x=1$ is stable, and $x=2$ is unstable. c) 1
:::

:::exercise {exercise-1-6-102} number=1.6.102 answered=yes src=ch-first-order-ode.tex:2505
PROBLEM:
Let $x'=e^{-x}$.

a) Find and classify all critical points.
b) Find $\displaystyle \lim_{t\to\infty} x(t)$ given any initial condition.

SOLUTION:
a) There are no critical points. b) $\infty$
:::

:::exercise {exercise-1-6-103} number=1.6.103 answered=yes src=ch-first-order-ode.tex:2519
PROBLEM:
Assume that a population of fish in a lake satisfies $\frac{dx}{dt} = kx(M-x)$. Now suppose that fish are continually added at $A$ fish per unit of time.

a) Find the differential equation for $x$.
b) What is the new limiting population?

SOLUTION:
a) $\frac{dx}{dt} = kx(M-x)+A$ b) $\frac{kM + \sqrt{{(kM)}^2 + 4Ak}}{2k}$
:::

:::exercise {exercise-1-6-104} number=1.6.104 answered=yes src=ch-first-order-ode.tex:2534
PROBLEM:
Suppose $\frac{dx}{dt} = (x-\alpha)(x-\beta)$ for two numbers $\alpha < \beta$.

a) Find the critical points, and classify them.

For b), c), d), find $\displaystyle \lim_{t\to\infty} x(t)$ based on the phase diagram.

b) $x(0) < \alpha$,
c) $\alpha < x(0) < \beta$,
d) $\beta < x(0)$.

SOLUTION:
a) $\alpha$ is a stable critical point, $\beta$ is an unstable one. b) $\alpha$, c) $\alpha$, d) $\infty$ or DNE.
:::

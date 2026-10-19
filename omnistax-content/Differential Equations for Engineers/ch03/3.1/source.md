# 3.1 Introduction to systems of ODEs {sec:sec-introtosys}

:::note [section-notes]
*Note: 1 to 1.5 lectures, §4.1 in [EP](cite:EP), §7.1 in [BD](cite:BD)*
:::

## Systems

Often we do not have just one dependent variable and one equation. We will see that we may end up with a system of several equations and several dependent variables even if we start with a single equation.

Given several dependent variables, suppose $y_1$, $y_2$, …, $y_n$, we can have a differential equation involving all of them and their derivatives with respect to one independent variable $x$. For example, $y_1'' = f(y_1',y_2',y_1,y_2,x)$. Usually, when we have two dependent variables, we have two equations such as
$$ \begin{aligned} y_1'' & = f_1(y_1',y_2',y_1,y_2,x) , \\ y_2'' & = f_2(y_1',y_2',y_1,y_2,x) , \end{aligned} $$
for some known functions $f_1$ and $f_2$. We call the above a *{index:system of differential equations}*. More precisely, the above is a *{index:second-order system}* of ODEs as second-order derivatives appear. An example of a *{index:first-order system}* is
$$ \begin{aligned} x_1' & = g_1(x_1,x_2,x_3,t) , \\ x_2' & = g_2(x_1,x_2,x_3,t) , \\ x_3' & = g_3(x_1,x_2,x_3,t) , \end{aligned} $$
where $x_1,x_2,x_3$ are the dependent variables, and $t$ is the independent variable.

The terminology for systems is essentially the same as for single equations. For the system above, a *solution*{index-entry:solution to a system} is a set of three functions $x_1(t)$, $x_2(t)$, $x_3(t)$, such that
$$ \begin{aligned} x_1'(t) &= g_1\bigl(x_1(t),x_2(t),x_3(t),t\bigr) , \\ x_2'(t) &= g_2\bigl(x_1(t),x_2(t),x_3(t),t\bigr) , \\ x_3'(t) &= g_3\bigl(x_1(t),x_2(t),x_3(t),t\bigr) . \end{aligned} $$

We may also have an *initial condition*{index-entry:initial condition for a system}. As for single equations, we specify $x_1$, $x_2$, and $x_3$ for some fixed $t$. For example, $x_1(0) = a_1$, $x_2(0) = a_2$, $x_3(0) = a_3$, where $a_1$, $a_2$, and $a_3$ are some constants. For a second-order system, we must also specify the first derivatives at the initial point. If we find a solution with arbitrary constants in it, where solving for the constants gives a solution for any initial condition, we call this solution the *general solution*{index-entry:general solution to a system}. Best to look at a simple example.

:::example {ex:example-simplesystem} Example 3.1.1
Sometimes a system is easy to solve by solving for one variable and then for the second variable. Take the first-order system
$$ \begin{aligned} y_1' & = y_1 , \\ y_2' & = y_1 - y_2 , \end{aligned} $$
with $y_1$, $y_2$ as the dependent variables and $x$ as the independent variable. Consider initial conditions $y_1(0) = 1$, $y_2(0) = 2$.

We note that $y_1 = C_1 e^x$ is the general solution of the first equation. We then plug this $y_1$ into the second equation and get the equation $y_2' = C_1e^x - y_2$, which is a linear first-order equation that is easily solved for $y_2$. By the integrating factor method, we get
$$ e^x y_2 = \frac{C_1}{2}e^{2x} + C_2 , $$
or $y_2 = \frac{C_1}{2}e^{x} + C_2e^{-x}$. The general solution to the system is, therefore,
$$ y_1 = C_1 e^x , \qquad y_2 = \frac{C_1}{2}e^{x} + C_2e^{-x} . $$
We solve for $C_1$ and $C_2$ given the initial conditions. We substitute $x=0$ to find $1 = y_1(0) = C_1$ and $2 = y_2(0) = {C_1}/{2} + C_2$, or in other words, $C_1=1$ and $C_2={3}/{2}$. Thus the solution is $y_1 = e^x$, and $y_2 = ({1}/{2}) e^x + ({3}/{2}) e^{-x}$.
:::

Generally, we will not be so lucky to be able to solve for each variable separately as in the example—we will need to solve for all variables at once. While we cannot always solve one variable at a time, we will try to salvage as much as possible from this technique. In a certain sense, to solve systems, we will still (try to) solve a bunch of single equations and put their solutions together. Let us not worry right now about how to solve systems yet.

We will mostly consider *{index:linear systems}*. [Example 3.1.1](ref:example-simplesystem) is a *{index:linear first-order system}*. It is linear as none of the dependent variables or their derivatives appear in nonlinear functions or with powers higher than one ($y_1$, $y_2$, $y_1'$, $y_2'$, constants, and functions of $x$ can appear, but not $y_1y_2$ or ${(y_2')}^2$ or $y_1^3$). Another, more complicated, example of a linear (second-order) system is
$$ \begin{aligned} y_1'' &= e^x y_1' + x^2 y_1 + 5 y_2 + \sin(x), \\ y_2'' &= x y_1'-y_2' + 2 y_1 + \cos(x). \end{aligned} $$

## Applications

We consider some simple applications of systems and how to set up the equations.

:::example {ex:sintro-closedbrine-example} Example 3.1.2
First, we consider salt and brine tanks, but this time water flows from one to the other and back. Imagine we have two tanks, each containing volume $V$ liters of salt brine. The amount of salt in the first tank is $x_1$ grams, and the amount of salt in the second tank is $x_2$ grams. Let $t$ denote time—the independent variable. The liquid in each tank is being constantly and perfectly mixed and flows or is pumped at a rate of $r$ liters per second out of each tank into the other. See [Figure 3.1](ref:sintro-closedbrine).

> FIGURE {fig:sintro-closedbrine} number=3.1 src=../../media/lin-tank-sys.svg
> alt: A diagram of two tanks with liquid. The substance in the first tank is labeled as x sub 1 to signify the amount of salt and the substance in the second tank is labeled as x sub 2. Both tanks have a label that Vol. equals V to signify that the volume is the same and equal to V in both tanks. There are two pipes each carrying liquid from one tank to the other and they are both marked with r signifying the flow.
> caption: A closed system of two brine tanks.

The rate of change of $x_1$, that is, $x_1'$, is the rate of salt entering minus the rate leaving. The density of the salt in tank 2 is ${x_2}/{V}$, so the rate of salt entering tank 1 is ${x_2}/{V}$ times $r$. The density of the salt in tank 1 is ${x_1}/{V}$, so the rate of salt leaving tank 1 is ${x_1}/{V}$ times $r$. In other words,
$$ x_1' = \frac{x_2}{V} r - \frac{x_1}{V} r = \frac{r}{V} x_2 - \frac{r}{V} x_1 = \frac{r}{V} (x_2-x_1). $$
Similarly, to find the rate $x_2'$, the roles of $x_1$ and $x_2$ are reversed. All in all, the system of ODEs for this problem is
$$ \begin{aligned} x_1' & = \frac{r}{V} (x_2-x_1), \\ x_2' & = \frac{r}{V} (x_1-x_2). \end{aligned} $$
In this system, we cannot solve for $x_1$ or $x_2$ separately. We must solve for both $x_1$ and $x_2$ at once, which is intuitively clear—the amount of salt in one tank affects the amount in the other. We cannot know $x_1$ before we know $x_2$, and vice versa.

We do not yet know how to find all the solutions, but intuitively we can at least find some solutions. Suppose we know that initially the tanks have the same amount of salt. That is, we have an initial condition such as $x_1(0)=x_2(0) = C$. Then clearly the amount of salt entering and leaving each tank is the same, so the amounts are not changing. In other words, $x_1 = C$ and $x_2 = C$ (the constant functions) is a solution: $x_1' = x_2' = 0$, and $\frac{r}{V}(x_2-x_1) = \frac{r}{V}(x_1-x_2) = 0$, so the equations are satisfied.

Let us think about the setup a little bit more without solving it. Suppose the initial conditions are $x_1(0) = A$ and $x_2(0) = B$, for two different constants $A$ and $B$. Since no salt is coming in or out of this closed system, the total amount of salt is constant. That is, $x_1+x_2$ is constant, and so it equals $A+B$. Intuitively, if $A > B$, more salt will flow out of tank one than into it. After a long time, we then expect the amount of salt in each tank to equalize. In other words, the solutions of both $x_1$ and $x_2$ should tend towards $\frac{A+B}{2}$ as $t$ goes to $\infty$. Once you know how to solve systems, you can check that this really is so.
:::

:::example {ex:sintro-carts-example} Example 3.1.3
Let us look at a second-order example. We return to the mass and spring setup, but this time we consider two masses.

> IMAGE {img:cartsfig} src=../../media/cartsfig.svg
> alt: A diagram of two carts on wheels connected by a spring. The carts are labeled as m sub 1 and m sub 2 signifying the masses. The spring is labeled as k signifying the spring constant. There is a vertical tick and a rightward horizontal arrow below each cart labeled as x sub 1 and x sub 2 respectively, signifying that their state as shown is the rest position and x sub 1 and x sub 2 give the displacement of each cart from its rest position.

Consider one spring with constant $k$ and two masses $m_1$ and $m_2$. Think of the masses as carts on a straight track with no friction. Let $x_1$ be the displacement of the first cart and $x_2$ be the displacement of the second cart. That is, we put the two carts somewhere with no tension on the spring, we mark the position of the first and second cart, and we call those the zero positions. Then $x_1$ measures how far the first cart is from its zero position, and $x_2$ measures how far the second cart is from its zero position. The force exerted by the spring on the first cart is $k(x_2-x_1)$ as $x_2-x_1$ is how far the spring is stretched (or compressed) from the rest position. The force exerted on the second cart is the opposite, thus the same thing with a negative sign. {index:Newton’s second law} states that force equals mass times acceleration, that is,
$$ \begin{aligned} m_1 x_1'' & = k(x_2-x_1) , \\ m_2 x_2'' & = - k(x_2-x_1) . \end{aligned} $$

Again, we cannot solve for the $x_1$ or $x_2$ variables one at a time. Where the first cart goes depends on exactly where the second cart goes and vice versa.
:::

## Changing to first-order systems

To some degree, we need only be able to solve first-order systems. Consider an $n^{\text{th}}$-order differential equation
$$ y^{(n)} = F(y^{(n-1)},\ldots,y',y,x) . $$
We define new variables $u_1, u_2, \ldots, u_n$ and write the system
$$ \begin{align*} u_1' & = u_2 , \\ u_2' & = u_3 , \\ & ~\, \vdots \\ u_{n-1}' & = u_n , \\ u_n' & = F(u_n,u_{n-1},\ldots,u_2,u_1,x) . \end{align*} $$
We solve this system for $u_1$, $u_2$, …, $u_n$. Once we have solved for the $u$, we can discard $u_2$ through $u_n$ and let $y = u_1$. This $y$ solves the original equation.

:::example {ex:example-3-1-4} Example 3.1.4
Take $x''' = 2x''+ 8x' + x + t$. Letting $u_1 = x$, $u_2 = x'$, $u_3 = x''$, we find the system:
$$ u_1' = u_2, \qquad u_2' = u_3, \qquad u_3' = 2u_3 + 8u_2 + u_1 + t . $$
Note why $x=u_1$ solves the original equation: The first two equations of the system give that $u_3' = u_2'' = u_1''' = x'''$. If we plug $u_3' = x'''$, $u_1 = x$, $u_2 = x'$, and $u_3 = x''$ into the third equation of the system, we recover the third-order equation we started with.
:::

The same idea works for a system of higher-order differential equations. A system of $k$ differential equations in $k$ unknowns, all of order $n$, can be transformed into a first-order system of $n \times k$ equations and $n \times k$ unknowns.

:::example {ex:example-3-1-5} Example 3.1.5
Consider the system from the example with carts, [Example 3.1.3](ref:sintro-carts-example):
$$ m_1 x_1'' = k(x_2-x_1), \qquad m_2 x_2'' = - k(x_2-x_1) . $$
Let $u_1 = x_1$, $u_2 = x_1'$, $u_3 = x_2$, $u_4 = x_2'$. The second-order system becomes the first-order system
$$ u_1' = u_2, \qquad m_1 u_2' = k(u_3-u_1), \qquad u_3' = u_4, \qquad m_2 u_4' = - k(u_3-u_1) . $$

:::

:::example {ex:example-3-1-6} Example 3.1.6
The idea works in reverse as well. Suppose we want to solve the system
$$ x' = 2y-x , \qquad y' = x, $$
for the initial conditions $x(0) = 1$, $y(0) =0$. Let the independent variable be $t$.

If we differentiate the second equation, we get $y''=x'$. We know what $x'$ is in terms of $x$ and $y$, and we know that $x=y'$. So,
$$ y'' = x' = 2y-x = 2y-y' . $$
We now have the equation $y''+y'-2y = 0$. We know how to solve this equation and we find that $y = C_1 e^{-2t} + C_2 e^t$. Once we have $y$, we use the equation $y' = x$ to get $x$.
$$ x = y' = -2 C_1 e^{-2t} + C_2 e^t . $$
We solve for the initial conditions $1 = x(0) = -2 C_1 + C_2$ and $0 = y(0) = C_1 + C_2$. Hence, $C_1 = -C_2$ and $1 = 3C_2$. So $C_1 = {-1}/{3}$ and $C_2 = {1}/{3}$. Our solution is
$$ x = \frac{2e^{-2t} + e^t}{3} ,\qquad y = \frac{-e^{-2t} + e^t}{3} . $$

:::

:::exercise {exercise-3-1-001} number=3.1.1 answered=no src=ch-systems.tex:364
PROBLEM:
Plug in and check that this really is the solution.
:::

It is useful to go back and forth between systems and higher-order equations for other reasons. For example, software for solving ODEs numerically (approximation) is generally for first-order systems. To use it, you take whatever ODE you want to solve and convert it to a first-order system. It is not very hard to adapt computer code for the Euler or Runge–Kutta method for first-order equations to handle first-order systems. We simply treat the dependent variable not as a number but as a vector. In many mathematical computer languages there is almost no distinction in syntax.

## Autonomous systems and vector fields

A system where the equations do not depend on the independent variable is called an *{index:autonomous system}*. For example, the system $x'=2y-x$, $y'=x$ is autonomous as the independent variable, say $t$, does not appear in the equations.

For autonomous systems, we can draw the so-called *{index:direction field}* or *{index:vector field}*, a plot similar to a slope field, but instead of giving a slope at each point, we give a direction (and a magnitude). The previous example, $x' = 2y-x$, $y' = x$, says that at the point $(x,y)$ the direction in which we should travel to satisfy the equations should be the direction of the vector $( 2y-x, x )$ with the speed equal to the magnitude of this vector. So we draw the vector $(2y-x,x)$ at the point $(x,y)$ and we do this for many points on the $xy$-plane. For example, at the point $(1,2)$, we draw the vector $\bigl(2(2)-1,1\bigr) = (3,1)$, a vector pointing to the right and a little bit up, while at the point $(2,1)$ we draw the vector $\bigl(2(1)-2,2\bigr) = (0,2)$ a vector that points straight up. When drawing the vectors, we will scale down their size to fit many of them on the same direction field. If we drew the arrows at the actual size, the diagram would be a jumbled mess once we draw more than a couple of arrows. So we scale them all so that not even the longest one interferes with the others. We are mostly interested in their direction and relative size. See [Figure 3.2](ref:sintro-vectorfield-fig). The diagrams we drew in [§1.6](ref:1.6#auteq-section) for autonomous equations in one dimension are similar, but note how much more complicated things become when we allow just one extra dimension.

We can draw a path of the solution in the plane. Suppose the solution is given by $x = f(t)$, $y=g(t)$. We pick an interval of $t$ (say $0 \leq t \leq 2$ for our example) and plot all the points $\bigl(f(t),g(t)\bigr)$ for $t$ in the selected range. The resulting picture is called the *{index:phase portrait}* (or {index:phase plane portrait}). The particular curve obtained is called the *{index:trajectory}* or *{index:solution curve}*. See an example plot in [Figure 3.3](ref:sintro-vectorfield-sol-fig). In the figure the solution starts at $(1,0)$ and travels along the vector field for a distance of 2 units of $t$. We solved this system precisely, so we compute $x(2)$ and $y(2)$ to find $x(2) \approx 2.475$ and $y(2) \approx 2.457$. This point corresponds to the top right end of the plotted solution curve in the figure.

> FIGURE {fig:sintro-vectorfield-fig} number=3.2 src=../../media/sintro-vectorfield.svg
> alt: A diagram of a direction field, that is, a grid of small arrows. The arrows on the top of the diagram point generally rightward, the arrows on the right-hand side point generally upward. Along the x equals y diagonal the arrows are pointing away from the origin and the arrows elsewhere tend to point towards this line and then slowly changing to point in the same direction as the arrows on the diagonal.
> width: 4.5in
> caption: The direction field for $x' = 2y-x$, $y' = x$.

> FIGURE {fig:sintro-vectorfield-sol-fig} number=3.3 src=../../media/sintro-vectorfield-sol.svg
> alt: A diagram of the same direction field as the previous figure, but now with a solution starting at (1,0) which flows for a moment towards the diagonal x equals y then turns sharply rightward and then flows alongside the diagonal to the top right corner, ending before it gets to the corner of the picture.
> width: 4.5in
> caption: The direction field for $x' = 2y-x$, $y' = x$ with the trajectory of the solution starting at $(1,0)$ for $0 \leq t \leq 2$.

We can draw phase portraits and trajectories in the $xy$-plane even if the system is not autonomous. In this case, however, we cannot draw the direction field, since the field changes as $t$ changes. For each $t$ we would get a different direction field.

## Picard’s theorem

Before going further, we mention that Picard’s theorem on existence and uniqueness also holds for systems of ODEs. Let us restate this theorem in this setting. A general first-order system is of the form
$$ \begin{aligned} x_1' & = F_1(x_1,x_2,\ldots,x_n,t) , \\ x_2' & = F_2(x_1,x_2,\ldots,x_n,t) , \\ & \vdots \\ x_n' & = F_n(x_1,x_2,\ldots,x_n,t) . \end{aligned} $$ {eq:eq-general-system} number=3.1

:::theorem {thm:sys-picardthm} Theorem 3.1.1 (Picard’s theorem on existence and uniqueness for systems)
{index-entry:existence and uniqueness for systems}{index-entry:Picard’s theorem} If for every $j=1,2,\ldots,n$ and every $k = 1,2,\ldots,n$ each $F_j$ is continuous and the derivative $\frac{\partial F_j}{\partial x_k}$ exists and is continuous near some $(x_1^0,x_2^0,\ldots,x_n^0,t^0)$, then a solution to [(3.1)](ref:eq-general-system) subject to the initial condition $x_1(t^0) = x_1^0$, $x_2(t^0) = x_2^0$, …, $x_n(t^0) = x_n^0$ exists (at least for $t$ in some small interval) and is unique.
:::

That is, a unique solution exists for any initial condition given that the system is reasonable (each $F_j$ and its partial derivatives in the $x$ variables are continuous). As for single equations, we may not have a solution for all time $t$, but it is guaranteed at least for some short period of time.

As we can change any $n^{\text{th}}$-order ODE into a first-order system, this theorem also provides the existence and uniqueness of solutions for higher-order equations.

## Exercises

:::exercise {exercise-3-1-002} number=3.1.2 answered=no src=ch-systems.tex:518
PROBLEM:
Find the general solution of $x_1' = x_2 - x_1 + t$, $x_2' = x_2$.
:::

:::exercise {exercise-3-1-003} number=3.1.3 answered=no src=ch-systems.tex:522
PROBLEM:
Find the general solution of $x_1' = 3 x_1 - x_2 + e^t$, $x_2' = x_1$.
:::

:::exercise {exercise-3-1-004} number=3.1.4 answered=no src=ch-systems.tex:526
PROBLEM:
Write $ay'' + by' + cy = f(x)$ as a first-order system of ODEs.
:::

:::exercise {exercise-3-1-005} number=3.1.5 answered=no src=ch-systems.tex:531
PROBLEM:
Write $x'' + y^2 y' - x^3 = \sin(t)$, $y'' + {(x'+y')}^2 -x = 0$ as a first-order system of ODEs.
:::

:::exercise {exercise-3-1-006} number=3.1.6 answered=no src=ch-systems.tex:536
PROBLEM:
Suppose two masses on carts on frictionless surface are at displacements $x_1$ and $x_2$ as in [Example 3.1.3](ref:sintro-carts-example). Suppose that a rocket applies force $F$ in the positive direction on cart $x_1$. Set up the system of equations.
:::

:::exercise {exercise-3-1-007} number=3.1.7 answered=no src=ch-systems.tex:543
PROBLEM:
Suppose the tanks are as in [Example 3.1.2](ref:sintro-closedbrine-example), starting both at volume $V$, but now the rate of flow from tank 1 to tank 2 is $r_1$, and rate of flow from tank 2 to tank one is $r_2$. Notice that the volumes are now not constant. Set up the system of equations.
:::

:::exercise {exercise-3-1-101} number=3.1.101 answered=yes src=ch-systems.tex:553
PROBLEM:
Find the general solution to $y_1' = 3 y_1$, $y_2' = y_1 + y_2$, $y_3' = y_1 + y_3$.
SOLUTION:
$y_1 = C_1 e^{3x}$, $y_2 = C_2 e^x+ \frac{C_1}{2} e^{3 x}$, $y_3 = C_3 e^x+ \frac{C_1}{2} e^{3 x}$
:::

:::exercise {exercise-3-1-102} number=3.1.102 answered=yes src=ch-systems.tex:563
PROBLEM:
Solve $y'=2x$, $x'=x+y$, $x(0)=1$, $y(0)=3$.
SOLUTION:
$x=\frac{5}{3} e^{2t} - \frac{2}{3} e^{-t}$, $y=\frac{5}{3} e^{2t} + \frac{4}{3} e^{-t}$
:::

:::exercise {exercise-3-1-103} number=3.1.103 answered=yes src=ch-systems.tex:571
PROBLEM:
Write $x''' = x+t$ as a first-order system.
SOLUTION:
$u_1' = u_2$, $u_2' = u_3$, $u_3' = u_1+t$, (here $u_1=x$)
:::

:::exercise {exercise-3-1-104} number=3.1.104 answered=yes src=ch-systems.tex:580
PROBLEM:
Write $y_1'' + y_1 + y_2 = t$, $y_2'' + y_1 - y_2 = t^2$ as a first-order system.
SOLUTION:
$y_1' = y_3$, $y_2' = y_4$, $y_3' = - y_1 - y_2 + t$, $y_4' = - y_1 + y_2 + t^2$
:::

:::exercise {exercise-3-1-105} number=3.1.105 answered=yes src=ch-systems.tex:593
PROBLEM:
Suppose two masses on carts on frictionless surface are at displacements $x_1$ and $x_2$ as in [Example 3.1.3](ref:sintro-carts-example). Suppose initial displacement is $x_1(0)=x_2(0)=0$, and initial velocity is $x_1'(0) = x_2'(0) = a$ for some number $a$. Use your intuition to solve the system, explain your reasoning.
SOLUTION:
$x_1 = x_2 = at$. Explanation of the intuition is left to reader.
:::

:::exercise {exercise-3-1-106} number=3.1.106 answered=yes src=ch-systems.tex:604
PROBLEM:
Suppose the tanks are as in [Example 3.1.2](ref:sintro-closedbrine-example) except that clean water flows in at a rate of $s$ liters per second into tank 1, and brine flows out of tank 2 and into the sewer also at a rate of $s$ liters per second. The rate of flow from tank 1 into tank 2 is still $r$, but the rate of flow from tank 2 back into tank 1 is $r-s$ (assume $r > s$).

a) Draw the picture.
b) Set up the system of equations.
c) Intuitively, what happens as $t$ goes to infinity, explain.

SOLUTION:
a) Left to reader. b) $x_1' = \frac{r-s}{V} x_2- \frac{r}{V}x_1$, $x_2' = \frac{r}{V} (x_1- x_2)$. c) As $t$ goes to infinity, both $x_1$ and $x_2$ go to zero, explanation is left to reader.
:::

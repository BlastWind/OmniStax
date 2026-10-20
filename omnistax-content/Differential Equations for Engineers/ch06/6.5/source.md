# 6.5 Solving PDEs with the Laplace transform {sec:laplacepde-section}

:::note [section-notes]
*Note: 1–1.5 lecture, can be skipped*
:::

The Laplace transform comes from the same family of transforms as does the Fourier series^[There is also a Fourier transform on the real line that looks sort of like the Laplace transform.], which we used in [chapter 4](ref:4#FS-chapter) to solve partial differential equations (PDEs). It is therefore not surprising that we can also solve PDEs with the Laplace transform.

Given a PDE in two independent variables $x$ and $t$, we use the Laplace transform on one of the variables (taking the transform of everything in sight), and derivatives in that variable become multiplications by the transformed variable $s$. The PDE becomes an ODE, which we solve. Afterwards, we invert the transform to find a solution to the original problem. It is best to see the procedure in an example.

:::example {ex:example-6-5-1} Example 6.5.1
Consider the first-order PDE
$$ y_t = - \alpha y_x, \qquad \text{for } x > 0, \enspace t > 0, $$
with side conditions
$$ y(0,t) = C, \qquad y(x,0) = 0 . $$
We will assume $\alpha > 0$ is a constant. This equation is called the *{index:convection equation}* or sometimes the *{index:transport equation}*, and it already made an appearance in [§1.9](ref:1.9#fopde-section), with different conditions. See [Figure 6.5](ref:lt-half-infinite-goo-river) for a diagram of the setup.

> FIGURE {fig:lt-half-infinite-goo-river} number=6.5 src=../../media/half-infinite-goo-river.svg
> alt: A diagram of the xt-plane with the first quadrant shaded and labeled y sub t equals minus alpha times y sub x, the x-axis labeled y equals 0, and the t-axis labeled y equals C.
> caption: Transport equation on a half line.

A physical setup of this equation is a river of viscous goo, as we do not want anything to diffuse. The function $y$ is the concentration of some toxic substance^[It’s a river of goo already. We’re not hurting the environment much more.]. The variable $x$ denotes position, where $x=0$ is the location of a factory spewing the toxic substance into the river. The toxic substance flows into the river so that at $x=0$ the concentration is always $C$. We wish to see what happens past the factory, that is, at $x > 0$. Let $t$ be the time, and assume the factory started operations at $t=0$, so that at $t=0$ the river is just pure goo.

Consider a function of two variables $y(x,t)$. Let us fix $x$ and transform the $t$ variable. For convenience, we treat the transformed $s$ variable as a parameter, since there are no derivatives in $s$. That is, we write $Y(x)$ for the transformed function, and treat it as a function of $x$, leaving $s$ as a parameter.
$$ Y(x) = {\mathcal L} \bigl\{ y(x,t) \bigr\} = \int_0^\infty y(x,t) e^{-st} \,dt . $$
The transform of a derivative with respect to $x$ is just the derivative of the transformed function:
$$ {\mathcal L} \bigl\{ y_x(x,t) \bigr\} = \int_0^\infty y_x(x,t) e^{-st} \,dt = \frac{d}{dx} \left[\int_0^\infty y(x,t) e^{-st} \,dt \right] = Y'(x) . $$
To transform the derivative in $t$ (the variable being transformed), we use the rules from [§6.2](ref:6.2#transformsofders-section):
$$ {\mathcal L} \bigl\{ y_t(x,t) \bigr\} = sY(x) - y(x,0) . $$

In our specific case, $y(x,0)=0$, and so ${\mathcal L} \bigl\{ y_t(x,t) \bigr\} = sY(x)$. We transform the equation to find
$$ sY(x) = -\alpha Y'(x) . $$
This ODE needs an initial condition. The initial condition is the other side condition of the PDE, the one that depends on $x$. Everything is transformed, so we must also transform this condition
$$ Y(0) = {\mathcal L} \bigl\{ y(0,t) \bigr\} = {\mathcal L} \bigl\{ C \bigr\} = \frac{C}{s} . $$

We solve the ODE problem $sY(x) = -\alpha Y'(x)$, $Y(0) = \frac{C}{s}$, to find
$$ Y(x) = \frac{C}{s} e^{-\frac{s}{\alpha} x} . $$
We are not done. We have $Y(x)$, but we really want $y(x,t)$. We transform the $s$ variable back to $t$. Let
$$ u(t) = \begin{cases} 0 & \text{if $t < 0$}, \\ 1 & \text{otherwise} \end{cases} $$
be the Heaviside function. As
$$ {\mathcal L} \bigl\{ u(t-a) \bigr\} = \int_0^\infty u(t-a) \, e^{-st} \,dt = \int_a^\infty e^{-st} \,dt = \frac{e^{-as}}{s} , $$
then
$$ y(x,t) = {\mathcal L}^{-1} \left\{ \frac{C}{s} e^{-\frac{s}{\alpha} x} \right\} = C u\bigl(t-{x}/{\alpha}\bigr) . $$
In other words,
$$ y(x,t) = \begin{cases} 0 & \text{if $t < {x}/{\alpha}$}, \\ C & \text{otherwise.} \end{cases} $$
See [Figure 6.6](ref:lt-half-infinite-goo-river-wavefront) for a diagram of this solution. The line of slope ${1}/{\alpha}$ indicates the wavefront of the toxic substance in the picture as it is leaving the factory. What the equation does is to try to move the initial condition to the right at speed $\alpha$, and so it moves the boundary condition (the wavefront) too.

> FIGURE {fig:lt-half-infinite-goo-river-wavefront} number=6.6 src=../../media/half-infinite-goo-river-wavefront.svg
> alt: A diagram of the first quadrant of the xt-plane (positive x and t). The x-axis, which is the horizontal, is labeled y equals 0 and the t-axis is labeled y equals C. A diagonal straight line from the origin up and to the right is labeled 'wavefront, slope 1 over alpha'. The region above this line is shaded dark and labeled y equals C. The region below the line is shaded lightly and labeled y equals 0.
> caption: Wavefront of toxic substance is a line of slope ${1}/{\alpha}$.

Shhh…$y$ is not differentiable. It is not even continuous (nobody ever seems to notice). How could we plug something that’s not differentiable into the equation? Well, just think of a differentiable function very, very close to $y$. Or, if you recognize the derivative of the Heaviside function as the delta function, then all is well too:
$$ y_t (x,t) = \frac{\partial}{\partial t} \left[ C u\bigl(t-{x}/{\alpha}\bigr) \right] = C u'\bigl(t-{x}/{\alpha}\bigr) = C \delta\bigl(t-{x}/{\alpha}\bigr) $$
and
$$ y_x (x,t) = \frac{\partial}{\partial x} \left[ C u\bigl(t-{x}/{\alpha}\bigr) \right] = - \frac{C}{\alpha} u'\bigl(t-{x}/{\alpha}\bigr) = - \frac{C}{\alpha} \delta\bigl(t-{x}/{\alpha}\bigr) . $$
So $y_t = - \alpha y_x$.
:::

The Laplace transform is very good with constant-coefficient equations. One advantage of Laplace is that it easily handles nonhomogeneous side conditions. Let us try a more complicated example.

:::example {ex:example-6-5-2} Example 6.5.2
Consider
$$ \begin{align*} & y_t + y_x + y = 0, \qquad \text{for } x > 0, \enspace t > 0, \\ & y(0,t) = \sin(t), \qquad y(x,0) = 0 . \end{align*} $$

Again, we transform $t$, and we write $Y(x)$ for the transformed function. As $y(x,0) = 0$, we find
$$ sY(x) + Y'(x) + Y(x) = 0, \qquad Y(0) = \frac{1}{s^2+1} . $$
The solution of the transformed equation is
$$ Y(x) = \frac{1}{s^2+1} e^{-(s+1) x} = \frac{1}{s^2+1} e^{-xs} e^{-x} . $$
Using the second shifting property [(6.1)](ref:6.2#ltd-sseq) and linearity of the transform, we obtain the solution
$$ y(x,t) = e^{-x} \sin(t-x) u(t-x) . $$

:::

We can also detect when the problem is *{index:ill-posed}* in the sense that it has no solution. Let us change the equation to
$$ \begin{align*} & -y_t + y_x = 0, \qquad \text{for } x > 0, \enspace t > 0, \\ & y(0,t) = \sin(t), \qquad y(x,0) = 0 . \end{align*} $$
Then the problem has no solution. First, let us see this in the language of [§1.9](ref:1.9#fopde-section). The characteristic curves are $t=-x+C$. If $\tau$ is the characteristic coordinate, then we find the equation $y_\tau = 0$ along the curve, meaning a solution is constant along characteristic curves. But these curves intersect both the $x$-axis and the $t$-axis. For example, the curve $t=-x+1$ intersects at $(1,0)$ and $(0,1)$. The solution is constant along the curve so $y(1,0)$ should equal $y(0,1)$. But $y(1,0) = 0$ and $y(0,1) = \sin(1) \neq 0$. See [Figure 6.7](ref:lt-half-infinite-ill-posed).

> FIGURE {fig:lt-half-infinite-ill-posed} number=6.7 src=../../media/half-infinite-ill-posed.svg
> alt: A diagram of the xt-plane where the first quadrant is shaded. The horizontal x-axis is labeled y equals 0 and the vertical t-axis is labeled y equals sin of t. The point (0,1) on the t-axis is labeled as y of (0,1) equals sin of 1 and the point (1,0) on the x-axis is labeled y of (1,0) equals 0. The two points are connected with a line labeled as t equals minus x plus 1 and also with 'y is constant along this characteristic curve'.
> caption: Ill-posed problem.

Now consider the transform. The transformed problem is
$$ -sY(x) + Y'(x) = 0, \enspace Y(0) = \frac{1}{s^2+1} , $$
and the solution ought to be
$$ Y(x) = \frac{1}{s^2+1} e^{sx} . $$
Importantly, this Laplace transform does not decay to zero at infinity! That is, since $x > 0$ in the region of interest,
$$ \lim_{s \to \infty} \frac{1}{s^2+1} e^{sx} = \infty \neq 0 . $$
It almost looks as if we could use the shifting property, but notice that the shift is in the wrong direction.

Of course, we need not restrict ourselves to first-order equations, although the computations become more involved for higher-order equations.

:::example {ex:example-6-5-3} Example 6.5.3
Let us use Laplace for the following problem:
$$ \begin{align*} & y_t = y_{xx}, \qquad 0 < x < \infty, \enspace t > 0,\\ & y_x(0,t) = f(t), \\ & y(x,0) = 0 . \end{align*} $$
This problem corresponds to a half-infinite insulated rod with a given heat flux at one end. The setup would come up in real life in the case of a sufficiently long rod, where we would not consider a long enough time for our solution to notice that we do not have an infinite rod but just a very long one. In any case, the real-life situation imposes other conditions on our solution $y$. For example, we will assume that the solution is bounded. This boundedness condition will stand in for a boundary condition at the infinite end. Boundedness is also sufficient for the Laplace transform in the $t$ variable to exist.

Transform the equation in the $t$ variable to find
$$ sY(x) = Y''(x) . $$
The general solution to this ODE is
$$ Y(x) = A e^{\sqrt{s}x} + B e^{-\sqrt{s} x} . $$
Note that $A$ and $B$ depend on $s$. As $y$ is bounded, then $Y(x)$ is bounded for any fixed $s > 0$, so for $Y(x)$ to stay bounded as $x \to \infty$, we must have $A=0$.

Now consider the boundary condition at $x=0$. Transform $Y'(0) = F(s)$ and so $-\sqrt{s}B = F(s)$. In other words,
$$ Y(x) = F(s) \frac{-1}{\sqrt{s}} e^{-\sqrt{s} x} . $$
If we look up the inverse transform in a table such as the one in [Appendix B](ref:B#laplacelist-appendix) (or we spend the afternoon doing calculus), we find
$$ {\mathcal L}^{-1}\left[\frac{1}{\sqrt{s}} e^{-\sqrt{s} x}\right] = \frac{1}{\sqrt{\pi t}} e^{\frac{-x^2}{4t}} . $$
So
$$ y(x,t) = {\mathcal L}^{-1} \left[ F(s) \frac{-1}{\sqrt{s}} e^{-\sqrt{s} x}\right] = \int_0^t f(\tau) \frac{-1}{\sqrt{\pi {(t-\tau)}}} e^{\frac{-x^2}{4(t-\tau)}} \, d\tau . $$

:::

Laplace can solve problems where separation of variables fails. Laplace does not mind nonhomogeneity, but it is essentially only useful for constant-coefficient equations.

## Exercises

:::exercise {exercise-6-5-001} number=6.5.1 answered=no src=ch-laplace.tex:2543
PROBLEM:
Solve
$$ \begin{align*} & y_t + y_x = 1, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = 1, \quad y(x,0) = 0 . \end{align*} $$

:::

:::exercise {exercise-6-5-002} number=6.5.2 answered=no src=ch-laplace.tex:2552
PROBLEM:
Solve
$$ \begin{align*} & y_t + \alpha y_x = 0, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = t, \quad y(x,0) = 0 . \end{align*} $$

:::

:::exercise {exercise-6-5-003} number=6.5.3 answered=no src=ch-laplace.tex:2561
PROBLEM:
Solve
$$ \begin{align*} & y_t + 2 y_x = x+t, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = 0, \quad y(x,0) = 0 . \end{align*} $$

:::

:::exercise {exercise-6-5-004} number=6.5.4 answered=no src=ch-laplace.tex:2570
PROBLEM:
For an $\alpha > 0$, solve
$$ \begin{align*} & y_t + \alpha y_x + y = 0, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = \sin(t), \quad y(x,0) = 0 . \end{align*} $$

:::

:::exercise {exercise-6-5-005} number=6.5.5 answered=no src=ch-laplace.tex:2579
PROBLEM:
Find the corresponding ODE problem for $Y(x)$, after transforming the $t$ variable
$$ \begin{align*} & y_{tt} + 3y_{xx} + y_{xt} + 3 y_x + y = \sin(x) + t, \qquad 0 < x < 1, \enspace t > 0, \\ & y(0,t) = 1, \quad y(1,t) = t, \quad y(x,0) = 1-x, \quad y_t(x,0) = 1 . \end{align*} $$
Do not solve the problem.
:::

:::exercise {exercise-6-5-006} number=6.5.6 answered=no src=ch-laplace.tex:2590
PROBLEM:
Write down a solution to
$$ \begin{align*} & y_t = y_{xx}, \qquad 0 < x < \infty, \enspace t > 0,\\ & y_x(0,t) = e^{-t}, \quad y(x,0) = 0 , \end{align*} $$
as a definite integral (convolution). Assume that $y$ is bounded.
:::

:::exercise {exercise-6-5-007} number=6.5.7 answered=no src=ch-laplace.tex:2599
PROBLEM:
Use the Laplace transform in $t$ to solve
$$ \begin{align*} & y_{tt} = y_{xx}, \qquad -\infty < x < \infty, \enspace t > 0,\\ & y(x,0) = 0, \quad y_t(x,0) = \sin(x) . \end{align*} $$
Assume that $y$ is bounded. Hint: Note that for any fixed $s > 0$, $e^{sx}$ blows up as $x \to +\infty$ and $e^{-sx}$ blows up as $x \to -\infty$.
:::

:::exercise {exercise-6-5-101} number=6.5.101 answered=yes src=ch-laplace.tex:2614
PROBLEM:
Solve
$$ \begin{align*} & y_t + y_x = 1, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = 0, \quad y(x,0) = 0 . \end{align*} $$

SOLUTION:
$y=(x-t)u(t-x)+t$
:::

:::exercise {exercise-6-5-102} number=6.5.102 answered=yes src=ch-laplace.tex:2626
PROBLEM:
For a $c > 0$, solve
$$ \begin{align*} & y_t + y_x + c y = 0, \qquad 0 < x < \infty, \enspace t > 0, \\ & y(0,t) = \sin(t), \quad y(x,0) = 0 . \end{align*} $$

SOLUTION:
$y=e^{-cx}\sin(t-x)u(t-x)$
:::

:::exercise {exercise-6-5-103} number=6.5.103 answered=yes src=ch-laplace.tex:2638
PROBLEM:
Find the corresponding ODE problem for $Y(x)$, after transforming the $t$ variable
$$ \begin{align*} & y_{tt} + 3y_{xx} + y = x+t, \qquad -1 < x < 1, \enspace t > 0, \\ & y(-1,t) = 0, \quad y(1,t) = 0, \quad y(x,0) = (1-x^2) , \quad y_t(x,0) = 0. \end{align*} $$
Do not solve the problem.
SOLUTION:
$s^2Y(x) - s(1-x^2) + 3Y''(x) + Y(x) = \frac{x}{s} + \frac{1}{s^2}, \quad Y(-1) = 0, \quad Y(1)=0$.
:::

:::exercise {exercise-6-5-104} number=6.5.104 answered=yes src=ch-laplace.tex:2653
PROBLEM:
Use the Laplace transform in $t$ to solve
$$ \begin{align*} & y_{tt} = y_{xx}, \qquad -\infty < x < \infty, \enspace t > 0,\\ & y(x,0) = \sin(x), \quad y_t(x,0) = 0 . \end{align*} $$
Assume that $y$ is bounded. Hint: Note that for any fixed $s > 0$, $e^{sx}$ blows up as $x \to +\infty$ and $e^{-sx}$ blows up as $x \to -\infty$.
SOLUTION:
$y=\sin(x)\cos(t)$
:::

:::exercise {exercise-6-5-105} number=6.5.105 answered=yes src=ch-laplace.tex:2669
PROBLEM:
Use the Laplace transform in $t$ to solve
$$ \begin{align*} & y_{t} = y_{xx}, \qquad 0 < x < \infty, \enspace t > 0,\\ & y(0,t) = f(t), \quad y(x,0) = 0 , \end{align*} $$
where $f(t)$ is some function. Assume that $y$ is bounded. Give the answer as a convolution.
SOLUTION:
$y(x,t) = \int_0^t f(\tau) \frac{x}{2 \sqrt{\pi {(t-\tau)^3}}} e^{\frac{-x^2}{4(t-\tau)}} \, d\tau$
:::

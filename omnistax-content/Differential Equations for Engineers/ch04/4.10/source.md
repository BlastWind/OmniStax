# 4.10 Dirichlet problem in the circle and the Poisson kernel {sec:dirichdisc-section}

:::note [section-notes]
*Note: 2 lectures, §9.7 in [EP](cite:EP), §10.8 in [BD](cite:BD)*
:::

## Laplace in polar coordinates

> IMAGE {img:polarcoords} src=../../media/polarcoords.svg
> alt: A diagram in the plane with a horizontal (x-axis) and vertical (y-axis). A point in the first quadrant is marked as (r,theta), and a line is drawn from the origin to this point. The distance from the origin to the point is marked as r, and the angle it makes with the positive x-axis is labeled as theta.

A more natural setting for the Laplace equation $\Delta u = 0$ is a circle rather than a rectangle. On the other hand, what makes the problem somewhat more difficult is that we need polar coordinates. Recall that the polar coordinates for the $(x,y)$-plane are $(r,\theta)$:
$$ x = r \cos \theta , \quad y = r \sin \theta , $$
where $r \geq 0$ and $-\pi < \theta \leq \pi$. So the point $(x,y)$ is distance $r$ from the origin at an angle $\theta$ from the positive $x$-axis.

> IMAGE {img:dirichdiscsetup} src=../../media/dirichdiscsetup.svg
> alt: A diagram of a circle of radius 1 centered at the origin in the xy-plane. The inside of the circle is shaded and marked with Delta u equals 0. The boundary circle is a dark bold line that is labeled as u of (1,theta) equals g of theta.

Now that we know our coordinates, let us give the problem we wish to solve. We have a circular region of radius 1, and we are interested in the Dirichlet problem for the Laplace equation for this region. Let $u(r,\theta)$ denote the temperature at the point $(r,\theta)$ in polar coordinates. We will prescribe the temperature on the circle as $g(\theta)$.

We have the problem:
$$ \begin{aligned} & \Delta u = 0 & & \text{for } \; r < 1, \\ & u(1,\theta) = g(\theta) & & \text{for } \; {-\pi} < \theta \leq \pi. \end{aligned} $$ {eq:dirichdisc-theprobeq} number=4.26

The first issue we face is that we do not know the Laplacian in polar coordinates. Normally, we would find $u_{xx}$ and $u_{yy}$ in terms of the derivatives in $r$ and $\theta$. We would need to solve for $r$ and $\theta$ in terms of $x$ and $y$. In this case, it is more convenient to work in reverse. We compute derivatives in $r$ and $\theta$ in terms of derivatives in $x$ and $y$ and then we solve. The computations are easier this way. First,
$$ \begin{aligned} & x_r = \cos \theta, & & x_\theta = - r \sin \theta, \\ & y_r = \sin \theta, & & y_\theta = r \cos \theta. \end{aligned} $$
By chain rule, we obtain
$$ \begin{align*} u_r & = u_x x_r + u_y y_r = \cos(\theta) u_x + \sin(\theta) u_y , \\ u_{rr} & = \cos(\theta) ( u_{xx} x_r +u_{xy} y_r ) + \sin(\theta) ( u_{yx} x_r +u_{yy} y_r ) \\ & = \cos^2(\theta) u_{xx} + 2 \cos(\theta)\sin(\theta) u_{xy} + \sin^2(\theta) u_{yy} . \end{align*} $$
Similarly for the $\theta$ derivative. Note that we have to use the product rule for the second derivative.
$$ \begin{align*} u_\theta & = u_x x_\theta + u_y y_\theta = -r\sin(\theta) u_x + r\cos(\theta) u_y , \\ u_{\theta\theta} & = -r\cos(\theta) u_x -r\sin(\theta) (u_{xx} x_\theta + u_{xy} y_\theta) -r\sin(\theta) u_y + r\cos(\theta) (u_{yx} x_\theta + u_{yy} y_\theta) \\ & = -r\cos(\theta) u_x -r\sin(\theta) u_y +r^2 \sin^2(\theta) u_{xx} -r^2 2\sin(\theta)\cos(\theta) u_{xy} +r^2 \cos^2(\theta) u_{yy} . \end{align*} $$
Let us now try to find $u_{xx} + u_{yy}$. We start with $\frac{1}{r^2} u_{\theta\theta}$ to get rid of those pesky $r^2$s. If we add $u_{rr}$ and use the fact that $\cos^2(\theta) +\sin^2(\theta) = 1$, we get
$$ \frac{1}{r^2} u_{\theta\theta} + u_{rr} = u_{xx} + u_{yy} - \frac{1}{r} \cos(\theta) u_x - \frac{1}{r} \sin(\theta) u_y . $$
We are not quite there yet, but all we are lacking is $\frac{1}{r} u_r$. We add it to obtain the *{index:Laplacian in polar coordinates}*:
$$ \boxed{~~ \Delta u = u_{xx} + u_{yy} = \frac{1}{r^2} u_{\theta\theta} + \frac{1}{r} u_{r} + u_{rr} . ~~} $$

Notice that the Laplacian in polar coordinates no longer has constant coefficients.

## Series solution

Let us separate variables as usual. That is, we try $u(r,\theta) = R(r)\Theta(\theta)$. Then
$$ 0 = \Delta u = \frac{1}{r^2} R \Theta'' + \frac{1}{r} R' \Theta + R'' \Theta . $$
We put $R$ on one side and $\Theta$ on the other and conclude that both sides must be constant.
$$ \begin{align*} \frac{1}{r^2} R \Theta'' & = - \left(\frac{1}{r} R' + R''\right) \Theta \\ \frac{\Theta''}{\Theta} & = - \frac{r R' + r^2 R''}{R} = -\lambda \end{align*} $$
We get two equations:
$$ \begin{align*} & \Theta'' + \lambda \Theta = 0 , \\ & r^2 R'' + r R' -\lambda R = 0. \end{align*} $$
We first focus on $\Theta$. We know that $u(r,\theta)$ ought to be $2\pi$-periodic in $\theta$, that is, $u(r,\theta) = u(r,\theta+2\pi)$. Therefore, the solution to $\Theta'' + \lambda \Theta = 0$ must be $2\pi$-periodic. We have seen such a problem in [Example 4.1.5](ref:4.1#bvp-periodic-example). We conclude that $\lambda = n^2$ for a nonnegative integer $n=0,1,2,3,\ldots$. The equation becomes $\Theta'' + n^2 \Theta = 0$. When $n=0$ the equation is just $\Theta'' = 0$, so we have the general solution $A \theta + B$. As $\Theta$ is periodic, $A=0$. For convenience, we write this solution as
$$ \Theta_0 = \frac{a_0}{2} $$
for some constant $a_0$. For positive $n$, the solution to $\Theta'' + n^2 \Theta = 0$ is
$$ \Theta_n = a_n \cos(n\theta) + b_n \sin(n\theta) , $$
for some constants $a_n$ and $b_n$.

Next, we consider the equation for $R$,
$$ r^2 R'' + r R' - n^2 R = 0. $$
This equation appeared in exercises before—we solved it in [Exercise 2.1.6](ref:2.1#sol-eulerex) and [Exercise 2.1.7](ref:2.1#sol-eulerexln). The idea is to try a solution $r^s$ and if that does not give us two solutions, also try a solution of the form $r^s \ln r$. We name the solution $R_n$ as usual. When $n=0$ we obtain
$$ R_0 = A r^0 + B r^0 \ln r = A + B \ln r , $$
and if $n > 0$, we get
$$ R_n = A r^n + B r^{-n} . $$
The function $u(r,\theta)$ must be finite (it cannot blow up) at the origin, that is, when $r=0$. So $B=0$ in both cases as otherwise $r^{-n}$ or $\ln r$ does blow up as $r\to 0$. Set $A=1$ in both cases; the constants in $\Theta_n$ will pick up the slack so nothing is lost. That is,
$$ R_0 = 1 \qquad \text{and} \qquad R_n = r^n . $$
Our building block solutions are
$$ u_0(r,\theta) = \frac{a_0}{2} \qquad \text{and} \qquad u_n(r,\theta) = a_n r^n \cos(n \theta) + b_n r^n \sin(n \theta) . $$
Putting everything together, our solution is
$$ \boxed{~~ u(r,\theta) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n r^n \cos(n \theta) + b_n r^n \sin(n \theta) \Bigr] . ~~} $$

We look at the boundary condition in [(4.26)](ref:dirichdisc-theprobeq),
$$ g(\theta) = u(1,\theta) = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n \cos(n \theta) + b_n \sin(n \theta) \Bigr]. $$
Therefore, to solve [(4.26)](ref:dirichdisc-theprobeq) we expand $g(\theta)$, which is a $2\pi$-periodic function, as a Fourier series, and then multiply the $n^{\text{th}}$ term by $r^n$. To find the $a_n$ and the $b_n$, we compute
$$ a_n = \frac{1}{\pi} \int_{-\pi}^\pi g(\theta) \cos (n\theta) \, d\theta \qquad \text{and} \qquad b_n = \frac{1}{\pi} \int_{-\pi}^\pi g(\theta) \sin (n\theta) \, d\theta. $$

:::example {ex:example-4-10-1} Example 4.10.1
Suppose we wish to solve
$$ \begin{align*} & \Delta u = 0 , \qquad 0 \leq r < 1, \quad -\pi < \theta \leq \pi,\\ & u(1,\theta) = \cos(10\,\theta), \qquad -\pi < \theta \leq \pi. \end{align*} $$

The $g(\theta)$ is already expanded, so the solution is
$$ u(r,\theta) = r^{10} \cos(10\,\theta) . $$
See the plot in [Figure 4.26](ref:dirichdisc-tenspeedfig). The thing to notice in this example is that the effect of a high frequency is mostly felt at the boundary. In the middle of the disc, the solution is very close to zero. That is because $r^{10}$ is rather small when $r$ is close to 0.

> FIGURE {fig:dirichdisc-tenspeedfig} number=4.26 src=../../media/dirichdisc-tenspeed.svg
> alt: A plot of the graph of a function u of (x,y) over the xy-plane over the inside of the circle of radius 1 centered at the origin. On the boundary the surface is oscillating up and down 10 times around the circumference. Then inside the surface approaches 0 quickly as (x,y) gets closer and closer to the origin.
> width: 7.5in
> caption: The solution of the Dirichlet problem in the disc with $\cos(10\,\theta)$ as boundary data.

:::

:::example {ex:example-4-10-2} Example 4.10.2
Let us solve a more difficult problem. Consider a long rod with a circular cross section of radius 1. Suppose we wish to solve the steady-state heat problem in the rod. If the rod is long enough, we simply need to solve the Laplace equation in two dimensions. We put the center of the rod at the origin, and we have exactly the region we are currently studying—a circle of radius 1. For the boundary conditions, suppose in Cartesian coordinates $x$ and $y$, the temperature on the boundary is 0 when $y < 0$, and it is $2y$ when $y > 0$.

Let us set the problem up. As $y = r\sin(\theta)$, then on the circle of radius 1, that is, where $r=1$, we have $2y = 2\sin(\theta)$. So
$$ \begin{align*} & \Delta u = 0 , \qquad 0 \leq r < 1, \quad -\pi < \theta \leq \pi,\\ & u(1,\theta) = \begin{cases} 2\sin(\theta) & \text{if } \; \phantom{-}0 \leq \theta \leq \pi, \\ 0 & \text{if } \; {-\pi} < \theta < 0. \end{cases} \end{align*} $$

We must now compute the Fourier series for the boundary condition. By now the reader has plentiful experience in computing Fourier series, and so we simply state that
$$ u(1,\theta) = \frac{2}{\pi} + \sin(\theta) + \sum_{n=1}^\infty \frac{-4}{\pi(4n^2-1)} \cos(2n\theta) . $$

:::exercise {exercise-4-10-001} number=4.10.1 answered=no src=ch-fourier-and-pde.tex:6258
PROBLEM:
Compute the series for $u(1,\theta)$ and verify that it really is what we have just claimed. Hint: Be careful, make sure not to divide by zero.
:::

To obtain the solution (see [Figure 4.27](ref:dirichdisc-zero2yfig)), we write its series by multiplying terms in the series for $g(\theta)$ by $r^n$ in the right places:
$$ u(r,\theta) = \frac{2}{\pi} + r\sin(\theta) + \sum_{n=1}^\infty \frac{-4r^{2n}}{\pi(4n^2-1)} \cos(2n\theta) . $$

> FIGURE {fig:dirichdisc-zero2yfig} number=4.27 src=../../media/dirichdisc-zero2y.svg
> alt: A plot of the graph of a function u of (x,y) over the xy-plane over the inside of the circle of radius 1 centered at the origin. On the boundary the surface is either at zero when y is negative or going up linearly with y for positive y. Inside the circle, the surface appears as if a rubber sheet had been placed on the values at the boundary.
> width: 7.5in
> caption: The solution of the Dirichlet problem with boundary data 0 for $y < 0$ and $2y$ for $y > 0$.

:::

## Poisson kernel

There is another way to solve the Dirichlet problem—with the help of an integral kernel. That is, we will find a function $P(r,\theta,\alpha)$ called the *{index:Poisson kernel}*^[Named for the French mathematician [Siméon Denis Poisson](https://en.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson) (1781–1840).] such that
$$ u(r,\theta) = \frac{1}{2\pi} \int_{-\pi}^{\pi} P(r,\theta,\alpha) \, g(\alpha) \,d\alpha . $$
While the integral will generally not be solvable analytically, it can be evaluated numerically. In fact, unless the boundary data is given as a Fourier series already, it may be much easier to numerically evaluate this formula as there is only one integral to evaluate.

The formula also has theoretical applications. For instance, as $P(r,\theta,\alpha)$ will have infinitely many derivatives, then via differentiating under the integral, we find that the solution $u(r,\theta)$ has infinitely many derivatives, at least when inside the circle, $r < 1$. By “having infinitely many derivatives,” what you should think of is that $u(r,\theta)$ has “no corners” and all of its partial derivatives of all orders exist and also have “no corners.”

We will compute the formula for $P(r,\theta,\alpha)$ from the series solution, and this idea can be applied anytime you have a convenient series solution where the coefficients are obtained via integration. Hence you can apply this reasoning to obtain such integral kernels for other equations, such as the heat equation. The computation is long and {index:tedious}, but not overly difficult. Since the ideas are often applied in similar contexts, it is good to understand how this computation works.

What we do is start with the series solution and replace the coefficients with the integrals that compute them. Then we try to write everything as a single integral. We must use a different dummy variable for the integration and hence we use $\alpha$ instead of $\theta$.
$$ \begin{split} u(r,\theta) & = \frac{a_0}{2} + \sum_{n=1}^\infty \Bigl[ a_n r^n \cos(n \theta) + b_n r^n \sin(n \theta) \Bigr] \\ & = \underbrace{ \left( \frac{1}{2\pi} \int_{-\pi}^\pi g(\alpha) \, d\alpha \right) }_{\frac{a_0}{2}} + \sum_{n=1}^\infty \Biggl[ \underbrace{ \left( \frac{1}{\pi} \int_{-\pi}^\pi g(\alpha) \cos (n\alpha) \, d\alpha \right) }_{a_n} r^n \cos(n \theta) + \\ & ~~~~~~~~ + \underbrace{ \left( \frac{1}{\pi} \int_{-\pi}^\pi g(\alpha) \sin (n\alpha) \, d\alpha \right) }_{b_n} r^n \sin(n \theta) \Biggr] \\ & = \frac{1}{2\pi} \int_{-\pi}^\pi \left( g(\alpha) + 2 \sum_{n=1}^\infty g(\alpha) \cos (n\alpha) \, r^n \cos(n \theta) + g(\alpha) \sin (n\alpha) \, r^n \sin(n \theta) \right) \,d\alpha \\ & = \frac{1}{2\pi} \int_{-\pi}^\pi \underbrace{ \left( 1 + 2 \sum_{n=1}^\infty r^n \bigl( \cos (n\alpha) \cos(n \theta) + \sin (n\alpha) \sin(n \theta) \bigr) \right) }_{P(r,\theta,\alpha)} g(\alpha) \,d\alpha . \end{split} $$
OK, so we have what we wanted: The expression in the parentheses is the Poisson kernel, $P(r,\theta,\alpha)$. However, we can do a lot better. It is still given as a series, and we would really like to have a nice simple expression for it. We must work a little harder. The trick is to rewrite everything in terms of complex exponentials. Let us work just on the kernel.
$$ \begin{split} P(r,\theta,\alpha) & = 1 + 2 \sum_{n=1}^\infty r^n \bigl( \cos (n\alpha) \cos(n \theta) + \sin (n\alpha) \sin(n \theta) \bigr) \\ & = 1 + 2 \sum_{n=1}^\infty r^n \cos \bigl(n(\theta-\alpha)\bigr) \\ & = 1 + \sum_{n=1}^\infty r^n \bigl( e^{in(\theta-\alpha)} + e^{-in(\theta-\alpha)} \bigr) \\ & = 1 + \sum_{n=1}^\infty {\bigl( re^{i(\theta-\alpha)}\bigr)}^{n} + \sum_{n=1}^\infty {\bigl( re^{-i(\theta-\alpha)}\bigr)}^{n} . \end{split} $$
In the expression above, we recognize the *{index:geometric series}*. Recall from calculus that if $z$ is a complex number where $\lvert z \rvert < 1$, then
$$ \sum_{n=1}^\infty z^n = \frac{z}{1-z} . $$
Note that $n$ starts at $1$, and that is why we have the $z$ in the numerator. It is the standard geometric series multiplied by $z$. We can use $z = re^{i(\theta-\alpha)}$, as lo and behold $\lvert re^{i(\theta-\alpha)} \rvert = r < 1$. We continue with the computation.
$$ \begin{split} P(r,\theta,\alpha) & = 1 + \sum_{n=1}^\infty {\bigl( re^{i(\theta-\alpha)}\bigr)}^{n} + \sum_{n=1}^\infty {\bigl( re^{-i(\theta-\alpha)}\bigr)}^{n} \\ & = 1 + \frac{re^{i(\theta-\alpha)}}{1-re^{i(\theta-\alpha)}} + \frac{re^{-i(\theta-\alpha)}}{1-re^{-i(\theta-\alpha)}} \\ & = \frac{ \bigl(1-re^{i(\theta-\alpha)}\bigr)\bigl(1-re^{-i(\theta-\alpha)}\bigr) + \bigl(1-re^{-i(\theta-\alpha)}\bigr)re^{i(\theta-\alpha)} + \bigl(1-re^{i(\theta-\alpha)}\bigr)re^{-i(\theta-\alpha)}} {\bigl(1-re^{i(\theta-\alpha)}\bigr)\bigl(1-re^{-i(\theta-\alpha)}\bigr)} \\ & = \frac{1 -r^2}{1 - re^{i(\theta-\alpha)} - re^{-i(\theta-\alpha)} +r^2} \\ & = \frac{1 -r^2}{1 - 2r\cos(\theta-\alpha) +r^2} . \end{split} $$
That is a formula we can live with. The solution to the Dirichlet problem using the Poisson kernel is
$$ \boxed{~~ u(r,\theta) = \frac{1}{2\pi} \int_{-\pi}^{\pi} \frac{1 -r^2}{1 - 2r\cos(\theta-\alpha) +r^2} g(\alpha) \, d\alpha . ~~} $$
Sometimes the formula for the Poisson kernel is given together with the constant $\frac{1}{2\pi}$, in which case we should, of course, not leave it in front of the integral. Sometimes the limits of the integral are given as 0 to $2\pi$; everything inside is $2\pi$-periodic in $\alpha$, so this does not change the integral.

> IMAGE {img:poisson} src=../../media/poisson.svg
> alt: A diagram of a circle. There is a point marked (r,theta) inside the circle, and a point (1,alpha) marked on the circle. The distance from the center of the circle to (1,alpha) is of length 1, the distance from the center to (r,theta) is r, and the distance between (1,alpha) and (r,theta) is s.

Let us not leave the Poisson kernel without explaining its geometric meaning. The kernel corresponding to the point $(r,\theta)$ in the disc and the point $(1,\alpha)$ on the boundary depends only on the distance of $(r,\theta)$ from the center and the distance between $(r,\theta)$ and $(1,\alpha)$. Let $s$ be the distance from $(r,\theta)$ to $(1,\alpha)$. This distance $s$ in polar coordinates is given precisely by the square root of $1 - 2r\cos(\theta-\alpha) +r^2$. That is, the Poisson kernel is really the formula
$$ \frac{1-r^2}{s^2} . $$

One final note we make about the formula is that it is really a weighted average of the boundary values. First, we look at what happens at the origin, that is, when $r=0$:
$$ \begin{split} u(0,0) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} \frac{1 -0^2}{1 - 2(0)\cos(0-\alpha) +0^2} g(\alpha) \, d\alpha \\ & = \frac{1}{2\pi} \int_{-\pi}^{\pi} g(\alpha) \, d\alpha . \end{split} $$
So $u(0,0)$ is precisely the average value of $g(\theta)$ and therefore the average value of $u$ on the boundary. This is a general feature of harmonic functions, the value at some point $p$ is equal to the average of the values on a circle centered at $p$.

What the formula says at other points inside the circle is that the value of the solution is a weighted average of the boundary data $g(\theta)$. The kernel is bigger when $(1,\alpha)$ is closer to $(r,\theta)$. Therefore, when computing $u(r,\theta)$, we give more weight to the values $g(\alpha)$ when $(1,\alpha)$ is closer to $(r,\theta)$ and less weight to the values $g(\alpha)$ when $(1,\alpha)$ is far from $(r,\theta)$.

## Exercises

:::exercise {exercise-4-10-002} number=4.10.2 answered=no src=ch-fourier-and-pde.tex:6594
PROBLEM:
Using series, solve $\Delta u = 0$, $u(1,\theta) = \lvert \theta \rvert$, for $-\pi < \theta \leq \pi$.
:::

:::exercise {exercise-4-10-003} number=4.10.3 answered=no src=ch-fourier-and-pde.tex:6600
PROBLEM:
Using series solve $\Delta u = 0$, $u(1,\theta) = g(\theta)$ for the following data. Hint: trig identities.

a) $g(\theta) = {1}/{2} + 3\sin(\theta) + \cos(3\theta)$
b) $g(\theta) = 3\cos(3\theta) + 3\sin(3\theta) + \sin(9\theta)$
c) $g(\theta) = 2 \cos(\theta+1)$
d) $g(\theta) = \sin^2(\theta)$

:::

:::exercise {exercise-4-10-004} number=4.10.4 answered=no src=ch-fourier-and-pde.tex:6617
PROBLEM:
Using the Poisson kernel, give the solution to $\Delta u = 0$, where $u(1,\theta)$ is zero for $\theta$ outside the interval $[-{\pi}/{4},{\pi}/{4}]$ and $u(1,\theta)$ is 1 for $\theta$ on the interval $[-{\pi}/{4},{\pi}/{4}]$.
:::

:::exercise {exercise-4-10-005} number=4.10.5 answered=no src=ch-fourier-and-pde.tex:6625
PROBLEM:
[2]

a) Draw a graph for the Poisson kernel as a function of $\alpha$ when $r={1}/{2}$ and $\theta = 0$.
b) Describe what happens to the graph when you make $r$ bigger (as it approaches 1).
c) Knowing that the solution $u(r,\theta)$ is the weighted average of $g(\theta)$ with the Poisson kernel as the weight, explain what your answer to part b) means.

:::

:::exercise {exercise-dirichproblemxy} number=4.10.6 answered=no src=ch-fourier-and-pde.tex:6638 label=exercise:dirichproblemxy
PROBLEM:
Let $g(\theta)$ be the function $xy = \cos \theta \sin \theta$ on the boundary. Use the series solution to find a solution to the Dirichlet problem $\Delta u = 0$, $u(1,\theta) = g(\theta)$. Now convert the solution to Cartesian coordinates $x$ and $y$. Is this solution surprising? Hint: Use your trig identities.
:::

:::exercise {exercise-4-10-007} number=4.10.7 answered=no src=ch-fourier-and-pde.tex:6647
PROBLEM:
Carry out the computation we needed in the separation of variables and solve $r^2 R'' + r R' - n^2 R = 0$, for $n=0,1,2,3,\ldots$.
:::

:::exercise {exercise-4-10-008} number=4.10.8 answered=no src=ch-fourier-and-pde.tex:6651
PROBLEM:
**challenging**
Derive the series solution to the Dirichlet problem if the region is a circle of radius $\rho$ rather than 1. That is, solve $\Delta u = 0$, $u(\rho,\theta) = g(\theta)$.
:::

:::exercise {exercise-4-10-009} number=4.10.9 answered=no src=ch-fourier-and-pde.tex:6658
PROBLEM:
**challenging**

a) Find the solution for $\Delta u = 0$, $u(1,\theta) = x^2y^3 + 5 x^2$. Write the answer in Cartesian coordinates.
b) Now solve $\Delta u = 0$, $u(1,\theta) = x^k y^\ell$. Write the solution in Cartesian coordinates.
c) Given a polynomial $P(x,y) = \sum_{j=0}^m \sum_{k=0}^n c_{j,k} x^j y^k$, solve $\Delta u = 0$, $u(1,\theta) = P(x,y)$ (that is, write down the formula for the answer). Write the answer in Cartesian coordinates.

Notice the answer is again a polynomial in $x$ and $y$. See also [Exercise 4.10.6](ref:exercise-dirichproblemxy).
:::

:::exercise {exercise-4-10-101} number=4.10.101 answered=yes src=ch-fourier-and-pde.tex:6681
PROBLEM:
Using series solve $\Delta u = 0$, $u(1,\theta) = 1+ \sum\limits_{n=1}^\infty \frac{1}{n^2}\sin(n\theta)$.
SOLUTION:
$u = 1+ \sum\limits_{n=1}^\infty \frac{1}{n^2}r^n\sin(n\theta)$
:::

:::exercise {exercise-4-10-102} number=4.10.102 answered=yes src=ch-fourier-and-pde.tex:6689
PROBLEM:
Using the series solution find the solution to $\Delta u = 0$, $u(1,\theta) = 1- \cos(\theta)$. Express the solution in Cartesian coordinates (that is, using $x$ and $y$).
SOLUTION:
$u = 1-x$
:::

:::exercise {exercise-4-10-103} number=4.10.103 answered=yes src=ch-fourier-and-pde.tex:6698
PROBLEM:

a) Try and guess a solution to $\Delta u = -1$, $u(1,\theta) = 0$. Hint: Try a solution that only depends on $r$. Also, don’t worry about the boundary condition at first.
b) Now solve $\Delta u = -1$, $u(1,\theta) = \sin(2\theta)$ using superposition.

SOLUTION:
a) $u = \frac{-1}{4} r^2 + \frac{1}{4}$ b) $u = \frac{-1}{4} r^2 + \frac{1}{4} + r^2 \sin(2\theta)$
:::

:::exercise {exercise-4-10-104} number=4.10.104 answered=yes src=ch-fourier-and-pde.tex:6714
PROBLEM:
**challenging**
Derive the Poisson kernel solution if the region is a circle of radius $\rho$ rather than 1. That is, solve $\Delta u = 0$, $u(\rho,\theta) = g(\theta)$.
SOLUTION:
$\displaystyle u(r,\theta) = \frac{1}{2\pi} \int_{-\pi}^{\pi} \frac{\rho^2 -r^2}{\rho^2 - 2r\rho\cos(\theta-\alpha) +r^2} g(\alpha) \, d\alpha$
:::

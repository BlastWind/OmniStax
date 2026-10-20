# 4.9 Steady state temperature and the Laplacian {sec:dirich-section}

:::note [section-notes]
*Note: 1 lecture, §9.7 in [EP](cite:EP), §10.8 in [BD](cite:BD)*
:::

Consider an insulated wire, a plate, or a 3-dimensional object. We apply certain fixed temperatures on the ends of the wire, the edges of the plate, or on all sides of the 3-dimensional object. We wish to find the *{index:steady-state temperature}* distribution. That is, we wish to know the temperature after a long enough period of time.

We are really seeking a solution to the heat equation that is not dependent on time. We first solve the problem in one space variable. We are looking for a function $u$ that satisfies
$$ u_t = k u_{xx} , $$
but such that $u_t = 0$ for all $x$ and $t$. Hence, we are looking for a function of $x$ alone that satisfies $u_{xx} = 0$. It is easy to solve this equation by integration, and we see that $u = Ax+B$ for some constants $A$ and $B$.

Consider an insulated wire where we apply constant temperature $T_1$ at one end (say where $x=0$) and $T_2$ on the other end (at $x=L$ where $L$ is the length of the wire). Our steady-state solution is
$$ u(x) = \frac{T_2-T_1}{L} x + T_1 . $$
It is simply a straight line from one end to the other. This solution agrees with the common-sense intuition about how heat should be distributed in the wire. So in one dimension, the steady-state solutions are just straight lines.

Things are more complicated in two or more space dimensions. We restrict ourselves to two space dimensions for simplicity. The heat equation in two space variables is
$$ u_t = k(u_{xx} + u_{yy}) , $$ {eq:dirich-heateq} number=4.19
or more commonly written as $u_t = k \Delta u$ or $u_t = k \nabla^2 u$. The $\Delta$ and $\nabla^2$ symbols both mean $\frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$. We will use $\Delta$ here. The reason for using such a notation is that you can define $\Delta$ to be the right thing for any number of space dimensions and then the heat equation is always $u_t = k \Delta u$. The operator $\Delta$ is called the *{index:Laplacian}*.

OK, now that we have notation out of the way, let us see what an equation for the steady-state solution looks like. We are looking for a solution to [(4.19)](ref:dirich-heateq) that does not depend on $t$, that is, $u_t = 0$. Hence, we are looking for a function $u(x,y)$ such that
$$ \boxed{~~ \Delta u = u_{xx} + u_{yy} = 0 . ~~} $$
This equation is called the *{index:Laplace equation}*^[Named after the French mathematician [Pierre-Simon, marquis de Laplace](https://en.wikipedia.org/wiki/Laplace) (1749–1827).] and is an example of an elliptic equation. Solutions to the Laplace equation are called *harmonic functions{index-entry:harmonic function}* and have many nice properties and applications far beyond the steady-state heat problem.

Harmonic functions in two variables are no longer just linear (graphs are not just planes). For example, you can check that the functions $x^2-y^2$ and $xy$ are harmonic. However, note that if $u_{xx}$ is positive, $u$ is concave up in the $x$ direction, then $u_{yy}$ must be negative and $u$ must be concave down in the $y$ direction. A harmonic function can never have a “hilltop” or “valley” on the graph. This observation is consistent with our intuitive idea of steady-state heat distribution; the hottest or coldest spot should not be inside.

Commonly the Laplace equation is part of a so-called *{index:Dirichlet problem}*^[Named after the German mathematician [Johann Peter Gustav Lejeune Dirichlet](https://en.wikipedia.org/wiki/Dirichlet) (1805–1859).]. That is, we have a region in the $xy$-plane and we specify certain values along the boundaries of the region. We then try to find a solution $u$ to the Laplace equation defined on this region such that $u$ agrees with the values we specified on the boundary.

In this section, we consider a rectangular region. For simplicity, we specify boundary values to be zero at three of the four edges and only specify an arbitrary function at one edge. With the principle of superposition, we can use this simpler solution to derive the general solution for arbitrary boundary values by solving four different problems, one for each edge, and adding those solutions together. This setup is left as an exercise.

We wish to solve the following problem. Let $h$ and $w$ be the height and width of our rectangle, with one corner at the origin and lying in the first quadrant, so that the region is given by $0 < x < w$ and $0 < y < h$. Consider the problem

$$ \begin{align*} & \Delta u = 0 , \tag{4.20} \\ & u(0,y) = 0 \quad \text{for } 0 < y < h, \tag{4.21} \\ & u(x,h) = 0 \quad \text{for } 0 < x < w, \tag{4.22} \\ & u(w,y) = 0 \quad \text{for } 0 < y < h, \tag{4.23} \\ & u(x,0) = f(x) \quad \text{for } 0 < x < w. \tag{4.24} \end{align*} $$ {eq:dirich-eq1,dirich-eq2,dirich-eq3,dirich-eq4,dirich-eq5} number=4.20,4.21,4.22,4.23,4.24

> IMAGE {img:dirichsetup} src=../../media/dirichsetup.svg
> alt: A diagram of shaded rectangle in the xy-plane with vertices (0,0), (w,0), (w,h), and (0,h). The inside of the rectangle is shaded and labeled Delta u equals 0. The top and the sides are labeled as u equals 0. The bottom side is labeled as u equals f of x.

The method we apply is separation of variables. Again, we will come up with enough building-block solutions satisfying all the homogeneous boundary conditions (all conditions except [(4.24)](ref:dirich-eq5)). We notice that superposition still works for the equation and all the homogeneous conditions. Therefore, we can use the Fourier series for $f(x)$ to find a solution $u$ that also solves [(4.24)](ref:dirich-eq5).

We try $u(x,y) = X(x)Y(y)$. We plug $u$ into the equation to get
$$ X''Y + XY'' = 0 . $$
We put the $X$s on one side and the $Y$s on the other to get
$$ - \frac{X''}{X} = \frac{Y''}{Y} . $$
The left-hand side only depends on $x$ and the right-hand side only depends on $y$. Therefore, there is some constant $\lambda$ such that $\lambda = \frac{-X''}{X} = \frac{Y''}{Y}$. And we get two equations
$$ \begin{align*} & X'' + \lambda X = 0 , \\ & Y'' - \lambda Y = 0 . \end{align*} $$
Furthermore, the homogeneous boundary conditions imply that $X(0) = X(w) = 0$ and $Y(h) = 0$. Using the equation for $X$, we have already seen that there is a nontrivial solution if and only if $\lambda = \lambda_n = \frac{n^2 \pi^2}{w^2}$ and the solution is a multiple of
$$ X_n(x) = \sin \left( \frac{n \pi}{w} x \right) . $$
For these given $\lambda_n$, the general solution for $Y$ (one for each $n$) is
$$ Y_n(y) = A_n \cosh \left( \frac{n \pi}{w} y \right) + B_n \sinh \left( \frac{n \pi}{w} y \right) . $$ {eq:dirich-Yngensol} number=4.25
There is only one condition on $Y_n$ and hence we can pick one of $A_n$ or $B_n$ to be something convenient. It will be useful to have $Y_n(0) = 1$, so let $A_n=1$. Setting $Y_n(h) = 0$ and solving for $B_n$, we get
$$ B_n = \frac{- \cosh \left( \frac{n \pi h }{w} \right)} {\sinh \left( \frac{n \pi h }{w} \right)} . $$
After we plug the $A_n$ and $B_n$ into [(4.25)](ref:dirich-Yngensol) and simplify by using the identity $\sinh(\alpha-\beta) = \sinh(\alpha) \cosh(\beta) - \cosh(\alpha) \sinh(\beta)$, we find
$$ Y_n(y) = \frac{\sinh \left( \frac{n \pi (h-y) }{w} \right)} {\sinh \left( \frac{n \pi h }{w} \right)} . $$
We define $u_n(x,y) = X_n(x)Y_n(y)$. Note that $u_n$ satisfies [(4.20)](ref:dirich-eq1)–[(4.23)](ref:dirich-eq4). Observe
$$ u_n(x,0) = X_n(x)Y_n(0) = \sin \left( \frac{n \pi}{w} x \right) . $$
Suppose
$$ f(x) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi x }{w} \right) . $$
Then we get a solution of [(4.20)](ref:dirich-eq1)–[(4.24)](ref:dirich-eq5) of the following form.
$$ \boxed{~~ u(x,y) = \sum_{n=1}^\infty b_n u_n(x,y) = \sum_{n=1}^\infty b_n \sin \left( \frac{n \pi}{w} x \right) \left( \frac{\sinh \left( \frac{n \pi (h-y) }{w} \right)} {\sinh \left( \frac{n \pi h }{w} \right)} \right) . ~~} $$
As $u_n$ satisfies [(4.20)](ref:dirich-eq1)–[(4.23)](ref:dirich-eq4), a linear combination (finite or infinite) of $u_n$, and hence $u$, satisfies [(4.20)](ref:dirich-eq1)–[(4.23)](ref:dirich-eq4). We plug in $y=0$ to see that $u$ satisfies [(4.24)](ref:dirich-eq5) as well.

:::example {ex:example-4-9-1} Example 4.9.1
Take $w=h=\pi$ and let $f(x) = \pi$. Let us compute the sine series for the function $\pi$ (same as the series for the square wave). For $0 < x < \pi$, we have
$$ f(x) = \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{4}{n} \sin (n x) . $$
The solution $u(x,y)$, see [Figure 4.25](ref:dirichsquareplot-fig), to the corresponding Dirichlet problem is given as
$$ u(x,y) = \sum_{\substack{n=1 \\ n \text{ odd}}}^\infty \frac{4}{n} \sin (n x) \left( \frac{\sinh \bigl( n (\pi-y) \bigr) }{\sinh (n \pi)} \right) . $$

> FIGURE {fig:dirichsquareplot-fig} number=4.25 src=../../media/dirichsquareplot.svg
> alt: A plot of the graph of a function u of (x,y) over the xy-plane over the square region where x is between 0 and pi and y is between 0 and pi. On the side of the square where y equals 0, the function equals pi and on the remaining three sides it is 0. In the middle it appears almost as if one stretched a rubber sheet and fixed it on the sides at the given values.
> width: 7.5in
> caption: Steady state temperature of a square plate, three sides held at zero and one side held at $\pi$.

:::

This scenario corresponds to the steady-state temperature on a square plate of width $\pi$ with three sides held at 0 degrees and one side held at $\pi$ degrees. If we have arbitrary initial data on all sides, then we solve four problems, each using one piece of nonhomogeneous data. Then we use the principle of superposition to add up all four solutions to have a solution to the original problem.

A different way to visualize solutions of the Laplace equation is to take a wire and bend it so that it corresponds to the graph of the temperature above the boundary of your region. Cut a rubber sheet in the shape of your region—a square in our case—and stretch it, fixing the edges of the sheet to the wire. The rubber sheet is a good approximation of the graph of the solution to the Laplace equation with the given boundary data.

## Exercises

:::exercise {exercise-4-9-001} number=4.9.1 answered=no src=ch-fourier-and-pde.tex:5726
PROBLEM:
In the region described by $0 < x < \pi$ and $0 < y < \pi$, solve the problem
$$ \Delta u = 0, \quad u(x,0) = \sin x, \quad u(x,\pi) = 0, \quad u(0,y) = 0, \quad u(\pi,y) = 0 . $$

:::

:::exercise {exercise-4-9-002} number=4.9.2 answered=no src=ch-fourier-and-pde.tex:5736
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 1$, solve the problem
$$ \begin{array}{ll} u_{xx} + u_{yy} = 0, & \\ u(x,0) = \sin (\pi x) - \sin (2\pi x), \quad & u(x,1) = 0, \\ u(0,y) = 0, \quad & u(1,y) = 0 . \end{array} $$

:::

:::exercise {exercise-4-9-003} number=4.9.3 answered=no src=ch-fourier-and-pde.tex:5748
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 1$, solve the problem
$$ \begin{align*} & u_{xx} + u_{yy} = 0, \\ & u(x,0) = u(x,1) = u(0,y) = u(1,y) = C . \end{align*} $$
for some constant $C$. Hint: Guess, then check your intuition.
:::

:::exercise {dirich-diffsepexr} number=4.9.4 answered=no src=ch-fourier-and-pde.tex:5757 label=dirich:diffsepexr
PROBLEM:
In the region described by $0 < x < \pi$ and $0 < y < \pi$, solve
$$ \Delta u = 0, \quad u(x,0) = 0, \quad u(x,\pi) = \pi, \quad u(0,y) = y, \quad u(\pi,y) = y . $$
Hint: Try a solution of the form $u(x,y) = X(x) + Y(y)$ (different separation of variables).
:::

:::exercise {exercise-4-9-005} number=4.9.5 answered=no src=ch-fourier-and-pde.tex:5772
PROBLEM:
Use the solution of [Exercise 4.9.4](ref:dirich-diffsepexr) to solve
$$ \Delta u = 0, \quad u(x,0) = \sin x, \quad u(x,\pi) = \pi, \quad u(0,y) = y, \quad u(\pi,y) = y . $$
Hint: Use superposition.
:::

:::exercise {exercise-4-9-006} number=4.9.6 answered=no src=ch-fourier-and-pde.tex:5784
PROBLEM:
In the region described by $0 < x < w$ and $0 < y < h$, solve the problem
$$ \begin{array}{ll} u_{xx} + u_{yy} = 0, & \\ u(x,0) = 0, \quad & u(x,h) = f(x), \\ u(0,y) = 0, \quad & u(w,y) = 0. \end{array} $$
The solution should be in series form using the Fourier-series coefficients of $f(x)$.
:::

:::exercise {exercise-4-9-007} number=4.9.7 answered=no src=ch-fourier-and-pde.tex:5798
PROBLEM:
In the region described by $0 < x < w$ and $0 < y < h$, solve the problem
$$ \begin{array}{ll} u_{xx} + u_{yy} = 0, & \\ u(x,0) = 0, \quad & u(x,h) = 0, \\ u(0,y) = f(y), \quad & u(w,y) = 0. \end{array} $$
The solution should be in series form using the Fourier-series coefficients of $f(y)$.
:::

:::exercise {exercise-4-9-008} number=4.9.8 answered=no src=ch-fourier-and-pde.tex:5812
PROBLEM:
In the region described by $0 < x < w$ and $0 < y < h$, solve the problem
$$ \begin{array}{ll} u_{xx} + u_{yy} = 0, & \\ u(x,0) = 0, \quad & u(x,h) = 0, \\ u(0,y) = 0, \quad & u(w,y) = f(y). \end{array} $$
The solution should be in series form using the Fourier-series coefficients of $f(y)$.
:::

:::exercise {exercise-4-9-009} number=4.9.9 answered=no src=ch-fourier-and-pde.tex:5826
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 1$, solve the problem
$$ \begin{array}{ll} u_{xx} + u_{yy} = 0, & \\ u(x,0) = \sin (9 \pi x), \quad & u(x,1) = \sin (2 \pi x), \\ u(0,y) = 0, \quad & u(1,y) = 0 . \end{array} $$
Hint: Use superposition.
:::

:::exercise {exercise-4-9-010} number=4.9.10 answered=no src=ch-fourier-and-pde.tex:5839
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 1$, solve the problem
$$ \begin{align*} & u_{xx} + u_{yy} = 0, \\ & u(x,0) = \sin (\pi x), \quad u(x,1) = \sin (\pi x), \\ & u(0,y) = \sin (\pi y), \quad u(1,y) = \sin (\pi y) . \end{align*} $$
Hint: Use superposition.
:::

:::exercise {exercise-4-9-011} number=4.9.11 answered=no src=ch-fourier-and-pde.tex:5849
PROBLEM:
**challenging**
Using only your intuition find $u({1}/{2},{1}/{2})$, for the problem $\Delta u = 0$, where $u(0,y) = u(1,y) = 100$ for $0 < y < 1$, and $u(x,0) = u(x,1) = 0$ for $0 < x < 1$. Explain.
:::

:::exercise {exercise-4-9-101} number=4.9.101 answered=yes src=ch-fourier-and-pde.tex:5859
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 1$, solve the problem
$$ \Delta u = 0, \quad u(x,0) = \sum_{n=1}^\infty \frac{1}{n^2} \sin (n \pi x), \quad u(x,1) = 0, \quad u(0,y) = 0, \quad u(1,y) = 0 . $$

SOLUTION:
$u(x,y) = \sum\limits_{n=1}^\infty \frac{1}{n^2} \sin ( n \pi x ) \left( \frac{\sinh ( n \pi (1-y) )}{\sinh ( n \pi )} \right)$
:::

:::exercise {exercise-4-9-102} number=4.9.102 answered=yes src=ch-fourier-and-pde.tex:5878
PROBLEM:
In the region described by $0 < x < 1$ and $0 < y < 2$, solve the problem
$$ \Delta u = 0, \quad u(x,0) = 0.1 \sin (\pi x), \quad u(x,2) = 0, \quad u(0,y) = 0, \quad u(1,y) = 0 . $$

SOLUTION:
$u(x,y) = 0.1 \sin ( \pi x ) \left( \frac{\sinh ( \pi (2-y) )} {\sinh ( 2 \pi )} \right)$
:::

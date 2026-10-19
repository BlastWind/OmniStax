# 5.1 Sturm–Liouville problems {sec:slproblems-section}

:::note [section-notes]
*Note: 2 lectures, §10.1 in [EP](cite:EP), §11.2 in [BD](cite:BD)*
:::

## Boundary value problems

In [chapter 4](ref:4#FS-chapter), we encountered several different eigenvalue problems such as:
$$ X''(x) + \lambda X(x) = 0 , $$
with different boundary conditions{index-entry:Dirichlet boundary conditions}{index-entry:Neumann boundary conditions}{index-entry:Mixed boundary conditions}
$$ \begin{array}{rrl} X(0) = 0 & ~~X(L) = 0 & ~~\text{(Dirichlet), or} \\ X'(0) = 0 & ~~X'(L) = 0 & ~~\text{(Neumann), or} \\ X'(0) = 0 & ~~X(L) = 0 & ~~\text{(Mixed), or} \\ X(0) = 0 & ~~X'(L) = 0 & ~~\text{(Mixed)}, \ldots \end{array} $$
These boundary problems came up in the study of the heat equation $u_t = k u_{xx}$ when we were trying to solve the equation by the method of separation of variables in [§4.6](ref:4.6#heateq-section). Dirichlet conditions correspond to applying a zero temperature at the ends, Neumann means insulating the ends, etc. Other types of endpoint conditions also arise naturally, such as the *{index:Robin boundary conditions}*
$$ hX(0) - X'(0) = 0, \qquad hX(L) + X'(L) = 0 , $$
for some constant $h$. These conditions come up when the ends are immersed in some medium.

In the separation of variables computation we encountered an eigenvalue problem and found the eigenfunctions $X_n(x)$. We then found the *{index:eigenfunction decomposition}* of the initial temperature $f(x) = u(x,0)$,
$$ f(x) = \sum_{n=1}^\infty c_n X_n(x) . $$
Once we had this decomposition and found suitable $T_n(t)$ such that $T_n(0) = 1$ and such that $T_n(t)X_n(x)$ were solutions to the heat equation, we wrote the solution to the original problem, including the initial condition, as
$$ u(x,t) = \sum_{n=1}^\infty c_n T_n(t) X_n(x) . $$

To study more general problems with this method, we must study more general eigenvalue problems. First, we study second-order linear equations of the form
$$ \frac{d}{dx} \left( p(x) \frac{dy}{dx} \right) - q(x) y + \lambda r(x) y = 0 . $$ {eq:SL-eq} number=5.1
Essentially any second-order linear equation of the form $a(x) y'' + b(x) y' + c(x) y + \lambda d(x) y = 0$ can be written as [(5.1)](ref:SL-eq) after multiplying by a proper factor.

:::example {ex:example-5-1-1} Example 5.1.1 (Bessel)
Put the following equation into the form [(5.1)](ref:SL-eq):
$$ x^2 y'' + xy' + \left(\lambda x^2 - n^2\right)y = 0 . $$
Multiply both sides by $\frac{1}{x}$ to obtain
$$ \begin{split} \frac{1}{x} \left( x^2 y'' + xy' + \left(\lambda x^2 - n^2\right)y \right) & = x y'' + y' + \left(\lambda x - \frac{n^2}{x}\right)y \\ & = \frac{d}{dx} \left( x \frac{dy}{dx} \right) - \frac{n^2}{x} y + \lambda x y = 0. \end{split} $$
The Bessel equation turns up for example in the solution of the two-dimensional wave equation. If you want to see how one solves the equation, you can look at [subsection 7.3.3](ref:7.3#bessel-subsection).
:::

The so-called *{index:Sturm–Liouville problem}*^[Named after the French mathematicians [Jacques Charles François Sturm](https://en.wikipedia.org/wiki/Jacques_Charles_Fran%C3%A7ois_Sturm) (1803–1855) and [Joseph Liouville](https://en.wikipedia.org/wiki/Liouville) (1809–1882).] is to seek nontrivial solutions to
$$ \boxed{~~ \begin{aligned} &\frac{d}{dx} \left( p(x) \frac{dy}{dx} \right) - q(x) y + \lambda r(x) y = 0, \qquad a < x < b, \\ &\alpha_1 y(a) - \alpha_2 y'(a) = 0, \\ &\beta_1 y(b) + \beta_2 y'(b) = 0. \end{aligned} ~~} $$ {eq:sl-slprob} number=5.2
By nontrivial, we again mean a $y$ that is not simply the constant zero (which is always a solution). In particular, we ask which $\lambda$s allow such nontrivial solutions. The $\lambda$s that admit nontrivial solutions are called the *eigenvalues{index-entry:eigenvalue}* and the corresponding nontrivial solutions are called *eigenfunctions{index-entry:eigenfunction}*. The constants $\alpha_1$ and $\alpha_2$ should not both be zero; the same applies to $\beta_1$ and $\beta_2$.

:::theorem {thm:sl-slregthm} Theorem 5.1.1
Suppose $p(x)$, $p'(x)$, $q(x)$ and $r(x)$ are continuous on $[a,b]$ and suppose $p(x) > 0$ and $r(x) > 0$ for all $x$ in $[a,b]$. Then the Sturm–Liouville problem [(5.2)](ref:sl-slprob) has an increasing sequence of eigenvalues
$$ \lambda_1 < \lambda_2 < \lambda_3 < \cdots $$
such that
$$ \lim_{n \to \infty} \lambda_n = +\infty $$
and such that to each $\lambda_n$ there is (up to a constant multiple) a single eigenfunction $y_n(x)$.

Moreover, if $q(x) \geq 0$ and $\alpha_1, \alpha_2, \beta_1, \beta_2 \geq 0$, then $\lambda_n \geq 0$ for all $n$.
:::

Problems satisfying the hypothesis of the theorem (including the “Moreover”) are called *regular Sturm–Liouville problems{index-entry:regular Sturm–Liouville problem}*{index-entry:Sturm–Liouville problem!regular}, and we will only consider such problems here. That is, a regular problem is one where $p(x)$, $p'(x)$, $q(x)$ and $r(x)$ are continuous, $p(x) > 0$, $r(x) > 0$, $q(x) \geq 0$, and $\alpha_1, \alpha_2, \beta_1, \beta_2 \geq 0$, where neither $\alpha_1=\alpha_2=0$ nor $\beta_1=\beta_2=0$. Note: Be careful about the signs. Also be careful about the inequalities for $r$ and $p$. They must be strict for all $x$ in the interval $[a,b]$, including the endpoints!

When zero is an eigenvalue, we usually start labeling the eigenvalues from 0 rather than from 1 for convenience. That is, we label the eigenvalues $\lambda_0 < \lambda_1 < \lambda_2 < \cdots$.

:::example {ex:example-5-1-2} Example 5.1.2
The problem $y''+\lambda y=0$, $0 < x < L$, $y(0) = 0$, and $y(L) = 0$ is a regular Sturm–Liouville problem: $p(x) = 1$, $q(x) = 0$, $r(x) = 1$, and we have $p(x) = 1 > 0$ and $r(x) = 1 > 0$. We also have $a=0$, $b=L$, $\alpha_1 = \beta_1 = 1$, $\alpha_2 = \beta_2 = 0$. The eigenvalues are $\lambda_n = \frac{n^2 \pi^2}{L^2}$ and eigenfunctions are $y_n(x) = \sin\bigl(\frac{n\pi}{L} x\bigr)$. All eigenvalues are nonnegative as predicted by the theorem.
:::

:::exercise {exercise-5-1-001} number=5.1.1 answered=no src=ch-eigenvalue-probs.tex:186
PROBLEM:
Find eigenvalues and eigenfunctions for
$$ y'' + \lambda y = 0, \quad y'(0) = 0, \quad y'(1) = 0. $$
Identify the $p, q, r, \alpha_j, \beta_j$. Can you use the theorem above to make the search for eigenvalues easier? Hint: Consider the condition $-y'(0)=0$.
:::

:::example {ex:example-5-1-3} Example 5.1.3
Find eigenvalues and eigenfunctions of the problem
$$ \begin{align*} & y''+\lambda y = 0, \quad 0 < x < 1 , \\ & hy(0)- y'(0) = 0, \quad y'(1) = 0, \quad h > 0. \end{align*} $$

These equations give a regular Sturm–Liouville problem.

:::exercise {exercise-5-1-002} number=5.1.2 answered=no src=ch-eigenvalue-probs.tex:206
PROBLEM:
Identify $p, q, r, \alpha_j, \beta_j$ in the example above.
:::

By [Theorem 5.1.1](ref:sl-slregthm), $\lambda \geq 0$. So the general solution (without boundary conditions) is
$$ \begin{aligned} & y(x) = A \cos \bigl( \sqrt{\lambda}\, x\bigr) + B \sin \bigl( \sqrt{\lambda}\, x\bigr) & & \qquad \text{if } \; \lambda > 0 , \\ & y(x) = A x + B & & \qquad \text{if } \; \lambda = 0 . \end{aligned} $$

Let us see if $\lambda = 0$ is an eigenvalue: We must satisfy $0 = hB - A$ and $A = 0$, hence $B=0$ (as $h > 0$). Therefore, 0 is not an eigenvalue (no nonzero solution, so no eigenfunction).

Now we try $\lambda > 0$. We plug in the boundary conditions:
$$ \begin{align*} & 0 = h A - \sqrt{\lambda}\, B , \\ & 0 = -A \sqrt{\lambda}\, \sin \bigl(\sqrt{\lambda}\bigr) + B \sqrt{\lambda}\, \cos \bigl(\sqrt{\lambda}\bigr) . \end{align*} $$
If $A=0$, then $B=0$ and vice versa; therefore, both are nonzero. So $B = \frac{hA}{\sqrt{\lambda}}$, and $0 = -A \sqrt{\lambda}\, \sin \bigl( \sqrt{\lambda}\bigr) + \frac{hA}{\sqrt{\lambda}} \sqrt{\lambda}\, \cos \bigl( \sqrt{\lambda}\bigr)$. As $A \neq 0$, we get
$$ 0 = - \sqrt{\lambda}\, \sin \bigl( \sqrt{\lambda}\bigr) + h \cos \bigl( \sqrt{\lambda}\bigr) , $$
or
$$ \frac{h}{\sqrt{\lambda}} = \tan \sqrt{\lambda} . $$

We use a computer to find $\lambda_n$. There are tables available, though using a computer or a graphing calculator is far more convenient nowadays. The easiest method is to plot the functions ${h}/{x}$ and $\tan x$ and see for which $x$ they intersect. There is an infinite number of intersections. Denote the first intersection by $\sqrt{\lambda_1}$, the second intersection by $\sqrt{\lambda_2}$, etc. For example, when $h=1$, we get $\sqrt{\lambda_1} \approx 0.86$, $\sqrt{\lambda_2} \approx 3.43$, …. That is $\lambda_1 \approx 0.74$, $\lambda_2 \approx 11.73$, …. A plot for $h=1$ is given in [Figure 5.1](ref:sl-tanx1overxfig). The appropriate eigenfunction (let $A = 1$ for convenience, then $B={h}/{\sqrt{\lambda}}$) is
$$ y_n(x) = \cos \bigl( \sqrt{\lambda_n}\, x \bigr) + \frac{h}{\sqrt{\lambda_n}} \sin \bigl(\sqrt{\lambda_n} \, x \bigr) . $$
When $h=1$ we get (approximately)
$$ y_1(x) \approx \cos (0.86\, x ) + \frac{1}{0.86} \sin (0.86 \, x ) , \qquad y_2(x) \approx \cos (3.43\, x ) + \frac{1}{3.43} \sin (3.43 \, x ) , \qquad \ldots . $$

> FIGURE {fig:sl-tanx1overxfig} number=5.1 src=../../media/sl-tanx1overx.svg
> alt: On the xy-plane a graph of two functions over the interval 0 to 7. The first function, 1 over x, comes down from the top of the picture on the left, drops very quickly towards the x-axis, then keeps slowly approaching it but never crossing it as x grows. The second function is the tangent, which starts at zero when x equals 0 and then quickly curves up and leaves the picture before pi over 2 while crossing the graph of 1 over x the first time. After pi over 2, the tangent reappears from the bottom of the picture curves right and then left before leaving the picture again before 3 pi over 2. It crosses the graph of 1 over x the second time in that interval. After 3 pi over 2, it reappears from the bottom and again goes up and crosses the graph of 1 over x the third time.
> width: 4.5in
> caption: Plot of $\frac{1}{x}$ and $\tan x$.

:::

## Orthogonality

We have seen the notion of orthogonality before. For example, we have shown that $\sin (nx)$ are orthogonal for distinct $n$ on $[0,\pi]$. For general Sturm–Liouville problems we need a more general setup. Let $r(x)$ be a *{index:weight function}* (any function, though generally we assume it is positive) on $[a,b]$. Two functions $f(x)$ and $g(x)$ are said to be *orthogonal{index-entry:orthogonal!with respect to a weight}* with respect to the weight function $r(x)$ when
$$ \int_a^b f(x) \, g(x) \, r(x) \,dx = 0 . $$
In this setting, we define the *inner product{index-entry:inner product of functions}* as
$$ \langle f , g \rangle \overset{\text{def}}{=} \int_a^b f(x) \, g(x) \, r(x) \,dx , $$
and then say $f$ and $g$ are orthogonal whenever $\langle f , g \rangle = 0$. The results and concepts are again analogous to finite-dimensional linear algebra.

The idea of the given inner product is that those $x$ where $r(x)$ is greater have more weight. Nontrivial (nonconstant) $r(x)$ arise naturally, for example from a change of variables. Hence, you could think of a change of variables such that $d\xi = r(x)\, dx$.

Eigenfunctions of a regular Sturm–Liouville problem satisfy an orthogonality property, just like the eigenfunctions in [§4.1](ref:4.1#bvp-section). Its proof is very similar to that of the analogous [Theorem 4.1.1](ref:4.1#bvp-orthogonaleigen).

:::theorem {thm:theorem-5-1-2} Theorem 5.1.2
Suppose we have a regular Sturm–Liouville problem
$$ \begin{align*} &\frac{d}{dx} \left( p(x) \frac{dy}{dx} \right) - q(x) y + \lambda r(x) y = 0 , \\ &\alpha_1 y(a) - \alpha_2 y'(a) = 0 , \\ &\beta_1 y(b) + \beta_2 y'(b) = 0 . \end{align*} $$
Let $y_j$ and $y_k$ be two distinct eigenfunctions for two distinct eigenvalues $\lambda_j$ and $\lambda_k$. Then
$$ \int_a^b y_j(x) \, y_k(x) \, r(x) \,dx = 0, $$
that is, $y_j$ and $y_k$ are orthogonal with respect to the weight function $r$.
:::

## Fredholm alternative

The *Fredholm alternative* theorem we talked about before ([Theorem 4.1.2](ref:4.1#thm-fredholmsimple)) holds for all regular Sturm–Liouville problems. We state it here for completeness.

:::theorem {thm:theorem-5-1-3} Theorem 5.1.3 (Fredholm alternative)
{index-entry:Fredholm alternative!Sturm–Liouville problems} Suppose that we have a regular Sturm–Liouville problem. Then either
$$ \begin{align*} &\frac{d}{dx} \left( p(x) \frac{dy}{dx} \right) - q(x) y + \lambda r(x) y = 0 , \\ &\alpha_1 y(a) - \alpha_2 y'(a) = 0 , \\ &\beta_1 y(b) + \beta_2 y'(b) = 0 , \end{align*} $$
has a nonzero solution ($\lambda$ is an eigenvalue), or
$$ \begin{align*} &\frac{d}{dx} \left( p(x) \frac{dy}{dx} \right) - q(x) y + \lambda r(x) y = f(x) , \\ &\alpha_1 y(a) - \alpha_2 y'(a) = 0 , \\ &\beta_1 y(b) + \beta_2 y'(b) = 0 , \end{align*} $$
has a unique solution for any $f(x)$ continuous on $[a,b]$.
:::

This theorem is used in much the same way as we did before in [§4.4](ref:4.4#sec-scs). It is used when solving more general nonhomogeneous boundary value problems. The theorem does not help us solve the problem. It tells us when a unique solution exists, so that we know when to spend time looking for it. To solve the problem, we decompose $f(x)$ and $y(x)$ in terms of eigenfunctions of the homogeneous problem, and then solve for the coefficients of the series for $y(x)$.

## Eigenfunction series

What we want to do with the eigenfunctions once we have them is to compute the *{index:eigenfunction decomposition}* of an arbitrary function $f(x)$. That is, we wish to write
$$ f(x) = \sum_{n=1}^\infty c_n y_n(x) , $$ {eq:sl-fdecomp} number=5.3
where $y_n(x)$ are eigenfunctions. We wish to find out if we can represent any function $f(x)$ in this way, and if so, we wish to calculate the $c_n$ (and of course we would want to know if the sum converges). OK, so imagine we could write $f(x)$ as [(5.3)](ref:sl-fdecomp). We will assume convergence and the ability to integrate the series term by term. Because of orthogonality we have
$$ \begin{split} \langle f , y_m \rangle = \int_a^b f(x) \, y_m (x) \, r(x) \, dx & = \int_a^b \left( \sum_{n=1}^\infty c_n y_n(x) \right) \, y_m (x) \, r(x) \, dx\\ &= \sum_{n=1}^\infty c_n \int_a^b y_n(x) \, y_m (x) \, r(x) \, dx\\ &= c_m \int_a^b y_m(x) \, y_m (x) \, r(x) \, dx = c_m \langle y_m , y_m \rangle . \end{split} $$
Hence,
$$ \boxed{~~ c_m = \frac{\langle f , y_m \rangle}{\langle y_m , y_m \rangle} = \frac{\int_a^b f(x) \, y_m (x)\, r(x) \, dx} {\int_a^b {\bigl(y_m(x)\bigr)}^2 \, r(x) \,dx} . ~~} $$ {eq:sl-cm} number=5.4

Note that $y_m$ are known up to a constant multiple, so we could have picked a scalar multiple of an eigenfunction such that $\langle y_m , y_m \rangle = 1$ (if we had an arbitrary eigenfunction $\tilde{y}_m$, divide it by $\sqrt{\langle \tilde{y}_m , \tilde{y}_m \rangle}$). When $\langle y_m , y_m \rangle = 1$, we have the simpler form $c_m = \langle f, y_m \rangle$. The following theorem holds more generally, but the statement given is enough for our purposes.

:::theorem {thm:theorem-5-1-4} Theorem 5.1.4
Suppose $f$ is a piecewise smooth continuous function on $[a,b]$. If $y_1, y_2, \ldots$ are eigenfunctions of a regular Sturm–Liouville problem, one for each eigenvalue, then there exist real constants $c_1, c_2, \ldots$ given by [(5.4)](ref:sl-cm) such that [(5.3)](ref:sl-fdecomp) converges and holds for $a < x < b$.
:::

:::example {ex:example-5-1-4} Example 5.1.4
Consider
$$ \begin{align*} & y'' + \lambda y = 0, \quad 0 < x < {\pi}/{2} , \\ & y(0) =0, \quad y'({\pi}/{2}) = 0 . \end{align*} $$
The above is a regular Sturm–Liouville problem, and [Theorem 5.1.1](ref:sl-slregthm) says that if $\lambda$ is an eigenvalue then $\lambda \geq 0$.

Suppose $\lambda = 0$. The general solution is $y(x) = Ax + B$. We plug in the initial conditions to get $0=y(0) = B$, and $0 = y'({\pi}/{2}) = A$. Hence $\lambda = 0$ is not an eigenvalue.

So let us consider $\lambda > 0$, where the general solution is
$$ y(x) = A \cos \bigl( \sqrt{\lambda} \, x \bigr) + B \sin \bigl( \sqrt{\lambda} \, x \bigr) . $$
Plugging in the boundary conditions we get $0 = y(0) = A$ and $0 = y'({\pi}/{2}) = \sqrt{\lambda} \, B \cos \bigl(\sqrt{\lambda} \, \frac{\pi}{2}\bigr)$. Since $A$ is zero, $B$ cannot be zero. Hence $\cos \bigl( \sqrt{\lambda} \, \frac{\pi}{2}\bigr) = 0$. This means that $\sqrt{\lambda} \,\frac{\pi}{2}$ is an odd integral multiple of ${\pi}/{2}$, i.e. $(2n-1)\frac{\pi}{2} = \sqrt{\lambda_n} \,\frac{\pi}{2}$. Solving for $\lambda_n$ we get
$$ \lambda_n = {(2n-1)}^2 . $$
We can take $B = 1$. Our eigenfunctions are
$$ y_n(x) = \sin \bigl( (2n-1)x \bigr) . $$
A little bit of calculus shows
$$ \int_0^{\frac{\pi}{2}} {\Bigl( \sin \bigl( (2n-1)x \bigr) \Bigr)}^2 \, dx = \frac{\pi}{4} . $$

So any piecewise smooth function $f(x)$ on $[0,{\pi}/{2}]$ can be written as
$$ f(x) = \sum_{n=1}^\infty c_n \sin \bigl( (2n-1)x \bigr) , $$
where
$$ c_n = \frac{\langle f , y_n \rangle}{\langle y_n , y_n \rangle} = \frac{\int_0^{\frac{\pi}{2}} f(x) \, \sin \bigl( (2n-1)x \bigr) \, dx }{\int_0^{\frac{\pi}{2}} {\Bigl(\sin \bigl((2n-1)x\bigr)\Bigr)}^2 \, dx} = \frac{4}{\pi} \int_0^{\frac{\pi}{2}} f(x) \,\sin \bigl( (2n-1)x \bigr) \, dx . $$

Note that the series converges to an odd $2\pi$-periodic extension of $f(x)$. With the regular sine series, we would expect a function with period $2 \, \frac{\pi}{2} = \pi$.

:::exercise {exercise-5-1-003} number=5.1.3 answered=no src=ch-eigenvalue-probs.tex:506
PROBLEM:
**challenging**
In the example above, the function is defined on $0 < x < {\pi}/{2}$, yet the series with respect to the eigenfunctions $\sin \bigl( (2n-1)x \bigr)$ converges to an odd $2\pi$-periodic extension of $f(x)$. Find out how the extension is defined for ${\pi}/{2} < x < \pi$.
:::

Let us compute an example. Consider $f(x) = x$ for $0 < x < {\pi}/{2}$. Some calculus later we find
$$ c_n = \frac{4}{\pi} \int_0^{\frac{\pi}{2}} f(x) \,\sin \bigl( (2n-1)x \bigr) \, dx = \frac{4{(-1)}^{n+1}}{\pi {(2n-1)}^2} , $$
and so for $x$ in $[0,{\pi}/{2}]$,
$$ f(x) = \sum_{n=1}^\infty \frac{4{(-1)}^{n+1}}{\pi {(2n-1)}^2} \sin \bigl( (2n-1)x \bigr) . $$
This is different from the $\pi$-periodic regular sine series which can be computed to be
$$ f(x) = \sum_{n=1}^\infty \frac{{(-1)}^{n+1}}{n} \sin ( 2nx ) . $$
Both series converge to $f(x)$ for $0 < x < {\pi}/{2}$, but the eigenfunctions involved come from different eigenvalue problems.
:::

## Exercises

:::exercise {exercise-5-1-004} number=5.1.4 answered=no src=ch-eigenvalue-probs.tex:539
PROBLEM:
Find eigenvalues and eigenfunctions of
$$ y''+\lambda y = 0, \quad y(0)- y'(0) = 0, \quad y(1) = 0 . $$

:::

:::exercise {exercise-5-1-005} number=5.1.5 answered=no src=ch-eigenvalue-probs.tex:546
PROBLEM:
Expand the function $f(x) = x$ on $0 \leq x \leq 1$ using eigenfunctions of the system
$$ y'' + \lambda y = 0, \quad y'(0) = 0, \quad y(1) = 0 . $$

:::

:::exercise {exercise-5-1-006} number=5.1.6 answered=no src=ch-eigenvalue-probs.tex:554
PROBLEM:
Suppose that you had a Sturm–Liouville problem on the interval $[0,1]$ and came up with $y_n(x) = \sin (\gamma n x)$, where $\gamma > 0$ is some constant. Decompose $f(x) = x$, $0 < x < 1$ in terms of these eigenfunctions.
:::

:::exercise {exercise-5-1-007} number=5.1.7 answered=no src=ch-eigenvalue-probs.tex:561
PROBLEM:
Find eigenvalues and eigenfunctions of
$$ y^{(4)}+\lambda y = 0, \quad y(0) = 0, \quad y'(0) = 0, \quad y(1) = 0, \quad y'(1) = 0 . $$
This problem is not a Sturm–Liouville problem, but the idea is the same.
:::

:::exercise {exercise-5-1-008} number=5.1.8 answered=no src=ch-eigenvalue-probs.tex:569
PROBLEM:
**more challenging**
Find eigenvalues and eigenfunctions for
$$ \frac{d}{dx} (e^x y') + \lambda e^x y = 0, \quad y(0) = 0, \quad y(1) = 0 . $$
Hint: First write the system as a constant-coefficient system to find general solutions. Do note that [Theorem 5.1.1](ref:sl-slregthm) guarantees $\lambda \geq 0$.
:::

:::exercise {exercise-5-1-101} number=5.1.101 answered=yes src=ch-eigenvalue-probs.tex:582
PROBLEM:
Find eigenvalues and eigenfunctions of
$$ y'' + \lambda y = 0, \quad y(-1) = 0, \quad y(1) = 0 . $$

SOLUTION:
$\lambda_n = \frac{n^2\pi^2}{4}$, $n=1,2,3,\ldots$. For odd $n$, $y_n = \cos\left(\frac{n\pi}{2} x \right)$, for even $n$, $y_n = \sin\left(\frac{n\pi}{2} x \right)$.
:::

:::exercise {exercise-5-1-102} number=5.1.102 answered=yes src=ch-eigenvalue-probs.tex:596
PROBLEM:
Put the following problems into the standard form for Sturm–Liouville problems, that is, find $p(x)$, $q(x)$, $r(x)$, $\alpha_1$, $\alpha_2$, $\beta_1$, and $\beta_2$, and decide if the problems are regular or not.

a) $x y'' + \lambda y = 0$ for $0 < x < 1$, $y(0) = 0$, $y(1) = 0$.
b) $(1+x^2) y'' + 2xy' + (\lambda-x^2) y = 0$ for $-1 < x < 1$, $y(-1) = 0$, $y(1)+y'(1) = 0$.^[In an earlier version of this book, a typo rendered the equation as $(1+x^2) y'' - 2xy' + (\lambda-x^2) y = 0$ ending up with something harder than intended. Try this equation for a further challenge.]

SOLUTION:
a) $p(x) = 1$, $q(x) = 0$, $r(x) = \frac{1}{x}$, $\alpha_1 = 1$, $\alpha_2 = 0$, $\beta_1 = 1$, $\beta_2 = 0$. The problem is not regular. b) $p(x) = 1+x^2$, $q(x) = x^2$, $r(x) = 1$, $\alpha_1 = 1$, $\alpha_2 = 0$, $\beta_1 = 1$, $\beta_2 = 1$. The problem is regular.
:::

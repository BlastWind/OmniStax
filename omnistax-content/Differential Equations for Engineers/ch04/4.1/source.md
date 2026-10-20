# 4.1 Boundary value problems {sec:bvp-section}

:::note [section-notes]
*Note: 2 lectures, similar to §3.8 in [EP](cite:EP), §10.1 and §11.1 in [BD](cite:BD)*
:::

## Boundary value problems

Before we tackle the Fourier series, we study the so-called *boundary value problems{index-entry:boundary value problem}* (or *endpoint problems{index-entry:endpoint problem}*). Consider
$$ x'' + \lambda x = 0, \quad x(a) = 0, \quad x(b) = 0, $$
for some constant $\lambda$, where $x(t)$ is defined for $t$ in the interval $[a,b]$. Previously we specified the value of the solution and its derivative at a single point. Now we specify the value of the solution at two different points. As $x=0$ is a solution, existence of solutions is not a problem. Uniqueness of solutions is another issue. The general solution to $x'' + \lambda x = 0$ has two arbitrary constants^[See [subsection 0.2.4](ref:0.2#subsection-fourfundamental) or [Example 2.2.1](ref:2.2#example-expsecondorder) and [Example 2.2.3](ref:2.2#example-sincossecondorder).]. It is, therefore, natural (but wrong) to believe that requiring two conditions guarantees a unique solution.

:::example {ex:example-4-1-1} Example 4.1.1
Take $\lambda = 1$, $a=0$, $b=\pi$. That is,
$$ x'' + x = 0, \quad x(0) = 0, \quad x(\pi) = 0. $$
Then $x = \sin t$ is another solution (besides $x=0$) satisfying both boundary conditions. There are more. Write down the general solution of the differential equation, which is $x= A \cos t + B \sin t$. The condition $x(0) = 0$ forces $A=0$. Letting $x(\pi) = 0$ does not give us any more information, as $x = B \sin t$ already satisfies both boundary conditions. Hence, there are infinitely many solutions of the form $x = B \sin t$, where $B$ is an arbitrary constant.
:::

:::example {ex:example-4-1-2} Example 4.1.2
On the other hand, consider $\lambda = 2$. That is,
$$ x'' + 2 x = 0, \quad x(0) = 0, \quad x(\pi) = 0. $$
Then the general solution is $x= A \cos \bigl( \sqrt{2}\,t\bigr) + B \sin \bigl( \sqrt{2}\,t\bigr)$. Letting $x(0) = 0$ still forces $A = 0$. We apply the second condition to find $0=x(\pi) = B \sin \bigl( \sqrt{2}\,\pi\bigr)$. As $\sin \bigl( \sqrt{2}\,\pi\bigr) \neq 0$, we obtain $B = 0$. Therefore, $x=0$ is the unique solution to this problem.
:::

What is going on? We will be interested in finding which constants $\lambda$ allow a nonzero solution, and we will be interested in finding those solutions. This problem is an analogue of finding eigenvalues and eigenvectors of matrices.

## Eigenvalue problems

For basic Fourier series theory, we will need the following three eigenvalue problems:
$$ x'' + \lambda x = 0, \quad x(a) = 0, \quad x(b) = 0 , $$ {eq:bv-eq1} number=4.1

$$ x'' + \lambda x = 0, \quad x'(a) = 0, \quad x'(b) = 0 , $$ {eq:bv-eq2} number=4.2
and
$$ x'' + \lambda x = 0, \quad x(a) = x(b), \quad x'(a) = x'(b) . $$ {eq:bv-eq3} number=4.3
A number $\lambda$ is called an *eigenvalue{index-entry:eigenvalue of a boundary value problem}* of [(4.1)](ref:bv-eq1) (resp. [(4.2)](ref:bv-eq2) or [(4.3)](ref:bv-eq3)) if and only if there exists a nonzero (not identically zero) solution to [(4.1)](ref:bv-eq1) (resp. [(4.2)](ref:bv-eq2) or [(4.3)](ref:bv-eq3)) given that specific $\lambda$. A nonzero solution is called a corresponding *{index:eigenfunction}*{index-entry:corresponding eigenfunction}. We will consider more general equations and boundary conditions, but we will postpone this until [chapter 5](ref:5#SL-chapter).

Note the similarity to eigenvalues and eigenvectors of matrices. The similarity is not just coincidental. If we think of the equations as differential operators, then we are doing the same exact thing. Think of a function $x(t)$ as a vector with infinitely many components (one for each $t$). Let $L = -\frac{d^2}{{dt}^2}$ be the linear operator. Then the eigenvalue/eigenfunction pair should be $\lambda$ and nonzero $x$ such that $Lx = \lambda x$. In other words, we are looking for nonzero functions $x$ satisfying certain endpoint conditions that solve $(L- \lambda)x = 0$. A lot of the formalism from linear algebra still applies here, though we will not pursue this line of reasoning too far.

:::example {ex:bvp-eig1ex} Example 4.1.3
Find the eigenvalues and eigenfunctions of
$$ x'' + \lambda x = 0, \quad x(0) = 0, \quad x(\pi) = 0 . $$

We have to handle the cases $\lambda > 0$, $\lambda = 0$, and $\lambda < 0$ separately. First, suppose that $\lambda > 0$. Then the general solution to $x''+\lambda x = 0$ is
$$ x = A \cos \bigl( \sqrt{\lambda}\, t\bigr) + B \sin \bigl( \sqrt{\lambda}\, t\bigr). $$
The condition $x(0) = 0$ implies immediately $A = 0$. Next
$$ 0 = x(\pi) = B \sin \bigl( \sqrt{\lambda}\, \pi \bigr) . $$
If $B$ is zero, then $x$ is not a nonzero solution. So to get a nonzero solution, we must have that $\sin \bigl( \sqrt{\lambda}\, \pi\bigr) = 0$. Hence, $\sqrt{\lambda}\, \pi$ must be an integer multiple of $\pi$. In other words, $\sqrt{\lambda} = k$ for a positive integer $k$. Hence, the positive eigenvalues are $k^2$ for all integers $k \geq 1$. Corresponding eigenfunctions can be taken as $x=\sin (k t)$. Just like for eigenvectors, constant multiples of an eigenfunction are also eigenfunctions, so we only need to pick one.

Now, suppose that $\lambda = 0$. In this case, the equation is $x'' = 0$, and its general solution is $x = At + B$. The condition $x(0) = 0$ implies that $B=0$, and $x(\pi) = 0$ implies that $A = 0$. This means that $\lambda = 0$ is *not* an eigenvalue.

Finally, suppose that $\lambda < 0$. In this case, we have the general solution^[Recall that $\cosh s = \frac{1}{2}(e^s+e^{-s})$ and $\sinh s = \frac{1}{2}(e^s-e^{-s})$. As an exercise, try the computation with the general solution written as $x = A e^{\sqrt{-\lambda}\, t} + B e^{-\sqrt{-\lambda}\, t}$ (for different $A$ and $B$ of course).]
$$ x = A \cosh \bigl( \sqrt{-\lambda}\, t\bigr) + B \sinh \bigl( \sqrt{-\lambda}\, t \bigr) . $$
Letting $x(0) = 0$ implies that $A = 0$ (recall $\cosh 0 = 1$ and $\sinh 0 = 0$). So our solution must be $x = B \sinh \bigl( \sqrt{-\lambda}\, t \bigr)$ and satisfy $x(\pi) = 0$. This is only possible if $B$ is zero. Why? Because $\sinh \xi$ is only zero when $\xi=0$. You should plot $\sinh$ to see this fact. We can also see this from the definition of $\sinh$. We get $0 = \sinh \xi = \frac{e^\xi - e^{-\xi}}{2}$. Hence $e^\xi = e^{-\xi}$, which implies $\xi = -\xi$ and that is only true if $\xi=0$. So there are no negative eigenvalues.

In summary, the eigenvalues and corresponding eigenfunctions are
$$ \lambda_k = k^2 \qquad \text{with an eigenfunction} \qquad x_k = \sin (k t) \qquad \text{for all integers } k \geq 1 . $$

:::

:::example {ex:example-4-1-4} Example 4.1.4
Compute the eigenvalues and eigenfunctions of
$$ x'' + \lambda x = 0, \quad x'(0) = 0, \quad x'(\pi) = 0 . $$

Again we have to handle the cases $\lambda > 0$, $\lambda = 0$, $\lambda < 0$ separately. First suppose that $\lambda > 0$. The general solution to $x''+\lambda x = 0$ is $x = A \cos \bigl( \sqrt{\lambda}\, t\bigr) + B \sin \bigl( \sqrt{\lambda}\, t\bigr)$. So
$$ x' = -A\sqrt{\lambda}\, \sin \bigl( \sqrt{\lambda}\, t\bigr) + B\sqrt{\lambda}\, \cos \bigl(\sqrt{\lambda}\, t\bigr) . $$
The condition $x'(0) = 0$ implies immediately $B = 0$. Next
$$ 0 = x'(\pi) = -A\sqrt{\lambda}\, \sin \bigl( \sqrt{\lambda}\, \pi\bigr) . $$
Again $A$ cannot be zero if $\lambda$ is to be an eigenvalue, and $\sin \bigl( \sqrt{\lambda}\, \pi\bigr)$ is only zero if $\sqrt{\lambda} = k$ for a positive integer $k$. Hence, the positive eigenvalues are again $k^2$ for all integers $k \geq 1$. And the corresponding eigenfunctions can be taken as $x=\cos (k t)$.

Now suppose that $\lambda = 0$. In this case, the equation is $x'' = 0$ and the general solution is $x = At + B$ so $x' = A$. The condition $x'(0) = 0$ implies that $A=0$. The condition $x'(\pi) = 0$ also implies $A=0$. Hence $B$ could be anything (let us take it to be 1). So $\lambda = 0$ is an eigenvalue and $x=1$ is a corresponding eigenfunction.

Finally, let $\lambda < 0$. In this case, the general solution is $x = A \cosh \bigl( \sqrt{-\lambda}\, t\bigr) + B \sinh \bigl( \sqrt{-\lambda}\, t\bigr)$ and
$$ x' = A\sqrt{-\lambda}\, \sinh \bigl( \sqrt{-\lambda}\, t\bigr) + B\sqrt{-\lambda}\, \cosh \bigl( \sqrt{-\lambda}\, t \bigr) . $$
We have already seen (with roles of $A$ and $B$ switched) that for this expression to be zero at $t=0$ and $t=\pi$, we must have $A=B=0$. Hence, there are no negative eigenvalues.

In summary, the eigenvalues and corresponding eigenfunctions are
$$ \lambda_k = k^2 \qquad \text{with an eigenfunction} \qquad x_k = \cos (k t) \qquad \text{for all integers } k \geq 1 , $$
and there is another eigenvalue
$$ \lambda_0 = 0 \qquad \text{with an eigenfunction} \qquad x_0 = 1. $$

:::

The following problem is the one that leads to the general Fourier series.

:::example {ex:bvp-periodic-example} Example 4.1.5
Compute the eigenvalues and eigenfunctions of
$$ x'' + \lambda x = 0, \quad x(-\pi) = x(\pi), \quad x'(-\pi) = x'(\pi) . $$
We have not specified the values or the derivatives at the endpoints, but rather that they are the same at the beginning and at the end of the interval.

We skip $\lambda < 0$. The computations are the same as before, and again we find that there are no negative eigenvalues.

For $\lambda = 0$, the general solution is $x = At + B$. The condition $x(-\pi) = x(\pi)$ implies that $A=0$ ($A\pi + B = -A\pi +B$ implies $A=0$). The second condition $x'(-\pi) = x'(\pi)$ says nothing about $B$ and hence $\lambda=0$ is an eigenvalue with a corresponding eigenfunction $x=1$.

For $\lambda > 0$ we get that $x = A \cos \bigl( \sqrt{\lambda}\, t \bigr) + B \sin \bigl( \sqrt{\lambda}\, t\bigr)$. Now
$$ \underbrace{A \cos \bigl(-\sqrt{\lambda}\, \pi\bigr) + B \sin \bigl(-\sqrt{\lambda}\, \pi\bigr)}_{x(-\pi)} = \underbrace{A \cos \bigl( \sqrt{\lambda}\, \pi \bigr) + B \sin \bigl( \sqrt{\lambda}\, \pi\bigr)}_{x(\pi)} . $$
We remember that $\cos (- \theta) = \cos (\theta)$ and $\sin (-\theta) = - \sin (\theta)$. Therefore,
$$ A \cos \bigl(\sqrt{\lambda}\, \pi\bigr) - B \sin \bigl( \sqrt{\lambda}\, \pi\bigr) = A \cos \bigl(\sqrt{\lambda}\, \pi\bigr) + B \sin \bigl( \sqrt{\lambda}\, \pi\bigr). $$
Hence either $B=0$ or $\sin \bigl( \sqrt{\lambda}\, \pi\bigr) = 0$. Similarly (exercise), if we differentiate $x$ and plug in the second condition, we find that $A=0$ or $\sin \bigl( \sqrt{\lambda}\, \pi\bigr) = 0$. Therefore, unless we want $A$ and $B$ to both be zero (which we do not), we must have $\sin \bigl( \sqrt{\lambda}\, \pi \bigr) = 0$. Hence, $\sqrt{\lambda}$ is an integer and the eigenvalues are yet again $\lambda = k^2$ for an integer $k \geq 1$. In this case, however, $x = A \cos (k t) + B \sin (k t)$ is an eigenfunction for any $A$ and any $B$. So we have two linearly independent eigenfunctions $\sin (kt)$ and $\cos (kt)$. Remember that for a matrix, we can also have two eigenvectors corresponding to a single eigenvalue if the eigenvalue is repeated.

In summary, the eigenvalues and corresponding eigenfunctions are
$$ \begin{align*} & \lambda_k = k^2 & & \text{with eigenfunctions} & & \cos (k t) \quad \text{and}\quad \sin (k t) & & \text{for all integers } k \geq 1 , \\ & \lambda_0 = 0 & & \text{with an eigenfunction} & & x_0 = 1. \end{align*} $$

:::

## Orthogonality of eigenfunctions

Something that will be very useful in the next section is the *{index:orthogonality}* property of the eigenfunctions. This is an analogue of the following fact about eigenvectors of a matrix. A matrix is called *symmetric{index-entry:symmetric matrix}* if $A = A^T$ (it is equal to its transpose). *Eigenvectors for two distinct eigenvalues of a symmetric matrix are orthogonal.* The differential operators we are dealing with act much like a symmetric matrix. We, therefore, get the following theorem.

:::theorem {thm:bvp-orthogonaleigen} Theorem 4.1.1
Suppose that $x_1(t)$ and $x_2(t)$ are two eigenfunctions of the problem [(4.1)](ref:bv-eq1), [(4.2)](ref:bv-eq2), or [(4.3)](ref:bv-eq3) for two different eigenvalues $\lambda_1$ and $\lambda_2$. Then they are *orthogonal{index-entry:orthogonal!functions}* in the sense that
$$ \int_a^b x_1(t) x_2(t) \,dt = 0 . $$

:::

The terminology comes from the fact that the integral is a type of inner product. We will expand on this in the next section. The theorem has a very short, elegant, and illuminating proof so we give it here. First, we have the following two equations.
$$ x_1'' + \lambda_1 x_1 = 0 \qquad \text{and} \qquad x_2'' + \lambda_2 x_2 = 0. $$
Multiply the first by $x_2$ and the second by $x_1$ and subtract to get
$$ (\lambda_1 - \lambda_2) x_1 x_2 = x_2'' x_1 - x_2 x_1'' . $$
Integrate both sides of the equation:
$$ \begin{split} (\lambda_1 - \lambda_2) \int_a^b x_1(t) x_2(t) \,dt & = \int_a^b \bigl( x_2''(t) x_1(t) - x_2(t) x_1''(t) \bigr) \,dt \\ & = \int_a^b \frac{d}{dt} \Bigl( x_2'(t) x_1(t) - x_2(t) x_1'(t) \Bigr) \,dt \\ & = \Bigl[ x_2'(t) x_1(t) - x_2(t) x_1'(t) \Bigr]_{t=a}^b = 0 . \end{split} $$
The last equality holds because of the boundary conditions. For example, if we consider [(4.1)](ref:bv-eq1) we have $x_1(a) = x_1(b) = x_2(a) = x_2(b) = 0$ and so $x_2' x_1 - x_2 x_1'$ is zero at both $a$ and $b$. As $\lambda_1 \neq \lambda_2$, the theorem follows.

:::exercise {exercise-4-1-001} number=4.1.1 answered=no src=ch-fourier-and-pde.tex:383
PROBLEM:
**easy**
Finish the proof of the theorem (check the last equality in the proof) for the cases [(4.2)](ref:bv-eq2) and [(4.3)](ref:bv-eq3).
:::

The function $\sin (n t)$ is an eigenfunction for the problem $x''+\lambda x = 0$, $x(0) = 0$, $x(\pi) = 0$. Hence for positive integers $n$ and $m$, we have the integrals
$$ \int_{0}^\pi \sin (mt) \sin (nt) \,dt = 0 , \quad \text{when } m \neq n. $$
Similarly, still assuming that $m$ and $n$ are positive integers,
$$ \int_{0}^\pi \cos (mt) \cos (nt) \,dt = 0 , \quad \text{when } m \neq n, \qquad \text{and} \qquad \int_{0}^\pi \cos (nt) \,dt = 0 . $$
Finally, we also get
$$ \int_{-\pi}^\pi \sin (mt) \sin (nt) \,dt = 0 , \quad \text{when } m \neq n, \qquad \text{and} \qquad \int_{-\pi}^\pi \sin (nt) \,dt = 0 , $$

$$ \int_{-\pi}^\pi \cos (mt) \cos (nt) \,dt = 0 , \quad \text{when } m \neq n, \qquad \text{and} \qquad \int_{-\pi}^\pi \cos (nt) \,dt = 0 , $$
and
$$ \int_{-\pi}^\pi \cos (mt) \sin (nt) \,dt = 0 \qquad \text{(even if $m=n$).} $$

## Fredholm alternative

We now touch on a very useful theorem in the theory of differential equations. The theorem holds in a more general setting than we are going to state it, but for our purposes the following statement is sufficient. We will give a slightly more general version in [chapter 5](ref:5#SL-chapter).

:::theorem {thm:thm-fredholmsimple} Theorem 4.1.2 (Fredholm alternative^[Named after the Swedish mathematician [Erik Ivar Fredholm](https://en.wikipedia.org/wiki/Fredholm) (1866–1927).])
{index-entry:Fredholm alternative!simple case} Exactly one of the following statements holds. Either
$$ x'' + \lambda x = 0, \quad x(a) = 0, \quad x(b) = 0 $$ {eq:simpfredhomeq} number=4.4
has a nonzero solution, or
$$ x'' + \lambda x = f(t), \quad x(a) = 0, \quad x(b) = 0 $$ {eq:simpfrednonhomeq} number=4.5
has a unique solution for every function $f$ continuous on $[a,b]$.
:::

The theorem is also true for the other types of boundary conditions we considered. The theorem means that if $\lambda$ is not an eigenvalue, the nonhomogeneous equation [(4.5)](ref:simpfrednonhomeq) has a unique solution for every right-hand side. On the other hand, if $\lambda$ is an eigenvalue, then [(4.5)](ref:simpfrednonhomeq) need not have a solution for every $f$, and furthermore, even if it happens to have a solution, the solution is not unique.

We also want to reinforce the idea here that linear differential operators have much in common with matrices. So it is no surprise that there is a finite-dimensional version of Fredholm alternative for matrices as well. Let $A$ be an $n \times n$ matrix. The Fredholm alternative then states that either $(A-\lambda I) \vec{x} = \vec{0}$ has a nontrivial solution, or $(A-\lambda I) \vec{x} = \vec{b}$ has a unique solution for every $\vec{b}$.

A lot of intuition from linear algebra can be applied to linear differential operators, but one must be careful of course. For example, one difference we have already seen is that in general a differential operator will have infinitely many eigenvalues, while a matrix has only finitely many.

## Application

Let us consider a physical application of an endpoint problem. Suppose we have a tightly stretched quickly spinning elastic string or rope of uniform linear density $\rho$, for example in $\mathrm{kg}/\mathrm{m}$. Let us put this problem into the $xy$-plane and both $x$ and $y$ are in meters. The $x$-axis represents the position on the string. The string rotates at angular velocity $\omega$, in $\mathrm{radians}/\mathrm{s}$. Imagine that the whole $xy$-plane rotates at angular velocity $\omega$. This way, the string stays in this $xy$-plane and $y$ measures its deflection from the equilibrium position, $y=0$, on the $x$-axis. Hence the graph of $y$ gives the shape of the string. We consider an ideal string with no volume, just a mathematical curve. We suppose the tension on the string is a constant $T$ in Newtons. Assuming that the deflection is small, we can use Newton’s second law (let us skip the derivation) to get the equation
$$ T y'' + \rho \omega^2 y = 0 . $$
To check the units, notice that the units of $y''$ are $\mathrm{m}/\mathrm{m^2}$, as the derivative is in terms of $x$.

Let $L$ be the length of the string (in meters) and the string is fixed at both endpoints. Hence, $y(0) = 0$ and $y(L) = 0$. See [Figure 4.1](ref:bvp-whirstringfig).

> FIGURE {fig:bvp-whirstringfig} number=4.1 src=../../media/bvp-whirstring.svg
> alt: A diagram of the xy-plane with a string drawn as a downward concave curve fixed at x equals 0 and x equals L to the x-axis and with a circular arrow indicating rotation around the x-axis. Another arrow indicates that the distance of the string from the x-axis at each point is a function y of x.
> caption: Whirling string.

We rewrite the equation as $y'' + \frac{\rho \omega^2}{T} y = 0$. The setup is similar to [Example 4.1.3](ref:bvp-eig1ex), except for the interval length being $L$ instead of $\pi$. We are looking for eigenvalues of $y'' + \lambda y = 0, y(0) = 0, y(L) = 0$ where $\lambda = \frac{\rho \omega^2}{T}$. As before, there are no nonpositive eigenvalues. With $\lambda > 0$, the general solution to the equation is $y = A \cos \bigl( \sqrt{\lambda} \,x \bigr) + B \sin \bigl( \sqrt{\lambda} \,x \bigr)$. The condition $y(0) = 0$ implies that $A = 0$ as before. The condition $y(L) = 0$ implies that $\sin \bigl( \sqrt{\lambda} \, L\bigr) = 0$ and hence $\sqrt{\lambda} \, L = k \pi$ for some integer $k > 0$, so
$$ \frac{\rho \omega^2}{T} = \lambda = \frac{k^2 \pi^2}{L^2} . $$

What does this say about the shape of the string? It says that for all parameters $\rho$, $\omega$, $T$ not satisfying the equation above, the string is in the equilibrium position, $y=0$. When $\frac{\rho \omega^2}{T} = \frac{k^2 \pi^2}{L^2}$, then the string will “pop out” some distance $B$. We cannot compute $B$ with the information we have.

Let us assume that $\rho$ and $T$ are fixed and we are changing $\omega$. For most values of $\omega$, the string is in the equilibrium state. When the angular velocity $\omega$ hits a value $\omega = \frac{k \pi \sqrt{T}}{L\sqrt{\rho}}$, then the string pops out and has the shape of a sine wave crossing the $x$-axis $k-1$ times between the endpoints. For example, at $k=1$, the string does not cross the $x$-axis and the shape looks like in [Figure 4.1](ref:bvp-whirstringfig). On the other hand, when $k=3$ the string crosses the $x$-axis 2 times, see [Figure 4.2](ref:bvp-whirstring2fig). When $\omega$ changes again, the string returns to the equilibrium position. The higher the angular velocity, the more times it crosses the $x$-axis when it is popped out.

> FIGURE {fig:bvp-whirstring2fig} number=4.2 src=../../media/bvp-whirstring2.svg
> alt: A diagram of the xy-plane with a string drawn as a sinusoidal curve that is fixed at x equals 0 and x equals L to the x-axis but also passes two other times through the x-axis between 0 and L. A circular arrow indicates rotation around the x-axis.
> caption: Whirling string at the third eigenvalue ($k=3$).

For another example, if you have a spinning jump rope (then $k=1$ as it is completely “popped out”) and you pull on the ends to increase the tension, then the velocity also increases for the rope to stay “popped out”.

## Exercises

Hint for the following exercises: Note that if $\lambda > 0$, then $\cos \bigl( \sqrt{\lambda}\, (t - a) \bigr)$ and $\sin \bigl( \sqrt{\lambda}\, (t - a) \bigr)$ are also solutions of the homogeneous equation.

:::exercise {exercise-4-1-002} number=4.1.2 answered=no src=ch-fourier-and-pde.tex:604
PROBLEM:
Compute all eigenvalues and eigenfunctions of $x'' + \lambda x = 0$, $x(a) = 0$, $x(b) = 0$ (assume $a < b$).
:::

:::exercise {exercise-4-1-003} number=4.1.3 answered=no src=ch-fourier-and-pde.tex:610
PROBLEM:
Compute all eigenvalues and eigenfunctions of $x'' + \lambda x = 0$, $x'(a) = 0$, $x'(b) = 0$ (assume $a < b$).
:::

:::exercise {exercise-4-1-004} number=4.1.4 answered=no src=ch-fourier-and-pde.tex:616
PROBLEM:
Compute all eigenvalues and eigenfunctions of $x'' + \lambda x = 0$, $x'(a) = 0$, $x(b) = 0$ (assume $a < b$).
:::

:::exercise {exercise-4-1-005} number=4.1.5 answered=no src=ch-fourier-and-pde.tex:622
PROBLEM:
Compute all eigenvalues and eigenfunctions of $x'' + \lambda x = 0$, $x(a) = x(b)$, $x'(a) = x'(b)$ (assume $a < b$).
:::

:::exercise {exercise-4-1-006} number=4.1.6 answered=no src=ch-fourier-and-pde.tex:628
PROBLEM:
We skipped the case of $\lambda < 0$ for the boundary value problem $x'' + \lambda x = 0$, $x(-\pi) = x(\pi)$, $x'(-\pi) = x'(\pi)$. Finish the calculation and show that there are no negative eigenvalues.
:::

:::exercise {exercise-4-1-101} number=4.1.101 answered=yes src=ch-fourier-and-pde.tex:637
PROBLEM:
Consider a spinning string of length 2 and linear density 0.1 and tension 3. Find the smallest angular velocity when the string pops out.
SOLUTION:
$\omega = \pi \sqrt{\frac{15}{2}}$
:::

:::exercise {exercise-4-1-102} number=4.1.102 answered=yes src=ch-fourier-and-pde.tex:645
PROBLEM:
Suppose $x'' + \lambda x = 0$ and $x(0)=1$, $x(1) = 1$. Find all $\lambda$ for which there is more than one solution. Also find the corresponding solutions (only for the eigenvalues).
SOLUTION:
$\lambda_k = 4 k^2 \pi^2$ for $k = 1,2,3,\ldots$ $x_k = \cos (2k\pi t) + B \sin (2k\pi t)$ (for any $B$)
:::

:::exercise {exercise-4-1-103} number=4.1.103 answered=yes src=ch-fourier-and-pde.tex:657
PROBLEM:
Suppose $x'' + x = 0$ and $x(0)=0$, $x'(\pi) = 1$. Find all the solution(s) if any exist.
SOLUTION:
$x(t) = - \sin(t)$
:::

:::exercise {exercise-4-1-104} number=4.1.104 answered=yes src=ch-fourier-and-pde.tex:665
PROBLEM:
Consider $x' + \lambda x = 0$ and $x(0)=0$, $x(1) = 0$. Why does it not have any eigenvalues? Why does every first-order equation with two endpoint conditions such as the one above have no eigenvalues?
SOLUTION:
General solution is $x = C e^{-\lambda t}$. Since $x(0) = 0$ then $C=0$, and so $x(t) = 0$. Therefore, the solution is always identically zero. One condition is always enough to guarantee a unique solution for a first-order equation.
:::

:::exercise {exercise-4-1-105} number=4.1.105 answered=yes src=ch-fourier-and-pde.tex:677
PROBLEM:
**challenging**
Suppose $x''' + \lambda x = 0$ and $x(0)=0$, $x'(0) = 0$, $x(1) = 0$. Suppose that $\lambda > 0$. Find an equation that all such eigenvalues must satisfy. Hint: Note that $-\sqrt[3]{\lambda}$ is a root of $r^3+\lambda = 0$.
SOLUTION:
$\frac{\sqrt{3}}{3} e^{\frac{-3}{2}\sqrt[3]{\lambda}} - \frac{\sqrt{3}}{3} \cos \bigl( \frac{\sqrt{3}\, \sqrt[3]{\lambda}}{2} \bigr) + \sin \bigl( \frac{\sqrt{3}\, \sqrt[3]{\lambda}}{2}\bigr) = 0$
:::

# 3.4 Eigenvalue method {sec:eigenmethod-section}

:::note [section-notes]
*Note: 2 lectures, §5.2 in [EP](cite:EP), part of §7.3, §7.5, and §7.6 in [BD](cite:BD)*
:::

In this section, we will learn how to solve linear homogeneous constant-coefficient systems of ODEs by the eigenvalue method. Suppose we have such a system
$$ {\vec{x}}' = P\vec{x} , $$
where $P$ is a constant square matrix. We wish to adapt the method for the single constant-coefficient equation by trying the function $e^{\lambda t}$ for an unknown constant $\lambda$. However, $\vec{x}$ is a vector. So we try $\vec{x} = \vec{v} e^{\lambda t}$, where $\vec{v}$ is an unknown constant vector. We plug this $\vec{x}$ into the equation to get
$$ \underbrace{\lambda \vec{v} e^{\lambda t}}_{{\vec{x}}'} = \underbrace{P\vec{v} e^{\lambda t}}_{P\vec{x}} . $$
We divide by $e^{\lambda t}$ and notice that we are looking for a scalar $\lambda$ and a vector $\vec{v}$ that satisfy the equation
$$ \lambda \vec{v} = P\vec{v} . $$

To solve this equation, we need a little bit more linear algebra, which we now review.

## Eigenvalues and eigenvectors of a matrix

Let $A$ be a constant square matrix. Suppose $\lambda$ is a scalar and $\vec{v}$ is a nonzero vector such that
$$ A \vec{v} = \lambda \vec{v}. $$
We call such a $\lambda$ an *{index:eigenvalue}* of $A$, and we call $\vec{v}$ a corresponding *{index:eigenvector}*.

:::example {ex:example-3-4-1} Example 3.4.1
The matrix $\left[ \begin{smallmatrix} 2 & 1 \\ 0 & 1 \end{smallmatrix} \right]$ has an eigenvalue $\lambda = 2$ with a corresponding eigenvector $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$, because
$$ \begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix} = 2 \begin{bmatrix} 1 \\ 0 \end{bmatrix} . $$

:::

Let us compute eigenvalues for any matrix. Rewrite the equation for an eigenvalue as $A\vec{v}-\lambda \vec{v}=\vec{0}$ and thus as
$$ (A - \lambda I)\vec{v} = \vec{0} . $$
This equation has a nonzero solution $\vec{v}$ if and only if $A - \lambda I$ is not invertible. Were $A - \lambda I$ invertible, we could write ${(A - \lambda I)}^{-1}(A - \lambda I)\vec{v} = {(A-\lambda I)}^{-1}\vec{0}$, which implies $\vec{v} = \vec{0}$. Therefore, $A$ has the eigenvalue $\lambda$ if and only if $\lambda$ solves the equation
$$ \det (A-\lambda I) = 0 . $$
Consequently, we can find an eigenvalue of $A$ without finding a corresponding eigenvector at the same time. An eigenvector will have to be found later, once $\lambda$ is known.

:::example {ex:example-3-4-2} Example 3.4.2
Find all eigenvalues of $\left[ \begin{smallmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \end{smallmatrix} \right]$.

We write
$$ \begin{gather*} \det \left( \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} - \lambda \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \right) = \det \left( \begin{bmatrix} 2-\lambda & 1 & 1 \\ 1 & 2-\lambda & 0 \\ 0 & 0 & 2-\lambda \end{bmatrix} \right) = \\ = (2-\lambda) \bigl({(2-\lambda)}^2 - 1\bigr) = -(\lambda -1)(\lambda -2)(\lambda-3) . \end{gather*} $$
Setting this to zero, we find that the eigenvalues are $\lambda = 1$, $\lambda = 2$, and $\lambda = 3$.
:::

For an $n \times n$ matrix, the polynomial we get by computing $\det(A - \lambda I)$ is of degree $n$, and hence in general, we have $n$ eigenvalues. Some may be repeated, some may be complex.

To find an eigenvector corresponding to an eigenvalue $\lambda$, we write
$$ (A-\lambda I) \vec{v} = \vec{0} , $$
and solve for a nontrivial (nonzero) vector $\vec{v}$. If $\lambda$ is an eigenvalue, there will be at least one free variable, and so for each distinct eigenvalue $\lambda$, we can always find an eigenvector.

:::example {ex:example-3-4-3} Example 3.4.3
Find an eigenvector of $\left[ \begin{smallmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \end{smallmatrix} \right]$ corresponding to the eigenvalue $\lambda = 3$.

We write
$$ (A-\lambda I) \vec{v} = \left( \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} - 3 \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \right) \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} -1 & 1 & 1 \\ 1 & -1 & 0 \\ 0 & 0 & -1 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \vec{0} . $$
To solve this system of linear equations, we write down the augmented matrix
$$ \left[ \begin{array}{ccc|c} -1 & 1 & 1 & 0 \\ 1 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \end{array} \right] , $$
and we perform row operations (exercise: which ones?) until we get:
$$ \left[ \begin{array}{ccc|c} 1 & -1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{array} \right] . $$
The entries of $\vec{v}$ have to satisfy the equations $v_1 - v_2 = 0$, $v_3 = 0$, and $v_2$ is a free variable. We pick $v_2$ to be arbitrary (but nonzero), we let $v_1 = v_2$, and of course $v_3 = 0$. For example, if we pick $v_2 = 1$, then $\vec{v} = \left[ \begin{smallmatrix} 1 \\ 1 \\ 0 \end{smallmatrix} \right]$. Let us verify that $\vec{v}$ really is an eigenvector corresponding to $\lambda = 3$:
$$ \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \\ \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \\ 0 \end{bmatrix} = 3 \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} . $$
Yay! It worked.
:::

:::exercise {exercise-3-4-001} number=3.4.1 answered=no src=ch-systems.tex:2290
PROBLEM:
**easy**
Are eigenvectors unique? Can you find a different eigenvector for $\lambda = 3$ in the example above? How are the two eigenvectors related?
:::

:::exercise {exercise-3-4-002} number=3.4.2 answered=no src=ch-systems.tex:2296
PROBLEM:
When the matrix is $2 \times 2$ you do not need to do row operations when computing an eigenvector, you can read it off from $A-\lambda I$ (if you have computed the eigenvalues correctly). Can you see why? Explain. Try it for the matrix $\left[ \begin{smallmatrix} 2 & 1 \\ 1 & 2 \end{smallmatrix} \right]$.
:::

## The eigenvalue method with distinct real eigenvalues

OK, back to homogeneous constant-coefficient systems of ODEs. We have the system
$$ {\vec{x}}' = P\vec{x} . $$
We find the eigenvalues $\lambda_1$, $\lambda_2$, …, $\lambda_n$ of the matrix $P$, and corresponding eigenvectors $\vec{v}_1$, $\vec{v}_2$, …, $\vec{v}_n$. The functions $\vec{v}_1 e^{\lambda_1 t}$, $\vec{v}_2 e^{\lambda_2 t}$, …, $\vec{v}_n e^{\lambda_n t}$ are solutions of the system of equations and hence $\vec{x} = c_1 \vec{v}_1 e^{\lambda_1 t} + c_2 \vec{v}_2 e^{\lambda_2 t} + \cdots + c_n \vec{v}_n e^{\lambda_n t}$ is a solution.

:::theorem {thm:theorem-3-4-1} Theorem 3.4.1
Take ${\vec{x}}' = P\vec{x}$. If $P$ is an $n \times n$ constant matrix that has $n$ distinct real eigenvalues $\lambda_1$, $\lambda_2$, …, $\lambda_n$, then there exist $n$ linearly independent corresponding eigenvectors $\vec{v}_1$, $\vec{v}_2$, …, $\vec{v}_n$, and the general solution to ${\vec{x}}' = P\vec{x}$ can be written as
$$ \boxed{~~ \vec{x} = c_1 \vec{v}_1 e^{\lambda_1 t} + c_2 \vec{v}_2 e^{\lambda_2 t} + \cdots + c_n \vec{v}_n e^{\lambda_n t} . ~~} $$

:::

The corresponding fundamental matrix solution is
$$ X(t) = \bigl[\, \vec{v}_1 e^{\lambda_1 t} \quad \vec{v}_2 e^{\lambda_2 t} \quad \cdots \quad \vec{v}_n e^{\lambda_n t} \,\bigr]. $$
That is, $X(t)$ is the matrix whose $j^{\text{th}}$ column is $\vec{v}_j e^{\lambda_j t}$.

:::example {ex:example-3-4-4} Example 3.4.4
Consider the system
$$ {\vec{x}}' = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 0 & 0 & 2 \end{bmatrix} \vec{x} . $$
Find the general solution.

Earlier, we found the eigenvalues are $1,2,3$. We found the eigenvector $\left[ \begin{smallmatrix} 1 \\ 1 \\ 0 \end{smallmatrix} \right]$ for the eigenvalue 3. Similarly we find the eigenvector $\left[ \begin{smallmatrix} 1 \\ -1 \\ 0 \end{smallmatrix} \right]$ for the eigenvalue 1 and $\left[ \begin{smallmatrix} 0 \\ 1 \\ -1 \end{smallmatrix} \right]$ for the eigenvalue 2 (exercise: check). The general solution is
$$ \vec{x} = c_1 \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} e^t + c_2 \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix} e^{2t} + c_3 \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} e^{3t} = \begin{bmatrix} c_1 e^t+c_3 e^{3t} \\ -c_1 e^t + c_2 e^{2t} + c_3 e^{3t} \\ - c_2 e^{2t} \end{bmatrix} . $$
In terms of a fundamental matrix solution,
$$ \vec{x} = X(t)\, \vec{c} = \begin{bmatrix} e^t & 0 & e^{3t} \\ -e^t & e^{2t} & e^{3t} \\ 0 & -e^{2t} & 0 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} . $$

:::

:::exercise {exercise-3-4-003} number=3.4.3 answered=no src=ch-systems.tex:2414
PROBLEM:
Check that this $\vec{x}$ really solves the system.
:::

Note: If we write a single homogeneous linear constant-coefficient $n^{\text{th}}$-order equation as a first-order system (as we did in [§3.1](ref:3.1#sec-introtosys)), then the eigenvalue equation
$$ \det(P - \lambda I) = 0 $$
is essentially the same as the characteristic equation we got in [§2.2](ref:2.2#sec-ccsol) and [§2.3](ref:2.3#sec-hol).

## Complex eigenvalues

A matrix may very well have complex eigenvalues even if all the entries are real. Take, for example,
$$ {\vec{x}}' = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \vec{x} . $$
Let us compute the eigenvalues of the matrix $P = \left[ \begin{smallmatrix} 1 & 1 \\ -1 & 1 \end{smallmatrix} \right]$.
$$ \det(P - \lambda I) = \det\left( \begin{bmatrix} 1-\lambda & 1 \\ -1 & 1-\lambda \end{bmatrix} \right) = {(1-\lambda)}^2 + 1 = \lambda^2 - 2 \lambda + 2 = 0 . $$
Thus $\lambda = 1 \pm i$. Corresponding eigenvectors are also complex. Start with $\lambda = 1-i$.
$$ \begin{align*} \bigl(P-(1-i) I\bigr) \vec{v} & = \vec{0} , \\ \begin{bmatrix} i & 1 \\ -1 & i \end{bmatrix} \vec{v} = \vec{0}. \end{align*} $$
The equations $i v_1 + v_2 = 0$ and $-v_1 + iv_2 = 0$ are multiples of each other. So we only need to consider one of them. After picking $v_2 = 1$, for example, we have an eigenvector $\vec{v} = \left[ \begin{smallmatrix} i \\ 1 \end{smallmatrix} \right]$. In similar fashion, we find that $\left[ \begin{smallmatrix} -i \\ 1 \end{smallmatrix} \right]$ is an eigenvector corresponding to the eigenvalue $1+i$.

We could write the solution as
$$ \vec{x} = c_1 \begin{bmatrix} i \\ 1 \end{bmatrix} e^{(1-i)t} + c_2 \begin{bmatrix} -i \\ 1 \end{bmatrix} e^{(1+i)t} = \begin{bmatrix} c_1 i e^{(1-i)t} - c_2 i e^{(1+i)t} \\ c_1 e^{(1-i)t} + c_2 e^{(1+i)t} \end{bmatrix} . $$
We would then need to look for complex values $c_1$ and $c_2$ to solve any initial conditions. It is perhaps not completely clear that we get a real solution. After solving for $c_1$ and $c_2$, we could use [Euler’s formula](ref:2.2#eulersformula) and do the whole song and dance we did before, but we will not. We will apply the formula in a smarter way first to find independent real solutions.

We claim that we did not have to look for a second eigenvector (nor for the second eigenvalue). All complex eigenvalues come in pairs (because the matrix $P$ is real).

First a small detour. The real part of a complex number $z$ can be computed as $\frac{z + \bar{z}}{2}$, where the bar above $z$ means $\overline{a+ib} = a -ib$. The bar of $z$ is called the *{index:complex conjugate}* of $z$. If $a$ is a real number, then $\bar{a} = a$. Similarly we bar whole vectors or matrices by taking the complex conjugate of every entry. Suppose a matrix $P$ is real. Then $\overline{P} = P$, and so $\overline{P\vec{x}} = \overline{P} \, \overline{\vec{x}} = P \overline{\vec{x}}$. Also the complex conjugate of 0 is still 0, therefore,
$$ \vec{0} = \overline{\vec{0}} = \overline{(P-\lambda I)\vec{v}} = (P-\bar{\lambda} I)\overline{\vec{v}} . $$
In other words, if $\lambda = a+ib$ is an eigenvalue, then so is $\bar{\lambda} = a-ib$. And if $\vec{v}$ is an eigenvector corresponding to the eigenvalue $\lambda$, then $\overline{\vec{v}}$ is an eigenvector corresponding to the eigenvalue $\bar{\lambda}$.

Suppose $a + ib$ is a complex eigenvalue of $P$, and $\vec{v}$ is a corresponding eigenvector. Then
$$ \vec{x}_1 = \vec{v} e^{(a+ib)t} $$
is a solution (complex-valued) of ${\vec{x}}' = P \vec{x}$. [Euler’s formula](ref:2.2#eulersformula) shows that $\overline{e^{a+ib}} = e^{a-ib}$, and so
$$ \vec{x}_2 = \overline{\vec{x}_1} = \overline{\vec{v}} e^{(a-ib)t} $$
is also a solution. As $\vec{x}_1$ and $\vec{x}_2$ are solutions, the function
$$ \vec{x}_3 = \operatorname{Re} \vec{x}_1 = \operatorname{Re} \vec{v} e^{(a+ib)t} = \frac{\vec{x}_1 + \overline{\vec{x}_1}}{2} = \frac{\vec{x}_1 + \vec{x}_2}{2} = \frac{1}{2} \vec{x}_1 + \frac{1}{2}\vec{x}_2 $$
is also a solution. And $\vec{x}_3$ is real-valued! Similarly as $\operatorname{Im} z = \frac{z-\bar{z}}{2i}$ is the imaginary part, we find that
$$ \vec{x}_4 = \operatorname{Im} \vec{x}_1 = \frac{\vec{x}_1 - \overline{\vec{x}_1}}{2i} = \frac{\vec{x}_1 - \vec{x}_2}{2i} . $$
is also a real-valued solution. It turns out that $\vec{x}_3$ and $\vec{x}_4$ are linearly independent. We will use [Euler’s formula](ref:2.2#eulersformula) to separate out the real and imaginary part.

Returning to our example problem,
$$ \begin{split} \vec{x}_1 & = \begin{bmatrix} i \\ 1 \end{bmatrix} e^{(1-i)t} = \begin{bmatrix} i \\ 1 \end{bmatrix} \left( e^t \cos t - i e^t \sin t \right) \\ & = \begin{bmatrix} i e^t \cos t + e^t \sin t \\ e^t \cos t - i e^t \sin t \end{bmatrix} = \begin{bmatrix} e^t \sin t \\ e^t \cos t \end{bmatrix} + i \begin{bmatrix} e^t \cos t \\ - e^t \sin t \end{bmatrix} . \end{split} $$
The two real-valued linearly independent solutions we seek are
$$ \operatorname{Re} \vec{x}_1 = \begin{bmatrix} e^t \sin t \\ e^t \cos t \end{bmatrix} \qquad \text{and} \qquad \operatorname{Im} \vec{x}_1 = \begin{bmatrix} e^t \cos t \\ - e^t \sin t \end{bmatrix} . $$

:::exercise {exercise-3-4-004} number=3.4.4 answered=no src=ch-systems.tex:2604
PROBLEM:
Check that these really are solutions.
:::

The general solution is
$$ \vec{x} = c_1 \begin{bmatrix} e^t \sin t \\ e^t \cos t \end{bmatrix} + c_2 \begin{bmatrix} e^t \cos t \\ -e^t \sin t \end{bmatrix} = \begin{bmatrix} c_1 e^t \sin t + c_2 e^t \cos t \\ c_1 e^t \cos t - c_2 e^t \sin t \end{bmatrix} . $$
This solution is real-valued for real $c_1$ and $c_2$. At this point, we would solve for any initial conditions we may have to find $c_1$ and $c_2$.

We summarize the discussion as a theorem.

:::theorem {thm:theorem-3-4-2} Theorem 3.4.2
Let $P$ be a real-valued constant matrix. If $P$ has a complex eigenvalue $a+ib$ and a corresponding eigenvector $\vec{v}$, then $P$ also has a complex eigenvalue $a-ib$ with a corresponding eigenvector $\overline{\vec{v}}$. Furthermore, ${\vec{x}}' = P\vec{x}$ has two linearly independent real-valued solutions
$$ \vec{x}_1 = \operatorname{Re} \vec{v} e^{(a+ib)t} \qquad \text{and} \qquad \vec{x}_2 = \operatorname{Im} \vec{v} e^{(a+ib)t} . $$

:::

For each pair of complex eigenvalues $a+ib$ and $a-ib$, we get two real-valued linearly independent solutions. We then go on to the next eigenvalue, which is either a real eigenvalue or another complex eigenvalue pair. If we have $n$ distinct eigenvalues (real or complex), then we end up with $n$ linearly independent solutions. If we had only two equations ($n=2$) as in the example above, then once we found two solutions we are finished, and our general solution is
$$ \vec{x} = c_1 \vec{x}_1 + c_2 \vec{x}_2 = c_1 \bigl( \operatorname{Re} \vec{v} e^{(a+ib)t} \bigr) + c_2 \bigl( \operatorname{Im} \vec{v} e^{(a+ib)t} \bigr) . $$

We can now find a real-valued general solution to any homogeneous system where the matrix has distinct eigenvalues. When we have repeated eigenvalues, matters get a bit more complicated and we will look at that situation in [§3.7](ref:3.7#sec-multeigen).

## Exercises

:::exercise {exercise-3-4-005} number=3.4.5 answered=no src=ch-systems.tex:2676
PROBLEM:
**easy**
Let $A$ be a $3 \times 3$ matrix with an eigenvalue of 3 and a corresponding eigenvector $\vec{v} = \left[ \begin{smallmatrix} 1 \\ -1 \\ 3 \end{smallmatrix} \right]$. Find $A \vec{v}$.
:::

:::exercise {exercise-3-4-006} number=3.4.6 answered=no src=ch-systems.tex:2684
PROBLEM:

a) Find the general solution of $x_1' = 2 x_1$, $x_2' = 3 x_2$ using the eigenvalue method (first write the system in the form ${\vec{x}}' = A \vec{x}$).
b) Solve the system by solving each equation separately and verify you get the same general solution.

:::

:::exercise {exercise-3-4-007} number=3.4.7 answered=no src=ch-systems.tex:2697
PROBLEM:
Find the general solution of $x_1' = 3 x_1 + x_2$, $x_2' = 2 x_1 + 4 x_2$ using the eigenvalue method.
:::

:::exercise {exercise-3-4-008} number=3.4.8 answered=no src=ch-systems.tex:2702
PROBLEM:
Find the general solution of $x_1' = x_1 -2 x_2$, $x_2' = 2 x_1 + x_2$ using the eigenvalue method. Do not use complex exponentials in your solution.
:::

:::exercise {exercise-3-4-009} number=3.4.9 answered=no src=ch-systems.tex:2708
PROBLEM:

a) Compute eigenvalues and eigenvectors of $A = \left[ \begin{smallmatrix} 9 & -2 & -6 \\ -8 & 3 & 6 \\ 10 & -2 & -6 \end{smallmatrix} \right]$.
b) Find the general solution of ${\vec{x}}' = A \vec{x}$.

:::

:::exercise {exercise-3-4-010} number=3.4.10 answered=no src=ch-systems.tex:2724
PROBLEM:
Compute eigenvalues and eigenvectors of $\left[ \begin{smallmatrix} -2 & -1 & -1 \\ 3 & 2 & 1 \\ -3 & -1 & 0 \\ \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-4-011} number=3.4.11 answered=no src=ch-systems.tex:2733
PROBLEM:
Let $a,b,c,d,e,f$ be numbers. Find the eigenvalues of $\left[ \begin{smallmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \\ \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-4-101} number=3.4.101 answered=yes src=ch-systems.tex:2744
PROBLEM:

a) Compute eigenvalues and eigenvectors of $A= \left[ \begin{smallmatrix} 1 & 0 & 3 \\ -1 & 0 & 1 \\ 2 & 0 & 2 \end{smallmatrix}\right]$.
b) Solve the system $\vec{x}\,' = A \vec{x}$.

SOLUTION:
a) Eigenvalues: $4,0,-1$ Eigenvectors: $\left[ \begin{smallmatrix} 1 \\ 0 \\ 1 \end{smallmatrix}\right]$, $\left[ \begin{smallmatrix} 0 \\ 1 \\ 0 \end{smallmatrix}\right]$, $\left[ \begin{smallmatrix} 3 \\ 5 \\ -2 \end{smallmatrix}\right]$
b) $\vec{x} = C_1 \left[ \begin{smallmatrix} 1 \\ 0 \\ 1 \end{smallmatrix}\right] e^{4t} + C_2 \left[ \begin{smallmatrix} 0 \\ 1 \\ 0 \end{smallmatrix}\right] + C_3 \left[ \begin{smallmatrix} 3 \\ 5 \\ -2 \end{smallmatrix}\right] e^{-t}$
:::

:::exercise {exercise-3-4-102} number=3.4.102 answered=yes src=ch-systems.tex:2791
PROBLEM:

a) Compute eigenvalues and eigenvectors of $A=\left[ \begin{smallmatrix} 1 & 1 \\ -1 & 0 \end{smallmatrix}\right]$.
b) Solve the system $\vec{x}\,' = A\vec{x}$.

SOLUTION:
a) Eigenvalues: $\frac{1+\sqrt{3}i}{2}, \frac{1-\sqrt{3}i}{2}$, Eigenvectors: $\left[ \begin{smallmatrix} -2 \\ 1-\sqrt{3}i \end{smallmatrix}\right]$, $\left[ \begin{smallmatrix} -2 \\ 1+\sqrt{3}i \end{smallmatrix}\right]$
b) $\vec{x} = C_1 e^{t/2} \left[ \begin{smallmatrix} -2\cos\bigl(\frac{\sqrt{3}t}{2}\bigr) \\ \cos\bigl(\frac{\sqrt{3}t}{2}\bigr) + \sqrt{3}\sin\bigl(\frac{\sqrt{3}t}{2}\bigr) \end{smallmatrix}\right] + C_2 e^{t/2} \left[ \begin{smallmatrix} - 2\sin\bigl(\frac{\sqrt{3}t}{2}\bigr) \\ \sin\bigl(\frac{\sqrt{3}t}{2}\bigr) -\sqrt{3}\cos\bigl(\frac{\sqrt{3}t}{2}\bigr) \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-4-103} number=3.4.103 answered=yes src=ch-systems.tex:2835
PROBLEM:
Solve $x_1' = x_2$, $x_2' = x_1$ using the eigenvalue method.
SOLUTION:
$\vec{x} = C_1 \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix}\right] e^{t} + C_2 \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix}\right] e^{-t}$
:::

:::exercise {exercise-3-4-104} number=3.4.104 answered=yes src=ch-systems.tex:2848
PROBLEM:
Solve $x_1' = x_2$, $x_2' = -x_1$ using the eigenvalue method.
SOLUTION:
$\vec{x} = C_1 \left[ \begin{smallmatrix} \cos(t) \\ -\sin(t) \end{smallmatrix}\right] + C_2 \left[ \begin{smallmatrix} \sin(t) \\ \cos(t) \end{smallmatrix}\right]$
:::

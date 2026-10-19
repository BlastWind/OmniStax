# 3.7 Repeated eigenvalues {sec:sec-multeigen}

:::note [section-notes]
*Note: 1 or 1.5 lectures, §5.5 in [EP](cite:EP), §7.8 in [BD](cite:BD)*
:::

It may happen that a matrix $A$ has some “repeated” eigenvalues. That is, the characteristic equation $\det(A-\lambda I) = 0$ may have repeated roots. This is actually unlikely to happen for a random matrix. If we take a small perturbation of $A$ (we change the entries of $A$ slightly), we get a matrix with distinct eigenvalues. As any system we want to solve in practice is an approximation to reality anyway, it is not absolutely indispensable to know how to solve these corner cases. On the other hand, these cases do come up in applications from time to time. Furthermore, if we have distinct but very close eigenvalues, the behavior is similar to that of repeated eigenvalues, and so understanding that case will give us insight into what is going on.

## Geometric multiplicity

Take the diagonal matrix
$$ A = \begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix} . $$
$A$ has an eigenvalue 3 of multiplicity 2. We call the multiplicity of the eigenvalue{index-entry:multiplicity of an eigenvalue} in the characteristic equation the *{index:algebraic multiplicity}*. In this case, there also exist 2 linearly independent eigenvectors, $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$ corresponding to the eigenvalue 3. This means that the so-called *{index:geometric multiplicity}* of this eigenvalue is also 2.

In all the theorems where we required a matrix to have $n$ distinct eigenvalues, we only really needed to have $n$ linearly independent eigenvectors. For example, ${\vec{x}}' = A\vec{x}$ has the general solution
$$ \vec{x} = c_1 \begin{bmatrix} 1 \\ 0 \end{bmatrix} e^{3t} + c_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix} e^{3t} . $$
We restate the theorem about real eigenvalues. In the theorem, we will repeat eigenvalues according to (algebraic) multiplicity. So for the matrix $A$ above, we would say that it has eigenvalues 3 and 3.

:::theorem {thm:theorem-3-7-1} Theorem 3.7.1
Suppose the $n \times n$ matrix $A$ has $n$ real eigenvalues (not necessarily distinct), $\lambda_1$, $\lambda_2$, …, $\lambda_n$, and there are $n$ linearly independent corresponding eigenvectors $\vec{v}_1$, $\vec{v}_2$, …, $\vec{v}_n$. Then the general solution to ${\vec{x}}' = A\vec{x}$ can be written as
$$ \vec{x} = c_1 \vec{v}_1 e^{\lambda_1 t} + c_2 \vec{v}_2 e^{\lambda_2 t} + \cdots + c_n \vec{v}_n e^{\lambda_n t} . $$

:::

The *geometric multiplicity* of an eigenvalue is equal to the number of corresponding linearly independent eigenvectors. The geometric multiplicity is always less than or equal to the algebraic multiplicity. The theorem handles the case when these two multiplicities are equal for all eigenvalues. If for an eigenvalue the geometric multiplicity is equal to the algebraic multiplicity, then we say the eigenvalue is *complete{index-entry:complete eigenvalue}*.

In other words, the hypothesis of the theorem could be stated as saying that if all the eigenvalues of $A$ are complete, then there are $n$ linearly independent eigenvectors and thus we have the given general solution.

If the geometric multiplicity of an eigenvalue is 2 or greater, then the set of linearly independent eigenvectors is not unique up to multiples as it was before. For example, for the diagonal matrix $A = \left[ \begin{smallmatrix} 3 & 0 \\ 0 & 3 \end{smallmatrix} \right]$ we could also pick eigenvectors $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$, or in fact any pair of two linearly independent vectors. The number of linearly independent eigenvectors corresponding to $\lambda$ is the number of free variables we obtain when solving $A\vec{v} = \lambda \vec{v}$. We pick specific values for those free variables to obtain eigenvectors. If you pick different values, you may get different eigenvectors.

## Defective eigenvalues

If an $n \times n$ matrix has less than $n$ linearly independent eigenvectors, it is said to be *deficient{index-entry:deficient matrix}*. Then there is at least one eigenvalue with its geometric multiplicity that is less than its algebraic multiplicity. We call this eigenvalue *defective{index-entry:defective eigenvalue}* and the difference between the two multiplicities we call the *{index:defect}*. In other words, the defect is the number of eigenvectors we are “missing.”

:::example {ex:example-3-7-1} Example 3.7.1
The matrix
$$ \begin{bmatrix} 3 & 1 \\ 0 & 3 \end{bmatrix} $$
has an eigenvalue 3 of algebraic multiplicity 2. As $A-\lambda I = \left[ \begin{smallmatrix} 3 & 1 \\ 0 & 3 \end{smallmatrix} \right] - 3 \left[ \begin{smallmatrix} 1 & 0 \\ 0 & 1 \end{smallmatrix} \right] = \left[ \begin{smallmatrix} 0 & 1 \\ 0 & 0 \end{smallmatrix} \right]$, to compute the eigenvectors, we must solve
$$ \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \vec{0} . $$
So $v_2 = 0$. All eigenvectors are of the form $\left[ \begin{smallmatrix} v_1 \\ 0 \end{smallmatrix} \right]$. Any two such vectors are linearly dependent, and hence the geometric multiplicity of the eigenvalue is 1. Therefore, the defect is 1, and we can no longer apply the eigenvalue method directly to a system of ODEs with such a coefficient matrix.

To solve such an ODE, we need a new idea. Roughly, the key observation we will use is that if $\lambda$ is an eigenvalue of $A$ of algebraic multiplicity $m$, then it is possible to find certain $m$ linearly independent vectors solving ${(A-\lambda I)}^k \vec{v} = \vec{0}$ for various powers $k$. We will call these *{index:generalized eigenvectors}*.

We continue with the example equation ${\vec{x}}' = A\vec{x}$ where $A = \left[ \begin{smallmatrix} 3 & 1 \\ 0 & 3 \end{smallmatrix} \right]$. We found an eigenvalue $\lambda=3$ of (algebraic) multiplicity 2 and defect 1. We found one eigenvector $\vec{v} = \left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$. We have one solution
$$ \vec{x}_1 = \vec{v} e^{3t} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} e^{3t} . $$
We are now stuck, we get no other solutions from standard eigenvectors. But we need two linearly independent solutions to find the general solution of the equation.

In the spirit of repeated roots of the characteristic equation for a single equation, we try another solution of the form
$$ \vec{x}_2 = ( \vec{v}_2 + \vec{v}_1 t )\, e^{3t} . $$
We differentiate to get
$$ {\vec{x}_2}' = \vec{v}_1 e^{3t} + 3 ( \vec{v}_2 + \vec{v}_1 t )\, e^{3t} = ( 3 \vec{v}_2 + \vec{v}_1 )\, e^{3t} + 3 \vec{v}_1 t e^{3t} . $$
As we are assuming that $\vec{x}_2$ is a solution, ${\vec{x}_2}'$ must equal $A \vec{x}_2$. So we compute $A \vec{x}_2$:
$$ A \vec{x}_2 = A ( \vec{v}_2 + \vec{v}_1 t )\, e^{3t} = A \vec{v}_2 e^{3t} + A \vec{v}_1 t e^{3t} . $$
By looking at the coefficients of $e^{3t}$ and $t e^{3t}$, we see $3 \vec{v}_2 + \vec{v}_1 = A \vec{v}_2$ and $3 \vec{v}_1 = A \vec{v}_1$. This means that
$$ (A-3I)\vec{v}_2 = \vec{v}_1, \qquad \text{and} \qquad (A-3I)\vec{v}_1 = \vec{0}. $$
Therefore, $\vec{x}_2$ is a solution if these two equations are satisfied. The second equation is satisfied if $\vec{v}_1$ is an eigenvector, and we found the eigenvector above, so let $\vec{v}_1 = \left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$. So, if we can find a $\vec{v}_2$ that solves $(A-3I)\vec{v}_2 = \vec{v}_1$, then we are done. This is just a bunch of linear equations to solve and we are by now very good at that. Let us solve $(A-3I)\vec{v}_2 = \vec{v}_1$. Write
$$ \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} . $$
By inspection, we see that letting $a=0$ ($a$ could be anything in fact) and $b=1$ does the job. Hence we can take $\vec{v}_2 = \left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$. Our general solution to ${\vec{x}}' = A\vec{x}$ is
$$ \vec{x} = c_1 \begin{bmatrix} 1 \\ 0 \end{bmatrix} e^{3t} + c_2 \left( \begin{bmatrix} 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} t \right) \, e^{3t} = \begin{bmatrix} c_1 e^{3t}+c_2 te^{3t} \\ c_2 e^{3t} \end{bmatrix} . $$
Let us check that we really do have the solution. First $x_1' = c_1 3 e^{3t}+c_2 e^{3t} + 3 c_2 te^{3t} = 3 x_1 + x_2$. Good. Now $x_2' = 3 c_2 e^{3t} = 3x_2$. Good.
:::

In the example, if we plug $(A-3I)\vec{v}_2 = \vec{v}_1$ into $(A-3I)\vec{v}_1 = \vec{0}$ we find
$$ (A-3I)(A-3I) \vec{v}_2 = \vec{0}, \qquad \text{or} \qquad {(A-3I)}^2\vec{v}_2 = \vec{0}. $$
If $(A-3I) \vec{w} \neq \vec{0}$ and ${(A-3I)}^2 \vec{w} = \vec{0}$, then $(A-3I) \vec{w}$ is an eigenvector, a multiple of $\vec{v}_1$. In this $2 \times 2$ case, ${(A-3I)}^2$ is just the zero matrix (exercise). So any vector $\vec{w}$ solves ${(A-3I)}^2\vec{w} = \vec{0}$ and we just need a $\vec{w}$ such that $(A-3I)\vec{w} \neq \vec{0}$. Then we could use $\vec{w}$ for $\vec{v}_2$ and $(A-3I)\vec{w}$ for $\vec{v}_1$.

Note this example system ${\vec{x}}' = A \vec{x}$ has a simpler solution since $A$ is a so-called *{index:upper triangular matrix}*, that is, every entry below the diagonal is zero. In particular, the equation for $x_2$ does not depend on $x_1$. Mind you, not every defective matrix is triangular.

:::exercise {exercise-3-7-001} number=3.7.1 answered=no src=ch-systems.tex:4605
PROBLEM:
Solve ${\vec{x}}' = \left[ \begin{smallmatrix} 3 & 1 \\ 0 & 3 \end{smallmatrix} \right] \vec{x}$ by first solving for $x_2$ and then for $x_1$ independently. Check that you got the same solution as we did above.
:::

Let us describe the general algorithm. Suppose that $\lambda$ is an eigenvalue of multiplicity 2, defect 1. First find an eigenvector $\vec{v}_1$ of $\lambda$. That is, $\vec{v}_1$ solves $(A-\lambda I)\vec{v}_1 = \vec{0}$. Then, find a vector $\vec{v}_2$ such that
$$ (A-\lambda I)\vec{v}_2 = \vec{v}_1 . $$
This gives us two linearly independent solutions
$$ \begin{align*} \vec{x}_1 & = \vec{v}_1 e^{\lambda t} , \\ \vec{x}_2 & = \left( \vec{v}_2 + \vec{v}_1 t \right) e^{\lambda t} . \end{align*} $$

:::example {ex:example-3-7-2} Example 3.7.2
Consider the system
$$ \vec{x}' = \begin{bmatrix} 2 & -5 & 0 \\ 0 & 2 & 0 \\ -1 & 4 & 1 \end{bmatrix} \vec{x} . $$
Compute the eigenvalues,
$$ 0 = \det(A-\lambda I) = \det\left( \begin{bmatrix} 2-\lambda & -5 & 0 \\ 0 & 2-\lambda & 0 \\ -1 & 4 & 1-\lambda \end{bmatrix} \right) = (2-\lambda)^2(1-\lambda) . $$
The eigenvalues are 1 and 2, where 2 has multiplicity 2. We leave it to the reader to find that $\left[ \begin{smallmatrix} 0 \\ 0 \\ 1 \end{smallmatrix} \right]$ is an eigenvector for the eigenvalue $\lambda = 1$.

We focus on $\lambda = 2$. We compute eigenvectors:
$$ \vec{0} = (A - 2 I) \vec{v} = \begin{bmatrix} 0 & -5 & 0 \\ 0 & 0 & 0 \\ -1 & 4 & -1 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} . $$
The first equation says that $v_2 = 0$, so the last equation is $-v_1 -v_3 = 0$. Let $v_3$ be the free variable to find that $v_1 = -v_3$. Perhaps let $v_3 = -1$ to find an eigenvector $\left[ \begin{smallmatrix} 1 \\ 0 \\ -1 \end{smallmatrix} \right]$. Problem is that setting $v_3$ to anything else just gets multiples of this vector and so we have a defect of 1. Let $\vec{v}_1$ be the eigenvector and we look for a generalized eigenvector $\vec{v}_2$:
$$ (A - 2 I) \vec{v}_2 = \vec{v}_1 , $$
or
$$ \begin{bmatrix} 0 & -5 & 0 \\ 0 & 0 & 0 \\ -1 & 4 & -1 \end{bmatrix} \begin{bmatrix} a \\ b \\ c \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} , $$
where we used $a$, $b$, $c$ as components of $\vec{v}_2$ for simplicity. The first equation says $-5b = 1$ so $b = {-1}/{5}$. The second equation says nothing. The last equation is $-a + 4b - c = -1$, or $a + {4}/{5} + c = 1$, or $a + c = {1}/{5}$. We let $c$ be the free variable, and we choose $c=0$. We find $\vec{v}_2 = \left[ \begin{smallmatrix} {1}/{5} \\ {-1}/{5} \\ 0 \end{smallmatrix} \right]$.

The general solution is therefore,
$$ \vec{x} = c_1 \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} e^t + c_2 \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} e^{2t} + c_3 \left( \begin{bmatrix} {1}/{5} \\ {-1}/{5} \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} t \right) e^{2t} . $$

:::

This machinery can also be generalized to higher multiplicities and higher defects. We will not go over this method in detail, but we sketch the idea. Suppose that $A$ has an eigenvalue $\lambda$ of multiplicity $m$. For various $k$, we find vectors such that
$$ {(A - \lambda I)}^k \vec{v} = \vec{0}, \qquad \text{but} \qquad {(A - \lambda I)}^{k-1} \vec{v} \neq \vec{0}. $$
Such vectors are called *{index:generalized eigenvectors}* (then $\vec{v}_1 = {(A - \lambda I)}^{k-1} \vec{v}$ is an eigenvector). For the eigenvector $\vec{v}_1$ there is a chain of generalized eigenvectors $\vec{v}_2$ through $\vec{v}_k$ such that:
$$ \begin{align*} (A - \lambda I) \vec{v}_1 & = \vec{0} , \\ (A - \lambda I) \vec{v}_2 & = \vec{v}_1 , \\ & ~~\vdots \\ (A - \lambda I) \vec{v}_k & = \vec{v}_{k-1} . \end{align*} $$
Really once you find the $\vec{v}_k$ such that ${(A - \lambda I)}^k \vec{v}_k = \vec{0}$ but ${(A - \lambda I)}^{k-1} \vec{v}_k \neq \vec{0}$, you find the entire chain since you can compute the rest, $\vec{v}_{k-1} = (A - \lambda I) \vec{v}_k$, $\vec{v}_{k-2} = (A - \lambda I) \vec{v}_{k-1}$, etc. We form the linearly independent solutions
$$ \begin{align*} \vec{x}_1 & = \vec{v}_1 e^{\lambda t} , \\ \vec{x}_2 & = ( \vec{v}_2 + \vec{v}_1 t ) \, e^{\lambda t} , \\ & ~~\vdots \\ \vec{x}_k & = \left( \vec{v}_k + \vec{v}_{k-1} t + \vec{v}_{k-2} \frac{t^2}{2} + \cdots + \vec{v}_2 \frac{t^{k-2}}{(k-2)!} + \vec{v}_1 \frac{t^{k-1}}{(k-1)!} \right) \, e^{\lambda t} . \end{align*} $$
Recall that $k! = 1 \cdot 2 \cdot 3 \cdots (k-1) \cdot k$ is the factorial. If you have an eigenvalue of geometric multiplicity $\ell$, you will have to find $\ell$ such chains (some of them might be short: just the single eigenvector equation). We go until we form $m$ linearly independent solutions where $m$ is the algebraic multiplicity. We do not quite know which specific eigenvectors go with which chain, so start by finding $\vec{v}_k$ first for the longest possible chain and go from there.

For example, if $\lambda$ is an eigenvalue of $A$ of algebraic multiplicity 3 and defect 2, then solve
$$ (A - \lambda I) \vec{v}_1 = \vec{0} , \qquad (A - \lambda I) \vec{v}_2 = \vec{v}_1 , \qquad (A - \lambda I) \vec{v}_3 = \vec{v}_2 . $$
That is, find $\vec{v}_3$ such that ${(A - \lambda I)}^3 \vec{v}_3 = \vec{0}$, but ${(A - \lambda I)}^2 \vec{v}_3 \neq \vec{0}$. Then you are done as $\vec{v}_2 = (A - \lambda I) \vec{v}_3$ and $\vec{v}_1 = (A - \lambda I) \vec{v}_2$. The 3 linearly independent solutions are
$$ \vec{x}_1 = \vec{v}_1 e^{\lambda t} , \qquad \vec{x}_2 = ( \vec{v}_2 + \vec{v}_1 t ) \, e^{\lambda t} , \qquad \vec{x}_3 = \left( \vec{v}_3 + \vec{v}_2 t + \vec{v}_{1} \frac{t^2}{2} \right) \, e^{\lambda t} . $$

If, on the other hand, $A$ has an eigenvalue $\lambda$ of algebraic multiplicity 3 and defect 1, then solve
$$ (A - \lambda I) \vec{v}_1 = \vec{0} , \qquad (A - \lambda I) \vec{v}_2 = \vec{0} , \qquad (A - \lambda I) \vec{v}_3 = \vec{v}_2 . $$
Here $\vec{v}_1$ and $\vec{v}_2$ are actual honest eigenvectors, and $\vec{v}_3$ is a generalized eigenvector. So there are two chains. To solve, first find a $\vec{v}_3$ such that ${(A - \lambda I)}^2 \vec{v}_3 = \vec{0}$, but $(A - \lambda I) \vec{v}_3 \neq \vec{0}$. Then $\vec{v}_2 = (A - \lambda I) \vec{v}_3$ is going to be an eigenvector. Then solve for an eigenvector $\vec{v}_1$ that is linearly independent from $\vec{v}_2$. You get 3 linearly independent solutions
$$ \vec{x}_1 = \vec{v}_1 e^{\lambda t} , \qquad \vec{x}_2 = \vec{v}_2 e^{\lambda t} , \qquad \vec{x}_3 = ( \vec{v}_3 + \vec{v}_2 t ) \, e^{\lambda t} . $$

## Exercises

:::exercise {exercise-3-7-002} number=3.7.2 answered=no src=ch-systems.tex:4831
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 5 & -3 \\ 3 & -1 \end{smallmatrix} \right]$. Find the general solution of ${\vec{x}}' = A \vec{x}$.
:::

:::exercise {exercise-3-7-003} number=3.7.3 answered=no src=ch-systems.tex:4838
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 5 & -4 & 4 \\ 0 & 3 & 0 \\ -2 & 4 & -1 \end{smallmatrix} \right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of ${\vec{x}}' = A \vec{x}$.

:::

:::exercise {exercise-3-7-004} number=3.7.4 answered=no src=ch-systems.tex:4854
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{smallmatrix} \right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of ${\vec{x}}' = A \vec{x}$ in two different ways and verify you get the same answer.

:::

:::exercise {exercise-3-7-005} number=3.7.5 answered=no src=ch-systems.tex:4865
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 0 & 1 & 2 \\ -1 & -2 & -2 \\ -4 & 4 & 7 \end{smallmatrix} \right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of ${\vec{x}}' = A \vec{x}$.

:::

:::exercise {exercise-3-7-006} number=3.7.6 answered=no src=ch-systems.tex:4879
PROBLEM:
[2] Let $A = \left[ \begin{smallmatrix} 0 & 4 & -2 \\ -1 & -4 & 1 \\ 0 & 0 & -2 \end{smallmatrix} \right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of ${\vec{x}}' = A \vec{x}$.

:::

:::exercise {exercise-3-7-007} number=3.7.7 answered=no src=ch-systems.tex:4894
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 2 & 1 & -1 \\ -1 & 0 & 2 \\ -1 & -2 & 4 \end{smallmatrix} \right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of ${\vec{x}}' = A \vec{x}$.

:::

:::exercise {exercise-3-7-008} number=3.7.8 answered=no src=ch-systems.tex:4908
PROBLEM:
Suppose that $A$ is a $2 \times 2$ matrix with a repeated eigenvalue $\lambda$. Suppose that there are two linearly independent eigenvectors. Show that $A = \lambda I$.
:::

:::exercise {exercise-3-7-101} number=3.7.101 answered=yes src=ch-systems.tex:4917
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{smallmatrix}\right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of $\vec{x}\,' = A\vec{x}$.

SOLUTION:
a) $3,0,0$ b) No defects. c) $\vec{x} = C_1 \left[ \begin{smallmatrix} 1 \\ 1 \\ 1 \end{smallmatrix}\right] e^{3t} + C_2 \left[ \begin{smallmatrix} 1 \\ 0 \\ -1 \end{smallmatrix}\right] + C_3 \left[ \begin{smallmatrix} 0 \\ 1 \\ -1 \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-7-102} number=3.7.102 answered=yes src=ch-systems.tex:4954
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 1 & 3 & 3 \\ 1 & 1 & 0 \\ -1 & 1 & 2 \\ \end{smallmatrix}\right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of $\vec{x}\,' = A\vec{x}$.

SOLUTION:
a) $1,1,2$
b) Eigenvalue 1 has a defect of 1
c) $\vec{x} = C_1 \left[ \begin{smallmatrix} 0 \\ 1 \\ -1 \end{smallmatrix}\right] e^{t} + C_2 \left( \left[ \begin{smallmatrix} 1 \\ 0 \\ 0 \end{smallmatrix}\right] + t \left[ \begin{smallmatrix} 0 \\ 1 \\ -1 \end{smallmatrix}\right] \right) e^{t} + C_3 \left[ \begin{smallmatrix} 3 \\ 3 \\ -2 \end{smallmatrix}\right] e^{2t}$
:::

:::exercise {exercise-3-7-103} number=3.7.103 answered=yes src=ch-systems.tex:5000
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 2 & 0 & 0 \\ -1 & -1 & 9 \\ 0 & -1 & 5 \end{smallmatrix}\right]$.

a) What are the eigenvalues?
b) What is/are the defect(s) of the eigenvalue(s)?
c) Find the general solution of $\vec{x}\,' = A\vec{x}$.

SOLUTION:
a) $2,2,2$
b) Eigenvalue 2 has a defect of 2
c) $\vec{x} = C_1 \left[ \begin{smallmatrix} 0 \\ 3 \\ 1 \end{smallmatrix}\right] e^{2t} + C_2 \left( \left[ \begin{smallmatrix} 0 \\ -1 \\ 0 \end{smallmatrix}\right] + t \left[ \begin{smallmatrix} 0 \\ 3 \\ 1 \end{smallmatrix}\right] \right) e^{2t} + C_3 \left( \left[ \begin{smallmatrix} 1 \\ 0 \\ 0 \end{smallmatrix}\right] + t \left[ \begin{smallmatrix} 0 \\ -1 \\ 0 \end{smallmatrix}\right] + \frac{t^2}{2} \left[ \begin{smallmatrix} 0 \\ 3 \\ 1 \end{smallmatrix}\right] \right) e^{2t}$
:::

:::exercise {exercise-3-7-104} number=3.7.104 answered=yes src=ch-systems.tex:5058
PROBLEM:
Let $A = \left[ \begin{smallmatrix} a & a \\ b & c \end{smallmatrix}\right]$, where $a$, $b$, and $c$ are unknowns. Suppose that $5$ is a doubled eigenvalue of defect 1, and suppose that $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix}\right]$ is a corresponding eigenvector. Find $A$ and show that there is only one such matrix $A$.
SOLUTION:
$A = \left[ \begin{smallmatrix} 5 & 5 \\ 0 & 5 \end{smallmatrix}\right]$
:::

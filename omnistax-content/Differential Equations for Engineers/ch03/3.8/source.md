# 3.8 Matrix exponentials {sec:sec-matexp}

:::note [section-notes]
*Note: 2 lectures, may need to refer to [§7.1](ref:7.1#powerseries-section), §5.6 in [EP](cite:EP), §7.7 in [BD](cite:BD)*
:::

## Definition

There is another way of finding a fundamental matrix solution of a system. Consider the constant-coefficient equation
$$ {\vec{x}}' = P \vec{x} . $$
If this would be just one equation (when $P$ is a number or a $1 \times 1$ matrix), then the solution would be
$$ \vec{x} = e^{Pt} . $$
That does not (yet) make sense if $P$ is a larger matrix, but essentially the same computation that led to the above works for matrices when we define $e^{Pt}$ properly. First we write the Taylor series for $e^{at}$ for some number $a$:
$$ e^{at} = 1 + at + \frac{{(at)}^2}{2} + \frac{{(at)}^3}{6} + \frac{{(at)}^4}{24} + \cdots = \sum_{k=0}^\infty \frac{{(at)}^k}{k!} . $$
Recall $k! = 1 \cdot 2 \cdot 3 \cdots k$ is the factorial, and $0! = 1$. We differentiate this series term by term
$$ \begin{split} \frac{d}{dt} \left(e^{at} \right) & = 0 + a + a^2 t + \frac{a^3t^2}{2} + \frac{a^4t^3}{6} + \cdots \\ & = a \left( 1 + a t + \frac{{(at)}^2}{2} + \frac{{(at)}^3}{6} + \cdots \right) = a e^{at}. \end{split} $$
Maybe we can try the same trick with matrices. For an $n \times n$ matrix $A$, we define the *{index:matrix exponential}{index-entry:exponential of a matrix}* as
$$ \boxed{~~ e^A \overset{\text{def}}{=} I + A + \frac{1}{2} A^2 + \frac{1}{6} A^3 + \cdots + \frac{1}{k!} A^k + \cdots ~~} $$
We will not worry about convergence—the series really does always converge. We usually write $Pt$ as $tP$ by convention when $P$ is a matrix. With this small change and by the exact same calculation as above, we have that
$$ \frac{d}{dt} \left(e^{tP} \right) = P e^{tP} . $$
Now $P$ and hence $e^{tP}$ is an $n \times n$ matrix. What we are looking for is a vector. In the $1 \times 1$ case we would at this point multiply by an arbitrary constant to get the general solution. In the matrix case we multiply by a column vector $\vec{c}$.

:::theorem {thm:theorem-3-8-1} Theorem 3.8.1
Let $P$ be an $n \times n$ matrix. Then the general solution to ${\vec{x}}' = P \vec{x}$ is
$$ \vec{x} = e^{tP} \vec{c} , $$
where $\vec{c}$ is an arbitrary constant vector. In fact, $\vec{x}(0) = \vec{c}$.
:::

Check:
$$ \frac{d}{dt} \vec{x} = \frac{d}{dt} \left( e^{tP} \vec{c}\, \right) = P e^{tP} \vec{c} = P \vec{x}. $$

Hence $e^{tP}$ is a {index:fundamental matrix solution} of the homogeneous system. If we can compute the matrix exponential, we have another method of solving constant-coefficient homogeneous systems. It also makes it easy to solve for initial conditions. To solve ${\vec{x}}' = P \vec{x}$, $\vec{x}(0) = \vec{b}$, we take the solution
$$ \vec{x} = e^{tP} \vec{b} . $$
This equation follows because $e^{0P} = I$, so $\vec{x} (0) = e^{0P} \vec{b} = \vec{b}$.

We mention a drawback of matrix exponentials. In general $e^{A+B} \neq e^A e^B$. The trouble is that matrices do not commute, that is, in general $AB \neq BA$. If you would try to rewrite $e^A e^B$ as $e^{A+B}$ using the Taylor series, you will see why the lack of commutativity becomes a problem. It is true that if $AB = BA$, that is, if $A$ and $B$ commute, then $e^{A+B} = e^Ae^B$. We will find this fact useful. We restate this as a theorem to make a point.

:::theorem {thm:theorem-3-8-2} Theorem 3.8.2
If $AB = BA$, then $e^{A+B} = e^Ae^B$. Otherwise, $e^{A+B} \neq e^Ae^B$ in general.
:::

## Simple cases

In some instances it may work to just plug into the series definition. Suppose the matrix is diagonal{index-entry:diagonal matrix!matrix exponential of}. For example, $D = \left[ \begin{smallmatrix} a & 0 \\ 0 & b \end{smallmatrix} \right]$. Then
$$ D^k = \begin{bmatrix} a^k & 0 \\ 0 & b^k \end{bmatrix} , $$
and
$$ \begin{split} e^D & = I + D + \frac{1}{2} D^2 + \frac{1}{6} D^3 + \cdots \\ &= \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} + \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix} + \frac{1}{2} \begin{bmatrix} a^2 & 0 \\ 0 & b^2 \end{bmatrix} + \frac{1}{6} \begin{bmatrix} a^3 & 0 \\ 0 & b^3 \end{bmatrix} + \cdots = \begin{bmatrix} e^a & 0 \\ 0 & e^b \end{bmatrix} . \end{split} $$
In particular,
$$ e^I = \begin{bmatrix} e & 0\\ 0 & e \end{bmatrix} \qquad \text{and} \qquad e^{aI} = \begin{bmatrix} e^a & 0\\ 0 & e^a \end{bmatrix}. $$

This makes exponentials of certain other matrices easy to compute. For example, the matrix $A = \left[ \begin{smallmatrix} 5 & 4 \\ -1 & 1 \end{smallmatrix} \right]$ can be written as $3I + B$ where $B = \left[ \begin{smallmatrix} 2 & 4 \\ -1 & -2 \end{smallmatrix} \right]$. Notice that $B^2 = \left[ \begin{smallmatrix} 0 & 0 \\ 0 & 0 \end{smallmatrix} \right]$. So $B^k = 0$ for all $k \geq 2$. Therefore, $e^B = I + B$. Suppose we actually want to compute $e^{tA}$. The matrices $3tI$ and $tB$ commute (exercise: check this) and $e^{tB} = I + tB$, since ${(tB)}^2 = t^2 B^2 = 0$. We write
$$ \begin{gather*} e^{tA} = e^{3tI + tB} = e^{3tI} e^{tB} = \begin{bmatrix} e^{3t} & 0 \\ 0 & e^{3t} \end{bmatrix} \left( I + tB \right) = \\ = \begin{bmatrix} e^{3t} & 0 \\ 0 & e^{3t} \end{bmatrix} \begin{bmatrix} 1+2t & 4t \\ -t & 1-2t \end{bmatrix} = \begin{bmatrix} (1+2t)\,e^{3t} & 4te^{3t} \\ -te^{3t} & (1-2t)\,e^{3t} \end{bmatrix} . \end{gather*} $$
We found a fundamental matrix solution for the system ${\vec{x}}' = A \vec{x}$. Note that this matrix has a repeated eigenvalue with a defect; there is only one eigenvector for the eigenvalue 3. So we found a perhaps easier way to handle this case. In fact, if a matrix $A$ is $2 \times 2$ and has an eigenvalue $\lambda$ of multiplicity 2, then either $A = \lambda I$, or $A = \lambda I + B$ where $B^2 = 0$. This is a good exercise.

:::exercise {exercise-3-8-001} number=3.8.1 answered=no src=ch-systems.tex:5280
PROBLEM:
Suppose that $A$ is $2 \times 2$ and $\lambda$ is the only eigenvalue. Show that ${(A - \lambda I)}^2 = 0$, and therefore that we can write $A = \lambda I + B$, where $B^2 = 0$ (and possibly $B=0$). Hint: First write down what does it mean for the eigenvalue to be of multiplicity 2. You will get an equation for the entries. Now compute the square of $B$.
:::

Matrices $B$ such that $B^k = 0$ for some $k$ are called *{index:nilpotent}*. Computation of the matrix exponential for nilpotent matrices is easy by just writing down the first $k$ terms of the Taylor series.

## General matrices

In general, the exponential is not as easy to compute as above. We usually cannot write a matrix as a sum of commuting matrices where the exponential is simple for each one. But fear not, it is still not too difficult provided we can find enough eigenvectors. First we need the following interesting result about matrix exponentials. For two square matrices $A$ and $B$, with $B$ invertible, we have
$$ e^{BAB^{-1}} = B e^A B^{-1} . $$
This can be seen by writing down the Taylor series. First
$$ {(BAB^{-1})}^2 = BAB^{-1} BAB^{-1} = BAIAB^{-1} = BA^2B^{-1} . $$
And by the same reasoning ${(BAB^{-1})}^k = B A^k B^{-1}$. Now write the Taylor series for $e^{BAB^{-1}}$:
$$ \begin{split} e^{BAB^{-1}} & = I + {BAB^{-1}} + \frac{1}{2} {(BAB^{-1})}^2 + \frac{1}{6} {(BAB^{-1})}^3 + \cdots \\ & = BB^{-1} + {BAB^{-1}} + \frac{1}{2} BA^2B^{-1} + \frac{1}{6} BA^3B^{-1} + \cdots \\ & = B \bigl( I + A + \frac{1}{2} A^2 + \frac{1}{6} A^3 + \cdots \bigr) B^{-1} \\ & = B e^A B^{-1} . \end{split} $$

Given a square matrix $A$, we can usually write $A = E D E^{-1}$, where $D$ is diagonal and $E$ invertible. This procedure is called *{index:diagonalization}*. If we can do that, the computation of the exponential becomes easy as $e^D$ is just taking the exponential of the entries on the diagonal. Adding $t$ into the mix, we can then compute the exponential
$$ e^{tA} = E e^{tD} E^{-1} . $$

To diagonalize $A$ we need $n$ linearly independent eigenvectors of $A$. Otherwise, this method of computing the exponential does not work and we need to be trickier, but we will not get into such details. Let $E$ be the matrix with the eigenvectors as columns. Let $\lambda_1$, $\lambda_2$, …, $\lambda_n$ be the eigenvalues and let $\vec{v}_1$, $\vec{v}_2$, …, $\vec{v}_n$ be the eigenvectors, then $E = [\, \vec{v}_1 \quad \vec{v}_2 \quad \cdots \quad \vec{v}_n \,]$. Make a diagonal matrix $D$ with the eigenvalues on the diagonal:
$$ D = \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix} . $$
We compute
$$ \begin{split} AE & = A [\, \vec{v}_1 \quad \vec{v}_2 \quad \cdots \quad \vec{v}_n \,] \\ & = [\, A\vec{v}_1 \quad A\vec{v}_2 \quad \cdots \quad A\vec{v}_n \,] \\ & = [\, \lambda_1 \vec{v}_1 \quad \lambda_2 \vec{v}_2 \quad \cdots \quad \lambda_n \vec{v}_n \,] \\ & = [\, \vec{v}_1 \quad \vec{v}_2 \quad \cdots \quad \vec{v}_n \,] D \\ & = ED . \end{split} $$
The columns of $E$ are linearly independent as these are linearly independent eigenvectors of $A$. Hence $E$ is invertible. Since $AE = ED$, we multiply on the right by $E^{-1}$ and we get
$$ A = E D E^{-1}. $$
This means that $e^A = E e^D E^{-1}$. Multiplying the matrix by $t$, we obtain
$$ \boxed{~~ e^{tA} = Ee^{tD}E^{-1} = E \begin{bmatrix} e^{\lambda_1 t} & 0 & \cdots & 0 \\ 0 & e^{\lambda_2 t} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & e^{\lambda_n t} \end{bmatrix} E^{-1} . ~~} $$ {eq:matexp-diagfundsol} number=3.5
The formula [(3.5)](ref:matexp-diagfundsol), therefore, gives the formula for computing a fundamental matrix solution $e^{tA}$ for the system ${\vec{x}}' = A \vec{x}$, in the case where we have $n$ linearly independent eigenvectors.

This computation still works when the eigenvalues and eigenvectors are complex, though then you have to compute with complex numbers. It is clear from the definition that if $A$ is real, then $e^{tA}$ is real. So you will only need complex numbers in the computation and not for the result. You may need to apply [Euler’s formula](ref:2.2#eulersformula) to simplify the result. If simplified properly, the final matrix will not have any complex numbers in it.

:::example {ex:example-3-8-1} Example 3.8.1
Compute a fundamental matrix solution using the matrix exponential for the system
$$ \begin{bmatrix} x \\ y \end{bmatrix} ' = \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} . $$
Then compute the particular solution for the initial conditions $x(0) = 4$ and $y(0) = 2$.

Let $A$ be the coefficient matrix $\left[ \begin{smallmatrix} 1 & 2 \\ 2 & 1 \end{smallmatrix} \right]$. We first compute (exercise) that the eigenvalues are 3 and $-1$ and corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$. Hence the diagonalization of $A$ is
$$ \underbrace{ \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} }_{A} = \underbrace{ \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} }_{E} \underbrace{ \begin{bmatrix} 3 & 0 \\ 0 & -1 \end{bmatrix} }_{D} \underbrace{ \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}^{-1} }_{E^{-1}} . $$
We write
$$ \begin{split} e^{t A} = E e^{tD} E^{-1} & = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} e^{3t} & 0 \\ 0 & e^{-t} \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}^{-1} \\ & = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} e^{3t} & 0 \\ 0 & e^{-t} \end{bmatrix} \frac{-1}{2} \begin{bmatrix} -1 & -1 \\ -1 & 1 \end{bmatrix} \\ & = \frac{-1}{2} \begin{bmatrix} e^{3t} & e^{-t} \\ e^{3t} & -e^{-t} \end{bmatrix} \begin{bmatrix} -1 & -1 \\ -1 & 1 \end{bmatrix} \\ & = \frac{-1}{2} \begin{bmatrix} -e^{3t}-e^{-t} & -e^{3t}+e^{-t} \\ -e^{3t}+e^{-t} & -e^{3t}-e^{-t} \end{bmatrix} = \begin{bmatrix} \frac{e^{3t}+e^{-t}}{2} & \frac{e^{3t}-e^{-t}}{2} \\ \frac{e^{3t}-e^{-t}}{2} & \frac{e^{3t}+e^{-t}}{2} \end{bmatrix} . \end{split} $$

The initial conditions are $x(0) = 4$ and $y(0) = 2$. Hence, by the property that $e^{0A} = I$, we find that the particular solution we are looking for is $e^{tA} \vec{b}$ where $\vec{b}$ is $\left[ \begin{smallmatrix} 4 \\ 2 \end{smallmatrix} \right]$. The particular solution we are looking for is
$$ \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \frac{e^{3t}+e^{-t}}{2} & \frac{e^{3t}-e^{-t}}{2} \\ \frac{e^{3t}-e^{-t}}{2} & \frac{e^{3t}+e^{-t}}{2} \end{bmatrix} \begin{bmatrix} 4 \\ 2 \end{bmatrix} = \begin{bmatrix} 2e^{3t}+2e^{-t} + e^{3t}-e^{-t} \\ 2e^{3t}-2e^{-t} + e^{3t}+e^{-t} \end{bmatrix} = \begin{bmatrix} 3e^{3t}+e^{-t} \\ 3e^{3t}-e^{-t} \end{bmatrix} . $$

:::

## Fundamental matrix solutions

If you can compute a fundamental matrix solution in a different way, you can use this to find the matrix exponential $e^{tA}$. A fundamental matrix solution of a system of ODEs is not unique. The exponential is the fundamental matrix solution with the property that for $t=0$ we get the identity matrix. So we must find the right fundamental matrix solution. Let $X$ be any fundamental matrix solution to ${\vec{x}}' = A \vec{x}$. We claim
$$ e^{tA} = X(t) \left[ X(0) \right]^{-1} . $$
If we plug $t=0$ into $X(t) \left[ X(0) \right]^{-1}$, we get the identity as needed. We can multiply a fundamental matrix solution on the right by any constant invertible matrix and we still get a fundamental matrix solution. All we are doing is changing what are the arbitrary constants in the general solution $\vec{x}(t) = X(t)\, \vec{c}$.

## Approximations

If you think about it, the computation of any fundamental matrix solution $X$ using the eigenvalue method is just as difficult as the computation of $e^{tA}$. So perhaps we did not gain much by this new tool. However, the Taylor series expansion actually gives us a way to approximate solutions, which the eigenvalue method did not.

The simplest thing we can do is to just compute the series up to a certain number of terms. There are better ways to approximate the exponential^[C. Moler and C.F. Van Loan, *Nineteen Dubious Ways to Compute the Exponential of a Matrix, Twenty-Five Years Later*, SIAM Review 45 (1), 2003, 3–49]. In many cases, however, few terms of the Taylor series give a reasonable approximation for the exponential and may suffice for the application. For example, let us compute the first 4 terms of the series for the matrix $A = \left[ \begin{smallmatrix} 1 & 2 \\ 2 & 1 \end{smallmatrix} \right]$.
$$ \begin{gather*} e^{tA} \approx I + tA + \frac{t^2}{2}A^2 + \frac{t^3}{6}A^3 = I + t \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix} + t^2 \begin{bmatrix} \frac{5}{2} & 2 \\ 2 & \frac{5}{2} \end{bmatrix} + t^3 \begin{bmatrix} \frac{13}{6} & \frac{7}{3} \\ \frac{7}{3} & \frac{13}{6} \end{bmatrix} = \\ = \begin{bmatrix} 1 + t + \frac{5}{2}\, t^2 + \frac{13}{6}\, t^3 & 2\,t + 2\, t^2 + \frac{7}{3}\, t^3 \\ 2\,t + 2\, t^2 + \frac{7}{3}\, t^3 & 1 + t + \frac{5}{2}\, t^2 + \frac{13}{6}\, t^3 \end{bmatrix} . \end{gather*} $$
Just like the scalar version of the Taylor series approximation, the approximation will be better for small $t$ and worse for larger $t$. For larger $t$, we will have to compute more terms. Let us see how we stack up against the real solution with $t=0.1$. The approximate solution is approximately (rounded to 8 decimal places)
$$ e^{0.1\,A} \approx I + 0.1\,A + \frac{0.1^2}{2}A^2 + \frac{0.1^3}{6}A^3 = \begin{bmatrix} 1.12716667 & 0.22233333 \\ 0.22233333 & 1.12716667 \\ \end{bmatrix} . $$
Plugging $t=0.1$ into the real solution (rounded to 8 decimal places), we get
$$ e^{0.1\,A} = \begin{bmatrix} 1.12734811 & 0.22251069 \\ 0.22251069 & 1.12734811 \end{bmatrix} . $$
Not bad at all! Although if we take the same approximation for $t=1$, we get
$$ I + A + \frac{1}{2}A^2 + \frac{1}{6}A^3 = \begin{bmatrix} 6.66666667 & 6.33333333 \\ 6.33333333 & 6.66666667 \end{bmatrix} , $$
while the real value is (again rounded to 8 decimal places)
$$ e^{A} = \begin{bmatrix} 10.22670818 & \phantom{0}9.85882874 \\ \phantom{0}9.85882874 & 10.22670818 \end{bmatrix} . $$
So the approximation is not very good once we get up to $t=1$. To get a good approximation at $t=1$ (say up to 2 decimal places), we would need to go up to the ${11}^{\text{th}}$ power (exercise).

## Exercises

:::exercise {exercise-3-8-002} number=3.8.2 answered=no src=ch-systems.tex:5692
PROBLEM:
Using the matrix exponential, find a fundamental matrix solution for the system $x' = 3x+y$, $y' = x+3y$.
:::

:::exercise {exercise-3-8-003} number=3.8.3 answered=no src=ch-systems.tex:5698
PROBLEM:
Find $e^{tA}$ for the matrix $A = \left[ \begin{smallmatrix} 2 & 3 \\ 0 & 2 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-8-004} number=3.8.4 answered=no src=ch-systems.tex:5706
PROBLEM:
Find a fundamental matrix solution for the system $x_1' = 7x_1+4x_2+ 12x_3$, $x_2' = x_1+2x_2+x_3$, $x_3' = -3x_1-2x_2- 5x_3$. Then find the solution that satisfies $\vec{x}(0) = \left[ \begin{smallmatrix} 0 \\ 1 \\ -2 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-8-005} number=3.8.5 answered=no src=ch-systems.tex:5715
PROBLEM:
Compute the matrix exponential $e^A$ for $A = \left[ \begin{smallmatrix} 1 & 2 \\ 0 & 1 \end{smallmatrix} \right]$.
:::

:::exercise {matexp-explawex} number=3.8.6 answered=no src=ch-systems.tex:5719 label=matexp:explawex
PROBLEM:
**challenging**
Suppose $AB = BA$. Show that under this assumption, $e^{A+B} = e^A e^B$.
:::

:::exercise {matexp-expinvex} number=3.8.7 answered=no src=ch-systems.tex:5723 label=matexp:expinvex
PROBLEM:
Use [Exercise 3.8.6](ref:matexp-explawex) to show that ${(e^{A})}^{-1} = e^{-A}$. In particular, $e^A$ is invertible even if $A$ is not.
:::

:::exercise {exercise-3-8-008} number=3.8.8 answered=no src=ch-systems.tex:5730
PROBLEM:
Let $A$ be a $2 \times 2$ matrix with eigenvalues $-1$, $1$, and corresponding eigenvectors $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$, $\left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$.

a) Find matrix $A$ with these properties.
b) Find a fundamental matrix solution to ${\vec{x}}' = A \vec{x}$.
c) Solve the system in with initial conditions $\vec{x}(0) = \left[ \begin{smallmatrix} 2 \\ 3 \end{smallmatrix} \right]$ .

:::

:::exercise {exercise-3-8-009} number=3.8.9 answered=no src=ch-systems.tex:5752
PROBLEM:
Suppose that $A$ is an $n \times n$ matrix with a repeated eigenvalue $\lambda$ of multiplicity $n$ with $n$ linearly independent eigenvectors. Show that the matrix is diagonal, in fact, $A = \lambda I$. Hint: Use diagonalization and the fact that the identity matrix commutes with every other matrix.
:::

:::exercise {exercise-3-8-010} number=3.8.10 answered=no src=ch-systems.tex:5761
PROBLEM:
Let $A = \left[ \begin{smallmatrix} -1 & -1 \\ 1 & -3 \end{smallmatrix} \right]$.

a) Find $e^{tA}$.
b) Solve ${\vec{x}}' = A \vec{x}$, $\vec{x}(0) = \left[ \begin{smallmatrix} 1 \\ -2 \end{smallmatrix} \right]$.

:::

:::exercise {exercise-3-8-011} number=3.8.11 answered=no src=ch-systems.tex:5777
PROBLEM:
Let $A = \left[ \begin{smallmatrix} 1 & 2 \\ 3 & 4 \end{smallmatrix} \right]$. Approximate $e^{tA}$ by expanding the power series up to the third order.
:::

:::exercise {exercise-3-8-012} number=3.8.12 answered=no src=ch-systems.tex:5786
PROBLEM:
For any positive integer $n$, find a formula (or a recipe) for $A^n$ for the following matrices:

a) $\begin{bmatrix} 3 & 0 \\ 0 & 9 \end{bmatrix}$
b) $\begin{bmatrix} 5 & 2 \\ 4 & 7 \end{bmatrix}$
c) $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$
d) $\begin{bmatrix} 2 & 1 \\ 0 & 2 \end{bmatrix}$

:::

:::exercise {exercise-3-8-101} number=3.8.101 answered=yes src=ch-systems.tex:5819
PROBLEM:
Compute $e^{tA}$ where $A=\left[ \begin{smallmatrix} 1 & -2 \\ -2 & 1 \end{smallmatrix}\right]$.
SOLUTION:
$e^{tA}=\left[ \begin{smallmatrix} \frac{{e}^{3t}+{e}^{-t}}{2} & \quad \frac{{e}^{-t}-{e}^{3t}}{2}\\ \frac{{e}^{-t}-{e}^{3t}}{2} & \quad \frac{{e}^{3t}+{e}^{-t}}{2} \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-8-102} number=3.8.102 answered=yes src=ch-systems.tex:5836
PROBLEM:
Compute $e^{tA}$ where $A=\left[ \begin{smallmatrix} 1 & -3 & 2 \\ -2 & 1 & 2 \\ -1 & -3 & 4 \end{smallmatrix}\right]$.
SOLUTION:
$e^{tA}=\left[ \begin{smallmatrix} 2{e}^{3t}-4{e}^{2t}+3{e}^{t} & \quad \frac{3{e}^{t}}{2}-\frac{3{e}^{3t}}{2} & \quad -{e}^{3t}+4{e}^{2t}-3{e}^{t} \\ 2{e}^{t}-2{e}^{2t} & \quad {e}^{t} & \quad 2{e}^{2t}-2{e}^{t} \\ 2{e}^{3t}-5{e}^{2t}+3{e}^{t} & \quad \frac{3{e}^{t}}{2}-\frac{3{e}^{3t}}{2} & \quad -{e}^{3t}+5{e}^{2t}-3{e}^{t} \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-8-103} number=3.8.103 answered=yes src=ch-systems.tex:5860
PROBLEM:

a) Compute $e^{tA}$ where $A=\left[ \begin{smallmatrix} 3 & -1 \\ 1 & 1 \end{smallmatrix}\right]$.
b) Solve $\vec{x}\,' = A \vec{x}$ for $\vec{x}(0) = \left[ \begin{smallmatrix} 1 \\ 2 \end{smallmatrix}\right]$.

SOLUTION:
a) $e^{tA}=\left[ \begin{smallmatrix} ( t+1) \,{e}^{2t} & -t{e}^{2t} \\ t{e}^{2t} & ( 1-t) \,{e}^{2t} \end{smallmatrix}\right]$ b) $\vec{x}=\left[ \begin{smallmatrix} (1-t) \,{e}^{2t} \\ (2-t) \,{e}^{2t} \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-8-104} number=3.8.104 answered=yes src=ch-systems.tex:5891
PROBLEM:
Compute the first 3 terms (up to the second degree) of the Taylor expansion of $e^{tA}$ where $A=\left[ \begin{smallmatrix} 2 & 3 \\ 2 & 2 \end{smallmatrix}\right]$. Write it as a single matrix. Then use it to approximate $e^{0.1A}$.
SOLUTION:
$\left[ \begin{smallmatrix} 1+2t+5t^2 & 3t+6t^2 \\ 2t+4t^2 & 1+2t+5t^2 \end{smallmatrix}\right]$ $e^{0.1A} \approx \left[ \begin{smallmatrix} 1.25 & 0.36 \\ 0.24 & 1.25 \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-8-105} number=3.8.105 answered=yes src=ch-systems.tex:5913
PROBLEM:
For any positive integer $n$, find a formula (or a recipe) for $A^n$ for the following matrices:

a) $\begin{bmatrix} 7 & 4 \\ -5 & -2 \end{bmatrix}$
b) $\begin{bmatrix} -3 & 4 \\ -6 & 7 \end{bmatrix}$
c) $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} 5 (3^n)-2^{n+2} & 4 (3^n)-2^{n+2}\\ 5 (2^n)-5 (3^n) & 5 (2^n)-4 (3^n) \end{bmatrix}$ b) $\begin{bmatrix}3-2 (3^n) & 2 (3^n)-2\\ 3-3^{n+1} & 3^{n+1}-2\end{bmatrix}$
c) $\begin{bmatrix}1 & 0 \\ 0 & 1\end{bmatrix}$ if $n$ is even, and $\begin{bmatrix}0 & 1 \\ 1 & 0\end{bmatrix}$ if $n$ is odd.
:::

# 3.3 Linear systems of ODEs {sec:linsystems-section}

:::note [section-notes]
*Note: less than 1 lecture, second part of §5.1 in [EP](cite:EP), §7.4 in [BD](cite:BD)*
:::

A matrix- or vector-valued function is simply a matrix or a vector whose entries depend on some variable. If $t$ is the independent variable, we write a *{index:vector-valued function}* $\vec{x}(t)$ as
$$ \vec{x}(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{bmatrix} . $$
Similarly a *{index:matrix-valued function}* $A(t)$ is
$$ A(t) = \begin{bmatrix} a_{11}(t) & a_{12}(t) & \cdots & a_{1n}(t) \\ a_{21}(t) & a_{22}(t) & \cdots & a_{2n}(t) \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1}(t) & a_{n2}(t) & \cdots & a_{nn}(t) \end{bmatrix} . $$
The derivative $A'(t)$ or $\frac{dA}{dt}$ is just the matrix-valued function whose $ij^{\text{th}}$ entry is $a_{ij}'(t)$.

Rules of differentiation of matrix-valued functions are similar to rules for normal functions. Let $A(t)$ and $B(t)$ be matrix-valued functions. Let $c$ be a scalar and $C$ a constant matrix. Then
$$ \begin{aligned} \bigl(A(t)+B(t)\bigr)' & = A'(t) + B'(t), \\ \bigl(A(t)B(t)\bigr)' & = A'(t)B(t) + A(t)B'(t), \\ \bigl(cA(t)\bigr)' & = cA'(t), \\ \bigl(CA(t)\bigr)' & = CA'(t), \\ \bigl(A(t)\,C\bigr)' & = A'(t)\,C . \end{aligned} $$
Note the order of the multiplication in the last two expressions.

A *{index:first-order linear system of ODEs}* is a system that can be written as the vector equation
$$ {\vec{x}}'(t) = P(t)\vec{x}(t) + \vec{f}(t), $$
where $P(t)$ is a matrix-valued function, and $\vec{x}(t)$ and $\vec{f}(t)$ are vector-valued functions. We will often suppress the dependence on $t$ and only write ${\vec{x}}' = P\vec{x} + \vec{f}$. A solution of the system is a vector-valued function $\vec{x}$ satisfying the vector equation.

For example, the equations
$$ \begin{aligned} x_1' &= 2t x_1 + e^t x_2 + t^2 , \\ x_2' &= \frac{x_1}{t} -x_2 + e^t , \end{aligned} $$
can be written as
$$ {\vec{x}}' = \begin{bmatrix} 2t & e^t \\ {1}/{t} & -1 \end{bmatrix} \vec{x} + \begin{bmatrix} t^2 \\ e^t \end{bmatrix} . $$

We will mostly concentrate on equations that are not just linear, but are in fact *{index:constant-coefficient}* equations. That is, the matrix $P$ will be constant; it will not depend on $t$.

When $\vec{f} = \vec{0}$ (the zero vector), we say the system is *homogeneous{index-entry:homogeneous system}*. For homogeneous linear systems, we have the principle of superposition, just like for single homogeneous linear equations.

:::theorem {thm:theorem-3-3-1} Theorem 3.3.1 (Superposition)
{index-entry:superposition} Let ${\vec{x}}' = P\vec{x}$ be a linear homogeneous system of ODEs. Suppose that $\vec{x}_1,\vec{x}_2,\ldots,\vec{x}_n$ are $n$ solutions of the equation and $c_1,c_2,\ldots,c_n$ are any constants, then
$$ \vec{x} = c_1 \vec{x}_1 + c_2 \vec{x}_2 + \cdots + c_n \vec{x}_n , $$ {eq:syshom-eq1} number=3.2
is also a solution. Furthermore, if this is a system of $n$ equations ($P$ is $n\times n$), and $\vec{x}_1,\vec{x}_2,\ldots,\vec{x}_n$ are linearly independent, then every solution $\vec{x}$ can be written as [(3.2)](ref:syshom-eq1).
:::

Linear independence for vector-valued functions is the same idea as for normal functions. The vector-valued functions $\vec{x}_1,\vec{x}_2,\ldots,\vec{x}_n$ are linearly independent {index-entry:linearly independent!for vector-valued functions} when
$$ c_1 \vec{x}_1 + c_2 \vec{x}_2 + \cdots + c_n \vec{x}_n = \vec{0} $$
has only the solution $c_1 = c_2 = \cdots = c_n = 0$, where the equation must hold for all $t$.

:::example {ex:example-3-3-1} Example 3.3.1
$\vec{x}_1 = \Bigl[ \begin{smallmatrix} t^2 \\ t \end{smallmatrix} \Bigr]$, $\vec{x}_2 = \Bigl[ \begin{smallmatrix} 0 \\ 1+t \end{smallmatrix} \Bigr]$, $\vec{x}_3 = \Bigl[ \begin{smallmatrix} -t^2 \\ 1 \end{smallmatrix} \Bigr]$ are linearly dependent because $\vec{x}_1 + \vec{x}_3 = \vec{x}_2$, and this holds for all $t$. So $c_1 = 1$, $c_2 = -1$, and $c_3 = 1$ above will work.

On the other hand, if we change the example slightly to $\vec{x}_1 = \Bigl[ \begin{smallmatrix} t^2 \\ t \end{smallmatrix} \Bigr]$, $\vec{x}_2 = \Bigl[ \begin{smallmatrix} 0 \\ t \end{smallmatrix} \Bigr]$, $\vec{x}_3 = \Bigl[ \begin{smallmatrix} -t^2 \\ 1 \end{smallmatrix} \Bigr]$, then the functions are linearly independent. First write $c_1 \vec{x}_1 + c_2 \vec{x}_2 + c_3 \vec{x}_3 = \vec{0}$ and note that it has to hold for all $t$. We get that
$$ c_1 \vec{x}_1 + c_2 \vec{x}_2 + c_3 \vec{x}_3 = \begin{bmatrix} c_1 t^2 - c_3 t^2 \\ c_1 t + c_2 t + c_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} . $$
In other words $c_1 t^2 - c_3 t^2 = 0$ and $c_1 t + c_2 t + c_3 = 0$. If we set $t = 0$, then the second equation becomes $c_3 = 0$. But then the first equation becomes $c_1 t^2 = 0$ for all $t$ and so $c_1 = 0$. Thus the second equation is just $c_2 t = 0$, which means $c_2 = 0$. So $c_1 = c_2 = c_3 = 0$ is the only solution and $\vec{x}_1$, $\vec{x}_2$, and $\vec{x}_3$ are linearly independent.
:::

The linear combination $c_1 \vec{x}_1 + c_2 \vec{x}_2 + \cdots + c_n \vec{x}_n$ could always be written as
$$ X(t)\,\vec{c} , $$
where $X(t)$ is the matrix with columns $\vec{x}_1, \vec{x}_2, \ldots, \vec{x}_n$, and $\vec{c}$ is the column vector with entries $c_1, c_2, \ldots, c_n$. Assuming that $\vec{x}_1,\vec{x}_2,\ldots,\vec{x}_n$ are linearly independent, the matrix-valued function $X(t)$ is called a *{index:fundamental matrix}*, or a *{index:fundamental matrix solution}*. Note that the fundamental matrix is not unique; if you take any constant invertible $n\times n$ matrix $C$, then $X(t) C$ is another fundamental matrix.

To solve nonhomogeneous first-order linear systems, we use the same technique as we applied to solve single linear nonhomogeneous equations.

:::theorem {thm:theorem-3-3-2} Theorem 3.3.2
Let ${\vec{x}}' = P\vec{x} + \vec{f}$ be a linear system of ODEs. Suppose $\vec{x}_p$ is one particular solution. Then every solution can be written as
$$ \vec{x} = \vec{x}_c + \vec{x}_p , $$
where $\vec{x}_c$ is a solution to the {index:associated homogeneous equation} (${\vec{x}}' = P\vec{x}$).
:::

The procedure for systems is the same as for single equations. We find a particular solution to the nonhomogeneous equation, then we find the general solution to the associated homogeneous equation, and finally we add the two together.

Alright, suppose you have found the general solution of ${\vec{x}}' = P\vec{x} + \vec{f}$. Next suppose you are given an initial condition of the form
$$ \vec{x}(t_0) = \vec{b} $$
for some fixed $t_0$ and a constant vector $\vec{b}$. Let $X(t)$ be a fundamental matrix solution of the associated homogeneous equation (i.e. columns of $X(t)$ are solutions). The general solution can be written as
$$ \vec{x}(t) = X(t)\,\vec{c} + \vec{x}_p(t). $$
We are seeking a vector $\vec{c}$ such that
$$ \vec{b} = \vec{x}(t_0) = X(t_0)\,\vec{c} + \vec{x}_p(t_0). $$
In other words, we are solving for $\vec{c}$ the nonhomogeneous system of linear equations
$$ X(t_0)\,\vec{c} = \vec{b} - \vec{x}_p(t_0) . $$

:::example {ex:example-3-3-2} Example 3.3.2
In [Example 3.1.1](ref:3.1#example-simplesystem), we solved the system
$$ \begin{align*} x_1' & = x_1 , \\ x_2' & = x_1 - x_2 , \end{align*} $$
with initial conditions $x_1(0) = 1$, $x_2(0) = 2$. Let us consider this problem in the language of this section. The system is homogeneous, so $\vec{f}(t) = \vec{0}$. We write the system and the initial conditions as
$$ {\vec{x}}' = \begin{bmatrix} 1 & 0 \\ 1 & -1 \end{bmatrix} \vec{x} , \qquad \vec{x}(0) = \begin{bmatrix} 1 \\ 2 \end{bmatrix} . $$

Ignoring the initial condition for a moment, the general solution is $x_1 = c_1 e^t$ and $x_2 = \frac{c_1}{2}e^{t} + c_2e^{-t}$. Letting $c_1=1$ and $c_2=0$, we obtain the solution $\vec{x}(t) = \left[ \begin{smallmatrix} e^t \\ (1/2) e^t \end{smallmatrix} \right]$. Letting $c_1=0$ and $c_2=1$, we obtain $\vec{x}(t) = \left[ \begin{smallmatrix} 0 \\ e^{-t} \end{smallmatrix} \right]$. These two solutions are linearly independent, as can be seen by setting $t=0$, and noting that the resulting constant vectors are linearly independent. In matrix notation, a fundamental matrix solution is, therefore,
$$ X(t) = \begin{bmatrix} e^t & 0 \\ \frac{1}{2} e^t & e^{-t} \end{bmatrix} . $$

To solve the initial value problem, we solve for $\vec{c}$ in the equation
$$ X(0)\,\vec{c} = \vec{b} , $$
or in other words,
$$ \begin{bmatrix} 1 & 0 \\ \frac{1}{2} & 1 \end{bmatrix} \vec{c} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} . $$
A single elementary row operation shows $\vec{c} = \left[ \begin{smallmatrix} 1 \\ 3/2 \end{smallmatrix} \right]$. Our solution is
$$ \vec{x}(t) = X(t)\,\vec{c} = \begin{bmatrix} e^t & 0 \\ \frac{1}{2} e^t & e^{-t} \end{bmatrix} \begin{bmatrix} 1 \\ \frac{3}{2} \end{bmatrix} = \begin{bmatrix} e^t \\ \frac{1}{2} e^t + \frac{3}{2} e^{-t} \end{bmatrix} . $$
This new solution agrees with our previous solution from [§3.1](ref:3.1#sec-introtosys).
:::

## Exercises

:::exercise {exercise-3-3-001} number=3.3.1 answered=no src=ch-systems.tex:1861
PROBLEM:
Write the system $x_1' = 2 x_1 - 3t x_2 + \sin t$, $x_2' = e^t x_1 + 3 x_2 + \cos t$ in the form ${\vec{x}}' = P(t) \vec{x} + \vec{f}(t)$.
:::

:::exercise {exercise-3-3-002} number=3.3.2 answered=no src=ch-systems.tex:1867
PROBLEM:

a) Verify that the system ${\vec{x}}' = \left[ \begin{smallmatrix} 1 & 3 \\ 3 & 1 \end{smallmatrix} \right] \vec{x}$ has the two solutions $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right] e^{4t}$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right] e^{-2t}$.
b) Write down the general solution.
c) Write down the general solution in the form $x_1 = ?$, $x_2 = ?$ (i.e. write down a formula for each element of the solution).

:::

:::exercise {exercise-3-3-003} number=3.3.3 answered=no src=ch-systems.tex:1889
PROBLEM:
Verify that $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right] e^{t}$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right] e^{t}$ are linearly independent. Hint: Just plug in $t=0$.
:::

:::exercise {exercise-3-3-004} number=3.3.4 answered=no src=ch-systems.tex:1900
PROBLEM:
Verify that $\left[ \begin{smallmatrix} 1 \\ 1 \\ 0 \end{smallmatrix} \right] e^{t}$ and $\left[ \begin{smallmatrix} 1 \\ -1 \\ 1 \end{smallmatrix} \right] e^{t}$ and $\left[ \begin{smallmatrix} 1 \\ -1 \\ 1 \end{smallmatrix} \right] e^{2t}$ are linearly independent. Hint: You must be a bit more tricky than in the previous exercise.
:::

:::exercise {exercise-3-3-005} number=3.3.5 answered=no src=ch-systems.tex:1916
PROBLEM:
Verify that $\left[ \begin{smallmatrix} t \\ t^2 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} t^3 \\ t^4 \end{smallmatrix} \right]$ are linearly independent.
:::

:::exercise {exercise-3-3-006} number=3.3.6 answered=no src=ch-systems.tex:1927
PROBLEM:
Take the system $x_1' + x_2' = x_1$, $x_1' - x_2' = x_2$.

a) Write it in the form $A {\vec{x}}' = B \vec{x}$ for matrices $A$ and $B$.
b) Compute $A^{-1}$ and use that to write the system in the form ${\vec{x}}' = P \vec{x}$.

:::

:::exercise {exercise-3-3-101} number=3.3.101 answered=yes src=ch-systems.tex:1940
PROBLEM:
Are $\left[ \begin{smallmatrix} e^{2t} \\ e^t \end{smallmatrix}\right]$ and $\left[ \begin{smallmatrix} e^{t} \\ e^{2t} \end{smallmatrix}\right]$ linearly independent? Justify.
SOLUTION:
Yes.
:::

:::exercise {exercise-3-3-102} number=3.3.102 answered=yes src=ch-systems.tex:1955
PROBLEM:
Are $\left[ \begin{smallmatrix} \cosh(t) \\ 1 \end{smallmatrix}\right]$, $\left[ \begin{smallmatrix} e^{t} \\ 1 \end{smallmatrix}\right]$, and $\left[ \begin{smallmatrix} e^{-t} \\ 1 \end{smallmatrix}\right]$ linearly independent? Justify.
SOLUTION:
No. $2 \left[ \begin{smallmatrix} \cosh(t) \\ 1 \end{smallmatrix}\right] - \left[ \begin{smallmatrix} e^{t} \\ 1 \end{smallmatrix}\right] - \left[ \begin{smallmatrix} e^{-t} \\ 1 \end{smallmatrix}\right] = \vec{0}$
:::

:::exercise {exercise-3-3-103} number=3.3.103 answered=yes src=ch-systems.tex:1983
PROBLEM:
Write $x'=3x-y+e^t$, $y'=tx$ in matrix notation.
SOLUTION:
$\left[ \begin{smallmatrix} x \\ y \end{smallmatrix}\right] ' = \left[ \begin{smallmatrix} 3 & -1 \\ t & 0 \end{smallmatrix}\right] \left[ \begin{smallmatrix} x \\ y \end{smallmatrix}\right] + \left[ \begin{smallmatrix} e^{t} \\ 0 \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-3-104} number=3.3.104 answered=yes src=ch-systems.tex:2004
PROBLEM:

a) Write $x_1'=2tx_2$, $x_2'=2tx_2$ in matrix notation.
b) Solve and write the solution in matrix notation.

SOLUTION:
a) $\vec{x}\,' = \left[ \begin{smallmatrix} 0 & 2t \\ 0 & 2t \end{smallmatrix}\right] \vec{x}$ b) $\vec{x} = \left[ \begin{smallmatrix} C_2 e^{t^2} + C_1 \\ C_2 e^{t^2} \end{smallmatrix}\right]$
:::

# 3.9 Nonhomogeneous systems {sec:nonhomogsys-section}

:::note [section-notes]
*Note: 3 lectures (may have to skip a little), somewhat different from §5.7 in [EP](cite:EP), §7.9 in [BD](cite:BD)*
:::

## First-order constant-coefficient

### Integrating factor

We first focus on the nonhomogeneous first-order equation
$$ {\vec{x}}'(t) = A\vec{x}(t) + \vec{f}(t) , $$
where $A$ is a constant matrix. The first method we look at is the *integrating factor method{index-entry:integrating factor method!for systems}*. For simplicity, we rewrite the equation as
$$ {\vec{x}}'(t) + P \vec{x}(t) = \vec{f}(t) , $$
where $P = -A$. We multiply both sides of the equation by $e^{tP}$ (being mindful that we are dealing with matrices that may not commute) to obtain
$$ e^{tP}{\vec{x}}'(t) + e^{tP}P\vec{x}(t) = e^{tP}\vec{f}(t) . $$
We notice that $P e^{tP} = e^{tP} P$. This fact follows by writing down the series definition of $e^{tP}$:
$$ \begin{split} P e^{tP} & = P \left( I + tP + \frac{1}{2} {(tP)}^2 + \cdots \right) = P + tP^2 + \frac{1}{2} t^2P^3 + \cdots = \\ & = \left( I + tP + \frac{1}{2} {(tP)}^2 + \cdots \right) P = e^{tP} P . \end{split} $$
So $\frac{d}{dt} \left( e^{tP} \right) = P e^{tP} = e^{tP} P$. The product rule says
$$ \frac{d}{dt} \Bigl( e^{tP} \vec{x}(t) \Bigr) = e^{tP}{\vec{x}}'(t) + e^{tP}P\vec{x}(t), $$
and so
$$ \frac{d}{dt} \Bigl( e^{tP} \vec{x}(t) \Bigr) = e^{tP}\vec{f}(t) . $$
We can now integrate. That is, we integrate each component of the vector separately
$$ e^{tP} \vec{x}(t) = \int e^{tP}\vec{f}(t) \, dt + \vec{c} . $$
Recall from [Exercise 3.8.7](ref:3.8#matexp-expinvex) that ${(e^{tP})}^{-1} = e^{-tP}$. Therefore, we obtain
$$ \vec{x}(t) = e^{-tP} \int e^{tP}\vec{f}(t) \, dt + e^{-tP} \vec{c} . $$

Perhaps it is better understood as a definite integral. In this case it will be easy to also solve for the initial conditions. Consider the equation with initial conditions
$$ {\vec{x}}'(t) + P\vec{x}(t) = \vec{f}(t) , \qquad \vec{x}(0) = \vec{b} . $$
The solution can then be written as
$$ \boxed{~~ \vec{x}(t) = e^{-tP} \int_0^t e^{sP}\vec{f}(s) \, ds + e^{-tP} \vec{b} . ~~} $$ {eq:nhsys-intfacsoleq} number=3.6
Again, the integration means that each component of the vector $e^{sP}\vec{f}(s)$ is integrated separately. It is not hard to see that [(3.6)](ref:nhsys-intfacsoleq) really does satisfy the initial condition $\vec{x}(0) = \vec{b}$.
$$ \vec{x}(0) = e^{-0P} \int_0^0 e^{sP}\vec{f}(s) \, ds + e^{-0P} \vec{b} = I \vec{b} = \vec{b} . $$

:::example {ex:example-3-9-1} Example 3.9.1
Suppose that we have the system
$$ \begin{align*} x_1' + 5x_1 - 3x_2 &= e^t , \\ x_2' + 3x_1 - x_2 &= 0 , \end{align*} $$
with initial conditions $x_1(0) = 1, x_2(0) = 0$.

Let us write the system as
$$ {\vec{x}}' + \begin{bmatrix} 5 & -3 \\ 3 & -1 \end{bmatrix} \vec{x} = \begin{bmatrix} e^t \\ 0 \end{bmatrix} , \qquad \vec{x}(0) = \begin{bmatrix} 1 \\ 0 \end{bmatrix} . $$
The matrix $P = \left[ \begin{smallmatrix} 5 & -3 \\ 3 & -1 \end{smallmatrix} \right]$ has a doubled eigenvalue 2 with defect 1, and we leave it as an exercise to double-check we computed $e^{tP}$ correctly. Once we have $e^{tP}$, we find $e^{-tP}$, simply by negating $t$.
$$ e^{tP} = \begin{bmatrix} (1+3t)\,e^{2t} & -3te^{2t} \\ 3te^{2t} & (1-3t)\,e^{2t} \end{bmatrix} , \qquad e^{-tP} = \begin{bmatrix} (1-3t)\,e^{-2t} & 3te^{-2t} \\ -3te^{-2t} & (1+3t)\,e^{-2t} \end{bmatrix} . $$
Instead of computing the whole formula at once, let us do it in stages. First
$$ \begin{split} \int_0^t e^{sP}\vec{f}(s) \, ds & = \int_0^t \begin{bmatrix} (1+3s)\,e^{2s} & -3se^{2s} \\ 3se^{2s} & (1-3s)\,e^{2s} \end{bmatrix} \begin{bmatrix} e^{s} \\ 0 \end{bmatrix} \, ds \\ & = \int_0^t \begin{bmatrix} (1+3s)\,e^{3s} \\ 3se^{3s} \end{bmatrix} \, ds \\ &= \begin{bmatrix} \int_0^t (1+3s)\,e^{3s} \,ds \\ \int_0^t 3se^{3s} \,ds \end{bmatrix} \\ & = \begin{bmatrix} t e^{3t} \\ \frac{(3t-1) \,e^{3t} + 1}{3} \end{bmatrix} \qquad \qquad \text{(used integration by parts).} \end{split} $$
Then
$$ \begin{split} \vec{x}(t) & = e^{-tP} \int_0^t e^{sP}\vec{f}(s) \, ds + e^{-tP} \vec{b} \\ & = \begin{bmatrix} (1-3t)\,e^{-2t} & 3te^{-2t} \\ -3te^{-2t} & (1+3t)\,e^{-2t} \end{bmatrix} \begin{bmatrix} t e^{3t} \\ \frac{(3t-1) \,e^{3t} + 1}{3} \end{bmatrix} + \begin{bmatrix} (1-3t)\,e^{-2t} & 3te^{-2t} \\ -3te^{-2t} & (1+3t)\,e^{-2t} \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} \\ & = \begin{bmatrix} te^{-2t} \\ -\frac{e^t}{3}+\left( \frac{1}{3} + t \right) \, e^{-2t} \end{bmatrix} + \begin{bmatrix} (1-3t)\,e^{-2t} \\ -3te^{-2t} \end{bmatrix} \\ & = \begin{bmatrix} (1-2t)\,e^{-2t} \\ -\frac{e^t}{3}+\left( \frac{1}{3} -2 t \right) \, e^{-2t} \end{bmatrix} . \end{split} $$
Phew!

Let us check that this really works.
$$ x_1' + 5 x_1 - 3x_2 = (4te^{-2t} - 4 e^{-2t}) + 5 (1-2t)\,e^{-2t} +e^t-( 1 -6 t ) \, e^{-2t} = e^t . $$
Similarly (exercise) $x_2' + 3 x_1 - x_2 = 0$. The initial conditions are also satisfied (exercise).
:::

For systems, the integrating factor method only works if $P$ does not depend on $t$, that is, $P$ is constant. The problem is that in general
$$ \frac{d}{dt} \left[ e^{\int P(t)\,dt} \right] \neq P(t) \, e^{\int P(t)\,dt} , $$
because matrix multiplication is not commutative.

### Eigenvector decomposition
{index-entry:eigenvector decomposition}

For the next method, note that eigenvectors of a matrix give the directions in which the matrix acts like a scalar. If we solve the system along these directions, the computations are simpler as we treat the matrix as a scalar. We then put those solutions together to get the general solution for the system.

Take the equation
$$ {\vec{x}}' (t) = A \vec{x}(t) + \vec{f}(t) . $$ {eq:nhsys-ednhsys} number=3.7
Assume $A$ has $n$ linearly independent eigenvectors $\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n$. Write
$$ \vec{x}(t) = \vec{v}_1 \, \xi_1(t) + \vec{v}_2 \, \xi_2(t) + \cdots + \vec{v}_n \, \xi_n(t) . $$ {eq:nhsys-decompx} number=3.8
That is, we wish to write our solution as a linear combination of eigenvectors of $A$. If we solve for the scalar functions $\xi_1$ through $\xi_n$, we have our solution $\vec{x}$. Let us decompose $\vec{f}$ in terms of the eigenvectors as well. We wish to write
$$ \vec{f}(t) = \vec{v}_1 \, g_1(t) + \vec{v}_2 \, g_2(t) + \cdots + \vec{v}_n \, g_n(t) . $$ {eq:nhsys-decompf} number=3.9
That is, we wish to find $g_1$ through $g_n$ that satisfy [(3.9)](ref:nhsys-decompf). Since all the eigenvectors are independent, the matrix $E = [\, \vec{v}_1 \quad \vec{v}_2 \quad \cdots \quad \vec{v}_n \,]$ is invertible. Write the equation [(3.9)](ref:nhsys-decompf) as $\vec{f} = E \vec{g}$, where the components of $\vec{g}$ are the functions $g_1$ through $g_n$. Then $\vec{g} = E^{-1} \vec{f}$. Hence it is always possible to find $\vec{g}$ when there are $n$ linearly independent eigenvectors.

We plug [(3.8)](ref:nhsys-decompx) into [(3.7)](ref:nhsys-ednhsys), and note that $A \vec{v}_k = \lambda_k \vec{v}_k$:
$$ \begin{split} \overbrace{ \vec{v}_1 \xi_1' + \vec{v}_2 \xi_2' + \cdots + \vec{v}_n \xi_n' }^{{\vec{x}}'} & = \overbrace{ A \left( \vec{v}_1 \xi_1 + \vec{v}_2 \xi_2 + \cdots + \vec{v}_n \xi_n \right) }^{A\vec{x}} + \overbrace{ \vec{v}_1 g_1 + \vec{v}_2 g_2 + \cdots + \vec{v}_n g_n }^{\vec{f}} \\ & = A \vec{v}_1 \xi_1 + A \vec{v}_2 \xi_2 + \cdots + A \vec{v}_n \xi_n + \vec{v}_1 g_1 + \vec{v}_2 g_2 + \cdots + \vec{v}_n g_n \\ & = \vec{v}_1 \lambda_1 \xi_1 + \vec{v}_2 \lambda_2 \xi_2 + \cdots + \vec{v}_n \lambda_n \xi_n + \vec{v}_1 g_1 + \vec{v}_2 g_2 + \cdots + \vec{v}_n g_n \\ & = \vec{v}_1 ( \lambda_1 \xi_1 + g_1 ) + \vec{v}_2 ( \lambda_2 \xi_2 + g_2 ) + \cdots + \vec{v}_n ( \lambda_n \xi_n + g_n ) . \end{split} $$
If we identify the coefficients of the vectors $\vec{v}_1$ through $\vec{v}_n$, we get the equations
$$ \begin{align*} \xi_1' & = \lambda_1 \xi_1 + g_1 , \\ \xi_2' & = \lambda_2 \xi_2 + g_2 , \\ & ~~ \vdots \\ \xi_n' & = \lambda_n \xi_n + g_n . \end{align*} $$
Each one of these equations is independent of the others. They are all linear first-order equations and can easily be solved by the standard integrating factor method for single equations. That is, for the $k^{\text{th}}$ equation we write
$$ \xi_k'(t) - \lambda_k \xi_k(t) = g_k(t) . $$
We use the integrating factor $e^{-\lambda_k t}$ to find that
$$ \frac{d}{dt}\Bigl[ \xi_k(t) \, e^{-\lambda_k t} \Bigr] = e^{-\lambda_k t} g_k(t) . $$
We integrate and solve for $\xi_k$ to get
$$ \xi_k(t) = e^{\lambda_k t} \int e^{-\lambda_k t} g_k(t) \,dt + C_k e^{\lambda_k t} . $$
If we are looking for just any particular solution, we can set $C_k$ to be zero. If we leave these constants in, we get the general solution. Write $\vec{x}(t) = \vec{v}_1 \xi_1(t) + \vec{v}_2 \xi_2(t) + \cdots + \vec{v}_n \xi_n(t)$, and we are done.

As always, it is perhaps better to write these integrals as definite integrals. Suppose that we have an initial condition $\vec{x}(0) = \vec{b}$. Take $\vec{a} = E^{-1} \vec{b}$ to find $\vec{b} = \vec{v}_1 a_1 + \vec{v}_2 a_2 + \cdots + \vec{v}_n a_n$, just like before. Then if we write
$$ \boxed{~~ \xi_k(t) = e^{\lambda_k t} \int_0^t e^{-\lambda_k s} g_k(s) \,ds + a_k e^{\lambda_k t} , ~~} $$
we get the particular solution $\vec{x}(t) = \vec{v}_1 \xi_1(t) + \vec{v}_2 \xi_2(t) + \cdots + \vec{v}_n \xi_n(t)$ satisfying $\vec{x}(0) = \vec{b}$, because $\xi_k(0) = a_k$.

We remark that the technique we just outlined is the eigenvalue method applied to nonhomogeneous systems. If a system is homogeneous, that is, if $\vec{f}=\vec{0}$, then the equations we get are $\xi_k' = \lambda_k \xi_k$, and so $\xi_k = C_k e^{\lambda_k t}$ are the solutions and that is precisely what we got in [§3.4](ref:3.4#eigenmethod-section).

:::example {ex:example-3-9-2} Example 3.9.2
Let $A = \left[ \begin{smallmatrix} 1 & 3 \\ 3 & 1 \end{smallmatrix} \right]$. Solve ${\vec{x}}' = A \vec{x} + \vec{f}$ where $\vec{f}(t) = \left[ \begin{smallmatrix} 2e^t \\ 2t \end{smallmatrix} \right]$ for $\vec{x}(0) = \left[ \begin{smallmatrix} 3/16 \\ -5/16 \end{smallmatrix} \right]$.

The eigenvalues of $A$ are $-2$ and 4 and corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$ respectively. This calculation is left as an exercise. We write down the matrix $E$ of the eigenvectors and compute its inverse (using the inverse formula for $2 \times 2$ matrices)
$$ E = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} , \qquad E^{-1} = \frac{1}{2} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix} . $$

We are looking for a solution of the form $\vec{x} = \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right] \xi_1 + \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right] \xi_2$. We first need to write $\vec{f}$ in terms of the eigenvectors. That is we wish to write $\vec{f} = \left[ \begin{smallmatrix} 2e^t \\ 2t \end{smallmatrix} \right] = \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right] g_1 + \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right] g_2$. Thus
$$ \begin{bmatrix} g_1 \\ g_2 \end{bmatrix} = E^{-1} \begin{bmatrix} 2e^t \\ 2t \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 2e^t \\ 2t \end{bmatrix} = \begin{bmatrix} e^t-t \\ e^t+t \end{bmatrix} . $$
So $g_1 = e^t-t$ and $g_2 = e^t+t$.

We further need to write $\vec{x}(0)$ in terms of the eigenvectors. That is, we wish to write $\vec{x}(0) = \left[ \begin{smallmatrix} 3/16 \\ -5/16 \end{smallmatrix} \right] = \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right] a_1 + \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right] a_2$. Hence
$$ \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} = E^{-1} \begin{bmatrix} {3}/{16} \\ {-5}/{16} \end{bmatrix} = \begin{bmatrix} {1}/{4} \\ {-1}/{16} \end{bmatrix} . $$
So $a_1 = {1}/{4}$ and $a_2 = {-1}/{16}$. We plug our $\vec{x}$ into the equation and get
$$ \begin{split} \overbrace{ \begin{bmatrix} 1 \\ -1 \end{bmatrix} \xi_1' + \begin{bmatrix} 1 \\ 1 \end{bmatrix} \xi_2' }^{\vec{x}'} & = \overbrace{ A \begin{bmatrix} 1 \\ -1 \end{bmatrix} \xi_1 + A \begin{bmatrix} 1 \\ 1 \end{bmatrix} \xi_2 }^{A\vec{x}} + \overbrace{ \begin{bmatrix} 1 \\ -1 \end{bmatrix} g_1 + \begin{bmatrix} 1 \\ 1 \end{bmatrix} g_2 }^{\vec{f}} \\ & = \begin{bmatrix} 1 \\ -1 \end{bmatrix} (-2\xi_1) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} 4\xi_2 + \begin{bmatrix} 1 \\ -1 \end{bmatrix} (e^t - t) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} (e^t + t) . \end{split} $$
We get the two equations
$$ \begin{align*} & \xi_1' = -2\xi_1 + e^t -t, & & \text{where } \xi_1(0) = a_1 = \frac{1}{4} , \\ & \xi_2' = 4\xi_2 + e^t + t, & & \text{where } \xi_2(0) = a_2 = \frac{-1}{16} . \end{align*} $$
We solve with the integrating factor method. Computation of the integral is left as an exercise to the student. You will need integration by parts.
$$ \xi_1 = e^{-2t}\int e^{2t} \, (e^t-t) \, dt + C_1 e^{-2t} = \frac{e^t}{3}-\frac{t}{2}+\frac{1}{4}+C_1 e^{-2t} , $$
where $C_1$ is the constant of integration. As $\xi_1(0) = {1}/{4}$, then ${1}/{4}= {1}/{3} + {1}/{4} + C_1$ and $C_1 = {-1}/{3}$. Similarly,
$$ \xi_2 = e^{4t}\int e^{-4t} \, (e^t+ t) \, dt + C_2 e^{4t} = -\frac{e^t}{3}-\frac{t}{4}-\frac{1}{16} + C_2 e^{4t} . $$
As $\xi_2(0) = {-1}/{16}$, we have ${-1}/{16}= {-1}/{3} -{1}/{16} + C_2$ and hence $C_2 = {1}/{3}$. The solution is
$$ \vec{x}(t)= \begin{bmatrix} 1 \\ -1 \end{bmatrix} \underbrace{\left( \frac{e^t-e^{-2t}}{3}+\frac{1-2t}{4} \right)} _{\xi_1} + \begin{bmatrix} 1 \\ 1 \end{bmatrix} \underbrace{\left( \frac{e^{4t}-e^t}{3}-\frac{4t+1}{16} \right)} _{\xi_2} = \begin{bmatrix} \frac{e^{4t}-e^{-2t}}{3}+\frac{3-12t}{16} \\ \frac{e^{-2t}+e^{4t}-2e^t}{3}+\frac{4t-5}{16} \end{bmatrix} . $$
That is, $x_1 = \frac{e^{4t}-e^{-2t}}{3}+\frac{3-12t}{16}$ and $x_2 = \frac{e^{-2t}+e^{4t}-2e^t}{3}+\frac{4t-5}{16}$.
:::

:::exercise {exercise-3-9-001} number=3.9.1 answered=no src=ch-systems.tex:6570
PROBLEM:
Check that $x_1$ and $x_2$ solve the problem. Check both that they satisfy the differential equation and that they satisfy the initial conditions.
:::

### Undetermined coefficients

The method of undetermined coefficients{index-entry:undetermined coefficients!for systems} also works for systems. The only difference is that we use unknown vectors rather than just numbers. Same caveats apply to undetermined coefficients for systems as for single equations. This method does not always work. Furthermore, if the right-hand side is complicated, we have to solve for lots of variables. Each element of an unknown vector is an unknown number. In a system of 3 equations with say 4 unknown vectors (this would not be uncommon), we already have 12 unknown numbers to solve for. The method can turn into a lot of {index:tedious} work if done by hand. As the method is essentially the same as for single equations, let us just do an example.

:::example {ex:example-3-9-3} Example 3.9.3
Let $A = \left[ \begin{smallmatrix} -1 & 0 \\ -2 & 1 \end{smallmatrix} \right]$. Find a particular solution of ${\vec{x}}' = A \vec{x} + \vec{f}$ where $\vec{f}(t) = \left[ \begin{smallmatrix} e^t \\ t \end{smallmatrix} \right]$.

One can solve this system in an easier way (can you see how?), but for the purposes of the example, we use the eigenvalue method and undetermined coefficients. The eigenvalues of $A$ are $-1$ and $1$. Corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$ respectively. Hence, our complementary solution is
$$ \vec{x}_c = \alpha_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} e^{-t} + \alpha_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix} e^{t} , $$
for some arbitrary constants $\alpha_1$ and $\alpha_2$.

We would next want to guess a particular solution of the form
$$ \vec{x} = \vec{a} e^{t} + \vec{b} t + \vec{c} . $$
However, something of the form $\vec{a} e^t$ appears in the complementary solution. Because we do not yet know if the vector $\vec{a}$ is a multiple of $\left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$, we do not know if a conflict arises. It is possible that there is no conflict, but to be safe we also try $\vec{b} t e^t$. Here we find the crux of the difference between a single equation and systems. We try *both* terms $\vec{a} e^t$ and $\vec{b} t e^t$ in the solution, not just the term $\vec{b} t e^t$. Therefore, we try
$$ \vec{x} = \vec{a} e^{t} + \vec{b} t e^{t} + \vec{c} t + \vec{d}. $$
We have 8 unknowns as $\vec{a} = \Bigl[ \begin{smallmatrix} a_1 \\ a_2 \end{smallmatrix} \Bigr]$, $\vec{b} = \Bigl[ \begin{smallmatrix} b_1 \\ b_2 \end{smallmatrix} \Bigr]$, $\vec{c} = \Bigl[ \begin{smallmatrix} c_1 \\ c_2 \end{smallmatrix} \Bigr]$, and $\vec{d} = \Bigl[ \begin{smallmatrix} d_1 \\ d_2 \end{smallmatrix} \Bigr]$. We plug $\vec{x}$ into the equation. First let us compute ${\vec{x}}'$.
$$ {\vec{x}}' = \left( \vec{a} + \vec{b} \right) e^{t} + \vec{b} t e^{t} + \vec{c} = \begin{bmatrix} a_1 + b_1 \\ a_2+b_2 \end{bmatrix} e^{t} + \begin{bmatrix} b_1 \\ b_2 \end{bmatrix} t e^{t} + \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} . $$
Now ${\vec{x}}'$ must equal $A\vec{x} + \vec{f}$, which is
$$ \begin{split} A \vec{x} + \vec{f} &= A \vec{a} e^{t} + A \vec{b} t e^{t} + A \vec{c} t + A \vec{d} + \vec{f} \\ & = \begin{bmatrix} -a_1 \\ -2a_1+a_2 \end{bmatrix} e^{t} + \begin{bmatrix} -b_1 \\ -2b_1+b_2 \end{bmatrix} t e^{t} + \begin{bmatrix} -c_1 \\ -2c_1+c_2 \end{bmatrix} t + \begin{bmatrix} -d_1 \\ -2d_1+d_2 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \end{bmatrix} e^t + \begin{bmatrix} 0 \\ 1 \end{bmatrix} t \\ &= \begin{bmatrix} -a_1+1 \\ -2a_1+a_2 \end{bmatrix} e^{t} + \begin{bmatrix} -b_1 \\ -2b_1+b_2 \end{bmatrix} t e^{t} + \begin{bmatrix} -c_1 \\ -2c_1+c_2+1 \end{bmatrix} t + \begin{bmatrix} -d_1 \\ -2d_1+d_2 \end{bmatrix} . \end{split} $$
We identify the coefficients of $e^t$, $te^t$, $t$ and any constant vectors in $\vec{x}'$ and in $A\vec{x}+\vec{f}$ to find the equations:
$$ \begin{align*} a_1+b_1 & = -a_1+1 , & 0 & = -c_1 , \\ a_2+b_2 & = -2a_1+a_2 , & 0 & = -2c_1+c_2 + 1 , \\ b_1 & = -b_1 , & c_1 & = -d_1 , \\ b_2 & = -2b_1+b_2 , & c_2 & = -2d_1+d_2 . \end{align*} $$
We could write the $8 \times 9$ augmented matrix and do row reduction, but it is easier to solve these in an ad hoc manner. Immediately, we see $b_1 = 0$, $c_1 = 0$, $d_1 = 0$. Plugging these back in, we get $c_2 = -1$ and $d_2 = -1$. The remaining equations that tell us something are
$$ \begin{align*} a_1 & = -a_1+1 , \\ a_2+b_2 & = -2a_1+a_2 . \end{align*} $$
So $a_1 = {1}/{2}$ and $b_2 = -1$. Finally, $a_2$ can be arbitrary and still satisfy the equations. We are looking for just a single solution, so presumably the simplest one is when $a_2 = 0$. Therefore,
$$ \vec{x} = \vec{a} e^{t} + \vec{b} t e^{t} + \vec{c} t + \vec{d} = \begin{bmatrix} {1}/{2} \\ 0 \end{bmatrix} e^t + \begin{bmatrix} 0 \\ -1 \end{bmatrix} te^t + \begin{bmatrix} 0 \\ -1 \end{bmatrix} t + \begin{bmatrix} 0 \\ -1 \end{bmatrix} = \begin{bmatrix} \frac{1}{2}\,e^t \\ -te^t - t - 1 \end{bmatrix} . $$
That is, $x_1 = \frac{1}{2}\,e^t$, $x_2 = -te^t - t - 1$. We add this particular solution to the complementary solution to get the general solution of the problem:
$$ x_1 = \frac{1}{2}\,e^t + \alpha_1 e^{-t} \quad \text{and} \quad x_2 = -te^t - t - 1 + \alpha_1 e^{-t} + \alpha_2 e^{t}. $$
Notice that both $\vec{a} e^t$ and $\vec{b} te^t$ really were needed.
:::

:::exercise {exercise-3-9-002} number=3.9.2 answered=no src=ch-systems.tex:6858
PROBLEM:
Check that $x_1$ and $x_2$ solve the problem. Then set $a_2 = 1$ and check this solution as well. What is the difference between the two solutions (one with $a_2=0$ and one with $a_2=1$)?
:::

As you can see, other than the handling of conflicts, undetermined coefficients works exactly the same as it did for single equations. However, the computations can get out of hand pretty quickly for systems. The equation we considered was pretty simple.

## First-order variable-coefficient

### Variation of parameters

Just as for a single equation, there is the method of variation of parameters{index-entry:variation of parameters!for systems}. For constant-coefficient systems, it is essentially the same thing as the integrating factor method we discussed earlier. However, this method works for any linear system, even if it is not constant-coefficient, provided we somehow solve the associated homogeneous problem.

Consider the equation
$$ {\vec{x}}' = A(t) \, \vec{x} + \vec{f}(t) . $$ {eq:nhsys-nhvceq} number=3.10
Suppose we somehow solved the associated homogeneous equation ${\vec{x}}' = A(t) \, \vec{x}$ and found a fundamental matrix solution $X(t)$. The general solution to the associated homogeneous equation is $X(t) \vec{c}$ for a constant vector $\vec{c}$. As in variation of parameters for a single equation, we try the solution to the nonhomogeneous equation of the form
$$ \vec{x}_p = X(t)\, \vec{u}(t) , $$
where $\vec{u}(t)$ is a vector-valued function instead of a constant. We substitute $\vec{x}_p$ into [(3.10)](ref:nhsys-nhvceq):
$$ \underbrace{X'(t)\, \vec{u}(t) + X(t)\, {\vec{u}}'(t)} _{{\vec{x}_p}'(t)} = \underbrace{A(t)\, X(t)\, \vec{u}(t)} _{A(t) \vec{x}_p (t)} + \vec{f}(t) . $$
As $X(t)$ is a fundamental matrix solution to the homogeneous problem, that is, $X'(t) = A(t)X(t)$, we find
$$ \cancel{X'(t)\, \vec{u}(t)} + X(t)\, {\vec{u}}'(t) = \cancel{X'(t)\, \vec{u}(t)} + \vec{f}(t) . $$
Hence, $X(t)\, {\vec{u}}'(t) = \vec{f}(t)$. We compute $\left[X(t)\right]^{-1}$, and then ${\vec{u}}'(t) = \left[X(t)\right]^{-1}\vec{f}(t)$. We integrate to obtain $\vec{u}$, and we have the particular solution $\vec{x}_p = X(t)\, \vec{u}(t)$. Hence, we have the formula
$$ \boxed{~~ \vec{x}_p = X(t) \int \left[X(t)\right]^{-1}\vec{f}(t) \, dt . ~~} $$

If $A$ is a constant matrix and $X(t) = e^{tA}$, then $\left[X(t)\right]^{-1} = e^{-tA}$. We obtain a solution $\vec{x}_p = e^{tA} \int e^{-tA}\,\vec{f}(t) \, dt$, which is precisely what we got using the integrating factor method.

:::example {ex:example-3-9-4} Example 3.9.4
Find a particular solution to
$$ {\vec{x}}' = \frac{1}{t^2+1} \begin{bmatrix} t & -1 \\ 1 & t \end{bmatrix} \vec{x} + \begin{bmatrix} t \\ 1 \end{bmatrix} \,(t^2+1) . $$ {eq:nhsys-vcexeq} number=3.11

Here, $A = \frac{1}{t^2+1} \left[ \begin{smallmatrix} t & -1 \\ 1 & t \end{smallmatrix} \right]$ is most definitely not constant. Perhaps by a lucky guess, we find that $X = \left[ \begin{smallmatrix} 1 & -t \\ t & 1 \end{smallmatrix} \right]$ solves $X'(t) = A(t) X(t)$. Once we know the complementary solution, we can find a solution to [(3.11)](ref:nhsys-vcexeq). First, we compute
$$ \left[ X(t) \right]^{-1} = \frac{1}{t^2+1} \begin{bmatrix} 1 & t \\ -t & 1 \end{bmatrix} . $$
Next, we know a particular solution to [(3.11)](ref:nhsys-vcexeq) is
$$ \begin{split} \vec{x}_p & = X(t) \int \left[X(t)\right]^{-1}\vec{f}(t) \, dt \\ & = \begin{bmatrix} 1 & -t \\ t & 1 \end{bmatrix} \int \frac{1}{t^2+1} \begin{bmatrix} 1 & t \\ -t & 1 \end{bmatrix} \begin{bmatrix} t \\ 1 \end{bmatrix} \,(t^2+1) \,dt \\ & = \begin{bmatrix} 1 & -t \\ t & 1 \end{bmatrix} \int \begin{bmatrix} 2t \\ -t^2 + 1 \end{bmatrix} \,dt \\ & = \begin{bmatrix} 1 & -t \\ t & 1 \end{bmatrix} \begin{bmatrix} t^2 \\ -\frac{1}{3}\,t^3 + t \end{bmatrix} \\ & = \begin{bmatrix} \frac{1}{3}\,t^4 \\ \frac{2}{3}\,t^3 + t \end{bmatrix} . \end{split} $$
Adding the complementary solution, we find the general solution to [(3.11)](ref:nhsys-vcexeq):
$$ \vec{x} = \begin{bmatrix} 1 & -t \\ t & 1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} + \begin{bmatrix} \frac{1}{3}\,t^4 \\ \frac{2}{3}\,t^3 + t \end{bmatrix} = \begin{bmatrix} c_1 - c_2 t + \frac{1}{3}\,t^4 \\ c_2 + (c_1 + 1)\, t + \frac{2}{3}\,t^3 \end{bmatrix} . $$

:::

:::exercise {exercise-3-9-003} number=3.9.3 answered=no src=ch-systems.tex:7056
PROBLEM:
Check that $x_1 = \frac{1}{3}\,t^4$ and $x_2 = \frac{2}{3}\,t^3 + t$ really solve [(3.11)](ref:nhsys-vcexeq).
:::

In the variation of parameters, as in the integrating factor method, we can obtain the general solution by adding in constants of integration. Doing so would add $X(t) \vec{c}$ for a vector $\vec{c}$ of arbitrary constants. But that is precisely the complementary solution.

## Second-order constant-coefficients

### Undetermined coefficients

We have already seen a simple example of the method of undetermined coefficients{index-entry:undetermined coefficients!for second-order systems} for second-order systems in [§3.6](ref:3.6#sol-section). This method is essentially the same as undetermined coefficients for first-order systems. There are some simplifications that we can make, as we did in [§3.6](ref:3.6#sol-section). Consider the equation
$$ {\vec{x}}'' = A \vec{x} + \vec{F}(t) , $$
where $A$ is a constant matrix. If $\vec{F}(t)$ is of the form $\vec{F}_0 \cos (\omega t)$, then as two derivatives of cosine is again cosine, we do not need to introduce sines, and we try a solution of the form
$$ \vec{x}_p = \vec{c} \cos (\omega t) . $$

If $\vec{F}$ is a sum of cosines, recall the superposition principle. If $\vec{F}(t) = \vec{F}_0 \cos (\omega_0 t) + \vec{F}_1 \cos (\omega_1 t)$, then we would try $\vec{a} \cos (\omega_0 t)$ for the problem ${\vec{x}}'' = A \vec{x} + \vec{F}_0 \cos (\omega_0 t)$, and we would try $\vec{b} \cos (\omega_1 t)$ for the problem ${\vec{x}}'' = A \vec{x} + \vec{F}_1 \cos (\omega_1 t)$. Then we sum the solutions.

If there is duplication with the complementary solution, or the equation is of the form ${\vec{x}}'' = A{\vec{x}}'+ B \vec{x} + \vec{F}(t)$, then we need to do the same thing as we do for first-order systems.

You can never go wrong by putting in more terms than needed into your guess. Those extra coefficients will turn out to be zero. But it is useful to save some time and effort.

### Eigenvector decomposition

If we have the system
$$ {\vec{x}}'' = A \vec{x} + \vec{f}(t) , $$
we can do *{index:eigenvector decomposition}*, just like for first-order systems.

Let $\lambda_1, \lambda_2, \ldots, \lambda_n$ be the eigenvalues and $\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n$ be eigenvectors. Again form the matrix $E = [\, \vec{v}_1 \quad \vec{v}_2 \quad \cdots \quad \vec{v}_n \,]$. Write
$$ \vec{x}(t) = \vec{v}_1 \, \xi_1(t) + \vec{v}_2 \, \xi_2(t) + \cdots + \vec{v}_n \, \xi_n(t) . $$
Decompose $\vec{f}$ in terms of the eigenvectors
$$ \vec{f}(t) = \vec{v}_1 \, g_1(t) + \vec{v}_2 \, g_2(t) + \cdots + \vec{v}_n \, g_n(t) , $$
where, again, $\vec{g} = E^{-1} \vec{f}$.

We plug in and as before we obtain
$$ \begin{split} \overbrace{ \vec{v}_1 \xi_1'' + \vec{v}_2 \xi_2'' + \cdots + \vec{v}_n \xi_n'' }^{{\vec{x}}''} & = \overbrace{ A \left( \vec{v}_1 \xi_1 + \vec{v}_2 \xi_2 + \cdots + \vec{v}_n \xi_n \right) }^{A\vec{x}} + \overbrace{ \vec{v}_1 g_1 + \vec{v}_2 g_2 + \cdots + \vec{v}_n g_n }^{\vec{f}} \\ & = A \vec{v}_1 \xi_1 + A \vec{v}_2 \xi_2 + \cdots + A \vec{v}_n \xi_n + \vec{v}_1 g_1 + \vec{v}_2 g_2 + \cdots + \vec{v}_n g_n \\ & = \vec{v}_1 \lambda_1 \xi_1 + \vec{v}_2 \lambda_2 \xi_2 + \cdots + \vec{v}_n \lambda_n \xi_n + \vec{v}_1 \, g_1 + \vec{v}_2 \, g_2 + \cdots + \vec{v}_n \, g_n \\ & = \vec{v}_1 ( \lambda_1 \xi_1 + g_1 ) + \vec{v}_2 ( \lambda_2 \xi_2 + g_2 ) + \cdots + \vec{v}_n ( \lambda_n \xi_n + g_n ) . \end{split} $$
We identify the coefficients of the eigenvectors to get the equations
$$ \begin{align*} \xi_1'' & = \lambda_1 \xi_1 + g_1 , \\ \xi_2'' & = \lambda_2 \xi_2 + g_2 , \\ & ~~ \vdots \\ \xi_n'' & = \lambda_n \xi_n + g_n . \end{align*} $$
Each one of these equations is independent of the others. We solve each equation using the methods of [chapter 2](ref:2#ho-chapter). We write $\vec{x}(t) = \vec{v}_1 \xi_1(t) + \vec{v}_2 \xi_2(t) + \cdots + \vec{v}_n \xi_n(t)$ to find a particular solution. If we find the general solutions for $\xi_1$ through $\xi_n$, then $\vec{x}(t) = \vec{v}_1 \xi_1(t) + \vec{v}_2 \, \xi_2(t) + \cdots + \vec{v}_n \xi_n(t)$ is the general solution as well.

:::example {ex:example-3-9-5} Example 3.9.5
Let us do the example from [§3.6](ref:3.6#sol-section) using this method. The equation is
$$ {\vec{x}}'' = \begin{bmatrix} -3 & 1 \\ 2 & -2 \end{bmatrix} \vec{x} + \begin{bmatrix} 0 \\ 2 \end{bmatrix} \cos (3 t) . $$
The eigenvalues are $-1$ and $-4$, with eigenvectors $\left[ \begin{smallmatrix} 1 \\ 2 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$. Therefore $E = \left[ \begin{smallmatrix} 1 & 1 \\ 2 & -1 \end{smallmatrix} \right]$ and $E^{-1} = \frac{1}{3} \left[ \begin{smallmatrix} 1 & 1 \\ 2 & -1 \end{smallmatrix} \right]$. Therefore,
$$ \begin{bmatrix} g_1 \\ g_2 \end{bmatrix} = E^{-1} \vec{f}(t) = \frac{1}{3} \begin{bmatrix} 1 & 1 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} 0 \\ 2\cos (3t) \end{bmatrix} = \begin{bmatrix} \frac{2}{3}\cos (3t) \\ \frac{-2}{3}\cos (3t) \end{bmatrix} . $$
So after the whole song and dance of plugging in, the equations we get are
$$ \xi_1'' = - \xi_1 + \frac{2}{3} \cos (3t) , \qquad \xi_2'' = -4 \, \xi_2 - \frac{2}{3} \cos (3t) . $$
For each equation we use the method of undetermined coefficients. We try $C_1 \cos (3t)$ for the first equation and $C_2 \cos (3t)$ for the second equation. We plug in to get
$$ \begin{align*} - 9 C_1 \cos (3t) & = - C_1 \cos (3t) + \frac{2}{3} \cos (3t) , \\ - 9 C_2 \cos (3t) & = - 4 C_2 \cos (3t) - \frac{2}{3} \cos (3t) . \end{align*} $$
We solve each of these equations separately. We get $- 9 C_1 = - C_1 + {2}/{3}$ and $- 9 C_2 = - 4C_2 - {2}/{3}$. And hence $C_1 = {-1}/{12}$ and $C_2 = {2}/{15}$. So our particular solution is
$$ \vec{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \, \left( \frac{-1}{12} \, \cos (3t) \right) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \, \left( \frac{2}{15} \, \cos (3t) \right) = \begin{bmatrix} {1}/{20} \\ {-3}/{10} \end{bmatrix} \, \cos (3t) . $$
This solution matches what we got previously in [§3.6](ref:3.6#sol-section).
:::

## Exercises

:::exercise {exercise-3-9-004} number=3.9.4 answered=no src=ch-systems.tex:7294
PROBLEM:
Find a particular solution to $x' = x+ 2y +2t$, $y' = 3x + 2y -4$

a) using integrating factor method,
b) using eigenvector decomposition,
c) using undetermined coefficients.

:::

:::exercise {exercise-3-9-005} number=3.9.5 answered=no src=ch-systems.tex:7305
PROBLEM:
Find the general solution to $x' = 4x+ y -1$, $y' = x + 4y -e^t$

a) using integrating factor method,
b) using eigenvector decomposition,
c) using undetermined coefficients.

:::

:::exercise {exercise-3-9-006} number=3.9.6 answered=no src=ch-systems.tex:7316
PROBLEM:
Find the general solution to $x_1'' = -6x_1+ 3x_2 + \cos (t)$, $x_2'' = 2x_1 -7x_2 + 3\cos (t)$

a) using eigenvector decomposition,
b) using undetermined coefficients.

:::

:::exercise {exercise-3-9-007} number=3.9.7 answered=no src=ch-systems.tex:7326
PROBLEM:
Find the general solution to $x_1'' = -6x_1+ 3x_2 + \cos (2t)$, $x_2'' = 2x_1 -7x_2 + 3\cos (2t)$

a) using eigenvector decomposition,
b) using undetermined coefficients.

:::

:::exercise {exercise-3-9-008} number=3.9.8 answered=no src=ch-systems.tex:7336
PROBLEM:
Take the equation $\displaystyle {\vec{x}}' = \begin{bmatrix} \frac{1}{t} & -1 \\ 1 & \frac{1}{t} \end{bmatrix} \vec{x} + \begin{bmatrix} t^2 \\ -t \end{bmatrix} .$

a) Check that $\displaystyle \vec{x}_c = c_1 \begin{bmatrix} t\, \sin t \\ - t \, \cos t \end{bmatrix} + c_2 \begin{bmatrix} t\, \cos t \\ t \, \sin t \end{bmatrix}$ is the complementary solution.
b) Use variation of parameters to find a particular solution.

:::

:::exercise {exercise-3-9-101} number=3.9.101 answered=yes src=ch-systems.tex:7374
PROBLEM:
Find a particular solution to $x' = 5x + 4y + t$, $y' = x + 8y - t$

a) using integrating factor method,
b) using eigenvector decomposition,
c) using undetermined coefficients.

SOLUTION:
The general solution is (particular solutions should agree with one of these):
$x(t) = C_1 e^{9 t}+4 C_2 e^{4t}-{t}/{3}-{5}/{54}$, $y(t) = C_1 e^{9 t}-C_2 e^{4t}+{t}/{6}+{7}/{216}$
:::

:::exercise {exercise-3-9-102} number=3.9.102 answered=yes src=ch-systems.tex:7390
PROBLEM:
Find a particular solution to $x' = y + e^t$, $y' = x +e^t$

a) using integrating factor method,
b) using eigenvector decomposition,
c) using undetermined coefficients.

SOLUTION:
The general solution is (particular solutions should agree with one of these):
$x(t) = C_1 e^t + C_2 e^{-t}+te^t$, $y(t) = C_1 e^t - C_2 e^{-t}+te^t$
:::

:::exercise {exercise-3-9-103} number=3.9.103 answered=yes src=ch-systems.tex:7406
PROBLEM:
Solve $x_1' = x_2 + t$, $x_2' = x_1 +t$ with initial conditions $x_1(0) = 1$, $x_2(0) = 2$ using eigenvector decomposition.
SOLUTION:
$\vec{x} = \left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix}\right] \left(\frac{5}{2} e^t-t-1\right) + \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix}\right] \frac{-1}{2} e^{-t}$
:::

:::exercise {exercise-3-9-104} number=3.9.104 answered=yes src=ch-systems.tex:7425
PROBLEM:
Solve $x_1'' = -3x_1 + x_2 + t$, $x_2'' = 9x_1 + 5x_2 +\cos(t)$ with initial conditions $x_1(0) = 0$, $x_2(0) = 0$, $x_1'(0) = 0$, $x_2'(0) = 0$ using eigenvector decomposition.
SOLUTION:
$\vec{x} = \left[ \begin{smallmatrix} 1 \\ 9 \end{smallmatrix}\right] \left(\left(\frac{1}{140} + \frac{1}{120\sqrt{6}}\right) e^{\sqrt{6} t} + \left(\frac{1}{140} - \frac{1}{120\sqrt{6}}\right) e^{-\sqrt{6} t} -\frac{t}{60}-\frac{\cos(t)}{70} \right)$
$+ \left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix}\right] \left(\frac{-9}{80} \sin(2 t)+ \frac{1}{30} \cos(2 t)+\frac{9 t}{40}-\frac{\cos(t)}{30}\right)$
:::

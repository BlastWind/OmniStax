# 3.2 Matrices and linear systems {sec:sec-matrix}

:::note [section-notes]
*Note: 1.5 lectures, first part of §5.1 in [EP](cite:EP), §7.2 and §7.3 in [BD](cite:BD), see also [appendix A](ref:A#linalg-appendix)*
:::

## Matrices and vectors

Before we start talking about linear systems of ODEs, we need to talk about matrices, so let us review these briefly. A *{index:matrix}* is an $m \times n$ array of numbers ($m$ rows and $n$ columns). For example, we denote a $3 \times 5$ matrix as follows
$$ A = \begin{bmatrix} a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\ a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\ a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \end{bmatrix} . $$
The numbers $a_{ij}$ are called *elements*{index-entry:element of a matrix} or *entries*{index-entry:entry of a matrix}. We say a matrix is *square*{index-entry:square matrix} if it has $m=n$, that is, it has the same number of rows and columns.

In the setting of matrices, by a *{index:vector}*, we usually mean a *{index:column vector}*, that is, an $m \times 1$ matrix. If we mean a *{index:row vector}*, we will explicitly say so (a row vector is a $1 \times n$ matrix). We usually denote matrices by upper case letters and vectors by lower case letters with an arrow such as $\vec{x}$ or $\vec{b}$. We write $\vec{0}$ for a vector of all zeros.

We define some operations on matrices. We want $1 \times 1$ matrices to really act like numbers, so our operations have to be compatible with this viewpoint. First, we can multiply{index-entry:scalar multiplication} a matrix by a *{index:scalar}* (a number). We simply multiply each entry in the matrix by the scalar. For example,
$$ 2 \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} = \begin{bmatrix} 2 & 4 & 6 \\ 8 & 10 & 12 \end{bmatrix} . $$
Matrix addition{index-entry:addition of matrices} is also simple. We add matrices element by element. For example,
$$ \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} + \begin{bmatrix} 1 & 1 & -1 \\ 0 & 2 & 4 \end{bmatrix} = \begin{bmatrix} 2 & 3 & 2 \\ 4 & 7 & 10 \end{bmatrix} . $$
If the sizes do not match, then addition is not defined. If we denote by 0 the matrix with all zero entries, by $c$, $d$ scalars, and by $A$, $B$, $C$ matrices, we have the following familiar rules:
$$ \begin{align*} A + 0 & = A = 0 + A , \\ A + B & = B + A , \\ (A + B) + C & = A + (B + C) , \\ c(A+B) & = cA+cB, \\ (c+d)A & = cA + dA. \end{align*} $$

Another useful operation for matrices is the so-called *{index:transpose}*. This operation just swaps rows and columns of a matrix. The transpose of $A$ is denoted by $A^T$. Example:
$$ \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix} $$

## Matrix multiplication

Matrix multiplication is a bit more complicated. First we define the so-called *{index:dot product}* (or *{index:inner product}*) of two vectors. Usually this will be a row vector multiplied with a column vector of the same size. For the dot product, we multiply each pair of entries from the first and the second vector, and we sum these products. The result is a single number. For example,
$$ \begin{bmatrix} a_1 & a_2 & a_3 \end{bmatrix} \cdot \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix} = a_1 b_1 + a_2 b_2 + a_3 b_3 . $$
Similarly for larger (or smaller) vectors.

Armed with the dot product, we define the *{index:product of matrices}*. We denote by $\operatorname{row}_i(A)$ the $i^{\text{th}}$ row of $A$ and by $\operatorname{column}_j(A)$ the $j^{\text{th}}$ column of $A$. For an $m \times n$ matrix $A$ and an $n \times p$ matrix $B$, we can define the product $AB$. We let $AB$ be an $m \times p$ matrix whose $ij^{\text{th}}$ entry is the dot product
$$ \operatorname{row}_i(A) \cdot \operatorname{column}_j(B) . $$
Do note how the sizes match up: $m \times n$ multiplied by $n \times p$ is $m \times p$. Example:
$$ \begin{gather*} \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \begin{bmatrix} 1 & 0 & -1 \\ 1 & 1 & 1 \\ 1 & 0 & 0 \end{bmatrix} = \\ = \begin{bmatrix} 1\cdot 1 + 2\cdot 1 + 3 \cdot 1 & ~~ 1\cdot 0 + 2\cdot 1 + 3 \cdot 0 & ~~ 1\cdot (-1) + 2\cdot 1 + 3 \cdot 0 \\ 4\cdot 1 + 5\cdot 1 + 6 \cdot 1 & ~~ 4\cdot 0 + 5\cdot 1 + 6 \cdot 0 & ~~ 4\cdot (-1) + 5\cdot 1 + 6 \cdot 0 \end{bmatrix} = \begin{bmatrix} 6 & 2 & 1 \\ 15 & 5 & 1 \end{bmatrix} \end{gather*} $$

For multiplication, we want an analogue of a 1. This analogue is the so-called *{index:identity matrix}*. The identity matrix is a square matrix with 1s on the diagonal and zeros everywhere else. It is usually denoted by $I$. For each size, we have a different identity matrix. So sometimes we may denote the size as a subscript. For example, $I_3$ would be the $3 \times 3$ identity matrix
$$ I = I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} . $$

[2] We have the following rules for matrix multiplication. Suppose that $A$, $B$, $C$ are matrices of the correct sizes so that the following make sense. Let $\alpha$ denote a scalar (number). Then,
$$ \begin{align*} A(BC) & = (AB)C, \\ A(B+C) & = AB + AC, \\ (B+C)A & = BA + CA, \\ \alpha(AB) & = (\alpha A)B = A(\alpha B), \\ IA & = A = AI . \end{align*} $$

[2] A few warnings are in order.

(i) $AB \neq BA$ in general (it may be true by fluke sometimes). That is, matrices do not {index:commute}. For example, take $A = \left[ \begin{smallmatrix} 1 & 1 \\ 1 & 1 \end{smallmatrix} \right]$ and $B = \left[ \begin{smallmatrix} 1 & 0 \\ 0 & 2 \end{smallmatrix} \right]$.
(ii) $AB = AC$ does not necessarily imply $B=C$, even if $A$ is not 0.
(iii) $AB = 0$ does not necessarily mean that $A=0$ or $B=0$. Try, for example, $A = B = \left[ \begin{smallmatrix} 0 & 1 \\ 0 & 0 \end{smallmatrix} \right]$.

For the last two items to hold, we would need to “divide” by a matrix. This is where the *{index:matrix inverse}* comes in. Suppose that $A$ and $B$ are $n \times n$ matrices such that
$$ AB = I = BA . $$
Then we call $B$ the inverse of $A$ and we denote $B$ by $A^{-1}$. If the inverse of $A$ exists, then we call $A$ *invertible{index-entry:invertible matrix}*. If $A$ is not invertible, we sometimes say $A$ is *singular{index-entry:singular matrix}*.

If $A$ is invertible, then $AB = AC$ does imply that $B = C$ (in particular, the inverse of $A$ is unique). We just multiply both sides by $A^{-1}$ (on the left) to get $A^{-1}AB = A^{-1}AC$ or $IB=IC$ or $B=C$. It is also not hard to see that ${(A^{-1})}^{-1} = A$.

## The determinant

For square matrices we define a useful quantity called the *{index:determinant}*. We define the determinant of a $1 \times 1$ matrix as the value of its only entry. For a $2 \times 2$ matrix, we define
$$ \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) \overset{\text{def}}{=} ad-bc . $$

Before trying to define the determinant for larger matrices, let us note the meaning of the determinant. Consider an $n \times n$ matrix as a mapping of the $n$-dimensional euclidean space ${\mathbb{R}}^n$ to itself, where $\vec{x}$ gets sent to $A \vec{x}$. In particular, a $2 \times 2$ matrix $A$ is a mapping of the plane to itself. The determinant of $A$ is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then $A$ takes the square to a parallelogram of area $\lvert\det(A)\rvert$. The sign of $\det(A)$ denotes changing of orientation (negative if the axes get flipped). For example, let
$$ A = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} . $$
Then $\det(A) = 1+1 = 2$. Let us see where the (unit) square with vertices $(0,0)$, $(1,0)$, $(0,1)$, and $(1,1)$ gets sent. Clearly $(0,0)$ gets sent to $(0,0)$.
$$ \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix} , \qquad \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} , \qquad \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix} . $$
The image of the square is another square with vertices $(0,0)$, $(1,-1)$, $(1,1)$, and $(2,0)$. The image square has a side of length $\sqrt{2}$ and is therefore of area 2.

If you think back to high school geometry, you may have seen a formula for computing the area of a {index:parallelogram} with vertices $(0,0)$, $(a,c)$, $(b,d)$ and $(a+b,c+d)$. And it is precisely
$$ \left\lvert \, \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) \, \right\lvert. $$
The vertical lines above mean absolute value. The matrix $\left[ \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \right]$ carries the unit square to the given parallelogram.

Let us look at the determinant for larger matrices. We define $A_{ij}$ as the matrix $A$ with the $i^{\text{th}}$ row and the $j^{\text{th}}$ column deleted. To compute the determinant of a matrix, pick one row, say the $i^{\text{th}}$ row and compute:
$$ \boxed{~~ \det (A) = \sum_{j=1}^n {(-1)}^{i+j} a_{ij} \det (A_{ij}) . ~~} $$
For the first row, we get
$$ \det (A) = a_{11} \det (A_{11}) - a_{12} \det (A_{12}) + a_{13} \det (A_{13}) - \cdots \begin{cases} + a_{1n} \det (A_{1n}) & \text{if } n \text{ is odd,} \\ - a_{1n} \det (A_{1n}) & \text{if } n \text{ even.} \end{cases} $$
We alternately add and subtract the determinants of the submatrices $A_{ij}$ multiplied by $a_{ij}$ for a fixed $i$ and all $j$. For a $3 \times 3$ matrix, picking the first row, we get $\det (A) = a_{11} \det (A_{11}) - a_{12} \det (A_{12}) + a_{13} \det (A_{13})$. For example,
$$ \begin{split} \det \left( \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \right) & = 1 \cdot \det \left( \begin{bmatrix} 5 & 6 \\ 8 & 9 \end{bmatrix} \right) - 2 \cdot \det \left( \begin{bmatrix} 4 & 6 \\ 7 & 9 \end{bmatrix} \right) + 3 \cdot \det \left( \begin{bmatrix} 4 & 5 \\ 7 & 8 \end{bmatrix} \right) \\ & = 1 (5 \cdot 9 - 6 \cdot 8) - 2 (4 \cdot 9 - 6 \cdot 7) + 3 (4 \cdot 8 - 5 \cdot 7) = 0 . \end{split} $$

The numbers ${(-1)}^{i+j}\det(A_{ij})$ are called *cofactors{index-entry:cofactor}* of the matrix and this way of computing the determinant is called the *{index:cofactor expansion}*. No matter which row you pick, you always get the same number. It is also possible to compute the determinant by expanding along columns (picking a column instead of a row above). It is true that $\det(A) = \det(A^T)$.

A common notation for the determinant is a pair of vertical lines:
$$ \begin{vmatrix} a & b \\ c & d \end{vmatrix} = \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) . $$
I personally find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. I will not use this notation in this book.

Think of the determinants telling you the scaling of a mapping. If $B$ doubles the sizes of geometric objects and $A$ triples them, then $AB$ (which applies $B$ to an object and then $A$) should make size go up by a factor of $6 = 3 \cdot 2$. This is true in general:
$$ \det(AB) = \det(A)\det(B) . $$
This property is one of the most useful, and it can be employed to actually compute determinants. A particularly interesting consequence is to note what it means for existence of inverses. Take $A$ and $B$ to be inverses of each other, that is, $AB=I$. Then
$$ \det(A)\det(B) = \det(AB) = \det(I) = 1 . $$
Neither $\det(A)$ nor $\det(B)$ can be zero. Conversely, if $\det(A)$ is not zero, then $A$ is invertible. We state this observation as a theorem as it is very important in the context of this course.

:::theorem {thm:theorem-3-2-1} Theorem 3.2.1
An $n \times n$ matrix $A$ is invertible if and only if $\det (A) \neq 0$.
:::

In fact, $\det(A^{-1}) \det(A) = 1$ says that $\det(A^{-1}) = \frac{1}{\det(A)}$. So we even know what the determinant of $A^{-1}$ is before we know how to compute $A^{-1}$.

There is a simple formula for the inverse of a $2 \times 2$ matrix
$$ \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} . $$
Notice the determinant of the matrix $[\begin{smallmatrix}a&b\\c&d\end{smallmatrix}]$ in the denominator of the fraction. The formula only works if the determinant is nonzero, otherwise we are dividing by zero.

## Solving linear systems

One application of matrices we will need is to solve systems of linear equations. This is best shown by example. Suppose that we have the following system of linear equations
$$ \begin{align*} 2 x_1 + 2 x_2 + 2 x_3 & = 2 , \\ \phantom{9} x_1 + \phantom{9} x_2 + 3 x_3 & = 5 , \\ \phantom{9} x_1 + 4 x_2 + \phantom{9} x_3 & = 10 . \end{align*} $$

Without changing the solution, we could swap equations in this system, we could multiply any of the equations by a nonzero number, and we could add a multiple of one equation to another equation. It turns out these operations always suffice to find a solution.

It is easier to write the system as a matrix equation. The system above can be written as
$$ \begin{bmatrix} 2 & 2 & 2 \\ 1 & 1 & 3 \\ 1 & 4 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 2 \\ 5 \\ 10 \end{bmatrix} . $$
To solve the system, we put the coefficient matrix (the matrix on the left-hand side of the equation) together with the vector on the right-hand side and get the so-called *{index:augmented matrix}*:
$$ \left[ \begin{array}{ccc|c} 2 & 2 & 2 & 2 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{array} \right] . $$

[2] We apply a sequence of the following three *{index:elementary row operations}*{index-entry:row operations}.

(i) Swap two rows.
(ii) Multiply a row by a nonzero number.
(iii) Add a multiple of one row to another row.

We keep doing these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution, for example if we come up with an equation such as $0=1$.

Let us work through the example. First multiply the first row by ${1}/{2}$ to obtain
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{array} \right] . $$
Now subtract the first row from the second and third row:
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 2 & 4 \\ 0 & 3 & 0 & 9 \end{array} \right] $$
Multiply the last row by ${1}/{3}$ and the second row by ${1}/{2}$:
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 1 & 0 & 3 \end{array} \right] $$
Swap rows 2 and 3:
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{array} \right] $$
Subtract the last row from the first, then subtract the second row from the first:
$$ \left[ \begin{array}{ccc|c} 1 & 0 & 0 & -4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{array} \right] $$
Finally, we think about what equations this augmented matrix represents: $x_1 = -4$, $x_2 = 3$, and $x_3 = 2$. We try this solution in the original system and, voilà, it works!

:::exercise {exercise-3-2-001} number=3.2.1 answered=no src=ch-systems.tex:1241
PROBLEM:
Check that the solution above really solves the given equations.
:::

We write this equation in matrix notation as
$$ A \vec{x} = \vec{b} , $$
where $A$ is the matrix $\left[ \begin{smallmatrix} 2 & 2 & 2 \\ 1 & 1 & 3 \\ 1 & 4 & 1 \end{smallmatrix} \right]$ and $\vec{b}$ is the vector $\left[ \begin{smallmatrix} 2 \\ 5 \\ 10 \end{smallmatrix} \right]$. The solution can also be computed via the inverse,
$$ \vec{x} = A^{-1} A \vec{x} = A^{-1} \vec{b} . $$

It is possible that the solution is not unique, or that no solution exists. It is easy to tell if a solution does not exist. If during the row reduction you come up with a row where all the entries except the last one are zero (the last entry in a row corresponds to the right-hand side of the equation), then the system is *inconsistent{index-entry:inconsistent system}* and has no solution. For example, for a system of 3 equations and 3 unknowns, if you find a row such as $[\,0 \quad 0 \quad 0 ~\,|\,~ 1\,]$ in the augmented matrix, you know the system is inconsistent. That row corresponds to $0=1$.

You generally try to use row operations until the following conditions are satisfied. The first (from the left) nonzero entry in each row is called the *{index:leading entry}*.

(i) The leading entry in any row is strictly to the right of the leading entry of the row above.
(ii) Any zero rows are below all the nonzero rows.
(iii) All leading entries are 1.
(iv) All the entries above and below a leading entry are zero.

Such a matrix is said to be in *{index:reduced row echelon form}*. The variables corresponding to columns with no leading entries are said to be *free variables{index-entry:free variable}*. Free variables mean that we can pick those variables to be anything we want and then solve for the rest of the unknowns.

:::example {ex:example-3-2-1} Example 3.2.1
The following augmented matrix is in reduced row echelon form.
$$ \left[ \begin{array}{ccc|c} 1 & 2 & 0 & 3 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array} \right] $$
Suppose the variables are $x_1$, $x_2$, and $x_3$. Then $x_2$ is the free variable, $x_1 = 3 - 2x_2$, and $x_3 = 1$.

On the other hand, if during the row reduction process you come up with the matrix
$$ \left[ \begin{array}{ccc|c} 1 & 2 & 13 & 3 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 3 \end{array} \right] , $$
there is no need to go further. The last row corresponds to the equation $0 x_1 + 0 x_2 + 0 x_3 = 3$, which is preposterous. Hence, no solution exists.
:::

## Computing the inverse

If the matrix $A$ is square and there exists a unique solution $\vec{x}$ to $A \vec{x} = \vec{b}$ for any $\vec{b}$ (there are no free variables), then $A$ is invertible. Multiplying both sides by $A^{-1}$, you can see that $\vec{x} = A^{-1} \vec{b}$. So it is useful to compute the inverse if you want to solve the equation for many different right-hand sides $\vec{b}$.

We have a formula for the $2 \times 2$ inverse, but it is also not hard to compute inverses of larger matrices. While we will not have too much occasion to compute inverses for larger matrices than $2 \times 2$ by hand, let us touch on how to do it. Finding the inverse of $A$ is actually just solving a bunch of linear equations. If we can solve $A \vec{x}_k = \vec{e}_k$ where $\vec{e}_k$ is the vector with all zeros except a 1 at the $k^{\text{th}}$ position, then the inverse is the matrix with the columns $\vec{x}_k$ for $k=1,2,\ldots,n$ (exercise: why?). Therefore, to find the inverse we write a larger $n \times 2n$ augmented matrix $[ \,A ~|~ I\, ]$, where $I$ is the identity matrix. We then perform row reduction. The reduced row echelon form of $[ \,A ~|~ I\, ]$ will be of the form $[ \,I ~|~ A^{-1}\, ]$ if and only if $A$ is invertible. We then just read off the inverse $A^{-1}$.

## Exercises

:::exercise {exercise-3-2-002} number=3.2.2 answered=no src=ch-systems.tex:1359
PROBLEM:
Solve $\left[ \begin{smallmatrix} 1 & 2 \\ 3 & 4 \end{smallmatrix} \right] \vec{x} = \left[ \begin{smallmatrix} 5 \\ 6 \end{smallmatrix} \right]$ by using matrix inverse.
:::

:::exercise {exercise-3-2-003} number=3.2.3 answered=no src=ch-systems.tex:1371
PROBLEM:
Compute determinant of $\left[ \begin{smallmatrix} 9 & -2 & -6 \\ -8 & 3 & 6 \\ 10 & -2 & -6 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-2-004} number=3.2.4 answered=no src=ch-systems.tex:1380
PROBLEM:
Compute determinant of $\left[ \begin{smallmatrix} 1 & 2 & 3 & 1 \\ 4 & 0 & 5 & 0 \\ 6 & 0 & 7 & 0 \\ 8 & 0 & 10 & 1 \end{smallmatrix} \right]$. Hint: Expand along the proper row or column to make the calculations simpler.
:::

:::exercise {exercise-3-2-005} number=3.2.5 answered=no src=ch-systems.tex:1391
PROBLEM:
Compute inverse of $\left[ \begin{smallmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 0 & 1 & 0 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-2-006} number=3.2.6 answered=no src=ch-systems.tex:1400
PROBLEM:
For which $h$ is $\left[ \begin{smallmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & h \end{smallmatrix} \right]$ not invertible? Is there only one such $h$? Are there several? Infinitely many?
:::

:::exercise {exercise-3-2-007} number=3.2.7 answered=no src=ch-systems.tex:1411
PROBLEM:
For which $h$ is $\left[ \begin{smallmatrix} h & 1 & 1 \\ 0 & h & 0 \\ 1 & 1 & h \end{smallmatrix} \right]$ not invertible? Find all such $h$.
:::

:::exercise {exercise-3-2-008} number=3.2.8 answered=no src=ch-systems.tex:1421
PROBLEM:
Solve $\left[ \begin{smallmatrix} 9 & -2 & -6 \\ -8 & 3 & 6 \\ 10 & -2 & -6 \end{smallmatrix} \right] \vec{x} = \left[ \begin{smallmatrix} 1 \\ 2 \\ 3 \end{smallmatrix} \right]$ .
:::

:::exercise {exercise-3-2-009} number=3.2.9 answered=no src=ch-systems.tex:1435
PROBLEM:
Solve $\left[ \begin{smallmatrix} 5 & 3 & 7 \\ 8 & 4 & 4 \\ 6 & 3 & 3 \end{smallmatrix} \right] \vec{x} = \left[ \begin{smallmatrix} 2 \\ 0 \\ 0 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-2-010} number=3.2.10 answered=no src=ch-systems.tex:1449
PROBLEM:
Solve $\left[ \begin{smallmatrix} 3 & 2 & 3 & 0 \\ 3 & 3 & 3 & 3 \\ 0 & 2 & 4 & 2 \\ 2 & 3 & 4 & 3 \end{smallmatrix} \right] \vec{x} = \left[ \begin{smallmatrix} 2 \\ 0 \\ 4 \\ 1 \end{smallmatrix} \right]$.
:::

:::exercise {exercise-3-2-011} number=3.2.11 answered=no src=ch-systems.tex:1465
PROBLEM:
Find 3 nonzero $2 \times 2$ matrices $A$, $B$, and $C$ such that $AB = AC$ but $B \neq C$.
:::

:::exercise {exercise-3-2-101} number=3.2.101 answered=yes src=ch-systems.tex:1472
PROBLEM:
Compute determinant of $\left[ \begin{smallmatrix} 1 & 1 & 1 \\ 2 & 3 & -5 \\ 1 & -1 & 0 \end{smallmatrix}\right]$
SOLUTION:
$-15$
:::

:::exercise {exercise-3-2-102} number=3.2.102 answered=yes src=ch-systems.tex:1484
PROBLEM:
Find $t$ such that $\left[ \begin{smallmatrix} 1 & t \\ -1 & 2 \end{smallmatrix}\right]$ is not invertible.
SOLUTION:
$-2$
:::

:::exercise {exercise-3-2-103} number=3.2.103 answered=yes src=ch-systems.tex:1496
PROBLEM:
Solve $\left[ \begin{smallmatrix} 1 & 1 \\ 1 & -1 \end{smallmatrix}\right] \vec{x} = \left[ \begin{smallmatrix} 10 \\ 20 \end{smallmatrix}\right]$.
SOLUTION:
$\vec{x} = \left[ \begin{smallmatrix} 15 \\ -5 \end{smallmatrix}\right]$
:::

:::exercise {exercise-3-2-104} number=3.2.104 answered=yes src=ch-systems.tex:1513
PROBLEM:
Suppose $a, b, c$ are nonzero numbers. Let $M=\left[ \begin{smallmatrix} a & 0 \\ 0 & b \end{smallmatrix}\right]$, $N=\left[ \begin{smallmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{smallmatrix}\right]$.

a) Compute $M^{-1}$.
b) Compute $N^{-1}$.

SOLUTION:
a) $\left[ \begin{smallmatrix} {1}/{a} & 0 \\ 0 & {1}/{b} \end{smallmatrix}\right]$ b) $\left[ \begin{smallmatrix} {1}/{a} & 0 & 0 \\ 0 & {1}/{b} & 0 \\ 0 & 0 & {1}/{c} \end{smallmatrix}\right]$
:::

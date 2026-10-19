# A.6 Determinant {sec:det-section}

:::note [section-notes]
*Note: 1 lecture*
:::

For square matrices we define a useful quantity called the *{index:determinant}*. Define the determinant of a $1 \times 1$ matrix as the value of its only entry
$$ \det \left( \begin{bmatrix} a \end{bmatrix} \right) \overset{\text{def}}{=} a . $$
For a $2 \times 2$ matrix, define
$$ \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) \overset{\text{def}}{=} ad-bc . $$

Before defining the determinant for larger matrices, we note the meaning of the determinant. An $n \times n$ matrix gives a mapping of the $n$-dimensional euclidean space ${\mathbb{R}}^n$ to itself. So a $2 \times 2$ matrix $A$ is a mapping of the plane to itself. The determinant of $A$ is the factor by which the area of objects changes. If we take the unit square (square of side 1) in the plane, then $A$ takes the square to a parallelogram of area $\lvert\det(A)\rvert$. The sign of $\det(A)$ denotes a change of orientation (negative if the axes get flipped). For example, let
$$ A = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} . $$
Then $\det(A) = 1+1 = 2$. Let us see where $A$ sends the unit square—the square with vertices $(0,0)$, $(1,0)$, $(1,1)$, and $(0,1)$. The point $(0,0)$ gets sent to $(0,0)$.
$$ \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \end{bmatrix} , \qquad \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix} , \qquad \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} . $$
The image of the square is another square with vertices $(0,0)$, $(1,-1)$, $(2,0)$, and $(1,1)$. The image square has a side of length $\sqrt{2}$, and it is therefore of area 2. See [Figure A.7](ref:linalg-imagesquare-fig).

> FIGURE {fig:linalg-imagesquare-fig} number=A.7 src=../../media/linalg-imagesquare.svg
> alt: Two diagrams of the plane are given. On the left one, there is a square with vertices (0,0), (1,0), (1,1), and (0,1). In the right one, there is a square with corresponding vertices (0,0), (1, minus 1), (2,0), and (1,1), where the correspondence is shown with arrows.
> caption: Image of the unit square via the mapping $A$.

In general, the image of a square is a {index:parallelogram}. In high school geometry, you may have seen a formula for computing the area of a {index:parallelogram} with vertices $(0,0)$, $(a,c)$, $(b,d)$ and $(a+b,c+d)$. The area is
$$ \left\lvert \, \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) \, \right\rvert = \lvert a d - b c \rvert . $$
The vertical lines above mean absolute value. The matrix $\left[ \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \right]$ carries the unit square to the given parallelogram.

There are a number of ways to define the determinant for an $n \times n$ matrix. Let us use the so-called *{index:cofactor expansion}*. We define $A_{ij}$ as the matrix $A$ with the $i^{\text{th}}$ row and the $j^{\text{th}}$ column deleted. For example,
$$ \text{if} \qquad A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} , \qquad \text{then} \qquad A_{12} = \begin{bmatrix} 4 & 6 \\ 7 & 9 \end{bmatrix} \qquad \text{and} \qquad A_{23} = \begin{bmatrix} 1 & 2 \\ 7 & 8 \end{bmatrix} . $$
We now define the determinant recursively
$$ \det (A) \overset{\text{def}}{=} \sum_{j=1}^n {(-1)}^{1+j} a_{1j} \det (A_{1j}) , $$
or in other words
$$ \det (A) = a_{11} \det (A_{11}) - a_{12} \det (A_{12}) + a_{13} \det (A_{13}) - \cdots \begin{cases} + a_{1n} \det (A_{1n}) & \text{if } n \text{ is odd,} \\ - a_{1n} \det (A_{1n}) & \text{if } n \text{ is even.} \end{cases} $$
For a $3 \times 3$ matrix, we get $\det (A) = a_{11} \det (A_{11}) - a_{12} \det (A_{12}) + a_{13} \det (A_{13})$. For example,
$$ \begin{split} \det \left( \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \right) & = 1 \cdot \det \left( \begin{bmatrix} 5 & 6 \\ 8 & 9 \end{bmatrix} \right) - 2 \cdot \det \left( \begin{bmatrix} 4 & 6 \\ 7 & 9 \end{bmatrix} \right) + 3 \cdot \det \left( \begin{bmatrix} 4 & 5 \\ 7 & 8 \end{bmatrix} \right) \\ & = 1 (5 \cdot 9 - 6 \cdot 8) - 2 (4 \cdot 9 - 6 \cdot 7) + 3 (4 \cdot 8 - 5 \cdot 7) = 0 . \end{split} $$

It turns out that we did not have to necessarily use the first row. That is, for any $i$,
$$ \det (A) = \sum_{j=1}^n {(-1)}^{i+j} a_{ij} \det (A_{ij}) . $$
It is sometimes useful to use a row other than the first. In the following example it is more convenient to expand along the second row. Notice that for the second row we are starting with a negative sign.
$$ \begin{split} \det \left( \begin{bmatrix} 1 & 2 & 3 \\ 0 & 5 & 0 \\ 7 & 8 & 9 \end{bmatrix} \right) & = - 0 \cdot \det \left( \begin{bmatrix} 2 & 3 \\ 8 & 9 \end{bmatrix} \right) + 5 \cdot \det \left( \begin{bmatrix} 1 & 3 \\ 7 & 9 \end{bmatrix} \right) - 0 \cdot \det \left( \begin{bmatrix} 1 & 2 \\ 7 & 8 \end{bmatrix} \right) \\ & = 0 + 5 (1 \cdot 9 - 3 \cdot 7) + 0 = -60 . \end{split} $$
Let us check if it is really the same as expanding along the first row,
$$ \begin{split} \det \left( \begin{bmatrix} 1 & 2 & 3 \\ 0 & 5 & 0 \\ 7 & 8 & 9 \end{bmatrix} \right) & = 1 \cdot \det \left( \begin{bmatrix} 5 & 0 \\ 8 & 9 \end{bmatrix} \right) - 2 \cdot \det \left( \begin{bmatrix} 0 & 0 \\ 7 & 9 \end{bmatrix} \right) + 3 \cdot \det \left( \begin{bmatrix} 0 & 5 \\ 7 & 8 \end{bmatrix} \right) \\ & = 1 (5 \cdot 9 - 0 \cdot 8) - 2 (0 \cdot 9 - 0 \cdot 7) + 3 (0 \cdot 8 - 5 \cdot 7) = -60 . \end{split} $$

In computing the determinant, we alternately add and subtract the determinants of the submatrices $A_{ij}$ multiplied by $a_{ij}$ for a fixed $i$ and all $j$. The numbers ${(-1)}^{i+j}\det(A_{ij})$ are called *cofactors{index-entry:cofactor}* of the matrix. And that is why this method of computing the determinant is called the *cofactor expansion*.

Similarly, we do not need to expand along a row; we can expand along a column. For any $j$,
$$ \det (A) = \sum_{i=1}^n {(-1)}^{i+j} a_{ij} \det (A_{ij}) . $$
A related fact is that
$$ \det (A) = \det (A^T) . $$

A matrix is *{index:upper triangular}* if all elements below the main diagonal are 0. For example,
$$ \begin{bmatrix} 1 & 2 & 3 \\ 0 & 5 & 6 \\ 0 & 0 & 9 \end{bmatrix} $$
is upper triangular. Similarly a *{index:lower triangular}* matrix is one where everything above the diagonal is zero. For example,
$$ \begin{bmatrix} 1 & 0 & 0 \\ 4 & 5 & 0 \\ 7 & 8 & 9 \end{bmatrix} . $$

The determinant for triangular matrices is very simple to compute. Consider the lower triangular matrix. If we expand along the first row, we find that the determinant is 1 times the determinant of the lower triangular matrix $\left[ \begin{smallmatrix} 5 & 0 \\ 8 & 9 \end{smallmatrix} \right]$. So the determinant is just the product of the diagonal entries:
$$ \det \left( \begin{bmatrix} 1 & 0 & 0 \\ 4 & 5 & 0 \\ 7 & 8 & 9 \end{bmatrix} \right) = 1 \cdot 5 \cdot 9 = 45 . $$
Similarly for upper triangular matrices
$$ \det \left( \begin{bmatrix} 1 & 2 & 3 \\ 0 & 5 & 6 \\ 0 & 0 & 9 \end{bmatrix} \right) = 1 \cdot 5 \cdot 9 = 45 . $$
In general, if $A$ is triangular, then
$$ \det (A) = a_{11} a_{22} \cdots a_{nn} . $$

If $A$ is diagonal, then it is also triangular (upper and lower), so the same formula applies. For example,
$$ \det \left( \begin{bmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 5 \end{bmatrix} \right) = 2 \cdot 3 \cdot 5 = 30 . $$

In particular, the identity matrix $I$ is diagonal, and the diagonal entries are all 1. Thus,
$$ \det(I) = 1 . $$

The determinant is telling you how geometric objects scale. If $B$ doubles the sizes of geometric objects and $A$ triples them, then $AB$ (which applies $B$ to an object and then it applies $A$) should make size go up by a factor of $6$. This is true in general:

:::theorem {thm:theorem-A-6-1} Theorem A.6.1

$$ \det(AB) = \det(A)\det(B) . $$

:::

This property is one of the most useful, and it is employed often to actually compute determinants. A particularly interesting consequence is to note what it means for the existence of inverses. Take $A$ and $B$ to be inverses, that is, $AB=I$. Then
$$ \det(A)\det(B) = \det(AB) = \det(I) = 1 . $$
Neither $\det(A)$ nor $\det(B)$ can be zero. This fact is an extremely useful property of the determinant, and one which is used often in this book:

:::theorem {thm:theorem-A-6-2} Theorem A.6.2
An $n \times n$ matrix $A$ is invertible if and only if $\det (A) \neq 0$.
:::

In fact, $\det(A^{-1}) \det(A) = 1$ says that
$$ \det(A^{-1}) = \frac{1}{\det(A)}. $$
So we know what the determinant of $A^{-1}$ is without computing $A^{-1}$.

Let us return to the formula for the inverse of a $2 \times 2$ matrix:
$$ \begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} . $$
Notice the determinant of the matrix $[\begin{smallmatrix}a&b\\c&d\end{smallmatrix}]$ in the denominator of the fraction. The formula only works if the determinant is nonzero. Otherwise, we are dividing by zero.

A common notation for the determinant is a pair of vertical lines:
$$ \begin{vmatrix} a & b \\ c & d \end{vmatrix} = \det \left( \begin{bmatrix} a & b \\ c & d \end{bmatrix} \right) . $$
Personally, I find this notation confusing as vertical lines usually mean a positive quantity, while determinants can be negative. Also think about how to write the absolute value of a determinant. This notation is not used in this book.

## Exercises

:::exercise {exercise-A-6-001} number=A.6.1 answered=no src=ap-linear-algebra.tex:6660
PROBLEM:
Compute the determinant of the following matrices:

a) $\begin{bmatrix} 3 \end{bmatrix}$
b) $\begin{bmatrix} 1 & 3 \\ 2 & 1 \end{bmatrix}$
c) $\begin{bmatrix} 2 & 1 \\ 4 & 2 \end{bmatrix}$
d) $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$
e) $\begin{bmatrix} 2 & 1 & 0 \\ -2 & 7 & -3 \\ 0 & 2 & 0 \end{bmatrix}$
f) $\begin{bmatrix} 2 & 1 & 3 \\ 8 & 6 & 3 \\ 7 & 9 & 7 \end{bmatrix}$
g) $\begin{bmatrix} 0 & 2 & 5 & 7 \\ 0 & 0 & 2 & -3 \\ 3 & 4 & 5 & 7 \\ 0 & 0 & 2 & 4 \end{bmatrix}$
h) $\begin{bmatrix} 0 & 1 & 2 & 0 \\ 1 & 1 & -1 & 2 \\ 1 & 1 & 2 & 1 \\ 2 & -1 & -2 & 3 \end{bmatrix}$

:::

:::exercise {exercise-A-6-002} number=A.6.2 answered=no src=ap-linear-algebra.tex:6712
PROBLEM:
For which $x$ are the following matrices singular (not invertible).

a) $\begin{bmatrix} 2 & 3 \\ 2 & x \end{bmatrix}$
b) $\begin{bmatrix} 2 & x \\ 1 & 2 \end{bmatrix}$
c) $\begin{bmatrix} x & 1 \\ 4 & x \end{bmatrix}$
d) $\begin{bmatrix} x & 0 & 1 \\ 1 & 4 & 2 \\ 1 & 6 & 2 \end{bmatrix}$

:::

:::exercise {exercise-A-6-003} number=A.6.3 answered=no src=ap-linear-algebra.tex:6739
PROBLEM:
Compute
$$ \det \left( \begin{bmatrix} 2 & 1 & 2 & 3 \\ 0 & 8 & 6 & 5 \\ 0 & 0 & 3 & 9 \\ 0 & 0 & 0 & 1 \end{bmatrix}^{-1} \right) $$
without computing the inverse.
:::

:::exercise {exercise-A-6-004} number=A.6.4 answered=no src=ap-linear-algebra.tex:6753
PROBLEM:
Suppose
$$ L = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 2 & 1 & 0 & 0 \\ 7 & \pi & 1 & 0 \\ 2^8 & 5 & -99 & 1 \end{bmatrix} \qquad \text{and} \qquad U = \begin{bmatrix} 5 & 9 & 1 & -\sin(1) \\ 0 & 1 & 88 & -1 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix} . $$
Let $A = LU$. Compute $\det(A)$ in a simple way, without computing what is $A$. Hint: First read off $\det(L)$ and $\det(U)$.
:::

:::exercise {exercise-A-6-005} number=A.6.5 answered=no src=ap-linear-algebra.tex:6774
PROBLEM:
Consider the linear mapping from ${\mathbb R}^2$ to ${\mathbb R}^2$ given by the matrix $A = \left[ \begin{smallmatrix} 1 & x \\ 2 & 1 \end{smallmatrix} \right]$ for some number $x$. You wish to make $A$ such that it doubles the area of every geometric figure. What are the possibilities for $x$ (there are two answers).
:::

:::exercise {exercise-A-6-006} number=A.6.6 answered=no src=ap-linear-algebra.tex:6786
PROBLEM:
Suppose $A$ and $S$ are $n \times n$ matrices, and $S$ is invertible. Suppose that $\det(A) = 3$. Compute $\det(S^{-1}AS)$ and $\det(SAS^{-1})$. Justify your answer using the theorems in this section.
:::

:::exercise {exercise-A-6-007} number=A.6.7 answered=no src=ap-linear-algebra.tex:6792
PROBLEM:
Let $A$ be an $n \times n$ matrix such that $\det(A)=1$. Compute $\det(x A)$ given a number $x$.Hint: First try computing $\det(xI)$, then note that $xA = (xI)A$.
:::

:::exercise {exercise-A-6-101} number=A.6.101 answered=yes src=ap-linear-algebra.tex:6801
PROBLEM:
Compute the determinant of the following matrices:

a) $\begin{bmatrix} -2 \end{bmatrix}$
b) $\begin{bmatrix} 2 & -2 \\ 1 & 3 \end{bmatrix}$
c) $\begin{bmatrix} 2 & 2 \\ 2 & 2 \end{bmatrix}$
d) $\begin{bmatrix} 2 & 9 & -11 \\ 0 & -1 & 5 \\ 0 & 0 & 3 \end{bmatrix}$
e) $\begin{bmatrix} 2 & 1 & 0 \\ -2 & 7 & 3 \\ 1 & 1 & 0 \end{bmatrix}$
f) $\begin{bmatrix} 5 & 1 & 3 \\ 4 & 1 & 1 \\ 4 & 5 & 1 \end{bmatrix}$
g) $\begin{bmatrix} 3 & 2 & 5 & 7 \\ 0 & 0 & 2 & 0 \\ 0 & 4 & 5 & 0 \\ 2 & 1 & 2 & 4 \end{bmatrix}$
h) $\begin{bmatrix} 0 & 2 & 1 & 0 \\ 1 & 2 & -3 & 4 \\ 5 & 6 & -7 & 8 \\ 1 & 2 & 3 & -2 \end{bmatrix}$

SOLUTION:
a) $-2$ b) $8$ c) $0$ d) $-6$ e) $-3$ f) $28$ g) $16$ h) $-24$
:::

:::exercise {exercise-A-6-102} number=A.6.102 answered=yes src=ap-linear-algebra.tex:6864
PROBLEM:
For which $x$ are the following matrices singular (not invertible):

a) $\begin{bmatrix} 1 & 3 \\ 1 & x \end{bmatrix}$
b) $\begin{bmatrix} 3 & x \\ 1 & 3 \end{bmatrix}$
c) $\begin{bmatrix} x & 3 \\ 3 & x \end{bmatrix}$
d) $\begin{bmatrix} x & 1 & 0 \\ 1 & 4 & 0 \\ 1 & 6 & 2 \end{bmatrix}$

SOLUTION:
a) $3$ b) $9$ c) $\pm 3$ d) ${1}/{4}$
:::

:::exercise {exercise-A-6-103} number=A.6.103 answered=yes src=ap-linear-algebra.tex:6897
PROBLEM:
Compute
$$ \det \left( \begin{bmatrix} 3 & 4 & 7 & 12 \\ 0 & -1 & 9 & -8 \\ 0 & 0 & -2 & 4 \\ 0 & 0 & 0 & 2 \end{bmatrix}^{-1} \right) $$
without computing the inverse.
SOLUTION:
${1}/{12}$
:::

:::exercise {exercise-A-6-104} number=A.6.104 answered=yes src=ap-linear-algebra.tex:6913
PROBLEM:
**challenging**
Find all the $x$ that make the matrix inverse
$$ \begin{bmatrix} 1 & 2 \\ 1 & x \end{bmatrix}^{-1} $$
have only integer entries (no fractions). Note that there are two answers.
SOLUTION:
$1$ and $3$
:::

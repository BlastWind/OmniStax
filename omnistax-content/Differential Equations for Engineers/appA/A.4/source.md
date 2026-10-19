# A.4 Subspaces, dimension, and the kernel {sec:subspaces-section}

:::note [section-notes]
*Note: 1 lecture*
:::

## Subspaces, basis, and dimension

We often find ourselves looking at the set of solutions of a linear equation $L\vec{x} = \vec{0}$ for some matrix $L$. That is, we are interested in the kernel of $L$. The set of all such solutions has a nice structure: It looks and acts a lot like some euclidean space ${\mathbb R}^k$.

We say that a set $S$ of vectors in ${\mathbb R}^n$ is a *{index:subspace}* if whenever $\vec{x}$ and $\vec{y}$ are members of $S$ and $\alpha$ is a scalar, then
$$ \vec{x} + \vec{y}, \qquad \text{and} \qquad \alpha \vec{x} $$
are also members of $S$. That is, we can add and multiply by scalars and we still land in $S$. So every linear combination of vectors of $S$ is still in $S$. That is really what a subspace is. It is a subset where we can take linear combinations and still end up being in the subset. Consequently, the span of a number of vectors is automatically a subspace.

:::example {ex:example-simplesubspaces} Example A.4.1

(i) If we let $S = {\mathbb R}^n$, then this $S$ is a subspace of ${\mathbb R}^n$. Adding any two vectors in ${\mathbb R}^n$ gets a vector in ${\mathbb R}^n$, and so does multiplying by scalars.
(ii) The set $S' = \{ \vec{0} \}$, that is, the set of the zero vector by itself, is also a subspace of ${\mathbb R}^n$. There is only one vector in this subspace, so we only need to verify the definition for that one vector, and everything checks out: $\vec{0}+\vec{0} = \vec{0}$ and $\alpha \vec{0} = \vec{0}$.
(iii) The set $S''$ of all the vectors of the form $(a,a)$ for any real number $a$, such as $(1,1)$, $(3,3)$, or $(-0.5,-0.5)$, is a subspace of ${\mathbb R}^2$. Adding two such vectors, say $(1,1)+(3,3) = (4,4)$ again gets a vector of the same form, and so does multiplying by a scalar, say $8(1,1) = (8,8)$.

:::

If $S$ is a subspace and we can find $k$ linearly independent vectors in $S$
$$ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_k , $$
such that every other vector in $S$ is a linear combination of $\vec{v}_1, \vec{v}_2,\ldots, \vec{v}_k$, then the set $\{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_k \}$ is called a *{index:basis}* of $S$. In other words, $S$ is the span of $\{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_k \}$ and there is no smaller subset of these vectors that spans $S$. We say that $S$ has dimension $k$, and we write
$$ \dim S = k . $$
We have the following theorem.

:::theorem {thm:theorem-A-4-1} Theorem A.4.1
[2] If $S \subset {\mathbb R}^n$ is a subspace and $S$ is not the trivial subspace $\{ \vec{0} \}$, then there exists a unique positive integer $k$ (the dimension) and a (not unique) basis $\{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_k \}$, such that every $\vec{w}$ in $S$ can be uniquely represented by
$$ \vec{w} = \alpha_1 \vec{v}_1 + \alpha_2 \vec{v}_2 + \cdots + \alpha_k \vec{v}_k , $$
for some scalars $\alpha_1$, $\alpha_2$, …, $\alpha_k$. By “uniquely represented” we mean that these scalars $\alpha_1$, $\alpha_2$, …, $\alpha_k$ are unique.
:::

Just as a vector in ${\mathbb R}^k$ is represented by a $k$-tuple of numbers, so is a vector in a $k$-dimensional subspace of ${\mathbb R}^n$ represented by a unique $k$-tuple of numbers, at least once we have fixed a basis. A different basis would give a different $k$-tuple of numbers for the same vector.

We should reiterate that while $k$ is unique (a subspace cannot have two different dimensions—every basis has the same number of vectors), the set of basis vectors is not at all unique. There are lots of different bases for any given subspace. Finding just the right basis for a subspace is a large part of what one does in linear algebra. In fact, that is what we spend a lot of time on in linear differential equations, although at first glance it may not seem like that is what we are doing.

:::example {ex:example-A-4-2} Example A.4.2

(i) The standard basis
$$ \vec{e}_1, \vec{e}_2, \ldots, \vec{e}_n , $$
is a basis of ${\mathbb R}^n$, (hence the name). So as expected
$$ \dim {\mathbb R}^n = n . $$

(ii) Both sets $\bigl\{ (1,0) , (0,1) \bigr\}$ and $\bigl\{ (1,1), (1,-1) \bigr\}$ are bases of ${\mathbb{R}}^2$. A vector $(3,7)$ can be written as $(3,7)=3 (1,0) + 7 (0,1)$ (and in no other way with the first basis), and it can be written as $(3,7)=5 (1,1) - 2(1,-1)$ (and in no other way with the second basis).
(iii) The subspace $\{ \vec{0} \}$ is of dimension $0$. A basis is simply an empty set of vectors.
(iv) The subspace $S''$ from [Example A.4.1](ref:example-simplesubspaces), that is, the set of vectors $(a,a)$, is of dimension 1. One possible basis is simply $\bigl\{ (1,1) \bigr\}$, the single vector $(1,1)$: Every vector in $S''$ can be represented by $a (1,1) = (a,a)$. Similarly, another possible basis would be $\bigl\{ (-1,-1) \bigr\}$. Then the vector $(a,a)$ would be represented as $(-a) (-1,-1)$.
(v) The set $\bigl\{ (1,1) , (-1,-1) \bigr\}$ does span $S''$, but it is not a basis as it is not a linearly independent set. Consequently, a vector such as $(2,2)$ can be written in multiple ways with this set of vectors: $(2,2) = 2(1,1) + 0 (-1,-1)$, or $(2,2) = 5(1,1) + 3 (-1,-1)$, etc.

:::

Row and column spaces of a matrix are also examples of subspaces, as they are given as the span of vectors. We can use what we know about rank, row spaces, and column spaces from the previous section to find a basis.

:::example {ex:example-A-4-3} Example A.4.3
In the last section, we considered the matrix
$$ A = \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} . $$
Using row reduction to find the pivot columns, we found
$$ \text{column space of $A$} \left( \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} \right) = \operatorname{span} \left\{ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} , \begin{bmatrix} 3 \\ 5 \\ 7 \end{bmatrix} \right\} . $$
What we did was we found a basis of the column space. This basis has two elements, and so the column space of $A$ is two-dimensional. Notice that the rank of $A$ is two.
:::

We would have followed the same procedure if we wanted to find a basis of the subspace $X$ spanned by
$$ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} , \begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix} , \begin{bmatrix} 3 \\ 5 \\ 7 \end{bmatrix} , \begin{bmatrix} 4 \\ 6 \\ 8 \end{bmatrix} . $$
We would have simply formed the matrix $A$ with these vectors as columns and repeated the computation above. The subspace $X$ is then the column space of $A$.

:::example {ex:example-A-4-4} Example A.4.4
Consider the matrix
$$ L = \begin{bmatrix} {1} & 2 & 0 & 0 & 3 \\ 0 & 0 & {1} & 0 & 4 \\ 0 & 0 & 0 & {1} & 5 \end{bmatrix} . $$
Conveniently, the matrix is in reduced row echelon form. The matrix is of rank 3. The column space is the span of the pivot columns. It is the 3-dimensional space
$$ \text{column space of $L$} = \operatorname{span} \left\{ \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} , \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} , \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} \right\} = {\mathbb{R}}^3 . $$
The row space is the 3-dimensional space
$$ \text{row space of $L$} = \operatorname{span} \left\{ \begin{bmatrix} 1 & 2 & 0 & 0 & 3 \end{bmatrix} , \begin{bmatrix} 0 & 0 & 1 & 0 & 4 \end{bmatrix} , \begin{bmatrix} 0 & 0 & 0 & 1 & 5 \end{bmatrix} \right\} . $$
As these vectors have 5 components, we think of the row space of $L$ as a subspace of ${\mathbb{R}}^5$.
:::

The way the dimensions worked out in the examples is not an accident. Since the number of vectors that we needed to take was always the same as the number of pivots, and the number of pivots is the rank, we get the following result.

:::theorem {thm:theorem-A-4-2} Theorem A.4.2 (Rank)
The dimension of the column space and the dimension of the row space of a matrix $A$ are both equal to the rank of $A$.
:::

## Kernel

The set of solutions of a linear equation $L\vec{x} = \vec{0}$, the kernel of $L$, is a subspace: If $\vec{x}$ and $\vec{y}$ are solutions, then
$$ L(\vec{x}+\vec{y}) = L\vec{x}+L\vec{y} = \vec{0}+\vec{0} = \vec{0} , \qquad \text{and} \qquad L(\alpha \vec{x}) = \alpha L \vec{x} = \alpha \vec{0} = \vec{0}. $$
So $\vec{x}+\vec{y}$ and $\alpha \vec{x}$ are solutions. The dimension of the kernel is called the *{index:nullity}* of the matrix.

The same sort of idea governs the solutions of linear differential equations. We try to describe the kernel of a linear differential operator, and as it is a subspace, we look for a basis of this kernel. Much of this book is dedicated to finding such bases.

The kernel of a matrix is the same as the kernel of its reduced row echelon form. For a matrix in reduced row echelon form, the kernel is rather easy to find. If we take a product of a matrix $L$ and a vector $\vec{x}$, then each entry in $\vec{x}$ corresponds to a column of $L$, the column that the entry multiplies. To find the kernel, pick a non-pivot column and make a vector that has a $-1$ in the entry corresponding to this non-pivot column and zeros at all the other entries corresponding to the other non-pivot columns. Then for all the entries corresponding to pivot columns make it precisely the value in the corresponding row of the non-pivot column to make the vector be a solution to $L \vec{x} = \vec{0}$. This procedure is best understood by example.

:::example {ex:example-A-4-5} Example A.4.5
Consider
$$ L = \begin{bmatrix} \boxed{1} & 2 & 0 & 0 & 3 \\ 0 & 0 & \boxed{1} & 0 & 4 \\ 0 & 0 & 0 & \boxed{1} & 5 \end{bmatrix} . $$
This matrix is in reduced row echelon form, the pivots are marked. There are two non-pivot columns, so the kernel has dimension 2, that is, it is the span of 2 vectors. Let us find the first vector. We look at the first non-pivot column, the $2^{\text{nd}}$ column, and we put a $-1$ in the $2^{\text{nd}}$ entry of our vector. We put a $0$ in the $5^{\text{th}}$ entry as the $5^{\text{th}}$ column is also a non-pivot column:
$$ \begin{bmatrix} ? \\ -1 \\ ? \\ ? \\ 0 \end{bmatrix} . $$
Let us fill the rest. When this vector hits the first row of $L$, we get a $-2$ and $1$ times whatever the first question mark is. We want to get zero when hitting the first row, so make the first question mark $2$. To get zero when hitting the second and third rows, it is sufficient to make the remaining question marks $0$. We are really filling in the non-pivot column into the remaining entries. Let us check while marking which numbers went where:
$$ \begin{bmatrix} 1 & \boxed{2} & 0 & 0 & 3 \\ 0 & \boxed{0} & 1 & 0 & 4 \\ 0 & \boxed{0} & 0 & 1 & 5 \end{bmatrix} \begin{bmatrix} \boxed{2} \\ -1 \\ \boxed{0} \\ \boxed{0} \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} . $$
Yay! How about the second vector? We start with
$$ \begin{bmatrix} ? \\ 0 \\ ? \\ ? \\ -1 . \end{bmatrix} $$
We set the first question mark to 3, the second to 4, and the third to 5. Let us check, marking things as previously,
$$ \begin{bmatrix} 1 & 2 & 0 & 0 & \boxed{3} \\ 0 & 0 & 1 & 0 & \boxed{4} \\ 0 & 0 & 0 & 1 & \boxed{5} \end{bmatrix} \begin{bmatrix} \boxed{3} \\ 0 \\ \boxed{4} \\ \boxed{5} \\ -1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} . $$
There are two non-pivot columns, so we only need two vectors. We have found a basis of the kernel. So,
$$ \text{kernel of $L$} = \operatorname{span} \left\{ \begin{bmatrix} 2 \\ -1 \\ 0 \\ 0 \\ 0 \end{bmatrix} , \begin{bmatrix} 3 \\ 0 \\ 4 \\ 5 \\ -1 \end{bmatrix} \right\} $$

:::

What we did in finding a basis of the kernel is that we expressed all solutions of $L \vec{x} = \vec{0}$ as a linear combination of some given vectors.

[2] The procedure to find a basis of the kernel of a matrix $L$:

(i) Find the reduced row echelon form of $L$.
(ii) Write down a basis of the kernel as above, one vector for each non-pivot column.

The rank of a matrix is the dimension of the column space, and that is the span of the pivot columns, while the kernel is the span of certain vectors, one for each non-pivot column. So the two numbers must add to the number of columns.

:::theorem {thm:theorem-A-4-3} Theorem A.4.3 (Rank–Nullity)
If a matrix $A$ has $n$ columns, rank $r$, and nullity $k$ (dimension of the kernel), then
$$ n = r+k . $$

:::

The theorem is immensely useful in applications. It allows one to compute the rank $r$ if one knows the nullity $k$ and vice versa, without doing any extra work. An example application is a simple version of the so-called *{index:Fredholm alternative}*. A similar result is true for differential equations. Consider
$$ A \vec{x} = \vec{b} , $$
where $A$ is a square $n \times n$ matrix. There are then two mutually exclusive possibilities:

(i) A nonzero solution $\vec{x}$ to $A \vec{x} = \vec{0}$ exists.
(ii) The equation $A \vec{x} = \vec{b}$ has a unique solution $\vec{x}$ for every $\vec{b}$.

How does the Rank–Nullity theorem come into the picture? Well, if $A$ has a nonzero solution $\vec{x}$ to $A \vec{x} = \vec{0}$, then the nullity $k$ is positive. But then the rank $r = n-k$ must be less than $n$. It means that the column space of $A$ is of dimension less than $n$, so it is a subspace that does not include everything in ${\mathbb{R}}^n$. So ${\mathbb{R}}^n$ has to contain some vector $\vec{b}$ not in the column space of $A$. In fact, most vectors in ${\mathbb{R}}^n$ are not in the column space of $A$.

## Exercises

:::exercise {exercise-A-4-001} number=A.4.1 answered=no src=ap-linear-algebra.tex:5014
PROBLEM:
For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.

a) $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} , \quad \begin{bmatrix} -1 \\ -1 \\ -1 \end{bmatrix}$
b) $\begin{bmatrix} 1 \\ 0 \\ 5 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ -1 \\ 0 \end{bmatrix}$
c) $\begin{bmatrix} -4 \\ -3 \\ 5 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 3 \\ 3 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 0 \\ 2 \end{bmatrix}$
d) $\begin{bmatrix} 1 \\ 3 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ 2 \\ 2 \end{bmatrix} , \quad \begin{bmatrix} -1 \\ -1 \\ 2 \end{bmatrix}$
e) $\begin{bmatrix} 1 \\ 3 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ 2 \end{bmatrix} , \quad \begin{bmatrix} -1 \\ -1 \end{bmatrix}$
f) $\begin{bmatrix} 3 \\ 1 \\ 3 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 4 \\ -4 \end{bmatrix} , \quad \begin{bmatrix} -5 \\ -5 \\ -2 \end{bmatrix}$

:::

:::exercise {exercise-A-4-002} number=A.4.2 answered=no src=ap-linear-algebra.tex:5101
PROBLEM:
[2] For the following matrices, find a basis for the kernel (nullspace).

a) $\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 5 \\ 1 & 1 & -4 \end{bmatrix}$
b) $\begin{bmatrix} 2 & -1 & -3 \\ 4 & 0 & -4 \\ -1 & 1 & 2 \end{bmatrix}$
c) $\begin{bmatrix} -4 & 4 & 4 \\ -1 & 1 & 1 \\ -5 & 5 & 5 \end{bmatrix}$
d) $\begin{bmatrix} -2 & 1 & 1 & 1 \\ -4 & 2 & 2 & 2 \\ 1 & 0 & 4 & 3 \end{bmatrix}$

:::

:::exercise {exercise-A-4-003} number=A.4.3 answered=no src=ap-linear-algebra.tex:5132
PROBLEM:
Suppose a $5 \times 5$ matrix $A$ has rank 3. What is the nullity?
:::

:::exercise {exercise-A-4-004} number=A.4.4 answered=no src=ap-linear-algebra.tex:5136
PROBLEM:
Suppose that $X$ is the set of all the vectors of ${\mathbb{R}}^3$ whose third component is zero. Is $X$ a subspace? And if so, find a basis and the dimension.
:::

:::exercise {exercise-A-4-005} number=A.4.5 answered=no src=ap-linear-algebra.tex:5142
PROBLEM:
Consider a square matrix $A$, and suppose that $\vec{x}$ is a nonzero vector such that $A \vec{x} = \vec{0}$. What does the Fredholm alternative say about invertibility of $A$?
:::

:::exercise {exercise-A-4-006} number=A.4.6 answered=no src=ap-linear-algebra.tex:5148
PROBLEM:
Consider
$$ M = \begin{bmatrix} 1 & 2 & 3 \\ 2 & ? & ? \\ -1 & ? & ? \end{bmatrix} . $$
If the nullity of this matrix is 2, fill in the question marks. Hint: What is the rank?
:::

:::exercise {exercise-A-4-101} number=A.4.101 answered=yes src=ap-linear-algebra.tex:5164
PROBLEM:
For the following sets of vectors, find a basis for the subspace spanned by the vectors, and find the dimension of the subspace.

a) $\begin{bmatrix} 1 \\ 2 \end{bmatrix} , \quad \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
b) $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 2 \\ 2 \end{bmatrix} , \quad \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}$
c) $\begin{bmatrix} 5 \\ 3 \\ 1 \end{bmatrix} , \quad \begin{bmatrix} 5 \\ -1 \\ 5 \end{bmatrix} , \quad \begin{bmatrix} -1 \\ 3 \\ -4 \end{bmatrix}$
d) $\begin{bmatrix} 2 \\ 2 \\ 4 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 2 \\ 3 \end{bmatrix} , \quad \begin{bmatrix} 4 \\ 4 \\ -3 \end{bmatrix}$
e) $\begin{bmatrix} 1 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 3 \\ 0 \end{bmatrix}$
f) $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ 0 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} 1 \\ 2 \end{bmatrix} , \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ dimension 2, b) $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} , \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}$ dimension 2, c) $\begin{bmatrix} 5 \\ 3 \\ 1 \end{bmatrix} , \begin{bmatrix} 5 \\ -1 \\ 5 \end{bmatrix} , \begin{bmatrix} -1 \\ 3 \\ -4 \end{bmatrix}$ dimension 3, d) $\begin{bmatrix} 2 \\ 2 \\ 4 \end{bmatrix} , \begin{bmatrix} 2 \\ 2 \\ 3 \end{bmatrix}$ dimension 2, e) $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ dimension 1, f) $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} , \begin{bmatrix} 0 \\ 1 \\ 2 \end{bmatrix}$ dimension 2
:::

:::exercise {exercise-A-4-102} number=A.4.102 answered=yes src=ap-linear-algebra.tex:5306
PROBLEM:
For the following matrices, find a basis for the kernel (nullspace).

a) $\begin{bmatrix} 2 & 6 & 1 & 9 \\ 1 & 3 & 2 & 9 \\ 3 & 9 & 0 & 9 \end{bmatrix}$
b) $\begin{bmatrix} 2 & -2 & -5 \\ -1 & 1 & 5 \\ -5 & 5 & -3 \end{bmatrix}$
c) $\begin{bmatrix} 1 & -5 & -4 \\ 2 & 3 & 5 \\ -3 & 5 & 2 \end{bmatrix}$
d) $\begin{bmatrix} 0 & 4 & 4 \\ 0 & 1 & 1 \\ 0 & 5 & 5 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} 3 \\ -1 \\ 0 \\ 0 \end{bmatrix}$, $\begin{bmatrix} 3 \\ 0 \\ 3 \\ -1 \end{bmatrix}$ b) $\begin{bmatrix} -1 \\ -1 \\ 0 \end{bmatrix}$ c) $\begin{bmatrix} 1 \\ 1 \\ -1 \end{bmatrix}$ d) $\begin{bmatrix} -1 \\ 0 \\ 0 \end{bmatrix}$, $\begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix}$
:::

:::exercise {exercise-A-4-103} number=A.4.103 answered=yes src=ap-linear-algebra.tex:5349
PROBLEM:
Suppose the column space of a $9 \times 5$ matrix $A$ is of dimension 3. Find

a) Rank of $A$.
b) Nullity of $A$.
c) Dimension of the row space of $A$.
d) Dimension of the nullspace of $A$.
e) Size of the maximum subset of linearly independent rows of $A$.

SOLUTION:
a) 3 b) 2 c) 3 d) 2 e) 3
:::

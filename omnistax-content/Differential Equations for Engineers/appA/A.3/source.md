# A.3 Elimination {sec:elim-section}

:::note [section-notes]
*Note: 2–3 lectures*
:::

## Linear systems of equations

One application of matrices is to solve systems of linear equations^[Although perhaps we have this backwards, quite often we solve a linear system of equations to find out something about matrices, rather than vice versa.]. Consider the following system of linear equations
$$ \begin{aligned} 2 x_1 + 2 x_2 + 2 x_3 & = 2 , \\ \phantom{9} x_1 + \phantom{9} x_2 + 3 x_3 & = 5 , \\ \phantom{9} x_1 + 4 x_2 + \phantom{9} x_3 & = 10 . \end{aligned} $$ {eq:linalg-elim-eq} number=A.2

There is a systematic procedure called *{index:elimination}* to solve such a system. In this procedure, we attempt to eliminate each variable from all but one equation. We want to end up with equations such as $x_3 = 2$, where we can just read off the answer.

We write a system of linear equations as a matrix equation:
$$ A \vec{x} = \vec{b} . $$
The system [(A.2)](ref:linalg-elim-eq) is written as
$$ \underbrace{ \begin{bmatrix} 2 & 2 & 2 \\ 1 & 1 & 3 \\ 1 & 4 & 1 \end{bmatrix} }_{A} \underbrace{ \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} }_{\vec{x}} = \underbrace{ \begin{bmatrix} 2 \\ 5 \\ 10 \end{bmatrix} }_{\vec{b}} . $$
If we knew the inverse of $A$, then we would be done. We would simply solve the equation:
$$ \vec{x} = A^{-1} A \vec{x} = A^{-1} \vec{b} . $$
Well, but that is part of the problem. We do not know how to compute the inverse for matrices bigger than $2 \times 2$. We will see later that to compute the inverse, we are really solving $A \vec{x} = \vec{b}$ for several different $\vec{b}$. In other words, we will need to do elimination to find $A^{-1}$. In addition, we may wish to solve $A \vec{x} = \vec{b}$ if $A$ is not invertible, or perhaps not even square.

Let us return to the equations themselves and see how we can manipulate them. There are a few operations we can perform on the equations that do not change the solution. First, perhaps an operation that may seem stupid, we can swap two equations in [(A.2)](ref:linalg-elim-eq):
$$ \begin{aligned} \phantom{9} x_1 + \phantom{9} x_2 + 3 x_3 & = 5 , \\ 2 x_1 + 2 x_2 + 2 x_3 & = 2 , \\ \phantom{9} x_1 + 4 x_2 + \phantom{9} x_3 & = 10 . \end{aligned} $$
Clearly these new equations have the same solutions $x_1,x_2,x_3$. A second operation is that we can multiply an equation by a nonzero number. For example, we multiply the third equation in [(A.2)](ref:linalg-elim-eq) by 3:
$$ \begin{aligned} 2 x_1 + \phantom{9} 2 x_2 + 2 x_3 & = 2 , \\ \phantom{9} x_1 + \phantom{99} x_2 + 3 x_3 & = 5 , \\ 3 x_1 + 12 x_2 + 3 x_3 & = 30 . \end{aligned} $$
Finally, we can add a multiple of one equation to another equation. For instance, we add 3 times the third equation in [(A.2)](ref:linalg-elim-eq) to the second equation:
$$ \begin{aligned} \phantom{(1+3)} 2 x_1 + \phantom{(1+12)} 2 x_2 + \phantom{(3+3)} 2 x_3 & = 2 , \\ \phantom{2} (1+3) x_1 + \phantom{2}(1+12) x_2 + \phantom{2} (3+3) x_3 & = 5+30 , \\ \phantom{2 (1+3)} x_1 + \phantom{(1+12)} 4 x_2 + \phantom{(3+3) 2} x_3 & = 10 . \end{aligned} $$
The same $x_1,x_2,x_3$ should still be solutions to the new equations. These were just examples; we did not get any closer to the solution. We must do these three operations in some more logical manner, but it turns out these three operations suffice to solve every linear equation.

The first thing is to write the equations in a more compact manner. Given
$$ A \vec{x} = \vec{b} , $$
we write down the so-called *{index:augmented matrix}*
$$ [ A ~|~ \vec{b} ] , $$
where the vertical line is just a marker for us to know where the “right-hand side” of the equation starts. For the system [(A.2)](ref:linalg-elim-eq) the augmented matrix is
$$ \left[ \begin{array}{ccc|c} 2 & 2 & 2 & 2 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{array} \right] . $$
The entire process of elimination, which we will describe, is often applied to any sort of matrix, not just an augmented matrix. Simply think of the matrix as the $3 \times 4$ matrix
$$ \begin{bmatrix} 2 & 2 & 2 & 2 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{bmatrix} . $$

## Row echelon form and elementary operations

We apply the three operations above to the matrix. We call these the *{index:elementary operations}* or *{index:elementary row operations}*{index-entry:row operations}. Translating the operations to the matrix setting, the operations become:

(i) Swap two rows.
(ii) Multiply a row by a nonzero number.
(iii) Add a multiple of one row to another row.

We run these operations until we get into a state where it is easy to read off the answer, or until we get into a contradiction indicating no solution.

More specifically, we run the operations until we obtain the so-called *{index:row echelon form}*{index-entry:echelon form}. Let us call the first (from the left) nonzero entry in each row the *{index:leading entry}*. A matrix is in *row echelon form* if the following conditions are satisfied:

(i) The leading entry in any row is strictly to the right of the leading entry of the row above.
(ii) Any zero rows are below all the nonzero rows.
(iii) All leading entries are 1.

A matrix is in *{index:reduced row echelon form}* if furthermore the following condition is satisfied.

(iv) All the entries above a leading entry are zero.

Note that the definition applies to matrices of any size.

:::example {ex:example-A-3-1} Example A.3.1
The following matrices are in row echelon form. The leading entries are marked:
$$ \begin{bmatrix} \boxed{1} & 2 & 9 & 3 \\ 0 & 0 & \boxed{1} & 5 \\ 0 & 0 & 0 & \boxed{1} \end{bmatrix} \qquad \begin{bmatrix} \boxed{1} & -1 & -3 \\ 0 & \boxed{1} & 5 \\ 0 & 0 & \boxed{1} \end{bmatrix} \qquad \begin{bmatrix} \boxed{1} & 2 & 1 \\ 0 & \boxed{1} & 2 \\ 0 & 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} 0 & \boxed{1} & -5 & 2 \\ 0 & 0 & 0 & \boxed{1} \\ 0 & 0 & 0 & 0 \end{bmatrix} $$
None of the matrices above are in *reduced* row echelon form. For example, in the first matrix none of the entries above the second and third leading entries are zero; they are 9, 3, and 5. The following matrices are in reduced row echelon form. The leading entries are marked:
$$ \begin{bmatrix} \boxed{1} & 3 & 0 & 8 \\ 0 & 0 & \boxed{1} & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} \boxed{1} & 0 & 2 & 0 \\ 0 & \boxed{1} & 3 & 0 \\ 0 & 0 & 0 & \boxed{1} \end{bmatrix} \qquad \begin{bmatrix} \boxed{1} & 0 & 3 \\ 0 & \boxed{1} & -2 \\ 0 & 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} 0 & \boxed{1} & 2 & 0 \\ 0 & 0 & 0 & \boxed{1} \\ 0 & 0 & 0 & 0 \end{bmatrix} $$

:::

The procedure we will describe to find a reduced row echelon form of a matrix is called *{index:Gauss–Jordan elimination}*. The first part of it, which obtains a row echelon form, is called *{index:Gaussian elimination}* or *{index:row reduction}*. For some problems, a row echelon form is sufficient, and it is a bit less work to only do this first part.

To attain the row echelon form we work systematically. We go column by column, starting at the first column. We find the topmost entry in the first column that is not zero, and we call it the *{index:pivot}*. If there is no nonzero entry we move to the next column. We swap rows to put the row with the pivot as the first row. We divide the first row by the pivot to make the pivot entry be a 1. Now look at all the rows below and subtract the correct multiple of the pivot row so that all the entries below the pivot become zero.

After this procedure we forget that we had a first row (it is now fixed), and we forget about the column with the pivot and all the preceding zero columns. Below the pivot row, all the entries in these columns are just zero. Then we focus on the smaller matrix and we repeat the steps above.

It is best shown by example, so let us go back to the example from the beginning of the section. We keep the vertical line in the matrix, even though the procedure works on any matrix, not just an augmented matrix. We start with the first column and we locate the pivot, in this case the first entry of the first column.
$$ \left[ \begin{array}{ccc|c} \boxed{2} & 2 & 2 & 2 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{array} \right] $$
We multiply the first row by ${1}/{2}$.
$$ \left[ \begin{array}{ccc|c} \boxed{1} & 1 & 1 & 1 \\ 1 & 1 & 3 & 5 \\ 1 & 4 & 1 & 10 \end{array} \right] $$
We subtract the first row from the second and third row (two elementary operations).
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 2 & 4 \\ 0 & 3 & 0 & 9 \end{array} \right] $$
We are done with the first column and the first row for now. We almost pretend the matrix does not have the first column and the first row.
$$ \left[ \begin{array}{ccc|c} * & * & * & * \\ * & 0 & 2 & 4 \\ * & 3 & 0 & 9 \end{array} \right] $$
OK, look at the second column, and notice that now the pivot is in the third row.
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 2 & 4 \\ 0 & \boxed{3} & 0 & 9 \end{array} \right] $$
We swap rows.
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & \boxed{3} & 0 & 9 \\ 0 & 0 & 2 & 4 \end{array} \right] $$
And we divide the pivot row by 3.
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & \boxed{1} & 0 & 3 \\ 0 & 0 & 2 & 4 \end{array} \right] $$
We do not need to subtract anything as everything below the pivot is already zero. We move on. We again start ignoring the second row and second column and focus on
$$ \left[ \begin{array}{ccc|c} * & * & * & * \\ * & * & * & * \\ * & * & 2 & 4 \end{array} \right] . $$
We find the pivot, then divide that row by 2:
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & \boxed{2} & 4 \end{array} \right] \qquad \to \qquad \left[ \begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{array} \right] . $$
The matrix is now in row echelon form.

The equation corresponding to the last row is $x_3 = 2$. We know $x_3$ and we could substitute it into the first two equations to get equations for $x_1$ and $x_2$. Then we could do the same thing with $x_2$, until we solve for all 3 variables. This procedure is called *{index:backsubstitution}* and we can achieve it via elementary operations. We start from the lowest pivot (leading entry in the row echelon form) and subtract the right multiple from the row above to make all the entries above this pivot zero. Then we move to the next pivot and so on. After we are done, we will have a matrix in reduced row echelon form.

We continue our example. Subtract the last row from the first to get
$$ \left[ \begin{array}{ccc|c} 1 & 1 & 0 & -1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{array} \right] . $$
The entry above the pivot in the second row is already zero. So we move onto the next pivot, the one in the second row. We subtract this row from the top row to get
$$ \left[ \begin{array}{ccc|c} 1 & 0 & 0 & -4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 2 \end{array} \right] . $$
The matrix is in reduced row echelon form.

If we now write down the equations for $x_1,x_2,x_3$, we find
$$ x_1 = -4, \qquad x_2 = 3, \qquad x_3 = 2 . $$
In other words, we have solved the system.

## Non-unique solutions and inconsistent systems

It is possible that the solution of a linear system of equations is not unique, or that no solution exists. Suppose for a moment that the row echelon form we found was
$$ \left[ \begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{array} \right] . $$
Then we have an equation $0=1$ coming from the last row. That is impossible, and the equations are what we call *{index:inconsistent}*. There is no solution to $A \vec{x} = \vec{b}$.

On the other hand, if we find a row echelon form
$$ \left[ \begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 0 \end{array} \right] , $$
then there is no issue with finding solutions. In fact, we will find way too many. Let us continue with backsubstitution (subtracting 3 times the third row from the first) to find the reduced row echelon form and let’s mark the pivots.
$$ \left[ \begin{array}{ccc|c} \boxed{1} & 2 & 0 & -5 \\ 0 & 0 & \boxed{1} & 3 \\ 0 & 0 & 0 & 0 \end{array} \right] $$
The last row is all zeros; it just says $0=0$ and we ignore it. The two remaining equations are
$$ x_1 + 2 x_2 = -5 , \qquad x_3 = 3 . $$
Let us solve for the variables that corresponded to the pivots, that is, $x_1$ and $x_3$ as there was a pivot in the first column and in the third column:
$$ \begin{align*} & x_1 = - 2 x_2 -5 , \\ & x_3 = 3 . \end{align*} $$
The variable $x_2$ can be anything you wish, and we still get a solution. The $x_2$ is called a *{index:free variable}*. There are infinitely many solutions, one for every choice of $x_2$. If we pick $x_2=0$, then $x_1 = -5$, and $x_3 = 3$ give a solution. But we also get a solution by picking say $x_2 = 1$, in which case $x_1 = -7$ and $x_3 = 3$, or by picking $x_2 = -5$ in which case $x_1 = 5$ and $x_3 = 3$.

The general idea is that if any row has all zeros in the columns corresponding to the variables, but a nonzero entry in the column corresponding to the right-hand side $\vec{b}$, then the system is inconsistent and has no solutions. In other words, the system is inconsistent if you find a pivot on the right side of the vertical line drawn in the augmented matrix. Otherwise, the system is *{index:consistent}*, and at least one solution exists.

Suppose the system is consistent (at least one solution exists):

(i) If every column corresponding to a variable has a pivot element, then the solution is unique.
(ii) If there are columns corresponding to variables with no pivot, then those are *free variables* that can be chosen arbitrarily, and there are infinitely many solutions.

When $\vec{b} = \vec{0}$, we have a so-called *{index:homogeneous matrix equation}*
$$ A \vec{x} = \vec{0} . $$
There is no need to write an augmented matrix in this case. As the elementary operations do not do anything to a zero column, it always stays a zero column. Moreover, $A \vec{x} = \vec{0}$ always has at least one solution, namely $\vec{x} = \vec{0}$. Such a system is always consistent. It may have other solutions: If we find any free variables, then we get infinitely many solutions.

The set of solutions of $A \vec{x} = \vec{0}$ comes up quite often so people give it a name. It is called the *{index:nullspace}* or the *{index:kernel}* of $A$. One place where the kernel comes up is invertibility of a square matrix $A$. If the kernel of $A$ contains a nonzero vector, then it contains infinitely many vectors (there was a free variable). But then it is impossible to invert $\vec{0}$, since infinitely many vectors go to $\vec{0}$, so there is no unique vector that $A$ takes to $\vec{0}$. So if the kernel is nontrivial, that is, if there are any nonzero vectors in the kernel, in other words, if there are any free variables, or in yet other words, if the row echelon form of $A$ has columns without pivots, then $A$ is not invertible. We will return to this idea later.

## Linear independence and rank

If rows of a matrix correspond to equations, it may be good to find out how many equations we really need to find the same set of solutions. Similarly, if we find a number of solutions to a linear equation $A \vec{x} = \vec{0}$, we may ask if we found enough so that all other solutions can be formed out of the given set. The concept we want is that of linear independence. That same concept is useful for differential equations, for example in [chapter 2](ref:2#ho-chapter).

Given row or column vectors $\vec{y}_1, \vec{y}_2, \ldots, \vec{y}_n$, a *{index:linear combination}* is an expression of the form
$$ \alpha_1 \vec{y}_1 + \alpha_2 \vec{y}_2 + \cdots + \alpha_n \vec{y}_n , $$
where $\alpha_1, \alpha_2, \ldots, \alpha_n$ are all scalars. For example, $3 \vec{y}_1 + \vec{y}_2 - 5 \vec{y}_3$ is a linear combination of $\vec{y}_1$, $\vec{y}_2$, and $\vec{y}_3$.

We have seen linear combinations before. The expression
$$ A \vec{x} $$
is a linear combination of the columns of $A$, while
$$ \vec{x}^T A = (A^T \vec{x})^T $$
is a linear combination of the rows of $A$.

The way linear combinations come up in our study of differential equations is similar to the following computation. Suppose that $\vec{x}_1$, $\vec{x}_2$, …, $\vec{x}_n$ are solutions to $A \vec{x}_1 = \vec{0}$, $A \vec{x}_2 = \vec{0}$, …, $A \vec{x}_n = \vec{0}$. Then the linear combination
$$ \vec{y} = \alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + \cdots + \alpha_n \vec{x}_n $$
is a solution to $A \vec{y} = \vec{0}$:
$$ \begin{gather*} A \vec{y} = A (\alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + \cdots + \alpha_n \vec{x}_n ) = \\ = \alpha_1 A \vec{x}_1 + \alpha_2 A \vec{x}_2 + \cdots + \alpha_n A \vec{x}_n = \alpha_1 \vec{0} + \alpha_2 \vec{0} + \cdots + \alpha_n \vec{0} = \vec{0} . \end{gather*} $$

So if we find enough solutions, we have all solutions. The question is, when did we find enough of them?

We say the vectors $\vec{y}_1$, $\vec{y}_2$, …, $\vec{y}_n$ are *{index:linearly independent}* if the only solution to
$$ \alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + \cdots + \alpha_n \vec{x}_n = \vec{0} $$
is $\alpha_1 = \alpha_2 = \cdots = \alpha_n = 0$. Otherwise, we say the vectors are *{index:linearly dependent}*.

For example, the vectors $\left[ \begin{smallmatrix} 1 \\ 2 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 0 \\ 1 \end{smallmatrix} \right]$ are linearly independent. Let’s try:
$$ \alpha_1 \begin{bmatrix} 1 \\ 2 \end{bmatrix} + \alpha_2 \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} \alpha_1 \\ 2 \alpha_1 + \alpha_2 \end{bmatrix} = \vec{0} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} . $$
So $\alpha_1 = 0$, and then it is clear that $\alpha_2 = 0$ as well. In other words, the two vectors are linearly independent.

If a set of vectors is linearly dependent, that is, some of the $\alpha_j$s are nonzero, then we can solve for one vector in terms of the others. Suppose $\alpha_1 \neq 0$. Since $\alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + \cdots + \alpha_n \vec{x}_n = \vec{0}$, then
$$ \vec{x}_1 = \frac{-\alpha_2}{\alpha_1} \vec{x}_2 - \frac{-\alpha_3}{\alpha_1} \vec{x}_3 + \cdots + \frac{-\alpha_n}{\alpha_1} \vec{x}_n . $$
For example,
$$ 2 \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} -4 \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} + 2 \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} , $$
and so
$$ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} = 2 \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} - \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} . $$

You may have noticed that solving for those $\alpha_j$s is just solving linear equations, and so you may not be surprised that to check if a set of vectors is linearly independent we use row reduction.

Given a set of vectors, we may not be interested in just finding if they are linearly independent or not, we may be interested in finding a linearly independent subset. Or perhaps we may want to find some other vectors that give the same linear combinations and are linearly independent. The way to figure this out is to form a matrix out of our vectors. If we have row vectors we consider them as rows of a matrix. If we have column vectors we consider them columns of a matrix. The set of all linear combinations of a set of vectors is called their *{index:span}*.
$$ \operatorname{span} \bigl\{ \vec{x}_1, \vec{x}_2 , \ldots , \vec{x}_n \bigr\} = \bigl\{ \text{Set of all linear combinations of $\vec{x}_1, \vec{x}_2 , \ldots , \vec{x}_n$} \bigr\} . $$

Given a matrix $A$, the maximal number of linearly independent rows is called the *{index:rank}* of $A$, and we write “$\operatorname{rank} A$” for the rank. For example,
$$ \operatorname{rank} \begin{bmatrix} 1 & 1 & 1 \\ 2 & 2 & 2 \\ -1 & -1 & -1 \end{bmatrix} = 1 . $$
The second and third row are multiples of the first one. We cannot choose more than one row and still have a linearly independent set. But what is
$$ \operatorname{rank} \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \quad = \quad ? $$
That seems to be a tougher question to answer. The first two rows are linearly independent (neither is a multiple of the other), so the rank is at least two. If we would set up the equations for the $\alpha_1$, $\alpha_2$, and $\alpha_3$, we would find a system with infinitely many solutions. One solution is
$$ \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} -2 \begin{bmatrix} 4 & 5 & 6 \end{bmatrix} + \begin{bmatrix} 7 & 8 & 9 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 \end{bmatrix} . $$
So the set of all three rows is linearly dependent, the rank cannot be 3. Therefore the rank is 2.

But how can we do this in a more systematic way? We find the row echelon form!
$$ \text{Row echelon form of} \quad \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \quad \text{is} \quad \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix} . $$
The elementary row operations do not change the set of linear combinations of the rows (that was one of the main reasons for defining them as they were). In other words, the span of the rows of the $A$ is the same as the span of the rows of the row echelon form of $A$. In particular, the number of linearly independent rows is the same. And in the row echelon form, all nonzero rows are linearly independent. This is not hard to see. Consider the two nonzero rows in the example above. Suppose we tried to solve for the $\alpha_1$ and $\alpha_2$ in
$$ \alpha_1 \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} + \alpha_2 \begin{bmatrix} 0 & 1 & 2 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 \end{bmatrix} . $$
Since the first column of the row echelon matrix has zeros except in the first row, it follows that $\alpha_1 = 0$. Using that $\alpha_1=0$ and looking at the second column, we find $\alpha_2=0$. We only have two nonzero rows, and they are linearly independent, so the rank of the matrix is 2.

The span of the rows is called the *{index:row space}*. The row space of $A$ and the row echelon form of $A$ are the same. In the example,
$$ \begin{split} \text{row space of } \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} & = \operatorname{span} \left\{ \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} , \begin{bmatrix} 4 & 5 & 6 \end{bmatrix} , \begin{bmatrix} 7 & 8 & 9 \end{bmatrix} \right\} \\ & = \operatorname{span} \left\{ \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} , \begin{bmatrix} 0 & 1 & 2 \end{bmatrix} \right\} . \end{split} $$

Similarly to row space, the span of columns is called the *{index:column space}*.
$$ \text{column space of } \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} = \operatorname{span} \left\{ \begin{bmatrix} 1 \\ 4 \\ 7 \end{bmatrix} , \begin{bmatrix} 2 \\ 5 \\ 8 \end{bmatrix} , \begin{bmatrix} 3 \\ 6 \\ 9 \end{bmatrix} \right\} . $$

So it may also be good to find the number of linearly independent columns of $A$. One way to do that is to find the number of linearly independent rows of $A^T$. It is a tremendously useful fact that the number of linearly independent columns is always the same as the number of linearly independent rows:

:::theorem {thm:theorem-A-3-1} Theorem A.3.1
$\operatorname{rank} A = \operatorname{rank} A^T$
:::

In particular, to find a set of linearly independent columns we need to look at where the pivots were. If you recall above, when solving $A \vec{x} = \vec{0}$ the key was finding the pivots. Any non-pivot columns corresponded to free variables. That means we can solve for the non-pivot columns in terms of the pivot columns. Let’s see an example. First we reduce some random matrix:
$$ \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} . $$
We find a pivot and reduce the rows below:
$$ \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} \to \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 0 & 0 & -1 & -2 \\ 3 & 6 & 7 & 8 \end{bmatrix} \to \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 0 & 0 & -1 & -2 \\ 0 & 0 & -2 & -4 \end{bmatrix} . $$
We find the next pivot, make it one, and rinse and repeat:
$$ \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 0 & 0 & \boxed{-1} & -2 \\ 0 & 0 & -2 & -4 \end{bmatrix} \to \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 0 & 0 & \boxed{1} & 2 \\ 0 & 0 & -2 & -4 \end{bmatrix} \to \begin{bmatrix} \boxed{1} & 2 & 3 & 4 \\ 0 & 0 & \boxed{1} & 2 \\ 0 & 0 & 0 & 0 \end{bmatrix} . $$
The final matrix is the row echelon form of the matrix. Consider the pivots that we marked. The pivot columns are the first and the third column. All other columns correspond to free variables when solving $A \vec{x} = \vec{0}$, so all other columns can be solved in terms of the first and the third column. In other words
$$ \text{column space of } \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} = \operatorname{span} \left\{ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} , \begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix} , \begin{bmatrix} 3 \\ 5 \\ 7 \end{bmatrix} , \begin{bmatrix} 4 \\ 6 \\ 8 \end{bmatrix} \right\} = \operatorname{span} \left\{ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} , \begin{bmatrix} 3 \\ 5 \\ 7 \end{bmatrix} \right\} . $$
We could perhaps use another pair of columns to get the same span, but the first and the third are guaranteed to work because they are pivot columns.

The discussion above could be expanded into a proof of the theorem if we wanted. As each nonzero row in the row echelon form contains a pivot, then the rank is the number of pivots, which is the same as the maximal number of linearly independent columns.

The idea also works in reverse. Suppose we have a bunch of column vectors and we just need to find a linearly independent set. For example, suppose we started with the vectors
$$ \vec{v}_1 = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} , \quad \vec{v}_2 = \begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix} , \quad \vec{v}_3 = \begin{bmatrix} 3 \\ 5 \\ 7 \end{bmatrix} , \quad \vec{v}_4 = \begin{bmatrix} 4 \\ 6 \\ 8 \end{bmatrix} . $$
These vectors are not linearly independent as we saw above. In particular, the span of $\vec{v}_1$ and $\vec{v}_3$ is the same as the span of all four of the vectors. So $\vec{v}_2$ and $\vec{v}_4$ can both be written as linear combinations of $\vec{v}_1$ and $\vec{v}_3$. A common thing that comes up in practice is that one gets a set of vectors whose span is the set of solutions of some problem. But perhaps we get way too many vectors, and we want to simplify. For example above, all vectors in the span of $\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4$ can be written $\alpha_1 \vec{v}_1 + \alpha_2 \vec{v}_2 + \alpha_3 \vec{v}_3 + \alpha_4 \vec{v}_4$ for some numbers $\alpha_1,\alpha_2,\alpha_3,\alpha_4$. But it is also true that every such vector can be written as $a \vec{v}_1 + b \vec{v}_3$ for two numbers $a$ and $b$. And one has to admit, that looks much simpler. Moreover, these numbers $a$ and $b$ are unique. More on that in the next section.

To find this linearly independent set, we simply take our vectors and form the matrix $[ \vec{v}_1 ~ \vec{v}_2 ~ \vec{v}_3 ~ \vec{v}_4 ]$, that is, the matrix
$$ \begin{bmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 5 & 6 \\ 3 & 6 & 7 & 8 \end{bmatrix} . $$
We crank up the row-reduction machine, feed this matrix into it, find the pivot columns, and pick those. In this case, $\vec{v}_1$ and $\vec{v}_3$.

## Computing the inverse

If the matrix $A$ is square and there exists a unique solution $\vec{x}$ to $A \vec{x} = \vec{b}$ for any $\vec{b}$ (there are no free variables), then $A$ is invertible. This is equivalent to the $n \times n$ matrix $A$ being of rank $n$.

In particular, if $A \vec{x} = \vec{b}$ then $\vec{x} = A^{-1} \vec{b}$. Now we just need to compute what $A^{-1}$ is. We can surely do elimination every time we want to find $A^{-1} \vec{b}$, but that would be ridiculous. The mapping $A^{-1}$ is linear and hence given by a matrix, and we have seen that to figure out the matrix we just need to find where $A^{-1}$ takes the standard basis vectors $\vec{e}_1$, $\vec{e}_2$, …, $\vec{e}_n$.

That is, to find the first column of $A^{-1}$, we solve $A \vec{x} = \vec{e}_1$, because then $A^{-1} \vec{e}_1 = \vec{x}$. To find the second column of $A^{-1}$, we solve $A \vec{x} = \vec{e}_2$. And so on. It is really just $n$ eliminations that we need to do. But it gets even easier. If you think about it, the elimination is the same for everything on the left side of the augmented matrix. Doing $n$ eliminations separately, we would redo most of the computations. Best is to do all at once.

Therefore, to find the inverse of $A$, we write an $n \times 2n$ augmented matrix $[ \,A ~|~ I\, ]$, where $I$ is the identity matrix, whose columns are precisely the standard basis vectors. We then perform row reduction until we arrive at the reduced row echelon form. If $A$ is invertible, then pivots can be found in every column of $A$, and so the reduced row echelon form of $[ \,A ~|~ I\, ]$ looks like $[ \,I ~|~ A^{-1}\, ]$. We then just read off the inverse $A^{-1}$. If you do not find a pivot in every one of the first $n$ columns of the augmented matrix, then $A$ is not invertible.

This is best seen by example. Suppose we wish to invert the matrix
$$ \begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 1 \\ 3 & 1 & 0 \end{bmatrix} . $$
We write the augmented matrix and we start reducing:
$$ \begin{align*} & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 3 & 1 & 0 & 0\\ 2 & 0 & 1 & 0 & 1 & 0 \\ 3 & 1 & 0 & 0 & 0 & 1 \end{array} \right] \to & & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 3 & 1 & 0 & 0\\ 0 & -4 & -5 & -2 & 1 & 0 \\ 0 & -5 & -9 & -3 & 0 & 1 \end{array} \right] \to \\ \to & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 3 & 1 & 0 & 0\\ 0 & \boxed{1} & {5}/{4} & {1}/{2} & {-1}/{4} & 0 \\ 0 & -5 & -9 & -3 & 0 & 1 \end{array} \right] \to & & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 3 & 1 & 0 & 0\\ 0 & \boxed{1} & {5}/{4} & {1}/{2} & {-1}/{4} & 0 \\ 0 & 0 & {-11}/{4} & {-1}/{2} & {-5}/{4} & 1 \end{array} \right] \to \\ \to & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 3 & 1 & 0 & 0\\ 0 & \boxed{1} & {5}/{4} & {1}/{2} & {-1}/{4} & 0 \\ 0 & 0 & \boxed{1} & {2}/{11} & {5}/{11} & {-4}/{11} \end{array} \right] \to & & \left[ \begin{array}{ccc|ccc} \boxed{1} & 2 & 0 & {5}/{11} & {-15}/{11} & {12}/{11} \\ 0 & \boxed{1} & 0 & {3}/{11} & {-9}/{11} & {5}/{11} \\ 0 & 0 & \boxed{1} & {2}/{11} & {5}/{11} & {-4}/{11} \end{array} \right] \to \\ \to & \left[ \begin{array}{ccc|ccc} \boxed{1} & 0 & 0 & {-1}/{11} & {3}/{11} & {2}/{11} \\ 0 & \boxed{1} & 0 & {3}/{11} & {-9}/{11} & {5}/{11} \\ 0 & 0 & \boxed{1} & {2}/{11} & {5}/{11} & {-4}/{11} \end{array} \right] . \end{align*} $$
So
$$ {\begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 1 \\ 3 & 1 & 0 \end{bmatrix}}^{-1} = \begin{bmatrix} {-1}/{11} & {3}/{11} & {2}/{11} \\ {3}/{11} & {-9}/{11} & {5}/{11} \\ {2}/{11} & {5}/{11} & {-4}/{11} \end{bmatrix} . $$
Not too terrible, no? Perhaps harder than inverting a $2 \times 2$ matrix for which we had a simple formula, but not too bad. In practice, this is done efficiently by a computer.

## Exercises

:::exercise {exercise-A-3-001} number=A.3.1 answered=no src=ap-linear-algebra.tex:4066
PROBLEM:
Compute the reduced row echelon form for the following matrices:

a) $\begin{bmatrix} 1 & 3 & 1 \\ 0 & 1 & 1 \end{bmatrix}$
b) $\begin{bmatrix} 3 & 3 \\ 6 & -3 \end{bmatrix}$
c) $\begin{bmatrix} 3 & 6 \\ -2 & -3 \end{bmatrix}$
d) $\begin{bmatrix} 6 & 6 & 7 & 7 \\ 1 & 1 & 0 & 1 \end{bmatrix}$
e) $\begin{bmatrix} 9 & 3 & 0 & 2 \\ 8 & 6 & 3 & 6 \\ 7 & 9 & 7 & 9 \end{bmatrix}$
f) $\begin{bmatrix} 2 & 1 & 3 & -3 \\ 6 & 0 & 0 & -1 \\ -2 & 4 & 4 & 3 \end{bmatrix}$
g) $\begin{bmatrix} 6 & 6 & 5 \\ 0 & -2 & 2 \\ 6 & 5 & 6 \end{bmatrix}$
h) $\begin{bmatrix} 0 & 2 & 0 & -1 \\ 6 & 6 & -3 & 3 \\ 6 & 2 & -3 & 5 \end{bmatrix}$

:::

:::exercise {exercise-A-3-002} number=A.3.2 answered=no src=ap-linear-algebra.tex:4117
PROBLEM:
Compute the inverse of the given matrices

a) $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$
b) $\begin{bmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 1 \end{bmatrix}$
c) $\begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 1 \\ 0 & 2 & 1 \end{bmatrix}$

:::

:::exercise {exercise-A-3-003} number=A.3.3 answered=no src=ap-linear-algebra.tex:4141
PROBLEM:
Solve (find all solutions), or show no solution exists

a) $\begin{aligned} 4x_1+3x_2 & = -2 \\ -x_1+\phantom{3} x_2 & = 4 \end{aligned}$
b) $\begin{aligned} x_1+5x_2+3x_3 & = 7 \\ 8x_1+7x_2+8x_3 & = 8 \\ 4x_1+8x_2+6x_3 & = 4 \end{aligned}$
c) $\begin{aligned} 4x_1+8x_2+2x_3 & = 3 \\ -x_1-2x_2+3x_3 & = 1 \\ 4x_1+8x_2 \phantom{{}+3x_3} & = 2 \end{aligned}$
d) $\begin{aligned} x+2y+3z & = 4 \\ 2 x-\phantom{2} y+3z & = 1 \\ 3 x+\phantom{2} y+6z & = 6 \end{aligned}$

:::

:::exercise {exercise-A-3-004} number=A.3.4 answered=no src=ap-linear-algebra.tex:4170
PROBLEM:
By computing the inverse, solve the following systems for $\vec{x}$.

a) $\begin{bmatrix} 4 & 1 \\ -1 & 3 \end{bmatrix} \vec{x} = \begin{bmatrix} 13 \\ 26 \end{bmatrix}$
b) $\begin{bmatrix} 3 & 3 \\ 3 & 4 \end{bmatrix} \vec{x} = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$

:::

:::exercise {exercise-rankmatrix} number=A.3.5 answered=no src=ap-linear-algebra.tex:4188 label=exercise:rankmatrix
PROBLEM:
Compute the rank of the given matrices

a) $\begin{bmatrix} 6 & 3 & 5 \\ 1 & 4 & 1 \\ 7 & 7 & 6 \end{bmatrix}$
b) $\begin{bmatrix} 5 & -2 & -1 \\ 3 & 0 & 6 \\ 2 & 4 & 5 \end{bmatrix}$
c) $\begin{bmatrix} 1 & 2 & 3 \\ -1 & -2 & -3 \\ 2 & 4 & 6 \end{bmatrix}$

:::

:::exercise {exercise-A-3-006} number=A.3.6 answered=no src=ap-linear-algebra.tex:4213
PROBLEM:
For the matrices in [Exercise A.3.5](ref:exercise-rankmatrix), find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).
:::

:::exercise {exercise-A-3-007} number=A.3.7 answered=no src=ap-linear-algebra.tex:4219
PROBLEM:
For the matrices in [Exercise A.3.5](ref:exercise-rankmatrix), find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.
:::

:::exercise {exercise-A-3-008} number=A.3.8 answered=no src=ap-linear-algebra.tex:4225
PROBLEM:
Find a linearly independent subset of the following vectors that has the same span.
$$ \begin{bmatrix} -1 \\ 1 \\ 2 \end{bmatrix} , \quad \begin{bmatrix} 2 \\ -2 \\ -4 \end{bmatrix} , \quad \begin{bmatrix} -2 \\ 4 \\ 1 \end{bmatrix} , \quad \begin{bmatrix} -1 \\ 3 \\ -2 \end{bmatrix} $$

:::

:::exercise {exercise-A-3-101} number=A.3.101 answered=yes src=ap-linear-algebra.tex:4249
PROBLEM:
Compute the reduced row echelon form for the following matrices:

a) $\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$
b) $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
c) $\begin{bmatrix} 1 & 1 \\ -2 & -2 \end{bmatrix}$
d) $\begin{bmatrix} 1 & -3 & 1 \\ 4 & 6 & -2 \\ -2 & 6 & -2 \end{bmatrix}$
e) $\begin{bmatrix} 2 & 2 & 5 & 2 \\ 1 & -2 & 4 & -1 \\ 0 & 3 & 1 & -2 \end{bmatrix}$
f) $\begin{bmatrix} -2 & 6 & 4 & 3 \\ 6 & 0 & -3 & 0 \\ 4 & 2 & -1 & 1 \end{bmatrix}$
g) $\begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$
h) $\begin{bmatrix} 1 & 2 & 3 & 3 \\ 1 & 2 & 3 & 5 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$ b) $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ c) $\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$ d) $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & -1/3 \\ 0 & 0 & 0 \end{bmatrix}$ e) $\begin{bmatrix} 1 & 0 & 0 & 77/15 \\ 0 & 1 & 0 & -2/15 \\ 0 & 0 & 1 & -8/5 \end{bmatrix}$ f) $\begin{bmatrix} 1 & 0 & -1/2 & 0 \\ 0 & 1 & 1/2 & 1/2 \\ 0 & 0 & 0 & 0 \end{bmatrix}$ g) $\begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$ h) $\begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$
:::

:::exercise {exercise-A-3-102} number=A.3.102 answered=yes src=ap-linear-algebra.tex:4335
PROBLEM:
Compute the inverse of the given matrices

a) $\begin{bmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
b) $\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix}$
c) $\begin{bmatrix} 2 & 4 & 0 \\ 2 & 2 & 3 \\ 2 & 4 & 1 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ b) $\begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & -1 \\ 1 & -1 & 0 \end{bmatrix}$ c) $\begin{bmatrix} {5}/{2} & 1 & -3 \\ -1 & {-1}/{2} & {3}/{2} \\ -1 & 0 & 1 \end{bmatrix}$
:::

:::exercise {exercise-A-3-103} number=A.3.103 answered=yes src=ap-linear-algebra.tex:4378
PROBLEM:
Solve (find all solutions), or show no solution exists

a) $\begin{aligned} 4x_1+3x_2 & = -1 \\ 5x_1+6x_2 & = 4 \end{aligned}$
b) $\begin{aligned} 5x+6y+5z & = 7 \\ 6x+8y+6z & = -1 \\ 5x+2y+5z & = 2 \end{aligned}$
c) $\begin{aligned} a+\phantom{5}b+\phantom{6}c & = -1 \\ a+5b+6c & = -1 \\ -2a+5b+6c & = 8 \end{aligned}$
d) $\begin{aligned} -2 x_1+2x_2+8x_3 & = 6 \\ x_2+\phantom{8}x_3 & = 2 \\ x_1+4x_2+\phantom{8}x_3 & = 7 \end{aligned}$

SOLUTION:
a) $x_1=-2$, $x_2 = {7}/{3}$ b) no solution c) $a = -3$, $b=10$, $c=-8$ d) $x_3$ is free, $x_1 = -1+3x_3$, $x_2 = 2-x_3$
:::

:::exercise {exercise-A-3-104} number=A.3.104 answered=yes src=ap-linear-algebra.tex:4416
PROBLEM:
By computing the inverse, solve the following systems for $\vec{x}$.

a) $\begin{bmatrix} -1 & 1 \\ 3 & 3 \end{bmatrix} \vec{x} = \begin{bmatrix} 4 \\ 6 \end{bmatrix}$
b) $\begin{bmatrix} 2 & 7 \\ 1 & 6 \end{bmatrix} \vec{x} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$

SOLUTION:
a) $\begin{bmatrix} -1 \\ 3 \end{bmatrix}$ b) $\begin{bmatrix} -3 \\ 1 \end{bmatrix}$
:::

:::exercise {exercise-rankmatrixans} number=A.3.105 answered=yes src=ap-linear-algebra.tex:4438 label=exercise:rankmatrixans
PROBLEM:
Compute the rank of the given matrices

a) $\begin{bmatrix} 7 & -1 & 6 \\ 7 & 7 & 7 \\ 7 & 6 & 2 \end{bmatrix}$
b) $\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 2 & 2 & 2 \end{bmatrix}$
c) $\begin{bmatrix} 0 & 3 & -1 \\ 6 & 3 & 1 \\ 4 & 7 & -1 \end{bmatrix}$

SOLUTION:
a) 3 b) 1 c) 2
:::

:::exercise {exercise-A-3-106} number=A.3.106 answered=yes src=ap-linear-algebra.tex:4466
PROBLEM:
For the matrices in [Exercise A.3.105](ref:exercise-rankmatrixans), find a linearly independent set of row vectors that span the row space (they do not need to be rows of the matrix).
SOLUTION:
a) $\begin{bmatrix} 1 & 0 & 0\end{bmatrix}$, $\begin{bmatrix} 0 & 1 & 0\end{bmatrix}$, $\begin{bmatrix} 0 & 0 & 1\end{bmatrix}$ b) $\begin{bmatrix} 1 & 1 & 1\end{bmatrix}$ c) $\begin{bmatrix} 1 & 0 & {1}/{3}\end{bmatrix}$, $\begin{bmatrix} 0 & 1 & {-1}/{3}\end{bmatrix}$
:::

:::exercise {exercise-A-3-107} number=A.3.107 answered=yes src=ap-linear-algebra.tex:4482
PROBLEM:
For the matrices in [Exercise A.3.105](ref:exercise-rankmatrixans), find a linearly independent set of columns that span the column space. That is, find the pivot columns of the matrices.
SOLUTION:
a) $\begin{bmatrix} 7 \\ 7 \\ 7\end{bmatrix}$, $\begin{bmatrix} -1 \\ 7 \\ 6\end{bmatrix}$, $\begin{bmatrix} 7 \\ 6 \\ 2\end{bmatrix}$ b) $\begin{bmatrix} 1 \\ 1 \\ 2\end{bmatrix}$ c) $\begin{bmatrix} 0 \\ 6 \\ 4\end{bmatrix}$, $\begin{bmatrix} 3 \\ 3 \\ 7\end{bmatrix}$
:::

:::exercise {exercise-A-3-108} number=A.3.108 answered=yes src=ap-linear-algebra.tex:4498
PROBLEM:
Find a linearly independent subset of the following vectors that has the same span.
$$ \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} , \quad \begin{bmatrix} 3 \\ 1 \\ -5 \end{bmatrix} , \quad \begin{bmatrix} 0 \\ 3 \\ -1 \end{bmatrix} , \quad \begin{bmatrix} -3 \\ 2 \\ 4 \end{bmatrix} $$

SOLUTION:
$\begin{bmatrix} 3 \\ 1 \\ -5 \end{bmatrix} , \begin{bmatrix} 0 \\ 3 \\ -1 \end{bmatrix}$
:::

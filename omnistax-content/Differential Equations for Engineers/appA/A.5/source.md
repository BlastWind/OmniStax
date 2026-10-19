# A.5 Inner product and projections {sec:innerproduct-section}

:::note [section-notes]
*Note: 1–2 lectures*
:::

## Inner product and orthogonality

To do basic geometry, we need length, and we need angles. We have already seen the euclidean length, so let us figure out angles. Mostly, we are worried about the right angle^[When Euclid defined angles in his *Elements*, the only angle he ever really defined was the right angle.].

Given two (column) vectors in ${\mathbb{R}}^n$, we define the (standard) *{index:inner product}*{index-entry:standard inner product} as the dot product:
$$ \langle \vec{x} , \vec{y} \rangle = \vec{x} \cdot \vec{y} = \vec{y}^T \vec{x} = x_1 y_1 + x_2 y_2 + \cdots + x_n y_n = \sum_{i=1}^n x_i y_i . $$
Why do we seemingly give a new notation for the dot product ($\langle \vec{x} , \vec{y} \rangle$ instead of just $\vec{x} \cdot \vec{y}$)? Because there are other possible inner products, which are not the dot product, although we will not worry about others here. An inner product can even be defined on spaces of functions, as we do in [chapter 4](ref:4#FS-chapter):
$$ \langle f(t) , g(t) \rangle = \int_{a}^{b} f(t) g(t) \, dt . $$
But we digress.

The inner product satisfies the following rules:

(i) $\langle \vec{x} , \vec{x} \rangle \geq 0$, and $\langle \vec{x} , \vec{x} \rangle = 0$ if and only if $\vec{x} = 0$,
(ii) $\langle \vec{x} , \vec{y} \rangle = \langle \vec{y} , \vec{x} \rangle$,
(iii) $\langle a\vec{x} , \vec{y} \rangle = \langle \vec{x} , a\vec{y} \rangle = a \langle \vec{x} , \vec{y} \rangle$,
(iv) $\langle \vec{x} + \vec{y} , \vec{z} \rangle = \langle \vec{x} , \vec{z} \rangle + \langle \vec{y} , \vec{z} \rangle$ and $\langle \vec{x}, \vec{y} + \vec{z} \rangle = \langle \vec{x} , \vec{y} \rangle + \langle \vec{x} , \vec{z} \rangle$.

Anything that satisfies the properties above can be called an inner product, although in this section we are concerned with the standard inner product in ${\mathbb{R}}^n$.

The standard inner product gives the euclidean length:
$$ \lVert{\vec{x}}\rVert = \sqrt{\langle \vec{x}, \vec{x} \rangle} = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2} . $$
How does it give angles? You may recall a formula for the standard inner product (the dot product) from multivariable calculus in two or three dimensions in terms of the angle $\theta$ between the vectors:
$$ \langle \vec{x}, \vec{y} \rangle = \lVert{\vec{x}}\rVert \lVert{\vec{y}}\rVert \cos \theta. $$
That is, $\theta$ is the angle that $\vec{x}$ and $\vec{y}$ make when they are based at the same point.

In ${\mathbb{R}}^n$ (any dimension), we are simply going to say that $\theta$ from the formula is what the angle is. This makes sense as any two vectors based at the origin lie in a 2-dimensional plane (subspace), and the formula works in 2 dimensions. In fact, one could even talk about angles between functions this way, and we do in [chapter 4](ref:4#FS-chapter), where we talk about orthogonal functions (functions at right angle to each other).

To compute the angle, we solve for $\cos \theta$:
$$ \cos \theta = \frac{\langle \vec{x}, \vec{y} \rangle}{\lVert{\vec{x}}\rVert \lVert{\vec{y}}\rVert} . $$
Our angles are always in radians. We are computing the cosine of the angle, which is really the best we can do. Given two vectors at an angle $\theta$, we can give the angle as $-\theta$, $2\pi-\theta$, etc. See [Figure A.5](ref:vec-angle-fig). Fortunately, $\cos \theta = \cos (-\theta) = \cos(2\pi - \theta)$. If we solve for $\theta$ using the inverse cosine $\cos^{-1}$, we can just decree that $0 \leq \theta \leq \pi$.

> FIGURE {fig:vec-angle-fig} number=A.5 src=../../media/vec-angle.svg
> alt: A diagram with two vectors x and y going from the same point, x going up and to the right, and y going down and to the right. The angle from y to x counterclockwise is marked theta. The angle from x to y clockwise is marked minus theta. The angle from x to y counterclockwise is marked 2 pi minus theta.
> caption: Angle between vectors.

:::example {ex:example-A-5-1} Example A.5.1
Let us compute the angle between the vectors $(3,0)$ and $(1,1)$ in the plane. Compute
$$ \cos \theta = \frac{\bigl\langle (3,0) , (1,1) \bigr\rangle}{\lVert(3,0)\rVert \lVert(1,1)\rVert} = \frac{3 + 0}{3 \sqrt{2}} = \frac{1}{\sqrt{2}} . $$
Therefore $\theta = {\pi}/{4}$.
:::

As we said, the most important angle is the right angle. A right angle is ${\pi}/{2}$ radians, and $\cos ({\pi}/{2}) = 0$, so the formula is particularly easy in this case. We say vectors $\vec{x}$ and $\vec{y}$ are *{index:orthogonal}* if they are at right angles, that is, if
$$ \langle \vec{x} , \vec{y} \rangle = 0 . $$
The vectors $(1,0,0,1)$ and $(1,2,3,-1)$ are orthogonal. So are $(1,1)$ and $(1,-1)$. However, $(1,1)$ and $(1,2)$ are not orthogonal as their inner product is $3$ and not 0.

## Orthogonal projection

A typical application of linear algebra is to take a difficult problem, write everything in the right basis, and in this new basis the problem becomes simple. A particularly useful basis is an orthogonal basis, a basis where all the basis vectors are orthogonal. When we draw a coordinate system in two or three dimensions, we almost always draw our axes as orthogonal to each other.

Generalizing this concept to functions, it is particularly useful in [chapter 4](ref:4#FS-chapter) to express a function using a particular orthogonal basis, the Fourier series.

To express one vector in terms of an orthogonal basis, we need to first *project* one vector onto another. Given a nonzero vector $\vec{v}$, we define the *{index:orthogonal projection}*{index-entry:projection!orthogonal} of $\vec{w}$ onto $\vec{v}$ as
$$ \operatorname{proj}_{\vec{v}}(\vec{w}) = \left( \frac{\langle \vec{w} , \vec{v} \rangle}{ \langle \vec{v} , \vec{v} \rangle} \right) \vec{v} . $$
For the geometric idea, see [Figure A.6](ref:vec-orthoproj-fig). That is, we find the “shadow of $\vec{w}$” on the line spanned by $\vec{v}$ if the direction of the sun’s rays were exactly perpendicular to the line. Another way of thinking about it is that the tip of the arrow of $\operatorname{proj}_{\vec{v}}(\vec{w})$ is the closest point on the line spanned by $\vec{v}$ to the tip of the arrow of $\vec{w}$. In terms of euclidean distance, $\vec{u} = \operatorname{proj}_{\vec{v}}(\vec{w})$ minimizes the distance $\lVert \vec{w} - \vec{u} \rVert$ among all vectors $\vec{u}$ that are multiples of $\vec{v}$. Because of this, this projection comes up often in applied mathematics in all sorts of contexts where we cannot solve a problem exactly: We cannot always solve “Find $\vec{w}$ as a multiple of $\vec{v}$,” but $\operatorname{proj}_{\vec{v}}(\vec{w})$ is the best “solution.”

> FIGURE {fig:vec-orthoproj-fig} number=A.6 src=../../media/vec-orthoproj.svg
> alt: Diagram showing a vector v in light gray and a vector w making an angle of theta with v and originating at the same point is marked in dark bold. A right triangle with the right angle on the line given by the vector v is shown and the corresponding smaller vector in the direction of v and marked as proj sub v of w is shown in dark bold.
> caption: Orthogonal projection.

The formula follows from basic trigonometry. If $\theta$ is acute, the length of $\operatorname{proj}_{\vec{v}}(\vec{w})$ should be $\cos \theta$ times the length of $\vec{w}$, that is, $(\cos \theta)\lVert\vec{w}\rVert$. We take the unit vector in the direction of $\vec{v}$, that is, $\frac{\vec{v}}{\lVert \vec{v} \rVert}$ and we multiply it by the length of the projection. In other words,
$$ \operatorname{proj}_{\vec{v}}(\vec{w}) = (\cos \theta) \lVert \vec{w} \rVert \frac{\vec{v}}{\lVert \vec{v} \rVert} = \frac{(\cos \theta) \lVert \vec{w} \rVert \lVert \vec{v} \rVert}{ {\lVert \vec{v} \rVert}^2 } \vec{v} = \frac{\langle \vec{w}, \vec{v} \rangle}{ \langle \vec{v}, \vec{v} \rangle } \vec{v} . $$
The computation works for obtuse $\theta$ ($\cos \theta < 0$) as we need to also switch direction.

:::example {ex:example-A-5-2} Example A.5.2
Suppose we wish to project the vector $(3,2,1)$ onto the vector $(1,2,3)$. Compute
$$ \begin{split} \operatorname{proj}_{(1,2,3)} \bigl( (3,2,1) \bigr) = \frac{\langle (3,2,1) , (1,2,3) \rangle}{\langle (1,2,3) , (1,2,3) \rangle} (1,2,3) & = \frac{3 \cdot 1 + 2 \cdot 2 + 1 \cdot 3}{ 1 \cdot 1 + 2 \cdot 2 + 3 \cdot 3} (1,2,3) \\ & = \frac{10}{14} (1,2,3) = \left(\frac{5}{7},\frac{10}{7},\frac{15}{7}\right) . \end{split} $$

We double check that the projection is orthogonal. That is, $\vec{w}-\operatorname{proj}_{\vec{v}}(\vec{w})$ ought to be orthogonal to $\vec{v}$. See the right angle in [Figure A.6](ref:vec-orthoproj-fig). In other words,
$$ (3,2,1) - \operatorname{proj}_{(1,2,3)} \bigl( (3,2,1) \bigr) = \left(3-\frac{5}{7},2-\frac{10}{7},1-\frac{15}{7}\right) = \left(\frac{16}{7},\frac{4}{7},\frac{-8}{7}\right) $$
ought to be orthogonal to $(1,2,3)$. The inner product had better be zero:
$$ \left\langle \left(\frac{16}{7},\frac{4}{7},\frac{-8}{7}\right) , (1,2,3) \right\rangle = \frac{16}{7} \cdot 1 + \frac{4}{7} \cdot 2 -\frac{8}{7} \cdot 3 = 0 . $$

:::

## Orthogonal basis

As we said, a basis $\vec{v}_1,\vec{v}_2,\ldots,\vec{v}_n$ is an *{index:orthogonal basis}* if all vectors in the basis are orthogonal to each other, that is, if
$$ \langle \vec{v}_j , \vec{v}_k \rangle = 0 $$
for all choices of $j$ and $k$ where $j \neq k$ (a nonzero vector cannot be orthogonal to itself). A basis is furthermore called an *{index:orthonormal basis}* if all the vectors in a basis are also unit vectors, that is, if all the vectors have magnitude 1. For example, the standard basis $\{ (1,0,0), (0,1,0), (0,0,1) \}$ is an orthonormal basis of ${\mathbb{R}}^3$: Any pair is orthogonal, and each vector is of unit magnitude.

The reason why we are interested in orthogonal (or orthonormal) bases is that they make it really simple to represent a vector (or a projection onto a subspace) in the basis. The formula for the orthogonal projection onto a vector gives us the coefficients. In [chapter 4](ref:4#FS-chapter), we use the same idea by finding the correct orthogonal basis for the set of solutions of a differential equation. We are then able to find any particular solution by simply applying the orthogonal projection formula, which is just a couple of inner products.

Let us come back to linear algebra. Consider a subspace $S$ and an orthogonal basis $\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n$ for $S$. We wish to express some vector $\vec{x}$ in terms of this basis. If $\vec{x}$ is not in the span of this basis (when $\vec{x}$ is not in $S$), then of course it is not possible, but the following formula gives us at least the orthogonal projection onto the subspace $S$, or in other words, the best approximation to $\vec{x}$ in the subspace—the vector in $S$ closest to $\vec{x}$.

First suppose that $\vec{x}$ is in the span. Then it is the sum of the orthogonal projections:
$$ \vec{x} = \operatorname{proj}_{\vec{v}_1} ( \vec{x} ) + \operatorname{proj}_{\vec{v}_2} ( \vec{x} ) + \cdots + \operatorname{proj}_{\vec{v}_n} ( \vec{x} ) = \frac{\langle \vec{x}, \vec{v}_1 \rangle}{ \langle \vec{v}_1, \vec{v}_1 \rangle } \vec{v}_1 + \frac{\langle \vec{x}, \vec{v}_2 \rangle}{ \langle \vec{v}_2, \vec{v}_2 \rangle } \vec{v}_2 + \cdots + \frac{\langle \vec{x}, \vec{v}_n \rangle}{ \langle \vec{v}_n, \vec{v}_n \rangle } \vec{v}_n . $$
In other words, if we want to write $\vec{x} = a_1 \vec{v}_1 + a_2 \vec{v}_2 + \cdots + a_n \vec{v}_n$, then
$$ a_1 = \frac{\langle \vec{x}, \vec{v}_1 \rangle}{ \langle \vec{v}_1, \vec{v}_1 \rangle } , \quad a_2 = \frac{\langle \vec{x}, \vec{v}_2 \rangle}{ \langle \vec{v}_2, \vec{v}_2 \rangle } , \quad \ldots , \quad a_n = \frac{\langle \vec{x}, \vec{v}_n \rangle}{ \langle \vec{v}_n, \vec{v}_n \rangle } . $$

Another way to derive this formula is to work in reverse. Suppose that $\vec{x} = a_1 \vec{v}_1 + a_2 \vec{v}_2 + \cdots + a_n \vec{v}_n$. Take an inner product with $\vec{v}_j$, and use the properties of the inner product:
$$ \begin{split} \langle \vec{x} , \vec{v}_j \rangle & = \langle a_1 \vec{v}_1 + a_2 \vec{v}_2 + \cdots + a_n \vec{v}_n , \vec{v}_j \rangle \\ & = a_1 \langle \vec{v}_1 , \vec{v}_j \rangle + a_2 \langle \vec{v}_2 , \vec{v}_j \rangle + \cdots + a_n \langle \vec{v}_n , \vec{v}_j \rangle . \end{split} $$
As the basis is orthogonal, $\langle \vec{v}_k , \vec{v}_j \rangle = 0$ whenever $k \neq j$. That means that only one of the terms, the $j^{\text{th}}$ one, on the right-hand side is nonzero and we get
$$ \langle \vec{x} , \vec{v}_j \rangle = a_j \langle \vec{v}_j , \vec{v}_j \rangle . $$
Solving for $a_j$ we find $a_j = \frac{\langle \vec{x}, \vec{v}_j \rangle}{ \langle \vec{v}_j, \vec{v}_j \rangle }$ as before.

:::example {ex:example-A-5-3} Example A.5.3
The vectors $(1,1)$ and $(1,-1)$ form an orthogonal basis of ${\mathbb{R}}^2$. Suppose we wish to represent $(3,4)$ in terms of this basis, that is, we wish to find $a_1$ and $a_2$ such that
$$ (3,4) = a_1 (1,1) + a_2 (1,-1) . $$
We compute:
$$ a_1 = \frac{\langle (3,4), (1,1) \rangle}{ \langle (1,1), (1,1) \rangle } = \frac{7}{2}, \qquad a_2 = \frac{\langle (3,4), (1,-1) \rangle}{ \langle (1,-1), (1,-1) \rangle } = \frac{-1}{2} . $$
So
$$ (3,4) = \frac{7}{2} (1,1) + \frac{-1}{2} (1,-1) . $$

:::

If the basis is orthonormal rather than orthogonal, then all the denominators are one. It is easy to make a basis orthonormal—divide all the vectors by their size. If you want to decompose many vectors, it may be better to find an orthonormal basis. In the example above, the orthonormal basis we would thus create is
$$ \left( \frac{1}{\sqrt{2}} , \frac{1}{\sqrt{2}} \right) , \quad \left( \frac{1}{\sqrt{2}} , \frac{-1}{\sqrt{2}} \right) . $$
Then the computation would have been
$$ \begin{split} (3,4) & = \left\langle (3,4) , \left( \frac{1}{\sqrt{2}} , \frac{1}{\sqrt{2}} \right) \right\rangle \left( \frac{1}{\sqrt{2}} , \frac{1}{\sqrt{2}} \right) + \left\langle (3,4) , \left( \frac{1}{\sqrt{2}} , \frac{-1}{\sqrt{2}} \right) \right\rangle \left( \frac{1}{\sqrt{2}} , \frac{-1}{\sqrt{2}} \right) \\ & = \frac{7}{\sqrt{2}} \left( \frac{1}{\sqrt{2}} , \frac{1}{\sqrt{2}} \right) + \frac{-1}{\sqrt{2}} \left( \frac{1}{\sqrt{2}} , \frac{-1}{\sqrt{2}} \right) . \end{split} $$

Maybe the example is not so awe inspiring, but given vectors in ${\mathbb{R}}^{20}$ rather than ${\mathbb{R}}^2$, then surely one would much rather do 20 inner products (or 40 if we did not have an orthonormal basis) rather than solving a system of twenty equations in twenty unknowns using row reduction of a $20 \times 21$ matrix.

As we said above, the formula still works even if $\vec{x}$ is not in the subspace, although then it does not get us the vector $\vec{x}$ but its projection. More concretely, suppose that $S$ is a subspace that is the span of $\vec{v}_1,\vec{v}_2,\ldots,\vec{v}_n$ and $\vec{x}$ is any vector. Let $\operatorname{proj}_{S}(\vec{x})$ be the vector in $S$ that is the closest to $\vec{x}$. Then
$$ \operatorname{proj}_{S}(\vec{x}) = \frac{\langle \vec{x}, \vec{v}_1 \rangle}{ \langle \vec{v}_1, \vec{v}_1 \rangle } \vec{v}_1 + \frac{\langle \vec{x}, \vec{v}_2 \rangle}{ \langle \vec{v}_2, \vec{v}_2 \rangle } \vec{v}_2 + \cdots + \frac{\langle \vec{x}, \vec{v}_n \rangle}{ \langle \vec{v}_n, \vec{v}_n \rangle } \vec{v}_n . $$

Of course, if $\vec{x}$ is in $S$, then $\operatorname{proj}_{S}(\vec{x}) = \vec{x}$, as the closest vector in $S$ to $\vec{x}$ is $\vec{x}$ itself. But true utility is obtained when $\vec{x}$ is not in $S$. In much of applied mathematics, we cannot find an exact solution to a problem, but we try to find the best solution out of a small subset (subspace). The partial sums of Fourier series from [chapter 4](ref:4#FS-chapter) are one example. Another example is least square approximation to fit a curve to data. Yet another example is given by the most commonly used numerical methods to solve partial differential equations, the finite element methods.

:::example {ex:example-A-5-4} Example A.5.4
The vectors $(1,2,3)$ and $(3,0,-1)$ are orthogonal, and so they are an orthogonal basis of a subspace $S$:
$$ S = \operatorname{span} \bigl\{ (1,2,3), (3,0,-1) \bigr\} . $$
Let us find the vector in $S$ that is closest to $(2,1,0)$. That is, let us find $\operatorname{proj}_{S}\bigl((2,1,0)\bigr)$.
$$ \begin{split} \operatorname{proj}_{S}\bigl((2,1,0)\bigr) & = \frac{\langle (2,1,0), (1,2,3) \rangle}{ \langle (1,2,3), (1,2,3) \rangle } (1,2,3) + \frac{\langle (2,1,0), (3,0,-1) \rangle}{ \langle (3,0,-1), (3,0,-1) \rangle } (3,0,-1) \\ & = \frac{2}{7} (1,2,3) + \frac{3}{5} (3,0,-1) \\ &= \left( \frac{73}{35} , \frac{4}{7} , \frac{9}{35} \right) . \end{split} $$

:::

## The Gram–Schmidt process

Before leaving orthogonal bases, let us note a procedure for manufacturing them out of any old basis. It may not be difficult to come up with an orthogonal basis for a 2-dimensional subspace, but for a 20-dimensional subspace, it seems a daunting task. Fortunately, the orthogonal projection can be used to “project away” the bits of the vectors that are making them not orthogonal. It is called the *{index:Gram–Schmidt process}*.

We start with a basis of vectors $\vec{v}_1,\vec{v}_2, \ldots, \vec{v}_n$. We construct an orthogonal basis $\vec{w}_1, \vec{w}_2, \ldots, \vec{w}_n$ as follows.
$$ \begin{align*} \vec{w}_1 & = \vec{v}_1 , \\ \vec{w}_2 & = \vec{v}_2 - \operatorname{proj}_{\vec{w}_1}(\vec{v}_2) , \\ \vec{w}_3 & = \vec{v}_3 - \operatorname{proj}_{\vec{w}_1}(\vec{v}_3) - \operatorname{proj}_{\vec{w}_2}(\vec{v}_3) , \\ \vec{w}_4 & = \vec{v}_4 - \operatorname{proj}_{\vec{w}_1}(\vec{v}_4) - \operatorname{proj}_{\vec{w}_2}(\vec{v}_4) - \operatorname{proj}_{\vec{w}_3}(\vec{v}_4) , \\ & \vdots \\ \vec{w}_n & = \vec{v}_n - \operatorname{proj}_{\vec{w}_1}(\vec{v}_n) - \operatorname{proj}_{\vec{w}_2}(\vec{v}_n) - \cdots - \operatorname{proj}_{\vec{w}_{n-1}}(\vec{v}_n) . \end{align*} $$
What we do is at the $k^{\text{th}}$ step, we take $\vec{v}_k$ and we subtract the projection of $\vec{v}_k$ to the subspace spanned by $\vec{w}_1,\vec{w}_2,\ldots,\vec{w}_{k-1}$.

:::example {ex:example-A-5-5} Example A.5.5
Consider the vectors $(1,2,-1)$, and $(0,5,-2)$ and call $S$ the span of the two vectors. Let us find an orthogonal basis of $S$ via the Gram–Schmidt process:
$$ \begin{align*} \vec{w}_1 & = (1,2,-1) , \\ \vec{w}_2 & = (0,5,-2) - \operatorname{proj}_{(1,2,-1)}\bigl((0,5,-2)\bigr) \\ & = (0,5,-2) - \frac{\langle (0,5,-2), (1,2,-1) \rangle}{ \langle (1,2,-1), (1,2,-1) \rangle } (1,2,-1) = (0,5,-2) - 2 (1,2,-1) = (-2,1,0) . \end{align*} $$
So $(1,2,-1)$ and $(-2,1,0)$ span $S$ and are orthogonal. Let us check: $\langle (1,2,-1) , (-2,1,0) \rangle = 0$.

Suppose we wish to find an orthonormal basis, not just an orthogonal one. Well, we simply make the vectors into unit vectors by dividing them by their magnitude. The two vectors making up the orthonormal basis of $S$ are:
$$ \frac{1}{\sqrt{6}} (1,2,-1) = \left( \frac{1}{\sqrt{6}}, \frac{2}{\sqrt{6}}, \frac{-1}{\sqrt{6}} \right) , \qquad \frac{1}{\sqrt{5}} (-2,1,0) = \left( \frac{-2}{\sqrt{5}}, \frac{1}{\sqrt{5}}, 0 \right) . $$

:::

## Exercises

:::exercise {exercise-A-5-001} number=A.5.1 answered=no src=ap-linear-algebra.tex:6005
PROBLEM:
Find the $s$ that makes the following vectors orthogonal: $(1,2,3)$, $(1,1,s)$.
:::

:::exercise {exercise-A-5-002} number=A.5.2 answered=no src=ap-linear-algebra.tex:6010
PROBLEM:
Find the angle $\theta$ between $(1,3,1)$, $(2,1,-1)$.
:::

:::exercise {exercise-A-5-003} number=A.5.3 answered=no src=ap-linear-algebra.tex:6015
PROBLEM:
Given that $\langle \vec{v} , \vec{w} \rangle = 3$ and $\langle \vec{v} , \vec{u} \rangle = -1$ compute

a) $\langle \vec{u} , 2 \vec{v} \rangle$
b) $\langle \vec{v} , 2 \vec{w} + 3 \vec{u} \rangle$
c) $\langle \vec{w} + 3 \vec{u}, \vec{v} \rangle$

:::

:::exercise {exercise-A-5-004} number=A.5.4 answered=no src=ap-linear-algebra.tex:6025
PROBLEM:
Suppose $\vec{v} = (1,1,-1)$. Find

a) $\operatorname{proj}_{\vec{v}}\bigl( (1,0,0) \bigr)$
b) $\operatorname{proj}_{\vec{v}}\bigl( (1,2,3) \bigr)$
c) $\operatorname{proj}_{\vec{v}}\bigl( (1,-1,0) \bigr)$

:::

:::exercise {exercise-A-5-005} number=A.5.5 answered=no src=ap-linear-algebra.tex:6034
PROBLEM:
[2] Consider the vectors $(1,2,3)$, $(-3,0,1)$, $(1,-5,3)$.

a) Check that the vectors are linearly independent and so form a basis of ${\mathbb{R}}^3$.
b) Check that the vectors are mutually orthogonal, and are therefore an orthogonal basis.
c) Represent $(1,1,1)$ as a linear combination of this basis.
d) Make the basis orthonormal.

:::

:::exercise {exercise-A-5-006} number=A.5.6 answered=no src=ap-linear-algebra.tex:6046
PROBLEM:
Let $S$ be the subspace spanned by $(1,3,-1)$, $(1,1,1)$. Find an orthogonal basis of $S$ by the Gram–Schmidt process.
:::

:::exercise {exercise-A-5-007} number=A.5.7 answered=no src=ap-linear-algebra.tex:6052
PROBLEM:
Starting with $(1,2,3)$, $(1,1,1)$, $(2,2,0)$, follow the Gram–Schmidt process to find an orthogonal basis of ${\mathbb{R}}^3$.
:::

:::exercise {exercise-A-5-008} number=A.5.8 answered=no src=ap-linear-algebra.tex:6057
PROBLEM:
Find an orthogonal basis of ${\mathbb{R}}^3$ such that $(3,1,-2)$ is one of the vectors. Hint: First find two extra vectors to make a linearly independent set.
:::

:::exercise {exercise-A-5-009} number=A.5.9 answered=no src=ap-linear-algebra.tex:6063
PROBLEM:
Using cosines and sines of $\theta$, find a unit vector $\vec{u}$ in ${\mathbb{R}}^2$ that makes angle $\theta$ with $\vec{\imath} = (1,0)$. What is $\langle \vec{\imath} , \vec{u} \rangle$?
:::

:::exercise {exercise-A-5-101} number=A.5.101 answered=yes src=ap-linear-algebra.tex:6072
PROBLEM:
Find the $s$ that makes the following vectors orthogonal: $(1,1,1)$, $(1,s,1)$.
SOLUTION:
$s=-2$
:::

:::exercise {exercise-A-5-102} number=A.5.102 answered=yes src=ap-linear-algebra.tex:6080
PROBLEM:
Find the angle $\theta$ between $(1,2,3)$, $(1,1,1)$.
SOLUTION:
$\theta \approx 0.3876$
:::

:::exercise {exercise-A-5-103} number=A.5.103 answered=yes src=ap-linear-algebra.tex:6088
PROBLEM:
Given that $\langle \vec{v} , \vec{w} \rangle = 1$, $\langle \vec{v} , \vec{u} \rangle = -1$, and $\lVert \vec{v} \rVert = 3$, compute

a) $\langle 3 \vec{u} , 5 \vec{v} \rangle$
b) $\langle \vec{v} , 2 \vec{w} + 3 \vec{u} \rangle$
c) $\langle \vec{w} + 3 \vec{v}, \vec{v} \rangle$

SOLUTION:
a) -15 b) -1 c) 28
:::

:::exercise {exercise-A-5-104} number=A.5.104 answered=yes src=ap-linear-algebra.tex:6104
PROBLEM:
Suppose $\vec{v} = (1,0,-1)$. Find

a) $\operatorname{proj}_{\vec{v}}\bigl( (0,2,1) \bigr)$
b) $\operatorname{proj}_{\vec{v}}\bigl( (1,0,1) \bigr)$
c) $\operatorname{proj}_{\vec{v}}\bigl( (4,-1,0) \bigr)$

SOLUTION:
a) $({-1}/{2},0,{1}/{2})$ b) $(0,0,0)$ c) $(2,0,-2)$
:::

:::exercise {exercise-A-5-105} number=A.5.105 answered=yes src=ap-linear-algebra.tex:6118
PROBLEM:
The vectors $(1,1,-1)$, $(2,-1,1)$, $(0,1,1)$ form an orthogonal basis. Represent the following vectors in terms of this basis:

a) $(-1,4,0)$
b) $(4,-1,3)$
c) $(-2,6,-2)$

SOLUTION:
a) $(1,1,-1)-(2,-1,1)+2(0,1,1)$ b) $2(2,-1,1)+(0,1,1)$ c) $2(1,1,-1)-2(2,-1,1)+2(0,1,1)$
:::

:::exercise {exercise-A-5-106} number=A.5.106 answered=yes src=ap-linear-algebra.tex:6133
PROBLEM:
Let $S$ be the subspace spanned by $(2,-1,1)$, $(2,2,2)$. Find an orthogonal basis of $S$ by the Gram–Schmidt process.
SOLUTION:
$(2,-1,1)$, $({2}/{3},{8}/{3},{4}/{3})$
:::

:::exercise {exercise-A-5-107} number=A.5.107 answered=yes src=ap-linear-algebra.tex:6142
PROBLEM:
Starting with $(1,1,-1)$, $(2,3,-1)$, $(1,-1,1)$, follow the Gram–Schmidt process to find an orthogonal basis of ${\mathbb{R}}^3$.
SOLUTION:
$(1,1,-1)$, $(0,1,1)$, $({4}/{3},{-2}/{3},{2}/{3})$
:::

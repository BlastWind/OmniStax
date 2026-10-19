# 3.5 Two-dimensional systems and their vector fields {sec:sec-twodimaut}

:::note [section-notes]
*Note: 1 lecture, part of §6.2 in [EP](cite:EP), parts of §7.5 and §7.6 in [BD](cite:BD)*
:::

We take a moment to discuss constant-coefficient linear homogeneous systems in the plane. Much intuition can be obtained by studying this simple case. We use coordinates $(x,y)$ for the plane as usual, and suppose $P = \left[ \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \right]$ is a $2 \times 2$ matrix. Consider the system
$$ \begin{bmatrix} x \\ y \end{bmatrix} ' = P \begin{bmatrix} x \\ y \end{bmatrix} \qquad \text{or} \qquad \begin{bmatrix} x \\ y \end{bmatrix} ' = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} . $$ {eq:pln-eq} number=3.3
The system is autonomous (compare this section to [§1.6](ref:1.6#auteq-section)), and so we draw a vector field (see the end of [§3.1](ref:3.1#sec-introtosys)). We will be able to visually understand this vectorfield and the solutions of the ODE in terms of the eigenvalues and eigenvectors of the matrix $P$. For this section, we assume that $P$ has two distinct eigenvalues and two corresponding eigenvectors. We will also assume that $P$ is nonsingular, that is, neither eigenvalue is zero.

*Case 1.* Suppose that the eigenvalues of $P$ are real and positive. We find two corresponding eigenvectors and plot them in the plane. For example, take the matrix $\left[ \begin{smallmatrix} 1 & 1 \\ 0 & 2 \end{smallmatrix} \right]$. The eigenvalues are 1 and 2 and corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$. See [Figure 3.4](ref:pln-source-eigfig).

> FIGURE {fig:pln-source-eigfig} number=3.4 src=../../media/pln-source-eig.svg
> alt: A diagram of the xy-plane with two lines representing the vectors (1,0) and (1,1) by showing two lines from the origin to those respective points.
> width: 4.5in
> caption: Eigenvectors of $P$.

Let $(x,y)$ be a point on the line determined by an eigenvector $\vec{v}$ for an eigenvalue $\lambda$. That is, $\left[ \begin{smallmatrix} x \\ y \end{smallmatrix} \right] = \alpha \vec{v}$ for some scalar $\alpha$. Then
$$ \begin{bmatrix} x \\ y \end{bmatrix} ' = P \begin{bmatrix} x \\ y \end{bmatrix} = P ( \alpha \vec{v} ) = \alpha ( P \vec{v} ) = \alpha \lambda \vec{v} . $$
The derivative is a multiple of $\vec{v}$ and hence points along the line determined by $\vec{v}$. As $\lambda > 0$, the derivative points in the direction of $\vec{v}$ when $\alpha$ is positive and in the opposite direction when $\alpha$ is negative. We draw the lines determined by the eigenvectors and arrows on the lines to indicate the directions. See [Figure 3.5](ref:pln-source-eig-arrfig).

We fill in the rest of the arrows for the vector field, and we draw a few solutions. See [Figure 3.6](ref:pln-source-fullfig). The picture looks like a source with arrows coming out from the origin. Hence we call this type of picture a *{index:source}* or sometimes an *{index:unstable node}*.

> FIGURE {fig:pln-source-eig-arrfig} number=3.5 src=../../media/pln-source-eig-arr.svg
> alt: A diagram of the xy-plane with two red arrows representing two vectors (1,0) and (1,1), now with arrows pointing away from the origin and also black lines along the two arrows, one is the line x equals y and the other is the x-axis.
> width: 4.5in
> caption: Eigenvectors of $P$ with directions.

> FIGURE {fig:pln-source-fullfig} number=3.6 src=../../media/pln-source-full.svg
> alt: A diagram as the previous figure, but with arrows of the direction field added and several solution trajectories plotted. All the arrows of the direction field point away from the origin and the arrows are longer the further away from the origin that we get. The solution trajectories that are along the two lines given by the eigenvectors are again straight lines. The solution trajectories in other directions from the origin curve somewhat instead of simply following a straight line as if they want to eventually point in the same direction as the diagonal line.
> width: 4.5in
> caption: Example source vector field with eigenvectors and solutions.

*Case 2.* Suppose both eigenvalues are negative. For example, take the negation of the matrix from case 1, $\left[ \begin{smallmatrix} -1 & -1 \\ 0 & -2 \end{smallmatrix} \right]$. The eigenvalues are $-1$ and $-2$ and corresponding eigenvectors are the same, $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$. The calculation and the picture are almost the same. The difference is that the eigenvalues are negative and arrows are reversed. We get the picture in [Figure 3.7](ref:pln-sink-fullfig). We call this type of picture a *{index:sink}* or a *{index:stable node}*.

> FIGURE {fig:pln-sink-fullfig} number=3.7 src=../../media/pln-sink-full.svg
> alt: A diagram very similar to the last figure but now all the arrows simply point towards the origin rather than away from it.
> width: 4.5in
> caption: Example sink vector field with eigenvectors and solutions.

> FIGURE {fig:pln-saddle-fullfig} number=3.8 src=../../media/pln-saddle-full.svg
> alt: A diagram of a saddle, here one of the black lines is still the x-axis, but the other line is a line with slope minus 3 through the origin. The arrow on the x-axis representing the eigenvector (1,0) points to the right, while the arrow representing the eigenvector (1, minus 3) now points towards the origin as the eigenvalue is negative. The arrows of the direction field in each 4 of the sectors between the two lines first go along the line with slope minus 3 towards the origin, and once the arrows get close enough to the x-axis they start going away from the origin in the direction of the x-axis. Several trajectories that follow these arrows are shown.
> width: 4.5in
> caption: Example saddle vector field with eigenvectors and solutions.

*Case 3.* Suppose one eigenvalue is positive and one is negative. For example, consider $P = \left[ \begin{smallmatrix} 1 & 1 \\ 0 & -2 \end{smallmatrix} \right]$. The eigenvalues are 1 and $-2$ and corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 0 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -3 \end{smallmatrix} \right]$. We reverse the arrows on the line corresponding to the negative eigenvalue and we obtain the picture in [Figure 3.8](ref:pln-saddle-fullfig). We call this picture a *{index:saddle point}*.

[0] For the next three cases, we will assume the eigenvalues are complex. In this case the eigenvectors are also complex and we cannot just plot them in the plane.

[0] *Case 4.* Suppose the eigenvalues are purely imaginary, that is, $\pm ib$. For example, let $P = \left[ \begin{smallmatrix} 0 & 1 \\ -4 & 0 \end{smallmatrix} \right]$. The eigenvalues are $\pm 2i$ and corresponding eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -2i \end{smallmatrix} \right]$. Consider the eigenvalue $2i$ and its eigenvector $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$. The real and imaginary parts of $\vec{v} e^{2it}$ are
$$ \operatorname{Re} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{2it} = \begin{bmatrix} \cos (2t) \\ -2 \sin (2t) \end{bmatrix} , \qquad \operatorname{Im} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{2it} = \begin{bmatrix} \sin (2t) \\ 2 \cos (2t) \end{bmatrix} . $$
We can take any linear combination of them to get other solutions, which one we take depends on the initial conditions. Now note that the real part is a parametric equation for an ellipse. Same with the imaginary part and in fact any linear combination of the two. This is what happens in general when the eigenvalues are purely imaginary. So when the eigenvalues are purely imaginary, we get *ellipses{index-entry:ellipses (vector field)}* for the solutions. This type of picture is sometimes called a *{index:center}*. See [Figure 3.9](ref:pln-ellipsesfig).

> FIGURE {fig:pln-ellipsesfig} number=3.9 src=../../media/pln-ellipses.svg
> alt: A direction field is shown where the arrows point in a way where following them would lead us along an ellipse that is taller than wider and in a clockwise direction. The arrows are longer the further away from the origin we get. Several such ellipses representing the trajectories are shown.
> width: 4.5in
> caption: Example center vector field.

> FIGURE {fig:pln-spiral-sourcefig} number=3.10 src=../../media/pln-spiral-source.svg
> alt: A direction field is shown where the arrows spiral out of the origin in a clockwise direction. The arrows get longer the further away from the origin we get. Several trajectories that are spirals out of the origin are shown.
> width: 4.5in
> caption: Example spiral source vector field.

*Case 5.* Now suppose the complex eigenvalues have a positive real part. That is, suppose the eigenvalues are $a \pm ib$ for some $a > 0$. For example, let $P = \left[ \begin{smallmatrix} 1 & 1 \\ -4 & 1 \end{smallmatrix} \right]$. The eigenvalues turn out to be $1\pm 2i$ and eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -2i \end{smallmatrix} \right]$. We take $1 + 2i$ and its eigenvector $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$ and find the real and imaginary parts of $\vec{v} e^{(1+2i)t}$ are
$$ \operatorname{Re} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{(1+2i)t} = e^t \begin{bmatrix} \cos (2t) \\ -2 \sin (2t) \end{bmatrix} , \qquad \operatorname{Im} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{(1+2i)t} = e^t \begin{bmatrix} \sin (2t) \\ 2 \cos (2t) \end{bmatrix} . $$
Note the $e^t$ in front of the solutions. The solutions grow in magnitude while spinning around the origin. Hence we get a *{index:spiral source}*. See [Figure 3.10](ref:pln-spiral-sourcefig).

*Case 6.* Finally suppose the complex eigenvalues have a negative real part. That is, suppose the eigenvalues are $-a \pm ib$ for some $a > 0$. For example, let $P = \left[ \begin{smallmatrix} -1 & -1 \\ 4 & -1 \end{smallmatrix} \right]$. The eigenvalues turn out to be $-1\pm 2i$ and eigenvectors are $\left[ \begin{smallmatrix} 1 \\ -2i \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$. We take $-1 - 2i$ and its eigenvector $\left[ \begin{smallmatrix} 1 \\ 2i \end{smallmatrix} \right]$ and find the real and imaginary parts of $\vec{v} e^{(-1-2i)t}$ are
$$ \operatorname{Re} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{(-1-2i)t} = e^{-t} \begin{bmatrix} \cos (2t) \\ 2 \sin (2t) \end{bmatrix} , \qquad \operatorname{Im} \begin{bmatrix} 1 \\ 2i \end{bmatrix} e^{(-1-2i)t} = e^{-t} \begin{bmatrix} -\sin (2t) \\ 2 \cos (2t) \end{bmatrix} . $$
Note the $e^{-t}$ in front of the solutions. The solutions shrink in magnitude while spinning around the origin. Hence we get a *{index:spiral sink}*. See [Figure 3.11](ref:pln-spiral-sinkfig).

> FIGURE {fig:pln-spiral-sinkfig} number=3.11 src=../../media/pln-spiral-sink.svg
> alt: A diagram of a direction field much like the previous figure but reversed. The arrows spiral in a counterclockwise direction into the origin. Several such spiral trajectories are shown.
> width: 4.5in
> caption: Example spiral sink vector field.

We summarize the behavior of linear homogeneous two-dimensional systems given by a nonsingular matrix in [Table 3.1](ref:pln-behtab). Systems where one of the eigenvalues is zero (the matrix is singular) come up in practice from time to time, see [Example 3.1.2](ref:3.1#sintro-closedbrine-example), and the pictures are somewhat different (simpler in a way). See the exercises. When the eigenvalues are real and repeated, the analysis is a little bit more difficult and we have not yet covered how to solve such systems, but the idea is roughly the same—a repeated positive eigenvalue means a source and a repeated negative eigenvalue means a sink.

> TABLE {tab:pln-behtab} number=3.1 cols=2
> caption: Summary of behavior of linear homogeneous two-dimensional systems.
| Eigenvalues | Behavior |
| --- | --- |
| real and both positive | source / unstable node |
| real and both negative | sink / stable node |
| real and opposite signs | saddle |
| purely imaginary | center point / ellipses |
| complex with positive real part | spiral source |
| complex with negative real part | spiral sink |

## Exercises

:::exercise {exercise-3-5-001} number=3.5.1 answered=no src=ch-systems.tex:3207
PROBLEM:
Take the equation $m x'' + c x' + kx = 0$, with $m > 0$, $c \geq 0$, $k > 0$ for the mass-spring system.

a) Convert this to a system of first-order equations.
b) Classify for what $m, c, k$ do you get which behavior.
c) Explain from physical intuition why you do not get all the different kinds of behavior here?

:::

:::exercise {exercise-3-5-002} number=3.5.2 answered=no src=ch-systems.tex:3218
PROBLEM:
[2] What happens in the case when $P = \left[ \begin{smallmatrix} 1 & 1 \\ 0 & 1 \end{smallmatrix} \right]$? In this case the eigenvalue is repeated and there is only one independent eigenvector. Draw and describe the vector field.
:::

:::exercise {exercise-3-5-003} number=3.5.3 answered=no src=ch-systems.tex:3226
PROBLEM:
What happens in the case when $P = \left[ \begin{smallmatrix} 1 & 1 \\ 1 & 1 \end{smallmatrix} \right]$? Draw the vector field. Does this look like any of the pictures we have drawn?
:::

:::exercise {exercise-3-5-004} number=3.5.4 answered=no src=ch-systems.tex:3233
PROBLEM:
Which behaviors are possible if $P$ is diagonal, that is, $P = \left[ \begin{smallmatrix} a & 0 \\ 0 & b \end{smallmatrix} \right]$? You can assume that $a$ and $b$ are not zero.
:::

:::exercise {exercise-3-5-005} number=3.5.5 answered=no src=ch-systems.tex:3239
PROBLEM:
Take the system from [Example 3.1.2](ref:3.1#sintro-closedbrine-example), $x_1'=\frac{r}{V}(x_2-x_1)$, $x_2'=\frac{r}{V}(x_1-x_2)$. As we said, one of the eigenvalues is zero. What is the other eigenvalue, how does the picture look like, and what happens when $t$ goes to infinity.
:::

:::exercise {exercise-3-5-101} number=3.5.101 answered=yes src=ch-systems.tex:3249
PROBLEM:
Describe the behavior of the following systems without solving:

a) $x' = x + y$, $y' = x-y$.
b) $x_1' = x_1 + x_2$, $x_2' = 2 x_2$.
c) $x_1' = -2x_2$, $x_2' = 2 x_1$.
d) $x' = x + 3y$, $y' = -2x-4y$.
e) $x' = x - 4y$, $y' = -4x+y$.

SOLUTION:
a) Two eigenvalues: $\pm \sqrt{2}$ so the behavior is a saddle. b) Two eigenvalues: $1$ and $2$, so the behavior is a source. c) Two eigenvalues: $\pm 2i$, so the behavior is a center (ellipses). d) Two eigenvalues: $-1$ and $-2$, so the behavior is a sink. e) Two eigenvalues: $5$ and $-3$, so the behavior is a saddle.
:::

:::exercise {exercise-3-5-102} number=3.5.102 answered=yes src=ch-systems.tex:3271
PROBLEM:
Suppose that $\vec{x}\,' = P \vec{x}$ where $P$ is a 2 by 2 matrix with eigenvalues $2\pm i$. Describe the behavior.
SOLUTION:
Spiral source.
:::

:::exercise {exercise-3-5-103} number=3.5.103 answered=yes src=ch-systems.tex:3279
PROBLEM:
Take $\left[ \begin{smallmatrix} x \\ y \end{smallmatrix}\right] ' = \left[ \begin{smallmatrix} 0 & 1 \\ 0 & 0 \end{smallmatrix}\right] \left[ \begin{smallmatrix} x \\ y \end{smallmatrix}\right]$. Draw the vector field and describe the behavior. Is it one of the behaviors that we have seen before?
SOLUTION:

> IMAGE {img:0100vectorfield} src=../../media/0100vectorfield.svg
> alt: A direction field diagram where all arrows are horizontal. The arrows above the x-axis go right and arrows below the x-axis go left. The arrows are longer the further away from the x-axis that we get.
> width: 2in

The solution does not move anywhere if $y = 0$. When $y$ is positive, the solution moves (with constant speed) in the positive $x$ direction. When $y$ is negative, the solution moves (with constant speed) in the negative $x$ direction. It is not one of the behaviors we saw.
Note that the matrix has a double eigenvalue 0 and the general solution is $x = C_1 t + C_2$ and $y = C_1$, which agrees with the description above.
:::

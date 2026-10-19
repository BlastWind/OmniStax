# 3.6 Second-order systems and applications {sec:sol-section}

:::note [section-notes]
*Note: more than 2 lectures, §5.4 in [EP](cite:EP), not in [BD](cite:BD)*
:::

## Undamped mass-spring systems

While we did say that we can usually only study first-order systems, it is sometimes more convenient to analyze the system in the way it arises naturally. For example, consider 3 masses connected by springs between two walls. We could pick any higher number, and the math would be essentially the same, but for simplicity, we pick 3 right now. We also assume no friction, that is, the system is undamped{index-entry:undamped motion!systems}. The masses are $m_1$, $m_2$, and $m_3$ and the spring constants are $k_1$, $k_2$, $k_3$, and $k_4$. Let $x_1$ be the displacement from rest position of the first mass, and $x_2$ and $x_3$ the displacement of the second and third mass. We make, as usual, positive values go right (as $x_1$ grows, the first mass is moving right). See [Figure 3.12](ref:sosa-threecartsfig).

> FIGURE {fig:sosa-threecartsfig} number=3.12 src=../../media/threecartsfig.svg
> alt: A diagram of three carts on wheels in a row labeled, from left to right, m sub 1, m sub 2, and m sub 3 signifying their masses. There is a spring labeled k sub 1 attached to a wall on the left and the first cart. There is a spring labeled k sub 2 connecting cart 1 and cart 2. There is a spring labeled k sub 3 connecting cart 2 and cart 3. There is a spring labeled k sub 4 connecting cart 3 to a wall on the right.
> caption: System of masses and springs.

This simple system turns up in unexpected places. For example, our world really consists of many small particles of matter interacting together. When we try the system above with many more masses, we obtain a good approximation to how an elastic material behaves. By somehow taking a limit of the number of masses going to infinity, we obtain the continuous one-dimensional wave equation (that we study in [§4.7](ref:4.7#we-section)). But we digress.

Let us set up the equations for the {index:three mass system}. By {index:Hooke’s law}, the force acting on the mass equals the spring compression times the spring constant. By {index:Newton’s second law}, force is mass times acceleration. So if we sum the forces acting on each mass, put the right sign in front of each term, depending on the direction in which it is acting, and set this equal to mass times the acceleration, we end up with the desired system of equations.
$$ \begin{aligned} m_1 x_1'' &= -k_1 x_1 + k_2 (x_2-x_1) & & = -(k_1+k_2) x_1 + k_2 x_2 , \\ m_2 x_2'' &= -k_2 (x_2-x_1) + k_3 (x_3-x_2) & & = k_2 x_1 -(k_2+k_3) x_2 + k_3 x_3 , \\ m_3 x_3'' &= -k_3 (x_3-x_2) - k_4 x_3 & & = k_3 x_2 - (k_3+k_4) x_3 . \end{aligned} $$
We define the matrices
$$ M = \begin{bmatrix} m_1 & 0 & 0 \\ 0 & m_2 & 0 \\ 0 & 0 & m_3 \end{bmatrix} \qquad \text{and} \qquad K = \begin{bmatrix} -(k_1+k_2) & k_2 & 0 \\ k_2 & -(k_2+k_3) & k_3 \\ 0 & k_3 & -(k_3+k_4) \end{bmatrix} . $$
We write the equation simply as
$$ M {\vec{x}}'' = K \vec{x} . $$
At this point we could introduce 3 new variables and write out a system of 6 first-order equations. We claim this simple setup is easier to handle as a second-order system. We call $\vec{x}$ the *{index:displacement vector}*, $M$ the *{index:mass matrix}*, and $K$ the *{index:stiffness matrix}*.

:::exercise {exercise-3-6-001} number=3.6.1 answered=no src=ch-systems.tex:3412
PROBLEM:
Repeat this setup for 4 masses (find the matrices $M$ and $K$). Do it for 5 masses. Can you find a prescription to do it for $n$ masses?
:::

As with a single equation, we want to “divide by $M$.” This means computing the inverse of $M$. The masses are all nonzero and $M$ is a diagonal matrix{index-entry:diagonal matrix}, so computing the inverse is easy:
$$ M^{-1} = \begin{bmatrix} \frac{1}{m_1} & 0 & 0 \\ 0 & \frac{1}{m_2} & 0 \\ 0 & 0 & \frac{1}{m_3} \end{bmatrix} . $$
This fact follows readily by how we multiply diagonal matrices. As an exercise, you should verify that $M M^{-1} = M^{-1} M = I$.

Let $A = M^{-1}K$. We look at the system ${\vec{x}}'' = M^{-1}K \vec{x}$, or
$$ {\vec{x}}'' = A \vec{x} . $$
Many real world systems can be modeled by this equation. For simplicity, we will only talk about the given masses-and-springs problem. We try a solution of the form
$$ \vec{x} = \vec{v} e^{\alpha t} . $$
We compute that for this guess, ${\vec{x}}'' = \alpha^2 \vec{v} e^{\alpha t}$. We plug our guess into the equation and get
$$ \alpha^2 \vec{v} e^{\alpha t} = A\vec{v} e^{\alpha t} . $$
We divide by $e^{\alpha t}$ to arrive at $\alpha^2 \vec{v} = A\vec{v}$. Hence if $\alpha^2$ is an eigenvalue of $A$ and $\vec{v}$ is a corresponding eigenvector, we have found a solution.

In our example, and in other common applications, $A$ has only real negative eigenvalues (and possibly a zero eigenvalue). So we study only this case. When an eigenvalue $\lambda$ is negative, it means that $\alpha^2 = \lambda$ is negative. Hence there is some real number $\omega$ such that $-\omega^2 = \lambda$. Then $\alpha = \pm i \omega$. For $\alpha = i \omega$, the solution we guessed is $\vec{x} = \vec{v} e^{i \omega t}$ or
$$ \vec{x} = \vec{v} \, \bigl(\cos (\omega t) + i \sin (\omega t) \bigr) . $$
By taking the real and imaginary parts (note that $\vec{v}$ is real), we find that $\vec{v} \cos (\omega t)$ and $\vec{v} \sin (\omega t)$ are linearly independent solutions.

If an eigenvalue is zero, it turns out that both $\vec{v}$ and $\vec{v} t$ are solutions, where $\vec{v}$ is an eigenvector corresponding to the eigenvalue 0.

:::exercise {exercise-3-6-002} number=3.6.2 answered=no src=ch-systems.tex:3478
PROBLEM:
Show that if $A$ has a zero eigenvalue and $\vec{v}$ is a corresponding eigenvector, then $\vec{x} = \vec{v} (a + bt)$ is a solution of ${\vec{x}}'' = A \vec{x}$ for arbitrary constants $a$ and $b$.
:::

:::theorem {thm:theorem-3-6-1} Theorem 3.6.1
Let $A$ be a real $n \times n$ matrix with $n$ distinct real negative (or zero) eigenvalues we denote by $-\omega_1^2 > -\omega_2^2 > \cdots > -\omega_n^2$, and corresponding eigenvectors by $\vec{v}_1$, $\vec{v}_2$, …, $\vec{v}_n$. If $A$ is invertible (that is, if $\omega_1 > 0$), then
$$ \boxed{~~ \vec{x}(t) = \sum_{i=1}^n \vec{v}_i \bigl(a_i \cos (\omega_i t) + b_i \sin (\omega_i t) \bigr) ~~} $$
is the general solution of
$$ {\vec{x}}'' = A \vec{x}, $$
for some arbitrary constants $a_i$ and $b_i$. If $A$ has a zero eigenvalue, that is, $\omega_1 = 0$, and all other eigenvalues are distinct and negative, then the general solution can be written as
$$ \boxed{~~ \vec{x}(t) = \vec{v}_1 (a_1 + b_1 t) + \sum_{i=2}^n \vec{v}_i \bigl(a_i \cos (\omega_i t) + b_i \sin (\omega_i t) \bigr) . ~~} $$

:::

We use this solution and the setup from the introduction of this section even when some of the masses and springs are missing. For example, when there are only 2 masses and only 2 springs, simply take only the equations for the two masses and set all the spring constants for the springs that are missing to zero.

## Examples

:::example {ex:example-3-6-1} Example 3.6.1
Consider the setup in [Figure 3.13](ref:sosa-twocartswallfig), with $m_1 = 2\,\mathrm{kg}$, $m_2 = 1\,\mathrm{kg}$, $k_1 = 4\,\mathrm{N}/\mathrm{m}$, and $k_2 = 2\,\mathrm{N}/\mathrm{m}$.

> FIGURE {fig:sosa-twocartswallfig} number=3.13 src=../../media/twocartswallfig.svg
> alt: A diagram of two carts on wheels in a row labeled, from left to right, m sub 1 and m sub 2 signifying their masses. There is a spring labeled k sub 1 attached to a wall on the left and the first cart. There is a spring labeled k sub 2 connecting cart 1 and cart 2.
> caption: System of masses and springs.

The equations we write down are
$$ \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} {\vec{x}}'' = \begin{bmatrix} -(4+2) & 2 \\ 2 & -2 \end{bmatrix} \vec{x} , $$
or
$$ {\vec{x}}'' = \begin{bmatrix} -3 & 1 \\ 2 & -2 \end{bmatrix} \vec{x} . $$

We find the eigenvalues of $A$ to be $\lambda = -1, -4$ (exercise). We find corresponding eigenvectors to be $\left[ \begin{smallmatrix} 1 \\ 2 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -1 \end{smallmatrix} \right]$ respectively (exercise). We check the theorem and note that $\omega_1 = 1$ and $\omega_2 = 2$. Hence the general solution is
$$ \vec{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \bigl( a_1 \cos (t) + b_1 \sin (t) \bigr) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \bigl( a_2 \cos (2t) + b_2 \sin (2t) \bigr) . $$

The two terms in the solution represent the two so-called *natural{index-entry:natural mode of oscillation}* or *normal modes of oscillation{index-entry:normal mode of oscillation}*. And the two (angular) frequencies are the *natural frequencies{index-entry:natural frequency}*. The first natural frequency is 1, and the second is 2. The two modes are plotted in [Figure 3.14](ref:sosa-modesfig).

> FIGURE {fig:sosa-modesfig} number=3.14 src=../../media/sosa-modes-1-2.svg
> alt: Two plots are given, both are for t from 0 to 10. In the left-hand plot, two sinusoidal (cosine) functions are moving in unison, one with amplitude 1 and one with amplitude 2, they are simply the graphs of cosine of t and 2 cosine of t. In the right-hand plot, two cosine functions are moving in opposite direction with twice the frequency, they are simply the graphs of cosine of 2 t and minus cosine of 2 t.
> width: 9in
> caption: The two modes of the mass-spring system. In the left plot the masses are moving in unison and in the right plot are masses moving in the opposite direction.

Let us write the solution as
$$ \vec{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} c_1 \cos (t - \alpha_1 ) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} c_2 \cos (2t - \alpha_2 ) . $$
The first term,
$$ \begin{bmatrix} 1 \\ 2 \end{bmatrix} c_1 \cos (t - \alpha_1 ) = \begin{bmatrix} c_1 \cos (t - \alpha_1 ) \\ 2c_1 \cos (t - \alpha_1 ) \end{bmatrix} , $$
corresponds to the mode where the masses move synchronously in the same direction.

The second term,
$$ \begin{bmatrix} 1 \\ -1 \end{bmatrix} c_2 \cos (2t - \alpha_2 ) = \begin{bmatrix} c_2 \cos (2t - \alpha_2 ) \\ - c_2 \cos (2t - \alpha_2 ) \end{bmatrix} , $$
corresponds to the mode where the masses move synchronously but in opposite directions.

The general solution is a combination of the two modes. That is, the initial conditions determine the amplitude and phase shift of each mode. As an example, suppose we have initial conditions
$$ \vec{x}(0) = \begin{bmatrix} 1 \\ -1 \end{bmatrix} , \qquad \vec{x}'(0) = \begin{bmatrix} 0 \\ 6 \end{bmatrix} . $$
We use the $a_j, b_j$ constants to solve for initial conditions. First
$$ \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \vec{x}(0) = \begin{bmatrix} 1 \\ 2 \end{bmatrix} a_1 + \begin{bmatrix} 1 \\ -1 \end{bmatrix} a_2 = \begin{bmatrix} a_1+a_2 \\2a_1 - a_2 \end{bmatrix} . $$
We solve (exercise) to find $a_1 = 0$, $a_2 = 1$. To find the $b_1$ and $b_2$, we differentiate first:
$$ {\vec{x}}' = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \bigl( - a_1 \sin (t) + b_1 \cos (t) \bigr) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \bigl( - 2a_2 \sin (2t) + 2 b_2 \cos (2t) \bigr) . $$
Now we solve:
$$ \begin{bmatrix} 0 \\ 6 \end{bmatrix} = {\vec{x}}'(0) = \begin{bmatrix} 1 \\ 2 \end{bmatrix} b_1 + \begin{bmatrix} 1 \\ -1 \end{bmatrix} 2 b_2 = \begin{bmatrix} b_1+2b_2 \\ 2b_1-2b_2 \end{bmatrix} . $$
Again solve (exercise) to find $b_1 = 2$, $b_2 = -1$. So our solution is
$$ \vec{x} = \begin{bmatrix} 1 \\ 2 \end{bmatrix} 2 \sin (t) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \bigl( \cos (2t) - \sin (2t) \bigr) = \begin{bmatrix} 2 \sin (t) + \cos(2t)- \sin(2t) \\ 4 \sin (t) - \cos(2t) + \sin(2t) \end{bmatrix} . $$
The graphs of the two displacements, $x_1$ and $x_2$ of the two carts is in [Figure 3.15](ref:sosa-superposfig).

> FIGURE {fig:sosa-superposfig} number=3.15 src=../../media/sosa-superpos.svg
> alt: Two functions are plotted for t equals 0 to t equals 10. The motion is a somewhat complicated but still periodic.
> width: 4.5in
> caption: Superposition of the two modes given the initial conditions.

:::

:::example {ex:sosa-railcarexample} Example 3.6.2
We have two toy rail cars. Car 1 of mass 2 kg is traveling at 3 m/s towards the second rail car of mass 1 kg. There is a bumper on the second rail car that engages at the moment the cars hit (it connects to two cars) and does not let go. The bumper acts like a spring of spring constant $k=2\,\mathrm{N}/\mathrm{m}$. The second car is 10 meters from a wall. See [Figure 3.16](ref:sosa-railcarscrashfig).

> FIGURE {fig:sosa-railcarscrashfig} number=3.16 src=../../media/railcarscrash.svg
> alt: A diagram of two carts on wheels, on the left there is a cart labeled m1 with an arrow pointing right indicating that this cart is moving right. A little distance away there is second cart labeled m2 with a spring on a left labeled k, which is not connected to anything on its left side. There is a wall on the right and a label indicates that it is 10 meters away to the right of the second cart.
> caption: The crash of two rail cars.

We want to ask several questions. At what time after the cars link does impact with the wall happen? What is the speed of car 2 when it hits the wall?

OK, let us first set the system up. Let $t=0$ be the time when the two cars link up. Let $x_1$ be the displacement of the first car from the position at $t=0$, and let $x_2$ be the displacement of the second car from its original location. Then the time when $x_2(t) = 10$ is exactly the time when impact with the wall occurs. For this $t$, $x_2'(t)$ is the speed at impact. This system acts just like the system of the previous example but without $k_1$. Hence the equation is
$$ \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} {\vec{x}}'' = \begin{bmatrix} -2 & 2 \\ 2 & -2 \end{bmatrix} \vec{x} , $$
or
$$ {\vec{x}}'' = \begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \vec{x} . $$

We compute the eigenvalues of $A$. It is not hard to see that the eigenvalues are 0 and $-3$ (exercise). Furthermore, eigenvectors are $\left[ \begin{smallmatrix} 1 \\ 1 \end{smallmatrix} \right]$ and $\left[ \begin{smallmatrix} 1 \\ -2 \end{smallmatrix} \right]$ respectively (exercise). Then $\omega_1 = 0$, $\omega_2 = \sqrt{3}$, and by the second part of the theorem the general solution is
$$ \begin{split} \vec{x} & = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \left( a_1 + b_1 t \right) + \begin{bmatrix} 1 \\ -2 \end{bmatrix} \left( a_2 \cos ( \sqrt{3} \, t) + b_2 \sin ( \sqrt{3} \, t ) \right) \\ & = \begin{bmatrix} a_1 + b_1 t + a_2 \cos ( \sqrt{3} \, t ) + b_2 \sin ( \sqrt{3} \, t ) \\ a_1 + b_1 t - 2 a_2 \cos ( \sqrt{3} \, t ) - 2 b_2 \sin ( \sqrt{3} \, t ) \end{bmatrix} . \end{split} $$

We now apply the initial conditions. First the cars start at position 0 so $x_1 (0) = 0$ and $x_2(0) = 0$. The first car is traveling at 3 m/s, so $x_1'(0) = 3$ and the second car starts at rest, so $x_2'(0) = 0$. The first conditions says
$$ \vec{0} = \vec{x}(0) = \begin{bmatrix} a_1 + a_2 \\ a_1 - 2 a_2 \end{bmatrix} . $$
It is not hard to see that $a_1 = a_2 = 0$. We set $a_1=0$ and $a_2=0$ in $\vec{x}(t)$ and differentiate to get
$$ {\vec{x}}'(t) = \begin{bmatrix} b_1 + \sqrt{3} \, b_2 \cos ( \sqrt{3} \, t ) \\ b_1 - 2 \sqrt{3} \, b_2 \cos ( \sqrt{3} \, t ) \end{bmatrix} . $$
So
$$ \begin{bmatrix} 3 \\ 0 \end{bmatrix} = {\vec{x}}'(0) = \begin{bmatrix} b_1 + \sqrt{3} \, b_2 \\ b_1 - 2 \sqrt{3} \, b_2 \end{bmatrix} . $$
Solving these two equations, we find $b_1 = 2$ and $b_2 = \frac{1}{\sqrt{3}}$. Hence the position of our cars is (until the impact with the wall)
$$ \vec{x} = \begin{bmatrix} 2 t + \frac{1}{\sqrt{3}} \sin ( \sqrt{3} \, t ) \\ 2 t - \frac{2}{\sqrt{3}} \sin ( \sqrt{3} \, t ) \end{bmatrix} . $$
Note how the presence of the zero eigenvalue resulted in a term containing $t$. This means that the cars will be traveling in the positive direction as time grows, which is what we expect.

What we are really interested in is the second expression, the one for $x_2$. We have $x_2(t) = 2 t - \frac{2}{\sqrt{3}} \sin ( \sqrt{3} \, t)$. See [Figure 3.17](ref:sosa-railcarfig) for the plot of $x_2$ versus time.

Just from the graph we can see that the time of impact will be a little more than 5 seconds from time zero. For this we have to solve the equation $10 = x_2(t) = 2 t - \frac{2}{\sqrt{3}} \sin ( \sqrt{3} \, t)$. Using a computer (or even a graphing calculator) we find that $t_{\text{impact}} \approx 5.22$ seconds.

> FIGURE {fig:sosa-railcarfig} number=3.17 src=../../media/sosa-railcar.svg
> alt: A graph of a function for t equals 0 to t equals 6. The function starts at zero and starts moving horizontally and curves upwards to rise to and curve back to a horizontal plateau between t equals 3 and t equals 4 at value slightly less than 7.5. The function then again curves upwards and reaches the value of 10 at t slightly larger than 5.
> width: 4.5in
> caption: Position of the second car in time (ignoring the wall).

The speed of the second car is $x_2' = 2 - 2 \cos ( \sqrt{3} \, t)$. At the time of impact (5.22 seconds from $t=0$) we get $x_2'(t_{\text{impact}}) \approx 3.85$. The maximum speed is the maximum of $2 - 2 \cos ( \sqrt{3} \, t )$, which is 4. We are traveling at almost the maximum speed when we hit the wall.

Suppose that Bob is a tiny person sitting on car 2. Bob has a Martini in his hand and would like not to spill it. Let us suppose Bob would not spill his Martini when the first car links up with car 2, but if car 2 hits the wall at any speed greater than zero, Bob will spill his drink. Suppose Bob can move car 2 a few meters towards or away from the wall (he cannot go all the way to the wall, nor can he get out of the way of the first car). Is there a “safe” distance for him to be at? A distance such that the impact with the wall is at zero speed?

The answer is yes. On [Figure 3.17](ref:sosa-railcarfig), note the “plateau” between $t=3$ and $t=4$. There is a point where the speed is zero. To find it we solve $x_2'(t) = 0$. This is when $\cos ( \sqrt{3} \, t) = 1$ or in other words when $t = \frac{2 \pi}{\sqrt{3}}, \frac{4 \pi}{\sqrt{3}},\ldots$ and so on. We plug in the first value to obtain $x_2\left(\frac{2 \pi}{\sqrt{3}}\right) = \frac{4 \pi}{\sqrt{3}} \approx 7.26$. So a “safe” distance is about 7 and a quarter meters from the wall.

Alternatively Bob could move away from the wall towards the incoming car 2, where another safe distance is $x_2 \left( \frac{4 \pi}{\sqrt{3}} \right) = \frac{8 \pi}{\sqrt{3}} \approx 14.51$ and so on. We can use all the different $t$ such that $x_2'(t) = 0$. Of course $t=0$ is also a solution, corresponding to $x_2 = 0$, but that means standing right at the wall.
:::

## Forced oscillations

Finally we move to forced oscillations{index-entry:forced motion!systems}. Suppose that now our system is
$$ {\vec{x}}'' = A \vec{x} + \vec{F} \cos ( \omega t) . $$ {eq:sosa-forcedeq} number=3.4
That is, we are adding periodic forcing to the system in the direction of the vector $\vec{F}$.

As before, this system just requires us to find one particular solution $\vec{x}_p$, add it to the general solution of the associated homogeneous system $\vec{x}_c$, and we will have the general solution to [(3.4)](ref:sosa-forcedeq). Let us suppose that $\omega$ is not one of the natural frequencies of ${\vec{x}}'' = A \vec{x}$, then we can guess
$$ \vec{x}_p = \vec{c} \cos (\omega t) , $$
where $\vec{c}$ is an unknown constant vector. Note that we do not need to use sine since there are only second derivatives. We solve for $\vec{c}$ to find $\vec{x}_p$. This is really just the method of *undetermined coefficients{index-entry:undetermined coefficients!for second-order systems}* for systems. Let us differentiate $\vec{x}_p$ twice to get
$$ {\vec{x}_p}'' = -\omega^2 \vec{c} \cos (\omega t) . $$
Plug $\vec{x}_p$ and ${\vec{x}_p}''$ into equation [(3.4)](ref:sosa-forcedeq):
$$ \overbrace{ -\omega^2 \vec{c} \cos (\omega t) }^{{\vec{x}_p}''} = \overbrace{ A \vec{c} \cos (\omega t) }^{A \vec{x}_p} + \vec{F} \cos (\omega t) . $$
We cancel out the cosine and rearrange the equation to obtain
$$ (A +\omega^2 I) \vec{c} = - \vec{F} . $$
So
$$ \vec{c} = {(A +\omega^2 I)}^{-1} (-\vec{F} ). $$
Of course this is possible only if $(A+ \omega^2 I) = \bigl(A- (-\omega^2) I\bigr)$ is invertible. That matrix is invertible if and only if $-\omega^2$ is not an eigenvalue of $A$. That is true if and only if $\omega$ is not a natural frequency of the system.

We simplified things a little bit. If we wish to have the forcing term to be in the units of force, say Newtons, then we must write
$$ M \vec{x}'' = K \vec{x} + \vec{G} \cos(\omega t) . $$
If we then write things in terms of $A = M^{-1} K$, we have
$$ \vec{x}'' = M^{-1}K \vec{x} + M^{-1} \vec{G} \cos(\omega t) \qquad \text{or} \qquad \vec{x}'' = A \vec{x} + \vec{F} \cos(\omega t) , $$
where $\vec{F} = M^{-1} \vec{G}$.

:::example {ex:example-3-6-3} Example 3.6.3
Let us take the example in [Figure 3.13](ref:sosa-twocartswallfig) with the same parameters as before: $m_1 = 2$, $m_2 = 1$, $k_1 = 4$, and $k_2 = 2$. Now suppose that there is a force $2 \cos (3t)$ acting on the second cart.

The equation is
$$ \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} {\vec{x}}'' = \begin{bmatrix} -(4+2) & 2 \\ 2 & -2 \end{bmatrix} \vec{x} + \begin{bmatrix} 0 \\ 2 \end{bmatrix} \cos (3 t) \quad \text{or} \quad {\vec{x}}'' = \begin{bmatrix} -3 & 1 \\ 2 & -2 \end{bmatrix} \vec{x} + \begin{bmatrix} 0 \\ 2 \end{bmatrix} \cos (3 t) . $$
We solved the associated homogeneous equation before and found the complementary solution to be
$$ \vec{x}_c = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \bigl( a_1 \cos (t) + b_1 \sin (t) \bigr) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \bigl( a_2 \cos (2t) + b_2 \sin (2t) \bigr) . $$

The natural frequencies are 1 and 2. As 3 is not a natural frequency, we try $\vec{c} \cos (3t)$. We invert $(A+3^2 I)$:
$$ {\left( \begin{bmatrix} -3 & 1 \\ 2 & -2 \end{bmatrix} +3^2 I\right)}^{-1} = {\begin{bmatrix} 6 & 1 \\ 2 & 7 \end{bmatrix}}^{-1} = \begin{bmatrix} \frac{7}{40} & \frac{-1}{40} \\ \frac{-1}{20} & \frac{3}{20} \end{bmatrix} . $$
Hence,
$$ \vec{c} = {(A +\omega^2 I)}^{-1} (-\vec{F} ) = \begin{bmatrix} \frac{7}{40} & \frac{-1}{40} \\ \frac{-1}{20} & \frac{3}{20} \end{bmatrix} \begin{bmatrix} 0 \\ -2 \end{bmatrix} = \begin{bmatrix} \frac{1}{20} \\ \frac{-3}{10} \end{bmatrix} . $$

Combining with the general solution of the associated homogeneous problem, we get that the general solution to ${\vec{x}}'' = A \vec{x} + \vec{F} \cos (\omega t)$ is
$$ \begin{split} \vec{x} & = \vec{x}_c + \vec{x}_p \\ & = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \bigl( a_1 \cos (t) + b_1 \sin (t) \bigr) + \begin{bmatrix} 1 \\ -1 \end{bmatrix} \bigl( a_2 \cos (2t) + b_2 \sin (2t) \bigr) + \begin{bmatrix} \frac{1}{20} \\ \frac{-3}{10} \end{bmatrix} \cos (3t) . \end{split} $$
We would then solve for the constants $a_1$, $a_2$, $b_1$, and $b_2$ using any given initial conditions.
:::

Note that given force $\vec{f}$, we write the equation as $M {\vec{x}}'' = K \vec{x} + \vec{f}$ to get the units right. Then we write ${\vec{x}}'' = M^{-1}K \vec{x} + M^{-1}\vec{f}$. The term $\vec{g} = M^{-1} \vec{f}$ in ${\vec{x}}'' = A \vec{x} + \vec{g}$ is in units of force per unit mass.

If $\omega$ is a natural frequency of the system, *{index:resonance}* may occur, because we will have to try a particular solution of the form
$$ \vec{x}_p = \vec{c} \, t \sin (\omega t) + \vec{d} \, \cos (\omega t) . $$
That is assuming that the eigenvalues of the coefficient matrix are distinct. Next, note that the amplitude of this solution grows without bound as $t$ grows.

## Exercises

:::exercise {exercise-3-6-003} number=3.6.3 answered=no src=ch-systems.tex:4133
PROBLEM:
Find a particular solution to
$$ {\vec{x}}'' = \begin{bmatrix} -3 & 1 \\ 2 & -2 \end{bmatrix} \vec{x} + \begin{bmatrix} 0 \\ 2 \end{bmatrix} \cos (2 t) . $$

:::

:::exercise {exercise-3-6-004} number=3.6.4 answered=no src=ch-systems.tex:4149
PROBLEM:
**challenging**
Consider the example in [Figure 3.13](ref:sosa-twocartswallfig) with the same parameters as before: $m_1 = 2$, $k_1 = 4$, and $k_2 = 2$, except for $m_2$, which is unknown. Suppose that there is a force $\cos (5 t)$ acting on the first mass. Find an $m_2$ such that there exists a particular solution where the first mass does not move.

Note: This idea is called *{index:dynamic damping}*. In practice there will be a small amount of damping and so any transient solution will disappear and after long enough time, the first mass will always come to a stop.
:::

:::exercise {exercise-3-6-005} number=3.6.5 answered=no src=ch-systems.tex:4164
PROBLEM:
Let us take the [Example 3.6.2](ref:sosa-railcarexample), but that at time of impact, car 2 is moving to the left with speed 3 m/s.

a) Find the behavior of the system after linkup.
b) Will the second car hit the wall, or will it be moving away from the wall as time goes on?
c) At what speed would the first car have to be traveling for the system to essentially stay in place after linkup?

:::

:::exercise {exercise-3-6-006} number=3.6.6 answered=no src=ch-systems.tex:4181
PROBLEM:
Let us take the example in [Figure 3.13](ref:sosa-twocartswallfig) with parameters $m_1 = m_2 = 1$, $k_1 = k_2 = 1$. Does there exist a set of initial conditions for which the first cart moves but the second cart does not? If so, find those conditions. If not, argue why not.
:::

:::exercise {exercise-3-6-101} number=3.6.101 answered=yes src=ch-systems.tex:4191
PROBLEM:
Find the general solution to $\left[ \begin{smallmatrix} 1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 3 \end{smallmatrix}\right] \vec{x}\,'' = \left[ \begin{smallmatrix} -3 & 0 & 0 \\ 2 & -4 & 0 \\ 0 & 6 & -3 \end{smallmatrix}\right] \vec{x} + \left[ \begin{smallmatrix} \cos(2t) \\ 0 \\ 0 \end{smallmatrix}\right]$.
SOLUTION:
$\vec{x} = \left[ \begin{smallmatrix} 1 \\ -1 \\ 1 \end{smallmatrix}\right] \bigl( a_1 \cos (\sqrt{3}\, t) + b_1 \sin (\sqrt{3}\, t) \bigr) + \left[ \begin{smallmatrix} 0 \\ 1 \\ -2 \end{smallmatrix}\right] \bigl( a_2 \cos (\sqrt{2}\, t) + b_2 \sin (\sqrt{2}\, t) \bigr) +$
$\left[ \begin{smallmatrix} 0 \\ 0 \\ 1 \end{smallmatrix}\right] \bigl( a_3 \cos (t) + b_3 \sin (t) \bigr) + \left[ \begin{smallmatrix} -1 \\ {1}/{2} \\ {-1}/{3} \end{smallmatrix}\right] \cos (2t)$
:::

:::exercise {exercise-3-6-102} number=3.6.102 answered=yes src=ch-systems.tex:4238
PROBLEM:
Suppose there are three carts of equal mass $m$ and connected by two springs of constant $k$ (and no connections to walls). Set up the system and find its general solution.
SOLUTION:
$\left[ \begin{smallmatrix} m & 0 & 0\\ 0 & m & 0\\ 0 & 0 & m \end{smallmatrix}\right] \vec{x}\,'' = \left[ \begin{smallmatrix} -k & k & 0 \\ k & -2k & k \\ 0 & k & -k \end{smallmatrix}\right] \vec{x}$. Solution: $\vec{x} = \left[ \begin{smallmatrix} 1 \\ -2 \\ 1 \end{smallmatrix}\right] \bigl( a_1 \cos (\sqrt{{3k}/{m}}\, t) + b_1 \sin (\sqrt{{3k}/{m}}\, t) \bigr) + \left[ \begin{smallmatrix} 1 \\ 0 \\ -1 \end{smallmatrix}\right] \bigl( a_2 \cos (\sqrt{{k}/{m}}\, t) + b_2 \sin (\sqrt{{k}/{m}}\, t) \bigr) + \left[ \begin{smallmatrix} 1 \\ 1 \\ 1 \end{smallmatrix}\right] \bigl( a_3 t + b_3 \bigr).$
:::

:::exercise {exercise-3-6-103} number=3.6.103 answered=yes src=ch-systems.tex:4278
PROBLEM:
Suppose a cart of mass 2 kg is attached by a spring of constant $k=1$ to a cart of mass 3 kg, which is attached to the wall by a spring also of constant $k=1$. Suppose that the initial position of the first cart is 1 meter in the positive direction from the rest position, and the second cart starts at the rest position. The carts are not moving and are let go. Find the position of the second cart as a function of time.
SOLUTION:
$x_2 = ( {2}/{5} ) \cos (\sqrt{{1}/{6}}\, t) - ( {2}/{5} ) \cos (t)$
:::

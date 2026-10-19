# 7.3 Singular points and the method of Frobenius {sec:frobenius-section}

:::note [section-notes]
*Note: 1.5 or 2 lectures, §8.3 and §8.4 in [EP](cite:EP), §5.4–§5.7 in [BD](cite:BD)*
:::

The behavior of ODEs at singular points can be complicated. For certain singular points, we can find a solution on at least one side of the singular point using a modification of the power series. Let us look at some examples before giving a general method.

## Examples

:::example {ex:example-7-3-1} Example 7.3.1
Consider the simple first-order equation
$$ 2 x y' - y = 0 . $$
Note that $x=0$ is a singular point. Setting $x=0$ in the equation, we find that any solution defined near zero satisfies $y(0)=0$, but it is even worse. If we try to plug in
$$ y = \sum_{k=0}^\infty a_k x^k , $$
we obtain
$$ \begin{split} 0 = 2 xy'-y &= 2x \, \Biggl( \sum_{k=1}^\infty k a_k x^{k-1} \Biggr) - \Biggl( \sum_{k=0}^\infty a_k x^k \Biggr) \\ & = -a_0 + \sum_{k=1}^\infty (2 k a_k - a_k) \, x^{k} . \end{split} $$
First, $a_0 = 0$. Next, the only way to solve $0 = 2 k a_k - a_k = (2k-1) \, a_k$ for $k = 1,2,3,\dots$ is for $a_k = 0$ for all $k$. Therefore, in this manner we only get the trivial solution $y=0$. We need a nonzero solution to get the general solution to the equation.

Let us try $y=x^r$ for some real number $r$. Consequently our solution—if we can find one—may only make sense for positive $x$. Then $y' = r x^{r-1}$. So
$$ 0 = 2 x y' - y = 2 x r x^{r-1} - x^r = (2r-1) x^r . $$
Thus $r= {1}/{2}$ and so $y = x^{1/2}$. As the equation is linear, the general solution for positive $x$ is
$$ y = C x^{1/2} . $$
If $C \neq 0$, then the derivative of the solution “blows up” at $x=0$ (the singular point). There is only one solution that is differentiable at $x=0$ and that’s the trivial solution $y=0$.
:::

Not every problem with a singular point has a solution of the form $y=x^r$, of course. But perhaps we can combine the methods. What we will do is to try a solution of the form
$$ y = x^r f(x) $$
for positive $x$, where $f(x)$ is an analytic function (a power series).

:::example {ex:example-7-3-2} Example 7.3.2
Consider the equation
$$ 4 x^2 y'' - 4 x^2 y' + (1-2x)y = 0, $$
and again note that $x=0$ is a singular point.

Let us try
$$ y = x^r \sum_{k=0}^\infty a_k x^k = \sum_{k=0}^\infty a_k x^{k+r} , $$
where $r$ is a real number, not necessarily an integer. Again if such a solution exists, it may only exist for positive $x$. First we find the derivatives
$$ \begin{align*} y' & = \sum_{k=0}^\infty (k+r)\, a_k x^{k+r-1} , \\ y'' & = \sum_{k=0}^\infty (k+r)\,(k+r-1)\, a_k x^{k+r-2} . \end{align*} $$
We plug those into our equation:
$$ \begin{split} 0 & = 4x^2y''-4x^2y'+(1-2x)y \\ &= 4x^2 \, \Biggl( \sum_{k=0}^\infty (k+r)\,(k+r-1) \, a_k x^{k+r-2} \Biggr) \\ & \phantom{mmm} - 4x^2 \, \Biggl( \sum_{k=0}^\infty (k+r) \, a_k x^{k+r-1} \Biggr) + (1-2x) \Biggl( \sum_{k=0}^\infty a_k x^{k+r} \Biggr) \\ &= \Biggl( \sum_{k=0}^\infty 4 (k+r)\,(k+r-1) \, a_k x^{k+r} \Biggr) \\ & \phantom{mmm} - \Biggl( \sum_{k=0}^\infty 4 (k+r) \, a_k x^{k+r+1} \Biggr) + \Biggl( \sum_{k=0}^\infty a_k x^{k+r} \Biggr) - \Biggl( \sum_{k=0}^\infty 2a_k x^{k+r+1} \Biggr) \\ &= \Biggl( \sum_{k=0}^\infty 4 (k+r)\,(k+r-1) \, a_k x^{k+r} \Biggr) \\ & \phantom{mmm} - \Biggl( \sum_{k=1}^\infty 4 (k+r-1) \, a_{k-1} x^{k+r} \Biggr) + \Biggl( \sum_{k=0}^\infty a_k x^{k+r} \Biggr) - \Biggl( \sum_{k=1}^\infty 2a_{k-1} x^{k+r} \Biggr) \\ &= 4r(r-1) \, a_0 x^r + a_0 x^r \\ & \phantom{mmm} + \sum_{k=1}^\infty \Bigl( 4 (k+r)\,(k+r-1) \, a_k - 4 (k+r-1) \, a_{k-1} + a_k - 2a_{k-1} \Bigr) \, x^{k+r} \\ &= \bigl( 4r(r-1) + 1 \bigr) \, a_0 x^r \\ & \phantom{mmm} + \sum_{k=1}^\infty \Bigl( \bigl( 4 (k+r)\,(k+r-1) + 1 \bigr) \, a_k - \bigl( 4 (k+r-1) + 2 \bigr) \, a_{k-1} \Bigr) \, x^{k+r} . \end{split} $$
First, to have a solution we must have $\bigl( 4r(r-1) + 1 \bigr) \, a_0 = 0$. Supposing $a_0 \neq 0$,
$$ 4r(r-1) + 1 = 0 . $$
This equation is called the *{index:indicial equation}*. This particular indicial equation has a double root at $r = {1}/{2}$.

OK, so we know what $r$ has to be. That knowledge we obtained simply by looking at the coefficient of $x^r$. All other coefficients of $x^{k+r}$ also have to be zero so
$$ \bigl( 4 (k+r)\,(k+r-1) + 1 \bigr) \, a_k - \bigl( 4 (k+r-1) + 2 \bigr) \, a_{k-1} = 0 . $$
If we plug in $r={1}/{2}$ and solve for $a_k$, we get
$$ a_k = \frac{4 (k+{1}/{2}-1) + 2}{4 (k+{1}/{2})\,(k+{1}/{2}-1) + 1} \, a_{k-1} = \frac{1}{k} \, a_{k-1} . $$
Let us set $a_0 = 1$. Then
$$ a_1 = \frac{1}{1} a_0 = 1 , \quad a_2 = \frac{1}{2} a_1 = \frac{1}{2} , \quad a_3 = \frac{1}{3} a_2 = \frac{1}{3 \cdot 2} , \quad a_4 = \frac{1}{4} a_3 = \frac{1}{4 \cdot 3 \cdot 2} , \quad \cdots $$
Extrapolating, we notice that
$$ a_k = \frac{1}{k(k-1)(k-2) \cdots 3 \cdot 2} = \frac{1}{k!} . $$
In other words,
$$ y = \sum_{k=0}^\infty a_k x^{k+r} = \sum_{k=0}^\infty \frac{1}{k!} x^{k+1/2} = x^{1/2} \sum_{k=0}^\infty \frac{1}{k!} x^{k} = x^{1/2} e^x . $$
That was lucky! In general, we will not be able to write the series in terms of elementary functions.

We have one solution, let us call it $y_1 = x^{1/2} e^x$. But what about a second solution? If we want a general solution, we need two linearly independent solutions. Picking $a_0$ to be a different constant only gets us a constant multiple of $y_1$, and we do not have any other $r$ to try; we only have one solution to the indicial equation. Well, there are powers of $x$ floating around and we are taking derivatives, perhaps the logarithm (the antiderivative of $x^{-1}$) is around as well. It turns out we want to try for another solution of the form
$$ y_2 = \sum_{k=0}^\infty b_k x^{k+r} + (\ln x) y_1 , $$
which in our case is
$$ y_2 = \sum_{k=0}^\infty b_k x^{k+1/2} + (\ln x) x^{1/2} e^x . $$
We now differentiate this equation, substitute into the differential equation and solve for $b_k$. A long computation ensues and we obtain some recursion relation for $b_k$. The reader can (and should) try this to obtain for example the first three terms
$$ b_1 = b_0 -1 , \qquad b_2 = \frac{2b_1-1}{4} , \qquad b_3 = \frac{6b_2-1}{18} , \qquad \ldots $$
We then fix $b_0$ and obtain a solution $y_2$. Then we write the general solution as $y = A y_1 + B y_2$.
:::

## The method of Frobenius

Before giving the general method, let us clarify when the method applies. Let
$$ P(x) y'' + Q(x) y' + R(x) y = 0 $$
be an ODE for polynomials $P(x)$, $Q(x)$, and $R(x)$. As before, if $P(x_0) = 0$, then $x_0$ is a singular point. If we divide by $P(x)$ to put the equation in standard form $y'' + \frac{Q(x)}{P(x)} y' + \frac{R(x)}{P(x)} y = 0$, perhaps the singularities introduced are not too bad. More specifically, if the limits
$$ \lim_{x \to x_0} ~ (x-x_0) \frac{Q(x)}{P(x)} \qquad \text{and} \qquad \lim_{x \to x_0} ~ (x-x_0)^2 \frac{R(x)}{P(x)} $$
both exist and are finite, then we say that $x_0$ is a *{index:regular singular point}*.

:::example {ex:example-7-3-3} Example 7.3.3
Often, and for the rest of this section, $x_0 = 0$. Consider
$$ x^2y'' + x(1+x)y' + (\pi+x^2)y = 0 . $$
Write
$$ \begin{align*} & \lim_{x \to 0} ~x \frac{Q(x)}{P(x)} = \lim_{x \to 0} ~x \frac{x(1+x)}{x^2} = \lim_{x \to 0} ~(1+x) = 1 , \\ & \lim_{x \to 0} ~x^2 \frac{R(x)}{P(x)} = \lim_{x \to 0} ~x^2 \frac{(\pi+x^2)}{x^2} = \lim_{x \to 0} ~(\pi+x^2) = \pi . \end{align*} $$
So $x = 0$ is a regular singular point.

On the other hand, if we make the slight change
$$ x^2y'' + (1+x)y' + (\pi+x^2)y = 0 , $$
then
$$ \lim_{x \to 0} ~x \frac{Q(x)}{P(x)} = \lim_{x \to 0} ~x \frac{(1+x)}{x^2} = \lim_{x \to 0} ~\frac{1+x}{x} = \text{DNE}. $$
Here DNE stands for *does not exist*. The point $0$ is singular, but not a regular singular point.
:::

We now discuss the general *{index:Method of Frobenius}*{index-entry:Frobenius method}^[Named after the German mathematician [Ferdinand Georg Frobenius](http://en.wikipedia.org/wiki/Ferdinand_Georg_Frobenius) (1849–1917).]. We only consider the method at the point $x=0$ for simplicity. If $x_0 \neq 0$, then in the solution, we would replace every $x$ with $(x-x_0)$. The main idea is the following theorem.

:::theorem {thm:theorem-7-3-1} Theorem 7.3.1 (Method of Frobenius)
Suppose that
$$ P(x) y'' + Q(x) y' + R(x) y = 0 $$ {eq:eq-frobeniusmethod} number=7.3
has a regular singular point at $x=0$, then there exists at least one solution of the form
$$ y = x^r \sum_{k=0}^\infty a_k x^k . $$
A solution of this form is called a *{index:Frobenius-type solution}*.
:::

[2] The method usually breaks down like this:

(i) We seek a Frobenius-type solution of the form
$$ y = \sum_{k=0}^\infty a_k x^{k+r} . $$
We plug this $y$ into the left-hand side of equation [(7.3)](ref:eq-frobeniusmethod), collect terms, and write everything as a single series.
(ii) The obtained series must be zero. Setting the first coefficient (the one with the smallest power) in the series to zero we obtain the *indicial equation*, which is a quadratic polynomial in $r$.
(iii) If the indicial equation has two real roots $r_1$ and $r_2$ such that $r_1 - r_2$ is not an integer, then we have two linearly independent Frobenius-type solutions. Using the first root, we plug in
$$ y_1 = x^{r_1} \sum_{k=0}^\infty a_k x^{k} , $$
and we solve for all $a_k$ to obtain the first solution. Then using the second root, we plug in
$$ y_2 = x^{r_2} \sum_{k=0}^\infty b_k x^{k} , $$
and solve for all $b_k$ to obtain the second solution.
(iv) If the indicial equation has a doubled root $r$, then there we find one solution
$$ y_1 = x^{r} \sum_{k=0}^\infty a_k x^{k} , $$
and then we obtain a new solution by plugging
$$ y_2 = x^{r} \sum_{k=0}^\infty b_k x^{k} + (\ln x) y_1 , $$
into equation [(7.3)](ref:eq-frobeniusmethod) and solving for the constants $b_k$.
(v) If the indicial equation has two real roots such that $r_1-r_2$ is an integer, then, assuming $r_1$ is the larger root, one solution is
$$ y_1 = x^{r_1} \sum_{k=0}^\infty a_k x^{k} , $$
and the second linearly independent solution is of the form
$$ y_2 = x^{r_2} \sum_{k=0}^\infty b_k x^{k} + C (\ln x) y_1 , $$
where we plug $y_2$ into [(7.3)](ref:eq-frobeniusmethod) and solve for the constants $b_k$ and $C$.
(vi) Finally, if the indicial equation has complex roots, then solving for $a_k$ in the solution
$$ y = x^{r_1} \sum_{k=0}^\infty a_k x^{k} $$
results in a complex-valued function—the $a_k$ are complex numbers. We obtain our two linearly independent solutions^[See Joseph L. Neuringer, *The Frobenius method for complex roots of the indicial equation*, International Journal of Mathematical Education in Science and Technology, Volume 9, Issue 1, 1978, 71–77.] by taking the real and imaginary parts of $y$.

The main idea is to find at least one Frobenius-type solution. If we are lucky and find two, we are done. If we only get one, we either use the ideas above or even a different method such as reduction of order (see [§2.1](ref:2.1#solinear-section)) to obtain a second solution.

## Bessel functions {sec:bessel-subsection}

An important class of functions that arise commonly in physics are the *Bessel functions*^[Named after the German astronomer and mathematician [Friedrich Wilhelm Bessel](http://en.wikipedia.org/wiki/Friedrich_Bessel) (1784–1846).]. For example, these functions appear when solving the wave equation in two and three dimensions. First consider *{index:Bessel’s equation}* of order $p$:
$$ x^2 y'' + xy' + \left(x^2 - p^2\right)y = 0 . $$
We allow $p$ to be any number, not just an integer, although integers and multiples of ${1}/{2}$ are most important in applications.

When we plug
$$ y = \sum_{k=0}^\infty a_k x^{k+r} $$
into Bessel’s equation of order $p$, we obtain the indicial equation
$$ r(r-1)+r-p^2 = (r-p)(r+p) = 0 . $$
Unless $p=0$, we obtain two roots, $r_1 = p$ and $r_2 = -p$. If $p$ is not an integer, then following the method of Frobenius and setting $a_0 = 1$, we find linearly independent solutions of the form
$$ \begin{align*} & y_1 = x^p \sum_{k=0}^\infty \frac{{(-1)}^k x^{2k}}{2^{2k} k! (k+p)(k-1+p)\cdots (2+p)(1+p)} , \\ & y_2 = x^{-p} \sum_{k=0}^\infty \frac{{(-1)}^k x^{2k}}{2^{2k} k! (k-p)(k-1-p)\cdots (2-p)(1-p)} . \end{align*} $$

:::exercise {exercise-7-3-001} number=7.3.1 answered=no src=ch-power-ser.tex:1748
PROBLEM:

a) Verify that the indicial equation of Bessel’s equation of order $p$ is $(r-p)(r+p)=0$.
b) Suppose $p$ is not an integer. Carry out the computation to find the solutions $y_1$ and $y_2$ above.

:::

Bessel functions are convenient constant multiples of $y_1$ and $y_2$. First, we define the *gamma function*
$$ \Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, dt . $$
Notice that $\Gamma(1) = 1$. The gamma function also has a wonderful property
$$ \Gamma(x+1) = x \Gamma(x) . $$
From this property, it follows that $\Gamma(n) = (n-1)!$ when $n$ is a positive integer. So the gamma function is a continuous version of the factorial. We compute:
$$ \begin{align*} & \Gamma(k+p+1)=(k+p)(k-1+p)\cdots (2+p)(1+p) \Gamma(1+p) , \\ & \Gamma(k-p+1)=(k-p)(k-1-p)\cdots (2-p)(1-p) \Gamma(1-p) . \end{align*} $$

:::exercise {exercise-7-3-002} number=7.3.2 answered=no src=ch-power-ser.tex:1779
PROBLEM:
Verify the identities above using $\Gamma(x+1) = x \Gamma(x)$.
:::

Using $\Gamma(x+1) = x \Gamma(x)$, we define the gamma function for all $x$ except nonpositive integers. The reciprocal $\frac{1}{\Gamma(x)}$ can be defined for all $x$ by letting $\frac{1}{\Gamma(x)}$ be zero for integers $x \leq 0$.

We define the *Bessel functions of the first kind*{index-entry:Bessel function of the first kind} of order $p$ and $-p$ as
$$ \begin{align*} & J_p(x) = \frac{1}{2^p\Gamma(1+p)} y_1 = \sum_{k=0}^\infty \frac{{(-1)}^k}{k! \, \Gamma(k+p+1)} {\left(\frac{x}{2}\right)}^{2k+p} , \\ & J_{-p}(x) = \frac{1}{2^{-p}\Gamma(1-p)} y_2 = \sum_{k=0}^\infty \frac{{(-1)}^k}{k! \,\Gamma(k-p+1)} {\left(\frac{x}{2}\right)}^{2k-p} . \end{align*} $$
As these are constant multiples of the solutions we found above, these are both solutions to Bessel’s equation of order $p$. The constants are picked for convenience. As the reciprocal of $\Gamma$ is defined for all $x$, the formulas on the right hold even for integer $p$. When $n$ is a nonnegative integer,
$$ J_n(x) = \sum_{k=0}^\infty \frac{{(-1)}^k}{k! \,(k+n)!} {\left(\frac{x}{2}\right)}^{2k+n} . $$

When $p$ is not an integer, $J_p$ and $J_{-p}$ are linearly independent. For integer orders, one can check that
$$ J_n(x) = {(-1)}^nJ_{-n}(x) . $$
So $J_{-n}$ is not a second linearly independent solution. The other solution is the so-called *{index:Bessel function of second kind}*. These make sense only for integer orders $n$ and are defined as limits of linear combinations of $J_p(x)$ and $J_{-p}(x)$, as $p$ approaches $n$ in the following way:
$$ Y_n(x) = \lim_{p\to n} \frac{\cos(p \pi) J_p(x) - J_{-p}(x)}{\sin(p \pi)} . $$
Each linear combination of $J_p(x)$ and $J_{-p}(x)$ is a solution to Bessel’s equation of order $p$. Then as we take the limit as $p$ goes to $n$, we see that $Y_n(x)$ is a solution to Bessel’s equation of order $n$. It also turns out that $Y_n(x)$ and $J_n(x)$ are linearly independent. Therefore, when $n$ is an integer, we have the general solution to Bessel’s equation of order $n$:
$$ y = A J_n(x) + B Y_n(x) , $$
for arbitrary constants $A$ and $B$. Note that $Y_n(x)$ goes to negative infinity at $x=0$. Many mathematical software packages have these functions $J_n(x)$ and $Y_n(x)$ defined, so they can be used just like say $\sin(x)$ and $\cos(x)$. In fact, Bessel functions have some similar properties. For example, $-J_1(x)$ is a derivative of $J_0(x)$, and in general the derivative of $J_n(x)$ can be written as a linear combination of $J_{n-1}(x)$ and $J_{n+1}(x)$. Furthermore, these functions oscillate, although they are not periodic. See [Figure 7.4](ref:bessel-graphsfig) for graphs of Bessel functions.

> FIGURE {fig:bessel-graphsfig} number=7.4 src=../../media/bessel-first-second.svg
> alt: Two plots are shown. In the left-hand plot, two functions that seem to oscillate are graphed for x from 0 to 10, with one starting at 0 but with positive slope, and one starting at 1 with slope zero. Their amplitude seems to be decreasing as x gets larger. In the right-hand plot, similarly two similar plots are shown but now both of them seem to start from minus infinity and go up along the y axis first.
> width: 9in
> caption: Plot of the $J_0(x)$ and $J_1(x)$ in the first graph and $Y_0(x)$ and $Y_1(x)$ in the second graph.

:::example {ex:example-7-3-4} Example 7.3.4
Other equations can sometimes be solved in terms of the Bessel functions. For example, given a positive constant $\lambda$,
$$ x y'' + y' + \lambda^2 x y = 0 , $$
can be changed to $x^2 y'' + x y' + \lambda^2 x^2 y = 0$. Changing variables $t = \lambda x$, we obtain, via the chain rule, the equation in $y$ and $t$:
$$ t^2 y'' + t y' + t^2 y = 0 , $$
which we recognize as Bessel’s equation of order $0$. Therefore the general solution is $y(t) = A J_0(t) + B Y_0(t)$, or in terms of $x$:
$$ y = A J_0(\lambda x) + B Y_0(\lambda x) . $$
This equation comes up, for example, when finding the fundamental modes of vibration of a circular drum, but we digress.
:::

## Exercises

:::exercise {exercise-7-3-003} number=7.3.3 answered=no src=ch-power-ser.tex:1894
PROBLEM:
Find a particular (Frobenius-type) solution of $x^2 y'' + x y' + (1+x) y = 0$.
:::

:::exercise {exercise-7-3-004} number=7.3.4 answered=no src=ch-power-ser.tex:1898
PROBLEM:
Find a particular (Frobenius-type) solution of $x y'' - y = 0$.
:::

:::exercise {exercise-7-3-005} number=7.3.5 answered=no src=ch-power-ser.tex:1902
PROBLEM:
Find a particular (Frobenius-type) solution of $y'' +\frac{1}{x}y' - xy = 0$.
:::

:::exercise {exercise-7-3-006} number=7.3.6 answered=no src=ch-power-ser.tex:1906
PROBLEM:
Find the general solution of $2 x y'' + y' - x^2 y = 0$.
:::

:::exercise {exercise-7-3-007} number=7.3.7 answered=no src=ch-power-ser.tex:1910
PROBLEM:
Find the general solution of $x^2 y'' - x y' -y = 0$.
:::

:::exercise {exercise-7-3-008} number=7.3.8 answered=no src=ch-power-ser.tex:1914
PROBLEM:
In the following equations classify the point $x=0$ as *ordinary*, *regular singular*, or *singular but not regular singular*.

a) $x^2(1+x^2)y''+xy=0$
b) $x^2y''+y'+y=0$
c) $xy''+x^3y'+y=0$
d) $xy''+xy'-e^xy=0$
e) $x^2y''+x^2y'+x^2y=0$

:::

:::exercise {exercise-7-3-101} number=7.3.101 answered=yes src=ch-power-ser.tex:1929
PROBLEM:
In the following equations classify the point $x=0$ as *ordinary*, *regular singular*, or *singular but not regular singular*.

a) $y''+y=0$
b) $x^3y''+(1+x)y=0$
c) $xy''+x^5y'+y=0$
d) $\sin(x)y''-y=0$
e) $\cos(x)y''-\sin(x)y=0$

SOLUTION:
a) ordinary, b) singular but not regular singular, c) regular singular, d) regular singular, e) ordinary.
:::

:::exercise {exercise-7-3-102} number=7.3.102 answered=yes src=ch-power-ser.tex:1946
PROBLEM:
Find the general solution of $x^2 y'' -y = 0$.
SOLUTION:
$y = A x^{\frac{1+\sqrt{5}}{2}} + B x^{\frac{1-\sqrt{5}}{2}}$
:::

:::exercise {exercise-7-3-103} number=7.3.103 answered=yes src=ch-power-ser.tex:1953
PROBLEM:
Find a particular solution of $x^2 y'' +(x-{3}/{4})y = 0$.
SOLUTION:
$y = x^{3/2} \sum\limits_{k=0}^\infty \frac{{(-1)}^{k}}{k!\,(k+2)!} x^k$ (Note that for convenience we did not pick $a_0 = 1$.)
:::

:::exercise {exercise-7-3-104} number=7.3.104 answered=yes src=ch-power-ser.tex:1961
PROBLEM:
**tricky**
Find the general solution of $x^2 y'' - x y' +y = 0$.
SOLUTION:
$y = Ax + B x \ln(x)$
:::

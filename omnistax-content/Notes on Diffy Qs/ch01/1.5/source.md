# 1.5 Substitution {sec:substitution-section}

:::note [section-notes]
*Note: 1 lecture, can safely be skipped, §1.6 in [EP](cite:EP), not in [BD](cite:BD)*
:::

Just as when solving integrals, one method to try is to change variables to end up with a simpler equation to solve.

## Substitution

The equation
$$ y' = {(x-y+1)}^2 $$
is neither separable nor linear. What can we do? How about trying to change variables, so that in the new variables the equation is simpler? We use another variable $v$, which we treat as a function of $x$. We try
$$ v = x-y+1 . $$
We need to figure out $y'$ in terms of $v'$, $v$ and $x$. We differentiate (in $x$) to obtain $v' = 1 - y'$. So $y' = 1-v'$. We plug this into the equation to get
$$ 1-v' = v^2 . $$
In other words, $v' = 1-v^2$. We know how to solve such an equation by separating variables:
$$ \frac{1}{1-v^2} \,dv = dx . $$
So
$$ \frac{1}{2} \ln \left\lvert \frac{v+1}{v-1} \right\rvert = x + C , \qquad \text{or} \qquad \left\lvert \frac{v+1}{v-1} \right\rvert = e^{2x + 2C} , \qquad \text{or} \qquad \frac{v+1}{v-1} = D e^{2x} , $$
for some constant $D$. Note that $v=1$ and $v=-1$ are also solutions.

Now we need to “unsubstitute” to obtain
$$ \frac{x-y+2}{x-y} = D e^{2x} , $$
and also the two solutions $x-y+1=1$ or $y=x$, and $x-y+1=-1$ or $y=x+2$. We solve the first equation for $y$:
$$ \begin{aligned} x-y+2 &= (x-y)D e^{2x} , \\ x-y+2 &= Dx e^{2x}-yD e^{2x} , \\ -y + yD e^{2x} &= Dx e^{2x} - x - 2 , \\ y\,(-1+ D e^{2x}) &= Dx e^{2x} - x - 2 , \\ y &= \frac{Dx e^{2x} - x - 2}{D e^{2x}-1} . \end{aligned} $$
Note that $D=0$ gives $y=x+2$, but no value of $D$ gives the solution $y=x$.

Substitution in differential equations is applied in much the same way that it is applied in calculus. You guess. Several different substitutions might work. There are some general patterns to look for. We summarize a few of these in a table.

> TABLE cols=2
| When you see | Try substituting |
| --- | --- |
| $yy'$ | $v=y^2$ |
| $y^2y'$ | $v=y^3$ |
| $(\cos y)y'$ | $v=\sin y$ |
| $(\sin y)y'$ | $v=\cos y$ |
| $e^y y'$ | $v=e^y$ |

Usually, you try to substitute in the “most complicated” part of the equation, with the hope of simplifying it. The table above is just a rule of thumb. You might have to modify your guesses. If a substitution does not work (it does not make the equation any simpler), try a different one.

## Bernoulli equations

There are some forms of equations where there is a general rule for substitution that always works. One such example is the so-called *{index:Bernoulli equation}*^[There are several things called Bernoulli equations; this is just one of them. The Bernoullis were a prominent Swiss family of mathematicians. These particular equations are named for [Jacob Bernoulli](https://en.wikipedia.org/wiki/Jacob_Bernoulli) (1654–1705).]:
$$ y' + p(x)y = q(x)y^n . $$
This equation looks a lot like a linear equation except for the $y^n$. If $n=0$ or $n=1$, then the equation is linear and we can solve it. Otherwise, the substitution $v=y^{1-n}$ transforms the Bernoulli equation into a linear equation. Note that $n$ need not be an integer.

:::example {ex:example-1-5-1} Example 1.5.1
Solve
$$ xy'+ y(x+1)+xy^5 = 0, \qquad y(1)=1 . $$
Divide the equation by $x$ and rearrange to see it is a Bernoulli equation, $y'+ \frac{x+1}{x} y = -y^5$, that is, $p(x) = \frac{x+1}{x}$ and $q(x) = -1$. We substitute
$$ v=y^{1-5} = y^{-4}, \qquad v' = -4 y^{-5} y' . $$
In other words, $\left( {-1}/{4} \right) y^5 v' = y'$. So
$$ \begin{align*} xy'+ y(x+1)+xy^5 & = 0 , \\ \frac{-xy^5}{4} v'+ y(x+1)+xy^5 & = 0 , \\ \frac{-x}{4} v'+ y^{-4}(x+1)+x & = 0 , \\ \frac{-x}{4} v'+ v(x+1)+x & = 0 , \end{align*} $$
and finally
$$ v'- \frac{4(x+1)}{x} v = 4 . $$
The equation is now linear. We can use the integrating factor method. In particular, we use formula [(1.4)](ref:1.4#lei-defsol). We assume that $x > 0$ so $\lvert x \rvert = x$. This assumption is OK, as our initial condition is at $x=1 > 0$. Let us compute the integrating factor. Here $p(s)$ from formula [(1.4)](ref:1.4#lei-defsol) is $\frac{-4(s+1)}{s}$.
$$ \begin{align*} e^{\int_1^x p(s)\,ds} & = \exp \left( \int_1^x \frac{-4(s+1)}{s} \,ds \right) = e^{-4x-4\ln(x)+4} = e^{-4x+4} x^{-4} = \frac{e^{-4x+4}}{x^4} , \\ e^{-\int_1^x p(s)\,ds} & = e^{4x+4\ln(x)-4} = e^{4x-4} x^4 . \end{align*} $$
We now plug in to [(1.4)](ref:1.4#lei-defsol)
$$ \begin{split} v(x) & = e^{-\int_{1}^x p(s)\, ds} \left( \int_{1}^x e^{\int_{1}^t p(s)\, ds} 4 \,dt + 1 \right) \\ & = e^{4x-4} x^4 \left( \int_{1}^x 4 \frac{e^{-4t+4}}{t^4} \,dt + 1 \right) . \end{split} $$
The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now “unsubstitute”
$$ \begin{align*} y^{-4} &= e^{4x-4}x^4 \left( 4 \int_1^x \frac{e^{-4t+4}}{t^4} \,dt + 1\right) , \\ y &= \frac{e^{-x+1}}{x {\left( 4 \int_1^x \frac{e^{-4t+4}}{t^4} \,dt + 1\right)}^{1/4}} . \end{align*} $$

:::

## Homogeneous equations

Using substitution, we can also solve the so-called *homogeneous equations{index-entry:homogeneous equation}*. Suppose that we can write the differential equation as
$$ y' = F\left(\frac{y}{x}\right) . $$
Here we try the substitutions
$$ v = \frac{y}{x} \qquad \text{and therefore} \qquad y' = v + x v' . $$
We note that the equation is transformed into
$$ v+ xv' = F(v) \qquad \text{or} \qquad xv' = F(v)-v \qquad \text{or} \qquad \frac{v'}{F(v)-v} = \frac{1}{x} . $$
Hence an implicit solution is
$$ \int \frac{1}{F(v)-v} \,dv = \ln \, \lvert x \rvert + C . $$
Clearly this solution does not work when $x = 0$ (we would, after all, divide by zero in ${y}/{x}$). So we will either assume $x > 0$ or $x < 0$ depending on the initial condition.

:::example {ex:example-1-5-2} Example 1.5.2
Solve
$$ x^2y' = y^2+xy, \qquad y(1)=1. $$

We put the equation into the form $y'= {\left({y}/{x}\right)}^2+{y}/{x}$, that is, $F(v) = v^2+v$. As the initial condition is for a positive $x$ value, we will assume $x > 0$. We substitute $v={y}/{x}$ to get the separable equation
$$ xv' = v^2+v-v = v^2 , $$
which has a solution
$$ \begin{aligned} \int \frac{1}{v^2} \,dv &= \ln \, \lvert x \rvert + C , \\ \frac{-1}{v} &= \ln x + C , \\ v &= \frac{-1}{\ln x + C} . \end{aligned} $$
We unsubstitute
$$ \frac{y}{x} = \frac{-1}{\ln x + C} , \qquad \text{or} \qquad y = \frac{-x}{\ln x + C} . $$
We want $y(1)=1$, so
$$ 1 = y(1) = \frac{-1}{\ln 1 + C} = \frac{-1}{C} . $$
Thus $C = -1$ and the solution we are looking for is
$$ y = \frac{-x}{\ln x -1} . $$

:::

## Exercises

Hint: Answers need not always be in closed form.

:::exercise {exercise-1-5-001} number=1.5.1 answered=no src=ch-first-order-ode.tex:2040
PROBLEM:
Solve $y'+ y(x^2-1)+xy^6 = 0$, with $y(1)=1$.
:::

:::exercise {exercise-1-5-002} number=1.5.2 answered=no src=ch-first-order-ode.tex:2045
PROBLEM:
Solve $2yy' + 1 = y^2 + x$, with $y(0)=1$.
:::

:::exercise {exercise-1-5-003} number=1.5.3 answered=no src=ch-first-order-ode.tex:2049
PROBLEM:
Solve $y' + xy = y^4$, with $y(0)=1$.
:::

:::exercise {exercise-1-5-004} number=1.5.4 answered=no src=ch-first-order-ode.tex:2053
PROBLEM:
Solve $yy' + x = \sqrt{x^2 + y^2}$.
:::

:::exercise {exercise-1-5-005} number=1.5.5 answered=no src=ch-first-order-ode.tex:2057
PROBLEM:
Solve $y' = {(x+y-1)}^2$.
:::

:::exercise {exercise-1-5-006} number=1.5.6 answered=no src=ch-first-order-ode.tex:2061
PROBLEM:
Solve $y' = \frac{x^2-y^2}{x y}$, with $y(1) = 2$.
:::

:::exercise {exercise-1-5-101} number=1.5.101 answered=yes src=ch-first-order-ode.tex:2067
PROBLEM:
Solve $xy'+y+y^2 = 0$, $y(1)=2$.
SOLUTION:
$y = \frac{2}{3x-2}$
:::

:::exercise {exercise-1-5-102} number=1.5.102 answered=yes src=ch-first-order-ode.tex:2074
PROBLEM:
Solve $xy'+y +x = 0$, $y(1)=1$.
SOLUTION:
$y = \frac{3-x^2}{2 x}$
:::

:::exercise {exercise-1-5-103} number=1.5.103 answered=yes src=ch-first-order-ode.tex:2081
PROBLEM:
Solve $y^2y' = y^3-3x$, $y(0)=2$.
SOLUTION:
$y = {\bigl(7 e^{3x} + 3x + 1 \bigr)}^{1/3}$
:::

:::exercise {exercise-1-5-104} number=1.5.104 answered=yes src=ch-first-order-ode.tex:2088
PROBLEM:
Solve $2yy' = e^{y^2-x^2} + 2x$.
SOLUTION:
$y = \pm\sqrt{x^2-\ln(C-x)}$
:::

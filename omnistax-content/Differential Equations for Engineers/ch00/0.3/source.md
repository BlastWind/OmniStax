# 0.3 Classification of differential equations {sec:classification-section}

:::note [section-notes]
*Note: less than 1 lecture or left as reading, §1.3 in [BD](cite:BD)*
:::

There are many types of differential equations, and we classify them into different categories based on their properties. Let us quickly go over the most basic classification. We already saw the distinction between ordinary and partial differential equations:

- An *ordinary differential equation*{index-entry:Ordinary differential equation}{index-entry:ODE} (ODE) is an equation where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.
- A *partial differential equation*{index-entry:Partial differential equation}{index-entry:PDE} (PDE) is an equation that depend on partial derivatives of several variables. That is, there are several independent variables.

Let us see some examples of ordinary differential equations:
$$ \begin{align*} & \frac{d y}{dt} = ky , & & \text{(Exponential growth)} \\ & \frac{d y}{dt} = k(A-y) , & & \text{(Newton's law of cooling)} \\ & m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + kx = f(t) . & & \text{(Mechanical vibrations)} \end{align*} $$ {index-entry:exponential growth} {index-entry:Newton’s law of cooling} {index-entry:mechanical vibrations}
And of partial differential equations:
$$ \begin{align*} & \frac{\partial y}{\partial t} + c \frac{\partial y}{\partial x} = 0 , & & \text{(Transport equation)} \\ & \frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} , & & \text{(Heat equation)} \\ & \frac{\partial^2 u}{\partial t^2} = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} . & & \text{(Wave equation in 2 dimensions)} \end{align*} $$ {index-entry:transport equation} {index-entry:heat equation} {index-entry:wave equation in 2 dimensions}

If there are several equations working together, we have a so-called *{index:system of differential equations}*. For example,
$$ y' = x , \qquad x' = y $$
is a system of ordinary differential equations. {index:Maxwell’s equations} for electromagnetics,
$$ \begin{align*} & \nabla \cdot \vec{D} = \rho, & & \nabla \cdot \vec{B} = 0 , \\ & \nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}, & & \nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t} , \end{align*} $$
are a system of partial differential equations. The divergence operator $\nabla \cdot$ and the curl operator $\nabla \times$ can be written out in partial derivatives of the functions involved in the $x$, $y$, and $z$ variables.

The next bit of information is the *{index:order}* of the equation (or system). The order is the order of the largest derivative that appears. If the highest derivative that appears is the first derivative, the equation is of first order. If the highest derivative that appears is the second derivative, then the equation is of second order. For example, Newton’s law of cooling above is a first-order equation, while the mechanical vibrations equation is a second-order equation. The equation governing transversal vibrations in a beam,
$$ a^4 \frac{\partial^4 y}{\partial x^4} + \frac{\partial^2 y}{\partial t^2} = 0, $$
is a fourth-order partial differential equation. It is of fourth order as at least one derivative is the fourth derivative. It does not matter that the derivative in $t$ is only of second order.

In the first chapter, we will start attacking first-order ordinary differential equations, that is, equations of the form $\frac{dy}{dx} = f(x,y)$. In general, lower-order equations are easier to work with and have simpler behavior, which is why we start with them.

We also distinguish how the dependent variables appear in the equation (or system). In particular, an equation is *linear*{index-entry:linear equation} if the dependent variable (or variables) and their derivatives appear linearly, that is, only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. The equation is a sum of terms, where each term is a function of the independent variables or a function of the independent variables multiplied by a dependent variable or one of its derivatives. An ordinary differential equation is linear if it can be put into the form
$$ a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx} + a_{0}(x) y = b(x) . $$ {eq:classification-eqlingen} number=2
The functions $a_0$, $a_1$, …, $a_n$ are called the *{index:coefficients}*. The equation is allowed to depend arbitrarily on the independent variable. So
$$ e^x \frac{d^2 y}{dx^2} + \sin(x) \frac{d y}{dx} + x^2 y = \frac{1}{x} $$ {eq:classification-eqlinex} number=3
is a linear equation as $y$ and its derivatives only appear linearly.

All the equations and systems given as examples above are linear. Linearity may not be immediately obvious for Maxwell’s equations unless you write out the divergence and curl in terms of partial derivatives. If an equation is not linear, we say it is *nonlinear*{index-entry:nonlinear equation}. Let us see some example nonlinear equations. {index:Burgers’ equation},
$$ \frac{\partial y}{\partial t} + y \frac{\partial y}{\partial x} = \nu \frac{\partial^2 y}{\partial x^2} , $$
is a nonlinear second-order partial differential equation. It is nonlinear because $y$ and $\frac{\partial y}{\partial x}$ are multiplied together. The equation
$$ \frac{dx}{dt} = x^2 $$ {eq:classification-eqnonlinode} number=4
is a nonlinear first-order ordinary differential equation as there is a second power of the dependent variable $x$. Another nonlinear ODE is the pendulum equation
$$ \theta''+\sin(\theta)=0 , $$ {eq:classification-pendulum} number=5
which is nonlinear as the dependent variable $\theta$ appears inside a $\sin$ function. Nonlinear equations are notoriously difficult to solve and their solutions may behave in strange and unexpected ways. Perhaps you have heard of chaos theory and butterflies in the Amazon causing hurricanes in the Atlantic, all due to nonlinear equations. So sometimes we study related linear equations, such as $\theta''+\theta=0$ for the pendulum, instead. The solutions to $\theta''+\sin(\theta) = 0$ and $\theta''+\theta=0$ are different, but they are close for some short time, and the linear equation is far simpler to solve and analyze.

A linear equation is further called *{index:homogeneous}* if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called *{index:nonhomogeneous}* or *{index:inhomogeneous}*. For example, the exponential growth equation, the wave equation, or the transport equation above are homogeneous. The mechanical vibrations equation above is nonhomogeneous as long as $f(t)$ is not the zero function. Similarly, if the ambient temperature $A$ is nonzero, Newton’s law of cooling is nonhomogeneous. A homogeneous linear ODE can be put into the form
$$ a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx} + a_{0}(x) y = 0 . $$
Compare with [(2)](ref:classification-eqlingen) and notice there is no function $b(x)$.

If the coefficients of a linear equation are actually constant functions, then the equation is said to have *constant coefficients*{index-entry:constant-coefficient}. The coefficients are the functions multiplying the dependent variable(s) or one of its derivatives, not the function $b(x)$ standing alone. A constant-coefficient nonhomogeneous ODE is an equation of the form
$$ a_n \frac{d^n y}{dx^n} + a_{n-1} \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1} \frac{dy}{dx} + a_{0} y = b(x) , $$
where $a_0, a_1, \ldots, a_n$ are all constants, but $b$ may depend on the independent variable $x$. The mechanical vibrations equation is a constant-coefficient nonhomogeneous second-order ODE. The same nomenclature applies to PDEs, so the transport equation, heat equation and wave equation are all examples of constant-coefficient linear PDEs. A linear equation whose coefficients are not constants is sometimes called a *{index:variable-coefficient}* equation.

Finally, an equation (or system) is called *{index:autonomous}* if the equation does not depend on the independent variable. For autonomous ordinary differential equations, the independent variable is then thought of as time. An autonomous equation means an equation that does not change with time. For example, Newton’s law of cooling is autonomous, so are the equations [(4)](ref:classification-eqnonlinode) and [(5)](ref:classification-pendulum). On the other hand, mechanical vibrations (as long as $f(t)$ is nonconstant) or [(3)](ref:classification-eqlinex) are not autonomous. A general first-order autonomous ODE would have the form
$$ \frac{dx}{dt} = f(x) . $$

## Exercises

:::exercise {exercise-0-3-001} number=0.3.1 answered=no src=ch-intro.tex:1117
PROBLEM:
Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?

a) $\displaystyle \sin(t) \frac{d^2 x}{dt^2} + \cos(t) x = t^2$
b) $\displaystyle \frac{\partial u}{\partial x} + 3 \frac{\partial u}{\partial y} = xy$
c) $\displaystyle y''+3y+5x=0, \quad x''+x-y=0$
d) $\displaystyle \frac{\partial^2 u}{\partial t^2} + u\frac{\partial^2 u}{\partial s^2} = 0$
e) $\displaystyle x''+tx^2=t$
f) $\displaystyle \frac{d^4 x}{dt^4} = 0$

:::

:::exercise {exercise-0-3-002} number=0.3.2 answered=no src=ch-intro.tex:1133
PROBLEM:
If $\vec{u} = (u_1,u_2,u_3)$ is a vector, we have the divergence $\nabla \cdot \vec{u} = \frac{\partial u_1}{\partial x} + \frac{\partial u_2}{\partial y} + \frac{\partial u_3}{\partial z}$ and the curl $\nabla \times \vec{u} = \Bigl( \frac{\partial u_3}{\partial y} - \frac{\partial u_2}{\partial z} , ~ \frac{\partial u_1}{\partial z} - \frac{\partial u_3}{\partial x} , ~ \frac{\partial u_2}{\partial x} - \frac{\partial u_1}{\partial y} \Bigr)$. Notice that the curl of a vector is still a vector. Write out Maxwell’s equations in terms of partial derivatives and classify the system.
:::

:::exercise {exercise-0-3-003} number=0.3.3 answered=no src=ch-intro.tex:1149
PROBLEM:
Suppose $F$ is a linear function of two variables, that is, $F(x,y) = ax+by$ for constants $a$ and $b$. Suppose $a \neq 0$. Classify equations of the form $F(y',y) = 0$.
:::

:::exercise {exercise-0-3-004} number=0.3.4 answered=no src=ch-intro.tex:1156
PROBLEM:
Write down an explicit example of a third-order, linear, variable-coefficient (i.e. not constant-coefficient), nonautonomous, nonhomogeneous system of two ODEs such that every derivative that could appear, does appear.
:::

:::exercise {exercise-0-3-101} number=0.3.101 answered=yes src=ch-intro.tex:1165
PROBLEM:
Classify the following equations. Are they ODEs or PDEs? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant-coefficient? If it is an ODE, is it autonomous?

a) $\displaystyle \frac{\partial^2 v}{\partial x^2} + 3 \frac{\partial^2 v}{\partial y^2} = \sin(x)$
b) $\displaystyle \frac{d x}{dt} + \cos(t) x = t^2+t+1$
c) $\displaystyle \frac{d^7 F}{dx^7} = 3F(x)$
d) $\displaystyle y''+8y'=1$
e) $\displaystyle x''+tyx'=0, \quad y''+txy = 0$
f) $\displaystyle \frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial s^2} + u^2$

SOLUTION:
a) PDE, equation, $2^{\text{nd}}$-order, linear, nonhomogeneous, constant-coefficient.
b) ODE, equation, $1^{\text{st}}$-order, linear, nonhomogeneous, not constant-coefficient, not autonomous.
c) ODE, equation, $7^{\text{th}}$-order, linear, homogeneous, constant-coefficient, autonomous.
d) ODE, equation, $2^{\text{nd}}$-order, linear, nonhomogeneous, constant-coefficient, autonomous.
e) ODE, system, $2^{\text{nd}}$-order, nonlinear.
f) PDE, equation, $2^{\text{nd}}$-order, nonlinear.
:::

:::exercise {exercise-0-3-102} number=0.3.102 answered=yes src=ch-intro.tex:1195
PROBLEM:
Write down the general *zero*th-order linear ordinary differential equation. Write down the general solution.
SOLUTION:
equation: $a(x) y = b(x)$, solution: $y = \frac{b(x)}{a(x)}$.
:::

:::exercise {exercise-0-3-103} number=0.3.103 answered=yes src=ch-intro.tex:1203
PROBLEM:
For which $k$ is $\frac{dx}{dt}+x^k = t^{k+2}$ linear? Hint: There are two answers.
SOLUTION:
$k=0$ or $k=1$
:::

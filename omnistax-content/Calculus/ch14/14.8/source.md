# Lagrange Multipliers

## Learning Objectives {section:learning-objectives}
- Use the method of Lagrange multipliers to solve optimization problems with one constraint.
- Use the method of Lagrange multipliers to solve optimization problems with two constraints.

Solving optimization problems for functions of two or more variables can be similar to solving such problems in single-variable calculus. However, techniques for dealing with multiple variables allow us to solve more varied optimization problems for which we need to deal with additional conditions or constraints. In this section, we examine one of the more common and useful methods for solving optimization problems with constraints.

## Lagrange Multipliers
[ref:fs-id1167793423548](module:m53942) was an applied situation involving maximizing a profit function, subject to certain {term:constraints}. In that example, the constraints involved a maximum number of golf balls that could be produced and sold in $1$ month $(x),$ and a maximum number of advertising hours that could be purchased per month $(y).$ Suppose these were combined into a budgetary constraint, such as $20x+4y\le 216,$ that took into account the cost of producing the golf balls and the number of advertising hours purchased per month. The goal is, still, to maximize profit, but now there is a different type of constraint on the values of $x$ and $y.$ This constraint, when combined with the profit function $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2},$ is an example of an {term:optimization problem}, and the function $f(x,y)$ is called the {term:objective function}. A graph of various level curves of the function $f(x,y)$ follows.

> FIGURE {fig:CNX_Calc_Figure_14_08_001} src=../../media/CNX_Calc_Figure_14_08_001.jpg
> alt: A series of rotated ellipses that become increasingly large. The smallest one is marked f(x, y) = 400, and the biggest one is marked f(x, y) = 150.
> caption: Graph of level curves of the function $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2}$ corresponding to $c=150,250,350,\;\text{and}\;400.$

In [ref:CNX_Calc_Figure_14_08_001], the value $c$ represents different profit levels (i.e., values of the function $f).$ As the value of $c$ increases, the curve shifts to the right. Since our goal is to maximize profit, we want to choose a curve as far to the right as possible. If there was no restriction on the number of golf balls the company could produce, or the number of units of advertising available, then we could produce as many golf balls as we want, and advertise as much as we want, and there would not be a maximum profit for the company. Unfortunately, we have a budgetary constraint that is modeled by the inequality $20x+4y\le 216.$ To see how this constraint interacts with the profit function, [ref:CNX_Calc_Figure_14_08_002] shows the graph of the line $20x+4y=216$ superimposed on the previous graph.

> FIGURE {fig:CNX_Calc_Figure_14_08_002} src=../../media/CNX_Calc_Figure_14_08_002.jpg
> alt: A series of rotated ellipses that become increasingly large. On the smallest ellipse, which is red, there is a tangent line marked with equation 20x + 4y = 216 that appears to touch the ellipse near (10, 4).
> caption: Graph of level curves of the function $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2}$ corresponding to $c=150,250,350,\;\text{and}\;395.$ The red graph is the constraint function.

As mentioned previously, the maximum profit occurs when the level curve is as far to the right as possible. However, the level of production corresponding to this maximum profit must also satisfy the budgetary constraint, so the point at which this profit occurs must also lie on (or to the left of) the red line in [ref:CNX_Calc_Figure_14_08_002]. Inspection of this graph reveals that this point exists where the line is tangent to the level curve of $f.$ Trial and error reveals that this profit level seems to be around $395,$ when $x$ and $y$ are both just less than $5.$ We return to the solution of this problem later in this section. From a theoretical standpoint, at the point where the profit curve is tangent to the constraint line, the gradient of both of the functions evaluated at that point must point in the same (or opposite) direction. Recall that the gradient of a function of more than one variable is a vector. If two vectors point in the same (or opposite) directions, then one must be a constant multiple of the other. This idea is the basis of the {term:method of Lagrange multipliers}.

:::note [theorem] Method of Lagrange Multipliers: One Constraint
Let $f$ and $g$ be functions of two variables with continuous partial derivatives at every point of some open set containing the smooth curve $g(x,y)=0.$ Suppose that $f,$ when restricted to points on the curve $g(x,y)=0,$ has a local extremum at the point $({x}_{0},{y}_{0})$ and that $\nabla g({x}_{0},{y}_{0})≠0.$ Then there is a number $λ$ called a {term:Lagrange multiplier}, for which

$\nabla f({x}_{0},{y}_{0})=λ\nabla g({x}_{0},{y}_{0}).$  {eq:fs-id1167793905891}

:::

### Proof
Assume that a constrained extremum occurs at the point $({x}_{0},{y}_{0}).$ Furthermore, we assume that the equation $g(x,y)=0$ can be smoothly parameterized as

$x=x(s)\;\text{and}\;y=y(s)$  {eq:fs-id1167793421006}

where *s* is an arc length parameter with reference point $({x}_{0},{y}_{0})$ at $s=0.$ Therefore, the quantity $z=f(x(s),y(s))$ has a relative maximum or relative minimum at $s=0,$ and this implies that $\frac{dz}{ds}=0$ at that point. From the chain rule,

$\frac{dz}{ds}=\frac{\partial f}{\partial x}\cdot \frac{dx}{ds}+\frac{\partial f}{\partial y}\cdot \frac{dy}{ds}=(\frac{\partial f}{\partial x}\overset{\wedge}{i}+\frac{\partial f}{\partial y}\overset{\wedge}{j})\cdot (\frac{dx}{ds}\overset{\wedge}{i}+\frac{dy}{ds}\overset{\wedge}{j})=0,$  {eq:fs-id1167794004048}

where the derivatives are all evaluated at $s=0.$ However, the first factor in the dot product is the gradient of $f,$ and the second factor is the unit tangent vector $\text{T}(0)$ to the constraint curve. Since the point $({x}_{0},{y}_{0})$ corresponds to $s=0,$ it follows from this equation that

$\nabla f({x}_{0},{y}_{0})\cdot \text{T}(0)=0,$  {eq:fs-id1167793804774}

which implies that the gradient is either $\mathbf{0}$ or is normal to the constraint curve at a constrained relative extremum. However, the constraint curve $g(x,y)=0$ is a level curve for the function $g(x,y)$ so that if $\nabla g({x}_{0},{y}_{0})≠0$ then $\nabla g({x}_{0},{y}_{0})$ is normal to this curve at $({x}_{0},{y}_{0})$ It follows, then, that there is some scalar $λ$ such that

$\nabla f({x}_{0},{y}_{0})=λ\nabla g({x}_{0},{y}_{0})$  {eq:fs-id1167793965761}

□
To apply [ref:fs-id1167794055797] to an optimization problem similar to that for the golf ball manufacturer, we need a problem-solving strategy.

:::note [problem-solving] Steps for Using Lagrange Multipliers
1. Determine the objective function $f(x,y)$ and the constraint function $g(x,y).$ Does the optimization problem involve maximizing or minimizing the objective function?
2. Set up a system of equations using the following template:

$\begin{array}{rll}\nabla f({x}_{0},{y}_{0}) & = & λ\nabla g({x}_{0},{y}_{0}) \\ g({x}_{0},{y}_{0}) & = & 0.\end{array}$  {eq:fs-id1167794031844}

3. Solve for ${x}_{0}$ and ${y}_{0}.$
4. The largest of the values of $f$ at the solutions found in step $3$ maximizes $f;$ the smallest of those values minimizes $f.$
:::

:::example {ex:fs-id1167794212629} Using Lagrange Multipliers

:::exercise {fs-id1167794147324} type= 
PROBLEM:
Use the method of Lagrange multipliers to find the minimum value of $f(x,y)={x}^{2}+4{y}^{2}-2x+8y$ subject to the constraint $x+2y=7.$
SOLUTION:
Let’s follow the problem-solving strategy:
1. The optimization function is $f(x,y)={x}^{2}+4{y}^{2}-2x+8y.$ To determine the constraint function, we must first subtract $7$ from both sides of the constraint. This gives $x+2y-7=0.$ The constraint function is equal to the left-hand side, so $g(x,y)=x+2y-7.$ The problem asks us to solve for the minimum value of $f,$ subject to the constraint (see the following graph).

> FIGURE {fig:CNX_Calc_Figure_14_08_003} src=../../media/CNX_Calc_Figure_14_08_003.jpg
> alt: Two rotated ellipses, one within the other. On the largest ellipse, which is marked f(x, y) = 26, there is a tangent line marked with equation x + 2y = 7 that appears to touch the ellipse near (5, 1).
> caption: Graph of level curves of the function $f(x,y)={x}^{2}+4{y}^{2}-2x+8y$ corresponding to $c=10$ and $26.$ The red graph is the constraint function.

2. We then must calculate the gradients of both *f* and *g*:

$\begin{array}{l}\nabla f(x,y)=(2x-2)\mathbf{i}+(8y+8)\mathbf{j} \\ \nabla g(x,y)=\mathbf{i}+2\mathbf{j}.\end{array}$  {eq:fs-id1167794333769}

The equation $\nabla f({x}_{0},{y}_{0})=λ\nabla g({x}_{0},{y}_{0})$ becomes

$(2{x}_{0}-2)\mathbf{i}+(8{y}_{0}+8)\mathbf{j}=λ(\mathbf{i}+2\mathbf{j}),$  {eq:fs-id1167794063017}

which can be rewritten as

$(2{x}_{0}-2)\mathbf{i}+(8{y}_{0}+8)\mathbf{j}=λ\mathbf{i}+2λ\mathbf{j}.$  {eq:fs-id1167794337439}

Next, we set the coefficients of $\mathbf{i}\;\text{and}\;\mathbf{j}$ equal to each other:

$\begin{array}{l}2{x}_{0}-2=λ \\ 8{y}_{0}+8=2λ.\end{array}$  {eq:fs-id1167793475313}

The equation $g({x}_{0},{y}_{0})=0$ becomes ${x}_{0}+2{y}_{0}-7=0.$ Therefore, the system of equations that needs to be solved is

$\begin{array}{rll}2{x}_{0}-2 & = & λ \\ 8{y}_{0}+8 & = & 2λ \\ {x}_{0}+2{y}_{0}-7 & = & 0.\end{array}$  {eq:fs-id1167793964857}

3. This is a linear system of three equations in three variables. We start by solving the second equation for $λ$ and substituting it into the first equation. This gives $λ=4{y}_{0}+4,$ so substituting this into the first equation gives

$2{x}_{0}-2=4{y}_{0}+4.$  {eq:fs-id1167793369353}

Solving this equation for ${x}_{0}$ gives ${x}_{0}=2{y}_{0}+3.$ We then substitute this into the third equation:

$\begin{array}{rll}(2{y}_{0}+3)+2{y}_{0}-7 & = & 0 \\ 4{y}_{0}-4 & = & 0 \\ {y}_{0} & = & 1.\end{array}$  {eq:fs-id1167794336246}

Since ${x}_{0}=2{y}_{0}+3,$ this gives ${x}_{0}=5.$
4. Next, we substitute $(5,1)$ into $f(x,y)={x}^{2}+4{y}^{2}-2x+8y,$ gives $f(5,1)={5}^{2}+4{(1)}^{2}-2(5)+8(1)=27.$ To ensure this corresponds to a minimum value on the constraint function, let’s try some other values, such as the intercepts of $g(x,y)=0,$ Which are $(7,0)$ and $(0,3.5).$ We get $f(7,0)=35$ and $f(0,3.5)=77,$ so it appears $f$ has a minimum at $(5,1).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793932189} type= 
PROBLEM:
Use the method of Lagrange multipliers to find the maximum value of $f(x,y)=9{x}^{2}+36xy-4{y}^{2}-18x-8y$ subject to the constraint $3x+4y=32.$
SOLUTION:
$f$ has a maximum value of $976$ at the point $(8,2).$
COMMENTARY: Hint
Use the problem-solving strategy for the method of Lagrange multipliers.
:::
:::
Let’s now return to the problem posed at the beginning of the section.

:::example {ex:fs-id1167793299657} Golf Balls and Lagrange Multipliers

:::exercise {fs-id1167793299659} type= 
PROBLEM:
The golf ball manufacturer, Pro-T, has developed a profit model that depends on the number $x$ of golf balls sold per month (measured in thousands), and the number of hours per month of advertising *y*, according to the function

$z=f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2},$  {eq:fs-id1167793299680}

where $z$ is measured in thousands of dollars. The budgetary constraint function relating the cost of the production of thousands golf balls and advertising units is given by $20x+4y=216.$ Find the values of $x$ and $y$ that maximize profit, and find the maximum profit.
SOLUTION:
Again, we follow the problem-solving strategy:
1. The optimization function is $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2}.$ To determine the constraint function, we first subtract 216 from both sides of the constraint, then divide both sides by $4,$ which gives $5x+y-54=0.$ The constraint function is equal to the left-hand side, so $g(x,y)=5x+y-54.$ The problem asks us to solve for the maximum value of $f,$ subject to this constraint.
2. So, we calculate the gradients of both $f\;\text{and}$ $g\text{:}$

$\begin{array}{l}\nabla f(x,y)=(48-2x-2y)\mathbf{i}+(96-2x-18y)\mathbf{j} \\ \nabla g(x,y)=5\mathbf{i}+\mathbf{j}.\end{array}$  {eq:fs-id1167793566052}

The equation $\nabla f({x}_{0},{y}_{0})=λ\nabla g({x}_{0},{y}_{0})$ becomes

$(48-2{x}_{0}-2{y}_{0})\mathbf{i}+(96-2{x}_{0}-18{y}_{0})\mathbf{j}=λ(5\mathbf{i}+\mathbf{j}),$  {eq:fs-id1167794212873}

which can be rewritten as

$(48-2{x}_{0}-2{y}_{0})\mathbf{i}+(96-2{x}_{0}-18{y}_{0})\mathbf{j}=λ5\mathbf{i}+λ\mathbf{j}.$  {eq:fs-id1167793419951}

We then set the coefficients of $\mathbf{i}\;\text{and}\;\mathbf{j}$ equal to each other:

$\begin{array}{rll}48-2{x}_{0}-2{y}_{0} & = & 5λ \\ 96-2{x}_{0}-18{y}_{0} & = & λ.\end{array}$  {eq:fs-id1167793263219}

The equation $g({x}_{0},{y}_{0})=0$ becomes $5{x}_{0}+{y}_{0}-54=0.$ Therefore, the system of equations that needs to be solved is

$\begin{array}{rll}48-2{x}_{0}-2{y}_{0} & = & 5λ \\ 96-2{x}_{0}-18{y}_{0} & = & λ \\ 5{x}_{0}+{y}_{0}-54 & = & 0.\end{array}$  {eq:fs-id1167793418283}

3. We use the left-hand side of the second equation to replace $λ$ in the first equation:

$\begin{array}{rll}48-2{x}_{0}-2{y}_{0} & = & 5(96-2{x}_{0}-18{y}_{0}) \\ 48-2{x}_{0}-2{y}_{0} & = & 480-10{x}_{0}-90{y}_{0} \\ 8{x}_{0} & = & 432-88{y}_{0} \\ {x}_{0} & = & 54-11{y}_{0}.\end{array}$  {eq:fs-id1167793547488}

Then we substitute this into the third equation:

$\begin{array}{rll}5(54-11{y}_{0})+{y}_{0}-54 & = & 0 \\ 270-55{y}_{0}+{y}_{0} & = & 0 \\ 216-54{y}_{0} & = & 0 \\ {y}_{0} & = & 4.\end{array}$  {eq:fs-id1167794162841}

Since ${x}_{0}=54-11{y}_{0},$ this gives ${x}_{0}=10.$
4. We then substitute $(10,4)$ into $f(x,y)=48x+96y-{x}^{2}-2xy-9{y}^{2},$ which gives

$\begin{array}{rl}f(10,4) & =48(10)+96(4)-{(10)}^{2}-2(10)(4)-9{(4)}^{2} \\ & =480+384-100-80-144=540.\end{array}$  {eq:fs-id1167793416705}

Therefore the maximum profit that can be attained, subject to budgetary constraints, is $\text{\$}540,000$ with a production level of $10,000$ golf balls and $4$ hours of advertising bought per month. Let’s check to make sure this truly is a maximum. The endpoints of the line that defines the constraint are $(10.8,0)$ and $(0,54)$ Let’s evaluate $f$ at both of these points:

$\begin{array}{rll}f(10.8,0) & = & 48(10.8)+96(0)-{10.8}^{2}-2(10.8)(0)-9({0}^{2})=401.76 \\ f(0,54) & = & 48(0)+96(54)-{0}^{2}-2(0)(54)-9({54}^{2})=−21,060.\end{array}$  {eq:fs-id1167793560949}

The second value represents a loss, since no golf balls are produced. Neither of these values exceed $540,$ so it seems that our extremum is a maximum value of $f.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793925849} type= 
PROBLEM:
A company has determined that its production level is given by the Cobb-Douglas function $f(x,y)=2.5{x}^{0.45}{y}^{0.55}$ where *x* represents the total number of labor hours in $1$ year and *y* represents the total capital input for the company. Suppose $1$ unit of labor costs $\text{\$}40$ and $1$ unit of capital costs $\text{\$}50.$ Use the method of Lagrange multipliers to find the maximum value of $f(x,y)=2.5{x}^{0.45}{y}^{0.55}$ subject to a budgetary constraint of $\text{\$}500,000$ per year.
SOLUTION:
A maximum production level of $13890$ occurs with $5625$ labor hours and $\text{\$}5500$ of total capital input.
COMMENTARY: Hint
Use the problem-solving strategy for the method of Lagrange multipliers.
:::
:::
In the case of an optimization function with three variables and a single constraint function, it is possible to use the method of Lagrange multipliers to solve an optimization problem as well. An example of an optimization function with three variables could be the {index:Cobb-Douglas function} in the previous example: $f(x,y,z)={x}^{0.2}{y}^{0.4}{z}^{0.4},$ where $x$ represents the cost of labor, $y$ represents capital input, and $z$ represents the cost of advertising. The method is the same as for the method with a function of two variables; the equations to be solved are

$\begin{array}{rll}\nabla f(x,y,z) & = & λ\nabla g(x,y,z) \\ g(x,y,z) & = & 0.\end{array}$  {eq:fs-id1167793488580}

:::example {ex:fs-id1167793618990} Lagrange Multipliers with a Three-Variable Optimization Function

:::exercise {fs-id1167793618992} type= 
PROBLEM:
Find the minimum of the function $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}$ subject to the constraint $x+y+z=1.$
SOLUTION:
1. The optimization function is $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}.$ To determine the constraint function, we subtract $1$ from each side of the constraint: $x+y+z-1=0$ which gives the constraint function as $g(x,y,z)=x+y+z-1.$
2. Next, we calculate $\nabla f(x,y,z)$ and $\nabla g(x,y,z)\text{:}$

$\begin{array}{l}\nabla f(x,y,z)=\langle 2x,2y,2z\rangle \\ \nabla g(x,y,z)=\langle 1,1,1\rangle \text{.}\end{array}$  {eq:fs-id1167793640511}

This leads to the equations

$\begin{array}{rll}\langle 2{x}_{0},2{y}_{0},2{z}_{0}\rangle & = & λ\langle 1,1,1\rangle \\ {x}_{0}+{y}_{0}+{z}_{0}-1 & = & 0\end{array}$  {eq:fs-id1167793612617}

which can be rewritten in the following form:

$\begin{array}{rll}2{x}_{0} & = & λ \\ 2{y}_{0} & = & λ \\ 2{z}_{0} & = & λ \\ {x}_{0}+{y}_{0}+{z}_{0}-1 & = & 0.\end{array}$  {eq:fs-id1167793373631}

3. Since each of the first three equations has $λ$ on the right-hand side, we know that $2{x}_{0}=2{y}_{0}=2{z}_{0}$ and all three variables are equal to each other. Substituting ${y}_{0}={x}_{0}$ and ${z}_{0}={x}_{0}$ into the last equation yields $3{x}_{0}-1=0,$ so ${x}_{0}=\frac{1}{3}$ and ${y}_{0}=\frac{1}{3}$ and ${z}_{0}=\frac{1}{3}$ which corresponds to a critical point on the constraint curve.
4. Then, we evaluate *f* at the point $(\frac{1}{3},\frac{1}{3},\frac{1}{3})\text{:}$

$f(\frac{1}{3},\frac{1}{3},\frac{1}{3})={(\frac{1}{3})}^{2}+{(\frac{1}{3})}^{2}+{(\frac{1}{3})}^{2}=\frac{3}{9}=\frac{1}{3}.$  {eq:fs-id1167793937404}

Therefore, an extremum of the function is $\frac{1}{3}.$ To verify it is a minimum, choose other points that satisfy the constraint and calculate $f$ at that point. For example,

$\begin{array}{rll}f(1,0,0) & = & {1}^{2}+{0}^{2}+{0}^{2}=1 \\ f(0,−2,3) & = & {0}^{2}+{(−2)}^{2}+{3}^{2}=13.\end{array}$  {eq:fs-id1167794293267}

Both of these values are greater than $\frac{1}{3},$ leading us to believe the extremum is a minimum.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794177140} type= 
PROBLEM:
Use the method of Lagrange multipliers to find the minimum value of the function

$f(x,y,z)=x+y+z$  {eq:fs-id1167794177148}

subject to the constraint ${x}^{2}+{y}^{2}+{z}^{2}=1.$
SOLUTION:
$\begin{array}{rll}f(\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3}) & = & \frac{\sqrt{3}}{3}+\frac{\sqrt{3}}{3}+\frac{\sqrt{3}}{3}=\sqrt{3} \\ f(-\frac{\sqrt{3}}{3},-\frac{\sqrt{3}}{3},-\frac{\sqrt{3}}{3}) & = & -\frac{\sqrt{3}}{3}-\frac{\sqrt{3}}{3}-\frac{\sqrt{3}}{3}=\text{−}\sqrt{3}.\end{array}$
COMMENTARY: Hint
Use the problem-solving strategy for the method of Lagrange multipliers with an optimization function of three variables.
:::
:::

## Problems with Two Constraints
The method of Lagrange multipliers can be applied to problems with more than one constraint. In this case the optimization function, $w$ is a function of three variables:

$w=f(x,y,z)$  {eq:fs-id1167793371381}

and it is subject to two constraints:

$g(x,y,z)=0\;\text{and}\;h(x,y,z)=0.$  {eq:fs-id1167793927735}

There are two Lagrange multipliers, ${λ}_{1}$ and ${λ}_{2},$ and the system of equations becomes

$\begin{array}{rll}\nabla f({x}_{0},{y}_{0},{z}_{0}) & = & {λ}_{1}\nabla g({x}_{0},{y}_{0},{z}_{0})+{λ}_{2}\nabla h({x}_{0},{y}_{0},{z}_{0}) \\ g({x}_{0},{y}_{0},{z}_{0}) & = & 0 \\ h({x}_{0},{y}_{0},{z}_{0}) & = & 0.\end{array}$  {eq:fs-id1167793452786}

:::example {ex:fs-id1167794324570} Lagrange Multipliers with Two Constraints

:::exercise {fs-id1167794324572} type= 
PROBLEM:
Find the local extreme values of the function

$f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}$  {eq:fs-id1167794324583}

subject to the constraints ${z}^{2}={x}^{2}+{y}^{2}$ and $x+y-z+1=0.$
SOLUTION:
Let’s follow the problem-solving strategy:
1. The optimization function is $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}.$ To determine the constraint functions, we first subtract ${z}^{2}$ from both sides of the first constraint, which gives ${x}^{2}+{y}^{2}-{z}^{2}=0,$ so $g(x,y,z)={x}^{2}+{y}^{2}-{z}^{2}.$ The second constraint function is $h(x,y,z)=x+y-z+1.$
2. We then calculate the gradients of $f,g,\;\text{and}\;h\text{:}$

$\begin{array}{l}\nabla f(x,y,z)=2x\mathbf{i}+2y\mathbf{j}+2z\mathbf{k} \\ \nabla g(x,y,z)=2x\mathbf{i}+2y\mathbf{j}-2z\mathbf{k} \\ \nabla h(x,y,z)=\mathbf{i}+\mathbf{j}-\mathbf{k}.\end{array}$  {eq:fs-id1167794327654}

The equation $\nabla f({x}_{0},{y}_{0},{z}_{0})={λ}_{1}\nabla g({x}_{0},{y}_{0},{z}_{0})+{λ}_{2}\nabla h({x}_{0},{y}_{0},{z}_{0})$ becomes

$2{x}_{0}\mathbf{i}+2{y}_{0}\mathbf{j}+2{z}_{0}\mathbf{k}={λ}_{1}(2{x}_{0}\mathbf{i}+2{y}_{0}\mathbf{j}-2{z}_{0}\mathbf{k})+{λ}_{2}(\mathbf{i}+\mathbf{j}-\mathbf{k}),$  {eq:fs-id1167793418161}

which can be rewritten as

$2{x}_{0}\mathbf{i}+2{y}_{0}\mathbf{j}+2{z}_{0}\mathbf{k}=(2{λ}_{1}{x}_{0}+{λ}_{2})\mathbf{i}+(2{λ}_{1}{y}_{0}+{λ}_{2})\mathbf{j}-(2{λ}_{1}{z}_{0}+{λ}_{2})\mathbf{k}.$  {eq:fs-id1167793605896}

Next, we set the coefficients of $\mathbf{i}\;\text{,}\;\mathbf{j}\text{, and}\;\mathbf{k}$ equal to each other:

$\begin{array}{l}2{x}_{0}=2{λ}_{1}{x}_{0}+{λ}_{2} \\ 2{y}_{0}=2{λ}_{1}{y}_{0}+{λ}_{2} \\ 2{z}_{0}=−2{λ}_{1}{z}_{0}-{λ}_{2}.\end{array}$  {eq:fs-id1167794324429}

The two equations that arise from the constraints are ${z}_{0}{}^{2}={x}_{0}{}^{2}+{y}_{0}{}^{2}$ and ${x}_{0}+{y}_{0}-{z}_{0}+1=0.$ Combining these equations with the previous three equations gives

$\begin{array}{rll}2{x}_{0} & = & 2{λ}_{1}{x}_{0}+{λ}_{2} \\ 2{y}_{0} & = & 2{λ}_{1}{y}_{0}+{λ}_{2} \\ 2{z}_{0} & = & −2{λ}_{1}{z}_{0}-{λ}_{2} \\ {z}_{0}{}^{2} & = & {x}_{0}{}^{2}+{y}_{0}{}^{2} \\ {x}_{0}+{y}_{0}-{z}_{0}+1 & = & 0.\end{array}$  {eq:fs-id1167793268137}

3. The first three equations contain the variable ${λ}_{2}.$ Solving the third equation for ${λ}_{2}$ and replacing into the first and second equations reduces the number of equations to four:

$\begin{array}{rll}2{x}_{0} & = & 2{λ}_{1}{x}_{0}-2{λ}_{1}{z}_{0}-2{z}_{0} \\ 2{y}_{0} & = & 2{λ}_{1}{y}_{0}-2{λ}_{1}{z}_{0}-2{z}_{0} \\ {z}_{0}{}^{2} & = & {x}_{0}{}^{2}+{y}_{0}{}^{2} \\ {x}_{0}+{y}_{0}-{z}_{0}+1 & = & 0.\end{array}$  {eq:fs-id1167793957694}

Next, we solve the first and second equation for ${λ}_{1}.$ The first equation gives ${λ}_{1}=\frac{{x}_{0}+{z}_{0}}{{x}_{0}-{z}_{0}},$ the second equation gives ${λ}_{1}=\frac{{y}_{0}+{z}_{0}}{{y}_{0}-{z}_{0}}.$ We set the right-hand side of each equation equal to each other and cross-multiply:

$\begin{array}{rll}\frac{{x}_{0}+{z}_{0}}{{x}_{0}-{z}_{0}} & = & \frac{{y}_{0}+{z}_{0}}{{y}_{0}-{z}_{0}} \\ ({x}_{0}+{z}_{0})({y}_{0}-{z}_{0}) & = & ({x}_{0}-{z}_{0})({y}_{0}+{z}_{0}) \\ {x}_{0}{y}_{0}-{x}_{0}{z}_{0}+{y}_{0}{z}_{0}-{z}_{0}{}^{2} & = & {x}_{0}{y}_{0}+{x}_{0}{z}_{0}-{y}_{0}{z}_{0}-{z}_{0}2 \\ 2{y}_{0}{z}_{0}-2{x}_{0}{z}_{0} & = & 0 \\ 2{z}_{0}({y}_{0}-{x}_{0}) & = & 0.\end{array}.$  {eq:fs-id1167793423565}

Therefore, either ${z}_{0}=0$ or ${y}_{0}={x}_{0}.$ If ${z}_{0}=0,$ then the first constraint becomes $0={x}_{0}{}^{2}+{y}_{0}{}^{2}.$ The only real solution to this equation is ${x}_{0}=0$ and ${y}_{0}=0,$ which gives the ordered triple $(0,0,0).$ This point does not satisfy the second constraint, so it is not a solution.

Next, we consider ${y}_{0}={x}_{0},$ which reduces the number of equations to three:

$\begin{array}{rll}{y}_{0} & = & {x}_{0} \\ {z}_{0}{}^{2} & = & {x}_{0}{}^{2}+{y}_{0}{}^{2} \\ {x}_{0}+{y}_{0}-{z}_{0}+1 & = & 0.\end{array}$  {eq:fs-id1167794046689}

We substitute the first equation into the second and third equations:

$\begin{array}{rll}{z}_{0}{}^{2} & = & {x}_{0}{}^{2}+{x}_{0}{}^{2} \\ {x}_{0}+{x}_{0}-{z}_{0}+1 & = & 0.\end{array}$  {eq:fs-id1167793489546}

Then, we solve the second equation for ${z}_{0},$ which gives ${z}_{0}=2{x}_{0}+1.$ We then substitute this into the first equation,

$\begin{array}{rll}{z}_{0}{}^{2} & = & 2{x}_{0}{}^{2} \\ {(2{x}_{0}+1)}^{2} & = & 2{x}_{0}{}^{2} \\ 4{x}_{0}{}^{2}+4{x}_{0}+1 & = & 2{x}_{0}{}^{2} \\ 2{x}_{0}{}^{2}+4{x}_{0}+1 & = & 0,\end{array}$  {eq:fs-id1167793290983}

and use the quadratic formula to solve for ${x}_{0}\text{:}$

${x}_{0}=\frac{−4\pm \sqrt{{4}^{2}-4(2)(1)}}{2(2)}=\frac{−4\pm \sqrt{8}}{4}=\frac{−4\pm 2\sqrt{2}}{4}=−1\pm \frac{\sqrt{2}}{2}.$  {eq:fs-id1167793418190}

Recall ${y}_{0}={x}_{0},$ so this solves for ${y}_{0}$ as well. Then, ${z}_{0}=2{x}_{0}+1,$ so

${z}_{0}=2{x}_{0}+1=2(−1\pm \frac{\sqrt{2}}{2})+1=−2+1\pm \sqrt{2}=−1\pm \sqrt{2}.$  {eq:fs-id1167793448999}

Therefore, there are two ordered triplet solutions:

$(−1+\frac{\sqrt{2}}{2},−1+\frac{\sqrt{2}}{2},−1+\sqrt{2})\;\text{and}\;(−1-\frac{\sqrt{2}}{2},−1-\frac{\sqrt{2}}{2},−1-\sqrt{2}).$  {eq:fs-id1167794213437}

4. We substitute $(−1+\frac{\sqrt{2}}{2},−1+\frac{\sqrt{2}}{2},−1+\sqrt{2})$ into $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},$ which gives

$\begin{array}{rl}f(−1+\frac{\sqrt{2}}{2},−1+\frac{\sqrt{2}}{2},−1+\sqrt{2}) & ={(−1+\frac{\sqrt{2}}{2})}^{2}+{(−1+\frac{\sqrt{2}}{2})}^{2}+{(−1+\sqrt{2})}^{2} \\ & =(1-\sqrt{2}+\frac{1}{2})+(1-\sqrt{2}+\frac{1}{2})+(1-2\sqrt{2}+2) \\ & =6-4\sqrt{2}.\end{array}$  {eq:fs-id1167793433532}

Then, we substitute $(−1-\frac{\sqrt{2}}{2},−1-\frac{\sqrt{2}}{2},−1-\sqrt{2})$ into $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},$ which gives

$\begin{array}{rl}f(−1-\frac{\sqrt{2}}{2},−1-\frac{\sqrt{2}}{2},−1-\sqrt{2}) & ={(−1-\frac{\sqrt{2}}{2})}^{2}+{(−1-\frac{\sqrt{2}}{2})}^{2}+{(−1-\sqrt{2})}^{2} \\ & =(1+\sqrt{2}+\frac{1}{2})+(1+\sqrt{2}+\frac{1}{2})+(1+2\sqrt{2}+2) \\ & =6+4\sqrt{2}.\end{array}$  {eq:fs-id1167794200541}

$6+4\sqrt{2}$ and $6-4\sqrt{2}$ are the local extreme values of $f(x,y,z),$ subject to the given constraints.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794314950} type= 
PROBLEM:
Use the method of Lagrange multipliers to find the minimum value of the function

$f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}$  {eq:fs-id1167794314957}

subject to the constraints $2x+y+2z=9$ and $5x+5y+7z=29.$
SOLUTION:
$f(2,1,2)=9$ is a minimum.
COMMENTARY: Hint
Use the problem-solving strategy for the method of Lagrange multipliers with two constraints.
:::
:::

## Key Concepts {section:key-concepts}
- An objective function combined with one or more constraints is an example of an optimization problem.
- To solve optimization problems, we apply the method of Lagrange multipliers using a four-step problem-solving strategy.

## Key Equations {section:key-equations}

> TABLE {tab:fs-idm1190577744} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Method of Lagrange multipliers, one constraint** | $\begin{array}{rll}\nabla f({x}_{0},{y}_{0}) & = & λ\nabla g({x}_{0},{y}_{0}) \\ g({x}_{0},{y}_{0}) & = & 0\end{array}$ |
| **Method of Lagrange multipliers, two constraints** | $\begin{array}{rll}\nabla f({x}_{0},{y}_{0},{z}_{0}) & = & {λ}_{1}\nabla g({x}_{0},{y}_{0},{z}_{0})+{λ}_{2}\nabla h({x}_{0},{y}_{0},{z}_{0}) \\ g({x}_{0},{y}_{0},{z}_{0}) & = & 0 \\ h({x}_{0},{y}_{0},{z}_{0}) & = & 0\end{array}$ |

##  {section:section-exercises}
For the following exercises, use the method of Lagrange multipliers to find the maximum and minimum values of the function subject to the given constraints.

:::exercise {fs-id1167794284207} type= 
PROBLEM:
$f(x,y)={x}^{2}y;{x}^{2}+2{y}^{2}=6$
:::

:::exercise {fs-id1167794160233} type= 
PROBLEM:
$f(x,y,z)=xyz,{x}^{2}+2{y}^{2}+3{z}^{2}=6$
SOLUTION:
maximum: $2\frac{\sqrt{3}}{3},$ minimum: $\frac{−2\sqrt{3}}{3}$
:::

:::exercise {fs-id1167793400750} type= 
PROBLEM:
$f(x,y)=xy;4{x}^{2}+8{y}^{2}=16$
:::

:::exercise {fs-id1167794051632} type= 
PROBLEM:
$f(x,y)=4{x}^{3}+{y}^{2};2{x}^{2}+{y}^{2}=1$
SOLUTION:
maximum: $(\frac{\sqrt{2}}{2},0,\sqrt{2}),$ minimum: $(\frac{\text{−}\sqrt{2}}{2},0,\text{−}\sqrt{2})$
:::

:::exercise {fs-id1167794292192} type= 
PROBLEM:
$f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},{x}^{4}+{y}^{4}+{z}^{4}=1$
:::

:::exercise {fs-id1167793631556} type= 
PROBLEM:
$f(x,y,z)=yz+xy,xy=1,{y}^{2}+{z}^{2}=1$
SOLUTION:
maximum: $\frac{3}{2},$ minimum = $\frac{1}{2}$
:::

:::exercise {fs-id1167793383335} type= 
PROBLEM:
$f(x,y)={x}^{2}+{y}^{2},{(x-1)}^{2}+4{y}^{2}=4$
:::

:::exercise {fs-id1167793609406} type= 
PROBLEM:
$f(x,y)=4xy,\frac{{x}^{2}}{9}+\frac{{y}^{2}}{16}=1$
SOLUTION:
maxima: $f(\frac{3\sqrt{2}}{2},2\sqrt{2})=24,$ $f(-\frac{3\sqrt{2}}{2},−2\sqrt{2})=24;$ minima: $f(-\frac{3\sqrt{2}}{2},2\sqrt{2})=−24,$ $f(\frac{3\sqrt{2}}{2},−2\sqrt{2})=−24$
:::

:::exercise {fs-id1167793422615} type= 
PROBLEM:
$f(x,y,z)=x+y+z,\frac{1}{x}+\frac{1}{y}+\frac{1}{z}=1$
:::

:::exercise {fs-id1167793233837} type= 
PROBLEM:
$f(x,y,z)=x+3y-z,{x}^{2}+{y}^{2}+{z}^{2}=4$
SOLUTION:
maximum: $2\sqrt{11}$ at $f(\frac{2}{\sqrt{11}},\frac{6}{\sqrt{11}},\frac{−2}{\sqrt{11}});$ minimum: $−2\sqrt{11}$ at $f(\frac{−2}{\sqrt{11}},\frac{−6}{\sqrt{11}},\frac{2}{\sqrt{11}})$
:::

:::exercise {fs-id1167794328256} type= 
PROBLEM:
$f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},xyz=4$
:::

:::exercise {fs-id1167793618923} type= 
PROBLEM:
Minimize $f(x,y)={x}^{2}+{y}^{2}$ on the hyperbola $xy=1.$
SOLUTION:
$2.0$
:::

:::exercise {fs-id1167793927484} type= 
PROBLEM:
Minimize $f(x,y)=xy$ on the ellipse ${b}^{2}{x}^{2}+{a}^{2}{y}^{2}={a}^{2}{b}^{2}.$
:::

:::exercise {fs-id1167793928536} type= 
PROBLEM:
Maximize $f(x,y,z)=2x+3y+5z$ on the sphere ${x}^{2}+{y}^{2}+{z}^{2}=19.$
SOLUTION:
$19\sqrt{2}$
:::

:::exercise {fs-id1167794292470} type= 
PROBLEM:
Maximize $\begin{array}{l}f(x,y)={x}^{2}-{y}^{2};x>0,y>0; \\ g(x,y)=y-{x}^{2}=0\end{array}$
:::

:::exercise {fs-id1167793363126} type= 
PROBLEM:
The curve ${x}^{3}-{y}^{3}=1$ is asymptotic to the line $y=x.$ Find the point(s) on the curve ${x}^{3}-{y}^{3}=1$ farthest from the line $y=x.$
SOLUTION:
$(\frac{1}{\sqrt[3]{2}},\frac{−1}{\sqrt[3]{2}})$
:::

:::exercise {fs-id1167793420367} type= 
PROBLEM:
Maximize $U(x,y)=8{x}^{4\text{/}5}{y}^{1\text{/}5};4x+2y=12$
:::

:::exercise {fs-id1167793409892} type= 
PROBLEM:
Minimize $f(x,y)={x}^{2}+{y}^{2},x+2y-5=0.$
SOLUTION:
$f(1,2)=5$
:::

:::exercise {fs-id1167793502411} type= 
PROBLEM:
Maximize $f(x,y)=\sqrt{6-{x}^{2}-{y}^{2}},x+y-2=0.$
:::

:::exercise {fs-id1167794095053} type= 
PROBLEM:
Minimize $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},x+y+z=1.$
SOLUTION:
$f(\frac{1}{3},\frac{1}{3},\frac{1}{3})=\frac{1}{3}$
:::

:::exercise {fs-id1167793618211} type= 
PROBLEM:
Minimize $f(x,y)={x}^{2}-{y}^{2}$ subject to the constraint $x-2y+6=0.$
:::

:::exercise {fs-id1167793610968} type= 
PROBLEM:
Minimize $f(x,y,z)={x}^{2}+{y}^{2}+{z}^{2}$ when $x+y+z=9$ and $x+2y+3z=20.$
SOLUTION:
minimum: $f(2,3,4)=29$
:::
For the next group of exercises, use the method of Lagrange multipliers to solve the following applied problems.

:::exercise {fs-id1167794051145} type= 
PROBLEM:
A pentagon is formed by placing an isosceles triangle on a rectangle, as shown in the diagram. If the perimeter of the pentagon is $10$ in., find the lengths of the sides of the pentagon that will maximize the area of the pentagon.

> IMAGE {img:fs-id1167794051160} src=../../media/CNX_Calc_Figure_14_08_201.jpg
> alt: A rectangle with an isosceles triangle on top. The side of the isosceles triangle with the two equal angles of size θ overlaps the top length of the rectangle.

:::

:::exercise {fs-id1167793641973} type= 
PROBLEM:
A rectangular box without a top (a topless box) is to be made from $12$ ft<sup>2</sup> of cardboard. Find the maximum volume of such a box.
SOLUTION:
The maximum volume is $4$ ft<sup>3</sup>. The dimensions are $1\;\times \;2\;\times \;2$ ft.
:::

:::exercise {fs-id1167793377846} type= 
PROBLEM:
Find the minimum and maximum distances between the ellipse ${x}^{2}+xy+2{y}^{2}=1$ and the origin.
:::

:::exercise {fs-id1167793501794} type= 
PROBLEM:
Find the point on the surface ${x}^{2}-2xy+{y}^{2}-x+y=0$ closest to the point $(1,2,−3).$
SOLUTION:
The point on the surface ${x}^{2}-2xy+{y}^{2}-x+y=0$ closest to the point $(1,2,-3)$ is $(\frac{3}{2},\frac{3}{2},−3)$.
:::

:::exercise {fs-id1167793298519} type= 
PROBLEM:
Show that, of all the triangles inscribed in a circle of radius $R$ (see diagram), the equilateral triangle has the largest perimeter.

> IMAGE {img:fs-id1167793925018} src=../../media/CNX_Calc_Figure_14_08_202.jpg
> alt: A circle with an equilateral triangle drawn inside of it such that each vertex of the triangle touches the circle.

:::

:::exercise {fs-id1167793925038} type= 
PROBLEM:
Find the minimum distance from point $(0,1)$ to the parabola ${x}^{2}=4y.$
SOLUTION:
$1.0$
:::

:::exercise {fs-id1167793358302} type= 
PROBLEM:
Find the minimum distance from the parabola $y={x}^{2}$ to point $(0,3).$
:::

:::exercise {fs-id1167793577801} type= 
PROBLEM:
Find the minimum distance from the plane $x+y+z=1$ to point $(2,1,1).$
SOLUTION:
$\sqrt{3}$
:::

:::exercise {fs-id1167794159985} type= 
PROBLEM:
A large container in the shape of a rectangular solid must have a volume of $480$ m<sup>3</sup>. The bottom of the container costs $5/m<sup>2</sup> to construct whereas the top and sides cost $3/m<sup>2</sup> to construct. Use Lagrange multipliers to find the dimensions of the container of this size that has the minimum cost.
:::

:::exercise {fs-id1167793618148} type= 
PROBLEM:
Find the point on the line $y=2x+3$ that is closest to point $(4,2).$
SOLUTION:
$(\frac{2}{5},\frac{19}{5})$
:::

:::exercise {fs-id1167793958649} type= 
PROBLEM:
Find the point on the plane $4x+3y+z=2$ that is closest to the point $(1,−1,1).$
:::

:::exercise {fs-id1167793455554} type= 
PROBLEM:
Find the maximum value of $f(x,y)=\text{sin}\;x\;\text{sin}\;y,$ where $x\;\text{and}\;y$ denote the acute angles of a right triangle. Draw the contours of the function using a CAS.
SOLUTION:
$\frac{1}{2}$

> IMAGE {img:fs-id1167793640064} src=../../media/CNX_Calc_Figure_14_08_203.jpg
> alt: An alternating series of hills and holes of amplitude 1 across xyz space.

:::

:::exercise {fs-id1167793637673} type= 
PROBLEM:
A rectangular solid is contained within a tetrahedron with vertices at
$(1,0,0),(0,1,0),(0,0,1),$ and the origin. The base of the box has dimensions $x,y,$ and the height of the box is $z.$ If the sum of $x,y,\;\text{and}\;z$ is 1.0, find the dimensions that maximizes the volume of the rectangular solid.
:::

:::exercise {fs-id1167793589592} type= 
PROBLEM:
**[T]** By investing *x* units of labor and *y* units of capital, a watch manufacturer can produce $P(x,y)=50{x}^{0.4}{y}^{0.6}$ watches. Find the maximum number of watches that can be produced on a budget of $\text{\$}20,000$ if labor costs $100/unit and capital costs $200/unit. Use a CAS to sketch a contour plot of the function.
SOLUTION:
Roughly 3365 watches at the critical point $(80,60)$

> IMAGE {img:fs-id1167793421219} src=../../media/CNX_Calc_Figure_14_08_204.jpg
> alt: A series of curves in the first quadrant, with the first starting near (2, 120), decreasing sharply to near (20, 20), and then decreasing slowly to (120, 5). The next curve starts near (10, 120), decreases sharply to near (40, 40), and then decreases slowly to (120, 20). The next curve starts near (20, 120), decreases sharply to near (60, 60), and then decreases slowly to (120, 40). The next curve starts near (40, 120), decreases to near (80, 80), and then decreases a little slowly to (120, 60). The last curve starts near (60, 120) and decreases rather evenly through (100, 100) to (120, 90).

:::

## Chapter Review Exercises {section:review-exercises}
For the following exercises, determine whether the statement is *true or false*. Justify your answer with a proof or a counterexample.

:::exercise {fs-id1167793378469} type= 
PROBLEM:
The domain of $f(x,y)={x}^{3}{\text{sin}}^{−1}(y)$ is $x=$ all real numbers, and $\text{−}\pi \le y\le \pi .$
:::

:::exercise {fs-id1167793443560} type= 
PROBLEM:
If the function $f(x,y)$ and all its second derivatives are continuous everywhere, then ${f}_{xy}={f}_{yx}.$
SOLUTION:
True, by Clairaut’s theorem
:::

:::exercise {fs-id1167793499060} type= 
PROBLEM:
The linear approximation to the function of $f(x,y)=5{x}^{2}+x\;\text{tan}(y)$ at $(2,\pi )$ is given by $L(x,y)=22+21(x-2)+(y-\pi ).$
:::

:::exercise {fs-id1167793255949} type= 
PROBLEM:
$(\frac{3}{4},\frac{9}{16})$ is a critical point of $g(x,y)=4{x}^{3}-2{x}^{2}y+{y}^{2}-2.$
SOLUTION:
False
:::
For the following exercises, sketch the function in one graph and, in a second, sketch several level curves.

:::exercise {fs-id1167793423043} type= 
PROBLEM:
$f(x,y)={e}^{\text{−}({x}^{2}+2{y}^{2})}.$
:::

:::exercise {fs-id1167793638541} type= 
PROBLEM:
$f(x,y)=x+4{y}^{2}.$
SOLUTION:
Answers may vary
:::
For the following exercises, evaluate the following limits, if they exist. If they do not exist, prove it.

:::exercise {fs-id1167794050696} type= 
PROBLEM:
$\lim_{(x,y)\to (1,1)}\frac{4xy}{x-2{y}^{2}}$
:::

:::exercise {fs-id1167793584554} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{4xy}{x-2{y}^{2}}$
SOLUTION:
Does not exist
:::
For the following exercises, find the largest region of continuity for the function.

:::exercise {fs-id1167794212738} type= 
PROBLEM:
$f(x,y)={x}^{3}{\text{sin}}^{−1}(y)$
:::

:::exercise {fs-id1167793514908} type= 
PROBLEM:
$g(x,y)=\text{ln}(4-{x}^{2}-{y}^{2})$
SOLUTION:
Continuous at all points on the $x,y\text{-plane,}$ except where ${x}^{2}+{y}^{2}>4.$
:::
For the following exercises, find all first derivatives, full or partial, as appropriate.

:::exercise {fs-id1167793515930} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}-{y}^{2}}$
:::

:::exercise {fs-id1167793423286} type= 
PROBLEM:
$u(x,y)={x}^{4}-3xy+1,x=2t,y={t}^{3}$
SOLUTION:
$\frac{\partial u}{\partial x}=4{x}^{3}-3y,\frac{\partial u}{\partial y}=−3x,\frac{dx}{dt}=2,\frac{dy}{dt}=3{t}^{2},\frac{du}{dt}=40{t}^{3}$
:::
For the following exercises, find all second partial derivatives.

:::exercise {fs-id1167793924536} type= 
PROBLEM:
$g(t,x)=3{t}^{2}-\text{sin}(x+t)$
:::

:::exercise {fs-id1167793929129} type= 
PROBLEM:
$h(x,y,z)=\frac{{x}^{3}{e}^{2y}}{z}$
SOLUTION:
${h}_{xx}(x,y,z)=\frac{6x{e}^{2y}}{z},$ ${h}_{xy}(x,y,z)=\frac{6{x}^{2}{e}^{2y}}{z},$ ${h}_{xz}(x,y,z)=-\frac{3{x}^{2}{e}^{2y}}{{z}^{2}},$ ${h}_{yx}(x,y,z)=\frac{6{x}^{2}{e}^{2y}}{z},$ ${h}_{yy}(x,y,z)=\frac{4{x}^{3}{e}^{2y}}{z},$ ${h}_{yz}(x,y,z)=-\frac{2{x}^{3}{e}^{2y}}{{z}^{2}},$ ${h}_{zx}(x,y,z)=-\frac{3{x}^{2}{e}^{2y}}{{z}^{2}},$ ${h}_{zy}(x,y,z)=-\frac{2{x}^{3}{e}^{2y}}{{z}^{2}},$ ${h}_{zz}(x,y,z)=\frac{2{x}^{3}{e}^{2y}}{{z}^{3}}$
:::
For the following exercises, find an equation of the tangent plane to the specified surface at the given point.

:::exercise {fs-id1167793957816} type= 
PROBLEM:
$z={x}^{3}-2{y}^{2}+y-1$ at point $(1,1,−1)$
:::

:::exercise {fs-id1167793377749} type= 
PROBLEM:
$z={e}^{x}+\frac{2}{y}$ at point $(0,1,3)$
SOLUTION:
$z=x-2y+5$
:::

:::exercise {fs-id1167793245597} type= 
PROBLEM:
Approximate $f(x,y)={e}^{{x}^{2}}+\sqrt{y}$ at $(0.1,9.1).$ Write down your linear approximation function $L(x,y).$ How accurate is the approximation to the exact answer, rounded to four digits?
:::

:::exercise {fs-id1167793637887} type= 
PROBLEM:
Find the differential $dz$ of $h(x,y)=4{x}^{2}+2xy-3y$ and approximate $\text{Δ}z$ at the point $(1,−2).$ Let $\text{Δ}x=0.1$ and $\text{Δ}y=0.01.$
SOLUTION:
$dz=4dx-dy,$ $dz(0.1,0.01)=0.39,$ $\text{Δ}z=0.432$
:::

:::exercise {fs-id1167794147215} type= 
PROBLEM:
Find the directional derivative of $f(x,y)={x}^{2}+6xy-{y}^{2}$ in the direction $\text{v}=\mathbf{i}+4\mathbf{j}.$
:::

:::exercise {fs-id1167793508394} type= 
PROBLEM:
Find the maximal directional derivative magnitude and direction for the function $f(x,y)={x}^{3}+2xy-\text{cos}(\pi y)$ at point $(3,0).$
SOLUTION:
$3\sqrt{85},\langle 27,6\rangle$
:::
For the following exercises, find the gradient.

:::exercise {fs-id1167793593470} type= 
PROBLEM:
$c(x,t)=e{(t-x)}^{2}+3\;\text{cos}(t)$
:::

:::exercise {fs-id1167794324487} type= 
PROBLEM:
$f(x,y)=\frac{\sqrt{x}+{y}^{2}}{xy}$
SOLUTION:
$\nabla f(x,y)=-\frac{\sqrt{x}+2{y}^{2}}{2{x}^{2}y}\text{i}+(\frac{1}{x}-\frac{1}{\sqrt{x}{y}^{2}})\text{j}$
:::
For the following exercises, find and classify the critical points.

:::exercise {fs-id1167793638437} type= 
PROBLEM:
$z={x}^{3}-xy+{y}^{2}-1$
:::
For the following exercises, use Lagrange multipliers to find the maximum and minimum values for the functions with the given constraints.

:::exercise {fs-id1167793425931} type= 
PROBLEM:
$f(x,y)={x}^{2}y,{x}^{2}+{y}^{2}=4$
SOLUTION:
maximum: $\frac{16}{3\sqrt{3}},$ minimum: $-\frac{16}{3\sqrt{3}}$
:::

:::exercise {fs-id1167793943760} type= 
PROBLEM:
$f(x,y)={x}^{2}-{y}^{2},x+6y=4$
:::

:::exercise {fs-id1167793571536} type= 
PROBLEM:
A machinist is constructing a right circular cone out of a block of aluminum. The machine gives an error of $5\text{\%}$ in height and $2\text{\%}$ in radius. Find the maximum error in the volume of the cone if the machinist creates a cone of height $6$ cm and radius $2$ cm.
SOLUTION:
$2.3228$ cm<sup>3</sup>
:::

:::exercise {fs-id1167793571584} type= 
PROBLEM:
A trash compactor is in the shape of a cuboid. Assume the trash compactor is filled with incompressible liquid. The length and width are decreasing at rates of $2$ ft/sec and $3$ ft/sec, respectively. Find the rate at which the liquid level is rising when the length is $14$ ft, the width is $10$ ft, and the height is $4$ ft.
:::

## Glossary
- {def} **constraint**: an inequality or equation involving one or more variables that is used in an optimization problem; the constraint enforces a limit on the possible solutions for the problem
- {def} **Lagrange multiplier**: the constant (or constants) used in the method of Lagrange multipliers; in the case of one constant, it is represented by the variable $λ$
- {def} **method of Lagrange multipliers**: a method of solving an optimization problem subject to one or more constraints
- {def} **objective function**: the function that is to be maximized or minimized in an optimization problem
- {def} **optimization problem**: calculation of a maximum or minimum value of a function of several variables, often using Lagrange multipliers

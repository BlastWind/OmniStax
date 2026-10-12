# Basics of Differential Equations

## Learning Objectives {section:learning-objectives}
- Identify the order of a differential equation.
- Explain what is meant by a solution to a differential equation.
- Distinguish between the general solution and a particular solution of a differential equation.
- Identify an initial-value problem.
- Identify whether a given function is a solution to a differential equation or an initial-value problem.

Calculus is the mathematics of change, and rates of change are expressed by derivatives. Thus, one of the most common ways to use calculus is to set up an equation containing an unknown function $y=f(x)$ and its derivative, known as a *differential equation*. Solving such equations often provides information about how quantities change and frequently provides insight into how and why the changes occur.
Techniques for solving differential equations can take many different forms, including direct solution, use of graphs, or computer calculations. We introduce the main ideas in this chapter and describe them in a little more detail later in the course. In this section we study what differential equations are, how to verify their solutions, some methods that are used for solving them, and some examples of common and useful equations.

## General Differential Equations
Consider the equation ${y}^{'}=3{x}^{2},$ which is an example of a differential equation because it includes a derivative. There is a relationship between the variables $x$ and $y\text{:}\;y$ is an unknown function of $x.$ Furthermore, the left-hand side of the equation is the derivative of $y.$ Therefore we can interpret this equation as follows: Start with some function $y=f(x)$ and take its derivative. The answer must be equal to $3{x}^{2}.$ What function has a derivative that is equal to $3{x}^{2}?$ One such function is $y={x}^{3},$ so this function is considered a {term:solution to a differential equation}.

:::note [definition] Definition
A {term:differential equation} is an equation involving an unknown function $y=f(x)$ and one or more of its derivatives. A solution to a differential equation is a function $y=f(x)$ that satisfies the differential equation when $f$ and its derivatives are substituted into the equation.
:::

:::note [media-2] 
Go to this [website](http://www.openstax.org/l/20_Differential) to explore more on this topic.
:::
Some examples of differential equations and their solutions appear in [ref:fs-id1170573355757].

> TABLE {tab:fs-id1170573355757} cols=2
> title: Examples of Differential Equations and Their Solutions
> summary: A table with two rows and two columns. The first column has the header “Equation” and the values y’ = 2 x, y’ + 3 y = 6 x + 11, and y’’ – 3 y’ + 2 y = 24 e ^ (-2 x). The second column has the header “Solution” and the values y = x ^ 2, y = e ^ (-3 x) – 4 e ^ (2 x) + 2 e ^ (-2 x).

| Equation | Solution |
| --- | --- |
| $y'=2x$ | $y={x}^{2}$ |
| $y'+3y=6x+11$ | $y={e}^{−3x}+2x+3$ |
| $y''-3y'+2y=24{e}^{−2x}$ | $y=3{e}^{x}-4{e}^{2x}+2{e}^{−2x}$ |

Note that a solution to a differential equation is not necessarily unique, primarily because the derivative of a constant is zero. For example, $y={x}^{2}+4$ is also a solution to the first differential equation in [ref:fs-id1170573355757]. We will return to this idea a little bit later in this section. For now, let’s focus on what it means for a function to be a solution to a differential equation.

:::example {ex:fs-id1170573540760} Verifying Solutions of Differential Equations

:::exercise {fs-id1170573412377} type= 
PROBLEM:
Verify that the function $y={e}^{−3x}+2x+3$ is a solution to the differential equation ${y}^{'}+3y=6x+11.$
SOLUTION:
To verify the solution, we first calculate ${y}^{'}$ using the chain rule for derivatives. This gives ${y}^{'}=−3{e}^{−3x}+2.$ Next we substitute $y$ and ${y}^{'}$ into the left-hand side of the differential equation:

$(−3{e}^{−3x}+2)+3({e}^{−3x}+2x+3).$  {eq:fs-id1170573368104}

The resulting expression can be simplified by first distributing to eliminate the parentheses, giving

$−3{e}^{−3x}+2+3{e}^{−3x}+6x+9.$  {eq:fs-id1170573401703}

Combining like terms leads to the expression $6x+11,$ which is equal to the right-hand side of the differential equation. This result verifies that $y={e}^{−3x}+2x+3$ is a solution of the differential equation.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571153281} type= 
PROBLEM:
Verify that $y=2{e}^{3x}-2x-2$ is a solution to the differential equation ${y}^{'}-3y=6x+4.$
COMMENTARY: Hint
First calculate ${y}^{'}$ then substitute both ${y}^{'}$ and $y$ into the left-hand side.
:::
:::
It is convenient to define characteristics of differential equations that make it easier to talk about them and categorize them. The most basic characteristic of a differential equation is its order.

:::note [definition] Definition
The {term:order of a differential equation} is the highest order of any derivative of the unknown function that appears in the equation.
:::

:::example {ex:fs-id1170571085382} Identifying the Order of a Differential Equation

:::exercise {fs-id1170573394321} type= 
PROBLEM:
What is the order of each of the following differential equations?
a. ${y}^{'}-4y={x}^{2}-3x+4$
b. ${x}^{2}y''' -3x{y}^{''}+x{y}^{'}-3y=\text{sin}\;x$
c. $\frac{4}{x}{y}^{(4)}-\frac{6}{{x}^{2}}{y}^{''}+\frac{12}{{x}^{4}}y={x}^{3}-3{x}^{2}+4x-12$
SOLUTION:
a. The highest derivative in the equation is ${y}^{'},$ so the order is $1.$
b. The highest derivative in the equation is $y''' \text{,}$ so the order is $3.$
c. The highest derivative in the equation is ${y}^{(4)},$ so the order is $4.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573290714} type= 
PROBLEM:
What is the order of the following differential equation?

$({x}^{4}-3x){y}^{(5)}-(3{x}^{2}+1){y}^{'}+3y=\text{sin}\;x\;\text{cos}\;x$  {eq:fs-id1170573604103}

SOLUTION:
$5$
COMMENTARY: Hint
What is the highest derivative in the equation?
:::
:::

## General and Particular Solutions
We already noted that the differential equation ${y}^{'}=2x$ has at least two solutions: $y={x}^{2}$ and $y={x}^{2}+4.$ The only difference between these two solutions is the last term, which is a constant. What if the last term is a different constant? Will this expression still be a solution to the differential equation? In fact, any function of the form $y={x}^{2}+C,$ where $C$ represents any constant, is a solution as well. The reason is that the derivative of ${x}^{2}+C$ is $2x,$ regardless of the value of $C.$ It can be shown that any solution of this differential equation must be of the form $y={x}^{2}+C.$ This is an example of a {term:general solution} to a differential equation. A graph of some of these solutions is given in [ref:CNX_Calc_Figure_08_01_001]. (*Note*: in this graph we used even integer values for $C$ ranging between $−4$ and $4.$ In fact, there is no restriction on the value of $C;$ it can be an integer or not.)

> FIGURE {fig:CNX_Calc_Figure_08_01_001} src=../../media/CNX_Calc_Figure_08_01_001.jpg
> alt: A graph of a family of solutions to the differential equation y’ = 2 x, which are of the form y = x ^ 2 + C. Parabolas are drawn for values of C: -4, -2, 0, 2, and 4.
> caption: Family of solutions to the differential equation ${y}^{'}=2x.$

In this example, we are free to choose any solution we wish; for example, $y={x}^{2}-3$ is a member of the family of solutions to this differential equation. This is called a {term:particular solution} to the differential equation. A particular solution can often be uniquely identified if we are given additional information about the problem.

:::example {ex:fs-id1170573439706} Finding a Particular Solution

:::exercise {fs-id1170573282406} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}=2x$ passing through the point $(2,7).$
SOLUTION:
Any function of the form $y={x}^{2}+C$ is a solution to this differential equation. To determine the value of $C,$ we substitute the values $x=2$ and $y=7$ into this equation and solve for $C\text{:}$

$\begin{array}{l} \\ \\ y={x}^{2}+C \\ 7={2}^{2}+C=4+C \\ C=3.\end{array}$  {eq:fs-id1170573418890}

Therefore the particular solution passing through the point $(2,7)$ is $y={x}^{2}+3.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573243576} type= 
PROBLEM:
Find the particular solution to the differential equation

${y}^{'}=4x+3$  {eq:fs-id1170573310732}

passing through the point $(1,7),$ given that $y=2{x}^{2}+3x+C$ is a general solution to the differential equation.
SOLUTION:
$y=2{x}^{2}+3x+2$
COMMENTARY: Hint
First substitute $x=1$ and $y=7$ into the equation, then solve for $C.$
:::
:::

## Initial-Value Problems
Usually a given differential equation has an infinite number of solutions, so it is natural to ask which one we want to use. To choose one solution, more information is needed. Some specific information that can be useful is an {term:initial value}, which is an ordered pair that is used to find a particular solution.
A differential equation together with one or more initial values is called an {term:initial-value problem}. The general rule is that the number of initial values needed for an initial-value problem is equal to the order of the differential equation. For example, if we have the differential equation ${y}^{'}=2x,$ then $y(3)=7$ is an initial value, and when taken together, these equations form an initial-value problem. The differential equation ${y}^{''}-3{y}^{'}+2y=4{e}^{x}$ is second order, so we need two initial values. With initial-value problems of order greater than one, the same value should be used for the independent variable. An example of initial values for this second-order equation would be $y(0)=2$ and ${y}^{'}(0)=−1.$ These two initial values together with the differential equation form an initial-value problem. These problems are so named because often the independent variable in the unknown function is $t,$ which represents time. Thus, a value of $t=0$ represents the beginning of the problem.

:::example {ex:fs-id1170573712028} Verifying a Solution to an Initial-Value Problem

:::exercise {fs-id1170573391210} type= 
PROBLEM:
Verify that the function $y=2{e}^{−2t}+{e}^{t}$ is a solution to the initial-value problem

${y}^{'}+2y=3{e}^{t},\;y(0)=3.$  {eq:fs-id1170573368596}

SOLUTION:
For a function to satisfy an initial-value problem, it must satisfy both the differential equation and the initial condition. To show that $y$ satisfies the differential equation, we start by calculating ${y}^{'}.$ This gives ${y}^{'}=−4{e}^{−2t}+{e}^{t}.$ Next we substitute both $y$ and ${y}^{'}$ into the left-hand side of the differential equation and simplify:

$\begin{array}{ll}{y}^{'}+2y & =(−4{e}^{−2t}+{e}^{t})+2(2{e}^{−2t}+{e}^{t}) \\ & =−4{e}^{−2t}+{e}^{t}+4{e}^{−2t}+2{e}^{t} \\ & =3{e}^{t}.\end{array}$  {eq:fs-id1170571448884}

This is equal to the right-hand side of the differential equation, so $y=2{e}^{−2t}+{e}^{t}$ solves the differential equation. Next we calculate $y(0)\text{:}$

$\begin{array}{ll}y(0) & =2{e}^{−2(0)}+{e}^{0} \\ & =2+1 \\ & =3.\end{array}$  {eq:fs-id1170573407815}

This result verifies the initial value. Therefore the given function satisfies the initial-value problem.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170570975800} type= 
PROBLEM:
Verify that $y=3{e}^{2t}+4\;\text{sin}\;t$ is a solution to the initial-value problem

${y}^{'}-2y=4\;\text{cos}\;t-8\;\text{sin}\;t,\;y(0)=3.$  {eq:fs-id1170573368474}

COMMENTARY: Hint
First verify that $y$ solves the differential equation. Then check the initial value.
:::
:::
In [ref:fs-id1170573712028], the initial-value problem consisted of two parts. The first part was the differential equation ${y}^{'}+2y=3{e}^{t},$ and the second part was the initial value $y(0)=3.$ These two equations together formed the initial-value problem.
The same is true in general. An initial-value problem consists of two parts: the differential equation and the initial condition. The differential equation has a family of solutions, and the initial condition determines the value of $C.$ The family of solutions to the differential equation in [ref:fs-id1170573712028] is given by $y=2{e}^{−2t}+C{e}^{t}.$ This family of solutions is shown in [ref:CNX_Calc_Figure_08_01_002], with the particular solution $y=2{e}^{−2t}+{e}^{t}$ labeled.

> FIGURE {fig:CNX_Calc_Figure_08_01_002} src=../../media/CNX_Calc_Figure_08_01_002.jpg
> alt: A graph of a family of solutions to the differential equation y’ + 2 y = 3 e ^ t, which are of the form y = 2 e ^ (-2 t) + C e ^ t. The versions with C = 1, 0.5, and -0.2 are shown, among others not labeled. For all values of C, the function increases rapidly for t < 0 as t goes to negative infinity. For C > 0, the function changes direction and increases in a gentle curve as t goes to infinity. Larger values of C have a tighter curve closer to the y axis and at a higher y value. For C = 0, the function goes to 0 as t goes to infinity. For C < 0, the function continues to decrease as t goes to infinity.
> caption: A family of solutions to the differential equation ${y}^{'}+2y=3{e}^{t}.$ The particular solution $y=2{e}^{−2t}+{e}^{t}$ is labeled.

:::example {ex:fs-id1170571123767} Solving an Initial-value Problem

:::exercise {fs-id1170571169678} type= 
PROBLEM:
Solve the following initial-value problem:

${y}^{'}=3{e}^{x}+{x}^{2}-4,\;y(0)=5.$  {eq:fs-id1170571227292}

SOLUTION:
The first step in solving this initial-value problem is to find a general family of solutions. To do this, we find an antiderivative of both sides of the differential equation

${\displaystyle \int {y}^{'}dx}={\displaystyle \int (3{e}^{x}+{x}^{2}-4)\;dx},$  {eq:fs-id1170573413466}

namely,

$$ y+{C}_{1}=3{e}^{x}+\frac{1}{3}{x}^{3}-4x+{C}_{2}. $$  {eq:fs-id1170571122530}

We are able to integrate both sides because the *y* term appears by itself. Notice that there are two integration constants: ${C}_{1}$ and ${C}_{2}.$ Solving [ref:fs-id1170571122530] for $y$ gives

$y=3{e}^{x}+\frac{1}{3}{x}^{3}-4x+{C}_{2}-{C}_{1}.$  {eq:fs-id1170571131874}

Because ${C}_{1}$ and ${C}_{2}$ are both constants, ${C}_{2}-{C}_{1}$ is also a constant. We can therefore define $C={C}_{2}-{C}_{1},$ which leads to the equation

$y=3{e}^{x}+\frac{1}{3}{x}^{3}-4x+C.$  {eq:fs-id1170571120799}

Next we determine the value of $C.$ To do this, we substitute $x=0$ and $y=5$ into [ref:fs-id1170571122530] and solve for $C\text{:}$

$\begin{array}{rll} \\ 5 & = & 3{e}^{0}+\frac{1}{3}{0}^{3}-4(0)+C \\ 5 & = & 3+C \\ C & = & 2.\end{array}$  {eq:fs-id1170571417379}

Now we substitute the value $C=2$ into [ref:fs-id1170571122530]. The solution to the initial-value problem is $y=3{e}^{x}+\frac{1}{3}{x}^{3}-4x+2.$
COMMENTARY: Analysis
The difference between a general solution and a particular solution is that a general solution involves a family of functions, either explicitly or implicitly defined, of the independent variable. The initial value or values determine which particular solution in the family of solutions satisfies the desired conditions.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571329490} type= 
PROBLEM:
Solve the initial-value problem

${y}^{'}={x}^{2}-4x+3-6{e}^{x},\;y(0)=8.$  {eq:fs-id1170573570394}

SOLUTION:
$y=\frac{1}{3}{x}^{3}-2{x}^{2}+3x-6{e}^{x}+14$
COMMENTARY: Hint
First take the antiderivative of both sides of the differential equation. Then substitute $x=0$ and $y=8$ into the resulting equation and solve for $C.$
:::
:::
In physics and engineering applications, we often consider the forces acting upon an object, and use this information to understand the resulting motion that may occur. For example, if we start with an object at Earth’s surface, the primary force acting upon that object is gravity. Physicists and engineers can use this information, along with {index:Newton’s second law of motion} (in equation form $F=ma,$ where $F$ represents force, $m$ represents mass, and $a$ represents acceleration), to derive an equation that can be solved.

> FIGURE {fig:CNX_Calc_Figure_08_01_003} src=../../media/CNX_Calc_Figure_08_01_003.jpg
> alt: A picture of a baseball with an arrow underneath it pointing down. The arrow is labeled g = -9.8 m/sec ^ 2.
> caption: For a baseball falling in air, the only force acting on it is gravity (neglecting air resistance).

In [ref:CNX_Calc_Figure_08_01_003] we assume that the only force acting on a baseball is the force of gravity. This assumption ignores air resistance. (The force due to air resistance is considered in a later discussion.) The acceleration due to gravity at Earth’s surface, $g,$ is approximately $9.8{\;\text{m/s}}^{2}.$ We introduce a frame of reference, where Earth’s surface is at a height of 0 meters. Let $v(t)$ represent the velocity of the object in meters per second. If $v(t)>0,$ the ball is rising, and if $v(t)<0,$ the ball is falling ([ref:CNX_Calc_Figure_08_01_004]).

> FIGURE {fig:CNX_Calc_Figure_08_01_004} src=../../media/CNX_Calc_Figure_08_01_004.jpg
> alt: A picture of a baseball with an arrow above it pointing up and an arrow below it pointing down. The arrow pointing up is labeled v(t) > 0, and the arrow pointing down is labeled v(t) < 0.
> caption: Possible velocities for the rising/falling baseball.

Our goal is to solve for the velocity $v(t)$ at any time $t.$ To do this, we set up an initial-value problem. Suppose the mass of the ball is $m,$ where $m$ is measured in kilograms. We use Newton’s second law, which states that the force acting on an object is equal to its mass times its acceleration $(F=ma).$ Acceleration is the derivative of velocity, so $a(t)={v}^{'}(t).$ Therefore the force acting on the baseball is given by $F=m\;{v}^{'}(t).$ However, this force must be equal to the force of gravity acting on the object, which (again using Newton’s second law) is given by ${F}_{g}=\text{−}mg,$ since this force acts in a downward direction. Therefore we obtain the equation $F={F}_{g},$ which becomes $m\;{v}^{'}(t)=\text{−}mg.$ Dividing both sides of the equation by $m$ gives the equation

${v}^{'}(t)=\text{−}g.$  {eq:fs-id1170573414975}

Notice that this differential equation remains the same regardless of the mass of the object.
We now need an initial value. Because we are solving for velocity, it makes sense in the context of the problem to assume that we know the {term:initial velocity}, or the velocity at time $t=0.$ This is denoted by $v(0)={v}_{0}.$

:::example {ex:fs-id1170571084135} Velocity of a Moving Baseball

:::exercise {fs-id1170571084137} type= 
PROBLEM:
A baseball is thrown upward from a height of $3$ meters above Earth’s surface with an initial velocity of $10\;\text{m/s},$ and the only force acting on it is gravity. The ball has a mass of $0.15\;\text{kg}$.
a. Find the velocity $v(t)$ of the baseball at time $t.$
b. What is its velocity after $2$ seconds?
SOLUTION:
a. From the preceding discussion, the differential equation that applies in this situation is

${v}^{'}(t)=\text{−}g,$  {eq:fs-id1170573401342}

where $g=9.8{\;\text{m/s}}^{2}.$ The initial condition is $v(0)={v}_{0},$ where ${v}_{0}=10\;\text{m/s}\text{.}$ Therefore the initial-value problem is ${v}^{'}(t)=−9.8{\;\text{m/s}}^{2},v(0)=10\;\text{m/s}\text{.}$

The first step in solving this initial-value problem is to take the antiderivative of both sides of the differential equation. This gives

$\begin{array}{rll}{\displaystyle \int {v}^{'}(t)\;dt} & = & {\displaystyle \int −9.8dt} \\ v(t) & = & −9.8t+C.\end{array}$  {eq:fs-id1170573289010}

The next step is to solve for $C.$ To do this, substitute $t=0$ and $v(0)=10\text{:}$

$\begin{array}{rll}v(t) & = & −9.8t+C \\ v(0) & = & −9.8(0)+C \\ 10 & = & C.\end{array}$  {eq:fs-id1170573623436}

Therefore $C=10$ and the velocity function is given by $v(t)=−9.8t+10.$
b. To find the velocity after $2$ seconds, substitute $t=2$ into $v(t).$

$\begin{array}{rll}v(t) & = & −9.8t+10 \\ v(2) & = & −9.8(2)+10 \\ v(2) & = & −9.6.\end{array}$  {eq:fs-id1170571152980}

The units of velocity are meters per second. Since the answer is negative, the object is falling at a speed of $9.6\;\text{m/s}\text{.}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573419498} type= 
PROBLEM:
Suppose a rock falls from rest from a height of $100$ meters and the only force acting on it is gravity. Find an equation for the velocity $v(t)$ as a function of time, measured in meters per second.
SOLUTION:
$v(t)=−9.8t$
COMMENTARY: Hint
What is the initial velocity of the rock? Use this with the differential equation in [ref:fs-id1170571084135] to form an initial-value problem, then solve for $v(t).$
:::
:::
A natural question to ask after solving this type of problem is how high the object will be above Earth’s surface at a given point in time. Let $s(t)$ denote the height above Earth’s surface of the object, measured in meters. Because velocity is the derivative of position (in this case height), this assumption gives the equation ${s}^{'}(t)=v(t).$ An initial value is necessary; in this case the initial height of the object works well. Let the initial height be given by the equation $s(0)={s}_{0}.$ Together these assumptions give the initial-value problem

${s}^{'}(t)=v(t),\;s(0)={s}_{0}.$  {eq:fs-id1170571026947}

If the velocity function is known, then it is possible to solve for the position function as well.

:::example {ex:fs-id1170571046594} Height of a Moving Baseball

:::exercise {fs-id1170571046596} type= 
PROBLEM:
A baseball is thrown upward from a height of $3$ meters above Earth’s surface with an initial velocity of $10\;\text{m/s},$ and the only force acting on it is gravity. The ball has a mass of $0.15$ kilogram.
a. Find the position $s(t)$ of the baseball at time $t.$
b. What is its height after $2$ seconds?
SOLUTION:
a. We already know the velocity function for this problem is $v(t)=−9.8t+10.$ The initial height of the baseball is $3$ meters, so ${s}_{0}=3.$ Therefore the initial-value problem for this example is

To solve the initial-value problem, we first find the antiderivatives:

$\begin{array}{rll}{\displaystyle \int {s}^{'}(t)\;dt} & = & {\displaystyle \int −9.8t+10dt} \\ s(t) & = & −4.9{t}^{2}+10t+C.\end{array}$  {eq:fs-id1170571207187}

Next we substitute $t=0$ and solve for $C\text{:}$

$\begin{array}{rll}s(t) & = & −4.9{t}^{2}+10t+C \\ s(0) & = & −4.9{(0)}^{2}+10(0)+C \\ 3 & = & C.\end{array}$  {eq:fs-id1170573384332}

Therefore the position function is $s(t)=−4.9{t}^{2}+10t+3.$
b. The height of the baseball after $2\;\text{s}$ is given by $s(2)\text{:}$

$\begin{array}{ll}s(2) & =−4.9{(2)}^{2}+10(2)+3 \\ & =−4.9(4)+23 \\ & =3.4.\end{array}$  {eq:fs-id1170571064335}

Therefore the baseball is $3.4$ meters above Earth’s surface after $2$ seconds. It is worth noting that the mass of the ball cancelled out completely in the process of solving the problem.
:::
:::

## Key Concepts {section:key-concepts}
- A differential equation is an equation involving a function $y=f(x)$ and one or more of its derivatives. A solution is a function $y=f(x)$ that satisfies the differential equation when $f$ and its derivatives are substituted into the equation.
- The order of a differential equation is the highest order of any derivative of the unknown function that appears in the equation.
- A differential equation coupled with an initial value is called an initial-value problem. To solve an initial-value problem, first find the general solution to the differential equation, then determine the value of the constant. Initial-value problems have many applications in science and engineering.

##  {section:section-exercises}
Determine the order of the following differential equations.

:::exercise {fs-id1170573512394} type= 
PROBLEM:
${y}^{'}+y=3{y}^{2}$
SOLUTION:
$1$
:::

:::exercise {fs-id1170571429903} type= 
PROBLEM:
${({y}^{'})}^{2}={y}^{'}+2y$
:::

:::exercise {fs-id1170571429907} type= 
PROBLEM:
$y''' +{y}^{''}{y}^{'}=3{x}^{2}$
SOLUTION:
$3$
:::

:::exercise {fs-id1170573604151} type= 
PROBLEM:
${y}^{'}={y}^{''}+3{t}^{2}$
:::

:::exercise {fs-id1170571169530} type= 
PROBLEM:
$\frac{dy}{dt}=t$
SOLUTION:
$1$
:::

:::exercise {fs-id1170571448841} type= 
PROBLEM:
$\frac{dy}{dx}+\frac{{d}^{2}y}{d{x}^{2}}=3{x}^{4}$
:::

:::exercise {fs-id1170571027308} type= 
PROBLEM:
${(\frac{dy}{dt})}^{2}+8\frac{dy}{dt}+3y=4t$
SOLUTION:
$1$
:::
Verify that the following functions are solutions to the given differential equation.

:::exercise {fs-id1170573591938} type= 
PROBLEM:
$y=\frac{{x}^{3}}{3}$ solves ${y}^{'}={x}^{2}$
:::

:::exercise {fs-id1170573608042} type= 
PROBLEM:
$y=2{e}^{\text{−}x}+x-1$ solves ${y}^{'}=x-y$
:::

:::exercise {fs-id1170571095386} type= 
PROBLEM:
$y={e}^{3x}-\frac{{e}^{x}}{2}$ solves ${y}^{'}=3y+{e}^{x}$
:::

:::exercise {fs-id1170571431595} type= 
PROBLEM:
$y=\frac{1}{1-x}$ solves ${y}^{'}={y}^{2}$
:::

:::exercise {fs-id1170573726216} type= 
PROBLEM:
$y={e}^{{x}^{2}\text{/}2}$ solves ${y}^{'}=xy$
:::

:::exercise {fs-id1170573514703} type= 
PROBLEM:
$y=4+\text{ln}\;x$ solves $x{y}^{'}=1$
:::

:::exercise {fs-id1170571298240} type= 
PROBLEM:
$y=3-x+x\;\text{ln}\;x$ solves ${y}^{'}=\text{ln}\;x$
:::

:::exercise {fs-id1170571080766} type= 
PROBLEM:
$y=2{e}^{x}-x-1$ solves ${y}^{'}=y+x$
:::

:::exercise {fs-id1170573520552} type= 
PROBLEM:
$y={e}^{x}+\frac{\text{sin}\;x}{2}-\frac{\text{cos}\;x}{2}$ solves ${y}^{'}=\text{cos}\;x+y$
:::

:::exercise {fs-id1170571235292} type= 
PROBLEM:
$y=\pi {e}^{\text{−}\text{cos}\;x}$ solves ${y}^{'}=y\;\text{sin}\;x$
:::
Verify the following general solutions and find the particular solution.

:::exercise {fs-id1170570999458} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}=4{x}^{2}$ that passes through $(−3,−30),$ given that $y=C+\frac{4{x}^{3}}{3}$ is a general solution.
:::

:::exercise {fs-id1170573756900} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}=3{x}^{3}$ that passes through $(1,4.75),$ given that $y=C+\frac{3{x}^{4}}{4}$ is a general solution.
SOLUTION:
$y=4+\frac{3{x}^{4}}{4}$
:::

:::exercise {fs-id1170571048929} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}=3{x}^{2}y$ that passes through $(0,12),$ given that $y=C{e}^{{x}^{3}}$ is a general solution.
:::

:::exercise {fs-id1170571346530} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}=2xy$ that passes through $(0,\frac{1}{2}),$ given that $y=C{e}^{{x}^{2}}$ is a general solution.
SOLUTION:
$y=\frac{1}{2}{e}^{{x}^{2}}$
:::

:::exercise {fs-id1170573544254} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}={(2xy)}^{2}$ that passes through $(1,-\frac{1}{2}),$ given that $y=-\frac{3}{C+4{x}^{3}}$ is a general solution.
:::

:::exercise {fs-id1170573604115} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}{x}^{2}=y$ that passes through $(1,\frac{2}{e}),$ given that $y=C{e}^{\text{−}1\text{/}x}$ is a general solution.
SOLUTION:
$y=2{e}^{\text{−}1\text{/}x}$
:::

:::exercise {fs-id1170571227052} type= 
PROBLEM:
Find the particular solution to the differential equation $8\frac{dx}{dt}=−2\;\text{cos}(2t)-\text{cos}(4t)$ that passes through $(\pi ,\pi ),$ given that $x=C-\frac{1}{8}\text{sin}(2t)-\frac{1}{32}\text{sin}(4t)$ is a general solution.
:::

:::exercise {fs-id1170571041493} type= 
PROBLEM:
Find the particular solution to the differential equation $\frac{du}{dt}=\text{tan}\;u$ that passes through $(1,\frac{\pi}{2}),$ given that $u={\text{sin}}^{−1}({e}^{C+t})$ is a general solution.
SOLUTION:
$u={\text{sin}}^{−1}({e}^{−1+t})$
:::

:::exercise {fs-id1170571158455} type= 
PROBLEM:
Find the particular solution to the differential equation $\frac{dy}{dt}={e}^{(t+y)}$ that passes through $(1,0),$ given that $y=\text{−}\text{ln}(C-{e}^{t})$ is a general solution.
:::

:::exercise {fs-id1170571105977} type= 
PROBLEM:
Find the particular solution to the differential equation ${y}^{'}(1-{x}^{2})=1+y$ that passes through $(0,−2),$ given that $y=C\frac{\sqrt{x+1}}{\sqrt{1-x}}-1$ is a general solution.
SOLUTION:
$y=-\frac{\sqrt{x+1}}{\sqrt{1-x}}-1$
:::
For the following problems, find the general solution to the differential equation.

:::exercise {fs-id1170571474496} type= 
PROBLEM:
${y}^{'}=3x+{e}^{x}$
:::

:::exercise {fs-id1170571080687} type= 
PROBLEM:
${y}^{'}=\text{ln}\;x+\text{tan}\;x$
SOLUTION:
$y=C-x+x\;\text{ln}\;x-\text{ln}(\text{cos}\;x)$
:::

:::exercise {fs-id1170571346878} type= 
PROBLEM:
${y}^{'}=\text{sin}\;x{e}^{\text{cos}\;x}$
:::

:::exercise {fs-id1170573622381} type= 
PROBLEM:
${y}^{'}={4}^{x}$
SOLUTION:
$y=C+\frac{{4}^{x}}{\text{ln}(4)}$
:::

:::exercise {fs-id1170570993127} type= 
PROBLEM:
${y}^{'}={\text{sin}}^{−1}(2x)$
:::

:::exercise {fs-id1170571167972} type= 
PROBLEM:
${y}^{'}=2t\sqrt{{t}^{2}+16}$
SOLUTION:
$y=\frac{2}{3}\sqrt{{t}^{2}+16}({t}^{2}+16)+C$
:::

:::exercise {fs-id1170571334902} type= 
PROBLEM:
${x}^{'}=\text{coth}\;t+\text{ln}\;t+3{t}^{2}$
:::

:::exercise {fs-id1170571096316} type= 
PROBLEM:
${x}^{'}=t\sqrt{4+t}$
SOLUTION:
$x=\frac{2}{15}\sqrt{4+t}(3{t}^{2}+4t-32)+C$
:::

:::exercise {fs-id1170573737687} type= 
PROBLEM:
${y}^{'}=y$
:::

:::exercise {fs-id1170573529236} type= 
PROBLEM:
${y}^{'}=\frac{y}{x}$
SOLUTION:
$y=Cx$
:::
Solve the following initial-value problems starting from $y(0)=1$ and $y(0)=−1.$ Draw both solutions on the same graph.

:::exercise {fs-id1170571231964} type= 
PROBLEM:
$\frac{dy}{dt}=2t$
:::

:::exercise {fs-id1170573727022} type= 
PROBLEM:
$\frac{dy}{dt}=\text{−}t$
SOLUTION:
$y=1-\frac{{t}^{2}}{2},y=-\frac{{t}^{2}}{2}-1$
:::

:::exercise {fs-id1170571299351} type= 
PROBLEM:
$\frac{dy}{dt}=2y$
:::

:::exercise {fs-id1170571332689} type= 
PROBLEM:
$\frac{dy}{dt}=\text{−}y$
SOLUTION:
$y={e}^{\text{−}t},y=\text{−}{e}^{\text{−}t}$
:::

:::exercise {fs-id1170573762581} type= 
PROBLEM:
$\frac{dy}{dt}=2$
:::
Solve the following initial-value problems starting from ${y}_{0}=10.$ At what time does $y$ increase to $100$ or drop to $1?$

:::exercise {fs-id1170573628757} type= 
PROBLEM:
$\frac{dy}{dt}=4t$
SOLUTION:
$y=2({t}^{2}+5),t=3\sqrt{5}$
:::

:::exercise {fs-id1170571346238} type= 
PROBLEM:
$\frac{dy}{dt}=4y$
:::

:::exercise {fs-id1170571332630} type= 
PROBLEM:
$\frac{dy}{dt}=−2y$
SOLUTION:
$y=10{e}^{−2t},t=-\frac{1}{2}\;\text{ln}\;(\frac{1}{10})$
:::

:::exercise {fs-id1170571210835} type= 
PROBLEM:
$\frac{dy}{dt}={e}^{4t}$
:::

:::exercise {fs-id1170573519515} type= 
PROBLEM:
$\frac{dy}{dt}={e}^{−4t}$
SOLUTION:
$y=\frac{1}{4}(41-{e}^{−4t}),$ never
:::
Recall that a family of solutions includes solutions to a differential equation that differ by a constant. For the following problems, use your calculator to graph a family of solutions to the given differential equation. Use initial conditions from $y(t=0)=−10$ to $y(t=0)=10$ increasing by $2.$ Is there some critical point where the behavior of the solution begins to change?

:::exercise {fs-id1170573491844} type= 
PROBLEM:
**[T]** ${y}^{'}=y(x)$
:::

:::exercise {fs-id1170573491900} type= 
PROBLEM:
**[T]** $x{y}^{'}=y$
SOLUTION:
Solution changes from increasing to decreasing at $y(0)=0$
:::

:::exercise {fs-id1170571248426} type= 
PROBLEM:
**[T]** ${y}^{'}={t}^{3}$
:::

:::exercise {fs-id1170571143237} type= 
PROBLEM:
**[T]** ${y}^{'}=x+y$ (*Hint:* $y=C{e}^{x}-x-1$ is the general solution)
SOLUTION:
Solution changes from increasing to decreasing at $y(0)=0$
:::

:::exercise {fs-id1170571260225} type= 
PROBLEM:
**[T]** ${y}^{'}=x\;\text{ln}\;x+\text{sin}\;x$
:::

:::exercise {fs-id1170571260273} type= 
PROBLEM:
Find the general solution to describe the velocity of a ball of mass $1\;\text{lb}$ that is thrown upward at a rate $a$ ft/sec.
SOLUTION:
$v(t)=−32t+a$
:::

:::exercise {fs-id1170573514657} type= 
PROBLEM:
In the preceding problem, if the initial velocity of the ball thrown into the air is $a=25$ ft/s, write the particular solution to the velocity of the ball. Solve to find the time when the ball hits the ground.
:::

:::exercise {fs-id1170571097477} type= 
PROBLEM:
You throw two objects with differing masses ${m}_{1}$ and ${m}_{2}$ upward into the air with the same initial velocity $a$ ft/s. What is the difference in their velocity after $1$ second?
SOLUTION:
$0$ ft/s
:::

:::exercise {fs-id1170571097522} type= 
PROBLEM:
**[T]** You throw a ball of mass $1$ kilogram upward with a velocity of $a=25$ m/s on Mars, where the acceleration of gravity is $g=−3.711$ m/s<sup>2</sup>. Use your calculator to approximate how much longer the ball is in the air on Mars than on Earth, where $g=-9.8m/{s}^{2}$.
:::

:::exercise {fs-id1170571041164} type= 
PROBLEM:
**[T]** For the previous problem, use your calculator to approximate how much higher the ball went on Mars, where $g=-9.8m/{s}^{2}$.
SOLUTION:
$52.354$ meters
:::

:::exercise {fs-id1170571041188} type= 
PROBLEM:
**[T]** A car on the freeway accelerates according to $a=15\;\text{cos}(\pi t),$ where $t$ is measured in hours. Set up and solve the differential equation to determine the velocity of the car if it has an initial speed of $50$ mph. After $40$ minutes of driving, what is the driver’s velocity?
:::

:::exercise {fs-id1170571335736} type= 
PROBLEM:
**[T]** For the car in the preceding problem, find the expression for the distance the car has traveled in time $t,$ assuming an initial distance of $0.$ How long does it take the car to travel $100$ miles? Round your answer to hours and minutes.
SOLUTION:
$x=50t-\frac{15}{{\pi}^{2}}\text{cos}(\pi t)+\frac{3}{{\pi}^{2}},2$ hours $1$ minute
:::

:::exercise {fs-id1170571027388} type= 
PROBLEM:
**[T]** For the previous problem, find the total distance traveled in the first hour.
:::

:::exercise {fs-id1170571027411} type= 
PROBLEM:
Substitute $y=B{e}^{3t}$ into ${y}^{'}-y=8{e}^{3t}$ to find a particular solution.
SOLUTION:
$y=4{e}^{3t}$
:::

:::exercise {fs-id1170571244226} type= 
PROBLEM:
Substitute $y=a\;\text{cos}(2t)+b\;\text{sin}(2t)$ into ${y}^{'}+y=4\;\text{sin}(2t)$ to find a particular solution.
:::

:::exercise {fs-id1170573715282} type= 
PROBLEM:
Substitute $y=a+bt+c{t}^{2}$ into ${y}^{'}+y=1+{t}^{2}$ to find a particular solution.
SOLUTION:
$y=3-2t+{t}^{2}$
:::

:::exercise {fs-id1170573718799} type= 
PROBLEM:
Substitute $y=a{e}^{t}\text{cos}\;t+b{e}^{t}\text{sin}\;t$ into ${y}^{'}=2{e}^{t}\text{cos}\;t$ to find a particular solution.
:::

:::exercise {fs-id1170571277917} type= 
PROBLEM:
Solve ${y}^{'}={e}^{kt}$ with the initial condition $y(0)=0$ and solve ${y}^{'}=1$ with the same initial condition. As $k$ approaches $0,$ what do you notice?
SOLUTION:
$y=\frac{1}{k}({e}^{kt}-1)$ and $y=x$
:::

## Glossary
- {def} **differential equation**: an equation involving a function $y=y(x)$ and one or more of its derivatives
- {def} **general solution (or family of solutions)**: the entire set of solutions to a given differential equation
- {def} **initial value(s)**: a value or set of values that a solution of a differential equation satisfies for a fixed value of the independent variable
- {def} **initial velocity**: the velocity at time $t=0$
- {def} **initial-value problem**: a differential equation together with an initial value or values
- {def} **order of a differential equation**: the highest order of any derivative of the unknown function that appears in the equation
- {def} **particular solution**: member of a family of solutions to a differential equation that satisfies a particular initial condition
- {def} **solution to a differential equation**: a function $y=f(x)$ that satisfies a given differential equation

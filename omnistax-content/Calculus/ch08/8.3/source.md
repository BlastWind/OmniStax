# Separable Equations

## Learning Objectives {section:learning-objectives}
- Use separation of variables to solve a differential equation.
- Solve applications using separation of variables.

We now examine a solution technique for finding exact solutions to a class of differential equations known as separable differential equations. These equations are common in a wide variety of disciplines, including physics, chemistry, and engineering. We illustrate a few applications at the end of the section.

## Separation of Variables
We start with a definition and some examples.

:::note [definition] Definition
A {term:separable differential equation} is any equation that can be written in the form

$$ y'=f(x)g(y). $$  {eq:fs-id1170573370116}

:::
The term ‘separable’ refers to the fact that the right-hand side of the equation can be separated into a function of $x$ times a function of $y.$ Examples of separable differential equations include

$\begin{array}{l} \\ \\ y'=({x}^{2}-4)(3y+2) \\ y'=6{x}^{2}+4x \\ y'=\text{sec}\;y+\text{tan}\;y \\ y'=xy+3x-2y-6.\end{array}$  {eq:fs-id1170573307602}

The second equation is separable with $f(x)=6{x}^{2}+4x$ and $g(y)=1,$ the third equation is separable with $f(x)=1$ and $g(y)=\text{sec}\;y+\text{tan}\;y,$ and the right-hand side of the fourth equation can be factored as $(x-2)(y+3),$ so it is separable as well. The third equation is also called an {term:autonomous differential equation} because the right-hand side of the equation is a function of $y$ alone. If a differential equation is separable, then it is possible to solve the equation using the method of {term:separation of variables}.

:::note [problem-solving] Separation of Variables
1. Check for any values of $y$ that make $g(y)=0.$ These correspond to constant solutions.
2. Rewrite the differential equation in the form $\frac{dy}{g(y)}=f(x)dx.$
3. Integrate both sides of the equation.
4. Solve the resulting equation for $y$ if possible.
5. If an initial condition exists, substitute the appropriate values for $x$ and $y$ into the equation and solve for the constant.
Note that Step 4. states “Solve the resulting equation for $y$ if possible.” It is not always possible to obtain $y$ as an explicit function of $x.$ Quite often we have to be satisfied with finding $y$ as an implicit function of $x.$
:::

:::example {ex:fs-id1170571302542} Using Separation of Variables

:::exercise {fs-id1170571130297} type= 
PROBLEM:
Find a general solution to the differential equation $y'=({x}^{2}-4)(3y+2)$ using the method of separation of variables.
SOLUTION:
Follow the five-step method of separation of variables.
1. In this example, $f(x)={x}^{2}-4$ and $g(y)=3y+2.$ Setting $g(y)=0$ gives $y=-\frac{2}{3}$ as a constant solution.
2. Rewrite the differential equation in the form

$\frac{dy}{3y+2}=({x}^{2}-4)dx.$  {eq:fs-id1170573206619}

3. Integrate both sides of the equation:

${\displaystyle \int \frac{dy}{3y+2}}={\displaystyle \int ({x}^{2}-4)\;dx}.$  {eq:fs-id1170573356123}

Let $u=3y+2.$ Then $du=3\frac{dy}{dx}dx,$ so the equation becomes

$\begin{array}{rll}\frac{1}{3}{\displaystyle \int \frac{1}{u}du} & = & \frac{1}{3}{x}^{3}-4x+C \\ \frac{1}{3}\;\text{ln}|u| & = & \frac{1}{3}{x}^{3}-4x+C \\ \frac{1}{3}\;\text{ln}|3y+2| & = & \frac{1}{3}{x}^{3}-4x+C.\end{array}$  {eq:fs-id1170571330940}

4. To solve this equation for $y,$ first multiply both sides of the equation by $3.$

$\text{ln}|3y+2|={x}^{3}-12x+3C$  {eq:fs-id1170573425728}

Now we use some logic in dealing with the constant $C.$ Since $C$ represents an arbitrary constant, $3C$ also represents an arbitrary constant. If we call the second arbitrary constant ${C}_{1},$ the equation becomes

$\text{ln}|3y+2|={x}^{3}-12x+{C}_{1}.$  {eq:fs-id1170571289022}

Now exponentiate both sides of the equation (i.e., make each side of the equation the exponent for the base $e).$

$\begin{array}{rll}{e}^{\text{ln}|3y+2|} & = & {e}^{{x}^{3}-12x+{C}_{1}} \\ |3y+2| & = & {e}^{{C}_{1}}{e}^{{x}^{3}-12x}\end{array}$  {eq:fs-id1170573240205}

Again define a new constant ${C}_{2}={e}^{{c}_{1}}$ (note that ${C}_{2}>0)\text{:}$

$|3y+2|={C}_{2}{e}^{{x}^{3}-12x}.$  {eq:fs-id1170571058014}

This corresponds to two separate equations: $3y+2={C}_{2}{e}^{{x}^{3}-12x}$ and $3y+2=\text{−}{C}_{2}{e}^{{x}^{3}-12x}.$

The solution to either equation can be written in the form $y=\frac{−2\pm {C}_{2}{e}^{{x}^{3}-12x}}{3}.$

Since ${C}_{2}>0,$ it does not matter whether we use plus or minus, so the constant can actually have either sign. Furthermore, the subscript on the constant $C$ is entirely arbitrary, and can be dropped. Therefore the solution can be written as

$y=\frac{−2+C{e}^{{x}^{3}-12x}}{3}.$  {eq:fs-id1170573282406}

5. No initial condition is imposed, so we are finished.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571244783} type= 
PROBLEM:
Use the method of separation of variables to find a general solution to the differential equation $y'=2xy+3y-4x-6.$
SOLUTION:
$y=2+C{e}^{{x}^{2}+3x}$
COMMENTARY: Hint
First factor the right-hand side of the equation by grouping, then use the five-step strategy of separation of variables.
:::
:::

:::example {ex:fs-id1170573262524} Solving an Initial-Value Problem

:::exercise {fs-id1170571069529} type= 
PROBLEM:
Using the method of separation of variables, solve the initial-value problem

$y'=(2x+3)({y}^{2}-4),\;y(0)=-1.$  {eq:fs-id1170573423616}

SOLUTION:
Follow the five-step method of separation of variables.
1. In this example, $f(x)=2x+3$ and $g(y)={y}^{2}-4.$ Setting $g(y)=0$ gives $y=\pm 2$ as constant solutions.
2. Divide both sides of the equation by ${y}^{2}-4$ and multiply by $dx.$ This gives the equation

$\frac{dy}{{y}^{2}-4}=(2x+3)\;dx.$  {eq:fs-id1170573712029}

3. Next integrate both sides:

$$ {\displaystyle \int \frac{1}{{y}^{2}-4}\;dy}={\displaystyle \int (2x+3)\;dx}. $$  {eq:fs-id1170573268326}

To evaluate the left-hand side, use the method of partial fraction decomposition. This leads to the identity

$\frac{1}{{y}^{2}-4}=\frac{1}{4}(\frac{1}{y-2}-\frac{1}{y+2}).$  {eq:fs-id1170573336985}

Then [ref:fs-id1170573268326] becomes

$\begin{array}{rll}\frac{1}{4}{\displaystyle \int (\frac{1}{y-2}-\frac{1}{y+2})\;dy} & = & {\displaystyle \int (2x+3)\;dx} \\ \frac{1}{4}(\text{ln}|y-2|-\text{ln}|y+2|) & = & {x}^{2}+3x+C.\end{array}$  {eq:fs-id1170571123143}

Multiplying both sides of this equation by $4$ and replacing $4C$ with ${C}_{1}$ gives

$\begin{array}{rll}\text{ln}|y-2|-\text{ln}|y+2| & = & 4{x}^{2}+12x+{C}_{1} \\ \text{ln}|\frac{y-2}{y+2}| & = & 4{x}^{2}+12x+{C}_{1}.\end{array}$  {eq:fs-id1170573580573}

4. It is possible to solve this equation for *y*. First exponentiate both sides of the equation and define ${C}_{2}={e}^{{C}_{1}}\text{:}$

$|\frac{y-2}{y+2}|={C}_{2}{e}^{4{x}^{2}+12x}.$  {eq:fs-id1170571051107}

Next we can remove the absolute value and let ${C}_{2}$ be either positive or negative. Then multiply both sides by $y+2.$

$\begin{array}{l} \\ \\ y-2={C}_{2}(y+2){e}^{4{x}^{2}+12x} \\ y-2={C}_{2}y{e}^{{}^{4{x}^{2}+12x}}+2{C}_{2}{e}^{{}^{4{x}^{2}+12x}}.\end{array}$  {eq:fs-id1170573408989}

Now collect all terms involving *y* on one side of the equation, and solve for $y\text{:}$

$\begin{array}{rll}y-{C}_{2}y{e}^{4{x}^{2}+12x} & = & 2+2{C}_{2}{e}^{4{x}^{2}+12x} \\ y(1-{C}_{2}{e}^{4{x}^{2}+12x}) & = & 2+2{C}_{2}{e}^{4{x}^{2}+12x} \\ y & = & \frac{2+2{C}_{2}{e}^{4{x}^{2}+12x}}{1-{C}_{2}{e}^{4{x}^{2}+12x}}.\end{array}$  {eq:fs-id1170573627024}

5. To determine the value of ${C}_{2},$ substitute $x=0$ and $y=−1$ into the general solution. Alternatively, we can put the same values into an earlier equation, namely the equation $\frac{y-2}{y+2}={C}_{2}{e}^{4{x}^{2}+12}.$ This is much easier to solve for ${C}_{2}\text{:}$

$\begin{array}{rll}\frac{y-2}{y+2} & = & {C}_{2}{e}^{4{x}^{2}+12x} \\ \frac{−1-2}{−1+2} & = & {C}_{2}{e}^{4{(0)}^{2}+12(0)} \\ {C}_{2} & = & −3.\end{array}$  {eq:fs-id1170571369024}

Therefore the solution to the initial-value problem is

$y=\frac{2-6{e}^{4{x}^{2}+12x}}{1+3{e}^{4{x}^{2}+12x}}.$  {eq:fs-id1170573501784}

A graph of this solution appears in [ref:CNX_Calc_Figure_08_03_001].

> FIGURE {fig:CNX_Calc_Figure_08_03_001} src=../../media/CNX_Calc_Figure_08_03_001.jpg
> alt: A graph of the solution over [-5, 3] for x and [-3, 2] for y. It begins as a horizontal line at y = -2 from x = -5 to just before -3, almost immediately steps up to y = 2 from just after x = -3 to just before x = 0, and almost immediately steps back down to y = -2 just after x = 0 to x = 3.
> caption: Graph of the solution to the initial-value problem $y'=(2x+3)({y}^{2}-4),\;y(0)=−1.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573436521} type= 
PROBLEM:
Find the solution to the initial-value problem

$6y'=(2x+1)({y}^{2}-2y-8),\;y(0)=−3$  {eq:fs-id1170573582993}

using the method of separation of variables.
SOLUTION:
$y=\frac{4+14{e}^{{x}^{2}+x}}{1-7{e}^{{x}^{2}+x}}$
COMMENTARY: Hint
Follow the steps for separation of variables to solve the initial-value problem.
:::
:::

## Applications of Separation of Variables
Many interesting problems can be described by separable equations. We illustrate two types of problems: solution concentrations and Newton’s law of cooling.

### Solution concentrations
Consider a tank being filled with a salt solution. We would like to determine the amount of salt present in the tank as a function of time. We can apply the process of separation of variables to solve this problem and similar problems involving {index:solution concentrations}.

:::example {ex:fs-id1170573587324} Determining Salt Concentration over Time

:::exercise {fs-id1170571026369} type= 
PROBLEM:
A tank containing $100\;\text{L}$ of a brine solution initially has $4\;\text{kg}$ of salt dissolved in the solution. At time $t=0,$ another brine solution flows into the tank at a rate of $2\;\text{L/min}\text{.}$ This brine solution contains a concentration of $0.5\;\text{kg/L}$ of salt. At the same time, a stopcock is opened at the bottom of the tank, allowing the combined solution to flow out at a rate of $2\;\text{L/min},$ so that the level of liquid in the tank remains constant ([ref:CNX_Calc_Figure_08_03_004]). Find the amount of salt in the tank as a function of time (measured in minutes), and find the limiting amount of salt in the tank, assuming that the solution in the tank is well mixed at all times.

> FIGURE {fig:CNX_Calc_Figure_08_03_004} src=../../media/CNX_Calc_Figure_08_03_002.jpg
> alt: A diagram of a cylinder filled with water with input and output. It is a 100 liter tank which initially contains 4 kg of salt. The input is 0.5 kg salt / liter and 2 liters / minute. The output is 2 liters / minute.
> caption: A brine tank with an initial amount of salt solution accepts an input flow and delivers an output flow. How does the amount of salt change with time?

SOLUTION:
First we define a function $u(t)$ that represents the amount of salt in kilograms in the tank as a function of time. Then $\frac{du}{dt}$ represents the rate at which the amount of salt in the tank changes as a function of time. Also, $u(0)$ represents the amount of salt in the tank at time $t=0,$ which is $4$ kilograms.
The general setup for the differential equation we will solve is of the form

$$ \frac{du}{dt}=\text{INFLOW RATE}-\text{OUTFLOW RATE}. $$  {eq:fs-id1170573516013}

INFLOW RATE represents the rate at which salt enters the tank, and OUTFLOW RATE represents the rate at which salt leaves the tank. Because solution enters the tank at a rate of $2$ L/min, and each liter of solution contains $0.5$ kilogram of salt, every minute $2(0.5)=1\;\text{kilogram}$ of salt enters the tank. Therefore INFLOW RATE = $1.$
To calculate the rate at which salt leaves the tank, we need the concentration of salt in the tank at any point in time. Since the actual amount of salt varies over time, so does the concentration of salt. However, the volume of the solution remains fixed at 100 liters. The number of kilograms of salt in the tank at time $t$ is equal to $u(t).$ Thus, the concentration of salt is $\frac{u(t)}{100}$ kg/L, and the solution leaves the tank at a rate of $2$ L/min. Therefore salt leaves the tank at a rate of $\frac{u(t)}{100}\cdot 2=\frac{u(t)}{50}$ kg/min, and OUTFLOW RATE is equal to $\frac{u(t)}{50}.$ Therefore the differential equation becomes $\frac{du}{dt}=1-\frac{u}{50},$ and the initial condition is $u(0)=4.$ The initial-value problem to be solved is

$\frac{du}{dt}=1-\frac{u}{50},\;u(0)=4.$  {eq:fs-id1170571189540}

The differential equation is a separable equation, so we can apply the five-step strategy for solution.
Step 1. Setting $1-\frac{u}{50}=0$ gives $u=50$ as a constant solution. Since the initial amount of salt in the tank is $4$ kilograms, this solution does not apply.
Step 2. Rewrite the equation as

$\frac{du}{dt}=\frac{50-u}{50}.$  {eq:fs-id1170571048349}

Then multiply both sides by $dt$ and divide both sides by $50-u\text{:}$

$\frac{du}{50-u}=\frac{dt}{50}.$  {eq:fs-id1170571169512}

Step 3. Integrate both sides:

$\begin{array}{rll}{\displaystyle \int \frac{du}{50-u}} & = & {\displaystyle \int \frac{dt}{50}} \\ -\text{ln}|50-u| & = & \frac{t}{50}+C.\end{array}$  {eq:fs-id1170571100910}

Step 4. Solve for $u(t)\text{:}$

$\begin{array}{rll}\text{ln}|50-u| & = & -\frac{t}{50}-C \\ {e}^{\text{ln}|50-u|} & = & {e}^{\text{−}(t\text{/}50)-C} \\ |50-u| & = & {C}_{1}{e}^{\text{−}t\text{/}50}.\end{array}$  {eq:fs-id1170571221759}

Eliminate the absolute value by allowing the constant to be either positive or negative:

$50-u={C}_{1}{e}^{\text{−}t\text{/}50}.$  {eq:fs-id1170571094791}

Finally, solve for $u(t)\text{:}$

$u(t)=50-{C}_{1}{e}^{\text{−}t\text{/}50}.$  {eq:fs-id1170571138821}

Step 5. Solve for ${C}_{1}\text{:}$

$\begin{array}{rll}u(0) & = & 50-{C}_{1}{e}^{−0\text{/}50} \\ 4 & = & 50-{C}_{1} \\ {C}_{1} & = & 46.\end{array}$  {eq:fs-id1170573359438}

The solution to the initial value problem is $u(t)=50-46{e}^{\text{−}t\text{/}50}.$ To find the limiting amount of salt in the tank, take the limit as $t$ approaches infinity:

$\begin{array}{rl}\lim_{t\to \infty}u(t) & =50-46{e}^{\text{−}t\text{/}50} \\ & =50-46(0) \\ & =50.\end{array}$  {eq:fs-id1170571052876}

Note that this was the constant solution to the differential equation. If the initial amount of salt in the tank is $50$ kilograms, then it remains constant. If it starts at less than 50 kilograms, then it approaches 50 kilograms over time.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571290127} type= 
PROBLEM:
A tank contains $3$ kilograms of salt dissolved in $75$ liters of water. A salt solution of $0.4\;\text{kg salt/L}$ is pumped into the tank at a rate of $6\;\text{L/min}$ and is drained at the same rate. Solve for the salt concentration at time $t.$ Assume the tank is well mixed at all times.
SOLUTION:
Initial value problem:
$\frac{du}{dt}=2.4-\frac{2u}{25},\;u(0)=3$
$\text{Solution:}\;u(t)=30-27{e}^{\text{−}2t\text{/}25}$
$\text{Concentration:}30-27{e}^{\frac{-2t}{25}}$
COMMENTARY: Hint
Follow the steps in [ref:fs-id1170573587324] and determine an expression for INFLOW and OUTFLOW. Formulate an initial-value problem, and then solve it.
:::
:::

### Newton’s law of cooling
{index:Newton’s law of cooling} states that the rate of change of an object’s temperature is proportional to the difference between its own temperature and the ambient temperature (i.e., the temperature of its surroundings). If we let $T(t)$ represent the temperature of an object as a function of time, then $\frac{dT}{dt}$ represents the rate at which that temperature changes. The temperature of the object’s surroundings can be represented by ${T}_{s}.$ Then Newton’s law of cooling can be written in the form

$\frac{dT}{dt}=k(T(t)-{T}_{s})$  {eq:fs-id1170571136560}

or simply

$$ \frac{dT}{dt}=k(T-{T}_{s}). $$  {eq:fs-id1170573501466}

The temperature of the object at the beginning of any experiment is the initial value for the initial-value problem. We call this temperature ${T}_{0}.$ Therefore the initial-value problem that needs to be solved takes the form

$$ \frac{dT}{dt}=k(T-{T}_{s}),\;T(0)={T}_{0}, $$  {eq:fs-id1170573413054}

where $k$ is a constant that needs to be either given or determined in the context of the problem. We use these equations in [ref:fs-id1170571198014].

:::example {ex:fs-id1170571198014} Waiting for a Pizza to Cool

:::exercise {fs-id1170571198016} type= 
PROBLEM:
A pizza is removed from the oven after baking thoroughly, and the temperature of the pizza when it comes out of the oven is $200\text{°}\text{F}\text{.}$ The temperature of the kitchen is $75\text{°}\text{F},$ and after $1$ minute the temperature of the pizza is $190\text{°}\text{F}\text{.}$ We would like to wait until the temperature of the pizza reaches $150\text{°}\text{F}$ before cutting and serving it ([ref:CNX_Calc_Figure_08_03_005]). How much longer will we have to wait?

> FIGURE {fig:CNX_Calc_Figure_08_03_005} src=../../media/CNX_Calc_Figure_08_03_003.jpg
> alt: An image of a pizza is shown. Above the pizza is labeled “Room temperature is 75 degrees” and below the pizza is labeled “Pizza temperature is 200 degrees”.
> caption: From Newton’s law of cooling, if the pizza cools $10\text{°}\text{F}$ in $1$ minute, how long before it cools to $150\text{°}\text{F?}$

SOLUTION:
The ambient temperature (surrounding temperature) is $75\text{°}\text{F},$ so ${T}_{s}=75.$ The temperature of the pizza when it comes out of the oven is $200\text{°}\text{F},$ which is the initial temperature (i.e., initial value), so ${T}_{0}=200.$ Therefore [ref:fs-id1170573268326] becomes

$\frac{dT}{dt}=k(T-75),\;T(0)=200.$  {eq:fs-id1170573583269}

To solve the differential equation, we use the five-step technique for solving separable equations.
1. Setting the right-hand side equal to zero gives $T=75$ as a constant solution. Since the pizza starts at $200\text{°}\text{F},$ this is not the solution we are seeking.
2. Rewrite the differential equation by multiplying both sides by $dt$ and dividing both sides by $T-75\text{:}$

$\frac{dT}{T-75}=kdt.$  {eq:fs-id1170573509887}

3. Integrate both sides:

$\begin{array}{rll}{\displaystyle \int \frac{dT}{T-75}} & = & {\displaystyle \int kdt} \\ \text{ln}|T-75| & = & kt+C.\end{array}$  {eq:fs-id1170573403649}

4. Solve for $T$ by first exponentiating both sides:

$\begin{array}{rll}{e}^{\text{ln}|T-75|} & = & {e}^{kt+C} \\ |T-75| & = & {C}_{1}{e}^{kt} \\ T-75 & = & {C}_{1}{e}^{kt} \\ T(t) & = & 75+{C}_{1}{e}^{kt}.\end{array}$  {eq:fs-id1170571032119}

5. Solve for ${C}_{1}$ by using the initial condition $T(0)=200\text{:}$

$\begin{array}{rll}T(t) & = & 75+{C}_{1}{e}^{kt} \\ T(0) & = & 75+{C}_{1}{e}^{k(0)} \\ 200 & = & 75+{C}_{1} \\ {C}_{1} & = & 125.\end{array}$  {eq:fs-id1170571250089}

Therefore the solution to the initial-value problem is

$T(t)=75+125{e}^{kt}.$  {eq:fs-id1170571049362}

To determine the value of $k,$ we need to use the fact that after $1$ minute the temperature of the pizza is $190\text{°}\text{F}\text{.}$ Therefore $T(1)=190.$ Substituting this information into the solution to the initial-value problem, we have

$\begin{array}{lll}T(t) & = & 75+125{e}^{kt} \\ T(1) & = & 190=75+125{e}^{k} \\ 115 & = & 125{e}^{k} \\ \frac{115}{125} & = & \frac{23}{25}={e}^{k} \\ \text{ln}\;{e}^{k} & = & \text{ln}\;(\frac{23}{25}) \\ k & = & \;\text{ln}\;(\frac{23}{25})\approx -.08338\end{array}$  {eq:fs-id1170571103568}

So now we have $T(t)=75+125{e}^{-.08338t}.$ When is the temperature $150\text{°}\text{F?}$ Solving for $t,$ we find

$\begin{array}{lll}T(t) & = & 75+125{e}^{-.08338t} \\ 150 & = & 75+125{e}^{-.08338t} \\ 75 & = & 125{e}^{-.08338t} \\ \frac{75}{125} & = & \frac{3}{5}={e}^{-.08338t} \\ -.08338t & = & \text{ln}\;\frac{3}{5} \\ t & = & \frac{\text{ln}({\displaystyle \frac{3}{5}})}{-.08338}\approx 6.12.\end{array}$  {eq:fs-id1170571260323}

Therefore we need to wait an additional $6.12$ minutes (after the temperature of the pizza reached $200\text{°}\text{F}).$ That should be just enough time to finish this calculation.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571110824} type= 
PROBLEM:
A cake is removed from the oven after baking thoroughly, and the temperature of the cake when it comes out of the oven is $450\text{°}\text{F}\text{.}$ The temperature of the kitchen is $70\text{°}\text{F},$ and after $10$ minutes the temperature of the cake is $330\text{°}\text{F}\text{.}$
a. Write the appropriate initial-value problem to describe this situation.
b. Solve the initial-value problem for $T(t).$
c. How long will it take until the temperature of the cake is within $5\text{°}\text{F}$ of room temperature?
SOLUTION:
a. Initial value problem

$\frac{dT}{dt}=k(T-70),\;T(0)=450$
b. $T(t)=70+380{e}^{kt}$
c. Approximately $114$ minutes.
COMMENTARY: Hint
Determine the values of ${T}_{s}$ and ${T}_{0}$ then use [ref:fs-id1170573268326].
:::
:::

## Key Concepts {section:key-concepts}
- A separable differential equation is any equation that can be written in the form $y'=f(x)g(y).$
- The method of separation of variables is used to find the general solution to a separable differential equation.

## Key Equations {section:key-equations}

> TABLE {tab:eip-517} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Separable differential equation** | ${y}^{'}=f(x)g(y)$ |
| **Solution concentration** | $\frac{du}{dt}=\text{INFLOW RATE}-\text{OUTFLOW RATE}$ |
| **Newton’s law of cooling** | $\frac{dT}{dt}=k(T-{T}_{s})$ |

##  {section:section-exercises}
Solve the following initial-value problems with the initial condition ${y}_{0}=0$ and graph the solution.

:::exercise {fs-id1170571298232} type= 
PROBLEM:
$\frac{dy}{dt}=y+1$
SOLUTION:
$y={e}^{t}-1$
:::

:::exercise {fs-id1170573628755} type= 
PROBLEM:
$\frac{dy}{dt}=y-1$
:::

:::exercise {fs-id1170571227046} type= 
PROBLEM:
$\frac{dy}{dt}=–y+1$
SOLUTION:
$y=1+C{e}^{\text{−}t}$
:::

:::exercise {fs-id1170573739096} type= 
PROBLEM:
$\frac{dy}{dt}=\text{−}y-1$
:::
Find the general solution to the differential equation.

:::exercise {fs-id1170571086082} type= 
PROBLEM:
${x}^{2}y'=(x+1)y$
SOLUTION:
$y=Cx{e}^{−1\text{/}x}$
:::

:::exercise {fs-id1170571082435} type= 
PROBLEM:
$y'=\text{tan}(y)x$
:::

:::exercise {fs-id1170571086134} type= 
PROBLEM:
$y'=2x{y}^{2}$
SOLUTION:
$y=\frac{1}{C-{x}^{2}}$
:::

:::exercise {fs-id1170571080665} type= 
PROBLEM:
$\frac{dy}{dt}=y\;\text{cos}(3t+2)$
:::

:::exercise {fs-id1170573742502} type= 
PROBLEM:
$2x\frac{dy}{dx}={y}^{2}$
SOLUTION:
$y=-\frac{2}{C+\text{ln}\;x}$
:::

:::exercise {fs-id1170571105977} type= 
PROBLEM:
$y'={e}^{y}{x}^{2}$
:::

:::exercise {fs-id1170570991601} type= 
PROBLEM:
$(1+x)y'=(x+2)(y-1)$
SOLUTION:
$y=C{e}^{x}(x+1)+1$
:::

:::exercise {fs-id1170571027370} type= 
PROBLEM:
$\frac{dx}{dt}=3{t}^{2}({x}^{2}+4)$
:::

:::exercise {fs-id1170571503173} type= 
PROBLEM:
$t\frac{dy}{dt}=\sqrt{1-{y}^{2}}$
SOLUTION:
$y=\text{sin}(\text{ln}\;t+C)$
:::

:::exercise {fs-id1170571041172} type= 
PROBLEM:
$y'={e}^{x}{e}^{y}$
:::
Find the solution to the initial-value problem.

:::exercise {fs-id1170571074905} type= 
PROBLEM:
$y'={e}^{y-x},y(0)=0$
SOLUTION:
$y=\text{−}\text{ln}({e}^{\text{−}x})$
:::

:::exercise {fs-id1170571306882} type= 
PROBLEM:
$y'={y}^{2}(x+1),y(0)=2$
:::

:::exercise {fs-id1170571023995} type= 
PROBLEM:
$\frac{dy}{dx}={y}^{3}x{e}^{{x}^{2}},y(0)=1$
SOLUTION:
$y=\frac{1}{\sqrt{2-{e}^{{x}^{2}}}}$
:::

:::exercise {fs-id1170573525553} type= 
PROBLEM:
$\frac{dy}{dt}={y}^{2}{e}^{x}\text{sin}(3x),y(0)=1$
:::

:::exercise {fs-id1170571346512} type= 
PROBLEM:
$y'=\frac{x}{{\text{sech}}^{2}y},y(0)=0$
SOLUTION:
$y={\text{tanh}}^{−1}(\frac{{x}^{2}}{2})$
:::

:::exercise {fs-id1170573732357} type= 
PROBLEM:
$y'=2xy(1+2y),y(0)=−1$
:::

:::exercise {fs-id1170571375659} type= 
PROBLEM:
$\frac{dx}{dt}=\text{ln}(t)\sqrt{1-{x}^{2}},x(1)=0$
SOLUTION:
$x=\text{sin}(1-t+t\;\text{ln}\;t)$
:::

:::exercise {fs-id1170573546252} type= 
PROBLEM:
$y'=3{x}^{2}({y}^{2}+4),y(0)=0$
:::

:::exercise {fs-id1170573735242} type= 
PROBLEM:
$y'={e}^{y}{5}^{x},y(0)=\text{ln}(\text{ln}(5))$
SOLUTION:
$y=\text{ln}(\text{ln}(5))-\text{ln}(2-{5}^{x})$
:::

:::exercise {fs-id1170571169464} type= 
PROBLEM:
$y'=−2x\;\text{tan}(y),y(0)=\frac{\pi}{6}$
:::
For the following problems, use a software program or your calculator to generate the directional fields. Solve explicitly and draw solution curves for several initial conditions. Are there some critical initial conditions that change the behavior of the solution?

:::exercise {fs-id1170571503203} type= 
PROBLEM:
**[T]** $y'=1-2y$
SOLUTION:
$y=C{e}^{−2x}+\frac{1}{2}$

> IMAGE {img:fs-id1170573762613} src=../../media/CNX_Calc_Figure_08_03_201.jpg
> alt: A direction field with horizontal arrows pointing to the right at y = 0.5. Above 0.5, the arrows slope down and to the right and are increasingly vertical the further they are from y = 0.5 Below0.5, the arrows slope up and to the right and are increasingly vertical the further they are from y = 0.5.

:::

:::exercise {fs-id1170571051147} type= 
PROBLEM:
**[T]** $y'={y}^{2}{x}^{3}$
:::

:::exercise {fs-id1170571169446} type= 
PROBLEM:
**[T]** $y'={y}^{3}{e}^{x}$
SOLUTION:
$y=\frac{1}{\sqrt{2}\sqrt{C-{e}^{x}}}$

> IMAGE {img:fs-id1170573491884} src=../../media/CNX_Calc_Figure_08_03_203.jpg
> alt: A direction field with arrows pointing to the right. They are horizontal at the y axis. The further the arrows are from the axis, the more vertical they become. They point up above the x axis and down below the x axis.

:::

:::exercise {fs-id1170573491896} type= 
PROBLEM:
**[T]** $y'={e}^{y}$
:::

:::exercise {fs-id1170571348378} type= 
PROBLEM:
**[T]** $y'=y\;\text{ln}(x)$
SOLUTION:
$y=C{e}^{\text{−}x}{x}^{x}$

> IMAGE {img:fs-id1170571429492} src=../../media/CNX_Calc_Figure_08_03_205.jpg
> alt: A direction field with arrows pointing to the right. The arrows are flat on y = 1. The further the arrows are from that, the steeper they become. They point up above that line and down below that line.

:::

:::exercise {fs-id1170571429505} type= 
PROBLEM:
Most {index:drugs in the bloodstream} decay according to the equation $y'=cy,$ where $y$ is the concentration of the drug in the bloodstream. If the half-life of a drug is $2$ hours, what fraction of the initial dose remains after $6$ hours?
:::

:::exercise {fs-id1170571334905} type= 
PROBLEM:
A drug is administered intravenously to a patient at a rate $r$ mg/h and is cleared from the body at a rate proportional to the amount of drug still present in the body, $d$. Set up and solve the differential equation, assuming there is no drug initially present in the body.
SOLUTION:
$y=\frac{r}{d}(1-{e}^{\text{−}dt})$
:::

:::exercise {fs-id1170573732323} type= 
PROBLEM:
**[T]** How often should a drug be taken if its dose is $3$ mg, it is cleared at a rate $c=0.1$ mg/h, and $1$ mg is required to be in the bloodstream at all times?
:::

:::exercise {fs-id1170571503132} type= 
PROBLEM:
A tank contains $1$ kilogram of salt dissolved in $100$ liters of water. A salt solution of $0.1$ kg salt/L is pumped into the tank at a rate of $2$ L/min and is drained at the same rate. Solve for the salt concentration at time $t.$ Assume the tank is well mixed.
SOLUTION:
$y(t)=10-9{e}^{\text{−}x\text{/}50}$
:::

:::exercise {fs-id1170571332706} type= 
PROBLEM:
A tank containing $10$ kilograms of salt dissolved in $1000$ liters of water has two salt solutions pumped in. The first solution of $0.2$ kg salt/L is pumped in at a rate of $20$ L/min and the second solution of $0.05$ kg salt/L is pumped in at a rate of $5$ L/min. The tank drains at $25$ L/min. Assume the tank is well mixed. Solve for the salt concentration at time $t.$
:::

:::exercise {fs-id1170573756832} type= 
PROBLEM:
**[T]** For the preceding problem, find how much salt is in the tank $1$ hour after the process begins.
SOLUTION:
$134.3$ kilograms
:::

:::exercise {fs-id1170573756861} type= 
PROBLEM:
Torricelli’s law states that for a water tank with a hole in the bottom that has a cross-sectional area of ${A}_{H}$ with a height of water $h$ above the bottom of the tank, the rate of change of volume of water flowing from the tank is proportional to the square root of the height of water, according to $\frac{dV}{dt}=\text{−}{A}_{H}\sqrt{2gh},$ where $g$ is the acceleration due to gravity. Note that $\frac{dV}{dt}={A}_{T}\frac{dh}{dt},$ where ${A}_{T}$ is the cross-sectional area of the tank. Solve the resulting initial-value problem for the height of water, assuming a tank of radius $24\sqrt{2}$ with a circular hole of radius $2$ ft. The initial height of water is $100$ ft.
:::

:::exercise {fs-id1170571209325} type= 
PROBLEM:
For the preceding problem, determine how long it takes the tank to drain.
SOLUTION:
$720$ seconds
:::
For the following problems, use Newton’s law of cooling.

:::exercise {fs-id1170573507083} type= 
PROBLEM:
The liquid base of an ice cream has an initial temperature of $200\text{°}\text{F}$ before it is placed in a freezer with a constant temperature of $0\text{°}\text{F}\text{.}$ After $1$ hour, the temperature of the ice-cream base has decreased to $140\text{°}\text{F}\text{.}$ Formulate and solve the initial-value problem to determine the temperature of the ice cream.
:::

:::exercise {fs-id1170571146758} type= 
PROBLEM:
**[T]** The liquid base of an ice cream has an initial temperature of $210\text{°}\text{F}$ before it is placed in a freezer with a constant temperature of $20\text{°}\text{F}\text{.}$ After $2$ hours, the temperature of the ice-cream base has decreased to $170\text{°}\text{F}\text{.}$ At what time will the ice cream be ready to eat? (Assume $30\text{°}\text{F}$ is the optimal eating temperature.)
SOLUTION:
$24$ hours $57$ minutes
:::

:::exercise {fs-id1170571110643} type= 
PROBLEM:
**[T]** You are organizing an ice cream social. The outside temperature is $80\text{°}\text{F}$ and the ice cream is at $10\text{°}\text{F}\text{.}$ After $10$ minutes, the ice cream temperature has risen by $10\text{°}\text{F}\text{.}$ How much longer can you wait before the ice cream melts at $40\text{°}\text{F?}$
:::
For Exercises 159—162, assume a cooling constant of $k=-0.125$ and assume time $t$ is in minutes.

:::exercise {fs-id1170571074882} type= 
PROBLEM:
You have a cup of coffee at temperature $70\text{°}\text{C}$ and the ambient temperature in the room is $20\text{°}\text{C}\text{.}$ Assuming a cooling rate $k\;\text{of}\;0.125,$ write and solve the differential equation to describe the temperature of the coffee with respect to time.
SOLUTION:
$T(t)=20+50{e}^{−0.125t}$
:::

:::exercise {fs-id1170571151946} type= 
PROBLEM:
**[T]** You have a cup of coffee at temperature $70\text{°}\text{C}$ that you put outside, where the ambient temperature is $0\text{°}\text{C}\text{.}$ After $5$ minutes, how much colder is the coffee?
:::

:::exercise {fs-id1170570991542} type= 
PROBLEM:
You have a cup of coffee at temperature $70\text{°}\text{C}$ and you immediately pour in $1$ part milk to $5$ parts coffee. The milk is initially at temperature $1\text{°}\text{C}\text{.}$ Write and solve the differential equation that governs the temperature of this coffee.
SOLUTION:
$T(t)=20+38.5{e}^{−0.125t}$
:::

:::exercise {fs-id1170571137651} type= 
PROBLEM:
You have a cup of coffee at temperature $70\text{°}\text{C},$ which you let cool $10$ minutes before you pour in the same amount of milk at $1\text{°}\text{C}$ as in the preceding problem. How does the temperature compare to the previous cup after $10$ minutes?
:::

:::exercise {fs-id1170571110518} type= 
PROBLEM:
Solve the generic problem $y'=ay+b$ with initial condition $y(0)=c.$
SOLUTION:
$y=(c+\frac{b}{a}){e}^{ax}-\frac{b}{a}$
:::

:::exercise {fs-id1170571042943} type= 
PROBLEM:
Prove the basic continual compounded interest equation. Assuming an initial deposit of ${P}_{0}$ and an interest rate of $r,$ set up and solve an equation for continually compounded interest.
:::

:::exercise {fs-id1170573735511} type= 
PROBLEM:
Assume an initial nutrient amount of $I$ kilograms in a tank with $L$ liters. Assume a concentration of $c$ kg/L being pumped in at a rate of $r$ L/min. The tank is well mixed and is drained at a rate of $r$ L/min. Find the equation describing the amount of nutrient in the tank.
SOLUTION:
$y(t)=cL+(I-cL){e}^{\text{−}rt\text{/}L}$
:::

:::exercise {fs-id1170571343179} type= 
PROBLEM:
Leaves accumulate on the forest floor at a rate of $2$ g/cm<sup>2</sup>/yr and also decompose at a rate of $90\text{\%}$ per year. Write a differential equation governing the number of grams of leaf litter per square centimeter of forest floor, assuming at time $0$ there is no leaf litter on the ground. Does this amount approach a steady value? What is that value?
:::

:::exercise {fs-id1170573742107} type= 
PROBLEM:
Leaves accumulate on the forest floor at a rate of $4$ g/cm<sup>2</sup>/yr. These leaves decompose at a rate of $10\text{\%}$ per year. Write a differential equation governing the number of grams of leaf litter per square centimeter of forest floor. Does this amount approach a steady value? What is that value?
SOLUTION:
$y=40(1-{e}^{−0.1t}),40$ g/cm<sup>2</sup>
:::

## Glossary
- {def} **autonomous differential equation**: an equation in which the right-hand side is a function of $y$ alone
- {def} **separable differential equation**: any equation that can be written in the form $y'=f(x)g(y)$
- {def} **separation of variables**: a method used to solve a separable differential equation

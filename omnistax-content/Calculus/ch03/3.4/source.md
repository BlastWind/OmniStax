# Derivatives as Rates of Change

## Learning Objectives {section:learning-objectives}
- Determine a new value of a quantity from the old value and the amount of change.
- Calculate the average rate of change and explain how it differs from the instantaneous rate of change.
- Apply rates of change to displacement, velocity, and acceleration of an object moving along a straight line.
- Predict the future population from the present value and the population growth rate.
- Use derivatives to calculate marginal cost and revenue in a business situation.

In this section we look at some applications of the derivative by focusing on the interpretation of the derivative as the rate of change of a function. These applications include {term:acceleration} and velocity in physics, {term:population growth rates} in biology, and marginal functions in economics.

## Amount of Change Formula
One application for derivatives is to estimate an unknown value of a function at a point by using a known value of a function at some given point together with its rate of change at the given point. If $f(x)$ is a function defined on an interval $[a,a+h],$ then the {term:amount of change} of $f(x)$ over the interval is the change in the $y$ values of the function over that interval and is given by

$f(a+h)-f(a).$  {eq:fs-id1169738947436}

The {term:average rate of change} of the function $f$ over that same interval is the ratio of the amount of change over that interval to the corresponding change in the $x$ values. It is given by

$\frac{f(a+h)-f(a)}{h}.$  {eq:fs-id1169739005180}

As we already know, the instantaneous rate of change of $f(x)$ at $a$ is its derivative

${f}^{'}(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}.$  {eq:fs-id1169738975674}

For small enough values of $h,{f}^{'}(a)\approx \frac{f(a+h)-f(a)}{h}.$ We can then solve for $f(a+h)$ to get the amount of change formula:

$$ f(a+h)\approx f(a)+{f}^{'}(a)h. $$  {eq:fs-id1169739034265}

We can use this formula if we know only $f(a)$ and ${f}^{'}(a)$ and wish to estimate the value of $f(a+h).$ For example, we may use the current population of a city and the rate at which it is growing to estimate its population in the near future. As we can see in [ref:CNX_Calc_Figure_03_04_001], we are approximating $f(a+h)$ by the $y$ coordinate at $a+h$ on the line tangent to $f(x)$ at $x=a.$ Observe that the accuracy of this estimate depends on the value of $h$ as well as the value of ${f}^{'}(a).$

> FIGURE {fig:CNX_Calc_Figure_03_04_001} src=../../media/CNX_Calc_Figure_03_04_001.jpg
> alt: On the Cartesian coordinate plane with a and a + h marked on the x axis, the function f is graphed. It passes through (a, f(a)) and (a + h, f(a + h)). A straight line is drawn through (a, f(a)) with its slope being the derivative at that point. This straight line passes through (a + h, f(a) + f’(a)h). There is a line segment connecting (a + h, f(a + h)) and (a + h, f(a) + f’(a)h), and it is marked that this is the error in using f(a) + f’(a)h to estimate f(a + h).
> caption: The new value of a changed quantity equals the original value plus the rate of change times the interval of change: $f(a+h)\approx f(a)+{f}^{'}(a)h.$

:::note [media-2] 
Here is an interesting [demonstration](http://www.openstax.org/l/20_chainrule) of rate of change.
:::

:::example {ex:fs-id1169738907373} Estimating the Value of a Function

:::exercise {fs-id1169739169344} type= 
PROBLEM:
If $f(3)=2$ and ${f}^{'}(3)=5,$ estimate $f(3.2).$
SOLUTION:
Begin by finding $h.$ We have $h=3.2-3=0.2.$ Thus,

$f(3.2)=f(3+0.2)\approx f(3)+(0.2){f}^{'}(3)=2+0.2(5)=3.$  {eq:fs-id1169739033980}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738972483} type= 
PROBLEM:
Given $f(10)=−5$ and ${f}^{'}(10)=6,$ estimate $f(10.1).$
SOLUTION:
$−4.4$
COMMENTARY: Hint
Use the same process as in the preceding example.
:::
:::

## Motion along a Line
Another use for the derivative is to analyze motion along a line. We have described velocity as the rate of change of position. If we take the derivative of the velocity, we can find the acceleration, or the rate of change of velocity. It is also important to introduce the idea of {term:speed}, which is the magnitude of velocity. Thus, we can state the following mathematical definitions.

:::note [definition] Definition
Let $s(t)$ be a function giving the position of an object at time $t.$
The velocity of the object at time $t$ is given by $v(t)={s}^{'}(t).$
The speed of the object at time $t$ is given by $|v(t)|.$
The acceleration of the object at $t$ is given by $a(t)={v}^{'}(t)={s}^{''}(t).$
:::

:::example {ex:fs-id1169738906211} Comparing Instantaneous Velocity and Average Velocity

:::exercise {fs-id1169739223216} type= 
PROBLEM:
A ball is dropped from a height of 64 feet. Its height above ground (in feet) $t$ seconds later is given by $s(t)=−16{t}^{2}+64.$

> IMAGE {img:fs-id1169738942090} src=../../media/CNX_Calc_Figure_03_04_002.jpg
> alt: On the Cartesian coordinate plane, the function s(t) = −16t2 + 64 is graphed. This function starts at (0, 64) and decreases to (0, 2).

a. What is the instantaneous velocity of the ball when it hits the ground?
b. What is the average velocity during its fall?
SOLUTION:
The first thing to do is determine how long it takes the ball to reach the ground. To do this, set $s(t)=0.$ Solving $−16{t}^{2}+64=0,$ we get $t=2,$ so it take 2 seconds for the ball to reach the ground.
a. The instantaneous velocity of the ball as it strikes the ground is $v(2).$ Since $v(t)={s}^{'}(t)=−32t,$ we obtain $v(t)=−64\;\text{ft/s}.$
b. The average velocity of the ball during its fall is

${v}_{ave}=\frac{s(2)-s(0)}{2-0}=\frac{0-64}{2}=−32\;\text{ft/s}.$  {eq:fs-id1169739018761}

:::
:::

:::example {ex:fs-id1169738904404} Interpreting the Relationship between $v(t)$ and $a(t)$

:::exercise {fs-id1169739038358} type= 
PROBLEM:
A particle moves along a coordinate axis in the positive direction to the right. Its position at time $t$ is given by $s(t)={t}^{3}-4t+2.$ Find $v(1)$ and $a(1)$ and use these values to answer the following questions.
a. Is the particle moving from left to right or from right to left at time $t=1?$
b. Is the particle speeding up or slowing down at time $t=1?$
SOLUTION:
Begin by finding $v(t)$ and $a(t).$
$v(t)={s}^{'}(t)=3{t}^{2}-4$  and $a(t)={v}^{'}(t)={s}^{''}(t)=6t.$
Evaluating these functions at $t=1,$ we obtain $v(1)=−1$ and $a(1)=6.$
a. Because $v(1)<0,$ the particle is moving from right to left.
b. Because $v(1)<0$ and $a(1)>0,$ velocity and acceleration are acting in opposite directions. In other words, the particle is being accelerated in the direction opposite the direction in which it is traveling, causing $|v(t)|$ to decrease. The particle is slowing down.
:::
:::

:::example {ex:fs-id1169738889577} Position and Velocity

:::exercise {fs-id1169738994257} type= 
PROBLEM:
The position of a particle moving along a coordinate axis is given by $s(t)={t}^{3}-9{t}^{2}+24t+4,t\ge 0.$
a. Find $v(t).$
b. At what time(s) is the particle at rest?
c. On what time intervals is the particle moving from left to right? From right to left?
d. Use the information obtained to sketch the path of the particle along a coordinate axis.
SOLUTION:
a. The velocity is the derivative of the position function:

$v(t)={s}^{'}(t)=3{t}^{2}-18t+24.$  {eq:fs-id1169739198570}

b. The particle is at rest when $v(t)=0,$ so set $3{t}^{2}-18t+24=0.$ Factoring the left-hand side of the equation produces $3(t-2)(t-4)=0.$ Solving, we find that the particle is at rest at $t=2$ and $t=4.$
c. The particle is moving from left to right when $v(t)>0$ and from right to left when $v(t)<0.$ [ref:CNX_Calc_Figure_03_04_003] gives the analysis of the sign of $v(t)$ for $t\ge 0,$ but it does not represent the axis along which the particle is moving.

> FIGURE {fig:CNX_Calc_Figure_03_04_003} src=../../media/CNX_Calc_Figure_03_04_003.jpg
> alt: A number line marked with 0, 2, and 4. Between 0 and 2, there is a plus sign. Above 2, there is a 0. Between 2 and 4 there is a negative sign. Above 4 there is a 0. After 4 there is a plus sign and v(t).
> caption: The sign of v(t) determines the direction of the particle.

Since $3{t}^{2}-18t+24>0$ on $[0,2){\displaystyle \cup}(4,\text{+}\infty ),$ the particle is moving from left to right on these intervals.

Since $3{t}^{2}-18t+24<0$ on $(2,4),$ the particle is moving from right to left on this interval.
d. Before we can sketch the graph of the particle, we need to know its position at the time it starts moving $(t=0)$ and at the times that it changes direction $(t=2,4).$ We have $s(0)=4,s(2)=24,$ and $s(4)=20.$ This means that the particle begins on the coordinate axis at 4 and changes direction at 24 and 20 on the coordinate axis. The path of the particle is shown on a coordinate axis in [ref:CNX_Calc_Figure_03_04_004].

> FIGURE {fig:CNX_Calc_Figure_03_04_004} src=../../media/CNX_Calc_Figure_03_04_005.jpg
> alt: A number line is given and above it a line snakes, starting at t = 0 above 4 on the number line. Then the line at t = 2 is above 24 on the number line. Then the line decreases at t = 4 to be above 20 on the number line, at which point the line reverses direction again and increases indefinitely.
> caption: The path of the particle can be determined by analyzing v(t).

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738843352} type= 
PROBLEM:
A particle moves along a coordinate axis. Its position at time $t$ is given by $s(t)={t}^{2}-5t+1.$ Is the particle moving from right to left or from left to right at time $t=3?$
SOLUTION:
left to right
COMMENTARY: Hint
Find $v(3)$ and look at the sign.
:::
:::

## Population Change
In addition to analyzing velocity, speed, acceleration, and position, we can use derivatives to analyze various types of populations, including those as diverse as bacteria colonies and cities. We can use a current population, together with a growth rate, to estimate the size of a population in the future. The population growth rate is the rate of change of a population and consequently can be represented by the derivative of the size of the population.

:::note [definition] Definition
If $P(t)$ is the number of entities present in a population, then the population growth rate of $P(t)$ is defined to be ${P}^{'}(t).$
:::

:::example {ex:fs-id1169739270775} Estimating a Population

:::exercise {fs-id1169739270777} type= 
PROBLEM:
The population of a city is tripling every 5 years. If its current population is 10,000, what will be its approximate population 2 years from now?
SOLUTION:
Let $P(t)$ be the population (in thousands) $t$ years from now. Thus, we know that $P(0)=10$ and based on the information, we anticipate $P(5)=30.$ Now estimate ${P}^{'}(0),$ the current growth rate, using

${P}^{'}(0)\approx \frac{P(5)-P(0)}{5-0}=\frac{30-10}{5}=4.$  {eq:fs-id1169736589175}

By applying [ref:fs-id1169739034265] to $P(t),$ we can estimate the population 2 years from now by writing

$P(2)\approx P(0)+(2){P}^{'}(0)\approx 10+2(4)=18;$  {eq:fs-id1169736662465}

thus, in 2 years the population will be 18,000.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739202494} type= 
PROBLEM:
The current population of a mosquito colony is known to be 3,000; that is, $P(0)=3,000.$ If ${P}^{'}(0)=100,$ estimate the size of the population in 3 days, where $t$ is measured in days.
SOLUTION:
3,300
COMMENTARY: Hint
Use $P(3)\approx P(0)+3{P}^{'}(0).$
:::
:::

## Changes in Cost and Revenue
In addition to analyzing motion along a line and population growth, derivatives are useful in analyzing changes in cost, revenue, and profit. The concept of a marginal function is common in the fields of business and economics and implies the use of derivatives. The marginal cost is the derivative of the cost function. The marginal revenue is the derivative of the revenue function. The marginal profit is the derivative of the profit function, which is based on the cost function and the revenue function.

:::note [definition] Definition
If $C(x)$ is the cost of producing *x* items, then the {term:marginal cost} $MC(x)$ is $MC(x)={C}^{'}(x).$
If $R(x)$ is the revenue obtained from selling $x$ items, then the marginal revenue $MR(x)$ is $MR(x)={R}^{'}(x).$
If $P(x)=R(x)-C(x)$ is the profit obtained from selling *x* items, then the {term:marginal profit} $MP(x)$ is defined to be $MP(x)={P}^{'}(x)=MR(x)-MC(x)={R}^{'}(x)-{C}^{'}(x).$
:::
We can roughly approximate

$MC(x)={C}^{'}(x)=\lim_{h\to 0}\frac{C(x+h)-C(x)}{h}$  {eq:fs-id1165040641522}

by choosing an appropriate value for $h.$ Since *x* represents objects, a reasonable and small value for $h$ is 1. Thus, by substituting $h=1,$ we get the approximation $MC(x)={C}^{'}(x)\approx C(x+1)-C(x).$ Consequently, ${C}^{'}(x)$ for a given value of $x$ can be thought of as the change in cost associated with producing one additional item. In a similar way, $MR(x)={R}^{'}(x)$ approximates the revenue obtained by selling one additional item, and $MP(x)={P}^{'}(x)$ approximates the profit obtained by producing and selling one additional item.

:::example {ex:fs-id1169739302508} Applying Marginal Revenue

:::exercise {fs-id1169739274268} type= 
PROBLEM:
Assume that the number of barbeque dinners that can be sold, $x,$ can be related to the price charged, $p,$ by the equation $p(x)=9-0.03x,0\le x\le 300.$
In this case, the revenue in dollars obtained by selling $x$ barbeque dinners is given by

$R(x)=xp(x)=x(9-0.03x)=−0.03{x}^{2}+9x\;\text{for}\;0\le x\le 300.$  {eq:fs-id1169739212801}

Use the marginal revenue function to estimate the revenue obtained from selling the 101st barbeque dinner. Compare this to the actual revenue obtained from the sale of this dinner.
SOLUTION:
First, find the marginal revenue function: $MR(x)={R}^{'}(x)=−0.06x+9.$
Next, use ${R}^{'}(100)$ to approximate $R(101)-R(100),$ the revenue obtained from the sale of the 101st dinner. Since ${R}^{'}(100)=3,$ the revenue obtained from the sale of the 101st dinner is approximately $3.
The actual revenue obtained from the sale of the 101st dinner is

$R(101)-R(100)=602.97-600=2.97,\text{or}\;$2.97.$  {eq:fs-id1169737285423}

The marginal revenue is a fairly good estimate in this case and has the advantage of being easy to compute.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739054965} type= 
PROBLEM:
Suppose that the profit obtained from the sale of $x$ fish-fry dinners is given by $P(x)=−0.03{x}^{2}+8x-50.$ Use the marginal profit function to estimate the profit from the sale of the 101st fish-fry dinner.
SOLUTION:
$2
COMMENTARY: Hint
Use ${P}^{'}(100)$ to approximate $P(101)-P(100).$
:::
:::

## Key Concepts {section:key-concepts}
- Using $f(a+h)\approx f(a)+{f}^{'}(a)h,$ it is possible to estimate $f(a+h)$ given ${f}^{'}(a)$ and $f(a).$
- The rate of change of position is velocity, and the rate of change of velocity is acceleration. Speed is the absolute value, or magnitude, of velocity.
- The population growth rate and the present population can be used to predict the size of a future population.
- Marginal cost, marginal revenue, and marginal profit functions can be used to predict, respectively, the cost of producing one more item, the revenue obtained by selling one more item, and the profit obtained by producing and selling one more item.

##  {section:section-exercises}
For the following exercises, the given functions represent the position of a particle traveling along a horizontal line; $t\ge 0$.
a. Find the velocity and acceleration functions.
b. Determine the time intervals when the object is slowing down or speeding up.

:::exercise {fs-id1169739303989} type= 
PROBLEM:
$s(t)=2{t}^{3}-3{t}^{2}-12t+8$
:::

:::exercise {fs-id1169739301136} type= 
PROBLEM:
$s(t)=2{t}^{3}-15{t}^{2}+36t-10$
SOLUTION:
a. $v(t)=6{t}^{2}-30t+36,a(t)=12t-30;$ b. speeds up $(2,2.5){\displaystyle \cup}(3,\infty ),$ slows down $(0,2){\displaystyle \cup}(2.5,3)$
:::

:::exercise {fs-id1169739286492} type= 
PROBLEM:
$s(t)=\frac{t}{1+{t}^{2}}$
:::

:::exercise {fs-id1169736609267} type= 
PROBLEM:
A model rocket is fired vertically upward from the ground. The distance $s$ in feet that the rocket travels from the ground after $t$ seconds is given by $s(t)=−16{t}^{2}+560t.$
a. Find the velocity of the rocket 3 seconds after being fired.
b. Find the acceleration of the rocket 3 seconds after being fired.
SOLUTION:
a. $464{\;\text{ft/s}}^{2}$ b. $−32{\;\text{ft/s}}^{2}$
:::

:::exercise {fs-id1169739253579} type= 
PROBLEM:
A ball is thrown downward with a speed of 8 ft/s from the top of a 64-foot-tall building. After *t* seconds, its height above the ground is given by $s(t)=−16{t}^{2}-8t+64.$
a. Determine how long it takes for the ball to hit the ground.
b. Determine the velocity of the ball when it hits the ground.
:::

:::exercise {fs-id1169739274630} type= 
PROBLEM:
The position function $s(t)={t}^{2}-3t-4$ represents the position of the back of a car backing out of a driveway and then driving in a straight line, where $s$ is in feet and $t$ is in seconds. In this case, $s(t)=0$ represents the time at which the back of the car is at the garage door, so $s(0)=−4$ is the starting position of the car, 4 feet inside the garage.
a. Determine the velocity of the car when $s(t)=0.$
b. Determine the velocity of the car when $s(t)=14.$
SOLUTION:
a. 5 ft/s b. 9 ft/s
:::

:::exercise {fs-id1169739188624} type= 
PROBLEM:
The position of a hummingbird flying along a straight line in $t$ seconds is given by $s(t)=3{t}^{3}-7t$ meters.
a. Determine the velocity of the bird at $t=1$ sec.
b. Determine the acceleration of the bird at $t=1$ sec.
c. Determine the acceleration of the bird when the velocity equals 0.
:::

:::exercise {fs-id1169739300061} type= 
PROBLEM:
A potato is launched vertically upward with an initial velocity of 100 ft/s from a potato gun at the top of an 85-foot-tall building. The position of the potato relative to the ground after $t$ seconds is given by $s(t)=−16{t}^{2}+100t+85.$
a. Find the velocity of the potato after $0.5\;\text{s}$ and $5.75\;\text{s}.$
b. Find the speed of the potato at 0.5 s and 5.75 s.
c. Determine when the potato reaches its maximum height.
d. Find the acceleration of the potato at 0.5 s and 1.5 s.
e. Determine how long the potato is in the air.
f. Determine the velocity of the potato upon hitting the ground.
SOLUTION:
a. 84 ft/s, −84 ft/s b. 84 ft/s c. $\frac{25}{8}\;\text{s}$ d. $−32{\;\text{ft/s}}^{2}$ in both cases e. $\frac{1}{8}(25+\sqrt{965})\;\text{s}$ f. $−4\sqrt{965}\;\text{ft/s}$
:::

:::exercise {fs-id1169736656942} type= 
PROBLEM:
The position function $s(t)={t}^{3}-8t$ gives the position in miles of a freight train where east is the positive direction and $t$ is measured in hours.
a. Determine the direction the train is traveling when $s(t)=0.$
b. Determine the direction the train is traveling when $a(t)=0.$
c. Determine the time intervals when the train is slowing down or speeding up.
:::

:::exercise {fs-id1169739191157} type= 
PROBLEM:
The following graph shows the position $y=s(t)$ of an object moving along a straight line.

> IMAGE {img:fs-id1169739273995} src=../../media/CNX_Calc_Figure_03_04_201.jpg
> alt: On the Cartesian coordinate plane, a function is graphed that is part of a parabola from the origin to (2, 2) with maximum at (1.5, 2.25). Then the function is constant until (5, 2), at which points becomes a parabola again, decreasing to a minimum at (6, 1) and then increasing to (7, 2).

a. Use the graph of the position function to determine the time intervals when the velocity is positive, negative, or zero.
b. Sketch the graph of the velocity function.
c. Use the graph of the velocity function to determine the time intervals when the acceleration is positive, negative, or zero.
d. Determine the time intervals when the object is speeding up or slowing down.
SOLUTION:
a. Velocity is positive on $(0,1.5){\displaystyle \cup}(6,7),$ negative on $(1.5,2){\displaystyle \cup}(5,6),$ and zero on $(2,5).$ b.

> IMAGE {img:fs-id1169739188467} src=../../media/CNX_Calc_Figure_03_04_202.jpg
> alt: The graph is a straight line from (0, 2) to (2, −1), then is discontinuous with a straight line from (2, 0) to (5, 0), and then is discontinuous with a straight line from (5, −4) to (7, 4).

c. Acceleration is positive on $(5,7),$ negative on $(0,2),$ and zero on $(2,5).$ d. The object is speeding up on $(6,7){\displaystyle \cup}(1.5,2)$ and slowing down on $(0,1.5){\displaystyle \cup}(5,6).$
:::

:::exercise {fs-id1169739270636} type= 
PROBLEM:
The cost function, in dollars, of a company that manufactures food processors is given by $C(x)=200+\frac{7}{x}+\frac{{x}^{2}}{7},$ where $x$ is the number of food processors manufactured.
a. Find the marginal cost function.
b. Use the marginal cost function to estimate the cost of manufacturing the thirteenth food processor.
c. Find the actual cost of manufacturing the thirteenth food processor.
:::

:::exercise {fs-id1169736659653} type= 
PROBLEM:
The price $p$ (in dollars) and the demand $x$ for a certain digital clock radio is given by the price–demand function $p=10-0.001x.$
a. Find the revenue function $R(x).$
b. Find the marginal revenue function.
c. Find the marginal revenue at $x=2000$ and $5000.$
SOLUTION:
a. $R(x)=10x-0.001{x}^{2}$ b. ${R}^{'}(x)=10-0.002x$ c. $6 per item, $0 per item
:::

:::exercise {fs-id1169736656504} type= 
PROBLEM:
**[T]** A profit is earned when revenue exceeds cost. Suppose the profit function for a skateboard manufacturer is given by $P(x)=30x-0.3{x}^{2}-250,$ where $x$ is the number of skateboards sold.
a. Find the exact profit from the sale of the thirtieth skateboard.
b. Find the marginal profit function and use it to estimate the profit from the sale of the thirtieth skateboard.
:::

:::exercise {fs-id1169739301640} type= 
PROBLEM:
**[T]** In general, the profit function is the difference between the revenue and cost functions: $P(x)=R(x)-C(x).$
Suppose the price-demand and cost functions for the production of cordless drills is given respectively by $p=143-0.03x$ and $C(x)=75,000+65x,$ where $x$ is the number of cordless drills that are sold at a price of $p$ dollars per drill and $C(x)$ is the cost of producing $x$ cordless drills.
a. Find the marginal cost function.
b. Find the revenue and marginal revenue functions.
c. Find ${R}^{'}(1000)$ and ${R}^{'}(4000).$ Interpret the results.
d. Find the profit and marginal profit functions.
e. Find ${P}^{'}(1000)$ and ${P}^{'}(4000).$ Interpret the results.
SOLUTION:
a. ${C}^{'}(x)=65$ b. $R(x)=143x-0.03{x}^{2},{R}^{'}(x)=143-0.06x$ c. $83,−97.$ At a production level of 1000 cordless drills, revenue is increasing at a rate of $83 per drill; at a production level of 4000 cordless drills, revenue is decreasing at a rate of $97 per drill. d. $P(x)=−0.03{x}^{2}+78x-75000,{P}^{'}(x)=−0.06x+78$ e. $18,−162.$ At a production level of 1000 cordless drills, profit is increasing at a rate of $18 per drill; at a production level of 4000 cordless drills, profit is decreasing at a rate of $162 per drill.
:::

:::exercise {fs-id1169739274864} type= 
PROBLEM:
A small town in Ohio commissioned an actuarial firm to conduct a study that modeled the rate of change of the town’s population. The study found that the town’s population (measured in thousands of people) can be modeled by the function $P(t)=-\frac{1}{3}{t}^{3}+64t+3000,$ where $t$ is measured in years.
a. Find the rate of change function ${P}^{'}(t)$ of the population function.
b. Find ${P}^{'}(1),{P}^{'}(2),{P}^{'}(3),$ and ${P}^{'}(4).$ Interpret what the results mean for the town.
c. Find ${P}^{''}(1),{P}^{''}(2),{P}^{''}(3),$ and ${P}^{''}(4).$ Interpret what the results mean for the town’s population.
:::

:::exercise {fs-id1169736662792} type= 
PROBLEM:
**[T]** A culture of bacteria grows in number according to the function $N(t)=3000(1+\frac{4t}{{t}^{2}+100}),$ where $t$ is measured in hours.
a. Find the rate of change of the number of bacteria.
b. Find ${N}^{'}(0),{N}^{'}(10),{N}^{'}(20),$ and ${N}^{'}(30).$
c. Interpret the results in (b).
d. Find ${N}^{''}(0),{N}^{''}(10),{N}^{''}(20),$ and ${N}^{''}(30).$ Interpret what the answers imply about the bacteria population growth.
SOLUTION:
a. ${N}^{'}(t)=3000(\frac{−4{t}^{2}+400}{{({t}^{2}+100)}^{2}})$ b. $120,0,−14.4,−9.6$ c. The bacteria population increases from time 0 to 10 hours; afterwards, the bacteria population decreases. d. $0,−6,0.384,0.432.$ The rate at which the bacteria is increasing is decreasing during the first 10 hours. Afterwards, the bacteria population is decreasing at a decreasing rate.
:::

:::exercise {fs-id1169736610051} type= 
PROBLEM:
The centripetal force of an object of mass $m$ is given by $F(r)=\frac{m{v}^{2}}{r},$ where $v$ is the speed of rotation and $r$ is the distance from the center of rotation.
a. Find the rate of change of centripetal force with respect to the distance from the center of rotation.
b. Find the rate of change of centripetal force of an object with mass 1000 kilograms, velocity of 13.89 m/s, and a distance from the center of rotation of 200 meters.
:::
The following questions concern the population (in millions) of London by decade in the 19th century, which is listed in the following table.

> TABLE {tab:fs-id1169736656020} cols=2
> title: Population of London
> caption: Source: http://en.wikipedia.org/wiki/Demographics_of_London.
> summary: This table has 11 rows and two columns. The first row is a header row and it labels each column. The first column header is Years since 1800 and the second column is Population (millions). Under the first column are the values 1, 11, 21, 31, 41, 51, 61, 71, 81, and 91. Under the second column are the values 0.8795, 1.040, 1.264, 1.516, 1.661, 2.000, 2.634, 3.272, 3.911, and 4.422.

| Years since 1800 | Population (millions) |
| --- | --- |
| 1 | 0.8795 |
| 11 | 1.040 |
| 21 | 1.264 |
| 31 | 1.516 |
| 41 | 1.661 |
| 51 | 2.000 |
| 61 | 2.634 |
| 71 | 3.272 |
| 81 | 3.911 |
| 91 | 4.422 |

:::exercise {fs-id1169739270171} type= 
PROBLEM:
**[T]**
a. Using a calculator or a computer program, find the best-fit linear function to measure the population.
b. Find the derivative of the equation in a. and explain its physical meaning.
c. Find the second derivative of the equation and explain its physical meaning.
SOLUTION:
a. $P(t)=0.03983+0.4280$ b. ${P}^{'}(t)=0.03983.$ The population is increasing. c. ${P}^{''}(t)=0.$ The rate at which the population is increasing is constant.
:::

:::exercise {fs-id1169739343732} type= 
PROBLEM:
**[T]**
a. Using a calculator or a computer program, find the best-fit quadratic curve through the data.
b. Find the derivative of the equation and explain its physical meaning.
c. Find the second derivative of the equation and explain its physical meaning.
:::
For the following exercises, consider an astronaut on a large planet in another galaxy. To learn more about the composition of this planet, the astronaut drops an electronic sensor into a deep trench. The sensor transmits its vertical position every second in relation to the astronaut’s position. The summary of the falling sensor data is displayed in the following table.

> TABLE {tab:fs-id1169739251296} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is Time after dropping (s) and the second column is Position (m). Under the first column are the values 0, 1, 2, 3, 4, and 5. Under the second column are the values 0, −1, −2, −5, −7, and −14.

| Time after dropping (s) | Position (m) |
| --- | --- |
| 0 | 0 |
| 1 | −1 |
| 2 | −2 |
| 3 | −5 |
| 4 | −7 |
| 5 | −14 |

:::exercise {fs-id1169736654815} type= 
PROBLEM:
**[T]**
a. Using a calculator or computer program, find the best-fit quadratic curve to the data.
b. Find the derivative of the position function and explain its physical meaning.
c. Find the second derivative of the position function and explain its physical meaning.
SOLUTION:
a. $p(t)=−0.6071{x}^{2}+0.4357x-0.3571$ b. ${p}^{'}(t)=−1.214x+0.4357.$ This is the velocity of the sensor. c. ${p}^{''}(t)=−1.214.$ This is the acceleration of the sensor; it is a constant acceleration downward.
:::

:::exercise {fs-id1169739269446} type= 
PROBLEM:
**[T]**
a. Using a calculator or computer program, find the best-fit cubic curve to the data.
b. Find the derivative of the position function and explain its physical meaning.
c. Find the second derivative of the position function and explain its physical meaning.
d. Using the result from c. explain why a cubic function is not a good choice for this problem.
:::
The following problems deal with the Holling type I, II, and III equations. These equations describe the ecological event of growth of a predator population given the amount of prey available for consumption.

:::exercise {fs-id1169739336094} type= 
PROBLEM:
**[T]** The {index:Holling type I equation} is described by $f(x)=ax,$ where $x$ is the amount of prey available and $a>0$ is the rate at which the predator meets the prey for consumption.
a. Graph the Holling type I equation, given $a=0.5.$
b. Determine the first derivative of the Holling type I equation and explain physically what the derivative implies.
c. Determine the second derivative of the Holling type I equation and explain physically what the derivative implies.
d. Using the interpretations from b. and c. explain why the Holling type I equation may not be realistic.
SOLUTION:
a.

> IMAGE {img:fs-id1169736609955} src=../../media/CNX_Calc_Figure_03_04_203.jpg
> alt: The graph is a straight line drawn through the origin with slope 1/2.

b. ${f}^{'}(x)=a.$ The more increase in prey, the more growth for predators. c. ${f}^{''}(x)=0.$ As the amount of prey increases, the rate at which the predator population growth increases is constant. d. This equation assumes that if there is more prey, the predator is able to increase consumption linearly. This assumption is unphysical because we would expect there to be some saturation point at which there is too much prey for the predator to consume adequately.
:::

:::exercise {fs-id1169739190647} type= 
PROBLEM:
**[T]** The Holling type II equation is described by $f(x)=\frac{ax}{n+x},$ where $x$ is the amount of prey available and $a>0$ is the maximum consumption rate of the predator.
a. Graph the Holling type II equation given $a=0.5$ and $n=5.$ What are the differences between the Holling type I and II equations?
b. Take the first derivative of the Holling type II equation and interpret the physical meaning of the derivative.
c. Show that $f(n)=\frac{1}{2}a$ and interpret the meaning of the parameter $n.$
d. Find and interpret the meaning of the second derivative. What makes the Holling type II function more realistic than the Holling type I function?
:::

:::exercise {fs-id1169739299237} type= 
PROBLEM:
**[T]** The Holling type III equation is described by $f(x)=\frac{a{x}^{2}}{{n}^{2}+{x}^{2}},$ where $x$ is the amount of prey available and $a>0$ is the maximum consumption rate of the predator.
a. Graph the Holling type III equation given $a=0.5$ and $n=5.$ What are the differences between the Holling type II and III equations?
b. Take the first derivative of the Holling type III equation and interpret the physical meaning of the derivative.
c. Find and interpret the meaning of the second derivative (it may help to graph the second derivative).
d. What additional ecological phenomena does the Holling type III function describe compared with the Holling type II function?
SOLUTION:
a.

> IMAGE {img:fs-id1169736592164} src=../../media/CNX_Calc_Figure_03_04_205.jpg
> alt: The graph increases from the origin quickly at first and then slowly to (10, 0.4).

b. ${f}^{'}(x)=\frac{2ax{n}^{2}}{{({n}^{2}+{x}^{2})}^{2}}.$ When the amount of prey increases, the predator growth increases. c. ${f}^{''}(x)=\frac{2a{n}^{2}({n}^{2}-3{x}^{2})}{{({n}^{2}+{x}^{2})}^{3}}.$ When the amount of prey is extremely small, the rate at which predator growth is increasing is increasing, but when the amount of prey reaches above a certain threshold, the rate at which predator growth is increasing begins to decrease. d. At lower levels of prey, the prey is more easily able to avoid detection by the predator, so fewer prey individuals are consumed, resulting in less predator growth.
:::

:::exercise {fs-id1169736617625} type= 
PROBLEM:
**[T]** The populations of the snowshoe hare (in thousands) and the lynx (in hundreds) collected over 7 years from 1937 to 1943 are shown in the following table. The snowshoe hare is the primary prey of the lynx.

> TABLE {tab:fs-id1169736617637} cols=2
> title: Snowshoe Hare and Lynx Populations
> caption: Source: http://www.biotopics.co.uk/newgcse/predatorprey.html.
> summary: This table has five rows and two columns. The first row is a header row and it labels each column. The first column header is Population of snowshoe hare (thousands) and the second column is Population of lynx (hundreds). Under the first column are the values 20, 55, 65, and 95. Under the second column are the values 10, 15, 55, and 60.

| Population of snowshoe hare (thousands) | Population of lynx (hundreds) |
| --- | --- |
| 20 | 10 |
| 55 | 15 |
| 65 | 55 |
| 95 | 60 |

a. Graph the data points and determine which Holling-type function fits the data best.
b. Using the meanings of the parameters $a$ and $n,$ determine values for those parameters by examining a graph of the data. Recall that $n$ measures what prey value results in the half-maximum of the predator value.
c. Plot the resulting Holling-type I, II, and III functions on top of the data. Was the result from part a. correct?
:::

## Glossary
- {def} **acceleration**: is the rate of change of the velocity, that is, the derivative of velocity
- {def} **amount of change**: the amount of a function $f(x)$ over an interval $[x,x+h]$ is $f(x+h)-f(x)$
- {def} **average rate of change**: is a function $f(x)$ over an interval $[x,x+h]$ is $\frac{f(a+h)-f(a)}{h}$
- {def} **marginal cost**: is the derivative of the cost function, or the approximate cost of producing one more item
- {def} **marginal revenue**: is the derivative of the revenue function, or the approximate revenue obtained by selling one more item
- {def} **marginal profit**: is the derivative of the profit function, or the approximate profit obtained by producing and selling one more item
- {def} **population growth rate**: is the derivative of the population with respect to time
- {def} **speed**: is the absolute value of velocity, that is, $|v(t)|$ is the speed of an object at time $t$ whose velocity is given by $v(t)$

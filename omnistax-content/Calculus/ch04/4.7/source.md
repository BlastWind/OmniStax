# Applied Optimization Problems

## Learning Objectives {section:learning-objectives}
- Set up and solve optimization problems in several applied fields.

One common application of calculus is calculating the minimum or maximum value of a function. For example, companies often want to minimize production costs or maximize revenue. In manufacturing, it is often desirable to minimize the amount of material used to package a product with a certain volume. In this section, we show how to set up these types of minimization and maximization problems and solve them by using the tools developed in this chapter.

## Solving Optimization Problems over a Closed, Bounded Interval
The basic idea of the {term:optimization problems} that follow is the same. We have a particular quantity that we are interested in maximizing or minimizing. However, we also have some auxiliary condition that needs to be satisfied. For example, in [ref:fs-id1165043431956], we are interested in maximizing the area of a rectangular garden. Certainly, if we keep making the side lengths of the garden larger, the area will continue to become larger. However, what if we have some restriction on how much fencing we can use for the perimeter? In this case, we cannot make the garden as large as we like. Let’s look at how we can maximize the area of a rectangle subject to some constraint on the perimeter.

:::example {ex:fs-id1165043431956} Maximizing the Area of a Garden

:::exercise {fs-id1165043092414} type= 
PROBLEM:
A rectangular garden is to be constructed using a rock wall as one side of the garden and wire fencing for the other three sides ([ref:CNX_Calc_Figure_04_07_001]). Given $100$ ft of wire fencing, determine the dimensions that would create a garden of maximum area. What is the maximum area?

> FIGURE {fig:CNX_Calc_Figure_04_07_001} src=../../media/CNX_Calc_Figure_04_07_001.jpg
> alt: A drawing of a garden has x and y written on the vertical and horizontal sides, respectively. There is a rock wall running along the entire bottom horizontal length of the drawing.
> caption: We want to determine the measurements $x$ and $y$ that will create a garden with a maximum area using $100$ ft of fencing.

SOLUTION:
Let $x$ denote the length of the side of the garden perpendicular to the rock wall and $y$ denote the length of the side parallel to the rock wall. Then the area of the garden is

$A=x\cdot y.$  {eq:fs-id1165042515463}

We want to find the maximum possible area subject to the constraint that the total fencing is $100\;\text{ft}.$ From [ref:CNX_Calc_Figure_04_07_001], the total amount of fencing used will be $2x+y.$ Therefore, the constraint equation is

$2x+y=100.$  {eq:fs-id1165043249986}

Solving this equation for $y,$ we have $y=100-2x.$ Thus, we can write the area as

$A(x)=x\cdot (100-2x)=100x-2{x}^{2}.$  {eq:fs-id1165043281405}

Before trying to maximize the area function $A(x)=100x-2{x}^{2},$ we need to determine the domain under consideration. To construct a rectangular garden, we certainly need the lengths of both sides to be positive. Therefore, we need $x>0$ and $y>0.$ Since $y=100-2x,$ if $y>0,$ then $x<50.$ Therefore, we are trying to determine the maximum value of $A(x)$ for $x$ over the open interval $(0,50).$ We do not know that a function necessarily has a maximum value over an open interval. However, we do know that a continuous function has an absolute maximum (and absolute minimum) over a closed interval. Therefore, let’s consider the function $A(x)=100x-2{x}^{2}$ over the closed interval $[0,50].$ If the maximum value occurs at an interior point, then we have found the value $x$ in the open interval $(0,50)$ that maximizes the area of the garden. Therefore, we consider the following problem:
Maximize $A(x)=100x-2{x}^{2}$ over the interval $[0,50].$
As mentioned earlier, since $A$ is a continuous function on a closed, bounded interval, by the extreme value theorem, it has a maximum and a minimum. These extreme values occur either at endpoints or critical points. At the endpoints, $A(x)=0.$ Since the area is positive for all $x$ in the open interval $(0,50),$ the maximum must occur at a critical point. Differentiating the function $A(x),$ we obtain

${A}^{'}(x)=100-4x.$  {eq:fs-id1165043380052}

Therefore, the only critical point is $x=25$ ([ref:CNX_Calc_Figure_04_07_002]). We conclude that the maximum area must occur when $x=25.$ Then we have $y=100-2x=100-2(25)=50.$ To maximize the area of the garden, let $x=25$ ft and $y=50\;\text{ft}.$ The area of this garden is $1250{\;\text{ft}}^{2}.$

> FIGURE {fig:CNX_Calc_Figure_04_07_002} src=../../media/CNX_Calc_Figure_04_07_002.jpg
> alt: The function A(x) = 100x – 2x is graphed. At its maximum there is an intersection of two dashed lines and text that reads “Maximum area is 1250 square feet when x = 25 feet.”
> caption: To maximize the area of the garden, we need to find the maximum value of the function $A(x)=100x-2{x}^{2}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042334091} type= 
PROBLEM:
Determine the maximum area if we want to make the same rectangular garden as in [ref:CNX_Calc_Figure_04_07_002], but we have $200$ ft of fencing.
SOLUTION:
The maximum area is $5000{\;\text{ft}}^{2}.$
COMMENTARY: Hint
We need to maximize the function $A(x)=200x-2{x}^{2}$ over the interval $[0,100].$
:::
:::
Now let’s look at a general strategy for solving optimization problems similar to [ref:fs-id1165043431956].

:::note [problem-solving] Solving Optimization Problems
1. Introduce all variables. If applicable, draw a figure and label all variables.
2. Determine which quantity is to be maximized or minimized, and for what range of values of the other variables (if this can be determined at this time).
3. Write a formula for the quantity to be maximized or minimized in terms of the variables. This formula may involve more than one variable.
4. Write any equations relating the independent variables in the formula from step $3.$ Use these equations to write the quantity to be maximized or minimized as a function of one variable.
5. Identify the domain of consideration for the function in step $4$ based on the physical problem to be solved.
6. Locate the maximum or minimum value of the function from step $4.$ This step typically involves looking for critical points and evaluating a function at endpoints.
:::
Now let’s apply this strategy to maximize the volume of an open-top box given a constraint on the amount of material to be used.

:::example {ex:fs-id1165043024669} Maximizing the Volume of a Box

:::exercise {fs-id1165042515877} type= 
PROBLEM:
An open-top box is to be made from a $24$ in. by $36$ in. piece of cardboard by removing a square from each corner of the box and folding up the flaps on each side. What size square should be cut out of each corner to get a box with the maximum volume?
SOLUTION:
Step 1: Let $x$ be the side length of the square to be removed from each corner ([ref:CNX_Calc_Figure_04_07_003]). Then, the remaining four flaps can be folded up to form an open-top box. Let $V$ be the volume of the resulting box.

> FIGURE {fig:CNX_Calc_Figure_04_07_003} src=../../media/CNX_Calc_Figure_04_07_003.jpg
> alt: There are two figures for this figure. The first one is a rectangle with sides 24 in and 36 in, with each corner having a square of side length x taken out of it. In the second picture, there is a box with side lengths x in, 24 – 2x in, and 36 – 2x in.
> caption: A square with side length $x$ inches is removed from each corner of the piece of cardboard. The remaining flaps are folded to form an open-top box.

Step 2: We are trying to maximize the volume of a box. Therefore, the problem is to maximize $V.$
Step 3: As mentioned in step $2,$ we are trying to maximize the volume of a box. The volume of a box is $V=L\cdot W\cdot H,$ where $L,W,\;\text{and}\;H$ are the length, width, and height, respectively.
Step 4: From [ref:CNX_Calc_Figure_04_07_003], we see that the height of the box is $x$ inches, the length is $36-2x$ inches, and the width is $24-2x$ inches. Therefore, the volume of the box is

$V(x)=(36-2x)(24-2x)x=4{x}^{3}-120{x}^{2}+864x.$  {eq:fs-id1165042645725}

Step 5: To determine the domain of consideration, let’s examine [ref:CNX_Calc_Figure_04_07_003]. Certainly, we need $x>0.$ Furthermore, the side length of the square cannot be greater than or equal to half the length of the shorter side, $24$ in.; otherwise, one of the flaps would be completely cut off. Therefore, we are trying to determine whether there is a maximum volume of the box for $x$ over the open interval $(0,12).$ Since $V$ is a continuous function over the closed interval $[0,12],$ we know $V$ will have an absolute maximum over the closed interval. Therefore, we consider $V$ over the closed interval $[0,12]$ and check whether the absolute maximum occurs at an interior point.
Step 6: Since $V(x)$ is a continuous function over the closed, bounded interval $[0,12],$ $V$ must have an absolute maximum (and an absolute minimum). Since $V(x)=0$ at the endpoints and $V(x)>0$ for $0<x<12,$ the maximum must occur at a critical point. The derivative is

${V}^{'}(x)=12{x}^{2}-240x+864.$  {eq:fs-id1165043333862}

To find the critical points, we need to solve the equation

$12{x}^{2}-240x+864=0.$  {eq:fs-id1165042946835}

Dividing both sides of this equation by $12,$ the problem simplifies to solving the equation

${x}^{2}-20x+72=0.$  {eq:fs-id1165042982075}

Using the quadratic formula, we find that the critical points are

$x=\frac{20\text{±}\sqrt{{(−20)}^{2}-4(1)(72)}}{2}=\frac{20\text{±}\sqrt{112}}{2}=\frac{20\text{±}4\sqrt{7}}{2}=10\text{±}2\sqrt{7}.$  {eq:fs-id1165042367652}

Since $10+2\sqrt{7}$ is not in the domain of consideration, the only critical point we need to consider is $10-2\sqrt{7}.$ Therefore, the volume is maximized if we let $x=10-2\sqrt{7}\;\text{in}.$ The maximum volume is $V(10-2\sqrt{7})=640+448\sqrt{7}\approx 1825\;\text{in}{.}^{3}$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_07_004} src=../../media/CNX_Calc_Figure_04_07_004.jpg
> alt: The function V(x) = 4x3 – 120x2 + 864x is graphed. At its maximum there is an intersection of two dashed lines and text that reads “Maximum volume is approximately 1825 cubic inches when x ≈ 4.7 inches.”
> caption: Maximizing the volume of the box leads to finding the maximum value of a cubic polynomial.

:::
:::

:::note [media-2] 
Watch a [video](http://www.openstax.org/l/20_boxvolume) about optimizing the volume of a box.
:::

:::note [checkpoint] 

:::exercise {fs-id1165042556203} type= 
PROBLEM:
Suppose the dimensions of the cardboard in [ref:fs-id1165043024669] are 20 in. by 30 in. Let $x$ be the side length of each square and write the volume of the open-top box as a function of $x.$ Determine the domain of consideration for $x.$
SOLUTION:
$V(x)=x(20-2x)(30-2x).$ The domain is $[0,10].$
COMMENTARY: Hint
The volume of the box is $L\cdot W\cdot H.$
:::
:::

:::example {ex:fs-id1165042350080} Minimizing Travel Time

:::exercise {fs-id1165043392360} type= 
PROBLEM:
An island is $2\;\text{mi}$ due north of its closest point along a straight shoreline. A visitor is staying at a cabin on the shore that is $6\;\text{mi}$ west of that point. The visitor is planning to go from the cabin to the island. Suppose the visitor runs at a rate of $8\;\text{mph}$ and swims at a rate of $3\;\text{mph}.$ How far should the visitor run before swimming to minimize the time it takes to reach the island?
SOLUTION:
Step 1: Let $x$ be the distance running and let $y$ be the distance swimming ([ref:CNX_Calc_Figure_04_07_005]). Let $T$ be the time it takes to get from the cabin to the island.

> FIGURE {fig:CNX_Calc_Figure_04_07_005} src=../../media/CNX_Calc_Figure_04_07_011.jpg
> alt: The cabin is x miles from the shore. From that point on the shore, the island is y miles away. If you were to continue the line from the cabin to the shore (the x miles one) and if you were to draw a line from the island parallel to the shore, then the lines would extend 2 miles from the island and 6 miles from the cabin before intersecting.
> caption: How can we choose $x$ and $y$ to minimize the travel time from the cabin to the island?

Step 2: The problem is to minimize $T.$
Step 3: To find the time spent traveling from the cabin to the island, add the time spent running and the time spent swimming. Since Distance $=$ Rate $\;\times \;$ Time $(D=R\;\times \;T),$ the time spent running is

${T}_{\text{running}}=\frac{{D}_{\text{running}}}{{R}_{\text{running}}}=\frac{x}{8},$  {eq:fs-id1165043431452}

and the time spent swimming is

${T}_{\text{swimming}}=\frac{{D}_{\text{swimming}}}{{R}_{\text{swimming}}}=\frac{y}{3}.$  {eq:fs-id1165042369650}

Therefore, the total time spent traveling is

$T=\frac{x}{8}+\frac{y}{3}.$  {eq:fs-id1165043433402}

Step 4: From [ref:CNX_Calc_Figure_04_07_005], the line segment of $y$ miles forms the hypotenuse of a right triangle with legs of length $2\;\text{mi}$ and $6-x\;\text{mi}.$ Therefore, by the Pythagorean theorem, ${2}^{2}+{(6-x)}^{2}={y}^{2},$ and we obtain $y=\sqrt{{(6-x)}^{2}+4}.$ Thus, the total time spent traveling is given by the function

$T(x)=\frac{x}{8}+\frac{\sqrt{{(6-x)}^{2}+4}}{3}.$  {eq:fs-id1165043430018}

Step 5: From [ref:CNX_Calc_Figure_04_07_005], we see that $0\le x\le 6.$ Therefore, $[0,6]$ is the domain of consideration.
Step 6: Since $T(x)$ is a continuous function over a closed, bounded interval, it has a maximum and a minimum. Let’s begin by looking for any critical points of $T$ over the interval $[0,6].$ The derivative is

${T}^{'}(x)=\frac{1}{8}-\frac{1}{2}\;\frac{{[{(6-x)}^{2}+4]}^{−1\text{/}2}}{3}\cdot 2(6-x)=\frac{1}{8}-\frac{(6-x)}{3\sqrt{{(6-x)}^{2}+4}}.$  {eq:fs-id1165043353795}

If ${T}^{'}(x)=0,$ then

$\frac{1}{8}=\frac{6-x}{3\sqrt{{(6-x)}^{2}+4}}.$  {eq:fs-id1165042705986}

Therefore,

$$ 3\sqrt{{(6-x)}^{2}+4}=8(6-x). $$  {eq:fs-id1165042343282}

Squaring both sides of this equation, we see that if $x$ satisfies this equation, then $x$ must satisfy

$9[{(6-x)}^{2}+4]=64{(6-x)}^{2},$  {eq:fs-id1165043103774}

which implies

$55{(6-x)}^{2}=36.$  {eq:fs-id1165043285288}

We conclude that if $x$ is a critical point, then $x$ satisfies

${(x-6)}^{2}=\frac{36}{55}.$  {eq:fs-id1165042923510}

Therefore, the possibilities for critical points are

$x=6\text{±}\frac{6}{\sqrt{55}}.$  {eq:fs-id1165042350053}

Since $x=6+6\text{/}\sqrt{55}$ is not in the domain, it is not a possibility for a critical point. On the other hand, $x=6-6\text{/}\sqrt{55}$ is in the domain. Since we squared both sides of [ref:fs-id1165042343282] to arrive at the possible critical points, it remains to verify that $x=6-6\text{/}\sqrt{55}$ satisfies [ref:fs-id1165042343282]. Since $x=6-6\text{/}\sqrt{55}$ does satisfy that equation, we conclude that $x=6-6\text{/}\sqrt{55}$ is a critical point, and it is the only one. To justify that the time is minimized for this value of $x,$ we just need to check the values of $T(x)$ at the endpoints $x=0$ and $x=6,$ and compare them with the value of $T(x)$ at the critical point $x=6-6\text{/}\sqrt{55}.$ We find that $T(0)\approx 2.108\;\text{h}$ and $T(6)\approx 1.417\;\text{h,}$ whereas $T(6-6\text{/}\sqrt{55})\approx 1.368\;\text{h}.$ Therefore, we conclude that $T$ has a local minimum at $x\approx 5.19$ mi.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043107418} type= 
PROBLEM:
Suppose the island is $1$ mi from shore, and the distance from the cabin to the point on the shore closest to the island is $15\;\text{mi}.$ Suppose a visitor swims at the rate of $2.5\;\text{mph}$ and runs at a rate of $6\;\text{mph}.$ Let $x$ denote the distance the visitor will run before swimming, and find a function for the time it takes the visitor to get from the cabin to the island.
SOLUTION:
$T(x)=\frac{x}{6}+\frac{\sqrt{{(15-x)}^{2}+1}}{2.5}$
COMMENTARY: Hint
The time $T={T}_{\text{running}}+{T}_{\text{swimming}}.$
:::
:::
In business, companies are interested in {index:maximizing revenue}. In the following example, we consider a scenario in which a company has collected data on how many cars it is able to lease, depending on the price it charges its customers to rent a car. Let’s use these data to determine the price the company should charge to maximize the amount of money it brings in.

:::example {ex:fs-id1165043353574} Maximizing Revenue

:::exercise {fs-id1165043113003} type= 
PROBLEM:
Owners of a car rental company have determined that if they charge customers $p$ dollars per day to rent a car, where $50\le p\le 200,$ the number of cars $n$ they rent per day can be modeled by the linear function $n(p)=1000-5p.$ If they charge $\text{\$}50$ per day or less, they will rent all their cars. If they charge $\text{\$}200$ per day or more, they will not rent any cars. Assuming the owners plan to charge customers between $50 per day and $\text{\$}200$ per day to rent a car, how much should they charge to maximize their revenue?
SOLUTION:
Step 1: Let $p$ be the price charged per car per day and let $n$ be the number of cars rented per day. Let $R$ be the revenue per day.
Step 2: The problem is to maximize $R.$
Step 3: The revenue (per day) is equal to the number of cars rented per day times the price charged per car per day—that is, $R=n\;\times \;p.$
Step 4: Since the number of cars rented per day is modeled by the linear function $n(p)=1000-5p,$ the revenue $R$ can be represented by the function

$R(p)=n\;\times \;p=(1000-5p)p=−5{p}^{2}+1000p.$  {eq:fs-id1165043256835}

Step 5: Since the owners plan to charge between $\text{\$}50$ per car per day and $\text{\$}200$ per car per day, the problem is to find the maximum revenue $R(p)$ for $p$ in the closed interval $[50,200].$
Step 6: Since $R$ is a continuous function over the closed, bounded interval $[50,200],$ it has an absolute maximum (and an absolute minimum) in that interval. To find the maximum value, look for critical points. The derivative is ${R}^{'}(p)=−10p+1000.$ Therefore, the critical point is $p=100$ When $p=100,$ $R(100)=\text{\$}50,000.$ When $p=50,$ $R(p)=\text{\$}37,500.$ When $p=200,$ $R(p)=\text{\$}0.$ Therefore, the absolute maximum occurs at $p=\text{\$}100.$ The car rental company should charge $\text{\$}100$ per day per car to maximize revenue as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_04_07_006} src=../../media/CNX_Calc_Figure_04_07_010.jpg
> alt: The function R(p) is graphed. At its maximum there is an intersection of two dashed lines and text that reads “Maximum revenue is $50,000 per day when the price charged per car is $100 per day.”
> caption: To maximize revenue, a car rental company has to balance the price of a rental against the number of cars people will rent at that price.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042946145} type= 
PROBLEM:
A car rental company charges its customers $p$ dollars per day, where $60\le p\le 150.$ It has found that the number of cars rented per day can be modeled by the linear function $n(p)=750-5p.$ How much should the company charge each customer to maximize revenue?
SOLUTION:
The company should charge $\text{\$}75$ per car per day.
COMMENTARY: Hint
$R(p)=n\;\times \;p,$ where $n$ is the number of cars rented and $p$ is the price charged per car.
:::
:::

:::example {ex:fs-id1165043350161} Maximizing the Area of an Inscribed Rectangle

:::exercise {fs-id1165042632530} type= 
PROBLEM:
A rectangle is to be inscribed in the ellipse

$\frac{{x}^{2}}{4}+{y}^{2}=1.$  {eq:fs-id1165042456924}

What should the dimensions of the rectangle be to maximize its area? What is the maximum area?
SOLUTION:
Step 1: For a rectangle to be inscribed in the ellipse, the sides of the rectangle must be parallel to the axes. Let $L$ be the length of the rectangle and $W$ be its width. Let $A$ be the area of the rectangle.

> FIGURE {fig:CNX_Calc_Figure_04_07_007} src=../../media/CNX_Calc_Figure_04_07_007.jpg
> alt: The ellipse x2/4 + y2 = 1 is drawn with its x intercepts being ±2 and its y intercepts being ±1. There is a rectangle inscribed in the ellipse with length L (in the x-direction) and width W.
> caption: We want to maximize the area of a rectangle inscribed in an ellipse.

Step 2: The problem is to maximize $A.$
Step 3: The area of the rectangle is $A=LW.$
Step 4: Let $(x,y)$ be the corner of the rectangle that lies in the first quadrant, as shown in [ref:CNX_Calc_Figure_04_07_007]. We can write length $L=2x$ and width $W=2y.$ Since $\frac{{x}^{2}}{4}+{y}^{2}=1$ and $y>0,$ we have $y=\sqrt{1-\frac{{x}^{2}}{4}}.$ Therefore, the area is

$A=LW=(2x)(2y)=4x\sqrt{1-\frac{{x}^{2}}{4}}=2x\sqrt{4-{x}^{2}}.$  {eq:fs-id1165042320390}

Step 5: From [ref:CNX_Calc_Figure_04_07_007], we see that to inscribe a rectangle in the ellipse, the $x$-coordinate of the corner in the first quadrant must satisfy $0<x<2.$ Therefore, the problem reduces to looking for the maximum value of $A(x)$ over the open interval $(0,2).$ Since $A(x)$ will have an absolute maximum (and absolute minimum) over the closed interval $[0,2],$ we consider $A(x)=2x\sqrt{4-{x}^{2}}$ over the interval $[0,2].$ If the absolute maximum occurs at an interior point, then we have found an absolute maximum in the open interval.
Step 6: As mentioned earlier, $A(x)$ is a continuous function over the closed, bounded interval $[0,2].$ Therefore, it has an absolute maximum (and absolute minimum). At the endpoints $x=0$ and $x=2,$ $A(x)=0.$ For $0<x<2,$ $A(x)>0.$ Therefore, the maximum must occur at a critical point. Taking the derivative of $A(x),$ we obtain

$\begin{array}{rl}A'(x) & =2\sqrt{4-{x}^{2}}+2x\cdot \frac{1}{2\sqrt{4-{x}^{2}}}(−2x) \\ & =2\sqrt{4-{x}^{2}}-\frac{2{x}^{2}}{\sqrt{4-{x}^{2}}} \\ & =\frac{8-4{x}^{2}}{\sqrt{4-{x}^{2}}}.\end{array}$  {eq:fs-id1165042955220}

To find critical points, we need to find where $A'(x)=0.$ We can see that if $x$ is a solution of

$$ \frac{8-4{x}^{2}}{\sqrt{4-{x}^{2}}}=0, $$  {eq:fs-id1165043354675}

then $x$ must satisfy

$8-4{x}^{2}=0.$  {eq:fs-id1165043281800}

Therefore, ${x}^{2}=2.$ Thus, $x=\text{±}\sqrt{2}$ are the possible solutions of [ref:fs-id1165043354675]. Since we are considering $x$ over the interval $[0,2],$ $x=\sqrt{2}$ is a possibility for a critical point, but $x=\text{−}\sqrt{2}$ is not. Therefore, we check whether $\sqrt{2}$ is a solution of [ref:fs-id1165043354675]. Since $x=\sqrt{2}$ is a solution of [ref:fs-id1165043354675], we conclude that $\sqrt{2}$ is the only critical point of $A(x)$ in the interval $[0,2].$ Therefore, $A(x)$ must have an absolute maximum at the critical point $x=\sqrt{2}.$ To determine the dimensions of the rectangle, we need to find the length $L$ and the width $W.$ If $x=\sqrt{2}$ then

$y=\sqrt{1-\frac{{(\sqrt{2})}^{2}}{4}}=\sqrt{1-\frac{1}{2}}=\frac{1}{\sqrt{2}}.$  {eq:fs-id1165042708515}

Therefore, the dimensions of the rectangle are $L=2x=2\sqrt{2}$ and $W=2y=\frac{2}{\sqrt{2}}=\sqrt{2}.$ The area of this rectangle is $A=LW=(2\sqrt{2})(\sqrt{2})=4.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043390989} type= 
PROBLEM:
Modify the area function $A$ if the rectangle is to be inscribed in the unit circle ${x}^{2}+{y}^{2}=1.$ What is the domain of consideration?
SOLUTION:
$A(x)=4x\sqrt{1-{x}^{2}}.$ The domain of consideration is $[0,1].$
COMMENTARY: Hint
If $(x,y)$ is the vertex of the square that lies in the first quadrant, then the area of the square is $A=(2x)(2y)=4xy.$
:::
:::

## Solving Optimization Problems when the Interval Is Not Closed or Is Unbounded
In the previous examples, we considered functions on closed, bounded domains. Consequently, by the extreme value theorem, we were guaranteed that the functions had absolute extrema. Let’s now consider functions for which the domain is neither closed nor bounded.
Many functions still have at least one absolute extrema, even if the domain is not closed or the domain is unbounded. For example, the function $f(x)={x}^{2}+4$ over $(\text{−}\infty ,\infty )$ has an absolute minimum of $4$ at $x=0.$ Therefore, we can still consider functions over unbounded domains or open intervals and determine whether they have any absolute extrema. In the next example, we try to minimize a function over an unbounded domain. We will see that, although the domain of consideration is $(0,\infty ),$ the function has an absolute minimum.
In the following example, we look at constructing a box of least surface area with a prescribed volume. It is not difficult to show that for a closed-top box, by symmetry, among all boxes with a specified volume, a cube will have the smallest surface area. Consequently, we consider the modified problem of determining which open-topped box with a specified volume has the smallest surface area.

:::example {ex:fs-id1165042327673} Minimizing Surface Area

:::exercise {fs-id1165042327675} type= 
PROBLEM:
A rectangular box with a square base, an open top, and a volume of $216$ in.<sup>3</sup> is to be constructed. What should the dimensions of the box be to minimize the surface area of the box? What is the minimum surface area?
SOLUTION:
Step 1: Draw a rectangular box and introduce the variable $x$ to represent the length of each side of the square base; let $y$ represent the height of the box. Let $S$ denote the surface area of the open-top box.

> FIGURE {fig:CNX_Calc_Figure_04_07_008} src=../../media/CNX_Calc_Figure_04_07_008.jpg
> alt: A box with square base is shown. The base has side length x, and the height is y.
> caption: We want to minimize the surface area of a square-based box with a given volume.

Step 2: We need to minimize the surface area. Therefore, we need to minimize $S.$
Step 3: Since the box has an open top, we need only determine the area of the four vertical sides and the base. The area of each of the four vertical sides is $x\cdot y.$ The area of the base is ${x}^{2}.$ Therefore, the surface area of the box is

$S=4xy+{x}^{2}.$  {eq:fs-id1165042327660}

Step 4: Since the volume of this box is ${x}^{2}y$ and the volume is given as $216\;\text{in}{.}^{3},$ the constraint equation is

${x}^{2}y=216.$  {eq:fs-id1165042948321}

Solving the constraint equation for $y,$ we have $y=\frac{216}{{x}^{2}}.$ Therefore, we can write the surface area as a function of $x$ only:

$S(x)=4x(\frac{216}{{x}^{2}})+{x}^{2}.$  {eq:fs-id1165042375810}

Therefore, $S(x)=\frac{864}{x}+{x}^{2}.$
Step 5: Since we are requiring that ${x}^{2}y=216,$ we cannot have $x=0.$ Therefore, we need $x>0.$ On the other hand, $x$ is allowed to have any positive value. Note that as $x$ becomes large, the height of the box $y$ becomes correspondingly small so that ${x}^{2}y=216.$ Similarly, as $x$ becomes small, the height of the box becomes correspondingly large. We conclude that the domain is the open, unbounded interval $(0,\infty ).$ Note that, unlike the previous examples, we cannot reduce our problem to looking for an absolute maximum or absolute minimum over a closed, bounded interval. However, in the next step, we discover why this function must have an absolute minimum over the interval $(0,\infty ).$
Step 6: Note that as $x\to {0}^{+},$ $S(x)\to \infty .$ Also, as $x\to \infty ,$ $S(x)\to \infty .$ Since $S$ is a continuous function that approaches infinity at the ends, it must have an absolute minimum at some $x\in (0,\infty ).$ This minimum must occur at a critical point of $S.$ The derivative is

${S}^{'}(x)=-\frac{864}{{x}^{2}}+2x.$  {eq:fs-id1165043430791}

Therefore, ${S}^{'}(x)=0$ when $2x=\frac{864}{{x}^{2}}.$ Solving this equation for $x,$ we obtain ${x}^{3}=432,$ so $x=\sqrt[3]{432}=6\sqrt[3]{2}.$ Since this is the only critical point of $S,$ the absolute minimum must occur at $x=6\sqrt[3]{2}$ (see [ref:CNX_Calc_Figure_04_07_009]). When $x=6\sqrt[3]{2},$ $y=\frac{216}{{(6\sqrt[3]{2})}^{2}}=3\sqrt[3]{2}\;\text{in}.$ Therefore, the dimensions of the box should be $x=6\sqrt[3]{2}\;\text{in}.$ and $y=3\sqrt[3]{2}\;\text{in}.$ With these dimensions, the surface area is

$S(6\sqrt[3]{2})=\frac{864}{6\sqrt[3]{2}}+{(6\sqrt[3]{2})}^{2}=108\sqrt[3]{4}\;\text{in}{.}^{2}$  {eq:fs-id1165043379912}

> FIGURE {fig:CNX_Calc_Figure_04_07_009} src=../../media/CNX_Calc_Figure_04_07_009.jpg
> alt: The function S(x) = 864/x + x2 is graphed. At its minimum there is a dashed line and text that reads “Minimum surface area is 108 times the cube root of 4 square inches when x = 6 times the cube root of 2 inches.”
> caption: We can use a graph to determine the dimensions of a box of given the volume and the minimum surface area.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042713670} type= 
PROBLEM:
Consider the same open-top box, which is to have volume $216\;\text{in}{.}^{3}.$ Suppose the cost of the material for the base is $20\text{¢}\text{/}\text{in}{.}^{2}$ and the cost of the material for the sides is $30\text{¢}\text{/}\text{in}{.}^{2}$ and we are trying to minimize the cost of this box. Write the cost as a function of the side lengths of the base. (Let $x$ be the side length of the base and $y$ be the height of the box.)
SOLUTION:
$c(x)=\frac{259.2}{x}+0.2{x}^{2}$ dollars
COMMENTARY: Hint
If the cost of one of the sides is $30\text{¢}\text{/}\text{in}{.}^{2},$ the cost of that side is $0.30xy.$
:::
:::

## Key Concepts {section:key-concepts}
- To solve an optimization problem, begin by drawing a picture and introducing variables.
- Find an equation relating the variables.
- Find a function of one variable to describe the quantity that is to be minimized or maximized.
- Look for critical points to locate local extrema.

##  {section:section-exercises}
For the following exercises, answer by proof, counterexample, or explanation.

:::exercise {fs-id1165043396236} type= 
PROBLEM:
When you find the maximum for an optimization problem, why do you need to check the sign of the derivative around the critical points?
SOLUTION:
The critical points can be the minima, maxima, or neither.
:::

:::exercise {fs-id1165042476074} type= 
PROBLEM:
Why do you need to check the endpoints for optimization problems?
:::

:::exercise {fs-id1165042706088} type= 
PROBLEM:
*True or False*. For every continuous nonlinear function, you can find the value $x$ that maximizes the function.
SOLUTION:
False; $y={x}^{2}$ has a minimum only
:::

:::exercise {fs-id1165042707536} type= 
PROBLEM:
*True or False*. For every continuous nonconstant function on a closed, finite domain, there exists at least one $x$ that minimizes or maximizes the function.
:::
For the following exercises, set up and evaluate each optimization problem.

:::exercise {fs-id1165043372672} type= 
PROBLEM:
To carry a suitcase on an airplane, the length $+\text{width}+$ height of the box must be less than or equal to $62\;\text{in}.$ Assuming the base of the suitcase is square, show that the volume is $V=h{(31-(\frac{1}{2})\;h)}^{2}.$ What height allows you to have the largest volume?
SOLUTION:
$h=\frac{62}{3}$ in.
:::

:::exercise {fs-id1165042606531} type= 
PROBLEM:
You are constructing a cardboard box with the dimensions $\text{2 m by 4 m}.$ You then cut equal-size squares from each corner so you may fold the edges. What are the dimensions of the box with the largest volume?

> IMAGE {img:fs-id1165042364282} src=../../media/CNX_Calc_Figure_04_07_201.jpg
> alt: A rectangle is drawn with height 2 and width 4. Each corner has a square with side length x marked on it.

:::

:::exercise {fs-id1165043384497} type= 
PROBLEM:
Find the positive integer that minimizes the sum of the number and its reciprocal.
SOLUTION:
$1$
:::

:::exercise {fs-id1165042334143} type= 
PROBLEM:
Find the two positive integers so that their sum is $10$ and the sum of their squares is as large as possible. Then find another two positive integers so that their sum is 10 and the sum of their squares is as small as possible.
:::
For the following exercises, consider the construction of a pen to enclose an area.

:::exercise {fs-id1165042970430} type= 
PROBLEM:
You have $400\;\text{ft}$ of fencing to construct a rectangular pen for cattle. What are the dimensions of the pen that maximize the area?
SOLUTION:
$100\;\text{ft by}\;100\;\text{ft}$
:::

:::exercise {fs-id1165042333382} type= 
PROBLEM:
You have $800\;\text{ft}$ of fencing to make a pen for hogs. If you have a river on one side of your property, what is the dimension of the rectangular pen that maximizes the area?
:::

:::exercise {fs-id1165042315729} type= 
PROBLEM:
You need to construct a fence around an area of $1600\;{\text{ft}}^{2}.$ What are the dimensions of the rectangular pen to minimize the amount of material needed?
SOLUTION:
$40\;\text{ft by}\;40\;\text{ft}$
:::

:::exercise {fs-id1165042705517} type= 
PROBLEM:
Two poles are connected by a wire that is also connected to the ground. The first pole is $20\;\text{ft}$ tall and the second pole is $10\;\text{ft}$ tall. There is a distance of $30\;\text{ft}$ between the two poles. Where should the wire be anchored to the ground to minimize the amount of wire needed?

> IMAGE {img:fs-id1165042323753} src=../../media/CNX_Calc_Figure_04_07_202.jpg
> alt: Two poles are shown, one that is 10 tall and the other is 20 tall. A right triangle is made with the shorter pole with other side length x. The distance between the two poles is 30.

:::

:::exercise {fs-id1165043395264} type= 
PROBLEM:
**[T]** You are moving into a new apartment and notice there is a corner where the hallway narrows from $\text{8 ft to 6 ft}.$ What is the length of the longest item that can be carried horizontally around the corner?

> IMAGE {img:fs-id1165042350220} src=../../media/CNX_Calc_Figure_04_07_203.jpg
> alt: An upside L-shaped figure is drawn with the _ part being 6 wide and the | part being 8 wide. There is a line drawn from the _ part to the | part that touches the near corner of the shape to form a hypotenuse for a right triangle the other sides being the the rest of the _ and | parts. This line is marked L.

SOLUTION:
$19.73\;\text{ft}.$
:::

:::exercise {fs-id1165042327384} type= 
PROBLEM:
A patient’s pulse measures $\text{70 bpm, 80 bpm, then 120 bpm}.$ To determine an accurate measurement of pulse, the doctor wants to know what value minimizes the expression ${(x-70)}^{2}+{(x-80)}^{2}+{(x-120)}^{2}?$ What value minimizes it?
:::

:::exercise {fs-id1165042647088} type= 
PROBLEM:
In the previous problem, assume the patient was nervous during the third measurement, so we only weight that value half as much as the others. What is the value that minimizes ${(x-70)}^{2}+{(x-80)}^{2}+\frac{1}{2}{(x-120)}^{2}?$
SOLUTION:
$84\;\text{bpm}$
:::

:::exercise {fs-id1165043395063} type= 
PROBLEM:
You can run at a speed of $6$ mph and swim at a speed of $3$ mph and are located on the shore, $4$ miles east of an island that is $1$ mile north of the shoreline. How far should you run west to minimize the time needed to reach the island?

> IMAGE {img:fs-id1165043298555} src=../../media/CNX_Calc_Figure_04_07_204.jpg
> alt: A rectangle is drawn that has height 1 and length 4. In the lower right corner, it is marked “You” and in the upper left corner it is marked “Island.”

:::
For the following problems, consider a lifeguard at a circular pool with diameter $40\;\text{m}.$ He must reach someone who is drowning on the exact opposite side of the pool, at position $C.$ The lifeguard swims with a speed $v$ and runs around the pool at speed $w=3v.$

> IMAGE {img:fs-id1165042331758} src=../../media/CNX_Calc_Figure_04_07_205.jpg
> alt: A circle is drawn with points A and C on a diameter. There is a point B drawn on the circle such that angle BAC form an acute angle θ.

:::exercise {fs-id1165042331767} type= 
PROBLEM:
Find a function that measures the total amount of time it takes to reach the drowning person as a function of the swim angle, $\theta .$
SOLUTION:
$T(\theta )=\frac{40\theta}{3v}+\frac{40\;\text{cos}\;\theta}{v}$
:::

:::exercise {fs-id1165042472042} type= 
PROBLEM:
Find at what angle $\theta$ the lifeguard should swim to reach the drowning person in the least amount of time.
:::

:::exercise {fs-id1165042369580} type= 
PROBLEM:
A truck uses gas as $g(v)=av+\frac{b}{v},$ where $v$ represents the speed of the truck and $g$ represents the gallons of fuel per mile. Assuming $a$ and $b$ are positive, at what speed is fuel consumption minimized?
SOLUTION:
$v=\sqrt{\frac{b}{a}}$
:::
For the following exercises, consider a limousine that gets $m(v)=\frac{(120-2v)}{5}\;\text{mi/gal}$ at speed $v,$ the chauffeur costs $\text{\$15/h},$ and gas is $\text{\$}3.5\text{/}\text{gal}.$

:::exercise {fs-id1165042480102} type= 
PROBLEM:
Find the cost per mile at speed $v.$
:::

:::exercise {fs-id1165042642766} type= 
PROBLEM:
Find the cheapest driving speed.
SOLUTION:
approximately $34\;\text{mph}$
:::
For the following exercises, consider a pizzeria that sell pizzas for a revenue of $R(x)=ax$ and costs $C(x)=b+cx+d{x}^{2},$ where $x$ represents the number of pizzas $;a>c$.

:::exercise {fs-id1165042479778} type= 
PROBLEM:
Find the profit function for the number of pizzas. How many pizzas gives the largest profit per pizza?
:::

:::exercise {fs-id1165042552153} type= 
PROBLEM:
Assume that $R(x)=10x$ and $C(x)=2x+{x}^{2}.$ How many pizzas sold maximizes the profit?
SOLUTION:
$4$
:::

:::exercise {fs-id1165042376370} type= 
PROBLEM:
Assume that $R(x)=15x,$ and $C(x)=60+3x+\frac{1}{2}{x}^{2}.$ How many pizzas sold maximizes the profit?
:::
For the following exercises, consider a wire $4\;\text{ft}$ long cut into two pieces. One piece forms a circle with radius $r$ and the other forms a square of side $x.$

:::exercise {fs-id1165043251103} type= 
PROBLEM:
Choose $x$ to maximize the sum of their areas.
SOLUTION:
$0$
:::

:::exercise {fs-id1165043374302} type= 
PROBLEM:
Choose $x$ to minimize the sum of their areas.
:::
For the following exercises, consider two nonnegative numbers $x$ and $y$ such that $x+y=10.$ Maximize and minimize the quantities.

:::exercise {fs-id1165042647584} type= 
PROBLEM:
$xy$
SOLUTION:
Maximal: $x=5,y=5;$ minimal: $x=0,y=10$ and $y=0,x=10$
:::

:::exercise {fs-id1165042632602} type= 
PROBLEM:
${x}^{2}{y}^{2}$
:::

:::exercise {fs-id1165043108768} type= 
PROBLEM:
$y-\frac{1}{x}$
SOLUTION:
Maximal: $x=1,y=9;$ minimal: none
:::

:::exercise {fs-id1165042332050} type= 
PROBLEM:
${x}^{2}-y$
:::
For the following exercises, draw the given optimization problem and solve.

:::exercise {fs-id1165042320296} type= 
PROBLEM:
Find the volume of the largest right circular cylinder that fits in a sphere of radius $1.$
SOLUTION:
$\frac{4\pi}{3\sqrt{3}}$
:::

:::exercise {fs-id1165042374786} type= 
PROBLEM:
Find the volume of the largest right cone that fits in a sphere of radius $1.$
:::

:::exercise {fs-id1165042374736} type= 
PROBLEM:
Find the area of the largest rectangle that fits into the triangle with sides $x=0,y=0$ and $\frac{x}{4}+\frac{y}{6}=1.$
SOLUTION:
$6$
:::

:::exercise {fs-id1165043423998} type= 
PROBLEM:
Find the largest volume of a cylinder that fits into a cone that has base radius $R$ and height $h.$
:::

:::exercise {fs-id1165043426264} type= 
PROBLEM:
Find the dimensions of the closed cylinder volume $V=16\pi$ that has the least amount of surface area.
SOLUTION:
$r=2,h=4$
:::

:::exercise {fs-id1165043259703} type= 
PROBLEM:
Find the dimensions of a right cone with surface area $S=4\pi$ that has the largest volume.
:::
For the following exercises, consider the points on the given graphs. Use a calculator to graph the functions.

:::exercise {fs-id1165042468209} type= 
PROBLEM:
**[T]** Where is the line $y=5-2x$ closest to the origin?
SOLUTION:
$(2,1)$
:::

:::exercise {fs-id1165042323527} type= 
PROBLEM:
**[T]** Where is the line $y=5-2x$ closest to point $(1,1)?$
:::

:::exercise {fs-id1165043174103} type= 
PROBLEM:
**[T]** Where is the parabola $y={x}^{2}$ closest to point $(2,0)?$
SOLUTION:
$(0.8351,0.6974)$
:::

:::exercise {fs-id1165042323681} type= 
PROBLEM:
**[T]** Where is the parabola $y={x}^{2}$ closest to point $(0,3)?$
:::
For the following exercises, write an equation that models each related-rates situation. Do not solve.

:::exercise {fs-id1165042708277} type= 
PROBLEM:
A window is composed of a semicircle placed on top of a rectangle. If you have $20\;\text{ft}$ of window-framing materials for the outer frame, what is the maximum size of the window you can create? Use $r$ to represent the radius of the semicircle.

> IMAGE {img:fs-id1165042383138} src=../../media/CNX_Calc_Figure_04_07_206.jpg
> alt: A semicircular window is drawn with radius r.

SOLUTION:
$\begin{array}{lll}A & = & 20(\frac{20}{\pi +4})-2{(\frac{20}{\pi +4})}^{2}-\frac{1}{2}\pi {(\frac{20}{\pi +4})}^{2}\end{array}$
:::

:::exercise {fs-id1165042710874} type= 
PROBLEM:
You have a garden row of $20$ watermelon plants that produce an average of $30$ watermelons apiece. For any additional watermelon plants planted, the output per watermelon plant drops by one watermelon. How many extra watermelon plants should you plant?
:::

:::exercise {fs-id1165042349953} type= 
PROBLEM:
You are constructing a box for your cat to sleep in. The plush material for the square bottom of the box costs $\text{\$}5\text{/}{\text{ft}}^{2}$ and the material for the sides costs $\text{\$}2\text{/}{\text{ft}}^{2}.$ You need a box with volume $4{\;\text{ft}}^{3}.$ Find the dimensions of the box that minimize cost. Use $x$ to represent the length of the side of the box.
SOLUTION:
$C(x)=5{x}^{2}+\frac{32}{x}$
:::

:::exercise {fs-id1165042323650} type= 
PROBLEM:
You are building five identical pens adjacent to each other with a total area of $1000{\;\text{m}}^{2},$ as shown in the following figure. What dimensions should you use to minimize the amount of fencing?

> IMAGE {img:fs-id1165042323674} src=../../media/CNX_Calc_Figure_04_07_207.jpg
> alt: A rectangle is divided into five sections, and each section has length y and width x.

:::

:::exercise {fs-id1165042383908} type= 
PROBLEM:
You are the manager of an apartment complex with $50$ units. When you set rent at $\text{\$}800\text{/}\text{month,}$ all apartments are rented. As you increase rent by $\text{\$}25\text{/}\text{month,}$ one fewer apartment is rented. Maintenance costs run $\text{\$}50\text{/}\text{month}$ for each occupied unit. What is the rent that maximizes the total amount of profit?
SOLUTION:
$P(x)=(50-x)(800+25x-50)$
:::

## Glossary
- {def} **optimization problems**: problems that are solved by finding the maximum or minimum value of a function

# Trigonometric Functions

## Learning Objectives {section:learning-objectives}
- Convert angle measures between degrees and radians.
- Recognize the triangular and circular definitions of the basic trigonometric functions.
- Write the basic trigonometric identities.
- Identify the graphs and periods of the trigonometric functions.
- Describe the shift of a sine or cosine graph from the equation of the function.

Trigonometric functions are used to model many phenomena, including sound waves, vibrations of strings, alternating electrical current, and the motion of pendulums. In fact, almost any repetitive, or cyclical, motion can be modeled by some combination of trigonometric functions. In this section, we define the six basic trigonometric functions and look at some of the main identities involving these functions.

## Radian Measure
To use trigonometric functions, we first must understand how to measure the angles. Although we can use both radians and degrees, {term:radians} are a more natural measurement because they are related directly to the unit circle, a circle with radius 1. The radian measure of an angle is defined as follows. Given an angle $\theta ,$ let $s$ be the length of the corresponding arc on the unit circle ([ref:CNX_Calc_Figure_01_03_001]). We say the angle corresponding to the arc of length 1 has radian measure 1.

> FIGURE {fig:CNX_Calc_Figure_01_03_001} src=../../media/CNX_Calc_Figure_01_03_001.jpg
> alt: An image of a circle. At the exact center of the circle there is a point. From this point, there is one line segment that extends horizontally to the right a point on the edge of the circle and another line segment that extends diagonally upwards and to the right to another point on the edge of the circle. These line segments have a length of 1 unit. The curved segment on the edge of the circle that connects the two points at the end of the line segments is labeled “s”. Inside the circle, there is an arrow that points from the horizontal line segment to the diagonal line segment. This arrow has the label “theta = s radians”.
> caption: The radian measure of an angle $\theta$ is the arc length $s$ of the associated arc on the unit circle.

Since an angle of $360\text{°}$ corresponds to the circumference of a circle, or an arc of length $2\pi ,$ we conclude that an angle with a degree measure of $360\text{°}$ has a radian measure of $2\pi .$ Similarly, we see that $180\text{°}$ is equivalent to $\pi$ radians. [ref:fs-id1170572205698] shows the relationship between common degree and radian values.

> TABLE {tab:fs-id1170572205698} cols=4
> title: Common Angles Expressed in Degrees and Radians
> summary: A table with 9 rows and 2 columns. The first column is labeled “Degrees” and has the values “0; 30; 45; 60; 90; 120; 135; 150; 180”. The second column is labeled “Radians” and the values are “0; (pi/6); (pi/4); (pi/3); (pi/2); (2pi/3); (3pi/4); (5pi/6); pi”.

| Degrees | Radians | Degrees | Radians |
| --- | --- | --- | --- |
| 0 | 0 | 120 | $2\pi \text{/}3$ |
| 30 | $\pi \text{/}6$ | 135 | $3\pi \text{/}4$ |
| 45 | $\pi \text{/}4$ | 150 | $5\pi \text{/}6$ |
| 60 | $\pi \text{/}3$ | 180 | $\pi$ |
| 90 | $\pi \text{/}2$ |  |  |

:::example {ex:fs-id1170572139592} Converting between Radians and Degrees

:::exercise {fs-id1170572216168} type= 
PROBLEM:
a. Express $225\text{°}$ using radians.
b. Express $5\pi \text{/}3$ rad using degrees.
SOLUTION:
Use the fact that $180\text{°}$ is equivalent to $\pi$ radians as a conversion factor: $1=\frac{\pi \;\text{rad}}{180\text{°}}=\frac{180\text{°}}{\pi \;\text{rad}}.$
a. $225\text{°}=225\text{°}\cdot \frac{\pi}{180\text{°}}=\frac{5\pi}{4}$ rad
b. $\frac{5\pi}{3}$ rad = $\frac{5\pi}{3}\cdot \frac{180\text{°}}{\pi}=300\text{°}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572226063} type= 
PROBLEM:
Express $210\text{°}$ using radians. Express $11\pi \text{/}6$ rad using degrees.
SOLUTION:
$7\pi \text{/}6;$ 330°
COMMENTARY: Hint
$\pi$ radians is equal to $180\text{°}\text{.}$
:::
:::

## The Six Basic Trigonometric Functions
Trigonometric functions allow us to use angle measures, in radians or degrees, to find the coordinates of a point on any circle—not only on a unit circle—or to find an angle given a point on a circle. They also define the relationship among the sides and angles of a triangle.
To define the trigonometric functions, first consider the unit circle centered at the origin and a point $P=(x,y)$ on the unit circle. Let $\theta$ be an angle with an initial side that lies along the positive $x$-axis and with a terminal side that is the line segment $OP.$ An angle in this position is said to be in *standard position* ([ref:CNX_Calc_Figure_01_03_002]). We can then define the values of the six trigonometric functions for $\theta$ in terms of the coordinates $x$ and $y.$

> FIGURE {fig:CNX_Calc_Figure_01_03_002} src=../../media/CNX_Calc_Figure_01_03_002.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another line segment that extends diagonally upwards and to the right to another point on the edge of the circle. This point is labeled “P = (x, y)”. These line segments have a length of 1 unit. From the point “P”, there is a dotted vertical line that extends downwards until it hits the x axis and thus the horizontal line segment. Inside the circle, there is an arrow that points from the horizontal line segment to the diagonal line segment. This arrow has the label “theta”.
> caption: The angle $\theta$ is in standard position. The values of the trigonometric functions for $\theta$ are defined in terms of the coordinates $x$ and $y.$

:::note [definition] Definition
Let $P=(x,y)$ be a point on the unit circle centered at the origin $O.$ Let $\theta$ be an angle with an initial side along the positive $x$-axis and a terminal side given by the line segment $OP.$ The {term:trigonometric functions} are then defined as

$$ \begin{array}{llll}\text{sin}\;\theta =y & & & \text{csc}\;\theta =\frac{1}{y} \\ \text{cos}\;\theta =x & & & \text{sec}\;\theta =\frac{1}{x} \\ \text{tan}\;\theta =\frac{y}{x} & & & \text{cot}\;\theta =\frac{x}{y}\end{array} $$  {eq:fs-id1170572111492}

If $x=0,\text{sec}\;\theta$ and $\text{tan}\;\theta$ are undefined. If $y=0,$ then $\text{cot}\;\theta$ and $\text{csc}\;\theta$ are undefined.
:::
We can see that for a point $P=(x,y)$ on a circle of radius $r$ with a corresponding angle $\theta ,$ the coordinates $x$ and $y$ satisfy

$\begin{array}{l} \\ \\ \text{cos}\;\theta =\frac{x}{r} \\ x=r\;\text{cos}\;\theta \end{array}$  {eq:fs-id1170572205569}

$\begin{array}{l}\text{sin}\;\theta =\frac{y}{r} \\ y=r\;\text{sin}\;\theta .\end{array}$  {eq:fs-id1170572133010}

The values of the other trigonometric functions can be expressed in terms of $x,y,$ and $r$ ([ref:CNX_Calc_Figure_01_03_003]).

> FIGURE {fig:CNX_Calc_Figure_01_03_003} src=../../media/CNX_Calc_Figure_01_03_003.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one blue line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another blue line segment that extends diagonally upwards and to the right to another point on the edge of the circle. This point is labeled “P = (x, y)”. These line segments have a length of “r” units. Between these line segments within the circle is the label “theta”, representing the angle between the segments. From the point “P”, there is a blue vertical line that extends downwards until it hits the x axis and thus hits the horizontal line segment, at a point labeled “x”. At the intersection horizontal line segment and vertical line segment at the point x, there is a right triangle symbol. From the point “P”, there is a dotted horizontal line segment that extends left until it hits the y axis at a point labeled “y”.
> caption: For a point $P=(x,y)$ on a circle of radius $r,$ the coordinates $x$ and $y$ satisfy $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta .$

[ref:fs-id1170572167612] shows the values of sine and cosine at the major angles in the first quadrant. From this table, we can determine the values of sine and cosine at the corresponding angles in the other quadrants. The values of the other trigonometric functions are calculated easily from the values of $\text{sin}\;\theta$ and $\text{cos}\;\theta .$

> TABLE {tab:fs-id1170572167612} cols=3
> title: Values of $\text{sin}\;\theta$ and $\text{cos}\;\theta$ at Major Angles $\theta$ in the First Quadrant
> summary: A table with 5 rows and 3 columns. The first column is labeled “theta” and has the values “0; (pi/6); (pi/4); (pi/3); (pi/2)”. The second column is labeled “sin(theta)” and the values are “0; (1/2); ((square root of 2)/2); ((square root of 3)/2); 1”. The third column is labeled “cos(theta)” and the values are “0; ((square root of 3)/2); ((square root of 2)/2); (1/2); 0”.

| $\theta$ | $\mathbf{sin}\;\theta$ | $\mathbf{cos}\;\theta$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ |
| $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ |
| $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ |
| $\frac{\pi}{2}$ | $1$ | $0$ |

:::example {ex:fs-id1170572205827} Evaluating Trigonometric Functions

:::exercise {fs-id1170572168330} type= 
PROBLEM:
Evaluate each of the following expressions.
a. $\text{sin}(\frac{2\pi}{3})$
b. $\text{cos}(-\frac{5\pi}{6})$
c. $\text{tan}(\frac{15\pi}{4})$
SOLUTION:
a. On the unit circle, the angle $\theta =\frac{2\pi}{3}$ corresponds to the point $(-\frac{1}{2},\frac{\sqrt{3}}{2}).$ Therefore, $\text{sin}(\frac{2\pi}{3})=y=\frac{\sqrt{3}}{2}.$

> IMAGE {img:fs-id1170572141631} src=../../media/CNX_Calc_Figure_01_03_004.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another line segment that extends diagonally upwards and to the left to another point on the edge of the circle. This point is labeled “(-(1/2), ((square root of 3)/2))”. These line segments have a length of 1 unit. From the point “(-(1/2), ((square root of 3)/2))”, there is a vertical line that extends downwards until it hits the x axis. Inside the circle, there is a curved arrow that starts at the horizontal line segment and travels counterclockwise until it hits the diagonal line segment. This arrow has the label “theta = (2 pi)/3”.

b. An angle $\theta =-\frac{5\pi}{6}$ corresponds to a revolution in the negative direction, as shown. Therefore, $\text{cos}(-\frac{5\pi}{6})=x=-\frac{\sqrt{3}}{2}.$

> IMAGE {img:fs-id1170572455490} src=../../media/CNX_Calc_Figure_01_03_005.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another line segment that extends diagonally downwards and to the left to another point on the edge of the circle. This point is labeled “(-((square root of 3)/2)), -(1/2))”. These line segments have a length of 1 unit. From the point “(-((square root of 3)/2)), -(1/2))”, there is a vertical line that extends upwards until it hits the x axis. Inside the circle, there is a curved arrow that starts at the horizontal line segment and travels clockwise until it hits the diagonal line segment. This arrow has the label “theta = -(5 pi)/6”.

c. An angle $\theta =\frac{15\pi}{4}=2\pi +\frac{7\pi}{4}.$ Therefore, this angle corresponds to more than one revolution, as shown. Knowing the fact that an angle of $\frac{7\pi}{4}$ corresponds to the point $(\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2}),$ we can conclude that $\text{tan}(\frac{15\pi}{4})=\frac{y}{x}=−1.$

> IMAGE {img:fs-id1170572453621} src=../../media/CNX_Calc_Figure_01_03_006.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another line segment that extends diagonally downwards and to the right to another point on the edge of the circle. This point is labeled “(((square root of 2)/2), -((square root of 2)/2))”. These line segments have a length of 1 unit. From the point “(((square root of 2)/2), -((square root of 2)/2))”, there is a vertical line that extends upwards until it hits the x axis and thus the horizontal line segment. Inside the circle, there is a curved arrow that starts at the horizontal line segment and travels counterclockwise. The arrow makes one full rotation around the circle and then keeps traveling until it hits the diagonal line segment. This arrow has the label “theta = (15 pi)/4”.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572450618} type= 
PROBLEM:
Evaluate $\text{cos}(3\pi \text{/}4)$ and $\text{sin}(\text{−}\pi \text{/}6).$
SOLUTION:
$\text{cos}(3\pi \text{/}4)=\text{−}\sqrt{2}\text{/}2;\;\text{sin}(\text{−}\pi \text{/}6)=−1\text{/}2$
COMMENTARY: Hint
Look at angles on the unit circle.
:::
:::
As mentioned earlier, the ratios of the side lengths of a right triangle can be expressed in terms of the trigonometric functions evaluated at either of the acute angles of the triangle. Let $\theta$ be one of the acute angles. Let $A$ be the length of the adjacent leg, $O$ be the length of the opposite leg, and $H$ be the length of the hypotenuse. By inscribing the triangle into a circle of radius $H,$ as shown in [ref:CNX_Calc_Figure_01_03_007], we see that $A,H,$ and $O$ satisfy the following relationships with $\theta \text{:}$

$\begin{array}{llll}\text{sin}\;\theta =\frac{O}{H} & & & \text{csc}\;\theta =\frac{H}{O} \\ \text{cos}\;\theta =\frac{A}{H} & & & \text{sec}\;\theta =\frac{H}{A} \\ \text{tan}\;\theta =\frac{O}{A} & & & \text{cot}\;\theta =\frac{A}{O}\end{array}$  {eq:fs-id1170572169799}

> FIGURE {fig:CNX_Calc_Figure_01_03_007} src=../../media/CNX_Calc_Figure_01_03_007.jpg
> alt: An image of a graph. The graph has a circle plotted on it, with the center of the circle at the origin, where there is a point. From this point, there is one line segment that extends horizontally along the x axis to the right to a point on the edge of the circle. There is another line segment with length labeled “H” that extends diagonally upwards and to the right to another point on the edge of the circle. From the point, there is vertical line with a length labeled “O” that extends downwards until it hits the x axis and thus the horizontal line segment at a point with a right triangle symbol. The distance from this point to the center of the circle is labeled “A”. Inside the circle, there is an arrow that points from the horizontal line segment to the diagonal line segment. This arrow has the label “theta”.
> caption: By inscribing a right triangle in a circle, we can express the ratios of the side lengths in terms of the trigonometric functions evaluated at $\theta .$

:::example {ex:fs-id1170572203718} Constructing a Wooden Ramp

:::exercise {fs-id1170572546544} type= 
PROBLEM:
A wooden ramp is to be built with one end on the ground and the other end at the top of a short staircase. If the top of the staircase is $4$ ft from the ground and the angle between the ground and the ramp is to be $10\text{°},$ how long does the ramp need to be?
SOLUTION:
Let $x$ denote the length of the ramp. In the following image, we see that $x$ needs to satisfy the equation $\text{sin}(10\text{°})=4\text{/}x.$ Solving this equation for $x,$ we see that $x=4\text{/}\text{sin}(10\text{°})\approx 23.035$ ft.

> IMAGE {img:fs-id1170572286595} src=../../media/CNX_Calc_Figure_01_03_008.jpg
> alt: An image of a ramp and a staircase. The ramp starts at a point and increases diagonally upwards and to the right at an angle of 10 degrees for x feet. At the end of the ramp, which is 4 feet off the ground, a staircase descends downwards and to the right.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572224048} type= 
PROBLEM:
A house painter wants to lean a $20$-ft ladder against a house. If the angle between the base of the ladder and the ground is to be $60\text{°},$ how far from the house should she place the base of the ladder?
SOLUTION:
$10$ ft
COMMENTARY: Hint
Draw a right triangle with hypotenuse $20\text{.}$
:::
:::

## Trigonometric Identities
A {term:trigonometric identity} is an equation involving trigonometric functions that is true for all angles $\theta$ for which the functions are defined. We can use the identities to help us solve or simplify equations. The main trigonometric identities are listed next.

:::note [rule] Rule: Trigonometric Identities
**Reciprocal identities**

$\begin{array}{llll}\text{cot}\;\theta =\frac{1}{\text{tan}\;\theta} & & & \\ \text{csc}\;\theta =\frac{1}{\text{sin}\;\theta} & & & \text{sec}\;\theta =\frac{1}{\text{cos}\;\theta}\end{array}$  {eq:fs-id1170572167703}

**Ratio identities**

$\begin{array}{llll}\text{tan}\;\theta =\frac{\text{sin}\;\theta}{\text{cos}\;\theta} & & & \text{cot}\;\theta =\frac{\text{cos}\;\theta}{\text{sin}\;\theta}\end{array}$  {eq:eq-00001}

**Pythagorean identities**

${\text{sin}}^{2}\theta +{\text{cos}}^{2}\theta =1\hspace{2em}1+{\text{tan}}^{2}\theta ={\text{sec}}^{2}\theta \hspace{2em}1+{\text{cot}}^{2}\theta ={\text{csc}}^{2}\theta$  {eq:fs-id1170572455704}

**Addition and subtraction formulas**

$\text{sin}(\alpha \pm β)=\text{sin}\;\alpha \;\text{cos}\;β\pm \text{cos}\;\alpha \;\text{sin}\;β$  {eq:fs-id1170572216911}

$\text{cos}(\alpha \pm β)=\text{cos}\;\alpha \;\text{cos}\;β∓\text{sin}\;\alpha \;\text{sin}\;β$  {eq:fs-id1170572098934}

**Double-angle formulas**

$\text{sin}(2\theta )=2\;\text{sin}\;\theta \;\text{cos}\;\theta$  {eq:fs-id1170572215732}

$\text{cos}(2\theta )=2{\text{cos}}^{2}\theta -1=1-2{\text{sin}}^{2}\theta ={\text{cos}}^{2}\theta -{\text{sin}}^{2}\theta$  {eq:fs-id1170572130013}

:::

:::example {ex:fs-id1170572455784} Solving Trigonometric Equations

:::exercise {fs-id1170572455789} type= 
PROBLEM:
For each of the following equations, use a trigonometric identity to find all solutions.
a. $1+\text{cos}(2\theta )=\text{cos}\;\theta$
b. $\text{sin}(2\theta )=\text{tan}\;\theta$
SOLUTION:
a. Using the double-angle formula for $\text{cos}(2\theta ),$ we see that $\theta$ is a solution of

$1+\text{cos}(2\theta )=\text{cos}\;\theta$  {eq:fs-id1170572455200}

if and only if

$1+2{\text{cos}}^{2}\theta -1=\text{cos}\;\theta ,$  {eq:fs-id1170572306177}

which is true if and only if

$2{\text{cos}}^{2}\theta -\text{cos}\;\theta =0.$  {eq:fs-id1170572228495}

To solve this equation, it is important to note that we need to factor the left-hand side and not divide both sides of the equation by $\text{cos}\;\theta .$ The problem with dividing by $\text{cos}\;\theta$ is that it is possible that $\text{cos}\;\theta$ is zero. In fact, if we did divide both sides of the equation by $\text{cos}\;\theta ,$ we would miss some of the solutions of the original equation. Factoring the left-hand side of the equation, we see that $\theta$ is a solution of this equation if and only if

$\text{cos}\;\theta (2\;\text{cos}\;\theta -1)=0.$  {eq:fs-id1170572547608}

Since $\text{cos}\;\theta =0$ when

$\theta =\frac{\pi}{2},\frac{\pi}{2}\pm \pi ,\frac{\pi}{2}\pm 2\pi \text{,…,}$  {eq:fs-id1170572560741}

and $\text{cos}\;\theta =1\text{/}2$ when

$\theta =\frac{\pi}{3},\frac{\pi}{3}\pm 2\pi \text{,…}\;\text{or}\;\theta =-\frac{\pi}{3},-\frac{\pi}{3}\pm 2\pi \text{,…,}$  {eq:fs-id1170572508712}

we conclude that the set of solutions to this equation is

$\theta =\frac{\pi}{2}+n\pi ,\theta =\frac{\pi}{3}+2n\pi ,\text{and}\;\theta =-\frac{\pi}{3}+2n\pi ,n=0,\pm 1,\pm 2,\text{…}.$  {eq:fs-id1170572248040}

b. Using the double-angle formula for $\text{sin}(2\theta )$ and the ratio identity for $\text{tan}(\theta ),$ the equation can be written as

$2\;\text{sin}\;\theta \;\text{cos}\;\theta =\frac{\text{sin}\;\theta}{\text{cos}\;\theta}.$  {eq:fs-id1170572507961}

To solve this equation, we multiply both sides by $\text{cos}\;\theta$ to eliminate the denominator, and say that if $\theta$ satisfies this equation, then $\theta$ satisfies the equation

$2\;\text{sin}\;\theta {\text{cos}}^{2}\theta -\text{sin}\;\theta =0.$  {eq:fs-id1170571656392}

However, we need to be a little careful here. Even if $\theta$ satisfies this new equation, it may not satisfy the original equation because, to satisfy the original equation, we would need to be able to divide both sides of the equation by $\text{cos}\;\theta .$ However, if $\text{cos}\;\theta =0,$ we cannot divide both sides of the equation by $\text{cos}\;\theta .$ Therefore, it is possible that we may arrive at extraneous solutions. So, at the end, it is important to check for extraneous solutions. Returning to the equation, it is important that we factor $\text{sin}\;\theta$ out of both terms on the left-hand side instead of dividing both sides of the equation by $\text{sin}\;\theta .$ Factoring the left-hand side of the equation, we can rewrite this equation as

$\text{sin}\;\theta (2{\text{cos}}^{2}\theta -1)=0.$  {eq:fs-id1170572245838}

Therefore, the solutions are given by the angles $\theta$ such that $\text{sin}\;\theta =0$ or ${\text{cos}}^{2}\theta =1\text{/}2.$ The solutions of the first equation are $\theta =0,\pm \pi ,\pm 2\pi \text{,….}$ The solutions of the second equation are $\theta =\pi \text{/}4,(\pi \text{/}4)\pm (\pi \text{/}2),(\pi \text{/}4)\pm \pi \text{,….}$ After checking for extraneous solutions, the set of solutions to the equation is

$\theta =n\pi \;\text{and}\;\theta =\frac{\pi}{4}+\frac{n\pi}{2},n=0,\pm 1,\pm 2,\text{…}.$  {eq:fs-id1170572554579}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572151034} type= 
PROBLEM:
Find all solutions to the equation $\text{cos}(2\theta )=\text{sin}\;\theta .$
SOLUTION:
$\theta =\frac{3\pi}{2}+2n\pi ,\frac{\pi}{6}+2n\pi ,\frac{5\pi}{6}+2n\pi$ for $n=0,\pm 1,\pm 2\text{,…}$
COMMENTARY: Hint
Use the double-angle formula for cosine.
:::
:::

:::example {ex:fs-id1170572111814} Proving a Trigonometric Identity

:::exercise {fs-id1170572550138} type= 
PROBLEM:
Prove the trigonometric identity $1+{\text{tan}}^{2}\theta ={\text{sec}}^{2}\theta .$
SOLUTION:
We start with the identity

${\text{sin}}^{2}\theta +{\text{cos}}^{2}\theta =1.$  {eq:fs-id1170572167191}

Dividing both sides of this equation by ${\text{cos}}^{2}\theta ,$ we obtain

$\frac{{\text{sin}}^{2}\theta}{{\text{cos}}^{2}\theta}+1=\frac{1}{{\text{cos}}^{2}\theta}.$  {eq:fs-id1170572481849}

Since $\text{sin}\;\theta \text{/}\text{cos}\;\theta =\text{tan}\;\theta$ and $1\text{/}\text{cos}\;\theta =\text{sec}\;\theta ,$ we conclude that

${\text{tan}}^{2}\theta +1={\text{sec}}^{2}\theta .$  {eq:fs-id1170572481963}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572171308} type= 
PROBLEM:
Prove the trigonometric identity $1+{\text{cot}}^{2}\theta ={\text{csc}}^{2}\theta .$
SOLUTION:
$\begin{array}{lll}1+\theta & = & 1+\frac{\theta}{\theta} \\ & = & \frac{\theta}{\theta}+\frac{\theta}{\theta} \\ & = & \frac{\theta +\theta}{\theta} \\ & = & \frac{1}{\theta} \\ & = & \theta \end{array}$
COMMENTARY: Hint
Divide both sides of the identity ${\text{sin}}^{2}\theta +{\text{cos}}^{2}\theta =1$ by ${\text{sin}}^{2}\theta .$
:::
:::

## Graphs and Periods of the Trigonometric Functions
We have seen that as we travel around the unit circle, the values of the trigonometric functions repeat. We can see this pattern in the graphs of the functions. Let $P=(x,y)$ be a point on the unit circle and let $\theta$ be the corresponding angle $.$ Since the angle $\theta$ and $\theta +2\pi$ correspond to the same point $P,$ the values of the trigonometric functions at $\theta$ and at $\theta +2\pi$ are the same. Consequently, the trigonometric functions are {term:periodic functions.} The period of a function $f$ is defined to be the smallest positive value $p$ such that $f(x+p)=f(x)$ for all values $x$ in the domain of $f.$ The sine, cosine, secant, and cosecant functions have a period of $2\pi .$ Since the tangent and cotangent functions repeat on an interval of length $\pi ,$ their period is $\pi$ ([ref:CNX_Calc_Figure_01_03_009]).

> FIGURE {fig:CNX_Calc_Figure_01_03_009} src=../../media/CNX_Calc_Figure_01_03_013.jpg
> alt: An image of six graphs. Each graph has an x axis that runs from -2 pi to 2 pi and a y axis that runs from -2 to 2. The first graph is of the function “f(x) = sin(x)”, which is a curved wave function. The graph of the function starts at the point (-2 pi, 0) and increases until the point (-((3 pi)/2), 1). After this point, the function decreases until the point (-(pi/2), -1). After this point, the function increases until the point ((pi/2), 1). After this point, the function decreases until the point (((3 pi)/2), -1). After this point, the function begins to increase again. The x intercepts shown on the graph are at the points (-2 pi, 0), (-pi, 0), (0, 0), (pi, 0), and (2 pi, 0). The y intercept is at the origin. The second graph is of the function “f(x) = cos(x)”, which is a curved wave function. The graph of the function starts at the point (-2 pi, 1) and decreases until the point (-pi, -1). After this point, the function increases until the point (0, 1). After this point, the function decreases until the point (pi, -1). After this point, the function increases again. The x intercepts shown on the graph are at the points (-((3 pi)/2), 0), (-(pi/2), 0), ((pi/2), 0), and (((3 pi)/2), 0). The y intercept is at the point (0, 1). The graph of cos(x) is the same as the graph of sin(x), except it is shifted to the left by a distance of (pi/2). On the next four graphs there are dotted vertical lines which are not a part of the function, but act as boundaries for the function, boundaries the function will never touch. They are known as vertical asymptotes. There are infinite vertical asymptotes for all of these functions, but these graphs only show a few. The third graph is of the function “f(x) = csc(x)”. The vertical asymptotes for “f(x) = csc(x)” on this graph occur at “x = -2 pi”, “x = -pi”, “x = 0”, “x = pi”, and “x = 2 pi”. Between the “x = -2 pi” and “x = -pi” asymptotes, the function looks like an upward facing “U”, with a minimum at the point (-((3 pi)/2), 1). Between the “x = -pi” and “x = 0” asymptotes, the function looks like an downward facing “U”, with a maximum at the point (-(pi/2), -1). Between the “x = 0” and “x = pi” asymptotes, the function looks like an upward facing “U”, with a minimum at the point ((pi/2), 1). Between the “x = pi” and “x = 2 pi” asymptotes, the function looks like an downward facing “U”, with a maximum at the point (((3 pi)/2), -1). The fourth graph is of the function “f(x) = sec(x)”. The vertical asymptotes for this function on this graph are at “x = -((3 pi)/2)”, “x = -(pi/2)”, “x = (pi/2)”, and “x = ((3 pi)/2)”. Between the “x = -((3 pi)/2)” and “x = -(pi/2)” asymptotes, the function looks like an downward facing “U”, with a maximum at the point (-pi, -1). Between the “x = -(pi/2)” and “x = (pi/2)” asymptotes, the function looks like an upward facing “U”, with a minimum at the point (0, 1). Between the “x = (pi/2)” and “x = (3pi/2)” asymptotes, the function looks like an downward facing “U”, with a maximum at the point (pi, -1). The graph of sec(x) is the same as the graph of csc(x), except it is shifted to the left by a distance of (pi/2). The fifth graph is of the function “f(x) = tan(x)”. The vertical asymptotes of this function on this graph occur at “x = -((3 pi)/2)”, “x = -(pi/2)”, “x = (pi/2)”, and “x = ((3 pi)/2)”. In between all of the vertical asymptotes, the function is always increasing but it never touches the asymptotes. The x intercepts on this graph occur at the points (-2 pi, 0), (-pi, 0), (0, 0), (pi, 0), and (2 pi, 0). The y intercept is at the origin. The sixth graph is of the function “f(x) = cot(x)”. The vertical asymptotes of this function on this graph occur at “x = -2 pi”, “x = -pi”, “x = 0”, “x = pi”, and “x = 2 pi”. In between all of the vertical asymptotes, the function is always decreasing but it never touches the asymptotes. The x intercepts on this graph occur at the points (-((3 pi)/2), 0), (-(pi/2), 0), ((pi/2), 0), and (((3 pi)/2), 0) and there is no y intercept.
> caption: The six trigonometric functions are periodic.

Just as with algebraic functions, we can apply transformations to trigonometric functions. In particular, consider the following function:

$$ f(x)=A\;\text{cos}(B(x-\alpha ))+C. $$  {eq:fs-id1170572138918}

In [ref:CNX_Calc_Figure_01_03_010], the constant $\alpha$ causes a horizontal or phase shift. The factor $B$ changes the period. This transformed sine function will have a period $2\pi \text{/}|B|.$ The factor $A$ results in a vertical stretch by a factor of $|A|.$ We say $|A|$ is the “amplitude of $f.$” The constant $C$ causes a vertical shift.

> FIGURE {fig:CNX_Calc_Figure_01_03_010} src=../../media/CNX_Calc_Figure_01_03_010.jpg
> alt: An image of a graph. The graph is of the function “f(x) = Acos(B(x - alpha)) + C”. Along the y axis, there are 3 hash marks: starting from the bottom and moving up, the hash marks are at the values “C - A”, “C”, and “C + A”. The distance from the origin to “C” is labeled “vertical shift”. The distance from “C - A” to “A” and the distance from “A” to “C + A” is “A”, which is labeled “amplitude”. On the x axis is a hash mark at the value “alpha” and the distance between the origin and “alpha” is labeled “horizontal shift”. The distance between two successive minimum values of the function (in other words, the distance between two bottom parts of the wave that are next to each other) is “(2 pi)/(absolute value of B)” is labeled the period. The period is also the distance between two successive maximum values of the function.
> caption: A graph of a general cosine function.

Notice in [ref:CNX_Calc_Figure_01_03_009] that the graph of $y=\text{cos}\;x$ is the graph of $y=\text{sin}\;x$ shifted to the left $\pi \text{/}2$ units. Therefore, we can write $\text{cos}\;x=\text{sin}(x+\pi \text{/}2).$ Similarly, we can view the graph of $y=\text{sin}\;x$ as the graph of $y=\text{cos}\;x$ shifted right $\pi \text{/}2$ units, and state that $\text{sin}\;x=\text{cos}(x-\pi \text{/}2).$
A shifted sine curve arises naturally when graphing the number of hours of daylight in a given location as a function of the day of the year. For example, suppose a city reports that June 21 is the longest day of the year with $15.7$ hours and December 21 is the shortest day of the year with $8.3$ hours. It can be shown that the function

$h(t)=3.7\;\text{sin}(\frac{2\pi}{365}(t-80.5))+12$  {eq:fs-id1170572454081}

is a model for the number of hours of daylight $h$ as a function of day of the year $t$ ([ref:CNX_Calc_Figure_01_03_011]).

> FIGURE {fig:CNX_Calc_Figure_01_03_011} src=../../media/CNX_Calc_Figure_01_03_011.jpg
> alt: An image of a graph. The x axis runs from 0 to 365 and is labeled “t, day of the year”. The y axis runs from 0 to 20 and is labeled “h, number of daylight hours”. The graph is of the function “h(t) = 3.7sin(((2 pi)/365)(t - 80.5)) + 12”, which is a curved wave function. The function starts at the approximate point (0, 8.4) and begins increasing until the approximate point (171.8, 15.7). After this point, the function decreases until the approximate point (354.3, 8.3). After this point, the function begins increasing again.
> caption: The hours of daylight as a function of day of the year can be modeled by a shifted sine curve.

:::example {ex:fs-id1170572449639} Sketching the Graph of a Transformed Sine Curve

:::exercise {fs-id1170572138927} type= 
PROBLEM:
Sketch a graph of $f(x)=3\;\text{sin}(2(x-\frac{\pi}{4}))+1.$
SOLUTION:
This graph is a horizontal compression by a factor of 2, a phase shift to the right by π/4 units, followed by a vertical stretch by a factor of 3, and then a vertical shift by 1 unit. The period of $f$ is $\pi .$

> IMAGE {img:fs-id1170572226865} src=../../media/CNX_Calc_Figure_01_03_012.jpg
> alt: An image of a graph. The x axis runs from -((3 pi)/2) to 2 pi and the y axis runs from -3 to 5. The graph is of the function “f(x) = 3sin(2(x-(pi/4))) + 1”, which is a curved wave function. The function starts decreasing from the point (-((3 pi)/2), 4) until it hits the point (-pi, -2). At this point, the function begins increasing until it hits the point (-(pi/2), 4). After this point, the function begins decreasing until it hits the point (0, -2). After this point, the function increases until it hits the point ((pi/2), 4). After this point, the function decreases until it hits the point (pi, -2). After this point, the function increases until it hits the point (((3 pi)/2), 4). After this point, the function decreases again.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572167444} type= 
PROBLEM:
Describe the relationship between the graph of $f(x)=3\;\text{sin}(4x)-5$ and the graph of $y=\text{sin}(x).$
SOLUTION:
To graph $f(x)=3\;\text{sin}(4x)-5,$ the graph of $y=\text{sin}(x)$ needs to be compressed horizontally by a factor of 4, then stretched vertically by a factor of 3, then shifted down 5 units. The function $f$ will have a period of $\pi \text{/}2$ and an amplitude of 3.
COMMENTARY: Hint
The graph of $f$ can be sketched using the graph of $y=\text{sin}(x)$ and a sequence of three transformations.
:::
:::

## Key Concepts {section:key-concepts}
- Radian measure is defined such that the angle associated with the arc of length 1 on the unit circle has radian measure 1. An angle with a degree measure of $180\text{°}$ has a radian measure of $\pi$ rad.
- For acute angles $\theta ,$ the values of the trigonometric functions are defined as ratios of two sides of a right triangle in which one of the acute angles is $\theta .$
- For a general angle $\theta ,$ let $(x,y)$ be a point on a circle of radius $r$ corresponding to this angle $\theta .$ The trigonometric functions can be written as ratios involving $x,y,$ and $r.$
- The trigonometric functions are periodic. The sine, cosine, secant, and cosecant functions have period $2\pi .$ The tangent and cotangent functions have period $\pi .$

## Key Equations {section:key-equations}

> TABLE {tab:eip-481} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Generalized sine function** | $f(x)=A\;\text{sin}(B(x-\alpha ))+C$ |

##  {section:section-exercises}
For the following exercises, convert each angle in degrees to radians. Write the answer as a multiple of $\pi .$

:::exercise {fs-id1170572135605} type= 
PROBLEM:
$240\text{°}$
SOLUTION:
$\frac{4\pi}{3}\;\text{rad}$
:::

:::exercise {fs-id1170572455513} type= 
PROBLEM:
$15\text{°}$
:::

:::exercise {fs-id1170572482559} type= 
PROBLEM:
$−60\text{°}$
SOLUTION:
$\frac{\text{−}\pi}{3}$
:::

:::exercise {fs-id1170572451206} type= 
PROBLEM:
$−225\text{°}$
:::

:::exercise {fs-id1170572479016} type= 
PROBLEM:
$330\text{°}$
SOLUTION:
$\frac{11\pi}{6}\;\text{rad}$
:::
For the following exercises, convert each angle in radians to degrees.

:::exercise {fs-id1170572549226} type= 
PROBLEM:
$\frac{\pi}{2}\;\text{rad}$
:::

:::exercise {fs-id1170572483752} type= 
PROBLEM:
$\frac{7\pi}{6}\;\text{rad}$
SOLUTION:
$210\text{°}$
:::

:::exercise {fs-id1170572242141} type= 
PROBLEM:
$\frac{11\pi}{2}\;\text{rad}$
:::

:::exercise {fs-id1170572242837} type= 
PROBLEM:
$−3\pi \;\text{rad}$
SOLUTION:
$−540\text{°}$
:::

:::exercise {fs-id1170572447586} type= 
PROBLEM:
$\frac{5\pi}{12}\;\text{rad}$
:::
Evaluate the following functional values.

:::exercise {fs-id1170572213256} type= 
PROBLEM:
$\text{cos}(\frac{4\pi}{3})$
SOLUTION:
$−0.5$
:::

:::exercise {fs-id1170572363417} type= 
PROBLEM:
$\text{tan}(\frac{19\pi}{4})$
:::

:::exercise {fs-id1170572548544} type= 
PROBLEM:
$\text{sin}(-\frac{3\pi}{4})$
SOLUTION:
$-\frac{\sqrt{2}}{2}$
:::

:::exercise {fs-id1170572225097} type= 
PROBLEM:
$\text{sec}(\frac{\pi}{6})$
:::

:::exercise {fs-id1170572552426} type= 
PROBLEM:
$\text{sin}(\frac{\pi}{12})$
SOLUTION:
$\frac{\sqrt{3}-1}{2\sqrt{2}}$
:::

:::exercise {fs-id1170572481176} type= 
PROBLEM:
$\text{cos}(\frac{5\pi}{12})$
:::
For the following exercises, consider triangle *ABC*, a right triangle with a right angle at *C.* a. Find the missing side of the triangle. b. Find the six trigonometric function values for the angle at *A*. Where necessary, simplify to a fraction or round to three decimal places.

> IMAGE {img:fs-id1170572451086} src=../../media/CNX_Calc_Figure_01_03_201.jpg
> alt: An image of a triangle. The three corners of the triangle are labeled “A”, “B”, and “C”. Between the corner A and corner C is the side b. Between corner C and corner B is the side a. Between corner B and corner A is the side c. The angle of corner C is marked with a right triangle symbol. The angle of corner A is marked with an angle symbol.

:::exercise {fs-id1170572546980} type= 
PROBLEM:
$a=4,c=7$
SOLUTION:
a. $b=5.7$ b. $\text{sin}\;A=\frac{4}{7},\text{cos}\;A=\frac{5.7}{7},\text{tan}\;A=\frac{4}{5.7},\text{csc}\;A=\frac{7}{4},\text{sec}\;A=\frac{7}{5.7},\text{cot}\;A=\frac{5.7}{4}$
:::

:::exercise {fs-id1170572479699} type= 
PROBLEM:
$a=21,c=29$
:::

:::exercise {fs-id1170572242177} type= 
PROBLEM:
$a=85.3,b=125.5$
SOLUTION:
a. $c=151.7$ b. $\text{sin}\;A=0.5623,\text{cos}\;A=0.8273,\text{tan}\;A=0.6797,\text{csc}\;A=1.778,\text{sec}\;A=1.209,\text{cot}\;A=1.471$
:::

:::exercise {fs-id1170572482489} type= 
PROBLEM:
$b=40,c=41$
:::

:::exercise {fs-id1170572134816} type= 
PROBLEM:
$a=84,b=13$
SOLUTION:
a. $c=85$ b. $\text{sin}\;A=\frac{84}{85},\text{cos}\;A=\frac{13}{85},\text{tan}\;A=\frac{84}{13},\text{csc}\;A=\frac{85}{84},\text{sec}\;A=\frac{85}{13},\text{cot}\;A=\frac{13}{84}$
:::

:::exercise {fs-id1170572296851} type= 
PROBLEM:
$b=28,c=35$
:::
For the following exercises, $P$ is a point on the unit circle. a. Find the (exact) missing coordinate value of each point and b. find the values of the six trigonometric functions for the angle $\theta$ with a terminal side that passes through point $P.$ Rationalize denominators.

:::exercise {fs-id1170572452051} type= 
PROBLEM:
$P(\frac{7}{25},y),y>0$
SOLUTION:
a. $y=\frac{24}{25}$ b. $\text{sin}\;\theta =\frac{24}{25},\text{cos}\;\theta =\frac{7}{25},\text{tan}\;\theta =\frac{24}{7},\text{csc}\;\theta =\frac{25}{24},\text{sec}\;\theta =\frac{25}{7},\text{cot}\;\theta =\frac{7}{24}$
:::

:::exercise {fs-id1170572450965} type= 
PROBLEM:
$P(\frac{−15}{17},y),y<0$
:::

:::exercise {fs-id1170572552413} type= 
PROBLEM:
$P(x,\frac{\sqrt{7}}{3}),x<0$
SOLUTION:
a. $x=\frac{\text{−}\sqrt{2}}{3}$ b. $\text{sin}\;\theta =\frac{\sqrt{7}}{3},\text{cos}\;\theta =\frac{\text{−}\sqrt{2}}{3},\text{tan}\;\theta =\frac{\text{−}\sqrt{14}}{2},\text{csc}\;\theta =\frac{3\sqrt{7}}{7},\text{sec}\;\theta =\frac{−3\sqrt{2}}{2},\text{cot}\;\theta =\frac{\text{−}\sqrt{14}}{7}$
:::

:::exercise {fs-id1170572480647} type= 
PROBLEM:
$P(x,\frac{\text{−}\sqrt{15}}{4}),x>0$
:::
For the following exercises, simplify each expression by writing it in terms of sines and cosines, then simplify. The final answer does not have to be in terms of sine and cosine only.

:::exercise {fs-id1170572551228} type= 
PROBLEM:
${\text{tan}}^{2}x+\text{sin}\;x\;\text{csc}\;x$
SOLUTION:
${\text{sec}}^{2}x$
:::

:::exercise {fs-id1170572479497} type= 
PROBLEM:
$\text{sec}\;x\;\text{sin}\;x\;\text{cot}\;x$
:::

:::exercise {fs-id1170572479527} type= 
PROBLEM:
$\frac{{\text{tan}}^{2}x}{{\text{sec}}^{2}x}$
SOLUTION:
${\text{sin}}^{2}x$
:::

:::exercise {fs-id1170572482372} type= 
PROBLEM:
$\text{sec}\;x-\text{cos}\;x$
:::

:::exercise {fs-id1170572546085} type= 
PROBLEM:
${(1+\text{tan}\;\theta )}^{2}-2\;\text{tan}\;\theta$
SOLUTION:
${\text{sec}}^{2}\theta$
:::

:::exercise {fs-id1170572552249} type= 
PROBLEM:
$\text{sin}\;x(\text{csc}\;x-\text{sin}\;x)$
:::

:::exercise {fs-id1170572244458} type= 
PROBLEM:
$\frac{\text{cos}\;t}{\text{sin}\;t}+\frac{\text{sin}\;t}{1+\text{cos}\;t}$
SOLUTION:
$\frac{1}{\text{sin}\;t}(=\text{csc}\;t)$
:::

:::exercise {fs-id1170572169763} type= 
PROBLEM:
$\frac{1+{\text{tan}}^{2}\alpha}{1+{\text{cot}}^{2}\alpha}$
:::
For the following exercises, verify that each equation is an identity.

:::exercise {fs-id1170572434030} type= 
PROBLEM:
$\frac{\text{tan}\;\theta \;\text{cot}\;\theta}{\text{csc}\;\theta}=\text{sin}\;\theta$
:::

:::exercise {fs-id1170572434063} type= 
PROBLEM:
$\frac{{\text{sec}}^{2}\theta}{\text{tan}\;\theta}=\text{sec}\;\theta \;\text{csc}\;\theta$
:::

:::exercise {fs-id1170572479565} type= 
PROBLEM:
$\frac{\text{sin}\;t}{\text{csc}\;t}+\frac{\text{cos}\;t}{\text{sec}\;t}=1$
:::

:::exercise {fs-id1170572451036} type= 
PROBLEM:
$\frac{\text{sin}\;x}{\text{cos}\;x+1}+\frac{\text{cos}\;x-1}{\text{sin}\;x}=0$
:::

:::exercise {fs-id1170572481640} type= 
PROBLEM:
$\text{cot}\;γ+\text{tan}\;γ=\text{sec}\;γ\;\text{csc}\;γ$
:::

:::exercise {fs-id1170572479067} type= 
PROBLEM:
${\text{sin}}^{2}β+{\text{tan}}^{2}β+{\text{cos}}^{2}β={\text{sec}}^{2}β$
:::

:::exercise {fs-id1170572479426} type= 
PROBLEM:
$\frac{1}{1-\text{sin}\;\alpha}+\frac{1}{1+\text{sin}\;\alpha}=2{\text{sec}}^{2}\alpha$
:::

:::exercise {fs-id1170572481902} type= 
PROBLEM:
$\frac{\text{tan}\;\theta -\text{cot}\;\theta}{\text{sin}\;\theta \;\text{cos}\;\theta}={\text{sec}}^{2}\theta -{\text{csc}}^{2}\theta$
:::
For the following exercises, solve the trigonometric equations on the interval $0\le \theta <2\pi .$

:::exercise {fs-id1170572229620} type= 
PROBLEM:
$2\;\text{sin}\;\theta -1=0$
SOLUTION:
$\{\frac{\pi}{6},\frac{5\pi}{6}\}$
:::

:::exercise {fs-id1170572480794} type= 
PROBLEM:
$1+\text{cos}\;\theta =\frac{1}{2}$
:::

:::exercise {fs-id1170572141256} type= 
PROBLEM:
$2{\text{tan}}^{2}\theta =2$
SOLUTION:
$\{\frac{\pi}{4},\frac{3\pi}{4},\frac{5\pi}{4},\frac{7\pi}{4}\}$
:::

:::exercise {fs-id1170572453596} type= 
PROBLEM:
$4{\text{sin}}^{2}\theta -2=0$
:::

:::exercise {fs-id1170572141717} type= 
PROBLEM:
$\sqrt{3}\text{cot}\;\theta +1=0$
SOLUTION:
$\{\frac{2\pi}{3},\frac{5\pi}{3}\}$
:::

:::exercise {fs-id1170572296782} type= 
PROBLEM:
$3\;\text{sec}\;\theta -2\sqrt{3}=0$
:::

:::exercise {fs-id1170572130737} type= 
PROBLEM:
$2\;\text{cos}\;\theta \;\text{sin}\;\theta =\text{sin}\;\theta$
SOLUTION:
$\{0,\pi ,\frac{\pi}{3},\frac{5\pi}{3}\}$
:::

:::exercise {fs-id1170572210607} type= 
PROBLEM:
${\text{csc}}^{2}\theta +2\;\text{csc}\;\theta +1=0$
:::
For the following exercises, each graph is of the form $y=A\;\text{sin}\;Bx$ or $y=A\;\text{cos}\;Bx,$ where $B>0.$ Write the equation of the graph.

:::exercise {fs-id1170572147899} type= 
PROBLEM:

> IMAGE {img:fs-id1170572147903} src=../../media/CNX_Calc_Figure_01_03_202.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -5 to 5. The graph is of a curved wave function that starts at the point (-4, 0) and decreases until the point (-2, 4). After this point the function begins increasing until it hits the point (2, 4). After this point the function begins decreasing again. The x intercepts of the function on this graph are at (-4, 0), (0, 0), and (4, 0). The y intercept is at the origin.

SOLUTION:
$y=4\;\text{sin}(\frac{\pi}{4}x)$
:::

:::exercise {fs-id1170572550761} type= 
PROBLEM:

> IMAGE {img:fs-id1170572550765} src=../../media/CNX_Calc_Figure_01_03_203.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -5 to 5. The graph is of a curved wave function that starts at the point (-4, -2) and increases until the point (-3, 2). After this point the function decreases until it hits the point (-2, -2). After this point the function increases until it hits the point (-1, 2). After this point the function decreases until it hits the point (0, -2). After this point the function increases until it hits the point (1, 2). After this point the function decreases until it hits the point (2, -2). After this point the function increases until it hits the point (3, 2). After this point the function begins decreasing again. The x intercepts of the function on this graph are at (-3.5, 0), (-2.5, 0), (-1.5, 0), (-0.5, 0), (0.5, 0), (1.5, 0), (2.5, 0), and (3.5, 0). The y intercept is at the (0, -2).

:::

:::exercise {fs-id1170572367561} type= 
PROBLEM:

> IMAGE {img:fs-id1170572367565} src=../../media/CNX_Calc_Figure_01_03_204.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -5 to 5. The graph is of a curved wave function. There are many periods and only a few will be explained. The function begins decreasing at the point (-1, 1) and decreases until the point (-0.5, -1). After this point the function increases until it hits the point (0, 1). After this point the function decreases until it hits the point (0.5, -1). After this point the function increases until it hits the point (1, 1). After this point the function decreases again. The x intercepts of the function on this graph are at (-0.75, 0), (-0.25, 0), (0.25, 0), and (0.75, 0). The y intercept is at (0, 1).

SOLUTION:
$y=\text{cos}(2\pi x)$
:::

:::exercise {fs-id1170572173804} type= 
PROBLEM:

> IMAGE {img:fs-id1170572173808} src=../../media/CNX_Calc_Figure_01_03_205.jpg
> alt: An image of a graph. The x axis runs from -4 to 4 and the y axis runs from -5 to 5. The graph is of a curved wave function. There are many periods and only a few will be explained. The function begins decreasing at the point (-1.25, 0.75) and decreases until the point (-0.75, -0.75). After this point the function increases until it hits the point (0.25, 0.75). After this point the function decreases until it hits the point (0.25, -0.75). After this point the function increases until it hits the point (0.75, 0.75). After this point the function decreases again. The x intercepts of the function on this graph are at (-1, 0), (-0.5, 0), (0, 0), and (0.5, 0). The y intercept is at the origin.

:::
For the following exercises, find a. the amplitude, b. the period, and c. the phase shift with direction for each function.

:::exercise {fs-id1170572242235} type= 
PROBLEM:
$y=\text{sin}(x-\frac{\pi}{4})$
SOLUTION:
a. 1 b. $2\pi$ c. $\frac{\pi}{4}$ units to the right
:::

:::exercise {fs-id1170572481083} type= 
PROBLEM:
$y=3\;\text{cos}(2x+3)$
:::

:::exercise {fs-id1170572141216} type= 
PROBLEM:
$y=\frac{−1}{2}\text{sin}(\frac{1}{4}x)$
SOLUTION:
a. $\frac{1}{2}$ b. $8\pi$ c. No phase shift
:::

:::exercise {fs-id1170572242035} type= 
PROBLEM:
$y=2\;\text{cos}(x-\frac{\pi}{3})$
:::

:::exercise {fs-id1170572552175} type= 
PROBLEM:
$y=−3\;\text{sin}(\pi x+2)$
SOLUTION:
a. 3 b. $2$ c. $\frac{2}{\pi}$ units to the left
:::

:::exercise {fs-id1170572479852} type= 
PROBLEM:
$y=4\;\text{cos}(2x-\frac{\pi}{2})$
:::

:::exercise {fs-id1170572481411} type= 
PROBLEM:
**[T]** The diameter of a wheel rolling on the ground is 40 in. If the wheel rotates through an angle of $120\text{°},$ how many inches does it move? Approximate to the nearest whole inch.
SOLUTION:
Approximately 42 in.
:::

:::exercise {fs-id1170572481443} type= 
PROBLEM:
**[T]** Find the length of the arc intercepted by central angle $\theta$ in a circle of radius *r*. Round to the nearest hundredth.
a. $r=12.8$ cm, $\theta =\frac{5\pi}{6}$ rad b. $r=4.378$ cm, $\theta =\frac{7\pi}{6}$ rad c. $r=0.964$ cm, $\theta =50\text{°}$ d. $r=8.55$ cm, $\theta =325\text{°}$
:::

:::exercise {fs-id1170572433987} type= 
PROBLEM:
**[T]** As a point *P* moves around a circle, the measure of the angle changes. The measure of how fast the angle is changing is called *angular speed*, $\omega ,$ and is given by $\omega =\theta \text{/}t,$ where $\theta$ is in radians and *t* is time. Find the angular speed for the given data. Round to the nearest thousandth.
a. $\theta =\frac{7\pi}{4}\text{rad},t=10$ sec b. $\theta =\frac{3\pi}{5}\text{rad},t=8$ sec c. $\theta =\frac{2\pi}{9}\text{rad},t=1$ min d. $\theta =23.76\;\text{rad,}t=14$ min
SOLUTION:
a. 0.550 rad/sec b. 0.236 rad/sec c. 0.698 rad/min d. 1.697 rad/min
:::

:::exercise {fs-id1170572553992} type= 
PROBLEM:
**[T]** A total of 250,000 m<sup>2</sup> of land is needed to build a nuclear power plant. Suppose it is decided that the area on which the power plant is to be built should be circular.
a. Find the radius of the circular land area.
b. If the land area is to form a $45\text{°}$ sector of a circle instead of a whole circle, find the length of the curved side.
:::

:::exercise {fs-id1170572482018} type= 
PROBLEM:
**[T]** The area of an isosceles triangle with equal sides of length *x* is
$\frac{1}{2}{x}^{2}\text{sin}\;\theta ,$
where $\theta$ is the angle formed by the two sides. Find the area of an isosceles triangle with equal sides of length 8 in. and angle $\theta =5\pi \text{/}12$ rad.
SOLUTION:
$\approx 30.9{\;\text{in}}^{2}$
:::

:::exercise {fs-id1170572173743} type= 
PROBLEM:
**[T]** A particle travels in a circular path at a constant angular speed $\omega .$ The angular speed is modeled by the function $\omega =9|\text{cos}(\pi t-\pi \text{/}12)|.$ Determine the angular speed at $t=9$ sec.
:::

:::exercise {fs-id1170572546454} type= 
PROBLEM:
**[T]** An alternating current for outlets in a home has voltage given by the function
$V(t)=150\;\text{cos}\;368t,$
where *V* is the voltage in volts at time *t* in seconds.
a. Find the period of the function and interpret its meaning.
b. Determine the number of periods that occur when 1 sec has passed.
SOLUTION:
a. π/184; the voltage repeats every π/184 sec b. Approximately 59 periods
:::

:::exercise {fs-id1170572454376} type= 
PROBLEM:
**[T]** The number of hours of daylight in a northeast city is modeled by the function

$N(t)=12+3\;\text{sin}[\frac{2\pi}{365}(t-79)],$  {eq:fs-id1170572521755}

where *t* is the number of days after January 1.
a. Find the amplitude and period.
b. Determine the number of hours of daylight on the longest day of the year.
c. Determine the number of hours of daylight on the shortest day of the year.
d. Determine the number of hours of daylight 90 days after January 1.
e. Sketch the graph of the function for one period starting on January 1.
:::

:::exercise {fs-id1170572480235} type= 
PROBLEM:
**[T]** Suppose that $T=50+10\;\text{sin}[\frac{\pi}{12}(t-8)]$ is a mathematical model of the temperature (in degrees Fahrenheit) at *t* hours after midnight on a certain day of the week.
a. Determine the amplitude and period.
b. Find the temperature 7 hours after midnight.
c. At what time does $T=60\text{°}?$
d. Sketch the graph of $T$ over $0\le t\le 24.$
SOLUTION:
a. Amplitude = $10;\text{period}=\; 24$ b.  $47.4\;\text{°}F$ c. 14 hours later, or 2 p.m. d.

> IMAGE {img:fs-id1170572449509} src=../../media/CNX_Calc_Figure_01_03_207.jpg
> alt: An image of a graph. The x axis runs from 0 to 365 and is labeled “t, hours after midnight”. The y axis runs from 0 to 20 and is labeled “T, degrees in Fahrenheit”. The graph is of a curved wave function that starts at the approximate point (0, 41.3) and begins decreasing until the point (2, 40). After this point, the function increases until the point (14, 60). After this point, the function begins decreasing again.

:::

:::exercise {fs-id1170572449519} type= 
PROBLEM:
**[T]** The function $H(t)=8\;\text{sin}(\frac{\pi}{6}t)$ models the height *H* (in feet) of the tide *t* hours after midnight. Assume that $t=0$ is midnight.
a. Find the amplitude and period.
b. Graph the function over one period.
c. What is the height of the tide at 4:30 a.m.?
:::

## Glossary
- {def} **periodic function**: a function is periodic if it has a repeating pattern as the values of $x$ move from left to right
- {def} **radians**: for a circular arc of length $s$ on a circle of radius 1, the radian measure of the associated angle $\theta$ is $s$
- {def} **trigonometric functions**: functions of an angle defined as ratios of the lengths of the sides of a right triangle
- {def} **trigonometric identity**: an equation involving trigonometric functions that is true for all angles $\theta$ for which the functions in the equation are defined

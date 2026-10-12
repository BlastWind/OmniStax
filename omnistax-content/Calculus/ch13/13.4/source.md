# Motion in Space

## Learning Objectives {section:learning-objectives}
- Describe the velocity and acceleration vectors of a particle moving in space.
- Explain the tangential and normal components of acceleration.
- State Kepler’s laws of planetary motion.

We have now seen how to describe curves in the plane and in space, and how to determine their properties, such as arc length and curvature. All of this leads to the main goal of this chapter, which is the description of motion along plane curves and space curves. We now have all the tools we need; in this section, we put these ideas together and look at how to use them.

## Motion Vectors in the Plane and in Space
Our starting point is using {index:vector-valued functions} to represent the position of an object as a function of time. All of the following material can be applied either to curves in the plane or to space curves. For example, when we look at the orbit of the planets, the curves defining these orbits all lie in a plane because they are elliptical. However, a particle traveling along a helix moves on a curve in three dimensions.

:::note [definition] Definition
Let $\textbf{r}(t)$ be a twice-differentiable vector-valued function of the parameter *t* that represents the position of an object as a function of time. The {term:velocity vector} $\textbf{v}(t)$ of the object is given by

$$ \text{Velocity}=\textbf{v}(t)=\mathbf{{r}^{'}}(t). $$  {eq:fs-id1169738144149}

The {term:acceleration vector} $\textbf{a}(t)$ is defined to be

$$ \text{Acceleration}=\textbf{a}(t)=\mathbf{{v}^{'}}(t)=\mathbf{\textbf{r}''}(t). $$  {eq:fs-id1169738166350}

The *speed* is defined to be

$$ \text{Speed}=v(t)=\| \textbf{v}(t)\| =\| \mathbf{{r}^{'}}(t)\| =\frac{ds}{dt}. $$  {eq:fs-id1169737947455}

:::
Since $\textbf{r}(t)$ can be in either two or three dimensions, these vector-valued functions can have either two or three components. In two dimensions, we define $\textbf{r}(t)=x(t)\;\textbf{i}+y(t)\;\textbf{j}$ and in three dimensions $\textbf{r}(t)=x(t)\;\textbf{i}+y(t)\;\textbf{j}+z(t)\;\textbf{k}.$ Then the velocity, acceleration, and speed can be written as shown in the following table.

> TABLE {tab:fs-id1169738011716} cols=3
> title: Formulas for Position, Velocity, Acceleration, and Speed
> summary: This is a table with three columns and five rows. The first row is a header row, and contains the labels Quantity, Two Dimensions, and Three Dimensions. The second row contains the entries Position, r(t) equals x(t)i + y(t)j, and r(t) equals x(t)i + y(t)j +z(t)k. The third row contains the entries Velocity, v(t) equals x’(t)i + y’(t)j, and v(t) equals x’(t)i = y’(t)j + z’(t)k. The fourth row contains the entries Acceleration, a(t) equals x’’(t)i + y’’(t)j, and a(t) equals x’’(t)i + y’’(t)j + z’’(t)k. The fifth row contains the entries Speed, v(t) equals the square root of ((x’(t))squared + (y’(t))squared), and v(t) equals the square root of ((x’(t))squared + (y’(t))squared + (z’(t))squared).

| **Quantity** | **Two Dimensions** | **Three Dimensions** |
| --- | --- | --- |
| Position | $\textbf{r}(t)=x(t)\;\textbf{i}+y(t)\;\textbf{j}$ | $\textbf{r}(t)=x(t)\;\textbf{i}+y(t)\;\textbf{j}+z(t)\;\textbf{k}$ |
| Velocity | $\textbf{v}(t)={x}^{'}(t)\;\textbf{i}+{y}^{'}(t)\;\textbf{j}$ | $\textbf{v}(t)={x}^{'}(t)\;\textbf{i}+{y}^{'}(t)\;\textbf{j}+{z}^{'}(t)\;\textbf{k}$ |
| Acceleration | $\textbf{a}(t)={x}^{''}(t)\;\textbf{i}+{y}^{''}(t)\;\textbf{j}$ | $\textbf{a}(t)={x}^{''}(t)\;\textbf{i}+{y}^{''}(t)\;\textbf{j}+{z}^{''}(t)\;\textbf{k}$ |
| Speed | $v(t)=\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}}$ | $v(t)=\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}+{({z}^{'}(t))}^{2}}$ |

:::example {ex:fs-id1169737160800} Studying Motion Along a Parabola

:::exercise {fs-id1169738184590} type= 
PROBLEM:
A particle moves in a parabolic path defined by the vector-valued function $\textbf{r}(t)={t}^{2}\textbf{i}+\sqrt{5-{t}^{2}}\textbf{j},$ where *t* measures time in seconds.
a. Find the velocity, acceleration, and speed as functions of time.
b. Sketch the curve along with the velocity vector at time $t=1.$
SOLUTION:
a. We use [ref:fs-id1169738144149], [ref:fs-id1169738166350], and [ref:fs-id1169737947455]:

$\begin{array}{rll}\textbf{v}(t) & = & \mathbf{{r}^{'}}(t)=2t\;\textbf{i}-\frac{t}{\sqrt{5-{t}^{2}}}\textbf{j} \\ \textbf{a}(t) & = & \mathbf{{v}^{'}}(t)=2\textbf{i}-5{(5-{t}^{2})}^{-\frac{3}{2}}\textbf{j} \\ v(t) & = & \| \mathbf{{r}^{'}}(t)\| \\ & = & \sqrt{{(2t)}^{2}+{(-\frac{t}{\sqrt{5-{t}^{2}}})}^{2}} \\ & = & \sqrt{4{t}^{2}+\frac{{t}^{2}}{5-{t}^{2}}} \\ & = & \sqrt{\frac{21{t}^{2}-4{t}^{4}}{5-{t}^{2}}}.\end{array}$  {eq:fs-id1169738188149}

b. The graph of $\textbf{r}(t)={t}^{2}\textbf{i}+\sqrt{5-{t}^{2}}\textbf{j}$ is a portion of a parabola ([ref:CNX_Calc_Figure_13_04_001]). The velocity vector at $t=1$ is

$\textbf{v}(1)=\mathbf{{r}^{'}}(1)=2(1)\;\textbf{i}-\frac{1}{\sqrt{5-{(1)}^{2}}}\textbf{j}=2\textbf{i}-\frac{1}{2}\textbf{j}$  {eq:fs-id1169738147519}

and the acceleration vector at $t=1$ is

$\textbf{a}(1)=\mathbf{{v}^{'}}(1)=2\textbf{i}-5{(5-{(1)}^{2})}^{\text{−}3\text{/}2}\textbf{j}=2\textbf{i}-\frac{5}{8}\textbf{j}.$  {eq:fs-id1169737822054}

Notice that the velocity vector is tangent to the path, as is always the case.

> FIGURE {fig:CNX_Calc_Figure_13_04_001} src=../../media/CNX_Calc_Figure_13_04_001.jpg
> alt: This figure is the graph of a curve in the first quadrant. The curve begins on the y axis slightly above y=2 and decreases to the x-axis at x=5. On the curve is a tangent vector labeled “v(1)” and is pointing towards the x-axis.
> caption: This graph depicts the velocity vector at time $t=1$ for a particle moving in a parabolic path.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738215904} type= 
PROBLEM:
A particle moves in a path defined by the vector-valued function $\textbf{r}(t)=({t}^{2}-3t)\;\textbf{i}+(2t-4)\;\textbf{j}+(t+2)\textbf{k},$ where *t* measures time in seconds and where distance is measured in feet. Find the velocity, acceleration, and speed as functions of time.
SOLUTION:
$\begin{array}{l}\textbf{v}(t)=\mathbf{{r}^{'}}(t)=(2t-3)\;\textbf{i}+2\textbf{j}+\textbf{k} \\ \textbf{a}(t)=\mathbf{{v}^{'}}(t)=2\textbf{i} \\ v(t)=\| \mathbf{{r}^{'}}(t)\| =\sqrt{{(2t-3)}^{2}+{2}^{2}+{1}^{2}}=\sqrt{4{t}^{2}-12t+14}\end{array}$
The units for velocity and speed are feet per second, and the units for acceleration are feet per second squared.
COMMENTARY: Hint
Use [ref:fs-id1169738144149], [ref:fs-id1169738166350], and [ref:fs-id1169737947455].
:::
:::
To gain a better understanding of the velocity and acceleration vectors, imagine you are driving along a curvy road. If you do not turn the steering wheel, you would continue in a straight line and run off the road. The speed at which you are traveling when you run off the road, coupled with the direction, gives a vector representing your velocity, as illustrated in the following figure.

> FIGURE {fig:CNX_Calc_Figure_13_04_002} src=../../media/CNX_Calc_Figure_13_04_002.jpg
> alt: This figure represents a curving road. On the road is a car. At the car there are two vectors. The first vector is tangent to the back of the car. The second vector comes out of the front of the car in the direction the car is heading. Both of the vectors are labeled “velocity vectors”.
> caption: At each point along a road traveled by a car, the velocity vector of the car is tangent to the path traveled by the car.

However, the fact that you must turn the steering wheel to stay on the road indicates that your velocity is always changing (even if your speed is not) because your *direction* is constantly changing to keep you on the road. As you turn to the right, your acceleration vector also points to the right. As you turn to the left, your acceleration vector points to the left. This indicates that your velocity and acceleration vectors are constantly changing, regardless of whether your actual speed varies ([ref:CNX_Calc_Figure_13_04_003]).

> FIGURE {fig:CNX_Calc_Figure_13_04_003} src=../../media/CNX_Calc_Figure_13_04_003.jpg
> alt: This figure is a car. The path the car is traveling is an increasing curve represented by a dotted line. The center of the car is labeled “tsub0” on the curve. From this point there are two vectors that are orthogonal to each other. The first vector is asubt and the second vector is asubn. In between these two vectors is a vector labeled “a”. It has angle theta between vector a and asubt.
> caption: The dashed line represents the trajectory of an object (a car, for example). The acceleration vector points toward the inside of the turn at all times.

## Components of the Acceleration Vector
We can combine some of the concepts discussed in [Arc Length and Curvature](module:m53919) with the acceleration vector to gain a deeper understanding of how this vector relates to motion in the plane and in space. Recall that the unit tangent vector **T** and the unit normal vector **N** form an osculating plane at any point *P* on the curve defined by a vector-valued function $\textbf{r}(t).$ The following theorem shows that the acceleration vector $\textbf{a}(t)$ lies in the osculating plane and can be written as a linear combination of the unit tangent and the unit normal vectors.

:::note [theorem] The Plane of the Acceleration Vector
The acceleration vector $\textbf{a}(t)$ of an object moving along a curve traced out by a twice-differentiable function $\textbf{r}(t)$ lies in the plane formed by the unit tangent vector $\textbf{T}(t)$ and the principal unit normal vector $\textbf{N}(t)$ to *C.* Furthermore,

$\textbf{a}(t)={v}^{'}(t)\;\textbf{T}(t)+{[v(t)]}^{2}κ\;\textbf{N}(t).$  {eq:fs-id1169737833100}

Here, $v(t)$ is the speed of the object and $κ$ is the curvature of *C* traced out by $\textbf{r}(t).$
:::

### Proof
Because $\textbf{v}(t)=\mathbf{{r}^{'}}(t)$ and $\textbf{T}(t)=\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|},$ we have $\textbf{v}(t)=\| \mathbf{{r}^{'}}(t)\| \textbf{T}(t)=v(t)\;\textbf{T}(t).$ Now we differentiate this equation:

$\textbf{a}(t)=\mathbf{{v}^{'}}(t)=\frac{d}{dt}(v(t)\;\textbf{T}(t))={v}^{'}(t)\;\textbf{T}(t)+v(t)\;\mathbf{{T}^{'}}(t).$  {eq:fs-id1169738008747}

Since $\textbf{N}(t)=\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|},$ we know $\mathbf{{T}^{'}}(t)=\| \mathbf{{T}^{'}}(t)\| \textbf{N}(t),$ so

$\textbf{a}(t)={v}^{'}(t)\;\textbf{T}(t)+v(t)\| \mathbf{{T}^{'}}(t)\| \textbf{N}(t).$  {eq:fs-id1169737301577}

A formula for curvature is $κ=\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|},$ so $\| \mathbf{{T}^{'}}(t)\| =κ\| \mathbf{{r}^{'}}(t)\| =κv(t).$ This gives $\textbf{a}(t)={v}^{'}(t)\;\textbf{T}(t)+κ{(v(t))}^{2}\textbf{N}(t).$
□
The coefficients of $\textbf{T}(t)$ and $\textbf{N}(t)$ are referred to as the {term:tangential component of acceleration} and the {term:normal component of acceleration}, respectively. We write ${a}_{\textbf{T}}$ to denote the tangential component and ${a}_{\textbf{N}}$ to denote the normal component.

:::note [theorem] Tangential and Normal Components of Acceleration
Let $\textbf{r}(t)$ be a vector-valued function that denotes the position of an object as a function of time. Then $\textbf{a}(t)=\mathbf{\textbf{r}''}(t)$ is the acceleration vector. The tangential and normal components of acceleration ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ are given by the formulas

$$ {a}_{\textbf{T}}=\textbf{a}\cdot \textbf{T}=\frac{\textbf{v}\cdot \textbf{a}}{\| \textbf{v}\|} $$  {eq:fs-id1169738185179}

and

$$ {a}_{\textbf{N}}=\textbf{a}\cdot \textbf{N}=\frac{\| \textbf{v}\;\times \;\textbf{a}\|}{\| \textbf{v}\|}=\sqrt{{\| \textbf{a}\|}^{2}-{a}_{\textbf{T}}^{2}}. $$  {eq:fs-id1169738191530}

These components are related by the formula

$$ \textbf{a}(t)={a}_{\textbf{T}}\textbf{T}(t)+{a}_{\textbf{N}}\textbf{N}(t). $$  {eq:fs-id1169737263883}

Here $\textbf{T}(t)$ is the unit tangent vector to the curve defined by $\textbf{r}(t),$ and $\textbf{N}(t)$ is the unit normal vector to the curve defined by $\textbf{r}(t).$
:::
The normal component of acceleration is also called the *centripetal component of acceleration* or sometimes the *radial component of acceleration*. To understand centripetal acceleration, suppose you are traveling in a car on a circular track at a constant speed. Then, as we saw earlier, the acceleration vector points toward the center of the track at all times. As a rider in the car, you feel a pull toward the *outside* of the track because you are constantly turning. This sensation acts in the opposite direction of centripetal acceleration. The same holds true for noncircular paths. The reason is that your body tends to travel in a straight line and resists the force resulting from acceleration that push it toward the side. Note that at point *B* in [ref:CNX_Calc_Figure_13_04_004] the acceleration vector is pointing backward. This is because the car is decelerating as it goes into the curve.

> FIGURE {fig:CNX_Calc_Figure_13_04_004} src=../../media/CNX_Calc_Figure_13_04_004.jpg
> alt: This figure has a curve representing the path of a car. The curve decreases and increases. There are two circles along the path The first circle has point A where the curve meets the circle. At point A there are three vectors. The first vector is asubt and is tangent to the curve at A. The second vector is asubr and is orthogonal to vector asubt. In between these vectors is vector a. The second circle has point B where the curve meets the circle. At point A there are three vectors. The first vector is asubt and is tangent to the curve at A. The second vector is asubr and is orthogonal to vector asubt. In between these vectors is vector a.
> caption: The tangential and normal components of acceleration can be used to describe the acceleration vector.

The tangential and normal unit vectors at any given point on the curve provide a frame of reference at that point. The tangential and normal components of acceleration are the projections of the acceleration vector onto **T** and **N**, respectively.

:::example {ex:fs-id1169737857156} Finding Components of Acceleration

:::exercise {fs-id1169737234330} type= 
PROBLEM:
A particle moves in a path defined by the vector-valued function $\textbf{r}(t)={t}^{2}\textbf{i}+(2t-3)\;\textbf{j}+(3{t}^{2}-3t)\;\textbf{k},$ where *t* measures time in seconds and distance is measured in feet.
a. Find ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ as functions of *t*.
b. Find ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ at time $t=2.$
SOLUTION:
a. Let’s start with [ref:fs-id1169738185179]:

$\begin{array}{rll}\textbf{v}(t) & = & \mathbf{{r}^{'}}(t)=2t\;\textbf{i}+2\textbf{j}+(6t-3)\;\textbf{k} \\ \textbf{a}(t) & = & \mathbf{{v}^{'}}(t)=2\textbf{i}+6\textbf{k} \\ {a}_{\textbf{T}} & = & \frac{\textbf{v}\cdot \textbf{a}}{\| \textbf{v}\|} \\ & = & \frac{(2t\;\textbf{i}+2\textbf{j}+(6t-3)\;\textbf{k})\cdot (2\textbf{i}+6\textbf{k})}{\| 2t\;\textbf{i}+2\textbf{j}+(6t-3)\;\textbf{k}\|} \\ & = & \frac{4t+6(6t-3)}{\sqrt{{(2t)}^{2}+{2}^{2}+{(6t-3)}^{2}}} \\ & = & \frac{40t-18}{\sqrt{40{t}^{2}-36t+13}}.\end{array}$  {eq:fs-id1169738194389}

Then we apply [ref:fs-id1169738191530]:

$\begin{array}{rl}{a}_{\textbf{N}} & =\sqrt{{\| \textbf{a}\|}^{2}-{a\;\textbf{T}}^{2}} \\ & =\sqrt{{\| 2\textbf{i}+6\textbf{k}\|}^{2}-{(\frac{40t-18}{\sqrt{40{t}^{2}-36t+13}})}^{2}} \\ & =\sqrt{4+36-\frac{{(40t-18)}^{2}}{40{t}^{2}-36t+13}} \\ & =\sqrt{\frac{40(40{t}^{2}-36t+13)-(1600{t}^{2}-1440t+324)}{40{t}^{2}-36t+13}} \\ & =\sqrt{\frac{196}{40{t}^{2}-36t+13}} \\ & =\frac{14}{\sqrt{40{t}^{2}-36t+13}}.\end{array}$  {eq:fs-id1169737413633}

b. We must evaluate each of the answers from part a. at $t=2\text{:}$

$\begin{array}{rll}{a}_{\textbf{T}}(2) & = & \frac{40(2)-18}{\sqrt{40{(2)}^{2}-36(2)+13}} \\ & = & \frac{80-18}{\sqrt{160-72+13}}=\frac{62}{\sqrt{101}} \\ {a}_{\textbf{N}}(2) & = & \frac{14}{\sqrt{40{(2)}^{2}-36(2)+13}} \\ & = & \frac{14}{\sqrt{160-72+13}}=\frac{14}{\sqrt{101}}.\end{array}$  {eq:fs-id1169738072962}

The units of acceleration are feet per second squared, as are the units of the normal and tangential components of acceleration.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737897825} type= 
PROBLEM:
An object moves in a path defined by the vector-valued function $\textbf{r}(t)=4t\;\textbf{i}+{t}^{2}\textbf{j},$ where *t* measures time in seconds.
a. Find ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ as functions of *t*.
b. Find ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ at time $t=−3.$
SOLUTION:
a. $\begin{array}{lll}\text{v}(t) & = & {r}^{'}(t)=4\text{i}+2t\;\text{j} \\ \text{a}(t) & = & {v}^{'}(t)=2\text{j} \\ {a}_{\textbf{T}} & = & \frac{2t}{\sqrt{{t}^{2}+4}},{a}_{\textbf{N}}=\frac{4}{\sqrt{4+{t}^{2}}}\end{array}$
b. ${a}_{\textbf{T}}(−3)=-\frac{6\sqrt{13}}{13},{a}_{\textbf{N}}(−3)=\frac{2\sqrt{13}}{13}$
COMMENTARY: Hint
Use [ref:fs-id1169738185179] and [ref:fs-id1169738191530].
:::
:::

## Projectile Motion
Now let’s look at an application of vector functions. In particular, let’s consider the effect of gravity on the motion of an object as it travels through the air, and how it determines the resulting trajectory of that object. In the following, we ignore the effect of air resistance. This situation, with an object moving with an initial velocity but with no forces acting on it other than gravity, is known as {term:projectile motion}. It describes the motion of objects from golf balls to baseballs, and from arrows to cannonballs.
First we need to choose a coordinate system. If we are standing at the origin of this coordinate system, then we choose the positive *y*-axis to be up, the negative *y-*axis to be down, and the positive *x-*axis to be forward (i.e., away from the thrower of the object). The effect of gravity is in a downward direction, so Newton’s second law tells us that the force on the object resulting from gravity is equal to the mass of the object times the acceleration resulting from to gravity, or ${F}_{g}=mg,$ where ${F}_{g}$ represents the force from gravity and *g* represents the acceleration resulting from gravity at Earth’s surface. The value of *g* in the English system of measurement is approximately 32 ft/sec<sup>2</sup> and it is approximately 9.8 m/sec<sup>2</sup> in the metric system. This is the only force acting on the object. Since gravity acts in a downward direction, we can write the force resulting from gravity in the form ${F}_{g}=\text{−}mg\;\textbf{j},$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_13_04_005} src=../../media/CNX_Calc_Figure_13_04_005.jpg
> alt: This figure is a ball falling in a vertical path. The ball is at the top at the initial position. From the ball a vector is drawn vertically downward labeled “acceleration”. The vertical line is labeled “distance”. At the bottom of the line it is labeled “final position”. There is also grass at the bottom of the figure.
> caption: An object is falling under the influence of gravity.

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_projectile) for a video showing projectile motion.
:::
Newton’s second law also tells us that $F=m\;\textbf{a},$ where **a** represents the acceleration vector of the object. This force must be equal to the force of gravity at all times, so we therefore know that

$\begin{array}{rll}F & = & {F}_{g} \\ m\;\textbf{a} & = & \text{−}mg\;\textbf{j} \\ \textbf{a} & = & \text{−}g\;\textbf{j}.\end{array}$  {eq:fs-id1169737410820}

Now we use the fact that the acceleration vector is the first derivative of the velocity vector. Therefore, we can rewrite the last equation in the form

$\mathbf{{v}^{'}}(t)=\text{−}g\;\textbf{j}.$  {eq:fs-id1169738083871}

By taking the antiderivative of each side of this equation we obtain

$\begin{array}{rl}\textbf{v}(t) & ={\displaystyle \int \text{−}g\;\textbf{j}dt} \\ & =\text{−}gt\;\textbf{j}+{\textbf{C}}_{1}\end{array}$  {eq:fs-id1169737815228}

for some constant vector ${\textbf{C}}_{1}.$ To determine the value of this vector, we can use the velocity of the object at a fixed time, say at time $t=0.$ We call this velocity the *initial velocity*: $\textbf{v}(0)={\textbf{v}}_{0}.$ Therefore, $\textbf{v}(0)=\text{−}g(0)\;\textbf{j}+{\textbf{C}}_{1}={\textbf{v}}_{0}$ and ${\textbf{C}}_{1}={\textbf{v}}_{0}.$ This gives the velocity vector as $\textbf{v}(t)=\text{−}gt\;\textbf{j}+{\textbf{v}}_{0}.$
Next we use the fact that velocity $\textbf{v}(t)$ is the derivative of position $\textbf{s}(t).$ This gives the equation

$\mathbf{{s}^{'}}(t)=\text{−}gt\;\textbf{j}+{\textbf{v}}_{0}.$  {eq:fs-id1169737844263}

Taking the antiderivative of both sides of this equation leads to

$\begin{array}{rl}\textbf{s}(t) & ={\displaystyle \int \text{−}gt\;\textbf{j}+{\textbf{v}}_{0}dt} \\ & =-\frac{1}{2}g{t}^{2}\textbf{j}+{\textbf{v}}_{0}t+{\textbf{C}}_{2},\end{array}$  {eq:fs-id1169738072504}

with another unknown constant vector ${\textbf{C}}_{2}.$ To determine the value of ${\textbf{C}}_{2},$ we can use the position of the object at a given time, say at time $t=0.$ We call this position the *initial position*: $\textbf{s}(0)={\textbf{s}}_{0}.$ Therefore, $\textbf{s}(0)=\text{−}(1\text{/}2)g{(0)}^{2}\textbf{j}+{\textbf{v}}_{0}(0)+{\textbf{C}}_{2}={\textbf{s}}_{0}$ and ${\textbf{C}}_{2}={\textbf{s}}_{0}.$ This gives the position of the object at any time as

$\textbf{s}(t)=-\frac{1}{2}g{t}^{2}\textbf{j}+{\textbf{v}}_{0}t+{\textbf{s}}_{0}.$  {eq:fs-id1169737492856}

Let’s take a closer look at the initial velocity and initial position. In particular, suppose the object is thrown upward from the origin at an angle $\theta$ to the horizontal, with initial speed ${v}_{0}.$ How can we modify the previous result to reflect this scenario? First, we can assume it is thrown from the origin. If not, then we can move the origin to the point from where it is thrown. Therefore, ${\textbf{s}}_{0}=\mathbf{0},$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_13_04_006} src=../../media/CNX_Calc_Figure_13_04_006.jpg
> alt: This figure has an upside down parabolic curve representing projectile motion. The figure is labeled “constant horizontal velocity; constant vertical acceleration”. The curve is in the first quadrant beginning and ending on the x-axis. The height of the curve is labeled “H”. The distance on the x-axis is labeled “R”. Angle theta represents the direction of the projectile at the origin. Five points are labeled on the graph with vectors. The vectors are labeled “v” with subscripts representing directions.
> caption: Projectile motion when the object is thrown upward at an angle $\theta .$ The horizontal motion is at constant velocity and the vertical motion is at constant acceleration.

We can rewrite the initial velocity vector in the form ${\textbf{v}}_{0}={v}_{0}\text{cos}\;\theta \;\textbf{i}+{v}_{0}\text{sin}\;\theta \;\textbf{j}.$ Then the equation for the position function $\textbf{s}(t)$ becomes

$\begin{array}{rl}\textbf{s}(t) & =-\frac{1}{2}g{t}^{2}\;\textbf{j}+{v}_{0}t\;\text{cos}\;\theta \;\textbf{i}+{v}_{0}t\;\text{sin}\;\theta \;\textbf{j} \\ & ={v}_{0}t\;\text{cos}\;\theta \;\textbf{i}+{v}_{0}t\;\text{sin}\;\theta \;\textbf{j}-\frac{1}{2}g{t}^{2}\;\textbf{j} \\ & ={v}_{0}t\;\text{cos}\;\theta \;\textbf{i}+({v}_{0}t\;\text{sin}\;\theta \;-\frac{1}{2}g{t}^{2})\;\textbf{j}.\end{array}$  {eq:fs-id1169738165365}

The coefficient of **i** represents the horizontal component of $\textbf{s}(t)$ and is the horizontal distance of the object from the origin at time *t.* The maximum value of the horizontal distance (measured at the same initial and final altitude) is called the range *R*. The coefficient of **j** represents the vertical component of $\textbf{s}(t)$ and is the altitude of the object at time *t.* The maximum value of the vertical distance is the height *H*.

:::example {ex:fs-id1169738125890} Motion of a Cannonball

:::exercise {fs-id1169738125893} type= 
PROBLEM:
During an Independence Day celebration, a cannonball is fired from a cannon on a cliff toward the water. The cannon is aimed at an angle of 30° above horizontal and the initial speed of the cannonball is $600\;\text{ft/sec}\text{.}$ The cliff is 100 ft above the water ([ref:CNX_Calc_Figure_13_04_007]).
a. Find the maximum height of the cannonball.
b. How long will it take for the cannonball to splash into the sea?
c. How far out to sea will the cannonball hit the water?

> FIGURE {fig:CNX_Calc_Figure_13_04_007} src=../../media/CNX_Calc_Figure_13_04_007.jpg
> alt: This figure has a cannon at the edge of a cliff aimed upwards. There is a cannonball coming out of the cannon. The path of the cannonball is an upside down parabola represented with a broken line. The maximum height is labeled with “?”. The height of the cliff is 100 feet.
> caption: The flight of a cannonball (ignoring air resistance) is projectile motion.

SOLUTION:
We use the equation

$\textbf{s}(t)={v}_{0}t\;\text{cos}\;\theta \;\textbf{i}+({v}_{0}t\;\text{sin}\;\theta -\frac{1}{2}g{t}^{2})\;\textbf{j}$  {eq:fs-id1169737823246}

with $\theta =30\text{°},$ $g=32{\;\text{ft/sec}}^{2},$ and ${v}_{0}=600$ ft/sec. Then the position equation becomes

$\begin{array}{rl}\textbf{s}(t) & =600t(\text{cos}\;30)\;\textbf{i}+(600t\;\text{sin}\;30-\frac{1}{2}(32){t}^{2})\;\textbf{j} \\ & =300t\sqrt{3}\textbf{i}+(300t-16{t}^{2})\;\textbf{j}.\end{array}$  {eq:fs-id1169737285506}

a. The cannonball reaches its maximum height when the vertical component of its velocity is zero, because the cannonball is neither rising nor falling at that point. The velocity vector is

$\begin{array}{rl}\textbf{v}(t) & =\mathbf{{s}^{'}}(t) \\ & =300\sqrt{3}\textbf{i}+(300-32t)\;\textbf{j}.\end{array}$  {eq:fs-id1169737948176}

Therefore, the vertical component of velocity is given by the expression $300-32t.$ Setting this expression equal to zero and solving for *t* gives $t=9.375$ sec. The height of the cannonball at this time is given by the vertical component of the position vector, evaluated at $t=9.375.$

$\begin{array}{rl}\textbf{s}(9.375) & =300(9.375)\sqrt{3}\textbf{i}+(300(9.375)-16{(9.375)}^{2})\;\textbf{j} \\ & =4871.39\textbf{i}+1406.25\textbf{j}\end{array}$  {eq:fs-id1169737212940}

Therefore, the maximum height of the cannonball is 1406.39 ft above the cannon, or 1506.39 ft above sea level.
b. When the cannonball lands in the water, it is 100 ft below the cannon. Therefore, the vertical component of the position vector is equal to $−100.$ Setting the vertical component of $\textbf{s}(t)$ equal to $−100$ and solving, we obtain

$\begin{array}{rll} \\ 300t-16{t}^{2} & = & −100 \\ 16{t}^{2}-300t-100 & = & 0 \\ 4{t}^{2}-75t-25 & = & 0 \\ t & = & \frac{75\pm \sqrt{{(−75)}^{2}-4(4)(−25)}}{2(4)} \\ & = & \frac{75\pm \sqrt{6025}}{8} \\ & = & \frac{75\pm 5\sqrt{241}}{8}.\end{array}$  {eq:fs-id1169738132539}

The positive value of *t* that solves this equation is approximately 19.08. Therefore, the cannonball hits the water after approximately 19.08 sec.
c. To find the distance out to sea, we simply substitute the answer from part (b) into $\textbf{s}(t)\text{:}$

$\begin{array}{rl}\textbf{s}(19.08) & =300(19.08)\sqrt{3}\textbf{i}+(300(19.08)-16{(19.08)}^{2})\;\textbf{j} \\ & =9914.26\;\textbf{i}-100.7424\;\textbf{j}.\end{array}$  {eq:fs-id1169738079891}

Therefore, the ball hits the water about 9914.26 ft away from the base of the cliff. Notice that the vertical component of the position vector is very close to $−100,$ which tells us that the ball just hit the water. Note that 9914.26 feet is not the true range of the cannon since the cannonball lands in the ocean at a location below the cannon. The range of the cannon would be determined by finding how far out the cannonball is when its height is 100 ft above the water (the same as the altitude of the cannon).
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737301248} type= 
PROBLEM:
An archer fires an arrow at an angle of 40° above the horizontal with an initial speed of 98 m/sec. The height of the archer is 171.5 cm. Find the horizontal distance the arrow travels before it hits the ground.
SOLUTION:
967.15 m
COMMENTARY: Hint
The equation for the position vector needs to account for the height of the archer in meters.
:::
:::
One final question remains: In general, what is the maximum distance a projectile can travel, given its initial speed? To determine this distance, we assume the projectile is fired from ground level and we wish it to return to ground level. In other words, we want to determine an equation for the range. In this case, the equation of projectile motion is

$\textbf{s}(t)={v}_{0}t\;\text{cos}\;\theta \;\textbf{i}+({v}_{0}t\;\text{sin}\;\theta -\frac{1}{2}g{t}^{2})\;\textbf{j}.$  {eq:fs-id1169737183988}

Setting the second component equal to zero and solving for *t* yields

$\begin{array}{rll} \\ {v}_{0}t\;\text{sin}\;\theta -\frac{1}{2}g{t}^{2} & = & 0 \\ t({v}_{0}\text{sin}\;\theta -\frac{1}{2}gt) & = & 0.\end{array}$  {eq:fs-id1169737406976}

Therefore, either $t=0$ or $t=\frac{2{v}_{0}\text{sin}\;\theta}{g}.$ We are interested in the second value of *t*, so we substitute this into $\textbf{s}(t),$ which gives

$\begin{array}{rl}\textbf{s}(\frac{2{v}_{0}\text{sin}\;\theta}{g}) & ={v}_{0}(\frac{2{v}_{0}\text{sin}\;\theta}{g})\text{cos}\;\theta \;\textbf{i}+({v}_{0}(\frac{2{v}_{0}\text{sin}\;\theta}{g})\text{sin}\;\theta -\frac{1}{2}g{(\frac{2{v}_{0}\text{sin}\;\theta}{g})}^{2})\;\textbf{j} \\ & =(\frac{2{v}_{0}^{2}\text{sin}\;\theta \;\text{cos}\;\theta}{g})\;\textbf{i} \\ & =\frac{{v}_{0}^{2}\text{sin}\;2\theta}{g}\textbf{i}.\end{array}$  {eq:fs-id1169738218086}

Thus, the expression for the range of a projectile fired at an angle $\theta$ is

$R=\frac{{v}_{0}^{2}\text{sin}\;2\theta}{g}\textbf{i}.$  {eq:fs-id1169737389226}

The only variable in this expression is $\theta .$ To maximize the distance traveled, take the derivative of the coefficient of **i** with respect to $\theta$ and set it equal to zero:

$\begin{array}{rll} \\ \\ \frac{d}{d\theta}(\frac{{v}_{0}^{2}\text{sin}\;2\theta}{g}) & = & 0 \\ \frac{2{v}_{0}^{2}\text{cos}\;2\theta}{g} & = & 0 \\ \theta & = & 45\text{°}.\end{array}$  {eq:fs-id1169737196847}

This value of $\theta$ is the smallest positive value that makes the derivative equal to zero. Therefore, in the absence of air resistance, the best angle to fire a projectile (to maximize the range) is at a $45\text{°}$ angle. The distance it travels is given by

$\textbf{s}(\frac{2{v}_{0}\text{sin}\;45}{g})=\frac{{v}_{0}^{2}\text{sin}\;90}{g}\textbf{i}=\frac{{v}_{0}^{2}}{g}\textbf{j}.$  {eq:fs-id1169737392611}

Therefore, the range for an angle of $45\text{°}$ is ${v}_{0}^{2}\text{/}g.$

## Kepler’s Laws
During the early 1600s, Johannes {index:Kepler} was able to use the amazingly accurate data from his mentor Tycho {index:Brahe} to formulate his three laws of planetary motion, now known as {term:Kepler’s laws of planetary motion}. These laws also apply to other objects in the solar system in orbit around the Sun, such as comets (e.g., Halley’s comet) and asteroids. Variations of these laws apply to satellites in orbit around Earth.

:::note [theorem] Kepler’s Laws of Planetary Motion
1. The path of any planet about the Sun is elliptical in shape, with the center of the Sun located at one focus of the ellipse (the law of ellipses).
2. A line drawn from the center of the Sun to the center of a planet sweeps out equal areas in equal time intervals (the law of equal areas) ([ref:CNX_Calc_Figure_13_04_008]).
3. The ratio of the squares of the periods of any two planets is equal to the ratio of the cubes of the lengths of their semimajor orbital axes (the law of harmonies).
:::

> FIGURE {fig:CNX_Calc_Figure_13_04_008} src=../../media/CNX_Calc_Figure_13_04_008.jpg
> alt: This figure is an elliptical curve labeled “planets orbit”. The sun is represented towards the left inside the ellipse, at a focal point. Along the ellipse there are points A,B,C,D,E,F. There are line segments from the sun to each point.
> caption: Kepler’s first and second laws are pictured here. The Sun is located at a focus of the elliptical orbit of any planet. Furthermore, the shaded areas are all equal, assuming that the amount of time measured as the planet moves is the same for each region.

Kepler’s third law is especially useful when using appropriate units. In particular, *1 astronomical unit* is defined to be the average distance from Earth to the Sun, and is now recognized to be 149,597,870,700 m or, approximately 93,000,000 mi. We therefore write 1 A.U. = 93,000,000 mi. Since the time it takes for Earth to orbit the Sun is 1 year, we use Earth years for units of time. Then, substituting 1 year for the period of Earth and 1 A.U. for the average distance to the Sun, Kepler’s third law can be written as

${T}_{p}^{2}={D}_{p}^{3}$  {eq:fs-id1169737148857}

for any planet in the solar system, where ${T}_{P}$ is the period of that planet measured in Earth years and ${D}_{P}$ is the average distance from that planet to the Sun measured in astronomical units. Therefore, if we know the average distance from a planet to the Sun (in astronomical units), we can then calculate the length of its year (in Earth years), and vice versa.
Kepler’s laws were formulated based on observations from Brahe; however, they were not proved formally until Sir Isaac Newton was able to apply calculus. Furthermore, Newton was able to generalize Kepler’s third law to other orbital systems, such as a moon orbiting around a planet. Kepler’s original third law only applies to objects orbiting the Sun.

### Proof
Let’s now prove Kepler’s first law using the calculus of vector-valued functions. First we need a coordinate system. Let’s place the Sun at the origin of the coordinate system and let the vector-valued function $\textbf{r}(t)$ represent the location of a planet as a function of time. Newton proved Kepler’s law using his second law of motion and his law of universal gravitation. Newton’s second law of motion can be written as $\textbf{F}=m\;\textbf{a},$ where **F** represents the net force acting on the planet. His law of universal gravitation can be written in the form $\textbf{F}=-\frac{GmM}{{\| \textbf{r}\|}^{2}}\cdot \frac{\textbf{r}}{\| \textbf{r}\|},$ which indicates that the force resulting from the gravitational attraction of the Sun points back toward the Sun, and has magnitude $\frac{GmM}{{\| \textbf{r}\|}^{2}}$ ([ref:CNX_Calc_Figure_13_04_009]).

> FIGURE {fig:CNX_Calc_Figure_13_04_009} src=../../media/CNX_Calc_Figure_13_04_009.jpg
> alt: This figure is an ellipse with a circle to the left on the inside at a focal point. The circle represents the sun. On the ellipse is a smaller circle representing Earth. The line segment drawn between the circles is labeled “gravitational force”.
> caption: The gravitational force between Earth and the Sun is equal to the mass of the earth times its acceleration.

Setting these two forces equal to each other, and using the fact that $\textbf{a}(t)=\mathbf{{v}^{'}}(t),$ we obtain

$m\;\mathbf{{v}^{'}}(t)=-\frac{GmM}{{\| \textbf{r}\|}^{2}}\cdot \frac{\textbf{r}}{\| \textbf{r}\|},$  {eq:fs-id1169738019258}

which can be rewritten as

$\frac{d\;\textbf{v}}{dt}=-\frac{GM}{{\| \textbf{r}\|}^{3}}\textbf{r}.$  {eq:fs-id1169738245141}

This equation shows that the vectors $d\;\textbf{v}\text{/}dt$ and **r** are parallel to each other, so $d\;\textbf{v}\text{/}dt\;\times \;\textbf{r}=\mathbf{0}.$ Next, let’s differentiate $\textbf{r}\;\times \;\textbf{v}$ with respect to time:

$\frac{d}{dt}(\textbf{r}\;\times \;\textbf{v})=\frac{d\;\textbf{r}}{dt}\;\times \;\textbf{v}+\textbf{r}\;\times \;\frac{d\;\textbf{v}}{dt}=\textbf{v}\;\times \;\textbf{v}+\mathbf{0}=\mathbf{0}.$  {eq:fs-id1169737179156}

This proves that $\textbf{r}\;\times \;\textbf{v}$ is a constant vector, which we call **C**. Since $\textbf{r}$ and **v** are both perpendicular to **C** for all values of *t*, they must lie in a plane perpendicular to **C**. Therefore, the motion of the planet lies in a plane.
Next we calculate the expression $d\;\textbf{v}\text{/}dt\;\times \;\textbf{C}\text{:}$

$$ \frac{d\;\textbf{v}}{dt}\;\times \;\textbf{C}=-\frac{GM}{{\| \textbf{r}\|}^{3}}\textbf{r}\;\times \;(\textbf{r}\;\times \;\textbf{v})=-\frac{GM}{{\| \textbf{r}\|}^{3}}[(\textbf{r}\cdot \textbf{v})\;\textbf{r}-(\textbf{r}\cdot \textbf{r})\;\textbf{v}]. $$  {eq:fs-id1169737178273}

The last equality in [ref:fs-id1169737178273] is from the triple cross product formula.

:::note [media-2] 
Visit this [website](https://www.openstax.org/l/20_triplecross) for an explanation of the triple cross product formula.
:::
We need an expression for $\textbf{r}\cdot \textbf{v}.$ To calculate this, we differentiate $\textbf{r}\cdot \textbf{r}$ with respect to time:

$$ \frac{d}{dt}(\textbf{r}\cdot \textbf{r})=\frac{d\;\textbf{r}}{dt}\cdot \textbf{r}+\textbf{r}\cdot \frac{d\;\textbf{r}}{dt}=2\textbf{r}\cdot \frac{d\;\textbf{r}}{dt}=2\textbf{r}\cdot \textbf{v}. $$  {eq:fs-id1169737757050}

Since $\textbf{r}\cdot \textbf{r}={\| \textbf{r}\|}^{2},$ we also have

$$ \frac{d}{dt}(\textbf{r}\cdot \textbf{r})=\frac{d}{dt}{\| \textbf{r}\|}^{2}=2\| \textbf{r}\| \frac{d}{dt}\| \textbf{r}\| . $$  {eq:fs-id1169737831128}

Combining [ref:fs-id1169737757050] and [ref:fs-id1169737831128], we get

$\begin{array}{rll}2\textbf{r}\cdot \textbf{v} & = & 2\| \textbf{r}\| \frac{d}{dt}\| \textbf{r}\| \\ \textbf{r}\cdot \textbf{v} & = & \| \textbf{r}\| \frac{d}{dt}\| \textbf{r}\| .\end{array}$  {eq:fs-id1169737161168}

Substituting this into [ref:fs-id1169737178273] gives us

$$ \begin{array}{rl}\frac{d\;\textbf{v}}{dt}\;\times \;\textbf{C} & =-\frac{GM}{{\| \textbf{r}\|}^{3}}[(\textbf{r}\cdot \textbf{v})\;\textbf{r}-(\textbf{r}\cdot \textbf{r})\;\textbf{v}] \\ & =-\frac{GM}{{\| \textbf{r}\|}^{3}}[\| \textbf{r}\| (\frac{d}{dt}\| \textbf{r}\| )\;\textbf{r}-{\| \textbf{r}\|}^{2}\textbf{v}] \\ & =\text{−}GM[\frac{1}{{\| \textbf{r}\|}^{2}}(\frac{d}{dt}\| \textbf{r}\| )\;\textbf{r}-\frac{1}{\| \textbf{r}\|}\textbf{v}] \\ & =GM[\frac{\textbf{v}}{\| \textbf{r}\|}-\frac{\textbf{r}}{{\| \textbf{r}\|}^{2}}(\frac{d}{dt}\| \textbf{r}\| )].\end{array} $$  {eq:fs-id1169738184865}

However,

$\begin{array}{rl}\frac{d}{dt}\;\frac{\textbf{r}}{\| \textbf{r}\|} & =\frac{\frac{d}{dt}(\textbf{r})\| \textbf{r}\| -\textbf{r}\frac{d}{dt}\| \textbf{r}\|}{{\| \textbf{r}\|}^{2}} \\ & =\frac{\frac{d\;\textbf{r}}{dt}}{\| \textbf{r}\|}-\frac{\textbf{r}}{{\| \textbf{r}\|}^{2}}\;\frac{d}{dt}\| \textbf{r}\| \\ & =\frac{\textbf{v}}{\| \textbf{r}\|}-\frac{\textbf{r}}{{\| \textbf{r}\|}^{2}}\;\frac{d}{dt}\| \textbf{r}\| .\end{array}$  {eq:fs-id1169737374816}

Therefore, [ref:fs-id1169738184865] becomes

$\frac{d\;\textbf{v}}{dt}\;\times \;\textbf{C}=GM(\frac{d}{dt}\;\frac{\textbf{r}}{\| \textbf{r}\|}).$  {eq:fs-id1169737379230}

Since **C** is a constant vector, we can integrate both sides and obtain

$\textbf{v}\;\times \;\textbf{C}=GM\frac{\textbf{r}}{\| \textbf{r}\|}+\textbf{D},$  {eq:fs-id1169737471811}

where **D** is a constant vector. Our goal is to solve for $\| \textbf{r}\| .$ Let’s start by calculating $\textbf{r}\cdot (\textbf{v}\;\times \;\textbf{C})\text{:}$

$\textbf{r}\cdot (\textbf{v}\;\times \;\textbf{C})=\textbf{r}\cdot (GM\frac{\textbf{r}}{\| \textbf{r}\|}+\textbf{D})=GM\frac{{\| \textbf{r}\|}^{2}}{\| \textbf{r}\|}+\textbf{r}\cdot \textbf{D}=GM\| \textbf{r}\| +\textbf{r}\cdot \textbf{D}.$  {eq:fs-id1169737163805}

However, $\textbf{r}\cdot (\textbf{v}\;\times \;\textbf{C})=(\textbf{r}\;\times \;\textbf{v})\cdot \textbf{C},$ so

$(\textbf{r}\;\times \;\textbf{v})\cdot \textbf{C}=GM\| \textbf{r}\| +\textbf{r}\cdot \textbf{D}.$  {eq:fs-id1169738227503}

Since $\textbf{r}\;\times \;\textbf{v}=\textbf{C},$ we have

${\| \textbf{C}\|}^{2}=GM\| \textbf{r}\| +\textbf{r}\cdot \textbf{D}.$  {eq:fs-id1169737372404}

Note that $\textbf{r}\cdot \textbf{D}=\| \textbf{r}\| \| \textbf{D}\| \text{cos}\;\theta ,$ where $\theta$ is the angle between **r** and **D.** Therefore,

${\| \textbf{C}\|}^{2}=GM\| \textbf{r}\| +\| \textbf{r}\| \| \textbf{D}\| \text{cos}\;\theta .$  {eq:fs-id1169738183717}

Solving for $\| \textbf{r}\| ,$

$\| \textbf{r}\| =\frac{{\| \textbf{C}\|}^{2}}{GM+\| \textbf{D}\| \text{cos}\;\theta}=\frac{{\| \textbf{C}\|}^{2}}{GM}(\frac{1}{1+e\;\text{cos}\;\theta}),$  {eq:fs-id1169738166961}

where $e=\| \textbf{D}\| \text{/}GM.$ This is the polar equation of a conic with a focus at the origin, which we set up to be the Sun. It is a hyperbola if $e>1,$ a parabola if $e=1,$ or an ellipse if $e<1.$ Since planets have closed orbits, the only possibility is an ellipse. However, at this point it should be mentioned that hyperbolic comets do exist. These are objects that are merely passing through the solar system at speeds too great to be trapped into orbit around the Sun. As they pass close enough to the Sun, the gravitational field of the Sun deflects the trajectory enough so the path becomes hyperbolic.
□

:::example {ex:fs-id1169738104787} Using Kepler’s Third Law for Nonheliocentric Orbits

:::exercise {fs-id1169737204111} type= 
PROBLEM:
Kepler’s third law of planetary motion can be modified to the case of one object in orbit around an object other than the Sun, such as the Moon around the Earth. In this case, Kepler’s third law becomes

$$ {P}^{2}=\frac{4{\pi}^{2}{a}^{3}}{G(m+M)}, $$  {eq:fs-id1169737204126}

where *m* is the mass of the Moon and *M* is the mass of Earth, *a* represents the length of the major axis of the elliptical orbit, and *P* represents the period.
Given that the mass of the Moon is $7.35\;\times \;{10}^{22}\;\text{kg,}$ the mass of Earth is $5.97\;\times \;{10}^{24}\;\text{kg,}$ $G=6.67\;\times \;{10}^{−11}{\text{m}}^{3}\text{/}\text{kg}\cdot {\text{sec}}^{2},$ and the period of the moon is 27.3 days, let’s find the length of the major axis of the orbit of the Moon around Earth.
SOLUTION:
It is important to be consistent with units. Since the universal gravitational constant contains seconds in the units, we need to use seconds for the period of the Moon as well:

$27.3\;\text{days}\;\times \;\frac{24\;\text{hr}}{1\;\text{day}}\;\times \;\frac{3600\;\text{sec}}{1\;\text{hour}}=2,358,720\;\text{sec}\text{.}$  {eq:fs-id1169737946594}

Substitute all the data into [ref:fs-id1169737204126] and solve for *a:*

$\begin{array}{rll}{(2,358,720\;\text{sec})}^{2} & = & \frac{4{\pi}^{2}{a}^{3}}{(6.67\;\times \;{10}^{−11}\;\frac{{\text{m}}^{3}}{\text{kg}\cdot \;{\text{sec}}^{2}})(7.35\;x\;{10}^{22}\text{kg}+5.97\;x\;{10}^{24}\text{kg})} \\ 5.563\;\times \;{10}^{12} & = & \frac{4{\pi}^{2}{a}^{3}}{(6.67\;\times \;{10}^{−11}\;{\text{m}}^{3})(6.04\;x\;{10}^{24})} \\ (5.563\;\times \;{10}^{12})(6.67\;\times \;{10}^{−11}\;{\text{m}}^{3})(6.04\;\times \;{10}^{24}) & = & 4{\pi}^{2}{a}^{3} \\ {a}^{3} & = & \frac{2.241\;\times \;{10}^{27}}{4{\pi}^{2}}{\text{m}}^{3} \\ a & = & 3.84\;\times \;{10}^{8}\text{m} \\ & \approx & 384,000\;\text{km.}\end{array}$  {eq:fs-id1169737497152}

COMMENTARY: Analysis
According to solarsystem.nasa.gov, the actual average distance from the Moon to Earth is 384,400 km. This is calculated using reflectors left on the Moon by Apollo astronauts back in the 1960s.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737484459} type= 
PROBLEM:
Titan is the largest moon of Saturn. The mass of Titan is approximately $1.35\;\times \;{10}^{23}$ kg. The mass of Saturn is approximately $5.68\;\times \;{10}^{26}$ kg. Titan takes approximately 16 days to orbit Saturn. Use this information, along with the universal gravitation constant $G=6.67\;\times \;{10}^{−11}{\text{m}}^{3}\text{/}\text{kg}\cdot {\text{sec}}^{2}$ to estimate the distance from Titan to Saturn.
SOLUTION:
$a=1.224\;\times \;{10}^{9}\text{m}\approx 1,224,000\;\text{km}$
COMMENTARY: Hint
Make sure your units agree, then use [ref:fs-id1169737204126].
:::
:::

:::example {ex:fs-id1169738079729} Chapter Opener: Halley’s Comet

:::exercise {fs-id1169738079732} type= 
PROBLEM:

> IMAGE {img:fs-id1169737486852} src=../../media/CNX_Calc_Figure_13_04_010.jpg
> alt: This is a picture of Halley’s Comet. It is a bright ball of light towards the right of the picture with a tail of trailing light. There are also stars throughout the picture.

We now return to the chapter opener, which discusses the motion of Halley’s comet around the Sun. Kepler’s first law states that Halley’s comet follows an elliptical path around the Sun, with the Sun as one focus of the ellipse. The period of Halley’s comet is approximately 76.1 years, depending on how closely it passes by Jupiter and Saturn as it passes through the outer solar system. Let’s use $T=76.1$ years. What is the average distance of Halley’s comet from the Sun?
SOLUTION:
Using the equation ${T}^{2}={D}^{3}$ with $T=76.1,$ we obtain ${D}^{3}=5791.21,$ so $D\approx 17.96$ A.U. This comes out to approximately $1.67\;\times \;{10}^{9}$ mi.
A natural question to ask is: What are the maximum (aphelion) and minimum (perihelion) distances from Halley’s Comet to the Sun? The eccentricity of the orbit of Halley’s Comet is 0.967 (Source: http://nssdc.gsfc.nasa.gov/planetary/factsheet/cometfact.html). Recall that the formula for the eccentricity of an ellipse is $e=c\text{/}a,$ where *a* is the length of the semimajor axis and *c* is the distance from the center to either focus. Therefore, $0.967=c\text{/}17.96$ and $c\approx 17.37$ A.U. Subtracting this from *a* gives the perihelion distance $p=a-c=17.96-17.37=0.59$ A.U. According to the National Space Science Data Center (Source: http://nssdc.gsfc.nasa.gov/planetary/factsheet/cometfact.html), the perihelion distance for Halley’s comet is 0.587 A.U. To calculate the aphelion distance, we add

$P=a+c=17.96+17.37=35.33\;\text{A}\text{.U}\text{.}$  {eq:fs-id1169737209044}

This is approximately $3.3\;\times \;{10}^{9}$ mi. The average distance from Pluto to the Sun is 39.5 A.U. (Source: http://www.oarval.org/furthest.htm), so it would appear that Halley’s Comet stays just within the orbit of Pluto.
:::
:::

:::note [project] Navigating a Banked Turn
How fast can a racecar travel through a circular turn without skidding and hitting the wall? The answer could depend on several factors:
- The weight of the car;
- The friction between the tires and the road;
- The radius of the circle;
- The “steepness” of the turn.
In this project we investigate this question for NASCAR racecars at the Bristol Motor Speedway in Tennessee. Before considering this track in particular, we use vector functions to develop the mathematics and physics necessary for answering questions such as this.
A car of mass *m* moves with constant angular speed $\omega$ around a circular curve of radius *R* ([ref:CNX_Calc_Figure_13_04_011]). The curve is banked at an angle $\theta .$ If the height of the car off the ground is *h*, then the position of the car at time *t* is given by the function $r(t)=\langle R\;\text{cos}(\omega t),R\;\text{sin}(\omega t),h\rangle .$

> FIGURE {fig:CNX_Calc_Figure_13_04_011} src=../../media/CNX_Calc_Figure_13_01_005.jpg
> alt: This figure has two graphics. The first is a circle with a car on the circle. The circle is labeled “overhead view”. From the car there is a vector labeled “v” tangent to the circle. There is also a vector towards the center from the car labeled “a”. The second graphic is labeled “front view”. It is the car at an angle. The angle is labeled “theta”. The height of the cars tilt is labeled “h”.
> caption: Views of a race car moving around a track.

1. Find the velocity function $\textbf{v}(t)$ of the car. Show that **v** is tangent to the circular curve. This means that, without a force to keep the car on the curve, the car will shoot off of it.
2. Show that the speed of the car is $\omega R.$ Use this to show that $(2\pi r)\text{/}|\textbf{v}|=(2\pi )\text{/}\omega .$
3. Find the acceleration **a**. Show that this vector points toward the center of the circle and that $|\textbf{a}|=R{\omega}^{2}.$
4. The force required to produce this circular motion is called the *centripetal force*, and it is denoted **F**<sub>cent</sub>. This force points toward the center of the circle (not toward the ground). Show that $|{\textbf{F}}_{\text{cent}}|=(m{|\textbf{v}|}^{2})\text{/}R.$

As the car moves around the curve, three forces act on it: gravity, the force exerted by the road (this force is perpendicular to the ground), and the friction force ([ref:CNX_Calc_Figure_13_04_012]). Because describing the frictional force generated by the tires and the road is complex, we use a standard approximation for the frictional force. Assume that $|\textbf{f}|=μ|\textbf{N}|$ for some positive constant $μ.$ The constant $μ$ is called the *coefficient of friction*.

> FIGURE {fig:CNX_Calc_Figure_13_04_012} src=../../media/CNX_Calc_Figure_13_01_006.jpg
> alt: This figure is the front of a car tilted to the left. The angle of the tilt is theta. From the center of the car are three vectors. The first vector is labeled “N” and is coming out of the top of the car perpendicular to the car. The second vector is coming out of the bottom of the car labeled “mg”. The third vector is labeled “f” and is coming out of the side of the car, orthogonal to “N”.
> caption: The car has three forces acting on it: gravity (denoted by *m***g**), the friction force **f**, and the force exerted by the road **N**.

Let ${v}_{\text{max}}$ denote the maximum speed the car can attain through the curve without skidding. In other words, ${v}_{\text{max}}$ is the fastest speed at which the car can navigate the turn. When the car is traveling at this speed, the magnitude of the centripetal force is

$|{\textbf{F}}_{\text{cent}}|=\frac{m{v}_{\text{max}}^{2}}{R}.$  {eq:fs-id1169737285079}

The next three questions deal with developing a formula that relates the speed ${v}_{\text{max}}$ to the banking angle $\theta .$
5. Show that $|\textbf{N}|\;\text{cos}\;\theta =mg+|\textbf{f}|\;\text{sin}\;\theta .$ Conclude that $|\textbf{N}|=(mg)\text{/}(\text{cos}\;\theta -μ\;\text{sin}\;\theta ).$
6. The centripetal force is the sum of the forces in the horizontal direction, since the centripetal force points toward the center of the circular curve. Show that

$|{\textbf{F}}_{\text{cent}|}=|\textbf{N}|\;\text{sin}\;\theta +|\textbf{f}|\;\text{cos}\;\theta .$  {eq:fs-id1169737410743}

Conclude that

$|{\textbf{F}}_{\text{cent}|}=\frac{\text{sin}\;\theta +μ\;\text{cos}\;\theta}{\text{cos}\;\theta -μ\;\text{sin}\;\theta}mg.$  {eq:fs-id1169737410778}

7. Show that ${\text{v}}_{\text{max}}^{2}=((\text{sin}\;\theta +μ\;\text{cos}\;\theta )\text{/}(\text{cos}\;\theta -μ\;\text{sin}\;\theta ))gR.$ Conclude that the maximum speed does not actually depend on the mass of the car.

Now that we have a formula relating the maximum speed of the car and the banking angle, we are in a position to answer the questions like the one posed at the beginning of the project.

The Bristol Motor Speedway is a NASCAR short track in Bristol, Tennessee. The track has the approximate shape shown in [ref:CNX_Calc_Figure_13_04_013]. Each end of the track is approximately semicircular, so when cars make turns they are traveling along an approximately circular curve. If a car takes the inside track and speeds along the bottom of turn 1, the car travels along a semicircle of radius approximately 211 ft with a banking angle of 24°. If the car decides to take the outside track and speeds along the top of turn 1, then the car travels along a semicircle with a banking angle of 28°. (The track has variable angle banking.)

> FIGURE {fig:CNX_Calc_Figure_13_04_013} src=../../media/CNX_Calc_Figure_13_01_007.jpg
> alt: This figure has two graphics. The first is a picture of a raceway. There are cars on the track and fans in the stands. The second graphic is an oval drawing of a raceway. The inner radius of a curve is labeled “211 ft” and the width of the radius is labeled “40 ft”.
> caption: At the Bristol Motor Speedway, Bristol, Tennessee (a), the turns have an inner radius of about 211 ft and a width of 40 ft (b). (credit: part (a) photo by Raniel Diaz, Flickr)

The coefficient of friction for a normal tire in dry conditions is approximately 0.7. Therefore, we assume the coefficient for a NASCAR tire in dry conditions is approximately 0.98.
Before answering the following questions, note that it is easier to do computations in terms of feet and seconds, and then convert the answers to miles per hour as a final step.
1. In dry conditions, how fast can the car travel through the bottom of the turn without skidding?
2. In dry conditions, how fast can the car travel through the top of the turn without skidding?
3. In wet conditions, the coefficient of friction can become as low as 0.1. If this is the case, how fast can the car travel through the bottom of the turn without skidding?
4. Suppose the measured speed of a car going along the outside edge of the turn is 105 mph. Estimate the coefficient of friction for the car’s tires.
:::

## Key Concepts {section:key-concepts}
- If $\textbf{r}(t)$ represents the position of an object at time *t*, then $\textbf{r}'(t)$ represents the velocity and $\mathbf{\textbf{r}''}(t)$ represents the acceleration of the object at time *t.* The magnitude of the velocity vector is speed.
- The acceleration vector always points toward the concave side of the curve defined by $\textbf{r}(t).$ The tangential and normal components of acceleration ${a}_{\textbf{T}}$ and ${a}_{\textbf{N}}$ are the projections of the acceleration vector onto the unit tangent and unit normal vectors to the curve.
- Kepler’s three laws of planetary motion describe the motion of objects in orbit around the Sun. His third law can be modified to describe motion of objects in orbit around other celestial objects as well.
- Newton was able to use his law of universal gravitation in conjunction with his second law of motion and calculus to prove Kepler’s three laws.

## Key Equations {section:key-equations}

> TABLE {tab:eip-543} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Velocity** | $\textbf{v}(t)=\mathbf{{r}^{'}}(t)$ |
| **Acceleration** | $\textbf{a}(t)=\mathbf{{v}^{'}}(t)=\mathbf{\textbf{r}''}(t)$ |
| **Speed** | $v(t)=\| \textbf{v}(t)\| =\| \mathbf{{r}^{'}}(t)\| =\frac{ds}{dt}$ |
| **Tangential component of acceleration** | ${a}_{\textbf{T}}=\textbf{a}\cdot \textbf{T}=\frac{\textbf{v}\cdot \textbf{a}}{\| \textbf{v}\|}$ |
| **Normal component of acceleration** | ${a}_{\textbf{N}}=\textbf{a}\cdot \textbf{N}=\frac{\| \textbf{v}\;\times \;\textbf{a}\|}{\| \textbf{v}\|}=\sqrt{{\| \textbf{a}\|}^{2}-{a\;}_{\textbf{T}}^{2}}$ |

##  {section:section-exercises}

:::exercise {fs-id1169737894430} type= 
PROBLEM:
Given $\textbf{r}(t)=(3{t}^{2}-2)\textbf{i}+(2t-\text{sin}(t))\textbf{j},$ find the velocity of a particle moving along this curve.

> IMAGE {img:fs-id1169737817189} src=../../media/CNX_Calc_Figure_13_04_205.jpg
> alt: This figure is a curve in the xy plane. The curve begins in the fourth quadrant towards the y-axis, intersects below 0 to the x axis, then bends around to intersect the positive y-axis and increasing through the first quadrant.

SOLUTION:
$\textbf{v}(t)=(6t)\textbf{i}+(2-\text{cos}(t))\textbf{j}$
:::

:::exercise {fs-id1169737194068} type= 
PROBLEM:
Given $\textbf{r}(t)=(3{t}^{2}-2)\textbf{i}+(2t-\text{sin}(t))\textbf{j},$ find the acceleration vector of a particle moving along the curve in the preceding exercise.
:::
Given the following position functions, find the velocity, acceleration, and speed in terms of the parameter *t*.

:::exercise {fs-id1169738079621} type= 
PROBLEM:
$\textbf{r}(t)=\langle 3\;\text{cos}\;t,3\;\text{sin}\;t,{t}^{2}\rangle$
SOLUTION:
$\textbf{v}(t)=\langle −3\;\text{sin}\;t,3\;\text{cos}\;t,2t\rangle ,$ $\textbf{a}(t)=\langle −3\;\text{cos}\;t,−3\;\text{sin}\;t,2\rangle ,$ $\text{speed}=\sqrt{9+4{t}^{2}}$
:::

:::exercise {fs-id1169737299951} type= 
PROBLEM:
$\textbf{r}(t)={e}^{\text{−}t}\textbf{i}+{t}^{2}\textbf{j}+\text{tan}\;t\;\textbf{k}$
:::

:::exercise {fs-id1169737985374} type= 
PROBLEM:
$\textbf{r}(t)=2\;\text{cos}\;t\;\textbf{j}+3\;\text{sin}\;t\;\textbf{k}.$
SOLUTION:
$\mathbf{v}(t)=−2sin\;t\;\mathbf{j}+3\;cos\;t\;\mathbf{k},$ $\textbf{a}(t)=−2\;\text{cos}\;t\;\textbf{j}-3\;\text{sin}\;t\;\textbf{k},$ $\text{speed}=\sqrt{4\;{\text{sin}}^{2}t+9{\text{cos}}^{2}t}$
:::
Find the velocity, acceleration, and speed of a particle with the given position function.

:::exercise {fs-id1169737212058} type= 
PROBLEM:
$\textbf{r}(t)=\langle {t}^{2}-1,t\rangle$
:::

:::exercise {fs-id1169737253230} type= 
PROBLEM:
$\textbf{r}(t)=\langle {e}^{t},{e}^{\text{−}t}\rangle$. The graph is shown here:

> IMAGE {img:fs-id1169737785693} src=../../media/CNX_Calc_Figure_13_04_207.jpg
> alt: This figure is a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the bottom of the box, from the lower left, and bends through the box to the other side, in the lower right.

SOLUTION:
$\textbf{v}(t)={e}^{t}\textbf{i}-{e}^{\text{−}t}\textbf{j},$ $\textbf{a}(t)={e}^{t}\textbf{i}+{e}^{\text{−}t}\textbf{j},$ speed = $\| \textbf{v}(t)\| =\sqrt{{e}^{2t}+{e}^{−2t}}$
:::

:::exercise {fs-id1169737838053} type= 
PROBLEM:
$\textbf{r}(t)=\langle \text{sin}\;t,t,\text{cos}\;t\rangle .$
:::

:::exercise {fs-id1169738216190} type= 
PROBLEM:
The position function of an object is given by $\textbf{r}(t)=\langle {t}^{2},5t,{t}^{2}-16t\rangle .$ At what time is the speed a minimum?
SOLUTION:
$t=4$
:::

:::exercise {fs-id1169738253253} type= 
PROBLEM:
Let $\textbf{r}(t)=r\;\text{cosh}(\omega t)\textbf{i}+r\;\text{sinh}(\omega t)\textbf{j}.$ Find the velocity and acceleration vectors and show that the acceleration is proportional to $\textbf{r}(t).$
:::
Consider the motion of a point on the circumference of a rolling circle. As the circle rolls, it generates the cycloid $\textbf{r}(t)=(\omega t-\text{sin}(\omega t))\;\textbf{i}+(1-\text{cos}(\omega t))\;\textbf{j},$ where $\omega$ is the angular velocity of the circle:

> IMAGE {img:fs-id1169737931348} src=../../media/CNX_Calc_Figure_13_04_201.jpg
> alt: This figure is a curve in the first octant. It is semicircles connected representing humps. It begins at the origin and touches the x axis at 4pi, and 8pi.

:::exercise {fs-id1169737931360} type= 
PROBLEM:
Find the equations for the velocity, acceleration, and speed of the particle at any time.
SOLUTION:
$\textbf{v}(t)=(\omega -\omega \;\text{cos}(\omega t))\;\textbf{i}+(\omega \;\text{sin}(\omega t))\;\textbf{j},$
$\textbf{a}(t)=({\omega}^{2}\text{sin}(\omega t))\;\textbf{i}+({\omega}^{2}\text{cos}(\omega t))\;\textbf{j},$
$\text{speed}=\sqrt{{\omega}^{2}-2{\omega}^{2}\text{cos}(\omega t)+{\omega}^{2}{\text{cos}}^{2}(\omega t)+{\omega}^{2}{\text{sin}}^{2}(\omega t)}\;\text{=}\;\sqrt{2{\omega}^{2}(1-\text{cos}(\omega t))}$
:::
A person on a hang glider is spiraling upward as a result of the rapidly rising air on a path having position vector $\textbf{r}(t)=(3\;\text{cos}\;t)\textbf{i}+(3\;\text{sin}\;t)\textbf{j}+{t}^{2}\textbf{k}.$ The path is similar to that of a helix, although it is not a helix. The graph is shown here:

> IMAGE {img:fs-id1169737286213} src=../../media/CNX_Calc_Figure_13_04_208.jpg
> alt: This figure is a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve is connected in the box, from the lower left, and bends through the box to the upper right.

Find the following quantities:

:::exercise {fs-id1169737444880} type= 
PROBLEM:
The velocity and acceleration vectors
:::

:::exercise {fs-id1169737929308} type= 
PROBLEM:
The glider’s speed at any time
SOLUTION:
$\| \textbf{v}(t)\| =\sqrt{9+4{t}^{2}}$
:::

:::exercise {fs-id1169737929366} type= 
PROBLEM:
The times, if any, at which the glider’s acceleration is orthogonal to its velocity
:::
Given that $\textbf{r}(t)=\langle {e}^{−5t}\text{sin}\;t,{e}^{−5t}\text{cos}\;t,4{e}^{−5t}\rangle$ is the position vector of a moving particle, find the following quantities:

:::exercise {fs-id1169737956311} type= 
PROBLEM:
The velocity of the particle
SOLUTION:
$\textbf{v}(t)=\langle {e}^{−5t}(\text{cos}\;t-5\;\text{sin}\;t),\text{−}{e}^{−5t}(\text{sin}\;t+5\;\text{cos}\;t),−20{e}^{−5t}\rangle$
:::

:::exercise {fs-id1169737426850} type= 
PROBLEM:
The speed of the particle
:::

:::exercise {fs-id1169737404637} type= 
PROBLEM:
The acceleration of the particle
SOLUTION:
$\textbf{a}(t)={\langle e}^{−5t}(\text{−}\text{sin}\;t-5\;\text{cos}\;t)-5{e}^{−5t}(\text{cos}\;t-5\;\text{sin}\;t),$ $\text{−}{e}^{−5t}(\text{cos}\;t-5\;\text{sin}\;t)+5{e}^{−5t}(\text{sin}\;t+5\;\text{cos}\;t),100{e}^{−5t}\rangle$
:::

:::exercise {fs-id1169737168101} type= 
PROBLEM:
Find the maximum speed of a point on the circumference of an automobile tire of radius 1 ft when the automobile is traveling at 55 mph.
:::
A projectile is shot in the air from ground level with an initial velocity of 500 m/sec at an angle of 60° with the horizontal. The graph is shown here:

> IMAGE {img:fs-id1169737168123} src=../../media/CNX_Calc_Figure_13_04_209.jpg
> alt: This figure is a curve in the fourth quadrant. The curve is decreasing. It begins at the origin and decreases into the fourth quadrant. Answer the following questions.

:::exercise {fs-id1169737270309} type= 
PROBLEM:
At what time does the projectile reach maximum height?
SOLUTION:
44.185 sec
:::

:::exercise {fs-id1169737270325} type= 
PROBLEM:
What is the approximate maximum height of the projectile?
:::

:::exercise {fs-id1169737270341} type= 
PROBLEM:
At what time is the maximum range of the projectile attained?
SOLUTION:
$t=88.37$ sec
:::

:::exercise {fs-id1169737270366} type= 
PROBLEM:
What is the maximum range?
:::

:::exercise {fs-id1169737270382} type= 
PROBLEM:
What is the total flight time of the projectile?
SOLUTION:
88.37 sec
:::
A projectile is fired at a height of 1.5 m above the ground with an initial velocity of 100 m/sec and at an angle of 30° above the horizontal. Use this information to answer the following questions:

:::exercise {fs-id1169737270403} type= 
PROBLEM:
Determine the maximum height of the projectile.
:::

:::exercise {fs-id1169737270419} type= 
PROBLEM:
Determine the range of the projectile.
SOLUTION:
The range is approximately 886.29 m.
:::

:::exercise {fs-id1169738022642} type= 
PROBLEM:
A golf ball is hit in a horizontal direction off the top edge of a building that is 100 ft tall. How fast must the ball be launched to land 450 ft away?
:::

:::exercise {fs-id1169738022660} type= 
PROBLEM:
A projectile is fired from ground level at an angle of 8° with the horizontal. The projectile is to have a range of 50 m. Find the minimum velocity necessary to achieve this range.
SOLUTION:
$\textbf{v}=42.16$ m/sec
:::

:::exercise {fs-id1169738022692} type= 
PROBLEM:
Prove that an object moving in a straight line at a constant speed has an acceleration of zero.
:::

:::exercise {fs-id1169737446397} type= 
PROBLEM:
The acceleration of an object is given by $\textbf{a}(t)=t\;\textbf{j}+t\;\textbf{k}.$ The velocity at $t=1$ sec is $\textbf{v}(1)=5\textbf{j}$ and the position of the object at $t=1$ sec is $\textbf{r}(1)=0\textbf{i}+0\textbf{j}+0\textbf{k}.$ Find the object’s position at any time.
SOLUTION:
$\textbf{r}(t)=0\textbf{i}+(\frac{1}{6}{t}^{3}+4.5t-\frac{14}{3})\;\textbf{j}+(\frac{{t}^{3}}{6}-\frac{1}{2}t+\frac{1}{3})\;\textbf{k}$
:::

:::exercise {fs-id1169737274778} type= 
PROBLEM:
Find $\textbf{r}(t)$ given that $\textbf{a}(t)=−32\textbf{j},$ $\textbf{v}(0)=600\sqrt{3}\textbf{i}+600\textbf{j},$ and $\textbf{r}(0)=\mathbf{0}.$
:::

:::exercise {fs-id1169737178708} type= 
PROBLEM:
Find the tangential and normal components of acceleration for $\textbf{r}(t)=a\;\text{cos}(\omega t)\textbf{i}+a\;\text{sin}(\omega t)\textbf{j}$ at $t=0.$
SOLUTION:
${a}_{T}=0,$ ${a}_{N}=a{\omega}^{2}$
:::

:::exercise {fs-id1169738088780} type= 
PROBLEM:
Given $\textbf{r}(t)={t}^{2}\textbf{i}+2t\;\textbf{j}$ and $t=1,$ find the tangential and normal components of acceleration.
:::
For each of the following problems, find the tangential and normal components of acceleration.

:::exercise {fs-id1169737214970} type= 
PROBLEM:
$\textbf{r}(t)=\langle {e}^{t}\text{cos}\;t,{e}^{t}\text{sin}\;t,{e}^{t}\rangle .$ The graph is shown here:

> IMAGE {img:fs-id1169738226127} src=../../media/CNX_Calc_Figure_13_04_210.jpg
> alt: This figure is a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the bottom of the box, from the lower left, and bends through the box to the other side, in the upper left.

SOLUTION:
${a}_{T}=\sqrt{3}{e}^{t},$ ${a}_{N}=\sqrt{2}{e}^{t}$
:::

:::exercise {fs-id1169738226186} type= 
PROBLEM:
$\textbf{r}(t)=\langle \text{cos}(2t),\text{sin}(2t),1\rangle$
:::

:::exercise {fs-id1169737359586} type= 
PROBLEM:
$\textbf{r}(t)=\langle 2t,{t}^{2},\frac{{t}^{3}}{3}\rangle$
SOLUTION:
${a}_{T}=2t,$ ${a}_{N}=2$
:::

:::exercise {fs-id1169737184235} type= 
PROBLEM:
$\textbf{r}(t)=\langle \frac{2}{3}{(1+t)}^{3\text{/}2},\frac{2}{3}{(1-t)}^{3\text{/}2},\sqrt{2}t\rangle$
:::

:::exercise {fs-id1169737423509} type= 
PROBLEM:
$\textbf{r}(t)=\langle 6t,3{t}^{2},2{t}^{3}\rangle$
SOLUTION:
${a}_{T}\frac{6t+12{t}^{3}}{\sqrt{1+{t}^{4}+{t}^{2}}},$ ${a}_{N}=6\sqrt{\frac{1+4{t}^{2}+{t}^{4}}{1+{t}^{2}+{t}^{4}}}$
:::

:::exercise {fs-id1169737170454} type= 
PROBLEM:
$\textbf{r}(t)={t}^{2}\textbf{i}+{t}^{2}\textbf{j}+{t}^{3}\textbf{k}$
:::

:::exercise {fs-id1169737231330} type= 
PROBLEM:
$\textbf{r}(t)=3\;\text{cos}(2\pi t)\;\textbf{i}+3\;\text{sin}(2\pi t)\;\textbf{j}$
SOLUTION:
${a}_{T}=0,$ ${a}_{N}=12{\pi}^{2}$
:::

:::exercise {fs-id1169737168579} type= 
PROBLEM:
Find the position vector-valued function $\textbf{r}(t),$ given that $\textbf{a}(t)=\textbf{i}+{e}^{t}\textbf{j},$ $\textbf{v}(0)=2\textbf{j},$ and $\textbf{r}(0)=2\textbf{i}.$
:::

:::exercise {fs-id1169738104909} type= 
PROBLEM:
The force on a particle is given by $\textbf{f}(t)=(\text{cos}\;t)\;\textbf{i}+(\text{sin}\;t)\;\textbf{j}.$ The particle is located at point $(c,0)$ at $t=0.$ The initial velocity of the particle is given by $\textbf{v}(0)={v}_{0}\textbf{j}.$ Find the path of the particle of mass **m**. (Recall, $\textbf{F}=m\cdot \textbf{a}.)$
SOLUTION:
$\textbf{r}(t)=(\frac{−1}{m}\text{cos}\;t+c+\frac{1}{m})\;\textbf{i}+(\frac{\text{−}\text{sin}\;t}{m}+({v}_{0}+\frac{1}{m})t)\;\textbf{j}$
:::

:::exercise {fs-id1169737165350} type= 
PROBLEM:
An automobile that weighs 2700 lb makes a turn on a flat road while traveling at 56 ft/sec. If the radius of the turn is 70 ft, what is the required frictional force to keep the car from skidding?
:::

:::exercise {fs-id1169737165368} type= 
PROBLEM:
Using Kepler’s laws, it can be shown that ${v}_{0}=\sqrt{\frac{2GM}{{r}_{0}}}$ is the minimum speed needed when $\theta =0$ so that an object will escape from the pull of a central force resulting from mass *M*. Use this result to find the minimum speed when $\theta =0$ for a space capsule to escape from the gravitational pull of Earth if the probe is at an altitude of 300 km above Earth’s surface.
SOLUTION:
10.94 km/sec
:::

:::exercise {fs-id1169737165439} type= 
PROBLEM:
Find the time in years it takes the dwarf planet Pluto to make one orbit about the Sun given that $a=39.5$ A.U.
:::
Suppose that the position function for an object in three dimensions is given by the equation $\textbf{r}(t)=t\;\text{cos}(t)\textbf{i}+t\;\text{sin}(t)\textbf{j}+3t\;\textbf{k}.$

:::exercise {fs-id1169738059793} type= 
PROBLEM:
Show that the particle moves on a circular cone.
:::

:::exercise {fs-id1169738059803} type= 
PROBLEM:
Find the angle between the velocity and acceleration vectors when $t=1.5.$
:::

:::exercise {fs-id1169737524006} type= 
PROBLEM:
Find the tangential and normal components of acceleration when $t=1.5.$
SOLUTION:
${a}_{T}=0.43\;{\text{m/sec}}^{2},$
${a}_{N}=2.46\;{\text{m/sec}}^{2}$
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*? Justify your answer with a proof or a counterexample.

:::exercise {fs-id1169737524082} type= 
PROBLEM:
A parametric equation that passes through points P and Q can be given by $\textbf{r}(t)=\langle {t}^{2},3t+1,t-2\rangle ,$ where $P(1,4,−1)$ and $Q(16,11,2).$
:::

:::exercise {fs-id1169738133183} type= 
PROBLEM:
$\frac{d}{dt}[\textbf{u}(t)\;\times \;\textbf{u}(t)]=2\mathbf{{\textbf{u}}^{'}}(t)\;\times \;\textbf{u}(t)$
SOLUTION:
False, $\frac{d}{dt}[\textbf{u}(t)\;\times \;\textbf{u}(t)]=0$
:::

:::exercise {fs-id1169737421649} type= 
PROBLEM:
The curvature of a circle of radius $r$ is constant everywhere. Furthermore, the curvature is equal to $1\text{/}r.$
:::

:::exercise {fs-id1169737220042} type= 
PROBLEM:
The speed of a particle with a position function $\textbf{r}(t)$ is $(\mathbf{{\textbf{r}}^{'}}(t))\text{/}(|\mathbf{{\textbf{r}}^{'}}(t)|).$
SOLUTION:
False, it is $|\mathbf{{\textbf{r}}^{'}}(t)|$
:::
Find the domains of the vector-valued functions.

:::exercise {fs-id1169737220161} type= 
PROBLEM:
$\textbf{r}(t)=\langle \text{sin}(t),\text{ln}(t),\sqrt{t}\rangle$
:::

:::exercise {fs-id1169737140434} type= 
PROBLEM:
$\textbf{r}(t)=\langle {e}^{t},\frac{1}{\sqrt{4-t}},\text{sec}(t)\rangle$
SOLUTION:
$t<4,$ $t≠\frac{n\pi}{2}$
:::
Sketch the curves for the following vector equations. Use a calculator if needed.

:::exercise {fs-id1169737778308} type= 
PROBLEM:
**[T]** $\textbf{r}(t)=\langle {t}^{2},{t}^{3}\rangle$
:::

:::exercise {fs-id1169737778376} type= 
PROBLEM:
**[T]** $\textbf{r}(t)=\langle \text{sin}(20t){e}^{\text{−}t},\text{cos}(20t){e}^{\text{−}t},{e}^{\text{−}t}\rangle$
SOLUTION:

> IMAGE {img:fs-id1169738018165} src=../../media/CNX_Calc_Figure_13_04_204.jpg
> alt: This figure is a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the center of the bottom of the box and spirals to the top of the box, increasing radius as it goes.

:::
Find a vector function that describes the following curves.

:::exercise {fs-id1169738018183} type= 
PROBLEM:
Intersection of the cylinder ${x}^{2}+{y}^{2}=4$ with the plane $x+z=6$
:::

:::exercise {fs-id1169737842807} type= 
PROBLEM:
Intersection of the cone $z=\sqrt{{x}^{2}+{y}^{2}}$ and plane $z=y-4$
SOLUTION:
$\textbf{r}(t)=\langle t,2-\frac{{t}^{2}}{8},−2-\frac{{t}^{2}}{8}\rangle$
:::
Find the derivatives of $\textbf{u}(t),$ $\mathbf{{\textbf{u}}^{'}}(t),$ $\mathbf{{\textbf{u}}^{'}}(t)\;\times \;\textbf{u}(t),$ $\textbf{u}(t)\;\times \;\mathbf{{\textbf{u}}^{'}}(t),$ and $\textbf{u}(t)\cdot \mathbf{{\textbf{u}}^{'}}(t).$ Find the unit tangent vector.

:::exercise {fs-id1169737568094} type= 
PROBLEM:
$\textbf{u}(t)=\langle {e}^{t},{e}^{\text{−}t}\rangle$
:::

:::exercise {fs-id1169738064352} type= 
PROBLEM:
$\textbf{u}(t)=\langle {t}^{2},2t+6,4{t}^{5}-12\rangle$
SOLUTION:
$\mathbf{{\textbf{u}}^{'}}(t)=\langle 2t,2,20{t}^{4}\rangle ,$ $\mathbf{\textbf{u}''}(t)=\langle 2,0,80{t}^{3}\rangle ,$ $\frac{d}{dt}[\mathbf{{\textbf{u}}^{'}}(t)\;\times \;\textbf{u}(t)]=\langle −480{t}^{3}-160{t}^{4},24+75{t}^{2},12+4t\rangle ,$ $\frac{d}{dt}[\textbf{u}(t)\;\times \;\mathbf{{\textbf{u}}^{'}}(t)]=\langle 480{t}^{3}+160{t}^{4},−24-75{t}^{2},−12-4t\rangle ,$ $\frac{d}{dt}[\textbf{u}(t)\cdot \mathbf{{\textbf{u}}^{'}}(t)]=720{t}^{8}-9600{t}^{3}+6{t}^{2}+4,$ unit tangent vector: $\textbf{T}(t)=\frac{2t}{\sqrt{400{t}^{8}+4{t}^{2}+4}}\;\textbf{i}+\frac{2}{\sqrt{400{t}^{8}+4{t}^{2}+4}}\;\textbf{j}+\frac{20{t}^{4}}{\sqrt{400{t}^{8}+4{t}^{2}+4}}\;\textbf{k}$
:::
Evaluate the following integrals.

:::exercise {fs-id1169737376097} type= 
PROBLEM:
${\displaystyle \int (\text{tan}(t)\text{sec}(t)\textbf{i}-t{e}^{3t}\textbf{j})dt}$
:::

:::exercise {fs-id1169737383319} type= 
PROBLEM:
${\displaystyle \int_{1}^{4} \textbf{u}(t)dt},$ with $\textbf{u}(t)=\langle \frac{\text{ln}(t)}{t},\frac{1}{\sqrt{t}},\text{sin}(\frac{t\pi}{4})\rangle$
SOLUTION:
$\frac{\text{ln}{(4)}^{2}}{2}\textbf{i}+2\textbf{j}+\frac{2(2+\sqrt{2})}{\pi}\textbf{k}$
:::
Find the length for the following curves.

:::exercise {fs-id1169737162613} type= 
PROBLEM:
$\textbf{r}(t)=\langle 3t,4\;\text{cos}(t),4\;\text{sin}(t)\rangle$ for $1\le t\le 4$
:::

:::exercise {fs-id1169737162712} type= 
PROBLEM:
$\textbf{r}(t)=2\textbf{i}+\text{t}\;\textbf{j}+3{t}^{2}\textbf{k}$ for $0\le t\le 1$
SOLUTION:
$\frac{\sqrt{37}}{2}+\frac{1}{12}{\text{sinh}}^{−1}(6)$
:::
Reparameterize the following functions with respect to their arc length measured from $t=0$ in direction of increasing $t.$

:::exercise {fs-id1169738202857} type= 
PROBLEM:
$\textbf{r}(t)=2t\;\textbf{i}+(4t-5)\textbf{j}+(1-3t)\textbf{k}$
:::

:::exercise {fs-id1169737179373} type= 
PROBLEM:
$\textbf{r}(t)=\text{cos}(2t)\textbf{i}+8t\;\textbf{j}-\text{sin}(2t)\textbf{k}$
SOLUTION:
$\textbf{r}(t(s))=\text{cos}(\frac{2s}{\sqrt{68}})\textbf{i}+\frac{8s}{\sqrt{68}}\textbf{j}-\text{sin}(\frac{2s}{\sqrt{68}})\textbf{k}$
:::
Find the curvature for the following vector functions.

:::exercise {fs-id1169737790804} type= 
PROBLEM:
$\textbf{r}(t)=(2\;\text{sin}\;t)\textbf{i}-4t\;\textbf{j}+(2\;\text{cos}\;t)\textbf{k}$
:::

:::exercise {fs-id1169737790887} type= 
PROBLEM:
$\textbf{r}(t)=\sqrt{2}{e}^{t}\textbf{i}+\sqrt{2}{e}^{\text{−}t}\textbf{j}+2t\;\textbf{k}$
SOLUTION:
$\frac{{e}^{2t}}{{({e}^{2t}+1)}^{2}}$
:::

:::exercise {fs-id1169737987496} type= 
PROBLEM:
Find the unit tangent vector, the unit normal vector, and the binormal vector for $\textbf{r}(t)=2\;\text{cos}\;t\;\textbf{i}+3t\;\textbf{j}+2\;\text{sin}\;t\;\textbf{k}.$
:::

:::exercise {fs-id1169737496250} type= 
PROBLEM:
Find the tangential and normal acceleration components with the position vector $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,{e}^{t}\rangle .$
SOLUTION:
${a}_{T}=\frac{{e}^{2t}}{\sqrt{1+{e}^{2t}}},$ ${a}_{N}=\frac{\sqrt{2{e}^{2t}+1}}{\sqrt{1+{e}^{2t}}}$
:::

:::exercise {fs-id1169737207504} type= 
PROBLEM:
A Ferris wheel car is moving at a constant speed $v$ and has a constant radius $r.$ Find the tangential and normal acceleration of the Ferris wheel car.
:::

:::exercise {fs-id1169737207562} type= 
PROBLEM:
The position of a particle is given by $\textbf{r}(t)=\langle {t}^{2},\text{ln}(t),\text{sin}(\pi t)\rangle ,$ where $t$ is measured in seconds and $\textbf{r}$ is measured in meters. Find the velocity, acceleration, and speed functions. What are the position, velocity, speed, and acceleration of the particle at 1 sec?
SOLUTION:
$\textbf{v}(t)=\langle 2t,\frac{1}{t},\pi \text{cos}(\pi t)\rangle$ m/sec, $\textbf{a}(t)=\langle 2,-\frac{1}{{t}^{2}},\text{−}{\pi}^{2}\text{sin}(\pi t)\rangle {\;\text{m/sec}}^{2},$ $\text{speed}=\sqrt{4{t}^{2}+\frac{1}{{t}^{2}}+{{\pi}^{2}\text{cos}}^{2}(\pi t)}$ m/sec; at $t=1,$ $\textbf{r}(1)=\langle 1,0,0\rangle$ m, $\textbf{v}(1)=\langle 2,1,–π\rangle$ m/sec, $\textbf{a}(1)=\langle 2,−1,0\rangle$ m/sec<sup>2</sup>, and $\text{speed}=\sqrt{5+{\pi}^{2}}$ m/sec
:::
The following problems consider launching a cannonball out of a cannon. The cannonball is shot out of the cannon with an angle $\theta$ and initial velocity ${\text{v}}_{0}.$ The only force acting on the cannonball is gravity, so we begin with a constant acceleration $\textbf{a}(t)=\text{−}g\;\textbf{j}.$

:::exercise {fs-id1169737405573} type= 
PROBLEM:
Find the velocity vector function $\textbf{v}(t).$
:::

:::exercise {fs-id1169737358843} type= 
PROBLEM:
Find the position vector $\textbf{r}(t)$ and the parametric representation for the position.
SOLUTION:
$\textbf{r}(t)={\text{v}}_{0}t-\frac{g}{2}{t}^{2}\;\textbf{j},$ $\textbf{r}(t)=\langle {\text{v}}_{0}(\text{cos}\;\theta )t,{\text{v}}_{0}(\text{sin}\;\theta )t,-\frac{g}{2}{t}^{2}\rangle$
:::

:::exercise {fs-id1169738243271} type= 
PROBLEM:
At what angle do you need to fire the cannonball for the horizontal distance to be greatest? What is the total distance it would travel?
:::

## Glossary
- {def} **acceleration vector**: the second derivative of the position vector
- {def} **Kepler’s laws of planetary motion**: three laws governing the motion of planets, asteroids, and comets in orbit around the Sun
- {def} **normal component of acceleration**: the coefficient of the unit normal vector **N** when the acceleration vector is written as a linear combination of $\textbf{T}$ and $\textbf{N}$
- {def} **projectile motion**: motion of an object with an initial velocity but no force acting on it other than gravity
- {def} **tangential component of acceleration**: the coefficient of the unit tangent vector **T** when the acceleration vector is written as a linear combination of $\textbf{T}$ and $\textbf{N}$
- {def} **velocity vector**: the derivative of the position vector

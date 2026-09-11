# Acceleration

## Learning Objectives
By the end of this section, you will be able to:
- Define and distinguish between instantaneous acceleration, average acceleration, and deceleration.
- Calculate acceleration given initial time, initial velocity, final time, and final velocity.

> FIGURE {fig:import-auto-id3514068} src=../../media/Figure_02_04_00.jpg
> alt: An airplane flying very low to the ground, just above a beach full of onlookers, as it comes in for a landing.
> caption: A plane decelerates, or slows down, as it comes in for landing in St. Maarten. Its acceleration is opposite in direction to its velocity. (credit: Steve Conry, Flickr)

In everyday conversation, to accelerate means to speed up. The accelerator in a car can in fact cause it to speed up. The greater the {term:acceleration}, the greater the change in velocity over a given time. The formal definition of acceleration is consistent with these notions, but more inclusive.

:::note [] Average Acceleration

{term:Average Acceleration} is *the rate at which velocity changes*,

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\frac{{v}_{f}-{v}_{0}}{{t}_{f}-{t}_{0}}, $$  {eq:import-auto-id4040806}

where *$\bar{a}$* is average acceleration, *$v$* is velocity, and *$t$* is time. (The bar over the $a$ means *average* acceleration.)
:::
Because acceleration is velocity in m/s divided by time in s, the SI units for acceleration are ${\text{m/s}}^{2}$, meters per second squared or meters per second per second, which literally means by how many meters per second the velocity changes every second.
Recall that velocity is a vector—it has both magnitude and direction. This means that a change in velocity can be a change in magnitude (or speed), but it can also be a change in *direction*. For example, if a car turns a corner at constant speed, it is accelerating because its direction is changing. The quicker you turn, the greater the acceleration. So there is an acceleration when velocity changes either in magnitude (an increase or decrease in speed) or in direction, or both.

:::note [] Acceleration as a Vector

Acceleration is a vector in the same direction as the *change* in velocity, $\Delta v$. Since velocity is a vector, it can change either in magnitude or in direction. Acceleration is therefore a change in either speed or direction, or both.
:::
Keep in mind that although acceleration is in the direction of the *change* in velocity, it is not always in the direction of *motion*. When an object slows down, its acceleration is opposite to the direction of its motion. This is known as {term:deceleration}.

> FIGURE {fig:import-auto-id1515319} src=../../media/Figure_02_04_00a.jpg
> alt: A subway train arriving at a station. A velocity vector arrow points along the track away from the train. An acceleration vector arrow points along the track toward the train.
> caption: A subway train in Sao Paulo, Brazil, decelerates as it comes into a station. It is accelerating in a direction opposite to its direction of motion. (credit: Yusuke Kawasaki, Flickr)

:::note [] Misconception Alert: Deceleration vs. Negative Acceleration

Deceleration always refers to acceleration in the direction opposite to the direction of the velocity. Deceleration always reduces speed. Negative acceleration, however, is acceleration *in the negative direction in the chosen coordinate system*. Negative acceleration may or may not be deceleration, and deceleration may or may not be considered negative acceleration. For example, consider [ref:import-auto-id3579626].

> FIGURE {fig:import-auto-id3579626} src=../../media/Figure_02_04_00b.jpg
> alt: Four separate diagrams of cars moving. Diagram a: A car moving toward the right. A velocity vector arrow points toward the right. An acceleration vector arrow also points toward the right. Diagram b: A car moving toward the right in the positive x direction. A velocity vector arrow points toward the right. An acceleration vector arrow points toward the left. Diagram c: A car moving toward the left. A velocity vector arrow points toward the left. An acceleration vector arrow points toward the right. Diagram d: A car moving toward the left. A velocity vector arrow points toward the left. An acceleration vector arrow also points toward the left.
> caption: (a) This car is speeding up as it moves toward the right. It therefore has positive acceleration in our coordinate system. (b) This car is slowing down as it moves toward the right. Therefore, it has negative acceleration in our coordinate system, because its acceleration is toward the left. The car is also decelerating: the direction of its acceleration is opposite to its direction of motion. (c) This car is moving toward the left, but slowing down over time. Therefore, its acceleration is positive in our coordinate system because it is toward the right. However, the car is decelerating because its acceleration is opposite to its motion. (d) This car is speeding up as it moves toward the left. It has negative acceleration because it is accelerating toward the left. However, because its acceleration is in the same direction as its motion, it is speeding up (*not* decelerating).

:::

:::example {ex:fs-id2013623} Calculating Acceleration: A Racehorse Leaves the Gate
A racehorse coming out of the gate accelerates from rest to a velocity of 15.0 m/s due west in 1.80 s. What is its average acceleration?

> FIGURE {fig:import-auto-id1806246} src=../../media/graphics4-083a.jpg
> alt: Two racehorses running toward the left.
> caption: (credit: Jon Sullivan, PD Photo.org)

**Strategy**
First we draw a sketch and assign a coordinate system to the problem. This is a simple problem, but it always helps to visualize it. Notice that we assign east as positive and west as negative. Thus, in this case, we have negative velocity.

> FIGURE {fig:import-auto-id1464243} src=../../media/Figure_02_03_01a.jpg
> alt: An acceleration vector arrow pointing west, in the negative x direction, labeled with a equals question mark. A velocity vector arrow also pointing toward the left, with initial velocity labeled as 0 and final velocity labeled as negative fifteen point 0 meters per second.
> caption: 

We can solve this problem by identifying $\Delta v$ and $\Delta t$ from the given information and then calculating the average acceleration directly from the equation $\bar{a}=\frac{\Delta v}{\Delta t}=\frac{{v}_{f}-{v}_{0}}{{t}_{f}-{t}_{0}}$.
**Solution**
1. Identify the knowns. ${v}_{0}=0$, ${v}_{f}=-\text{15}\text{.0 m/s}$ (the negative sign indicates direction toward the west), $\Delta t=1\text{.80 s}$.
2. Find the change in velocity. Since the horse is going from zero to $-\text{15.0 m/s}$, its change in velocity equals its final velocity: $\Delta v={v}_{f}=-\text{15}\text{.0 m/s}$.
3. Plug in the known values ($\Delta v$ and $\Delta t$) and solve for the unknown $\bar{a}$.

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\;\frac{-\text{15}\text{.0 m/s}}{1\text{.80 s}}=-8\text{.33 m}{\text{/s}}^{2}. $$  {eq:import-auto-id2400983}

**Discussion**
The negative sign for acceleration indicates that acceleration is toward the west. An acceleration of $8\text{.33 m}{\text{/s}}^{2}$ due west means that the horse increases its velocity by 8.33 m/s due west each second, that is, 8.33 meters per second per second, which we write as $8\text{.33 m}{\text{/s}}^{2}$. This is truly an average acceleration, because the ride is not smooth. We shall see later that an acceleration of this magnitude would require the rider to hang on with a force nearly equal to his weight.
:::

## Instantaneous Acceleration
{term:Instantaneous acceleration} $a$, or the *acceleration at a specific instant in time*, is obtained by the same process as discussed for instantaneous velocity in [Time, Velocity, and Speed](module:m42096)—that is, by considering an infinitesimally small interval of time. How do we find instantaneous acceleration using only algebra? The answer is that we choose an average acceleration that is representative of the motion. [ref:import-auto-id2590846] shows graphs of instantaneous acceleration versus time for two very different motions. In [ref:import-auto-id2590846](a), the acceleration varies slightly and the average over the entire interval is nearly the same as the instantaneous acceleration at any time. In this case, we should treat this motion as if it had a constant acceleration equal to the average (in this case about $1\text{.}8 m{\text{/s}}^{2}$). In [ref:import-auto-id2590846](b), the acceleration varies drastically over time. In such situations it is best to consider smaller time intervals and choose an average acceleration for each. For example, we could consider motion over the time intervals from 0 to 1.0 s and from 1.0 to 3.0 s as separate motions with accelerations of $+3\text{.}0 m{\text{/s}}^{2}$ and $\text{–2}\text{.}0 m{\text{/s}}^{2}$, respectively.

> FIGURE {fig:import-auto-id2590846} src=../../media/Figure_02_03_02.jpg
> alt: Line graphs of instantaneous acceleration in meters per second per second versus time in seconds. The line on graph (a) shows slight variation above and below an average acceleration of about 1 point 8 meters per second per second. The line on graph (b) shows great variation over time, with instantaneous acceleration constant at 3 point 0 meters per second per second for 1 second, then dropping to negative 2 point 0 meters per second per second for the next 2 seconds, and then rising again, and so forth.
> caption: Graphs of instantaneous acceleration versus time for two different one-dimensional motions. (a) Here acceleration varies only slightly and is always in the same direction, since it is positive. The average over the interval is nearly the same as the acceleration at any given time. (b) Here the acceleration varies greatly, perhaps representing a package on a post office conveyor belt that is accelerated forward and backward as it bumps along. It is necessary to consider small time intervals (such as from 0 to 1.0 s) with constant or nearly constant acceleration in such a situation.

The next several examples consider the motion of the subway train shown in [ref:import-auto-id2590556]. In (a) the shuttle moves to the right, and in (b) it moves to the left. The examples are designed to further illustrate aspects of motion and to illustrate some of the reasoning that goes into solving problems.

> FIGURE {fig:import-auto-id2590556} src=../../media/Figure_02_03_03.jpg
> alt: In part (a), a subway train moves from left to right from an initial position of x equals 4 point 7 kilometers to a final position of x equals 6 point 7 kilometers, with a displacement of 2 point 0 kilometers. In part (b), the train moves toward the left, from an initial position of 5 point 25 kilometers to a final position of 3 point 75 kilometers.
> caption: One-dimensional motion of a subway train considered in [ref:fs-id1744930], [ref:fs-id4082275], [ref:fs-id1372721], [ref:fs-id3600466], [ref:fs-id1348757], and [ref:fs-id4015260]. Here we have chosen the $x$-axis so that + means to the right and $-$ means to the left for displacements, velocities, and accelerations. (a) The subway train moves to the right from ${x}_{0}$ to
${x}_{f}$. Its displacement
$\Delta x$ is +2.0 km. (b) The train moves to the left from
${x'}_{0}$ to
${x'}_{f}$. Its displacement $\Delta x'$ is $-1\text{.5 km}$. (Note that the prime symbol (′) is used simply to distinguish between displacement in the two different situations. The distances of travel and the size of the cars are on different scales to fit everything into the diagram.)

:::example {ex:fs-id1744930} Calculating Displacement: A Subway Train
What are the magnitude and sign of displacements for the motions of the subway train shown in parts (a) and (b) of [ref:import-auto-id2590556]?
**Strategy**
A drawing with a coordinate system is already provided, so we don’t need to make a sketch, but we should analyze it to make sure we understand what it is showing. Pay particular attention to the coordinate system. To find displacement, we use the equation $\Delta x={x}_{f}-{x}_{0}$. This is straightforward since the initial and final positions are given.
**Solution**
1. Identify the knowns. In the figure we see that ${x}_{f}=\text{6.70 km}$ and ${x}_{0}=\text{4.70 km}$ for part (a), and ${x'}_{f}=3\text{.75 km}$ and ${x'}_{0}=5\text{.25 km}$ for part (b).
2. Solve for displacement in part (a).

$$ \Delta x={x}_{f}-{x}_{0}=6\text{.}\text{70 km}-4\text{.}\text{70 km}\text{=}\;\text{+}2\text{.}\text{00 km} $$  {eq:import-auto-id2400875}

3. Solve for displacement in part (b).

$$ \Delta x'={x'}_{f}-{x'}_{0}=\text{3.75 km}-\text{5.25 km}=-\text{1.50 km} $$  {eq:import-auto-id2589758}

**Discussion**
The direction of the motion in (a) is to the right and therefore its displacement has a positive sign, whereas motion in (b) is to the left and thus has a negative sign.
:::

:::example {ex:fs-id4082275} Comparing Distance Traveled with Displacement: A Subway Train
What are the distances traveled for the motions shown in parts (a) and (b) of the subway train in [ref:import-auto-id2590556]?
**Strategy**
To answer this question, think about the definitions of distance and distance traveled, and how they are related to displacement. Distance between two positions is defined to be the magnitude of displacement, which was found in [ref:fs-id1744930]. Distance traveled is the total length of the path traveled between the two positions. (See [Displacement](module:m42033).) In the case of the subway train shown in [ref:import-auto-id2590556], the distance traveled is the same as the distance between the initial and final positions of the train.
**Solution**
1. The displacement for part (a) was +2.00 km. Therefore, the distance between the initial and final positions was 2.00 km, and the distance traveled was 2.00 km.
2. The displacement for part (b) was $\text{−1.5 km.}$ Therefore, the distance between the initial and final positions was 1.50 km, and the distance traveled was 1.50 km.
**Discussion**
Distance is a scalar. It has magnitude but no sign to indicate direction.
:::

:::example {ex:fs-id1372721} Calculating Acceleration: A Subway Train Speeding Up
Suppose the train in [ref:import-auto-id2590556](a) accelerates from rest to 30.0 km/h in the first 20.0 s of its motion. What is its average acceleration during that time interval?
**Strategy**
It is worth it at this point to make a simple sketch:

> FIGURE {fig:import-auto-id2400753} src=../../media/Figure_02_03_03c.jpg
> alt: A point represents the initial velocity of 0 kilometers per second. Below the point is a velocity vector arrow pointing to the right, representing the final velocity of thirty point zero kilometers per hour. Below the velocity vector is an acceleration vector arrow labeled a equals question mark.
> caption: 

This problem involves three steps. First we must determine the change in velocity, then we must determine the change in time, and finally we use these values to calculate the acceleration.
**Solution**
1. Identify the knowns. ${v}_{0}=0$ (the trains starts at rest), ${v}_{f}=\text{30}\text{.}\text{0 km/h}$, and $\Delta t=\text{20}\text{.}\text{0 s}$.
2. Calculate $\Delta v$. Since the train starts from rest, its change in velocity is $\Delta v\text{=}\;\text{+}\text{30.0 km/h}$, where the plus sign means velocity to the right.
3. Plug in known values and solve for the unknown, $\bar{a}$.

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\frac{+\text{30.0 km/h}}{\text{20}\text{.}0 s} $$  {eq:import-auto-id2412947}

4. Since the units are mixed (we have both hours and seconds for time), we need to convert everything into SI units of meters and seconds. (See [Physical Quantities and Units](module:m42091) for more guidance.)

$$ \bar{a}=(\frac{+\text{30 km/h}}{\text{20.0 s}})(\frac{{\text{10}}^{3}\;\text{m}}{\text{1 km}})(\frac{\text{1 h}}{\text{3600 s}})=0\text{.}{\text{417 m/s}}^{2} $$  {eq:import-auto-id2297812}

**Discussion**
The plus sign means that acceleration is to the right. This is reasonable because the train starts from rest and ends up with a velocity to the right (also positive). So acceleration is in the same direction as the *change* in velocity, as is always the case.
:::

:::example {ex:fs-id3600466} Calculate Acceleration: A Subway Train Slowing Down
Now suppose that at the end of its trip, the train in [ref:import-auto-id2590556](a) slows to a stop from a speed of 30.0 km/h in 8.00 s. What is its average acceleration while stopping?
**Strategy**

> FIGURE {fig:import-auto-id2324504} src=../../media/Figure_02_03_03d.jpg
> alt: A velocity vector arrow pointing toward the right with initial velocity of thirty point zero kilometers per hour and final velocity of 0. An acceleration vector arrow pointing toward the left, labeled a equals question mark.
> caption: 

In this case, the train is decelerating and its acceleration is negative because it is toward the left. As in the previous example, we must find the change in velocity and the change in time and then solve for acceleration.
**Solution**
1. Identify the knowns. ${v}_{0}=\text{30}\text{.0 km/h}$, ${v}_{f}=0 km/h$ (the train is stopped, so its velocity is 0), and $\Delta t=\text{8.00 s}$.
2. Solve for the change in velocity, $\Delta v$.

$$ \Delta v={v}_{f}-{v}_{0}=0-\text{30}\text{.}\text{0 km/h}=-\text{30}\text{.0 km/h} $$  {eq:import-auto-id2586229}

3. Plug in the knowns, $\Delta v$ and $\Delta t$, and solve for $\bar{a}$.

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\frac{-\text{30}\text{.}\text{0 km/h}}{8\text{.}\text{00 s}} $$  {eq:import-auto-id2412874}

4. Convert the units to meters and seconds.

$$ \bar{a}=\frac{\Delta v}{\Delta t}=(\frac{-\text{30.0 km/h}}{\text{8.00 s}})(\frac{{\text{10}}^{3}\;\text{m}}{\text{1 km}})(\frac{\text{1 h}}{\text{3600 s}})={\text{−1.04 m/s}}^{2}\text{.} $$  {eq:import-auto-id2596926}

**Discussion**
The minus sign indicates that acceleration is to the left. This sign is reasonable because the train initially has a positive velocity in this problem, and a negative acceleration would oppose the motion. Again, acceleration is in the same direction as the *change* in velocity, which is negative here. This acceleration can be called a deceleration because it has a direction opposite to the velocity.
:::
The graphs of position, velocity, and acceleration vs. time for the trains in [ref:fs-id1372721] and [ref:fs-id3600466] are displayed in [ref:import-auto-id2596938]. (We have taken the velocity to remain constant from 20 to 40 s, after which the train decelerates.)

> FIGURE {fig:import-auto-id2596938} src=../../media/Figure_02_03_04.jpg
> alt: Three graphs. The first is a line graph of position in meters versus time in seconds. The line begins at the origin and has a concave up shape from time equals zero to time equals twenty seconds. It is straight with a positive slope from twenty seconds to forty seconds. It is then convex up from forty to fifty seconds. The second graph is a line graph of velocity in meters per second versus time in seconds. The line is straight with a positive slope beginning at the origin from 0 to twenty seconds. It is flat from twenty to forty seconds. From forty to fifty seconds the line is straight with a negative slope back down to a velocity of 0. The third graph is a line graph of acceleration in meters per second per second versus time in seconds. The line is flat with a positive constant acceleration from zero to twenty seconds. The line then drops to an acceleration of 0 from twenty to forty seconds. The line drops again to a negative acceleration from forty to fifty seconds.
> caption: (a) Position of the train over time. Notice that the train’s position changes slowly at the beginning of the journey, then more and more quickly as it picks up speed. Its position then changes more slowly as it slows down at the end of the journey. In the middle of the journey, while the velocity remains constant, the position changes at a constant rate. (b) Velocity of the train over time. The train’s velocity increases as it accelerates at the beginning of the journey. It remains the same in the middle of the journey (where there is no acceleration). It decreases as the train decelerates at the end of the journey. (c) The acceleration of the train over time. The train has positive acceleration as it speeds up at the beginning of the journey. It has no acceleration as it travels at constant velocity in the middle of the journey. Its acceleration is negative as it slows down at the end of the journey.

:::example {ex:fs-id1348757} Calculating Average Velocity: The Subway Train
What is the average velocity of the train in part b of [ref:fs-id1744930], and shown again below, if it takes 5.00 min to make its trip?

> FIGURE {fig:import-auto-id2412190} src=../../media/Figure_02_03_04a.jpg
> alt: The train moves toward the left, from an initial position of 5 point 25 kilometers to a final position of 3 point 75 kilometers.
> caption: 

**Strategy**
Average velocity is displacement divided by time. It will be negative here, since the train moves to the left and has a negative displacement.
**Solution**
1. Identify the knowns. ${x'}_{f}=3\text{.75 km}$, ${x'}_{0}=\text{5.25 km}$, $\Delta t=\text{5.00 min}$.
2. Determine displacement, $\Delta x'$. We found $\Delta x'$ to be $-\text{1.5 km}$ in [ref:fs-id1744930].
3. Solve for average velocity.

$$ \bar{v}=\frac{\Delta x'}{\Delta t}=\frac{-\text{1.50 km}}{\text{5.00 min}} $$  {eq:import-auto-id2338961}

4. Convert units.

$$ \bar{v}=\frac{\Delta x'}{\Delta t}=(\frac{-1\text{.}\text{50 km}}{5\text{.}\text{00 min}})(\frac{\text{60 min}}{1 h})=-\text{18}\text{.0 km/h} $$  {eq:import-auto-id2338968}

**Discussion**
The negative velocity indicates motion to the left.
:::

:::example {ex:fs-id4015260} Calculating Deceleration: The Subway Train
Finally, suppose the train in [ref:import-auto-id2412190] slows to a stop from a velocity of 20.0 km/h in 10.0 s. What is its average acceleration?
**Strategy**
Once again, let’s draw a sketch:

> FIGURE {fig:import-auto-id2412073} src=../../media/Figure_02_03_04b.jpg
> alt: A velocity vector arrow pointing to the left with initial velocity of negative twenty point 0 kilometers per hour and a final velocity of 0. An acceleration vector arrow pointing toward the right, labeled a equals question mark.
> caption: 

As before, we must find the change in velocity and the change in time to calculate average acceleration.
**Solution**
1. Identify the knowns. ${v}_{0}=-\text{20.0 km/h}$, ${v}_{f}=0 km/h$, $\Delta t=\text{10}\text{.}0 s$.
2. Calculate $\Delta v$. The change in velocity here is actually positive, since

$$ \Delta v={v}_{f}-{v}_{0}=0-(-\text{20 km/h})\text{=}\;\text{+}\text{20.0 km/h}. $$  {eq:import-auto-id2581122}

3. Solve for $\bar{a}$.

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\frac{+20.0\;\text{km/h}}{10.0\;\text{s}} $$  {eq:import-auto-id2585925}

4. Convert units.

$$ \bar{a}=(\frac{+20.0\;\text{km/h}}{10.0\;\text{s}})(\frac{{\text{10}}^{3}\;m}{1 km})(\frac{1 h}{\text{3600 s}})\text{=}\;\text{+}0.556\;{\text{m/s}}^{2} $$  {eq:import-auto-id2581171}

**Discussion**
The plus sign means that acceleration is to the right. This is reasonable because the train initially has a negative velocity (to the left) in this problem and a positive acceleration opposes the motion (and so it is to the right). Again, acceleration is in the same direction as the *change* in velocity, which is positive here. As in [ref:fs-id3600466], this acceleration can be called a deceleration since it is in the direction opposite to the velocity.
:::

## Sign and Direction
Perhaps the most important thing to note about these examples is the signs of the answers. In our chosen coordinate system, plus means the quantity is to the right and minus means it is to the left. This is easy to imagine for displacement and velocity. But it is a little less obvious for acceleration. Most people interpret negative acceleration as the slowing of an object. This was not the case in [ref:fs-id4015260], where a positive acceleration slowed a negative velocity. The crucial distinction was that the acceleration was in the opposite direction from the velocity. In fact, a negative acceleration will *increase* a negative velocity. For example, the train moving to the left in [ref:import-auto-id2412190] is sped up by an acceleration to the left. In that case, both $v$ and $a$ are negative. The plus and minus signs give the directions of the accelerations. If acceleration has the same sign as the velocity, the object is speeding up. If acceleration has the opposite sign as the velocity, the object is slowing down.

:::exercise {fs-id4121834} type=check-understanding Check Your Understanding

PROBLEM:
An airplane lands on a runway traveling east. Describe its acceleration.
SOLUTION:
If we take east to be positive, then the airplane has negative acceleration, as it is accelerating toward the west. It is also decelerating: its acceleration is opposite in direction to its velocity.
:::

:::note [interactive] Moving Man Simulation
Learn about position, velocity, and acceleration graphs. Move the little man back and forth with the mouse and plot his motion. Set the position, velocity, or acceleration and let the simulation move the man for you.
[Click to view content](https://openstax.org/l/02moving_man).
:::

## Test Prep for AP Courses

:::exercise {fs-id1454119} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id3184333} src=../../media/Figure_Ch2_M4_14.jpg
> alt: The picture is a graph grid showing v (ms) along the vertical y-axis and t (s) near the center of the graph for the horizontal x-axis. The v(ms) axis is labeled from top to bottom, 10, 8, 6, 4, 2, 0 (t axis), -2, -4, -6. Each of the even numbers has a horizontal gray line running the width of the grid. The t axis is labeled with a vertical tic, a second vertical tic and 1.0 at the third vertical tic. There are two more vertical tics and then 2.0 at the sixth vertical tic. Each tic has a vertical gray line running the height of the grid.  There are 5 black points labeled A-E on the grid with a solid black line connecting the points. The points on the graph are as follows along the t, V (or x-y grid): A is at the origin (0,0). B is at the second tic (2/3 second) and 8 v/s. The line between A and B rises quickly: It is past half-way between 6 and 8 in the first tic and is a very short curve between the first and second tic. C is at the third tic (1.0) and 8 v/s. The line between B and C is horizontal and goes from the second to third tics on the grid. D is on the horizontal axis in the middle of the grid (V of 0 m/s) at a point just slightly past the first tic after 1. The from C to D is straight. E is at -4 on the vertical axis and 2.0 on the horizontal axis. The line is straight between D and E and moves to gray boxes right and two gray boxes down.
> caption: Graph showing Velocity vs. Time of a cart.

A cart is constrained to move along a straight line. A varying net force along the direction of motion is exerted on the cart. The cart's velocity *v* as a function of time *t* is shown in the graph. The five labeled points divide the graph into four sections.
Which of the following correctly ranks the magnitude of the average acceleration of the cart during the four sections of the graph?
1. *a_CD* > *a_AB* > *a_BC* > *a_DE*
2. *a_BC* > *a_AB* > *a_CD* > *a_DE*
3. *a_AB* > *a_BC* > *a_DE* > *a_CD*
4. *a_CD* > *a_AB* > *a_DE* > *a_BC*
:::

:::exercise {fs-id1860126} type=ap-test-prep 
PROBLEM:
Push a book across a table and observe it slow to a stop.
Draw graphs showing the book's position vs. time and velocity vs. time if the direction of its motion is considered positive.
Draw graphs showing the book's position vs. time and velocity vs. time if the direction of its motion is considered negative.
SOLUTION:
The position vs. time graph should be represented with a positively sloped line whose slope steadily decreases to zero. The *y*-intercept of the graph may be any value. The line on the velocity vs. time graph should have a positive *y*-intercept and a negative slope. Because the final velocity of the book is zero, the line should finish on the *x*-axis.
The position vs. time graph should be represented with a negatively sloped line whose slope steadily decreases to zero. The *y*-intercept of the graph may be any value. The line on the velocity vs. time graph should have a negative *y*-intercept and a positive slope. Because the final velocity of the book is zero, the line should finish on the *x*-axis.]
:::

## Section Summary
- Acceleration is the rate at which velocity changes. In symbols, {term:average acceleration} $\bar{a}$ is
      

$$ \bar{a}=\frac{\Delta v}{\Delta t}=\frac{{v}_{f}-{v}_{0}}{{t}_{f}-{t}_{0}}\text{.} $$  {eq:import-auto-id2412659}

- The SI unit for acceleration is ${\text{m/s}}^{2}$.
- Acceleration is a vector, and thus has a both a magnitude and direction.
- Acceleration can be caused by either a change in the magnitude or the direction of the velocity.
- Instantaneous acceleration $a$ is the acceleration at a specific instant in time.
- Deceleration is an acceleration with a direction opposite to that of the velocity.

## Conceptual Questions

:::exercise {fs-id3526394} type=conceptual-questions 
PROBLEM:
Is it possible for speed to be constant while acceleration is not zero? Give an example of such a situation.
:::

:::exercise {fs-id4016173} type=conceptual-questions 
PROBLEM:
Is it possible for velocity to be constant while acceleration is not zero? Explain.
:::

:::exercise {fs-id3514238} type=conceptual-questions 
PROBLEM:
Give an example in which velocity is zero yet acceleration is not.
:::

:::exercise {fs-id1765962} type=conceptual-questions 
PROBLEM:
If a subway train is moving to the left (has a negative velocity) and then comes to a stop, what is the direction of its acceleration? Is the acceleration positive or negative?
:::

:::exercise {fs-id1780345} type=conceptual-questions 
PROBLEM:
Plus and minus signs are used in one-dimensional motion to indicate direction. What is the sign of an acceleration that reduces the magnitude of a negative velocity? Of a positive velocity?
:::

## Problems & Exercises

:::exercise {fs-id4129901} type=problems-exercises 
PROBLEM:
A cheetah can accelerate from rest to a speed of 30.0 m/s in 7.00 s. What is its acceleration?
SOLUTION:
$4\text{.}\text{29}\;{\text{m/s}}^{2}$
:::

:::exercise {fs-id4035192} type=problems-exercises 
PROBLEM:
**Professional Application**
Dr. John Paul Stapp was U.S. Air Force officer who studied the effects of extreme deceleration on the human body. On December 10, 1954, Stapp rode a rocket sled, accelerating from rest to a top speed of 282 m/s (1015 km/h) in 5.00 s, and was brought jarringly back to rest in only 1.40 s! Calculate his (a) acceleration and (b) deceleration. Express each in multiples of $g$  $(9\text{.}\text{80 m}{\text{/s}}^{2})$ by taking its ratio to the acceleration of gravity.
:::

:::exercise {fs-id2299988} type=problems-exercises 
PROBLEM:
A commuter backs her car out of her garage with an acceleration of $1\text{.}{\text{40 m/s}}^{2}$. (a) How long does it take her to reach a speed of 2.00 m/s? (b) If she then brakes to a stop in 0.800 s, what is her deceleration?
SOLUTION:
(a) $1\text{.}\text{43 s}$
(b) $-2\text{.}\text{50}\;{\text{m/s}}^{2}$
:::

:::exercise {fs-id4124470} type=problems-exercises 
PROBLEM:
Assume that an intercontinental ballistic missile goes from rest to a suborbital speed of 6.50 km/s in 60.0 s (the actual speed and time are classified). What is its average acceleration in ${\text{m/s}}^{2}$ and in multiples of $g$  $(9\text{.}\text{80 m}{\text{/s}}^{2})?$
:::

## Glossary
- {def} **acceleration**: the rate of change in velocity; the change in velocity over time
- {def} **average acceleration**: the change in velocity divided by the time over which it changes
- {def} **instantaneous acceleration**: acceleration at a specific point in time
- {def} **deceleration**: acceleration in the direction opposite to velocity; acceleration that results in a decrease in velocity

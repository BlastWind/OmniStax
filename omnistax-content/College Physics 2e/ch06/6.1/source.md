# Rotation Angle and Angular Velocity

## Learning Objectives
By the end of this section, you will be able to:
- Define arc length, rotation angle, radius of curvature and angular velocity.
- Calculate the angular velocity of a car wheel spin.
In [Kinematics](module:m42033), we studied motion along a straight line and introduced such concepts as displacement, velocity, and acceleration. [Two-Dimensional Kinematics](module:m42104) dealt with motion in two dimensions. Projectile motion is a special case of two-dimensional kinematics in which the object is projected into the air, while being subject to the gravitational force, and lands a distance away. In this chapter, we consider situations where the object does not land but moves in a curve. We begin the study of uniform circular motion by defining two angular quantities needed to describe rotational motion.

## Rotation Angle
When objects rotate about some axis—for example, when the CD (compact disc) in [ref:import-auto-id3402904] rotates about its center—each point in the object follows a circular arc. Consider a line from the center of the CD to its edge. Each {term:pit} used to record sound along this line moves through the same angle in the same amount of time. The rotation angle is the amount of rotation and is analogous to linear distance. We define the {term:rotation angle} $\text{Δ}\theta$ to be the ratio of the arc length to the radius of curvature:

$$ \text{Δ}\theta =\frac{\text{Δ}s}{r}\text{.} $$  {eq:eip-211}

> FIGURE {fig:import-auto-id3402904} src=../../media/Figure_07_01_01aa.jpg
> alt: The figure shows the back side of a compact disc. There is a scratched part on the upper right side of the C D, about one-fifth size of the whole area, with inner circular dots clearly visible. Two line segments are drawn enclosing the scratched area from the border of the C D to the middle plastic portion. A curved arrow is drawn between the two line segments near this middle portion and angle delta theta written alongside it.
> width: 225
> caption: All points on a CD travel in circular arcs. The pits along a line from the center to the edge all move through the same angle $\text{Δ}\theta$ in a time $\text{Δ}t$.

> FIGURE {fig:import-auto-id3418263} src=../../media/Figure_07_01_01ab.jpg
> alt: A circle of radius r and center O is shown. A radius O-A of the circle is rotated through angle delta theta about the center O to terminate as radius O-B. The arc length A-B is marked as delta s.
> width: 300
> caption: The radius of a circle is rotated through an angle $\text{Δ}\theta$. The arc length $\text{Δs}$ is described on the circumference.

The {term:arc length}$\;\text{Δ}s$ is the distance traveled along a circular path as shown in [ref:import-auto-id3418263] Note that $r$ is the {term:radius of curvature} of the circular path.
We know that for one complete revolution, the arc length is the circumference of a circle of radius $r$. The circumference of a circle is $2πr$. Thus for one complete revolution the rotation angle is

$$ \text{Δ}\theta =\frac{2πr}{r}=2π\text{.} $$  {eq:eip-191}

This result is the basis for defining the units used to measure rotation angles, $\text{Δ}\theta$ to be {term:radians} (rad), defined so that

$$ 2π\;\text{rad}=\text{1 revolution.} $$  {eq:eip-135}

A comparison of some useful angles expressed in both degrees and radians is shown in [ref:import-auto-id2588905].

[TABLE import-auto-id2588905 The table compares various angle measures in degrees (first column) and radians (second colum).]
| Degree Measures | Radian Measure |
| $\text{30º}$ | $\frac{\pi}{6}$ |
| $\text{60º}$ | $\frac{\pi}{3}$ |
| $\text{90º}$ | $\frac{\pi}{2}$ |
| $\text{120º}$ | $\frac{2π}{3}$ |
| $\text{135º}$ | $\frac{3π}{4}$ |
| $\text{180º}$ | $\pi$ |

> FIGURE {fig:import-auto-id2442865} src=../../media/Figure_07_01_02a.jpg
> alt: A circle is shown. Two radii of the circle, inclined at an acute angle delta theta, are shown. On one of the radii, two points, one and two are marked. The point one is inside the circle through which an arc between the two radii is shown. The point two is on the cirumfenrence of the circle. The two arc lengths are delta s one and delta s two respectively for the two points.
> width: 230
> caption: Points 1 and 2 rotate through the same angle ($\text{Δ}\theta$), but point 2 moves through a greater arc length $(\text{Δ}s)$ because it is at a greater distance from the center of rotation $(r)$.

If $\text{Δ}\theta =2\pi$ rad, then the CD has made one complete revolution, and every point on the CD is back at its original position. Because there are $\text{360º}$ in a circle or one revolution, the relationship between radians and degrees is thus

$$ 2\pi \;\text{rad}=\text{360º} $$  {eq:eip-808}

so that

$$ 1\;\text{rad}=\frac{\text{360º}}{2π}\approx \text{57.}3º\text{.} $$  {eq:eip-873}

## Angular Velocity
How fast is an object rotating? We define {term:angular velocity} $\omega$ as the rate of change of an angle. In symbols, this is

$$ \omega =\frac{\text{Δ}\theta}{\text{Δ}t}\text{,} $$  {eq:eip-759}

where an angular rotation $\text{Δ}\theta$ takes place in a time $\text{Δ}t$. The greater the rotation angle in a given amount of time, the greater the angular velocity. The units for angular velocity are radians per second (rad/s).
Angular velocity $\omega$ is analogous to linear velocity $v$. To get the precise relationship between angular and linear velocity, we again consider a pit on the rotating CD. This pit moves an arc length $\text{Δ}s$ in a time $\text{Δ}t$, and so it has a linear velocity

$$ v=\frac{\text{Δ}s}{\text{Δ}t}\text{.} $$  {eq:eip-400}

From $\text{Δ}\theta =\frac{\text{Δ}s}{r}$ we see that $\text{Δ}s=r\text{Δ}\theta$. Substituting this into the expression for $v$ gives

$$ v=\frac{r\text{Δ}\theta}{\text{Δ}t}=rω\text{.} $$  {eq:eip-637}

We write this relationship in two different ways and gain two different insights:

$$ v=rω\text{or}\omega =\frac{v}{r}\text{.} $$  {eq:eip-639}

The first relationship in $v=rω\text{or}\omega =\frac{v}{r}$ states that the linear velocity $v$ is proportional to the distance from the center of rotation, thus, it is largest for a point on the rim (largest $r$), as you might expect. We can also call this linear speed $v$ of a point on the rim the *tangential speed*. The second relationship in $v=rω\text{or}\omega =\frac{v}{r}$ can be illustrated by considering the tire of a moving car. Note that the speed of a point on the rim of the tire is the same as the speed $v$ of the car. See [ref:import-auto-id2931190]. So the faster the car moves, the faster the tire spins—large $v$ means a large $\omega$, because $v=rω$. Similarly, a larger-radius tire rotating at the same angular velocity ($\omega$) will produce a greater linear speed ($v$) for the car.

> FIGURE {fig:import-auto-id2931190} src=../../media/Figure_07_01_03a.jpg
> alt: The given figure shows the front wheel of a car. The radius of the car wheel, r, is shown as an arrow and the linear velocity, v, is shown with a green horizontal arrow pointing rightward. The angular velocity, omega, is shown with a clockwise-curved arrow over the wheel.
> width: 300
> caption: A car moving at a velocity $v$ to the right has a tire rotating with an angular velocity $\omega$.The speed of the tread of the tire relative to the axle is $v$, the same as if the car were jacked up. Thus the car moves forward at linear velocity $v=rω$, where $r$ is the tire radius. A larger angular velocity for the tire means a greater velocity for the car.

:::example {ex:fs-id2589253} How Fast Does a Car Tire Spin?
Calculate the angular velocity of a 0.300 m radius car tire when the car travels at $\text{15}\text{.}0\;\text{m/s}$ (about $\text{54}\;\text{km/h}$). See [ref:import-auto-id2931190].
**Strategy**
Because the linear speed of the tire rim is the same as the speed of the car, we have $v=\text{15.0 m/s}.$  The radius of the tire is given to be $r=\text{0.300 m}.$ Knowing    $v$ and $r$, we can use the second relationship in $v=rω,\omega =\frac{v}{r}$ to calculate the angular velocity.
**Solution**
To calculate the angular velocity, we will use the following relationship:

$$ \omega =\frac{v}{r}\text{.} $$  {eq:eip-97}

Substituting the knowns,

$$ \omega =\frac{\text{15}\text{.}0\;\text{m/s}}{0\text{.}\text{300}\;\text{m}}=\text{50}\text{.}0\;\text{rad/s.} $$  {eq:eip-451}

**Discussion**
When we cancel units in the above calculation, we get 50.0/s. But the angular velocity must have units of rad/s. Because radians are actually unitless (radians are defined as a ratio of distance), we can simply insert them into the answer for the angular velocity. Also note that if an earth mover with much larger tires, say 1.20 m in radius, were moving at the same speed of 15.0 m/s, its tires would rotate more slowly. They would have an angular velocity

$$ \omega =(\text{15}\text{.}0\;\text{m/s})/(1\text{.}\text{20}\;\text{m})=\text{12}\text{.}5\;\text{rad/s.} $$  {eq:eip-971}

:::
Both $\omega$ and $v$ have directions (hence they are angular and linear *velocities*, respectively). Angular velocity has only two directions with respect to the axis of rotation—it is either clockwise or counterclockwise. Linear velocity is tangent to the path, as illustrated in [ref:import-auto-id1452850].

:::note [] Take-Home Experiment

Tie an object to the end of a string and swing it around in a horizontal circle above your head (swing at your wrist). Maintain uniform speed as the object swings and measure the angular velocity of the motion. What is the approximate speed of the object? Identify a point close to your hand and take appropriate measurements to calculate the linear speed at this point. Identify other circular motions and measure their angular velocities.
:::

> FIGURE {fig:import-auto-id1452850} src=../../media/Figure_07_01_04a.jpg
> alt: The given figure shows the top view of an old fashioned vinyl record. Two perpendicular line segments are drawn through the center of the circular record, one vertically upward and one horizontal to the right side. Two flies are shown at the end points of the vertical lines near the borders of the record. Two arrows are also drawn perpendicularly rightward through the end points of these vertical lines depicting linear velocities. A curved arrow is also drawn at the center circular part of the record which shows the angular velocity.
> width: 250
> caption: As an object moves in a circle, here a fly on the edge of an old-fashioned vinyl record, its instantaneous velocity is always tangent to the circle. The direction of the angular velocity is clockwise in this case.

:::note [] Ladybug Revolution

Join the ladybug in an exploration of rotational motion. Rotate the merry-go-round to change its angle, or choose a constant angular velocity or angular acceleration. Explore how circular motion relates to the bug's x,y position, velocity, and acceleration using vectors or graphs.
[Click to view content](https://openstax.org/l/28ladybugrevolutionrotation).
:::

## Section Summary
- Uniform circular motion is motion in a circle at constant speed. The rotation angle $\text{Δ}\theta$ is defined as the ratio of the arc length to the radius of curvature:

    

$$ \text{Δ}\theta =\frac{\text{Δ}s}{r}\text{,} $$  {eq:eip-213}

where arc length $\text{Δ}s$ is distance traveled along a circular path and $r$ is the radius of curvature of the circular path. The quantity $\text{Δ}\theta$ is measured in units of radians (rad), for which

$$ 2π\;\text{rad}=\text{360º}\text{=}1\text{revolution.} $$  {eq:eip-567}

- The conversion between radians and degrees is $1\;\text{rad}=\text{57}\text{.}3\text{º}$.
- Angular velocity $\omega$ is the rate of change of an angle,

    

$$ \omega =\frac{\text{Δ}\theta}{\text{Δ}t}\text{,} $$  {eq:eip-969}

where a rotation $\text{Δ}\theta$ takes place in a time $\text{Δ}t$. The units of angular velocity are radians per second (rad/s). Linear velocity $v$ and angular velocity $\omega$ are related by

$$ v=rω\text{or}\omega =\frac{v}{r}\text{.} $$  {eq:eip-513}

## Conceptual Questions

:::exercise {fs-id3119404} type=conceptual-questions 
PROBLEM:
There is an analogy between rotational and linear physical quantities. What rotational quantities are analogous to distance and velocity?
:::

## Problem Exercises

:::exercise {fs-id3004274} type=problems-exercises 
PROBLEM:
Semi-trailer trucks have an odometer on one hub of a trailer wheel. The hub is weighted so that it does not rotate, but it contains gears to count the number of wheel revolutions—it then calculates the distance traveled. If the wheel has a 1.15 m diameter and goes through 200,000 rotations, how many kilometers should the odometer read?
SOLUTION:
723 km
:::

:::exercise {fs-id1004074} type=problems-exercises 
PROBLEM:
Microwave ovens rotate at a rate of about 6 rev/min. What is this in revolutions per second? What is the angular velocity in radians per second?
:::

:::exercise {fs-id1921627} type=problems-exercises 
PROBLEM:
An automobile with 0.260 m radius tires travels 80,000 km before wearing them out. How many revolutions do the tires make, neglecting any backing up and any change in radius due to wear?
SOLUTION:
$5\times {\text{10}}^{7}\;\text{rotations}$
:::

:::exercise {fs-id1524972} type=problems-exercises 
PROBLEM:
(a) What is the period of rotation of Earth in seconds? (b) What is the angular velocity of Earth? (c) Given that Earth has a radius of $6\text{.}4\times {\text{10}}^{6}\;\text{m}$ at its equator, what is the linear velocity at Earth’s surface?
:::

:::exercise {fs-id2979194} type=problems-exercises 
PROBLEM:
A baseball pitcher brings his arm forward during a pitch, rotating the forearm about the elbow. If the velocity of the ball in the pitcher’s hand is 35.0 m/s and the ball is 0.300 m from the elbow joint, what is the angular velocity of the forearm?
SOLUTION:
117 rad/s
:::

:::exercise {fs-id954942} type=problems-exercises 
PROBLEM:
In lacrosse, a ball is thrown from a net on the end of a stick by rotating the stick and forearm about the elbow. If the angular velocity of the ball about the elbow joint is 30.0 rad/s and the ball is 1.30 m from the elbow joint, what is the velocity of the ball?
:::

:::exercise {fs-id2678694} type=problems-exercises 
PROBLEM:
A truck with 0.420-m-radius tires travels at 32.0 m/s. What is the angular velocity of the rotating tires in radians per second? What is this in rev/min?
SOLUTION:
76.2 rad/s
728 rpm
:::

:::exercise {fs-id1429548} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
When kicking a football, the kicker rotates his leg about the hip joint.
(a) If the velocity of the tip of the kicker’s shoe is 35.0 m/s and the hip joint is 1.05 m from the tip of the shoe, what is the shoe tip’s angular velocity?
(b) The shoe is in contact with the initially stationary 0.500 kg football for 20.0 ms. What average force is exerted on the football to give it a velocity of 20.0 m/s?
(c) Find the maximum range of the football, neglecting air resistance.
SOLUTION:
(a) 33.3 rad/s
(b) 500 N
(c) 40.8 m
:::

:::exercise {fs-id2578682} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider an amusement park ride in which participants are rotated about a vertical axis in a cylinder with vertical walls. Once the angular velocity reaches its full value, the floor drops away and friction between the walls and the riders prevents them from sliding down. Construct a problem in which you calculate the necessary angular velocity that assures the riders will not slide down the wall. Include a free body diagram of a single rider. Among the variables to consider are the radius of the cylinder and the coefficients of friction between the riders’ clothing and the wall.
:::

## Glossary
- {def} **arc length**: $\text{Δ}s$, the distance traveled by an object along a circular path
- {def} **pit**: a tiny indentation on the spiral track moulded into the top of the polycarbonate layer of CD
- {def} **rotation angle**: the ratio of the arc length to the radius of curvature on a circular path:
                        $\text{Δ}\theta =\frac{\text{Δ}s}{r}$
- {def} **radius of curvature**: radius of a circular path
- {def} **radians**: a unit of angle measurement
- {def} **angular velocity**: $\omega$,  the rate of change of the angle with which an object moves on a circular path

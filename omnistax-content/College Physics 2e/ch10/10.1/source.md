# Angular Acceleration

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe uniform circular motion.
- Explain non-uniform circular motion.
- Calculate angular acceleration of an object.
- Observe the link between linear and angular acceleration.
[Uniform Circular Motion and Gravitation](module:m42083) discussed only uniform circular motion, which is motion in a circle at constant speed and, hence, constant angular velocity. Recall that angular velocity $\omega$ was defined as the time rate of change of angle $\theta$:

$$ \omega =\frac{\Delta \theta}{\Delta t}\text{,} $$  {eq:eip-257}

where $\theta$ is the angle of rotation as seen in [ref:import-auto-id1941476]. The relationship between angular velocity $\omega$ and linear velocity $v$ was also defined in [Rotation Angle and Angular Velocity](module:m42083) as

$$ v=rω $$  {eq:eip-989}

or

$$ \omega =\frac{v}{r}, $$  {eq:eip-363}

where $r$ is the radius of curvature, also seen in [ref:import-auto-id1941476]. According to the sign convention, the counter clockwise direction is considered as positive direction and clockwise direction as negative

> FIGURE {fig:import-auto-id1941476} src=../../media/Figure_11_01_01a.jpg
> alt: The given figure shows counterclockwise circular motion with a horizontal line, depicting radius r, drawn from the center of the circle to the right side on its circumference and another line is drawn in such a manner that it makes an acute angle delta theta with the horizontal line. Tangential velocity vectors are indicated at the end of the two lines. At the bottom right side of the figure, the formula for angular velocity is given as v upon r.
> width: 200
> caption: This figure shows uniform circular motion and some of its defined quantities.

Angular velocity is not constant when a skater pulls in her arms, when a child starts up a merry-go-round from rest, or when a computer’s hard disk slows to a halt when switched off. In all these cases, there is an {term:angular acceleration}, in which $\omega$ changes. The faster the change occurs, the greater the angular acceleration. Angular acceleration $\alpha$ is defined as the rate of change of angular velocity. In equation form, angular acceleration is expressed as follows:

$$ \alpha =\frac{\Delta \omega}{\Delta t}\text{,} $$  {eq:eip-974}

where $\Delta \omega$ is the {term:change in angular velocity} and $\Delta t$ is the change in time. The units of angular acceleration are $(\text{rad/s})\text{/s}$, or ${\text{rad/s}}^{2}$. If $\omega$ increases, then $\alpha$ is positive. If $\omega$ decreases, then $\alpha$ is negative.

:::example {ex:fs-id3159590} Calculating the Angular Acceleration and Deceleration of a Bike Wheel
Suppose a teenager puts her bicycle on its back and starts the rear wheel spinning from rest to a final angular velocity of 250 rpm in 5.00 s. (a) Calculate the angular acceleration in ${\text{rad/s}}^{2}$. (b) If she now slams on the brakes, causing an angular acceleration of $-87.3\;{\text{rad/s}}^{2}$, how long does it take the wheel to stop?
**Strategy for (a)**
The angular acceleration can be found directly from its definition in $\alpha =\frac{\Delta \omega}{\Delta t}$ because the final angular velocity and time are given. We see that $\Delta \omega$ is 250 rpm and $\Delta t$ is 5.00 s.
**Solution for (a)**
Entering known information into the definition of angular acceleration, we get

$$ \begin{array}{lll}\alpha & = & \frac{\Delta \omega}{\Delta t} \\ & = & \frac{\text{250 rpm}}{\text{5.00 s}}\text{.}\end{array} $$  {eq:eip-272}

Because $\Delta \omega$ is in revolutions per minute (rpm) and we want the standard units of ${\text{rad/s}}^{2}$ for angular acceleration, we need to convert $\Delta \omega$ from rpm to rad/s:

$$ \begin{array}{lll}\Delta \omega & = & \text{250}\frac{\text{rev}}{\text{min}}⋅\frac{\text{2}\pi \text{rad}}{\text{rev}}⋅\frac{\text{1 min}}{\text{60 s}} \\ & = & \text{26.2}\frac{\text{rad}}{\text{s}}.\end{array} $$  {eq:eip-25}

Entering this quantity into the expression for $\alpha$, we get

$$ \begin{array}{lll}\alpha & = & \frac{\Delta \omega}{\Delta t} \\ & = & \frac{\text{26.2 rad/s}}{\text{5.00 s}} \\ & = & \text{5.24}{\text{rad/s}}^{2}\text{.}\end{array} $$  {eq:eip-899}

**Strategy for (b)**
In this part, we know the angular acceleration and the initial angular velocity. We can find the stoppage time by using the definition of angular acceleration and solving for $\Delta t$, yielding

$$ \Delta t=\frac{\Delta \omega}{\alpha}\text{.} $$  {eq:eip-273}

**Solution for (b)**
Here the angular velocity decreases from $\text{26.2 rad/s}$ (250 rpm) to zero, so that  $\Delta \omega$ is  $-\text{26.2 rad/s}$, and  $\alpha$ is given to be  $-\text{87.3}\;{\text{rad/s}}^{2}$. Thus,

$$ \begin{array}{lll}\Delta t & = & \frac{-\text{26.2 rad/s}}{-\text{87.3}\;{\text{rad/s}}^{2}} \\ & = & \text{0.300 s.}\end{array} $$  {eq:eip-455}

**Discussion**
Note that the angular acceleration as the girl spins the wheel is small and positive; it takes 5 s to produce an appreciable angular velocity. When she hits the brake, the angular acceleration is large and negative. The angular velocity quickly goes to zero. In both cases, the relationships are analogous to what happens with linear motion. For example, there is a large deceleration when you crash into a brick wall—the velocity change is large in a short time interval.
:::
If the bicycle in the preceding example had been on its wheels instead of upside-down, it would first have accelerated along the ground and then come to a stop. This connection between circular motion and linear motion needs to be explored. For example, it would be useful to know how linear and angular acceleration are related. In circular motion, linear acceleration is *tangent* to the circle at the point of interest, as seen in [ref:import-auto-id1019355]. Thus, linear acceleration is called {term:tangential acceleration} ${a}_{\text{t}}$.

> FIGURE {fig:import-auto-id1019355} src=../../media/Figure_11_01_02a.jpg
> alt: In the figure, a semicircle is drawn, with its radius r, shown here as a line segment. The anti-clockwise motion of the circle is shown with an arrow on the path of the circle. Tangential velocity vector, v, of the point, which is on the meeting point of radius with the circle, is shown as a green arrow and the linear acceleration, a-t is shown as a yellow arrow in the same direction along v.
> caption: In circular motion, linear acceleration $a$, occurs as the magnitude of the velocity changes: $a$ is tangent to the motion. In the context of circular motion, linear acceleration is also called tangential acceleration ${a}_{\text{t}}$.

Linear or tangential acceleration refers to changes in the magnitude of velocity but not its direction. We know from [Uniform Circular Motion and Gravitation](module:m42083) that in circular motion centripetal acceleration,  ${a}_{\text{c}}$, refers to changes in the direction of the velocity but not its magnitude. An object undergoing circular motion experiences centripetal acceleration, as seen in [ref:import-auto-id1995872]. Thus,  ${a}_{\text{t}}$ and  ${a}_{\text{c}}$ are perpendicular and independent of one another. Tangential acceleration  ${a}_{\text{t}}$ is directly related to the angular acceleration  $\alpha$ and is linked to an increase or decrease in the velocity, but not its direction.

> FIGURE {fig:import-auto-id1995872} src=../../media/Figure_11_01_03a.jpg
> alt: In the figure, a semicircle is drawn, with its radius r, shown here as a line segment. The anti-clockwise motion of the circle is shown with an arrow on the path of the circle. Tangential velocity vector, v, of the point, which is on the meeting point of radius with the circle, is shown as a green arrow and the linear acceleration, a sub t is shown as a yellow arrow in the same direction along v. The centripetal acceleration, a sub c, is also shown as a yellow arrow drawn perpendicular to a sub t, toward the direction of the center of the circle. A label in the figures states a sub t affects magnitude and a sub c affects direction.
> caption: Centripetal acceleration ${a}_{\text{c}}$ occurs as the direction of velocity changes; it is perpendicular to the circular motion. Centripetal and tangential acceleration are thus perpendicular to each other.

Now we can find the exact relationship between linear acceleration ${a}_{\text{t}}$ and angular acceleration $\alpha$. Because linear acceleration is proportional to a change in the magnitude of the velocity, it is defined (as it was in [One-Dimensional Kinematics](module:m42033)) to be

$$ {a}_{\text{t}}=\frac{\Delta v}{\Delta t}\text{.} $$  {eq:eip-85}

For circular motion, note that $v=rω$, so that

$$ {a}_{\text{t}}=\frac{\Delta (rω)}{\Delta t}\text{.} $$  {eq:eip-139}

The radius $r$ is constant for circular motion, and so $\text{Δ}(rω)=r(\Delta \omega )$. Thus,

$$ {a}_{\text{t}}=r\frac{\Delta \omega}{\Delta t}\text{.} $$  {eq:eip-688}

By definition, $\alpha =\frac{\Delta \omega}{\Delta t}$. Thus,

$$ {a}_{\text{t}}=rα, $$  {eq:eip-256}

or

$$ \alpha =\frac{{a}_{\text{t}}}{r}. $$  {eq:eip-773}

These equations mean that linear acceleration and angular acceleration are directly proportional. The greater the angular acceleration is, the larger the linear (tangential) acceleration is, and vice versa. For example, the greater the angular acceleration of a car’s drive wheels, the greater the acceleration of the car. The radius also matters. For example, the smaller a wheel, the smaller its linear acceleration for a given angular acceleration $\alpha$.

:::example {ex:fs-id3217117} Calculating the Angular Acceleration of a Motorcycle Wheel
A powerful motorcycle can accelerate from 0 to 30.0 m/s (about 108 km/h) in 4.20 s. What is the angular acceleration of its 0.320-m-radius wheels? (See [ref:import-auto-id2415283].)

> FIGURE {fig:import-auto-id2415283} src=../../media/Figure_11_01_04a.jpg
> alt: The figure shows the right side view of a man riding a motorcycle hence, depicting linear acceleration a of the motorcycle pointing toward the front of the bike as a horizontal arrow and the angular acceleration alpha of its wheels, shown here as curved arrows along the front of both the wheels pointing downward.
> width: 225
> caption: The linear acceleration of a motorcycle is accompanied by an angular acceleration of its wheels.

**Strategy**
We are given information about the linear velocities of the motorcycle. Thus, we can find its linear acceleration ${a}_{\text{t}}$. Then, the expression $\alpha =\frac{{a}_{\text{t}}}{r}$ can be used to find the angular acceleration.
**Solution**
The linear acceleration is

$$ \begin{array}{lll}{a}_{\text{t}} & = & \frac{\Delta v}{\Delta t} \\ & = & \frac{\text{30.0 m/s}}{\text{4.20 s}} \\ & = & \text{7.14}\;{\text{m/s}}^{2}.\end{array} $$  {eq:eip-20}

We also know the radius of the wheels. Entering the values for ${a}_{\text{t}}$ and $r$ into    $\alpha =\frac{{a}_{\text{t}}}{r}$, we get

$$ \begin{array}{lll}\alpha & = & \frac{{a}_{\text{t}}}{r} \\ & = & \frac{\text{7.14}\;{\text{m/s}}^{2}}{\text{0.320 m}} \\ & = & \text{22.3}\;{\text{rad/s}}^{2}.\end{array} $$  {eq:eip-155}

**Discussion**
Units of radians are dimensionless and appear  in any relationship between angular and linear quantities.
:::
So far, we have defined three rotational quantities— $\theta ,\omega$, and $\alpha$. These quantities are analogous to the translational quantities $x,v$, and $a$. [ref:import-auto-id1572984] displays rotational quantities, the analogous translational quantities, and the relationships between them.

> TABLE {tab:import-auto-id1572984} cols=3
> title: Rotational and Translational Quantities
> summary: Rotational and Translational Quantities

| Rotational | Translational | Relationship |
| --- | --- | --- |
| $\theta$ | $x$ | $\theta =\frac{x}{r}$ |
| $\omega$ | $v$ | $\omega =\frac{v}{r}$ |
| $\alpha$ | $a$ | $\alpha =\frac{{a}_{t}}{r}$ |

:::note [] Making Connections: Take-Home Experiment

Sit down with your feet on the ground on a chair that rotates. Lift one of your legs such that it is unbent (straightened out). Using the other leg, begin to rotate yourself by pushing on the ground. Stop using your leg to push the ground but allow the chair to rotate. From the origin where you began, sketch the angle, angular velocity, and angular acceleration of your leg as a function of time in the form of three separate graphs. Estimate the magnitudes of these quantities.
:::

:::exercise {fs-id1870686} type=check-understanding Check Your Understanding

PROBLEM:
Angular acceleration is a vector, having both magnitude and direction. How do we denote its magnitude and direction? Illustrate with an example.
SOLUTION:
The magnitude of angular acceleration is $\alpha$ and its most common units are ${\text{rad/s}}^{2}$. The direction of angular acceleration along a fixed axis is denoted by a + or a – sign, just as the direction of linear acceleration in one dimension is denoted by a + or a – sign. For example, consider a gymnast doing a forward flip. Her angular momentum would be parallel to the mat and to her left. The magnitude of her angular acceleration would be proportional to her angular velocity (spin rate) and her moment of inertia about her spin axis.
:::

:::note [] Ladybug Revolution

Join the ladybug in an exploration of rotational motion. Rotate the merry-go-round to change its angle, or choose a constant angular velocity or angular acceleration. Explore how circular motion relates to the bug's x,y position, velocity, and acceleration using vectors or graphs.
[Click to view content](https://openstax.org/l/28ladybugrevolutionrotation).
:::

## Section Summary {section:section-summary}
- Uniform circular motion is the motion with a constant angular velocity $\omega =\frac{\Delta \theta}{\Delta t}$.
- In non-uniform circular motion, the velocity changes with time and the rate of change of angular velocity (i.e. angular acceleration) is $\alpha =\frac{\Delta \omega}{\Delta t}$.
- Linear or tangential acceleration refers to changes in the magnitude of velocity but not its direction, given as ${a}_{\text{t}}=\frac{\Delta v}{\Delta t}$.
- For circular motion, note that $v=rω$, so that
    

$$ {a}_{\text{t}}=\frac{\text{Δ}(rω)}{\Delta t}. $$  {eq:import-auto-id1588138}

- The radius r is constant for circular motion, and so $\text{Δ}(rω)=r\Delta \omega$. Thus,
    

$$ {a}_{\text{t}}=r\frac{\Delta \omega}{\Delta t}. $$  {eq:import-auto-id3232862}

- By definition, $\Delta \omega /\Delta t=\alpha$. Thus,
    

$$ {a}_{\text{t}}=rα $$  {eq:import-auto-id3077640}

or
    

$$ \alpha =\frac{{a}_{\text{t}}}{r}. $$  {eq:import-auto-id3025466}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1361145} type=conceptual-questions 
PROBLEM:
Analogies exist between rotational and translational physical quantities. Identify the rotational term analogous to each of the following: acceleration, force, mass, work, translational kinetic energy, linear momentum, impulse.
:::

:::exercise {fs-id1867019} type=conceptual-questions 
PROBLEM:
Explain why centripetal acceleration changes the direction of velocity in circular motion but not its magnitude.
:::

:::exercise {fs-id3046867} type=conceptual-questions 
PROBLEM:
In circular motion, a tangential acceleration can change the magnitude of the velocity but not its direction. Explain your answer.
:::

:::exercise {fs-id3046066} type=conceptual-questions 
PROBLEM:
Suppose a piece of food is on the edge of a rotating microwave oven plate. Does it experience nonzero tangential acceleration, centripetal acceleration, or both when: (a) The plate starts to spin? (b) The plate rotates at constant angular velocity? (c) The plate slows to a halt?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1571972} type=problems-exercises 
PROBLEM:
At its peak, a tornado is 60.0 m in diameter and carries 500 km/h winds. What is its angular velocity in revolutions per second?
SOLUTION:
$\omega =0\text{.}\text{737 rev/s}$
:::

:::exercise {fs-id2980135} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
An ultracentrifuge accelerates from rest to 100,000 rpm in 2.00 min. (a) What is its angular acceleration in ${\text{rad/s}}^{2}$? (b) What is the tangential acceleration of a point 9.50 cm from the axis of rotation? (c) What is the radial acceleration in ${\text{m/s}}^{2}$ and multiples of $g$ of this point at full rpm?
:::

:::exercise {fs-id3225958} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
You have a grindstone (a disk) that is 90.0 kg, has a 0.340-m radius, and is turning at 90.0 rpm, and you press a steel axe against it with a radial force of 20.0 N. (a) Assuming the kinetic coefficient of friction between steel and stone is 0.20, calculate the angular acceleration of the grindstone. (b) How many turns will the stone make before coming to rest?
SOLUTION:
(a) $-0\text{.}{\text{26 rad/s}}^{2}$
(b) $\text{27}\;\text{rev}$
:::

:::exercise {fs-id1947422} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
You are told that a basketball player spins the ball with an angular acceleration of $\text{100}{\text{rad/s}}^{2}$. (a) What is the ball’s final angular velocity if the ball starts from rest and the acceleration lasts 2.00 s? (b) What is unreasonable about the result? (c) Which premises are unreasonable or inconsistent?
:::

## Glossary
- {def} **angular acceleration**: the rate of change of angular velocity with time
- {def} **change in angular velocity**: the difference between final and initial values of angular velocity
- {def} **tangential acceleration**: the acceleration in a direction tangent to the circle at the point of interest in circular motion

# Projectile Motion

## Learning Objectives
By the end of this section, you will be able to:
- Identify and explain the properties of a projectile, such as acceleration due to gravity, range, maximum height, and trajectory.
- Determine the location and velocity of a projectile at different points in its trajectory.
- Apply the principle of independence of motion to solve projectile motion problems.
{term:Projectile motion} is the {term:motion} of an object thrown or projected into the air, subject to only the acceleration of gravity. The object is called a {term:projectile}, and its path is called its {term:trajectory}. The motion of falling objects, as covered in [Problem-Solving Basics for One-Dimensional Kinematics](module:m42125), is a simple one-dimensional type of projectile motion in which there is no horizontal movement. In this section, we consider two-dimensional projectile motion, such as that of a football or other object for which {term:air resistance} *is negligible*.
The most important fact to remember here is that *motions along perpendicular axes are independent* and thus can be analyzed separately. This fact was discussed in [Kinematics in Two Dimensions: An Introduction](module:m42104), where vertical and horizontal motions were seen to be independent. The key to analyzing two-dimensional projectile motion is to break it into two motions, one along the horizontal axis and the other along the vertical. (This choice of axes is the most sensible, because acceleration due to gravity is vertical—thus, there will be no acceleration along the horizontal axis when air resistance is negligible.) As is customary, we call the horizontal axis the *x*-axis and the vertical axis the *y*-axis. [ref:import-auto-id2242290] illustrates the notation for displacement, where $s$ is defined to be the total displacement and $x$ and $y$ are its components along the horizontal and vertical axes, respectively. The magnitudes of these vectors are *s*, *x*, and *y*. (Note that in the last section we used the notation $A$ to represent a vector with components ${A}_{x}$ and ${A}_{y}$. If we continued this format, we would call displacement $s$ with components ${s}_{x}$ and ${s}_{y}$. However, to simplify the notation, we will simply represent the component vectors as $x$ and $y$.)
Of course, to describe motion we must deal with velocity and acceleration, as well as with displacement. We must find their components along the *x*- and *y*-axes, too. We will assume all forces except gravity (such as air resistance and friction, for example) are negligible. The components of acceleration are then very simple:  ${a}_{y}=-g=-9.80 m{\text{/s}}^{2}$. (Note that this definition assumes that the upwards direction is defined as the positive direction. If you arrange the coordinate system instead such that the downwards direction is positive, then acceleration due to gravity takes a positive value.) Because gravity is vertical,  ${a}_{x}=0$. Both accelerations are constant, so the kinematic equations can be used.

:::note [] Review of Kinematic Equations (constant $a$)

$$ x={x}_{0}+\bar{v}t $$  {eq:eip-891}

$$ \bar{v}=\frac{{v}_{0}+v}{2} $$  {eq:eip-557}

$$ v={v}_{0}+\text{at} $$  {eq:eip-405}

$$ x={x}_{0}+{v}_{0}t+\frac{1}{2}{\text{at}}^{2} $$  {eq:eip-556}

$$ {v}^{2}={v}_{0}^{2}+2a(x-{x}_{0})\text{.} $$  {eq:eip-389}

:::

> FIGURE {fig:import-auto-id2242290} src=../../media/Figure_03_04_01.jpg
> alt: A soccer player is kicking a soccer ball. The ball travels in a projectile motion and reaches a point whose vertical distance is y and horizontal distance is x. The displacement between the kicking point and the final point is s. The angle made by this displacement vector with x axis is theta.
> caption: The total displacement $s$ of a soccer ball at a point along its path. The vector $s$ has components $x$ and $y$ along the horizontal and vertical axes. Its magnitude is $s$, and it makes an angle $\theta$ with the horizontal.

Given these assumptions, the following steps are then used to analyze projectile motion:
**Step 1.**     *Resolve or break the motion into horizontal and vertical components along the x- and y-axes.* These axes are perpendicular, so  ${A}_{x}=A\;\text{cos}\;\theta$ and  ${A}_{y}=A\;\text{sin}\;\theta$ are used. The magnitude of the components of displacement  $s$ along these axes are $x$ and  $y.$ The magnitudes of the components of the velocity $v$ are  ${v}_{x}=v\;\text{cos}\;\theta$ and  ${v}_{y}=v\;\text{sin}\;θ,$ where  $v$ is the magnitude of the velocity and $\theta$ is its direction, as shown in [ref:import-auto-id1815222]. Initial values are denoted with a subscript 0, as usual.
**Step 2.**  *Treat the motion as two independent one-dimensional motions, one horizontal and the other vertical.* The kinematic equations for horizontal and vertical motion take the following forms:

$$ \text{Horizontal Motion}({a}_{x}=0) $$  {eq:eip-338}

$$ x={x}_{0}+{v}_{x}t $$  {eq:eip-362}

$$ {v}_{x}={v}_{0x}={v}_{x}=\text{velocity is a constant.} $$  {eq:eip-627}

$$ \begin{array}{l}\text{Vertical Motion} \\ (\text{assuming positive is up} \\ {a}_{y}=-g=-9.\text{80}{\text{m/s}}^{2})\end{array} $$  {eq:eip-293}

$$ y={y}_{0}+\frac{1}{2}({v}_{0y}+{v}_{y})t $$  {eq:eip-131}

$$ {v}_{y}={v}_{0y}-\text{gt} $$  {eq:eip-305}

$$ y={y}_{0}+{v}_{0y}t-\frac{1}{2}{gt}^{2} $$  {eq:eip-542}

$$ {v}_{y}^{2}={v}_{0y}^{2}-2g(y-{y}_{0})\text{.} $$  {eq:eip-243}

**Step 3.**  *Solve for the unknowns in the two separate motions—one horizontal and one vertical.* Note that the only common variable between the motions is time $t$. The problem solving procedures here are the same as for one-dimensional {term:kinematics} and are illustrated in the solved examples below.
**Step 4.**  *Recombine the two motions to find the total displacement* $\text{s}$*and velocity*$\text{v}$. Because the *x* - and *y* -motions are perpendicular, we determine these vectors by using the techniques outlined in the [Vector Addition and Subtraction: Analytical Methods](module:m42128) and employing $A=\sqrt{{A}_{x}^{2}+{A}_{y}^{2}}$ and $\theta ={\text{tan}}^{-1}({A}_{y}/{A}_{x})$ in the following form, where $\theta$ is the direction of the displacement $s$ and ${\theta}_{v}$ is the direction of the velocity $v$:
**Total displacement and velocity**

$$ s=\sqrt{{x}^{2}+{y}^{2}} $$  {eq:eip-743}

$$ \theta ={\text{tan}}^{-1}(y/x) $$  {eq:eip-373}

$$ v=\sqrt{{v}_{x}^{2}+{v}_{y}^{2}} $$  {eq:eip-679}

$$ {\theta}_{v}={\text{tan}}^{-1}({v}_{y}/{v}_{x})\text{.} $$  {eq:eip-264}

> FIGURE {fig:import-auto-id1815222} src=../../media/Figure_03_04_02.jpg
> alt: In part a the figure shows projectile motion of a ball with initial velocity of v zero at an angle of theta zero with the horizontal x axis. The horizontal component v x and the vertical component v y at various positions of ball in the projectile path is shown. In part b only the horizontal velocity component v sub x is shown whose magnitude is constant at various positions in the path. In part c only vertical velocity component v sub y is shown. The vertical velocity component v sub y is upwards till it reaches the maximum point and then its direction changes to downwards. In part d resultant v of horizontal velocity component v sub x and downward vertical velocity component v sub y is found which makes an angle theta with the horizontal x axis. The direction of resultant velocity v is towards south east.
> caption: (a) We analyze two-dimensional projectile motion by breaking it into two independent one-dimensional motions along the vertical and horizontal axes. (b) The horizontal motion is simple, because ${a}_{x}=0$ and ${v}_{x}$ is thus constant. (c) The velocity in the vertical direction begins to decrease as the object rises; at its highest point, the vertical velocity is zero. As the object falls towards the Earth again, the vertical velocity increases again in magnitude but points in the opposite direction to the initial vertical velocity. (d) The *x* - and *y* -motions are recombined to give the total velocity at any given point on the trajectory.

:::example {ex:fs-id2175010} A Fireworks Projectile Explodes High and Away
During a fireworks display, a shell is shot into the air with an initial speed of 70.0 m/s at an angle of $75.0º$ above the horizontal, as illustrated in [ref:import-auto-id934168]. The fuse is timed to ignite the shell just as it reaches its highest point above the ground. (a) Calculate the height at which the shell explodes. (b) How much time passed between the launch of the shell and the explosion? (c) What is the horizontal displacement of the shell when it explodes?
**Strategy**
Because air resistance is negligible for the unexploded shell, the analysis method outlined above can be used. The motion can be broken into horizontal and vertical motions in which  ${a}_{x}=0$ and  ${a}_{y}=-g$. We can then define  ${x}_{0}$ and ${y}_{0}$ to be zero and solve for the desired quantities.
**Solution for (a)**
By “height” we mean the altitude or vertical position $y$ above the starting point. The highest point in any trajectory, called the apex, is reached when ${v}_{y}=0$. Since we know the initial and final velocities as well as the initial position, we use the following equation to find $y$:

$$ {v}_{y}^{2}={v}_{0y}^{2}-2g(y-{y}_{0})\text{.} $$  {eq:eip-734}

> FIGURE {fig:import-auto-id934168} src=../../media/Figure_03_04_03a.jpg
> alt: The x y graph shows the trajectory of fireworks shell. The initial velocity of the shell v zero is at angle theta zero equal to seventy five degrees with the horizontal x axis. The fuse is set to explode the shell at the highest point of the trajectory which is at a height h equal to two hundred thirty three meters and at a horizontal distance x equal to one hundred twenty five meters from the origin.
> caption: The trajectory of a fireworks shell. The fuse is set to explode the shell at the highest point in its trajectory, which is found to be at a height of 233 m and 125 m away horizontally.

Because ${y}_{0}$ and ${v}_{y}$ are both zero, the equation simplifies to

$$ 0={v}_{0y}^{2}-2\text{gy.} $$  {eq:eip-42}

Solving for $y$ gives

$$ y=\frac{{v}_{0y}^{2}}{2g}\text{.} $$  {eq:eip-256}

Now we must find  ${v}_{0y}$, the component of the initial velocity in the *y*-direction. It is given by  ${v}_{0y}={v}_{0}\;\text{sin}\;\theta$, where  ${v}_{0y}$ is the initial velocity of 70.0 m/s, and  ${\theta}_{0}=75.0º$ is the initial angle. Thus,

$$ {v}_{0y}={v}_{0}\;\text{sin}\;{\theta}_{0}=(\text{70.0 m/s})(\text{sin 75º})=\text{67.6 m/s.} $$  {eq:eip-677}

and $y$ is

$$ y=\frac{(\text{67}\text{.6 m/s}{)}^{2}}{2(9\text{.}\text{80 m}{\text{/s}}^{2})}, $$  {eq:eip-512}

so that

$$ y=\text{233}\text{m.} $$  {eq:eip-310}

**Discussion for (a)**
Note that because up is positive, the initial velocity is positive, as is the maximum height, but the acceleration due to gravity is negative. Note also that the maximum height depends only on the vertical component of the initial velocity, so that any projectile with a 67.6 m/s initial vertical component of velocity will reach a maximum height of 233 m (neglecting air resistance). The numbers in this example are reasonable for large fireworks displays, the shells of which do reach such heights before exploding. In practice, air resistance is not completely negligible, and so the initial velocity would have to be somewhat larger than that given to reach the same height.
**Solution for (b)**
As in many physics problems, there is more than one way to solve for the time to the highest point. In this case, the easiest method is to use $y={y}_{0}+\frac{1}{2}({v}_{0y}+{v}_{y})t$. Because ${y}_{0}$ is zero, this equation reduces to simply

$$ y=\frac{1}{2}({v}_{0y}+{v}_{y})t\text{.} $$  {eq:eip-383}

Note that the final vertical velocity, ${v}_{y}$, at the highest point is zero. Thus,

$$ \begin{array}{l}t & = & \frac{2y}{({v}_{0y}+{v}_{y})}=\frac{2(\text{233 m})}{(\text{67.6 m/s})} \\ & = & \text{6.90 s}\text{.}\end{array} $$  {eq:eip-50}

**Discussion for (b)**
This time is also reasonable for large fireworks. When you are able to see the launch of fireworks, you will notice several seconds pass before the shell explodes. (Another way of finding the time is by using $y={y}_{0}+{v}_{0y}t-\frac{1}{2}{\text{gt}}^{2}$, and solving the quadratic equation for $t$.)
**Solution for (c)**
Because air resistance is negligible, ${a}_{x}=0$ and the horizontal velocity is constant, as discussed above. The horizontal displacement is horizontal velocity multiplied by time as given by $x={x}_{0}+{v}_{x}t$, where ${x}_{0}$ is equal to zero:

$$ x={v}_{x}t\text{,} $$  {eq:eip-675}

where ${v}_{x}$ is the *x*-component of the velocity, which is given by ${v}_{x}={v}_{0}\;\text{cos}\;{\theta}_{0}\text{.}$ Now,

$$ {v}_{x}={v}_{0}\;\text{cos}\;{\theta}_{0}=(\text{70}\text{.}0 m/s )(\text{cos 75.0º})=\text{18}\text{.}1 m/s. $$  {eq:eip-884}

The time $t$ for both motions is the same, and so $x$ is

$$ x=(\text{18}\text{.}1 m/s )(6\text{.}\text{90 s} )=\text{125 m.} $$  {eq:eip-685}

**Discussion for (c)**
The horizontal motion is a constant velocity in the absence of air resistance. The horizontal displacement found here could be useful in keeping the fireworks fragments from falling on spectators. Once the shell explodes, air resistance has a major effect, and many fragments will land directly below.
:::
In solving part (a) of the preceding example, the expression we found for $y$ is valid for any projectile motion where air resistance is negligible. Call the maximum height $y=h$; then,

$$ h=\frac{{v}_{0y}^{2}}{2g}\text{.} $$  {eq:eip-803}

This equation defines the *maximum height of a projectile* and depends only on the vertical component of the initial velocity.

:::note [] Defining a Coordinate System

It is important to set up a coordinate system when analyzing projectile motion. One part of defining the coordinate system is to define an origin for the $x$ and $y$ positions. Often, it is convenient to choose the initial position of the object as the origin such that ${x}_{0}=0$ and ${y}_{0}=0$. It is also important to define the positive and negative directions in the $x$ and $y$ directions. Typically, we define the positive vertical direction as upwards, and the positive horizontal direction is usually the direction of the object’s motion. When this is the case, the vertical acceleration, ${a}_{y}=-g$, takes a negative value (since it is directed downwards towards the Earth). However, it is occasionally useful to define the coordinates differently. For example, if you are analyzing the motion of a ball thrown downwards from the top of a cliff, it may make sense to define the positive direction downwards since the motion of the ball is solely in the downwards direction. If this is the case, ${a}_{y}=g$ takes a positive value.
:::

:::example {ex:fs-id708626} Calculating Projectile Motion: Hot Rock Projectile
Kilauea in Hawaii is the world’s most continuously active volcano. Very active volcanoes characteristically eject red-hot rocks and lava rather than smoke and ash. Suppose a large rock is ejected from the volcano with a speed of 25.0 m/s and at an angle $\text{35.0º}$ above the horizontal, as shown in [ref:import-auto-id1817519]. The rock strikes the side of the volcano at an altitude 20.0 m lower than its starting point. (a) Calculate the time it takes the rock to follow this path. (b) What are the magnitude and direction of the rock’s velocity at impact?

> FIGURE {fig:import-auto-id1817519} src=../../media/Figure_03_04_04a.jpg
> alt: The trajectory of a rock ejected from a volcano is shown. The initial velocity of rock v zero is equal to twenty five meters per second and it makes an angle of thirty five degrees with the horizontal x axis. The figure shows rock falling down a height of twenty meters below the volcano level. The velocity at this point is v which makes an angle of theta with horizontal x axis. The direction of v is south east.
> caption: The trajectory of a rock ejected from the Kilauea volcano.

**Strategy**
Again, resolving this two-dimensional motion into two independent one-dimensional motions will allow us to solve for the desired quantities. The time a projectile is in the air is governed by its vertical motion alone. We will solve for $t$ first. While the rock is rising and falling vertically, the horizontal motion continues at a constant velocity. This example asks for the final velocity. Thus, the vertical and horizontal results will be recombined to obtain $v$ and ${\theta}_{v}$ at the final time $t$ determined in the first part of the example.
**Solution for (a)**
While the rock is in the air, it rises and then falls to a final position 20.0 m lower than its starting altitude. We can find the time for this by using

$$ y={y}_{0}+{v}_{0y}t-\frac{1}{2}{\text{gt}}^{2}\text{.} $$  {eq:eip-895}

If we take the initial position ${y}_{0}$ to be zero, then the final position is $y=-\text{20}\text{.0 m}\text{.}$ Now the initial vertical velocity is the vertical component of the initial velocity, found from  ${v}_{0y}={v}_{0}\;\text{sin}\;{\theta}_{0}$ = ($\text{25}\text{.}\text{0 m/s}$)($\text{sin 35.0º}$) = $\text{14}\text{.}\text{3 m/s}$. Substituting known values yields

$$ -\text{20}\text{.}0 m =(\text{14}\text{.}3 m/s )t-(4\text{.}\text{90 m/s}{}^{2}){t}^{2}\text{.} $$  {eq:eip-722}

Rearranging terms gives a quadratic equation in $t$:

$$ (4\text{.}\text{90 m/s}{}^{2}){t}^{2}-(\text{14}\text{.}\text{3 m/s})t-(\text{20.0 m})=0. $$  {eq:eip-931}

This expression is a quadratic equation of the form ${at}^{2}+bt+c=0$, where the constants are  $a=4.90$,  $b=-14.3$, and  $c=-20.0.$ Its solutions are given by the quadratic formula:

$$ t=\frac{-b\pm \sqrt{{b}^{2}-4\text{ac}}}{\text{2}\text{a}}\text{.} $$  {eq:eip-880}

This equation yields two solutions:  $t=3.96$ and   $t=-1.03$. (It is left as an exercise for the reader to verify these solutions.) The time is  $t=3.96\;\text{s}$ or  $-1.03\;\text{s}$. The negative value of time implies an event before the start of motion, and so we discard it. Thus,

$$ t=3\text{.}\text{96 s}\text{.} $$  {eq:eip-267}

**Discussion for (a)**
The time for projectile motion is completely determined by the vertical motion. So any projectile that has an initial vertical velocity of 14.3 m/s and lands 20.0 m below its starting altitude will spend 3.96 s in the air.
**Solution for (b)**
From the information now in hand, we can find the final horizontal and vertical velocities ${v}_{x}$ and ${v}_{y}$ and combine them to find the total velocity $v$ and the angle ${\theta}_{0}$ it makes with the horizontal. Of course, ${v}_{x}$ is constant so we can solve for it at any horizontal location. In this case, we chose the starting point since we know both the initial velocity and initial angle. Therefore:

$$ {v}_{x}={v}_{0}\;\text{cos}\;{\theta}_{0}=(\text{25}\text{.}0 m/s )(\text{cos 35º})=\text{20}\text{.}5 m/s. $$  {eq:eip-873}

The final vertical velocity is given by the following equation:

$$ {v}_{y}={v}_{0y}-\text{gt,} $$  {eq:eip-168}

where ${v}_{0y}$ was found in part (a) to be $\text{14}\text{.}\text{3 m/s}$. Thus,

$$ {v}_{y}=\text{14}\text{.}3 m/s -(9\text{.}\text{80 m/s}{}^{2})(3\text{.}\text{96 s} ) $$  {eq:eip-113}

so that

$$ {v}_{y}=-\text{24}\text{.}5 m/s. $$  {eq:eip-571}

To find the magnitude of the final velocity $v$ we combine its perpendicular components, using the following equation:

$$ v=\sqrt{{v}_{x}^{2}+{v}_{y}^{2}}=\sqrt{(\text{20}\text{.}5 m/s {)}^{2}+(-\text{24}\text{.}5 m/s {)}^{2}}\text{,} $$  {eq:eip-394}

which gives

$$ v=\text{31}\text{.}9 m/s. $$  {eq:eip-60}

The direction ${\theta}_{v}$ is found from the equation:

$$ {\theta}_{v}={\text{tan}}^{-1}({v}_{y}/{v}_{x}) $$  {eq:eip-353}

so that

$$ {\theta}_{v}={\text{tan}}^{-1}(-\text{24}\text{.}5/\text{20}\text{.}5)={\text{tan}}^{-1}(-1\text{.}\text{19})\text{.} $$  {eq:eip-589}

Thus,

$$ {\theta}_{v}=-\text{50}\text{.}1º\text{.} $$  {eq:eip-379}

**Discussion for (b)**
The negative angle means that the velocity is $\text{50}\text{.}1º$ below the horizontal. This result is consistent with the fact that the final vertical velocity is negative and hence downward—as you would expect because the final altitude is 20.0 m lower than the initial altitude. (See [ref:import-auto-id1817519].)
:::
One of the most important things illustrated by projectile motion is that vertical and horizontal motions are independent of each other. Galileo was the first person to fully comprehend this characteristic. He used it to predict the range of a projectile. On level ground, we define {term:range} to be the horizontal distance $R$ traveled by a projectile. Galileo and many others were interested in the range of projectiles primarily for military purposes—such as aiming cannons. However, investigating the range of projectiles can shed light on other interesting phenomena, such as the orbits of satellites around the Earth. Let us consider projectile range further.

> FIGURE {fig:import-auto-id1904800} src=../../media/Figure_03_04_05a.jpg
> alt: Part a of the figure shows three different trajectories of projectiles on level ground. In each case the projectiles makes an angle of forty five degrees with the horizontal axis. The first projectile of initial velocity thirty meters per second travels a horizontal distance of R equal to ninety one point eight meters. The second projectile of initial velocity forty meters per second travels a horizontal distance of R equal to one hundred sixty three meters. The third projectile of initial velocity fifty meters per second travels a horizontal distance of R equal to two hundred fifty five meters.
> caption: Trajectories of projectiles on level ground. (a) The greater the initial speed ${v}_{0}$, the greater the range for a given initial angle. (b) The effect of initial angle ${\theta}_{0}$ on the range of a projectile with a given initial speed. Note that the range is the same for $\text{15º}$ and $\text{75º}$, although the maximum heights of those paths are different.

How does the initial velocity of a projectile affect its range? Obviously, the greater the initial speed ${v}_{0}$, the greater the range, as shown in [ref:import-auto-id1904800](a). The initial angle ${\theta}_{0}$ also has a dramatic effect on the range, as illustrated in [ref:import-auto-id1904800](b). For a fixed initial speed, such as might be produced by a cannon, the maximum range is obtained with ${\theta}_{0}=\text{45º}$. This is true only for conditions neglecting air resistance. If air resistance is considered, the maximum angle is approximately $\text{38º}$. Interestingly, for every initial angle except $\text{45º}$, there are two angles that give the same range—the sum of those angles is $\text{90º}$. The range also depends on the value of the acceleration of gravity $g$. The lunar astronaut Alan Shepard was able to drive a golf ball a great distance on the Moon because gravity is weaker there. The range $R$ of a projectile on *level ground* for which air resistance is negligible is given by

$$ R=\frac{{v}_{0}^{2}\;\text{sin}\;{2\theta}_{0}}{g}\text{,} $$  {eq:eip-240}

where ${v}_{0}$ is the initial speed and ${\theta}_{0}$ is the initial angle relative to the horizontal. The proof of this equation is left as an end-of-chapter problem (hints are given), but it does fit the major features of projectile range as described.
When we speak of the range of a projectile on level ground, we assume that $R$ is very small compared with the circumference of the Earth. If, however, the range is large, the Earth curves away below the projectile and acceleration of gravity changes direction along the path. The range is larger than predicted by the range equation given above because the projectile has farther to fall than it would on level ground. (See [ref:import-auto-id1645881].) If the initial speed is great enough, the projectile goes into orbit.  This possibility was recognized centuries before it could be accomplished. When an object is in orbit, the Earth curves away from underneath the object at the same rate as it falls. The object thus falls continuously but never hits the surface. These and other aspects of orbital motion, such as the rotation of the Earth, will be covered analytically and in greater depth later in this text.
Once again we see that thinking about one topic, such as the range of a projectile, can lead us to others, such as the Earth orbits. In  [Addition of Velocities](module:m42045), we will examine the addition of velocities, which is another important aspect of two-dimensional kinematics and will also yield insights beyond the immediate topic.

> FIGURE {fig:import-auto-id1645881} src=../../media/Figure_03_04_06a.jpg
> alt: A figure of the Earth is shown and on top of it a very high tower is placed. A projectile satellite is launched from this very high tower with initial velocity of v zero in the horizontal direction. Several trajectories are shown with increasing range. A circular trajectory is shown indicating the satellite achieved its orbit and it is revolving around the Earth.
> caption: Hypothetical projectile to satellite. From this theoretical tower, a projectile is launched from a very high tower to avoid air resistance. With increasing initial speed, the range increases and becomes longer than it would be on level ground because the Earth curves away underneath its path. With a large enough initial speed, orbit is achieved.

:::note [interactive] Projectile Motion
Blast a Buick out of a cannon! Learn about projectile motion by firing various objects. Set the angle, initial speed, and mass. Add air resistance. Make a game out of [this simulation](https://openstax.org/l/28prjctilemtion) by trying to hit a target.
:::

## Test Prep for AP Courses

:::exercise {fs-id1316152} type=ap-test-prep 
PROBLEM:
In an experiment, a student launches a ball with an initial horizontal velocity of 5.00 meters/sec at an elevation 2.00 meters above ground. Draw and clearly label with appropriate values and units a graph of the ball's horizontal velocity vs. time and the ball's vertical velocity vs. time. The graph should cover the motion from the instant after the ball is launched until the instant before it hits the ground. Assume the downward direction is negative for this problem.
:::

## Summary
- Projectile motion is the motion of an object through the air that is subject only to the acceleration of gravity.
- To solve projectile motion problems, perform the following steps:
      
1. Determine a coordinate system. Then, resolve the position and/or velocity of the object in the horizontal and vertical components. The components of position $s$ are given by the quantities $x$ and $y$, and the components of the velocity $v$ are given by ${v}_{x}=v\;\text{cos}\;\theta$ and ${v}_{y}=v\;\text{sin}\;\theta$, where $v$ is the magnitude of the velocity and $\theta$ is its direction.
2. Analyze the motion of the projectile in the horizontal direction using the following equations:
    

$$ \text{Horizontal motion}({a}_{x}=0) $$  {eq:eip-898}

    

$$ x={x}_{0}+{v}_{x}t $$  {eq:eip-236}

    

$$ {v}_{x}={v}_{0x}={\text{v}}_{\text{x}}=\text{velocity is a constant.} $$  {eq:eip-612}

3. Analyze the motion of the projectile in the vertical direction using the following equations:
    

$$ \begin{array}{l}\text{Vertical Motion} \\ (\text{assuming positive is up} \\ {a}_{y}=-g=-9.\text{80}{\text{m/s}}^{2})\end{array} $$  {eq:import-auto-id1939084}

$$ y={y}_{0}+\frac{1}{2}({v}_{0y}+{v}_{y})t $$  {eq:import-auto-id1492830}

$$ {v}_{y}={v}_{0y}-\text{gt} $$  {eq:import-auto-id2022844}

    

$$ y={y}_{0}+{v}_{0y}t-\frac{1}{2}{\text{gt}}^{2} $$  {eq:import-auto-id1677876}

$$ {v}_{y}^{2}={v}_{0y}^{2}-2g(y-{y}_{0}). $$  {eq:import-auto-id1653540}

4. Recombine the horizontal and vertical components of location and/or velocity using the following equations:
    

$$ s=\sqrt{{x}^{2}+{y}^{2}} $$  {eq:import-auto-id2092332}

    

$$ \theta ={\text{tan}}^{-1}(y/x) $$  {eq:import-auto-id2282348}

    

$$ v=\sqrt{{v}_{x}^{2}+{v}_{y}^{2}} $$  {eq:import-auto-id2274748}

    

$$ {\theta}_{\text{v}}={\text{tan}}^{-1}({v}_{y}/{v}_{x}). $$  {eq:import-auto-id1979208}

1. Determine a coordinate system. Then, resolve the position and/or velocity of the object in the horizontal and vertical components. The components of position $s$ are given by the quantities $x$ and $y$, and the components of the velocity $v$ are given by ${v}_{x}=v\;\text{cos}\;\theta$ and ${v}_{y}=v\;\text{sin}\;\theta$, where $v$ is the magnitude of the velocity and $\theta$ is its direction.
2. Analyze the motion of the projectile in the horizontal direction using the following equations:
    

$$ \text{Horizontal motion}({a}_{x}=0) $$  {eq:eip-898}

    

$$ x={x}_{0}+{v}_{x}t $$  {eq:eip-236}

    

$$ {v}_{x}={v}_{0x}={\text{v}}_{\text{x}}=\text{velocity is a constant.} $$  {eq:eip-612}

3. Analyze the motion of the projectile in the vertical direction using the following equations:
    

$$ \begin{array}{l}\text{Vertical Motion} \\ (\text{assuming positive is up} \\ {a}_{y}=-g=-9.\text{80}{\text{m/s}}^{2})\end{array} $$  {eq:import-auto-id1939084}

$$ y={y}_{0}+\frac{1}{2}({v}_{0y}+{v}_{y})t $$  {eq:import-auto-id1492830}

$$ {v}_{y}={v}_{0y}-\text{gt} $$  {eq:import-auto-id2022844}

    

$$ y={y}_{0}+{v}_{0y}t-\frac{1}{2}{\text{gt}}^{2} $$  {eq:import-auto-id1677876}

$$ {v}_{y}^{2}={v}_{0y}^{2}-2g(y-{y}_{0}). $$  {eq:import-auto-id1653540}

4. Recombine the horizontal and vertical components of location and/or velocity using the following equations:
    

$$ s=\sqrt{{x}^{2}+{y}^{2}} $$  {eq:import-auto-id2092332}

    

$$ \theta ={\text{tan}}^{-1}(y/x) $$  {eq:import-auto-id2282348}

    

$$ v=\sqrt{{v}_{x}^{2}+{v}_{y}^{2}} $$  {eq:import-auto-id2274748}

    

$$ {\theta}_{\text{v}}={\text{tan}}^{-1}({v}_{y}/{v}_{x}). $$  {eq:import-auto-id1979208}

- The maximum height $h$ of a projectile launched with initial vertical velocity ${v}_{0y}$ is given by
  

$$ h=\frac{{v}_{0y}^{2}}{2g}. $$  {eq:import-auto-id1534227}

- The maximum horizontal distance traveled by a projectile is called the *range*. The range $R$ of a projectile on level ground launched at an angle ${\theta}_{0}$ above the horizontal with initial speed ${v}_{0}$ is given by
  

$$ R=\frac{{v}_{0}^{2}\;\text{sin}\;{2\theta}_{0}}{g}. $$  {eq:import-auto-id1951750}

## Conceptual Questions

:::exercise {fs-id2183300} type=conceptual-questions 
PROBLEM:
Answer the following questions for projectile motion on level ground assuming negligible air resistance (the initial angle being neither $\text{0º}$ nor $\text{90º}$): (a) Is the velocity ever zero? (b) When is the velocity a minimum? A maximum? (c) Can the velocity ever be the same as the initial velocity at a time other than at $t=0$? (d) Can the speed ever be the same as the initial speed at a time other than at $t=0$?
:::

:::exercise {fs-id1638420} type=conceptual-questions 
PROBLEM:
Answer the following questions for projectile motion on level ground assuming negligible air resistance (the initial angle being neither $\text{0º}$ nor $\text{90º}$): (a) Is the acceleration ever zero? (b) Is the acceleration ever in the same direction as a component of velocity? (c) Is the acceleration ever opposite in direction to a component of velocity?
:::

:::exercise {fs-id2062475} type=conceptual-questions 
PROBLEM:
For a fixed initial speed, the range of a projectile is determined by the angle at which it is fired. For all but the maximum, there are two angles that give the same range. Considering factors that might affect the ability of an archer to hit a target, such as wind, explain why the smaller angle (closer to the horizontal) is preferable. When would it be necessary for the archer to use the larger angle? Why does the punter in a football game use the higher trajectory?
:::

:::exercise {fs-id1875651} type=conceptual-questions 
PROBLEM:
During a lecture demonstration, a professor places two coins on the edge of a table. She then flicks one of the coins horizontally off the table, simultaneously nudging the other over the edge. Describe the subsequent motion of the two coins, in particular discussing whether they hit the floor at the same time.
:::

## Problems & Exercises

:::exercise {fs-id1923898} type=problems-exercises 
PROBLEM:
A projectile is launched at ground level with an initial speed of 50.0 m/s at an angle of $30.0º$ above the horizontal. It strikes a target above the ground 3.00 seconds later. What are the $x$ and $y$ distances from where the projectile was launched to where it lands?
SOLUTION:
$\begin{array}{l}x & = & \text{1.30 m}\times {10}^{2} \\ y & = & \text{30}\text{.9 m.}\end{array}$
:::

:::exercise {fs-id1275043} type=problems-exercises 
PROBLEM:
A ball is kicked with an initial velocity of 16 m/s in the horizontal direction and 12 m/s in the vertical direction. (a) At what speed does the ball hit the ground? (b) For how long does the ball remain in the air? (c)What maximum height is attained by the ball?
:::

:::exercise {fs-id2889503} type=problems-exercises 
PROBLEM:
A ball is thrown horizontally from the top of a 60.0-m building and lands 100.0 m from the base of the building. Ignore air resistance. (a) How long is the ball in the air? (b) What must have been the initial horizontal component of the velocity? (c) What is the vertical component of the velocity just before the ball hits the ground? (d) What is the velocity (including both the horizontal and vertical components) of the ball just before it hits the ground?
SOLUTION:
(a) 3.50 s
(b) 28.6  m/s (c) 34.3 m/s
(d) 44.7 m/s,  $50.2º$ below horizontal
:::

:::exercise {fs-id2197387} type=problems-exercises 
PROBLEM:
(a) A daredevil is attempting to jump his motorcycle over a line of buses parked end to end by driving up a $\text{32º}$ ramp at a speed of $\text{40}\text{.}\text{0 m/s}(\text{144 km/h})$. How many buses can he clear if the top of the takeoff ramp is at the same height as the bus tops and the buses are 20.0 m long? (b) Discuss what your answer implies about the margin of error in this act—that is, consider how much greater the range is than the horizontal distance he must travel to miss the end of the last bus. (Neglect air resistance.)
:::

:::exercise {fs-id1420192} type=problems-exercises 
PROBLEM:
An archer shoots an arrow at a 75.0 m distant target; the bull’s-eye of the target is at same height as the release height of the arrow. (a) At what angle must the arrow be released to hit the bull’s-eye if its initial speed is 35.0 m/s? In this part of the problem, explicitly show how you follow the steps involved in solving projectile motion problems. (b) There is a large tree halfway between the archer and the target with an overhanging horizontal branch 3.50 m above the release height of the arrow. Will the arrow go over or under the branch?
SOLUTION:
(a) $\text{18}\text{.}\text{4º}$
(b) The arrow will go over the branch.
:::

:::exercise {fs-id1934878} type=problems-exercises 
PROBLEM:
A rugby player passes the ball 7.00 m across the field, where it is caught at the same height as it left his hand. (a) At what angle was the ball thrown if its initial speed was 12.0 m/s, assuming that the smaller of the two possible angles was used? (b) What other angle gives the same range, and why would it not be used? (c) How long did this pass take?
:::

:::exercise {fs-id2126267} type=problems-exercises 
PROBLEM:
Verify the ranges for the projectiles in [ref:import-auto-id1904800](a) for $\theta =\text{45º}$ and the given initial velocities.
SOLUTION:
$\begin{array}{l}R=\frac{{v}_{0}^{2}}{\text{sin}{2θ}_{0}g} \\ \text{For}\;\theta =\text{45º}, & R=\frac{{v}_{0}^{2}}{g}\end{array}$
$R=91.8\;\text{m}$ for  ${v}_{0}=30\;\text{m/s}$;  $R=163\;\text{m}$  for ${v}_{0}=40\;\text{m/s}$;  $R=255\;\text{m}$ for  ${v}_{0}=50\;\text{m/s}$.
:::

:::exercise {fs-id2214647} type=problems-exercises 
PROBLEM:
Verify the ranges shown for the projectiles in [ref:import-auto-id1904800](b) for an initial velocity of 50 m/s at the given initial angles.
:::

:::exercise {fs-id2905201} type=problems-exercises 
PROBLEM:
The cannon on a battleship can fire a shell a maximum distance of 32.0 km. (a) Calculate the initial velocity of the shell. (b) What maximum height does it reach? (At its highest, the shell is above 60% of the atmosphere—but air resistance is not really negligible as assumed to make this problem easier.) (c) The ocean is not flat, because the Earth is curved. Assume that the radius of the Earth is $6\text{.}\text{37}\times {\text{10}}^{3}\;\text{km}$. How many meters lower will its surface be 32.0 km from the ship along a horizontal line parallel to the surface at the ship? Does your answer imply that error introduced by the assumption of a flat Earth in projectile motion is significant here?
SOLUTION:
(a) 560 m/s
(b) $8\text{.}\text{00}\times {\text{10}}^{3}\;\text{m}$
(c) 80.0 m. This error is not significant because it is only 1% of the answer in part (b).
:::

:::exercise {fs-id1925728} type=problems-exercises 
PROBLEM:
An arrow is shot from a height of 1.5 m toward a cliff of height $H$. It is shot with a velocity of 30 m/s at an angle of $\text{60º}$ above the horizontal. It lands on the top edge of the cliff 4.0 s later. (a) What is the height of the cliff? (b) What is the maximum height reached by the arrow along its trajectory? (c) What is the arrow’s impact speed just before hitting the cliff?
:::

:::exercise {fs-id1745072} type=problems-exercises 
PROBLEM:
In the standing broad jump, one squats and then pushes off with the legs to see how far one can jump. Suppose the extension of the legs from the crouch position is 0.600 m and the acceleration achieved from this position is 1.25 times the acceleration due to gravity, $g$. How far can they jump? State your assumptions. (Increased range can be achieved by swinging the arms in the direction of the jump.)
SOLUTION:
1.50 m, assuming launch angle of  $45º$
:::

:::exercise {fs-id1875777} type=problems-exercises 
PROBLEM:
The world long jump record is 8.95 m (Mike Powell, USA, 1991). Treated as a projectile, what is the maximum range obtainable by a person if he has a take-off speed of 9.5 m/s? State your assumptions.
:::

:::exercise {fs-id2254986} type=problems-exercises 
PROBLEM:
Serving at a speed of 170 km/h, a tennis player hits the ball at a height of 2.5 m and an angle $\theta$ below the horizontal. The base line is 11.9 m from the net, which is 0.91 m high. What is the angle $\theta$ such that the ball just crosses the net? Will the ball land in the service box, whose service line is 6.40 m from the net?
SOLUTION:
$\theta =6.1º$
yes, the ball lands at 5.3 m from the net
:::

:::exercise {fs-id2173828} type=problems-exercises 
PROBLEM:
A football quarterback is moving straight backward at a speed of 2.00 m/s when he throws a pass to a player 18.0 m straight downfield. (a) If the ball is thrown at an angle of $\text{25º}$ relative to the ground and is caught at the same height as it is released, what is its initial speed relative to the ground? (b) How long does it take to get to the receiver? (c) What is its maximum height above its point of release?
:::

:::exercise {fs-id1796436} type=problems-exercises 
PROBLEM:
Gun sights are adjusted to aim high to compensate for the effect of gravity, effectively making the gun accurate only for a specific range. (a) If a gun is sighted to hit targets that are at the same height as the gun and 100.0 m away, how low will the bullet hit if aimed directly at a target 150.0 m away? The muzzle velocity of the bullet is 275 m/s. (b) Discuss qualitatively how a larger muzzle velocity would affect this problem and what would be the effect of air resistance.
SOLUTION:
(a) −0.486 m
(b) The larger the muzzle velocity, the smaller the deviation in the vertical direction, because the time of flight would be smaller. Air resistance would have the effect of decreasing the time of flight, therefore increasing the vertical deviation.
:::

:::exercise {fs-id2177814} type=problems-exercises 
PROBLEM:
An eagle is flying horizontally at a speed of 3.00 m/s when the fish in her talons wiggles loose and falls into the lake 5.00 m below. Calculate the velocity of the fish relative to the water when it hits the water.
:::

:::exercise {fs-id1914025} type=problems-exercises 
PROBLEM:
An owl is carrying a mouse to the chicks in its nest. Its position at that time is 4.00 m west and 12.0 m above the center of the 30.0 cm diameter nest. The owl is flying east at 3.50 m/s at an angle 30.0º below the horizontal when it accidentally drops the mouse. Is the owl lucky enough to have the mouse hit the nest? To answer this question, calculate the horizontal position of the mouse when it has fallen 12.0 m.
SOLUTION:
4.23 m. No, the owl is not lucky; he misses the nest.
:::

:::exercise {fs-id1403577} type=problems-exercises 
PROBLEM:
Suppose a soccer player kicks the ball from a distance 30 m toward the goal. Find the initial speed of the ball if it just passes over the goal, 2.4 m above the ground, given the initial direction to be $\text{40º}$ above the horizontal.
:::

:::exercise {fs-id2260735} type=problems-exercises 
PROBLEM:
Can a goalkeeper at her/ his goal kick a soccer ball into the opponent’s goal without the ball touching the ground? The distance will be about 95 m. A goalkeeper can give the ball a speed of 30 m/s.
SOLUTION:
No, the maximum range (neglecting air resistance) is about 92 m.
:::

:::exercise {fs-id1437858} type=problems-exercises 
PROBLEM:
The free throw line in basketball is 4.57 m (15 ft) from the basket, which is 3.05 m (10 ft) above the floor. A player standing on the free throw line throws the ball with an initial speed of 8.15 m/s, releasing it at a height of 2.44 m (8 ft) above the floor. At what angle above the horizontal must the ball be thrown to exactly hit the basket? Note that most players will use a large initial angle rather than a flat shot because it allows for a larger margin of error. Explicitly show how you follow the steps involved in solving projectile motion problems.
:::

:::exercise {fs-id1827481} type=problems-exercises 
PROBLEM:
In 2007, Michael Carter (U.S.) set a world record in the shot put with a throw of 24.77 m. What was the initial speed of the shot if he released it at a height of 2.10 m and threw it at an angle of $38.0º$ above the horizontal? (Although the maximum distance for a projectile on level ground is achieved at $\text{45º}$ when air resistance is neglected, the actual angle to achieve maximum range is smaller; thus, $\text{38º}$ will give a longer range than $\text{45º}$ in the shot put.)
SOLUTION:
15.0 m/s
:::

:::exercise {fs-id1670278} type=problems-exercises 
PROBLEM:
A basketball player is running at $5\text{.}\text{00 m/s}$ directly toward the basket when he jumps into the air to dunk the ball. He maintains his horizontal velocity. (a) What vertical velocity does he need to rise 0.750 m above the floor? (b) How far from the basket (measured in the horizontal direction) must he start his jump to reach his maximum height at the same time as he reaches the basket?
:::

:::exercise {fs-id1779635} type=problems-exercises 
PROBLEM:
A football player punts the ball at a $45.0º$ angle. Without an effect from the wind, the ball would travel 60.0 m horizontally. (a) What is the initial speed of the ball? (b) When the ball is near its maximum height it experiences a brief gust of wind that reduces its horizontal velocity by 1.50 m/s. What distance does the ball travel horizontally?
SOLUTION:
(a) 24.2 m/s
(b) The ball travels a total of 57.4 m with the brief gust of wind.
:::

:::exercise {fs-id2046931} type=problems-exercises 
PROBLEM:
Prove that the trajectory of a projectile is parabolic, having the form $y=\text{ax}+{\text{bx}}^{2}$. To obtain this expression, solve the equation  $x={v}_{0x}t$ for  $t$ and substitute it into the expression for  $y={v}_{0y}t-(1/2){\text{gt}}^{2}$ (These equations describe the $x$ and $y$ positions of a projectile that starts at the origin.) You should obtain an equation of the form $y=\text{ax}+{\text{bx}}^{2}$ where $a$ and $b$ are constants.
:::

:::exercise {fs-id2133758} type=problems-exercises 
PROBLEM:
Derive $R=\frac{{v}_{0}^{2}\;\text{sin}\;{2θ}_{0}}{g}$ for the range of a projectile on level ground by finding the time $t$ at which $y$ becomes zero and substituting this value of $t$ into the expression for $x-{x}_{0}$, noting that $R=x-{x}_{0}$
SOLUTION:
$y-{y}_{0}=0={v}_{0y}t-\frac{1}{2}{gt}^{2}=({v}_{0}\;\text{sin}\;\theta )t-\frac{1}{2}{gt}^{2}$,
so that $t=\frac{2({v}_{0}\;\text{sin}\;\theta )}{g}$
$x-{x}_{0}={v}_{0x}t=({v}_{0}\;\text{cos}\;\theta )t=R,$ and substituting for $t$ gives:
$R={v}_{0}\;\text{cos}\;\theta (\frac{{2v}_{0}\;\text{sin}\;\theta}{g})=\frac{{2v}_{0}^{2}\;\text{sin}\;\theta \;\text{cos}\;\theta}{g}$
since $2\;\text{sin}\;\theta \;\text{cos}\;\theta =\text{sin}\;2θ,$ the range is:
$R=\frac{{{v}_{0}}^{2}\;\text{sin}\;2θ}{g}$.
:::

:::exercise {fs-id1794949} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) Find the maximum range of a super cannon that has a muzzle velocity of 4.0 km/s. (b) What is unreasonable about the range you found? (c) Is the premise unreasonable or is the available equation inapplicable? Explain your answer. (d) If such a muzzle velocity could be obtained, discuss the effects of air resistance, thinning air with altitude, and the curvature of the Earth on the range of the super cannon.
:::

:::exercise {fs-id1815382} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a ball tossed over a fence. Construct a problem in which you calculate the ball’s needed initial velocity to just clear the fence. Among the things to determine are; the height of the fence, the distance to the fence from the point of release of the ball, and the height at which the ball is released. You should also consider whether it is possible to choose the initial speed for the ball and just calculate the angle at which it is thrown. Also examine the possibility of multiple solutions given the distances and heights you have chosen.
:::

## Glossary
- {def} **air resistance**: a frictional force that slows the motion of objects as they travel through the air; when solving basic physics problems, air resistance is assumed to be zero
- {def} **kinematics**: the study of motion without regard to mass or force
- {def} **motion**: displacement of an object as a function of time
- {def} **projectile**: an object that travels through the air and experiences only acceleration due to gravity
- {def} **projectile motion**: the motion of an object that is subject only to the acceleration of gravity
- {def} **range**: the maximum horizontal distance that a projectile travels
- {def} **trajectory**: the path of a projectile through the air

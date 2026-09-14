# Angular Momentum and Its Conservation

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Understand the analogy between angular momentum and linear momentum.
- Observe the relationship between torque and angular momentum.
- Apply the law of conservation of angular momentum.
Why does Earth keep on spinning? What started it spinning to begin with? And how does an ice skater manage to spin faster and faster simply by pulling her arms in? Why does she not have to exert a torque to spin faster? Questions like these have answers based in angular momentum, the rotational analog to linear momentum.
By now the pattern is clear—every rotational phenomenon has a direct translational analog. It seems quite reasonable, then, to define {term:angular momentum} $L$ as

$$ L=Iω. $$  {eq:eip-337}

This equation is an analog to the definition of linear momentum as $p=\text{mv}$. Units for linear momentum are $\text{kg}⋅\text{m}\text{/s}$ while units for angular momentum are $\text{kg}⋅{\text{m}}^{2}\text{/s}$. As we would expect, an object that has a large moment of inertia $I$, such as Earth, has a very large angular momentum. An object that has a large angular velocity $\omega$, such as a centrifuge, also has a rather large angular momentum.

:::note [] Making Connections

Angular momentum is completely analogous to linear momentum, first presented in [Uniform Circular Motion and Gravitation](module:m42083). It has the same implications in terms of carrying rotation forward, and it is conserved when the net external torque is zero. Angular momentum, like linear momentum, is also a property of the atoms and subatomic particles.
:::

:::example {ex:fs-id1861377} Calculating Angular Momentum of the Earth
**Strategy**
No information is given in the statement of the problem; so we must look up pertinent data before we can calculate $L=Iω$. First, according to [ref:fs-id1838666](module:m42179), the formula for the moment of inertia of a sphere is

$$ I=\frac{2{\text{MR}}^{2}}{5} $$  {eq:eip-654}

so that

$$ L=Iω=\frac{2{\text{MR}}^{2}\omega}{5}. $$  {eq:eip-239}

Earth’s mass $M$ is $5\text{.}\text{979}\times {\text{10}}^{\text{24}}\;\text{kg}$ and its radius $R$ is $6\text{.}\text{376}\times {\text{10}}^{6}\;\text{m}$. The Earth’s angular velocity $\omega$ is, of course, exactly one revolution per day, but we must covert $\omega$ to radians per second to do the calculation in SI units.
**Solution**
Substituting $2\pi$ rad for rev and approximating 1 day as 24 hours or $8.64\times {10}^{4}\;\text{s}$  gives

$$ \begin{array}{lll}L & = & 0\text{.}4(5\text{.}\text{979}\times {\text{10}}^{\text{24}}\;\text{kg}){(6\text{.}\text{376}\times {\text{10}}^{6}\;\text{m})}^{2}(\frac{1\;\text{rev}}{\text{d}}) \\ & = & 9\text{.}\text{72}\times {\text{10}}^{\text{37}}\;\text{kg}⋅{\text{m}}^{2}⋅\text{rev/d}.\end{array} $$  {eq:eip-297}

Substituting $2π$ rad for $1$ rev and $8\text{.}\text{64}\times {\text{10}}^{4}\;\text{s}$ for 1 day gives

$$ \begin{array}{lll}L & = & (9\text{.}\text{72}\times {\text{10}}^{\text{37}}\;\text{kg}⋅{\text{m}}^{2})(\frac{2π\;\text{rad/rev}}{8\text{.}\text{64}\times {\text{10}}^{4}\;\text{s/d}})(1\;\text{rev/d}) \\ & = & 7\text{.}\text{07}\times {\text{10}}^{\text{33}}\;\text{kg}⋅{\text{m}}^{2}\text{/s}.\end{array} $$  {eq:eip-195}

**Discussion**
This number is large, demonstrating that Earth, as expected, has a tremendous angular momentum. The answer is approximate, because we have assumed a constant density for Earth in order to estimate its moment of inertia.
:::
When you push a merry-go-round, spin a bike wheel, or open a door, you exert a torque. If the torque you exert is greater than opposing torques, then the rotation accelerates, and angular momentum increases. The greater the net torque, the more rapid the increase in $L$. The relationship between torque and angular momentum is

$$ \text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}. $$  {eq:eip-628}

This expression is exactly analogous to the relationship between force and linear momentum, $F=\text{Δ}p/\text{Δ}t$. The equation $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}$ is very fundamental and broadly applicable. It is, in fact, the rotational form of Newton’s second law.

:::example {ex:fs-id3253985} Calculating the Torque Putting Angular Momentum Into a Rotating Food Tray
[ref:import-auto-id1438810] shows a rotating food tray, often called a lazy Susan, being turned by a person in quest of sustenance. Suppose the person exerts a 2.50 N force perpendicular to the lazy Susan’s 0.260-m radius for 0.150 s. (a) What is the final angular momentum of the lazy Susan if it starts from rest, assuming friction is negligible? (b) What is the final angular velocity of the lazy Susan, given that its mass is 4.00 kg and assuming its moment of inertia is that of a disk?

> FIGURE {fig:import-auto-id1438810} src=../../media/Figure_11_05_01a.jpg
> alt: The given figure shows a lazy Susan on which various eatables like cake, salad grapes, and a drink are kept. A hand is shown that applies a force F, indicated by a leftward pointing horizontal arrow. This force is perpendicular to the radius r and thus tangential to the circular lazy Susan.
> width: 250
> caption: A partygoer exerts a torque on a lazy Susan to make it rotate. The equation $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}$ gives the relationship between torque and the angular momentum produced.

**Strategy**
We can find the angular momentum by solving $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}$ for $\text{Δ}L$, and using the given information to calculate the torque. The final angular momentum equals the change in angular momentum, because the lazy Susan starts from rest. That is, $\text{Δ}L=L$. To find the final velocity, we must calculate $\omega$ from the definition of $L$ in $L=Iω$.
**Solution for (a)**
Solving $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}$ for $\text{Δ}L$ gives

$$ \text{Δ}L=(\text{net}\;\tau )Δt. $$  {eq:eip-994}

Because the force is perpendicular to $r$, we see that $\text{net}\;τ=\text{rF}$, so that

$$ \begin{array}{lll}L & = & \text{rF}\text{Δ}t=(0\text{.}\text{260 m})(2.50 N)(0.150 s) \\ & = & 9\text{.}\text{75}\times {\text{10}}^{-2}\;\text{kg}⋅{\text{m}}^{2}/\text{s}.\end{array} $$  {eq:eip-911}

**Solution for (b)**
The final angular velocity can be calculated from the definition of angular momentum,

$$ L=Iω. $$  {eq:eip-982}

Solving for $\omega$ and substituting the formula for the moment of inertia of a disk into the resulting equation gives

$$ \omega =\frac{L}{I}=\frac{L}{\frac{1}{2}{MR}^{2}}. $$  {eq:eip-963}

And substituting known values into the preceding equation yields

$$ \omega =\frac{9\text{.}\text{75}\times {\text{10}}^{-2}\;\text{kg}⋅{\text{m}}^{2}\text{/s}}{(0\text{.}\text{500})(4\text{.}\text{00}\;\text{kg})(0.260\;\text{m}){}^{2}}=0.721\;\text{rad/s}. $$  {eq:eip-98}

**Discussion**
Note that the imparted angular momentum does not depend on any property of the object but only on torque and time. The final angular velocity is equivalent to one revolution in 8.71 s (determination of the time period is left as an exercise for the reader), which is about right for a lazy Susan.
:::

:::example {ex:fs-id1974400} Calculating the Torque in a Kick
The person whose leg is shown in [ref:import-auto-id1817652] kicks his leg by exerting a 2000-N force with his upper leg muscle. The effective perpendicular lever arm is 2.20 cm. Given the moment of inertia of the lower leg is $1.25 kg⋅{\text{m}}^{2}$, (a) find the angular acceleration of the leg. (b) Neglecting the gravitational force, what is the rotational kinetic energy of the leg after it has rotated through $\text{57}\text{.}3º$ (1.00 rad)?

> FIGURE {fig:import-auto-id1817652} src=../../media/Figure_11_05_02a.jpg
> alt: The figure shows a human leg, from the thighs to the feet which is bent at the knee joint. The radius of curvature of the knee is indicated as r equal to two point two zero centimeters and the moment of inertia of the lower half of the leg is indicated as I equal to one point two five kilogram meter square. The direction of torque is indicated by a red arrow in anti-clockwise direction, near the knee.
> width: 250
> caption: The muscle in the upper leg gives the lower leg an angular acceleration and imparts rotational kinetic energy to it by exerting a torque about the knee. $\text{F}$ is a vector that is perpendicular to $\text{r}$. This example examines the situation.

**Strategy**
The angular acceleration can be found using the rotational analog to Newton’s second law, or $\alpha =\text{net}\;τ/I$. The moment of inertia $I$ is given and the torque can be found easily from the given force and perpendicular lever arm. Once the angular acceleration $\alpha$ is known, the final angular velocity and rotational kinetic energy can be calculated.
**Solution to (a)**
From the rotational analog to Newton’s second law, the angular acceleration $\alpha$ is

$$ \alpha =\frac{\text{net}\;τ}{I}. $$  {eq:eip-761}

Because the force and the perpendicular lever arm are given and the leg is vertical so that its weight does not create a torque, the net torque is thus

$$ \begin{array}{lll}\text{net}\;τ & = & {r}_{⊥}F \\ & = & (0\text{.}\text{0220 m})(\text{2000}\;\text{N}) \\ & = & \text{44}\text{.}\text{0 N}⋅\text{m.}\end{array} $$  {eq:eip-466}

Substituting this value for the torque and the given value for the moment of inertia into the expression for $\alpha$ gives

$$ \alpha =\frac{\text{44}\text{.}0\;\text{N}⋅\text{m}}{1\text{.}\text{25}\;\text{kg}⋅{\text{m}}^{2}}=\text{35}\text{.}2\;{\text{rad/s}}^{2}. $$  {eq:eip-388}

**Solution to (b)**
The final angular velocity can be calculated from the kinematic expression

$$ {\omega}^{2}={{\omega}_{0}}^{2}+2\alpha \theta $$  {eq:eip-632}

or

$$ {\omega}^{2}=2\alpha \theta $$  {eq:eip-493}

because the initial angular velocity is zero. The kinetic energy of rotation is

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2} $$  {eq:eip-182}

so it is most convenient to use the value of ${\omega}^{2}$ just found and the given value for the moment of inertia. The kinetic energy is then

$$ \begin{array}{lll}{\text{KE}}_{\text{rot}} & = & 0.5(1\text{.25}\;\text{kg}⋅{\text{m}}^{2})(\text{70.}4\;{\text{rad}}^{2}/{\text{s}}^{2}) \\ & = & \text{44}\text{.}0\;\text{J}\end{array}. $$  {eq:eip-877}

**Discussion**
These values are reasonable for a person kicking his leg starting from the position shown. The weight of the leg can be neglected in part (a) because it exerts no torque when the center of gravity of the lower leg is directly beneath the pivot in the knee. In part (b), the force exerted by the upper leg is so large that its torque is much greater than that created by the weight of the lower leg as it rotates. The rotational kinetic energy given to the lower leg is enough that it could give a ball a significant velocity by transferring some of this energy in a kick.
:::

:::note [] Making Connections: Conservation Laws

Angular momentum, like energy and linear momentum, is conserved. This universally applicable law is another sign of underlying unity in physical laws. Angular momentum is conserved when net external torque is zero, just as linear momentum is conserved when the net external force is zero.
:::

## Conservation of Angular Momentum
We can now understand why Earth keeps on spinning. As we saw in the previous example, $\text{Δ}L=(\text{net}\;τ)\text{Δ}t$. This equation means that, to change angular momentum, a torque must act over some period of time. Because Earth has a large angular momentum, a large torque acting over a long time is needed to change its rate of spin. So what external torques are there? Tidal friction exerts torque that is slowing Earth’s rotation, but tens of millions of years must pass before the change is very significant. Recent research indicates the length of the day was 18 h some 900 million years ago. Only the tides exert significant retarding torques on Earth, and so it will continue to spin, although ever more slowly, for many billions of years.
What we have here is, in fact, another conservation law. If the net torque is *zero*, then angular momentum is constant or *conserved*. We can see this rigorously by considering $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}$ for the situation in which the net torque is zero. In that case,

$$ \text{net}τ=0 $$  {eq:eip-283}

implying that

$$ \frac{\text{Δ}L}{\text{Δ}t}=0. $$  {eq:eip-576}

If the change in angular momentum $\text{Δ}L$ is zero, then the angular momentum is constant; thus,

$$ L=\text{constant}\;(\text{net}\;τ=0) $$  {eq:eip-10}

or

$$ L=L' (\text{net}τ=0). $$  {eq:eip-67}

These expressions are the {term:law of conservation of angular momentum}. Conservation laws are as scarce as they are important.
An example of conservation of angular momentum is seen in [ref:import-auto-id2452786], in which an ice skater is executing a spin. The net torque on her is very close to zero, because there is relatively little friction between her skates and the ice and because the friction is exerted very close to the pivot point. (Both $F$ and $r$ are small, and so $τ$ is negligibly small.) Consequently, she can spin for quite some time. She can do something else, too. She can increase her rate of spin by pulling her arms and legs in. Why does pulling her arms and legs in increase her rate of spin? The answer is that her angular momentum is constant, so that

$$ L=L'. $$  {eq:eip-572}

Expressing this equation in terms of the moment of inertia,

$$ Iω=I'\omega ', $$  {eq:eip-752}

where the primed quantities refer to conditions after she has pulled in her arms and reduced her moment of inertia. Because $I'$ is smaller, the angular velocity $\omega '$ must increase to keep the angular momentum constant. The change can be dramatic, as the following example shows.

> FIGURE {fig:import-auto-id2452786} src=../../media/Figure_11_05_03.jpg
> alt: The image a shows an ice skater spinning on the tip of her skate with both her arms and one leg extended. The image b shows the ice skater spinning on the tip of one skate, with her arms crossed and one leg supported on another.
> width: 275
> caption: (a) An ice skater is spinning on the tip of her skate with her arms extended. Her angular momentum is conserved because the net torque on her is negligibly small. In the next image, her rate of spin increases greatly when she pulls in her arms, decreasing her moment of inertia. The work she does to pull in her arms results in an increase in rotational kinetic energy.

:::example {ex:fs-id1947265} Calculating the Angular Momentum of a Spinning Skater
Suppose an ice skater, such as the one in [ref:import-auto-id2452786], is spinning at 0.800 rev/ s with her arms extended. She has a moment of inertia of $2\text{.}\text{34}\;\text{kg}⋅{\text{m}}^{2}$ with her arms extended and of $0\text{.}\text{363}\;\text{kg}⋅{\text{m}}^{2}$with her arms close to her body. (These moments of inertia are based on reasonable assumptions about a 60.0-kg skater.) (a) What is her angular velocity in revolutions per second after she pulls in her arms? (b) What is her rotational kinetic energy before and after she does this?
**Strategy**
In the first part of the problem, we are looking for the skater’s angular velocity $\omega '$ after she has pulled in her arms. To find this quantity, we use the conservation of angular momentum and note that the moments of inertia and initial angular velocity are given. To find the initial and final kinetic energies, we use the definition of rotational kinetic energy given by

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-489}

**Solution for (a)**
Because torque is negligible (as discussed above), the conservation of angular momentum given in $Iω=I'\omega '$ is applicable. Thus,

$$ L=L' $$  {eq:eip-310}

or

$$ Iω=I'\omega ' $$  {eq:eip-100}

Solving for $\omega '$and substituting known values into the resulting equation gives

$$ \begin{array}{lll}\omega ' & = & \frac{I}{I'}\omega =(\frac{\text{2.34 kg}⋅{m}^{2}}{0\text{.363 kg}⋅{m}^{2}})(\text{0.800 rev/s}) \\ & = & \text{5.16 rev/s.}\end{array} $$  {eq:eip-158}

**Solution for (b)**
Rotational kinetic energy is given by

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-377}

The initial value is found by substituting known values into the equation and converting the angular velocity to rad/s:

$$ \begin{array}{lll}{\text{KE}}_{\text{rot}} & = & (0\text{.}5)(2\text{.}\text{34}\;\text{kg}⋅{\text{m}}^{2}){((0\text{.}\text{800}\;\text{rev/s})(2π\;\text{rad/rev}))}^{2} \\ & = & 29.6\;\text{J.}\end{array} $$  {eq:eip-8}

The final rotational kinetic energy is

$$ {\text{KE}}_{\text{rot}}'=\frac{1}{2}I'{\omega '}^{2}. $$  {eq:eip-30}

Substituting known values into this equation gives

$$ \begin{array}{lll}K{E}_{\text{rot}}' & = & (0\text{.}5)(0\text{.363 kg}⋅{m}^{2}){[(5\text{.}\text{16 rev/s})(2π rad/rev)]}^{2} \\ & = & \text{191 J.}\end{array} $$  {eq:eip-307}

**Discussion**
In both parts, there is an impressive increase. First, the final angular velocity is large, although most world-class skaters can achieve spin rates about this great. Second, the final kinetic energy is much greater than the initial kinetic energy. The increase in rotational kinetic energy comes from work done by the skater in pulling in her arms. This work is internal work that depletes some of the skater’s food energy.
:::
There are several other examples of objects that increase their rate of spin because something reduced their moment of inertia. Tornadoes are one example. Storm systems that create tornadoes are slowly rotating. When the radius of rotation narrows, even in a local region, angular velocity increases, sometimes to the furious level of a tornado. Earth is another example. Our planet was born from a huge cloud of gas and dust, the rotation of which came from turbulence in an even larger cloud. Gravitational forces caused the cloud to contract, and the rotation rate increased as a result. (See [ref:import-auto-id1907322].)

> FIGURE {fig:import-auto-id1907322} src=../../media/Figure_11_05_04a.jpg
> alt: The first figure shows a cloud of dust and gas,which is in the shape of a distorted circle, rotating in anti-clockwise direction with an angular velocity omega, indicated by a curved black arrow, and having an angular momentum L. The second figure shows an elliptical cloud of dust with the Sun in the middle of it, rotating in anti-clockwise direction with an angular velocity omega dash, indicated by a curved black arrow, and having an angular momentum L. The third figure depicts the Solar System, with the Sun in the middle of it and the various planets revolve around it in their respective elliptical orbits in anti-clockwise direction, which is indicated by arrows. The angular momentum remains L.
> width: 350
> caption: The Solar System coalesced from a cloud of gas and dust that was originally rotating. The orbital motions and spins of the planets are in the same direction as the original spin and conserve the angular momentum of the parent cloud.

In case of human motion, one would not expect angular momentum to be conserved when a body interacts with the environment as its foot pushes off the ground. Astronauts floating in space aboard the International Space Station have no angular momentum relative to the inside of the ship if they are motionless. Their bodies will continue to have this zero value no matter how they twist about as long as they do not give themselves a push off the side of the vessel.

:::exercise {fs-id3112286} type=check-understanding Check Your Understanding

PROBLEM:
Is angular momentum completely analogous to linear momentum? What, if any, are their differences?
SOLUTION:
Yes, angular and linear momentums are completely analogous. While they are exact analogs they have different units and are not directly inter-convertible like forms of energy are.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1520916} type=ap-test-prep 
PROBLEM:
Which rotational system would be best to use as a model to measure how angular momentum changes when forces on the system are changed?
a. a fishing reel
b. a planet and its moon
c. a figure skater spinning
d. a person's lower leg
SOLUTION:
(a)
:::

:::exercise {fs-id1798043} type=ap-test-prep 
PROBLEM:
You are collecting data to study changes in the angular momentum of a bicycle wheel when a force is applied to it. Which of the following measurements would be least helpful to you?
a. the time for which the force is applied
b. the radius at which the force is applied
c. the angular velocity of the wheel when the force is applied
d. the direction of the force
:::

:::exercise {fs-id1545671} type=ap-test-prep 
PROBLEM:
Which torque applied to a disk with radius 7.0 cm for 3.5 s will produce an angular momentum of 25 N•m•s?
a. 7.1 N•m
b. 357.1 N•m
c. 3.6 N•m
d. 612.5 N•m
SOLUTION:
(a)
:::

:::exercise {fs-id2840694} type=ap-test-prep 
PROBLEM:
Which of the following would be the best way to produce measurable amounts of torque on a system to test the relationship between the angular momentum of the system, the average torque applied to the system, and the time for which the torque is applied?
a. having different numbers of people push on a merry-go-round
b. placing known masses on one end of a seesaw
c. touching the outer edge of a bicycle wheel to a treadmill that is moving at different speeds
d. hanging known masses from a string that is wound around a spool suspended horizontally on an axle
:::

:::exercise {fs-id1597661} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id1172066} src=../../media/Figure_11_05_08a.jpg
> alt: The figure is an illustration of the top view of a circular platform that is rotating counterclockwise. The location of a child is shown as a black dot, and the path traced by the child is shown as a dashed circle whose radius is smaller than the radius of the platform.
> caption: A curved arrow lies at the side of a gray disk. There is a point at the center of the disk, and around the point there is a dashed circle. There is a point labeled “Child” on the dashed circle. Below the disc is a label saying “Top View”.

The diagram above shows a top view of a child of mass *M* on a circular platform of mass 2*M* that is rotating counterclockwise. Assume the platform rotates without friction. Which of the following describes an action by the child that will increase the angular speed of the platform-child system and why?
a. The child moves toward the center of the platform, increasing the total angular momentum of the system.
b. The child moves toward the center of the platform, decreasing the rotational inertia of the system.
c. The child moves away from the center of the platform, increasing the total angular momentum of the system.
d. The child moves away from the center of the platform, decreasing the rotational inertia of the system.
SOLUTION:
(b)
:::

:::exercise {fs-id1631548} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id1685605} src=../../media/Figure_11_05_09a.jpg
> alt: The figure illustrates the elliptical orbit of a moon around a planet. The moon orbits clockwise. The planet is at one focus of the ellipse. Points A and B are the end points of the major axis of the ellipse. Point A is shown at the vertex farthest from the planet, and point B is shown at the vertex closest to the planet.
> caption: A point labeled “Moon” lies on a dashed ellipse. Two other points, labeled “A” and “B”, lie at opposite ends of the ellipse. A point labeled “Planet” lies inside the ellipse.

A moon is in an elliptical orbit about a planet as shown above. At point *A* the moon has speed *uA* and is at distance *RA* from the planet. At point *B* the moon has speed *uB*. Has the moon's angular momentum changed? Explain your answer.
:::

:::exercise {fs-id1445572} type=ap-test-prep 
PROBLEM:
A hamster sits 0.10 m from the center of a lazy Susan of negligible mass. The wheel spins with a frequency of 1.0 rev/s. How will the frequency of the lazy Susan change if the hamster walks to 0.30 m from the center of rotation? Assume zero friction and no external torque.
a. It will speed up to 2.0 rev/s.
b. It will speed up to 9.0 rev/s.
c. It will slow to 0.11 rev/s.
d. It will slow to 0.22 rev/s.
SOLUTION:
(c)
:::

:::exercise {fs-id1722786} type=ap-test-prep 
PROBLEM:
Earth has a mass of 6.0 × 10<sup>24</sup> kg, a radius of 6.4 × 10<sup>6</sup> m, and a rotational frequency of 1.2 × 10<sup>–5</sup> rev/s. How would the planet's rotational frequency change if a layer of Earth with mass 1.0 × 10<sup>23</sup> kg broke off of the Earth, decreasing Earth's radius by 0.2 × 10<sup>6</sup> m? Assume no friction.
:::

:::exercise {fs-id1665126} type=ap-test-prep 
PROBLEM:
Consider system A, consisting of two disks of radius *R*, with both rotating clockwise. Now consider system B, consisting of one disk of radius *R* rotating counterclockwise and another disk of radius 2*R* rotating clockwise. All of the disks have the same mass, and all have the same magnitude of angular velocity.
Which system has the greatest angular momentum?
a. A
b. B
c. They're equal.
d. Not enough information
SOLUTION:
(b)
:::

:::exercise {fs-id2019185} type=ap-test-prep 
PROBLEM:
Assume that a baseball bat being swung at 3π rad/s by a batting machine is equivalent to a 1.1 m thin rod with a mass of 1.0 kg. How fast would a 0.15 kg baseball that squarely hits the very tip of the bat have to be going for the net angular momentum of the bat-ball system to be zero?
:::

## Section Summary {section:section-summary}
- Every rotational phenomenon has a direct translational analog , likewise angular momentum $L$ can be defined as $L=Iω.$
- This equation is an analog to the definition of linear momentum as $p=\text{mv}$. The relationship between torque and angular momentum is $\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}.$
- Angular momentum, like energy and linear momentum, is conserved. This universally applicable law is another sign of underlying unity in physical laws. Angular momentum is conserved when net external torque is zero, just as linear momentum is conserved when the net external force is zero.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2410017} type=conceptual-questions 
PROBLEM:
When you start the engine of your car with the transmission in neutral, you notice that the car rocks in the opposite sense of the engine’s rotation. Explain in terms of conservation of angular momentum. Is the angular momentum of the car conserved for long (for more than a few seconds)?
:::

:::exercise {fs-id2640407} type=conceptual-questions 
PROBLEM:
Suppose a child walks from the outer edge of a rotating merry-go round to the inside. Does the angular velocity of the merry-go-round increase, decrease, or remain the same? Explain your answer.

> FIGURE {fig:import-auto-id3063480} src=../../media/Figure_11_05_07a.jpg
> alt: In figure A, there is a merry go round. A child is jumping radially outward. In figure B, a child is jumping backward to the direction of motion of merry go round. In figure C, a child is jumping from it to hang from the branch of the tree. In figure D, a child is jumping from the merry go round tangentially to its circumference.
> width: 300
> caption: A child may jump off a merry-go-round in a variety of directions.

:::

:::exercise {fs-id1994709} type=conceptual-questions 
PROBLEM:
Suppose a child gets off a rotating merry-go-round. Does the angular velocity of the merry-go-round increase, decrease, or remain the same if: (a) He jumps off radially? (b) He jumps backward to land motionless? (c) He jumps straight up and hangs onto an overhead tree branch? (d) He jumps off forward, tangential to the edge? Explain your answers.  (Refer to [ref:import-auto-id3063480]).
:::

:::exercise {fs-id2052739} type=conceptual-questions 
PROBLEM:
Helicopters have a small propeller on their tail to keep them from rotating in the opposite direction of their main lifting blades. Explain in terms of Newton’s third law why the helicopter body rotates in the opposite direction to the blades.
:::

:::exercise {fs-id3180885} type=conceptual-questions 
PROBLEM:
Whenever a helicopter has two sets of lifting blades, they rotate in opposite directions (and there will be no tail propeller). Explain why it is best to have the blades rotate in opposite directions.
:::

:::exercise {fs-id2446255} type=conceptual-questions 
PROBLEM:
Describe how work is done by a skater pulling in her arms during a spin. In particular, identify the force she exerts on each arm to pull it in and the distance each moves, noting that a component of the force is in the direction moved. Why is angular momentum not increased by this action?
:::

:::exercise {fs-id2595479} type=conceptual-questions 
PROBLEM:
When there is a global heating trend on Earth, the atmosphere expands and the length of the day increases very slightly. Explain why the length of a day increases.
:::

:::exercise {fs-id1985120} type=conceptual-questions 
PROBLEM:
Nearly all conventional piston engines have flywheels on them to smooth out engine vibrations caused by the thrust of individual piston firings. Why does the flywheel have this effect?
:::

:::exercise {fs-id3450198} type=conceptual-questions 
PROBLEM:
Jet turbines spin rapidly. They are designed to fly apart if something makes them seize suddenly, rather than transfer angular momentum to the plane’s wing, possibly tearing it off. Explain how flying apart conserves angular momentum without transferring it to the wing.
:::

:::exercise {fs-id3093611} type=conceptual-questions 
PROBLEM:
An astronaut tightens a bolt on a satellite in orbit. He rotates in a direction opposite to that of the bolt, and the satellite rotates in the same direction as the bolt. Explain why. If a handhold is available on the satellite, can this counter-rotation be prevented? Explain your answer.
:::

:::exercise {fs-id1080849} type=conceptual-questions 
PROBLEM:
Competitive divers pull their limbs in and curl up their bodies when they do flips. Just before entering the water, they fully extend their limbs to enter straight down. Explain the effect of both actions on their angular velocities. Also explain the effect on their angular momenta.

> FIGURE {fig:import-auto-id2209781} src=../../media/Figure_11_05_05a.jpg
> alt: The given figure shows a diver who curls her body while flipping and then fully extends her limbs to enter straight down into water.
> caption: The diver spins rapidly when curled up and slows when she extends her limbs before entering the water.

:::

:::exercise {fs-id1860696} type=conceptual-questions 
PROBLEM:
Draw a free body diagram to show how a diver gains angular momentum when leaving the diving board.
:::

:::exercise {eip-746} type=conceptual-questions 
PROBLEM:
In terms of angular momentum, what is the advantage of giving a football or a rifle bullet a spin when throwing or releasing it?

> FIGURE {fig:eip-id2784428} src=../../media/Figure_11_05_06a.jpg
> alt: A close-up view looking down the rifled barrel of a large artillery piece or cannon, showcasing the distinct spiral grooves inside its muzzle.
> width: 250
> caption: The image shows a view down the barrel of a cannon, emphasizing its rifling. Rifling in the barrel of a canon causes the projectile to spin just as is the case for rifles (hence the name for the grooves in the barrel). (credit: Elsie esq., Flickr)

:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1615758} type=problems-exercises 
PROBLEM:
(a) Calculate the angular momentum of the Earth in its orbit around the Sun.
(b) Compare this angular momentum with the angular momentum of Earth on its axis.
SOLUTION:
(a) $2\text{.}\text{66}\times {\text{10}}^{\text{40}}\;\text{kg}⋅{\text{m}}^{2}\text{/s}$
(b) $7\text{.}\text{07}\times {\text{10}}^{\text{33}}\;\text{kg}⋅{\text{m}}^{2}\text{/s}$
The angular momentum of the Earth in its orbit around the Sun is $3\text{.}\text{77}\times {\text{10}}^{6}$ times larger than the angular momentum of the Earth around its axis.
:::

:::exercise {fs-id3260323} type=problems-exercises 
PROBLEM:
(a) What is the angular momentum of the Moon in its orbit around Earth?
(b) How does this angular momentum compare with the angular momentum of the Moon on its axis? Remember that the Moon keeps one side toward Earth at all times.
(c) Discuss whether the values found in parts (a) and (b) seem consistent with the fact that tidal effects with Earth have caused the Moon to rotate with one side always facing Earth.
:::

:::exercise {fs-id1426438} type=problems-exercises 
PROBLEM:
Suppose you start an antique car by exerting a force of 300 N on its crank for 0.250 s. What angular momentum is given to the engine if the handle of the crank is 0.300 m from the pivot and the force is exerted to create maximum torque the entire time?
SOLUTION:
$\text{22}\text{.}\text{5 kg}⋅{\text{m}}^{2}\text{/s}$
:::

:::exercise {fs-id1215909} type=problems-exercises 
PROBLEM:
A playground merry-go-round has a mass of 120 kg and a radius of 1.80 m and it is rotating with an angular velocity of 0.500 rev/s. What is its angular velocity after a 22.0-kg child gets onto it by grabbing its outer edge? The child is initially at rest.
:::

:::exercise {fs-id3173435} type=problems-exercises 
PROBLEM:
Three children are riding on the edge of a merry-go-round that is 100 kg, has a 1.60-m radius, and is spinning at 20.0 rpm. The children have masses of 22.0, 28.0, and 33.0 kg. If the child who has a mass of 28.0 kg moves to the center of the merry-go-round, what is the new angular velocity in rpm?
SOLUTION:
25.3 rpm
:::

:::exercise {fs-id2051402} type=problems-exercises 
PROBLEM:
(a) Calculate the angular momentum of an ice skater spinning at 6.00 rev/s given his moment of inertia is $0\text{.}\text{400}\;\text{kg}⋅{\text{m}}^{2}$. (b) He reduces his rate of spin (his angular velocity) by extending his arms and increasing his moment of inertia. Find the value of his moment of inertia if his angular velocity decreases to 1.25 rev/s. (c) Suppose instead he keeps his arms in and allows friction of the ice to slow him to 3.00 rev/s. What average torque was exerted if this takes 15.0 s?
:::

:::exercise {fs-id3291177} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider the Earth-Moon system. Construct a problem in which you calculate the total angular momentum of the system including the spins of the Earth and the Moon on their axes and the orbital angular momentum of the Earth-Moon system in its nearly monthly rotation. Calculate what happens to the Moon’s orbital radius if the Earth’s rotation decreases due to tidal drag. Among the things to be considered are the amount by which the Earth’s rotation slows and the fact that the Moon will continue to have one side always facing the Earth.
:::

## Glossary
- {def} **angular momentum**: the product of moment of inertia and angular velocity
- {def} **law of conservation of angular momentum**: angular momentum is conserved, i.e., the initial angular momentum is equal to the final angular momentum when no external torque is applied to the system

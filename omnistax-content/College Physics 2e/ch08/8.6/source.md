# Collisions of Point Masses in Two Dimensions

## Learning Objectives
By the end of this section, you will be able to:
- Discuss two dimensional collisions as an extension of one dimensional analysis.
- Define point masses.
- Derive an expression for conservation of momentum along *x*-axis and *y*-axis.
- Describe elastic collisions of two objects with equal mass.
- Determine the magnitude and direction of the final velocity given initial velocity, and scattering angle.
In the previous two sections, we considered only one-dimensional collisions; during such collisions, the incoming and outgoing velocities are all along the same line. But what about collisions, such as those between billiard balls, in which objects scatter to the side? These are two-dimensional collisions, and we shall see that their study is an extension of the one-dimensional analysis already presented. The approach taken (similar to the approach in discussing two-dimensional kinematics and dynamics) is to choose a convenient coordinate system and resolve the motion into components along perpendicular axes. Resolving the motion yields a pair of one-dimensional problems to be solved simultaneously.
One complication arising in two-dimensional collisions is that the objects might rotate before or after their collision. For example, if two ice skaters hook arms as they pass by one another, they will spin in circles. We will not consider such rotation until later, and so for now we arrange things so that no rotation is possible. To avoid rotation, we consider only the scattering of {term:point masses}—that is, structureless particles that cannot rotate or spin.
We start by assuming that   ${F}_{\text{net}}=0$, so that momentum $p$  is conserved. The simplest collision is one in which one of the particles is initially at rest. (See [ref:import-auto-id2747387].) The best choice for a coordinate system is one with an axis parallel to the velocity of the incoming particle, as shown in [ref:import-auto-id2747387]. Because momentum is conserved, the components of momentum along the   $x$- and $y$-axes $({p}_{x}\;\text{and}\;{p}_{y})$  will also be conserved, but with the chosen coordinate system,     ${p}_{y}$ is initially zero and   ${p}_{x}$   is the momentum of the incoming particle. Both facts simplify the analysis. (Even with the simplifying assumptions of point masses, one particle initially at rest, and a convenient coordinate system, we still gain new insights into nature from the analysis of two-dimensional collisions.)

> FIGURE {fig:import-auto-id2747387} src=../../media/Figure_09_06_02a.jpg
> alt: A purple ball of mass m1 moves with velocity V 1 toward the right side along the X direction. The orange ball of mass m 2 is initially at rest. The total momentum is the momentum possessed by purple ball only. After collision purple ball moves with velocity v 1prime in the positive X Y plane making an angle theta 1 with the x axis and the orange ball moves in the X Y plane below the x axis making an angle theta 2 with the x axis. The total momentum would be the sum of the momentum of purple ball p1 prime and the orange ball p 2 prime. In two-dimensional collision too the momentum before and after collision remains the same.
> width: 420
> caption: A two-dimensional collision with the coordinate system chosen so that ${m}_{2}$ is initially at rest and ${v}_{1}$ is parallel to the $x$ -axis. This coordinate system is sometimes called the laboratory coordinate system, because many scattering experiments have a target that is stationary in the laboratory, while particles are scattered from it to determine the particles that make-up the target and how they are bound together. The particles may not be observed directly, but their initial and final velocities are.

Along the $x$-axis, the equation for conservation of momentum is

$$ {p}_{1x}+{p}_{2x}={p}_{1x}^{'}+{p}_{2x}^{'}. $$  {eq:eip-854}

Where the subscripts denote the particles and axes and the primes denote the situation after the collision. In terms of masses and velocities, this equation is

$$ {m}_{1}{v}_{1x}+{m}_{2}{v}_{2x}={m}_{1}{v}_{1x}^{′}+{m}_{2}{v}_{2x}^{′}. $$  {eq:eip-881}

But because particle 2 is initially at rest, this equation becomes

$$ {m}_{1}{v}_{1x}={m}_{1}{v}_{1x}^{'}+{m}_{2}{v}_{2x}^{'}. $$  {eq:eip-166}

The components of the velocities along the $x$-axis have the form $v\;\text{cos}\;\theta$. Because particle 1 initially moves along the $x$-axis, we find ${v}_{1x}={v}_{1}$.
Conservation of momentum along the $x$-axis gives the following equation:

$$ {m}_{1}{v}_{1}={m}_{1}{v}_{1}^{'}\;\text{cos}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{cos}\;{\theta}_{2}, $$  {eq:eip-488}

where ${\theta}_{1}$ and ${\theta}_{2}$ are as shown in [ref:import-auto-id2747387].

:::note [] Conservation of Momentum along the *$x$*-axis

$$ {m}_{1}{v}_{1}={m}_{1}{v}_{1}^{'}\;\text{cos}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{cos}\;{\theta}_{2} $$  {eq:eip-224}

:::
Along the $y$-axis, the equation for conservation of momentum is

$$ {p}_{1y}+{p}_{2y}={p}_{1y}^{'}+{p}_{2y}^{'} $$  {eq:eip-742}

or

$$ {m}_{1}{v}_{1y}+{m}_{2}{v}_{2y}={m}_{1}{v}_{1y}^{'}+{m}_{2}{v}_{2y}^{'}. $$  {eq:eip-770}

But ${v}_{1y}$ is zero, because particle 1 initially moves along the $x$-axis. Because particle 2 is initially at rest, ${v}_{2y}$ is also zero. The equation for conservation of momentum along the $y$-axis becomes

$$ 0={m}_{1}{v}_{1y}^{'}+{m}_{2}{v}_{2y}^{'}. $$  {eq:eip-10}

The components of the velocities along the $y$-axis have the form $v\;\text{sin}\;\theta$.
Thus, conservation of momentum along the $y$-axis gives the following equation:

$$ 0={m}_{1}{v}_{1}^{'}\;\text{sin}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{sin}\;{\theta}_{2}. $$  {eq:eip-545}

:::note [] Conservation of Momentum along the $y$-axis

$$ 0={m}_{1}{v}_{1}^{'}\;\text{sin}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{sin}\;{\theta}_{2} $$  {eq:eip-860}

:::
The equations of conservation of momentum along the *$x$*-axis and $y$-axis are very useful in analyzing two-dimensional collisions of particles, where one is originally stationary (a common laboratory situation). But two equations can only be used to find two unknowns, and so other data may be necessary when collision experiments are used to explore nature at the subatomic level.

:::example {ex:fs-id1311272} Determining the Final Velocity of an Unseen Object from the Scattering of Another Object
Suppose the following experiment is performed. A 0.250-kg object $({m}_{1})$ is slid on a frictionless surface into a dark room, where it strikes an initially stationary object with mass of 0.400 kg $({m}_{2})$. The 0.250-kg object emerges from the room at an angle of $\text{45}\text{.}0º$ with its incoming direction.
The speed of the 0.250-kg object is originally 2.00 m/s and is 1.50 m/s after the collision. Calculate the magnitude and direction of the velocity $({v'}_{2}$ and ${\theta}_{2})$ of the 0.400-kg object after the collision.
**Strategy**
Momentum is conserved because the surface is frictionless. The coordinate system shown in [ref:import-auto-id2747922] is one in which ${m}_{2}$ is originally at rest and the initial velocity is parallel to the $x$-axis, so that conservation of momentum along the $x$- and *$y$*-axes is applicable.
Everything is known in these equations except ${v}_{2}^{'}$ and ${\theta}_{2}$, which are precisely the quantities we wish to find. We can find two unknowns because we have two independent equations: the equations describing the conservation of momentum in the $x$- and $y$-directions.
**Solution**
Solving ${m}_{1}{v}_{1}={m}_{1}{v}_{1}^{'}\;\text{cos}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{cos}\;{\theta}_{2}$ for ${v}_{2}^{'}\;\text{cos}\;{\theta}_{2}$ and $0={m}_{1}{v}_{1}^{'}\;\text{sin}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{sin}\;{\theta}_{2}$ for ${v}_{2}^{'}\;\text{sin}\;{\theta}_{2}$ and taking the ratio yields an equation (in which θ_2 is the only unknown quantity. Applying the identity $(\text{tan}\;\theta =\frac{\text{sin}\;\theta}{\text{cos}\;\theta})$, we obtain:

$$ \text{tan}\;{\theta}_{2}=\frac{{v}_{1}^{'}\;\text{sin}\;{\theta}_{1}}{{v}_{1}^{'}\;\text{cos}\;{\theta}_{1}-{v}_{1}}. $$  {eq:eip-329}

Entering known values into the previous equation gives

$$ \text{tan}\;{\theta}_{2}=\frac{(1\text{.}\text{50}\;\text{m/s})(0\text{.}\text{7071})}{(1\text{.}\text{50}\;\text{m/s})(0\text{.}\text{7071})-2\text{.}\text{00}\;\text{m/s}}=-1\text{.}\text{129}. $$  {eq:eip-45}

Thus,

$$ {\theta}_{2}={\text{tan}}^{-1}(-1\text{.}\text{129})=\text{311}\text{.}5º\approx \text{312º}. $$  {eq:eip-532}

Angles are defined as positive in the counter clockwise direction, so this angle indicates that ${m}_{2}$ is scattered to the right in [ref:import-auto-id2747922], as expected (this angle is in the fourth quadrant). Either equation for the $x$- or $y$-axis can now be used to solve for ${v'}_{2}$, but the latter equation is easiest because it has fewer terms.

$$ {v'}_{2}=-\frac{{m}_{1}}{{m}_{2}}{v'}_{1}\frac{\text{sin}\;{\theta}_{1}}{\text{sin}\;{\theta}_{2}} $$  {eq:eip-516}

Entering known values into this equation gives

$$ {v'}_{2}=-(\frac{0.250\;\text{kg}}{0.400\;\text{kg}})(1\text{.}\text{50}\;\text{m/s})(\frac{0.7071}{-0\text{.}\text{7485}})\text{.} $$  {eq:eip-497}

Thus,

$$ {v'}_{2}=0.886\;\text{m/s}. $$  {eq:eip-721}

**Discussion**
It is instructive to calculate the internal kinetic energy of this two-object system before and after the collision. (This calculation is left as an end-of-chapter problem.) If you do this calculation, you will find that the internal kinetic energy is less after the collision, and so the collision is inelastic. This type of result makes a physicist want to explore the system further.
:::

> FIGURE {fig:import-auto-id2747922} src=../../media/Figure_09_06_03a-9fe0.jpg
> alt: A purple ball of mass m1 and velocity v one moves in the right direction into a dark room. It collides with an object of mass m two of value zero point four zero milligrams which was initially at rest and then leaves the dark room from the top right hand side making an angle of forty-five degrees with the horizontal and at velocity v one prime. The net external force on the system is zero. The momentum before and after collision remains the same. The velocity v two prime of the mass m two and the angle theta two it would make with the horizontal after collision not given.
> width: 300
> caption: A collision taking place in a dark room is explored in  [ref:fs-id1311272]. The incoming object ${m}_{1}$ is scattered by an initially stationary object. Only the stationary object’s mass ${m}_{2}$ is known. By measuring the angle and speed at which ${m}_{1}$ emerges from the room, it is possible to calculate the magnitude and direction of the initially stationary object’s velocity after the collision.

## Elastic Collisions of Two Objects with Equal Mass
Some interesting situations arise when the two colliding objects have equal mass and the collision is elastic. This situation is nearly the case with colliding billiard balls, and precisely the case with some subatomic particle collisions. We can thus get a mental image of a collision of subatomic particles by thinking about billiards (or pool). (Refer to [ref:import-auto-id2747387] for masses and angles.) First, an elastic collision conserves internal kinetic energy. Again, let us assume object 2 $({m}_{2})$ is initially at rest. Then, the internal kinetic energy before and after the collision of two objects that have equal masses is

$$ \frac{1}{2}{{\text{mv}}_{1}}^{2}=\frac{1}{2}{{\text{mv}'}_{1}}^{2}+\frac{1}{2}{{\text{mv}'}_{2}}^{2}. $$  {eq:eip-213}

Because the masses are equal, ${m}_{1}={m}_{2}=m$. Algebraic manipulation (left to the reader) of conservation of momentum in the $x$- and *$y$*-directions can show that

$$ \frac{1}{2}{{\text{mv}}_{1}}^{2}=\frac{1}{2}{{\text{mv}'}_{1}}^{2}+\frac{1}{2}{{\text{mv}'}_{2}}^{2}+{\text{mv}'}_{1}{v'}_{2}\;\text{cos}({\theta}_{1}-{\theta}_{2}). $$  {eq:eip-717}

(Remember that ${\theta}_{2}$ is negative here.) The two preceding equations can both be true only if

$$ m{v}_{1}^{'}{v}_{2}^{'}\;\text{cos}({\theta}_{1}-{\theta}_{2})=0. $$  {eq:eip-590}

There are three ways that this term can be zero. They are
- ${v}_{1}^{'}=0$: head-on collision; incoming ball stops
- ${v}_{2}^{'}=0$: no collision; incoming ball continues unaffected
- $\text{cos}({\theta}_{1}-{\theta}_{2})=0$: angle of separation $({\theta}_{1}-{\theta}_{2})$ is $\text{90º}$ after the collision
All three of these ways are familiar occurrences in billiards and pool, although most of us try to avoid the second. If you play enough pool, you will notice that the angle between the balls is very close to $90º$ after the collision, although it will vary from this value if a great deal of spin is placed on the ball. (Large spin carries in extra energy and a quantity called *angular momentum*, which must also be conserved.) The assumption that the scattering of billiard balls is elastic is reasonable based on the correctness of the three results it produces. This assumption also implies that, to a good approximation, momentum is conserved for the two-ball system in billiards and pool. The problems below explore these and other characteristics of two-dimensional collisions.

:::note [] Connections to Nuclear and Particle Physics

Two-dimensional collision experiments have revealed much of what we know about subatomic particles, as we shall see in [Medical Applications of Nuclear Physics](module:m42649) and [Particle Physics](module:m42669). Ernest Rutherford, for example, discovered the nature of the atomic nucleus from such experiments.
:::

## Test Prep for AP Courses

:::exercise {fs-id2039335} type=ap-test-prep 
PROBLEM:
Two cars of equal mass approach an intersection. Car A is moving east at a speed of 45 m/s. Car B is moving south at a speed of 35 m/s. They collide inelastically and stick together after the collision, moving as one object. Which of the following statements is true about the center-of-mass velocity of this system?
1. The center-of-mass velocity will decrease after the collision as a result of lost energy (but not drop to zero).
2. The center-of-mass velocity will remain the same after the collision since momentum is conserved.
3. The center-of-mass velocity will drop to zero since the two objects stick together.
4. The magnitude of the center-of-mass velocity will remain the same, but the direction of the velocity will change.
SOLUTION:
(b)
:::

:::exercise {fs-id2218337} type=ap-test-prep 
PROBLEM:
Car A has a mass of 2000 kg and approaches an intersection with a velocity of 38 m/s directed to the east. Car B has a mass of 3500 kg and approaches the intersection with a velocity of 53 m/s directed 63° north of east. The two cars collide and stick together after the collision. Will the center-of-mass velocity change as a result of the collision? Explain why or why not. Calculate the center-of-mass velocity before and after the collision.
:::

## Section Summary
- The approach to two-dimensional collisions is to choose a convenient coordinate system and break the motion into components along perpendicular axes. Choose a coordinate system with the $x$-axis parallel to the velocity of the incoming particle.
- Two-dimensional collisions of point masses where mass 2 is initially at rest conserve momentum along the initial direction of mass 1 (the $x$-axis), stated by
${m}_{1}{v}_{1}={m}_{1}{v'}_{1}\;\text{cos}\;{\theta}_{1}+{m}_{2}{v'}_{2}\;\text{cos}\;{\theta}_{2}$ and along the direction perpendicular to the initial direction (the
$y$-axis) stated by
$0={m}_{1}{v'}_{1y}+{m}_{2}{v'}_{2y}$.
- The internal kinetic before and after the collision of two objects that have equal masses is 

$$ \frac{1}{2}{{\text{mv}}_{1}}^{2}=\frac{1}{2}{{\text{mv}'}_{1}}^{2}+\frac{1}{2}{{\text{mv}'}_{2}}^{2}+{\text{mv}'}_{1}{v'}_{2}\;\text{cos}({\theta}_{1}-{\theta}_{2}). $$  {eq:eip-id2398000}

- Point masses are structureless particles that cannot spin.

## Conceptual Questions

:::exercise {fs-id2093269} type=conceptual-questions 
PROBLEM:
[ref:import-auto-id2692680] shows a cube at rest and a small object heading toward it. (a) Describe the directions (angle ${\theta}_{1}$) at which the small object can emerge after colliding elastically with the cube. How does ${\theta}_{1}$ depend on $b$, the so-called impact parameter? Ignore any effects that might be due to rotation after the collision, and assume that the cube is much more massive than the small object. (b) Answer the same questions if the small object instead collides with a massive sphere.

> FIGURE {fig:import-auto-id2692680} src=../../media/Figure_09_06_05a.jpg
> alt: A ball m one moves horizontally to the right with speed v one. It will collide with a stationary square labeled capital m two that is rotated at approximately forty-five degrees. The point of impact is on a face of the square a distance b above the center of the square. After the collision the ball is shown heading off at an angle theta one above the horizontal with a speed v one prime. The square remains essentially stationary (v 2 prime is approximately zero).
> width: 400
> caption: A small object approaches a collision with a much more massive cube, after which its velocity has the direction ${\theta}_{1}$. The angles at which the small object can be scattered are determined by the shape of the object it strikes and the impact parameter *$b$*.

:::

## Problems & Exercises

:::exercise {fs-id1596936} type=problems-exercises 
PROBLEM:
Two identical pucks collide on an air hockey table. One puck was originally at rest. (a) If the incoming puck has a speed of 6.00 m/s and scatters to an angle of $\text{30}\text{.}0º$,what is the velocity (magnitude and direction) of the second puck? (You may use the result that ${\theta}_{1}-{\theta}_{2}=\text{90º}$ for elastic collisions of objects that have identical masses.) (b) Confirm that the collision is elastic.
SOLUTION:
(a) 3.00 m/s, $\text{60º}$ below $x$-axis
(b) Find speed of first puck after collision: $0=m{v}_{1}^{'}\;\text{sin}\;\text{30º}-m{v}_{2}^{'}\;\text{sin}\;\text{60º}⇒{v}_{1}^{'}={v}_{2}^{′}\frac{\text{sin}\;\text{60º}}{\text{sin}\;\text{30º}}=\text{5.196 m/s}$
Verify that ratio of initial to final KE equals one: $(\begin{array}{l}\text{KE}=\frac{1}{2}{{mv}_{1}}^{2}=18m\;\text{J} \\ \text{KE}=\frac{1}{2}{{mv'}_{1}}^{2}+\frac{1}{2}{{mv'}_{2}}^{2}=18m\;\text{J}\end{array})\frac{\text{KE}}{\text{KE′}}=1.00$
:::

:::exercise {fs-id3179260} type=problems-exercises 
PROBLEM:
Confirm that the results of the example [ref:fs-id1311272] do conserve momentum in both the *$x$*- and *$y$*-directions.
:::

:::exercise {fs-id1284914} type=problems-exercises 
PROBLEM:
A 3000-kg cannon is mounted so that it can recoil only in the horizontal direction. (a) Calculate its recoil velocity when it fires a 15.0-kg shell at 480 m/s at an angle of $\text{20}\text{.}0º$ above the horizontal. (b) What is the kinetic energy of the cannon? This energy is dissipated as heat transfer in shock absorbers that stop its recoil. (c) What happens to the vertical component of momentum that is imparted to the cannon when it is fired?
SOLUTION:
(a) $-2\text{.}\text{26}\;\text{m/s}$
(b) $7\text{.}\text{63}\times {\text{10}}^{3}\;\text{J}$
(c) The ground will exert a normal force to oppose recoil of the cannon in the vertical direction. The momentum in the vertical direction is transferred to the earth. The energy is transferred into the ground, making a dent where the cannon is. After long barrages, cannon have erratic aim because the ground is full of divots.
:::

:::exercise {fs-id2994591} type=problems-exercises 
PROBLEM:
*Professional Application*
A 5.50-kg bowling ball moving at 9.00 m/s collides with a 0.850-kg bowling pin, which is scattered at an angle of $85.0º$ to the initial direction of the bowling ball and with a speed of 15.0 m/s. (a) Calculate the final velocity (magnitude and direction) of the bowling ball. (b) Is the collision elastic? (c) Linear kinetic energy is greater after the collision. Discuss how spin on the ball might be converted to linear kinetic energy in the collision.
:::

:::exercise {fs-id2722872} type=problems-exercises 
PROBLEM:
*Professional Application*
Ernest Rutherford (the first New Zealander to be awarded the Nobel Prize in Chemistry) demonstrated that nuclei were very small and dense by scattering helium-4 nuclei $({}^{4}\text{He})$ from gold-197 nuclei $({}^{\text{197}}\text{Au})$. The energy of the incoming helium nucleus was $8.00\times {\text{10}}^{-\text{13}}\;\text{J}$, and the masses of the helium and gold nuclei were $6.68\times {\text{10}}^{-\text{27}}\;\text{kg}$ and $3.29\times {\text{10}}^{-\text{25}}\;\text{kg}$, respectively (note that their mass ratio is 4 to 197). (a) If a helium nucleus scatters to an angle of $\text{120º}$ during an elastic collision with a gold nucleus, calculate the helium nucleus’s final speed and the final velocity (magnitude and direction) of the gold nucleus. (b) What is the final kinetic energy of the helium nucleus?
SOLUTION:
(a) $5\text{.}\text{36}\times {\text{10}}^{5}\;\text{m/s}$ at $-\text{29.5º}$
(b) $7\text{.}\text{52}\times {\text{10}}^{-\text{13}}\;\text{J}$
:::

:::exercise {fs-id3136237} type=problems-exercises 
PROBLEM:
**Professional Application**
Two cars collide at an icy intersection and stick together afterward. The first car has a mass of 1200 kg and is approaching at $8\text{.}\text{00}\;\text{m/s}$ due south. The second car has a mass of 850 kg and is approaching at $\text{17}\text{.}0\;\text{m/s}$ due west. (a) Calculate the final velocity (magnitude and direction) of the cars. (b) How much kinetic energy is lost in the collision? (This energy goes into deformation of the cars.) "Note that since both cars have an initial velocity, you cannot use [m42164](module:m42164) and must write and solve the equations for conservation of momentum along the *$x$*-axis and $y$-axis; instead, you must look for other simplifying aspects.
:::

:::exercise {fs-id2680898} type=problems-exercises 
PROBLEM:
Starting with equations ${m}_{1}{v}_{1}={m}_{1}{v}_{1}^{'}\;\text{cos}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{cos}\;{\theta}_{2}$ and $0={m}_{1}{v}_{1}^{'}\;\text{sin}\;{\theta}_{1}+{m}_{2}{v}_{2}^{'}\;\text{sin}\;{\theta}_{2}$ for conservation of momentum in the $x$- and $y$-directions and assuming that one object is originally stationary, prove that for an elastic collision of two objects of equal masses,

$$ \begin{array}{l}\frac{1}{2}{{\text{mv}}_{1}}^{2}= \\ \frac{1}{2}{{\text{mv}'}_{1}}^{2}+\frac{1}{2}{{\text{mv}'}_{2}}^{2} \\ +{\text{mv}'}_{1}{v'}_{2}\;\text{cos}\;({\theta}_{1}-{\theta}_{2})\end{array} $$  {eq:import-auto-id2985541}

as discussed in the text.
SOLUTION:
We are given that ${m}_{1}={m}_{2}≡m$. The given equations then become:

$$ {v}_{1}={v}_{1}\;\text{cos}\;{\theta}_{1}+{v}_{2}\;\text{cos}\;{\theta}_{2} $$  {eq:eip-id1899177}

and

$$ 0={v}_{1}^{'}\;\text{sin}\;{\theta}_{1}+{v}_{2}^{'}\;\text{sin}\;{\theta}_{2}. $$  {eq:eip-id1899459}

Square each equation to get

$$ \begin{array}{l}{{v}_{1}}^{2} & = & {{v'}_{1}}^{2}\;{\text{cos}}^{2}\;{\theta}_{1}+{{v'}_{2}}^{2}\;{\text{cos}}^{2}\;{\theta}_{2}+2{v'}_{1}{v'}_{2}\;\text{cos}\;{\theta}_{1}\text{cos}\;{\theta}_{2} \\ 0 & = & {{v'}_{1}}^{2}\;{\text{sin}}^{2}\;{\theta}_{1}+{{v'}_{2}}^{2}\;{\text{sin}}^{2}\;{\theta}_{2}+2{v'}_{1}{v'}_{2}\;\text{sin}\;{\theta}_{1}\text{sin}\;{\theta}_{2}\text{.}\end{array} $$  {eq:eip-id2304354}

Add these two equations and simplify:

$$ \begin{array}{l}{v}_{1}^{2} & = & {{v'}_{1}}^{2}+{{v'}_{2}}^{2}+2{v'}_{1}{v'}_{2}(\;\text{cos}\;{\theta}_{1}\;\text{cos}\;{\theta}_{2}+\;\text{sin}\;{\theta}_{1}\;\text{sin}\;{\theta}_{2}) \\ & = & {{v'}_{1}}^{2}+{{v'}_{2}}^{2}+2{v'}_{1}{v'}_{2}(\frac{1}{2}\;\text{cos}\;({\theta}_{1}-{\theta}_{2})+\frac{1}{2}\;\text{cos}\;({\theta}_{1}+{\theta}_{2})+\frac{1}{2}\;\text{cos}\;({\theta}_{1}-{\theta}_{2})-\frac{1}{2}\;\text{cos}\;({\theta}_{1}+{\theta}_{2})) \\ & = & {{v'}_{1}}^{2}+{{v'}_{2}}^{2}+2{v'}_{1}{v'}_{2}\;\text{cos}\;({\theta}_{1}-{\theta}_{2}).\end{array} $$  {eq:eip-id1300045}

Multiply the entire equation by $\frac{1}{2}m$ to recover the kinetic energy:

$$ \frac{1}{2}{{\text{mv}}_{1}}^{2}=\frac{1}{2}m{{v'}_{1}}^{2}+\frac{1}{2}m{{v'}_{2}}^{2}+m{v'}_{1}{v'}_{2}\;\text{cos}({\theta}_{1}-{\theta}_{2}) $$  {eq:eip-id2367723}

:::

:::exercise {fs-id2947426} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
A 90.0-kg ice hockey player hits a 0.150-kg puck, giving the puck a velocity of 45.0 m/s. If both are initially at rest and if the ice is frictionless, how far does the player recoil in the time it takes the puck to reach the goal 15.0 m away?
:::

## Glossary
- {def} **point masses**: structureless particles with no rotation or spin

# Conservation of Momentum

## Learning Objectives
By the end of this section, you will be able to:
- Describe the principle of conservation of momentum.
- Derive an expression for the conservation of momentum.
- Explain conservation of momentum with examples.
- Explain the principle of conservation of momentum as it relates to atomic and subatomic particles.
Momentum is an important quantity because it is conserved. Yet it was not conserved in the examples in [Impulse](module:m42159) and [Linear Momentum and Force](module:m42156), where large changes in momentum were produced by forces acting on the system of interest. Under what circumstances is momentum conserved?
The answer to this question entails considering a sufficiently large system. It is always possible to find a larger system in which total momentum is constant, even if momentum changes for components of the system. If a football player runs into the goalpost in the end zone, there will be a force on him that causes him to bounce backward. The backward momentum felt by an object or person exerting force on another object is often called a recoil. However, the Earth also recoils—conserving momentum—because of the force applied to it through the goalpost. Because Earth is many orders of magnitude more massive than the player, its recoil is immeasurably small and can be neglected in any practical sense, but it is real nevertheless.
Consider what happens if the masses of two colliding objects are more similar than the masses of a football player and Earth—for example, one car bumping into another, as shown in [ref:import-auto-id1686933]. Both cars are coasting in the same direction when the lead car (labeled ${m}_{2})$ is bumped by the trailing car (labeled ${m}_{1})\text{.}$ The only unbalanced force on each car is the force of the collision. (Assume that the effects due to friction are negligible.) Car 1 slows down as a result of the collision, losing some momentum, while car 2 speeds up and gains some momentum. We shall now show that the total momentum of the two-car system remains constant.

> FIGURE {fig:import-auto-id1686933} src=../../media/Figure_09_03_01a.jpg
> alt: A brown car with velocity V 1 and mass m 1 moves toward the right behind a tan car of velocity V 2 and mass m 2. The system of interest has a total momentum equal to the sum of individual momentums p 1 and p 2. The net force between them is zero before they collide with one another. The brown car after colliding with the tan car has velocity V 1prime and momentum p 1 prime and the light brown car moves with velocity V 2 prime and momentum p 2 prime. Both move in the same direction as before collision. This system of interest has a total momentum equal to the sum p 1 prime and p 2 prime.
> width: 550
> caption: A car of mass ${m}_{1}$ moving with a velocity of ${v}_{1}$ bumps into another car of mass ${m}_{2}$ and velocity ${v}_{2}$ that it is following. As a result, the first car slows down to a velocity of ${v′}_{1}$ and the second speeds up to a velocity of ${v′}_{2}$. The momentum of each car is changed, but the total momentum ${p}_{\text{tot}}$ of the two cars is the same before and after the collision (if you assume friction is negligible).

Using the definition of impulse, the change in momentum of car 1 is given by

$$ {\Delta p}_{1}={F}_{1}\Delta t, $$  {eq:eip-776}

where ${F}_{1}$ is the force on car 1 due to car 2, and $\Delta t$ is the time the force acts (the duration of the collision). Intuitively, it seems obvious that the collision time is the same for both cars, but it is only true for objects traveling at ordinary speeds. This assumption must be modified for objects travelling near the speed of light, without affecting the result that momentum is conserved.
Similarly, the change in momentum of car 2 is

$$ {\Delta p}_{2}={F}_{2}\Delta t, $$  {eq:eip-591}

where ${F}_{2}$ is the force on car 2 due to car 1, and we assume the duration of the collision $\Delta t$ is the same for both cars. We know from Newton’s third law that ${F}_{2}=\;-{F}_{1}$, and so

$$ \Delta {p}_{2}=-{F}_{1}\Delta t=-\Delta {p}_{1}. $$  {eq:eip-340}

Thus, the changes in momentum are equal and opposite, and

$$ \Delta {p}_{1}+\Delta {p}_{2}=0. $$  {eq:eip-727}

Because the changes in momentum add to zero, the total momentum of the two-car system is constant. That is,

$$ {p}_{1}+{p}_{2}=\text{constant}, $$  {eq:eip-991}

$$ {p}_{1}+{p}_{2}={p'}_{1}+{p'}_{2}, $$  {eq:eip-564}

where ${p'}_{1}$ and ${p'}_{2}$ are the momenta of cars 1 and 2 after the collision. (We often use primes to denote the final state.)
This result—that momentum is conserved—has validity far beyond the preceding one-dimensional case. It can be similarly shown that total momentum is conserved for any isolated system, with any number of objects in it. In equation form, the {term:conservation of momentum principle} for an isolated system is written

$$ {p}_{\text{tot}}=\text{constant}, $$  {eq:eip-986}

or

$$ {p}_{\text{tot}}={p'}_{\text{tot}}, $$  {eq:eip-32}

where ${p}_{\text{tot}}$ is the total momentum (the sum of the momenta of the individual objects in the system) and ${\text{p}'}_{\text{tot}}$ is the total momentum some time later. (Recall in [Uniform Circular Motion and Gravitation](module:m42143) you learned that the center of mass of a system of objects is the effective average location of the mass of the system.  The total momentum can be shown to be the momentum of the center of mass of the system.) An {term:isolated system} is defined to be one for which the net external force is zero $({\text{F}}_{\text{net}}=0)\text{.}$

:::note [] Conservation of Momentum Principle

$$ \begin{array}{l}{\text{p}}_{\text{tot}} & = & \text{constant} \\ {\text{p}}_{\text{tot}} & = & {\text{p}'}_{\text{tot}}\;(\text{isolated system})\end{array} $$  {eq:eip-387}

:::

:::note [] Isolated System

An isolated system is defined to be one for which the net external force is zero $({\text{F}}_{\text{net}}=0)\text{.}$
:::
Perhaps an easier way to see that momentum is conserved for an isolated system is to consider Newton’s second law in terms of momentum, ${F}_{\text{net}}=\frac{{\Delta p}_{\text{tot}}}{\Delta t}$. For an isolated system,  $({\text{F}}_{\text{net}}=0)$; thus, $\Delta {p}_{\text{tot}}=0$, and ${p}_{\text{tot}}$ is constant.
We have noted that the three length dimensions in nature—*$x$*, *$y$*, and *$z$*—are independent, and it is interesting to note that momentum can be conserved in different ways along each dimension. For example, during projectile motion and where air resistance is negligible, momentum is conserved in the horizontal direction because horizontal forces are zero and momentum is unchanged. But along the vertical direction, the net vertical force is not zero and the momentum of the projectile is not conserved. (See [ref:import-auto-id1646148].) However, if the momentum of the projectile-Earth system is considered in the vertical direction, we find that the total momentum is conserved.

> FIGURE {fig:import-auto-id1646148} src=../../media/Figure_09_03_02a.jpg
> alt: A space probe is projected upward. It takes a parabolic path. No horizontal net force acts on. The horizontal component of momentum remains conserved. The vertical net force is not zero and the vertical component of momentum is not a constant. When the space probe separates, the horizontal net force remains zero as the force causing separation is internal to the system. The vertical net force is not zero and the vertical component of momentum is also not a constant after separation. The centre of mass however continues in the same parabolic path.
> width: 520
> caption: The horizontal component of a projectile’s momentum is conserved if air resistance is negligible, even in this case where a space probe separates. The forces causing the separation are internal to the system, so that the net external horizontal force ${F}_{x-\text{net}}$ is still zero. The vertical component of the momentum is not conserved, because the net vertical force ${F}_{y-\text{net}}$ is not zero. In the vertical direction, the space probe-Earth system needs to be considered and we find that the total momentum is conserved. The center of mass of the space probe takes the same path it would if the separation did not occur.

The conservation of momentum principle can be applied to systems as different as a comet striking Earth and a gas containing huge numbers of atoms and molecules. Conservation of momentum is violated only when the net external force is not zero. But another larger system can always be considered in which momentum is conserved by simply including the source of the external force. For example, in the collision of two cars considered above, the two-car system conserves momentum while each one-car system does not.

:::note [] Making Connections: Take-Home Investigation—Drop of Tennis Ball and a Basketball

Hold a tennis ball side by side and in contact with a basketball. Drop the balls together. (Be careful!)   What happens?   Explain your observations. Now hold the tennis ball above and in contact with the basketball. What happened? Explain your observations. What do you think will happen if the basketball ball is held above and in contact with the tennis ball?
:::

:::note [] Making Connections: Take-Home Investigation—Two Tennis Balls in a Ballistic Trajectory

Tie two tennis balls together with a string about a foot long. Hold one ball and let the other hang down and throw it in a ballistic trajectory. Explain your observations. Now mark the center of the string with bright ink or attach a brightly colored sticker to it and throw again. What happened? Explain your observations.
Some aquatic animals such as jellyfish move around based on the principles of conservation of momentum. A jellyfish fills its umbrella section with water and then pushes the water out resulting in motion in the opposite direction to that of the jet of water. Squids propel themselves in a similar manner but, in contrast with jellyfish, are able to control the direction in which they move by aiming their nozzle forward or backward. Typical squids can move at speeds of 8 to 12 km/h.
The ballistocardiograph (BCG) was a diagnostic tool used in the second half of the 20th century to study the strength of the heart. About once a second, your heart beats, forcing blood into the aorta. A force in the opposite direction is exerted on the rest of your body (recall Newton’s third law). A ballistocardiograph is a device that can measure this reaction force. This measurement is done by using a sensor (resting on the person) or by using a moving table suspended from the ceiling. This technique can gather information on the strength of the heart beat and the volume of blood passing from the heart. However, the electrocardiogram (ECG or EKG) and the echocardiogram (cardiac ECHO or ECHO; a technique that uses ultrasound to see an image of the heart) are more widely used in the practice of cardiology.
:::

:::note [] Making Connections: Conservation of Momentum and Collision

Conservation of momentum is quite useful in describing collisions. Momentum is crucial to our understanding of atomic and subatomic particles because much of what we know about these particles comes from collision experiments.
:::

## Subatomic Collisions and Momentum
The conservation of momentum principle not only applies to the macroscopic objects, it is also essential to our explorations of atomic and subatomic particles. Giant machines hurl subatomic particles at one another, and researchers evaluate the results by assuming conservation of momentum (among other things).
On the small scale, we find that particles and their properties are invisible to the naked eye but can be measured with our instruments, and models of these subatomic particles can be constructed to describe the results. Momentum is found to be a property of all subatomic particles including massless particles such as photons that compose light. Momentum being a property of particles hints that momentum may have an identity beyond the description of an object’s mass multiplied by the object’s velocity. Indeed, momentum relates to wave properties and plays a fundamental role in what measurements are taken and how we take these measurements. Furthermore, we find that the conservation of momentum principle is valid when considering systems of particles. We use this principle to analyze the masses and other properties of previously undetected particles, such as the nucleus of an atom and the existence of quarks that make up particles of nuclei. [ref:import-auto-id1700285] below illustrates how a particle scattering backward from another implies that its target is massive and dense. Experiments seeking evidence that {term:quarks} make up protons (one type of particle that makes up nuclei) scattered high-energy electrons off of protons (nuclei of hydrogen atoms). Electrons occasionally scattered straight backward in a manner that implied a very small and very dense particle makes up the proton—this observation is considered nearly direct evidence of quarks. The analysis was based partly on the same conservation of momentum principle that works so well on the large scale.

> FIGURE {fig:import-auto-id1700285} src=../../media/Figure_09_03_04a.jpg
> alt: An electron strikes on a macroscopic target and recoils back. A closer look shows the electron to scatter backward after interacting with the proton.
> width: 350
> caption: A subatomic particle scatters straight backward from a target particle. In experiments seeking evidence for quarks, electrons were observed to occasionally scatter straight backward from a proton.

## Test Prep for AP Courses

:::exercise {fs-id1422695} type=ap-test-prep 
PROBLEM:
Which of the following is an example of an open system?
1. Two air cars colliding on a track elastically.
2. Two air cars colliding on a track and sticking together.
3. A bullet being fired into a hanging wooden block and becoming embedded in the block, with the system then acting as a ballistic pendulum.
4. A bullet being fired into a hillside and becoming buried in the earth.
SOLUTION:
(d)
:::

:::exercise {fs-id1927054} type=ap-test-prep 
PROBLEM:
A 40-kg girl runs across a mat with a speed of 5.0 m/s and jumps onto a 120-kg hanging platform initially at rest, causing the girl and platform to swing back and forth like a pendulum together after her jump. What is the combined velocity of the girl and platform after the jump? What is the combined momentum of the girl and platform both before and after the collision?
A 50-kg boy runs across a mat with a speed of 6.0 m/s and collides with a soft barrier on the wall, rebounding off the wall and falling to the ground. The boy is at rest after the collision. What is the momentum of the boy before and after the collision? Is momentum conserved in this collision? Explain. Which of these is an example of an open system and which is an example of a closed system? Explain your answer.
:::

:::exercise {fs-id1468748} type=ap-test-prep 
PROBLEM:
A student sets up an experiment to measure the momentum of a system of two air cars, A and B, of equal mass, moving on a linear, frictionless track. Before the collision, car A has a certain speed, and car B is at rest. Which of the following will be true about the total momentum of the two cars?
1. It will be greater before the collision.
2. It will be equal before and after the collision.
3. It will be greater after the collision.
4. The answer depends on whether the collision is elastic or inelastic.
SOLUTION:
(b)
:::

:::exercise {fs-id1890741} type=ap-test-prep 
PROBLEM:
A group of students has two carts, *A* and *B*, with wheels that turn with negligible friction. The carts can travel along a straight horizontal track. Cart *A* has known mass *mA*. The students are asked to use a one-dimensional collision between the carts to determine the mass of cart *B*. Before the collision, cart *A* travels to the right and cart *B* is initially at rest. After the collision, the carts stick together.
1. Describe an experimental procedure to determine the velocities of the carts before and after a collision, including all the additional equipment you would need. You may include a labeled diagram of your setup to help in your description. Indicate what measurements you would take and how you would take them. Include enough detail so that another student could carry out your procedure.
2. There will be sources of error in the measurements taken in the experiment, both before and after the collision. For your experimental procedure, will the uncertainty in the calculated value of the mass of cart *B* be affected more by the error in the measurements taken before the collision or by those taken after the collision, or will it be equally affected by both sets of measurements? Justify your answer.
A group of students took measurements for one collision. A graph of the students data is shown below.

> FIGURE {fig:fs-id3529143} src=../../media/Figure_08_M3_Graph.jpg
> alt: The vertical axis runs from 0 to 2.5, with every 0.5 marked. The horizontal axis runs from 0 to 2.0, with every 0.2 marked. A legend shows that data points for Cart A will be shown with large gray dots, and data points for Cart B will be shown with small black dots. At time 0, there is a large dot at 0 meters and a small dot at 1.5 meters. At time 0.2 there is a large dot at 0.35 meters and a small dot at 1.5 meters. At 0.4 seconds, there is a large dot at 0.6 meters and a small dot at 1.5 meters. At 0.6 meters, there is a large dot at 1.0 meters and a small dot at 1.5 meters. At 0.8 seconds, there is a large dot at 1.2 meters and a small dot at 1.5 meters. At 1.0 seconds, there is a large dot at 1.5 meters and a small dot at 1.5 meters. At 1.2 seconds, there is a large dot at 1.7 meters and a small dot at 1.7 meters. At 1.4 seconds, there is a large dot at 1.75 meters and a small dot at 1.75 meters. At 1.6 seconds, there is a large dot at 1.95 meters and a small dot at 1.95 meters. At 1.8 seconds, there is a large dot at 2.0 meters and a small dot at 2.0 meters. At 2.0 seconds, there is a large dot at 2.1 meters and a small dot at 2.1 meters.
> caption: The image shows a graph with position in meters on the vertical axis and time in seconds on the horizontal axis.

1. Given *m_A* = 0.50 kg, use the graph to calculate the mass of cart *B*. Explicitly indicate the principles used in your calculations.
2. The students are now asked to Consider the kinetic energy changes in an inelastic collision, specifically whether the initial values of one of the physical quantities affect the fraction of mechanical energy dissipated in the collision. How could you modify the experiment to investigate this question? Be sure to explicitly describe the calculations you would make, specifying all equations you would use (but do not actually do any algebra or arithmetic).
:::

:::exercise {fs-id1943510} type=ap-test-prep 
PROBLEM:
Cart A is moving with an initial velocity +*v* (in the positive direction) toward cart B, initially at rest. Both carts have equal mass and are on a frictionless surface. Which of the following statements correctly characterizes the velocity of the center of mass of the system before and after the collision?
1. $\frac{+v}{2}$ before, $\frac{-v}{2}$ after
2. $\frac{+v}{2}$ before, 0 after
3. $\frac{+v}{2}$ before, $\frac{+v}{2}$ after
4. 0 before, 0 after
SOLUTION:
(c)
:::

:::exercise {fs-id2035171} type=ap-test-prep 
PROBLEM:
Cart A is moving with a velocity of +10 m/s toward cart B, which is moving with a velocity of +4 m/s. Both carts have equal mass and are moving on a frictionless surface. The two carts have an inelastic collision and stick together after the collision. Calculate the velocity of the center of mass of the system before and after the collision. If there were friction present in this problem, how would this external force affect the center-of-mass velocity both before and after the collision?
:::

## Section Summary
- The conservation of momentum principle is written
 

$$ {p}_{\text{tot}}=\text{constant} $$  {eq:eip-483}

or

$$ {\text{p}}_{\text{tot}}={\text{p}'}_{\text{tot}}\;\;(\text{isolated system}), $$  {eq:eip-814}

${p}_{\text{tot}}$ is the initial total momentum and ${\text{p}'}_{\text{tot}}$ is the total momentum some time later.
- An isolated system is defined to be one for which the net external force is zero $({\text{F}}_{\text{net}}=0)\text{.}$
- During projectile motion and where air resistance is negligible, momentum is conserved in the horizontal direction because horizontal forces are zero.
- Conservation of momentum applies only when the net external force is zero.
- The conservation of momentum principle is valid when considering systems of particles.

## Conceptual Questions

:::exercise {fs-id1507984} type=conceptual-questions 
PROBLEM:
**Professional Application**
If you dive into water, you reach greater depths than if you do a belly flop. Explain this difference in depth using the concept of conservation of energy. Explain this difference in depth using what you have learned in this chapter.
:::

:::exercise {fs-id1749481} type=conceptual-questions 
PROBLEM:
Under what circumstances is momentum conserved?
:::

:::exercise {fs-id1640067} type=conceptual-questions 
PROBLEM:
Can momentum be conserved for a system if there are external forces acting on the system? If so, under what conditions? If not, why not?
:::

:::exercise {fs-id1183915} type=conceptual-questions 
PROBLEM:
Momentum for a system can be conserved in one direction while not being conserved in another. What is the angle between the directions? Give an example.
:::

:::exercise {fs-id1251869} type=conceptual-questions 
PROBLEM:
**Professional Application**
Explain in terms of momentum and Newton’s laws how a car’s air resistance is due in part to the fact that it pushes air in its direction of motion.
:::

:::exercise {fs-id1700412} type=conceptual-questions 
PROBLEM:
Can objects in a system have momentum while the momentum of the system is zero? Explain your answer.
:::

:::exercise {fs-id1222066} type=conceptual-questions 
PROBLEM:
Must the total energy of a system be conserved whenever its momentum is conserved? Explain why or why not.
:::

## Problems & Exercises

:::exercise {fs-id1511802} type=problems-exercises 
PROBLEM:
**Professional Application**
Train cars are coupled together by being bumped into one another. Suppose two loaded train cars are moving toward one another, the first having a mass of 150,000 kg and a velocity of 0.300 m/s, and the second having a mass of 110,000 kg and a velocity of $-0\text{.}\text{120 m/s}$. (The minus indicates direction of motion.) What is their final velocity?
SOLUTION:
0.122 m/s
:::

:::exercise {fs-id1492048} type=problems-exercises 
PROBLEM:
Suppose a clay model of a koala bear has a mass of 0.200 kg and slides on ice at a speed of 0.750 m/s. It runs into another clay model, which is initially motionless and has a mass of 0.350 kg. Both being soft clay, they naturally stick together. What is their final velocity?
:::

:::exercise {fs-id1759138} type=problems-exercises 
PROBLEM:
**Professional Application**
Consider the following question: *A car moving at 10 m/s crashes into a tree and stops in 0.26 s. Calculate the force the seatbelt exerts on a passenger in the car to bring him to a halt. The mass of the passenger is 70 kg.* Would the answer to this question be different if the car with the 70-kg passenger had collided with a car that has a mass equal to and is traveling in the opposite direction and at the same speed? Explain your answer.
SOLUTION:
In a collision with an identical car, momentum is conserved. Afterwards ${v}_{\text{f}}=0$ for both cars. The change in momentum will be the same as in the crash with the tree. However, the force on the body is not determined since the time is not known. A padded stop will reduce injurious force on body.
:::

:::exercise {fs-id1743106} type=problems-exercises 
PROBLEM:
What is the velocity of a 900-kg car initially moving at 30.0 m/s, just after it hits a 150-kg deer initially running at 12.0 m/s in the same direction? Assume the deer remains on the car.
:::

:::exercise {fs-id1516164} type=problems-exercises 
PROBLEM:
A 1.80-kg falcon catches a 0.650-kg dove from behind in midair. What is their velocity after impact if the falcon’s velocity is initially 28.0 m/s and the dove’s velocity is 7.00 m/s in the same direction?
SOLUTION:
22.4 m/s in the same direction as the original motion
:::

## Glossary
- {def} **conservation of momentum principle**: when the net external force is zero, the total momentum of the system is conserved or constant
- {def} **isolated system**: a system in which the net external force is zero
- {def} **quark**: fundamental constituent of matter and an elementary particle

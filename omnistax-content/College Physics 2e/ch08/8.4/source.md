# Elastic Collisions in One Dimension

## Learning Objectives
By the end of this section, you will be able to:
- Describe an elastic collision of two objects in one dimension.
- Define internal kinetic energy.
- Derive an expression for conservation of internal kinetic energy in a one dimensional collision.
- Determine the final velocities in an elastic collision given masses and initial velocities.
Let us consider various types of two-object collisions. These collisions are the easiest to analyze, and they illustrate many of the physical principles involved in collisions. The conservation of momentum principle is very useful here, and it can be used whenever the net external force on a system is zero.
We start with the elastic collision of two objects moving along the same line—a one-dimensional problem. An {term:elastic collision} is one that also conserves internal kinetic energy. {term:Internal kinetic energy} is the sum of the kinetic energies of the objects in the system. [ref:import-auto-id1121320] illustrates an elastic collision in which internal kinetic energy and momentum are conserved.
Truly elastic collisions can only be achieved with subatomic particles, such as electrons striking nuclei. Macroscopic collisions can be very nearly, but not quite, elastic—some kinetic energy is always converted into other forms of energy such as heat transfer due to friction and sound. One macroscopic collision that is nearly elastic is that of two steel blocks on ice. Another nearly elastic collision is that between two carts with spring bumpers on an air track. Icy surfaces and air tracks are nearly frictionless, more readily allowing nearly elastic collisions on them.

:::note [] Elastic Collision

An {term:elastic collision} is one that conserves internal kinetic energy.
:::

:::note [] Internal Kinetic Energy

{term:Internal kinetic energy} is the sum of the kinetic energies of the objects in the system.
:::

> FIGURE {fig:import-auto-id1121320} src=../../media/Figure_09_04_01a.jpg
> alt: The system of interest contains a smaller mass m sub1 and a larger mass m sub2 moving on a frictionless surface. M sub 2 moves with velocity V sub 2 and momentum p sub 2 and m sub 1 moves behind m sub 2, with velocity V sub 1 and momentum p sub 1 toward the right direction. P 1 plus P 2 equals p total. The net force is zero. After collision m sub 1 moves toward the left with velocity V sub 1 while m sub 2 moves toward the right with velocity V sub 2 on the same frictionless surface. The momentum of m sub 1 becomes p 1 prime and m 2 becomes p 2 prime now. P 1 prime plus p 2 prime equals p total.
> width: 300
> caption: An elastic one-dimensional two-object collision. Momentum and internal kinetic energy are conserved.

Now, to solve problems involving one-dimensional elastic collisions between two objects we can use the equations for conservation of momentum and conservation of internal kinetic energy. First, the equation for conservation of momentum for two objects in a one-dimensional collision is

$$ {p}_{1}+{p}_{2}={p'}_{1}+{p'}_{2}\;\;\;({F}_{\text{net}}=0) $$  {eq:eip-545}

or

$$ {m}_{1}{v}_{1}+{m}_{2}{v}_{2}={m}_{1}{v'}_{1}+{m}_{2}{v'}_{2}\;\;\;({F}_{\text{net}}=0), $$  {eq:eip-485}

where the primes (') indicate values after the collision. By definition, an elastic collision conserves internal kinetic energy, and so the sum of kinetic energies before the collision equals the sum after the collision. Thus,

$$ \frac{1}{2}{m}_{1}{{v}_{1}}^{2}+\frac{1}{2}{m}_{2}{{v}_{2}}^{2}=\frac{1}{2}{m}_{1}{{v'}_{1}}^{2}+\frac{1}{2}{m}_{2}{{v'}_{2}}^{2}\;\;\text{(two-object elastic collision)} $$  {eq:eip-940}

expresses the equation for conservation of internal kinetic energy in a one-dimensional collision.

:::example {ex:fs-id3089491} Calculating Velocities Following an Elastic Collision
Calculate the velocities of two objects following an elastic collision, given that

$$ {m}_{1}=0\text{.}\text{500 kg,}\;\;{m}_{2}=3\text{.}\text{50 kg,}\;\;{v}_{1}=4\text{.}\text{00 m/s, and}\;\;{v}_{2}=0\text{.} $$  {eq:eip-634}

**Strategy and Concept**
First, visualize what the initial conditions mean—a small object strikes a larger object that is initially at rest. This situation is slightly simpler than the situation shown in [ref:import-auto-id1121320] where both objects are initially moving. We are asked to find two unknowns (the final velocities ${v'}_{1}$ and ${v'}_{2}$). To find two unknowns, we must use two independent equations. Because this collision is elastic, we can use the above two equations. Both can be simplified by the fact that object 2 is initially at rest, and thus ${v}_{2}=0$. Once we simplify these equations, we combine them algebraically to solve for the unknowns.
**Solution**
For this problem, note that ${v}_{2}=0$ and use conservation of momentum. Thus,

$$ {p}_{1}=p'{}_{1}+p'{}_{2} $$  {eq:eip-773}

or

$$ {m}_{1}{v}_{1}={m}_{1}{v'}_{1}+{m}_{2}{v'}_{2}. $$  {eq:eip-832}

Using conservation of internal kinetic energy and that ${v}_{2}=0$,

$$ \frac{1}{2}{m}_{1}{{v}_{1}}^{2}=\frac{1}{2}{m}_{1}{v'}_{1}{}^{2}+\frac{1}{2}{m}_{2}{v'}_{2}{}^{2}. $$  {eq:eip-901}

Solving the first equation (momentum equation) for ${v'}_{2}$, we obtain

$$ {v'}_{2}=\frac{{m}_{1}}{{m}_{2}}({v}_{1}-{v'}_{1}). $$  {eq:eip-436}

Substituting this expression into the second equation (internal kinetic energy equation) eliminates the variable ${v'}_{2}$, leaving only ${v'}_{1}$ as an unknown (the algebra is left as an exercise for the reader). There are two solutions to any quadratic equation; in this example, they are

$$ {v'}_{1}=4\text{.}\text{00 m/s} $$  {eq:eip-464}

and

$$ {v'}_{1}=-3\text{.}\text{00 m/s}. $$  {eq:eip-990}

As noted when quadratic equations were encountered in earlier chapters, both solutions may or may not be meaningful. In this case, the first solution is the same as the initial condition. The first solution thus represents the situation before the collision and is discarded. The second solution $({v'}_{1}=-3\text{.}\text{00 m/s})$ is negative, meaning that the first object bounces backward. When this negative value of ${v'}_{1}$ is used to find the velocity of the second object after the collision, we get

$$ {v'}_{2}=\frac{{m}_{1}}{{m}_{2}}({v}_{1}-{v'}_{1})=\frac{0\text{.}\text{500 kg}}{3\text{.}\text{50 kg}}(4\text{.}\text{00}-(-3\text{.}\text{00}))\;\text{m/s} $$  {eq:eip-560}

or

$$ {v'}_{2}=1\text{.}\text{00 m/s}. $$  {eq:eip-819}

**Discussion**
The result of this example is intuitively reasonable. A small object strikes a larger one at rest and bounces backward. The larger one is knocked forward, but with a low speed. (This is like a compact car bouncing backward off a full-size SUV that is initially at rest.) As a check, try calculating the internal kinetic energy before and after the collision. You will see that the internal kinetic energy is unchanged at 4.00 J. Also check the total momentum before and after the collision; you will find it, too, is unchanged.
The equations for conservation of momentum and internal kinetic energy as written above can be used to describe any one-dimensional elastic collision of two objects. These equations can be extended to more objects if needed.
:::

:::note [] Making Connections: Take-Home Investigation—Ice Cubes and Elastic Collision

Find a few ice cubes which are about the same size and a smooth kitchen tabletop or a table with a glass top. Place the ice cubes on the surface several centimeters away from each other. Flick one ice cube toward a stationary ice cube and observe the path and velocities of the ice cubes after the collision. Try to avoid edge-on collisions and collisions with rotating ice cubes. Have you created approximately elastic collisions? Explain the speeds and directions of the ice cubes using momentum.
:::

:::note [interactive] Collision Lab
[Investigate collisions](https://openstax.org/l/28collisionlab) on an air hockey table. Set up your own experiments: vary the number of discs, masses and initial conditions. Is momentum conserved? Is kinetic energy conserved? Vary the elasticity and see what happens.
:::

## Test Prep for AP Courses

:::exercise {fs-id2208648} type=ap-test-prep 
PROBLEM:
Two cars (A and B) of mass 1.5 kg collide. Car A is initially moving at 12 m/s, and car B is initially moving in the same direction with a speed of 6 m/s. The two cars are moving along a straight line before and after the collision. What will be the change in momentum of this system after the collision?
1. −27 kg • m/s
2. zero
3. +27 kg • m/s
4. It depends on whether the collision is elastic or inelastic.
SOLUTION:
(b)
:::

:::exercise {fs-id1342061} type=ap-test-prep 
PROBLEM:
Two cars (A and B) of mass 1.5 kg collide. Car A is initially moving at 24 m/s, and car B is initially moving in the opposite direction with a speed of 12 m/s. The two cars are moving along a straight line before and after the collision. (a) If the two cars have an elastic collision, calculate the change in momentum of the two-car system. (b) If the two cars have a completely inelastic collision, calculate the change in momentum of the two-car system.
:::

:::exercise {fs-id1478642} type=ap-test-prep 
PROBLEM:
Puck A (200 g) slides across a frictionless surface to collide with puck B (800 g), initially at rest. The velocity of each puck is measured during the experiment as follows:

[TABLE fs-id1165124545950 The first row has time is 0 seconds, velocity a is plus 8 meters per second, and velocity b is zero. The second row has time is 1 second, velocity a is plus 8 meters per second, and velocity b is zero. The third row has time is 2 seconds, velocity a is negative 2 meters per second, and velocity b is plus 2.5 meters per second. The fourth row has time is 3 seconds, velocity a is negative 2 meters per second, and velocity b is plus 2.5 meters per second.]
| Time | Velocity A | Velocity B |
| 0 | +8.0 m/s | 0 |
| 1.0 s | +8.0 m/s | 0 |
| 2.0 s | −2.0 m/s | +2.5 m/s |
| 3.0 s | −2.0 m/s | +2.5 m/s |
What is the change in momentum of the center of mass of the system as a result of the collision?
1. +1.6 kg•m/s
2. +0.8 kg•m/s
3. 0
4. −1.6 kg•m/s
SOLUTION:
(c)
:::

:::exercise {fs-id1364045} type=ap-test-prep 
PROBLEM:
For the table above, calculate the center-of-mass velocity of the system both before and after the collision, then calculate the center-of-mass momentum of the system both before and after the collision. From this, determine the change in the momentum of the system as a result of the collision.
:::

:::exercise {fs-id2432045} type=ap-test-prep 
PROBLEM:
Two cars (A and B) of equal mass have an elastic collision. Prior to the collision, car A is moving at 15 m/s in the +*x*-direction, and car B is moving at 10 m/s in the –*x*-direction. Assuming that both cars continue moving along the *x*-axis after the collision, what will be the velocity of car A after the collision?
1. same as the original 15 m/s speed, opposite direction
2. equal to car B’s velocity prior to the collision
3. equal to the average of the two velocities, in its original direction
4. equal to the average of the two velocities, in the opposite direction
SOLUTION:
(b)
:::

:::exercise {fs-id3206663} type=ap-test-prep 
PROBLEM:
Two cars (A and B) of equal mass have an elastic collision. Prior to the collision, car A is moving at 20 m/s in the +*x*-direction, and car B is moving at 10 m/s in the –*x*-direction. Assuming that both cars continue moving along the *x*-axis after the collision, what will be the velocities of each car after the collision?
:::

:::exercise {fs-id1683789} type=ap-test-prep 
PROBLEM:
A rubber ball is dropped from rest at a fixed height. It bounces off a hard floor and rebounds upward, but it only reaches 90% of its original fixed height. What is the best way to explain the loss of kinetic energy of the ball during the collision?
1. Energy was required to deform the ball’s shape during the collision with the floor.
2. Energy was lost due to work done by the ball pushing on the floor during the collision.
3. Energy was lost due to friction between the ball and the floor.
4. Energy was lost due to the work done by gravity during the motion.
SOLUTION:
(a)
:::

:::exercise {fs-id1514509} type=ap-test-prep 
PROBLEM:
A tennis ball strikes a wall with an initial speed of 15 m/s. The ball bounces off the wall but rebounds with slightly less speed (14 m/s) after the collision. Explain (a) what else changed its momentum in response to the ball’s change in momentum so that overall momentum is conserved, and (b) how some of the ball’s kinetic energy was lost.
:::

:::exercise {fs-id1442938} type=ap-test-prep 
PROBLEM:
Two objects, A and B, have equal mass. Prior to the collision, mass A is moving 10 m/s in the +*x*-direction, and mass B is moving 4 m/s in the +*x*-direction. Which of the following results represents an inelastic collision between A and B?
1. After the collision, mass A is at rest, and mass B moves 14 m/s in the +*x*-direction.
2. After the collision, mass A moves 4 m/s in the –*x*-direction, and mass B moves 18 m/s in the +*x*-direction.
3. After the collision, the two masses stick together and move 7 m/s in the +*x*-direction.
4. After the collision, mass A moves 4 m/s in the +*x*-direction, and mass B moves 10 m/s in the +*x*-direction.
SOLUTION:
(c)
:::

:::exercise {fs-id1321180} type=ap-test-prep 
PROBLEM:
Mass A is three times more massive than mass B. Mass A is initially moving 12 m/s in the +*x*-direction. Mass B is initially moving 12 m/s in the –*x*-direction. Assuming that the collision is elastic, calculate the final velocity of both masses after the collision. Show that your results are consistent with conservation of momentum and conservation of kinetic energy.
:::

:::exercise {fs-id1487248} type=ap-test-prep 
PROBLEM:
Two objects (A and B) of equal mass collide elastically. Mass A is initially moving 5.0 m/s in the +*x*-direction prior to the collision. Mass B is initially moving 3.0 m/s in the –*x*-direction prior to the collision. After the collision, mass A will be moving with a velocity of 3.0 m/s in the –*x*-direction. What will be the velocity of mass B after the collision?
1. 3.0 m/s in the +*x*-direction
2. 5.0 m/s in the +*x*-direction
3. 3.0 m/s in the –*x*-direction
4. 5.0 m/s in the –*x*-direction
SOLUTION:
(b)
:::

:::exercise {fs-id3182581} type=ap-test-prep 
PROBLEM:
Two objects (A and B) of equal mass collide elastically. Mass A is initially moving 4.0 m/s in the +*x*-direction prior to the collision. Mass B is initially moving 8.0 m/s in the –*x*-direction prior to the collision. After the collision, mass A will be moving with a velocity of 8.0 m/s in the –*x*-direction. (a) Use the principle of conservation of momentum to predict the velocity of mass B after the collision. (b) Use the fact that kinetic energy is conserved in elastic collisions to predict the velocity of mass B after the collision.
:::

:::exercise {fs-id2332080} type=ap-test-prep 
PROBLEM:
Two objects of equal mass collide. Object A is initially moving in the +*x*-direction with a speed of 12 m/s, and object B is initially at rest. After the collision, object A is at rest, and object B is moving away with some unknown velocity. There are no external forces acting on the system of two masses. What statement can we make about this collision?
1. Both momentum and kinetic energy are conserved.
2. Momentum is conserved, but kinetic energy is not conserved.
3. Neither momentum nor kinetic energy is conserved.
4. More information is needed in order to determine which is conserved.
SOLUTION:
(a)
:::

:::exercise {fs-id2494812} type=ap-test-prep 
PROBLEM:
Two objects of equal mass collide. Object A is initially moving with a velocity of 15 m/s in the +*x*-direction, and object B is initially at rest. After the collision, object A is at rest. There are no external forces acting on the system of two masses. (a) Use momentum conservation to deduce the velocity of object B after the collision. (b) Is this collision elastic? Justify your answer.
:::

:::exercise {fs-id1862350} type=ap-test-prep 
PROBLEM:
Which of the following statements is true about an inelastic collision?
1. Momentum is conserved, and kinetic energy is conserved.
2. Momentum is conserved, and kinetic energy is not conserved.
3. Momentum is not conserved, and kinetic energy is conserved.
4. Momentum is not conserved, and kinetic energy is not conserved.
SOLUTION:
(b)
:::

:::exercise {fs-id2389032} type=ap-test-prep 
PROBLEM:
Explain how the momentum and kinetic energy of a system of two colliding objects changes as a result of (a) an elastic collision and (b) an inelastic collision.
:::

:::exercise {fs-id1165124579546} type=ap-test-prep 
PROBLEM:
This figure shows the positions of two colliding objects measured before, during, and after a collision. Mass A is 1.0 kg. Mass B is 3.0 kg. Which of the following statements is true?
1. This is an elastic collision, with a total momentum of 0 kg • m/s.
2. This is an elastic collision, with a total momentum of 1.67 kg • m/s.
3. This is an inelastic collision, with a total momentum of 0 kg • m/s.
4. This is an inelastic collision, with a total momentum of 1.67 kg • m/s.
SOLUTION:
(a)
:::

:::exercise {fs-id2378587} type=ap-test-prep 
PROBLEM:
For the above graph, determine the initial and final momentum for both objects, assuming mass A is 1.0 kg and mass B is 3.0 kg. Also, determine the initial and final kinetic energies for both objects. Based on your results, explain whether momentum is conserved in this collision, and state whether the collision is elastic or inelastic.
:::

:::exercise {fs-id1741049} type=ap-test-prep 
PROBLEM:
Mass A (1.0 kg) slides across a frictionless surface with a velocity of 8 m/s in the positive direction. Mass B (3.0 kg) is initially at rest. The two objects collide and stick together. What will be the change in the center-of-mass velocity of the system as a result of the collision?
1. There will be no change in the center-of-mass velocity.
2. The center-of-mass velocity will decrease by 2 m/s.
3. The center-of-mass velocity will decrease by 6 m/s.
4. The center-of-mass velocity will decrease by 8 m/s.
SOLUTION:
(a)
:::

:::exercise {fs-id1971159} type=ap-test-prep 
PROBLEM:
Mass A (1.0 kg) slides across a frictionless surface with a velocity of 4 m/s in the positive direction. Mass B (1.0 kg) slides across the same surface in the opposite direction with a velocity of −8 m/s. The two objects collide and stick together after the collision. Predict how the center-of-mass velocity will change as a result of the collision, and explain your prediction. Calculate the center-of-mass velocity of the system both before and after the collision and explain why it remains the same or why it has changed.
:::

## Section Summary
- An elastic collision is one that conserves internal kinetic energy.
- Conservation of kinetic energy and momentum together allow the final velocities to be calculated in terms of initial velocities and masses in one dimensional two-body collisions.

## Conceptual Questions

:::exercise {fs-id3105556} type=conceptual-questions 
PROBLEM:
****What is an elastic collision?
:::

## Problems & Exercises

:::exercise {fs-id3102664} type=problems-exercises 
PROBLEM:
Two identical objects (such as billiard balls) have a one-dimensional collision in which one is initially motionless. After the collision, the moving object is stationary and the other moves with the same speed as the other originally had. Show that both momentum and kinetic energy are conserved.
:::

:::exercise {fs-id1319285} type=problems-exercises 
PROBLEM:
**Professional Application**
Two piloted satellites approach one another at a relative speed of 0.250 m/s, intending to dock. The first has a mass of $4\text{.}\text{00}\times {\text{10}}^{3}\;\text{kg}$, and the second a mass of $7\text{.}\text{50}\times {\text{10}}^{3}\;\text{kg}$. If the two satellites collide elastically rather than dock, what is their final relative velocity?
SOLUTION:
0.250 m/s
:::

:::exercise {fs-id898804} type=problems-exercises 
PROBLEM:
A 70.0-kg ice hockey goalie, originally at rest, catches a 0.150-kg hockey puck slapped at him at a velocity of 35.0 m/s. Suppose the goalie and the ice puck have an elastic collision and the puck is reflected back in the direction from which it came. What would their final velocities be in this case?
:::

## Glossary
- {def} **elastic collision**: a collision that also conserves internal kinetic energy
- {def} **internal kinetic energy**: the sum of the kinetic energies of the objects in a system

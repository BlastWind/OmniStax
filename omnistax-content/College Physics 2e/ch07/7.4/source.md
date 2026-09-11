# Conservative Forces and Potential Energy

## Learning Objectives
By the end of this section, you will be able to:
- Define conservative force, potential energy, and mechanical energy.
- Explain the potential energy of a spring in terms of its compression when Hooke’s law applies.
- Use the work-energy theorem to show how having only conservative forces implies conservation of mechanical energy.

## Potential Energy and Conservative Forces
Work is done by a force, and some forces, such as weight, have special characteristics. A {term:conservative force} is one, like the gravitational force, for which work done by or against it depends only on the starting and ending points of a motion and not on the path taken. We can define a {term:potential energy} $(\text{PE})$ for any conservative force, just as we did for the gravitational force. For example, when you wind up a toy, an egg timer, or an old-fashioned watch, you do work against its spring and store energy in it. (We treat these springs as ideal, in that we assume there is no friction and no production of thermal energy.) This stored energy is recoverable as work, and it is useful to think of it as potential energy contained in the spring. Indeed, the reason that the spring has this characteristic is that its force is *conservative*. That is, a conservative force results in stored or potential energy. Gravitational potential energy is one example, as is the energy stored in a spring. We will also see how conservative forces are related to the conservation of energy.

:::note [] Potential Energy and Conservative Forces

Potential energy is the energy a system has due to position, shape, or configuration. It is stored energy that is completely recoverable.
A conservative force is one for which work done by or against it depends only on the starting and ending points of a motion and not on the path taken.
We can define a potential energy $(\text{PE})$ for any conservative force. The work done against a conservative force to reach a final configuration depends on the configuration, not the path followed, and is the potential energy added.
:::

## Potential Energy of a Spring
First, let us obtain an expression for the potential energy stored in a spring (${\text{PE}}_{s}$). We calculate the work done to stretch or compress a spring that obeys Hooke’s law. (Hooke’s law was examined in [Elasticity: Stress and Strain](module:m42081), and states that the magnitude of force $F$ on the spring and the resulting deformation $\Delta L$ are proportional, $F=k\Delta L$.) (See [ref:fs-id1593673].) For our spring, we will replace $\Delta L$ (the amount of deformation produced by a force $F$) by the distance $x$ that the spring is stretched or compressed along its length. So the force needed to stretch the spring has magnitude $\text{F = kx}$, where $k$ is the spring’s force constant. The force increases linearly from 0 at the start to  $\text{kx}$ in the fully stretched position. The average force is $\text{kx}/2$. Thus the work done in stretching or compressing the spring is ${W}_{s}=\text{Fd}=(\frac{\text{kx}}{2})x=\frac{1}{2}{\text{kx}}^{2}$. Alternatively, we noted in [Kinetic Energy and the Work-Energy Theorem](module:m42147) that the area under a graph of $F$ vs. $x$ is the work done by the force. In [ref:fs-id1593673](c) we see that this area is also $\frac{1}{2}{\text{kx}}^{2}$. We therefore define the {term:potential energy of a spring}, ${\text{PE}}_{s}$, to be

$$ {\text{PE}}_{\text{s}}=\frac{1}{2}{\text{kx}}^{2}\text{,} $$  {eq:fs-id2759202}

where $k$ is the spring’s force constant and $x$ is the displacement from its undeformed position. The potential energy represents the work done *on* the spring and the energy stored in it as a result of stretching or compressing it a distance $x$. The potential energy of the spring ${\text{PE}}_{s}$ does not depend on the path taken; it depends only on the stretch or squeeze $x$ in the final configuration.

> FIGURE {fig:fs-id1593673} src=../../media/Figure_08_04_01a.jpg
> alt: An undeformed spring fixed at one end with no potential energy. (b) A spring fixed at one end and stretched by a distance x by a force F equal to k x. Work done W is equal to one half k x squared. P E s is equal to one half k x squared. (c) A graph of force F versus elongation x in the spring. A straight line inclined to x axis starts from origin. The area under this line forms a right triangle with base of x and height of k x. Area of this triangle is equal to one half k x squared.
> width: 600
> caption: (a) An undeformed spring has no ${\text{PE}}_{s}$ stored in it. (b) The force needed to stretch (or compress) the spring a distance $x$ has a magnitude $F=\text{kx}$ , and the work done to stretch (or compress) it is $\frac{1}{2}{\text{kx}}^{2}$. Because the force is conservative, this work is stored as potential energy $({\text{PE}}_{s})$ in the spring, and it can be fully recovered. (c) A graph of $F$ vs. $x$ has a slope of $k$, and the area under the graph is $\frac{1}{2}{\text{kx}}^{2}$. Thus the work done or potential energy stored is $\frac{1}{2}{\text{kx}}^{2}$.

The equation ${\text{PE}}_{s}=\frac{1}{2}{\text{kx}}^{2}$ has general validity beyond the special case for which it was derived. Potential energy can be stored in any elastic medium by deforming it. Indeed, the general definition of {term:potential energy} is energy due to position, shape, or configuration. For shape or position deformations, stored energy is ${\text{PE}}_{s}=\frac{1}{2}{\text{kx}}^{2}$, where $k$ is the force constant of the particular system and $x$ is its deformation. Another example is seen in [ref:import-auto-id1089734] for a guitar string.

> FIGURE {fig:import-auto-id1089734} src=../../media/Figure_08_04_02a.jpg
> alt: A six-string guitar is placed vertically. The left-most string is plucked in the left direction with a force F shown by an arrow pointing left. The displacement of the string from the mean position is d. The plucked string is labeled P E sub string, to represent the potential energy of the string.
> width: 150
> caption: Work is done to deform the guitar string, giving it potential energy. When released, the potential energy is converted to kinetic energy and back to potential as the string oscillates back and forth. A very small fraction is dissipated as sound energy, slowly removing energy from the string.

## Conservation of Mechanical Energy
Let us now consider what form the work-energy theorem takes when only conservative forces are involved. This will lead us to the conservation of energy principle. The work-energy theorem states that the net work done by all forces acting on a system equals its change in kinetic energy. In equation form, this is

$$ {W}_{\text{net}}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{{\text{mv}}_{0}}^{2}=\Delta \text{KE.} $$  {eq:fs-id1023510}

If only conservative forces act, then

$$ {W}_{\text{net}}={W}_{\text{c}}\text{,} $$  {eq:fs-id1215817}

where ${W}_{c}$ is the total work done by all conservative forces. Thus,

$$ {W}_{\text{c}}=\text{Δ}\text{KE.} $$  {eq:fs-id1856861}

Now, if the conservative force, such as the gravitational force or a spring force, does work, the system loses potential energy. That is, ${W}_{\text{c}}=-\text{Δ}\text{PE}$. Therefore,

$$ -\text{Δ}\text{PE}=\text{Δ}\text{KE} $$  {eq:fs-id1476064}

or

$$ \text{Δ}\text{KE}+\text{Δ}\text{PE}=0. $$  {eq:fs-id1066460}

This equation means that the total kinetic and potential energy is constant for any process involving only conservative forces. That is,

$$ \begin{array}{l} & \text{KE}+\text{PE}=\text{constant} \\ \text{or} & \\ & {\text{KE}}_{\text{i}}+{\text{PE}}_{\text{i}}={\text{KE}}_{\text{f}}+{\text{PE}}_{\text{f}}\end{array}}\text{(conservative forces only),} $$  {eq:fs-id1898898}

where i and f denote initial and final values. This equation is a form of the work-energy theorem for conservative forces; it is known as the {term:conservation of mechanical energy} principle. Remember that this applies to the extent that all the forces are conservative, so that friction is negligible. The total kinetic plus potential energy of a system is defined to be its {term:mechanical energy}, $(\text{KE}+\text{PE})$. In a system that experiences only conservative forces, there is a potential energy associated with each force, and the energy only changes form between $\text{KE}$ and the various types of $\text{PE}$, with the total energy remaining constant.

:::example {ex:fs-id1893243} Using Conservation of Mechanical Energy to Calculate the Speed of a Toy Car
A 0.100-kg toy car is propelled by a compressed spring, as shown in [ref:import-auto-id2687249]. The car follows a track that rises 0.180 m above the starting point. The spring is compressed 4.00 cm and has a force constant of 250.0 N/m. Assuming work done by friction to be negligible, find (a) how fast the car is going before it starts up the slope and (b) how fast it is going at the top of the slope.

> FIGURE {fig:import-auto-id2687249} src=../../media/Figure_08_04_03a.jpg
> alt: The figure shows a toy race car that has just been released from a spring. Two possible paths for the car are shown. One path has a gradual upward incline, leveling off at a height of eighteen centimeters above its starting level. An alternative path shows the car descending from its starting point, making a loop, and then ascending back up and leveling off at a height of eighteen centimeters above its starting level. 
> caption: A toy car is pushed by a compressed spring and coasts up a slope. Assuming negligible friction, the potential energy in the spring is first completely converted to kinetic energy, and then to a combination of kinetic and gravitational potential energy as the car rises. The details of the path are unimportant because all forces are conservative—the car would have the same final speed if it took the alternate path shown.

**Strategy**
The spring force and the gravitational force are conservative forces, so conservation of mechanical energy can be used. Thus,

$$ {\text{KE}}_{\text{i}}+{\text{PE}}_{\text{i}}={\text{KE}}_{\text{f}}+{\text{PE}}_{\text{f}} $$  {eq:eip-576}

or

$$ \frac{1}{2}{{\text{mv}}_{i}}^{2}+{\text{mgh}}_{i}+\frac{1}{2}{{\text{kx}}_{i}}^{2}=\frac{1}{2}{{\text{mv}}_{f}}^{2}+{\text{mgh}}_{f}+\frac{1}{2}{{\text{kx}}_{f}}^{2}, $$  {eq:eip-82}

where $h$ is the height (vertical position) and $x$ is the compression of the spring. This general statement looks complex but becomes much simpler when we start considering specific situations. First, we must identify the initial and final conditions in a problem; then, we enter them into the last equation to solve for an unknown.
**Solution for (a)**
This part of the problem is limited to conditions just before the car is released and just after it leaves the spring. Take the initial height to be zero, so that both ${h}_{\text{i}}$ and ${h}_{\text{f}}$ are zero. Furthermore, the initial speed ${v}_{\text{i}}$ is zero and the final compression of the spring ${x}_{\text{f}}$ is zero, and so several terms in the conservation of mechanical energy equation are zero and it simplifies to

$$ \frac{1}{2}{{\text{kx}}_{i}}^{2}=\frac{1}{2}{{\text{mv}}_{f}}^{2}\text{.} $$  {eq:eip-654}

In other words, the initial potential energy in the spring is converted completely to kinetic energy in the absence of friction. Solving for the final speed and entering known values yields

$$ \begin{array}{l}{v}_{f} & = & \sqrt{\frac{k}{m}}{x}_{i} \\ & = & \sqrt{\frac{\text{250}\text{.0 N/m}}{\text{0.100 kg}}}(\text{0.0400 m}) \\ & = & \text{2.00 m/s.}\end{array} $$  {eq:eip-196}

**Solution for (b)**
One method of finding the speed at the top of the slope is to consider conditions just before the car is released and just after it reaches the top of the slope, completely ignoring everything in between. Doing the same type of analysis to find which terms are zero, the conservation of mechanical energy becomes

$$ \frac{1}{2}{\text{kx}}_{\text{i}}^{2}=\frac{1}{2}{\text{mv}}_{\text{f}}^{\text{2}}+{\text{mgh}}_{\text{f}}\text{.} $$  {eq:fs-id1617450}

This form of the equation means that the spring’s initial potential energy is converted partly to gravitational potential energy and partly to kinetic energy. The final speed at the top of the slope will be less than at the bottom. Solving for ${v}_{\text{f}}$ and substituting known values gives

$$ \begin{array}{l}{v}_{f} & = & \sqrt{\frac{{{\text{kx}}_{i}}^{2}}{m}-2{\text{gh}}_{f}} \\ & = & \sqrt{(\frac{\text{250.0 N/m}}{\text{0.100 kg}})(\text{0.0400 m}{)}^{2}-2(\text{9.80}\;{\text{m/s}}^{2})(\text{0.180 m})} \\ & = & \text{0.687 m/s.}\end{array} $$  {eq:eip-334}

**Discussion**
Another way to solve this problem is to realize that the car’s kinetic energy before it goes up the slope is converted partly to potential energy—that is, to take the final conditions in part (a) to be the initial conditions in part (b).
:::
Note that, for conservative forces, we do not directly calculate the work they do; rather, we consider their effects through their corresponding potential energies, just as we did in [ref:fs-id1893243]. Note also that we do not consider details of the path taken—only the starting and ending points are important (as long as the path is not impossible). This assumption is usually a tremendous simplification, because the path may be complicated and forces may vary along the way.

:::note [interactive] Energy Skate Park
Learn about conservation of energy with a skater dude in [this simulation](https://openstax.org/l/28skatepark)! Build tracks, ramps and jumps for the skater and view the kinetic energy, potential energy and friction as he moves. You can also take the skater to different planets or even space!
:::

## Test Prep for AP Courses

:::exercise {fs-id1843533} type=ap-test-prep 
PROBLEM:
Two 4.0 kg masses are connected to each other by a spring with a force constant of 25 N/m and a rest length of 1.0 m. If the spring has been compressed to 0.80 m in length and the masses are traveling toward each other at 0.50 m/s (each), what is the total energy in the system?
1. 1.0 J
2. 1.5 J
3. 9.0 J
4. 8.0 J
:::

:::exercise {fs-id1632979} type=ap-test-prep 
PROBLEM:
A spring with a force constant of 5000 N/m and a rest length of 3.0 m is used in a catapult. When compressed to 1.0 m, it is used to launch a 50 kg rock. However, there is an error in the release mechanism, so the rock gets launched almost straight up. How high does it go, and how fast is it going when it hits the ground?
SOLUTION:
20 m high, 20 m/s.
:::

:::exercise {fs-id2319062} type=ap-test-prep 
PROBLEM:
What information do you need to calculate the kinetic energy and potential energy of a spring? Potential energy due to gravity? How many objects do you need information about for each of these cases?
:::

:::exercise {fs-id2328776} type=ap-test-prep 
PROBLEM:
You are loading a toy dart gun, which has two settings, the more powerful with the spring compressed twice as far as the lower setting. If it takes 5.0 J of work to compress the dart gun to the lower setting, how much work does it take for the higher setting?
1. 20 J
2. 10 J
3. 2.5 J
4. 40 J
SOLUTION:
(a)
:::

:::exercise {fs-id2524398} type=ap-test-prep 
PROBLEM:
Describe a system you use daily with internal potential energy.
:::

:::exercise {fs-id2987264} type=ap-test-prep 
PROBLEM:
Old-fashioned pendulum clocks are powered by masses that need to be wound back to the top of the clock about once a week to counteract energy lost due to friction and to the chimes. One particular clock has three masses: 4.0 kg, 4.0 kg, and 6.0 kg. They can drop 1.3 meters. How much energy does the clock use in a week?
1. 51 J
2. 76 J
3. 127 J
4. 178 J
SOLUTION:
(d)
:::

:::exercise {fs-id1360944} type=ap-test-prep 
PROBLEM:
A water tower stores not only water, but (at least part of) the energy to move the water. How much? Make reasonable estimates for how much water is in the tower, and other quantities you need.
:::

:::exercise {fs-id1759232} type=ap-test-prep 
PROBLEM:
Old-fashioned pocket watches needed to be wound daily so they wouldn’t run down and lose time, due to the friction in the internal components. This required a large number of turns of the winding key, but not much force per turn, and it was possible to overwind and break the watch. How was the energy stored?
1. A small mass raised a long distance
2. A large mass raised a short distance
3. A weak spring deformed a long way
4. A strong spring deformed a short way
SOLUTION:
(c)
:::

:::exercise {fs-id1811319} type=ap-test-prep 
PROBLEM:
Some of the very first clocks invented in China were powered by water. Describe how you think this was done.
:::

## Section Summary
- A conservative force is one for which work depends only on the starting and ending points of a motion, not on the path taken.
- We can define potential energy $(\text{PE})$ for any conservative force, just as we defined ${\text{PE}}_{g}$ for the gravitational force.
- The potential energy of a spring is ${\text{PE}}_{s}=\frac{1}{2}{\text{kx}}^{2}$, where $k$ is the spring’s force constant and $x$ is the displacement from its undeformed position.
- Mechanical energy is defined to be $\text{KE}+\text{PE}$ for a conservative force.
- When only conservative forces act on and within a system, the total mechanical energy is constant. In equation form,

$$ (\begin{array}{l} & \text{KE}+\text{PE}=\text{constant} \\ \text{or} & \\ & {\text{KE}}_{\text{i}}+{\text{PE}}_{\text{i}}={\text{KE}}_{\text{f}}+{\text{PE}}_{\text{f}}\end{array})\text{(conservative forces only),} $$  {eq:eip-201}

where i and f denote initial and final values. This is known as the conservation of mechanical energy.

## Conceptual Questions

:::exercise {fs-id2769430} type=conceptual-questions 
PROBLEM:
What is a conservative force?
:::

:::exercise {fs-id2731704} type=conceptual-questions 
PROBLEM:
The force exerted by a diving board is conservative, provided the internal friction is negligible. Assuming friction is negligible, describe changes in the potential energy of a diving board as a swimmer dives from it, starting just before the swimmer steps on the board until just after his feet leave it.
:::

:::exercise {fs-id1862083} type=conceptual-questions 
PROBLEM:
Define mechanical energy. What is the relationship of mechanical energy to nonconservative forces? What happens to mechanical energy if only conservative forces act?
:::

:::exercise {fs-id1707793} type=conceptual-questions 
PROBLEM:
What is the relationship of potential energy to conservative force?
:::

## Problems & Exercises

:::exercise {fs-id1088644} type=problems-exercises 
PROBLEM:
A $5\text{.}\text{00}\times {\text{10}}^{5}\text{-kg}$ subway train is brought to a stop from a speed of 0.500 m/s in 0.400 m by a large spring bumper at the end of its track. What is the force constant $k$ of the spring?
SOLUTION:

$$ \text{7.81}×{\text{10}}^{5}\;\text{N/m} $$  {eq:fs-id1589880}

:::

:::exercise {fs-id1628356} type=problems-exercises 
PROBLEM:
A pogo stick has a spring with a force constant of $2\text{.}\text{50}×{\text{10}}^{4}\;\text{N/m}$, which can be compressed 12.0 cm. To what maximum height can a child jump on the stick using only the energy in the spring, if the child and stick have a total mass of 40.0 kg? Explicitly show how you follow the steps in the [Problem-Solving Strategies for Energy](module:m42151).
:::

## Glossary
- {def} **conservative force**: a force that does the same work for any given initial and final configuration, regardless of the path followed
- {def} **potential energy**: energy due to position, shape, or configuration
- {def} **potential energy of a spring**: the stored energy of a spring as a function of its displacement; when Hooke’s law applies, it is given by the expression $\frac{1}{2}{\text{kx}}^{2}$ where $x$ is the distance the spring is compressed or extended and $k$ is the spring constant
- {def} **conservation of mechanical energy**: the rule that the sum of the kinetic energies and potential energies remains constant if only conservative forces act on and within a system
- {def} **mechanical energy**: the sum of kinetic energy and potential energy

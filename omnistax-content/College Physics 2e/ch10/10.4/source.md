# Rotational Kinetic Energy: Work and Energy Revisited

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Derive the equation for rotational work.
- Calculate rotational kinetic energy.
- Demonstrate the Law of Conservation of Energy.
In this module, we will learn about work and energy associated with rotational motion. [ref:import-auto-id3229349] shows a worker using an electric grindstone propelled by a motor. Sparks are flying, and noise and vibration are created as layers of steel are pared from the pole. The stone continues to turn even after the motor is turned off, but it is eventually brought to a stop by friction. Clearly, the motor had to work to get the stone spinning. This work went into heat, light, sound, vibration, and considerable {term:rotational kinetic energy}.

> FIGURE {fig:import-auto-id3229349} src=../../media/Figure_11_04_01a.jpg
> alt: The figure shows a mechanic cutting metal with a metal grinder. The sparks are emerging from the point of contact and jumping off tangentially from the cutter.
> width: 250
> caption: The motor works in spinning the grindstone, giving it rotational kinetic energy. That energy is then converted to heat, light, sound, and vibration. (credit: U.S. Navy photo by Mass Communication Specialist Seaman Zachary David Bell)

Work must be done to rotate objects such as grindstones or merry-go-rounds. Work was defined in [Uniform Circular Motion and Gravitation](module:m42083) for translational motion, and we can build on that knowledge when considering work done in rotational motion. The simplest rotational situation is one in which the net force is exerted perpendicular to the radius of a disk (as shown in [ref:import-auto-id2009471]) and remains perpendicular as the disk starts to rotate. The force is parallel to the displacement, and so the net work done is the product of the force times the arc length traveled:

$$ \text{net}\;W=(\text{net}\;F)\text{Δ}s. $$  {eq:eip-458}

To get torque and other rotational quantities into the equation, we multiply and divide the right-hand side of the equation by $r$, and gather terms:

$$ \text{net}\;W=(r\;\text{net}\;F)\frac{\text{Δ}s}{r}. $$  {eq:eip-909}

We recognize that $r\;\text{net}\;F=\text{net}\tau$ and $\Delta s/r=\theta$, so that

$$ \text{net}\;W=(\text{net}\tau )\theta . $$  {eq:eip-690}

This equation is the expression for rotational work. It is very similar to the familiar definition of translational work as force multiplied by distance. Here, torque is analogous to force, and angle is analogous to distance. The equation $\text{net}\;W=(\text{net}\tau )\theta$ is valid in general, even though it was derived for a special case.
To get an expression for rotational kinetic energy, we must again perform some algebraic manipulations. The first step is to note that $\text{net}\tau =Iα$, so that

$$ \text{net}\;W=I\alpha \theta . $$  {eq:eip-404}

> FIGURE {fig:import-auto-id2009471} src=../../media/Figure_11_04_02a.jpg
> alt: The figure shows a circular disc of radius r. A net force F is applied perpendicular to the radius, rotating the disc in an anti-clockwise direction and producing a displacement equal to delta S, in a direction parallel to the direction of the force applied. The angle covered is theta.
> width: 275
> caption: The net force on this disk is kept perpendicular to its radius as the force causes the disk to rotate. The net work done is thus $(\text{net}\;F)\Delta s$. The net work goes into rotational kinetic energy.

:::note [] Making Connections

Work and energy in rotational motion are completely analogous to work and energy in translational motion, first presented in [Uniform Circular Motion and Gravitation](module:m42083).
:::
Now, we solve one of the rotational kinematics equations for $\alpha \theta$. We start with the equation

$$ {\omega}^{2}={{\omega}_{\text{0}}}^{2}+2\alpha \theta . $$  {eq:eip-750}

Next, we solve for $\alpha \theta$:

$$ \alpha \theta =\frac{{\omega}^{2}-{{\omega}_{\text{0}}}^{2}}{2}. $$  {eq:eip-241}

Substituting this into the equation for net $W$ and gathering terms yields

$$ \text{net}\;W=\frac{1}{2}{Iω}^{2}-\frac{1}{2}I{{\omega}_{\text{0}}}^{2}. $$  {eq:eip-789}

This equation is the {term:work-energy theorem} for rotational motion only. As you may recall, net work changes the kinetic energy of a system. Through an analogy with translational motion, we define the term $(\frac{1}{2}){Iω}^{2}$ to be {term:rotational kinetic energy} ${\text{KE}}_{\text{rot}}$ for an object with a moment of inertia $I$ and an angular velocity $\omega$:

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-682}

The expression for rotational kinetic energy is exactly analogous to translational kinetic energy, with $I$ being analogous to $m$ and $\omega$ to $v$. Rotational kinetic energy has important effects. Flywheels, for example, can be used to store large amounts of rotational kinetic energy in a vehicle, as seen in [ref:import-auto-id1614457].

> FIGURE {fig:import-auto-id1614457} src=../../media/Figure_11_04_03a.jpg
> alt: The figure shows a bus carrying a large flywheel on its board in which rotational kinetic energy is stored.
> width: 250
> caption: Experimental vehicles, such as this bus, have been constructed in which rotational kinetic energy is stored in a large flywheel. When the bus goes down a hill, its transmission converts its gravitational potential energy into ${\text{KE}}_{\text{rot}}$. It can also convert translational kinetic energy, when the bus stops, into ${\text{KE}}_{\text{rot}}$. The flywheel’s energy can then be used to accelerate, to go up another hill, or to keep the bus from slowing down due to friction.

:::example {ex:fs-id3354618} Calculating the Work and Energy for Spinning a Grindstone
Consider a person who spins a large grindstone by placing her hand on its edge and exerting a force through part of a revolution as shown in [ref:import-auto-id2674234]. In this example, we verify that the work done by the torque she exerts equals the change in rotational energy. (a) How much work is done if she exerts a force of 200 N through a rotation of $\text{1.00 rad}(57.3º)$? The force is kept perpendicular to the grindstone’s 0.320-m radius at the point of application, and the effects of friction are negligible. (b) What is the final angular velocity if the grindstone has a mass of 85.0 kg? (c) What is the final rotational kinetic energy? (It should equal the work.)
**Strategy**
To find the work, we can use the equation $\text{net}\;W=(\text{net}\tau )\theta$. We have enough information to calculate the torque and are given the rotation angle. In the second part, we can find the final angular velocity using one of the kinematic relationships. In the last part, we can calculate the rotational kinetic energy from its expression in ${\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}$.
**Solution for (a)**
The net work is expressed in the equation

$$ \text{net}\;W=(\text{net}\tau )\theta , $$  {eq:eip-117}

where net $τ$ is the applied force multiplied by the radius $(\text{rF})$ because there is no retarding friction, and the force is perpendicular to $r$. The angle $\theta$ is given. Substituting the given values in the equation above yields

$$ \begin{array}{lll}\text{net}\;W & = & \text{rF}\theta =(\text{0.320 m})(\text{200 N})(\text{1.00 rad}) \\ & = & \text{64.0 N}⋅\text{m.}\end{array} $$  {eq:eip-348}

Noting that $1 N\cdot \text{m}=1 J$,

$$ \text{net}\;W=\text{64.0 J}. $$  {eq:eip-903}

> FIGURE {fig:import-auto-id2674234} src=../../media/Figure_11_04_04a.jpg
> alt: The figure shows a large grindstone of radius r which is being given a spin by applying a force F in a counterclockwise direction, as indicated by the arrows.
> caption: A large grindstone is given a spin by a person grasping its outer edge.

**Solution for (b)**
To find $\omega$ from the given information requires more than one step. We start with the kinematic relationship in the equation

$$ {\omega}^{2}={{\omega}_{\text{0}}}^{2}+2\alpha \theta . $$  {eq:eip-576}

Note that ${\omega}_{0}=0$ because we start from rest. Taking the square root of the resulting equation gives

$$ \omega ={(2\alpha \theta )}^{1/2}. $$  {eq:eip-981}

Now we need to find $\alpha$. One possibility is

$$ \alpha =\frac{\text{net}\tau}{I}, $$  {eq:eip-825}

where the torque is

$$ \text{net}\tau =\text{rF}=(\text{0.320 m})(\text{200 N})=\text{64.0 N}⋅\text{m}. $$  {eq:eip-643}

The formula for the moment of inertia for a disk is found in [ref:fs-id1838666](module:m42179):

$$ I=\frac{1}{2}{\text{MR}}^{2}=0.5(\text{85.0 kg}){(\text{0.320 m})}^{2}=\text{4.352 kg}⋅{\text{m}}^{2}. $$  {eq:eip-119}

Substituting the values of torque and moment of inertia into the expression for $\alpha$, we obtain

$$ \alpha =\frac{\text{64}\text{.}\text{0 N}⋅\text{m}}{\text{4.352 kg}⋅{\text{m}}^{2}}=\text{14.7}\frac{\text{rad}}{{\text{s}}^{2}}. $$  {eq:eip-877}

Now, substitute this value and the given value for $\theta$ into the above expression for $\omega$:

$$ \omega ={(2\alpha \theta )}^{1/2}={[2(\text{14.7}\frac{\text{rad}}{{\text{s}}^{2}})(\text{1.00 rad})]}^{1/2}=\text{5.42}\frac{\text{rad}}{\text{s}}. $$  {eq:eip-116}

**Solution for (c)**
The final rotational kinetic energy is

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-291}

Both $I$ and $\omega$ were found above. Thus,

$$ {\text{KE}}_{\text{rot}}=(0.5)(\text{4.352 kg}⋅{\text{m}}^{2}){(\text{5.42 rad/s})}^{2}=\text{64.0 J}. $$  {eq:eip-256}

**Discussion**
The final rotational kinetic energy equals the work done by the torque, which confirms that the work done went into rotational kinetic energy. We could, in fact, have used an expression for energy instead of a kinematic relation to solve part (b). We will do this in later examples.
:::
Helicopter pilots are quite familiar with rotational kinetic energy. They know, for example, that a point of no return will be reached if they allow their blades to slow below a critical angular velocity during flight. The blades lose lift, and it is impossible to immediately get the blades spinning fast enough to regain it. Rotational kinetic energy must be supplied to the blades to get them to rotate faster, and enough energy cannot be supplied in time to avoid a crash. Because of weight limitations, helicopter engines are too small to supply both the energy needed for lift and to replenish the rotational kinetic energy of the blades once they have slowed down. The rotational kinetic energy is put into them before takeoff and must not be allowed to drop below this crucial level. One possible way to avoid a crash is to use the gravitational potential energy of the helicopter to replenish the rotational kinetic energy of the blades by losing altitude and aligning the blades so that the helicopter is spun up in the descent. Of course, if the helicopter’s altitude is too low, then there is insufficient time for the blade to regain lift before reaching the ground.

:::note [] Problem-Solving Strategy for Rotational Energy

1. *Determine that energy or work is involved in the rotation*.
2. *Determine the system of interest*. A sketch usually helps.
3. *Analyze the situation to determine the types of work and energy involved*.
4. *For closed systems, mechanical energy is conserved*. That is, ${\text{KE}}_{\text{i}}+{\text{PE}}_{\text{i}}={\text{KE}}_{\text{f}}+{\text{PE}}_{\text{f}}.$ Note that ${\text{KE}}_{\text{i}}$ and ${\text{KE}}_{\text{f}}$ may each include translational and rotational contributions.
5. *For open systems*, mechanical energy may not be conserved, and other forms of energy (referred to previously as $\text{OE}$), such as heat transfer, may enter or leave the system. Determine what they are, and calculate them as necessary.
6. *Eliminate terms wherever possible to simplify the algebra*.
7. *Check the answer to see if it is reasonable*.
:::

:::example {ex:fs-id3173123} Calculating Helicopter Energies
A typical small rescue helicopter, similar to the one in [ref:import-auto-id2420248], has four blades, each is 4.00 m long and has a mass of 50.0 kg. The blades can be approximated as thin rods that rotate about one end of an axis perpendicular to their length. The helicopter has a total loaded mass of 1000 kg. (a) Calculate the rotational kinetic energy in the blades when they rotate at 300 rpm. (b) Calculate the translational kinetic energy of the helicopter when it flies at 20.0 m/s, and compare it with the rotational energy in the blades. (c) To what height could the helicopter be raised if all of the rotational kinetic energy could be used to lift it?
**Strategy**
Rotational and translational kinetic energies can be calculated from their definitions. The last part of the problem relates to the idea that energy can change form, in this case from rotational kinetic energy to gravitational potential energy.
**Solution for (a)**
The rotational kinetic energy is

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-327}

We must convert the angular velocity to radians per second and calculate the moment of inertia before we can find ${\text{KE}}_{\text{rot}}$. The angular velocity $\omega$ is

$$ \omega =\frac{\text{300 rev}}{\text{1.00 min}}⋅\frac{\text{2}\pi \text{rad}}{\text{1 rev}}⋅\frac{\text{1.00 min}}{\text{60.0 s}}=\text{31.4}\frac{\text{rad}}{\text{s}}. $$  {eq:eip-583}

The moment of inertia of one blade will be that of a thin rod rotated about its end, found in [ref:fs-id1838666](module:m42179). The total $I$ is four times this moment of inertia, because there are four blades. Thus,

$$ I=4\frac{{Mℓ}^{2}}{3}=4\times \frac{(\text{50.0 kg}){(\text{4.00 m})}^{2}}{3}=\text{1067 kg}⋅{\text{m}}^{2}. $$  {eq:eip-897}

Entering $\omega$ and $I$ into the expression for rotational kinetic energy gives

$$ \begin{array}{lll}{\text{KE}}_{\text{rot}} & = & 0.5(\text{1067 kg}⋅{\text{m}}^{2}){(\text{31.4 rad/s})}^{2} \\ & = & 5.26\times {\text{10}}^{5}\;\text{J}\end{array} $$  {eq:eip-913}

**Solution for (b)**
Translational kinetic energy was defined in [Uniform Circular Motion and Gravitation](module:m42083). Entering the given values of mass and velocity, we obtain

$$ {\text{KE}}_{\text{trans}}=\frac{1}{2}{mv}^{2}=(0.5)(\text{1000 kg}){(\text{20.0 m/s})}^{2}=2\text{.}\text{00}\times {\text{10}}^{5}\;\text{J}. $$  {eq:eip-2}

To compare kinetic energies, we take the ratio of translational kinetic energy to rotational kinetic energy. This ratio is

$$ \frac{2\text{.}\text{00}\times {\text{10}}^{5}\;\text{J}}{5\text{.}\text{26}\times {\text{10}}^{5}\;\text{J}}=0.380. $$  {eq:eip-973}

**Solution for (c)**
At the maximum height, all rotational kinetic energy will have been converted to gravitational energy. To find this height, we equate those two energies:

$$ {\text{KE}}_{\text{rot}}={\text{PE}}_{\text{grav}} $$  {eq:eip-487}

or

$$ \frac{1}{2}{Iω}^{2}=\text{mgh}. $$  {eq:eip-154}

We now solve for $h$ and substitute known values into the resulting equation

$$ h=\frac{{\frac{1}{2}Iω}^{2}}{\text{mg}}=\frac{5.26\times {\text{10}}^{5}\;\text{J}}{(\text{1000 kg})(9.80\;{\text{m/s}}^{2})}=\text{53.7 m}. $$  {eq:eip-232}

**Discussion**
The ratio of translational energy to rotational kinetic energy is only 0.380. This ratio tells us that most of the kinetic energy of the helicopter is in its spinning blades—something you probably would not suspect. The 53.7 m height to which the helicopter could be raised with the rotational kinetic energy is also impressive, again emphasizing the amount of rotational kinetic energy in the blades.
:::

> FIGURE {fig:import-auto-id2420248} src=../../media/Figure_11_04_05a.jpg
> alt: The given figure here shows a helicopter from the Auckland Westpac Rescue Helicopter Service over a sea. A rescue diver is shown holding the iron stand bar at the bottom of the helicopter, clutching a person. In the other image just above this, the blades of the helicopter are shown with their anti-clockwise rotation direction shown with an arrow and the length of one blade is given as four meters.
> caption: The first image shows how helicopters store large amounts of rotational kinetic energy in their blades. This energy must be put into the blades before takeoff and maintained until the end of the flight. The engines do not have enough power to simultaneously provide lift and put significant rotational energy into the blades. The second image shows a helicopter from the Auckland Westpac Rescue Helicopter Service. Over 50,000 lives have been saved since its operations beginning in 1973. Here, a water rescue operation is shown. (credit: 111 Emergency, Flickr)

:::note [] Making Connections

Conservation of energy includes rotational motion, because rotational kinetic energy is another form of $\text{KE}$ . [Uniform Circular Motion and Gravitation](module:m42083) has a detailed treatment of conservation of energy.
:::

## How Thick Is the Soup? Or Why Don’t All Objects Roll Downhill at the Same Rate?
One of the quality controls in a tomato soup factory consists of rolling filled cans down a ramp. If they roll too fast, the soup is too thin. Why should cans of identical size and mass roll down an incline at different rates? And why should the thickest soup roll the slowest?
The easiest way to answer these questions is to consider energy. Suppose each can starts down the ramp from rest. Each can starting from rest means each starts with the same gravitational potential energy ${\text{PE}}_{\text{grav}}$, which is converted entirely to $\text{KE}$, provided each rolls without slipping. $\text{KE}$, however, can take the form of ${\text{KE}}_{\text{trans}}$ or ${\text{KE}}_{\text{rot}}$, and total $\text{KE}$ is the sum of the two. If a can rolls down a ramp, it puts part of its energy into rotation, leaving less for translation. Thus, the can goes slower than it would if it slid down. Furthermore, the thin soup does not rotate, whereas the thick soup does, because it sticks to the can. The thick soup thus puts more of the can’s original gravitational potential energy into rotation than the thin soup, and the can rolls more slowly, as seen in [ref:import-auto-id3105621].

> FIGURE {fig:import-auto-id3105621} src=../../media/Figure_11_04_06a.jpg
> alt: The figure shows a flat surface inclined at a height of h from the surface level, with three cans of soup of different densities numbered as one, two, and three rolling along it.
> width: 300
> caption: Three cans of soup with identical masses race down an incline. The first can has a low friction coating and does not roll but just slides down the incline. It wins because it converts its entire PE into translational KE. The second and third cans both roll down the incline without slipping. The second can contains thin soup and comes in second because part of its initial PE goes into rotating the can (but not the thin soup). The third can contains thick soup. It comes in third because the soup rotates along with the can, taking even more of the initial PE for rotational KE, leaving less for translational KE.

Assuming no losses due to friction, there is only one force doing work—gravity. Therefore the total work done is the change in kinetic energy. As the cans start moving, the potential energy is changing into kinetic energy. Conservation of energy gives

$$ {\text{PE}}_{\text{i}}={\text{KE}}_{\text{f}}. $$  {eq:eip-138}

More specifically,

$$ {\text{PE}}_{\text{grav}}={\text{KE}}_{\text{trans}}+{\text{KE}}_{\text{rot}} $$  {eq:eip-449}

or

$$ \text{mgh}=\frac{1}{2}{\text{mv}}^{2}+\frac{1}{2}{Iω}^{2}. $$  {eq:eip-210}

So, the initial $\text{mgh}$ is divided between translational kinetic energy and rotational kinetic energy; and the greater $I$ is, the less energy goes into translation. If the can slides down without friction, then $\omega =0$ and all the energy goes into translation; thus, the can goes faster.

:::note [] Take-Home Experiment

Locate several cans each containing different types of food. First, predict which can will win the race down an inclined plane and explain why. See if your prediction is correct. You could also do this experiment by collecting several empty cylindrical containers of the same size and filling them with different materials such as wet or dry sand.
:::

:::example {ex:fs-id3073422} Calculating the Speed of a Cylinder Rolling Down an Incline
Calculate the final speed of a solid cylinder that rolls down a 2.00-m-high incline. The cylinder starts from rest, has a mass of 0.750 kg, and has a radius of 4.00 cm.
**Strategy**
We can solve for the final velocity using conservation of energy, but we must first express rotational quantities in terms of translational quantities to end up with $v$ as the only unknown.
**Solution**
Conservation of energy for this situation is written as described above:

$$ \text{mgh}=\frac{1}{2}{mv}^{2}+\frac{1}{2}{Iω}^{2}. $$  {eq:eip-454}

Before we can solve for $v$ , we must get an expression for $I$ from [ref:fs-id1838666](module:m42179). Because $v$ and $\omega$ are related (note here that the cylinder is rolling without slipping), we must also substitute the relationship $\omega =v/R$ into the expression. These substitutions yield

$$ \text{mgh}=\frac{1}{2}{mv}^{2}+\frac{1}{2}(\frac{1}{2}{mR}^{2})(\frac{{v}^{2}}{{R}^{2}}). $$  {eq:eip-97}

Interestingly, the cylinder’s radius $R$ and mass $m$ cancel, yielding

$$ \text{gh}=\frac{1}{2}{v}^{2}+\frac{1}{4}{v}^{2}=\frac{3}{4}{v}^{2}. $$  {eq:eip-798}

Solving algebraically, the equation for the final velocity $v$ gives

$$ v={(\frac{4\text{gh}}{3})}^{1/2}. $$  {eq:eip-320}

Substituting known values into the resulting expression yields

$$ v={[\frac{4(9.80\;{\text{m/s}}^{2})(\text{2.00 m})}{3}]}^{1/2}=\text{5.11 m/s}. $$  {eq:eip-191}

**Discussion**
Because $m$ and $R$ cancel, the result $v={(\frac{4}{3}\text{gh})}^{1/2}$ is valid for any solid cylinder, implying that all solid cylinders will roll down an incline at the same rate independent of their masses and sizes. (Rolling cylinders down inclines is what Galileo actually did to show that objects fall at the same rate independent of mass.) Note that if the cylinder slid without friction down the incline without rolling, then the entire gravitational potential energy would go into translational kinetic energy. Thus, $\frac{1}{2}{\text{mv}}^{2}=\text{mgh}$ and $v=(2\text{gh}{)}^{1/2}$, which is 22% greater than $(4\text{gh}/3{)}^{1/2}$. That is, the cylinder would go faster at the bottom.
:::

:::exercise {fs-id2931518} type=check-understanding Check Your Understanding

PROBLEM:
**Analogy of Rotational and Translational Kinetic Energy**
Is rotational kinetic energy completely analogous to translational kinetic energy? What, if any, are their differences? Give an example of each type of kinetic energy.
SOLUTION:
Yes, rotational and translational kinetic energy are exact analogs. They both are the energy of motion involved with the coordinated (non-random) movement of mass relative to some reference frame. The only difference between rotational and translational kinetic energy is that translational is straight line motion while rotational is not. An example of both kinetic and translational kinetic energy is found in a bike tire while being ridden down a bike path. The rotational motion of the tire means it has rotational kinetic energy while the movement of the bike along the path means the tire also has translational kinetic energy. If you were to lift the front wheel of the bike and spin it while the bike is stationary, then the wheel would have only rotational kinetic energy relative to the Earth.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2004322} type=ap-test-prep 
PROBLEM:
Gear A, which turns clockwise, meshes with gear B, which turns counterclockwise. When more force is applied through gear A, torque is created. How does the angular velocity of gear B change as a result?
a. It increases in magnitude.
b. It decreases in magnitude.
c. It changes direction.
d. It stays the same.
SOLUTION:
(a)
:::

:::exercise {fs-id1292713} type=ap-test-prep 
PROBLEM:
Which will cause a greater increase in the angular velocity of a disk: doubling the torque applied or halving the radius at which the torque is applied? Explain.
:::

:::exercise {fs-id1543406} type=ap-test-prep 
PROBLEM:
Which measure would not be useful to help you determine the change in angular velocity when the torque on a fishing reel is increased?
a. the radius of the reel
b. the amount of line that unspools
c. the angular momentum of the fishing line
d. the time it takes the line to unspool
SOLUTION:
(c)
:::

:::exercise {fs-id1628274} type=ap-test-prep 
PROBLEM:
What data could you collect to study the change in angular velocity when two people push a merry-go-round instead of one, providing twice as much torque? How would you use the data you collect?
:::

## Section Summary {section:section-summary}
- The rotational kinetic energy ${\text{KE}}_{\text{rot}}$ for an object with a moment of inertia $I$ and an angular velocity $\omega$ is given by

$$ {\text{KE}}_{\text{rot}}=\frac{1}{2}{Iω}^{2}. $$  {eq:eip-595}

- Helicopters store large amounts of rotational kinetic energy in their blades. This energy must be put into the blades before takeoff and maintained until the end of the flight. The engines do not have enough power to simultaneously provide lift and put significant rotational energy into the blades.
- Work and energy in rotational motion are completely analogous to work and energy in translational motion.
- The equation for the {term:work-energy theorem} for rotational motion is,

$$ \text{net}\;W=\frac{1}{2}{Iω}^{2}-\frac{1}{2}I{{\omega}_{\text{0}}}^{2}. $$  {eq:eip-669}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3026004} type=conceptual-questions 
PROBLEM:
Describe the energy transformations involved when a yo-yo is thrown downward and then climbs back up its string to be caught in the user’s hand.
:::

:::exercise {fs-id1428194} type=conceptual-questions 
PROBLEM:
What energy transformations are involved when a dragster engine is revved, its clutch let out rapidly, its tires spun, and it starts to accelerate forward? Describe the source and transformation of energy at each step.
:::

:::exercise {fs-id2640555} type=conceptual-questions 
PROBLEM:
The Earth has more rotational kinetic energy now than did the cloud of gas and dust from which it formed. Where did this energy come from?

> FIGURE {fig:import-auto-id2615448} src=../../media/Figure_11_04_07a.jpg
> alt: The figure shows a closed view of a red planet in the sky, with a sun like object seen at the far right and the planet shown here being surrounded by circles of gas and dust.
> width: 250
> caption: An immense cloud of rotating gas and dust contracted under the influence of gravity to form the Earth and in the process rotational kinetic energy increased. (credit: NASA)

:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id2402678} type=problems-exercises 
PROBLEM:
This problem considers energy and work aspects of [ref:fs-id1468671](module:m42179)—use data from that example as needed. (a) Calculate the rotational kinetic energy in the merry-go-round plus child when they have an angular velocity of 20.0 rpm. (b) Using energy considerations, find the number of revolutions the father will have to push to achieve this angular velocity starting from rest. (c) Again, using energy considerations, calculate the force the father must exert to stop the merry-go-round in two revolutions
SOLUTION:
(a) 185 J
(b) 0.0785 rev
(c) $W=9\text{.}\text{81 N}$
:::

:::exercise {fs-id2601323} type=problems-exercises 
PROBLEM:
What is the final velocity of a hoop that rolls without slipping down a 5.00-m-high hill, starting from rest?
:::

:::exercise {fs-id3017926} type=problems-exercises 
PROBLEM:
(a) Calculate the rotational kinetic energy of Earth on its axis. (b) What is the rotational kinetic energy of Earth in its orbit around the Sun?
SOLUTION:
(a) $2.57\times {\text{10}}^{\text{29}}\;\text{J}$
(b) ${\text{KE}}_{\text{rot}}=2\text{.}\text{65}\times {\text{10}}^{\text{33}}\;\text{J}$
:::

:::exercise {fs-id1596687} type=problems-exercises 
PROBLEM:
Calculate the rotational kinetic energy in the motorcycle wheel ([ref:import-auto-id3370574](module:m42179)) if its angular velocity is 120 rad/s. Assume M = 12.0 kg, R<sub>1</sub> = 0.280 m, and R<sub>2</sub> = 0.330 m.
:::

:::exercise {fs-id1580820} type=problems-exercises 
PROBLEM:
A baseball pitcher throws the ball in a motion where there is rotation of the forearm about the elbow joint as well as other movements. If the linear velocity of the ball relative to the elbow joint is 20.0 m/s at a distance of 0.480 m from the joint and the moment of inertia of the forearm is $\text{0.500 kg}⋅{\text{m}}^{2}$, what is the rotational kinetic energy of the forearm?
SOLUTION:

$$ {\text{KE}}_{\text{rot}}=\text{434 J} $$  {eq:eip-id1583692}

:::

:::exercise {fs-id2604037} type=problems-exercises 
PROBLEM:
While punting a football, a kicker rotates her leg about the hip joint. The moment of inertia of the leg is $\text{3.75 kg}⋅{\text{m}}^{2}$ and its rotational kinetic energy is 175 J. (a) What is the angular velocity of the leg? (b) What is the velocity of tip of the punter’s shoe if it is 1.05 m from the hip joint? (c) Explain how the football can be given a velocity greater than the tip of the shoe (necessary for a decent kick distance).
:::

:::exercise {fs-id2662255} type=problems-exercises 
PROBLEM:
A bus contains a 1500 kg flywheel (a disk that has a 0.600 m radius) and has a total mass of 10,000 kg. (a) Calculate the angular velocity the flywheel must have to contain enough energy to take the bus from rest to a speed of 20.0 m/s, assuming 90.0% of the rotational kinetic energy can be transformed into translational energy. (b) How high a hill can the bus climb with this stored energy and still have a speed of 3.00 m/s at the top of the hill? Explicitly show how you follow the steps in the [ref:fs-id1986333]Problem-Solving Strategy for Rotational Energy.
SOLUTION:
(a) $\text{128 rad/s}$
(b) $\text{19.9 m}$
:::

:::exercise {fs-id3250372} type=problems-exercises 
PROBLEM:
A ball with an initial velocity of 8.00 m/s rolls up a hill without slipping. Treating the ball as a spherical shell, calculate the vertical height it reaches. (b) Repeat the calculation for the same ball if it slides up the hill without rolling.
:::

:::exercise {fs-id2583778} type=problems-exercises 
PROBLEM:
While exercising in a fitness center, a man lies face down on a bench and lifts a weight with one lower leg by contacting the muscles in the back of the upper leg. (a) Find the angular acceleration produced given the mass lifted is 10.0 kg at a distance of 28.0 cm from the knee joint, the moment of inertia of the lower leg is $\text{0.900 kg}⋅{\text{m}}^{2}$, the muscle force is 1500 N, and its effective perpendicular lever arm is 3.00 cm. (b) How much work is done if the leg rotates through an angle of $\text{20.0º}$ with a constant force exerted by the muscle?
SOLUTION:
(a) $\text{10.}{\text{4 rad/s}}^{2}$
(b) $\text{net}\;W=6.\text{11 J}$
:::

:::exercise {fs-id3199856} type=problems-exercises 
PROBLEM:
To develop muscle tone, a woman lifts a 2.00-kg weight held in her hand. She uses her biceps muscle to flex the lower arm through an angle of $\text{60.0º}$. (a) What is the angular acceleration if the weight is 24.0 cm from the elbow joint, her forearm has a moment of inertia of $\text{0.250 kg}⋅{\text{m}}^{2}$, and the net force she exerts is 750 N at an effective perpendicular lever arm of 2.00 cm? (b) How much work does she do?
:::

:::exercise {fs-id3245199} type=problems-exercises 
PROBLEM:
Consider two cylinders that start down identical inclines from rest except that one is frictionless. Thus one cylinder rolls without slipping, while the other slides frictionlessly without rolling. They both travel a short distance at the bottom and then start up another incline. (a) Show that they both reach the same height on the other incline, and that this height is equal to their original height. (b) Find the ratio of the time the rolling cylinder takes to reach the height on the second incline to the time the sliding cylinder takes to reach the height on the second incline. (c) Explain why the time for the rolling motion is greater than that for the sliding motion.
:::

:::exercise {fs-id2402928} type=problems-exercises 
PROBLEM:
What is the moment of inertia of an object that rolls without slipping down a 2.00-m-high incline starting from rest, and has a final velocity of 6.00 m/s? Express the moment of inertia as a multiple of ${MR}^{2}$, where $M$ is the mass of the object and $R$ is its radius.
:::

:::exercise {fs-id2406116} type=problems-exercises 
PROBLEM:
Suppose a 200-kg motorcycle has two wheels, like the one described in [ref:import-auto-id3370574](module:m42179), and is heading toward a hill at a speed of 30.0 m/s. (a) How high can it coast up the hill, if you neglect friction? (b) How much energy is lost to friction if the motorcycle only gains an altitude of 35.0 m before coming to rest?
:::

:::exercise {fs-id3399194} type=problems-exercises 
PROBLEM:
In softball, the pitcher throws with the arm fully extended (straight at the elbow). In a fast pitch the ball leaves the hand with a speed of 139 km/h. (a) Find the rotational kinetic energy of the pitcher’s arm and ball together given that the arm's moment of inertia is $\text{0.720 kg}⋅{\text{m}}^{2}$ and the ball leaves the hand at a distance of 0.600 m from the pivot at the shoulder. (b) What force did the muscles exert to cause the arm to rotate if their effective perpendicular lever arm is 4.00 cm and the ball is 0.156 kg?
SOLUTION:
(a) 1.49 kJ
(b) $2.52\times {\text{10}}^{4}\;\text{N}$
:::

:::exercise {fs-id3073542} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider the work done by a spinning skater pulling his arms in to increase his rate of spin. Construct a problem in which you calculate the work done with a “force multiplied by distance” calculation and compare it to the skater’s increase in kinetic energy.
:::

## Glossary
- {def} **work-energy theorem**: if one or more external forces act upon a rigid object, causing its kinetic energy to change from ${\text{KE}}_{\text{1}}$ to ${\text{KE}}_{\text{2}}$, then the work $W$ done by the net force is equal to the change in kinetic energy
- {def} **rotational kinetic energy**: the kinetic energy due to the rotation of an object. This is part of its total kinetic energy

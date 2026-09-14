# Dynamics of Rotational Motion: Rotational Inertia

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Understand the relationship between force, mass and acceleration.
- Study the turning effect of force.
- Study the analogy between force and torque, mass and moment of inertia, and linear acceleration and angular acceleration.
If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular velocity as seen in [ref:import-auto-id1545882]. In fact, your intuition is reliable in predicting many of the factors that are involved. For example, we know that a door opens slowly if we push too close to its hinges. Furthermore, we know that the more massive the door, the more slowly it opens. The first example implies that the farther the force is applied from the pivot, the greater the angular acceleration; another implication is that angular acceleration is inversely proportional to mass. These relationships should seem very similar to the familiar relationships among force, mass, and acceleration embodied in Newton’s second law of motion. There are, in fact, precise rotational analogs to both force and mass.

> FIGURE {fig:import-auto-id1545882} src=../../media/Figure_11_03_01a.jpg
> alt: The given figure shows a bike tire being pulled by a hand with a force F backward indicated by a red horizontal arrow that produces an angular acceleration alpha indicated by a curved yellow arrow in counter-clockwise direction.
> width: 200
> caption: Force is required to spin the bike wheel. The greater the force, the greater the angular acceleration produced. The more massive the wheel, the smaller the angular acceleration. If you push on a spoke closer to the axle, the angular acceleration will be smaller.

To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if we exert a force $F$ on a point mass $m$ that is at a distance $r$ from a pivot point, as shown in [ref:import-auto-id2062858]. Because the force is perpendicular to $r$, an acceleration $a=\frac{F}{m}$ is obtained in the direction of $F$. We can rearrange this equation such that $F=\text{ma}$ and then look for ways to relate this expression to expressions for rotational quantities. We note that $a=rα$, and we substitute this expression into $F=\text{ma}$, yielding

$$ F=\text{mr}\alpha \text{.} $$  {eq:eip-426}

Recall that {term:torque} is the turning effectiveness of a force. In this case, because $\text{F}$ is perpendicular to $r$, torque is simply $τ=Fr$. So, if we multiply both sides of the equation above by $r$, we get torque on the left-hand side. That is,

$$ \text{rF}={\text{mr}}^{2}\alpha $$  {eq:eip-304}

or

$$ τ={\text{mr}}^{2}α. $$  {eq:eip-357}

This last equation is the rotational analog of Newton’s second law ($F=\text{ma}$), where torque is analogous to force, angular acceleration is analogous to translational acceleration, and ${\text{mr}}^{2}$ is analogous to mass (or inertia). The quantity ${\text{mr}}^{2}$ is called the {term:rotational inertia} or {term:moment of inertia} of a point mass $m$ a distance $r$ from the center of rotation.

> FIGURE {fig:import-auto-id2062858} src=../../media/Figure_11_03_02a.jpg
> alt: The given figure shows an object of mass m, kept on a horizontal frictionless table, attached to a pivot point, which is in the center of the table, by a cord that supplies centripetal force. A force F is applied to the object perpendicular to the radius r, which is indicated by a red arrow tangential to the circle, causing the object to move in counterclockwise direcion.
> width: 200
> caption: An object is supported by a horizontal frictionless table and is attached to a pivot point by a cord that supplies centripetal force. A force $F$ is applied to the object perpendicular to the radius $r$, causing it to accelerate about the pivot point. The force is kept perpendicular to $r$.

:::note [] Making Connections: Rotational Motion Dynamics

Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is concerned with force and mass and their effects on motion. For rotational motion, we will find direct analogs to force and mass that behave just as we would expect from our earlier experiences.
:::

## Rotational Inertia and Moment of Inertia
Before we can consider the rotation of anything other than a point mass like the one in [ref:import-auto-id2062858], we must extend the idea of rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the {term:moment of inertia}  $I$ of an object to be the sum of  ${\text{mr}}^{2}$ for all the point masses of which it is composed. That is,  $I=\sum {\text{mr}}^{2}$. Here  $I$ is analogous to  $m$ in translational motion. Because of the distance  $r$, the moment of inertia for any object depends on the chosen axis. Actually, calculating  $I$ is beyond the scope of this text except for one simple case—that of a hoop, which has all its mass at the same distance from its axis. A hoop’s moment of inertia around its axis is therefore  ${\text{MR}}^{2}$, where  $M$ is its total mass and $R$ its radius. (We use $M$ and $R$ for an entire object to distinguish them from $m$ and $r$ for point masses.) In all other cases, we must consult [ref:fs-id1838666] (note that the table is piece of artwork that has shapes as well as formulae) for formulas for $I$ that have been derived from integration over the continuous body. Note that $I$ has units of mass multiplied by distance squared ($\text{kg}⋅{\text{m}}^{2}$), as we might expect from its definition.
The general relationship among torque, moment of inertia, and angular acceleration is

$$ \text{net}\tau =Iα $$  {eq:eip-724}

or

$$ \alpha =\frac{\text{net}\tau}{I}\text{,} $$  {eq:eip-480}

where net $τ$ is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques exerted by forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary numbers. The relationship in $τ=Iα,\alpha =\frac{\text{net}\tau}{I}$ is the rotational analog to Newton’s second law and is very generally applicable. This equation is actually valid for *any* torque, applied to *any* object, relative to *any* axis.
As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child pushes on a merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower it accelerates for the same torque. The basic relationship between moment of inertia and angular acceleration is that the larger the moment of inertia, the smaller is the angular acceleration. But there is an additional twist. The moment of inertia depends not only on the mass of an object, but also on its *distribution* of mass relative to the axis around which it rotates. For example, it will be much easier to accelerate a merry-go-round full of children if they stand close to its axis than if they all stand at the outer edge. The mass is the same in both cases, but the moment of inertia is much larger when the children are at the edge.

:::note [] Take-Home Experiment

Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1 to 12 like hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its center, like a wheel. (You could loosely nail the circle to a wall.) Hold the circle stationary and with the number 12 positioned at the top, attach a lump of blue putty (sticky material used for fixing posters to walls) at the number 3. How large does the lump need to be to just rotate the circle? Describe how you can change the moment of inertia of the circle. How does this change affect the amount of blue putty needed at the number 3 to just rotate the circle? Change the circle’s moment of inertia and then try rotating the circle by using different amounts of blue putty. Repeat this process several times.
:::

:::note [] Problem-Solving Strategy for Rotational Dynamics

1. *Examine the situation to determine that torque and mass are involved in the rotation*. Draw a careful sketch of the situation.
2. *Determine the system of interest*.
3. *Draw a free body diagram*. That is, draw and label all external forces acting on the system of interest.
4. *Apply $net τ=Iα,\alpha =\frac{\text{net}\tau}{I}$, the rotational equivalent of Newton’s second law, to solve the problem*. Care must be taken to use the correct moment of inertia and to consider the torque about the point of rotation.
5. *As always, check the solution to see if it is reasonable*.
:::

:::note [] Making Connections

In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the cause of angular acceleration, exactly as in Newton’s second law of motion for rotation.

> FIGURE {fig:fs-id1838666} src=../../media/Figure_11_03_06.jpg
> alt: Illustrations of ten different objects accompanied by their rotational inertias.
> caption: Some rotational inertias.

:::

:::example {ex:fs-id1468671} Calculating the Effect of Mass Distribution on a Merry-Go-Round
Consider the father pushing a playground merry-go-round in [ref:import-auto-id1468671]. He exerts a force of 250 N at the edge of the 50.0-kg merry-go-round, which has a 1.50 m radius. Calculate the angular acceleration produced (a) when no one is on the merry-go-round and (b) when an 18.0-kg child sits 1.25 m away from the center. Consider the merry-go-round itself to be a uniform disk with negligible retarding friction.

> FIGURE {fig:import-auto-id1468671} src=../../media/Figure_11_03_03a.jpg
> alt: The given figure shows a man pushing a merry-go-round by a force F, indicated by a red arrow which is perpendicular to the radius r, of the merry-go-round, such that it moves in counter-clockwise direction.
> width: 200
> caption: A father pushes a playground merry-go-round at its edge and perpendicular to its radius to achieve maximum torque.

**Strategy**
Angular acceleration is given directly by the expression $\alpha =\frac{\text{net}\tau}{I}$ :

$$ \alpha =\frac{τ}{I}. $$  {eq:eip-704}

To solve for $\alpha$, we must first calculate the torque $τ$ (which is the same in both cases) and moment of inertia $I$ (which is greater in the second case). To find the torque, we note that the applied force is perpendicular to the radius and friction is negligible, so that

$$ τ=rF\;\text{sin}\theta =(\text{1.50 m})(\text{250 N})=\text{375 N}⋅\text{m.} $$  {eq:eip-946}

**Solution for (a)**
The moment of inertia of a solid disk about this axis is given in [ref:fs-id1838666] to be

$$ \frac{1}{2}{\text{MR}}^{2}\text{,} $$  {eq:eip-659}

where $M=\text{50.0 kg}$ and $R=\text{1.50 m}$, so that

$$ I=(0\text{.}500)(\text{50.0 kg})(\text{1.50 m}{)}^{2}=\text{56.25 kg}⋅{\text{m}}^{2}\text{.} $$  {eq:eip-768}

Now, after we substitute the known values, we find the angular acceleration to be

$$ \alpha =\frac{τ}{I}=\frac{\text{375 N}\;\text{⋅}\;\text{m}}{\text{56.25 kg}⋅{\text{m}}^{2}}=\text{6.67}\frac{\text{rad}}{{\text{s}}^{2}}\text{.} $$  {eq:eip-861}

**Solution for (b)**
We expect the angular acceleration for the system to be less in this part, because the moment of inertia is greater when the child is on the merry-go-round. To find the total moment of inertia $I$, we first find the child’s moment of inertia ${I}_{\text{c}}$ by considering the child to be equivalent to a point mass at a distance of 1.25 m from the axis. Then,

$$ {I}_{\text{c}}={MR}^{2}=(\text{18.0 kg})(\text{1.25 m}{)}^{2}=\text{28.13 kg}⋅{\text{m}}^{2}\text{.} $$  {eq:eip-266}

The total moment of inertia is the sum of moments of inertia of the merry-go-round and the child (about the same axis). To justify this sum to yourself, examine the definition of $I$:

$$ I=\text{28.13 kg}⋅{\text{m}}^{2}+\text{56.25 kg}⋅{\text{m}}^{2}=\text{84.38 kg}⋅{\text{m}}^{2}. $$  {eq:eip-141}

Substituting known values into the equation for $\alpha$ gives

$$ \alpha =\frac{\tau}{I}=\frac{\text{375 N}⋅\text{m}}{\text{84.38 kg}⋅{\text{m}}^{2}}=\text{4.44}\frac{\text{rad}}{{\text{s}}^{2}}\text{.} $$  {eq:eip-50}

**Discussion**
The angular acceleration is less when the child is on the merry-go-round than when the merry-go-round is empty, as expected. The angular accelerations found are quite large, partly due to the fact that friction was considered to be negligible. If, for example, the father kept pushing perpendicularly for 2.00 s, he would give the merry-go-round an angular velocity of 13.3 rad/s when it is empty but only 8.89 rad/s when the child is on it. In terms of revolutions per second, these angular velocities are 2.12 rev/s and 1.41 rev/s, respectively. The father would end up running at about 50 km/h in the first case. Summer Olympics, here he comes! Confirmation of these numbers is left as an exercise for the reader.
:::

:::exercise {fs-id2404667} type=check-understanding Check Your Understanding

PROBLEM:
Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities that depend on only one factor. For example, mass is related solely to the numbers of atoms of various types in an object. Are torque and moment of inertia similarly simple?
SOLUTION:
No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia depends on both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these rotational quantities depend on more factors.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1721000} type=ap-test-prep 
PROBLEM:
A piece of wood can be carved by spinning it on a motorized lathe and holding a sharp chisel to the edge of the wood as it spins. How does the angular velocity of a piece of wood with a radius of 0.2 m spinning on a lathe change when a chisel is held to the wood's edge with a force of 50 N?
a. It increases by 10 N•m multiplied by the moment of inertia of the wood.
b. It decreases by 10 N•m divided by the moment of inertia of the wood-and-lathe system.
c. It decreases by 10 N•m multiplied by the moment of inertia of the wood.
d. It decreases by 10 m/s<sup>2</sup>.
SOLUTION:
(b)
:::

:::exercise {fs-id438270} type=ap-test-prep 
PROBLEM:
A Ferris wheel is loaded with people in the chairs at the following positions: 4 o'clock, 1 o'clock, 9 o'clock, and 6 o'clock. As the wheel begins to turn, what forces are acting on the system? How will each force affect the angular velocity and angular momentum?
:::

:::exercise {fs-id1500072} type=ap-test-prep 
PROBLEM:
A lever is placed on a fulcrum. A rock is placed on the left end of the lever and a downward (clockwise) force is applied to the right end of the lever. What measurements would be most effective to help you determine the angular momentum of the system? (Assume the lever itself has negligible mass.)
a. the angular velocity and mass of the rock
b. the angular velocity and mass of the rock, and the radius of the lever
c. the velocity of the force, the radius of the lever, and the mass of the rock
d. the mass of the rock, the length of the lever on both sides of the fulcrum, and the force applied on the right side of the lever
SOLUTION:
(d)
:::

:::exercise {fs-id2003821} type=ap-test-prep 
PROBLEM:
You can use the following setup to determine angular acceleration and angular momentum: A lever is placed on a fulcrum. A rock is placed on the left end of the lever and a known downward (clockwise) force is applied to the right end of the lever. What calculations would you perform? How would you account for gravity in your calculations?
:::

:::exercise {fs-id1669125} type=ap-test-prep 
PROBLEM:
Consider two sizes of disk, both of mass *M*. One size of disk has radius *R*; the other has radius 2*R*. System A consists of two of the larger disks rigidly connected to each other with a common axis of rotation. System B consists of one of the larger disks and a number of the smaller disks rigidly connected with a common axis of rotation. If the moment of inertia for system A equals the moment of inertia for system B, how many of the smaller disks are in system B?
a. 1
b. 2
c. 3
d. 4
SOLUTION:
(d)
You are given a thin rod of length 1.0 m and mass 2.0 kg, a small lead weight of 0.50 kg, and a not-so-small lead weight of 1.0 kg. The rod has three holes, one in each end and one through the middle, which may either hold a pivot point or one of the small lead weights.
:::

:::exercise {fs-id1338880} type=ap-test-prep 
PROBLEM:
You are given a thin rod of length 1.0 m and mass 2.0 kg, a small lead weight of 0.50 kg, and a not-so-small lead weight of 1.0 kg. The rod has three holes, one in each end and one through the middle, which may either hold a pivot point or one of the small lead weights. How do you arrange these objects so that the resulting system has the maximum possible moment of inertia? What is that moment of inertia? do you arrange these objects so that the resulting system has the maximum possible moment of inertia? What is that moment of inertia?
:::

## Section Summary {section:section-summary}
- The farther the force is applied from the pivot, the greater is the angular acceleration; angular acceleration is inversely proportional to mass.
- If we exert a force $F$ on a point mass $m$ that is at a distance $r$ from a pivot point and because the force is perpendicular to $r$, an acceleration $\text{a = F/m}$ is obtained in the direction of $F$. We can rearrange this equation such that             

$$ F = ma\text{,} $$  {eq:fs-id3125934}

                and then look for ways to relate this expression to expressions for rotational quantities. We note that
 $a = rα$, and we substitute this expression into $F=ma$, yielding

          

$$ F=mrα $$  {eq:fs-id2600434}

- Torque is the turning effectiveness of a force. In this case, because $F$ is perpendicular to $r$, torque is simply $τ=rF$. If we multiply both sides of the equation above by $r$, we get torque on the left-hand side. That is,
    

$$ \text{rF}={\text{mr}}^{2}\alpha $$  {eq:fs-id1037661}

    or
    

$$ τ={\text{mr}}^{2}\alpha \text{.} $$  {eq:import-auto-id2930863}

- The moment of inertia $I$ of an object is the sum of ${\text{MR}}^{2}$ for all the point masses  of which it is composed. That is,
    

$$ I=\sum {\text{mr}}^{2}\text{.} $$  {eq:import-auto-id3110206}

- The general relationship among torque, moment of inertia, and angular acceleration is
    

$$ τ=Iα $$  {eq:eip-139}

or 

$$ \begin{array}{l}\alpha =\frac{\text{net}\tau}{I}⋅ \\ \end{array} $$  {eq:eip-317}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2655227} type=conceptual-questions 
PROBLEM:
The moment of inertia of a long rod spun around an axis through one end perpendicular to its length is ${ML}^{2}\text{/3}$. Why is this moment of inertia greater than it would be if you spun a point mass $M$ at the location of the center of mass of the rod (at $L/2$ )? (That would be ${ML}^{2}\text{/4}$.)
:::

:::exercise {fs-id2450048} type=conceptual-questions 
PROBLEM:
Why is the moment of inertia of a hoop that has a mass $M$ and a radius $R$ greater than the moment of inertia of a disk that has the same mass and radius? Why is the moment of inertia of a spherical shell that has a mass $M$ and a radius $R$ greater than that of a solid sphere that has the same mass and radius?
:::

:::exercise {fs-id1222304} type=conceptual-questions 
PROBLEM:
Give an example in which a small force exerts a large torque. Give another example in which a large force exerts a small torque.
:::

:::exercise {fs-id2680047} type=conceptual-questions 
PROBLEM:
While reducing the mass of a racing bike, the greatest benefit is realized from reducing the mass of the tires and wheel rims. Why does this allow a racer to achieve greater accelerations than would an identical reduction in the mass of the bicycle’s frame?

> FIGURE {fig:fs-id971611} src=../../media/Figure_11_03_04a.jpg
> alt: The given figure shows a racing bicycle leaning on a door.
> width: 250
> caption: The image shows a side view of a racing bicycle. Can you see evidence in the design of the wheels on this racing bicycle that their moment of inertia has been purposely reduced? (credit: Jesús Rodriguez)

:::

:::exercise {fs-id1401566} type=conceptual-questions 
PROBLEM:
A ball slides up a frictionless ramp. It is then rolled without slipping and with the same initial velocity up another frictionless ramp (with the same slope angle). In which case does it reach a greater height, and why?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1198532} type=problems-exercises 
PROBLEM:
This problem considers additional aspects of example [ref:fs-id1468671](module:m42179)Calculating the Effect of Mass Distribution on a Merry-Go-Round. (a)  Consider part b of that example, when the child is sitting on the merry-go-round. How long does it take the father to give the merry-go-round an angular velocity of 1.50 rad/s? (b) How many revolutions must he go through to generate this velocity? (c) If he exerts a slowing force of 300 N at a radius of 1.35 m, how long would it take him to stop them?
SOLUTION:
(a) 0.338 s
(b) 0.0403 rev
(c) 0.313 s
:::

:::exercise {fs-id2659846} type=problems-exercises 
PROBLEM:
Calculate the moment of inertia of a skater given the following information. (a) The 60.0-kg skater is approximated as a cylinder that has a 0.110-m radius. (b) The skater with arms extended is approximately a cylinder that is 52.5 kg, has a 0.110-m radius, and has two 0.900-m-long arms which are 3.75 kg each and extend straight out from the cylinder like rods rotated about their ends.
:::

:::exercise {fs-id2669875} type=problems-exercises 
PROBLEM:
The triceps muscle in the back of the upper arm extends the forearm. This muscle in a professional boxer exerts a force of $\text{2.00}\times {\text{10}}^{3}\;\text{N}$ with an effective perpendicular lever arm of 3.00 cm, producing an angular acceleration of the forearm of $\text{120}\;{\text{rad/s}}^{2}$. What is the moment of inertia of the boxer’s forearm?
SOLUTION:
$\text{0.50 kg}⋅{\text{m}}^{2}$
:::

:::exercise {fs-id966811} type=problems-exercises 
PROBLEM:
A soccer player extends her lower leg in a kicking motion by exerting a force with the muscle above the knee in the front of her leg. She produces an angular acceleration of $30.00 rad/{\text{s}}^{2}$ and her lower leg has a moment of inertia of $\text{0.750 kg}⋅{\text{m}}^{2}$. What is the force exerted by the muscle if its effective perpendicular lever arm is 1.90 cm?
:::

:::exercise {fs-id2449638} type=problems-exercises 
PROBLEM:
Suppose you exert a force of 180 N tangential to a 0.280-m-radius 75.0-kg grindstone (a solid disk).
(a)What torque is exerted? (b) What is the angular acceleration assuming negligible opposing friction? (c) What is the angular acceleration if there is an opposing frictional force of 20.0 N exerted 1.50 cm from the axis?
SOLUTION:
(a) $50.4 N⋅\text{m}$
(b) $\text{17.1}\;{\text{rad/s}}^{2}$
(c) $17.0\;{\text{rad/s}}^{2}$
:::

:::exercise {fs-id3397406} type=problems-exercises 
PROBLEM:
Consider the 12.0 kg motorcycle wheel shown in [ref:import-auto-id3370574]. Assume it to be approximately an annular ring with an inner radius of 0.280 m and an outer radius of 0.330 m. The motorcycle is on its center stand, so that the wheel can spin freely. (a) If the drive chain exerts a force of 2200 N at a radius of 5.00 cm, what is the angular acceleration of the wheel? (b) What is the tangential acceleration of a point on the outer edge of the tire? (c) How long, starting from rest, does it take to reach an angular velocity of 80.0 rad/s?

> FIGURE {fig:import-auto-id3370574} src=../../media/Figure_11_03_05a.jpg
> alt: The given figure shows the rear wheel of a motorcycle. A force F is indicated by a red arrow pointing leftward at a distance r from its center. Two arrows representing radii R-one and R-two are also indicated. A curved yellow arrow indicates an acceleration alpha and a curved blue arrow indicates an angular velocity omega, both in counter-clockwise direction.
> width: 200
> caption: A motorcycle wheel has a moment of inertia approximately that of an annular ring.

:::

:::exercise {fs-id3064540} type=problems-exercises 
PROBLEM:
Zorch, an archenemy of Superman, decides to slow Earth’s rotation to once per 28.0 h by exerting an opposing force at and parallel to the equator. Superman is not immediately concerned, because he knows Zorch can only exert a force of $4.00\times {\text{10}}^{7}\;\text{N}$ (a little greater than a Saturn V rocket’s thrust). How long must Zorch push with this force to accomplish his goal? (This period gives Superman time to devote to other villains.) Explicitly show how you follow the steps found in [ref:fs-id2929358](module:m42179)Problem-Solving Strategy for Rotational Dynamics.
SOLUTION:
$3\text{.}\text{96}\times {\text{10}}^{\text{18}}\;\text{s}$
or $1.26\times {\text{10}}^{\text{11}}\;\text{y}$
:::

:::exercise {fs-id1128778} type=problems-exercises 
PROBLEM:
An automobile engine can produce 200 N ∙ m of torque. Calculate the angular acceleration produced if 95.0% of this torque is applied to the drive shaft, axle, and rear wheels of a car, given the following information. The car is suspended so that the wheels can turn freely. Each wheel acts like a 15.0 kg disk that has a 0.180 m radius. The walls of each tire act like a 2.00-kg annular ring that has inside radius of 0.180 m and outside radius of 0.320 m. The tread of each tire acts like a 10.0-kg hoop of radius 0.330 m. The 14.0-kg axle acts like a rod that has a 2.00-cm radius. The 30.0-kg drive shaft acts like a rod that has a 3.20-cm radius.
:::

:::exercise {fs-id2962557} type=problems-exercises 
PROBLEM:
Starting with the formula for the moment of inertia of a rod rotated around an axis through one end perpendicular to its length $(I={Mℓ}^{2}/3)$ , prove that the moment of inertia of a rod rotated about an axis through its center perpendicular to its length is $I={Mℓ}^{2}/12$. You will find the graphics in [ref:fs-id1838666] useful in visualizing these rotations.
SOLUTION:
$\begin{array}{l}{I}_{\text{end}}={I}_{\text{center}}+m{(\frac{l}{2})}^{2} \\ \text{Thus,}\;{I}_{\text{center}}={I}_{\text{end}}-\frac{1}{4}{\text{ml}}^{2}=\frac{1}{3}{\text{ml}}^{2}-\frac{1}{4}{\text{ml}}^{2}=\frac{1}{\text{12}}{\text{ml}}^{2}\end{array}$
:::

:::exercise {fs-id2514768} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
A gymnast doing a forward flip lands on the mat and exerts a 500-N ∙ m torque to slow their angular velocity to zero. Their initial angular velocity is 10.0 rad/s, and their moment of inertia is $0.050\;\text{kg}⋅{\text{m}}^{2}$. (a) What time is required for the gymnast to exactly stop their spin? (b) What is unreasonable about the result? (c) Which premises are unreasonable or inconsistent?
SOLUTION:
(a) 2.0 ms
(b) The time interval is too short.
(c) The moment of inertia is much too small, by one to two orders of magnitude. A torque of $\text{500 N}⋅\text{m}$ is reasonable.
:::

:::exercise {fs-id1930191} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
An advertisement claims that an 800-kg car is aided by its 20.0-kg flywheel, which can accelerate the car from rest to a speed of 30.0 m/s. The flywheel is a disk with a 0.150-m radius. (a) Calculate the angular velocity the flywheel must have if 95.0% of its rotational energy is used to get the car up to speed. (b) What is unreasonable about the result? (c) Which premise is unreasonable or which premises are inconsistent?
SOLUTION:
(a) 17,500 rpm
(b) This angular velocity is very high for a disk of this size and mass. The radial acceleration at the edge of the disk is > 50,000 gs.
(c) Flywheel mass and radius should both be much greater, allowing for a lower spin rate (angular velocity).
:::

## Glossary
- {def} **torque**: the turning effectiveness of a force
- {def} **rotational inertia**: resistance to change of rotation. The more rotational inertia an object has, the harder it is to rotate
- {def} **moment of inertia**: mass times the square of perpendicular distance from the rotation axis; for a point mass, it is $I={\text{mr}}^{2}$  and, because any object can be built up from a collection of point masses, this relationship is the basis for all other moments of inertia

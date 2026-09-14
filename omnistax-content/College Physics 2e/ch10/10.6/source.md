# Collisions of Extended Bodies in Two Dimensions

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Observe collisions of extended bodies in two dimensions.
- Examine collision at the point of percussion.
Bowling pins are sent flying and spinning when hit by a bowling ball—angular momentum as well as linear momentum and energy have been imparted to the pins. (See [ref:import-auto-id1930706]). Many collisions involve angular momentum. Cars, for example, may spin and collide on ice or a wet surface. Baseball pitchers throw curves by putting spin on the baseball. A tennis player can put a lot of top spin on the tennis ball which causes it to dive down onto the court once it crosses the net. We now take a brief look at what happens when objects that can rotate collide.
Consider the relatively simple collision shown in [ref:import-auto-id2932439], in which a disk strikes and adheres to an initially motionless stick nailed at one end to a frictionless surface. After the collision, the two rotate about the nail. There is an unbalanced external force on the system at the nail. This force exerts no torque because its lever arm $r$ is zero. Angular momentum is therefore conserved in the collision. Kinetic energy is not conserved, because the collision is inelastic. It is possible that momentum is not conserved either because the force at the nail may have a component in the direction of the disk’s initial velocity. Let us examine a case of rotation in a collision in [ref:fs-id3007371].

> FIGURE {fig:import-auto-id1930706} src=../../media/Figure_11_06_01a.jpg
> alt: A bowling ball, just as it is striking the pins.
> width: 250
> caption: The bowling ball causes the pins to fly, some of them spinning violently. (credit: Tinou Bao, Flickr)

> FIGURE {fig:import-auto-id2932439} src=../../media/Figure_11_06_02a.jpg
> alt: Figure a shows a disc m sliding toward a motionless stick M of length r pivoted about a nail, on a frictionless surface. In figure b, a disk hits the stick at one end and adheres to it, and the stick rotates, pivoting around the nail in a direction shown by the arrow in the clockwise direction and angular velocity omega.
> width: 350
> caption: (a) A disk slides toward a motionless stick on a frictionless surface.
        (b) The disk hits the stick at one end and adheres to it, and they rotate together, pivoting around the nail. Angular momentum is conserved for this inelastic collision because the surface is frictionless and the unbalanced external force at the nail exerts no torque.

:::example {ex:fs-id3007371} Rotation in a Collision
Suppose the disk in [ref:import-auto-id2932439] has a mass of 50.0 g and an initial velocity of 30.0 m/s when it strikes the stick that is 1.20 m long and 2.00 kg.
(a) What is the angular velocity of the two after the collision?
(b) What is the kinetic energy before and after the collision?
(c) What is the total linear momentum before and after the collision?
**Strategy for (a)**
We can answer the first question using conservation of angular momentum as noted. Because angular momentum is $Iω$, we can solve for angular velocity.
**Solution for (a)**
Conservation of angular momentum states

$$ L=L', $$  {eq:eip-546}

where primed quantities stand for conditions after the collision and both momenta are calculated relative to the pivot point. The initial angular momentum of the system of stick-disk is that of the disk just before it strikes the stick. That is,

$$ L=Iω, $$  {eq:eip-376}

where $I$ is the moment of inertia of the disk and $\omega$ is its angular velocity around the pivot point. Now, $I={\text{mr}}^{\text{2}}$ (taking the disk to be approximately a point mass) and $\omega =v/r$, so that

$$ L={\text{mr}}^{2}\frac{v}{r}=\text{mvr}. $$  {eq:eip-881}

After the collision,

$$ L'=I′\omega ′. $$  {eq:eip-513}

It is $\omega '$ that we wish to find. Conservation of angular momentum gives

$$ I'\omega '=\text{mvr}. $$  {eq:eip-525}

Rearranging the equation yields

$$ \omega '=\frac{\text{mvr}}{I′}, $$  {eq:eip-17}

where $I'$ is the moment of inertia of the stick and disk stuck together, which is the sum of their individual moments of inertia about the nail. [ref:fs-id1838666](module:m42179) gives the formula for a rod rotating around one end to be $I={\text{Mr}}^{2}/3$. Thus,

$$ I′={\text{mr}}^{2}+\frac{{\text{Mr}}^{2}}{3}=(m+\frac{M}{3}){r}^{2}. $$  {eq:eip-920}

Entering known values in this equation yields,

$$ I\text{′}=(0\text{.}\text{0500}\;\text{kg}+0\text{.}\text{667 kg}){(1\text{.}\text{20}\;\text{m})}^{2}=1\text{.}\text{032}\;\text{kg}⋅{\text{m}}^{2}. $$  {eq:eip-177}

The value of $I'$ is now entered into the expression for $\omega '$, which yields

$$ \begin{array}{lll}\omega ' & = & \frac{\text{mvr}}{I'}=\frac{(0\text{.}\text{0500 kg})(\text{30}\text{.}0 m/s)(1\text{.}\text{20 m})}{1\text{.}\text{032 kg}⋅{\text{m}}^{2}} \\ & = & 1\text{.}\text{744 rad/s}\approx 1\text{.}\text{74 rad/s}.\end{array} $$  {eq:eip-74}

**Strategy for (b)**
The kinetic energy before the collision is the incoming disk’s translational kinetic energy, and after the collision, it is the rotational kinetic energy of the two stuck together.
**Solution for (b)**
First, we calculate the translational kinetic energy by entering given values for the mass and speed of the incoming disk.

$$ \text{KE}=\frac{1}{2}{\text{mv}}^{2}=(0\text{.}\text{500})(0\text{.}\text{0500}\;\text{kg}){(\text{30}\text{.}0\;\text{m/s})}^{2}=\text{22.5 J} $$  {eq:eip-27}

After the collision, the rotational kinetic energy can be found because we now know the final angular velocity and the final moment of inertia. Thus, entering the values into the rotational kinetic energy equation gives

$$ \begin{array}{lll}\text{KE′} & = & \frac{1}{2}I'{\omega '}^{2}=(0.5)(1.032\;\text{kg}⋅{\text{m}}^{2}){(1\text{.}\text{744}\frac{\text{rad}}{\text{s}})}^{2} \\ & = & \text{1.57 J.}\end{array} $$  {eq:eip-100}

**Strategy for (c)**
The linear momentum before the collision is that of the disk. After the collision, it is the sum of the disk’s momentum and that of the center of mass of the stick.
**Solution of (c)**
Before the collision, then, linear momentum is

$$ p=\text{mv}=(0\text{.}\text{0500}\;\text{kg})(\text{30}\text{.}0\;\text{m/s})=1\text{.}\text{50}\;\text{kg}⋅\text{m/s}. $$  {eq:eip-283}

After the collision, the disk and the stick’s center of mass move in the same direction. The total linear momentum is that of the disk moving at a new velocity $v'=rω'$ plus that of the stick’s center of mass,
which moves at half this speed because ${v}_{\text{CM}}=(\frac{r}{2})\omega '=\frac{v'}{2}$. Thus,

$$ p'=\text{mv}'+{\text{Mv}}_{\text{CM}}=\text{mv}'+\frac{\text{Mv}'}{2}. $$  {eq:eip-953}

Gathering similar terms in the equation yields,

$$ p'=(m+\frac{M}{2})v' $$  {eq:eip-699}

so that

$$ p'=(m+\frac{M}{2})rω'. $$  {eq:eip-915}

Substituting known values into the equation,

$$ p'=(1\text{.}\text{050 kg})(1\text{.}\text{20}\;\text{m})(1\text{.}\text{744 rad/s})=\text{2.20 kg}⋅\text{m/s}. $$  {eq:eip-1000}

**Discussion**
First note that the kinetic energy is less after the collision, as predicted, because the collision is inelastic. More surprising is that the momentum after the collision is actually greater than before the collision. This result can be understood if you consider how the nail affects the stick and vice versa. Apparently, the stick pushes backward on the nail when first struck by the disk. The nail’s reaction (consistent with Newton’s third law) is to push forward on the stick, imparting momentum to it in the same direction in which the disk was initially moving, thereby increasing the momentum of the system.
:::
The above example has other implications. For example, what would happen if the disk hit very close to the nail? Obviously, a force would be exerted on the nail in the forward direction. So, when the stick is struck at the end farthest from the nail, a backward force is exerted on the nail, and when it is hit at the end nearest the nail, a forward force is exerted on the nail. Thus, striking it at a certain point in between produces no force on the nail. This intermediate point is known as the *percussion point*.
An analogous situation occurs in tennis as seen in [ref:import-auto-id3078115]. If you hit a ball with the end of your racquet, the handle is pulled away from your hand. If you hit a ball much farther down, for example, on the shaft of the racquet, the handle is pushed into your palm. And if you hit the ball at the racquet’s percussion point (what some people call the “sweet spot”), then little or *no* force is exerted on your hand, and there is less vibration, reducing chances of a tennis elbow. The same effect occurs for a baseball bat.

> FIGURE {fig:import-auto-id3078115} src=../../media/Figure_11_06_03.jpg
> alt: In figure a, a disk hitting a stick is compared to a tennis ball being hit by a racquet. When the ball strikes the racquet near the end with a force denoted by f ball as shown by the direction of the arrow, a backward force, f hand is exerted on the hand, In figure b, when the racquet is struck much farther down by a force F ball, a forward force, f hand is exerted on the hand as shown by the arrows. In figure (c), when the racquet is struck by the ball with a force f ball at the percussion point, no force is delivered to the hand. This implies that f hand is equal to zero.
> width: 330
> caption: A disk hitting a stick is compared to a tennis ball being hit by a racquet. (a) When the ball strikes the racquet near the end, a backward force is exerted on the hand. (b) When the racquet is struck much farther down, a forward force is exerted on the hand. (c) When the racquet is struck at the percussion point, no force is delivered to the hand.

:::exercise {fs-id2672292} type=check-understanding Check Your Understanding

PROBLEM:
Is rotational kinetic energy a vector? Justify your answer.
SOLUTION:
No, energy is always scalar whether motion is involved or not. No form of energy has a direction in space and you can see that rotational kinetic energy does not depend on the direction of motion just as linear kinetic energy is independent of the direction of motion.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1664450} type=ap-test-prep 
PROBLEM:
A box with a mass of 2.0 kg rests on one end of a seesaw. The seesaw is 6.0 m long, and we can assume it has negligible mass. Approximately what angular momentum will the box have if someone with a mass of 65 kg sits on the other end of the seesaw quickly, with a velocity of 1.2 m/s?
a. 702 kg•m<sup>2</sup>/s
b. 39 kg•m<sup>2</sup>/s
c. 18 kg•m<sup>2</sup>/s
d. 1.2 kg•m<sup>2</sup>/s
SOLUTION:
(b)
:::

:::exercise {fs-id1623831} type=ap-test-prep 
PROBLEM:
A spinner in a board game can be thought of as a thin rod that spins about an axis at its center. The spinner in a certain game is 12 cm long and has a mass of 10 g. How will its angular velocity change when it is flicked at one end with a force equivalent to 15 g travelling at 5.0 m/s if all the energy of the collision is transferred to the spinner? (You can use the table in [ref:fs-id1838666](module:m42179)Figure 10.12 to estimate the rotational inertia of the spinner.)
:::

:::exercise {fs-id2159515} type=ap-test-prep 
PROBLEM:
A cyclist pedals to exert a torque on the rear wheel of the bicycle. When the cyclist changes to a higher gear, the torque increases. Which of the following would be the most effective strategy to help you determine the change in angular momentum of the bicycle wheel?
a. multiplying the ratio between the two torques by the mass of the bicycle and rider
b. adding the two torques together, and multiplying by the time for which both torques are applied
c. multiplying the difference in the two torques by the time for which the new torque is applied
d. multiplying both torques by the mass of the bicycle and rider
SOLUTION:
(c)
:::

:::exercise {fs-id1526286} type=ap-test-prep 
PROBLEM:
An electric screwdriver has two speeds, each of which exerts a different torque on a screw. Describe what calculations you could use to help you compare the angular momentum of a screw at each speed. What measurements would you need to make in order to calculate this?
:::

:::exercise {fs-id1519591} type=ap-test-prep 
PROBLEM:
Why is it important to consider the shape of an object when determining the object's angular momentum?
a. The shape determines the location of the center of mass. The location of the center of mass in turn determines the angular velocity of the object.
b. The shape helps you determine the location of the object's outer edge, where rotational velocity will be greatest.
c. The shape helps you determine the location of the center of rotation.
d. The shape determines the location of the center of mass. The location of the center of mass contributes to the object's rotational inertia, which contributes to its angular momentum.
SOLUTION:
(d)
:::

:::exercise {fs-id1581467} type=ap-test-prep 
PROBLEM:
How could you collect and analyze data to test the difference between the torques provided by two speeds on a tabletop fan?
:::

:::exercise {fs-id1686879} type=ap-test-prep 
PROBLEM:
Describe a rotational system you could use to demonstrate the effect on the system's angular momentum of applying different amounts of external torque.
SOLUTION:
A door on hinges is a rotational system. When you push or pull on the door handle, the angular momentum of the system changes. If a weight is hung on the door handle, then pushing on the door with the same force will cause a different increase in angular momentum. If you push or pull near the hinges with the same force, the resulting angular momentum of the system will also be different.
:::

:::exercise {fs-id1501033} type=ap-test-prep 
PROBLEM:
How could you use simple equipment such as balls and string to study the changes in angular momentum of a system when it interacts with another system?
:::

## Section Summary {section:section-summary}
- Angular momentum $L$ is analogous to linear momentum and is given by $L=Iω$.
- Angular momentum is changed by torque, following the relationship
$\text{net}\;τ=\frac{\text{Δ}L}{\text{Δ}t}.$
- Angular momentum is conserved if the net torque is zero $L=\text{constant}\;(\text{net}\;τ=\text{0})$ or

$L=L'\;(\text{net}\;τ=0)$

    . This equation is known as the law of conservation of angular momentum, which may be conserved in collisions.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1575956} type=conceptual-questions 
PROBLEM:
Describe two different collisions—one in which angular momentum is conserved, and the other in which it is not. Which condition determines whether or not angular momentum is conserved in a collision?
:::

:::exercise {fs-id3225926} type=conceptual-questions 
PROBLEM:
Suppose an ice hockey puck strikes a hockey stick that lies flat on the ice and is free to move in any direction. Which quantities are likely to be conserved: angular momentum, linear momentum, or kinetic energy (assuming the puck and stick are very resilient)?
:::

:::exercise {fs-id2578076} type=conceptual-questions 
PROBLEM:
While driving his motorcycle at highway speed, a physics student notices that pulling back lightly on the right handlebar tips the cycle to the left and produces a left turn. Explain why this happens.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id2578283} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id3007371] in which the disk strikes and adheres to the stick 0.100 m from the nail.
SOLUTION:
(a) $0.156 rad/s$
(b) $1\text{.}\text{17}\times {\text{10}}^{-2}\;\text{J}$
(c) $0\text{.}\text{188 kg}⋅\text{m/s}$
:::

:::exercise {fs-id2578396} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id3007371] in which the disk originally spins clockwise at 1000 rpm and has a radius of 1.50 cm.
:::

:::exercise {fs-id2026029} type=problems-exercises 
PROBLEM:
Twin skaters approach one another as shown in [ref:import-auto-id2558735] and lock hands. (a) Calculate their final angular velocity, given each had an initial speed of 2.50 m/s relative to the ice. Each has a mass of 70.0 kg, and each has a center of mass located 0.800 m from their locked hands. You may approximate their moments of inertia to be that of point masses at this radius. (b) Compare the initial kinetic energy and final kinetic energy.

> FIGURE {fig:import-auto-id2558735} src=../../media/Figure_11_06_04a.jpg
> alt: Figure a shows two skaters from the top view approaching each other from opposite directions with velocity v. In figure b two skaters then lock their right hands and start to spin in the clockwise direction with angular velocity omega.
> width: 250
> caption: Twin skaters approach each other with identical speeds. Then, the skaters lock hands and spin.

SOLUTION:
(a) 3.13 rad/s
(b) Initial KE = 438 J, final KE = 438 J
:::

:::exercise {fs-id1048149} type= 
PROBLEM:
Suppose a 0.250-kg ball is thrown at 15.0 m/s to a motionless person standing on ice who catches it with an outstretched arm as shown in [ref:import-auto-id2514290].
(a) Calculate the final linear velocity of the person, given his mass is 70.0 kg.
(b) What is his angular velocity if each arm is 5.00 kg? You may treat the ball as a point mass and treat the person's arms as uniform rods (each has a length of 0.900 m) and the rest of his body as a uniform cylinder of radius 0.180 m. Neglect the effect of the ball on his center of mass so that his center of mass remains in his geometrical center.
(c) Compare the initial and final total kinetic energies.

> FIGURE {fig:import-auto-id2514290} src=../../media/Figure_11_06_05a.jpg
> alt: Figure a shows a skater through an overhead view with both his hands outstretched. A ball is seen approaching toward him in air with velocity v. Figure b shows that skater catching two balls in his left hand, and then, recoiling toward the left, in clockwise direction, with angular velocity omega and finally, the balls have velocity v prime.
> width: 270
> caption: The figure shows the overhead view of a person standing motionless on ice about to catch a ball. Both arms are outstretched. After catching the ball, the skater recoils and rotates.

:::

:::exercise {fs-id1848842} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id3007371] in which the stick is free to have translational motion as well as rotational motion.
SOLUTION:
(a) 1.70 rad/s
(b) Initial KE = 22.5 J, final KE = 2.04 J
(c) $1\text{.}\text{50 kg}⋅\text{m/s}$
:::

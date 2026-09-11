# Kinetic Energy and the Work-Energy Theorem

## Learning Objectives
By the end of this section, you will be able to:
- Explain work as a transfer of energy and net work as the work done by the net force.
- Explain and apply the work-energy theorem.

## Work Transfers Energy
What happens to the work done on a system? Energy is transferred into the system, but in what form? Does it remain in the system or move on? The answers depend on the situation. For example, if the lawn mower in [m42146](module:m42146)(a) is pushed just hard enough to keep it going at a constant speed, then energy put into the mower by the person is removed continuously by friction, and eventually leaves the system in the form of heat transfer. In contrast, work done on the briefcase by the person carrying it up stairs in [m42146](module:m42146)(d) is stored in the briefcase-Earth system and can be recovered at any time, as shown in [m42146](module:m42146)(e). In fact, the building of the pyramids in ancient Egypt is an example of storing energy in a system by doing work on the system. Some of the energy imparted to the stone blocks in lifting them during construction of the pyramids remains in the stone-Earth system and has the potential to do work.
In this section we begin the study of various types of work and forms of energy. We will find that some types of work leave the energy of a system constant, for example, whereas others change the system in some way, such as making it move. We will also develop definitions of important forms of energy, such as the energy of motion.

## Net Work and the Work-Energy Theorem
We know from the study of Newton’s laws in [Dynamics: Force and Newton's Laws of Motion](module:m42069) that net force causes acceleration. We will see in this section that work done by the net force gives a system energy of motion, and in the process we will also find an expression for the energy of motion.
Let us start by considering the total, or net, work done on a system. Net work is defined to be the sum of work on an object. The net work can be written in terms of the net force on an object. ${F}_{\text{net}}$. In equation form, this is ${W}_{\text{net}}={F}_{\text{net}}d\;\text{cos}\;\theta$ where $\theta$ is the angle between the force vector and the displacement vector.
[ref:import-auto-id1046634](a) shows a graph of force versus displacement for the component of the force in the direction of the displacement—that is, an $F\;\text{cos}\;\theta$ vs. $d$ graph. In this case, $F\;\text{cos}\;\theta$ is constant. You can see that the area under the graph is $Fd\;\text{cos}\;\theta$, or the work done. [ref:import-auto-id1046634](b) shows a more general process where the force varies. The area under the curve is divided into strips, each having an average force $(F\;\text{cos}\;\theta {)}_{i(\text{ave})}$. The work done is $(F\;\text{cos}\;\theta {)}_{i(\text{ave})}{d}_{i}$ for each strip, and the total work done is the sum of the ${W}_{i}$. Thus the total work done is the total area under the curve, a useful property to which we shall refer later.

> FIGURE {fig:import-auto-id1046634} src=../../media/Figure_08_02_02a.jpg
> alt: Two drawings labele a and b. (a) A graph of force component F cosine theta versus distance d. d is along the x axis and F cosine theta is along the y axis. A line of length d is drawn parallel to the horizontal axis for some value of F cosine theta. Area under this line in the graph is shaded and is equal to F cosine theta multiplied by d. F d cosine theta is equal to work W. (b) A graph of force component F cosine theta versus distance d. d is along the x axis and F cosine theta is along the y axis. There is an inclined line and the area under it is divided into many thin vertical strips of width d sub i. The area of one vertical stripe is equal to average value of F cosine theta times d sub i which equals to work W sub i.
> width: 250
> caption: (a) A graph of $F\;\text{cos}\;\theta$ vs. $d$, when $F\;\text{cos}\;\theta$ is constant. The area under the curve represents the work done by the force. (b) A graph of $F\;\text{cos}\;\theta$ vs. $d$ in which the force varies. The work done for each interval is the area of each strip; thus, the total area under the curve equals the total work done.

Net work will be simpler to examine if we consider a one-dimensional situation where a force is used to accelerate an object in a direction parallel to its initial velocity. Such a situation occurs for the package on the roller belt conveyor system shown in [ref:import-auto-id1803210].

> FIGURE {fig:import-auto-id1803210} src=../../media/Figure_08_02_03a.jpg
> alt: A package shown on a roller belt pushed with a force F towards the right shown by a vector F sub app equal to one hundred and twenty newtons. A vector w is in the downward direction starting from the bottom of the package and the reaction force N on the package is shown by the vector N pointing upwards at the bottom of the package. A frictional force vector of five point zero zero newtons acts on the package leftwards. The displacement d is shown by the vector pointing to the right with a value of zero point eight zero zero meters.
> width: 400
> caption: A package on a roller belt is pushed horizontally through a distance $d$.

The force of gravity and the normal force acting on the package are perpendicular to the displacement and do no work. Moreover, they are also equal in magnitude and opposite in direction so they cancel in calculating the net force. The net force arises solely from the horizontal applied force ${F}_{\text{app}}$ and the horizontal friction force $f$. Thus, as expected, the net force is parallel to the displacement, so that $\theta =0º$ and $\;\text{cos}\;\theta =1$, and the net work is given by

$$ {W}_{\text{net}}={F}_{\text{net}}d. $$  {eq:fs-id1799354}

The effect of the net force ${F}_{\text{net}}$ is to accelerate the package from ${v}_{0}$ to $v$. The kinetic energy of the package increases, indicating that the net work done on the system is positive. (See [ref:fs-id1703845].) By using Newton’s second law, and doing some algebra, we can reach an interesting conclusion. Substituting ${F}_{\text{net}}=\text{ma}$ from Newton’s second law gives

$$ {W}_{\text{net}}=\text{mad.} $$  {eq:fs-id2448434}

To get a relationship between net work and the speed given to a system by the net force acting on it, we take $d=x-{x}_{0}$ and use the equation studied in [Motion Equations for Constant Acceleration in One Dimension](module:m42099) for the change in speed over a distance $d$ if the acceleration has the constant value $a$; namely, ${v}^{2}={{v}_{0}}^{2}+2\text{ad}$ (note that $a$ appears in the expression for the net work). Solving for acceleration gives $a=\frac{{v}^{2}-{{v}_{0}}^{2}}{2d}$. When $a$ is substituted into the preceding expression for ${W}_{\text{net}}$, we obtain

$$ {W}_{\text{net}}=m(\frac{{v}^{2}-{{v}_{0}}^{2}}{2d})d. $$  {eq:fs-id1648912}

The $d$ cancels, and we rearrange this to obtain

$$ W \text{net}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{\text{mv}}_{0}^{2}\text{.} $$  {eq:fs-id1549793}

This expression is called the {term:work-energy theorem}, and it actually applies *in general* (even for forces that vary in direction and magnitude), although we have derived it for the special case of a constant force parallel to the displacement. The theorem implies that the net work on a system equals the change in the quantity $\frac{1}{2}{\text{mv}}^{2}$. This quantity is our first example of a form of energy.

:::note [] The Work-Energy Theorem

The net work on a system equals the change in the quantity $\frac{1}{2}{\text{mv}}^{2}$.

$$ {W}_{\text{net}}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{\text{mv}}_{0}^{2} $$  {eq:fs-id2771768}

:::
The quantity $\frac{1}{2}{\text{mv}}^{2}$ in the work-energy theorem is defined to be the translational {term:kinetic energy} (KE) of a mass $m$ moving at a speed $v$. (*Translational* kinetic energy is distinct from *rotational* kinetic energy, which is considered later.) In equation form, the translational kinetic energy,

$$ \text{KE}=\frac{1}{2}{\text{mv}}^{2}, $$  {eq:fs-id2016892}

is the energy associated with translational motion. Kinetic energy is a form of energy associated with the motion of a particle, single body, or system of objects moving together.
We are aware that it takes energy to get an object, like a car or the package in [ref:import-auto-id1803210], up to speed, but it may be a bit surprising that kinetic energy is proportional to speed squared. This proportionality means, for example, that a car traveling at 100 km/h has four times the kinetic energy it has at 50 km/h, helping to explain why high-speed collisions are so devastating. We will now consider a series of examples to illustrate various aspects of work and energy.

:::example {ex:fs-id1703845} Calculating the Kinetic Energy of a Package
Suppose a 30.0-kg package on the roller belt conveyor system in [ref:import-auto-id1803210] is moving at 0.500 m/s. What is its kinetic energy?
**Strategy**
Because the mass $m$ and speed $v$ are given, the kinetic energy can be calculated from its definition as given in the equation $\text{KE}=\frac{1}{2}{\text{mv}}^{2}$.
**Solution**
The kinetic energy is given by

$$ \text{KE}=\frac{1}{2}{\text{mv}}^{2}\text{.} $$  {eq:fs-id1904785}

Entering known values gives

$$ \text{KE}=0\text{.}5(\text{30.0 kg})(\text{0.500 m/s}{)}^{2}, $$  {eq:fs-id1426633}

which yields

$$ \text{KE}=\text{3.75 kg}⋅{m}^{2}{\text{/s}}^{2}=\text{3.75 J.} $$  {eq:eip-261}

**Discussion**
Note that the unit of kinetic energy is the joule, the same as the unit of work, as mentioned when work was first defined. It is also interesting that, although this is a fairly massive package, its kinetic energy is not large at this relatively low speed. This fact is consistent with the observation that people can move packages like this without exhausting themselves.
:::

:::example {ex:fs-id1751928} Determining the Work to Accelerate a Package
Suppose that you push on the 30.0-kg package in [ref:import-auto-id1803210] with a constant force of 120 N through a distance of 0.800 m, and that the opposing friction force averages 5.00 N.
(a) Calculate the net work done on the package. (b) Solve the same problem as in part (a), this time by finding the work done by each force that contributes to the net force.
**Strategy and Concept for (a)**
This is a motion in one dimension problem, because the downward force (from the weight of the package) and the normal force have equal magnitude and opposite direction, so that they cancel in calculating the net force, while the applied force, friction, and the displacement are all horizontal. (See [ref:import-auto-id1803210].) As expected, the net work is the net force times distance.
**Solution for (a)**
The net force is the push force minus friction, or ${F}_{\text{net}}\text{= 120 N – 5}\text{.}\text{00 N = 115 N}$. Thus the net work is

$$ \begin{array}{l}{W}_{\text{net}} & = & {F}_{\text{net}}d=(\text{115 N})(\text{0.800 m}) \\ & = & \text{92.0 N}⋅m=\text{92.0 J.}\end{array} $$  {eq:fs-id1702963}

**Discussion for (a)**
This value is the net work done on the package. The person actually does more work than this, because friction opposes the motion. Friction does negative work and removes some of the energy the person expends and converts it to thermal energy. The net work equals the sum of the work done by each individual force.
**Strategy and Concept for (b)**
The forces acting on the package are gravity, the normal force, the force of friction, and the applied force. The normal force and force of gravity are each perpendicular to the displacement, and therefore do no work.
**Solution for (b)**
The applied force does work.

$$ \begin{array}{l}{W}_{\text{app}} & = & {F}_{\text{app}}d\;\text{cos}(0º)={F}_{\text{app}}d \\ & = & (\text{120 N})(\text{0.800 m}) \\ & = & \text{96.0 J}\end{array} $$  {eq:fs-id2516843}

The friction force and displacement are in opposite directions, so that $\theta =\text{180º}$, and the work done by friction is

$$ \begin{array}{l}{W}_{\text{fr}} & = & {F}_{\text{fr}}d\;\text{cos}(\text{180º})=-{F}_{\text{fr}}d \\ & = & -(\text{5.00 N})(\text{0.800 m}) \\ & = & -\text{4.00 J.}\end{array} $$  {eq:fs-id2817408}

So the amounts of work done by gravity, by the normal force, by the applied force, and by friction are, respectively,

$$ \begin{array}{l}{W}_{\text{gr}} & = & 0, \\ {W}_{N} & = & 0, \\ {W}_{\text{app}} & = & \text{96.0 J,} \\ {W}_{\text{fr}} & = & -\text{4.00 J.}\end{array} $$  {eq:fs-id1515421}

The total work done as the sum of the work done by each force is then seen to be

$$ {W}_{\text{total}}={W}_{\text{gr}}+{W}_{N}+{W}_{\text{app}}+{W}_{\text{fr}}=\text{92}\text{.0 J}. $$  {eq:fs-id1404959}

**Discussion for (b)**
The calculated total work ${W}_{\text{total}}$ as the sum of the work by each force agrees, as expected, with the work ${W}_{\text{net}}$ done by the net force. The work done by a collection of forces acting on an object can be calculated by either approach.
:::

:::example {ex:fs-id1534836} Determining Speed from Work and Energy
Find the speed of the package in [ref:import-auto-id1803210] at the end of the push, using work and energy concepts.
**Strategy**
Here the work-energy theorem can be used, because we have just calculated the net work, ${W}_{\text{net}}$, and the initial kinetic energy, $\frac{1}{2}{m{v}_{0}}^{2}$. These calculations allow us to find the final kinetic energy, $\frac{1}{2}{\text{mv}}^{2}$, and thus the final speed $v$.
**Solution**
The work-energy theorem in equation form is

$$ {W}_{\text{net}}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{m{v}_{0}}^{2}\text{.} $$  {eq:fs-id2854741}

Solving for $\frac{1}{2}{\text{mv}}^{2}$ gives

$$ \frac{1}{2}{\text{mv}}^{\text{2}}={W}_{\text{net}}+\frac{1}{2}{m{v}_{0}}^{2}\text{.} $$  {eq:fs-id2164953}

Thus,

$$ \frac{1}{2}{\text{mv}}^{2}=\text{92}\text{.}0 J+3\text{.}\text{75 J}=\text{95.}\text{75 J.} $$  {eq:fs-id1616561}

Solving for the final speed as requested and entering known values gives

$$ \begin{array}{l}v & = & \sqrt{\frac{2\text{(95.75 J)}}{m}}=\sqrt{\frac{\text{191.5 kg}⋅{m}^{2}{\text{/s}}^{2}}{\text{30.0 kg}}} \\ & = & \text{2.53 m/s.}\end{array} $$  {eq:fs-id1474808}

**Discussion**
Using work and energy, we not only arrive at an answer, we see that the final kinetic energy is the sum of the initial kinetic energy and the net work done on the package. This means that the work indeed adds to the energy of the package.
:::

:::example {ex:fs-id1355870} Work and Energy Can Reveal Distance, Too
How far does the package in [ref:import-auto-id1803210] coast after the push, assuming friction remains constant? Use work and energy considerations.
**Strategy**
We know that once the person stops pushing, friction will bring the package to rest. In terms of energy, friction does negative work until it has removed all of the package’s kinetic energy. The work done by friction is the force of friction times the distance traveled times the cosine of the angle between the friction force and displacement; hence, this gives us a way of finding the distance traveled after the person stops pushing.
**Solution**
The normal force and force of gravity cancel in calculating the net force. The horizontal friction force is then the net force, and it acts opposite to the displacement, so $\theta =\text{180º}$. To reduce the kinetic energy of the package to zero, the work ${W}_{\text{fr}}$ by friction must be minus the kinetic energy that the package started with plus what the package accumulated due to the pushing. Thus ${W}_{\text{fr}}=-\text{95}\text{.}\text{75 J}$. Furthermore, ${W}_{\text{fr}}=fd'\;\text{cos}\;\theta \;\text{= –}fd'$, where $d'$ is the distance it takes to stop. Thus,

$$ d'=-\frac{{W}_{\text{fr}}}{f}=-\frac{-\text{95.75 J}}{\text{5.00 N}}, $$  {eq:fs-id2413224}

and so

$$ d'=\text{19}\text{.2 m}. $$  {eq:fs-id1907466}

**Discussion**
This is a reasonable distance for a package to coast on a relatively friction-free conveyor system. Note that the work done by friction is negative (the force is in the opposite direction of motion), so it removes the kinetic energy.
:::
Some of the examples in this section can be solved without considering energy, but at the expense of missing out on gaining insights about what work and energy are doing in this situation. On the whole, solutions involving energy are generally shorter and easier than those using kinematics and dynamics alone.

## Test Prep for AP Courses

:::exercise {fs-id3219139} type=ap-test-prep 
PROBLEM:
A toy car is going around a loop-the-loop. Gravity ____ the kinetic energy on the upward side of the loop, ____ the kinetic energy at the top, and ____ the kinetic energy on the downward side of the loop.
1. increases, decreases, has no effect on
2. decreases, has no effect on, increases
3. increases, has no effect on, decreases
4. decreases, increases, has no effect on
:::

:::exercise {fs-id3918076} type=ap-test-prep 
PROBLEM:
A roller coaster is set up with a track in the form of a perfect cosine. Describe and graph what happens to the kinetic energy of a cart as it goes through the first full period of the track.
SOLUTION:
The kinetic energy should change in the form of –cos, with an initial value of 0 or slightly above, and ending at the same level.
:::

:::exercise {fs-id1978911} type=ap-test-prep 
PROBLEM:
If wind is blowing horizontally toward a car with an angle of 30 degrees from the direction of travel, the kinetic energy will ____. If the wind is blowing at a car at 135 degrees from the direction of travel, the kinetic energy will ____.
1. increase, increase
2. increase, decrease
3. decrease, increase
4. decrease, decrease
:::

:::exercise {fs-id980483} type=ap-test-prep 
PROBLEM:
In what direction relative to the direction of travel can a force act on a car (traveling on level ground), and not change the kinetic energy? Can you give examples of such forces?
SOLUTION:
Any force acting perpendicular will have no effect on kinetic energy. Obvious examples are gravity and the normal force, but others include wind directly from the side and rain or other precipitation falling straight down.
:::

:::exercise {fs-id1847181} type=ap-test-prep 
PROBLEM:
A 2000-kg airplane is coming in for a landing, with a velocity 5 degrees below the horizontal and a drag force of 40 kN acting directly rearward. Ignoring thrust and lift on the plane, kinetic energy will ____ due to the net force of ____.
1. increase, 20 kN
2. decrease, 40 kN
3. increase, 45 kN
4. decrease, 45 kN
:::

:::exercise {fs-id1927755} type=ap-test-prep 
PROBLEM:
You are participating in the Iditarod, and your sled dogs are pulling you across a frozen lake with a force of 1200 N while a 300 N wind is blowing at you at 135 degrees from your direction of travel. What is the net force, and will your kinetic energy increase or decrease?
SOLUTION:
Note that the wind is pushing from behind and one side, so your KE will increase. The net force has components of 1400 N in the direction of travel and 212 N perpendicular to the direction of travel. So the net force is 1420 N at 8.5 degrees from the direction of travel.
:::

:::exercise {fs-id1564751} type=ap-test-prep 
PROBLEM:
A model drag car is being accelerated along its track from rest by a motor with a force of 75 N, but there is a drag force of 30 N due to the track. What is the kinetic energy after 2 m of travel?
1. 90 J
2. 150 J
3. 210 J
4. 60 J
:::

:::exercise {fs-id1859034} type=ap-test-prep 
PROBLEM:
You are launching a 0.315-kg potato out of a potato cannon. The cannon is 1.5 m long and is aimed 30.0 degrees above the horizontal. It exerts an average 45 N force on the potato. Ignoring friction, what is the kinetic energy of the potato as it leaves the muzzle of the potato cannon?
SOLUTION:
Gravity has a component perpendicular to the cannon (and to displacement, so it is irrelevant) and has a component parallel to the cannon. The latter is equal to 9.8 N. Thus the net force in the direction of the displacement is 45 N − 9.8 N, and the kinetic energy is 53 J.
:::

:::exercise {fs-id1130691} type=ap-test-prep 
PROBLEM:
When the force acting on an object is parallel to the direction of the motion of the center of mass, the mechanical energy ____. When the force acting on an object is antiparallel to the direction of the center of mass, the mechanical energy ____.
1. increases, increases
2. increases, decreases
3. decreases, increases
4. decreases, decreases
:::

:::exercise {fs-id1353464} type=ap-test-prep 
PROBLEM:
Describe a system in which the main forces acting are parallel or antiparallel to the center of mass, and justify your answer.
SOLUTION:
The potato cannon (and many other projectile launchers) above is an option, with a force launching the projectile, friction, potentially gravity depending on the direction it is pointed, etc. A drag (or other) car accelerating is another possibility.
:::

:::exercise {fs-id1893751} type=ap-test-prep 
PROBLEM:
A child is pulling two red wagons, with the second one tied to the first by a (non-stretching) rope. Each wagon has a mass of 10 kg. If the child exerts a force of 30 N for 5.0 m, how much has the kinetic energy of the two-wagon system changed?
1. 300 J
2. 150 J
3. 75 J
4. 60 J
:::

:::exercise {fs-id1396556} type=ap-test-prep 
PROBLEM:
A child has two red wagons, with the rear one tied to the front by a (non-stretching) rope. If the child pushes on the rear wagon, what happens to the kinetic energy of each of the wagons, and the two-wagon system?
SOLUTION:
The kinetic energy of the rear wagon increases. The front wagon does not, until the rear wagon collides with it. The total system may be treated by its center of mass, halfway between the wagons, and its energy increases by the same amount as the sum of the two individual wagons.
:::

:::exercise {fs-id872246} type=ap-test-prep 
PROBLEM:
Draw a graph of the force parallel to displacement exerted on a stunt motorcycle going through a loop-the-loop versus the distance traveled around the loop. Explain the net change in energy.
:::

## Section Summary
- The net work ${W}_{\text{net}}$ is the work done by the net force acting on an object.
- Work done on an object transfers energy to the object.
- The translational kinetic energy of an object of mass $m$ moving at speed $v$ is $\text{KE}=\frac{1}{2}{\text{mv}}^{2}$.
- The work-energy theorem states that the net work ${W}_{\text{net}}$ on a system changes its kinetic energy, ${W}_{\text{net}}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{m{v}_{0}}^{2}$.

## Conceptual Questions

:::exercise {fs-id2008777} type=conceptual-questions 
PROBLEM:
The person in [ref:import-auto-id1655335] does work on the lawn mower. Under what conditions would the mower gain energy? Under what conditions would it lose energy?

> FIGURE {fig:import-auto-id1655335} src=../../media/OSX_CP2e_Figure_08_02_04.jpg
> alt: A person pushing a lawn mower with a force F. Force is represented by a vector making an angle theta below the horizontal and distance moved by the mover is represented by vector d. The component of vector F along vector d is F cosine theta. Work done by the person, W, is equal to F d cosine theta.
> width: 350
> caption: 

:::

:::exercise {fs-id1422290} type=conceptual-questions 
PROBLEM:
Work done on a system puts energy into it. Work done by a system removes energy from it. Give an example for each statement.
:::

:::exercise {fs-id1527618} type=conceptual-questions 
PROBLEM:
When solving for speed in [ref:fs-id1534836], we kept only the positive root. Why?
:::

## Problems & Exercises

:::exercise {fs-id1688607} type=problems-exercises 
PROBLEM:
Compare the kinetic energy of a 20,000-kg truck moving at 110 km/h with that of an 80.0-kg astronaut in orbit moving at 27,500 km/h.
SOLUTION:
$1/\text{250}$
:::

:::exercise {fs-id1628939} type=problems-exercises 
PROBLEM:
(a) How fast must a 3000-kg elephant move to have the same kinetic energy as a 65.0-kg sprinter running at 10.0 m/s? (b) Discuss how the larger energies needed for the movement of larger animals would relate to metabolic rates.
:::

:::exercise {fs-id2628495} type=problems-exercises 
PROBLEM:
Confirm the value given for the kinetic energy of an aircraft carrier in [m42151](module:m42151). You will need to look up the definition of a nautical mile (1 knot = 1 nautical mile/h).
SOLUTION:
$1\text{.}1\times {\text{10}}^{\text{10}}\;\text{J}$
:::

:::exercise {fs-id2075342} type=problems-exercises 
PROBLEM:
(a) Calculate the force needed to bring a 950-kg car to rest from a speed of 90.0 km/h in a distance of 120 m (a fairly typical distance for a non-panic stop). (b) Suppose instead the car hits a concrete abutment at full speed and is brought to a stop in 2.00 m. Calculate the force exerted on the car and compare it with the force found in part (a).
:::

:::exercise {fs-id1909004} type=problems-exercises 
PROBLEM:
A car’s bumper is designed to withstand a 4.0-km/h (1.12-m/s) collision with an immovable object without damage to the body of the car. The bumper cushions the shock by absorbing the force over a distance. Calculate the magnitude of the average force on a bumper that collapses 0.200 m while bringing a 900-kg car to rest from an initial speed of 1.12 m/s.
SOLUTION:
**$2\text{.}8\times {\text{10}}^{3}\;\text{N}$**
:::

:::exercise {fs-id2126703} type=problems-exercises 
PROBLEM:
Boxing gloves are padded to lessen the force of a blow. (a) Calculate the force exerted by a boxing glove on an opponent’s face, if the glove and face compress 7.50 cm during a blow in which the 7.00-kg arm and glove are brought to rest from an initial speed of 10.0 m/s. (b) Calculate the force exerted by an identical blow in the days when no gloves were used and the knuckles and face would compress only 2.00 cm. (c) Discuss the magnitude of the force with glove on. Does it seem high enough to cause damage even though it is lower than the force with no glove?
:::

:::exercise {fs-id1663871} type=problems-exercises 
PROBLEM:
Using energy considerations, calculate the average force a 60.0-kg sprinter exerts backward on the track to accelerate from 2.00 to 8.00 m/s in a distance of 25.0 m, if he encounters a headwind that exerts an average force of 30.0 N against him.
SOLUTION:
102 N
:::

## Glossary
- {def} **net work**: work done by the net force, or vector sum of all the forces, acting on an object
- {def} **work-energy theorem**: the result, based on Newton’s laws, that the net work done on an object is equal to its change in kinetic energy
- {def} **kinetic energy**: the energy an object has by reason of its motion, equal to $\frac{1}{2}{\text{mv}}^{2}$ for the translational (i.e., non-rotational) motion of an object of mass $m$ moving at speed $v$

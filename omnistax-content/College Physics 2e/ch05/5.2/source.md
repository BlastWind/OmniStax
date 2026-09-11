# Drag Forces

## Learning Objectives
By the end of this section, you will be able to:
- Express mathematically the drag force.
- Discuss the applications of drag force.
- Define terminal velocity.
- Determine the terminal velocity given mass.
Another interesting force in everyday life is the force of drag on an object when it is moving in a fluid (either a gas or a liquid). You feel the drag force when you move your hand through water. You might also feel it if you move your hand during a strong wind. The faster you move your hand, the harder it is to move. You feel a smaller drag force when you tilt your hand so only the side goes through the air—you have decreased the area of your hand that faces the direction of motion. Like friction, the {term:drag force} always opposes the motion of an object. Unlike simple friction, the drag force is proportional to some function of the velocity of the object in that fluid. This functionality is complicated and depends upon the shape of the object, its size, its velocity, and the fluid it is in. For most large objects such as bicyclists, cars, and baseballs not moving too slowly, the magnitude of the drag force ${F}_{\text{D}}$ is found to be proportional to the square of the speed of the object. We can write this relationship mathematically as *${F}_{\text{D}}∝\;{v}^{2}$*. When taking into account other factors, this relationship becomes

$$ {F}_{\text{D}}=\frac{1}{2}Cρ{\text{Av}}^{2}\text{,} $$  {eq:eip-871}

where $C$ is the drag coefficient, $A$ is the area of the object facing the fluid, and $ρ$ is the density of the fluid. (Recall that density is mass per unit volume.) This equation can also be written in a more generalized fashion as ${F}_{\text{D}}={\text{bv}}^{2}$, where $b$ is a constant equivalent to $0\text{.5}CρA$. We have set the exponent for these equations as 2 because, when an object is moving at high velocity through air, the magnitude of the drag force is proportional to the square of the speed. As we shall see in a few pages on fluid dynamics, for small particles moving at low speeds in a fluid, the exponent is equal to 1.

:::note [] Drag Force

Drag force ${F}_{\text{D}}$ is found to be proportional to the square of the speed of the object. Mathematically

$$ {F}_{\text{D}}∝\;{v}^{2} $$  {eq:eip-4}

$$ {F}_{\text{D}}=\frac{1}{2}Cρ{\text{Av}}^{2}\text{,} $$  {eq:eip-833}

where $C$ is the drag coefficient, $A$ is the area of the object facing the fluid, and $ρ$ is the density of the fluid.
:::
Athletes as well as car designers seek to reduce the drag force to lower their race times. (See [ref:import-auto-id1165298931800]). “Aerodynamic” shaping of an automobile can reduce the drag force and so increase a car’s gas mileage.

> FIGURE {fig:import-auto-id1165298931800} src=../../media/Figure_06_02_02a.jpg
> alt: A two-person team in a bobsled race. The bobsled has an aerodynamic design and smooth runners so it can go as fast as possible.
> width: 250
> caption: From racing cars to bobsled racers, aerodynamic shaping is crucial to achieving top speeds. Bobsleds are designed for speed. They are shaped like a bullet with tapered fins. (credit: U.S. Army, via Wikimedia Commons)

The value of the drag coefficient, $C$ , is determined empirically, usually with the use of a wind tunnel. (See [ref:import-auto-id1165298787035]).

> FIGURE {fig:import-auto-id1165298787035} src=../../media/Figure_06_02_03a.jpg
> alt: A model plane is can be seen being tested in a wind tunnel.
> width: 200
> caption: NASA researchers test a model plane in a wind tunnel. (credit: NASA/Ames)

The drag coefficient can depend upon velocity, but we will assume that it is a constant here. [ref:import-auto-id1165298535568] lists some typical drag coefficients for a variety of objects. Notice that the drag coefficient is a dimensionless quantity. At highway speeds, over 50% of the power of a car is used to overcome air drag. The most fuel-efficient cruising speed is about 70–80 km/h (about 45–50 mi/h). For this reason, during the 1970s oil crisis in the United States, maximum speeds on highways were set at about 90 km/h (55 mi/h).

[TABLE import-auto-id1165298535568 A table lists typical values of draft coefficient C for different objects. Values include 0.28 for a Toyota Camry, 0.64 for a Hummer H2 SUV, 0.7 for a skydiver feet first, and 1.0 for a horizontal skydiver.]
| Object | *C* |
| Airfoil | 0.05 |
| Toyota Camry | 0.28 |
| Ford Focus | 0.32 |
| Honda Civic | 0.36 |
| Ferrari Testarossa | 0.37 |
| Dodge Ram pickup | 0.43 |
| Sphere | 0.45 |
| Hummer H2 SUV | 0.64 |
| Skydiver (feet first) | 0.70 |
| Bicycle | 0.90 |
| Skydiver (horizontal) | 1.0 |
| Circular flat plate | 1.12 |
Substantial research is under way in the sporting world to minimize drag. The dimples on golf balls are being redesigned as are the clothes that athletes wear. Bicycle racers and some swimmers and runners wear full bodysuits. Australian Cathy Freeman wore a full body suit in the 2000 Sydney Olympics, and won the gold medal for the 400 m race. Many swimmers in the 2008 Beijing Olympics wore (Speedo) body suits; it might have made a difference in breaking many world records (See [ref:import-auto-id1165298678773]). Most elite swimmers (and cyclists) shave their body hair. Such innovations can have the effect of slicing away milliseconds in a race, sometimes making the difference between a gold and a silver medal. One consequence is that careful and precise guidelines must be continuously developed to maintain the integrity of the sport.

> FIGURE {fig:import-auto-id1165298678773} src=../../media/Figure_06_02_05a.jpg
> alt: Three swimmers with are each wearing an L Z R Racer Suit, which is a swimsuit composed of elastane nylon and polyurethane. The seams of the suit are ultrasonically welded to reduce drag.
> width: 250
> caption: Body suits, such as this LZR Racer Suit, have been credited with many world records after their release in 2008. Smoother “skin” and more compression forces on a swimmer’s body provide at least 10% less drag. (credit: NASA/Kathy Barnstorff)

Some interesting situations connected to Newton’s second law occur when considering the effects of drag forces upon a moving object. For instance, consider a skydiver falling through air under the influence of gravity. The two forces acting on him are the force of gravity and the drag force (ignoring the buoyant force). The downward force of gravity remains constant regardless of the velocity at which the person is moving. However, as the person’s velocity increases, the magnitude of the drag force increases until the magnitude of the drag force is equal to the gravitational force, thus producing a net force of zero. A zero net force means that there is no acceleration, as given by Newton’s second law. At this point, the person’s velocity remains constant and we say that the person has reached his *terminal velocity* (${v}_{t}$). Since ${F}_{\text{D}}$ is proportional to the speed, a heavier skydiver must go faster for ${F}_{\text{D}}$ to equal his weight. Let’s see how this works out more quantitatively.
At the terminal velocity,

$$ {F}_{\text{net}}=\text{mg}-{F}_{\text{D}}=\text{ma}=0\text{.} $$  {eq:eip-303}

Thus,

$$ \text{mg}={F}_{\text{D}}\text{.} $$  {eq:eip-38}

Using the equation for drag force, we have

$$ \text{mg}=\frac{1}{2}ρ{\text{CAv}}^{2}. $$  {eq:eip-19}

Solving for the velocity, we obtain

$$ v=\sqrt{\frac{2\text{mg}}{ρ\text{CA}}}. $$  {eq:eip-545}

Assume the density of air is $ρ=1\text{.}\text{21 kg}{\text{/m}}^{3}$. A 75-kg skydiver descending head first will have an area approximately $A=0\text{.}\text{18}\;{\text{m}}^{2}$ and a drag coefficient of approximately $C=0\text{.}\text{70}$. We find that

$$ \begin{array}{l}v & = & \sqrt{\frac{2(\text{75 kg})(9\text{.80 m}{\text{/s}}^{2})}{(1\text{.}\text{21 kg}{\text{/m}}^{3})(0\text{.}\text{70})(\text{0.18}\;{\text{m}}^{2})}} \\ & = & \text{98 m/s} \\ & = & \text{350 km/h}\text{.}\end{array} $$  {eq:eip-981}

This means a skydiver with a mass of 75 kg achieves a maximum terminal velocity of about 350 km/h while traveling in a headfirst position, minimizing the area and his drag. In a spread-eagle position, that terminal velocity may decrease to about 200 km/h as the area increases. This terminal velocity becomes much smaller after the parachute opens.

:::note [] Take-Home Experiment

This interesting activity examines the effect of weight upon terminal velocity. Gather together some nested coffee filters. Leaving them in their original shape, measure the time it takes for one, two, three, four, and five nested filters to fall to the floor from the same height (roughly 2 m). (Note that, due to the way the filters are nested, drag is constant and only mass varies.) They obtain terminal velocity quite quickly, so find this velocity as a function of mass. Plot the terminal velocity *$v$* versus mass. Also plot *${v}^{2}$* versus mass. Which of these relationships is more linear? What can you conclude from these graphs?
:::

:::example {ex:fs-id1165298642932} A Terminal Velocity
Find the terminal velocity of an 85-kg skydiver falling in a spread-eagle position.
**Strategy**
At terminal velocity, ${F}_{\text{net}}=0$. Thus the drag force on the skydiver must equal the force of gravity (the person’s weight). Using the equation of drag force, we find $\text{mg}=\frac{1}{2}{\text{ρCAv}}^{2}$.
Thus the terminal velocity ${v}_{t}$ can be written as

$$ {v}_{\text{t}}=\sqrt{\frac{2\text{mg}}{\text{ρCA}}}. $$  {eq:eip-306}

**Solution**
All quantities are known except the person’s projected area. This is an adult (85 kg) falling spread eagle. We can estimate the frontal area as

$$ A=(2 m)(0\text{.}\text{35 m})=0\text{.}\text{70}\;{\text{m}}^{2}. $$  {eq:eip-769}

Using our equation for ${v}_{\text{t}}$, we find that

$$ \begin{array}{l}{v}_{\text{t}} & = & \sqrt{\frac{2(85\;\text{kg})(9.80\;{\text{m/s}}^{2})}{(1.21\;{\text{kg/m}}^{3})(1.0)(0.70\;{\text{m}}^{2})}} \\ & = & \text{44 m/s.}\end{array} $$  {eq:eip-656}

**Discussion**
This result is consistent with the value for ${v}_{\text{t}}$ mentioned earlier. The 75-kg skydiver going feet first had a $v=\text{98 m}/\text{s}$. He weighed less but had a smaller frontal area and so a smaller drag due to the air.
:::
The size of the object that is falling through air presents another interesting application of air drag. The terminal velocity of a small squirrel is less than the terminal velocity we found previously for the skydiver, and so the squirrel can fall from a significant height without injury.
The following interesting quote on animal size and terminal velocity is from a 1928 essay by a British biologist, J.B.S. Haldane, titled “On Being the Right Size.”
*To the mouse and any smaller animal, [gravity] presents practically no dangers. You can drop a mouse down a thousand-yard mine shaft; and, on arriving at the bottom, it gets a slight shock and walks away, provided that the ground is fairly soft. A rat is killed, a man is broken, and a horse splashes. For the resistance presented to movement by the air is proportional to the surface of the moving object. Divide an animal’s length, breadth, and height each by ten; its weight is reduced to a thousandth, but its surface only to a hundredth. So the resistance to falling in the case of the small animal is relatively ten times greater than the driving force.*
The above quadratic dependence of air drag upon velocity does not hold if the object is very small, is going very slow, or is in a denser medium than air. Then we find that the drag force is proportional just to the velocity. This relationship is given by {term:Stokes’ law}, which states that

$$ {F}_{\text{s}}=6πrηv, $$  {eq:eip-798}

where $r$ is the radius of the object, $η$ is the viscosity of the fluid, and $v$ is the object’s velocity.

:::note [] Stokes’ Law

$$ {F}_{\text{s}}=6πrηv, $$  {eq:eip-271}

where $r$ is the radius of the object, $η$ is the viscosity of the fluid, and $v$ is the object’s velocity.
:::
Good examples of this law are provided by microorganisms, pollen, and dust particles. Because each of these objects is so small, we find that many of these objects travel unaided only at a constant (terminal) velocity. Terminal velocities for bacteria (size about $\text{1 μm}$) can be about $\text{2 μm/s}$. To move at a greater speed, many bacteria swim using flagella (organelles shaped like little tails) that are powered by little motors embedded in the cell. Sediment in a lake can move at a greater terminal velocity (about $\text{5 μm/s}$), so it can take days to reach the bottom of the lake after being deposited on the surface.
If we compare animals living on land with those in water, you can see how drag has influenced evolution. Fishes, dolphins, and even massive whales are streamlined in shape to reduce drag forces. Birds are streamlined and migratory species that fly large distances often have particular features such as long necks. Flocks of birds fly in the shape of a spear head as the flock forms a streamlined pattern (see [ref:import-auto-id1165298645387]). In humans, one important example of streamlining is the shape of sperm, which need to be efficient in their use of energy.

> FIGURE {fig:import-auto-id1165298645387} src=../../media/Figure_06_02_06a.jpg
> alt: Geese flying across the sky in a V formation.
> width: 250
> caption: Geese fly in a V formation during their long migratory travels. This shape reduces drag and energy consumption for individual birds, and also allows them a better way to communicate. (credit: Julo, Wikimedia Commons)

:::note [] Galileo’s Experiment

Galileo is said to have dropped two objects of different masses from the Tower of Pisa. He measured how long it took each to reach the ground. Since stopwatches weren’t readily available, how do you think he measured their fall time? If the objects were the same size, but with different masses, what do you think he should have observed? Would this result be different if done on the Moon?
:::

## Section Summary
- Drag forces acting on an object moving in a fluid oppose the motion. For larger objects (such as a baseball) moving at a velocity
$v$ in air, the drag force is given by
      

$$ {F}_{\text{D}}=\frac{1}{2}{CρAv}^{2}, $$  {eq:eip-233}

where $C$ is the drag coefficient (typical values are given in [ref:import-auto-id1165298535568]), $A$ is the area of the object facing the fluid, and $ρ$ is the fluid density.
- For small objects (such as a bacterium) moving in a denser medium (such as water), the drag force is given by Stokes’ law,
      

$$ {F}_{\text{s}}=6\text{πηrv}, $$  {eq:eip-307}

where $r$ is the radius of the object, $η$ is the fluid viscosity, and $v$ is the object’s velocity.

## Conceptual Questions

:::exercise {fs-id1165298899670} type=conceptual-questions 
PROBLEM:
Athletes such as swimmers and bicyclists wear body suits in competition. Formulate a list of pros and cons of such suits.
:::

:::exercise {fs-id1165298622189} type=conceptual-questions 
PROBLEM:
Two expressions were used for the drag force experienced by a moving object in a liquid. One depended upon the speed, while the other was proportional to the square of the speed. In which types of motion would each of these expressions be more applicable than the other one?
:::

:::exercise {fs-id1165296261672} type=conceptual-questions 
PROBLEM:
As cars travel, oil and gasoline leaks onto the road surface. If a light rain falls, what does this do to the control of the car? Does a heavy rain make any difference?
:::

:::exercise {fs-id1165296346967} type=conceptual-questions 
PROBLEM:
Why can a squirrel jump from a tree branch to the ground and run away undamaged, while a human could break a bone in such a fall?
:::

## Problems & Exercise

:::exercise {fs-id1165298861311} type=problem-exercises 
PROBLEM:
The terminal velocity of a person falling in air depends upon the weight and the area of the person facing the fluid. Find the terminal velocity (in meters per second and kilometers per hour) of an 80.0-kg skydiver falling in a headfirst position with a cross-section area facing the fluid of $0\text{.}\text{140}\;{\text{m}}^{2}$.
SOLUTION:
$\text{115}\;\text{m/s;}\;\text{414}\;\text{km/hr}$
:::

:::exercise {fs-id1165298948219} type=problem-exercises 
PROBLEM:
A 60-kg and a 90-kg skydiver jump from an airplane at an altitude of 6000 m, both falling in a headfirst position. Make some assumption on their frontal areas and calculate their terminal velocities. How long will it take for each skydiver to reach the ground (assuming the time to reach terminal velocity is small)? Assume all values are accurate to three significant digits.
:::

:::exercise {fs-id1165298835347} type=problem-exercises 
PROBLEM:
A 560-g squirrel with a cross-section area facing the fluid of $\text{144}\;{\text{cm}}^{2}$ falls from a 5.0-m tree to the ground. Estimate its terminal velocity. (Use a drag coefficient for a horizontal skydiver.) What will be the velocity of a 56-kg person hitting the ground, assuming no drag contribution in such a short distance?
SOLUTION:
$\text{25.1 m/s; 9.90 m/s}$
:::

:::exercise {fs-id1165298803376} type=problem-exercises 
PROBLEM:
Drag forces vary depending on velocity. (a) What are the magnitudes of drag forces at 70 km/h and 100 km/h for a Toyota Camry? (Drag area is ${\text{0.70 m}}^{2}$) (b) What is the magnitude of drag force at 70 km/h and 100 km/h for a Hummer H2? (Drag area is $2\text{.}{\text{44 m}}^{2}$) Assume all values are accurate to three significant digits.
:::

:::exercise {fs-id1165298726139} type=problem-exercises 
PROBLEM:
By what factor does the drag force on a car increase as it goes from 65 to 110 km/h?
SOLUTION:
$2\text{.}9$
:::

:::exercise {fs-id1165298928445} type=problem-exercises 
PROBLEM:
Calculate the speed a spherical rain drop would achieve falling from 5.00 km (a) in the absence of air drag (b) with air drag. Take the size across of the drop to be 4 mm, the density to be $1\text{.}\text{00}\times {\text{10}}^{3}\;{\text{kg/m}}^{3}$, and the cross-section area facing the fluid to be ${πr}^{2}$.
:::

:::exercise {fs-id1165296534353} type=problem-exercises 
PROBLEM:
Using Stokes’ law, verify that the units for viscosity are kilograms per meter per second.
SOLUTION:

$$ (η)=\frac{({F}_{\text{s}})}{(r)(v)}=\frac{\text{kg}⋅{\text{m/s}}^{2}}{\text{m}⋅\text{m/s}}=\frac{\text{kg}}{\text{m}⋅\text{s}} $$  {eq:eip-id1168951431445}

:::

:::exercise {fs-id1165298534706} type=problem-exercises 
PROBLEM:
Find the terminal velocity of a spherical bacterium (diameter $2.00 μm$) falling in water. You will first need to note that the drag force is equal to the weight at terminal velocity. Take the density of the bacterium to be $1\text{.}\text{10}\times {\text{10}}^{3}\;{\text{kg/m}}^{3}$.
:::

:::exercise {fs-id1165298696745} type=problem-exercises 
PROBLEM:
Stokes’ law describes sedimentation of particles in liquids and can be used to measure viscosity. Particles in liquids achieve terminal velocity quickly. One can measure the time it takes for a particle  to fall a certain distance and then use Stokes’ law to calculate the viscosity of the liquid. Suppose a steel ball bearing (density $7\text{.}8\times {\text{10}}^{3}\;{\text{kg/m}}^{3}$, diameter $3\text{.0 mm}$) is dropped in a container of motor oil. It takes 12 s to fall a distance of 0.60 m. Calculate the viscosity of the oil.
SOLUTION:
$0\text{.}\text{76 kg/m}⋅s$
:::

## Glossary
- {def} **drag force**: ${F}_{\text{D}}$, found to be proportional to the square of the speed of the object; mathematically

${F}_{\text{D}}∝{v}^{\text{2}}$  {eq:fs-id2600233}

    

${F}_{\text{D}}=\frac{1}{2}Cρ{Av}^{2},$  {eq:fs-id2594583}

where $C$ is the drag coefficient, $A$ is the area of the object facing the fluid, and $ρ$ is the density of the fluid
- {def} **Stokes’ law**: ${F}_{s}=6πrηv$, where
$r$ is the radius of the object,
$η$ is the viscosity of the fluid, and
$v$ is the object’s velocity

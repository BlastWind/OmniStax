# Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Express the ideal gas law in terms of molecular mass and velocity.
- Define thermal energy.
- Calculate the kinetic energy of a gas molecule, given its temperature.
- Describe the relationship between the temperature of a gas and the kinetic energy of atoms and molecules.
- Describe the distribution of speeds of molecules in a gas.
We have developed macroscopic definitions of pressure and temperature. Pressure is the force divided by the area on which the force is exerted, and temperature is measured with a thermometer. We gain a better understanding of pressure and temperature from the kinetic theory of gases, which assumes that atoms and molecules are in continuous random motion.

> FIGURE {fig:import-auto-id2722950} src=../../media/Figure_14_04_01.jpg
> alt: A green vector v, representing a molecule colliding with a wall, is pointing at the surface of a wall at an angle. A second vector v primed starts at the point of impact and travels away from the wall at an angle. A dotted line perpendicular to the wall through the point of impact represents the component of the molecule’s momentum that is perpendicular to the wall. A red vector F is pointing into the wall from the point of impact, representing the force of the molecule hitting the wall.
> width: 200
> caption: When a molecule collides with a rigid wall, the component of its momentum perpendicular to the wall is reversed. A force is thus exerted on the wall, creating pressure.

[ref:import-auto-id2722950] shows an elastic collision of a gas molecule with the wall of a container, so that it exerts a force on the wall (by Newton’s third law). Because a huge number of molecules will collide with the wall in a short time, we observe an average force per unit area. These collisions are the source of pressure in a gas. As the number of molecules increases, the number of collisions and thus the pressure increase. Similarly, the gas pressure is higher if the average velocity of molecules is higher. The actual relationship is derived in the [ref:fs-id1855032]Things Great and Small feature below. The following relationship is found:

$$ \text{PV}=\frac{1}{3}\text{Nm}\bar{{v}^{2}}, $$  {eq:import-auto-id2724876}

where $P$ is the pressure (average force per unit area), $V$ is the volume of gas in the container, $N$ is the number of molecules in the container, $m$ is the mass of a molecule, and  $\bar{{v}^{2}}$ is the average of the molecular speed squared.
What can we learn from this atomic and molecular version of the ideal gas law? We can derive a relationship between temperature and the average translational kinetic energy of molecules in a gas. Recall the previous expression of the ideal gas law:

$$ \text{PV}=\text{NkT}. $$  {eq:import-auto-id1668609}

Equating the right-hand side of this equation with the right-hand side of $\text{PV}=\frac{1}{3}\text{Nm}\bar{{v}^{2}}$ gives

$$ \frac{1}{3}\text{Nm}\bar{{v}^{2}}=\text{NkT}. $$  {eq:import-auto-id1856370}

:::note [] Making Connections: Things Great and Small—Atomic and Molecular Origin of Pressure in a Gas

[ref:import-auto-id2721592] shows a box filled with a gas. We know from our previous discussions that putting more gas into the box produces greater pressure, and that increasing the temperature of the gas also produces a greater pressure. But why should increasing the temperature of the gas increase the pressure in the box? A look at the atomic and molecular scale gives us some answers, and an alternative expression for the ideal gas law.
The figure shows an expanded view of an elastic collision of a gas molecule with the wall of a container. Calculating the average force exerted by such molecules will lead us to the ideal gas law, and to the connection between temperature and molecular kinetic energy. We assume that a molecule is small compared with the separation of molecules in the gas, and that its interaction with other molecules can be ignored. We also assume the wall is rigid and that the molecule’s direction changes, but that its speed remains constant (and hence its kinetic energy and the magnitude of its momentum remain constant as well). This assumption is not always valid, but the same result is obtained with a more detailed description of the molecule’s exchange of energy and momentum with the wall.

> FIGURE {fig:import-auto-id2721592} src=../../media/Figure_14_04_02.jpg
> alt: Diagram representing the pressures that a gas exerts on the walls of a box in a three-dimensional coordinate system with x, y, and z components.
> width: 250
> caption: Gas in a box exerts an outward pressure on its walls. A molecule colliding with a rigid wall has the direction of its velocity and momentum in the $x$-direction reversed. This direction is perpendicular to the wall. The components of its velocity momentum in the $y$- and $z$-directions are not changed, which means there is no force parallel to the wall.

If the molecule’s velocity changes in the $x$-direction, its momentum changes from $–{\text{mv}}_{x}$ to $+{\text{mv}}_{x}$. Thus, its change in momentum is $\text{Δ}\text{mv}\;\text{= +}{\text{mv}}_{x}–(–{\text{mv}}_{x})=2{\text{mv}}_{x}$. The force exerted on the molecule is given by

$$ F=\frac{\text{Δ}p}{\text{Δ}t}=\frac{2{\text{mv}}_{x}}{\text{Δ}t}\text{.} $$  {eq:import-auto-id1168465433118}

There is no force between the wall and the molecule until the molecule hits the wall. During the short time of the collision, the force between the molecule and wall is relatively large. We are looking for an average force; we take $\text{Δ}t$ to be the average time between collisions of the molecule with this wall. It is the time it would take the molecule to go across the box and back (a distance $2l)$ at a speed of ${v}_{x}$. Thus $\text{Δ}t=2l/{v}_{x}$, and the expression for the force becomes

$$ F=\frac{2{\text{mv}}_{x}}{2l/{v}_{x}}=\frac{{\text{mv}}_{x}^{2}}{l}\text{.} $$  {eq:import-auto-id1168465439413}

This force is due to *one* molecule. We multiply by the number of molecules $N$ and use their average squared velocity to find the force

$$ F=N\frac{m\bar{{v}_{x}^{2}}}{l}, $$  {eq:import-auto-id1168465426507}

where the bar over a quantity means its average value. We would like to have the force in terms of the speed $v$, rather than the $x$-component of the velocity. We note that the total velocity squared is the sum of the squares of its components, so that

$$ \bar{{v}^{2}}=\bar{{v}_{x}^{2}}+\bar{{v}_{y}^{2}}+\bar{{v}_{z}^{2}}\text{.} $$  {eq:import-auto-id2678150}

Because the velocities are random, their average components in all directions are the same:

$$ \bar{{v}_{x}^{2}}=\bar{{v}_{y}^{2}}=\bar{{v}_{z}^{2}}\text{.} $$  {eq:import-auto-id2722120}

Thus,

$$ \bar{{v}^{2}}=3\bar{{v}_{x}^{2}}, $$  {eq:import-auto-id2710051}

or

$$ \bar{{v}_{x}^{2}}=\frac{1}{3}\bar{{v}^{2}}. $$  {eq:import-auto-id1168465438621}

Substituting $\frac{1}{3}\bar{{v}^{2}}$ into the expression for $F$ gives

$$ F=N\frac{m\bar{{v}^{2}}}{3l}\text{.} $$  {eq:import-auto-id1168465431989}

The pressure is $F/A,$ so that we obtain

$$ P=\frac{F}{A}=N\frac{m\bar{{v}^{2}}}{3\text{Al}}=\frac{1}{3}\frac{\text{Nm}\bar{{v}^{2}}}{V}, $$  {eq:import-auto-id1168465432010}

where we used $V=\text{Al}$ for the volume. This gives the important result.

$$ \text{PV}=\frac{1}{3}\text{Nm}\bar{{v}^{2}} $$  {eq:import-auto-id1168465435715}

This equation is another expression of the ideal gas law.
:::
We can get the average kinetic energy of a molecule, $\frac{1}{2}{\text{mv}}^{2}$, from the right-hand side of the equation by canceling $N$ and multiplying by 3/2. This calculation produces the result that the average kinetic energy of a molecule is directly related to absolute temperature.

$$ \bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT} $$  {eq:import-auto-id1437306}

The average translational kinetic energy of a molecule, $\bar{\text{KE}}$, is called {term:thermal energy}. The equation $\bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT}$ is a molecular interpretation of temperature, and it has been found to be valid for gases and reasonably accurate in liquids and solids. It is another definition of temperature based on an expression of the molecular energy.
It is sometimes useful to rearrange $\bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT}$**,** and solve for the average speed of molecules in a gas in terms of temperature,

$$ \sqrt{\bar{{v}^{2}}}={v}_{\text{rms}}=\sqrt{\frac{3\text{kT}}{m}}, $$  {eq:import-auto-id1168465432540}

where ${v}_{\text{rms}}$ stands for root-mean-square (rms) speed.

:::example {ex:fs-id1349012} Calculating Kinetic Energy and Speed of a Gas Molecule
(a) What is the average kinetic energy of a gas molecule at $\text{20}\text{.}0\text{º}\text{C}$ (room temperature)? (b) Find the rms speed of a nitrogen molecule $({\text{N}}_{2})$ at this temperature.
**Strategy for (a)**
The known in the equation for the average kinetic energy is the temperature.

$$ \bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT} $$  {eq:import-auto-id1168465432340}

Before substituting values into this equation, we must convert the given temperature to kelvins. This conversion gives $T=(\text{20}\text{.}0+\text{273})\;\text{K = 293}\;\text{K}.$
**Solution for (a)**
The temperature alone is sufficient to find the average translational kinetic energy. Substituting the temperature into the translational kinetic energy equation gives

$$ \bar{\text{KE}}=\frac{3}{2}\text{kT}=\frac{3}{2}(1.38\times {\text{10}}^{-\text{23}}\;\text{J/K})(\text{293}\;\text{K})=6.07\times {\text{10}}^{-\text{21}}\;\text{J}\text{.} $$  {eq:import-auto-id1168465431659}

**Strategy for (b)**
Finding the rms speed of a nitrogen molecule involves a straightforward calculation using the equation

$$ \sqrt{\bar{{v}^{2}}}={v}_{\text{rms}}=\sqrt{\frac{3\text{kT}}{m}}, $$  {eq:import-auto-id1168465431854}

but we must first find the mass of a nitrogen molecule. Using the molecular mass of nitrogen ${\text{N}}_{2}$ from the periodic table,

$$ m=\frac{2(\text{14}\text{.}\text{0067})\times {\text{10}}^{-3}\;\text{kg/mol}}{6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;{\text{mol}}^{-1}}=4\text{.}\text{65}\times {\text{10}}^{-\text{26}}\;\text{kg}\text{.} $$  {eq:import-auto-id1168465431776}

**Solution for (b)**
Substituting this mass and the value for $k$ into the equation for ${v}_{\text{rms}}$ yields

$$ {v}_{\text{rms}}=\sqrt{\frac{3\text{kT}}{m}}=\sqrt{\frac{3(1\text{.}\text{38}\times {\text{10}}^{–\text{23}}\;\text{J/K})(\text{293 K})}{4\text{.}\text{65}\times {\text{10}}^{\text{–26}}\;\text{kg}}}=\text{511}\;\text{m/s}\text{.} $$  {eq:import-auto-id3108905}

**Discussion**
Note that the average kinetic energy of the molecule is independent of the type of molecule. The average translational kinetic energy depends only on absolute temperature. The kinetic energy is very small compared to macroscopic energies, so that we do not feel when an air molecule is hitting our skin. The rms velocity of the nitrogen molecule is surprisingly large. These large molecular velocities do not yield macroscopic movement of air, since the molecules move in all directions with equal likelihood. The *mean free path* (the distance a molecule can move on average between collisions) of molecules in air is very small, and so the molecules move rapidly but do not get very far in a second. The high value for rms speed is reflected in the speed of sound, however, which is about 340 m/s at room temperature. The faster the rms speed of air molecules, the faster that sound vibrations can be transferred through the air. The speed of sound increases with temperature and is greater in gases with small molecular masses, such as helium. (See [ref:import-auto-id1168465428219].)
:::

> FIGURE {fig:import-auto-id1168465428219} src=../../media/Figure_14_04_03.jpg
> alt: In part a of the figure, circles represent molecules distributed in a gas. Attached to each circle is a vector representing velocity. The circles have a random arrangement, while the vector arrows have random orientations and lengths. In part b of the figure, an arc represents a sound wave as it passes through a gas. The velocity of each molecule along the peak of the wave is roughly oriented parallel to the transmission direction of the wave.
> width: 250
> caption: (a) There are many molecules moving so fast in an ordinary gas that they collide a billion times every second. (b) Individual molecules do not move very far in a small amount of time, but disturbances like sound waves are transmitted at speeds related to the molecular speeds.

:::note [] Making Connections: Historical Note—Kinetic Theory of Gases

The kinetic theory of gases was developed by Daniel Bernoulli (1700–1782), who is best known in physics for his work on fluid flow (hydrodynamics). Bernoulli’s work predates the atomistic view of matter established by Dalton.
:::

## Distribution of Molecular Speeds
The motion of molecules in a gas is random in magnitude and direction for individual molecules, but a gas of many molecules has a predictable distribution of molecular speeds. This distribution is called the *Maxwell-Boltzmann distribution*, after its originators, who calculated it based on kinetic theory, and has since been confirmed experimentally. (See [ref:import-auto-id1168465439946].) The distribution has a long tail, because a few molecules may go several times the rms speed. The most probable speed ${v}_{\text{p}}$ is less than the rms speed ${v}_{\text{rms}}$. [ref:import-auto-id2765975] shows that the curve is shifted to higher speeds at higher temperatures, with a broader range of speeds.

> FIGURE {fig:import-auto-id1168465439946} src=../../media/OSX_CP2e_Figure_14_04_04.jpg
> alt: A line graph of probability versus velocity in meters per second of oxygen gas at 300 kelvin. The graph is skewed to the right, with a peak probability just under 400 meters per second and a root-mean-square probability of about 500 meters per second.
> width: 350
> caption: The Maxwell-Boltzmann distribution of molecular speeds in an ideal gas. The most likely speed ${v}_{\text{p}}$ is less than the rms speed ${v}_{\text{rms}}$. Although very high speeds are possible, only a tiny fraction of the molecules have speeds that are an order of magnitude greater than ${v}_{\text{rms}}$.

The distribution of thermal speeds depends strongly on temperature. As temperature increases, the speeds are shifted to higher values and the distribution is broadened.

> FIGURE {fig:import-auto-id2765975} src=../../media/OSX_CP2e_Figure_14_04_05.jpg
> alt: Two distributions of probability versus velocity at two different temperatures plotted on the same graph. Temperature two is greater than Temperature one. The distribution for Temperature two has a peak with a lower probability, but a higher velocity than the distribution for Temperature one. The T sub two graph has a more normal distribution and is broader while the T sub one graph is more narrow and has a tail extending to the right.
> width: 250
> caption: The Maxwell-Boltzmann distribution is shifted to higher speeds and is broadened at higher temperatures.

What is the implication of the change in distribution with temperature shown in [ref:import-auto-id2765975] for humans? All other things being equal, if a person has a fever, they are likely to lose more water molecules, particularly from linings along moist cavities such as the lungs and mouth, creating a dry sensation in the mouth.

:::example {ex:fs-id1568374} Calculating Temperature: Escape Velocity of Helium Atoms
In order to escape Earth’s gravity, an object near the top of the atmosphere (at an altitude of 100 km) must travel away from Earth at 11.1 km/s. This speed is called the *escape velocity*. At what temperature would helium atoms have an rms speed equal to the escape velocity?
**Strategy**
Identify the knowns and unknowns and determine which equations to use to solve the problem.
**Solution**
1. Identify the knowns: $v$ is the escape velocity, 11.1 km/s.
2. Identify the unknowns: We need to solve for temperature, $T$. We also need to solve for the mass $m$ of the helium atom.
3. Determine which equations are needed.
- To solve for mass $m$ of the helium atom, we can use information from the periodic table:
    

$$ m=\frac{\text{molar mass}}{\text{number of atoms per mole}}. $$  {eq:import-auto-id1168465438861}

- To solve for temperature $T$, we can rearrange either
    

$$ \bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT} $$  {eq:import-auto-id1168465438916}

    or
    

$$ \sqrt{\bar{{v}^{2}}}={v}_{\text{rms}}=\sqrt{\frac{3\text{kT}}{m}} $$  {eq:import-auto-id1168465438957}

    to yield
    

$$ T=\frac{m\bar{{v}^{2}}}{\text{3}k}, $$  {eq:import-auto-id1168465438978}

where $k$ is the Boltzmann constant and $m$ is the mass of a helium atom.
4. Plug the known values into the equations and solve for the unknowns.

$$ m=\frac{\text{molar mass}}{\text{number of atoms per mole}}=\frac{4\text{.}\text{0026}\times {\text{10}}^{-3}\;\text{kg/mol}}{6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;\text{mol}}=6\text{.}\text{65}\times {\text{10}}^{-\text{27}}\;\text{kg} $$  {eq:import-auto-id1168465439144}

$$ T=\frac{(6\text{.}\text{65}\times {\text{10}}^{-\text{27}}\;\text{kg}){(\text{11}\text{.}1\times {\text{10}}^{3}\;\text{m/s})}^{2}}{3(1\text{.}\text{38}\times {\text{10}}^{-\text{23}}\;\text{J/K})}=1\text{.}\text{98}\times {\text{10}}^{4}\;\text{K} $$  {eq:import-auto-id3423579}

**Discussion**
This temperature is much higher than atmospheric temperature, which is approximately 250 K $(–\text{25}\text{º}\text{C}$ or $–\text{10}\text{º}\text{F})$ at high altitude. Very few helium atoms are left in the atmosphere, but there were many when the atmosphere was formed. The reason for the loss of helium atoms is that there are a small number of helium atoms with speeds higher than Earth’s escape velocity even at normal temperatures. The speed of a helium atom changes from one instant to the next, so that at any instant, there is a small, but nonzero chance that the speed is greater than the escape speed and the molecule escapes from Earth’s gravitational pull. Heavier molecules, such as oxygen, nitrogen, and water (very little of which reach a very high altitude), have smaller rms speeds, and so it is much less likely that any of them will have speeds greater than the escape velocity. In fact, so few have speeds above the escape velocity that billions of years are required to lose significant amounts of the atmosphere. [ref:import-auto-id1168465434619] shows the impact of a lack of an atmosphere on the Moon. Because the gravitational pull of the Moon is much weaker, it has lost almost its entire atmosphere. The comparison between Earth and the Moon is discussed in this chapter’s Problems and Exercises.
:::

> FIGURE {fig:import-auto-id1168465434619} src=../../media/Figure_14_04_06.jpg
> alt: Photograph of the lunar rover on the Moon. The photo looks like it was taken at night with a powerful spotlight shining on the rover from the left: light reflects off the rover, the astronaut, and the Moon’s surface, but the sky is black. The shadow of the rover is very sharp.
> width: 250
> caption: This photograph of Apollo 17 Commander Eugene Cernan driving the lunar rover on the Moon in 1972 looks as though it was taken at night with a large spotlight. In fact, the light is coming from the Sun. Because the acceleration due to gravity on the Moon is so low (about 1/6 that of Earth), the Moon’s escape velocity is much smaller. As a result, gas molecules escape very easily from the Moon, leaving it with virtually no atmosphere. Even during the daytime, the sky is black because there is no gas to scatter sunlight. (credit: Harrison H. Schmitt/NASA)

:::exercise {fs-id1589233} type=check-understanding Check Your Understanding

PROBLEM:
If you consider a very small object such as a grain of pollen, in a gas, then the number of atoms and molecules striking its surface would also be relatively small. Would the grain of pollen experience any fluctuations in pressure due to statistical fluctuations in the number of gas atoms and molecules striking it in a given amount of time?
SOLUTION:
Yes. Such fluctuations actually occur for a body of any size in a gas, but since the numbers of atoms and molecules are immense for macroscopic bodies, the fluctuations are a tiny percentage of the number of collisions, and the averages spoken of in this section vary imperceptibly. Roughly speaking the fluctuations are proportional to the inverse square root of the number of collisions, so for small bodies they can become significant. This was actually observed in the 19th century for pollen grains in water, and is known as the Brownian effect.
:::

:::note [interactive] Gas Properties
Pump gas molecules into a box and see what happens as you change the volume, add or remove heat, change gravity, and more. Measure the temperature and pressure, and discover how the properties of the gas vary in relation to each other.

> IMAGE {img:} src=
> alt: atoms_isotopes

:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2564957} type=ap-test-prep 
PROBLEM:
Two samples of ideal gas in separate containers have the same number of molecules and the same temperature, but the molecular mass of gas X is greater than that of gas Y. Which of the following correctly compares the average speed of the molecules of the gases and the average force the gases exert on their respective containers?

> TABLE {tab:fs-id2339856} cols=3

|  |  |  |
| --- | --- | --- |
|  | Average Speed of Molecules | Average Force on Container |
| (a) | Greater for gas X | Greater for gas X |
| (b) | Greater for gas X | The forces cannot be compared without knowing the volumes of the gases. |
| (c) | Greater for gas Y | Greater for gas Y |
| (d) | Greater for gas Y | The forces cannot be compared without knowing the volumes of the gases. |

SOLUTION:
(d)
:::

:::exercise {fs-id1689385} type=ap-test-prep 
PROBLEM:
How will the average kinetic energy of a gas molecule change if its temperature is increased from 20ºC to 313ºC?
(a) It will become sixteen times its original value.
(b) It will become four times its original value
(c) It will become double its original value
(d) It will remain unchanged.
:::

:::exercise {fs-id1860075} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id2212376} src=../../media/Figure_Ch13_S02.jpg
> alt: The graph shows a vertical, y-axis labeled Probability and a horizontal, x-axis labeled velocity v (m over s). There are two distribution curves, a red one marked T1 and a green one labeled T2. The red curve rises quickly and the gradually tapers off. The green curve rises slower than the red curve (and thus is to the right of the red curve), peaks lower than the peak of the red curve and then tapers down less quickly than the red curve.
> caption: 

This graph shows the Maxwell-Boltzmann distribution of molecular speeds in an ideal gas for two temperatures, *T*<sub>1</sub> and *T*<sub>2</sub>. Which of the following statements is false?
(a) *T*<sub>1</sub> is lower than *T*<sub>2</sub>
(b) The *rms* speed at *T*<sub>1</sub>is higher than that at *T*<sub>2</sub>.
(c) The peak of each graph shows the most probable speed at the corresponding temperature.
(d) None of the above.
SOLUTION:
(b)
:::

:::exercise {fs-id1469775} type=ap-test-prep 
PROBLEM:
Suppose you have gas in a cylinder with a movable piston which has an area of 0.40 m<sup>2</sup>. The pressure of the gas is 150 Pa when the height of the piston is 0.02 m. Find the force exerted by the gas on the piston. How does this force change if the piston is moved to a height of 0.03 m? Assume temperature remains constant.
:::

:::exercise {fs-id4428826} type=ap-test-prep 
PROBLEM:
What is the average kinetic energy of a nitrogen molecule (N<sub>2</sub>) if its *rms* speed is 560 m/s? At what temperature is this *rms* speed achieved?
SOLUTION:
(a) 7.29 × 10<sup>-21</sup>J; (b) 352K or 79ºC
:::

:::exercise {fs-id2516136} type=ap-test-prep 
PROBLEM:
What will be the ratio of kinetic energies and *rms* speeds of a nitrogen molecule and a helium atom at the same temperature?
:::

## Section Summary {section:section-summary}
- Kinetic theory is the atomistic description of gases as well as liquids and solids.
- Kinetic theory models the properties of matter in terms of continuous random motion of atoms and molecules.
- The ideal gas law can also be expressed as
    

$$ \text{PV}=\frac{1}{3}\text{Nm}\bar{{v}^{2}}, $$  {eq:import-auto-id1168465434779}

where $P$ is the pressure (average force per unit area), $V$ is the volume of gas in the container, $N$ is the number of molecules in the container, $m$ is the mass of a molecule, and $\bar{{v}^{2}}$ is the average of the molecular speed squared.
- Thermal energy is defined to be the average translational kinetic energy $\bar{\text{KE}}$ of an atom or molecule.
- The temperature of gases is proportional to the average translational kinetic energy of atoms and molecules.
    

$$ \bar{\text{KE}}=\frac{1}{2}m\bar{{v}^{2}}=\frac{3}{2}\text{kT} $$  {eq:import-auto-id1168465434968}

    or
    

$$ \sqrt{\bar{{v}^{2}}}={v}_{\text{rms}}=\sqrt{\frac{3\text{kT}}{m}}\text{.} $$  {eq:import-auto-id1168465434976}

- The motion of individual molecules in a gas is random in magnitude and direction. However, a gas of many molecules has a predictable distribution of molecular speeds, known as the *Maxwell-Boltzmann distribution*.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1380376} type=conceptual-questions 
PROBLEM:
How is momentum related to the pressure exerted by a gas? Explain on the atomic and molecular level, considering the behavior of atoms and molecules.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1358201} type=problems-exercises 
PROBLEM:
Some incandescent light bulbs are filled with argon gas. What is ${v}_{\text{rms}}$ for argon atoms near the filament, assuming their temperature is 2500 K?
SOLUTION:
$1\text{.}\text{25}\times {\text{10}}^{3}\;\text{m/s}$
:::

:::exercise {fs-id1807059} type=problems-exercises 
PROBLEM:
Average atomic and molecular speeds $({v}_{\text{rms}})$ are large, even at low temperatures. What is ${v}_{\text{rms}}$ for helium atoms at 5.00 K, just one degree above helium’s liquefaction temperature?
:::

:::exercise {fs-id1472510} type=problems-exercises 
PROBLEM:
(a) What is the average kinetic energy in joules of hydrogen atoms on the $\text{5500}\text{º}\text{C}$ surface of the Sun? (b) What is the average kinetic energy of helium atoms in a region of the solar corona where the temperature is $6\text{.}\text{00}\times {\text{10}}^{5}\;\text{K}$?
SOLUTION:
(a) $1\text{.}\text{20}\times {\text{10}}^{-\text{19}}\;\text{J}$
(b) $1\text{.}\text{24}\times {\text{10}}^{-\text{17}}\;\text{J}$
:::

:::exercise {fs-id1509348} type=problems-exercises 
PROBLEM:
The escape velocity of any object from Earth is 11.2 km/s. (a) Express this speed in m/s and km/h. (b) At what temperature would oxygen molecules (molecular mass is equal to 32.0 g/mol) have an average velocity ${v}_{\text{rms}}$ equal to Earth’s escape velocity of 11.1 km/s?
:::

:::exercise {fs-id1213414} type=problems-exercises 
PROBLEM:
The escape velocity from the Moon is much smaller than from Earth and is only 2.38 km/s. At what temperature would hydrogen molecules (molecular mass is equal to 2.016 g/mol) have an average velocity ${v}_{\text{rms}}$ equal to the Moon’s escape velocity?
SOLUTION:
$\text{458}\;\text{K}$
:::

:::exercise {fs-id1592552} type=problems-exercises 
PROBLEM:
Nuclear fusion, the energy source of the Sun, hydrogen bombs, and fusion reactors, occurs much more readily when the average kinetic energy of the atoms is high—that is, at high temperatures. Suppose you want the atoms in your fusion experiment to have average kinetic energies of $6\text{.}\text{40}\times {\text{10}}^{-\text{14}}\;\text{J}$. What temperature is needed?
:::

:::exercise {fs-id1616491} type=problems-exercises 
PROBLEM:
Suppose that the average velocity $({v}_{\text{rms}})$ of carbon dioxide molecules (molecular mass is equal to 44.0 g/mol) in a flame is found to be $1\text{.}\text{05}\times {\text{10}}^{5}\;\text{m/s}$. What temperature does this represent?
SOLUTION:
$1\text{.}\text{95}\times {\text{10}}^{7}\;\text{K}$
:::

:::exercise {fs-id2705174} type=problems-exercises 
PROBLEM:
Hydrogen molecules (molecular mass is equal to 2.016 g/mol) have an average velocity ${v}_{\text{rms}}$ equal to 193 m/s. What is the temperature?
:::

:::exercise {fs-id2720605} type=problems-exercises 
PROBLEM:
Much of the gas near the Sun is atomic hydrogen. Its temperature would have to be $1\text{.}5\times {\text{10}}^{7}\;\text{K}$ for the average velocity ${v}_{\text{rms}}$ to equal the escape velocity from the Sun. What is that velocity?
SOLUTION:
$6\text{.}\text{09}\times {\text{10}}^{5}\;\text{m/s}$
:::

:::exercise {fs-id1653384} type=problems-exercises 
PROBLEM:
There are two important isotopes of uranium— ${}^{\text{235}}\text{U}$ and ${}^{\text{238}}\text{U}$; these isotopes are nearly identical chemically but have different atomic masses. Only ${}^{\text{235}}\text{U}$ is very useful in nuclear reactors. One of the techniques for separating them (gas diffusion) is based on the different average velocities ${v}_{\text{rms}}$ of uranium hexafluoride gas, ${\text{UF}}_{6}$. (a) The molecular masses for ${}^{\text{235}}\text{U}\;$ ${\text{UF}}_{6}$ and ${}^{\text{238}}\text{U}$ $\;{\text{UF}}_{6}$ are 349.0 g/mol and 352.0 g/mol, respectively. What is the ratio of their average velocities? (b) At what temperature would their average velocities differ by 1.00 m/s? (c) Do your answers in this problem imply that this technique may be difficult?
:::

## Glossary
- {def} **thermal energy**: $\bar{\text{KE}}$, the average translational kinetic energy of a molecule

# Satellites and Kepler’s Laws: An Argument for Simplicity

## Learning Objectives
By the end of this section, you will be able to:
- State Kepler’s laws of planetary motion.
- Derive the third Kepler’s law for circular orbits.
- Discuss the Ptolemaic model of the universe.
Examples of gravitational orbits abound. Hundreds of artificial satellites orbit Earth together with thousands of pieces of debris. The Moon’s orbit about Earth has intrigued humans from time immemorial. The orbits of planets, asteroids, meteors, and comets about the Sun are no less interesting. If we look further, we see almost unimaginable numbers of stars, galaxies, and other celestial objects orbiting one another and interacting through gravity.
All these motions are governed by gravitational force, and it is possible to describe them to various degrees of precision. Precise descriptions of complex systems must be made with large computers. However, we can describe an important class of orbits without the use of computers, and we shall find it instructive to study them. These orbits have the following characteristics:
1. *A small mass $m$ orbits a much larger mass $M$*. This allows us to view the motion as if $M$ were stationary—in fact, as if from an inertial frame of reference placed on $M$ —without significant error. Mass $m$ is the satellite of $M$, if the orbit is gravitationally bound.
2. *The system is isolated from other masses*. This allows us to neglect any small effects due to outside masses.
The conditions are satisfied, to good approximation, by Earth’s satellites (including the Moon), by objects orbiting the Sun, and by the satellites of other planets. Historically, planets were studied first, and there is a classical set of three laws, called Kepler’s laws of planetary motion, that describe the orbits of all bodies satisfying the two previous conditions (not just planets in our solar system). These descriptive laws are named for the German astronomer Johannes Kepler (1571–1630), who devised them after careful study (over some 20 years) of a large amount of meticulously recorded observations of planetary motion done by Tycho Brahe (1546–1601). Such careful collection and detailed recording of methods and data are hallmarks of good science. Data constitute the evidence from which new interpretations and meanings can be constructed.

## Kepler’s Laws of Planetary Motion
*Kepler’s First Law*
The orbit of each planet about the Sun is an ellipse with the Sun at one focus.

> FIGURE {fig:import-auto-id1519172} src=../../media/Figure_07_06_01a.jpg
> alt: In figure a, an ellipse is shown on the coordinate axes. Two foci of the ellipse are joined to a point m on the ellipse. A pencil is shown at the point m. In figure b the elliptical path of a planet is shown. At the left focus f-one of the path the Sun is shown. The planet is shown just above the Sun on the elliptical path.
> width: 300
> caption: (a) An ellipse is a closed curve such that the sum of the distances from a point on the curve to the two foci (${f}_{1}$ and ${f}_{2}$) is a constant. You can draw an ellipse as shown by putting a pin at each focus, and then placing a string around a pencil and the pins and tracing a line on paper. A circle is a special case of an ellipse in which the two foci coincide (thus any point on the circle is the same distance from the center). (b) For any closed gravitational orbit, $m$ follows an elliptical path with $M$ at one focus. Kepler’s first law states this fact for planets orbiting the Sun.

*Kepler’s Second Law*
Each planet moves so that an imaginary line drawn from the Sun to the planet sweeps out equal areas in equal times (see [ref:import-auto-id1318502]).
*Kepler’s Third Law*
The ratio of the squares of the periods of any two planets about the Sun is equal to the ratio of the cubes of their average distances from the Sun. In equation form, this is

$$ \frac{{T}_{1}^{2}}{{T}_{2}^{2}}=\frac{{r}_{1}^{3}}{{r}_{2}^{3}}\text{,} $$  {eq:eip-976}

where $T$ is the period (time for one orbit) and $r$ is the average radius. This equation is valid only for comparing two small masses orbiting the same large one. Most importantly, this is a descriptive equation only, giving no information as to the cause of the equality.

> FIGURE {fig:import-auto-id1318502} src=../../media/Figure_07_06_02a.jpg
> alt: In the figure, the elliptical path of a planet is shown. The Sun is at the left focus. Three shaded regions M A B, M C D and M E F are marked on the figure by joining the Sun to the three pairs of points A B, C D, and E F on the elliptical path. The velocity of the planet is shown on the planet in a direction tangential to the path.
> width: 300
> caption: The shaded regions have equal areas. It takes equal times for $m$ to go from A to B, from C to D, and from E to F. The mass $m$ moves fastest when it is closest to $M$. Kepler’s second law was originally devised for planets orbiting the Sun, but it has broader validity.

Note again that while, for historical reasons, Kepler’s laws are stated for planets orbiting the Sun, they are actually valid for all bodies satisfying the two previously stated conditions.

:::example {ex:fs-id3008247} Find the Time for One Orbit of an Earth Satellite
Given that the Moon orbits Earth each 27.3 d and that it is an average distance of $3.84\times {\text{10}}^{8}\;\text{m}$ from the center of Earth, calculate the period of an artificial satellite orbiting at an average altitude of 1500 km above Earth’s surface.
**Strategy**
The period, or time for one orbit, is related to the radius of the orbit by Kepler’s third law, given in mathematical form in $\frac{{T}_{1}^{2}}{{T}_{2}^{2}}=\frac{{r}_{1}^{3}}{{r}_{2}^{3}}$. Let us use the subscript 1 for the Moon and the subscript 2 for the satellite. We are asked to find ${T}_{2}$. The given information tells us that the orbital radius of the Moon is ${r}_{1}=3\text{.}\text{84}\times {\text{10}}^{8}\;\text{m}$, and that the period of the Moon is ${T}_{1}=\text{27.3 d}$. The height of the artificial satellite above Earth’s surface is given, and so we must add the radius of Earth (6380 km) to get ${r}_{2}=(\text{1500}+\text{6380})\;\text{km}=\text{7880}\;\text{km}$. Now all quantities are known, and so ${T}_{2}$ can be found.
**Solution**
Kepler’s third law is

$$ \frac{{T}_{1}^{2}}{{T}_{2}^{2}}=\frac{{r}_{1}^{3}}{{r}_{2}^{3}}\text{.} $$  {eq:eip-618}

To solve for ${T}_{2}$, we cross-multiply and take the square root, yielding

$$ {T}_{2}^{2}={T}_{1}^{2}{(\frac{{r}_{2}}{{r}_{1}})}^{3} $$  {eq:eip-113}

$$ {T}_{2}={T}_{1}{(\frac{{r}_{2}}{{r}_{1}})}^{3/2}\text{.} $$  {eq:eip-925}

Substituting known values yields

$$ \begin{array}{l}{T}_{2} & = & \text{27.3 d}\times \frac{\text{24.0 h}}{\text{d}}\times {(\frac{\text{7880 km}}{3.84\times {\text{10}}^{5}\;\text{km}})}^{3/2} \\ & = & \text{1.93 h.}\end{array} $$  {eq:eip-552}

**Discussion**
This is a reasonable period for a satellite in a fairly low orbit. It is interesting that any satellite at this altitude will orbit in the same amount of time. This fact is related to the condition that the satellite’s mass is small compared with that of Earth.
:::
People immediately search for deeper meaning when broadly applicable laws, like Kepler’s, are discovered. It was Newton who took the next giant step when he proposed the law of universal gravitation. While Kepler was able to discover *what* was happening, Newton discovered that gravitational force was the cause.

## Derivation of Kepler’s Third Law for Circular Orbits
We shall derive Kepler’s third law, starting with Newton’s laws of motion and his universal law of gravitation. The point is to demonstrate that the force of gravity is the cause for Kepler’s laws (although we will only derive the third one).
Let us consider a circular orbit of a small mass $m$ around a large mass $M$, satisfying the two conditions stated at the beginning of this section. Gravity supplies the centripetal force to mass $m$. Starting with Newton’s second law applied to circular motion,

$$ {F}_{\text{net}}={\text{ma}}_{\text{c}}=m\frac{{v}^{2}}{r}\text{.} $$  {eq:eip-729}

The net external force on mass $m$ is gravity, and so we substitute the force of gravity for ${F}_{\text{net}}$:

$$ G\frac{\text{mM}}{{r}^{2}}=m\frac{{v}^{2}}{r}\text{.} $$  {eq:eip-623}

The mass $m$ cancels, yielding

$$ G\frac{M}{r}={v}^{2}\text{.} $$  {eq:eip-457}

The fact that $m$ cancels out is another aspect of the oft-noted fact that at a given location all masses fall with the same acceleration. Here we see that at a given orbital radius $r$, all masses orbit at the same speed. (This was implied by the result of the preceding worked example.) Now, to get at Kepler’s third law, we must get the period $T$ into the equation. By definition, period $T$ is the time for one complete orbit. Now the average speed $v$ is the circumference divided by the period—that is,

$$ v=\frac{2πr}{T}\text{.} $$  {eq:eip-519}

Substituting this into the previous equation gives

$$ G\frac{\text{M}}{r}=\frac{{4π}^{2}{r}^{2}}{{T}^{2}}\text{.} $$  {eq:eip-362}

Solving for ${T}^{2}$ yields

$$ {T}^{2}=\frac{{4π}^{2}}{\text{GM}}{r}^{3}\text{.} $$  {eq:eip-444}

Using subscripts 1 and 2 to denote two different satellites, and taking the ratio of the last equation for satellite 1 to satellite 2 yields

$$ \frac{{T}_{1}^{2}}{{T}_{2}^{2}}=\frac{{r}_{1}^{3}}{{r}_{2}^{3}}\text{.} $$  {eq:eip-209}

This is Kepler’s third law. Note that Kepler’s third law is valid only for comparing satellites of the same parent body, because only then does the mass of the parent body $M$ cancel.
Now consider what we get if we solve ${T}^{2}=\frac{{4π}^{2}}{\text{GM}}{r}^{3}$ for the ratio ${r}^{3}/{T}^{2}$. We obtain a relationship that can be used to determine the mass $M$ of a parent body from the orbits of its satellites:

$$ \frac{{r}^{3}}{{T}^{2}}=\frac{G}{{4π}^{2}}M\text{.} $$  {eq:eip-658}

If $r$ and $T$ are known for a satellite, then the mass $M$ of the parent can be calculated. This principle has been used extensively to find the masses of heavenly bodies that have satellites. Furthermore, the ratio ${r}^{3}/{T}^{2}$ should be a constant for all satellites of the same parent body (because ${r}^{3}/{T}^{2}=\text{GM}/{4π}^{2}$). (See [ref:import-auto-id2453905]).
It is clear from [ref:import-auto-id2453905] that the ratio of ${r}^{3}/{T}^{2}$ is constant, at least to the third digit, for all listed satellites of the Sun, and for those of Jupiter. Small variations in that ratio have two causes—uncertainties in the $r$ and $T$ data, and perturbations of the orbits due to other bodies. Interestingly, those perturbations can be—and have been—used to predict the location of new planets and moons. This is another verification of Newton’s universal law of gravitation.

:::note [] Making Connections

Newton’s universal law of gravitation is modified by Einstein’s general theory of relativity, as we shall see in [Particle Physics](module:m42669). Newton’s gravity is not seriously in error—it was and still is an extremely good approximation for most situations. Einstein’s modification is most noticeable in extremely large gravitational fields, such as near black holes. However, general relativity also explains such phenomena as small but long-known deviations of the orbit of the planet Mercury from classical predictions.
:::

## The Case for Simplicity
The development of the universal law of gravitation by Newton played a pivotal role in the history of ideas. While it is beyond the scope of this text to cover that history in any detail, we note some important points. The definition of planet set in 2006 by the International Astronomical Union (IAU) states that in the solar system, a planet is a celestial body that:
1. is in orbit around the Sun,
2. has sufficient mass to assume hydrostatic equilibrium and
3. has cleared the neighborhood around its orbit.
A non-satellite body fulfilling only the first two of the above criteria is classified as “dwarf planet.”
In 2006, Pluto was demoted to a ‘dwarf planet’ after scientists revised their definition of what constitutes a “true” planet.

[TABLE import-auto-id2453905 Orbital Data and Kepler’s Third Law]
| Parent | Satellite | Average orbital radius *r*(km) | Period **T(y)** | *r*^3 / *T*^2 (km^3 / y^2) |
| Earth | Moon | $3.84\times {\text{10}}^{5}$ | 0.07481 | $1\text{.}\text{01}\times {\text{10}}^{\text{19}}$ |
| Sun | Mercury | $5\text{.}\text{79}\times {\text{10}}^{7}$ | 0.2409 | $3\text{.}\text{34}\times {\text{10}}^{\text{24}}$ |
|  | Venus | $1\text{.}\text{082}\times {\text{10}}^{8}$ | 0.6150 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Earth | $1\text{.}\text{496}\times {\text{10}}^{8}$ | 1.000 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Mars | $2\text{.}\text{279}\times {\text{10}}^{8}$ | 1.881 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Jupiter | $7\text{.}\text{783}\times {\text{10}}^{8}$ | 11.86 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Saturn | $1\text{.}\text{427}\times {\text{10}}^{9}$ | 29.46 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Neptune | $4\text{.}\text{497}\times {\text{10}}^{9}$ | 164.8 | $3\text{.}\text{35}\times {\text{10}}^{\text{24}}$ |
| Pluto | $5\text{.}\text{90}\times {\text{10}}^{9}$ | 248.3 | $3\text{.}\text{33}\times {\text{10}}^{\text{24}}$ |
| Jupiter | Io | $4\text{.}\text{22}\times {\text{10}}^{5}$ | 0.00485 (1.77 d) | $3\text{.}\text{19}\times {\text{10}}^{\text{21}}$ |
|  | Europa | $6\text{.}\text{71}\times {\text{10}}^{5}$ | 0.00972 (3.55 d) | $3\text{.}\text{20}\times {\text{10}}^{\text{21}}$ |
| Ganymede | $1\text{.}\text{07}\times {\text{10}}^{6}$ | 0.0196 (7.16 d) | $3\text{.}\text{19}\times {\text{10}}^{\text{21}}$ |
| Callisto | $1\text{.}\text{88}\times {\text{10}}^{6}$ | 0.0457 (16.19 d) | $3\text{.}\text{20}\times {\text{10}}^{\text{21}}$ |
The universal law of gravitation is a good example of a physical principle that is very broadly applicable. That single equation for the gravitational force describes all situations in which gravity acts. It gives a cause for a vast number of effects, such as the orbits of the planets and moons in the solar system. It epitomizes the underlying unity and simplicity of physics.
Before the discoveries of Kepler, Copernicus, Galileo, Newton, and others, the solar system was thought to revolve around Earth as shown in [ref:import-auto-id1577966](a). This is called the Ptolemaic view, for the Greek philosopher who lived in the second century AD. This model is characterized by a list of facts for the motions of planets with no cause and effect explanation. There tended to be a different rule for each heavenly body and a general lack of simplicity.
[ref:import-auto-id1577966](b) represents the modern or Copernican model. In this model, a small set of rules and a single underlying force explain not only all motions in the solar system, but all other situations involving gravity. The breadth and simplicity of the laws of physics are compelling. As our knowledge of nature has grown, the basic simplicity of its laws has become ever more evident.

> FIGURE {fig:import-auto-id1577966} src=../../media/Figure_07_06_03a.jpg
> alt: In figure a the paths of the different planets are shown in the forms of dotted concentric circles with the Earth at the center with its Moon. The Sun is also shown revolving around the Earth. Each planet is labeled with its name. On the planets Mercury, Venus, Mars, Jupiter and Saturn green colored epicycles are shown. In the figure b Copernican view of planet is shown. The Sun is shown at the center of the solar system. The planets are shown moving around the Sun.
> width: 475
> caption: (a) The Ptolemaic model of the universe has Earth at the center with the Moon, the planets, the Sun, and the stars revolving about it in complex superpositions of circular paths. This geocentric model, which can be made progressively more accurate by adding more circles, is purely descriptive, containing no hints as to what are the causes of these motions. (b) The Copernican model has the Sun at the center of the solar system. It is fully explained by a small number of laws of physics, including Newton’s universal law of gravitation.

## Section Summary
- Kepler’s laws are stated for a small mass $m$ orbiting a larger mass $M$ in near-isolation. Kepler’s laws of planetary motion are then as follows:
    Kepler’s first law
    The orbit of each planet about the Sun is an ellipse with the Sun at one focus.
    Kepler’s second law
    Each planet moves so that an imaginary line drawn from the Sun to the planet sweeps out equal areas in equal times.
    Kepler’s third law
    The ratio of the squares of the periods of any two planets about the Sun is equal to the ratio of the cubes of their average distances from the Sun:
    

$$ \frac{{T}_{1}^{2}}{{T}_{2}^{2}}=\frac{{r}_{1}^{3}}{{r}_{2}^{3}}\text{,} $$  {eq:eip-233}

where $T$ is the period (time for one orbit) and $r$ is the average radius of the orbit.
- The period and radius of a satellite’s orbit about a larger body $M$ are related by
    

$$ {T}^{2}=\frac{{4π}^{2}}{\text{GM}}{r}^{3} $$  {eq:eip-395}

    or

$$ \frac{{r}^{3}}{{T}^{2}}=\frac{G}{{4π}^{2}}M\text{.} $$  {eq:eip-839}

## Conceptual Questions

:::exercise {fs-id1864324} type=conceptual-questions 
PROBLEM:
In what frame(s) of reference are Kepler’s laws valid? Are Kepler’s laws purely descriptive, or do they contain causal information?
:::

## Problem Exercises

:::exercise {fs-id3043002} type=problems-exercises 
PROBLEM:
A geosynchronous Earth satellite is one that has an orbital period of precisely 1 day. Such orbits are useful for communication and weather observation because the satellite remains above the same point on Earth (provided it orbits in the equatorial plane in the same direction as Earth’s rotation). Calculate the radius of such an orbit based on the data for the moon in [ref:import-auto-id2453905].
:::

:::exercise {fs-id1412516} type=problems-exercises 
PROBLEM:
Calculate the mass of the Sun based on data for Earth’s orbit and compare the value obtained with the Sun’s actual mass.
SOLUTION:
$1.98\times {\text{10}}^{\text{30}}\;\text{kg}$
:::

:::exercise {fs-id1403658} type=problems-exercises 
PROBLEM:
Find the mass of Jupiter based on data for the orbit of one of its moons, and compare your result with its actual mass.
:::

:::exercise {fs-id3246107} type=problems-exercises 
PROBLEM:
Find the ratio of the mass of Jupiter to that of Earth based on data in [ref:import-auto-id2453905].
SOLUTION:
$\frac{{M}_{J}}{{M}_{E}}=\text{316}$
:::

:::exercise {fs-id1060579} type=problems-exercises 
PROBLEM:
Astronomical observations of our Milky Way galaxy indicate that it has a mass of about $8\text{.}0\times {\text{10}}^{\text{11}}$ solar masses. A star orbiting on the galaxy’s periphery is about $6\text{.}0\times {\text{10}}^{4}$ light years from its center. (a) What should the orbital period of that star be? (b) If its period is $6\text{.}0\times {\text{10}}^{7}$ years instead, what is the mass of the galaxy? Such calculations are used to imply the existence of “dark matter” in the universe and have indicated, for example, the existence of very massive black holes at the centers of some galaxies.
:::

:::exercise {fs-id2639693} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
Space debris left from old satellites and their launchers is becoming a hazard to other satellites. (a) Calculate the speed of a satellite in an orbit 900 km above Earth’s surface. (b) Suppose a loose rivet is in an orbit of the same radius that intersects the satellite’s orbit at an angle of $\text{90º}$ relative to Earth. What is the velocity of the rivet relative to the satellite just before striking it? (c) Given the rivet is 3.00 mm in size, how long will its collision with the satellite last, approximating acceleration as constant and the rivet comes to a stop? (d) If its mass is 0.500 g, what is the average force it exerts on the satellite? (e) How much energy in joules is generated by the collision? (The satellite’s velocity does not change appreciably, because its mass is much greater than the rivet’s.)
SOLUTION:
a) $7910\;\text{m/s}$
b) $1.12\times {10}^{4}\;\text{m/s}$
c) $5.36\times {\text{10}}^{-7}\;\text{s}$
d) $1.04478\times {\text{10}}^{7}\;\text{N}$
e) $3.14\times {\text{10}}^{4}\;\text{J}$
:::

:::exercise {fs-id2932002} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) Based on Kepler’s laws and information on the orbital characteristics of the Moon, calculate the orbital radius for an Earth satellite having a period of 1.00 h. (b) What is unreasonable about this result? (c) What is unreasonable or inconsistent about the premise of a 1.00 h orbit?
SOLUTION:
a) $5\text{.}\text{08}\times {\text{10}}^{3}\;\text{km}$
b) This radius is unreasonable because it is less than the radius of earth.
c) The premise of a one-hour orbit is inconsistent with the known radius of the earth.
:::

:::exercise {fs-id1845618} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
On February 14, 2000, the NEAR spacecraft was successfully inserted into orbit around Eros, becoming the first artificial satellite of an asteroid. Construct a problem in which you determine the orbital speed for a satellite near Eros. You will need to find the mass of the asteroid and consider such things as a safe distance for the orbit. Although Eros is not spherical, calculate the acceleration due to gravity on its surface at a point an average distance from its center of mass. Your instructor may also wish to have you calculate the escape velocity from this point on Eros.
:::

:::exercise {exer-86626} type=problem-exercises 
PROBLEM:
**Critical Thinking**
A car travels around a loop with negligible friction at a constant speed and never loses contact with the loop. The top of the loop is labeled A and the bottom of the loop is labeled B. (a) At what point would the normal force be greatest? Briefly explain your reasoning. (b) Based on experimental data, an equation that fits the data is suggested for the normal force, *FN*, which may not be correct: ${F}_{N}=K{r}^{1/2}$, where *K* is a constant with appropriate units and *r* is the radius of the loop. Is this equation consistent with your answer from part a? Explain why or why not. Does this equation make sense? Explain why or why not. (c) Now the car travels around loops of various radii and the speed at which the car barely makes it around the loop is measured. Graph that speed vs. the radius of the loop.
SOLUTION:
(a) The normal force is greatest at point B. At point A, the normal force and the weight are the net force; at point B, only the normal force points in the same direction as the net force.
(b) i. This is not consistent because a larger radius should decease the net force and tension, not increase it. ii. This does not make sense because ${F}_{c}=m{v}^{2}/r$.
(c) 
> FIGURE {fig:fig-00001} src=../../media/OSX_CP2e_Figure_06_06Sol_CTQ01c.jpg
> alt: The figure is a plot of v as a function of r. The function starts at the origin and increases monotonically, with decreasing slope.
> width: 200
> caption: 

:::

# Electrical Potential Due to a Point Charge

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain point charges and express the equation for electric potential of a point charge.
- Distinguish between electric potential and electric field.
- Determine the electric potential of a point charge given charge and distance.
Point charges, such as electrons, are among the fundamental building blocks of matter. Furthermore, spherical charge distributions (like on a metal sphere) create external electric fields exactly like a point charge. The electric potential due to a point charge is, thus, a case we need to consider. Using calculus to find the work needed to move a test charge *$q$* from a large distance away to a distance of $r$ from a point charge *$Q$*, and noting the connection between work and potential $(W=\;-q\Delta V)$, it can be shown that the *electric potential $V$ of a point charge* is

$$ V=\frac{\text{kQ}}{r}\;(\text{Point Charge}), $$  {eq:eip-436}

where *k* is a constant equal to $9.0\times {\text{10}}^{\text{9}}\;\text{N}\;\text{·}\;{\text{m}}^{\text{2}}\text{/}{\text{C}}^{\text{2}}$.

:::note [] Electric Potential $V$ of a Point Charge

The electric potential $V$ of a point charge is given by

$$ V=\frac{\text{kQ}}{r}\;(\text{Point Charge}). $$  {eq:eip-235}

:::
The potential at infinity is chosen to be zero. Thus $V$ for a point charge decreases with distance, whereas $\text{E}$ for a point charge decreases with distance squared:

$$ \text{E}=\frac{\text{F}}{q}=\frac{\text{kQ}}{{r}^{2}}. $$  {eq:eip-277}

Recall that the electric potential $V$ is a scalar and has no direction, whereas the electric field $\text{E}$ is a vector. To find the voltage due to a combination of point charges, you add the individual voltages as numbers. To find the total electric field, you must add the individual fields as *vectors*, taking magnitude and direction into account. This is consistent with the fact that $V$ is closely associated with energy, a scalar, whereas $\text{E}$ is closely associated with force, a vector.

:::example {ex:fs-id3084387} What Voltage Is Produced by a Small Charge on a Metal Sphere?
Charges in static electricity are typically in the nanocoulomb $(\text{nC})$ to microcoulomb $(\text{µC})$ range. What is the voltage 5.00 cm away from the center of a 1-cm diameter metal sphere that has a $−3.00\;\text{nC}$ static charge?
**Strategy**
As we have discussed in [Electric Charge and Electric Field](module:m42300), charge on a metal sphere spreads out uniformly and produces a field like that of a point charge located at its center. Thus we can find the voltage using the equation $V=\text{kQ}/r$.
**Solution**
Entering known values into the expression for the potential of a point charge, we obtain

$$ \begin{array}{lll}V & = & k\frac{Q}{r} \\ & = & (\text{8.99}\times {\text{10}}^{9}\;\text{N}\cdot {\text{m}}^{2}/{\text{C}}^{2})(\frac{\text{–3.00}\times {\text{10}}^{–9}\;\text{C}}{\text{5.00}\times {\text{10}}^{\text{–2}}\;\text{m}}) \\ & = & \text{–539 V.}\end{array} $$  {eq:eip-174}

**Discussion**
The negative value for voltage means a positive charge would be attracted from a larger distance, since the potential is lower (more negative) than at larger distances. Conversely, a negative charge would be repelled, as expected.
:::

:::example {ex:fs-id2635295} What Is the Excess Charge on a Van de Graaff Generator
A demonstration Van de Graaff generator has a 25.0 cm diameter metal sphere that produces a voltage of 100 kV near its surface. (See [ref:import-auto-id2591256].) What excess charge resides on the sphere?  (Assume that each numerical value here is shown with three significant figures.)

> FIGURE {fig:import-auto-id2591256} src=../../media/Figure_20_03_01a.jpg
> alt: The figure shows a Van de Graaff generator. The generator consists of a flat belt running over two metal pulleys. One pulley is positioned at the top and another at the bottom. The upper pulley is surrounded by an aluminum sphere. The aluminum sphere has a diameter of twenty five centimeters. Inside the sphere, the upper pulley is connected to a conductor which in turn is connected to a voltmeter for measuring the potential on the sphere. The lower pulley is connected to a motor. When the motor is switched on, the lower pulley begins turning the flat belt. The Van de Graaff generator with the above described setup produces a voltage of one hundred kilovolts. The potential on the surface of the sphere will be the same as that of a point charge at the center which is twelve point five centimeters away from the center. Thus the excess charge is calculated using the formula Q equals r times V divided by k.
> width: 200
> caption: The voltage of this demonstration Van de Graaff generator is measured between the charged sphere and ground. Earth’s potential is taken to be zero as a reference. The potential of the charged conducting sphere is the same as that of an equal point charge at its center.

**Strategy**
The potential on the surface will be the same as that of a point charge at the center of the sphere, 12.5 cm away. (The radius of the sphere is 12.5 cm.) We can thus determine the excess charge using the equation

$$ V=\frac{\text{kQ}}{r}. $$  {eq:eip-992}

**Solution**
Solving for $Q$ and entering known values gives

$$ \begin{array}{lll}Q & = & \frac{\text{rV}}{k} \\ & = & \frac{(0\text{.}\text{125}\;\text{m})(\text{100}×{\text{10}}^{3}\;\text{V})}{8.99×{\text{10}}^{9}\;\text{N}\cdot {\text{m}}^{2}/{\text{C}}^{2}} \\ & = & \text{1.39}×{\text{10}}^{–6}\;\text{C}=\text{1.39 µC.}\end{array} $$  {eq:eip-939}

**Discussion**
This is a relatively small charge, but it produces a rather large voltage. We have another indication here that it is difficult to store isolated charges.
:::
The reference V = 0 in both of these examples was set at infinity. If these voltages were to be measured, this would be done with a meter that compares the measured potential with a reference that is not at infinity, such as ground potential. It is the potential difference between two points that is of importance, and very often there is a tacit assumption as to that reference point, such as Earth or a very distant point. As noted in [Electric Potential Energy: Potential Difference](module:m42324), this is analogous to taking sea level as $h=0$ when considering gravitational potential energy, ${\text{PE}}_{g}=\text{mgh}$.

## Section Summary {section:section-summary}
- Electric potential of a point charge is $V=\text{kQ}/r$.
- Electric potential is a scalar, and electric field is a vector. Addition of voltages as numbers gives the voltage due to a combination of point charges, whereas addition of individual fields as vectors gives the total electric field.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2705937} type=conceptual-questions 
PROBLEM:
In what region of space is the potential due to a uniformly charged sphere the same as that of a point charge? In what region does it differ from that of a point charge?
:::

:::exercise {fs-id2511493} type=conceptual-questions 
PROBLEM:
Can the potential of a non-uniformly charged sphere be the same as that of a point charge? Explain.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1677295} type=problems-exercises 
PROBLEM:
A 0.500 cm diameter plastic sphere, used in a static electricity demonstration, has a uniformly distributed 40.0 pC charge on its surface. What is the potential near its surface?
SOLUTION:
144 V
:::

:::exercise {fs-id1318401} type=problems-exercises 
PROBLEM:
What is the potential  $0\text{.}\text{530}\times {\text{10}}^{–10}\;\text{m}$  from a proton (the average distance between the proton and electron in a hydrogen atom)?
:::

:::exercise {fs-id1516605} type=problems-exercises 
PROBLEM:
(a) A sphere has a surface uniformly charged with 1.00 C. At what distance from its center is the potential 5.00 MV? (b) What does your answer imply about the practical aspect of isolating such a large charge?
SOLUTION:
(a) 1.80 km
(b) A charge of 1 C is a very large amount of charge; a sphere of radius 1.80 km is not practical.
:::

:::exercise {fs-id1281542} type=problems-exercises 
PROBLEM:
How far from a $1\text{.}\text{00 µC}$ point charge will the potential be 100 V? At what distance will it be $\text{2.00}\times {\text{10}}^{2}\;\text{V}?$
:::

:::exercise {fs-id963449} type=problems-exercises 
PROBLEM:
What are the sign and magnitude of a point charge that produces a potential of $\text{–2.00 V}$ at a distance of 1.00 mm?
SOLUTION:
$–2\text{.}\text{22}\times {\text{10}}^{-13}\;\text{C}$
:::

:::exercise {fs-id1281900} type=problems-exercises 
PROBLEM:
If the potential due to a point charge is  $5\text{.}\text{00}\times {\text{10}}^{2}\;\text{V}$  at a distance of 15.0 m, what are the sign and magnitude of the charge?
:::

:::exercise {fs-id2554432} type=problems-exercises 
PROBLEM:
In nuclear fission, a nucleus splits roughly in half. (a) What is the potential  $2\text{.}\text{00}\times {\text{10}}^{-14}\;\text{m}$  from a fragment that has 46 protons in it? (b) What is the potential energy in MeV of a similarly charged fragment at this distance?
SOLUTION:
(a) $3\text{.}\text{31}\times {\text{10}}^{6}\;\text{V}$
(b) 152 MeV
:::

:::exercise {fs-id890041} type=problems-exercises 
PROBLEM:
A research Van de Graaff generator has a 2.00-m-diameter metal sphere with a charge of 5.00 mC on it. (a) What is the potential near its surface? (b) At what distance from its center is the potential 1.00 MV? (c) An oxygen atom with three missing electrons is released near the Van de Graaff generator. What is its energy in MeV at this distance?
:::

:::exercise {fs-id1320070} type=problems-exercises 
PROBLEM:
An electrostatic paint sprayer has a 0.200-m-diameter metal sphere at a potential of 25.0 kV that repels paint droplets onto a grounded object. (a) What charge is on the sphere? (b) What charge must a 0.100-mg drop of paint have to arrive at the object with a speed of 10.0 m/s?
SOLUTION:
(a) $2\text{.}\text{78}\times {\text{10}}^{-7}\;\text{C}$
(b) $2\text{.}\text{00}\times {\text{10}}^{-10}\;\text{C}$
:::

:::exercise {fs-id1497489} type=problems-exercises 
PROBLEM:
In one of the classic nuclear physics experiments at the beginning of the 20th century, an alpha particle was accelerated toward a gold nucleus, and its path was substantially deflected by the Coulomb interaction. If the energy of the doubly charged alpha nucleus was 5.00 MeV, how close to the gold nucleus (79 protons) could it come before being deflected?
:::

:::exercise {fs-id1183848} type=problems-exercises 
PROBLEM:
(a) What is the potential between two points situated 10 cm and 20 cm from a $3\text{.}0 µC$ point charge? (b) To what location should the point at 20 cm be moved to increase this potential difference by a factor of two?
:::

:::exercise {eip-200} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) What is the final speed of an electron accelerated from rest through a voltage of 25.0 MV by a negatively charged Van de Graaff terminal?
(b) What is unreasonable about this result?
(c) Which assumptions are responsible?
SOLUTION:
(a)  $2.96\times {10}^{9}\;\text{m/s}$
(b) This velocity is far too great. It is faster than the speed of light.
(c) The assumption that the speed of the electron is far less than that of light and that the problem does not require a relativistic treatment produces an answer greater than the speed of light.
:::

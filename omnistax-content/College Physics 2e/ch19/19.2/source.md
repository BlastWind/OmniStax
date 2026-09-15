# Electric Potential in a Uniform Electric Field

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe the relationship between voltage and electric field.
- Derive an expression for the electric potential and electric field.
- Calculate electric field strength given distance and voltage.
In the previous section, we explored the relationship between voltage and energy. In this section, we will explore the relationship between voltage and electric field. For example, a uniform electric field $\text{E}$ is produced by placing a potential difference (or voltage) $\Delta V$ across two parallel metal plates, labeled A and B. (See [ref:import-auto-id671952].) Examining this will tell us what voltage is needed to produce a certain electric field strength; it will also reveal a more fundamental relationship between electric potential and electric field. From a physicist’s point of view, either $\Delta V$ or $\text{E}$ can be used to describe any charge distribution. $\Delta V$ is most closely tied to energy, whereas $\text{E}$ is most closely related to force. $\Delta V$ is a {term:scalar} quantity and has no direction, while $\text{E}$ is a {term:vector} quantity, having both magnitude and direction. (Note that the magnitude of the electric field strength, a scalar quantity, is represented by $E$ below.) The relationship between $\Delta V$ and $\text{E}$ is revealed by calculating the work done by the force in moving a charge from point A to point B. But, as noted in [Electric Potential Energy: Potential Difference](module:m42324), this is complex for arbitrary charge distributions, requiring calculus. We therefore look at a uniform electric field as an interesting special case.

> FIGURE {fig:import-auto-id671952} src=../../media/Figure_20_02_01a.jpg
> alt: The figure shows two vertically oriented parallel plates A and B separated by a distance d. The plate A is positively charged and B is negatively charged. Electric field lines are parallel between the plates and curved at the ends of the plates. A charge q is moved from A to B. The work done W equals q times V sub A B, and the electric field intensity E equals V sub A B over d and potential difference delta V equals q times V sub A B.
> width: 175
> caption: The relationship between $V$ and $E$ for parallel conducting plates is $E=V/d$. (Note that $\Delta V={V}_{\text{AB}}$  in magnitude. For a charge that is moved from plate A at higher potential to plate B at lower potential, a minus sign needs to be included as follows:  $–ΔV={V}_{\text{A}}-{V}_{\text{B}}={V}_{\text{AB}}$. See the text for details.)

The work done by the electric field in [ref:import-auto-id671952] to move a positive charge $q$ from A, the positive plate, higher potential, to B, the negative plate, lower potential, is

$$ W=\;–Δ\text{PE}=\;-q\Delta V. $$  {eq:eip-554}

The opposite of the potential difference between points A and B, which we denote as ${V}_{\text{AB'}}$, is

$$ –ΔV=\;-({V}_{\text{B}}-{V}_{\text{A}})={V}_{\text{A}}-{V}_{\text{B}}={V}_{\text{AB}}. $$  {eq:eip-694}

Entering this into the expression for work yields

$$ W={\text{qV}}_{\text{AB}}. $$  {eq:eip-217}

Work is $W=\text{Fd}\;\text{cos}\;\theta$; here $\text{cos}\;\theta =1$, since the path is parallel to the field, and so $W=\text{Fd}$. Since $F=\text{qE}$, we see that $W=\text{qEd}$. Substituting this expression for work into the previous equation gives

$$ qEd={\text{qV}}_{\text{AB}}. $$  {eq:eip-725}

The charge cancels, and so the voltage between points A and B is seen to be

$$ \begin{array}{l}\begin{array}{l}{V}_{\text{AB}}=Ed \\ E=\frac{{V}_{\text{AB}}}{d}\end{array}}\text{(uniform}\;E\;\text{- field only),}\end{array} $$  {eq:eip-537}

where *$d$* is the distance from A to B, or the distance between the plates in [ref:import-auto-id671952]. Note that the above equation implies the units for electric field are volts per meter. We already know the units for electric field are newtons per coulomb; thus the following relation among units is valid:

$$ \text{1 N}/C=\text{1 V}/m. $$  {eq:eip-847}

:::note [] Voltage between Points A and B

$$ \begin{array}{l}\begin{array}{l}{V}_{\text{AB}}=Ed \\ E=\frac{{V}_{\text{AB}}}{d}\end{array}}\text{(uniform}\;E\;\text{- field only),}\end{array} $$  {eq:eip-649}

where *$d$* is the distance from A to B, or the distance between the plates.
:::

:::example {ex:fs-id2573471} What Is the Highest Voltage Possible between Two Plates?
Dry air will support a maximum electric field strength of about $3.0×{\text{10}}^{6}\;\text{V/m}$. Above that value, the field creates enough ionization in the air to make the air a conductor. This allows a discharge or spark that reduces the field. What, then, is the maximum voltage between two parallel conducting plates separated by 2.5 cm of dry air?
**Strategy**
We are given the maximum electric field $E$ between the plates and the distance $d$ between them. The equation ${V}_{\text{AB}}=Ed$ can thus be used to calculate the maximum voltage.
**Solution**
The potential difference or voltage between the plates is

$$ {\text{V}}_{\text{AB}}=Ed. $$  {eq:eip-785}

Entering the given values for  $E$ and $d$ gives

$$ {V}_{\text{AB}}=(3.0×{\text{10}}^{6}\;\text{V/m})(0.025 m)=7.5×{\text{10}}^{4}\;V $$  {eq:eip-615}

or

$$ {V}_{\text{AB}}=\text{75 kV}. $$  {eq:eip-678}

(The answer is quoted to only two digits, since the maximum field strength is approximate.)
**Discussion**
One of the implications of this result is that it takes about 75 kV to make a spark jump across a 2.5 cm (1 in.) gap, or 150 kV for a 5 cm spark. This limits the voltages that can exist between conductors, perhaps on a power transmission line. A smaller voltage will cause a spark if there are points on the surface, since points create greater fields than smooth surfaces. Humid air breaks down at a lower field strength, meaning that a smaller voltage will make a spark jump through humid air. The largest voltages can be built up, say with static electricity, on dry days.
:::

> FIGURE {fig:import-auto-id1536252} src=../../media/Figure_20_02_02a.jpg
> alt: The picture shows a spark chamber placed on a wooden base.
> width: 200
> caption: A spark chamber is used to trace the paths of high-energy particles. Ionization created by the particles as they pass through the gas between the plates allows a spark to jump. The sparks are perpendicular to the plates, following electric field lines between them. The potential difference between adjacent plates is not high enough to cause sparks without the ionization produced by particles from accelerator experiments (or cosmic rays). (credit: Daderot, Wikimedia Commons)

:::example {ex:fs-id1677818} Field and Force inside an Electron Gun
(a) An electron gun has parallel plates separated by 4.00 cm and gives electrons 25.0 keV of energy. What is the electric field strength between the plates? (b) What force would this field exert on a piece of plastic with a $\text{0.500}\mu \text{C}$ charge that gets between the plates?
**Strategy**
Since the voltage and plate separation are given, the electric field strength can be calculated directly from the expression $E=\frac{{V}_{\text{AB}}}{d}$. Once the electric field strength is known, the force on a charge is found using $\text{F}=q\;\text{E}$. Since the electric field is in only one direction, we can write this equation in terms of the magnitudes, $F=q\;E$.
**Solution for (a)**
The expression for the magnitude of the electric field between two uniform metal plates is

$$ E=\frac{{V}_{\text{AB}}}{d}. $$  {eq:eip-638}

Since the electron is a single charge and is given 25.0 keV of energy, the potential difference must be 25.0 kV. Entering this value for ${V}_{\text{AB}}$ and the plate separation of 0.0400 m, we obtain

$$ E=\frac{\text{25}\text{.}\text{0 kV}}{0\text{.}\text{0400 m}}=6\text{.}\text{25}×{\text{10}}^{5}\;\text{V/m}. $$  {eq:eip-734}

**Solution for (b)**
The magnitude of the force on a charge in an electric field is obtained from the equation

$$ F=qE. $$  {eq:eip-435}

Substituting known values gives

$$ F=(\text{0.500}×{\text{10}}^{–6}\;\text{C})(\text{6.25}×{\text{10}}^{5}\;\text{V/m})=\text{0.313 N}. $$  {eq:eip-0}

**Discussion**
Note that the units are newtons, since $\text{1 V/m}=\text{1 N/C}$. The force on the charge is the same no matter where the charge is located between the plates. This is because the electric field is uniform between the plates.
:::
In more general situations, regardless of whether the electric field is uniform, it points in the direction of decreasing potential, because the force on a positive charge is in the direction of $\text{E}$ and also in the direction of lower potential $V$. Furthermore, the magnitude of $\text{E}$ equals the rate of decrease of $V$ with distance. The faster $V$ decreases over distance, the greater the electric field. In equation form, the general relationship between voltage and electric field is

$$ E=\;-\frac{\Delta V}{\Delta s}, $$  {eq:eip-977}

where $\Delta s$ is the distance over which the change in potential, $\Delta V$, takes place. The minus sign tells us that $\text{E}$ points in the direction of decreasing potential. The electric field is said to be the *gradient* (as in grade or slope) of the electric potential.

:::note [] Relationship between Voltage and Electric Field

In equation form, the general relationship between voltage and electric field is

$$ E=\;-\frac{\Delta V}{\Delta s}, $$  {eq:eip-984}

where $\Delta s$ is the distance over which the change in potential, $\Delta V$, takes place. The minus sign tells us that $\text{E}$ points in the direction of decreasing potential. The electric field is said to be the *gradient* (as in grade or slope) of the electric potential.
:::
For continually changing potentials, $\Delta V$ and $\Delta s$ become infinitesimals and differential calculus must be employed to determine the electric field.

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1418320} type=ap-test-prep 
PROBLEM:
A negatively charged massive particle is dropped from above the two plates in [ref:import-auto-id671952] into the space between them. Which best describes the trajectory it takes?
(a) A rightward-curving parabola
(b) A leftward-curving parabola
(c) A rightward-curving section of a circle
(d) A leftward-curving section of a circle
SOLUTION:
(b)
:::

:::exercise {fs-id1392626} type=ap-test-prep 
PROBLEM:
Two massive particles with identical charge are launched into the uniform field between two plates from the same launch point with the same velocity. They both impact the positively charged plate, but the second one does so four times as far as the first. What sign is the charge? What physical difference would give them different impact points (quantify as a relative percent)? How does this compare to the gravitational projectile motion case?
:::

:::exercise {fs-id1837856} type=ap-test-prep 
PROBLEM:
Two plates are lying horizontally, but stacked with one 10.0 cm above the other. If the upper plate is held at +100 V, what is the magnitude and direction of the electric field between the plates if the lower is held at +50.0 V? -50.0 V?
(a) 500 V/m, 1500 V/m, down
(b) 500 V/m, 1500 V/m, up
(c) 1500 V/m, 500 V/m, down
(d) 1500 V/m, 500 V/m, up
SOLUTION:
(a)
:::

:::exercise {fs-id2337566} type=ap-test-prep 
PROBLEM:
Two parallel conducting plates are 15 cm apart, each with an area of 0.75 m<sup>2</sup>. The left one has a charge of -0.225 C placed on it, while the right has a charge of 0.225 C. What is the magnitude and direction of the electric field between the two?
:::

:::exercise {fs-id1764873} type=ap-test-prep 
PROBLEM:
Consider three parallel conducting plates, with a space of 3.0 cm between them. The leftmost one is at a potential of +45 V, the middle one is held at ground, and the rightmost is at a potential of -75 V. What is the magnitude of the average electric field on an electron traveling between the plates? (Assume that the middle one has holes for the electron to go through.)
(a) 1500 V/m
(b) 2500 V/m
(c) 4000 V/m
(d) 2000 V/m
SOLUTION:
(d)
:::

:::exercise {fs-id1893948} type=ap-test-prep 
PROBLEM:
A new kind of electron gun has a rear plate at −25.0 kV, a grounded plate 2.00 cm in front of that, and a +25.0 kV plate 4.00 cm in front of that. What is the magnitude of the average electric field?
:::

:::exercise {fs-id1426361} type=ap-test-prep 
PROBLEM:
A certain electric potential isoline graph has isolines every 5.0 V. If six of these lines cross a 40 cm path drawn between two points of interest, what is the (magnitude of the average) electric field along this path?
(a) 750 V/m
(b) 150 V/m
(c) 38 V/m
(d) 75 V/m
SOLUTION:
(d)
:::

:::exercise {fs-id2573348} type=ap-test-prep 
PROBLEM:
Given a system of two parallel conducting plates held at a fixed potential difference, describe what happens to the isolines of the electric potential between them as the distance between them is changed. How does this relate to the electric field strength?
:::

## Section Summary {section:section-summary}
- The voltage between points A and B is
      

$$ \begin{array}{l}\begin{array}{l}{V}_{\text{AB}}=Ed \\ E=\frac{{V}_{\text{AB}}}{d}\end{array}}\text{(uniform}\;E\;\text{- field only),}\end{array} $$  {eq:eip-157}

where $d$ is the distance from A to B, or the distance between the plates.
- In equation form, the general relationship between voltage and electric field is
      

$$ E=\;-\frac{\Delta V}{\Delta s}, $$  {eq:eip-894}

where $\Delta s$ is the distance over which the change in potential, $\Delta V$, takes place. The minus sign tells us that $\text{E}$ points in the direction of decreasing potential.) The electric field is said to be the *gradient* (as in grade or slope) of the electric potential.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1570612} type=conceptual-questions 
PROBLEM:
Discuss how potential difference and electric field strength are related. Give an example.
:::

:::exercise {fs-id3080509} type=conceptual-questions 
PROBLEM:
What is the strength of the electric field in a region where the electric potential is constant?
:::

:::exercise {fs-id2558866} type=conceptual-questions 
PROBLEM:
Will a negative charge, initially at rest, move toward higher or lower potential? Explain why.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {eip-id1688468} type=problems-exercises 
PROBLEM:
Show that units of V/m and N/C for electric field strength are indeed equivalent.
:::

:::exercise {eip-id1688476} type=problems-exercises 
PROBLEM:
What is the strength of the electric field between two parallel conducting plates separated by 1.00 cm and having a potential difference (voltage) between them of $1\text{.}\text{50}\times {\text{10}}^{4}\;V$?
:::

:::exercise {fs-id2635926} type=problems-exercises 
PROBLEM:
The electric field strength between two parallel conducting plates separated by 4.00 cm is $7\text{.}\text{50}×{\text{10}}^{4}\;\text{V/m}$. (a) What is the potential difference between the plates? (b) The plate with the lowest potential is taken to be at zero volts. What is the potential 1.00 cm from that plate (and 3.00 cm from the other)?
SOLUTION:
(a) $3\text{.}\text{00 kV}$
(b) $\text{750 V}$
:::

:::exercise {fs-id2749816} type=problems-exercises 
PROBLEM:
How far apart are two conducting plates that have an electric field strength of $4\text{.}\text{50}\times {\text{10}}^{3}\;\text{V/m}$ between them, if their potential difference is 15.0 kV?
:::

:::exercise {fs-id2956436} type=problems-exercises 
PROBLEM:
(a) Will the electric field strength between two parallel conducting plates exceed the breakdown strength for air ($3.0\times {\text{10}}^{6}\;\text{V/m}$) if the plates are separated by 2.00 mm and a potential difference of $5.0\times {\text{10}}^{3}\;\text{V}$ is applied? (b) How close together can the plates be with this applied voltage?
SOLUTION:
(a) No. The electric field strength between the plates is $2.5\times {\text{10}}^{6}\;\text{V/m,}$ which is lower than the breakdown strength for air ($3.0\times {\text{10}}^{6}\;\text{V/m}$).
(b) 1.7 mm
:::

:::exercise {fs-id1956925} type=problems-exercises 
PROBLEM:
The voltage across a membrane forming a cell wall is 80.0 mV and the membrane is 9.00 nm thick. What is the electric field strength? (The value is surprisingly large, but correct. Membranes are discussed in [Capacitors and Dielectrics](module:m42333) and [Nerve Conduction—Electrocardiograms](module:m42352).) You may assume a uniform electric field.
:::

:::exercise {fs-id2573954} type=problems-exercises 
PROBLEM:
Membrane walls of living cells have surprisingly large electric fields across them due to separation of ions. (Membranes are discussed in some detail in [Nerve Conduction—Electrocardiograms](module:m42352).) What is the voltage across an 8.00 nm–thick membrane if the electric field strength across it is 5.50 MV/m? You may assume a uniform electric field.
SOLUTION:
44.0 mV
:::

:::exercise {fs-id1636534} type=problems-exercises 
PROBLEM:
Two parallel conducting plates are separated by 10.0 cm, and one of them is taken to be at zero volts. (a) What is the electric field strength between them, if the potential 8.00 cm from the zero volt plate (and 2.00 cm from the other) is 450 V? (b) What is the voltage between the plates?
:::

:::exercise {fs-id2705714} type=problems-exercises 
PROBLEM:
Find the maximum potential difference between two parallel conducting plates separated by 0.500 cm of air, given the maximum sustainable electric field strength in air to be $3.0\times {\text{10}}^{6}\;\text{V/m}$.
SOLUTION:
$\text{15 kV}$
:::

:::exercise {fs-id1563009} type=problems-exercises 
PROBLEM:
A doubly charged ion is accelerated to an energy of 32.0 keV by the electric field between two parallel conducting plates separated by 2.00 cm. What is the electric field strength between the plates?
:::

:::exercise {fs-id1948894} type=problems-exercises 
PROBLEM:
An electron is to be accelerated in a uniform electric field having a strength of $2\text{.}\text{00}\times {\text{10}}^{6}\;\text{V/m}$. (a) What energy in keV is given to the electron if it is accelerated through 0.400 m? (b) Over what distance would it have to be accelerated to increase its energy by 50.0 GeV?
SOLUTION:
(a) $\text{800 KeV}$
(b) $\text{25.0 km}$
:::

## Glossary
- {def} **scalar**: physical quantity with magnitude but no direction
- {def} **vector**: physical quantity with both magnitude and direction

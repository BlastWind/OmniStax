# Resistance and Resistivity

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain the concept of resistivity.
- Use resistivity to calculate the resistance of specified configurations of material.
- Use the thermal coefficient of resistivity to calculate the change of resistance with temperature.

## Material and Shape Dependence of Resistance
The resistance of an object depends on its shape and the material of which it is composed. The cylindrical resistor in [ref:import-auto-id1351234] is easy to analyze, and, by so doing, we can gain insight into the resistance of more complicated shapes. As you might expect, the cylinder’s electric resistance $R$ is directly proportional to its length $L$, similar to the resistance of a pipe to fluid flow. The longer the cylinder, the more collisions charges will make with its atoms. The greater the diameter of the cylinder, the more current it can carry (again similar to the flow of fluid through a pipe). In fact, $R$ is inversely proportional to the cylinder’s cross-sectional area $A$.

> FIGURE {fig:import-auto-id1351234} src=../../media/Figure_21_03_01a.jpg
> alt: A cylindrical conductor of length L and cross section A is shown. The resistivity of the cylindrical section is represented as rho. The resistance of this cross section R is equal to rho L divided by A. The section of length L of cylindrical conductor is shown equivalent to a resistor represented by symbol R.
> width: 225
> caption: A uniform cylinder of length $L$ and cross-sectional area $A$. Its resistance to the flow of current is similar to the resistance posed by a pipe to fluid flow. The longer the cylinder, the greater its resistance. The larger its cross-sectional area $A$, the smaller its resistance.

For a given shape, the resistance depends on the material of which the object is composed. Different materials offer different resistance to the flow of charge. We define the {term:resistivity} $ρ$ of a substance so that the **resistance** $R$ of an object is directly proportional to $ρ$. Resistivity $ρ$ is an *intrinsic* property of a material, independent of its shape or size. The resistance $R$ of a uniform cylinder of length $L$, of cross-sectional area $A$, and made of a material with resistivity $ρ$, is

$$ R=\frac{ρL}{A}\text{.} $$  {eq:eip-867}

[ref:import-auto-id1375921] gives representative values of $ρ$. The materials listed in the table are separated into categories of conductors, semiconductors, and insulators, based on broad groupings of resistivities. Conductors have the smallest resistivities, and insulators have the largest; semiconductors have intermediate resistivities. Conductors have varying but large free charge densities, whereas most charges in insulators are bound to atoms and are not free to move. Semiconductors are intermediate, having far fewer free charges than conductors, but having properties that make the number of free charges depend strongly on the type and amount of impurities in the semiconductor. These unique properties of semiconductors are put to use in modern electronics, as will be explored in later chapters.

> TABLE {tab:import-auto-id1375921} cols=2
> title: Resistivities        $ρ$     of Various materials at       $\text{20º}\text{C}$
> summary: Table 21_03_01

| Material | Resistivity $ρ$ **(** $Ω⋅\text{m}$ **)** |
| --- | --- |
| *Conductors* |  |
| Silver | $1\text{.}\text{59}\times {\text{10}}^{-8}$ |
| Copper | $1\text{.}\text{72}\times {\text{10}}^{-8}$ |
| Gold | $2\text{.}\text{44}\times {\text{10}}^{-8}$ |
| Aluminum | $2\text{.}\text{65}\times {\text{10}}^{-8}$ |
| Tungsten | $5\text{.}6\times {\text{10}}^{-8}$ |
| Iron | $9\text{.}\text{71}\times {\text{10}}^{-8}$ |
| Platinum | $\text{10}\text{.}6\times {\text{10}}^{-8}$ |
| Steel | $\text{20}\times {\text{10}}^{-8}$ |
| Lead | $\text{22}\times {\text{10}}^{-8}$ |
| Manganin (Cu, Mn, Ni alloy) | $\text{44}\times {\text{10}}^{-8}$ |
| Constantan (Cu, Ni alloy) | $\text{49}\times {\text{10}}^{-8}$ |
| Mercury | $\text{96}\times {\text{10}}^{-8}$ |
| Nichrome (Ni, Fe, Cr alloy) | $\text{100}\times {\text{10}}^{-8}$ |
| *Semiconductors*^[Values depend strongly on amounts and types of impurities] |  |
| Carbon (pure) | $\text{3.5}\times {\text{10}}^{–5}$ |
| Carbon | $(3.5-\text{60})\times {\text{10}}^{–5}$ |
| Germanium (pure) | $\text{600}\times {\text{10}}^{-3}$ |
| Germanium | $(1-\text{600})\times {\text{10}}^{-3}$ |
| Silicon (pure) | $\text{2300}$ |
| Silicon | $\text{0.1–2300}$ |
| *Insulators* |  |
| Amber | $5\times {\text{10}}^{\text{14}}$ |
| Glass | ${\text{10}}^{9}-{\text{10}}^{\text{14}}$ |
| Lucite | ${\text{>10}}^{\text{13}}$ |
| Mica | ${\text{10}}^{\text{11}}-{\text{10}}^{\text{15}}$ |
| Quartz (fused) | $\text{75}\times {\text{10}}^{\text{16}}$ |
| Rubber (hard) | ${\text{10}}^{\text{13}}-{\text{10}}^{\text{16}}$ |
| Sulfur | ${\text{10}}^{\text{15}}$ |
| Teflon | ${\text{>10}}^{\text{13}}$ |
| Wood | ${\text{10}}^{8}-{\text{10}}^{\text{11}}$ |

:::example {ex:fs-id2056718} Calculating Resistor Diameter: A Headlight Filament
A car headlight filament is made of tungsten and has a cold resistance of $0\text{.}\text{350}\;Ω$. If the filament is a cylinder 4.00 cm long (it may be coiled to save space), what is its diameter?
**Strategy**
We can rearrange the equation $R=\frac{ρL}{A}$ to find the cross-sectional area $A$ of the filament from the given information. Then its diameter can be found by assuming it has a circular cross-section.
**Solution**
The cross-sectional area, found by rearranging the expression for the resistance of a cylinder given in $R=\frac{ρL}{A}$, is

$$ A=\frac{ρL}{R}\text{.} $$  {eq:eip-462}

Substituting the given values, and taking $ρ$ from [ref:import-auto-id1375921], yields

$$ \begin{array}{lll}A & = & \frac{(5.6×{\text{10}}^{–8}\;Ω⋅\text{m})(4.00×{\text{10}}^{–2}\;\text{m})}{\text{0.350}\;Ω} \\ & = & \text{6.40}×{\text{10}}^{–9}\;{\text{m}}^{2}\text{.}\end{array} $$  {eq:eip-614}

The area of a circle is related to its diameter $D$ by

$$ A=\frac{{πD}^{2}}{4}\text{.} $$  {eq:eip-83}

Solving for the diameter $D$, and substituting the value found for $A$, gives

$$ \begin{array}{lll}D & = & \text{2}{(\frac{A}{\pi})}^{\frac{1}{2}}=\text{2}{(\frac{6.40×{\text{10}}^{–9}\;{\text{m}}^{2}}{3.14})}^{\frac{1}{2}} \\ & = & 9.0×{\text{10}}^{–5}\;\text{m.}\end{array} $$  {eq:eip-474}

**Discussion**
The diameter is just under a tenth of a millimeter. It is quoted to only two digits, because $ρ$ is known to only two digits.
:::

## Temperature Variation of Resistance
The resistivity of all materials depends on temperature. Some even become superconductors (zero resistivity) at very low temperatures. (See [ref:import-auto-id3201924].) Conversely, the resistivity of conductors increases with increasing temperature. Since the atoms vibrate more rapidly and over larger distances at higher temperatures, the electrons moving through a metal make more collisions, effectively making the resistivity higher. Over relatively small temperature changes (about $\text{100º}\text{C}$ or less), resistivity $ρ$ varies with temperature change $\Delta T$ as expressed in the following equation

$$ ρ={ρ}_{0}(\text{1}+\alpha \Delta T)\text{,} $$  {eq:eip-981}

where ${ρ}_{0}$ is the original resistivity and $\alpha$ is the {term:temperature coefficient of resistivity}. (See the values of $\alpha$ in [ref:import-auto-id1382426] below.) For larger temperature changes, $\alpha$ may vary or a nonlinear equation may be needed to find $ρ$. Note that $\alpha$ is positive for metals, meaning their resistivity increases with temperature. Some alloys have been developed specifically to have a small temperature dependence. Manganin (which is made of copper, manganese and nickel), for example, has $\alpha$ close to zero (to three digits on the scale in [ref:import-auto-id1382426]), and so its resistivity varies only slightly with temperature. This is useful for making a temperature-independent resistance standard, for example.

> FIGURE {fig:import-auto-id3201924} src=../../media/Figure_21_03_02a.jpg
> alt: A graph for variation of resistance R with temperature T for a mercury sample is shown. The temperature T is plotted along the x axis and is measured in Kelvin, and the resistance R is plotted along the y axis and is measured in ohms. The curve starts at x equals zero and y equals zero, and coincides with the X axis until the value of temperature is four point two Kelvin, known as the critical temperature T sub c. At temperature T sub c, the curve shows a vertical rise, represented by a dotted line, until the resistance is about zero point one one ohms. After this temperature the resistance shows a nearly linear increase with temperature T.
> width: 200
> caption: The resistance of a sample of mercury is zero at very low temperatures—it is a superconductor up to about 4.2 K. Above that critical temperature, its resistance makes a sudden jump and then increases nearly linearly with temperature.

> TABLE {tab:import-auto-id1382426} cols=2 irregular
> title: Tempature Coefficients of Resistivity   $\alpha$
> summary: Table 21_03_02

| Material | Coefficient $\alpha$(1/°C)^[Values at  20°C.] |
| {span=2} *Conductors* |
| Silver | $3\text{.}8\times {\text{10}}^{-3}$ |
| Copper | $3\text{.}9\times {\text{10}}^{-3}$ |
| Gold | $3\text{.}4\times {\text{10}}^{-3}$ |
| Aluminum | $3\text{.}9\times {\text{10}}^{-3}$ |
| Tungsten | $4\text{.}5\times {\text{10}}^{-3}$ |
| Iron | $5\text{.}0\times {\text{10}}^{-3}$ |
| Platinum | $3\text{.}\text{93}\times {\text{10}}^{-3}$ |
| Lead | $3\text{.}9\times {\text{10}}^{-3}$ |
| Manganin (Cu, Mn, Ni alloy) | $0\text{.}\text{000}\times {\text{10}}^{-3}$ |
| Constantan (Cu, Ni alloy) | $0\text{.}\text{002}\times {\text{10}}^{-3}$ |
| Mercury | $0\text{.}\text{89}\times {\text{10}}^{-3}$ |
| Nichrome (Ni, Fe, Cr alloy) | $0\text{.}4\times {\text{10}}^{-3}$ |
| {span=2} *Semiconductors* |
| Carbon (pure) | $-0\text{.}5\times {\text{10}}^{-3}$ |
| Germanium (pure) | $-\text{50}\times {\text{10}}^{-3}$ |
| Silicon (pure) | $-\text{70}\times {\text{10}}^{-3}$ |

Note also that $\alpha$ is negative for the semiconductors listed in [ref:import-auto-id1382426], meaning that their resistivity decreases with increasing temperature. They become better conductors at higher temperature, because increased thermal agitation increases the number of free charges available to carry current. This property of decreasing $ρ$ with temperature is also related to the type and amount of impurities present in the semiconductors.
The resistance of an object also depends on temperature, since ${R}_{0}$ is directly proportional to $ρ$. For a cylinder we know $R=ρL/A$, and so, if $L$ and $A$ do not change greatly with temperature, $R$ will have the same temperature dependence as $ρ$. (Examination of the coefficients of linear expansion shows them to be about two orders of magnitude less than typical temperature coefficients of resistivity, and so the effect of temperature on $L$ and $A$ is about two orders of magnitude less than on $ρ$.) Thus,

$$ R={R}_{0}(\text{1}+\alpha \Delta T) $$  {eq:eip-145}

is the temperature dependence of the resistance of an object, where ${R}_{0}$ is the original resistance and $R$ is the resistance after a temperature change $\Delta T$. Numerous thermometers are based on the effect of temperature on resistance. (See [ref:import-auto-id1568367].) One of the most common is the thermistor, a semiconductor crystal with a strong temperature dependence, the resistance of which is measured to obtain its temperature. The device is small, so that it quickly comes into thermal equilibrium with the part of a person it touches.

> FIGURE {fig:import-auto-id1568367} src=../../media/Figure_21_03_03a.jpg
> alt: A photograph showing two digital thermometers used for measuring body temperature.
> width: 250
> caption: These familiar thermometers are based on the automated measurement of a thermistor’s temperature-dependent resistance. (credit: Biol, Wikimedia Commons)

:::example {ex:fs-id1889050} Calculating Resistance: Hot-Filament Resistance
Although caution must be used in applying $ρ={ρ}_{0}(\text{1}+\alpha \Delta T)$ and $R={R}_{0}(\text{1}+\alpha \Delta T)$ for temperature changes greater than $\text{100º}\text{C}$, for tungsten the equations work reasonably well for very large temperature changes. What, then, is the resistance of the tungsten filament in the previous example if its temperature is increased from room temperature ($\text{20ºC}$) to a typical operating temperature of $\text{2850º}\text{C}$?
**Strategy**
This is a straightforward application of $R={R}_{0}(\text{1}+\alpha \Delta T)$, since the original resistance of the filament was given to be ${R}_{0}=0\text{.}\text{350 Ω}$, and the temperature change is $\Delta T=\text{2830º}\text{C}$.
**Solution**
The hot resistance $R$ is obtained by entering known values into the above equation:

$$ \begin{array}{lll}R & = & {R}_{0}(1+\alpha \Delta T) \\ & = & (0\text{.}\text{350 Ω})[\text{1}+(4.5×{\text{10}}^{–3}/\text{ºC})(\text{2830º}\text{C})] \\ & = & \text{4.8 Ω.}\end{array} $$  {eq:eip-256}

**Discussion**
This value is consistent with the headlight resistance example in [Ohm’s Law: Resistance and Simple Circuits](module:m42344).
:::

:::note [interactive] Resistance in a Wire

Learn about the physics of resistance in a wire. Change its resistivity, length, and area to see how they affect the wire's resistance. The sizes of the symbols in the equation change along with the diagram of a wire.

> IMAGE {img:} src=
> alt: atoms_isotopes

:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1973763} type=ap-test-prep 
PROBLEM:
Which of the following affect the resistivity of a wire?
a. length
b. area of cross section
c. material
d. all of the above
:::

:::exercise {fs-id2856008} type=ap-test-prep 
PROBLEM:
The lengths and diameters of four wires are given as shown.

> FIGURE {fig:fs-id2856016} src=../../media/CNX_APPhysics_20_M3_S03_img.jpg
> alt: The figure shows four cylinders representing sections of wire. The length and diameter of the wires are indicated graphically and with labels below. The wires labeled 2L are the same length and twice as long as the wires labeled L. The wires labeled 2D are twice as thick as the wires labeled D. Wire 1: 2L, D (long, thin). Wire 2: L, D (short, thin). Wire 3: 2L, 2D (long, thick). Wire 4: L, 2D (short, thick).
> caption: 

If the four wires are made from the same material, which of the following is true? Select *two* answers.
a. Resistance of Wire 3 > Resistance of Wire 2
b. Resistance of Wire 1 > Resistance of Wire 2
c. Resistance of Wire 1 < Resistance of Wire 4
d. Resistance of Wire 4 < Resistance of Wire 3
SOLUTION:
(b), (d)
:::

:::exercise {fs-id1981700} type=ap-test-prep 
PROBLEM:
Suppose the resistance of a wire is *R* Ω. What will be the resistance of another wire of the same material having the same length but double the diameter?
a. *R*/2
b. 2*R*
c. *R*/4
d. 4*R*
:::

:::exercise {fs-id1742954} type=ap-test-prep 
PROBLEM:
The resistances of two wires having the same lengths and cross section areas are 3 Ω and 11 Ω. If the resistivity of the 3 Ω wire is 2.65 × 10<sup>−8</sup> Ω∙m, find the resistivity of the 1 Ω wire.
SOLUTION:
9.72 × 10<sup>−8</sup> Ω∙m
:::

:::exercise {fs-id2387820} type=ap-test-prep 
PROBLEM:
The lengths and diameters of three wires are given below. If they all have the same resistance, find the ratio of their resistivities.

> TABLE {tab:fs-id2161493} cols=3
> summary: The table has three columns labeled Wire, Length, and Diameter. The rows underneath the columns show Wire 1, 2m length, 1 cm diameter; Wire 2, 1 m length, 0.5 cm diameter; and Wire 3, 1m length, 1 cm diameter.

|  |  |  |
| --- | --- | --- |
| *Wire* | *Length* | *Diameter* |
| Wire 1 | 2 m | 1 cm |
| Wire 2 | 1 m | 0.5 cm |
| Wire 3 | 1 m | 1 cm |

:::

:::exercise {fs-id2595784} type=ap-test-prep 
PROBLEM:
Suppose the resistance of a wire is 2 Ω. If the wire is stretched to three times its length, what will be its resistance? Assume that the volume does not change.
SOLUTION:
18 Ω
:::

## Section Summary {section:section-summary}
- The resistance $R$ of a cylinder of length $L$ and cross-sectional area $A$ is $R=\frac{ρL}{A}$, where $ρ$ is the resistivity of the material.
- Values of $ρ$ in [ref:import-auto-id1375921] show that materials fall into three groups—*conductors, semiconductors, and insulators*.
- Temperature affects resistivity; for relatively small temperature changes $\Delta T$, resistivity is $ρ={ρ}_{0}(\text{1}+\alpha \Delta T)$, where ${ρ}_{0}$ is the original resistivity and $\alpha$  is the temperature coefficient of resistivity.
- [ref:import-auto-id1382426] gives values for $\alpha$, the temperature coefficient of resistivity.
- The resistance $R$ of an object also varies with temperature: $R={R}_{0}(\text{1}+\alpha \Delta T)$, where ${R}_{0}$ is the original resistance, and $R$  is the resistance after the temperature change.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2446582} type=conceptual-questions 
PROBLEM:
In which of the three semiconducting materials listed in [ref:import-auto-id1375921] do impurities supply free charges? (Hint: Examine the range of resistivity for each and determine whether the pure semiconductor has the higher or lower conductivity.)
:::

:::exercise {fs-id1575560} type=conceptual-questions 
PROBLEM:
Does the resistance of an object depend on the path current takes through it? Consider, for example, a rectangular bar—is its resistance the same along its length as across its width? (See [ref:import-auto-id1435027].)

> FIGURE {fig:import-auto-id1435027} src=../../media/Figure_21_03_04a.jpg
> alt: Part a of the figure shows a voltage V applied along the length of a rectangular bar using a battery. The current is shown to emerge from the positive terminal, pass along the length of the rectangular bar, and enter the negative terminal of the battery. The resistance of the rectangular bar along the length is shown as R and the current is shown as I. Part b of the figure shows a voltage V applied along the width of the same rectangular bar using a battery. The current is shown to emerge from the positive terminal, pass along the width of the rectangular bar, and enter the negative terminal of the battery. The resistance of the rectangular bar along the width is shown as R prime, and the current is shown as I prime.
> width: 325
> caption: Does current taking two different paths through the same object encounter different resistance?

:::

:::exercise {fs-id2452298} type=conceptual-questions 
PROBLEM:
If aluminum and copper wires of the same length have the same resistance, which has the larger diameter? Why?
:::

:::exercise {fs-id1404656} type=conceptual-questions 
PROBLEM:
Explain why $R={R}_{0}(\text{1}+\alpha \Delta T)$ for the temperature variation of the resistance $R$ of an object is not as accurate as $ρ={ρ}_{0}(\text{1}+\alpha \Delta T)$, which gives the temperature variation of resistivity $ρ$.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id2442974} type=problems-exercises 
PROBLEM:
What is the resistance of a 20.0-m-long piece of 12-gauge copper wire having a 2.053-mm diameter?
SOLUTION:
$\text{0.104 Ω}$
:::

:::exercise {fs-id1871839} type=problems-exercises 
PROBLEM:
The diameter of 0-gauge copper wire is 8.252 mm. Find the resistance of a 1.00-km length of such wire used for power transmission.
:::

:::exercise {fs-id2668793} type=problems-exercises 
PROBLEM:
If the 0.010-mm diameter tungsten filament in a light bulb is to have a resistance of $\text{0.200 Ω}$ at $20.00º\text{C}$, how long should it be?
SOLUTION:
$2.81×{\text{10}}^{-4}\;\text{m}$
:::

:::exercise {fs-id3286438} type=problems-exercises 
PROBLEM:
Find the ratio of the diameter of aluminum to copper wire, if they have the same resistance per unit length (as they might in household wiring).
:::

:::exercise {fs-id2396605} type=problems-exercises 
PROBLEM:
What current flows through a 2.54-cm-diameter rod of pure silicon that is 20.0 cm long, when ${1.00 × 10}^{\text{3}}\;\text{V}$ is applied to it? (Such a rod may be used to make nuclear-particle detectors, for example.)
SOLUTION:
$1.10×{\text{10}}^{-3}\;\text{A}$
:::

:::exercise {fs-id3402655} type=problems-exercises 
PROBLEM:
(a) To what temperature must you raise a copper wire, originally at $\text{20.0ºC}$, to double its resistance, neglecting any changes in dimensions? (b) Does this happen in household wiring under ordinary circumstances?
:::

:::exercise {fs-id2681436} type=problems-exercises 
PROBLEM:
A resistor made of Nichrome wire is used in an application where its resistance cannot change more than 1.00% from its value at $\text{20}\text{.}0º\text{C}$. Over what temperature range can it be used?
SOLUTION:
$-5º\text{C to 45ºC}$
:::

:::exercise {fs-id3449589} type=problems-exercises 
PROBLEM:
Of what material is a resistor made if its resistance is 40.0% greater at $\text{100º}\text{C}$ than at $\text{20}\text{.}0º\text{C}$?
:::

:::exercise {fs-id3201853} type=problems-exercises 
PROBLEM:
An electronic device designed to operate at any temperature in the range from $\text{–10}\text{.}0º\text{C to 55}\text{.}0º\text{C}$ contains pure carbon resistors. By what factor does their resistance increase over this range?
SOLUTION:
1.03
:::

:::exercise {fs-id1973609} type=problems-exercises 
PROBLEM:
(a) Of what material is a wire made, if it is 25.0 m long with a 0.100 mm diameter and has a resistance of $\text{77}\text{.}7\;Ω$ at $\text{20}\text{.}0º\text{C}$? (b) What is its resistance at $\text{150º}\text{C}$?
:::

:::exercise {fs-id3103900} type=problems-exercises 
PROBLEM:
Assuming a constant temperature coefficient of resistivity, what is the maximum percent decrease in the resistance of a constantan wire starting at $\text{20}\text{.}0º\text{C}$?
SOLUTION:
0.06%
:::

:::exercise {fs-id3110369} type=problems-exercises 
PROBLEM:
A wire is drawn through a die, stretching it to four times its original length. By what factor does its resistance increase?
:::

:::exercise {fs-id2448773} type=problems-exercises 
PROBLEM:
A copper wire has a resistance of $0\text{.}\text{500}\;Ω$ at $\text{20}\text{.}0º\text{C}$, and an iron wire has a resistance of $0\text{.}\text{525}\;Ω$ at the same temperature. At what temperature are their resistances equal?
SOLUTION:
$-\text{17º}\text{C}$
:::

:::exercise {fs-id2382175} type=problems-exercises 
PROBLEM:
(a) Digital medical thermometers determine temperature by measuring the resistance of a semiconductor device called a thermistor (which has $\alpha =-0\text{.}\text{0600}/\text{ºC}$) when it is at the same temperature as the patient. What is a patient’s temperature if the thermistor’s resistance at that temperature is 82.0% of its value at $\text{37}\text{.}0º\text{C}$ (normal body temperature)? (b) The negative value for $\alpha$ may not be maintained for very high temperatures. Discuss why and whether this is the case here. (Hint: Resistance can’t become negative.)
:::

:::exercise {fs-id3189568} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) Redo [ref:fs-id1871839] taking into account the thermal expansion of the tungsten filament. You may assume a thermal expansion coefficient of $\text{12}×{\text{10}}^{-6}/\text{ºC}$. (b) By what percentage does your answer differ from that in the example?
SOLUTION:
(a) $4\text{.}7\;Ω$ (total)
(b) 3.0% decrease
:::

:::exercise {fs-id2415615} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) To what temperature must you raise a resistor made of constantan to double its resistance, assuming a constant temperature coefficient of resistivity? (b) To cut it in half? (c) What is unreasonable about these results? (d) Which assumptions are unreasonable, or which premises are inconsistent?
:::

## Glossary
- {def} **resistivity**: an intrinsic property of a material, independent of its shape or size, directly proportional to the resistance, denoted by *ρ*
- {def} **temperature coefficient of resistivity**: an empirical quantity, denoted by *α*, which describes the change in resistance or resistivity of a material with temperature

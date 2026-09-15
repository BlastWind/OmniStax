# Ohm’s Law: Resistance and Simple Circuits

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain the origin of Ohm’s law.
- Calculate voltages, currents, or resistances with Ohm’s law.
- Explain what an ohmic material is.
- Describe a simple circuit.
What drives current? We can think of various devices—such as batteries, generators, wall outlets, and so on—which are necessary to maintain a current. All such devices create a potential difference and are loosely referred to as voltage sources. When a voltage source is connected to a conductor, it applies a potential difference $V$ that creates an electric field. The electric field in turn exerts force on charges, causing current.

## Ohm’s Law
The current that flows through most substances is directly proportional to the voltage $V$ applied to it. The German physicist Georg Simon Ohm (1787–1854) was the first to demonstrate experimentally that the current in a metal wire is *directly proportional to the voltage applied*:

$$ I\propto V\text{.} $$  {eq:eip-103}

This important relationship is known as {term:Ohm’s law}. It can be viewed as a cause-and-effect relationship, with voltage the cause and current the effect. This is an empirical law like that for friction—an experimentally observed phenomenon. Such a linear relationship doesn’t always occur.

## Resistance and Simple Circuits
If voltage drives current, what impedes it? The electric property that impedes current (crudely similar to friction and air resistance) is called {term:resistance} $R$. Collisions of moving charges with atoms and molecules in a substance transfer energy to the substance and limit current. Resistance is defined as inversely proportional to current, or

$$ I\propto \frac{1}{R}\text{.} $$  {eq:eip-593}

Thus, for example, current is cut in half if resistance doubles. Combining the relationships of current to voltage and current to resistance gives

$$ I=\frac{V}{R}\text{.} $$  {eq:eip-218}

This relationship is also called Ohm’s law. Ohm’s law in this form really defines resistance for certain materials. Ohm’s law (like Hooke’s law) is not universally valid. The many substances for which Ohm’s law holds are called {term:ohmic}. These include good conductors like copper and aluminum, and some poor conductors under certain circumstances. Ohmic materials have a resistance $R$ that is independent of voltage $V$ and current $I$. An object that has simple resistance is called a *resistor*, even if its resistance is small. The unit for resistance is an {term:ohm} and is given the symbol $Ω$ (upper case Greek omega). Rearranging $I=\text{V/R}$ gives $R=\text{V/I}$, and so the units of resistance are 1 ohm = 1 volt per ampere:

$$ \text{1 Ω}=\text{1}\frac{V}{A}\text{.} $$  {eq:eip-702}

[ref:import-auto-id1170614065419] shows the schematic for a simple circuit. A {term:simple circuit} has a single voltage source and a single resistor. The wires connecting the voltage source to the resistor can be assumed to have negligible resistance, or their resistance can be included in $R$.

> FIGURE {fig:import-auto-id1170614065419} src=../../media/Figure_21_02_01a.jpg
> alt: The figure describes a simple electric circuit with a battery connected to a resistance R. The direction of current is shown to emerge from the positive terminal of a battery of voltage V, pass through the resistor, and enter the negative terminal of the battery. The current I in the circuit is V divided by R, moving in a clockwise direction.
> width: 225
> caption: A simple electric circuit in which a closed path for current to flow is supplied by conductors (usually metal wires) connecting a load to the terminals of a battery, represented by the red parallel lines. The zigzag symbol represents the single resistor and includes any resistance in the connections to the voltage source.

:::example {ex:fs-id3120142} Calculating Resistance: An Automobile Headlight
What is the resistance of an automobile headlight through which 2.50 A flows when 12.0 V is applied to it?
**Strategy**
We can rearrange Ohm’s law as stated by $I=\text{V/R}$ and use it to find the resistance.
**Solution**
Rearranging $I=\text{V/R}$ and substituting known values gives

$$ R=\frac{V}{I}=\frac{\text{12}\text{.}\text{0 V}}{2\text{.}\text{50 A}}=\text{4}\text{.}\text{80 Ω}\text{.} $$  {eq:eip-77}

**Discussion**
This is a relatively small resistance, but it is larger than the cold resistance of the headlight. As we shall see in [Resistance and Resistivity](module:m42346), resistance usually increases with temperature, and so the bulb has a lower resistance when it is first switched on and will draw considerably more current during its brief warm-up period.
:::
Resistances range over many orders of magnitude. Some ceramic insulators, such as those used to support power lines, have resistances of ${\text{10}}^{\text{12}}\;Ω$ or more. A dry person may have a hand-to-foot resistance of ${\text{10}}^{5}\;Ω$, whereas the resistance of the human heart is about ${\text{10}}^{3}\;Ω$. A meter-long piece of large-diameter copper wire may have a resistance of ${\text{10}}^{-5}\;Ω$, and superconductors have no resistance at all (they are non-ohmic). Resistance is related to the shape of an object and the material of which it is composed, as will be seen in [Resistance and Resistivity](module:m42346).
Additional insight is gained by solving $I=\text{V/R}$ for $V,\;$ yielding

$$ V=\text{IR.} $$  {eq:eip-486}

This expression for $V$ can be interpreted as the *voltage drop across a resistor produced by the flow of current*$I$. The phrase $\text{IR}$ *drop* is often used for this voltage. For instance, the headlight in [ref:fs-id3120142] has an $\text{IR}$ drop of 12.0 V. If voltage is measured at various points in a circuit, it will be seen to increase at the voltage source and decrease at the resistor. Voltage is similar to fluid pressure. The voltage source is like a pump, creating a pressure difference, causing current—the flow of charge. The resistor is like a pipe that reduces pressure and limits flow because of its resistance. Conservation of energy has important consequences here. The voltage source supplies energy (causing an electric field and a current), and the resistor converts it to another form (such as thermal energy). In a simple circuit (one with a single simple resistor), the voltage supplied by the source equals the voltage drop across the resistor, since $\text{PE}=q\Delta V$, and the same $q$ flows through each. Thus the energy supplied by the voltage source and the energy converted by the resistor are equal. (See [ref:import-auto-id1170614044913].)

> FIGURE {fig:import-auto-id1170614044913} src=../../media/Figure_21_02_02a.jpg
> alt: The figure shows a simple electric circuit. A battery is connected to a resistor with resistance R, and a voltmeter is connected across the resistor. The direction of current is shown to emerge from the positive terminal of the battery of voltage V, pass through the resistor, and enter the negative terminal of the battery, in a clockwise direction. The voltage V in the circuit equals I R, which equals 18 volts.
> width: 300
> caption: The voltage drop across a resistor in a simple circuit equals the voltage output of the battery.

:::note [interactive] Making Connections: Conservation of Energy

In a simple electrical circuit, the sole resistor converts energy supplied by the source into another form. Conservation of energy is evidenced here by the fact that all of the energy supplied by the source is converted to another form by the resistor alone. We will find that conservation of energy has other important applications in circuits and is a powerful tool in circuit analysis.
:::

:::note [interactive] Ohm's Law

See how the equation form of Ohm's law relates to a simple circuit. Adjust the voltage and resistance, and see the current change according to Ohm's law. The sizes of the symbols in the equation change to match the circuit diagram.

> IMAGE {img:} src=
> alt: atoms_isotopes

:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2556054} type=ap-test-prep 
PROBLEM:
If the voltage across a fixed resistance is doubled, what happens to the current?
(a) It doubles.
(b) It halves.
(c) It stays the same.
(d) The current cannot be determined.
SOLUTION:
(a)
:::

:::exercise {fs-id2382064} type=ap-test-prep 
PROBLEM:
The table below gives the voltages and currents recorded across a resistor.

> TABLE {tab:fs-id1532059} cols=6
> summary: The table has two rows and six columns. The first row is labeled Voltage (V) with the following vales: 2.50, 5.00, 7.50, 10.00, and 12.50. The second row of the table is labeled Current (A) with the following values; 0.69, 1.38, 2.09, 2.76, and 3.49.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Voltage (V) | 2.50 | 5.00 | 7.50 | 10.00 | 12.50 |
| Current (A) | 0.69 | 1.38 | 2.09 | 2.76 | 3.49 |

(a) Plot the graph and comment on the shape.
(b) Calculate the value of the resistor.
:::

:::exercise {fs-id2314598} type=ap-test-prep 
PROBLEM:
What is the resistance of a bulb if the current in it is 1.25 A when a 4 V voltage supply is connected to it? If the voltage supply is increased to 7 V, what will be the current in the bulb?
SOLUTION:
3.2 Ω, 2.19 A
:::

## Section Summary {section:section-summary}
- A simple circuit *is* one in which there is a single voltage source and a single resistance.
- One statement of Ohm’s law gives the relationship between current
$I$,
voltage
$V$,
and resistance
$R$
in a simple circuit to be
$I=\frac{V}{R}.$
- Resistance has units of ohms ($\text{Ω}$), related to volts and amperes by $1 Ω=\text{1 V/A}$.
- There is a voltage or $\text{IR}$ drop across a resistor, caused by the current flowing through it, given by $V=\text{IR}$.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3008822} type=conceptual-questions 
PROBLEM:
The $\text{IR}$ drop across a resistor means that there is a change in potential or voltage across the resistor. Is there any change in current as it passes through a resistor? Explain.
:::

:::exercise {fs-id2392111} type=conceptual-questions 
PROBLEM:
How is the $\text{IR}$ drop in a resistor similar to the pressure drop in a fluid flowing through a pipe?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id3045633} type=problems-exercises 
PROBLEM:
What current flows through the bulb of a 3.00-V flashlight when its hot resistance is $3\text{.}\text{60 Ω}$?
SOLUTION:
0.833 A
:::

:::exercise {fs-id3154491} type=problems-exercises 
PROBLEM:
Calculate the effective resistance of a pocket calculator that has a 1.35-V battery and through which 0.200 mA flows.
:::

:::exercise {fs-id3172806} type=problems-exercises 
PROBLEM:
What is the effective resistance of a car’s starter motor when 150 A flows through it as the car battery applies 11.0 V to the motor?
SOLUTION:
$7\text{.}\text{33}×{\text{10}}^{-2}\;Ω$
:::

:::exercise {fs-id2407750} type=problems-exercises 
PROBLEM:
How many volts are supplied to operate an indicator light on a DVD player that has a resistance of $1\text{40}\;Ω$, given that 25.0 mA passes through it?
:::

:::exercise {fs-id2930974} type=problems-exercises 
PROBLEM:
(a) Find the voltage drop in an extension cord having a $0\text{.}\text{0600-}Ω$ resistance and through which 5.00 A is flowing. (b) A cheaper cord utilizes thinner wire and has a resistance of $0\text{.}\text{300}\;Ω$. What is the voltage drop in it when 5.00 A flows? (c) Why is the voltage to whatever appliance is being used reduced by this amount? What is the effect on the appliance?
SOLUTION:
(a) 0.300 V
(b) 1.50 V
(c) The voltage supplied to whatever appliance is being used is reduced because the total voltage drop from the wall to the final output of the appliance is fixed. Thus, if the voltage drop across the extension cord is large, the voltage drop across the appliance is significantly decreased, so the power output by the appliance can be significantly decreased, reducing the ability of the appliance to work properly.
:::

:::exercise {fs-id1375943} type=problems-exercises 
PROBLEM:
A power transmission line is hung from metal towers with glass insulators having a resistance of $1\text{.}\text{00}×{\text{10}}^{9}\;Ω.$ What current flows through the insulator if the voltage is 200 kV? (Some high-voltage lines are DC.)
:::

## Glossary
- {def} **Ohm’s law**: an empirical relation stating that the current *I* is proportional to the potential difference *V*, *∝ V*; it is often written as *I = V/R*, where *R* is the resistance
- {def} **resistance**: the electric property that impedes current; for ohmic materials, it is the ratio of voltage to current, *R = V/I*
- {def} **ohm**: the unit of resistance, given by 1Ω = 1 V/A
- {def} **ohmic**: a type of a material for which Ohm's law is valid
- {def} **simple circuit**: a circuit with a single voltage source and a single resistor

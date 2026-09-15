# DC Voltmeters and Ammeters

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain why a voltmeter must be connected in parallel with the circuit.
- Draw a diagram showing an ammeter correctly connected in a circuit.
- Describe how a galvanometer can be used as either a voltmeter or an ammeter.
- Find the resistance that must be placed in series with a galvanometer to allow it to be used as a voltmeter with a given reading.
- Explain why measuring the voltage or current in a circuit can never be exact.
{term:Voltmeters} measure voltage, whereas {term:ammeters} measure current. Some of the meters in automobile dashboards, digital cameras, cell phones, and tuner-amplifiers are voltmeters or ammeters. (See [ref:import-auto-id2654311].) The internal construction of the simplest of these meters and how they are connected to the system they monitor give further insight into applications of series and parallel connections.

> FIGURE {fig:import-auto-id2654311} src=../../media/Figure_22_04_01.jpg
> alt: This photograph shows the instruments on a gray Volkswagen Vento dashboard, including the speedometer, odometer, and fuel and temperature gauges, showing some readings.
> width: 250
> caption: The fuel and temperature gauges (far right and far left, respectively) in this 1996 Volkswagen are voltmeters that register the voltage output of “sender” units, which are hopefully proportional to the amount of gasoline in the tank and the engine temperature. (credit: Christian Giersing)

Voltmeters are connected in parallel with whatever device’s voltage is to be measured. A parallel connection is used because objects in parallel experience the same potential difference. (See [ref:import-auto-id1934441], where the voltmeter is represented by the symbol V.)
Ammeters are connected in series with whatever device’s current is to be measured. A series connection is used because objects in series have the same current passing through them. (See [ref:import-auto-id2692802], where the ammeter is represented by the symbol A.)

> FIGURE {fig:import-auto-id1934441} src=../../media/Figure_22_04_02-ea56.jpg
> alt: Part a shows a schematic drawing of a circuit with a voltage source and its internal resistance, in series with two load resistors R sub one and R sub two having two probes of a voltmeter connected in parallel with each component. There is another resistor in series to close the circuit. Part b shows a photograph of a black voltmeter connected to two inputs on an electrical device, with a digital readout of the voltage across the source as an L E D display.
> width: 275
> caption: (a) To measure potential differences in this series circuit, the voltmeter (V) is placed in parallel with the voltage source or either of the resistors. Note that terminal voltage is measured between points a and b. It is not possible to connect the voltmeter directly across the emf without including its internal resistance, $r$. (b) A digital voltmeter in use. (credit: Messtechniker, Wikimedia Commons)

> FIGURE {fig:import-auto-id2692802} src=../../media/Figure_22_04_03.jpg
> alt: The diagram of an electric circuit shows a voltage source of e m f script E and internal resistance r and two resistive loads R sub one and R sub two. All are connected in series with an ammeter A.
> width: 200
> caption: An ammeter (A) is placed in series to measure current. All of the current in this circuit flows through the meter. The ammeter would have the same reading if located between points d and e or between points f and a as it does in the position shown. (Note that the script capital E stands for emf, and $r$  stands for the internal resistance of the source of potential difference.)

## Analog Meters: Galvanometers
{term:Analog meters} have a needle that swivels to point at numbers on a scale, as opposed to {term:digital meters}, which have numerical readouts similar to a hand-held calculator. The heart of most analog meters is a device called a {term:galvanometer}, denoted by G. Current flow through a galvanometer, ${I}_{\text{G}}$, produces a proportional needle deflection. (This deflection is due to the force of a magnetic field upon a current-carrying wire.)
The two crucial characteristics of a given galvanometer are its resistance and current sensitivity. {term:Current sensitivity} is the current that gives a {term:full-scale deflection} of the galvanometer’s needle, the maximum current that the instrument can measure. For example, a galvanometer with a current sensitivity of $\text{50}\mu \text{A}$ has a maximum deflection of its needle when $\text{50}\mu \text{A}$ flows through it, reads half-scale when $25 μA$ flows through it, and so on.
If such a galvanometer has a $2\text{5-}Ω$ resistance, then a voltage of only $V=\text{IR}=(\text{50}\mu \text{A})(\text{25 Ω})=1\text{.}\text{25 mV}$ produces a full-scale reading. By connecting resistors to this galvanometer in different ways, you can use it as either a voltmeter or ammeter that can measure a broad range of voltages or currents.

### Galvanometer as Voltmeter
[ref:import-auto-id1404084] shows how a galvanometer can be used as a voltmeter by connecting it in series with a large resistance, $R$. The value of the resistance $R$ is determined by the maximum voltage to be measured. Suppose you want 10 V to produce a full-scale deflection of a voltmeter containing a $2\text{5-Ω}$ galvanometer with a $\text{50-}\mu \text{A}$ sensitivity. Then 10 V applied to the meter must produce a current of $\text{50}\mu \text{A}$. The total resistance must be

$$ {R}_{\text{tot}}=R+r=\frac{V}{I}=\frac{\text{10}\;\text{V}}{\text{50}\mu \text{A}}=\text{200}\;\text{k}Ω, or $$  {eq:eip-227}

$$ R={R}_{\text{tot}}-r=\text{200 kΩ}-\text{25}\;Ω\approx \text{200}\;\text{k}Ω. $$  {eq:eip-474}

($R$ is so large that the galvanometer resistance, $r$, is nearly negligible.) Note that 5 V applied to this voltmeter produces a half-scale deflection by producing a $2\text{5-}\mu \text{A}$ current through the meter, and so the voltmeter’s reading is proportional to voltage as desired.
This voltmeter would not be useful for voltages less than about half a volt, because the meter deflection would be small and difficult to read accurately. For other voltage ranges, other resistances are placed in series with the galvanometer. Many meters have a choice of scales. That choice involves switching an appropriate resistance into series with the galvanometer.

> FIGURE {fig:import-auto-id1404084} src=../../media/Figure_22_04_04.jpg
> alt: The drawing shows a voltmeter, which is a circuit with a large resistance in series with a galvanometer, along with its internal resistance.
> width: 200
> caption: A large resistance $R$ placed in series with a galvanometer G produces a voltmeter, the full-scale deflection of which depends on the choice of $R$. The larger the voltage to be measured, the larger $R$ must be. (Note that $r$  represents the internal resistance of the galvanometer.)

### Galvanometer as Ammeter
The same galvanometer can also be made into an ammeter by placing it in parallel with a small resistance $R$, often called the {term:shunt resistance}, as shown in [ref:import-auto-id2932271]. Since the shunt resistance is small, most of the current passes through it, allowing an ammeter to measure currents much greater than those producing a full-scale deflection of the galvanometer.
Suppose, for example, an ammeter is needed that gives a full-scale deflection for 1.0 A, and contains the same $2\text{5-}Ω$ galvanometer with its $\text{50-}\mu \text{A}$ sensitivity. Since $R$ and $r$ are in parallel, the voltage across them is the same.
These $\text{IR}$ drops are $\text{IR}={I}_{\text{G}}r$ so that $\text{IR}=\frac{{I}_{\text{G}}}{I}=\frac{R}{r}$. Solving for $R$, and noting that ${I}_{\text{G}}$ is $\text{50}\mu \text{A}$ and $I$ is 0.999950 A, we have

$$ R=r\frac{{I}_{\text{G}}}{I}=(\text{25}\;Ω)\frac{\text{50}\mu \text{A}}{0\text{.}\text{999950 A}}=1\text{.}\text{25}×{\text{10}}^{-3}\;Ω. $$  {eq:eip-537}

> FIGURE {fig:import-auto-id2932271} src=../../media/Figure_22_04_05.jpg
> alt: A resistance R is placed in parallel with a galvanometer G having an internal resistance r to produce an ammeter.
> width: 200
> caption: A small shunt resistance $R$ placed in parallel with a galvanometer G produces an ammeter, the full-scale deflection of which depends on the choice of $R$. The larger the current to be measured, the smaller $R$ must be. Most of the current ($I$) flowing through the meter is shunted through $R$ to protect the galvanometer.  (Note that $r$  represents the internal resistance of the galvanometer.) Ammeters may also have multiple scales for greater flexibility in application. The various scales are achieved by switching various shunt resistances in parallel with the galvanometer—the greater the maximum current to be measured, the smaller the shunt resistance must be.

## Taking Measurements Alters the Circuit
When you use a voltmeter or ammeter, you are connecting another resistor to an existing circuit and, thus, altering the circuit. Ideally, voltmeters and ammeters do not appreciably affect the circuit, but it is instructive to examine the circumstances under which they do or do not interfere.
First, consider the voltmeter, which is always placed in parallel with the device being measured. Very little current flows through the voltmeter if its resistance is a few orders of magnitude greater than the device, and so the circuit is not appreciably affected. (See [ref:import-auto-id2602156](a).) (A large resistance in parallel with a small one has a combined resistance essentially equal to the small one.) If, however, the voltmeter’s resistance is comparable to that of the device being measured, then the two in parallel have a smaller resistance, appreciably affecting the circuit. (See [ref:import-auto-id2602156](b).) The voltage across the device is not the same as when the voltmeter is out of the circuit.

> FIGURE {fig:import-auto-id2602156} src=../../media/Figure_22_04_06.jpg
> alt: Part a shows a desired case in which the resistance of a voltmeter connected in parallel with a load resistor is essentially equivalent to the resistance of the load resistor along as long as the voltmeter’s resistance is much greater than that of the load resistor. Part b shows the case when the voltmeter’s resistance is approximately the same as that of the load resistor. This case should be avoided because the effective resistance is half that of the load resistor.
> width: 400
> caption: (a) A voltmeter having a resistance much larger than the device (${R}_{\text{Voltmeter}}\text{>>}R$) with which it is in parallel produces a parallel resistance essentially the same as the device and does not appreciably affect the circuit being measured. (b) Here the voltmeter has the same resistance as the device (${R}_{\text{Voltmeter}}≅R$), so that the parallel resistance is half of what it is when the voltmeter is not connected. This is an example of a significant alteration of the circuit and is to be avoided.

An ammeter is placed in series in the branch of the circuit being measured, so that its resistance adds to that branch. Normally, the ammeter’s resistance is very small compared with the resistances of the devices in the circuit, and so the extra resistance is negligible. (See [ref:import-auto-id1927668](a).) However, if very small load resistances are involved, or if the ammeter is not as low in resistance as it should be, then the total series resistance is significantly greater, and the current in the branch being measured is reduced. (See [ref:import-auto-id1927668](b).)
A practical problem can occur if the ammeter is connected incorrectly. If it was put in parallel with the resistor to measure the current in it, you could possibly damage the meter; the low resistance of the ammeter would allow most of the current in the circuit to go through the galvanometer, and this current would be larger since the effective resistance is smaller.

> FIGURE {fig:import-auto-id1927668} src=../../media/Figure_22_04_07.jpg
> alt: The figure shows two cases in which an ammeter is connected in series with a load resistor. Part a shows the desired case in which the resistance of the ammeter is much smaller than that of the load, and the total resistance is about the same as the load resistance. Part b shows the case to be avoided in which the ammeter has a resistance about the same as the load, and the total resistance is twice that of the load resistance.
> width: 200
> caption: (a) An ammeter normally has such a small resistance that the total series resistance in the branch being measured is not appreciably increased. The circuit is essentially unaltered compared with when the ammeter is absent. (b) Here the ammeter’s resistance is the same as that of the branch, so that the total resistance is doubled and the current is half what it is without the ammeter. This significant alteration of the circuit is to be avoided.

One solution to the problem of voltmeters and ammeters interfering with the circuits being measured is to use galvanometers with greater sensitivity. This allows construction of voltmeters with greater resistance and ammeters with smaller resistance than when less sensitive galvanometers are used.
There are practical limits to galvanometer sensitivity, but it is possible to get analog meters that make measurements accurate to a few percent. Note that the inaccuracy comes from altering the circuit, not from a fault in the meter.

:::note [] Connections: Limits to Knowledge

Making a measurement alters the system being measured in a manner that produces uncertainty in the measurement. For macroscopic systems, such as the circuits discussed in this module, the alteration can usually be made negligibly small, but it cannot be eliminated entirely. For submicroscopic systems, such as atoms, nuclei, and smaller particles, measurement alters the system in a manner that cannot be made arbitrarily small. This actually limits knowledge of the system—even limiting what nature can know about itself. We shall see profound implications of this when the Heisenberg uncertainty principle is discussed in the modules on quantum mechanics.
There is another measurement technique based on drawing no current at all and, hence, not altering the circuit at all. These are called null measurements and are the topic of [Null Measurements](module:m42362). Digital meters that employ solid-state electronics and null measurements can attain accuracies of one part in ${\text{10}}^{6}$.
:::

:::exercise {eip-418} type=check-understanding Check Your Understanding

PROBLEM:
Digital meters are able to detect smaller currents than analog meters employing galvanometers. How does this explain their ability to measure voltage and current more accurately than analog meters?
SOLUTION:
Since digital meters require less current than analog meters, they alter the circuit less than analog meters. Their resistance as a voltmeter can be far greater than an analog meter, and their resistance as an ammeter can be far less than an analog meter. Consult [ref:import-auto-id1934441] and [ref:import-auto-id2692802] and their discussion in the text.
:::

:::note [interactive] Circuit Construction Kit (DC Only), Virtual Lab

Construct the circuit shown and use the simulation’s voltmeter and ammeter to measure the current in the circuit and the voltage across each component.

> IMAGE {img:} src=
> alt: atoms_isotopes

:::

## Section Summary {section:section-summary}
- Voltmeters measure voltage, and ammeters measure current.
- A voltmeter is placed in parallel with the voltage source to receive full voltage and must have a large resistance to limit its effect on the circuit.
- An ammeter is placed in series to get the full current flowing through a branch and must have a small resistance to limit its effect on the circuit.
- Both can be based on the combination of a resistor and a galvanometer, a device that gives an analog reading of current.
- Standard voltmeters and ammeters alter the circuit being measured and are thus limited in accuracy.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1390392} type=conceptual-questions 
PROBLEM:
Why should you not connect an ammeter directly across a voltage source as shown in [ref:import-auto-id2399391]? (Note that script E in the figure stands for emf.)

> FIGURE {fig:import-auto-id2399391} src=../../media/Figure_22_04_08.jpg
> alt: A circuit shows a connection of a cell of e m f script E and internal resistance r. Each terminal of the cell is connected to opposite ends of the ammeter. The circuit is closed.
> width: 200
> caption: 

:::

:::exercise {fs-id1397916} type=conceptual-questions 
PROBLEM:
Suppose you are using a multimeter (one designed to measure a range of voltages, currents, and resistances) to measure current in a circuit and you inadvertently leave it in a voltmeter mode. What effect will the meter have on the circuit? What would happen if you were measuring voltage but accidentally put the meter in the ammeter mode?
:::

:::exercise {fs-id3149558} type=conceptual-questions 
PROBLEM:
Specify the points to which you could connect a voltmeter to measure the following potential differences in [ref:import-auto-id2618382]: (a) the potential difference of the voltage source; (b) the potential difference across ${R}_{1}$; (c) across ${R}_{2}$; (d) across ${R}_{3}$; (e) across ${R}_{2}$ and ${R}_{3}$. Note that there may be more than one answer to each part.

> FIGURE {fig:import-auto-id2618382} src=../../media/Figure_22_04_09.jpg
> alt: This figure shows a circuit having a cell of e m f script E and internal resistance r connected in parallel to two arms, one arm containing resistor R sub one and a second arm containing a series of resistors R sub two and R sub three.
> width: 350
> caption: 

:::

:::exercise {fs-id1348664} type=conceptual-questions 
PROBLEM:
To measure currents in [ref:import-auto-id2618382], you would replace a wire between two points with an ammeter. Specify the points between which you would place an ammeter to measure the following: (a) the total current; (b) the current flowing through ${R}_{1}$; (c) through ${R}_{2}$; (d) through ${R}_{3}$. Note that there may be more than one answer to each part.
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id2008364} type=problems-exercises 
PROBLEM:
What is the sensitivity of the galvanometer (that is, what current gives a full-scale deflection) inside a voltmeter that has a $1\text{.}\text{00}\text{-M}Ω$ resistance on its 30.0-V scale?
SOLUTION:
$\text{30}\;μA$
:::

:::exercise {fs-id2051381} type=problems-exercises 
PROBLEM:
What is the sensitivity of the galvanometer (that is, what current gives a full-scale deflection) inside a voltmeter that has a $\text{25}\text{.}0\text{-k}Ω$ resistance on its 100-V scale?
:::

:::exercise {fs-id2660082} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in series with a $\text{25}\text{.}0-Ω$ galvanometer having a $\text{50.0}-μA$ sensitivity (the same as the one discussed in the text) to allow it to be used as a voltmeter with a 0.100-V full-scale reading.
SOLUTION:
$1\text{.}\text{98 k}Ω$
:::

:::exercise {fs-id1320313} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in series with a $\text{25}\text{.}0-Ω$ galvanometer having a $\text{50}\text{.}0-μA$ sensitivity (the same as the one discussed in the text) to allow it to be used as a voltmeter with a 3000-V full-scale reading. Include a circuit diagram with your solution.
:::

:::exercise {fs-id1216022} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in parallel with a $\text{25}\text{.}0-Ω$ galvanometer having a $\text{50}\text{.}0-μA$ sensitivity (the same as the one discussed in the text) to allow it to be used as an ammeter with a 10.0-A full-scale reading. Include a circuit diagram with your solution.
SOLUTION:

$$ 1\text{.}\text{25}×{\text{10}}^{-4}\;Ω $$  {eq:eip-id1657958}

:::

:::exercise {fs-id2407481} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in parallel with a $\text{25}\text{.}0-Ω$ galvanometer having a $\text{50}\text{.}0-μA$ sensitivity (the same as the one discussed in the text) to allow it to be used as an ammeter with a 300-mA full-scale reading.
:::

:::exercise {fs-id1389596} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in series with a $\text{10}\text{.}0-Ω$ galvanometer having a $\text{100-}\mu \text{A}$ sensitivity to allow it to be used as a voltmeter with: (a) a 300-V full-scale reading, and (b) a 0.300-V full-scale reading.
SOLUTION:
(a) $3\text{.}\text{00 M}Ω$
(b) $2\text{.}\text{99 k}Ω$
:::

:::exercise {fs-id3233387} type=problems-exercises 
PROBLEM:
Find the resistance that must be placed in parallel with a $\text{10}\text{.}0-Ω$ galvanometer having a $\text{100-}\mu \text{A}$ sensitivity to allow it to be used as an ammeter with: (a) a 20.0-A full-scale reading, and (b) a 100-mA full-scale reading.
:::

:::exercise {fs-id1931391} type=problems-exercises 
PROBLEM:
Suppose you measure the terminal voltage of a 1.585-V alkaline cell having an internal resistance of $0\text{.}\text{100}\;Ω$ by placing a $1\text{.}\text{00}\text{-k}Ω$ voltmeter across its terminals. (See [ref:import-auto-id1349482].) (a) What current flows? (b) Find the terminal voltage. (c) To see how close the measured terminal voltage is to the emf, calculate their ratio.

> FIGURE {fig:import-auto-id1349482} src=../../media/Figure_22_04_10.jpg
> alt: The figure shows a circuit diagram that includes a battery with an internal resistance r and a voltmeter connected across its terminals. The current I is shown by an arrow pointing in a clockwise direction.
> width: 100
> caption: 

SOLUTION:
(a) 1.58 mA
(b) 1.5848 V (need four digits to see the difference)
(c) 0.99990 (need five digits to see the difference from unity)
:::

:::exercise {fs-id2949960} type=problems-exercises 
PROBLEM:
Suppose you measure the terminal voltage of a 3.200-V lithium cell having an internal resistance of $5\text{.}\text{00}\;Ω$ by placing a $1\text{.}\text{00}\text{-k}Ω$ voltmeter across its terminals. (a) What current flows? (b) Find the terminal voltage. (c) To see how close the measured terminal voltage is to the emf, calculate their ratio.
:::

:::exercise {fs-id1355644} type=problems-exercises 
PROBLEM:
A certain ammeter has a resistance of $5\text{.}\text{00}×{\text{10}}^{-5}\;Ω$ on its 3.00-A scale and contains a $\text{10}\text{.}0-Ω$ galvanometer. What is the sensitivity of the galvanometer?
SOLUTION:
$\text{15}\text{.}0 μA$
:::

:::exercise {fs-id1221168} type=problems-exercises 
PROBLEM:
A $1\text{.}\text{00}\text{-MΩ}$ voltmeter is placed in parallel with a $\text{75}\text{.}0\text{-k}Ω$ resistor in a circuit. (a) Draw a circuit diagram of the connection. (b) What is the resistance of the combination? (c) If the voltage across the combination is kept the same as it was across the $\text{75}\text{.}0\text{-k}Ω$ resistor alone, what is the percent increase in current? (d) If the current through the combination is kept the same as it was through the $\text{75}\text{.}0\text{-k}Ω$ resistor alone, what is the percentage decrease in voltage? (e) Are the changes found in parts (c) and (d) significant? Discuss.
:::

:::exercise {fs-id3007303} type=problems-exercises 
PROBLEM:
A $0\text{.}\text{0200-Ω}$ ammeter is placed in series with a $\text{10}\text{.}\text{00-Ω}$ resistor in a circuit. (a) Draw a circuit diagram of the connection. (b) Calculate the resistance of the combination. (c) If the voltage is kept the same across the combination as it was through the $\text{10}\text{.}\text{00-Ω}$ resistor alone, what is the percent decrease in current? (d) If the current is kept the same through the combination as it was through the $\text{10}\text{.}\text{00-Ω}$ resistor alone, what is the percent increase in voltage? (e) Are the changes found in parts (c) and (d) significant? Discuss.
SOLUTION:
(a)

> IMAGE {img:import-auto-id2382627} src=../../media/Figure_22_04_11.jpg width=200
> alt: The figure shows part of a circuit that includes an ammeter with internal resistance r connected in series with a load resistance R.

(b) $10\text{.}\text{02}\;Ω$
(c) 0.9980, or a $2.0\times {10}^{–1}$ percent decrease
(d) 1.002, or a $2.0\times {10}^{–1}$ percent increase
(e) Not significant.
:::

:::exercise {fs-id1915875} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
Suppose you have a $\text{40}\text{.}0-Ω$ galvanometer with a $\text{25}\text{.}0-μA$ sensitivity. (a) What resistance would you put in series with it to allow it to be used as a voltmeter that has a full-scale deflection for 0.500 mV? (b) What is unreasonable about this result? (c) Which assumptions are responsible?
:::

:::exercise {fs-id1990504} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) What resistance would you put in parallel with a $\text{40}\text{.}0-Ω$ galvanometer having a $\text{25.}0-μA$ sensitivity to allow it to be used as an ammeter that has a full-scale deflection for $\text{10}\text{.}0-μA$? (b) What is unreasonable about this result? (c) Which assumptions are responsible?
SOLUTION:
(a) $-\text{66}\text{.}7\;Ω$
(b) You can’t have negative resistance.
(c) It is unreasonable that ${I}_{G}$ is greater than ${I}_{\text{tot}}$ (see [ref:import-auto-id2932271]). You cannot achieve a full-scale deflection using a current less than the sensitivity of the galvanometer.
:::

## Glossary
- {def} **voltmeter**: an instrument that measures voltage
- {def} **ammeter**: an instrument that measures current
- {def} **analog meter**: a measuring instrument that gives a readout in the form of a needle movement over a marked gauge
- {def} **digital meter**: a measuring instrument that gives a readout in a digital form
- {def} **galvanometer**: an analog measuring device, denoted by G, that measures current flow using a needle deflection caused by a magnetic field force acting upon a current-carrying wire
- {def} **current sensitivity**: the maximum current that a galvanometer can read
- {def} **full-scale deflection**: the maximum deflection of a galvanometer needle, also known as current sensitivity; a galvanometer with a full-scale deflection of $\text{50}\mu \text{A}$ has a maximum deflection of its needle when $\text{50}\mu \text{A}$ flows through it
- {def} **shunt resistance**: a small resistance $R$ placed in parallel with a galvanometer G to produce an ammeter; the larger the current to be measured, the smaller $R$ must be; most of the current flowing through the meter is shunted through $R$ to protect the galvanometer

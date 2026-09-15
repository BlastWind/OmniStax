# Null Measurements

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain why a null measurement device is more accurate than a standard voltmeter or ammeter.
- Demonstrate how a Wheatstone bridge can be used to accurately calculate the resistance in a circuit.
Standard measurements of voltage and current alter the circuit being measured, introducing uncertainties in the measurements. Voltmeters draw some extra current, whereas ammeters reduce current flow. {term:Null measurements} balance voltages so that there is no current flowing through the measuring device and, therefore, no alteration of the circuit being measured.
Null measurements are generally more accurate but are also more complex than the use of standard voltmeters and ammeters, and they still have limits to their precision. In this module, we shall consider a few specific types of null measurements, because they are common and interesting, and they further illuminate principles of electric circuits.

## The Potentiometer
Suppose you wish to measure the emf of a battery. Consider what happens if you connect the battery directly to a standard voltmeter as shown in [ref:import-auto-id2691925]. (Once we note the problems with this measurement, we will examine a null measurement that improves accuracy.) As discussed before, the actual quantity measured is the terminal voltage $V$, which is related to the emf of the battery by $V=\text{emf}-\text{Ir}$, where $I$ is the current that flows and $r$ is the internal resistance of the battery.
The emf could be accurately calculated if $r$ were very accurately known, but it is usually not. If the current $I$ could be made zero, then $V=\text{emf}$, and so emf could be directly measured. However, standard voltmeters need a current to operate; thus, another technique is needed.

> FIGURE {fig:import-auto-id2691925} src=../../media/Figure_22_05_01.jpg
> alt: The diagram shows equivalence between two circuits. The first circuit has a cell of e m f script E and an internal resistance r connected across a voltmeter. The equivalent circuit on the right shows the same cell of e m f script E and an internal resistance r connected across a series combination of a galvanometer with an internal resistance r sub G and high resistance R. The currents in the two circuits are shown to be equal.
> width: 275
> caption: An analog voltmeter attached to a battery draws a small but nonzero current and measures a terminal voltage that differs from the emf of the battery. (Note that the script capital E symbolizes electromotive force, or emf.) Since the internal resistance of the battery is not known precisely, it is not possible to calculate the emf precisely.

A {term:potentiometer} is a null measurement device for measuring potentials (voltages). (See [ref:import-auto-id3170075].) A voltage source is connected to a resistor $R,$ say, a long wire, and passes a constant current through it. There is a steady drop in potential (an $\text{IR}$ drop) along the wire, so that a variable potential can be obtained by making contact at varying locations along the wire.
[ref:import-auto-id3170075](b) shows an unknown ${\text{emf}}_{x}$ (represented by script ${E}_{x}$  in the figure) connected in series with a galvanometer. Note that ${\text{emf}}_{x}$ opposes the other voltage source. The location of the contact point (see the arrow on the drawing) is adjusted until the galvanometer reads zero. When the galvanometer reads zero, ${\text{emf}}_{x}={\text{IR}}_{x}$, where ${R}_{x}$ is the resistance of the section of wire up to the contact point. Since no current flows through the galvanometer, none flows through the unknown emf, and so ${\text{emf}}_{x}$ is directly sensed.
Now, a very precisely known standard ${\text{emf}}_{s}$ is substituted for ${\text{emf}}_{x}$, and the contact point is adjusted until the galvanometer again reads zero, so that ${\text{emf}}_{s}={\text{IR}}_{s}$. In both cases, no current passes through the galvanometer, and so the current $I$ through the long wire is the same. Upon taking the ratio $\frac{{\text{emf}}_{x}}{{\text{emf}}_{s}}$, $I$ cancels, giving

$$ \frac{{\text{emf}}_{x}}{{\text{emf}}_{s}}=\frac{{\text{IR}}_{x}}{{\text{IR}}_{s}}=\frac{{R}_{x}}{{R}_{s}}. $$  {eq:eip-589}

Solving for ${\text{emf}}_{x}$ gives

$$ {\text{emf}}_{x}={\text{emf}}_{s}\frac{{R}_{x}}{{R}_{s}}. $$  {eq:eip-263}

> FIGURE {fig:import-auto-id3170075} src=../../media/Figure_22_05_02.jpg
> alt: Two circuits are shown. The first circuit has a cell of e m f script E and internal resistance r connected in series to a resistor R. The second diagram shows the same circuit with the addition of a galvanometer and unknown voltage source connected with a variable contact that can be adjusted up and down the length of the resistor R.
> width: 225
> caption: The potentiometer, a null measurement device. (a) A voltage source connected to a long wire resistor passes a constant current $I$ through it. (b) An unknown emf (labeled script ${E}_{\text{x}}$ in the figure) is connected as shown, and the point of contact along $R$ is adjusted until the galvanometer reads zero. The segment of wire has a resistance ${R}_{\text{x}}$ and script ${E}_{\text{x}}={\text{IR}}_{\text{x}}$, where $I$ is unaffected by the connection since no current flows through the galvanometer. The unknown emf is thus proportional to the resistance of the wire segment.

Because a long uniform wire is used for $R$, the ratio of resistances ${R}_{\text{x}}/{R}_{\text{s}}$ is the same as the ratio of the lengths of wire that zero the galvanometer for each emf. The three quantities on the right-hand side of the equation are now known or measured, and ${\text{emf}}_{\text{x}}$ can be calculated. The uncertainty in this calculation can be considerably smaller than when using a voltmeter directly, but it is not zero. There is always some uncertainty in the ratio of resistances ${R}_{\text{x}}/{R}_{\text{s}}$ and in the standard ${\text{emf}}_{s}$. Furthermore, it is not possible to tell when the galvanometer reads exactly zero, which introduces error into both ${R}_{\text{x}}$ and ${R}_{\text{s}}$, and may also affect the current $I$.

## Resistance Measurements and the Wheatstone Bridge
There is a variety of so-called {term:ohmmeters} that purport to measure resistance. What the most common ohmmeters actually do is to apply a voltage to a resistance, measure the current, and calculate the resistance using Ohm’s law. Their readout is this calculated resistance. Two configurations for ohmmeters using standard voltmeters and ammeters are shown in [ref:import-auto-id3027669]. Such configurations are limited in accuracy, because the meters alter both the voltage applied to the resistor and the current that flows through it.

> FIGURE {fig:import-auto-id3027669} src=../../media/Figure_22_05_03.jpg
> alt: The diagram shows two circuits. The first one has a cell of e m f script E and internal resistance r connected in series to an ammeter A and a resistor R. The second circuit is the same as the first, but in addition there is a voltmeter connected across the voltage source E.
> width: 275
> caption: Two methods for measuring resistance with standard meters. (a) Assuming a known voltage for the source, an ammeter measures current, and resistance is calculated as $R=\frac{V}{I}$. (b) Since the terminal voltage $V$ varies with current, it is better to measure it. $V$ is most accurately known when $I$ is small, but $I$ itself is most accurately known when it is large.

The {term:Wheatstone bridge} is a null measurement device for calculating resistance by balancing potential drops in a circuit. (See [ref:import-auto-id2446499].) The device is called a bridge because the galvanometer forms a bridge between two branches. A variety of {term:bridge devices} are used to make null measurements in circuits.
Resistors ${R}_{1}$ and ${R}_{2}$ are precisely known, while the arrow through ${R}_{3}$ indicates that it is a variable resistance. The value of ${R}_{3}$ can be precisely read. With the unknown resistance ${R}_{x}$ in the circuit, ${R}_{3}$ is adjusted until the galvanometer reads zero. The potential difference between points b and d is then zero, meaning that b and d are at the same potential. With no current running through the galvanometer, it has no effect on the rest of the circuit. So the branches abc and adc are in parallel, and each branch has the full voltage of the source. That is, the $\text{IR}$ drops along abc and adc are the same. Since b and d are at the same potential, the $\text{IR}$ drop along ad must equal the $\text{IR}$ drop along ab. Thus,

$$ {I}_{1}{R}_{1}={I}_{2}{R}_{3}. $$  {eq:eip-174}

Again, since b and d are at the same potential, the $\text{IR}$ drop along dc must equal the $\text{IR}$ drop along bc. Thus,

$$ {I}_{1}{R}_{2}={I}_{2}{R}_{\text{x}}. $$  {eq:eip-892}

Taking the ratio of these last two expressions gives

$$ \frac{{I}_{1}{R}_{1}}{{I}_{1}{R}_{2}}=\frac{{I}_{2}{R}_{3}}{{I}_{2}{R}_{x}}. $$  {eq:eip-737}

Canceling the currents and solving for R<sub>x</sub> yields

$$ {R}_{\text{x}}={R}_{3}\frac{{R}_{2}}{{R}_{1}}. $$  {eq:eip-163}

> FIGURE {fig:import-auto-id2446499} src=../../media/Figure_22_05_04.jpg
> alt: This complex circuit diagram shows a galvanometer connected in the center arm of a Wheatstone bridge arrangement. All the other four arms have a resistor. The bridge is connected to a cell of e m f script E and internal resistance r.
> width: 225
> caption: The Wheatstone bridge is used to calculate unknown resistances. The variable resistance ${R}_{3}$ is adjusted until the galvanometer reads zero with the switch closed. This simplifies the circuit, allowing ${R}_{x}$ to be calculated based on the $\text{IR}$ drops as discussed in the text.

This equation is used to calculate the unknown resistance when current through the galvanometer is zero. This method can be very accurate (often to four significant digits), but it is limited by two factors. First, it is not possible to get the current through the galvanometer to be exactly zero. Second, there are always uncertainties in ${R}_{1}$, ${R}_{2}$, and ${R}_{3}$, which contribute to the uncertainty in ${R}_{x}$.

:::exercise {eip-745} type=check-understanding Check Your Understanding

PROBLEM:
Identify other factors that might limit the accuracy of null measurements. Would the use of a digital device that is more sensitive than a galvanometer improve the accuracy of null measurements?
SOLUTION:
One factor would be resistance in the wires and connections in a null measurement. These are impossible to make zero, and they can change over time. Another factor would be temperature variations in resistance, which can be reduced but not completely eliminated by choice of material. Digital devices sensitive to smaller currents than analog devices do improve the accuracy of null measurements because they allow you to get the current closer to zero.
:::

## Section Summary {section:section-summary}
- Null measurement techniques achieve greater accuracy by balancing a circuit so that no current flows through the measuring device.
- One such device, for determining voltage, is a potentiometer.
- Another null measurement device, for determining resistance, is the Wheatstone bridge.
- Other physical quantities can also be measured with null measurement techniques.

## Conceptual questions {section:conceptual-questions}

:::exercise {fs-id1053475} type=conceptual-questions 
PROBLEM:
Why can a null measurement be more accurate than one using standard voltmeters and ammeters? What factors limit the accuracy of null measurements?
:::

:::exercise {fs-id2653352} type=conceptual-questions 
PROBLEM:
If a potentiometer is used to measure cell emfs on the order of a few volts, why is it most accurate for the standard ${\text{emf}}_{\text{s}}$ to be the same order of magnitude and the resistances to be in the range of a few ohms?
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id1844231} type=problems-exercises 
PROBLEM:
What is the ${\text{emf}}_{\text{x}}$ of a cell being measured in a potentiometer, if the standard cell’s emf is 12.0 V and the potentiometer balances for ${R}_{\text{x}}=5\text{.}\text{000}\;Ω$ and ${R}_{\text{s}}=2\text{.}\text{500}\;Ω$?
SOLUTION:
24.0 V
:::

:::exercise {fs-id2688655} type=problems-exercises 
PROBLEM:
Calculate the ${\text{emf}}_{\text{x}}$ of a dry cell for which a potentiometer is balanced when ${R}_{\text{x}}=1\text{.}\text{200}\;Ω$, while an alkaline standard cell with an emf of 1.600 V requires ${R}_{\text{s}}=1\text{.}\text{247}\;Ω$ to balance the potentiometer.
:::

:::exercise {fs-id1422615} type=problems-exercises 
PROBLEM:
When an unknown resistance ${R}_{\text{x}}$ is placed in a Wheatstone bridge, it is possible to balance the bridge by adjusting ${R}_{3}$ to be $\text{2500}\;Ω$. What is ${R}_{\text{x}}$ if $\frac{{R}_{2}}{{R}_{1}}=0\text{.}\text{625}$?
SOLUTION:
$1\text{.}\text{56 k}Ω$
:::

:::exercise {fs-id2929411} type=problems-exercises 
PROBLEM:
To what value must you adjust ${R}_{3}$ to balance a Wheatstone bridge, if the unknown resistance ${R}_{\text{x}}$ is $\text{100}\;Ω$, ${R}_{1}$ is $\text{50}\text{.}0\;Ω$, and ${R}_{2}$ is $\text{175}\;Ω$?
:::

:::exercise {fs-id2391704} type=problems-exercises 
PROBLEM:
(a) What is the unknown ${\text{emf}}_{\text{x}}$ in a potentiometer that balances when ${R}_{\text{x}}$ is $\text{10}\text{.}0\;Ω$, and balances when ${R}_{\text{s}}$ is $\text{15}\text{.}0\;Ω$ for a standard 3.000-V emf? (b) The same ${\text{emf}}_{\text{x}}$ is placed in the same potentiometer, which now balances when ${R}_{\text{s}}$ is $\text{15}\text{.}0\;Ω$ for a standard emf of 3.100 V. At what resistance ${R}_{\text{x}}$ will the potentiometer balance?
SOLUTION:
(a) 2.00 V
(b) $9\text{.}\text{68}\;Ω$
:::

:::exercise {fs-id3335517} type=problems-exercises 
PROBLEM:
Suppose you want to measure resistances in the range from $\text{10}\text{.}0\;Ω$ to $\text{10}\text{.}0 kΩ$ using a Wheatstone bridge that has $\frac{{R}_{2}}{{R}_{1}}=2\text{.}\text{000}$. Over what range should ${R}_{3}$ be adjustable?
SOLUTION:

$$ \text{Range = 5}\text{.}\text{00}\;Ω\;\text{to}\;5\text{.}\text{00}\;\text{k}Ω $$  {eq:eip-id1352332}

:::

## Glossary
- {def} **null measurements**: methods of measuring current and voltage more accurately by balancing the circuit so that no current flows through the measurement device
- {def} **potentiometer**: a null measurement device for measuring potentials (voltages)
- {def} **ohmmeter**: an instrument that applies a voltage to a resistance, measures the current, calculates the resistance using Ohm’s law, and provides a readout of this calculated resistance
- {def} **bridge device**: a device that forms a bridge between two branches of a circuit; some bridge devices are used to make null measurements in circuits
- {def} **Wheatstone bridge**: a null measurement device for calculating resistance by balancing potential drops in a circuit

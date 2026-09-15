# Resistors in Series and Parallel

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Draw a circuit with resistors in parallel and in series.
- Calculate the voltage drop of a current across a resistor using Ohm’s law.
- Contrast the way total resistance is calculated for resistors in series and in parallel.
- Explain why total resistance of a parallel circuit is less than the smallest resistance of any of the resistors in that circuit.
- Calculate total resistance of a circuit that contains a mixture of resistors connected in series and in parallel.
Most circuits have more than one component, called a {term:resistor} that limits the flow of charge in the circuit. A measure of this limit on charge flow is called {term:resistance}. The simplest combinations of resistors are the series and parallel connections illustrated in [ref:import-auto-id2989840]. The total resistance of a combination of resistors depends on both their individual values and how they are connected.

> FIGURE {fig:import-auto-id2989840} src=../../media/Figure_22_01_01.jpg
> alt: In part a of the figure, resistors labeled R sub 1, R sub 2, R sub 3, and R sub 4 are connected in series along one path of a circuit. In part b of the figure, the same resistors are connected along parallel paths of a circuit.
> width: 200
> caption: (a) A series connection of resistors. (b) A parallel connection of resistors.

## Resistors in Series
When are resistors in {term:series}? Resistors are in series whenever the flow of charge, called the {term:current}, must flow through devices sequentially. For example, if current flows through a person holding a screwdriver and into the Earth, then ${R}_{1}$ in [ref:import-auto-id2989840](a) could be the resistance of the screwdriver’s shaft, ${R}_{2}$ the resistance of its handle, ${R}_{3}$ the person’s body resistance, and ${R}_{4}$ the resistance of her shoes.
[ref:import-auto-id3043995] shows resistors in series connected to a {term:voltage} source. It seems reasonable that the total resistance is the sum of the individual resistances, considering that the current has to pass through each resistor in sequence. (This fact would be an advantage to a person wishing to avoid an electrical shock, who could reduce the current by wearing high-resistance rubber-soled shoes. It could be a disadvantage if one of the resistances were a faulty high-resistance cord to an appliance that would reduce the operating current.)

> FIGURE {fig:import-auto-id3043995} src=../../media/Figure_22_01_02.jpg
> alt: Two electrical circuits are compared. The first one has three resistors, R sub one, R sub two, and R sub three, connected in series with a voltage source V to form a closed circuit. The first circuit is equivalent to the second circuit, which has a single resistor R sub s connected to a voltage source V. Both circuits carry a current I, which starts from the positive end of the voltage source and moves in a clockwise direction around the circuit.
> width: 300
> caption: Three resistors connected in series to a battery (left) and the equivalent single or series resistance (right).

To verify that resistances in series do indeed add, let us consider the loss of electrical power, called a {term:voltage drop}, in each resistor in [ref:import-auto-id3043995].
According to {term:Ohm’s law}, the voltage drop, $V$, across a resistor when a current flows through it is calculated using the equation $V=\text{IR}$, where $I$ equals the current in amps (A) and $R$ is the resistance in ohms $(Ω)$. Another way to think of this is that $V$ is the voltage necessary to make a current $I$ flow through a resistance $R$.
So the voltage drop across ${R}_{1}$ is ${V}_{1}={IR}_{1}$, that across ${R}_{2}$ is ${V}_{2}={IR}_{2}$, and that across ${R}_{3}$ is ${V}_{3}={IR}_{3}$. The sum of these voltages equals the voltage output of the source; that is,

$$ V={V}_{1}+{V}_{2}+{V}_{3}. $$  {eq:eip-72}

This equation is based on the conservation of energy and conservation of charge. Electrical potential energy can be described by the equation $\text{PE}=\text{qV}$, where $q$ is the electric charge and $V$ is the voltage. Thus the energy supplied by the source is $\text{qV}$, while that dissipated by the resistors is

$$ {\text{qV}}_{1}+{\text{qV}}_{2}+{\text{qV}}_{3}. $$  {eq:eip-77}

:::note [] Connections: Conservation Laws

The derivations of the expressions for series and parallel resistance are based on the laws of conservation of energy and conservation of charge, which state that total charge and total energy are constant in any process. These two laws are directly involved in all electrical phenomena and will be invoked repeatedly to explain both specific effects and the general behavior of electricity.
:::
These energies must be equal, because there is no other source and no other destination for energy in the circuit. Thus, $qV={qV}_{1}+{qV}_{2}+{qV}_{3}$. The charge $q$ cancels, yielding $V={V}_{1}+{V}_{2}+{V}_{3}$, as stated. (Note that the same amount of charge passes through the battery and each resistor in a given amount of time, since there is no capacitance to store charge, there is no place for charge to leak, and charge is conserved.)
Now substituting the values for the individual voltages gives

$$ V={\text{IR}}_{1}+{\text{IR}}_{2}+{\text{IR}}_{3}=I({R}_{1}+{R}_{2}+{R}_{3}). $$  {eq:eip-803}

Note that for the equivalent single series resistance ${R}_{\text{s}}$, we have

$$ V={\text{IR}}_{\text{s}}. $$  {eq:eip-58}

This implies that the total or equivalent series resistance ${R}_{\text{s}}$ of three resistors is ${R}_{\text{s}}={R}_{1}+{R}_{2}+{R}_{3}$.
This logic is valid in general for any number of resistors in series; thus, the total resistance ${R}_{\text{s}}$ of a series connection is

$$ {R}_{\text{s}}={R}_{1}+{R}_{2}+{R}_{3}+\text{.}\text{.}\text{.}, $$  {eq:eip-288}

as proposed. Since all of the current must pass through each resistor, it experiences the resistance of each, and resistances in series simply add up.

:::example {ex:fs-id1366090} Calculating Resistance, Current, Voltage Drop, and Power Dissipation: Analysis of a Series Circuit
Suppose the voltage output of the battery in [ref:import-auto-id3043995] is $\text{12}\text{.}0\;\text{V}$, and the resistances are ${R}_{1}=1\text{.}\text{00}\;Ω$, ${R}_{2}=6\text{.}\text{00}\;Ω$, and ${R}_{3}=\text{13}\text{.}0\;Ω$. (a) What is the total resistance? (b) Find the current. (c) Calculate the voltage drop in each resistor, and show these add to equal the voltage output of the source. (d) Calculate the power dissipated by each resistor. (e) Find the power output of the source, and show that it equals the total power dissipated by the resistors.
**Strategy and Solution for (a)**
The total resistance is simply the sum of the individual resistances, as given by this equation:

$$ \begin{array}{lll}{R}_{\text{s}} & = & {R}_{1}+{R}_{2}+{R}_{3} \\ & = & 1.00 Ω+6.00 Ω+\text{13.0 Ω} \\ & = & \text{20.0 Ω.}\end{array} $$  {eq:eip-138}

**Strategy and Solution for (b)**
The current is found using Ohm’s law, $V=\text{IR}$. Entering the value of the applied voltage and the total resistance yields the current for the circuit:

$$ I=\frac{V}{{R}_{\text{s}}}=\frac{\text{12}\text{.}0\;\text{V}}{\text{20}\text{.}\text{0}\;Ω}=0\text{.}\text{600}\;\text{A}. $$  {eq:eip-343}

**Strategy and Solution for (c)**
The voltage—or $\text{IR}$ drop—in a resistor is given by Ohm’s law. Entering the current and the value of the first resistance yields

$$ {V}_{1}={IR}_{1}=(0\text{.}\text{600}\;\text{A})(1\text{.}0\;Ω)=0\text{.}\text{600}\;\text{V}. $$  {eq:eip-106}

Similarly,

$$ {V}_{2}={IR}_{2}=(0\text{.}\text{600}\;\text{A})(6\text{.}0\;Ω)=3\text{.}\text{60}\;\text{V} $$  {eq:eip-787}

and

$$ {V}_{3}={IR}_{3}=(0\text{.}\text{600}\;\text{A})(\text{13}\text{.}0\;Ω)=7\text{.}\text{80}\;\text{V}. $$  {eq:eip-917}

**Discussion for (c)**
The three $\text{IR}$ drops add to $\text{12}\text{.}0\;\text{V}$, as predicted:

$$ {V}_{1}+{V}_{2}+{V}_{3}=(0\text{.}\text{600}+3\text{.}\text{60}+7\text{.}\text{80})\;\text{V}=\text{12}\text{.}0\;\text{V}. $$  {eq:eip-359}

**Strategy and Solution for (d)**
The easiest way to calculate power in watts (W) dissipated by a resistor in a DC circuit is to use {term:Joule’s law}, $P=\text{IV}$, where $P$ is electric power. In this case, each resistor has the same full current flowing through it. By substituting Ohm’s law $V=\text{IR}$ into Joule’s law, we get the power dissipated by the first resistor as

$$ {P}_{1}={I}^{2}{R}_{1}=(0\text{.}\text{600}\;\text{A}{)}^{2}(1\text{.}\text{00}\;Ω)=0\text{.}\text{360}\;\text{W}. $$  {eq:eip-839}

Similarly,

$$ {P}_{2}={I}^{2}{R}_{2}=(0\text{.}\text{600}\;\text{A}{)}^{2}(6\text{.}\text{00}\;Ω)=2\text{.}\text{16}\;\text{W} $$  {eq:eip-192}

and

$$ {P}_{3}={I}^{2}{R}_{3}=(0\text{.}\text{600}\;\text{A}{)}^{2}(\text{13}\text{.}0\;Ω)=4\text{.}\text{68}\;\text{W}. $$  {eq:eip-997}

**Discussion for (d)**
Power can also be calculated using either $P=\text{IV}$ or $P=\frac{{V}^{2}}{R}$, where $V$ is the voltage drop across the resistor (not the full voltage of the source). The same values will be obtained.
**Strategy and Solution for (e)**
The easiest way to calculate power output of the source is to use $P=\text{IV}$, where $V$ is the source voltage. This gives

$$ P=(0\text{.}\text{600}\;\text{A})(\text{12}\text{.}0\;\text{V})=7\text{.}\text{20}\;\text{W}. $$  {eq:eip-271}

**Discussion for (e)**
Note, coincidentally, that the total power dissipated by the resistors is also 7.20 W, the same as the power put out by the source. That is,

$$ {P}_{1}+{P}_{2}+{P}_{3}=(0\text{.}\text{360}+2\text{.}\text{16}+4\text{.}\text{68})\;\text{W}=7\text{.}\text{20}\;\text{W}. $$  {eq:eip-698}

Power is energy per unit time (watts), and so conservation of energy requires the power output of the source to be equal to the total power dissipated by the resistors.
:::

:::note [] Major Features of Resistors in Series

1. Series resistances add: ${R}_{\text{s}}={R}_{1}+{R}_{2}+{R}_{3}+\text{.}\text{.}\text{.}\text{.}$
2. The same current flows through each resistor in series.
3. Individual resistors in series do not get the total source voltage, but divide it.
:::

## Resistors in Parallel
[ref:import-auto-id1926821] shows resistors in {term:parallel}, wired to a voltage source. Resistors are in parallel when each resistor is connected directly to the voltage source by connecting wires having negligible resistance. Each resistor thus has the full voltage of the source applied to it.
Each resistor draws the same current it would if it alone were connected to the voltage source (provided the voltage source is not overloaded). For example, an automobile’s headlights, radio, and so on, are wired in parallel, so that they utilize the full voltage of the source and can operate completely independently. The same is true in your house, or any building. (See [ref:import-auto-id1926821](b).)

> FIGURE {fig:import-auto-id1926821} src=../../media/Figure_22_01_04.jpg
> alt: Part a shows two electrical circuits which are compared. The first electrical circuit is arranged with resistors in parallel. The circuit has three paths, with a voltage source V at one end. Just after the voltage source, the circuit has current I. The first path has resistor R sub one and current I sub one after the resistor. The second path has resistor R sub two and current I sub two after the resistor. The third path has resistor R sub three with current I sub three after the resistor. The first circuit is equivalent to the second circuit. The second circuit has a voltage source V and an equivalent parallel resistance R sub p. Part b shows a complicated electrical wiring diagram of a distribution board that supplies electricity to a house.
> width: 500
> caption: (a) Three resistors connected in parallel to a battery and the equivalent single or parallel resistance. (b) Electrical power setup in a house. (credit: Dmitry G, Wikimedia Commons)

To find an expression for the equivalent parallel resistance ${R}_{\text{p}}$, let us consider the currents that flow and how they are related to resistance. Since each resistor in the circuit has the full voltage, the currents flowing through the individual resistors are ${I}_{1}=\frac{V}{{R}_{1}}$, ${I}_{2}=\frac{V}{{R}_{2}}$, and ${I}_{3}=\frac{V}{{R}_{3}}$. Conservation of charge implies that the total current $I$ produced by the source is the sum of these currents:

$$ I={I}_{1}+{I}_{2}+{I}_{3}. $$  {eq:eip-801}

Substituting the expressions for the individual currents gives

$$ I=\frac{V}{{R}_{1}}+\frac{V}{{R}_{2}}+\frac{V}{{R}_{3}}=V(\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}+\frac{1}{{R}_{3}}). $$  {eq:eip-779}

Note that Ohm’s law for the equivalent single resistance gives

$$ I=\frac{V}{{R}_{p}}=V(\frac{1}{{R}_{p}}). $$  {eq:eip-553}

The terms inside the parentheses in the last two equations must be equal. Generalizing to any number of resistors, the total resistance ${R}_{\text{p}}$ of a parallel connection is related to the individual resistances by

$$ \frac{1}{{R}_{p}}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}+\frac{1}{{R}_{\text{.}3}}+\text{.}\text{...} $$  {eq:eip-531}

This relationship results in a total resistance ${R}_{p}$ that is less than the smallest of the individual resistances. (This is seen in the next example.) When resistors are connected in parallel, more current flows from the source than would flow for any of them individually, and so the total resistance is lower.

:::example {ex:fs-id3090369} Calculating Resistance, Current, Power Dissipation, and Power Output: Analysis of a Parallel Circuit
Let the voltage output of the battery and resistances in the parallel connection in [ref:import-auto-id1926821] be the same as the previously considered series connection: $V=\text{12}\text{.}0\;\text{V}$, ${R}_{1}=1\text{.}\text{00}\;Ω$, ${R}_{2}=6\text{.}\text{00}\;Ω$, and ${R}_{3}=\text{13}\text{.}0\;Ω$. (a) What is the total resistance? (b) Find the total current. (c) Calculate the currents in each resistor, and show these add to equal the total current output of the source. (d) Calculate the power dissipated by each resistor. (e) Find the power output of the source, and show that it equals the total power dissipated by the resistors.
**Strategy and Solution for (a)**
The total resistance for a parallel combination of resistors is found using the equation below. Entering known values gives

$$ \frac{1}{{R}_{p}}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}+\frac{1}{{R}_{3}}=\frac{1}{1\text{.}\text{00}\;Ω}+\frac{1}{6\text{.}\text{00}\;Ω}+\frac{1}{\text{13}\text{.}0\;Ω}. $$  {eq:eip-319}

Thus,

$$ \frac{1}{{R}_{p}}=\frac{1.00}{Ω}+\frac{0\text{.}\text{1667}}{Ω}+\frac{0\text{.}\text{07692}}{Ω}=\frac{1\text{.}\text{2436}}{Ω}. $$  {eq:eip-406}

(Note that in these calculations, each intermediate answer is shown with an extra digit.)
We must invert this to find the total resistance ${R}_{\text{p}}$. This yields

$$ {R}_{\text{p}}=\frac{1}{1\text{.}\text{2436}}Ω=0\text{.}\text{8041}\;Ω. $$  {eq:eip-581}

The total resistance with the correct number of significant digits is ${R}_{\text{p}}=0\text{.}\text{804}\;Ω.$
**Discussion for (a)**
${R}_{\text{p}}$ is, as predicted, less than the smallest individual resistance.
**Strategy and Solution for (b)**
The total current can be found from Ohm’s law, substituting ${R}_{\text{p}}$ for the total resistance. This gives

$$ I=\frac{V}{{R}_{\text{p}}}=\frac{\text{12.0 V}}{\text{0.8041 Ω}}=\text{14}\text{.}\text{92 A}. $$  {eq:eip-481}

**Discussion for (b)**
Current $I$ for each device is much larger than for the same devices connected in series (see the previous example). A circuit with parallel connections has a smaller total resistance than the resistors connected in series.
**Strategy and Solution for (c)**
The individual currents are easily calculated from Ohm’s law, since each resistor gets the full voltage. Thus,

$$ {I}_{1}=\frac{V}{{R}_{1}}=\frac{\text{12}\text{.}0\;\text{V}}{1\text{.}\text{00}\;Ω}=\text{12}\text{.}0\;\text{A}. $$  {eq:eip-477}

Similarly,

$$ {I}_{2}=\frac{V}{{R}_{2}}=\frac{\text{12}\text{.}0\;\text{V}}{6\text{.}\text{00}\;Ω}=2\text{.}\text{00}\;\text{A} $$  {eq:eip-224}

and

$$ {I}_{3}=\frac{V}{{R}_{3}}=\frac{\text{12}\text{.}0\;\text{V}}{\text{13}\text{.}\text{0}\;Ω}=0\text{.}\text{92}\;\text{A}. $$  {eq:eip-639}

**Discussion for (c)**
The total current is the sum of the individual currents:

$$ {I}_{1}+{I}_{2}+{I}_{3}=\text{14}\text{.}\text{92}\;\text{A}. $$  {eq:eip-684}

This is consistent with conservation of charge.
**Strategy and Solution for (d)**
The power dissipated by each resistor can be found using any of the equations relating power to current, voltage, and resistance, since all three are known. Let us use $P=\frac{{V}^{2}}{R}$, since each resistor gets full voltage. Thus,

$$ {P}_{1}=\frac{{V}^{2}}{{R}_{1}}=\frac{(\text{12}\text{.}0\;\text{V}{)}^{2}}{1\text{.}\text{00}\;Ω}=\text{144}\;\text{W}. $$  {eq:eip-610}

Similarly,

$$ {P}_{2}=\frac{{V}^{2}}{{R}_{2}}=\frac{(\text{12}\text{.}0\;\text{V}{)}^{2}}{6\text{.}\text{00}\;Ω}=\text{24}\text{.}0\;\text{W} $$  {eq:eip-43}

and

$$ {P}_{3}=\frac{{V}^{2}}{{R}_{3}}=\frac{(\text{12}\text{.}0\;\text{V}{)}^{2}}{\text{13}\text{.}\text{0}\;Ω}=\text{11}\text{.}1\;\text{W}. $$  {eq:eip-326}

**Discussion for (d)**
The power dissipated by each resistor is considerably higher in parallel than when connected in series to the same voltage source.
**Strategy and Solution for (e)**
The total power can also be calculated in several ways. Choosing $P=\text{IV}$, and entering the total current, yields

$$ P=\text{IV}=(\text{14.92 A})(\text{12.0 V})=\text{179 W}. $$  {eq:eip-215}

**Discussion for (e)**
Total power dissipated by the resistors is also 179 W:

$$ {P}_{1}+{P}_{2}+{P}_{3}=\text{144}\;\text{W}+\text{24}\text{.}0\;\text{W}+\text{11}\text{.}1\;\text{W}=\text{179}\;\text{W}. $$  {eq:eip-286}

This is consistent with the law of conservation of energy.
**Overall Discussion**
Note that both the currents and powers in parallel connections are greater than for the same devices in series.
:::

:::note [] Major Features of Resistors in Parallel

1. Parallel resistance is found from $\frac{1}{{R}_{\text{p}}}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}+\frac{1}{{R}_{3}}+\text{.}\text{.}\text{.}$, and it is smaller than any individual resistance in the combination.
2. Each resistor in parallel has the same full voltage of the source applied to it. (Power distribution systems most often use parallel connections to supply the myriad devices served with the same voltage and to allow them to operate independently.)
3. Parallel resistors do not each get the total current; they divide it.
:::

## Combinations of Series and Parallel
More complex connections of resistors are sometimes just combinations of series and parallel. These are commonly encountered, especially when wire resistance is considered. In that case, wire resistance is in series with other resistances that are in parallel.
Combinations of series and parallel can be reduced to a single equivalent resistance using the technique illustrated in [ref:import-auto-id3357836]. Various parts are identified as either series or parallel, reduced to their equivalents, and further reduced until a single resistance is left. The process is more time consuming than difficult.

> FIGURE {fig:import-auto-id3357836} src=../../media/Figure_22_01_05.jpg
> alt: The diagram has a set of five circuits. The first circuit has a combination of seven resistors in series and parallel combinations. It has a resistor R sub one in series with a set of three resistors R sub two, R sub three, and R sub four in parallel and connected in series with a combination of resistors R sub five and R sub six, which are parallel. A resistor R sub seven is connected in parallel to R sub one and the voltage source. The second circuit calculates combinations of all parallel resistors in circuit one and replaces them with their equivalent resistance. It has a resistor R sub one in series with R sub p and R sub p prime. A resistor R sub seven is connected in parallel to R sub one and the voltage source. The third circuit takes the combination of the series resistors R sub p and R sub p prime and replaces it with R sub s. It has a resistor R sub one in series with R sub s. A resistor R sub seven is connected in parallel to R sub s and the voltage source. The fourth circuit shows a parallel combination of R sub seven and R sub s are calculated and replaced by R sub p double prime. The circuit now has a series combination voltage source, R sub one and R sub p double prime. The fifth circuit shows the final equivalent of the first circuit. It has a voltage source connecting across a final equivalent resistance R sub s prime.
> width: 500
> caption: This combination of seven resistors has both series and parallel parts. Each is identified and reduced to an equivalent resistance, and these are further reduced until a single equivalent resistance is reached.

The simplest combination of series and parallel resistance, shown in [ref:import-auto-id3085827], is also the most instructive, since it is found in many applications. For example, ${R}_{1}$ could be the resistance of wires from a car battery to its electrical devices, which are in parallel. ${R}_{2}$ and ${R}_{3}$ could be the starter motor and a passenger compartment light. We have previously assumed that wire resistance is negligible, but, when it is not, it has important effects, as the next example indicates.

:::example {ex:fs-id2980027} Calculating Resistance, $\text{IR}$  Drop, Current, and Power Dissipation: Combining Series and Parallel Circuits
[ref:import-auto-id3085827] shows the resistors from the previous two examples wired in a different way—a combination of series and parallel. We can consider ${R}_{1}$ to be the resistance of wires leading to ${R}_{2}$ and ${R}_{3}$. (a) Find the total resistance. (b) What is the $\text{IR}$ drop in ${R}_{1}$? (c) Find the current ${I}_{2}$ through ${R}_{2}$. (d) What power is dissipated by ${R}_{2}$?

> FIGURE {fig:import-auto-id3085827} src=../../media/Figure_22_01_06.jpg
> alt: Circuit diagram in which a battery of twelve point zero volts is connected to a combination of three resistors. Resistors R sub two and R sub three are connected in parallel to each other, and their combination is connected in series to resistor R sub one. R sub one has a resistance of one point zero zero ohms, R sub two has a resistance of six point zero zero ohms, and R sub three has a resistance of thirteen point zero ohms.
> width: 350
> caption: These three resistors are connected to a voltage source so that ${R}_{2}$ and ${R}_{3}$ are in parallel with one another and that combination is in series with ${R}_{1}$.

**Strategy and Solution for (a)**
To find the total resistance, we note that ${R}_{2}$ and ${R}_{3}$ are in parallel and their combination ${R}_{\text{p}}$ is in series with ${R}_{1}$. Thus the total (equivalent) resistance of this combination is

$$ {R}_{\text{tot}}={R}_{1}+{R}_{\text{p}}. $$  {eq:eip-178}

First, we find ${R}_{\text{p}}$ using the equation for resistors in parallel and entering known values:

$$ \frac{1}{{R}_{\text{p}}}=\frac{1}{{R}_{2}}+\frac{1}{{R}_{3}}=\frac{1}{6\text{.}\text{00}\;Ω}+\frac{1}{\text{13}\text{.}0\;Ω}=\frac{0\text{.}\text{2436}}{Ω}. $$  {eq:eip-7}

Inverting gives

$$ {R}_{\text{p}}=\frac{1}{0\text{.}\text{2436}}Ω=4\text{.}\text{11}\;Ω. $$  {eq:eip-671}

So the total resistance is

$$ {R}_{\text{tot}}={R}_{1}+{R}_{\text{p}}=1\text{.}\text{00}\;Ω+4\text{.}\text{11}\;Ω=5\text{.}\text{11}\;Ω. $$  {eq:eip-114}

**Discussion for (a)**
The total resistance of this combination is intermediate between the pure series and pure parallel values ($20.0 Ω$ and $0.804 Ω$, respectively) found for the same resistors in the two previous examples.
**Strategy and Solution for (b)**
To find the $\text{IR}$ drop in ${R}_{1}$, we note that the full current $I$ flows through ${R}_{1}$. Thus its $\text{IR}$ drop is

$$ {V}_{1}={\text{IR}}_{1}. $$  {eq:eip-177}

We must find $I$ before we can calculate ${V}_{1}$. The total current $I$ is found using Ohm’s law for the circuit. That is,

$$ I=\frac{V}{{R}_{\text{tot}}}=\frac{\text{12}\text{.}0\;\text{V}}{5\text{.}\text{11}\;Ω}=2\text{.}\text{35}\;\text{A}. $$  {eq:eip-262}

Entering this into the expression above, we get

$$ {V}_{1}={\text{IR}}_{1}=(2\text{.}\text{35}\;\text{A})(1\text{.}\text{00}\;Ω)=2\text{.}\text{35}\;\text{V}. $$  {eq:eip-316}

**Discussion for (b)**
The voltage applied to ${R}_{2}$ and ${R}_{3}$ is less than the total voltage by an amount ${V}_{1}$. When wire resistance is large, it can significantly affect the operation of the devices represented by ${R}_{2}$ and ${R}_{3}$.
**Strategy and Solution for (c)**
To find the current through ${R}_{2}$, we must first find the voltage applied to it. We call this voltage ${V}_{\text{p}}$, because it is applied to a parallel combination of resistors. The voltage applied to both ${R}_{2}$ and ${R}_{3}$ is reduced by the amount ${V}_{1}$, and so it is

$$ {V}_{\text{p}}=V-{V}_{1}=\text{12}\text{.}0\;\text{V}-2\text{.}\text{35}\;\text{V}=9\text{.}\text{65}\;\text{V}. $$  {eq:eip-984}

Now the current ${I}_{2}$ through resistance ${R}_{2}$ is found using Ohm’s law:

$$ {I}_{2}=\frac{{V}_{\text{p}}}{{R}_{2}}=\frac{9\text{.}\text{65 V}}{6\text{.}\text{00}\;Ω}=1\text{.}\text{61}\;\text{A}. $$  {eq:eip-376}

**Discussion for (c)**
The current is less than the 2.00 A that flowed through ${R}_{2}$ when it was connected in parallel to the battery in the previous parallel circuit example.
**Strategy and Solution for (d)**
The power dissipated by ${R}_{2}$ is given by

$$ {P}_{2}=({I}_{2}{)}^{2}{R}_{2}=(1\text{.}\text{61}\;\text{A}{)}^{2}(6\text{.}\text{00}\;Ω)=\text{15}\text{.}5\;\text{W}. $$  {eq:eip-12}

**Discussion for (d)**
The power is less than the 24.0 W this resistor dissipated when connected in parallel to the 12.0-V source.
:::

## Practical Implications
One implication of this last example is that resistance in wires reduces the current and power delivered to a resistor. If wire resistance is relatively large, as in a worn (or a very long) extension cord, then this loss can be significant. If a large current is drawn, the $\text{IR}$ drop in the wires can also be significant.
For example, when you are rummaging in the refrigerator and the motor comes on, the refrigerator light dims momentarily. Similarly, you can see the passenger compartment light dim when you start the engine of your car (although this may be due to resistance inside the battery itself).
What is happening in these high-current situations is illustrated in [ref:import-auto-id2452527]. The device represented by ${R}_{3}$ has a very low resistance, and so when it is switched on, a large current flows. This increased current causes a larger $\text{IR}$ drop in the wires represented by ${R}_{1}$, reducing the voltage across the light bulb (which is ${R}_{2}$), which then dims noticeably.

> FIGURE {fig:import-auto-id2452527} src=../../media/Figure_22_01_07.jpg
> alt: A conceptual drawing showing a refrigerator with its motor and light bulbs connected to a household A C circuit through a wire with resistance of R sub one. The bulb has a resistance R sub two, and the motor has a resistance R sub three.
> width: 200
> caption: Why do lights dim when a large appliance is switched on? The answer is that the large current the appliance motor draws causes a significant $\text{IR}$ drop in the wires and reduces the voltage across the light.

## 

:::exercise {fs-id2645156} type=check-understanding Check Your Understanding

PROBLEM:
Can any arbitrary combination of resistors be broken down into series and parallel combinations? See if you can draw a circuit diagram of resistors that cannot be broken down into combinations of series and parallel.
SOLUTION:
No, there are many ways to connect resistors that are not combinations of series and parallel, including loops and junctions. In such cases Kirchhoff’s rules, to be introduced in [Kirchhoff’s Rules](module:m42359), will allow you to analyze the circuit.
:::

:::note [] Problem-Solving Strategies for Series and Parallel Resistors

1. Draw a clear circuit diagram, labeling all resistors and voltage sources. This step includes a list of the knowns for the problem, since they are labeled in your circuit diagram.
2. Identify exactly what needs to be determined in the problem (identify the unknowns). A written list is useful.
3. Determine whether resistors are in series, parallel, or a combination of both series and parallel. Examine the circuit diagram to make this assessment. Resistors are in series if the same current must pass sequentially through them.
4. Use the appropriate list of major features for series or parallel connections to solve for the unknowns. There is one list for series and another for parallel. If your problem has a combination of series and parallel, reduce it in steps by considering individual groups of series or parallel connections, as done in this module and the examples. Special note: When finding

$R \text{p}$, the reciprocal must be taken with care.
5. Check to see whether the answers are reasonable and consistent. Units and numerical results must be reasonable. Total series resistance should be greater, whereas total parallel resistance should be smaller, for example. Power should be greater for the same devices in parallel compared with series, and so on.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1825729} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id1825735} src=../../media/CNX_APPhysics_21_M1_S01_img.jpg
> alt: A circuit is shown as a rectangle with an extra line connecting the top and bottom having resistor Y. The top of this circuit has a 2-volt battery to the left of the Y resistor line, the left side of this circuit has a point P marked and then a 14-volt battery, the bottom has a resistor X to the left of the Y resistor line, and the right side has a resistor Z.
> caption: 

The figure above shows a circuit containing two batteries and three identical resistors with resistance *R*. Which of the following changes to the circuit will result in an increase in the current at point *P*? Select *two* answers.
(a) Reversing the connections to the 14 V battery.
(b) Removing the 2 V battery and connecting the wires to close the left loop.
(c) Rearranging the resistors so all three are in series.
(d) Removing the branch containing resistor *Z*.
SOLUTION:
(a), (b)
:::

:::exercise {fs-id2716433} type=ap-test-prep 
PROBLEM:
In a circuit, a parallel combination of six 1.6-kΩ resistors is connected in series with a parallel combination of four 2.4-kΩ resistors. If the source voltage is 24 V, what will be the percentage of total current in one of the 2.4-kΩ resistors?
(a) 10%
(b) 12%
(c) 20%
(d) 25%
:::

:::exercise {fs-id1635797} type=ap-test-prep 
PROBLEM:
If the circuit in the previous question is modified by removing some of the 1.6 kΩ resistors, the total current in the circuit is 24 mA. How many resistors were removed?
(a) 1
(b) 2
(c) 3
(d) 4
SOLUTION:
(b)
:::

:::exercise {fs-id2337395} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id2337401} src=../../media/CNX_APPhysics_21_M1_S02_img.jpg
> alt: A circuit is shown that has nothing on the top or bottom, a battery to the left, and 2R resistor on the right. Additionally, there is an R resistor connecting the top and bottom of the circuit between the left and right sides of the circuit.
> caption: 

Two resistors, with resistances *R* and 2*R* are connected to a voltage source as shown in this figure. If the power dissipated in *R* is 10 W, what is the power dissipated in 2*R*?
(a) 1 W
(b) 2.5 W
(c) 5 W
(d) 10 W
:::

:::exercise {fs-id1843350} type=ap-test-prep 
PROBLEM:
In a circuit, a parallel combination of two 20-Ω and one 10-Ω resistors is connected in series with a 4-Ω resistor. The source voltage is 36 V.
(a) Find the resistor(s) with the maximum current.
(b) Find the resistor(s) with the maximum voltage drop.
(c) Find the power dissipated in each resistor and hence the total power dissipated in all the resistors. Also find the power output of the source. Are they equal or not? Justify your answer.
(d) Will the answers for questions (a) and (b) differ if a 3 Ω resistor is added in series to the 4 Ω resistor? If yes, repeat the question(s) for the new resistor combination.
(e) If the values of all the resistors and the source voltage are doubled, what will be the effect on the current?
SOLUTION:
(a) 4-Ω resistor; (b) combination of 20-Ω, 20-Ω, and 10-Ω resistors; (c) 20 W in each 20-Ω resistor, 40 W in 10-Ω resistor, 64 W in 4-Ω resistor, total 144W total in resistors, output power is 144 W, yes they are equal (law of conservation of energy); (d) 4 Ω and 3 Ω for part (a) and no change for part (b); (e) no effect, it will remain the same.
:::

## Section Summary {section:section-summary}
- The total resistance of an electrical circuit with resistors wired in a series is the sum of the individual resistances: ${R}_{\text{s}}={R}_{1}+{R}_{2}+{R}_{3}+\text{.}\text{.}\text{.}\text{.}$
- Each resistor in a series circuit has the same amount of current flowing through it.
- The voltage drop, or power dissipation, across each individual resistor in a series is different, and their combined total adds up to the power source input.
- The total resistance of an electrical circuit with resistors wired in parallel is less than the lowest resistance of any of the components and can be determined using the formula:
    

$$ \frac{1}{{R}_{\text{p}}}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}+\frac{1}{{R}_{3}}+\text{.}\text{.}\text{.}\text{.} $$  {eq:eip-580}

- Each resistor in a parallel circuit has the same full voltage of the source applied to it.
- The current flowing through each resistor in a parallel circuit is different, depending on the resistance.
- If a more complex connection of resistors is a combination of series and parallel, it can be reduced to a single equivalent resistance by identifying its various parts as series or parallel, reducing each to its equivalent, and continuing until a single resistance is eventually reached.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3009508} type=conceptual-questions 
PROBLEM:
A switch has a variable resistance that is nearly zero when closed and extremely large when open, and it is placed in series with the device it controls. Explain the effect the switch in [ref:import-auto-id3095078] has on current when open and when closed.

> FIGURE {fig:import-auto-id3095078} src=../../media/Figure_22_01_08.jpg
> alt: The diagram shows a circuit with a voltage source and internal resistance small r connected in series with a resistance R and a switch.
> width: 200
> caption: A switch is ordinarily in series with a resistance and voltage source. Ideally, the switch has nearly zero resistance when closed but has an extremely large resistance when open. (Note that in this diagram, the script E represents the voltage (or electromotive force) of the battery.)

:::

:::exercise {fs-id3051530} type=conceptual-questions 
PROBLEM:
What is the voltage across the open switch in [ref:import-auto-id3095078]?
:::

:::exercise {fs-id3177845} type=conceptual-questions 
PROBLEM:
There is a voltage across an open switch, such as in [ref:import-auto-id3095078]. Why, then, is the power dissipated by the open switch small?
:::

:::exercise {fs-id2453210} type=conceptual-questions 
PROBLEM:
Why is the power dissipated by a closed switch, such as in [ref:import-auto-id3095078], small?
:::

:::exercise {fs-id2590884} type=conceptual-questions 
PROBLEM:
A student in a physics lab mistakenly wired a light bulb, battery, and switch as shown in [ref:import-auto-id1617216]. Explain why the bulb is on when the switch is open, and off when the switch is closed. (Do not try this—it is hard on the battery!)

> FIGURE {fig:import-auto-id1617216} src=../../media/Figure_22_01_09.jpg
> alt: This diagram shows a circuit with a voltage source and internal resistance small r. A resistance R and an open switch are connected in parallel to it.
> width: 200
> caption: A wiring mistake put this switch in parallel with the device represented by $R$. (Note that in this diagram, the script E represents the voltage (or electromotive force) of the battery.)

:::

:::exercise {fs-id1927541} type=conceptual-questions 
PROBLEM:
Knowing that the severity of a shock depends on the magnitude of the current through your body, would you prefer to be in series or parallel with a resistance, such as the heating element of a toaster, if shocked by it? Explain.
:::

:::exercise {fs-id3106050} type=conceptual-questions 
PROBLEM:
Would your headlights dim when you start your car’s engine if the wires in your automobile were superconductors? (Do not neglect the battery’s internal resistance.) Explain.
:::

:::exercise {fs-id3177055} type=conceptual-questions 
PROBLEM:
Some strings of holiday lights are wired in series to save wiring costs. An old version utilized bulbs that break the electrical connection, like an open switch, when they burn out. If one such bulb burns out, what happens to the others? If such a string operates on 120 V and has 40 identical bulbs, what is the normal operating voltage of each? Newer versions use bulbs that short circuit, like a closed switch, when they burn out. If one such bulb burns out, what happens to the others? If such a string operates on 120 V and has 39 remaining identical bulbs, what is then the operating voltage of each?
:::

:::exercise {fs-id3119307} type=conceptual-questions 
PROBLEM:
If two household lightbulbs rated 60 W and 100 W are connected in series to household power, which will be brighter? Explain.
:::

:::exercise {fs-id3177962} type=conceptual-questions 
PROBLEM:
Suppose you are doing a physics lab that asks you to put a resistor into a circuit, but all the resistors supplied have a larger resistance than the requested value. How would you connect the available resistances to attempt to get the smaller value asked for?
:::

:::exercise {fs-id2442330} type=conceptual-questions 
PROBLEM:
Before World War II, some radios got power through a “resistance cord” that had a significant resistance. Such a resistance cord reduces the voltage to a desired level for the radio’s tubes and the like, and it saves the expense of a transformer. Explain why resistance cords become warm and waste energy when the radio is on.
:::

:::exercise {fs-id1615512} type=conceptual-questions 
PROBLEM:
Some light bulbs have three power settings (not including zero), obtained from multiple filaments that are individually switched and wired in parallel. What is the minimum number of filaments needed for three power settings?
:::

## Problem Exercises {section:problems-exercises}
*Note: Data taken from figures can be assumed to be accurate to three significant digits.*

:::exercise {fs-id1599495} type=problems-exercises 
PROBLEM:
(a) What is the resistance of ten $\text{275-Ω}$ resistors connected in series? (b) In parallel?
SOLUTION:
(a) $2\text{.}\text{75}\;\text{k}Ω$
(b) $\text{27}\text{.}5\;Ω$
:::

:::exercise {fs-id3245329} type=problems-exercises 
PROBLEM:
(a) What is the resistance of a $\text{1.00}\times {10}^{2}-Ω$, a $2\text{.}\text{50-kΩ}$, and a $4\text{.}\text{00-k}Ω$ resistor connected in series? (b) In parallel?
:::

:::exercise {fs-id3017617} type=problems-exercises 
PROBLEM:
What are the largest and smallest resistances you can obtain by connecting a $\text{36}\text{.}0-Ω$, a $\text{50}\text{.}0-Ω$, and a $\text{700-Ω}$ resistor together?
SOLUTION:
(a) $\text{786}\;Ω$
(b) $\text{20}\text{.}3\;Ω$
:::

:::exercise {fs-id3103096} type=problems-exercises 
PROBLEM:
An 1800-W toaster, a 1400-W electric frying pan, and a 75-W lamp are plugged into the same outlet in a 15-A, 120-V circuit. (The three devices are in parallel when plugged into the same socket.). (a) What current is drawn by each device? (b) Will this combination blow the 15-A fuse?
:::

:::exercise {fs-id1927186} type=problems-exercises 
PROBLEM:
Your car’s 30.0-W headlight and 2.40-kW starter are ordinarily connected in parallel in a 12.0-V system. What power would one headlight and the starter consume if connected in series to a 12.0-V battery? (Neglect any other resistance in the circuit and any change in resistance in the two devices.)
SOLUTION:
$\text{29}\text{.}6\;\text{W}$
:::

:::exercise {fs-id3285351} type=problems-exercises 
PROBLEM:
(a) Given a 48.0-V battery and $\text{24}\text{.}0-Ω$ and $\text{96}\text{.}0-Ω$ resistors, find the current and power for each resistor when connected in series. (b) Repeat when the resistances are in parallel.
:::

:::exercise {fs-id1609224} type=problems-exercises 
PROBLEM:
Referring to the example combining series and parallel circuits and [ref:import-auto-id3085827], calculate ${I}_{3}$ in the following two different ways: (a) from the known values of $I$ and ${I}_{2}$; (b) using Ohm’s law for ${R}_{3}$. In both parts explicitly show how you follow the steps in the [ref:fs-id2401854]Problem-Solving Strategies for Series and Parallel Resistors.
SOLUTION:
(a) 0.74 A
(b) 0.742 A
:::

:::exercise {fs-id1815315} type=problems-exercises 
PROBLEM:
Referring to [ref:import-auto-id3085827]: (a) Calculate ${P}_{3}$ and note how it compares with ${P}_{3}$ found in the first two example problems in this module. (b) Find the total power supplied by the source and compare it with the sum of the powers dissipated by the resistors.
:::

:::exercise {fs-id2666378} type=problems-exercises 
PROBLEM:
Refer to [ref:import-auto-id2452527] and the discussion of lights dimming when a heavy appliance comes on. (a) Given the voltage source is 120 V, the wire resistance is $0\text{.}\text{400}\;Ω$, and the bulb is nominally 75.0 W, what power will the bulb dissipate if a total of 15.0 A passes through the wires when the motor comes on? Assume negligible change in bulb resistance. (b) What power is consumed by the motor?
SOLUTION:
(a) 67.7 W
(b) 1.64 kW
:::

:::exercise {fs-id2057266} type=problems-exercises 
PROBLEM:
A 240-kV power transmission line carrying $5.00\times {10}^{2}\;\text{A}$  is hung from grounded metal towers by ceramic insulators, each having a $1\text{.}\text{00}×{\text{10}}^{9}-Ω$ resistance. [ref:import-auto-id2584502]. (a) What is the resistance to ground of 100 of these insulators? (b) Calculate the power dissipated by 100 of them. (c) What fraction of the power carried by the line is this? Explicitly show how you follow the steps in the [ref:fs-id2401854]Problem-Solving Strategies for Series and Parallel Resistors.

> FIGURE {fig:import-auto-id2584502} src=../../media/Figure_22_01_10.jpg
> alt: The diagram shows a grounded metal transmission tower. Two ground conductors on top of the tower point out like antennas. Hanging from the tower are a set of three bundled conductors, one on either end and one in the middle.
> width: 200
> caption: High-voltage (240-kV) transmission line carrying $5.00\times {10}^{2}\;\text{A}$ is hung from a grounded metal transmission tower. The row of ceramic insulators provide $1.00\times {\text{10}}^{9}Ω$ of resistance each.

:::

:::exercise {fs-id3051842} type=problems-exercises 
PROBLEM:
Show that if two resistors ${R}_{1}$ and ${R}_{2}$ are combined and one is much greater than the other (${R}_{1}\text{>>}{R}_{2}$): (a) Their series resistance is very nearly equal to the greater resistance ${R}_{1}$. (b) Their parallel resistance is very nearly equal to smaller resistance ${R}_{2}$.
SOLUTION:
(a) $\begin{array}{l}{R}_{\text{s}}={R}_{1}+{R}_{2} \\ ⇒{R}_{\text{s}}\;≈\;{R}_{1}({R}_{1}\text{>>}{R}_{2})\end{array}$
(b) $\frac{1}{{R}_{p}}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}=\frac{{R}_{1}+{R}_{2}}{{R}_{1}{R}_{2}}$,
so that
$\begin{array}{l}{R}_{p}=\frac{{R}_{1}{R}_{2}}{{R}_{1}+{R}_{2}}≈\frac{{R}_{1}{R}_{2}}{{R}_{1}}={R}_{2}({R}_{1}\text{>>}{R}_{2})\text{.}\end{array}$
:::

:::exercise {fs-id2990389} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
Two resistors, one having a resistance of $1\text{45}\;Ω$, are connected in parallel to produce a total resistance of $150\;Ω$. (a) What is the value of the second resistance? (b) What is unreasonable about this result? (c) Which assumptions are unreasonable or inconsistent?
:::

:::exercise {fs-id3290888} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
Two resistors, one having a resistance of $9\text{00 kΩ}$, are connected in series to produce a total resistance of $0\text{.}\text{500 MΩ}$. (a) What is the value of the second resistance? (b) What is unreasonable about this result? (c) Which assumptions are unreasonable or inconsistent?
SOLUTION:
(a) $-\text{400 k}Ω$
(b) Resistance cannot be negative.
(c) Series resistance is said to be less than one of the resistors, but it must be greater than any of the resistors.
:::

## Glossary
- {def} **series**: a sequence of resistors or other components wired into a circuit one after the other
- {def} **resistor**: a component that provides resistance to the current flowing through an electrical circuit
- {def} **resistance**: causing a loss of electrical power in a circuit
- {def} **Ohm’s law**: the relationship between current, voltage, and resistance within an electrical circuit: $V=\text{IR}$
- {def} **voltage**: the electrical potential energy per unit charge; electric pressure created by a power source, such as a battery
- {def} **voltage drop**: the loss of electrical power as a current travels through a resistor, wire or other component
- {def} **current**: the flow of charge through an electric circuit past a given point of measurement
- {def} **Joule’s law**: the relationship between potential electrical power, voltage, and resistance in an electrical circuit, given by: ${P}_{e}=\text{IV}$
- {def} **parallel**: the wiring of resistors or other components in an electrical circuit such that each component receives an equal voltage from the power source; often pictured in a ladder-shaped diagram, with each component on a rung of the ladder

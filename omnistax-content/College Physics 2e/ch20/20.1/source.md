# Current

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define electric current, ampere, and drift velocity
- Describe the direction of charge flow in conventional current.
- Use drift velocity to calculate current and vice versa.

## Electric Current
Electric current is defined to be the rate at which charge flows. A large current, such as that used to start a truck engine, moves a large amount of charge in a small time, whereas a small current, such as that used to operate a hand-held calculator, moves a small amount of charge over a long period of time. In equation form, {term:electric current} $I$ is defined to be

$$ I=\frac{\Delta Q}{\Delta t}\text{,} $$  {eq:eip-926}

where $\Delta Q$ is the amount of charge passing through a given area in time $\Delta t$. (As in previous chapters, initial time is often taken to be zero, in which case $\Delta t=t$.) (See [ref:import-auto-id1986250].) The SI unit for current is the {term:ampere} (A), named for the French physicist André-Marie Ampère (1775–1836). Since $I=\Delta Q/\Delta t$, we see that an ampere is one coulomb per second:

$$ \text{1 A}=\text{1 C/s} $$  {eq:eip-108}

Not only are fuses and circuit breakers rated in amperes (or amps), so are many electrical appliances.

> FIGURE {fig:import-auto-id1986250} src=../../media/Figure_21_01_01a.jpg
> alt: Charges are shown as small spheres moving through a section of a conducting wire. The direction of movement of charge is indicated by arrows along the length of the conductor toward the right. The cross-sectional area of the wire is labeled as A. The current is equal to the flow of charge.
> width: 225
> caption: The rate of flow of charge is current. An ampere is the flow of one coulomb through an area in one second.

:::example {ex:fs-id1957989} Calculating Currents: Current in a Truck Battery and a Handheld Calculator
(a) What is the current involved when a truck battery sets in motion 720 C of charge in 4.00 s while starting an engine? (b) How long does it take 1.00 C of charge to flow through a handheld calculator if a 0.300-mA current is flowing?
**Strategy**
We can use the definition of current in the equation $I=\Delta Q/\Delta t$ to find the current in part (a), since charge and time are given. In part (b), we rearrange the definition of current and use the given values of charge and current to find the time required.
**Solution for (a)**
Entering the given values for charge and time into the definition of current gives

$$ \begin{array}{lll}I & = & \frac{\Delta Q}{\Delta t}=\frac{\text{720 C}}{\text{4.00 s}}=\text{180 C/s} \\ & = & \text{180 A.}\end{array} $$  {eq:eip-340}

**Discussion for (a)**
This large value for current illustrates the fact that a large charge is moved in a small amount of time. The currents in these “starter motors” are fairly large because large frictional forces need to be overcome when setting something in motion.
**Solution for (b)**
Solving the relationship $I=\Delta Q/\Delta t$ for time $\Delta t$, and entering the known values for charge and current gives

$$ \begin{array}{lll}\Delta t & = & \frac{\Delta Q}{I}=\frac{\text{1.00 C}}{0.300×{\text{10}}^{-3}\;\text{C/s}} \\ & = & \text{3.33}×{\text{10}}^{3}\;\text{s.}\end{array} $$  {eq:eip-819}

**Discussion for (b)**
This time is slightly less than an hour. The small current used by the hand-held calculator takes a much longer time to move a smaller charge than the large current of the truck starter. So why can we operate our calculators only seconds after turning them on? It’s because calculators require very little energy. Such small current and energy demands allow handheld calculators to operate from solar cells or to get many hours of use out of small batteries. Remember, calculators do not have moving parts in the same way that a truck engine has with cylinders and pistons, so the technology requires smaller currents.
:::
[ref:import-auto-id2931325] shows a simple circuit and the standard schematic representation of a battery, conducting path, and load (a resistor). Schematics are very useful in visualizing the main features of a circuit. A single schematic can represent a wide variety of situations. The schematic in [ref:import-auto-id2931325] (b), for example, can represent anything from a truck battery connected to a headlight lighting the street in front of the truck to a small battery connected to a penlight lighting a keyhole in a door. Such schematics are useful because the analysis is the same for a wide variety of situations. We need to understand a few schematics to apply the concepts and analysis to many more situations.

> FIGURE {fig:import-auto-id2931325} src=../../media/Figure_21_01_02a.jpg
> alt: Part a shows a bulb glowing when its terminals are connected to a battery through a wire. The voltage of the battery is labeled as V. The current through the bulb is represented as I, and the current direction is shown using arrows emerging from the positive terminal of the battery, passing through the bulb, and entering the negative terminal of the battery. Part b shows an electric circuit diagram with a resistance connected across the terminals of a battery of voltage V. The current is shown using arrows as emerging from the positive terminal of the battery, passing through the resistance, and entering the negative terminal of the battery.
> width: 200
> caption: (a) A simple electric circuit. A closed path for current to flow through is supplied by conducting wires connecting a load to the terminals of a battery. (b) In this schematic, the battery is represented by the two parallel red lines, conducting wires are shown as straight lines, and the zigzag represents the load. The schematic represents a wide variety of similar circuits.

Note that the direction of current flow in [ref:import-auto-id2931325] is from positive to negative. *The direction of conventional current is the direction that positive charge would flow*. Depending on the situation, positive charges, negative charges, or both may move. In metal wires, for example, current is carried by electrons—that is, negative charges move. In ionic solutions, such as salt water, both positive and negative charges move. This is also true in nerve cells. A Van de Graaff generator used for nuclear research can produce a current of pure positive charges, such as protons. [ref:import-auto-id1575921] illustrates the movement of charged particles that compose a current. The fact that conventional current is taken to be in the direction that positive charge would flow can be traced back to American politician and scientist Benjamin Franklin in the 1700s. He named the type of charge associated with electrons negative, long before they were known to carry current in so many situations. Franklin, in fact, was totally unaware of the small-scale structure of electricity.
It is important to realize that there is an electric field in conductors responsible for producing the current, as illustrated in [ref:import-auto-id1575921]. Unlike static electricity, where a conductor in equilibrium cannot have an electric field in it, conductors carrying a current have an electric field and are not in static equilibrium. An electric field is needed to supply energy to move the charges.

:::note [] Making Connections: Take-Home Investigation—Electric Current Illustration

Find a straw and little peas that can move freely in the straw. Place the straw flat on a table and fill the straw with peas. When you pop one pea in at one end, a different pea should pop out the other end. This demonstration is an analogy for an electric current. Identify what compares to the electrons and what compares to the supply of energy. What other analogies can you find for an electric current?
Note that the flow of peas is based on the peas physically bumping into each other; electrons flow due to mutually repulsive electrostatic forces.
:::

> FIGURE {fig:import-auto-id1575921} src=../../media/Figure_21_01_03a.jpg
> alt: In part a, positive charges move toward the right through a conducting wire. The direction of movement of charge is indicated by arrows along the length of the wire. The area of a cross section of the wire is labeled as A. The direction of the electric field E is toward the right, in the same direction as movement of positive charge. The current direction is also toward the right, shown by an arrow. In part b, negative charges move toward the left through a conducting wire. The direction of movement of charge is indicated by arrows along the length of the wire. The area of a cross section of the wire is labeled as A. The direction of the electric field E is toward the right, opposite the direction of movement of negative charge. The current direction is also toward the right, shown by an arrow.
> width: 225
> caption: Current $I$ is the rate at which charge moves through an area $A$, such as the cross-section of a wire. Conventional current is defined to move in the direction of the electric field. (a) Positive charges move in the direction of the electric field and the same direction as conventional current. (b) Negative charges move in the direction opposite to the electric field. Conventional current is in the direction opposite to the movement of negative charge. The flow of electrons is sometimes referred to as electronic flow.

:::example {ex:fs-id3034495} Calculating the Number of Electrons that Move through a Calculator
If the 0.300-mA current through the calculator mentioned in the [ref:fs-id1957989] example is carried by electrons, how many electrons per second pass through it?
**Strategy**
The current calculated in the previous example was defined for the flow of positive charge. For electrons, the magnitude is the same, but the sign is opposite, ${I}_{\text{electrons}}=-0.300\times {\text{10}}^{-3\;}\text{C/s}$  .Since each electron $({e}^{-})$ has a charge of $–1\text{.}\text{60}\times {\text{10}}^{-\text{19}}\;\text{C}$, we can convert the current in coulombs per second to electrons per second.
**Solution**
Starting with the definition of current, we have

$$ {I}_{\text{electrons}}=\frac{\text{Δ}{Q}_{\text{electrons}}}{\text{Δ}t}=\frac{–0\text{.}\text{300}\times {\text{10}}^{-3}\;\text{C}}{\text{s}}\text{.} $$  {eq:eip-414}

We divide this by the charge per electron, so that

$$ \begin{array}{lll}\frac{{e}^{\text{–}}}{\text{s}} & = & \frac{–0\text{.}\text{300}×{\text{10}}^{-3}\;\text{C}}{\text{s}}×\frac{\text{1}\;{e}^{\text{–}}}{–1\text{.60}×{\text{10}}^{-\text{19}}\;\text{C}} \\ & = & \text{1.88}×{\text{10}}^{\text{15}}\;\frac{{e}^{\text{–}}}{\text{s}}\text{.}\end{array} $$  {eq:eip-199}

**Discussion**
There are so many charged particles moving, even in small currents, that individual charges are not noticed, just as individual water molecules are not noticed in water flow. Even more amazing is that they do not always keep moving forward like soldiers in a parade. Rather they are like a crowd of people with movement in different directions but a general trend to move forward. There are lots of collisions with atoms in the metal wire and, of course, with other electrons.
:::

## Drift Velocity
Electrical signals are known to move very rapidly. Telephone conversations carried by currents in wires cover large distances without noticeable delays. Lights come on as soon as a switch is flicked. Most electrical signals carried by currents travel at speeds on the order of ${\text{10}}^{8}\;\text{m/s}$, a significant fraction of the speed of light. Interestingly, the individual charges that make up the current move *much* more slowly on average, typically drifting at speeds on the order of ${\text{10}}^{-4}\;\text{m/s}$. How do we reconcile these two speeds, and what does it tell us about standard conductors?
The high speed of electrical signals results from the fact that the force between charges acts rapidly at a distance. Thus, when a free charge is forced into a wire, as in [ref:import-auto-id2670145], the incoming charge pushes other charges ahead of it, which in turn push on charges farther down the line. The density of charge in a system cannot easily be increased, and so the signal is passed on rapidly. The resulting electrical shock wave moves through the system at nearly the speed of light. To be precise, this rapidly moving signal or shock wave is a rapidly propagating change in electric field.

> FIGURE {fig:import-auto-id2670145} src=../../media/Figure_21_01_04a.jpg
> alt: Negatively charged electrons move through a conducting wire. Two electrons are shown entering the wire from one end, and two electrons are shown leaving the wire at the other end. The direction of movement of charge is indicated by arrows along the length of the wire toward the right. Some electrons are shown inside the wire.
> width: 250
> caption: When charged particles are forced into this volume of a conductor, an equal number are quickly forced to leave. The repulsion between like charges makes it difficult to increase the number of charges in a volume. Thus, as one charge enters, another leaves almost immediately, carrying the signal rapidly forward.

Good conductors have large numbers of free charges in them. In metals, the free charges are free electrons. [ref:import-auto-id1157496] shows how free electrons move through an ordinary conductor. The distance that an individual electron can move between collisions with atoms or other electrons is quite small. The electron paths thus appear nearly random, like the motion of atoms in a gas. But there is an electric field in the conductor that causes the electrons to drift in the direction shown (opposite to the field, since they are negative). The {term:drift velocity} ${v}_{\text{d}}$ is the average velocity of the free charges. Drift velocity is quite small, since there are so many free charges. If we have an estimate of the density of free electrons in a conductor, we can calculate the drift velocity for a given current. The larger the density, the lower the velocity required for a given current.

> FIGURE {fig:import-auto-id1157496} src=../../media/Figure_21_01_05a.jpg
> alt: The diagram shows a section of a conducting wire. A free electron is shown in the wire, and the path of the electron is shown as zigzag arrows along the length of the wire. The path is shown beginning at one end of the wire and ending at the other end. The drift velocity, v sub d, is indicated by an arrow toward the right, opposite the direction of the electric field E and the current I.
> width: 400
> caption: Free electrons moving in a conductor make many collisions with other electrons and atoms. The path of one electron is shown. The average velocity of the free charges is called the drift velocity, ${v}_{\text{d}}$, and it is in the direction opposite to the electric field for electrons. The collisions normally transfer energy to the conductor, requiring a constant supply of energy to maintain a steady current.

:::note [] Conduction of Electricity and Heat

Good electrical conductors are often good heat conductors, too. This is because large numbers of free electrons can carry electrical current and can transport thermal energy.
:::
The free-electron collisions transfer energy to the atoms of the conductor. The electric field does work in moving the electrons through a distance, but that work does not increase the kinetic energy (nor speed, therefore) of the electrons. The work is transferred to the conductor’s atoms, possibly increasing temperature. Thus a continuous power input is required to keep a current flowing. An exception, of course, is found in superconductors, for reasons we shall explore in a later chapter. Superconductors can have a steady current without a continual supply of energy—a great energy savings. In contrast, the supply of energy can be useful, such as in a lightbulb filament. The supply of energy is necessary to increase the temperature of the tungsten filament, so that the filament glows.

:::note [] Making Connections: Take-Home Investigation—Filament Observations

Find a lightbulb with a filament. Look carefully at the filament and describe its structure. To what points is the filament connected?
:::
We can obtain an expression for the relationship between current and drift velocity by considering the number of free charges in a segment of wire, as illustrated in [ref:import-auto-id3090099]. *The number of free charges per unit volume* is given the symbol $n$ and depends on the material. The shaded segment has a volume $\text{Ax}$, so that the number of free charges in it is $\text{nAx}$. The charge $\Delta Q$ in this segment is thus $\text{qnAx}$, where $q$ is the amount of charge on each carrier. (Recall that for electrons, $q$ is $-1\text{.}\text{60}\times {\text{10}}^{-\text{19}}\;\text{C}$.) Current is charge moved per unit time; thus, if all the original charges move out of this segment in time $\Delta t$, the current is

$$ I=\frac{\Delta Q}{\Delta t}=\frac{\text{qnAx}}{\Delta t} . $$  {eq:eip-950}

Note that $x/\Delta t$ is the magnitude of the drift velocity, ${v}_{\text{d}}$, since the charges move an average distance $x$ in a time $\Delta t$. Rearranging terms gives

$$ I={nqAv}_{\text{d}}, $$  {eq:eip-733}

where $I$ is the current through a wire of cross-sectional area $A$ made of a material with a free charge density $n$. The carriers of the current each have charge $q$ and move with a drift velocity of magnitude ${v}_{\text{d}}$.

> FIGURE {fig:import-auto-id3090099} src=../../media/Figure_21_01_06a.jpg
> alt: Charges are shown moving through a section of a conducting wire. The charges have a drift velocity v sub d along the length of the wire, shown by an arrow pointing to the right. The volume of a segment of the wire is equal to A times x, where x equals the product of the drift velocity, v sub d, and time t. A cross section of the wire is marked as A, and the length of the section is x.
> width: 250
> caption: All the charges in the shaded volume of this wire move out in a time $t$, having a drift velocity of magnitude ${v}_{\text{d}}=x/t$. See text for further discussion.

Note that simple drift velocity is not the entire story. The speed of an electron is much greater than its drift velocity. In addition, not all of the electrons in a conductor can move freely, and those that do might move somewhat faster or slower than the drift velocity. So what do we mean by free electrons? Atoms in a metallic conductor are packed in the form of a lattice structure. Some electrons are far enough away from the atomic nuclei that they do not experience the attraction of the nuclei as much as the inner electrons do. These are the free electrons. They are not bound to a single atom but can instead move freely among the atoms in a “sea” of electrons. These free electrons respond by accelerating when an electric field is applied. Of course as they move they collide with the atoms in the lattice and other electrons, generating thermal energy, and the conductor gets warmer. In an insulator, the organization of the atoms and the structure do not allow for such free electrons.

:::example {ex:fs-id2616778} Calculating Drift Velocity in a Common Wire
Calculate the drift velocity of electrons in a 12-gauge copper wire (which has a diameter of 2.053 mm) carrying a 20.0-A current, given that there is one free electron per copper atom. (Household wiring often contains 12-gauge copper wire, and the maximum current allowed in such wire is usually 20 A.) The density of copper is $8\text{.}\text{80}\times {\text{10}}^{3}\;{\text{kg/m}}^{3}$.
**Strategy**
We can calculate the drift velocity using the equation $I={nqAv}_{\text{d}}$. The current  $I=20.0 A$  is given, and  $q=\;-1.60\times {10}^{-19}\text{C}$  is the charge of an electron. We can calculate the area of a cross-section of the wire using the formula $A=\pi {r}^{2},$ where $r$  is one-half the given diameter, 2.053 mm. We are given the density of copper,  $8.80\times {10}^{3}\;{\text{kg/m}}^{3},$ and the periodic table shows that the atomic mass of copper is 63.54 g/mol. We can use these two quantities along with Avogadro’s number,  $6.02\times {10}^{23}\;\text{atoms/mol},$ to determine  $n,$ the number of free electrons per cubic meter.
**Solution**
First, calculate the density of free electrons in copper. There is one free electron per copper atom. Therefore,   is the same as the number of copper atoms per  ${m}^{3}$. We can now find  $n$ as follows:

$$ \begin{array}{lll}n & = & \frac{\text{1}\;{e}^{-}}{\text{atom}}\times \frac{6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;\text{atoms}}{\text{mol}}\times \frac{1 mol}{\text{63}\text{.}\text{54 g}}\times \frac{\text{1000 g}}{\text{kg}}\times \frac{\text{8.80}\times {\text{10}}^{3}\;\text{kg}}{{\text{1 m}}^{3}} \\ & = & \text{8}\text{.}\text{342}\times {\text{10}}^{\text{28}}\;{e}^{-}{\text{/m}}^{3}\text{.}\end{array} $$  {eq:eip-226}

The cross-sectional area of the wire is

$$ \begin{array}{lll}A & = & \pi {r}^{2} \\ & = & \pi {(\frac{2.053\times {\text{10}}^{−3}\;\text{m}}{2})}^{2} \\ & = & \text{3.310}\times {\text{10}}^{\text{–6}}\;{\text{m}}^{2}\text{.}\end{array} $$  {eq:eip-192}

Rearranging  $I=nqA{v}_{\text{d}}$ to isolate drift velocity gives

$$ \begin{array}{l}{v}_{\text{d}}=\frac{I}{\text{nqA}} \\ =\frac{\text{20.0 A}}{(8\text{.}\text{342}\times {\text{10}}^{\text{28}}{\text{/m}}^{3})(\text{–1}\text{.}\text{60}\times {\text{10}}^{\text{–19}}\;\text{C})(3\text{.}\text{310}\times {\text{10}}^{\text{–6}}\;{\text{m}}^{2})} \\ =\text{–4}\text{.}\text{53}\times {\text{10}}^{\text{–4}}\;\text{m/s.}\end{array} $$  {eq:eip-724}

**Discussion**
The minus sign indicates that the negative charges are moving in the direction opposite to conventional current. The small value for drift velocity (on the order of ${\text{10}}^{-4}\;\text{m/s}$) confirms that the signal moves on the order of ${\text{10}}^{\text{12}}$ times faster (about ${\text{10}}^{8}\;\text{m/s}$) than the charges that carry it.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2221393} type=ap-test-prep 
PROBLEM:
Which of the following can be explained on the basis of conservation of charge in a closed circuit consisting of a battery, resistor, and metal wires?
(a) The number of electrons leaving the battery will be equal to the number of electrons entering the battery.
(b) The number of electrons leaving the battery will be less than the number of electrons entering the battery.
(c) The number of protons leaving the battery will be equal to the number of protons entering the battery.
(d) The number of protons leaving the battery will be less than the number of protons entering the battery.
SOLUTION:
(a)
:::

:::exercise {fs-id2408913} type=ap-test-prep 
PROBLEM:
When a battery is connected to a bulb, there is 2.5 A of current in the circuit. What amount of charge will flow though the circuit in a time of 0.5 s?
(a) 0.5 C
(b) 1 C
(c) 1.25 C
(d) 1.5 C
:::

:::exercise {fs-id2826587} type=ap-test-prep 
PROBLEM:
If 0.625 × 10<sup>20</sup> electrons flow through a circuit each second, what is the current in the circuit?
SOLUTION:
10 A
:::

:::exercise {fs-id3741390} type=ap-test-prep 
PROBLEM:
Two students calculate the charge flowing through a circuit. The first student concludes that 300 C of charge flows in 1 minute. The second student concludes that 3.125 × 10<sup>19</sup> electrons flow per second. If the current measured in the circuit is 5 A, which of the two students (if any) have performed the calculations correctly?
:::

## Section Summary {section:section-summary}
- Electric current $I$ is the rate at which charge flows, given by

$$ I=\frac{\Delta Q}{\Delta t}\text{,} $$  {eq:eip-id2583201}

    where $\Delta Q$ is the amount of charge passing through an area in time $\Delta t$.
- The direction of conventional current is taken as the direction in which positive charge moves.
- The SI unit for current is the ampere (A), where $\text{1 A}=\text{1 C/s.}$
- Current is the flow of free charges, such as electrons and ions.
- Drift velocity ${v}_{\text{d}}$ is the average speed at which these charges move.
- Current $I$ is proportional to drift velocity ${v}_{\text{d}}$, as expressed in the relationship $I={\text{nqAv}}_{\text{d}}$. Here, $I$ is the current through a wire of cross-sectional area $A$. The wire’s material has a free-charge density $n$, and each carrier has charge $q$ and a drift velocity ${v}_{\text{d}}$.
- Electrical signals travel at speeds about ${\text{10}}^{\text{12}}$ times greater than the drift velocity of free electrons.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2392409} type=conceptual-questions 
PROBLEM:
Can a wire carry a current and still be neutral—that is, have a total charge of zero? Explain.
:::

:::exercise {fs-id2600992} type=conceptual-questions 
PROBLEM:
Car batteries are rated in ampere-hours ($\text{A}⋅\text{h}$). To what physical quantity do ampere-hours correspond (voltage, charge, . . .), and what relationship do ampere-hours have to energy content?
:::

:::exercise {fs-id1365959} type=conceptual-questions 
PROBLEM:
If two different wires having identical cross-sectional areas carry the same current, will the drift velocity be higher or lower in the better conductor? Explain in terms of the equation ${v}_{\text{d}}=\frac{I}{\text{nqA}}$, by considering how the density of charge carriers $n$ relates to whether or not a material is a good conductor.
:::

:::exercise {fs-id1019372} type=conceptual-questions 
PROBLEM:
Why are two conducting paths from a voltage source to an electrical device needed to operate the device?
:::

:::exercise {fs-id2611504} type=conceptual-questions 
PROBLEM:
In cars, one battery terminal is connected to the metal body. How does this allow a single wire to supply current to electrical devices rather than two wires?
:::

:::exercise {fs-id3154476} type=conceptual-questions 
PROBLEM:
Why isn’t a bird sitting on a high-voltage power line electrocuted? Contrast this with the situation in which a large bird hits two wires simultaneously with its wings.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1599422} type=problems-exercises 
PROBLEM:
What is the current in milliamperes produced by the solar cells of a pocket calculator through which 4.00 C of charge passes in 4.00 h?
SOLUTION:
0.278 mA
:::

:::exercise {fs-id2655543} type=problems-exercises 
PROBLEM:
A total of 600 C of charge passes through a flashlight in 0.500 h. What is the average current?
:::

:::exercise {fs-id2408383} type=problems-exercises 
PROBLEM:
What is the current when a typical static charge of $0\text{.}\text{250}\;μ\text{C}$ moves from your finger to a metal doorknob in $1.00\;μ\text{s}$?
SOLUTION:
0.250 A
:::

:::exercise {fs-id744817} type=problems-exercises 
PROBLEM:
Find the current when 2.00 nC jumps between your comb and hair over a $0\text{.}\text{500 -}\;μ\text{s}$ time interval.
:::

:::exercise {fs-id3077567} type=problems-exercises 
PROBLEM:
A large lightning bolt had a 20,000-A current and moved 30.0 C of charge. What was its duration?
SOLUTION:
1.50ms
:::

:::exercise {fs-id3457954} type=problems-exercises 
PROBLEM:
The 200-A current through a spark plug moves 0.300 mC of charge. How long does the spark last?
:::

:::exercise {fs-id2397006} type=problems-exercises 
PROBLEM:
(a) A defibrillator sends a 6.00-A current through the chest of a patient by applying a 10,000-V potential as in the figure below. What is the resistance of the path? (b) The defibrillator paddles make contact with the patient through a conducting gel that greatly reduces the path resistance. Discuss the difficulties that would ensue if a larger voltage were used to produce the same current through the patient, but with the path having perhaps 50 times the resistance. (Hint: The current must be about the same, so a higher voltage would imply greater power. Use this equation for power: $P={I}^{2}R$.)

> FIGURE {fig:import-auto-id2589892} src=../../media/Figure_21_01_07a.jpg
> alt: Figure represents a defibrillation unit used on a patient. The circuit is also represented. It shows a capacitor driving a current through the chest of a patient. The opposite plates of the capacitor are marked as positive Q and negative Q. The direction of current in the connecting wires from the capacitor to the defibrillation unit is shown in a clockwise direction with an arrow on the wire, and the direction of electrons is shown opposite to this direction with an arrow.
> width: 250
> caption: The capacitor in a defibrillation unit drives a current through the heart of a patient.

SOLUTION:
(a) $1\text{.}\text{67}\text{k}Ω$
(b) If a 50 times larger resistance existed, keeping the current about the same, the power would be increased by a factor of about 50 (based on the equation $P={I}^{2}R$), causing much more energy to be transferred to the skin, which could cause serious burns. The gel used reduces the resistance, and therefore reduces the power transferred to the skin.
:::

:::exercise {fs-id2025963} type=problems-exercises 
PROBLEM:
During open-heart surgery, a defibrillator can be used to bring a patient out of cardiac arrest. The resistance of the path is $5\text{00 Ω}$ and a 10.0-mA current is needed. What voltage should be applied?
:::

:::exercise {fs-id2660448} type=problems-exercises 
PROBLEM:
(a) A defibrillator passes 12.0 A of current through the torso of a person for 0.0100 s. How much charge moves? (b) How many electrons pass through the wires connected to the patient? (See figure two problems earlier.)
SOLUTION:
(a) 0.120 C
(b) $7\text{.}\text{50}×{\text{10}}^{\text{17}}\text{electrons}$
:::

:::exercise {fs-id3257336} type=problems-exercises 
PROBLEM:
A clock battery wears out after moving 10,000 C of charge through the clock at a rate of 0.500 mA. (a) How long did the clock run? (b) How many electrons per second flowed?
:::

:::exercise {fs-id3008630} type=problems-exercises 
PROBLEM:
The batteries of a submerged non-nuclear submarine supply 1000 A at full speed ahead. How long does it take to move Avogadro’s number ($6\text{.}\text{02}×{\text{10}}^{\text{23}}$) of electrons at this rate?
SOLUTION:
96.3 s
:::

:::exercise {fs-id1815315} type=problems-exercises 
PROBLEM:
Electron guns are used in X-ray tubes. The electrons are accelerated through a relatively large voltage and directed onto a metal target, producing X-rays. (a) How many electrons per second strike the target if the current is 0.500 mA? (b) What charge strikes the target in 0.750 s?
:::

:::exercise {fs-id1827821} type=problems-exercises 
PROBLEM:
A large cyclotron directs a beam of ${\text{He}}^{\text{++}}$ nuclei onto a target with a beam current of 0.250 mA. (a) How many ${\text{He}}^{\text{++}}$ nuclei per second is this? (b) How long does it take for 1.00 C to strike the target? (c) How long before 1.00 mol of ${\text{He}}^{\text{++}}$ nuclei strike the target?
SOLUTION:
(a) ${7.81 × 10}^{\text{14}}\;{\text{He}}^{\text{++}}\;\text{nuclei/s}$
(b) ${4.00 × 10}^{\text{3}}\;\text{s}$
(c) ${7.71 × 10}^{\text{8}}\;\text{s}$
:::

:::exercise {fs-id1575376} type=problems-exercises 
PROBLEM:
Repeat the above example on [ref:fs-id2616778], but for a wire made of silver and given there is one free electron per silver atom.
:::

:::exercise {fs-id2041523} type=problems-exercises 
PROBLEM:
Using the results of the above example on [ref:fs-id2616778], find the drift velocity in a copper wire of twice the diameter and carrying 20.0 A.
SOLUTION:
$-1\text{.}\text{13}×{\text{10}}^{-4}\text{m/s}$
:::

:::exercise {fs-id1327767} type=problems-exercises 
PROBLEM:
A 14-gauge copper wire has a diameter of 1.628 mm. What magnitude current flows when the drift velocity is 1.00 mm/s? (See above example on [ref:fs-id2616778] for useful information.)
:::

:::exercise {fs-id1602358} type=problems-exercises 
PROBLEM:
SPEAR, a storage ring about 72.0 m in diameter at the Stanford Linear Accelerator (closed in 2009), has a 20.0-A circulating beam of electrons that are moving at nearly the speed of light. (See [ref:import-auto-id1319847].) How many electrons are in the beam?

> FIGURE {fig:import-auto-id1319847} src=../../media/Figure_21_01_08a-2cfa.jpg
> alt: The circuit shows a doughnut shaped storage ring called SPEAR. The cross sections of ring are marked as A and are represented as dotted circular sections. The diameter of storage ring as measured between diametrically opposite cross sections on both ends is seventy two meters. The current in the ring is given as twenty amps. The direction of current I is shown opposite to the direction of movement of electrons e using arrows.
> caption: Electrons circulating in the storage ring called SPEAR constitute a 20.0-A current. Because they travel close to the speed of light, each electron completes many orbits in each second.

SOLUTION:
$9\text{.}\text{42}×{\text{10}}^{\text{13}}\text{electrons}$
:::

## Glossary
- {def} **electric current**: the rate at which charge flows, *I* = Δ*Q*/Δ*t*
- {def} **ampere**: (amp) the SI unit for current; 1 A = 1 C/s
- {def} **drift velocity**: the average velocity at which free charges flow in response to an electric field

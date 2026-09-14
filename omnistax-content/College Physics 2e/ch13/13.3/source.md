# The Ideal Gas Law

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- State the ideal gas law in terms of molecules and in terms of moles.
- Use the ideal gas law to calculate pressure change, temperature change, volume change, or the number of molecules or moles in a given volume.
- Use Avogadro’s number to convert between number of molecules and number of moles.

> FIGURE {fig:import-auto-id1563742} src=../../media/Figure_14_03_00.jpg
> alt: Floating high with style! A vibrant yellow hot air balloon, adorned with a cool face and sunglasses, glides across the sky.
> width: 200
> caption: The air inside this hot air balloon flying over Putrajaya, Malaysia, is hotter than the ambient air. As a result, the balloon experiences a buoyant force pushing it upward that is larger than its weight. (credit: Kevin Poh, Flickr)

In this section, we continue to explore the thermal behavior of gases. In particular, we examine the characteristics of atoms and molecules that compose gases. (Most gases, for example nitrogen, ${\text{N}}_{2}$, and oxygen, ${\text{O}}_{2}$, are composed of two or more atoms. We will primarily use the term “molecule” in discussing a gas, but note that this discussion also applies to monatomic gases, such as helium.)
Gases are easily compressed. We can see evidence of this in [ref:import-auto-id1814176](module:m42215), where you will note that gases have the *largest* coefficients of volume expansion. The large coefficients mean that gases expand and contract very rapidly with temperature changes. In addition, you will note that most gases expand at the *same* rate, or have the same $β$. This raises the question as to why gases should all act in nearly the same way, when liquids and solids have widely varying expansion rates.
The answer lies in the large separation of atoms and molecules in gases, compared to their sizes, as illustrated in [ref:import-auto-id2233613]. Because atoms and molecules have large separations, forces between them can be ignored, except when they collide with each other during collisions. The motion of atoms and molecules (at temperatures well above the boiling temperature) is fast, such that the gas occupies all of the accessible volume and the expansion of gases is rapid. In contrast, in liquids and solids, atoms and molecules are closer together and are quite sensitive to the forces between them.

> FIGURE {fig:import-auto-id2233613} src=../../media/Figure_14_03_01.jpg
> alt: Spheres representing atoms and molecules; the spheres are relatively far apart and are distributed randomly.
> width: 250
> caption: Atoms and molecules in a gas are typically widely separated, as shown. Because the forces between them are quite weak at these distances, the properties of a gas depend more on the number of atoms per unit volume and on temperature than on the type of atom.

To get some idea of how pressure, temperature, and volume of a gas are related to one another, consider what happens when you pump air into an initially deflated tire. The tire’s volume first increases in direct proportion to the amount of air injected, without much increase in the tire pressure. Once the tire has expanded to nearly its full size, the walls limit volume expansion. If we continue to pump air into it, the pressure increases. The pressure will further increase when the car is driven and the tires move. Most manufacturers specify optimal tire pressure for cold tires. (See [ref:import-auto-id2102337].)

> FIGURE {fig:import-auto-id2102337} src=../../media/Figure_14_03_02.jpg
> alt: The figure has three parts, each part showing a pair of tires, and each tire connected to a pressure gauge. Each pair of tires represents the before and after images of a single tire, along with a change in pressure in that tire. In part a, the tire pressure is initially zero. After some air is added, represented by an arrow labeled Add air, the pressure rises to slightly above zero. In part b, the tire pressure is initially at the half-way mark. After some air is added, represented by an arrow labeled Add air, the pressure rises to the three-fourths mark. In part c, the tire pressure is initially at the three-fourths mark. After the temperature is raised, represented by an arrow labeled Increase temperature, the pressure rises to nearly the full mark.
> width: 500
> caption: (a) When air is pumped into a deflated tire, its volume first increases without much increase in pressure. (b) When the tire is filled to a certain point, the tire walls resist further expansion and the pressure increases with more air. (c) Once the tire is inflated, its pressure increases with temperature.

In many common circumstances, including, for example, room temperature air, the gas particles have negligible volume and do not interact with each other, aside from perfectly elastic collisions. In such cases, the gas is called an ideal gas, and the relationship between the pressure, volume, and temperature is given by the equation called the ideal gas law. An equation such as the ideal gas law, which relates behavior of a physical system in terms of its thermodynamic properties, is called an equation of state.

:::note [] Ideal Gas Law

The {term:ideal gas law} states that

$$ \text{PV}=\text{NkT}, $$  {eq:import-auto-id2374115}

where $P$ is the absolute pressure of a gas, $V$ is the volume it occupies, $N$ is the number of atoms and molecules in the gas, and $T$ is its absolute temperature. The constant $k$ is called the {term:Boltzmann constant} in honor of Austrian physicist Ludwig Boltzmann (1844–1906) and has the value

$$ k=1\text{.}\text{38}\times {\text{10}}^{-\text{23}}\;\text{J}/\text{K}. $$  {eq:import-auto-id1586104}

:::
The ideal gas law can be derived from basic principles, but was originally deduced from experimental measurements of Charles’ law (that volume occupied by a gas is proportional to temperature at a fixed pressure) and from Boyle’s law (that for a fixed temperature, the product $\text{PV}$ is a constant). In the ideal gas model, the volume occupied by its atoms and molecules is a negligible fraction of $V$. The ideal gas law describes the behavior of real gases under most conditions. (Note, for example, that $N$ is the total number of atoms and molecules, independent of the type of gas.)
Let us see how the ideal gas law is consistent with the behavior of filling the tire when it is pumped slowly and the temperature is constant. At first, the pressure $P$ is essentially equal to atmospheric pressure, and the volume $V$ increases in direct proportion to the number of atoms and molecules $N$ put into the tire. Once the volume of the tire is constant, the equation $\text{PV}=\text{NkT}$ predicts that the pressure should increase in proportion to *the number N of atoms and molecules*.

:::example {ex:fs-id1667893} Calculating Pressure Changes Due to Temperature Changes: Tire Pressure
Suppose your bicycle tire is fully inflated, with an absolute pressure of $7\text{.}\text{00}\times {\text{10}}^{5}\;\text{Pa}$ (a gauge pressure of just under $\text{90}\text{.}0\;{\text{lb/in}}^{2}$) at a temperature of $\text{18}\text{.}0\text{º}\text{C}$. What is the pressure after its temperature has risen to $\text{35}\text{.}0\text{º}\text{C}$? Assume that there are no appreciable leaks or changes in volume.
**Strategy**
The pressure in the tire is changing only because of changes in temperature. First we need to identify what we know and what we want to know, and then identify an equation to solve for the unknown.
We know the initial pressure ${P}_{0}=7\text{.00}\times {\text{10}}^{5}\;\text{Pa}$, the initial temperature ${T}_{0}=\text{18}\text{.}0ºC$, and the final temperature ${T}_{\text{f}}=35\text{.}0ºC$. We must find the final pressure ${P}_{\text{f}}$. How can we use the equation $\text{PV}=\text{NkT}$? At first, it may seem that not enough information is given, because the volume $V$ and number of atoms $N$ are not specified. What we can do is use the equation twice: ${P}_{0}{V}_{0}={\text{NkT}}_{0}$ and ${P}_{\text{f}}{V}_{\text{f}}={\text{NkT}}_{\text{f}}$. If we divide ${P}_{\text{f}}{V}_{\text{f}}$ by ${P}_{0}{V}_{0}$ we can come up with an equation that allows us to solve for ${P}_{\text{f}}$.

$$ \frac{{P}_{\text{f}}{V}_{\text{f}}}{{P}_{0}{V}_{0}}=\frac{{N}_{\text{f}}{\text{kT}}_{\text{f}}}{{N}_{0}{\text{kT}}_{0}} $$  {eq:import-auto-id2084395}

Since the volume is constant, ${V}_{\text{f}}$ and ${V}_{0}$ are the same and they cancel out. The same is true for ${N}_{\text{f}}$ and ${N}_{0}$, and $k$, which is a constant. Therefore,

$$ \frac{{P}_{\text{f}}}{{P}_{0}}=\frac{{T}_{\text{f}}}{{T}_{0}}\text{.} $$  {eq:import-auto-id1807145}

We can then rearrange this to solve for ${P}_{\text{f}}$:

$$ {P}_{\text{f}}={P}_{0}\frac{{T}_{\text{f}}}{{T}_{0}}, $$  {eq:import-auto-id2084642}

where the temperature must be in units of kelvins, because ${T}_{0}$ and ${T}_{\text{f}}$ are absolute temperatures.
**Solution**
1. Convert temperatures from Celsius to Kelvin.

$$ \begin{array}{l}{T}_{0}=(\text{18}\text{.}0+\text{273})\text{K}=\text{291 K} \\ {T}_{\text{f}}=(\text{35}\text{.}0+\text{273})\text{K}=\text{308 K}\end{array} $$  {eq:import-auto-id2387502}

2. Substitute the known values into the equation.

$$ {P}_{\text{f}}={P}_{0}\frac{{T}_{\text{f}}}{{T}_{0}}=7\text{.}\text{00}\times {\text{10}}^{5}\;\text{Pa}(\frac{\text{308 K}}{\text{291 K}})=7\text{.}\text{41}\times {\text{10}}^{5}\;\text{Pa} $$  {eq:import-auto-id2677638}

**Discussion**
The final temperature is about 6% greater than the original temperature, so the final pressure is about 6% greater as well. Note that *absolute* pressure and *absolute* temperature must be used in the ideal gas law.
:::

:::note [] Making Connections: Take-Home Experiment—Refrigerating a Balloon

Inflate a balloon at room temperature. Leave the inflated balloon in the refrigerator overnight. What happens to the balloon, and why?
:::

:::example {ex:fs-id1843505} Calculating the Number of Molecules in a Cubic Meter of Gas
How many molecules are in a typical object, such as air in a tire? We can use the ideal gas law to give us an idea of how large $N$ typically is.
Calculate the number of molecules in a cubic meter of air at standard temperature and pressure (STP), which is defined to be $0\text{º}\text{C}$ and atmospheric pressure.
**Strategy**
Because pressure, volume, and temperature are all specified, we can use the ideal gas law $\text{PV}=\text{NkT}$, to find $N$.
**Solution**
1. Identify the knowns.

$$ \begin{array}{lll}T & = & 0\text{º}\text{C}=\text{273 K} \\ P & = & 1\text{.}\text{01}\times {\text{10}}^{5}\;\text{Pa} \\ V & = & 1\text{.}\text{00}\;{\text{m}}^{3} \\ k & = & 1\text{.}\text{38}\times {\text{10}}^{-\text{23}}\;\text{J/K}\end{array} $$  {eq:import-auto-id2409094}

2. Identify the unknown: number of molecules, $N$.
3. Rearrange the ideal gas law to solve for $N$.

$$ \begin{array}{l}\text{PV}=\text{NkT} \\ N=\frac{\text{PV}}{\text{kT}}\end{array} $$  {eq:import-auto-id3224643}

4. Substitute the known values into the equation and solve for $N$.

$$ N=\frac{\text{PV}}{\text{kT}}=\frac{(1\text{.}\text{01}\times {\text{10}}^{5}\;\text{Pa})(1\text{.}{\text{00 m}}^{3})}{(1\text{.}\text{38}\times {\text{10}}^{-\text{23}}\;\text{J/K})(\text{273 K})}=2\text{.}\text{68}\times {\text{10}}^{\text{25}}\;\text{molecules} $$  {eq:import-auto-id2887530}

**Discussion**
This number is undeniably large, considering that a gas is mostly empty space. $N$ is huge, even in small volumes. For example, $1\;{\text{cm}}^{3}$ of a gas at STP has $2\text{.}\text{68}\times {\text{10}}^{\text{19}}$ molecules in it. Once again, note that $N$ is the same for all types or mixtures of gases.
:::

## Moles and Avogadro’s Number
It is sometimes convenient to work with a unit other than molecules when measuring the amount of substance. The {term:mole} (abbreviated mol) is the SI unit for the amount of a substance. This number is also {term:Avogadro’s number}$({N}_{\text{A}})$, in recognition of Italian scientist Amedeo Avogadro (1776–1856), who developed the concept of the mole, based on the hypothesis that equal volumes of gas, at the same pressure and temperature, contain equal numbers of molecules, independent of the type of gas. This hypothesis has been confirmed. Originally defined^[https://www.bipm.org/en/measurement-units] as the number of atoms in 12 grams of carbon-12, as of 2019, a mole is defined as exactly 6.02214076 × 10<sup>23</sup> elementary entities, so that to three significant figures Avogadro’s number is

$$ {N}_{\text{A}}=6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;{\text{mol}}^{-1}\text{.} $$  {eq:import-auto-id2677659}

:::note [] Avogadro’s Number

One mole always contains $6\text{.}\text{02}\times {\text{10}}^{\text{23}}$ particles (atoms or molecules), independent of the element or substance. A mole of any substance has a mass in grams equal to its molecular (molar) mass, which can be calculated by multiplying the number of moles of the substance by its atomic mass. The atomic masses of elements are given in the periodic table of elements and in [Appendix A](module:m42699)

$$ {N}_{\text{A}}=6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;{\text{mol}}^{-1} $$  {eq:import-auto-id2919405}

:::

> FIGURE {fig:import-auto-id2936416} src=../../media/Figure_14_03_03.jpg
> alt: The illustration shows relatively flat land with a solitary mountain, labeled Mt. Everest, and blue sky above. A double-headed vertical arrow stretches between the land and a point in the sky that is well above the peak of the mountain. The arrow, labeled table tennis balls, serves to indicate that a column of one mole of table tennis balls would reach a point in the sky that is much higher than the peak of Mt. Everest.
> width: 400
> caption: How big is a mole? On a macroscopic level, one mole of table tennis balls would cover the Earth to a depth of about 40 km.

:::exercise {fs-id2696745} type=check-understanding Check Your Understanding

PROBLEM:
The active ingredient in a Tylenol pill is 325 mg of acetaminophen $({\text{C}}_{8}{\text{H}}_{9}{\text{NO}}_{2})$. Find the molar mass of acetaminophen, and from this, the number of moles and the number of molecules of acetaminophen in a single pill.
SOLUTION:
We first need to calculate the molar mass (the mass of one mole) of acetaminophen. To do this, we need to multiply the number of atoms of each element by the element’s atomic mass.

$$ \begin{array}{l}(\text{8 moles of carbon})(\text{12 grams/mole})+(\text{9 moles hydrogen})(\text{1 gram/mole}) \\ +(\text{1 mole nitrogen})(\text{14 grams/mole})+(\text{2 moles oxygen})(\text{16 grams/mole})=\text{151 g}\end{array} $$  {eq:import-auto-id2919489}

Then we need to calculate the number of moles in 325 mg.

$$ (\frac{\text{325 mg}}{\text{151 grams/mole}})(\frac{1 gram}{\text{1000 mg}})=2.15\times {\text{10}}^{-3}\;\text{moles} $$  {eq:import-auto-id2386722}

Then use Avogadro’s number to calculate the number of molecules.

$$ N=(\text{2.15}\times {\text{10}}^{-3}\;\text{moles})(\text{6.02}\times {\text{10}}^{\text{23}}\;\text{molecules/mole})=\text{1.30}\times {\text{10}}^{\text{21}}\;\text{molecules} $$  {eq:import-auto-id2627386}

:::

:::example {ex:fs-id2322275} Calculating Moles per Cubic Meter and Liters per Mole
Calculate: (a) the number of moles in $1\text{.}\text{00}\;{\text{m}}^{3}$ of gas at STP, and (b) the number of liters of gas per mole at STP.
**Strategy and Solution**
(a) We are asked to find the number of moles per cubic meter, and we know from [ref:fs-id1843505] that the number of molecules per cubic meter at STP is $2\text{.}\text{68}\times {\text{10}}^{\text{25}}$. The number of moles can be found by dividing the number of molecules by Avogadro’s number. We let $n$ stand for the number of moles,

$$ n\;{\text{mol/m}}^{3}=\frac{N\;{\text{molecules/m}}^{3}}{6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;\text{molecules/mol}}=\frac{2\text{.}\text{68}\times {\text{10}}^{\text{25}}\;{\text{molecules/m}}^{3}}{6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;\text{molecules/mol}}=\text{44}\text{.}5\;{\text{mol/m}}^{3}\text{.} $$  {eq:import-auto-id2564703}

(b) Using the value obtained for the number of moles in a cubic meter, and converting cubic meters to liters, we obtain

$$ \frac{({\text{10}}^{3}\;{\text{L/m}}^{3})}{44\text{.}5\;{\text{mol/m}}^{3}}=\text{22}\text{.}5\;\text{L/mol}\text{.} $$  {eq:import-auto-id2919356}

**Discussion**
This value is very close to the accepted value of 22.4 L/mol. The slight difference is due to rounding errors caused by using three-digit input. Again this number is the same for all gases. In other words, it is independent of the gas.
The (average) molar weight of dry air (approximately 80% ${\text{N}}_{2}$ and 20% ${\text{O}}_{2}$) at STP is $M=\text{28.8}\;\text{g/mol.}$ Thus the mass of one cubic meter of air is 1.28 kg. The density of dry room temperature air is about 10% lower. If a living room has dimensions $5\;\text{m}\times \text{5 m}\times \text{3 m,}$ the mass of air inside the room is around 90 kg, which is the typical mass of a human.
:::

:::exercise {fs-id2710286} type=check-understanding Check Your Understanding

PROBLEM:
The density of air at standard conditions $(P=1\;\text{atm}$ and $T=\text{20}\text{º}\text{C})$ is $1.20\;{\text{kg/m}}^{3}$. At what pressure is the density $0.60\;{\text{kg/m}}^{3}$ if the temperature and number of molecules are kept constant?
SOLUTION:
The best way to approach this question is to think about what is happening. If the density drops to half its original value and no molecules are lost, then the volume must double. If we look at the equation $\text{PV}=\text{NkT}$, we see that when the temperature is constant, the pressure is inversely proportional to volume. Therefore, if the volume doubles, the pressure must drop to half its original value, and ${P}_{\text{f}}=0\text{.}\text{50}\;\text{atm}\text{.}$
:::

## The Ideal Gas Law Restated Using Moles
A very common expression of the ideal gas law uses the number of moles, $n$, rather than the number of atoms and molecules, $N$. We start from the ideal gas law,

$$ \text{PV}=\text{NkT,} $$  {eq:import-auto-id2689659}

and multiply and divide the equation by Avogadro’s number ${N}_{\text{A}}$. This gives

$$ \text{PV}=\frac{N}{{N}_{\text{A}}}{N}_{\text{A}}\text{kT}\text{.} $$  {eq:import-auto-id2889307}

Note that $n=N/{N}_{\text{A}}$ is the number of moles. We define the universal gas constant $R={N}_{\text{A}}k$, and obtain the ideal gas law in terms of moles.

:::note [] Ideal Gas Law (in terms of moles)

The ideal gas law (in terms of moles) is

$$ \text{PV}=\text{nRT}. $$  {eq:eip-654}

The numerical value of $R$ in SI units is

$$ R={N}_{\text{A}}k=(6.02\times {\text{10}}^{\text{23}}\;{\text{mol}}^{-1})(1.38\times {\text{10}}^{-\text{23}}\;\text{J/K})=8.31\;\text{J}/\text{(mol}⋅\text{K)}. $$  {eq:import-auto-id3226853}

In other units,

$$ \begin{array}{lll}R & = & 1.99\;\text{cal/(mol}⋅\text{K)} \\ R & = & 0.0821\;\text{L}⋅\text{atm/(mol}⋅\text{K).}\end{array} $$  {eq:import-auto-id2919790}

You can use whichever form of $R$ is most convenient for a particular problem.
:::

:::example {ex:fs-id1444855} Calculating Number of Moles: Gas in a Bike Tire
How many moles of gas are in a bike tire with a volume of $2\text{.}\text{00}\times {\text{10}}^{-3}\;{\text{m}}^{3}(2\text{.}\text{00 L}),$ a pressure of $7\text{.}\text{00}\times {\text{10}}^{5}\;\text{Pa}$ (a gauge pressure of just under $\text{90}\text{.}0\;{\text{lb/in}}^{2}$), and at a temperature of $\text{18}\text{.}0\text{º}\text{C}$?
**Strategy**
Identify the knowns and unknowns, and choose an equation to solve for the unknown. In this case, we solve the ideal gas law, $\text{PV}=\text{nRT}$, for the number of moles $n$.
**Solution**
1. Identify the knowns.

$$ \begin{array}{lll}P & = & 7\text{.}\text{00}\times {\text{10}}^{5}\;\text{Pa} \\ V & = & 2\text{.}\text{00}\times {\text{10}}^{-3}\;{\text{m}}^{3} \\ T & = & \text{18}\text{.}0\text{º}\text{C}=\text{291 K} \\ R & = & 8\text{.}\text{31}\;\text{J/mol}⋅\text{K}\end{array} $$  {eq:import-auto-id2124330}

2. Rearrange the equation to solve for $n$ and substitute known values.

$$ \begin{array}{lll}n & = & \frac{\text{PV}}{\text{RT}}=\frac{(7\text{.}\text{00}\times {\text{10}}^{5}\;\text{Pa})(2\text{.}00\times {\text{10}}^{-3}\;{\text{m}}^{3})}{(8\text{.}\text{31}\;\text{J/mol}⋅\text{K})(\text{291}\;\text{K})} \\ & = & \text{0}\text{.}\text{579}\;\text{mol}\end{array} $$  {eq:import-auto-id2402631}

**Discussion**
The most convenient choice for $R$ in this case is $8\text{.}\text{31}\;\text{J/mol}⋅\text{K,}$ because our known quantities are in SI units. The pressure and temperature are obtained from the initial conditions in [ref:fs-id1667893], but we would get the same answer if we used the final values.
:::
The ideal gas law can be considered to be another manifestation of the law of conservation of energy (see [Conservation of Energy](module:m42151)). Work done on a gas results in an increase in its energy, increasing pressure and/or temperature. This increased energy can also be viewed as increased internal kinetic energy, given the gas’s atoms and molecules.

## The Ideal Gas Law and Energy
Let us now examine the role of energy in the behavior of gases. When you inflate a bike tire by hand, you do work by repeatedly exerting a force through a distance. This energy goes into increasing the pressure of air inside the tire and increasing the temperature of the pump and the air.
The ideal gas law is closely related to energy: the dimensions on both sides are those of energy, with units of joules when using SI units. The right-hand side of the ideal gas law in $\text{PV}=\text{NkT}$ is $\text{NkT}$. This term is proportional to the amount of translational kinetic energy of $N$ atoms or molecules at an absolute temperature $T$, as we shall see formally in [Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature](module:m42217). The left-hand side of the ideal gas law is $\text{PV}$, which also has the units of joules. Pressure is force per unit area, so pressure multiplied by volume is force times displacement, or energy. The important point is that there is energy in a gas related to both its pressure and its volume. The energy can be changed when the gas is doing work as it expands—something we explore in [Heat and Heat Transfer Methods](module:m42223)—similar to what occurs in gasoline or steam engines and turbines.

:::note [] Problem-Solving Strategy: The Ideal Gas Law

*Step 1* Examine the situation to determine that an ideal gas is involved. Most gases are nearly ideal.
*Step 2* Make a list of what quantities are given, or can be inferred from the problem as stated (identify the known quantities). Convert known values into proper SI units (K for temperature, Pa for pressure, ${\text{m}}^{3}$ for volume, molecules for $N$, and moles for $n$).
*Step 3* Identify exactly what needs to be determined in the problem (identify the unknown quantities). A written list is useful.
*Step 4* Determine whether the number of molecules or the number of moles is known, in order to decide which form of the ideal gas law to use. The first form is $\text{PV}=\text{NkT}$ and involves $N$, the number of atoms or molecules. The second form is $\text{PV}=\text{nRT}$ and involves $n$, the number of moles.
*Step 5* Solve the ideal gas law for the quantity to be determined (the unknown quantity). You may need to take a ratio of final states to initial states to eliminate the unknown quantities that are kept fixed.
*Step 6* Substitute the known quantities, along with their units, into the appropriate equation, and obtain numerical solutions complete with units. Be certain to use absolute temperature and absolute pressure.
*Step 7* Check the answer to see if it is reasonable: Does it make sense?
:::

:::exercise {fs-id1445894} type=check-understanding Check Your Understanding

PROBLEM:
Liquids and solids have densities about 1000 times greater than gases. Explain how this implies that the distances between atoms and molecules in gases are about 10 times greater than the size of their atoms and molecules.
SOLUTION:
Atoms and molecules are close together in solids and liquids. In gases they are separated by empty space. Thus gases have lower densities than liquids and solids. Density is mass per unit volume, and volume is related to the size of a body (such as a sphere) cubed. So if the distance between atoms and molecules increases by a factor of 10, then the volume occupied increases by a factor of 1000, and the density decreases by a factor of 1000.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1320035} type=ap-test-prep 
PROBLEM:
A fixed amount of ideal gas is kept in a container of fixed volume. The absolute pressure *P*, in pascals, of the gas is plotted as a function of its temperature *T*, in degrees Celsius. Which of the following are properties of a best fit curve to the data? Select *two* answers.
(a) Having a positive slope
(b) Passing through the origin
(c) Having zero pressure at a certain negative temperature
(d) Approaching zero pressure as temperature approaches infinity
SOLUTION:
(a), (c)
:::

:::exercise {fs-id1390822} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id1996966} src=../../media/Figure_Ch13_S01.jpg
> alt: A black rectangle with bottom 2/3 grayed out and the word Gas shows. A thick solid black upside down T appears above the Gas area with the vertical part of the T extending past the edge of the box on the top. It is white inside the rectangle above the T at the top part of the rectangle.
> caption: 

This figure shows a clear plastic container with a movable piston that contains a fixed amount of gas. A group of students is asked to determine whether the gas is ideal. The students design and conduct an experiment. They measure the three quantities recorded in the data table below.

> TABLE {tab:fs-id889511} cols=6
> summary: The table shows the first four columns filled in and two blank columns at the right. The first column is labeled Trial and includes numbers from 1 to 15 on each of the rows. The values in the second column are Absolute Gas Pressure (times 10 to the fifth Pa) and are as follows from rows 1-15: 1.1, 1.4, 1.9, 2.2, 2.8, 1.2, 1.5, 2.0, 2.4, 3.0, 1.3, 1.6, 2.1, 2.6, and 3.2. The third column is labeled Volume (m cubed) and have the following values: 0.020, 0.016, 0.012, 0.010, , 0.008, 0.020, 0.016, 0.012, 0.010, , 0.008, 0.020, , 0.016, 0.012, 0.010, 0.008. The values in the fourth column, Temperature K are 270 for rows 1-5, 290 for rows 6-10, and 310 for rows 11-15.

| Trial | Absolute Gas Pressure (x10m<sup>5</sup> Pa) | Volume (m<sup>3</sup>) | Temp. (K) |  |  |
| --- | --- | --- | --- | --- | --- |
| 1 | 1.1 | 0.020 | 270 |  |  |
| 2 | 1.4 | 0.016 | 270 |  |  |
| 3 | 1.9 | 0.012 | 270 |  |  |
| 4 | 2.2 | 0.010 | 270 |  |  |
| 5 | 2.8 | 0.008 | 270 |  |  |
| 6 | 1.2 | 0.020 | 290 |  |  |
| 7 | 1.5 | 0.016 | 290 |  |  |
| 8 | 2.0 | 0.012 | 290 |  |  |
| 9 | 2.4 | 0.010 | 290 |  |  |
| 10 | 3.0 | 0.008 | 290 |  |  |
| 11 | 1.3 | 0.020 | 310 |  |  |
| 12 | 1.6 | 0.016 | 310 |  |  |
| 13 | 2.1 | 0.012 | 310 |  |  |
| 14 | 2.6 | 0.010 | 310 |  |  |
| 15 | 3.2 | 0.008 | 310 |  |  |

(a) Select a set of data points from the table and plot those points on a graph to determine whether the gas exhibits properties of an ideal gas. Fill in blank columns in the table for any quantities you graph other than the given data. Label the axes and indicate the scale for each. Draw a best-fit line or curve through your data points.
(b) Indicate whether the gas exhibits properties of an ideal gas, and explain what characteristic of your graph provides the evidence.
(c) The students repeat their experiment with an identical container that contains half as much gas. They take data for the same values of volume and temperature as in the table. Would the new data result in a different conclusion about whether the gas is ideal? Justify your answer in terms of interactions between the molecules of the gas and the container walls.
:::

## Section Summary {section:section-summary}
- The ideal gas law relates the pressure and volume of a gas to the number of gas molecules and the temperature of the gas.
- The ideal gas law can be written in terms of the number of molecules of gas:
    

$$ \text{PV}=\text{NkT}, $$  {eq:import-auto-id739597}

where $P$ is pressure, $V$ is volume, $T$ is temperature, $N$ is number of molecules, and $k$ is the Boltzmann constant
    

$$ k=1\text{.}\text{38}\times {\text{10}}^{–\text{23}}\;\text{J/K}. $$  {eq:import-auto-id2564573}

- A mole is the number of atoms in a 12-g sample of carbon-12.
- The number of molecules in a mole is called Avogadro’s number ${N}_{\text{A}}$,
    

$$ {N}_{\text{A}}=6\text{.}\text{02}\times {\text{10}}^{\text{23}}\;{\text{mol}}^{-1}. $$  {eq:import-auto-id2402820}

- A mole of any substance has a mass in grams equal to its molecular weight, which can be determined from the periodic table of elements.
- The ideal gas law can also be written and solved in terms of the number of moles of gas:
    

$$ \text{PV}=\text{nRT}, $$  {eq:import-auto-id2599038}

where $n$ is number of moles and $R$ is the universal gas constant,
    

$$ R=8\text{.}\text{31}\;\text{J/mol}⋅\text{K}. $$  {eq:import-auto-id2862692}

- The ideal gas law is generally valid at temperatures well above the boiling temperature.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2591367} type=conceptual-questions 
PROBLEM:
Find out the human population of Earth. Is there a mole of people inhabiting Earth? If the average mass of a person is 60 kg, calculate the mass of a mole of people. How does the mass of a mole of people compare with the mass of Earth?
:::

:::exercise {fs-id2799079} type=conceptual-questions 
PROBLEM:
Under what circumstances would you expect a gas to behave significantly differently than predicted by the ideal gas law?
:::

:::exercise {fs-id2378151} type=conceptual-questions 
PROBLEM:
A constant-volume gas thermometer contains a fixed amount of gas. What property of the gas is measured to indicate its temperature?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id2682279} type=problems-exercises 
PROBLEM:
The gauge pressure in your car tires is $2\text{.}\text{50}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ at a temperature of $\text{35}\text{.}0\text{º}\text{C}$ when you drive it onto a ferry boat to Alaska. What is their gauge pressure later, when their temperature has dropped to $-\text{40}\text{.}0\text{º}\text{C}$?
SOLUTION:
1.62 atm
:::

:::exercise {fs-id2798567} type=problems-exercises 
PROBLEM:
Convert an absolute pressure of $7\text{.}\text{00}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ to gauge pressure in ${\text{lb/in}}^{2}\text{.}$ (This value was stated to be just less than $\text{90}\text{.}{\text{0 lb/in}}^{2}$ in [ref:fs-id1444855]. Is it?)
:::

:::exercise {fs-id2804147} type=problems-exercises 
PROBLEM:
Suppose a gas-filled incandescent light bulb is manufactured so that the gas inside the bulb is at atmospheric pressure when the bulb has a temperature of $\text{20}\text{.}0\text{º}\text{C}$. (a) Find the gauge pressure inside such a bulb when it is hot, assuming its average temperature is $\text{60}\text{.}0\text{º}\text{C}$ (an approximation) and neglecting any change in volume due to thermal expansion or gas leaks. (b) The actual final pressure for the light bulb will be less than calculated in part (a) because the glass bulb will expand. What will the actual final pressure be, taking this into account? Is this a negligible difference?
SOLUTION:
(a) 0.136 atm
(b) 0.135 atm. The difference between this value and the value from part (a) is negligible.
:::

:::exercise {fs-id2687223} type=problems-exercises 
PROBLEM:
To test a balloon, it is placed in a lab and filled with helium. The temperature of the helium is $\text{10}\text{.}0\text{º}\text{C}$ and the pressure is 1.00 atmosphere. The pressure in the lab is maintained. Assume the membrane of the balloon provides a negligible inward pressure, so it is not considered significant. (a) What is the pressure inside the balloon if the helium is replaced with helium that is at $-\text{50}\text{.}0\text{º}\text{C}$? and the balloon is filled until it has a volume of 20.0 times its original volume? (b)  What is the gauge pressure? (Assume the pressure in the lab remains at 1.00 atmosphere during the experiment.)
:::

:::exercise {fs-id1746230} type=problems-exercises 
PROBLEM:
Confirm that the units of $\text{nRT}$ are those of energy for each value of $R$: (a) $8\text{.}\text{31}\;\text{J/mol}⋅\text{K}$, (b) $1\text{.}\text{99 cal/mol}⋅\text{K}$, and (c) $0\text{.}\text{0821 L}⋅\text{atm/mol}⋅\text{K}$.
SOLUTION:
(a) $\text{nRT}=(\text{mol})(\text{J/mol}⋅\text{K})(\text{K})=\text{J}$
(b) $\text{nRT}=(\text{mol})(\text{cal/mol}⋅\text{K})(\text{K})=\text{cal}$
(c) $\begin{array}{lll}\text{nRT} & = & (\text{mol})(\text{L}⋅\text{atm/mol}⋅\text{K})(\text{K}) \\ & = & \text{L}⋅\text{atm}=({\text{m}}^{3})({\text{N/m}}^{2}) \\ & = & \text{N}⋅\text{m}=\text{J}\end{array}$
:::

:::exercise {fs-id2094656} type=problems-exercises 
PROBLEM:
In the text, it was shown that $N/V=2\text{.}\text{68}\times {\text{10}}^{\text{25}}\;{\text{m}}^{-3}$  for gas at STP. (a) Show that this quantity is equivalent to $N/V=2\text{.}\text{68}\times {\text{10}}^{\text{19}}\;{\text{cm}}^{-3},$  as stated. (b) About how many atoms are there in one ${\mu \text{m}}^{3}$ (a cubic micrometer) at STP? (c) What does your answer to part (b) imply about the separation of atoms and molecules?
:::

:::exercise {fs-id2631403} type=problems-exercises 
PROBLEM:
Calculate the number of moles in the 2.00-L volume of air in the lungs of the average person. Note that the air is at $\text{37}\text{.}0\text{º}\text{C}$ (body temperature).
SOLUTION:
$7\text{.}\text{86}\times {\text{10}}^{-2}\;\text{mol}$
:::

:::exercise {fs-id2932069} type=problems-exercises 
PROBLEM:
An airplane passenger has $\text{100}\;{\text{cm}}^{3}$ of air in his stomach just before the plane takes off from a sea-level airport. What volume will the air have at cruising altitude if cabin pressure drops to $7\text{.}\text{50}\times {\text{10}}^{4}\;{\text{N/m}}^{2}?$
:::

:::exercise {fs-id2739655} type=problems-exercises 
PROBLEM:
(a) What is the volume (in ${\text{km}}^{3}$) of Avogadro’s number of sand grains if each grain is a cube and has sides that are 1.0 mm long? (b) How many kilometers of beaches in length would this cover if the beach averages 100 m in width and 10.0 m in depth? Neglect air spaces between grains.
SOLUTION:
(a) $6\text{.}\text{02}\times {\text{10}}^{5}\;{\text{km}}^{3}$
(b) $6\text{.}\text{02}\times {\text{10}}^{8}\;\text{km}$
:::

:::exercise {fs-id1908858} type=problems-exercises 
PROBLEM:
An expensive vacuum system can achieve a pressure as low as $1\text{.}\text{00}\times {\text{10}}^{-7}\;{\text{N/m}}^{2}$ at $\text{20}\text{º}\text{C}$. How many atoms are there in a cubic centimeter at this pressure and temperature?
:::

:::exercise {fs-id2328150} type=problems-exercises 
PROBLEM:
The number density of gas atoms at a certain location in the space above our planet is about $1\text{.}\text{00}\times {\text{10}}^{\text{11}}\;{\text{m}}^{-3},$ and the pressure is $2\text{.}\text{75}\times {\text{10}}^{-\text{10}}\;{\text{N/m}}^{2}$ in this space. What is the temperature there?
SOLUTION:
$-\text{73}\text{.}9\text{º}\text{C}$
:::

:::exercise {fs-id1804845} type=problems-exercises 
PROBLEM:
A bicycle tire has a pressure of $7\text{.}\text{00}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ at a temperature of $\text{18}\text{.}0\text{º}\text{C}$ and contains 2.00 L of gas. What will its pressure be if you let out an amount of air that has a volume of $\text{100}\;{\text{cm}}^{3}$ at atmospheric pressure? Assume tire temperature and volume remain constant.
:::

:::exercise {fs-id2889733} type=problems-exercises 
PROBLEM:
A high-pressure gas cylinder contains 50.0 L of toxic gas at a pressure of $1\text{.}\text{40}\times {\text{10}}^{7}\;{\text{N/m}}^{2}$ and a temperature of $\text{25}\text{.}0\text{º}\text{C}$. Its valve leaks after the cylinder is dropped. The cylinder is cooled to dry ice temperature $(–\text{78}\text{.}5\text{º}\text{C})$ to reduce the leak rate and pressure so that it can be safely repaired. (a) What is the final pressure in the tank, assuming a negligible amount of gas leaks while being cooled and that there is no phase change? (b) What is the final pressure if one-tenth of the gas escapes? (c) To what temperature must the tank be cooled to reduce the pressure to 1.00 atm (assuming the gas does not change phase and that there is no leakage during cooling)? (d) Does cooling the tank appear to be a practical solution?
SOLUTION:
(a) $9\text{.}\text{14}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$
(b) $8\text{.}\text{23}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$
(c) 2.16 K
(d) No. The final temperature needed is much too low to be easily achieved for a large object.
:::

:::exercise {fs-id2084983} type=problems-exercises 
PROBLEM:
Find the number of moles in 2.00 L of gas at $\text{35}\text{.}0\text{º}\text{C}$ and under $7\text{.}\text{41}\times {\text{10}}^{7}\;{\text{N/m}}^{2}$ of pressure.
:::

:::exercise {fs-id2735156} type=problems-exercises 
PROBLEM:
Calculate the depth to which Avogadro’s number of table tennis balls would cover Earth. Each ball has a diameter of 3.75 cm. Assume the space between balls adds an extra 25.0% to their volume and assume they are not crushed by their own weight.
SOLUTION:
41 km
:::

:::exercise {fs-id1544154} type=problems-exercises 
PROBLEM:
(a) What is the gauge pressure in a $\text{25}\text{.}0\text{º}\text{C}$ car tire containing 3.60 mol of gas in a 30.0 L volume? (b) What will its gauge pressure be if you add 1.00 L of gas originally at atmospheric pressure and $\text{25}\text{.}0\text{º}\text{C}$? Assume the temperature returns to $\text{25}\text{.}0\text{º}\text{C}$ and the volume remains constant.
:::

:::exercise {fs-id2869966} type=problems-exercises 
PROBLEM:
(a) In the deep space between galaxies, the density of atoms is as low as ${\text{10}}^{6}\;{\text{atoms/m}}^{3},$ and the temperature is a frigid 2.7 K. What is the pressure? (b) What volume (in ${\text{m}}^{3}$) is occupied by 1 mol of gas? (c) If this volume is a cube, what is the length of its sides in kilometers?
SOLUTION:
(a) $3\text{.}7\times {\text{10}}^{-\text{17}}\;\text{Pa}$
(b) $6\text{.}0\times {\text{10}}^{\text{17}}\;{\text{m}}^{3}$
(c) $8\text{.}4\times {\text{10}}^{2}\;\text{km}$
:::

## Glossary
- {def} **ideal gas law**: the physical law that relates the pressure and volume of a gas to the number of gas molecules or number of moles of gas and the temperature of the gas
- {def} **Boltzmann constant**: $k$ , a physical constant that relates energy to temperature; $k=\text{1.38}\times {\text{10}}^{\text{–23}}\;\text{J/K}$
- {def} **Avogadro’s number**: ${N}_{\text{A}}$ , the number of molecules or atoms in one mole of a substance;
${N}_{\text{A}}=6\text{.}\text{02}\times {\text{10}}^{\text{23}}$
     particles/mole
- {def} **mole**: the quantity of a substance whose mass (in grams) is equal to its molecular mass

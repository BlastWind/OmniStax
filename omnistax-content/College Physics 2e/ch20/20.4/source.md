# Electric Power and Energy

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate the power dissipated by a resistor and power supplied by a power supply.
- Calculate the cost of electricity under various circumstances.

## Power in Electric Circuits
Power is associated by many people with electricity. Knowing that power is the rate of energy use or energy conversion, what is the expression for {term:electric power}? Power transmission lines might come to mind. We also think of lightbulbs in terms of their power ratings in watts. Let us compare a 25-W bulb with a 60-W bulb. (See [ref:import-auto-id1861474](a).) Since both operate on the same voltage, the 60-W bulb must draw more current to have a greater power rating. Thus the 60-W bulb’s resistance must be lower than that of a 25-W bulb. If we increase voltage, we also increase power. For example, when a 25-W bulb that is designed to operate on 120 V is connected to 240 V, it briefly glows very brightly and then burns out. Precisely how are voltage, current, and resistance related to electric power?

> FIGURE {fig:import-auto-id1861474} src=../../media/Figure_21_04_01a.jpg
> alt: Part a has two images. The image on the left is a photograph of a twenty five watt incandescent bulb emitting a dim, yellowish white color. The image on the right is a photograph of a sixty watt incandescent bulb emitting a brighter white light. Part b is a single photograph of a compact fluorescent lightbulb glowing in bright pure white color.
> width: 200
> caption: (a) Which of these lightbulbs, the 25-W bulb (upper left) or the 60-W bulb (upper right), has the higher resistance? Which draws more current? Which uses the most energy? Can you tell from the color that the 25-W filament is cooler? Is the brighter bulb a different color and if so why? (credits: Dickbauch, Wikimedia Commons; Greg Westfall, Flickr) (b) This compact fluorescent light (CFL) puts out the same intensity of light as the 60-W bulb, but at 1/4 to 1/10 the input power. (credit: dbgg1979, Flickr)

Electric energy depends on both the voltage involved and the charge moved. This is expressed most simply as $\text{PE}=\text{qV}$, where $q$ is the charge moved and $V$ is the voltage (or more precisely, the potential difference the charge moves through). Power is the rate at which energy is moved, and so electric power is

$$ P=\frac{\text{PE}}{t}=\frac{\text{qV}}{t}\text{.} $$  {eq:eip-517}

Recognizing that current is $I=q/t$ (note that $\Delta t=t$ here), the expression for power becomes

$$ P=\text{IV.} $$  {eq:eip-489}

Electric power ($P$ ) is simply the product of current times voltage. Power has familiar units of watts. Since the SI unit for potential energy (PE) is the joule, power has units of joules per second, or watts. Thus, $\text{1 A}⋅\text{V}=\text{1 W}$. For example, cars often have one or more auxiliary power outlets with which you can charge a cell phone or other electronic devices. These outlets may be rated at 20 A, so that the circuit can deliver a maximum power $P=\text{IV}=(\text{20 A})(\text{12 V})=\text{240 W}$. In some applications, electric power may be expressed as volt-amperes or even kilovolt-amperes ( $\text{1 kA}⋅\text{V}=\text{1 kW}$).
To see the relationship of power to resistance, we combine Ohm’s law with $P=\text{IV}$. Substituting $I=\text{V/R}$ gives $P=(V/R)V={V}^{2}\text{/}R$. Similarly, substituting $V=\text{IR}$ gives $P=I(\text{IR})={I}^{2}R$. Three expressions for electric power are listed together here for convenience:

$$ P=\text{IV} $$  {eq:eip-937}

$$ P=\frac{{V}^{2}}{R} $$  {eq:eip-834}

$$ P={I}^{2}R\text{.} $$  {eq:eip-572}

Note that the first equation is always valid, whereas the other two can be used only for resistors. In a simple circuit, with one voltage source and a single resistor, the power supplied by the voltage source and that dissipated by the resistor are identical. (In more complicated circuits, $P$ can be the power dissipated by a single device and not the total power in the circuit.)
Different insights can be gained from the three different expressions for electric power. For example, $P={V}^{2}/R$ implies that the lower the resistance connected to a given voltage source, the greater the power delivered. Furthermore, since voltage is squared in $P={V}^{2}/R$, the effect of applying a higher voltage is perhaps greater than expected. Thus, when the voltage is doubled to a 25-W bulb, its power nearly quadruples to about 100 W, burning it out. If the bulb’s resistance remained constant, its power would be exactly 100 W, but at the higher temperature its resistance is higher, too.

:::example {ex:fs-id3159338} Calculating Power Dissipation and Current: Hot and Cold Power
(a) Consider the examples given in [Ohm’s Law: Resistance and Simple Circuits](module:m42344) and [Resistance and Resistivity](module:m42346). Then find the power dissipated by the car headlight in these examples, both when it is hot and when it is cold. (b) What current does it draw when cold?
**Strategy for (a)**
For the hot headlight, we know voltage and current, so we can use $P=\text{IV}$ to find the power. For the cold headlight, we know the voltage and resistance, so we can use $P={V}^{2}/R$ to find the power.
**Solution for (a)**
Entering the known values of current and voltage for the hot headlight, we obtain

$$ P=\text{IV}=(2\text{.}\text{50 A})(\text{12}\text{.}\text{0 V})=\text{30}\text{.}\text{0 W.} $$  {eq:eip-946}

The cold resistance was $0\text{.}\text{350}\;Ω$, and so the power it uses when first switched on is

$$ P=\frac{{V}^{2}}{R}=\frac{(\text{12}\text{.}\text{0 V}{)}^{2}}{0\text{.}\text{350}\;Ω}=\text{411 W.} $$  {eq:eip-704}

**Discussion for (a)**
The 30 W dissipated by the hot headlight is typical. But the 411 W when cold is surprisingly higher. The initial power quickly decreases as the bulb’s temperature increases and its resistance increases.
**Strategy and Solution for (b)**
The current when the bulb is cold can be found several different ways. We rearrange one of the power equations, $P={I}^{2}R$, and enter known values, obtaining

$$ I=\sqrt{\frac{P}{R}}=\sqrt{\frac{\text{411 W}}{0\text{.}\text{350}\;Ω}}=\text{34}\text{.}\text{3 A.} $$  {eq:eip-251}

**Discussion for (b)**
The cold current is remarkably higher than the steady-state value of 2.50 A, but the current will quickly decline to that value as the bulb’s temperature increases. Most fuses and circuit breakers (used to limit the current in a circuit) are designed to tolerate very high currents briefly as a device comes on. In some cases, such as with electric motors, the current remains high for several seconds, necessitating special “slow blow” fuses.
:::

## The Cost of Electricity
The more electric appliances you use and the longer they are left on, the higher your electric bill. This familiar fact is based on the relationship between energy and power. You pay for the energy used. Since $P=E/t$, we see that

$$ E=\text{Pt} $$  {eq:eip-9}

is the energy used by a device using power $P$ for a time interval $t$. For example, the more lightbulbs burning, the greater $P$ used; the longer they are on, the greater $t$ is. The energy unit on electric bills is the kilowatt-hour ($\text{kW}⋅\text{h}$), consistent with the relationship $E=\text{Pt}$. It is easy to estimate the cost of operating electric appliances if you have some idea of their power consumption rate in watts or kilowatts, the time they are on in hours, and the cost per kilowatt-hour for your electric utility. Kilowatt-hours, like all other specialized energy units such as food calories, can be converted to joules. You can prove to yourself that $\text{1 kW}⋅\text{h = 3}\text{.}6×{\text{10}}^{6}\;\text{J}$.
The electrical energy ($E$ ) used can be reduced either by reducing the time of use or by reducing the power consumption of that appliance or fixture. This will not only reduce the cost, but it will also result in a reduced impact on the environment. Improvements to lighting are some of the fastest ways to reduce the electrical energy used in a home or business. About 20% of a home’s use of energy goes to lighting, while the number for commercial establishments is closer to 40%. Fluorescent lights are about four times more efficient than incandescent lights—this is true for both the long tubes and the compact fluorescent lights (CFL). (See [ref:import-auto-id1861474](b).) Thus, a 60-W incandescent bulb can be replaced by a 15-W CFL, which has the same brightness and color. CFLs have a bent tube inside a globe or a spiral-shaped tube, all connected to a standard screw-in base that fits standard incandescent light sockets. (Original problems with color, flicker, shape, and high initial investment for CFLs have been addressed in recent years.) The heat transfer from these CFLs is less, and they last up to 10 times longer. The significance of an investment in such bulbs is addressed in the next example. New white LED lights (which are clusters of small LED bulbs) are even more efficient (twice that of CFLs) and last 5 times longer than CFLs. However, their cost is still high.

:::note [] Making Connections: Energy, Power, and Time

The relationship $E=\text{Pt}$ is one that you will find useful in many different contexts. The energy your body uses in exercise is related to the power level and duration of your activity, for example. The amount of heating by a power source is related to the power level and time it is applied. Even the radiation dose of an X-ray image is related to the power and time of exposure.
:::

:::example {ex:fs-id3154468} Calculating the Cost Effectiveness of Compact Fluorescent Lights (CFL)
If the cost of electricity in your area is 12 cents per kWh, what is the total cost (capital plus operation) of using a 60-W incandescent bulb for 1000 hours (the lifetime of that bulb) if the bulb cost 25 cents? (b) If we replace this bulb with a compact fluorescent light that provides the same light output, but at one-quarter the wattage, and which costs $1.50 but lasts 10 times longer (10,000 hours), what will that total cost be?
**Strategy**
To find the operating cost, we first find the energy used in kilowatt-hours and then multiply by the cost per kilowatt-hour.
**Solution for (a)**
The energy used in kilowatt-hours is found by entering the power and time into the expression for energy:

$$ E=\text{Pt}=(\text{60 W})(\text{1000 h})=\text{60,000 W}⋅\text{h.} $$  {eq:eip-783}

In kilowatt-hours, this is

$$ E=\text{60}\text{.}\text{0 kW}⋅\text{h.} $$  {eq:eip-379}

Now the electricity cost is

$$ \text{cost}=(\text{60.0 kW}⋅\text{h})(\text{\$0.12}\text{/kW}⋅\text{h})=\text{\$}7.20. $$  {eq:eip-887}

The total cost, including the cost of the bulb, will be $7.45 for 1000 hours (about one-half year at 5 hours per day).
**Solution for (b)**
Since the CFL uses only 15 W and not 60 W, the electricity cost will be $7.20/4 = $1.80. The CFL will last 10 times longer than the incandescent, so that the investment cost will be 1/10 of the bulb cost for that time period of use, or 0.1($1.50) = $0.15. Therefore, the total cost will be $1.95 for 1000 hours.
**Discussion**
Therefore, it is much cheaper to use the CFLs, even though the initial investment is higher. The increased cost of labor that a business must include for replacing the incandescent bulbs more often has not been figured in here.
:::

:::note [] Making Connections: Take-Home Experiment—Electrical Energy Use Inventory

1) Make a list of the power ratings on a range of appliances in your home or room. Explain why something like a toaster has a higher rating than a digital clock. Estimate the energy consumed by these appliances in an average day (by estimating their time of use). Some appliances might only state the operating current. If the household voltage is 120 V, then use $P=\text{IV}$. 2) Check out the total wattage used in the rest rooms of your school’s floor or building. (You might need to assume the long fluorescent lights in use are rated at 32 W.) Suppose that the building was closed all weekend and that these lights were left on from 6 p.m. Friday until 8 a.m. Monday. What would this oversight cost? How about for an entire year of weekends?
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id3270504} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id2861871} src=../../media/CNX_APPhysics_20_M4_S05_img.jpg
> alt: The illustration shows a circuit drawn in a rectangle with a long and short parallel on the left and jagged line resistor labeled R on the right side. To the right of the circuit diagram is a graph with and arrow pointing up on the y axis and labeled E. The horizontal axis is represented by an arrow pointing to the right and labeled t. There is a straight diagonal line originating a the origin labeled 0 and ending at t1 on the x-axis (indicated with a dotted line going from t1 to the tip of the line) and E1 on the y-axis (also indicated with a dotted line).
> caption: 

The circuit shown contains a resistor *R* connected to a voltage supply. The graph shows the total energy *E* dissipated by the resistance as a function of time. Which of the following shows the corresponding graph for double resistance, i.e., if *R* is replaced by 2*R*?
(a) 
> FIGURE {fig:fs-id2648692} src=../../media/CNX_APPhysics_20_M4_S06a_img.jpg
> alt: There are four graphs with the same x-axis (t) and y-axis (E) shown in figure Ch20S05. All four graphs have straight, diagonal lines ending at t1 (with a dotted line) on the x-axis. The slopes of the line vary; however because they end at different values on the y-axis. Graph A has the steepest slope and the y-ending value for the line is 2E1. Graph B has the second steepest slope and the y-ending value is E1. Graph C's slope is less steep still and ends at E1 over 2. Graph D has the flattest slop and ends at E1 over 4.
> caption: 

(b) 
> FIGURE {fig:fs-id2254561} src=../../media/CNX_APPhysics_20_M4_S06b_img.jpg
> alt: There are four graphs with the same x-axis (t) and y-axis (E) shown in figure Ch20S05. All four graphs have straight, diagonal lines ending at t1 (with a dotted line) on the x-axis. The slopes of the line vary; however because they end at different values on the y-axis. Graph A has the steepest slope and the y-ending value for the line is 2E1. Graph B has the second steepest slope and the y-ending value is E1. Graph C's slope is less steep still and ends at E1 over 2. Graph D has the flattest slop and ends at E1 over 4.
> caption: 

(c) 
> FIGURE {fig:fs-id2867043} src=../../media/CNX_APPhysics_20_M4_S06c_img.jpg
> alt: There are four graphs with the same x-axis (t) and y-axis (E) shown in figure Ch20S05. All four graphs have straight, diagonal lines ending at t1 (with a dotted line) on the x-axis. The slopes of the line vary; however because they end at different values on the y-axis. Graph A has the steepest slope and the y-ending value for the line is 2E1. Graph B has the second steepest slope and the y-ending value is E1. Graph C's slope is less steep still and ends at E1 over 2. Graph D has the flattest slop and ends at E1 over 4.
> caption: 

(d) 
> FIGURE {fig:fs-id2035612} src=../../media/CNX_APPhysics_20_M4_S06d_img.jpg
> alt: There are four graphs with the same x-axis (t) and y-axis (E) shown in figure Ch20S05. All four graphs have straight, diagonal lines ending at t1 (with a dotted line) on the x-axis. The slopes of the line vary; however because they end at different values on the y-axis. Graph A has the steepest slope and the y-ending value for the line is 2E1. Graph B has the second steepest slope and the y-ending value is E1. Graph C's slope is less steep still and ends at E1 over 2. Graph D has the flattest slop and ends at E1 over 4.
> caption: 

:::

:::exercise {fs-id2032037} type=ap-test-prep 
PROBLEM:
What will be the ratio of the resistance of a 120 W, 220 V lamp to that of a 100 W, 110 V lamp?
SOLUTION:
10:3 or 3.33
:::

## Section Summary {section:section-summary}
- Electric power $P$ is the rate (in watts) that energy is supplied by a source or dissipated by a device.
- Three expressions for electrical power are

    

$$ P=\text{IV,} $$  {eq:eip-343}

$$ P=\frac{{V}^{2}}{R}\text{,} $$  {eq:eip-520}

    and
    

$$ P={I}^{2}R\text{.} $$  {eq:import-auto-id2010343}

- The energy used by a device with a power $P$ over a time $t$ is $E=\text{Pt}$.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2409786} type=conceptual-questions 
PROBLEM:
Why do incandescent lightbulbs grow dim late in their lives, particularly just before their filaments break?
:::

:::exercise {fs-id1401443} type=conceptual-questions 
PROBLEM:
The power dissipated in a resistor is given by $P={V}^{2}/R$, which means power decreases if resistance increases. Yet this power is also given by $P={I}^{2}R$, which means power increases if resistance increases. Explain why there is no contradiction here.
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id3223947} type=problems-exercises 
PROBLEM:
What is the power of a $1.00\times {\text{10}}^{\text{2}}\;\text{MV}$ lightning bolt having a current of ${2.00 × 10}^{\text{4}}\;\text{A}$?
SOLUTION:
$2\text{.}\text{00}×{\text{10}}^{\text{12}}\;\text{W}$
:::

:::exercise {fs-id1941660} type=problems-exercises 
PROBLEM:
What power is supplied to the starter motor of a large truck that draws 250 A of current from a 24.0-V battery hookup?
:::

:::exercise {fs-id2449702} type=problems-exercises 
PROBLEM:
A charge of 4.00 C of charge passes through a pocket calculator’s solar cells in 4.00 h. What is the power output, given the calculator’s voltage output is 3.00 V? (See [ref:import-auto-id1401468].)
:::

> FIGURE {fig:import-auto-id1401468} src=../../media/Figure_21_04_02a.jpg
> alt: Photograph of a small calculator having a strip of solar cells just above the keys.
> width: 200
> caption: The strip of solar cells just above the keys of this calculator convert light to electricity to supply its energy needs. (credit: Evan-Amos, Wikimedia Commons)

:::exercise {fs-id2599379} type=problems-exercises 
PROBLEM:
How many watts does a flashlight that has $6.00\times {\text{10}}^{\text{2}}\;\text{C}$ pass through it in 0.500 h use if its voltage is 3.00 V?
:::

:::exercise {fs-id2023489} type=problems-exercises 
PROBLEM:
Find the power dissipated in each of these extension cords: (a) an extension cord having a $0\text{.}\text{0600}\;\text{-}\;Ω$ resistance and through which 5.00 A is flowing; (b) a cheaper cord utilizing thinner wire and with a resistance of $0\text{.}\text{300}\;Ω.$
SOLUTION:
(a) 1.50 W
(b) 7.50 W
:::

:::exercise {fs-id3079653} type=problems-exercises 
PROBLEM:
Verify that the units of a volt-ampere are watts, as implied by the equation $P=\text{IV}$.
:::

:::exercise {fs-id1577565} type=problems-exercises 
PROBLEM:
Show that the units $1\;{\text{V}}^{2}/Ω=1\text{W}$, as implied by the equation $P={V}^{2}/R$.
SOLUTION:
$\frac{{V}^{2}}{Ω}=\frac{{V}^{2}}{\text{V/A}}=\text{AV}=(\frac{C}{s})(\frac{J}{C})=\frac{J}{s}=1\;\text{W}$
:::

:::exercise {fs-id970126} type=problems-exercises 
PROBLEM:
Show that the units $1\;{\text{A}}^{2}⋅Ω=1\;\text{W}$, as implied by the equation $P={I}^{2}R$.
:::

:::exercise {fs-id3244624} type=problems-exercises 
PROBLEM:
Verify the energy unit equivalence that $1\;\text{kW}⋅\text{h = 3}\text{.}\text{60}×{\text{10}}^{6}\;\text{J}$.
SOLUTION:
$1\;\text{kW}⋅\text{h=}(\frac{1\times {\text{10}}^{3}\;\text{J}}{\text{1 s}})(1 h)(\frac{\text{3600 s}}{\text{1 h}})=3\text{.}\text{60}\times {\text{10}}^{6}\;\text{J}$
:::

:::exercise {fs-id3306077} type=problems-exercises 
PROBLEM:
Electrons in an X-ray tube are accelerated through $1.00\times {\text{10}}^{\text{2}}\;\text{kV}$ and directed toward a target to produce X-rays. Calculate the power of the electron beam in this tube if it has a current of 15.0 mA.
:::

:::exercise {fs-id2670173} type=problems-exercises 
PROBLEM:
An electric water heater consumes 5.00 kW for 2.00 h per day. What is the cost of running it for one year if electricity costs $\text{12.0 cents}\text{/kW}⋅\text{h}$? See [ref:import-auto-id2956449].

> FIGURE {fig:import-auto-id2956449} src=../../media/Figure_21_04_03a.jpg
> alt: Photograph of an electric hot water heater connected to the electric and water supply
> width: 225
> caption: On-demand electric hot water heater. Heat is supplied to water only when needed. (credit: aviddavid, Flickr)

SOLUTION:
$438/y
:::

:::exercise {fs-id1915928} type=problems-exercises 
PROBLEM:
With a 1200-W toaster, how much electrical energy is needed to make a slice of toast (cooking time = 1 minute)? At $\text{9.0 cents/kW · h}$, how much does this cost?
:::

:::exercise {fs-id3146477} type=problems-exercises 
PROBLEM:
What would be the maximum cost of a CFL such that the total cost (investment plus operating) would be the same for both CFL and incandescent 60-W bulbs? Assume the cost of the incandescent bulb is 25 cents and that electricity costs $\text{10 cents/kWh}$. Calculate the cost for 1000 hours, as in the cost effectiveness of CFL example.
SOLUTION:
$6.25
:::

:::exercise {fs-id2685078} type=problems-exercises 
PROBLEM:
Some makes of older cars have 6.00-V electrical systems. (a) What is the hot resistance of a 30.0-W headlight in such a car? (b) What current flows through it?
:::

:::exercise {fs-id1616012} type=problems-exercises 
PROBLEM:
Alkaline batteries have the advantage of putting out constant voltage until very nearly the end of their life. How long will an alkaline battery rated at $1\text{.}\text{00 A}⋅\text{h}$ and 1.58 V keep a 1.00-W flashlight bulb burning?
SOLUTION:
1.58 h
:::

:::exercise {fs-id2603647} type=problems-exercises 
PROBLEM:
A cauterizer, used to stop bleeding in surgery, puts out 2.00 mA at 15.0 kV. (a) What is its power output? (b) What is the resistance of the path?
:::

:::exercise {fs-id2383748} type=problems-exercises 
PROBLEM:
The average television is said to be on 6 hours per day. Estimate the yearly cost of electricity to operate 100 million TVs, assuming their power consumption averages 150 W and the cost of electricity averages $\text{12}\text{.}0\;\text{cents/kW}⋅\text{h}$.
SOLUTION:
$3.94 billion/year
:::

:::exercise {fs-id1367358} type=problems-exercises 
PROBLEM:
An old lightbulb draws only 50.0 W, rather than its original 60.0 W, due to evaporative thinning of its filament. By what factor is its diameter reduced, assuming uniform thinning along its length? Neglect any effects caused by temperature differences.
:::

:::exercise {fs-id2409598} type=problems-exercises 
PROBLEM:
00-gauge copper wire has a diameter of 9.266 mm. Calculate the power loss in a kilometer of such wire when it carries $1.00\times {\text{10}}^{\text{2}}\;\text{A}$.
SOLUTION:
25.5 W
:::

:::exercise {fs-id3229715} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
Cold vaporizers pass a current through water, evaporating it with only a small increase in temperature. One such home device is rated at 3.50 A and utilizes 120 V AC with 95.0% efficiency. (a) What is the vaporization rate in grams per minute? (b) How much water must you put into the vaporizer for 8.00 h of overnight operation? (See [ref:import-auto-id1578194].)

> FIGURE {fig:import-auto-id1578194} src=../../media/Figure_21_04_04a.jpg
> alt: The picture shows a cold vaporizer filled with water. Vapor is shown to emerge from the vaporizer. An enlarged view of the circuit inside the vaporizer is also shown. The circuit shows an A C power source connected to the leads, which are immersed in the water of the vaporizer. The resistance of the leads is shown as R.
> width: 200
> caption: This cold vaporizer passes current directly through water, vaporizing it directly with relatively little temperature increase.

:::

:::exercise {fs-id2616676} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) What energy is dissipated by a lightning bolt having a 20,000-A current, a voltage of $1.00\times {\text{10}}^{\text{2}}\;\text{MV}$, and a length of 1.00 ms? (b) What mass of tree sap could be raised from $\text{18}\text{.}0º\text{C}$ to its boiling point and then evaporated by this energy, assuming sap has the same thermal characteristics as water?
SOLUTION:
(a) $2\text{.}\text{00}×{\text{10}}^{9}\;\text{J}$
(b) 769 kg
:::

:::exercise {fs-id1994290} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
What current must be produced by a 12.0-V battery-operated bottle warmer in order to heat 75.0 g of glass, 250 g of baby formula, and $3.00\times {\text{10}}^{\text{2}}\;\text{g}$ of aluminum from $\text{20}\text{.}0º\text{C}$ to $\text{90}\text{.}0º\text{C}$ in 5.00 min?
:::

:::exercise {fs-id2382586} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
How much time is needed for a surgical cauterizer to raise the temperature of 1.00 g of tissue from $\text{37}\text{.}0º\text{C}$ to $\text{100º}\text{C}$ and then boil away 0.500 g of water, if it puts out 2.00 mA at 15.0 kV? Ignore heat transfer to the surroundings.
SOLUTION:
45.0 s
:::

:::exercise {fs-id2051957} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
Hydroelectric generators (see [ref:import-auto-id2953730]) at Hoover Dam produce a maximum current of $8.00\times {\text{10}}^{\text{3}}\;\text{A}$ at 250 kV. (a) What is the power output? (b) The water that powers the generators enters and leaves the system at low speed (thus its kinetic energy does not change) but loses 160 m in altitude. How many cubic meters per second are needed, assuming 85.0% efficiency?

> FIGURE {fig:import-auto-id2953730} src=../../media/Figure_21_04_05a.jpg
> alt: The interior of a large power generation facility, featuring multiple industrial-scale generators, an American flag, and robust concrete architecture.
> width: 250
> caption: Hydroelectric generators at the Hoover dam. (credit: Jon Sullivan)

:::

:::exercise {fs-id3149527} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) Assuming 95.0% efficiency for the conversion of electrical power by the motor, what current must the 12.0-V batteries of a 750-kg electric car be able to supply: (a) To accelerate from rest to 25.0 m/s in 1.00 min? (b) To climb a $2.00\times {\text{10}}^{\text{2}}\text{-m}$-high hill in 2.00 min at a constant 25.0-m/s speed while exerting $5.00\times {\text{10}}^{\text{2}}\;\text{N}$ of force to overcome air resistance and friction? (c) To travel at a constant 25.0-m/s speed, exerting a $5.00\times {\text{10}}^{\text{2}}\;\text{N}$ force to overcome air resistance and friction? See [ref:eip-id2454955].

> FIGURE {fig:eip-id2454955} src=../../media/OSX_CP2e_Figure_21_04_06.jpg
> alt: An electric car gets recharged. (credit: “Nissan e-NV200 electric car” by Kārlis Dambrāns, flickr).
> width: 250
> caption: This REVAi, an electric car, gets recharged on a street in London. (credit: Frank Hebbert)

SOLUTION:
(a) 343 A
(b) $2\text{.}\text{17}×{\text{10}}^{3}\;\text{A}$
(c) $1.10×{\text{10}}^{3}\;\text{A}$
:::

:::exercise {fs-id3046867} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
A light-rail commuter train draws 630 A of 650-V DC electricity when accelerating. (a) What is its power consumption rate in kilowatts? (b) How long does it take to reach 20.0 m/s starting from rest if its loaded mass is $5\text{.}\text{30}×{\text{10}}^{4}\;\text{kg}$, assuming 95.0% efficiency and constant power? (c) Find its average acceleration. (d) Discuss how the acceleration you found for the light-rail train compares to what might be typical for an automobile.
:::

:::exercise {fs-id3233297} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) An aluminum power transmission line has a resistance of $0\text{.}\text{0580}\;Ω/\text{km}$. What is its mass per kilometer? (b) What is the mass per kilometer of a copper line having the same resistance? A lower resistance would shorten the heating time. Discuss the practical limits to speeding the heating by lowering the resistance.
SOLUTION:
(a) $1.23\times {\text{10}}^{\text{3}}\;\text{kg}$
(b) $2.64\times {\text{10}}^{\text{3}}\;\text{kg}$
:::

:::exercise {fs-id3037377} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) An immersion heater utilizing 120 V can raise the temperature of a $1.00\times {\text{10}}^{\text{2}}\text{-g}$ aluminum cup containing 350 g of water from $\text{20}\text{.}0º\text{C}$ to $\text{95}\text{.}0º\text{C}$ in 2.00 min. Find its resistance, assuming it is constant during the process. (b) A lower resistance would shorten the heating time. Discuss the practical limits to speeding the heating by lowering the resistance.
:::

:::exercise {fs-id3010699} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
(a) What is the cost of heating a hot tub containing 1500 kg of water from $\text{10}\text{.}0º\text{C}$ to $\text{40}\text{.}0º\text{C}$, assuming 75.0% efficiency to account for heat transfer to the surroundings? The cost of electricity is $\text{9}\;\text{cents/kW}⋅\text{h}$. (b) What current was used by the 220-V AC electric heater, if this took 4.00 h?
:::

:::exercise {fs-id1546272} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) What current is needed to transmit $1.00\times {\text{10}}^{\text{2}}\;\text{MW}$ of power at 480 V? (b) What power is dissipated by the transmission lines if they have a $1\text{.}\text{00}\;\text{-}\;Ω$ resistance? (c) What is unreasonable about this result? (d) Which assumptions are unreasonable, or which premises are inconsistent?
SOLUTION:
(a) $2.08\times {\text{10}}^{\text{5}}\;\text{A}$
(b) $4.33\times {\text{10}}^{\text{4}}\;\text{MW}$
(c) The transmission lines dissipate more power than they are supposed to transmit.
(d) A voltage of 480 V is unreasonably low for a transmission voltage. Long-distance transmission lines are kept at much higher voltages (often hundreds of kilovolts) to reduce power losses.
:::

:::exercise {fs-id1517296} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) What current is needed to transmit $1.00\times {\text{10}}^{\text{2}}\;\text{MW}$ of power at 10.0 kV? (b) Find the resistance of 1.00 km of wire that would cause a 0.0100% power loss. (c) What is the diameter of a 1.00-km-long copper wire having this resistance? (d) What is unreasonable about these results? (e) Which assumptions are unreasonable, or which premises are inconsistent?
:::

:::exercise {fs-id2667420} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider an electric immersion heater used to heat a cup of water to make tea. Construct a problem in which you calculate the needed resistance of the heater so that it increases the temperature of the water and cup in a reasonable amount of time. Also calculate the cost of the electrical energy used in your process. Among the things to be considered are the voltage used, the masses and heat capacities involved, heat losses, and the time over which the heating takes place. Your instructor may wish for you to consider a thermal safety switch (perhaps bimetallic) that will halt the process before damaging temperatures are reached in the immersion unit.
:::

## Glossary
- {def} **electric power**: the rate at which electrical energy is supplied by a source or dissipated by a device; it is the product of current times voltage

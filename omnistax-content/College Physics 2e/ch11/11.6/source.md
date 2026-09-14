# Gauge Pressure, Absolute Pressure, and Pressure Measurement

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define gauge pressure and absolute pressure.
- Understand the working of aneroid and open-tube barometers.
If you limp into a gas station with a nearly flat tire, you will notice the tire gauge on the airline reads nearly zero when you begin to fill it. In fact, if there were a gaping hole in your tire, the gauge would read zero, even though atmospheric pressure exists in the tire. Why does the gauge read zero? There is no mystery here. Tire gauges are simply designed to read zero at atmospheric pressure and positive when pressure is greater than atmospheric.
Similarly, atmospheric pressure adds to blood pressure in every part of the circulatory system. (As noted in [Pascal’s Principle](module:m42193), the total pressure in a fluid is the sum of the pressures from different sources—here, the heart and the atmosphere.) But atmospheric pressure has no net effect on blood flow since it adds to the pressure coming out of the heart and going back into it, too. What is important is how much *greater* blood pressure is than atmospheric pressure. Blood pressure measurements, like tire pressures, are thus made relative to atmospheric pressure.
In brief, it is very common for pressure gauges to ignore atmospheric pressure—that is, to read zero at atmospheric pressure. We therefore define {term:gauge pressure} to be the pressure relative to atmospheric pressure. Gauge pressure is positive for pressures above atmospheric pressure, and negative for pressures below it.

:::note [] Gauge Pressure

Gauge pressure is the pressure relative to atmospheric pressure. Gauge pressure is positive for pressures above atmospheric pressure, and negative for pressures below it.
:::
In fact, atmospheric pressure does add to the pressure in any fluid not enclosed in a rigid container. This happens because of Pascal’s principle. The total pressure, or {term:absolute pressure}, is thus the sum of gauge pressure and atmospheric pressure: ${P}_{\text{abs}}={P}_{\text{g}}+{P}_{\text{atm}}$ where ${P}_{\text{abs}}$ is absolute pressure, ${P}_{\text{g}}$ is gauge pressure, and ${P}_{\text{atm}}$ is atmospheric pressure. For example, if your tire gauge reads 34 psi (pounds per square inch), then the absolute pressure is 34 psi plus 14.7 psi (${P}_{\text{atm}}$ in psi), or 48.7 psi (equivalent to 336 kPa).

:::note [] Absolute Pressure

Absolute pressure is the sum of gauge pressure and atmospheric pressure.
:::
For reasons we will explore later, in most cases the absolute pressure in fluids cannot be negative. Fluids push rather than pull, so the smallest absolute pressure is zero. (A negative absolute pressure is a pull.) Thus the smallest possible gauge pressure is ${P}_{\text{g}}=-{P}_{\text{atm}}$ (this makes ${P}_{\text{abs}}$ zero). There is no theoretical limit to how large a gauge pressure can be.
There are a host of devices for measuring pressure, ranging from tire gauges to blood pressure cuffs. Pascal’s principle is of major importance in these devices. The undiminished transmission of pressure through a fluid allows precise remote sensing of pressures. Remote sensing is often more convenient than putting a measuring device into a system, such as a person’s artery.
[ref:import-auto-id2010699] shows one of the many types of mechanical pressure gauges in use today. In all mechanical pressure gauges, pressure results in a force that is converted (or transduced) into some type of readout.

> FIGURE {fig:import-auto-id2010699} src=../../media/Figure_12_06_01a.jpg
> alt: Aneroid gauge measures pressure using a bellows and spring arrangement connected to the pointer that points to a calibrated scale.
> width: 200
> caption: This aneroid gauge utilizes flexible bellows connected to a mechanical indicator to measure pressure.

An entire class of gauges uses the property that pressure due to the weight of a fluid is given by $P=hρg\text{.}$ Consider the U-shaped tube shown in [ref:import-auto-id1840451], for example. This simple tube is called a *manometer*. In [ref:import-auto-id1840451](a), both sides of the tube are open to the atmosphere. Atmospheric pressure therefore pushes down on each side equally so its effect cancels. If the fluid is deeper on one side, there is a greater pressure on the deeper side, and the fluid flows away from that side until the depths are equal.
Let us examine how a manometer is used to measure pressure. Suppose one side of the U-tube is connected to some source of pressure ${P}_{\text{abs}}$ such as the toy balloon in [ref:import-auto-id1840451](b) or the vacuum-packed peanut jar shown in [ref:import-auto-id1840451](c). Pressure is transmitted undiminished to the manometer, and the fluid levels are no longer equal. In [ref:import-auto-id1840451](b), ${P}_{\text{abs}}$ is greater than atmospheric pressure, whereas in [ref:import-auto-id1840451](c), ${P}_{\text{abs}}$ is less than atmospheric pressure. In both cases, ${P}_{\text{abs}}$ differs from atmospheric pressure by an amount $hρg$, where $ρ$ is the density of the fluid in the manometer. In [ref:import-auto-id1840451](b), ${P}_{\text{abs}}$ can support a column of fluid of height $h$, and so it must exert a pressure $hρg$ greater than atmospheric pressure (the gauge pressure ${P}_{\text{g}}$ is positive). In [ref:import-auto-id1840451](c), atmospheric pressure can support a column of fluid of height $h$, and so ${P}_{\text{abs}}$ is less than atmospheric pressure by an amount $hρg$ (the gauge pressure ${P}_{\text{g}}$ is negative). A manometer with one side open to the atmosphere is an ideal device for measuring gauge pressures. The gauge pressure is ${P}_{\text{g}}=hρg$ and is found by measuring $h$.

> FIGURE {fig:import-auto-id1840451} src=../../media/Figure_12_06_02a.jpg
> alt: Open-tube manometers have U-shaped tubes and one end is always open. When open to atmosphere, fluid at both ends will be the same, as in the first figure. When pressure at one end is greater, the fluid level will go down on that end, as in the second figure. If the pressure at one end is less, then the height of the fluid column on that side will increase, as in the third figure.
> width: 600
> caption: An open-tube manometer has one side open to the atmosphere. (a) Fluid depth must be the same on both sides, or the pressure each side exerts at the bottom will be unequal and there will be flow from the deeper side. (b) A positive gauge pressure ${P}_{\text{g}}=hρg$ transmitted to one side of the manometer can support a column of fluid of height <u></u>$h$. (c) Similarly, atmospheric pressure is greater than a negative gauge pressure ${P}_{\text{g}}$ by an amount $hρg$. The jar’s rigidity prevents atmospheric pressure from being transmitted to the peanuts.

Mercury manometers are often used to measure arterial blood pressure. An inflatable cuff is placed on the upper arm as shown in [ref:import-auto-id2688887]. By squeezing the bulb, the person making the measurement exerts pressure, which is transmitted undiminished to both the main artery in the arm and the manometer. When this applied pressure exceeds blood pressure, blood flow below the cuff is cut off. The person making the measurement then slowly lowers the applied pressure and listens for blood flow to resume. Blood pressure pulsates because of the pumping action of the heart, reaching a maximum, called {term:systolic pressure}, and a minimum, called {term:diastolic pressure}, with each heartbeat. Systolic pressure is measured by noting the value of $h$ when blood flow first begins as cuff pressure is lowered. Diastolic pressure is measured by noting $h$ when blood flows without interruption. The typical blood pressure of a young adult raises the mercury to a height of 120 mm at systolic and 80 mm at diastolic. This is commonly quoted as 120 over 80, or 120/80. The first pressure is representative of the maximum output of the heart; the second is due to the elasticity of the arteries in maintaining the pressure between beats. The density of the mercury fluid in the manometer is 13.6 times greater than water, so the height of the fluid will be 1/13.6 of that in a water manometer. This reduced height can make measurements difficult, so mercury manometers are used to measure larger pressures, such as blood pressure. The density of mercury is such that $1.0 mm Hg=133\;\text{Pa}$.

:::note [] Systolic Pressure

Systolic pressure is the maximum blood pressure.
:::

:::note [] Diastolic Pressure

Diastolic pressure is the minimum blood pressure.
:::

> FIGURE {fig:import-auto-id2688887} src=../../media/Figure_12_06_03a.jpg
> alt: U.S. Army Spc. Monica Brown takes a soldier's blood pressure reading at the hospital on Forward Operating Base Salerno, Afghanistan, March 10, 2008.
> width: 300
> caption: In routine blood pressure measurements, an inflatable cuff is placed on the upper arm at the same level as the heart. Blood flow is detected just below the cuff, and corresponding pressures are transmitted to a mercury-filled manometer. (credit: U.S. Army photo by Spc. Micah E. Clare\4TH BCT)

:::example {ex:eip-121} Calculating Height of IV Bag: Blood Pressure and Intravenous Infusions
Intravenous infusions are usually made with the help of the gravitational force. Assuming that the density of the fluid being administered is 1.00 g/ml, at what height should the IV bag be placed above the entry point so that the fluid just enters the vein if the blood pressure in the vein is 18 mm Hg above atmospheric pressure? Assume that the IV bag is collapsible.
**Strategy for (a)**
For the fluid to just enter the vein, its pressure at entry must exceed the blood pressure in the vein (18 mm Hg above atmospheric pressure). We therefore need to find the height of fluid that corresponds to this gauge pressure.
**Solution**
We first need to convert the pressure into SI units. Since $1.0 mm Hg=\text{133 Pa}$,

$$ P=\text{18 mm Hg}\times \frac{\text{133 Pa}}{1.0 mm Hg}=\text{2400 Pa}\text{.} $$  {eq:eip-327}

Rearranging ${P}_{\text{g}}=hρg$ for $h$ gives $h=\frac{{P}_{\text{g}}}{ρg}$. Substituting known values into this equation gives

$$ \begin{array}{lll}h & = & \frac{\text{2400 N}{\text{/m}}^{2}}{(1\text{.}0\times {\text{10}}^{3}\;{\text{kg/m}}^{3})(9\text{.}\text{80}\;{\text{m/s}}^{2})} \\ & = & \text{0.24 m.}\end{array} $$  {eq:eip-321}

**Discussion**
The IV bag must be placed at 0.24 m above the entry point into the arm for the fluid to just enter the arm. Generally, IV bags are placed higher than this. You may have noticed that the bags used for blood collection are placed below the donor to allow blood to flow easily from the arm to the bag, which is the opposite direction of flow than required in the example presented here.
:::
A *barometer* is a device that measures atmospheric pressure. A mercury barometer is shown in [ref:import-auto-id2403521]. This device measures atmospheric pressure, rather than gauge pressure, because there is a nearly pure vacuum above the mercury in the tube. The height of the mercury is such that $hρg={P}_{\text{atm}}$. When atmospheric pressure varies, the mercury rises or falls, giving important clues to weather forecasters. The barometer can also be used as an altimeter, since average atmospheric pressure varies with altitude. Mercury barometers and manometers are so common that units of mm Hg are often quoted for atmospheric pressure and blood pressures. [ref:eip-286] gives conversion factors for some of the more commonly used units of pressure.

> FIGURE {fig:import-auto-id2403521} src=../../media/Figure_12_06_04a.jpg
> alt: Mercury barometer has an evacuated glass tube inverted and placed in the mercury container. The height of the mercury column in the inverted tube is determined by the atmospheric pressure.
> width: 200
> caption: A mercury barometer measures atmospheric pressure. The pressure due to the mercury’s weight, $hρg$, equals atmospheric pressure. The atmosphere is able to force mercury in the tube to a height $h$ because the pressure above the mercury is zero.

> TABLE {tab:eip-286} cols=2
> title: Conversion Factors for Various Pressure Units
> summary: Conversion Factors for Various Pressure Units

| Conversion to N/m<sup>2</sup> (Pa) | Conversion from atm |
| --- | --- |
| $1.0 atm=1\text{.}\text{013}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ | $1.0 atm=1\text{.}\text{013}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ |
| $1.0\;{\text{dyne/cm}}^{2}=0\text{.}\text{10}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=1\text{.}\text{013}\times {\text{10}}^{6}\;{\text{dyne/cm}}^{2}$ |
| $1\text{.}0\;{\text{kg/cm}}^{2}=9\text{.}8\times {\text{10}}^{4}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=1\text{.}\text{013}\;{\text{kg/cm}}^{2}$ |
| $1\text{.}0\;\text{lb/in}{\text{.}}^{2}=6\text{.}\text{90}\times {\text{10}}^{3}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=\text{14}\text{.}7\;\text{lb/in}{\text{.}}^{2}$ |
| $1.0 mm Hg=\text{133}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=\text{760 mm Hg}$ |
| $1\text{.}0 cm Hg=1\text{.}\text{33}\times {\text{10}}^{3}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=\text{76}\text{.}0 cm Hg$ |
| $1\text{.}0 cm water=\text{98}\text{.}1\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=1\text{.}\text{03}\times {\text{10}}^{3}\;\text{cm water}$ |
| $1.0 bar=1\text{.}\text{000}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ | $1\text{.}0\;\text{atm}=1.013 bar$ |
| $1.0 millibar=1\text{.}\text{000}\times {\text{10}}^{2}\;{\text{N/m}}^{2}$ | $1.0 atm=\text{1013 millibar}$ |

## Section Summary {section:section-summary}
- Gauge pressure is the pressure relative to atmospheric pressure.
- Absolute pressure is the sum of gauge pressure and atmospheric pressure.
- Aneroid gauge measures pressure using a bellows-and-spring arrangement connected to the pointer of a calibrated scale.
- Open-tube manometers have U-shaped tubes and one end is always open. It is used to measure pressure.
- A mercury barometer is a device that measures atmospheric pressure.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2010871} type=conceptual-questions 
PROBLEM:
Explain why the fluid reaches equal levels on either side of a manometer if both sides are open to the atmosphere, even if the tubes are of different diameters.
:::

:::exercise {eip-id3037483} type=conceptual-questions 
PROBLEM:
[ref:import-auto-id2688887] shows how a common measurement of arterial blood pressure is made. Is there any effect on the measured pressure if the manometer is lowered? What is the effect of raising the arm above the shoulder? What is the effect of placing the cuff on the upper leg with the person standing? Explain your answers in terms of pressure created by the weight of a fluid.
:::

:::exercise {fs-id1314393} type=conceptual-questions 
PROBLEM:
Considering the magnitude of typical arterial blood pressures, why are mercury rather than water manometers used for these measurements?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id2666940} type=problems-exercises 
PROBLEM:
Find the gauge and absolute pressures in the balloon and peanut jar shown in [ref:import-auto-id1840451], assuming the manometer connected to the balloon uses water whereas the manometer connected to the jar contains mercury. Express in units of centimeters of water for the balloon and millimeters of mercury for the jar, taking $h=0\text{.}\text{0500 m}$ for each.
SOLUTION:
Balloon:
$\begin{array}{lll}{P}_{\text{g}} & = & 5.00 cm\;{\text{H}}_{2}\text{O,} \\ {P}_{\text{abs}} & = & 1.035\times {\text{10}}^{3}\;\text{cm}\;{\text{H}}_{2}\text{O.}\end{array}$
Jar:
$\begin{array}{lll}{P}_{\text{g}} & = & -\text{50.0 mm Hg}\text{,} \\ {P}_{\text{abs}} & = & \text{710 mm Hg.}\end{array}$
:::

:::exercise {fs-id2624790} type=problems-exercises 
PROBLEM:
(a) Convert normal blood pressure readings of 120 over 80 mm Hg to newtons per meter squared using the relationship for pressure due to the weight of a fluid $(P=hρg)$ rather than a conversion factor. (b) Discuss why blood pressures for an infant could be smaller than those for an adult. Specifically, consider the smaller height to which blood must be pumped.
:::

:::exercise {fs-id2594876} type=problems-exercises 
PROBLEM:
How tall must a water-filled manometer be to measure blood pressures as high as 300 mm Hg?
SOLUTION:
4.08 m
:::

:::exercise {fs-id1405340} type=problems-exercises 
PROBLEM:
Pressure cookers have been around for more than 300 years, although their use has strongly declined in recent years (early models had a nasty habit of exploding). How much force must the latches holding the lid onto a pressure cooker be able to withstand if the circular lid is $\text{25.0 cm}$ in diameter and the gauge pressure inside is 300 atm? Neglect the weight of the lid.
:::

:::exercise {fs-id2599483} type=problems-exercises 
PROBLEM:
Suppose you measure a standing person’s blood pressure by placing the cuff on his leg 0.500 m below the heart. Calculate the pressure you would observe (in units of mm Hg) if the pressure at the heart were 120 over 80 mm Hg. Assume that there is no loss of pressure due to resistance in the circulatory system (a reasonable assumption, since major arteries are large).
SOLUTION:
$\begin{array}{l}\Delta P=\text{38.7 mm Hg,} \\ \text{Leg blood pressure}=\frac{\text{159}}{\text{119}}\text{.}\end{array}$
:::

:::exercise {fs-id2950488} type=problems-exercises 
PROBLEM:
A submarine is stranded on the bottom of the ocean with its hatch 25.0 m below the surface. Calculate the force needed to open the hatch from the inside, given it is circular and 0.450 m in diameter. Air pressure inside the submarine is 1.00 atm.
:::

:::exercise {fs-id2408955} type=problems-exercises 
PROBLEM:
Assuming bicycle tires are perfectly flexible and support the weight of bicycle and rider by pressure alone, calculate the total area of the tires in contact with the ground. The bicycle plus rider has a mass of 80.0 kg, and the gauge pressure in the tires is $3\text{.}\text{50}\times {\text{10}}^{5}\;\text{Pa}$.
SOLUTION:
$\text{22}\text{.}4\;{\text{cm}}^{2}$
:::

## Glossary
- {def} **absolute pressure**: the sum of gauge pressure and atmospheric pressure
- {def} **diastolic pressure**: the minimum blood pressure in the artery
- {def} **gauge pressure**: the pressure relative to atmospheric pressure
- {def} **systolic pressure**: the maximum blood pressure in the artery

# Bernoulli’s Equation

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain the terms in Bernoulli’s equation.
- Explain how Bernoulli’s equation is related to conservation of energy.
- Explain how to derive Bernoulli’s principle from Bernoulli’s equation.
- Calculate with Bernoulli’s principle.
- List some applications of Bernoulli’s principle.
When a fluid flows into a narrower channel, its speed increases. That means its kinetic energy also increases. Where does that change in kinetic energy come from? The increased kinetic energy comes from the net work done on the fluid to push it into the channel and the work done on the fluid by the gravitational force, if the fluid changes vertical position. Recall the work-energy theorem,

$$ {W}_{\text{net}}=\frac{1}{2}{\text{mv}}^{2}-\frac{1}{2}{\text{mv}}_{0}^{2}\text{.} $$  {eq:eip-843}

There is a pressure difference when the channel narrows. This pressure difference results in a net force on the fluid: recall that pressure times area equals force. The net work done increases the fluid’s kinetic energy. As a result, the *pressure will drop in a rapidly-moving fluid*, whether or not the fluid is confined to a tube.
There are a number of common examples of pressure dropping in rapidly-moving fluids. Shower curtains have a disagreeable habit of bulging into the shower stall when the shower is on. The high-velocity stream of water and air creates a region of lower pressure inside the shower, and standard atmospheric pressure on the other side. The pressure difference results in a net force inward pushing the curtain in. You may also have noticed that when passing a truck on the highway, your car tends to veer toward it. The reason is the same—the high velocity of the air between the car and the truck creates a region of lower pressure, and the vehicles are pushed together by greater pressure on the outside. (See [ref:import-auto-id1546552].) This effect was observed as far back as the mid-1800s, when it was found that trains passing in opposite directions tipped precariously toward one another.

> FIGURE {fig:import-auto-id1546552} src=../../media/Figure_13_02_01a.jpg
> alt: An overhead view of a car passing by a truck on a highway toward left is shown. The air passing through the vehicles is shown using lines along the length of both the vehicles. The lines representing the air movement has a velocity v one outside the area between the vehicles and velocity v two between the vehicles. v two is shown to be greater than v one with the help of a longer arrow toward right. The pressure between the car and the truck is represented by P i and the pressure at the other ends of both the vehicles is represented as P zero. The pressure P i is shown to be less than P zero by shorter length of the arrow. The direction of P i is shown as pushing the car and truck apart, and the direction of P zero is shown as pushing the car and truck toward each other.
> width: 225
> caption: An overhead view of a car passing a truck on a highway. Air passing between the vehicles flows in a narrower channel and must increase its speed (${v}_{2}$ is greater than ${v}_{1}$), causing the pressure between them to drop (${P}_{\text{i}}$ is less than ${P}_{\text{o}}$). Greater pressure on the outside pushes the car and truck together.

:::note [] Making Connections: Take-Home Investigation with a Sheet of Paper

Hold the short edge of a sheet of paper parallel to your mouth with one hand on each side of your mouth. The page should slant downward over your hands. Blow over the top of the page. Describe what happens and explain the reason for this behavior.
:::

## Bernoulli’s Equation
The relationship between pressure and velocity in fluids is described quantitatively by {term:Bernoulli’s equation}, named after its discoverer, the Swiss scientist Daniel Bernoulli (1700–1782). Bernoulli’s equation states that for an incompressible, frictionless fluid, the following sum is constant:

$$ P+\frac{1}{2}{ρv}^{2}+ρ\text{gh}=\text{constant,} $$  {eq:eip-506}

where $P$ is the absolute pressure, $ρ$ is the fluid density, $v$ is the velocity of the fluid, $h$ is the height above some reference point, and $g$ is the acceleration due to gravity. If we follow a small volume of fluid along its path, various quantities in the sum may change, but the total remains constant. Let the subscripts 1 and 2 refer to any two points along the path that the bit of fluid follows; Bernoulli’s equation becomes

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}+ρ{gh}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}+ρ{gh}_{2}\text{.} $$  {eq:eip-322}

Bernoulli’s equation is a form of the conservation of energy principle. Note that the second and third terms are the kinetic and potential energy with $m$ replaced by $ρ$. In fact, each term in the equation has units of energy per unit volume. We can prove this for the second term by substituting $ρ=m/V$  into it and gathering terms:

$$ \frac{1}{2}{ρv}^{2}=\frac{\frac{1}{2}{\text{mv}}^{2}}{V}=\frac{\text{KE}}{V}\text{.} $$  {eq:eip-390}

So $\frac{1}{2}{ρv}^{2}$ is the kinetic energy per unit volume. Making the same substitution into the third term in the equation, we find

$$ ρgh=\frac{mgh}{V}=\frac{{\text{PE}}_{\text{g}}}{V}, $$  {eq:eip-800}

so $ρ\text{gh}$ is the gravitational potential energy per unit volume. Note that pressure $P$ has units of energy per unit volume, too. Since *$P=F/A$*, its units are ${\text{N/m}}^{2}$. If we multiply these by m/m, we obtain $\text{N}⋅{\text{m/m}}^{3}={\text{J/m}}^{3}$, or energy per unit volume. Bernoulli’s equation is, in fact, just a convenient statement of conservation of energy for an incompressible fluid in the absence of friction.

:::note [] Making Connections: Conservation of Energy

Conservation of energy applied to fluid flow produces Bernoulli’s equation. The net work done by the fluid’s pressure results in changes in the fluid’s $\text{KE}$ and ${\text{PE}}_{\text{g}}$ per unit volume. If other forms of energy are involved in fluid flow, Bernoulli’s equation can be modified to take these forms into account. Such forms of energy include thermal energy dissipated because of fluid viscosity.
:::
The general form of Bernoulli’s equation has three terms in it, and it is broadly applicable. To understand it better, we will look at a number of specific situations that simplify and illustrate its use and meaning.

## Bernoulli’s Equation for Static Fluids
Let us first consider the very simple situation where the fluid is static—that is, ${v}_{1}={v}_{2}=0$. Bernoulli’s equation in that case is

$$ {P}_{1}+ρ{gh}_{1}={P}_{2}+ρ{gh}_{2}\text{.} $$  {eq:eip-871}

We can further simplify the equation by taking ${h}_{2}=0$ (we can always choose some height to be zero, just as we often have done for other situations involving the gravitational force, and take all other heights to be relative to this). In that case, we get

$$ {P}_{2}={P}_{1}+ρ{gh}_{1}\text{.} $$  {eq:eip-477}

This equation tells us that, in static fluids, pressure increases with depth. As we go from point 1 to point 2 in the fluid, the depth increases by ${h}_{1}$, and consequently, ${P}_{2}$ is greater than ${P}_{1}$ by an amount $ρ{gh}_{1}$. In the very simplest case,  ${P}_{1}$ is zero at the top of the fluid, and we get the familiar relationship  $P=ρgh$. (Recall that  $P=ρgh$ and  $\text{Δ}{\text{PE}}_{\text{g}}=\text{mgh}.$) Bernoulli’s equation includes the fact that the pressure due to the weight of a fluid is  $ρ\text{gh}$. Although we introduce Bernoulli’s equation for fluid flow, it includes much of what we studied for static fluids in the preceding chapter.

## Bernoulli’s Principle—Bernoulli’s Equation at Constant Depth
Another important situation is one in which the fluid moves but its depth is constant—that is, ${h}_{1}={h}_{2}$. Under that condition, Bernoulli’s equation becomes

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}\text{.} $$  {eq:eip-663}

Situations in which fluid flows at a constant depth are so important that this equation is often called {term:Bernoulli’s principle}. It is Bernoulli’s equation for fluids at constant depth. (Note again that this applies to a small volume of fluid as we follow it along its path.) As we have just discussed, pressure drops as speed increases in a moving fluid. We can see this from Bernoulli’s principle. For example, if ${v}_{2}$ is greater than ${v}_{1}$ in the equation, then ${P}_{2}$ must be less than ${P}_{1}$ for the equality to hold.

:::example {ex:fs-id1431791} Calculating Pressure: Pressure Drops as a Fluid Speeds Up
In [ref:fs-id3230619](module:m42205), we found that the speed of water in a hose increased from 1.96 m/s to 25.5 m/s going from the hose to the nozzle. Calculate the pressure in the hose, given that the absolute pressure in the nozzle is $1\text{.}\text{01}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ (atmospheric, as it must be) and assuming level, frictionless flow.
**Strategy**
Level flow means constant depth, so Bernoulli’s principle applies. We use the subscript 1 for values in the hose and 2 for those in the nozzle. We are thus asked to find ${P}_{1}$.
**Solution**
Solving Bernoulli’s principle for ${P}_{1}$ yields

$$ {P}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}-\frac{1}{2}{ρv}_{1}^{2}={P}_{2}+\frac{1}{2}ρ({v}_{2}^{2}-{v}_{1}^{2})\text{.} $$  {eq:eip-193}

Substituting known values,

$$ \begin{array}{lll}{P}_{1} & = & 1\text{.}\text{01}\times {\text{10}}^{5}\;{\text{N/m}}^{2} \\ & & +\frac{1}{2}({\text{10}}^{3}\;{\text{kg/m}}^{3})[(\text{25.5 m/s}{)}^{2}-(\text{1.96 m/s}{)}^{2}] \\ & = & 4.24\times {\text{10}}^{5}\;{\text{N/m}}^{2}\text{.}\end{array} $$  {eq:eip-579}

**Discussion**
This absolute pressure in the hose is greater than in the nozzle, as expected since $v$ is greater in the nozzle. The pressure ${P}_{2}$ in the nozzle must be atmospheric since it emerges into the atmosphere without other changes in conditions.
:::

## Applications of Bernoulli’s Principle
There are a number of devices and situations in which fluid flows at a constant height and, thus, can be analyzed with Bernoulli’s principle.

### Entrainment
People have long put the Bernoulli principle to work by using reduced pressure in high-velocity fluids to move things about. With a higher pressure on the outside, the high-velocity fluid forces other fluids into the stream. This process is called *entrainment*. Entrainment devices have been in use since ancient times, particularly as pumps to raise water small heights, as in draining swamps, fields, or other low-lying areas. Some other devices that use the concept of entrainment are shown in [ref:fs-id1572246].

> FIGURE {fig:fs-id1572246} src=../../media/Figure_13_02_02a.jpg
> alt: Part a of the figure shows a rectangular section of a cylindrical Bunsen burner as a vertical column. The natural gas is shown to enter the rectangular column from the bottom upward. The air is shown to enter though a nozzle at the left side near the bottom part of the rectangular column and rise upward. Both air and natural gas are shown to rise up together along the length of the column, shown as vertical arrows along the length pointing upward. Part b of the figure shows an atomizer that uses a squeeze bulb in the shape of a small sphere to create a jet of air that entrains drops of perfume contained in a spherical bottomed container. The air is shown to come out of the squeeze bulb and the perfume is shown to rise up from the spherical bottomed container. Part c of the figure shows a common aspirator which contains a cylindrical tube held vertically. The tube is broader on the top and narrow at the bottom. Water is shown to enter the tube from the broader region and flow toward the narrow region. Air is shown to enter the cylindrical tube from the bottom part of the broader side and also flow toward the narrow tube. Part d of the figure shows the chimney of a water heater. Water heater is shown as a rectangular box at the bottom having a cylindrical section in the middle. The cylindrical section is broader at the bottom and narrow toward the top. Hot air is shown to rise up along the vertical section of the cylindrical tube. The chimney is conical at the bottom and rectangular upward and is shown above the rectangular water heater. The hot air enters the chimney at the conical end and rises upward. Cool air is shown to enter the chimney through the area between the rectangular section of heater and chimney from the two sides and rise up along the chimney with the hot air as shown by vertical arrows.
> width: 475
> caption: Examples of entrainment devices that use increased fluid speed to create low pressures, which then entrain one fluid into another. (a) A Bunsen burner uses an adjustable gas nozzle, entraining air for proper combustion. (b) An atomizer uses a squeeze bulb to create a jet of air that entrains drops of perfume. Paint sprayers and carburetors use very similar techniques to move their respective liquids. (c) A common aspirator uses a high-speed stream of water to create a region of lower pressure. Aspirators may be used as suction pumps in dental and surgical situations or for draining a flooded basement or producing a reduced pressure in a vessel. (d) The chimney of a water heater is designed to entrain air into the pipe leading through the ceiling.

### Wings and Sails
The airplane wing is a beautiful example of Bernoulli’s principle in action. [ref:import-auto-id1889294](a) shows the characteristic shape of a wing. The wing is tilted upward at a small angle and the upper surface is longer, causing air to flow faster over it. The pressure on top of the wing is therefore reduced, creating a net upward force or lift. (Wings can also gain lift by pushing air downward, utilizing the conservation of momentum principle. The deflected air molecules result in an upward force on the wing — Newton’s third law.) Sails also have the characteristic shape of a wing. (See [ref:import-auto-id1889294](b).) The pressure on the front side of the sail, ${P}_{\text{front}}$, is lower than the pressure on the back of the sail, ${P}_{\text{back}}$. This results in a forward force and even allows you to sail into the wind.

:::note [] Making Connections: Take-Home Investigation with Two Strips of Paper

For a good illustration of Bernoulli’s principle, make two strips of paper, each about 15 cm long and 4 cm wide. Hold the small end of one strip up to your lips and let it drape over your finger. Blow across the paper. What happens? Now hold two strips of paper up to your lips, separated by your fingers. Blow between the strips. What happens?
:::

### Velocity measurement
[ref:import-auto-id2598838] shows two devices that measure fluid velocity based on Bernoulli’s principle. The manometer in [ref:import-auto-id2598838](a) is connected to two tubes that are small enough not to appreciably disturb the flow. The tube facing the oncoming fluid creates a dead spot having zero velocity (${v}_{1}=0$) in front of it, while fluid passing the other tube has velocity ${v}_{2}$. This means that Bernoulli’s principle as stated in ${P}_{1}+\frac{1}{2}{ρv}_{1}^{2}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}$ becomes

$$ {P}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}\text{.} $$  {eq:eip-847}

> FIGURE {fig:import-auto-id1889294} src=../../media/Figure_13_02_03.jpg
> alt: Part a of the figure shows a picture of a wing. It is in the form of an aerofoil. One side of the wing is broader and the other end tapers. The direction of the air is shown as lines along the length of the wing. The direction of the air below the wing is shown as flowing along the length of the wing. The pressure exerted by the air given by P b is upward. The direction of the air on the top or front part of the wing is shown as flowing along the length of the wing. The pressure exerted by the air is given by P f, and it acts downward. Part b of the figure shows a boat with a sail. The direction of the sail is almost across the boat. The direction of the air in the sail is shown by lines on the front and back sides of the sail. The air currents on the front exert a pressure P front toward the sail, and air currents on the back sides of sail exert a pressure P back again toward the sail.
> width: 475
> caption: (a) The Bernoulli principle helps explain lift generated by a wing. (b) Sails use the same technique to generate part of their thrust.

Thus pressure ${P}_{2}$ over the second opening is reduced by $\frac{1}{2}{ρv}_{2}^{2}$, and so the fluid in the manometer rises by $h$ on the side connected to the second opening, where

$$ h\propto \frac{1}{2}{ρv}_{2}^{2}\text{.} $$  {eq:eip-695}

(Recall that the symbol $\text{∝}$ means “proportional to.”) Solving for ${v}_{2}$, we see that

$$ {v}_{2}\propto \sqrt{h}\text{.} $$  {eq:eip-265}

[ref:import-auto-id2598838](b) shows a version of this device that is in common use for measuring various fluid velocities; such devices are frequently used as air speed indicators in aircraft.

> FIGURE {fig:import-auto-id2598838} src=../../media/Figure_13_02_04a.jpg
> alt: Part a shows a U-shaped manometer tube connected to ends of two tubes which are placed close together. Tube one is open on the end and shows a velocity v one equals zero at the end. Tube two has an opening on the side and shows a velocity v two across the opening. The level of fluid in the U-shaped tube is more on the right side than on the left. The difference in height is shown by h. Part b of the figure shows a velocity measuring device a pitot tube. Two coaxial tubes, one broader outside and other narrow inside are connected to a U-shaped tube. The U-shaped tube is also narrow at one end and broader at the other. The narrow end of the U-shaped tube is connected to the narrow inner tube and the broader end of the U-shaped tube is connected to the broader outer tube. The tube one has an opening at one of its edges and the velocity of the fluid at the end is v one equals zero. Tube two has an opening on the side and shows a velocity v two across the opening. The level of fluid in the U-shaped tube is more on the right side than on the left. The difference in height is shown by h.
> width: 475
> caption: Measurement of fluid speed based on Bernoulli’s principle. (a) A manometer is connected to two tubes that are close together and small enough not to disturb the flow. Tube 1 is open at the end facing the flow. A dead spot having zero speed is created there. Tube 2 has an opening on the side, and so the fluid has a speed $v$ across the opening; thus, pressure there drops. The difference in pressure at the manometer is $\frac{1}{2}{ρv}_{2}^{2}$, and so $h$ is proportional to $\frac{1}{2}{ρv}_{2}^{2}$. (b) This type of velocity measuring device is a Prandtl tube, also known as a pitot tube.

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1292491} type=ap-test-prep 
PROBLEM:
At what depth beneath the surface of the lake is the pressure in the water equal to twice atmospheric pressure?
(a) 10 m
(b) 100 m
(c) 1000 m
(d) 10,000 m
SOLUTION:
(a)
:::

:::exercise {fs-id1479037} type=ap-test-prep 
PROBLEM:
A pump provides pressure to the lower end of a long pipeline that supplies water from a reservoir to a house located on a hill 150 m vertically upward from the lower end of the pipe (where the water is initially at rest before being pumped). The pipeline has a constant diameter of 3.5 cm, and the upper end of the pipeline is open to the atmosphere. What pressure must the pump provide for water to flow from the upper end of the pipeline at a rate of 5.0 m/s?
:::

:::exercise {fs-id1497466} type=ap-test-prep 
PROBLEM:
According to Bernoulli's equation, if the pressure in a given fluid is constant and the kinetic energy per unit volume of a fluid increases, which of the following is true?
(a) The potential energy per unit volume of the fluid decreases.
(b) The potential energy per unit volume of the fluid increases.
(c) The fluid must no longer be considered incompressible.
(d) The flow rate of the fluid increases.
SOLUTION:
(a)
:::

:::exercise {fs-id1727123} type=ap-test-prep 
PROBLEM:
Consider the following circumstances within a fluid, and determine the answer using Bernoulli's equation. (a) The pressure and kinetic energy per unit volume along a fluid path increases. What must be true about the potential energy per unit volume of the fluid along the fluid path? Explain. (b) The pressure along a fluid path increases, and the kinetic energy per unit volume remains constant. What must be true about the potential energy per unit volume of the fluid along the fluid path? Explain.
:::

## Summary {section:section-summary}
- Bernoulli’s equation states that the sum on each side of the following equation is constant, or the same at any two points in an incompressible frictionless fluid:

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}+ρ{gh}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}+ρ{\text{gh}}_{2}. $$  {eq:eip-id1907714}

- Bernoulli’s principle is Bernoulli’s equation applied to situations in which depth is constant. The terms involving depth (or height *h* ) subtract out, yielding

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}. $$  {eq:eip-id2688454}

- Bernoulli’s principle has many applications, including entrainment, wings and sails, and velocity measurement.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3078884} type=conceptual-questions 
PROBLEM:
You can squirt water a considerably greater distance by placing your thumb over the end of a garden hose and then releasing, than by leaving it completely uncovered. Explain how this works.
:::

:::exercise {fs-id1596349} type=conceptual-questions 
PROBLEM:
Water is shot nearly vertically upward in a decorative fountain and the stream is observed to broaden as it rises. Conversely, a stream of water falling straight down from a faucet narrows. Explain why, and discuss whether surface tension enhances or reduces the effect in each case.
:::

:::exercise {fs-id2968273} type=conceptual-questions 
PROBLEM:
Look back to [ref:import-auto-id1546552]. Answer the following two questions. Why is ${P}_{\text{o}}$ less than atmospheric? Why is ${P}_{\text{o}}$ greater than ${P}_{\text{i}}$?
:::

:::exercise {fs-id3454946} type=conceptual-questions 
PROBLEM:
Give an example of entrainment not mentioned in the text.
:::

:::exercise {fs-id3387506} type=conceptual-questions 
PROBLEM:
Many entrainment devices have a constriction, called a Venturi, such as shown in [ref:import-auto-id3177713]. How does this bolster entrainment?
:::

> FIGURE {fig:import-auto-id3177713} src=../../media/Figure_13_02_05a.jpg
> alt: Figure shows a venturi tube, a cylindrical tube broader at both the ends and narrow in the middle. The narrow part is labeled as venturi constriction. The flow of fluid is shown as horizontal arrows along the length of the tube toward the right. The flow lines are closer in the center and spread apart at both the ends. There is an opening on the top portion of the narrow section for the entrained fluid to enter.
> width: 250
> caption: A tube with a narrow segment designed to enhance entrainment is called a Venturi. These are very commonly used in carburetors and aspirators.

:::exercise {eip-411} type=conceptual-questions 
PROBLEM:
Some chimney pipes have a T-shape, with a crosspiece on top that helps draw up gases whenever there is even a slight breeze. Explain how this works in terms of Bernoulli’s principle.
:::

:::exercise {fs-id2931718} type=conceptual-questions 
PROBLEM:
Is there a limit to the height to which an entrainment device can raise a fluid? Explain your answer.
:::

:::exercise {fs-id3415476} type=conceptual-questions 
PROBLEM:
Why is it preferable for airplanes to take off into the wind rather than with the wind?
:::

:::exercise {fs-id1128778} type=conceptual-questions 
PROBLEM:
Roofs are sometimes pushed off vertically during a tropical cyclone, and buildings sometimes explode outward when hit by a tornado. Use Bernoulli’s principle to explain these phenomena.
:::

:::exercise {fs-id3006966} type=conceptual-questions 
PROBLEM:
Why does a sailboat need a keel?
:::

:::exercise {fs-id1427122} type=conceptual-questions 
PROBLEM:
It is dangerous to stand close to railroad tracks when a rapidly moving commuter train passes. Explain why atmospheric pressure would push you toward the moving train.
:::

:::exercise {fs-id2437386} type=conceptual-questions 
PROBLEM:
What assumptions are made in Bernoulli’s equation? Are these assumptions reasonably valid in the example of water flowing in a hose?
:::

:::exercise {fs-id2621156} type=conceptual-questions 
PROBLEM:
A perfume bottle or atomizer sprays a fluid that is in the bottle. ([ref:import-auto-id3154866].) How does the fluid rise up in the vertical tube in the bottle?

> FIGURE {fig:import-auto-id3154866} src=../../media/Figure_13_02_06a.jpg
> alt: A perfume bottle with a spray cap.
> width: 150
> caption: Atomizer: perfume bottle with tube to carry perfume up through the bottle. (credit: Antonia Foy, Flickr)

:::

:::exercise {fs-id1931767} type=conceptual-questions 
PROBLEM:
If you lower the window on a car while moving, an empty plastic bag can sometimes fly out the window. Why does this happen?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id3176552} type=problems-exercises 
PROBLEM:
Verify that pressure has units of energy per unit volume.
SOLUTION:
$\begin{array}{lll}P & = & \frac{\text{Force}}{\text{Area}}, \\ (P{)}_{\text{units}} & = & {\text{N/m}}^{2}=\text{N}⋅{\text{m/m}}^{3}={\text{J/m}}^{3} \\ & = & \text{energy/volume}\end{array}$
:::

:::exercise {fs-id1994566} type=problems-exercises 
PROBLEM:
Suppose you have a wind speed gauge like the pitot tube shown in [ref:import-auto-id2598838](b). By what factor must wind speed increase to double the value of *$h$* in the manometer? Is this independent of the moving fluid and the fluid in the manometer?
:::

:::exercise {fs-id3200825} type=problems-exercises 
PROBLEM:
If the pressure reading of your pitot tube is 15.0 mm Hg at a speed of 200 km/h, what will it be at 700 km/h at the same altitude?
SOLUTION:
184 mm Hg
:::

:::exercise {fs-id1997770} type=problems-exercises 
PROBLEM:
Calculate the maximum height to which water could be squirted with the hose in [ref:fs-id3230619](module:m42205) example if it: (a) Emerges from the nozzle. (b) Emerges with the nozzle removed, assuming the same flow rate.
:::

:::exercise {fs-id2423711} type=problems-exercises 
PROBLEM:
Every few years, winds in Boulder, Colorado, attain sustained speeds of 45.0 m/s (about 100 mi/h) when the jet stream descends during early spring. Approximately what is the force due to the Bernoulli effect on a roof having an area of $\text{220}\;{\text{m}}^{2}$? Typical air density in Boulder is $1\text{.}\text{14}\;{\text{kg/m}}^{3}$, and the corresponding atmospheric pressure is $8\text{.}\text{89}\times {\text{10}}^{4}\;{\text{N/m}}^{2}$. (Bernoulli’s principle as stated in the text assumes laminar flow. Using the principle here produces only an approximate result, because there is significant turbulence.)
SOLUTION:
$2\text{.}\text{54}\times {\text{10}}^{5}\;\text{N}$
:::

:::exercise {fs-id1022777} type=problems-exercises 
PROBLEM:
(a) Calculate the approximate force on a square meter of sail, given the horizontal velocity of the wind is 6.00 m/s parallel to its front surface and 3.50 m/s along its back surface. Take the density of air to be $\text{1.29 kg}{\text{/m}}^{3}$. (The calculation, based on Bernoulli’s principle, is approximate due to the effects of turbulence.) (b) Discuss whether this force is great enough to be effective for propelling a sailboat.
:::

:::exercise {fs-id1909948} type=problems-exercises 
PROBLEM:
(a) What is the pressure drop due to the Bernoulli effect as water goes into a 3.00-cm-diameter nozzle from a 9.00-cm-diameter fire hose while carrying a flow of 40.0 L/s? (b) To what maximum height above the nozzle can this water rise? (The actual height will be significantly smaller due to air resistance.)
SOLUTION:
(a) $1\text{.}\text{58}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$
(b) 163 m
:::

:::exercise {fs-id3091422} type=problems-exercises 
PROBLEM:
(a) Using Bernoulli’s equation, show that the measured fluid speed $v$ for a pitot tube, like the one in [ref:import-auto-id2598838](b), is given by $v={(\frac{2ρ'gh}{ρ})}^{1/2},$ where $h$ is the height of the manometer fluid,  $ρ'$ is the density of the manometer fluid, $ρ$ is the density of the moving fluid, and *$g$* is the acceleration due to gravity. (Note that *$v$* is indeed proportional to the square root of *$h$*, as stated in the text.) (b) Calculate *$v$* for moving air if a mercury manometer’s *$h$* is 0.200 m.
:::

## Glossary
- {def} **Bernoulli’s equation**: the equation resulting from applying conservation of energy to an incompressible frictionless fluid: *P* + 1/2*pv*<sup>2</sup> + *pgh* = constant , through the fluid
- {def} **Bernoulli’s principle**: Bernoulli’s equation applied at constant depth: *P*<sub>1</sub> + 1/2*pv*<sub>1</sub><sup>2</sup> = *P*<sub>2</sub> + 1/2*pv*<sub>2</sub><sup>2</sup>

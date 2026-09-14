# Variation of Pressure with Depth in a Fluid

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define pressure in terms of weight.
- Explain the variation of pressure with depth in a fluid.
- Calculate density given pressure and altitude.
If your ears have ever popped on a plane flight or ached during a deep dive in a swimming pool, you have experienced the effect of depth on pressure in a fluid. At the Earth’s surface, the air pressure exerted on you is a result of the weight of air above you. This pressure is reduced as you climb up in altitude and the weight of air above you decreases. Under water, the pressure exerted on you increases with increasing depth. In this case, the pressure being exerted upon you is a result of both the weight of water above you *and* that of the atmosphere above you. You may notice an air pressure change on an elevator ride that transports you many stories, but you need only dive a meter or so below the surface of a pool to feel a pressure increase. The difference is that water is much denser than air, about 775 times as dense.
Consider the container in [ref:import-auto-id3190423]. Its bottom supports the weight of the fluid in it. Let us calculate the pressure exerted on the bottom by the weight of the fluid. That {term:pressure} is the weight of the fluid $\text{mg}$ divided by the area $A$ supporting it (the area of the bottom of the container):

$$ P=\frac{\text{mg}}{A}. $$  {eq:eip-764}

We can find the mass of the fluid from its volume and density:

$$ m=ρV. $$  {eq:eip-675}

The volume of the fluid $V$ is related to the dimensions of the container. It is

$$ V=\text{Ah}, $$  {eq:eip-958}

where $A$ is the cross-sectional area and $h$ is the depth. Combining the last two equations gives

$$ m=ρ\text{Ah}. $$  {eq:eip-476}

If we enter this into the expression for pressure, we obtain

$$ P=\frac{(ρ\text{Ah})g}{A}. $$  {eq:eip-58}

The area cancels, and rearranging the variables yields

$$ P=hρg. $$  {eq:eip-232}

This value is the *pressure due to the weight of a fluid*. The equation has general validity beyond the special conditions under which it is derived here. Even if the container were not there, the surrounding fluid would still exert this pressure, keeping the fluid static. Thus the equation $P=hρg$ represents the pressure due to the weight of any fluid of *average density* $ρ$ at any depth $h$ below its surface. For liquids, which are nearly incompressible, this equation holds to great depths. For gases, which are quite compressible, one can apply this equation as long as the density changes are small over the depth considered. [ref:fs-id1859777] illustrates this situation.

> FIGURE {fig:import-auto-id3190423} src=../../media/Figure_12_04_01a.jpg
> alt: A container with fluid filled to a depth h. The fluid’s weight w equal to m times g is shown by an arrow pointing downward. A denotes the area of the fluid at the bottom of the container and as well as on the surface.
> width: 225
> caption: The bottom of this container supports the entire weight of the fluid in it. The vertical sides cannot exert an upward force on the fluid (since it cannot withstand a shearing force), and so the bottom must support it all.

:::example {ex:fs-id3077916} Calculating the Average Pressure and Force Exerted: What Force Must a Dam Withstand?
In [ref:fs-id2449267](module:m42187), we calculated the mass of water in a large reservoir. We will now consider the pressure and force acting on the dam retaining water. (See [ref:import-auto-id1421128].) The dam is 500 m wide, and the water is 80.0 m deep at the dam. (a) What is the average pressure on the dam due to the water? (b) Calculate the force exerted against the dam and compare it with the weight of water in the dam (previously found to be $1.96\times {10}^{13}\;\text{N}$).
**Strategy for (a)**
The average pressure $\bar{P}$ due to the weight of the water is the pressure at the average depth $\bar{h}$ of 40.0 m, since pressure increases linearly with depth.
**Solution for (a)**
The average pressure due to the weight of a fluid is

$$ \bar{P}=\bar{h}ρg. $$  {eq:eip-260}

Entering the density of water from [ref:fs-id1769034](module:m42187) and taking $\bar{h}$ to be the average depth of 40.0 m, we obtain

$$ \begin{array}{lll}\bar{P} & = & (\text{40.0 m})({\text{10}}^{3}\;\frac{\text{kg}}{{\text{m}}^{3}})(9.80\;\frac{\text{m}}{{\text{s}}^{2}}) \\ & = & 3.92\times {\text{10}}^{5}\;\frac{\text{N}}{{\text{m}}^{2}}=\text{392 kPa.}\end{array} $$  {eq:eip-346}

**Strategy for (b)**
The force exerted on the dam by the water is the average pressure times the area of contact:

$$ F=\bar{P}A. $$  {eq:eip-49}

**Solution for (b)**
We have already found the value for $\bar{P}$. The area of the dam is $A=\text{80.0 m}\times \text{500 m}=4.00\times {\text{10}}^{4}\;{\text{m}}^{2}$, so that

$$ \begin{array}{lll}F & = & (3.92\times {\text{10}}^{5}\;{\text{N/m}}^{2})(4.00\times {\text{10}}^{4}\;{\text{m}}^{2}) \\ & = & 1.57\times {\text{10}}^{\text{10}}\;\text{N.}\end{array} $$  {eq:eip-208}

**Discussion**
Although this force seems large, it is small compared with the $1.96\times {\text{10}}^{\text{13}}\;\text{N}$ weight of the water in the reservoir—in fact, it is only  $0.0800%$ of the weight. Note that the pressure found in part (a) is completely independent of the width and length of the lake—it depends only on its average depth at the dam. Thus the force depends only on the water’s average depth and the dimensions of the dam, *not* on the horizontal extent of the reservoir. In the diagram, the thickness of the dam increases with depth to balance the increasing force due to the increasing pressure.
:::

> FIGURE {fig:import-auto-id1421128} src=../../media/Figure_12_04_02a-dacf.jpg
> alt: A two-dimensional view of a dam with dimensions L and h is shown. Force F at h is shown by a horizontal arrow. The force F exerted by water on the dam is F equals average pressure p bar into area A and pressure in turn is average height h bar into density rho into acceleration due to gravity g.
> caption: The dam must withstand the force exerted against it by the water it retains. This force is small compared with the weight of the water behind the dam.

*Atmospheric pressure* is another example of pressure due to the weight of a fluid, in this case due to the weight of *air* above a given height. The atmospheric pressure at the Earth’s surface varies a little due to the large-scale flow of the atmosphere induced by the Earth’s rotation (this creates weather “highs” and “lows”).  However, the average pressure at sea level is given by the *standard atmospheric pressure* ${P}_{\text{atm}}$, measured to be

$$ \text{1 atmosphere (atm)}={P}_{\text{atm}}=1.01\times {\text{10}}^{5}\;{\text{N/m}}^{2}=\text{101 kPa}. $$  {eq:eip-820}

This relationship means that, on average, at sea level, a column of air above $1.00\;{\text{m}}^{2}$ of the Earth’s surface has a weight of $1.01\times {\text{10}}^{5}\;\text{N}$, equivalent to $\text{1 atm}$. (See [ref:import-auto-id2963597].)

> FIGURE {fig:import-auto-id2963597} src=../../media/Figure_12_04_03a.jpg
> alt: Figure shows a column of air exerting a weight of one point zero one times ten to the power five newtons on a rectangular patch of ground of one square meter cross section.
> width: 250
> caption: Atmospheric pressure at sea level averages $1\text{.}\text{01}\times {\text{10}}^{5}\;\text{Pa}$ (equivalent to 1 atm), since the column of air over this $1\;{\text{m}}^{2}$, extending to the top of the atmosphere, weighs $1\text{.}\text{01}\times {\text{10}}^{5}\;\text{N}$.

:::example {ex:fs-id1859777} Calculating Average Density: How Dense Is the Air?
Calculate the average density of the atmosphere, given that it extends to an altitude of 120 km. Compare this density with that of air listed in [ref:fs-id1769034](module:m42187).
**Strategy**
If we solve $P=hρg$ for density, we see that

$$ \bar{ρ}=\frac{P}{\text{hg}}. $$  {eq:eip-302}

We then take $P$ to be atmospheric pressure, $h$ is given, and $g$ is known, and so we can use this to calculate $\bar{ρ}$.
**Solution**
Entering known values into the expression for $\bar{ρ}$ yields

$$ \bar{ρ}=\frac{1\text{.}\text{01}\times {\text{10}}^{5}\;{\text{N/m}}^{2}}{(\text{120}\times {\text{10}}^{3}\;\text{m})(9\text{.}\text{80}\;{\text{m/s}}^{2})}=8\text{.}\text{59}\times {\text{10}}^{-2}\;{\text{kg/m}}^{3}. $$  {eq:eip-566}

**Discussion**
This result is the average density of air between the Earth’s surface and the top of the Earth’s atmosphere, which essentially ends at 120 km. The density of air at sea level is given in [ref:fs-id1769034](module:m42187) as $1\text{.}\text{29}\;{\text{kg/m}}^{3}$ —about 15 times its average value. Because air is so compressible, its density has its highest value near the Earth’s surface and declines rapidly with altitude.
:::

:::example {ex:fs-id2937185} Calculating Depth Below the Surface of Water: What Depth of Water Creates the Same Pressure as the Entire Atmosphere?
Calculate the depth below the surface of water at which the pressure due to the weight of the water equals 1.00 atm.
**Strategy**
We begin by solving the equation $P=hρg$ for depth $h$:

$$ h=\frac{P}{ρg}. $$  {eq:eip-319}

Then we take $P$ to be 1.00 atm and $ρ$ to be the density of the water that creates the pressure.
**Solution**
Entering the known values into the expression for $h$ gives

$$ h=\frac{1\text{.}\text{01}\times {\text{10}}^{5}\;{\text{N/m}}^{2}}{(1\text{.}\text{00}\times {\text{10}}^{3}\;{\text{kg/m}}^{3})(9\text{.}\text{80}\;{\text{m/s}}^{2})}=\text{10}\text{.}3\;\text{m}. $$  {eq:eip-169}

**Discussion**
Just 10.3 m of water creates the same pressure as 120 km of air. Since water is nearly incompressible, we can neglect any change in its density over this depth.
:::
What do you suppose is the *total* pressure at a depth of 10.3 m in a swimming pool? Does the atmospheric pressure on the water’s surface affect the pressure below? The answer is yes. This seems only logical, since both the water’s weight and the atmosphere’s weight must be supported. So the *total* pressure at a depth of 10.3 m is 2 atm—half from the water above and half from the air above. We shall see in [Pascal’s Principle](module:m42193) that fluid pressures always add in this way.

## Section Summary {section:section-summary}
- Pressure is the weight of the fluid $\text{mg}$ divided by the area $A$ supporting it (the area of the bottom of the container):
    

$$ P=\frac{\text{mg}}{A}. $$  {eq:eip-998}

- Pressure due to the weight of a liquid is given by
    

$$ P=hρg, $$  {eq:eip-992}

where $P$ is the pressure, $h$ is the height of the liquid, $ρ$ is the density of the liquid, and $g$ is the acceleration due to gravity.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3073220} type=conceptual-questions 
PROBLEM:
Atmospheric pressure exerts a large force (equal to the weight of the atmosphere above your body—about 10 tons) on the top of your body when you are lying on the beach sunbathing. Why are you able to get up?
:::

:::exercise {fs-id2598964} type=conceptual-questions 
PROBLEM:
Why does atmospheric pressure decrease more rapidly than linearly with altitude?
:::

:::exercise {fs-id3045581} type=conceptual-questions 
PROBLEM:
What are two reasons why mercury rather than water is used in barometers?
:::

:::exercise {fs-id1381740} type=conceptual-questions 
PROBLEM:
[ref:import-auto-id1195914] shows how sandbags placed around a leak outside a river levee can effectively stop the flow of water under the levee. Explain how the small amount of water inside the column formed by the sandbags is able to balance the much larger body of water behind the levee.

> FIGURE {fig:import-auto-id1195914} src=../../media/Figure_12_04_04a.jpg
> alt: The figure shows a flooding river on the extreme right, with a levee set up on its left, and sandbags are stacked on the left of the levee. The height of the levee and that of the stacked sandbags is greater than the water level of the flooding river, so the water does not flow over their tops, but a leak under the levee allows some water to flow under it and reach the sandbags.
> width: 300
> caption: Because the river level is very high, it has started to leak under the levee. Sandbags are placed around the leak, and the water held by them rises until it is the same level as the river, at which point the water there stops rising.

:::

:::exercise {fs-id1868222} type=conceptual-questions 
PROBLEM:
Why is it difficult to swim under water in the Great Salt Lake?
:::

:::exercise {eip-29} type=conceptual-questions 
PROBLEM:
Is there a net force on a dam due to atmospheric pressure? Explain your answer.
:::

:::exercise {fs-id3042305} type=conceptual-questions 
PROBLEM:
Does atmospheric pressure add to the gas pressure in a rigid tank? In a toy balloon? When, in general, does atmospheric pressure *not* affect the total pressure in a fluid?
:::

:::exercise {fs-id1355852} type=conceptual-questions 
PROBLEM:
You can break a strong wine bottle by pounding a cork into it with your fist, but the cork must press directly against the liquid filling the bottle—there can be no air between the cork and liquid. Explain why the bottle breaks, and why it will not if there is air between the cork and liquid.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id3210042} type=problems-exercises 
PROBLEM:
What depth of mercury creates a pressure of 1.00 atm?
SOLUTION:
0.760 m
:::

:::exercise {fs-id3358416} type=problems-exercises 
PROBLEM:
The greatest ocean depths on the Earth are found in the Marianas Trench near the Philippines. Calculate the pressure due to the ocean at the bottom of this trench, given its depth is 11.0 km and assuming the density of seawater is constant all the way down.
:::

:::exercise {fs-id1844231} type=problems-exercises 
PROBLEM:
Verify that the SI unit of $hρg$ is ${\text{N/m}}^{2}$.
SOLUTION:

$$ \begin{array}{lll}{(hρg)}_{\text{units}} & = & (\text{m})({\text{kg/m}}^{3})({\text{m/s}}^{2})=(\text{kg}⋅{\text{m}}^{2})/({\text{m}}^{3}⋅{\text{s}}^{2}) \\ & = & (\text{kg}⋅{\text{m/s}}^{2})({\text{1/m}}^{2}) \\ & = & {\text{N/m}}^{2}\end{array} $$  {eq:eip-id2128366}

:::

:::exercise {fs-id1842837} type=problems-exercises 
PROBLEM:
Water towers store water above the level of consumers for times of heavy use, eliminating the need for high-speed pumps. How high above a user must the water level be to create a gauge pressure of $3\text{.}\text{00}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$?
:::

:::exercise {fs-id1931094} type=problems-exercises 
PROBLEM:
The aqueous humor in a person’s eye is exerting a force of 0.300 N on the $1\text{.}\text{10}{\text{-cm}}^{2}$ area of the cornea. (a) What pressure is this in mm Hg? (b) Is this value within the normal range for pressures in the eye?
SOLUTION:
(a) 20.5 mm Hg
(b) The range of pressures in the eye is 12–24 mm Hg, so the result in part (a) is within that range
:::

:::exercise {fs-id2611667} type=problems-exercises 
PROBLEM:
How much force is exerted on one side of an 8.50 cm by 11.0 cm sheet of paper by the atmosphere? How can the paper withstand such a force?
:::

:::exercise {fs-id2437095} type=problems-exercises 
PROBLEM:
What pressure is exerted on the bottom of a 0.500-m-wide by 0.900-m-long gas tank that can hold 50.0 kg of gasoline by the weight of the gasoline in it when it is full?
SOLUTION:
$1\text{.}\text{09}\times {\text{10}}^{3}\;{\text{N/m}}^{2}$
:::

:::exercise {fs-id1917152} type=problems-exercises 
PROBLEM:
Calculate the average pressure exerted on the palm of a shot-putter’s hand by the shot if the area of contact is $\text{50}\text{.}0\;{\text{cm}}^{2}$ and he exerts a force of 800 N on it. Express the pressure in ${\text{N/m}}^{2}$ and compare it with the $1\text{.}\text{00}\times {\text{10}}^{6}\;\text{Pa}$ pressures sometimes encountered in the skeletal system.
:::

:::exercise {fs-id1946824} type=problems-exercises 
PROBLEM:
The left side of the heart creates a pressure of 120 mm Hg by exerting a force directly on the blood over an effective area of $\text{15}\text{.}0\;{\text{cm}}^{2}.$ What force does it exert to accomplish this?
SOLUTION:
24.0 N
:::

:::exercise {fs-id3357018} type=problems-exercises 
PROBLEM:
Show that the total force on a rectangular dam due to the water behind it increases with the *square* of the water depth. In particular, show that this force is given by $F=ρ{gh}^{2}L/2$, where $ρ$ is the density of water, $h$ is its depth at the dam, and $L$ is the length of the dam. You may assume the face of the dam is vertical. (Hint: Calculate the average pressure exerted and multiply this by the area in contact with the water. (See [ref:import-auto-id2629485].)

> FIGURE {fig:import-auto-id2629485} src=../../media/Figure_12_04_02a-dacf.jpg
> alt: A two-dimensional view of a dam with dimensions L and h is shown. Force F at h is shown by a horizontal arrow. The force F exerted by water on the dam is F equals average pressure p bar into area A and pressure in turn is average height h bar into density rho into acceleration due to gravity g.
> caption: 

:::

## Glossary
- {def} **pressure**: the weight of the fluid divided by the area supporting it

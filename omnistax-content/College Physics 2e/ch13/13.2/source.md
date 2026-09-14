# Thermal Expansion of Solids and Liquids

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define and describe thermal expansion.
- Calculate the linear expansion of an object given its initial length, change in temperature, and coefficient of linear expansion.
- Calculate the volume expansion of an object given its initial volume, change in temperature, and coefficient of volume expansion.
- Calculate thermal stress on an object given its original volume, temperature change, volume change, and bulk modulus.

> FIGURE {fig:import-auto-id2186444} src=../../media/Figure_14_02_01.jpg
> alt: A close-up view of a metal bridge expansion joint with interlocking finger plates embedded in an asphalt road, featuring a white line in the background.
> width: 200
> caption: Thermal expansion joints like these in the Auckland Harbour Bridge in New Zealand allow bridges to change length without buckling. (credit: Ingolfson, Wikimedia Commons)

The expansion of alcohol in a thermometer is one of many commonly encountered examples of {term:thermal expansion}, the change in size or volume of a given mass with temperature. Hot air rises because air expands when its temperature increases, which causes the hot air’s density to be smaller than the density of surrounding air. As a result, the buoyant (upward) force on a given mass of air increases when the air is heated, resulting in a net upward force on that air mass. The same happens in all liquids and gases, driving natural heat transfer upwards in homes, oceans, and weather systems. Solids also undergo thermal expansion. Railroad tracks and bridges, for example, have expansion joints to allow them to freely expand and contract with temperature changes.
What are the basic properties of thermal expansion? First, thermal expansion is clearly related to temperature change. The greater the temperature change, the more a bimetallic strip will bend. Second, it depends on the material. In a thermometer, for example, the expansion of alcohol is much greater than the expansion of the glass containing it.
What is the underlying cause of thermal expansion? As is discussed in [Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature](module:m42217), an increase in temperature implies an increase in the kinetic energy of the individual atoms. In a solid, unlike in a gas, the atoms or molecules are closely packed together, but their kinetic energy (in the form of small, rapid vibrations) pushes neighboring atoms or molecules apart from each other. This neighbor-to-neighbor pushing results in a slightly greater distance, on average, between neighbors, and adds up to a larger size for the whole body. For most substances under ordinary conditions, there is no preferred direction, and an increase in temperature will increase the solid’s size by a certain fraction in each dimension.

:::note [] Linear Thermal Expansion—Thermal Expansion in One Dimension

The change in length $\text{Δ}L$ is proportional to length $L$. The dependence of thermal expansion on temperature, substance, and length is summarized in the equation

$$ \text{Δ}L=αL\text{Δ}T, $$  {eq:eip-695}

where $\text{Δ}L$ is the change in length $L$, $\text{Δ}T$ is the change in temperature, and *$\alpha$* is the {term:coefficient of linear expansion}, which varies slightly with temperature.
:::
[ref:import-auto-id1814176] lists representative values of the coefficient of linear expansion, which may have units of $1/\text{º}\text{C}$ or 1/K. Because the size of a kelvin and a degree Celsius are the same, both *$\alpha$* and $\text{Δ}T$ can be expressed in units of kelvins or degrees Celsius. The equation $\text{Δ}L=αL\text{Δ}T$ is accurate for small changes in temperature and can be used for large changes in temperature if an average value of *$\alpha$* is used.

> TABLE {tab:import-auto-id1814176} cols=3 irregular
> title: Thermal Expansion Coefficients at $\text{20}\text{º}\text{C}$**^[Values for liquids and gases are approximate.]**
> summary: Three-column table gives the thermal expansion coefficients of various solids, liquids, and gases at twenty degrees Celsius. The left column gives the names of the materials; the middle column gives the coefficient of linear expansion of various solids; and the right column gives the coefficient of volume expansion of solids, liquids, and gases.

| Material | Coefficient of linear expansion $\alpha (1/\text{º}\text{C})$ | Coefficient of volume expansion $β(1/\text{º}\text{C})$ |
| {span=3} *Solids* |
| Aluminum | $\text{25}\times {\text{10}}^{–6}$ | $\text{75}\times {\text{10}}^{–6}$ |
| Brass | $\text{19}\times {\text{10}}^{–6}$ | $\text{56}\times {\text{10}}^{–6}$ |
| Copper | $\text{17}\times {\text{10}}^{–6}$ | $\text{51}\times {\text{10}}^{–6}$ |
| Gold | $\text{14}\times {\text{10}}^{–6}$ | $\text{42}\times {\text{10}}^{–6}$ |
| Iron or Steel | $\text{12}\times {\text{10}}^{–6}$ | $\text{35}\times {\text{10}}^{–6}$ |
| Invar (Nickel-iron alloy) | $0\text{.}9\times {\text{10}}^{–6}$ | $2\text{.}7\times {\text{10}}^{–6}$ |
| Lead | $\text{29}\times {\text{10}}^{–6}$ | $\text{87}\times {\text{10}}^{–6}$ |
| Silver | $\text{18}\times {\text{10}}^{–6}$ | $\text{54}\times {\text{10}}^{–6}$ |
| Glass (ordinary) | $9\times {\text{10}}^{–6}$ | $\text{27}\times {\text{10}}^{–6}$ |
| Glass (Pyrex®) | $3\times {\text{10}}^{–6}$ | $9\times {\text{10}}^{–6}$ |
| Quartz | $0\text{.}4\times {\text{10}}^{–6}$ | $1\times {\text{10}}^{–6}$ |
| Concrete, Brick (approximate) | $\text{12}\times {\text{10}}^{–6}$ | $\text{36}\times {\text{10}}^{–6}$ |
| Marble (average) | $7\times {\text{10}}^{–6}$ | $2\text{.}1\times {\text{10}}^{–5}$ |
| {span=3} *Liquids* |
| Ether |  | $\text{1650}\times {\text{10}}^{–6}$ |
| Ethyl alcohol |  | $\text{1100}\times {\text{10}}^{–6}$ |
| Petrol |  | $\text{950}\times {\text{10}}^{–6}$ |
| Glycerin |  | $\text{500}\times {\text{10}}^{–6}$ |
| Mercury |  | $\text{180}\times {\text{10}}^{–6}$ |
| Water |  | $\text{210}\times {\text{10}}^{–6}$ |
| {span=3} *Gases* |
| Air and most other gases at atmospheric pressure |  | $\text{3400}\times {\text{10}}^{–6}$ |

:::example {ex:eip-365} Calculating Linear Thermal Expansion: The Golden Gate Bridge
The main span of San Francisco’s Golden Gate Bridge is 1275 m long at its coldest. The bridge is exposed to temperatures ranging from $–\text{15}\text{º}\text{C}$ to $\text{40}\text{º}\text{C}$. What is its change in length between these temperatures? Assume that the bridge is made entirely of steel.
**Strategy**
Use the equation for linear thermal expansion $\text{Δ}L=αL\text{Δ}T$ to calculate the change in length , $\text{Δ}L$. Use the coefficient of linear expansion, $\alpha$, for steel from [ref:import-auto-id1814176], and note that the change in temperature, $\text{Δ}T$, is $\text{55}\text{º}\text{C}$.
**Solution**
Plug all of the known values into the equation to solve for $\text{Δ}L$.

$$ \text{Δ}L=αL\text{Δ}T=(\frac{\text{12}\times {\text{10}}^{-6}}{\text{º}\text{C}})(\text{1275 m})(\text{55}\text{º}\text{C})=0\text{.}\text{84 m.} $$  {eq:eip-520}

**Discussion**
Although not large compared with the length of the bridge, this change in length is observable. It is generally spread over many expansion joints so that the expansion at each joint is small.
:::

## Thermal Expansion in Two and Three Dimensions
Objects expand in all dimensions, as illustrated in [ref:import-auto-id1551847]. That is, their areas and volumes, as well as their lengths, increase with temperature. Holes also get larger with temperature. If you cut a hole in a metal plate, the remaining material will expand exactly as it would if the plug was still in place. The plug would get bigger, and so the hole must get bigger too. (Think of the ring of neighboring atoms or molecules on the wall of the hole as pushing each other farther apart as temperature increases. Obviously, the ring of neighbors must get slightly larger, so the hole gets slightly larger).

:::note [] Thermal Expansion in Two Dimensions

For small temperature changes, the change in area $\text{Δ}A$ is given by

$$ \text{Δ}A=2αA\text{Δ}T, $$  {eq:eip-671}

where $\text{Δ}A$ is the change in area $A$, $\text{Δ}T$ is the change in temperature, and $\alpha$ is the coefficient of linear expansion, which varies slightly with temperature.
:::

> FIGURE {fig:import-auto-id1551847} src=../../media/Figure_14_02_02.jpg
> alt: Part a shows the outline of a flat metal plate before and after expansion. After expansion, it has the same shape and ratio of dimensions as before, but it takes up a greater area. Part b shows the outline of a flat metal plate with a hole in it, before and after expansion. The hole expands. Part c shows the outline of a rectangular box before and after expansion. After expansion, the box has the same proportions as before expansion, but it has a greater volume.
> width: 450
> caption: In general, objects expand in all directions as temperature increases. In these drawings, the original boundaries of the objects are shown with solid lines, and the expanded boundaries with dashed lines. (a) Area increases because both length and width increase. The area of a circular plug also increases. (b) If the plug is removed, the hole it leaves becomes larger with increasing temperature, just as if the expanding plug were still in place. (c) Volume also increases, because all three dimensions increase.

:::note [] Thermal Expansion in Three Dimensions

The change in volume $\text{Δ}V$ is very nearly $\text{Δ}V=3\alpha V\text{Δ}T$. This equation is usually written as

$$ \text{Δ}V=βV\text{Δ}T\text{,} $$  {eq:eip-393}

where *$β$* is the {term:coefficient of volume expansion} and $β\approx 3α$. Note that the values of *$β$* in [ref:import-auto-id1814176] are almost exactly equal to $3α$.
:::
In general, objects will expand with increasing temperature. Water is the most important exception to this rule. Water expands with increasing temperature (its density *decreases*) when it is at temperatures greater than $4\text{º}\text{C}(\text{40}\text{º}\text{F})$. However, it expands with *decreasing* temperature when it is between $+4\text{º}\text{C}$ and $0\text{º}\text{C}$ $(\text{40}\text{º}\text{F}$ to $\text{32}\text{º}\text{F})$. Water is densest at $+4\text{º}\text{C}$. (See [ref:import-auto-id2298254].) Perhaps the most striking effect of this phenomenon is the freezing of water in a pond. When water near the surface cools down to $4\text{º}\text{C}$ it is denser than the remaining water and thus will sink to the bottom. This “turnover” results in a layer of warmer water near the surface, which is then cooled. Eventually the pond has a uniform temperature of $4\text{º}\text{C}$. If the temperature in the surface layer drops below $4\text{º}\text{C}$, the water is less dense than the water below, and thus stays near the top. As a result, the pond surface can completely freeze over. The ice on top of liquid water provides an insulating layer from winter’s harsh exterior air temperatures. Fish and other aquatic life can survive in $4\text{º}\text{C}$ water beneath ice, due to this unusual characteristic of water. It also produces circulation of water in the pond that is necessary for a healthy ecosystem of the body of water.

> FIGURE {fig:import-auto-id2298254} src=../../media/Figure_14_02_03.jpg
> alt: A graph of density of freshwater in grams per cubic centimeter versus temperature in degrees Celsius. The line is convex up. At zero degrees C, the density is just under zero point nine nine nine five grams per cubic centimeter. The density then increases at a decreasing rate until it hits a peak of about zero point nine nine nine nine seven grams per cubic centimeter at about four degrees C. Above four degrees C, the density decreases with increasing temperature.
> width: 400
> caption: The density of water as a function of temperature. Note that the thermal expansion is actually very small. The maximum density at $+4\text{º}\text{C}$ is only *0.0075%* greater than the density at $2\text{º}\text{C}$, and *0.012%* greater than that at $0\text{º}\text{C}$.

:::note [] Making Connections: Real-World Connections—Filling the Tank

Differences in the thermal expansion of materials can lead to interesting effects at the gas station. One example is the dripping of gasoline from a freshly filled tank on a hot day. Gasoline starts out at the temperature of the ground under the gas station, which is cooler than the air temperature above. The gasoline cools the steel tank when it is filled. Both gasoline and steel tank expand as they warm to air temperature, but gasoline expands much more than steel, and so it may overflow.
This difference in expansion can also cause problems when interpreting the gasoline gauge. The actual amount (mass) of gasoline left in the tank when the gauge hits “empty” is a lot less in the summer than in the winter. The gasoline has the same volume as it does in the winter when the “add fuel” light goes on, but because the gasoline has expanded, there is less mass. If you are used to getting another 40 miles on “empty” in the winter, beware—you may only get 38 miles in the summer.

> FIGURE {fig:import-auto-id1335014} src=../../media/Figure_14_02_03a.jpg
> alt: Fuel gauge pointing to empty.
> width: 250
> caption: Because the gas expands more than the gas tank with increasing temperature, you can’t drive as many miles on “empty” in the summer as you can in the winter. (credit: Hector Alejandro, Flickr)

:::

:::example {ex:fs-id2168201} Calculating Thermal Expansion: Gas vs. Gas Tank
Suppose your 60.0-L (15.9-gal) steel gasoline tank is full of gas, so both the tank and the gasoline have a temperature of $\text{15}\text{.}0\text{º}\text{C}$. How much gasoline has spilled by the time they warm to $\text{35}\text{.}0\text{º}\text{C}$?
**Strategy**
The tank and gasoline increase in volume, but the gasoline increases more, so the amount spilled is the difference in their volume changes. (The gasoline tank can be treated as solid steel.) We can use the equation for volume expansion to calculate the change in volume of the gasoline and of the tank.
**Solution**
1. Use the equation for volume expansion to calculate the increase in volume of the steel tank:

$$ {\text{Δ}V}_{\text{s}}={β}_{\text{s}}{V}_{\text{s}}\text{Δ}T. $$  {eq:eip-972}

2. The increase in volume of the gasoline is given by this equation:

$$ {\text{Δ}V}_{\text{gas}}={β}_{\text{gas}}{V}_{\text{gas}}\text{Δ}T. $$  {eq:eip-65}

3. Find the difference in volume to determine the amount spilled as

$$ {V}_{\text{spill}}={\text{Δ}V}_{\text{gas}}-{\text{Δ}V}_{\text{s}}. $$  {eq:eip-477}

Alternatively, we can combine these three equations into a single equation. (Note that the original volumes are equal.)

$$ \begin{array}{lll}{V}_{\text{spill}} & = & ({β}_{\text{gas}}-{β}_{\text{s}})V\text{Δ}T \\ & = & [(\text{950}-\text{35})\times {\text{10}}^{-6}/\text{º}\text{C}](\text{60}\text{.}0\;\text{L})(\text{20}\text{.}0\text{º}\text{C}) \\ & = & 1\text{.}\text{10}\;\text{L}.\end{array} $$  {eq:eip-400}

**Discussion**
This amount is significant, particularly for a 60.0-L tank. The effect is so striking because the gasoline and steel expand quickly. The rate of change in thermal properties is discussed in [Heat and Heat Transfer Methods](module:m42223).
If you try to cap the tank tightly to prevent overflow, you will find that it leaks anyway, either around the cap or by bursting the tank. Tightly constricting the expanding gas is equivalent to compressing it, and both liquids and solids resist being compressed with extremely large forces. To avoid rupturing rigid containers, these containers have air gaps, which allow them to expand and contract without stressing them.
:::

## Thermal Stress
{term:Thermal stress} is created by thermal expansion or contraction (see [Elasticity: Stress and Strain](module:m42081) for a discussion of stress and strain). Thermal stress can be destructive, such as when expanding gasoline ruptures a tank. It can also be useful: for example, when two parts are joined together by heating one in manufacturing, then slipping it over the other and allowing the combination to cool. Thermal stress can explain many phenomena, such as the weathering of rocks and pavement by the expansion of ice when it freezes.

:::example {ex:fs-id1798615} Calculating Thermal Stress: Gas Pressure
What pressure would be created in the gasoline tank considered in [ref:fs-id2168201], if the gasoline increases in temperature from $\text{15}\text{.}0\text{º}\text{C}$ to $\text{35}\text{.}0\text{º}\text{C}$ without being allowed to expand?  Assume that the bulk modulus $B$ for gasoline is $1\text{.}\text{00}\times {\text{10}}^{9}\;{\text{N/m}}^{2}$. (For more on bulk modulus, see [Elasticity: Stress and Strain](module:m42081).)
**Strategy**
To solve this problem, we must use the following equation, which relates a change in volume $\text{Δ}V$ to pressure:

$$ \text{Δ}V=\frac{1}{B}\frac{F}{A}{V}_{0}, $$  {eq:import-auto-id1432756}

where *$F/A$* is pressure, ${V}_{0}$ is the original volume, and $B$ is the bulk modulus of the material involved. We will use the amount spilled in [ref:fs-id2168201] as the change in volume, $\text{Δ}V$. To estimate the pressure when the gas is heated at a constant volume, we can calculate the change in volume that would occur if the gas were allowed to expand at a fixed pressure, and then calculate the additional pressure needed to reduce the volume to its original level.
**Solution**
1. Rearrange the equation for calculating pressure:

$$ P=\frac{F}{A}=\frac{\text{Δ}V}{{V}_{0}}B\text{.} $$  {eq:eip-222}

2. Insert the known values. The bulk modulus for gasoline is $B=1\text{.}\text{00}×{\text{10}}^{9}\;{\text{N/m}}^{2}$. In the previous example, the change in volume $\text{Δ}V=1\text{.}\text{10}\;\text{L}$ is the amount that would spill. Here, ${V}_{0}=\text{60}\text{.}0\;\text{L}$ is the original volume of the gasoline. Substituting these values into the equation, we obtain

$$ P=\frac{1\text{.}\text{10 L}}{\text{60}\text{.}\text{0 L}}(1\text{.}\text{00}\times {\text{10}}^{9}\;\text{Pa})=1\text{.}\text{83}\times {\text{10}}^{7}\;\text{Pa}\text{.} $$  {eq:eip-610}

**Discussion**
This pressure is about $\text{2500}\;{\text{lb/in}}^{2}$, *much* more than a gasoline tank can handle.
:::
Forces and pressures created by thermal stress are typically as great as that in the example above. Railroad tracks and roadways can buckle on hot days if they lack sufficient expansion joints. (See [ref:import-auto-id1961115].) Power lines sag more in the summer than in the winter, and will snap in cold weather if there is insufficient slack. Cracks open and close in plaster walls as a house warms and cools. Glass cooking pans will crack if cooled rapidly or unevenly, because of differential contraction and the stresses it creates. (Pyrex® is less susceptible because of its small coefficient of thermal expansion.) Nuclear reactor pressure vessels are threatened by overly rapid cooling, and although none have failed, several have been cooled faster than considered desirable. Biological cells are ruptured when foods are frozen, detracting from their taste. Repeated thawing and freezing accentuate the damage. Even the oceans can be affected. A significant portion of the rise in sea level that is resulting from global warming is due to the thermal expansion of sea water.

> FIGURE {fig:import-auto-id1961115} src=../../media/Figure_14_02_04.jpg
> alt: A cracked asphalt road with a pothole.
> width: 300
> caption: Thermal stress contributes to the formation of potholes. (credit: Editor5807, Wikimedia Commons)

Metal is regularly used in the human body for hip and knee implants. Most implants need to be replaced over time because, among other things, metal does not bond with bone. Researchers are trying to find better metal coatings that would allow metal-to-bone bonding. One challenge is to find a coating that has an expansion coefficient similar to that of metal. If the expansion coefficients are too different, the thermal stresses during the manufacturing process lead to cracks at the coating-metal interface.
Another example of thermal stress is found in the mouth. Dental fillings can expand differently from tooth enamel, causing pain when eating ice cream or having a hot drink. Cracks might occur in the filling. Metal fillings (gold, silver, etc.) are being replaced by composite fillings (porcelain), which have smaller coefficients of expansion closer to those of teeth.

:::exercise {eip-264} type=check-understanding Check Your Understanding

PROBLEM:
Two blocks, A and B, are made of the same material. Block A has dimensions $l\times w\times h=L\times 2L\times L$ and Block B has dimensions $2L\times 2L\times 2L$. If the temperature changes, what is (a) the change in ratio of the volumes (*V*<sub>B</sub>/*V*<sub>A</sub>) of the two blocks, (b) the change in the ratio of the cross-sectional areas ${l}_{\text{B}}\times {w}_{\text{B}}/{l}_{\text{A}}\times {w}_{\text{A}}$, and (c) the change in the ratio of the heights (hB/hA) ${h}_{\text{B}}/{h}_{\text{A}}$ of the two blocks?

> FIGURE {fig:import-auto-id1336636} src=../../media/Figure_14_02_04a.jpg
> alt: There are two rectangular blocks. Block A has its dimensions labeled length equals L, width equals two times L, height equals L. Block B has its dimensions labeled length, width, and height all equal to two times L.
> width: 450
> caption: 

SOLUTION:
(a) The change in volume is proportional to the original volume. Block A has a volume of $L\times 2L\times L={2L}^{3}\text{.}$<sup>.</sup> Block B has a volume of $2L\times 2L\times 2L={8L}^{3},$ which is 4 times that of Block A. Thus the change in volume of Block B should be 4 times the change in volume of Block A.
(b) The change in area is proportional to the area. The cross-sectional area of Block A is $L\times 2L={2L}^{2},$ while that of Block B is $2L\times 2L={4L}^{2}\text{.}$ Because cross-sectional area of Block B is twice that of Block A, the change in the cross-sectional area of Block B is twice that of Block A.
(c) The change in height is proportional to the original height. Because the original height of Block B is twice that of A, the change in the height of Block B is twice that of Block A.
:::

## Section Summary {section:section-summary}
- Thermal expansion is the increase, or decrease, of the size (length, area, or volume) of a body due to a change in temperature.
- Thermal expansion is large for gases, and relatively small, but not negligible, for liquids and solids.
- Linear thermal expansion is
      

$$ \text{Δ}L=αL\text{Δ}T, $$  {eq:fs-id1406469}

where $\text{Δ}L$ is the change in length $L$, $\text{Δ}T$ is the change in temperature, and $\alpha$ is the coefficient of linear expansion, which varies slightly with temperature.
- The change in area due to thermal expansion is
      

$$ \text{Δ}A=2αA\text{Δ}T, $$  {eq:fs-id1479608}

where $\text{Δ}A$ is the change in area.
- The change in volume due to thermal expansion is
      

$$ \text{Δ}V=βV\text{Δ}T, $$  {eq:fs-id1561195}

where $β$ is the coefficient of volume expansion and $β\approx 3α$. Thermal stress is created when thermal expansion is constrained.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2182761} type=conceptual-questions 
PROBLEM:
Thermal stresses caused by uneven cooling can easily break glass cookware. Explain why Pyrex®, a glass with a small coefficient of linear expansion, is less susceptible.
:::

:::exercise {fs-id1806401} type=conceptual-questions 
PROBLEM:
Water expands significantly when it freezes: a volume increase of about 9% occurs. As a result of this expansion and because of the formation and growth of crystals as water freezes, anywhere from 10% to 30% of biological cells are burst when animal or plant material is frozen. Discuss the implications of this cell damage for the prospect of preserving human bodies by freezing so that they can be thawed at some future date when it is hoped that all diseases are curable.
:::

:::exercise {fs-id1803094} type=conceptual-questions 
PROBLEM:
One method of getting a tight fit, say of a metal peg in a hole in a metal block, is to manufacture the peg slightly larger than the hole. The peg is then inserted when at a different temperature than the block. Should the block be hotter or colder than the peg during insertion? Explain your answer.
:::

:::exercise {fs-id2233261} type=conceptual-questions 
PROBLEM:
Does it really help to run hot water over a tight metal lid on a glass jar before trying to open it? Explain your answer.
:::

:::exercise {fs-id1332028} type=conceptual-questions 
PROBLEM:
Liquids and solids expand with increasing temperature, because the kinetic energy of a body’s atoms and molecules increases. Explain why some materials *shrink* with increasing temperature.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1469982} type=problems-exercises 
PROBLEM:
The height of the Washington Monument is measured to be 170 m on a day when the temperature is $\text{35}\text{.}0\text{º}\text{C}$. What will its height be on a day when the temperature falls to $–\text{10}\text{.}0\text{º}\text{C}$? Although the monument is made of limestone, assume that its thermal coefficient of expansion is the same as marble’s.
SOLUTION:
169.98 m
:::

:::exercise {fs-id1806662} type=problems-exercises 
PROBLEM:
How much taller does the Eiffel Tower become at the end of a day when the temperature has increased by $\text{15}\text{º}\text{C}$? Its original height is 321 m and you can assume it is made of steel.
:::

:::exercise {fs-id1945010} type=problems-exercises 
PROBLEM:
What is the change in length of a 3.00-cm-long column of mercury if its temperature changes from $\text{37}\text{.}0\text{º}\text{C}$ to $\text{40}\text{.}0\text{º}\text{C}$, assuming the mercury is unconstrained?
SOLUTION:
$5\text{.}4\times {\text{10}}^{-6}\;\text{m}$
:::

:::exercise {fs-id2177180} type=problems-exercises 
PROBLEM:
How large an expansion gap should be left between steel railroad rails if they may reach a maximum temperature $\text{35}\text{.}0\text{º}\text{C}$ greater than when they were laid? Their original length is 10.0 m.
:::

:::exercise {fs-id1463358} type=problems-exercises 
PROBLEM:
You are looking to purchase a small piece of land in Hong Kong. The price is “only” $60,000 per square meter! The land title says the dimensions are $\text{20}\;\text{m}\;\times \;\text{30 m}\text{.}$ By how much would the total price change if you measured the parcel with a steel tape measure on a day when the temperature was $\text{20}\text{º}\text{C}$ above normal?
SOLUTION:
Because the area gets smaller, the price of the land DECREASES by $\text{~}$\text{17},\text{000}\text{.}$
:::

:::exercise {fs-id1961878} type=problems-exercises 
PROBLEM:
Global warming will produce rising sea levels partly due to melting ice caps but also due to the expansion of water as average ocean temperatures rise. To get some idea of the size of this effect, calculate the change in length of a column of water 1.00 km high for a temperature increase of $1\text{.}\text{00}\text{º}\text{C}\text{.}$ Note that this calculation is only approximate because ocean warming is not uniform with depth.
:::

:::exercise {fs-id1251302} type=problems-exercises 
PROBLEM:
Show that 60.0 L of gasoline originally at $\text{15}\text{.}0\text{º}\text{C}$ will expand to 61.1 L when it warms to $\text{35}\text{.}0\text{º}\text{C,}$ as claimed in [ref:fs-id2168201].
SOLUTION:

$$ \begin{array}{lll}V & = & {V}_{0}+\text{Δ}V={V}_{0}(1+β\text{Δ}T) \\ & = & (\text{60}\text{.}\text{00 L})[1+(\text{950}\times {\text{10}}^{-6}/\text{º}\text{C})(\text{35}\text{.}0\text{º}\text{C}-\text{15}\text{.}0\text{º}\text{C})] \\ & = & \text{61}\text{.}1\;\text{L}\end{array} $$  {eq:import-auto-id1319680}

:::

:::exercise {fs-id1803642} type=problems-exercises 
PROBLEM:
(a) Suppose a meter stick made of steel and one made of invar (an alloy of iron and nickel) are the same length at $0\text{º}\text{C}$. What is their difference in length at $\text{22}\text{.}0\text{º}\text{C}$? (b) Repeat the calculation for two 30.0-m-long surveyor’s tapes.
:::

:::exercise {fs-id2192379} type=problems-exercises 
PROBLEM:
(a) If a 500-mL glass beaker is filled to the brim with ethyl alcohol at a temperature of $5\text{.}\text{00}\text{º}\text{C,}$ how much will overflow when its temperature reaches $\text{22}\text{.}0\text{º}\text{C}$? (b) How much less water would overflow under the same conditions?
SOLUTION:
(a) 9.35 mL
(b) 7.56 mL
:::

:::exercise {fs-id1943516} type=problems-exercises 
PROBLEM:
Most automobiles have a coolant reservoir to catch radiator fluid that may overflow when the engine is hot. A radiator is made of copper and is filled to its 16.0-L capacity when at $\text{10}\text{.}0º\text{C}\text{.}$ What volume of radiator fluid will overflow when the radiator and fluid reach their $\text{95}\text{.}0º\text{C}$ operating temperature, given that the fluid’s volume coefficient of expansion is $β=\text{400}×{\text{10}}^{-6}/\text{º}\text{C}$? Note that this coefficient is approximate, because most car radiators have operating temperatures of greater than $\text{95}\text{.}0\text{º}\text{C}\text{.}$
:::

:::exercise {fs-id1378164} type=problems-exercises 
PROBLEM:
A physicist makes a cup of instant coffee and notices that, as the coffee cools, its level drops 3.00 mm in the glass cup. Show that this decrease cannot be due to thermal contraction by calculating the decrease in level if the $\text{350}\;{\text{cm}}^{3}$ of coffee is in a 7.00-cm-diameter cup and decreases in temperature from $\text{95}\text{.}0\text{º}\text{C}\;$to$\;\text{45}\text{.}0\text{º}\text{C}\text{.}$ (Most of the drop in level is actually due to escaping bubbles of air.)
SOLUTION:
0.832 mm
:::

:::exercise {fs-id1457239} type=problems-exercises 
PROBLEM:
(a) The density of water at $0\text{º}\text{C}$ is very nearly $\text{1000}\;{\text{kg/m}}^{3}$ (it is actually $9\text{99}\text{.}{\text{84 kg/m}}^{3}$), whereas the density of ice at $0\text{º}\text{C}$ is $9{\text{17 kg/m}}^{3}$. Calculate the pressure necessary to keep ice from expanding when it freezes, neglecting the effect such a large pressure would have on the freezing temperature. (This problem gives you only an indication of how large the forces associated with freezing water might be.) (b) What are the implications of this result for biological cells that are frozen?
:::

:::exercise {fs-id1565294} type=problems-exercises 
PROBLEM:
Show that $β\approx 3α,$ by calculating the change in volume $\text{Δ}V$ of a cube with sides of length $L\text{.}$
SOLUTION:
We know how the length changes with temperature: $\text{Δ}L={αL}_{0}\text{Δ}T$. Also we know that the volume of a cube is related to its length by $V={L}^{3}$, so the final volume is then $V={V}_{0}+\text{Δ}V={({L}_{0}+\text{Δ}L)}^{3}$. Substituting for $\text{Δ}L$ gives

$$ V={({L}_{0}+{αL}_{0}\text{Δ}T)}^{3}={L}_{0}^{3}{(1+\alpha \text{Δ}T)}^{3}\text{.} $$  {eq:import-auto-id1452336}

Now, because $\alpha \text{Δ}T$ is small, we can use the binomial expansion:

$$ V\approx {L}_{0}^{3}(1+3αΔT)={L}_{0}^{3}+3α{L}_{0}^{3}\text{Δ}T. $$  {eq:import-auto-id3785216}

So writing the length terms in terms of volumes gives $V={V}_{0}+\text{Δ}V\approx {V}_{0}+{3αV}_{0}\text{Δ}T,$ and so

$$ \text{Δ}V={βV}_{0}\text{Δ}T\approx {3αV}_{0}\text{Δ}T,\;\text{or}\;β\approx 3α. $$  {eq:import-auto-id1965368}

:::

## Glossary
- {def} **thermal expansion**: the change in size or volume of an object with change in temperature
- {def} **coefficient of linear expansion**: $\alpha$, the change in length, per unit length, per $1\text{º}\text{C}$ change in temperature; a constant used in the calculation of linear expansion; the coefficient of linear expansion depends on the material and to some degree on the temperature of the material
- {def} **coefficient of volume expansion**: $β$, the change in volume, per unit volume, per $1\text{º}\text{C}$ change in temperature
- {def} **thermal stress**: stress caused by thermal expansion or contraction

# Viscosity and Laminar Flow; Poiseuille’s Law

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define laminar flow and turbulent flow.
- Explain what viscosity is.
- Calculate flow and resistance with Poiseuille’s law.
- Explain how pressure drops due to resistance.

## Laminar Flow and Viscosity
When you pour yourself a glass of juice, the liquid flows freely and quickly. But when you pour syrup on your pancakes, that liquid flows slowly and sticks to the pitcher. The difference is fluid friction, both within the fluid itself and between the fluid and its surroundings. We call this property of fluids *viscosity*. Juice has low viscosity, whereas syrup has high viscosity. In the previous sections we have considered ideal fluids with little or no viscosity. In this section, we will investigate what factors, including viscosity, affect the rate of fluid flow.
The precise definition of viscosity is based on *laminar*, or nonturbulent, flow. Before we can define viscosity, then, we need to define laminar flow and turbulent flow. [ref:import-auto-id3356410] shows both types of flow. {term:Laminar} flow is characterized by the smooth flow of the fluid in layers that do not mix. Turbulent flow, or {term:turbulence}, is characterized by eddies and swirls that mix layers of fluid together.

> FIGURE {fig:import-auto-id3356410} src=../../media/Figure_13_04_01a.jpg
> alt: Photograph of smoke rising smoothly for a while and then beginning to form swirls and eddies.
> width: 200
> caption: Smoke rises smoothly for a while and then begins to form swirls and eddies. The smooth flow is called laminar flow, whereas the swirls and eddies typify turbulent flow. If you watch the smoke (being careful not to breathe on it), you will notice that it rises more rapidly when flowing smoothly than after it becomes turbulent, implying that turbulence poses more resistance to flow. (credit: Creativity103)

[ref:fs-id3007528] shows schematically how laminar and turbulent flow differ. Layers flow without mixing when flow is laminar. When there is turbulence, the layers mix, and there are significant velocities in directions other than the overall direction of flow. The lines that are shown in many illustrations are the paths followed by small volumes of fluids. These are called *streamlines*. Streamlines are smooth and continuous when flow is laminar, but break up and mix when flow is turbulent. Turbulence has two main causes. First, any obstruction or sharp corner, such as in a faucet, creates turbulence by imparting velocities perpendicular to the flow. Second, high speeds cause turbulence. The drag both between adjacent layers of fluid and between the fluid and its surroundings forms swirls and eddies, if the speed is great enough. We shall concentrate on laminar flow for the remainder of this section, leaving certain aspects of turbulence for later sections.

> FIGURE {fig:fs-id3007528} src=../../media/Figure_13_04_02a.jpg
> alt: Part a of the figure shows a laminar flow on a fixed smooth surface. The different layers of the liquid are shown as different colored bands along the horizontal surface. The friction is shown to act all along the line separating two layers. The direction of flow of the fluid is toward right and the velocity is shown as v b for layers at the bottom and v t for layers on top. Part b of the figure shows turbulent flow on a surface with some obstruction. The fluid directions are horizontal on smooth path and irregular near the area of the obstruction. The velocity is v on top as well as at the bottom of the fluid.
> width: 400
> caption: (a) Laminar flow occurs in layers without mixing. Notice that viscosity causes drag between layers as well as with the fixed surface. (b) An obstruction in the vessel produces turbulence. Turbulent flow mixes the fluid. There is more interaction, greater heating, and more resistance than in laminar flow.

:::note [] Making Connections: Take-Home Experiment: Go Down to the River

Try dropping simultaneously two sticks into a flowing river, one near the edge of the river and one near the middle. Which one travels faster? Why?
:::
[ref:import-auto-id1580837] shows how viscosity is measured for a fluid. Two parallel plates have the specific fluid between them. The bottom plate is held fixed, while the top plate is moved to the right, dragging fluid with it. The layer (or lamina) of fluid in contact with either plate does not move relative to the plate, and so the top layer moves at *$v$* while the bottom layer remains at rest. Each successive layer from the top down exerts a force on the one below it, trying to drag it along, producing a continuous variation in speed from *$v$* to 0 as shown. Care is taken to insure that the flow is laminar; that is, the layers do not mix. The motion in [ref:import-auto-id1580837] is like a continuous shearing motion. Fluids have zero shear strength, but the *rate* at which they are sheared is related to the same geometrical factors *$A$* and *$L$* as is shear deformation for solids.

> FIGURE {fig:import-auto-id1580837} src=../../media/Figure_13_04_03a.jpg
> alt: The figure shows the laminar flow of fluid between two rectangular plates each of area A. The bottom plate is shown as fixed. The distance between the plates is L. The top plate is shown to be pushed to right with a force F. The direction of movement of the layer of fluid in contact with the top plate is also toward right with velocity v. The fluid in contact with the plate in the bottom is shown to be in rest with v equals zero. As we see through the layers above the one on the bottom plate, each show a small displacement toward right in increasing order of value with the topmost layer showing the maximum.
> width: 300
> caption: The graphic shows laminar flow of fluid between two plates of area $A$. The bottom plate is fixed. When the top plate is pushed to the right, it drags the fluid along with it.

A force *$F$* is required to keep the top plate in [ref:import-auto-id1580837] moving at a constant velocity *$v$*, and experiments have shown that this force depends on four factors. First, *$F$* is directly proportional to *$v$* (until the speed is so high that turbulence occurs—then a much larger force is needed, and it has a more complicated dependence on *$v$*). Second, *$F$* is proportional to the area *$A$* of the plate. This relationship seems reasonable, since *$A$* is directly proportional to the amount of fluid being moved. Third, *$F$* is inversely proportional to the distance between the plates *$L$*. This relationship is also reasonable; *$L$* is like a lever arm, and the greater the lever arm, the less force that is needed. Fourth, *$F$* is directly proportional to *the coefficient of viscosity*, *$η$*. The greater the viscosity, the greater the force required. These dependencies are combined into the equation

$$ F=η\frac{\text{vA}}{L}\text{,} $$  {eq:import-auto-id2408773}

which gives us a working definition of fluid {term:viscosity}*****$η$*.**** Solving for *$η$* gives

$$ η=\frac{\text{FL}}{\text{vA}}\text{,} $$  {eq:import-auto-id2598252}

which defines viscosity in terms of how it is measured. The SI unit of viscosity is $\text{N}⋅\text{m/}[(\text{m/s}){\text{m}}^{2}]=({\text{N/m}}^{2})\text{s or Pa}⋅\text{s}$. [ref:import-auto-id3073392] lists the coefficients of viscosity for various fluids.
Viscosity varies from one fluid to another by several orders of magnitude. As you might expect, the viscosities of gases are much less than those of liquids, and these viscosities are often temperature dependent. The viscosity of blood can be reduced by aspirin consumption, allowing it to flow more easily around the body. (When used over the long term in low doses, aspirin can help prevent heart attacks, and reduce the risk of blood clotting.)

## Laminar Flow Confined to Tubes—Poiseuille’s Law
What causes flow? The answer, not surprisingly, is pressure difference. In fact, there is a very simple relationship between horizontal flow and pressure. Flow rate *$Q$* is in the direction from high to low pressure. The greater the pressure differential between two points, the greater the flow rate. This relationship can be stated as

$$ Q=\frac{{P}_{2}-{P}_{1}}{R}\text{,} $$  {eq:import-auto-id1514558}

where ${P}_{1}$ and ${P}_{2}$ are the pressures at two points, such as at either end of a tube, and *$R$* is the resistance to flow. The resistance *$R$* includes everything, except pressure, that affects flow rate. For example, *$R$* is greater for a long tube than for a short one. The greater the viscosity of a fluid, the greater the value of *$R$*. Turbulence greatly increases *$R$*, whereas increasing the diameter of a tube decreases *$R$*.
If viscosity is zero, the fluid is frictionless and the resistance to flow is also zero. Comparing frictionless flow in a tube to viscous flow, as in [ref:import-auto-id2578515], we see that for a viscous fluid, speed is greatest at midstream because of drag at the boundaries. We can see the effect of viscosity in a Bunsen burner flame, even though the viscosity of natural gas is small.
The resistance *$R$* to laminar flow of an incompressible fluid having viscosity *$η$* through a horizontal tube of uniform radius *$r$* and length *$l$*, such as the one in [ref:import-auto-id1462104], is given by

$$ R=\frac{8ηl}{\pi {r}^{4}}\text{.} $$  {eq:import-auto-id3068689}

This equation is called {term:Poiseuille’s law for resistance} after the French scientist J. L. Poiseuille (1799–1869), who derived it in an attempt to understand the flow of blood, an often turbulent fluid.

> FIGURE {fig:import-auto-id2578515} src=../../media/Figure_13_04_04a.jpg
> alt: Part a of the diagram shows a fluid flow across a rectangular non viscous medium. The speed of the fluid is shown to be same across the tube represented as same length of vertical rising arrows. Part b of the diagram shows a fluid flow across a rectangular viscous medium. The speed of the fluid speed at the walls is zero, increasing steadily to its maximum at the center of the tube represented as wave like variation for length of vertical rising arrows. Part c of the figure shows a burning Bunsen burner.
> width: 400
> caption: (a) If fluid flow in a tube has negligible resistance, the speed is the same all across the tube. (b) When a viscous fluid flows through a tube, its speed at the walls is zero, increasing steadily to its maximum at the center of the tube. (c) The shape of the Bunsen burner flame is due to the velocity profile across the tube. (credit: Jason Woodhead)

Let us examine Poiseuille’s expression for *$R$* to see if it makes good intuitive sense. We see that resistance is directly proportional to both fluid viscosity *$η$* and the length *$l$* of a tube. After all, both of these directly affect the amount of friction encountered—the greater either is, the greater the resistance and the smaller the flow. The radius *$r$* of a tube affects the resistance, which again makes sense, because the greater the radius, the greater the flow (all other factors remaining the same). But it is surprising that *$r$* is raised to the *fourth* power in Poiseuille’s law. This exponent means that any change in the radius of a tube has a very large effect on resistance. For example, doubling the radius of a tube decreases resistance by a factor of ${2}^{4}=\text{16}$.
Taken together, $Q=\frac{{P}_{2}-{P}_{1}}{R}$ and $R=\frac{8ηl}{\pi {r}^{4}}$ give the following expression for flow rate:

$$ Q=\frac{({P}_{2}-{P}_{1}){πr}^{4}}{8ηl}\text{.} $$  {eq:import-auto-id3012113}

This equation describes laminar flow through a tube. It is sometimes called Poiseuille’s law for laminar flow, or simply {term:Poiseuille’s law}.

:::example {ex:fs-id2993051} Using Flow Rate: Plaque Deposits Reduce Blood Flow
Suppose the flow rate of blood in a coronary artery has been reduced to half its normal value by plaque deposits. By what factor has the radius of the artery been reduced, assuming no turbulence occurs?
**Strategy**
Assuming laminar flow, Poiseuille’s law states that

$$ Q=\frac{({P}_{2}-{P}_{1}){πr}^{4}}{8ηl}\text{.} $$  {eq:fs-id1448448}

We need to compare the artery radius before and after the flow rate reduction.
**Solution**
With a constant pressure difference assumed and the same length and viscosity, along the artery we have

$$ \frac{{Q}_{1}}{{r}_{1}^{4}}=\frac{{Q}_{2}}{{r}_{2}^{4}}\text{.} $$  {eq:import-auto-id3036414}

So, given that ${Q}_{2}=0\text{.}\text{5}{Q}_{1}$, we find that ${r}_{2}^{4}=0\text{.}{5r}_{1}^{4}$.
Therefore, ${r}_{2}={(0\text{.}5)}^{0\text{.}\text{25}}{r}_{1}=0\text{.}\text{841}{r}_{1}$, a decrease in the artery radius of 16%.
**Discussion**
This decrease in radius is surprisingly small for this situation. To restore the blood flow in spite of this buildup would require an increase in the pressure difference $({P}_{2}-{P}_{1})$ of a factor of two, with subsequent strain on the heart.
:::

> TABLE {tab:import-auto-id3073392} cols=3 irregular
> title: Coefficients of Viscosity of Various Fluids
> summary: Coefficients of Viscosity of Various Fluids

| Fluid | Temperature (ºC) | Viscosity $η\;\text{(mPa·s)}$ |
| **Gases** |  |  |
| {rows=4} Air | 0 | 0.0171 |
| 20 | 0.0181 |
| 40 | 0.0190 |
| 100 | 0.0218 |
| Ammonia | 20 | 0.00974 |
| Carbon dioxide | 20 | 0.0147 |
| Helium | 20 | 0.0196 |
| Hydrogen | 0 | 0.0090 |
| Mercury | 20 | 0.0450 |
| Oxygen | 20 | 0.0203 |
| Steam | 100 | 0.0130 |
| **Liquids** |  |  |
| {rows=5} Water | 0 | 1.792 |
| 20 | 1.002 |
| 37 | 0.6947 |
| 40 | 0.653 |
| 100 | 0.282 |
| {rows=2} Whole blood^[The ratios of the viscosities of blood to water are nearly constant between 0°C and 37°C.] | 20 | 3.015 |
| 37 | 2.084 |
| {rows=2} Blood plasma^[See note on Whole Blood.] | 20 | 1.810 |
| 37 | 1.257 |
| Ethyl alcohol | 20 | 1.20 |
| Methanol | 20 | 0.584 |
| Oil (heavy machine) | 20 | 660 |
| Oil (motor, SAE 10) | 30 | 200 |
| Oil (olive) | 20 | 138 |
| Glycerin | 20 | 1500 |
| Honey | 20 | 2000–10000 |
| Maple Syrup | 20 | 2000–3000 |
| Milk | 20 | 3.0 |
| Oil (Corn) | 20 | 65 |

The circulatory system provides many examples of Poiseuille’s law in action—with blood flow regulated by changes in vessel size and blood pressure. Blood vessels are not rigid but elastic. Adjustments to blood flow are primarily made by varying the size of the vessels, since the resistance is so sensitive to the radius. During vigorous exercise, blood vessels are selectively dilated to important muscles and organs and blood pressure increases. This creates both greater overall blood flow and increased flow to specific areas. Conversely, decreases in vessel radii, perhaps from plaques in the arteries, can greatly reduce blood flow. If a vessel’s radius is reduced by only 5% (to 0.95 of its original value), the flow rate is reduced to about $(0\text{.}\text{95}{)}^{4}=0\text{.}\text{81}$ of its original value. A 19% decrease in flow is caused by a 5% decrease in radius. The body may compensate by increasing blood pressure by 19%, but this presents hazards to the heart and any vessel that has weakened walls. Another example comes from automobile engine oil. If you have a car with an oil pressure gauge, you may notice that oil pressure is high when the engine is cold. Motor oil has greater viscosity when cold than when warm, and so pressure must be greater to pump the same amount of cold oil.

> FIGURE {fig:import-auto-id1462104} src=../../media/Figure_13_04_05a.jpg
> alt: The figure shows a section of a cylindrical tube of length l. The two end cross section are shown to have pressure P two and P one respectively. The radius of the cylindrical tube is given by r. The direction of flow is shown by horizontal arrows toward right end of the tube. The flow rate is marked as Q.
> width: 313
> caption: Poiseuille’s law applies to laminar flow of an incompressible fluid of viscosity $η$ through a tube of length $l$ and radius $r$. The direction of flow is from greater to lower pressure. Flow rate $Q$ is directly proportional to the pressure difference ${P}_{2}-{P}_{1}$, and inversely proportional to the length $l$ of the tube and viscosity $η$ of the fluid. Flow rate increases with ${r}^{4}$, the fourth power of the radius.

:::example {ex:fs-id1969731} What Pressure Produces This Flow Rate?
An intravenous (IV) system is supplying saline solution to a patient at the rate of $0\text{.}\text{120}\;{\text{cm}}^{3}\text{/s}$ through a needle of radius 0.150 mm and length 2.50 cm. What pressure is needed at the entrance of the needle to cause this flow, assuming the viscosity of the saline solution to be the same as that of water? The gauge pressure of the blood in the patient’s vein is 8.00 mm Hg.  (Assume that the temperature is $\text{20ºC}$ .)
**Strategy**
Assuming laminar flow, Poiseuille’s law applies. This is given by

$$ Q=\frac{({P}_{2}-{P}_{1})\pi {r}^{4}}{8ηl}\text{,} $$  {eq:import-auto-id2953372}

where ${P}_{2}$ is the pressure at the entrance of the needle and ${P}_{1}$ is the pressure in the vein. The only unknown is ${P}_{2}$.
**Solution**
Solving for ${P}_{2}$ yields

$$ {P}_{2}=\frac{8ηl}{{πr}^{4}}Q+{P}_{1\text{.}} $$  {eq:import-auto-id2401979}

${P}_{1}$ is given as 8.00 mm Hg, which converts to $1\text{.}\text{066}\times {\text{10}}^{3}\;{\text{N/m}}^{2}$. Substituting this and the other known values yields

$$ \begin{array}{lll}{P}_{2} & = & [\frac{8(1\text{.}\text{00}\times {\text{10}}^{-3}\;\text{N}⋅{\text{s/m}}^{2})(2\text{.}\text{50}\times {\text{10}}^{-2}\;\text{m})}{\pi (0\text{.}\text{150}\times {\text{10}}^{-3}\;\text{m}{)}^{4}}](1\text{.}\text{20}\times {\text{10}}^{-7}\;{\text{m}}^{3}\text{/s})+1\text{.}\text{066}\times {\text{10}}^{3}\;{\text{N/m}}^{2} \\ & = & 1\text{.}\text{62}\times {\text{10}}^{4}\;{\text{N/m}}^{2}\text{.}\end{array} $$  {eq:import-auto-id1133273}

**Discussion**
This pressure could be supplied by an IV bottle with the surface of the saline solution 1.61 m above the entrance to the needle (this is left for you to solve in this chapter’s Problems and Exercises), assuming that there is negligible pressure drop in the tubing leading to the needle.
:::

## Flow and Resistance as Causes of Pressure Drops
You may have noticed that water pressure in your home might be lower than normal on hot summer days when there is more use. This pressure drop occurs in the water main before it reaches your home. Let us consider flow through the water main as illustrated in [ref:import-auto-id3191604]. We can understand why the pressure ${P}_{1}$ to the home drops during times of heavy use by rearranging

$$ Q=\frac{{P}_{2}-{P}_{1}}{R} $$  {eq:import-auto-id3230032}

to

$$ {P}_{2}-{P}_{1}=RQ\text{,} $$  {eq:fs-id2681296}

where, in this case, ${P}_{2}$ is the pressure at the water works and *$R$* is the resistance of the water main. During times of heavy use, the flow rate *$Q$* is large. This means that ${P}_{2}-{P}_{1}$ must also be large. Thus ${P}_{1}$ must decrease. It is correct to think of flow and resistance as causing the pressure to drop from ${P}_{2}$ to ${P}_{1}$. ${P}_{2}-{P}_{1}=RQ$ is valid for both laminar and turbulent flows.

> FIGURE {fig:import-auto-id3191604} src=../../media/Figure_13_04_06a.jpg
> alt: Figure shows the water distribution system from a water works to homes around that area. The pressure at the pipeline near the water works is shown to have a pressure P two and the pressure at the dividing point were the pipe line splits to corresponding houses the pressure is shown as P one.
> width: 300
> caption: During times of heavy use, there is a significant pressure drop in a water main, and ${P}_{\text{1}}$ supplied to users is significantly less than
${P}_{\text{2}}$ created at the water works. If the flow is very small, then the pressure drop is negligible, and ${P}_{2}\approx {P}_{1}$.

We can use ${P}_{2}-{P}_{1}=RQ$ to analyze pressure drops occurring in more complex systems in which the tube radius is not the same everywhere. Resistance will be much greater in narrow places, such as an obstructed coronary artery. For a given flow rate *$Q$*, the pressure drop will be greatest where the tube is most narrow. This is how water faucets control flow. Additionally, *$R$* is greatly increased by turbulence, and a constriction that creates turbulence greatly reduces the pressure downstream. Plaque in an artery reduces pressure and hence flow, both by its resistance and by the turbulence it creates.
[ref:fs-id2660781] is a schematic of the human circulatory system, showing average blood pressures in its major parts for an adult at rest. Pressure created by the heart’s two pumps, the right and left ventricles, is reduced by the resistance of the blood vessels as the blood flows through them. The left ventricle increases arterial blood pressure that drives the flow of blood through all parts of the body except the lungs. The right ventricle receives the lower pressure blood from two major veins and pumps it through the lungs for gas exchange with atmospheric gases – the disposal of carbon dioxide from the blood and the replenishment of oxygen. Only one major organ is shown schematically, with typical branching of arteries to ever smaller vessels, the smallest of which are the capillaries, and rejoining of small veins into larger ones. Similar branching takes place in a variety of organs in the body, and the circulatory system has considerable flexibility in flow regulation to these organs by the dilation and constriction of the arteries leading to them and the capillaries within them. The sensitivity of flow to tube radius makes this flexibility possible over a large range of flow rates.

> FIGURE {fig:fs-id2660781} src=../../media/Figure_13_04_07a.jpg
> alt: Figure is a schematic diagram of the circulatory system. The lungs, heart, arteries and vein systems are shown. The blood is shown to flow from the left atrium through the arteries, then through the veins and back to the right atrium. The flow is also shown from right atrium to the lungs and from lungs back to left atrium. All parts of the system are labeled. Pressure various points of the system all along the movement of blood across various parts are also marked.
> width: 350
> caption: Schematic of the circulatory system. Pressure difference is created by the two pumps in the heart and is reduced by resistance in the vessels. Branching of vessels into capillaries allows blood to reach individual cells and exchange substances, such as oxygen and waste products, with them. The system has an impressive ability to regulate flow to individual organs, accomplished largely by varying vessel diameters.

Each branching of larger vessels into smaller vessels increases the total cross-sectional area of the tubes through which the blood flows. For example, an artery with a cross section of $1\;{\text{cm}}^{2}$ may branch into 20 smaller arteries, each with cross sections of  $0.5\;{\text{cm}}^{2}$, with a total of  $\text{10}\;{\text{cm}}^{2}$. In that manner, the resistance of the branchings is reduced so that pressure is not entirely lost. Moreover, because  $Q=A\bar{v}$ and $A$ increases through branching, the average velocity of the blood in the smaller vessels is reduced. The blood velocity in the aorta ($\text{diameter}=1\;\text{cm}$) is about 25 cm/s, while in the capillaries ($\text{20}μ\text{m}$ in diameter) the velocity is about 1 mm/s. This reduced velocity allows the blood to exchange substances with the cells in the capillaries and alveoli in particular.

## Section Summary {section:section-summary}
- Laminar flow is characterized by smooth flow of the fluid in layers that do not mix.
- Turbulence is characterized by eddies and swirls that mix layers of fluid together.
- Fluid viscosity *$η$* is due to friction within a fluid. Representative values are given in [ref:import-auto-id3073392]. Viscosity has units of $({\text{N/m}}^{2})\text{s}$ or $\text{Pa}⋅\text{s}$.
- Flow is proportional to pressure difference and inversely proportional to resistance:
    

$$ Q=\frac{{P}_{2}-{P}_{1}}{R}. $$  {eq:eip-472}

- For laminar flow in a tube, Poiseuille’s law for resistance states that
    

$$ R=\frac{8ηl}{{πr}^{4}}. $$  {eq:eip-18}

- Poiseuille’s law for flow in a tube is
    

$$ Q=\frac{({P}_{2}-{P}_{1})\pi {r}^{4}}{8ηl}. $$  {eq:eip-46}

- The pressure drop caused by flow and resistance is given by
    

$$ {P}_{2}-{P}_{1}=RQ. $$  {eq:eip-515}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2016654} type=conceptual-questions 
PROBLEM:
Explain why the viscosity of a liquid decreases with temperature—that is, how might increased temperature reduce the effects of cohesive forces in a liquid? Also explain why the viscosity of a gas increases with temperature—that is, how does increased gas temperature create more collisions between atoms and molecules?
:::

:::exercise {fs-id1390466} type=conceptual-questions 
PROBLEM:
When paddling a canoe upstream, it is wisest to travel as near to the shore as possible. When canoeing downstream, it may be best to stay near the middle. Explain why.
:::

:::exercise {fs-id2442163} type=conceptual-questions 
PROBLEM:
Why does flow decrease in your shower when someone flushes the toilet?
:::

:::exercise {fs-id1528282} type=conceptual-questions 
PROBLEM:
Plumbing usually includes air-filled tubes near water faucets, as shown in [ref:import-auto-id3154513]. Explain why they are needed and how they work.

> FIGURE {fig:import-auto-id3154513} src=../../media/Figure_13_04_08a.jpg
> alt: The picture shows water gushing out of a water tap. The faucet in the tap is marked. A pipe connected vertically filled with air is shown at an opening on the water pipe before the tap.
> width: 300
> caption: The vertical tube near the water tap remains full of air and serves a useful purpose.

:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1011276} type=problems-exercises 
PROBLEM:
(a) Calculate the retarding force due to the viscosity of the air layer between a cart and a level air track given the following information—air temperature is $\text{20º C}$, the cart is moving at 0.400 m/s, its surface area is $2\text{.}\text{50}\times {\text{10}}^{−2}\;{\text{m}}^{2}$, and the thickness of the air layer is $6.00\times {\text{10}}^{-5}\;\text{m}$. (b) What is the ratio of this force to the weight of the 0.300-kg cart?
SOLUTION:
(a) $3\text{.}\text{02}\times {\text{10}}^{-3}\;\text{N}$
(b) $1\text{.}\text{03}\times {\text{10}}^{-3}$
:::

:::exercise {fs-id1845376} type=problems-exercises 
PROBLEM:
What force is needed to pull one microscope slide over another at a speed of 1.00 cm/s, if there is a 0.500-mm-thick layer of $\text{20º C}$ water between them and the contact area is $8.00\;{\text{cm}}^{2}$?
:::

:::exercise {fs-id1585889} type=problems-exercises 
PROBLEM:
A glucose solution being administered with an IV has a flow rate of $4\text{.}\text{00}\;{\text{cm}}^{3}\text{/min}$. What will the new flow rate be if the glucose is replaced by whole blood having the same density but a viscosity 2.50 times that of the glucose? All other factors remain constant.
SOLUTION:
$1\text{.}{\text{60 cm}}^{3}\text{/min}$
:::

:::exercise {fs-id1562200} type=problems-exercises 
PROBLEM:
The pressure drop along a length of artery is 100 Pa, the radius is 10 mm, and the flow is laminar. The average speed of the blood is 15 mm/s. (a) What is the net force on the blood in this section of artery? (b) What is the power expended maintaining the flow?
:::

:::exercise {fs-id2392198} type=problems-exercises 
PROBLEM:
A small artery has a length of $1\text{.}1\times {\text{10}}^{-3}\;\text{m}$ and a radius of $2.5\times {\text{10}}^{-5}\;\text{m}$. If the pressure drop across the artery is 1.3 kPa, what is the flow rate through the artery? (Assume that the temperature is $\text{37º C}$.)
SOLUTION:
$8.7\times {\text{10}}^{-\text{11}}\;{\text{m}}^{3}\text{/s}$
:::

:::exercise {fs-id2423387} type=problems-exercises 
PROBLEM:
Fluid originally flows through a tube at a rate of $\text{100}\;{\text{cm}}^{3}\text{/s}$. To illustrate the sensitivity of flow rate to various factors, calculate the new flow rate for the following changes with all other factors remaining the same as in the original conditions. (a) Pressure difference increases by a factor of 1.50. (b) A new fluid with 3.00 times greater viscosity is substituted. (c) The tube is replaced by one having 4.00 times the length. (d) Another tube is used with a radius 0.100 times the original. (e) Yet another tube is substituted with a radius 0.100 times the original and half the length, *and* the pressure difference is increased by a factor of 1.50.
:::

:::exercise {fs-id3385463} type=problems-exercises 
PROBLEM:
The arterioles (small arteries) leading to an organ, constrict in order to decrease flow to the organ. To shut down an organ, blood flow is reduced naturally to 1.00% of its original value. By what factor did the radii of the arterioles constrict? Penguins do this when they stand on ice to reduce the blood flow to their feet.
SOLUTION:
0.316
:::

:::exercise {fs-id3125888} type=problems-exercises 
PROBLEM:
Angioplasty is a technique in which arteries partially blocked with plaque are dilated to increase blood flow. By what factor must the radius of an artery be increased in order to increase blood flow by a factor of 10?
:::

:::exercise {fs-id2639230} type=problems-exercises 
PROBLEM:
(a) Suppose a blood vessel’s radius is decreased to 90.0% of its original value by plaque deposits and the body compensates by increasing the pressure difference along the vessel to keep the flow rate constant. By what factor must the pressure difference increase? (b) If turbulence is created by the obstruction, what additional effect would it have on the flow rate?
SOLUTION:
(a) 1.52
(b) Turbulence will decrease the flow rate of the blood, which would require an even larger increase in the pressure difference, leading to higher blood pressure.
:::

:::exercise {fs-id2401743} type=problems-exercises 
PROBLEM:
A spherical particle falling at a terminal speed in a liquid must have the gravitational force balanced by the drag force and the buoyant force. The buoyant force is equal to the weight of the displaced fluid, while the drag force is assumed to be given by Stokes Law, ${F}_{s}=\text{6}\pi rηv$. Show that the terminal speed is given by $v=\frac{{2R}^{2}g}{9η}({ρ}_{\text{s}}-{ρ}_{1}),$ where *$R$* is the radius of the sphere, ${ρ}_{\text{s}}$ is its density, and ${ρ}_{1}$ is the density of the fluid and $η$ the coefficient of viscosity.
:::

:::exercise {fs-id1427261} type=problems-exercises 
PROBLEM:
Using the equation of the previous problem, find the viscosity of motor oil in which a steel ball of radius 0.8 mm falls with a terminal speed of 4.32 cm/s. The densities of the ball and the oil are 7.86 and 0.88 g/mL, respectively.
SOLUTION:

$$ \text{225}\;\text{mPa}⋅\text{s} $$  {eq:eip-779}

:::

:::exercise {fs-id3054572} type=problems-exercises 
PROBLEM:
A skydiver will reach a terminal velocity when the air drag equals their weight. For a skydiver with high speed and a large body, turbulence is a factor. The drag force then is approximately proportional to the square of the velocity. Taking the drag force to be ${F}_{\text{D}}=\frac{1}{2}ρ{Av}^{\text{2}}$ and setting this equal to the person’s weight, find the terminal speed for a person falling “spread eagle.” Find both a formula and a number for ${v}_{\text{t}}$, with assumptions as to size.
:::

:::exercise {fs-id3034936} type=problems-exercises 
PROBLEM:
A layer of oil 1.50 mm thick is placed between two microscope slides. Researchers find that a force of $5\text{.}\text{50}\times {\text{10}}^{-4}\;\text{N}$ is required to glide one over the other at a speed of 1.00 cm/s when their contact area is $6\text{.}\text{00}\;{\text{cm}}^{2}$. What is the oil’s viscosity? What type of oil might it be?
SOLUTION:

$$ 0\text{.}\text{138 Pa}⋅\text{s,} $$  {eq:eip-408}

or
Olive oil.
:::

:::exercise {fs-id3025375} type=problems-exercises 
PROBLEM:
(a) Verify that a 19.0% decrease in laminar flow through a tube is caused by a 5.00% decrease in radius, assuming that all other factors remain constant, as stated in the text. (b) What increase in flow is obtained from a 5.00% increase in radius, again assuming all other factors remain constant?
:::

:::exercise {fs-id2683828} type=problems-exercises 
PROBLEM:
[ref:fs-id1969731] dealt with the flow of saline solution in an IV system. (a) Verify that a pressure of $1\text{.}\text{62}\times {\text{10}}^{4}\;{\text{N/m}}^{2}$ is created at a depth of 1.61 m in a saline solution, assuming its density to be that of sea water. (b) Calculate the new flow rate if the height of the saline solution is decreased to 1.50 m. (c) At what height would the direction of flow be reversed? (This reversal can be a problem when patients stand up.)
SOLUTION:
(a) $1\text{.}\text{62}\times {\text{10}}^{\text{4}}\;{\text{N/m}}^{2}$
(b) $0\text{.}{\text{111 cm}}^{3}\text{/s}$
(c)10.6 cm
:::

:::exercise {fs-id2442683} type=problems-exercises 
PROBLEM:
When physicians diagnose arterial blockages, they quote the reduction in flow rate. If the flow rate in an artery has been reduced to 10.0% of its normal value by a blood clot and the average pressure difference has increased by 20.0%, by what factor has the clot reduced the radius of the artery?
:::

:::exercise {fs-id742312} type=problems-exercises 
PROBLEM:
During a marathon race, a runner’s blood flow increases to 10.0 times her resting rate. Her blood’s viscosity has dropped to 95.0% of its normal value, and the blood pressure difference across the circulatory system has increased by 50.0%. By what factor has the average radii of her blood vessels increased?
SOLUTION:
1.59
:::

:::exercise {fs-id3358894} type=problems-exercises 
PROBLEM:
Water supplied to a house by a water main has a pressure of $3\text{.}\text{00}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$ early on a summer day when neighborhood use is low. This pressure produces a flow of 20.0 L/min through a garden hose. Later in the day, pressure at the exit of the water main and entrance to the house drops, and a flow of only 8.00 L/min is obtained through the same hose. (a) What pressure is now being supplied to the house, assuming resistance is constant? (b) By what factor did the flow rate in the water main increase in order to cause this decrease in delivered pressure? The pressure at the entrance of the water main is $5\text{.}\text{00}\times {\text{10}}^{5}\;{\text{N/m}}^{2}$, and the original flow rate was 200 L/min. (c) How many more users are there, assuming each would consume 20.0 L/min in the morning?
:::

:::exercise {fs-id2400972} type=problems-exercises 
PROBLEM:
An oil gusher shoots crude oil 25.0 m into the air through a pipe with a 0.100-m diameter. Neglecting air resistance but not the resistance of the pipe, and assuming laminar flow, calculate the gauge pressure at the entrance of the 50.0-m-long vertical pipe. Take the density of the oil to be $\text{900}\;{\text{kg/m}}^{3}$ and its viscosity to be $1\text{.}\text{00}\;({\text{N/m}}^{2})⋅\text{s}$ (or  $1.00\;\text{Pa}⋅\text{s}$). Note that you must take into account the pressure due to the 50.0-m column of oil in the pipe.
SOLUTION:
$2\text{.}\text{95}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$(gauge pressure)
:::

:::exercise {fs-id1373292} type=problems-exercises 
PROBLEM:
Concrete is pumped from a cement mixer to the place it is being laid, instead of being carried in wheelbarrows. The flow rate is 200.0 L/min through a 50.0-m-long, 8.00-cm-diameter hose, and the pressure at the pump is $8\text{.}\text{00}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$. (a) Calculate the resistance of the hose. (b) What is the viscosity of the concrete, assuming the flow is laminar? (c) How much power is being supplied, assuming the point of use is at the same level as the pump? You may neglect the power supplied to increase the concrete’s velocity.
:::

:::exercise {fs-id2446855} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a coronary artery constricted by arteriosclerosis. Construct a problem in which you calculate the amount by which the diameter of the artery is decreased, based on an assessment of the decrease in flow rate.
:::

:::exercise {fs-id2053879} type=problems-exercises 
PROBLEM:
Consider a river that spreads out in a delta region on its way to the sea. Construct a problem in which you calculate the average speed at which water moves in the delta region, based on the speed at which it was moving up river. Among the things to consider are the size and flow rate of the river before it spreads out and its size once it has spread out. You can construct the problem for the river spreading out into one large river or into multiple smaller rivers.
:::

## Glossary
- {def} **laminar**: a type of fluid flow in which layers do not mix
- {def} **turbulence**: fluid flow in which layers mix together via eddies and swirls
- {def} **viscosity**: the friction in a fluid, defined in terms of the friction between layers
- {def} **Poiseuille’s law for resistance**: the resistance to laminar flow of an incompressible fluid in a tube: *R* = 8*ηl*/*πr*<sup>4</sup>
- {def} **Poiseuille’s law**: the rate of laminar flow of an incompressible fluid in a tube: *Q* = (*P*<sub>2</sub> − *P*<sub>1</sub>)*πr*<sup>4</sup>/8*ηl*

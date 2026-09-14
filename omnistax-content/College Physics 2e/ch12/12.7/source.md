# Molecular Transport Phenomena: Diffusion, Osmosis, and Related Processes

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define diffusion, osmosis, dialysis, and active transport.
- Calculate diffusion rates.

## Diffusion
There is something fishy about the ice cube from your freezer—how did it pick up those food odors? How does soaking a sprained ankle in Epsom salt reduce swelling? The answer to these questions are related to atomic and molecular transport phenomena—another mode of fluid motion. Atoms and molecules are in constant motion at any temperature. In fluids they move about randomly even in the absence of macroscopic flow. This motion is called a random walk and is illustrated in [ref:import-auto-id1538948]. {term:Diffusion} is the movement of substances due to random thermal molecular motion. Fluids, like fish fumes or odors entering ice cubes, can even diffuse through solids.
Diffusion is a slow process over macroscopic distances. The densities of common materials are great enough that molecules cannot travel very far before having a collision that can scatter them in any direction, including straight backward. It can be shown that the average distance ${x}_{\text{rms}}$ that a molecule travels is proportional to the square root of time:

$$ {x}_{\text{rms}}=\sqrt{2\text{Dt}}\text{,} $$  {eq:import-auto-id1917214}

where ${x}_{\text{rms}}$ stands for the *root-mean-square distance* and is the statistical average for the process. The quantity $D$ is the diffusion constant for the particular molecule in a specific medium. [ref:import-auto-id1412690] lists representative values of $D$ for various substances, in units of ${\text{m}}^{2}\text{/s}$.

> FIGURE {fig:import-auto-id1538948} src=../../media/Figure_13_07_01a.jpg
> alt: The figure shows the path of a random walk. The random thermal motion of a molecule is shown to begin at a start point and then the particles move about zigzag in all directions and end up at the finish point. The distance between the start and finish point is shown as x. Continuous arrows show various directions of motion.
> width: 300
> caption: The random thermal motion of a molecule in a fluid in time $t$. This type of motion is called a random walk.

> TABLE {tab:import-auto-id1412690} cols=3
> title: Diffusion Constants for Various Molecules^[At 20°C and 1 atm]
> summary: Diffusing molecules for various substances are listed in column 1. The medium (air or water) is listed in column 2. D, in meters squared per second, is listed in column 3.

| Diffusing molecule | Medium | *D*(m<sup>2</sup>/s) |
| --- | --- | --- |
| Hydrogen $({\text{H}}_{2})$ | Air | $6.4\times {10}^{–5}$ |
| Oxygen $({\text{O}}_{2})$ | Air | $1.8\times {10}^{–5}$ |
| Oxygen $({\text{O}}_{2})$ | Water | $1.0\times {10}^{–9}$ |
| Glucose $({\text{C}}_{6}{\text{H}}_{12}{\text{O}}_{6})$ | Water | $6.7\times {10}^{–10}$ |
| Hemoglobin | Water | $6.9\times {10}^{–11}$ |
| DNA | Water | $1.3\times {10}^{–12}$ |

Note that $D$ gets progressively smaller for more massive molecules. This decrease is because the average molecular speed at a given temperature is inversely proportional to molecular mass. Thus the more massive molecules diffuse more slowly. Another interesting point is that $D$ for oxygen in air is much greater than $D$ for oxygen in water. In water, an oxygen molecule makes many more collisions in its random walk and is slowed considerably. In water, an oxygen molecule moves only about $40\;μ\text{m}$ in 1 s. (Each molecule actually collides about ${\text{10}}^{\text{10}}$ times per second!). Finally, note that diffusion constants increase with temperature, because average molecular speed increases with temperature. This is because the average kinetic energy of molecules, $\frac{1}{2}{\text{mv}}^{2}$, is proportional to absolute temperature.

:::example {ex:fs-id3448057} Calculating Diffusion: How Long Does Glucose Diffusion Take?
Calculate the average time it takes a glucose molecule to move 1.0 cm in water.
**Strategy**
We can use ${x}_{\text{rms}}=\sqrt{2D\text{t}}$, the expression for the average distance moved in time $t$, and solve it for $t$. All other quantities are known.
**Solution**
Solving for $t$ and substituting known values yields

$$ \begin{array}{lll}t & = & \frac{{x}_{\text{rms}}^{2}}{2D}=\frac{(\text{0.010 m}{)}^{2}}{2(6\text{.}7\times {\text{10}}^{-\text{10}}\;{\text{m}}^{2}\text{/s})} \\ & = & 7\text{.}5\times {\text{10}}^{4}\;\text{s}=\text{21 h}\text{.}\end{array} $$  {eq:import-auto-id2578506}

**Discussion**
This is a remarkably long time for glucose to move a mere centimeter! For this reason, we stir sugar into water rather than waiting for it to diffuse.
:::
Because diffusion is typically very slow, its most important effects occur over small distances. For example, the cornea of the eye gets most of its oxygen by diffusion through the thin tear layer covering it.

## The Rate and Direction of Diffusion
If you very carefully place a drop of food coloring in a still glass of water, it will slowly diffuse into the colorless surroundings until its concentration is the same everywhere. This type of diffusion is called free diffusion, because there are no barriers inhibiting it. Let us examine its direction and rate. Molecular motion is random in direction, and so simple chance dictates that more molecules will move out of a region of high concentration than into it. The net rate of diffusion is higher initially than after the process is partially completed. (See [ref:import-auto-id2931738].)

> FIGURE {fig:import-auto-id2931738} src=../../media/Figure_13_07_02a.jpg
> alt: The figure shows the diffusion along a cylindrical tube of area of cross section A. The cylindrical tube is divided into three regions. The cross section is marked as A. The first region is marked as region one. The concentration there is marked C one. The molecules are shown as small sphere with an arrow pointing out from them. The concentration is high in this region. The second region is marked of width delta x. The concentration is lesser in this region as compared to region one. The third region is marked as region two, the concentration in this region lesser than the other two regions shown by lesser number of spherical molecules.
> width: 275
> caption: Diffusion proceeds from a region of higher concentration to a lower one. The net rate of movement is proportional to the difference in concentration.

The net rate of diffusion is proportional to the concentration difference. Many more molecules will leave a region of high concentration than will enter it from a region of low concentration. In fact, if the concentrations were the same, there would be *no* net movement. The net rate of diffusion is also proportional to the diffusion constant $D$, which is determined experimentally. The farther a molecule can diffuse in a given time, the more likely it is to leave the region of high concentration. Many of the factors that affect the rate are hidden in the diffusion constant $D$. For example, temperature and cohesive and adhesive forces all affect values of $D$.
Diffusion is the dominant mechanism by which the exchange of nutrients and waste products occur between the blood and tissue, and between air and blood in the lungs. In the evolutionary process, as organisms became larger, they needed quicker methods of transportation than net diffusion, because of the larger distances involved in the transport, leading to the development of circulatory systems. Less sophisticated, single-celled organisms still rely totally on diffusion for the removal of waste products and the uptake of nutrients.

## Osmosis and Dialysis—Diffusion across Membranes
Some of the most interesting examples of diffusion occur through barriers that affect the rates of diffusion. For example, when you soak a swollen ankle in Epsom salt, water diffuses through your skin. Many substances regularly move through cell membranes; oxygen moves in, carbon dioxide moves out, nutrients go in, and wastes go out, for example. Because membranes are thin structures (typically $6\text{.}5\times {\text{10}}^{-9}$ to $\text{10}\times {\text{10}}^{-9}$ m across) diffusion rates through them can be high. Diffusion through membranes is an important method of transport.
Membranes are generally selectively permeable, or {term:semipermeable}. (See [ref:import-auto-id1464722].) One type of semipermeable membrane has small pores that allow only small molecules to pass through. In other types of membranes, the molecules may actually dissolve in the membrane or react with molecules in the membrane while moving across. Membrane function, in fact, is the subject of much current research, involving not only physiology but also chemistry and physics.

> FIGURE {fig:import-auto-id1464722} src=../../media/Figure_13_07_03a.jpg
> alt: Part a of the figure shows a semi permeable membrane shown as small rectangular sections in a vertical line, separated by small gaps called as pores. Molecules are shown in all shapes on both the sides of the membranes. Some molecules are shown to diffuse through the pores. Part b of the diagram shows molecules in the form of small spheres packed on both sides of a single vertical rectangular membrane. Some molecules are shown to dissolve in this membrane and diffuse across it.
> width: 400
> caption: (a) A semipermeable membrane with small pores that allow only small molecules to pass through. (b) Certain molecules dissolve in this membrane and diffuse across it.

{term:Osmosis} is the transport of water through a semipermeable membrane from a region of high concentration to a region of low concentration. Osmosis is driven by the imbalance in water concentration. For example, water is more concentrated in your body than in Epsom salt. When you soak a swollen ankle in Epsom salt, the water moves out of your body into the lower-concentration region in the salt. Similarly, {term:dialysis} is the transport of any other molecule through a semipermeable membrane due to its concentration difference. Both osmosis and dialysis are used by the kidneys to cleanse the blood.
Osmosis can create a substantial pressure. Consider what happens if osmosis continues for some time, as illustrated in [ref:import-auto-id1574707]. Water moves by osmosis from the left into the region on the right, where it is less concentrated, causing the solution on the right to rise. This movement will continue until the pressure $ρ\text{gh}$ created by the extra height of fluid on the right is large enough to stop further osmosis. This pressure is called a *back pressure*. The back pressure $ρ\text{gh}$ that stops osmosis is also called the {term:relative osmotic pressure} if neither solution is pure water, and it is called the {term:osmotic pressure} if one solution is pure water. Osmotic pressure can be large, depending on the size of the concentration difference. For example, if pure water and sea water are separated by a semipermeable membrane that passes no salt, osmotic pressure will be 25.9 atm. This value means that water will diffuse through the membrane until the salt water surface rises 268 m above the pure-water surface! One example of pressure created by osmosis is turgor in plants (many wilt when too dry). Turgor describes the condition of a plant in which the fluid in a cell exerts a pressure against the cell wall. This pressure gives the plant support. Dialysis can similarly cause substantial pressures.

> FIGURE {fig:import-auto-id1574707} src=../../media/Figure_13_07_04a.jpg
> alt: Part a of the figure shows a vessel having two different concentrations of sugar in water separated by a semipermeable membrane that passes water but not sugar molecules. The sugar molecules are shown as small red color spheres and water molecules as still smaller blue colored spheres. The right side of the solution shows more of sugar molecules represented as more number of red spheres. The osmosis of water molecules is shown toward right. Part b shows the second stage for figure on part a. The osmosis of water is shown toward right. The height of fluid on right is shown as h above the fluid on the left. The back pressure of water is shown toward left.
> width: 400
> caption: (a) Two sugar-water solutions of different concentrations, separated by a semipermeable membrane that passes water but not sugar. Osmosis will be to the right, since water is less concentrated there. (b) The fluid level rises until the back pressure $ρ\text{gh}$ equals the relative osmotic pressure; then, the net transfer of water is zero.

{term:Reverse osmosis} and {term:reverse dialysis} (also called filtration) are processes that occur when back pressure is sufficient to reverse the normal direction of substances through membranes. Back pressure can be created naturally as on the right side of [ref:import-auto-id1574707]. (A piston can also create this pressure.) Reverse osmosis can be used to desalinate water by simply forcing it through a membrane that will not pass salt. Similarly, reverse dialysis can be used to filter out any substance that a given membrane will not pass.
One further example of the movement of substances through membranes deserves mention. We sometimes find that substances pass in the direction opposite to what we expect. Cypress tree roots, for example, extract pure water from salt water, although osmosis would move it in the opposite direction. This is not reverse osmosis, because there is no back pressure to cause it. What is happening is called {term:active transport}, a process in which a living membrane expends energy to move substances across it. Many living membranes move water and other substances by active transport. The kidneys, for example, not only use osmosis and dialysis—they also employ significant active transport to move substances into and out of blood. In fact, it is estimated that at least 25% of the body’s energy is expended on active transport of substances at the cellular level. The study of active transport carries us into the realms of microbiology, biophysics, and biochemistry and it is a fascinating application of the laws of nature to living structures.

## Section Summary {section:section-summary}
- Diffusion is the movement of substances due to random thermal molecular motion.
- The average distance ${x}_{\text{rms}}$ a molecule travels by diffusion in a given amount of time is given by

$$ {x}_{\text{rms}}=\sqrt{2D\text{t}}, $$  {eq:eip-648}

where $D$ is the diffusion constant, representative values of which are found in [ref:import-auto-id1412690].
- Osmosis is a process by which molecules of a solvent pass through a semipermeable membrane from a less concentrated solution into a more concentrated one, thus, equalizing the solute concentrations on each side of the membrane.
- Dialysis is the transport of any other molecule through a semipermeable membrane due to its concentration difference.
- Both processes can be reversed by back pressure.
- Active transport is a process in which a living membrane expends energy to move substances across it.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3076697} type=conceptual-questions 
PROBLEM:
Why would you expect the rate of diffusion to increase with temperature? Can you give an example, such as the fact that you can dissolve sugar more rapidly in hot water?
:::

:::exercise {fs-id3397393} type=conceptual-questions 
PROBLEM:
How are osmosis and dialysis similar? How do they differ?
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id3095372} type=problems-exercises 
PROBLEM:
You can smell perfume very shortly after opening the bottle. To show that it is not reaching your nose by diffusion, calculate the average distance a perfume molecule moves in one second in air, given its diffusion constant $D$ to be $1.00\times {\text{10}}^{–6}\;{\text{m}}^{2}\text{/s}$.
SOLUTION:
$1\text{.}\text{41}\times {\text{10}}^{-3}\;\text{m}$
:::

:::exercise {fs-id1613606} type=problems-exercises 
PROBLEM:
What is the ratio of the average distances that oxygen will diffuse in a given time in air and water? Why is this distance less in water (equivalently, why is $D$ less in water)?
:::

:::exercise {fs-id2621123} type=problems-exercises 
PROBLEM:
Oxygen reaches the veinless cornea of the eye by diffusing through its tear layer, which is 0.500-mm thick. How long does it take the average oxygen molecule to do this?
SOLUTION:
$1\text{.}3\times {\text{10}}^{2}\;\text{s}$
:::

:::exercise {fs-id3113937} type=problems-exercises 
PROBLEM:
(a) Find the average time required for an oxygen molecule to diffuse through a 0.200-mm-thick tear layer on the cornea. (b) How much time is required to diffuse $0\text{.500}\;{\text{cm}}^{3}$ of oxygen to the cornea if its surface area is $1\text{.}\text{00}\;{\text{cm}}^{2}$?
:::

:::exercise {fs-id2603271} type=problems-exercises 
PROBLEM:
Suppose hydrogen and oxygen are diffusing through air. A small amount of each is released simultaneously. How much time passes before the hydrogen is 1.00 s ahead of the oxygen? Such differences in arrival times are used as an analytical tool in gas chromatography.
SOLUTION:
0.391 s
:::

## Glossary
- {def} **diffusion**: the movement of substances due to random thermal molecular motion
- {def} **semipermeable**: a type of membrane that allows only certain small molecules to pass through
- {def} **osmosis**: the transport of water through a semipermeable membrane from a region of high concentration to one of low concentration
- {def} **dialysis**: the transport of any molecule other than water through a semipermeable membrane from a region of high concentration to one of low concentration
- {def} **relative osmotic pressure**: the back pressure which stops the osmotic process if neither solution is pure water
- {def} **osmotic pressure**: the back pressure which stops the osmotic process if one solution is pure water
- {def} **reverse osmosis**: the process that occurs when back pressure is sufficient to reverse the normal direction of osmosis through membranes
- {def} **reverse dialysis**: the process that occurs when back pressure is sufficient to reverse the normal direction of dialysis through membranes
- {def} **active transport**: the process in which a living membrane expends energy to move substances across

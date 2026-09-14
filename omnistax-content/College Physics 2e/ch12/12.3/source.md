# The Most General Applications of Bernoulli’s Equation

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate using Torricelli’s theorem.
- Calculate power in fluid flow.

## Torricelli’s Theorem
[ref:import-auto-id1602915] shows water gushing from a large tube through a dam. What is its speed as it emerges? Interestingly, if resistance is negligible, the speed is just what it would be if the water fell a distance $h$ from the surface of the reservoir; the water’s speed is independent of the size of the opening. Let us check this out. Bernoulli’s equation must be used since the depth is not constant. We consider water flowing from the surface (point 1) to the tube’s outlet (point 2). Bernoulli’s equation as stated in previously is

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}+ρ{\text{gh}}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}+ρ{\text{gh}}_{2}\text{.} $$  {eq:import-auto-id2679980}

Both ${P}_{1}$ and ${P}_{2}$ equal atmospheric pressure <sup></sup>(${P}_{1}$ is atmospheric pressure because it is the pressure at the top of the reservoir. ${P}_{2}$ must be atmospheric pressure, since the emerging water is surrounded by the atmosphere and cannot have a pressure different from atmospheric pressure.) and subtract out of the equation, leaving

$$ \frac{1}{2}{ρv}_{1}^{2}+ρ{\text{gh}}_{1}=\frac{1}{2}{ρv}_{2}^{2}+ρ{\text{gh}}_{2}\text{.} $$  {eq:import-auto-id2653363}

Solving this equation for ${v}_{2}^{2}$, noting that the density $ρ$ cancels (because the fluid is incompressible), yields

$$ {v}_{2}^{2}={v}_{1}^{2}+2g({h}_{1}-{h}_{2})\text{.} $$  {eq:import-auto-id2654856}

We let $h={h}_{1}-{h}_{2}$; the equation then becomes

$$ {v}_{2}^{2}={v}_{1}^{2}+2\text{gh} $$  {eq:import-auto-id3356178}

where $h$ is the height dropped by the water. This is simply a kinematic equation for any object falling a distance $h$ with negligible resistance. In fluids, this last equation is called *Torricelli’s theorem*. Note that the result is independent of the velocity’s direction, just as we found when applying conservation of energy to falling objects.

> FIGURE {fig:import-auto-id1602915} src=../../media/Figure_13_03_01a.jpg
> alt: Part a of the figure shows a photograph of a dam with water gushing from a large tube at the base of a dam. Part b shows the schematic diagram for the flow of water in a reservoir. The reservoir is shown in the form of a triangular section with a horizontal opening along the base little near to the base. The water is shown to flow through the horizontal opening near the base. The height which it falls is shown as h two. The pressure and velocity of water at this point are P two and v two. The height to which the water can fall if it falls from a height h above the opening is given by h 2. The pressure and velocity of water at this point are P one and v one.
> width: 300
> caption: (a) Water gushes from the base of the Studen Kladenetz dam in Bulgaria. (credit: Kiril Kapustin; http://www.ImagesFromBulgaria.com) (b) In the absence of significant resistance, water flows from the reservoir with the same speed it would have if it fell the distance $h$ without friction. This is an example of Torricelli’s theorem.

> FIGURE {fig:import-auto-id3306423} src=../../media/Figure_13_03_02a.jpg
> alt: Figure shows a fire engine that is stationed next to a tall building. A floor of the building ten meters above the ground has caught fire. The flames are shown coming out. A fire man has reached close to the fire caught area using a ladder and is spraying water on the fire using a hose attached to the fire engine.
> width: 300
> caption: Pressure in the nozzle of this fire hose is less than at ground level for two reasons: the water has to go uphill to get to the nozzle, and speed increases in the nozzle. In spite of its lowered pressure, the water can exert a large force on anything it strikes, by virtue of its kinetic energy. Pressure in the water stream becomes equal to atmospheric pressure once it emerges into the air.

All preceding applications of Bernoulli’s equation involved simplifying conditions, such as constant height or constant pressure. The next example is a more general application of Bernoulli’s equation in which pressure, velocity, and height all change. (See [ref:import-auto-id3306423].)

:::example {ex:fs-id3098210} Calculating Pressure: A Fire Hose Nozzle
Fire hoses used in major structure fires have inside diameters of 6.40 cm. Suppose such a hose carries a flow of 40.0 L/s starting at a gauge pressure of $1\text{.}\text{62}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$. The hose goes 10.0 m up a ladder to a nozzle having an inside diameter of 3.00 cm. Assuming negligible resistance, what is the initial water pressure at the base of the hose?
**Strategy**
Here we must use Bernoulli’s equation to solve for the pressure, since depth is not constant.
**Solution**
Bernoulli’s equation states

$$ {P}_{1}+\frac{1}{2}{ρv}_{1}^{2}+ρ{\text{gh}}_{1}={P}_{2}+\frac{1}{2}{ρv}_{2}^{2}+ρ{\text{gh}}_{2}\text{,} $$  {eq:fs-id2423911}

where the subscripts 1 and 2 refer to the initial conditions at ground level and the final conditions inside the nozzle, respectively. We must first find the speeds ${v}_{1}$ and ${v}_{2}$. Since $Q={A}_{1}{v}_{1}$ , we get

$$ {v}_{1}=\frac{Q}{{A}_{1}}=\frac{\text{40}\text{.}0\times {\text{10}}^{-3}\;{\text{m}}^{3}\text{/s}}{\pi (3\text{.}\text{20}\times {\text{10}}^{-2}\;\text{m}{)}^{2}}=12.434\;\text{m/s}\text{.} $$  {eq:fs-id3026854}

Similarly, we find

$$ {v}_{2}=\text{56.588 m/s}\text{.} $$  {eq:fs-id1325801}

(This rather large speed is helpful in reaching the fire.) Now, taking ${h}_{1}$ to be zero, we solve Bernoulli’s equation for ${P}_{2}$:

$$ {P}_{2}={P}_{1}+\frac{1}{2}ρ({v}_{1}^{2}-{v}_{2}^{2})-ρ{\text{gh}}_{2}\text{.} $$  {eq:fs-id1321727}

In the proposed solution, ${P}_{2}=0$, so

$$ \begin{array}{l}{P}_{1}-{P}_{2}={P}_{1} \\ =\frac{1}{2}(\text{1000}\;{\text{kg/m}}^{3})[(12.434\;\text{m/s}{)}^{2}-(56.588\;\text{m/s}{)}^{2}]-(\text{1000}\;{\text{kg/m}}^{3})(9.80\;{\text{m/s}}^{2})(10.0\;\text{m}) \\ \approx 1.62\times {\text{10}}^{\text{6}}\;{\text{N/m}}^{2}\text{.}\end{array} $$  {eq:fs-id1890319}

**Discussion**
This value is a gauge pressure, since the initial pressure was given as a gauge pressure. Thus the nozzle pressure is very close to atmospheric pressure, as it must because the water exits into the atmosphere without changes in its conditions.
:::

## Power in Fluid Flow
Power is the *rate* at which work is done or energy in any form is used or supplied. To see the relationship of power to fluid flow, consider Bernoulli’s equation:

$$ P+\frac{1}{2}{ρv}^{2}+ρ\text{gh}=\text{constant}\text{.} $$  {eq:fs-id2407516}

All three terms have units of energy per unit volume, as discussed in the previous section. Now, considering units, if we multiply energy per unit volume by flow rate (volume per unit time), we get units of power. That is, $(E/V)(V/t)=E/t$. This means that if we multiply Bernoulli’s equation by flow rate *$Q$*, we get power. In equation form, this is

$$ (P+\frac{1}{2}{ρv}^{2}+ρ\text{gh})Q=\text{power}\text{.} $$  {eq:fs-id1602629}

Each term has a clear physical meaning. For example, *$\text{PQ}$* is the power supplied to a fluid, perhaps by a pump, to give it its pressure *$P$*. Similarly, $\frac{1}{2}{ρv}^{2}Q$ is the power supplied to a fluid to give it its kinetic energy. And $ρ\text{ghQ}$ is the power going to gravitational potential energy.

:::note [] Making Connections: Power

Power is defined as the rate of energy transferred, or *$E/t$*. Fluid flow involves several types of power. Each type of power is identified with a specific type of energy being expended or changed in form.
:::

:::example {ex:fs-id3025734} Calculating Power in a Moving Fluid
Suppose the fire hose in the previous example is fed by a pump that receives water through a hose with a 6.40-cm diameter coming from a hydrant with a pressure of $0\text{.}\text{700}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$. What power does the pump supply to the water?
**Strategy**
Here we must consider energy forms as well as how they relate to fluid flow. Since the input and output hoses have the same diameters and are at the same height, the pump does not change the speed of the water nor its height, and so the water’s kinetic energy and gravitational potential energy are unchanged. That means the pump only supplies power to increase water pressure by $0\text{.}\text{92}\times {\text{10}}^{6}\;{\text{N/m}}^{2}$ (from $0.700\times {\text{10}}^{6}\;{\text{N/m}}^{2}$ to $1.62\times {\text{10}}^{6}\;{\text{N/m}}^{2}$).
**Solution**
As discussed above, the power associated with pressure is

$$ \begin{array}{lll}\text{power} & = & \text{PQ} \\ & = & (\text{0.920}\times {\text{10}}^{6}\;{\text{N/m}}^{2})(\text{40}\text{.}0\times {\text{10}}^{-3}\;{\text{m}}^{3}\text{/s})\text{.} \\ & = & 3\text{.}\text{68}\times {\text{10}}^{4}\;\text{W}=\text{36}\text{.}8\;\text{kW}\end{array}\text{.} $$  {eq:fs-id3064211}

**Discussion**
Such a substantial amount of power requires a large pump, such as is found on some fire trucks. (This kilowatt value converts to about 50 hp.) The pump in this example increases only the water’s pressure. If a pump—such as the heart—directly increases velocity and height as well as pressure, we would have to calculate all three terms to find the power it supplies.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2174516} type=ap-test-prep 
PROBLEM:
A horizontally oriented pipe has a diameter of 5.6 cm and is filled with water. The pipe draws water from a reservoir that is initially at rest. A manually operated plunger provides a force of 440 N in the pipe. Assuming that the other end of the pipe is open to the air, with what speed does the water emerge from the pipe?
(a) 12 m/s
(b) 19 m/s
(c) 150 m/s
(d) 190 m/s
SOLUTION:
(a)
:::

:::exercise {fs-id1527124} type=ap-test-prep 
PROBLEM:
A 3.5-cm-diameter pipe contains a pumping mechanism that provides a force of 320 N to push water up into a tall building. Upon entering the piston mechanism, the water is flowing at a rate of 2.5 m/s. The water is then pumped to a level 21 m higher where the other end of the pipe is open to the air. With what speed does water leave the pipe?
:::

:::exercise {fs-id2103327} type=ap-test-prep 
PROBLEM:
A large container of water is open to the air, and it develops a hole of area 10 cm<sup>2</sup> at a point 5 m below the surface of the water. What is the flow rate (m<sup>3</sup>⁄s) of the water emerging from this hole?
(a) 99 m<sup>3</sup>⁄s
(b) 9.9 m<sup>3</sup>⁄s
(c) 0.099 m<sup>3</sup>⁄s
(d) 0.0099 m<sup>3</sup>⁄s
SOLUTION:
(d)
:::

:::exercise {fs-id1816086} type=ap-test-prep 
PROBLEM:
A pipe is tapered so that the large end has a diameter twice as large as the small end. What must be the gauge pressure (the difference between pressure at the large end and pressure at the small end) in order for water to emerge from the small end with a speed of 12 m/s if the small end is elevated 8 m above the large end of the pipe?
:::

## Summary {section:section-summary}
- Power in fluid flow is given by the equation $({P}_{1}+\frac{1}{2}{ρv}^{2}+ρ\text{gh})Q=\text{power}\text{,}$ where the first term is power associated with pressure, the second is power associated with velocity, and the third is power associated with height.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2443622} type=conceptual-questions 
PROBLEM:
Based on Bernoulli’s equation, what are three forms of energy in a fluid? (Note that these forms are conservative, unlike heat transfer and other dissipative forms not included in Bernoulli’s equation.)
:::

:::exercise {fs-id1412050} type=conceptual-questions 
PROBLEM:
Water that has emerged from a hose into the atmosphere has a gauge pressure of zero. Why? When you put your hand in front of the emerging stream you feel a force, yet the water’s gauge pressure is zero. Explain where the force comes from in terms of energy.
:::

:::exercise {fs-id2401508} type=conceptual-questions 
PROBLEM:
The old rubber boot shown in [ref:import-auto-id1573387] has two leaks. To what maximum height can the water squirt from Leak 1? How does the velocity of water emerging from Leak 2 differ from that of leak 1? Explain your responses in terms of energy.

> FIGURE {fig:import-auto-id1573387} src=../../media/Figure_13_03_03a.jpg
> alt: The picture shows a boot filled with water. The water is shown emerging from two leaks in the old boot, one in front and another at the back. The leaks are at the same height. The leaks are labeled as Leak 1 and Leak 2 respectively.
> width: 300
> caption: Water emerges from two leaks in an old boot.

:::

:::exercise {fs-id1389535} type=conceptual-questions 
PROBLEM:
Water pressure inside a hose nozzle can be less than atmospheric pressure due to the Bernoulli effect. Explain in terms of energy how the water can emerge from the nozzle against the opposing atmospheric pressure.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1404775} type=problems-exercises 
PROBLEM:
Hoover Dam on the Colorado River is the highest dam in the United States at 221 m, with a maximum output of 1300 MW. The dam generates electricity with water taken from a depth of 150 m and an average flow rate of $\text{650}\;{\text{m}}^{3}\text{/s}$. (a) Calculate the power in this flow. (b) What is the ratio of this power to the facility’s average of 680 MW?
SOLUTION:
(a) $\text{9.56}\times {\text{10}}^{8}\;\text{W}$
(b) 1.41
:::

:::exercise {fs-id1412810} type=problems-exercises 
PROBLEM:
A frequently quoted rule of thumb in aircraft design is that wings should produce about 1000 N of lift per square meter of wing. (The fact that a wing has a top and bottom surface does not double its area.) (a) At takeoff, an aircraft travels at 60.0 m/s, so that the air speed relative to the bottom of the wing is 60.0 m/s. Given the sea level density of air to be $1\text{.}\text{29}\;{\text{kg/m}}^{3}$, how fast must it move over the upper surface to create the ideal lift? (b) How fast must air move over the upper surface at a cruising speed of 245 m/s and at an altitude where air density is one-fourth that at sea level? (Note that this is not all of the aircraft’s lift—some comes from the body of the plane, some from engine thrust, and so on. Furthermore, Bernoulli’s principle gives an approximate answer because flow over the wing creates turbulence.)
:::

:::exercise {fs-id2603396} type=problems-exercises 
PROBLEM:
The left ventricle of a resting adult’s heart pumps blood at a flow rate of $\text{83}\text{.}0\;{\text{cm}}^{3}\text{/s}$, increasing its pressure by 110 mm Hg, its speed from zero to 30.0 cm/s, and its height by 5.00 cm. (All numbers are averaged over the entire heartbeat.) Calculate the total power output of the left ventricle. Note that most of the power is used to increase blood pressure.
SOLUTION:
1.26 W
:::

:::exercise {fs-id3064064} type=problems-exercises 
PROBLEM:
A sump pump (used to drain water from the basement of houses built below the water table) is draining a flooded basement at the rate of 0.750 L/s, with an output pressure of $3.00\times {\text{10}}^{5}\;{\text{N/m}}^{2}$. (a) The water enters a hose with a 3.00-cm inside diameter and rises 2.50 m above the pump. What is its pressure at this point? (b) The hose goes over the foundation wall, losing 0.500 m in height, and widens to 4.00 cm in diameter. What is the pressure now? You may neglect frictional losses in both parts of the problem.
:::

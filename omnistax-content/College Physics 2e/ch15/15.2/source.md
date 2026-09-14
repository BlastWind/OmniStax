# The First Law of Thermodynamics and Some Simple Processes

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe the processes of a simple heat engine.
- Explain the differences among the simple thermodynamic processes—isobaric, isochoric, isothermal, and adiabatic.
- Calculate total work done in a cyclical thermodynamic process.

> FIGURE {fig:import-auto-id1169738145359} src=../../media/Figure_16_02_01a.jpg
> alt: An old photo of a steam turbine at a turbine production plant. People are shown working on the turbine.
> width: 400
> caption: Beginning with the Industrial Revolution, humans have harnessed power through the use of the first law of thermodynamics, before we even understood it completely. This photo, of a steam engine at the Turbinia Works, dates from 1911, a mere 61 years after the first explicit statement of the first law of thermodynamics by Rudolph Clausius. (credit: public domain; author unknown)

One of the most important things we can do with heat transfer is to use it to do work for us. Such a device is called a {term:heat engine}. Car engines and steam turbines that generate electricity are examples of heat engines. [ref:import-auto-id1169737781930] shows schematically how the first law of thermodynamics applies to the typical heat engine.

> FIGURE {fig:import-auto-id1169737781930} src=../../media/Figure_16_02_02.jpg
> alt: The figure shows a schematic representation of a heat engine. The heat engine is represented by a circle. The heat entering the system is shown as Q sub in, represented as a bold arrow toward the circle, and the heat coming out of the heat engine is shown as Q sub out, represented by a narrower bold arrow leaving the circle. The work labeled as W is shown to leave the heat engine as represented by another bold arrow leaving the circle. At the center of the circle are two equations. First, the change in internal energy of the system, delta E sub int, equals zero. Consequently, W equals Q sub in minus Q sub out.
> width: 200
> caption: Schematic representation of a heat engine, governed, of course, by the first law of thermodynamics. It is impossible to devise a system where ${Q}_{\text{out}}=0$, that is, in which no heat transfer occurs to the environment.

> FIGURE {fig:import-auto-id1169737757532} src=../../media/Figure_16_02_03.jpg
> alt: Figure a shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The heat Q sub in is shown to be transferred to the gas in the cylinder as shown by a bold arrow toward it. The force of the gas on the moving cylinder with the piston is shown as F equals P times A shown as a vector arrow pointing toward the right. The change in internal energy is marked in the diagram as delta E sub int sub a equals Q sub in. Figure b shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The force of the gas has moved the cylinder with the piston by a distance d toward the right. The change in internal energy is marked in the diagram as delta E sub int sub b equals negative W sub out. The piston is shown to have done work by change in position, marked as F d equal to W sub out. Figure c shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The piston attached to the cylinder is shown to reach back to the initial position shown in figure a. The distance d is traveled back and heat Q sub out is shown to leave the system as represented by an outward arrow. The force driving backward is shown as a vector arrow pointing to the left, labeled F prime. F prime is shown less than F. The work done by the force F prime is shown by the equation W sub in equal to F prime times d.
> width: 200
> caption: (a) Heat transfer to the gas in a cylinder increases the internal energy of the gas, creating higher pressure and temperature. (b) The force exerted on the movable cylinder does work as the gas expands. Gas pressure and temperature decrease when it expands, indicating that the gas’s internal energy has been decreased by doing work. (c) Heat transfer to the environment further reduces pressure in the gas so that the piston can be more easily returned to its starting position.

The illustrations above show one of the ways in which heat transfer does work. Fuel combustion produces heat transfer to a gas in a cylinder, increasing the pressure of the gas and thereby the force it exerts on a movable piston. The gas does work on the outside world, as this force moves the piston through some distance. Heat transfer to the gas cylinder results in work being done. To repeat this process, the piston needs to be returned to its starting point. Heat transfer now occurs from the gas to the surroundings so that its pressure decreases, and a force is exerted by the surroundings to push the piston back through some distance. Variations of this process are employed daily in hundreds of millions of heat engines. We will examine heat engines in detail in the next section. In this section, we consider some of the simpler underlying processes on which heat engines are based.

## *PV*  Diagrams and their Relationship to Work Done on or by a Gas
A process by which a gas does work on a piston at constant pressure is called an {term:isobaric process}. Since the pressure is constant, the force exerted is constant and the work done is given as

$$ P\Delta V\text{.} $$  {eq:fs-id1169738204673}

> FIGURE {fig:import-auto-id1169738117758} src=../../media/Figure_16_02_04a.jpg
> alt: The diagram shows an isobaric expansion of a gas filled cylinder held vertically. V is the volume of gas in the cylinder. A is the area of cross section of the cylinder. The cylinder has a movable piston with a rod attached to it at the top of the cylinder. A heat Q sub in is shown to enter the cylinder from below. A force F equals P times A is shown to act upward from the bottom of the cylinder. The piston is shown to have been displaced by a vertical distance d upward. The volume displaced is given by delta V equals A times d. The work output shown as W sub out is equal to F times d, which is also equal to P times A times d, which in turn equals P times delta V.
> width: 200
> caption: An isobaric expansion of a gas requires heat transfer to keep the pressure constant. Since pressure is constant, the work done is $P\Delta V$.

$$ W=\text{Fd} $$  {eq:fs-id1169736619217}

See the symbols as shown in [ref:import-auto-id1169738117758]. Now $F=\text{PA}$, and so

$$ W=\text{PAd}\text{.} $$  {eq:fs-id1169738176429}

Because the volume of a cylinder is its cross-sectional area $A$ times its length $d$, we see that $\text{Ad}=\Delta V$, the change in volume; thus,

$$ W=P\Delta V\text{(isobaric process).} $$  {eq:fs-id1169737994453}

Note that if $\Delta V$ is positive, then $W$ is positive, meaning that work is done *by* the gas on the outside world.
(Note that the pressure involved in this work that we’ve called    $P$ is the pressure of the gas *inside* the tank.  If we call the pressure outside the tank     ${P}_{\text{ext}}$, an expanding gas would be working *against* the external pressure; the work done would therefore be    $W=-{P}_{\text{ext}}\text{Δ}V$  (isobaric process). Many texts use this definition of work, and not the definition based on internal pressure, as the basis of the First Law of Thermodynamics.  This definition reverses the sign conventions for work, and results in a statement of the first law that becomes  $\text{Δ}{E}_{\text{int}}=Q+W$.)
It is not surprising that $W=P\Delta V$, since we have already noted in our treatment of fluids that pressure is a type of potential energy per unit volume and that pressure in fact has units of energy divided by volume. We also noted in our discussion of the ideal gas law that $\text{PV}$ has units of energy. In this case, some of the energy associated with pressure becomes work.
[ref:import-auto-id1169737742078] shows a graph of pressure versus volume (that is, a $\text{PV}$ diagram for an isobaric process. You can see in the figure that the work done is the area under the graph. This property of $\text{PV}$ diagrams is very useful and broadly applicable: *the work done on or by a system in going from one state to another equals the area under the curve on a $\text{PV}$ diagram*.

> FIGURE {fig:import-auto-id1169737742078} src=../../media/Figure_16_02_05a.jpg
> alt: The graph of pressure verses volume is shown for a constant pressure. The pressure P is along the Y axis and the volume is along the X axis. The graph is a straight line parallel to the X axis for a value of pressure P. Two points are marked on the graph at either end of the line as A and B. A is the starting point of the graph and B is the end point of graph. There is an arrow pointing from A to B. The term isobaric is written on the graph. For a length of graph equal to delta V the area of the graph is shown as a shaded area given by P times delta V which is equal to work W.
> width: 300
> caption: A graph of pressure versus volume for a constant-pressure, or isobaric, process, such as the one shown in [ref:import-auto-id1169738117758]. The area under the curve equals the work done by the gas, since $W=P\Delta V$.

> FIGURE {fig:import-auto-id1169738072579} src=../../media/Figure_16_02_06abc.jpg
> alt: The diagram in part a shows a pressure versus volume graph. The pressure is along the Y axis and the volume is along the X axis. The curve is a smooth falling curve from the highest point A to the lowest point B. The curve is segmented into small vertical rectangular sections of equal width. One of the sections is marked as width of delta V sub one along the X axis. The pressure P sub one average multiplied by delta V sub one gives the work done for that strip of the graph. Part b of the figure shows a similar graph for the reverse path. The curve now slopes upward from point A to point B. An equation in the top right of the graph reads W sub in equals the opposite of W sub out for the same path.
> width: 200
> caption: (a) A $\text{PV}$ diagram in which pressure varies as well as volume. The work done for each interval is its average pressure times the change in volume, or the area under the curve over that interval. Thus the total area under the curve equals the total work done. (b) Work must be done on the system to follow the reverse path. This is interpreted as a negative area under the curve.

We can see where this leads by considering [ref:import-auto-id1169738072579](a), which shows a more general process in which both pressure and volume change. The area under the curve is closely approximated by dividing it into strips, each having an average constant pressure ${P}_{i(\text{ave})}$. The work done is ${W}_{i}={P}_{i(\text{ave})}\Delta {V}_{i}$ for each strip, and the total work done is the sum of the ${W}_{i}$. Thus the total work done is the total area under the curve. If the path is reversed, as in [ref:import-auto-id1169738072579](b), then work is done on the system. The area under the curve in that case is negative, because $\Delta V$ is negative.
$\text{PV}$ diagrams clearly illustrate that *the work done depends on the path taken and not just the endpoints*. This path dependence is seen in [ref:import-auto-id1169738251372](a), where more work is done in going from A to C by the path via point B than by the path via point D. The vertical paths, where volume is constant, are called {term:isochoric} processes. Since volume is constant, $\Delta V=0$, and no work is done in an isochoric process. Now, if the system follows the cyclical path ABCDA, as in [ref:import-auto-id1169738251372](b), then the total work done is the area inside the loop. The negative area below path CD subtracts, leaving only the area inside the rectangle. In fact, the work done in any cyclical process (one that returns to its starting point) is the area inside the loop it forms on a $\text{PV}$ diagram, as [ref:import-auto-id1169738251372](c) illustrates for a general cyclical process. Note that the loop must be traversed in the clockwise direction for work to be positive—that is, for there to be a net work output.

> FIGURE {fig:import-auto-id1169738251372} src=../../media/Figure_16_02_07a.jpg
> alt: Part a of the diagram shows a pressure versus volume graph. The pressure is along the Y axis and the volume is along the X axis. The curve has a rectangular shape. The curve is labeled A B C D. The paths A B and D C represent isobaric processes as shown by lines pointing toward the right, and A D and B C represent isochoric processes, as shown by lines pointing vertically downward. W sub A B C is shown greater than W sub A D C. The area below the curve A B C D, filling the rectangle A B C D, and the area immediately below path D C are also shaded. Part b of the diagram shows a pressure versus volume graph. The pressure is along the Y axis and the volume is along the X axis. The curve has a rectangular shape and is labeled A B C D. The paths A B and C D represent isobaric processes; A B is a line pointing to the right, and C D is a line pointing to the left. The paths B C and D A represent isochoric processes; B C points vertically downward, and D A points vertically upward. The length of the graph along A B is marked as delta V equals five hundred centimeters cubed. The line A B on the graph is shown to have a pressure P sub A B equals one point five multiplied by ten to the power six Newtons per meter square. The line D on the graph is shown to have a pressure P sub C D equals one point two multiplied by ten to the power five Newtons per meter squared. The total work is marked as W sub tot equals W sub out plus W sub in. Part c of the diagram shows a pressure versus volume graph. The pressure is along the Y axis and the volume is along the X axis. The graph is a closed loop in the form of an ellipse with the arrow pointing in clockwise direction. The shaded area inside the ellipse represents the work done.
> width: 275
> caption: (a) The work done in going from A to C depends on path. The work is greater for the path ABC than for the path ADC, because the former is at higher pressure. In both cases, the work done is the area under the path. This area is greater for path ABC. (b) The total work done in the cyclical process ABCDA is the area inside the loop, since the negative area below CD subtracts out, leaving just the area inside the rectangle. (The values given for the pressures and the change in volume are intended for use in the example below.)  (c) The area inside any closed loop is the work done in the cyclical process. If the loop is traversed in a clockwise direction, $W$ is positive—it is work done on the outside environment. If the loop is traveled in a counter-clockwise direction, $W$ is negative—it is work that is done to the system.

:::example {ex:eip-62} Total Work Done in a Cyclical Process Equals the Area Inside the Closed Loop on a *PV* Diagram
Calculate the total work done in the cyclical process ABCDA shown in [ref:import-auto-id1169738251372](b) by the following two methods to verify that work equals the area inside the closed loop on the $\text{PV}$ diagram. (Take the data in the figure to be precise to three significant figures.) (a) Calculate the work done along each segment of the path and add these values to get the total work. (b) Calculate the area inside the rectangle ABCDA.
**Strategy**
To find the work along any path on a $\text{PV}$ diagram, you use the fact that work is pressure times change in volume, or $W=P\Delta V$. So in part (a), this value is calculated for each leg of the path around the closed loop.
**Solution for (a)**
The work along path AB is

$$ \begin{array}{lll}{W}_{\text{AB}} & = & {P}_{\text{AB}}\Delta {V}_{\text{AB}} \\ & = & (1\text{.}\text{50}×{\text{10}}^{6}\;{\text{N/m}}^{2})(5\text{.}\text{00}×{\text{10}}^{–4}\;{\text{m}}^{3})=\text{750}\;\text{J.}\end{array} $$  {eq:fs-id1169738212534}

Since the path BC is isochoric, $\Delta {V}_{\text{BC}}=0$, and so ${W}_{\text{BC}}=0$. The work along path CD is negative, since $\Delta {V}_{\text{CD}}$ is negative (the volume decreases). The work is

$$ \begin{array}{lll}{W}_{\text{CD}} & = & {P}_{\text{CD}}\Delta {V}_{\text{CD}} \\ & = & (2\text{.}\text{00}×{\text{10}}^{5}\;{\text{N/m}}^{2})(–5\text{.}\text{00}×{\text{10}}^{–4}\;{\text{m}}^{3})\;\text{=}\;\text{–}\text{100}\;\text{J}\text{.}\end{array} $$  {eq:fs-id1169737967309}

Again, since the path DA is isochoric, $\Delta {V}_{\text{DA}}=0$, and so ${W}_{\text{DA}}=0$. Now the total work is

$$ \begin{array}{lll}W & = & {W}_{\text{AB}}+{W}_{\text{BC}}+{W}_{\text{CD}}+{W}_{\text{DA}} \\ & = & \text{750 J}+0+(-\text{100}\text{J})+0=\text{650 J.}\end{array} $$  {eq:fs-id1169737734761}

**Solution for (b)**
The area inside the rectangle is its height times its width, or

$$ \begin{array}{lll}\text{area} & = & ({P}_{\text{AB}}-{P}_{\text{CD}})\Delta V \\ & = & [(\text{1.50}×{\text{10}}^{6}\;{\text{N/m}}^{2})-(2\text{.}\text{00}×{\text{10}}^{5}\;{\text{N/m}}^{2})](5\text{.}\text{00}×{\text{10}}^{-4}\;{\text{m}}^{3}) \\ & = & \text{650 J.}\end{array} $$  {eq:fs-id1169738074651}

Thus,

$$ \text{area}=\text{650}\;\text{J}=W\text{.} $$  {eq:fs-id1169738089571}

**Discussion**
The result, as anticipated, is that the area inside the closed loop equals the work done. The area is often easier to calculate than is the work done along each path. It is also convenient to visualize the area inside different curves on $\text{PV}$ diagrams in order to see which processes might produce the most work. Recall that work can be done to the system, or by the system, depending on the sign of $W$. A positive $W$ is work that is done by the system on the outside environment; a negative $W$ represents work done by the environment on the system.
[ref:import-auto-id1169736581959](a) shows two other important processes on a $\text{PV}$ diagram. For comparison, both are shown starting from the same point A. The upper curve ending at point B is an {term:isothermal} process—that is, one in which temperature is kept constant. If the gas behaves like an ideal gas, as is often the case, and if no phase change occurs, then $\text{PV}=\text{nRT}$. Since $T$ is constant, $\text{PV}$ is a constant for an isothermal process. We ordinarily expect the temperature of a gas to decrease as it expands, and so we correctly suspect that heat transfer must occur from the surroundings to the gas to keep the temperature constant during an isothermal expansion. To show this more rigorously for the special case of a monatomic ideal gas, we note that the average kinetic energy of an atom in such a gas is given by

$$ \frac{1}{2}m{\bar{v}}^{2}=\frac{3}{2}\text{kT}\text{.} $$  {eq:fs-id1169737806404}

The kinetic energy of the atoms in a monatomic ideal gas is its only form of internal energy, and so its total internal energy ${E}_{\text{int}}$ is

$$ {E}_{\text{int}}=N\frac{1}{2}m{\bar{v}}^{2}=\frac{3}{2}\text{NkT},\text{(monatomic ideal gas),} $$  {eq:fs-id1169737796383}

where $N$ is the number of atoms in the gas. This relationship means that the internal energy of an ideal monatomic gas is constant during an isothermal process—that is, $\Delta {E}_{\text{int}}=0$. If the internal energy does not change, then the net heat transfer into the gas must equal the net work done by the gas. That is, because $\Delta {E}_{\text{int}}=Q-W=0$ here, $Q=W$. We must have just enough heat transfer to replace the work done. An isothermal process is inherently slow, because heat transfer occurs continuously to keep the gas temperature constant at all times and must be allowed to spread through the gas so that there are no hot or cold regions.
Note that diatomic gases, such as those in air, have different formulas for average kinetic energy of an atom and total internal energy.
Also shown in [ref:import-auto-id1169736581959](a) is a curve AC for an {term:adiabatic} process, defined to be one in which there is no heat transfer—that is, $Q=0$. Processes that are nearly adiabatic can be achieved either by using very effective insulation or by performing the process so fast that there is little time for heat transfer. Temperature must decrease during an adiabatic expansion process, since work is done at the expense of internal energy:

$$ {E}_{\text{int}}=\frac{3}{2}\text{NkT}\text{.} $$  {eq:fs-id1169737980933}

(You might have noted that a gas released into atmospheric pressure from a pressurized cylinder is substantially colder than the gas in the cylinder.) In fact, because $Q=0,\Delta {E}_{\text{int}}=-W$ for an adiabatic process. Lower temperature results in lower pressure along the way, so that curve AC is lower than curve AB, and less work is done. If the path ABCA could be followed by cooling the gas from B to C at constant volume (isochorically), [ref:import-auto-id1169736581959](b), there would be a net work output.

> FIGURE {fig:import-auto-id1169736581959} src=../../media/Figure_16_02_08a.jpg
> alt: Part a of the figure shows a graph for pressure versus volume. The pressure is along the y axis and the volume is along the x axis. There are two curves. The first curve begins at point A and falls smoothly downward to point B. The graph is shown for an isothermal process. The second curve also begins at point A but falls below the first curve and ends at point C vertically below point B. This graph is shown for an adiabatic process. A line joins point B and C to meet on the X axis. Also a line is drawn from point A to meet the X axis. The area under both the curves is shaded. The graph in figure b is similar to the graph in figure a. Only the directions of the curves are changed. The graph begins from A and moves downward to point B. Then from point B the curve drops vertically downward to C. From point C the graph has a smooth rise back to point A. All directions represented using arrows.
> width: 200
> caption: (a) The upper curve is an isothermal process ($\text{Δ}T=0$), whereas the lower curve is an adiabatic process ($Q=0$). Both start from the same point A, but the isothermal process does more work than the adiabatic because heat transfer into the gas takes place to keep its temperature constant. This keeps the pressure higher all along the isothermal path than along the adiabatic path, producing more work. The adiabatic path thus ends up with a lower pressure and temperature at point C, even though the final volume is the same as for the isothermal process. (b) The cycle ABCA produces a net work output.

:::

## Reversible Processes
Both isothermal and adiabatic processes such as shown in [ref:import-auto-id1169736581959] are reversible in principle. A {term:reversible process} is one in which both the system and its environment can return to exactly the states they were in by following the reverse path. The reverse isothermal and adiabatic paths are BA and CA, respectively. Real macroscopic processes are never exactly reversible. In the previous examples, our system is a gas (like that in [ref:import-auto-id1169738117758]), and its environment is the piston, cylinder, and the rest of the universe. If there are any energy-dissipating mechanisms, such as friction or turbulence, then heat transfer to the environment occurs for either direction of the piston. So, for example, if the path BA is followed and there is friction, then the gas will be returned to its original state but the environment will not—it will have been heated in both directions. Reversibility requires the direction of heat transfer to reverse for the reverse path. Since dissipative mechanisms cannot be completely eliminated, real processes cannot be reversible.
There must be reasons that real macroscopic processes cannot be reversible. We can imagine them going in reverse. For example, heat transfer occurs spontaneously from hot to cold and never spontaneously the reverse. Yet it would not violate the first law of thermodynamics for this to happen. In fact, all spontaneous processes, such as bubbles bursting, never go in reverse. There is a second thermodynamic law that forbids them from going in reverse. When we study this law, we will learn something about nature and also find that such a law limits the efficiency of heat engines. We will find that heat engines with the greatest possible theoretical efficiency would have to use reversible processes, and even they cannot convert all heat transfer into doing work. [ref:import-auto-id1169738075975] summarizes the simpler thermodynamic processes and their definitions.

> TABLE {tab:import-auto-id1169738075975} cols=2
> title: Summary of Simple Thermodynamic Processes
> summary: The table shows a summary of simple thermodynamic processes. There are two columns. The first column represents various thermodynamic process and the second column has an explanation for each.

|  |  |
| --- | --- |
| Isobaric | Constant pressure $W=P\Delta V$ |
| Isochoric | Constant volume $W=0$ |
| Isothermal | Constant temperature $Q=W$ |
| Adiabatic | No heat transfer $Q=0$ |

:::note [interactive] States of Matter

Watch different types of molecules form a solid, liquid, or gas in [this simulation](https://openstax.org/l/02statematter). Add or remove heat and watch the phase change. Change the temperature or volume of a container and see a pressure-temperature diagram respond in real time. Relate the interaction potential to the forces between molecules.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2539531} type=ap-test-prep 
PROBLEM:
In [ref:import-auto-id1169737882796], how much work is done by the system in process AB?
(a) 4.5 × 10<sup>3</sup> J
(b) 6.0 × 10<sup>3</sup> J
(c) 6.9 × 10<sup>3</sup> J
(d) 7.8 × 10<sup>3</sup> J
SOLUTION:
(c)
:::

:::exercise {fs-id2328663} type=ap-test-prep 
PROBLEM:
Consider process CD in [ref:import-auto-id1169737882796]. Does this represent work done by or on the system, and how much?
:::

:::exercise {fs-id2200650} type=ap-test-prep 
PROBLEM:
A thermodynamic process begins at 1.2 × 10<sup>6</sup> N/m<sup>2</sup> and 5 L. The state then changes to 1.2 × 10<sup>6</sup> N/m<sup>2</sup> and 2 L. Next it becomes 2.2 × 10<sup>6</sup> N/m<sup>2</sup> and 2 L. The next change is 2.2 × 10<sup>6</sup> N/m<sup>2</sup> and 5 L. Finally, the system ends at 1.0 × 10<sup>6</sup> N/m<sup>2</sup> and 5 L.
On [ref:import-auto-id1169737933362], this process is best described by
(a) EFCDB
(b) DEFCD
(c) CFABC
(d) CFABD
SOLUTION:
(d)
:::

:::exercise {fs-id2150466} type=ap-test-prep 
PROBLEM:
The first step of a thermodynamic cycle is an isobaric process with increasing volume. The second is an isochoric process, with decreasing pressure. The last step may be either an isothermal or adiabatic process, ending at the starting point of the isobaric process. Sketch a graph of these two possibilities, and comment on which will have greater net work per cycle.
:::

:::exercise {fs-id1738036} type=ap-test-prep 
PROBLEM:
In [ref:import-auto-id1169737882796], which of the following cycles has the greatest net work output?
(a) ABDA
(b) BCDB
(c) (a) and (b) are equal
(d) ADCBA
SOLUTION:
(a)
:::

:::exercise {fs-id2537938} type=ap-test-prep 
PROBLEM:
Look at [ref:import-auto-id1169737933362], and assign values to the three pressures and two volumes given in the graph. Then calculate the net work for the cycle ABCFEDCFA using those values. How does this work compare to the heat output or input of the system? Which value(s) would you change to maximize the net work per cycle?
:::

## Section Summary {section:section-summary}
- One of the important implications of the first law of thermodynamics is that machines can be harnessed to do work that humans previously did by hand or by external energy supplies such as running water or the heat of the Sun. A machine that uses heat transfer to do work is known as a heat engine.
- There are several simple processes, used by heat engines, that flow from the first law of thermodynamics. Among them are the isobaric, isochoric, isothermal and adiabatic processes.
- These processes differ from one another based on how they affect pressure, volume, temperature, and heat transfer.
- If the work done is performed on the outside environment, work ($W$) will be a positive value. If the work done is done to the heat engine system, work ($W$) will be a negative value.
- Some thermodynamic processes, including isothermal and adiabatic processes, are reversible in theory; that is, both the thermodynamic system and the environment can be returned to their initial states. However, because of loss of energy owing to the second law of thermodynamics, complete reversibility does not work in practice.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1169737813337} type=conceptual-questions 
PROBLEM:
A great deal of effort, time, and money has been spent in the quest for the so-called perpetual-motion machine, which is defined as a hypothetical machine that operates or produces useful work indefinitely and/or a hypothetical machine that produces more work or energy than it consumes. Explain, in terms of heat engines and the first law of thermodynamics, why or why not such a machine is likely to be constructed.
:::

:::exercise {fs-id1169737777774} type=conceptual-questions 
PROBLEM:
One method of converting heat transfer into doing work is for heat transfer into a gas to take place, which expands, doing work on a piston, as shown in the figure below. (a) Is the heat transfer converted directly to work in an isobaric process, or does it go through another form first? Explain your answer. (b) What about in an isothermal process? (c) What about in an adiabatic process (where heat transfer occurred prior to the adiabatic process)?

> FIGURE {fig:fs-id1169737705524} src=../../media/Figure_16_02_09.jpg
> alt: Figure a shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The heat Q sub in is shown to be transferred to the gas in the cylinder as shown by a bold arrow toward it. The force of the gas on the moving cylinder with the piston is shown as F equals P times A shown as a vector arrow pointing toward the right. The change in internal energy is marked in the diagram as delta E sub int sub a equals Q sub in. Figure b shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The force of the gas has moved the cylinder with the piston by a distance d toward the right. The change in internal energy is marked in the diagram as delta E sub int sub b equals negative W sub out. The piston is shown to have done work by change in position, marked as F d equal to W sub out. Figure c shows a piston attached to a movable cylinder which is attached to the right of another gas filled cylinder. The piston attached to the cylinder is shown to reach back to the initial position shown in figure a. The distance d is traveled back and heat Q sub out is shown to leave the system as represented by an outward arrow. The force driving backward is shown as a vector arrow pointing to the left, labeled F prime. F prime is shown less than F. The work done by the force F prime is shown by the equation W sub in equal to F prime times d.
> width: 200
> caption: 

:::

:::exercise {fs-id1169738164305} type=conceptual-questions 
PROBLEM:
Would the previous question make any sense for an isochoric process? Explain your answer.
:::

:::exercise {fs-id1169738243863} type=conceptual-questions 
PROBLEM:
We ordinarily say that $\Delta {E}_{\text{int}}=0$ for an isothermal process. Does this assume no phase change takes place? Explain your answer.
:::

:::exercise {fs-id1169737927114} type=conceptual-questions 
PROBLEM:
The temperature of a rapidly expanding gas decreases. Explain why in terms of the first law of thermodynamics. (Hint: Consider whether the gas does work and whether heat transfer occurs rapidly into the gas through conduction.)
:::

:::exercise {fs-id1169736657271} type=conceptual-questions 
PROBLEM:
Which cyclical process represented by the two closed loops, ABCFA and ABDEA, on the $\text{PV}$ diagram in the figure below produces the greatest *net* work? Is that process also the one with the smallest work input required to return it to point A? Explain your responses.

> FIGURE {fig:import-auto-id1169737933362} src=../../media/Figure_16_02_10a.jpg
> alt: The figure shows a graph of pressure versus volume. The pressure is along the Y axis and the volume is plotted along the X axis. The graph consists of a rectangle, A B C F, superimposed on a slightly larger rectangle, A B D E. The lines A B, C F, and D E are parallel to the X axis and lines B C D and A F E are parallel to the Y axis.
> width: 274
> caption: The two cyclical processes shown on this $PV$  diagram start with and return the system to the conditions at point A, but they follow different paths and produce different amounts of work.

:::

:::exercise {fs-id1169737980711} type=conceptual-questions 
PROBLEM:
A real process may be nearly adiabatic if it occurs over a very short time. How does the short time span help the process to be adiabatic?
:::

:::exercise {fs-id1169737826122} type=conceptual-questions 
PROBLEM:
It is unlikely that a process can be isothermal unless it is a very slow process. Explain why. Is the same true for isobaric and isochoric processes? Explain your answer.
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id1169738045355} type=problems-exercises 
PROBLEM:
A car tire contains $0\text{.}\text{0380}{m}^{3}$ of nitrogen at a gauge pressure of $2\text{.}\text{20}×{\text{10}}^{5}\;{\text{N/m}}^{2}$ (about 32 psi). How much more internal energy does this gas have than the same volume has at zero gauge pressure (which is equivalent to normal atmospheric pressure)? (Use ${E}_{\text{int}}=\frac{5}{2}NkT$ for the internal energy of nitrogen, a diatomic gas.)
SOLUTION:
$2.09\times {\text{10}}^{4}\;\text{J}$
:::

:::exercise {fs-id1169737805440} type=problems-exercises 
PROBLEM:
A helium-filled rigid ball has a gauge pressure of 0.200 atm and a volume of 10.0 L. How much greater is the internal energy of the helium in the ball than it would be at zero gauge pressure?
:::

:::exercise {fs-id1169737713001} type=problems-exercises 
PROBLEM:
Steam to drive an old-fashioned steam locomotive is supplied at a constant gauge pressure of $1\text{.}\text{75}×{\text{10}}^{6}\;{\text{N/m}}^{2}$ (about 250 psi) to a piston with a 0.200-m radius. (a) By calculating $P\text{Δ}V$, find the work done by the steam when the piston moves 0.800 m. Note that this is the net work output, since gauge pressure is used. (b) Now find the amount of work by calculating the force exerted times the distance traveled. Is the answer the same as in part (a)?
SOLUTION:
(a)    $W=P\text{Δ}V=1\text{.}\text{76}\times {\text{10}}^{5}\;\text{J}$
(b) $W=\text{Fd}=1\text{.}\text{76}\times {\text{10}}^{5}\;\text{J}$. Yes, the answer is the same.
:::

:::exercise {fs-id1169737780474} type=problems-exercises 
PROBLEM:
A hand-driven tire pump has a piston with a 2.50-cm diameter and a maximum stroke of 30.0 cm. (a) How much work do you do in one stroke if the average gauge pressure is $2\text{.}\text{40}×{\text{10}}^{5}\;{\text{N/m}}^{2}$ (about 35 psi)? (b) What average force do you exert on the piston, neglecting friction and gravitational force?
:::

:::exercise {fs-id1169737041721} type=problems-exercises 
PROBLEM:
Calculate the net work output of a heat engine following path ABCDA in the figure below.

> FIGURE {fig:import-auto-id1169737882796} src=../../media/Figure_16_02_11a-3d61.jpg
> alt: A graph is shown of pressure versus volume, with pressure on the Y axis and volume on the X axis. A parallelogram connects four points are on the graph, A, B, C, and D. A is at y equals 2 point 6 times 10 to the six newtons per meter squared and x equals 1 point zero times ten to the minus three meters cubed. A downward sloping line connects A to B. B is at y equals 2 point zero, x equals four. A vertical line connects B to C. C is at y equals zero point 6, x equals 4. A line connects C to D. D is at y equals one point zero, x equals one point zero. A vertical line connects D to A. A diagonal line also connects D and B.
> caption: 

SOLUTION:
$W=4\text{.}5\times {\text{10}}^{3}\;\text{J}$
:::

:::exercise {fs-id1169737002182} type=problems-exercises 
PROBLEM:
What is the net work output of a heat engine that follows path ABDA in the figure above, with a straight line from B to D? Why is the work output less than for path ABCDA? Explicitly show how you follow the steps in the [ref:fs-id1169738116696](module:m42236)Problem-Solving Strategies for Thermodynamics.
:::

:::exercise {fs-id1169737818589} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
What is wrong with the claim that a cyclical heat engine does 4.00 kJ of work on an input of 24.0 kJ of heat transfer while 16.0 kJ of heat transfers to the environment?
SOLUTION:
$W$ is not equal to the difference between the heat input and the heat output.
:::

:::exercise {fs-id1169738036310} type=problems-exercises 
PROBLEM:
(a) A cyclical heat engine, operating between temperatures of $\text{450º C}$ and $\text{150º C}$ produces 4.00 MJ of work on a heat transfer of 5.00 MJ into the engine. How much heat transfer occurs to the environment? (b) What is unreasonable about the engine? (c) Which premise is unreasonable?
:::

:::exercise {fs-id1169737860358} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a car’s gasoline engine. Construct a problem in which you calculate the maximum efficiency this engine can have. Among the things to consider are the effective hot and cold reservoir temperatures. Compare your calculated efficiency with the actual efficiency of car engines.
:::

:::exercise {fs-id1169737781729} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a car trip into the mountains. Construct a problem in which you calculate the overall efficiency of the car for the trip as a ratio of kinetic and potential energy gained to fuel consumed. Compare this efficiency to the thermodynamic efficiency quoted for gasoline engines and discuss why the thermodynamic efficiency is so much greater. Among the factors to be considered are the gain in altitude and speed, the mass of the car, the distance traveled, and typical fuel economy.
:::

## Glossary
- {def} **heat engine**: a machine that uses heat transfer to do work
- {def} **isobaric process**: constant-pressure process in which a gas does work
- {def} **isochoric process**: a constant-volume process
- {def} **isothermal process**: a constant-temperature process
- {def} **adiabatic process**: a process in which no heat transfer takes place
- {def} **reversible process**: a process in which both the heat engine system and the external environment theoretically can be returned to their original states

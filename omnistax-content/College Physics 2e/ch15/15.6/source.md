# Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define entropy and calculate the increase of entropy in a system with reversible and irreversible processes.
- Explain the expected fate of the universe in entropic terms.
- Calculate the increasing disorder of a system.

> FIGURE {fig:import-auto-id1169737779231} src=../../media/Figure_16_06_01.jpg
> alt: Photograph shows a glass of a beverage with ice cubes and a straw, placed on a paper napkin on the table. There is a piece of sliced lemon at the edge of the glass. There is condensate around the outside surface of the glass, giving the appearance that the ice is melting.
> width: 200
> caption: The ice in this drink is slowly melting. Eventually the liquid will reach thermal equilibrium, as predicted by the second law of thermodynamics. (credit: Jon Sullivan, PDPhoto.org)

There is yet another way of expressing the second law of thermodynamics. This version relates to a concept called {term:entropy}. By examining it, we shall see that the directions associated with the second law—heat transfer from hot to cold, for example—are related to the tendency in nature for systems to become disordered and for less energy to be available for use as work. The entropy of a system can in fact be shown to be a measure of its disorder and of the unavailability of energy to do work.

:::note [] Making Connections: Entropy, Energy, and Work

Recall that the simple definition of energy is the ability to do work. Entropy is a measure of how much energy is not available to do work. Although all forms of energy are interconvertible, and all can be used to do work, it is not always possible, even in principle, to convert the entire available energy into work. That unavailable energy is of interest in thermodynamics, because the field of thermodynamics arose from efforts to convert heat to work.
:::
We can see how entropy is defined by recalling our discussion of the Carnot engine. We noted that for a Carnot cycle, and hence for any reversible processes, ${Q}_{\text{c}}/{Q}_{\text{h}}={T}_{\text{c}}/{T}_{\text{h}}$. Rearranging terms yields

$$ \frac{{Q}_{\text{c}}}{{T}_{\text{c}}}=\frac{{Q}_{\text{h}}}{{T}_{\text{h}}} $$  {eq:eip-428}

for any reversible process. ${Q}_{\text{c}}$ and ${Q}_{\text{h}}$ are absolute values of the heat transfer at temperatures ${T}_{\text{c}}$ and ${T}_{\text{h}}$, respectively. This ratio of $Q/T$ is defined to be the {term:change in entropy} $\Delta S$ for a reversible process,

$$ \Delta S={(\frac{Q}{T})}_{\text{rev}}\text{,} $$  {eq:eip-563}

where $Q$ is the heat transfer, which is positive for heat transfer into and negative for heat transfer out of, and $T$ is the absolute temperature at which the reversible process takes place. The SI unit for entropy is joules per kelvin (J/K). If temperature changes during the process, then it is usually a good approximation (for small changes in temperature) to take $T$ to be the average temperature, avoiding the need to use integral calculus to find $\Delta S$.
The definition of $\Delta S$ is strictly valid only for reversible processes, such as used in a Carnot engine. However, we can find $\Delta S$ precisely even for real, irreversible processes. The reason is that the entropy $s$ of a system, like internal energy ${E}_{\text{int}}$, depends only on the state of the system and not how it reached that condition. Entropy is a property of state. Thus the change in entropy $\Delta S$ of a system between state 1 and state 2 is the same no matter how the change occurs. We just need to find or imagine a reversible process that takes us from state 1 to state 2 and calculate $\Delta S$ for that process. That will be the change in entropy for any process going from state 1 to state 2. (See [ref:import-auto-id1169738050955].)

> FIGURE {fig:import-auto-id1169738050955} src=../../media/Figure_16_06_02.jpg
> alt: The diagram shows a schematic representation of a system that goes from state one with entropy S sub one to state two with entropy S sub two. The two states are shown as two circles drawn a distance apart. Two arrows represent two different processes to take the system from state one to state two. A straight arrow pointing from state one to state two shows a reversible process. The change in entropy for this process is given by delta S equals Q divided by T. The second process is marked as a curving arrow from state one to state two, showing an irreversible process. The change in entropy for this process is given by delta S sub irreversible equals delta S sub reversible equals S sub two minus S sub one.
> width: 300
> caption: When a system goes from state 1 to state 2, its entropy changes by the same amount $\Delta S$, whether a hypothetical reversible path is followed or a real irreversible path is taken.

Now let us take a look at the change in entropy of a Carnot engine and its heat reservoirs for one full cycle. The hot reservoir has a loss of entropy $\Delta {S}_{\text{h}}=-{Q}_{\text{h}}/{T}_{\text{h}}$, because heat transfer occurs out of it (remember that when heat transfers out, then $Q$ has a negative sign). The cold reservoir has a gain of entropy $\Delta {S}_{\text{c}}={Q}_{\text{c}}/{T}_{\text{c}}$, because heat transfer occurs into it. (We assume the reservoirs are sufficiently large that their temperatures are constant.) So the total change in entropy is

$$ \Delta {S}_{\text{tot}}=\Delta {S}_{\text{h}}+\Delta {S}_{\text{c}}\text{.} $$  {eq:eip-20}

Thus, since we know that ${Q}_{\text{h}}/{T}_{\text{h}}={Q}_{\text{c}}/{T}_{\text{c}}$ for a Carnot engine,

$$ \Delta {S}_{\text{tot}}\text{=–}\frac{{Q}_{\text{h}}}{{T}_{\text{h}}}+\frac{{Q}_{\text{c}}}{{T}_{\text{c}}}=0\text{.} $$  {eq:eip-95}

This result, which has general validity, means that *the total change in entropy for a system in any reversible process is zero.*
The entropy of various parts of the system may change, but the total change is zero. Furthermore, the system does not affect the entropy of its surroundings, since heat transfer between them does not occur. Thus the reversible process changes neither the total entropy of the system nor the entropy of its surroundings. Sometimes this is stated as follows: *Reversible processes do not affect the total entropy of the universe.* Real processes are not reversible, though, and they do change total entropy. We can, however, use hypothetical reversible processes to determine the value of entropy in real, irreversible processes. The following example illustrates this point.

:::example {ex:fs-id1169738080394} Entropy Increases in an Irreversible (Real) Process
Spontaneous heat transfer from hot to cold is an irreversible process. Calculate the total change in entropy if 4000 J of heat transfer occurs from a hot reservoir at ${T}_{\text{h}}=\text{600 K}(\text{327º C})$ to a cold reservoir at ${T}_{\text{c}}=\text{250 K}(-\text{23º C})$, assuming there is no temperature change in either reservoir. (See [ref:import-auto-id1169738087634].)
**Strategy**
How can we calculate the change in entropy for an irreversible process when $\Delta {S}_{\text{tot}}=\Delta {S}_{\text{h}}+\Delta {S}_{\text{c}}$ is valid only for reversible processes? Remember that the total change in entropy of the hot and cold reservoirs will be the same whether a reversible or irreversible process is involved in heat transfer from hot to cold. So we can calculate the change in entropy of the hot reservoir for a hypothetical reversible process in which 4000 J of heat transfer occurs from it; then we do the same for a hypothetical reversible process in which 4000 J of heat transfer occurs to the cold reservoir. This produces the same changes in the hot and cold reservoirs that would occur if the heat transfer were allowed to occur irreversibly between them, and so it also produces the same changes in entropy.
**Solution**
We now calculate the two changes in entropy using $\Delta {S}_{\text{tot}}=\Delta {S}_{\text{h}}+\Delta {S}_{\text{c}}$. First, for the heat transfer from the hot reservoir,

$$ \Delta {S}_{\text{h}}=\frac{-{Q}_{\text{h}}}{{T}_{\text{h}}}=\frac{-\text{4000 J}}{\text{600 K}}=-6\text{.}\text{67 J/K}\text{.} $$  {eq:eip-453}

And for the cold reservoir,

$$ \Delta {S}_{\text{c}}=\frac{{Q}_{\text{c}}}{{T}_{\text{c}}}=\frac{\text{4000 J}}{\text{250 K}}=\text{16}\text{.}0 J/K\text{.} $$  {eq:eip-688}

Thus the total is

$$ \begin{array}{lll}\Delta {S}_{\text{tot}} & = & \Delta {S}_{\text{h}}+\Delta {S}_{\text{c}} \\ & = & (-6\text{.}\text{67 +16}\text{.}0)\;\text{J/K} \\ & = & \text{9.33 J/K.}\end{array} $$  {eq:eip-462}

**Discussion**
There is an *increase* in entropy for the system of two heat reservoirs undergoing this irreversible heat transfer. We will see that this means there is a loss of ability to do work with this transferred energy. Entropy has increased, and energy has become unavailable to do work.

> FIGURE {fig:import-auto-id1169738087634} src=../../media/Figure_16_06_03.jpg
> alt: Part a of the figure shows the irreversible heat transfer from the hot system to the cold system. The hot reservoir at temperature T sub h is represented by a rectangular section in the top and the cold reservoir at temperature T sub c is shown as a rectangular section at the bottom. Heat Q is shown to flow from hot reservoir to cold reservoir as shown by a continuous bold arrow pointing downward. The heat is a direct transfer from T sub h to T sub c. The entropy change delta S for an irreversible process is shown equal to entropy change delta S for a reversible process. Part b of the figure shows two reversible heat transfers from the hot system to the cold system. The hot reservoir at temperature T sub h is represented by a rectangular section in the top and the cold reservoir at temperature T sub c is shown as a rectangular section at the bottom. Heat Q is shown to flow out of the hot reservoir, and an equal amount of heat Q is shown to flow into the cold reservoir as shown by two arrows representing two reversible processes and not a direct transfer from T sub h to T sub c. The entropy change delta S for an irreversible process is shown equal to entropy change delta S for a reversible process. 
> width: 350
> caption: (a) Heat transfer from a hot object to a cold one is an irreversible process that produces an overall increase in entropy. (b) The same final state and, thus, the same change in entropy is achieved for the objects if reversible heat transfer processes occur between the two objects whose temperatures are the same as the temperatures of the corresponding objects in the irreversible process.

:::
It is reasonable that entropy increases for heat transfer from hot to cold. Since the change in entropy is $Q/T$, there is a larger change at lower temperatures. The decrease in entropy of the hot object is therefore less than the increase in entropy of the cold object, producing an overall increase, just as in the previous example. This result is very general:
*There is an increase in entropy for any system undergoing an irreversible process.*
With respect to entropy, there are only two possibilities: entropy is constant for a reversible process, and it increases for an irreversible process. There is a fourth version of {term:the second law of thermodynamics stated in terms of entropy}:
*The total entropy of a system either increases or remains constant in any process; it never decreases.*
For example, heat transfer cannot occur spontaneously from cold to hot, because entropy would decrease.
Entropy is very different from energy. Entropy is *not* conserved but increases in all real processes. Reversible processes (such as in Carnot engines) are the processes in which the most heat transfer to work takes place and are also the ones that keep entropy constant. Thus we are led to make a connection between entropy and the availability of energy to do work.

## Entropy and the Unavailability of Energy to Do Work
What does a change in entropy mean, and why should we be interested in it? One reason is that entropy is directly related to the fact that not all heat transfer can be converted into work. The next example gives some indication of how an increase in entropy results in less heat transfer into work.

:::example {ex:fs-id1169737762788} Less Work is Produced by a Given Heat Transfer When Entropy Change is Greater
(a) Calculate the work output of a Carnot engine operating between temperatures of 600 K and 100 K for 4000 J of heat transfer to the engine. (b) Now suppose that the 4000 J of heat transfer occurs first from the 600 K reservoir to a 250 K reservoir (without doing any work, and this produces the increase in entropy calculated above) before transferring into a Carnot engine operating between 250 K and 100 K. What work output is produced? (See [ref:import-auto-id1169737787906].)
**Strategy**
In both parts, we must first calculate the Carnot efficiency and then the work output.
**Solution (a)**
The Carnot efficiency is given by

$$ {\text{Eff}}_{\text{C}}=1-\frac{{T}_{\text{c}}}{{T}_{\text{h}}}\text{.} $$  {eq:eip-262}

Substituting the given temperatures yields

$$ {\text{Eff}}_{\text{C}}=1-\frac{\text{100 K}}{\text{600 K}}=0\text{.}\text{833}\text{.} $$  {eq:eip-29}

Now the work output can be calculated using the definition of efficiency for any heat engine as given by

$$ \text{Eff}=\frac{W}{{Q}_{\text{h}}}\text{.} $$  {eq:eip-52}

Solving for $W$ and substituting known terms gives

$$ \begin{array}{lll}W & = & {\text{Eff}}_{\text{C}}{Q}_{\text{h}} \\ & = & (0.833)(\text{4000}\;\text{J})=\text{3333 J.}\end{array} $$  {eq:eip-112}

**Solution (b)**
Similarly,

$$ {\text{Eff}'}_{\text{C}}=1-\frac{{T}_{\text{c}}}{{\text{T′}}_{\text{c}}}=\text{1}-\frac{\text{100 K}}{\text{250 K}}=0.600, $$  {eq:eip-697}

so that

$$ \begin{array}{lll}W & = & {\text{Eff}'}_{\text{C}}{Q}_{h} \\ & = & (0.600)(\text{4000 J})=\text{2400 J.}\end{array} $$  {eq:eip-251}

**Discussion**
There is 933 J less work from the same heat transfer in the second process. This result is important. The same heat transfer into two perfect engines produces different work outputs, because the entropy change differs in the two cases. In the second case, entropy is greater and less work is produced. Entropy is associated with the *un*availability of energy to do work.

> FIGURE {fig:import-auto-id1169737787906} src=../../media/Figure_16_06_04.jpg
> alt: Part a of the diagram shows a schematic diagram of a Carnot engine shown as a circle. The hot reservoir is shown as a rectangular section above the circle at temperature T sub h equals six hundred Kelvin. The cold reservoir is shown as a rectangular section below the circle at temperature T sub c equals one hundred Kelvin. A heat Q sub h from the hot reservoir equals four thousand joules is shown to enter the engine as shown as a bold arrow toward the circle from the hot reservoir. A part of it leaves as work W equals three thousand three hundred thirty three joules from the engine. The remaining heat Q sub c equals six hundred sixty seven joules is returned back to the cold reservoir as shown by a bold arrow toward it. Part b of the diagram shows a schematic diagram of a Carnot engine shown as a circle. This engine is shown to have a greater entropy level. An initial heat transfer of four thousand joules occurs from a hot reservoir shown as a rectangular section above the circle toward left at temperature T sub h equals six hundred Kelvin to another rectangular section above the circle at temperature T sub h prime equals two fifty Kelvin. The cold reservoir is shown as a rectangular section below the circle at temperature T sub c prime equals one hundred Kelvin. A heat Q sub h prime from the hot reservoir equals four thousand joules is shown to enter the engine as shown as a bold arrow toward the circle from this hot reservoir. A part of it leaves as work W equals two thousand four hundred joules from the engine. The remaining heat Q sub c equals one thousand six hundred joules is returned back to the cold reservoir as shown by a bold arrow toward it.
> width: 400
> caption: (a) A Carnot engine working at between 600 K and 100 K has 4000 J of heat transfer and performs 3333 J of work. (b) The 4000 J of heat transfer occurs first irreversibly to a 250 K reservoir and then goes into a Carnot engine. The increase in entropy caused by the heat transfer to a colder reservoir results in a smaller work output of 2400 J. There is a permanent loss of 933 J of energy for the purpose of doing work.

:::
When entropy increases, a certain amount of energy becomes *permanently* unavailable to do work. The energy is not lost, but its character is changed, so that some of it can never be converted to doing work—that is, to an organized force acting through a distance. For instance, in the previous example, 933 J less work was done after an increase in entropy of 9.33 J/K occurred in the 4000 J heat transfer from the 600 K reservoir to the 250 K reservoir. It can be shown that the amount of energy that becomes unavailable for work is

$$ {W}_{\text{unavail}}=\Delta S⋅{T}_{0}\text{,} $$  {eq:eip-742}

where ${T}_{0}$ is the lowest temperature utilized. In the previous example,

$$ {W}_{\text{unavail}}=(9\text{.}\text{33 J/K})(\text{100 K})=933 J $$  {eq:eip-487}

as found.

## Heat Death of the Universe: An Overdose of Entropy
In the early, energetic universe, all matter and energy were easily interchangeable and identical in nature. Gravity played a vital role in the young universe. Although it may have *seemed* disorderly, and therefore, superficially entropic, in fact, there was enormous potential energy available to do work—all the future energy in the universe.
As the universe matured, temperature differences arose, which created more opportunity for work. Stars are hotter than planets, for example, which are warmer than icy asteroids, which are warmer still than the vacuum of the space between them.
Most of these are cooling down from their usually violent births, at which time they were provided with energy of their own—nuclear energy in the case of stars, volcanic energy on Earth and other planets, and so on. Without additional energy input, however, their days are numbered.
As entropy increases, less and less energy in the universe is available to do work. On Earth, we still have great stores of energy such as fossil and nuclear fuels; large-scale temperature differences, which can provide wind energy; geothermal energies due to differences in temperature in Earth’s layers; and tidal energies owing to our abundance of liquid water. As these are used, a certain fraction of the energy they contain can never be converted into doing work. Eventually, all fuels will be exhausted, all temperatures will equalize, and it will be impossible for heat engines to function, or for work to be done.
Entropy increases in a closed system, such as the universe. But in parts of the universe, for instance, in the Solar system, it is not a locally closed system. Energy flows from the Sun to the planets, replenishing Earth’s stores of energy. The Sun will continue to supply us with energy for about another five billion years. We will enjoy direct solar energy, as well as side effects of solar energy, such as wind power and biomass energy from photosynthetic plants. The energy from the Sun will keep our water at the liquid state, and the Moon’s gravitational pull will continue to provide tidal energy. But Earth’s geothermal energy will slowly run down and won’t be replenished.
But in terms of the universe, and the very long-term, very large-scale picture, the entropy of the universe is increasing, and so the availability of energy to do work is constantly decreasing. Eventually, when all stars have died, all forms of potential energy have been utilized, and all temperatures have equalized (depending on the mass of the universe, either at a very high temperature following a universal contraction, or a very low one, just before all activity ceases) there will be no possibility of doing work.
Either way, the universe is destined for thermodynamic equilibrium—maximum entropy. This is often called the *heat death of the universe*, and will mean the end of all activity. However, whether the universe contracts and heats up, or continues to expand and cools down, the end is not near. Calculations of black holes suggest that entropy can easily continue for at least ${\text{10}}^{\text{100}}$ years.

## Order to Disorder
Entropy is related not only to the unavailability of energy to do work—it is also a measure of disorder. This notion was initially postulated by Ludwig Boltzmann in the 1800s. For example, melting a block of ice means taking a highly structured and orderly system of water molecules and converting it into a disorderly liquid in which molecules have no fixed positions. (See [ref:import-auto-id1169737811865].) There is a large increase in entropy in the process, as seen in the following example.

:::example {ex:fs-id1169737860640} Entropy Associated with Disorder
Find the increase in entropy of 1.00 kg of ice originally at $0º C$ that is melted to form water at $0º C$.
**Strategy**
As before, the change in entropy can be calculated from the definition of $\Delta S$ once we find the energy $Q$ needed to melt the ice.
**Solution**
The change in entropy is defined as:

$$ ΔS=\frac{Q}{T}\text{.} $$  {eq:eip-58}

Here $Q$ is the heat transfer necessary to melt 1.00 kg of ice and is given by

$$ Q={\text{mL}}_{\text{f}\text{,}} $$  {eq:eip-509}

where $m$ is the mass and ${L}_{\text{f}}$ is the latent heat of fusion. ${L}_{\text{f}}=\text{334}\;\text{kJ/kg}$ for water, so that

$$ Q=(1.00 kg)(334 kJ/kg)=3\text{.}\text{34}\times {\text{10}}^{5}\;\text{J.} $$  {eq:eip-153}

Now the change in entropy is positive, since heat transfer occurs into the ice to cause the phase change; thus,

$$ \Delta S=\frac{Q}{T}=\frac{3\text{.}\text{34}\times {\text{10}}^{5}\;\text{J}}{T}\text{.} $$  {eq:eip-848}

$T$ is the melting temperature of ice. That is, $T=0º\text{C=273 K}$. So the change in entropy is

$$ \begin{array}{lll}\Delta S & = & \frac{3\text{.}\text{34}×{\text{10}}^{5}\;\text{J}}{\text{273 K}} \\ & = & \text{1.22}×{\text{10}}^{3}\;\text{J/K.}\end{array} $$  {eq:eip-195}

**Discussion**
This is a significant increase in entropy accompanying an increase in disorder.
:::

> FIGURE {fig:import-auto-id1169737811865} src=../../media/Figure_16_06_06.jpg
> alt: The diagram has two images. The first image shows molecules of ice. They are represented as tiny spheres joined to form a floral pattern. The system is shown as ordered. The second image shows what happens when ice melts. The change in entropy delta S is marked between the two images shown by an arrow pointing from first image toward the second image with change in entropy delta S shown greater than zero. The second image represents water shown as tiny spheres moving in a random state. The system is marked as disordered.
> width: 400
> caption: When ice melts, it becomes more disordered and less structured. The systematic arrangement of molecules in a crystal structure is replaced by a more random and less orderly movement of molecules without fixed locations or orientations. Its entropy increases because heat transfer occurs into it. Entropy is a measure of disorder.

In another easily imagined example, suppose we mix equal masses of water originally at two different temperatures, say $\text{20.0º C}$ and $\text{40.0º C}$. The result is water at an intermediate temperature of $\text{30.0º C}$. Three outcomes have resulted: entropy has increased, some energy has become unavailable to do work, and the system has become less orderly. Let us think about each of these results.
First, entropy has increased for the same reason that it did in the example above. Mixing the two bodies of water has the same effect as heat transfer from the hot one and the same heat transfer into the cold one. The mixing decreases the entropy of the hot water but increases the entropy of the cold water by a greater amount, producing an overall increase in entropy.
Second, once the two masses of water are mixed, there is only one temperature—you cannot run a heat engine with them. The energy that could have been used to run a heat engine is now unavailable to do work.
Third, the mixture is less orderly, or to use another term, less structured. Rather than having two masses at different temperatures and with different distributions of molecular speeds, we now have a single mass with a uniform temperature.
These three results—entropy, unavailability of energy, and disorder—are not only related but are in fact essentially equivalent.

## Life, Evolution, and the Second Law of Thermodynamics
Some people misunderstand the second law of thermodynamics, stated in terms of entropy, to say that the process of the evolution of life violates this law. Over time, complex organisms evolved from much simpler ancestors, representing a large decrease in entropy of the Earth’s biosphere. It is a fact that living organisms have evolved to be highly structured, and much lower in entropy than the substances from which they grow. But it is *always* possible for the entropy of one part of the universe to decrease, provided the total change in entropy of the universe increases. In equation form, we can write this as

$$ \Delta {S}_{\text{tot}}=\Delta {S}_{\text{syst}}+\Delta {S}_{\text{envir}}>0. $$  {eq:eip-793}

Thus $\Delta {S}_{\text{syst}}$ can be negative as long as $\Delta {S}_{\text{envir}}$ is positive and greater in magnitude.
How is it possible for a system to decrease its entropy? Energy transfer is necessary. If I pick up marbles that are scattered about the room and put them into a cup, my work has decreased the entropy of that system. If I gather iron ore from the ground and convert it into steel and build a bridge, my work has decreased the entropy of that system. Energy coming from the Sun can decrease the entropy of local systems on Earth—that is, $\Delta {S}_{\text{syst}}$ is negative. But the overall entropy of the rest of the universe increases by a greater amount—that is, $\Delta {S}_{\text{envir}}$ is positive and greater in magnitude. Thus, $\Delta {S}_{\text{tot}}=\Delta {S}_{\text{syst}}+\Delta {S}_{\text{envir}}>0$, and the second law of thermodynamics is *not* violated.
Every time a plant stores some solar energy in the form of chemical potential energy, or an updraft of warm air lifts a soaring bird, the Earth can be viewed as a heat engine operating between a hot reservoir supplied by the Sun and a cold reservoir supplied by dark outer space—a heat engine of high complexity, causing local decreases in entropy as it uses part of the heat transfer from the Sun into deep space. There is a large total increase in entropy resulting from this massive heat transfer. A small part of this heat transfer is stored in structured systems on Earth, producing much smaller local decreases in entropy. (See [ref:import-auto-id1169738014330].)

> FIGURE {fig:import-auto-id1169738014330} src=../../media/Figure_16_06_07.jpg
> alt: The figure shows the schematic diagram for heat transfer from the Sun into deep space. The picture of the Sun is shown at the left most end of the diagram. The temperature of the Sun is marked as T sub h. The heat Q is shown to flow as a bold arrow pointing till the right end of the diagram which is labeled as deep space. The temperature here is shown as T sub c equals three Kelvin. The Earth is shown as a sphere at the middle of this bold arrow stream between Sun and deep space. The Earth is shown to receive an internal energy delta E sub int. The change in entropy of Earth delta S is shown to be less than zero with a question mark.
> width: 400
> caption: Earth’s entropy may decrease in the process of intercepting a small part of the heat transfer from the Sun into deep space. Entropy for the entire process increases greatly while Earth becomes more structured with living systems and stored energy in various forms.

:::note [interactive] Reversible Reactions

Watch a reaction proceed over time. How does total energy affect a reaction rate? Vary temperature, barrier height, and potential energies. Record concentrations and time in order to extract rate coefficients. Do temperature dependent studies to extract Arrhenius parameters. This simulation is best used with teacher guidance because it presents an analogy of chemical reactions.
[Click to view content](https://openstax.org/l/21reversereact).
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id2322666} type=ap-test-prep 
PROBLEM:
Equal masses of steam (100 degrees C) and ice (0 degrees C) are placed in contact with each other in an otherwise insulated container. They both end up as liquid water at a common temperature. The steam ___ entropy and ___ order, while the ice ___ entropy and ___ order.
(a) gained, gained, lost, lost
(b) gained, lost, lost, gained
(c) lost, gained, gained, lost
(d) lost, lost, gained, gained
SOLUTION:
(c)
:::

:::exercise {fs-id2401812} type=ap-test-prep 
PROBLEM:
A high temperature reservoir losing heat and hence entropy is a reversible process. A low temperature reservoir gaining a certain amount of heat and hence entropy is a reversible process. But a high temperature reservoir losing heat to a low temperature reservoir is irreversible. Why?
:::

## Section Summary {section:section-summary}
- Entropy is the loss of energy available to do work.
- Another form of the second law of thermodynamics states that the total entropy of a system either increases or remains constant; it never decreases.
- Entropy is zero in a reversible process; it increases in an irreversible process.
- The ultimate fate of the universe is likely to be thermodynamic equilibrium, where the universal temperature is constant and no energy is available to do work.
- Entropy is also associated with the tendency toward disorder in a closed system.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1169737806756} type=conceptual-questions 
PROBLEM:
A woman shuts her summer cottage up in September and returns in June. No one has entered the cottage in the meantime. Explain what she is likely to find, in terms of the second law of thermodynamics.
:::

:::exercise {fs-id1169737830797} type=conceptual-questions 
PROBLEM:
Consider a system with a certain energy content, from which we wish to extract as much work as possible. Should the system’s entropy be high or low? Is this orderly or disorderly? Structured or uniform? Explain briefly.
:::

:::exercise {fs-id1169737713421} type=conceptual-questions 
PROBLEM:
Does a gas become more orderly when it liquefies? Does its entropy change? If so, does the entropy increase or decrease? Explain your answer.
:::

:::exercise {fs-id1169736657600} type=conceptual-questions 
PROBLEM:
Explain how water’s entropy can decrease when it freezes without violating the second law of thermodynamics. Specifically, explain what happens to the entropy of its surroundings.
:::

:::exercise {fs-id1169738046950} type=conceptual-questions 
PROBLEM:
Is a uniform-temperature gas more or less orderly than one with several different temperatures? Which is more structured? In which can heat transfer result in work done without heat transfer from another system?
:::

:::exercise {fs-id1169738205677} type=conceptual-questions 
PROBLEM:
Give an example of a spontaneous process in which a system becomes less ordered and energy becomes less available to do work. What happens to the system’s entropy in this process?
:::

:::exercise {fs-id1169737826678} type=conceptual-questions 
PROBLEM:
What is the change in entropy in an adiabatic process? Does this imply that adiabatic processes are reversible? Can a process be precisely adiabatic for a macroscopic system?
:::

:::exercise {fs-id1169737861961} type=conceptual-questions 
PROBLEM:
Does the entropy of a star increase or decrease as it radiates? Does the entropy of the space into which it radiates (which has a temperature of about 3 K) increase or decrease? What does this do to the entropy of the universe?
:::

:::exercise {fs-id1169738007382} type=conceptual-questions 
PROBLEM:
Explain why a building made of bricks has smaller entropy than the same bricks in a disorganized pile. Do this by considering the number of ways that each could be formed (the number of microstates in each macrostate).
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id1169737793331} type=problems-exercises 
PROBLEM:
(a) On a winter day, a certain house loses $5\text{.}\text{00}×{\text{10}}^{8}\;\text{J}$ of heat to the outside (about 500,000 Btu). What is the total change in entropy due to this heat transfer alone, assuming an average indoor temperature of $\text{21.0º C}$ and an average outdoor temperature of $5.00º C$? (b) This large change in entropy implies a large amount of energy has become unavailable to do work. Where do we find more energy when such energy is lost to us?
SOLUTION:
(a) $9.78\times {\text{10}}^{4}\;\text{J/K}$
(b) In order to gain more energy, we must generate it from things within the house, like a heat pump, human bodies, and other appliances. As you know, we use a lot of energy to keep our houses warm in the winter because of the loss of heat to the outside.
:::

:::exercise {fs-id1169738239436} type=problems-exercises 
PROBLEM:
On a hot summer day, $4\text{.}\text{00}×{\text{10}}^{6}\;\text{J}$ of heat transfer into a parked car takes place, increasing its temperature from $\text{35.0º C}$ to $\text{45.0º C}$. What is the increase in entropy of the car due to this heat transfer alone?
:::

:::exercise {fs-id1169738111073} type=problems-exercises 
PROBLEM:
A hot rock ejected from a volcano’s lava fountain cools from $\text{1100º C}$ to $\text{40.0º C}$, and its entropy decreases by 950 J/K. How much heat transfer occurs from the rock?
SOLUTION:
$8.01\times {\text{10}}^{5}\;\text{J}$
:::

:::exercise {fs-id1169737869611} type=problems-exercises 
PROBLEM:
When $1\text{.}\text{60}×{\text{10}}^{5}\;\text{J}$ of heat transfer occurs into a meat pie initially at $\text{20.0º C}$, its entropy increases by 480 J/K. What is its final temperature?
:::

:::exercise {fs-id1169737955124} type=problems-exercises 
PROBLEM:
The Sun radiates energy at the rate of $3\text{.}\text{80}×{\text{10}}^{\text{26}}\;\text{W}$ from its $\text{5500º C}$ surface into dark empty space (a negligible fraction radiates onto Earth and the other planets). The effective temperature of deep space is $-\text{270º C}$. (a) What is the increase in entropy in one day due to this heat transfer? (b) How much work is made unavailable?
SOLUTION:
(a) $1\text{.}\text{04}\times {\text{10}}^{\text{31}}\;\text{J/K}$
(b) $3\text{.}\text{28}\times {\text{10}}^{\text{31}}\;\text{J}$
:::

:::exercise {fs-id1169737713976} type=problems-exercises 
PROBLEM:
(a) In reaching equilibrium, how much heat transfer occurs from 1.00 kg of water at $\text{40.0º C}$ when it is placed in contact with 1.00 kg of $\text{20.0º C}$ water in reaching equilibrium? (b) What is the change in entropy due to this heat transfer? (c) How much work is made unavailable, taking the lowest temperature to be $\text{20.0º C}$? Explicitly show how you follow the steps in the [ref:fs-id1169738068841](module:m42238)Problem-Solving Strategies for Entropy.
:::

:::exercise {fs-id1169737828249} type=problems-exercises 
PROBLEM:
What is the decrease in entropy of 25.0 g of water that condenses on a bathroom mirror at a temperature of $\text{35.0º C}$, assuming no change in temperature and given the latent heat of vaporization to be 2450 kJ/kg?
SOLUTION:
199 J/K
:::

:::exercise {fs-id1169738087184} type=problems-exercises 
PROBLEM:
Find the increase in entropy of 1.00 kg of liquid nitrogen that starts at its boiling temperature, boils, and warms to $\text{20.0º C}$ at constant pressure.
:::

:::exercise {fs-id1169738239396} type=problems-exercises 
PROBLEM:
A large electrical power station generates 1000 MW of electricity with an efficiency of 35.0%. (a) Calculate the heat transfer to the power station, ${Q}_{\text{h}}$, in one day. (b) How much heat transfer ${Q}_{\text{c}}$ occurs to the environment in one day? (c) If the heat transfer in the cooling towers is from $\text{35.0º C}$ water into the local air mass, which increases in temperature from $\text{18.0º C}$ to $\text{20.0º C}$, what is the total increase in entropy due to this heat transfer? (d) How much energy becomes unavailable to do work because of this increase in entropy, assuming an $\text{18.0º C}$ lowest temperature? (Part of ${Q}_{\text{c}}$ could be utilized to operate heat engines or for simply heating the surroundings, but it rarely is.)
SOLUTION:
(a) $2\text{.}\text{47}\times {\text{10}}^{\text{14}}\;\text{J}$
(b) $1\text{.}\text{60}\times {\text{10}}^{\text{14}}\;\text{J}$
(c) $2.85\times {\text{10}}^{\text{10}}\;\text{J/K}$
(d) $8.29\times {\text{10}}^{\text{12}}\;\text{J}$
:::

:::exercise {fs-id1169738036204} type=problems-exercises 
PROBLEM:
(a) How much heat transfer occurs from 20.0 kg of $\text{90.0º C}$ water placed in contact with 20.0 kg of $\text{10.0º C}$ water, producing a final temperature of $\text{50.0º C}$? (b) How much work could a Carnot engine do with this heat transfer, assuming it operates between two reservoirs at constant temperatures of $\text{90.0º C}$ and $\text{10.0º C}$? (c) What increase in entropy is produced by mixing 20.0 kg of $\text{90.0º C}$ water with 20.0 kg of $\text{10.0º C}$ water? (d) Calculate the amount of work made unavailable by this mixing using a low temperature of $\text{10.0º C}$, and compare it with the work done by the Carnot engine. Explicitly show how you follow the steps in the [ref:fs-id1169738068841](module:m42238)Problem-Solving Strategies for Entropy. (e) Discuss how everyday processes make increasingly more energy unavailable to do work, as implied by this problem.
:::

## Glossary
- {def} **entropy**: a measurement of a system's disorder and its inability to do work in a system
- {def} **change in entropy**: the ratio of heat transfer to temperature $Q/T$
- {def} **second law of thermodynamics stated in terms of entropy**: the total entropy of a system either increases or remains constant; it never decreases

# Inductance

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate the inductance of an inductor.
- Calculate the energy stored in an inductor.
- Calculate the emf generated in an inductor.

## Inductors
Induction is the process in which an emf is induced by changing magnetic flux. Many examples have been discussed so far, some more effective than others. Transformers, for example, are designed to be particularly effective at inducing a desired voltage and current with very little loss of energy to other forms. Is there a useful physical quantity related to how “effective” a given device is? The answer is yes, and that physical quantity is called {term:inductance}.
{term:Mutual inductance} is the effect of Faraday’s law of induction for one device upon another, such as the primary coil in transmitting energy to the secondary in a transformer. See [ref:import-auto-id1169738104251], where simple coils induce emfs in one another.

> FIGURE {fig:import-auto-id1169738104251} src=../../media/Figure_24_09_01.jpg
> alt: The figure shows two coils coil one, of five turns and coil two, of four turns are kept adjacent to each other. The magnetic field lines of strength B are shown to pass through the two coils. Coil one is shown to be connected to an A C source. The changing current in the coil one is given as I one in clock wise direction. Coil two is connected to a galvanometer. A change in current in coil one is shown to induce an e m f in coil two.The induced e m f in coil two is measured as a deflection in galvanometer.
> width: 330
> caption: These coils can induce emfs in one another like an inefficient transformer. Their mutual inductance M indicates the effectiveness of the coupling between them. Here a change in current in coil 1 is seen to induce an emf in coil 2. (Note that "${E}_{2}$
     induced" represents the induced emf in coil 2.)

In the many cases where the geometry of the devices is fixed, flux is changed by varying current. We therefore concentrate on the rate of change of current, $\Delta I/Δt$, as the cause of induction. A change in the current ${I}_{1}$ in one device, coil 1 in the figure, induces an ${\text{emf}}_{2}$ in the other. We express this in equation form as

$$ {\text{emf}}_{2}=-M\frac{\Delta {I}_{1}}{\Delta t}\text{,} $$  {eq:eip-448}

where $M$ is defined to be the mutual inductance between the two devices. The minus sign is an expression of Lenz’s law. The larger the mutual inductance $M$, the more effective the coupling. For example, the coils in [ref:import-auto-id1169738104251] have a small $M$ compared with the transformer coils in [ref:import-auto-id1169738052317](module:m42414). Units for $M$ are $(\text{V}⋅\text{s})\text{/A}=Ω⋅\text{s}$, which is named a {term:henry} (H), after Joseph Henry. That is, $1 H=1\;Ω⋅\text{s}$.
Nature is symmetric here. If we change the current ${I}_{2}$ in coil 2, we induce an ${\text{emf}}_{1}$ in coil 1, which is given by

$$ {\text{emf}}_{1}=-M\frac{\Delta {I}_{2}}{\Delta t}\text{,} $$  {eq:eip-339}

where $M$ is the same as for the reverse process. Transformers run backward with the same effectiveness, or mutual inductance $M$*.*
A large mutual inductance $M$ may or may not be desirable. We want a transformer to have a large mutual inductance. But an appliance, such as an electric clothes dryer, can induce a dangerous emf on its case if the mutual inductance between its coils and the case is large. One way to reduce mutual inductance $M$ is to counterwind coils to cancel the magnetic field produced. (See [ref:import-auto-id1169737730746].)

> FIGURE {fig:import-auto-id1169737730746} src=../../media/Figure_24_09_02.jpg
> alt: The figure describes the heating coils of electric clothes dryer that are counter wound on a cylindrical core. There magnetic fields cancel each other.
> width: 325
> caption: The heating coils of an electric clothes dryer can be counter-wound so that their magnetic fields cancel one another, greatly reducing the mutual inductance with the case of the dryer.

{term:Self-inductance}, the effect of Faraday’s law of induction of a device on itself, also exists. When, for example, current through a coil is increased, the magnetic field and flux also increase, inducing a counter emf, as required by Lenz’s law. Conversely, if the current is decreased, an emf is induced that opposes the decrease. Most devices have a fixed geometry, and so the change in flux is due entirely to the change in current $\Delta I$ through the device. The induced emf is related to the physical geometry of the device and the rate of change of current. It is given by

$$ \text{emf}=-L\frac{\Delta I}{\Delta t}\text{,} $$  {eq:eip-967}

where $L$ is the self-inductance of the device. A device that exhibits significant self-inductance is called an {term:inductor}, and given the symbol in [ref:import-auto-id1169738117225]. 
> FIGURE {fig:import-auto-id1169738117225} src=../../media/Figure_24_09_05.jpg
> alt: Two straight lines connected by three half-circles adjacent to each other.
> width: 100
> caption: 
 The minus sign is an expression of Lenz’s law, indicating that emf opposes the change in current. Units of self-inductance are henries (H) just as for mutual inductance. The larger the self-inductance $L$ of a device, the greater its opposition to any change in current through it. For example, a large coil with many turns and an iron core has a large $L$ and will not allow current to change quickly. To avoid this effect, a small $L$ must be achieved, such as by counterwinding coils as in [ref:import-auto-id1169737730746].
A 1 H inductor is a large inductor. To illustrate this, consider a device with $L=1\text{.}0 H$ that has a 10 A current flowing through it. What happens if we try to shut off the current rapidly, perhaps in only 1.0 ms? An emf, given by $\text{emf}=-L(\Delta I/\Delta t)$, will oppose the change. Thus an emf will be induced given by $\text{emf}=-L(\Delta I/\Delta t)=(1\text{.}0 H)[(\text{10 A})/(1\text{.}0 ms)]=\text{10,000 V}$. The positive sign means this large voltage is in the same direction as the current, opposing its decrease. Such large emfs can cause arcs, damaging switching equipment, and so it may be necessary to change current more slowly.
There are uses for such a large induced voltage. Camera flashes use a battery, two inductors that function as a transformer, and a switching system or oscillator to induce large voltages. (Remember that we need a changing magnetic field, brought about by a changing current, to induce a voltage in another coil.) The oscillator system will do this many times as the battery voltage is boosted to over one thousand volts. (You may hear the high pitched whine from the transformer as the capacitor is being charged.) A capacitor stores the high voltage for later use in powering the flash. (See [ref:import-auto-id1169738245043].)

> FIGURE {fig:import-auto-id1169738245043} src=../../media/Figure_24_09_03.jpg
> alt: The figure describes an inductor L which is connected in parallel to a capacitor C through a variable switch. There is a cell of voltage V placed parallel to the capacitor. The ends of switch can be removed from the capacitor and connected to Cell V for charging. This variable connection is shown as dashed arrows.
> width: 180
> caption: Through rapid switching of an inductor, 1.5 V batteries can be used to induce emfs of several thousand volts. This voltage can be used to store charge in a capacitor for later use, such as in a camera flash attachment.

It is possible to calculate $L$ for an inductor given its geometry (size and shape) and knowing the magnetic field that it produces. This is difficult in most cases, because of the complexity of the field created. So in this text the inductance $L$ is usually a given quantity. One exception is the solenoid, because it has a very uniform field inside, a nearly zero field outside, and a simple shape. It is instructive to derive an equation for its inductance. We start by noting that the induced emf is given by Faraday’s law of induction as $\text{emf}=-N(\Delta Φ/\Delta t)$ and, by the definition of self-inductance, as $\text{emf}=-L(\Delta I/\Delta t)$. Equating these yields

$$ \text{emf}=-N\frac{\Delta Φ}{\Delta t}=-L\frac{\Delta I}{\Delta t}\text{.} $$  {eq:eip-398}

Solving for $L$ gives

$$ L=N\frac{\Delta Φ}{\Delta I}\text{.} $$  {eq:eip-966}

This equation for the self-inductance $L$ of a device is always valid. It means that self-inductance $L$ depends on how effective the current is in creating flux; the more effective, the greater $\Delta Φ$/ $\Delta I$ is.
Let us use this last equation to find an expression for the inductance of a solenoid. Since the area $A$ of a solenoid is fixed, the change in flux is  $\text{Δ}Φ=\text{Δ}(BA)=A\text{Δ}B$.  To find $\text{Δ}B$, we note that the magnetic field of a solenoid is given by $B={μ}_{0}\text{nI}={μ}_{0}\frac{\text{NI}}{ℓ}$. (Here $n=N/ℓ$, where $N$ is the number of coils and $ℓ$ is the solenoid’s length.) Only the current changes, so that $\Delta Φ=A\Delta B={μ}_{0}\text{NA}\frac{\Delta I}{ℓ}$. Substituting $\text{Δ}Φ$ into $L=N\frac{\Delta Φ}{\Delta I}$ gives

$$ L=N\frac{\Delta Φ}{\Delta I}=N\frac{{μ}_{0}\text{NA}\frac{\Delta I}{ℓ}}{\Delta I}\text{.} $$  {eq:eip-613}

This simplifies to

$$ L=\frac{{μ}_{0}{N}^{2}A}{ℓ}\text{(solenoid).} $$  {eq:eip-141}

This is the self-inductance of a solenoid of cross-sectional area $A$ and length $ℓ$. Note that the inductance depends only on the physical characteristics of the solenoid, consistent with its definition.

:::example {ex:fs-id1169738144436} Calculating the Self-inductance of a Moderate Size Solenoid
Calculate the self-inductance of a 10.0 cm long, 4.00 cm diameter solenoid that has 200 coils.
**Strategy**
This is a straightforward application of $L=\frac{{μ}_{0}{N}^{2}A}{ℓ}$, since all quantities in the equation except $L$ are known.
**Solution**
Use the following expression for the self-inductance of a solenoid:

$$ L=\frac{{μ}_{0}{N}^{2}A}{ℓ}\text{.} $$  {eq:eip-112}

The cross-sectional area in this example is $A={πr}^{2}=(3\text{.}\text{14}\text{.}\text{.}\text{.})(0\text{.0200 m}{)}^{2}=1\text{.}\text{26}\times {\text{10}}^{-3}\;{\text{m}}^{2}$, $N$ is given to be 200, and the length $ℓ$ is 0.100 m. We know the permeability of free space is ${μ}_{0}=4π\times {\text{10}}^{\text{−7}}\;\text{T}⋅\text{m/A}$. Substituting these into the expression for $L$ gives

$$ \begin{array}{lll}L & = & \frac{(4π\times {\text{10}}^{-7}\;\text{T}⋅\text{m/A})(\text{200}{)}^{2}(1.26\times {\text{10}}^{-3}\;{\text{m}}^{2})}{0.100 m} \\ & = & 0\text{.}\text{632 mH}\text{.}\end{array} $$  {eq:eip-334}

**Discussion**
This solenoid is moderate in size. Its inductance of nearly a millihenry is also considered moderate.
:::
One common application of inductance is used in traffic lights that can tell when vehicles are waiting at the intersection. An electrical circuit with an inductor is placed in the road under the place a waiting car will stop over. The body of the car increases the inductance and the circuit changes sending a signal to the traffic lights to change colors. Similarly, metal detectors used for airport security employ the same technique. A coil or inductor in the metal detector frame acts as both a transmitter and a receiver. The pulsed signal in the transmitter coil induces a signal in the receiver. The self-inductance of the circuit is affected by any metal object in the path. Such detectors can be adjusted for sensitivity and also can indicate the approximate location of metal found on a person. See [ref:import-auto-id1169738066155].

> FIGURE {fig:import-auto-id1169738066155} src=../../media/OSX_CP2e_Figure_24_09_04.jpg
> alt: Photograph of people around a security gate at an airport departure terminal.
> width: 250
> caption: The familiar security gate at an airport can not only detect metals but also indicate their approximate height above the floor. (credit: shankar s/Flickr)

## Energy Stored in an Inductor
We know from Lenz’s law that inductances oppose changes in current. There is an alternative way to look at this opposition that is based on energy. Energy is stored in a magnetic field. It takes time to build up energy, and it also takes time to deplete energy; hence, there is an opposition to rapid change. In an inductor, the magnetic field is directly proportional to current and to the inductance of the device. It can be shown that the {term:energy stored in an inductor}${E}_{\text{ind}}$ is given by

$$ {E}_{\text{ind}}=\frac{1}{2}{\text{LI}}^{2}\text{.} $$  {eq:eip-822}

This expression is similar to that for the energy stored in a capacitor.

:::example {ex:fs-id1169736599494} Calculating the Energy Stored in the Field of a Solenoid
How much energy is stored in the 0.632 mH inductor of the preceding example when a 30.0 A current flows through it?
**Strategy**
The energy is given by the equation ${E}_{\text{ind}}=\frac{1}{2}{\text{LI}}^{2}$, and all quantities except ${E}_{\text{ind}}$ are known.
**Solution**
Substituting the value for $L$ found in the previous example and the given current into ${E}_{\text{ind}}=\frac{1}{2}{\text{LI}}^{2}$ gives

$$ \begin{array}{lll}{E}_{\text{ind}} & = & \frac{1}{2}{\text{LI}}^{2} \\ & = & 0.5(0.632\times {\text{10}}^{-3}\;\text{H})(\text{30.0 A}{)}^{2}=\text{0.284 J}\text{.}\end{array} $$  {eq:eip-257}

**Discussion**
This amount of energy is certainly enough to cause a spark if the current is suddenly switched off. It cannot be built up instantaneously unless the power input is infinite.
:::

## Section Summary {section:section-summary}
- Inductance is the property of a device that tells how effectively it induces an emf  in another device.
- Mutual inductance is the effect of two devices in inducing emfs in each other.
- A change in current $\Delta {I}_{1}/\Delta t$ in one induces an emf ${\text{emf}}_{2}$ in the second:

        

$$ {\text{emf}}_{2}=-M\frac{\Delta {I}_{1}}{\Delta t}\text{,} $$  {eq:eip-203}

        where
$M$ is defined to be the mutual inductance between the two devices, and the minus sign is due to Lenz’s law.
- Symmetrically, a change in current $\Delta {I}_{2}/\Delta t$ through the second device induces an emf ${\text{emf}}_{1}$ in the first:

        

$$ {\text{emf}}_{1}=-M\frac{\Delta {I}_{2}}{\Delta t}\text{,} $$  {eq:eip-325}

        where
$M$ is the same mutual inductance as in the reverse process.
- Current changes in a device induce an emf in the device itself.
- Self-inductance is the effect of the device inducing emf in itself.
- The device is called an inductor, and the emf induced in it by a change in current through it is

        

$$ \text{emf}=-L\frac{\Delta I}{\Delta t}\text{,} $$  {eq:eip-243}

where $L$ is the self-inductance of the inductor, and $\Delta I/\Delta t$ is the rate of change of current through it. The minus sign indicates that emf opposes the change in current, as required by Lenz’s law.
- The unit of self- and mutual inductance is the henry (H), where $1 H=1 Ω⋅\text{s}$.
- The self-inductance $L$ of an inductor is proportional to how much flux changes with current. For an $N$-turn inductor,

        

$$ L=N\frac{\Delta Φ}{\Delta I}\text{.} $$  {eq:eip-739}

- The self-inductance of a solenoid is

        

$$ L=\frac{{μ}_{0}{N}^{2}A}{ℓ}\text{(solenoid),} $$  {eq:eip-897}

where $N$ is its number of turns in the solenoid, $A$ is its cross-sectional area, $ℓ$ is its length, and ${\mu}_{0}=4π\times {\text{10}}^{\text{−7}}\;\text{T}⋅\text{m/A}\;$ is the permeability of free space.
- The energy stored in an inductor ${E}_{\text{ind}}$ is

        

$$ {E}_{\text{ind}}=\frac{1}{2}{\text{LI}}^{2}\text{.} $$  {eq:eip-927}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1169737917746} type=conceptual-questions 
PROBLEM:
How would you place two identical flat coils in contact so that they had the greatest mutual inductance? The least?
:::

:::exercise {fs-id1169737938959} type=conceptual-questions 
PROBLEM:
How would you shape a given length of wire to give it the greatest self-inductance? The least?
:::

:::exercise {fs-id1169737042306} type=conceptual-questions 
PROBLEM:
Verify, as was concluded without proof in [ref:fs-id1169738144436], that units of $\text{T}⋅{\text{m}}^{2}/A=Ω⋅\text{s}=\text{H}$.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1169737794488} type=problems-exercises 
PROBLEM:
Two coils are placed close together in a physics lab to demonstrate Faraday’s law of induction. A current of 5.00 A in one is switched off in 1.00 ms, inducing a 9.00 V emf in the other. What is their mutual inductance?
SOLUTION:
1.80 mH
:::

:::exercise {fs-id1169738214501} type=problems-exercises 
PROBLEM:
If two coils placed next to one another have a mutual inductance of 5.00 mH, what voltage is induced in one when the 2.00 A current in the other is switched off in 30.0 ms?
:::

:::exercise {fs-id1169738117147} type=problems-exercises 
PROBLEM:
The 4.00 A current through a 7.50 mH inductor is switched off in 8.33 ms. What is the emf induced opposing this?
SOLUTION:
3.60 V
:::

:::exercise {fs-id1169738257452} type=problems-exercises 
PROBLEM:
A device is turned on and 3.00 A flows through it 0.100 ms later. What is the self-inductance of the device if an induced 150 V emf opposes this?
:::

:::exercise {fs-id1169738186605} type=problems-exercises 
PROBLEM:
Starting with ${\text{emf}}_{2}=-M\frac{\Delta {I}_{1}}{\Delta t}$, show that the units of inductance are $(\text{V}⋅\text{s})\text{/A}=Ω⋅\text{s}$.
:::

:::exercise {fs-id1169738092631} type=problems-exercises 
PROBLEM:
Camera flashes charge a capacitor to high voltage by switching the current through an inductor on and off rapidly. In what time must the 0.100 A current through a 2.00 mH inductor be switched on or off to induce a 500 V emf?
:::

:::exercise {fs-id1169737740076} type=problems-exercises 
PROBLEM:
A large research solenoid has a self-inductance of 25.0 H. (a) What induced emf opposes shutting it off when 100 A of current through it is switched off in 80.0 ms? (b) How much energy is stored in the inductor at full current? (c) At what rate in watts must energy be dissipated to switch the current off in 80.0 ms? (d) In view of the answer to the last part, is it surprising that shutting it down this quickly is difficult?
SOLUTION:
(a) 31.3 kV
(b) 125 kJ
(c) 1.56 MW
(d) No, it is not surprising since this power is very high.
:::

:::exercise {fs-id1169737930164} type=problems-exercises 
PROBLEM:
(a) Calculate the self-inductance of a 50.0 cm long, 10.0 cm diameter solenoid having 1000 loops. (b) How much energy is stored in this inductor when 20.0 A of current flows through it? (c) How fast can it be turned off if the induced emf cannot exceed 3.00 V?
:::

:::exercise {fs-id1169738086748} type=problems-exercises 
PROBLEM:
A precision laboratory resistor is made of a coil of wire 1.50 cm in diameter and 4.00 cm long, and it has 500 turns. (a) What is its self-inductance? (b) What average emf is induced if the 12.0 A current through it is turned on in 5.00 ms (one-fourth of a cycle for 50 Hz AC)? (c) What is its inductance if it is shortened to half its length and counter-wound (two layers of 250 turns in opposite directions)?
SOLUTION:
(a) 1.39 mH
(b) 3.33 V
(c) Zero
:::

:::exercise {fs-id1169738111072} type=problems-exercises 
PROBLEM:
The heating coils in a hair dryer are 0.800 cm in diameter, have a combined length of 1.00 m, and a total of 400 turns. (a) What is their total self-inductance assuming they act like a single solenoid? (b) How much energy is stored in them when 6.00 A flows? (c) What average emf opposes shutting them off if this is done in 5.00 ms (one-fourth of a cycle for 50 Hz AC)?
:::

:::exercise {fs-id1169738146554} type=problems-exercises 
PROBLEM:
When the 20.0 A current through an inductor is turned off in 1.50 ms, an 800 V emf is induced, opposing the change. What is the value of the self-inductance?
SOLUTION:
60.0 mH
:::

:::exercise {fs-id1169737002532} type=problems-exercises 
PROBLEM:
How fast can the 150 A current through a 0.250 H inductor be shut off if the induced emf cannot exceed 75.0 V?
:::

:::exercise {fs-id1169737861327} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
A very large, superconducting solenoid such as one used in MRI scans, stores 1.00 MJ of energy in its magnetic field when 100 A flows. (a) Find its self-inductance. (b) If the coils “go normal,” they gain resistance and start to dissipate thermal energy. What temperature increase is produced if all the stored energy goes into heating the 1000 kg magnet, given its average specific heat is $\text{200 J/kg·ºC}$?
SOLUTION:
(a) 200 H
(b) $\text{5.00ºC}$
:::

:::exercise {fs-id1169738052730} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
A 25.0 H inductor has 100 A of current turned off in 1.00 ms. (a) What voltage is induced to oppose this? (b) What is unreasonable about this result? (c) Which assumption or premise is responsible?
:::

## Glossary
- {def} **inductance**: a property of a device describing how efficient it is at inducing emf in another device
- {def} **mutual inductance**: how effective a pair of devices are at inducing emfs in each other
- {def} **henry**: the unit of inductance; $1\;\text{H}=1\;Ω⋅\text{s}$
- {def} **self-inductance**: how effective a device is at inducing emf in itself
- {def} **inductor**: a device that exhibits significant self-inductance
- {def} **energy stored in an inductor**: self-explanatory; calculated by ${E}_{\text{ind}}=\frac{1}{2}{\text{LI}}^{2}$

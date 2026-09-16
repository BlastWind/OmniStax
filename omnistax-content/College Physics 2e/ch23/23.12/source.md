# RLC Series AC Circuits

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate the impedance, phase angle, resonant frequency, power, power factor, voltage, and/or current in a RLC series circuit.
- Draw the circuit diagram for an RLC series circuit.
- Explain the significance of the resonant frequency.

## Impedance
When alone in an AC circuit, inductors, capacitors, and resistors all impede current. How do they behave when all three occur together? Interestingly, their individual resistances in ohms do not simply add. Because inductors and capacitors behave in opposite ways, they partially to totally cancel each other’s effect. [ref:import-auto-id1169736621511] shows an *RLC*series circuit with an AC voltage source, the behavior of which is the subject of this section. The crux of the analysis of an *RLC* circuit is the frequency dependence of ${X}_{L}$ and ${X}_{C}$, and the effect they have on the phase of voltage versus current (established in the preceding section). These give rise to the frequency dependence of the circuit, with important “resonance” features that are the basis of many applications, such as radio tuners.

> FIGURE {fig:import-auto-id1169736621511} src=../../media/Figure_24_12_01a.jpg
> alt: The figure describes an R LC series circuit. It shows a resistor R connected in series with an inductor L, connected to a capacitor C in series to an A C source V. The voltage of the A C source is given by V equals V zero sine two pi f t. The voltage across R is V R, across L is V L and across C is V C.
> width: 275
> caption: An *RLC* series circuit with an AC voltage source.

The combined effect of resistance $R$, inductive reactance ${X}_{L}$, and capacitive reactance ${X}_{C}$ is defined to be {term:impedance}, an AC analogue to resistance in a DC circuit. Current, voltage, and impedance in an *RLC* circuit are related by an AC version of Ohm’s law:

$$ {I}_{0}=\frac{{V}_{0}}{Z}\;\text{or}\;{I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{Z}\text{.} $$  {eq:eip-704}

Here ${I}_{0}$ is the peak current, ${V}_{0}$ the peak source voltage, and $Z$ is the impedance of the circuit. The units of impedance are ohms, and its effect on the circuit is as you might expect: the greater the impedance, the smaller the current. To get an expression for $Z$ in terms of $R$, ${X}_{L}$, and ${X}_{C}$, we will now examine how the voltages across the various components are related to the source voltage. Those voltages are labeled ${V}_{R}$, ${V}_{L}$, and ${V}_{C}$ in [ref:import-auto-id1169736621511].
Conservation of charge requires current to be the same in each part of the circuit at all times, so that we can say the currents in $R$, $L$, and $C$ are equal and in phase. But we know from the preceding section that the voltage across the inductor ${V}_{L}$ leads the current by one-fourth of a cycle, the voltage across the capacitor ${V}_{C}$ follows the current by one-fourth of a cycle, and the voltage across the resistor ${V}_{R}$ is exactly in phase with the current. [ref:import-auto-id1169738164070] shows these relationships in one graph, as well as showing the total voltage around the circuit $V={V}_{R}+{V}_{L}+{V}_{C}$, where all four voltages are the instantaneous values. According to Kirchhoff’s loop rule, the total voltage around the circuit $V$ is also the voltage of the source.
You can see from [ref:import-auto-id1169738164070] that while ${V}_{R}$ is in phase with the current, ${V}_{L}$ leads by $\text{90º}$, and ${V}_{C}$ follows by $\text{90º}$. Thus ${V}_{L}$ and ${V}_{C}$ are $\text{180º}$ out of phase (crest to trough) and tend to cancel, although not completely unless they have the same magnitude. Since the peak voltages are not aligned (not in phase), the peak voltage ${V}_{0}$ of the source does *not* equal the sum of the peak voltages across $R$, $L$, and $C$. The actual relationship is

$$ {V}_{0}=\sqrt{{V}_{0R}^{\hspace{1.25em}2}+({V}_{0L}-{V}_{0C}{)}^{2}}, $$  {eq:eip-577}

where ${V}_{0R}$, ${V}_{0L}$, and ${V}_{0C}$ are the peak voltages across $R$, $L$, and $C$, respectively. Now, using Ohm’s law and definitions from [Reactance, Inductive and Capacitive](module:m42427), we substitute ${V}_{0}={I}_{0}Z$ into the above, as well as ${V}_{0R}={I}_{0}R$, ${V}_{0L}={I}_{0}{X}_{L}$, and ${V}_{0C}={I}_{0}{X}_{C}$, yielding

$$ {I}_{0}Z=\sqrt{{I}_{0}^{\;2}{R}^{2}+({I}_{0}{X}_{L}-{I}_{0}{X}_{C}{)}^{2}}={I}_{0}\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}\text{.} $$  {eq:eip-971}

${I}_{0}$ cancels to yield an expression for $Z$:

$$ Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}\text{,} $$  {eq:eip-415}

which is the impedance of an *RLC* series AC circuit. For circuits without a resistor, take $R=\text{0}$; for those without an inductor, take ${X}_{L}=0$; and for those without a capacitor, take ${X}_{C}=0$.

> FIGURE {fig:import-auto-id1169738164070} src=../../media/Figure_24_12_02a.jpg
> alt: The figure shows graphs showing the relationships of the voltages in an RLC circuit to the current. It has five graphs on the left and two graphs on the right. The first graph on the right is for current I versus time t. Current is plotted along Y axis and time is along X axis. The curve is a smooth progressive sine wave. The second graph is on the right is for voltage V R versus time t. Voltage V R is plotted along Y axis and time is along X axis. The curve is a smooth progressive sine wave. The third graph is on the right is for voltage V L versus time t. Voltage V L is plotted along Y axis and time is along X axis. The curve is a smooth progressive cosine wave. The fourth graph is on the right is for voltage V C versus time t. Voltage V C is plotted along Y axis and time t is along X axis. The curve is a smooth progressive cosine wave starting from negative Y axis. The fifth graph shows the voltage V verses time t for the R L C circuit. Voltage V is plotted along Y axis and time t is along X axis. The curve is a smooth progressive sine wave starting from a point near to origin on negative X axis. The first and the fifth graphs are again shown on the right and their amplitudes and phases compared. The current graph is shown to have a lesser amplitude.
> width: 300
> caption: This graph shows the relationships of the voltages in an *RLC* circuit to the current. The voltages across the circuit elements add to equal the voltage of the source, which is seen to be out of phase with the current.

:::example {ex:fs-id1169737723572} Calculating Impedance and Current
An *RLC*series circuit has a $\text{40.0 Ω}$ resistor, a 3.00 mH inductor, and a $\text{5.00}\mu \text{F}$ capacitor. (a) Find the circuit’s impedance at 60.0 Hz and 10.0 kHz, noting that these frequencies and the values for $L$ and $C$ are the same as in [ref:fs-id1169736972664](module:m42427) and [ref:fs-id1169736597928](module:m42427). (b) If the voltage source has ${V}_{\text{rms}}=\text{120}\;\text{V}$, what is ${I}_{\text{rms}}$ at each frequency?
**Strategy**
For each frequency, we use $Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}$ to find the impedance and then Ohm’s law to find current. We can take advantage of the results of the previous two examples rather than calculate the reactances again.
**Solution for (a)**
At 60.0 Hz, the values of the reactances were found in [ref:fs-id1169736972664](module:m42427) to be ${X}_{L}=1\text{.}\text{13}\;Ω$ and in [ref:fs-id1169736597928](module:m42427) to be ${X}_{C}=\text{531}\;Ω$. Entering these and the given $\text{40.0 Ω}$ for resistance into $Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}$ yields

$$ \begin{array}{lll}Z & = & \sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}} \\ & = & \sqrt{(\text{40}\text{.}0\;Ω{)}^{2}+(1\text{.}\text{13}\;Ω-\text{531}\;Ω{)}^{2}} \\ & = & \text{531}\;Ω\text{at 60}\text{.}\text{0 Hz}\text{.}\end{array} $$  {eq:eip-331}

Similarly, at 10.0 kHz, ${X}_{L}=\text{188}\;Ω$ and ${X}_{C}=3\text{.}\text{18}\;Ω$, so that

$$ \begin{array}{lll}Z & = & \sqrt{(\text{40}\text{.}0\;Ω{)}^{2}+(\text{188}\;Ω-3\text{.}\text{18}\;Ω{)}^{2}} \\ & = & \text{190}\;Ω\text{at 10}\text{.}\text{0 kHz.}\end{array} $$  {eq:eip-247}

**Discussion for (a)**
In both cases, the result is nearly the same as the largest value, and the impedance is definitely not the sum of the individual values. It is clear that ${X}_{L}$ dominates at high frequency and ${X}_{C}$ dominates at low frequency.
**Solution for (b)**
The current ${I}_{\text{rms}}$ can be found using the AC version of Ohm’s law in Equation ${I}_{\text{rms}}={V}_{\text{rms}}/Z$:
${I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{Z}=\frac{\text{120}\;\text{V}}{\text{531}\;Ω}=0\text{.}\text{226}\;\text{A}$ at 60.0 Hz
Finally, at 10.0 kHz, we find
${I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{Z}=\frac{\text{120}\;\text{V}}{\text{190}\;Ω}=0\text{.}\text{633}\;\text{A}$ at 10.0 kHz
**Discussion for (a)**
The current at 60.0 Hz is the same (to three digits) as found for the capacitor alone in [ref:fs-id1169736597928](module:m42427). The capacitor dominates at low frequency. The current at 10.0 kHz is only slightly different from that found for the inductor alone in [ref:fs-id1169736972664](module:m42427). The inductor dominates at high frequency.
:::

## Resonance in *RLC* Series AC Circuits
How does an *RLC* circuit behave as a function of the frequency of the driving voltage source? Combining Ohm’s law, ${I}_{\text{rms}}={V}_{\text{rms}}/Z$, and the expression for impedance $Z$ from $Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}$ gives

$$ {I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}}\text{.} $$  {eq:eip-6}

The reactances vary with frequency, with ${X}_{L}$ large at high frequencies and ${X}_{C}$ large at low frequencies, as we have seen in three previous examples. At some intermediate frequency ${f}_{0}$, the reactances will be equal and cancel, giving *$Z=R$* —this is a minimum value for impedance, and a maximum value for ${I}_{\text{rms}}$ results. We can get an expression for ${f}_{0}$ by taking

$$ {X}_{L}={X}_{C}\text{.} $$  {eq:eip-342}

Substituting the definitions of ${X}_{L}$ and ${X}_{C}$,

$$ 2{πf}_{0}L=\frac{1}{2{πf}_{0}C}\text{.} $$  {eq:eip-109}

Solving this expression for ${f}_{0}$ yields

$$ {f}_{0}=\frac{1}{2π\sqrt{\text{LC}}}\text{,} $$  {eq:eip-362}

where ${f}_{0}$ is the {term:resonant frequency} of an *RLC* series circuit. This is also the *natural frequency* at which the circuit would oscillate if not driven by the voltage source. At ${f}_{0}$, the effects of the inductor and capacitor cancel, so that *$Z=R$*, and ${I}_{\text{rms}}$ is a maximum.
Resonance in AC circuits is analogous to mechanical resonance, where resonance is defined to be a forced oscillation—in this case, forced by the voltage source—at the natural frequency of the system. The receiver in a radio is an *RLC* circuit that oscillates best at its ${f}_{0}$. A variable capacitor is often used to adjust ${f}_{0}$ to receive a desired frequency and to reject others. [ref:import-auto-id1169738205664] is a graph of current as a function of frequency, illustrating a resonant peak in ${I}_{\text{rms}}$ at ${f}_{0}$. The two curves are for two different circuits, which differ only in the amount of resistance in them. The peak is lower and broader for the higher-resistance circuit. Thus the higher-resistance circuit does not resonate as strongly and would not be as selective in a radio receiver, for example.

> FIGURE {fig:import-auto-id1169738205664} src=../../media/Figure_24_12_03a.jpg
> alt: The figure describes a graph of current I versus frequency f. Current I r m s is plotted along Y axis and frequency f is plotted along X axis. Two curves are shown. The upper curve is for small resistance and lower curve is for large resistance. Both the curves have a smooth rise and a fall. The peaks are marked for frequency f zero. The curve for smaller resistance has a higher value of peak than the curve for large resistance.
> width: 225
> caption: A graph of current versus frequency for two *RLC* series circuits differing only in the amount of resistance. Both have a resonance at ${f}_{0}$, but that for the higher resistance is lower and broader. The driving AC voltage source has a fixed amplitude ${V}_{0}$.

:::example {ex:fs-id1169738045330} Calculating Resonant Frequency and Current
For the same *RLC* series circuit having a $\text{40.0 Ω}$ resistor, a 3.00 mH inductor, and a $\text{5.00}\mu \text{F}$ capacitor: (a) Find the resonant frequency. (b) Calculate ${I}_{\text{rms}}$ at resonance if ${V}_{\text{rms}}$ is 120 V.
**Strategy**
The resonant frequency is found by using the expression in ${f}_{0}=\frac{1}{2π\sqrt{\text{LC}}}$. The current at that frequency is the same as if the resistor alone were in the circuit.
**Solution for (a)**
Entering the given values for $L$ and $C$ into the expression given for ${f}_{0}$ in ${f}_{0}=\frac{1}{2π\sqrt{\text{LC}}}$ yields

$$ \begin{array}{lll}{f}_{0} & = & \frac{1}{2π\sqrt{\text{LC}}} \\ & = & \frac{1}{2π\sqrt{(3\text{.}\text{00}\times {\text{10}}^{-3}\;\text{H})(5\text{.}\text{00}\times {\text{10}}^{-6}\;\text{F})}}=1\text{.}\text{30}\;\text{kHz}\text{.}\end{array} $$  {eq:eip-120}

**Discussion for (a)**
We see that the resonant frequency is between 60.0 Hz and 10.0 kHz, the two frequencies chosen in earlier examples. This was to be expected, since the capacitor dominated at the low frequency and the inductor dominated at the high frequency. Their effects are the same at this intermediate frequency.
**Solution for (b)**
The current is given by Ohm’s law. At resonance, the two reactances are equal and cancel, so that the impedance equals the resistance alone. Thus,

$$ {I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{Z}=\frac{\text{120}\;\text{V}}{\text{40}\text{.}\text{0}\;Ω}=3\text{.}\text{00}\;\text{A.} $$  {eq:eip-940}

**Discussion for (b)**
At resonance, the current is greater than at the higher and lower frequencies considered for the same circuit in the preceding example.
:::

## Power in *RLC* Series AC Circuits
If current varies with frequency in an *RLC* circuit, then the power delivered to it also varies with frequency. But the average power is not simply current times voltage, as it is in purely resistive circuits. As was seen in [ref:import-auto-id1169738164070], voltage and current are out of phase in an *RLC* circuit. There is a {term:phase angle} $ϕ$ between the source voltage $V$ and the current $I$, which can be found from

$$ \text{cos}\;ϕ=\frac{R}{Z}\text{.} $$  {eq:eip-543}

For example, at the resonant frequency or in a purely resistive circuit *$Z=R$*, so that $\text{cos}\;ϕ=1$. This implies that $ϕ=0º$ and that voltage and current are in phase, as expected for resistors. At other frequencies, average power is less than at resonance. This is both because voltage and current are out of phase and because ${I}_{\text{rms}}$ is lower. The fact that source voltage and current are out of phase affects the power delivered to the circuit. It can be shown that the *average power* is

$$ {P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}\text{cos}\;ϕ, $$  {eq:eip-739}

Thus $\text{cos}\;ϕ$ is called the {term:power factor}, which can range from 0 to 1. Power factors near 1 are desirable when designing an efficient motor, for example. At the resonant frequency, $\text{cos}\;ϕ=1$.

:::example {ex:fs-id1169737987472} Calculating the Power Factor and Power
For the same *RLC* series circuit having a $40.0 Ω$ resistor, a 3.00 mH inductor, a $\text{5.00}\mu \text{F}$ capacitor, and a voltage source with a ${V}_{\text{rms}}$ of 120 V: (a) Calculate the power factor and phase angle for $f=\text{60}\text{.}0\text{Hz}$. (b) What is the average power at 60.0 Hz? (c) Find the average power at the circuit’s resonant frequency.
**Strategy and Solution for (a)**
The power factor at 60.0 Hz is found from

$$ \text{cos}\;ϕ=\frac{R}{Z}\text{.} $$  {eq:eip-248}

We know $Z\text{= 531 Ω}$ from [ref:fs-id1169737723572], so that

$$ \text{cos}\;ϕ=\frac{\text{40}\text{.}0\;Ω}{5\text{31}\;Ω}=0\text{.}\text{0753 at 60.0 Hz.} $$  {eq:eip-590}

This small value indicates the voltage and current are significantly out of phase. In fact, the phase angle is

$$ ϕ={\text{cos}}^{-1}\;0\text{.}\text{0753}=\text{85.7º at 60.0 Hz.} $$  {eq:eip-190}

**Discussion for (a)**
The phase angle is close to $\text{90º}$, consistent with the fact that the capacitor dominates the circuit at this low frequency (a pure *RC* circuit has its voltage and current $\text{90º}$ out of phase).
**Strategy and Solution for (b)**
The average power at 60.0 Hz is

$$ {P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}\text{cos}\;ϕ. $$  {eq:eip-976}

${I}_{\text{rms}}$ was found to be 0.226 A in [ref:fs-id1169737723572]. Entering the known values gives

$$ {P}_{\text{ave}}=(0\text{.}\text{226}\;\text{A})(\text{120}\;\text{V})(0\text{.}\text{0753})=2\text{.}\text{04}\;\text{W at 60.0 Hz.} $$  {eq:eip-180}

**Strategy and Solution for (c)**
At the resonant frequency, we know $\text{cos}\;ϕ=1$, and ${I}_{\text{rms}}$ was found to be 3.00 A in [ref:fs-id1169738045330]. Thus,
${P}_{\text{ave}}=(3\text{.}\text{00}\;\text{A})(\text{120}\;\text{V})(1)=\text{360}\;\text{W}$ at resonance (1.30 kHz)
**Discussion**
Both the current and the power factor are greater at resonance, producing significantly greater power than at higher and lower frequencies.
:::
Power delivered to an *RLC* series AC circuit is dissipated by the resistance alone. The inductor and capacitor have energy input and output but do not dissipate it out of the circuit. Rather they transfer energy back and forth to one another, with the resistor dissipating exactly what the voltage source puts into the circuit. This assumes no significant electromagnetic radiation from the inductor and capacitor, such as radio waves. Such radiation can happen and may even be desired, as we will see in the next chapter on electromagnetic radiation, but it can also be suppressed as is the case in this chapter. The circuit is analogous to the wheel of a car driven over a corrugated road as shown in [ref:import-auto-id1169736885804]. The regularly spaced bumps in the road are analogous to the voltage source, driving the wheel up and down. The shock absorber is analogous to the resistance damping and limiting the amplitude of the oscillation. Energy within the system goes back and forth between kinetic (analogous to maximum current, and energy stored in an inductor) and potential energy stored in the car spring (analogous to no current, and energy stored in the electric field of a capacitor). The amplitude of the wheels’ motion is a maximum if the bumps in the road are hit at the resonant frequency.

> FIGURE {fig:import-auto-id1169736885804} src=../../media/Figure_24_12_04a.jpg
> alt: The figure describes the path of motion of a wheel of a car. The front wheel of a car is shown. A shock absorber attached to the wheel is also shown. The path of motion is shown as vertically up and down.
> width: 225
> caption: The forced but damped motion of the wheel on the car spring is analogous to an *RLC* series AC circuit. The shock absorber damps the motion and dissipates energy, analogous to the resistance in an *RLC* circuit. The mass and spring determine the resonant frequency.

A pure *LC* circuit with negligible resistance oscillates at ${f}_{0}$, the same resonant frequency as an *RLC* circuit. It can serve as a frequency standard or clock circuit—for example, in a digital wristwatch. With a very small resistance, only a very small energy input is necessary to maintain the oscillations. The circuit is analogous to a car with no shock absorbers. Once it starts oscillating, it continues at its natural frequency for some time. [ref:import-auto-id1169738257733] shows the analogy between an *LC* circuit and a mass on a spring.

> FIGURE {fig:import-auto-id1169738257733} src=../../media/Figure_24_12_05a.jpg
> alt: The figure describes four stages of an L C oscillation circuit compared to a mass oscillating on a spring. Part a of the figure shows a mass attached to a horizontal spring. The spring is attached to a fixed support on the left. The mass is at rest as shown by velocity v equals zero. The energy of the spring is shown as potential energy. This is compared with a circuit containing a capacitor C and inductor L connected together. The energy is shown as stored in the electric field E of the capacitor between the plates. One plate is shown to have a negative polarity and other plate is shown to have a positive polarity. Part b of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The mass is shown to move horizontal toward the fixed support with velocity v. The energy here is stored as the kinetic energy of the spring. This is compared with a circuit containing a capacitor C and inductor L connected together. A current is shown in the circuit and energy is stored as magnetic field B in the inductor. Part c of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The spring is shown as not stretched and the energy is shown as potential energy of the spring. The mass is show to have displaced toward left. This is compared with a circuit containing a capacitor C and inductor L connected together. The energy is shown as stored in the electric field E of the capacitor between the plates. One plate is shown to have a negative polarity and other plate is shown to have a positive polarity. But the polarities are reverse of the first case in part a. Part d of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The mass is shown to move toward right with velocity v. the energy of the spring is kinetic energy. This is compared with a circuit containing a capacitor C and inductor L connected together. A current is shown in the circuit opposite to that in part b and energy is stored as magnetic field B in the inductor.
> width: 350
> caption: An *LC* circuit is analogous to a mass oscillating on a spring with no friction and no driving force. Energy moves back and forth between the inductor and capacitor, just as it moves from kinetic to potential in the mass-spring system.

:::note [interactive] Circuit Construction Kit (AC+DC), Virtual Lab

[Build circuits](https://openstax.org/l/21phetcirconstr) with capacitors, inductors, resistors and AC or DC voltage sources, and inspect them using lab instruments such as voltmeters and ammeters.
:::

## Section Summary {section:section-summary}
- The AC analogy to resistance is impedance $Z$, the combined effect of resistors, inductors, and capacitors, defined by the AC version of Ohm’s law:
    

$$ {I}_{0}=\frac{{V}_{0}}{Z}\;\text{or}\;{I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{Z}, $$  {eq:eip-111}

where ${I}_{0}$ is the peak current and ${V}_{0}$ is the peak source voltage.
- Impedance has units of ohms and is given by $Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}$.
- The resonant frequency ${f}_{0}$, at which ${X}_{L}={X}_{C}$, is
    

$$ {f}_{0}=\frac{1}{2π\sqrt{\text{LC}}}\text{.} $$  {eq:eip-766}

- In an AC circuit, there is a phase angle *$ϕ$* between source voltage $V$ and the current $I$, which can be found from
      

$$ \text{cos}\;ϕ=\frac{R}{Z}\text{,} $$  {eq:eip-531}

- $ϕ=0º$ for a purely resistive circuit or an *RLC* circuit at resonance.
- The average power delivered to an *RLC* circuit is affected by the phase angle and is given by
    

$$ {P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}\;\text{cos}\;ϕ\text{,} $$  {eq:eip-825}

$\text{cos}\;ϕ$ is called the power factor, which ranges from 0 to 1.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1169736614731} type=conceptual-questions 
PROBLEM:
Does the resonant frequency of an AC circuit depend on the peak voltage of the AC source? Explain why or why not.
:::

:::exercise {fs-id1169738073810} type=conceptual-questions 
PROBLEM:
Suppose you have a motor with a power factor significantly less than 1. Explain why it would be better to improve the power factor as a method of improving the motor’s output, rather than to increase the voltage input.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1169736657142} type=problems-exercises 
PROBLEM:
An *RL* circuit consists of a $40.0 Ω$ resistor and a 3.00 mH inductor. (a) Find its impedance $Z$ at 60.0 Hz and 10.0 kHz. (b) Compare these values of $Z$ with those found in [ref:fs-id1169737723572] in which there was also a capacitor.
SOLUTION:
(a) $40.02 Ω$ at 60.0 Hz, $193 Ω$ at 10.0 kHz
(b) At 60 Hz, with a capacitor,  $Z=531 Ω$, over 13 times as high as without the capacitor. The capacitor makes a large difference at low frequencies. At 10 kHz, with a capacitor  $Z=190 Ω$, about the same as without the capacitor. The capacitor has a smaller effect at high frequencies.
:::

:::exercise {fs-id1169737930730} type=problems-exercises 
PROBLEM:
An *RC* circuit consists of a $40.0 Ω$ resistor and a $\text{5.00}\mu \text{F}$ capacitor. (a) Find its impedance at 60.0 Hz and 10.0 kHz. (b) Compare these values of $Z$ with those found in [ref:fs-id1169737723572], in which there was also an inductor.
:::

:::exercise {fs-id1169738012738} type=problems-exercises 
PROBLEM:
An *LC* circuit consists of a $3\text{.}\text{00}\;\text{mH}$ inductor and a $5\text{.}\text{00}\;μF$ capacitor. (a) Find its impedance at 60.0 Hz and 10.0 kHz. (b) Compare these values of $Z$ with those found in [ref:fs-id1169737723572] in which there was also a resistor.
SOLUTION:
(a) $529 Ω$ at 60.0 Hz, $185 Ω$ at 10.0 kHz
(b) These values are close to those obtained in [ref:fs-id1169737723572] because at low frequency the capacitor dominates and at high frequency the inductor dominates. So in both cases the resistor makes little contribution to the total impedance.
:::

:::exercise {fs-id1169737794135} type=problems-exercises 
PROBLEM:
What is the resonant frequency of a 0.500 mH inductor connected to a $\text{40.0}\mu \text{F}$ capacitor?
:::

:::exercise {fs-id1169738072090} type=problems-exercises 
PROBLEM:
To receive AM radio, you want an *RLC* circuit that can be made to resonate at any frequency between 500 and 1650 kHz. This is accomplished with a fixed $\text{1.00}\mu \text{H}$ inductor connected to a variable capacitor. What range of capacitance is needed?
SOLUTION:
9.30 nF to 101 nF
:::

:::exercise {fs-id1169737830882} type=problems-exercises 
PROBLEM:
Suppose you have a supply of inductors ranging from 1.00 nH to 10.0 H, and capacitors ranging from 1.00 pF to 0.100 F. What is the range of resonant frequencies that can be achieved from combinations of a single inductor and a single capacitor?
:::

:::exercise {fs-id1169738244135} type=problems-exercises 
PROBLEM:
What capacitance do you need to produce a resonant frequency of 1.00 GHz, when using an 8.00 nH inductor?
SOLUTION:
3.17 pF
:::

:::exercise {fs-id1169737763566} type=problems-exercises 
PROBLEM:
What inductance do you need to produce a resonant frequency of 60.0 Hz, when using a $2.00 μF$ capacitor?
:::

:::exercise {fs-id1169738136983} type=problems-exercises 
PROBLEM:
The lowest frequency in the FM radio band is 88.0 MHz. (a) What inductance is needed to produce this resonant frequency if it is connected to a 2.50 pF capacitor? (b) The capacitor is variable, to allow the resonant frequency to be adjusted to as high as 108 MHz. What must the capacitance be at this frequency?
SOLUTION:
(a) $1.31 μH$
(b) 1.66 pF
:::

:::exercise {fs-id1169738187525} type=problems-exercises 
PROBLEM:
An *RLC* series circuit has a $2.50 Ω$ resistor, a $100 μH$ inductor, and an $80.0 μF$ capacitor.(a) Find the circuit’s impedance at 120 Hz. (b) Find the circuit’s impedance at 5.00 kHz. (c) If the voltage source has ${V}_{\text{rms}}=5\text{.}\text{60}\;\text{V}$, what is ${I}_{\text{rms}}$ at each frequency? (d) What is the resonant frequency of the circuit? (e) What is ${I}_{\text{rms}}$ at resonance?
:::

:::exercise {fs-id1169738137511} type=problems-exercises 
PROBLEM:
An *RLC* series circuit has a $1.00 kΩ$ resistor, a $150 μH$ inductor, and a 25.0 nF capacitor. (a) Find the circuit’s impedance at 500 Hz. (b) Find the circuit’s impedance at 7.50 kHz. (c) If the voltage source has ${V}_{\text{rms}}=\text{408}\;\text{V}$, what is ${I}_{\text{rms}}$ at each frequency? (d) What is the resonant frequency of the circuit? (e) What is ${I}_{\text{rms}}$ at resonance?
SOLUTION:
(a) $12.8 kΩ$
(b) $1.31 kΩ$
(c) 31.9 mA at 500 Hz, 312 mA at 7.50 kHz
(d) 82.2 kHz
(e) 0.408 A
:::

:::exercise {fs-id1169738220311} type=problems-exercises 
PROBLEM:
An *RLC* series circuit has a $2.50 Ω$ resistor, a $100 μH$ inductor, and an $80.0 μF$ capacitor. (a) Find the power factor at $f=120 Hz$. (b) What is the phase angle at 120 Hz? (c) What is the average power at 120 Hz? (d) Find the average power at the circuit’s resonant frequency.
:::

:::exercise {fs-id1169737939490} type=problems-exercises 
PROBLEM:
An *RLC* series circuit has a $1.00 kΩ$ resistor, a $150 μH$ inductor, and a 25.0 nF capacitor. (a) Find the power factor at $f=7.50 Hz$. (b) What is the phase angle at this frequency? (c) What is the average power at this frequency? (d) Find the average power at the circuit’s resonant frequency.
SOLUTION:
(a) 0.159
(b) $80.9º$
(c) 26.4 W
(d) 166 W
:::

:::exercise {fs-id1169737047401} type=problems-exercises 
PROBLEM:
An *RLC* series circuit has a $200 Ω$ resistor and a 25.0 mH inductor. At 8000 Hz, the phase angle is $45.0º$. (a) What is the impedance? (b) Find the circuit’s capacitance. (c) If ${V}_{\text{rms}}=\text{408}\;\text{V}$ is applied, what is the average power supplied?
:::

:::exercise {fs-id1169738224784} type=problems-exercises 
PROBLEM:
Referring to [ref:fs-id1169737987472], find the average power at 10.0 kHz.
SOLUTION:
16.0 W
:::

:::exercise {exer-78926} type= 
PROBLEM:
**Critical Thinking**
A length of 4.000 m of wire is to be used to detect a magnetic field. The wire is made into a single square loop and rotated at a rate of 400 cycles per second. (a) If the magnetic field is 0.02000 T, what is the magnitude of the average emf that can be generated in the first quarter cycle, provided the loop is initially oriented in a plane perpendicular to the magnetic field? (b) Is there a difference in the magnitude of the average emf generated if the wire is made into two square loops and rotated at the same rate, starting with the same orientation of the loops as that of the loop in part a? If so, what is the average emf possible for the first quarter cycle for two loops being rotated at 400 cycles per second in the magnetic field? (c) If the wire is made into a figure eight, what is the average emf for the first quarter cycle that can be generated by rotating it at 400 cycles per second in the magnetic field, again starting with the same orientation of the oops with respect to the magnetic field? The wire crosses itself in this arrangement. (d) Does the shape of the loop matter?
SOLUTION:
(a) $|\text{emf}|=1\frac{\Delta ϕ}{\Delta t}=\frac{1.000(0.02000)}{100}\text{V}=0.0002000\text{V}$
(b) $|\text{emf}|=2\frac{\Delta ϕ}{\Delta t}=\frac{2(0.2500)(0.02000)}{100}\text{V}=0.0001000\text{V}$
(c) The average emf is 0 since the loops are made by a wire that crosses, so the voltage from each loop cancels the emf from the other.
(d) No.
:::

## Glossary
- {def} **impedance**: the AC analogue to resistance in a DC circuit; it is the combined effect of resistance, inductive reactance, and capacitive reactance in the form $Z=\sqrt{{R}^{2}+({X}_{L}-{X}_{C}{)}^{2}}$
- {def} **resonant frequency**: the frequency at which the impedance in a circuit is at a minimum, and also the frequency at which the circuit would oscillate if not driven by a voltage source; calculated by ${f}_{0}=\frac{1}{2π\sqrt{\text{LC}}}$
- {def} **phase angle**: denoted by *$ϕ$*, the amount by which the voltage and current are out of phase with each other in a circuit
- {def} **power factor**: the amount by which the power delivered in the circuit is less than the theoretical maximum of the circuit due to voltage and current being out of phase; calculated by $\text{cos}\;ϕ$

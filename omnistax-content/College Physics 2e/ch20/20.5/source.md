# Alternating Current versus Direct Current

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Explain the differences and similarities between AC and DC current.
- Calculate rms voltage, current, and average power.
- Explain why AC current is used for power transmission.

## Alternating Current
Most of the examples dealt with so far, and particularly those utilizing batteries, have constant voltage sources. Once the current is established, it is thus also a constant. {term:Direct current} (DC) is the flow of electric charge in only one direction. It is the steady state of a constant-voltage circuit. Most well-known applications, however, use a time-varying voltage source. {term:Alternating current} (AC) is the flow of electric charge that periodically reverses direction. If the source varies periodically, particularly sinusoidally, the circuit is known as an alternating current circuit. Examples include the commercial and residential power that serves so many of our needs. [ref:import-auto-id3037356] shows graphs of voltage and current versus time for typical DC and AC power. The AC voltages and frequencies commonly used in homes and businesses vary around the world.

> FIGURE {fig:import-auto-id3037356} src=../../media/Figure_21_05_01.jpg
> alt: Part a shows a graph of voltage V and current I versus time for a D C source. The time is along the x axis and V and I are along the y axis. The graph shows that the voltage V sub D C and the current I sub D C do not vary with time. Part b shows the variation of voltage V and current I with time for an A C source. The time is along the horizontal axis and V and I are along the vertical axis. The graph for I is a progressing sine wave with a peak value I sub zero on the positive y axis and negative I sub zero on the negative y axis. The graph for V is a progressing sine wave with a higher amplitude than the current curve with a peak value V sub zero on the positive y axis and negative V sub zero on the negative y axis. The peak values of the voltage and current sine waves occur at the same time because they are in phase.
> width: 200
> caption: (a) DC voltage and current are constant in time, once the current is established. (b) A graph of voltage and current versus time for 60-Hz AC power. The voltage and current are sinusoidal and are in phase for a simple resistance circuit. The frequencies and peak voltages of AC sources differ greatly.

> FIGURE {fig:import-auto-id2808768} src=../../media/Figure_21_05_03.jpg
> alt: The potential difference variation of an alternating current voltage source with time is shown as a progressing sine wave. The voltage is shown along the vertical axis and the time is along the horizontal axis. Circuit diagrams show that current flowing in one direction corresponds to positive values of the voltage sine wave. Current flowing in the opposite direction in the circuit corresponds to negative values of the voltage sine wave. The maximum value of the voltage sine wave is plus V sub zero. The minimum value of the voltage sine wave is minus V sub zero.
> width: 200
> caption: The potential difference $V$ between the terminals of an AC voltage source fluctuates as shown. The mathematical expression for $V$ is given by $V={V}_{0}\;\text{sin}\;\text{2}\pi \text{ft}$.

[ref:import-auto-id2808768] shows a schematic of a simple circuit with an AC voltage source. The voltage between the terminals fluctuates as shown, with the {term:AC voltage} given by

$$ V={V}_{0}\;\text{sin}\;\text{2}\pi \text{ft,} $$  {eq:eip-449}

where $V$ is the voltage at time $t$*,*${V}_{0}$ is the peak voltage, and $f$ is the frequency in hertz. For this simple resistance circuit, $I=\text{V/R}$, and so the {term:AC current} is

$$ I={I}_{0}\;\text{sin 2}\pi \text{ft,} $$  {eq:eip-959}

where $I$ is the current at time $t$, and ${I}_{0}={V}_{0}\text{/R}$ is the peak current. For this example, the voltage and current are said to be in phase, as seen in [ref:import-auto-id3037356](b).
Current in the resistor alternates back and forth just like the driving voltage, since $I=\text{V/R}$. If the resistor is a fluorescent light bulb, for example, it brightens and dims 120 times per second as the current repeatedly goes through zero. A 120-Hz flicker is too rapid for your eyes to detect, but if you wave your hand back and forth between your face and a fluorescent light, you will see a stroboscopic effect evidencing AC. The fact that the light output fluctuates means that the power is fluctuating. The power supplied is $P=\text{IV}$. Using the expressions for $I$ and $V$ above, we see that the time dependence of power is $P={I}_{0}{V}_{0}\;{\text{sin}}^{2}\;\text{2}\pi \text{ft}$, as shown in [ref:import-auto-id1219206].

:::note [] Making Connections: Take-Home Experiment—AC/DC Lights

Wave your hand back and forth between your face and a fluorescent light bulb. Do you observe the same thing with the headlights on your car? Explain what you observe. *Warning: Do not look directly at very bright light*.
:::

> FIGURE {fig:import-auto-id1219206} src=../../media/Figure_21_05_04.jpg
> alt: A graph showing the variation of power P with time t. The power is along the vertical axis and time is along the horizontal axis. The curve is a sine wave starting at the origin on the horizontal axis and having the crests and troughs both above the positive horizontal axis. The maximum value of power is given by the peak value, which is the product of I sub zero and V sub zero. The average power is indicated by a dotted line through the center of the wave parallel to the horizontal axis with a value half of the product of I sub zero and V sub zero.
> width: 225
> caption: AC power as a function of time. Since the voltage and current are in phase here, their product is non-negative and fluctuates between zero and ${I}_{0}{V}_{0}$. Average power is $(1/2){I}_{0}{V}_{0}$<sub>.</sub>

We are most often concerned with average power rather than its fluctuations—that 60-W light bulb in your desk lamp has an average power consumption of 60 W, for example. As illustrated in [ref:import-auto-id1219206], the average power ${P}_{\text{ave}}$ is

$$ {P}_{\text{ave}}=\frac{1}{2}{I}_{0}{V}_{0}. $$  {eq:eip-351}

This is evident from the graph, since the areas above and below the $(1/2){I}_{0}{V}_{0}$ line are equal, but it can also be proven using trigonometric identities. Similarly, we define an average or {term:rms current} ${I}_{\text{rms}}$ and average or {term:rms voltage} ${V}_{\text{rms}}$ to be, respectively,

$$ {I}_{\text{rms}}=\frac{{I}_{0}}{\sqrt{2}} $$  {eq:eip-320}

and

$$ {V}_{\text{rms}}=\frac{{V}_{0}}{\sqrt{2}}. $$  {eq:eip-694}

where rms stands for root mean square, a particular kind of average. In general, to obtain a root mean square, the particular quantity is squared, its mean (or average) is found, and the square root is taken. This is useful for AC, since the average value is zero. Now,

$$ {P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}, $$  {eq:eip-533}

which gives

$$ {P}_{\text{ave}}=\frac{{I}_{0}}{\sqrt{2}}⋅\frac{{V}_{0}}{\sqrt{2}}=\frac{1}{2}{I}_{0}{V}_{0}, $$  {eq:eip-950}

as stated above. It is standard practice to quote ${I}_{\text{rms}}$, ${V}_{\text{rms}}$, and ${P}_{\text{ave}}$ rather than the peak values. For example, most household electricity is 120 V AC, which means that ${V}_{\text{rms}}$ is 120 V. The common 10-A circuit breaker will interrupt a sustained ${I}_{\text{rms}}$ greater than 10 A. Your 1.0-kW microwave oven consumes ${P}_{\text{ave}}=\text{1.0 kW}$, and so on. You can think of these rms and average values as the equivalent DC values for a simple resistive circuit.
To summarize, when dealing with AC, Ohm’s law and the equations for power are completely analogous to those for DC, but rms and average values are used for AC. Thus, for AC, Ohm’s law is written

$$ {I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{R}. $$  {eq:eip-987}

The various expressions for AC power ${P}_{\text{ave}}$ are

$$ {P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}, $$  {eq:eip-112}

$$ {P}_{\text{ave}}=\frac{{V}_{\text{rms}}^{2}}{R}, $$  {eq:eip-629}

and

$$ {P}_{\text{ave}}={I}_{\text{rms}}^{2}R. $$  {eq:eip-797}

:::example {ex:fs-id1324855} Peak Voltage and Power for AC
(a) What is the value of the peak voltage for 120-V AC power? (b) What is the peak power consumption rate of a 60.0-W AC light bulb?
**Strategy**
We are told that ${V}_{\text{rms}}$ is 120 V and ${P}_{\text{ave}}$ is 60.0 W. We can use ${V}_{\text{rms}}=\frac{{V}_{0}}{\sqrt{2}}$ to find the peak voltage, and we can manipulate the definition of power to find the peak power from the given average power.
**Solution for (a)**
Solving the equation ${V}_{\text{rms}}=\frac{{V}_{0}}{\sqrt{2}}$ for the peak voltage ${V}_{0}$ and substituting the known value for ${V}_{\text{rms}}$ gives

$$ {V}_{0}=\sqrt{2}{V}_{\text{rms}}=\text{1}\text{.}\text{414}(\text{120 V})=\text{170 V}. $$  {eq:eip-104}

**Discussion for (a)**
This means that the AC voltage swings from 170 V to $\text{–170 V}$ and back 60 times every second. An equivalent DC voltage is a constant 120 V.
**Solution for (b)**
Peak power is peak current times peak voltage. Thus,

$$ {P}_{0}={I}_{0}{V}_{0}=\text{2}(\frac{1}{2}{I}_{0}{V}_{0})=\text{2}{P}_{\text{ave}}. $$  {eq:eip-794}

We know the average power is 60.0 W, and so

$$ {P}_{0}=\text{2}(\text{60}\text{.}\text{0 W})=\text{120 W}. $$  {eq:eip-161}

**Discussion**
So the power swings from zero to 120 W one hundred twenty times per second (twice each cycle), and the power averages 60 W.
:::

## Why Use AC for Power Distribution?
Most large power-distribution systems are AC. Moreover, the power is transmitted at much higher voltages than the 120-V AC (240 V in most parts of the world) we use in homes and on the job. Economies of scale make it cheaper to build a few very large electric power-generation plants than to build numerous small ones. This necessitates sending power long distances, and it is obviously important that energy losses en route be minimized. High voltages can be transmitted with much smaller power losses than low voltages, as we shall see. (See [ref:import-auto-id2735185].) For safety reasons, the voltage at the user is reduced to familiar values. The crucial factor is that it is much easier to increase and decrease AC voltages than DC, so AC is used in most large power distribution systems.

> FIGURE {fig:import-auto-id2735185} src=../../media/Figure_21_05_05.jpg
> alt: Photograph of transformers installed in transmission lines.
> width: 225
> caption: Power is distributed over large distances at high voltage to reduce power loss in the transmission lines. The voltages generated at the power plant are stepped up by passive devices called transformers (see [Transformers](module:m42414)) to 330,000 volts (or more in some places worldwide). At the point of use, the transformers reduce the voltage transmitted for safe residential and commercial use. (Credit: GeorgHH, Wikimedia Commons)

:::example {ex:fs-id3200045} Power Losses Are Less for High-Voltage Transmission
(a) What current is needed to transmit 100 MW of power at 200 kV? (b) What is the power dissipated by the transmission lines if they have a resistance of $1\text{.}\text{00}\;Ω$? (c) What percentage of the power is lost in the transmission lines?
**Strategy**
We are given ${P}_{\text{ave}}=\text{100 MW}$, ${V}_{\text{rms}}=\text{200 kV}$, and the resistance of the lines is $R=1\text{.}\text{00}\;Ω$. Using these givens, we can find the current flowing (from $P=\text{IV}$) and then the power dissipated in the lines ($P={I}^{2}R$), and we take the ratio to the total power transmitted.
**Solution**
To find the current, we rearrange the relationship ${P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}$ and substitute known values. This gives

$$ {I}_{\text{rms}}=\frac{{P}_{\text{ave}}}{{V}_{\text{rms}}}=\frac{\text{100}\times {\text{10}}^{6}\;\text{W}}{\text{200}\times {\text{10}}^{3}\;\text{V}}=\text{500 A}. $$  {eq:eip-707}

**Solution**
Knowing the current and given the resistance of the lines, the power dissipated in them is found from ${P}_{\text{ave}}={I}_{\text{rms}}^{2}R$. Substituting the known values gives

$$ {P}_{\text{ave}}={I}_{\text{rms}}^{2}R=(\text{500 A}{)}^{2}(1\text{.}\text{00}\;Ω)=\text{250 kW}. $$  {eq:eip-648}

**Solution**
The percent loss is the ratio of this lost power to the total or input power, multiplied by 100:

$$ \text{\% loss=}\frac{\text{250 kW}}{\text{100 MW}}×\text{100}=0\text{.}\text{250 \%}. $$  {eq:eip-923}

**Discussion**
One-fourth of a percent is an acceptable loss. Note that if 100 MW of power had been transmitted at 25 kV, then a current of 4000 A would have been needed. This would result in a power loss in the lines of 16.0 MW, or 16.0% rather than 0.250%. The lower the voltage, the more current is needed, and the greater the power loss in the fixed-resistance transmission lines. Of course, lower-resistance lines can be built, but this requires larger and more expensive wires. If superconducting lines could be economically produced, there would be no loss in the transmission lines at all. But, as we shall see in a later chapter, there is a limit to current in superconductors, too. In short, high voltages are more economical for transmitting power, and AC voltage is much easier to raise and lower, so that AC is used in most large-scale power distribution systems.
:::
It is widely recognized that high voltages pose greater hazards than low voltages. But, in fact, some high voltages, such as those associated with common static electricity, can be harmless. So it is not voltage alone that determines a hazard. It is not so widely recognized that AC shocks are often more harmful than similar DC shocks. Thomas Edison thought that AC shocks were more harmful and set up a DC power-distribution system in New York City in the late 1800s. There were bitter fights, in particular between Edison and George Westinghouse and Nikola Tesla, who were advocating the use of AC in early power-distribution systems. AC has prevailed largely due to transformers and lower power losses with high-voltage transmission.

:::note [interactive] Generator

Generate electricity with a bar magnet! Discover the physics behind the phenomena by exploring magnets and how you can use them to make a bulb light.
[Click to view content](https://openstax.org/l/28gen).
:::

## Section Summary {section:section-summary}
- Direct current  (DC) is the flow of electric current in only one direction. It refers to systems where the source voltage is constant.
- The voltage source of an alternating current (AC) system puts out $V={V}_{0}\;\text{sin 2}\pi \text{ft}$, where $V$ is the voltage at time $t$, ${V}_{0}$ is the peak voltage, and $f$ is the frequency in hertz.
- In a simple circuit, $I=\text{V/R}$ and AC current is $I={I}_{0}\;\text{sin 2}\pi \text{ft}$, where $I$ is the current at time $t$, and ${I}_{0}={V}_{0}\text{/R}$ is the peak current.
- The average AC power  is  ${P}_{\text{ave}}=\frac{1}{2}{I}_{0}{V}_{0}$.
- Average (rms) current ${I}_{\text{rms}}$ and average (rms) voltage ${V}_{\text{rms}}$ are ${I}_{\text{rms}}=\frac{{I}_{0}}{\sqrt{2}}$ and ${V}_{\text{rms}}=\frac{{V}_{0}}{\sqrt{2}}$, where rms stands for root mean square.
- Thus, ${P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}$.
- Ohm’s law for AC is ${I}_{\text{rms}}=\frac{{V}_{\text{rms}}}{R}$.
- Expressions for the average power of an AC circuit  are ${P}_{\text{ave}}={I}_{\text{rms}}{V}_{\text{rms}}$,

${P}_{\text{ave}}=\frac{{V}_{\text{rms}}^{\;\;\;2}}{R}$, and

${P}_{\text{ave}}={I}_{\text{rms}}^{\;\;\;2}R$, analogous to the expressions for DC circuits.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1687500} type=conceptual-questions 
PROBLEM:
Give an example of a use of AC power other than in the household. Similarly, give an example of a use of DC power other than that supplied by batteries.
:::

:::exercise {fs-id1913213} type=conceptual-questions 
PROBLEM:
Why do voltage, current, and power go through zero 120 times per second for 60-Hz AC electricity?
:::

:::exercise {fs-id3131936} type=conceptual-questions 
PROBLEM:
You are riding in a train, gazing into the distance through its window. As close objects streak by, you notice that the nearby fluorescent lights make *dashed* streaks. Explain.
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id2302471} type=problems-exercises 
PROBLEM:
(a) What is the hot resistance of a 25-W light bulb that runs on 120-V AC? (b) If the bulb’s operating temperature is $\text{2700º}\text{C}$, what is its resistance at $\text{2600º}\text{C}$?
:::

:::exercise {fs-id1825974} type=problems-exercises 
PROBLEM:
Certain heavy industrial equipment uses AC power that has a peak voltage of 679 V. What is the rms voltage?
SOLUTION:
480 V
:::

:::exercise {fs-id1320570} type=problems-exercises 
PROBLEM:
A certain circuit breaker trips when the rms current is 15.0 A. What is the corresponding peak current?
:::

:::exercise {fs-id808814} type=problems-exercises 
PROBLEM:
Military aircraft use 400-Hz AC power, because it is possible to design lighter-weight equipment at this higher frequency. What is the time for one complete cycle of this power?
SOLUTION:
2.50 ms
:::

:::exercise {fs-id2783577} type=problems-exercises 
PROBLEM:
A North American tourist takes his 25.0-W, 120-V AC razor to Europe, finds a special adapter, and plugs it into 240 V AC. Assuming constant resistance, what power does the razor consume as it is ruined?
:::

:::exercise {fs-id1481055} type=problems-exercises 
PROBLEM:
In this problem, you will verify statements made at the end of the power losses for [ref:fs-id3200045]. (a) What current is needed to transmit 100 MW of power at a voltage of 25.0 kV? (b) Find the power loss in a $1\text{.}\text{00 -}\;Ω$ transmission line. (c) What percent loss does this represent?
SOLUTION:
(a) 4.00 kA
(b) 16.0 MW
(c) 16.0%
:::

:::exercise {fs-id1727676} type=problems-exercises 
PROBLEM:
A small office-building air conditioner operates on 408-V AC and consumes 50.0 kW. (a) What is its effective resistance? (b) What is the cost of running the air conditioner during a hot summer month when it is on 8.00 h per day for 30 days and electricity costs $9.00 cents\text{/kW}⋅\text{h}$?
:::

:::exercise {fs-id2942325} type=problems-exercises 
PROBLEM:
What is the peak power consumption of a 120-V AC microwave oven that draws 10.0 A?
SOLUTION:
2.40 kW
:::

:::exercise {fs-id1332162} type=problems-exercises 
PROBLEM:
What is the peak current through a 500-W room heater that operates on 120-V AC power?
:::

:::exercise {fs-id1244041} type=problems-exercises 
PROBLEM:
Two different electrical devices have the same power consumption, but one is meant to be operated on 120-V AC and the other on 240-V AC. (a) What is the ratio of their resistances? (b) What is the ratio of their currents? (c) Assuming its resistance is unaffected, by what factor will the power increase if a 120-V AC device is connected to 240-V AC?
SOLUTION:
(a) 4.0
(b) 0.50
(c) 4.0
:::

:::exercise {fs-id1698350} type=problems-exercises 
PROBLEM:
Nichrome wire is used in some radiative heaters. (a) Find the resistance needed if the average power output is to be 1.00 kW utilizing 120-V AC. (b) What length of Nichrome wire, having a cross-sectional area of $5.00{\text{mm}}^{2}$, is needed if the operating temperature is $\text{500º C}$? (c) What power will it draw when first switched on?
:::

:::exercise {fs-id1993162} type=problems-exercises 
PROBLEM:
Find the time after $t=0$ when the instantaneous voltage of 60-Hz AC first reaches the following values: (a) ${V}_{0}/2$ (b) ${V}_{0}$ (c) 0.
SOLUTION:
(a) 1.39 ms
(b) 4.17 ms
(c) 8.33 ms
:::

:::exercise {fs-id1429959} type=problems-exercises 
PROBLEM:
(a) At what two times in the first period following $t=0$ does the instantaneous voltage in 60-Hz AC equal ${V}_{\text{rms}}$? (b) $-{V}_{\text{rms}}$?
:::

## Glossary
- {def} **direct current**: (DC) the flow of electric charge in only one direction
- {def} **alternating current**: (AC) the flow of electric charge that periodically reverses direction
- {def} **AC voltage**: voltage that fluctuates sinusoidally with time, expressed as *V = V*<sub>0</sub> sin 2*πft*, where *V* is the voltage at time *t, V*<sub>0</sub> is the peak voltage, and *f* is the frequency in hertz
- {def} **AC current**: current that fluctuates sinusoidally with time, expressed as *I = I*<sub>0</sub> sin 2*πft*, where *I* is the current at time *t, I*<sub>0</sub> is the peak current, and *f* is the frequency in hertz
- {def} **rms current**: the root mean square of the current,
${I}_{\text{rms}}={I}_{0}/\sqrt{2}$
, where *I*<sub>0</sub> is the peak current, in an AC system
- {def} **rms voltage**: the root mean square of the voltage,
${V}_{\text{rms}}={V}_{0}/\sqrt{2}$
, where *V*<sub>0</sub> is the peak voltage, in an AC system

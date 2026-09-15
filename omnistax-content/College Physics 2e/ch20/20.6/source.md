# Electric Hazards and the Human Body

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define thermal hazard, shock hazard, and short circuit.
- Explain what effects various levels of current have on the human body.
There are two known hazards of electricity—thermal and shock. A {term:thermal hazard} is one where excessive electric power causes undesired thermal effects, such as starting a fire in the wall of a house. A {term:shock hazard} occurs when electric current passes through a person. Shocks range in severity from painful, but otherwise harmless, to heart-stopping lethality. This section considers these hazards and the various factors affecting them in a quantitative manner. [Electrical Safety: Systems and Devices](module:m42416) will consider systems and devices for preventing electrical hazards.

## Thermal Hazards
Electric power causes undesired heating effects whenever electric energy is converted to thermal energy at a rate faster than it can be safely dissipated. A classic example of this is the {term:short circuit}, a low-resistance path between terminals of a voltage source. An example of a short circuit is shown in [ref:import-auto-id2670067]. Insulation on wires leading to an appliance has worn through, allowing the two wires to come into contact. Such an undesired contact with a high voltage is called a *short*. Since the resistance of the short, $r$, is very small, the power dissipated in the short, $P={V}^{2}/r$, is very large. For example, if $V$ is 120 V and $r$ is $0\text{.}\text{100}\;Ω$, then the power is 144 kW, *much* greater than that used by a typical household appliance. Thermal energy delivered at this rate will very quickly raise the temperature of surrounding materials, melting or perhaps igniting them.

> FIGURE {fig:import-auto-id2670067} src=../../media/Figure_21_06_01a.jpg
> alt: Part a shows an electric toaster of resistance capital R connected to an A C voltage source. The wires used to connect the toaster to the supply are worn out in one place, allowing them to come into contact with an undesired, lower resistance path, symbolized by lowercase r. Part b of the figure represents the circuit diagram for the electric connection described in part a. The voltage source is connected to two paths in parallel: the toaster with resistance capital R, and the undesired lower resistance path, symbolized by lowercase r.
> width: 225
> caption: A short circuit is an undesired low-resistance path across a voltage source. (a) Worn insulation on the wires of a toaster allow them to come into contact with a low resistance $r$. Since $P={V}^{2}/r$, thermal power is created so rapidly that the cord melts or burns. (b) A schematic of the short circuit.

One particularly insidious aspect of a short circuit is that its resistance may actually be decreased due to the increase in temperature. This can happen if the short creates ionization. These charged atoms and molecules are free to move and, thus, lower the resistance $r$. Since $P={V}^{2}/r$, the power dissipated in the short rises, possibly causing more ionization, more power, and so on. High voltages, such as the 480-V AC used in some industrial applications, lend themselves to this hazard, because higher voltages create higher initial power production in a short.
Another serious, but less dramatic, thermal hazard occurs when wires supplying power to a user are overloaded with too great a current. As discussed in the previous section, the power dissipated in the supply wires is $P={I}^{2}{R}_{\text{w}}$, where ${R}_{\text{w}}$ is the resistance of the wires and $I$ the current flowing through them. If either $I$ or ${R}_{\text{w}}$ is too large, the wires overheat. For example, a worn appliance cord (with some of its braided wires broken) may have ${R}_{\text{w}}=2\text{.}\text{00}\;Ω$ rather than the $0\text{.}\text{100}\;Ω$ it should be. If 10.0 A of current passes through the cord, then $P={I}^{2}{R}_{\text{w}}=\text{200 W}$ is dissipated in the cord—much more than is safe. Similarly, if a wire with a $0\text{.}\text{100}\;\text{-}\;Ω$ resistance is meant to carry a few amps, but is instead carrying 100 A, it will severely overheat. The power dissipated in the wire will in that case be $P=\text{1000 W}$. Fuses and circuit breakers are used to limit excessive currents. (See [ref:import-auto-id1945437] and [ref:import-auto-id3098314].) Each device opens the circuit automatically when a sustained current exceeds safe limits.

> FIGURE {fig:import-auto-id1945437} src=../../media/Figure_21_06_02a.jpg
> alt: Part a of the figure shows an electric fuse with metal having low melting point enclosed in a case with wires leading to the circuit and voltage source. There is a viewing window in the fuse casing. Part b shows a circuit breaker. There is a movable metal strip at one end from which a connector to the circuit is attached at a fixed contact point. There is a compressed spring and switch gear attached adjacent to each other at the other end of the movable metal strip. The movable metallic strip has a bimetallic strip attached perpendicular to it at its center. At the opposite end of the bimetallic strip, there is a connector to the voltage source.
> width: 300
> caption: (a) A fuse has a metal strip with a low melting point that, when overheated by an excessive current, permanently breaks the connection of a circuit to a voltage source. (b) A circuit breaker is an automatic but restorable electric switch. The one shown here has a bimetallic strip that bends to the right and into the notch if overheated. The spring then forces the metal strip downward, breaking the electrical connection at the points.

> FIGURE {fig:import-auto-id3098314} src=../../media/Figure_21_06_03a.jpg
> alt: The diagram shows an electric circuit with an A C voltage source, a fuse or circuit breaker, and a resistance R all connected in series to form a closed circuit.
> width: 175
> caption: Schematic of a circuit with a fuse or circuit breaker in it. Fuses and circuit breakers act like automatic switches that open when sustained current exceeds desired limits.

Fuses and circuit breakers for typical household voltages and currents are relatively simple to produce, but those for large voltages and currents experience special problems. For example, when a circuit breaker tries to interrupt the flow of high-voltage electricity, a spark can jump across its points that ionizes the air in the gap and allows the current to continue flowing. Large circuit breakers found in power-distribution systems employ insulating gas and even use jets of gas to blow out such sparks. Here AC is safer than DC, since AC current goes through zero 120 times per second, giving a quick opportunity to extinguish these arcs.

## Shock Hazards
Electrical currents through people produce tremendously varied effects. An electrical current can be used to block back pain. The possibility of using electrical current to stimulate muscle action in paralyzed limbs, perhaps allowing paraplegics to walk, is under study. TV dramatizations in which electrical shocks are used to bring a heart attack victim out of ventricular fibrillation (a massively irregular, often fatal, beating of the heart) are more than common. Yet most electrical shock fatalities occur because a current put the heart into fibrillation. A pacemaker uses electrical shocks to stimulate the heart to beat properly. Some fatal shocks do not produce burns, but warts can be safely burned off with electric current (though freezing using liquid nitrogen is now more common). Of course, there are consistent explanations for these disparate effects. The major factors upon which the effects of electrical shock depend are
1. The amount of current $I$
2. The path taken by the current
3. The duration of the shock
4. The frequency $f$ of the current (*$f=0$* for DC)
[ref:import-auto-id3063438] gives the effects of electrical shocks as a function of current for a typical accidental shock. The effects are for a shock that passes through the trunk of the body, has a duration of 1 s, and is caused by 60-Hz power.

> FIGURE {fig:import-auto-id1431810} src=../../media/Figure_21_06_04a.jpg
> alt: Part a of the diagram shows a person working on an electrically hot wire with a metal tool. The next step shows that he is a victim of electric shock and is thrown backward with his arms and legs stretched. The metal tool also falls off his hand. Part b of the diagram shows a person holding the electrically hot wire with his hands. The person is not thrown away. He cannot let go of the wire because the muscles that close the fingers are stronger than those that open them.
> width: 400
> caption: An electric current can cause muscular contractions with varying effects. (a) The victim is “thrown” backward by involuntary muscle contractions that extend the legs and torso. (b) The victim can’t let go of the wire that is stimulating all the muscles in the hand. Those that close the fingers are stronger than those that open them.

> TABLE {tab:import-auto-id3063438} cols=2
> title: Effects of Electrical Shock as a Function of Current^[For an average male shocked through trunk of body for 1 s by 60-Hz AC. Values for females are 60–80% of those listed.]
> summary: The table shows how different amounts of current produce different effects on the human body. The left column shows various magnitudes of current in milliamperes, and the right column shows its effects on body.

| Current (mA) | Effect |
| --- | --- |
| 1 | Threshold of sensation |
| 5 | Maximum harmless current |
| 10–20 | Onset of sustained muscular contraction; cannot let go for duration of shock; contraction of chest muscles may stop breathing during shock |
| 50 | Onset of pain |
| 100–300+ | Ventricular fibrillation possible; often fatal |
| 300 | Onset of burns depending on concentration of current |
| 6000 (6 A) | Onset of sustained ventricular contraction and respiratory paralysis; both cease when shock ends; heartbeat may return to normal; used to defibrillate the heart |

Our bodies are relatively good conductors due to the water in our bodies. Given that larger currents will flow through sections with lower resistance (to be further discussed in the next chapter), electric currents preferentially flow through paths in the human body that have a minimum resistance in a direct path to earth. The earth is a natural electron sink. Wearing insulating shoes, a requirement in many professions, prohibits a pathway for electrons by providing a large resistance in that path. Whenever working with high-power tools (drills), or in risky situations, ensure that you do not provide a pathway for current flow (especially through the heart).
Very small currents pass harmlessly and unfelt through the body. This happens to you regularly without your knowledge. The threshold of sensation is only 1 mA and, although unpleasant, shocks are apparently harmless for currents less than 5 mA. A great number of safety rules take the 5-mA value for the maximum allowed shock. At 10 to 20 mA and above, the current can stimulate sustained muscular contractions much as regular nerve impulses do. People sometimes say they were knocked across the room by a shock, but what really happened was that certain muscles contracted, propelling them in a manner not of their own choosing. (See [ref:import-auto-id1431810](a).) More frightening, and potentially more dangerous, is the “can’t let go” effect illustrated in [ref:import-auto-id1431810](b). The muscles that close the fingers are stronger than those that open them, so the hand closes involuntarily on the wire shocking it. This can prolong the shock indefinitely. It can also be a danger to a person trying to rescue the victim, because the rescuer’s hand may close about the victim’s wrist. Usually the best way to help the victim is to give the fist a hard knock/blow/jar with an insulator or to throw an insulator at the fist. Modern electric fences, used in animal enclosures, are now pulsed on and off to allow people who touch them to get free, rendering them less lethal than in the past.
Greater currents may affect the heart. Its electrical patterns can be disrupted, so that it beats irregularly and ineffectively in a condition called “ventricular fibrillation.” This condition often lingers after the shock and is fatal due to a lack of blood circulation. The threshold for ventricular fibrillation is between 100 and 300 mA. At about 300 mA and above, the shock can cause burns, depending on the concentration of current—the more concentrated, the greater the likelihood of burns.
Very large currents cause the heart and diaphragm to contract for the duration of the shock. Both the heart and breathing stop. Interestingly, both often return to normal following the shock. The electrical patterns on the heart are completely erased in a manner that the heart can start afresh with normal beating, as opposed to the permanent disruption caused by smaller currents that can put the heart into ventricular fibrillation. The latter is something like scribbling on a blackboard, whereas the former completely erases it. TV dramatizations of electric shock used to bring a heart attack victim out of ventricular fibrillation also show large paddles. These are used to spread out current passed through the victim to reduce the likelihood of burns.
Current is the major factor determining shock severity (given that other conditions such as path, duration, and frequency are fixed, such as in the table and preceding discussion). A larger voltage is more hazardous, but since $I=\text{V/R}$, the severity of the shock depends on the combination of voltage and resistance. For example, a person with dry skin has a resistance of about $\text{200}\;\text{k}Ω$. If he comes into contact with 120-V AC, a current $I=(\text{120 V})/(\text{200 k}Ω)\text{= 0}\text{.}\text{6 mA}$ passes harmlessly through him. The same person soaking wet may have a resistance of $\text{10}\text{.}0\;\text{k}Ω$ and the same 120 V will produce a current of 12 mA—above the “can’t let go” threshold and potentially dangerous.
Most of the body’s resistance is in its dry skin. When wet, salts go into ion form, lowering the resistance significantly. The interior of the body has a much lower resistance than dry skin because of all the ionic solutions and fluids it contains. If skin resistance is bypassed, such as by an intravenous infusion, a catheter, or exposed pacemaker leads, a person is rendered {term:microshock sensitive}. In this condition, currents about 1/1000 those listed in [ref:import-auto-id3063438] produce similar effects. During open-heart surgery, currents as small as $\text{20}\mu \text{A}$ can be used to still the heart. Stringent electrical safety requirements in hospitals, particularly in surgery and intensive care, are related to the doubly disadvantaged microshock-sensitive patient. The break in the skin has reduced his resistance, and so the same voltage causes a greater current, and a much smaller current has a greater effect.

> FIGURE {fig:import-auto-id3190768} src=../../media/Figure_21_06_05a.jpg
> alt: The graph of average values for the threshold of sensation and the Can’t let go current as a function of frequency, with current in milliamperes verses frequency in hertz. The current is plotted along the vertical axis and frequency along the horizontal axis. The plot has two curves. The curve for Can’t let go current starts off at a value nearly eighteen milliamps on the vertical axis. The curve is smooth and dips until frequency equals about one hundred hertz and then rises for values of frequency above one hundred hertz. The curve for Threshold of sensation current starts off at a value nearly four milliamps on the vertical axis. The curve is smooth and dips until frequency equals about one hundred hertz and then rises for values of frequency above one hundred hertz. The maximum value of current reached for this curve is nearly equal to the initial value for the Can’t let go current curve. The Threshold of sensation curve lies below the curve for Can’t let go current.
> width: 250
> caption: Graph of average values for the threshold of sensation and the “can’t let go” current as a function of frequency. The lower the value, the more sensitive the body is at that frequency.

Factors other than current that affect the severity of a shock are its path, duration, and AC frequency. Path has obvious consequences. For example, the heart is unaffected by an electric shock through the brain, such as may be used to treat manic depression. And it is a general truth that the longer the duration of a shock, the greater its effects. [ref:import-auto-id3190768] presents a graph that illustrates the effects of frequency on a shock. The curves show the minimum current for two different effects, as a function of frequency. The lower the current needed, the more sensitive the body is at that frequency. Ironically, the body is most sensitive to frequencies near the 50- or 60-Hz frequencies in common use. The body is slightly less sensitive for DC ($f=0$), mildly confirming Edison’s claims that AC presents a greater hazard. At higher and higher frequencies, the body becomes progressively less sensitive to any effects that involve nerves. This is related to the maximum rates at which nerves can fire or be stimulated. At very high frequencies, electrical current travels only on the surface of a person. Thus a wart can be burned off with very high frequency current without causing the heart to stop. (Do not try this at home with 60-Hz AC!) Some of the spectacular demonstrations of electricity, in which high-voltage arcs are passed through the air and over people’s bodies, employ high frequencies and low currents. (See [ref:import-auto-id3163065].) Electrical safety devices and techniques are discussed in detail in [Electrical Safety: Systems and Devices](module:m42416).

> FIGURE {fig:import-auto-id3163065} src=../../media/Figure_21_06_06a.jpg
> alt: Photograph of an electric arc produced between two multi stranded wires close to each other but not in contact.
> width: 300
> caption: Is this electric arc dangerous? The answer depends on the AC frequency and the power involved. (credit: Khimich Alex, Wikimedia Commons)

## Section Summary {section:section-summary}
- The two types of electric hazards are thermal (excessive power) and shock (current through a person).
- Shock severity is determined by current, path, duration, and AC frequency.
- [ref:import-auto-id3063438] lists shock hazards as a function of current.
- [ref:import-auto-id3190768] graphs the threshold current for two hazards as a function of frequency.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3013869} type=conceptual-questions 
PROBLEM:
Using an ohmmeter, a student measures the resistance between various points on his body. They find that the resistance between two points on the same finger is about the same as the resistance between two points on opposite hands—both are several hundred thousand ohms. Furthermore, the resistance decreases when more skin is brought into contact with the probes of the ohmmeter. Finally, there is a dramatic drop in resistance (to a few thousand ohms) when the skin is wet. Explain these observations and their implications regarding skin and internal resistance of the human body.
:::

:::exercise {fs-id2626129} type=conceptual-questions 
PROBLEM:
What are the two major hazards of electricity?
:::

:::exercise {fs-id3091714} type=conceptual-questions 
PROBLEM:
Why isn’t a short circuit a shock hazard?
:::

:::exercise {fs-id2384713} type=conceptual-questions 
PROBLEM:
What determines the severity of a shock? Can you say that a certain voltage is hazardous without further information?
:::

:::exercise {fs-id3190812} type=conceptual-questions 
PROBLEM:
An electrified needle is used to burn off warts, with the circuit being completed by having the patient sit on a large butt plate. Why is this plate large?
:::

:::exercise {fs-id3013708} type=conceptual-questions 
PROBLEM:
Some surgery is performed with high-voltage electricity passing from a metal scalpel through the tissue being cut. Considering the nature of electric fields at the surface of conductors, why would you expect most of the current to flow from the sharp edge of the scalpel? Do you think high- or low-frequency AC is used?
:::

:::exercise {fs-id3407779} type=conceptual-questions 
PROBLEM:
Some devices often used in bathrooms, such as hairdryers, often have safety messages saying “Do not use when the bathtub or basin is full of water.” Why is this so?
:::

:::exercise {fs-id2677167} type=conceptual-questions 
PROBLEM:
We are often advised to not flick electric switches with wet hands, dry your hand first. We are also advised to never throw water on an electric fire. Why is this so?
:::

:::exercise {fs-id2428881} type=conceptual-questions 
PROBLEM:
Before working on a power transmission line, experts will touch the line with the back of the hand as a final check that the voltage is zero. Why the back of the hand?
:::

:::exercise {fs-id3179465} type=conceptual-questions 
PROBLEM:
Why is the resistance of wet skin so much smaller than dry, and why do blood and other bodily fluids have low resistances?
:::

:::exercise {fs-id3009000} type=conceptual-questions 
PROBLEM:
Could a person on intravenous infusion (an IV) be microshock sensitive?
:::

:::exercise {fs-id2409820} type=conceptual-questions 
PROBLEM:
In view of the small currents that cause shock hazards and the larger currents that circuit breakers and fuses interrupt, how do they play a role in preventing shock hazards?
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id2952945} type=problems-exercises 
PROBLEM:
(a) How much power is dissipated in a short circuit of 220-V AC through a resistance of $0\text{.}\text{250}\;Ω$? (b) What current flows?
SOLUTION:
(a) 194 kW
(b) 880 A
:::

:::exercise {fs-id1904166} type=problems-exercises 
PROBLEM:
What voltage is involved in a 1.44-kW short circuit through a $0\text{.}\text{100}\;\text{-}\;Ω$ resistance?
:::

:::exercise {fs-id1071853} type=problems-exercises 
PROBLEM:
Find the current through a person and identify the likely effect on her if she touches a 120-V AC source: (a) if she is standing on a rubber mat and offers a total resistance of $\text{300 k}Ω$; (b) if she is standing barefoot on wet grass and has a resistance of only $\text{4500}\;Ω$.
SOLUTION:
(a) 0.400 mA, no effect
(b) 26.7 mA, muscular contraction for duration of the shock (can't let go)
:::

:::exercise {fs-id2578434} type=problems-exercises 
PROBLEM:
While taking a bath, a person touches the metal case of a radio. The path through the person to the drainpipe and ground has a resistance of $\text{4000}\;Ω$. What is the smallest voltage on the case of the radio that could cause ventricular fibrillation?
:::

:::exercise {fs-id2930233} type=problems-exercises 
PROBLEM:
Foolishly trying to fish a burning piece of bread from a toaster with a metal butter knife, a man comes into contact with 120-V AC. He does not even feel it since, luckily, he is wearing rubber-soled shoes. What is the minimum resistance of the path the current follows through the person?
SOLUTION:
$1\text{.}\text{20}×{\text{10}}^{5}\;Ω$
:::

:::exercise {fs-id3010795} type=problems-exercises 
PROBLEM:
(a) During surgery, a current as small as $\text{20.0}\mu \text{A}$ applied directly to the heart may cause ventricular fibrillation. If the resistance of the exposed heart is $\text{300}\;Ω$, what is the smallest voltage that poses this danger? (b) Does your answer imply that special electrical safety precautions are needed?
:::

:::exercise {fs-id1371721} type=problems-exercises 
PROBLEM:
(a) What is the resistance of a 220-V AC short circuit that generates a peak power of 96.8 kW? (b) What would the average power be if the voltage was 120 V AC?
SOLUTION:
(a) $1\text{.}\text{00}\;Ω$
(b) 14.4 kW
:::

:::exercise {fs-id2653461} type=problems-exercises 
PROBLEM:
A heart defibrillator passes 10.0 A through a patient’s torso for 5.00 ms in an attempt to restore normal beating. (a) How much charge passed? (b) What voltage was applied if 500 J of energy was dissipated? (c) What was the path’s resistance? (d) Find the temperature increase caused in the 8.00 kg of affected tissue.
:::

:::exercise {fs-id2438452} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
A short circuit in a 120-V appliance cord has a $0\text{.}\text{500}\text{-}Ω$ resistance. Calculate the temperature rise of the 2.00 g of surrounding materials, assuming their specific heat capacity is $0.200\;\text{cal/g}⋅º\text{C}$ and that it takes 0.0500 s for a circuit breaker to interrupt the current. Is this likely to be damaging?
SOLUTION:
Temperature increases $\text{860º C}$. It is very likely to be damaging.
:::

:::exercise {fs-id1995951} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a person working in an environment where electric currents might pass through their body. Construct a problem in which you calculate the resistance of insulation needed to protect the person from harm. Among the things to be considered are the voltage to which the person might be exposed, likely body resistance (dry, wet, …), and acceptable currents (safe but sensed, safe and unfelt, …).
:::

## Glossary
- {def} **thermal hazard**: a hazard in which electric current causes undesired thermal effects
- {def} **shock hazard**: when electric current passes through a person
- {def} **short circuit**: also known as a “short,” a low-resistance path between terminals of a voltage source
- {def} **microshock sensitive**: a condition in which a person’s skin resistance is bypassed, possibly by a medical procedure, rendering the person vulnerable to electrical shock at currents about 1/1000 the normally required level

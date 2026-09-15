# Sound Intensity and Sound Level

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define intensity, sound intensity, and sound pressure level.
- Calculate sound intensity levels in decibels (dB).

> FIGURE {fig:import-auto-id2009984} src=../../media/Figure_18_03_01aa.jpg
> alt: Photograph of a road jammed with traffic of all types of vehicles.
> width: 250
> caption: Noise on crowded roadways like this one in Delhi makes it hard to hear others unless they shout. (credit: Lingaraj G J, Flickr)

In a quiet forest, you can sometimes hear a single leaf fall to the ground. After settling into bed, you may hear your blood pulsing through your ears. But when a passing motorist has his stereo turned up, you cannot even hear what the person next to you in your car is saying. We are all very familiar with the loudness of sounds and aware that they are related to how energetically the source is vibrating. In cartoons depicting a screaming person (or an animal making a loud noise), the cartoonist often shows an open mouth with a vibrating uvula, the hanging tissue at the back of the mouth, to suggest a loud sound coming from the throat [ref:import-auto-id3151414]. High noise exposure is hazardous to hearing, and it is common for musicians to have hearing losses that are sufficiently severe that they interfere with the musicians’ abilities to perform. The relevant physical quantity is sound intensity, a concept that is valid for all sounds whether or not they are in the audible range.
Intensity is defined to be the power per unit area carried by a wave. Power is the rate at which energy is transferred by the wave. In equation form, {term:intensity} *$I$* is

$$ I=\frac{P}{A}, $$  {eq:eip-994}

where $P$ is the power through an area *$A$*. The SI unit for *$I$* is ${W/m}^{2}$. The intensity of a sound wave is related to its amplitude squared by the following relationship:

$$ I=\frac{{(\Delta p)}^{2}}{2{ρv}_{w}}. $$  {eq:eip-865}

Here $\Delta p$ is the pressure variation or pressure amplitude (half the difference between the maximum and minimum pressure in the sound wave) in units of pascals (Pa) or ${N/m}^{2}$. (We are using a lower case $p$  for pressure to distinguish it from power, denoted by  $P$ above.) The energy (as kinetic energy $\frac{{mv}^{2}}{2}$) of an oscillating element of air due to a traveling sound wave is proportional to its amplitude squared. In this equation, $ρ$ is the density of the material in which the sound wave travels, in units of ${kg/m}^{3}$, and ${v}_{w}$ is the speed of sound in the medium, in units of m/s. The pressure variation is proportional to the amplitude of the oscillation, and so *$I$* varies as $(\Delta p{)}^{2}$ ([ref:import-auto-id3151414]). This relationship is consistent with the fact that the sound wave is produced by some vibration; the greater its pressure amplitude, the more the air is compressed in the sound it creates.

> FIGURE {fig:import-auto-id3151414} src=../../media/Figure_18_03_01ab.jpg
> alt: The image shows two graphs, with a bird positioned to the left of each one. The first graph represents a low frequency sound of a bird. The pressure variation shows small amplitude maxima and minima, represented by a sine curve of gauge pressure versus position with a small amplitude. The second graph represents a high frequency sound of a screaming bird. The pressure variation shows large amplitude maxima and minima, represented by a sine curve of gauge pressure versus position with a large amplitude.
> width: 200
> caption: Graphs of the gauge pressures in two sound waves of different intensities. The more intense sound is produced by a source that has larger-amplitude oscillations and has greater pressure maxima and minima. Because pressures are higher in the greater-intensity sound, it can exert larger forces on the objects it encounters.

Sound intensity levels are quoted in decibels (dB) much more often than sound intensities in watts per meter squared. Decibels are the unit of choice in the scientific literature as well as in the popular media. The reasons for this choice of units are related to how we perceive sounds. How our ears perceive sound can be more accurately described by the logarithm of the intensity rather than directly to the intensity. The {term:sound intensity level} *****$β$* in decibels of a sound having an intensity $I$ in watts per meter squared is defined to be

$$ β\;(\text{dB})=\text{10}\;{\text{log}}_{\text{10}}(\frac{I}{{I}_{0}}), $$  {eq:eip-313}

where ${I}_{0}={\text{10}}^{\text{–12}}\;{\text{W/m}}^{2}$ is a reference intensity. In particular, ${I}_{0}$ is the lowest or threshold intensity of sound a person with normal hearing can perceive at a frequency of 1000 Hz. Sound intensity level is not the same as intensity. Because *$β$* is defined in terms of a ratio, it is a unitless quantity telling you the *level* of the sound relative to a fixed standard (${\text{10}}^{\text{–12}}\;{\text{W/m}}^{2}$, in this case). The units of decibels (dB) are used to indicate this ratio is multiplied by 10 in its definition. The bel, upon which the decibel is based, is named for Alexander Graham Bell, the inventor of the telephone.

> TABLE {tab:import-auto-id3250463} cols=3
> title: Sound Intensity Levels and Intensities
> summary: A table of Sound Intensity Levels and Intensities. There are three columns. The first column gives a range of sound intensity levels in decibels, the second column gives the intensities in watts per meter squared, and the third column gives examples or effects. Rows containing notes about hearing damage are inserted before one hundred, one hundred ten, and one hundred twenty decibels.

| Sound intensity level *β* (dB) | Intensity *I*(W/m<sup>2</sup>) | Example/effect |
| --- | --- | --- |
| $0$ | $1\times {10}^{–12}$ | Threshold of hearing at 1000 Hz |
| $10$ | $1\times {10}^{–11}$ | Rustle of leaves |
| $20$ | $1\times {10}^{–10}$ | Whisper at 1 m distance |
| $30$ | $1\times {10}^{–9}$ | Quiet home |
| $40$ | $1\times {10}^{–8}$ | Average home |
| $50$ | $1\times {10}^{–7}$ | Average office, soft music |
| $60$ | $1\times {10}^{–6}$ | Normal conversation |
| $70$ | $1\times {10}^{–5}$ | Noisy office, busy traffic |
| $80$ | $1\times {10}^{–4}$ | Loud radio, classroom lecture |
| $90$ | $1\times {10}^{–3}$ | Inside a heavy truck; damage from prolonged exposure^[Several government agencies and health-related professional associations recommend that 85 dB not be exceeded for 8-hour daily exposures in the absence of hearing protection.] |
| $100$ | $1\times {10}^{–2}$ | Noisy factory, siren at 30 m; damage from 8 h per day exposure |
| $110$ | $1\times {10}^{–1}$ | Damage from 30 min per day exposure |
| $120$ | $1$ | Loud rock concert, pneumatic chipper at 2 m; threshold of pain |
| $140$ | $1\times {10}^{2}$ | Jet airplane at 30 m; severe pain, damage in seconds |
| $160$ | $1\times {10}^{4}$ | Bursting of eardrums |

The decibel level of a sound having the threshold intensity of ${\text{10}}^{-\text{12}}\;{\text{W/m}}^{2}$ is $β=0\;\text{dB}$, because ${\text{log}}_{\text{10}}1=0$. That is, the threshold of hearing is 0 decibels. [ref:import-auto-id3250463] gives levels in decibels and intensities in watts per meter squared for some familiar sounds.
One of the more striking things about the intensities in [ref:import-auto-id3250463] is that the intensity in watts per meter squared is quite small for most sounds. The ear is sensitive to as little as a trillionth of a watt per meter squared—even more impressive when you realize that the area of the eardrum is only about ${1 cm}^{2}$, so that only ${\text{10}}^{-\text{16}}$ W falls on it at the threshold of hearing! Air molecules in a sound wave of this intensity vibrate over a distance of less than one molecular diameter, and the gauge pressures involved are less than ${\text{10}}^{-9}$ atm.
Another impressive feature of the sounds in [ref:import-auto-id3250463] is their numerical range. Sound intensity varies by a factor of ${\text{10}}^{\text{12}}$ from threshold to a sound that causes damage in seconds. You are unaware of this tremendous range in sound intensity because how your ears respond can be described approximately as the logarithm of intensity. Thus, sound intensity levels in decibels fit your experience better than intensities in watts per meter squared. The decibel scale is also easier to relate to because most people are more accustomed to dealing with numbers such as 0, 53, or 120 than numbers such as $1\text{.}\text{00}\times {\text{10}}^{-\text{11}}$.
One more observation readily verified by examining [ref:import-auto-id3250463] or using $I={\frac{(\Delta p)}{2{\rho \text{v}}_{\text{w}}}}^{2}$ is that each factor of 10 in intensity corresponds to 10 dB. For example, a 90 dB sound compared with a 60 dB sound is 30 dB greater, or three factors of 10 (that is, ${\text{10}}^{3}$ times) as intense. Another example is that if one sound is ${\text{10}}^{7}$ as intense as another, it is 70 dB higher. See [ref:import-auto-id2681584].

> TABLE {tab:import-auto-id2681584} cols=2
> title: Ratios of Intensities and Corresponding Differences in Sound Intensity Levels
> summary: This table gives ratios of intensities and corresponding differences in sound intensity levels in two columns.

| ${I}_{2}/{I}_{1}$ | ${β}_{2}-{β}_{1}$ |
| --- | --- |
| 2.0 | 3.0 dB |
| 5.0 | 7.0 dB |
| 10.0 | 10.0 dB |

:::example {ex:fs-id1037648} Calculating Sound Intensity Levels: Sound Waves
Calculate the sound intensity level in decibels for a sound wave traveling in air at $0ºC$ and having a pressure amplitude of 0.656 Pa.
**Strategy**
We are given $\Delta p$, so we can calculate $I$ using the equation  $I={(\Delta p)}^{2}/{(2{\text{pv}}_{w})}^{2}$. Using $I$, we can calculate  $β$ straight from its definition in  $β\;(\text{dB})=\text{10}\;{\text{log}}_{\text{10}}(I/{I}_{0})$.
**Solution**
(1) Identify knowns:
Sound travels at 331 m/s in air at $0ºC$.
Air has a density of $1.29 kg{/m}^{3}$ at atmospheric pressure and $0ºC$.
(2) Enter these values and the pressure amplitude into $I={(\Delta p)}^{2}/({2\rho \text{v}}_{w})$:

$$ I=\frac{{(\Delta p)}^{2}}{2{\rho \text{v}}_{w}}=\frac{{(0.656 Pa)}^{2}}{2(1\text{.}\text{29}\;{\text{kg/m}}^{3})(\text{331 m/s})}=5\text{.}\text{04}\times {\text{10}}^{-4}\;{\text{W/m}}^{2}. $$  {eq:eip-969}

(3) Enter the value for $I$ and the known value for ${I}_{0}$ into $β\;(\text{dB})=\text{10}\;{\text{log}}_{\text{10}}(I/{I}_{0})$. Calculate to find the sound intensity level in decibels:

$$ {10 log}_{10}(5.04\times {10}^{8})=10\;(8.70)\;dB=87 dB. $$  {eq:eip-273}

**Discussion**
This 87 dB sound has an intensity five times as great as an 80 dB sound. So a factor of five in intensity corresponds to a difference of 7 dB in sound intensity level. This value is true for any intensities differing by a factor of five.
:::

:::example {ex:fs-id3260260} Change Intensity Levels of a Sound: What Happens to the Decibel Level?
Show that if one sound is twice as intense as another, it has a sound level about 3 dB higher.
**Strategy**
You are given that the ratio of two intensities is 2 to 1, and are then asked to find the difference in their sound levels in decibels. You can solve this problem using of the properties of logarithms.
**Solution**
(1) Identify knowns:
The ratio of the two intensities is 2 to 1, or:

$$ \frac{{I}_{2}}{{I}_{1}}=2\text{.}\text{00}. $$  {eq:eip-696}

We wish to show that the difference in sound levels is about 3 dB. That is, we want to show:

$$ {β}_{2}-{β}_{1}=3\;\text{dB}. $$  {eq:eip-722}

Note that:

$$ {\text{log}}_{\text{10}}b-{\text{log}}_{\text{10}}a={\text{log}}_{\text{10}}(\frac{b}{a})\text{.} $$  {eq:eip-281}

(2) Use the definition of $β$ to get:

$$ {β}_{2}-{β}_{1}={\text{10 log}}_{\text{10}}(\frac{{I}_{2}}{{I}_{1}})=\text{10}\;{\text{log}}_{\text{10}}2.00=\text{10}\;(0\text{.}\text{301})\;\text{dB}. $$  {eq:eip-123}

Thus,

$$ {β}_{2}-{β}_{1}=3\text{.01 dB}. $$  {eq:eip-410}

**Discussion**
This means that the two sound intensity levels differ by 3.01 dB, or about 3 dB, as advertised. Note that because only the ratio ${I}_{2}/{I}_{1}$ is given (and not the actual intensities), this result is true for any intensities that differ by a factor of two. For example, a 56.0 dB sound is twice as intense as a 53.0 dB sound, a 97.0 dB sound is half as intense as a 100 dB sound, and so on.
:::
It should be noted at this point that there is another decibel scale in use, called the {term:sound pressure level}, based on the ratio of the pressure amplitude to a reference pressure. This scale is used particularly in applications where sound travels in water. It is beyond the scope of most introductory texts to treat this scale because it is not commonly used for sounds in air, but it is important to note that very different decibel levels may be encountered when sound pressure levels are quoted. For example, ocean noise pollution produced by ships may be as great as 200 dB expressed in the sound pressure level, where the more familiar sound intensity level we use here would be something under 140 dB for the same sound.

:::note [] Take-Home Investigation: Feeling Sound

Find a CD player and a CD that has rock music. Place the player on a light table, insert the CD into the player, and start playing the CD. Place your hand gently on the table next to the speakers. Increase the volume and note the level when the table just begins to vibrate as the rock music plays. Increase the reading on the volume control until it doubles. What has happened to the vibrations?
:::

:::exercise {fs-id3022970} type=check-understanding Check Your Understanding

PROBLEM:
Describe how amplitude is related to the loudness of a sound.
SOLUTION:
Amplitude is directly proportional to the experience of loudness. As amplitude increases, loudness increases.
:::

:::exercise {fs-id1282140} type=check-understanding Check Your Understanding

PROBLEM:
Identify common sounds at the levels of 10 dB, 50 dB, and 100 dB.
SOLUTION:
10 dB: Running fingers through your hair.
50 dB: Inside a quiet home with no television or radio.
100 dB: Take-off of a jet plane.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1373955} type=ap-test-prep 
PROBLEM:
In order to waken a sleeping child, the volume on an alarm clock is tripled. Under this new scenario, how much more energy will be striking the child’s ear drums each second?
(a) twice as much
(b) three times as much
(c) approximately 4.8 times as much
(d) six times as much
(e) nine times as much
SOLUTION:
(e)
:::

:::exercise {fs-id1725922} type=ap-test-prep 
PROBLEM:
A musician strikes the strings of a guitar such that they vibrate with twice the amplitude.
(a) Explain why this requires an energy input greater than twice the original value.
(b) Explain why the sound leaving the string will not result in a decibel level that is twice as great.
:::

## Section Summary {section:section-summary}
- Intensity is the same for a sound wave as was defined for all waves; it is
    

$$ I=\frac{P}{A}, $$  {eq:eip-122}

where $P$ is the power crossing area $A$. The SI unit for $I$ is watts per meter squared. The intensity of a sound wave is also related to the pressure amplitude $\Delta p$

$$ I=\frac{{(\Delta p)}^{2}}{2{\rho \text{v}}_{w}}, $$  {eq:eip-25}

where $ρ$ is the density of the medium in which the sound wave travels and ${v}_{w}$ is the speed of sound in the medium.
- Sound intensity level in units of decibels (dB) is
    

$$ β\;(\text{dB})=\text{10}\;{\text{log}}_{\text{10}}(\frac{I}{{I}_{0}}), $$  {eq:eip-756}

where ${I}_{0}={10}^{–12}\;W/{\text{m}}^{2}$ is the threshold intensity of hearing.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2023489} type=conceptual-questions 
PROBLEM:
Six members of a synchronized swim team wear earplugs to protect themselves against water pressure at depths, but they can still hear the music and perform the combinations in the water perfectly. One day, they were asked to leave the pool so the dive team could practice a few dives, and they tried to practice on a mat, but seemed to have a lot more difficulty. Why might this be?
:::

:::exercise {fs-id2010060} type=conceptual-questions 
PROBLEM:
A community is concerned about a plan to bring train service to their downtown from the town’s outskirts. The current sound intensity level, even though the rail yard is blocks away, is 70 dB downtown. The mayor assures the public that there will be a difference of only 30 dB in sound in the downtown area. Should the townspeople be concerned? Why?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id3387710} type=problems-exercises 
PROBLEM:
What is the intensity in watts per meter squared of 85.0-dB sound?
SOLUTION:

$$ 3.16\times {10}^{–4}\;{\text{W/m}}^{2} $$  {eq:import-auto-id3077432}

:::

:::exercise {fs-id1917720} type=problems-exercises 
PROBLEM:
The warning tag on a lawn mower states that it produces noise at a level of 91.0 dB. What is this in watts per meter squared?
:::

:::exercise {fs-id2450132} type=problems-exercises 
PROBLEM:
A sound wave traveling in $20ºC$ air has a pressure amplitude of 0.5 Pa. What is the intensity of the wave?
SOLUTION:

$$ 3.04\times {10}^{–4}\;{\text{W/m}}^{2} $$  {eq:eip-id2181139}

:::

:::exercise {fs-id1011837} type=problems-exercises 
PROBLEM:
What intensity level does the sound in the preceding problem correspond to?
:::

:::exercise {fs-id1947000} type=problems-exercises 
PROBLEM:
What sound intensity level in dB is produced by earphones that create an intensity of $4.00\times {\text{10}}^{\text{−2}}\;{\text{W/m}}^{\text{2}}$?
SOLUTION:
106 dB
:::

:::exercise {fs-id3257384} type=problems-exercises 
PROBLEM:
Show that an intensity of ${10}^{–12}\;{W/m}^{2}$ is the same as ${10}^{–16}\;{W/cm}^{2}$.
:::

:::exercise {fs-id3028387} type=problems-exercises 
PROBLEM:
(a) What is the decibel level of a sound that is twice as intense as a 90.0-dB sound? (b) What is the decibel level of a sound that is one-fifth as intense as a 90.0-dB sound?
SOLUTION:
(a) 93 dB
(b) 83 dB
:::

:::exercise {fs-id1335022} type=problems-exercises 
PROBLEM:
(a) What is the intensity of a sound that has a level 7.00 dB lower than a $4.00\times {10}^{–9}\;{W/m}^{2}$ sound? (b) What is the intensity of a sound that is 3.00 dB higher than a $4.00\times {10}^{–9}\;{W/m}^{2}$ sound?
:::

:::exercise {fs-id3076842} type=problems-exercises 
PROBLEM:
(a) How much more intense is a sound that has a level 17.0 dB higher than another? (b) If one sound has a level 23.0 dB less than another, what is the ratio of their intensities?
SOLUTION:
(a) 50.1
(b) $5.01\times {10}^{–3}$ or $\frac{1}{200}$
:::

:::exercise {fs-id2514370} type=problems-exercises 
PROBLEM:
People with good hearing can perceive sounds as low in level as $–8.00 dB$ at a frequency of 3000 Hz. What is the intensity of this sound in watts per meter squared?
:::

:::exercise {fs-id3017588} type=problems-exercises 
PROBLEM:
If a large housefly 3.0 m away from you makes a noise of 40.0 dB, what is the noise level of 1000 flies at that distance, assuming interference has a negligible effect?
SOLUTION:
70.0 dB
:::

:::exercise {fs-id2626138} type=problems-exercises 
PROBLEM:
Ten cars in a circle at a boom box competition produce a 120-dB sound intensity level at the center of the circle. What is the average sound intensity level produced there by each stereo, assuming interference effects can be neglected?
:::

:::exercise {fs-id3356163} type=problems-exercises 
PROBLEM:
The amplitude of a sound wave is measured in terms of its maximum gauge pressure. By what factor does the amplitude of a sound wave increase if the sound intensity level goes up by 40.0 dB?
SOLUTION:
100
:::

:::exercise {fs-id2451889} type=problems-exercises 
PROBLEM:
If a sound intensity level of 0 dB at 1000 Hz corresponds to a maximum gauge pressure (sound amplitude) of ${10}^{–9}\;\text{atm}$, what is the maximum gauge pressure in a 60-dB sound? What is the maximum gauge pressure in a 120-dB sound?
:::

:::exercise {fs-id2448344} type=problems-exercises 
PROBLEM:
An 8-hour exposure to a sound intensity level of 90.0 dB may cause hearing damage. What energy in joules falls on a 0.800-cm-diameter eardrum so exposed?
SOLUTION:

$$ 1.45\times {10}^{–3}\;\text{J} $$  {eq:eip-id1172656387014}

:::

:::exercise {fs-id2612930} type=problems-exercises 
PROBLEM:
(a) Ear trumpets were never very common, but they did aid people with hearing losses by gathering sound over a large area and concentrating it on the smaller area of the eardrum. What decibel increase does an ear trumpet produce if its sound gathering area is ${900 cm}^{2}$ and the area of the eardrum is ${0.500 cm}^{2}$, but the trumpet only has an efficiency of 5.00% in transmitting the sound to the eardrum? (b) Comment on the usefulness of the decibel increase found in part (a).
:::

:::exercise {fs-id1382514} type=problems-exercises 
PROBLEM:
Sound is more effectively transmitted into a stethoscope by direct contact than through the air, and it is further intensified by being concentrated on the smaller area of the eardrum. It is reasonable to assume that sound is transmitted into a stethoscope 100 times as effectively compared with transmission though the air. What, then, is the gain in decibels produced by a stethoscope that has a sound gathering area of ${15.0 cm}^{2}$, and concentrates the sound onto two eardrums with a total area of ${0.900 cm}^{2}$ with an efficiency of 40.0%?
SOLUTION:
28.2 dB
:::

:::exercise {fs-id3291429} type=problems-exercises 
PROBLEM:
Loudspeakers can produce intense sounds with surprisingly small energy input in spite of their low efficiencies. Calculate the power input needed to produce a 90.0-dB sound intensity level for a 12.0-cm-diameter speaker that has an efficiency of 1.00%. (This value is the sound intensity level right at the speaker.)
:::

## Glossary
- {def} **intensity**: the power per unit area carried by a wave
- {def} **sound intensity level**: a unitless quantity telling you the level of the sound relative to a fixed standard
- {def} **sound pressure level**: the ratio of the pressure amplitude to a reference pressure
